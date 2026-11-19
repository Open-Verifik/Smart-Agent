/**
 * Display-only pagination for a free-placed sheet.
 * The saved frame stays where the author put it. A table that does not fit
 * continues on the next sheet, and only blocks under it move down.
 */

export const SHEET_FLOW_SLOP = 8;
export const SHEET_BELOW_SLOP = 4;

export interface SheetFlowInput {
    sectionId: string;
    /** Authored page, before this pass. */
    authoredPage: number;
    /** Authored top on that page. */
    authoredY: number;
    /** Top in one continuous column: page * pageHeight + y. */
    top: number;
    height: number;
    natural: number;
    growable: boolean;
    left: number;
    width: number;
    chrome: number;
    rowHeights: number[];
}

export interface SheetFlowSlice {
    sectionId: string;
    page: number;
    y: number;
    height: number;
    /** Inclusive. Ignored when rowEnd < 0. */
    rowStart: number;
    /** Exclusive. Negative means every row. */
    rowEnd: number;
    continuation: boolean;
    /** displayGlobal - authoredGlobal. Drag subtracts this before saving. */
    shift: number;
}

interface PlacedFlow extends SheetFlowInput {
    y: number;
    h: number;
    shift: number;
}

interface PackedRows {
    y: number;
    h: number;
    start: number;
    count: number;
}

function sharesX(left: { left: number; width: number }, right: { left: number; width: number }): boolean {
    const leftW = left.width;
    const rightW = right.width;
    if (![left.left, leftW, right.left, rightW].every(Number.isFinite) || leftW <= 0 || rightW <= 0) return false;
    return left.left < right.left + rightW - 1 && right.left < left.left + leftW - 1;
}

/** Same push rules as the PDF reflow. A block beside a table stays put. */
function layoutFlowItems(items: SheetFlowInput[]): PlacedFlow[] {
    const placed = [...items]
        .map((item, index) => ({ item, index }))
        .sort((left, right) => left.item.top - right.item.top || left.index - right.index)
        .map(({ item }) => ({
            ...item,
            growth: item.growable ? Math.max(0, Math.round(item.natural - item.height)) : 0,
            shift: 0,
        }));

    const stackedWith = (above: (typeof placed)[number], current: (typeof placed)[number]) =>
        !Number.isFinite(above.left) ||
        !Number.isFinite(above.width) ||
        above.width <= 0 ||
        !Number.isFinite(current.left) ||
        !Number.isFinite(current.width) ||
        current.width <= 0 ||
        sharesX(above, current);
    const newBottomOf = (item: (typeof placed)[number]) => item.top + item.shift + item.height + item.growth;

    for (let index = 0; index < placed.length; index += 1) {
        const current = placed[index];
        const top = current.top;
        let follow = 0;
        let followBottom = -Infinity;

        for (let earlier = 0; earlier < index; earlier += 1) {
            const above = placed[earlier];
            const oldBottom = above.top + above.height;
            const growthPush = above.shift + above.growth;
            if (!stackedWith(above, current) || growthPush <= 0) continue;
            if (oldBottom <= top + SHEET_BELOW_SLOP) {
                const nearer = oldBottom > followBottom + 0.5;
                const tied = Math.abs(oldBottom - followBottom) <= 0.5;
                if (nearer || (tied && growthPush > follow)) {
                    followBottom = oldBottom;
                    follow = growthPush;
                }
                continue;
            }
            if (top + current.height > oldBottom + SHEET_BELOW_SLOP) {
                const clearance = oldBottom + growthPush - top;
                if (clearance > follow) follow = clearance;
            }
        }

        current.shift = follow;

        for (let earlier = 0; earlier < index; earlier += 1) {
            const above = placed[earlier];
            const oldBottom = above.top + above.height;
            const gap = top - oldBottom;
            if (gap < -SHEET_BELOW_SLOP || !stackedWith(above, current)) continue;
            const blocked = placed.some((mid, midIndex) => {
                if (mid === above || mid === current || midIndex >= index) return false;
                if (!stackedWith(mid, current) || !stackedWith(mid, above)) return false;
                return oldBottom <= mid.top + SHEET_BELOW_SLOP && mid.top + mid.height <= top + SHEET_BELOW_SLOP;
            });
            const keep = blocked ? 0 : Math.max(0, gap);
            const needed = newBottomOf(above) + keep - top;
            if (needed > current.shift) current.shift = needed;
        }
    }

    return placed.map((item) => ({
        ...item,
        y: item.top + item.shift,
        h: item.height + item.growth,
    }));
}

