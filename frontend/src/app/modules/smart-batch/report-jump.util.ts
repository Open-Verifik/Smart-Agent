import { hrefForAutolink } from './report-autolink.util';

/** Select value for an external URL (not a section id). */
export const LAYOUT_JUMP_URL_VALUE = '__url__';

/** HTML id for the block a table-of-contents item (or any jump) lands on. */
export const reportJumpAnchorId = (sectionId: string): string => {
    const safe = String(sectionId || '')
        .replace(/[^A-Za-z0-9_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return `rpt-${safe || 'block'}`;
};

export const reportJumpHref = (sectionId?: string | null): string | null => {
    if (!sectionId) return null;
    return `#${reportJumpAnchorId(sectionId)}`;
};

/** http(s) or mailto only; javascript/data never leave the designer. */
export const sanitizeReportLinkUrl = (raw?: string | null): string | null => {
    const href = hrefForAutolink(String(raw ?? ''));
    if (!href) return null;
    if (/^(https?:|mailto:)/i.test(href)) return href;
    return null;
};

export const isExternalReportHref = (href?: string | null): boolean =>
    Boolean(href) && !String(href).startsWith('#');

/** External URL wins over an in-document jump. */
export const reportClickHref = (item?: {
    linkToSectionId?: string;
    linkUrl?: string;
} | null): string | null => {
    const external = sanitizeReportLinkUrl(item?.linkUrl);
    if (external) return external;
    return reportJumpHref(item?.linkToSectionId);
};
