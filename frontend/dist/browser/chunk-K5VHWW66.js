import {
  environment
} from "./chunk-KTYFS5OT.js";

// src/app/core/docs/verifik-docs-urls.ts
var SUPPORTED_LANGS = /* @__PURE__ */ new Set(["en", "es", "fr", "pt", "ko", "ja", "zh"]);
var docsBase = () => environment.documentationBaseUrl.replace(/\/$/, "");
var DOCS_BASE = docsBase();
var docsPageUrl = (path) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${docsBase()}${normalized}`;
};
var ES_LEGAL_PATHS = {
  privacyPolicy: "/legal/politica-privacidad/",
  termsAndConditions: "/terminos-y-condiciones/",
  serviceLevelAgreement: "/acuerdo-de-niveles-de-servicio/"
};
var EN_LEGAL_PATHS = {
  privacyPolicy: "/legal/privacy-policy/",
  termsAndConditions: "/legal/terms-and-conditions/",
  serviceLevelAgreement: "/legal/service-level-agreement/"
};
var normalizeLang = (lang) => SUPPORTED_LANGS.has(lang) ? lang : "en";
var localePrefix = (lang) => lang === "en" ? "" : `/verifik-${lang}`;
var buildDocsHome = (locale) => {
  const base = locale === "en" ? DOCS_BASE : `${DOCS_BASE}/verifik-${locale}`;
  return `${base}/intro/`;
};
var getVerifikDocsUrls = (lang) => {
  const locale = normalizeLang(lang);
  if (locale === "es") {
    const prefix2 = `${DOCS_BASE}/verifik-es`;
    return {
      docsHome: buildDocsHome(locale),
      privacyPolicy: `${prefix2}${ES_LEGAL_PATHS.privacyPolicy}`,
      termsAndConditions: `${prefix2}${ES_LEGAL_PATHS.termsAndConditions}`,
      serviceLevelAgreement: `${prefix2}${ES_LEGAL_PATHS.serviceLevelAgreement}`
    };
  }
  const prefix = localePrefix(locale);
  const base = prefix ? `${DOCS_BASE}${prefix}` : DOCS_BASE;
  return {
    docsHome: buildDocsHome(locale),
    privacyPolicy: `${base}${EN_LEGAL_PATHS.privacyPolicy}`,
    termsAndConditions: `${base}${EN_LEGAL_PATHS.termsAndConditions}`,
    serviceLevelAgreement: `${base}${EN_LEGAL_PATHS.serviceLevelAgreement}`
  };
};

export {
  docsPageUrl,
  getVerifikDocsUrls
};
//# sourceMappingURL=chunk-K5VHWW66.js.map
