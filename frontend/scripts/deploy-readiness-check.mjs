#!/usr/bin/env node
/**
 * Pre-deploy checks for Smart Agent notifications hub.
 * Run: node scripts/deploy-readiness-check.mjs [--api-base URL]
 */
import { execSync } from 'node:child_process';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const apiBase =
    process.argv.find((a) => a.startsWith('--api-base='))?.split('=')[1] ||
    process.env.DEPLOY_READINESS_API_BASE ||
    'https://prod.verifik.co';

const inboxPaths = [
    { method: 'POST', path: '/v2/app-notifications/inbox/sync?productScope=smart_agent' },
    { method: 'GET', path: '/v2/app-notifications/inbox?productScope=smart_agent' },
    { method: 'GET', path: '/v2/app-notifications/inbox/active-banners?productScope=smart_agent' },
    { method: 'GET', path: '/v2/app-notifications/inbox/active-modals?productScope=smart_agent' },
];

const uiChecks = [
    ['hub state in service', join(root, 'src/app/core/notifications/app-notifications.service.ts'), 'refreshHubInbox'],
    ['grid tab panels', join(root, 'src/app/layout/common/quick-chat/quick-chat.component.html'), 'grid-cols-1'],
    ['body wrap styles', join(root, 'src/app/modules/app-notifications/notification-inbox-panel/notification-inbox-panel.component.scss'), 'overflow-wrap'],
    ['deep link', join(root, 'src/app/modules/home/home.component.ts'), 'openNotifications'],
];

let failed = 0;

const ok = (msg) => console.log(`  OK  ${msg}`);
const fail = (msg) => {
    console.error(`  FAIL ${msg}`);
    failed += 1;
};

console.log('\n=== Smart Agent notifications — deploy readiness ===\n');

console.log('1) API routes (expect 401 without JWT = route exists)');
for (const { method, path } of inboxPaths) {
    const url = `${apiBase.replace(/\/$/, '')}${path}`;
    try {
        const res = await fetch(url, { method, signal: AbortSignal.timeout(15000) });
        if (res.status === 401 || res.status === 403) {
            ok(`${method} ${path} → ${res.status}`);
        } else if (res.status === 404) {
            fail(`${method} ${path} → 404 (not deployed)`);
        } else {
            ok(`${method} ${path} → ${res.status}`);
        }
    } catch (e) {
        fail(`${method} ${path} → ${e.message}`);
    }
}

console.log('\n2) Frontend feature wiring');
for (const [label, file, needle] of uiChecks) {
    if (!existsSync(file)) {
        fail(`${label}: missing ${file}`);
        continue;
    }
    const text = readFileSync(file, 'utf8');
    if (text.includes(needle)) ok(label);
    else fail(`${label}: "${needle}" not found in ${file}`);
}

console.log('\n3) Backend cron scripts (repo-level; confirm scheduler in prod)');
const backendRoot = join(root, '../../verifik/verifik-backend');
const cronScripts = [
    'scheduledJobs/app-notification-audience-sync.js',
    'scheduledJobs/app-notification-scheduled-publish.js',
];
for (const rel of cronScripts) {
    const full = join(backendRoot, rel);
    if (existsSync(full)) ok(rel);
    else fail(`missing ${full}`);
}

const skipBuild = process.argv.includes('--skip-build');

console.log('\n4) Production bundle smoke (static)');
const distDir = join(root, 'dist/browser');
const hubInDist = (() => {
    if (!existsSync(distDir)) return false;
    const needles = ['hubInboxItems', '_hubInboxItems', 'active-banners', 'active-modals'];
    for (const file of readdirSync(distDir).filter((f) => f.endsWith('.js'))) {
        const text = readFileSync(join(distDir, file), 'utf8');
        if (needles.some((n) => text.includes(n))) return true;
    }
    return false;
})();
if (hubInDist) ok('notification hub code present in dist');
else if (existsSync(distDir)) fail('hub code not found in dist chunks');
else fail('dist/browser missing');

console.log('\n5) Production build');
if (skipBuild) {
    const indexHtml = join(root, 'dist/browser/index.html');
    if (existsSync(indexHtml)) ok('dist/browser present (--skip-build)');
    else fail('dist/browser missing; run npm run build -- --configuration=production');
} else {
    try {
        execSync('npm run build -- --configuration=production', {
            cwd: root,
            stdio: 'inherit',
            env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=4096' },
        });
        ok('ng build --configuration=production');
    } catch {
        fail('production build failed');
    }
}

console.log(failed ? `\nResult: ${failed} check(s) failed.\n` : '\nResult: all checks passed.\n');
process.exit(failed ? 1 : 0);
