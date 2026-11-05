import { canonicalChainField } from './endpoint-chain.util';
import { FLOW_START_ID, parseFlowGraph } from './endpoint-flow-graph.util';
import { queryModesForFeature } from './query-modes.util';
import { BatchConfiguration, BatchStep } from './smart-batch.service';
import { isClientVisibleBatchDependencyField } from './smart-batch-dependency.constants';

/** Client-only metadata persisted on row inputData; stripped before API calls. */
export const BATCH_INPUT_META_SKIPPED_STEPS_KEY = '__batchSkippedSteps';

export interface BatchSkippedStepMeta {
    sequence: number;
    stepName: string;
    stepCode?: string;
    field: string;
    value: string;
    allowedValues: string[];
}

export interface BatchRequiredFieldEnumByStep {
    stepSequence: number;
    stepName: string;
    stepCode?: string;
    values: string[];
}

export interface BatchRequiredField {
    field: string;
    required: boolean;
    enumValues?: string[];
    enumValuesByStep?: BatchRequiredFieldEnumByStep[];
    type?: string;
    description?: string;
}

export interface StepDependency {
    field: string;
    required?: boolean;
    enum?: string[] | null;
    type?: string;
    description?: string;
    dependencyGroup?: string;
    requiredWhen?: { field: string; in?: string[] };
    dateFormat?: string;
}

export interface StepIncompatibilityReason {
    field: string;
    value: string;
    allowedValues: string[];
}

export interface StepCompatibilityView {
    sequence: number;
    stepName: string;
    stepCode?: string;
    compatible: boolean;
    skipReason?: StepIncompatibilityReason;
}

const CHAIN_TEMPLATE = /^\{\{\s*[^}]+\s*\}\}$/;

const normalizeEnumToken = (value: unknown): string => String(value).trim().toLowerCase();

const featureIdOf = (step: BatchStep): string => {
    const feature = step.appFeature;
    return typeof feature === 'object' ? feature?._id || '' : String(feature || '');
};

/** Query option saved on the step or on the flow node. The board's first option applies when the node has none. */
export const queryModeForBatchStep = (
    step: BatchStep,
    config: BatchConfiguration | null | undefined
): string => {
    const direct = typeof step.queryMode === 'string' ? step.queryMode.trim() : '';
    if (direct) return direct;
    const featureId = featureIdOf(step);
    const graph = parseFlowGraph(config?.visitaFlow);
    const stored = graph?.ports?.[featureId]?.queryMode?.trim();
    if (stored) return stored;
    const feature = typeof step.appFeature === 'object' ? step.appFeature : undefined;
    if (!feature || !graph?.nodes.some((node) => node.id === featureId || node.feature?._id === featureId)) {
        return '';
    }
    const modes = queryModesForFeature(feature);
    return modes.length > 1 ? modes[0].id : '';
};

const suppliedByChain = (step: BatchStep, config: BatchConfiguration | null | undefined): Set<string> => {
    const supplied = new Set<string>();
    const defaults =
        step.parameterDefaults && typeof step.parameterDefaults === 'object'
            ? (step.parameterDefaults as Record<string, unknown>)
            : {};
    for (const [key, value] of Object.entries(defaults)) {
        if (typeof value === 'string' && CHAIN_TEMPLATE.test(value.trim())) {
            supplied.add(canonicalChainField(key));
        }
    }
    const graph = parseFlowGraph(config?.visitaFlow);
    const featureId = featureIdOf(step);
    if (!graph || !featureId) return supplied;
    const nodeId =
        graph.nodes.find((node) => node.id === featureId || node.feature?._id === featureId)?.id ?? featureId;
    for (const edge of graph.edges) {
        if (edge.to !== nodeId || edge.toPort === '*' || edge.from === FLOW_START_ID) continue;
        supplied.add(canonicalChainField(edge.toPort));
    }
    return supplied;
};

/**
 * Fields this step still needs from the row. A selected query option drops the
 * other option. A wire, or a `{{results.N...}}` default, drops the field too.
 */
/** A wire into one option means that option is the consult, even if the mode was not stored. */
const modeSuppliedByChain = (dependencies: StepDependency[], supplied: Set<string>): string => {
    const groups = new Set<string>();
    for (const dependency of dependencies) {
        const group = (dependency.dependencyGroup ?? '').trim();
        if (group && supplied.has(canonicalChainField(dependency.field))) groups.add(group);
    }
    return groups.size === 1 ? [...groups][0] : '';
};

