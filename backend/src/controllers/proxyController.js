const axios = require("axios");
const config = require("../config");
const {
	isSmartLinkPublicStatusPoll,
	isSmartLinkSessionCreate,
	isSmartLinkSessionManagement,
	scopeCreatedSessionBody,
} = require("../config/smart-link-x402-policy");
const {
	isSmartReportProtectedPath,
	validateProxyTargetSafety,
} = require("../config/smart-report-auth-policy");

const VERIFIK_BASE_URL = (config.verifik.apiUrl || "https://api.verifik.co").replace(/\/$/, "");

let _manifest = null;
const getManifest = () => {
	if (!_manifest) {
		_manifest = require("../config/tools-manifest.json");
	}
	return _manifest;
};

const resolveVerifikPath = (ctxPath) => {
	const manifest = getManifest();
	for (const manifestTool of manifest.endpoints || []) {
		try {
			if (new URL(manifestTool.url).pathname === ctxPath) {
				return manifestTool.verifikPath || null;
			}
		} catch {
			// Skip malformed manifest entries.
		}
	}
	return null;
};

const resolveUpstreamTarget = (ctx) => {
	const targetUrlHeader = ctx.get("x-target-url");
	const safety = validateProxyTargetSafety(ctx.path, targetUrlHeader, VERIFIK_BASE_URL);
	if (!safety.valid) {
		return { ok: false, status: 400, message: safety.reason };
	}

	if (safety.resolvedUrl) {
		return { ok: true, targetUrl: safety.resolvedUrl, upstreamPath: safety.resolvedPath };
	}

	if (ctx.path.startsWith("/api/")) {
		const mappedPath = resolveVerifikPath(ctx.path);
		const fallbackUpstreamPath =
			ctx.path.startsWith("/api/v2/") || ctx.path.startsWith("/api/v3/")
				? ctx.path.replace(/^\/api/, "")
				: `/v2/${ctx.path.replace(/^\/api\//, "")}`;
		const upstreamPath = mappedPath || fallbackUpstreamPath;
		return { ok: true, targetUrl: `${VERIFIK_BASE_URL}${upstreamPath}`, upstreamPath };
	}

	const upstreamPath = ctx.path.startsWith("/") ? ctx.path : `/${ctx.path}`;
	return { ok: true, targetUrl: `${VERIFIK_BASE_URL}${upstreamPath}`, upstreamPath };
};

const canAttachSharedServiceToken = (ctx, upstreamPath) => {
	if (!config.verifik?.serviceToken) return false;
	if (!ctx.get("x-payment-tx")) return false;
	if (isSmartLinkPublicStatusPoll(ctx.method, upstreamPath)) return false;
	if (isSmartLinkSessionManagement(ctx.method, upstreamPath)) return false;
	if (isSmartReportProtectedPath(upstreamPath)) return false;
	return true;
};

const buildUpstreamHeaders = (ctx, upstreamPath) => {
	let authHeader = ctx.header.authorization;
	if (!authHeader && canAttachSharedServiceToken(ctx, upstreamPath)) {
		authHeader = `Bearer ${config.verifik.serviceToken}`;
	}

	const headers = {
		"Content-Type": "application/json",
		Accept: "application/json",
	};
	if (authHeader) headers.Authorization = authHeader;
	if (ctx.get("x-smartlink-status-token")) {
		headers["x-smartlink-status-token"] = ctx.get("x-smartlink-status-token");
	}
	if (ctx.get("x-payment-tx")) headers["x-payment-tx"] = ctx.get("x-payment-tx");
	if (ctx.get("x-wallet-address")) headers["x-wallet-address"] = ctx.get("x-wallet-address");
	if (ctx.get("x-payment-amount")) headers["x-payment-amount"] = ctx.get("x-payment-amount");
	if (ctx.ip) headers["x-forwarded-for"] = ctx.get("x-forwarded-for") || ctx.ip;
	if (ctx.get("user-agent")) headers["user-agent"] = ctx.get("user-agent");
	return headers;
};

const maybeRecordPaymentProof = async (ctx, targetUrl, responseBody, responseStatus) => {
	if (!ctx.state.payment || responseStatus >= 400 || !config.erc8004.validationRegistry) return;

	try {
		const { recordValidationProof } = require("../modules/agent.module");
		const toolName = targetUrl.split("/").pop() || "unknown-api";
		const requestArguments = { ...ctx.query, ...ctx.request.body };
		const proofHash = await recordValidationProof(
			toolName,
			requestArguments,
			responseBody,
			ctx.state.payment.txHash
		);

		if (proofHash) {
			ctx.set("x-validation-proof", proofHash);
			if (typeof ctx.body === "object" && ctx.body !== null) {
				ctx.body._proof = proofHash;
			}
		}
	} catch (proofError) {
		console.error("[Proxy] Proof recording failed:", proofError.message);
	}
};

/**
 * Proxies requests to the Verifik API after x402 / tenant auth guards complete.
 */
const handleRequest = async (ctx) => {
	const resolved = resolveUpstreamTarget(ctx);
	if (!resolved.ok) {
		ctx.status = resolved.status;
		ctx.body = { code: "BadRequest", message: resolved.message };
		return;
	}

	const { targetUrl, upstreamPath } = resolved;
	const headers = buildUpstreamHeaders(ctx, upstreamPath);

	try {
		const response = await axios({
			method: ctx.method,
			url: targetUrl,
			params: ctx.query,
			data: ctx.request.body,
			headers,
			validateStatus: () => true,
		});

		let responseBody = response.data;
		if (response.status < 400 && isSmartLinkSessionCreate(ctx.method, upstreamPath)) {
			const scoped = scopeCreatedSessionBody(response.data, ctx.request.body);
			if (!scoped.ok) {
				console.error("[Proxy] SmartLink create response was not a single session; dropping upstream body");
				ctx.status = 502;
				ctx.body = {
					code: "BadGateway",
					message: "The session create response could not be limited to the new session.",
				};
				return;
			}
			responseBody = scoped.body;
		}

		ctx.status = response.status;
		if (response.headers["content-type"]) {
			ctx.set("Content-Type", response.headers["content-type"]);
		}
		ctx.body = responseBody;

		await maybeRecordPaymentProof(ctx, targetUrl, responseBody, response.status);
		console.log(`[Proxy] Upstream responded with ${response.status}`);
	} catch (proxyError) {
		console.error("[Proxy] Forwarding Failed:", proxyError.message);
		if (proxyError.code === "ECONNREFUSED" || proxyError.code === "ENOTFOUND") {
			ctx.status = 502;
			ctx.body = { error: "Upstream Service Unavailable" };
		} else {
			ctx.status = 500;
			ctx.body = { error: "Internal Proxy Error" };
		}
	}
};

module.exports = {
	handleRequest,
};
