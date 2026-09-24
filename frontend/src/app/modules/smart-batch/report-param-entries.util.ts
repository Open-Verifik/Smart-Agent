import type { ReportSection, SampleReportData } from './smart-report.service';

export type ScalarParamEntry = { key: string; label: string; value: string };

export type NestedObjectTable = {
    key: string;
    label: string;
    columns: { key: string; label: string }[];
    rows: Record<string, string>[];
};

export type LayoutSheetItem =
    | { kind: 'field'; key: string; label: string; entry: ScalarParamEntry }
    | { kind: 'table'; key: string; label: string; table: NestedObjectTable };

export type LayoutSheetChunk =
    | { kind: 'fields'; entries: ScalarParamEntry[] }
    | { kind: 'table'; table: NestedObjectTable };

export const sortByKeyOrder = <T>(
    items: T[],
    keyOrder: string[] | undefined,
    getKey: (item: T) => string
): T[] => {
    if (!keyOrder?.length || items.length < 2) return items;
    const rank = new Map(keyOrder.map((key, index) => [key, index]));
    return items
        .map((item, index) => ({ item, index, rank: rank.get(getKey(item)) }))
        .sort((left, right) => {
            const leftRank = left.rank ?? keyOrder.length + left.index;
            const rightRank = right.rank ?? keyOrder.length + right.index;
            return leftRank - rightRank || left.index - right.index;
        })
        .map((entry) => entry.item);
};

export const applyVisibleKeyReorder = (fullOrder: string[], visibleOrdered: string[]): string[] => {
    const visibleSet = new Set(visibleOrdered);
    let visibleIndex = 0;
    const next = fullOrder.map((key) => {
        if (!visibleSet.has(key)) return key;
        return visibleOrdered[visibleIndex++] ?? key;
    });
    for (const key of visibleOrdered) {
        if (!next.includes(key)) next.push(key);
    }
    return next;
};

export const orderRecordKeys = (
    map: Record<string, string>,
    keyOrder?: string[]
): Record<string, string> => {
    if (!keyOrder?.length) return map;
    const ordered: Record<string, string> = {};
    for (const key of keyOrder) {
        if (key in map) ordered[key] = map[key];
    }
    for (const [key, value] of Object.entries(map)) {
        if (!(key in ordered)) ordered[key] = value;
    }
    return ordered;
};

export const collectLayoutSheetItems = (
    value: unknown,
    options?: { hiddenKeys?: string[]; keyOrder?: string[] }
): LayoutSheetItem[] => {
    const hiddenKeys = options?.hiddenKeys;
    const fields: LayoutSheetItem[] = collectScalarParams(value, {
        hiddenKeys,
        skipObjectArrays: true,
        maxItems: 250,
    }).map((entry) => ({
        kind: 'field',
        key: entry.key,
        label: entry.label,
        entry,
    }));
    const tables: LayoutSheetItem[] = collectObjectTables(value, { hiddenKeys }).map((table) => ({
        kind: 'table',
        key: table.key,
        label: table.label,
        table,
    }));
    return sortByKeyOrder([...fields, ...tables], options?.keyOrder, (item) => item.key);
};

export const chunkLayoutSheetItems = (items: LayoutSheetItem[]): LayoutSheetChunk[] => {
    const chunks: LayoutSheetChunk[] = [];
    for (const item of items) {
        if (item.kind === 'table') {
            chunks.push({ kind: 'table', table: item.table });
            continue;
        }
        const last = chunks[chunks.length - 1];
        if (last?.kind === 'fields') last.entries.push(item.entry);
        else chunks.push({ kind: 'fields', entries: [item.entry] });
    }
    return chunks;
};

export type LayoutParamGroup = {
    key: string;
    label: string;
    kind: 'table' | 'fields';
    keys: string[];
};

const BLOB_KEY_PATTERN = /base64|pdfbytes|pdfdata/i;
const ROOT_TABLE_KEY = '__list';

