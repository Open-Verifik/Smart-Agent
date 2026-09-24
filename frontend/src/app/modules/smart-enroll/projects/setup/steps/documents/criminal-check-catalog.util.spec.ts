import {
    buildCountryCheckSections,
    criminalCheckDocs,
    criminalCheckDocsUrl,
    CriminalCheckOption,
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
        expect(Object.keys(criminalCheckDocs).sort()).toEqual([
            'colombia_api_identity_lookup_procuraduria',
            'colombia_api_inpec',
            'colombia_api_police_rnmc',
            'colombia_special_api_police_identity_lookup',
            'world_api_dea',
            'world_api_europol',
            'world_api_fbi',
            'world_api_interpol',
            'world_api_ofac',
            'world_api_onu',
        ]);

        for (const docs of Object.values(criminalCheckDocs)) {
            expect(docs.en.startsWith('/background-check/')).toBe(true);
            expect(docs.es.startsWith('/verifik-es/')).toBe(true);
        }

        expect(criminalCheckDocsUrl(criminalCheckDocs.colombia_special_api_police_identity_lookup, 'es')).toBe(
            'https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-policia'
        );
        expect(criminalCheckDocsUrl(criminalCheckDocs.colombia_special_api_police_identity_lookup, 'en')).toBe(
            'https://docs.verifik.co/background-check/colombia-police-record-check'
        );
    });
});
