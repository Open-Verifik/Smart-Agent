import { describe, expect, it } from 'vitest';
import { CORE_TYPES } from './retention.model';
import {
    buildProjectRetentionOverride,
    clampWebhookHoldHours,
    computeAllSameMode,
    computeIsCustomized,
    defaultRetentionPolicy,
    faceImagesBlockCompare,
    getRetentionModeLabel,
    mapTypes,
    policyFromStored,
    setTypeRule,
    syncGlobalToGranular,
} from './retention.util';

describe('retention utils', () => {
    it('cascades a baseline mode across the single CORE_TYPES list', () => {
        const updated = syncGlobalToGranular(defaultRetentionPolicy(), 'ephemeral');
        expect(CORE_TYPES).toEqual(['documentImages', 'ocrExtraction', 'faceImages']);
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
        expect(faceImagesBlockCompare(policy)).toBe(true);
    });

    it('clamps the webhook hold to 24-72', () => {
        expect(clampWebhookHoldHours(1)).toBe(24);
        expect(clampWebhookHoldHours(48)).toBe(48);
        expect(clampWebhookHoldHours(720)).toBe(72);
        expect(clampWebhookHoldHours('nope')).toBe(24);
    });

    it('reads stored policy without unenforced types or a face-image lock', () => {
        const policy = policyFromStored({
            mode: 'store',
            webhookHoldHours: 3,
            allowManualDelete: true,
            types: {
                documentImages: { mode: 'store', retentionHours: 48 },
                faceImages: { mode: 'ephemeral' },
                documentLiveness: { mode: 'none' },
                webhookPayloads: { mode: 'none' },
            },
        });
        expect(policy?.webhookHoldHours).toBe(24);
        expect(policy?.types.faceImages.mode).toBe('ephemeral');
        expect(policy?.types.ocrExtraction.mode).toBe('store');
        expect((policy as { types: Record<string, unknown> }).types['documentLiveness']).toBeUndefined();
        const override = buildProjectRetentionOverride(policy);
        expect(override?.allowManualDelete).toBeUndefined();
        expect(override?.types && 'documentLiveness' in override.types).toBe(false);
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