const humanizeSegment = (segment: string): string => {
    if (/^\d+$/.test(segment)) return String(Number(segment) + 1);
    return segment
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/[_-]+/g, ' ')
        .replace(/^./, (letter) => letter.toUpperCase())
        .trim();
};

export const humanizeParamKey = (key: string): string =>
    key.split('.').filter((part) => part && part !== ROOT_TABLE_KEY).map(humanizeSegment).join(' · ') ||
    key;

const isScalar = (value: unknown): boolean =>
    value != null && typeof value !== 'object';

const isCodeDescriptionObject = (value: unknown): value is Record<string, unknown> => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
    const item = value as Record<string, unknown>;
    const code = item.code ?? item.codigo ?? item.Code;
    const desc = item.description ?? item.descripcion ?? item.Description;
    return (typeof code === 'string' || typeof code === 'number') && typeof desc === 'string';
};

const formatCodeDescriptionLine = (item: Record<string, unknown>): string => {
    const code = item.code ?? item.codigo ?? item.Code;
    const desc = item.description ?? item.descripcion ?? item.Description;
    const codeText = code != null ? String(code) : '';
    const descText = desc != null ? String(desc) : '';
    if (codeText && descText) return `${codeText} — ${descText}`;
    return codeText || descText || '—';
};

export const valueAtDataPath = (root: unknown, dataPath?: string): unknown => {
    if (!dataPath) return root;
    let current: unknown = root;
    for (const part of dataPath.split('.')) {
        if (current == null || typeof current !== 'object') return null;
        current = (current as Record<string, unknown>)[part];
    }
    return current;
};

export const isHiddenParamKey = (key: string, hiddenKeys?: string[]): boolean => {
    if (!hiddenKeys?.length) return false;
    for (const hidden of hiddenKeys) {
        if (!hidden) continue;
        if (key === hidden || key.startsWith(`${hidden}.`)) return true;
    }
    return false;
};

const isObjectRecordArray = (value: unknown): value is Record<string, unknown>[] =>
    Array.isArray(value) &&
    value.length > 0 &&
    value.every((item) => item && typeof item === 'object' && !Array.isArray(item)) &&
    !value.every((item) => isCodeDescriptionObject(item));

const cellText = (value: unknown): string => {
    if (value == null) return '—';
    if (isScalar(value)) return String(value);
    if (isCodeDescriptionObject(value)) return formatCodeDescriptionLine(value);
    const nested = collectScalarParams(value, { maxItems: 12, maxDepth: 4, skipObjectArrays: false });
    if (!nested.length) return '—';
    return nested.map((entry) => `${entry.label}: ${entry.value}`).join('; ');
};

export type CollectScalarOptions = {
    hiddenKeys?: string[];
    maxDepth?: number;
    maxItems?: number;
    /** When true, arrays of objects are left for tables instead of exploding into cells. */
    skipObjectArrays?: boolean;
};

/**
 * Flatten nested endpoint payloads into label/value pairs for the canvas and PDF.
 */
