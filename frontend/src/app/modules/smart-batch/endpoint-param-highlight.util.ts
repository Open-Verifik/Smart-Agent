import { isClientVisibleBatchDependencyField } from './smart-batch-dependency.constants';
import { featureGroup } from './feature-group.util';

export type ParamHighlight = 'document-only' | 'plate-only' | 'nit-only';
export type ParamKind = 'document' | 'plate' | 'date' | 'other';

export interface FeatureParamShape {
    code?: string;
    name?: string;
    url?: string;
    description?: string;
    requiredParams?: string[];
    dependencies?: {
        field?: string;
        required?: boolean;
        requiredWhen?: unknown;
    }[];
}

const normalizeField = (field: string): string => field.replace(/[^a-z0-9]/gi, '').toLowerCase();

export const classifyParamField = (field: string): ParamKind => {
    const token = normalizeField(field);
    if (!token) return 'other';
    if (
        /^(plate|placa|licenseplate|vehicleteplate|vehicleplate)$/.test(token) ||
        token.includes('placa') ||
        token.endsWith('plate')
    ) {
        return 'plate';
    }
    if (
        /date|fecha|expedic|emision|emission|birth|nacimiento|expir|issue/.test(token)
    ) {
        return 'date';
    }
    if (
        /^(documentnumber|documenttype|document|cedula|cédula|identificacion|identification|idnumber|nit)$/.test(
            token
        ) ||
        token.includes('document') ||
        token.includes('cedula')
    ) {
        return 'document';
    }
    return 'other';
};

export const requiredVisibleFields = (feature: FeatureParamShape): string[] => {
    const fromDeps = (feature.dependencies ?? [])
        .filter((dep) => {
            const field = dep.field ?? '';
            if (!isClientVisibleBatchDependencyField(field)) return false;
            if (dep.requiredWhen) return false;
            return dep.required !== false;
        })
        .map((dep) => dep.field as string);

    if (fromDeps.length) return fromDeps;

    return (feature.requiredParams ?? []).filter((field) =>
        isClientVisibleBatchDependencyField(field)
    );
};

export const requiredParamKinds = (feature: FeatureParamShape): Set<ParamKind> => {
    return new Set(requiredVisibleFields(feature).map(classifyParamField));
};

export const matchesParamHighlight = (
    feature: FeatureParamShape,
    highlight: ParamHighlight | null
): boolean => {
    if (!highlight) return false;
    const kinds = requiredParamKinds(feature);
    if (kinds.size === 0) return false;

    const only =
        !kinds.has('date') &&
        !kinds.has('other') &&
        kinds.size > 0;

    if (highlight === 'plate-only') {
        return only && kinds.has('plate') && !kinds.has('document');
    }

    if (highlight === 'document-only') {
        return only && kinds.has('document') && !kinds.has('plate') && featureGroup(feature) !== 'company';
    }

    return only && kinds.has('document') && !kinds.has('plate') && featureGroup(feature) === 'company';
};

export const paramKindLabelKey = (kind: ParamKind): string => {
    const keys: Record<ParamKind, string> = {
        document: 'visitaGuide.paramKindDocument',
        plate: 'visitaGuide.paramKindPlate',
        date: 'visitaGuide.paramKindDate',
        other: 'visitaGuide.paramKindOther',
    };
    return keys[kind];
};

/** Distinct colors so cédula / placa / NIT matches are easy to scan. */
export const PARAM_HIGHLIGHT_TONES: Record<
    ParamHighlight,
    { chipIdle: string; chipActive: string; card: string; badge: string; swatch: string }
> = {
    'document-only': {
        chipIdle: 'border-sky-300 bg-sky-50 text-sky-800 dark:border-sky-700 dark:bg-sky-950/40 dark:text-sky-200',
        chipActive: 'border-sky-600 bg-sky-600 text-white dark:border-sky-400 dark:bg-sky-500',
        card: 'border-sky-500 bg-sky-50 ring-2 ring-sky-400 dark:border-sky-400 dark:bg-sky-950/40 dark:ring-sky-500',
        badge: 'bg-sky-600 text-white',
        swatch: 'bg-sky-500',
    },
    'plate-only': {
        chipIdle:
            'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200',
        chipActive: 'border-amber-600 bg-amber-500 text-stone-950 dark:border-amber-400 dark:bg-amber-400',
        card: 'border-amber-500 bg-amber-50 ring-2 ring-amber-400 dark:border-amber-400 dark:bg-amber-950/40 dark:ring-amber-500',
        badge: 'bg-amber-500 text-stone-950',
        swatch: 'bg-amber-500',
    },
    'nit-only': {
        chipIdle:
            'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200',
        chipActive: 'border-emerald-600 bg-emerald-600 text-white dark:border-emerald-400 dark:bg-emerald-500',
        card: 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-400 dark:border-emerald-400 dark:bg-emerald-950/40 dark:ring-emerald-500',
        badge: 'bg-emerald-600 text-white',
        swatch: 'bg-emerald-500',
    },
};

export const paramHighlightChipClass = (highlight: ParamHighlight, active: boolean): string => {
    const tone = PARAM_HIGHLIGHT_TONES[highlight];
    return active ? tone.chipActive : tone.chipIdle;
};

export const paramHighlightCardClass = (
    highlight: ParamHighlight | null,
    matched: boolean
): string => {
    if (!highlight || !matched) return '';
    return PARAM_HIGHLIGHT_TONES[highlight].card;
};

export const paramHighlightBadgeClass = (highlight: ParamHighlight | null): string => {
    if (!highlight) return '';
    return PARAM_HIGHLIGHT_TONES[highlight].badge;
};

export const paramHighlightSwatchClass = (highlight: ParamHighlight): string =>
    PARAM_HIGHLIGHT_TONES[highlight].swatch;
