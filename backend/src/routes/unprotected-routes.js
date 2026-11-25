module.exports = (router) => {
	require("./discovery.routes")(router);
	require("./agent.routes")(router);
	require("./mcp.routes")(router);
};
