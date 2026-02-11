import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import {
    BatchConfiguration,
    BatchStep,
    SmartBatch,
    SmartBatchService,
} from '../smart-batch.service';
import { SmartReport, SmartReportService, SmartReportTemplate } from '../smart-report.service';
import { ReportPreviewComponent } from '../report-preview/report-preview.component';
import {
    buildRowDataForResolution,
    TemplateMatchResult,
    validateTemplateAgainstData,
} from '../template-match.util';

export interface StepBlockDescriptor {
    sequence: number;
    label: string;
}

export interface StepResultBlock extends StepBlockDescriptor {
    rowResults: { rowIndex: number; data: any }[];
}

@Component({
    selector: 'report-viewer',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        DragDropModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTooltipModule,
        MatSnackBarModule,
        ReportPreviewComponent,
    ],
    templateUrl: './report-viewer.component.html',
    animations: [fuseAnimations],
})
export class ReportViewerComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _snack = inject(MatSnackBar);
    private _reportService = inject(SmartReportService);
    private _batchService = inject(SmartBatchService);
    private _sanitizer = inject(DomSanitizer);

    // Route params
    configId = signal<string | null>(null);
    batchId = signal<string | null>(null);

    /** When set, show and generate report for this row only (from queryParam rowIndex). */
    selectedRowIndex = signal<number | null>(null);

    // Data
    batch = signal<SmartBatch | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    templates = signal<SmartReportTemplate[]>([]);
    selectedTemplate = signal<SmartReportTemplate | null>(null);
    report = signal<SmartReport | null>(null);

    // Step results layout: ordered list of step blocks (sequence + label)
    stepBlocksOrder = signal<StepBlockDescriptor[]>([]);

    // State
    isLoading = signal(false);
    isGenerating = signal(false);
    isSending = signal(false);

    // PDF preview
    pdfDataUrl = signal<string | null>(null);

    /** Sanitized PDF URL for iframe (Angular requires bypass for data URLs) */
    pdfSafeUrl = signal<SafeResourceUrl | null>(null);

    // Step result blocks for display: each block has step label + row results for that step.
    // When selectedRowIndex is set, only that row is included (single-record mode).
    stepResultBlocks = computed<StepResultBlock[]>(() => {
        const order = this.stepBlocksOrder();
        const b = this.batch();
        let rows = b?.rows ?? [];
        const rowIndex = this.selectedRowIndex();
        if (rowIndex != null) {
            rows = rows.filter((r) => r.rowIndex === rowIndex);
        }
        return order.map((block) => ({
            sequence: block.sequence,
            label: block.label,
            rowResults: rows.map((row) => ({
                rowIndex: row.rowIndex,
                data: row.results?.[block.sequence] ?? null,
            })),
        }));
    });

    /** Whether any row has step results to show */
    hasStepResults = computed(() => {
        const b = this.batch();
        const rows = b?.rows ?? [];
        return rows.some((row) => row.results && Object.keys(row.results).length > 0);
    });

    /**
     * Template match: does the selected template's data paths exist in the batch data?
     * Uses the first row (or selected row) for validation.
     */
    /**
     * Preview data for the report (same shape as report builder).
     * Uses first row or selected row.
     */
    previewData = computed<Record<string, any>>(() => {
        const b = this.batch();
        const rows = b?.rows ?? [];
        const rowIndex = this.selectedRowIndex();
        const row = rowIndex != null
            ? rows.find((r) => r.rowIndex === rowIndex)
            : rows[0];
        if (!row) return { inputData: {}, results: {} };

        return {
            batchName: b?.name ?? 'Batch',
            rowIndex: row.rowIndex,
            inputData: row.inputData ?? {},
            results: row.results ?? {},
        };
    });

    templateMatch = computed<TemplateMatchResult | null>(() => {
        const template = this.selectedTemplate();
        const b = this.batch();
        if (!template?.sections?.length || !b?.rows?.length) return null;

        const rows = b.rows;
        const rowIndex = this.selectedRowIndex();
        const row = rowIndex != null
            ? rows.find((r) => r.rowIndex === rowIndex)
            : rows[0];
        if (!row) return null;

        const rowData = buildRowDataForResolution(row);
        return validateTemplateAgainstData(template, rowData);
    });

    ngOnInit(): void {
        this._route.params.subscribe((params) => {
            this.configId.set(params['configId']);
            this.batchId.set(params['batchId']);
            this._loadData();
        });
        this._route.queryParams.subscribe((query) => {
            const rowIndex = query['rowIndex'];
            if (rowIndex != null && rowIndex !== '') {
                const n = parseInt(rowIndex, 10);
                this.selectedRowIndex.set(Number.isNaN(n) ? null : n);
            } else {
                this.selectedRowIndex.set(null);
            }
        });
    }

    private _loadData(): void {
        this.isLoading.set(true);

        const configId = this.configId();
        const batchId = this.batchId();

        // Load batch (with batchConfiguration populated)
        if (batchId) {
            this._batchService.getSmartBatch(batchId).subscribe({
                next: (res) => this.batch.set(res.data),
            });
        }

        // Load configuration for step names and to init step block order
        if (configId) {
            this._batchService.getConfiguration(configId).subscribe({
                next: (res) => {
                    this.configuration.set(res.data);
                    this._initStepBlocksOrderFromConfig(res.data);
                },
            });
        }

        // Load templates
        this._reportService.getTemplates(configId || undefined).subscribe({
            next: (templates) => {
                this.templates.set(templates);
                if (templates.length > 0) {
                    this.selectedTemplate.set(templates[0]);
                }
                this.isLoading.set(false);
            },
            error: () => {
                this.isLoading.set(false);
            },
        });
    }

    private _initStepBlocksOrderFromConfig(config: BatchConfiguration): void {
        if (!config?.steps?.length) return;
        const steps = config.steps
            .filter((s) => s.enabled)
            .sort((a, b) => a.sequence - b.sequence)
            .map((s) => ({
                sequence: s.sequence,
                label: this._getStepLabel(s),
            }));
        if (steps.length > 0) {
            this.stepBlocksOrder.set(steps);
        }
    }

    private _getStepLabel(step: BatchStep): string {
        const feature = step.appFeature as { name?: string; code?: string };
        return feature?.name || feature?.code || `Step ${step.sequence}`;
    }

    onStepBlocksDrop(event: CdkDragDrop<StepBlockDescriptor[]>): void {
        const current = [...this.stepBlocksOrder()];
        moveItemInArray(current, event.previousIndex, event.currentIndex);
        this.stepBlocksOrder.set(current);
    }

    /** Short summary of a step result for table display */
    getResultSummary(data: any): string {
        if (data == null) return '—';
        if (typeof data === 'string') return data.length > 60 ? data.slice(0, 60) + '…' : data;
        if (typeof data !== 'object') return String(data);
        const keys = Object.keys(data);
        if (keys.length === 0) return '—';
        const parts = keys.slice(0, 3).map((k) => `${k}: ${this._valuePreview(data[k])}`);
        return parts.join(' · ') + (keys.length > 3 ? ' …' : '');
    }

    private _valuePreview(v: any): string {
        if (v == null) return '—';
        if (typeof v === 'string') return v.length > 20 ? v.slice(0, 20) + '…' : v;
        if (typeof v === 'object') return '…';
        return String(v);
    }

    /** Format missing paths for tooltip display */
    formatMissingPaths(missingPaths: { path: string; label?: string }[]): string {
        return missingPaths.map((m) => m.path).join(', ');
    }

    selectTemplate(template: SmartReportTemplate): void {
        this.selectedTemplate.set(template);
        this.pdfDataUrl.set(null);
        this.pdfSafeUrl.set(null);
        this.report.set(null);
    }

    generateReport(): void {
        const template = this.selectedTemplate();
        const batchId = this.batchId();

        if (!template || !batchId) {
            this._snack.open('Please select a template', 'Close', { duration: 3000 });
            return;
        }

        this.isGenerating.set(true);

        // First create the report record
        this._reportService
            .createReport({
                template: template._id!,
                smartBatch: batchId,
                name: `Report - ${this.batch()?.name || 'Batch'}`,
            })
            .subscribe({
                next: (report) => {
                    this.report.set(report);

                    // Now generate the PDF (pass rowIndex for single-record report)
                    const rowIndex = this.selectedRowIndex();
                    this._reportService
                        .generateReport(report._id!, {
                            ...(rowIndex != null ? { rowIndex } : {}),
                        })
                        .subscribe({
                        next: (result) => {
                            this.report.set(result.data);

                            // Convert base64 to data URL for preview (sanitize for iframe)
                            if (result.pdf?.buffer) {
                                const dataUrl = `data:application/pdf;base64,${result.pdf.buffer}`;
                                this.pdfDataUrl.set(dataUrl);
                                this.pdfSafeUrl.set(
                                    this._sanitizer.bypassSecurityTrustResourceUrl(dataUrl)
                                );
                            }

                            this.isGenerating.set(false);
                            this._snack.open('Report generated!', 'Close', { duration: 3000 });
                        },
                        error: (err) => {
                            console.error('Failed to generate PDF:', err);
                            this.isGenerating.set(false);
                            this._snack.open('Failed to generate report', 'Close', {
                                duration: 3000,
                            });
                        },
                    });
                },
                error: (err) => {
                    console.error('Failed to create report:', err);
                    this.isGenerating.set(false);
                    this._snack.open('Failed to create report', 'Close', { duration: 3000 });
                },
            });
    }

    sendEmail(): void {
        const report = this.report();
        if (!report?._id) {
            this._snack.open('Generate a report first', 'Close', { duration: 3000 });
            return;
        }

        // For now, prompt for email
        const email = prompt('Enter email address:');
        if (!email) return;

        this.isSending.set(true);

        this._reportService
            .sendReportEmail(report._id, {
                recipients: [email],
                language: 'es',
            })
            .subscribe({
                next: (result) => {
                    this.isSending.set(false);
                    if (result.success) {
                        this._snack.open('Email sent!', 'Close', { duration: 3000 });
                    } else {
                        this._snack.open('Failed to send email', 'Close', { duration: 3000 });
                    }
                },
                error: () => {
                    this.isSending.set(false);
                    this._snack.open('Failed to send email', 'Close', { duration: 3000 });
                },
            });
    }

    downloadReport(): void {
        const report = this.report();
        if (!report?._id) {
            this._snack.open('Generate a report first', 'Close', { duration: 3000 });
            return;
        }

        const url = this._reportService.getReportDownloadUrl(report._id);
        window.open(url, '_blank');
    }

    goBack(): void {
        const configId = this.configId();
        const batchId = this.batchId();
        if (configId && batchId) {
            this._router.navigate(['/smart-batch', configId, 'batch', batchId]);
        } else if (configId) {
            this._router.navigate(['/smart-batch', configId]);
        }
    }

    /**
     * Open report builder. When batch has rows, pass real data via router state
     * so the builder can preview with actual batch responses.
     */
    openReportBuilder(): void {
        const configId = this.configId();
        if (!configId) return;

        const b = this.batch();
        const rows = b?.rows ?? [];
        const rowIndex = this.selectedRowIndex();
        const row = rowIndex != null
            ? rows.find((r) => r.rowIndex === rowIndex)
            : rows[0];

        const navigationExtras = row
            ? {
                  state: {
                      previewData: {
                          batchName: b?.name ?? 'Batch',
                          rowIndex: row.rowIndex,
                          inputData: row.inputData ?? {},
                          results: row.results ?? {},
                      },
                  },
              }
            : {};

        const templateId = this.selectedTemplate()?._id;
        const route = templateId
            ? ['/smart-batch', configId, 'report-builder', templateId]
            : ['/smart-batch', configId, 'report-builder'];

        this._router.navigate(route, navigationExtras);
    }
}
