import { ReportKeyOverride, ReportSection, ReportTextRole, ReportTextRoleStyle } from './smart-report.service';
import { REPORT_FONT_STACKS, ReportTextAlign } from './report-fonts.util';
import { collectLayoutSheetItems, valueAtDataPath } from './report-param-entries.util';
import { defaultRowLineMark } from './report-row-line.util';

export type ResolvedTextRoleStyle = {
    fontFamily: string;
    fontSize: number;
    fontWeight: 'normal' | 'bold';
    fontStyle: 'normal' | 'italic';
    textDecoration: 'none' | 'underline';
    textAlign: ReportTextAlign;
    color: string;
};

const DEFAULT_FAMILY = REPORT_FONT_STACKS[0].value;

const nestedForRole = (
    style: ReportSection['style'] | undefined,
    role: ReportTextRole
): ReportTextRoleStyle | undefined => {
    if (!style) return undefined;
    if (role === 'title') return style.titleStyle;
    if (role === 'label') return style.labelStyle;
    return style.valueStyle;
};

export const resolveTextRole = (
    section: ReportSection,
    role: ReportTextRole,
    primaryColor: string,
    key?: string
): ResolvedTextRoleStyle => {
    const style = section.style;
    const keyed =
        key && role !== 'title' ? section.keyOverrides?.[key] : undefined;
    const nested = {
        ...nestedForRole(style, role),
        ...(role === 'label' ? keyed?.labelStyle : role === 'value' ? keyed?.valueStyle : undefined),
    };
    const isHeader = section.type === 'header';

    const defaultSize = role === 'title' ? (isHeader ? 22 : 13) : role === 'label' ? 10 : 12;
    const defaultWeight: 'normal' | 'bold' =
        role === 'title' || isHeader ? 'bold' : 'normal';
    const defaultAlign: ReportTextAlign = isHeader && role === 'title' ? 'center' : 'left';
    const defaultColor =
        role === 'title'
            ? primaryColor
            : role === 'label'
              ? '#6B7280'
              : '#111827';

    const fallbackColor =
        role === 'title'
            ? style?.color
            : role === 'label'
              ? style?.labelColor || style?.color
              : style?.valueColor || style?.color;

    const size = Number(nested?.fontSize ?? (role === 'title' ? style?.fontSize : undefined));
    const align = nested?.textAlign ?? (role === 'title' ? style?.textAlign : undefined);

    return {
        fontFamily:
            nested?.fontFamily || (role === 'title' ? style?.fontFamily : undefined) || DEFAULT_FAMILY,
        fontSize: Number.isFinite(size) && size > 0 ? size : defaultSize,
        fontWeight: nested?.fontWeight || (role === 'title' ? style?.fontWeight : undefined) || defaultWeight,
        fontStyle:
            nested?.fontStyle ||
            (role === 'title' ? style?.fontStyle : undefined) ||
            'normal',
        textDecoration:
            (nested?.textDecoration ?? (role === 'title' ? style?.textDecoration : undefined)) === 'underline'
                ? 'underline'
                : 'none',
        textAlign:
            align === 'left' || align === 'center' || align === 'right' || align === 'justify'
                ? align
                : defaultAlign,
        color: nested?.color || fallbackColor || defaultColor,
    };
};

const roleStyle = (resolved: ResolvedTextRoleStyle): ReportTextRoleStyle => ({
    fontFamily: resolved.fontFamily,
    fontSize: resolved.fontSize,
    fontWeight: resolved.fontWeight,
    fontStyle: resolved.fontStyle,
    textDecoration: resolved.textDecoration,
    textAlign: resolved.textAlign,
    color: resolved.color,
});

const TITLE_MIRROR_TYPES = new Set<ReportSection['type']>([
    'header',
    'text',
    'keyValueGrid',
    'card',
    'table',
    'dataTable',
    'badge',
    'repeater',
    'reportBlocks',
]);

const ROW_LINE_TYPES = new Set<ReportSection['type']>([
    'keyValueGrid',
    'card',
    'table',
    'dataTable',
    'field',
]);

const NESTED_TABLE_HOSTS = new Set<ReportSection['type']>(['keyValueGrid', 'card', 'table']);

/** Body fill the sheet uses for a nested table before anyone picks a color. */
const DEFAULT_TABLE_FILL = '#fffbeb';

const mixWithBlack = (hex: string, colorShare: number): string => {
    const raw = hex.trim().replace('#', '');
    const full = raw.length === 3 ? raw.split('').map((part) => part + part).join('') : raw;
    const parsed = /^[0-9a-fA-F]{6}$/.test(full)
        ? [parseInt(full.slice(0, 2), 16), parseInt(full.slice(2, 4), 16), parseInt(full.slice(4, 6), 16)]
        : [255, 251, 235];
    const channel = (value: number) =>
        Math.max(0, Math.min(255, Math.round(value * colorShare)))
            .toString(16)
            .padStart(2, '0');
    return `#${channel(parsed[0])}${channel(parsed[1])}${channel(parsed[2])}`;
};

