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
import {
    buildCountryCheckSections,
    CountryCheckSection,
    criminalCheckDocs,
    criminalCheckDocsUrl,
    CriminalCheckOption,
    isCountryCheckSelected,
    toggleCountryCheck,
} from './criminal-check-catalog.util';
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
    styleUrl: './documents.component.scss',
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
    @ViewChild('checkDetailsDialog') checkDetailsDialog?: TemplateRef<unknown>;

    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);
    private _dialog = inject(MatDialog);
    private _confirm = inject(FuseConfirmationService);
    private _setup = inject(SetupService);
    private _transloco = inject(TranslocoService);

    readonly internationalChecks: CriminalCheckOption[] = [
        this._checkOption('world_api_interpol', 'interpol'),
        this._checkOption('world_api_fbi', 'fbi'),
        this._checkOption('world_api_dea', 'dea'),
        this._checkOption('world_api_europol', 'europol'),
        this._checkOption('world_api_ofac', 'ofac'),
        this._checkOption('world_api_onu', 'un'),
    ];

    readonly colombiaSources: CriminalCheckOption[] = [
        this._checkOption('colombia_api_inpec', 'colombia.inpec'),
        this._checkOption('colombia_api_identity_lookup_procuraduria', 'colombia.procuraduria'),
        this._checkOption('colombia_api_police_rnmc', 'colombia.rnmc'),
        this._checkOption('colombia_special_api_police_identity_lookup', 'colombia.police'),
    ];

    private readonly _legacyColombiaSources = ['colombia_api_inpec', 'colombia_api_identity_lookup_procuraduria'];

    readonly attemptOptions: number[] = [1, 2, 3, 4, 5];

    readonly verificationMethods: { value: 'upload' | 'scan'; labelKey: string; icon: string }[] = [
        { value: 'upload', labelKey: 'smartEnrollProjects.setup.documents.method.upload', icon: 'file_upload' },
        { value: 'scan', labelKey: 'smartEnrollProjects.setup.documents.method.scan', icon: 'photo_camera' },
    ];

    localApiFeatures: LocalApiFeature[] = [];
    loadingFeatures = false;
    selectedCheck: CriminalCheckOption | null = null;

    private _previousDocumentStepValue: string | null = null;

    ngOnInit(): void {
        this.documentTypesFormArray?.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
            this._cdr.markForCheck();
        });
        if (!this.isFormReady) return;
        this._initDocumentStepSubscription();
    }

    get countryCheckSections(): CountryCheckSection[] {
        const countries = this.documentTypesFormArray?.controls
            .map((control) => String(control.get('country')?.value || '').trim())
            .filter(Boolean) || [];

        return buildCountryCheckSections(countries, { colombia: this.colombiaSources });
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

    get showRequirementStage(): boolean {
        return this.stepFormControlName !== 'legalRepresentative';
    }

    get isBusinessVerification(): boolean {
        return this.stepFormControlName === 'businessVerification';
    }

    get requirementValue(): string {
        if (this.isBusinessVerification) {
            return this.stepFormGroup?.get('businessVerification')?.value ? 'mandatory' : 'skip';
        }
        return this.stepFormGroup?.get(this.stepFormControlName)?.value || 'skip';
    }

    get configuredCountriesCount(): number {
        return this.documentTypesFormArray?.controls.filter((control) => !!control.get('country')?.value).length || 0;
    }

    get selectedDocumentsCount(): number {
        return (
            this.documentTypesFormArray?.controls.reduce((total, documentControl) => {
                const configurations = documentControl.get('configurations') as FormArray | null;
                if (!configurations) return total;
                return (
                    total +
                    configurations.controls.reduce((configurationTotal, configuration) => {
                        const templates = configuration.get('documentTemplates') as FormArray | null;
                        return configurationTotal + (templates?.controls.filter((template) => !!template.get('promptTemplate')?.value).length || 0);
                    }, 0)
                );
            }, 0) || 0
        );
    }

    get attemptLimit(): number {
        return Number(this.formGroup?.get('attemptLimit')?.value || 1);
    }

    get screeningChecksCount(): number {
        return ['informationVerification', 'criminalHistoryVerification'].filter((key) => !!this.formGroup?.get(key)?.value).length;
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

    stageNumber(defaultStage: number): number {
        return this.showRequirementStage ? defaultStage : defaultStage - 1;
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
        const current = this.criminalEndpointsValue;
        const colombiaCodes = this.colombiaSources.map((source) => source.value);

        if (!colombiaCodes.includes(endpoint)) return current.includes(endpoint);

        return isCountryCheckSelected(current, endpoint, colombiaCodes, this._legacyColombiaSources);
    }

    toggleCriminalEndpoint(endpoint: string): void {
        const colombiaCodes = this.colombiaSources.map((source) => source.value);

        if (colombiaCodes.includes(endpoint)) {
            this._toggleColombiaSource(endpoint, colombiaCodes);
            return;
        }

        const ctrl = this.formGroup?.get('criminalHistoryVerificationEndpoints');
        if (!ctrl) return;
        const current = this.criminalEndpointsValue;
        const next = current.includes(endpoint) ? current.filter((code) => code !== endpoint) : [...current, endpoint];
        ctrl.setValue(next);
        ctrl.markAsDirty();
        this._cdr.markForCheck();
    }

    /**
     * A saved `local_api` with no Colombia codes displays as INPEC and Procuraduría.
     * The first edit stores the explicit codes and drops `local_api`.
     */
    private _toggleColombiaSource(endpoint: string, colombiaCodes: string[]): void {
        const ctrl = this.formGroup?.get('criminalHistoryVerificationEndpoints');
        if (!ctrl) return;

        const current = this.criminalEndpointsValue;
        ctrl.setValue(toggleCountryCheck(current, endpoint, colombiaCodes, this._legacyColombiaSources));
        ctrl.markAsDirty();
        this._cdr.markForCheck();
    }

    openCheckDetails(event: Event, check: CriminalCheckOption): void {
        event.preventDefault();
        event.stopPropagation();
        this.selectedCheck = check;
        if (!this.checkDetailsDialog) return;

        this._dialog.open(this.checkDetailsDialog, { width: '560px', maxHeight: '90vh', autoFocus: false });
    }

    docsUrl(check: CriminalCheckOption): string {
        return criminalCheckDocsUrl(check.docs, this._transloco.getActiveLang());
    }

    postmanUrl(check: CriminalCheckOption): string {
        return `/postman?code=${encodeURIComponent(check.value)}`;
    }

    private _checkOption(value: string, key: string): CriminalCheckOption {
        const baseKey = `smartEnrollProjects.setup.documents.screening.checks.${key}`;

        return {
            value,
            titleKey: `${baseKey}.title`,
            descriptionKey: `${baseKey}.description`,
            sourceKey: `${baseKey}.source`,
            aboutKey: `${baseKey}.about`,
            docs: criminalCheckDocs[value],
        };
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
