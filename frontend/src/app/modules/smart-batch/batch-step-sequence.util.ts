import { batchStepFeatureId, orderedBatchSteps } from './batch-config-steps.util';
import type { BatchStep } from './smart-batch.service';
import type { ReportSection } from './smart-report.service';

/** Step sequences dropped between two pipeline snapshots (by feature id). */
export const removedStepSequences = (
    previousSteps: BatchStep[] | undefined,
    nextSteps: BatchStep[] | undefined
): number[] => {
    const nextIds = new Set(
        orderedBatchSteps(nextSteps)
            .map(batchStepFeatureId)
            .filter((id): id is string => Boolean(id))
    );
    return orderedBatchSteps(previousSteps)
        .filter((step) => {
            const id = batchStepFeatureId(step);
            return id && !nextIds.has(id);
        })
        .map((step) => step.sequence);
};

/** Map old step sequence → new sequence when the pipeline reorders steps (by feature id). */
export const buildStepSequenceMap = (
    previousSteps: BatchStep[] | undefined,
    nextSteps: BatchStep[] | undefined
): Map<number, number> => {
    const map = new Map<number, number>();
    const nextByFeature = new Map<string, number>();
    for (const step of orderedBatchSteps(nextSteps)) {
        const id = batchStepFeatureId(step);
        if (id) nextByFeature.set(id, step.sequence);
    }
    for (const step of orderedBatchSteps(previousSteps)) {
        const id = batchStepFeatureId(step);
        if (!id) continue;
        const nextSeq = nextByFeature.get(id);
        if (nextSeq != null && nextSeq !== step.sequence) {
            map.set(step.sequence, nextSeq);
        }
    }
    return map;
};

/** Whether a data path is bound to `results.<sequence>` (exact or nested). */
export const pathUsesResultSequence = (path: string | undefined, sequence: number): boolean => {
    if (!path) return false;
    return new RegExp(`^results\\.${sequence}(\\.|$)`).test(path);
};

/** Drops layout blocks (and rule fields) tied to a removed consult sequence. */
export const removeReportSectionsForSequence = (
    sections: ReportSection[],
    sequence: number
): ReportSection[] =>
    sections.filter(
        (section) =>
            !pathUsesResultSequence(section.dataPath, sequence) &&
            !pathUsesResultSequence(section.ruleField, sequence)
    );

export const purgeResultSequence = (
    results: Record<string | number, unknown> | undefined,
    sequence: number
): Record<string | number, unknown> => {
    if (!results) return {};
    const next = { ...results };
    delete next[sequence];
    delete next[String(sequence)];
    return next;
};

/** Removes payload slots that no longer match an enabled step sequence. */
export const trimResultsToSteps = (
    results: Record<string | number, unknown> | undefined,
    steps: BatchStep[] | undefined
): Record<string | number, unknown> => {
    const allowed = new Set(orderedBatchSteps(steps).map((step) => step.sequence));
    const next: Record<string | number, unknown> = {};
    for (const [rawKey, value] of Object.entries(results ?? {})) {
        const seq = Number(rawKey);
        if (Number.isFinite(seq) && allowed.has(seq)) {
            next[seq] = value;
        }
    }
    return next;
};

export const remapResultsPath = (path: string | undefined, seqMap: Map<number, number>): string | undefined => {
    if (!path || !seqMap.size) return path;
    return path.replace(/results\.(\d+)/g, (_match, raw) => {
        const next = seqMap.get(Number(raw));
        return `results.${next ?? raw}`;
    });
};

/** Keeps layout blocks tied to the same consult after step renumbering. */
export const remapReportSectionPaths = (
    sections: ReportSection[],
    seqMap: Map<number, number>
): ReportSection[] => {
    if (!seqMap.size) return sections;
    return sections.map((section) => ({
        ...section,
        dataPath: remapResultsPath(section.dataPath, seqMap),
        ruleField: remapResultsPath(section.ruleField, seqMap),
    }));
};

