#!/usr/bin/env node
/**
 * Apply smartEnrollDemos backfill patches and fix Transloco interpolation in locale files.
 * Run from Smart-Agent/frontend: node scripts/apply-smart-enroll-demos-backfill.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const I18N_DIR = path.join(__dirname, '../public/i18n');
const PATCHES_PATH = path.join(__dirname, 'smart-enroll-demos-i18n-backfill.json');
const LOCALES = ['en', 'es', 'fr', 'pt', 'ko', 'ja', 'zh'];

const SINGLE_BRACE = /\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;

const deepMerge = (target, source) => {
    for (const [k, v] of Object.entries(source ?? {})) {
        if (v && typeof v === 'object' && !Array.isArray(v)) {
            if (!target[k] || typeof target[k] !== 'object') target[k] = {};
            deepMerge(target[k], v);
        } else {
            target[k] = v;
        }
    }
    return target;
};

const fixInterpolationInTree = (obj) => {
    if (!obj || typeof obj !== 'object') return 0;
    let fixed = 0;
    for (const [k, v] of Object.entries(obj)) {
        if (typeof v === 'string') {
            const next = v.replace(SINGLE_BRACE, (match, name) => (v.includes(`{{${name}}}`) ? match : `{{${name}}}`));
            if (next !== v) {
                obj[k] = next;
                fixed++;
            }
        } else if (v && typeof v === 'object' && !Array.isArray(v)) {
            fixed += fixInterpolationInTree(v);
        }
    }
    return fixed;
};

const patches = JSON.parse(fs.readFileSync(PATCHES_PATH, 'utf8'));

for (const locale of LOCALES) {
    const filePath = path.join(I18N_DIR, `${locale}.json`);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.smartEnrollDemos ??= {};

    if (patches[locale]?.smartEnrollDemos) {
        deepMerge(data.smartEnrollDemos, patches[locale].smartEnrollDemos);
    }

    const interpFixed = fixInterpolationInTree(data.smartEnrollDemos);
    const indent = locale === 'en' ? 4 : 2;
    fs.writeFileSync(filePath, `${JSON.stringify(data, null, indent)}\n`, 'utf8');
    console.log(`${locale}.json: patched + ${interpFixed} interpolation fix(es)`);
}

console.log('Backfill applied.');
