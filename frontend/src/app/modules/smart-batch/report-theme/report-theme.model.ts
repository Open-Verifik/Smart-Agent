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

export type ReportDensity = 'compact' | 'balanced' | 'full';

export interface ReportHeadlines {
    approve?: string;
    review?: string;
    reject?: string;
    pending?: string;
}

export interface ReportThemePayload {
    id: ReportThemeId;
    locale?: 'es' | 'en';
    scoreScale?: ScoreDisplayFormat;
    scoreEnabled?: boolean;
    scoreProfile?: string;
    density?: ReportDensity;
    eyebrow?: string;
    coverTitle?: string;
    headlines?: ReportHeadlines;
    legalNote?: string;
    showVerifiedBadge?: boolean;
    showWeights?: boolean;
    showDeductions?: boolean;
    showFields?: boolean;
    showHowItWorks?: boolean;
    blocks?: string[];
    tokens?: Record<string, unknown>;
}

export interface ReportThemeTokens {
    /** Data URL or https URL. Empty draws the wordmark in `brand`. */
    logo: string;
    /** Client wordmark shown when no raster/SVG logo is uploaded (e.g. `cabify`, `verifik`). */
    logoText: string;
    /** Whether to display "Verificado con Verifik" next to the client wordmark. */
    showVerifiedBadge: boolean;
    /** Page density mode for PDF pagination (`compact`, `balanced`, `full`). */
    density: ReportDensity;
    /** Language of backend PDF labels & dates. */
    locale: 'es' | 'en';
    /** Optional cover header overrides (blank keeps backend contextual defaults). */
    coverTitle: string;
    eyebrow: string;
    headlineApprove: string;
    headlineReview: string;
    headlineReject: string;
    legalNote: string;
    /** Cover background (distinct from inner `page` background on themes like `premium_dark`). */
    cover: string;
    /** Global table/block visibility toggles stored on `reportTheme`. */
    showWeights: boolean;
    showDeductions: boolean;
    showFields: boolean;
    showHowItWorks: boolean;
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
    label?: string;
    /** Always 0–1. The display format scales it. */
    score: number;
    /** Share of the profile, 0–1. */
    weight: number;
}

export interface VerificationCheckField {
    labelKey: string;
    label?: string;
    value: string;
}

export interface VerificationCheck {
    id: string;
    labelKey: string;
    label?: string;
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
    title?: string;
    detailKey: string;
    detail?: string;
}

export interface VerificationSource {
    nameKey: string;
    name?: string;
    status: 'ok' | 'empty' | 'error';
    reference: string;
    consultedAt: string;
}

/**
 * Score payload the blocks bind to. Live runs can replace `sampleData.verificationScore`
 * with the same shape; the builder fills it dynamically from template sampleData when possible.
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
    isVehicle?: boolean;
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
    scoreDisplay?: string;
    coverageDisplay?: string;
    confidenceLabel?: string;
    decisionLabel?: string;
    eyebrowText?: string;
    coverTitleText?: string;
    headlineText?: string;
    summaryText?: string;
    subjectRows?: { label: string; value: string; ok: boolean }[];
    categories: VerificationCategory[];
    checks: VerificationCheck[];
    findings: VerificationFinding[];
    sources: VerificationSource[];
}

export const isReportThemeId = (value: unknown): value is ReportThemeId =>
    typeof value === 'string' && (REPORT_THEME_IDS as readonly string[]).includes(value);

export const normalizeReportThemeId = (value: unknown): ReportThemeId | null => {
    const raw =
        typeof value === 'string'
            ? value
            : value && typeof value === 'object' && typeof (value as { id?: unknown }).id === 'string'
              ? (value as { id: string }).id
              : null;
    if (!raw) return null;
    if (raw === 'smart_enroll_v2') return 'light_cards';
    return isReportThemeId(raw) ? raw : null;
};

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

const sharedDefaults = {
    logoText: 'verifik',
    showVerifiedBadge: true,
    density: 'balanced' as ReportDensity,
    locale: 'es' as const,
    coverTitle: '',
    eyebrow: '',
    headlineApprove: '',
    headlineReview: '',
    headlineReject: '',
    legalNote: '',
    showWeights: true,
    showDeductions: true,
    showFields: true,
    showHowItWorks: true,
};

const TOKEN_PRESETS: Record<ReportThemeId, ReportThemeTokens> = {
    premium_dark: {
        ...sharedDefaults,
        logo: '',
        cover: '#0b1730',
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
        ...sharedDefaults,
        logo: '',
        cover: '#e8ebe6',
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
        ...sharedDefaults,
        logo: '',
        cover: '#fffdf8',
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
        ...sharedDefaults,
        logo: '',
        cover: '#f6f7fb',
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

const str = (val: unknown): string => (typeof val === 'string' ? val : '');

/**
 * Normalizes either a string `reportTheme` (`"premium_dark"`) or a backend `ReportThemePayload` object
 * (with nested `tokens.colors`, `tokens.fonts`, `headlines`, `density`, `scoreProfile`, etc.)
 * into unified frontend builder signals.
 */
