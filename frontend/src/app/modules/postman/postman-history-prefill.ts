export const POSTMAN_HISTORY_PREFILL_STORAGE_KEY = 'smartAgent_postmanHistoryPrefill';

export interface PostmanHistoryPrefillPayload {
    v: 1;
    source: 'history';
    code: string;
    paramValues: Record<string, unknown>;
    paymentMode: 'credits' | 'x402';
    method?: string;
    requestId?: string;
}
