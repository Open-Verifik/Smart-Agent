/**
 * Theme ids shared with verifik-backend PR #760 (`cursor/report-theme-blocks-75f3`).
 * `premium_dark` is the Cabify Chile driver report. The other three are the
 * light card layout, the certificate, and the chart dashboard.
 * Reports format API lookup results only. They do not include biometrics.
 */
export const REPORT_THEME_IDS = ['premium_dark', 'light_cards', 'editorial', 'dashboard'] as const;

export type ReportThemeId = (typeof REPORT_THEME_IDS)[number];

export type ScoreDisplayFormat = 'unit' | 'percent';

/** Profile id the score service knows. Cabify Chile driver onboarding is the first one. */
export const CABIFY_DRIVER_PROFILE = 'cabify_driver';

export interface ScoreSettings {
    /** When false the preview hides the score and the API is told not to score. */
    enabled: boolean;
    /** e.g. `cabify_driver`. Sent as `scoreProfile`. */
    profile: string;
    /**
     * Sent as `scoreScale`. `percent` is the default everywhere: score × 100
     * with a % sign (98%). `unit` keeps the 0–1 value (0.98).
     */
    format: ScoreDisplayFormat;
}

export interface ReportThemeTokens {
    /** Data URL or https URL. Empty draws the wordmark in `brand`. */
    logo: string;
    /** Eyebrows, rules, radar, coverage bar. */
    accent: string;
    /** Wordmark and the "verified with" mark when no logo is uploaded. */
    brand: string;
    page: string;
    surface: string;
    card: string;
    ink: string;
    muted: string;
    success: string;
    warning: string;
    danger: string;
    line: string;
    displayFont: string;
    bodyFont: string;
}

export const THEME_FONT_OPTIONS = ['Manrope', 'Fraunces', 'Newsreader', 'Source Sans 3', 'Inter'] as const;

export type ThemeBlockKind =
    | 'coverPage'
    | 'scoreGauge'
    | 'categoryBreakdown'
    | 'checkTable'
    | 'findings'
    | 'sources';

export const THEME_BLOCK_KINDS: ThemeBlockKind[] = [
    'coverPage',
    'scoreGauge',
    'categoryBreakdown',
    'checkTable',
    'findings',
    'sources',
];

/**
 * Section `type` strings the backend theme renderer is adding.
 * Rename a value here if the draft API uses a different block name.
 */
export const THEME_SECTION_TYPE: Record<ThemeBlockKind, string> = {
    coverPage: 'coverPage',
    scoreGauge: 'scoreGauge',
    categoryBreakdown: 'categoryBreakdown',
    checkTable: 'checkTable',
    findings: 'findings',
    sources: 'sources',
};

/** Optional knobs stored on `section.config` for a theme block. */
export interface ThemeBlockConfig {
    /** Replaces the block's default eyebrow. Blank keeps the translated default. */
    eyebrow?: string;
    showWeights?: boolean;
    showDeductions?: boolean;
    showFields?: boolean;
}

export type ScoreDecision = 'approve' | 'review' | 'reject';
export type ScoreTone = 'success' | 'warning' | 'danger' | 'info';

export interface VerificationCategory {
    id: string;
    labelKey: string;
    /** Always 0–1. The display format scales it. */
    score: number;
    /** Share of the profile, 0–1. */
    weight: number;
}

export interface VerificationCheckField {
    labelKey: string;
    value: string;
}

export interface VerificationCheck {
    id: string;
    labelKey: string;
    status: 'clear' | 'review' | 'fail';
    score: number;
    /** Points removed on the 0–1 scale. */
    deduction: number;
    fields: VerificationCheckField[];
    noteKey?: string;
}

export interface VerificationFinding {
    tone: ScoreTone;
    titleKey: string;
    detailKey: string;
}

export interface VerificationSource {
    nameKey: string;
    status: 'ok' | 'empty' | 'error';
    reference: string;
    consultedAt: string;
}

/**
 * Score payload the blocks bind to. Live runs can replace `sampleData.verificationScore`
 * with the same shape; the builder fills it with the synthetic Cabify sample until then.
 */
