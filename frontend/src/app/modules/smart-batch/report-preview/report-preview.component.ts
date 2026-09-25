import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    OnDestroy,
    Output,
    QueryList,
    ViewChild,
    ViewChildren,
    effect,
    inject,
    input,
    signal,
    untracked,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { ReportCellPart, ReportRowLineStyle, ReportSection, ReportSectionFrame, ReportShapeKind, ReportSheetImage, ReportTextRole, SmartReportTemplate } from '../smart-report.service';
import { chunkLayoutSheetItems, collectLayoutSheetItems, LayoutSheetChunk } from '../report-param-entries.util';
import { clampRowLineMark, clampRowLineWidth, defaultRowLineMark, rowLinePaint } from '../report-row-line.util';
import { resolveTextRole } from '../report-text-role.util';

export type ReportOverlayId = 'logo' | 'watermark' | 'signature' | `img:${string}`;

export type ReportInlineTextKind = 'title' | 'body' | 'cellLabel';

export type ReportInlineTextChange = {
    sectionId: string;
    kind: ReportInlineTextKind;
    key?: string;
    value: string;
};

const MM_TO_PX = 3.7795275591;
/** Tailwind `mb-3` between blocks. Margin is not included in getBoundingClientRect. */
const SECTION_GAP_PX = 12;
/** How close an edge must be, in screen pixels, before it snaps and shows a guide. */
const ALIGN_SNAP_SCREEN_PX = 6;
/** Where a block starts when it spills onto the next page. */
const PAGE_INSET_PX = 32;
/**
 * Block types meant to sit behind or over other blocks, so the overlap sweep
 * leaves them where the author put them. Mirrors the renderer.
 */
const OVERLAP_EXEMPT_TYPES = new Set<string>(['shape', 'image']);

/** A guide drawn on the page while a block is snapped to an edge. */
interface AlignmentGuides {
    page: number;
    /** View-pixel offset of a vertical line. Null when nothing is snapped on X. */
    vertical: number | null;
    /** View-pixel offset of a horizontal line. Null when nothing is snapped on Y. */
    horizontal: number | null;
}

/**
 * Move `origin` so one edge of a box (left, center, or right) lands on the nearest target.
 * Width is unchanged: only the origin shifts.
 */
const snapToTargets = (
    origin: number,
    size: number,
    targets: number[],
    threshold: number
): { origin: number; guide: number | null } => {
    let bestDistance = threshold + 1;
    let delta = 0;
    let guide: number | null = null;
    const edges = [0, size / 2, size];

    for (const edge of edges) {
        for (const target of targets) {
            const distance = Math.abs(target - (origin + edge));
            if (distance > threshold || distance >= bestDistance) continue;

            bestDistance = distance;
            delta = target - (origin + edge);
            guide = target;
        }
    }

    return { origin: origin + delta, guide };
};

/**
 * Shared report preview component - renders a template with data, paginating
 * sections into multiple A4-sized "paper" cards so the live preview matches
 * the actual PDF page breaks (true WYSIWYG with the Puppeteer output).
 */
@Component({
    selector: 'report-preview',
    standalone: true,
    imports: [CommonModule, MatIconModule, TranslocoModule],
    templateUrl: './report-preview.component.html',
})
export class ReportPreviewComponent implements AfterViewInit, OnDestroy {
    /** All paper cards in the rendered preview. The first card is used as the
     *  reference for canonical-to-screen scaling and overlay anchoring. */
    @ViewChildren('reportPage') private _reportPages!: QueryList<ElementRef<HTMLDivElement>>;
    /** Off-screen container that always renders every section so we can
     *  measure their natural heights independently of the visible (and
     *  paginated) rendering. */
    @ViewChildren('measureSection') private _measureSections!: QueryList<ElementRef<HTMLElement>>;
    /** Off-screen legend block used to compute the bottom reservation. */
    @ViewChild('measureLegend') private _measureLegend?: ElementRef<HTMLElement>;

    /** Template containing sections to render */
    template = input.required<SmartReportTemplate>();
    /** Data to resolve paths against (inputData, results, etc.) */
    previewData = input.required<Record<string, any>>();
    /** Primary color for styling */
    primaryColor = input<string>('#4F46E5');
    /** Paper background color */
    pageBackgroundColor = input<string>('#ffffff');
    /** Orientation for container sizing */
    orientation = input<'portrait' | 'landscape'>('portrait');
    /** Whether sections are clickable (for builder edit mode) */
    clickable = input<boolean>(false);
    /** Currently selected section ID (for builder highlight) */
    selectedSectionId = input<string | null>(null);
    /** Parameter key selected inside a block */
    selectedCellKey = input<string | null>(null);
    /** Label, value, or whole cell */
    selectedCellPart = input<ReportCellPart | null>(null);
    /** Currently selected overlay (logo, watermark, signature) */
    selectedOverlay = input<ReportOverlayId | null>(null);
    /** Section click handler (optional) */
    sectionClick = input<((section: ReportSection) => void) | null>(null);
    /** When true, right-click emits a custom menu instead of the browser menu. */
    customContextMenu = input<boolean>(false);
    /** When true, holding a block lets the user reorder it on the page. */
    reorderable = input<boolean>(false);
    /** Snapshot this instance for PDF, not the layout editor. */
    printCapture = input<boolean>(false);

    /** Logo URL or base64 */
    logoUrl = input<string | null>(null);
    /** Footer legend text */
    legend = input<string>('');
    /** Show page numbers */
    showPageNumbers = input<boolean>(false);
    /** Page number position */
    pageNumberPosition = input<string>('bottom-center');

    /** Watermark enabled */
    watermarkEnabled = input<boolean>(false);
    /** Watermark type (text or logo) */
    watermarkType = input<string>('text');
    /** Watermark text */
    watermarkText = input<string>('CONFIDENTIAL');
    /** Watermark opacity (0.01–0.5) */
    watermarkOpacity = input<number>(0.08);
    /** Watermark pattern (single or repeated) */
    watermarkPattern = input<string>('single');
    watermarkX = input<number>(250);
    watermarkY = input<number>(420);
    watermarkWidth = input<number>(280);
    watermarkHeight = input<number>(160);
    watermarkRotation = input<number>(-15);

    // Signature
    signatureEnabled = input<boolean>(false);
    signatureImage = input<string | null>(null);
    signatureX = input<number>(0);
    signatureY = input<number>(0);
    signatureWidth = input<number>(100);
    signatureHeight = input<number>(50);

    // Workspace logo (drag & drop overlay)
    logoEnabled = input<boolean>(false);
    logoX = input<number>(32);
    logoY = input<number>(32);
    logoWidth = input<number>(160);
    logoHeight = input<number>(60);
    logoRotation = input<number>(0);
    /** When true, content is auto-pushed below the logo overlay. */
    logoAutoFitContent = input<boolean>(false);
    /** Extra logos/images placed freely on the sheet. */
    sheetImages = input<ReportSheetImage[]>([]);

    /** Extra top padding (canonical 96 DPI px) added to the section content area. */
    bodyTopPadding = input<number>(0);

    /** Library cards: first sheet only, no off-screen measurement. */
    thumbnailMode = input<boolean>(false);

    // Output
    @Output() signaturePositionChange = new EventEmitter<{ x: number; y: number }>();
    @Output() signatureSizeChange = new EventEmitter<{ width: number; height: number }>();
    @Output() logoPositionChange = new EventEmitter<{ x: number; y: number }>();
    @Output() logoSizeChange = new EventEmitter<{ width: number; height: number }>();
    @Output() logoRotationChange = new EventEmitter<number>();
    @Output() watermarkPositionChange = new EventEmitter<{ x: number; y: number }>();
    @Output() watermarkSizeChange = new EventEmitter<{ width: number; height: number }>();
    @Output() watermarkRotationChange = new EventEmitter<number>();
    @Output() sheetImageChange = new EventEmitter<ReportSheetImage>();
    @Output() overlaySelect = new EventEmitter<ReportOverlayId>();
    @Output() backgroundClick = new EventEmitter<void>();
    @Output() sectionContextMenu = new EventEmitter<{ section: ReportSection; x: number; y: number }>();
    @Output() overlayContextMenu = new EventEmitter<{ overlay: ReportOverlayId; x: number; y: number }>();
    @Output() paperContextMenu = new EventEmitter<{ x: number; y: number }>();
    @Output() sectionReorder = new EventEmitter<{ fromId: string; toIndex: number }>();
    @Output() sectionFramesChange = new EventEmitter<{ id: string; frame: ReportSectionFrame }[]>();
    @Output() sectionFrameChange = new EventEmitter<{ id: string; frame: ReportSectionFrame }>();
    @Output() sectionRotationChange = new EventEmitter<{ id: string; rotation: number }>();
    @Output() cellSelect = new EventEmitter<{
        section: ReportSection;
        key: string | null;
        part: ReportCellPart;
    }>();
    @Output() inlineTextChange = new EventEmitter<ReportInlineTextChange>();

    /** Sections grouped into pages after measurement. Always has at least one
     *  page entry (which may be empty when there are no sections). */
    pages = signal<ReportSection[][]>([[]]);

    private isResizing = false;
    private isRotating = false;
    private isMoving = false;
    private resizeTarget: ReportOverlayId | null = null;
    private rotateTarget: ReportOverlayId | null = null;
    private moveTarget: ReportOverlayId | null = null;
    private startX = 0;
    private startY = 0;
    private startWidth = 0;
    private startHeight = 0;
    private startMoveX = 0;
    private startMoveY = 0;
    private rotateCenterX = 0;
    private rotateCenterY = 0;
    private startAngle = 0;
    private startRotation = 0;
    private pendingResize: { width: number; height: number } | null = null;
    private pendingMove: { x: number; y: number } | null = null;
    private resizeFrameId: number | null = null;
    private moveFrameId: number | null = null;
    private gestureEl: HTMLElement | null = null;
    private gesturePointerId: number | null = null;

    private _measureScheduled = false;
    private _measureFrameId: number | null = null;
    private _autoPinFrameId: number | null = null;
    private _autoPinAttempts = 0;
    private _overlapSweepId: number | null = null;
    private _paperResize: ResizeObserver | null = null;
    private readonly _host = inject(ElementRef<HTMLElement>);
    private _sectionDrag: {
        id: string;
        pointerId: number;
        startClientX: number;
        startClientY: number;
        startFrame: ReportSectionFrame;
        active: boolean;
    } | null = null;
    private _sectionDragMoved = false;
    private _sectionDragRaf: number | null = null;
    readonly draggingSectionId = signal<string | null>(null);
    readonly liveRotations = signal<Record<string, number>>({});
    private _sectionResize: {
        id: string;
        pointerId: number;
        handle: 'nw' | 'ne' | 'sw' | 'se';
        startClientX: number;
        startClientY: number;
        startFrame: ReportSectionFrame;
        keepRatio: boolean;
        rotation: number;
    } | null = null;
    private _sectionRotate: {
        id: string;
        pointerId: number;
        centerX: number;
        centerY: number;
        startAngle: number;
        startRotation: number;
    } | null = null;
    readonly editingText = signal<{
        sectionId: string;
        kind: ReportInlineTextKind;
        key?: string;
    } | null>(null);
    readonly inlineDraft = signal('');
    private _suppressInlineBlur = false;
    readonly liveFrames = signal<Record<string, ReportSectionFrame>>({});
    /** Guides for the block currently being dragged. Cleared when the pointer is released. */
    readonly alignmentGuides = signal<AlignmentGuides | null>(null);

