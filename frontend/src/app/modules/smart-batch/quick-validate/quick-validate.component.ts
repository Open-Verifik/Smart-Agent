import { CommonModule } from '@angular/common';
import { Component, computed, DestroyRef, ElementRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoDirective, TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    autoFilledFieldsForStep,
    BatchRequiredField,
    dependenciesAskedOfTheUser,
    extractRequiredFieldsFromConfig,
    getStepCompatibilityViews,
    StepAutoFilledField,
    StepCompatibilityView,
    stripInlineMarkdown,
} from '../batch-required-fields.util';
import { BatchConfiguration, SmartBatch, SmartBatchService } from '../smart-batch.service';
/** Represents a required field extracted from step dependencies */
interface RequiredField {
    field: string;
    required: boolean;
    stepName: string;
    stepSequence: number;
    enumValues?: string[];
    type?: string;
    description?: string;
    dependencyGroup?: string;
    requiredWhen?: { field: string; in?: string[] };
    dateFormat?: string;
}

/** AppFeature dependency entry (subset used by batch validation) */
interface FeatureDependency {
    field: string;
    type?: string;
    required?: boolean;
    enum?: string[] | null;
    description?: string;
    dependencyGroup?: string;
    requiredWhen?: { field: string; in?: string[] };
    dateFormat?: string;
}

/** Per-endpoint summary used to render the "Expected fields" panel */
interface EndpointFieldsView {
    sequence: number;
    name: string;
    code: string;
    enabled: boolean;
    xor: {
        nameFields: RequiredField[];
        documentFields: RequiredField[];
        dobWhenValues: string | null;
    } | null;
    requiredFields: RequiredField[];
    conditionalFields: RequiredField[];
    optionalFields: RequiredField[];
    autoFilledFields: StepAutoFilledField[];
}

const KNOWN_FIELD_LABELS: Record<string, { en: string; es: string }> = {
    documentType: { en: 'Document type', es: 'Tipo de documento' },
    documentNumber: { en: 'Document number', es: 'Número de documento' },
    plate: { en: 'License plate', es: 'Placa del vehículo' },
    vin: { en: 'VIN / Chassis number', es: 'VIN / Número de chasis' },
    fullName: { en: 'Full name', es: 'Nombre completo' },
    firstSurname: { en: 'First surname', es: 'Primer apellido' },
    date: { en: 'Expedition date (DD/MM/YYYY)', es: 'Fecha de expedición (DD/MM/AAAA)' },
    dateOfBirth: { en: 'Date of birth', es: 'Fecha de nacimiento' },
    expirationDate: { en: 'Expiration date', es: 'Fecha de expiración' },
    city: { en: 'City', es: 'Ciudad' },
};

const KNOWN_FIELD_PLACEHOLDERS: Record<string, { en: string; es: string }> = {
    documentNumber: { en: 'e.g. 1032386359', es: 'Ej. 1032386359' },
    plate: { en: 'e.g. ABC123', es: 'Ej. ABC123' },
    vin: { en: 'e.g. JM8KE2W72J0420517', es: 'Ej. JM8KE2W72J0420517' },
    fullName: { en: 'e.g. Juan Pérez Gómez', es: 'Ej. Juan Pérez Gómez' },
    date: { en: 'DD/MM/YYYY', es: 'DD/MM/AAAA' },
};

