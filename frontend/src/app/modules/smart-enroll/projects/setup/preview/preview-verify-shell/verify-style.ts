export type VerifyStyleId = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

export interface VerifyStyle {
    id: VerifyStyleId;
    variables: Record<string, string>;
}

export interface VerifyStyleColorDefaults {
    backgroundColor: string;
    buttonColor: string;
    buttonTextColor: string;
    textColor: string;
    titleColor: string;
}

export const VERIFY_STYLE_COLOR_DEFAULTS: Record<VerifyStyleId, VerifyStyleColorDefaults> = {
    a: { buttonColor: '#9fe870', buttonTextColor: '#163300', titleColor: '#0e0f0c', textColor: '#454745', backgroundColor: '#e8ebe6' },
    b: { buttonColor: '#000000', buttonTextColor: '#ffffff', titleColor: '#000000', textColor: '#444444', backgroundColor: '#e5e5e5' },
    c: { buttonColor: '#0d111b', buttonTextColor: '#ffffff', titleColor: '#1e1e1e', textColor: '#666666', backgroundColor: '#ffffff' },
    d: { buttonColor: '#1c6cff', buttonTextColor: '#ffffff', titleColor: '#ffffff', textColor: '#ccced0', backgroundColor: '#000814' },
    e: { buttonColor: '#ffffff', buttonTextColor: '#151581', titleColor: '#151581', textColor: '#292824', backgroundColor: '#f6f6fa' },
    f: { buttonColor: '#adff02', buttonTextColor: '#000000', titleColor: '#000000', textColor: '#6e6e6e', backgroundColor: '#f2f2f2' },
};

const INTER = '"Inter", sans-serif';
const BARLOW = '"Barlow Condensed", "Arial Narrow", sans-serif';
const MONO = '"IBM Plex Mono", ui-monospace, monospace';
const OUTFIT = '"Outfit", sans-serif';
const GROTESK = '"Space Grotesk", sans-serif';
const TIGHT = '"Inter Tight", "Inter", sans-serif';
const ROBOTO = '"Roboto Condensed", "Arial Narrow", sans-serif';

const IDS: VerifyStyleId[] = ['a', 'b', 'c', 'd', 'e', 'f'];

/**
 * Chrome styles for /verify (mirrored 1:1 from web-sdk/src/app/modules/auth/verify/verify-style.ts).
 * Headlines stay inside the card (32–40px).
 * `a` is the read-time fallback for a v2 project with nothing saved.
 */