    constructor() {
        // Single effect that tracks every input that influences pagination.
        // Reading the signals here registers the dependency; the actual work
        // is deferred to a rAF tick so the DOM has updated to reflect the new
        // template/section state before we measure.
        effect(() => {
            // Track inputs that should trigger a remeasure
            this.template().sections;
            this.previewData();
            this.legend();
            this.orientation();
            this.bodyTopPadding();
            this.logoEnabled();
            this.logoY();
            this.logoHeight();
            this.logoAutoFitContent();
            this.showPageNumbers();
            this.pageNumberPosition();

            // Seed pages with everything in one bucket so the visible
            // rendering has something to show before measurement completes.
            // We only re-seed when the section identity actually changes to
            // avoid clobbering a freshly-computed pagination on minor edits.
            untracked(() => this._seedPagesIfNeeded());

            this._scheduleMeasurement();
        });
    }

    ngAfterViewInit(): void {
        // Re-measure whenever the off-screen section list re-renders so we
        // pick up height changes from edits (text length, table rows, ...)
        this._measureSections.changes.subscribe(() => this._scheduleMeasurement());
        this._reportPages.changes.subscribe(() => {
            this._observePapers();
            this._scheduleMeasurement();
        });
        this._paperResize = new ResizeObserver(() => this._fitPaperBoxes());
        this._observePapers();
        this._scheduleMeasurement();
    }

    private _observePapers(): void {
        const observer = this._paperResize;
        if (!observer) return;

        for (const ref of this._reportPages?.toArray() ?? []) {
            observer.observe(ref.nativeElement);
        }
    }

    /** First paper card; used as the canonical scale + drag/resize anchor. */
    get reportPage(): ElementRef<HTMLDivElement> | undefined {
        return this._reportPages?.first;
    }

    /**
     * Keep `pages` in sync with the latest section references. The builder's
     * `updateSection` replaces a section with a fresh `{ ...s, ...updates }`
     * object that keeps the same id, so an id-only equality check would
     * silently swallow inline edits (label, dataPath, style, ...). We instead:
     *
     * - Reseed `pages` to a single bucket when the *set* of section ids
     *   changes (added / removed / reordered). Measurement re-paginates.
     * - Otherwise refresh section references in-place so the visible cards
     *   pick up the new content while preserving the existing page layout.
     */
    private _seedPagesIfNeeded(): void {
        const sections = this.template().sections || [];
        const current = this.pages();
        const flatCurrent = current.flat();
        const sameSet =
            flatCurrent.length === sections.length &&
            flatCurrent.every((s, i) => s?.id === sections[i]?.id);

        if (!sameSet) {
            this.pages.set(sections.length > 0 ? [sections.slice()] : [[]]);
            return;
        }

        const byId = new Map(sections.map((s) => [s.id, s]));
        let referencesChanged = false;
        const refreshed = current.map((page) =>
            page.map((s) => {
                const fresh = byId.get(s.id);
                if (fresh && fresh !== s) referencesChanged = true;
                return fresh ?? s;
            })
        );

        if (referencesChanged) this.pages.set(refreshed);
    }

    private _scheduleMeasurement(): void {
        if (this._measureScheduled) return;
        this._measureScheduled = true;
        if (this._measureFrameId !== null) cancelAnimationFrame(this._measureFrameId);
        this._measureFrameId = requestAnimationFrame(() => {
            this._measureScheduled = false;
            this._measureFrameId = null;
            this._performMeasurement();
        });
    }

    private _performMeasurement(): void {
        this._fitPaperBoxes();
        const sections = this.template().sections || [];
        if (sections.length === 0) {
            this._setPagesIfDifferent([[]]);
            return;
        }

        if (this.hasFreeLayout()) {
            this._setPagesIfDifferent(this._pagesFromFrames(sections));
            this._scheduleAutoPinMissingFrames();
            this._scheduleOverlapSweep();
            return;
        }

        if (this.thumbnailMode()) {
            this._setPagesIfDifferent([sections.slice()]);
            return;
        }

        const els = this._measureSections?.toArray() || [];
        if (els.length !== sections.length) {
            // Off-screen list hasn't caught up yet; try again next frame.
            this._scheduleMeasurement();
            return;
        }

        // Footer chrome must be measured before packing or the last blocks
        // spill into the Puppeteer footer margin.
        if (this._hasBottomChrome() && !this._measureLegend?.nativeElement) {
            this._scheduleMeasurement();
            return;
        }

        const heights = this._measuredHeights();
        const pageHeightDom = (this.orientation() === 'landscape' ? 210 : 297) * MM_TO_PX;
        const innerPaddingTopBottom = this._getInnerPaddingTopBottom();
        const legendHeight = this._getLegendHeight();
        const topChromeHeight = this._getTopChromeHeight();
        const firstPageExtraTop = this.viewContentPaddingTop;

        const baseAvailable = Math.max(
            0,
            pageHeightDom - innerPaddingTopBottom - legendHeight - topChromeHeight
        );
        const firstPageAvailable = Math.max(0, baseAvailable - firstPageExtraTop);

        const newPages: ReportSection[][] = [[]];
        let acc = 0;
        let isFirstPage = true;

        for (const section of sections) {
            const h = (heights.get(section.id) || 0) + SECTION_GAP_PX;
            const available = isFirstPage ? firstPageAvailable : baseAvailable;
            const currentBucket = newPages[newPages.length - 1];

            // Start a fresh page when the next section overflows AND the
            // current page already has at least one section. Sections that
            // are larger than a full page just stay on their own page and
            // overflow visually (mirrors how Chromium handles them in print).
            if (currentBucket.length > 0 && acc + h > available) {
                newPages.push([]);
                acc = 0;
                isFirstPage = false;
            }

            newPages[newPages.length - 1].push(section);
            acc += h;
        }

        this._setPagesIfDifferent(newPages);
        this._scheduleAutoPinMissingFrames();
    }

    /**
     * Natural height of every section, taken from the off-screen list that
     * renders at full A4 width, so the values are already canonical pixels.
     */
    private _measuredHeights(): Map<string, number> {
        const heights = new Map<string, number>();

        for (const ref of this._measureSections?.toArray() ?? []) {
            const el = ref.nativeElement;
            const id = el.dataset['sectionId'];
            if (!id) continue;

            heights.set(id, el.getBoundingClientRect().height);
        }

        return heights;
    }

    private _setPagesIfDifferent(newPages: ReportSection[][]): void {
        const current = this.pages();
        // Compare by reference too: same ids with stale object refs (because
        // the builder replaced a section with a spread copy) still need a
        // re-render so the visible cards pick up the latest content.
        const same =
            newPages.length === current.length &&
            newPages.every(
                (p, i) =>
                    p.length === current[i]?.length &&
                    p.every((s, j) => s.id === current[i][j].id && s === current[i][j])
            );
        if (same) return;
        this.pages.set(newPages);
    }

    private _hasBottomChrome(): boolean {
        return Boolean(this.legend()) || (this.showPageNumbers() && this.pageNumberPosition().startsWith('bottom'));
    }

    private _getLegendHeight(): number {
        if (!this._hasBottomChrome()) return 0;
        const el = this._measureLegend?.nativeElement;
        if (!el) return 0;
        return el.getBoundingClientRect().height;
    }

    private _getTopChromeHeight(): number {
        if (!(this.showPageNumbers() && this.pageNumberPosition().startsWith('top'))) return 0;
        const el = this.reportPage?.nativeElement.querySelector('[data-report-top-chrome]') as HTMLElement | null;
        return el?.getBoundingClientRect().height || 28;
    }

    private _getInnerPaddingTopBottom(): number {
        const inner = this.reportPage?.nativeElement.querySelector('[data-report-page-inner]') as HTMLElement | null;
        if (!inner) return 96;
        const style = getComputedStyle(inner);
        return (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0);
    }

    private get _scaleFactors(): { x: number; y: number } {
        const ref = this.reportPage;
        if (!ref) return { x: 1, y: 1 };

        const width = ref.nativeElement.getBoundingClientRect().width;
        if (!width) return { x: 1, y: 1 };

        // One scale for both axes. Width and height used to be divided separately,
        // which stretched the gaps between cards relative to the exact preview.
        const canonicalWidth = (this.orientation() === 'landscape' ? 297 : 210) * MM_TO_PX;
        const scale = canonicalWidth / width;

        return { x: scale, y: scale };
    }

    /**
     * Lock every sheet to the A4 ratio of its width so the box matches the scale above.
     * A flex parent would otherwise give the paper a taller height than the page.
     */
    private _fitPaperBoxes(): void {
        const ratio = this.orientation() === 'landscape' ? 210 / 297 : 297 / 210;

        for (const ref of this._reportPages?.toArray() ?? []) {
            const el = ref.nativeElement;
            const width = el.clientWidth;
            if (!width) continue;

            const height = Math.round(width * ratio);
            const next = `${height}px`;
            if (el.style.height === next && Math.abs(el.clientHeight - height) <= 1) continue;

            // max-height stops the flex column from stretching the sheet past A4.
            // Content that does not fit moves to the next page instead.
            el.style.height = next;
            el.style.maxHeight = next;
        }
    }

    // Transforming Input (Canonical) -> View (Screen)
    get viewSignatureX(): number {
        return this.signatureX() / this._scaleFactors.x;
    }

    get viewSignatureY(): number {
        return this.signatureY() / this._scaleFactors.y;
    }

    // Width/Height might need scaling too if they are stored in Canonical px
    get viewSignatureWidth(): number {
        return this.signatureWidth() / this._scaleFactors.x;
    }

    get viewSignatureHeight(): number {
        return this.signatureHeight() / this._scaleFactors.y;
    }

    get viewLogoX(): number {
        return this.logoX() / this._scaleFactors.x;
    }

    get viewLogoY(): number {
        return this.logoY() / this._scaleFactors.y;
    }

    get viewLogoWidth(): number {
        return this.logoWidth() / this._scaleFactors.x;
    }

    get viewLogoHeight(): number {
        return this.logoHeight() / this._scaleFactors.y;
    }

    get viewWatermarkX(): number {
        return this.watermarkX() / this._scaleFactors.x;
    }

    get viewWatermarkY(): number {
        return this.watermarkY() / this._scaleFactors.y;
    }

    get viewWatermarkWidth(): number {
        return this.watermarkWidth() / this._scaleFactors.x;
    }

    get viewWatermarkHeight(): number {
        return this.watermarkHeight() / this._scaleFactors.y;
    }

    sheetOverlayId(id: string): ReportOverlayId {
        return `img:${id}`;
    }

    sheetImageView(image: ReportSheetImage): { x: number; y: number; width: number; height: number } {
        const scales = this._scaleFactors;
        return {
            x: image.x / scales.x,
            y: image.y / scales.y,
            width: image.width / scales.x,
            height: image.height / scales.y,
        };
    }

    sheetImageBorder(id: string): string {
        return this.isOverlaySelected(this.sheetOverlayId(id)) ? '2px dashed rgba(99, 102, 241, 0.85)' : 'none';
    }

    private _sheetImageId(target: ReportOverlayId | null): string | null {
        return target?.startsWith('img:') ? target.slice(4) : null;
    }

    private _sheetImage(id: string | null): ReportSheetImage | null {
        if (!id) return null;
        return this.sheetImages().find((image) => image.id === id) ?? null;
    }

    get viewWatermarkFontSize(): number {
        return Math.max(14, this.viewWatermarkHeight * 0.32);
    }

    get logoRotateStyle(): string {
        return `rotate(${this.logoRotation()}deg)`;
    }

    get watermarkRotateStyle(): string {
        return `rotate(${this.watermarkRotation()}deg)`;
    }

