import { ApiEndpoint } from './postman.types';

export const POSTMAN_INCLUDE_COST_KEY = 'includeCost';

/**
 * Returns true when `value` represents a truthy `includeCost` flag as
 * accepted by the backend (boolean `true` or string `"true"`).
 */
export function isPostmanIncludeCostEnabled(value: unknown): boolean {
    return value === true || value === 'true';
}

/**
 * Returns the current `includeCost` param row value for `endpoint`, or
 * `null` when the row is absent (user deleted it).
 */
export function getPostmanIncludeCostValue(endpoint: ApiEndpoint): string | null {
    const row = endpoint.params?.find((p) => p.key === POSTMAN_INCLUDE_COST_KEY);
    return row ? (row.value ?? 'true') : null;
}

/**
 * Idempotent: appends an `includeCost` system param row to `endpoint.params`
 * only when no row with that key already exists. Returns a new endpoint
 * object — never mutates.
 */
export function ensurePostmanIncludeCostParam(endpoint: ApiEndpoint): ApiEndpoint {
    const already = endpoint.params?.some((p) => p.key === POSTMAN_INCLUDE_COST_KEY);
    if (already) return endpoint;

    const newRow = {
        key: POSTMAN_INCLUDE_COST_KEY,
        value: 'true',
        type: 'boolean',
        required: false,
        description: '',
        enum: ['true', 'false'],
        system: 'includeCost' as const,
        readonlyKey: true,
    };

    return { ...endpoint, params: [...(endpoint.params ?? []), newRow] };
}

/**
 * Returns a new endpoint with the `includeCost` param row removed, regardless
 * of how it was added (system row or manual). Used when switching to x402.
 */
export function removePostmanIncludeCostParam(endpoint: ApiEndpoint): ApiEndpoint {
    if (!endpoint.params?.some((p) => p.key === POSTMAN_INCLUDE_COST_KEY)) {
        return endpoint;
    }
    return {
        ...endpoint,
        params: endpoint.params!.filter((p) => p.key !== POSTMAN_INCLUDE_COST_KEY),
    };
}

/**
 * Sync helper: add or remove the includeCost row based on payment method.
 * - `'credits'` → ensure row exists (default `true`).
 * - `'x402'`    → remove row (cost path bypassed in x402 send logic).
 */
export function syncPostmanIncludeCostParam(
    endpoint: ApiEndpoint,
    paymentMethod: 'credits' | 'x402'
): ApiEndpoint {
    return paymentMethod === 'credits'
        ? ensurePostmanIncludeCostParam(endpoint)
        : removePostmanIncludeCostParam(endpoint);
}

/**
 * Resolves what should actually be sent to the backend for `includeCost`:
 * - `query` is set to `'true'` for GET/DELETE when the row is enabled.
 * - `body` is `true` for POST/PUT/PATCH when the row is enabled.
 * - Both are `undefined` when the row is absent, empty, or set to `'false'`.
 */
export function resolvePostmanIncludeCostForSend(
    endpoint: ApiEndpoint,
    method: ApiEndpoint['method']
): { query?: string; body?: boolean } {
    const value = getPostmanIncludeCostValue(endpoint);
    if (!isPostmanIncludeCostEnabled(value)) return {};

    const isBodyMethod = method === 'POST' || method === 'PUT' || method === 'PATCH';
    return isBodyMethod ? { body: true } : { query: 'true' };
}
