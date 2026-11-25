import type { SmartReportTemplate } from '../smart-report.service';

export interface PopupAnchorRect {
    top: number;
    bottom: number;
    left: number;
    right: number;
}

export interface PopupSize {
    width: number;
    height: number;
}

export interface ViewportSize {
    width: number;
    height: number;
}

/**
 * Only persisted client-owned templates can be deleted from the UI.
 * Unsaved scratch drafts (no `_id`) and shared `System` templates cannot be deleted.
 */
export const canDeleteReportTemplate = (
    template: Pick<SmartReportTemplate, '_id' | 'type'> | null | undefined
): boolean => Boolean(template?._id?.trim() && template.type !== 'System');

/**
 * Generates a readable duplicate name (e.g. "Driver Report (Copy)").
 */
export const buildDuplicateTemplateName = (
    currentName: string | null | undefined,
    copyWord: string,
    fallbackBase: string
): string => {
    const baseName = (currentName || '').trim() || fallbackBase.trim();
    const copySuffix = copyWord.trim() || 'Copy';
    const escapedSuffix = copySuffix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const numberedPattern = new RegExp(`\\(${escapedSuffix}(?:\\s+(\\d{1,6}))?\\)$`, 'i');
    const suffixMatch = baseName.match(numberedPattern);
    if (!suffixMatch || suffixMatch.index === undefined) return `${baseName} (${copySuffix})`;
    const nextCopyNumber = suffixMatch[1] ? Number(suffixMatch[1]) + 1 : 2;
    return `${baseName.slice(0, suffixMatch.index)}(${copySuffix} ${nextCopyNumber})`;
};

/**
 * Computes fixed viewport coordinates for a popup menu when CSS Anchor Positioning
 * (`position-area`) is not available, aligning its inline end with the trigger
 * and flipping vertically above the trigger when overflowing the bottom edge.
 */
export const computeFallbackMenuPosition = (
    trigger: PopupAnchorRect,
    menu: PopupSize,
    viewport: ViewportSize,
    gap = 6,
    margin = 8
): { left: number; top: number } => {
    const preferredLeft = trigger.right - menu.width;
    const maxLeft = Math.max(margin, viewport.width - menu.width - margin);
    const left = Math.min(Math.max(preferredLeft, margin), maxLeft);

    const belowTop = trigger.bottom + gap;
    const fitsBelow = belowTop + menu.height <= viewport.height - margin;
    const aboveTop = trigger.top - menu.height - gap;
    const rawTop = fitsBelow || aboveTop < margin ? belowTop : aboveTop;
    const maxTop = Math.max(margin, viewport.height - menu.height - margin);
    const top = Math.min(Math.max(rawTop, margin), maxTop);

    return { left, top };
};