    get logoOverlayBorder(): string {
        return this.isOverlaySelected('logo') ? '2px dashed rgba(99, 102, 241, 0.85)' : 'none';
    }

    get watermarkOverlayBorder(): string {
        return this.isOverlaySelected('watermark') ? '2px dashed rgba(217, 119, 6, 0.9)' : 'none';
    }

    get signatureOverlayBorder(): string {
        return this.isOverlaySelected('signature') ? '2px dashed rgba(99, 102, 241, 0.85)' : 'none';
    }

    isOverlaySelected(id: ReportOverlayId): boolean {
        return this.clickable() && this.selectedOverlay() === id;
    }

    selectOverlay(id: ReportOverlayId, event?: Event): void {
        event?.stopPropagation();
        if (!this.clickable()) return;
        this.overlaySelect.emit(id);
    }

    onPaperClick(event: MouseEvent): void {
        if (!this.clickable()) return;
        const target = event.target as HTMLElement | null;
        if (target?.closest('[data-overlay-box]') || target?.closest('[data-report-section]')) {
            return;
        }
        this.backgroundClick.emit();
    }

    onPaperContextMenu(event: MouseEvent): void {
        if (!this.clickable() || !this.customContextMenu()) return;
        const target = event.target as HTMLElement | null;
        if (
            target?.closest('[data-overlay-box]') ||
            target?.closest('[data-report-section]') ||
            target?.closest('[data-report-cell]')
        ) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.paperContextMenu.emit({ x: event.clientX, y: event.clientY });
    }

    /** Sheet coordinates under the pointer, for dropping new overlays. */
    canonicalPointAt(clientX: number, clientY: number): { x: number; y: number; page: number } {
        const page = this._pageIndexAtPoint(clientX, clientY, 0);
        const inner = this._pageInner(page);
        if (!inner) return { x: 48, y: 48, page };
        const origin = this._innerOrigin(inner);
        const scales = this._scaleFactors;
        return {
            page,
            x: Math.max(0, (clientX - origin.left) * scales.x),
            y: Math.max(0, (clientY - origin.top) * scales.y),
        };
    }

    onSectionActivate(section: ReportSection, event: Event): void {
        event.stopPropagation();
        if (this._sectionDragMoved) {
            this._sectionDragMoved = false;
            return;
        }
        if ((event.target as HTMLElement | null)?.closest('[data-inline-edit]')) return;
        if (!this.clickable() || !this.sectionClick()) return;
        const cell = (event.target as HTMLElement | null)?.closest('[data-report-cell]');
        if (!cell) {
            this.cellSelect.emit({ section, key: null, part: 'cell' });
        }
        this.sectionClick()!(section);
    }

    canInlineEdit(measure?: boolean): boolean {
        return Boolean(
            this.clickable() && this.sectionClick() && !this.thumbnailMode() && !this.printCapture() && !measure
        );
    }

    isEditingText(sectionId: string, kind: string, key?: string | null): boolean {
        const current = this.editingText();
        return (
            !!current &&
            current.sectionId === sectionId &&
            current.kind === kind &&
            (current.key ?? '') === (key ?? '')
        );
    }

    sheetTextContext(
        section: ReportSection,
        kind: ReportInlineTextKind | string,
        text: string,
        measure?: boolean,
        multiline = false,
        key?: string,
        fallback?: string
    ): {
        section: ReportSection;
        kind: string;
        text: string;
        measure?: boolean;
        key?: string;
        fallback?: string;
        multiline?: boolean;
    } {
        return { section, kind, text, measure, multiline, key, fallback };
    }

    startInlineEdit(
        section: ReportSection,
        kind: ReportInlineTextKind | string,
        event: Event,
        key?: string,
        fallback = ''
    ): void {
        event.preventDefault();
        event.stopPropagation();
        if (!this.canInlineEdit()) return;
        const editKind = kind as ReportInlineTextKind;
        this._clearSectionDrag();
        this._flushInlineEdit();
        this._suppressInlineBlur = true;
        this.sectionClick()?.(section);
        if (editKind === 'cellLabel' && key) {
            this.cellSelect.emit({ section, key, part: 'label' });
        } else {
            this.cellSelect.emit({ section, key: null, part: 'cell' });
        }
        this.inlineDraft.set(this._inlineSeed(section, editKind, key, fallback));
        this.editingText.set({ sectionId: section.id, kind: editKind, ...(key ? { key } : {}) });
        queueMicrotask(() => {
            this._suppressInlineBlur = false;
            this._focusInlineEditor();
        });
    }

    onInlineDraftInput(event: Event): void {
        this.inlineDraft.set((event.target as HTMLInputElement | HTMLTextAreaElement).value);
    }