@Component({
    selector: 'quick-validate',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        TranslocoDirective,
        TranslocoModule,
    ],
    templateUrl: './quick-validate.component.html',
    styles: [
        `
            .qv-control:is(:user-invalid, .qv-user-invalid) {
                border-color: #dc2626;
                background-color: rgba(254, 242, 242, 0.55);
            }
            :host-context(.dark) .qv-control:is(:user-invalid, .qv-user-invalid) {
                border-color: #f87171;
                background-color: rgba(127, 29, 29, 0.18);
            }
            .qv-control:focus-visible {
                outline: 2px solid #1c1917;
                outline-offset: 2px;
            }
            :host-context(.dark) .qv-control:focus-visible {
                outline-color: #f5f5f4;
            }
            details.qv-step-card > summary {
                list-style: none;
            }
            details.qv-step-card > summary::-webkit-details-marker {
                display: none;
            }
            details.qv-step-card[open] .qv-chevron {
                transform: rotate(180deg);
            }
        `,
    ],
})
export class QuickValidateComponent implements OnInit, OnDestroy {
    private _smartBatchService = inject(SmartBatchService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _formBuilder = inject(FormBuilder);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _destroyRef = inject(DestroyRef);
    private _host = inject<ElementRef<HTMLElement>>(ElementRef);

    configId = signal('');
    batchId = signal<string | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    batch = signal<SmartBatch | null>(null);
    isLoading = signal(true);
    isSubmitting = signal(false);
    submitAttempted = signal(false);
    errorAnnouncement = signal('');
    from = signal<string | null>(null);
    form!: FormGroup;
    /** Current documentType value for step compatibility hints. */
    documentTypeValue = signal<string>('');
    private _announceTimer: ReturnType<typeof setTimeout> | null = null;

    isAppendMode = computed(() => !!this.batchId());
    requiredFields = computed(() => {
        const preferredOrder = ['documentType', 'documentNumber', 'plate', 'vin'];
        return [...extractRequiredFieldsFromConfig(this.configuration())].sort((a, b) => {
            if (a.required !== b.required) return a.required ? -1 : 1;
            const ia = preferredOrder.indexOf(a.field);
            const ib = preferredOrder.indexOf(b.field);
            if (ia !== -1 || ib !== -1) {
                if (ia === -1) return 1;
                if (ib === -1) return -1;
                return ia - ib;
            }
            return a.field.localeCompare(b.field);
        });
    });
    hasDocumentTypeField = computed(() =>
        this.requiredFields().some((field) => field.field === 'documentType')
    );
    stepCompatibilityViews = computed((): StepCompatibilityView[] => {
        const documentType = this.documentTypeValue().trim();
        if (!documentType) return [];
        const formValues = (this.form?.value ?? {}) as Record<string, unknown>;
        return getStepCompatibilityViews(this.configuration(), {
            ...formValues,
            documentType,
        });
    });
    showStepCompatibility = computed(
        () => this.hasDocumentTypeField() && this.stepCompatibilityViews().length > 0
    );
    incompatibleStepViews = computed(() =>
        this.stepCompatibilityViews().filter((view) => !view.compatible)
    );
    compatibleStepCount = computed(
        () => this.stepCompatibilityViews().filter((view) => view.compatible).length
    );
    autoFilledParamCount = computed(() =>
        this.endpointFieldsViews().reduce((sum, view) => sum + view.autoFilledFields.length, 0)
    );
    pageTitleKey = computed(() =>
        this.isAppendMode()
            ? 'batchProcessing.addOneRecordTitle'
            : 'smartBatchSystemPresets.quickValidateTitle'
    );
    pageSubtitle = computed(() => {
        if (this.isAppendMode()) {
            return this.batch()?.name ?? this.configuration()?.name ?? '';
        }

        return this.configuration()?.name ?? '';
    });

    endpointFieldsViews = computed(() => {
        const config = this.configuration();
        if (!config || !config.steps) return [];
        return [...config.steps]
            .filter((step) => step.enabled !== false)
            .sort((a, b) => a.sequence - b.sequence)
            .map((step) => this.buildEndpointFieldsView(step));
    });

    ngOnDestroy(): void {
        if (this._announceTimer) {
            clearTimeout(this._announceTimer);
            this._announceTimer = null;
        }
    }

    ngOnInit(): void {
        this._route.params.subscribe((params) => {
            const id = params['configId'];
            const batchId = params['batchId'] ?? null;
            this.configId.set(id);
            this.batchId.set(batchId);
            this._loadConfiguration(id);

            if (batchId) {
                this._loadBatch(batchId);
            } else {
                this.batch.set(null);
            }
        });

        this._route.queryParams.subscribe((queryParams) => {
            this.from.set(queryParams['from'] ?? null);
        });
    }

    private _loadConfiguration(id: string): void {
        this.isLoading.set(true);
        this._smartBatchService.getConfiguration(id).subscribe({
            next: (res) => {
                this.configuration.set(res.data);
                this._buildForm(this.requiredFields());
                this.isLoading.set(false);
            },
            error: () => {
                this.isLoading.set(false);
            },
        });
    }

    private _loadBatch(id: string): void {
        this._smartBatchService.getSmartBatch(id).subscribe({
            next: (res) => {
                this.batch.set(res.data);
            },
        });
    }

    private _buildForm(fields: BatchRequiredField[]): void {
        const group: Record<string, unknown> = {};
        fields.forEach((field) => {
            const validators = field.required ? [Validators.required] : [];
            group[field.field] = ['', validators];
        });
        this.form = this._formBuilder.group(group);
        this.submitAttempted.set(false);
        this.errorAnnouncement.set('');
        this.documentTypeValue.set('');

        const documentTypeControl = this.form.get('documentType');
        if (documentTypeControl) {
            documentTypeControl.valueChanges
                .pipe(takeUntilDestroyed(this._destroyRef))
                .subscribe((value) => {
                    this.documentTypeValue.set(value != null ? String(value) : '');
                });
        }
    }

    goToBatchUpload(): void {
        if (this.isAppendMode()) {
            this._router.navigate([
                '/smart-batch',
                this.configId(),
                'batch',
                this.batchId(),
                'inputs',
            ]);
            return;
        }

        this._router.navigate(['/smart-batch', this.configId(), 'batch', 'new']);
    }

    goBack(): void {
        if (this.isAppendMode()) {
            this._router.navigate(['/smart-batch', this.configId(), 'batch', this.batchId()]);
            return;
        }

        if (this.from() === 'dashboard') {
            this._router.navigate(['/smart-batch', this.configId()]);
            return;
        }

        this._router.navigate(['/smart-batch/workspace'], { queryParams: { tab: 'templates' } });
    }

    submit(): void {
        if (!this.form || !this.configId() || this.isSubmitting()) {
            return;
        }

        if (this.form.invalid) {
            this.submitAttempted.set(true);
            this.form.markAllAsTouched();
            this._focusFirstInvalidControl();
            return;
        }

        this.isSubmitting.set(true);
        const row: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(this.form.value || {})) {
            row[key] = typeof value === 'string' ? value.trim() : value;
        }

        if (this.isAppendMode()) {
            this._submitAppend(row);
            return;
        }

        this._submitNewBatch(row);
    }