export const extractReportThemeConfig = (
    rawTheme: unknown,
    rawTokens?: Partial<ReportThemeTokens> | null,
    rawScoreSettings?: Partial<ScoreSettings> | null,
    rawScale?: ScoreDisplayFormat | null
): { themeId: ReportThemeId | null; tokens: ReportThemeTokens; scoreSettings: ScoreSettings } => {
    const themeId = normalizeReportThemeId(rawTheme);
    const base = defaultThemeTokens(themeId ?? 'premium_dark');
    const obj =
        rawTheme && typeof rawTheme === 'object' && !Array.isArray(rawTheme)
            ? (rawTheme as Record<string, unknown>)
            : null;
    const objTokens =
        obj?.['tokens'] && typeof obj['tokens'] === 'object'
            ? (obj['tokens'] as Record<string, unknown>)
            : null;
    const colors =
        objTokens?.['colors'] && typeof objTokens['colors'] === 'object'
            ? (objTokens['colors'] as Record<string, unknown>)
            : null;
    const fonts =
        objTokens?.['fonts'] && typeof objTokens['fonts'] === 'object'
            ? (objTokens['fonts'] as Record<string, unknown>)
            : null;
    const headlines =
        obj?.['headlines'] && typeof obj['headlines'] === 'object'
            ? (obj['headlines'] as Record<string, unknown>)
            : null;

    const merged: ReportThemeTokens = {
        ...base,
        ...(rawTokens ?? {}),
        logo: str(rawTokens?.logo) || str(objTokens?.['logoUrl']) || str(objTokens?.['logo']) || base.logo,
        logoText: str(rawTokens?.logoText) || str(objTokens?.['logoText']) || str(obj?.['logoText']) || base.logoText,
        showVerifiedBadge:
            rawTokens?.showVerifiedBadge ??
            (typeof obj?.['showVerifiedBadge'] === 'boolean' ? (obj['showVerifiedBadge'] as boolean) : base.showVerifiedBadge),
        density:
            rawTokens?.density ??
            (obj?.['density'] === 'compact' || obj?.['density'] === 'balanced' || obj?.['density'] === 'full'
                ? (obj['density'] as ReportDensity)
                : base.density),
        locale:
            rawTokens?.locale ??
            (obj?.['locale'] === 'en' || obj?.['locale'] === 'es' ? (obj['locale'] as 'es' | 'en') : base.locale),
        coverTitle: str(rawTokens?.coverTitle) || str(obj?.['coverTitle']) || base.coverTitle,
        eyebrow: str(rawTokens?.eyebrow) || str(obj?.['eyebrow']) || base.eyebrow,
        headlineApprove: str(rawTokens?.headlineApprove) || str(headlines?.['approve']) || base.headlineApprove,
        headlineReview: str(rawTokens?.headlineReview) || str(headlines?.['review']) || base.headlineReview,
        headlineReject: str(rawTokens?.headlineReject) || str(headlines?.['reject']) || base.headlineReject,
        legalNote: str(rawTokens?.legalNote) || str(obj?.['legalNote']) || base.legalNote,
        showWeights:
            rawTokens?.showWeights ?? (typeof obj?.['showWeights'] === 'boolean' ? (obj['showWeights'] as boolean) : base.showWeights),
        showDeductions:
            rawTokens?.showDeductions ??
            (typeof obj?.['showDeductions'] === 'boolean' ? (obj['showDeductions'] as boolean) : base.showDeductions),
        showFields:
            rawTokens?.showFields ?? (typeof obj?.['showFields'] === 'boolean' ? (obj['showFields'] as boolean) : base.showFields),
        showHowItWorks:
            rawTokens?.showHowItWorks ??
            (typeof obj?.['showHowItWorks'] === 'boolean' ? (obj['showHowItWorks'] as boolean) : base.showHowItWorks),
        accent: str(rawTokens?.accent) || str(objTokens?.['accent']) || str(obj?.['accent']) || base.accent,
        brand: str(rawTokens?.brand) || str(objTokens?.['brand']) || str(colors?.['mark']) || base.brand,
        cover: str(rawTokens?.cover) || str(colors?.['cover']) || str(objTokens?.['cover']) || base.cover,
        page: str(rawTokens?.page) || str(colors?.['page']) || base.page,
        surface: str(rawTokens?.surface) || str(colors?.['coverCard']) || base.surface,
        card: str(rawTokens?.card) || str(colors?.['card']) || base.card,
        ink: str(rawTokens?.ink) || str(colors?.['ink']) || base.ink,
        muted: str(rawTokens?.muted) || str(colors?.['label']) || base.muted,
        line: str(rawTokens?.line) || str(colors?.['line']) || base.line,
        success: str(rawTokens?.success) || str(colors?.['success']) || base.success,
        warning: str(rawTokens?.warning) || str(colors?.['warning']) || base.warning,
        danger: str(rawTokens?.danger) || str(colors?.['danger']) || base.danger,
        displayFont: str(rawTokens?.displayFont) || str(fonts?.['display']) || base.displayFont,
        bodyFont: str(rawTokens?.bodyFont) || str(fonts?.['body']) || base.bodyFont,
    };

    const scoreBase = normalizeScoreSettings(rawScoreSettings);
    const scaleFromObj = obj?.['scoreScale'] === 'unit' || obj?.['scoreScale'] === 'percent' ? (obj['scoreScale'] as ScoreDisplayFormat) : null;
    const scoreSettings: ScoreSettings = {
        enabled:
            typeof rawScoreSettings?.enabled === 'boolean'
                ? rawScoreSettings.enabled
                : typeof obj?.['scoreEnabled'] === 'boolean'
                  ? (obj['scoreEnabled'] as boolean)
                  : true,
        profile:
            (rawScoreSettings?.profile && rawScoreSettings.profile.trim()) ||
            str(obj?.['scoreProfile']) ||
            scoreBase.profile,
        format: rawScale ?? scaleFromObj ?? scoreBase.format,
    };

    return { themeId, tokens: merged, scoreSettings };
};

