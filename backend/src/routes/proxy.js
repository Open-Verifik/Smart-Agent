const Router = require("@koa/router").Router || require("@koa/router");
const disabledEndpointGuard = require("../middleware/disabledEndpointGuard");
const x402Middleware = require("../middleware/x402");
const proxyController = require("../controllers/proxyController");

const router = new Router();

/**
 * Legacy proxy routes — kept for backwards compatibility.
 * These are the original /v2/* and /v3/* paths that hit Verifik directly.
 */
router.all(/^\/v2\/.+/, disabledEndpointGuard, x402Middleware, proxyController.handleRequest);
router.all(/^\/v3\/.+/, disabledEndpointGuard, x402Middleware, proxyController.handleRequest);

/**
 * Generic proxy entry for Postman UI (x-target-url header required).
 * Must be registered BEFORE the broad /api/* catch-all below so this
 * exact path is never swallowed by the regex.
 */
router.all("/api/proxy", disabledEndpointGuard, x402Middleware, proxyController.handleRequest);

/**
 * Public alias routes under /api — these are the canonical paths advertised
 * in the OpenAPI spec / x402scan discovery.
 *
 *   /api/v3/*  →  Verifik /v3/* (handled first so the v3 prefix is preserved)
 *   /api/*     →  Verifik /v2/* (v2 is implicit; paths like /api/co/cedula
 *               map to /v2/co/cedula upstream via verifikPath in the manifest)
 *
 * Reserved paths that must NOT hit the Verifik proxy are excluded via the
 * negative lookahead: agent/, proxy, uploads/
 */
router.all(/^\/api\/v3\/.+/, disabledEndpointGuard, x402Middleware, proxyController.handleRequest);
router.all(/^\/api\/(?!agent\/|proxy(?:\/|$)|uploads\/).+/, disabledEndpointGuard, x402Middleware, proxyController.handleRequest);

module.exports = router;
