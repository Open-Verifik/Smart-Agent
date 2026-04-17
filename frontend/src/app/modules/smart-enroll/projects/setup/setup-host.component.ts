import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    inject,
    signal,
} from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Observable, Subject, of, takeUntil, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FuseConfirmationDialogComponent } from '@fuse/services/confirmation/dialog/dialog.component';

import { environment } from 'environments/environment';
import {
    ADDRESS_PATTERN,
    CITY_NAME_PATTERN,
    PERSON_NAME_PATTERN,
    STRICT_URL_PATTERN,
} from 'app/shared/validators/validation-patterns';
import { DEFAULT_PHONE_COUNTRY_CODE } from 'app/core/constants/phone-country-codes.constant';

import { SetupBreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SetupFormFactory } from './setup-form.factory';
import { SetupService } from './setup.service';
import { SetupBasicSetupComponent } from './steps/basic-setup/basic-setup.component';
import { SetupDocumentsComponent } from './steps/documents/documents.component';
import { SetupIntegrationsComponent } from './steps/integrations/integrations.component';
import { SetupLivenessComponent } from './steps/liveness/liveness.component';
import { SetupRepresentativesComponent } from './steps/representatives/representatives.component';
import { SetupSignUpFormComponent } from './steps/sign-up-form/sign-up-form.component';
import { SetupStepStubComponent } from './steps/setup-step-stub.component';
import { SetupUserInterfaceComponent } from './steps/user-interface/user-interface.component';
import { isProject, type Project, type SmartEnrollProjectFlow } from './setup.types';

/**
 * Host orchestrator for the Smart Enroll setup wizard.
 *
 * Verbatim logic port of verifik-client-panel `ProjectSmartEnrollComponent`:
 * builds a single mega-form covering every step, toggles validators based on
 * `target`/`steps.*` switches, and slices the payload per step in
 * {@link _prepareProjectFlowData} before hitting the v3 backend.
 *
 * UI is restyled to the Smart-Agent / Privy aesthetic; live preview pane is deferred.
 */
