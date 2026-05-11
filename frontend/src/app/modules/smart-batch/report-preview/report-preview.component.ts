import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { ReportSection, SmartReportTemplate } from '../smart-report.service';

/**
 * Shared report preview component - renders a template with data.
 * Same rendering as the report builder's live preview.
 */
@Component({
    selector: 'report-preview',
    standalone: true,
    imports: [CommonModule, MatIconModule, TranslocoModule, DragDropModule],
    templateUrl: './report-preview.component.html',
})
export class ReportPreviewComponent {
    @ViewChild('reportPage') reportPage!: ElementRef<HTMLDivElement>;

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

    private isResizing = false;
    private resizeTarget: 'signature' | 'logo' | null = null;
    private startX = 0;
    private startY = 0;
    private startWidth = 0;
    private startHeight = 0;
    private pendingResize: { width: number; height: number } | null = null;
    private resizeFrameId: number | null = null;

    private get _scaleFactors(): { x: number; y: number } {
        if (!this.reportPage) {
            console.warn('[ReportPreview] reportPage missing');
            return { x: 1, y: 1 };
        }

        const rect = this.reportPage.nativeElement.getBoundingClientRect();
        const currentWidth = rect.width;
        const currentHeight = rect.height;

        if (!currentWidth || !currentHeight) {
            return { x: 1, y: 1 };
        }

        // 96 DPI constant
        const MM_TO_PX = 3.7795275591;
        const canonicalWidth = (this.orientation() === 'landscape' ? 297 : 210) * MM_TO_PX;
        const canonicalHeight = (this.orientation() === 'landscape' ? 210 : 297) * MM_TO_PX;

        const factors = {
            x: canonicalWidth / currentWidth,
            y: canonicalHeight / currentHeight,
        };
        return factors;
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
