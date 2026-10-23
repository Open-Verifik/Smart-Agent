import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
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
        <div class="flex items-start justify-between gap-3 border-b border-stone-200 px-4 py-3 dark:border-gray-800">
            <h2 class="min-w-0 truncate text-sm font-semibold text-stone-950 dark:text-white">
                {{ template()?.name || data.fallback.name }}
            </h2>
            <button
                mat-icon-button
                type="button"
                (click)="close()"
                [attr.aria-label]="'smartFleet.dismiss' | transloco"
            >
                <mat-icon>close</mat-icon>
            </button>
        </div>
        <div class="fleet-template-preview-scroll">
            @if (loading()) {
                <div class="flex min-h-[320px] items-center justify-center">
                    <mat-spinner diameter="40"></mat-spinner>
                </div>
            } @else if (previewError()) {
                <p class="px-4 py-8 text-center text-sm text-stone-500">{{ previewError() }}</p>
            } @else if (htmlPreviewUrl()) {
                <div
                    class="mx-auto border border-stone-200 bg-white shadow-sm dark:border-gray-700"
                    [style.width.mm]="previewPaperWidthMm()"
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
            }
        </div>
    `,
    styles: `
        :host {
            display: block;
            max-width: min(96vw, 920px);
        }

        .fleet-template-preview-scroll {
            max-height: min(80vh, 720px);
            overflow-y: auto;
            overscroll-behavior: contain;
            padding: 16px;
            background: #e7e5e4;
        }

        :host-context(.dark) .fleet-template-preview-scroll {
            background: #1c1917;
        }
    `,
})
export class FleetTemplatePreviewDialogComponent implements OnInit, OnDestroy {
    private _reports = inject(SmartReportService);
    private _sanitizer = inject(DomSanitizer);
    private _transloco = inject(TranslocoService);
    private _ref = inject(MatDialogRef<FleetTemplatePreviewDialogComponent>);
    data = inject<{ templateId?: string; fallback: SmartReportTemplate }>(MAT_DIALOG_DATA);

    loading = signal(true);
    previewError = signal<string | null>(null);
    template = signal<SmartReportTemplate | null>(null);
    htmlPreviewUrl = signal<SafeResourceUrl | null>(null);
    iframeHeightPx = signal<number | null>(null);
    private _objectUrl: string | null = null;

    previewPaperWidthMm = computed(() => {
        const t = this.template();
        return reportPaperSizeMm(t?.pageSize, t?.orientation || 'portrait').width;
    });

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

    ngOnDestroy(): void {
        this._releasePreviewUrl();
    }

    close(): void {
        this._ref.close();
    }

    onIframeLoad(event: Event): void {
        const iframe = event.target as HTMLIFrameElement | null;
        if (!iframe) return;
        this._syncIframeHeight(iframe);
        window.setTimeout(() => this._syncIframeHeight(iframe), 150);
        window.setTimeout(() => this._syncIframeHeight(iframe), 600);
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

    private _syncIframeHeight(iframe: HTMLIFrameElement): void {
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
            if (height > 0) this.iframeHeightPx.set(height);
        } catch {
            /* keep fallback height */
        }
    }

    private _releasePreviewUrl(): void {
        if (this._objectUrl) {
            URL.revokeObjectURL(this._objectUrl);
            this._objectUrl = null;
        }
        this.htmlPreviewUrl.set(null);
        this.iframeHeightPx.set(null);
    }
}
