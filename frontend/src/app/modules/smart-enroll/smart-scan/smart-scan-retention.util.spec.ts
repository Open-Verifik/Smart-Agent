import { describe, expect, it } from 'vitest';
import {
    isPurged,
    isNoStorage,
    isEphemeral,
    canDeleteFromStorage,
    getRetentionBadge,
} from './smart-scan-retention.util';
import type { DocumentValidationRetention } from './smart-scan.types';

describe('smart-scan-retention.util', () => {
    describe('isPurged', () => {
        it('should return true when purgedAt is set', () => {
            const retention: DocumentValidationRetention = {
                mode: 'store',
                purgedAt: '2026-10-23T12:00:00.000Z',
            };
            expect(isPurged(retention)).toBe(true);
        });

        it('should return false when purgedAt is null or undefined', () => {
            expect(isPurged({ mode: 'store', purgedAt: null })).toBe(false);
            expect(isPurged(undefined)).toBe(false);
            expect(isPurged(null)).toBe(false);
        });
    });

    describe('isNoStorage', () => {
        it('should return true when mode is none and purgedAt is not set', () => {
            expect(isNoStorage({ mode: 'none' })).toBe(true);
            expect(isNoStorage({ mode: 'none', purgedAt: null })).toBe(true);
        });

        it('should return false when mode is none but purgedAt is already set', () => {
            expect(isNoStorage({ mode: 'none', purgedAt: '2026-10-23T12:00:00Z' })).toBe(false);
        });

        it('should return false when mode is store or ephemeral', () => {
            expect(isNoStorage({ mode: 'store' })).toBe(false);
            expect(isNoStorage({ mode: 'ephemeral' })).toBe(false);
        });
    });

    describe('isEphemeral', () => {
        it('should return true when mode is ephemeral and not yet purged', () => {
            expect(isEphemeral({ mode: 'ephemeral' })).toBe(true);
            expect(isEphemeral({ mode: 'ephemeral', purgedAt: null })).toBe(true);
        });

        it('should return false when purgedAt is set', () => {
            expect(isEphemeral({ mode: 'ephemeral', purgedAt: '2026-10-23T12:00:00Z' })).toBe(false);
        });

        it('should return false for store or none', () => {
            expect(isEphemeral({ mode: 'store' })).toBe(false);
            expect(isEphemeral({ mode: 'none' })).toBe(false);
        });
    });

    describe('canDeleteFromStorage', () => {
        it('should return true when url exists and record is not purged', () => {
            expect(canDeleteFromStorage(true, { mode: 'store' })).toBe(true);
            expect(canDeleteFromStorage(true, null)).toBe(true);
        });

        it('should return false when url is missing or already purged', () => {
            expect(canDeleteFromStorage(false, { mode: 'store' })).toBe(false);
            expect(canDeleteFromStorage(true, { mode: 'store', purgedAt: '2026-10-23T12:00:00Z' })).toBe(false);
        });
    });

    describe('getRetentionBadge', () => {
        it('should return purged badge when purgedAt is present', () => {
            const badge = getRetentionBadge({ mode: 'none', purgedAt: '2026-10-23T12:00:00Z' });
            expect(badge).not.toBeNull();
            expect(badge?.label).toBe('smartScan.retentionPurged');
            expect(badge?.icon).toBe('heroicons_outline:shield-check');
        });

        it('should return no-storage badge when mode is none', () => {
            const badge = getRetentionBadge({ mode: 'none' });
            expect(badge).not.toBeNull();
            expect(badge?.label).toBe('smartScan.retentionNoStorage');
            expect(badge?.icon).toBe('heroicons_outline:shield-exclamation');
        });

        it('should return ephemeral badge when mode is ephemeral', () => {
            const badge = getRetentionBadge({ mode: 'ephemeral' });
            expect(badge).not.toBeNull();
            expect(badge?.label).toBe('smartScan.retentionEphemeral');
            expect(badge?.icon).toBe('heroicons_outline:clock');
        });

        it('should return null for standard store without retention metadata', () => {
            expect(getRetentionBadge({ mode: 'store' })).toBeNull();
            expect(getRetentionBadge(null)).toBeNull();
        });
    });
});
