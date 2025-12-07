const { ethers } = require("ethers");
const config = require("../config");
const { isUsed, markUsed } = require("../utils/txTracker");
const toolsManifest = require("../config/tools-manifest.json");
const { getAvaxPrice } = require("../utils/pricing");

// Initialize Provider
const provider = new ethers.JsonRpcProvider(config.x402.rpcUrl);

// Get Agent Wallet Address
let agentAddress = null;
if (config.x402.walletPrivateKey) {
	try {
		const key = config.x402.walletPrivateKey.trim();
		if (key.includes(" ")) {
			agentAddress = ethers.HDNodeWallet.fromPhrase(key).address;
		} else {
			agentAddress = new ethers.Wallet(key).address;
		}
		console.log(`[x402] Agent Payment Address: ${agentAddress}`);
	} catch (e) {
		console.error("[x402] Failed to derive agent address:", e);
	}
}

module.exports = async (ctx, next) => {
	if (ctx.method === "OPTIONS") return next();

	// 1. Determine Required Price
	// Default fallback
	let requiredPriceUsd = 0.05;

	// Match tool by URL suffix
	// ctx.path e.g. /v2/co/cedula
	// tool.url e.g. http://localhost:3060/v2/co/cedula
	const matchedTool = toolsManifest.endpoints.find((t) => t.url.endsWith(ctx.path));
	if (matchedTool && typeof matchedTool.priceUsd === "number") {
		requiredPriceUsd = matchedTool.priceUsd;
	}

	// Convert to AVAX
	const avaxPriceUsd = await getAvaxPrice();
	const safeAvaxPrice = avaxPriceUsd > 0 ? avaxPriceUsd : 40.0; // Fallback to avoid div/0

	// Calculate AVAX amount
	// Calculate AVAX amount
	let requiredAvaxFloat = requiredPriceUsd / safeAvaxPrice;

	// Round UP to 5 decimals for cleaner UI and safe payment covering
	// e.g. 0.014803 -> 0.01481
	const precision = 100000; // 5 decimals
	requiredAvaxFloat = Math.ceil(requiredAvaxFloat * precision) / precision;

	const requiredAvaxStr = requiredAvaxFloat.toFixed(5);
	const requiredAmount = ethers.parseEther(requiredAvaxStr);

	// Check for Payment Header
	let paymentTx = ctx.header["x-payment-tx"];
	if (!paymentTx && ctx.header["authorization"] && ctx.header["authorization"].startsWith("L402 ")) {
		paymentTx = ctx.header["authorization"].replace("L402 ", "").trim();
	}

	if (!paymentTx) {
		ctx.status = 402;

		console.log(`[x402] 402 Payment Required for ${ctx.path}. Price: $${requiredPriceUsd} (~${ethers.formatEther(requiredAmount)} AVAX)`);

		ctx.set("WWW-Authenticate", `L402 invoice="${agentAddress}", price="${ethers.formatEther(requiredAmount)} AVAX"`);

		ctx.body = {
			error: "Payment Required",
			price: ethers.formatEther(requiredAmount) + " AVAX",
			priceUsd: requiredPriceUsd,
			wallet: agentAddress || "Server Configuration Error: No Wallet",
			details: "Please send payment to the wallet address and include the transaction hash in the 'x-payment-tx' header.",
			// Extra metadata for frontend logic
			amount: ethers.formatEther(requiredAmount),
			receiver_address: agentAddress,
		};
		return;
	}

	try {
		if (!agentAddress) {
			throw new Error("Agent wallet not configured on server.");
		}

		// Validation Logic
		console.log(`[x402] Checking if TX ${paymentTx} is used...`);
		if (isUsed(paymentTx)) {
			console.warn(`[x402] Replay attempt with TX ${paymentTx}`);
			ctx.status = 402;
			ctx.body = { error: "Payment transaction already used." };
			return;
		}
		console.log(`[x402] TX ${paymentTx} is unused. Proceeding to validation.`);

		const tx = await provider.getTransaction(paymentTx);

		if (!tx) {
			console.log(`[x402] TX ${paymentTx} not found on network.`);
			ctx.status = 402;
			ctx.body = { error: "Transaction not found on network." };
			return;
		}

		if (tx.to.toLowerCase() !== agentAddress.toLowerCase()) {
			console.log(`[x402] Recipient mismatch: ${tx.to} vs ${agentAddress}`);
			ctx.status = 402;
			ctx.body = { error: `Transaction recipient mismatch.` };
			return;
		}

		if (tx.value < requiredAmount) {
			console.log(`[x402] Insufficient amount. Received: ${ethers.formatEther(tx.value)}, Required: ${ethers.formatEther(requiredAmount)}`);
			// ... (comments)
			ctx.status = 402;
			ctx.body = {
				error: "Insufficient payment (Price may have updated)",
				received: ethers.formatEther(tx.value) + " AVAX",
				required: ethers.formatEther(requiredAmount) + " AVAX",
			};
			return;
		}

		ctx.state.payment = {
			txHash: paymentTx,
			amount: tx.value.toString(),
			sender: tx.from,
			priceUsd: requiredPriceUsd,
		};

		console.log(`[x402] Payment Validated: ${ethers.formatEther(tx.value)} AVAX for $${requiredPriceUsd} service.`);

		console.log(`[x402] Marking TX ${paymentTx} as used.`);
		markUsed(paymentTx);

		await next();
	} catch (err) {
		console.error("[x402] Validation Error:", err);
		ctx.status = 500;
		ctx.body = { error: "Payment Validation Error" };
	}
};