export const VERIFY_STYLES: Record<VerifyStyleId, VerifyStyle> = {
    a: {
        id: 'a',
        variables: {
            '--style-page': '#e8ebe6',
            '--style-page-mobile': '#ffffff',
            '--style-page-pad': '0px',
            '--style-card': '#ffffff',
            '--style-card-border': '0',
            '--style-card-shadow': 'none',
            '--style-input-bg': '#ffffff',
            '--style-ink': '#0e0f0c',
            '--style-body': '#454745',
            '--style-body-size': '14px',
            '--style-body-weight': '400',
            '--style-body-tracking': '0',
            '--style-label': '#6a6c6a',
            '--style-line': '#868685',
            '--style-cta': '#9fe870',
            '--style-cta-text': '#163300',
            '--style-cta-pad': '10px 20px',
            '--style-cta-size': '14px',
            '--style-cta-weight': '500',
            '--style-cta-border': '0',
            '--style-cta-shadow': 'none',
            '--style-mark': '#163300',
            '--style-display': INTER,
            '--style-body-font': INTER,
            '--style-label-font': INTER,
            '--style-label-size': '13px',
            '--style-label-tracking': '0',
            '--style-label-transform': 'none',
            '--style-display-weight': '900',
            '--style-display-tracking': '-0.04em',
            '--style-display-transform': 'none',
            '--style-display-line': '1.08',
            '--style-headline': '25px',
            '--style-headline-align': 'left',
            '--style-h2': '20px',
            '--style-radius-card': '28px',
            '--style-radius-card-mobile': '0px',
            '--style-radius-button': '9999px',
            '--style-radius-input': '10px',
            '--style-radius-progress': '9999px',
            '--style-secondary-border': '0',
            '--style-secondary-decoration': 'underline',
            '--style-secondary-radius': '0px',
            '--style-segment': '#e8ebe6',
            '--style-segment-on': '#ffffff',
            '--style-segment-on-text': '#163300',
            '--title': '#0e0f0c',
            '--body': '#454745',
            '--accent': '#163300',
            '--accent-text': '#163300',
        },
    },
    b: {
        id: 'b',
        variables: {
            '--style-page': '#e5e5e5',
            '--style-page-mobile': '#e5e5e5',
            '--style-page-pad': '12px',
            '--style-card': '#ffffff',
            '--style-card-border': '0',
            '--style-card-shadow': 'none',
            '--style-input-bg': '#ffffff',
            '--style-ink': '#000000',
            '--style-body': '#444444',
            '--style-body-size': '14px',
            '--style-body-weight': '400',
            '--style-body-tracking': '0',
            '--style-label': '#000000',
            '--style-line': '#c6c6c6',
            '--style-cta': '#000000',
            '--style-cta-text': '#ffffff',
            '--style-cta-pad': '12px 20px',
            '--style-cta-size': '14px',
            '--style-cta-weight': '500',
            '--style-cta-border': '0',
            '--style-cta-shadow': 'none',
            '--style-mark': '#000000',
            '--style-display': BARLOW,
            '--style-body-font': INTER,
            '--style-label-font': MONO,
            '--style-label-size': '11px',
            '--style-label-tracking': '0.04em',
            '--style-label-transform': 'uppercase',
            '--style-display-weight': '700',
            '--style-display-tracking': '-0.03em',
            '--style-display-transform': 'uppercase',
            '--style-display-line': '0.95',
            '--style-headline': '26px',
            '--style-headline-align': 'left',
            '--style-h2': '20px',
            '--style-radius-card': '32px',
            '--style-radius-card-mobile': '24px',
            '--style-radius-button': '8px',
            '--style-radius-input': '8px',
            '--style-radius-progress': '0px',
            '--style-secondary-border': '1.5px solid #444444',
            '--style-secondary-decoration': 'none',
            '--style-secondary-radius': '4px',
            '--style-segment': 'transparent',
            '--style-segment-on': '#000000',
            '--style-segment-on-text': '#ffffff',
            '--title': '#000000',
            '--body': '#444444',
            '--accent': '#000000',
            '--accent-text': '#ffffff',
        },
    },
    c: {
        id: 'c',
        variables: {
            '--style-page': '#ffffff',
            '--style-page-mobile': '#ffffff',
            '--style-page-pad': '0px',
            '--style-card': '#fafafa',
            '--style-card-border': '0',
            '--style-card-shadow': 'none',
            '--style-input-bg': '#ffffff',
            '--style-ink': '#1e1e1e',
            '--style-body': '#666666',
            '--style-body-size': '14px',
            '--style-body-weight': '500',
            '--style-body-tracking': '-0.02em',
            '--style-label': '#8d8d8d',
            '--style-line': '#ccd1da',
            '--style-cta': '#0d111b',
            '--style-cta-text': '#ffffff',
            '--style-cta-pad': '10px 20px',
            '--style-cta-size': '14px',
            '--style-cta-weight': '500',
            '--style-cta-border': '0',
            '--style-cta-shadow': 'rgb(36, 38, 40) 0px 0px 0px 1px, rgba(27, 28, 29, 0.48) 0px 1px 2px 0px',
            '--style-mark': '#0d111b',
            '--style-display': OUTFIT,
            '--style-body-font': OUTFIT,
            '--style-label-font': OUTFIT,
            '--style-label-size': '13px',
            '--style-label-tracking': '0',
            '--style-label-transform': 'none',
            '--style-display-weight': '600',
            '--style-display-tracking': '-0.03em',
            '--style-display-transform': 'none',
            '--style-display-line': '1.12',
            '--style-headline': '24px',
            '--style-headline-align': 'left',
            '--style-h2': '20px',
            '--style-radius-card': '32px',
            '--style-radius-card-mobile': '16px',
            '--style-radius-button': '100px',
            '--style-radius-input': '16px',
            '--style-radius-progress': '100px',
            '--style-secondary-border': '0',
            '--style-secondary-decoration': 'underline',
            '--style-secondary-radius': '100px',
            '--style-segment': '#f7fafc',
            '--style-segment-on': '#ffffff',
            '--style-segment-on-text': '#1e1e1e',
            '--title': '#1e1e1e',
            '--body': '#666666',
            '--accent': '#0d111b',
            '--accent-text': '#ffffff',
        },
    },
    d: {
        id: 'd',
        variables: {
            '--style-page': '#000814',
            '--style-page-mobile': '#000814',
            '--style-page-pad': '12px',
            '--style-card': '#010d1e',
            '--style-card-border': '1px solid #11263b',
            '--style-card-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -10px 18px rgba(0, 0, 0, 0.45)',
            '--style-input-bg': '#001533',
            '--style-ink': '#ffffff',
            '--style-body': '#ccced0',
            '--style-body-size': '14px',
            '--style-body-weight': '400',
            '--style-body-tracking': '0',
            '--style-label': '#ccced0',
            '--style-line': '#11263b',
            '--style-cta': '#1c6cff',
            '--style-cta-text': '#ffffff',
            '--style-cta-pad': '11px 20px',
            '--style-cta-size': '14px',
            '--style-cta-weight': '500',
            '--style-cta-border': '0',
            '--style-cta-shadow': 'none',
            '--style-mark': '#ffffff',
            '--style-display': GROTESK,
            '--style-body-font': INTER,
            '--style-label-font': INTER,
            '--style-label-size': '11px',
            '--style-label-tracking': '0.04em',
            '--style-label-transform': 'uppercase',
            '--style-display-weight': '600',
            '--style-display-tracking': '-0.02em',
            '--style-display-transform': 'none',
            '--style-display-line': '1.08',
            '--style-headline': '25px',
            '--style-headline-align': 'left',
            '--style-h2': '20px',
            '--style-radius-card': '24px',
            '--style-radius-card-mobile': '24px',
            '--style-radius-button': '16px',
            '--style-radius-input': '16px',
            '--style-radius-progress': '16px',
            '--style-secondary-border': '1px solid #11263b',
            '--style-secondary-decoration': 'none',
            '--style-secondary-radius': '16px',
            '--style-segment': '#001533',
            '--style-segment-on': '#11263b',
            '--style-segment-on-text': '#ffffff',
            '--title': '#ffffff',
            '--body': '#ccced0',
            '--accent': '#1c6cff',
            '--accent-text': '#ffffff',
        },
    },
    e: {
        id: 'e',
        variables: {
            '--style-page': '#f6f6fa',
            '--style-page-mobile': '#f6f6fa',
            '--style-page-pad': '12px',
            '--style-card': '#ffffff',
            '--style-card-border': '0',
            '--style-card-shadow': 'rgba(36, 36, 41, 0.07) 0px 8px 34px, rgba(37, 36, 41, 0.09) 0px 1px 2px',
            '--style-input-bg': '#ffffff',
            '--style-ink': '#151581',
            '--style-body': '#292824',
            '--style-body-size': '14px',
            '--style-body-weight': '400',
            '--style-body-tracking': '0',
            '--style-label': '#a1a1cd',
            '--style-line': '#f6f5f4',
            '--style-cta': '#ffffff',
            '--style-cta-text': '#151581',
            '--style-cta-pad': '11px 20px',
            '--style-cta-size': '14px',
            '--style-cta-weight': '400',
            '--style-cta-border': '1px solid #a1a1cd',
            '--style-cta-shadow': 'none',
            '--style-mark': '#151581',
            '--style-display': TIGHT,
            '--style-body-font': INTER,
            '--style-label-font': INTER,
            '--style-label-size': '13px',
            '--style-label-tracking': '0',
            '--style-label-transform': 'none',
            '--style-display-weight': '400',
            '--style-display-tracking': '-0.03em',
            '--style-display-transform': 'none',
            '--style-display-line': '1.15',
            '--style-headline': '25px',
            '--style-headline-align': 'center',
            '--style-h2': '20px',
            '--style-radius-card': '40px',
            '--style-radius-card-mobile': '24px',
            '--style-radius-button': '48px',
            '--style-radius-input': '16px',
            '--style-radius-progress': '48px',
            '--style-secondary-border': '1px solid #a1a1cd',
            '--style-secondary-decoration': 'none',
            '--style-secondary-radius': '48px',
            '--style-segment': '#f6f5f4',
            '--style-segment-on': '#ffffff',
            '--style-segment-on-text': '#151581',
            '--title': '#151581',
            '--body': '#292824',
            '--accent': '#151581',
            '--accent-text': '#151581',
        },
    },
    f: {
        id: 'f',
        variables: {
            '--style-page': '#f2f2f2',
            '--style-page-mobile': '#f2f2f2',
            '--style-page-pad': '16px',
            '--style-card': '#ffffff',
            '--style-card-border': '1px solid #000000',
            '--style-card-shadow': '8px 8px 0 0 #000100',
            '--style-input-bg': '#ffffff',
            '--style-ink': '#000000',
            '--style-body': '#6e6e6e',
            '--style-body-size': '14px',
            '--style-body-weight': '400',
            '--style-body-tracking': '-0.02em',
            '--style-label': '#000000',
            '--style-line': '#000000',
            '--style-cta': '#adff02',
            '--style-cta-text': '#000000',
            '--style-cta-pad': '11px 20px',
            '--style-cta-size': '14px',
            '--style-cta-weight': '700',
            '--style-cta-border': '1px solid #000000',
            '--style-cta-shadow': 'none',
            '--style-mark': '#000000',
            '--style-display': ROBOTO,
            '--style-body-font': INTER,
            '--style-label-font': INTER,
            '--style-label-size': '13px',
            '--style-label-tracking': '-0.02em',
            '--style-label-transform': 'none',
            '--style-display-weight': '900',
            '--style-display-tracking': '-0.033em',
            '--style-display-transform': 'none',
            '--style-display-line': '0.95',
            '--style-headline': '26px',
            '--style-headline-align': 'left',
            '--style-h2': '20px',
            '--style-radius-card': '16px',
            '--style-radius-card-mobile': '16px',
            '--style-radius-button': '16px',
            '--style-radius-input': '16px',
            '--style-radius-progress': '16px',
            '--style-secondary-border': '1px solid #000000',
            '--style-secondary-decoration': 'none',
            '--style-secondary-radius': '16px',
            '--style-segment': '#ffffff',
            '--style-segment-on': '#e7e3bf',
            '--style-segment-on-text': '#000000',
            '--title': '#000000',
            '--body': '#6e6e6e',
            '--accent': '#000000',
            '--accent-text': '#000000',
        },
    },
};

