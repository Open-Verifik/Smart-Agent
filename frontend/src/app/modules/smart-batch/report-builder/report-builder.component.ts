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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { buildHelperDataPaths } from '../helper-data.util';
import { ReportBuilderPreviewDataService } from '../report-builder-preview-data.service';
import { ReportPreviewComponent } from '../report-preview/report-preview.component';
import {
    ReportSection,
    SampleReportData,
    SmartReportService,
    SmartReportTemplate,
} from '../smart-report.service';
import { SendSampleModalComponent } from './send-sample-modal/send-sample-modal.component';

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

    configId = signal<string | null>(null);
    templateId = signal<string | null>(null);

    template = signal<SmartReportTemplate | null>(null);
    isLoading = signal(false);
    isSaving = signal(false);
    isSendingSample = signal(false);

    // Logo
    logoUrl = signal<string | null>(null);

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
        });
    }

    ngOnInit(): void {
        this._applyPreviewDataFromRouterState();

        this._route.params.subscribe((params) => {
            this.configId.set(params['configId']);
            this.templateId.set(params['templateId']);

            if (this.templateId()) {
                this._loadTemplate();
            } else {
                this._initDefaultSections();
            }
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
                this.template.set(template);
                this.sections.set(template.sections || []);
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
                });
                this.logoUrl.set(template.logo || null);
                this.isLoading.set(false);
            },
            error: (err) => {
                console.error('Failed to load template:', err);
                this.isLoading.set(false);
                this._snack.open('Failed to load template', 'Close', { duration: 3000 });
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

    save(): void {
        if (this.templateForm.invalid) {
            this._snack.open('Please fill in all required fields', 'Close', { duration: 3000 });
            return;
        }

        this.isSaving.set(true);

        const templateData: Partial<SmartReportTemplate> = {
            ...this.templateForm.value,
            sections: this.sections(),
            batchConfiguration: this.configId() || undefined,
            sampleData: this.previewData(),
            logo: this.logoUrl() || undefined,
        };

        const id = this.templateId();

        if (id) {
            this._reportService.updateTemplate(id, templateData).subscribe({
                next: () => {
                    this._snack.open('Template saved!', 'Close', { duration: 3000 });
                    this.isSaving.set(false);
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
                    this._router.navigate([
                        '/smart-batch',
                        this.configId(),
                        'report-builder',
                        created._id,
                    ]);
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

            this.isSendingSample.set(true);
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
                                    this._transloco.translate('smartReport.failedToSendSamplePdf'),
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
        });
    }

    // ============================================
    // NAVIGATION
    // ============================================

    goBack(): void {
        const configId = this.configId();
        if (configId) {
            this._router.navigate(['/smart-batch', configId]);
        } else {
            this._router.navigate(['/smart-batch']);
        }
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
        };
        reader.readAsDataURL(file);
    }

    removeLogo(): void {
        this.logoUrl.set(null);
    }

    // ============================================
    // PRIVATE HELPERS
    // ============================================

    private _generateId(): string {
        return 'section_' + Math.random().toString(36).substring(2, 11);
    }
}
