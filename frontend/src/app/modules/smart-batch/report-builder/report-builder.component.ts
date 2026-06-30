import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { buildHelperDataPaths } from '../helper-data.util';
import { ReportBuilderPreviewDataService } from '../report-builder-preview-data.service';
import { ReportPreviewComponent } from '../report-preview/report-preview.component';
import { BatchConfiguration, SmartBatchService } from '../smart-batch.service';
import {
    ReportSection,
    SampleReportData,
    SmartReportService,
    SmartReportTemplate,
} from '../smart-report.service';
import { SendSampleModalComponent } from './send-sample-modal/send-sample-modal.component';
import { SignaturePadDialogComponent } from './signature-pad-dialog/signature-pad-dialog.component';

/**
 * Minimum allowed X / Y (in canonical 96 DPI px) for absolutely-positioned
 * overlays on the report paper (workspace logo, signature). Mirrors the
 * backend's `OVERLAY_SAFETY_INSET` (12 px) plus the default Puppeteer page
 * margin (40 px) so the overlay always sits inside the printable area and
 * the preview matches the generated PDF pixel-for-pixel.
 *
 * If the page margins are ever made user-configurable, recompute as
 * `pageMargin + safetyInset` from the same source.
 */
const OVERLAY_MIN_X = 52;
const OVERLAY_MIN_Y = 52;

