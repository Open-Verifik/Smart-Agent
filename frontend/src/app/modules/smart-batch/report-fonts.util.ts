import { signal } from '@angular/core';

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

/** CSS weights a face can declare. `normal` is 400 and `bold` is 700. */
export const REPORT_FONT_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

export type ReportFontWeightStep = (typeof REPORT_FONT_WEIGHTS)[number];

export type ReportFontWeight = 'normal' | 'bold' | ReportFontWeightStep;

export type ReportFontSource = 'google' | 'url' | 'file';

export interface ReportCustomFont {
    family: string;
    source: ReportFontSource;
    /** https stylesheet / font file, or a base64 `data:` URL for uploads. */
    url: string;
    /** Weights this family actually has. Omitted until a Google or stylesheet font is checked. */
    weights?: ReportFontWeightStep[];
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

/** Roman faces for the weights a family really has. Missing weights make Google reject the whole sheet. */
export const googleFontWeightUrl = (family: string, weights: readonly number[]): string => {
    const encoded = encodeURIComponent(family.trim()).replace(/%20/g, '+');
    const list = uniqueFontWeights(weights);
    return `https://fonts.googleapis.com/css2?family=${encoded}:wght@${list.join(';')}&display=swap`;
};

const BUILTIN_FONT_WEIGHTS: Record<string, readonly ReportFontWeightStep[]> = {
    // Segoe UI / system-ui: light, regular, semibold, bold. Named web fonts only ship regular and bold.
    'Inter, system-ui, sans-serif': [300, 400, 600, 700],
    'Georgia, "Times New Roman", serif': [400, 700],
    '"Times New Roman", Times, serif': [400, 700],
    'Arial, Helvetica, sans-serif': [400, 700],
    'Verdana, Geneva, sans-serif': [400, 700],
    '"Courier New", Courier, monospace': [400, 700],
};

/** Weights learned for a family, so the menu and the print stylesheet can use them. */
export const fontWeightCatalog = signal<Record<string, ReportFontWeightStep[]>>({});

export const isFontWeightStep = (value: unknown): value is ReportFontWeightStep =>
    typeof value === 'number' && (REPORT_FONT_WEIGHTS as readonly number[]).includes(value);

export const isReportFontWeight = (value: unknown): value is ReportFontWeight =>
    value === 'normal' || value === 'bold' || isFontWeightStep(value);

export const fontWeightStep = (weight: unknown): ReportFontWeightStep => {
    if (weight === 'bold') return 700;
    if (weight === 'normal') return 400;
    const n = Number(weight);
    return isFontWeightStep(n) ? n : 400;
};

export const storedFontWeight = (step: number): ReportFontWeight => {
    if (step === 400) return 'normal';
    if (step === 700) return 'bold';
    return isFontWeightStep(step) ? step : 400;
};

export const nearestFontWeight = (weights: readonly number[], target: number): ReportFontWeightStep => {
    const list = uniqueFontWeights(weights);
    return list.reduce((best, step) => (Math.abs(step - target) < Math.abs(best - target) ? step : best));
};

export const regularFontWeight = (weights: readonly number[]): ReportFontWeightStep => {
    const list = uniqueFontWeights(weights);
    if (list.includes(400)) return 400;
    const light = list.filter((step) => step < 600);
    return light.length ? light[light.length - 1] : list[0];
};

export const boldFontWeight = (weights: readonly number[]): ReportFontWeightStep => {
    const list = uniqueFontWeights(weights);
    if (list.includes(700)) return 700;
    const heavy = list.filter((step) => step >= 600);
    return heavy.length ? heavy[heavy.length - 1] : list[list.length - 1];
};

export const familyFromStack = (stack: string): string => {
    const quoted = /^"([^"]+)"/.exec(stack.trim());
    if (quoted) return quoted[1];
    return stack.split(',')[0]?.replace(/["']/g, '').trim() || stack;
};

/** Weights the selected family can draw, not a generic bold switch. */
export const availableFontWeights = (stack: string, fonts: ReportCustomFont[] = []): ReportFontWeightStep[] => {
    const builtin = BUILTIN_FONT_WEIGHTS[stack];
    if (builtin) return [...builtin];
    const family = familyFromStack(stack).toLowerCase();
    const custom = fonts.find((font) => font.family.toLowerCase() === family);
    if (custom?.weights?.length) return uniqueFontWeights(custom.weights);
    const cached = fontWeightCatalog()[family];
    if (cached?.length) return [...cached];
    return [400, 700];
};

export const weightFromFontName = (name: string): ReportFontWeightStep => {
    const base = name.replace(/\.[a-z0-9]+$/i, '');
    const rules: [RegExp, ReportFontWeightStep][] = [
        [/extra[-_ ]?light|ultra[-_ ]?light/i, 200],
        [/semi[-_ ]?bold|demi[-_ ]?bold/i, 600],
        [/extra[-_ ]?bold|ultra[-_ ]?bold/i, 800],
        [/thin|hairline/i, 100],
        [/light/i, 300],
        [/medium/i, 500],
        [/black|heavy/i, 900],
        [/bold/i, 700],
        [/regular|normal|book|roman/i, 400],
    ];
    for (const [pattern, weight] of rules) {
        if (pattern.test(base)) return weight;
    }
    return 400;
};

export const fontNeedsWeightProbe = (font: ReportCustomFont): boolean =>
    !font.weights?.length && (font.source === 'google' || (font.source === 'url' && !FONT_FILE_PATTERN.test(font.url)));

export const discoverGoogleFontWeights = async (family: string): Promise<ReportFontWeightStep[]> => {
    const found: ReportFontWeightStep[] = [];
    await Promise.all(
        REPORT_FONT_WEIGHTS.map(async (weight) => {
            try {
                const response = await fetch(googleFontWeightUrl(family, [weight]));
                if (response.ok) found.push(weight);
            } catch {
                /* A missing weight or a blocked request just skips that step. */
            }
        })
    );
    found.sort((left, right) => left - right);
    return found.length ? found : [400, 700];
};

export const discoverStylesheetWeights = async (url: string): Promise<ReportFontWeightStep[]> => {
    try {
        const response = await fetch(url);
        if (!response.ok) return [400, 700];
        const css = await response.text();
        const found = new Set<ReportFontWeightStep>();
        for (const match of css.matchAll(/font-weight:\s*(\d+)(?:\s+(\d+))?/g)) {
            const start = Number(match[1]);
            const end = match[2] ? Number(match[2]) : start;
            for (const step of REPORT_FONT_WEIGHTS) {
                if (step >= Math.min(start, end) && step <= Math.max(start, end)) found.add(step);
            }
        }
        const list = [...found].sort((left, right) => left - right);
        return list.length ? list : [400, 700];
    } catch {
        return [400, 700];
    }
};

const uniqueFontWeights = (weights: readonly number[]): ReportFontWeightStep[] => {
    const found = weights.filter(isFontWeightStep);
    const list = found.length ? found : [400, 700];
    return [...new Set(list)].sort((left, right) => left - right) as ReportFontWeightStep[];
};

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
        const weights = uniqueFontWeights(
            Array.isArray(raw.weights) ? raw.weights.map((step) => Number(step)) : []
        );
        const declared = Array.isArray(raw.weights) && weights.length ? weights : undefined;
        clean.push({ family, source, url, ...(declared ? { weights: declared } : {}) });
        if (clean.length >= MAX_CUSTOM_FONTS) break;
    }
    return clean;
};

