import { isClientVisibleBatchDependencyField } from './smart-batch-dependency.constants';
import type { BatchConfiguration } from './smart-batch.service';

/** Mirrors create-batch dependency field merge metadata required for canonical CSV column order */
type Descriptor = {
    field: string;
    required: boolean;
};

/**
 * Walks batch configuration dependency fields using the same rules as Create Batch templates.
 *
 * Disabled steps remain included to match legacy create-batch.requiredFields aggregation.
 */
const collectDescriptors = (config: BatchConfiguration): Descriptor[] => {
    if (!config?.steps) return [];

    const fieldsMap = new Map<string, Descriptor>();

    config.steps
        .sort((a, b) => a.sequence - b.sequence)
        .forEach((step) => {
            const feature = step.appFeature as { name?: string; dependencies?: unknown[] };
            const dependencies = feature?.dependencies || [];

            (dependencies as { field?: string; required?: boolean }[]).forEach((dep) => {
                if (!dep?.field) return;
                if (!isClientVisibleBatchDependencyField(dep.field)) return;
                if (!fieldsMap.has(dep.field) || dep.required) {
                    fieldsMap.set(dep.field, {
                        field: dep.field,
                        required: dep.required || false,
                    });
                }
            });
        });

    return Array.from(fieldsMap.values()).sort((a, b) => {
        if (a.required !== b.required) return b.required ? 1 : -1;
        return a.field.localeCompare(b.field);
    });
};

/** Column order for CSV template / failed-input exports; matches Create Batch `requiredFields` order. */
export const getBatchInputCsvHeaders = (config: BatchConfiguration): string[] =>
    collectDescriptors(config).map((d) => d.field);

/** RFC-style CSV cell escaping (quotes for comma, newline, double-quote). */
export const escapeCsvRow = (cells: string[]): string =>
    cells
        .map((cell) => {
            const s = String(cell ?? '');
            if (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('\r')) {
                return `"${s.replace(/"/g, '""')}"`;
            }
            return s;
        })
        .join(',');

/** Flatten primitive or JSON-serialize objects/arrays for one CSV cell. */
export const inputDataValueForCsvCell = (value: unknown): string => {
    if (value === null || value === undefined) return '';
    if (typeof value === 'object') {
        try {
            return JSON.stringify(value);
        } catch {
            return String(value);
        }
    }
    return String(value);
};