@Component({
    selector: 'setup-host',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        TranslocoModule,
        SetupBreadcrumbsComponent,
        SetupStepStubComponent,
        SetupBasicSetupComponent,
        SetupSignUpFormComponent,
        SetupDocumentsComponent,
        SetupLivenessComponent,
        SetupRepresentativesComponent,
        SetupIntegrationsComponent,
        SetupUserInterfaceComponent,
    ],
    templateUrl: './setup-host.component.html',
    styleUrls: ['./setup-host.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupHostComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _formBuilder = inject(FormBuilder);
    private _setup = inject(SetupService);
    private _factory = inject(SetupFormFactory);
    private _cdr = inject(ChangeDetectorRef);
    private _dialog = inject(MatDialog);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _confirm = inject(FuseConfirmationService);

    private _unsub$ = new Subject<void>();
    private _DEBUG = false;

    form!: FormGroup;
    formKeys: { [key: number]: string[] } = {};
    isPreviewExpanded = false;

    loading = signal(true);
    saving = signal(false);
    project: Project = {} as Project;
    projectId = '';
    stepIndex = 0;

    constructor() {
        const id = this._route.snapshot.params['projectId'] || 'new';
        const step = this._route.snapshot.params['step'] || 0;
        if (id) this._setup.projectId = id;
        this._setup.stepIndex = Number(step) || 0;
        this.formKeys = this._setup.defaultFormKeys;
    }

    ngOnInit(): void {
        this._initSubscribers();
    }

    ngOnDestroy(): void {
        this._unsub$.next();
        this._unsub$.complete();
    }

    get canNavigate(): boolean {
        return !this.loading() && !this.saving();
    }

    get steps(): string[] {
        if (this.form?.get('target')?.value === 'business') return this._setup.businessSteps;
        return this._setup.personalSteps;
    }

    private _initSubscribers(): void {
        this._route.params.pipe(takeUntil(this._unsub$)).subscribe((params) => {
            const id = params['projectId'] || 'new';
            const step = params['step'] || 0;
            if (id) this._setup.projectId = id;
            this._setup.stepIndex = Number(step) || 0;
        });

        this._setup.projectId$.pipe(takeUntil(this._unsub$)).subscribe((id) => (this.projectId = id));

        this._setup.stepIndex$.pipe(takeUntil(this._unsub$)).subscribe((step) => {
            this.form?.get('currentStep')?.setValue(this.stepIndex + 1);
            this.stepIndex = step;
            this._cdr.markForCheck();
        });

        this._setup.project$.pipe(takeUntil(this._unsub$)).subscribe((project) => {
            this.project = !project ? (this._setup.getDefaultProject() as Project) : project;
            this._initForm();
        });

        if (this.projectId && this.projectId !== 'new') {
            this._loadProject(this.projectId);
        } else {
            this._setup.project = this._setup.getDefaultProject() as Project;
        }
    }

    private _loadProject(id: string): void {
        this.loading.set(true);
        this._setup.requestProject(id, { with: ['projectFlows'], type: 'onboarding' }).subscribe({
            next: (res) => {
                const project = (res?.data ?? null) as Project | null;
                if (project) {
                    project.target = (project.target as 'personal' | 'business' | '') || (project.projectFlows?.[0]?.target as 'personal' | 'business' | '') || '';
                    this._setup.project = project;
                } else {
                    this._setup.project = this._setup.getDefaultProject() as Project;
                }
            },
            error: () => {
                this._snack.open(this._t('smartEnrollProjects.setup.api_error'), this._t('close'), { duration: 3000 });
                this._setup.project = this._setup.getDefaultProject() as Project;
            },
        });
    }

    private _initForm(): void {
        const project = isProject(this.project) ? this.project : (this._setup.getDefaultProject() as Project);

        this.form = this._initProjectForm(project);

        this._updateFormValidationKeys(project?.target || 'personal');
        this._initFormChangeSubscriptions();

        const targetValue = this.form.get('target')?.value;
        const currentBusinessVerificationStepValue = this.form.get('projectFlow.steps.businessVerification')?.value;
        const currentDocumentStepValue = this.form.get('projectFlow.steps.document')?.value;
        const currentLivenessStepValue = this.form.get('projectFlow.steps.liveness')?.value;
        const currentIntegrationsSourceValue = this.form.get('projectFlow.integrations.source')?.value;
        const currentLegalRepresentativeStepValue = this.form.get('projectFlow.steps.legalRepresentative')?.value;

        const documentBusinessStepValue = targetValue === 'business' ? currentBusinessVerificationStepValue : currentDocumentStepValue;

        this._toggleBusinessControls(currentBusinessVerificationStepValue);
        this._toggleDocumentControls(documentBusinessStepValue);
        this._toggleIntegrationsControls(currentIntegrationsSourceValue);
        this._toggleLegalRepresentativeControls(currentLegalRepresentativeStepValue);
        this._toggleLivenessControls(currentLivenessStepValue);

        if (this.form.get('version')?.value !== 3 || this.form.get('projectFlow.version')?.value !== 3) {
            this.form.get('version')?.setValue(3);
            this.form.get('projectFlow.version')?.setValue(3);
            this.form.get('version')?.markAsDirty();
            this.form.get('version')?.markAsTouched();
            this.form.get('projectFlow.version')?.markAsDirty();
            this.form.get('projectFlow.version')?.markAsTouched();
        }

        setTimeout(() => {
            this._cdr.markForCheck();
            this._triggerFormValidation();
        }, 0);

        this.loading.set(false);
        this._cdr.markForCheck();
    }

    private _initFormChangeSubscriptions(): void {
        this._createFormSubscription('target', (target: string) => {
            this.form.get('projectFlow.target')?.setValue(target);
            this._updateFormValidationKeys(target);
        });

        this._createFormSubscription('projectFlow.signUpForm.additionalFields', () => {
            this.form.get('projectFlow.signUpForm.allowAdditionalFields')?.updateValueAndValidity({ emitEvent: false });
        });
        this._createFormSubscription('projectFlow.signUpForm.allowAdditionalFields', () => {
            this.form.get('projectFlow.signUpForm.additionalFields')?.updateValueAndValidity({ emitEvent: false });
        });

        this._createFormSubscription('projectFlow.signUpForm.email', () => {
            this.form.get('projectFlow.signUpForm')?.updateValueAndValidity({ emitEvent: false });
        });
        this._createFormSubscription('projectFlow.signUpForm.phone', () => {
            this.form.get('projectFlow.signUpForm')?.updateValueAndValidity({ emitEvent: false });
        });

        this._createFormSubscription('projectFlow.representatives.information.allowAdditionalFields', () => {
            this.form.get('projectFlow.representatives.information.additionalFields')?.updateValueAndValidity({ emitEvent: false });
        });
        this._createFormSubscription('projectFlow.representatives.information.additionalFields', () => {
            this.form.get('projectFlow.representatives.information.allowAdditionalFields')?.updateValueAndValidity({ emitEvent: false });
        });

        this._createFormSubscription('projectFlow.representatives.minRepresentatives', (minValue: number) => {
            const max = this.form.get('projectFlow.representatives.maxRepresentatives')?.value;
            if (!max) return;
            if (minValue <= max) return;
            this.form.get('projectFlow.representatives.maxRepresentatives')?.setValue(minValue);
            this.form.get('projectFlow.representatives.minRepresentatives')?.setValue(max);
        });
        this._createFormSubscription('projectFlow.representatives.maxRepresentatives', (maxValue: number) => {
            const min = this.form.get('projectFlow.representatives.minRepresentatives')?.value;
            if (!min) return;
            if (maxValue >= min) return;
            this.form.get('projectFlow.representatives.minRepresentatives')?.setValue(maxValue);
            this.form.get('projectFlow.representatives.maxRepresentatives')?.setValue(min);
        });

        this._createFormSubscription('projectFlow.steps.document', (v: string) => this._toggleDocumentControls(v));
        this._createFormSubscription('projectFlow.steps.businessVerification', (v: boolean) => this._toggleBusinessControls(v));
        this._createFormSubscription('projectFlow.steps.legalRepresentative', (v: string) => this._toggleLegalRepresentativeControls(v));
        this._createFormSubscription('projectFlow.steps.liveness', (v: string) => this._toggleLivenessControls(v));
        this._createFormSubscription('projectFlow.integrations.source', (v: string) => this._toggleIntegrationsControls(v));
    }

    private _createFormSubscription(path: string, callback: (value: any) => void): void {
        this.form
            .get(path)
            ?.valueChanges.pipe(takeUntil(this._unsub$))
            .subscribe((value) => {
                callback(value);
                setTimeout(() => this._cdr.markForCheck(), 0);
            });
    }

    private _initProjectForm(project: Project): FormGroup {
        const defaultBranding = this._setup.defaultBranding;
        return this._formBuilder.group({
            allowedCountries: [project?.allowedCountries || [], [Validators.required]],
            contactEmail: [
                project?.contactEmail || '',
                [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],
            ],
            currentStep: [project?.currentStep || 0],
            lastStep: [project?.lastStep || 0],
            name: [project?.name || '', [Validators.required, Validators.maxLength(60)]],
            privacyUrl: [project?.privacyUrl || '', [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
            target: [project?.target || 'personal', [Validators.required]],
            termsAndConditionsUrl: [project?.termsAndConditionsUrl || '', [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
            projectFlow: this._initProjectFlowForm(project?.target || 'personal', project?.projectFlows?.[0] || ({} as any)),
            version: [project?.version, [Validators.required]],
            branding: this._formBuilder.group({
                backgroundColor: [project?.branding?.backgroundColor || defaultBranding.backgroundColor, [Validators.required]],
                buttonColor: [project?.branding?.buttonColor || defaultBranding.buttonColor, [Validators.required]],
                buttonTextColor: [project?.branding?.buttonTextColor || defaultBranding.buttonTextColor, [Validators.required]],
                image: [project?.branding?.image || defaultBranding.image],
                imageBackgroundColor: [project?.branding?.imageBackgroundColor || defaultBranding.imageBackgroundColor, [Validators.required]],
                logo: [project?.branding?.logo || defaultBranding.logo, [Validators.required]],
                textColor: [project?.branding?.textColor || defaultBranding.textColor, [Validators.required]],
                titleColor: [project?.branding?.titleColor || defaultBranding.titleColor],
            }),
            dataProtection: this._formBuilder.group({
                address: [project?.dataProtection?.address || '', [Validators.required, Validators.pattern(ADDRESS_PATTERN)]],
                address2: [project?.dataProtection?.address2 || ''],
                city: [project?.dataProtection?.city || '', [Validators.required, Validators.pattern(CITY_NAME_PATTERN)]],
                country: [project?.dataProtection?.country || '', [Validators.required]],
                email: [
                    project?.dataProtection?.email || '',
                    [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],
                ],
                name: [project?.dataProtection?.name || '', [Validators.required, Validators.pattern(PERSON_NAME_PATTERN)]],
                postalCode: [project?.dataProtection?.postalCode || '', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s\-]{3,12}$/)]],
            }),
        });
    }

    private _initProjectFlowForm(target: string, currentData: any): FormGroup {
        return this._formBuilder.group({
            _id: [currentData?._id || ''],
            status: [currentData?.status || 'draft'],
            target: [target, [Validators.required]],
            type: ['onboarding', [Validators.required]],
            version: [currentData?.version, [Validators.required]],
            business: this._formBuilder.group(
                {
                    attemptLimit: [currentData?.business?.attemptLimit || 3, [Validators.required, Validators.min(1), Validators.max(5)]],
                    criminalHistoryVerification: [currentData?.business?.criminalHistoryVerification || false],
                    criminalHistoryVerificationEndpoints: [currentData?.business?.criminalHistoryVerificationEndpoints || []],
                    documentTypes: this._factory.createDocumentTypesWithDefaults(currentData?.business?.documentTypes || [], 'business'),
                    informationVerification: [currentData?.business?.informationVerification || false],
                    screening: [currentData?.business?.screening || false],
                },
                { validators: SetupFormFactory.validators.documentsScreening() }
            ),
            documents: this._formBuilder.group(
                {
                    attemptLimit: [currentData?.documents?.attemptLimit || 3, [Validators.required, Validators.min(1), Validators.max(5)]],
                    criminalHistoryVerification: [currentData?.documents?.criminalHistoryVerification || false],
                    criminalHistoryVerificationEndpoints: [currentData?.documents?.criminalHistoryVerificationEndpoints || []],
                    documentTypes: this._factory.createDocumentTypesWithDefaults(currentData?.documents?.documentTypes || [], 'personal'),
                    informationVerification: [currentData?.documents?.informationVerification || false],
                    screening: [currentData?.documents?.screening || false],
                    verificationMethods: [currentData?.documents?.verificationMethods || [], [Validators.required]],
                },
                { validators: SetupFormFactory.validators.documentsScreening() }
            ),
            integrations: this._formBuilder.group({
                apiTestType: [currentData?.integrations?.apiTestType || 'email'],
                apiTestValue: [currentData?.integrations?.apiTestValue || ''],
                apiUrl: [currentData?.integrations?.apiUrl || '', [Validators.pattern(STRICT_URL_PATTERN)]],
                redirectUrl: [currentData?.integrations?.redirectUrl || '', [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
                source: [currentData?.integrations?.source || 'NONE', [Validators.required, this._preventCsvSource]],
                strategy: [currentData?.integrations?.strategy || 'none'],
                webhook: [currentData?.integrations?.webhook || null],
            }),
            liveness: this._formBuilder.group({
                attemptLimit: [currentData?.liveness?.attemptLimit || 3, [Validators.required, Validators.min(1), Validators.max(5)]],
                minScore: [currentData?.liveness?.minScore || 0.65, [Validators.min(0.52), Validators.max(0.9)]],
                compareMinScore: [currentData?.liveness?.compareMinScore || 0.85, [Validators.min(0.7), Validators.max(0.95)]],
                searchMinScore: [currentData?.liveness?.searchMinScore || 0.85, [Validators.min(0.81), Validators.max(0.95)]],
                searchMode: [currentData?.liveness?.searchMode || 'FAST'],
                kycType: [currentData?.liveness?.kycType || 'traditional'],
            }),
            representatives: this._formBuilder.group({
                maxRepresentatives: [
                    currentData?.representatives?.maxRepresentatives || 3,
                    [Validators.required, Validators.min(1), Validators.max(10)],
                ],
                minRepresentatives: [
                    currentData?.representatives?.minRepresentatives || 1,
                    [Validators.required, Validators.min(1), Validators.max(10)],
                ],
                notificationType: [currentData?.representatives?.notificationType || 'whatsapp', [Validators.required]],
                documents: this._formBuilder.group(
                    {
                        attemptLimit: [currentData?.representatives?.documents?.attemptLimit || 3, [Validators.min(1), Validators.max(5)]],
                        criminalHistoryVerification: [currentData?.representatives?.documents?.criminalHistoryVerification || false],
                        criminalHistoryVerificationEndpoints: [currentData?.representatives?.documents?.criminalHistoryVerificationEndpoints || []],
                        documentTypes: this._factory.createDocumentTypesWithDefaults(
                            currentData?.representatives?.documents?.documentTypes || [],
                            'personal'
                        ),
                        informationVerification: [currentData?.representatives?.documents?.informationVerification || false],
                        screening: [currentData?.representatives?.documents?.screening || false],
                        verificationMethods: [currentData?.representatives?.documents?.verificationMethods || [], [Validators.required]],
                    },
                    { validators: SetupFormFactory.validators.documentsScreening() }
                ),
                information: this._formBuilder.group({
                    additionalFields: [currentData?.representatives?.information?.additionalFields || []],
                    allowAdditionalFields: [
                        currentData?.representatives?.information?.allowAdditionalFields || false,
                        [SetupFormFactory.validators.additionalFields()],
                    ],
                    countryCode: [currentData?.representatives?.information?.countryCode || DEFAULT_PHONE_COUNTRY_CODE],
                    email: [currentData?.representatives?.information?.email || false],
                    emailGateway: [currentData?.representatives?.information?.emailGateway || 'none'],
                    fullName: [true, [Validators.requiredTrue]],
                    fullNameStyle: [currentData?.representatives?.information?.fullNameStyle || 'separate', [Validators.required]],
                    phone: [currentData?.representatives?.information?.phone || false],
                    phoneGateway: [currentData?.representatives?.information?.phoneGateway || 'whatsapp'],
                    showPrivacyNotice: [currentData?.representatives?.information?.showPrivacyNotice || true],
                    showTermsAndConditions: [currentData?.representatives?.information?.showTermsAndConditions || true],
                }),
                liveness: this._formBuilder.group({
                    attemptLimit: [
                        currentData?.representatives?.liveness?.attemptLimit || 3,
                        [Validators.required, Validators.min(1), Validators.max(5)],
                    ],
                    minScore: [currentData?.liveness?.minScore || 0.65, [Validators.min(0.52), Validators.max(0.9)]],
                    compareMinScore: [currentData?.representatives?.liveness?.compareMinScore || 0.85, [Validators.min(0.7), Validators.max(0.95)]],
                    searchMinScore: [currentData?.representatives?.liveness?.searchMinScore || 0.85, [Validators.min(0.81), Validators.max(0.95)]],
                    searchMode: [currentData?.representatives?.liveness?.searchMode || 'FAST'],
                    kycType: [currentData?.representatives?.liveness?.kycType || 'traditional'],
                }),
            }),
            signUpForm: this._formBuilder.group(
                {
                    additionalFields: [currentData?.signUpForm?.additionalFields || []],
                    address: [currentData?.signUpForm?.address || false],
                    allowAdditionalFields: [
                        currentData?.signUpForm?.allowAdditionalFields || false,
                        [SetupFormFactory.validators.additionalFields()],
                    ],
                    countryCode: [currentData?.signUpForm?.countryCode || DEFAULT_PHONE_COUNTRY_CODE],
                    email: [currentData?.signUpForm?.email || false],
                    emailGateway: [currentData?.signUpForm?.emailGateway || 'mailgun'],
                    businessBasicInfo: [currentData?.signUpForm?.businessBasicInfo || true, [Validators.requiredTrue]],
                    businessBasicInfoStyle: [currentData?.signUpForm?.businessBasicInfoStyle || 'name_number', [Validators.required]],
                    fullName: [true, [Validators.requiredTrue]],
                    fullNameStyle: [currentData?.signUpForm?.fullNameStyle || 'separate', [Validators.required]],
                    phone: [currentData?.signUpForm?.phone || false],
                    phoneGateway: [currentData?.signUpForm?.phoneGateway || 'both'],
                    showPrivacyNotice: [currentData?.signUpForm?.showPrivacyNotice || true],
                    showTermsAndConditions: [currentData?.signUpForm?.showTermsAndConditions || true],
                },
                { validators: SetupFormFactory.validators.atLeastOneContactMethod() }
            ),
            steps: this._formBuilder.group({
                businessVerification: [currentData?.steps?.businessVerification || false],
                document: [
                    currentData?.steps?.document || 'mandatory',
                    [Validators.required, SetupFormFactory.validators.requiredIfDocumentStep()],
                ],
                legalRepresentative: [currentData?.steps?.legalRepresentative || 'skip', [Validators.required]],
                liveness: [currentData?.steps?.liveness || 'skip', [Validators.required]],
            }),
        });
    }

    private _preventCsvSource = (control: AbstractControl): ValidationErrors | null => {
        if (control.value === 'CSV') return { csvNotSupported: true };
        return null;
    };

    /**
     * Trim the form value down to only the slice relevant to the current step before
     * sending to the v3 backend (mirrors verifik-client-panel ProjectSmartEnrollComponent).
     */
    private _prepareProjectFlowData(data: any): Project<SmartEnrollProjectFlow> {
        const { dataProtection, branding, projectFlow: projectFlowData, ...restProject } = data;
        const { steps, business, documents, liveness, signUpForm, representatives, integrations, ...restProjectFlow } = projectFlowData;

        const formData: any = restProject;

        if (this.stepIndex === 0) {
            formData.dataProtection = dataProtection;
            return formData;
        }

        if (this.stepIndex === 1) {
            formData.projectFlow = { ...restProjectFlow, signUpForm };
        } else if (this.stepIndex === 2) {
            formData.projectFlow = { ...restProjectFlow, steps };
            if (data.projectFlow.target === 'business') {
                formData.projectFlow.business = !steps.businessVerification ? {} : business;
            } else {
                formData.projectFlow.documents = steps.document === 'skip' ? {} : documents;
            }
        } else if (this.stepIndex === 3) {
            formData.projectFlow = { ...restProjectFlow, steps };
            if (data.projectFlow.target === 'business') {
                formData.projectFlow.representatives = steps.legalRepresentative === 'skip' ? undefined : representatives;
            } else {
                const livenessFormGroup = this.form.get('projectFlow.liveness') as FormGroup;
                const livenessRawValue = livenessFormGroup?.getRawValue ? livenessFormGroup.getRawValue() : liveness;

                if (steps.liveness === 'skip') {
                    formData.projectFlow.liveness = {
                        kycType: livenessRawValue?.kycType || liveness?.kycType || 'traditional',
                    };
                } else {
                    formData.projectFlow.liveness = {
                        ...livenessRawValue,
                        kycType: livenessRawValue?.kycType || liveness?.kycType || 'traditional',
                    };
                }
            }
        } else if (this.stepIndex === 4) {
            formData.projectFlow = { ...restProjectFlow, integrations };
        } else if (this.stepIndex === 5) {
            formData.branding = branding;
        }

        return formData;
    }

    // ---------------------------------------------------------------------------
    // Toggle helpers — copied verbatim
    // ---------------------------------------------------------------------------

    private _toggleBusinessControls(businessVerificationStep: boolean | undefined): void {
        const businessFormGroup = this.form.get('projectFlow.business');
        if (!businessFormGroup) return;
        this._toggleDocumentGroupControls(businessFormGroup as FormGroup, !businessVerificationStep);
    }

    private _toggleDocumentControls(documentStep: string | undefined): void {
        const documentsFormGroup = this.form.get('projectFlow.documents');
        if (!documentsFormGroup) return;
        this._toggleDocumentGroupControls(documentsFormGroup as FormGroup, documentStep === 'skip');
    }

    private _toggleLivenessControls(livenessStep: string | undefined): void {
        const livenessFormGroup = this.form.get('projectFlow.liveness');
        if (!livenessFormGroup) return;
        this._toggleLivenessGroupControls(livenessFormGroup as FormGroup, livenessStep === 'skip');
    }

    private _toggleDocumentGroupControls(formGroup: FormGroup, shouldDisable: boolean): void {
        const map: Record<string, any[]> = {
            attemptLimit: [Validators.required, Validators.min(1), Validators.max(5)],
            documentTypes: [SetupFormFactory.validators.documentVerificationTypes()],
            screening: [],
            verificationMethods: [Validators.required],
        };
        Object.keys(map).forEach((key) => {
            const control = formGroup.get(key);
            if (!control) return;
            if (shouldDisable) {
                control.clearValidators();
                control.updateValueAndValidity();
                control.disable();
            } else {
                control.enable();
                control.setValidators(map[key]);
                control.updateValueAndValidity();
            }
        });
        if (shouldDisable) {
            formGroup.clearValidators();
            formGroup.updateValueAndValidity();
            formGroup.disable();
        } else {
            formGroup.enable();
            formGroup.setValidators([SetupFormFactory.validators.documentsScreening()]);
            formGroup.updateValueAndValidity();
        }
    }

    private _toggleIntegrationsControls(source: string | undefined): void {
        if (!source) return;
        const strategyControl = this.form.get('projectFlow.integrations.strategy');
        const apiTestTypeControl = this.form.get('projectFlow.integrations.apiTestType');
        const apiTestValueControl = this.form.get('projectFlow.integrations.apiTestValue');
        const apiUrlControl = this.form.get('projectFlow.integrations.apiUrl');

        if (source !== 'NONE') {
            strategyControl?.setValue('blacklist');
            if (source === 'API') {
                apiTestTypeControl?.setValidators([Validators.required]);
                apiTestValueControl?.setValidators([Validators.required]);
                apiUrlControl?.setValidators([Validators.required, Validators.pattern(STRICT_URL_PATTERN)]);
            } else {
                apiTestTypeControl?.clearValidators();
                apiTestValueControl?.clearValidators();
                apiUrlControl?.clearValidators();
            }
        } else {
            strategyControl?.setValue('none');
            apiTestTypeControl?.clearValidators();
            apiTestValueControl?.clearValidators();
            apiUrlControl?.clearValidators();
        }
        apiUrlControl?.updateValueAndValidity();
        apiTestValueControl?.updateValueAndValidity();
        apiTestTypeControl?.updateValueAndValidity();
        strategyControl?.updateValueAndValidity();
    }

    private _toggleLegalRepresentativeControls(value: string | undefined): void {
        const representativesGroup = this.form.get('projectFlow.representatives');
        if (!representativesGroup) return;

        const map: Record<string, any[]> = {
            documents: [SetupFormFactory.validators.documentsScreening()],
            information: [],
            liveness: [],
            'documents.attemptLimit': [Validators.required],
            'documents.documentTypes': [SetupFormFactory.validators.documentVerificationTypes()],
            'documents.screening': [],
            'documents.verificationMethods': [Validators.required],
            'information.additionalFields': [],
            'information.allowAdditionalFields': [SetupFormFactory.validators.additionalFields()],
            'information.email': [],
            'information.emailGateway': [],
            'information.fullName': [Validators.required],
            'information.fullNameStyle': [Validators.required],
            'information.phone': [],
            'information.phoneGateway': [],
            'information.showPrivacyNotice': [],
            'information.showTermsAndConditions': [],
            'liveness.attemptLimit': [Validators.required],
            'liveness.minScore': [Validators.required, Validators.min(0.52), Validators.max(0.9)],
            'liveness.compareMinScore': [Validators.required, Validators.min(0.7), Validators.max(0.95)],
            'liveness.searchMinScore': [Validators.required, Validators.min(0.81), Validators.max(0.95)],
            'liveness.searchMode': [Validators.required],
        };
        Object.keys(map).forEach((key) => {
            const control = representativesGroup.get(key);
            if (!control) return;
            if (value === 'skip') {
                control.clearValidators();
                control.updateValueAndValidity();
                control.disable();
            } else {
                control.enable();
                control.setValidators(map[key]);
                control.updateValueAndValidity();
            }
        });
        if (value === 'skip') {
            representativesGroup.updateValueAndValidity();
            representativesGroup.disable();
        } else {
            representativesGroup.enable();
            representativesGroup.updateValueAndValidity();
        }
    }

    private _toggleLivenessGroupControls(livenessGroup: FormGroup, shouldDisable: boolean): void {
        const map: Record<string, any[]> = {
            attemptLimit: [Validators.required],
            minScore: [Validators.required, Validators.min(0.52), Validators.max(0.9)],
            compareMinScore: [Validators.required, Validators.min(0.7), Validators.max(0.95)],
            searchMinScore: [Validators.required, Validators.min(0.81), Validators.max(0.95)],
            searchMode: [Validators.required],
        };
        Object.keys(map).forEach((key) => {
            const control = livenessGroup.get(key);
            if (!control) return;
            if (shouldDisable) {
                control.clearValidators();
                control.updateValueAndValidity();
                control.disable();
            } else {
                control.enable();
                control.setValidators(map[key]);
                control.updateValueAndValidity();
            }
        });
        const kycTypeControl = livenessGroup.get('kycType');
        kycTypeControl?.enable({ emitEvent: false });

        if (shouldDisable) {
            livenessGroup.clearValidators();
            livenessGroup.updateValueAndValidity();
            livenessGroup.disable();
        } else {
            livenessGroup.enable();
            livenessGroup.setValidators([Validators.required]);
            livenessGroup.updateValueAndValidity();
        }
    }

    private _triggerFormValidation(): void {
        this.form.updateValueAndValidity({ emitEvent: false });
        this.form.get('projectFlow.signUpForm.allowAdditionalFields')?.updateValueAndValidity({ emitEvent: false });
        this.form.get('projectFlow.signUpForm.additionalFields')?.updateValueAndValidity({ emitEvent: false });
        this.form.get('projectFlow.representatives.information.allowAdditionalFields')?.updateValueAndValidity({ emitEvent: false });
        this.form.get('projectFlow.representatives.information.additionalFields')?.updateValueAndValidity({ emitEvent: false });

        const documentsArray = this.form.get('projectFlow.documents.documentTypes') as FormArray;
        const businessArray = this.form.get('projectFlow.business.documentTypes') as FormArray;
        const representativesArray = this.form.get('projectFlow.representatives.documents.documentTypes') as FormArray;

        if (documentsArray) this._factory.updateValidatorsForActiveState(documentsArray);
        if (businessArray) this._factory.updateValidatorsForActiveState(businessArray);
        if (representativesArray) this._factory.updateValidatorsForActiveState(representativesArray);
    }

    private _updateFormValidationKeys(target: string): void {
        if (target === 'business') this.formKeys = this._setup.businessTargetFormKeys;
        else if (target === 'personal') this.formKeys = this._setup.personalTargetFormKeys;
        else this.formKeys = this._setup.defaultFormKeys;
    }

    // ---------------------------------------------------------------------------
    // Public API used by the template
    // ---------------------------------------------------------------------------

    isFormValidForStep = (stepIndex: number): boolean => {
        if (!this.form) return false;
        const keys = this.formKeys?.[stepIndex];
        if (!keys) return false;

        const isSkippableStep = keys[0].includes('projectFlow.steps') && this.form.get(keys[0])?.value === 'skip';
        if (isSkippableStep) return true;

        const allValid = keys.every((key) => {
            if (this._DEBUG && this.form.get(key)?.invalid) {
                // eslint-disable-next-line no-console
                console.log(key, this.form.get(key)?.invalid, this.form.get(key)?.errors, this.form.get(key)?.value);
            }
            return !this.form.get(key)?.invalid;
        });
        if (!allValid) return false;

        if (stepIndex === 1) {
            const signUpFormGroup = this.form.get('projectFlow.signUpForm');
            if (signUpFormGroup && signUpFormGroup.invalid) return false;
        }

        return true;
    };

    confirmNavigation(): MatDialogRef<FuseConfirmationDialogComponent> {
        return this._confirm.open({
            title: this._t('smartEnrollProjects.setup.unsaved_changes'),
            message: this._t('smartEnrollProjects.setup.unsaved_changes_message'),
            actions: {
                confirm: { show: true, label: this._t('smartEnrollProjects.setup.exit_without_saving') },
                cancel: { show: true, label: this._t('cancel') },
            },
        });
    }

    nextStep(): void {
        if (!this.isFormValidForStep(this.stepIndex)) return;

        if (this.stepIndex === 2) {
            const target = this.form.get('target')?.value;
            const documentStepValue =
                target === 'business'
                    ? this.form.get('projectFlow.steps.businessVerification')?.value
                    : this.form.get('projectFlow.steps.document')?.value;

            const isDocumentSkipped = target === 'business' ? !documentStepValue : documentStepValue === 'skip';
            if (isDocumentSkipped) {
                this._showDocumentVerificationConfirmationBeforeNext();
                return;
            }
        }

        const isLast = this.stepIndex === this.steps.length - 1;
        if (isLast) {
            this._router.navigate(['/smart-enroll/projects', this.projectId]);
        } else {
            this._router.navigate(['/smart-enroll/projects', this.projectId, 'setup', this.stepIndex + 1]);
        }
    }

    previousStep(): void {
        if (this.stepIndex === 0) {
            this.returnToProjects();
            return;
        }
        this._router.navigate(['/smart-enroll/projects', this.projectId, 'setup', this.stepIndex - 1]);
    }

    saveProject(): Observable<{ data: Project }> {
        if (this.saving() || !this.isFormValidForStep(this.stepIndex)) return of();
        this.saving.set(true);

        const formValue = this.form.getRawValue ? this.form.getRawValue() : this.form.value;
        const preparedData = {
            ...this._prepareProjectFlowData(formValue),
            projectFlowType: 'onboarding' as const,
        };

        const observable = this.project?._id
            ? this._setup.updateProject(this.project._id, preparedData)
            : this._setup.createProject(preparedData);

        return observable.pipe(catchError((err) => throwError(() => err)));
    }

    previewProject(): void {
        if (this.projectId === 'new') return;
        if (!Object.keys(this.formKeys).every((idx) => this.isFormValidForStep(Number(idx)))) {
            this._snack.open(this._t('smartEnrollProjects.setup.setup_invalid'), this._t('close'), { duration: 3000 });
            return;
        }
        const origin = window.location.origin;
        const baseUrl =
            (environment as any).production && (environment as any).kycBaseUrl
                ? (environment as any).kycBaseUrl
                : (environment as any).sandBoxKYCBaseUrl || (environment as any).kycBaseUrl || `${origin}`;
        const url = `${baseUrl}/sign-up/${this.projectId}`;
        window.open(url, '_blank');
    }

    returnToProjects(): void {
        this._router.navigate(['/smart-enroll/projects']);
    }

    updateProjectId(newProjectId: string): void {
        this.projectId = newProjectId;
        if (this.project) this.project._id = newProjectId;
        this._setup.projectId = newProjectId;
    }

    closePreview(): void {
        this.isPreviewExpanded = false;
    }
    togglePreview(): void {
        this.isPreviewExpanded = !this.isPreviewExpanded;
    }

    /** Allow the host template to read the current target without poking the form group. */
    get currentTarget(): 'personal' | 'business' {
        return (this.form?.get('target')?.value as 'personal' | 'business') || 'personal';
    }

    /** FormGroup for the sign-up form step (mirrors the sub-tree the child expects). */
    signUpFormGroup(): FormGroup {
        return this.form.get('projectFlow.signUpForm') as FormGroup;
    }

    /** FormGroup for the documents step (personal target → documents, business → business). */
    documentsFormGroup(): FormGroup {
        const path = this.currentTarget === 'business' ? 'projectFlow.business' : 'projectFlow.documents';
        return this.form.get(path) as FormGroup;
    }

    /** Step control name passed to the documents step. */
    documentsStepFormControlName(): 'document' | 'businessVerification' {
        return this.currentTarget === 'business' ? 'businessVerification' : 'document';
    }

    /** FormGroup for the liveness step (only used by personal target on step 3). */
    livenessFormGroup(): FormGroup {
        return this.form.get('projectFlow.liveness') as FormGroup;
    }

    private _showDocumentVerificationConfirmationBeforeNext(): void {
        const dialogRef = this._confirm.open({
            title: this._t('smartEnrollProjects.setup.documents.confirm_skip_title'),
            message: this._t('smartEnrollProjects.setup.documents.confirm_skip_message'),
            actions: {
                confirm: {
                    show: true,
                    label: this._t('smartEnrollProjects.setup.documents.confirm_skip_yes'),
                    color: 'warn',
                },
                cancel: { show: true, label: this._t('smartEnrollProjects.setup.documents.confirm_skip_back') },
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'confirmed') {
                const isLast = this.stepIndex === this.steps.length - 1;
                if (isLast) {
                    this._router.navigate(['/smart-enroll/projects', this.projectId]);
                } else {
                    this._router.navigate(['/smart-enroll/projects', this.projectId, 'setup', this.stepIndex + 1]);
                }
            }
        });
    }

    private _t(key: string, params?: Record<string, unknown>): string {
        return this._transloco.translate(key, params) ?? key;
    }
}
