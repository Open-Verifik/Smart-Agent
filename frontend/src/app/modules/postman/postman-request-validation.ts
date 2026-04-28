import { isClientVisibleBatchDependencyField } from '../smart-batch/smart-batch-dependency.constants';
import { ApiEndpoint, PostmanDependencyMeta } from './postman.types';
import { getPostmanPathParamKeysForEndpoint } from './postman-url.util';

const DOCUMENT_NUMBER_FIELD = 'documentNumber';
const DOCUMENT_TYPE_FIELD = 'documentType';

const PAIR_VALUE_PLACEHOLDERS = new Set(['-', 'n/a', 'na']);

export interface PostmanValidationIssue {
    field?: string;
    translationKey: string;
    translationParams?: Record<string, unknown>;
}

const normalizeDependencyGroup = (d: { dependencyGroup?: string }): string | null => {
    if (d.dependencyGroup == null) return null;
    const s = String(d.dependencyGroup).trim();
    return s.length ? s : null;
};

const isEmptyValue = (value: unknown): boolean => {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string' && value.trim() === '') return true;
    return false;
};

const isEffectivelyEmptyForMode = (value: unknown): boolean => {
    if (value === null || value === undefined) return true;
    const normalized = String(value).trim();
    if (!normalized) return true;
    return PAIR_VALUE_PLACEHOLDERS.has(normalized.toLowerCase());
};

const findColumnKey = (row: Record<string, unknown>, fieldName: string): string | null => {
    const lowerField = fieldName.toLowerCase();
    const keys = Object.keys(row);
    const match = keys.find((k) => k.toLowerCase() === lowerField);
    return match || null;
};

const getRowCellRaw = (row: Record<string, unknown>, field: string): unknown => {
    const k = findColumnKey(row, field);
    return k ? row[k] : undefined;
};

export const getPostmanXorGroupMetadata = (deps: PostmanDependencyMeta[]): {
    docGroupIds: Set<string>;
    nameGroupIds: Set<string>;
} | null => {
    const grouped = new Map<string, PostmanDependencyMeta[]>();
    for (const d of deps) {
        const g = normalizeDependencyGroup(d);
        if (g === null) continue;
        if (!grouped.has(g)) grouped.set(g, []);
        grouped.get(g)!.push(d);
    }
    if (grouped.size < 2) return null;

    const docGroupIds = new Set<string>();
    const nameGroupIds = new Set<string>();
    for (const [gid, list] of grouped) {
        if (list.some((x) => x.field === 'documentType' || x.field === 'documentNumber')) {
            docGroupIds.add(gid);
        }
        if (list.some((x) => x.field === 'fullName')) {
            nameGroupIds.add(gid);
        }
    }
    if (docGroupIds.size === 0 || nameGroupIds.size === 0) return null;
    return { docGroupIds, nameGroupIds };
};

const isDocumentSearchModeActive = (
    row: Record<string, unknown>,
    deps: PostmanDependencyMeta[],
    docGroupIds: Set<string>
): boolean => {
    for (const d of deps) {
        const g = normalizeDependencyGroup(d);
        if (g === null || !docGroupIds.has(g)) continue;
        if (d.field !== 'documentType' && d.field !== 'documentNumber') continue;
        if (!isEffectivelyEmptyForMode(getRowCellRaw(row, d.field))) return true;
    }
    return false;
};

const isFullNameModeActive = (
    row: Record<string, unknown>,
    deps: PostmanDependencyMeta[],
    nameGroupIds: Set<string>
): boolean => {
    for (const d of deps) {
        const g = normalizeDependencyGroup(d);
        if (g === null || !nameGroupIds.has(g)) continue;
        if (d.field !== 'fullName') continue;
        if (!isEffectivelyEmptyForMode(getRowCellRaw(row, d.field))) return true;
    }
    return false;
};

export const requiredWhenPredicateMatches = (
    row: Record<string, unknown>,
    when: { field?: string; in?: string[] }
): boolean => {
    if (!when?.field || !when.in?.length) return false;
    const v = getRowCellRaw(row, when.field);
    if (isEffectivelyEmptyForMode(v)) return false;
    const norm = String(v).trim().toLowerCase();
    return when.in.some((x) => String(x).trim().toLowerCase() === norm);
};

const allXorGroupDependencyFieldsEmpty = (
    row: Record<string, unknown>,
    deps: PostmanDependencyMeta[],
    xorMeta: { docGroupIds: Set<string>; nameGroupIds: Set<string> }
): boolean => {
    for (const d of deps) {
        const g = normalizeDependencyGroup(d);
        if (g === null) continue;
        if (!xorMeta.docGroupIds.has(g) && !xorMeta.nameGroupIds.has(g)) continue;
        if (!isEffectivelyEmptyForMode(getRowCellRaw(row, d.field))) return false;
    }
    return true;
};

