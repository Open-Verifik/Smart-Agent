/**
 * Flattens Smart Batch step result JSON into human-readable label/value rows for
 * report viewer Table, CSV, Excel, and AG Grid. Same string labels are used as
 * column keys across exports so unions stay aligned.
 */

export type StepDisplayRow = { label: string; value: string };

export interface FlattenStepDisplayOptions {
    /** Max nesting depth (default 14) */
    maxDepth?: number;
    /** Max emitted rows; remainder summarized (default 500) */
    maxRows?: number;
    /** Max string length for a single cell (default 20000) */
    maxCellChars?: number;
}

const DEFAULT_MAX_DEPTH = 14;
const DEFAULT_MAX_ROWS = 500;
const DEFAULT_MAX_CELL_CHARS = 20000;

const LABEL_JOINER = ' › ';

const BLOB_KEY_PATTERN = /base64|pdfbytes|pdfdata/i;

/**
 * Humanize a single API key segment (camelCase / snake_case) for display.
 */
export const humanizeApiSegment = (key: string): string => {
    if (!key) return '';
    const withSpaces = key
        .replace(/_/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        .trim();
    return withSpaces.replace(/^./, (c) => c.toUpperCase());
};

const joinPathLabel = (segments: string[]): string => {
    const humanized = segments.map(humanizeApiSegment).filter(Boolean);
    const deduped: string[] = [];
    for (const h of humanized) {
        if (deduped.length > 0 && deduped[deduped.length - 1] === h) continue;
        deduped.push(h);
    }
    return deduped.join(LABEL_JOINER);
};

/** Build the same display label string used for flattened rows (for presenters). */
export const stepDisplayLabelFromSegments = (segments: string[]): string => joinPathLabel(segments);

const shouldOmitKey = (key: string): boolean => {
    if (!key) return false;
    if (BLOB_KEY_PATTERN.test(key)) return true;
    return false;
};

const truncateCell = (s: string, maxCellChars: number): string => {
    if (s.length <= maxCellChars) return s;
    return s.slice(0, maxCellChars) + '\n…';
};

const isCodeDescriptionObject = (v: unknown): v is Record<string, unknown> => {
    if (!v || typeof v !== 'object' || Array.isArray(v)) return false;
    const o = v as Record<string, unknown>;
    const code = o.code ?? o.codigo ?? o.Code;
    const desc = o.description ?? o.descripcion ?? o.Description;
    return (typeof code === 'string' || typeof code === 'number') && typeof desc === 'string';
};

const formatCodeDescriptionLine = (item: Record<string, unknown>): string => {
    const code = item.code ?? item.codigo ?? item.Code;
    const desc = item.description ?? item.descripcion ?? item.Description;
    const c = code != null ? String(code) : '';
    const d = desc != null ? String(desc) : '';
    if (c && d) return `${c} — ${d}`;
    return c || d || '—';
};

/**
 * Recursively flatten JSON-like step results into label/value rows.
 */
export const flattenStepResultDisplay = (
    data: unknown,
    options: FlattenStepDisplayOptions = {}
): StepDisplayRow[] => {
    const maxDepth = options.maxDepth ?? DEFAULT_MAX_DEPTH;
    const maxRows = options.maxRows ?? DEFAULT_MAX_ROWS;
    const maxCellChars = options.maxCellChars ?? DEFAULT_MAX_CELL_CHARS;

    const rows: StepDisplayRow[] = [];
    const seenObjects = new WeakSet<object>();

    const flushTruncationRow = (): void => {
        if (rows.some((r) => r.label === '…truncated')) return;
        rows.push({ label: '…truncated', value: 'Additional fields omitted' });
    };

    const walk = (value: unknown, segments: string[], depth: number): void => {
        if (rows.length >= maxRows) {
            flushTruncationRow();
            return;
        }

        if (value === null || value === undefined) {
            rows.push({ label: joinPathLabel(segments) || 'Result', value: '—' });
            return;
        }

        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            rows.push({
                label: joinPathLabel(segments) || 'Result',
                value: truncateCell(String(value), maxCellChars),
            });
            return;
        }

        if (typeof value === 'bigint') {
            rows.push({
                label: joinPathLabel(segments) || 'Result',
                value: truncateCell(String(value), maxCellChars),
            });
            return;
        }

        if (value instanceof Date) {
            rows.push({
                label: joinPathLabel(segments) || 'Result',
                value: value.toISOString(),
            });
            return;
        }

        if (typeof value !== 'object') {
            rows.push({
                label: joinPathLabel(segments) || 'Result',
                value: truncateCell(String(value), maxCellChars),
            });
            return;
        }

        if (seenObjects.has(value as object)) {
            rows.push({
                label: joinPathLabel(segments) || 'Result',
                value: '[Circular]',
            });
            return;
        }
        seenObjects.add(value as object);

        if (depth > maxDepth) {
            rows.push({
                label: joinPathLabel(segments) || 'Result',
                value: '[Max depth]',
            });
            seenObjects.delete(value as object);
            return;
        }

        if (Array.isArray(value)) {
            if (value.length === 0) {
                rows.push({
                    label: joinPathLabel(segments) || 'Result',
                    value: '—',
                });
                seenObjects.delete(value as object);
                return;
            }

            const allCodeDesc = value.every(
                (el) =>
                    el &&
                    typeof el === 'object' &&
                    !Array.isArray(el) &&
                    isCodeDescriptionObject(el)
            );
            if (allCodeDesc) {
                value.forEach((el, i) => {
                    if (rows.length >= maxRows) {
                        flushTruncationRow();
                        return;
                    }
                    const line = formatCodeDescriptionLine(el as Record<string, unknown>);
                    const leafSeg =
                        segments.length > 0 ? [...segments, String(i + 1)] : [String(i + 1)];
                    rows.push({
                        label: joinPathLabel(leafSeg),
                        value: truncateCell(line, maxCellChars),
                    });
                });
                seenObjects.delete(value as object);
                return;
            }

            const primitivesOnly = value.every(
                (el) =>
                    el === null ||
                    el === undefined ||
                    typeof el === 'string' ||
                    typeof el === 'number' ||
                    typeof el === 'boolean' ||
                    typeof el === 'bigint'
            );
            if (primitivesOnly) {
                rows.push({
                    label: joinPathLabel(segments) || 'Result',
                    value: truncateCell(
                        value.map((v) => (v == null ? '—' : String(v))).join(', '),
                        maxCellChars
                    ),
                });
                seenObjects.delete(value as object);
                return;
            }

            value.forEach((el, i) => {
                const nextSeg = [...segments, String(i + 1)];
                walk(el, nextSeg, depth + 1);
            });
            seenObjects.delete(value as object);
            return;
        }

        const allKeys = Object.keys(value as object);
        if (allKeys.length === 0) {
            rows.push({
                label: joinPathLabel(segments) || 'Result',
                value: '—',
            });
            seenObjects.delete(value as object);
            return;
        }

        for (const key of allKeys) {
            if (rows.length >= maxRows) {
                flushTruncationRow();
                break;
            }
            if (shouldOmitKey(key)) {
                rows.push({
                    label: joinPathLabel([...segments, key]),
                    value: '[omitted]',
                });
                continue;
            }
            const raw = (value as Record<string, unknown>)[key];
            walk(raw, [...segments, key], depth + 1);
        }

        seenObjects.delete(value as object);
    };

    walk(data, [], 0);
    return rows;
};

