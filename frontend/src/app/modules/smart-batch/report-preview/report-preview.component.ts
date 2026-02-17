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

    // Output
    @Output() signaturePositionChange = new EventEmitter<{ x: number; y: number }>();
    @Output() signatureSizeChange = new EventEmitter<{ width: number; height: number }>();

    private isResizing = false;
    private startX = 0;
    private startY = 0;
    private startWidth = 0;
    private startHeight = 0;

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

    onSignatureDragEnd(event: CdkDragEnd) {
        if (this.isResizing) return;

        const { x, y } = event.source.getFreeDragPosition();
        const scales = this._scaleFactors;

        // View -> Canonical
        this.signaturePositionChange.emit({ x: x * scales.x, y: y * scales.y });
    }

    startResize(event: MouseEvent) {
        event.stopPropagation();
        event.preventDefault();
        this.isResizing = true;
        this.startX = event.clientX;
        this.startY = event.clientY;

        // Start dimensions in DOM/Screen pixels
        this.startWidth = this.viewSignatureWidth;
        this.startHeight = this.viewSignatureHeight;

        window.addEventListener('mousemove', this.onResize);
        window.addEventListener('mouseup', this.stopResize);
    }

    private onResize = (event: MouseEvent) => {
        if (!this.isResizing) return;
        const dx = event.clientX - this.startX;
        const dy = event.clientY - this.startY;

        const scales = this._scaleFactors;

        // New DOM dimensions
        const newDomWidth = Math.max(20, this.startWidth + dx);
        const newDomHeight = Math.max(10, this.startHeight + dy);

        // Convert back to Canonical for emit
        this.signatureSizeChange.emit({
            width: newDomWidth * scales.x,
            height: newDomHeight * scales.y,
        });
    };

    private stopResize = () => {
        this.isResizing = false;
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
