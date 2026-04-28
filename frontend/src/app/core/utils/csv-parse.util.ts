/**
 * Quote-aware CSV line splitting and delimiter detection for batch uploads.
 */

const CSV_DELIMITER_CANDIDATES = [',', ';', '\t'] as const;
export type CsvDelimiterChar = (typeof CSV_DELIMITER_CANDIDATES)[number];

/** Strip UTF-8 BOM if present */
export const stripBom = (text: string): string =>
    text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;

/**
 * Split one CSV line on delimiter, respecting double-quote RFC-style escaping.
 */
export const parseCSVLine = (line: string, delimiter: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === delimiter && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());

    return result;
};

const delimiterPreferenceOrder = (d: CsvDelimiterChar): number =>
    d === ',' ? 0 : d === ';' ? 1 : 2;

/**
 * Score how well a delimiter fits the file: prefer many matching row widths, then wider headers.
 * Single-column parses are deprioritized so comma does not beat semicolon on EU CSVs.
 */
export const scoreCsvDelimiter = (lines: string[], delimiter: CsvDelimiterChar): number => {
    if (!lines.length) return -1;

    const header = parseCSVLine(lines[0], delimiter);
    if (!header.some((cell) => cell.trim())) return -1;

    const headerLen = header.length;
    let matches = 0;

    for (let i = 1; i < lines.length; i++) {
        if (parseCSVLine(lines[i], delimiter).length === headerLen) {
            matches++;
        }
    }

    if (headerLen === 1) {
        return matches;
    }

    return matches * 10_000 + headerLen;
};

export interface DetectedCsvDelimiter {
    delimiter: CsvDelimiterChar;
    headerColumns: number;
}

/**
 * Pick the best delimiter from the first lines of a CSV (header + data).
 */
export const detectBestCsvDelimiter = (lines: string[]): DetectedCsvDelimiter => {
    let best: DetectedCsvDelimiter = {
        delimiter: ',',
        headerColumns: parseCSVLine(lines[0], ',').length,
    };
    let bestScore = -1;

    for (const d of CSV_DELIMITER_CANDIDATES) {
        const score = scoreCsvDelimiter(lines, d);
        if (score > bestScore) {
            bestScore = score;
            best = {
                delimiter: d,
                headerColumns: parseCSVLine(lines[0], d).length,
            };
        } else if (score === bestScore && score >= 0) {
            const currentRank = delimiterPreferenceOrder(best.delimiter);
            const candidateRank = delimiterPreferenceOrder(d);
            if (candidateRank < currentRank) {
                best = {
                    delimiter: d,
                    headerColumns: parseCSVLine(lines[0], d).length,
                };
            }
        }
    }

    return best;
};

export type DelimiterMismatchKind = 'semicolon' | 'tab';

/**
 * If parsing yielded a single column but another delimiter would split the header into more columns,
 * suggest that the file may use a different separator (rare after detection; backup UX).
 */
export const getDelimiterMismatchHintKind = (
    headerLine: string,
    parsedColumnCount: number
): DelimiterMismatchKind | null => {
    if (parsedColumnCount !== 1) return null;

    const semiCount = parseCSVLine(headerLine, ';').length;
    const tabCount = parseCSVLine(headerLine, '\t').length;

    if (semiCount >= 2) return 'semicolon';
    if (tabCount >= 2) return 'tab';

    return null;
};