const isCalendarDdMmYyyy = (value: string): boolean => {
    const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value);
    if (!m) return false;
    const d = parseInt(m[1], 10);
    const mo = parseInt(m[2], 10);
    const y = parseInt(m[3], 10);
    if (mo < 1 || mo > 12 || d < 1 || d > 31) return false;
    const dt = new Date(y, mo - 1, d);
    return dt.getFullYear() === y && dt.getMonth() === mo - 1 && dt.getDate() === d;
};

const valueMatchesDependencyDateFormat = (raw: unknown, format: string): boolean => {
    const s = String(raw ?? '').trim();
    if (!s) return true;
    const norm = format.replace(/\s+/g, '').toLowerCase();
    if (norm === 'dd/mm/yyyy') {
        return isCalendarDdMmYyyy(s);
    }
    return true;
};

const appendDocumentTypeNumberPairErrorsForDeps = (
    row: Record<string, unknown>,
    deps: PostmanDependencyMeta[],
    docGroupIds: Set<string> | null,
    issues: PostmanValidationIssue[],
    stepLabel: string
): void => {
    const inDocGroup = (d: PostmanDependencyMeta) => {
        const g = normalizeDependencyGroup(d);
        if (docGroupIds) {
            return g !== null && docGroupIds.has(g);
        }
        return true;
    };

    const hasType = deps.some((d) => d.field === 'documentType' && inDocGroup(d));
    const hasNum = deps.some((d) => d.field === 'documentNumber' && inDocGroup(d));
    if (!hasType || !hasNum) return;

    const numKey = findColumnKey(row, DOCUMENT_NUMBER_FIELD);
    const typeKey = findColumnKey(row, DOCUMENT_TYPE_FIELD);
    const numRaw = numKey ? row[numKey] : undefined;
    const typeRaw = typeKey ? row[typeKey] : undefined;
    const numEmpty = isEffectivelyEmptyForMode(numRaw);
    const typeEmpty = isEffectivelyEmptyForMode(typeRaw);

    if (numEmpty === typeEmpty) return;

    const hasPairIssueFor = (field: string) =>
        issues.some(
            (iss) =>
                iss.field === field &&
                (iss.translationKey === 'createBatch.pairDocumentTypeRequiredWhenNumber' ||
                    iss.translationKey === 'createBatch.pairDocumentNumberRequiredWhenType')
        );

    if (!numEmpty && typeEmpty) {
        if (!hasPairIssueFor(DOCUMENT_TYPE_FIELD)) {
            issues.push({
                field: DOCUMENT_TYPE_FIELD,
                translationKey: 'createBatch.pairDocumentTypeRequiredWhenNumber',
                translationParams: { step: stepLabel },
            });
        }
    } else if (numEmpty && !typeEmpty) {
        if (!hasPairIssueFor(DOCUMENT_NUMBER_FIELD)) {
            issues.push({
                field: DOCUMENT_NUMBER_FIELD,
                translationKey: 'createBatch.pairDocumentNumberRequiredWhenType',
                translationParams: { step: stepLabel },
            });
        }
    }
};

const appendEnumIssueIfAny = (
    d: PostmanDependencyMeta,
    raw: unknown,
    issues: PostmanValidationIssue[]
): void => {
    const enums = d.enum;
    if (!enums || !Array.isArray(enums) || enums.length === 0) return;
    if (isEmptyValue(raw)) return;
    const normalizedValue = String(raw).trim().toLowerCase();
    const validValues = enums.map((v) => String(v).toLowerCase());

    if (!validValues.includes(normalizedValue)) {
        issues.push({
            field: d.field,
            translationKey: 'postman.requestEditor.validation.invalidEnum',
            translationParams: {
                field: d.field,
                value: String(raw),
                expected: enums.join(', '),
            },
        });
    }
};

const appendDateFormatIssueIfAny = (
    d: PostmanDependencyMeta,
    raw: unknown,
    issues: PostmanValidationIssue[]
): void => {
    if (!d.dateFormat || isEmptyValue(raw)) return;
    if (valueMatchesDependencyDateFormat(raw, d.dateFormat)) return;
    issues.push({
        field: d.field,
        translationKey: 'createBatch.invalidDateFormat',
        translationParams: { field: d.field, format: d.dateFormat },
    });
};

