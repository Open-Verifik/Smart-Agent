#!/usr/bin/env node
/**
 * Audit smartEnrollDemos i18n: missing keys vs en.json and bad Transloco interpolation.
 * Run from Smart-Agent/frontend: npm run i18n:audit-demos
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const I18N_DIR = path.join(__dirname, '../public/i18n');
const LOCALES = ['es', 'fr', 'pt', 'ko', 'ja', 'zh'];
const SINGLE_BRACE = /\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;

const flatten = (obj, prefix = '') => {
    const out = {};
    for (const [k, v] of Object.entries(obj ?? {})) {
        const p = prefix ? `${prefix}.${k}` : k;
        if (v && typeof v === 'object' && !Array.isArray(v)) {
            Object.assign(out, flatten(v, p));
        } else {
            out[p] = v;
        }
    }
    return out;
};

const findBadInterpolation = (flat) =>
    Object.entries(flat).filter(([, v]) => {
        if (typeof v !== 'string') return false;
        const singles = [...v.matchAll(SINGLE_BRACE)].map((m) => m[1]);
        return singles.some((name) => !v.includes(`{{${name}}}`));
    });

const en = JSON.parse(fs.readFileSync(path.join(I18N_DIR, 'en.json'), 'utf8'));
const enFlat = flatten(en.smartEnrollDemos);
let exitCode = 0;

console.log(`Source: en.json smartEnrollDemos (${Object.keys(enFlat).length} keys)\n`);

for (const locale of LOCALES) {
    const data = JSON.parse(fs.readFileSync(path.join(I18N_DIR, `${locale}.json`), 'utf8'));
    const flat = flatten(data.smartEnrollDemos);
    const missing = Object.keys(enFlat).filter((k) => !(k in flat));
    const badInterp = findBadInterpolation(flat);

    console.log(`=== ${locale.toUpperCase()} ===`);
    console.log(`Missing: ${missing.length} | Bad interpolation: ${badInterp.length}`);

    if (missing.length) {
        exitCode = 1;
        const bySection = {};
        for (const k of missing) {
            const s = k.split('.')[0];
            (bySection[s] ??= []).push(k);
        }
        for (const [section, keys] of Object.entries(bySection).sort((a, b) => b[1].length - a[1].length)) {
            console.log(`  ${section}: ${keys.length} missing`);
        }
    }

    if (badInterp.length) {
        exitCode = 1;
        console.log('  Bad interpolation samples:');
        badInterp.slice(0, 8).forEach(([k, v]) => console.log(`    ${k}: ${JSON.stringify(v)}`));
        if (badInterp.length > 8) console.log(`    ... and ${badInterp.length - 8} more`);
    }

    console.log('');
}

if (exitCode) {
    console.error('Audit failed. Run apply-smart-enroll-demos-backfill.mjs or add missing keys.');
} else {
    console.log('Audit passed: all locales complete.');
}

process.exit(exitCode);
