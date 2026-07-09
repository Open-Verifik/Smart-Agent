import {
    DEFAULT_COMPARE_WITH_LIVENESS_LIVENESS_FLOOR,
    DEFAULT_FACE_COMPARE_MIN_SCORE,
    DEFAULT_LIVENESS_MIN_SCORE,
    DEFAULT_LIVENESS_STANDALONE_MIN_SCORE,
    type CompareWithLivenessParsed,
    type FaceCompareLiveParsed,
    type LivenessParsed,
} from './biometrics-demo.types';

/** Example private-data rows for HumanID create demos (encrypted until face decrypt). */
export const DEMO_HUMANID_PRIVATE_DATA_DEFAULT: Record<string, string> = {
    secretKey: '7c4f9a2e8b1d0635f4a9c2e7b8d1f0a6e3c9b2d7f4a8e1c0b5d9f3a6e2c8b1',
    mnemonics: 'ocean trumpet velvet ladder silent granite mirror humble ripple canyon frost pioneer anchor',
};

export const normalizeImageBase64ForApi = (input: string): string => {
    const trimmed = input.trim();
    const needle = 'base64,';
    const at = trimmed.indexOf(needle);
    if (trimmed.startsWith('data:') && at !== -1) {
        return trimmed.slice(at + needle.length).replace(/\s/g, '');
    }
    return trimmed.replace(/\s/g, '');
};

export const blobToRawBase64 = async (blob: Blob): Promise<string> => {
    const buffer = await blob.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    let binary = '';
    const chunkSize = 8192;
    for (let i = 0; i < bytes.byteLength; i += chunkSize) {
        binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
    }
    return btoa(binary);
};

export const fileToBase64 = async (file: File | Blob): Promise<string> => blobToRawBase64(file);

export const imageUrlToRawBase64 = async (url: string): Promise<string> => {
    const resolved =
        typeof window !== 'undefined' && url.startsWith('/')
            ? new URL(url, window.location.origin).href
            : url;
    const res = await fetch(resolved, { cache: 'force-cache' });
    if (!res.ok) throw new Error(`Failed to fetch image (${res.status})`);
    const blob = await res.blob();
    if (blob.size === 0) throw new Error('Empty image');
    return blobToRawBase64(blob);
};

const coerceScore01 = (value: unknown): number | null => {
    if (value == null) return null;
    if (typeof value === 'number' && !Number.isNaN(value)) return value > 1 ? value / 100 : value;
    if (typeof value === 'string') {
        const n = parseFloat(value.trim());
        if (Number.isNaN(n)) return null;
        return n > 1 ? n / 100 : n;
    }
    return null;
};

export const parseFaceCompareResult = (
    data: unknown
): { match: boolean; score: number; message: string } => {
    if (!data || typeof data !== 'object') return { match: false, score: 0, message: '' };
    let doc = data as Record<string, unknown>;
    const envelope = doc['data'];
    if (envelope && typeof envelope === 'object' && !Array.isArray(envelope)) {
        doc = envelope as Record<string, unknown>;
    }
    const innerRaw = doc['result'];
    const inner =
        innerRaw && typeof innerRaw === 'object' && !Array.isArray(innerRaw)
            ? (innerRaw as Record<string, unknown>)
            : doc;
    let score = typeof inner['score'] === 'number' ? inner['score'] : 0;
    if (score > 1) score /= 100;

    let match: boolean;
    if (typeof inner['passed'] === 'boolean') {
        match = inner['passed'];
    } else {
        const thresholdRaw = inner['compare_min_score'] ?? doc['compare_min_score'];
        const threshold =
            typeof thresholdRaw === 'number' ? thresholdRaw : DEFAULT_FACE_COMPARE_MIN_SCORE;
        match = score >= threshold;
    }

    const message = typeof inner['message'] === 'string' ? inner['message'] : '';
    return { match, score, message };
};

