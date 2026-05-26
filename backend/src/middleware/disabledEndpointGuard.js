const { isDisabledPath } = require("../config/excluded-public-paths");

/**
 * Reject requests to endpoints that are excluded from the agent catalog.
 * Runs before x402 so disabled routes cannot be paid for or proxied upstream.
 */
module.exports = async (ctx, next) => {
	if (ctx.method === "OPTIONS") return next();

	let pathToCheck = ctx.path;

	if (ctx.path === "/api/proxy" && ctx.header["x-target-url"]) {
		try {
			const targetUrl = new URL(ctx.header["x-target-url"]);
			pathToCheck = targetUrl.pathname;
		} catch {
			if (ctx.header["x-target-url"].startsWith("/")) {
				pathToCheck = ctx.header["x-target-url"];
			}
		}
	}

	if (isDisabledPath(pathToCheck)) {
		ctx.status = 503;
		ctx.body = {
			code: "ServiceUnavailable",
			message: "This endpoint is temporarily unavailable.",
		};
		return;
	}

	return next();
};
