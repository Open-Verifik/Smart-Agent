import { describe, expect, it } from 'vitest';
import {
    buildFailedBiometricAttempts,
    buildManualVerificationReasons,
    canRerunCompare,
    documentFaceReasonKey,
    documentFailureReasonKey,
    livenessAttemptUsage,
    livenessScoreBand,
    nameVerificationSkip,
    resolveCompareStatus,
    resolveOtpStepState,
} from './app-registration-record.utils';
import type { AppRegistrationDetail } from './smart-enroll-projects.types';

/**
 * The shapes below are the two WIWO records cloned into the local project, trimmed to the fields
 * these helpers read. Both are exactly what the reviewer opens in Smart-Agent:
 * `6a85e2b47ff9830814270deb` finished the flow and landed in manual review with no compare, and
 * `6a85cb4fd0af44d39ab23778` abandoned at the document step after one liveness rejection.
 */
const flow = {
    signUpForm: { email: true, emailGateway: 'mailgun', phone: true, phoneGateway: 'both' },
    steps: { document: 'mandatory', liveness: 'mandatory' },
    liveness: { attemptLimit: 3, compareMinScore: 0.85, minScore: 0.65 },
};

const endStateRecord = {
    status: 'NEEDS_MANUAL_VERIFICATION',
    currentStep: 'end',
    email: 'luiscrr123@gmail.com',
    phone: '3014522344',
    projectFlow: flow,
    documentValidation: {
        status: 'ACTIVE_BUT_UNVERIFIED',
        documentType: 'Unknown',
        country: 'REPÚBLICA DE COLOMBIA',
        documentCategory: 'ID',
        infoValidationSupported: true,
        namesMatch: false,
        fullNameMatchPercentage: 0,
        scoreValidated: false,
    },
    biometricValidation: { status: 'validated', livenessScore: 0.76 },
    failedBiometricValidations: [],
    failedDocumentValidations: [],
} as unknown as AppRegistrationDetail;

const abandonedRecord = {
    status: 'ONGOING',
    currentStep: 'document',
    email: 'ardilak914@gmail.com',
    phone: '3227701930',
    projectFlow: flow,
    documentValidation: { status: 'ACTIVE_BUT_UNVERIFIED', documentType: 'Unknown', documentCategory: 'ID' },
    failedBiometricValidations: [{ status: 'failed', livenessScore: 0 }],
    failedDocumentValidations: [],
} as unknown as AppRegistrationDetail;

describe('the cloned end-state record', () => {
    it('reports the compare as never having had a document face, not as a failure', () => {
        expect(resolveCompareStatus(endStateRecord)).toBe('missingDocumentFace');
        expect(canRerunCompare(endStateRecord)).toBe(true);
    });

    it('names the missing compare as the reason it sits in manual review', () => {
        const keys = buildManualVerificationReasons(endStateRecord).map((reason) => reason.key);

        expect(keys).toContain('smartEnrollProjects.recordDetail.manualReason.compareNoDocumentFace');
        // The 0% name match is not a measured mismatch, so it must not be listed as a reason.
        expect(keys).not.toContain('smartEnrollProjects.recordDetail.manualReason.namesMismatch');
    });

    it('explains the unrun name lookup even though the scan stored no reason', () => {
        const skip = nameVerificationSkip(endStateRecord);

        expect(skip?.key).toBe('smartEnrollProjects.recordDetail.nameMatchReason.document_type_not_detected');
        expect(skip?.params.type).toBe('Unknown');
    });

    it('warns on email and phone, because this flow does configure both gateways', () => {
        expect(resolveOtpStepState(endStateRecord, 'email')).toBe('warn');
        expect(resolveOtpStepState(endStateRecord, 'phone')).toBe('warn');
    });

    it('says nothing about why the portrait is missing until the scan records a reason', () => {
        expect(documentFaceReasonKey(endStateRecord)).toBeNull();
    });
});

describe('a scan posted without a cropped portrait', () => {
    it('reads back as an integration that never sent one', () => {
        const record = {
            documentValidation: { documentFaceReason: 'document_face_not_provided' },
        } as unknown as AppRegistrationDetail;

        expect(documentFaceReasonKey(record)).toBe(
            'smartEnrollProjects.recordDetail.documentFaceReason.document_face_not_provided'
        );
    });

    it('ignores a reason with no copy behind it, rather than showing a bare code', () => {
        const record = {
            documentValidation: { documentFaceReason: 'something_new' },
        } as unknown as AppRegistrationDetail;

        expect(documentFaceReasonKey(record)).toBeNull();
        expect(documentFaceReasonKey(null)).toBeNull();
    });
});

describe('the cloned abandoned record', () => {
    it('holds the compare off entirely, since no selfie was ever accepted', () => {
        expect(resolveCompareStatus(abandonedRecord)).toBe('notApplicable');
        expect(canRerunCompare(abandonedRecord)).toBe(false);
    });

    it('reads the reasonless rejection as a far miss that spent one of three attempts', () => {
        const [attempt] = buildFailedBiometricAttempts(abandonedRecord);

        expect(attempt.reasonKey).toBe('liveness_error');
        expect(attempt.scorePercent).toBe(0);
        expect(attempt.scoreBand).toBe('farMiss');
        expect(attempt.consumedAttempt).toBe(true);
        expect(livenessAttemptUsage(abandonedRecord)).toEqual({ used: 1, limit: 3, captures: 1 });
    });
});

describe('a flow that collects without verifying', () => {
    it('reads a value on a "none" gateway as collected rather than as a warning', () => {
        const record = {
            email: 'someone@example.com',
            phone: '3001234567',
            projectFlow: { signUpForm: { email: true, emailGateway: 'none', phone: false, phoneGateway: 'none' } },
        } as unknown as AppRegistrationDetail;

        expect(resolveOtpStepState(record, 'email')).toBe('info');
        expect(resolveOtpStepState(record, 'phone')).toBe('info');
    });

    it('still shows green once an OTP actually completed', () => {
        const record = {
            email: 'someone@example.com',
            emailValidation: { status: 'validated' },
            projectFlow: { signUpForm: { emailGateway: 'mailgun' } },
        } as unknown as AppRegistrationDetail;

        expect(resolveOtpStepState(record, 'email')).toBe('ok');
    });

    it('leaves a channel the record has nothing for alone', () => {
        expect(resolveOtpStepState({ projectFlow: flow } as unknown as AppRegistrationDetail, 'phone')).toBe('pending');
    });
});

describe('documentFailureReasonKey', () => {
    it('strips the status prefix off the reason the 80 failed scans carry', () => {
        expect(documentFailureReasonKey('409:document_number_is_not_extracted')).toBe('document_number_is_not_extracted');
    });

    it('falls back rather than rendering an unrecognised or missing value verbatim', () => {
        expect(documentFailureReasonKey('409:some_new_backend_reason')).toBe('scan_failed');
        expect(documentFailureReasonKey(null)).toBe('unspecified');
        expect(documentFailureReasonKey('  ')).toBe('unspecified');
    });
});

describe('livenessScoreBand', () => {
    it('separates a capture that nearly passed from one that looks like a screen', () => {
        expect(livenessScoreBand(58, 65)).toBe('nearMiss');
        expect(livenessScoreBand(12, 65)).toBe('farMiss');
    });

    it('gives no band when either number is unknown', () => {
        expect(livenessScoreBand(null, 65)).toBeNull();
        expect(livenessScoreBand(58, null)).toBeNull();
    });
});
