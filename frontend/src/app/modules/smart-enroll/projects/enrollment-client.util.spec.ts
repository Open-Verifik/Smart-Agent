import { describe, expect, it } from 'vitest';
import {
    enrollmentSegment,
    liveEnrollmentPath,
    readEnrollmentClient,
    readVerifyStyle,
    VERIFY_STYLE_LABELS,
} from './enrollment-client.util';
import type { EnrollProject, EnrollProjectFlow } from './smart-enroll-projects.types';

describe('enrollment-client.util', () => {
    it('reads verifyStyle correctly', () => {
        expect(readVerifyStyle({ onboardingSettings: { verifyStyle: 'f' } })).toBe('f');
        expect(readVerifyStyle({ onboardingSettings: { verifyStyle: 'a' } })).toBe('a');
        expect(readVerifyStyle({ onboardingSettings: { verifyStyle: 'invalid' } })).toBe('');
        expect(readVerifyStyle(null)).toBe('');
    });

    it('identifies v2 vs legacy client from flow settings', () => {
        expect(readEnrollmentClient({ onboardingSettings: { verifyStyle: 'f' } })).toBe('v2');
        expect(readEnrollmentClient({ onboardingSettings: { enrollmentClient: 'v2' } })).toBe('v2');
        expect(readEnrollmentClient({ onboardingSettings: null })).toBe('legacy');
        expect(readEnrollmentClient(null)).toBe('legacy');
    });

    it('maps enrollmentSegment to verify for v2 and sign-up for legacy', () => {
        expect(enrollmentSegment('v2')).toBe('verify');
        expect(enrollmentSegment('legacy')).toBe('sign-up');
    });

    it('builds liveEnrollmentPath based on onboardingSettings', () => {
        const project: EnrollProject = { _id: '69ebc89c87b68132727094c8', name: 'WIWO KYC' };
        const v2Flow: EnrollProjectFlow = {
            _id: '6a69229069195fc1dbc8f3c1',
            status: 'active',
            type: 'onboarding',
            onboardingSettings: { verifyStyle: 'f' },
        };
        const legacyFlow: EnrollProjectFlow = {
            _id: '69ebc96440e7cee769ccb818',
            status: 'active',
            type: 'login',
        };

        expect(liveEnrollmentPath(project, v2Flow)).toBe('/verify/69ebc89c87b68132727094c8');
        expect(liveEnrollmentPath(project, legacyFlow)).toBe('/sign-up/69ebc89c87b68132727094c8');
    });

    it('has English and Spanish labels for all 6 styles', () => {
        expect(VERIFY_STYLE_LABELS['f']).toEqual({ en: 'Notebook', es: 'Cuaderno' });
        expect(VERIFY_STYLE_LABELS['a']).toEqual({ en: 'Forest', es: 'Bosque' });
        expect(VERIFY_STYLE_LABELS['b']).toEqual({ en: 'Editorial', es: 'Editorial' });
        expect(VERIFY_STYLE_LABELS['c']).toEqual({ en: 'Paper', es: 'Papel' });
        expect(VERIFY_STYLE_LABELS['d']).toEqual({ en: 'Vault', es: 'Bóveda' });
        expect(VERIFY_STYLE_LABELS['e']).toEqual({ en: 'Porcelain', es: 'Porcelana' });
    });
});

