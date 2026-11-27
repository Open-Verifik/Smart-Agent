/**
 * Streamable HTTP Model Context Protocol (MCP) JSON-RPC 2.0 endpoint (`POST /mcp`, `GET /mcp`).
 *
 * Exposes SmartReports headless tools (`smart_report_*`) and SmartLink session creation
 * (`smart_link_create_session`) to Claude Desktop, Cursor, Antigravity, ChatGPT Agents, and
 * custom MCP clients. Always enforces per-client Bearer JWT tenant isolation before dispatching.
 */

const axios = require("axios");
const config = require("../config");
const toolsManifest = require("../config/tools-manifest.json");
const smartReportsMcp = require("../config/smart-reports-mcp-tools.json");
const teamRbacMcp = require("../config/team-rbac-mcp-tools.json");
const { extractClientBearerToken } = require("../config/smart-report-auth-policy");

const PROTOCOL_VERSION = "2025-03-26";
const SERVER_INFO = {
	name: "verifik-mcp",
	version: "1.0.0",
};

const MAX_RESPONSE_BYTES = 20 * 1024 * 1024;
const MAX_BATCH_INPUT_ROWS = 500;
const MAX_EMAIL_RECIPIENTS = 20;
const SAFE_PATH_PARAM_REGEX = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/;
const RESERVED_ID_LITERALS = new Set([
	"run",
	"preview-html",
	"introspect",
	"generate-layout",
	"theme-starters",
	"score-profiles",
	"simulated-responses",
]);

const buildToolRegistry = () => {
	const registry = new Map();

	for (const tool of [...(smartReportsMcp.tools || []), ...(teamRbacMcp.tools || [])]) {
		registry.set(tool.name, {
			name: tool.name,
			description: tool.description,
			inputSchema: tool.inputSchema || { type: "object", properties: {} },
			method: tool.method,
			verifikPath: tool.verifikPath,
			requiresClientJwt: true,
		});
	}

	const smartLinkCreate = (toolsManifest.endpoints || []).find(
		(manifestEndpoint) => manifestEndpoint.id === "smart_link_create_session"
	);
	if (smartLinkCreate) {
		registry.set("smart_link_create_session", {
			name: "smart_link_create_session",
			description: smartLinkCreate.description,
			inputSchema: smartLinkCreate.parameters || { type: "object", properties: {} },
			method: smartLinkCreate.method || "POST",
			verifikPath: smartLinkCreate.verifikPath || "/v3/smart-links/sessions",
			requiresClientJwt: true,
		});
	}

	return registry;
};

const CACHED_TOOL_REGISTRY = buildToolRegistry();

const validatePathParameterValue = (paramName, rawValue) => {
	if (typeof rawValue !== "string" && typeof rawValue !== "number") {
		throw new Error(`Invalid path parameter ${paramName}: expected string or number`);
	}
	const trimmedValue = String(rawValue).trim();
	if (!trimmedValue) {
		throw new Error(`Missing required path parameter: ${paramName}`);
	}
	if (
		trimmedValue === "." ||
		trimmedValue === ".." ||
		trimmedValue.includes("..") ||
		!SAFE_PATH_PARAM_REGEX.test(trimmedValue)
	) {
		throw new Error(`Invalid characters in path parameter: ${paramName}`);
	}
	if (paramName === "id" && RESERVED_ID_LITERALS.has(trimmedValue.toLowerCase())) {
		throw new Error(`Invalid resource identifier for parameter: ${paramName}`);
	}
	return encodeURIComponent(trimmedValue);
};

const resolvePathAndPayload = (verifikPath, toolArguments = {}) => {
	if (!toolArguments || typeof toolArguments !== "object" || Array.isArray(toolArguments)) {
		throw new Error("Tool arguments must be a JSON object");
	}
	const remainingPayload = { ...toolArguments };
	const resolvedPath = String(verifikPath).replace(/\{([^}]+)\}/g, (_placeholderMatch, paramName) => {
		if (!Object.hasOwn(remainingPayload, paramName)) {
			throw new Error(`Missing required path parameter: ${paramName}`);
		}
		const encodedSegment = validatePathParameterValue(paramName, remainingPayload[paramName]);
		delete remainingPayload[paramName];
		return encodedSegment;
	});
	return { resolvedPath, payload: remainingPayload };
};

