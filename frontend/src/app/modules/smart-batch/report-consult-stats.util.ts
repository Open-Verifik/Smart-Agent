import { featureGroup, FeatureGroupId } from './feature-group.util';

export const CONSULT_STATS_PATH = 'consultStats';

export const CONSULT_STATS_FIELD_KEYS = [
    'total',
    'successful',
    'found',
    'failed',
    'skipped',
    'empty',
    'successPercent',
    'foundPercent',
    'failedPercent',
] as const;

export const CONSULT_STATS_CATEGORY_KEYS = ['citizen', 'vehicle', 'company', 'other'] as const;

export type ConsultStatsFieldKey = (typeof CONSULT_STATS_FIELD_KEYS)[number];
export type ConsultStatsCategoryKey = (typeof CONSULT_STATS_CATEGORY_KEYS)[number];

export type ConsultStats = Record<ConsultStatsFieldKey, number | string> & Record<ConsultStatsCategoryKey, number>;

export const CONSULT_STATS_LABEL_KEYS: Record<ConsultStatsFieldKey, string> = {
    total: 'visitaGuide.layoutConsultStatsTotal',
    successful: 'visitaGuide.layoutConsultStatsSuccessful',
    found: 'visitaGuide.layoutConsultStatsFound',
    failed: 'visitaGuide.layoutConsultStatsFailed',
    skipped: 'visitaGuide.layoutConsultStatsSkipped',
    empty: 'visitaGuide.layoutConsultStatsEmpty',
    successPercent: 'visitaGuide.layoutConsultStatsSuccessPercent',
    foundPercent: 'visitaGuide.layoutConsultStatsFoundPercent',
    failedPercent: 'visitaGuide.layoutConsultStatsFailedPercent',
};

export const CONSULT_STATS_CATEGORY_LABEL_KEYS: Record<ConsultStatsCategoryKey, string> = {
    citizen: 'visitaGuide.entityPerson',
    vehicle: 'visitaGuide.entityVehicle',
    company: 'visitaGuide.entityCompany',
    other: 'createBatchConfig.groupOther',
};

export const consultStatsPath = (key: ConsultStatsFieldKey | ConsultStatsCategoryKey | string): string =>
    `${CONSULT_STATS_PATH}.${key}`;

const FOUND_KEYS = ['found', 'encontrado', 'isFound', 'hallado', 'existe'];

type StatsStep = {
    sequence?: number;
    enabled?: boolean;
    featureCode?: string;
    appFeatureCode?: string;
    name?: string;
    url?: string;
    description?: string;
    baseCategory?: string;
    appFeature?:
        | string
        | {
              code?: string;
              name?: string;
              url?: string;
              description?: string;
              baseCategory?: string;
          };
};
type StatsError = { step?: number | string };
type StatsSkip = { sequence?: number | string; step?: number | string };

const isEmptyPayload = (payload: unknown): boolean => {
    if (payload == null) return true;
    if (Array.isArray(payload)) return payload.length === 0;
    if (typeof payload !== 'object') return false;
    return Object.keys(payload as object).length === 0;
};

const unwrapPayload = (payload: unknown): Record<string, unknown> | null => {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return null;
    const record = payload as Record<string, unknown>;
    const nested = record['data'];
    if (nested && typeof nested === 'object' && !Array.isArray(nested)) {
        return { ...record, ...(nested as Record<string, unknown>) };
    }
    return record;
};

const foundFlag = (payload: unknown): boolean | null => {
    const record = unwrapPayload(payload);
    if (!record) return null;
    for (const key of FOUND_KEYS) {
        if (key in record) return Boolean(record[key]);
    }
    return null;
};

const percent = (part: number, total: number): string => {
    if (total <= 0) return '0%';
    return `${Math.round((part / total) * 100)}%`;
};

