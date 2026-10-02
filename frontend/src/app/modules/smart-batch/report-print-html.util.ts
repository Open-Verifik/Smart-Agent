/** Join per-record print documents into one Puppeteer HTML file. */
export const mergePrintHtmlDocuments = (documents: string[]): string | undefined => {
    const bodies: string[] = [];
    let style = '';
    for (const document of documents) {
        if (!document.includes('<html')) continue;
        const styleMatch = document.match(/<style>([\s\S]*?)<\/style>/i);
        if (styleMatch?.[1] && !style) style = styleMatch[1];
        const bodyMatch = document.match(/<body>([\s\S]*?)<\/body>/i);
        if (bodyMatch?.[1]) bodies.push(bodyMatch[1]);
    }
    if (!bodies.length) return undefined;
    return `<!DOCTYPE html><html><head><meta charset="utf-8"/><style>${style}</style></head><body>${bodies.join('')}</body></html>`;
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
    if (rowIndex != null && Number.isFinite(rowIndex) && !html.includes(`data-report-row="${rowIndex}"`)) {
        return false;
    }
    if (markers.mustHave.length && !markers.mustHave.some((token) => html.includes(token))) {
        return false;
    }
    if (markers.mustNot.some((token) => html.includes(token))) {
        return false;
    }
    return true;
};
