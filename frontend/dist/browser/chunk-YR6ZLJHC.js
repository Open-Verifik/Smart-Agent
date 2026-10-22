// src/app/modules/smart-batch/smart-batch-country.util.ts
var ISO_TO_NAME = {
  co: "Colombia",
  col: "Colombia",
  pe: "Peru",
  mx: "Mexico",
  br: "Brazil",
  cl: "Chile",
  ar: "Argentina",
  ec: "Ecuador",
  ve: "Venezuela",
  us: "United States",
  usa: "United States",
  es: "Spain",
  pa: "Panama",
  cr: "Costa Rica",
  gt: "Guatemala",
  hn: "Honduras",
  sv: "El Salvador",
  do: "Dominican Republic",
  bo: "Bolivia",
  uy: "Uruguay",
  py: "Paraguay",
  ca: "Canada",
  in: "India",
  ind: "India"
};
var NAME_ALIASES = {
  colombia: "Colombia",
  peru: "Peru",
  mexico: "Mexico",
  brazil: "Brazil",
  chile: "Chile",
  argentina: "Argentina",
  ecuador: "Ecuador",
  venezuela: "Venezuela",
  "united states": "United States",
  spain: "Spain",
  panama: "Panama",
  "costa rica": "Costa Rica",
  guatemala: "Guatemala",
  honduras: "Honduras",
  "el salvador": "El Salvador",
  "dominican republic": "Dominican Republic",
  "rep\xFAblica dominicana": "Dominican Republic",
  "republica dominicana": "Dominican Republic",
  bolivia: "Bolivia",
  uruguay: "Uruguay",
  paraguay: "Paraguay",
  canada: "Canada",
  india: "India"
};
var COUNTRY_FLAGS = {
  colombia: "\u{1F1E8}\u{1F1F4}",
  peru: "\u{1F1F5}\u{1F1EA}",
  mexico: "\u{1F1F2}\u{1F1FD}",
  brazil: "\u{1F1E7}\u{1F1F7}",
  chile: "\u{1F1E8}\u{1F1F1}",
  argentina: "\u{1F1E6}\u{1F1F7}",
  ecuador: "\u{1F1EA}\u{1F1E8}",
  venezuela: "\u{1F1FB}\u{1F1EA}",
  "united states": "\u{1F1FA}\u{1F1F8}",
  spain: "\u{1F1EA}\u{1F1F8}",
  panama: "\u{1F1F5}\u{1F1E6}",
  "costa rica": "\u{1F1E8}\u{1F1F7}",
  guatemala: "\u{1F1EC}\u{1F1F9}",
  honduras: "\u{1F1ED}\u{1F1F3}",
  "el salvador": "\u{1F1F8}\u{1F1FB}",
  "dominican republic": "\u{1F1E9}\u{1F1F4}",
  bolivia: "\u{1F1E7}\u{1F1F4}",
  uruguay: "\u{1F1FA}\u{1F1FE}",
  paraguay: "\u{1F1F5}\u{1F1FE}",
  canada: "\u{1F1E8}\u{1F1E6}",
  india: "\u{1F1EE}\u{1F1F3}",
  world: "\u{1F310}"
};
var tokenize = (country) => (country || "").trim().toLowerCase();
var normalizeCountryName = (country) => {
  const key = tokenize(country);
  if (!key || key === "world")
    return key;
  return ISO_TO_NAME[key] || NAME_ALIASES[key] || country.trim();
};
var isWorldCountry = (country) => tokenize(country) === "world";
var countriesMatch = (left, right) => {
  if (isWorldCountry(left) || isWorldCountry(right))
    return tokenize(left) === tokenize(right);
  const normalizedLeft = tokenize(normalizeCountryName(left));
  const normalizedRight = tokenize(normalizeCountryName(right));
  return Boolean(normalizedLeft) && normalizedLeft === normalizedRight;
};
var isFeatureForCountry = (featureCountry, selectedCountry) => {
  if (!selectedCountry)
    return false;
  if (isWorldCountry(featureCountry))
    return true;
  return countriesMatch(featureCountry, selectedCountry);
};
var filterFeaturesForCountry = (features, selectedCountry) => {
  if (!selectedCountry)
    return [];
  return features.filter((feature) => isFeatureForCountry(feature.country, selectedCountry));
};
var filterFeaturesForCountries = (features, selectedCountries) => {
  const selected = (selectedCountries ?? []).map((country) => country.trim()).filter(Boolean);
  if (!selected.length)
    return [];
  const seen = /* @__PURE__ */ new Set();
  for (const country of selected) {
    for (const feature of filterFeaturesForCountry(features, country)) {
      seen.add(feature);
    }
  }
  return [...seen];
};
var compareFeaturesForSelectedCountry = (left, right) => {
  const rank = (feature) => isWorldCountry(feature.country) ? 1 : 0;
  const byCountry = rank(left) - rank(right);
  if (byCountry !== 0)
    return byCountry;
  return (left.name ?? "").localeCompare(right.name ?? "", void 0, { sensitivity: "base" });
};
var resolveDropdownCountry = (apiCountry, dropdownCodes) => {
  const raw = (apiCountry || "").trim();
  const canonical = normalizeCountryName(raw);
  const match = dropdownCodes.find((code) => tokenize(code) === tokenize(canonical) || tokenize(code) === tokenize(raw));
  return match || canonical || raw;
};
var getCountryFlag = (country) => {
  const canonical = normalizeCountryName(country);
  const key = tokenize(canonical);
  return COUNTRY_FLAGS[key] ?? "\u{1F3F3}\uFE0F";
};
var countryIso2 = (country) => {
  const key = tokenize(country);
  if (!key || key === "world")
    return null;
  if (key.length === 2 && ISO_TO_NAME[key])
    return key;
  const name = tokenize(normalizeCountryName(country));
  const match = Object.entries(ISO_TO_NAME).find(([iso, display]) => iso.length === 2 && tokenize(display) === name);
  if (match)
    return match[0];
  return /^[a-z]{2}$/.test(key) ? key : null;
};
var countryFlagImageUrl = (country) => {
  const iso = countryIso2(country);
  return iso ? `https://flagcdn.com/w40/${iso}.png` : null;
};

export {
  normalizeCountryName,
  isWorldCountry,
  filterFeaturesForCountry,
  filterFeaturesForCountries,
  compareFeaturesForSelectedCountry,
  resolveDropdownCountry,
  getCountryFlag,
  countryFlagImageUrl
};
//# sourceMappingURL=chunk-YR6ZLJHC.js.map