export const parseLivenessResult = (raw: unknown): LivenessParsed => {
    const empty: LivenessParsed = {
        passed: false,
        livenessScore: null,
        minScore: DEFAULT_LIVENESS_STANDALONE_MIN_SCORE,
        message: '',
    };
    if (!raw || typeof raw !== 'object') return empty;
    let doc = raw as Record<string, unknown>;
    const envelope = doc['data'];
    if (envelope && typeof envelope === 'object' && !Array.isArray(envelope)) {
        doc = envelope as Record<string, unknown>;
    }
    const livenessScore = coerceScore01(doc['liveness_score']);
    const minRaw = doc['min_score'];
    const minScore =
        typeof minRaw === 'number' && !Number.isNaN(minRaw)
            ? minRaw
            : DEFAULT_LIVENESS_STANDALONE_MIN_SCORE;
    let passed = typeof doc['passed'] === 'boolean' ? doc['passed'] : false;
    if (typeof doc['passed'] !== 'boolean' && livenessScore != null) {
        passed = livenessScore >= minScore;
    }
    const message = typeof doc['message'] === 'string' ? doc['message'] : '';

    const root = raw as Record<string, unknown>;
    const creditsCharged = typeof root['creditsCharged'] === 'number' ? root['creditsCharged'] : null;

    return { passed, livenessScore, minScore, message, creditsCharged };
};

export const parseFaceCompareLiveResult = (data: unknown): FaceCompareLiveParsed => {
    const base = parseFaceCompareResult(data);
    if (!data || typeof data !== 'object') {
        return {
            match: base.match,
            score: base.score,
            livenessScore: null,
            livenessPassed: true,
            livenessMinScore: DEFAULT_LIVENESS_MIN_SCORE,
            message: base.message,
        };
    }
    let doc = data as Record<string, unknown>;
    const envelope = doc['data'];
    if (envelope && typeof envelope === 'object' && !Array.isArray(envelope)) {
        doc = envelope as Record<string, unknown>;
    }
    const innerRaw = doc['result'];
    const inner =
        innerRaw && typeof innerRaw === 'object' && !Array.isArray(innerRaw)
            ? (innerRaw as Record<string, unknown>)
            : ({} as Record<string, unknown>);

    const livenessScore = coerceScore01(inner['liveness_score']);
    const livenessMinRaw = doc['liveness_min_score'];
    const livenessMinScore =
        typeof livenessMinRaw === 'number' ? livenessMinRaw : DEFAULT_LIVENESS_MIN_SCORE;
    const livenessPassed = livenessScore != null ? livenessScore >= livenessMinScore : true;

    return {
        match: base.match,
        score: base.score,
        livenessScore,
        livenessPassed,
        livenessMinScore,
        message: base.message,
    };
};

export const parseCompareWithLivenessResult = (data: unknown): CompareWithLivenessParsed => {
    const empty: CompareWithLivenessParsed = {
        match: false,
        score: 0,
        livenessScore: null,
        livenessPassed: false,
        livenessMinScore: DEFAULT_COMPARE_WITH_LIVENESS_LIVENESS_FLOOR,
        livenessSkipped: true,
        message: '',
    };
    if (!data || typeof data !== 'object') return empty;

    let root = data as Record<string, unknown>;
    const envelope = root['data'];
    if (envelope && typeof envelope === 'object' && !Array.isArray(envelope)) {
        root = envelope as Record<string, unknown>;
    }

    const comparison = root['comparison'] as Record<string, unknown> | undefined;
    const livenessDoc = root['liveness'] as Record<string, unknown> | undefined | null;

    let score = 0;
    let match = false;
    if (comparison && typeof comparison === 'object') {
        const res = comparison['result'] as Record<string, unknown> | undefined;
        if (res && typeof res['score'] === 'number') {
            score = res['score'];
            if (score > 1) score /= 100;
        }
        const thresholdRaw = comparison['compare_min_score'];
        const threshold =
            typeof thresholdRaw === 'number' ? thresholdRaw : DEFAULT_FACE_COMPARE_MIN_SCORE;
        match = score >= threshold;
    }

    const livenessSkipped = livenessDoc == null;
    let livenessScore: number | null = null;
    let livenessPassed = false;
    let livenessMinScore = DEFAULT_COMPARE_WITH_LIVENESS_LIVENESS_FLOOR;

    if (!livenessSkipped && livenessDoc && typeof livenessDoc === 'object') {
        const lr = livenessDoc['result'] as Record<string, unknown> | undefined;
        if (lr && typeof lr === 'object') {
            livenessScore = coerceScore01(lr['liveness_score']);
            if (typeof lr['min_score'] === 'number') livenessMinScore = lr['min_score'];
            if (typeof lr['passed'] === 'boolean') {
                livenessPassed = lr['passed'];
            } else if (livenessScore != null) {
                livenessPassed = livenessScore >= livenessMinScore;
            }
        }
    }

    return { match, score, livenessScore, livenessPassed, livenessMinScore, livenessSkipped, message: '' };
};

