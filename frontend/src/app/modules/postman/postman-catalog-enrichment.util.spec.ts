import { describe, expect, it } from 'vitest';
import { enrichAppFeatureRecord } from './postman-catalog-enrichment.util';
import postmanEndpointsIo from './postman-endpoints-io.json';
import { getPostmanRequestValidationIssues, getPostmanXorParamLayout } from './postman-request-validation';
import { postmanCountryFlagUi, stripCountryPrefixFromTitle } from './postman-country.util';
import { ApiEndpoint, EndpointDocParamRow } from './postman.types';

type CatalogEndpoint = {
    code: string;
    url: string;
    country: string;
    dependencies?: { field: string }[];
};

const catalogEndpoints = (postmanEndpointsIo as { endpoints: CatalogEndpoint[] }).endpoints;

const flatWatchlistEndpoints = catalogEndpoints.filter((entry) => {
    const fields = (entry.dependencies ?? [])
        .map((dep) => dep.field)
        .filter((field) => field !== 'force')
        .sort()
        .join(',');
    return (
        entry.code.startsWith('world_api_') &&
        /^v2\/[a-z0-9-]+$/.test(entry.url.replace(/^\/+/, '')) &&
        fields === 'documentNumber,fullName'
    );
});

const thinProductionRecord = (entry: CatalogEndpoint) => ({
    code: entry.code,
    name: 'Watchlist',
    url: entry.url,
    method: 'GET',
    group: 'apiRequest',
    country: entry.country,
    description: 'Screen entities and individuals against this list.',
    isAvailable: true,
    dependencies: [
        {
            field: 'fullName',
            type: 'String',
            required: false,
            description: 'Full legal name of the entity or individual to screen',
        },
        {
            field: 'documentNumber',
            type: 'String',
            required: false,
            description: 'Identification or corporate registration number to screen',
        },
        { field: 'force', type: 'Boolean', required: false, description: 'Staff-only refresh' },
    ],
    docs: {
        en: {
            title: 'EN title',
            description: 'Real-time official verification.',
            params: ['fullName', 'documentNumber', 'force'],
        },
        es: {
            title: 'ES title',
            description: 'Verificación oficial en tiempo real.',
            params: ['fullName', 'documentNumber'],
        },
    },
});

describe('enrichAppFeatureRecord', () => {
    it('finds all 101 flat global, US, and European Union watchlists in the Postman catalog', () => {
        expect(flatWatchlistEndpoints).toHaveLength(101);
        expect(new Set(flatWatchlistEndpoints.map((entry) => entry.country))).toEqual(
            new Set(['Global', 'United States', 'European Union'])
        );
    });

    it.each([
        'world_api_anti_kleptocracy_visa',
        'world_api_argentina_repet',
        'world_api_eu_council_sanctions',
    ])('repairs a thin production record for %s', (code) => {
        const entry = flatWatchlistEndpoints.find((item) => item.code === code);
        expect(entry).toBeTruthy();
        const enriched = enrichAppFeatureRecord(thinProductionRecord(entry as CatalogEndpoint));

        expect(enriched.baseCategory).toBe('background_check');
        expect(enriched.country).toBe(entry?.country);
        expect(enriched.dependencies?.map((dep) => dep.field)).toEqual([
            'fullName',
            'documentNumber',
        ]);
        expect(
            enriched.dependencies?.find((dep) => dep.field === 'fullName')?.dependencyGroup
        ).toBe('1');
        expect(
            enriched.dependencies?.find((dep) => dep.field === 'documentNumber')?.dependencyGroup
        ).toBe('2');

        const englishParams = enriched.docs?.en?.params as EndpointDocParamRow[];
        expect(enriched.docs?.en?.title).toBe('EN title');
        expect(enriched.docs?.en?.overview?.trim()).toBeTruthy();
        expect(englishParams.map((row) => row.field)).toEqual(['fullName', 'documentNumber']);
        expect(englishParams.every((row) => row.description.trim())).toBe(true);
        expect(enriched.docs?.es?.title).toBe('ES title');
        expect(enriched.docs?.fr?.overview || enriched.docs?.fr?.description).toBeTruthy();
        expect(enriched.docs?.zh?.title || enriched.docs?.zh?.overview).toBeTruthy();

        const layout = getPostmanXorParamLayout({
            id: code,
            code,
            label: 'Watchlist',
            method: 'GET',
            url: String(enriched.url),
            params: (enriched.dependencies ?? []).map((dep) => ({
                key: dep.field,
                value: '',
                type: 'String',
                required: false,
                dependencyGroup: dep.dependencyGroup,
            })),
            dependencies: enriched.dependencies,
        } as ApiEndpoint);
        expect(layout.kind).toBe('xor');
        if (layout.kind === 'xor') {
            expect(layout.nameRows.map((row) => row.param.key)).toEqual(['fullName']);
            expect(layout.documentRows.map((row) => row.param.key)).toEqual(['documentNumber']);
        }
    });

    it('keeps an unrelated feature category when the static catalog has no match', () => {
        const enriched = enrichAppFeatureRecord(
            {
                code: 'colombia_api_identity_lookup',
                url: 'v2/co/cedula',
                group: 'apiRequest',
                baseCategory: 'identity',
                dependencies: [{ field: 'documentNumber', required: true }],
            },
            new Map()
        );
        expect(enriched.baseCategory).toBe('identity');
        expect(enriched.dependencies?.[0]?.dependencyGroup).toBeUndefined();
    });
});

