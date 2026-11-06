const test = require("node:test");
const describe = test.describe;
const assert = require("node:assert/strict");
const repository = require("./chat-usage.repository");

const uriKeys = ["MONGODB_URI", "MONGO_URI", "VERIFIK_MONGODB_URI", "CHAT_USAGE_STORE_TEXT"];

const snapshotEnv = () => {
	const saved = {};
	for (const key of uriKeys) saved[key] = process.env[key];
	return saved;
};

const restoreEnv = (saved) => {
	for (const key of uriKeys) {
		if (saved[key] === undefined) delete process.env[key];
		else process.env[key] = saved[key];
	}
};

const clearMongoEnv = () => {
	for (const key of uriKeys) delete process.env[key];
};

describe("chat usage repository", { concurrency: false }, () => {
test.beforeEach(() => {
	repository.resetForTests();
	clearMongoEnv();
});

test.afterEach(async () => {
	await repository.flushForTests();
	repository.resetForTests();
});

test("recordChatExchange returns before the write and survives a database failure", async () => {
	let inserted = null;
	let release;
	const gate = new Promise((resolve) => {
		release = resolve;
	});
	repository.setCollectionForTests({
		createIndex: async () => "ok",
		insertMany: async (docs) => {
			inserted = docs;
			await gate;
		},
	});

	const started = Date.now();
	repository.recordChatExchange({
		mode: "credits",
		conversationId: "conv-1",
		userContent: "document 999",
		usage: { ranLookup: false, endpoints: [], success: null, creditCost: null, status: null },
	});
	assert.ok(Date.now() - started < 20);
	assert.equal(inserted, null);

	release();
	await repository.flushForTests();
	assert.equal(inserted.length, 2);
	assert.equal(JSON.stringify(inserted).includes("document 999"), false);

	repository.resetForTests();
	repository.setCollectionForTests({
		createIndex: async () => "ok",
		insertMany: async () => {
			throw Object.assign(new Error("connection string leaked mongodb://secret"), { code: "ETIMEDOUT" });
		},
	});
	const warnings = [];
	const original = console.warn;
	console.warn = (message, extra) => warnings.push(`${message} ${extra || ""}`);
	try {
		repository.recordChatExchange({ conversationId: "conv-2", userContent: "secret text" });
		await repository.flushForTests();
	} finally {
		console.warn = original;
	}
	assert.equal(warnings.length, 1);
	assert.match(warnings[0], /ETIMEDOUT/);
	assert.equal(warnings[0].includes("secret"), false);
	assert.equal(warnings[0].includes("mongodb://"), false);
});

test("writes create the clientId and conversationId indexes", async () => {
	const indexes = [];
	repository.setCollectionForTests({
		createIndex: async (key, options) => {
			indexes.push({ key, name: options.name });
			return options.name;
		},
		insertMany: async () => ({ insertedCount: 2 }),
	});

	repository.recordChatExchange({ conversationId: "conv-9", mode: "x402" });
	await repository.flushForTests();

	assert.deepEqual(
		indexes.map((index) => index.name),
		["clientId_1_createdAt_-1", "conversationId_1", "createdAt_-1"],
	);
	assert.deepEqual(indexes[0].key, { clientId: 1, createdAt: -1 });
	assert.deepEqual(indexes[1].key, { conversationId: 1 });
});

test("queryWeekly uses the aggregation pipeline when a collection is available", async () => {
	let pipeline = null;
	repository.setCollectionForTests({
		aggregate: (stages) => {
			pipeline = stages;
			return { toArray: async () => [{ week: "2026-W44", messages: 4, conversations: 1, uniqueClients: 1 }] };
		},
	});

	const result = await repository.queryWeekly(8);
	assert.equal(result.collection, "smart_check_chat_usage");
	assert.equal(result.weeks[0].messages, 4);
	assert.equal(pipeline[0].$match.source, "smart_check_chat");
	assert.ok(pipeline[0].$match.createdAt.$gte instanceof Date);
});

test("queryWeekly reports a missing database instead of querying", async () => {
	await assert.rejects(() => repository.queryWeekly(4), (error) => error.code === "CHAT_USAGE_UNCONFIGURED");
});

test("a missing Mongo URI does not throw and warns once", async () => {
	const warnings = [];
	const original = console.warn;
	console.warn = (...args) => warnings.push(args.join(" "));
	const saved = snapshotEnv();
	try {
		clearMongoEnv();
		repository.recordChatExchange({ conversationId: "conv-x", userContent: "hi" });
		repository.recordChatExchange({ conversationId: "conv-y", userContent: "hi again" });
		await repository.flushForTests();
	} finally {
		console.warn = original;
		restoreEnv(saved);
	}
	assert.equal(warnings.length, 1);
	assert.match(warnings[0], /MONGODB_URI is not set/);
});
});
