import {
    flattenStepResultDisplay,
    stepDisplayLabelFromSegments,
    StepDisplayRow,
} from '../step-result-display.util';

export type StepDisplayContext = {
    /** `AppFeature.code` from batch configuration step */
    featureCode?: string | null;
};

/** Presenter may return rows, or null to fall back to {@link flattenStepResultDisplay}. */
export type StepResultPresenter = (data: unknown) => StepDisplayRow[] | null;

/**
 * Heuristic when `featureCode` is missing (stale UI / partial config): typical RUES payload.
 */
const isColombiaRuesLikeShape = (data: unknown): boolean => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return false;
    const o = data as Record<string, unknown>;
    return Boolean(o.commercialRegistry && Array.isArray(o.economicActivities));
};

const formatEconomicActivityLine = (item: unknown): string => {
    if (item === null || item === undefined) return '—';
    if (typeof item !== 'object' || Array.isArray(item)) return String(item);
    const e = item as Record<string, unknown>;
    const code = e.code ?? e.codigo ?? e.activityCode ?? e.ciiu;
    const rawName = e.name;
    const nameIsCiiuSlot = typeof rawName === 'string' && /^ciiu\d*$/i.test(rawName.trim());
    const desc =
        e.description ??
        e.descripcion ??
        e.activityDescription ??
        e.text ??
        (nameIsCiiuSlot ? undefined : rawName);
    const c = code != null ? String(code).trim() : '';
    const d = desc != null ? String(desc).trim() : '';
    if (c && d) return `${c} — ${d}`;
    if (c || d) return c || d;
    if (nameIsCiiuSlot) return '—';
    return '—';
};

/**
 * Prioritizes readable `economicActivities` lines even when items are not strictly `{ code, description }`.
 */
const presentColombiaRues: StepResultPresenter = (data) => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
    const o = data as Record<string, unknown>;
    const economicActivities = o.economicActivities;
    if (!Array.isArray(economicActivities) || economicActivities.length === 0) return null;

    const rest = { ...o };
    delete rest.economicActivities;

    const base = flattenStepResultDisplay(rest);
    const activityRows: StepDisplayRow[] = economicActivities.map((ea, i) => ({
        label: stepDisplayLabelFromSegments(['economicActivities', String(i + 1)]),
        value: formatEconomicActivityLine(ea),
    }));

    return [...base, ...activityRows];
};

const PRESENTERS_BY_CODE: Record<string, StepResultPresenter> = {
    colombia_api_rues: presentColombiaRues,
    colombia_api_rues_full: presentColombiaRues,
    colombia_api_rues_v3: presentColombiaRues,
    colombia_api_rues_full_v3: presentColombiaRues,
};

/**
 * Resolves step result JSON into display rows: optional presenter by feature code, else recursive flatten.
 */
export const getStepDisplayFields = (ctx: StepDisplayContext, data: unknown): StepDisplayRow[] => {
    const code = ctx.featureCode?.trim() ?? '';
    let presented: StepDisplayRow[] | null = null;

    if (code && PRESENTERS_BY_CODE[code]) {
        presented = PRESENTERS_BY_CODE[code](data);
    } else if (!code && isColombiaRuesLikeShape(data)) {
        presented = presentColombiaRues(data);
    }

    if (presented && presented.length > 0) {
        return presented;
    }

    return flattenStepResultDisplay(data);
};
