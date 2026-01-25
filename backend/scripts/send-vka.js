const { ethers } = require("ethers");
require("dotenv").config();

async function main() {
    const to = process.argv[2] || "0x8318a2576b56f5a16d3C5F94229Ca6DE226C10cf";
    const amount = process.argv[3] || "10";

    const rpcUrl = process.env.AVALANCHE_RPC_URL || "https://api.avax.network/ext/bc/C/rpc";
    const provider = new ethers.JsonRpcProvider(rpcUrl);

    const pk = process.env.PRIVATE_KEY;
    if (!pk) throw new Error("PRIVATE_KEY not found in .env");

    const wallet = new ethers.Wallet(pk, provider);
    const vkaAddress = process.env.VKA_CONTRACT_ADDRESS || "0x8fc4b00689812f449723CB473E0A7C060b10eD3f";

    console.log(`Sending ${amount} VKA to ${to}...`);
    console.log(`Using wallet: ${wallet.address}`);

    const abi = ["function transfer(address to, uint256 amount) public returns (bool)", "function decimals() view returns (uint8)"];

    const contract = new ethers.Contract(vkaAddress, abi, wallet);
    const decimals = await contract.decimals();
    const amountUnits = ethers.parseUnits(amount, decimals);

    const tx = await contract.transfer(to, amountUnits);
    console.log(`Transaction sent! Hash: ${tx.hash}`);

    const receipt = await tx.wait();
    console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
}

main().catch(console.error);
