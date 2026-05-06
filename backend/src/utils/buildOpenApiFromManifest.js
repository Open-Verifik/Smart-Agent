/**
 * Build OpenAPI 3.0 discovery from tools-manifest.json (same source as x402 pricing).
 *
 * Env for servers URL: {@link ../config/index.js} sets `config.publicOrigin` from
 * `PUBLIC_ORIGIN` or `AGENT_BASE_URL` (origin only), else `http://127.0.0.1:<PORT>`.
 */

const path = require("path");
const packageJson = require(path.resolve(__dirname, "../../package.json"));

/**
 * USD amount string aligned with runtime `priceUsd` (up to 6 decimals, no float noise).
 *
 * @param {number} priceUsd
 * @returns {string}
 */
const formatUsdAmount = (priceUsd) => {
	const n = Number(priceUsd);
	if (!Number.isFinite(n)) return "0";
	return (Math.round(n * 1_000_000) / 1_000_000).toString();
};

/**
 * @param {Record<string, unknown>} obj
 * @returns {Record<string, unknown>}
 */
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

/**
 * @param {string} publicOrigin
 * @returns {string}
 */
const buildXGuidance = (publicOrigin) =>
	[
		`Verifik Smart Agent proxy API — base URL: ${publicOrigin}`,
		"",
		"PAYMENT (x402): Most clients call concrete paths under /v2 or /v3. Without a valid Verifik **user** Bearer JWT, the API responds **402 Payment Required** until you pay.",
		"- Submit on-chain payment, then retry with header **x-payment-tx** set to the transaction hash (or **Authorization: L402 <txHash>**).",
		"- Optional **x-payment-chain-id** (decimal or 0x hex) selects the settlement chain; default is Avalanche C-Chain. Assets: native gas token, USDC, or VKA where configured — see runtime 402 JSON for chain-specific fields.",
		"",
		"CREDITS BYPASS: **Authorization: Bearer <user JWT>** (a normal Verifik client token, not the server service token) skips on-chain payment for the same routes.",
		"",
		"ALTERNATE ENTRY: **GET/POST /api/proxy** with required header **x-target-url** pointing at the same /v2 or /v3 path (absolute or relative). Price is resolved from that target path. Prefer documented /v2 and /v3 operations when possible.",
		"",
		"OpenAPI is canonical for listing; **/.well-known/x402** lists payable resource strings (METHOD + path).",
	].join("\n");

/**
 * Build `/.well-known/x402` v1 document.
 *
 * @param {{ endpoints: object[] }} manifest
 * @returns {{ version: number, resources: string[] }}
 */
const buildWellKnownX402 = (manifest) => {
	const resources = [];
	for (const tool of manifest.endpoints || []) {
		let pathname;
		try {
			pathname = new URL(tool.url).pathname;
		} catch {
			continue;
		}
		const method = String(tool.method || "GET").toUpperCase();
		resources.push(`${method} ${pathname}`);
	}
	resources.push("GET /api/proxy");
	resources.push("POST /api/proxy");
	return { version: 1, resources };
};

/**
 * Map manifest `parameters` to OpenAPI query `parameters` for GET/DELETE.
 *
 * @param {object} paramSchema
 * @returns {object[]}
 */
const manifestParamsToQueryOpenApi = (paramSchema) => {
	if (!paramSchema || paramSchema.type !== "object" || !paramSchema.properties) return [];
	const required = Array.isArray(paramSchema.required) ? paramSchema.required : [];
	/** @type {object[]} */
	const out = [];
	for (const [name, prop] of Object.entries(paramSchema.properties)) {
		if (!prop || typeof prop !== "object") continue;
		const { description, ...rest } = prop;
		const schema = { ...rest };
		/** @type {object} */
		const entry = {
			name,
			in: "query",
			required: required.includes(name),
			schema,
		};
		if (description) entry.description = description;
		out.push(entry);
	}
	return out;
};

/** Discovery `@agentcash/discovery` expects `price` as a fixed/dynamic object (not nested under `fixed`/`dynamic`). MPP entries must use non-empty method/intent/currency strings. */
const PAYMENT_PROTOCOLS = [
	{ x402: {} },
	{ mpp: { method: "POST", intent: "charge", currency: "USD" } },
];

/**
 * @param {object} tool
 * @returns {object}
 */
const xPaymentInfoForTool = (tool) => ({
	price: {
		mode: "fixed",
		currency: "USD",
		amount: formatUsdAmount(tool.priceUsd),
	},
	protocols: PAYMENT_PROTOCOLS,
});