export const dependenciesAskedOfTheUser = (
    step: BatchStep,
    config: BatchConfiguration | null | undefined
): StepDependency[] => {
    const dependencies = getStepDependencies(step);
    const supplied = suppliedByChain(step, config);
    const mode = queryModeForBatchStep(step, config) || modeSuppliedByChain(dependencies, supplied);
    return dependencies
        .filter((dependency) => {
            const group = (dependency.dependencyGroup ?? '').trim();
            if (mode && group && group !== mode) return false;
            return !supplied.has(canonicalChainField(dependency.field));
        })
        .map((dependency) => ({
            ...dependency,
            required: mode && !dependency.requiredWhen?.field ? true : Boolean(dependency.required),
        }));
};

const usesFlowInputPlan = (config: BatchConfiguration | null | undefined): boolean => {
    if (!config) return false;
    if (
        getEnabledSteps(config).some(
            (step) =>
                Boolean(queryModeForBatchStep(step, config)) ||
                Object.values(
                    step.parameterDefaults && typeof step.parameterDefaults === 'object'
                        ? (step.parameterDefaults as Record<string, unknown>)
                        : {}
                ).some((value) => typeof value === 'string' && CHAIN_TEMPLATE.test(value.trim()))
        )
    ) {
        return true;
    }
    const graph = parseFlowGraph(config.visitaFlow);
    return Boolean(graph?.nodes.some((node) => node.kind === 'endpoint'));
};

/** Steps the browser runner calls, with the flow's option and wires applied. */
export const prepareStepsForRun = (
    steps: BatchStep[],
    config: BatchConfiguration | null | undefined
): BatchStep[] => {
    const enabled = [...steps].filter((step) => step.enabled !== false);
    const sequenceByFeature = new Map(enabled.map((step) => [featureIdOf(step), step.sequence]));
    const graph = parseFlowGraph(config?.visitaFlow);
    return steps.map((step) => {
        const mode = queryModeForBatchStep(step, config);
        const chained: Record<string, string> = {};
        const featureId = featureIdOf(step);
        if (graph && featureId) {
            const nodeId =
                graph.nodes.find((node) => node.id === featureId || node.feature?._id === featureId)?.id ??
                featureId;
            for (const edge of graph.edges) {
                if (edge.to !== nodeId || edge.toPort === '*' || edge.fromPort === '*' || edge.from === FLOW_START_ID) {
                    continue;
                }
                const fromNode = graph.nodes.find((node) => node.id === edge.from);
                const fromFeature = fromNode?.feature?._id || edge.from;
                const fromSequence = sequenceByFeature.get(fromFeature);
                if (!fromSequence) continue;
                const path = edge.fromPath || edge.fromPort;
                const item = Number.isInteger(edge.fromIndex) && (edge.fromIndex as number) >= 0 ? `.${edge.fromIndex}` : '';
                chained[edge.toPort] = `{{results.${fromSequence}.${path}${item}}}`;
            }
        }
        return {
            ...step,
            ...(mode ? { queryMode: mode } : {}),
            parameterDefaults: { ...(step.parameterDefaults ?? {}), ...chained },
        };
    });
};

/** Sorted unique union of enum strings (case preserved from first occurrence). */
export const mergeEnumValues = (
    prev: string[] | undefined,
    next: string[] | undefined
): string[] | undefined => {
    const combined = [...(prev ?? []), ...(next ?? [])];
    if (combined.length === 0) return undefined;

    const seen = new Set<string>();
    const merged: string[] = [];
    for (const value of combined) {
        const token = normalizeEnumToken(value);
        if (!token || seen.has(token)) continue;
        seen.add(token);
        merged.push(String(value).trim());
    }
    return merged.sort((a, b) => a.localeCompare(b));
};

const getStepFeature = (step: BatchStep): {
    name?: string;
    code?: string;
    dependencies?: Array<Record<string, unknown>>;
} => step.appFeature as { name?: string; code?: string; dependencies?: Array<Record<string, unknown>> };

export const getStepDependencies = (step: BatchStep): StepDependency[] => {
    const dependencies = getStepFeature(step)?.dependencies ?? [];
    return dependencies
        .filter(
            (dep) =>
                dep?.field &&
                typeof dep.field === 'string' &&
                isClientVisibleBatchDependencyField(dep.field)
        )
        .map((dep) => ({
            field: String(dep.field),
            required: Boolean(dep.required),
            enum: (dep.enum as string[] | null | undefined) ?? undefined,
            type: (dep.type as string | undefined) ?? undefined,
            description: (dep.description as string | undefined) ?? undefined,
            dependencyGroup: dep.dependencyGroup as string | undefined,
            requiredWhen: dep.requiredWhen as { field: string; in?: string[] } | undefined,
            dateFormat: (dep.dateFormat as string | undefined) ?? undefined,
        }));
};

export const getEnabledSteps = (config: BatchConfiguration | null | undefined): BatchStep[] =>
    [...(config?.steps ?? [])]
        .filter((step) => step.enabled !== false)
        .sort((a, b) => a.sequence - b.sequence);

