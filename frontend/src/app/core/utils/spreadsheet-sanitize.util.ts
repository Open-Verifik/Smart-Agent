/**
 * Trims structurally empty rows/columns from tabular upload data (CSV, Excel, or row objects)
 * so validation can focus on real content. Business rules (e.g. required fields) are unchanged.
 */
export interface SpreadsheetSanitizeOptions {
    treatPlaceholdersAsEmpty?: boolean;
}

export interface SanitizedMatrix<T = unknown> {
    rows: T[][];
}

export interface SanitizedPapaRows<T extends Record<string, unknown> = Record<string, unknown>> {
    fieldOrder: string[];
    rows: T[];
}

const EMPTY_PLACEHOLDERS = new Set(['-', 'n/a', 'na']);

/** True when a cell is considered empty for trimming (whitespace, optional N/A, etc.). */
export const cellIsEmptyForTrim = (
    value: unknown,
    options: SpreadsheetSanitizeOptions = {}
): boolean => {
    if (value === null || value === undefined) return true;

    const normalizedValue = String(value).trim();

    if (!normalizedValue) return true;

    if (!options.treatPlaceholdersAsEmpty) return false;

    return EMPTY_PLACEHOLDERS.has(normalizedValue.toLowerCase());
};

/** 2D matrix: remove empty rows, then trim all-empty lead/trail columns. */
export const sanitizeMatrix = <T = unknown>(
    rows: T[][],
    options: SpreadsheetSanitizeOptions = {}
): SanitizedMatrix<T> => {
    const nonEmptyRows = rows.filter((row) => !isMatrixRowEmpty(row, options));

    if (!nonEmptyRows.length) {
        return { rows: [] };
    }

    const columnRange = getMatrixColumnRange(nonEmptyRows, options);

    if (!columnRange) {
        return { rows: [] };
    }

    return {
        rows: nonEmptyRows.map((row) =>
            row.slice(columnRange.firstColumnIndex, columnRange.lastColumnIndex + 1)
        ),
    };
};

/** Object rows: uses ordered field list (e.g. CSV headers) to remove empty rows and empty edge columns. */
export const sanitizePapaObjectRows = <T extends Record<string, unknown>>(
    rows: T[],
    fields?: string[],
    options: SpreadsheetSanitizeOptions = {}
): SanitizedPapaRows<T> => {
    const fieldOrder = getFieldOrder(rows, fields);
    const nonEmptyRows = rows.filter((row) => !isObjectRowEmpty(row, fieldOrder, options));

    if (!nonEmptyRows.length) {
        return { fieldOrder: [], rows: [] };
    }

    const columnRange = getObjectColumnRange(nonEmptyRows, fieldOrder, options);

    if (!columnRange) {
        return { fieldOrder: [], rows: [] };
    }

    const trimmedFieldOrder = fieldOrder.slice(
        columnRange.firstColumnIndex,
        columnRange.lastColumnIndex + 1
    );

    return {
        fieldOrder: trimmedFieldOrder,
        rows: nonEmptyRows.map((row) => copyFields(row, trimmedFieldOrder)),
    };
};

const copyFields = <T extends Record<string, unknown>>(row: T, fields: string[]): T => {
    const copiedRow: Record<string, unknown> = {};

    fields.forEach((field) => {
        copiedRow[field] = row[field];
    });

    return copiedRow as T;
};

const getFieldOrder = <T extends Record<string, unknown>>(
    rows: T[],
    fields?: string[]
): string[] => {
    if (fields?.length) return fields;

    const firstRow = rows.find((row) => row && typeof row === 'object');

    return firstRow ? Object.keys(firstRow).filter((key) => key !== '__parsed_extra') : [];
};

const getMatrixColumnRange = <T>(
    rows: T[][],
    options: SpreadsheetSanitizeOptions
): { firstColumnIndex: number; lastColumnIndex: number } | null => {
    const maxColumnLength = rows.reduce((maxLength, row) => Math.max(maxLength, row.length), 0);
    let firstColumnIndex = -1;
    let lastColumnIndex = -1;

    for (let columnIndex = 0; columnIndex < maxColumnLength; columnIndex++) {
        const hasValue = rows.some((row) => !cellIsEmptyForTrim(row[columnIndex], options));

        if (!hasValue) continue;

        if (firstColumnIndex === -1) firstColumnIndex = columnIndex;

        lastColumnIndex = columnIndex;
    }

    if (firstColumnIndex === -1) return null;

    return { firstColumnIndex, lastColumnIndex };
};

const getObjectColumnRange = <T extends Record<string, unknown>>(
    rows: T[],
    fields: string[],
    options: SpreadsheetSanitizeOptions
): { firstColumnIndex: number; lastColumnIndex: number } | null => {
    let firstColumnIndex = -1;
    let lastColumnIndex = -1;

    fields.forEach((field, columnIndex) => {
        const hasValue = rows.some((row) => !cellIsEmptyForTrim(row[field], options));

        if (!hasValue) return;

        if (firstColumnIndex === -1) firstColumnIndex = columnIndex;

        lastColumnIndex = columnIndex;
    });

    if (firstColumnIndex === -1) return null;

    return { firstColumnIndex, lastColumnIndex };
};

const isMatrixRowEmpty = <T>(row: T[], options: SpreadsheetSanitizeOptions): boolean =>
    row.every((cell) => cellIsEmptyForTrim(cell, options));

const isObjectRowEmpty = <T extends Record<string, unknown>>(
    row: T,
    fields: string[],
    options: SpreadsheetSanitizeOptions = {}
): boolean => {
    if (!fields.length)
        return !Object.values(row).some((value) => !cellIsEmptyForTrim(value, options));

    return fields.every((field) => cellIsEmptyForTrim(row[field], options));
};
