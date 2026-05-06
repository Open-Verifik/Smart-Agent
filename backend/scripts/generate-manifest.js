/**
 * Generate `tools-manifest.json` from the canonical Verifik AppFeature dump
 * (`verifik-backend/scripts/app-features-final.json`).
 *
 * Pricing rule:
 *   priceUsd = smartCheckPrice when present (numeric), else falls back to
 *   the legacy `price` field, else 0. The agent sits between the user and
 *   the Verifik API, so it acts as the SmartCheck — pricing must match
 *   what SmartCheck charges, not the raw legacy `price`.
 *
 * Description rule:
 *   Pull description, country, and per-parameter description straight from
 *   the source so the agent's prompt + 402 metadata stay aligned with the
 *   canonical catalog.
 *
 * Category rule (Sponge group title, max 128 chars):
 *   `category = cleanCategory(feature.name, feature.country)` — trim, strip
 *   legacy `Country · ` prefixes, normalize `world` titles with a `Global - `
 *   prefix when missing, and for other countries prepend `Country - ` only
 *   when the label is a short fragment without ` - ` and doesn’t already
 *   start with the country name (so `USA - …` is not prefixed with
 *   `United States`).
 *
 * Orphans:
 *   Endpoints currently in the manifest but missing from the source feed
 *   are preserved (some Smart Agent additions live outside the AppFeature
 *   collection, e.g. `api_autodata_selection`, `matpis_appointments`,
 *   `world_api_passport_entries`). Set `DROP_ORPHANS=1` to remove them.
 *
 * Usage:
 *   node scripts/generate-manifest.js
 *   AGENT_BASE_URL=https://ai.verifik.co/ node scripts/generate-manifest.js
 *   DROP_ORPHANS=1 node scripts/generate-manifest.js
 */

const fs = require("fs");
const path = require("path");

const SOURCE_PATH = process.env.APP_FEATURES_PATH || "/Users/miguel/verifik/verifik-backend/scripts/app-features-final.json";
const OUTPUT_PATH = path.resolve(__dirname, "../src/config/tools-manifest.json");
/**
 * Default to the production agent host so the manifest is sharable with
 * Sponge and other public clients. The runtime proxy ([executeTool](../src/modules/agent.module.js))
 * still rewrites this to the local x402 port for in-process calls.
 */
const AGENT_BASE_URL = process.env.AGENT_BASE_URL || "https://ai.verifik.co/";
const DROP_ORPHANS = process.env.DROP_ORPHANS === "1" || process.env.DROP_ORPHANS === "true";

/** Sponge `category` max length */
const SPONGE_CATEGORY_MAX = 128;

/**
 * @param {string} s
 * @returns {string}
 */
const escapeRegex = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Build a short Sponge-safe group label from AppFeature `name` + `country`.
 *
 * @param {string} rawName
 * @param {string} [country]
 * @returns {string}
 */
const cleanCategory = (rawName, country) => {
	let name = String(rawName || "").trim();
	const c = String(country || "").trim();
	const countryKey = c.toLowerCase();

	if (c.length) {
		const prefixRe = new RegExp(`^${escapeRegex(c)}\\s*·\\s*`, "i");
		name = name.replace(prefixRe, "").trim();
	}

	name = name.replace(/^[\s\-]+/g, "").replace(/[\s\-]+$/g, "").trim();

	if (countryKey === "world") {
		if (name && !/^global\b/i.test(name)) {
			name = `Global - ${name}`;
		}
	} else if (c.length && name.length) {
		const lower = name.toLowerCase();
		const cLower = c.toLowerCase();
		const hasCountryHyphenLabel = name.includes(" - ");
		if (!lower.startsWith(cLower) && !hasCountryHyphenLabel) {
			name = `${c} - ${name}`;
		}
	}

	if (name.length > SPONGE_CATEGORY_MAX) {
		name = name.slice(0, SPONGE_CATEGORY_MAX);
	}
	return name;
};

