/**
 * SmartFleet country helpers.
 *
 * Asset country is ISO alpha-2. The check catalog is the source of truth for
 * which codes are live; the roadmap list only surfaces Coming soon entries in
 * the selector until those catalogs ship.
 */

export interface FleetCountryChoice {
    code: string;
    available: boolean;
}

/** Soft-launch roadmap: visible but not selectable until the catalog has them. */
export const FLEET_COUNTRY_ROADMAP: FleetCountryChoice[] = [
    { code: 'mx', available: false },
    { code: 'cl', available: false },
    { code: 'pe', available: false },
];

/** Placeholders for create-form fields, keyed by country code. */
export const FLEET_COUNTRY_PLACEHOLDERS: Record<
    string,
    { plate: string; documentType: string }
> = {
    co: { plate: 'ABC123', documentType: 'CC' },
    mx: { plate: 'ABC123A', documentType: 'INE' },
    cl: { plate: 'ABCD12', documentType: 'RUT' },
    pe: { plate: 'ABC123', documentType: 'DNI' },
};

const COUNTRY_FLAGS: Record<string, string> = {
    co: '🇨🇴',
    mx: '🇲🇽',
    cl: '🇨🇱',
    pe: '🇵🇪',
    br: '🇧🇷',
    us: '🇺🇸',
};

/**
 * Merge API-supported countries with roadmap Coming soon entries.
 * Live codes always win over a roadmap stub with the same code.
 */
export const mergeFleetCountries = (
    supported: FleetCountryChoice[] = []
): FleetCountryChoice[] => {
    const byCode = new Map<string, FleetCountryChoice>();

    for (const entry of FLEET_COUNTRY_ROADMAP) {
        byCode.set(entry.code, { ...entry });
    }

    for (const entry of supported) {
        byCode.set(entry.code, { code: entry.code, available: entry.available !== false });
    }

    const live = [...byCode.values()].filter((entry) => entry.available);
    const soon = [...byCode.values()].filter((entry) => !entry.available);

    return [...live, ...soon];
};

export const getFleetCountryFlag = (country?: string | null): string => {
    const key = String(country || '')
        .trim()
        .toLowerCase();

    return COUNTRY_FLAGS[key] ?? '🏳️';
};

export const getFleetCountryPlaceholders = (
    country?: string | null
): { plate: string; documentType: string } => {
    const key = String(country || 'co')
        .trim()
        .toLowerCase();

    return FLEET_COUNTRY_PLACEHOLDERS[key] ?? FLEET_COUNTRY_PLACEHOLDERS.co;
};
