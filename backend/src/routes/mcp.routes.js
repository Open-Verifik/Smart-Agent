const McpController = require("../controllers/mcp.controller");

/**
 * Model Context Protocol (Streamable HTTP) routes.
 * Mounted at both `/mcp` and `/api/mcp`.
 *
 * @param {import("@koa/router").Router} router
 */
module.exports = (router) => {
	router.get("/mcp", McpController.getMcpInfo);
	router.post("/mcp", (ctx) => McpController.handleMcpRequest(ctx));
	router.get("/api/mcp", McpController.getMcpInfo);
	router.post("/api/mcp", (ctx) => McpController.handleMcpRequest(ctx));
};
