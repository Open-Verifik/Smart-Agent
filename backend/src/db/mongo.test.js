const test = require("node:test");
const assert = require("node:assert/strict");
const { CLIENT_OPTIONS, databaseNameFromUri } = require("./mongo");

test("database name comes from the URI path", () => {
	assert.equal(databaseNameFromUri("mongodb://localhost:27017/verifik"), "verifik");
	assert.equal(
		databaseNameFromUri("mongodb+srv://user:pass@cluster.example.net/verifik?retryWrites=true"),
		"verifik",
	);
	assert.equal(databaseNameFromUri("mongodb://localhost:27017"), "");
	assert.equal(databaseNameFromUri(""), "");
});

test("the usage logger keeps a small pool", () => {
	assert.equal(CLIENT_OPTIONS.maxPoolSize, 5);
	assert.equal(CLIENT_OPTIONS.minPoolSize, 0);
	assert.ok(CLIENT_OPTIONS.serverSelectionTimeoutMS <= 2000);
	assert.ok(CLIENT_OPTIONS.connectTimeoutMS <= 2000);
});
