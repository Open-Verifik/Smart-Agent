const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const config = require("../src/config");
const guard = require("../src/middleware/smartReportAuthGuard");
const { isSmartReportProtectedPath } = require("../src/config/smart-report-auth-policy");
const McpController = require("../src/controllers/mcp.controller");
const manifest = require("../src/config/tools-manifest.json");
const buildOpenApiFromManifest = require("../src/utils/buildOpenApiFromManifest");
const { buildWellKnownX402 } = buildOpenApiFromManifest;

describe("SmartReports tenant guard & MCP server", () => {
	it("classifies SmartReports, templates, configs, presets, internal queues, and traversal variants", () => {
		const protectedRoutes = [
			"/v2/smart-reports/run",
			"/api/smart-reports/123",
			"/api/v2/smart-reports/123/download",
			"/v2/smart-report-templates",
			"/api/smart-report-templates/preview-html",
			"/v2/batch-configurations/cfg_1/input-schema",
			"/v2/smart-batches/b_1/start",
			"/v2/smart-batch-presets",
			"/api/smart-batch-presets/co.citizen.comprehensive/clone",
			"/api/v2/SMART-REPORTS/public/../run",
			"/api/%2e%2e/smart-reports/run",
			"/v2/%73mart-reports/%c0/../run",
			"/v2/internal/smart-batches/queue/next",
		];

		for (const routePath of protectedRoutes) {
			assert.equal(isSmartReportProtectedPath(routePath), true, `Expected protected path: ${routePath}`);
		}

		assert.equal(isSmartReportProtectedPath("/v2/co/cedula"), false);
		assert.equal(isSmartReportProtectedPath("/api/co/cedula"), false);
	});

	it("blocks x402 / unauthenticated access and x-target-url smuggling, while allowing per-client JWT", async () => {
		const blockedContext = {
			method: "POST",
			path: "/v2/smart-reports/run",
			get: () => "",
		};
		let nextCalled = false;
		await guard(blockedContext, async () => {
			nextCalled = true;
		});
		assert.equal(nextCalled, false);
		assert.equal(blockedContext.status, 403);
		assert.equal(blockedContext.body.code, "Forbidden");

		const smuggledTargetContext = {
			method: "POST",
			path: "/api/co/cedula",
			get: (headerName) =>
				headerName === "x-target-url" ? "https://api.verifik.co/v2/smart-reports/run" : "",
		};
		await guard(smuggledTargetContext, async () => {
			nextCalled = true;
		});
		assert.equal(nextCalled, false);
		assert.equal(smuggledTargetContext.status, 400);

		const externalTargetContext = {
			method: "POST",
			path: "/api/proxy",
			get: (headerName) =>
				headerName === "x-target-url" ? "https://attacker.example/capture" : "",
		};
		await guard(externalTargetContext, async () => {
			nextCalled = true;
		});
		assert.equal(nextCalled, false);
		assert.equal(externalTargetContext.status, 400);

		if (config.verifik?.serviceToken) {
			const serviceTokenContext = {
				method: "GET",
				path: "/v2/smart-reports",
				get: (headerName) =>
					headerName === "authorization" ? `Bearer ${config.verifik.serviceToken}` : "",
			};
			await guard(serviceTokenContext, async () => {
				nextCalled = true;
			});
			assert.equal(nextCalled, false);
			assert.equal(serviceTokenContext.status, 403);
		}

		const clientJwtContext = {
			method: "POST",
			path: "/api/smart-reports/run",
			get: (headerName) => (headerName === "authorization" ? "Bearer client_jwt_abc123456" : ""),
		};
		await guard(clientJwtContext, async () => {
			nextCalled = true;
		});
		assert.equal(nextCalled, true);
	});

	it("implements MCP initialize, GET /mcp SSE 405 compliance, and lists all 10 SmartReports tools + smart_link_create_session", async () => {
		const sseProbeContext = {
			get: (headerName) => (headerName === "accept" ? "text/event-stream" : ""),
			set: () => {},
		};
		await McpController.getMcpInfo(sseProbeContext);
		assert.equal(sseProbeContext.status, 405);

		const initializeContext = {
			request: { body: { jsonrpc: "2.0", id: 1, method: "initialize" } },
			get: () => "",
		};
		await McpController.handleMcpRequest(initializeContext);
		assert.equal(initializeContext.status, 200);
		assert.equal(initializeContext.body.result.serverInfo.name, "verifik-mcp");

		const toolsListContext = {
			request: { body: { jsonrpc: "2.0", id: 2, method: "tools/list" } },
			get: () => "",
		};
		await McpController.handleMcpRequest(toolsListContext);
		assert.equal(toolsListContext.status, 200);

		const listedToolNames = toolsListContext.body.result.tools.map((tool) => tool.name);
		for (const expectedToolName of [
			"smart_report_list_presets",
			"smart_report_clone_preset",
			"smart_report_get_input_schema",
			"smart_report_run",
			"smart_report_get",
			"smart_report_get_html",
			"smart_report_generate_pdf",
			"smart_report_download_pdf",
			"smart_report_send_email",
			"smart_report_list_templates",
			"smart_link_create_session",
		]) {
			assert.ok(listedToolNames.includes(expectedToolName), `Expected MCP tool ${expectedToolName}`);
		}
	});

	it("rejects MCP tools/call without per-client JWT and blocks dot-segment path traversal in parameters", async () => {
		const unauthenticatedContext = {
			request: {
				body: {
					jsonrpc: "2.0",
					id: 3,
					method: "tools/call",
					params: {
						name: "smart_report_run",
						arguments: { systemKey: "co.citizen.essential", inputs: { documentNumber: "123" } },
					},
				},
			},
			get: () => "",
		};
		await McpController.handleMcpRequest(unauthenticatedContext);
		assert.equal(unauthenticatedContext.status, 401);
		assert.equal(unauthenticatedContext.body.error.code, -32001);

		assert.throws(() => McpController.resolvePathAndPayload("/v2/smart-reports/{id}", { id: ".." }));
		assert.throws(() => McpController.resolvePathAndPayload("/v2/smart-reports/{id}", { id: "." }));
		assert.throws(() => McpController.resolvePathAndPayload("/v2/smart-reports/{id}", { id: "run" }));
	});

	it("dispatches authenticated MCP tools/call cleanly and enforces createdByChannel=mcp", async () => {
		let capturedRequest = null;
		const authenticatedContext = {
			ip: "203.0.113.10",
			request: {
				body: {
					jsonrpc: "2.0",
					id: 4,
					method: "tools/call",
					params: {
						name: "smart_report_run",
						arguments: {
							systemKey: "co.citizen.essential",
							createdByChannel: "portal",
							inputs: { documentType: "CC", documentNumber: "123" },
						},
					},
				},
			},
			get: (headerName) => (headerName === "authorization" ? "Bearer client_jwt_123456" : ""),
		};
		await McpController.handleMcpRequest(authenticatedContext, {
			httpClient: {
				request: async (requestConfig) => {
					capturedRequest = requestConfig;
					return { status: 200, data: { data: { mode: "sync", report: { _id: "rep_1" } } } };
				},
			},
		});

		assert.equal(authenticatedContext.status, 200);
		assert.equal(authenticatedContext.body.result.isError, false);
		assert.equal(capturedRequest.method, "POST");
		assert.ok(capturedRequest.url.endsWith("/v2/smart-reports/run"));
		assert.equal(capturedRequest.data.createdByChannel, "mcp");
		assert.equal(capturedRequest.headers.Authorization, "Bearer client_jwt_123456");
	});

	it("publishes SmartReports routes with bearerAuth in OpenAPI while keeping /.well-known/x402 strictly x402-only", () => {
		const openapi = buildOpenApiFromManifest(manifest, { publicOrigin: "https://ai.verifik.co" });
		assert.ok(openapi.components?.securitySchemes?.bearerAuth);
		assert.ok(openapi.paths["/v2/smart-reports/run"]?.post);
		assert.deepEqual(openapi.paths["/v2/smart-reports/run"].post.security, [{ bearerAuth: [] }]);
		assert.equal(openapi.paths["/v2/smart-reports/run"].post["x-payment-info"], undefined);

		const resources = buildWellKnownX402(manifest).resources;
		assert.equal(resources.some((resource) => resource.includes("/smart-reports")), false);
	});
});
