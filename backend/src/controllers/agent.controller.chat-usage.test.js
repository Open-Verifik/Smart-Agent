const test = require("node:test");
const describe = test.describe;
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const AgentModule = require("../modules/agent.module");
const ChatUsageRepository = require("../repositories/chat-usage.repository");
const Controller = require("./agent.controller");
const { buildLookupUsage } = require("../utils/chat-usage.util");

const DATA_DIR = path.resolve(__dirname, "../../data/conversations");
const createdIds = [];

const originalChat = AgentModule.chatWithAgent;
const originalRecord = ChatUsageRepository.recordChatExchange;

const tokenFor = (payload) => {
	const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
	return `eyJhbGciOiJub25lIn0.${body}.sig`;
};

describe("agent controller chat usage", { concurrency: false }, () => {
test.beforeEach(() => {
	delete process.env.CHAT_USAGE_STORE_TEXT;
	ChatUsageRepository.resetForTests();
	AgentModule.chatWithAgent = originalChat;
	ChatUsageRepository.recordChatExchange = originalRecord;
});

test.afterEach(async () => {
	await ChatUsageRepository.flushForTests();
	AgentModule.chatWithAgent = originalChat;
	ChatUsageRepository.recordChatExchange = originalRecord;
	ChatUsageRepository.resetForTests();
	for (const id of createdIds.splice(0)) {
		const filePath = path.join(DATA_DIR, `${id}.json`);
		if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
	}
});

const chatCtx = (body) => ({
	request: { body },
	status: 200,
	body: null,
	query: {},
});

test("an empty chat request is rejected and not logged", async () => {
	const inserted = [];
	ChatUsageRepository.setCollectionForTests({
		createIndex: async () => "ok",
		insertMany: async (docs) => inserted.push(docs),
	});
	const ctx = chatCtx({});
	await Controller.chat(ctx);
	await ChatUsageRepository.flushForTests();
	assert.equal(ctx.status, 400);
	assert.equal(inserted.length, 0);
});

test("a chat turn is logged without text and the usage field stays off the response", async () => {
	const inserted = [];
	ChatUsageRepository.setCollectionForTests({
		createIndex: async () => "ok",
		insertMany: async (docs) => {
			inserted.push(docs);
		},
	});
	AgentModule.chatWithAgent = async () => ({
		role: "assistant",
		content: "Just a question, no lookup",
		_usage: buildLookupUsage({}),
	});

	const ctx = chatCtx({
		message: "what can you do",
		mode: "credits",
		userToken: tokenFor({ clientId: "client42", _id: "user42" }),
	});
	await Controller.chat(ctx);
	await ChatUsageRepository.flushForTests();

	assert.equal(ctx.status, 200);
	assert.equal(ctx.body.conversationId.length > 0, true);
	assert.equal(Object.hasOwn(ctx.body, "_usage"), false);
	createdIds.push(ctx.body.conversationId);

	const saved = JSON.parse(fs.readFileSync(path.join(DATA_DIR, `${ctx.body.conversationId}.json`), "utf8"));
	assert.equal(JSON.stringify(saved).includes("_usage"), false);
	assert.equal(saved.messages.at(-1).content, "Just a question, no lookup");

	assert.equal(inserted.length, 1);
	const [userDoc, assistantDoc] = inserted[0];
	assert.equal(userDoc.role, "user");
	assert.equal(assistantDoc.role, "assistant");
	assert.equal(assistantDoc.ranLookup, false);
	assert.equal(userDoc.clientId, "client42");
	assert.equal(userDoc.conversationId, ctx.body.conversationId);
	assert.equal(JSON.stringify(inserted[0]).includes("what can you do"), false);
	assert.equal(JSON.stringify(inserted[0]).includes("Just a question"), false);
});

test("a lookup result records the endpoint and credit cost", async () => {
	const inserted = [];
	ChatUsageRepository.setCollectionForTests({
		createIndex: async () => "ok",
		insertMany: async (docs) => inserted.push(docs),
	});
	AgentModule.chatWithAgent = async () =>
		AgentModule.withUsage(
			{
				role: "assistant",
				content: "Tool executed successfully.",
				data: { documentNumber: "123", creditsCharged: 0.3 },
			},
			"colombia_api_identity_lookup",
			{ status: "success", data: { documentNumber: "123", creditsCharged: 0.3, priceUsd: 9 } },
		);

	const ctx = chatCtx({
		message: "cedula 123",
		mode: "x402",
		paymentWallet: "0x1111111111111111111111111111111111111111",
	});
	await Controller.chat(ctx);
	await ChatUsageRepository.flushForTests();
	createdIds.push(ctx.body.conversationId);

	const assistantDoc = inserted[0][1];
	assert.equal(assistantDoc.ranLookup, true);
	assert.equal(assistantDoc.success, true);
	assert.deepEqual(assistantDoc.endpoints, ["/v2/co/cedula"]);
	assert.equal(assistantDoc.creditCost, 0.3);
	assert.equal(assistantDoc.walletAddress, "0x1111111111111111111111111111111111111111");
	assert.equal(JSON.stringify(assistantDoc).includes("123"), false);
	assert.equal(Object.hasOwn(ctx.body, "_usage"), false);
});

test("a logging failure still returns the chat response", async () => {
	ChatUsageRepository.recordChatExchange = () => {
		throw new Error("disk full");
	};
	AgentModule.chatWithAgent = async () => ({
		role: "assistant",
		content: "hello",
		_usage: { ranLookup: false, endpoints: [], success: null, creditCost: null, status: null },
	});
	const ctx = chatCtx({ message: "hi", mode: "x402" });
	await Controller.chat(ctx);
	assert.equal(ctx.status, 200);
	assert.equal(ctx.body.content, "hello");
	createdIds.push(ctx.body.conversationId);
});

test("weekly usage is readable from the admin handler", async () => {
	ChatUsageRepository.setCollectionForTests({
		aggregate: () => ({
			toArray: async () => [{ week: "2026-W44", messages: 2, conversations: 1, uniqueClients: 1 }],
		}),
	});
	const ctx = chatCtx({});
	ctx.query = { weeks: "8" };
	await Controller.getWeeklyChatUsage(ctx);
	assert.equal(ctx.body.collection, "smart_check_chat_usage");
	assert.equal(ctx.body.weeks[0].uniqueClients, 1);

	ChatUsageRepository.resetForTests();
	delete process.env.MONGODB_URI;
	delete process.env.MONGO_URI;
	delete process.env.VERIFIK_MONGODB_URI;
	const missing = chatCtx({});
	await Controller.getWeeklyChatUsage(missing);
	assert.equal(missing.status, 503);
});

test("the weekly route is registered on the agent router", () => {
	const paths = [];
	const router = {
		post(path) {
			paths.push(path);
		},
		get(path) {
			paths.push(path);
		},
		patch(path) {
			paths.push(path);
		},
		delete(path) {
			paths.push(path);
		},
	};
	require("../routes/agent.routes")(router);
	assert.ok(paths.includes("/api/agent/usage/weekly"));
	assert.ok(paths.includes("/api/agent/chat"));
});

test("a failed agent call still queues a usage row and returns 500", async () => {
	const inserted = [];
	ChatUsageRepository.setCollectionForTests({
		createIndex: async () => "ok",
		insertMany: async (docs) => inserted.push(docs),
	});
	AgentModule.chatWithAgent = async () => {
		throw new Error("Failed to communicate with AI Agent");
	};
	const ctx = chatCtx({ message: "hi", mode: "credits", conversationId: "conv-existing" });
	await Controller.chat(ctx);
	await ChatUsageRepository.flushForTests();
	assert.equal(ctx.status, 500);
	assert.equal(inserted.length, 1);
	assert.equal(inserted[0][1].status, "chat_error");
	assert.equal(inserted[0][1].ranLookup, false);
	assert.equal(JSON.stringify(inserted[0]).includes("Failed to communicate"), false);
});
});
