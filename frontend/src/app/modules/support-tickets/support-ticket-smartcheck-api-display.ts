import {
    SUPPORT_TICKET_SMARTCHECK_APIS,
    type SupportTicketSmartCheckApi,
} from './support-ticket-smartcheck-apis.constants';

/** Turn an API feature code into readable words when no i18n title exists. */
export const humanizeFeatureCode = (code: string): string =>
    code.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

/** Label from endpoint + country when `appFeatures.<code>.title` is absent. */
export const fallbackSmartCheckApiLabel = (api: SupportTicketSmartCheckApi): string => {
    const parts = [api.endpoint?.replace(/^POST\s+/i, ''), api.country].filter(Boolean);
    return parts.length ? parts.join(' · ') : humanizeFeatureCode(api.value);
};

export const findSmartCheckApi = (value: string | null | undefined): SupportTicketSmartCheckApi | null => {
    const v = value?.trim();
    if (!v) return null;
    return SUPPORT_TICKET_SMARTCHECK_APIS.find((a) => a.value === v) ?? null;
};

/**
 * Read `appFeatures.<apiValue>.title` from already-loaded Transloco translations (no missing-key side effects).
 */
export const readAppFeatureTitleFromTranslations = (
    translations: Record<string, unknown> | null | undefined,
    apiValue: string,
): string | null => {
    if (!translations || !apiValue) return null;
    const appFeatures = translations['appFeatures'];
    if (!appFeatures || typeof appFeatures !== 'object' || Array.isArray(appFeatures)) return null;
    const block = (appFeatures as Record<string, unknown>)[apiValue];
    if (!block || typeof block !== 'object' || Array.isArray(block)) return null;
    const title = (block as Record<string, unknown>)['title'];
    return typeof title === 'string' && title.trim() ? title.trim() : null;
};
