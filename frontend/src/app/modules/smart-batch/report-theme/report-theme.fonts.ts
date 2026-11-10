import { googleFontWeightUrl, ReportCustomFont, sanitizeCustomFonts } from '../report-fonts.util';
import type { ReportThemeTokens } from './report-theme.model';

/** Weights each face actually serves. A missing weight makes Google reject the whole sheet. */
const FONT_WEIGHTS: Record<string, number[]> = {
    manrope: [400, 500, 600, 700, 800],
    fraunces: [400, 600, 700],
    newsreader: [400, 600, 700],
    'source sans 3': [400, 600, 700],
    inter: [400, 500, 600, 700],
};

const weightsFor = (family: string): number[] => FONT_WEIGHTS[family.trim().toLowerCase()] ?? [400, 700];

export const themeFontEntries = (tokens: ReportThemeTokens): ReportCustomFont[] => {
    const families = [tokens.displayFont, tokens.bodyFont].filter(
        (family, index, list) => family.trim() && list.indexOf(family) === index
    );
    return families.map((family) => {
        const weights = weightsFor(family);
        return {
            family,
            source: 'url' as const,
            url: googleFontWeightUrl(family, weights),
            weights: weights as ReportCustomFont['weights'],
        };
    });
};

/** Theme faces first. Uploaded font files stay. */
export const mergeThemeFonts = (existing: ReportCustomFont[] | null | undefined, tokens: ReportThemeTokens): ReportCustomFont[] => {
    const uploads = (existing ?? []).filter((font) => font.source === 'file');
    return sanitizeCustomFonts([...themeFontEntries(tokens), ...uploads]);
};