    showFieldError(fieldName: string): boolean {
        const control = this.form?.get(fieldName);
        if (!control) return false;
        return control.invalid && (control.touched || this.submitAttempted());
    }

    onFieldBlur(field: BatchRequiredField): void {
        const control = this.form?.get(field.field);
        if (!control) return;
        control.markAsTouched();
        if (control.invalid) {
            this._announceFieldError(field);
        } else {
            this._clearErrorAnnouncement();
        }
    }

    onFieldInput(field: BatchRequiredField): void {
        const control = this.form?.get(field.field);
        if (control?.valid) {
            this._clearErrorAnnouncement();
        }
    }

    fieldDescribedBy(field: BatchRequiredField): string | null {
        const ids: string[] = [];
        if (this.fieldHint(field)) {
            ids.push(`${field.field}-hint`);
        }
        if (this.showFieldError(field.field)) {
            ids.push(`${field.field}-error`);
        }
        return ids.length ? ids.join(' ') : null;
    }

    fieldErrorMessage(field: BatchRequiredField): string {
        const isEs = this._isSpanish();
        const label = this.fieldLabel(field);
        if (field.enumValues?.length) {
            return isEs ? `Selecciona una opción para ${label}.` : `Please select an option for ${label}.`;
        }
        return isEs ? `Ingresa ${label.toLowerCase()} para continuar.` : `Please enter ${label.toLowerCase()} to continue.`;
    }

