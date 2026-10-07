import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, Input, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import {
    buildCountryCheckSections,
    CountryCheckSection,
    criminalCheckDocs,
    criminalCheckDocsUrl,
    CriminalCheckOption,
    isCountryCheckSelected,
    toggleCountryCheck,
} from 'app/modules/smart-enroll/projects/setup/steps/documents/criminal-check-catalog.util';
import { DocumentVerificationTypeListComponent } from 'app/modules/smart-enroll/projects/setup/steps/documents/document-verification-type/document-verification-type-list.component';

/**
 * HumanAuthn documents step. Personal enrollment only.
 * Binds projectFlow.steps.document and projectFlow.documents.
 */
@Component({
    selector: 'human-authn-documents-step',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        TranslocoModule,
        DocumentVerificationTypeListComponent,
    ],
    templateUrl: './documents-step.component.html',
    styleUrls: [
        '../../../../smart-enroll/projects/setup/steps/documents/documents.component.scss',
        './documents-step.component.scss',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumanAuthnDocumentsStepComponent implements OnInit {
    @Input() form!: FormGroup;
    @Input() formGroup!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    @ViewChild('checkDetailsDialog') checkDetailsDialog?: TemplateRef<unknown>;

    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);
    private _dialog = inject(MatDialog);
    private _confirm = inject(FuseConfirmationService);
    private _transloco = inject(TranslocoService);
    private _previousDocumentStepValue: string | null = null;
    private readonly _legacyColombiaSources = ['colombia_api_inpec', 'colombia_api_identity_lookup_procuraduria'];

    readonly attemptOptions: number[] = [1, 2, 3, 4, 5];
    readonly verificationMethods: { value: 'upload' | 'scan'; labelKey: string; icon: string }[] = [
        { value: 'upload', labelKey: 'smartEnrollProjects.setup.documents.method.upload', icon: 'file_upload' },
        { value: 'scan', labelKey: 'smartEnrollProjects.setup.documents.method.scan', icon: 'photo_camera' },
    ];
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

    selectedCheck: CriminalCheckOption | null = null;

    ngOnInit(): void {
        if (!this.isFormReady) return;
        this.formGroup.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._cdr.markForCheck());
        this._watchDocumentRequirement();
    }

    get documentTypesFormArray(): FormArray | null {
        return (this.formGroup?.get('documentTypes') as FormArray) || null;
    }

    get stepFormGroup(): FormGroup | null {
        return (this.form?.get('projectFlow.steps') as FormGroup) || null;
    }

    get isFormReady(): boolean {
        return !this.loading && !!this.form && !!this.formGroup && !!this.stepFormGroup && !!this.documentTypesFormArray;
    }

    get requirementValue(): string {
        return this.stepFormGroup?.get('document')?.value || 'skip';
    }

    get isNotRequired(): boolean {
        return this.requirementValue === 'skip';
    }

    get countryCheckSections(): CountryCheckSection[] {
        const countries = this.documentTypesFormArray?.controls
            .map((control) => String(control.get('country')?.value || '').trim())
            .filter(Boolean) || [];
        return buildCountryCheckSections(countries, { colombia: this.colombiaSources });
    }

    get configuredCountriesCount(): number {
        return this.documentTypesFormArray?.controls.filter((control) => !!control.get('country')?.value).length || 0;
    }

    get selectedDocumentsCount(): number {
        return (
            this.documentTypesFormArray?.controls.reduce((total, documentControl) => {
                const configurations = documentControl.get('configurations') as FormArray | null;
                if (!configurations) return total;
                return total + this._selectedTemplates(configurations);
            }, 0) || 0
        );
    }

    get attemptLimit(): number {
        return Number(this.formGroup?.get('attemptLimit')?.value || 1);
    }

    get screeningOn(): boolean {
        return !!this.formGroup?.get('screening')?.value;
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

    get documentTypesErrorKeys(): string[] {
        const errs = this.documentTypesFormArray?.errors;
        if (!errs) return [];
        return Object.keys(errs).filter((key) => (errs as Record<string, unknown>)[key] === true);
    }

    isVerificationMethodSelected(method: string): boolean {
        return this.verificationMethodsValue.includes(method);
    }

    toggleVerificationMethod(method: 'upload' | 'scan'): void {
        const ctrl = this.formGroup?.get('verificationMethods');
        if (!ctrl) return;
        const current = this.verificationMethodsValue;
        const next = current.includes(method) ? current.filter((value) => value !== method) : [...current, method];
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
        const ctrl = this.formGroup?.get('criminalHistoryVerificationEndpoints');
        if (!ctrl) return;
        const current = this.criminalEndpointsValue;
        const next = colombiaCodes.includes(endpoint)
            ? toggleCountryCheck(current, endpoint, colombiaCodes, this._legacyColombiaSources)
            : current.includes(endpoint)
              ? current.filter((code) => code !== endpoint)
              : [...current, endpoint];
        ctrl.setValue(next);
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

    private _selectedTemplates(configurations: FormArray): number {
        return configurations.controls.reduce((total, configuration) => {
            const templates = configuration.get('documentTemplates') as FormArray | null;
            return total + (templates?.controls.filter((template) => !!template.get('promptTemplate')?.value).length || 0);
        }, 0);
    }

    private _watchDocumentRequirement(): void {
        const documentControl = this.stepFormGroup?.get('document');
        if (!documentControl) return;
        this._previousDocumentStepValue = documentControl.value;
        documentControl.valueChanges.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((value: string) => {
            if (value === 'skip' && this._previousDocumentStepValue !== 'skip') {
                this._confirmSkipDocumentVerification(documentControl);
                return;
            }
            this._previousDocumentStepValue = value;
            this._cdr.markForCheck();
        });
    }

    private _confirmSkipDocumentVerification(documentControl: ReturnType<FormGroup['get']>): void {
        const t = (key: string) => this._transloco.translate(key) ?? key;
        const ref = this._confirm.open({
            title: t('smartEnrollProjects.setup.documents.confirm_skip_title'),
            message: t('smartEnrollProjects.setup.documents.confirm_skip_message'),
            actions: {
                confirm: { show: true, label: t('smartEnrollProjects.setup.documents.confirm_skip_yes'), color: 'warn' },
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
}