const appendLegacyDependencyIssues = (
    row: Record<string, unknown>,
    deps: PostmanDependencyMeta[],
    stepLabel: string,
    issues: PostmanValidationIssue[]
): void => {
    for (const d of deps) {
        const raw = getRowCellRaw(row, d.field);
        if (d.required && isEmptyValue(raw)) {
            issues.push({
                field: d.field,
                translationKey: 'postman.requestEditor.validation.fieldRequired',
                translationParams: { field: d.field, step: stepLabel },
            });
        }
        appendEnumIssueIfAny(d, raw, issues);
        appendDateFormatIssueIfAny(d, raw, issues);
    }

    const hasType = deps.some((d) => d.field === 'documentType');
    const hasNum = deps.some((d) => d.field === 'documentNumber');
    if (hasType && hasNum) {
        appendDocumentTypeNumberPairErrorsForDeps(row, deps, null, issues, stepLabel);
    }
};

const appendGroupedDependencyIssues = (
    row: Record<string, unknown>,
    deps: PostmanDependencyMeta[],
    stepLabel: string,
    issues: PostmanValidationIssue[],
    options?: { lenientEmptyXor?: boolean }
): void => {
    const xorMeta = getPostmanXorGroupMetadata(deps);
    if (!xorMeta) {
        appendLegacyDependencyIssues(row, deps, stepLabel, issues);
        return;
    }

    const { docGroupIds, nameGroupIds } = xorMeta;
    const mode1Active = isDocumentSearchModeActive(row, deps, docGroupIds);
    const mode2Active = isFullNameModeActive(row, deps, nameGroupIds);

    if (mode1Active && mode2Active) {
        issues.push({
            field: 'fullName',
            translationKey: 'createBatch.validationXorBothModes',
            translationParams: { step: stepLabel },
        });
        return;
    }

    if (!mode1Active && !mode2Active) {
        const skipNeither =
            options?.lenientEmptyXor && allXorGroupDependencyFieldsEmpty(row, deps, xorMeta);
        if (!skipNeither) {
            issues.push({
                field: 'fullName',
                translationKey: 'createBatch.validationXorNeitherMode',
                translationParams: { step: stepLabel },
            });
            return;
        }
    }

    if (mode2Active) {
        for (const d of deps) {
            const g = normalizeDependencyGroup(d);
            if (g === null || !docGroupIds.has(g)) continue;
            if (!isEffectivelyEmptyForMode(getRowCellRaw(row, d.field))) {
                issues.push({
                    field: d.field,
                    translationKey: 'createBatch.validationLeakDocumentWhenFullName',
                    translationParams: { step: stepLabel, field: d.field },
                });
            }
        }
    }

    if (mode1Active) {
        for (const d of deps) {
            const g = normalizeDependencyGroup(d);
            if (g === null || !nameGroupIds.has(g)) continue;
            if (!isEffectivelyEmptyForMode(getRowCellRaw(row, d.field))) {
                issues.push({
                    field: d.field,
                    translationKey: 'createBatch.validationLeakFullNameWhenDocument',
                    translationParams: { step: stepLabel, field: d.field },
                });
            }
        }

        appendDocumentTypeNumberPairErrorsForDeps(row, deps, docGroupIds, issues, stepLabel);

        for (const d of deps) {
            const g = normalizeDependencyGroup(d);
            if (g === null || !docGroupIds.has(g)) continue;
            if (!d.requiredWhen) continue;
            if (!requiredWhenPredicateMatches(row, d.requiredWhen)) continue;
            if (isEffectivelyEmptyForMode(getRowCellRaw(row, d.field))) {
                const when = d.requiredWhen;
                issues.push({
                    field: d.field,
                    translationKey: 'createBatch.validationConditionalRequired',
                    translationParams: {
                        step: stepLabel,
                        field: d.field,
                        whenField: when.field,
                        values: (when.in || []).join(', '),
                    },
                });
            }
        }
    }

    for (const d of deps) {
        const g = normalizeDependencyGroup(d);
        const isGrouped = g !== null;
        let applies = true;
        if (isGrouped) {
            const gid = g as string;
            applies =
                (mode1Active && docGroupIds.has(gid)) || (mode2Active && nameGroupIds.has(gid));
        }
        if (!applies) continue;

        const raw = getRowCellRaw(row, d.field);
        if (d.required && isEmptyValue(raw)) {
            issues.push({
                field: d.field,
                translationKey: 'postman.requestEditor.validation.fieldRequired',
                translationParams: { field: d.field, step: stepLabel },
            });
        }
        appendEnumIssueIfAny(d, raw, issues);
        appendDateFormatIssueIfAny(d, raw, issues);
    }
};

