import { describe, expect, it } from 'vitest';
import featuresEn from '../../../../public/i18n/features-en.json';
import featuresEs from '../../../../public/i18n/features-es.json';
import featuresFr from '../../../../public/i18n/features-fr.json';
import featuresJa from '../../../../public/i18n/features-ja.json';
import featuresKo from '../../../../public/i18n/features-ko.json';
import featuresPt from '../../../../public/i18n/features-pt.json';
import featuresZh from '../../../../public/i18n/features-zh.json';
import {
    canonicalPostmanCountryName,
    countryNameToIso,
    postmanCountryFlagUi,
} from './postman-country.util';
import {
    isCountryOrWorldPepEndpoint,
    prepareLiveCatalogFeature,
    staticCatalogEntry,
} from './postman-live-catalog.util';
import {
    getPostmanRequestValidationIssues,
    getPostmanXorParamLayout,
} from './postman-request-validation';
import { ApiEndpoint, EndpointDocLocale } from './postman.types';
import postmanEndpointsIo from './postman-endpoints-io.json';

const PEP_CODES = [
    'be_api_pep',
    'bo_api_pep',
    'by_api_pep',
    'ca_api_pep',
    'cr_api_pep',
    'cu_api_pep',
    'de_api_pep',
    'ec_api_pep',
    'ee_api_pep',
    'es_api_pep',
    'fi_api_pep',
    'fr_api_pep',
    'gt_api_pep',
    'hn_api_pep',
    'is_api_pep',
    'lt_api_pep',
    'lv_api_pep',
    'mx_api_pep',
    'ni_api_pep',
    'nl_api_pep',
    'no_api_pep',
    'pl_api_pep',
    'py_api_pep',
    'se_api_pep',
    'sv_api_pep',
    'uy_api_pep',
    've_api_pep',
    'world_api_pep',
] as const;

const LOCALES: EndpointDocLocale[] = ['en', 'es', 'fr', 'pt', 'ko', 'ja', 'zh'];

const staticEndpoints = (): any[] =>
    (postmanEndpointsIo as any).endpoints ?? postmanEndpointsIo;

/**
 * Shape returned by production `appfeatures` for these 28 screens:
 * no baseCategory, flat dependencies, and string `docs.params`.
 */
const toLiveProductionFeature = (entry: any) => ({
    _id: entry._id,
    code: entry.code,
    name: entry.name,
    url: entry.url,
    method: 'GET',
    group: 'apiRequest',
    country: entry.country,
    price: entry.price,
    description: entry.description,
    isAvailable: true,
    dependencies: [
        ...(entry.dependencies || []).map((dep: any) => ({
            field: dep.field,
            type: dep.type,
            required: false,
            description: dep.description,
            default: dep.default ?? null,
        })),
        {
            field: 'force',
            type: 'Boolean',
            required: false,
            description: 'Staff-only cache bypass',
        },
    ],
    docs: {
        en: {
            title: entry.docs?.en?.title || entry.name,
            description: entry.docs?.en?.description || entry.description,
            params: ['documentNumber', 'fullName', 'documentType', 'includeFormer', 'force'],
        },
        es: {
            title: entry.docs?.es?.title || entry.nameES,
            description: entry.docs?.es?.description || entry.descriptionES,
            params: ['documentNumber', 'fullName', 'documentType', 'includeFormer', 'force'],
        },
    },
});

const toEndpoint = (live: ReturnType<typeof toLiveProductionFeature>): ApiEndpoint => {
    const prepared = prepareLiveCatalogFeature(live);
    const country = canonicalPostmanCountryName(live.country) || live.country;
    const params = prepared.dependencies.map((dep) => ({
        key: dep.field,
        value: dep.default == null ? '' : String(dep.default),
        type: dep.type || 'String',
        required: !!dep.required,
        description: dep.description,
        ...(dep.dependencyGroup ? { dependencyGroup: dep.dependencyGroup } : {}),
    }));
    return {
        id: live.code,
        code: live.code,
        label: live.name,
        ...(prepared.nameES ? { nameES: prepared.nameES } : {}),
        method: 'GET',
        url: `https://api.verifik.co/${live.url}`,
        country,
        category: prepared.category.trim().toUpperCase().replace(/[\s-]+/g, '_'),
        description: live.description,
        dependencies: prepared.dependencies,
        params,
        docs: prepared.docs,
    };
};

