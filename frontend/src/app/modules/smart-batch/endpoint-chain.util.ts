import { ENDPOINT_IO_CATALOG, EndpointIoCatalogEntry } from './endpoint-io-catalog';
import { canonicalParamFilterId, featureParamFilterIds, FeatureParamShape } from './endpoint-param-highlight.util';
import { featureGroup } from './feature-group.util';

export interface ChainProfile {
    inputs: string[];
    outputs: string[];
    inputEnums: Record<string, string[]>;
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
        /^(vin|niv|bin|bim|chasis|chassis|bastidor|numerovin|vinnumber|numerochasis|numerobastidor|chasisnumber|chassisnumber)$/.test(
            token
        ) ||
        token.includes('chasis') ||
        token.includes('chassis') ||
        token.includes('bastidor') ||
        token.endsWith('vin')
    ) {
        return 'vin';
    }
    if (
        /^(owner|propietario|titular|rut)$/.test(token) ||
        token.includes('propietario') ||
        token.includes('ownerdocument') ||
        token.includes('cedulaprop')
    ) {
        return 'documentNumber';
    }
    return canonicalParamFilterId(field);
};

const uniqueCanonical = (fields: string[]): string[] => [
    ...new Set(fields.filter(Boolean).map(canonicalChainField)),
];

const uniqueEnumValues = (values: string[]): string[] => [
    ...new Set(values.map((value) => value.trim().toUpperCase()).filter(Boolean)),
];

/** Identifiers that can travel from one lookup to the next (typed once, or returned in the payload). */
const SEED_FIELDS = new Set(['documentNumber', 'documentType', 'plate', 'vin', 'fullName', 'processNumber']);

export const inputKeysForFeature = (feature: FeatureParamShape): string[] =>
    uniqueCanonical(featureParamFilterIds(feature));

export const catalogEntryForCode = (code?: string | null): EndpointIoCatalogEntry | undefined =>
    code ? ENDPOINT_IO_CATALOG[code] : undefined;

const enumsFromDependencies = (feature: FeatureParamShape): Record<string, string[]> => {
    const out: Record<string, string[]> = {};
    for (const dependency of feature.dependencies ?? []) {
        if (!dependency.field || !dependency.enum?.length) continue;
        const key = canonicalChainField(dependency.field);
        out[key] = uniqueEnumValues([...(out[key] ?? []), ...dependency.enum.map(String)]);
    }
    return out;
};

const enumsFromCatalog = (entry: EndpointIoCatalogEntry | undefined): Record<string, string[]> => {
    const out: Record<string, string[]> = {};
    for (const [field, values] of Object.entries(entry?.inputEnums ?? {})) {
        if (!values?.length) continue;
        const key = canonicalChainField(field);
        out[key] = uniqueEnumValues(values.map(String));
    }
    return out;
};

const mergeInputEnums = (
    live: Record<string, string[]>,
    catalog: Record<string, string[]>
): Record<string, string[]> => {
    const out: Record<string, string[]> = {};
    for (const key of new Set([...Object.keys(live), ...Object.keys(catalog)])) {
        const preferred = live[key]?.length ? live[key] : catalog[key];
        if (preferred?.length) out[key] = preferred;
    }
    return out;
};

export const enumsOverlap = (left?: string[], right?: string[]): boolean => {
    if (!left?.length || !right?.length) return true;
    const allowed = new Set(left);
    return right.some((value) => allowed.has(value));
};

export const accumulatedInputEnums = (profiles: ChainProfile[]): Record<string, string[]> => {
    const out: Record<string, string[]> = {};
    for (const profile of profiles) {
        for (const [field, values] of Object.entries(profile.inputEnums ?? {})) {
            if (!values.length) continue;
            out[field] = field in out ? values.filter((value) => out[field].includes(value)) : [...values];
        }
    }
    return out;
};

const sharedFieldsWithCompatibleEnums = (
    names: string[],
    sourceEnums: Record<string, string[]> | undefined,
    targetEnums: Record<string, string[]> | undefined
): string[] => names.filter((field) => enumsOverlap(sourceEnums?.[field], targetEnums?.[field]));

