const fs = require('fs');
const path = require('path');

/**
 * When backend `name` / `nameES` used a broken template (`" - …"`), prefer
 * curated strings from public Transloco bundles (same source as runtime).
 */
const mergeFromPublic = (targetFeatures, publicJsonPath) => {
  if (!fs.existsSync(publicJsonPath)) {
    console.warn(`Public i18n not found (skip merge): ${publicJsonPath}`);
    return;
  }
  const pub = JSON.parse(fs.readFileSync(publicJsonPath, 'utf8'));
  const src = pub.appFeatures || {};
  let merged = 0;
  for (const code of Object.keys(targetFeatures)) {
    const s = src[code];
    if (!s || typeof s.title !== 'string') continue;
    const cur = targetFeatures[code].title;
    if (typeof cur !== 'string' || !cur.startsWith(' - ')) continue;
    if (s.title.startsWith(' - ')) continue;
    targetFeatures[code].title = s.title;
    if (s.description) targetFeatures[code].description = s.description;
    merged++;
  }
  if (merged) console.log(`Merged ${merged} title(s) from ${path.basename(publicJsonPath)}`);
};

// Read the features file
const featuresPath = '/Users/miguel/verifik/verifik-backend/scripts/app-features-final.json';
const features = require(featuresPath);

// Prepare the translation object
const appFeatures = {};

features.forEach((feature) => {
  // skip if no code
  if (!feature.code) return;

  // We will use the 'code' as the key
  // Structure: appFeatures.<CODE>.title = name
  //            appFeatures.<CODE>.description = description

  appFeatures[feature.code] = {
    title: feature.name,
    description: feature.description,
  };
});

mergeFromPublic(
  appFeatures,
  path.join(__dirname, '../public/i18n/features-en.json'),
);

// Create the target directory if it doesn't exist
const targetDir = path.join(__dirname, 'src/assets/i18n-features');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Write the English json
const enJson = {
  appFeatures: appFeatures,
};

fs.writeFileSync(path.join(targetDir, 'en.json'), JSON.stringify(enJson, null, 2));

console.log(`Extracted ${Object.keys(appFeatures).length} features to ${targetDir}/en.json`);

// Now do the same for Spanish (nameES, descriptionES)
const appFeaturesES = {};

features.forEach((feature) => {
  if (!feature.code) return;

  appFeaturesES[feature.code] = {
    title: feature.nameES || feature.name, // Fallback to name if nameES missing
    description: feature.descriptionES || feature.description, // Fallback
  };
});

mergeFromPublic(
  appFeaturesES,
  path.join(__dirname, '../public/i18n/features-es.json'),
);

const esJson = {
  appFeatures: appFeaturesES,
};

fs.writeFileSync(path.join(targetDir, 'es.json'), JSON.stringify(esJson, null, 2));

console.log(`Extracted ${Object.keys(appFeaturesES).length} features to ${targetDir}/es.json`);
