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

/**
 * Outcome of the selfie/document face compare.
 *
 * `notRun` and `missingDocumentFace` both mean there is no score, and the reviewer needs them
 * separated: a compare that never ran because no portrait could be read off the document is a
 * pipeline problem to re-run, not a person who failed a check.
 */
export type CompareStatus = 'passed' | 'failed' | 'missingDocumentFace' | 'notRun' | 'notApplicable';

/**
 * Reads the compare outcome, treating a missing score as unmeasured rather than as a failure.
 */
export const resolveCompareStatus = (record: AppRegistrationDetail | null): CompareStatus => {
    if (!record) return 'notApplicable';

    const compare = record.compareFaceVerification as { result?: { score?: number } } | null | undefined;
    const score = compare?.result?.score;

    if (score != null) {
        return normalizeUnitScore(score) >= resolveCompareMinScoreUnit(record) - 0.001 ? 'passed' : 'failed';
    }

    // The compare needs a scanned document and a captured selfie. Without both the step is
    // simply not reached yet, which is different from having been attempted and produced nothing.
    if (!record.documentValidation || !record.biometricValidation) return 'notApplicable';

    return record.documentFace ? 'notRun' : 'missingDocumentFace';
};

/** True when a reviewer can usefully ask for the compare to be run again. */
export const canRerunCompare = (record: AppRegistrationDetail | null): boolean =>
    ['failed', 'notRun', 'missingDocumentFace'].includes(resolveCompareStatus(record));

/** Reasons the backend records for a scan that arrived without a cropped portrait. */
const DOCUMENT_FACE_REASONS = new Set(['document_face_not_provided']);

/**
 * Why the record holds no document portrait, when the scan recorded a reason. Tells the reviewer
 * the difference between an integration that never sent one and a scan nothing could be read from.
 */
export const documentFaceReasonKey = (record: AppRegistrationDetail | null): string | null => {
    const reason = (record?.documentValidation as { documentFaceReason?: string } | null | undefined)
        ?.documentFaceReason;

    if (!reason || !DOCUMENT_FACE_REASONS.has(reason)) return null;

    return `smartEnrollProjects.recordDetail.documentFaceReason.${reason}`;
};

/**
 * Recoverable capture problems, which the SDK does not count against the attempt limit.
 * Mirrors QUALITY_REASONS in verifik-backend Repositories/OpenCV/modules/liveness-failure.util.js.
 */
const LIVENESS_QUALITY_REASONS = new Set([
    'face_close_to_border',
    'face_not_centered',
    'face_occluded',
    'face_rotation_too_large',
    'face_too_close',
    'face_too_far',
    'multiple_faces_detected',
    'no_face_detected',
    'poor_lighting',
]);

/** Reasons that have a dedicated label; anything else falls back to the generic one. */
const LIVENESS_LABELLED_REASONS = new Set([...LIVENESS_QUALITY_REASONS, 'liveness_failed', 'liveness_error']);

/**
 * Turns a stored liveness `failedReason` into a reason we are willing to show.
 *
 * Same contract as the document counterpart: unrecognised values fall back to the generic label
 * rather than being rendered verbatim, since the stored string can be a raw provider message.
 */
export const livenessFailureReasonKey = (raw: unknown): string => {
    if (typeof raw !== 'string' || !raw.trim()) return 'liveness_error';

    const code = raw.trim().replace(/^\d{3}:/, '');

    return LIVENESS_LABELLED_REASONS.has(code) ? code : 'liveness_error';
};

/** Provider error codes to canonical reasons, for records written before `failedReason` existed. */
const PROVIDER_REASON_CODES: Record<string, string> = {
    ERR_LIVENESS_FACE_CLOSE_TO_BORDER: 'face_close_to_border',
    ERR_LIVENESS_FACE_TOO_SMALL: 'face_too_far',
    ERR_MULTIPLE_FACES_DETECTED: 'multiple_faces_detected',
    ERR_NO_FACE_DETECTED: 'no_face_detected',
};

/**
 * Recovers a canonical reason from the raw error stored on the captured frame.
 *
 * Only recognised codes are returned. The stored value also carries a stack trace with
 * internal server paths, so nothing from it is ever surfaced verbatim.
 */
