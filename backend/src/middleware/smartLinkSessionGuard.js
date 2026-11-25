const config = require("../config");
const {
	isPerClientCredential,
	isSmartLinkSessionManagement,
	resolveProxyPath,
} = require("../config/smart-link-x402-policy");

/**
 * Block SmartLink session list/status/read/update/delete on the shared x402
 * service account. Callers who present their own API key or JWT continue.
 * Runs before payment so a shared-account caller cannot buy access.
 */
module.exports = async (ctx, next) => {
	if (ctx.method === "OPTIONS") return next();

	const pathToCheck = resolveProxyPath(ctx.path, ctx.get("x-target-url"));
	if (!isSmartLinkSessionManagement(ctx.method, pathToCheck)) return next();

	if (isPerClientCredential(ctx.get("authorization"), config.verifik?.serviceToken)) {
		return next();
	}

	ctx.status = 403;
	ctx.body = {
		code: "Forbidden",
		message:
			"SmartLink session list, status, update, and delete require a per-client API key or JWT. They are not available through the shared x402 account.",
	};
};
