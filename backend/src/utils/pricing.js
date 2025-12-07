const axios = require("axios");

const instance = axios.create({ timeout: 5000 });

/**
 * Get Real-time Price from Binance US
 * @param {string} symbol
 */
const getTickerPrice = async (symbol) => {
	try {
		const url = `https://api.binance.us/api/v3/ticker/price?symbol=${symbol}USDT`;
		const { data } = await instance.get(url);
		return parseFloat(data.price);
	} catch (error) {
		console.error(`[Pricing] Failed to fetch price for ${symbol}:`, error.message);
		// Fallback prices (approximate) to ensure system doesn't halt
		if (symbol === "AVAX") return 40.0;
		return 0;
	}
};

module.exports = {
	getAvaxPrice: () => getTickerPrice("AVAX"),
};
