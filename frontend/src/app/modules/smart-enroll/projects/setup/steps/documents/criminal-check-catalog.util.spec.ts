import {
    buildCountryCheckSections,
    criminalCheckDocs,
    criminalCheckDocsUrl,
    CriminalCheckOption,
    getCriminalCheckEndpointDetail,
    getExtractionHint,
    isCountryCheckSelected,
    toggleCountryCheck,
} from './criminal-check-catalog.util';

const check = (value: string): CriminalCheckOption => ({
    value,
    titleKey: `${value}.title`,
    descriptionKey: `${value}.description`,
    sourceKey: `${value}.source`,
    aboutKey: `${value}.about`,
    docs: criminalCheckDocs[value] || { en: '/background-check/missing', es: '/verifik-es/missing' },
});

describe('criminal check catalog', () => {
    const inpec = 'colombia_api_inpec';
    const procuraduria = 'colombia_api_identity_lookup_procuraduria';
    const rnmc = 'colombia_api_police_rnmc';
    const colombiaCodes = [inpec, procuraduria, rnmc];
    const legacyCodes = [inpec, procuraduria];

    it('deduplicates selected countries and attaches available checks', () => {
        const sections = buildCountryCheckSections(['Colombia', 'Mexico', 'Colombia'], {
            colombia: [check(inpec)],
        });

        expect(sections).toEqual([
            { country: 'Colombia', checks: [check(inpec)] },
            { country: 'Mexico', checks: [] },
        ]);
    });

    it('shows legacy local_api as INPEC and Procuraduría only', () => {
        expect(isCountryCheckSelected(['local_api'], inpec, colombiaCodes, legacyCodes)).toBe(true);
        expect(isCountryCheckSelected(['local_api'], procuraduria, colombiaCodes, legacyCodes)).toBe(true);
        expect(isCountryCheckSelected(['local_api'], rnmc, colombiaCodes, legacyCodes)).toBe(false);
    });

    it('migrates the first edit to explicit country codes and preserves world checks', () => {
        expect(toggleCountryCheck(['local_api', 'world_api_interpol'], rnmc, colombiaCodes, legacyCodes)).toEqual([
            'world_api_interpol',
            inpec,
            procuraduria,
            rnmc,
        ]);
    });

    it('does not restore legacy checks after the last explicit source is removed', () => {
        expect(toggleCountryCheck([rnmc, 'world_api_interpol'], rnmc, colombiaCodes, legacyCodes)).toEqual([
            'world_api_interpol',
        ]);
    });

    it('maps every catalog code to English and Spanish documentation', () => {
        expect(Object.keys(criminalCheckDocs).length).toBe(30);
        expect(Object.keys(criminalCheckDocs).sort()).toEqual([
            'colombia_api_adverse_media',
            'colombia_api_identity_lookup_procuraduria',
            'colombia_api_inpec',
            'colombia_api_jcc_sanctions',
            'colombia_api_paco_sanctions',
            'colombia_api_police_rnmc',
            'colombia_api_rama_jepms',
            'colombia_api_sicaac_cases',
            'colombia_api_sicaac_insolvency',
            'colombia_special_api_police_identity_lookup',
            'peru_api_pep',
            'world_api_cia_world_leaders',
            'world_api_csl',
            'world_api_dea',
            'world_api_dss_most_wanted',
            'world_api_eu_fsf',
            'world_api_eu_terrorists',
            'world_api_europol',
            'world_api_fbi',
            'world_api_health_exclusions',
            'world_api_iadb',
            'world_api_interpol',
            'world_api_ofac',
            'world_api_offshore_leaks',
            'world_api_ofsi',
            'world_api_onu',
            'world_api_sec',
            'world_api_secret_service',
            'world_api_us_terrorists',
            'world_api_world_bank',
        ]);

        for (const docs of Object.values(criminalCheckDocs)) {
            expect(docs.en.startsWith('/background-check/') || docs.en.startsWith('/legal/')).toBe(true);
            expect(docs.es.startsWith('/verifik-es/')).toBe(true);
        }

        expect(criminalCheckDocsUrl(criminalCheckDocs.colombia_special_api_police_identity_lookup, 'es')).toBe(
            'https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-policia'
        );
        expect(criminalCheckDocsUrl(criminalCheckDocs.colombia_special_api_police_identity_lookup, 'en')).toBe(
            'https://docs.verifik.co/background-check/colombia-police-record-check'
        );
        expect(criminalCheckDocsUrl(criminalCheckDocs.colombia_api_sicaac_cases, 'es')).toBe(
            'https://docs.verifik.co/verifik-es/legal/colombia-sicaac-cases'
        );
        expect(criminalCheckDocsUrl(criminalCheckDocs.colombia_api_sicaac_cases, 'en')).toBe(
            'https://docs.verifik.co/legal/colombia-sicaac-cases'
        );
        expect(criminalCheckDocsUrl(criminalCheckDocs.world_api_csl, 'es')).toBe(
            'https://docs.verifik.co/verifik-es/background-check/international/us-consolidated-screening-list'
        );
        expect(criminalCheckDocsUrl(criminalCheckDocs.world_api_csl, 'en')).toBe(
            'https://docs.verifik.co/background-check/international/us-consolidated-screening-list'
        );
    });

    it('extracts rich endpoint detail from catalog with params, responses, and code snippets', () => {
        const detail = getCriminalCheckEndpointDetail('colombia_api_inpec', 'en');
        expect(detail).not.toBeNull();
        expect(detail?.method).toBe('GET');
        expect(detail?.url).toBe('v2/co/inpec');
        expect(detail?.endpointPath).toBe('/v2/co/inpec');
        expect(detail?.price).toBe(0.5);
        expect(detail?.params.some((p) => p.field === 'documentNumber' && p.required)).toBe(true);
        expect(detail?.params.some((p) => p.field === 'documentType')).toBe(true);
        expect(detail?.responses.length).toBeGreaterThanOrEqual(4);
        expect(detail?.responses.some((r) => r.status === '200' && r.isHit)).toBe(true);
        expect(detail?.requestExamples.length).toBe(3);
        expect(detail?.requestExamples.some((ex) => ex.lang === 'curl')).toBe(true);

        const interpol = getCriminalCheckEndpointDetail('world_api_interpol', 'en');
        expect(interpol).not.toBeNull();
        expect(interpol?.method).toBe('GET');
        expect(interpol?.url).toBe('v2/interpol');
        expect(interpol?.hasSearchGroups).toBe(true);
        expect(interpol?.paramGroups.length).toBe(2);

        const optionName = interpol?.paramGroups.find((g) => g.groupType === 'name');
        expect(optionName).toBeDefined();
        expect(optionName?.params.map((p) => p.field)).toEqual(['fullName']);
        expect(optionName?.params[0].requirementKind).toBe('required');

        const optionDoc = interpol?.paramGroups.find((g) => g.groupType === 'document');
        expect(optionDoc).toBeDefined();
        expect(optionDoc?.params.map((p) => p.field)).toEqual([
            'documentType',
            'documentNumber',
            'dateOfBirth',
            'expirationDate',
        ]);
        expect(optionDoc?.params.find((p) => p.field === 'documentType')?.requirementKind).toBe('required');
        expect(optionDoc?.params.find((p) => p.field === 'documentNumber')?.requirementKind).toBe('required');
        expect(optionDoc?.params.find((p) => p.field === 'dateOfBirth')?.requirementKind).toBe('conditional');
        expect(optionDoc?.params.find((p) => p.field === 'dateOfBirth')?.conditionalHint).toContain('Required for');
        expect(optionDoc?.params.find((p) => p.field === 'expirationDate')?.requirementKind).toBe('conditional');

        expect(interpol?.params.some((p) => p.field === 'fullName')).toBe(true);
        expect(interpol?.responses.some((r) => r.isHit)).toBe(true);
        expect(interpol?.responses.some((r) => r.isClean)).toBe(true);
    });

    it('provides localized extraction hints for SmartEnroll automated query mapping', () => {
        expect(getExtractionHint('documentNumber', 'en')).toContain('Auto-extracted from verified identity document');
        expect(getExtractionHint('documentNumber', 'es')).toContain('Extraído automáticamente del documento');
        expect(getExtractionHint('fullName', 'en')).toContain('Full name reconstructed');
        expect(getExtractionHint('fullName', 'es')).toContain('Nombre completo reconstruido');
    });

    it('handles unknown endpoint code gracefully', () => {
        expect(getCriminalCheckEndpointDetail('unknown_nonexistent_endpoint')).toBeNull();
    });
});
