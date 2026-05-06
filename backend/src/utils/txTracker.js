const fs = require("fs");
const path = require("path");

const DATA_DIR = path.resolve(__dirname, "../../data");
const FILE_PATH = path.join(DATA_DIR, "processed_txs.json");

if (!fs.existsSync(DATA_DIR)) {
	fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(FILE_PATH)) {
	fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

/**
 * Compose a chain-scoped replay key so the same tx hash on two chains
 * cannot be confused. Backwards-compatible: when chainId is missing, the
 * raw hash is used (matches pre-multichain entries already on disk).
 *
 * @param {string} txHash
 * @param {number|string} [chainId]
 * @returns {string}
 */
const buildKey = (txHash, chainId) => {
	if (!txHash) return "";
	if (chainId === undefined || chainId === null || chainId === "") return txHash;
	return `${chainId}:${txHash}`;
};

const readEntries = () => {
	try {
		const content = fs.readFileSync(FILE_PATH, "utf8");
		return JSON.parse(content || "[]");
	} catch (e) {
		console.error("Error reading processed_txs:", e);
		return [];
	}
};

/**
 * @param {string} txHash
 * @param {number|string} [chainId]
 */
const isUsed = (txHash, chainId) => {
	const data = readEntries();
	const key = buildKey(txHash, chainId);
	if (data.includes(key)) return true;
	// Backwards compat: legacy entries stored without chain prefix.
	if (chainId !== undefined && data.includes(txHash)) return true;
	return false;
};

/**
 * @param {string} txHash
 * @param {number|string} [chainId]
 */
const markUsed = (txHash, chainId) => {
	try {
		const data = readEntries();
		const key = buildKey(txHash, chainId);
		if (key && !data.includes(key)) {
			data.push(key);
			fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
		}
	} catch (e) {
		console.error("Failed to mark tx used:", e);
	}
};

module.exports = { isUsed, markUsed };
