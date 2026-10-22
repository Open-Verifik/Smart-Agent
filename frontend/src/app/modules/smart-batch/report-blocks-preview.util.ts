import type { ReportSection } from './smart-report.service';
import { formatReportCellValue } from './report-param-entries.util';

export type ResolvedReportBlockPreview = {
    blockId: string;
    title: string;
    status: string;
    statusVariant: 'success' | 'danger' | 'warning' | 'neutral';
    errorMessage?: string;
    skipMessage?: string;
    displayRows: { label: string; value: string }[];
    tables: {
        id: string;
        title: string;
        columns: { key: string; label: string }[];
        rows: string[][];
    }[];
};

export type ResolvedReportBlocksSection = {
    summary: Record<string, unknown>;
    blocks: ResolvedReportBlockPreview[];
    showDisplayRows: boolean;
};

const blockStatusVariant = (status: string): ResolvedReportBlockPreview['statusVariant'] => {
    if (status === 'ok') return 'success';
    if (status === 'error') return 'danger';
    if (status === 'skipped') return 'warning';
    return 'neutral';
};

const formatCell = (value: unknown): string => {
    if (value == null) return '—';
    if (typeof value === 'object') return formatReportCellValue(value);
    return String(value);
};

const valueAtPath = (data: Record<string, unknown>, path: string): unknown => {
    let current: unknown = data;
    for (const part of path.split('.')) {
        if (current == null || typeof current !== 'object') return undefined;
        const record = current as Record<string, unknown>;
        if (Object.prototype.hasOwnProperty.call(record, part)) {
            current = record[part];
            continue;
        }
        if (/^\d+$/.test(part) && record[Number(part)] !== undefined) {
            current = record[Number(part)];
            continue;
        }
        return undefined;
    }
    return current;
};

/** Mirrors backend `reportBlocks` resolution for live preview. */
export const resolveReportBlocksSection = (
    section: ReportSection,
    previewData: Record<string, unknown>
): ResolvedReportBlocksSection | null => {
    const path = section.dataPath || 'report';
    const model = valueAtPath(previewData, path) as
        | {
              blocks?: Record<string, Record<string, unknown>>;
              blockOrder?: string[];
              summary?: Record<string, unknown>;
          }
        | undefined;

    if (!model?.blocks || typeof model.blocks !== 'object') return null;

    const order =
        Array.isArray(model.blockOrder) && model.blockOrder.length > 0
            ? model.blockOrder
            : Object.keys(model.blocks);
    const only =
        Array.isArray(section.blockIds) && section.blockIds.length > 0 ? section.blockIds : null;

    const blocks: ResolvedReportBlockPreview[] = [];
    for (const blockId of order) {
        if (only && !only.includes(blockId)) continue;
        const block = model.blocks[blockId];
        if (!block || typeof block !== 'object') continue;
        const featureCode = block['featureCode'];
        if (typeof featureCode !== 'string' || !featureCode) continue;

        const displayRows = Array.isArray(block['displayRows'])
            ? (block['displayRows'] as { label?: string; value?: unknown }[])
                  .filter((row) => row && typeof row === 'object')
                  .map((row) => ({
                      label: String(row.label ?? ''),
                      value: formatCell(row.value),
                  }))
            : [];

        const tables = Array.isArray(block['tables'])
            ? (block['tables'] as Record<string, unknown>[]).map((table, index) => {
                  const columns = Array.isArray(table['columns'])
                      ? (table['columns'] as { key?: string; label?: string }[]).map((col) => ({
                            key: String(col.key ?? ''),
                            label: String(col.label ?? col.key ?? ''),
                        }))
                      : [];
                  const rawRows = Array.isArray(table['rows']) ? (table['rows'] as Record<string, unknown>[]) : [];
                  return {
                      id: String(table['id'] ?? `table-${index}`),
                      title: String(table['title'] ?? ''),
                      columns,
                      rows: rawRows.map((row) => columns.map((col) => formatCell(row[col.key]))),
                  };
              })
            : [];

        blocks.push({
            blockId,
            title: String(block['title'] ?? featureCode),
            status: String(block['status'] ?? 'neutral'),
            statusVariant: blockStatusVariant(String(block['status'] ?? '')),
            errorMessage: block['errorMessage'] != null ? String(block['errorMessage']) : undefined,
            skipMessage: block['skipMessage'] != null ? String(block['skipMessage']) : undefined,
            displayRows,
            tables,
        });
    }

    if (!blocks.length) return null;

    return {
        summary: (model.summary && typeof model.summary === 'object' ? model.summary : {}) as Record<
            string,
            unknown
        >,
        blocks,
        showDisplayRows: section.showDisplayRows !== false,
    };
};

export const reportModelHasBlocks = (report: Record<string, unknown> | null | undefined): boolean =>
    !!report &&
    typeof report === 'object' &&
    !!report['blocks'] &&
    typeof report['blocks'] === 'object' &&
    Object.keys(report['blocks'] as object).length > 0;