    onInlineKeydown(event: KeyboardEvent, multiline: boolean): void {
        if (event.key === 'Escape') {
            event.preventDefault();
            this._suppressInlineBlur = true;
            this.editingText.set(null);
            queueMicrotask(() => {
                this._suppressInlineBlur = false;
            });
            return;
        }
        if (event.key === 'Enter' && (!multiline || event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            this.commitInlineEdit();
        }
    }

    commitInlineEdit(): void {
        if (this._suppressInlineBlur) return;
        this._flushInlineEdit();
    }

    private _flushInlineEdit(): void {
        const editing = this.editingText();
        if (!editing) return;
        const value = this.inlineDraft();
        this.editingText.set(null);
        this.inlineTextChange.emit({ ...editing, value });
    }

    private _inlineSeed(
        section: ReportSection,
        kind: ReportInlineTextKind,
        key?: string,
        fallback = ''
    ): string {
        if (kind === 'body') return section.staticContent || '';
        if (kind === 'cellLabel' && key) {
            return this.entryLabel(section, { key, label: fallback || key });
        }
        if (section.type === 'header') return section.staticContent || section.label || '';
        return section.label || '';
    }

    private _focusInlineEditor(): void {
        const el = this._host.nativeElement.querySelector('[data-inline-edit]') as
            | HTMLInputElement
            | HTMLTextAreaElement
            | null;
        if (!el) return;
        el.focus();
        el.select();
    }

    onSectionPointerDown(section: ReportSection, event: PointerEvent): void {
        if (!this.clickable() || !this.reorderable() || event.button !== 0) return;
        const origin = event.target as HTMLElement | null;
        if (origin?.closest('[data-overlay-box]') || origin?.closest('[data-overlay-handle]')) return;
        if (origin?.closest('[data-section-handle]')) return;
        if (origin?.closest('[data-inline-edit]')) return;
        this._sectionDragMoved = false;
        this._sectionDrag = {
            id: section.id,
            pointerId: event.pointerId,
            startClientX: event.clientX,
            startClientY: event.clientY,
            startFrame: this.displayFrame(section) ?? { page: 0, x: 0, y: 0, width: 0 },
            active: false,
        };
        window.addEventListener('pointermove', this._onWindowSectionMove);
        window.addEventListener('pointerup', this._onWindowSectionUp, true);
        window.addEventListener('pointercancel', this._onWindowSectionUp, true);
    }

    startSectionResize(
        section: ReportSection,
        event: PointerEvent,
        handle: 'nw' | 'ne' | 'sw' | 'se' = 'se'
    ): void {
        if (!this.clickable() || event.button !== 0) return;
        event.preventDefault();
        event.stopPropagation();
        const frame = this.displayFrame(section);
        if (!frame) return;
        this._clearSectionDrag();
        this._sectionResize = {
            id: section.id,
            pointerId: event.pointerId,
            handle,
            startClientX: event.clientX,
            startClientY: event.clientY,
            startFrame: { ...frame, width: frame.width || 48, height: frame.height || 48 },
            keepRatio: this.shapeKeepRatio(section),
            rotation: this.sectionRotation(section),
        };
        document.body.style.userSelect = 'none';
        document.body.style.cursor =
            handle === 'ne' || handle === 'sw' ? 'nesw-resize' : 'nwse-resize';
        window.addEventListener('pointermove', this._onWindowSectionResizeMove);
        window.addEventListener('pointerup', this._onWindowSectionResizeUp, true);
        window.addEventListener('pointercancel', this._onWindowSectionResizeUp, true);
    }

    startSectionRotate(section: ReportSection, event: PointerEvent): void {
        if (!this.clickable() || event.button !== 0) return;
        event.preventDefault();
        event.stopPropagation();
        const box = (event.currentTarget as HTMLElement).closest('[data-report-section]') as HTMLElement | null;
        if (!box) return;
        const rect = box.getBoundingClientRect();
        this._clearSectionDrag();
        this._sectionRotate = {
            id: section.id,
            pointerId: event.pointerId,
            centerX: rect.left + rect.width / 2,
            centerY: rect.top + rect.height / 2,
            startAngle: Math.atan2(event.clientY - (rect.top + rect.height / 2), event.clientX - (rect.left + rect.width / 2)),
            startRotation: this.sectionRotation(section),
        };
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'grabbing';
        window.addEventListener('pointermove', this._onWindowSectionRotateMove);
        window.addEventListener('pointerup', this._onWindowSectionRotateUp, true);
        window.addEventListener('pointercancel', this._onWindowSectionRotateUp, true);
    }

    private _onWindowSectionResizeMove = (event: PointerEvent): void => {
        const resize = this._sectionResize;
        if (!resize || event.pointerId !== resize.pointerId) return;
        event.preventDefault();
        const scales = this._scaleFactors;
        const start = resize.startFrame;
        const startW = start.width || 48;
        const startH = start.height || 48;
        const rad = (-resize.rotation * Math.PI) / 180;
        const dx = (event.clientX - resize.startClientX) * scales.x;
        const dy = (event.clientY - resize.startClientY) * scales.y;
        const localX = dx * Math.cos(rad) - dy * Math.sin(rad);
        const localY = dx * Math.sin(rad) + dy * Math.cos(rad);
        let width = startW;
        let height = startH;
        let x = start.x;
        let y = start.y;
        if (resize.handle.includes('e')) width = startW + localX;
        if (resize.handle.includes('w')) {
            width = startW - localX;
            x = start.x + localX;
        }
        if (resize.handle.includes('s')) height = startH + localY;
        if (resize.handle.includes('n')) {
            height = startH - localY;
            y = start.y + localY;
        }
        if (resize.keepRatio) {
            const ratio = startW / Math.max(1, startH);
            const fromWidth = Math.abs(width - startW) >= Math.abs(height - startH);
            if (fromWidth) height = width / ratio;
            else width = height * ratio;
            if (resize.handle.includes('w')) x = start.x + startW - width;
            if (resize.handle.includes('n')) y = start.y + startH - height;
        }
        width = Math.max(12, width);
        height = Math.max(12, height);
        this.liveFrames.update((current) => ({
            ...current,
            [resize.id]: { ...start, x, y, width, height },
        }));
    };

    private _onWindowSectionResizeUp = (event: PointerEvent): void => {
        const resize = this._sectionResize;
        if (!resize || event.pointerId !== resize.pointerId) return;
        this._onWindowSectionResizeMove(event);
        const frame = this.liveFrames()[resize.id];
        this._sectionResize = null;
        window.removeEventListener('pointermove', this._onWindowSectionResizeMove);
        window.removeEventListener('pointerup', this._onWindowSectionResizeUp, true);
        window.removeEventListener('pointercancel', this._onWindowSectionResizeUp, true);
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
        if (frame) this.sectionFrameChange.emit({ id: resize.id, frame });
        this.liveFrames.set({});
    };

    private _onWindowSectionRotateMove = (event: PointerEvent): void => {
        const rotate = this._sectionRotate;
        if (!rotate || event.pointerId !== rotate.pointerId) return;
        event.preventDefault();
        const angle = Math.atan2(event.clientY - rotate.centerY, event.clientX - rotate.centerX);
        const degrees = rotate.startRotation + ((angle - rotate.startAngle) * 180) / Math.PI;
        const next = Math.round(((degrees % 360) + 360) % 360);
        this.liveRotations.update((current) => ({ ...current, [rotate.id]: next > 180 ? next - 360 : next }));
    };

    private _onWindowSectionRotateUp = (event: PointerEvent): void => {
        const rotate = this._sectionRotate;
        if (!rotate || event.pointerId !== rotate.pointerId) return;
        this._onWindowSectionRotateMove(event);
        const rotation = this.liveRotations()[rotate.id] ?? 0;
        this._sectionRotate = null;
        window.removeEventListener('pointermove', this._onWindowSectionRotateMove);
        window.removeEventListener('pointerup', this._onWindowSectionRotateUp, true);
        window.removeEventListener('pointercancel', this._onWindowSectionRotateUp, true);
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
        this.sectionRotationChange.emit({ id: rotate.id, rotation });
        this.liveRotations.set({});
    };

    private _onWindowSectionMove = (event: PointerEvent): void => {
        this.onSectionPointerMove(event);
    };

    private _onWindowSectionUp = (event: PointerEvent): void => {
        this.onSectionPointerUp(event);
    };

    onSectionPointerMove(event: PointerEvent): void {
        const drag = this._sectionDrag;
        if (!drag || event.pointerId !== drag.pointerId) return;
        if (!drag.active) {
            if (Math.hypot(event.clientX - drag.startClientX, event.clientY - drag.startClientY) < 8) {
                return;
            }
            const start = this._allSectionsHaveFrames()
                ? this.liveFrames()[drag.id] ??
                  this.template().sections?.find((section) => section.id === drag.id)?.frame ??
                  null
                : this._pinFlowLayout(drag.id);
            if (!start) {
                this._clearSectionDrag();
                return;
            }
            drag.startFrame = { ...start, height: this._dragHeight(drag.id, start) };
            drag.active = true;
            this._sectionDragMoved = true;
            if (this.editingText()) this.commitInlineEdit();
            this.draggingSectionId.set(drag.id);
            document.body.style.userSelect = 'none';
            document.body.style.cursor = 'grabbing';
        }
        event.preventDefault();
        this._applySectionDrag(drag, event.clientX, event.clientY);
    }

    onSectionPointerUp(event: PointerEvent): void {
        const drag = this._sectionDrag;
        if (!drag || event.pointerId !== drag.pointerId) return;
        const wasActive = drag.active;
        if (wasActive) {
            this._applySectionDrag(drag, event.clientX, event.clientY);
        }
        const updates = Object.entries(this.liveFrames()).map(([id, frame]) => ({ id, frame }));
        this._stopSectionDragListeners();
        this._sectionDrag = null;
        this.draggingSectionId.set(null);
        this.alignmentGuides.set(null);
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
        if (!wasActive) {
            this.liveFrames.set({});
            return;
        }
        const packed = this.resolveOverlaps();
        if (!packed) this.sectionFramesChange.emit(this._framesForEmit(updates));
        this.liveFrames.set({});
    }

    isSectionDropBefore(_section: ReportSection): boolean {
        return false;
    }

    isSectionDropAfter(_section: ReportSection): boolean {
        return false;
    }

    hasFreeLayout(): boolean {
        return this._usesPinnedFrames() || Object.keys(this.liveFrames()).length > 0;
    }

    visiblePages(): ReportSection[][] {
        const pages = this.pages();
        if (!this.thumbnailMode()) return pages;
        return pages.length ? [pages[0]] : [[]];
    }

    private _pagesFromFrames(sections: ReportSection[]): ReportSection[][] {
        let pageCount = 1;
        for (const section of sections) {
            pageCount = Math.max(pageCount, (this.displayFrame(section)?.page ?? 0) + 1);
        }
        const newPages: ReportSection[][] = Array.from({ length: pageCount }, () => []);
        for (const section of sections) {
            const page = Math.min(Math.max(0, this.displayFrame(section)?.page ?? 0), pageCount - 1);
            newPages[page].push(section);
        }
        const filled = newPages.filter((page) => page.length > 0);
        return filled.length ? filled : [[]];
    }

    private _usesPinnedFrames(): boolean {
        return (this.template().sections ?? []).some((section) => Boolean(section.frame));
    }

    private _allSectionsHaveFrames(): boolean {
        const sections = this.template().sections ?? [];
        return sections.length > 0 && sections.every((section) => Boolean(this.displayFrame(section)));
    }

    displayFrame(section: ReportSection): ReportSectionFrame | null {
        return this.liveFrames()[section.id] ?? section.frame ?? null;
    }

    sectionHostStyle(section: ReportSection): Record<string, string> {
        const frame = this.displayFrame(section);
        if (!this.hasFreeLayout() || !frame) return {};
        const x = Number(frame.x);
        const y = Number(frame.y);
        if (!Number.isFinite(x) || !Number.isFinite(y)) return {};
        const scales = this._scaleFactors;
        const width = Number(frame.width) > 0 ? Number(frame.width) / scales.x : 0;
        const frameHeight = Number(frame.height) > 0 ? Number(frame.height) / scales.y : 0;
        const ink = this._visibleInkHeight(section.id) / scales.y;
        const height = ink > 0 && frameHeight > ink ? ink : frameHeight;
        const rotation = this.sectionRotation(section);
        const spansPage = section.type === 'divider';
        const style: Record<string, string> = {
            position: 'absolute',
            left: spansPage ? '0px' : `${x / scales.x}px`,
            top: `${y / scales.y}px`,
            width: spansPage || !width ? '100%' : `${width}px`,
            marginBottom: '0px',
            zIndex:
                this.draggingSectionId() === section.id
                    ? '40'
                    : this.selectedSectionId() === section.id
                      ? '25'
                      : '1',
        };
        if (height) style['height'] = `${height}px`;
        if (section.type === 'shape') style['overflow'] = 'visible';
        if (section.type !== 'shape' && rotation) {
            style['transform'] = `rotate(${rotation}deg)`;
            style['transform-origin'] = 'center center';
        }
        return style;
    }

    sectionRotation(section: ReportSection): number {
        const live = this.liveRotations()[section.id];
        if (Number.isFinite(live)) return live;
        const stored = Number(section.style?.rotation);
        return Number.isFinite(stored) ? stored : 0;
    }

    isShapeSection(section: ReportSection): boolean {
        return section.type === 'shape';
    }

    private _applySectionDrag(
        drag: { id: string; startClientX: number; startClientY: number; startFrame: ReportSectionFrame },
        clientX: number,
        clientY: number
    ): void {
        const scales = this._scaleFactors;
        const width = drag.startFrame.width || 240;
        const height = this._dragHeight(drag.id, drag.startFrame);
        const fromPage = drag.startFrame.page ?? 0;
        const toPage = this._pageForDrag(clientX, clientY, fromPage);
        const creating = toPage > fromPage && toPage >= (this._reportPages?.length ?? 0);
        let x = drag.startFrame.x + (clientX - drag.startClientX) * scales.x;
        let y = creating ? PAGE_INSET_PX : drag.startFrame.y + (clientY - drag.startClientY) * scales.y;
        const fromInner = this._pageInner(fromPage);
        const toInner = this._pageInner(toPage);
        if (!creating && fromInner && toInner && fromInner !== toInner) {
            const fromOrigin = this._innerOrigin(fromInner);
            const toOrigin = this._innerOrigin(toInner);
            x += (fromOrigin.left - toOrigin.left) * scales.x;
            y += (fromOrigin.top - toOrigin.top) * scales.y;
        }
        const placed = this._constrainDraggedFrame(drag.id, toPage, x, y, width, height, toInner);
        x = placed.x;
        y = placed.y;
        const next: ReportSectionFrame = {
            ...drag.startFrame,
            page: toPage,
            x,
            y,
            width,
            height,
        };
        this.liveFrames.update((current) => ({ ...current, [drag.id]: next }));
        if (toPage !== fromPage) {
            this._setPagesIfDifferent(this._pagesFromFrames(this.template().sections || []));
            drag.startFrame = next;
            drag.startClientX = clientX;
            drag.startClientY = clientY;
        }
    }

    private _innerOrigin(inner: HTMLElement): { left: number; top: number } {
        const host = inner.getBoundingClientRect();
        const style = getComputedStyle(inner);
        return {
            left: host.left + (parseFloat(style.borderLeftWidth) || 0),
            top: host.top + (parseFloat(style.borderTopWidth) || 0),
        };
    }

    private _pageInner(pageIndex: number): HTMLElement | null {
        const ref = this._reportPages?.toArray()[pageIndex];
        if (!ref) return null;
        return (ref.nativeElement.querySelector('[data-report-page-inner]') as HTMLElement | null) ?? null;
    }

    /** Paper under the pointer. Stays on `fallback` until the cursor enters a sheet. */
    private _pageIndexAtPoint(clientX: number, clientY: number, fallback: number): number {
        const hit = this._sheetIndexAtPoint(clientX, clientY);
        return hit == null ? fallback : hit;
    }

    /**
     * Sheet the pointer is on, or one past the last sheet when it has gone below
     * the page. That extra index is what opens the next A4 page.
     */
    private _pageForDrag(clientX: number, clientY: number, fallback: number): number {
        const pages = this._reportPages?.toArray() ?? [];
        const hit = this._sheetIndexAtPoint(clientX, clientY);
        if (hit != null) return hit;
        if (!pages.length) return fallback;

        const last = pages[pages.length - 1].nativeElement.getBoundingClientRect();
        const below =
            clientY > last.bottom && clientX >= last.left && clientX <= last.right;
        return below ? pages.length : fallback;
    }

    private _sheetIndexAtPoint(clientX: number, clientY: number): number | null {
        const pages = this._reportPages?.toArray() ?? [];
        for (let index = 0; index < pages.length; index++) {
            const rect = pages[index].nativeElement.getBoundingClientRect();
            if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
                return index;
            }
        }
        return null;
    }

    /** Height of the card on the sheet. The saved frame can be taller than that card. */
    private _dragHeight(sectionId: string, frame: ReportSectionFrame): number {
        const ink = this._visibleInkHeight(sectionId);
        if (ink > 0) return ink;
        return Number(frame.height) > 0 ? Number(frame.height) : 80;
    }

    /**
     * Settle the sheet into the layout the renderer prints.
     *
     * The PDF pushes covered blocks apart, so the canvas has to do the same or
     * the two stop matching. It runs once the pointer is released, never during a
     * drag, and stops as soon as a sweep finds nothing left to move.
     */
    private _scheduleOverlapSweep(): void {
        if (!this.reorderable() || this.thumbnailMode()) return;
        if (this._sectionDrag || this._sectionResize || this._sectionRotate) return;
        if (this._overlapSweepId !== null) cancelAnimationFrame(this._overlapSweepId);

        this._overlapSweepId = requestAnimationFrame(() => {
            this._overlapSweepId = null;
            if (this._sectionDrag || this._sectionResize || this._sectionRotate) return;

            this.resolveOverlaps();
        });
    }

