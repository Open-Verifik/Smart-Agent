const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const { isSmartReportProtectedPath } = require("../src/config/smart-report-auth-policy");
const McpController = require("../src/controllers/mcp.controller");
const manifest = require("../src/config/tools-manifest.json");
const buildOpenApiFromManifest = require("../src/utils/buildOpenApiFromManifest");
const { buildWellKnownX402 } = buildOpenApiFromManifest;

describe("Team, RBAC & CostCenter MCP tools", () => {
	it("protects /v2/{teams,client-roles,staff,staff-access-requests,cost-centers} against x402 bypass", () => {
		for (const p of [
			"/v2/teams",
			"/api/teams/t_1/assign",
			"/v2/client-roles/catalog",
			"/v2/staff/me/permissions",
			"/v2/staff-access-requests",
			"/api/v2/cost-centers",
		]) {
			assert.equal(isSmartReportProtectedPath(p), true, `Expected protected path: ${p}`);
		}
	});

	it("lists all Team/RBAC/CostCenter MCP tools and publishes them under bearerAuth only", async () => {
		const toolsListCtx = {
			request: { body: { jsonrpc: "2.0", id: 10, method: "tools/list" } },
			get: () => "",
		};
		await McpController.handleMcpRequest(toolsListCtx);
		assert.equal(toolsListCtx.status, 200);

		const names = toolsListCtx.body.result.tools.map((t) => t.name);
		for (const expected of [
			"teams_list",
			"teams_create",
			"teams_update",
			"teams_delete",
			"teams_assign_resources",
			"teams_create_api_key",
			"roles_catalog",
			"roles_create",
			"roles_update",
			"roles_duplicate",
			"roles_delete",
			"staff_list",
			"staff_invite",
			"staff_update",
			"staff_my_permissions",
			"access_requests_list",
			"access_requests_approve",
			"access_requests_reject",
			"access_requests_revoke",
			"cost_centers_list",
			"cost_centers_create",
		]) {
			assert.ok(names.includes(expected), `Expected MCP tool ${expected}`);
		}

		const openapi = buildOpenApiFromManifest(manifest, { publicOrigin: "https://ai.verifik.co" });
		assert.deepEqual(openapi.paths["/v2/teams/{id}/assign"]?.post?.security, [{ bearerAuth: [] }]);
		assert.equal(openapi.paths["/v2/teams/{id}/assign"]?.post?.["x-payment-info"], undefined);

		const x402Resources = buildWellKnownX402(manifest).resources;
		assert.equal(x402Resources.some((r) => r.includes("/teams") || r.includes("/client-roles")), false);
	});

	it("forwards costCenter as x-cost-center header on smart_report_run and dispatches teams_assign_resources", async () => {
		const captured = [];
		const ctxRun = {
			ip: "198.51.100.10",
			request: {
				body: {
					jsonrpc: "2.0",
					id: 11,
					method: "tools/call",
					params: {
						name: "smart_report_run",
						arguments: {
							systemKey: "co.citizen.essential",
							costCenter: "CO-OPS",
							inputs: { documentType: "CC", documentNumber: "123" },
						},
					},
				},
			},
			get: (h) => (h === "authorization" ? "Bearer client_jwt_team_test" : ""),
		};

		await McpController.handleMcpRequest(ctxRun, {
			httpClient: {
				request: async (reqCfg) => {
					captured.push(reqCfg);
					return { status: 200, data: { data: { mode: "sync" } } };
				},
			},
		});

		assert.equal(ctxRun.body.result.isError, false);
		assert.equal(captured[0].headers["x-cost-center"], "CO-OPS");

		const ctxAssign = {
			ip: "198.51.100.10",
			request: {
				body: {
					jsonrpc: "2.0",
					id: 12,
					method: "tools/call",
					params: {
						name: "teams_assign_resources",
						arguments: {
							id: "team_123",
							resourceType: "smartReports",
							ids: ["rep_1", "rep_2"],
						},
					},
				},
			},
			get: (h) => (h === "authorization" ? "Bearer client_jwt_team_test" : ""),
		};

		await McpController.handleMcpRequest(ctxAssign, {
			httpClient: {
				request: async (reqCfg) => {
					captured.push(reqCfg);
					return { status: 200, data: { data: { modifiedCount: 2 } } };
				},
			},
		});

		assert.equal(ctxAssign.body.result.isError, false);
		assert.ok(captured[1].url.endsWith("/v2/teams/team_123/assign"));
		assert.deepEqual(captured[1].data, { resourceType: "smartReports", ids: ["rep_1", "rep_2"] });
	});
});
