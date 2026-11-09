import type { ReportThemeId, ReportThemeTokens, ScoreSettings } from './report-theme.model';

/**
 * API contract — verifik-backend PR #760
 * ---------------------------------------
 * Source of truth: https://github.com/Open-Verifik/verifik-backend/pull/760
 * Branch `cursor/report-theme-blocks-75f3`. Names live only in this file.
 *
 * Theme id on the template and on preview/generate:
 *   reportTheme: "premium_dark" | "smart_enroll_v2" | "editorial" | "dashboard"
 *
 * Score display. The canonical value stays 0–1. The wire field is `scoreScale`:
 *   "percent" (default) — show score × 100 with a % sign, e.g. 98%
 *   "unit"              — show the 0–1 value, e.g. 0.98
 * Omitted `scoreScale` means percent on the backend. The builder still sends it
 * so a saved "0–1" choice is not lost.
 *
 * Also sent when a themed report is previewed or generated:
 *   POST /v2/smart-report-templates/preview-html
 *   POST /v2/smart-reports/:id/generate
 *   POST /v2/smart-report-templates/:id/download-sample
 *   POST /v2/smart-report-templates/:id/send-sample
 * ```
 * {
 *   reportTheme,
 *   themeTokens: { logo, accent, brand, page, surface, card, ink, muted,
 *                  success, warning, danger, line, displayFont, bodyFont },
 *   score: boolean,
 *   scoreProfile: "cabify_driver",  // only when score is true
 *   scoreScale: "percent" | "unit"  // only when score is true
 * }
 * ```
 *
 * Starters (Spanish copy for the four themes):
 *   GET /v2/smart-report-templates/theme-starters
 *   { data: [ { reportTheme, sections, name? } ] }
 *   or { data: { premium_dark: { sections }, ... } }
 * The builder uses that payload when the route responds and keeps a local
 * starter when it does not (the draft may not be deployed yet).
 *
 * Section `type` values are `THEME_SECTION_TYPE`:
 *   coverPage, scoreGauge, categoryBreakdown, checkTable, findings, sources.
 * They read `sampleData.verificationScore` (`VerificationScoreModel`).
 *
 * `score: false` is sent when a themed report has the toggle off.
 * Unthemed templates with the toggle off send nothing new.
 */
export const SCORE_API = {
    enabled: 'score',
    profile: 'scoreProfile',
    unit: 'unit' as const,
    percent: 'percent' as const,
    theme: 'reportTheme',
    tokens: 'themeTokens',
    scale: 'scoreScale',
};

/** Path of PR 760's starter catalog. Joined with `environment.apiUrl`. */
export const THEME_STARTERS_PATH = '/v2/smart-report-templates/theme-starters';

export interface VerificationRequestInput {
    theme?: ReportThemeId | null;
    themeTokens?: ReportThemeTokens | null;
    scoreSettings?: ScoreSettings | null;
}

export const verificationRequestFields = (input: VerificationRequestInput): Record<string, unknown> => {
    const themed = Boolean(input.theme);
    const enabled = input.scoreSettings?.enabled === true;
    if (!themed && !enabled) return {};

    const body: Record<string, unknown> = {};
    if (input.theme) body[SCORE_API.theme] = input.theme;
    if (input.theme && input.themeTokens) body[SCORE_API.tokens] = input.themeTokens;
    if (input.scoreSettings) {
        body[SCORE_API.enabled] = enabled;
        if (enabled) {
            body[SCORE_API.profile] = input.scoreSettings.profile;
            body[SCORE_API.scale] = input.scoreSettings.format === 'unit' ? SCORE_API.unit : SCORE_API.percent;
        }
    }
    return body;
};

export interface ThemeStarterPayload {
    reportTheme: ReportThemeId;
    sections: ReportSectionLike[];
    name?: string;
}

interface ReportSectionLike {
    id?: string;
    type?: string;
    [key: string]: unknown;
}

const asRecord = (value: unknown): Record<string, unknown> | null =>
    value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : null;

const sectionsOf = (value: unknown): ReportSectionLike[] | null => {
    const record = asRecord(value);
    const list = Array.isArray(value) ? value : record?.['sections'];
    if (!Array.isArray(list) || !list.length) return null;
    const sections = list.filter(
        (item): item is ReportSectionLike =>
            !!asRecord(item) && typeof (item as ReportSectionLike).type === 'string'
    );
    return sections.length ? sections : null;
};

const starterFrom = (theme: unknown, value: unknown): ThemeStarterPayload | null => {
    if (!isThemeId(theme)) return null;
    const sections = sectionsOf(value);
    if (!sections) return null;
    const record = asRecord(value);
    const name = typeof record?.['name'] === 'string' ? record['name'] : undefined;
    return { reportTheme: theme, sections, ...(name ? { name } : {}) };
};

const isThemeId = (value: unknown): value is ReportThemeId =>
    value === 'premium_dark' || value === 'smart_enroll_v2' || value === 'editorial' || value === 'dashboard';

/**
 * Accept the list or map shape from `GET /v2/smart-report-templates/theme-starters`.
 * Unknown themes and empty section lists are dropped.
 */
export const parseThemeStarters = (body: unknown): ThemeStarterPayload[] => {
    const root = asRecord(body);
    const data = root && 'data' in root ? root['data'] : body;
    const found: ThemeStarterPayload[] = [];

    if (Array.isArray(data)) {
        for (const item of data) {
            const record = asRecord(item);
            const starter = starterFrom(record?.['reportTheme'] ?? record?.['theme'], record);
            if (starter) found.push(starter);
        }
        return found;
    }

    const map = asRecord(data);
    if (!map) return found;
    for (const [key, value] of Object.entries(map)) {
        const record = asRecord(value);
        const starter = starterFrom(record?.['reportTheme'] ?? key, record ?? value);
        if (starter) found.push(starter);
    }
    return found;
};
