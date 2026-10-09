export const REPORT_FONT_STACKS = [
    { value: 'Inter, system-ui, sans-serif', labelKey: 'smartReport.fontSans' },
    { value: 'Georgia, "Times New Roman", serif', labelKey: 'smartReport.fontSerif' },
    { value: '"Times New Roman", Times, serif', labelKey: 'smartReport.fontTimes' },
    { value: 'Arial, Helvetica, sans-serif', labelKey: 'smartReport.fontArial' },
    { value: 'Verdana, Geneva, sans-serif', labelKey: 'smartReport.fontVerdana' },
    { value: '"Courier New", Courier, monospace', labelKey: 'smartReport.fontMono' },
] as const;

export const REPORT_TEXT_ALIGNS = ['left', 'center', 'right', 'justify'] as const;

export type ReportTextAlign = (typeof REPORT_TEXT_ALIGNS)[number];

export type ReportFontSource = 'google' | 'url' | 'file';

export interface ReportCustomFont {
    family: string;
    source: ReportFontSource;
    /** https stylesheet / font file, or a base64 `data:` URL for uploads. */
    url: string;
}

/** Keep in sync with `report-fonts.service.js` on the backend. */
export const MAX_CUSTOM_FONTS = 6;
export const MAX_FONT_FILE_BYTES = 1_000_000;
export const FONT_FILE_ACCEPT = '.woff2,.woff,.ttf,.otf';

const FAMILY_PATTERN = /^[\p{L}\p{N} _-]{1,60}$/u;
const HTTPS_URL_PATTERN = /^https:\/\/[^\s"'()<>\\]+$/;
const DATA_FONT_PATTERN =
    /^data:(?:font\/[a-z0-9.+-]+|application\/(?:font-woff2?|x-font-[a-z0-9]+|octet-stream|vnd\.ms-fontobject));base64,[A-Za-z0-9+/=]+$/;
const FONT_FILE_PATTERN = /\.(woff2?|ttf|otf)(?:[?#]|$)/i;

export const isValidFontFamily = (family: string): boolean => FAMILY_PATTERN.test(family.trim());

export const isValidFontUrl = (url: string): boolean =>
    HTTPS_URL_PATTERN.test(url) || DATA_FONT_PATTERN.test(url);

export const googleFontUrl = (family: string): string =>
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family.trim()).replace(/%20/g, '+')}:ital,wght@0,400;0,700;1,400;1,700&display=swap`;

/** CSS `font-family` value stored on text roles. */
export const customFontStack = (family: string): string => `"${family}", system-ui, sans-serif`;

/** Family name declared in a Google Fonts `css2?family=` URL, if any. */
export const familyFromFontUrl = (url: string): string => {
    const match = /[?&]family=([^:&]+)/.exec(url);
    if (match) return decodeURIComponent(match[1].replace(/\+/g, ' ')).trim();
    const file = url.split(/[?#]/)[0].split('/').pop() ?? '';
    return familyFromFileName(file);
};

export const familyFromFileName = (name: string): string =>
    name
        .replace(/\.[a-z0-9]+$/i, '')
        .replace(/[-_](regular|bold|italic|light|medium|semibold|black|thin|variable.*|vf)$/i, '')
        .replace(/[^\p{L}\p{N} _-]/gu, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 60);

/** Font file as a `data:` URL with a font MIME type the backend accepts. */
export const readFontFile = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const ext = (file.name.split('.').pop() ?? '').toLowerCase();
            const mime = ext === 'woff2' ? 'font/woff2' : ext === 'woff' ? 'font/woff' : ext === 'otf' ? 'font/otf' : 'font/ttf';
            const base64 = String(reader.result ?? '').split(',')[1] ?? '';
            resolve(`data:${mime};base64,${base64}`);
        };
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });

export const sanitizeCustomFonts = (fonts: unknown): ReportCustomFont[] => {
    if (!Array.isArray(fonts)) return [];
    const seen = new Set<string>();
    const clean: ReportCustomFont[] = [];
    for (const raw of fonts as Partial<ReportCustomFont>[]) {
        const family = typeof raw?.family === 'string' ? raw.family.trim() : '';
        if (!isValidFontFamily(family) || seen.has(family.toLowerCase())) continue;
        const source: ReportFontSource =
            raw.source === 'google' || raw.source === 'file' ? raw.source : 'url';
        const url = source === 'google' ? googleFontUrl(family) : String(raw.url ?? '');
        if (!isValidFontUrl(url)) continue;
        seen.add(family.toLowerCase());
        clean.push({ family, source, url });
        if (clean.length >= MAX_CUSTOM_FONTS) break;
    }
    return clean;
};

const isStylesheetFont = (font: ReportCustomFont): boolean =>
    font.source === 'google' || (font.source === 'url' && !FONT_FILE_PATTERN.test(font.url));

const fontFaceRule = (font: ReportCustomFont): string =>
    `@font-face{font-family:"${font.family}";src:url("${font.url}");font-display:block}`;

/** `<head>` markup that loads the fonts in a standalone print document. */
export const fontHeadMarkup = (fonts: ReportCustomFont[] | null | undefined): string => {
    const clean = sanitizeCustomFonts(fonts);
    if (!clean.length) return '';
    const links = clean
        .filter(isStylesheetFont)
        .map((font) => `<link rel="stylesheet" href="${font.url.replace(/&/g, '&amp;')}" />`)
        .join('');
    const faces = clean.filter((font) => !isStylesheetFont(font)).map(fontFaceRule).join('');
    return links + (faces ? `<style data-report-fonts>${faces}</style>` : '');
};

/** Load the fonts into the editor document so previews render with them. */
export const registerReportFonts = (fonts: ReportCustomFont[] | null | undefined): void => {
    if (typeof document === 'undefined') return;
    for (const font of sanitizeCustomFonts(fonts)) {
        const key = `${font.family}|${font.url.length}|${font.url.slice(-48)}`;
        if (document.head.querySelector(`[data-report-font="${CSS.escape(key)}"]`)) continue;
        let node: HTMLLinkElement | HTMLStyleElement;
        if (isStylesheetFont(font)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = font.url;
            node = link;
        } else {
            node = document.createElement('style');
            node.textContent = fontFaceRule(font);
        }
        node.setAttribute('data-report-font', key);
        document.head.appendChild(node);
    }
};
