/**
 * Copy title + description from public/i18n/features-{en,es}.json into
 * scripts/src/assets/i18n-features when the script asset title is broken
 * (starts with " - ", missing country/product prefix).
 *
 * Run from Smart-Agent/frontend: node scripts/sync-i18n-features-from-public.js
 */
const fs = require("fs");
const path = require("path");

const PUBLIC_EN = path.join(__dirname, "../public/i18n/features-en.json");
const PUBLIC_ES = path.join(__dirname, "../public/i18n/features-es.json");
const OUT_EN = path.join(__dirname, "src/assets/i18n-features/en.json");
const OUT_ES = path.join(__dirname, "src/assets/i18n-features/es.json");

const isBrokenTitle = (t) => typeof t === "string" && t.startsWith(" - ");

function syncLang(publicPath, outPath, langLabel) {
  const pub = JSON.parse(fs.readFileSync(publicPath, "utf8"));
  const out = JSON.parse(fs.readFileSync(outPath, "utf8"));
  const src = pub.appFeatures || {};
  const dest = out.appFeatures || {};
  let n = 0;
  for (const code of Object.keys(dest)) {
    const d = dest[code];
    const s = src[code];
    if (!s || !isBrokenTitle(d?.title)) continue;
    if (!s.title || isBrokenTitle(s.title)) continue;
    dest[code] = {
      ...d,
      title: s.title,
      description: s.description ?? d.description,
    };
    n++;
  }
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n", "utf8");
  console.log(`${langLabel}: patched ${n} feature(s) -> ${outPath}`);
}

syncLang(PUBLIC_EN, OUT_EN, "en");
syncLang(PUBLIC_ES, OUT_ES, "es");
