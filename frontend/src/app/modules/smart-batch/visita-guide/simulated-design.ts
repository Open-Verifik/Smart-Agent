import { emptyFlowGraph, endpointNodes, FlowGraph, graphFromLinearChain, removeFlowNode } from '../endpoint-flow-graph.util';
import { AppFeature } from '../smart-batch.service';

export type SimulatedAvailability = 'data' | 'empty' | 'missing';

/** Technical endpoint setup stored on the template, never as a sheet block. */
export interface SimulatedEndpointBinding {
    sequence: number;
    appFeatureCode: string;
    appFeatureId?: string;
    name?: string;
    method?: string;
    url?: string;
    parameterDefaults?: Record<string, unknown>;
    inputFieldMapping?: Record<string, unknown>;
    dependencies?: unknown[];
    availability: SimulatedAvailability;
    /** How many example rows to repeat in every object list. Omitted keeps the prepared sample. */
    listSize?: number;
    responseOutline?: unknown;
    /** Present only for a simulated design. Live designs omit this. */
    simulatedResponse?: unknown;
}

export interface SimulatedResponseDetail {
    code: string;
    found: boolean;
    name?: string;
    country?: string;
    method?: string;
    url?: string;
    inputs?: unknown[];
    availability: SimulatedAvailability;
    outline?: unknown;
    sample: unknown;
}

export interface TemplateEndpointDesign {
    source: 'simulated' | 'live';
    flow?: FlowGraph | null;
    endpoints?: SimulatedEndpointBinding[];
}

export interface SimulatedSessionDraft {
    endpoints: SimulatedEndpointBinding[];
    flow?: FlowGraph | null;
}

const STORAGE_KEY = 'smart-report.simulated-design';

export const readSimulatedSession = (): SimulatedSessionDraft | null => {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as SimulatedSessionDraft;
        if (!parsed || !Array.isArray(parsed.endpoints)) return null;
        return parsed;
    } catch {
        return null;
    }
};

export const writeSimulatedSession = (draft: SimulatedSessionDraft): void => {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    } catch {
        /* quota / private mode */
    }
};

export const clearSimulatedSession = (): void => {
    try {
        sessionStorage.removeItem(STORAGE_KEY);
    } catch {
        /* ignore */
    }
};

export const nextSimulatedSequence = (bindings: SimulatedEndpointBinding[]): number =>
    bindings.reduce((max, item) => Math.max(max, Number(item.sequence) || 0), 0) + 1;

export const bindingFromSample = (
    feature: AppFeature,
    sequence: number,
    detail: SimulatedResponseDetail,
    availability: SimulatedAvailability = 'data'
): SimulatedEndpointBinding => ({
    sequence,
    appFeatureCode: feature.code,
    appFeatureId: feature._id,
    name: detail.name || feature.name,
    method: detail.method || feature.method,
    url: detail.url || feature.url || feature.endpoint,
    parameterDefaults: {},
    inputFieldMapping: {},
    dependencies: detail.inputs?.length ? detail.inputs : feature.dependencies,
    availability,
    responseOutline: detail.outline,
    simulatedResponse: detail.sample,
});

export const featureForBinding = (binding: SimulatedEndpointBinding, catalog: AppFeature[]): AppFeature => {
    const found = catalog.find(
        (feature) => feature.code === binding.appFeatureCode || feature._id === binding.appFeatureId
    );
    if (found) return found;
    return {
        _id: binding.appFeatureId || `simulated-${binding.appFeatureCode}`,
        code: binding.appFeatureCode,
        name: binding.name || binding.appFeatureCode,
        method: binding.method,
        url: binding.url,
        dependencies: Array.isArray(binding.dependencies) ? (binding.dependencies as AppFeature['dependencies']) : [],
    };
};

export const simulatedResults = (bindings: SimulatedEndpointBinding[]): Record<number, unknown> => {
    const results: Record<number, unknown> = {};
    for (const binding of bindings) {
        if (binding.availability === 'missing') continue;
        results[binding.sequence] = binding.simulatedResponse ?? null;
    }
    return results;
};

export const SIMULATED_LIST_SIZES = [5, 10, 20] as const;

const isRecord = (value: unknown): value is Record<string, unknown> =>
    Boolean(value) && typeof value === 'object' && !Array.isArray(value);

/** True when a prepared sample contains a list of objects the designer can draw as a table. */
export const sampleHasObjectList = (value: unknown, depth = 0): boolean => {
    if (depth > 8 || value == null) return false;
    if (Array.isArray(value)) {
        return value.some((item) => isRecord(item) || Array.isArray(item));
    }
    if (!isRecord(value)) return false;
    return Object.values(value).some((entry) => sampleHasObjectList(entry, depth + 1));
};

const varyListCopy = (value: unknown, index: number): unknown => {
    if (!index) return value;
    if (Array.isArray(value)) return value.map((item) => varyListCopy(item, index));
    if (isRecord(value)) {
        const next: Record<string, unknown> = {};
        for (const [key, child] of Object.entries(value)) next[key] = varyListCopy(child, index);
        return next;
    }
    if (typeof value === 'string' && value.trim()) return `${value} ${index + 1}`;
    if (typeof value === 'number' && Number.isFinite(value)) return value + index;
    return value;
};

/** Repeat or trim every object list so a sample PDF can be tried with a chosen row count. */
export const resizeObjectLists = (value: unknown, count: number, depth = 0): unknown => {
    const size = Math.min(30, Math.max(1, Math.round(Number(count)) || 1));
    if (depth > 8 || value == null) return value;
    if (Array.isArray(value)) {
        const hasRows = value.some((item) => isRecord(item) || Array.isArray(item));
        if (!hasRows || !value.length) return value;
        const seeds = value.map((item) =>
            isRecord(item) || Array.isArray(item) ? resizeObjectLists(item, size, depth + 1) : item
        );
        const rows: unknown[] = [];
        for (let index = 0; index < size; index += 1) rows.push(varyListCopy(seeds[index % seeds.length], index));
        return rows;
    }
    if (!isRecord(value)) return value;
    const next: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value)) next[key] = resizeObjectLists(child, size, depth + 1);
    return next;
};

export const previewHasObjectList = (data: object | null | undefined): boolean => {
    if (!data || !('results' in data)) return false;
    return sampleHasObjectList((data as { results?: unknown }).results);
};

export const previewWithListSize = <T extends object>(data: T, count: number): T => {
    if (!('results' in data) || (data as { results?: unknown }).results == null) return data;
    return {
        ...data,
        results: resizeObjectLists((data as { results?: unknown }).results, count),
    } as T;
};

export const flowForSimulatedFeatures = (features: AppFeature[], current: FlowGraph, keepCurrent: boolean): FlowGraph => {
    if (!features.length) return emptyFlowGraph();
    if (!keepCurrent || !endpointNodes(current).length) return graphFromLinearChain(features);
    const ids = new Set(features.map((feature) => feature._id).filter((id): id is string => Boolean(id)));
    const codes = new Set(features.map((feature) => feature.code).filter((code): code is string => Boolean(code)));
    return endpointNodes(current).reduce((graph, node) => {
        const featureId = node.feature?._id;
        const code = node.feature?.code;
        const kept = ids.has(node.id) || (featureId ? ids.has(featureId) : false) || (code ? codes.has(code) : false);
        return kept ? graph : removeFlowNode(graph, node.id);
    }, current);
};
