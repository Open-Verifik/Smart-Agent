import { FlowGraph, parseFlowGraph } from '../endpoint-flow-graph.util';

const STORAGE_KEY = 'smart-batch.visita-guide.flow-draft';

export type GuideFlowDraft = {
    graph: FlowGraph;
    inputValues?: Record<string, string>;
};

const isDraft = (value: unknown): value is GuideFlowDraft => {
    if (!value || typeof value !== 'object') return false;
    return Boolean(parseFlowGraph((value as GuideFlowDraft).graph));
};

export const readFlowDraft = (): GuideFlowDraft | null => {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed: unknown = JSON.parse(raw);
        if (!isDraft(parsed)) return null;
        const graph = parseFlowGraph(parsed.graph);
        if (!graph) return null;
        const inputValues =
            parsed.inputValues && typeof parsed.inputValues === 'object' && !Array.isArray(parsed.inputValues)
                ? Object.fromEntries(
                      Object.entries(parsed.inputValues).filter(
                          (entry): entry is [string, string] => typeof entry[1] === 'string'
                      )
                  )
                : {};
        return { graph, inputValues };
    } catch {
        return null;
    }
};

export const writeFlowDraft = (draft: GuideFlowDraft): void => {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    } catch {
        /* quota / private mode */
    }
};

export const clearFlowDraft = (): void => {
    try {
        sessionStorage.removeItem(STORAGE_KEY);
    } catch {
        /* ignore */
    }
};
