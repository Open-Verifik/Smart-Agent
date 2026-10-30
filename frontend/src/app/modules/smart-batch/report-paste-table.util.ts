import { escapeReportHtml } from './report-autolink.util';

const TABLE_MARK = /<\s*table\b/i;

const ALLOWED_TAGS = new Set([
    'table',
    'thead',
    'tbody',
    'tfoot',
    'tr',
    'th',
    'td',
    'colgroup',
    'col',
    'caption',
    'p',
    'br',
    'div',
    'span',
    'b',
    'strong',
    'i',
    'em',
    'u',
    's',
    'sub',
    'sup',
    'ul',
    'ol',
    'li',
    'a',
]);

const ALLOWED_ATTRS: Record<string, Set<string>> = {
    table: new Set(['border', 'cellpadding', 'cellspacing', 'align', 'style']),
    thead: new Set(['style', 'align']),
    tbody: new Set(['style', 'align']),
    tfoot: new Set(['style', 'align']),
    tr: new Set(['style', 'align', 'valign', 'bgcolor']),
    th: new Set(['colspan', 'rowspan', 'align', 'valign', 'bgcolor', 'style', 'scope']),
    td: new Set(['colspan', 'rowspan', 'align', 'valign', 'bgcolor', 'style']),
    col: new Set(['span', 'style']),
    colgroup: new Set(['span', 'style']),
    caption: new Set(['style', 'align']),
    p: new Set(['align', 'style']),
    div: new Set(['align', 'style']),
    span: new Set(['style']),
    a: new Set(['href', 'target', 'rel', 'style']),
    ol: new Set(['style']),
    ul: new Set(['style']),
    li: new Set(['style']),
};

const STYLE_KEYS = new Set([
    'color',
    'background',
    'background-color',
    'text-align',
    'vertical-align',
    'font-weight',
    'font-style',
    'text-decoration',
    'border',
    'border-color',
    'border-width',
    'border-style',
    'border-collapse',
    'padding',
    'padding-left',
    'padding-right',
    'padding-top',
    'padding-bottom',
    'white-space',
    'word-break',
    'overflow-wrap',
]);

/** Inspector chrome owns fill, text and borders on the table itself. */
const TABLE_CHROME_STYLE_KEYS = new Set([
    'color',
    'background',
    'background-color',
    'border',
    'border-color',
    'border-width',
    'border-style',
    'border-collapse',
]);

const TABLE_CHROME_TAGS = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'col', 'colgroup']);

