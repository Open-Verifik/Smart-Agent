const { ethers } = require("ethers");
const config = require("../src/config");
const { getAvaxPrice } = require("../src/utils/pricing");

/**
 * Script to fund a wallet with VKA tokens and a small amount of AVAX for gas.
 *
 * Usage:
 *   node scripts/fund-wallet.js --to <ADDRESS> --amount <VKA_AMOUNT>
 *
 * Example:
 *   node scripts/fund-wallet.js --to 0x123... --amount 10
 */

async function main() {
    // Parse args
    const args = process.argv.slice(2);
    let toAddress = null;
    let vkaAmount = "10"; // Default 10 VKA

    for (let i = 0; i < args.length; i++) {
        if (args[i] === "--to") toAddress = args[i + 1];
        if (args[i] === "--amount") vkaAmount = args[i + 1];
    }

    if (!toAddress) {
        console.error("❌ Error: Missing --to <ADDRESS>");
        process.exit(1);
    }

    // Config
    const rpcUrl = config.x402.rpcUrl;
    const pk = config.x402.walletPrivateKey || process.env.PRIVATE_KEY;
    const vkaContractAddress = process.env.VKA_CONTRACT_ADDRESS || "0x8fc4b00689812f449723CB473E0A7C060b10eD3f";

    if (!pk) {
        console.error("❌ Error: Private key not found in .env");
        process.exit(1);
    }

    // Setup Provider & Wallet
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    let wallet;
    if (pk.includes(" ")) {
        wallet = ethers.HDNodeWallet.fromPhrase(pk).connect(provider);
    } else {
        wallet = new ethers.Wallet(pk, provider);
    }

    console.log(`\n💰 Funding Wallet Action`);
    console.log(`-----------------------------------`);
    console.log(`From:   ${wallet.address}`);
    console.log(`To:     ${toAddress}`);
    console.log(`VKA:    ${vkaAmount}`);
    console.log(`AVAX:   $0.10 USD worth`);
    console.log(`-----------------------------------\n`);

    // 1. Calculate AVAX Amount ($0.10 USD)
    const avaxPrice = await getAvaxPrice();
    console.log(`Current AVAX Price: $${avaxPrice}`);

    // Calculate amount: 0.10 / price
    const usdAmount = 0.1;
    const avaxAmountFloat = usdAmount / avaxPrice;

    // Add a bit of buffer/rounding or just precise
    const avaxAmountWei = ethers.parseEther(avaxAmountFloat.toFixed(18));

    console.log(`Sending ${ethers.formatEther(avaxAmountWei)} AVAX (~$${usdAmount})...`);

    // 2. Send AVAX
    try {
        const txAvax = await wallet.sendTransaction({
            to: toAddress,
            value: avaxAmountWei,
        });
        console.log(`✅ AVAX Sent! TX: ${txAvax.hash}`);
        await txAvax.wait();
    } catch (error) {
        console.error("❌ Failed to send AVAX:", error.message);
        return;
    }

    // 3. Send VKA
    try {
        const vkaAbi = [
            "function transfer(address to, uint256 amount) public returns (bool)",
            "function decimals() view returns (uint8)",
            "function symbol() view returns (string)",
        ];
        const tokenContract = new ethers.Contract(vkaContractAddress, vkaAbi, wallet);

        const decimals = await tokenContract.decimals();
        const symbol = await tokenContract.symbol();
        const amountWei = ethers.parseUnits(vkaAmount.toString(), decimals);

        console.log(`Sending ${vkaAmount} ${symbol}...`);

        const txToken = await tokenContract.transfer(toAddress, amountWei);
        console.log(`✅ Tokens Sent! TX: ${txToken.hash}`);
        await txToken.wait();
    } catch (error) {
        console.error("❌ Failed to send Tokens:", error.message);
    }

    console.log("\n✨ Funding Complete!");
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
