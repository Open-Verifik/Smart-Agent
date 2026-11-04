import { canonicalChainField } from './endpoint-chain.util';
import { isClientVisibleBatchDependencyField } from './smart-batch-dependency.constants';

export interface QueryModeCondition {
    field: string;
    values: string[];
}

export interface QueryModeField {
    field: string;
    required: boolean;
    enums: string[];
    description: string;
    dateFormat?: string;
    requiredWhen?: QueryModeCondition;
}

export interface QueryMode {
    id: string;
    letter: string;
    fields: QueryModeField[];
}

const FIELD_ORDER = [
    'documentType',
    'documentNumber',
    'fullName',
    'firstName',
    'lastName',
    'name',
    'dateOfBirth',
    'expirationDate',
    'plate',
    'vin',
];

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const readCondition = (value: unknown): QueryModeCondition | undefined => {
    if (!value || typeof value !== 'object') return undefined;
    const row = value as { field?: unknown; in?: unknown };
    const field = typeof row.field === 'string' ? row.field.trim() : '';
    const values = Array.isArray(row.in) ? row.in.map((item) => String(item).trim()).filter(Boolean) : [];
    if (!field || !values.length) return undefined;
    return { field, values };
};

const readField = (value: unknown): (QueryModeField & { group: string }) | null => {
    if (!value || typeof value !== 'object') return null;
    const row = value as Record<string, unknown>;
    const field = typeof row.field === 'string' ? row.field.trim() : '';
    if (!field || !isClientVisibleBatchDependencyField(field)) return null;
    return {
        field,
        required: row.required === true,
        enums: Array.isArray(row.enum) ? row.enum.map((item) => String(item)) : [],
        description: typeof row.description === 'string' ? row.description : '',
        dateFormat: typeof row.dateFormat === 'string' ? row.dateFormat : undefined,
        requiredWhen: readCondition(row.requiredWhen),
        group: row.dependencyGroup == null ? '' : String(row.dependencyGroup).trim(),
    };
};

const fieldRank = (field: string): number => {
    const rank = FIELD_ORDER.indexOf(canonicalChainField(field));
    return rank === -1 ? FIELD_ORDER.length : rank;
};

const sortFields = (fields: QueryModeField[]): QueryModeField[] =>
    [...fields].sort((left, right) => fieldRank(left.field) - fieldRank(right.field) || left.field.localeCompare(right.field));

const groupRank = (fields: QueryModeField[]): number => {
    const names = new Set(fields.map((field) => canonicalChainField(field.field)));
    if (names.has('fullName') || names.has('name') || names.has('firstName')) return 0;
    if (names.has('documentType') || names.has('documentNumber')) return 1;
    return 2;
};

/** Alternative ways to call one endpoint. Empty when the endpoint has a single way. */
export const queryModesForFeature = (feature: { dependencies?: unknown[] } | null | undefined): QueryMode[] => {
    const rows = (feature?.dependencies ?? []).map(readField).filter((row): row is QueryModeField & { group: string } => !!row);
    const grouped = new Map<string, QueryModeField[]>();
    const shared: QueryModeField[] = [];
    for (const row of rows) {
        const { group, ...field } = row;
        if (!group) {
            shared.push(field);
            continue;
        }
        const current = grouped.get(group) ?? [];
        current.push(field);
        grouped.set(group, current);
    }
    if (grouped.size < 2) return [];
    const ordered = [...grouped.entries()].sort((left, right) => {
        const rank = groupRank(left[1]) - groupRank(right[1]);
        return rank || left[0].localeCompare(right[0]);
    });
    return ordered.map(([id, fields], index) => ({
        id,
        letter: LETTERS[index] ?? String(index + 1),
        fields: sortFields([...fields, ...shared]),
    }));
};

/** Fields the chosen option may send. Null when the endpoint has one way to query. */
export const allowedQueryFields = (
    feature: { dependencies?: unknown[] } | null | undefined,
    modeId?: string
): Set<string> | null => {
    const modes = queryModesForFeature(feature);
    if (modes.length < 2) return null;
    const mode = modes.find((item) => item.id === modeId) ?? modes[0];
    return new Set(mode.fields.map((field) => canonicalChainField(field.field)));
};