const SAFE_HREF = /^(https?:|mailto:)/i;
const UNSAFE_CSS = /expression|javascript:|url\s*\(|@import|behavior/i;
const SPAN_INT = /^[1-9]\d{0,2}$/;

export const hasPastedTable = (value: string | null | undefined): boolean =>
    TABLE_MARK.test(String(value ?? ''));

export const clipboardHasTable = (html?: string | null, plain?: string | null): boolean =>
    hasPastedTable(html) || Boolean(plainGridToTable(plain || '') || markdownTableToHtml(plain || ''));

/** Sanitized HTML fragment with real tables, or null when the clipboard is ordinary text. */
export const pasteTablesFromClipboard = (html?: string | null, plain?: string | null): string | null => {
    const fromHtml = extractAndSanitizeClipboardHtml(html || '');
    if (fromHtml && hasPastedTable(fromHtml)) return fromHtml;
    return plainGridToTable(plain || '') || markdownTableToHtml(plain || '');
};

export const insertHtmlAtPlainSelection = (
    source: string,
    start: number,
    end: number,
    fragment: string
): string => {
    const from = Math.max(0, Math.min(start, source.length));
    const to = Math.max(from, Math.min(end, source.length));
    const before = source.slice(0, from);
    const after = source.slice(to);
    if (hasPastedTable(source)) return `${before}${fragment}${after}`;
    return `${plainToHtml(before)}${fragment}${plainToHtml(after)}`;
};

export const sanitizePastedHtml = (html: string): string => {
    if (typeof DOMParser === 'undefined') return stripUnsafeTags(html);
    const parsed = new DOMParser().parseFromString(wrapFragment(html), 'text/html');
    stripDanger(parsed);
    const host = document.createElement('div');
    for (const child of Array.from(parsed.body.childNodes)) {
        const clean = sanitizeNode(child, false);
        if (clean) host.appendChild(clean);
    }
    return host.innerHTML.trim();
};

export const extractAndSanitizeClipboardHtml = (html: string): string => {
    if (!html.trim() || typeof DOMParser === 'undefined') return '';
    const parsed = new DOMParser().parseFromString(html, 'text/html');
    stripDanger(parsed);
    const host = document.createElement('div');
    const root = parsed.body || parsed.documentElement;
    for (const child of Array.from(root.childNodes)) {
        const clean = sanitizeNode(child, false);
        if (clean) host.appendChild(clean);
    }
    return host.innerHTML.trim();
};

export const plainGridToTable = (plain: string): string | null => {
    const lines = splitNonEmptyLines(plain);
    if (lines.length < 2) return null;
    const tabbed = lines.filter((line) => line.includes('\t'));
    if (tabbed.length < 2 || tabbed.length < lines.length * 0.5) return null;
    const rows = lines.map((line) => line.split('\t'));
    return rowsToTable(rows, true);
};

export const markdownTableToHtml = (plain: string): string | null => {
    const lines = splitNonEmptyLines(plain);
    if (lines.length < 2 || !lines[0].includes('|')) return null;
    if (!/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(lines[1])) return null;
    const rows = lines
        .filter((_, index) => index !== 1)
        .map((line) =>
            line
                .replace(/^\s*\|/, '')
                .replace(/\|\s*$/, '')
                .split('|')
                .map((cell) => cell.trim())
        );
    if (rows.some((row) => row.length < 2)) return null;
    return rowsToTable(rows, true);
};

const wrapFragment = (html: string): string =>
    /<html[\s>]/i.test(html) ? html : `<!DOCTYPE html><html><body>${html}</body></html>`;

const splitNonEmptyLines = (plain: string): string[] =>
    String(plain ?? '')
        .replace(/\r\n/g, '\n')
        .split('\n')
        .map((line) => line.replace(/\s+$/, ''))
        .filter((line, index, all) => line.length > 0 || (index > 0 && index < all.length - 1));

const rowsToTable = (rows: string[][], header: boolean): string => {
    if (!rows.length) return '';
    const width = Math.max(...rows.map((row) => row.length));
    const pad = (row: string[]) => Array.from({ length: width }, (_, i) => row[i] ?? '');
    const head = header ? pad(rows[0]) : null;
    const body = (head ? rows.slice(1) : rows).map(pad);
    const headHtml = head
        ? `<thead><tr>${head.map((cell) => `<th>${escapeReportHtml(cell)}</th>`).join('')}</tr></thead>`
        : '';
    const bodyHtml = `<tbody>${body
        .map((row) => `<tr>${row.map((cell) => `<td>${escapeReportHtml(cell)}</td>`).join('')}</tr>`)
        .join('')}</tbody>`;
    return `<table class="report-rich-table">${headHtml}${bodyHtml}</table>`;
};

const plainToHtml = (text: string): string => {
    if (!text) return '';
    return escapeReportHtml(text).replace(/\r\n/g, '\n').replace(/\n/g, '<br>');
};

const stripDanger = (doc: Document): void => {
    doc.querySelectorAll('script,style,link,meta,iframe,object,embed,form,input,button,textarea,svg').forEach((node) =>
        node.remove()
    );
};

const sanitizeNode = (node: Node, inTable: boolean): Node | null => {
    if (node.nodeType === Node.TEXT_NODE) return document.createTextNode(node.textContent || '');
    if (node.nodeType !== Node.ELEMENT_NODE) return null;
    const el = node as Element;
    const tag = el.tagName.toLowerCase();
    if (tag === 'script' || tag === 'style' || tag === 'iframe') return null;
    const nestedTable = inTable || tag === 'table';
    if (!ALLOWED_TAGS.has(tag)) {
        const frag = document.createDocumentFragment();
        for (const child of Array.from(el.childNodes)) {
            const clean = sanitizeNode(child, nestedTable);
            if (clean) frag.appendChild(clean);
        }
        return frag.childNodes.length ? frag : null;
    }
    const out = document.createElement(tag);
    copyAttrs(el, out, tag, nestedTable);
    for (const child of Array.from(el.childNodes)) {
        const clean = sanitizeNode(child, nestedTable);
        if (clean) out.appendChild(clean);
    }
    if (tag === 'table') out.classList.add('report-rich-table');
    if (tag === 'a') {
        const href = out.getAttribute('href') || '';
        if (!SAFE_HREF.test(href)) out.removeAttribute('href');
        out.setAttribute('rel', 'noopener noreferrer');
        if (out.getAttribute('target') === '_blank' || out.getAttribute('href')) out.setAttribute('target', '_blank');
    }
    return out;
};

const copyAttrs = (from: Element, to: Element, tag: string, inTable: boolean): void => {
    const allowed = ALLOWED_ATTRS[tag];
    if (!allowed) return;
    const dropPaint = inTable || TABLE_CHROME_TAGS.has(tag);
    for (const attr of Array.from(from.attributes)) {
        const name = attr.name.toLowerCase();
        if (name.startsWith('on') || name === 'srcdoc') continue;
        if (!allowed.has(name)) continue;
        const value = attr.value.trim();
        if (name === 'style') {
            const css = filterCss(value, dropPaint);
            if (css) to.setAttribute('style', css);
            continue;
        }
        if ((name === 'colspan' || name === 'rowspan' || name === 'span') && !SPAN_INT.test(value)) continue;
        if (name === 'href' && !SAFE_HREF.test(value)) continue;
        if (name === 'bgcolor' || name === 'color') continue;
        to.setAttribute(name, value);
    }
};

const filterCss = (raw: string, dropPaint = false): string =>
    raw
        .split(';')
        .map((part) => part.trim())
        .filter(Boolean)
        .map((part) => {
            const idx = part.indexOf(':');
            if (idx <= 0) return '';
            const key = part.slice(0, idx).trim().toLowerCase();
            const value = part.slice(idx + 1).trim();
            if (!STYLE_KEYS.has(key) || UNSAFE_CSS.test(value)) return '';
            if (dropPaint && TABLE_CHROME_STYLE_KEYS.has(key)) return '';
            return `${key}:${value}`;
        })
        .filter(Boolean)
        .join(';');

const stripUnsafeTags = (html: string): string =>
    html
        .replace(/<script\b[\s\S]*?<\/script>/gi, '')
        .replace(/<style\b[\s\S]*?<\/style>/gi, '')
        .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '');

