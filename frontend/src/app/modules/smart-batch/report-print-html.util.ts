/** Join per-record print documents into one Puppeteer HTML file. */
export const mergePrintHtmlDocuments = (documents: string[]): string | undefined => {
    const bodies: string[] = [];
    let pageWidthMm = 210;
    let pageHeightMm = 297;
    for (const document of documents) {
        if (!document.includes('<html')) continue;
        const sizeMatch = document.match(/@page\s*\{\s*size:\s*([\d.]+)mm\s+([\d.]+)mm/i);
        if (sizeMatch) {
            pageWidthMm = Number(sizeMatch[1]) || pageWidthMm;
            pageHeightMm = Number(sizeMatch[2]) || pageHeightMm;
        }
        const bodyMatch = document.match(/<body>([\s\S]*?)<\/body>/i);
        if (bodyMatch?.[1]) bodies.push(bodyMatch[1]);
    }
    if (!bodies.length) return undefined;
    const joined = bodies.join('');
    const sheetCount = (joined.match(/class="print-sheet"/g) || joined.match(/print-sheet/g) || [])
        .length;
    const pages = Math.max(1, sheetCount);
    const totalHeightMm = pages * pageHeightMm;
    const style = `@page{size:${pageWidthMm}mm ${pageHeightMm}mm;margin:0}
html,body{margin:0;padding:0;width:${pageWidthMm}mm;height:${totalHeightMm}mm;overflow:hidden;background:#fff}
.print-sheet{width:${pageWidthMm}mm;height:${pageHeightMm}mm;max-height:${pageHeightMm}mm;overflow:hidden;position:relative;box-sizing:border-box;break-after:avoid;page-break-after:avoid;break-inside:avoid;page-break-inside:avoid}
.print-sheet [data-report-page-inner]{position:absolute;inset:0;width:100%;height:100%;overflow:hidden;box-sizing:border-box}
.print-sheet [data-report-footer]{position:absolute;left:0;right:0;bottom:0;width:100%;top:auto}
.print-sheet [data-report-top-chrome]{position:absolute;left:0;right:0;top:0;width:100%;bottom:auto}
.print-sheet + .print-sheet{break-before:page;page-break-before:always}
*{-webkit-print-color-adjust:exact;print-color-adjust:exact}`;
    return `<!DOCTYPE html><html data-print-pages="${pages}"><head><meta charset="utf-8"/><style>${style}</style></head><body>${joined}</body></html>`;
};

const collectPrintTokens = (value: unknown, into: string[] = [], depth = 0): string[] => {
    if (depth > 6 || value == null) return into;
    if (typeof value === 'string' || typeof value === 'number') {
        const token = String(value).trim();
        if (token.length >= 4 && token.length <= 80) into.push(token);
        return into;
    }
    if (Array.isArray(value)) {
        value.slice(0, 24).forEach((item) => collectPrintTokens(item, into, depth + 1));
        return into;
    }
    if (typeof value === 'object') {
        Object.values(value as Record<string, unknown>)
            .slice(0, 48)
            .forEach((item) => collectPrintTokens(item, into, depth + 1));
    }
    return into;
};

export const uniquePrintMarkers = (
    row: Record<string, unknown>,
    others: Record<string, unknown>[]
): { mustHave: string[]; mustNot: string[] } => {
    const tokensOf = (item: Record<string, unknown>) =>
        collectPrintTokens(item['inputData']).concat(collectPrintTokens(item['results']));
    const mine = tokensOf(row);
    const mineSet = new Set(mine);
    const otherTokens = others.flatMap(tokensOf);
    const otherSet = new Set(otherTokens);
    return {
        mustHave: [...new Set(mine.filter((token) => !otherSet.has(token)))].slice(0, 8),
        mustNot: [...new Set(otherTokens.filter((token) => !mineSet.has(token)))].slice(0, 16),
    };
};

export const htmlMatchesPrintMarkers = (
    html: string,
    markers: { mustHave: string[]; mustNot: string[] },
    rowIndex?: number
): boolean => {
    if (rowIndex != null && Number.isFinite(rowIndex)) {
        return html.includes(`data-report-row="${rowIndex}"`);
    }
    if (markers.mustHave.length && !markers.mustHave.some((token) => html.includes(token))) {
        return false;
    }
    if (markers.mustNot.some((token) => html.includes(token))) {
        return false;
    }
    return true;
};