describe('live production PEP catalog', () => {
    const entries = PEP_CODES.map((code) => {
        const entry = staticEndpoints().find((row: any) => row.code === code);
        return { code, entry };
    });

    it('covers all 28 politically exposed person endpoints', () => {
        expect(PEP_CODES).toHaveLength(28);
        expect(PEP_CODES.filter((code) => code !== 'world_api_pep')).toHaveLength(27);
        for (const { code, entry } of entries) {
            expect(entry, code).toBeDefined();
            expect(isCountryOrWorldPepEndpoint({ code, url: entry.url })).toBe(true);
            if (code === 'world_api_pep') {
                expect(entry.url).toBe('v2/world/pep');
            } else {
                expect(entry.url).toMatch(/^v2\/[a-z]{2}\/politically-exposed-persons$/);
            }
        }
        expect(isCountryOrWorldPepEndpoint({ code: 'colombia_pep_lookup', url: 'v2/co/pep' })).toBe(
            false
        );
        expect(
            isCountryOrWorldPepEndpoint({
                code: 'colombia_api_identity_pep_foreigner_id',
                url: 'v2/co/identity/pep-foreigner',
            })
        ).toBe(false);
    });

    it('places every live PEP record in Background Check with country or world flags', () => {
        for (const { code, entry } of entries) {
            const endpoint = toEndpoint(toLiveProductionFeature(entry));
            expect(endpoint.category, code).toBe('BACKGROUND_CHECK');
            expect(endpoint.dependencies?.some((dep) => dep.field === 'force'), code).toBe(false);
            expect(endpoint.params?.some((param) => param.key === 'force'), code).toBe(false);

            const document = endpoint.dependencies?.find((dep) => dep.field === 'documentNumber');
            const name = endpoint.dependencies?.find((dep) => dep.field === 'fullName');
            const documentType = endpoint.dependencies?.find((dep) => dep.field === 'documentType');
            expect(document?.dependencyGroup, code).toBe('1');
            expect(name?.dependencyGroup, code).toBe('2');
            expect(documentType?.dependencyGroup, code).toBeUndefined();

            const flag = postmanCountryFlagUi(endpoint.country || '');
            const iso = countryNameToIso(endpoint.country);
            if (code === 'world_api_pep') {
                expect(endpoint.country).toBe('world');
                expect(iso).toBe('world');
                expect(flag.k).toBe('globe');
            } else {
                expect(iso, code).toMatch(/^[a-z]{2}$/);
                expect(flag.k, code).toBe('img');
                if (flag.k === 'img') {
                    expect(flag.src).toBe(`https://flagcdn.com/w40/${iso}.png`);
                }
            }
        }
    });

    it('requires documentNumber or fullName and accepts either one without force', () => {
        for (const { entry } of entries) {
            const endpoint = toEndpoint(toLiveProductionFeature(entry));
            const layout = getPostmanXorParamLayout(endpoint);
            expect(layout.kind, endpoint.code).toBe('xor');
            if (layout.kind !== 'xor') continue;
            expect(layout.nameRows.map((row) => row.param.key)).toContain('fullName');
            expect(layout.documentRows.map((row) => row.param.key)).toContain('documentNumber');
            expect(layout.otherRows.map((row) => row.param.key)).toEqual(
                expect.arrayContaining(['documentType', 'includeFormer'])
            );
            expect(layout.otherRows.map((row) => row.param.key)).not.toContain('force');

            const empty = getPostmanRequestValidationIssues(endpoint, null);
            expect(empty.map((issue) => issue.translationKey), endpoint.code).toContain(
                'createBatch.validationXorNeitherMode'
            );

            const byName = {
                ...endpoint,
                params: endpoint.params?.map((param) =>
                    param.key === 'fullName' ? { ...param, value: 'TEST PEP OFFICER' } : param
                ),
            };
            expect(getPostmanRequestValidationIssues(byName, null), endpoint.code).toEqual([]);

            const byDocument = {
                ...endpoint,
                params: endpoint.params?.map((param) =>
                    param.key === 'documentNumber' ? { ...param, value: '10000001' } : param
                ),
            };
            expect(getPostmanRequestValidationIssues(byDocument, null), endpoint.code).toEqual([]);
        }
    });

    it('renders full About docs for all 7 locales from thin live string params', () => {
        for (const { entry } of entries) {
            const prepared = prepareLiveCatalogFeature(toLiveProductionFeature(entry));
            expect(prepared.nameES, entry.code).toBeTruthy();
            for (const locale of LOCALES) {
                const doc = prepared.docs?.[locale];
                expect(doc?.overview?.length, `${entry.code} ${locale}`).toBeGreaterThan(10);
                expect(doc?.headers?.length, `${entry.code} ${locale}`).toBeGreaterThan(0);
                expect(doc?.requestExamples?.length, `${entry.code} ${locale}`).toBeGreaterThan(0);
                expect(doc?.responses?.length, `${entry.code} ${locale}`).toBeGreaterThan(0);
                const params = doc?.params ?? [];
                expect(params.length, `${entry.code} ${locale}`).toBeGreaterThan(0);
                for (const row of params) {
                    expect(typeof row).toBe('object');
                    expect(row.field, `${entry.code} ${locale}`).toBeTruthy();
                    expect(row.field, `${entry.code} ${locale}`).not.toBe('force');
                }
                expect(params.some((row) => row.field === 'documentNumber')).toBe(true);
                expect(params.some((row) => row.field === 'fullName')).toBe(true);
                for (const response of doc?.responses ?? []) {
                    expect(() => JSON.parse(response.body), `${entry.code} ${locale}`).not.toThrow();
                }
            }
        }
    });

    it('keeps a real live baseCategory ahead of the static catalog', () => {
        const entry = staticCatalogEntry('be_api_pep');
        const prepared = prepareLiveCatalogFeature(
            {
                ...toLiveProductionFeature(staticEndpoints().find((row: any) => row.code === 'be_api_pep')),
                baseCategory: 'identity',
            },
            entry
        );
        expect(prepared.category).toBe('identity');
    });

    it('has a non-empty catalog title in all 7 feature locales', () => {
        const catalogs: Record<EndpointDocLocale, { appFeatures: Record<string, { title?: string; description?: string }> }> = {
            en: featuresEn,
            es: featuresEs,
            fr: featuresFr,
            pt: featuresPt,
            ko: featuresKo,
            ja: featuresJa,
            zh: featuresZh,
        };
        for (const locale of LOCALES) {
            for (const code of PEP_CODES) {
                const row = catalogs[locale].appFeatures[code];
                expect(row?.title?.trim().length, `${locale} ${code}`).toBeGreaterThan(3);
                expect(row?.description?.trim().length, `${locale} ${code}`).toBeGreaterThan(10);
                expect(row?.title?.toLowerCase(), `${locale} ${code}`).not.toContain('undefined');
            }
        }
    });
});
