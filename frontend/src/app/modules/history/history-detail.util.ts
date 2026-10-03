import { ApiRequest } from './history.service';

/** Common SmartCheck query fields that identify the consulted document or subject. */
const CONSULTED_DOCUMENT_KEYS = [
    'documentNumber',
    'document',
    'plate',
    'vin',
    'cedula',
    'dni',
    'nit',
    'rut',
    'licenseNumber',
    'permitNumber',
    'policyNumber',
    'processNumber',
    'serialNumber',
    'citizenIdentifier',
] as const;

/**
 * Backend `/v2/api-requests/:id/data` returns `response`; the UI expects `apiResponse`.
 * Merge list + detail payloads so params survive when the detail call fails.
 */
export const normalizeHistoryDetail = (
    row: ApiRequest,
    detail?: Partial<ApiRequest> & { response?: unknown } | null
): ApiRequest => {
    const merged = { ...(row ?? {}), ...(detail ?? {}) } as ApiRequest & { response?: unknown };
    const apiResponse = merged.apiResponse ?? merged.response ?? null;

    return {
        ...merged,
        params: merged.params ?? row?.params,
        apiResponse,
    };
};

/** Human-readable consulted document/subject label for list rows and exports. */
export const extractConsultedDocument = (params: unknown): string | null => {
    if (!params || typeof params !== 'object') return null;

    const record = params as Record<string, unknown>;

    for (const key of CONSULTED_DOCUMENT_KEYS) {
        const value = record[key];
        if (value != null && `${value}`.trim()) {
            return `${value}`.trim();
        }
    }

    for (const [key, value] of Object.entries(record)) {
        if (key.startsWith('_')) continue;
        if (typeof value === 'string' && value.trim()) {
            return value.trim();
        }
    }

    return null;
};
