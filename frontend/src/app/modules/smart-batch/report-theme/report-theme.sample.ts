import type { ScoreSettings, VerificationScoreModel } from './report-theme.model';
import { decisionForScore, formatRatioPercent } from './report-theme.format';

/**
 * Synthetic Cabify Chile driver. Names and document numbers are fake.
 * The shape matches the score block the backend will fill on a live run.
 */
export const syntheticVerificationScore = (profile: string, language: 'en' | 'es' = 'es'): VerificationScoreModel => {
    const value = 0.89;
    return {
        profile,
        rulesVersion: '1.1.0',
        value,
        decision: decisionForScore(value),
        coverage: 1,
        confidence: 'high',
        checkCount: 13,
        reviewCount: 2,
        subjectName: 'Valentina Prueba Soto',
        documentLabel: 'RUN',
        documentMasked: '••••78-5',
        plate: 'ZZTT99',
        licenseClass: 'B',
        faceMatch: 0.93,
        reportNumber: 'SR-2611-0413',
        issuedLabel: language === 'en' ? 'Nov 9, 2026, 15:42 CLT' : '9 nov 2026, 15:42 CLT',
        verificationCode: 'VK-3HPL-91KC',
        weightedAverage: 0.93,
        deductions: 0.072,
        categories: [
            { id: 'background', labelKey: 'reportTheme.sample.catBackground', score: 1, weight: 0.25 },
            { id: 'driving', labelKey: 'reportTheme.sample.catDriving', score: 0.95, weight: 0.25 },
            { id: 'identity', labelKey: 'reportTheme.sample.catIdentity', score: 1, weight: 0.15 },
            { id: 'biometrics', labelKey: 'reportTheme.sample.catBiometrics', score: 1, weight: 0.15 },
            { id: 'lists', labelKey: 'reportTheme.sample.catLists', score: 0.7, weight: 0.1 },
            { id: 'vehicle', labelKey: 'reportTheme.sample.catVehicle', score: 0.7, weight: 0.1 },
        ],
        checks: [
            {
                id: 'identity',
                labelKey: 'reportTheme.sample.catIdentity',
                status: 'clear',
                score: 1,
                deduction: 0,
                fields: [
                    { labelKey: 'reportTheme.sample.fieldDocument', value: 'Vigente' },
                    { labelKey: 'reportTheme.sample.fieldName', value: 'Valentina Prueba Soto' },
                    { labelKey: 'reportTheme.sample.fieldFace', value: formatRatioPercent(0.93) },
                ],
                noteKey: 'reportTheme.sample.noteIdentity',
            },
            {
                id: 'background',
                labelKey: 'reportTheme.sample.catBackground',
                status: 'clear',
                score: 1,
                deduction: 0,
                fields: [{ labelKey: 'reportTheme.sample.fieldRecords', value: '0' }],
                noteKey: 'reportTheme.sample.noteBackground',
            },
            {
                id: 'driving',
                labelKey: 'reportTheme.sample.catDriving',
                status: 'review',
                score: 0.95,
                deduction: 0.012,
                fields: [
                    { labelKey: 'reportTheme.sample.fieldClass', value: 'B' },
                    { labelKey: 'reportTheme.sample.fieldValidUntil', value: '03/2031' },
                    { labelKey: 'reportTheme.sample.fieldRestriction', value: language === 'en' ? 'Corrective lenses' : 'Uso de lentes' },
                ],
                noteKey: 'reportTheme.sample.noteLicense',
            },
            {
                id: 'biometrics',
                labelKey: 'reportTheme.sample.catBiometrics',
                status: 'clear',
                score: 1,
                deduction: 0,
                fields: [{ labelKey: 'reportTheme.sample.fieldLiveness', value: language === 'en' ? 'Passed' : 'Aprobada' }],
            },
            {
                id: 'lists',
                labelKey: 'reportTheme.sample.catLists',
                status: 'review',
                score: 0.7,
                deduction: 0.03,
                fields: [{ labelKey: 'reportTheme.sample.fieldMatch', value: language === 'en' ? 'Name only' : 'Solo nombre' }],
                noteKey: 'reportTheme.sample.noteLists',
            },
            {
                id: 'vehicle',
                labelKey: 'reportTheme.sample.catVehicle',
                status: 'review',
                score: 0.7,
                deduction: 0.03,
                fields: [
                    { labelKey: 'reportTheme.sample.fieldPlate', value: 'ZZTT99' },
                    { labelKey: 'reportTheme.sample.fieldInsurance', value: language === 'en' ? 'Expired 31 Oct 2026' : 'Venció el 31/10/2026' },
                ],
                noteKey: 'reportTheme.sample.noteVehicle',
            },
        ],
        findings: [
            {
                tone: 'warning',
                titleKey: 'reportTheme.sample.findingListsTitle',
                detailKey: 'reportTheme.sample.findingListsDetail',
            },
            {
                tone: 'warning',
                titleKey: 'reportTheme.sample.findingInsuranceTitle',
                detailKey: 'reportTheme.sample.findingInsuranceDetail',
            },
            {
                tone: 'success',
                titleKey: 'reportTheme.sample.findingIdentityTitle',
                detailKey: 'reportTheme.sample.findingIdentityDetail',
            },
        ],
        sources: [
            { nameKey: 'reportTheme.sample.sourceRegistry', status: 'ok', reference: 'SRCeI', consultedAt: '15:41' },
            { nameKey: 'reportTheme.sample.sourceLicense', status: 'ok', reference: 'SRCeI licencia', consultedAt: '15:41' },
            { nameKey: 'reportTheme.sample.sourceLists', status: 'ok', reference: 'INT-LIST-04', consultedAt: '15:42' },
            { nameKey: 'reportTheme.sample.sourceInsurance', status: 'ok', reference: 'SOAP', consultedAt: '15:42' },
            { nameKey: 'reportTheme.sample.sourceVehicle', status: 'empty', reference: 'RVM', consultedAt: '15:42' },
        ],
    };
};

/** Keep a live score. Fill the synthetic sample only when the toggle is on and nothing arrived. */
export const ensureVerificationSample = <T extends { verificationScore?: VerificationScoreModel }>(
    sample: T,
    settings: ScoreSettings | null | undefined,
    language: 'en' | 'es' = 'es'
): T => {
    if (!settings?.enabled) return sample;
    if (sample.verificationScore && typeof sample.verificationScore === 'object') return sample;
    return { ...sample, verificationScore: syntheticVerificationScore(settings.profile, language) };
};
