export type TokenLifecycleStatus = 'active' | 'expiring' | 'expired' | 'unknown';

const DAY_IN_MS = 24 * 60 * 60 * 1000;

const decodeBase64Url = (value: string): string => {
    const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized.padEnd(normalized.length + ((4 - (normalized.length % 4)) % 4), '=');

    return decodeURIComponent(
        Array.from(atob(padded))
            .map((character) => `%${character.charCodeAt(0).toString(16).padStart(2, '0')}`)
            .join('')
    );
};

/**
 * Reads Verifik's custom `expiresAt` claim, with standard JWT `exp` fallback.
 */
export const getTokenExpirationDate = (token: string): Date | null => {
    try {
        const parts = token?.split('.');
        if (parts?.length !== 3) return null;

        const payload = JSON.parse(decodeBase64Url(parts[1])) as {
            expiresAt?: unknown;
            exp?: unknown;
        };
        const rawExpiration = payload.expiresAt ?? payload.exp;
        const expiration = Number(rawExpiration);

        if (!Number.isFinite(expiration) || expiration <= 0) return null;

        const milliseconds = expiration > 1_000_000_000_000 ? expiration : expiration * 1000;
        const date = new Date(milliseconds);

        return Number.isNaN(date.getTime()) ? null : date;
    } catch {
        return null;
    }
};

/**
 * Matches moment().add(months, 'month') by clamping to the target month's end.
 */
export const addCalendarMonths = (date: Date, months: number): Date => {
    const result = new Date(date);
    const originalDay = result.getDate();

    result.setDate(1);
    result.setMonth(result.getMonth() + months);

    const lastDay = new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate();
    result.setDate(Math.min(originalDay, lastDay));

    return result;
};

export const getTokenRemainingDays = (expiration: Date | null, now = new Date()): number | null => {
    if (!expiration) return null;

    return Math.max(0, Math.ceil((expiration.getTime() - now.getTime()) / DAY_IN_MS));
};

export const getTokenLifecycleStatus = (
    expiration: Date | null,
    now = new Date(),
    expiringWithinDays = 14
): TokenLifecycleStatus => {
    if (!expiration) return 'unknown';
    if (expiration.getTime() <= now.getTime()) return 'expired';

    const remainingDays = getTokenRemainingDays(expiration, now);

    return remainingDays !== null && remainingDays <= expiringWithinDays ? 'expiring' : 'active';
};
