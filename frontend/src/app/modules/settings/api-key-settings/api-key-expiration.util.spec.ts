import { describe, expect, it } from 'vitest';

import {
    addCalendarMonths,
    getTokenExpirationDate,
    getTokenLifecycleStatus,
    getTokenRemainingDays,
} from './api-key-expiration.util';

const encodePayload = (payload: Record<string, unknown>): string => {
    const encoded = btoa(JSON.stringify(payload))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

    return `header.${encoded}.signature`;
};

describe('api-key-expiration.util', () => {
    it('reads the Verifik expiresAt claim', () => {
        const expiration = 1_800_000_000;

        expect(getTokenExpirationDate(encodePayload({ expiresAt: expiration }))).toEqual(
            new Date(expiration * 1000)
        );
    });

    it('falls back to the standard exp claim', () => {
        const expiration = 1_900_000_000;

        expect(getTokenExpirationDate(encodePayload({ exp: expiration }))).toEqual(
            new Date(expiration * 1000)
        );
    });

    it('returns null for malformed or claimless tokens', () => {
        expect(getTokenExpirationDate('not-a-jwt')).toBeNull();
        expect(getTokenExpirationDate(encodePayload({}))).toBeNull();
    });

    it('clamps calendar month rollover to the target month end', () => {
        expect(addCalendarMonths(new Date(2026, 0, 31, 12), 1)).toEqual(new Date(2026, 1, 28, 12));
        expect(addCalendarMonths(new Date(2028, 0, 31, 12), 1)).toEqual(new Date(2028, 1, 29, 12));
    });

    it('derives remaining days and lifecycle status', () => {
        const now = new Date('2026-09-11T12:00:00.000Z');

        expect(getTokenRemainingDays(new Date('2026-09-21T12:00:00.000Z'), now)).toBe(10);
        expect(getTokenLifecycleStatus(new Date('2026-09-21T12:00:00.000Z'), now)).toBe('expiring');
        expect(getTokenLifecycleStatus(new Date('2026-11-11T12:00:00.000Z'), now)).toBe('active');
        expect(getTokenLifecycleStatus(new Date('2026-09-10T12:00:00.000Z'), now)).toBe('expired');
        expect(getTokenLifecycleStatus(null, now)).toBe('unknown');
    });
});