    /**
     * Push blocks that cover each other down their page until nothing overlaps.
     *
     * Free placement may stack boxes on purpose, so only blocks whose ink
     * actually intersects are moved, and decorative shapes are left alone.
     * @returns How many blocks moved.
     */
    resolveOverlaps(): number {
        const boxes = this._overlapBoxes();
        const limit = this._pageHeightPx() - PAGE_INSET_PX;
        const placed: { page: number; left: number; right: number; top: number; bottom: number }[] = [];
        const updates: { id: string; frame: ReportSectionFrame }[] = [];

        for (const box of boxes) {
            const spot = this._spotBelowBlockers(placed, box, limit);

            placed.push({
                page: spot.page,
                left: box.left,
                right: box.right,
                top: spot.top,
                bottom: spot.top + box.height,
            });

            if (Math.round(spot.top) === Math.round(box.top) && spot.page === box.page) continue;

            updates.push({
                id: box.id,
                frame: { ...box.frame, y: spot.top, page: spot.page },
            });
        }

        if (!updates.length) return 0;

        this.sectionFramesChange.emit(this._framesForEmit(updates));

        return updates.length;
    }

    /**
     * Where a new content block goes: under the lowest block already on the sheet.
     * The height is the tallest block of the same type, so a second card starts
     * below the first card's ink instead of on top of it.
     */
    frameBelowContent(type?: string): ReportSectionFrame | null {
        const boxes = this._overlapBoxes();
        if (!boxes.length) return null;

        const pageHeight = this._pageHeightPx();
        const lowest = boxes.reduce((best, box) =>
            box.page * pageHeight + box.top + box.height > best.page * pageHeight + best.top + best.height ? box : best
        );
        const sameType = type ? boxes.filter((box) => box.type === type) : [];
        const height = sameType.length ? Math.max(...sameType.map((box) => box.height)) : lowest.height || 80;
        let y = lowest.top + lowest.height + SECTION_GAP_PX;
        let page = lowest.page;

        if (y + height > pageHeight - PAGE_INSET_PX) {
            page += 1;
            y = PAGE_INSET_PX;
        }

        return {
            x: lowest.left,
            y,
            width: Math.max(0, lowest.right - lowest.left),
            height,
            page,
        };
    }

    /** First free top for a box. A box that does not fit moves to the next page. */
    private _spotBelowBlockers(
        placed: { page: number; left: number; right: number; top: number; bottom: number }[],
        box: { page: number; left: number; right: number; top: number; height: number },
        limit: number
    ): { top: number; page: number } {
        let top = box.top;
        let page = box.page;

        if (box.height > 0 && box.height < limit && top + box.height > limit) {
            page += 1;
            top = PAGE_INSET_PX;
        }

        for (let pass = 0; pass <= placed.length + 1; pass++) {
            const blocker = placed.find(
                (rect) =>
                    rect.page === page &&
                    rect.right > box.left &&
                    rect.left < box.right &&
                    rect.bottom > top &&
                    rect.top < top + box.height
            );
            if (!blocker) break;

            const below = blocker.bottom + SECTION_GAP_PX;

            if (box.height < limit && below + box.height > limit) {
                page += 1;
                top = PAGE_INSET_PX;
                continue;
            }

            top = below;
        }

        return { top, page };
    }

    /** Placed blocks as canonical rectangles, topmost first. A frame with no width prints full bleed. */
    private _overlapBoxes(): {
        id: string;
        type: string;
        frame: ReportSectionFrame;
        page: number;
        left: number;
        right: number;
        top: number;
        height: number;
    }[] {
        const pageWidth = (this.orientation() === 'landscape' ? 297 : 210) * MM_TO_PX;

        return (this.template().sections ?? [])
            .filter((section) => !OVERLAP_EXEMPT_TYPES.has(section.type))
            .map((section) => ({ section, frame: this.displayFrame(section) }))
            .filter((item): item is { section: ReportSection; frame: ReportSectionFrame } => Boolean(item.frame))
            .map(({ section, frame }) => {
                const stored = Number(frame.height) > 0 ? Number(frame.height) : 0;
                const ink = this._visibleInkHeight(section.id);

                return {
                    id: section.id,
                    type: section.type,
                    frame,
                    page: frame.page ?? 0,
                    left: frame.x,
                    right: frame.x + (Number(frame.width) > 0 ? Number(frame.width) : pageWidth),
                    top: frame.y,
                    height: ink > 0 ? ink : stored,
                };
            })
            .sort((a, b) => a.page - b.page || a.top - b.top || a.left - b.left);
    }

    /**
     * Canonical height of the card you can see on the sheet.
     *
     * The saved frame can be taller than that card. Packing against the frame
     * is what leaves a gap the preview does not have, and then refuses to let
     * the next card move up into it.
     */
    private _visibleInkHeight(sectionId: string): number {
        const selector = `[data-report-section][data-section-id="${CSS.escape(sectionId)}"]`;
        let host: HTMLElement | null = null;
        for (const ref of this._reportPages?.toArray() ?? []) {
            host = ref.nativeElement.querySelector(selector) as HTMLElement | null;
            if (host) break;
        }
        if (!host) return 0;

        let bottom = 0;
        for (const node of Array.from(host.children)) {
            const child = node as HTMLElement;
            if (child.hasAttribute('data-print-hide') || child.hasAttribute('data-section-handle')) continue;
            bottom = Math.max(bottom, child.offsetTop + child.offsetHeight);
        }

        if (!bottom) return 0;
        return bottom * this._scaleFactors.y;
    }

    /** Drop trailing / leading empty sheets and persist 0-based page indexes. */
    private _framesForEmit(updates: { id: string; frame: ReportSectionFrame }[]): { id: string; frame: ReportSectionFrame }[] {
        const merged: Record<string, ReportSectionFrame> = {};
        for (const section of this.template().sections ?? []) {
            const frame = this.liveFrames()[section.id] ?? section.frame;
            if (frame) merged[section.id] = frame;
        }
        for (const item of updates) {
            merged[item.id] = item.frame;
        }
        const used = [...new Set(Object.values(merged).map((frame) => frame.page ?? 0))].sort((a, b) => a - b);
        const remap = new Map(used.map((page, index) => [page, index]));
        return Object.entries(merged).map(([id, frame]) => ({
            id,
            frame: { ...frame, page: remap.get(frame.page ?? 0) ?? 0 },
        }));
    }

    /**
     * Layout coordinates of a block inside its page, in the same space that
     * `position:absolute; left/top` uses (the inner padding box).
     *
     * `getBoundingClientRect()` is avoided here: when the first drag pins a
     * flow layout into free placement, viewport rects can include ancestor
     * zoom/scale and send every sibling off the visible sheet.
     */
    private _sectionCssBox(el: HTMLElement): { x: number; y: number; width: number; height: number; page: number } {
        const inner = el.closest('[data-report-page-inner]') as HTMLElement | null;
        const pages = this._reportPages?.toArray() ?? [];
        const page = Math.max(
            0,
            pages.findIndex((ref) => ref.nativeElement.contains(el))
        );
        const width = el.offsetWidth;
        const height = el.offsetHeight;
        if (!inner) {
            return { x: 0, y: 0, width, height, page };
        }
        let x = el.offsetLeft;
        let y = el.offsetTop;
        if (el.offsetParent !== inner) {
            const box = el.getBoundingClientRect();
            const host = inner.getBoundingClientRect();
            const visualScaleX = host.width / (inner.offsetWidth || host.width || 1) || 1;
            const visualScaleY = host.height / (inner.offsetHeight || host.height || 1) || 1;
            const style = getComputedStyle(inner);
            x = (box.left - host.left - (parseFloat(style.borderLeftWidth) || 0)) / visualScaleX;
            y = (box.top - host.top - (parseFloat(style.borderTopWidth) || 0)) / visualScaleY;
        }
        return { x, y, width, height, page };
    }

    private _snapshotSectionFrames(): { id: string; frame: ReportSectionFrame }[] {
        const scales = this._scaleFactors;
        const result: { id: string; frame: ReportSectionFrame }[] = [];
        const pages = this._reportPages?.toArray() ?? [];
        pages.forEach((pageRef, pageIndex) => {
            pageRef.nativeElement.querySelectorAll('[data-report-section]').forEach((node) => {
                const el = node as HTMLElement;
                const id = el.dataset['sectionId'];
                if (!id) return;
                const placed = this._sectionCssBox(el);
                result.push({
                    id,
                    frame: {
                        page: placed.page || pageIndex,
                        x: placed.x * scales.x,
                        y: placed.y * scales.y,
                        width: placed.width * scales.x,
                        height: placed.height * scales.y,
                    },
                });
            });
        });
        return result;
    }

    /**
     * New reports add endpoint blocks without saved frames (flow layout).
     * Saved templates already have frames, which is why editing those feels
     * stable. Capture the stacked layout after pagination so the first drag
     * is the same as opening a stored template.
     */
    private _scheduleAutoPinMissingFrames(): void {
        if (!this.reorderable() || this.thumbnailMode() || this._sectionDrag) return;
        const sections = this.template().sections ?? [];
        if (!sections.length || sections.every((section) => Boolean(this.displayFrame(section)))) {
            this._autoPinAttempts = 0;
            return;
        }
        if (this._autoPinAttempts > 8) return;
        if (this._autoPinFrameId !== null) cancelAnimationFrame(this._autoPinFrameId);
        this._autoPinFrameId = requestAnimationFrame(() => {
            this._autoPinFrameId = requestAnimationFrame(() => {
                this._autoPinFrameId = null;
                this._autoPinMissingFrames();
            });
        });
    }

    private _autoPinMissingFrames(): void {
        if (this._sectionDrag || !this.reorderable() || this.thumbnailMode()) return;
        const sections = this.template().sections ?? [];
        if (!sections.length || sections.every((section) => Boolean(this.displayFrame(section)))) {
            this._autoPinAttempts = 0;
            return;
        }
        const pinned = this._snapshotSectionFrames();
        if (!pinned.length) {
            this._autoPinAttempts += 1;
            this._scheduleAutoPinMissingFrames();
            return;
        }
        const byId = new Map(pinned.map((item) => [item.id, item.frame]));
        const missing = sections.filter((section) => !this.displayFrame(section) && byId.has(section.id));
        if (!missing.length) {
            this._autoPinAttempts += 1;
            this._scheduleAutoPinMissingFrames();
            return;
        }
        this._autoPinAttempts = 0;
        this.sectionFramesChange.emit(this._framesForEmit(this._framesBelowPlacedContent(missing, byId)));
    }

    /**
     * A block added to a page that already uses frames is the only one left in
     * normal flow, so it measures its position as if the framed blocks were not
     * there and lands on top of them. Stack it under the placed content instead.
     * @param missing Sections that still need a frame, in document order.
     * @param measured Flow-measured frames, keyed by section id.
     */
    private _framesBelowPlacedContent(
        missing: ReportSection[],
        measured: Map<string, ReportSectionFrame>
    ): { id: string; frame: ReportSectionFrame }[] {
        const anchors = (this.template().sections ?? [])
            .map((section) => this.displayFrame(section))
            .filter((frame): frame is ReportSectionFrame => Boolean(frame));

        if (!anchors.length) {
            return missing.map((section) => ({ id: section.id, frame: measured.get(section.id)! }));
        }

        const boxes = this._overlapBoxes();
        if (!boxes.length) {
            return missing.map((section) => ({ id: section.id, frame: measured.get(section.id)! }));
        }

        const page = Math.max(...boxes.map((box) => box.page));
        const onPage = boxes.filter((box) => box.page === page);
        const left = Math.min(...onPage.map((box) => box.left));
        const inset = Math.min(...onPage.map((box) => box.top));
        const pageHeight = this._pageHeightPx();
        let cursor = Math.max(...onPage.map((box) => box.top + box.height));
        let cursorPage = page;

        return missing.map((section) => {
            const base = measured.get(section.id)!;
            const height = base.height || 0;
            let y = cursor + SECTION_GAP_PX;

            if (y + height > pageHeight - inset) {
                cursorPage += 1;
                y = inset;
            }

            cursor = y + height;

            return { id: section.id, frame: { ...base, page: cursorPage, x: left, y, height } };
        });
    }

