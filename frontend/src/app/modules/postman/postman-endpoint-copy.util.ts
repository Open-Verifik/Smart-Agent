import {
    ApiEndpoint,
    EndpointDocLang,
    EndpointDocLocale,
    EndpointDocs,
} from './postman.types';
import { stripCountryPrefixFromTitle } from './postman-country.util';

/** Known generic catalog descriptions — skip when docs copy is available. */
export const GENERIC_APP_FEATURE_DESCRIPTIONS = new Set([
    'Provides reliable verification and validation services.',
    'Proporciona servicios confiables de verificación y validación.',
    'Fornece serviços confiáveis de verificação e validação.',
    'Fournit des services de vérification et de validation fiables.',
    '提供可靠的验证和验证服务。',
    '信頼性の高い検証と検証サービスを提供します。',
    '신뢰할 수 있는 검증 및 검증 서비스를 제공합니다.',
]);

export type PostmanCopyLocale = EndpointDocLocale | string;

export interface ResolvePostmanEndpointCopyInput {
    endpoint: Pick<
        ApiEndpoint,
        'code' | 'country' | 'layoutDisplayName' | 'label' | 'description' | 'docs'
    >;
    /** Resolved i18n catalog title (appFeatures.{code}.title). */
    catalogTitle: string;
    /** Resolved i18n catalog description (appFeatures.{code}.description). */
    catalogDescription: string;
    locale?: PostmanCopyLocale | null;
}

export interface ResolvedPostmanEndpointCopy {
    title: string;
    description: string;
    /** Full title before country-prefix strip (for tooltips / rename default). */
    fullTitle: string;
}

export interface ResolveAboutOverviewInput {
    endpoint: Pick<ApiEndpoint, 'code' | 'description' | 'docs'>;
    /** Resolved i18n catalog description (appFeatures.{code}.description). */
    catalogDescription: string;
    locale?: PostmanCopyLocale | null;
}

export interface AboutParamsColumnVisibilityInput {
    conditionalHint?: string | null;
    allowed?: readonly string[] | null;
    dateFormat?: string | null;
}

export interface AboutParamsColumnVisibility {
    showConditionalColumn: boolean;
    showAllowedColumn: boolean;
    showDateFormatColumn: boolean;
}

const DOC_LOCALES: EndpointDocLocale[] = ['en', 'es', 'fr', 'pt', 'ko', 'ja', 'zh'];

/** Locales where i18n bundles are the primary fallback before English docs. */
const PARTIAL_DOC_LOCALES = new Set<EndpointDocLocale>(['fr', 'pt', 'ko', 'ja', 'zh']);

const toDocLocale = (locale: string | null | undefined): EndpointDocLocale | null => {
    if (!locale) return null;
    const base = locale.split('-')[0].toLowerCase();
    return (DOC_LOCALES as string[]).includes(base) ? (base as EndpointDocLocale) : null;
};

const pickActiveDocLang = (
    docs: EndpointDocs | undefined,
    locale: PostmanCopyLocale | null | undefined
): EndpointDocLang | null => {
    if (!docs) return null;
    const active = toDocLocale(locale ?? null);
    if (!active || !docs[active]) return null;
    return docs[active] ?? null;
};

const pickEnglishDocLang = (docs: EndpointDocs | undefined): EndpointDocLang | null =>
    docs?.en ?? null;

/**
 * Removes JSON-exported emoji codepoints and leading flag glyphs from catalog/backend titles.
 */
export const sanitizePostmanCopyText = (value: string | null | undefined): string => {
    if (!value?.trim()) return '';
    let text = value.trim();
    text = text.replace(/\\U0001[A-Fa-f0-9]{4}/g, '');
    text = text.replace(/^[\u{1F1E6}-\u{1F1FF}]{2}\s*/u, '');
    text = text.replace(/\s{2,}/g, ' ').trim();
    return text;
};

const isGenericDescription = (value: string | null | undefined): boolean => {
    if (!value?.trim()) return true;
    const normalized = value.trim();
    if (GENERIC_APP_FEATURE_DESCRIPTIONS.has(normalized)) return true;
    return false;
};

/**
 * First plain-text paragraph from markdown overview (no headings, links simplified).
 */