const COMPANY_CITIZEN_CODES = [
    'australia_api_company_lookup',
    'australia_api_identity_lookup',
    'belgium_api_company_lookup',
    'czechia_api_company_lookup',
    'czechia_api_identity_lookup',
    'denmark_api_company_lookup',
    'denmark_api_identity_lookup',
    'estonia_api_company_lookup',
    'estonia_api_identity_lookup',
    'finland_api_company_lookup',
    'france_api_identity_lookup',
    'israel_api_company_lookup',
    'japan_api_company_lookup',
    'latvia_api_company_lookup',
    'new_zealand_api_company_lookup',
    'norway_api_company_lookup',
    'norway_api_identity_lookup',
    'poland_api_company_lookup',
    'poland_api_identity_lookup',
    'portugal_api_company_lookup',
    'puerto_rico_api_company_lookup',
    'republica_dominicana_api_company_lookup',
    'romania_api_company_lookup',
    'romania_api_identity_lookup',
    'singapore_api_company_lookup',
    'slovakia_api_company_lookup',
    'slovakia_api_identity_lookup',
    'switzerland_api_company_lookup',
    'taiwan_api_company_lookup',
    'trinidad_and_tobago_api_company_lookup',
    'uruguay_api_company_lookup',
    'us_api_npi_identity_lookup',
    'venezuela_api_company_lookup',
] as const;

const DOC_LOCALES = ['en', 'es', 'fr', 'pt', 'ko', 'ja', 'zh'] as const;

type RegistryCatalogEntry = CatalogEndpoint & {
    baseCategory?: string;
    country: string;
    name?: string;
    nameES?: string;
    dependencies?: { field: string; required?: boolean; description?: string; default?: string }[];
};

const registryCatalog = catalogEndpoints.filter((entry) =>
    (COMPANY_CITIZEN_CODES as readonly string[]).includes(entry.code)
) as RegistryCatalogEntry[];

const thinRegistryRecord = (entry: RegistryCatalogEntry) => ({
    code: entry.code,
    name: entry.name || 'Registry lookup',
    url: entry.url,
    method: 'GET',
    group: 'apiRequest',
    country: entry.country,
    description: 'Live registry lookup.',
    isAvailable: true,
    dependencies: [
        ...(entry.dependencies ?? []).filter((dep) => dep.field !== 'force'),
        { field: 'force', type: 'Boolean', required: false, description: 'Staff-only refresh' },
    ],
    docs: {
        en: {
            title: 'EN title',
            description: 'Real-time official verification.',
            params: ['documentNumber', 'documentType', 'force'],
        },
        es: {
            title: 'ES title',
            description: 'Verificación oficial en tiempo real.',
            params: ['documentNumber', 'documentType'],
        },
    },
});