    selectPlaceholder(): string {
        return this._isSpanish() ? 'Selecciona una opción...' : 'Select an option...';
    }

    fieldPlaceholder(field: BatchRequiredField): string {
        const preset = KNOWN_FIELD_PLACEHOLDERS[field.field];
        if (preset) return this._isSpanish() ? preset.es : preset.en;
        return field.field;
    }

    fieldLabel(field: BatchRequiredField): string {
        const known = KNOWN_FIELD_LABELS[field.field];
        if (known) return this._isSpanish() ? known.es : known.en;
        const cleaned = stripInlineMarkdown(field.description);
        if (cleaned && cleaned.length <= 54) return cleaned.replace(/\.$/, '');
        return field.field;
    }

    fieldHint(field: BatchRequiredField): string {
        const cleaned = stripInlineMarkdown(field.description);
        if (!cleaned) return '';
        const label = this.fieldLabel(field);
        if (cleaned.replace(/\.$/, '').toLowerCase() === label.toLowerCase()) return '';
        return cleaned;
    }

    cleanDescription(text?: string | null): string {
        return stripInlineMarkdown(text);
    }

    pipelineSummaryText(): string {
        const steps = this.endpointFieldsViews().length;
        const userFields = this.requiredFields().length;
        const autoFilled = this.autoFilledParamCount();
        if (this._isSpanish()) {
            if (autoFilled > 0) {
                return `${steps} consultas · Solo ingresas ${userFields} ${userFields === 1 ? 'campo' : 'campos'} — ${autoFilled} parámetros se completan automáticamente desde pasos previos.`;
            }
            return `${steps} consultas · Ingresas ${userFields} ${userFields === 1 ? 'campo' : 'campos'}.`;
        }
        if (autoFilled > 0) {
            return `${steps} checks · You enter ${userFields} ${userFields === 1 ? 'field' : 'fields'} — ${autoFilled} downstream parameters are auto-filled automatically.`;
        }
        return `${steps} checks · You enter ${userFields} ${userFields === 1 ? 'field' : 'fields'}.`;
    }

    autoFilledLabel(): string {
        return this._isSpanish() ? 'Completado automáticamente' : 'Auto-filled automatically';
    }

    autoFilledShortLabel(): string {
        return this._isSpanish() ? 'Automático' : 'Auto-filled';
    }

    allCompatibleLabel(): string {
        const count = this.compatibleStepCount();
        const docType = this.documentTypeValue();
        return this._isSpanish()
            ? `Los ${count} pasos son compatibles con ${docType}`
            : `All ${count} steps will run with ${docType}`;
    }

    someSkippedLabel(): string {
        const skipped = this.incompatibleStepViews().length;
        const ok = this.compatibleStepCount();
        const docType = this.documentTypeValue();
        return this._isSpanish()
            ? `${ok} pasos se ejecutarán y ${skipped} se omitirán con ${docType}`
            : `${ok} steps will run and ${skipped} will be skipped with ${docType}`;
    }

    viewAllStepsLabel(): string {
        return this._isSpanish() ? 'Ver detalle por paso' : 'View per-step details';
    }

    autoFilledBadgeText(item: StepAutoFilledField): string {
        const isEs = this._isSpanish();
        if (item.source === 'default') {
            return isEs ? `Predeterminado: ${item.defaultValue}` : `Default: ${item.defaultValue}`;
        }
        const steps = item.fromSteps ?? [];
        if (steps.length === 1) {
            return isEs ? `Automático desde Paso ${steps[0]}` : `Auto-filled from Step ${steps[0]}`;
        }
        if (steps.length > 1) {
            return isEs
                ? `Automático desde Paso ${steps[0]} (respaldo Paso ${steps.slice(1).join(', ')})`
                : `Auto-filled from Step ${steps[0]} (fallback Step ${steps.slice(1).join(', ')})`;
        }
        return isEs ? 'Automático desde paso anterior' : 'Auto-filled from prior step';
    }

