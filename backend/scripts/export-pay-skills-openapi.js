#!/usr/bin/env node
/**
 * Fetch Sponge x402 OpenAPI, apply region-aware tags, strip misleading root payment
 * fields, and write pay-skills sidecar JSON.
 *
 * Usage:
 *   node scripts/export-pay-skills-openapi.js
 *   node scripts/export-pay-skills-openapi.js -o ../verifik/pay-skills/providers/paysponge/verifik/openapi.json
 *
 * Env:
 *   PAY_SKILLS_OPENAPI_URL — default https://verifik.x402.paysponge.com/openapi.json
 */

const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { deriveOperationTags } = require("../src/utils/buildOpenApiFromManifest");

const DEFAULT_URL = "https://verifik.x402.paysponge.com/openapi.json";
const DEFAULT_OUTPUT = path.resolve(
	__dirname,
	"../../../verifik/pay-skills/providers/paysponge/verifik/openapi.json"
);

const ROOT_PAYMENT_KEYS = ["accepts", "x-payment-accepts", "resource", "x402Version"];

const parseArgs = () => {
	const args = process.argv.slice(2);
	/** @type {{ url: string, output: string }} */
	const opts = { url: process.env.PAY_SKILLS_OPENAPI_URL || DEFAULT_URL, output: DEFAULT_OUTPUT };

	for (let i = 0; i < args.length; i++) {
		if (args[i] === "-o" || args[i] === "--output") {
			opts.output = path.resolve(args[i + 1] || opts.output);
			i++;
		} else if (args[i] === "-u" || args[i] === "--url") {
			opts.url = args[i + 1] || opts.url;
			i++;
		}
	}

	return opts;
};

/**
 * @param {Record<string, Record<string, object>>} paths
 */
const retagPaths = (paths) => {
	for (const [pathname, methods] of Object.entries(paths || {})) {
		if (!methods || typeof methods !== "object") continue;

		for (const op of Object.values(methods)) {
			if (!op || typeof op !== "object") continue;
			const summary = op.summary || op.description || "";
			op.tags = deriveOperationTags(pathname, summary);
		}
	}
};

/**
 * @param {object} spec
 * @returns {object}
 */
const normalizeForPaySkills = (spec) => {
	const out = { ...spec };
	for (const key of ROOT_PAYMENT_KEYS) {
		delete out[key];
	}
	out["x-discovery"] = {
		tags: ["KYC", "KYB", "Data", "LATAM", "Global", "USA"],
	};
	if (!Array.isArray(out.tags)) {
		out.tags = [
			{ name: "KYC", description: "Identity verification, sanctions, and watchlists" },
			{ name: "KYB", description: "Business, registry, and company lookups" },
			{ name: "Data", description: "Government and proprietary datasets via API" },
			{ name: "LATAM", description: "Strong coverage in Latin America and regional registries" },
			{ name: "Global", description: "International sanctions, watchlists, and cross-border checks" },
			{ name: "USA", description: "United States identity, company, and vehicle lookups" },
		];
	}
	retagPaths(out.paths);
	return out;
};

const main = async () => {
	const { url, output } = parseArgs();
	const res = await axios.get(url, { timeout: 120_000, validateStatus: (s) => s === 200 });
	const spec = normalizeForPaySkills(res.data);

	fs.mkdirSync(path.dirname(output), { recursive: true });
	fs.writeFileSync(output, `${JSON.stringify(spec)}\n`, "utf8");

	const pathCount = Object.keys(spec.paths || {}).length;
	console.log(`Wrote ${output} (${pathCount} paths) from ${url}`);
};

main().catch((err) => {
	console.error(err.message || err);
	process.exit(1);
});
