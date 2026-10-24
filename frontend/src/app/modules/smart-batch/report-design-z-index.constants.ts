/**
 * Stacking order for report layout (Visita + report builder).
 *
 * Everything on the printable sheet stays at or below {@link REPORT_SHEET_Z_MAX}. Chrome
 * (toolbars, property panels, mat-menu, CDK overlays) starts at {@link REPORT_UI_Z_MIN} so menus
 * never slide under a block the user just placed on the page.
 */

export const REPORT_SHEET_Z_MAX = 9000;
export const REPORT_SHEET_Z_DRAG = 9200;
export const REPORT_SHEET_Z_PEEK = 9100;

export const REPORT_UI_Z_MIN = 1_000_000;
export const REPORT_UI_Z_BACKDROP = 1_000_000;
export const REPORT_UI_Z_PANEL = 1_001_000;
export const REPORT_UI_Z_TOOLBAR = 1_002_000;
export const REPORT_UI_Z_MENU = 1_004_000;
export const REPORT_UI_Z_CDK_OVERLAY = 1_006_000;
export const REPORT_UI_Z_MARQUEE = 1_008_000;

export const REPORT_DESIGN_BODY_CLASS = 'report-design-active';

export function clampReportSheetZ(value: number): number {
    if (!Number.isFinite(value)) return 40;
    return Math.min(Math.max(0, Math.round(value)), REPORT_SHEET_Z_MAX);
}

export function nextReportSheetZ(currentMax: number, bump = 1): number {
    return clampReportSheetZ(Math.max(currentMax, 40) + bump);
}
