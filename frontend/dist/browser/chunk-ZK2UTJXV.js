import {
  getCountryTitlePrefixVariants,
  normalizeCountryToken,
  stripCountryPrefixFromTitle
} from "./chunk-LFV2WSNG.js";

// src/app/modules/postman/postman-endpoint-copy.util.ts
var GENERIC_APP_FEATURE_DESCRIPTIONS = /* @__PURE__ */ new Set([
  "Provides reliable verification and validation services.",
  "Proporciona servicios confiables de verificaci\xF3n y validaci\xF3n.",
  "Fornece servi\xE7os confi\xE1veis de verifica\xE7\xE3o e valida\xE7\xE3o.",
  "Fournit des services de v\xE9rification et de validation fiables.",
  "\u63D0\u4F9B\u53EF\u9760\u7684\u9A8C\u8BC1\u548C\u9A8C\u8BC1\u670D\u52A1\u3002",
  "\u4FE1\u983C\u6027\u306E\u9AD8\u3044\u691C\u8A3C\u3068\u691C\u8A3C\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002",
  "\uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uAC80\uC99D \uBC0F \uAC80\uC99D \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
]);
var catalogCopyFromBlock = (feature) => {
  if (!feature || typeof feature !== "object" || Array.isArray(feature))
    return {};
  return {
    title: typeof feature.title === "string" && feature.title.trim() ? feature.title.trim() : void 0,
    description: typeof feature.description === "string" && feature.description.trim() ? feature.description.trim() : void 0
  };
};
var catalogCopyFromMap = (appFeatures, code) => {
  const candidates = [
    code,
    code.toLowerCase(),
    `api_${code}`,
    `${code}_vehicle`,
    `api_${code}_vehicle`,
    code.replace(/^[a-z]{2,10}_api_/, "api_")
  ];
  for (const key of candidates) {
    const found = catalogCopyFromBlock(appFeatures[key]);
    if (found.title || found.description)
      return found;
  }
  const compact = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const wanted = compact(code);
  if (wanted.length >= 8) {
    for (const [key, block] of Object.entries(appFeatures)) {
      const hay = compact(key);
      if (hay === wanted || hay.endsWith(wanted) || wanted.endsWith(hay)) {
        const found = catalogCopyFromBlock(block);
        if (found.title || found.description)
          return found;
      }
    }
  }
  if (code.includes("data_sheet")) {
    const dsKey = Object.keys(appFeatures).find((k) => k.includes("data_sheet"));
    if (dsKey)
      return catalogCopyFromBlock(appFeatures[dsKey]);
  }
  return {};
};
var getAppFeatureCatalogCopy = (transloco, code) => {
  if (!code)
    return {};
  const lang = transloco.getActiveLang();
  const baseLang = lang.split("-")[0];
  const dictionaries = [transloco.getTranslation(lang), transloco.getTranslation(baseLang)];
  for (const translations of dictionaries) {
    if (!translations)
      continue;
    const flatTitle = translations[`appFeatures.${code}.title`];
    const flatDescription = translations[`appFeatures.${code}.description`];
    if (typeof flatTitle === "string" && flatTitle.trim()) {
      return {
        title: flatTitle.trim(),
        description: typeof flatDescription === "string" && flatDescription.trim() ? flatDescription.trim() : void 0
      };
    }
    const appFeatures = translations["appFeatures"];
    if (!appFeatures || typeof appFeatures !== "object" || Array.isArray(appFeatures))
      continue;
    const found = catalogCopyFromMap(appFeatures, code);
    if (found.title || found.description)
      return found;
  }
  if (typeof transloco.translate === "function") {
    const titleKey = `appFeatures.${code}.title`;
    const descriptionKey = `appFeatures.${code}.description`;
    const title = transloco.translate(titleKey);
    const description = transloco.translate(descriptionKey);
    return {
      title: title && title !== titleKey ? title.trim() : void 0,
      description: description && description !== descriptionKey ? description.trim() : void 0
    };
  }
  return {};
};
var DOC_LOCALES = ["en", "es", "fr", "pt", "ko", "ja", "zh"];
var PARTIAL_DOC_LOCALES = /* @__PURE__ */ new Set(["fr", "pt", "ko", "ja", "zh"]);
var prefersCatalogCopy = (locale) => !!locale && (PARTIAL_DOC_LOCALES.has(locale) || locale === "es");
var toDocLocale = (locale) => {
  if (!locale)
    return null;
  const base = locale.split("-")[0].toLowerCase();
  return DOC_LOCALES.includes(base) ? base : null;
};
var docHasLocalizedCopy = (doc) => Boolean(doc?.overview?.trim() || doc?.description?.trim() || doc?.title?.trim());
var pickActiveDocLang = (docs, locale) => {
  if (!docs)
    return null;
  const active = toDocLocale(locale ?? null);
  if (!active || !docs[active])
    return null;
  const doc = docs[active] ?? null;
  return docHasLocalizedCopy(doc) ? doc : null;
};
var pickEnglishDocLang = (docs) => docs?.en ?? null;
var sanitizePostmanCopyText = (value) => {
  if (!value?.trim())
    return "";
  let text = value.trim();
  text = text.replace(/\\U0001[A-Fa-f0-9]{4}/g, "");
  text = text.replace(/^[\u{1F1E6}-\u{1F1FF}]{2}\s*/u, "");
  text = text.replace(/\s{2,}/g, " ").trim();
  if (text.includes("_") && !text.includes(" ")) {
    text = text.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }
  return text;
};
var localizedCatalogFallbackTitle = (endpoint, locale) => {
  const active = toDocLocale(locale ?? null);
  if (active === "es") {
    const nameES = sanitizePostmanCopyText(endpoint.nameES);
    if (nameES)
      return nameES;
  }
  return sanitizePostmanCopyText(endpoint.label) || endpoint.label || "";
};
var isGenericDescription = (value) => {
  if (!value?.trim())
    return true;
  const normalized = value.trim();
  if (GENERIC_APP_FEATURE_DESCRIPTIONS.has(normalized))
    return true;
  return false;
};
var looksLikeEnglishCopy = (value) => {
  if (!value?.trim())
    return false;
  const sample = value.slice(0, 500);
  const spanishHits = (sample.match(/\b(el|la|los|las|un|una|de|del|para|con|por|consulta|permite|verifica|licencia|c[eé]dula|ciudadano|veh[ií]culo|informaci[oó]n|usando|mediante)\b/gi) ?? []).length;
  const englishHits = (sample.match(/\b(the|and|with|from|this|allows|query|official|through|using|provides|returns|license|driver|information|registered)\b/gi) ?? []).length;
  return englishHits >= 3 && englishHits > spanishHits;
};
var skipEnglishLeak = (text, locale) => prefersCatalogCopy(locale) && looksLikeEnglishCopy(text);
var overviewLeadParagraph = (overview, maxLen = 220) => {
  if (!overview?.trim())
    return "";
  const plain = overview.replace(/\r\n/g, "\n").split("\n").filter((line) => !/^#{1,6}\s/.test(line.trim())).join("\n").replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\n+/g, " ").trim();
  if (!plain)
    return "";
  const sentence = plain.match(/^[^.!?]+[.!?]?/)?.[0]?.trim() ?? plain;
  if (sentence.length <= maxLen)
    return sentence;
  return `${sentence.slice(0, maxLen - 1).trim()}\u2026`;
};
var resolveAboutParamsColumnVisibility = (rows) => ({
  showConditionalColumn: rows.some((row) => !!row.conditionalHint?.trim()),
  showAllowedColumn: rows.some((row) => (row.allowed?.length ?? 0) > 0),
  showDateFormatColumn: rows.some((row) => !!row.dateFormat?.trim())
});
var isDescriptiveEndpointTitle = (value, country) => {
  const stripped = stripCountryPrefixFromTitle(value, country);
  if (!stripped)
    return false;
  const countryTokens = getCountryTitlePrefixVariants(country).map(normalizeCountryToken);
  return !countryTokens.includes(normalizeCountryToken(stripped));
};
var pickDescriptiveTitle = (candidates, country, fallbackCode) => {
  const descriptive = candidates.find((value) => isDescriptiveEndpointTitle(value, country));
  if (descriptive)
    return descriptive;
  return candidates.find((value) => value.trim()) || fallbackCode;
};
var resolvePostmanEndpointCopy = (input) => {
  const { endpoint, catalogTitle, catalogDescription, locale } = input;
  const activeLocale = toDocLocale(locale ?? null);
  const activeDoc = pickActiveDocLang(endpoint.docs, locale);
  const enDoc = pickEnglishDocLang(endpoint.docs);
  const customTitle = sanitizePostmanCopyText(endpoint.layoutDisplayName);
  const activeDocTitle = sanitizePostmanCopyText(activeDoc?.title);
  const enDocTitle = sanitizePostmanCopyText(enDoc?.title);
  const catalog = sanitizePostmanCopyText(catalogTitle);
  const localizedName = activeLocale === "es" ? sanitizePostmanCopyText(endpoint.nameES) : "";
  const label = sanitizePostmanCopyText(endpoint.label);
  const descriptiveActiveDocTitle = isDescriptiveEndpointTitle(activeDocTitle, endpoint.country) ? activeDocTitle : "";
  const preferCatalogTitle = prefersCatalogCopy(activeLocale) && !descriptiveActiveDocTitle;
  const preferCatalogOverEnglish = prefersCatalogCopy(activeLocale) && !activeDoc;
  const rawTitle = customTitle ? customTitle : pickDescriptiveTitle([
    descriptiveActiveDocTitle,
    ...preferCatalogTitle ? [catalog, localizedName] : [],
    enDocTitle,
    catalog,
    localizedName,
    label
  ], endpoint.country, endpoint.code || "");
  const title = stripCountryPrefixFromTitle(rawTitle, endpoint.country);
  const activeDocDescription = activeDoc?.description?.trim();
  const enDocDescription = enDoc?.description?.trim();
  const activeOverview = overviewLeadParagraph(activeDoc?.overview);
  const enOverview = overviewLeadParagraph(enDoc?.overview);
  const catalogDesc = catalogDescription?.trim();
  const endpointDesc = endpoint.description?.trim();
  const localizedDescription = activeDocDescription && !skipEnglishLeak(activeDocDescription, activeLocale) ? activeDocDescription : "";
  const localizedOverview = activeOverview && !skipEnglishLeak(activeOverview, activeLocale) ? activeOverview : "";
  let description = "";
  if (localizedDescription) {
    description = localizedDescription;
  } else if (localizedOverview) {
    description = localizedOverview;
  } else if ((preferCatalogOverEnglish || prefersCatalogCopy(activeLocale)) && catalogDesc) {
    description = catalogDesc;
  } else if (enDocDescription) {
    description = enDocDescription;
  } else if (enOverview) {
    description = enOverview;
  } else if (catalogDesc && !isGenericDescription(catalogDesc)) {
    description = catalogDesc;
  } else if (endpointDesc && !isGenericDescription(endpointDesc)) {
    description = endpointDesc;
  } else if (catalogDesc) {
    description = catalogDesc;
  }
  if (description.includes("_") && !description.includes(" ")) {
    description = sanitizePostmanCopyText(description);
  }
  return {
    title,
    description,
    fullTitle: rawTitle
  };
};
var collectPostmanEndpointSearchText = (endpoint, catalog = {}, locale) => {
  const resolved = resolvePostmanEndpointCopy({
    endpoint,
    catalogTitle: catalog.title ?? localizedCatalogFallbackTitle(endpoint, locale),
    catalogDescription: catalog.description ?? endpoint.description ?? "",
    locale
  });
  const docsText = Object.values(endpoint.docs ?? {}).flatMap((block) => [block?.title, block?.description]).filter((value) => Boolean(value?.trim()));
  return [
    endpoint.label,
    endpoint.nameES,
    endpoint.url,
    endpoint.code,
    endpoint.country,
    endpoint.layoutDisplayName,
    endpoint.description,
    catalog.title,
    catalog.description,
    resolved.title,
    resolved.fullTitle,
    resolved.description,
    ...docsText
  ].filter((value) => Boolean(value?.trim())).join(" ").toLowerCase();
};
var postmanEndpointMatchesSearch = (endpoint, query, catalog = {}, locale) => {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery)
    return true;
  return collectPostmanEndpointSearchText(endpoint, catalog, locale).includes(normalizedQuery);
};
var resolveAboutOverview = (input) => {
  const { endpoint, catalogDescription, locale } = input;
  const activeDoc = pickActiveDocLang(endpoint.docs, locale);
  const enDoc = pickEnglishDocLang(endpoint.docs);
  const activeLocale = toDocLocale(locale ?? null);
  const catalogDesc = catalogDescription?.trim();
  const activeOverview = activeDoc?.overview?.trim();
  if (activeOverview && !skipEnglishLeak(activeOverview, activeLocale)) {
    return activeOverview;
  }
  const activeDocDescription = activeDoc?.description?.trim();
  if (activeDocDescription && !skipEnglishLeak(activeDocDescription, activeLocale)) {
    return activeDocDescription;
  }
  if (catalogDesc && !isGenericDescription(catalogDesc)) {
    return catalogDesc;
  }
  const allowEnglishFallback = activeLocale === "en" || !activeLocale;
  if (allowEnglishFallback && !activeDoc) {
    const enOverview = enDoc?.overview?.trim();
    if (enOverview)
      return enOverview;
    const enDocDescription = enDoc?.description?.trim();
    if (enDocDescription)
      return enDocDescription;
  }
  const endpointDesc = endpoint.description?.trim();
  if (allowEnglishFallback && endpointDesc && !isGenericDescription(endpointDesc)) {
    return endpointDesc;
  }
  if (catalogDesc)
    return catalogDesc;
  return allowEnglishFallback ? endpointDesc ?? "" : "";
};

export {
  GENERIC_APP_FEATURE_DESCRIPTIONS,
  getAppFeatureCatalogCopy,
  localizedCatalogFallbackTitle,
  resolveAboutParamsColumnVisibility,
  resolvePostmanEndpointCopy,
  postmanEndpointMatchesSearch,
  resolveAboutOverview
};
//# sourceMappingURL=chunk-ZK2UTJXV.js.map
