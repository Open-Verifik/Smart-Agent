export const REPORT_CHART_KINDS = ['none', 'pie', 'bar'] as const;
export type ReportChartKind = (typeof REPORT_CHART_KINDS)[number];

export const REPORT_CHART_PALETTES = ['color', 'mono'] as const;
export type ReportChartPalette = (typeof REPORT_CHART_PALETTES)[number];

export const REPORT_CHART_BREAKDOWNS = ['outcome', 'category'] as const;
export type ReportChartBreakdown = (typeof REPORT_CHART_BREAKDOWNS)[number];

/** Outcome counts for a consultation pie/bar. Percents and totals stay off the chart unless picked. */
export const DEFAULT_CONSULT_CHART_KEYS = ['successful', 'failed', 'skipped', 'empty'] as const;
export const DEFAULT_CONSULT_CATEGORY_CHART_KEYS = ['citizen', 'vehicle', 'company', 'other'] as const;

const COLOR_BY_KEY: Record<string, string> = {
    total: '#4f46e5',
    successful: '#16a34a',
    found: '#2563eb',
    failed: '#dc2626',
    skipped: '#d97706',
    empty: '#64748b',
    successPercent: '#16a34a',
    foundPercent: '#2563eb',
    failedPercent: '#dc2626',
    citizen: '#2563eb',
    vehicle: '#0ea5e9',
    company: '#8b5cf6',
    other: '#64748b',
};

