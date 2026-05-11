import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Output,
    QueryList,
    ViewChild,
    ViewChildren,
    effect,
    input,
    signal,
    untracked,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { ReportSection, SmartReportTemplate } from '../smart-report.service';

const MM_TO_PX = 3.7795275591;

/**
 * Shared report preview component - renders a template with data, paginating
 * sections into multiple A4-sized "paper" cards so the live preview matches
 * the actual PDF page breaks (true WYSIWYG with the Puppeteer output).
 */
@Component({
    selector: 'report-preview',
    standalone: true,
    imports: [CommonModule, MatIconModule, TranslocoModule, DragDropModule],
    templateUrl: './report-preview.component.html',
})
export class ReportPreviewComponent implements AfterViewInit {
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
    /** Orientation for container sizing */
    orientation = input<'portrait' | 'landscape'>('portrait');
    /** Whether sections are clickable (for builder edit mode) */
    clickable = input<boolean>(false);
    /** Currently selected section ID (for builder highlight) */
    selectedSectionId = input<string | null>(null);
    /** Section click handler (optional) */
    sectionClick = input<((section: ReportSection) => void) | null>(null);

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
    /** When true, content is auto-pushed below the logo overlay. */
    logoAutoFitContent = input<boolean>(false);

    /** Extra top padding (canonical 96 DPI px) added to the section content area. */
    bodyTopPadding = input<number>(0);

    // Output
    @Output() signaturePositionChange = new EventEmitter<{ x: number; y: number }>();
    @Output() signatureSizeChange = new EventEmitter<{ width: number; height: number }>();
    @Output() logoPositionChange = new EventEmitter<{ x: number; y: number }>();
    @Output() logoSizeChange = new EventEmitter<{ width: number; height: number }>();

    /** Sections grouped into pages after measurement. Always has at least one
     *  page entry (which may be empty when there are no sections). */
    pages = signal<ReportSection[][]>([[]]);

    private isResizing = false;
    private resizeTarget: 'signature' | 'logo' | null = null;
    private startX = 0;
    private startY = 0;
    private startWidth = 0;
    private startHeight = 0;
    private pendingResize: { width: number; height: number } | null = null;
    private resizeFrameId: number | null = null;

    private _measureScheduled = false;
    private _measureFrameId: number | null = null;