const isStylesheetFont = (font: ReportCustomFont): boolean =>
    font.source === 'google' || (font.source === 'url' && !FONT_FILE_PATTERN.test(font.url));

const fontFaceRule = (font: ReportCustomFont): string => {
    const weight = font.weights?.[0] ?? 400;
    return `@font-face{font-family:"${font.family}";src:url("${font.url}");font-weight:${weight};font-style:normal;font-display:block}`;
};

const stylesheetHrefs = (font: ReportCustomFont, catalog: Record<string, ReportFontWeightStep[]>): string[] => {
    const hrefs = [font.url];
    if (font.source !== 'google') return hrefs;
    const weights = font.weights?.length ? font.weights : catalog[font.family.toLowerCase()];
    if (weights?.some((step) => step !== 400 && step !== 700)) hrefs.push(googleFontWeightUrl(font.family, weights));
    return hrefs;
};

/** `<head>` markup that loads the fonts in a standalone print document. */
export const fontHeadMarkup = (fonts: ReportCustomFont[] | null | undefined): string => {
    const clean = sanitizeCustomFonts(fonts);
    if (!clean.length) return '';
    const catalog = fontWeightCatalog();
    const links = clean
        .filter(isStylesheetFont)
        .flatMap((font) =>
            stylesheetHrefs(font, catalog).map(
                (href) => `<link rel="stylesheet" href="${href.replace(/&/g, '&amp;')}" />`
            )
        )
        .join('');
    const faces = clean.filter((font) => !isStylesheetFont(font)).map(fontFaceRule).join('');
    return links + (faces ? `<style data-report-fonts>${faces}</style>` : '');
};

/** Load the fonts into the editor document so previews render with them. */
export const registerReportFonts = (fonts: ReportCustomFont[] | null | undefined): void => {
    if (typeof document === 'undefined') return;
    const catalog = fontWeightCatalog();
    for (const font of sanitizeCustomFonts(fonts)) {
        if (isStylesheetFont(font)) {
            for (const href of stylesheetHrefs(font, catalog)) {
                const key = `${font.family}|${href.length}|${href.slice(-48)}`;
                if (document.head.querySelector(`[data-report-font="${CSS.escape(key)}"]`)) continue;
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                link.setAttribute('data-report-font', key);
                document.head.appendChild(link);
            }
            continue;
        }
        const key = `${font.family}|${font.url.length}|${font.url.slice(-48)}|${font.weights?.[0] ?? 400}`;
        if (document.head.querySelector(`[data-report-font="${CSS.escape(key)}"]`)) continue;
        const node = document.createElement('style');
        node.textContent = fontFaceRule(font);
        node.setAttribute('data-report-font', key);
        document.head.appendChild(node);
    }
};