const FALLBACK_HUES = ['#4f46e5', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#14b8a6', '#f97316'];

export type ReportChartSlice = {
    key: string;
    label: string;
    value: number;
    color: string;
};

export type ReportChartPieArc = ReportChartSlice & { d: string; percent: number };
export type ReportChartBar = ReportChartSlice & { x: number; y: number; width: number; height: number };

export const isReportChartKind = (value: unknown): value is ReportChartKind =>
    value === 'none' || value === 'pie' || value === 'bar';

export const isReportChartPalette = (value: unknown): value is ReportChartPalette =>
    value === 'color' || value === 'mono';

export const isReportChartBreakdown = (value: unknown): value is ReportChartBreakdown =>
    value === 'outcome' || value === 'category';

export const chartNumeric = (value: unknown): number => {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    const match = String(value ?? '').replace(/,/g, '').match(/-?\d+(?:\.\d+)?/);
    if (!match) return 0;
    const next = Number(match[0]);
    return Number.isFinite(next) ? next : 0;
};

const clampByte = (value: number): number => Math.max(0, Math.min(255, Math.round(value)));

const hexRgb = (hex: string): [number, number, number] => {
    const raw = hex.replace('#', '').trim();
    const full = raw.length === 3 ? raw.split('').map((part) => part + part).join('') : raw.padEnd(6, '0').slice(0, 6);
    return [parseInt(full.slice(0, 2), 16) || 0, parseInt(full.slice(2, 4), 16) || 0, parseInt(full.slice(4, 6), 16) || 0];
};

const rgbHex = (rgb: [number, number, number]): string =>
    `#${rgb.map((part) => clampByte(part).toString(16).padStart(2, '0')).join('')}`;

export const mixHex = (from: string, to: string, amount: number): string => {
    const t = Math.max(0, Math.min(1, amount));
    const a = hexRgb(from);
    const b = hexRgb(to);
    return rgbHex([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]);
};

export const chartHex = (raw: unknown): string | null => {
    let value = String(raw ?? '').trim();
    if (!value) return null;
    if (value[0] !== '#') value = `#${value}`;
    if (/^#([0-9a-f]{3})$/i.test(value)) {
        const short = value.slice(1);
        value = `#${short[0]}${short[0]}${short[1]}${short[1]}${short[2]}${short[2]}`;
    }
    if (/^#[0-9a-f]{8}$/i.test(value)) value = value.slice(0, 7);
    if (!/^#[0-9a-f]{6}$/i.test(value)) return null;
    return value.toLowerCase();
};

export const chartColorForKey = (
    key: string,
    index: number,
    count: number,
    palette: ReportChartPalette,
    primaryColor: string,
    custom?: unknown
): string => {
    const override = chartHex(custom);
    if (override) return override;
    if (palette === 'mono') {
        const t = count <= 1 ? 0.12 : (index / Math.max(1, count - 1)) * 0.72;
        return mixHex(primaryColor || '#4F46E5', '#ffffff', t);
    }
    return COLOR_BY_KEY[key] || FALLBACK_HUES[index % FALLBACK_HUES.length];
};

export const resolvedChartKeys = (keys: string[] | undefined, breakdown?: ReportChartBreakdown): string[] => {
    if (Array.isArray(keys) && keys.length) return keys.filter(Boolean);
    return breakdown === 'category' ? [...DEFAULT_CONSULT_CATEGORY_CHART_KEYS] : [...DEFAULT_CONSULT_CHART_KEYS];
};

export const buildChartSlices = (options: {
    data: unknown;
    keys?: string[];
    labels?: Record<string, string>;
    colors?: Record<string, string>;
    palette?: ReportChartPalette;
    breakdown?: ReportChartBreakdown;
    primaryColor?: string;
}): ReportChartSlice[] => {
    const record = options.data && typeof options.data === 'object' && !Array.isArray(options.data)
        ? (options.data as Record<string, unknown>)
        : {};
    const keys = resolvedChartKeys(options.keys, options.breakdown);
    const palette: ReportChartPalette = options.palette === 'mono' ? 'mono' : 'color';
    const primary = options.primaryColor || '#4F46E5';
    return keys.map((key, index) => ({
        key,
        label: options.labels?.[key] || key,
        value: Math.max(0, chartNumeric(record[key])),
        color: chartColorForKey(key, index, keys.length, palette, primary, options.colors?.[key]),
    }));
};

const polar = (cx: number, cy: number, radius: number, angle: number): [number, number] => [
    cx + radius * Math.cos(angle),
    cy + radius * Math.sin(angle),
];

const wedgePath = (cx: number, cy: number, radius: number, start: number, end: number): string => {
    const [x1, y1] = polar(cx, cy, radius, start);
    const [x2, y2] = polar(cx, cy, radius, end);
    const large = end - start > Math.PI ? 1 : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2} Z`;
};

export const pieArcs = (slices: ReportChartSlice[], cx: number, cy: number, radius: number): ReportChartPieArc[] => {
    const total = slices.reduce((sum, slice) => sum + Math.max(0, slice.value), 0);
    if (total <= 0) {
        return slices.map((slice) => ({ ...slice, d: '', percent: 0 }));
    }
    let angle = -Math.PI / 2;
    return slices.map((slice) => {
        const value = Math.max(0, slice.value);
        const delta = (value / total) * Math.PI * 2;
        const start = angle;
        angle += delta;
        const full = delta >= Math.PI * 2 - 1e-6;
        const d = value <= 0
            ? ''
            : full
              ? `M ${cx - radius} ${cy} A ${radius} ${radius} 0 1 1 ${cx + radius} ${cy} A ${radius} ${radius} 0 1 1 ${cx - radius} ${cy} Z`
              : wedgePath(cx, cy, radius, start, angle);
        return { ...slice, d, percent: Math.round((value / total) * 100) };
    });
};

export const barRects = (
    slices: ReportChartSlice[],
    width: number,
    height: number
): ReportChartBar[] => {
    const n = Math.max(1, slices.length);
    const gap = 10;
    const axis = 18;
    const barWidth = Math.max(10, (width - gap * (n + 1)) / n);
    const max = Math.max(1, ...slices.map((slice) => slice.value));
    const plot = Math.max(8, height - axis - 8);
    return slices.map((slice, index) => {
        const barHeight = (slice.value / max) * plot;
        return {
            ...slice,
            x: gap + index * (barWidth + gap),
            y: 8 + plot - barHeight,
            width: barWidth,
            height: barHeight,
        };
    });
};

const escapeXml = (value: string): string =>
    String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

export const chartSvgMarkup = (
    kind: Exclude<ReportChartKind, 'none'>,
    slices: ReportChartSlice[],
    size?: { width?: number; height?: number }
): string => {
    const width = Math.max(180, Math.round(Number(size?.width) || 320));
    const height = Math.max(140, Math.round(Number(size?.height) || 180));
    if (kind === 'pie') {
        const radius = Math.max(28, Math.min(width * 0.28, height * 0.38));
        const cx = radius + 10;
        const cy = height / 2;
        const arcs = pieArcs(slices, cx, cy, radius);
        const legendX = cx + radius + 16;
        const row = Math.max(16, Math.min(22, (height - 16) / Math.max(1, slices.length)));
        const paths = arcs
            .filter((arc) => arc.d)
            .map((arc) => `<path d="${arc.d}" fill="${arc.color}"></path>`)
            .join('');
        const empty = !paths
            ? `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="#e5e7eb"></circle>`
            : '';
        const legend = slices
            .map((slice, index) => {
                const y = 14 + index * row;
                return `<rect x="${legendX}" y="${y - 8}" width="10" height="10" rx="2" fill="${slice.color}"></rect><text x="${legendX + 16}" y="${y}" font-size="11" fill="#334155">${escapeXml(slice.label)} · ${slice.value}</text>`;
            })
            .join('');
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" role="img">${empty}${paths}${legend}</svg>`;
    }
    const bars = barRects(slices, width, height);
    const shapes = bars
        .map(
            (bar) =>
                `<rect x="${bar.x}" y="${bar.y}" width="${bar.width}" height="${Math.max(0, bar.height)}" rx="3" fill="${bar.color}"></rect><text x="${bar.x + bar.width / 2}" y="${height - 4}" text-anchor="middle" font-size="9" fill="#64748b">${escapeXml(bar.label)}</text>`
        )
        .join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="${height}" role="img">${shapes}</svg>`;
};