    private _isSpanish(): boolean {
        return (this._transloco.getActiveLang() || 'en').toLowerCase().startsWith('es');
    }

    private _focusFirstInvalidControl(): void {
        const firstInvalid = this.requiredFields().find((field) => this.form?.get(field.field)?.invalid);
        if (!firstInvalid) return;
        const el = this._host.nativeElement.querySelector<HTMLElement>(`#${CSS.escape(firstInvalid.field)}`);
        el?.focus();
    }

    private _announceFieldError(field: BatchRequiredField): void {
        this._clearErrorAnnouncement();
        const message = `${this.fieldLabel(field)}: ${this.fieldErrorMessage(field)}`;
        this._announceTimer = setTimeout(() => {
            this.errorAnnouncement.set(message);
        }, 450);
    }

    private _clearErrorAnnouncement(): void {
        if (this._announceTimer) {
            clearTimeout(this._announceTimer);
            this._announceTimer = null;
        }
        if (this.errorAnnouncement()) {
            this.errorAnnouncement.set('');
        }
    }

    private _submitAppend(row: Record<string, unknown>): void {
        const batchId = this.batchId();
        if (!batchId) {
            this.isSubmitting.set(false);
            return;
        }

        const priorTotalRows = this.batch()?.totalRows ?? 0;

        this._smartBatchService.appendSmartBatchRows(batchId, [row]).subscribe({
            next: () => {
                this._router.navigate(['/smart-batch', this.configId(), 'batch', batchId], {
                    queryParams: { autostart: '1', rowIndex: String(priorTotalRows) },
                });
            },
            error: () => {
                this.isSubmitting.set(false);
                this._snackBar.open(
                    this._transloco.translate('batchProcessing.appendFailed'),
                    undefined,
                    { duration: 4000 }
                );
            },
        });
    }

    private _submitNewBatch(row: Record<string, unknown>): void {
        const configName = this.configuration()?.name ?? 'Quick validation';

        this._smartBatchService
            .createSmartBatch({
                batchConfiguration: this.configId(),
                name: `${configName} — ${new Date().toISOString().slice(0, 16)}`,
                rows: [row],
            })
            .subscribe({
                next: (res) => {
                    const batchId = res.data._id;
                    if (!batchId) {
                        this.isSubmitting.set(false);
                        return;
                    }
                    this._router.navigate(['/smart-batch', this.configId(), 'batch', batchId], {
                        queryParams: { autostart: '1', reportOnComplete: '1', rowIndex: '0' },
                    });
                },
                error: () => {
                    this.isSubmitting.set(false);
                },
            });
    }

    stepSkipReason(view: StepCompatibilityView): string {
        const reason = view.skipReason;
        if (!reason) return '';
        return this._transloco.translate('smartBatchSystemPresets.skipReasonDocumentType', {
            documentType: reason.value,
            stepName: view.stepName,
            allowedValues: reason.allowedValues.join(', '),
        });
    }

    private normalizeDependencyGroup(d: { dependencyGroup?: string }): string | null {
        if (d.dependencyGroup == null) return null;
        const s = String(d.dependencyGroup).trim();
        return s.length ? s : null;
    }

