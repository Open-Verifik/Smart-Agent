export const DEFAULT_ENROLL_LOOKUP_DISCOUNT_PERCENT = 50;
export const BACKGROUND_CHECK_LIST_PRICE = 0.5;
export const COLOMBIA_IDENTITY_LIST_PRICE = 0.3;

export type UsageTone = 'ok' | 'warn' | 'alert';

const toFiniteNumber = (value: unknown, fallback = 0): number => {
    const n = Number(value);

    return Number.isFinite(n) ? n : fallback;
};

/**
 * Used / limit as 0–100. Over-limit usage still caps the visual fill at 100.
 */
export const usagePercent = (used: unknown, limit: unknown): number => {
    const usedN = Math.max(0, toFiniteNumber(used));
    const limitN = toFiniteNumber(limit);

    if (limitN <= 0) return usedN > 0 ? 100 : 0;

    return Math.min(100, Math.round((usedN / limitN) * 100));
};

export const remaining = (used: unknown, limit: unknown): number => {
    return Math.max(0, toFiniteNumber(limit) - Math.max(0, toFiniteNumber(used)));
};

export const overageCount = (used: unknown, limit: unknown): number => {
    return Math.max(0, Math.max(0, toFiniteNumber(used)) - toFiniteNumber(limit));
};

export const usageTone = (used: unknown, limit: unknown): UsageTone => {
    if (overageCount(used, limit) > 0) return 'alert';

    const percent = usagePercent(used, limit);

    if (percent >= 90) return 'alert';
    if (percent >= 70) return 'warn';

    return 'ok';
};

export const daysUntilReset = (endDate: string | Date | null | undefined, now: Date = new Date()): number => {
    if (!endDate) return 0;

    const end = endDate instanceof Date ? endDate : new Date(endDate);

    if (Number.isNaN(end.getTime())) return 0;

    return Math.max(0, Math.ceil((end.getTime() - now.getTime()) / 86_400_000));
};

export const discountedOveragePrice = (listPrice: unknown, percent?: unknown): number => {
    const price = toFiniteNumber(listPrice);

    if (price < 0) return 0;

    const raw = Number(percent);
    const safePercent = Number.isFinite(raw)
        ? Math.min(100, Math.max(0, raw))
        : DEFAULT_ENROLL_LOOKUP_DISCOUNT_PERCENT;

    return parseFloat((price * (1 - safePercent / 100)).toFixed(6));
};

export const resolveDiscountPercent = (percent?: unknown): number => {
    const raw = Number(percent);

    if (!Number.isFinite(raw)) return DEFAULT_ENROLL_LOOKUP_DISCOUNT_PERCENT;

    return Math.min(100, Math.max(0, raw));
};