const validateToolPayloadBounds = (toolName, payload) => {
	if (toolName === "smart_report_run") {
		if (Array.isArray(payload.inputs) && payload.inputs.length > MAX_BATCH_INPUT_ROWS) {
			throw new Error(`inputs cannot exceed ${MAX_BATCH_INPUT_ROWS} rows`);
		}
		if (Array.isArray(payload.emailTo) && payload.emailTo.length > MAX_EMAIL_RECIPIENTS) {
			throw new Error(`emailTo cannot exceed ${MAX_EMAIL_RECIPIENTS} recipients`);
		}
		if (payload.webhookUrl && !String(payload.webhookUrl).startsWith("https://")) {
			throw new Error("webhookUrl must use https://");
		}
	}
	if (toolName === "smart_report_send_email") {
		if (Array.isArray(payload.recipients) && payload.recipients.length > MAX_EMAIL_RECIPIENTS) {
			throw new Error(`recipients cannot exceed ${MAX_EMAIL_RECIPIENTS} addresses`);
		}
	}
};

const jsonRpcResult = (requestId, result) => ({
	jsonrpc: "2.0",
	id: requestId ?? null,
	result,
});

const jsonRpcError = (requestId, code, message, data) => ({
	jsonrpc: "2.0",
	id: requestId ?? null,
	error: {
		code,
		message,
		...(data !== undefined ? { data } : {}),
	},
});

const formatMcpToolResult = (requestId, outputValue, isError = false) =>
	jsonRpcResult(requestId, {
		content: [
			{
				type: "text",
				text: typeof outputValue === "string" ? outputValue : JSON.stringify(outputValue, null, 2),
			},
		],
		isError,
	});

const getMcpInfo = async (ctx) => {
	const acceptHeader = String(ctx.get("accept") || "").toLowerCase();
	if (acceptHeader.includes("text/event-stream") && !acceptHeader.includes("application/json")) {
		ctx.status = 405;
		ctx.set("Allow", "POST");
		ctx.body = { error: "Server-initiated SSE stream is not enabled; send JSON-RPC POST requests to /mcp." };
		return;
	}

	ctx.status = 200;
	ctx.type = "application/json; charset=utf-8";
	ctx.body = {
		name: SERVER_INFO.name,
		version: SERVER_INFO.version,
		protocolVersion: PROTOCOL_VERSION,
		transport: "streamable-http",
		authentication: "Authorization: Bearer <VERIFIK_JWT>",
		tools: Array.from(CACHED_TOOL_REGISTRY.values()).map((tool) => ({
			name: tool.name,
			description: tool.description,
			method: tool.method,
			path: tool.verifikPath,
		})),
	};
};

const buildPdfDownloadSummary = ({ response, reportId, upstreamBase, resolvedPath, payload, includeBase64 }) => {
	const rawBytes = Buffer.isBuffer(response.data) ? response.data : Buffer.from(response.data || "");
	const queryString =
		payload && Object.keys(payload).length > 0
			? `?${new URLSearchParams(
					Object.entries(payload).map(([paramKey, paramValue]) => [paramKey, String(paramValue)])
				).toString()}`
			: "";

	return {
		reportId,
		contentType: response.headers?.["content-type"] || "application/pdf",
		byteLength: rawBytes.length,
		downloadUrl: `${upstreamBase}${resolvedPath}${queryString}`,
		...(includeBase64 ? { base64: rawBytes.toString("base64") } : {}),
	};
};

const formatUpstreamErrorPayload = (upstreamError) => {
	const status = upstreamError.response?.status || 502;
	const errorBody = upstreamError.response?.data;

	if (Buffer.isBuffer(errorBody)) {
		return { status, error: errorBody.toString("utf8") };
	}
	if (errorBody instanceof ArrayBuffer || ArrayBuffer.isView(errorBody)) {
		return { status, error: Buffer.from(errorBody).toString("utf8") };
	}
	if (errorBody !== undefined) {
		return { status, error: errorBody };
	}
	return { status, error: { message: "Upstream Verifik API request failed" } };
};

const buildMcpUpstreamRequest = ({ ctx, tool, upstreamUrl, clientBearerToken, payload, isPdfDownload }) => {
	const headers = {
		Authorization: `Bearer ${clientBearerToken}`,
		"Content-Type": "application/json",
	};
	if (ctx.ip) headers["x-forwarded-for"] = ctx.get("x-forwarded-for") || ctx.ip;
	if (ctx.get("user-agent")) headers["user-agent"] = ctx.get("user-agent");
	const costCenterHeader = payload?.costCenter || ctx.get("x-cost-center");
	if (costCenterHeader) headers["x-cost-center"] = String(costCenterHeader);

	return {
		method: tool.method,
		url: upstreamUrl,
		headers,
		timeout: 120000,
		maxContentLength: MAX_RESPONSE_BYTES,
		maxBodyLength: MAX_RESPONSE_BYTES,
		...(isPdfDownload ? { responseType: "arraybuffer" } : {}),
		...(tool.method === "GET" || tool.method === "DELETE" ? { params: payload } : { data: payload }),
	};
};

