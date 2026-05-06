const axios = require("axios");

const instance = axios.create({ timeout: 5000 });

/**
 * Conservative fallback prices used only when the public ticker is
 * unavailable. Keep these high enough that USD → native conversion stays
 * payable rather than under-charging.
 */
const FALLBACK_USD = {
	AVAX: 40.0,
	ETH: 3500.0,
	OKB: 50.0,
	MATIC: 0.6,
	BNB: 600.0,
};

/**
 * Get real-time USD price from Binance for a given ticker.
 * @param {string} symbol Native asset ticker (e.g. AVAX, ETH, OKB).
 * @returns {Promise<number>} USD price, or 0 when both the live request and the fallback are missing.
 */
const getTickerPrice = async (symbol) => {
	const upper = String(symbol || "").toUpperCase();
	try {
		const url = `https://api.binance.us/api/v3/ticker/price?symbol=${upper}USDT`;
		const { data } = await instance.get(url);
		const n = parseFloat(data.price);
		if (Number.isFinite(n) && n > 0) return n;
		throw new Error("invalid_price");
	} catch (error) {
		console.error(`[Pricing] Failed to fetch price for ${upper}:`, error.message);
		return FALLBACK_USD[upper] || 0;
	}
};

module.exports = {
	getTickerPrice,
	getNativePrice: getTickerPrice,
	getAvaxPrice: () => getTickerPrice("AVAX"),
};