export const enumConflicts = (
    sourceEnums: Record<string, string[]> | undefined,
    targetEnums: Record<string, string[]> | undefined,
    fields: string[]
): { field: string; source: string[]; target: string[] }[] =>
    fields
        .filter((field) => !enumsOverlap(sourceEnums?.[field], targetEnums?.[field]))
        .map((field) => ({
            field,
            source: sourceEnums?.[field] ?? [],
            target: targetEnums?.[field] ?? [],
        }));

/**
 * Docs samples omit VIN or owner on many plate lookups. A vehicle consult still
 * identifies the car and usually the owner, so VIN / cédula lookups can follow.
 */
export const enrichChainProfile = (feature: FeatureParamShape, profile: ChainProfile): ChainProfile => {
    const inputs = profile.inputs;
    const outputs = new Set(profile.outputs);
    for (const field of inputs) {
        if (SEED_FIELDS.has(field)) outputs.add(field);
    }
    const group = featureGroup(feature);
    if (group === 'vehicle' && (inputs.includes('plate') || inputs.includes('vin'))) {
        outputs.add('plate');
        outputs.add('vin');
        outputs.add('documentNumber');
        outputs.add('documentType');
        outputs.add('fullName');
    }
    return { inputs, outputs: [...outputs], inputEnums: profile.inputEnums ?? {} };
};

/** Inputs from live AppFeature deps plus Postman docs; outputs from documented 200 samples. */
export const chainProfileForFeature = (
    feature: FeatureParamShape,
    docs?: unknown
): ChainProfile => {
    const entry = catalogEntryForCode(feature.code);
    return enrichChainProfile(feature, {
        inputs: uniqueCanonical([...inputKeysForFeature(feature), ...(entry?.inputs ?? [])]),
        outputs: uniqueCanonical([...(entry?.outputs ?? []), ...outputKeysFromDocs(docs)]),
        inputEnums: mergeInputEnums(enumsFromDependencies(feature), enumsFromCatalog(entry)),
    });
};

export const sharedChainFields = (outputs: string[], inputs: string[]): string[] => {
    const available = new Set(outputs);
    return inputs.filter((field) => available.has(field));
};

export const canFeed = (source: ChainProfile | undefined, target: ChainProfile | undefined): boolean => {
    const names = sharedChainFields(source?.outputs ?? [], target?.inputs ?? []);
    if (!names.length) return false;
    return enumConflicts(source?.inputEnums, target?.inputEnums, names).length === 0;
};

export const accumulatedChainFields = (profiles: ChainProfile[]): string[] => {
    const fields = new Set<string>();
    for (const profile of profiles) {
        for (const field of profile.inputs) fields.add(field);
        for (const field of profile.outputs) fields.add(field);
    }
    return [...fields];
};

export const linkFieldsToTarget = (chain: ChainProfile[], target: ChainProfile | undefined): string[] => {
    if (!target) return [];
    const names = sharedChainFields(accumulatedChainFields(chain), target.inputs);
    const sourceEnums = accumulatedInputEnums(chain);
    if (enumConflicts(sourceEnums, target.inputEnums, names).length) return [];
    return sharedFieldsWithCompatibleEnums(names, sourceEnums, target.inputEnums);
};

/** Empty chain: any first lookup. After that, the next one must reuse a known identifier. */
export const canAppendToChain = (
    chain: ChainProfile[],
    target: ChainProfile | undefined
): boolean => {
    if (!target) return false;
    if (!chain.length) return true;
    return linkFieldsToTarget(chain, target).length > 0;
};

const neededInputsForFeature = (feature: FeatureParamShape, profile: ChainProfile): string[] => {
    const declared = uniqueCanonical(inputKeysForFeature(feature));
    return declared.length ? declared : profile.inputs;
};

/**
 * User-typed identifiers for a VISITA cascade. Concatenated steps reuse prior
 * outputs (plate → VIN / cédula), so they are omitted from the input form.
 * A new independent root resets the available fields.
 */