const xPaymentInfoForProxy = (manifest) => {
	const nums = (manifest.endpoints || []).map((t) => Number(t.priceUsd)).filter(Number.isFinite);
	const maxUsd = nums.length ? Math.max(...nums) : 1;
	const minUsd = nums.length ? Math.min(...nums) : 0.01;
	return {
		price: {
			mode: "dynamic",
			currency: "USD",
			min: formatUsdAmount(minUsd),
			max: formatUsdAmount(maxUsd),
		},
		protocols: PAYMENT_PROTOCOLS,
	};
};

/**
 * @param {object} tool
 * @returns {object}
 */
const buildOperationFromTool = (tool) => {
	const method = String(tool.method || "GET").toUpperCase();
	const paramSchema = tool.parameters && typeof tool.parameters === "object" ? tool.parameters : { type: "object", properties: {} };

	/** @type {object} */
	const op = {
		tags: ["VerifikProxy"],
		operationId: String(tool.id || tool.code || "op"),
		summary: tool.name || tool.id,
		description: tool.description || undefined,
		"x-payment-info": xPaymentInfoForTool(tool),
		responses: {
			200: { description: "Success — proxied Verifik response" },
			402: { description: "Payment Required" },
		},
	};

	if (method === "GET" || method === "DELETE") {
		let queryParams = manifestParamsToQueryOpenApi(paramSchema);
		if (!queryParams.length) {
			queryParams = [
				{
					name: "_noQueryParams",
					in: "query",
					required: false,
					description:
						"This route has no query parameters in the manifest; send requests without query keys (this entry exists for discovery tooling only).",
					schema: { type: "string" },
				},
			];
		}
		op.parameters = queryParams;
	} else {
		op.requestBody = {
			required: true,
			content: {
				"application/json": {
					schema: deepClone(paramSchema),
				},
			},
		};
	}

	return op;
};

/**
 * @param {{ endpoints: object[] }} manifest
 * @param {{ publicOrigin?: string }} [options]
 * @returns {object}
 */
const buildOpenApiFromManifest = (manifest, options = {}) => {
	const publicOrigin = (options.publicOrigin || "http://127.0.0.1:3060").replace(/\/$/, "");

	/** @type {Record<string, Record<string, object>>} */
	const paths = {};

	for (const tool of manifest.endpoints || []) {
		let pathname;
		try {
			pathname = new URL(tool.url).pathname;
		} catch {
			continue;
		}
		const method = String(tool.method || "GET").toLowerCase();
		if (!paths[pathname]) paths[pathname] = {};
		paths[pathname][method] = buildOperationFromTool(tool);
	}

	const proxyParameters = [
		{
			name: "x-target-url",
			in: "header",
			required: true,
			schema: { type: "string" },
			description: "Target Verifik path or full URL (e.g. https://example.com/v2/co/cedula or /v2/co/cedula). Price is derived from this path.",
		},
	];

	const proxyOpGet = {
		tags: ["VerifikProxy"],
		operationId: "api_proxy_get",
		summary: "Proxy to Verifik (GET)",
		description:
			"Generic proxy entry for GET; **x-target-url** must reference a manifest route. Prefer explicit /v2 or /v3 operations when possible.",
		parameters: [...proxyParameters],
		"x-payment-info": xPaymentInfoForProxy(manifest),
		responses: {
			200: { description: "Success — proxied Verifik response" },
			402: { description: "Payment Required" },
		},
	};

	const proxyOpPost = {
		tags: ["VerifikProxy"],
		operationId: "api_proxy_post",
		summary: "Proxy to Verifik (POST)",
		description:
			"Generic proxy entry for POST; **x-target-url** must reference a manifest route. JSON body is forwarded upstream.",
		parameters: [...proxyParameters],
		requestBody: {
			required: false,
			content: {
				"application/json": {
					schema: { type: "object", additionalProperties: true },
				},
			},
		},
		"x-payment-info": xPaymentInfoForProxy(manifest),
		responses: {
			200: { description: "Success — proxied Verifik response" },
			402: { description: "Payment Required" },
		},
	};

	if (!paths["/api/proxy"]) paths["/api/proxy"] = {};
	paths["/api/proxy"].get = proxyOpGet;
	paths["/api/proxy"].post = proxyOpPost;

	return {
		openapi: "3.0.3",
		info: {
			title: "Verifik AI — x402 KYC & Verifik proxy",
			version: packageJson.version || "1.0.0",
			description:
				"x402-native KYC, KYB, and public-record APIs with strong Latin American coverage. Paid proxy to Verifik; pricing matches tools-manifest.json and runtime x402 middleware.",
			"x-guidance": buildXGuidance(publicOrigin),
		},
		servers: [{ url: publicOrigin }],
		tags: [{ name: "VerifikProxy", description: "x402-gated Verifik API proxy paths" }],
		paths,
	};
};

module.exports = buildOpenApiFromManifest;
module.exports.buildWellKnownX402 = buildWellKnownX402;
module.exports.formatUsdAmount = formatUsdAmount;
