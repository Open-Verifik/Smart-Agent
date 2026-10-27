import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    computed,
    ElementRef,
    inject,
    OnDestroy,
    OnInit,
    signal,
    ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { firstValueFrom } from 'rxjs';
import { reportPaperSizeMm } from 'app/modules/smart-batch/report-preview/report-preview.component';
import {
    SampleReportData,
    sanitizeTemplateForApi,
    SmartReportService,
    SmartReportTemplate,
} from 'app/modules/smart-batch/smart-report.service';

const MIN_USER_ZOOM = 1;
const MAX_USER_ZOOM = 3;
const ZOOM_STEP = 1.25;

/** Shows how a report template looks. The whole page is scaled to fit the dialog width, never cropped. */
@Component({
    selector: 'fleet-template-preview-dialog',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
    ],
    template: `
        <div
            class="flex shrink-0 items-center justify-between gap-2 border-b border-stone-200 bg-white px-3 py-2 dark:border-gray-800 dark:bg-gray-950 sm:px-4"
        >
            <h2 class="min-w-0 flex-1 truncate text-sm font-semibold text-stone-950 dark:text-white">
                {{ template()?.name || data.fallback.name }}
            </h2>
            <div class="flex shrink-0 items-center gap-0.5">
                <button
                    mat-icon-button
                    type="button"
                    (click)="zoomOut()"
                    [disabled]="userZoom() <= minUserZoom"
                    [attr.aria-label]="'smartFleet.assets.reportZoomOut' | transloco"
                >
                    <mat-icon>remove</mat-icon>
                </button>
                <button
                    type="button"
                    class="min-w-[3rem] rounded-md px-1 py-2 text-xs font-semibold tabular-nums text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-gray-800"
                    (click)="resetZoom()"
                    [attr.aria-label]="'smartFleet.assets.reportZoomFit' | transloco"
                >
                    {{ zoomPercent() }}%
                </button>
                <button
                    mat-icon-button
                    type="button"
                    (click)="zoomIn()"
                    [disabled]="userZoom() >= maxUserZoom"
                    [attr.aria-label]="'smartFleet.assets.reportZoomIn' | transloco"
                >
                    <mat-icon>add</mat-icon>
                </button>
                <button
                    mat-icon-button
                    type="button"
                    (click)="close()"
                    [attr.aria-label]="'smartFleet.dismiss' | transloco"
                >
                    <mat-icon>close</mat-icon>
                </button>
            </div>
        </div>

        <div #scroller class="fleet-template-preview-scroll">
            @if (loading()) {
                <div class="flex min-h-[320px] items-center justify-center">
                    <mat-spinner diameter="40"></mat-spinner>
                </div>
            } @else if (previewError()) {
                <p class="px-4 py-8 text-center text-sm text-stone-500">{{ previewError() }}</p>
            } @else if (htmlPreviewUrl()) {
                <div class="fleet-template-preview-stage">
                    <div
                        class="fleet-template-preview-paper bg-white shadow-md"
                        [style.width.px]="contentWidthPx()"
                        [style.zoom]="scale()"
                    >
                        <iframe
                            [src]="htmlPreviewUrl()"
                            sandbox="allow-same-origin"
                            scrolling="no"
                            title="Report preview"
                            class="block w-full border-0 bg-white"
                            [style.height.px]="iframeHeightPx() ?? 480"
                            (load)="onIframeLoad($event)"
                        ></iframe>
                    </div>
                </div>
            }
        </div>
    `,
    styles: `
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            min-height: 0;
        }

        .fleet-template-preview-scroll {
            flex: 1 1 auto;
            min-height: 0;
            overflow: auto;
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
            background: #d6d3d1;
        }

        /* Centers the page when it is narrower than the viewport, scrolls sideways only when zoomed in. */
        .fleet-template-preview-stage {
            display: flex;
            justify-content: safe center;
            width: max-content;
            min-width: 100%;
            padding: 6px;
            box-sizing: border-box;
        }

        .fleet-template-preview-paper {
            flex: 0 0 auto;
        }

        @media (min-width: 640px) {
            .fleet-template-preview-stage {
                padding: 16px;
            }
        }

        :host-context(.dark) .fleet-template-preview-scroll {
            background: #1c1917;
        }
    `,
})
export class FleetTemplatePreviewDialogComponent implements OnInit, AfterViewInit, OnDestroy {
    private _reports = inject(SmartReportService);
    private _sanitizer = inject(DomSanitizer);
    private _transloco = inject(TranslocoService);
    private _ref = inject(MatDialogRef<FleetTemplatePreviewDialogComponent>);
    data = inject<{ templateId?: string; fallback: SmartReportTemplate }>(MAT_DIALOG_DATA);

    @ViewChild('scroller', { static: true }) private _scrollerRef!: ElementRef<HTMLDivElement>;

    readonly minUserZoom = MIN_USER_ZOOM;
    readonly maxUserZoom = MAX_USER_ZOOM;

    loading = signal(true);
    previewError = signal<string | null>(null);
    template = signal<SmartReportTemplate | null>(null);
    htmlPreviewUrl = signal<SafeResourceUrl | null>(null);
    iframeHeightPx = signal<number | null>(null);
    /** Real width of the rendered page, in case it is wider than the nominal paper. */
    private _measuredWidthPx = signal(0);
    /** Width available inside the scroll area (updated by ResizeObserver). */
    private _availableWidthPx = signal(0);
    /** Extra zoom chosen by the user on top of "fit to width". */
    userZoom = signal(1);
    private _objectUrl: string | null = null;
    private _observer: ResizeObserver | null = null;

