/**
 * After partial-locale MDX is translated, sync i18n + optionally re-seed Mongo docs.
 *
 * Usage (from Smart-Agent/frontend):
 *   node scripts/sync-all-locale-features-from-docs.mjs [--dry-run] [--seed]
 */
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FRONTEND_ROOT = path.resolve(__dirname, '..');
const BACKEND_ROOT = path.resolve(FRONTEND_ROOT, '../../verifik/verifik-backend');

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const RUN_SEED = args.includes('--seed');
const dryFlag = DRY_RUN ? '--dry-run' : '';

const LOCALES = ['en', 'es', 'fr', 'pt', 'ko', 'ja', 'zh'];

console.log(`Syncing appFeatures i18n from MDX (${DRY_RUN ? 'dry-run' : 'write'})...\n`);

for (const locale of LOCALES) {
	try {
		const out = execSync(
			`node scripts/sync-app-features-i18n-from-docs.mjs ${dryFlag} --locale=${locale} --report=generic-count`,
			{ cwd: FRONTEND_ROOT, encoding: 'utf8' }
		);
		const lines = out.trim().split('\n');
		console.log(lines.filter((l) => l.includes('generic') || l.includes('updated')).join('\n'));
	} catch (err) {
		console.error(`[${locale}] failed:`, err.message);
	}
}

if (RUN_SEED && !DRY_RUN) {
	console.log('\nRe-seeding AppFeature.docs from MDX...');
	execSync('node scripts/seed-app-feature-docs.js', {
		cwd: BACKEND_ROOT,
		stdio: 'inherit',
	});
}

console.log('\nDone.');
