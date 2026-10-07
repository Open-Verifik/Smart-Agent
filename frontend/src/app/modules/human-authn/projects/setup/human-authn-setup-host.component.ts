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
import { HumanAuthnDetailsStepComponent } from './steps/details-step.component';
import { HumanAuthnDocumentsStepComponent } from './steps/documents-step.component';
import { HumanAuthnSetupService } from './human-authn-setup.service';
import { HumanAuthnIntegrationsStepComponent } from './steps/integrations-step.component';
import { HumanAuthnSignupStepComponent } from './steps/signup-step.component';
import { HumanAuthnUiStepComponent } from './steps/ui-step.component';
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
        HumanAuthnDocumentsStepComponent,
        HumanAuthnDetailsStepComponent,
        HumanAuthnSignupStepComponent,
        HumanAuthnModeStepComponent,
        HumanAuthnUiStepComponent,
        HumanAuthnStorageStepComponent,
        HumanAuthnIntegrationsStepComponent,
    ],
    templateUrl: './human-authn-setup-host.component.html',
    host: {
        class: 'flex min-w-0 w-full flex-auto',
    },
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
    loadFailed = signal(false);
    projectId = 'new';
    stepIndex = 0;
    private _hydrated = false;

    readonly steps = this._setup.steps;

    ngOnInit(): void {
        const snapshot = this._route.snapshot.params;
        this.projectId = snapshot['projectId'] || 'new';
        this.stepIndex = Number(snapshot['step'] || 0);
        this._setup.setProjectId(this.projectId);
        this._setup.setStepIndex(this.stepIndex);

        this._route.params.pipe(takeUntil(this._unsub$)).subscribe((params) => {
            this.projectId = params['projectId'] || this.projectId;
            this.stepIndex = Number(params['step'] ?? this.stepIndex);
            this._setup.setProjectId(this.projectId);
            this._setup.setStepIndex(this.stepIndex);
            this.form?.get('currentStep')?.setValue(this.stepIndex + 1, { emitEvent: false });
            this._cdr.markForCheck();
        });

        if (this.projectId !== 'new') {
            this._setup.requestProject(this.projectId).subscribe({
                next: (res) => {
                    const project = res?.data;
                    if (!`${project?.name || ''}`.trim()) {
                        this._failLoad();
                        return;
                    }
                    this._initForm(project);
                    this._hydrated = true;
                },
                error: () => this._failLoad(),
            });
            return;
        }

        this._initForm(this._setup.getDefaultProject());
        this._hydrated = true;
    }

    ngOnDestroy(): void {
        this._unsub$.next();
        this._unsub$.complete();
    }

    private _failLoad(): void {
        this.loading.set(false);
        this.loadFailed.set(true);
        this._snack.open(this._transloco.translate('humanAuthnProjects.loadError'), this._transloco.translate('close'), { duration: 3000 });
        this._cdr.markForCheck();
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
                    outputFormat: [flow.humanAuthn?.outputFormat || 'string', Validators.required],
                    tolerance: [
                        flow.humanAuthn?.tolerance || (flow.humanAuthn?.mode === 'active_user' ? 'HARDENED' : 'REGULAR'),
                        Validators.required,
                    ],
                    compareMinScore: [flow.humanAuthn?.compareMinScore ?? 0.85, [Validators.min(0.7), Validators.max(0.95)]],
                    verifierKey: [flow.humanAuthn?.verifierKey || '', [Validators.maxLength(128)]],
                    publicDataKeys: [this._defaultPublicDataKeys(flow)],
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
        this._bindPublicDataKeyAvailability(flow);
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
        if (!this._hydrated || !this.form || this.saving() || !this.isFormValidForStep(this.stepIndex)) return of();
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

    documentsFormGroup(): FormGroup {
        return this.form.get('projectFlow.documents') as FormGroup;
    }

    private _flowIdentity(projectFlow: any): Record<string, unknown> {
        return {
            type: 'humanAuthn',
            target: 'personal',
            status: projectFlow?.status || 'draft',
            version: 3,
        };
    }

    private _preparePayload(value: any): Record<string, unknown> {
        const { projectFlow, branding, dataProtection } = value;
        const flow = this._flowIdentity(projectFlow);
        if (this.stepIndex === 0) {
            return {
                name: value.name,
                allowedCountries: value.allowedCountries,
                contactEmail: value.contactEmail,
                defaultLanguage: value.defaultLanguage,
                privacyUrl: value.privacyUrl,
                termsAndConditionsUrl: value.termsAndConditionsUrl,
                currentStep: this.stepIndex + 1,
                dataProtection,
                target: 'personal',
                projectFlow: {
                    ...flow,
                    humanAuthn: this._humanAuthnPayload(projectFlow),
                    steps: projectFlow?.steps || { document: 'skip', humanAuthn: 'mandatory' },
                },
            };
        }
        if (this.stepIndex === 1) return { projectFlow: { ...flow, signUpForm: projectFlow.signUpForm } };
        if (this.stepIndex === 2) {
            return {
                projectFlow: {
                    ...flow,
                    steps: projectFlow.steps,
                    documents: projectFlow.steps.document === 'skip' ? {} : projectFlow.documents,
                },
            };
        }
        if (this.stepIndex === 3) {
            return {
                projectFlow: {
                    ...flow,
                    humanAuthn: this._humanAuthnPayload(projectFlow),
                    steps: projectFlow.steps,
                },
            };
        }
        if (this.stepIndex === 4) return { projectFlow: { ...flow, storage: projectFlow.storage } };
        if (this.stepIndex === 5) return { projectFlow: { ...flow, integrations: projectFlow.integrations } };
        return { branding };
    }

    private _defaultPublicDataKeys(flow: any): string[] {
        const available = this._availablePublicDataKeys(flow);
        if (!Array.isArray(flow?.humanAuthn?.publicDataKeys)) return available;
        return flow.humanAuthn.publicDataKeys.filter((key: string) => available.includes(key));
    }

    private _bindPublicDataKeyAvailability(flow: any): void {
        const seen = new Set(this._availablePublicDataKeys(flow));
        const sync = (): void => {
            const available = this._availablePublicDataKeys(this.form.get('projectFlow')?.value);
            const control = this.form.get('projectFlow.humanAuthn.publicDataKeys');
            const current = control?.value || [];
            const added = available.filter((key) => !seen.has(key));
            available.forEach((key) => seen.add(key));
            const next = [...new Set([...current.filter((key: string) => available.includes(key)), ...added])];
            if (JSON.stringify(next) !== JSON.stringify(current)) control?.setValue(next);
        };
        this.form.get('projectFlow.signUpForm')?.valueChanges.pipe(takeUntil(this._unsub$)).subscribe(sync);
        this.form.get('projectFlow.steps.document')?.valueChanges.pipe(takeUntil(this._unsub$)).subscribe(sync);
    }

    private _availablePublicDataKeys(flow: any): string[] {
        const keys: string[] = [];
        if (flow?.signUpForm?.fullName !== false) keys.push('fullName');
        if (flow?.signUpForm?.email) keys.push('email');
        if (flow?.signUpForm?.phone) keys.push('phone');
        if (flow?.steps?.document && flow.steps.document !== 'skip') keys.push('documentNumber');
        return keys;
    }

    private _humanAuthnPayload(projectFlow: any): Record<string, unknown> {
        const humanAuthn = projectFlow?.humanAuthn || {};
        const mode = humanAuthn.mode === 'active_user' ? 'active_user' : 'standard';
        return {
            mode,
            livenessAtCreation: !!humanAuthn.livenessAtCreation,
            outputFormat: humanAuthn.outputFormat === 'qrCode' ? 'qrCode' : 'string',
            tolerance: humanAuthn.tolerance || (mode === 'active_user' ? 'HARDENED' : 'REGULAR'),
            compareMinScore: humanAuthn.compareMinScore ?? 0.85,
            verifierKey: `${humanAuthn.verifierKey || ''}`.trim(),
            publicDataKeys: this._availablePublicDataKeys(projectFlow).filter((key) =>
                (humanAuthn.publicDataKeys || ['fullName']).includes(key)
            ),
        };
    }
}
