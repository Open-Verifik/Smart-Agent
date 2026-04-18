import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    Input,
    OnInit,
    TemplateRef,
    ViewChild,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

import { FuseConfirmationService } from '@fuse/services/confirmation';

import { SetupService } from '../../setup.service';
import { DocumentVerificationTypeListComponent } from './document-verification-type/document-verification-type-list.component';

type LocalApiFeature = {
    _id?: string;
    name: string;
    description?: string;
    country: string;
    highlight?: boolean;
};

/**
 * Step 2 — Documents (personal target) or Business verification (business target).
 *
 * Mirrors `verifik-client-panel` `SmartEnrollDocumentsComponent`:
 * - Requirement card (skip/optional/mandatory or business toggle).
 * - Document type configurations with granular validation errors.
 * - Verification methods limited to `upload` / `scan` (runtime values).
 * - Attempt limit as a 1-5 select.
 * - Database screening with information + criminal cards and endpoint picker
 *   (including `local_api` with feature-listing modal).
 */
@Component({
    selector: 'setup-documents',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        TranslocoModule,
        DocumentVerificationTypeListComponent,
    ],
    templateUrl: './documents.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupDocumentsComponent implements OnInit {
    @Input() form!: FormGroup;
    @Input() formGroup!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;
    @Input() subForm = false;
    @Input() stepFormControlName: 'document' | 'legalRepresentative' | 'businessVerification' = 'document';

    @ViewChild('localApiDialog') localApiDialog?: TemplateRef<unknown>;

    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);
    private _dialog = inject(MatDialog);
    private _confirm = inject(FuseConfirmationService);
    private _setup = inject(SetupService);
    private _transloco = inject(TranslocoService);

    readonly criminalRecordsEndpoints: { value: string; label: string }[] = [
        { value: 'local_api', label: 'smartEnrollProjects.setup.documents.screening.localApi' },
        { value: 'world_api_interpol', label: 'Interpol' },
        { value: 'world_api_fbi', label: 'FBI' },
        { value: 'world_api_dea', label: 'DEA' },
        { value: 'world_api_europol', label: 'Europol' },
        { value: 'world_api_ofac', label: 'OFAC' },
        { value: 'world_api_onu', label: 'ONU' },
    ];

    readonly attemptOptions: number[] = [1, 2, 3, 4, 5];

    readonly verificationMethods: { value: 'upload' | 'scan'; labelKey: string; icon: string }[] = [
        { value: 'upload', labelKey: 'smartEnrollProjects.setup.documents.method.upload', icon: 'file_upload' },
        { value: 'scan', labelKey: 'smartEnrollProjects.setup.documents.method.scan', icon: 'photo_camera' },
    ];

    localApiFeatures: LocalApiFeature[] = [];
    loadingFeatures = false;

    private _previousDocumentStepValue: string | null = null;

    ngOnInit(): void {
        if (!this.isFormReady) return;
        this._initDocumentStepSubscription();
    }

    get documentTypesFormArray(): FormArray | null {
        return (this.formGroup?.get('documentTypes') as FormArray) || null;
    }

    get stepFormGroup(): FormGroup | null {
        return (this.form?.get('projectFlow.steps') as FormGroup) || null;
    }

    get target(): 'business' | 'personal' {
        return this.stepFormControlName === 'legalRepresentative'
            ? 'personal'
            : ((this.form?.get('target')?.value as 'business' | 'personal') || 'personal');
    }

    get isNotRequired(): boolean {
        if (this.stepFormControlName === 'businessVerification') {
            return !this.stepFormGroup?.get('businessVerification')?.value;
        }
        if (this.stepFormControlName === 'legalRepresentative') {
            return this.stepFormGroup?.get('legalRepresentative')?.value === 'skip';
        }
        return this.stepFormGroup?.get('document')?.value === 'skip';
    }

    get isFormReady(): boolean {
        return !this.loading && !!this.form && !!this.formGroup && !!this.stepFormGroup && !!this.documentTypesFormArray;
    }

    get verificationMethodsValue(): string[] {
        return (this.formGroup?.get('verificationMethods')?.value as string[]) || [];
    }

    get criminalEndpointsValue(): string[] {
        return (this.formGroup?.get('criminalHistoryVerificationEndpoints')?.value as string[]) || [];
    }

    /** Validator key names currently attached to the `documentTypes` FormArray. */
    get documentTypesErrorKeys(): string[] {
        const errs = this.documentTypesFormArray?.errors;
        if (!errs) return [];
        return Object.keys(errs).filter((k) => (errs as Record<string, unknown>)[k] === true);
    }

    isVerificationMethodSelected(method: string): boolean {
        return this.verificationMethodsValue.includes(method);
    }

    toggleVerificationMethod(method: 'upload' | 'scan'): void {
        const ctrl = this.formGroup?.get('verificationMethods');
        if (!ctrl) return;
        const current = this.verificationMethodsValue;
        const next = current.includes(method)
            ? current.filter((m) => m !== method)
            : [...current, method];
        ctrl.setValue(next);
        ctrl.markAsDirty();
        ctrl.markAsTouched();
        this._cdr.markForCheck();
    }

    isEndpointSelected(endpoint: string): boolean {
        return this.criminalEndpointsValue.includes(endpoint);
    }

    toggleCriminalEndpoint(endpoint: string): void {
        const ctrl = this.formGroup?.get('criminalHistoryVerificationEndpoints');
        if (!ctrl) return;
        const current = this.criminalEndpointsValue;
        const next = current.includes(endpoint)
            ? current.filter((e) => e !== endpoint)
            : [...current, endpoint];
        ctrl.setValue(next);
        ctrl.markAsDirty();
        this._cdr.markForCheck();
    }

    openLocalApiModal(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        if (!this.localApiDialog) return;
        this._fetchBackgroundCheckFeatures();
        this._dialog.open(this.localApiDialog, { width: '640px', maxHeight: '90vh', autoFocus: false });
    }

    private _initDocumentStepSubscription(): void {
        if (this.stepFormControlName !== 'document') return;
        const documentControl = this.stepFormGroup?.get('document');
        if (!documentControl) return;

        this._previousDocumentStepValue = documentControl.value;

        documentControl.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((value: string) => {
            if (value === 'skip' && this._previousDocumentStepValue !== 'skip') {
                this._confirmSkipDocumentVerification(documentControl);
                return;
            }
            this._previousDocumentStepValue = value;
        });
    }

    private _confirmSkipDocumentVerification(documentControl: ReturnType<FormGroup['get']>): void {
        const t = (key: string) => this._transloco.translate(key) ?? key;
        const ref = this._confirm.open({
            title: t('smartEnrollProjects.setup.documents.confirm_skip_title'),
            message: t('smartEnrollProjects.setup.documents.confirm_skip_message'),
            actions: {
                confirm: {
                    show: true,
                    label: t('smartEnrollProjects.setup.documents.confirm_skip_yes'),
                    color: 'warn',
                },
                cancel: { show: true, label: t('smartEnrollProjects.setup.documents.confirm_skip_back') },
            },
        });
        ref.afterClosed().subscribe((result) => {
            if (result === 'confirmed') {
                this._previousDocumentStepValue = 'skip';
            } else {
                documentControl?.setValue(this._previousDocumentStepValue, { emitEvent: false });
            }
            this._cdr.markForCheck();
        });
    }

    private _fetchBackgroundCheckFeatures(): void {
        const cacheKey = 'backgroundCheckEndpoints';
        try {
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                this.localApiFeatures = JSON.parse(cached) as LocalApiFeature[];
                this._processLocalApiFeatures();
                this._cdr.markForCheck();
                return;
            }
        } catch {
            // localStorage unavailable, fall through to network fetch
        }

        this.loadingFeatures = true;
        this._cdr.markForCheck();
        this._setup.getAppFeatures({ where_baseCategory: 'background_check' }).subscribe({
            next: (response) => {
                this.localApiFeatures = (response?.data as LocalApiFeature[]) || [];
                try {
                    localStorage.setItem(cacheKey, JSON.stringify(this.localApiFeatures));
                } catch {
                    // ignore storage quota errors
                }
                this._processLocalApiFeatures();
                this.loadingFeatures = false;
                this._cdr.markForCheck();
            },
            error: () => {
                this.loadingFeatures = false;
                this._cdr.markForCheck();
            },
        });
    }

    private _processLocalApiFeatures(): void {
        const selected = (this.documentTypesFormArray?.value as { country?: string }[] | undefined)?.map(
            (doc) => doc?.country
        ) || [];
        this.localApiFeatures = this.localApiFeatures
            .map((f) => ({ ...f, highlight: selected.includes(f.country) }))
            .sort((a, b) => (a.country || '').localeCompare(b.country || ''));
    }
}
