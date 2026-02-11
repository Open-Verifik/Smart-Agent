import { ReportSection, SmartReportTemplate } from './smart-report.service';

/** Result of validating template data paths against batch row data */
export interface TemplateMatchResult {
    /** Whether all template data paths are present in the batch data */
    matches: boolean;
    /** Data paths that exist and have a value */
    matchedPaths: string[];
    /** Data paths that are missing or have no value */
    missingPaths: { path: string; label?: string }[];
}

/**
 * Resolve a dot-separated path against an object.
 * e.g. "results.1.fullName" -> value at that path
 */
function resolvePath(path: string, data: Record<string, any>): any {
    if (!path || !data) return undefined;
    const parts = path.split('.');
    let current: any = data;
    for (const part of parts) {
        if (current == null || typeof current !== 'object') return undefined;
        current = current[part];
    }
    return current;
}

/**
 * Check if a resolved value counts as "present" for a field (scalar) or table (object).
 */
function hasValue(value: any, forTable: boolean): boolean {
    if (value == null) return false;
    if (forTable) return typeof value === 'object' && !Array.isArray(value);
    return true;
}

/**
 * Extract all data paths from a template (field and table sections).
 */
export function extractTemplateDataPaths(template: SmartReportTemplate): { path: string; label?: string; isTable: boolean }[] {
    const paths: { path: string; label?: string; isTable: boolean }[] = [];

    const addFromSection = (section: ReportSection | undefined) => {
        if (!section?.dataPath) return;
        if (section.type === 'field') {
            paths.push({ path: section.dataPath, label: section.label, isTable: false });
        } else if (section.type === 'table') {
            paths.push({ path: section.dataPath, label: section.label, isTable: true });
        }
    };

    if (template.header?.dataPath) addFromSection(template.header);
    if (template.footer?.dataPath) addFromSection(template.footer);
    for (const s of template.sections ?? []) {
        addFromSection(s);
    }

    return paths;
}

/**
 * Build the preview/shape object from a batch row for path resolution.
 * Batch row: { rowIndex, inputData, results: { [stepSeq]: {...} } }
 * We need: { inputData, results } so paths like "results.1.fullName" resolve.
 */
export function buildRowDataForResolution(row: {
    rowIndex?: number;
    inputData?: Record<string, any>;
    results?: Record<number, any>;
}): Record<string, any> {
    const data: Record<string, any> = {
        inputData: row.inputData ?? {},
        results: row.results ?? {},
    };
    return data;
}

/**
 * Validate a template against batch row data.
 * Returns which paths match and which are missing.
 */
export function validateTemplateAgainstData(
    template: SmartReportTemplate,
    rowData: Record<string, any>
): TemplateMatchResult {
    const paths = extractTemplateDataPaths(template);
    const matchedPaths: string[] = [];
    const missingPaths: { path: string; label?: string }[] = [];

    for (const { path, label, isTable } of paths) {
        const value = resolvePath(path, rowData);
        if (hasValue(value, isTable)) {
            matchedPaths.push(path);
        } else {
            missingPaths.push({ path, label });
        }
    }

    return {
        matches: missingPaths.length === 0,
        matchedPaths,
        missingPaths,
    };
}
