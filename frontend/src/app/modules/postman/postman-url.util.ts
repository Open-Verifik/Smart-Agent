import { ApiEndpoint } from './postman.types';

/**
 * App-feature codes whose GET parameters belong in the URL path (e.g.
 * `/v2/co/bogota/taxi-drivers/plate/:plate`) rather than the query string.
 *
 * Keys are ordered: each maps to one path segment appended after `endpoint.url`.
 */
export const POSTMAN_PATH_PARAM_KEYS_BY_CODE: Record<string, string[]> = {
    co_bogota_taxi_plate: ['plate'],
    co_bogota_taxi_driver_card: ['card'],
};

/**
 * Builds the effective request URL: for path-style features, appends
 * `/${encodeURIComponent(segment)}` for each configured param when all values are set.
 * Otherwise returns `endpoint.url` unchanged.
 */
export function buildPostmanEffectiveUrl(endpoint: ApiEndpoint): string {
    let url = endpoint.url;
    const pathKeys = endpoint.code ? POSTMAN_PATH_PARAM_KEYS_BY_CODE[endpoint.code] : undefined;
    if (!pathKeys?.length || !endpoint.params?.length) {
        return url;
    }

    const segments: string[] = [];
    for (const key of pathKeys) {
        const row = endpoint.params.find((p) => p.key === key);
        const v = row?.value?.trim();
        if (v) {
            segments.push(encodeURIComponent(v));
        }
    }

    if (segments.length === pathKeys.length) {
        url = `${url.replace(/\/+$/, '')}/${segments.join('/')}`;
    }

    return url;
}

/**
 * Param keys that are consumed by the path and must not be sent as query params.
 */
export function getPostmanPathParamKeysForEndpoint(endpoint: ApiEndpoint): string[] | undefined {
    return endpoint.code ? POSTMAN_PATH_PARAM_KEYS_BY_CODE[endpoint.code] : undefined;
}

/**
 * True when path segments (if any) and every `required` query param are non-empty (trim).
 * Path keys must be satisfied even if the backend did not set `required` on the dependency.
 */
export function arePostmanRequestInputsSatisfied(
    endpoint: ApiEndpoint | null | undefined
): boolean {
    if (!endpoint) {
        return false;
    }

    const pathKeys = getPostmanPathParamKeysForEndpoint(endpoint);
    if (pathKeys?.length) {
        for (const key of pathKeys) {
            const v = endpoint.params?.find((p) => p.key === key)?.value;
            if (!String(v ?? '').trim()) {
                return false;
            }
        }
    }

    for (const p of endpoint.params ?? []) {
        if (p.required && !String(p.value ?? '').trim()) {
            return false;
        }
    }

    return true;
}