export const VERIFY_FONT_HREF =
    'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=IBM+Plex+Mono:wght@400;500&family=Inter+Tight:wght@400&family=Inter:wght@100;400;500;700;900&family=Outfit:wght@500;600&family=Roboto+Condensed:wght@900&family=Space+Grotesk:wght@500;600&display=swap';

/** Returns a registry id, or null when the value is empty or unknown. */
export const parseVerifyStyle = (value: unknown): VerifyStyleId | null => {
    const id = String(value ?? '').trim().toLowerCase();

    return (IDS as string[]).includes(id) ? (id as VerifyStyleId) : null;
};

/**
 * Query `style` is a preview only. A saved id is used when the project is on the v2 client.
 * A v2 project with nothing saved reads as `a` and is not written back.
 */
export const resolveVerifyStyle = (preview: string | null | undefined, saved: unknown, client: unknown): VerifyStyleId => {
    const query = parseVerifyStyle(preview);

    if (query) return query;
    if (client !== 'v2') return 'a';

    return parseVerifyStyle(saved) || 'a';
};

export type VerifyLogoShape = 'tall' | 'square' | 'compact' | 'wide' | 'ultrawide';

export interface VerifyLogoMetrics {
    shape: VerifyLogoShape;
    aspectRatio: number;
    heightPx: number;
    maxWidthPx: number;
}

