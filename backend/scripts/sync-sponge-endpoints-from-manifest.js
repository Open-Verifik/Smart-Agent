/**
 * Sync Sponge Gateway endpoints from Smart Agent tools-manifest.json
 *
 * Env:
 *   SPONGE_GATEWAY_API_URL — default https://api.paysponge.com
 *   SPONGE_GATEWAY_API_KEY  — Bearer key (sk_live_… or sk_test_… per your account), or apiKey in ~/.spongegateway/credentials.json
 *   SPONGE_SERVICE_ID       — default svc_d7x9j08brpdma8zjw (Verifik AI service)
 *   DRY_RUN=1               — or pass --dry-run: no POST requests
 *   SPONGE_REQUEST_DELAY_MS — ms between creates (default 150)
 *   --update-existing       — PATCH existing endpoints when category or price (minor) differs from manifest (match by URL path)
 *   UPDATE_EXISTING=1       — same as --update-existing
 *   --prune                 — DELETE Sponge endpoints for this service that are not in tools-manifest (METHOD+path)
 *   SPONGE_PRUNE=1          — same as --prune
 *
 * @see https://gateway.paysponge.com/skill.md
 */

const fs = require("fs");
const path = require("path");
const axios = require("axios");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const MANIFEST_PATH = path.resolve(__dirname, "../src/config/tools-manifest.json");
const MIN_PRICE_MINOR = 10000; /** $0.01 USD — Sponge minimum paid step */

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
const updateExisting =
	process.argv.includes("--update-existing") ||
	process.env.UPDATE_EXISTING === "1" ||
	process.env.UPDATE_EXISTING === "true";
const prune =
	process.argv.includes("--prune") || process.env.SPONGE_PRUNE === "1" || process.env.SPONGE_PRUNE === "true";
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
 * @param {{ country?: string, name?: string, id?: string, category?: string }} t
 */
const categoryFromManifestTool = (t) => {
	const raw = t.category || t.name || t.id || "";
	return raw.length > 128 ? raw.slice(0, 128) : raw;
};

const buildJobsFromManifest = (manifest) =>
	manifest.endpoints.map((t) => {
		const pathname = new URL(t.url).pathname;
		const method = String(t.method || "GET").toUpperCase();
		const price = priceMinorFromUsd(t.priceUsd || 0);
		const category = categoryFromManifestTool(t);
		return {
			service_id: serviceId,
			http_method: method,
			path: pathname,
			price,
			category,
			enabled: true,
			currency: "USD",
			payment_mode: "charge",
			payment_scheme: "exact",
		};
	});

/**
 * @param {import('axios').AxiosInstance} client
 * @returns {Promise<Map<string, { id: string, httpMethod: string, path: string, price: string, category: string }>>}
 */
const loadExistingByPath = async (client) => {
	let res = await client.get("/api/endpoints", { params: { serviceId } });
	if (res.status !== 200) {
		res = await client.get("/api/endpoints");
	}
	if (res.status !== 200) {
		throw new Error(`GET /api/endpoints failed ${res.status}: ${JSON.stringify(res.data)}`);
	}
	const body = res.data;
	const list = Array.isArray(body) ? body : body.endpoints || body.data || [];
	/** @type {Map<string, { id: string, httpMethod: string, path: string, price: string, category: string }>} */
	const byPath = new Map();
	for (const e of list) {
		if (e.serviceId && String(e.serviceId) !== serviceId) continue;
		const m = e.httpMethod || e.http_method;
		const p = e.path;
		if (!m || !p) continue;
		const pathStr = String(p);
		if (byPath.has(pathStr)) {
			console.warn(`Duplicate path on service ${serviceId}: ${pathStr} (keeping newest)`);
		}
		byPath.set(pathStr, {
			id: String(e.id),
			httpMethod: String(m).toUpperCase(),
			path: pathStr,
			price: String(e.price ?? ""),
			category: String(e.category || ""),
		});
	}
	return byPath;
};

/**
 * All remote endpoint rows for this service (for --prune).
 *
 * @param {import('axios').AxiosInstance} client
 * @returns {Promise<Array<{ id: string, httpMethod: string, path: string }>>}
 */
const loadExistingEndpointRecords = async (client) => {
	let res = await client.get("/api/endpoints", { params: { serviceId } });
	if (res.status !== 200) {
		res = await client.get("/api/endpoints");
	}
	if (res.status !== 200) {
		throw new Error(`GET /api/endpoints failed ${res.status}: ${JSON.stringify(res.data)}`);
	}
	const body = res.data;
	const list = Array.isArray(body) ? body : body.endpoints || body.data || [];
	/** @type {Array<{ id: string, httpMethod: string, path: string }>} */
	const out = [];
	for (const e of list) {
		if (e.serviceId && String(e.serviceId) !== serviceId) continue;
		const m = e.httpMethod || e.http_method;
		const p = e.path;
		if (!m || !p) continue;
		out.push({
			id: String(e.id),
			httpMethod: String(m).toUpperCase(),
			path: String(p),
		});
	}
	return out;
};

/**
 * DELETE Sponge endpoints for this service that are not listed in the manifest.
 *
 * @param {import('axios').AxiosInstance} client
 * @param {{ endpoints: object[] }} manifest
 */
