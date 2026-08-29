// AgentVault v2 test: withdraw old -> deposit new -> trade
const fs = require("fs");
const { createWalletClient, createPublicClient, http, parseAbi, parseEther } = require("viem");
const { privateKeyToAccount } = require("viem/accounts");
const { base } = require("viem/chains");

try {
  const envFile = fs.readFileSync("/opt/mirrorbook/.env", "utf-8");
  for (const line of envFile.split("\n")) {
    const idx = line.indexOf("=");
    if (idx > 0 && !line.trim().startsWith("#")) {
      const k = line.slice(0, idx).trim();
      const v = line.slice(idx + 1).trim();
      if (k === "DEPLOYER_PK" && !process.env[k]) process.env[k] = v;
    }
  }
} catch (e) { console.log("No .env"); }

const DEPLOYER_PK = process.env.DEPLOYER_PK;
if (!DEPLOYER_PK) { console.error("DEPLOYER_PK not found"); process.exit(1); }
const RPC = "https://1rpc.io/base";

const acc = privateKeyToAccount(DEPLOYER_PK.startsWith("0x") ? DEPLOYER_PK : `0x${DEPLOYER_PK}`);
const client = createPublicClient({ chain: base, transport: http(RPC) });
const wallet = createWalletClient({ chain: base, transport: http(RPC), account: acc });

const OLD_VAULT = "0xee69662c1b09263749b7f9b64fcb44ee159ec40f";
const VAULT = "0xd65b9a49b8f89bdfb7639e417757d38d9df174f1"; // v2
const WETH = "0x4200000000000000000000000000000000000006";
const SATL = "0x852E896161931bB9f785bF75365927e70f47B988";

const erc20Abi = parseAbi(["function approve(address,uint256) returns (bool)", "function balanceOf(address) view returns (uint256)"]);
const vaultAbi = parseAbi([
  "function deposit(address,uint256)",
  "function withdraw(address,uint256)",
  "function trade(address,address,address,uint24,uint256,uint256)",
  "function balances(address,address) view returns (uint256)",
]);

async function step(name, fn) {
  try {
    const r = await fn();
    console.log("OK  ", name, r ? "-> " + r : "");
  } catch (e) {
    console.error("FAIL", name, "->", e.shortMessage || e.message);
    process.exit(1);
  }
}

(async () => {
  console.log("Deployer:", acc.address);

  // 1. Withdraw 0.002 WETH from old vault (if any)
  const oldBal = await client.readContract({ address: OLD_VAULT, abi: vaultAbi, functionName: "balances", args: [acc.address, WETH] });
  if (oldBal > 0n) {
    await step("Withdraw from old vault", async () => {
      const h = await wallet.writeContract({ address: OLD_VAULT, abi: vaultAbi, functionName: "withdraw", args: [WETH, oldBal] });
      await client.waitForTransactionReceipt({ hash: h });
      return h;
    });
  }

  const wethNow = await client.readContract({ address: WETH, abi: erc20Abi, functionName: "balanceOf", args: [acc.address] });
  console.log("Deployer WETH:", (Number(wethNow)/1e18).toFixed(6));

  // 2. Approve + deposit to new vault
  await step("Approve WETH to new vault", async () => {
    const h = await wallet.writeContract({ address: WETH, abi: erc20Abi, functionName: "approve", args: [VAULT, wethNow] });
    await client.waitForTransactionReceipt({ hash: h });
    return h;
  });
  await step("Deposit WETH to new vault", async () => {
    const h = await wallet.writeContract({ address: VAULT, abi: vaultAbi, functionName: "deposit", args: [WETH, wethNow] });
    await client.waitForTransactionReceipt({ hash: h });
    return h;
  });

  // 3. Trade 0.001 WETH -> SATL (v2 trade function)
  await step("Trade 0.001 WETH -> SATL", async () => {
    const h = await wallet.writeContract({ address: VAULT, abi: vaultAbi, functionName: "trade", args: [acc.address, WETH, SATL, 3000, parseEther("0.001"), 0n] });
    await client.waitForTransactionReceipt({ hash: h });
    return h;
  });

  // 4. Check balances
  const wethBal = await client.readContract({ address: VAULT, abi: vaultAbi, functionName: "balances", args: [acc.address, WETH] });
  const satlBal = await client.readContract({ address: VAULT, abi: vaultAbi, functionName: "balances", args: [acc.address, SATL] });
  console.log("\nVault v2 balances:");
  console.log("  WETH:", (Number(wethBal)/1e18).toFixed(6));
  console.log("  SATL:", (Number(satlBal)/1e18).toFixed(6));
})().catch((e) => { console.error("FATAL:", e.shortMessage || e.message); process.exit(1); });