    private buildEndpointFieldsView(step: any): EndpointFieldsView {
        const feature = step.appFeature as {
            name?: string;
            code?: string;
            dependencies?: unknown[];
        };
        const fields: RequiredField[] = dependenciesAskedOfTheUser(step, this.configuration()).map((dep) => ({
            field: dep.field,
            required: Boolean(dep.required),
            stepName: feature?.name || 'Unknown Step',
            stepSequence: step.sequence,
            enumValues: dep.enum || undefined,
            type: dep.type || 'string',
            description: dep.description,
            dependencyGroup: dep.dependencyGroup,
            requiredWhen: dep.requiredWhen,
            dateFormat: dep.dateFormat,
        }));

        const xor = this.computeXorFieldGroups(fields);

        const autoFilledFields = autoFilledFieldsForStep(step, this.configuration());
        const baseView = {
            sequence: step.sequence,
            name: feature?.name || 'Unknown Step',
            code: feature?.code || '',
            enabled: step.enabled !== false,
            autoFilledFields,
        };

        if (xor) {
            return {
                ...baseView,
                xor,
                requiredFields: [],
                conditionalFields: [],
                optionalFields: [],
            };
        }

        const requiredFields = fields
            .filter((f) => f.required)
            .sort((a, b) => a.field.localeCompare(b.field));
        const conditionalFields = fields
            .filter((f) => !f.required && this.fieldHasConditionalRule(f))
            .sort((a, b) => a.field.localeCompare(b.field));
        const optionalFields = fields
            .filter((f) => !f.required && !this.fieldHasConditionalRule(f))
            .sort((a, b) => a.field.localeCompare(b.field));

        return {
            ...baseView,
            xor: null,
            requiredFields,
            conditionalFields,
            optionalFields,
        };
    }

    private computeXorFieldGroups(fields: RequiredField[]): {
        nameFields: RequiredField[];
        documentFields: RequiredField[];
        dobWhenValues: string | null;
    } | null {
        const minimal: FeatureDependency[] = fields.map((f) => ({
            field: f.field,
            dependencyGroup: f.dependencyGroup,
            requiredWhen: f.requiredWhen,
        }));
        const xor = this.buildXorGroupMetadata(minimal);
        if (!xor) return null;

        const { docGroupIds, nameGroupIds } = xor;

        const nameFields = fields
            .filter((f) => {
                const g = this.normalizeDependencyGroup(f);
                return g !== null && nameGroupIds.has(g);
            })
            .sort((a, b) => a.field.localeCompare(b.field));

        const docOrder = ['documentType', 'documentNumber', 'dateOfBirth', 'expirationDate'];
        const docFields = fields.filter((f) => {
            const g = this.normalizeDependencyGroup(f);
            return g !== null && docGroupIds.has(g);
        });
        const documentFields = [...docFields].sort((a, b) => {
            const ia = docOrder.indexOf(a.field);
            const ib = docOrder.indexOf(b.field);
            if (ia === -1 && ib === -1) return a.field.localeCompare(b.field);
            if (ia === -1) return 1;
            if (ib === -1) return -1;
            return ia - ib;
        });

        const dob = documentFields.find(
            (d) => d.field === 'dateOfBirth' && d.requiredWhen?.in?.length
        );
        const dobWhenValues = dob?.requiredWhen?.in?.join(', ') ?? null;

        if (nameFields.length === 0 || documentFields.length === 0) return null;

        return { nameFields, documentFields, dobWhenValues };
    }

    private buildXorGroupMetadata(deps: FeatureDependency[]): {
        docGroupIds: Set<string>;
        nameGroupIds: Set<string>;
    } | null {
        const grouped = new Map<string, FeatureDependency[]>();
        for (const d of deps) {
            const g = this.normalizeDependencyGroup(d);
            if (g === null) continue;
            if (!grouped.has(g)) grouped.set(g, []);
            grouped.get(g)!.push(d);
        }
        if (grouped.size < 2) return null;

        const docGroupIds = new Set<string>();
        const nameGroupIds = new Set<string>();
        for (const [gid, list] of grouped) {
            if (list.some((x) => x.field === 'documentType' || x.field === 'documentNumber')) {
                docGroupIds.add(gid);
            }
            if (list.some((x) => x.field === 'fullName')) {
                nameGroupIds.add(gid);
            }
        }
        if (docGroupIds.size === 0 || nameGroupIds.size === 0) return null;
        return { docGroupIds, nameGroupIds };
    }

    fieldHasConditionalRule(field: RequiredField): boolean {
        const w = field.requiredWhen;
        return Boolean(w?.field && Array.isArray(w.in) && w.in.length > 0);
    }
}
