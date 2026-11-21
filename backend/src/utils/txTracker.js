const fs = require("fs");
const path = require("path");
const { getStorageDir, ensureStorageDir } = require("./storageDir");

const getDataDir = () => getStorageDir();
const getFilePath = () => path.join(getDataDir(), "processed_txs.json");
const memoryFallbackTxs = new Set();

const ensureTxFile = () => {
	const dir = ensureStorageDir();
	if (!dir) return null;
	const filePath = path.join(dir, "processed_txs.json");
	try {
		if (!fs.existsSync(filePath)) {
			fs.writeFileSync(filePath, JSON.stringify([]));
		}
		return filePath;
	} catch (err) {
		console.warn("[TxTracker] Failed to initialize tx file:", err.message);
		return null;
	}
};

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
	const filePath = getFilePath();
	if (!fs.existsSync(filePath)) return [];
	try {
		const content = fs.readFileSync(filePath, "utf8");
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
	const key = buildKey(txHash, chainId);
	if (key && memoryFallbackTxs.has(key)) return true;
	if (chainId !== undefined && txHash && memoryFallbackTxs.has(txHash)) return true;
	const data = readEntries();
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
	const key = buildKey(txHash, chainId);
	if (key) {
		memoryFallbackTxs.add(key);
	}
	try {
		const filePath = ensureTxFile();
		if (!filePath || !key) return;
		const data = readEntries();
		if (!data.includes(key)) {
			data.push(key);
			fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
		}
	} catch (e) {
		console.error("Failed to mark tx used:", e);
	}
};

module.exports = { isUsed, markUsed };