export const getEnumValuesForStepField = (
    step: BatchStep,
    fieldName: string
): string[] | undefined => {
    const dep = getStepDependencies(step).find((d) => d.field === fieldName);
    const enums = dep?.enum;
    return enums?.length ? enums : undefined;
};

export const getUnionEnumValuesForField = (
    config: BatchConfiguration | null | undefined,
    fieldName: string
): string[] | undefined => {
    let union: string[] | undefined;
    for (const step of getEnabledSteps(config)) {
        union = mergeEnumValues(union, getEnumValuesForStepField(step, fieldName));
    }
    return union;
};

/**
 * Extract unique input fields from a batch configuration's step dependencies.
 */
export const extractRequiredFieldsFromConfig = (
    config: BatchConfiguration | null | undefined
): BatchRequiredField[] => {
    if (!config?.steps?.length) return [];

    const fieldsMap = new Map<string, BatchRequiredField>();
    const planned = usesFlowInputPlan(config);

    getEnabledSteps(config).forEach((step) => {
        const feature = getStepFeature(step);
        const dependencies = planned ? dependenciesAskedOfTheUser(step, config) : getStepDependencies(step);
        dependencies.forEach((dep) => {
            const prev = fieldsMap.get(dep.field);
            const stepEnum = dep.enum?.length ? dep.enum : undefined;
            const enumValuesByStep = [...(prev?.enumValuesByStep ?? [])];

            if (stepEnum) {
                enumValuesByStep.push({
                    stepSequence: step.sequence,
                    stepName: feature?.name || 'Unknown Step',
                    stepCode: feature?.code,
                    values: stepEnum,
                });
            }

            fieldsMap.set(dep.field, {
                field: dep.field,
                required: Boolean(dep.required) || Boolean(prev?.required),
                enumValues: mergeEnumValues(prev?.enumValues, stepEnum),
                enumValuesByStep,
                type: dep.type || prev?.type || 'string',
                description: dep.description || prev?.description,
            });
        });
    });

    return Array.from(fieldsMap.values()).sort((a, b) => {
        if (a.required !== b.required) return a.required ? -1 : 1;
        return a.field.localeCompare(b.field);
    });
};

export const getStepIncompatibilityReason = (
    step: BatchStep,
    inputData: Record<string, unknown> | null | undefined,
    config?: BatchConfiguration | null
): StepIncompatibilityReason | null => {
    const input = inputData ?? {};
    const dependencies = config && usesFlowInputPlan(config) ? dependenciesAskedOfTheUser(step, config) : getStepDependencies(step);

    for (const dep of dependencies) {
        const enums = dep.enum;
        if (!enums?.length) continue;

        const raw = input[dep.field];
        if (raw == null || String(raw).trim() === '') continue;

        const normalizedValue = normalizeEnumToken(raw);
        const validValues = enums.map((v) => String(v).trim());
        const validTokens = validValues.map((v) => normalizeEnumToken(v));

        if (!validTokens.includes(normalizedValue)) {
            return {
                field: dep.field,
                value: String(raw).trim(),
                allowedValues: validValues,
            };
        }
    }

    return null;
};

export const isStepInputCompatible = (
    step: BatchStep,
    inputData: Record<string, unknown> | null | undefined
): boolean => getStepIncompatibilityReason(step, inputData) === null;

export const getStepCompatibilityViews = (
    config: BatchConfiguration | null | undefined,
    inputData: Record<string, unknown> | null | undefined
): StepCompatibilityView[] =>
    getEnabledSteps(config).map((step) => {
        const feature = getStepFeature(step);
        const skipReason = getStepIncompatibilityReason(step, inputData, config) ?? undefined;
        return {
            sequence: step.sequence,
            stepName: feature?.name || 'Unknown Step',
            stepCode: feature?.code,
            compatible: !skipReason,
            skipReason,
        };
    });

export const getBatchSkippedStepsFromInput = (
    inputData: Record<string, unknown> | null | undefined
): BatchSkippedStepMeta[] => {
    const raw = inputData?.[BATCH_INPUT_META_SKIPPED_STEPS_KEY];
    if (!Array.isArray(raw)) return [];
    return raw.filter((item) => item && typeof item === 'object') as BatchSkippedStepMeta[];
};

export const stripBatchInputMeta = (
    inputData: Record<string, unknown> | null | undefined
): Record<string, unknown> => {
    if (!inputData || typeof inputData !== 'object') return {};
    const { [BATCH_INPUT_META_SKIPPED_STEPS_KEY]: _skipped, ...rest } = inputData;
    return rest;
};

export const getPresetStepCount = (template: { presetSteps?: unknown[]; sections?: unknown[] }): number => {
    if (template.presetSteps?.length) return template.presetSteps.length;
    return template.sections?.length ?? 0;
};
