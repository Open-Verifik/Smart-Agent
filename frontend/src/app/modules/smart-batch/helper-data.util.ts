export interface HelperDataPath {
    path: string;
    value: string;
    type: 'leaf' | 'object';
}

/**
 * Flatten a nested object into dot-separated paths with their values.
 * Used for the "Helper Data" panel in the report builder.
 */
export function flattenDataForHelper(
    obj: Record<string, any>,
    prefix = ''
): HelperDataPath[] {
    const paths: HelperDataPath[] = [];

    for (const [key, value] of Object.entries(obj)) {
        const path = prefix ? `${prefix}.${key}` : key;

        if (value != null && typeof value === 'object' && !Array.isArray(value)) {
            paths.push({
                path,
                value: '',
                type: 'object',
            });
            paths.push(...flattenDataForHelper(value, path));
        } else {
            const displayValue =
                value == null
                    ? '—'
                    : typeof value === 'string'
                      ? value
                      : Array.isArray(value)
                        ? JSON.stringify(value)
                        : String(value);
            paths.push({
                path,
                value: displayValue.length > 60 ? displayValue.slice(0, 60) + '…' : displayValue,
                type: 'leaf',
            });
        }
    }

    return paths;
}

/**
 * Build helper data paths from preview data (inputData + results).
 */
export function buildHelperDataPaths(previewData: Record<string, any>): HelperDataPath[] {
    const paths: HelperDataPath[] = [];

    if (previewData.inputData && Object.keys(previewData.inputData).length > 0) {
        paths.push({ path: 'inputData', value: '', type: 'object' });
        paths.push(...flattenDataForHelper(previewData.inputData, 'inputData'));
    }

    if (previewData.results && Object.keys(previewData.results).length > 0) {
        paths.push({ path: 'results', value: '', type: 'object' });
        paths.push(...flattenDataForHelper(previewData.results, 'results'));
    }

    return paths;
}