export const REPORT_TABLE_CHROME = {
    borderColor: '#d6d3d1',
    borderWidth: 1,
    headerBackground: '#f5f5f4',
    headerColor: '#1c1917',
    cellBackground: '#ffffff',
    cellColor: '#1c1917',
} as const;

export type ReportTableChromeStyle = {
    tableBorderColor?: string;
    tableBorderWidth?: number;
    tableHeaderBackground?: string;
    tableHeaderColor?: string;
    tableCellBackground?: string;
    tableCellColor?: string;
};

const paint = (value: string | undefined, fallback: string): string => {
    const next = String(value ?? '').trim();
    return /^#([0-9a-f]{3,8})$/i.test(next) ? next : fallback;
};

export const resolveTableChrome = (style?: ReportTableChromeStyle | null) => {
    const width = Number(style?.tableBorderWidth);
    return {
        borderColor: paint(style?.tableBorderColor, REPORT_TABLE_CHROME.borderColor),
        borderWidth: Number.isFinite(width) ? Math.max(0, Math.min(8, Math.round(width))) : REPORT_TABLE_CHROME.borderWidth,
        headerBackground: paint(style?.tableHeaderBackground, REPORT_TABLE_CHROME.headerBackground),
        headerColor: paint(style?.tableHeaderColor, REPORT_TABLE_CHROME.headerColor),
        cellBackground: paint(style?.tableCellBackground, REPORT_TABLE_CHROME.cellBackground),
        cellColor: paint(style?.tableCellColor, REPORT_TABLE_CHROME.cellColor),
    };
};

/** CSS variables inherited by `.report-rich-table` in the sheet and in the PDF. */
export const tableChromeCssVars = (style?: ReportTableChromeStyle | null): Record<string, string> => {
    const chrome = resolveTableChrome(style);
    return {
        '--report-table-border': chrome.borderColor,
        '--report-table-border-width': `${chrome.borderWidth}px`,
        '--report-table-header-bg': chrome.headerBackground,
        '--report-table-header-color': chrome.headerColor,
        '--report-table-cell-bg': chrome.cellBackground,
        '--report-table-cell-color': chrome.cellColor,
    };
};

export const withTableChromeDefaults = <T extends ReportTableChromeStyle>(style?: T | null): T & ReportTableChromeStyle => {
    const chrome = resolveTableChrome(style);
    return {
        ...(style ?? ({} as T)),
        tableBorderColor: style?.tableBorderColor || chrome.borderColor,
        tableBorderWidth: style?.tableBorderWidth ?? chrome.borderWidth,
        tableHeaderBackground: style?.tableHeaderBackground || chrome.headerBackground,
        tableHeaderColor: style?.tableHeaderColor || chrome.headerColor,
        tableCellBackground: style?.tableCellBackground || chrome.cellBackground,
        tableCellColor: style?.tableCellColor || chrome.cellColor,
    };
};
