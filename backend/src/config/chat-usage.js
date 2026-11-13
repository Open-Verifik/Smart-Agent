/** Collection in the shared Verifik database (or MONGODB_DB). */
const COLLECTION = "smart_check_chat_usage";

const flagOn = (value) => /^(1|true|yes)$/i.test(String(value || "").trim());

/**
 * Read at call time so a missing URI disables logging without a restart race
 * during tests, and so dotenv (loaded by src/config/index.js) is visible
 * even if this module was required first.
 */
const getChatUsageSettings = () => ({
	mongoUri: process.env.MONGODB_URI || process.env.MONGO_URI || process.env.VERIFIK_MONGODB_URI || "",
	dbName: process.env.MONGODB_DB || process.env.MONGO_DB || "",
	/** Message text is omitted unless this is explicitly enabled. */
	storeText: flagOn(process.env.CHAT_USAGE_STORE_TEXT),
	adminToken: process.env.CHAT_USAGE_ADMIN_TOKEN || "",
	jwtSecret: process.env.VERIFIK_JWT_SECRET || process.env.JWT_SECRET || "",
	collection: COLLECTION,
});

module.exports = {
	COLLECTION,
	getChatUsageSettings,
};
