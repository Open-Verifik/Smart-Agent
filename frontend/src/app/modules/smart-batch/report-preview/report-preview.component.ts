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
    input,
    signal,
    untracked,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { ReportSection, SmartReportTemplate } from '../smart-report.service';
import { collectScalarParams } from '../report-param-entries.util';

export type ReportOverlayId = 'logo' | 'watermark' | 'signature';

const MM_TO_PX = 3.7795275591;

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
    /** Currently selected overlay (logo, watermark, signature) */
    selectedOverlay = input<ReportOverlayId | null>(null);
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

    /** Extra top padding (canonical 96 DPI px) added to the section content area. */
    bodyTopPadding = input<number>(0);

    // Output
    @Output() signaturePositionChange = new EventEmitter<{ x: number; y: number }>();
    @Output() signatureSizeChange = new EventEmitter<{ width: number; height: number }>();
    @Output() logoPositionChange = new EventEmitter<{ x: number; y: number }>();
    @Output() logoSizeChange = new EventEmitter<{ width: number; height: number }>();
    @Output() logoRotationChange = new EventEmitter<number>();
    @Output() watermarkPositionChange = new EventEmitter<{ x: number; y: number }>();
    @Output() watermarkSizeChange = new EventEmitter<{ width: number; height: number }>();
    @Output() watermarkRotationChange = new EventEmitter<number>();
    @Output() overlaySelect = new EventEmitter<ReportOverlayId>();
    @Output() backgroundClick = new EventEmitter<void>();

    /** Sections grouped into pages after measurement. Always has at least one
     *  page entry (which may be empty when there are no sections). */
    pages = signal<ReportSection[][]>([[]]);

    private isResizing = false;
    private isRotating = false;
    private isMoving = false;
    private resizeTarget: 'signature' | 'logo' | 'watermark' | null = null;
    private rotateTarget: 'logo' | 'watermark' | null = null;
    private moveTarget: 'signature' | 'logo' | 'watermark' | null = null;
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

    onSectionActivate(section: ReportSection, event: Event): void {
        event.stopPropagation();
        if (!this.clickable() || !this.sectionClick()) return;
        this.sectionClick()!(section);
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

    startMove(event: PointerEvent, target: 'signature' | 'logo' | 'watermark') {
        if (!this.clickable() || this.isResizing || this.isRotating || event.button !== 0) return;
        const origin = event.target as HTMLElement | null;
        if (origin?.closest('[data-overlay-handle]')) return;

        this.overlaySelect.emit(target);
        this.isMoving = true;
        this.moveTarget = target;
        this.startX = event.clientX;
        this.startY = event.clientY;

        if (target === 'logo') {
            this.startMoveX = this.logoX();
            this.startMoveY = this.logoY();
        } else if (target === 'watermark') {
            this.startMoveX = this.watermarkX();
            this.startMoveY = this.watermarkY();
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
        if (this.moveTarget === 'logo') {
            this.logoPositionChange.emit(payload);
        } else if (this.moveTarget === 'watermark') {
            this.watermarkPositionChange.emit(payload);
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

    startResize(event: PointerEvent, target: 'signature' | 'logo' | 'watermark' = 'signature') {
        if (event.button !== 0) return;
        this.isResizing = true;
        this.resizeTarget = target;
        this.startX = event.clientX;
        this.startY = event.clientY;

        if (target === 'logo') {
            this.startWidth = this.viewLogoWidth;
            this.startHeight = this.viewLogoHeight;
        } else if (target === 'watermark') {
            this.startWidth = this.viewWatermarkWidth;
            this.startHeight = this.viewWatermarkHeight;
        } else {
            this.startWidth = this.viewSignatureWidth;
            this.startHeight = this.viewSignatureHeight;
        }

        this._capturePointer(event, this.onResize, this.stopResize);
    }

    startRotate(event: PointerEvent, target: 'logo' | 'watermark') {
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
        this.startRotation = target === 'logo' ? this.logoRotation() : this.watermarkRotation();

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
        if (this.resizeTarget === 'logo') {
            this.logoSizeChange.emit(payload);
        } else if (this.resizeTarget === 'watermark') {
            this.watermarkSizeChange.emit(payload);
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
        if (this.pendingResize) {
            const payload = this.pendingResize;
            this.pendingResize = null;
            if (this.resizeTarget === 'logo') {
                this.logoSizeChange.emit(payload);
            } else if (this.resizeTarget === 'watermark') {
                this.watermarkSizeChange.emit(payload);
            } else {
                this.signatureSizeChange.emit(payload);
            }
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
        if (this.rotateTarget === 'logo') {
            this.logoRotationChange.emit(next);
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

    /** Entries behind a `keyValueGrid`, table, or card, honoring hidden keys. */
    structuralEntries(section: ReportSection): { key: string; label: string; value: string }[] {
        return collectScalarParams(this._valueAt(section.dataPath), {
            hiddenKeys: section.hiddenKeys,
        });
    }

    sectionShowsRowLines(section: ReportSection): boolean {
        return section.showRowLines !== false;
    }

    sectionFontFamily(section: ReportSection): string {
        return section.style?.fontFamily || 'Inter, system-ui, sans-serif';
    }

    sectionFontSize(section: ReportSection, fallback = 12): number {
        const size = Number(section.style?.fontSize);
        return Number.isFinite(size) && size > 0 ? size : fallback;
    }

    sectionLabelFontSize(section: ReportSection): number {
        return Math.max(8, Math.round(this.sectionFontSize(section) * 0.85));
    }

    sectionFontWeight(section: ReportSection, fallback: 'normal' | 'bold' = 'normal'): 'normal' | 'bold' {
        return section.style?.fontWeight || fallback;
    }

    sectionFontStyle(section: ReportSection): 'normal' | 'italic' {
        return section.style?.fontStyle === 'italic' ? 'italic' : 'normal';
    }

    sectionTitleColor(section: ReportSection): string {
        return section.style?.color || this.primaryColor();
    }

    sectionLabelColor(section: ReportSection): string {
        return section.style?.labelColor || section.style?.color || '#6B7280';
    }

    sectionValueColor(section: ReportSection): string {
        return section.style?.valueColor || section.style?.color || '#111827';
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
}