export interface VerificationScoreModel {
    profile: string;
    rulesVersion: string;
    value: number;
    decision: ScoreDecision;
    coverage: number;
    confidence: 'high' | 'medium' | 'low';
    checkCount: number;
    reviewCount: number;
    subjectName: string;
    documentLabel: string;
    documentMasked: string;
    plate: string;
    licenseClass: string;
    reportNumber: string;
    /** Already localized by the active language when the sample is built. */
    issuedLabel: string;
    verificationCode: string;
    /** Weighted mean before review caps, 0–1. */
    weightedAverage: number;
    /** Points removed on the 0–1 scale. */
    deductions: number;
    categories: VerificationCategory[];
    checks: VerificationCheck[];
    findings: VerificationFinding[];
    sources: VerificationSource[];
}

export const isReportThemeId = (value: unknown): value is ReportThemeId =>
    typeof value === 'string' && (REPORT_THEME_IDS as readonly string[]).includes(value);

export const isThemeBlockKind = (value: unknown): value is ThemeBlockKind =>
    typeof value === 'string' && (THEME_BLOCK_KINDS as readonly string[]).includes(value);

export const themeBlockKindFromType = (type: string | undefined): ThemeBlockKind | null => {
    if (!type) return null;
    const found = THEME_BLOCK_KINDS.find((kind) => THEME_SECTION_TYPE[kind] === type);
    return found ?? null;
};

export const defaultScoreSettings = (): ScoreSettings => ({
    enabled: true,
    profile: CABIFY_DRIVER_PROFILE,
    format: 'percent',
});

export const normalizeScoreSettings = (value: Partial<ScoreSettings> | null | undefined): ScoreSettings => {
    const base = defaultScoreSettings();
    if (!value) return { ...base, enabled: false };
    const format = value.format === 'unit' || value.format === 'percent' ? value.format : base.format;
    const profile = typeof value.profile === 'string' && value.profile.trim() ? value.profile.trim() : base.profile;
    return {
        enabled: value.enabled === true,
        profile,
        format,
    };
};

const TOKEN_PRESETS: Record<ReportThemeId, ReportThemeTokens> = {
    premium_dark: {
        logo: '',
        accent: '#8b7cff',
        brand: '#c4b8ff',
        page: '#07111f',
        surface: '#101b2d',
        card: '#162338',
        ink: '#f4f7fb',
        muted: '#93a0b5',
        success: '#3dd68c',
        warning: '#f5a524',
        danger: '#fb7185',
        line: 'rgba(255,255,255,0.08)',
        displayFont: 'Manrope',
        bodyFont: 'Manrope',
    },
    light_cards: {
        logo: '',
        accent: '#6d4aff',
        brand: '#6d4aff',
        page: '#e6ebe3',
        surface: '#ffffff',
        card: '#f3f6f1',
        ink: '#142018',
        muted: '#5d6b63',
        success: '#1f9d55',
        warning: '#d97706',
        danger: '#dc2626',
        line: '#e3e8e1',
        displayFont: 'Manrope',
        bodyFont: 'Manrope',
    },
    editorial: {
        logo: '',
        accent: '#5b4dff',
        brand: '#161616',
        page: '#f6f3ec',
        surface: '#fbfaf6',
        card: '#ffffff',
        ink: '#1a1a1a',
        muted: '#6f6a64',
        success: '#1f8a4c',
        warning: '#b45309',
        danger: '#b91c1c',
        line: '#e4dfd6',
        displayFont: 'Manrope',
        bodyFont: 'Source Sans 3',
    },
    dashboard: {
        logo: '',
        accent: '#6d4aff',
        brand: '#6d4aff',
        page: '#eef0f6',
        surface: '#ffffff',
        card: '#f6f7fb',
        ink: '#1c2033',
        muted: '#6d7388',
        success: '#22a559',
        warning: '#f08a24',
        danger: '#e11d48',
        line: '#e6e8f0',
        displayFont: 'Manrope',
        bodyFont: 'Manrope',
    },
};

export const defaultThemeTokens = (theme: ReportThemeId): ReportThemeTokens => ({ ...TOKEN_PRESETS[theme] });

export const readThemeBlockConfig = (config: unknown): Required<Omit<ThemeBlockConfig, 'eyebrow'>> & Pick<ThemeBlockConfig, 'eyebrow'> => {
    const raw = config && typeof config === 'object' ? (config as Record<string, unknown>) : {};
    const eyebrow = typeof raw['eyebrow'] === 'string' ? raw['eyebrow'] : '';
    return {
        eyebrow,
        showWeights: raw['showWeights'] !== false,
        showDeductions: raw['showDeductions'] !== false,
        showFields: raw['showFields'] !== false,
    };
};

export const fontStack = (family: string): string => `"${family}", Manrope, "Source Sans 3", system-ui, sans-serif`;