@Component({
    selector: 'report-builder',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        DragDropModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        TranslocoModule,
        ReportPreviewComponent,
    ],
    templateUrl: './report-builder.component.html',
    animations: [fuseAnimations],
})
export class ReportBuilderComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _fb = inject(FormBuilder);
    private _snack = inject(MatSnackBar);
    private _reportService = inject(SmartReportService);
    private _dialog = inject(MatDialog);
    private _previewDataService = inject(ReportBuilderPreviewDataService);
    private _transloco = inject(TranslocoService);
    private _batchService = inject(SmartBatchService);

    configId = signal<string | null>(null);
    templateId = signal<string | null>(null);
    /** Optional batch configuration link persisted with the template. */
    linkedConfigId = signal<string | null>(null);
    configurations = this._batchService.configurations;

    template = signal<SmartReportTemplate | null>(null);
    // State
    isLoading = signal<boolean>(false);
    isSaving = signal<boolean>(false);
    isSendingSample = signal(false);
    isDownloadingSample = signal(false);
    isGeneratingAI = signal(false);

    // Logo
    logoUrl = signal<string | null>(null);
    activeTab = signal<'design' | 'data'>('design');
    showPassword = false;

    sections = signal<ReportSection[]>([]);
    selectedSection = signal<ReportSection | null>(null);

    /** Keep selected section in sync when sections array changes. */
    currentSelectedSection = computed(() => {
        const sel = this.selectedSection();
        if (!sel) return null;
        return this.sections().find((s) => s.id === sel.id) ?? null;
    });

    templateForm: FormGroup;

    sectionTypes = [
        { type: 'header', labelKey: 'smartReport.sectionHeader', icon: 'title' },
        { type: 'text', labelKey: 'smartReport.sectionText', icon: 'notes' },
        { type: 'field', labelKey: 'smartReport.sectionField', icon: 'data_object' },
        { type: 'table', labelKey: 'smartReport.sectionTable', icon: 'table_chart' },
        { type: 'image', labelKey: 'smartReport.sectionImage', icon: 'image' },
        { type: 'divider', labelKey: 'smartReport.sectionDivider', icon: 'horizontal_rule' },
        { type: 'spacer', labelKey: 'smartReport.sectionSpacer', icon: 'space_bar' },
    ];

    /** Mock data used to render the live preview. */
    previewData = signal<Record<string, any>>({
        batchName: 'Background Check - Batch #47',
        rowIndex: 0,
        inputData: {
            documentNumber: '1032386359',
            documentType: 'CC',
            fullName: 'JOHN DOE SMITH',
        },
        results: {
            1: {
                fullName: 'JOHN DOE SMITH',
                firstName: 'JOHN',
                lastName: 'DOE SMITH',
                documentNumber: '1032386359',
                documentType: 'CC',
                birthDate: '1990-05-15',
                gender: 'Male',
                nationality: 'Colombian',
                email: 'john.doe@example.com',
                phone: '+57 300 123 4567',
                address: 'Calle 100 #15-20, Bogota',
            },
            2: {
                isValid: true,
                score: 0.95,
                status: 'VERIFIED',
                verifiedAt: '2026-02-10T14:30:00Z',
            },
        },
    });

    constructor() {
        this.templateForm = this._fb.group({
            name: ['', [Validators.required, Validators.maxLength(150)]],
            description: ['', Validators.maxLength(500)],
            primaryColor: ['#4F46E5'],
            pageSize: ['A4'],
            orientation: ['portrait'],
            pdfEngine: ['puppeteer'],
            legend: [''],
            showPageNumbers: [false],
            pageNumberPosition: ['bottom-center'],
            watermarkEnabled: [false],
            watermarkType: ['text'],
            watermarkText: ['CONFIDENTIAL'],
            watermarkOpacity: [0.08],
            watermarkPattern: ['single'],
            securityEnabled: [false],
            securityPassword: [''],
            // Signature
            signatureEnabled: [false],
            signatureImage: [null],
            signatureX: [0],
            signatureY: [0],
            signatureWidth: [100],
            signatureHeight: [50],
            // Workspace logo (drag & resize overlay)
            // Visibility is implicit: a logo image (logoUrl) is the only switch.
            // Default position is clamped to the safe printable-area inset so
            // it lands neatly inside the page margins (matches the PDF output).
            logoX: [OVERLAY_MIN_X],
            logoY: [OVERLAY_MIN_Y],
            logoWidth: [160],
            logoHeight: [60],
            logoAutoFitContent: [false],
            // Section content top padding (canonical px)
            bodyTopPadding: [0],
        });
    }

    ngOnInit(): void {
        this._applyPreviewDataFromRouterState();
        this._batchService.getConfigurations().subscribe();

        this._route.params.subscribe((params) => {
            const routeConfigId = params['configId'] ?? null;

            this.configId.set(routeConfigId);

            this.templateId.set(params['templateId'] ?? null);

            if (routeConfigId) {
                this.linkedConfigId.set(routeConfigId);
            }

            if (this.templateId()) {
                this._loadTemplate();

                return;
            }

            this._initDefaultSections();
        });
    }

    /** True when we got preview data from report viewer navigation (don't overwrite with template.sampleData) */
    private _hasPreviewDataFromNavigation = false;

    /**
     * When navigating from report viewer with batch data, use it as preview.
     * Uses service first (reliable), then router state as fallback.
     */
    private _applyPreviewDataFromRouterState(): void {
        let data = this._previewDataService.consumePendingPreviewData();
        if (!data) {
            const state = this._router.getCurrentNavigation()?.extras?.state as
                | {
                      previewData?: SampleReportData;
                  }
                | undefined;
            data = state?.previewData ?? undefined;
        }
        if (data && (data.inputData || data.results)) {
            const preview: Record<string, any> = {
                batchName: data.batchName ?? 'Batch',
                rowIndex: data.rowIndex ?? 0,
                inputData: data.inputData ?? {},
                results: data.results ?? {},
            };
            this.previewData.set(preview);
            this._hasPreviewDataFromNavigation = true;
        }
    }

    // ============================================
    // DATA LOADING
    // ============================================

    private _loadTemplate(): void {
        const id = this.templateId();
        if (!id) return;

        this.isLoading.set(true);
        this._reportService.getTemplate(id).subscribe({
            next: (template) => {
                if (!template) {
                    this.isLoading.set(false);
                    this._snack.open(
                        this._transloco.translate('smartReport.failedToLoadTemplate'),
                        this._transloco.translate('smartReport.close'),
                        { duration: 4000 }
                    );
                    const configId = this.configId();
                    if (configId) {
                        this._router.navigate(['/smart-batch', configId]);
                    } else {
                        this._router.navigate(['/smart-batch']);
                    }
                    return;
                }

                this.template.set(template);
                this.sections.set(template.sections || []);
                if (!this.linkedConfigId() && template.batchConfiguration) {
                    const linkedId = this._resolveBatchConfigId(template.batchConfiguration);
                    if (linkedId) {
                        this.linkedConfigId.set(linkedId);
                    }
                }
                if (
                    !this._hasPreviewDataFromNavigation &&
                    template.sampleData &&
                    (template.sampleData.inputData || template.sampleData.results)
                ) {
                    this.previewData.set({
                        batchName: template.sampleData.batchName ?? 'Batch',
                        rowIndex: template.sampleData.rowIndex ?? 0,
                        inputData: template.sampleData.inputData ?? {},
                        results: template.sampleData.results ?? {},
                        errors: template.sampleData.errors ?? [],
                        report: template.sampleData.report,
                    });
                }
                this.templateForm.patchValue({
                    name: template.name,
                    description: template.description,
                    primaryColor: template.primaryColor || '#4F46E5',
                    pageSize: template.pageSize || 'A4',
                    orientation: template.orientation || 'portrait',
                    pdfEngine: template.pdfEngine || 'puppeteer',
                    legend: template.legend || '',
                    showPageNumbers: template.showPageNumbers || false,
                    pageNumberPosition: template.pageNumberPosition || 'bottom-center',
                    watermarkEnabled: template.watermark?.enabled || false,
                    watermarkType: template.watermark?.type || 'text',
                    watermarkText: template.watermark?.text || 'CONFIDENTIAL',
                    watermarkOpacity: template.watermark?.opacity ?? 0.08,
                    watermarkPattern: template.watermark?.pattern || 'single',
                    securityEnabled: template.security?.enabled || false,
                    // If enabled, assume password exists and mask it. If not, empty.
                    securityPassword: template.security?.enabled ? '******' : '',
                    // Signature - clamp X/Y to the safe printable-area inset
                    // so legacy templates render in the preview exactly where
                    // the PDF will place them.
                    signatureEnabled: template.signature?.enabled || false,
                    signatureImage: template.signature?.image || null,
                    signatureX: Math.max(OVERLAY_MIN_X, template.signature?.x || 0),
                    signatureY: Math.max(OVERLAY_MIN_Y, template.signature?.y || 0),
                    signatureWidth: template.signature?.width || 100,
                    signatureHeight: template.signature?.height || 50,
                    // Workspace logo overlay (visibility derived from logoUrl).
                    // Same clamp as signature for WYSIWYG with the PDF.
                    logoX: Math.max(OVERLAY_MIN_X, template.logoSettings?.x ?? OVERLAY_MIN_X),
                    logoY: Math.max(OVERLAY_MIN_Y, template.logoSettings?.y ?? OVERLAY_MIN_Y),
                    logoWidth: template.logoSettings?.width ?? 160,
                    logoHeight: template.logoSettings?.height ?? 60,
                    logoAutoFitContent: template.logoSettings?.autoFitContent ?? false,
                    // Section content top padding
                    bodyTopPadding: template.bodyTopPadding ?? 0,
                });
                this.logoUrl.set(template.logo || null);
                this.isLoading.set(false);
            },
            error: (err) => {
                console.error('Failed to load template:', err);
                this.isLoading.set(false);
                this._snack.open(
                    this._transloco.translate('smartReport.failedToLoadTemplate'),
                    this._transloco.translate('smartReport.close'),
                    { duration: 4000 }
                );
            },
        });
    }

    private _initDefaultSections(): void {
        this.sections.set([
            {
                id: this._generateId(),
                type: 'header',
                order: 0,
                label: 'Verification Report',
                staticContent: 'Verification Report',
                style: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
            },
            {
                id: this._generateId(),
                type: 'divider',
                order: 1,
                style: { color: '#4F46E5' },
            },
            {
                id: this._generateId(),
                type: 'field',
                order: 2,
                label: 'Document Number',
                dataPath: 'results.1.documentNumber',
            },
            {
                id: this._generateId(),
                type: 'field',
                order: 3,
                label: 'Full Name',
                dataPath: 'results.1.fullName',
            },
        ]);
    }

    // ============================================
    // DRAG & DROP
    // ============================================

    onDrop(event: CdkDragDrop<ReportSection[]>): void {
        const current = [...this.sections()];
        moveItemInArray(current, event.previousIndex, event.currentIndex);
        current.forEach((s, i) => (s.order = i));
        this.sections.set(current);
    }

    // ============================================
    // SECTION MANAGEMENT
    // ============================================

    generateLayoutWithAI(prompt: string): void {
        const p = prompt.trim();
        if (!p) return;

        this.isGeneratingAI.set(true);
        this._reportService.generateLayout(p, this.previewData()).subscribe({
            next: (suggestedSections) => {
                if (suggestedSections && suggestedSections.length > 0) {
                    this.sections.set(suggestedSections);
                    this.selectSection(suggestedSections[0]);
                    this.templateForm.markAsDirty();
                    this._snack.open(
                        this._transloco.translate('smartReport.layoutGeneratedSuccess'),
                        'Close',
                        { duration: 3000 }
                    );
                } else {
                    this._snack.open(
                        this._transloco.translate('smartReport.layoutGeneratedEmpty'),
                        'Close',
                        { duration: 4000 }
                    );
                }
                this.isGeneratingAI.set(false);
            },
            error: (err) => {
                console.error('Failed to generate layout via AI:', err);
                this._snack.open(
                    this._transloco.translate('smartReport.layoutGeneratedFailed'),
                    'Close',
                    { duration: 4000 }
                );
                this.isGeneratingAI.set(false);
            },
        });
    }

    addSection(type: string): void {
        const defaults: Record<string, Partial<ReportSection>> = {
            header: {
                staticContent: 'Section Title',
                style: { fontSize: 18, fontWeight: 'bold', textAlign: 'left' },
            },
            text: { staticContent: 'Enter your text here...', style: { fontSize: 12 } },
            field: { label: 'New Field', dataPath: '' },
            table: { label: 'Data Table', dataPath: 'results.1' },
            image: { staticContent: '', style: { textAlign: 'center' } },
            divider: {
                style: { color: this.templateForm.get('primaryColor')?.value || '#4F46E5' },
            },
            spacer: { style: { padding: '16' } },
        };

        const newSection: ReportSection = {
            id: this._generateId(),
            type: type as any,
            order: this.sections().length,
            ...defaults[type],
        };

        this.sections.update((list) => [...list, newSection]);
        this.selectSection(newSection);
    }

    selectSection(section: ReportSection): void {
        this.selectedSection.set({ ...section });
    }

    updateSection(id: string, updates: Partial<ReportSection>): void {
        this.sections.update((list) => list.map((s) => (s.id === id ? { ...s, ...updates } : s)));
        const sel = this.selectedSection();
        if (sel?.id === id) {
            this.selectedSection.set({ ...sel, ...updates });
        }
    }

    deleteSection(id: string): void {
        this.sections.update((list) => {
            const filtered = list.filter((s) => s.id !== id);
            filtered.forEach((s, i) => (s.order = i));
            return filtered;
        });
        if (this.selectedSection()?.id === id) {
            this.selectedSection.set(null);
        }
    }

    duplicateSection(section: ReportSection): void {
        const newSection: ReportSection = {
            ...section,
            id: this._generateId(),
            order: this.sections().length,
            label: section.label ? section.label + ' (copy)' : undefined,
        };
        this.sections.update((list) => [...list, newSection]);
    }

    // ============================================
    // STYLE HELPERS
    // ============================================

    updateSectionStyle(key: string, value: any): void {
        const section = this.currentSelectedSection();
        if (!section) return;
        this.updateSection(section.id, {
            style: { ...section.style, [key]: value },
        });
    }

    updateTextAlign(align: string): void {
        this.updateSectionStyle('textAlign', align);
    }

    updateFontSize(fontSize: number): void {
        this.updateSectionStyle('fontSize', fontSize);
    }

    updateFontWeight(weight: string): void {
        this.updateSectionStyle('fontWeight', weight);
    }

    updateStyleColor(color: string): void {
        this.updateSectionStyle('color', color);
    }

    updateBgColor(color: string): void {
        this.updateSectionStyle('backgroundColor', color);
    }

    // ============================================
    // SAVE
    // ============================================

    save(onSuccess?: () => void): void {
        if (this.templateForm.invalid) {
            this._snack.open('Please fill in all required fields', 'Close', { duration: 3000 });
            return;
        }

        this.isSaving.set(true);

        const formVal = this.templateForm.value;

        const templateData: Partial<SmartReportTemplate> = {
            ...formVal,
            sections: this.sections(),
            batchConfiguration: this.linkedConfigId() || undefined,
            sampleData: this.previewData(),
            logo: this.logoUrl() || undefined,
            watermark: {
                enabled: formVal.watermarkEnabled ?? false,
                type: formVal.watermarkType || 'text',
                text: formVal.watermarkText || 'CONFIDENTIAL',
                opacity: formVal.watermarkOpacity ?? 0.08,
                pattern: formVal.watermarkPattern || 'single',
            },
            security: {
                enabled: formVal.securityEnabled ?? false,
                password: formVal.securityPassword || '',
            },
            signature: {
                enabled: formVal.signatureEnabled ?? false,
                image: formVal.signatureImage || '',
                x: formVal.signatureX || 0,
                y: formVal.signatureY || 0,
                width: formVal.signatureWidth || 100,
                height: formVal.signatureHeight || 50,
            },
            logoSettings: {
                // Visibility tracks whether a logo image is present.
                enabled: !!this.logoUrl(),
                x: formVal.logoX ?? 32,
                y: formVal.logoY ?? 32,
                width: formVal.logoWidth ?? 160,
                height: formVal.logoHeight ?? 60,
                autoFitContent: formVal.logoAutoFitContent ?? false,
            },
            bodyTopPadding: formVal.bodyTopPadding ?? 0,
        };

        // Remove flat watermark fields from the spread
        delete (templateData as any).watermarkEnabled;
        delete (templateData as any).watermarkType;
        delete (templateData as any).watermarkText;
        delete (templateData as any).watermarkOpacity;
        delete (templateData as any).watermarkPattern;
        delete (templateData as any).securityEnabled;
        delete (templateData as any).securityPassword;
        delete (templateData as any).signatureEnabled;
        delete (templateData as any).signatureImage;
        delete (templateData as any).signatureX;
        delete (templateData as any).signatureY;
        delete (templateData as any).signatureWidth;
        delete (templateData as any).signatureHeight;
        delete (templateData as any).logoX;
        delete (templateData as any).logoY;
        delete (templateData as any).logoWidth;
        delete (templateData as any).logoHeight;
        delete (templateData as any).logoAutoFitContent;

        const id = this.templateId();

        if (id) {
            this._reportService.updateTemplate(id, templateData).subscribe({
                next: () => {
                    this._snack.open('Template saved!', 'Close', { duration: 3000 });
                    this.isSaving.set(false);
                    if (onSuccess) onSuccess();
                },
                error: (err) => {
                    console.error('Save failed:', err);
                    this._snack.open('Failed to save template', 'Close', { duration: 3000 });
                    this.isSaving.set(false);
                },
            });
        } else {
            this._reportService.createTemplate(templateData).subscribe({
                next: (created) => {
                    this._snack.open('Template created!', 'Close', { duration: 3000 });
                    this.isSaving.set(false);
                    if (onSuccess) onSuccess();
                    const linkedId = this.linkedConfigId();
                    if (linkedId) {
                        this._router.navigate([
                            '/smart-batch',
                            linkedId,
                            'report-builder',
                            created._id,
                        ]);
                    } else {
                        this._router.navigate(['/smart-batch', 'report-builder', created._id]);
                    }
                },
                error: (err) => {
                    console.error('Create failed:', err);
                    this._snack.open('Failed to create template', 'Close', { duration: 3000 });
                    this.isSaving.set(false);
                },
            });
        }
    }

    sendSample(): void {
        const id = this.templateId();
        if (!id) {
            this._snack.open(this._transloco.translate('smartReport.saveTemplateFirst'), 'Close', {
                duration: 3500,
            });
            return;
        }

        const defaultSubject = `Sample Report: ${this.templateForm.get('name')?.value || 'Template Preview'}`;
        const dialogRef = this._dialog.open(SendSampleModalComponent, {
            panelClass: 'send-sample-dialog',
            maxWidth: '560px',
            width: '95vw',
            disableClose: false,
            autoFocus: true,
            data: { defaultSubject, isSample: true },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (!result?.recipients?.length) return;

            const performSend = () => {
                this.isSendingSample.set(true);
                const id = this.templateId(); // Get ID again in case it was just created
                if (!id) return;

                this._reportService
                    .sendTemplateSample(id, {
                        recipients: result.recipients,
                        subject: result.subject,
                        language: 'en',
                        sampleData: this.previewData(),
                    })
                    .subscribe({
                        next: (res) => {
                            if (res.success) {
                                this._snack.open(
                                    this._transloco.translate('smartReport.samplePdfSentSuccess'),
                                    'Close',
                                    {
                                        duration: 3500,
                                    }
                                );
                            } else {
                                this._snack.open(
                                    res.error ||
                                        this._transloco.translate(
                                            'smartReport.failedToSendSamplePdf'
                                        ),
                                    'Close',
                                    {
                                        duration: 4000,
                                    }
                                );
                            }
                            this.isSendingSample.set(false);
                        },
                        error: (err) => {
                            console.error('Send sample failed:', err);
                            this._snack.open(
                                this._transloco.translate('smartReport.failedToSendSamplePdf'),
                                'Close',
                                {
                                    duration: 4000,
                                }
                            );
                            this.isSendingSample.set(false);
                        },
                    });
            };

            if (this.templateForm.dirty) {
                this.save(() => performSend());
            } else {
                performSend();
            }
        });
    }

    /**
     * Download a sample PDF for the current template using the same Puppeteer
     * pipeline as the email flow, so the user can inspect output without going
     * through their inbox. Mirrors `sendSample`'s save-if-dirty behaviour.
     */
    downloadSamplePdf(): void {
        if (!this.templateId()) {
            this._snack.open(this._transloco.translate('smartReport.saveTemplateFirst'), 'Close', {
                duration: 3500,
            });
            return;
        }

        const performDownload = (): void => {
            const id = this.templateId();
            if (!id) return;

            this.isDownloadingSample.set(true);
            this._reportService
                .downloadTemplateSample(id, { sampleData: this.previewData() })
                .subscribe({
                    next: async (blob) => {
                        let pdfBlob = blob;

                        const hasPdfMagic = await this._isPdfBlob(blob);
                        if (!hasPdfMagic) {
                            const recovered = await this._blobFromJsonBytes(blob);
                            if (!recovered) {
                                const errorMsg = await this._parseBlobError(blob);
                                this._snack.open(
                                    errorMsg ||
                                        this._transloco.translate('smartReport.invalidPdfReceived'),
                                    'Close',
                                    { duration: 4000 }
                                );
                                this.isDownloadingSample.set(false);
                                return;
                            }
                            pdfBlob = recovered;
                        }

                        const safeName = (this.templateForm.get('name')?.value || 'template')
                            .toString()
                            .replace(/[^a-z0-9-_]+/gi, '_')
                            .slice(0, 60);
                        const url = URL.createObjectURL(pdfBlob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `SmartReport_TemplateSample_${safeName || id}.pdf`;
                        a.click();
                        URL.revokeObjectURL(url);

                        this._snack.open(
                            this._transloco.translate('smartReport.pdfDownloaded'),
                            'Close',
                            { duration: 2000 }
                        );
                        this.isDownloadingSample.set(false);
                    },
                    error: (err) => {
                        console.error('Download sample failed:', err);
                        this._snack.open(
                            this._transloco.translate('smartReport.failedToDownloadPdf'),
                            'Close',
                            { duration: 4000 }
                        );
                        this.isDownloadingSample.set(false);
                    },
                });
        };

        if (this.templateForm.dirty) {
            this.save(() => performDownload());
        } else {
            performDownload();
        }
    }

    /** True when the first 4 bytes of the blob are the PDF magic header (%PDF). */
    private async _isPdfBlob(blob: Blob): Promise<boolean> {
        const slice = blob.slice(0, 5);
        const buf = await slice.arrayBuffer();
        const bytes = new Uint8Array(buf);
        return bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46;
    }

    /**
     * Some backends serialize a Buffer as a JSON object of `{0:37,1:80,...}`.
     * Reconstruct a real PDF Blob when that happens; return null if the bytes
     * don't actually start with the PDF magic header.
     */
    private async _blobFromJsonBytes(blob: Blob): Promise<Blob | null> {
        try {
            const text = await blob.text();
            const parsed = JSON.parse(text) as Record<string, number>;
            const keys = Object.keys(parsed).filter((k) => /^\d+$/.test(k));
            if (keys.length === 0) return null;
            keys.sort((a, b) => Number(a) - Number(b));
            const bytes = new Uint8Array(keys.length);
            keys.forEach((k, i) => (bytes[i] = parsed[k] & 0xff));
            if (bytes[0] !== 0x25 || bytes[1] !== 0x50 || bytes[2] !== 0x44 || bytes[3] !== 0x46) {
                return null;
            }
            return new Blob([bytes], { type: 'application/pdf' });
        } catch {
            return null;
        }
    }

    private async _parseBlobError(blob: Blob): Promise<string> {
        try {
            const text = await blob.text();
            const parsed = JSON.parse(text) as Record<string, unknown>;
            if (typeof parsed.error === 'string') return parsed.error;
            if (typeof parsed.message === 'string') return parsed.message;
            return text.slice(0, 80);
        } catch {
            return blob.type === 'application/json' || blob.type === 'text/plain'
                ? 'Server returned an error'
                : 'Invalid PDF content';
        }
    }

    // ============================================
    // NAVIGATION
    // ============================================

    goBack(): void {
        const configId = this.configId() ?? this.linkedConfigId();
        if (configId) {
            this._router.navigate(['/smart-batch', configId]);
        } else {
            this._router.navigate(['/smart-batch'], { queryParams: { tab: 'templates' } });
        }
    }

    setLinkedConfigId(value: string | null): void {
        this.linkedConfigId.set(value || null);
    }

    getConfigOptionLabel(config: BatchConfiguration): string {
        const id = config._id ?? config.id ?? '';
        const format = `${(config.inputFormat || '').toUpperCase()} → ${(config.outputFormat || '').toUpperCase()}`;
        const steps = config.steps?.length ?? 0;
        const suffix = id.length > 6 ? ` · …${id.slice(-6)}` : '';
        return `${config.name} · ${format} · ${steps} ${this._transloco.translate('smartBatchLanding.steps').toLowerCase()}${suffix}`;
    }

    private _resolveBatchConfigId(
        ref: string | BatchConfiguration | { _id?: string; id?: string } | null | undefined
    ): string | null {
        if (!ref) return null;
        if (typeof ref === 'string') return ref;
        return ref._id ?? ref.id ?? null;
    }

    getSectionIcon(type: string): string {
        return this.sectionTypes.find((t) => t.type === type)?.icon || 'help';
    }

    getSectionLabel(type: string): string {
        const labelKey = this.sectionTypes.find((t) => t.type === type)?.labelKey;
        return labelKey ? this._transloco.translate(labelKey) : type;
    }

    /** Wrapper for ReportPreviewComponent section click (preserves this context) */
    onPreviewSectionClick = (section: ReportSection): void => {
        this.selectSection(section);
    };

    /** Flattened data paths for the helper panel (only leaf paths for fields) */
    helperDataPaths = computed(() => buildHelperDataPaths(this.previewData()));

    /**
     * Effective content top padding shown next to the slider readout.
     *
     * Mirrors the "explicit wins" logic in ReportPreviewComponent:
     * - When `bodyTopPadding` > 0, the slider value is used directly.
     * - When 0 and auto-fit is on with a logo, the auto-fit offset is used.
     * - Otherwise 0.
     */
    getEffectiveContentPaddingTop(): number {
        const v = this.templateForm.value;
        const base = Number(v.bodyTopPadding) || 0;
        if (base > 0) return base;
        if (this.logoUrl() && v.logoAutoFitContent) {
            return (Number(v.logoY) || 0) + (Number(v.logoHeight) || 0) + 16;
        }
        return 0;
    }

    copyPathToClipboard(path: string): void {
        navigator.clipboard.writeText(path).then(
            () =>
                this._snack.open(
                    `${this._transloco.translate('smartReport.copied')}: ${path}`,
                    'Close',
                    { duration: 2000 }
                ),
            () =>
                this._snack.open(this._transloco.translate('smartReport.failedToCopy'), 'Close', {
                    duration: 2000,
                })
        );
    }

    // ============================================
    // LOGO HELPERS
    // ============================================

    onLogoUpload(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;

        // Validate file size (max 500KB for base64 storage)
        if (file.size > 512_000) {
            this._snack.open('Logo file must be less than 500KB', 'Close', { duration: 3500 });
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            this.logoUrl.set(reader.result as string);
            this.templateForm.markAsDirty();
        };
        reader.readAsDataURL(file);
    }

    removeLogo(): void {
        this.logoUrl.set(null);
        this.templateForm.markAsDirty();
    }

    onLogoPositionChange(pos: { x: number; y: number }): void {
        // Clamp to the safe printable-area inset so the preview never lets
        // the user place the logo where the PDF would have to nudge it.
        this.templateForm.patchValue({
            logoX: Math.max(OVERLAY_MIN_X, Math.round(pos.x)),
            logoY: Math.max(OVERLAY_MIN_Y, Math.round(pos.y)),
        });
        this.templateForm.markAsDirty();
    }

    onLogoSizeChange(size: { width: number; height: number }): void {
        this.templateForm.patchValue({
            logoWidth: Math.round(size.width),
            logoHeight: Math.round(size.height),
        });
        this.templateForm.markAsDirty();
    }

    // ============================================
    // SIGNATURE METHODS
    // ============================================

    onSignaturePositionChange(pos: { x: number; y: number }): void {
        // Clamp to the same safe printable-area inset used for the logo so
        // the preview matches the generated PDF exactly.
        this.templateForm.patchValue({
            signatureX: Math.max(OVERLAY_MIN_X, Math.round(pos.x)),
            signatureY: Math.max(OVERLAY_MIN_Y, Math.round(pos.y)),
        });
        this.templateForm.markAsDirty();
    }

    onSignatureSizeChange(size: { width: number; height: number }): void {
        this.templateForm.patchValue({
            signatureWidth: Math.round(size.width),
            signatureHeight: Math.round(size.height),
        });
        this.templateForm.markAsDirty();
    }

    openSignatureDialog(): void {
        this._dialog
            .open(SignaturePadDialogComponent, {
                width: '640px',
                disableClose: true,
                autoFocus: false,
            })
            .afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.templateForm.patchValue({
                        signatureImage: result,
                        signatureEnabled: true,
                    });
                    this.templateForm.markAsDirty();
                }
            });
    }

    // ============================================
    // PRIVATE HELPERS
    // ============================================

    private _generateId(): string {
        return 'section_' + Math.random().toString(36).substring(2, 11);
    }
}