const reasonFromCapturedFrame = (face: unknown): string | null => {
    const stored = (face as { failedReason?: { message?: string } } | null | undefined)?.failedReason?.message;

    if (typeof stored !== 'string') return null;

    const detail = stored.replace(/^\d{3}:/, '').split('@').slice(1).join('@').trim();

    if (!detail) return null;

    if (PROVIDER_REASON_CODES[detail]) return PROVIDER_REASON_CODES[detail];

    return Number.isFinite(Number(detail)) ? 'liveness_failed' : null;
};

/**
 * How far below the minimum a score still counts as a near miss.
 * Mirrors NEAR_MISS_MARGIN in verifik-backend Repositories/OpenCV/modules/liveness-failure.util.js.
 */
const LIVENESS_NEAR_MISS_MARGIN_PERCENT = 15;

/** Configured retry ceiling (v3: liveness.attemptLimit; v2: onboardingSettings.liveness.maxAttempts). */
const DEFAULT_LIVENESS_ATTEMPT_LIMIT = 3;

export type LivenessScoreBand = 'nearMiss' | 'farMiss';

export interface FailedBiometricAttempt {
    attemptNumber: number;
    consumedAttempt: boolean;
    face: FaceMediaRef | null;
    isQuality: boolean;
    reasonKey: string;
    scorePercent: number | null;
    /**
     * Whether the capture nearly passed or scored far below the bar. Derived here rather than read
     * off the record so it also applies to attempts stored before the backend started banding.
     */
    scoreBand: LivenessScoreBand | null;
    updatedAt: string | null;
}

/**
 * Reads a rejected score as a near miss or a far miss.
 *
 * The two need different follow-up: a score just under the bar is a live person whose capture was
 * off, while a score near zero is what a printed photo or a screen looks like. Showing only the
 * number leaves the reviewer to work that out from the threshold every time.
 */
export const livenessScoreBand = (
    scorePercent: number | null,
    thresholdPercent: number | null
): LivenessScoreBand | null => {
    if (scorePercent == null || thresholdPercent == null) return null;

    return scorePercent >= thresholdPercent - LIVENESS_NEAR_MISS_MARGIN_PERCENT ? 'nearMiss' : 'farMiss';
};

/** Retry ceiling the flow configured for liveness. */
export const resolveLivenessAttemptLimit = (record: AppRegistrationDetail | null): number => {
    const flow = record?.projectFlow;

    return (
        (flow?.liveness as { attemptLimit?: number } | undefined)?.attemptLimit ??
        (flow?.onboardingSettings as { liveness?: { maxAttempts?: number } } | undefined)?.liveness?.maxAttempts ??
        DEFAULT_LIVENESS_ATTEMPT_LIMIT
    );
};

/**
 * Attempts spent against the configured limit.
 *
 * Only score rejections count: a quality reject never produced a usable frame, so the backend
 * does not charge it against the limit either. Surfacing this is what shows an abandoned record
 * still had retries left, which reads very differently from someone who exhausted them.
 */
export const livenessAttemptUsage = (
    record: AppRegistrationDetail | null
): { used: number; limit: number; captures: number } => {
    const attempts = buildFailedBiometricAttempts(record);

    return {
        used: attempts.filter((attempt) => attempt.consumedAttempt).length,
        limit: resolveLivenessAttemptLimit(record),
        captures: attempts.length,
    };
};

/**
 * Normalizes `failedBiometricValidations` for display.
 *
 * `failedReason` is the canonical snake_case reason written by the backend. Older records
 * predate it and have no reason at all, which is why the label falls back to the generic
 * key rather than showing a raw provider string.
 */
