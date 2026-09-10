import { ApiEndpoint, EndpointDocParamRow, EndpointDocs } from './postman.types';

const SYSTEM_PARAM_KEYS = new Set(['includeCost', 'force']);

const FALLBACK_DOC_PARAMS: Record<string, EndpointDocParamRow[]> = {
    colombia_api_driver: [{ field: 'primerApellido', description: 'First last name' }],
};

const collectDocParamRows = (endpoint: ApiEndpoint): EndpointDocParamRow[] => {
    const byField = new Map<string, EndpointDocParamRow>();
    for (const locale of Object.values(endpoint.docs || {})) {
        for (const row of locale?.params ?? []) {
            const field = row.field?.trim();
            if (!field || byField.has(field) || SYSTEM_PARAM_KEYS.has(field)) continue;
            byField.set(field, row);
        }
    }
    for (const row of FALLBACK_DOC_PARAMS[endpoint.code || ''] || []) {
        if (!byField.has(row.field)) byField.set(row.field, row);
    }
    return [...byField.values()];
};

const requiredWhenForDocField = (
    code: string | undefined,
    field: string
): { field: string; in?: string[] } | undefined => {
    if (code === 'colombia_api_driver' && field === 'primerApellido') {
        return { field: 'documentType', in: ['PA'] };
    }
    return undefined;
};

/**
 * Adds documented query/body fields that are missing from AppFeature.dependencies
 * so Check List / Postman can collect optional params like `primerApellido`.
 */
export const mergeParamsFromDocs = (endpoint: ApiEndpoint): ApiEndpoint => {
    const existing = endpoint.params ?? [];
    const have = new Set(existing.map((param) => param.key));
    const extras = collectDocParamRows(endpoint)
        .filter((row) => !have.has(row.field))
        .map((row) => {
            const requiredWhen = requiredWhenForDocField(endpoint.code, row.field);
            return {
                key: row.field,
                value: '',
                type: 'String',
                required: false,
                description: row.description,
                ...(requiredWhen ? { requiredWhen } : {}),
            };
        });

    if (!extras.length) return endpoint;
    return { ...endpoint, params: [...existing, ...extras] };
};

/**
 * Stable UI string for numeric prices (avoids float artifacts like 0.099999999999998).
 */
export const formatCatalogPrice = (value: number | undefined | null, maxDecimals = 6): string => {
    if (value == null || !Number.isFinite(value)) return '0';
    return parseFloat(value.toFixed(maxDecimals)).toString();
};

export const roundCatalogNumber = (value: number, maxDecimals = 6): number => {
    if (!Number.isFinite(value)) return value;
    return parseFloat(value.toFixed(maxDecimals));
};

export const sanitizeDisplayPayload = (value: unknown): unknown => {
    if (typeof value === 'number') return roundCatalogNumber(value);
    if (Array.isArray(value)) return value.map((item) => sanitizeDisplayPayload(item));
    if (value && typeof value === 'object') {
        return Object.fromEntries(
            Object.entries(value as Record<string, unknown>).map(([key, item]) => [
                key,
                sanitizeDisplayPayload(item),
            ])
        );
    }
    return value;
};