export const collectScalarParams = (
    value: unknown,
    options?: CollectScalarOptions
): ScalarParamEntry[] => {
    const hidden = options?.hiddenKeys ?? [];
    const maxDepth = options?.maxDepth ?? 8;
    const maxItems = options?.maxItems ?? 200;
    const skipObjectArrays = options?.skipObjectArrays === true;
    const rows: ScalarParamEntry[] = [];
    const seen = new WeakSet<object>();

    const push = (key: string, text: string): void => {
        if (isHiddenParamKey(key, hidden) || rows.length >= maxItems) return;
        rows.push({ key, label: humanizeParamKey(key), value: text });
    };

    const walk = (node: unknown, prefix: string, depth: number): void => {
        if (rows.length >= maxItems || node == null) return;

        if (isScalar(node)) {
            if (!prefix) return;
            push(prefix, String(node));
            return;
        }

        if (typeof node !== 'object') return;
        if (seen.has(node)) return;
        seen.add(node);

        if (depth > maxDepth) {
            if (prefix) push(prefix, '…');
            return;
        }

        if (Array.isArray(node)) {
            if (node.length === 0) {
                if (prefix) push(prefix, '—');
                return;
            }
            if (skipObjectArrays && isObjectRecordArray(node)) return;
            if (node.every((item) => isCodeDescriptionObject(item))) {
                node.forEach((item, index) => {
                    const key = prefix ? `${prefix}.${index}` : String(index);
                    push(key, formatCodeDescriptionLine(item));
                });
                return;
            }
            if (node.every((item) => item == null || isScalar(item))) {
                push(prefix || 'items', node.map((item) => (item == null ? '—' : String(item))).join(', '));
                return;
            }
            node.forEach((item, index) => {
                const next = prefix ? `${prefix}.${index}` : String(index);
                walk(item, next, depth + 1);
            });
            return;
        }

        const record = node as Record<string, unknown>;
        const keys = Object.keys(record);
        if (keys.length === 0) {
            if (prefix) push(prefix, '—');
            return;
        }

        for (const rawKey of keys) {
            if (rows.length >= maxItems) return;
            const key = prefix ? `${prefix}.${rawKey}` : rawKey;
            if (BLOB_KEY_PATTERN.test(rawKey) || isHiddenParamKey(key, hidden)) continue;
            const entry = record[rawKey];
            if (isScalar(entry)) {
                push(key, String(entry));
                continue;
            }
            walk(entry, key, depth + 1);
        }
    };

    walk(value, '', 1);
    return rows;
};

const tableFromRecords = (
    records: Record<string, unknown>[],
    key: string,
    hiddenKeys?: string[]
): NestedObjectTable | null => {
    if (isHiddenParamKey(key || ROOT_TABLE_KEY, hiddenKeys)) return null;
    const columnKeys: string[] = [];
    for (const record of records) {
        for (const column of Object.keys(record)) {
            if (BLOB_KEY_PATTERN.test(column)) continue;
            const columnKey = key ? `${key}.${column}` : column;
            if (isHiddenParamKey(columnKey, hiddenKeys) || isHiddenParamKey(column, hiddenKeys)) continue;
            if (!columnKeys.includes(column)) columnKeys.push(column);
        }
    }
    if (!columnKeys.length) return null;
    return {
        key: key || ROOT_TABLE_KEY,
        label: humanizeParamKey(key || ROOT_TABLE_KEY),
        columns: columnKeys.map((column) => ({ key: column, label: humanizeParamKey(column) })),
        rows: records.map((record) => {
            const row: Record<string, string> = {};
            for (const column of columnKeys) {
                row[column] = cellText(record[column]);
            }
            return row;
        }),
    };
};

/** Arrays of objects become tables on the sheet instead of a pile of cells. */
export const collectObjectTables = (
    value: unknown,
    options?: { hiddenKeys?: string[]; maxTables?: number }
): NestedObjectTable[] => {
    const hidden = options?.hiddenKeys ?? [];
    const maxTables = options?.maxTables ?? 12;
    const tables: NestedObjectTable[] = [];
    const seen = new WeakSet<object>();

    const walk = (node: unknown, prefix: string, depth: number): void => {
        if (tables.length >= maxTables || node == null || typeof node !== 'object') return;
        if (seen.has(node)) return;
        seen.add(node);
        if (depth > 8) return;

        if (isObjectRecordArray(node)) {
            const table = tableFromRecords(node, prefix, hidden);
            if (table) tables.push(table);
            return;
        }

        if (Array.isArray(node)) return;

        for (const [rawKey, entry] of Object.entries(node as Record<string, unknown>)) {
            if (BLOB_KEY_PATTERN.test(rawKey)) continue;
            const key = prefix ? `${prefix}.${rawKey}` : rawKey;
            if (isHiddenParamKey(key, hidden)) continue;
            walk(entry, key, depth + 1);
        }
    };

    walk(value, '', 1);
    return tables;
};

const formatTableForPdf = (table: NestedObjectTable): string => {
    const header = table.columns.map((column) => column.label).join(' · ');
    const lines = table.rows.map((row) => table.columns.map((column) => row[column.key] || '—').join(' · '));
    return [table.label, header, ...lines].filter(Boolean).join('\n');
};