export const buildFailedBiometricAttempts = (record: AppRegistrationDetail | null): FailedBiometricAttempt[] => {
    const failed = (record?.failedBiometricValidations ?? []) as Array<Record<string, unknown>>;
    const thresholdPercent = scoreToPercent(normalizeUnitScore(resolveLivenessMinScoreUnit(record)));

    return failed.map((attempt, index) => {
        const stored = typeof attempt?.['failedReason'] === 'string' ? (attempt['failedReason'] as string) : null;
        const reason = stored ?? reasonFromCapturedFrame(attempt?.['face']);
        const isQuality = reason != null && LIVENESS_QUALITY_REASONS.has(reason);
        const rawScore = attempt?.['livenessScore'];
        const score = rawScore == null ? null : normalizeUnitScore(Number(rawScore));
        const face = attempt?.['face'] as FaceMediaRef | null | undefined;
        const updatedAt = attempt?.['updatedAt'] ?? attempt?.['createdAt'];
        // A quality reject never produced a usable frame, so its stored 0 is not a measurement.
        const scorePercent = isQuality || score == null || !Number.isFinite(score) ? null : scoreToPercent(score);

        return {
            attemptNumber: index + 1,
            consumedAttempt: !isQuality,
            face: face && typeof face === 'object' && (face.base64 || face.url) ? face : null,
            isQuality,
            reasonKey: reason && LIVENESS_LABELLED_REASONS.has(reason) ? reason : 'liveness_error',
            scorePercent,
            scoreBand: livenessScoreBand(scorePercent, thresholdPercent),
            updatedAt: typeof updatedAt === 'string' ? updatedAt : null,
        };
    });
};

/**
 * Document scan failures that have a dedicated explanation.
 *
 * Anything outside this set falls back to a generic label. The stored `failedReason` can be a
 * raw upstream message carrying internal server paths, so it is never rendered verbatim.
 */
const DOCUMENT_FAILURE_REASONS = new Set([
    'document_number_is_not_extracted',
    'document_type_not_detected',
    'existing_document_validation_with_document_number',
    'image_is_required',
    'insecure_image_url',
    'prompt_template_not_found',
    // What the funnel aggregation labels a failure that recorded no reason at all.
    'unspecified',
]);

/** OCR keys already rendered as their own labelled field, or too verbose to list as one. */
const OCR_ROW_EXCLUDED_KEYS = new Set(['category', 'country', 'documentCategory', 'documentType', 'extractedText']);

/** Longest OCR value rendered as a row; anything longer is prose rather than a field. */
const OCR_ROW_MAX_LENGTH = 120;

export interface FailedDocumentAttempt {
    attemptNumber: number;
    /** Reason suffix under `smartEnrollProjects.recordDetail.documentFailedReason` */
    reasonKey: string;
    /** Labelled fields worth showing even when the scan failed. */
    fields: { key: string; value: string }[];
    /** Whatever the model did read, so a reviewer can see a number the scan failed to pick up. */
    ocrRows: { key: string; value: string }[];
    frontUrl: string | null;
    backUrl: string | null;
    documentFaceBase64: string | null;
    updatedAt: string | null;
}

/**
 * Turns a `failedReason` into a reason we are willing to show.
 */
export const documentFailureReasonKey = (raw: unknown): string => {
    if (typeof raw !== 'string' || !raw.trim()) return 'unspecified';

    const code = raw.trim().replace(/^\d{3}:/, '');

    return DOCUMENT_FAILURE_REASONS.has(code) ? code : 'scan_failed';
};

/**
 * Spaced label for a camelCase OCR key, matching the successful-scan panel.
 */
const ocrRowLabel = (key: string): string =>
    key.replace(/([A-Z])/g, ' $1').replace(/^./, (character) => character.toUpperCase());

/**
 * Scalar OCR values as displayable rows, ordered like the successful-scan panel.
 */
const buildOcrRows = (ocr: unknown): { key: string; value: string }[] => {
    if (!ocr || typeof ocr !== 'object') return [];

    const rows: { key: string; value: string }[] = [];

    for (const [key, value] of Object.entries(ocr as Record<string, unknown>)) {
        if (OCR_ROW_EXCLUDED_KEYS.has(key) || key.startsWith('_') || key.startsWith('$')) continue;
        if (value == null || typeof value === 'object' || typeof value === 'function') continue;

        const text = String(value).trim();

        if (!text || text.length > OCR_ROW_MAX_LENGTH) continue;

        rows.push({ key: ocrRowLabel(key), value: text });
    }

    return rows.sort((a, b) => (ORDER_OCR_BY[b.key] || 1) - (ORDER_OCR_BY[a.key] || 1));
};

