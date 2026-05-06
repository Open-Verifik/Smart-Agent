/**
 * Writes OpenAPI + /.well-known/x402 JSON into the Angular `public/` folder so nginx
 * `try_files $uri` can serve discovery URLs before SPA fallback (no extra proxy rules).
 *
 * Uses the same manifest + builder as the Node app. Set PUBLIC_ORIGIN for production
 * servers.url (default https://ai.verifik.co).
 */

const fs = require("fs");
const path = require("path");

const manifest = require("../src/config/tools-manifest.json");
const buildOpenApiFromManifest = require("../src/utils/buildOpenApiFromManifest");
const { buildWellKnownX402 } = buildOpenApiFromManifest;

const publicOrigin = (process.env.PUBLIC_ORIGIN || "https://ai.verifik.co").replace(/\/$/, "");

const frontendPublic = path.resolve(__dirname, "../../frontend/public");
const wellKnownDir = path.join(frontendPublic, ".well-known");

const spec = buildOpenApiFromManifest(manifest, { publicOrigin });
const wellKnown = buildWellKnownX402(manifest);

fs.mkdirSync(wellKnownDir, { recursive: true });
fs.writeFileSync(path.join(frontendPublic, "openapi.json"), `${JSON.stringify(spec, null, 2)}\n`, "utf8");
fs.writeFileSync(path.join(wellKnownDir, "x402"), `${JSON.stringify(wellKnown, null, 2)}\n`, "utf8");

console.log(`sync-discovery: wrote frontend/public/openapi.json and .well-known/x402 (servers.url=${publicOrigin})`);
