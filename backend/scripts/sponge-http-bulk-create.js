/**
 * One-shot: POST all jobs from sponge-endpoint-jobs.json to Sponge Gateway REST API.
 * Jobs file shape: array of { service_id, http_method, path, price, category, enabled, currency, payment_mode, payment_scheme }
 *
 *   SPONGE_GATEWAY_API_KEY=sk_... node scripts/sponge-http-bulk-create.js path/to/jobs.json
 *   or apiKey in ~/.spongegateway/credentials.json
 *
 * @see https://gateway.paysponge.com/skill.md
 */

const fs = require("fs");
const path = require("path");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const apiBase = (process.env.SPONGE_GATEWAY_API_URL || "https://api.paysponge.com").replace(/\/$/, "");
const delayMs = Math.max(0, Number(process.env.SPONGE_REQUEST_DELAY_MS || 150));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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

const routeKey = (method, pathname) => `${String(method).toUpperCase()} ${pathname}`;

/**
 * @param {import('axios').AxiosInstance} client
 * @param {string} serviceId
 */
const loadExistingKeys = async (client, serviceId) => {
	let res = await client.get("/api/endpoints", { params: { serviceId } });
	if (res.status !== 200) res = await client.get("/api/endpoints");
	if (res.status !== 200) throw new Error(`GET /api/endpoints ${res.status}`);
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

const main = async () => {
	const apiKey = resolveApiKey();
	const jobsFile = process.argv[2] || path.join(__dirname, "generated", "sponge-endpoint-jobs.json");
	if (!apiKey) {
		console.error("Set SPONGE_GATEWAY_API_KEY or add apiKey to ~/.spongegateway/credentials.json");
		process.exit(1);
	}
	const rows = JSON.parse(fs.readFileSync(jobsFile, "utf8"));
	const client = axios.create({
		baseURL: apiBase,
		headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
		validateStatus: () => true,
	});

	const serviceId = rows[0]?.service_id || process.env.SPONGE_SERVICE_ID;
	if (!serviceId) {
		console.error("jobs must include service_id or set SPONGE_SERVICE_ID");
		process.exit(1);
	}
	const existing = await loadExistingKeys(client, serviceId);
	console.log(`Existing endpoints: ${existing.size}`);

	let ok = 0;
	let fail = 0;
	let skip = 0;
	for (const j of rows) {
		const k = routeKey(j.http_method, j.path);
		if (existing.has(k)) {
			skip++;
			continue;
		}
		const body = {
			serviceId: j.service_id,
			httpMethod: j.http_method,
			path: j.path,
			price: String(j.price),
			priceDisplay: (Number(j.price) / 1_000_000).toFixed(6).replace(/\.?0+$/, "") || "0",
			currency: j.currency || "USD",
			currencyMinorUnits: 6,
			paymentMode: j.payment_mode || "charge",
			paymentScheme: j.payment_scheme || "exact",
			enabled: j.enabled !== false,
			category: j.category,
		};
		const res = await client.post("/api/endpoints", body);
		if (res.status >= 200 && res.status < 300) {
			ok++;
			existing.add(k);
			console.log("ok", j.http_method, j.path);
		} else {
			fail++;
			console.error("fail", j.http_method, j.path, res.status, JSON.stringify(res.data).slice(0, 200));
		}
		if (delayMs) await sleep(delayMs);
	}
	console.log({ ok, fail, skip, total: rows.length });
	if (fail) process.exitCode = 1;
};

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
