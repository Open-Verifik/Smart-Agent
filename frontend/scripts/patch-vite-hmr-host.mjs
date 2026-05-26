/**
 * Angular's dev server sets Vite `configFile: false`, so root vite.config.ts is ignored.
 * When the app is opened as https://verifik.app (proxied to ng serve on :5555), the default
 * HMR client tries ws://localhost:5555 and fails. This patch injects server.hmr host/clientPort.
 *
 * Env:
 *   SMART_AGENT_DEV_HOST — browser hostname (default: verifik.app)
 *   SMART_AGENT_DEV_CLIENT_PORT — port in the browser URL (default: same as ng serve port)
 *   SMART_AGENT_DEV_HTTPS=1 — use wss (when the page is served over HTTPS)
 *   SMART_AGENT_DISABLE_HMR=1 — skip patch (use angular.json hmr/liveReload false instead)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MARKER = '// @smart-agent/vite-hmr-host';
const ANCHOR = 'host: serverOptions.host,';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viteServerPath = path.join(
    __dirname,
    '../node_modules/@angular/build/src/builders/dev-server/vite-server.js'
);

if (process.env.SMART_AGENT_DISABLE_HMR === '1') {
    process.exit(0);
}

if (!fs.existsSync(viteServerPath)) {
    console.warn('[patch-vite-hmr-host] @angular/build vite-server.js not found; skipping.');
    process.exit(0);
}

const source = fs.readFileSync(viteServerPath, 'utf8');
if (source.includes(MARKER)) {
    process.exit(0);
}

const anchorIndex = source.indexOf(ANCHOR);
if (anchorIndex === -1) {
    console.error(
        '[patch-vite-hmr-host] Could not find anchor in vite-server.js. Update the patch script for your @angular/build version.'
    );
    process.exit(1);
}

const insertAt = anchorIndex + ANCHOR.length;
const snippet = `
            ${MARKER}
            hmr: (() => {
                const hmrHost = process.env.SMART_AGENT_DEV_HOST || 'verifik.app';
                const clientPort = Number(process.env.SMART_AGENT_DEV_CLIENT_PORT || serverOptions.port);
                const protocol = process.env.SMART_AGENT_DEV_HTTPS === '1' ? 'wss' : 'ws';
                return {
                    host: hmrHost,
                    port: serverOptions.port,
                    clientPort,
                    protocol,
                };
            })(),`;

fs.writeFileSync(viteServerPath, source.slice(0, insertAt) + snippet + source.slice(insertAt));
console.log('[patch-vite-hmr-host] Applied HMR host patch for', process.env.SMART_AGENT_DEV_HOST || 'verifik.app');
