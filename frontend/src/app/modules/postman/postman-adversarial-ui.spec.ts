import { describe, expect, it } from 'vitest';
import {
    sanitizePostmanCopyText,
    resolvePostmanEndpointCopy,
    resolveAboutOverview,
    resolveAboutParamsColumnVisibility,
    overviewLeadParagraph,
    PostmanCopyLocale,
} from './postman-endpoint-copy.util';
import {
    stripCountryPrefixFromTitle,
    countryNameToIso,
    canonicalPostmanCountryName,
    postmanCountryFlagUi,
    formatPostmanCountryDisplayName,
    getCountryTitlePrefixVariants,
    areSamePostmanCountry,
} from './postman-country.util';
import {
    ensurePostmanIncludeCostParam,
    removePostmanIncludeCostParam,
    syncPostmanIncludeCostParam,
    getPostmanIncludeCostValue,
    isPostmanIncludeCostEnabled,
    resolvePostmanIncludeCostForSend,
    POSTMAN_INCLUDE_COST_KEY,
} from './postman-include-cost.util';
import {
    mergeParamsFromDocs,
} from './postman-docs-params.util';
import {
    getPostmanXorGroupMetadata,
    getPostmanXorParamLayout,
} from './postman-request-validation';
import { ApiEndpoint } from './postman.types';
import postmanEndpointsIo from './postman-endpoints-io.json';

const FORBIDDEN_ENTITIES = [
    /\bsimo\b/i,
    /\bcnsc\b/i,
    /\brnec\b/i,
    /registradur[ií]a/i,
    /\bolimpia\b/i,
    /\bsisben\b/i,
    /\bsimit\b/i,
    /procuradur[ií]a/i,
];

const INTERNATIONAL_PEP_CODES = [
    'be_api_pep', 'de_api_pep', 'by_api_pep', 'bo_api_pep',
    'ca_api_pep', 'cr_api_pep', 'cu_api_pep', 'ec_api_pep',
    'sv_api_pep', 'es_api_pep', 'ee_api_pep', 'fi_api_pep',
    'fr_api_pep', 'gt_api_pep', 'hn_api_pep', 'is_api_pep',
    'lv_api_pep', 'lt_api_pep', 'mx_api_pep', 'ni_api_pep',
    'no_api_pep', 'nl_api_pep', 'py_api_pep', 'pl_api_pep',
    'se_api_pep', 'uy_api_pep', 've_api_pep', 'world_api_pep',
];

const LOCALES: PostmanCopyLocale[] = ['en', 'es', 'fr', 'pt', 'ko', 'ja', 'zh'];