export const overviewLeadParagraph = (
    overview: string | null | undefined,
    maxLen = 220
): string => {
    if (!overview?.trim()) return '';
    const plain = overview
        .replace(/\r\n/g, '\n')
        .split('\n')
        .filter((line) => !/^#{1,6}\s/.test(line.trim()))
        .join('\n')
        .replace(/\*\*/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/\n+/g, ' ')
        .trim();
    if (!plain) return '';
    const sentence = plain.match(/^[^.!?]+[.!?]?/)?.[0]?.trim() ?? plain;
    if (sentence.length <= maxLen) return sentence;
    return `${sentence.slice(0, maxLen - 1).trim()}…`;
};

export const resolveAboutParamsColumnVisibility = (
    rows: readonly AboutParamsColumnVisibilityInput[]
): AboutParamsColumnVisibility => ({
    showConditionalColumn: rows.some((row) => !!row.conditionalHint?.trim()),
    showAllowedColumn: rows.some((row) => (row.allowed?.length ?? 0) > 0),
    showDateFormatColumn: rows.some((row) => !!row.dateFormat?.trim()),
});

/**
 * Resolves Postman-visible title and subtitle from docs, custom labels, and i18n catalog.
 */
export const resolvePostmanEndpointCopy = (
    input: ResolvePostmanEndpointCopyInput
): ResolvedPostmanEndpointCopy => {
    const { endpoint, catalogTitle, catalogDescription, locale } = input;
    const activeLocale = toDocLocale(locale ?? null);
    const activeDoc = pickActiveDocLang(endpoint.docs, locale);
    const enDoc = pickEnglishDocLang(endpoint.docs);
    const preferCatalogOverEnglish =
        !!activeLocale &&
        !activeDoc &&
        (PARTIAL_DOC_LOCALES.has(activeLocale) || activeLocale === 'es');

    const customTitle = sanitizePostmanCopyText(endpoint.layoutDisplayName);
    const activeDocTitle = sanitizePostmanCopyText(activeDoc?.title);
    const enDocTitle = sanitizePostmanCopyText(enDoc?.title);
    const catalog = sanitizePostmanCopyText(catalogTitle);
    const label = sanitizePostmanCopyText(endpoint.label);

    let rawTitle = '';
    if (customTitle) {
        rawTitle = customTitle;
    } else if (activeDocTitle) {
        rawTitle = activeDocTitle;
    } else if (preferCatalogOverEnglish && catalog) {
        rawTitle = catalog;
    } else if (enDocTitle) {
        rawTitle = enDocTitle;
    } else if (catalog) {
        rawTitle = catalog;
    } else if (label) {
        rawTitle = label;
    } else {
        rawTitle = endpoint.code || '';
    }

    const title = stripCountryPrefixFromTitle(rawTitle, endpoint.country);

    const activeDocDescription = activeDoc?.description?.trim();
    const enDocDescription = enDoc?.description?.trim();
    const activeOverview = overviewLeadParagraph(activeDoc?.overview);
    const enOverview = overviewLeadParagraph(enDoc?.overview);
    const catalogDesc = catalogDescription?.trim();
    const endpointDesc = endpoint.description?.trim();

    let description = '';
    if (activeDocDescription) {
        description = activeDocDescription;
    } else if (preferCatalogOverEnglish && catalogDesc) {
        description = catalogDesc;
    } else if (enDocDescription) {
        description = enDocDescription;
    } else if (activeOverview) {
        description = activeOverview;
    } else if (enOverview) {
        description = enOverview;
    } else if (catalogDesc && !isGenericDescription(catalogDesc)) {
        description = catalogDesc;
    } else if (endpointDesc && !isGenericDescription(endpointDesc)) {
        description = endpointDesc;
    } else if (catalogDesc) {
        description = catalogDesc;
    }

    return {
        title,
        description,
        fullTitle: rawTitle,
    };
};

/**
 * Resolves the About-tab overview markdown from docs, i18n catalog, and OpenAPI fallback.
 * Prefers active-locale content and avoids English OpenAPI text when a localized catalog exists.
 */
export const resolveAboutOverview = (input: ResolveAboutOverviewInput): string => {
    const { endpoint, catalogDescription, locale } = input;
    const activeDoc = pickActiveDocLang(endpoint.docs, locale);
    const enDoc = pickEnglishDocLang(endpoint.docs);
    const activeLocale = toDocLocale(locale ?? null);

    const activeOverview = activeDoc?.overview?.trim();
    if (activeOverview) return activeOverview;

    const activeDocDescription = activeDoc?.description?.trim();
    if (activeDocDescription) return activeDocDescription;

    const catalogDesc = catalogDescription?.trim();
    if (catalogDesc && !isGenericDescription(catalogDesc)) {
        return catalogDesc;
    }

    if (!activeDoc) {
        const enOverview = enDoc?.overview?.trim();
        if (enOverview) return enOverview;
        const enDocDescription = enDoc?.description?.trim();
        if (enDocDescription) return enDocDescription;
    }

    const endpointDesc = endpoint.description?.trim();
    if (activeLocale === 'en' && endpointDesc && !isGenericDescription(endpointDesc)) {
        return endpointDesc;
    }

    if (catalogDesc) return catalogDesc;

    return endpointDesc ?? '';
};