export const normalizePersonsListPayload = (data: unknown): Record<string, unknown>[] => {
    if (Array.isArray(data)) return data as Record<string, unknown>[];
    if (data && typeof data === 'object' && !Array.isArray(data)) {
        const d = data as Record<string, unknown>;
        if (Array.isArray(d['docs'])) return d['docs'] as Record<string, unknown>[];
    }
    return [];
};

export const mapPersonDocsToListItems = (
    docs: Record<string, unknown>[]
): { _id: string; name: string }[] => {
    const out: { _id: string; name: string }[] = [];
    for (const doc of docs) {
        const rawId = doc['_id'];
        const _id =
            typeof rawId === 'string'
                ? rawId
                : rawId != null && typeof rawId === 'object' && '$oid' in (rawId as object)
                  ? String((rawId as { $oid: string }).$oid)
                  : rawId != null
                    ? String(rawId)
                    : '';
        if (!_id) continue;
        const name = typeof doc['name'] === 'string' ? doc['name'] : '';
        out.push({ _id, name });
    }
    return out;
};

export const isPersonAlreadySetError = (res: { error?: string; code?: string }): boolean =>
    res.error === 'person_already_set' ||
    (res.code === 'PreconditionFailed' && res.error === 'person_already_set');

export const getDemoOs = (): 'DESKTOP' | 'IOS' | 'ANDROID' => {
    if (typeof navigator === 'undefined') return 'DESKTOP';
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) return 'IOS';
    if (/Android/i.test(ua)) return 'ANDROID';
    return 'DESKTOP';
};

/** Upstream / Verifik liveness error codes we map to demo i18n. */
export const LIVENESS_API_ERROR_CODES = [
    'ERR_LIVENESS_FACE_CLOSE_TO_BORDER',
    'ERR_LIVENESS_FACE_TOO_SMALL',
    'ERR_MULTIPLE_FACES_DETECTED',
    'ERR_NO_FACE_DETECTED',
    'LIVENESS_CHECK_FAILED',
    'ERR_LIVENESS_FAILED',
] as const;

export type LivenessApiErrorCode = (typeof LIVENESS_API_ERROR_CODES)[number];

const LIVENESS_API_ERROR_CODE_SET = new Set<string>(LIVENESS_API_ERROR_CODES);

export const isLivenessApiErrorCode = (code: string | null | undefined): code is LivenessApiErrorCode =>
    Boolean(code && LIVENESS_API_ERROR_CODE_SET.has(code));

/**
 * Maps API liveness error codes to `smartEnrollDemos.liveness.errors.*` copy.
 * Falls back to the API message, then a generic translated string.
 */
export const translateLivenessApiError = (
    translate: (key: string, params?: Record<string, unknown>) => string,
    err: { code?: string | null; error?: string | null; message?: string | null } | null | undefined
): string => {
    const code = typeof err?.code === 'string' ? err.code.trim() : '';
    if (isLivenessApiErrorCode(code)) {
        return translate(`smartEnrollDemos.liveness.errors.${code}`);
    }

    const detail =
        (typeof err?.error === 'string' && err.error.trim()) ||
        (typeof err?.message === 'string' && err.message.trim()) ||
        '';

    if (detail) return detail;
    return translate('smartEnrollDemos.liveness.errors.fallback');
};
