const config = require("../config");
const toolsManifest = require("../config/tools-manifest.json");
const buildOpenApiFromManifest = require("../utils/buildOpenApiFromManifest");
const { buildWellKnownX402 } = require("../utils/buildOpenApiFromManifest");

/**
 * GET /openapi.json — OpenAPI 3 discovery for x402 agents.
 */
const getOpenApi = async (ctx) => {
	ctx.type = "application/json; charset=utf-8";
	ctx.body = buildOpenApiFromManifest(toolsManifest, { publicOrigin: config.publicOrigin });
};

/**
 * GET /.well-known/x402 — v1 resource list fallback.
 */
const getWellKnownX402 = async (ctx) => {
	ctx.type = "application/json; charset=utf-8";
	ctx.body = buildWellKnownX402(toolsManifest);
};

module.exports = { getOpenApi, getWellKnownX402 };
