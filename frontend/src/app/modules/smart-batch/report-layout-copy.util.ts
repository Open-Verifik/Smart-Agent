import { remapLayoutOverrideKey } from './report-param-entries.util';
import type { ReportKeyOverride, ReportSection } from './smart-report.service';

const cloneValue = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

const BOUND_STATIC_TYPES = new Set(['field', 'badge']);

/** Drop leftover typed-over values so a copy keeps reading the query. */
export const stripFixedOverrideValue = (override: ReportKeyOverride): ReportKeyOverride => {
    const { value: _fixed, ...rest } = override;
    return rest;
};

export const stripFixedLayoutValues = (section: ReportSection): ReportSection => {
    const next: ReportSection = { ...section };
    if (next.keyOverrides) {
        const keyOverrides: Record<string, ReportKeyOverride> = {};
        for (const [key, override] of Object.entries(next.keyOverrides)) {
            if (!override) continue;
            const rest = stripFixedOverrideValue(override);
            if (Object.keys(rest).length) keyOverrides[key] = rest;
        }
        next.keyOverrides = Object.keys(keyOverrides).length ? keyOverrides : undefined;
    }
    if (next.dataPath && BOUND_STATIC_TYPES.has(next.type)) {
        delete next.staticContent;
    }
    return next;
};

/** Deep clone of a block: same bindings and chrome, new identity, no snapshot text. */
export const cloneLayoutSectionDynamic = (source: ReportSection): ReportSection =>
    stripFixedLayoutValues(cloneValue(source));

export const remappedItemOverrides = (
    overrides: Record<string, ReportKeyOverride> | undefined,
    key: string
): Record<string, ReportKeyOverride> | undefined => {
    if (!overrides) return undefined;
    const next: Record<string, ReportKeyOverride> = {};
    for (const [stored, override] of Object.entries(overrides)) {
        if (!override || stored === key) continue;
        const destKey = remapLayoutOverrideKey(stored, key, '');
        if (destKey === stored || !destKey) continue;
        const rest = stripFixedOverrideValue(override);
        if (Object.keys(rest).length) next[destKey.replace(/^\./, '')] = rest;
    }
    return Object.keys(next).length ? next : undefined;
};

export const itemHasNestedLayoutKeys = (
    overrides: Record<string, ReportKeyOverride> | undefined,
    key: string
): boolean =>
    Object.keys(overrides ?? {}).some((stored) => stored.startsWith(`${key}.`) || stored.startsWith(`${key}#`));

/** Standalone field / table cloned from a cell: bound to the same path, same item chrome. */
export const layoutItemSectionFromBlock = (
    source: ReportSection,
    key: string,
    options: {
        id: string;
        dataPath: string;
        isTable: boolean;
        label: string;
        zIndex: number;
    }
): ReportSection => {
    const cloned = cloneLayoutSectionDynamic(source);
    const override = cloned.keyOverrides?.[key];
    const nestedOverrides = remappedItemOverrides(cloned.keyOverrides, key);
    const section: ReportSection = {
        id: options.id,
        type: options.isTable ? 'dataTable' : 'field',
        order: 0,
        label: options.label,
        dataPath: options.dataPath,
        pairLayout: cloned.pairLayout,
        showWhenEmpty: cloned.showWhenEmpty,
        condition: cloned.condition,
        valueRules: override?.rules ?? cloned.valueRules,
        showRowLines: override?.showRowLine ?? cloned.showRowLines,
        rowLineStyle: override?.rowLineStyle ?? cloned.rowLineStyle,
        rowLineColor: override?.rowLineColor ?? cloned.rowLineColor,
        rowLineWidth: override?.rowLineWidth ?? cloned.rowLineWidth,
        rowLineMark: override?.rowLineMark ?? cloned.rowLineMark,
        style: {
            ...(cloned.style ?? {}),
            zIndex: options.zIndex,
            backgroundColor: override?.backgroundColor ?? cloned.style?.backgroundColor,
            borderWidth: override?.borderWidth ?? cloned.style?.borderWidth,
            borderColor: override?.borderColor ?? cloned.style?.borderColor,
            borderRadius: override?.borderRadius ?? cloned.style?.borderRadius,
            labelStyle: {
                ...(cloned.style?.labelStyle ?? {}),
                ...(override?.labelStyle ?? {}),
            },
            valueStyle: {
                ...(cloned.style?.valueStyle ?? {}),
                ...(override?.valueStyle ?? {}),
            },
        },
    };
    if (options.isTable) {
        section.maxRows = cloned.maxRows ?? 200;
        if (cloned.maxColumns != null) section.maxColumns = cloned.maxColumns;
        if (cloned.columns) section.columns = cloned.columns;
    }
    if (nestedOverrides) section.keyOverrides = nestedOverrides;
    return section;
};
