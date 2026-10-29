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