/**
 * Same fields the canvas shows: nested objects as dotted cells, object arrays as
 * compact tables — never exploded row.0.field keys that stretch the last page.
 */
export const flattenPayloadToScalarMap = (
    value: unknown,
    hiddenKeys?: string[],
    keyOrder?: string[]
): Record<string, string> => {
    const map: Record<string, string> = {};
    for (const entry of collectScalarParams(value, {
        hiddenKeys,
        maxDepth: 8,
        maxItems: 250,
        skipObjectArrays: true,
    })) {
        map[entry.key] = entry.value;
    }
    for (const table of collectObjectTables(value, { hiddenKeys })) {
        map[table.key] = formatTableForPdf(table);
    }
    return orderRecordKeys(map, keyOrder);
};

export const setHiddenParamKey = (
    hiddenKeys: string[] | undefined,
    key: string,
    visible: boolean
): string[] => {
    const hidden = new Set(hiddenKeys ?? []);
    if (visible) {
        for (const item of [...hidden]) {
            if (item === key || item.startsWith(`${key}.`) || key.startsWith(`${item}.`)) {
                hidden.delete(item);
            }
        }
    } else {
        hidden.add(key);
        for (const item of [...hidden]) {
            if (item !== key && item.startsWith(`${key}.`)) hidden.delete(item);
        }
    }
    return [...hidden];
};

export const layoutParamGroups = (value: unknown, hiddenKeys?: string[]): LayoutParamGroup[] => {
    const tables = collectObjectTables(value, { hiddenKeys: [] });
    const tableKeys = new Set(tables.map((table) => table.key));
    const scalars = collectScalarParams(value, { skipObjectArrays: true, maxItems: 250 });
    const groups: LayoutParamGroup[] = tables.map((table) => ({
        key: table.key,
        label: table.label,
        kind: 'table',
        keys: [table.key],
    }));

    const byPrefix = new Map<string, ScalarParamEntry[]>();
    for (const entry of scalars) {
        const prefix = entry.key.includes('.') ? entry.key.split('.')[0] : entry.key;
        if (tableKeys.has(prefix) || tableKeys.has(entry.key)) continue;
        byPrefix.set(prefix, [...(byPrefix.get(prefix) ?? []), entry]);
    }

    for (const [prefix, entries] of byPrefix) {
        groups.push({
            key: prefix,
            label: humanizeParamKey(prefix),
            kind: 'fields',
            keys: entries.map((entry) => entry.key),
        });
    }

    return groups.filter((group) => group.keys.length > 0);
};

const resultSequenceFromPath = (path: string | undefined): string | null => {
    const match = path?.match(/^results\.([^.]+)/);
    return match?.[1] ?? null;
};

/**
 * Replace nested `results.*` payloads with the same scalar map the canvas shows,
 * so Puppeteer does not dump objects/arrays as disordered JSON.
 */
export const flattenSampleResultsForPdf = (
    sample: SampleReportData,
    sections: ReportSection[]
): SampleReportData => {
    const results = { ...(sample.results ?? {}) } as Record<string, unknown>;
    const hiddenBySeq = new Map<string, string[]>();
    const keyOrderBySeq = new Map<string, string[]>();
    for (const section of sections) {
        const seq = resultSequenceFromPath(section.dataPath);
        if (seq == null) continue;
        hiddenBySeq.set(seq, [...(hiddenBySeq.get(seq) ?? []), ...(section.hiddenKeys ?? [])]);
        if (section.keyOrder?.length && !keyOrderBySeq.has(seq)) {
            keyOrderBySeq.set(seq, section.keyOrder);
        }
    }

    for (const [seq, payload] of Object.entries(results)) {
        const hidden = hiddenBySeq.get(String(seq));
        const flat = flattenPayloadToScalarMap(payload, hidden, keyOrderBySeq.get(String(seq)));
        if (Object.keys(flat).length > 0) results[seq] = flat;
    }

    return {
        ...sample,
        results,
    };
};
