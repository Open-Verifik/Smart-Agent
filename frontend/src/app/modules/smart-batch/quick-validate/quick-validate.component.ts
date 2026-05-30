import { CommonModule } from '@angular/common';
import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
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
    BatchRequiredField,
    extractRequiredFieldsFromConfig,
    getStepCompatibilityViews,
    StepCompatibilityView,
} from '../batch-required-fields.util';
import { BatchConfiguration, SmartBatch, SmartBatchService } from '../smart-batch.service';
import { isClientVisibleBatchDependencyField } from '../smart-batch-dependency.constants';

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
}

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
})
export class QuickValidateComponent implements OnInit {
    private _smartBatchService = inject(SmartBatchService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _formBuilder = inject(FormBuilder);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _destroyRef = inject(DestroyRef);

    configId = signal('');
    batchId = signal<string | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    batch = signal<SmartBatch | null>(null);
    isLoading = signal(true);
    isSubmitting = signal(false);
    from = signal<string | null>(null);
    form!: FormGroup;
    /** Current documentType value for step compatibility hints. */
    documentTypeValue = signal<string>('');

    isAppendMode = computed(() => !!this.batchId());
    requiredFields = computed(() => extractRequiredFieldsFromConfig(this.configuration()));
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
        return config.steps
            .filter((step) => step.enabled !== false)
            .map((step) => this.buildEndpointFieldsView(step));
    });

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

        this._router.navigate(['/smart-batch'], { queryParams: { tab: 'templates' } });
    }

    submit(): void {
        if (!this.form || this.form.invalid || !this.configId()) {
            return;
        }

        this.isSubmitting.set(true);
        const row = { ...this.form.value };

        if (this.isAppendMode()) {
            this._submitAppend(row);
            return;
        }

        this._submitNewBatch(row);
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

    fieldLabel(field: BatchRequiredField): string {
        return field.description || field.field;
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
        const fields: RequiredField[] = ((feature?.dependencies || []) as Array<Record<string, any>>)
            .filter((dep) => dep?.field && isClientVisibleBatchDependencyField(String(dep.field)))
            .map((dep) => ({
                field: String(dep.field),
                required: dep.required || false,
                stepName: feature?.name || 'Unknown Step',
                stepSequence: step.sequence,
                enumValues: (dep.enum as string[] | null | undefined) || undefined,
                type: (dep.type as string) || 'string',
                description: (dep.description as string) || undefined,
                dependencyGroup: dep.dependencyGroup as string | undefined,
                requiredWhen: dep.requiredWhen as { field: string; in?: string[] } | undefined,
                dateFormat: (dep.dateFormat as string) || undefined,
            }));

        const xor = this.computeXorFieldGroups(fields);

        const baseView = {
            sequence: step.sequence,
            name: feature?.name || 'Unknown Step',
            code: feature?.code || '',
            enabled: step.enabled !== false,
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
