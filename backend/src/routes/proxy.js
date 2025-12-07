const Router = require("@koa/router").Router || require("@koa/router");
const x402Middleware = require("../middleware/x402");
const proxyController = require("../controllers/proxyController");

const router = new Router();

/**
 * Proxy Route Definition
 * Captures all requests to /v2/* (e.g. /v2/co/runt/vehiculo)
 * 1. Checks Payment (x402Middleware)
 * 2. Forwards to Verifik (proxyController)
 */

router.all(/^\/v2\/.+/, x402Middleware, proxyController.handleRequest);

/**
 * Generic Proxy Route for Postman UI
 * Accepts target URL in x-target-url header
 * Used by Postman view for x402 payments
 */
router.all("/api/proxy", x402Middleware, proxyController.handleRequest);

module.exports = router;
