// AgentVault test v3 — skip wrap (WETH already exists), just approve -> deposit -> trade
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

const VAULT = "0xee69662c1b09263749b7f9b64fcb44ee159ec40f";
const WETH = "0x4200000000000000000000000000000000000006";
const SATL = "0x852E896161931bB9f785bF75365927e70f47B988";

const erc20Abi = parseAbi(["function approve(address,uint256)", "function balanceOf(address) view returns (uint256)"]);
const vaultAbi = parseAbi([
  "function deposit(address,uint256)",
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

  const wethBefore = await client.readContract({ address: WETH, abi: erc20Abi, functionName: "balanceOf", args: [acc.address] });
  console.log("Deployer WETH:", (Number(wethBefore)/1e18).toFixed(6));

  await step("Approve 0.002 WETH to vault", async () => {
    const h = await wallet.writeContract({ address: WETH, abi: erc20Abi, functionName: "approve", args: [VAULT, parseEther("0.002")] });
    await client.waitForTransactionReceipt({ hash: h });
    return h;
  });

  await step("Deposit 0.002 WETH into vault", async () => {
    const h = await wallet.writeContract({ address: VAULT, abi: vaultAbi, functionName: "deposit", args: [WETH, parseEther("0.002")] });
    await client.waitForTransactionReceipt({ hash: h });
    return h;
  });

  await step("Trade 0.001 WETH -> SATL (buy)", async () => {
    const h = await wallet.writeContract({ address: VAULT, abi: vaultAbi, functionName: "trade", args: [acc.address, WETH, SATL, 3000, parseEther("0.001"), 0n] });
    await client.waitForTransactionReceipt({ hash: h });
    return h;
  });

  const wethBal = await client.readContract({ address: VAULT, abi: vaultAbi, functionName: "balances", args: [acc.address, WETH] });
  const satlBal = await client.readContract({ address: VAULT, abi: vaultAbi, functionName: "balances", args: [acc.address, SATL] });
  console.log("\nVault balances:");
  console.log("  WETH:", (Number(wethBal)/1e18).toFixed(6));
  console.log("  SATL:", (Number(satlBal)/1e18).toFixed(6));
})().catch((e) => { console.error("FATAL:", e.shortMessage || e.message); process.exit(1); });
