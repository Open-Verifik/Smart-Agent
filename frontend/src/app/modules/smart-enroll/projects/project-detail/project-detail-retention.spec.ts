import { describe, expect, it } from 'vitest';
import { buildProjectRetentionOverride, defaultRetentionPolicy, policyFromStored, syncGlobalToGranular } from '../../../../core/data-retention/retention.util';

describe('Project retention override payload', () => {
    it('writes only enforced types and clamps the webhook hold', () => {
        const policy = syncGlobalToGranular(defaultRetentionPolicy(), 'ephemeral');
        policy.webhookHoldHours = 3;
        policy.types.documentImages = { mode: 'store', retentionHours: 48 };
        const payload = buildProjectRetentionOverride(policy);
        expect(payload?.mode).toBe('ephemeral');
        expect(payload?.webhookHoldHours).toBe(24);
        expect(payload?.allowManualDelete).toBeUndefined();
        expect(payload?.types?.documentImages).toEqual({ mode: 'store', retentionHours: 48 });
        expect(payload?.types?.faceImages.mode).toBe('ephemeral');
        expect(payload?.types && 'documentLiveness' in payload.types).toBe(false);
    });

    it('treats a missing project override as inheriting, not as a locked face mode', () => {
        expect(policyFromStored(null)).toBeNull();
        const stored = policyFromStored({
            mode: 'store',
            types: { faceImages: { mode: 'ephemeral', retentionHours: null } },
        });
        expect(stored?.types.faceImages.mode).toBe('ephemeral');
    });
});
