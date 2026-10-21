import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslocoModule } from '@jsverse/transloco';
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
}

/** Shows a report that was already generated, read from the saved copy instead of building it again. */
@Component({
    selector: 'fleet-report-pdf-preview-dialog',
    standalone: true,
    imports: [CommonModule, TranslocoModule, MatDialogModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
    template: `
        <div class="flex h-full flex-col">
            <div class="flex items-start justify-between gap-3 px-4 pt-4">
                <div class="min-w-0">
                    <h2 class="truncate text-sm font-semibold text-stone-950 dark:text-white">{{ data.title }}</h2>
                    <p *ngIf="data.subtitle" class="truncate text-xs text-stone-500 dark:text-stone-400">
                        {{ data.subtitle }}
                    </p>
                </div>
                <div class="flex shrink-0 items-center gap-1">
                    <button
                        mat-icon-button
                        type="button"
                        (click)="download()"
                        [disabled]="!blobUrl"
                        [attr.aria-label]="'smartFleet.assets.reportDownload' | transloco"
                    >
                        <mat-icon>download</mat-icon>
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

            <div class="relative min-h-0 flex-1 p-4">
                <div *ngIf="loading()" class="absolute inset-0 flex items-center justify-center">
                    <mat-spinner diameter="40"></mat-spinner>
                </div>

                <p *ngIf="failed()" class="text-sm text-rose-600">
                    {{ 'smartFleet.assets.reportPreviewFailed' | transloco }}
                </p>

                <iframe
                    *ngIf="safeUrl() as url"
                    class="h-full w-full rounded-lg border border-stone-200 bg-white dark:border-gray-800"
                    [src]="url"
                    [title]="data.title"
                ></iframe>
            </div>
        </div>
    `,
})
export class FleetReportPdfPreviewDialogComponent implements OnInit, OnDestroy {
    private _reports = inject(SmartReportService);
    private _sanitizer = inject(DomSanitizer);
    private _ref = inject(MatDialogRef<FleetReportPdfPreviewDialogComponent>);

    data = inject<FleetReportPdfPreviewData>(MAT_DIALOG_DATA);

    loading = signal(true);
    failed = signal(false);
    safeUrl = signal<SafeResourceUrl | null>(null);
    blobUrl = '';

    async ngOnInit(): Promise<void> {
        try {
            const pdf = await pdfBlobFromResponse(
                await firstValueFrom(this._reports.downloadReport(this.data.reportId, this.data.rowIndex))
            );

            if (!pdf) throw new Error('pdf');

            this.blobUrl = URL.createObjectURL(pdf);
            this.safeUrl.set(this._sanitizer.bypassSecurityTrustResourceUrl(this.blobUrl));
        } catch (err) {
            console.error('[SmartFleet] preview report error', err);
            this.failed.set(true);
        } finally {
            this.loading.set(false);
        }
    }

    ngOnDestroy(): void {
        if (this.blobUrl) URL.revokeObjectURL(this.blobUrl);
    }

    download(): void {
        if (!this.blobUrl) return;

        const anchor = document.createElement('a');

        anchor.href = this.blobUrl;
        anchor.download = this.data.fileName;
        anchor.click();
    }

    close(): void {
        this._ref.close();
    }
}
