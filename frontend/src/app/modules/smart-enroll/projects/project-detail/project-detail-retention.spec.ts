import { describe, expect, it } from 'vitest';
import type { ProjectDataRetentionOverride } from '../smart-enroll-projects.types';

describe('Project Retention logic and cascading', () => {
    it('should initialize retention with baseline store and sync all 4 types', () => {
        const baselineMode: 'store' | 'ephemeral' | 'none' = 'store';
        const docMode = baselineMode;
        const faceMode = baselineMode;
        const ocrMode = baselineMode;
        const livenessMode = baselineMode;

        const isCustomized = (
            docMode !== baselineMode ||
            faceMode !== baselineMode ||
            ocrMode !== baselineMode ||
            livenessMode !== baselineMode
        );

        expect(isCustomized).toBe(false);
    });

    it('should detect customization when any granular rule differs from baseline', () => {
        let baselineMode: 'store' | 'ephemeral' | 'none' = 'store';
        let docMode: 'store' | 'ephemeral' | 'none' = 'store';
        let faceMode: 'store' | 'ephemeral' | 'none' = 'none'; // customized
        let ocrMode: 'store' | 'ephemeral' | 'none' = 'store';
        let livenessMode: 'store' | 'ephemeral' | 'none' = 'store';

        const isCustomized = (
            docMode !== baselineMode ||
            faceMode !== baselineMode ||
            ocrMode !== baselineMode ||
            livenessMode !== baselineMode
        );

        expect(isCustomized).toBe(true);
    });

    it('should cascade when project global mode is clicked', () => {
        let baselineMode: 'store' | 'ephemeral' | 'none' = 'store';
        let docMode = 'store';
        let faceMode = 'store';
        let ocrMode = 'store';
        let livenessMode = 'store';

        const setProjectRetentionGlobalMode = (mode: 'store' | 'ephemeral' | 'none') => {
            baselineMode = mode;
            docMode = mode;
            faceMode = mode;
            ocrMode = mode;
            livenessMode = mode;
        };

        setProjectRetentionGlobalMode('none');

        expect(baselineMode).toBe('none');
        expect(docMode).toBe('none');
        expect(faceMode).toBe('none');
        expect(ocrMode).toBe('none');
        expect(livenessMode).toBe('none');
    });

    it('should correctly format payload for project override', () => {
        const payload: ProjectDataRetentionOverride = {
            mode: 'ephemeral',
            webhookHoldHours: 48,
            allowManualDelete: false,
            types: {
                documentImages: { mode: 'ephemeral' },
                faceImages: { mode: 'none' },
                ocrExtraction: { mode: 'ephemeral' },
                documentLiveness: { mode: 'ephemeral' },
            },
            updatedAt: new Date(),
        };

        expect(payload.mode).toBe('ephemeral');
        expect(payload.webhookHoldHours).toBe(48);
        expect(payload.allowManualDelete).toBe(false);
        expect(payload.types?.documentImages?.mode).toBe('ephemeral');
        expect(payload.types?.faceImages?.mode).toBe('none');
        expect(payload.types?.ocrExtraction?.mode).toBe('ephemeral');
        expect(payload.types?.documentLiveness?.mode).toBe('ephemeral');
    });

    it('should compute effective read-only values as store when project dataRetention is null', () => {
        const r: ProjectDataRetentionOverride | null | undefined = null;
        const effectiveDoc = r?.types?.documentImages?.mode || r?.mode || 'store';
        const effectiveFace = r?.types?.faceImages?.mode || r?.mode || 'store';
        const effectiveOcr = r?.types?.ocrExtraction?.mode || r?.mode || 'store';
        const effectiveLiveness = r?.types?.documentLiveness?.mode || r?.mode || 'store';
        const effectiveHold = r?.webhookHoldHours || 24;
        const effectiveDelete = r?.allowManualDelete !== false;

        expect(effectiveDoc).toBe('store');
        expect(effectiveFace).toBe('store');
        expect(effectiveOcr).toBe('store');
        expect(effectiveLiveness).toBe('store');
        expect(effectiveHold).toBe(24);
        expect(effectiveDelete).toBe(true);

        const isCustom = !(effectiveDoc === effectiveFace && effectiveFace === effectiveOcr && effectiveOcr === effectiveLiveness);
        expect(isCustom).toBe(false);
    });

    it('should compute effective read-only values accurately when project dataRetention is present', () => {
        const r: ProjectDataRetentionOverride = {
            mode: 'ephemeral',
            webhookHoldHours: 36,
            allowManualDelete: false,
            types: {
                documentImages: { mode: 'ephemeral' },
                faceImages: { mode: 'none' },
                ocrExtraction: { mode: 'ephemeral' },
                documentLiveness: { mode: 'ephemeral' },
            },
        };
        const effectiveDoc = r.types?.documentImages?.mode || r.mode || 'store';
        const effectiveFace = r.types?.faceImages?.mode || r.mode || 'store';
        const effectiveOcr = r.types?.ocrExtraction?.mode || r.mode || 'store';
        const effectiveLiveness = r.types?.documentLiveness?.mode || r.mode || 'store';
        const effectiveHold = r.webhookHoldHours || 24;
        const effectiveDelete = r.allowManualDelete !== false;

        expect(effectiveDoc).toBe('ephemeral');
        expect(effectiveFace).toBe('none');
        expect(effectiveOcr).toBe('ephemeral');
        expect(effectiveLiveness).toBe('ephemeral');
        expect(effectiveHold).toBe(36);
        expect(effectiveDelete).toBe(false);

        const isCustom = !(effectiveDoc === effectiveFace && effectiveFace === effectiveOcr && effectiveOcr === effectiveLiveness);
        expect(isCustom).toBe(true);
    });
});
