// AgentVault test: wrap ETH -> WETH, deposit, trade (buy SATL), check balances
const fs = require("fs");
const { createWalletClient, createPublicClient, http, parseAbi, parseEther } = require("viem");
const { privateKeyToAccount } = require("viem/accounts");
const { base } = require("viem/chains");

// Load /opt/mirrorbook/.env
try {
  const envFile = fs.readFileSync("/opt/mirrorbook/.env", "utf-8");
  for (const line of envFile.split("\n")) {
    const idx = line.indexOf("=");
    if (idx > 0 && !line.trim().startsWith("#")) {
      const k = line.slice(0, idx).trim();
      const v = line.slice(idx + 1).trim();
      if (k && !process.env[k]) process.env[k] = v;
    }
  }
} catch (e) { console.log("No .env found"); }

const DEPLOYER_PK = process.env.DEPLOYER_PK;
const RPC = process.env.RPC_8453 || "https://1rpc.io/base";
if (!DEPLOYER_PK) { console.error("DEPLOYER_PK not found"); process.exit(1); }

const acc = privateKeyToAccount(DEPLOYER_PK.startsWith("0x") ? DEPLOYER_PK : `0x${DEPLOYER_PK}`);
const client = createPublicClient({ chain: base, transport: http(RPC) });
const wallet = createWalletClient({ chain: base, transport: http(RPC), account: acc });

const VAULT = "0xee69662c1b09263749b7f9b64fcb44ee159ec40f";
const WETH = "0x4200000000000000000000000000000000000006";
const SATL = "0x852E896161931bB9f785bF75365927e70f47B988";

const wethAbi = parseAbi(["function deposit() payable"]);
const erc20Abi = parseAbi(["function approve(address,uint256)", "function balanceOf(address) view returns (uint256)"]);
const vaultAbi = parseAbi([
  "function deposit(address,uint256)",
  "function trade(address,address,address,uint24,uint256,uint256)",
  "function balances(address,address) view returns (uint256)",
]);

(async () => {
  console.log("Deployer:", acc.address);

  // 1. Wrap 0.002 ETH -> WETH
  console.log("\n1. Wrap 0.002 ETH -> WETH...");
  const h1 = await wallet.sendTransaction({ to: WETH, abi: wethAbi, functionName: "deposit", value: parseEther("0.002") });
  await client.waitForTransactionReceipt({ hash: h1 }).catch(() => {});
  console.log("   wrapped");

  // 2. Approve WETH to vault
  console.log("2. Approve WETH to vault...");
  const h2 = await wallet.writeContract({ address: WETH, abi: erc20Abi, functionName: "approve", args: [VAULT, parseEther("0.002")] });
  await client.waitForTransactionReceipt({ hash: h2 }).catch(() => {});
  console.log("   approved");

  // 3. Deposit WETH into vault
  console.log("3. Deposit 0.002 WETH into vault...");
  const h3 = await wallet.writeContract({ address: VAULT, abi: vaultAbi, functionName: "deposit", args: [WETH, parseEther("0.002")] });
  await client.waitForTransactionReceipt({ hash: h3 }).catch(() => {});
  console.log("   deposited");

  // 4. Agent trades 0.001 WETH -> SATL (buy SATL)
  console.log("4. Trade 0.001 WETH -> SATL (buy)...");
  const h4 = await wallet.writeContract({ address: VAULT, abi: vaultAbi, functionName: "trade", args: [acc.address, WETH, SATL, 3000, parseEther("0.001"), 0n] });
  await client.waitForTransactionReceipt({ hash: h4 }).catch(() => {});
  console.log("   traded");

  // 5. Check balances in vault
  console.log("\n5. Vault balances:");
  const wethBal = await client.readContract({ address: VAULT, abi: vaultAbi, functionName: "balances", args: [acc.address, WETH] });
  const satlBal = await client.readContract({ address: VAULT, abi: vaultAbi, functionName: "balances", args: [acc.address, SATL] });
  console.log("   WETH:", (Number(wethBal)/1e18).toFixed(6));
  console.log("   SATL:", (Number(satlBal)/1e18).toFixed(6));

  // 6. Check pool price changed
  const pool = "0x3AA884648f1147c14391ce148D4939A8F554B07B";
  const poolAbi = parseAbi(["function slot0() view returns (uint160 sqrtPriceX96, int24 tick, uint16, uint16, uint16, uint8, bool)"]);
  const slot0 = await client.readContract({ address: pool, abi: poolAbi, functionName: "slot0" });
  const price = Math.pow(1.0001, slot0[1]);
  console.log("   Pool price (SATL/WETH):", price.toFixed(8));
})();
