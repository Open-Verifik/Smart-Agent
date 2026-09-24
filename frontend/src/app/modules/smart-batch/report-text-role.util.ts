import { ReportSection, ReportTextRole, ReportTextRoleStyle } from './smart-report.service';
import { REPORT_FONT_STACKS, ReportTextAlign } from './report-fonts.util';

export type ResolvedTextRoleStyle = {
    fontFamily: string;
    fontSize: number;
    fontWeight: 'normal' | 'bold';
    fontStyle: 'normal' | 'italic';
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
        textAlign:
            align === 'left' || align === 'center' || align === 'right' || align === 'justify'
                ? align
                : defaultAlign,
        color: nested?.color || fallbackColor || defaultColor,
    };
};
