import { valueAtDataPath } from './report-param-entries.util';

export type ReportDateStampKind = 'consultedAt' | 'generatedAt';

export const REPORT_DATE_STAMP_PATHS: Record<ReportDateStampKind, string> = {
    consultedAt: 'consultedAt',
    generatedAt: 'generatedAt',
};

const STAMP_PATHS = new Set(['consultedAt', 'generatedAt', 'meta.consultedAt', 'meta.generatedAt']);

export const formatReportStamp = (value: unknown, locale = 'es'): string => {
    const date =
        value instanceof Date
            ? value
            : value == null || value === ''
              ? null
              : new Date(typeof value === 'number' || typeof value === 'string' ? value : String(value));
    if (!date || Number.isNaN(date.getTime())) return '';
    try {
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    } catch {
        return date.toLocaleString();
    }
};

const consultedRaw = (data: Record<string, unknown> | null | undefined): unknown =>
    data?.['consultedAt'] ??
    data?.['processedAt'] ??
    data?.['startedAt'] ??
    data?.['createdAt'] ??
    (data?.['meta'] && typeof data.meta === 'object' ? (data.meta as Record<string, unknown>)['consultedAt'] : undefined);

export const reportDateStampForPath = (
    path: string | undefined,
    data: Record<string, unknown> | null | undefined,
    locale = 'es'
): string | null => {
    const key = String(path || '').trim();
    if (!STAMP_PATHS.has(key)) return null;
    if (key === 'generatedAt' || key === 'meta.generatedAt') return formatReportStamp(new Date(), locale);
    return formatReportStamp(consultedRaw(data) || new Date(), locale);
};

export const substituteReportPlaceholders = (
    text: string,
    data: Record<string, unknown> | null | undefined,
    locale = 'es'
): string => {
    if (!text || !text.includes('{')) return text;
    return text.replace(/\{([^}]+)\}/g, (match, rawPath: string) => {
        const path = rawPath.trim();
        const stamp = reportDateStampForPath(path, data, locale);
        if (stamp) return stamp;
        const value = valueAtDataPath(data, path);
        if (value == null || value === '') return match;
        return String(value);
    });
};
