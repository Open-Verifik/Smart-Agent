/**
 * Sync Sponge Gateway endpoints from Smart Agent tools-manifest.json
 *
 * Env:
 *   SPONGE_GATEWAY_API_URL — default https://api.paysponge.com
 *   SPONGE_GATEWAY_API_KEY  — Bearer key (sk_live_… or sk_test_… per your account), or apiKey in ~/.spongegateway/credentials.json
 *   SPONGE_SERVICE_ID       — default svc_d7x9j08brpdma8zjw (Verifik AI service)
 *   DRY_RUN=1               — or pass --dry-run: no POST requests
 *   SPONGE_REQUEST_DELAY_MS — ms between creates (default 150)
 *
 * @see https://gateway.paysponge.com/skill.md
 */

const fs = require("fs");
const path = require("path");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const MANIFEST_PATH = path.resolve(__dirname, "../src/config/tools-manifest.json");
const MIN_PRICE_MINOR = 10000; /** $0.01 USD — Sponge minimum paid step */
const CREDIT_INTENT_TOOL_ID = "credit_intent_kyc_passwordless";

const apiBase = (process.env.SPONGE_GATEWAY_API_URL || "https://api.paysponge.com").replace(/\/$/, "");
const serviceId = process.env.SPONGE_SERVICE_ID || "svc_d7x9j08brpdma8zjw";

const resolveApiKey = () => {
	let key = process.env.SPONGE_GATEWAY_API_KEY || "";
	if (key) return key;
	const credPath = path.join(process.env.HOME || process.env.USERPROFILE || "", ".spongegateway/credentials.json");
	if (!fs.existsSync(credPath)) return "";
	try {
		const cred = JSON.parse(fs.readFileSync(credPath, "utf8"));
		return cred.apiKey || "";
	} catch {
		return "";
	}
};
const dryRun =
	process.env.DRY_RUN === "1" ||
	process.env.DRY_RUN === "true" ||
	process.argv.includes("--dry-run");
const delayMs = Math.max(0, Number(process.env.SPONGE_REQUEST_DELAY_MS || 150));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @param {string} method
 * @param {string} pathname
 */
const routeKey = (method, pathname) => `${String(method).toUpperCase()} ${pathname}`;

/**
 * @param {number} priceUsd
 */
const priceMinorFromUsd = (priceUsd) =>
	Math.max(MIN_PRICE_MINOR, Math.round(Number(priceUsd) * 1_000_000));

/**
 * @param {number} minor
 */
const priceDisplayFromMinor = (minor) => {
	const s = (minor / 1_000_000).toFixed(6).replace(/\.?0+$/, "");
	return s === "" ? "0" : s;
};

/**
 * @param {object} manifest
 */
const buildJobsFromManifest = (manifest) =>
	manifest.endpoints.map((t) => {
		const pathname = new URL(t.url).pathname;
		const method = String(t.method || "GET").toUpperCase();
		const price = priceMinorFromUsd(t.priceUsd || 0);
		const enabled = t.id !== CREDIT_INTENT_TOOL_ID;
		const categoryRaw = t.country ? `${t.country} · ${t.name || t.id}` : t.name || t.id;
		const category = categoryRaw.length > 128 ? categoryRaw.slice(0, 128) : categoryRaw;
		return {
			service_id: serviceId,
			http_method: method,
			path: pathname,
			price,
			category,
			enabled,
			currency: "USD",
			payment_mode: "charge",
			payment_scheme: "exact",
		};
	});

/**
 * @param {import('axios').AxiosInstance} client
 * @returns {Promise<Set<string>>}
 */
const loadExistingKeys = async (client) => {
	let res = await client.get("/api/endpoints", { params: { serviceId } });
	if (res.status !== 200) {
		res = await client.get("/api/endpoints");
	}
	if (res.status !== 200) {
		throw new Error(`GET /api/endpoints failed ${res.status}: ${JSON.stringify(res.data)}`);
	}
	const body = res.data;
	const list = Array.isArray(body) ? body : body.endpoints || body.data || [];
	const keys = new Set();
	for (const e of list) {
		if (e.serviceId && String(e.serviceId) !== serviceId) continue;
		const m = e.httpMethod || e.http_method;
		const p = e.path;
		if (m && p) keys.add(routeKey(String(m), String(p)));
	}
	return keys;
};

/**
 * @param {import('axios').AxiosInstance} client
 * @param {object} tool
 * @param {string} pathname
 * @param {Set<string>} existing
 */
