const fs = require("fs");
const path = require("path");

// Configuration
const SOURCE_PATH = "/Users/miguel/verifik/verifik-backend/scripts/app-features-final.json";
const OUTPUT_PATH = path.resolve(__dirname, "../src/config/tools-manifest.json");
const AGENT_BASE_URL = "http://localhost:3060/"; // Local x402 Proxy

console.log("Generating Tools Manifest...");
console.log(`Source: ${SOURCE_PATH}`);
console.log(`Target: ${OUTPUT_PATH}`);

const loadFeatures = () => {
	try {
		if (!fs.existsSync(SOURCE_PATH)) {
			throw new Error(`Source file not found at ${SOURCE_PATH}`);
		}
		const raw = fs.readFileSync(SOURCE_PATH, "utf8");
		return JSON.parse(raw);
	} catch (e) {
		console.error("Failed to load source JSON:", e.message);
		process.exit(1);
	}
};

const mapType = (type) => {
	if (!type) return "string";
	const t = type.toLowerCase();
	if (t === "string") return "string";
	if (t === "number") return "number";
	if (t === "boolean") return "boolean";
	return "string";
};

const generate = () => {
	const features = loadFeatures();
	const tools = [];

	// Filter active features
	// Must be available, not deleted, and have a URL
	const activeFeatures = features.filter((f) => f.isAvailable === true && f.deleted === false && f.url);

	console.log(`Found ${activeFeatures.length} active features.`);

	for (const f of activeFeatures) {
		// Construct URL
		// Endpoint in source might be "v2/co/cedula"
		// Target: "http://localhost:3060/v2/co/cedula"
		let relativeUrl = f.url;
		// Ensure no double slash if url starts with /
		if (relativeUrl.startsWith("/")) relativeUrl = relativeUrl.substring(1);

		const fullUrl = AGENT_BASE_URL + relativeUrl;

		// Construct Parameters Schema
		const properties = {};
		const required = [];

		if (f.dependencies && Array.isArray(f.dependencies)) {
			for (const dep of f.dependencies) {
				properties[dep.field] = {
					type: mapType(dep.type),
					description: `Parameter: ${dep.field}`, // Default description if none
				};
				if (dep.enum && dep.enum.length > 0) {
					properties[dep.field].enum = dep.enum;
				}
				if (dep.required) {
					required.push(dep.field);
				}
			}
		}

		// Determine Method
		let method = "POST";
		const urlLower = relativeUrl.toLowerCase();
		const nameLower = f.name.toLowerCase();

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
			method = "GET";
		}

		if (urlLower.includes("upload") || urlLower.includes("liveness") || urlLower.includes("ocr")) {
			method = "POST";
		}

		const tool = {
			id: f.code || f._id, // Use code as ID if available
			name: f.name,
			url: fullUrl,
			method: method, // Dynamic method
			description: f.description || `Access ${f.name} service for ${f.country || "Global"}`,
			country: f.country, // Context for Agent
			priceUsd: f.price || 0, // Price in USD
			parameters: {
				type: "object",
				properties: properties,
				required: required,
			},
		};

		tools.push(tool);
	}

	const manifest = {
		endpoints: tools,
	};

	fs.writeFileSync(OUTPUT_PATH, JSON.stringify(manifest, null, 2));
	console.log(`Successfully generated manifest with ${tools.length} tools.`);
};

generate();