/**
 * Normalizes `failedDocumentValidations` for display.
 *
 * The panel used to read `scoreValidation.errorMessage`, a field the current backend never
 * writes, so every failed scan rendered blank. The reason, the type and the partial extraction
 * are all on the record already and are what tell a reviewer whether the scan is recoverable.
 */
export const buildFailedDocumentAttempts = (record: AppRegistrationDetail | null): FailedDocumentAttempt[] => {
    const failed = (record?.failedDocumentValidations ?? []) as Array<Record<string, unknown>>;

    return failed.map((attempt, index) => {
        const read = (key: string): string | null => {
            const value = attempt?.[key];

            return typeof value === 'string' && value.trim() ? value.trim() : null;
        };

        const fields: { key: string; value: string }[] = [];

        for (const key of ['documentType', 'documentCategory', 'country', 'status', 'inputMethod'] as const) {
            const value = read(key);

            if (value) fields.push({ key, value });
        }

        const documentFace = attempt?.['documentFace'] as { base64?: string } | null | undefined;
        const updatedAt = read('updatedAt') ?? read('createdAt');

        return {
            attemptNumber: index + 1,
            reasonKey: documentFailureReasonKey(attempt?.['failedReason']),
            fields,
            ocrRows: buildOcrRows(attempt?.['OCRExtraction']),
            frontUrl: read('url'),
            backUrl: read('backUrl'),
            documentFaceBase64: typeof documentFace?.base64 === 'string' ? documentFace.base64 : null,
            updatedAt,
        };
    });
};

/**
 * True once the government name lookup has actually completed.
 *
 * The backend sets `scoreValidated` and `imageValidated` together in
 * `_processDocumentValidationScores`, which is also where the match percentages are written
 * (for both the document and the form column). Until then every percentage is the Mongoose
 * default `0` and `namesMatch` is `false`, which must not be shown as a measured result.
 */
export const isNameVerificationPerformed = (record: AppRegistrationDetail | null): boolean => {
    const docVal = record?.documentValidation as { scoreValidated?: boolean; imageValidated?: boolean } | null | undefined;

    return docVal?.scoreValidated === true && docVal?.imageValidated === true;
};

/** Document type values that mean the scan could not tell what the document was. */
const UNDETECTED_DOCUMENT_TYPES = new Set(['', 'unknown', 'null', 'undefined', 'n/a', 'na']);

/** True when the scan never resolved a catalog document type. */
export const isDocumentTypeUndetected = (record: AppRegistrationDetail | null): boolean => {
    const docVal = record?.documentValidation as { documentType?: string } | null | undefined;

    return UNDETECTED_DOCUMENT_TYPES.has(String(docVal?.documentType ?? '').trim().toLowerCase());
};

/**
 * Why the name lookup did not run, when the backend recorded a reason
 * (for example an unsupported document type or a data-source error).
 *
 * Scans from before the backend started writing a reason for an undetected type left the field
 * empty, so the type is read directly as a fallback. Otherwise those records show the name card
 * as "not performed" with nothing to explain it.
 */
export const nameVerificationNotPerformedReason = (record: AppRegistrationDetail | null): string | null => {
    if (isNameVerificationPerformed(record)) return null;

    const docVal = record?.documentValidation as
        | { infoValidationSupported?: boolean; infoValidationSupportedReason?: string; documentType?: string }
        | null
        | undefined;

    const reason = docVal?.infoValidationSupportedReason;

    if (typeof reason === 'string' && reason.trim().length) return reason.trim();

    if (!docVal) return null;

    return UNDETECTED_DOCUMENT_TYPES.has(String(docVal.documentType ?? '').trim().toLowerCase())
        ? 'document_type_not_detected'
        : null;
};

/**
 * Skip reasons the backend writes to `infoValidationSupportedReason` and that we can explain
 * in plain language. Anything else falls back to showing the raw code.
 */
const NAME_SKIP_REASONS = new Set([
    'document_not_supported',
    'document_type_not_detected',
    'validation_not_available',
    'invalid_name_response_from_api',
    'manual_review',
]);

