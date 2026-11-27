import { describe, expect, it } from 'vitest';
import { enrichAppFeatureRecord } from './postman-catalog-enrichment.util';
import postmanEndpointsIo from './postman-endpoints-io.json';
import { getPostmanXorParamLayout } from './postman-request-validation';
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