export const seedParamFieldsForFeatures = (features: FeatureParamShape[]): string[] => {
    const seed: string[] = [];
    const seen = new Set<string>();
    let cascade: ChainProfile[] = [];
    const available = new Set<string>();

    const resetCascade = (): void => {
        cascade = [];
        available.clear();
    };

    for (const feature of features) {
        const profile = chainProfileForFeature(feature);
        if (cascade.length && !canAppendToChain(cascade, profile)) resetCascade();
        for (const field of neededInputsForFeature(feature, profile)) {
            if (available.has(field) || seen.has(field)) continue;
            seen.add(field);
            seed.push(field);
        }
        for (const field of profile.outputs) available.add(field);
        cascade.push(profile);
    }
    return seed;
};

/** Templates so a later step can pull a chained identifier from a previous result. */
export const chainStepFeedTemplates = (features: FeatureParamShape[]): Record<string, string>[] => {
    const templates = features.map(() => ({} as Record<string, string>));
    const profiles = features.map((feature) => chainProfileForFeature(feature));
    let cascade: ChainProfile[] = [];
    let start = 0;

    for (let index = 0; index < features.length; index += 1) {
        const profile = profiles[index];
        if (cascade.length && !canAppendToChain(cascade, profile)) {
            cascade = [];
            start = index;
        }
        if (cascade.length) {
            for (const field of linkFieldsToTarget(cascade, profile)) {
                for (let prior = index - 1; prior >= start; prior -= 1) {
                    if (
                        profiles[prior].outputs.includes(field) ||
                        profiles[prior].inputs.includes(field)
                    ) {
                        templates[index][field] = `{{results.${prior + 1}.${field}}}`;
                        break;
                    }
                }
            }
        }
        cascade.push(profile);
    }
    return templates;
};

export const collectCanonicalScalarValues = (value: unknown): Record<string, string> => {
    const out: Record<string, string> = {};
    const walk = (node: unknown, depth: number): void => {
        if (!node || typeof node !== 'object' || depth > 6) return;
        if (Array.isArray(node)) {
            for (const item of node.slice(0, 8)) walk(item, depth + 1);
            return;
        }
        for (const [key, child] of Object.entries(node as Record<string, unknown>)) {
            if (SKIP_KEYS.has(key)) continue;
            const canonical = canonicalChainField(key);
            if (
                (typeof child === 'string' || typeof child === 'number') &&
                String(child).trim() &&
                !(canonical in out)
            ) {
                out[canonical] = String(child).trim();
                continue;
            }
            walk(child, depth + 1);
        }
    };
    walk(value, 0);
    return out;
};

export const jointFieldsBetween = (
    source: ChainProfile | undefined,
    target: ChainProfile | undefined
): string[] => {
    if (!source || !target) return [];
    const fromOutput = sharedChainFields(source.outputs, target.inputs);
    const names = fromOutput.length ? fromOutput : sharedChainFields(source.inputs, target.inputs);
    if (enumConflicts(source.inputEnums, target.inputEnums, names).length) return [];
    return sharedFieldsWithCompatibleEnums(names, source.inputEnums, target.inputEnums);
};

export const appendConflicts = (
    chain: ChainProfile[],
    target: ChainProfile | undefined
): { field: string; source: string[]; target: string[] }[] => {
    if (!target || !chain.length) return [];
    const names = sharedChainFields(accumulatedChainFields(chain), target.inputs);
    return enumConflicts(accumulatedInputEnums(chain), target.inputEnums, names);
};

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

const parseResponseBody = (body: unknown): unknown => {
    if (body && typeof body === 'object') return body;
    if (typeof body !== 'string' || !body.trim()) return null;
    try {
        return JSON.parse(body);
    } catch {
        return null;
    }
};

const firstSuccessBody = (docs: unknown): unknown => {
    if (!docs || typeof docs !== 'object') return null;
    for (const locale of Object.values(
        docs as Record<string, { responses?: { status?: string; body?: unknown }[] }>
    )) {
        const responses = locale?.responses;
        if (!Array.isArray(responses)) continue;
        const sample = responses.find((item) => String(item?.status) === '200') ?? responses[0];
        const parsed = parseResponseBody(sample?.body);
        if (parsed) return parsed;
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
