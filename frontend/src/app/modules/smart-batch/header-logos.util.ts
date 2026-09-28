import { ReportHeaderLogo, ReportHeaderLogoAlign, ReportLogoBand } from './smart-report.service';

/** Page inset that the header logos cannot cross. */
export const HEADER_LOGO_INSET = 32;
/** Top of the header band, in canonical 96 DPI px. */
export const HEADER_LOGO_BAND_TOP = 16;
export const HEADER_LOGO_GAP = 8;
export const HEADER_LOGO_DEFAULT_WIDTH = 140;
export const HEADER_LOGO_DEFAULT_HEIGHT = 44;
export const HEADER_LOGO_MIN_WIDTH = 48;
export const HEADER_LOGO_MAX_WIDTH = 280;
export const HEADER_LOGO_MIN_HEIGHT = 24;
export const HEADER_LOGO_MAX_HEIGHT = 88;
/** Height of the header band when every logo is at its default size. */
export const HEADER_LOGO_BAND_HEIGHT = HEADER_LOGO_DEFAULT_HEIGHT + 16;

export interface PlacedHeaderLogo extends ReportHeaderLogo {
    x: number;
    y: number;
}

const alignOf = (align: string | undefined): ReportHeaderLogoAlign =>
    align === 'center' || align === 'right' ? align : 'left';

export function companyLogoBand(logo: { band?: string } | null | undefined): ReportLogoBand {
    return logo?.band === 'footer' ? 'footer' : 'header';
}

/** Keep the logo's shape and stop it at the header limits. */
export function fitHeaderLogoSize(
    width: number,
    height: number,
    targetHeight?: number
): { width: number; height: number } {
    const baseW = Math.max(1, Number(width) || HEADER_LOGO_DEFAULT_WIDTH);
    const baseH = Math.max(1, Number(height) || HEADER_LOGO_DEFAULT_HEIGHT);
    const ratio = baseW / baseH;
    let nextHeight = targetHeight == null ? baseH : Number(targetHeight);
    if (!Number.isFinite(nextHeight)) nextHeight = baseH;
    nextHeight = Math.min(HEADER_LOGO_MAX_HEIGHT, Math.max(HEADER_LOGO_MIN_HEIGHT, nextHeight));
    let nextWidth = nextHeight * ratio;
    if (nextWidth > HEADER_LOGO_MAX_WIDTH) {
        nextWidth = HEADER_LOGO_MAX_WIDTH;
        nextHeight = Math.max(HEADER_LOGO_MIN_HEIGHT, nextWidth / ratio);
    } else if (nextWidth < HEADER_LOGO_MIN_WIDTH) {
        nextWidth = HEADER_LOGO_MIN_WIDTH;
        nextHeight = Math.min(HEADER_LOGO_MAX_HEIGHT, nextWidth / ratio);
    }
    return {
        width: Math.round(nextWidth),
        height: Math.round(Math.min(HEADER_LOGO_MAX_HEIGHT, nextHeight)),
    };
}

/** Header band tall enough for the largest logo, and no taller than the limit. */
export function headerLogoBandHeight(logos: ReportHeaderLogo[]): number {
    let tallest = HEADER_LOGO_DEFAULT_HEIGHT;
    for (const logo of logos) {
        if (!logo?.src) continue;
        tallest = Math.max(tallest, fitHeaderLogoSize(logo.width, logo.height).height);
    }
    return tallest + 16;
}

/**
 * Pack company logos into the header band.
 * Each alignment is a row anchored to that edge, and the row never leaves the band.
 */
export function placeHeaderLogos(
    logos: ReportHeaderLogo[],
    pageWidth: number,
    band: ReportLogoBand = 'header'
): PlacedHeaderLogo[] {
    const width = Number(pageWidth);
    if (!Number.isFinite(width) || width <= HEADER_LOGO_INSET * 2) return [];
    const usable = width - HEADER_LOGO_INSET * 2;
    const groups: Record<ReportHeaderLogoAlign, ReportHeaderLogo[]> = { left: [], center: [], right: [] };
    for (const logo of logos) {
        if (!logo?.src || companyLogoBand(logo) !== band) continue;
        groups[alignOf(logo.align)].push(logo);
    }

    const placed: PlacedHeaderLogo[] = [];
    const bandHeight = headerLogoBandHeight(logos.filter((logo) => companyLogoBand(logo) === band));
    for (const align of ['left', 'center', 'right'] as const) {
        const group = groups[align];
        if (!group.length) continue;
        const fitted = group.map((logo) => ({ ...logo, ...fitHeaderLogoSize(logo.width, logo.height) }));
        const natural =
            fitted.reduce((sum, logo) => sum + logo.width, 0) + HEADER_LOGO_GAP * (fitted.length - 1);
        const scale = natural > usable ? usable / natural : 1;
        const widths = fitted.map((logo) => logo.width * scale);
        const heights = fitted.map((logo) => logo.height * scale);
        const total = widths.reduce((sum, item) => sum + item, 0) + HEADER_LOGO_GAP * (fitted.length - 1);
        let x = HEADER_LOGO_INSET;
        if (align === 'right') x = width - HEADER_LOGO_INSET - total;
        if (align === 'center') x = HEADER_LOGO_INSET + (usable - total) / 2;
        fitted.forEach((logo, index) => {
            const height = heights[index];
            placed.push({
                ...logo,
                align,
                width: widths[index],
                height,
                x,
                y: HEADER_LOGO_BAND_TOP + Math.max(0, (bandHeight - height) / 2),
            });
            x += widths[index] + HEADER_LOGO_GAP;
        });
    }
    return placed;
}

/** Header logos stay at the top. Footer logos mirror that band at the bottom of every page. */
export function placeCompanyLogos(
    logos: ReportHeaderLogo[],
    pageWidth: number,
    pageHeight: number
): PlacedHeaderLogo[] {
    const header = placeHeaderLogos(logos, pageWidth, 'header');
    const footerSource = logos.filter((logo) => companyLogoBand(logo) === 'footer');
    const footerBand = headerLogoBandHeight(footerSource);
    const footer = placeHeaderLogos(logos, pageWidth, 'footer').map((logo) => ({
        ...logo,
        y: pageHeight - HEADER_LOGO_BAND_TOP - footerBand + (logo.y - HEADER_LOGO_BAND_TOP),
    }));
    return [...header, ...footer];
}

/** Snap a logo's center to the header third it was dropped in. */
export function headerLogoAlignAt(centerX: number, pageWidth: number): ReportHeaderLogoAlign {
    if (centerX < pageWidth / 3) return 'left';
    if (centerX > (pageWidth * 2) / 3) return 'right';
    return 'center';
}
