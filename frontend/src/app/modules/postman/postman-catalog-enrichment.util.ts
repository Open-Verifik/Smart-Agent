import {
    EndpointDocLang,
    EndpointDocLocale,
    EndpointDocParamRow,
    EndpointDocs,
} from './postman.types';
import { coerceEndpointDocParamRows } from './postman-docs-params.util';
import {
    verifiedPostBodyDescription,
    verifiedPostBodyFor,
    VerifiedPostBodyField,
} from './postman-feature-shape.util';
import postmanEndpointsIo from './postman-endpoints-io.json';

const DOC_LOCALES: EndpointDocLocale[] = ['en', 'es', 'fr', 'pt', 'ko', 'ja', 'zh'];
const STAFF_ONLY_FIELD = 'force';
const NAME_DOCUMENT_FIELDS = 'documentNumber,fullName';

type DependencyRow = {
    field: string;
    type?: string;
    required?: boolean;
    enum?: string[] | null;
    default?: unknown;
    description?: string;
    dependencyGroup?: string;
    requiredWhen?: { field: string; in?: string[] };
    dateFormat?: string;
    min?: unknown;
    max?: unknown;
};

type StaticCatalogEntry = {
    code?: string;
    nameES?: string;
    description?: string;
    baseCategory?: string;
    category?: string;
    dependencies?: DependencyRow[];
    input?: { dependencies?: DependencyRow[] };
    docs?: EndpointDocs;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
    !!value && typeof value === 'object' && !Array.isArray(value);

const nonEmpty = (value: unknown): string => (typeof value === 'string' ? value.trim() : '');

const asDependencyList = (raw: unknown): DependencyRow[] => {
    if (Array.isArray(raw)) {
        return raw.filter(
            (row): row is DependencyRow =>
                isRecord(row) && typeof row.field === 'string' && !!row.field.trim()
        );
    }
    if (!isRecord(raw)) return [];
    return Object.entries(raw).map(([field, meta]) => ({
        field,
        ...(isRecord(meta) ? (meta as Omit<DependencyRow, 'field'>) : {}),
    }));
};

let staticCatalog: Map<string, StaticCatalogEntry> | null = null;

const staticCatalogByCode = (): Map<string, StaticCatalogEntry> => {
    if (staticCatalog) return staticCatalog;
    const endpoints = (postmanEndpointsIo as { endpoints?: StaticCatalogEntry[] }).endpoints ?? [];
    staticCatalog = new Map(
        endpoints
            .filter((entry) => typeof entry.code === 'string' && entry.code.trim())
            .map((entry) => [entry.code as string, entry])
    );
    return staticCatalog;
};

const dependencyFields = (deps: DependencyRow[]): string =>
    deps
        .map((dep) => dep.field)
        .filter((field) => field !== STAFF_ONLY_FIELD)
        .sort()
        .join(',');

const isOptionalNameOrDocumentPair = (deps: DependencyRow[]): boolean => {
    const visible = deps.filter((dep) => dep.field !== STAFF_ONLY_FIELD);
    if (dependencyFields(visible) !== NAME_DOCUMENT_FIELDS) return false;
    return visible.every((dep) => dep.required !== true && !nonEmpty(dep.dependencyGroup));
};

const PEP_PATH = /(?:^|\/)?v\d+\/(?:[a-z]{2}\/politically-exposed-persons|world\/pep)\/?$/i;
const REGISTRY_PATH = /(?:^|\/)?v\d+\/[a-z]{2}\/(company|citizen)\/?$/i;

/**
 * Company registry (`GET /v2/{cc}/company`) and citizen / sole-proprietor
 * (`GET /v2/{cc}/citizen`) lookups. Live rows store `group: apiRequest` and omit
 * `baseCategory`, which would otherwise land them under Apirequest.
 */
export const inferRegistryBaseCategory = (feature: {
    url?: unknown;
    code?: unknown;
}): string => {
    const url = nonEmpty(feature.url).replace(/^\/+/, '');
    const match = url.match(REGISTRY_PATH);
    if (!match) return '';
    return match[1].toLowerCase() === 'company' ? 'business' : 'identity';
};

/**
 * Country PEP screens (`GET /v2/{cc}/politically-exposed-persons`) and `GET /v2/world/pep`.
 * Colombia's immigration PEP products are a different API.
 */
const isCountryOrWorldPepFeature = (feature: Record<string, unknown>): boolean => {
    const code = nonEmpty(feature.code).toLowerCase();
    if (code === 'world_api_pep' || /^[a-z]{2}_api_pep$/.test(code)) return true;
    const url = nonEmpty(feature.url).replace(/^\/+/, '');
    return PEP_PATH.test(url);
};

/**
 * Flat `/v2/{list}` sanctions lists are stored as optional `fullName` + `documentNumber`
 * with no `baseCategory`. The explorer groups those under Background Check and offers the
 * two fields as alternate search modes.
 */
const isFlatWatchlistFeature = (
    feature: Record<string, unknown>,
    deps: DependencyRow[]
): boolean => {
    const code = nonEmpty(feature.code);
    const url = nonEmpty(feature.url).replace(/^\/+/, '');
    return (
        code.startsWith('world_api_') &&
        /^v2\/[a-z0-9-]+$/.test(url) &&
        dependencyFields(deps) === NAME_DOCUMENT_FIELDS
    );
};

const resolveBaseCategory = (
    feature: Record<string, unknown>,
    staticEntry: StaticCatalogEntry | undefined,
    deps: DependencyRow[]
): string => {
    const liveBase = nonEmpty(feature.baseCategory);
    if (liveBase && liveBase.toLowerCase() !== 'apirequest') return liveBase;
    const staticBase = nonEmpty(staticEntry?.baseCategory);
    if (staticBase && staticBase.toLowerCase() !== 'apirequest') return staticBase;
    const raw = nonEmpty(feature.category) || nonEmpty(staticEntry?.category);
    if (raw && raw.toLowerCase() !== 'apirequest') return raw;
    const group = nonEmpty(feature.group);
    if (group && group !== 'apiRequest') return group;
    if (isFlatWatchlistFeature(feature, deps) || isCountryOrWorldPepFeature(feature)) {
        return 'background_check';
    }
    return inferRegistryBaseCategory(feature);
};

const enrichDependencies = (
    feature: Record<string, unknown>,
    featureDeps: DependencyRow[],
    staticEntry: StaticCatalogEntry | undefined
): DependencyRow[] => {
    const staticDeps = asDependencyList(
        staticEntry?.dependencies ?? staticEntry?.input?.dependencies
    );
    const staticByField = new Map(staticDeps.map((dep) => [dep.field, dep]));
    const source = featureDeps.length ? featureDeps : staticDeps;
    let deps = source
        .filter((dep) => dep.field !== STAFF_ONLY_FIELD)
        .map((dep) => {
            const match = staticByField.get(dep.field);
            const dependencyGroup =
                nonEmpty(dep.dependencyGroup) || nonEmpty(match?.dependencyGroup);
            return {
                ...dep,
                description: nonEmpty(dep.description) || nonEmpty(match?.description) || undefined,
                ...(dependencyGroup ? { dependencyGroup } : {}),
            };
        });

    if (isOptionalNameOrDocumentPair(deps)) {
        deps = deps.map((dep) => ({
            ...dep,
            dependencyGroup: dep.field === 'fullName' ? '1' : '2',
        }));
    } else if (isCountryOrWorldPepFeature(feature)) {
        deps = deps.map((dep) => {
            if (nonEmpty(dep.dependencyGroup)) return dep;
            if (dep.field === 'documentNumber') return { ...dep, dependencyGroup: '1' };
            if (dep.field === 'fullName') return { ...dep, dependencyGroup: '2' };
            return dep;
        });
    }
    return deps;
};

const descriptionForField = (field: string, deps: DependencyRow[]): string =>
    nonEmpty(deps.find((dep) => dep.field === field)?.description);

const mergeParamRows = (
    serverRows: EndpointDocParamRow[],
    catalogRows: EndpointDocParamRow[],
    deps: DependencyRow[]
): EndpointDocParamRow[] => {
    const catalogByField = new Map(catalogRows.map((row) => [row.field, row]));
    const source = serverRows.length ? serverRows : catalogRows;
    return source.map((row) => ({
        field: row.field,
        description:
            nonEmpty(row.description) ||
            nonEmpty(catalogByField.get(row.field)?.description) ||
            descriptionForField(row.field, deps),
    }));
};

const mergeDocLang = (
    server: EndpointDocLang | undefined,
    catalog: EndpointDocLang | undefined,
    deps: DependencyRow[]
): EndpointDocLang | undefined => {
    if (!server && catalog) {
        const params = coerceEndpointDocParamRows(catalog.params);
        return params.length ? { ...catalog, params } : catalog;
    }
    if (!server) return undefined;
    const params = mergeParamRows(
        coerceEndpointDocParamRows(server.params),
        coerceEndpointDocParamRows(catalog?.params),
        deps
    );
    if (!catalog) {
        return params.length ? { ...server, params } : server;
    }
    return {
        title: nonEmpty(server.title) || catalog.title,
        description: nonEmpty(server.description) || catalog.description,
        overview: nonEmpty(server.overview) || catalog.overview,
        headers: server.headers?.length ? server.headers : catalog.headers,
        ...(params.length ? { params } : {}),
        requestExamples: server.requestExamples?.length
            ? server.requestExamples
            : catalog.requestExamples,
        responses: server.responses?.length ? server.responses : catalog.responses,
        notes: server.notes?.length ? server.notes : catalog.notes,
    };
};

const applyVerifiedPostBody = (
    feature: Record<string, unknown>,
    deps: DependencyRow[],
    docs: EndpointDocs | undefined
): { deps: DependencyRow[]; docs: EndpointDocs | undefined } => {
    const verified = verifiedPostBodyFor(feature);
    if (!verified) return { deps, docs };
    const nextDeps: DependencyRow[] = verified.map((field: VerifiedPostBodyField) => ({
        field: field.field,
        type: 'String',
        required: field.required,
        description: field.description,
    }));
    const nextDocs: EndpointDocs = { ...(docs ?? {}) };
    for (const locale of DOC_LOCALES) {
        const block = nextDocs[locale] ?? {};
        nextDocs[locale] = {
            ...block,
            params: verified.map((field) => ({
                field: field.field,
                description:
                    verifiedPostBodyDescription(feature, field.field, locale) || field.description,
            })),
        };
    }
    return { deps: nextDeps, docs: nextDocs };
};

const mergeDocs = (
    serverDocs: unknown,
    catalogDocs: EndpointDocs | undefined,
    deps: DependencyRow[]
): EndpointDocs | undefined => {
    const server = isRecord(serverDocs) ? (serverDocs as EndpointDocs) : undefined;
    if (!server && !catalogDocs) return undefined;
    const locales = new Set<string>([
        ...DOC_LOCALES,
        ...Object.keys(server ?? {}),
        ...Object.keys(catalogDocs ?? {}),
    ]);
    const merged: EndpointDocs = {};
    for (const locale of locales) {
        const key = locale as EndpointDocLocale;
        const block = mergeDocLang(server?.[key], catalogDocs?.[key], deps);
        if (block && (block.title || block.description || block.overview || block.params?.length)) {
            merged[key] = block;
        }
    }
    return Object.keys(merged).length ? merged : undefined;
};

const registryExampleQuery = (deps: DependencyRow[]): string => {
    const parts = ['documentNumber=12345678'];
    const documentType = deps.find((dep) => dep.field === 'documentType');
    const sample =
        documentType && typeof documentType.default === 'string' ? documentType.default.trim() : '';
    if (sample) parts.push(`documentType=${encodeURIComponent(sample)}`);
    return parts.join('&');
};

/**
 * Catalog samples for these registries omit the required `documentNumber` query.
 * Leave examples that already carry a query string untouched.
 */
const withRegistryExampleQueries = (
    docs: EndpointDocs | undefined,
    feature: Record<string, unknown>,
    deps: DependencyRow[]
): EndpointDocs | undefined => {
    if (!docs || !inferRegistryBaseCategory(feature)) return docs;
    if (!deps.some((dep) => dep.field === 'documentNumber')) return docs;
    const query = registryExampleQuery(deps);
    const next: EndpointDocs = {};
    for (const [locale, block] of Object.entries(docs)) {
        if (!block) continue;
        const key = locale as EndpointDocLocale;
        next[key] = {
            ...block,
            requestExamples: block.requestExamples?.map((example) => ({
                ...example,
                code:
                    example.code.includes('?') || example.code.includes('documentNumber=')
                        ? example.code
                        : example.code.replace(
                              /https?:\/\/[^\s"'\\?]+/g,
                              (url) => `${url}?${query}`
                          ),
            })),
        };
    }
    return next;
};

/**
 * Fills catalog gaps on a live AppFeature before Postman builds the sidebar row.
 * Production watchlist, PEP, company, and citizen records omit `baseCategory`
 * and store `docs.<locale>.params` as field-name strings. Staff-only `force` is dropped.
 */
export const enrichAppFeatureRecord = <T extends Record<string, unknown>>(
    feature: T,
    catalog: Map<string, StaticCatalogEntry> = staticCatalogByCode()
): T => {
    if (!isRecord(feature)) return feature;
    const code = nonEmpty(feature.code);
    const staticEntry = code ? catalog.get(code) : undefined;
    const enrichedDeps = enrichDependencies(
        feature,
        asDependencyList(
            feature.dependencies ??
                (feature.input as { dependencies?: unknown } | undefined)?.dependencies
        ),
        staticEntry
    );
    const verified = applyVerifiedPostBody(
        feature,
        enrichedDeps,
        mergeDocs(feature.docs, staticEntry?.docs, enrichedDeps)
    );
    const deps = verified.deps;
    const docs = withRegistryExampleQueries(verified.docs, feature, deps);
    const baseCategory = resolveBaseCategory(feature, staticEntry, deps);
    const nameES = nonEmpty(feature.nameES) || nonEmpty(staticEntry?.nameES);

    return {
        ...feature,
        ...(baseCategory ? { baseCategory } : {}),
        ...(nameES ? { nameES } : {}),
        ...(deps.length ? { dependencies: deps } : {}),
        ...(docs ? { docs } : {}),
    };
};
