const config = require("../config");
const toolsManifest = require("../config/tools-manifest.json");
const buildOpenApiFromManifest = require("../utils/buildOpenApiFromManifest");
const { buildWellKnownX402 } = require("../utils/buildOpenApiFromManifest");

/**
 * Derive public origin from explicit env config if provided, otherwise infer
 * from forwarded request headers (useful on multi-domain serverless deploys).
 *
 * @param {import("koa").Context} ctx
 * @returns {string}
 */
const resolveRequestOrigin = (ctx) => {
	if (process.env.PUBLIC_ORIGIN || process.env.AGENT_BASE_URL) {
		return config.publicOrigin;
	}
	const rawHost = ctx.get("x-forwarded-host") || ctx.host;
	const rawProto = ctx.get("x-forwarded-proto") || ctx.protocol || "https";
	if (rawHost) {
		const host = String(rawHost).split(",")[0].trim();
		const proto = String(rawProto).split(",")[0].trim();
		try {
			return new URL(`${proto}://${host}`).origin;
		} catch {
			// Fall back to config origin if headers are malformed
		}
	}
	return config.publicOrigin;
};

/**
 * GET /openapi.json — OpenAPI 3 discovery for x402 agents.
 */
const getOpenApi = async (ctx) => {
	ctx.type = "application/json; charset=utf-8";
	ctx.body = buildOpenApiFromManifest(toolsManifest, { publicOrigin: resolveRequestOrigin(ctx) });
};

/**
 * GET /.well-known/x402 — v1 resource list fallback.
 */
const getWellKnownX402 = async (ctx) => {
	ctx.type = "application/json; charset=utf-8";
	ctx.body = buildWellKnownX402(toolsManifest);
};

module.exports = { getOpenApi, getWellKnownX402 };