export interface NameVerificationSkip {
    /** Translation key under `smartEnrollProjects.recordDetail.nameMatchReason` */
    key: string;
    params: { type: string; country: string; reason: string };
}

/**
 * Humanized explanation of why the government name lookup produced no score,
 * carrying the detected type and country so the manager does not have to open Mongo.
 */
export const nameVerificationSkip = (record: AppRegistrationDetail | null): NameVerificationSkip | null => {
    const reason = nameVerificationNotPerformedReason(record);

    if (!reason) return null;

    const docVal = record?.documentValidation as { documentType?: string; country?: string } | null | undefined;

    return {
        key: `smartEnrollProjects.recordDetail.nameMatchReason.${NAME_SKIP_REASONS.has(reason) ? reason : 'unknown'}`,
        params: {
            type: docVal?.documentType?.trim() || '—',
            country: docVal?.country?.trim() || '—',
            reason,
        },
    };
};

/**
 * @param source - `document` reads the OCR extraction, `form` the sign-up information
 * @returns the person's name as that source recorded it, or null when absent
 */
const FULL_NAME_ALIASES = ['fullName', 'name'] as const;
const FIRST_NAME_ALIASES = ['firstName', 'firstNames', 'nombres', 'givenName', 'givenNames'] as const;
const LAST_NAME_ALIASES = ['lastName', 'lastNames', 'apellidos', 'surname', 'surnames', 'familyName'] as const;

/**
 * First non-empty string among the Gemini keys that hold that part of a name.
 */
const readNameAlias = (holder: Record<string, unknown>, aliases: readonly string[]): string => {
    for (const key of aliases) {
        const value = holder[key];
        if (typeof value === 'string' && value.trim()) return value.trim();
    }
    return '';
};

export const recordFullName = (
    record: AppRegistrationDetail | null,
    source: 'document' | 'form'
): string | null => {
    const docVal = record?.documentValidation as { OCRExtraction?: Record<string, unknown> } | null | undefined;
    const holder =
        source === 'document'
            ? docVal?.OCRExtraction
            : (record?.informationValidation as Record<string, unknown> | null | undefined);

    if (!holder) return null;

    const composed =
        readNameAlias(holder, FULL_NAME_ALIASES) ||
        [readNameAlias(holder, FIRST_NAME_ALIASES), readNameAlias(holder, LAST_NAME_ALIASES)]
            .filter(Boolean)
            .join(' ');

    return composed || null;
};

/** Name fields the registry returns; rendered as labelled rows instead of generic extras. */
const GOVERNMENT_NAME_KEYS = new Set(['firstName', 'lastName', 'fullName', 'arrayName']);

/** Lookup echo shown as the "queried with" line rather than as its own row. */
const GOVERNMENT_LOOKUP_KEYS = new Set(['documentType', 'documentNumber', 'validatedAt']);

export interface GovernmentNameResponse {
    fullName: string | null;
    firstName: string | null;
    lastName: string | null;
    /** Document type the registry actually resolved, which can differ from the OCR type. */
    documentType: string | null;
    documentNumber: string | null;
    validatedAt: string | null;
    /** Anything else the registry returned (date of birth, gender, ...), for generic display. */
    extras: { key: string; value: string }[];
}

/**
 * The raw government registry answer stored on `documentValidation.scoreValidation`.
 *
 * Showing it next to the percentages is what makes a low score readable: a name from a
 * different person explains 17% just as well as garbled OCR does, and only the registry
 * response tells the two apart.
 */