/**
 * Serializes builder theme & score state into the structured `reportTheme` object
 * accepted by `verifik-backend` for preview, save, download, and generation.
 */
export const toBackendReportThemePayload = (
    themeId: ReportThemeId,
    tokens: ReportThemeTokens,
    scoreSettings: ScoreSettings,
    blocks?: string[]
): ReportThemePayload => {
    const headlines: ReportHeadlines = {};
    if (tokens.headlineApprove.trim()) headlines.approve = tokens.headlineApprove.trim();
    if (tokens.headlineReview.trim()) headlines.review = tokens.headlineReview.trim();
    if (tokens.headlineReject.trim()) headlines.reject = tokens.headlineReject.trim();

    return {
        id: themeId,
        locale: tokens.locale || 'es',
        scoreScale: scoreSettings.format,
        scoreEnabled: scoreSettings.enabled,
        scoreProfile: scoreSettings.profile,
        density: tokens.density || 'balanced',
        showVerifiedBadge: tokens.showVerifiedBadge !== false,
        showWeights: tokens.showWeights !== false,
        showDeductions: tokens.showDeductions !== false,
        showFields: tokens.showFields !== false,
        showHowItWorks: tokens.showHowItWorks !== false,
        ...(tokens.eyebrow.trim() ? { eyebrow: tokens.eyebrow.trim() } : {}),
        ...(tokens.coverTitle.trim() ? { coverTitle: tokens.coverTitle.trim() } : {}),
        ...(tokens.legalNote.trim() ? { legalNote: tokens.legalNote.trim() } : {}),
        ...(Object.keys(headlines).length ? { headlines } : {}),
        blocks: blocks?.length ? blocks : ['cover', 'executive', 'categoryDetail', 'sources'],
        tokens: {
            logoText: tokens.logoText.trim() || 'verifik',
            ...(tokens.logo.trim() ? { logoUrl: tokens.logo.trim() } : {}),
            accent: tokens.accent,
            colors: {
                cover: tokens.cover || tokens.surface,
                mark: tokens.brand,
                page: tokens.page,
                card: tokens.card,
                ink: tokens.ink,
                label: tokens.muted,
                success: tokens.success,
                warning: tokens.warning,
                danger: tokens.danger,
            },
            fonts: {
                display: tokens.displayFont,
                body: tokens.bodyFont,
            },
        },
    };
};

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

export interface ThemeBlockToggleSupport {
    showWeights: boolean;
    showFields: boolean;
    showDeductions: boolean;
}

/**
 * Reports which per-block display overrides apply to a given themed block kind so
 * unrelated blocks (such as cover pages or source lists) never show cryptic toggles.
 */
export const themeBlockToggleSupport = (kind: ThemeBlockKind | null | undefined): ThemeBlockToggleSupport => ({
    showWeights: kind === 'categoryBreakdown',
    showFields: kind === 'checkTable',
    showDeductions: kind === 'checkTable',
});

export const fontStack = (family: string): string => `"${family}", Manrope, "Source Sans 3", system-ui, sans-serif`;
