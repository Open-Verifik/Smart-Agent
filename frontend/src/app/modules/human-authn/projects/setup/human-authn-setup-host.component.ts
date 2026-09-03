import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Observable, Subject, of, takeUntil, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FuseConfirmationDialogComponent } from '@fuse/services/confirmation/dialog/dialog.component';
import { STRICT_URL_PATTERN } from 'app/shared/validators/validation-patterns';
import { DEFAULT_PHONE_COUNTRY_CODE } from 'app/core/constants/phone-country-codes.constant';
import { SetupFormFactory } from 'app/modules/smart-enroll/projects/setup/setup-form.factory';
import { SetupBasicSetupComponent } from 'app/modules/smart-enroll/projects/setup/steps/basic-setup/basic-setup.component';
import { SetupDocumentsComponent } from 'app/modules/smart-enroll/projects/setup/steps/documents/documents.component';
import { SetupSignUpFormComponent } from 'app/modules/smart-enroll/projects/setup/steps/sign-up-form/sign-up-form.component';
import { SetupUserInterfaceComponent } from 'app/modules/smart-enroll/projects/setup/steps/user-interface/user-interface.component';
import { HumanAuthnPreviewPlaceholderComponent } from '../preview/human-authn-preview-placeholder.component';
import { HumanAuthnSetupService } from './human-authn-setup.service';
import { HumanAuthnIntegrationsStepComponent } from './steps/integrations-step.component';
import { HumanAuthnModeStepComponent } from './steps/human-authn-step.component';
import { HumanAuthnStorageStepComponent } from './steps/storage-step.component';