    /**
     * Freeze every block at its current on-sheet position before the first
     * free-move. Without this, only the dragged block gets a frame and the
     * rest jump into absolute layout with (0,0) or viewport-scaled coords.
     */
    private _pinFlowLayout(dragId: string): ReportSectionFrame | null {
        const pinned = this._snapshotSectionFrames();
        const merged: Record<string, ReportSectionFrame> = { ...this.liveFrames() };
        for (const section of this.template().sections ?? []) {
            const current = merged[section.id] ?? section.frame;
            if (current) {
                merged[section.id] = current;
            }
        }
        for (const item of pinned) {
            if (!merged[item.id]) {
                merged[item.id] = item.frame;
            }
        }
        const start = merged[dragId] ?? pinned.find((item) => item.id === dragId)?.frame ?? null;
        if (!start) return null;
        merged[dragId] = start;
        this.liveFrames.set(merged);
        return start;
    }

    private _stopSectionDragListeners(): void {
        window.removeEventListener('pointermove', this._onWindowSectionMove);
        window.removeEventListener('pointerup', this._onWindowSectionUp, true);
        window.removeEventListener('pointercancel', this._onWindowSectionUp, true);
        if (this._sectionDragRaf !== null) {
            cancelAnimationFrame(this._sectionDragRaf);
            this._sectionDragRaf = null;
        }
    }

    private _clearSectionDrag(): void {
        this._stopSectionDragListeners();
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
        this._sectionDrag = null;
        this.draggingSectionId.set(null);
        this.alignmentGuides.set(null);
        this.liveFrames.set({});
    }

    /**
     * Snap a moving block to nearby edges, then keep it on the page.
     * A guide is kept only when the snap survives the page clamp.
     */
    private _constrainDraggedFrame(
        dragId: string,
        page: number,
        x: number,
        y: number,
        width: number,
        height: number,
        inner: HTMLElement | null
    ): { x: number; y: number } {
        const scales = this._scaleFactors;
        const snappedX = snapToTargets(
            x,
            width,
            this._alignmentTargets('x', dragId, page, inner, scales.x),
            ALIGN_SNAP_SCREEN_PX * scales.x
        );
        const snappedY = snapToTargets(
            y,
            height,
            this._alignmentTargets('y', dragId, page, inner, scales.y),
            ALIGN_SNAP_SCREEN_PX * scales.y
        );
        let nextX = snappedX.origin;
        let nextY = snappedY.origin;
        let vertical = snappedX.guide == null ? null : snappedX.guide / scales.x;
        let horizontal = snappedY.guide == null ? null : snappedY.guide / scales.y;

        if (inner) {
            const maxX = Math.max(0, inner.clientWidth * scales.x - width);
            const clampedX = Math.min(Math.max(0, nextX), maxX);
            if (clampedX !== nextX) vertical = null;
            nextX = clampedX;
        }

        const maxY = Math.max(0, this._pageHeightPx() - Math.min(height, 24));
        const clampedY = Math.min(Math.max(0, nextY), maxY);
        if (clampedY !== nextY) horizontal = null;
        nextY = clampedY;

        const freed = this._freeOfContent(dragId, page, nextX, nextY, width, height);
        if (freed.y !== nextY) horizontal = null;
        nextY = freed.y;

        this.alignmentGuides.set({ page, vertical, horizontal });

        return { x: nextX, y: nextY };
    }

    /**
     * Keep a dragged block on the side of another card that the pointer asked for.
     * It stops at that edge instead of jumping to the opposite side of the box.
     */
    private _freeOfContent(
        dragId: string,
        page: number,
        x: number,
        y: number,
        width: number,
        height: number
    ): { y: number } {
        const limit = this._pageHeightPx() - PAGE_INSET_PX;
        const others = this._overlapBoxes().filter((box) => box.id !== dragId && box.page === page);
        let top = y;

        for (let pass = 0; pass <= others.length; pass++) {
            const blocker = others.find(
                (rect) =>
                    rect.right > x &&
                    rect.left < x + width &&
                    rect.top + rect.height > top &&
                    rect.top < top + height
            );
            if (!blocker) break;

            const edge = this._edgeAgainstBlocker(y, height, blocker, limit);
            if (edge == null || edge === top) break;
            top = edge;
        }

        return { y: top };
    }

    /** The free edge on the side of the blocker the pointer is aiming at. */
    private _edgeAgainstBlocker(
        desired: number,
        height: number,
        blocker: { top: number; height: number },
        limit: number
    ): number | null {
        const above = blocker.top - height - SECTION_GAP_PX;
        const below = blocker.top + blocker.height + SECTION_GAP_PX;
        const wantBelow = desired + height / 2 >= blocker.top + blocker.height / 2;

        if (wantBelow && below + height <= limit) return below;
        if (above >= 0) return above;
        return null;
    }

    private _pageHeightPx(): number {
        return (this.orientation() === 'landscape' ? 210 : 297) * MM_TO_PX;
    }

    /**
     * Edges a dragged block can lock to: the page sides, plus each other block's
     * start, center, and end on this page.
     */
    private _alignmentTargets(
        axis: 'x' | 'y',
        dragId: string,
        page: number,
        inner: HTMLElement | null,
        scale: number
    ): number[] {
        const targets = [0];
        if (inner) {
            const size = axis === 'x' ? inner.clientWidth : inner.clientHeight;
            targets.push(size * scale);
        }

        for (const section of this.template().sections ?? []) {
            if (section.id === dragId) continue;
            const frame = this.liveFrames()[section.id] ?? section.frame;
            if (!frame || (frame.page ?? 0) !== page) continue;

            const start = axis === 'x' ? frame.x : frame.y;
            const size = axis === 'x' ? frame.width || 0 : frame.height || 0;
            targets.push(start, start + size / 2, start + size);
        }

        return targets;
    }

    onSectionContextMenu(section: ReportSection, event: MouseEvent): void {
        if (!this.clickable() || !this.customContextMenu()) return;
        event.preventDefault();
        event.stopPropagation();
        this.sectionClick()?.(section);
        this.sectionContextMenu.emit({ section, x: event.clientX, y: event.clientY });
    }

    onOverlayContextMenu(id: ReportOverlayId, event: MouseEvent): void {
        if (!this.clickable() || !this.customContextMenu()) return;
        event.preventDefault();
        event.stopPropagation();
        this.overlaySelect.emit(id);
        this.overlayContextMenu.emit({ overlay: id, x: event.clientX, y: event.clientY });
    }

    /**
     * Effective top padding applied to the section content area, in canonical 96 DPI px.
     *
     * Behaviour: explicit wins.
     * - When `bodyTopPadding` > 0, the slider value is used directly (auto-fit is ignored).
     * - When `bodyTopPadding` is 0 and auto-fit is on with a visible logo overlay, the
     *   content is pushed down to clear the logo (`logoY + logoHeight + 16`).
     * - Otherwise 0.
     */
    get effectiveContentPaddingTop(): number {
        const base = this.bodyTopPadding() || 0;
        if (base > 0) return base;
        if (
            this.logoEnabled() &&
            this.logoAutoFitContent() &&
            this.logoUrl()
        ) {
            return (this.logoY() || 0) + (this.logoHeight() || 0) + 16;
        }
        return 0;
    }

    /** Same as `effectiveContentPaddingTop` but scaled down to the on-screen preview. */
    get viewContentPaddingTop(): number {
        return this.effectiveContentPaddingTop / this._scaleFactors.y;
    }

    startMove(event: PointerEvent, target: ReportOverlayId) {
        if (!this.clickable() || this.isResizing || this.isRotating || event.button !== 0) return;
        const origin = event.target as HTMLElement | null;
        if (origin?.closest('[data-overlay-handle]')) return;

        this.overlaySelect.emit(target);
        this.isMoving = true;
        this.moveTarget = target;
        this.startX = event.clientX;
        this.startY = event.clientY;

        const extra = this._sheetImage(this._sheetImageId(target));
        if (target === 'logo') {
            this.startMoveX = this.logoX();
            this.startMoveY = this.logoY();
        } else if (target === 'watermark') {
            this.startMoveX = this.watermarkX();
            this.startMoveY = this.watermarkY();
        } else if (extra) {
            this.startMoveX = extra.x;
            this.startMoveY = extra.y;
        } else {
            this.startMoveX = this.signatureX();
            this.startMoveY = this.signatureY();
        }

        this._capturePointer(event, this.onMove, this.stopMove);
    }

    private onMove = (event: PointerEvent) => {
        if (!this.isMoving) return;
        const scales = this._scaleFactors;
        this.pendingMove = {
            x: Math.max(0, Math.round(this.startMoveX + (event.clientX - this.startX) * scales.x)),
            y: Math.max(0, Math.round(this.startMoveY + (event.clientY - this.startY) * scales.y)),
        };
        if (this.moveFrameId !== null) return;
        this.moveFrameId = requestAnimationFrame(this._flushMove);
    };

    private _flushMove = () => {
        this.moveFrameId = null;
        const payload = this.pendingMove;
        if (!payload || !this.moveTarget) return;
        this.pendingMove = null;
        this._emitMove(payload);
    };

    private _emitMove(payload: { x: number; y: number }) {
        const extraId = this._sheetImageId(this.moveTarget);
        const extra = this._sheetImage(extraId);
        if (this.moveTarget === 'logo') {
            this.logoPositionChange.emit(payload);
        } else if (this.moveTarget === 'watermark') {
            this.watermarkPositionChange.emit(payload);
        } else if (extra) {
            this.sheetImageChange.emit({ ...extra, x: payload.x, y: payload.y });
        } else {
            this.signaturePositionChange.emit(payload);
        }
    }

    private stopMove = () => {
        this.isMoving = false;
        if (this.moveFrameId !== null) {
            cancelAnimationFrame(this.moveFrameId);
            this.moveFrameId = null;
        }
        if (this.pendingMove) {
            const payload = this.pendingMove;
            this.pendingMove = null;
            this._emitMove(payload);
        }
        this.moveTarget = null;
        this._releasePointer(this.onMove, this.stopMove);
    };

    startResize(event: PointerEvent, target: ReportOverlayId = 'signature') {
        if (event.button !== 0) return;
        this.isResizing = true;
        this.resizeTarget = target;
        this.startX = event.clientX;
        this.startY = event.clientY;

        const extra = this._sheetImage(this._sheetImageId(target));
        if (target === 'logo') {
            this.startWidth = this.viewLogoWidth;
            this.startHeight = this.viewLogoHeight;
        } else if (target === 'watermark') {
            this.startWidth = this.viewWatermarkWidth;
            this.startHeight = this.viewWatermarkHeight;
        } else if (extra) {
            const view = this.sheetImageView(extra);
            this.startWidth = view.width;
            this.startHeight = view.height;
        } else {
            this.startWidth = this.viewSignatureWidth;
            this.startHeight = this.viewSignatureHeight;
        }

        this._capturePointer(event, this.onResize, this.stopResize);
    }