const loadJson = (file) => {
	try {
		const raw = fs.readFileSync(file, "utf8");
		return JSON.parse(raw);
	} catch (e) {
		console.error(`Failed to load ${file}:`, e.message);
		process.exit(1);
	}
};

/** @param {string} type */
const mapType = (type) => {
	if (!type) return "string";
	const t = String(type).toLowerCase();
	if (t === "string") return "string";
	if (t === "number") return "number";
	if (t === "integer") return "integer";
	if (t === "boolean") return "boolean";
	if (t === "array") return "array";
	if (t === "object") return "object";
	return "string";
};

/**
 * Heuristic HTTP method picker. Same rules as before so the generated
 * manifest doesn't change methods unexpectedly.
 *
 * @param {string} relativeUrl
 * @param {string} name
 */
const inferMethod = (relativeUrl, name) => {
	const urlLower = (relativeUrl || "").toLowerCase();
	const nameLower = (name || "").toLowerCase();

	if (urlLower.includes("upload") || urlLower.includes("liveness") || urlLower.includes("ocr")) {
		return "POST";
	}
	if (
		urlLower.includes("cedula") ||
		urlLower.includes("vehicle") ||
		urlLower.includes("vehiculo") ||
		urlLower.includes("runt") ||
		urlLower.includes("company") ||
		urlLower.includes("consultar") ||
		nameLower.includes("lookup") ||
		nameLower.includes("check") ||
		nameLower.includes("verification")
	) {
		return "GET";
	}
	return "POST";
};

/**
 * @param {any[]} dependencies
 */
const buildParameters = (dependencies) => {
	const properties = {};
	const required = [];
	if (!Array.isArray(dependencies)) return { type: "object", properties, required };

	for (const dep of dependencies) {
		if (!dep || !dep.field) continue;
		/** @type {{type: string, description: string, enum?: any[], minimum?: number, maximum?: number, default?: any}} */
		const prop = {
			type: mapType(dep.type),
			description: dep.description || `Parameter: ${dep.field}`,
		};

		if (dep.enum && Array.isArray(dep.enum) && dep.enum.length > 0) {
			prop.enum = dep.enum;
		}
		if (typeof dep.min === "number") prop.minimum = dep.min;
		if (typeof dep.max === "number") prop.maximum = dep.max;
		if (dep.default !== undefined && dep.default !== null) prop.default = dep.default;

		properties[dep.field] = prop;
		if (dep.required) required.push(dep.field);
	}
	return { type: "object", properties, required };
};

/**
 * @param {any} feature
 */
/**
 * Map a Verifik-relative URL to the Smart Agent public path suffix.
 *
 * v2/co/cedula      → api/co/cedula
 * v3/co/rues        → api/v3/co/rues
 * document-liveness → api/document-liveness
 *
 * @param {string} relativeUrl  No leading slash (e.g. "v2/co/cedula").
 * @returns {string}            Public suffix with no leading slash.
 */
const toPublicPath = (relativeUrl) => {
	if (relativeUrl.startsWith("v2/")) return "api/" + relativeUrl.slice(3);
	if (relativeUrl.startsWith("v3/")) return "api/v3/" + relativeUrl.slice(3);
	return "api/" + relativeUrl;
};

const featureToTool = (feature) => {
	let relativeUrl = feature.url || "";
	if (relativeUrl.startsWith("/")) relativeUrl = relativeUrl.substring(1);

	/** Verifik-backend path (what we forward upstream). Always a single leading slash. */
	const verifikPath = "/" + relativeUrl;
	/** Public Smart Agent URL (what x402scan and agents call). */
	const publicSuffix = toPublicPath(relativeUrl);
	const fullUrl = AGENT_BASE_URL.replace(/\/$/, "/") + publicSuffix;

	const rawPrice =
		typeof feature.smartCheckPrice === "number"
			? feature.smartCheckPrice
			: typeof feature.price === "number"
				? feature.price
				: 0;
	// Round to 6 decimals (USDC precision) so float-precision artifacts like
	// 0.21000000000000002 — which show up in the canonical dump for some
	// computed prices — don't leak into 402 responses or Sponge sync.
	const priceUsd = Math.round(rawPrice * 1_000_000) / 1_000_000;
	const category = cleanCategory(feature.name, feature.country);

	return {
		id: feature.code || feature._id,
		name: feature.name,
		category,
		url: fullUrl,
		verifikPath,
		method: inferMethod(relativeUrl, feature.name),
		description: feature.description || `Access ${feature.name} for ${feature.country || "Global"}`,
		country: feature.country,
		priceUsd,
		parameters: buildParameters(feature.dependencies),
	};
};

