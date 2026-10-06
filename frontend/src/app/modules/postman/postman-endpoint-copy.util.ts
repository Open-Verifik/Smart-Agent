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
        'code' | 'country' | 'layoutDisplayName' | 'label' | 'nameES' | 'description' | 'docs'
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

export interface TranslocoLike {
    getTranslation(lang?: string): Record<string, unknown> | undefined;
    getActiveLang(): string;
    translate?(key: string): string;
}

const catalogCopyFromBlock = (
    feature: { title?: string; description?: string } | undefined
): { title?: string; description?: string } => {
    if (!feature || typeof feature !== 'object' || Array.isArray(feature)) return {};
    return {
        title:
            typeof feature.title === 'string' && feature.title.trim()
                ? feature.title.trim()
                : undefined,
        description:
            typeof feature.description === 'string' && feature.description.trim()
                ? feature.description.trim()
                : undefined,
    };
};

const catalogCopyFromMap = (
    appFeatures: Record<string, { title?: string; description?: string }>,
    code: string
): { title?: string; description?: string } => {
    const candidates = [
        code,
        code.toLowerCase(),
        `api_${code}`,
        `${code}_vehicle`,
        `api_${code}_vehicle`,
        code.replace(/^[a-z]{2,10}_api_/, 'api_'),
    ];
    for (const key of candidates) {
        const found = catalogCopyFromBlock(appFeatures[key]);
        if (found.title || found.description) return found;
    }
    const compact = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const wanted = compact(code);
    if (wanted.length >= 8) {
        for (const [key, block] of Object.entries(appFeatures)) {
            const hay = compact(key);
            if (hay === wanted || hay.endsWith(wanted) || wanted.endsWith(hay)) {
                const found = catalogCopyFromBlock(block);
                if (found.title || found.description) return found;
            }
        }
    }
    if (code.includes('data_sheet')) {
        const dsKey = Object.keys(appFeatures).find((k) => k.includes('data_sheet'));
        if (dsKey) return catalogCopyFromBlock(appFeatures[dsKey]);
    }
    return {};
};

/**
 * Safely looks up `appFeatures.${code}.title` and `appFeatures.${code}.description`
 * from loaded Transloco translations without triggering missing key warnings.
 */
export const getAppFeatureCatalogCopy = (
    transloco: TranslocoLike,
    code: string | null | undefined
): { title?: string; description?: string } => {
    if (!code) return {};
    const lang = transloco.getActiveLang();
    const baseLang = lang.split('-')[0];
    const dictionaries = [transloco.getTranslation(lang), transloco.getTranslation(baseLang)];
    for (const translations of dictionaries) {
        const appFeatures = translations?.['appFeatures'] as
            | Record<string, { title?: string; description?: string }>
            | undefined;
        if (!appFeatures || typeof appFeatures !== 'object' || Array.isArray(appFeatures)) continue;
        const found = catalogCopyFromMap(appFeatures, code);
        if (found.title || found.description) return found;
    }
    if (typeof transloco.translate === 'function') {
        const titleKey = `appFeatures.${code}.title`;
        const descriptionKey = `appFeatures.${code}.description`;
        const title = transloco.translate(titleKey);
        const description = transloco.translate(descriptionKey);
        return {
            title: title && title !== titleKey ? title.trim() : undefined,
            description: description && description !== descriptionKey ? description.trim() : undefined,
        };
    }
    return {};
};

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

/** Locales where i18n catalog titles win when localized docs omit `title`. */
const PARTIAL_DOC_LOCALES = new Set<EndpointDocLocale>(['fr', 'pt', 'ko', 'ja', 'zh']);

const prefersCatalogCopy = (locale: EndpointDocLocale | null): boolean =>
    !!locale && (PARTIAL_DOC_LOCALES.has(locale) || locale === 'es');

const toDocLocale = (locale: string | null | undefined): EndpointDocLocale | null => {
    if (!locale) return null;
    const base = locale.split('-')[0].toLowerCase();
    return (DOC_LOCALES as string[]).includes(base) ? (base as EndpointDocLocale) : null;
};

const docHasLocalizedCopy = (doc: EndpointDocLang | null | undefined): boolean =>
    Boolean(doc?.overview?.trim() || doc?.description?.trim() || doc?.title?.trim());

const pickActiveDocLang = (
    docs: EndpointDocs | undefined,
    locale: PostmanCopyLocale | null | undefined
): EndpointDocLang | null => {
    if (!docs) return null;
    const active = toDocLocale(locale ?? null);
    if (!active || !docs[active]) return null;
    const doc = docs[active] ?? null;
    return docHasLocalizedCopy(doc) ? doc : null;
};

const pickEnglishDocLang = (docs: EndpointDocs | undefined): EndpointDocLang | null =>
    docs?.en ?? null;

/**
 * Removes JSON-exported emoji codepoints, leading flag glyphs, and humanizes snake_case identifiers.
 */
export const sanitizePostmanCopyText = (value: string | null | undefined): string => {
    if (!value?.trim()) return '';
    let text = value.trim();
    text = text.replace(/\\U0001[A-Fa-f0-9]{4}/g, '');
    text = text.replace(/^[\u{1F1E6}-\u{1F1FF}]{2}\s*/u, '');
    text = text.replace(/\s{2,}/g, ' ').trim();
    if (text.includes('_') && !text.includes(' ')) {
        text = text.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    }
    return text;
};

/**
 * Catalog fallback when `appFeatures.{code}.title` is missing.
 * Spanish uses `nameES` so English `feature.name` never leaks into the explorer.
 */