const stampNestedTables = (
    section: ReportSection,
    primaryColor: string,
    sampleRoot: unknown
): Record<string, ReportKeyOverride> | undefined => {
    const source = section.keyOverrides ?? {};
    const tableKeys = new Set<string>();
    if (NESTED_TABLE_HOSTS.has(section.type)) {
        const data = valueAtDataPath(sampleRoot, section.dataPath);
        for (const item of collectLayoutSheetItems(data, {
            hiddenKeys: section.hiddenKeys,
            keyOrder: section.keyOrder,
        })) {
            if (item.kind === 'table') tableKeys.add(item.key);
        }
    }

    const keys = new Set<string>([...Object.keys(source), ...tableKeys]);
    if (!keys.size) return section.keyOverrides;

    const next: Record<string, ReportKeyOverride> = {};
    for (const key of keys) {
        const current = source[key] ?? {};
        const override: ReportKeyOverride = { ...current };
        if (tableKeys.has(key)) {
            const fill = override.backgroundColor || DEFAULT_TABLE_FILL;
            const width = Number(override.borderWidth);
            const radius = Number(override.borderRadius);
            override.backgroundColor = fill;
            override.borderWidth = width > 0 ? Math.round(width) : 1;
            override.borderColor = override.borderColor || mixWithBlack(fill, 0.62);
            override.borderRadius = Number.isFinite(radius) && radius >= 0 ? radius : 8;
            override.showTableBadge = override.showTableBadge !== false;
        }
        next[key] = override;
    }
    return next;
};

/**
 * The sheet paints defaults (bold titles, amber nested tables, row lines, label
 * and value type) even when the saved section never stored them. Write those
 * values into the template so the PDF starts from the same look.
 */
export const materializeSectionTypography = (
    section: ReportSection,
    primaryColor: string,
    sampleRoot?: unknown
): ReportSection => {
    const title = resolveTextRole(section, 'title', primaryColor);
    const label = resolveTextRole(section, 'label', primaryColor);
    const value = resolveTextRole(section, 'value', primaryColor);
    const style: NonNullable<ReportSection['style']> = {
        ...(section.style ?? {}),
        titleStyle: roleStyle(title),
        labelStyle: roleStyle(label),
        valueStyle: roleStyle(value),
    };

    if (TITLE_MIRROR_TYPES.has(section.type)) {
        if (!style.fontFamily) style.fontFamily = title.fontFamily;
        if (!style.fontSize) style.fontSize = title.fontSize;
        if (!style.textAlign) style.textAlign = title.textAlign;
        if (!style.color) style.color = title.color;
        if (!style.fontStyle) style.fontStyle = title.fontStyle;
        if (style.textDecoration !== 'underline') style.textDecoration = title.textDecoration;
        if (style.fontWeight !== 'normal' && style.fontWeight !== 'bold') style.fontWeight = title.fontWeight;
        style.labelColor = style.labelColor || label.color;
        style.valueColor = style.valueColor || value.color;
    }

    if (section.type === 'field') {
        style.labelColor = style.labelColor || label.color;
        style.valueColor = style.valueColor || value.color;
        if (!style.fontFamily) style.fontFamily = label.fontFamily;
    }

    if (section.type === 'header' || section.type === 'text') {
        style.fontWeight = title.fontWeight;
        style.fontStyle = title.fontStyle;
        style.textDecoration = title.textDecoration;
        style.fontFamily = title.fontFamily;
        style.fontSize = title.fontSize;
        style.textAlign = title.textAlign;
        style.color = title.color;
    }

    if (section.type === 'divider' && !style.color) style.color = '#E5E7EB';
    if (section.type === 'spacer' && !style.padding) style.padding = '16';
    if (section.type === 'shape' && !style.color && !style.backgroundColor) style.color = primaryColor;
    if ((section.type === 'card' || section.type === 'badge') && !style.variant) style.variant = 'neutral';

    const next: ReportSection = {
        ...section,
        style,
        ...(section.type === 'shape' && !section.shape ? { shape: 'rectangle' as const } : {}),
    };

    if (sampleRoot !== undefined) {
        const keyOverrides = stampNestedTables(section, primaryColor, sampleRoot);
        if (keyOverrides) next.keyOverrides = keyOverrides;
    } else if (section.keyOverrides) {
        const keyOverrides = stampNestedTables(section, primaryColor, undefined);
        if (keyOverrides) next.keyOverrides = keyOverrides;
    }

    if (ROW_LINE_TYPES.has(section.type)) {
        if (next.showRowLines == null) next.showRowLines = true;
        if (!next.rowLineStyle) next.rowLineStyle = 'solid';
        if (!next.rowLineColor) next.rowLineColor = '#d6d3d1';
        if (next.rowLineWidth == null) next.rowLineWidth = 3;
        if (
            (next.rowLineStyle === 'dotted' || next.rowLineStyle === 'dashed') &&
            next.rowLineMark == null
        ) {
            next.rowLineMark = defaultRowLineMark(next.rowLineStyle);
        }
    }

    if (section.type === 'keyValueGrid' && !next.columnsPerRow) next.columnsPerRow = 2;
    if (section.type === 'dataTable' && !next.maxColumns) next.maxColumns = 6;

    return next;
};
