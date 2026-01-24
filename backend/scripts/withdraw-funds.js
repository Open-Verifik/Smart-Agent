const { ethers } = require("ethers");
const config = require("../src/config");

/**
 * Script to withdraw funds (AVAX or ERC-20) from the VerifikPayment contract.
 *
 * Usage:
 *   node scripts/withdraw-funds.js --asset [AVAX|VKA|ALL] --to [ADDRESS]
 *
 * Env:
 *   X402_WALLET_PRIVATE_KEY (Owner key)
 *   X402_CONTRACT_ADDRESS
 *   VKA_CONTRACT_ADDRESS (Optional, for VKA withdrawal)
 */

async function main() {
    // Parse args
    const args = process.argv.slice(2);
    let asset = "ALL"; // AVAX, VKA, ALL
    let toAddress = null; // Defaults to owner

    for (let i = 0; i < args.length; i++) {
        if (args[i] === "--asset") asset = args[i + 1].toUpperCase();
        if (args[i] === "--to") toAddress = args[i + 1];
    }

    // Setup Provider & Signer
    const rpcUrl = config.x402.rpcUrl;
    const provider = new ethers.JsonRpcProvider(rpcUrl);

    // Get Private Key
    const pk = config.x402.walletPrivateKey || process.env.PRIVATE_KEY;
    if (!pk) throw new Error("Missing Private Key (X402_WALLET_PRIVATE_KEY or PRIVATE_KEY)");

    let wallet;
    if (pk.includes(" ")) {
        wallet = ethers.HDNodeWallet.fromPhrase(pk).connect(provider);
    } else {
        wallet = new ethers.Wallet(pk, provider);
    }

    console.log(`Using Wallet: ${wallet.address}`);

    if (!config.x402.contractAddress) {
        throw new Error("X402_CONTRACT_ADDRESS not configured.");
    }

    const contractAddress = config.x402.contractAddress;
    console.log(`Payment Contract: ${contractAddress}`);

    // ABI
    const ABI = [
        "function withdraw() public",
        "function withdrawERC20(address tokenAddress) public",
        "function getBalance() public view returns (uint256)",
        "function owner() public view returns (address)",
    ];

    const contract = new ethers.Contract(contractAddress, ABI, wallet);

    // Verify Owner
    const owner = await contract.owner();
    if (owner.toLowerCase() !== wallet.address.toLowerCase()) {
        console.warn(`WARNING: Wallet ${wallet.address} is NOT the owner. Owner is ${owner}. Withdrawal will likely fail.`);
    }

    // 1. Withdraw AVAX
    if (asset === "AVAX" || asset === "ALL") {
        try {
            const balance = await provider.getBalance(contractAddress);
            if (balance > 0n) {
                console.log(`Withdrawing ${ethers.formatEther(balance)} AVAX...`);
                const tx = await contract.withdraw();
                console.log(`Tx sent: ${tx.hash}`);
                await tx.wait();
                console.log("AVAX Withdrawn Successfully.");
            } else {
                console.log("No AVAX to withdraw.");
            }
        } catch (e) {
            console.error("Failed to withdraw AVAX:", e.message);
        }
    }

    // 2. Withdraw VKA (or other RC20)
    if (asset === "VKA" || asset === "ALL") {
        // VKA Address
        // Check env first, then config
        const vkaAddress = process.env.VKA_CONTRACT_ADDRESS || "0x8fc4b00689812f449723CB473E0A7C060b10eD3f";

        if (vkaAddress) {
            const erc20Abi = ["function balanceOf(address) view returns (uint256)", "function symbol() view returns (string)"];
            const tokenContract = new ethers.Contract(vkaAddress, erc20Abi, provider);

            try {
                const balance = await tokenContract.balanceOf(contractAddress);
                const symbol = await tokenContract.symbol().catch(() => "TOKENS");

                if (balance > 0n) {
                    console.log(`Withdrawing ${ethers.formatEther(balance)} ${symbol}...`);
                    const tx = await contract.withdrawERC20(vkaAddress);
                    console.log(`Tx sent: ${tx.hash}`);
                    await tx.wait();
                    console.log(`${symbol} Withdrawn Successfully.`);
                } else {
                    console.log(`No ${symbol} to withdraw.`);
                }
            } catch (e) {
                console.error("Failed to withdraw ERC20:", e.message);
            }
        } else {
            console.warn("VKA_CONTRACT_ADDRESS not found, skipping token withdrawal.");
        }
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
