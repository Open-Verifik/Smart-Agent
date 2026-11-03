import { emptyFlowGraph, endpointNodes, FlowGraph, graphFromLinearChain } from '../endpoint-flow-graph.util';
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

export const flowForSimulatedFeatures = (features: AppFeature[], current: FlowGraph, keepCurrent: boolean): FlowGraph => {
    if (keepCurrent && endpointNodes(current).length) return current;
    return features.length ? graphFromLinearChain(features) : emptyFlowGraph();
};
