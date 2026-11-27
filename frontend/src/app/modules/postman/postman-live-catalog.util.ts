import { isClientVisibleBatchDependencyField } from '../smart-batch/smart-batch-dependency.constants';
import { normalizeDocParamList } from './postman-docs-params.util';
import { EndpointDocLang, EndpointDocs } from './postman.types';
import postmanEndpointsIo from './postman-endpoints-io.json';

/**
 * Country PEP screens (`GET /v2/{cc}/politically-exposed-persons`) and the global
 * screen (`GET /v2/world/pep`). Immigration "PEP" products (Colombia foreigner id)
 * are a different API and are not included.
 */
const PEP_PATH =
    /(?:^|\/)v\d+\/(?:[a-z]{2}\/politically-exposed-persons|world\/pep)\/?$/i;

const GENERIC_CATEGORIES = new Set(['', 'apirequest', 'api_request', 'other', 'null', 'undefined']);

export interface LiveCatalogDependency {
    field: string;
    type: string;
    required?: boolean;
    description?: string;
    enum?: string[] | null;
    default?: unknown;
    dependencyGroup?: string;
    requiredWhen?: { field: string; in?: string[] };
    dateFormat?: string;
}

export interface LiveCatalogFeature {
    code?: string | null;
    url?: string | null;
    name?: string | null;
    nameES?: string | null;
    group?: string | null;
    baseCategory?: string | null;
    category?: string | null;
    dependencies?: unknown;
    input?: { dependencies?: unknown } | null;
    docs?: unknown;
}

interface StaticCatalogEntry {
    code?: string;
    nameES?: string;
    baseCategory?: string | null;
    category?: string | null;
    dependencies?: LiveCatalogDependency[];
    input?: { dependencies?: LiveCatalogDependency[] };
    docs?: EndpointDocs;
}

const DOC_LOCALES = ['en', 'es', 'fr', 'pt', 'ko', 'ja', 'zh'] as const;

let staticByCode: Map<string, StaticCatalogEntry> | null = null;

const staticEntries = (): StaticCatalogEntry[] => {
    const payload = postmanEndpointsIo as { endpoints?: StaticCatalogEntry[] } | StaticCatalogEntry[];
    if (Array.isArray(payload)) return payload;
    return Array.isArray(payload.endpoints) ? payload.endpoints : [];
};

export const staticCatalogEntry = (code: string | null | undefined): StaticCatalogEntry | undefined => {
    if (!code) return undefined;
    if (!staticByCode) {
        staticByCode = new Map(
            staticEntries()
                .filter((entry) => typeof entry?.code === 'string' && entry.code.length > 0)
                .map((entry) => [entry.code as string, entry])
        );
    }
    return staticByCode.get(code);
};

export const isCountryOrWorldPepEndpoint = (feature: {
    code?: string | null;
    url?: string | null;
}): boolean => {
    const code = String(feature.code || '').trim().toLowerCase();
    if (code === 'world_api_pep' || /^[a-z]{2}_api_pep$/.test(code)) return true;
    const rawUrl = String(feature.url || '').trim();
    if (!rawUrl) return false;
    const path = rawUrl.replace(/^https?:\/\/[^/]+/i, '');
    return PEP_PATH.test(path.startsWith('/') ? path : `/${path}`);
};

const usableCategory = (value: unknown): string => {
    const text = typeof value === 'string' ? value.trim() : '';
    if (!text || GENERIC_CATEGORIES.has(text.toLowerCase())) return '';
    return text;
};

/**
 * Live production rows often omit `baseCategory` and only send `group: "apiRequest"`,
 * which the sidebar renders as "Apirequest". Prefer a real category from the record,
 * then the static catalog, then the PEP background-check bucket.
 */
export const resolveFeatureCategory = (
    feature: LiveCatalogFeature,
    staticEntry: StaticCatalogEntry | undefined
): string => {
    const live = usableCategory(feature.baseCategory) || usableCategory(feature.category);
    if (live) return live;
    const fromStatic = usableCategory(staticEntry?.baseCategory) || usableCategory(staticEntry?.category);
    if (fromStatic) return fromStatic;
    if (isCountryOrWorldPepEndpoint(feature)) return 'background_check';
    return typeof feature.group === 'string' ? feature.group : '';
};

export const staticCatalogDependencies = (
    entry: StaticCatalogEntry | undefined
): LiveCatalogDependency[] => {
    if (!entry) return [];
    if (Array.isArray(entry.dependencies) && entry.dependencies.length) return entry.dependencies;
    if (Array.isArray(entry.input?.dependencies) && entry.input.dependencies.length) {
        return entry.input.dependencies;
    }
    return [];
};

const asDependency = (value: unknown): LiveCatalogDependency | null => {
    if (!value || typeof value !== 'object') return null;
    const record = value as Partial<LiveCatalogDependency> & { field?: unknown };
    const field = typeof record.field === 'string' ? record.field.trim() : '';
    if (!field || !isClientVisibleBatchDependencyField(field)) return null;
    const group =
        record.dependencyGroup != null && String(record.dependencyGroup).trim()
            ? String(record.dependencyGroup).trim()
            : undefined;
    return {
        field,
        type: typeof record.type === 'string' ? record.type : 'String',
        required: !!record.required,
        description: typeof record.description === 'string' ? record.description : '',
        enum: Array.isArray(record.enum) ? record.enum.map(String) : undefined,
        default: record.default,
        ...(group ? { dependencyGroup: group } : {}),
        ...(record.requiredWhen ? { requiredWhen: record.requiredWhen } : {}),
        ...(typeof record.dateFormat === 'string' && record.dateFormat.trim()
            ? { dateFormat: record.dateFormat }
            : {}),
    };
};