    startRotate(event: PointerEvent, target: ReportOverlayId) {
        if (event.button !== 0) return;
        const box = (event.currentTarget as HTMLElement).closest('[data-overlay-box]') as HTMLElement | null;
        if (!box) return;

        const rect = box.getBoundingClientRect();
        this.isRotating = true;
        this.rotateTarget = target;
        this.rotateCenterX = rect.left + rect.width / 2;
        this.rotateCenterY = rect.top + rect.height / 2;
        this.startAngle = Math.atan2(
            event.clientY - this.rotateCenterY,
            event.clientX - this.rotateCenterX
        );
        const extra = this._sheetImage(this._sheetImageId(target));
        this.startRotation =
            target === 'logo'
                ? this.logoRotation()
                : extra
                  ? extra.rotation || 0
                  : this.watermarkRotation();

        this._capturePointer(event, this.onRotate, this.stopRotate);
    }

    private onResize = (event: PointerEvent) => {
        if (!this.isResizing) return;
        const dx = event.clientX - this.startX;
        const dy = event.clientY - this.startY;

        const scales = this._scaleFactors;

        const newDomWidth = Math.max(24, this.startWidth + dx);
        const newDomHeight = Math.max(16, this.startHeight + dy);

        this.pendingResize = {
            width: Math.round(newDomWidth * scales.x),
            height: Math.round(newDomHeight * scales.y),
        };

        if (this.resizeFrameId !== null) return;
        this.resizeFrameId = requestAnimationFrame(this._flushResize);
    };

    private _flushResize = () => {
        this.resizeFrameId = null;
        const payload = this.pendingResize;
        if (!payload) return;
        this.pendingResize = null;
        this._emitResize(payload);
    };

    private _emitResize(payload: { width: number; height: number }): void {
        const extra = this._sheetImage(this._sheetImageId(this.resizeTarget));
        if (this.resizeTarget === 'logo') {
            this.logoSizeChange.emit(payload);
        } else if (this.resizeTarget === 'watermark') {
            this.watermarkSizeChange.emit(payload);
        } else if (extra) {
            this.sheetImageChange.emit({ ...extra, width: payload.width, height: payload.height });
        } else {
            this.signatureSizeChange.emit(payload);
        }
    }

    private stopResize = () => {
        this.isResizing = false;
        if (this.resizeFrameId !== null) {
            cancelAnimationFrame(this.resizeFrameId);
            this.resizeFrameId = null;
        }
        if (this.pendingResize) {
            const payload = this.pendingResize;
            this.pendingResize = null;
            this._emitResize(payload);
        }
        this.resizeTarget = null;
        this._releasePointer(this.onResize, this.stopResize);
    };

    private onRotate = (event: PointerEvent) => {
        if (!this.isRotating) return;
        const angle = Math.atan2(
            event.clientY - this.rotateCenterY,
            event.clientX - this.rotateCenterX
        );
        const next = Math.round(this.startRotation + ((angle - this.startAngle) * 180) / Math.PI);
        const extra = this._sheetImage(this._sheetImageId(this.rotateTarget));
        if (this.rotateTarget === 'logo') {
            this.logoRotationChange.emit(next);
        } else if (extra) {
            this.sheetImageChange.emit({ ...extra, rotation: next });
        } else {
            this.watermarkRotationChange.emit(next);
        }
    };

    private stopRotate = () => {
        this.isRotating = false;
        this.rotateTarget = null;
        this._releasePointer(this.onRotate, this.stopRotate);
    };

    private _capturePointer(
        event: PointerEvent,
        move: (event: PointerEvent) => void,
        stop: () => void
    ): void {
        event.preventDefault();
        event.stopPropagation();
        const el = event.currentTarget as HTMLElement | null;
        this.gestureEl = el;
        this.gesturePointerId = event.pointerId;
        try {
            el?.setPointerCapture(event.pointerId);
        } catch {
            /* element may not support capture */
        }
        window.addEventListener('pointermove', move);
        window.addEventListener('pointerup', stop, true);
        window.addEventListener('pointercancel', stop, true);
    }

    private _releasePointer(move: (event: PointerEvent) => void, stop: () => void): void {
        if (this.gestureEl && this.gesturePointerId != null) {
            try {
                this.gestureEl.releasePointerCapture(this.gesturePointerId);
            } catch {
                /* already released */
            }
        }
        this.gestureEl = null;
        this.gesturePointerId = null;
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', stop, true);
        window.removeEventListener('pointercancel', stop, true);
    }

    ngOnDestroy(): void {
        this.stopResize();
        this.stopRotate();
        this.stopMove();
        this._clearSectionDrag();
        if (this._autoPinFrameId !== null) {
            cancelAnimationFrame(this._autoPinFrameId);
            this._autoPinFrameId = null;
        }
        if (this._overlapSweepId !== null) {
            cancelAnimationFrame(this._overlapSweepId);
            this._overlapSweepId = null;
        }
        this._paperResize?.disconnect();
        this._paperResize = null;
    };

    resolveDataPath(path: string | undefined): string {
        if (!path) return '';
        const source = this.previewData();
        const parts = path.split('.');
        let current: any = source;
        for (const part of parts) {
            if (current == null || typeof current !== 'object') return '';
            current = current[part];
        }
        if (current == null) return '';
        if (typeof current === 'object') return JSON.stringify(current);
        return String(current);
    }

    resolveTableData(section: ReportSection): { key: string; value: string }[] {
        return this.structuralEntries(section).map((entry) => ({
            key: entry.label,
            value: entry.value,
        }));
    }

