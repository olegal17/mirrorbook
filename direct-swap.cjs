// Direct swap test: wrap ETH -> WETH -> swap via SwapRouter (bypasses the vault)
// This isolates whether the Uniswap swap itself works on Base.
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

const WETH = "0x4200000000000000000000000000000000000006";
const SATL = "0x852E896161931bB9f785bF75365927e70f47B988";
const ROUTER = "0x2626664c2603336E57B271c5C0b26F421741e481";

async function step(name, fn) {
  try {
    const r = await fn();
    console.log("OK  ", name, r ? "-> " + r : "");
  } catch (e) {
    console.error("FAIL", name, "->", e.shortMessage || e.message);
    if (e.details) console.error("  details:", JSON.stringify(e.details).slice(0, 200));
    process.exit(1);
  }
}

(async () => {
  console.log("Deployer:", acc.address);
  const eth = await client.getBalance({ address: acc.address });
  console.log("ETH:", (Number(eth)/1e18).toFixed(6));

  await step("Wrap 0.0005 ETH -> WETH", async () => {
    const h = await wallet.sendTransaction({ to: WETH, abi: parseAbi(["function deposit() payable"]), functionName: "deposit", value: parseEther("0.0005") });
    await client.waitForTransactionReceipt({ hash: h });
    return h;
  });

  await step("Approve WETH to router", async () => {
    const h = await wallet.writeContract({ address: WETH, abi: parseAbi(["function approve(address,uint256) returns (bool)"]), functionName: "approve", args: [ROUTER, parseEther("0.0005")] });
    await client.waitForTransactionReceipt({ hash: h });
    return h;
  });

  await step("Direct swap 0.0005 WETH -> SATL", async () => {
    const routerAbi = parseAbi(["function exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160)) payable returns (uint256)"]);
    const h = await wallet.writeContract({ address: ROUTER, abi: routerAbi, functionName: "exactInputSingle",
      args: [{ tokenIn: WETH, tokenOut: SATL, fee: 3000, recipient: acc.address, deadline: Math.floor(Date.now()/1000)+600, amountIn: parseEther("0.0005"), amountOutMinimum: 0n, sqrtPriceLimitX96: 0n }] });
    await client.waitForTransactionReceipt({ hash: h });
    return h;
  });

  const satlBal = await client.readContract({ address: SATL, abi: parseAbi(["function balanceOf(address) view returns (uint256)"]), functionName: "balanceOf", args: [acc.address] });
  console.log("Deployer SATL balance:", (Number(satlBal)/1e18).toFixed(6));
})().catch((e) => { console.error("FATAL:", e.shortMessage || e.message); process.exit(1); });