const main = () => {
	console.log("Generating Tools Manifest");
	console.log(`  source:   ${SOURCE_PATH}`);
	console.log(`  output:   ${OUTPUT_PATH}`);
	console.log(`  base url: ${AGENT_BASE_URL}`);
	console.log(`  orphans:  ${DROP_ORPHANS ? "drop" : "preserve"}`);

	const features = loadJson(SOURCE_PATH);
	const existing = fs.existsSync(OUTPUT_PATH) ? loadJson(OUTPUT_PATH) : { endpoints: [] };

	// `deleted` may be `false` or simply absent on legacy rows; treat both as "not deleted".
	const active = features.filter((f) => f && f.isAvailable === true && !f.deleted && f.url);
	console.log(`Active features in source: ${active.length}`);

	const tools = active.map(featureToTool);
	const generatedIds = new Set(tools.map((t) => t.id));

	const orphans = (existing.endpoints || []).filter((e) => e && e.id && !generatedIds.has(e.id));
	if (orphans.length) {
		if (DROP_ORPHANS) {
			console.log(`Dropping ${orphans.length} orphan endpoints (set by env):`);
			orphans.forEach((o) => console.log(`  - ${o.id}`));
		} else {
			console.log(`Preserving ${orphans.length} orphan endpoints (no source feature):`);
			orphans.forEach((o) => console.log(`  - ${o.id}`));
			for (const o of orphans) {
				// Migrate orphan URL to the new /api/* public path if it still uses the old /v2 or /v3 scheme.
				let migratedUrl = o.url || "";
				let verifikPath = o.verifikPath || null;
				try {
					const parsed = new URL(migratedUrl);
					const oldPath = parsed.pathname; // e.g. /v2/co/policia/consultar
					if (!verifikPath) verifikPath = oldPath;
					const relativeOldPath = oldPath.replace(/^\//, ""); // strip leading /
					const newPublicSuffix = toPublicPath(relativeOldPath);
					parsed.pathname = "/" + newPublicSuffix;
					migratedUrl = parsed.toString().replace(/\/$/, "");
				} catch { /* keep as-is if URL is malformed */ }

				const merged = {
					...o,
					url: migratedUrl,
					verifikPath,
					category: cleanCategory(o.name || o.category || String(o.id || ""), o.country),
				};
				tools.push(merged);
			}
		}
	}

	const manifest = { endpoints: tools };
	fs.writeFileSync(OUTPUT_PATH, JSON.stringify(manifest, null, "\t") + "\n");
	console.log(`Wrote ${tools.length} tools.`);

	// Drift summary vs the previous manifest, scoped to ids present in both.
	const prevById = new Map((existing.endpoints || []).map((e) => [e.id, e]));
	let priceChanged = 0;
	let descChanged = 0;
	let categoryChanged = 0;
	for (const t of tools) {
		const prev = prevById.get(t.id);
		if (!prev) continue;
		if (Number(prev.priceUsd) !== Number(t.priceUsd)) priceChanged++;
		if ((prev.description || "") !== (t.description || "")) descChanged++;
		if ((prev.category || "") !== (t.category || "")) categoryChanged++;
	}
	console.log(
		`Drift vs previous manifest: priceUsd changed=${priceChanged}, description changed=${descChanged}, category changed=${categoryChanged}`
	);
};

main();
