import { canonicalParamFilterId, featureParamFilterIds, FeatureParamShape } from './endpoint-param-highlight.util';

export interface ChainProfile {
    inputs: string[];
    outputs: string[];
}

const SKIP_KEYS = new Set([
    'signature',
    'message',
    'status',
    'code',
    'error',
    'errors',
    'meta',
    'success',
    'id',
    '_id',
]);

const tokenOf = (field: string): string => field.replace(/[^a-z0-9]/gi, '').toLowerCase();

/** Same aliases as the catalog, plus the vehicle id that plate lookups hand to the next consult. */
export const canonicalChainField = (field: string): string => {
    const token = tokenOf(field);
    if (
        /^(vin|niv|bim|chasis|chassis|bastidor|numerovin|vinnumber|numerochasis|numerobastidor)$/.test(token) ||
        token.endsWith('vin') ||
        token.endsWith('chasis') ||
        token.endsWith('bastidor')
    ) {
        return 'vin';
    }
    return canonicalParamFilterId(field);
};

export const inputKeysForFeature = (feature: FeatureParamShape): string[] =>
    [...new Set(featureParamFilterIds(feature).map(canonicalChainField))];

export const sharedChainFields = (outputs: string[], inputs: string[]): string[] => {
    const available = new Set(outputs);
    return inputs.filter((field) => available.has(field));
};

export const canFeed = (source: ChainProfile | undefined, target: ChainProfile | undefined): boolean =>
    sharedChainFields(source?.outputs ?? [], target?.inputs ?? []).length > 0;

const unwrapPayload = (value: unknown): unknown => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return value;
    const record = value as Record<string, unknown>;
    for (const key of ['data', 'result', 'results']) {
        const child = record[key];
        if (Array.isArray(child)) return child[0] ?? null;
        if (child && typeof child === 'object') return child;
    }
    return value;
};

const collectOutputKeys = (value: unknown, into: Set<string>, depth: number): void => {
    if (!value || typeof value !== 'object' || depth > 2) return;
    if (Array.isArray(value)) {
        if (value.length) collectOutputKeys(value[0], into, depth + 1);
        return;
    }
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
        if (SKIP_KEYS.has(key)) continue;
        if (key === 'data' || key === 'result' || key === 'results') {
            collectOutputKeys(child, into, depth + 1);
            continue;
        }
        into.add(canonicalChainField(key));
        if (child && typeof child === 'object') collectOutputKeys(child, into, depth + 1);
    }
};

const firstSuccessBody = (docs: unknown): unknown => {
    if (!docs || typeof docs !== 'object') return null;
    for (const locale of Object.values(docs as Record<string, { responses?: { status?: string; body?: string }[] }>)) {
        const responses = locale?.responses;
        if (!Array.isArray(responses)) continue;
        const sample = responses.find((item) => String(item?.status) === '200') ?? responses[0];
        if (!sample?.body || typeof sample.body !== 'string') continue;
        try {
            return JSON.parse(sample.body);
        } catch {
            continue;
        }
    }
    return null;
};

/** Field names from the documented 200 JSON sample. Values are ignored. */
export const outputKeysFromDocs = (docs: unknown): string[] => {
    const body = firstSuccessBody(docs);
    if (!body) return [];
    const keys = new Set<string>();
    collectOutputKeys(unwrapPayload(body), keys, 0);
    return [...keys];
};
