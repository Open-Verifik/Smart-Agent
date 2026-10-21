import { formatReportCellValue, valueAtDataPath } from './report-param-entries.util';
import { keyValueRules, matchValueRule } from './report-value-rules.util';
import type { ReportSection } from './smart-report.service';

export type ReportShapeTableMode = 'all' | 'any';

const MIXED = '__mixed__';

const recordsAtPath = (root: Record<string, unknown>, path: string | undefined): Record<string, unknown>[] => {
    const value = valueAtDataPath(root, path);
    if (Array.isArray(value)) {
        return value.filter(
            (entry): entry is Record<string, unknown> => Boolean(entry) && typeof entry === 'object' && !Array.isArray(entry)
        );
    }
    if (value && typeof value === 'object' && !Array.isArray(value)) {
        return [value as Record<string, unknown>];
    }
    return [];
};

const columnShortKey = (columnStoreKey: string): string => {
    const dot = columnStoreKey.lastIndexOf('.');
    return dot >= 0 ? columnStoreKey.slice(dot + 1) : columnStoreKey;
};

const cellRaw = (row: Record<string, unknown>, columnStoreKey: string): unknown => {
    const short = columnShortKey(columnStoreKey);
    if (Object.prototype.hasOwnProperty.call(row, short)) return row[short];
    if (Object.prototype.hasOwnProperty.call(row, columnStoreKey)) return row[columnStoreKey];
    return valueAtDataPath(row, columnStoreKey);
};

/** Text shown in a table cell after that column's conditional rules run. */
export const effectiveTableCellText = (
    hostSection: ReportSection | undefined,
    columnStoreKey: string,
    raw: unknown
): string => {
    const formatted = formatReportCellValue(raw);
    const rules = hostSection ? keyValueRules(hostSection, columnStoreKey) : [];
    const matched = matchValueRule(rules, formatted) ?? matchValueRule(rules, raw);
    const text = matched?.text?.trim();
    return text || formatted;
};

/**
 * Value passed to a shape/icon's `valueRules`. For table columns, applies each row's
 * cell rules first, then aggregates (all rows equal → that text; any → joined values).
 */
export const resolveShapeRuleValue = (
    section: ReportSection,
    data: Record<string, unknown>,
    sections: ReportSection[]
): unknown => {
    if (!section.ruleField) return undefined;

    if (section.ruleColumnKey) {
        const host =
            (section.ruleRulesSectionId
                ? sections.find((item) => item.id === section.ruleRulesSectionId)
                : undefined) ??
            sections.find(
                (item) => item.dataPath && section.ruleField!.startsWith(item.dataPath) && item.type !== 'shape'
            );

        const rows = recordsAtPath(data, section.ruleField);
        const effective = rows.map((row) =>
            effectiveTableCellText(host, section.ruleColumnKey!, cellRaw(row, section.ruleColumnKey!))
        );
        if (!effective.length) return undefined;

        const mode: ReportShapeTableMode = section.ruleTableMode === 'any' ? 'any' : 'all';
        if (mode === 'all') {
            const first = effective[0];
            return effective.every((text) => text === first) ? first : MIXED;
        }
        return [...new Set(effective)].join(' | ');
    }

    return valueAtDataPath(data, section.ruleField);
};

export const shapeRuleTestSamples = (
    section: Pick<ReportSection, 'ruleField' | 'ruleColumnKey' | 'ruleTableMode' | 'ruleRulesSectionId'>,
    data: Record<string, unknown>,
    sections: ReportSection[]
): string[] => {
    const value = resolveShapeRuleValue({ ...section, type: 'shape', id: '', order: 0 } as ReportSection, data, sections);
    if (value == null || value === '') return [];
    if (value === MIXED) return [MIXED];
    return String(value)
        .split('|')
        .map((part) => part.trim())
        .filter(Boolean)
        .slice(0, 8);
};