describe('Empirical Adversarial Stress-Tests: Postman UI, Titles & Parameters', () => {

    describe('1. Title Resolution & Country Resolution Adversarial Stress-Tests', () => {
        describe('sanitizePostmanCopyText edge and malicious inputs', () => {
            it('never returns "undefined" for undefined strings or prefix artifacts', () => {
                const pathologicalInputs = [
                    'undefined',
                    'UNDEFINED',
                    'Undefined',
                    'undefined - Politically Exposed Persons (PEP)',
                    'undefined : PEP Check',
                    'undefined   –   Sanctions Check',
                    'undefined — Watchlist Screening',
                    'undefined      Company Lookup',
                    '   undefined   ',
                    null,
                    undefined,
                    '',
                    '   ',
                ];

                for (const input of pathologicalInputs) {
                    const sanitized = sanitizePostmanCopyText(input);
                    expect(sanitized.toLowerCase()).not.toBe('undefined');
                    expect(sanitized.toLowerCase().startsWith('undefined')).toBe(false);
                    expect(sanitized.includes('undefined -')).toBe(false);
                }
            });

            it('strips leading flag glyphs, JSON unicode escapes, and converts snake_case', () => {
                expect(sanitizePostmanCopyText('\\U0001F1E7\\U0001F1EA Belgium PEP')).toBe('Belgium PEP');
                expect(sanitizePostmanCopyText('🇧🇪 Belgium PEP Screening')).toBe('Belgium PEP Screening');
                expect(sanitizePostmanCopyText('be_api_pep')).toBe('Be Api Pep');
                expect(sanitizePostmanCopyText('  colombia_api_pep_screening  ')).toBe('Colombia Api Pep Screening');
            });
        });

        describe('stripCountryPrefixFromTitle with multi-lingual and Asian prefixes', () => {
            it('strips Belgium prefixes in all 7 locales including Asian variants', () => {
                const cases: [string, string][] = [
                    ['Belgium - Politically Exposed Persons (PEP)', 'Politically Exposed Persons (PEP)'],
                    ['Bélgica - Personas Expuestas Políticamente (PEP)', 'Personas Expuestas Políticamente (PEP)'],
                    ['Belgique - Personnes Politiquement Exposées (PEP)', 'Personnes Politiquement Exposées (PEP)'],
                    ['BE - PEP Screening', 'PEP Screening'],
                    ['ベルギー - 政治的に影響力のある人物', '政治的に影響力のある人物'],
                    ['벨기에 - 정치적으로 노출된 인물', '정치적으로 노출된 인물'],
                    ['比利时 - 政治公众人物', '政治公众人物'],
                ];

                for (const [input, expected] of cases) {
                    const stripped = stripCountryPrefixFromTitle(input, 'Belgium');
                    expect(stripped).toBe(expected);
                }
            });

            it('strips Brazil prefixes in all 7 locales including Asian variants', () => {
                const cases: [string, string][] = [
                    ['Brazil - PEP Screening', 'PEP Screening'],
                    ['Brasil - Consulta PEP', 'Consulta PEP'],
                    ['Brésil - Personnes Politiquement Exposées', 'Personnes Politiquement Exposées'],
                    ['BR - PEP Check', 'PEP Check'],
                    ['ブラジル - 政治的に影響力のある人物', '政治的に影響力のある人物'],
                    ['브라질 - 정치적으로 노출된 인물', '정치적으로 노출된 인物'.slice(0, -1) + '물'],
                    ['巴西 - 政治公众人物', '政治公众人物'],
                ];

                for (const [input, expected] of cases) {
                    const stripped = stripCountryPrefixFromTitle(input, 'Brazil');
                    expect(stripped).toBe(expected);
                }
            });

            it('strips "undefined - " defensively even if country is missing, null, or undefined', () => {
                expect(stripCountryPrefixFromTitle('undefined - Politically Exposed Persons (PEP)', null)).toBe(
                    'Politically Exposed Persons (PEP)'
                );
                expect(stripCountryPrefixFromTitle('undefined - Politically Exposed Persons (PEP)', undefined)).toBe(
                    'Politically Exposed Persons (PEP)'
                );
                expect(stripCountryPrefixFromTitle('undefined - Politically Exposed Persons (PEP)', '')).toBe(
                    'Politically Exposed Persons (PEP)'
                );
                expect(stripCountryPrefixFromTitle('undefined - Politically Exposed Persons (PEP)', 'undefined')).toBe(
                    'Politically Exposed Persons (PEP)'
                );
                expect(stripCountryPrefixFromTitle('UnDeFiNeD - Politically Exposed Persons (PEP)', 'Belgium')).toBe(
                    'Politically Exposed Persons (PEP)'
                );
                expect(stripCountryPrefixFromTitle('UNDEFINED: Sanctions Search', 'world')).toBe(
                    'Sanctions Search'
                );
                expect(stripCountryPrefixFromTitle('undefined — Watchlist Check', null)).toBe(
                    'Watchlist Check'
                );
                expect(stripCountryPrefixFromTitle('undefined   –   Background Check', '')).toBe(
                    'Background Check'
                );
            });

            it('resolves Asian and European localized Belgium names to canonical Belgium and ISO be', () => {
                const variants = ['Belgium', 'Bélgica', 'Belgique', 'BE', 'be', 'ベルギー', '벨기에', '比利时'];
                for (const variant of variants) {
                    expect(countryNameToIso(variant), `ISO for ${variant}`).toBe('be');
                    expect(canonicalPostmanCountryName(variant), `Canonical name for ${variant}`).toBe('Belgium');
                    const flag = postmanCountryFlagUi(variant);
                    expect(flag.k).toBe('img');
                    if (flag.k === 'img') {
                        expect(flag.src).toBe('https://flagcdn.com/w40/be.png');
                    }
                }
            });
        });

        describe('resolvePostmanEndpointCopy fuzzing and stress testing', () => {
            it('never produces "undefined" title, subtitle, or fullTitle under pathological inputs', () => {
                const pathologicalEndpoints: Partial<ApiEndpoint>[] = [
                    { code: 'be_api_pep', country: 'undefined', label: 'undefined - Politically Exposed Persons (PEP)' },
                    { code: 'be_api_pep', country: null as any, label: 'undefined - Politically Exposed Persons (PEP)' },
                    { code: 'be_api_pep', country: '', label: 'undefined - Politically Exposed Persons (PEP)' },
                    { code: 'be_api_pep', country: 'Belgium', label: 'undefined - Politically Exposed Persons (PEP)' },
                    { code: 'test_ep', country: 'undefined', label: 'undefined' },
                    { code: 'test_ep', country: null as any, label: null as any },
                    { code: '', country: '', label: '' },
                    { code: 'de_api_pep', country: 'Germany', label: 'Germany - PEP' },
                    { code: 'world_api_pep', country: 'Global', label: 'Global - International PEP' },
                ];

                for (const ep of pathologicalEndpoints) {
                    for (const loc of LOCALES) {
                        const copy = resolvePostmanEndpointCopy({
                            endpoint: ep as any,
                            catalogTitle: 'undefined - Catalog Title',
                            catalogDescription: 'undefined',
                            locale: loc,
                        });

                        expect(copy.title).not.toBe('undefined');
                        expect(copy.title.toLowerCase().startsWith('undefined')).toBe(false);
                        expect(copy.title.includes('undefined -')).toBe(false);
                        expect(copy.description).not.toBe('undefined');
                        expect(copy.description.toLowerCase().startsWith('undefined')).toBe(false);
                        expect(copy.fullTitle).not.toBe('undefined');
                        expect(copy.fullTitle.toLowerCase().startsWith('undefined')).toBe(false);
                    }
                }
            });

            it('resolves Belgium PEP (be_api_pep) with clean title across all 7 locales', () => {
                const endpoints = (postmanEndpointsIo as any).endpoints || postmanEndpointsIo;
                const bePep = endpoints.find((e: any) => e.code === 'be_api_pep');
                expect(bePep).toBeDefined();

                for (const loc of LOCALES) {
                    const copy = resolvePostmanEndpointCopy({
                        endpoint: bePep,
                        catalogTitle: '',
                        catalogDescription: '',
                        locale: loc,
                    });

                    expect(copy.title.length).toBeGreaterThan(0);
                    expect(copy.title.toLowerCase()).not.toContain('undefined');
                    expect(copy.description.length).toBeGreaterThan(0);
                    expect(copy.description.toLowerCase()).not.toContain('undefined');
                    expect(copy.fullTitle).not.toContain('undefined');
                }
            });
        });

        describe('Canonical country & country flag badge resolution for all 28 PEP jurisdictions', () => {
            it('resolves canonical country and flag badge for all 28 Category 7 International PEPs', () => {
                const endpoints = (postmanEndpointsIo as any).endpoints || postmanEndpointsIo;

                for (const code of INTERNATIONAL_PEP_CODES) {
                    const ep = endpoints.find((e: any) => e.code === code);
                    expect(ep, `Endpoint ${code} must exist in postman-endpoints-io.json`).toBeDefined();

                    const canonical = canonicalPostmanCountryName(ep.country);
                    expect(canonical, `Country for ${code} must be canonical`).toBeTruthy();
                    expect(canonical.toLowerCase()).not.toBe('undefined');

                    const flag = postmanCountryFlagUi(ep.country);
                    if (code === 'world_api_pep') {
                        expect(flag.k).toBe('globe');
                    } else {
                        expect(flag.k).toBe('img');
                        if (flag.k === 'img') {
                            expect(flag.src).toMatch(/^https:\/\/flagcdn\.com\/w40\/[a-z]{2}\.png$/);
                        }
                    }

                    // Also verify countryNameToIso
                    const iso = countryNameToIso(ep.country);
                    expect(iso, `ISO for ${ep.country} must be resolved`).toBeTruthy();
                    if (code === 'world_api_pep') {
                        expect(iso).toBe('world');
                    } else {
                        expect(iso?.length).toBe(2);
                    }
                }
            });

            it('formats country display name across locales without throwing or returning undefined', () => {
                for (const loc of LOCALES) {
                    const name = formatPostmanCountryDisplayName('Belgium', loc as string);
                    expect(name).toBeTruthy();
                    expect(name.toLowerCase()).not.toBe('undefined');
                }
            });
        });
    });

    describe('2. Parameter Table Rendering Stress-Tests', () => {
        it('verifies that endpoints with dependencies parse all declared query parameters alongside includeCost', () => {
            const endpoints = (postmanEndpointsIo as any).endpoints || postmanEndpointsIo;

            // Test Belgium PEP
            const bePep = endpoints.find((e: any) => e.code === 'be_api_pep');
            expect(bePep).toBeDefined();
            expect(bePep.input?.dependencies?.length).toBe(4);

            const deps = bePep.input.dependencies;
            const depFields = deps.map((d: any) => d.field);
            expect(depFields).toContain('documentNumber');
            expect(depFields).toContain('fullName');
            expect(depFields).toContain('documentType');
            expect(depFields).toContain('includeFormer');

            // Simulate postman.service.ts _paramsFromDependencies
            const paramRows = deps.map((d: any) => ({
                key: d.field,
                value: d.default ? String(d.default) : '',
                type: d.type || 'String',
                required: !!d.required,
                description: d.description || '',
                ...(d.dependencyGroup ? { dependencyGroup: String(d.dependencyGroup) } : {}),
            }));

            // Simulate ensurePostmanIncludeCostParam
            const endpointMock: ApiEndpoint = {
                id: bePep.code,
                code: bePep.code,
                label: bePep.name,
                method: bePep.method,
                url: bePep.url,
                country: bePep.country,
                category: bePep.category,
                params: paramRows,
                dependencies: deps,
            };

            const withCost = ensurePostmanIncludeCostParam(endpointMock);
            expect(withCost.params?.length).toBe(5);

            const paramKeys = withCost.params?.map((p) => p.key);
            expect(paramKeys).toEqual([
                'documentNumber',
                'fullName',
                'documentType',
                'includeFormer',
                POSTMAN_INCLUDE_COST_KEY,
            ]);

            // Ensure removing includeCost leaves all 4 original parameters intact
            const withoutCost = removePostmanIncludeCostParam(withCost);
            expect(withoutCost.params?.length).toBe(4);
            expect(withoutCost.params?.map((p) => p.key)).toEqual([
                'documentNumber',
                'fullName',
                'documentType',
                'includeFormer',
            ]);
        });

        it('verifies that XOR layout partitions name and document groups correctly', () => {
            const endpoints = (postmanEndpointsIo as any).endpoints || postmanEndpointsIo;
            const bePep = endpoints.find((e: any) => e.code === 'be_api_pep');

            const deps = bePep.input.dependencies;
            const paramRows = deps.map((d: any) => ({
                key: d.field,
                value: '',
                type: d.type || 'String',
                required: !!d.required,
                description: d.description || '',
                ...(d.dependencyGroup ? { dependencyGroup: String(d.dependencyGroup) } : {}),
            }));

            const endpointMock: ApiEndpoint = {
                id: bePep.code,
                code: bePep.code,
                label: bePep.name,
                method: bePep.method,
                url: bePep.url,
                country: bePep.country,
                category: bePep.category,
                params: paramRows,
                dependencies: deps,
            };

            const withCost = ensurePostmanIncludeCostParam(endpointMock);
            const layout = getPostmanXorParamLayout(withCost);

            expect(layout.kind).toBe('xor');
            if (layout.kind === 'xor') {
                const nameKeys = layout.nameRows.map((r) => r.param.key);
                const docKeys = layout.documentRows.map((r) => r.param.key);
                const otherKeys = layout.otherRows.map((r) => r.param.key);

                expect(nameKeys).toContain('fullName');
                expect(docKeys).toContain('documentNumber');
                expect(otherKeys).toContain('documentType');
                expect(otherKeys).toContain('includeFormer');
                expect(otherKeys).toContain(POSTMAN_INCLUDE_COST_KEY);
            }
        });

        it('verifies that KYB and business verification GET endpoints parse and expose specific parameters (documentType, documentNumber, companyName, province, business)', () => {
            const endpoints = (postmanEndpointsIo as any).endpoints || postmanEndpointsIo;

            const kybTestCases: { code: string; expectedFields: string[] }[] = [
                { code: 'colombia_api_rues', expectedFields: ['documentType', 'documentNumber'] },
                { code: 'chile_api_business_lookup', expectedFields: ['documentType', 'documentNumber'] },
                { code: 'brasil_api_company_lookup', expectedFields: ['documentType', 'documentNumber'] },
                { code: 'canada_api_company', expectedFields: ['province', 'business'] },
                { code: 'peru_api_company_lookup', expectedFields: ['documentType', 'documentNumber'] },
                { code: 'ecuador_api_company_lookup', expectedFields: ['documentType', 'documentNumber'] },
            ];

            for (const { code, expectedFields } of kybTestCases) {
                const ep = endpoints.find((e: any) => e.code === code);
                expect(ep, `Endpoint ${code} must exist`).toBeDefined();

                const deps = ep.input?.dependencies || ep.dependencies || [];
                const fields = deps.map((d: any) => d.field);

                for (const expectedField of expectedFields) {
                    expect(fields, `Endpoint ${code} must declare parameter ${expectedField}`).toContain(expectedField);
                }

                // Simulate postman.service.ts params mapping
                const paramRows = deps.map((d: any) => ({
                    key: d.field,
                    value: '',
                    type: d.type || 'String',
                    required: !!d.required,
                    description: d.description || '',
                }));

                const endpointMock: ApiEndpoint = {
                    id: ep.code,
                    code: ep.code,
                    label: ep.name,
                    method: ep.method,
                    url: ep.url,
                    country: ep.country,
                    category: ep.category,
                    params: paramRows,
                    dependencies: deps,
                };

                const withCost = ensurePostmanIncludeCostParam(endpointMock);
                const allKeys = withCost.params?.map((p) => p.key) || [];

                for (const expectedField of expectedFields) {
                    expect(allKeys, `Endpoint ${code} params must retain ${expectedField} alongside includeCost`).toContain(expectedField);
                }
                expect(allKeys).toContain(POSTMAN_INCLUDE_COST_KEY);
            }
        });

        it('verifies all 448 endpoints in postman-endpoints-io.json: GET endpoints with dependencies have non-cost parameters', () => {
            const endpoints = (postmanEndpointsIo as any).endpoints || postmanEndpointsIo;
            let getEndpointsWithDepsCount = 0;

            for (const ep of endpoints) {
                const deps = ep.input?.dependencies || ep.dependencies || [];
                if (ep.method === 'GET' && deps.length > 0) {
                    getEndpointsWithDepsCount++;
                    const nonSystemDeps = deps.filter((d: any) => d.field !== 'includeCost' && d.field !== 'force');
                    expect(
                        nonSystemDeps.length,
                        `Endpoint ${ep.code} has dependencies but none are client parameters`
                    ).toBeGreaterThan(0);
                }
            }

            expect(getEndpointsWithDepsCount).toBeGreaterThan(100);
        });
    });

    describe('3. Collapsible "About" Section Verification', () => {
        it('verifies that all 28 International PEP endpoints have populated docs in all 7 locales', () => {
            const endpoints = (postmanEndpointsIo as any).endpoints || postmanEndpointsIo;

            for (const code of INTERNATIONAL_PEP_CODES) {
                const ep = endpoints.find((e: any) => e.code === code);
                expect(ep.docs, `Endpoint ${code} must have docs`).toBeDefined();

                for (const loc of LOCALES) {
                    const docLang = ep.docs[loc];
                    expect(docLang, `Endpoint ${code} must have doc for locale ${loc}`).toBeDefined();
                    expect(docLang.overview?.length, `Endpoint ${code} must have overview for ${loc}`).toBeGreaterThan(10);
                    expect(docLang.headers?.length, `Endpoint ${code} must have headers for ${loc}`).toBeGreaterThan(0);
                    expect(docLang.params?.length, `Endpoint ${code} must have params for ${loc}`).toBeGreaterThan(0);
                    expect(docLang.responses?.length, `Endpoint ${code} must have responses for ${loc}`).toBeGreaterThan(0);
                    expect(docLang.requestExamples?.length, `Endpoint ${code} must have requestExamples for ${loc}`).toBeGreaterThan(0);

                    // Ensure responses parse as valid JSON
                    for (const resp of docLang.responses) {
                        expect(resp.status).toBeTruthy();
                        expect(() => JSON.parse(resp.body)).not.toThrow();
                    }
                }
            }
        });

        it('verifies resolveAboutOverview produces markdown-formatted overview or localized catalog description', () => {
            const endpoints = (postmanEndpointsIo as any).endpoints || postmanEndpointsIo;
            const bePep = endpoints.find((e: any) => e.code === 'be_api_pep');

            // en: direct docs overview
            const enOverview = resolveAboutOverview({
                endpoint: bePep,
                catalogDescription: '',
                locale: 'en',
            });
            expect(enOverview.length).toBeGreaterThan(50);
            expect(enOverview).toContain('Belgium Politically Exposed Persons');

            // es: direct docs overview (Spanish)
            const esOverview = resolveAboutOverview({
                endpoint: bePep,
                catalogDescription: '',
                locale: 'es',
            });
            expect(esOverview.length).toBeGreaterThan(50);
            expect(esOverview).toContain('API de Personas Expuestas Políticamente (PEP) de Bélgica');

            // fr with localized docs.fr.description
            const frOverview = resolveAboutOverview({
                endpoint: bePep,
                catalogDescription: '',
                locale: 'fr',
            });
            expect(frOverview.length).toBeGreaterThan(20);
            expect(frOverview).toContain('Vérification officielle en temps réel');
        });

        it('verifies resolveAboutParamsColumnVisibility accurately assesses table columns', () => {
            const result = resolveAboutParamsColumnVisibility([
                { allowed: ['A', 'B'], conditionalHint: 'documentType: CE', dateFormat: 'YYYY-MM-DD' },
                { allowed: null, conditionalHint: null, dateFormat: null },
            ]);

            expect(result).toEqual({
                showAllowedColumn: true,
                showConditionalColumn: true,
                showDateFormatColumn: true,
            });
        });

        it('verifies that Peru SETARE, Vehicle v3, and Driver License endpoints have complete 7-locale About docs and updated response schemas', () => {
            const endpoints = (postmanEndpointsIo as any).endpoints || postmanEndpointsIo;
            const peruCodes = [
                'peru_api_vehicle_setare_arequipa',
                'peru_api_vehicle_v3',
                'peru_api_driver_license_lookup',
            ];

            for (const code of peruCodes) {
                const ep = endpoints.find((e: any) => e.code === code);
                expect(ep, `Endpoint ${code} must exist in postman-endpoints-io.json`).toBeDefined();
                expect(ep.docs, `Endpoint ${code} must have docs`).toBeDefined();

                const deps = ep.input?.dependencies || ep.dependencies || [];
                expect(deps.some((d: any) => d.field === 'force')).toBe(false);

                for (const loc of LOCALES) {
                    const docLang = ep.docs[loc];
                    expect(docLang, `Endpoint ${code} must have doc for locale ${loc}`).toBeDefined();
                    expect(docLang.overview?.length, `Endpoint ${code} must have overview for ${loc}`).toBeGreaterThan(10);
                    expect(docLang.headers?.length, `Endpoint ${code} must have headers for ${loc}`).toBeGreaterThan(0);
                    expect(docLang.params?.length, `Endpoint ${code} must have params for ${loc}`).toBeGreaterThan(0);
                    expect(docLang.responses?.length, `Endpoint ${code} must have responses for ${loc}`).toBeGreaterThan(0);
                    expect(docLang.requestExamples?.length, `Endpoint ${code} must have requestExamples for ${loc}`).toBeGreaterThan(0);

                    for (const resp of docLang.responses) {
                        expect(resp.status).toBeTruthy();
                        expect(() => JSON.parse(resp.body)).not.toThrow();
                    }
                }

                expect(resolveAboutOverview({ endpoint: ep, catalogDescription: '', locale: 'en' }).length).toBeGreaterThan(20);
                expect(resolveAboutOverview({ endpoint: ep, catalogDescription: '', locale: 'es' }).length).toBeGreaterThan(20);
            }

            const v3Ok = JSON.parse(endpoints.find((e: any) => e.code === 'peru_api_vehicle_v3').docs.en.responses[0].body);
            expect(v3Ok.data.technicalSheet.dimensions).toMatchObject({
                length: expect.any(String),
                width: expect.any(String),
                height: expect.any(String),
                wheelbase: expect.any(String),
                curbWeight: expect.any(String),
                fuelTank: expect.any(String),
            });

            const dlOk = JSON.parse(endpoints.find((e: any) => e.code === 'peru_api_driver_license_lookup').docs.en.responses[0].body);
            expect(dlOk.data).toHaveProperty('hasProcedureInProgress');
            expect(dlOk.data).toHaveProperty('hasProcedureInProgressA');
            expect(dlOk.data).toHaveProperty('hasProcedureInProgressB');
        });

        it('strictly verifies zero confidential upstream provider mentions in all user-facing prose across all 448 endpoints', () => {
            const endpoints = (postmanEndpointsIo as any).endpoints || postmanEndpointsIo;
            const violations: string[] = [];

            for (const ep of endpoints) {
                // Check name, nameES, description
                for (const field of [ep.name, ep.nameES, ep.description]) {
                    if (!field) continue;
                    for (const re of FORBIDDEN_ENTITIES) {
                        if (re.test(field)) {
                            violations.push(`Endpoint ${ep.code} prose matched ${re}: ${field}`);
                        }
                    }
                }

                // Check docs overview, description, and param descriptions (excluding code URL samples)
                if (ep.docs) {
                    for (const [loc, d] of Object.entries(ep.docs as Record<string, any>)) {
                        if (d.overview) {
                            const proseOnly = d.overview.replace(/https?:\/\/[^\s\)\"\\]+/g, '').replace(/`[^`]+`/g, '');
                            for (const re of FORBIDDEN_ENTITIES) {
                                if (re.test(proseOnly)) {
                                    violations.push(`Endpoint ${ep.code} docs.${loc}.overview matched ${re}: ${proseOnly.slice(0, 80)}`);
                                }
                            }
                        }
                        if (d.description) {
                            for (const re of FORBIDDEN_ENTITIES) {
                                if (re.test(d.description)) {
                                    violations.push(`Endpoint ${ep.code} docs.${loc}.description matched ${re}: ${d.description}`);
                                }
                            }
                        }
                        for (const p of (d.params || [])) {
                            if (p.description) {
                                for (const re of FORBIDDEN_ENTITIES) {
                                    if (re.test(p.description)) {
                                        violations.push(`Endpoint ${ep.code} param.${p.field} matched ${re}: ${p.description}`);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            expect(violations).toEqual([]);
        });
    });
});
