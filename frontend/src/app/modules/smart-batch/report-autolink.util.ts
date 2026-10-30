/** Default hyperlink color in the sheet and in the printed PDF. */
export const REPORT_LINK_COLOR = '#2563eb';

const HTML_ESCAPE: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};

const FILE_TLDS = new Set([
    'txt',
    'png',
    'jpg',
    'jpeg',
    'gif',
    'webp',
    'svg',
    'pdf',
    'csv',
    'json',
    'xml',
    'zip',
    'mp4',
    'html',
    'htm',
    'js',
    'css',
    'ts',
    'map',
]);

const EMAIL_RE =
    /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+/;
const URL_RE =
    /https?:\/\/[^\s<>"'()]+|www\.[^\s<>"'()]+|(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(?:\/[^\s<>"'()]*)?/;
const TOKEN_RE = new RegExp(`(?:${EMAIL_RE.source})|(?:${URL_RE.source})`, 'gi');

export const escapeReportHtml = (value: string): string =>
    String(value ?? '').replace(/[&<>"']/g, (character) => HTML_ESCAPE[character] ?? character);

const splitTrailingPunct = (raw: string): { core: string; tail: string } => {
    const match = raw.match(/^(.*?)([.,;:!?]+)$/);
    if (!match || !match[1]) return { core: raw, tail: '' };
    return { core: match[1], tail: match[2] };
};

export const hrefForAutolink = (raw: string): string | null => {
    const value = raw.trim();
    if (!value) return null;
    const lower = value.toLowerCase();
    if (lower.startsWith('javascript:') || lower.startsWith('data:')) return null;
    if (value.includes('@') && !/^[a-z][a-z0-9+.-]*:\/\//i.test(value)) {
        return `mailto:${value}`;
    }
    if (/^https?:\/\//i.test(value)) return value;
    if (/^www\./i.test(value)) return `https://${value}`;
    const host = value.split(/[/?#]/)[0] ?? value;
    const tld = host.split('.').pop()?.toLowerCase() ?? '';
    if (FILE_TLDS.has(tld)) return null;
    if (/^\d+(?:\.\d+)+$/.test(host)) return null;
    return `https://${value}`;
};

const linkPaint = (color?: string): string => {
    const value = String(color ?? '').trim();
    return /^#[0-9a-f]{3,8}$/i.test(value) ? value : REPORT_LINK_COLOR;
};

const wrapLink = (label: string, href: string, color?: string): string =>
    `<a class="report-autolink" href="${escapeReportHtml(href)}" target="_blank" rel="noopener noreferrer" style="color:${linkPaint(color)}!important;text-decoration:none!important;text-decoration-line:none!important;text-decoration-color:transparent!important">${escapeReportHtml(label)}</a>`;

/** Escape text and wrap emails / web addresses as hyperlinks. */
export const autolinkHtml = (text: unknown, linkColor?: string): string => {
    const source = String(text ?? '');
    if (!source) return '';
    TOKEN_RE.lastIndex = 0;
    let out = '';
    let last = 0;
    let match: RegExpExecArray | null;
    while ((match = TOKEN_RE.exec(source))) {
        const raw = match[0];
        const start = match.index;
        const { core, tail } = splitTrailingPunct(raw);
        out += escapeReportHtml(source.slice(last, start));
        const href = hrefForAutolink(core);
        out += href ? `${wrapLink(core, href, linkColor)}${escapeReportHtml(tail)}` : escapeReportHtml(raw);
        last = start + raw.length;
    }
    out += escapeReportHtml(source.slice(last));
    // Print/PDF collapses `\n` inside absolutely placed blocks; `<br>` keeps the author's Enter.
    return out.replace(/\r\n|\n|\r|\u2028|\u2029/g, '<br>');
};
