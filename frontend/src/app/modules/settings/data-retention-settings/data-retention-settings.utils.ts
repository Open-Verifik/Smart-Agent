export interface RetentionRuleConfig {
    mode?: 'store' | 'ephemeral' | 'none';
    retentionHours?: number | null;
}

export interface ClientDataRetentionConfig {
    mode: 'store' | 'ephemeral' | 'none';
    webhookHoldHours: number;
    allowManualDelete: boolean;
    types: {
        documentImages: RetentionRuleConfig;
        ocrExtraction: RetentionRuleConfig;
        faceImages: RetentionRuleConfig;
        documentLiveness: RetentionRuleConfig;
        livenessResults?: RetentionRuleConfig;
        webhookPayloads?: RetentionRuleConfig;
        apiResponseLogs?: RetentionRuleConfig;
    };
}

export const DEFAULT_CONFIG: ClientDataRetentionConfig = {
    mode: 'store',
    webhookHoldHours: 24,
    allowManualDelete: true,
    types: {
        documentImages: { mode: 'store', retentionHours: null },
        ocrExtraction: { mode: 'store', retentionHours: null },
        faceImages: { mode: 'store', retentionHours: null },
        documentLiveness: { mode: 'store', retentionHours: null },
        livenessResults: { mode: 'store', retentionHours: null },
        webhookPayloads: { mode: 'store', retentionHours: null },
        apiResponseLogs: { mode: 'store', retentionHours: null },
    },
};

export function syncGlobalToGranular(
    config: ClientDataRetentionConfig,
    mode: 'store' | 'ephemeral' | 'none'
): ClientDataRetentionConfig {
    const updated: ClientDataRetentionConfig = {
        ...config,
        mode,
        types: {
            ...config.types,
            documentImages: { ...config.types.documentImages, mode },
            faceImages: { ...config.types.faceImages, mode },
            ocrExtraction: { ...config.types.ocrExtraction, mode },
            documentLiveness: { ...config.types.documentLiveness, mode },
        },
    };
    if (updated.types.livenessResults) {
        updated.types.livenessResults = { ...updated.types.livenessResults, mode };
    }
    if (updated.types.webhookPayloads) {
        updated.types.webhookPayloads = { ...updated.types.webhookPayloads, mode };
    }
    if (updated.types.apiResponseLogs) {
        updated.types.apiResponseLogs = { ...updated.types.apiResponseLogs, mode };
    }
    return updated;
}

export function computeIsCustomized(config: ClientDataRetentionConfig): boolean {
    if (!config || !config.types) return false;
    const types = config.types;
    const modes = [
        types.documentImages?.mode,
        types.faceImages?.mode,
        types.ocrExtraction?.mode,
        types.documentLiveness?.mode,
    ];
    return !modes.every((m) => m === config.mode);
}

export function computeAllSameMode(config: ClientDataRetentionConfig): ('store' | 'ephemeral' | 'none') | null {
    if (!config || !config.types) return null;
    const types = config.types;
    const modes = [
        types.documentImages?.mode,
        types.faceImages?.mode,
        types.ocrExtraction?.mode,
        types.documentLiveness?.mode,
    ];
    const first = modes[0];
    if (first && modes.every((m) => m === first)) {
        return first;
    }
    return null;
}