export const buildGetInputRecord = (endpoint: ApiEndpoint): Record<string, unknown> => {
    const row: Record<string, unknown> = {};
    if (endpoint.method === 'GET' && endpoint.params?.length) {
        for (const p of endpoint.params) {
            row[p.key] = p.value;
        }
    }
    return row;
};

export const buildPostBodyInputRecord = (body: unknown): Record<string, unknown> => {
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
        return {};
    }
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(body as Record<string, unknown>)) {
        out[k] = v;
    }
    return out;
};

const pathParamIssues = (endpoint: ApiEndpoint): PostmanValidationIssue[] => {
    const pathKeys = getPostmanPathParamKeysForEndpoint(endpoint);
    if (!pathKeys?.length) return [];
    const issues: PostmanValidationIssue[] = [];
    for (const key of pathKeys) {
        const v = endpoint.params?.find((p) => p.key === key)?.value;
        if (!String(v ?? '').trim()) {
            issues.push({
                field: key,
                translationKey: 'postman.requestEditor.validation.pathSegmentRequired',
                translationParams: { segment: key },
            });
        }
    }
    return issues;
};

const legacyParamIssues = (endpoint: ApiEndpoint, stepLabel: string): PostmanValidationIssue[] => {
    const issues: PostmanValidationIssue[] = [];
    for (const p of endpoint.params ?? []) {
        if (p.required && !String(p.value ?? '').trim()) {
            issues.push({
                field: p.key,
                translationKey: 'postman.requestEditor.validation.fieldRequired',
                translationParams: { field: p.key, step: stepLabel },
            });
        }
        if (!p.enum?.length) continue;
        const raw = p.value;
        if (isEmptyValue(raw)) continue;
        const normalizedValue = String(raw).trim().toLowerCase();
        const validValues = p.enum.map((v) => String(v).toLowerCase());
        if (!validValues.includes(normalizedValue)) {
            issues.push({
                field: p.key,
                translationKey: 'postman.requestEditor.validation.invalidEnum',
                translationParams: {
                    field: p.key,
                    value: String(raw),
                    expected: p.enum.join(', '),
                },
            });
        }
        if (p.dateFormat && !isEmptyValue(raw) && !valueMatchesDependencyDateFormat(raw, p.dateFormat)) {
            issues.push({
                field: p.key,
                translationKey: 'createBatch.invalidDateFormat',
                translationParams: { field: p.key, format: p.dateFormat },
            });
        }
    }
    return issues;
};

export interface PostmanRequestValidationOptions {
    lenientEmptyXor?: boolean;
}

/**
 * Validates grouped / conditional / date rules (Smart Batch parity) plus path and legacy required params.
 * For POST, pass the same JSON string as the body editor (invalid JSON yields a blocking issue).
 */
export const getPostmanRequestValidationIssues = (
    endpoint: ApiEndpoint | null | undefined,
    postBodyJsonDraft: string | null | undefined,
    options?: PostmanRequestValidationOptions
): PostmanValidationIssue[] => {
    if (!endpoint) {
        return [];
    }

    const stepLabel = endpoint.layoutDisplayName?.trim() || endpoint.label || endpoint.code || 'API';

    const issues: PostmanValidationIssue[] = [...pathParamIssues(endpoint)];

    let input: Record<string, unknown>;

    if (endpoint.method === 'GET' || endpoint.method === 'DELETE') {
        input = buildGetInputRecord(endpoint);
    } else {
        const draft = postBodyJsonDraft?.trim() ?? '';
        if (draft === '') {
            input = {};
        } else {
            try {
                const parsed = JSON.parse(draft) as unknown;
                input = buildPostBodyInputRecord(parsed);
            } catch {
                return [
                    ...issues,
                    {
                        translationKey: 'postman.requestEditor.validation.invalidJsonBody',
                    },
                ];
            }
        }
    }

    const rawDeps = endpoint.dependencies ?? [];
    const deps = rawDeps.filter(
        (d) => d && typeof d.field === 'string' && isClientVisibleBatchDependencyField(d.field)
    );

    if (deps.length) {
        appendGroupedDependencyIssues(input, deps, stepLabel, issues, options);
    } else {
        issues.push(...legacyParamIssues(endpoint, stepLabel));
    }

    return issues;
};

export const isPostmanRequestValid = (
    endpoint: ApiEndpoint | null | undefined,
    postBodyJsonDraft: string | null | undefined
): boolean => getPostmanRequestValidationIssues(endpoint, postBodyJsonDraft).length === 0;