const syncOne = async (client, tool, pathname, existing) => {
	const method = String(tool.method || "GET").toUpperCase();
	const key = routeKey(method, pathname);
	if (existing.has(key)) {
		return { skipped: true, key };
	}

	const priceMinor = priceMinorFromUsd(tool.priceUsd || 0);
	const enabled = tool.id !== CREDIT_INTENT_TOOL_ID;
	const categoryRaw = tool.country ? `${tool.country} · ${tool.name || tool.id}` : tool.name || tool.id;
	const category = categoryRaw.length > 128 ? categoryRaw.slice(0, 128) : categoryRaw;

	const body = {
		serviceId,
		httpMethod: method,
		path: pathname,
		price: String(priceMinor),
		priceDisplay: priceDisplayFromMinor(priceMinor),
		currency: "USD",
		currencyMinorUnits: 6,
		paymentMode: "charge",
		paymentScheme: "exact",
		enabled,
		category,
	};

	if (dryRun) {
		console.log(`[dry-run] POST /api/endpoints ${key} price=${priceMinor} enabled=${enabled}`);
		existing.add(key);
		return { dryRun: true, key };
	}

	const res = await client.post("/api/endpoints", body);
	if (res.status < 200 || res.status >= 300) {
		throw new Error(JSON.stringify(res.data));
	}
	const created = res.data?.endpoint || res.data;
	console.log(`[ok] ${key} id=${created?.id || "?"}`);
	existing.add(key);
	return { created: true, key, id: created?.id };
};

const main = async () => {
	const apiKey = resolveApiKey();
	if (process.argv.includes("--write-jobs")) {
		const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
		const outDir = path.join(__dirname, "generated");
		if (!fs.existsSync(outDir)) {
			fs.mkdirSync(outDir, { recursive: true });
		}
		const dest = path.join(outDir, "sponge-endpoint-jobs.json");
		fs.writeFileSync(dest, JSON.stringify(buildJobsFromManifest(manifest), null, 2));
		console.log(`Wrote ${manifest.endpoints.length} jobs to ${dest}`);
		return;
	}

	const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
	if (!manifest.endpoints || !Array.isArray(manifest.endpoints)) {
		throw new Error("Invalid tools-manifest.json: missing endpoints array");
	}

	if (!dryRun && !apiKey) {
		console.error(
			"SPONGE_GATEWAY_API_KEY is required (backend/.env or ~/.spongegateway/credentials.json apiKey). Use DRY_RUN=1 or --dry-run to preview only."
		);
		process.exit(1);
	}

	/** @type {Set<string>} */
	let existing = new Set();

	if (apiKey) {
		const client = axios.create({
			baseURL: apiBase,
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
			validateStatus: () => true,
		});
		existing = await loadExistingKeys(client);
		console.log(`Existing endpoints on service ${serviceId}: ${existing.size}`);

		let created = 0;
		let skipped = 0;
		let dryRunNew = 0;
		const errors = [];

		for (const tool of manifest.endpoints) {
			let pathname;
			try {
				pathname = new URL(tool.url).pathname;
			} catch {
				console.warn(`Skip invalid url: ${tool.id} ${tool.url}`);
				continue;
			}

			try {
				const result = await syncOne(client, tool, pathname, existing);
				if (result.skipped) skipped++;
				else if (result.dryRun) dryRunNew++;
				else if (result.created) created++;
				if (!dryRun && delayMs) await sleep(delayMs);
			} catch (err) {
				const msg = err.response?.data || err.message;
				errors.push({ id: tool.id, msg });
				console.error(`[fail] ${tool.id}`, msg);
			}
		}

		console.log("\nSummary:");
		console.log(`  manifest tools: ${manifest.endpoints.length}`);
		console.log(`  unchanged (already registered): ${skipped}`);
		if (dryRun) console.log(`  dry-run (would create): ${dryRunNew}`);
		else console.log(`  created via API: ${created}`);
		console.log(`  errors: ${errors.length}`);
		if (errors.length) process.exitCode = 1;
		return;
	}

	/** Preview without API key */
	console.log("No SPONGE_GATEWAY_API_KEY — listing manifest routes only (set key in backend/.env or ~/.spongegateway/credentials.json to sync).");
	let n = 0;
	for (const tool of manifest.endpoints) {
		try {
			const pathname = new URL(tool.url).pathname;
			const key = routeKey(tool.method || "GET", pathname);
			const priceMinor = priceMinorFromUsd(tool.priceUsd || 0);
			const enabled = tool.id !== CREDIT_INTENT_TOOL_ID;
			console.log(`${key} minor=${priceMinor} enabled=${enabled} (${tool.id})`);
			n++;
		} catch {
			console.warn(`Bad url: ${tool.id}`);
		}
	}
	console.log(`Total: ${n}`);
};

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
