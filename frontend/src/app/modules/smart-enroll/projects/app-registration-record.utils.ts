import type { AppRegistrationDetail, AppRegistrationRow, EnrollProject } from './smart-enroll-projects.types';

export type FaceMediaRef = { base64?: string; url?: string };

/**
 * Selfie source for list/detail: top-level `face` then `biometricValidation.face`.
 */
export const pickEnrollmentFaceMedia = (
    r: AppRegistrationRow | AppRegistrationDetail | null | undefined
): FaceMediaRef | null => {
    if (!r) return null;
    const top = r.face as FaceMediaRef | null | undefined;
    if (top && (top.base64 || top.url)) return top;
    const nested = r.biometricValidation?.face;
    if (nested && typeof nested === 'object' && (nested.base64 || nested.url)) return nested;
    return null;
};

export const ORDER_OCR_BY: Record<string, number> = {
    Address: 15,
    Age: 13,
    'Date Of Birth': 12,
    'Document Number': 17,
    'Document Type': 16,
    'First Last Name MRZ': 22,
    'First Name': 27,
    'First Name MRZ': 26,
    'Full Name': 90,
    'Last Name': 24,
    'Middle Name': 25,
    'Name 1': 31,
    'Name 2': 30,
    'Name 3': 29,
    'Second Last Name': 23,
    'Second Last Name MRZ': 23,
};

/**
 * Mutates a shallow copy of OCRExtraction keys to spaced labels; returns sorted display keys.
 */
export const cleanOcrExtraction = (ocr: Record<string, unknown> | null | undefined): string[] => {
    if (!ocr || typeof ocr !== 'object') return [];

    Object.keys(ocr).forEach((key) => {
        const camelCaseKey = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (char) => char.toUpperCase());
        if (ocr[key] != null && camelCaseKey !== key) {
            (ocr as Record<string, unknown>)[camelCaseKey] = ocr[key];
            delete (ocr as Record<string, unknown>)[key];
        }
    });

    return Object.keys(ocr).sort((a, b) => (ORDER_OCR_BY[b] || 1) - (ORDER_OCR_BY[a] || 1));
};

export const normalizeUnitScore = (value: number | string | null | undefined): number => {
    const n = Number(value);
    if (!Number.isFinite(n)) return 0;
    return n > 1 ? n / 100 : n;
};

export const scoreToPercent = (score: number | string | null | undefined): number => {
    const n = Number(score);
    if (!Number.isFinite(n)) return 0;
    return Math.round(n * 100);
};

export type ManualVerificationReason = { key: string; params?: Record<string, unknown> };

/** Face-compare threshold from project flow (v3: liveness.compareMinScore; v2: onboardingSettings.document.compareMinScore). */
export const resolveCompareMinScoreUnit = (record: AppRegistrationDetail | null): number => {
    if (!record) return 0.85;
    const pf = record.projectFlow;
    return (
        (pf?.liveness as { compareMinScore?: number } | undefined)?.compareMinScore ??
        (pf?.onboardingSettings as { document?: { compareMinScore?: number } } | undefined)?.document?.compareMinScore ??
        0.85
    );
};

/**
 * Display % for the compare minimum: stored `compare_min_score` at verification time, else resolved flow default.
 * `null` when there is no compare result on the record.
 */
export const compareMinScoreDisplayPercent = (record: AppRegistrationDetail | null): number | null => {
    if (!record) return null;
    const compare = record.compareFaceVerification as { result?: { compare_min_score?: number; score?: number } } | null;
    if (!compare?.result) return null;
    const stored = compare.result.compare_min_score;
    const unit =
        stored !== undefined && stored !== null ? normalizeUnitScore(stored) : resolveCompareMinScoreUnit(record);
    return scoreToPercent(unit);
};

/** Liveness threshold from project flow (v3: liveness.minScore; v2: onboardingSettings.liveness.livenessMinScore). */
export const resolveLivenessMinScoreUnit = (record: AppRegistrationDetail | null): number => {
    if (!record) return 0.65;
    const pf = record.projectFlow;
    return (
        (pf?.liveness as { minScore?: number } | undefined)?.minScore ??
        (pf?.onboardingSettings as { liveness?: { livenessMinScore?: number } } | undefined)?.liveness?.livenessMinScore ??
        0.65
    );
};

/**
 * Display % for the liveness minimum from the flow. `null` when there is no liveness score on the record
 * (same sources as the liveness score row).
 */