export const governmentNameResponse = (record: AppRegistrationDetail | null): GovernmentNameResponse | null => {
    const docVal = record?.documentValidation as
        | { scoreValidation?: Record<string, unknown> }
        | null
        | undefined;

    const raw = docVal?.scoreValidation;

    if (!raw || typeof raw !== 'object') return null;

    const read = (key: string): string | null => {
        const value = raw[key];
        if (typeof value === 'string' && value.trim()) return value.trim();
        if (typeof value === 'number') return String(value);
        return null;
    };

    const extras: { key: string; value: string }[] = [];

    for (const [key, value] of Object.entries(raw)) {
        if (key.startsWith('_') || key.startsWith('$')) continue;
        if (GOVERNMENT_NAME_KEYS.has(key) || GOVERNMENT_LOOKUP_KEYS.has(key)) continue;
        if (value == null || value === '' || typeof value === 'object' || typeof value === 'function') continue;
        extras.push({ key, value: String(value) });
    }

    const response: GovernmentNameResponse = {
        fullName: read('fullName'),
        firstName: read('firstName'),
        lastName: read('lastName'),
        documentType: read('documentType'),
        documentNumber: read('documentNumber'),
        validatedAt: read('validatedAt'),
        extras: extras.sort((a, b) => a.key.localeCompare(b.key)),
    };

    const hasContent =
        response.fullName ||
        response.firstName ||
        response.lastName ||
        response.documentNumber ||
        response.extras.length > 0;

    return hasContent ? response : null;
};

/** Reviewer verdict recorded through the manual name review action, when there is one. */
export const manualNameReviewDecision = (record: AppRegistrationDetail | null): 'match' | 'mismatch' | null => {
    const docVal = record?.documentValidation as
        | { manualNameReview?: { decision?: string } }
        | null
        | undefined;

    const decision = docVal?.manualNameReview?.decision;

    return decision === 'match' || decision === 'mismatch' ? decision : null;
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
    } else {
        // A compare with no result at all is why a record with a good scan and a good selfie can
        // still land here, and it reads as a failed check unless it is named.
        const compareStatus = resolveCompareStatus(record);

        if (compareStatus === 'missingDocumentFace') {
            reasons.push({ key: 'smartEnrollProjects.recordDetail.manualReason.compareNoDocumentFace' });
        } else if (compareStatus === 'notRun') {
            reasons.push({ key: 'smartEnrollProjects.recordDetail.manualReason.compareNotRun' });
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

    // Only a completed government name lookup can prove a mismatch. The percentages default
    // to 0 and are reset to 0 on OCR rescan, so an unrun check would otherwise read as "0%".
    if (isNameVerificationPerformed(record) && nameMatchPct != null && nameMatchPct < 80) {
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
    | 'consent'
    | 'information'
    | 'email'
    | 'phone'
    | 'documents'
    | 'biometrics'
    | 'compare'
    | 'verdict'
    | 'events';

/**
 * `info` is for a step that behaved exactly as the flow configured it, but has nothing to
 * verify — an email collected on a flow with no OTP gateway, for example. Without it those steps
 * render as warnings and the reviewer chases problems that do not exist.
 */
export type StepState = 'pending' | 'ok' | 'info' | 'warn' | 'error';

/** OTP gateway values that mean "collect the value, do not verify it". */
const OTP_DISABLED_GATEWAYS = new Set(['none', '', 'off', 'disabled']);

/**
 * Whether the flow asks for an OTP on this channel.
 *
 * The gateway is the only OTP switch: the SDK appends `verify_email` / `verify_phone` only when
 * it is set to something other than `none`, so a record with a value and no validation on a
 * `none` gateway is correct rather than incomplete.
 */
export const isOtpGatewayConfigured = (
    record: AppRegistrationDetail | null,
    channel: 'email' | 'phone'
): boolean => {
    const signUpForm = record?.projectFlow?.signUpForm as Record<string, unknown> | undefined;
    const gateway = signUpForm?.[channel === 'email' ? 'emailGateway' : 'phoneGateway'];

    if (typeof gateway !== 'string') return false;

    return !OTP_DISABLED_GATEWAYS.has(gateway.trim().toLowerCase());
};

/**
 * State of an email or phone step, driven by the flow's gateway rather than by the absence of a
 * validation record.
 */
export const resolveOtpStepState = (
    record: AppRegistrationDetail | null,
    channel: 'email' | 'phone'
): StepState => {
    if (!record) return 'pending';

    const value = channel === 'email' ? record.email : record.phone;
    const validation = channel === 'email' ? record.emailValidation : record.phoneValidation;

    if (!value && !validation) return 'pending';

    if ((validation as { status?: string } | undefined)?.status === 'validated') return 'ok';

    return isOtpGatewayConfigured(record, channel) ? 'warn' : 'info';
};
