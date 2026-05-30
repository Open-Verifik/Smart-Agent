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

const normalizeEnumToken = (value: unknown): string => String(value).trim().toLowerCase();

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

    getEnabledSteps(config).forEach((step) => {
        const feature = getStepFeature(step);
        getStepDependencies(step).forEach((dep) => {
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
    inputData: Record<string, unknown> | null | undefined
): StepIncompatibilityReason | null => {
    const input = inputData ?? {};

    for (const dep of getStepDependencies(step)) {
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
        const skipReason = getStepIncompatibilityReason(step, inputData) ?? undefined;
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