@Component({
    selector: 'human-authn-setup-host',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        TranslocoModule,
        SetupBasicSetupComponent,
        SetupSignUpFormComponent,
        SetupDocumentsComponent,
        SetupUserInterfaceComponent,
        HumanAuthnModeStepComponent,
        HumanAuthnStorageStepComponent,
        HumanAuthnIntegrationsStepComponent,
        HumanAuthnPreviewPlaceholderComponent,
    ],
    templateUrl: './human-authn-setup-host.component.html',
})
export class HumanAuthnSetupHostComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _fb = inject(FormBuilder);
    private _setup = inject(HumanAuthnSetupService);
    private _factory = inject(SetupFormFactory);
    private _cdr = inject(ChangeDetectorRef);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _confirm = inject(FuseConfirmationService);
    private _unsub$ = new Subject<void>();

    form!: FormGroup;
    loading = signal(true);
    saving = signal(false);
    projectId = 'new';
    stepIndex = 0;

    readonly steps = this._setup.steps;

    ngOnInit(): void {
        this._route.params.pipe(takeUntil(this._unsub$)).subscribe((params) => {
            this.projectId = params['projectId'] || 'new';
            this.stepIndex = Number(params['step'] || 0);
            this._setup.setProjectId(this.projectId);
            this._setup.setStepIndex(this.stepIndex);
            this._cdr.markForCheck();
        });

        if (this.projectId !== 'new') {
            this._setup.requestProject(this.projectId).subscribe({
                next: (res) => {
                    this._initForm(res?.data || this._setup.getDefaultProject());
                },
                error: () => this._initForm(this._setup.getDefaultProject()),
            });
            return;
        }

        this._initForm(this._setup.getDefaultProject());
    }

    ngOnDestroy(): void {
        this._unsub$.next();
        this._unsub$.complete();
    }

    private _initForm(project: any): void {
        const flow = project?.projectFlows?.[0] || this._setup.getDefaultProjectFlow();
        this.form = this._fb.group({
            name: [project.name || '', Validators.required],
            target: ['personal'],
            version: [3],
            currentStep: [this.stepIndex + 1],
            allowedCountries: [project.allowedCountries || [], Validators.required],
            contactEmail: [project.contactEmail || '', [Validators.required, Validators.email]],
            defaultLanguage: [project.defaultLanguage || 'en', Validators.required],
            privacyUrl: [project.privacyUrl || '', [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
            termsAndConditionsUrl: [
                project.termsAndConditionsUrl || '',
                [Validators.required, Validators.pattern(STRICT_URL_PATTERN)],
            ],
            dataProtection: this._fb.group({
                name: [project.dataProtection?.name || '', Validators.required],
                email: [project.dataProtection?.email || '', [Validators.required, Validators.email]],
                address: [project.dataProtection?.address || '', Validators.required],
                address2: [project.dataProtection?.address2 || ''],
                city: [project.dataProtection?.city || '', Validators.required],
                country: [project.dataProtection?.country || '', Validators.required],
                postalCode: [project.dataProtection?.postalCode || '', Validators.required],
            }),
            branding: this._fb.group({
                backgroundColor: [project.branding?.backgroundColor || '#ffffff'],
                buttonColor: [project.branding?.buttonColor || '#3f3f46'],
                buttonTextColor: [project.branding?.buttonTextColor || '#ffffff'],
                image: [project.branding?.image || ''],
                imageBackgroundColor: [project.branding?.imageBackgroundColor || '#ffffff'],
                logo: [project.branding?.logo || ''],
                textColor: [project.branding?.textColor || '#3f3f46'],
                titleColor: [project.branding?.titleColor || '#3f3f46'],
            }),
            projectFlow: this._fb.group({
                type: ['humanAuthn'],
                target: ['personal'],
                status: [flow.status || 'draft'],
                version: [3],
                humanAuthn: this._fb.group({
                    mode: [flow.humanAuthn?.mode || 'standard', Validators.required],
                    livenessAtCreation: [!!flow.humanAuthn?.livenessAtCreation],
                }),
                storage: this._fb.group({
                    provider: [flow.storage?.provider || 'ipfs', Validators.required],
                }),
                integrations: this._fb.group({
                    redirectUrl: [flow.integrations?.redirectUrl || '', [Validators.required, Validators.pattern(STRICT_URL_PATTERN)]],
                    webhook: [flow.integrations?.webhook || null],
                }),
                signUpForm: this._fb.group({
                    additionalFields: [flow.signUpForm?.additionalFields || []],
                    allowAdditionalFields: [!!flow.signUpForm?.allowAdditionalFields],
                    countryCode: [flow.signUpForm?.countryCode || DEFAULT_PHONE_COUNTRY_CODE],
                    email: [!!flow.signUpForm?.email],
                    emailGateway: [flow.signUpForm?.emailGateway || 'none'],
                    fullName: [true],
                    fullNameStyle: [flow.signUpForm?.fullNameStyle || 'together'],
                    phone: [!!flow.signUpForm?.phone],
                    phoneGateway: [flow.signUpForm?.phoneGateway || 'sms'],
                    showPrivacyNotice: [!!flow.signUpForm?.showPrivacyNotice],
                    showTermsAndConditions: [!!flow.signUpForm?.showTermsAndConditions],
                }),
                documents: this._fb.group({
                    attemptLimit: [flow.documents?.attemptLimit || 3],
                    criminalHistoryVerification: [!!flow.documents?.criminalHistoryVerification],
                    criminalHistoryVerificationEndpoints: [flow.documents?.criminalHistoryVerificationEndpoints || []],
                    documentTypes: this._factory.createDocumentTypesWithDefaults(flow.documents?.documentTypes || [], 'personal'),
                    informationVerification: [!!flow.documents?.informationVerification],
                    screening: [!!flow.documents?.screening],
                    verificationMethods: [flow.documents?.verificationMethods || []],
                }),
                steps: this._fb.group({
                    document: [flow.steps?.document || 'skip'],
                    humanAuthn: ['mandatory'],
                }),
            }),
        });
        this.loading.set(false);
        this._cdr.markForCheck();
    }

    isFormValidForStep = (stepIndex: number): boolean => {
        if (!this.form) return false;
        const keys = this._setup.formKeys[stepIndex] || [];
        if (stepIndex === 2 && this.form.get('projectFlow.steps.document')?.value === 'skip') return true;
        return keys.every((key) => !this.form.get(key)?.invalid);
    };

    confirmNavigation(): MatDialogRef<FuseConfirmationDialogComponent> {
        return this._confirm.open({
            title: this._transloco.translate('humanAuthnProjects.setup.unsavedChanges'),
            message: this._transloco.translate('humanAuthnProjects.setup.unsavedChangesMessage'),
            actions: {
                confirm: { show: true, label: this._transloco.translate('humanAuthnProjects.setup.exitWithoutSaving') },
                cancel: { show: true, label: this._transloco.translate('cancel') },
            },
        });
    }

    nextStep(): void {
        if (!this.isFormValidForStep(this.stepIndex)) return;
        if (this.stepIndex === this.steps.length - 1) {
            this._router.navigate(['/human-authn/projects']);
            return;
        }
        this._router.navigate(['/human-authn/projects', this.projectId, 'setup', this.stepIndex + 1]);
    }

    previousStep(): void {
        if (this.stepIndex === 0) {
            this._router.navigate(['/human-authn/projects']);
            return;
        }
        this._router.navigate(['/human-authn/projects', this.projectId, 'setup', this.stepIndex - 1]);
    }

    goToStep(step: number): void {
        if (this.saving() || this.loading()) return;
        if (step > this.stepIndex && !this.isFormValidForStep(this.stepIndex)) return;
        this._router.navigate(['/human-authn/projects', this.projectId, 'setup', step]);
    }

    saveProject(): Observable<{ data: any }> {
        if (this.saving() || !this.isFormValidForStep(this.stepIndex)) return of();
        this.saving.set(true);
        const payload = this._preparePayload(this.form.getRawValue());
        const request$ = this.projectId !== 'new'
            ? this._setup.updateProject(this.projectId, payload)
            : this._setup.createProject(payload);
        return request$.pipe(catchError((err) => throwError(() => err)));
    }

    updateProjectId(id: string): void {
        this.projectId = id;
        this._setup.setProjectId(id);
    }

    signUpFormGroup(): FormGroup {
        return this.form.get('projectFlow.signUpForm') as FormGroup;
    }

    documentsFormGroup(): FormGroup {
        return this.form.get('projectFlow.documents') as FormGroup;
    }

    private _preparePayload(value: any): Record<string, unknown> {
        const { projectFlow, branding, dataProtection, ...project } = value;
        if (this.stepIndex === 0) return { ...project, dataProtection, target: 'personal' };
        if (this.stepIndex === 1) return { ...project, projectFlow: { type: 'humanAuthn', target: 'personal', signUpForm: projectFlow.signUpForm } };
        if (this.stepIndex === 2) {
            return {
                ...project,
                projectFlow: {
                    type: 'humanAuthn',
                    target: 'personal',
                    steps: projectFlow.steps,
                    documents: projectFlow.steps.document === 'skip' ? {} : projectFlow.documents,
                },
            };
        }
        if (this.stepIndex === 3) {
            return { ...project, projectFlow: { type: 'humanAuthn', target: 'personal', humanAuthn: projectFlow.humanAuthn, steps: projectFlow.steps } };
        }
        if (this.stepIndex === 4) {
            return { ...project, projectFlow: { type: 'humanAuthn', target: 'personal', storage: projectFlow.storage } };
        }
        if (this.stepIndex === 5) {
            return { ...project, projectFlow: { type: 'humanAuthn', target: 'personal', integrations: projectFlow.integrations } };
        }
        return { ...project, branding };
    }
}
