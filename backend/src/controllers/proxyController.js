const axios = require("axios");
const https = require("https");
const path = require("path");
const config = require("../config");

const VERIFIK_BASE_URL = config.verifik.apiUrl;

/** Lazy-loaded manifest (avoids circular require at startup). */
let _manifest = null;
const getManifest = () => {
    if (!_manifest) {
        _manifest = require(path.resolve(__dirname, "../config/tools-manifest.json"));
    }
    return _manifest;
};

/**
 * For `/api/*` paths, look up the tool whose public URL pathname matches
 * `ctx.path` and return its `verifikPath` (the Verifik-backend path).
 * Falls back to `null` so the caller can decide what to do.
 *
 * @param {string} ctxPath  e.g. "/api/co/cedula"
 * @returns {string|null}   e.g. "/v2/co/cedula"
 */
const resolveVerifikPath = (ctxPath) => {
    const manifest = getManifest();
    for (const tool of manifest.endpoints || []) {
        try {
            if (new URL(tool.url).pathname === ctxPath) return tool.verifikPath || null;
        } catch {
            // malformed manifest url — skip
        }
    }
    return null;
};

/**
 * Proxies requests to the Verifik API.
 * Validates x402 payment via middleware before reaching here.
 */
const handleRequest = async (ctx) => {
    // 1. Construct Target URL
    const targetUrlHeader = ctx.get("x-target-url");

    let targetUrl;
    if (targetUrlHeader) {
        // Postman UI mode — caller provides the full Verifik target URL.
        targetUrl = targetUrlHeader;
    } else if (ctx.path.startsWith("/api/")) {
        // New public alias (/api/co/cedula → /v2/co/cedula on Verifik).
        // Prefer manifest verifikPath for precise mapping; fall back to
        // stripping /api/ and prepending /v2/ as a best-effort default.
        const verifik = resolveVerifikPath(ctx.path);
        const upstreamPath = verifik || "/v2/" + ctx.path.replace(/^\/api\/v3\//, "v3/").replace(/^\/api\//, "");
        const baseUrl = VERIFIK_BASE_URL.replace(/\/$/, "");
        targetUrl = `${baseUrl}${upstreamPath}`;
    } else {
        // Legacy /v2/* and /v3/* — path IS the Verifik path.
        const baseUrl = VERIFIK_BASE_URL.replace(/\/$/, "");
        const targetPath = ctx.path.startsWith("/") ? ctx.path : "/" + ctx.path;
        targetUrl = `${baseUrl}${targetPath}`;
    }

    // 2. Prepare Headers
    let authHeader = ctx.header.authorization;

    // Strict Logic: We only inject the Service Token if the Authorization header is missing
    // AND a payment transaction is present (Postman x402 flow).
    // This prevents "free" access if the x402 middleware is bypassed without payment.
    if (!authHeader && ctx.get("x-payment-tx")) {
        authHeader = `Bearer ${config.verifik.serviceToken}`;
    }

    const headers = {
        "Content-Type": "application/json",
        Authorization: authHeader,
        Accept: "application/json",
    };

    // Forward Payment Headers
    if (ctx.get("x-payment-tx")) headers["x-payment-tx"] = ctx.get("x-payment-tx");
    if (ctx.get("x-wallet-address")) headers["x-wallet-address"] = ctx.get("x-wallet-address");
    if (ctx.get("x-payment-amount")) headers["x-payment-amount"] = ctx.get("x-payment-amount");

    try {
        // Forward request
        const response = await axios({
            method: ctx.method,
            url: targetUrl,
            params: ctx.query, // Forward Query Params
            data: ctx.request.body, // Forward Body
            headers: headers,
            validateStatus: () => true, // Check all status codes manually
            // Only bypass SSL certificate errors in development
            httpsAgent: new https.Agent({
                rejectUnauthorized: config.env === "production",
            }),
        });

        // 3. Forward Response Back to Client
        ctx.status = response.status;

        // Forward useful headers (optional, usually Content-Type is key)
        if (response.headers["content-type"]) {
            ctx.set("Content-Type", response.headers["content-type"]);
        }

        ctx.body = response.data;

        // 4. Record Validation Proof if Payment was used
        if (ctx.state.payment && response.status < 400 && config.erc8004.validationRegistry) {
            try {
                const { recordValidationProof } = require("../modules/agent.module");
                const toolName = targetUrl.split("/").pop() || "unknown-api";

                // We need to parse the args logic slightly differently for proxy,
                // but let's just dump query + body
                const args = { ...ctx.query, ...ctx.request.body };

                const proofHash = await recordValidationProof(toolName, args, response.data, ctx.state.payment.txHash);

                if (proofHash) {
                    ctx.set("x-validation-proof", proofHash);
                    // Also inject into body if it's an object
                    if (typeof ctx.body === "object" && ctx.body !== null) {
                        ctx.body._proof = proofHash;
                    }
                }
            } catch (proofErr) {
                console.error("[Proxy] Proof recording failed:", proofErr.message);
            }
        }

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