const syncPrune = async (client, manifest) => {
	/** @type {Set<string>} */
	const wanted = new Set();
	for (const tool of manifest.endpoints) {
		let pathname;
		try {
			pathname = new URL(tool.url).pathname;
		} catch {
			console.warn(`Skip invalid url: ${tool.id} ${tool.url}`);
			continue;
		}
		wanted.add(routeKey(tool.method || "GET", pathname));
	}

	const records = await loadExistingEndpointRecords(client);
	let removed = 0;
	/** @type {Array<{ id: string, key: string, status: number, body: unknown }>} */
	const errors = [];

	for (const rec of records) {
		const key = routeKey(rec.httpMethod, rec.path);
		if (wanted.has(key)) continue;

		if (dryRun) {
			console.log(`[dry-run] DELETE /api/endpoints/${rec.id} ${key}`);
			removed++;
			continue;
		}

		const res = await client.delete(`/api/endpoints/${rec.id}`);
		if (res.status < 200 || res.status >= 300) {
			errors.push({ id: rec.id, key, status: res.status, body: res.data });
			console.error(`[fail] DELETE ${rec.id} ${key} ${res.status}`, res.data);
		} else {
			console.log(`[pruned] ${key}`);
			removed++;
		}
		if (delayMs) await sleep(delayMs);
	}

	console.log("\nPrune summary:");
	console.log(`  manifest route keys: ${wanted.size}`);
	console.log(`  on Sponge (service): ${records.length}`);
	console.log(`  ${dryRun ? "dry-run deletes" : "deleted"}: ${removed}`);
	console.log(`  errors: ${errors.length}`);
	if (errors.length) process.exitCode = 1;
};

/**
 * @param {import('axios').AxiosInstance} client
 * @returns {Promise<Set<string>>}
 */
const loadExistingKeys = async (client) => {
	const map = await loadExistingByPath(client);
	return new Set([...map.values()].map((e) => routeKey(e.httpMethod, e.path)));
};

/**
 * PATCH existing Sponge endpoints when manifest `category` or `priceUsd` (minor) differs. Match by URL path only.
 *
 * @param {import('axios').AxiosInstance} client
 * @param {{ endpoints: object[] }} manifest
 */
const syncUpdateExisting = async (client, manifest) => {
	const byPath = await loadExistingByPath(client);
	let updated = 0;
	let skipped = 0;
	let missing = 0;
	const errors = [];

	for (const tool of manifest.endpoints) {
		let pathname;
		try {
			pathname = new URL(tool.url).pathname;
		} catch {
			console.warn(`Skip invalid url: ${tool.id} ${tool.url}`);
			continue;
		}

		const ex = byPath.get(pathname);
		if (!ex) {
			missing++;
			continue;
		}

		const wantPrice = String(priceMinorFromUsd(tool.priceUsd || 0));
		const wantCat = categoryFromManifestTool(tool);

		if (String(ex.price) === wantPrice && (ex.category || "") === wantCat) {
			skipped++;
			continue;
		}

		if (dryRun) {
			console.log(`[dry-run] PATCH ${ex.id} ${pathname} price ${ex.price}->${wantPrice} cat ok=${(ex.category || "") === wantCat}`);
			updated++;
			continue;
		}

		const res = await client.patch(`/api/endpoints/${ex.id}`, {
			category: wantCat,
			price: wantPrice,
			priceDisplay: priceDisplayFromMinor(Number(wantPrice)),
			currency: "USD",
			currencyMinorUnits: 6,
		});

		if (res.status < 200 || res.status >= 300) {
			errors.push({ id: ex.id, path: pathname, status: res.status, body: res.data });
			console.error(`[fail] PATCH ${ex.id} ${pathname} ${res.status}`, res.data);
		} else {
			console.log(`[updated] ${pathname}`);
			updated++;
		}

		if (delayMs) await sleep(delayMs);
	}

	console.log("\nUpdate-existing summary:");
	console.log(`  manifest tools: ${manifest.endpoints.length}`);
	console.log(`  on Sponge (service): ${byPath.size}`);
	console.log(`  skipped (already aligned): ${skipped}`);
	console.log(`  ${dryRun ? "dry-run patches" : "patched"}: ${updated}`);
	console.log(`  manifest paths not on Sponge: ${missing}`);
	console.log(`  errors: ${errors.length}`);
	if (errors.length) process.exitCode = 1;
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
	const category = categoryFromManifestTool(tool);

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
		enabled: true,
		category,
	};

	if (dryRun) {
		console.log(`[dry-run] POST /api/endpoints ${key} price=${priceMinor} enabled=true`);
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

	if (prune && updateExisting) {
		console.error("--prune and --update-existing are mutually exclusive.");
		process.exit(1);
	}

	if (prune) {
		if (!apiKey) {
			console.error(
				"SPONGE_GATEWAY_API_KEY is required for --prune (backend/.env or ~/.spongegateway/credentials.json apiKey). Use DRY_RUN=1 with --prune to preview only."
			);
			process.exit(1);
		}
		const client = axios.create({
			baseURL: apiBase,
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
			validateStatus: () => true,
		});
		await syncPrune(client, manifest);
		return;
	}

	if (updateExisting) {
		if (!apiKey) {
			console.error(
				"SPONGE_GATEWAY_API_KEY is required for --update-existing (backend/.env or ~/.spongegateway/credentials.json apiKey)."
			);
			process.exit(1);
		}
		const client = axios.create({
			baseURL: apiBase,
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
			validateStatus: () => true,
		});
		await syncUpdateExisting(client, manifest);
		return;
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
			console.log(`${key} minor=${priceMinor} enabled=true (${tool.id})`);
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
