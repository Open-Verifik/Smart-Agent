const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const manifest = require("../src/config/tools-manifest.json");
const buildOpenApiFromManifest = require("../src/utils/buildOpenApiFromManifest");
const { buildWellKnownX402 } = buildOpenApiFromManifest;
const config = require("../src/config");
const guard = require("../src/middleware/smartLinkSessionGuard");
const {
	SMART_LINK_CREATE_PRICE_USD,
	isPerClientCredential,
	isSmartLinkSessionCreate,
	isSmartLinkSessionManagement,
	scopeCreatedSessionBody,
} = require("../src/config/smart-link-x402-policy");

const REMOVED_IDS = [
	"smart_link_session_status",
	"smart_link_list_sessions",
	"smart_link_update_session",
	"smart_link_delete_session",
];

const blockedPaths = [
	["GET", "/api/v3/smart-links/sessions"],
	["GET", "/v3/smart-links/sessions"],
	["GET", "/api/v3/smart-links/sessions/status"],
	["PATCH", "/api/v3/smart-links/sessions"],
	["DELETE", "/v3/smart-links/sessions"],
	["GET", "/api/v3/smart-links/sessions/sess_123"],
	["PATCH", "/v3/smart-links/sessions/sess_123"],
	["DELETE", "/api/v3/smart-links/sessions/sess_123"],
	["POST", "/v3/smart-links/sessions/exchange"],
	["POST", "/api/v3/smart-links/sessions/sess_123/resend"],
	["POST", "/v3/smart-links/sessions/sess_123/revoke"],
	["GET", "/v3/smart-links/project_123/sessions"],
	["POST", "/api/v3/smart-links/project_123/sessions/bulk-delete"],
	["POST", "/v3/smart-links/project_123/sessions/bulk-revoke"],
];

