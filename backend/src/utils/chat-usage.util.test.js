const test = require("node:test");
const assert = require("node:assert/strict");
const {
	extractCreditCost,
	extractChatIdentity,
	buildLookupUsage,
	buildUsageDocuments,
	buildWeeklyUsagePipeline,
	sanitizeEndpoint,
} = require("./chat-usage.util");

const tokenFor = (payload) => {
	const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
	return `eyJhbGciOiJub25lIn0.${body}.sig`;
};

test("extractCreditCost reads Verifik charge fields and ignores balance and list price", () => {
	assert.equal(extractCreditCost({ creditsCharged: 0.3, credits: 40, priceUsd: 9 }), 0.3);
	assert.equal(extractCreditCost({ billing: { chargedCredits: "1.5" } }), 1.5);
	assert.equal(extractCreditCost({ data: { creditsCharged: 0 } }), 0);
	assert.equal(extractCreditCost({ cost: { smartCheck: 2 } }), 2);
	assert.equal(extractCreditCost({ priceUsd: 0.3, documentNumber: "123" }), null);
	assert.equal(extractCreditCost(null), null);
});

test("extractChatIdentity keeps ids and drops emails and the token itself", () => {
	const token = tokenFor({
		clientId: "6a6a80c80dc78d2b350d1cd4",
		_id: "user-1",
		email: "person@example.com",
		name: "Ada",
	});
	const identity = extractChatIdentity({
		userToken: `Bearer ${token}`,
		paymentWallet: "0xABCDEFabcdefABCDEFabcdefABCDEFabcdefABCD",
		mode: "x402",
	});
	assert.deepEqual(identity, {
		clientId: "6a6a80c80dc78d2b350d1cd4",
		userId: "user-1",
		walletAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
	});

	const credits = extractChatIdentity({
		userToken: "not-a-jwt",
		paymentWallet: "person@example.com",
		mode: "credits",
	});
	assert.deepEqual(credits, { clientId: null, userId: null, walletAddress: null });

	const fromAccountId = extractChatIdentity({
		paymentWallet: "acct_123",
		mode: "credits",
	});
	assert.equal(fromAccountId.userId, "acct_123");
	assert.equal(fromAccountId.walletAddress, null);
});

test("buildLookupUsage records the endpoint without query strings or payload fields", () => {
	const usage = buildLookupUsage({
		endpoint: "https://ai.verifik.co/api/co/cedula?documentNumber=123456",
		status: "success",
		payload: { creditsCharged: 0.3, documentNumber: "123456", fullName: "Ada" },
	});
	assert.deepEqual(usage, {
		ranLookup: true,
		endpoints: ["https://ai.verifik.co/api/co/cedula"],
		success: true,
		creditCost: 0.3,
		status: "success",
	});
	assert.equal(sanitizeEndpoint("/v2/co/cedula"), "/v2/co/cedula");
	assert.equal(sanitizeEndpoint("/v2/co/cedula?documentNumber=1"), null);

	const missed = buildLookupUsage({ endpoint: "/v2/co/cedula", status: "error", payload: { message: "nope" } });
	assert.equal(missed.ranLookup, true);
	assert.equal(missed.success, false);
	assert.equal(missed.creditCost, null);

	const unpaid = buildLookupUsage({
		endpoint: "/v2/co/cedula",
		status: "payment_required",
		payload: { priceUsd: 0.3 },
	});
	assert.equal(unpaid.success, false);
	assert.equal(unpaid.creditCost, null);
	assert.deepEqual(unpaid.endpoints, ["/v2/co/cedula"]);
});

test("buildUsageDocuments omits message text unless the flag is on", () => {
	const now = new Date("2026-11-02T12:00:00.000Z");
	const secret = "CC 1234567890 please look this up";
	const docs = buildUsageDocuments({
		userToken: tokenFor({ clientId: "client1", staffId: "staff9" }),
		mode: "credits",
		conversationId: "conv-1",
		userContent: secret,
		assistantContent: "Tool executed successfully. " + secret,
		usage: buildLookupUsage({
			endpoint: "/v2/co/cedula",
			status: "success",
			payload: { creditsCharged: 0.3 },
		}),
		storeText: false,
		now,
	});

	assert.equal(docs.length, 2);
	assert.equal(docs[0].role, "user");
	assert.equal(docs[1].role, "assistant");
	assert.equal(docs[0].ranLookup, false);
	assert.equal(docs[1].ranLookup, true);
	assert.equal(docs[1].success, true);
	assert.equal(docs[1].creditCost, 0.3);
	assert.deepEqual(docs[1].endpoints, ["/v2/co/cedula"]);
	assert.equal(docs[0].clientId, "client1");
	assert.equal(docs[0].userId, "staff9");
	assert.equal(docs[1].createdAt.getTime() - docs[0].createdAt.getTime(), 1);
	const serialized = JSON.stringify(docs);
	assert.equal(serialized.includes(secret), false);
	assert.equal(serialized.includes("content"), false);
	assert.equal(Object.hasOwn(docs[0], "content"), false);

	const withText = buildUsageDocuments({
		conversationId: "conv-1",
		userContent: secret,
		assistantContent: "ok",
		storeText: true,
		now,
	});
	assert.equal(withText[0].content, secret);
	assert.equal(withText[1].content, "ok");
});

test("failed turns are recorded without pretending a lookup ran", () => {
	const [userDoc, assistantDoc] = buildUsageDocuments({
		conversationId: "not a safe id !!!",
		userContent: "hello",
		failed: true,
		usage: buildLookupUsage({ endpoint: "/v2/co/cedula", status: "success", payload: { creditsCharged: 1 } }),
	});
	assert.equal(userDoc.conversationId, null);
	assert.equal(assistantDoc.status, "chat_error");
	assert.equal(assistantDoc.ranLookup, false);
	assert.equal(assistantDoc.success, null);
	assert.equal(assistantDoc.creditCost, null);
	assert.deepEqual(assistantDoc.endpoints, []);
});

test("weekly pipeline counts messages, conversations, and clients", () => {
	const from = new Date("2026-10-01T00:00:00.000Z");
	const to = new Date("2026-11-02T00:00:00.000Z");
	const pipeline = buildWeeklyUsagePipeline(from, to);
	assert.deepEqual(pipeline[0].$match.createdAt, { $gte: from, $lt: to });
	assert.equal(pipeline[0].$match.source, "smart_check_chat");
	assert.equal(pipeline[1].$group.messages.$sum, 1);
	assert.equal(pipeline[2].$project.conversations.$size.$filter.input, "$conversationIds");
	assert.equal(pipeline[2].$project.uniqueClients.$size.$filter.input, "$clientIds");
	assert.equal(pipeline[2].$project.uniqueWallets.$size.$filter.input, "$walletAddresses");
	assert.equal(pipeline[3].$sort.week, 1);
});
