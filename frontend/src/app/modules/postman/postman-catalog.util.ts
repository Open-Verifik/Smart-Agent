import { areSamePostmanCountry, canonicalPostmanCountryName } from './postman-country.util';

export const DEFAULT_POSTMAN_COUNTRY = 'Colombia';
export const WORLD_CATALOG_COUNTRY = 'world';

export type CatalogCountryRow = {
    country: string;
    count: number;
};

const isWorldCountry = (value: string | null | undefined): boolean => {
    const country = value?.trim().toLowerCase();
    return country === WORLD_CATALOG_COUNTRY || country === 'global';
};

/**
 * Countries to request for a Postman sidebar load: the selected country only.
 */
export const catalogCountryScope = (selected: string | null | undefined): string[] => {
    const country = selected?.trim();
    if (!country) {
        return [DEFAULT_POSTMAN_COUNTRY];
    }
    if (isWorldCountry(country)) {
        return [WORLD_CATALOG_COUNTRY];
    }
    return [canonicalPostmanCountryName(country)];
};

export const countryCacheKey = (countries: string[]): string =>
    [...new Set(countries.filter(Boolean))].sort((a, b) => a.localeCompare(b, 'en')).join('|');

/**
 * Scope for Check List and multi-country loads: selected countries plus world.
 */
export const catalogCountryScopeForCountries = (
    countries: string[] | null | undefined
): string[] => {
    const named = [...new Set((countries ?? []).map((value) => value.trim()).filter(Boolean))];
    if (!named.length) {
        return [DEFAULT_POSTMAN_COUNTRY, WORLD_CATALOG_COUNTRY];
    }
    if (named.every((value) => isWorldCountry(value))) {
        return [WORLD_CATALOG_COUNTRY];
    }
    const scoped = named.map((value) =>
        isWorldCountry(value) ? WORLD_CATALOG_COUNTRY : canonicalPostmanCountryName(value)
    );
    return [...new Set([...scoped, WORLD_CATALOG_COUNTRY])];
};

export const endpointMatchesCountryFilter = (
    endpointCountry: string | undefined,
    selected: string | null | undefined
): boolean => {
    if (!selected) return true;
    if (isWorldCountry(selected)) return isWorldCountry(endpointCountry);
    if (isWorldCountry(endpointCountry)) return false;
    return areSamePostmanCountry(endpointCountry, selected);
};

export const catalogNeedsDetailHydration = (
    endpoint: { docs?: Record<string, unknown> | null } | null | undefined
): boolean => !endpoint?.docs || !Object.keys(endpoint.docs).length;

export const isCatalogTransportFailure = (err: { status?: number } | null | undefined): boolean =>
    !err || err.status === 0;

export const extractFeatureRows = (payload: unknown): any[] => {
    if (Array.isArray(payload)) return payload;
    if (!payload || typeof payload !== 'object') return [];
    const data = (payload as { data?: unknown }).data;
    if (Array.isArray(data)) return data;
    if (data && typeof data === 'object' && Array.isArray((data as { docs?: unknown }).docs)) {
        return (data as { docs: any[] }).docs;
    }
    return [];
};

/**
 * Country pills for the explorer. Index counts win. Countries that only appear on
 * loaded endpoints (for example a deep link to a United States or European Union
 * watchlist before the country index includes them) are added from those endpoints.
 */
export const mergeCatalogCountryRows = (
    indexRows: CatalogCountryRow[],
    endpointCountries: Array<string | null | undefined>
): CatalogCountryRow[] => {
    const counts = new Map<string, number>();
    for (const row of indexRows) {
        const rawCountry = String(row?.country || '').trim();
        if (!rawCountry) continue;
        const canonical = isWorldCountry(rawCountry)
            ? WORLD_CATALOG_COUNTRY
            : canonicalPostmanCountryName(rawCountry);
        if (!canonical) continue;
        counts.set(canonical, (counts.get(canonical) ?? 0) + (Number(row?.count) || 0));
    }

    const endpointCounts = new Map<string, number>();
    for (const raw of endpointCountries) {
        const rawCountry = raw?.trim() ?? '';
        if (!rawCountry) continue;
        const canonical = isWorldCountry(rawCountry)
            ? WORLD_CATALOG_COUNTRY
            : canonicalPostmanCountryName(rawCountry);
        if (!canonical) continue;
        endpointCounts.set(canonical, (endpointCounts.get(canonical) ?? 0) + 1);
    }
    for (const [country, count] of endpointCounts) {
        if (!counts.has(country)) counts.set(country, count);
    }

    return [...counts.entries()].map(([country, count]) => ({ country, count }));
};

export const extractCountryRows = (payload: unknown): CatalogCountryRow[] => {
    const rows = extractFeatureRows(payload);
    const countsByCanonical = new Map<string, number>();

    for (const row of rows) {
        const rawCountry = String(row?.country || '').trim();
        if (!rawCountry) continue;
        const canonical = isWorldCountry(rawCountry)
            ? WORLD_CATALOG_COUNTRY
            : canonicalPostmanCountryName(rawCountry);
        if (!canonical) continue;
        const count = Number(row?.count) || 0;
        countsByCanonical.set(canonical, (countsByCanonical.get(canonical) ?? 0) + count);
    }

    return [...countsByCanonical.entries()].map(([country, count]) => ({ country, count }));
};
