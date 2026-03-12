/**
 * Inject global endpoint translations into backend app-features-final.json and frontend features-*.json.
 * Uses merge approach - only updates codes in the dictionary, preserves all other keys.
 * Run from Smart-Agent/frontend: node scripts/inject-global-translations.js
 */
const fs = require("fs").promises;
const path = require("path");

const DICT_PATH = path.join(__dirname, "global-translations-dictionary.json");
const BACKEND_JSON = path.join(__dirname, "../../../verifik/verifik-backend/scripts/app-features-final.json");
const FRONTEND_I18N_BASE = path.join(__dirname, "../public/i18n");
const LANGS = ["en", "es", "fr", "pt", "ja", "ko", "zh"];

/**
 * Merge translations into existing appFeatures - only updates specified codes.
 */
function mergeTranslations(existing, updates) {
  const result = JSON.parse(JSON.stringify(existing));
  if (!result.appFeatures) result.appFeatures = {};
  for (const [code, { title, description }] of Object.entries(updates)) {
    if (!result.appFeatures[code]) result.appFeatures[code] = {};
    if (title) result.appFeatures[code].title = title;
    if (description) result.appFeatures[code].description = description;
  }
  return result;
}

async function updateBackend(translations) {
  let data;
  try {
    data = await fs.readFile(BACKEND_JSON, "utf8");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(`  Backend file not found at ${BACKEND_JSON}, skipping.`);
      return 0;
    }
    throw err;
  }
  const features = JSON.parse(data);
  let updated = 0;
  for (const feature of features) {
    const trans = translations[feature.code];
    if (!trans || !trans.en) continue;
    feature.name = trans.en.title;
    feature.description = trans.en.description;
    if (trans.es) {
      feature.nameES = trans.es.title;
      feature.descriptionES = trans.es.description;
    }
    updated++;
  }
  await fs.writeFile(BACKEND_JSON, JSON.stringify(features, null, 2), "utf8");
  return updated;
}

async function updateFrontend(translations) {
  for (const lang of LANGS) {
    const filePath = path.join(FRONTEND_I18N_BASE, `features-${lang}.json`);
    const updates = {};
    for (const [code, trans] of Object.entries(translations)) {
      const t = trans[lang] || trans.en;
      if (t && (t.title || t.description)) {
        updates[code] = {
          title: t.title || trans.en?.title,
          description: t.description || trans.en?.description,
        };
      }
    }
    if (Object.keys(updates).length === 0) continue;
    try {
      const data = await fs.readFile(filePath, "utf8");
      const existing = JSON.parse(data);
      const merged = mergeTranslations(existing, updates);
      await fs.writeFile(filePath, JSON.stringify(merged, null, 2), "utf8");
      console.log(`  Updated: features-${lang}.json`);
    } catch (err) {
      if (err.code === "ENOENT") {
        console.warn(`  Skipped features-${lang}.json (file not found)`);
      } else {
        throw err;
      }
    }
  }
}

async function main() {
  console.log("Inject global endpoint translations\n");
  const translations = JSON.parse(await fs.readFile(DICT_PATH, "utf8"));
  console.log(`Loaded ${Object.keys(translations).length} entries from dictionary.\n`);

  console.log("1. Updating backend app-features-final.json...");
  const backendCount = await updateBackend(translations);
  console.log(`  Updated ${backendCount} features in backend.\n`);

  console.log("2. Updating frontend i18n files...");
  await updateFrontend(translations);
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
