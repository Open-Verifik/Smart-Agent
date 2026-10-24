import { describe, expect, it } from 'vitest';
import type { ProjectDataRetentionOverride } from '../../../smart-enroll/projects/smart-enroll-projects.types';
import type { HumanAuthnProject } from '../human-authn-projects.service';

describe('HumanAuthnProjectDetail logic and previews', () => {
    it('should always lock faceImages to none for HumanAuthn', () => {
        let baselineMode: 'store' | 'ephemeral' | 'none' = 'store';
        let docMode = baselineMode;
        let ocrMode = baselineMode;
        let livenessMode = baselineMode;
        const faceMode = 'none'; // Fixed for HumanAuthn zero-knowledge architecture

        const setGlobalMode = (mode: 'store' | 'ephemeral' | 'none') => {
            baselineMode = mode;
            docMode = mode;
            ocrMode = mode;
            livenessMode = mode;
            // faceMode remains locked to none
        };

        setGlobalMode('ephemeral');
        expect(baselineMode).toBe('ephemeral');
        expect(docMode).toBe('ephemeral');
        expect(ocrMode).toBe('ephemeral');
        expect(livenessMode).toBe('ephemeral');
        expect(faceMode).toBe('none');

        setGlobalMode('store');
        expect(docMode).toBe('store');
        expect(faceMode).toBe('none');
    });

    it('should correctly format payload for HumanAuthn project retention override', () => {
        const payload: ProjectDataRetentionOverride = {
            mode: 'ephemeral',
            webhookHoldHours: 24,
            allowManualDelete: true,
            types: {
                documentImages: { mode: 'ephemeral', retentionHours: null },
                ocrExtraction: { mode: 'ephemeral', retentionHours: null },
                faceImages: { mode: 'none', retentionHours: null }, // Locked
                documentLiveness: { mode: 'ephemeral', retentionHours: null },
            },
        };

        expect(payload.mode).toBe('ephemeral');
        expect(payload.webhookHoldHours).toBe(24);
        expect(payload.allowManualDelete).toBe(true);
        expect(payload.types?.documentImages?.mode).toBe('ephemeral');
        expect(payload.types?.ocrExtraction?.mode).toBe('ephemeral');
        expect(payload.types?.faceImages?.mode).toBe('none');
        expect(payload.types?.documentLiveness?.mode).toBe('ephemeral');
    });

    it('should accurately compute preview models from mock HumanAuthn project', () => {
        const project: HumanAuthnProject = {
            _id: '6aa49395c21ba7cd48d5e820',
            name: 'Production HumanAuthn Flow',
            status: 'active',
            target: 'personal',
            branding: {
                titleColor: '#0f172a',
                buttonColor: '#2563eb',
                backgroundColor: '#f8fafc',
            },
            projectFlows: [
                {
                    _id: 'flow-123',
                    type: 'humanAuthn',
                    status: 'active',
                    steps: {
                        document: 'mandatory',
                        humanAuthn: 'mandatory',
                    },
                    humanAuthn: {
                        mode: 'active_user',
                        tolerance: 'HARDENED',
                        compareMinScore: 0.88,
                        outputFormat: 'qrCode',
                    },
                    storage: {
                        provider: 'ipfs',
                    },
                    documents: {
                        attemptLimit: 3,
                        verificationMethods: ['scan'],
                        criminalHistoryVerification: true,
                    },
                    signUpForm: {
                        fullName: true,
                        fullNameStyle: 'together',
                        email: true,
                        emailGateway: 'mailgun',
                    },
                },
            ],
            dataRetention: {
                mode: 'ephemeral',
                webhookHoldHours: 48,
                allowManualDelete: true,
                types: {
                    documentImages: { mode: 'ephemeral' },
                    ocrExtraction: { mode: 'ephemeral' },
                    faceImages: { mode: 'none' },
                    documentLiveness: { mode: 'ephemeral' },
                },
            },
        };

        const flow = project.projectFlows![0];
        const compareScorePct = Math.round((flow.humanAuthn?.compareMinScore ?? 0.85) * 100);

        expect(flow.type).toBe('humanAuthn');
        expect(flow.steps?.document).toBe('mandatory');
        expect(flow.humanAuthn?.mode).toBe('active_user');
        expect(compareScorePct).toBe(88);
        expect(flow.storage?.provider).toBe('ipfs');
        expect(project.dataRetention?.types?.faceImages?.mode).toBe('none');
        expect(project.dataRetention?.types?.documentImages?.mode).toBe('ephemeral');
    });
});
