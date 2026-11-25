const config = require("../config");
const {
	resolveProxyPath,
	isPerClientCredential,
	isSmartReportProtectedPath,
	validateProxyTargetSafety,
} = require("../config/smart-report-auth-policy");

/**
 * Require a caller-supplied Verifik Bearer JWT / API key on all SmartReports,
 * SmartReportTemplates, BatchConfigurations, SmartBatches, and Preset routes,
 * and reject unsafe `x-target-url` smuggling before x402Middleware runs.
 */
module.exports = async (ctx, next) => {
	if (ctx.method === "OPTIONS") return next();

	const targetUrlHeader = ctx.get("x-target-url");
	const targetSafety = validateProxyTargetSafety(
		ctx.path,
		targetUrlHeader,
		config.verifik?.apiUrl || "https://api.verifik.co"
	);

	if (!targetSafety.valid) {
		ctx.status = 400;
		ctx.body = {
			code: "BadRequest",
			message: targetSafety.reason,
		};
		return;
	}

	const pathToCheck = resolveProxyPath(ctx.path, targetUrlHeader);
	if (!isSmartReportProtectedPath(pathToCheck)) return next();

	if (isPerClientCredential(ctx.get("authorization"), config.verifik?.serviceToken)) {
		return next();
	}

	ctx.status = 403;
	ctx.body = {
		code: "Forbidden",
		message:
			"SmartReports, SmartReportTemplates, BatchConfigurations, and SmartBatches require your own per-client Verifik Bearer JWT. They are not available through the shared x402 account.",
	};
};
