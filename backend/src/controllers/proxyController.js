const axios = require("axios");
const https = require("https");
const config = require("../config");

const VERIFIK_BASE_URL = config.verifik.apiUrl || "https://verifik.app";

/**
 * Proxies requests to the Verifik API
 * Validates x402 payment via middleware before reaching here.
 */
const handleRequest = async (ctx) => {
	// 1. Construct Target URL
	// Check if x-target-url header is present (from Postman UI)
	const targetUrlHeader = ctx.get("x-target-url");

	let targetUrl;
	if (targetUrlHeader) {
		// Postman UI mode - use the target URL from header
		targetUrl = targetUrlHeader;
		console.log(`[Proxy] Using target URL from header: ${targetUrl}`);
	} else {
		// Regular proxy mode - use ctx.path
		// ctx.path is e.g. "/v2/co/runt/vehiculo"
		const baseUrl = VERIFIK_BASE_URL.replace(/\/$/, "");
		const targetPath = ctx.path.startsWith("/") ? ctx.path : "/" + ctx.path;
		targetUrl = `${baseUrl}${targetPath}`;
	}

	console.log(`[Proxy] Forwarding ${ctx.method} to ${targetUrl}`);

	// 2. Prepare Headers
	// We inject our Agent's Service Token to authenticate with Verifik
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${config.verifik.serviceToken}`,
		Accept: "application/json",
	};

	try {
		// Forward request
		const response = await axios({
			method: ctx.method,
			url: targetUrl,
			params: ctx.query, // Forward Query Params
			data: ctx.request.body, // Forward Body
			headers: headers,
			validateStatus: () => true, // Check all status codes manually
			// Bypass SSL certificate errors
			httpsAgent: new https.Agent({
				rejectUnauthorized: false,
			}),
		});

		// 3. Forward Response Back to Client
		ctx.status = response.status;

		// Forward useful headers (optional, usually Content-Type is key)
		if (response.headers["content-type"]) {
			ctx.set("Content-Type", response.headers["content-type"]);
		}

		ctx.body = response.data;

		console.log(`[Proxy] Upstream responded with ${response.status}`);
	} catch (error) {
		console.error("[Proxy] Forwarding Failed:", error.message);

		if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
			ctx.status = 502; // Bad Gateway
			ctx.body = { error: "Upstream Service Unavailable" };
		} else {
			ctx.status = 500;
			ctx.body = { error: "Internal Proxy Error" };
		}
	}
};

module.exports = {
	handleRequest,
};