    constructor() {
        // Single effect that tracks every input that influences pagination.
        // Reading the signals here registers the dependency; the actual work
        // is deferred to a rAF tick so the DOM has updated to reflect the new
        // template/section state before we measure.
        effect(() => {
            // Track inputs that should trigger a remeasure
            this.template().sections;
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
        this._scheduleMeasurement();
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
        const sections = this.template().sections || [];
        if (sections.length === 0) {
            this._setPagesIfDifferent([[]]);
            return;
        }

        const els = this._measureSections?.toArray() || [];
        if (els.length !== sections.length) {
            // Off-screen list hasn't caught up yet; try again next frame.
            this._scheduleMeasurement();
            return;
        }

        // If the legend is configured but its measure node hasn't mounted
        // yet, defer one frame so we don't bin-pack with a 0px footer
        // reservation and then have to redo the work right after.
        if (this.legend() && !this._measureLegend?.nativeElement) {
            this._scheduleMeasurement();
            return;
        }

        const heights = new Map<string, number>();
        for (const ref of els) {
            const el = ref.nativeElement;
            const id = el.dataset['sectionId'];
            if (!id) continue;
            heights.set(id, el.getBoundingClientRect().height);
        }

        const pageHeightDom = (this.orientation() === 'landscape' ? 210 : 297) * MM_TO_PX;
        // Mirrors the visible card's `p-8 sm:p-10 lg:p-12` (top + bottom).
        const innerPaddingTopBottom = 96; // 48px top + 48px bottom at lg breakpoint
        const legendHeight = this._getLegendHeight();
        const firstPageExtraTop = this.viewContentPaddingTop;

        const baseAvailable = Math.max(0, pageHeightDom - innerPaddingTopBottom - legendHeight);
        const firstPageAvailable = Math.max(0, baseAvailable - firstPageExtraTop);

        const newPages: ReportSection[][] = [[]];
        let acc = 0;
        let isFirstPage = true;

        for (const section of sections) {
            const h = heights.get(section.id) || 0;
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

    private _getLegendHeight(): number {
        if (!this.legend()) return 0;
        const el = this._measureLegend?.nativeElement;
        if (!el) return 0;
        return el.getBoundingClientRect().height;
    }

    private get _scaleFactors(): { x: number; y: number } {
        const ref = this.reportPage;
        if (!ref) return { x: 1, y: 1 };

        const rect = ref.nativeElement.getBoundingClientRect();
        const currentWidth = rect.width;
        const currentHeight = rect.height;

        if (!currentWidth || !currentHeight) {
            return { x: 1, y: 1 };
        }

        const canonicalWidth = (this.orientation() === 'landscape' ? 297 : 210) * MM_TO_PX;
        const canonicalHeight = (this.orientation() === 'landscape' ? 210 : 297) * MM_TO_PX;

        return {
            x: canonicalWidth / currentWidth,
            y: canonicalHeight / currentHeight,
        };
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

    onSignatureDragEnd(event: CdkDragEnd) {
        if (this.isResizing) return;

        const { x, y } = event.source.getFreeDragPosition();
        const scales = this._scaleFactors;

        // View -> Canonical, rounded to remove sub-pixel jitter
        this.signaturePositionChange.emit({
            x: Math.round(x * scales.x),
            y: Math.round(y * scales.y),
        });
    }

    onLogoDragEnd(event: CdkDragEnd) {
        if (this.isResizing) return;

        const { x, y } = event.source.getFreeDragPosition();
        const scales = this._scaleFactors;

        this.logoPositionChange.emit({
            x: Math.round(x * scales.x),
            y: Math.round(y * scales.y),
        });
    }

    startResize(event: MouseEvent, target: 'signature' | 'logo' = 'signature') {
        event.stopPropagation();
        event.preventDefault();
        this.isResizing = true;
        this.resizeTarget = target;
        this.startX = event.clientX;
        this.startY = event.clientY;

        // Start dimensions in DOM/Screen pixels
        if (target === 'logo') {
            this.startWidth = this.viewLogoWidth;
            this.startHeight = this.viewLogoHeight;
        } else {
            this.startWidth = this.viewSignatureWidth;
            this.startHeight = this.viewSignatureHeight;
        }

        window.addEventListener('mousemove', this.onResize);
        window.addEventListener('mouseup', this.stopResize);
    }

    private onResize = (event: MouseEvent) => {
        if (!this.isResizing) return;
        const dx = event.clientX - this.startX;
        const dy = event.clientY - this.startY;

        const scales = this._scaleFactors;

        // New DOM dimensions (sane minimums to avoid disappearing handles)
        const newDomWidth = Math.max(24, this.startWidth + dx);
        const newDomHeight = Math.max(16, this.startHeight + dy);

        // Convert back to Canonical for emit, rounded to remove sub-pixel jitter
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
        if (this.resizeTarget === 'logo') {
            this.logoSizeChange.emit(payload);
        } else {
            this.signatureSizeChange.emit(payload);
        }
    };

    private stopResize = () => {
        this.isResizing = false;
        if (this.resizeFrameId !== null) {
            cancelAnimationFrame(this.resizeFrameId);
            this.resizeFrameId = null;
        }
        // Flush the final pending payload so the last delta is never dropped
        if (this.pendingResize) {
            const payload = this.pendingResize;
            this.pendingResize = null;
            if (this.resizeTarget === 'logo') {
                this.logoSizeChange.emit(payload);
            } else if (this.resizeTarget === 'signature') {
                this.signatureSizeChange.emit(payload);
            }
        }
        this.resizeTarget = null;
        window.removeEventListener('mousemove', this.onResize);
        window.removeEventListener('mouseup', this.stopResize);
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

    resolveTableData(path: string | undefined): { key: string; value: string }[] {
        if (!path) return [];
        const source = this.previewData();
        const parts = path.split('.');
        let current: any = source;
        for (const part of parts) {
            if (current == null || typeof current !== 'object') return [];
            current = current[part];
        }
        if (current == null || typeof current !== 'object') return [];

        return Object.entries(current).map(([key, val]) => ({
            key: this._humanize(key),
            value: val != null ? String(val) : '',
        }));
    }

    private _humanize(key: string): string {
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/_/g, ' ')
            .replace(/^./, (s) => s.toUpperCase())
            .trim();
    }
}
