import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
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
} from '../batch-required-fields.util';
import { BatchConfiguration, SmartBatch, SmartBatchService } from '../smart-batch.service';

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

    configId = signal('');
    batchId = signal<string | null>(null);
    configuration = signal<BatchConfiguration | null>(null);
    batch = signal<SmartBatch | null>(null);
    isLoading = signal(true);
    isSubmitting = signal(false);
    form!: FormGroup;

    isAppendMode = computed(() => !!this.batchId());
    requiredFields = computed(() => extractRequiredFieldsFromConfig(this.configuration()));
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
}
