export type CheckListDomain = 'people' | 'vehicles' | 'businesses';

export const CHECK_LIST_DOMAINS: CheckListDomain[] = ['people', 'vehicles', 'businesses'];

const CATEGORY_DOMAINS: Record<string, CheckListDomain[]> = {
    identity: ['people'],
    identity_validation: ['people'],
    background_check: ['people'],
    judicial: ['people'],
    health: ['people'],
    voting: ['people'],
    email: ['people'],
    covid: ['people'],
    military: ['people'],
    antispoofing: ['people'],
    faceverification: ['people'],
    ocr: ['people'],
    verification: ['people'],
    search: ['people'],
    look_ups: ['people'],
    messaging: ['people'],
    biometrics_apis: ['people'],
    authentication: ['people'],
    transit: ['vehicles'],
    autodata: ['vehicles'],
    business: ['businesses'],
    certificates: ['businesses'],
    solutions: ['businesses'],
    payments: ['businesses'],
    data_sheet: ['businesses'],
    finance: ['people', 'businesses'],
};

const normalizeDomain = (value: unknown): CheckListDomain | null => {
    if (typeof value !== 'string') return null;
    const domain = value.trim().toLowerCase();
    return CHECK_LIST_DOMAINS.includes(domain as CheckListDomain)
        ? (domain as CheckListDomain)
        : null;
};

export const normalizeCheckListDomains = (value: unknown): CheckListDomain[] => {
    if (!Array.isArray(value)) return [];
    const unique = new Set<CheckListDomain>();
    for (const item of value) {
        const domain = normalizeDomain(item);
        if (domain) unique.add(domain);
    }
    return CHECK_LIST_DOMAINS.filter((domain) => unique.has(domain));
};

export const resolveCheckListDomains = (feature: {
    checkListDomains?: unknown;
    baseCategory?: string;
    category?: string;
}): CheckListDomain[] => {
    const explicit = normalizeCheckListDomains(feature.checkListDomains);
    if (explicit.length) return explicit;

    const category = String(feature.baseCategory || feature.category || '')
        .trim()
        .toLowerCase()
        .replace(/[\s-]+/g, '_');

    return CATEGORY_DOMAINS[category] ? [...CATEGORY_DOMAINS[category]] : ['people'];
};

export const isWorldCatalogCountry = (country: string | undefined): boolean => {
    const value = (country || '').trim().toLowerCase();
    return !value || value === 'world' || value === 'global';
};

export const normalizeCheckListCategory = (feature: {
    baseCategory?: string;
    category?: string;
}): string =>
    String(feature.baseCategory || feature.category || 'other')
        .trim()
        .toLowerCase()
        .replace(/[\s-]+/g, '_');

export const isWorldBackgroundCheck = (feature: {
    country?: string;
    baseCategory?: string;
    category?: string;
}): boolean =>
    isWorldCatalogCountry(feature.country) &&
    normalizeCheckListCategory(feature) === 'background_check';

export const featureMatchesCountries = (
    featureCountry: string | undefined,
    selectedCountries: string[]
): boolean => {
    if (isWorldCatalogCountry(featureCountry)) return false;
    if (!selectedCountries.length) return true;
    return selectedCountries.some(
        (item) => item.toLowerCase() === featureCountry.trim().toLowerCase()
    );
};

export const featureMatchesCheckListCatalog = (
    feature: {
        country?: string;
        baseCategory?: string;
        category?: string;
    },
    selectedCountries: string[]
): boolean =>
    isWorldBackgroundCheck(feature) || featureMatchesCountries(feature.country, selectedCountries);
