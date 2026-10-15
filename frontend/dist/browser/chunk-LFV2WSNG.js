// src/app/modules/postman/postman-country.util.ts
var POSTMAN_COUNTRY_ISO = {
  world: "world",
  Global: "world",
  Colombia: "co",
  "United States": "us",
  Peru: "pe",
  Mexico: "mx",
  Brazil: "br",
  Chile: "cl",
  Argentina: "ar",
  Ecuador: "ec",
  Venezuela: "ve",
  Bolivia: "bo",
  Uruguay: "uy",
  Paraguay: "py",
  Panama: "pa",
  "Costa Rica": "cr",
  Guatemala: "gt",
  Honduras: "hn",
  "El Salvador": "sv",
  "Dominican Republic": "do",
  "Rep\xFAblica Dominicana": "do",
  Canada: "ca",
  Spain: "es",
  Israel: "il",
  Nicaragua: "ni",
  India: "in",
  "Czech Republic": "cz",
  Czechia: "cz"
};
var COUNTRY_TITLE_PREFIX_EXTRAS = {
  Bolivia: ["\u73BB\u5229\u7EF4\u4E9A"],
  Brazil: ["Brasil", "Br\xE9sil", "\u30D6\u30E9\u30B8\u30EB", "\uBE0C\uB77C\uC9C8", "\u5DF4\u897F"],
  Ecuador: ["\u5384\u74DC\u591A\u5C14"],
  "United States": ["USA", "Estados Unidos"],
  Spain: ["Espa\xF1a"],
  Mexico: ["M\xE9xico"],
  Peru: ["Per\xFA"]
};
function postmanCountryFlagUi(country) {
  const code = POSTMAN_COUNTRY_ISO[country];
  if (code === "world") {
    return { k: "globe" };
  }
  if (typeof code === "string" && code.length >= 2) {
    return { k: "img", src: `https://flagcdn.com/w40/${code}.png` };
  }
  return { k: "initials", text: postmanCountryInitials(country) };
}
function postmanCountryInitials(name) {
  const trim = name.trim();
  if (!trim) {
    return "?";
  }
  const words = trim.split(/\s+/).filter(Boolean);
  if (words.length === 1) {
    return trim.slice(0, 2).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
}
function countryNameToIso(name) {
  if (!name)
    return null;
  const code = POSTMAN_COUNTRY_ISO[name];
  return typeof code === "string" && code.length > 0 ? code.toLowerCase() : null;
}
function resolveCountryNameFromIso(iso, endpoints) {
  if (!iso)
    return null;
  const target = iso.trim().toLowerCase();
  if (!target)
    return null;
  for (const ep of endpoints) {
    if (!ep.country)
      continue;
    const epIso = countryNameToIso(ep.country);
    if (epIso && epIso === target) {
      return ep.country;
    }
  }
  for (const [name, code] of Object.entries(POSTMAN_COUNTRY_ISO)) {
    if (typeof code === "string" && code.toLowerCase() === target) {
      return name;
    }
  }
  return null;
}
function normalizeCountryToken(value) {
  return value.normalize("NFD").replace(new RegExp("\\p{M}", "gu"), "").toLowerCase().trim();
}
function getCountryTitlePrefixVariants(country) {
  if (!country) {
    return [];
  }
  const variants = /* @__PURE__ */ new Set([country]);
  const iso = POSTMAN_COUNTRY_ISO[country] ?? (country === "world" ? "world" : void 0);
  if (iso) {
    for (const [name, code] of Object.entries(POSTMAN_COUNTRY_ISO)) {
      if (code === iso) {
        variants.add(name);
      }
    }
  }
  if (country === "world" || iso === "world") {
    variants.add("Global");
    variants.add("World");
  }
  for (const extra of COUNTRY_TITLE_PREFIX_EXTRAS[country] ?? []) {
    variants.add(extra);
  }
  return [...variants];
}
function stripCountryPrefixFromTitle(title, country) {
  const trimmed = title?.trim();
  if (!trimmed || !country) {
    return trimmed ?? "";
  }
  const match = trimmed.match(/^(.+?)\s*(?:[-–—]\s+|:\s+)/);
  if (!match) {
    return trimmed;
  }
  const prefix = match[1];
  const normalizedPrefix = normalizeCountryToken(prefix);
  const variantTokens = getCountryTitlePrefixVariants(country).map(normalizeCountryToken);
  if (variantTokens.includes(normalizedPrefix)) {
    return trimmed.slice(match[0].length).trim();
  }
  return trimmed;
}

export {
  POSTMAN_COUNTRY_ISO,
  postmanCountryFlagUi,
  countryNameToIso,
  resolveCountryNameFromIso,
  normalizeCountryToken,
  getCountryTitlePrefixVariants,
  stripCountryPrefixFromTitle
};
//# sourceMappingURL=chunk-LFV2WSNG.js.map
