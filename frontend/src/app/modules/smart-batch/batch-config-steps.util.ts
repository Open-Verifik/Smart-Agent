import { AppFeature, BatchStep } from './smart-batch.service';

/** Resolves the AppFeature id stored on a batch step. */
export function batchStepFeatureId(step: BatchStep | undefined): string | undefined {
    if (!step?.appFeature) return undefined;

    return typeof step.appFeature === 'object' ? step.appFeature._id : step.appFeature;
}

/** Human-readable name for a step, whether the feature is populated or not. */
export function batchStepLabel(step: BatchStep): string {
    const feature = step.appFeature;

    if (typeof feature === 'object' && feature) {
        return (feature.nameES || feature.name || feature.code || '').trim() || `Paso ${step.sequence}`;
    }

    return `Paso ${step.sequence}`;
}

/**
 * Appends a feature as the next enabled step. Existing steps keep their mappings and defaults.
 */
export function appendFeatureToBatchSteps(steps: BatchStep[], feature: AppFeature): BatchStep[] {
    const id = feature._id;

    if (!id || steps.some((step) => batchStepFeatureId(step) === id)) {
        return steps;
    }

    const next: BatchStep[] = [
        ...steps,
        {
            appFeature: id,
            sequence: 0,
            enabled: true,
            parameterDefaults: {},
            inputFieldMapping: {},
            outputFieldsToKeep: [],
            maxRetries: 3,
            retryDelayBaseSeconds: 4,
            timeoutSeconds: 30,
        },
    ];

    return renumberBatchSteps(next);
}

/** Removes one feature from the pipeline and renumbers remaining enabled steps. */
export function removeFeatureFromBatchSteps(steps: BatchStep[], featureId: string): BatchStep[] {
    if (!featureId) return renumberBatchSteps(steps ?? []);
    const filtered = (steps ?? []).filter((step) => batchStepFeatureId(step) !== featureId);
    return renumberBatchSteps(filtered);
}

/** Keeps enabled steps numbered 1…n in pipeline order. */
export function renumberBatchSteps(steps: BatchStep[]): BatchStep[] {
    const enabled = orderedBatchSteps(steps);
    const disabled = (steps ?? []).filter((step) => step.enabled === false);
    const renumbered = enabled.map((step, index) => ({ ...step, sequence: index + 1 }));

    return [...renumbered, ...disabled];
}

/** Enabled steps in pipeline order. */
export function orderedBatchSteps(steps: BatchStep[] | undefined): BatchStep[] {
    return [...(steps ?? [])]
        .filter((step) => step.enabled !== false)
        .sort((a, b) => a.sequence - b.sequence);
}
