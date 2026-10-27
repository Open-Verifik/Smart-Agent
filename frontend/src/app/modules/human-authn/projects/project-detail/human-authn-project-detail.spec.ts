import { describe, expect, it } from 'vitest';
import { buildProjectRetentionOverride, defaultRetentionPolicy, policyFromStored, setTypeRule } from '../../../../core/data-retention/retention.util';
import type { HumanAuthnProject } from '../human-authn-projects.service';

describe('Human Auth retention override', () => {
    it('does not force face images to none', () => {
        const policy = setTypeRule(defaultRetentionPolicy(), 'faceImages', { mode: 'store', retentionHours: null });
        const payload = buildProjectRetentionOverride(policy);
        expect(payload?.types?.faceImages.mode).toBe('store');
        expect(payload?.types?.faceImages.mode).not.toBe('none');
    });

    it('keeps a saved ephemeral face mode so comparison can run during the hold', () => {
        const stored = policyFromStored({
            mode: 'ephemeral',
            webhookHoldHours: 48,
            types: {
                documentImages: { mode: 'ephemeral' },
                ocrExtraction: { mode: 'ephemeral' },
                faceImages: { mode: 'ephemeral' },
            },
        });
        expect(stored?.types.faceImages.mode).toBe('ephemeral');
        expect(stored?.webhookHoldHours).toBe(48);
    });

    it('still reads the rest of a Human Auth project preview', () => {
        const project: HumanAuthnProject = {
            _id: '6aa49395c21ba7cd48d5e820',
            name: 'Production Human Auth flow',
            status: 'active',
            target: 'personal',
            projectFlows: [
                {
                    type: 'humanAuthn',
                    status: 'active',
                    steps: { document: 'mandatory', humanAuthn: 'mandatory' },
                    humanAuthn: { mode: 'active_user', compareMinScore: 0.88 },
                    storage: { provider: 'ipfs' },
                },
            ],
        };
        const flow = project.projectFlows![0];
        expect(Math.round((flow.humanAuthn?.compareMinScore ?? 0) * 100)).toBe(88);
        expect(policyFromStored(project.dataRetention)).toBeNull();
    });
});
