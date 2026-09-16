import type { ReportSection, SampleReportData } from './smart-report.service';

export type ScalarParamEntry = { key: string; label: string; value: string };

const BLOB_KEY_PATTERN = /base64|pdfbytes|pdfdata/i;

const humanizeSegment = (segment: string): string => {
    if (/^\d+$/.test(segment)) return String(Number(segment) + 1);
    return segment
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/[_-]+/g, ' ')
        .replace(/^./, (letter) => letter.toUpperCase())
        .trim();
};

const humanize = (key: string): string => key.split('.').map(humanizeSegment).join(' · ');

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

/**
 * Flatten nested endpoint payloads into label/value pairs for the canvas and PDF.
 * Walks objects and arrays so the printed grid matches the design preview.
 */
export const collectScalarParams = (
    value: unknown,
    options?: { hiddenKeys?: string[]; maxDepth?: number; maxItems?: number }
): ScalarParamEntry[] => {
    const hidden = new Set(options?.hiddenKeys ?? []);
    const maxDepth = options?.maxDepth ?? 8;
    const maxItems = options?.maxItems ?? 120;
    const rows: ScalarParamEntry[] = [];
    const seen = new WeakSet<object>();

    const push = (key: string, rawLabel: string, text: string): void => {
        if (hidden.has(key) || rows.length >= maxItems) return;
        rows.push({ key, label: humanize(rawLabel || key), value: text });
    };

    const walk = (node: unknown, prefix: string, depth: number): void => {
        if (rows.length >= maxItems || node == null) return;

        if (isScalar(node)) {
            if (!prefix) return;
            push(prefix, prefix, String(node));
            return;
        }

        if (typeof node !== 'object') return;
        if (seen.has(node)) return;
        seen.add(node);

        if (depth > maxDepth) {
            if (prefix) push(prefix, prefix, '…');
            return;
        }

        if (Array.isArray(node)) {
            if (node.length === 0) {
                if (prefix) push(prefix, prefix, '—');
                return;
            }
            if (node.every((item) => isCodeDescriptionObject(item))) {
                node.forEach((item, index) => {
                    const key = prefix ? `${prefix}.${index}` : String(index);
                    push(key, key, formatCodeDescriptionLine(item));
                });
                return;
            }
            if (node.every((item) => item == null || isScalar(item))) {
                push(prefix || 'items', prefix || 'items', node.map((item) => (item == null ? '—' : String(item))).join(', '));
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
            if (prefix) push(prefix, prefix, '—');
            return;
        }

        for (const rawKey of keys) {
            if (rows.length >= maxItems) return;
            const key = prefix ? `${prefix}.${rawKey}` : rawKey;
            if (BLOB_KEY_PATTERN.test(rawKey)) continue;
            const entry = record[rawKey];
            if (isScalar(entry)) {
                push(key, key, String(entry));
                continue;
            }
            walk(entry, key, depth + 1);
        }
    };

    walk(value, '', 1);
    return rows;
};

export const flattenPayloadToScalarMap = (
    value: unknown,
    hiddenKeys?: string[]
): Record<string, string> => {
    const map: Record<string, string> = {};
    for (const entry of collectScalarParams(value, { hiddenKeys, maxDepth: 8, maxItems: 200 })) {
        map[entry.key] = entry.value;
    }
    return map;
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
    for (const section of sections) {
        const seq = resultSequenceFromPath(section.dataPath);
        if (seq == null) continue;
        hiddenBySeq.set(seq, [...(hiddenBySeq.get(seq) ?? []), ...(section.hiddenKeys ?? [])]);
    }

    for (const [seq, payload] of Object.entries(results)) {
        const flat = flattenPayloadToScalarMap(payload, hiddenBySeq.get(String(seq)));
        if (Object.keys(flat).length > 0) results[seq] = flat;
    }

    return {
        ...sample,
        results,
    };
};
