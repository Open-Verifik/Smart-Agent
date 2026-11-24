import { getPresetStepCount } from './batch-required-fields.util';
import type { BatchConfiguration } from './smart-batch.service';
import type { BatchConfigurationRef, SmartReportTemplate } from './smart-report.service';

export type PreviewRunTarget =
    | { kind: 'config'; configId: string; configName: string; stepCount: number }
    | { kind: 'systemPreset'; systemKey: string; stepCount: number }
    | { kind: 'unlinked' }
    | { kind: 'comingSoon' };

export interface ResolvePreviewRunTargetInput {
    template: SmartReportTemplate;
    sourceConfig?: BatchConfiguration | null;
    configurations: BatchConfiguration[];
}

export const toEntityIdString = (value: unknown): string | null => {
    if (value == null) return null;

    if (typeof value === 'string') {
        const trimmed = value.trim();
        return trimmed || null;
    }

    if (typeof value === 'object') {
        const record = value as { _id?: unknown; id?: unknown; toString?: () => string };
        const nestedId = record._id ?? record.id;

        if (nestedId != null && nestedId !== value) {
            return toEntityIdString(nestedId);
        }

        if (typeof record.toString === 'function') {
            const asString = record.toString().trim();
            if (asString && asString !== '[object Object]') {
                return asString;
            }
        }
    }

    return null;
};

export const resolveBatchConfigReference = (
    ref: string | BatchConfiguration | BatchConfigurationRef | null | undefined,
    configurations: BatchConfiguration[]
): { id: string | null; name: string | null; config: BatchConfiguration | null } => {
    if (!ref) {
        return { id: null, name: null, config: null };
    }

    const id = toEntityIdString(typeof ref === 'string' ? ref : (ref._id ?? ref.id));
    if (!id) {
        return { id: null, name: null, config: null };
    }

    const populatedName = typeof ref === 'object' ? (ref.name ?? null) : null;
    const config = configurations.find((c) => toEntityIdString(c._id ?? c.id) === id) ?? null;

    return {
        id,
        name: populatedName ?? config?.name ?? null,
        config,
    };
};

export const resolvePreviewRunTarget = ({
    template,
    sourceConfig,
    configurations,
}: ResolvePreviewRunTargetInput): PreviewRunTarget => {
    if (sourceConfig) {
        const configId = toEntityIdString(sourceConfig._id ?? sourceConfig.id);
        if (configId) {
            return {
                kind: 'config',
                configId,
                configName: sourceConfig.name || '',
                stepCount: sourceConfig.steps?.length ?? 0,
            };
        }
    }

    if (template.type === 'System') {
        const stepCount = getPresetStepCount(template);
        if (template.systemKey && stepCount > 0) {
            return {
                kind: 'systemPreset',
                systemKey: template.systemKey,
                stepCount,
            };
        }
        return { kind: 'comingSoon' };
    }

    const directRef = resolveBatchConfigReference(template.batchConfiguration, configurations);
    if (directRef.id) {
        return {
            kind: 'config',
            configId: directRef.id,
            configName: directRef.name ?? '',
            stepCount: directRef.config?.steps?.length ?? getPresetStepCount(template),
        };
    }

    const templateId = toEntityIdString(template._id);
    if (templateId) {
        const matchedConfig = configurations.find(
            (config) => toEntityIdString(config.preferredReportTemplate) === templateId
        );
        const matchedId = matchedConfig ? toEntityIdString(matchedConfig._id ?? matchedConfig.id) : null;
        if (matchedConfig && matchedId) {
            return {
                kind: 'config',
                configId: matchedId,
                configName: matchedConfig.name || '',
                stepCount: matchedConfig.steps?.length ?? 0,
            };
        }
    }

    return { kind: 'unlinked' };
};

export const getSmartBatchRoutePrefix = (currentUrl: string): '/smart-reports' | '/smart-batch' =>
    currentUrl.startsWith('/smart-reports') ? '/smart-reports' : '/smart-batch';