const handleToolCall = async ({ ctx, requestId, params, registry, httpClient }) => {
	const tool = registry.get(params?.name);
	if (!tool) {
		ctx.status = 200;
		ctx.body = jsonRpcError(requestId, -32602, `Unknown MCP tool: ${params?.name}`);
		return;
	}

	const clientBearerToken = extractClientBearerToken(ctx.get("authorization"), config.verifik?.serviceToken);
	if (!clientBearerToken) {
		ctx.status = 401;
		ctx.body = jsonRpcError(
			requestId,
			-32001,
			"Per-client Authorization: Bearer <VERIFIK_JWT> header is required to invoke Verifik MCP tools."
		);
		return;
	}

	const rawArguments = params?.arguments === undefined ? {} : params.arguments;
	let resolvedPath;
	let payload;
	try {
		({ resolvedPath, payload } = resolvePathAndPayload(tool.verifikPath, rawArguments));
		validateToolPayloadBounds(tool.name, payload);
	} catch (validationError) {
		ctx.status = 200;
		ctx.body = formatMcpToolResult(requestId, { error: validationError.message }, true);
		return;
	}

	const isPdfDownload = tool.name === "smart_report_download_pdf";
	const includeBase64 = Boolean(payload.includeBase64);
	if (isPdfDownload) delete payload.includeBase64;
	if (tool.name === "smart_report_run") payload.createdByChannel = "mcp";

	const upstreamBase = (config.verifik?.apiUrl || "https://api.verifik.co").replace(/\/$/, "");
	const upstreamUrl = `${upstreamBase}${resolvedPath}`;
	const client = httpClient || axios;

	try {
		const requestConfig = buildMcpUpstreamRequest({
			ctx,
			tool,
			upstreamUrl,
			clientBearerToken,
			payload,
			isPdfDownload,
		});
		const response = await client.request(requestConfig);
		const outputValue = isPdfDownload
			? buildPdfDownloadSummary({
					response,
					reportId: rawArguments.id,
					upstreamBase,
					resolvedPath,
					payload,
					includeBase64,
				})
			: response.data;

		ctx.status = 200;
		ctx.body = formatMcpToolResult(requestId, outputValue, false);
	} catch (upstreamError) {
		ctx.status = 200;
		ctx.body = formatMcpToolResult(requestId, formatUpstreamErrorPayload(upstreamError), true);
	}
};

const handleMcpRequest = async (ctx, options = {}) => {
	const requestBody = ctx.request.body;
	if (
		!requestBody ||
		typeof requestBody !== "object" ||
		Array.isArray(requestBody) ||
		requestBody.jsonrpc !== "2.0" ||
		!requestBody.method
	) {
		ctx.status = 400;
		ctx.body = jsonRpcError(requestBody?.id, -32600, "Invalid JSON-RPC 2.0 request");
		return;
	}

	const { id: requestId, method, params } = requestBody;
	ctx.type = "application/json; charset=utf-8";

	if (method === "initialize") {
		ctx.status = 200;
		ctx.body = jsonRpcResult(requestId, {
			protocolVersion: PROTOCOL_VERSION,
			capabilities: { tools: { listChanged: false } },
			serverInfo: SERVER_INFO,
		});
		return;
	}

	if (method === "notifications/initialized" || method === "ping") {
		ctx.status = requestId === undefined ? 202 : 200;
		ctx.body = requestId === undefined ? undefined : jsonRpcResult(requestId, {});
		return;
	}

	if (method === "tools/list") {
		ctx.status = 200;
		ctx.body = jsonRpcResult(requestId, {
			tools: Array.from(CACHED_TOOL_REGISTRY.values()).map(({ name, description, inputSchema }) => ({
				name,
				description,
				inputSchema,
			})),
		});
		return;
	}

	if (method === "tools/call") {
		await handleToolCall({
			ctx,
			requestId,
			params,
			registry: CACHED_TOOL_REGISTRY,
			httpClient: options.httpClient,
		});
		return;
	}

	ctx.status = 200;
	ctx.body = jsonRpcError(requestId, -32601, `Method not found: ${method}`);
};

module.exports = {
	PROTOCOL_VERSION,
	SERVER_INFO,
	buildToolRegistry,
	resolvePathAndPayload,
	getMcpInfo,
	handleMcpRequest,
};
