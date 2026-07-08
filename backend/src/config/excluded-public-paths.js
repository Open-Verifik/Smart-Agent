/**
 * Public URL pathnames (`https://ai.verifik.co` + path) omitted from the agent
 * manifest, discovery (OpenAPI / x402), and blocked at the proxy layer.
 */
const EXCLUDED_PUBLIC_PATHS = new Set([
	"/api/credit-intents/kyc-passwordless",
	"/api/face-recognition/search-active-user",
	"/api/face-recognition/search-live-face",
	"/api/face-recognition/search/crops",
	"/api/face-recognition/verify",
	"/api/ocr/scan-pro",
	"/api/appointments",
	"/api/autodata/selection",
	"/api/co/policia/consultar",
	"/api/co/cedula/premium",
]);

/** Upstream Verifik paths that map to excluded public paths. */
const EXCLUDED_VERIFIK_PATHS = new Set(["/v2/co/policia/consultar", "/v2/co/cedula/premium"]);

/**
 * @param {string} pathname
 * @returns {boolean}
 */
const isExcludedPublicPath = (pathname) => EXCLUDED_PUBLIC_PATHS.has(pathname);

/**
 * @param {string} pathname
 * @returns {boolean}
 */
const isExcludedVerifikPath = (pathname) => EXCLUDED_VERIFIK_PATHS.has(pathname);

/**
 * @param {{ url?: string } | null | undefined} tool
 * @returns {boolean}
 */
const isExcludedTool = (tool) => {
	if (!tool || !tool.url) return false;
	try {
		const pathname = new URL(tool.url).pathname;
		return isExcludedPublicPath(pathname);
	} catch {
		return false;
	}
};

/**
 * Resolve whether a request path (public or Verifik) is disabled.
 * @param {string} pathname
 * @returns {boolean}
 */
const isDisabledPath = (pathname) => isExcludedPublicPath(pathname) || isExcludedVerifikPath(pathname);

module.exports = {
	EXCLUDED_PUBLIC_PATHS,
	EXCLUDED_VERIFIK_PATHS,
	isExcludedPublicPath,
	isExcludedVerifikPath,
	isExcludedTool,
	isDisabledPath,
};
