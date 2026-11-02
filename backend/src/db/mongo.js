const { MongoClient } = require("mongodb");
const { getChatUsageSettings } = require("../config/chat-usage");

/**
 * One long-running Koa process. Usage logging is a side write (two inserts
 * per chat turn) and is never awaited by the request, so the pool stays
 * small. The driver default (100) would open far more sockets than this
 * logger needs against the shared Verifik cluster. Short timeouts let a
 * down database fail the background write instead of hanging it.
 */
const CLIENT_OPTIONS = {
	maxPoolSize: 5,
	minPoolSize: 0,
	serverSelectionTimeoutMS: 2000,
	connectTimeoutMS: 2000,
	socketTimeoutMS: 5000,
};

/** @type {Map<string, Promise<import("mongodb").MongoClient>>} */
const clients = new Map();

/**
 * Database name from a mongodb:// or mongodb+srv:// URI path.
 * @param {string} uri
 * @returns {string}
 */
const databaseNameFromUri = (uri) => {
	if (!uri || typeof uri !== "string") return "";
	try {
		const normalized = uri.replace(/^mongodb(\+srv)?:\/\//, "https://");
		const parsed = new URL(normalized);
		return decodeURIComponent(parsed.pathname.replace(/^\//, "").split("/")[0] || "");
	} catch {
		return "";
	}
};

/**
 * @param {string} uri
 * @returns {Promise<import("mongodb").MongoClient>}
 */
const getClient = (uri) => {
	const existing = clients.get(uri);
	if (existing) return existing;

	const client = new MongoClient(uri, CLIENT_OPTIONS);
	const connecting = client.connect().catch((error) => {
		clients.delete(uri);
		throw error;
	});
	clients.set(uri, connecting);
	return connecting;
};

/**
 * Shared database for chat usage. Null when no URI is configured.
 * @returns {Promise<import("mongodb").Db|null>}
 */
const resolveDatabase = async () => {
	const settings = getChatUsageSettings();
	if (!settings.mongoUri) return null;

	const name = settings.dbName || databaseNameFromUri(settings.mongoUri);
	if (!name) {
		const error = new Error("MongoDB database name is missing. Set MONGODB_DB or include a database in the URI.");
		error.code = "CHAT_USAGE_UNCONFIGURED";
		throw error;
	}

	const client = await getClient(settings.mongoUri);
	return client.db(name);
};

const resetClientsForTests = async () => {
	const pending = [...clients.values()];
	clients.clear();
	await Promise.all(
		pending.map(async (promise) => {
			try {
				const client = await promise;
				await client.close();
			} catch {
				// The connection never succeeded.
			}
		}),
	);
};

module.exports = {
	CLIENT_OPTIONS,
	databaseNameFromUri,
	resolveDatabase,
	resetClientsForTests,
};
