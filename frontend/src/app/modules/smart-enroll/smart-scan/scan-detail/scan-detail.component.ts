import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { FuseHighlightService } from '@fuse/components/highlight/highlight.service';
import { SmartScanService } from '../smart-scan.service';
import type { DocumentValidation, DocumentClassification } from '../smart-scan.types';

@Component({
    selector: 'scan-detail',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './scan-detail.component.html',
})
export class ScanDetailComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _scanService = inject(SmartScanService);
    private _cdr = inject(ChangeDetectorRef);
    private _highlightService = inject(FuseHighlightService);
    private _domSanitizer = inject(DomSanitizer);

    scan: DocumentValidation | null = null;
    loading = true;
    errorMessage: string | null = null;
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
        if (status === 'ACTIVE' || status === 'ACTIVE_BUT_UNVERIFIED')
            return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
        if (status === 'ASSESSING') return 'text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400';
        return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
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
