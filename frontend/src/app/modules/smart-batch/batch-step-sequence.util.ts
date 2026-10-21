import { batchStepFeatureId, orderedBatchSteps } from './batch-config-steps.util';
import type { BatchStep } from './smart-batch.service';
import type { ReportSection } from './smart-report.service';

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