export const livenessMinScoreDisplayPercent = (record: AppRegistrationDetail | null): number | null => {
    if (!record) return null;
    const fromPerson = (record.person as { livenessScore?: number } | undefined)?.livenessScore;
    const fromBio = (record.biometricValidation as { livenessScore?: number } | undefined)?.livenessScore;
    if (fromPerson == null && fromBio == null) return null;
    return scoreToPercent(normalizeUnitScore(resolveLivenessMinScoreUnit(record)));
};

export const buildManualVerificationReasons = (record: AppRegistrationDetail | null): ManualVerificationReason[] => {
    if (!record || record.status !== 'NEEDS_MANUAL_VERIFICATION') return [];

    const reasons: ManualVerificationReason[] = [];

    const resolvedCompareMin = resolveCompareMinScoreUnit(record);
    const resolvedLivenessMin = resolveLivenessMinScoreUnit(record);

    const compare = record.compareFaceVerification as { result?: { compare_min_score?: number; score?: number } } | null;
    if (compare?.result) {
        const storedMin = compare.result.compare_min_score;
        const score = normalizeUnitScore(compare.result.score);
        const isStale = storedMin != null && Math.abs(storedMin - resolvedCompareMin) > 0.001;

        if (isStale) {
            reasons.push({
                key: 'smartEnrollProjects.recordDetail.manualReason.staleThreshold',
                params: { stored: scoreToPercent(storedMin), configured: scoreToPercent(resolvedCompareMin) },
            });
        }

        if (score < resolvedCompareMin - 0.001) {
            reasons.push({
                key: 'smartEnrollProjects.recordDetail.manualReason.faceCompareFailed',
                params: {
                    score: scoreToPercent(score),
                    threshold: scoreToPercent(resolvedCompareMin),
                },
            });
        }
    }

    const livenessScore =
        (record.person as { livenessScore?: number } | undefined)?.livenessScore ??
        (record.biometricValidation as { livenessScore?: number } | undefined)?.livenessScore;
    if (livenessScore != null && livenessScore <= resolvedLivenessMin) {
        reasons.push({
            key: 'smartEnrollProjects.recordDetail.manualReason.livenessFailed',
            params: { score: scoreToPercent(livenessScore), threshold: scoreToPercent(resolvedLivenessMin) },
        });
    }

    const docVal = record.documentValidation as { fullNameMatchPercentage?: number; status?: string; documentType?: string; documentCategory?: string; manualVerificationReason?: string } | null;
    const nameMatchPct = docVal?.fullNameMatchPercentage;
    if (nameMatchPct != null && nameMatchPct < 80) {
        reasons.push({
            key: 'smartEnrollProjects.recordDetail.manualReason.namesMismatch',
            params: { score: nameMatchPct },
        });
    }

    const docStatus = docVal?.status;
    if (docStatus === 'NEEDS_MANUAL_VERIFICATION') {
        reasons.push({
            key: 'smartEnrollProjects.recordDetail.manualReason.documentUnverified',
            params: { status: docStatus },
        });
    }

    const docType = docVal?.documentType;
    if (docVal?.documentCategory === 'Unknown' && (!docType || docType === 'Unknown')) {
        reasons.push({ key: 'smartEnrollProjects.recordDetail.manualReason.documentCategoryUnknown' });
    }

    const mvReason = docVal?.manualVerificationReason;
    if (mvReason === 'validation_timeout') {
        reasons.push({ key: 'smartEnrollProjects.recordDetail.manualReason.validationTimeout' });
    } else if (mvReason === 'manual_review_requested') {
        reasons.push({ key: 'smartEnrollProjects.recordDetail.manualReason.manualReviewRequested' });
    } else if (mvReason) {
        reasons.push({
            key: 'smartEnrollProjects.recordDetail.manualReason.generic',
            params: { reason: mvReason },
        });
    }

    return reasons;
};

export const showNameVerificationSection = (
    project: EnrollProject | null,
    record: AppRegistrationDetail | null
): boolean => {
    if (!record?.informationValidation || !record.documentValidation) return false;

    const flow = record.projectFlow;
    const v3 = project?.version === 3;
    const documents = flow?.documents as { informationVerification?: boolean } | undefined;
    const onboardingDoc = flow?.onboardingSettings as { document?: { verifyNames?: boolean } } | undefined;

    return (
        ((v3 && !!documents?.informationVerification) || (!v3 && !!onboardingDoc?.document?.verifyNames)) &&
        !!record.informationValidation &&
        !!record.documentValidation
    );
};

export type StepId =
    | 'information'
    | 'email'
    | 'phone'
    | 'documents'
    | 'biometrics'
    | 'compare'
    | 'verdict';

export type StepState = 'pending' | 'ok' | 'warn' | 'error';
