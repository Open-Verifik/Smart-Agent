import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { finalize } from 'rxjs';
import { DateTime } from 'luxon';
import { FuseHighlightService } from '@fuse/components/highlight/highlight.service';
import {
    BarcodeValidationPanelComponent,
    type CedulaBarcodeValidation,
} from '../../projects/barcode-validation-panel.component';
import { ImagePreviewDialogComponent } from '../../projects/image-preview-dialog.component';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { ScanDeleteConfirmDialogComponent } from '../scan-delete-confirm-dialog.component';
import { ScanToolSmartCheckResultComponent } from '../scan-tool/scan-tool-smart-check-result.component';
import { SmartScanService } from '../smart-scan.service';
import {
    resolveEnrollmentRecordLink,
    type DocumentClassification,
    type DocumentType,
    type DocumentTypeField,
    type DocumentValidation,
    type ScanResult,
    type SmartCheckResult,
} from '../smart-scan.types';
import {
    isPurged,
    isNoStorage,
    isEphemeral,
    canDeleteFromStorage,
} from '../smart-scan-retention.util';

@Component({
    selector: 'scan-detail',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        BarcodeValidationPanelComponent,
        ScanToolSmartCheckResultComponent,
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
    private _authGate = inject(AuthRequiredGateService);

    scan: DocumentValidation | null = null;
    documentType: DocumentType | null = null;
    templateFields: DocumentTypeField[] = [];
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

        this._authGate.runWithAuthOrDialog({
            directAuthModal: true,
            onAuthenticated: () => this._loadScanDetail(id),
        });
    }

    private _loadScanDetail(id: string): void {
        this.loading = true;
        this.errorMessage = null;
        this._scanService.getScan(id).subscribe({
            next: (res) => {
                this.scan = res.data;
                const cls = this.getClassification();
                this.showClassificationReason = cls ? !cls.isMatch : false;
                this.loading = false;
                this.loadTemplateFields();
                this.loadDocumentTypeMeta();
                this._cdr.markForCheck();
            },
            error: () => {
                this.errorMessage = 'Failed to load scan details';
                this.loading = false;
                this._cdr.markForCheck();
            },
        });
    }

    get resolvedSmartCheck(): SmartCheckResult | null {
        if (!this.scan) return null;
        if (this.scan.smartCheck?.status) {
            const { creditsCharged: _c, ...clean } = this.scan.smartCheck;
            return clean;
        }
        const score = this.scan.scoreValidation as Record<string, unknown> | null | undefined;
        if (!score || typeof score !== 'object') return null;
        if (typeof score['status'] === 'string') {
            const { creditsCharged: _c, ocrCreditsCharged: _o, ...clean } = score;
            return clean as unknown as SmartCheckResult;
        }
        if (
            score['fullName'] ||
            score['firstName'] ||
            score['lastName'] ||
            Array.isArray(score['arrayName'])
        ) {
            return {
                status: 'completed',
                data: score,
            };
        }
        return null;
    }

    get resolvedCost(): { ocr: number; smartCheck: number; total: number } | null {
        if (!this.scan) return null;
        if (this.scan.cost && (this.scan.cost.ocr != null || this.scan.cost.smartCheck != null)) {
            const ocr = this.scan.cost.ocr || 0;
            const smartCheck = this.scan.cost.smartCheck || 0;
            return {
                ocr,
                smartCheck,
                total: this.scan.cost.total ?? Number((ocr + smartCheck).toFixed(6)),
            };
        }
        const score = this.scan.scoreValidation;
        const ocr = this.scan.creditsCharged ?? score?.ocrCreditsCharged;
        const smartCheck = this.scan.smartCheck?.creditsCharged ?? score?.creditsCharged;
        if (ocr == null && smartCheck == null) return null;
        return {
            ocr: ocr || 0,
            smartCheck: smartCheck || 0,
            total: Number(((ocr || 0) + (smartCheck || 0)).toFixed(6)),
        };
    }

    get scanAsResult(): ScanResult | null {
        if (!this.scan) return null;
        const cost = this.resolvedCost;
        return {
            _id: this.scan._id,
            documentType: this.scan.documentType,
            documentNumber: this.scan.documentNumber,
            OCRExtraction: this.scan.OCRExtraction,
            status: this.scan.status,
            url: this.scan.url,
            backUrl: this.scan.backUrl,
            cost,
            creditsCharged: cost?.ocr,
            smartCheck: this.resolvedSmartCheck,
            fieldMapping: this.scan.fieldMapping,
        };
    }

    goBack() {
        this._router.navigate(['/smart-enroll/smart-scan/list']);
    }

    scanAnother(): void {
        const code = this.scan?.documentType;
        if (!code) return;
        this._router.navigate(['/smart-enroll/smart-scan/new'], { queryParams: { documentType: code } });
    }

    /**
     * Opens the document photo full screen so it can be zoomed.
     */
    openImagePreview(imageSrc: string | undefined, title?: string): void {
        if (!imageSrc) return;
        this._dialog.open(ImagePreviewDialogComponent, {
            data: { imageSrc, title },
            panelClass: 'image-preview-dialog-panel',
            width: '100%',
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100%',
        });
    }

    get singlePhoto(): boolean {
        const template = this.scan?.scanTemplate;
        if (template) return !template.requiresBackSide;
        const back = this.scan?.fieldMapping?.back;
        return !this.scan?.backUrl && !back;
    }

    get isPurged(): boolean {
        return isPurged(this.scan?.retention);
    }

    get isNoStorage(): boolean {
        return isNoStorage(this.scan?.retention);
    }

    get isEphemeral(): boolean {
        return isEphemeral(this.scan?.retention);
    }

    get purgeDate(): string | null {
        return this.scan?.retention?.purgedAt ? this.formatDate(this.scan.retention.purgedAt) : null;
    }

    get scheduledPurgeDate(): string | null {
        return this.scan?.retention?.purgeAfter ? this.formatDate(this.scan.retention.purgeAfter) : null;
    }

    get canDeleteFromStorage(): boolean {
        return canDeleteFromStorage(Boolean(this.scan?.url), this.scan?.retention);
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

    barcodeValidation(): CedulaBarcodeValidation | null {
        const extraction = this.scan?.OCRExtraction as { barcodeValidation?: CedulaBarcodeValidation } | undefined;

        return extraction?.barcodeValidation || null;
    }

    getExtractionFields(): Array<{ key: string; value: unknown }> {
        const extraction = this.scan?.OCRExtraction;
        if (!extraction || typeof extraction !== 'object') return [];
        return Object.entries(extraction)
            .filter(([k]) => k !== 'documentClassification' && k !== 'barcodeValidation' && !k.startsWith('_'))
            .map(([key, value]) => ({ key, value }));
    }

    extractionSections(): Array<{ id: string; labelKey: string; fields: Array<{ key: string; value: unknown }> }> {
        const rows = this.getExtractionFields();
        const { front, back } = this.sideKeys();
        if (!front.size && !back.size) return [{ id: 'all', labelKey: '', fields: rows }];

        return [
            { id: 'front', labelKey: 'smartScan.frontPhotoTitle', fields: rows.filter((row) => front.has(row.key)) },
            {
                id: 'back',
                labelKey: 'smartScan.backPhotoTitle',
                fields: this.singlePhoto ? [] : rows.filter((row) => back.has(row.key)),
            },
            {
                id: 'other',
                labelKey: 'smartScan.otherFields',
                fields: rows.filter((row) => !front.has(row.key) && !back.has(row.key)),
            },
        ];
    }

    private loadDocumentTypeMeta() {
        const code = this.scan?.documentType;
        if (!code) return;

        this._scanService.getDocumentTypesByCode(code).subscribe({
            next: (types) => {
                const owned = types.find((type) => type.client);
                this.documentType = owned || types[0] || null;
                this._cdr.markForCheck();
            },
            error: () => {
                this.documentType = null;
            },
        });
    }

    private loadTemplateFields() {
        const mapping = this.scan?.fieldMapping;
        if ((mapping?.front && Object.keys(mapping.front).length) || (mapping?.back && Object.keys(mapping.back).length)) return;
        const code = this.scan?.documentType;
        if (!code) return;

        this._scanService.getPromptTemplatesByCode(code).subscribe({
            next: (response) => {
                const rows = Array.isArray(response.data) ? response.data : [];
                this.templateFields = rows.find((row) => row.fields?.length)?.fields || [];
                this._cdr.markForCheck();
            },
            error: () => {
                this.templateFields = [];
            },
        });
    }

    private sideKeys(): { front: Set<string>; back: Set<string> } {
        const mapping = this.scan?.fieldMapping;
        if (mapping?.front || mapping?.back) {
            return {
                front: new Set(Object.keys(mapping.front || {})),
                back: new Set(Object.keys(mapping.back || {})),
            };
        }

        return {
            front: new Set(this.templateFields.filter((field) => field.page !== 1).map((field) => field.mapKey).filter(Boolean)),
            back: new Set(this.templateFields.filter((field) => field.page === 1).map((field) => field.mapKey).filter(Boolean)),
        };
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
        if (!this.scan) return '';
        const cost = this.resolvedCost;
        const smartCheck = this.resolvedSmartCheck;
        if (!smartCheck && !cost) {
            return this.scan.OCRExtraction != null
                ? JSON.stringify(this.scan.OCRExtraction, null, 2)
                : '';
        }
        const payload: Record<string, unknown> = {
            OCRExtraction: this.scan.OCRExtraction,
        };
        if (smartCheck) payload['smartCheck'] = smartCheck;
        if (cost) payload['cost'] = cost;
        return JSON.stringify(payload, null, 2);
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
