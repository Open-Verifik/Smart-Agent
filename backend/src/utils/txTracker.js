const fs = require("fs");
const path = require("path");

const DATA_DIR = path.resolve(__dirname, "../../data");
const FILE_PATH = path.join(DATA_DIR, "processed_txs.json");

// Ensure dir exists
if (!fs.existsSync(DATA_DIR)) {
	fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure file exists
if (!fs.existsSync(FILE_PATH)) {
	fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

const isUsed = (txHash) => {
	try {
		const content = fs.readFileSync(FILE_PATH, "utf8");
		const data = JSON.parse(content || "[]");
		return data.includes(txHash);
	} catch (e) {
		console.error("Error reading processed_txs:", e);
		return false;
	}
};

const markUsed = (txHash) => {
	try {
		const content = fs.readFileSync(FILE_PATH, "utf8");
		const data = JSON.parse(content || "[]");
		if (!data.includes(txHash)) {
			data.push(txHash);
			fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
		}
	} catch (e) {
		console.error("Failed to mark tx used:", e);
	}
};

module.exports = { isUsed, markUsed };