    previewPaperWidthMm = computed(() => {
        const t = this.template();
        return reportPaperSizeMm(t?.pageSize, t?.orientation || 'portrait').width;
    });

    /** Width the page is laid out at (CSS px): the paper, or wider if its content needs it. */
    contentWidthPx = computed(() => {
        const paperPx = (this.previewPaperWidthMm() * 96) / 25.4;

        return Math.ceil(Math.max(paperPx, this._measuredWidthPx()));
    });

    /** Scale that makes the whole page width fit the dialog, multiplied by the user's zoom. */
    scale = computed(() => {
        const padding = window.innerWidth >= 640 ? 32 : 12;
        const available = Math.max(0, this._availableWidthPx() - padding);
        const fit = available > 0 ? Math.min(1, available / this.contentWidthPx()) : 1;

        return Math.max(0.2, fit) * this.userZoom();
    });

    zoomPercent = computed(() => Math.round(this.scale() * 100));

    ngOnInit(): void {
        const id = this.data.templateId;
        if (!id) {
            void this._renderPreview(this.data.fallback);
            return;
        }

        this._reports.getTemplate(id).subscribe({
            next: (full) => void this._renderPreview(full ?? this.data.fallback),
            error: () => void this._renderPreview(this.data.fallback),
        });
    }

    ngAfterViewInit(): void {
        const scroller = this._scrollerRef.nativeElement;

        this._availableWidthPx.set(scroller.clientWidth);
        this._observer = new ResizeObserver(() => this._availableWidthPx.set(scroller.clientWidth));
        this._observer.observe(scroller);
    }

    ngOnDestroy(): void {
        this._observer?.disconnect();
        this._releasePreviewUrl();
    }

    close(): void {
        this._ref.close();
    }

    zoomIn(): void {
        this.userZoom.set(Math.min(MAX_USER_ZOOM, this.userZoom() * ZOOM_STEP));
    }

    zoomOut(): void {
        this.userZoom.set(Math.max(MIN_USER_ZOOM, this.userZoom() / ZOOM_STEP));
    }

    resetZoom(): void {
        this.userZoom.set(1);
    }

    onIframeLoad(event: Event): void {
        const iframe = event.target as HTMLIFrameElement | null;
        if (!iframe) return;
        this._syncIframeSize(iframe);
        window.setTimeout(() => this._syncIframeSize(iframe), 150);
        window.setTimeout(() => this._syncIframeSize(iframe), 600);
    }

    private async _renderPreview(template: SmartReportTemplate): Promise<void> {
        this.loading.set(true);
        this.previewError.set(null);
        this._releasePreviewUrl();
        this.template.set(template);

        try {
            const html = await firstValueFrom(
                this._reports.previewHtml(
                    sanitizeTemplateForApi(template, 'update'),
                    this._sampleForPreview(template),
                    { preview: false }
                )
            );
            const url = URL.createObjectURL(new Blob([html], { type: 'text/html' }));
            this._objectUrl = url;
            this.htmlPreviewUrl.set(this._sanitizer.bypassSecurityTrustResourceUrl(url));
            this.iframeHeightPx.set(null);
        } catch {
            this.previewError.set(this._transloco.translate('smartReport.previewFailed'));
        } finally {
            this.loading.set(false);
        }
    }

    private _sampleForPreview(template: SmartReportTemplate): SampleReportData {
        const sample = template.sampleData ?? {};
        return {
            batchName: sample.batchName || template.name || '',
            rowIndex: sample.rowIndex ?? 0,
            inputData: sample.inputData ?? {},
            results: sample.results ?? {},
            errors: sample.errors,
            steps: (template.presetSteps ?? []).map((step, index) => ({
                sequence: step.sequence ?? index + 1,
                enabled: true,
                featureCode: step.appFeatureCode,
                appFeature: step.appFeatureCode ? { code: step.appFeatureCode } : undefined,
            })),
        };
    }

    private _syncIframeSize(iframe: HTMLIFrameElement): void {
        try {
            const doc = iframe.contentDocument;
            if (!doc) return;
            const root = doc.documentElement;
            const body = doc.body;
            const height = Math.max(
                root?.scrollHeight ?? 0,
                root?.offsetHeight ?? 0,
                body?.scrollHeight ?? 0,
                body?.offsetHeight ?? 0
            );
            // Content wider than the paper would be cut off on the right, so widen the page to fit it.
            const width = Math.max(root?.scrollWidth ?? 0, body?.scrollWidth ?? 0);

            if (height > 0) this.iframeHeightPx.set(height);
            if (width > 0) this._measuredWidthPx.set(width);
        } catch {
            /* keep fallback size */
        }
    }

    private _releasePreviewUrl(): void {
        if (this._objectUrl) {
            URL.revokeObjectURL(this._objectUrl);
            this._objectUrl = null;
        }
        this.htmlPreviewUrl.set(null);
        this.iframeHeightPx.set(null);
        this._measuredWidthPx.set(0);
    }
}
