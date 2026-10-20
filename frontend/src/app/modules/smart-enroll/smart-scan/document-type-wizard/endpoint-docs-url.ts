import { docsPageUrl } from 'app/core/docs/verifik-docs-urls';
import endpointDocsPaths from './endpoint-docs-paths.json';

const PATHS = endpointDocsPaths as Record<string, string>;

/**
 * Catalog URL without a leading slash, so it matches the docs inventory.
 */
const normalizeEndpointUrl = (url: string): string => {
    const trimmed = url.trim();
    const path = trimmed.startsWith('http') ? safePathname(trimmed) : trimmed;

    return path.replace(/^\/+/, '').replace(/\/+$/, '');
};

const safePathname = (url: string): string => {
    try {
        return new URL(url).pathname;
    } catch {
        return url;
    }
};

/**
 * Docs path for a catalog URL, such as v2/pa/cedula to identity/panama.
 */
export const docsPathForEndpoint = (url: string | undefined): string | null => {
    if (!url?.trim()) return null;
    const key = normalizeEndpointUrl(url);

    return PATHS[key] || null;
};

/**
 * Absolute docs page. Spanish uses the verifik-es prefix; other locales stay on English.
 */
export const endpointDocsUrl = (url: string | undefined, lang: string): string | null => {
    const path = docsPathForEndpoint(url);
    if (!path) return null;
    const prefix = lang === 'es' ? '/verifik-es' : '';

    return docsPageUrl(`${prefix}/${path}`);
};

/**
 * Opens this endpoint in the in-app Postman client.
 */
export const postmanUrlForFeature = (code: string): string => `/postman?code=${encodeURIComponent(code)}`;