const sequenceList = (
    results: Record<string | number, unknown> | null | undefined,
    errors: StatsError[] | undefined,
    steps: StatsStep[] | undefined
): number[] => {
    const enabled = (steps ?? []).filter((step) => step.enabled !== false && Number.isFinite(Number(step.sequence)));
    if (enabled.length) {
        return [...new Set(enabled.map((step) => Number(step.sequence)))].sort((a, b) => a - b);
    }
    const keys = Object.keys(results ?? {})
        .map((key) => Number(key))
        .filter(Number.isFinite);
    const errorSteps = (errors ?? []).map((item) => Number(item.step)).filter(Number.isFinite);
    return [...new Set([...keys, ...errorSteps])].sort((a, b) => a - b);
};

const skippedSet = (skipped: StatsSkip[] | undefined): Set<number> => {
    const next = new Set<number>();
    for (const item of skipped ?? []) {
        const sequence = Number(item.sequence ?? item.step);
        if (Number.isFinite(sequence)) next.add(sequence);
    }
    return next;
};

const errorSet = (errors: StatsError[] | undefined): Set<number> => {
    const next = new Set<number>();
    for (const item of errors ?? []) {
        const sequence = Number(item.step);
        if (Number.isFinite(sequence)) next.add(sequence);
    }
    return next;
};

const emptyCategoryCounts = (): Record<ConsultStatsCategoryKey, number> => ({
    citizen: 0,
    vehicle: 0,
    company: 0,
    other: 0,
});

const stepCategory = (step: StatsStep | undefined): ConsultStatsCategoryKey => {
    const feature = step?.appFeature && typeof step.appFeature === 'object' ? step.appFeature : undefined;
    const group: FeatureGroupId = featureGroup({
        code: feature?.code || step?.featureCode || step?.appFeatureCode || (typeof step?.appFeature === 'string' ? step.appFeature : undefined),
        name: feature?.name || step?.name,
        url: feature?.url || step?.url,
        description: feature?.description || step?.description,
        baseCategory: feature?.baseCategory || step?.baseCategory,
    });
    return CONSULT_STATS_CATEGORY_KEYS.includes(group) ? group : 'other';
};

export const buildConsultStats = (
    row: {
        results?: Record<string | number, unknown> | null;
        errors?: StatsError[] | null;
        inputData?: Record<string, unknown> | null;
    },
    options?: {
        steps?: StatsStep[] | null;
        skipped?: StatsSkip[] | null;
    }
): ConsultStats => {
    const results = row.results ?? {};
    const errors = row.errors ?? [];
    const skipped =
        options?.skipped ??
        (Array.isArray(row.inputData?.['__batchSkippedSteps'])
            ? (row.inputData?.['__batchSkippedSteps'] as StatsSkip[])
            : []);
    const sequences = sequenceList(results, errors, options?.steps ?? undefined);
    const skippedSteps = skippedSet(skipped);
    const failedSteps = errorSet(errors);
    const stepBySequence = new Map(
        (options?.steps ?? [])
            .filter((step) => Number.isFinite(Number(step.sequence)))
            .map((step) => [Number(step.sequence), step])
    );
    const categories = emptyCategoryCounts();

    let successful = 0;
    let found = 0;
    let failed = 0;
    let skippedCount = 0;
    let empty = 0;

    for (const sequence of sequences) {
        categories[stepCategory(stepBySequence.get(sequence))] += 1;
        if (skippedSteps.has(sequence)) {
            skippedCount += 1;
            continue;
        }
        if (failedSteps.has(sequence)) {
            failed += 1;
            continue;
        }
        const payload = results[sequence] ?? results[String(sequence)];
        const hasData = !isEmptyPayload(payload);
        if (!hasData) {
            empty += 1;
            continue;
        }
        successful += 1;
        const flag = foundFlag(payload);
        if (flag === false) continue;
        found += 1;
    }

    const total = sequences.length;
    return {
        total,
        successful,
        found,
        failed,
        skipped: skippedCount,
        empty,
        successPercent: percent(successful, total),
        foundPercent: percent(found, total),
        failedPercent: percent(failed, total),
        ...categories,
    };
};
