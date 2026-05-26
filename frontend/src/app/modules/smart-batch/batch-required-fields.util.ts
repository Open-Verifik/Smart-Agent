import { BatchConfiguration } from './smart-batch.service';
import { isClientVisibleBatchDependencyField } from './smart-batch-dependency.constants';

export interface BatchRequiredField {
    field: string;
    required: boolean;
    enumValues?: string[];
    type?: string;
    description?: string;
}

/**
 * Extract unique input fields from a batch configuration's step dependencies.
 */
export const extractRequiredFieldsFromConfig = (
    config: BatchConfiguration | null | undefined
): BatchRequiredField[] => {
    if (!config?.steps?.length) return [];

    const fieldsMap = new Map<string, BatchRequiredField>();

    [...config.steps]
        .sort((a, b) => a.sequence - b.sequence)
        .forEach((step) => {
            const feature = step.appFeature as { dependencies?: Array<Record<string, unknown>>; name?: string };
            const dependencies = feature?.dependencies || [];

            dependencies.forEach((dep) => {
                const field = dep?.field as string | undefined;
                if (!field || !isClientVisibleBatchDependencyField(field)) return;

                const prev = fieldsMap.get(field);
                fieldsMap.set(field, {
                    field,
                    required: Boolean(dep.required) || Boolean(prev?.required),
                    enumValues: (dep.enum as string[] | undefined) || prev?.enumValues,
                    type: (dep.type as string | undefined) || prev?.type || 'string',
                    description: (dep.description as string | undefined) || prev?.description,
                });
            });
        });

    return Array.from(fieldsMap.values()).sort((a, b) => {
        if (a.required !== b.required) return a.required ? -1 : 1;
        return a.field.localeCompare(b.field);
    });
};

export const getPresetStepCount = (template: { presetSteps?: unknown[]; sections?: unknown[] }): number => {
    if (template.presetSteps?.length) return template.presetSteps.length;
    return template.sections?.length ?? 0;
};