    private _humanize(key: string): string {
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/_/g, ' ')
            .replace(/^./, (s) => s.toUpperCase())
            .trim();
    }

    // ============================================
    // STRUCTURAL RENDERING
    // ============================================
    //
    // The rich section types are rendered exactly by the backend, which the builder
    // shows in an iframe. The canvas only needs enough of each block to select,
    // reorder and position it, so these helpers deliberately return an outline
    // rather than trying to reproduce the printed output.

    /** Raw value at a path, as opposed to `resolveDataPath`'s display string. */
    private _valueAt(path: string | undefined): any {
        if (!path) return null;

        let current: any = this.previewData();

        for (const part of path.split('.')) {
            if (current == null || typeof current !== 'object') return null;

            current = current[part];
        }

        return current ?? null;
    }

    /** Records behind a `dataTable` or `repeater`, normalizing a lone object. */
    structuralRecords(section: ReportSection): Record<string, any>[] {
        const value = this._valueAt(section.dataPath);

        if (Array.isArray(value)) {
            return value.filter((entry) => entry && typeof entry === 'object');
        }

        return value && typeof value === 'object' ? [value] : [];
    }

    /** Declared columns, or the ones the backend would derive from the records. */
    structuralColumns(section: ReportSection): { key: string; label: string }[] {
        const hidden = new Set(section.hiddenKeys ?? []);

        if (section.columns?.length) {
            return section.columns
                .filter((column) => !hidden.has(column.key))
                .map((column) => ({
                    key: column.key,
                    label: column.label || this._humanize(column.key),
                }));
        }

        const records = this.structuralRecords(section);
        const keys: string[] = [];

        for (const record of records) {
            for (const key of Object.keys(record)) {
                if (!keys.includes(key)) keys.push(key);
            }
        }

        return keys
            .filter((key) => !hidden.has(key))
            .slice(0, section.maxColumns || 6)
            .map((key) => ({ key, label: this._humanize(key) }));
    }

    /** Two rows are enough to show shape without reproducing the document. */
    structuralSampleRows(section: ReportSection): string[][] {
        const columns = this.structuralColumns(section);

        return this.structuralRecords(section)
            .slice(0, 2)
            .map((record) =>
                columns.map((column) => {
                    const value = record[column.key];

                    if (value == null) return '—';

                    return typeof value === 'object' ? '…' : String(value);
                })
            );
    }

    onCellActivate(
        section: ReportSection,
        key: string,
        part: ReportCellPart,
        event: Event
    ): void {
        event.stopPropagation();
        if (!this.clickable() || this._sectionDragMoved) return;
        this.sectionClick()?.(section);
        this.cellSelect.emit({ section, key, part });
    }

    isCellSelected(section: ReportSection, key: string, part?: ReportCellPart): boolean {
        if (!this.clickable() || this.selectedSectionId() !== section.id) return false;
        if (this.selectedCellKey() !== key) return false;
        if (!part) return true;
        return this.selectedCellPart() === part;
    }

    entryLabel(section: ReportSection, entry: { key: string; label: string }): string {
        return section.keyOverrides?.[entry.key]?.label || entry.label;
    }

    shapeKind(section: ReportSection): ReportShapeKind {
        const value = section.shape || section.staticContent;
        if (
            value === 'rectangle' ||
            value === 'square' ||
            value === 'circle' ||
            value === 'star' ||
            value === 'triangle' ||
            value === 'diamond' ||
            value === 'bullet'
        ) {
            return value;
        }
        return 'rectangle';
    }

    shapeKeepRatio(section: ReportSection): boolean {
        return this.shapeKind(section) !== 'rectangle';
    }

    shapeRotateStyle(section: ReportSection): string {
        const rotation = this.sectionRotation(section);
        return rotation ? `rotate(${rotation}deg)` : 'none';
    }

    shapeFill(section: ReportSection): string {
        return section.style?.color || section.style?.backgroundColor || this.primaryColor();
    }

    shapeStroke(section: ReportSection): string {
        return Number(section.style?.borderWidth) > 0 ? section.style?.borderColor || '#111827' : 'none';
    }

    shapeStrokeWidth(section: ReportSection): number {
        const width = Number(section.style?.borderWidth);
        return width > 0 ? Math.max(1, Math.round(width)) : 0;
    }

    shapeRectRadius(section: ReportSection): number {
        const radius = Number(section.style?.borderRadius);
        if (!Number.isFinite(radius) || radius <= 0) return this.shapeKind(section) === 'square' ? 4 : 2;
        const frame = this.displayFrame(section);
        const width = Math.max(12, Number(frame?.width) || 96);
        return Math.max(0, Math.min(48, (radius / width) * 96));
    }

    cellBackground(section: ReportSection, key: string): string {
        return section.keyOverrides?.[key]?.backgroundColor || '';
    }

    cellHasBox(section: ReportSection, key: string): boolean {
        return Number(section.keyOverrides?.[key]?.borderWidth ?? 0) > 0;
    }

    cellBorder(section: ReportSection, key: string): string {
        if (!this.cellHasBox(section, key)) return 'none';
        const override = section.keyOverrides?.[key];
        const width = Math.max(1, Math.round(Number(override?.borderWidth ?? 1)));
        return `${width}px solid ${override?.borderColor || '#d6d3d1'}`;
    }

    cellRadius(section: ReportSection, key: string): number {
        const explicit = Number(section.keyOverrides?.[key]?.borderRadius);
        if (Number.isFinite(explicit) && explicit >= 0) return explicit;
        return this.cellHasBox(section, key) ? 8 : 0;
    }

    cellShowsRowLine(section: ReportSection, key: string, isLast: boolean): boolean {
        const override = section.keyOverrides?.[key];
        if (override?.showRowLine === false) return false;
        if (override?.showRowLine === true) return true;
        return this.sectionShowsRowLines(section) && !this.cellHasBox(section, key) && !isLast;
    }

    rowLineStyle(section: ReportSection, key?: string): ReportRowLineStyle {
        const override = key ? section.keyOverrides?.[key]?.rowLineStyle : undefined;
        if (override === 'dotted' || override === 'dashed' || override === 'solid') return override;
        return section.rowLineStyle === 'dotted' || section.rowLineStyle === 'dashed' ? section.rowLineStyle : 'solid';
    }

    rowLineColor(section: ReportSection, key?: string): string {
        return (key ? section.keyOverrides?.[key]?.rowLineColor : undefined) || section.rowLineColor || '#d6d3d1';
    }

    rowLineWidth(section: ReportSection, key?: string): number {
        return clampRowLineWidth((key ? section.keyOverrides?.[key]?.rowLineWidth : undefined) ?? section.rowLineWidth);
    }

    rowLineMark(section: ReportSection, key?: string): number {
        const style = this.rowLineStyle(section, key);
        return clampRowLineMark(
            (key ? section.keyOverrides?.[key]?.rowLineMark : undefined) ?? section.rowLineMark,
            style,
            defaultRowLineMark(style)
        );
    }

    rowLineFill(section: ReportSection, key?: string): string {
        return rowLinePaint(
            this.rowLineStyle(section, key),
            this.rowLineColor(section, key),
            this.rowLineWidth(section, key),
            this.rowLineMark(section, key)
        ).image;
    }

    rowLineBg(section: ReportSection, key?: string, isLast = false): Record<string, string> | null {
        const show = key ? this.cellShowsRowLine(section, key, isLast) : this.sectionShowsRowLines(section);
        if (!show) return null;
        const paint = rowLinePaint(
            this.rowLineStyle(section, key),
            this.rowLineColor(section, key),
            this.rowLineWidth(section, key),
            this.rowLineMark(section, key)
        );
        return {
            'background-image': paint.image,
            'background-repeat': 'no-repeat',
            'background-position': 'left bottom',
            'background-size': paint.size,
        };
    }

    rowLineCss(section: ReportSection, key?: string): string {
        const style = this.rowLineStyle(section, key);
        const color = this.rowLineColor(section, key);
        return `${this.rowLineWidth(section, key)}px ${style} ${color}`;
    }

    /** Entries behind a `keyValueGrid`, table, or card, honoring hidden keys. */
    structuralEntries(section: ReportSection): { key: string; label: string; value: string }[] {
        return this.sheetChunks(section).flatMap((chunk) => (chunk.kind === 'fields' ? chunk.entries : []));
    }

    sheetChunks(section: ReportSection): LayoutSheetChunk[] {
        return chunkLayoutSheetItems(
            collectLayoutSheetItems(this._valueAt(section.dataPath), {
                hiddenKeys: section.hiddenKeys,
                keyOrder: section.keyOrder,
            })
        );
    }

    sectionHasStructuredData(section: ReportSection): boolean {
        return this.sheetChunks(section).length > 0;
    }

    sectionShowsRowLines(section: ReportSection): boolean {
        return section.showRowLines !== false;
    }

    roleFontFamily(section: ReportSection, role: ReportTextRole, key?: string): string {
        return resolveTextRole(section, role, this.primaryColor(), key).fontFamily;
    }

    roleFontSize(section: ReportSection, role: ReportTextRole, key?: string): number {
        return resolveTextRole(section, role, this.primaryColor(), key).fontSize;
    }

    roleFontWeight(section: ReportSection, role: ReportTextRole, key?: string): 'normal' | 'bold' {
        return resolveTextRole(section, role, this.primaryColor(), key).fontWeight;
    }

    roleFontStyle(section: ReportSection, role: ReportTextRole, key?: string): 'normal' | 'italic' {
        return resolveTextRole(section, role, this.primaryColor(), key).fontStyle;
    }

    roleTextAlign(section: ReportSection, role: ReportTextRole, key?: string): string {
        return resolveTextRole(section, role, this.primaryColor(), key).textAlign;
    }

    roleColor(section: ReportSection, role: ReportTextRole, key?: string): string {
        return resolveTextRole(section, role, this.primaryColor(), key).color;
    }

    sectionFrameBorder(section: ReportSection): string {
        const width = Number(section.style?.borderWidth ?? 0);
        if (!width || width <= 0) return 'none';
        const color = section.style?.borderColor || '#d6d3d1';
        return `${Math.max(1, Math.round(width))}px solid ${color}`;
    }

    sectionFrameRadius(section: ReportSection): number {
        const explicit = Number(section.style?.borderRadius);
        if (Number.isFinite(explicit) && explicit >= 0) return explicit;
        return 0;
    }

    sectionFramePadding(section: ReportSection): string {
        if (Number(section.style?.borderWidth ?? 0) > 0) return '10px';
        const bg = section.style?.backgroundColor;
        if (bg && bg !== '#ffffff' && bg !== '#fff') return '10px';
        return '';
    }

    sectionFrameBackground(section: ReportSection): string | null {
        return section.style?.backgroundColor || null;
    }

    /**
     * Tailwind classes for a variant, mirroring the backend palette.
     *
     * `variantRules` are evaluated server-side; the canvas shows the static variant
     * so the block is recognizable without duplicating rule evaluation.
     */
    variantClasses(section: ReportSection): string {
        const palette: Record<string, string> = {
            neutral: 'bg-gray-50 text-gray-700 border-gray-200',
            success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            warning: 'bg-amber-50 text-amber-700 border-amber-200',
            danger: 'bg-rose-50 text-rose-700 border-rose-200',
            info: 'bg-blue-50 text-blue-700 border-blue-200',
            primary: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        };

        return palette[section.style?.variant || 'neutral'] ?? palette.neutral;
    }

    /**
     * Snapshot the on-screen sheets as a standalone HTML document for Puppeteer,
     * so the PDF matches the editor instead of a second EJS layout.
     */
    exportPrintHtml(): string | null {
        const papers = this._reportPages?.toArray().map((ref) => ref.nativeElement) ?? [];
        if (!papers.length) return null;

        const landscape = this.orientation() === 'landscape';
        const pageWidthMm = landscape ? 297 : 210;
        const pageHeightMm = landscape ? 210 : 297;
        const sheets = papers
            .map((paper) => this._printSheetMarkup(paper, pageWidthMm, pageHeightMm))
            .filter(Boolean)
            .join('');

        if (!sheets) return null;

        return `<!DOCTYPE html><html><head><meta charset="utf-8"/><style>
@page{size:${pageWidthMm}mm ${pageHeightMm}mm;margin:0}
html,body{margin:0;padding:0;background:#fff}
.print-sheet{width:${pageWidthMm}mm;height:${pageHeightMm}mm;overflow:hidden;position:relative;page-break-after:always}
.print-sheet:last-child{page-break-after:auto}
*{-webkit-print-color-adjust:exact;print-color-adjust:exact}
</style></head><body>${sheets}</body></html>`;
    }

    private _printSheetMarkup(paper: HTMLElement, pageWidthMm: number, pageHeightMm: number): string {
        const rect = paper.getBoundingClientRect();
        if (!rect.width || !rect.height) return '';
        const clone = paper.cloneNode(true) as HTMLElement;
        clone.querySelectorAll('[data-print-hide],[data-overlay-handle]').forEach((node) => node.remove());
        this._inlineComputedStyles(paper, clone);
        clone.querySelectorAll('[class*="ring-"]').forEach((node) => {
            (node as HTMLElement).style.boxShadow = 'none';
        });
        clone.style.boxShadow = 'none';
        clone.style.borderRadius = '0';
        clone.style.margin = '0';
        clone.style.maxWidth = 'none';
        clone.style.width = `${rect.width}px`;
        clone.style.height = `${rect.height}px`;
        const scale = (pageWidthMm * MM_TO_PX) / rect.width;
        this._pinPrintedLayout(paper, clone);
        clone.style.zoom = String(scale);
        return `<div class="print-sheet">${clone.outerHTML}</div>`;
    }

    private _pinPrintedLayout(source: HTMLElement, clone: HTMLElement): void {
        const paperOrigin = source.getBoundingClientRect();
        const originEl =
            (source.querySelector('[data-report-page-inner]') as HTMLElement | null) ?? source;
        const origin = originEl.getBoundingClientRect();
        const cloneInner =
            (clone.querySelector('[data-report-page-inner]') as HTMLElement | null) ?? clone;
        cloneInner.style.position = 'relative';
        cloneInner.style.height = '100%';
        cloneInner.style.minHeight = '100%';
        cloneInner.style.overflow = 'visible';

        const srcSections = source.querySelectorAll('[data-report-section]');
        const dstSections = clone.querySelectorAll('[data-report-section]');
        if (this.hasFreeLayout()) {
            this._pinPrintedBoxes(srcSections, dstSections, origin, true);
        }
        this._pinPrintedBoxes(
            source.querySelectorAll('[data-overlay-box]'),
            clone.querySelectorAll('[data-overlay-box]'),
            paperOrigin
        );
        this._pinPrintedBoxes(
            source.querySelectorAll('[data-report-footer],[data-report-top-chrome]'),
            clone.querySelectorAll('[data-report-footer],[data-report-top-chrome]'),
            paperOrigin
        );
        clone.querySelectorAll('[data-report-footer],[data-report-top-chrome]').forEach((node) => {
            (node as HTMLElement).style.zIndex = '30';
        });
    }

    private _pinPrintedBoxes(
        srcNodes: NodeListOf<Element>,
        dstNodes: NodeListOf<Element>,
        origin: DOMRect,
        useLayoutBox = false
    ): void {
        const count = Math.min(srcNodes.length, dstNodes.length);
        for (let i = 0; i < count; i++) {
            const src = srcNodes[i] as HTMLElement;
            const dst = dstNodes[i] as HTMLElement;
            dst.style.position = 'absolute';
            dst.style.margin = '0';
            dst.style.right = 'auto';
            dst.style.bottom = 'auto';
            dst.style.transform = src.style.transform || 'none';
            dst.style.transformOrigin = src.style.transformOrigin || 'center center';
            if (useLayoutBox && src.offsetWidth) {
                dst.style.left = `${Math.round(src.offsetLeft)}px`;
                dst.style.top = `${Math.round(src.offsetTop)}px`;
                dst.style.width = `${Math.round(src.offsetWidth)}px`;
                dst.style.height = `${Math.round(src.offsetHeight)}px`;
                continue;
            }
            const box = src.getBoundingClientRect();
            if (!box.width && !box.height) continue;
            dst.style.left = `${Math.round(box.left - origin.left)}px`;
            dst.style.top = `${Math.round(box.top - origin.top)}px`;
            dst.style.width = `${Math.round(box.width)}px`;
            dst.style.height = `${Math.round(box.height)}px`;
        }
    }

    printSurfaceWidth(): number {
        return this._reportPages?.first?.nativeElement.getBoundingClientRect().width ?? 0;
    }

    private _inlineComputedStyles(source: Element, target: Element): void {
        const computed = getComputedStyle(source);
        const keys = [
            'position',
            'top',
            'left',
            'right',
            'bottom',
            'width',
            'height',
            'min-width',
            'min-height',
            'max-width',
            'max-height',
            'margin',
            'padding',
            'display',
            'flex-direction',
            'flex-wrap',
            'align-items',
            'justify-content',
            'gap',
            'grid-template-columns',
            'grid-template-rows',
            'font-family',
            'font-size',
            'font-weight',
            'font-style',
            'line-height',
            'letter-spacing',
            'text-align',
            'text-transform',
            'transform',
            'transform-origin',
            'color',
            'white-space',
            'background-color',
            'background-image',
            'background-repeat',
            'background-position',
            'background-size',
            'opacity',
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-radius',
            'box-sizing',
            'overflow',
            'object-fit',
            'object-position',
            'z-index',
            'border-collapse',
            'vertical-align',
        ];
        let css = '';
        for (const key of keys) {
            const value = computed.getPropertyValue(key);
            if (value) css += `${key}:${value};`;
        }
        (target as HTMLElement).style.cssText = css;
        const srcKids = source.children;
        const dstKids = target.children;
        const n = Math.min(srcKids.length, dstKids.length);
        for (let i = 0; i < n; i++) this._inlineComputedStyles(srcKids[i], dstKids[i]);
    }
}
