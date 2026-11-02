const test = require("node:test");
const assert = require("node:assert/strict");
const jwt = require("jsonwebtoken");
const { requireChatUsageAdmin } = require("./chat-usage-admin");

const envKeys = ["CHAT_USAGE_ADMIN_TOKEN", "VERIFIK_JWT_SECRET", "JWT_SECRET"];

const saved = {};
test.before(() => {
	for (const key of envKeys) saved[key] = process.env[key];
});
test.after(() => {
	for (const key of envKeys) {
		if (saved[key] === undefined) delete process.env[key];
		else process.env[key] = saved[key];
	}
});

const run = async (headers) => {
	const lower = {};
	for (const [name, value] of Object.entries(headers)) lower[name.toLowerCase()] = value;
	const ctx = {
		status: 200,
		body: null,
		get(name) {
			return lower[String(name).toLowerCase()] || "";
		},
	};
	let nextCalled = false;
	await requireChatUsageAdmin(ctx, async () => {
		nextCalled = true;
	});
	return { ctx, nextCalled };
};

test("admin route stays closed until a secret is configured", async () => {
	delete process.env.CHAT_USAGE_ADMIN_TOKEN;
	delete process.env.VERIFIK_JWT_SECRET;
	delete process.env.JWT_SECRET;
	const { ctx, nextCalled } = await run({ authorization: "Bearer anything" });
	assert.equal(nextCalled, false);
	assert.equal(ctx.status, 503);
});

test("admin token and verified superadmin JWTs are allowed", async () => {
	process.env.CHAT_USAGE_ADMIN_TOKEN = "admin-secret";
	process.env.VERIFIK_JWT_SECRET = "jwt-secret";
	delete process.env.JWT_SECRET;

	const byHeader = await run({ "x-admin-token": "admin-secret" });
	assert.equal(byHeader.nextCalled, true);

	const byBearer = await run({ authorization: "Bearer admin-secret" });
	assert.equal(byBearer.nextCalled, true);

	const superToken = jwt.sign({ superAdminId: "sa-1", clientId: "client" }, "jwt-secret");
	const asSuper = await run({ authorization: `Bearer ${superToken}` });
	assert.equal(asSuper.nextCalled, true);

	const roleToken = jwt.sign({ role: "superadmin" }, "jwt-secret");
	const asRole = await run({ authorization: `Bearer ${roleToken}` });
	assert.equal(asRole.nextCalled, true);

	const customer = jwt.sign({ clientId: "client-1", role: "admin" }, "jwt-secret");
	const asCustomer = await run({ authorization: `Bearer ${customer}` });
	assert.equal(asCustomer.nextCalled, false);
	assert.equal(asCustomer.ctx.status, 403);

	const wrong = await run({ authorization: "Bearer no-access" });
	assert.equal(wrong.nextCalled, false);
	assert.equal(wrong.ctx.status, 403);
});
