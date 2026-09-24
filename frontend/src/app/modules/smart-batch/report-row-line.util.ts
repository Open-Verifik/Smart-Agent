import { ReportRowLineStyle } from './smart-report.service';

export const ROW_LINE_WIDTH_MIN = 1;
export const ROW_LINE_WIDTH_MAX = 12;
export const ROW_LINE_WIDTH_DEFAULT = 3;
export const ROW_LINE_MARK_MIN = 2;
export const ROW_LINE_MARK_MAX = 32;

export function clampRowLineWidth(value: unknown, fallback = ROW_LINE_WIDTH_DEFAULT): number {
    const n = Number(value);
    if (!Number.isFinite(n)) return fallback;
    return Math.max(ROW_LINE_WIDTH_MIN, Math.min(ROW_LINE_WIDTH_MAX, Math.round(n)));
}

export function defaultRowLineMark(style: ReportRowLineStyle): number {
    return style === 'dotted' ? 2 : 8;
}

export function clampRowLineMark(value: unknown, style: ReportRowLineStyle, fallback?: number): number {
    const n = Number(value);
    const base = fallback ?? defaultRowLineMark(style);
    if (!Number.isFinite(n)) return base;
    return Math.max(ROW_LINE_MARK_MIN, Math.min(ROW_LINE_MARK_MAX, Math.round(n)));
}

export function rowLinePaint(
    style: ReportRowLineStyle,
    color: string,
    width: number,
    mark: number
): { image: string; size: string } {
    const thickness = clampRowLineWidth(width);
    const size = `100% ${thickness}px`;

    if (style === 'dotted') {
        const on = clampRowLineMark(mark, 'dotted');
        const gap = on * 2;
        return {
            image: `repeating-linear-gradient(to right, ${color} 0 ${on}px, transparent ${on}px ${on + gap}px)`,
            size,
        };
    }

    if (style === 'dashed') {
        const on = clampRowLineMark(mark, 'dashed');
        const gap = Math.max(4, Math.round(on * 0.75));
        return {
            image: `repeating-linear-gradient(to right, ${color} 0 ${on}px, transparent ${on}px ${on + gap}px)`,
            size,
        };
    }

    return { image: `linear-gradient(${color}, ${color})`, size };
}