const FIXED_INPUT_LABELS = ['Document Number', 'Document Type'];

const truncatedSortKey = (label: string): boolean =>
    label === '…truncated' || label.startsWith('…');

/** First path segment after splitting on the display joiner (human-readable top-level group). */
const topLevelSegment = (label: string): string => {
    const sep = ' › ';
    const i = label.indexOf(sep);
    return i === -1 ? label : label.slice(0, i);
};

/**
 * Stable ordering for CSV / Excel / AG Grid columns: identity columns first, then grouped paths.
 */
export const sortStepExportFieldLabels = (labels: string[]): string[] => {
    const uniq = [...new Set(labels)];
    const fixedAvailable = FIXED_INPUT_LABELS.filter((f) => uniq.includes(f));
    const rest = uniq.filter((l) => !FIXED_INPUT_LABELS.includes(l));

    const bucket = (label: string): number => {
        if (truncatedSortKey(label)) return 9999;
        const t = topLevelSegment(label).toLowerCase();
        if (t.startsWith('commercial registry')) return 10;
        if (t.startsWith('establishment owner')) return 20;
        if (t.startsWith('economic activities')) return 30;
        return 100;
    };

    rest.sort((a, b) => {
        const ba = bucket(a);
        const bb = bucket(b);
        if (ba !== bb) return ba - bb;
        const ta = topLevelSegment(a).toLocaleLowerCase();
        const tb = topLevelSegment(b).toLocaleLowerCase();
        if (ta !== tb) return ta.localeCompare(tb);
        return a.localeCompare(b, undefined, { numeric: true });
    });

    return [...fixedAvailable, ...rest];
};
