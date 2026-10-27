import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    inject,
    OnDestroy,
    OnInit,
    signal,
    ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import type { PDFDocumentProxy, RenderTask } from 'pdfjs-dist';
import { firstValueFrom } from 'rxjs';
import { SmartReportService } from 'app/modules/smart-batch/smart-report.service';
import { pdfBlobFromResponse } from './fleet-vehicle-report.util';

export interface FleetReportPdfPreviewData {
    reportId: string;
    rowIndex: number;
    /** Shown in the header, usually the plate. */
    title: string;
    /** Template name, shown under the title. */
    subtitle?: string;
    /** Name used when the client downloads the file from the preview. */
    fileName: string;
    /** Clears saved report state and returns to template selection. */
    onRegenerate?: () => void;
}

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 5;
const ZOOM_STEP = 1.25;
/** Browsers cap canvas size; stay below it so zoomed pages stay sharp but still render. */
const MAX_CANVAS_SIDE = 4096;

/**
 * Shows a report that was already generated, read from the saved copy instead of building it again.
 * Pages are drawn edge to edge (minimal margins) and support button, pinch and Ctrl+wheel zoom.
 */
@Component({
    selector: 'fleet-report-pdf-preview-dialog',
    standalone: true,
    imports: [CommonModule, TranslocoModule, MatDialogModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            min-height: 0;
        }

        .fleet-pdf-action {
            min-width: 2.5rem;
            height: 2.5rem;
            padding-inline: 0.5rem;
        }

        .fleet-pdf-action .mat-icon {
            margin: 0;
        }

        .fleet-pdf-scroller {
            overflow: auto;
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
            /* We handle pinch zoom ourselves, so the browser must not zoom the whole page. */
            touch-action: pan-x pan-y;
        }

        .fleet-pdf-pages {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
            width: max-content;
            min-width: 100%;
            padding: 4px;
        }

        .fleet-pdf-pages canvas {
            display: block;
            flex-shrink: 0;
            background: #fff;
            box-shadow: 0 1px 4px rgb(0 0 0 / 0.25);
        }

        @media (min-width: 640px) {
            .fleet-pdf-action {
                padding-inline: 1rem;
            }

            .fleet-pdf-action .mat-icon {
                margin-right: 0.375rem;
            }

            .fleet-pdf-pages {
                padding: 12px;
                gap: 12px;
            }
        }
    `,
    template: `
        <div class="flex h-full min-h-0 flex-1 flex-col">
            <div
                class="flex items-center justify-between gap-2 border-b border-stone-200 bg-white px-2 py-1.5 dark:border-gray-800 dark:bg-gray-950 sm:px-4"
            >
                <div class="min-w-0 flex-1">
                    <h2 class="truncate text-sm font-semibold text-stone-950 dark:text-white">{{ data.title }}</h2>
                    <p *ngIf="data.subtitle" class="truncate text-xs text-stone-500 dark:text-stone-400">
                        {{ data.subtitle }}
                    </p>
                </div>

                <div class="flex shrink-0 items-center gap-0.5">
                    <button
                        mat-icon-button
                        type="button"
                        (click)="zoomOut()"
                        [disabled]="!ready() || zoom() <= minZoom"
                        [attr.aria-label]="'smartFleet.assets.reportZoomOut' | transloco"
                    >
                        <mat-icon>remove</mat-icon>
                    </button>
                    <button
                        type="button"
                        class="min-w-[3rem] rounded-md px-1 py-2 text-xs font-semibold tabular-nums text-stone-700 hover:bg-stone-100 disabled:opacity-40 dark:text-stone-200 dark:hover:bg-gray-800"
                        (click)="resetZoom()"
                        [disabled]="!ready()"
                        [attr.aria-label]="'smartFleet.assets.reportZoomFit' | transloco"
                    >
                        {{ zoomPercent() }}%
                    </button>
                    <button
                        mat-icon-button
                        type="button"
                        (click)="zoomIn()"
                        [disabled]="!ready() || zoom() >= maxZoom"
                        [attr.aria-label]="'smartFleet.assets.reportZoomIn' | transloco"
                    >
                        <mat-icon>add</mat-icon>
                    </button>

                    <span class="mx-1 hidden h-6 w-px bg-stone-200 dark:bg-gray-700 sm:block"></span>

                    <button
                        mat-icon-button
                        type="button"
                        class="hidden sm:inline-flex"
                        (click)="openInNewTab()"
                        [disabled]="!blobUrl"
                        [attr.aria-label]="'smartFleet.assets.reportOpenNewTab' | transloco"
                    >
                        <mat-icon>open_in_new</mat-icon>
                    </button>
                    <button
                        mat-stroked-button
                        type="button"
                        class="fleet-pdf-action"
                        (click)="download()"
                        [disabled]="!blobUrl"
                        [attr.aria-label]="'smartFleet.assets.reportDownload' | transloco"
                    >
                        <mat-icon>download</mat-icon>
                        <span class="hidden sm:inline">{{ 'smartFleet.assets.reportDownload' | transloco }}</span>
                    </button>
                    <button
                        mat-flat-button
                        type="button"
                        class="fleet-pdf-action"
                        (click)="close()"
                        [attr.aria-label]="'smartFleet.dismiss' | transloco"
                    >
                        <mat-icon>close</mat-icon>
                        <span class="hidden sm:inline">{{ 'smartFleet.dismiss' | transloco }}</span>
                    </button>
                </div>
            </div>

            <div class="relative min-h-0 flex-1 bg-stone-300 dark:bg-gray-900">
                <div *ngIf="loading()" class="absolute inset-0 z-10 flex items-center justify-center">
                    <mat-spinner diameter="40"></mat-spinner>
                </div>

                <div *ngIf="failed()" class="absolute inset-0 z-10 flex flex-col items-start gap-3 p-4">
                    <p class="text-sm text-rose-600">
                        {{ 'smartFleet.assets.reportPreviewFailed' | transloco }}
                    </p>
                    <button
                        *ngIf="data.onRegenerate"
                        mat-stroked-button
                        type="button"
                        color="primary"
                        (click)="regenerate()"
                    >
                        {{ 'smartFleet.assets.reportRegenerate' | transloco }}
                    </button>
                </div>

                <div #scroller class="fleet-pdf-scroller absolute inset-0">
                    <div #pages class="fleet-pdf-pages"></div>
                </div>
            </div>
        </div>
    `,
})
export class FleetReportPdfPreviewDialogComponent implements OnInit, AfterViewInit, OnDestroy {
    private _reports = inject(SmartReportService);
    private _ref = inject(MatDialogRef<FleetReportPdfPreviewDialogComponent>);

    data = inject<FleetReportPdfPreviewData>(MAT_DIALOG_DATA);

    @ViewChild('scroller', { static: true }) private _scrollerRef!: ElementRef<HTMLDivElement>;
    @ViewChild('pages', { static: true }) private _pagesRef!: ElementRef<HTMLDivElement>;

    readonly minZoom = MIN_ZOOM;
    readonly maxZoom = MAX_ZOOM;

    loading = signal(true);
    failed = signal(false);
    ready = signal(false);
    /** 1 = page fits the available width. */
    zoom = signal(1);
    blobUrl = '';

    private _pdf: PDFDocumentProxy | null = null;
    private _worker: Worker | null = null;
    private _pageRatios: Array<{ width: number; height: number }> = [];
    private _canvases: HTMLCanvasElement[] = [];
    private _tasks: RenderTask[] = [];
    private _renderToken = 0;
    private _renderTimer: number | null = null;
    private _pinch: { distance: number; zoom: number } | null = null;
    private _destroyed = false;

    zoomPercent(): number {
        return Math.round(this.zoom() * 100);
    }

    async ngOnInit(): Promise<void> {
        try {
            const pdf = await pdfBlobFromResponse(
                await firstValueFrom(this._reports.downloadReport(this.data.reportId, this.data.rowIndex))
            );

            if (!pdf) throw new Error('pdf');

            this.blobUrl = URL.createObjectURL(pdf);
            await this._openDocument(await pdf.arrayBuffer());
        } catch (err) {
            console.error('[SmartFleet] preview report error', err);
            this.failed.set(true);
        } finally {
            this.loading.set(false);
        }
    }

    ngAfterViewInit(): void {
        const scroller = this._scrollerRef.nativeElement;

        // Non-passive listeners so pinch / Ctrl+wheel zoom can cancel the browser default.
        scroller.addEventListener('touchstart', this._onTouchStart, { passive: true });
        scroller.addEventListener('touchmove', this._onTouchMove, { passive: false });
        scroller.addEventListener('touchend', this._onTouchEnd, { passive: true });
        scroller.addEventListener('touchcancel', this._onTouchEnd, { passive: true });
        scroller.addEventListener('wheel', this._onWheel, { passive: false });
    }

    ngOnDestroy(): void {
        this._destroyed = true;
        this._cancelRender();

        if (this._renderTimer) window.clearTimeout(this._renderTimer);

        const scroller = this._scrollerRef?.nativeElement;

        if (scroller) {
            scroller.removeEventListener('touchstart', this._onTouchStart);
            scroller.removeEventListener('touchmove', this._onTouchMove);
            scroller.removeEventListener('touchend', this._onTouchEnd);
            scroller.removeEventListener('touchcancel', this._onTouchEnd);
            scroller.removeEventListener('wheel', this._onWheel);
        }

        void this._pdf?.destroy();
        this._worker?.terminate();

        if (this.blobUrl) URL.revokeObjectURL(this.blobUrl);
    }

    @HostListener('window:resize')
    onResize(): void {
        if (!this.ready()) return;

        this._layout();
        this._scheduleRender();
    }

    zoomIn(): void {
        this._setZoom(this.zoom() * ZOOM_STEP);
    }

    zoomOut(): void {
        this._setZoom(this.zoom() / ZOOM_STEP);
    }

    resetZoom(): void {
        this._setZoom(1);
    }

    download(): void {
        if (!this.blobUrl) return;

        const anchor = document.createElement('a');

        anchor.href = this.blobUrl;
        anchor.download = this.data.fileName;
        anchor.click();
    }

    openInNewTab(): void {
        if (!this.blobUrl) return;

        window.open(this.blobUrl, '_blank', 'noopener');
    }

    close(): void {
        this._ref.close();
    }

    regenerate(): void {
        this.data.onRegenerate?.();
        this._ref.close();
    }

    private async _openDocument(buffer: ArrayBuffer): Promise<void> {
        const pdfjs = await import('pdfjs-dist');

        // The bundler packs the worker with the app, so nothing extra has to be served or copied on deploy.
        this._worker = new Worker(
            new URL('../../../../../node_modules/pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url),
            { type: 'module' }
        );

        // The typings only allow `port: null`, but a Worker instance is what pdf.js expects here.
        const pdf = await pdfjs.getDocument({
            data: new Uint8Array(buffer),
            worker: new pdfjs.PDFWorker({ port: this._worker as any }),
        }).promise;

        if (this._destroyed) {
            void pdf.destroy();
            return;
        }

        this._pdf = pdf;

        const pages = this._pagesRef.nativeElement;

        pages.innerHTML = '';
        this._canvases = [];
        this._pageRatios = [];

        for (let index = 1; index <= pdf.numPages; index++) {
            const viewport = (await pdf.getPage(index)).getViewport({ scale: 1 });
            const canvas = document.createElement('canvas');

            this._pageRatios.push({ width: viewport.width, height: viewport.height });
            this._canvases.push(canvas);
            pages.appendChild(canvas);
        }

        this.ready.set(true);
        this._layout();
        await this._renderAll();
    }

    /** Width in CSS px of a page at the current zoom (zoom 1 = fills the viewport minus margins). */
    private _pageCssWidth(): number {
        const scroller = this._scrollerRef.nativeElement;
        const margin = window.innerWidth >= 640 ? 24 : 8;

        return Math.max(120, scroller.clientWidth - margin) * this.zoom();
    }

    private _layout(): void {
        const width = this._pageCssWidth();

        this._canvases.forEach((canvas, index) => {
            const ratio = this._pageRatios[index];

            canvas.style.width = `${width}px`;
            canvas.style.height = `${(width * ratio.height) / ratio.width}px`;
        });
    }

    private _scheduleRender(): void {
        if (this._renderTimer) window.clearTimeout(this._renderTimer);

        this._renderTimer = window.setTimeout(() => void this._renderAll(), 180);
    }

    private _cancelRender(): void {
        this._renderToken++;
        this._tasks.forEach((task) => task.cancel());
        this._tasks = [];
    }

    private async _renderAll(): Promise<void> {
        const pdf = this._pdf;

        if (!pdf || this._destroyed) return;

        this._cancelRender();

        const token = this._renderToken;
        const cssWidth = this._pageCssWidth();
        const dpr = Math.min(window.devicePixelRatio || 1, 3);

        for (let index = 0; index < this._pageRatios.length; index++) {
            if (token !== this._renderToken || this._destroyed) return;

            const ratio = this._pageRatios[index];
            const cssHeight = (cssWidth * ratio.height) / ratio.width;
            // Keep the sharpest scale that still fits within the canvas size limit.
            const pixelScale = Math.min(dpr, MAX_CANVAS_SIDE / cssWidth, MAX_CANVAS_SIDE / cssHeight);
            const scale = (cssWidth / ratio.width) * pixelScale;

            try {
                const page = await pdf.getPage(index + 1);
                const viewport = page.getViewport({ scale });
                // Draw off-screen first, then swap in, so the page never flashes blank while re-rendering.
                const next = document.createElement('canvas');

                next.width = Math.floor(viewport.width);
                next.height = Math.floor(viewport.height);
                next.style.width = `${cssWidth}px`;
                next.style.height = `${cssHeight}px`;

                const task = page.render({ canvasContext: next.getContext('2d')!, viewport });

                this._tasks.push(task);
                await task.promise;

                if (token !== this._renderToken || this._destroyed) return;

                this._canvases[index].replaceWith(next);
                this._canvases[index] = next;
            } catch (err: any) {
                if (err?.name === 'RenderingCancelledException') return;

                console.error('[SmartFleet] page render error', err);
            }
        }
    }

    /** Changes zoom and keeps the point under `anchor` (client coordinates) steady while scrolling. */
    private _setZoom(value: number, anchor?: { x: number; y: number }): void {
        const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
        const previous = this.zoom();

        if (!this.ready() || Math.abs(next - previous) < 0.001) return;

        const scroller = this._scrollerRef.nativeElement;
        const rect = scroller.getBoundingClientRect();
        const cx = anchor ? anchor.x - rect.left : rect.width / 2;
        const cy = anchor ? anchor.y - rect.top : rect.height / 2;
        const ratio = next / previous;
        const left = (scroller.scrollLeft + cx) * ratio - cx;
        const top = (scroller.scrollTop + cy) * ratio - cy;

        this.zoom.set(next);
        this._layout();
        scroller.scrollLeft = left;
        scroller.scrollTop = top;
        this._scheduleRender();
    }

    private _distance(event: TouchEvent): number {
        const [a, b] = [event.touches[0], event.touches[1]];

        return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    }

    private _onTouchStart = (event: TouchEvent): void => {
        if (event.touches.length === 2) {
            this._pinch = { distance: this._distance(event), zoom: this.zoom() };
        }
    };

    private _onTouchMove = (event: TouchEvent): void => {
        if (!this._pinch || event.touches.length !== 2) return;

        event.preventDefault();

        const [a, b] = [event.touches[0], event.touches[1]];

        this._setZoom((this._pinch.zoom * this._distance(event)) / this._pinch.distance, {
            x: (a.clientX + b.clientX) / 2,
            y: (a.clientY + b.clientY) / 2,
        });
    };

    private _onTouchEnd = (event: TouchEvent): void => {
        if (event.touches.length < 2) this._pinch = null;
    };

    private _onWheel = (event: WheelEvent): void => {
        if (!event.ctrlKey) return;

        event.preventDefault();
        this._setZoom(this.zoom() * Math.exp(-event.deltaY * 0.01), { x: event.clientX, y: event.clientY });
    };
}
