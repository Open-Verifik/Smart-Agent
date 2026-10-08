import { FlowGraph, parseFlowGraph } from '../endpoint-flow-graph.util';
import { serializeVisitaFlow } from './visita-guide-pipeline.service';

const STORAGE_KEY = 'smart-batch.visita-guide.flow-draft';
const STORE_PREFIX = 'smart-batch.visita-guide.flow.';

export type GuideFlowDraft = {
    graph: FlowGraph;
    inputValues?: Record<string, string>;
    configId?: string | null;
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
        const configId =
            typeof (parsed as GuideFlowDraft).configId === 'string'
                ? (parsed as GuideFlowDraft).configId
                : null;
        return { graph, inputValues, configId };
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

export const writeStoredFlow = (configId: string, graph: FlowGraph): void => {
    if (!configId || !parseFlowGraph(graph)) return;
    try {
        localStorage.setItem(STORE_PREFIX + configId, JSON.stringify(serializeVisitaFlow(graph)));
    } catch {
        /* quota / private mode */
    }
};

export const readStoredFlow = (configId: string | null | undefined): FlowGraph | null => {
    if (!configId) return null;
    try {
        const raw = localStorage.getItem(STORE_PREFIX + configId);
        if (!raw) return null;
        return parseFlowGraph(JSON.parse(raw));
    } catch {
        return null;
    }
};

export const clearFlowDraft = (): void => {
    try {
        sessionStorage.removeItem(STORAGE_KEY);
    } catch {
        /* ignore */
    }
};