describe("SmartLink x402 session boundary", () => {
	it("keeps priced session creation and drops session management tools", () => {
		for (const id of REMOVED_IDS) {
			assert.equal(
				manifest.endpoints.find((tool) => tool.id === id),
				undefined,
				`${id} must not be in the x402 manifest`,
			);
		}
		const create = manifest.endpoints.find((tool) => tool.id === "smart_link_create_session");
		assert.ok(create);
		assert.equal(create.method, "POST");
		assert.equal(create.priceUsd, SMART_LINK_CREATE_PRICE_USD);
		assert.ok(create.priceUsd > 0);
	});

	it("omits session management routes from OpenAPI and the x402 resource list", () => {
		const openapi = buildOpenApiFromManifest(manifest, { publicOrigin: "https://ai.verifik.co" });
		const sessions = openapi.paths["/api/v3/smart-links/sessions"];
		assert.ok(sessions.post, "POST create stays published");
		assert.equal(sessions.get, undefined);
		assert.equal(sessions.patch, undefined);
		assert.equal(sessions.delete, undefined);
		assert.equal(openapi.paths["/api/v3/smart-links/sessions/status"], undefined);
		assert.equal(sessions.post["x-payment-info"].price.amount, "0.05");
		assert.equal(sessions.post.responses["200"].description, "Only the SmartLink session created by this call.");
		assert.equal(sessions.post.responses["200"].content["application/json"].schema.required[0], "data");

		const resources = buildWellKnownX402(manifest).resources;
		assert.ok(resources.includes("POST /api/v3/smart-links/sessions"));
		for (const removed of [
			"GET /api/v3/smart-links/sessions/status",
			"GET /api/v3/smart-links/sessions",
			"PATCH /api/v3/smart-links/sessions",
			"DELETE /api/v3/smart-links/sessions",
		]) {
			assert.equal(resources.includes(removed), false, removed);
		}
	});

	it("classifies create and public routes separately from tenant session, dispatch, and analytics routes", () => {
		assert.equal(isSmartLinkSessionCreate("POST", "/api/v3/smart-links/sessions"), true);
		assert.equal(isSmartLinkSessionCreate("POST", "/v3/smart-links/project_123/sessions"), true);
		assert.equal(isSmartLinkSessionCreate("GET", "/v3/smart-links/sessions"), false);
		assert.equal(isSmartLinkSessionManagement("POST", "/api/v3/smart-links/sessions"), false);
		assert.equal(isSmartLinkSessionManagement("POST", "/v3/smart-links/project_123/sessions"), false);
		for (const [method, path] of blockedPaths) {
			assert.equal(isSmartLinkSessionManagement(method, path), true, `${method} ${path}`);
		}
		// Analytics, dispatch, and normalized traversal / casing variants must also require per-client credentials.
		assert.equal(isSmartLinkSessionManagement("GET", "/v3/smart-links/project_123/analytics"), true);
		assert.equal(isSmartLinkSessionManagement("GET", "/api/v3/smart-links/project_123/analytics"), true);
		assert.equal(isSmartLinkSessionManagement("POST", "/v3/smart-links/project_123/dispatch"), true);
		assert.equal(isSmartLinkSessionManagement("GET", "/api/v3/smart-links/public/../sessions"), true);
		assert.equal(isSmartLinkSessionManagement("GET", "/api//v3/smart-links/sessions"), true);
		assert.equal(isSmartLinkSessionManagement("GET", "/api/v3/SMART-LINKS/sessions"), true);
		assert.equal(isSmartLinkSessionManagement("GET", "/api/v3/smart-links/%2e%2e/smart-links/sessions"), true);
		// Public end-user runtime endpoints remain accessible without client Bearer auth.
		assert.equal(isSmartLinkSessionManagement("GET", "/v3/smart-links/public/resolve/acme-demo"), false);
		assert.equal(isSmartLinkSessionManagement("POST", "/api/v3/smart-links/public/lookup"), false);
	});

	it("accepts a client bearer token and rejects the shared service token", () => {
		assert.equal(isPerClientCredential("Bearer client-jwt", "service-token"), true);
		assert.equal(isPerClientCredential("bearer client-api-key", "service-token"), true);
		assert.equal(isPerClientCredential("Bearer service-token", "service-token"), false);
		assert.equal(isPerClientCredential("L402 0xabc", "service-token"), false);
		assert.equal(isPerClientCredential(undefined, "service-token"), false);
	});

	it("blocks shared-account session management before the proxy and allows a client credential", async () => {
		config.verifik.serviceToken = "service-token";
		const next = async () => {
			ctx.called = true;
		};

		let ctx = fakeCtx("GET", "/api/v3/smart-links/sessions/status");
		await guard(ctx, next);
		assert.equal(ctx.status, 403);
		assert.equal(ctx.called, undefined);
		assert.match(ctx.body.message, /per-client API key or JWT/);

		ctx = fakeCtx("DELETE", "/api/proxy", { "x-target-url": "https://api.verifik.co/v3/smart-links/sessions?sessionId=abc" });
		await guard(ctx, next);
		assert.equal(ctx.status, 403);

		ctx = fakeCtx("GET", "/v3/smart-links/sessions", { authorization: "Bearer service-token" });
		await guard(ctx, next);
		assert.equal(ctx.status, 403);

		ctx = fakeCtx("PATCH", "/api/v3/smart-links/sessions/sess_123", { authorization: "Bearer client-jwt" });
		await guard(ctx, next);
		assert.equal(ctx.status, undefined);
		assert.equal(ctx.called, true);

		ctx = fakeCtx("POST", "/api/v3/smart-links/sessions");
		await guard(ctx, next);
		assert.equal(ctx.called, true);
	});

	it("returns only the created session and drops other sessions and proof fields", () => {
		const scoped = scopeCreatedSessionBody(
			{
				data: {
					sessionId: "sess_new",
					shortCode: "AB12",
					url: "https://access.example/l/AB12",
					qrDataUrl: "data:image/png;base64,aaa",
					state: "CREATED",
					expiresAt: "2026-01-01T00:00:00.000Z",
					externalRefId: "order-1",
					prefill: { email: "ada@example.com", fullName: "Ada" },
					outcome: { verificationToken: "proof", identity: { documentNumber: "123", fullName: "Other" } },
					token: "proof-token",
				},
				docs: [
					{
						sessionId: "sess_other",
						shortCode: "ZZ99",
						url: "https://access.example/l/ZZ99",
						outcome: { identity: { documentNumber: "999" } },
					},
				],
				signature: "covers-the-whole-list",
			},
			{ externalRefId: "order-1" },
		);
		assert.equal(scoped.ok, true);
		assert.deepEqual(scoped.body, {
			data: {
				sessionId: "sess_new",
				shortCode: "AB12",
				url: "https://access.example/l/AB12",
				qrDataUrl: "data:image/png;base64,aaa",
				state: "CREATED",
				expiresAt: "2026-01-01T00:00:00.000Z",
				externalRefId: "order-1",
				prefill: { email: "ada@example.com", fullName: "Ada" },
			},
		});
		assert.equal(JSON.stringify(scoped.body).includes("sess_other"), false);
		assert.equal(JSON.stringify(scoped.body).includes("documentNumber"), false);
		assert.equal(JSON.stringify(scoped.body).includes("proof"), false);
	});

	it("keeps one created session when unrelated url fields are present", () => {
		const scoped = scopeCreatedSessionBody({
			data: {
				sessionId: "sess_new",
				url: "https://access.example/l/new",
				state: "CREATED",
			},
			dispatch: { url: "https://access.example/track/1" },
		});
		assert.equal(scoped.ok, true);
		assert.equal(scoped.body.data.sessionId, "sess_new");
		assert.equal(JSON.stringify(scoped.body).includes("track"), false);
	});

	it("refuses a create payload that is a list of sessions with no single match", () => {
		const scoped = scopeCreatedSessionBody({
			data: {
				docs: [
					{ sessionId: "a", url: "https://access.example/a" },
					{ sessionId: "b", url: "https://access.example/b" },
				],
			},
		});
		assert.deepEqual(scoped, { ok: false });
	});
});

/**
 * @param {string} method
 * @param {string} path
 * @param {Record<string, string>} [headers]
 */
function fakeCtx(method, path, headers = {}) {
	const normalized = Object.fromEntries(Object.entries(headers).map(([key, value]) => [key.toLowerCase(), value]));
	return {
		method,
		path,
		get(name) {
			return normalized[String(name).toLowerCase()];
		},
	};
}
