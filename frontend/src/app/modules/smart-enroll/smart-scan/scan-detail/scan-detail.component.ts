import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { finalize } from 'rxjs';
import { DateTime } from 'luxon';
import { FuseHighlightService } from '@fuse/components/highlight/highlight.service';
import { ScanDeleteConfirmDialogComponent } from '../scan-delete-confirm-dialog.component';
import { SmartScanService } from '../smart-scan.service';
import {
    resolveEnrollmentRecordLink,
    type DocumentClassification,
    type DocumentValidation,
} from '../smart-scan.types';

@Component({
    selector: 'scan-detail',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './scan-detail.component.html',
    styleUrls: ['./scan-detail.component.scss'],
})
export class ScanDetailComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _scanService = inject(SmartScanService);
    private _cdr = inject(ChangeDetectorRef);
    private _dialog = inject(MatDialog);
    private _transloco = inject(TranslocoService);
    private _highlightService = inject(FuseHighlightService);
    private _domSanitizer = inject(DomSanitizer);

    scan: DocumentValidation | null = null;
    loading = true;
    errorMessage: string | null = null;
    deleteLoading = false;
    deleteError: string | null = null;
    showRawJson = false;
    showClassificationReason = false;
    copyFeedback = false;
    private _copyFeedbackTimeout: ReturnType<typeof setTimeout> | null = null;

    ngOnInit() {
        const id = this._route.snapshot.paramMap.get('id');
        if (!id) {
            this.goBack();
            return;
        }

        this._scanService.getScan(id).subscribe({
            next: (res) => {
                this.scan = res.data;
                const cls = this.getClassification();
                this.showClassificationReason = cls ? !cls.isMatch : false;
                this.loading = false;
                this._cdr.markForCheck();
            },
            error: () => {
                this.errorMessage = 'Failed to load scan details';
                this.loading = false;
                this._cdr.markForCheck();
            },
        });
    }

    goBack() {
        this._router.navigate(['/smart-enroll/smart-scan/list']);
    }

    confirmDelete(): void {
        if (!this.scan?._id || this.deleteLoading) return;

        this.deleteError = null;
        this._dialog
            .open(ScanDeleteConfirmDialogComponent, {
                width: '400px',
                data: {
                    titleKey: 'smartScan.deleteScanTitle',
                    messageKey: 'smartScan.deleteScanMessage',
                    cancelKey: 'smartScan.deleteScanCancel',
                    confirmKey: 'smartScan.deleteScanConfirm',
                },
            })
            .afterClosed()
            .subscribe((confirmed) => {
                if (!confirmed) return;
                this.deleteLoading = true;
                this._cdr.markForCheck();
                this._scanService
                    .deleteScan(this.scan!._id)
                    .pipe(finalize(() => {
                        this.deleteLoading = false;
                        this._cdr.markForCheck();
                    }))
                    .subscribe({
                        next: () => {
                            this._scanService.getScans(1, this._scanService.pageSize()).subscribe({ error: () => {} });
                            this.goBack();
                        },
                        error: (err: { error?: { message?: string }; message?: string }) => {
                            const msg =
                                err?.error?.message ||
                                err?.message ||
                                this._transloco.translate('smartScan.deleteScanError');
                            this.deleteError = msg;
                        },
                    });
            });
    }

    enrollmentRecordLink(): string[] | null {
        const link = resolveEnrollmentRecordLink(this.scan);
        if (!link) return null;
        return ['/smart-enroll/projects', link.projectId, 'records', link.recordId];
    }

    getClassification(): DocumentClassification | null {
        const ocr = this.scan?.OCRExtraction as { documentClassification?: DocumentClassification } | undefined;
        return ocr?.documentClassification ?? null;
    }

    get confidencePercent(): number {
        const cls = this.getClassification();
        return Math.round((cls?.confidence ?? 0) * 100);
    }

    getExtractionFields(): Array<{ key: string; value: unknown }> {
        const extraction = this.scan?.OCRExtraction;
        if (!extraction || typeof extraction !== 'object') return [];
        return Object.entries(extraction)
            .filter(([k]) => k !== 'documentClassification' && !k.startsWith('_'))
            .map(([key, value]) => ({ key, value }));
    }

    formatDate(date: string | undefined): string {
        if (!date) return '-';
        return DateTime.fromISO(date).toFormat('MMM dd, yyyy HH:mm');
    }

    getStatusColor(status: string): string {
        if (status === 'ACTIVE' || status === 'ACTIVE_BUT_UNVERIFIED') {
            return 'text-emerald-800 bg-emerald-100/90 dark:bg-emerald-950/40 dark:text-emerald-200';
        }
        if (status === 'ASSESSING') {
            return 'text-amber-800 bg-amber-100/90 dark:bg-amber-950/40 dark:text-amber-200';
        }
        return 'text-red-800 bg-red-100/90 dark:bg-red-950/40 dark:text-red-200';
    }

    getStatusLabel(status: string): string {
        if (status === 'ACTIVE' || status === 'ACTIVE_BUT_UNVERIFIED') return 'Active';
        if (status === 'ASSESSING') return 'Assessing';
        return status;
    }

    getMethodLabel(method: string): string {
        const map: Record<string, string> = {
            SCAN_AGENT: 'Scan Agent',
            SCAN_STUDIO: 'Scan Studio',
            SCAN_PROMPT: 'Scan Prompt',
        };
        return map[method] ?? method;
    }

    get formattedJson(): string {
        return this.scan?.OCRExtraction != null
            ? JSON.stringify(this.scan.OCRExtraction, null, 2)
            : '';
    }

    get highlightedJson(): string {
        const json = this.formattedJson;
        if (!json) return '';
        const html = this._highlightService.highlight(json, 'json');
        const sanitized = this._domSanitizer.sanitize(SecurityContext.HTML, html);
        return sanitized ?? '';
    }

    copyJson(): void {
        const json = this.formattedJson;
        if (!json) return;
        navigator.clipboard.writeText(json).then(() => {
            if (this._copyFeedbackTimeout) clearTimeout(this._copyFeedbackTimeout);
            this.copyFeedback = true;
            this._cdr.markForCheck();
            this._copyFeedbackTimeout = setTimeout(() => {
                this.copyFeedback = false;
                this._copyFeedbackTimeout = null;
                this._cdr.markForCheck();
            }, 1500);
        });
    }
}
