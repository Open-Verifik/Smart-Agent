export type CriminalCheckDocs = {
    en: string;
    es: string;
};

export type CriminalCheckOption = {
    value: string;
    titleKey: string;
    descriptionKey: string;
    sourceKey: string;
    aboutKey: string;
    docs: CriminalCheckDocs;
};

export const DOCS_BASE_URL = 'https://docs.verifik.co';

export const criminalCheckDocs: Record<string, CriminalCheckDocs> = {
    colombia_api_inpec: {
        en: '/background-check/colombia-inpec',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec',
    },
    colombia_api_identity_lookup_procuraduria: {
        en: '/background-check/colombia-disciplinary-records-attorneys-office',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-procuraduria',
    },
    colombia_api_police_rnmc: {
        en: '/background-check/colombia-police-compliance-corrective-measures',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-cumplimiento-policial',
    },
    colombia_special_api_police_identity_lookup: {
        en: '/background-check/colombia-police-record-check',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-policia',
    },
    world_api_interpol: {
        en: '/background-check/international/interpol-background-check',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-interpol',
    },
    world_api_fbi: {
        en: '/background-check/international/fbi-background-check',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-fbi',
    },
    world_api_dea: {
        en: '/background-check/international/dea-background-check',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-dea',
    },
    world_api_europol: {
        en: '/background-check/international/europol-background-check',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-europol',
    },
    world_api_ofac: {
        en: '/background-check/international/ofac-background-check',
        es: '/verifik-es/verificacion-antecendentes/verificacion-antecendentes-ofac',
    },
    world_api_onu: {
        en: '/background-check/international/onu-background-check',
        es: '/verifik-es/verificacion-de-antecedentes/internacional/verificacion-de-antecedentes-onu',
    },
};

export const criminalCheckDocsUrl = (docs: CriminalCheckDocs, lang: string): string => {
    const path = lang?.toLowerCase().startsWith('es') ? docs.es : docs.en;

    return `${DOCS_BASE_URL}${path}`;
};

export type CountryCheckSection = {
    country: string;
    checks: CriminalCheckOption[];
};

export const buildCountryCheckSections = (
    countries: string[],
    checksByCountry: Record<string, CriminalCheckOption[]>
): CountryCheckSection[] =>
    [...new Set(countries.map((country) => String(country || '').trim()).filter(Boolean))].map((country) => ({
        country,
        checks: checksByCountry[country.toLowerCase()] || [],
    }));

export const isCountryCheckSelected = (
    current: string[],
    endpoint: string,
    countryCodes: string[],
    legacyCodes: string[]
): boolean => {
    const explicit = current.filter((code) => countryCodes.includes(code));

    if (explicit.length) return explicit.includes(endpoint);
    if (!current.includes('local_api')) return false;

    return legacyCodes.includes(endpoint);
};

export const toggleCountryCheck = (
    current: string[],
    endpoint: string,
    countryCodes: string[],
    legacyCodes: string[]
): string[] => {
    const explicit = current.filter((code) => countryCodes.includes(code));
    const base = explicit.length ? explicit : current.includes('local_api') ? legacyCodes : [];
    const nextCountry = base.includes(endpoint) ? base.filter((code) => code !== endpoint) : [...base, endpoint];
    const unaffected = current.filter((code) => code !== 'local_api' && !countryCodes.includes(code));

    return [...unaffected, ...nextCountry];
};