function bumpFlowPages(items: PlacedFlow[], pageHeight: number, inset: number): PlacedFlow[] {
    const stride = Math.max(1, pageHeight);
    let guard = 0;
    let changed = true;

    while (changed && guard < items.length + 2) {
        changed = false;
        guard += 1;
        const ordered = [...items].sort((left, right) => left.y - right.y || left.h - right.h);

        for (const item of ordered) {
            if (item.h > stride - inset) continue;
            const pageStart = Math.floor(Math.max(0, item.y) / stride) * stride;
            const local = item.y - pageStart;
            if (local + item.h <= stride || local <= inset) continue;
            const delta = pageStart + stride + inset - item.y;
            if (delta <= 0) continue;
            const floor = item.y + item.h - SHEET_BELOW_SLOP;
            for (const later of items) {
                if (later === item || later.y >= floor) later.y += delta;
            }
            changed = true;
            break;
        }
    }

    return items;
}

/** Header once per slice. A new sheet starts only when the next row does not fit. */
function packFlowRows(
    rowHeights: number[],
    y: number,
    chrome: number,
    pageHeight: number,
    contentEnd: number,
    inset: number
): PackedRows[] {
    const stride = Math.max(1, pageHeight);
    const slices: PackedRows[] = [];
    let slice: PackedRows | null = null;

    const open = (at: number) => {
        slice = {
            y: at,
            h: chrome,
            start: slices.reduce((count, item) => count + item.count, 0),
            count: 0,
        };
        slices.push(slice);
    };

    open(y);
    for (const raw of rowHeights) {
        const rowH = Math.max(1, Math.round(Number(raw) || 0));
        const pageStart = Math.floor(Math.max(0, slice!.y) / stride) * stride;
        const room = pageStart + contentEnd - (slice!.y + slice!.h);
        if (slice!.count > 0 && rowH > room) open(pageStart + stride + inset);
        slice!.h += rowH;
        slice!.count += 1;
    }

    return slices;
}

function crossesContent(y: number, h: number, pageHeight: number, contentEnd: number): boolean {
    const pageStart = Math.floor(Math.max(0, y) / Math.max(1, pageHeight)) * pageHeight;
    return y + h > pageStart + contentEnd + 1;
}

/**
 * Slices that differ from the saved frames. A table that already fits is omitted
 * so the sheet does not gain an empty continuation.
 */
export function placeSheetFlow(
    items: SheetFlowInput[],
    pageHeight: number,
    contentEnd: number,
    inset: number
): SheetFlowSlice[] {
    if (!items.length || pageHeight < 1) return [];
    const end = Math.min(pageHeight, Math.max(inset + 1, contentEnd));
    const laid = bumpFlowPages(layoutFlowItems(items), pageHeight, inset);
    const slices: SheetFlowSlice[] = [];

    for (const item of laid) {
        const authoredGlobal = item.authoredPage * pageHeight + item.authoredY;
        const canSplit = item.growable && item.rowHeights.length > 1 && crossesContent(item.y, item.h, pageHeight, end);
        const packed = canSplit
            ? packFlowRows(item.rowHeights, item.y, Math.max(1, item.chrome), pageHeight, end, inset)
            : [{ y: item.y, h: item.h, start: 0, count: item.rowHeights.length }];
        const parts = packed.filter((part) => part.count > 0 || !canSplit);
        const allRows = parts.length === 1 && (!canSplit || parts[0].count >= item.rowHeights.length);
        const shift = (parts[0]?.y ?? item.y) - authoredGlobal;
        const affected = parts.some((part, index) => {
            const page = Math.floor(Math.max(0, part.y) / pageHeight);
            const local = part.y - page * pageHeight;
            if (index > 0 || !allRows) return true;
            if (page !== item.authoredPage) return true;
            if (Math.abs(local - item.authoredY) > 1) return true;
            return Math.abs(part.h - item.height) > 2;
        });
        if (!affected) continue;

        parts.forEach((part, index) => {
            const page = Math.max(0, Math.floor(Math.max(0, part.y) / pageHeight));
            const local = part.y - page * pageHeight;
            slices.push({
                sectionId: item.sectionId,
                page,
                y: local,
                height: Math.max(1, part.h),
                rowStart: allRows ? 0 : part.start,
                rowEnd: allRows ? -1 : part.start + part.count,
                continuation: index > 0,
                shift,
            });
        });
    }

    slices.sort((left, right) => left.page - right.page || left.y - right.y || left.sectionId.localeCompare(right.sectionId));
    return slices;
}
