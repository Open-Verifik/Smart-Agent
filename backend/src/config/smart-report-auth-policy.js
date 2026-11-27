/**
 * Tenant isolation policy for SmartReports / SmartReportTemplates / BatchConfigurations / SmartBatches.
 *
 * Unlike pay-per-call public lookups or single-session SmartLink minting, every SmartReports
 * resource is tenant-owned and billed against the caller's Verifik client account. Shared x402
 * service-token fallback must NEVER be used to access or execute tenant reports.
 */

const path = require("path");
const {
	resolveProxyPath,
	isPerClientCredential,
	extractClientBearerToken,
	normalizeInboundProxyRoute,
} = require("./smart-link-x402-policy");

const PROTECTED_V2_SEGMENTS = [
	"smart-reports",
	"smart-report-templates",
	"batch-configurations",
	"smart-batches",
	"smart-batch-presets",
	"teams",
	"client-roles",
	"staff",
	"staff-access-requests",
	"staff-audit-logs",
	"cost-centers",
	"usage",
	"internal",
];

const decodeAsciiPercentEscapes = (value) =>
	String(value).replace(/%([2-7][0-9a-fA-F])/g, (_escapeSeq, hexPair) =>
		String.fromCharCode(parseInt(hexPair, 16))
	);

const hasMalformedOrDoubleEncoding = (rawPath) => {
	if (!rawPath || typeof rawPath !== "string") return false;
	if (/%25/i.test(rawPath)) return true;
	try {
		decodeURIComponent(rawPath);
		return false;
	} catch {
		return true;
	}
};

/**
 * Validate `x-target-url` usage and encoding before proxy/payment middleware runs.
 * Rejects `x-target-url` on non-`/api/proxy` routes, protocol-relative URLs, external origins,
 * and malformed/double percent-encoding.
 */
const validateProxyTargetSafety = (ctxPath, targetUrlHeader, allowedBaseUrl = "https://api.verifik.co") => {
	if (hasMalformedOrDoubleEncoding(ctxPath)) {
		return { valid: false, reason: "Malformed URL encoding in request path." };
	}

	const trimmedTarget = typeof targetUrlHeader === "string" ? targetUrlHeader.trim() : "";
	if (!trimmedTarget) {
		return { valid: true };
	}

	if (normalizeInboundProxyRoute(ctxPath) !== "/api/proxy") {
		return { valid: false, reason: "x-target-url header is only permitted on /api/proxy." };
	}

	if (trimmedTarget.startsWith("//") || hasMalformedOrDoubleEncoding(trimmedTarget)) {
		return { valid: false, reason: "Invalid or unsafe x-target-url header." };
	}

	try {
		const allowedOrigin = new URL(allowedBaseUrl).origin;
		const parsedTarget = new URL(trimmedTarget, allowedOrigin);
		if (parsedTarget.origin !== allowedOrigin) {
			return { valid: false, reason: "x-target-url must target the configured Verifik API origin." };
		}
		return { valid: true, resolvedUrl: parsedTarget.toString(), resolvedPath: parsedTarget.pathname };
	} catch {
		return { valid: false, reason: "Invalid x-target-url header." };
	}
};

/**
 * Normalize public `/api/*`, `/api/v2/*`, or upstream `/v2/*` paths to `/v2/...`.
 * Normalizes dot-segments before and after decoding to defeat traversal differentials.
 */
const normalizeSmartReportPath = (pathname) => {
	if (!pathname || typeof pathname !== "string") return "";
	let rawPath = pathname.split("?")[0].split("#")[0].replace(/\\/g, "/").replace(/\/+/g, "/");
	rawPath = path.posix.normalize(rawPath.startsWith("/") ? rawPath : `/${rawPath}`);

	for (let pass = 0; pass < 2; pass += 1) {
		let decodedPath = rawPath;
		try {
			decodedPath = decodeURIComponent(rawPath);
		} catch {
			decodedPath = decodeAsciiPercentEscapes(rawPath);
		}
		if (decodedPath === rawPath) break;
		rawPath = decodedPath;
	}

	rawPath = rawPath.replace(/\\/g, "/").replace(/\/+/g, "/");
	let normalizedPath = path.posix.normalize(rawPath.startsWith("/") ? rawPath : `/${rawPath}`).toLowerCase();
	if (normalizedPath.length > 1 && normalizedPath.endsWith("/")) {
		normalizedPath = normalizedPath.slice(0, -1);
	}

	if (normalizedPath.startsWith("/api/v2/")) {
		return `/v2/${normalizedPath.slice("/api/v2/".length)}`;
	}
	if (normalizedPath.startsWith("/api/") && !normalizedPath.startsWith("/api/v3/")) {
		return `/v2/${normalizedPath.slice("/api/".length)}`;
	}
	return normalizedPath;
};

const isSmartReportProtectedPath = (pathname) => {
	if (pathname === "__INVALID_TARGET_URL__") return true;
	const cleanPath = normalizeSmartReportPath(pathname);
	return PROTECTED_V2_SEGMENTS.some(
		(segment) =>
			cleanPath === `/v2/${segment}` ||
			cleanPath.startsWith(`/v2/${segment}/`) ||
			cleanPath === `/${segment}` ||
			cleanPath.startsWith(`/${segment}/`)
	);
};

module.exports = {
	PROTECTED_V2_SEGMENTS,
	normalizeSmartReportPath,
	isSmartReportProtectedPath,
	validateProxyTargetSafety,
	resolveProxyPath,
	isPerClientCredential,
	extractClientBearerToken,
};
