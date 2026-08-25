export type ResolvedScheme = 'dark' | 'light';

/** Local hour when Auto switches to dark (19:00). */
export const AUTO_SCHEME_DARK_START_HOUR = 19;

/** Local hour when Auto switches back to light (07:00). */
export const AUTO_SCHEME_LIGHT_START_HOUR = 7;

/**
 * Resolves Auto scheme from the user's local clock, not the OS appearance setting.
 */
export const resolveAutoScheme = (now: Date = new Date()): ResolvedScheme => {
    const hour = now.getHours();

    if (hour >= AUTO_SCHEME_DARK_START_HOUR || hour < AUTO_SCHEME_LIGHT_START_HOUR) {
        return 'dark';
    }

    return 'light';
};

/**
 * Milliseconds until the next Auto light/dark boundary in local time.
 */
export const msUntilNextAutoSchemeChange = (now: Date = new Date()): number => {
    const next = new Date(now);
    next.setSeconds(0, 0);
    next.setMinutes(0);

    const hour = now.getHours();

    if (hour >= AUTO_SCHEME_DARK_START_HOUR) {
        next.setDate(next.getDate() + 1);
        next.setHours(AUTO_SCHEME_LIGHT_START_HOUR);
    } else if (hour < AUTO_SCHEME_LIGHT_START_HOUR) {
        next.setHours(AUTO_SCHEME_LIGHT_START_HOUR);
    } else {
        next.setHours(AUTO_SCHEME_DARK_START_HOUR);
    }

    return Math.max(next.getTime() - now.getTime(), 1_000);
};