export const remapResultsRecord = (
    results: Record<string | number, unknown> | undefined,
    seqMap: Map<number, number>
): Record<string | number, unknown> => {
    if (!results || !seqMap.size) return { ...(results ?? {}) };
    const next: Record<string | number, unknown> = {};
    for (const [rawKey, value] of Object.entries(results)) {
        const oldSeq = Number(rawKey);
        const newSeq = Number.isFinite(oldSeq) ? (seqMap.get(oldSeq) ?? oldSeq) : rawKey;
        if (next[newSeq] === undefined) {
            next[newSeq] = value;
        }
    }
    return next;
};

/** Ensures every enabled step has a `results.<n>` slot without removing existing payloads. */
export const ensureResultSlots = (
    results: Record<string | number, unknown> | undefined,
    steps: BatchStep[] | undefined
): Record<string | number, unknown> => {
    const next = { ...(results ?? {}) };
    for (const step of orderedBatchSteps(steps)) {
        const key = step.sequence;
        if (next[key] === undefined && next[String(key)] === undefined) {
            next[key] = {};
        }
    }
    return next;
};

/** True when a consult slot has nothing to show (missing, [], or {}). */
export const isEmptyConsultPayload = (payload: unknown): boolean => {
    if (payload == null) return true;
    if (Array.isArray(payload)) return payload.length === 0;
    if (typeof payload !== 'object') return false;
    return Object.keys(payload as object).length === 0;
};

/**
 * Merge two `results.<n>` maps. A later empty slot does not wipe a previous
 * payload; a later non-empty slot replaces it. Removing a step still goes
 * through `purgeResultSequence`.
 */
export const mergeConsultResults = (
    stored: Record<string | number, unknown> | undefined,
    live: Record<string | number, unknown> | undefined
): Record<string | number, unknown> => {
    const next: Record<string | number, unknown> = { ...(stored ?? {}) };
    for (const [rawKey, value] of Object.entries(live ?? {})) {
        const seq = Number(rawKey);
        const previous =
            next[rawKey] !== undefined
                ? next[rawKey]
                : Number.isFinite(seq)
                  ? next[seq]
                  : undefined;
        if (!isEmptyConsultPayload(value) || isEmptyConsultPayload(previous)) {
            next[rawKey] = value;
            if (Number.isFinite(seq) && rawKey !== String(seq)) next[seq] = value;
        }
    }
    return next;
};

export const mergeConsultInput = (
    stored: Record<string, unknown> | undefined,
    live: Record<string, unknown> | undefined
): Record<string, unknown> => {
    const next: Record<string, unknown> = { ...(stored ?? {}) };
    for (const [key, value] of Object.entries(live ?? {})) {
        if (!isEmptyConsultPayload(value) || next[key] === undefined) {
            next[key] = value;
        }
    }
    return next;
};

export type ConsultSampleSlice = {
    batchName?: string;
    rowIndex?: number;
    inputData?: Record<string, unknown>;
    results?: Record<string | number, unknown>;
    errors?: { step: number; message: string; code: string }[];
    report?: Record<string, unknown>;
    consultedAt?: string;
    generatedAt?: string;
    processedAt?: string;
    startedAt?: string;
    createdAt?: string;
};

/** Keep last good consult payloads on the template sample, independent of layout. */
export const mergeConsultSample = <T extends ConsultSampleSlice>(
    stored: T | null | undefined,
    live: T | null | undefined
): T => {
    const previous = (stored ?? {}) as T;
    const incoming = (live ?? {}) as T;
    const liveErrors = incoming.errors;
    const hasLiveErrors = Array.isArray(liveErrors) && liveErrors.length > 0;
    return {
        ...previous,
        ...incoming,
        inputData: mergeConsultInput(
            previous.inputData as Record<string, unknown> | undefined,
            incoming.inputData as Record<string, unknown> | undefined
        ),
        results: mergeConsultResults(
            previous.results as Record<string | number, unknown> | undefined,
            incoming.results as Record<string | number, unknown> | undefined
        ),
        errors: (hasLiveErrors ? liveErrors : previous.errors) as T['errors'],
        report: (incoming.report ?? previous.report) as T['report'],
        consultedAt: incoming.consultedAt || previous.consultedAt,
        generatedAt: incoming.generatedAt || previous.generatedAt,
    };
};
