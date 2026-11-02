const { resolveDatabase } = require("../db/mongo");
const { getChatUsageSettings } = require("../config/chat-usage");
const { buildUsageDocuments, buildWeeklyUsagePipeline } = require("../utils/chat-usage.util");

/**
 * Fire-and-forget Smart Check chat usage.
 *
 * Each chat turn writes two documents (user, then assistant) and never
 * includes message text unless CHAT_USAGE_STORE_TEXT is enabled.
 *
 * Indexes: { clientId: 1, createdAt: -1 }, { conversationId: 1 }, { createdAt: -1 }.
 *
 * Weekly usage (mongosh), last 8 weeks:
 *
 *   const from = new Date(Date.now() - 8 * 7 * 24 * 60 * 60 * 1000);
 *   const to = new Date();
 *   db.smart_check_chat_usage.aggregate([
 *     { $match: { source: "smart_check_chat", createdAt: { $gte: from, $lt: to } } },
 *     { $group: {
 *         _id: { week: { $dateToString: { format: "%G-W%V", date: "$createdAt", timezone: "UTC" } } },
 *         messages: { $sum: 1 },
 *         conversationIds: { $addToSet: "$conversationId" },
 *         clientIds: { $addToSet: "$clientId" },
 *         walletAddresses: { $addToSet: "$walletAddress" },
 *         lookups: { $sum: { $cond: [{ $eq: ["$ranLookup", true] }, 1, 0] } },
 *         successfulLookups: { $sum: { $cond: [{ $and: [{ $eq: ["$ranLookup", true] }, { $eq: ["$success", true] }] }, 1, 0] } },
 *         creditCost: { $sum: { $ifNull: ["$creditCost", 0] } }
 *     } },
 *     { $project: {
 *         _id: 0,
 *         week: "$_id.week",
 *         messages: 1,
 *         conversations: { $size: { $filter: { input: "$conversationIds", as: "id", cond: { $and: [{ $ne: ["$$id", null] }, { $ne: ["$$id", ""] }] } } } },
 *         uniqueClients: { $size: { $filter: { input: "$clientIds", as: "id", cond: { $and: [{ $ne: ["$$id", null] }, { $ne: ["$$id", ""] }] } } } },
 *         uniqueWallets: { $size: { $filter: { input: "$walletAddresses", as: "id", cond: { $and: [{ $ne: ["$$id", null] }, { $ne: ["$$id", ""] }] } } } },
 *         lookups: 1,
 *         successfulLookups: 1,
 *         creditCost: 1
 *     } },
 *     { $sort: { week: 1 } }
 *   ]);
 *
 * `week` is an ISO week (`2026-W44`). `messages` counts user and assistant
 * rows. `lookups` counts assistant rows that called a Verifik endpoint.
 */
const USAGE_INDEXES = [
	{ key: { clientId: 1, createdAt: -1 }, name: "clientId_1_createdAt_-1" },
	{ key: { conversationId: 1 }, name: "conversationId_1" },
	{ key: { createdAt: -1 }, name: "createdAt_-1" },
];

/** @type {import("mongodb").Collection|null} */
let collectionOverride = null;
/** @type {Promise<unknown>|null} */
let indexesPromise = null;
const inFlight = new Set();
let lastWarnAt = 0;
let warnedUnconfigured = false;

const setCollectionForTests = (collection) => {
	collectionOverride = collection;
	indexesPromise = null;
};

const resetForTests = () => {
	collectionOverride = null;
	indexesPromise = null;
	warnedUnconfigured = false;
	lastWarnAt = 0;
};

const warnWriteFailure = (error) => {
	const now = Date.now();
	if (now - lastWarnAt < 60_000) return;
	lastWarnAt = now;
	const code = error && (error.code || error.name) ? error.code || error.name : "unknown";
	console.warn("[chat-usage] write failed:", code);
};

/**
 * @param {import("mongodb").Collection} collection
 */
const ensureUsageIndexes = async (collection) => {
	if (!indexesPromise) {
		indexesPromise = Promise.all(USAGE_INDEXES.map((index) => collection.createIndex(index.key, { name: index.name }))).catch(
			(error) => {
				indexesPromise = null;
				throw error;
			},
		);
	}
	return indexesPromise;
};

const getCollection = async () => {
	if (collectionOverride) return collectionOverride;
	const settings = getChatUsageSettings();
	const db = await resolveDatabase();
	if (!db) return null;
	return db.collection(settings.collection);
};

const writeDocs = async (docs) => {
	const collection = await getCollection();
	if (!collection) {
		if (!warnedUnconfigured) {
			warnedUnconfigured = true;
			console.warn("[chat-usage] MONGODB_URI is not set; chat usage records are not being stored.");
		}
		return;
	}
	await ensureUsageIndexes(collection);
	await collection.insertMany(docs, { ordered: false });
};

const enqueueWrite = (docs) => {
	setImmediate(() => {
		const job = writeDocs(docs).catch((error) => warnWriteFailure(error));
		inFlight.add(job);
		job.finally(() => inFlight.delete(job));
	});
};

/** Waits until background writes scheduled so far have settled. Tests only. */
const flushForTests = async () => {
	await new Promise((resolve) => setImmediate(resolve));
	while (inFlight.size) {
		await Promise.all([...inFlight]);
	}
};

/**
 * Queue a user row and an assistant row. Returns immediately.
 * A logging failure is swallowed and never rejects.
 * @param {object} input
 */
const recordChatExchange = (input = {}) => {
	try {
		const settings = getChatUsageSettings();
		const docs = buildUsageDocuments({ ...input, storeText: settings.storeText });
		if (!docs.length) return;
		enqueueWrite(docs);
	} catch (error) {
		warnWriteFailure(error);
	}
};

/**
 * @param {number} weeks
 */
const queryWeekly = async (weeks = 8) => {
	const settings = getChatUsageSettings();
	const requested = Number(weeks);
	const safeWeeks = Number.isFinite(requested) ? Math.min(Math.max(requested, 1), 52) : 8;
	const collection = await getCollection();
	if (!collection) {
		const error = new Error("Chat usage database is not configured");
		error.code = "CHAT_USAGE_UNCONFIGURED";
		throw error;
	}
	const to = new Date();
	const from = new Date(to.getTime() - safeWeeks * 7 * 24 * 60 * 60 * 1000);
	const rows = await collection.aggregate(buildWeeklyUsagePipeline(from, to)).toArray();
	return {
		collection: settings.collection,
		from: from.toISOString(),
		to: to.toISOString(),
		weeks: rows,
	};
};

module.exports = {
	USAGE_INDEXES,
	setCollectionForTests,
	resetForTests,
	ensureUsageIndexes,
	recordChatExchange,
	queryWeekly,
	flushForTests,
};
