// Direct swap test: MM wallet -> SwapRouter (WETH -> SATL), to isolate pool vs vault
const { createWalletClient, createPublicClient, http, parseAbi, parseEther } = require("viem");
const { privateKeyToAccount } = require("viem/accounts");
const { base } = require("viem/chains");

const MM_KEY = "0xa978d50073a7369a752893dd4c0d9fdc674587d1a426567169790032a21247af";
const RPC = "https://1rpc.io/base";

const acc = privateKeyToAccount(MM_KEY);
const client = createPublicClient({ chain: base, transport: http(RPC) });
const wallet = createWalletClient({ chain: base, transport: http(RPC), account: acc });

const WETH = "0x4200000000000000000000000000000000000006";
const SATL = "0x852E896161931bB9f785bF75365927e70f47B988";
const ROUTER = "0x2626664c2603336E57B271c5C0b26F421741e481";

(async () => {
  console.log("MM:", acc.address);

  // 1. Approve
  const approveAbi = parseAbi(["function approve(address,uint256) returns (bool)"]);
  try {
    const h = await wallet.writeContract({ address: WETH, abi: approveAbi, functionName: "approve", args: [ROUTER, parseEther("0.001")] });
    await client.waitForTransactionReceipt({ hash: h });
    console.log("Approve: OK");
  } catch (e) {
    console.log("Approve FAIL:", e.shortMessage || e.message);
    process.exit(1);
  }

  // 2. Direct swap
  const routerAbi = parseAbi(["function exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160)) payable returns (uint256)"]);
  try {
    const h = await wallet.writeContract({
      address: ROUTER, abi: routerAbi, functionName: "exactInputSingle",
      args: [[WETH, SATL, 3000, acc.address, Math.floor(Date.now()/1000)+300, parseEther("0.001"), 0n, 0n]],
    });
    await client.waitForTransactionReceipt({ hash: h });
    console.log("Direct swap: OK", h);
  } catch (e) {
    console.log("Direct swap FAIL:", e.shortMessage || e.message);
  }

  // 3. Check MM SATL balance
  const erc20 = parseAbi(["function balanceOf(address) view returns (uint256)"]);
  const satl = await client.readContract({ address: SATL, abi: erc20, functionName: "balanceOf", args: [acc.address] });
  console.log("MM SATL balance:", (Number(satl)/1e18).toFixed(6));
})();
