export const DEFAULT_POSTMAN_COUNTRY = 'Colombia';
export const WORLD_CATALOG_COUNTRY = 'world';

export type CatalogCountryRow = {
    country: string;
    count: number;
};

/**
 * Countries to request for a Postman sidebar load: selected + world, or world alone.
 */
export const catalogCountryScope = (selected: string | null | undefined): string[] => {
    const country = selected?.trim();
    if (!country) {
        return [DEFAULT_POSTMAN_COUNTRY, WORLD_CATALOG_COUNTRY];
    }
    if (country.toLowerCase() === WORLD_CATALOG_COUNTRY || country === 'Global') {
        return [WORLD_CATALOG_COUNTRY];
    }
    return [...new Set([country, WORLD_CATALOG_COUNTRY])];
};

export const countryCacheKey = (countries: string[]): string =>
    [...new Set(countries.filter(Boolean))].sort((a, b) => a.localeCompare(b, 'en')).join('|');

const isWorldCountry = (value: string | null | undefined): boolean => {
    const country = value?.trim().toLowerCase();
    return country === WORLD_CATALOG_COUNTRY || country === 'global';
};

/**
 * Scope for Check List and multi-country loads: selected countries plus world.
 */
export const catalogCountryScopeForCountries = (countries: string[] | null | undefined): string[] => {
    const named = [...new Set((countries ?? []).map((value) => value.trim()).filter(Boolean))];
    if (!named.length) {
        return catalogCountryScope(null);
    }
    if (named.every((value) => isWorldCountry(value))) {
        return [WORLD_CATALOG_COUNTRY];
    }
    const scoped = named.map((value) =>
        isWorldCountry(value) ? WORLD_CATALOG_COUNTRY : value
    );
    return [...new Set([...scoped, WORLD_CATALOG_COUNTRY])];
};

export const endpointMatchesCountryFilter = (
    endpointCountry: string | undefined,
    selected: string | null | undefined
): boolean => {
    if (!selected) return true;
    if (endpointCountry === selected) return true;
    if (isWorldCountry(selected)) return isWorldCountry(endpointCountry);
    return isWorldCountry(endpointCountry);
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

export const extractCountryRows = (payload: unknown): CatalogCountryRow[] => {
    const rows = extractFeatureRows(payload);
    return rows
        .map((row) => ({
            country: String(row?.country || '').trim(),
            count: Number(row?.count) || 0,
        }))
        .filter((row) => row.country);
};
