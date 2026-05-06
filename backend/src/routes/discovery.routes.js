const DiscoveryController = require("../controllers/discovery.controller");

/**
 * x402 / AgentCash discovery — unauthenticated; no payment.
 *
 * @param {import("@koa/router").Router} router
 */
module.exports = (router) => {
	router.get("/openapi.json", DiscoveryController.getOpenApi);
	router.get("/.well-known/x402", DiscoveryController.getWellKnownX402);
};