export const normalizeDependencyList = (raw: unknown): LiveCatalogDependency[] => {
    if (Array.isArray(raw)) {
        return raw.map(asDependency).filter((dep): dep is LiveCatalogDependency => !!dep);
    }
    if (raw && typeof raw === 'object') {
        return Object.entries(raw as Record<string, unknown>)
            .map(([field, meta]) =>
                asDependency({
                    ...(meta && typeof meta === 'object' ? (meta as object) : {}),
                    field,
                })
            )
            .filter((dep): dep is LiveCatalogDependency => !!dep);
    }
    return [];
};

const pepDependencyGroup = (field: string): string | undefined => {
    if (field === 'documentNumber') return '1';
    if (field === 'fullName') return '2';
    return undefined;
};

/**
 * Copies `dependencyGroup` (and other omitted metadata) from the static catalog when
 * the live row is a flat parameter list. PEP screens still get document-vs-name groups
 * if the static row is missing, so empty submits ask for documentNumber or fullName.
 * Staff-only `force` is dropped before validation.
 */
export const mergeLiveDependencies = (
    liveDeps: LiveCatalogDependency[],
    staticDeps: LiveCatalogDependency[],
    feature: LiveCatalogFeature
): LiveCatalogDependency[] => {
    const source = liveDeps.length ? liveDeps : staticDeps;
    const byField = new Map(staticDeps.filter((dep) => dep.field).map((dep) => [dep.field, dep]));
    const pep = isCountryOrWorldPepEndpoint(feature);
    return source
        .map((dep) => asDependency(dep))
        .filter((dep): dep is LiveCatalogDependency => !!dep)
        .map((dep) => {
            const stat = byField.get(dep.field);
            let group = dep.dependencyGroup || (stat?.dependencyGroup ? String(stat.dependencyGroup).trim() : '');
            if (!group && pep) group = pepDependencyGroup(dep.field) || '';
            return {
                ...dep,
                description: dep.description || stat?.description || '',
                enum: dep.enum?.length ? dep.enum : stat?.enum,
                default: dep.default ?? stat?.default,
                requiredWhen: dep.requiredWhen ?? stat?.requiredWhen,
                dateFormat: dep.dateFormat || stat?.dateFormat,
                ...(group ? { dependencyGroup: group } : {}),
            };
        });
};

const localeScore = (doc: EndpointDocLang | undefined): number => {
    if (!doc) return 0;
    let score = 0;
    if (doc.overview?.trim() && doc.overview.trim().length > 40) score += 4;
    if (doc.requestExamples?.length) score += 2;
    if (doc.responses?.length) score += 2;
    if (doc.headers?.length) score += 1;
    if (doc.title?.trim()) score += 1;
    const params = normalizeDocParamList(doc.params);
    if (params.some((row) => row.description?.trim())) score += 2;
    else if (params.length) score += 1;
    return score;
};

const withObjectParams = (doc: EndpointDocLang): EndpointDocLang => ({
    ...doc,
    params: normalizeDocParamList(doc.params),
});

const asDocLang = (value: unknown): EndpointDocLang | undefined => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
    return value as EndpointDocLang;
};

const asDocs = (value: unknown): EndpointDocs | undefined => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
    return value as EndpointDocs;
};

/**
 * Live PEP docs are en/es titles plus a string param list. The static catalog has
 * the 7-locale overview, examples, and object params. Keep whichever locale is richer.
 */
export const mergeEndpointDocs = (live: unknown, staticDocs: unknown): EndpointDocs | undefined => {
    const liveDocs = asDocs(live);
    const catalogDocs = asDocs(staticDocs);
    if (!liveDocs && !catalogDocs) return undefined;
    const keys = new Set<string>([
        ...Object.keys(liveDocs || {}),
        ...Object.keys(catalogDocs || {}),
    ]);
    const merged: EndpointDocs = {};
    for (const key of keys) {
        if (!(DOC_LOCALES as readonly string[]).includes(key)) continue;
        const locale = key as (typeof DOC_LOCALES)[number];
        const liveLang = asDocLang(liveDocs?.[locale]);
        const staticLang = asDocLang(catalogDocs?.[locale]);
        const chosen =
            !liveLang ? staticLang : !staticLang ? liveLang : localeScore(staticLang) > localeScore(liveLang) ? staticLang : liveLang;
        if (chosen) merged[locale] = withObjectParams(chosen);
    }
    return Object.keys(merged).length ? merged : undefined;
};

export interface PreparedLiveCatalogFeature {
    category: string;
    dependencies: LiveCatalogDependency[];
    docs?: EndpointDocs;
    nameES?: string;
}

export const prepareLiveCatalogFeature = (
    feature: LiveCatalogFeature,
    entry: StaticCatalogEntry | undefined = staticCatalogEntry(feature.code)
): PreparedLiveCatalogFeature => {
    const liveDeps = normalizeDependencyList(feature.dependencies ?? feature.input?.dependencies);
    const nameES =
        typeof feature.nameES === 'string' && feature.nameES.trim()
            ? feature.nameES.trim()
            : typeof entry?.nameES === 'string' && entry.nameES.trim()
              ? entry.nameES.trim()
              : undefined;
    return {
        category: resolveFeatureCategory(feature, entry),
        dependencies: mergeLiveDependencies(liveDeps, staticCatalogDependencies(entry), feature),
        docs: mergeEndpointDocs(feature.docs, entry?.docs),
        ...(nameES ? { nameES } : {}),
    };
};
