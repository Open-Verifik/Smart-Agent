/** Shared RNG + address/branding helpers for Smart Enroll / Smart Access setup dev-sample patches. */

export const FALLBACK_ALLOWED_COUNTRIES = [
    'Canada',
    'Mexico',
    'Germany',
    'France',
    'Japan',
    'Brazil',
    'Andorra',
    'Ireland',
    'Spain',
    'Portugal',
] as const;

export const PROJECT_NAME_PREFIXES = ['Sandbox', 'Smoke', 'Local', 'Preview', 'Lab', 'Scratch'] as const;

const FIRST_NAMES = [
    'Alex',
    'Jordan',
    'Riley',
    'Morgan',
    'Casey',
    'Taylor',
    'Quinn',
    'Avery',
    'Jamie',
    'Parker',
] as const;

const LAST_NAMES = [
    'Miller',
    'Nguyen',
    'Silva',
    'Martinez',
    'Okafor',
    'Chen',
    'Patel',
    'Klein',
    'Santos',
    'Murphy',
] as const;

const STREETS = ['Oak Lane', 'Maple Ave', 'Cedar Blvd', 'River Road', 'Hillcrest Dr', 'Bay Street'] as const;

const CITY_NAMES = ['Denver', 'Austin', 'Portland', 'Madrid', 'Oslo', 'Lyon', 'Calgary', 'Tampa'] as const;

export const DIAL_CODES = ['+1', '+34', '+44', '+49', '+33', '+52', '+507'] as const;

export function randomDigits(len: number): string {
    return Array.from({ length: len }, () => Math.floor(Math.random() * 10).toString()).join('');
}

export function randomTokenHex(byteLength: number): string {
    const bytes = new Uint8Array(byteLength);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

export function randomChoice<T>(xs: readonly T[]): T {
    return xs[Math.floor(Math.random() * xs.length)]!;
}

function pickUniqueRandom<T>(pool: readonly T[], count: number): T[] {
    if (count <= 0 || pool.length === 0) return [];
    if (pool.length <= count) return [...pool];
    const copy = [...pool];
    const out: T[] = [];
    while (out.length < count && copy.length > 0) {
        const i = Math.floor(Math.random() * copy.length);
        out.push(copy.splice(i, 1)[0] as T);
    }
    return out;
}

/** Relative luminance; pick light text on dark buttons. */
export function luminanceOkForWhiteText(hex: string): boolean {
    const x = /^#([0-9a-f]{6})$/i.exec(hex);
    if (!x) return false;
    const n = Number.parseInt(x[1], 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    const y = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return y < 0.55;
}

export function randomHexColor(): string {
    return `#${randomTokenHex(3)}`;
}

export function randomAddressLine(): string {
    return `${100 + Number(randomDigits(2))} ${randomChoice(STREETS)}`;
}

export function randomPostalCode(): string {
    return `${randomChoice(['A', 'B', 'C', 'K', 'V'])}${randomDigits(1)}${randomChoice(['A', 'B', 'C'])} ${randomDigits(3)}`;
}

export function randomPersonName(): string {
    return `${randomChoice(FIRST_NAMES)} ${randomChoice(LAST_NAMES)}`;
}

export function slugFromToken(token: string): string {
    return token.slice(0, 12);
}

export function resolveAllowedCountries(pool: readonly string[] | undefined): string[] {
    const usable = (pool ?? [...FALLBACK_ALLOWED_COUNTRIES]).filter((c) => !!c?.trim?.() && c !== 'All' && c !== 'World');
    const uniq = [...new Set(usable)];
    const pickCount = uniq.length <= 2 ? uniq.length : 2 + Math.floor(Math.random() * 2);
    const picks = pickUniqueRandom(uniq, pickCount);
    return picks.length > 0 ? picks : [...FALLBACK_ALLOWED_COUNTRIES].slice(0, 2);
}

export function resolveDevSampleRedirectOrigin(redirectOrigin?: string): string {
    return typeof redirectOrigin === 'string' && redirectOrigin.trim()
        ? redirectOrigin.trim().replace(/\/+$/, '')
        : 'https://localhost:4201';
}

export function randomChoiceCity(): string {
    return randomChoice(CITY_NAMES);
}
