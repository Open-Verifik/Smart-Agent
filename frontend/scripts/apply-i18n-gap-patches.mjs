/**
 * One-time patch: fill i18n gaps vs en.json / features-en.json (phases C–E).
 * Run from frontend/: node scripts/apply-i18n-gap-patches.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const I18N = path.join(__dirname, '../public/i18n');

function deepMerge(target, source) {
  if (!source || typeof source !== 'object' || Array.isArray(source)) return target;
  for (const key of Object.keys(source)) {
    const sv = source[key];
    if (sv && typeof sv === 'object' && !Array.isArray(sv)) {
      if (!target[key] || typeof target[key] !== 'object') target[key] = {};
      deepMerge(target[key], sv);
    } else {
      target[key] = sv;
    }
  }
  return target;
}

const en = JSON.parse(fs.readFileSync(path.join(I18N, 'en.json'), 'utf8'));
const enFeat = JSON.parse(fs.readFileSync(path.join(I18N, 'features-en.json'), 'utf8'));

/** @type {Record<string, object>} */
const mainPatches = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'i18n-gap-main-patches.json'), 'utf8'),
);

/** @type {Record<string, object>} */
const featPatches = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'i18n-gap-features-patches.json'), 'utf8'),
);

for (const lang of ['zh', 'ja', 'pt', 'ko']) {
  const mainPath = path.join(I18N, `${lang}.json`);
  const main = JSON.parse(fs.readFileSync(mainPath, 'utf8'));
  deepMerge(main, mainPatches[lang]);
  fs.writeFileSync(mainPath, `${JSON.stringify(main, null, 2)}\n`, 'utf8');
  console.log(`Patched ${lang}.json`);

  const featPath = path.join(I18N, `features-${lang}.json`);
  const feat = JSON.parse(fs.readFileSync(featPath, 'utf8'));
  deepMerge(feat, featPatches[lang]);
  fs.writeFileSync(featPath, `${JSON.stringify(feat, null, 2)}\n`, 'utf8');
  console.log(`Patched features-${lang}.json`);
}

function flatKeys(obj, prefix = '') {
  const keys = [];
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return keys;
  for (const k of Object.keys(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    const v = obj[k];
    if (v && typeof v === 'object' && !Array.isArray(v)) keys.push(...flatKeys(v, p));
    else keys.push(p);
  }
  return keys;
}

const enKeys = new Set(flatKeys(en));
const enFKeys = new Set(flatKeys(enFeat));
for (const lang of ['es', 'zh', 'ja', 'pt', 'ko']) {
  const main = JSON.parse(fs.readFileSync(path.join(I18N, `${lang}.json`), 'utf8'));
  const miss = [...enKeys].filter((k) => !flatKeys(main).includes(k));
  const feat = JSON.parse(fs.readFileSync(path.join(I18N, `features-${lang}.json`), 'utf8'));
  const missF = [...enFKeys].filter((k) => !flatKeys(feat).includes(k));
  console.log(`Verify ${lang}: main missing ${miss.length}, features missing ${missF.length}`);
  if (miss.length) console.log('  ', miss.slice(0, 5).join(', '), miss.length > 5 ? '...' : '');
  if (missF.length) console.log('  feat:', missF.slice(0, 5).join(', '), missF.length > 5 ? '...' : '');
}