const asEndpoint = (
    code: string,
    enriched: ReturnType<typeof enrichAppFeatureRecord>,
    values: Record<string, string> = {}
): ApiEndpoint =>
    ({
        id: code,
        code,
        label: 'Registry',
        method: 'GET',
        url: String(enriched.url),
        country: String(enriched.country),
        category: String(enriched.baseCategory || '').toUpperCase(),
        params: (enriched.dependencies ?? []).map((dep) => ({
            key: dep.field,
            value: values[dep.field] ?? '',
            type: 'String',
            required: dep.required === true,
            description: dep.description,
        })),
        dependencies: enriched.dependencies,
    }) as ApiEndpoint;

describe('company and citizen registry enrichment', () => {
    it('finds all 33 company and citizen endpoints in the Postman catalog', () => {
        expect(registryCatalog).toHaveLength(33);
        expect(registryCatalog.filter((entry) => entry.url.endsWith('/company'))).toHaveLength(23);
        expect(registryCatalog.filter((entry) => entry.url.endsWith('/citizen'))).toHaveLength(10);
    });

    it.each(COMPANY_CITIZEN_CODES)(
        'repairs a thin production record for %s without the static catalog',
        (code) => {
            const entry = registryCatalog.find((item) => item.code === code);
            expect(entry).toBeTruthy();
            const enriched = enrichAppFeatureRecord(thinRegistryRecord(entry as RegistryCatalogEntry), new Map());
            const expectedCategory = String(entry?.url).endsWith('/citizen') ? 'identity' : 'business';

            expect(enriched.baseCategory).toBe(expectedCategory);
            expect(enriched.dependencies?.map((dep) => dep.field)).not.toContain('force');
            expect(enriched.dependencies?.find((dep) => dep.field === 'documentNumber')?.required).toBe(
                true
            );
            expect(
                enriched.dependencies?.find((dep) => dep.field === 'documentType')?.dependencyGroup
            ).toBeUndefined();

            const englishParams = enriched.docs?.en?.params as EndpointDocParamRow[];
            expect(englishParams.map((row) => row.field)).toEqual(['documentNumber', 'documentType']);
            expect(englishParams.every((row) => row.description.trim())).toBe(true);

            const empty = asEndpoint(code, enriched);
            expect(
                getPostmanRequestValidationIssues(empty, null).some(
                    (issue) => issue.field === 'documentNumber'
                )
            ).toBe(true);

            const filled = asEndpoint(code, enriched, { documentNumber: '12345678' });
            expect(getPostmanRequestValidationIssues(filled, null)).toEqual([]);
            expect(postmanCountryFlagUi(String(entry?.country)).k).toBe('img');
        }
    );

    it.each(['australia_api_company_lookup', 'france_api_identity_lookup', 'us_api_npi_identity_lookup'])(
        'merges full About docs for %s from the static catalog',
        (code) => {
            const entry = registryCatalog.find((item) => item.code === code);
            const enriched = enrichAppFeatureRecord(thinRegistryRecord(entry as RegistryCatalogEntry));

            for (const locale of DOC_LOCALES) {
                const block = enriched.docs?.[locale];
                expect(block?.title?.trim(), locale).toBeTruthy();
                expect(block?.overview?.trim() || block?.description?.trim(), locale).toBeTruthy();
                const params = block?.params as EndpointDocParamRow[];
                expect(params?.every((row) => row.field && row.description.trim()), locale).toBe(true);
                expect(block?.requestExamples?.length, locale).toBeGreaterThan(0);
                expect(block?.responses?.length, locale).toBeGreaterThan(0);
                expect(block?.requestExamples?.[0]?.code, locale).toContain('documentNumber=12345678');
                for (const response of block?.responses ?? []) {
                    expect(() => JSON.parse(response.body)).not.toThrow();
                }
            }

            expect(stripCountryPrefixFromTitle(enriched.docs?.fr?.title, 'Australia')).not.toMatch(
                /^undefined/i
            );
        }
    );
});
