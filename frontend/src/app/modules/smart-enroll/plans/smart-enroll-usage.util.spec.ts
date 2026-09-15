import { describe, expect, it } from 'vitest';
import {
    BACKGROUND_CHECK_LIST_PRICE,
    COLOMBIA_IDENTITY_LIST_PRICE,
    daysUntilReset,
    discountedOveragePrice,
    overageCount,
    remaining,
    resolveDiscountPercent,
    usagePercent,
    usageTone,
} from './smart-enroll-usage.util';

describe('smart-enroll-usage.util', () => {
    describe('usagePercent', () => {
        it('returns 48 for 12 of 25', () => {
            expect(usagePercent(12, 25)).toBe(48);
        });

        it('caps fill at 100 when over the limit', () => {
            expect(usagePercent(30, 25)).toBe(100);
        });

        it('treats a zero limit as empty unless something was used', () => {
            expect(usagePercent(0, 0)).toBe(0);
            expect(usagePercent(2, 0)).toBe(100);
        });
    });

    describe('remaining and overageCount', () => {
        it('computes remaining inside the pack', () => {
            expect(remaining(12, 25)).toBe(13);
            expect(overageCount(12, 25)).toBe(0);
        });

        it('computes overage after the pack', () => {
            expect(remaining(32, 25)).toBe(0);
            expect(overageCount(32, 25)).toBe(7);
        });
    });

    describe('usageTone', () => {
        it('is ok under 70%, warn from 70, alert from 90 or overage', () => {
            expect(usageTone(10, 25)).toBe('ok');
            expect(usageTone(18, 25)).toBe('warn');
            expect(usageTone(23, 25)).toBe('alert');
            expect(usageTone(26, 25)).toBe('alert');
        });
    });

    describe('daysUntilReset', () => {
        it('counts whole days until endDate', () => {
            const now = new Date('2026-09-10T12:00:00.000Z');
            expect(daysUntilReset('2026-10-06T00:00:00.000Z', now)).toBe(26);
        });

        it('returns 0 for missing or past dates', () => {
            const now = new Date('2026-10-07T00:00:00.000Z');
            expect(daysUntilReset(null, now)).toBe(0);
            expect(daysUntilReset('2026-10-06T00:00:00.000Z', now)).toBe(0);
        });
    });

    describe('discountedOveragePrice', () => {
        it('applies 50% to Colombia identity 0.30 and background 0.50', () => {
            expect(discountedOveragePrice(COLOMBIA_IDENTITY_LIST_PRICE, 50)).toBe(0.15);
            expect(discountedOveragePrice(BACKGROUND_CHECK_LIST_PRICE, 50)).toBe(0.25);
        });

        it('defaults a missing percent to 50', () => {
            expect(discountedOveragePrice(0.5, undefined)).toBe(0.25);
            expect(resolveDiscountPercent(undefined)).toBe(50);
        });
    });
});
