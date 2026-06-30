import { ApiEndpoint } from './postman.types';

/** ISO 3166-1 alpha-2 (lowercase in URL) or "world" for globe icon — not emoji (Windows often shows "US" instead of 🇺🇸). */
export const POSTMAN_COUNTRY_ISO: Record<string, 'world' | string> = {
    world: 'world',
    Global: 'world',
    Colombia: 'co',
    'United States': 'us',
    Peru: 'pe',
    Mexico: 'mx',
    Brazil: 'br',
    Chile: 'cl',
    Argentina: 'ar',
    Ecuador: 'ec',
    Venezuela: 've',
    Bolivia: 'bo',
    Uruguay: 'uy',
    Paraguay: 'py',
    Panama: 'pa',
    'Costa Rica': 'cr',
    Guatemala: 'gt',
    Honduras: 'hn',
    'El Salvador': 'sv',
    'Dominican Republic': 'do',
    'República Dominicana': 'do',
    Canada: 'ca',
    Spain: 'es',
    Israel: 'il',
    Nicaragua: 'ni',
    India: 'in',
    'Czech Republic': 'cz',
    Czechia: 'cz',
};

/** Extra i18n title prefixes not covered by POSTMAN_COUNTRY_ISO keys alone. */
const COUNTRY_TITLE_PREFIX_EXTRAS: Record<string, string[]> = {
    Bolivia: ['玻利维亚'],
    Brazil: ['Brasil', 'Brésil', 'ブラジル', '브라질', '巴西'],
    Ecuador: ['厄瓜多尔'],
    'United States': ['USA'],
    Spain: ['España'],
    Mexico: ['México'],
    Peru: ['Perú'],
};

export type PostmanCountryFlagUi =
    | { k: 'img'; src: string }
    | { k: 'globe' }
    | { k: 'initials'; text: string };

export function postmanCountryFlagUi(country: string): PostmanCountryFlagUi {
    const code = POSTMAN_COUNTRY_ISO[country];
    if (code === 'world') {
        return { k: 'globe' };
    }
    if (typeof code === 'string' && code.length >= 2) {
        return { k: 'img', src: `https://flagcdn.com/w40/${code}.png` };
    }
    return { k: 'initials', text: postmanCountryInitials(country) };
}

export function postmanCountryInitials(name: string): string {
    const trim = name.trim();
    if (!trim) {
        return '?';
    }
    const words = trim.split(/\s+/).filter(Boolean);
    if (words.length === 1) {
        return trim.slice(0, 2).toUpperCase();
    }
    return (words[0][0] + words[1][0]).toUpperCase();
}

/**
 * Returns the lowercase ISO token (e.g. "es", "co", "world") for a display country name.
 * Falls back to `null` for unknown names so callers can drop the URL param defensively.
 */
export function countryNameToIso(name: string | null | undefined): string | null {
    if (!name) return null;
    const code = POSTMAN_COUNTRY_ISO[name];
    return typeof code === 'string' && code.length > 0 ? code.toLowerCase() : null;
}

/**
 * Resolves an ISO token from the URL back to the canonical country name actually used
 * by the loaded endpoint catalog. Prefers a live match against `endpoints[*].country`
 * to avoid mismatches when several display names share an ISO; falls back to the
 * static reverse map derived from `POSTMAN_COUNTRY_ISO`.
 */
export function resolveCountryNameFromIso(
    iso: string | null | undefined,
    endpoints: ApiEndpoint[]
): string | null {
    if (!iso) return null;
    const target = iso.trim().toLowerCase();
    if (!target) return null;

    for (const ep of endpoints) {
        if (!ep.country) continue;
        const epIso = countryNameToIso(ep.country);
        if (epIso && epIso === target) {
            return ep.country;
        }
    }

    for (const [name, code] of Object.entries(POSTMAN_COUNTRY_ISO)) {
        if (typeof code === 'string' && code.toLowerCase() === target) {
            return name;
        }
    }

    return null;
}

/** Lowercase, accent-stripped token for fuzzy country prefix matching. */
export function normalizeCountryToken(value: string): string {
    return value
        .normalize('NFD')
        .replace(/\p{M}/gu, '')
        .toLowerCase()
        .trim();
}

/**
 * All acceptable title prefixes for a country (e.g. "USA" for United States, "España" for Spain).
 */
export function getCountryTitlePrefixVariants(country: string | null | undefined): string[] {
    if (!country) {
        return [];
    }

    const variants = new Set<string>([country]);
    const iso = POSTMAN_COUNTRY_ISO[country] ?? (country === 'world' ? 'world' : undefined);

    if (iso) {
        for (const [name, code] of Object.entries(POSTMAN_COUNTRY_ISO)) {
            if (code === iso) {
                variants.add(name);
            }
        }
    }

    if (country === 'world' || iso === 'world') {
        variants.add('Global');
        variants.add('World');
    }

    for (const extra of COUNTRY_TITLE_PREFIX_EXTRAS[country] ?? []) {
        variants.add(extra);
    }

    return [...variants];
}

/**
 * Removes a leading "{Country} - " style prefix from a title when it matches endpoint.country.
 */
export function stripCountryPrefixFromTitle(
    title: string | null | undefined,
    country: string | null | undefined
): string {
    const trimmed = title?.trim();
    if (!trimmed || !country) {
        return trimmed ?? '';
    }

    const match = trimmed.match(/^(.+?)\s*(?:[-–—]\s+|:\s+)/);
    if (!match) {
        return trimmed;
    }

    const prefix = match[1];
    const normalizedPrefix = normalizeCountryToken(prefix);
    const variantTokens = getCountryTitlePrefixVariants(country).map(normalizeCountryToken);

    if (variantTokens.includes(normalizedPrefix)) {
        return trimmed.slice(match[0].length).trim();
    }

    return trimmed;
}