/** Single param row with stable index for templates (e.g. removeParam). */
export type PostmanParamRowRef = {
    index: number;
    param: NonNullable<ApiEndpoint['params']>[number];
};

export type PostmanXorParamLayout =
    | { kind: 'flat'; allRows: PostmanParamRowRef[] }
    | {
          kind: 'xor';
          nameRows: PostmanParamRowRef[];
          documentRows: PostmanParamRowRef[];
          otherRows: PostmanParamRowRef[];
      };

const DOCUMENT_FIELD_ORDER = ['documentType', 'documentNumber', 'dateOfBirth', 'expirationDate'];

/**
 * Partitions GET query param rows into Smart Batch–style XOR groups when dependency metadata has
 * distinct name vs document groups.
 */
export const getPostmanXorParamLayout = (
    endpoint: ApiEndpoint | null | undefined
): PostmanXorParamLayout => {
    const params = endpoint?.params ?? [];
    const allRows: PostmanParamRowRef[] = params.map((param, index) => ({ index, param }));

    const rawDeps = endpoint?.dependencies ?? [];
    const deps = rawDeps.filter(
        (d) => d && typeof d.field === 'string' && isClientVisibleBatchDependencyField(d.field)
    );
    const xor = getPostmanXorGroupMetadata(deps);
    if (!xor) {
        return { kind: 'flat', allRows };
    }

    const fieldToGroup = new Map<string, string>();
    for (const d of deps) {
        const g = normalizeDependencyGroup(d);
        if (g) fieldToGroup.set(d.field, g);
    }

    const nameRows: PostmanParamRowRef[] = [];
    const documentRows: PostmanParamRowRef[] = [];
    const otherRows: PostmanParamRowRef[] = [];

    for (const item of allRows) {
        const g = fieldToGroup.get(item.param.key);
        if (g && xor.nameGroupIds.has(g)) {
            nameRows.push(item);
        } else if (g && xor.docGroupIds.has(g)) {
            documentRows.push(item);
        } else {
            otherRows.push(item);
        }
    }

    if (nameRows.length === 0 && documentRows.length === 0) {
        return { kind: 'flat', allRows };
    }

    const docOrder = (key: string) => {
        const i = DOCUMENT_FIELD_ORDER.indexOf(key);
        return i === -1 ? 1000 : i;
    };
    documentRows.sort(
        (a, b) =>
            docOrder(a.param.key) - docOrder(b.param.key) ||
            a.param.key.localeCompare(b.param.key)
    );
    nameRows.sort((a, b) => a.param.key.localeCompare(b.param.key));
    otherRows.sort((a, b) => a.index - b.index);

    return { kind: 'xor', nameRows, documentRows, otherRows };
};

/**
 * Rows to show in XOR Option B: always type + number; date fields only when documentType matches requiredWhen or non-conditional fields after a type is chosen.
 */
export const filterVisibleXorDocumentRows = (
    endpoint: ApiEndpoint | null | undefined,
    documentRows: PostmanParamRowRef[]
): PostmanParamRowRef[] => {
    if (!endpoint?.params?.length) return documentRows;
    const input = buildGetInputRecord(endpoint);
    const rawDeps = endpoint.dependencies ?? [];
    const deps = rawDeps.filter(
        (d) => d && typeof d.field === 'string' && isClientVisibleBatchDependencyField(d.field)
    );

    return documentRows.filter((item) => {
        const key = item.param.key;
        if (key === DOCUMENT_TYPE_FIELD || key === DOCUMENT_NUMBER_FIELD) return true;
        const meta = deps.find((d) => d.field === key);
        if (!meta) return true;
        if (meta.requiredWhen?.in?.length) {
            return requiredWhenPredicateMatches(input, meta.requiredWhen);
        }
        return !isEffectivelyEmptyForMode(getRowCellRaw(input, DOCUMENT_TYPE_FIELD));
    });
};

/** True when the editor should show grouped-request guidance (XOR modes, conditional dates, etc.). */
export const endpointShowsGroupedRequestGuidance = (
    endpoint: ApiEndpoint | null | undefined
): boolean => {
    if (!endpoint?.dependencies?.length) return false;
    const deps = endpoint.dependencies.filter(
        (d) => d && typeof d.field === 'string' && isClientVisibleBatchDependencyField(d.field)
    );
    if (getPostmanXorGroupMetadata(deps)) return true;
    return deps.some((d) => (d.requiredWhen?.in?.length ?? 0) > 0 || !!d.dateFormat);
};
