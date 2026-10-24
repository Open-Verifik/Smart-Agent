import { describe, expect, it } from 'vitest';
import { CORE_TYPES } from './retention.model';
import {
    buildProjectRetentionOverride,
    clampWebhookHoldHours,
    computeAllSameMode,
    computeIsCustomized,
    defaultRetentionPolicy,
    faceImagesHeldUntilHold,
    getRetentionModeLabel,
    mapTypes,
    policyFromStored,
    setTypeRule,
    syncGlobalToGranular,
} from './retention.util';

describe('retention utils', () => {
    it('cascades a baseline mode across the single CORE_TYPES list', () => {
        const updated = syncGlobalToGranular(defaultRetentionPolicy(), 'ephemeral');
        expect(CORE_TYPES).toEqual(['documentImages', 'ocrExtraction', 'faceImages', 'documentLiveness']);
        expect(updated.mode).toBe('ephemeral');
        for (const type of CORE_TYPES) {
            expect(updated.types[type].mode).toBe('ephemeral');
            expect(updated.types[type].retentionHours).toBeNull();
        }
        expect(computeIsCustomized(updated)).toBe(false);
        expect(computeAllSameMode(updated)).toBe('ephemeral');
    });

    it('keeps store hours and drops them for other modes', () => {
        let policy = syncGlobalToGranular(defaultRetentionPolicy(), 'store');
        policy = setTypeRule(policy, 'documentImages', { mode: 'store', retentionHours: 168 });
        policy = setTypeRule(policy, 'faceImages', { mode: 'none', retentionHours: 5 });
        expect(policy.types.documentImages.retentionHours).toBe(168);
        expect(policy.types.faceImages).toEqual({ mode: 'none', retentionHours: null });
        expect(computeIsCustomized(policy)).toBe(true);
        expect(faceImagesHeldUntilHold(policy)).toBe(true);
    });

    it('clamps the webhook hold to 24-72', () => {
        expect(clampWebhookHoldHours(1)).toBe(24);
        expect(clampWebhookHoldHours(48)).toBe(48);
        expect(clampWebhookHoldHours(720)).toBe(72);
        expect(clampWebhookHoldHours('nope')).toBe(24);
    });

    it('keeps document liveness and manual erase, and drops rejected types', () => {
        const policy = policyFromStored({
            mode: 'store',
            webhookHoldHours: 3,
            allowManualDelete: false,
            types: {
                documentImages: { mode: 'store', retentionHours: 48 },
                faceImages: { mode: 'none' },
                documentLiveness: { mode: 'none' },
                livenessResults: { mode: 'none' },
                apiResponseLogs: { mode: 'store' },
                webhookPayloads: { mode: 'none' },
            },
        });
        expect(policy?.webhookHoldHours).toBe(24);
        expect(policy?.allowManualDelete).toBe(false);
        expect(policy?.types.faceImages.mode).toBe('none');
        expect(policy?.types.documentLiveness.mode).toBe('none');
        expect(policy?.types && 'livenessResults' in policy.types).toBe(false);
        expect(policy?.types && 'apiResponseLogs' in policy.types).toBe(false);
        const override = buildProjectRetentionOverride(policy);
        expect(override?.allowManualDelete).toBe(false);
        expect(override?.types?.documentLiveness).toEqual({ mode: 'none', retentionHours: null });
        expect(override?.types && 'livenessResults' in override.types).toBe(false);
        expect(override?.types && 'apiResponseLogs' in override.types).toBe(false);
        expect(override?.types && 'webhookPayloads' in override.types).toBe(false);
    });

    it('uses one label helper', () => {
        const translate = (key: string) => key;
        expect(getRetentionModeLabel(translate, 'none')).toBe('settings.dataRetention.modeNone');
        expect(getRetentionModeLabel(translate, null)).toBe('smartEnrollProjects.detail.retention.accountDefault');
    });

    it('mapTypes visits each enforced type once', () => {
        const seen: string[] = [];
        mapTypes(defaultRetentionPolicy(), (type) => {
            seen.push(type);
            return type;
        });
        expect(seen).toEqual([...CORE_TYPES]);
    });
});
