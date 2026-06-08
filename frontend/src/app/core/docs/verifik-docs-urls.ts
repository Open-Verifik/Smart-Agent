import { environment } from 'environments/environment';

export interface VerifikDocsUrls {
    docsHome: string;
    privacyPolicy: string;
    termsAndConditions: string;
    serviceLevelAgreement: string;
}

const SUPPORTED_LANGS = new Set(['en', 'es', 'fr', 'pt', 'ko', 'ja', 'zh']);

const DOCS_BASE = environment.documentationBaseUrl.replace(/\/$/, '');

/** Spanish legal pages use custom slugs under verifik-es. */
const ES_LEGAL_PATHS = {
    privacyPolicy: '/legal/politica-privacidad/',
    termsAndConditions: '/terminos-y-condiciones/',
    serviceLevelAgreement: '/acuerdo-de-niveles-de-servicio/',
} as const;

const EN_LEGAL_PATHS = {
    privacyPolicy: '/legal/privacy-policy/',
    termsAndConditions: '/legal/terms-and-conditions/',
    serviceLevelAgreement: '/legal/service-level-agreement/',
} as const;

const normalizeLang = (lang: string): string =>
    SUPPORTED_LANGS.has(lang) ? lang : 'en';

const localePrefix = (lang: string): string =>
    lang === 'en' ? '' : `/verifik-${lang}`;

const buildDocsHome = (locale: string): string => {
    const base =
        locale === 'en' ? DOCS_BASE : `${DOCS_BASE}/verifik-${locale}`;

    return `${base}/intro/`;
};

/**
 * Locale-aware absolute URLs for Verifik docs home and legal pages.
 * Paths align with verifik-documentation Docusaurus plugins per locale.
 */
export const getVerifikDocsUrls = (lang: string): VerifikDocsUrls => {
    const locale = normalizeLang(lang);

    if (locale === 'es') {
        const prefix = `${DOCS_BASE}/verifik-es`;
        return {
            docsHome: buildDocsHome(locale),
            privacyPolicy: `${prefix}${ES_LEGAL_PATHS.privacyPolicy}`,
            termsAndConditions: `${prefix}${ES_LEGAL_PATHS.termsAndConditions}`,
            serviceLevelAgreement: `${prefix}${ES_LEGAL_PATHS.serviceLevelAgreement}`,
        };
    }

    const prefix = localePrefix(locale);
    const base = prefix ? `${DOCS_BASE}${prefix}` : DOCS_BASE;

    return {
        docsHome: buildDocsHome(locale),
        privacyPolicy: `${base}${EN_LEGAL_PATHS.privacyPolicy}`,
        termsAndConditions: `${base}${EN_LEGAL_PATHS.termsAndConditions}`,
        serviceLevelAgreement: `${base}${EN_LEGAL_PATHS.serviceLevelAgreement}`,
    };
};