export const DEFAULT_VERIFY_LOGO_METRICS: VerifyLogoMetrics = {
    shape: 'compact',
    aspectRatio: 1.8,
    heightPx: 40,
    maxWidthPx: 168,
};

/**
 * Classifies a brand logo by its intrinsic aspect ratio (width / height) and computes
 * optical dimensions so square/circular marks, vertical crests, compact lockups, and
 * wide wordmarks (e.g. icon + text rectangles) carry balanced visual weight in the header.
 */
export const resolveLogoMetrics = (naturalWidth: number, naturalHeight: number): VerifyLogoMetrics => {
    if (!Number.isFinite(naturalWidth) || !Number.isFinite(naturalHeight) || naturalWidth <= 0 || naturalHeight <= 0) {
        return { ...DEFAULT_VERIFY_LOGO_METRICS };
    }

    const aspectRatio = naturalWidth / naturalHeight;
    let shape: VerifyLogoShape;
    let baseHeightPx: number;
    let maxWidthPx: number;

    if (aspectRatio < 0.85) {
        shape = 'tall';
        baseHeightPx = 52;
        maxWidthPx = 120;
    } else if (aspectRatio <= 1.35) {
        shape = 'square';
        baseHeightPx = 48;
        maxWidthPx = 72;
    } else if (aspectRatio <= 2.2) {
        shape = 'compact';
        baseHeightPx = 40;
        maxWidthPx = 168;
    } else if (aspectRatio <= 3.8) {
        shape = 'wide';
        baseHeightPx = 34;
        maxWidthPx = 204;
    } else {
        shape = 'ultrawide';
        baseHeightPx = 30;
        maxWidthPx = 232;
    }

    const cappedHeight = Math.min(baseHeightPx, Math.round(maxWidthPx / aspectRatio));
    const heightPx = Math.max(24, cappedHeight);

    return {
        shape,
        aspectRatio: Number(aspectRatio.toFixed(2)),
        heightPx,
        maxWidthPx,
    };
};


