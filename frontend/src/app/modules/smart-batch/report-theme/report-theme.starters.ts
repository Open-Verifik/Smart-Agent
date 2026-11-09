import type { ReportSection } from '../smart-report.service';
import {
    THEME_SECTION_TYPE,
    type ReportThemeId,
    type ThemeBlockConfig,
    type ThemeBlockKind,
} from './report-theme.model';

/** A4 at the preview's 96 DPI factor (`210mm * 3.7795275591`). */
const SHEET_WIDTH = 794;
const SHEET_HEIGHT = 1122;
const MARGIN_X = 28;
const CONTENT_WIDTH = SHEET_WIDTH - MARGIN_X * 2;
const SAFE_BOTTOM = 1088;

interface FrameSpec {
    kind: ThemeBlockKind;
    page: number;
    y: number;
    height: number;
}

const stack = (page: number, rows: { kind: ThemeBlockKind; height: number }[], startY = 18): FrameSpec[] => {
    let y = startY;
    return rows.map((row) => {
        const spec = { kind: row.kind, page, y, height: row.height };
        y += row.height + 12;
        return spec;
    });
};

/**
 * One starter per theme. Page 1 follows that direction's cover.
 * The check table and the source list sit on page 2 so the cover stays readable.
 */
const STARTER_FRAMES: Record<ReportThemeId, FrameSpec[]> = {
    premium_dark: [
        ...stack(0, [
            { kind: 'coverPage', height: 132 },
            { kind: 'scoreGauge', height: 248 },
            { kind: 'categoryBreakdown', height: 268 },
            { kind: 'findings', height: 236 },
        ]),
        ...stack(1, [
            { kind: 'checkTable', height: 520 },
            { kind: 'sources', height: 300 },
        ]),
    ],
    smart_enroll_v2: [
        ...stack(0, [
            { kind: 'coverPage', height: 64 },
            { kind: 'scoreGauge', height: 430 },
            { kind: 'categoryBreakdown', height: 228 },
            { kind: 'findings', height: 248 },
        ]),
        ...stack(1, [
            { kind: 'checkTable', height: 520 },
            { kind: 'sources', height: 300 },
        ]),
    ],
    editorial: [
        ...stack(0, [
            { kind: 'coverPage', height: 248 },
            { kind: 'scoreGauge', height: 228 },
            { kind: 'categoryBreakdown', height: 292 },
            { kind: 'findings', height: 168 },
        ]),
        ...stack(1, [
            { kind: 'checkTable', height: 520 },
            { kind: 'sources', height: 300 },
        ]),
    ],
    dashboard: [
        ...stack(0, [
            { kind: 'coverPage', height: 92 },
            { kind: 'scoreGauge', height: 196 },
            { kind: 'categoryBreakdown', height: 430 },
            { kind: 'findings', height: 210 },
        ]),
        ...stack(1, [
            { kind: 'checkTable', height: 520 },
            { kind: 'sources', height: 300 },
        ]),
    ],
};

const blockId = (kind: ThemeBlockKind): string => `theme-${kind}`;

export const themeBlockSection = (
    kind: ThemeBlockKind,
    frame: { x: number; y: number; width: number; height: number; page: number },
    config?: ThemeBlockConfig
): ReportSection => ({
    id: blockId(kind),
    type: THEME_SECTION_TYPE[kind] as ReportSection['type'],
    order: 0,
    label: kind,
    layerName: kind,
    dataPath: 'verificationScore',
    config: {
        showWeights: config?.showWeights !== false,
        showDeductions: config?.showDeductions !== false,
        showFields: config?.showFields !== false,
        ...(config?.eyebrow ? { eyebrow: config.eyebrow } : {}),
    },
    style: { backgroundColor: 'transparent', padding: '0', zIndex: 4 },
    frame,
});

export const starterSections = (theme: ReportThemeId): ReportSection[] =>
    STARTER_FRAMES[theme].map((spec, order) => ({
        ...themeBlockSection(spec.kind, {
            x: MARGIN_X,
            y: spec.y,
            width: CONTENT_WIDTH,
            height: spec.height,
            page: spec.page,
        }),
        order,
    }));

/** Drop a single palette block under the last themed block, or on a fresh sheet. */
export const frameForAddedBlock = (
    kind: ThemeBlockKind,
    existing: { page?: number; y?: number; height?: number }[]
): { x: number; y: number; width: number; height: number; page: number } => {
    const height = kind === 'checkTable' ? 520 : kind === 'scoreGauge' ? 280 : kind === 'categoryBreakdown' ? 260 : 200;
    const bottoms = existing.map((frame) => ({
        page: frame.page ?? 0,
        bottom: (frame.y ?? 0) + (frame.height ?? 0),
    }));
    const lastPage = bottoms.reduce((max, frame) => Math.max(max, frame.page), 0);
    const bottom = bottoms.filter((frame) => frame.page === lastPage).reduce((max, frame) => Math.max(max, frame.bottom), 18);
    const y = bottom + 12;
    if (y + height <= SAFE_BOTTOM) {
        return { x: MARGIN_X, y, width: CONTENT_WIDTH, height, page: lastPage };
    }
    return { x: MARGIN_X, y: 18, width: CONTENT_WIDTH, height, page: lastPage + 1 };
};

/** Keep a remote starter's copy, and use the local frames when the API section has none. */
export const withStarterFrames = (sections: ReportSection[], theme: ReportThemeId): ReportSection[] => {
    const local = starterSections(theme);
    return sections.map((section, index) => {
        if (section.frame) return section;
        const match = local.find((item) => item.type === section.type) ?? local[index];
        return match?.frame ? { ...section, frame: match.frame, order: section.order ?? index } : section;
    });
};

export const starterFitsSheet = (theme: ReportThemeId): boolean =>
    STARTER_FRAMES[theme].every((spec) => spec.y >= 0 && spec.y + spec.height <= SAFE_BOTTOM && spec.height > 0);

export const SHEET_LIMITS = { width: SHEET_WIDTH, height: SHEET_HEIGHT, safeBottom: SAFE_BOTTOM, contentWidth: CONTENT_WIDTH };