export const localizedCatalogFallbackTitle = (
    endpoint: Pick<ApiEndpoint, 'label' | 'nameES'>,
    locale?: PostmanCopyLocale | null
): string => {
    const active = toDocLocale(locale ?? null);
    if (active === 'es') {
        const nameES = sanitizePostmanCopyText(endpoint.nameES);
        if (nameES) return nameES;
    }
    return sanitizePostmanCopyText(endpoint.label) || endpoint.label || '';
};

const isGenericDescription = (value: string | null | undefined): boolean => {
    if (!value?.trim()) return true;
    const normalized = value.trim();
    if (GENERIC_APP_FEATURE_DESCRIPTIONS.has(normalized)) return true;
    return false;
};

/** True when copy is English even though the UI locale is not. */
const looksLikeEnglishCopy = (value: string | null | undefined): boolean => {
    if (!value?.trim()) return false;
    const sample = value.slice(0, 500);
    const spanishHits = (
        sample.match(
            /\b(el|la|los|las|un|una|de|del|para|con|por|consulta|permite|verifica|licencia|c[eé]dula|ciudadano|veh[ií]culo|informaci[oó]n|usando|mediante)\b/gi
        ) ?? []
    ).length;
    const englishHits = (
        sample.match(
            /\b(the|and|with|from|this|allows|query|official|through|using|provides|returns|license|driver|information|registered)\b/gi
        ) ?? []
    ).length;
    return englishHits >= 3 && englishHits > spanishHits;
};

const skipEnglishLeak = (
    text: string | null | undefined,
    locale: EndpointDocLocale | null
): boolean => prefersCatalogCopy(locale) && looksLikeEnglishCopy(text);

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
    const customTitle = sanitizePostmanCopyText(endpoint.layoutDisplayName);
    const activeDocTitle = sanitizePostmanCopyText(activeDoc?.title);
    const enDocTitle = sanitizePostmanCopyText(enDoc?.title);
    const catalog = sanitizePostmanCopyText(catalogTitle);
    const localizedName =
        activeLocale === 'es' ? sanitizePostmanCopyText(endpoint.nameES) : '';
    const label = sanitizePostmanCopyText(endpoint.label);
    const preferCatalogTitle = prefersCatalogCopy(activeLocale) && !activeDocTitle;
    const preferCatalogOverEnglish = prefersCatalogCopy(activeLocale) && !activeDoc;

    let rawTitle = '';
    if (customTitle) {
        rawTitle = customTitle;
    } else if (activeDocTitle) {
        rawTitle = activeDocTitle;
    } else if (preferCatalogTitle && catalog) {
        rawTitle = catalog;
    } else if (preferCatalogTitle && localizedName) {
        rawTitle = localizedName;
    } else if (enDocTitle) {
        rawTitle = enDocTitle;
    } else if (catalog) {
        rawTitle = catalog;
    } else if (localizedName) {
        rawTitle = localizedName;
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
    const localizedDescription =
        activeDocDescription && !skipEnglishLeak(activeDocDescription, activeLocale)
            ? activeDocDescription
            : '';
    const localizedOverview =
        activeOverview && !skipEnglishLeak(activeOverview, activeLocale) ? activeOverview : '';

    let description = '';
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

    if (description.includes('_') && !description.includes(' ')) {
        description = sanitizePostmanCopyText(description);
    }

    return {
        title,
        description,
        fullTitle: rawTitle,
    };
};

/**
 * Haystack for Postman sidebar search: visible label, catalog copy, and every locale docs title.
 */
export const collectPostmanEndpointSearchText = (
    endpoint: Pick<
        ApiEndpoint,
        'code' | 'country' | 'label' | 'nameES' | 'url' | 'description' | 'layoutDisplayName' | 'docs'
    >,
    catalog: { title?: string; description?: string } = {},
    locale?: PostmanCopyLocale | null
): string => {
    const resolved = resolvePostmanEndpointCopy({
        endpoint,
        catalogTitle: catalog.title ?? localizedCatalogFallbackTitle(endpoint, locale),
        catalogDescription: catalog.description ?? endpoint.description ?? '',
        locale,
    });
    const docsText = Object.values(endpoint.docs ?? {})
        .flatMap((block) => [block?.title, block?.description])
        .filter((value): value is string => Boolean(value?.trim()));

    return [
        endpoint.label,
        endpoint.nameES,
        endpoint.url,
        endpoint.code,
        endpoint.layoutDisplayName,
        endpoint.description,
        catalog.title,
        catalog.description,
        resolved.title,
        resolved.fullTitle,
        resolved.description,
        ...docsText,
    ]
        .filter((value): value is string => Boolean(value?.trim()))
        .join(' ')
        .toLowerCase();
};

/**
 * True when the sidebar search query matches the same copy the explorer shows.
 */
export const postmanEndpointMatchesSearch = (
    endpoint: Pick<
        ApiEndpoint,
        'code' | 'country' | 'label' | 'nameES' | 'url' | 'description' | 'layoutDisplayName' | 'docs'
    >,
    query: string,
    catalog: { title?: string; description?: string } = {},
    locale?: PostmanCopyLocale | null
): boolean => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return true;

    return collectPostmanEndpointSearchText(endpoint, catalog, locale).includes(normalizedQuery);
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

    const allowEnglishFallback = activeLocale === 'en' || !activeLocale;
    if (allowEnglishFallback && !activeDoc) {
        const enOverview = enDoc?.overview?.trim();
        if (enOverview) return enOverview;
        const enDocDescription = enDoc?.description?.trim();
        if (enDocDescription) return enDocDescription;
    }

    const endpointDesc = endpoint.description?.trim();
    if (allowEnglishFallback && endpointDesc && !isGenericDescription(endpointDesc)) {
        return endpointDesc;
    }

    if (catalogDesc) return catalogDesc;

    return allowEnglishFallback ? (endpointDesc ?? '') : '';
};
