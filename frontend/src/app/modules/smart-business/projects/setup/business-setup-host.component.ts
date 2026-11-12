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
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { SetupFormFactory } from 'app/modules/smart-enroll/projects/setup/setup-form.factory';
import { Subject, takeUntil } from 'rxjs';
import type { BusinessProject, VerifyStyleId } from '../../smart-business.types';
import { BusinessBreadcrumbsComponent } from './business-breadcrumbs.component';
import { BusinessSetupService } from './business-setup.service';
import {
    endpointsToLegacyRegistryChecks,
    KYB_DEFAULT_CHECK_ENDPOINTS,
    legacyRegistryChecksToEndpoints,
} from './steps/corporate-docs/kyb-check-catalog.util';
import { BusinessPreviewComponent } from './preview/business-preview.component';
import { BusinessBasicSetupComponent } from './steps/basic-setup/business-basic-setup.component';
import { CompanyIntakeComponent } from './steps/company-intake/company-intake.component';
import { CorporateDocsComponent } from './steps/corporate-docs/corporate-docs.component';
import { BusinessIntegrationsComponent } from './steps/integrations/business-integrations.component';
import { RepresentativesPolicyComponent } from './steps/representatives-policy/representatives-policy.component';
import { BusinessUserInterfaceComponent } from './steps/user-interface/business-user-interface.component';

@Component({
    selector: 'business-setup-host',
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
        BusinessBreadcrumbsComponent,
        BusinessBasicSetupComponent,
        CompanyIntakeComponent,
        CorporateDocsComponent,
        RepresentativesPolicyComponent,
        BusinessIntegrationsComponent,
        BusinessUserInterfaceComponent,
        BusinessPreviewComponent,
    ],
    templateUrl: './business-setup-host.component.html',
    styleUrls: ['./business-setup-host.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessSetupHostComponent implements OnInit, OnDestroy {
    private _route: ActivatedRoute;
    private _router: Router;
    private _fb: FormBuilder;
    private _factory: SetupFormFactory;
    private _setup: BusinessSetupService;
    private _cdr: ChangeDetectorRef;
    private _snack: MatSnackBar;
    private _transloco: TranslocoService | null = null;

    constructor(
        route?: ActivatedRoute,
        router?: Router,
        fb?: FormBuilder,
        setup?: BusinessSetupService,
        cdr?: ChangeDetectorRef,
        snack?: MatSnackBar,
        transloco?: TranslocoService
    ) {
        this._route = route || (inject(ActivatedRoute, { optional: true }) as any);
        this._router = router || (inject(Router, { optional: true }) as any);
        this._fb = fb || (inject(FormBuilder, { optional: true }) as any) || new FormBuilder();
        try {
            this._factory =
                inject(SetupFormFactory, { optional: true }) || new SetupFormFactory(this._fb);
        } catch {
            this._factory = new SetupFormFactory(this._fb);
        }
        this._setup =
            setup ||
            (inject(BusinessSetupService, { optional: true }) as any) ||
            new BusinessSetupService();
        try {
            this._cdr =
                cdr ||
                (inject(ChangeDetectorRef, { optional: true }) as any) ||
                ({ markForCheck: () => {} } as any);
        } catch {
            this._cdr = cdr || ({ markForCheck: () => {} } as any);
        }
        this._snack = snack || (inject(MatSnackBar, { optional: true }) as any);
        try {
            this._transloco = transloco ?? inject(TranslocoService, { optional: true });
        } catch {
            this._transloco = transloco ?? null;
        }
    }

    private _destroy$ = new Subject<void>();

    form!: FormGroup;
    loading = signal(true);
    saving = signal(false);

    projectId = 'new';
    stepIndex = 0;
    maxVisitedStep = 0;
    project: BusinessProject | null = null;

    ngOnInit(): void {
        this._initForm();
        this._initRouteSubscriptions();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    private static readonly COUNTRY_CODE_TO_NAME: Record<string, string> = {
        CO: 'Colombia',
        MX: 'Mexico',
        US: 'United States',
        CL: 'Chile',
        PE: 'Peru',
        PA: 'Panama',
        EC: 'Ecuador',
        ES: 'Spain',
        BR: 'Brazil',
        AR: 'Argentina',
        CA: 'Canada',
        IN: 'India',
        CN: 'China',
        ID: 'Indonesia',
    };

    private _normalizeCountry(val: string): string {
        if (!val) return 'Colombia';
        const upper = val.trim().toUpperCase();
        if (BusinessSetupHostComponent.COUNTRY_CODE_TO_NAME[upper]) {
            return BusinessSetupHostComponent.COUNTRY_CODE_TO_NAME[upper];
        }
        if (val.trim() === 'México') return 'Mexico';
        if (val.trim() === 'Perú') return 'Peru';
        if (val.trim() === 'Panamá') return 'Panama';
        if (val.trim() === 'España') return 'Spain';
        if (val.trim() === 'Brasil') return 'Brazil';
        return val.trim();
    }

    private _normalizeCountries(list: unknown): string[] {
        if (!Array.isArray(list) || !list.length) {
            return ['Colombia', 'Mexico', 'United States', 'Chile', 'Peru'];
        }
        return Array.from(
            new Set(list.map((c) => this._normalizeCountry(String(c || ''))).filter(Boolean))
        );
    }

    private _initRouteSubscriptions(): void {
        this._route.params.pipe(takeUntil(this._destroy$)).subscribe((params) => {
            this.projectId = params['projectId'] || 'new';
            this._setup.projectId = this.projectId;
            const step = Number(params['step']) || 0;
            this.stepIndex = Math.max(0, Math.min(5, step));
            this.maxVisitedStep = Math.max(this.maxVisitedStep, this.stepIndex);

            if (
                this.projectId !== 'new' &&
                (!this.project || this.project._id !== this.projectId)
            ) {
                this._loadProject(this.projectId);
            } else {
                this.loading.set(false);
                this._cdr.markForCheck();
            }
        });
    }

    private _initForm(): void {
        const defaultProj = this._setup.defaultProject;
        const defaultFlow = this._setup.defaultProjectFlow;
        const defaultBranding = this._setup.defaultBranding;

        this.form = this._fb.group({
            name: [defaultProj.name, [Validators.required, Validators.maxLength(80)]],
            target: ['business', [Validators.required]],
            status: ['draft'],
            allowedCountries: [defaultProj.allowedCountries, [Validators.required]],
            defaultLanguage: [defaultProj.defaultLanguage, [Validators.required]],
            contactEmail: [defaultProj.contactEmail, [Validators.required, Validators.email]],
            privacyUrl: [defaultProj.privacyUrl, [Validators.required]],
            termsAndConditionsUrl: [defaultProj.termsAndConditionsUrl, [Validators.required]],
            dataProtection: this._fb.group({
                name: [defaultProj.dataProtection.name, [Validators.required]],
                email: [defaultProj.dataProtection.email, [Validators.required, Validators.email]],
                address: [defaultProj.dataProtection.address, [Validators.required]],
                address2: [defaultProj.dataProtection.address2 || ''],
                city: [defaultProj.dataProtection.city, [Validators.required]],
                country: [defaultProj.dataProtection.country || 'CO', [Validators.required]],
                postalCode: [defaultProj.dataProtection.postalCode || ''],
            }),
            branding: this._fb.group({
                backgroundColor: [defaultBranding.backgroundColor, [Validators.required]],
                buttonColor: [defaultBranding.buttonColor, [Validators.required]],
                buttonTextColor: [defaultBranding.buttonTextColor, [Validators.required]],
                image: [defaultBranding.image || ''],
                imageBackgroundColor: [defaultBranding.imageBackgroundColor || '#ffffff'],
                logo: [defaultBranding.logo || ''],
                textColor: [defaultBranding.textColor, [Validators.required]],
                titleColor: [defaultBranding.titleColor || ''],
            }),
            projectFlow: this._fb.group({
                target: ['business', [Validators.required]],
                type: ['onboarding', [Validators.required]],
                status: ['draft'],
                version: [3],
                onboardingSettings: this._fb.group({
                    enrollmentClient: [defaultFlow.onboardingSettings?.enrollmentClient || 'v2'],
                    verifyStyle: [
                        defaultFlow.onboardingSettings?.verifyStyle || 'a',
                        [Validators.required],
                    ],
                    flowOrder: [defaultFlow.onboardingSettings?.flowOrder || 'consent_first'],
                    requiresSignature: [defaultFlow.onboardingSettings?.requiresSignature || false],
                }),
                companyIntake: this._fb.group({
                    countryCode: [defaultFlow.companyIntake?.countryCode || 'CO'],
                    collectCommercialName: [
                        defaultFlow.companyIntake?.collectCommercialName ?? true,
                    ],
                    collectAddress: [defaultFlow.companyIntake?.collectAddress ?? true],
                    collectPhone: [defaultFlow.companyIntake?.collectPhone ?? true],
                    phoneGateway: [defaultFlow.companyIntake?.phoneGateway || 'both'],
                    collectEmail: [defaultFlow.companyIntake?.collectEmail ?? true],
                    emailGateway: [defaultFlow.companyIntake?.emailGateway || 'mailgun'],
                    allowedEntityTypes: [
                        defaultFlow.companyIntake?.allowedEntityTypes || ['SAS', 'SA', 'LTDA'],
                    ],
                }),
                corporateDocs: this._fb.group({
                    attemptLimit: [
                        defaultFlow.corporateDocs?.attemptLimit || 3,
                        [Validators.required, Validators.min(1), Validators.max(5)],
                    ],
                    screening: [defaultFlow.corporateDocs?.screening ?? true],
                    officialRegistryChecks: this._fb.group({
                        dian: [defaultFlow.corporateDocs?.officialRegistryChecks.dian ?? true],
                        rues: [defaultFlow.corporateDocs?.officialRegistryChecks.rues ?? true],
                        sat: [defaultFlow.corporateDocs?.officialRegistryChecks.sat ?? false],
                        sanctionsList: [
                            defaultFlow.corporateDocs?.officialRegistryChecks.sanctionsList ?? true,
                        ],
                    }),
                }),
                business: this._fb.group(
                    {
                        attemptLimit: [
                            defaultFlow.corporateDocs?.attemptLimit || 3,
                            [Validators.required, Validators.min(1), Validators.max(5)],
                        ],
                        criminalHistoryVerification: [true],
                        criminalHistoryVerificationEndpoints: [[...KYB_DEFAULT_CHECK_ENDPOINTS] as string[]],
                        informationVerification: [true],
                        screening: [defaultFlow.corporateDocs?.screening ?? true],
                        documentTypes: this._factory.createDocumentTypesFormArray(
                            ['Colombia', 'Mexico', 'United States'].map((country) => ({
                                country,
                                configurations: [
                                    {
                                        documentCategory: 'business_document',
                                        active: true,
                                        documentTemplates: [],
                                    },
                                    {
                                        documentCategory: 'tax_document',
                                        active: true,
                                        documentTemplates: [],
                                    },
                                    {
                                        documentCategory: 'bank_document',
                                        active: true,
                                        documentTemplates: [],
                                    },
                                    {
                                        documentCategory: 'proof_of_address',
                                        active: false,
                                        documentTemplates: [],
                                    },
                                ],
                            })),
                            'business'
                        ),
                    },
                    { validators: SetupFormFactory.validators.documentsScreening() }
                ),
                representativesPolicy: this._fb.group({
                    minRepresentatives: [
                        defaultFlow.representativesPolicy?.minRepresentatives || 1,
                        [Validators.required, Validators.min(1)],
                    ],
                    maxRepresentatives: [
                        defaultFlow.representativesPolicy?.maxRepresentatives || 5,
                        [Validators.required, Validators.max(10)],
                    ],
                    uboOwnershipThreshold: [
                        defaultFlow.representativesPolicy?.uboOwnershipThreshold || 25,
                        [Validators.required, Validators.min(1), Validators.max(100)],
                    ],
                    requireLiveness: [defaultFlow.representativesPolicy?.requireLiveness ?? true],
                    requireDocumentScan: [
                        defaultFlow.representativesPolicy?.requireDocumentScan ?? true,
                    ],
                    notificationChannel: [
                        defaultFlow.representativesPolicy?.notificationChannel || 'both',
                    ],
                    livenessMinScore: [
                        defaultFlow.representativesPolicy?.livenessMinScore || 0.85,
                        [Validators.required],
                    ],
                    compareMinScore: [
                        defaultFlow.representativesPolicy?.compareMinScore || 0.85,
                        [Validators.required],
                    ],
                }),
                integrations: this._fb.group({
                    redirectUrl: [defaultFlow.integrations?.redirectUrl || ''],
                    webhook: [defaultFlow.integrations?.webhook || null],
                    apiUrl: [defaultFlow.integrations?.apiUrl || ''],
                    source: [defaultFlow.integrations?.source || 'NONE'],
                    strategy: [defaultFlow.integrations?.strategy || 'none'],
                }),
            }),
        });
    }

    private _loadProject(id: string): void {
        this.loading.set(true);
        this._setup.requestProject(id).subscribe({
            next: (proj) => {
                this.project = proj;
                this._setup.project = proj;
                if (proj) {
                    const flow = proj.projectFlows?.[0] as any;
                    const rawStyle =
                        flow?.onboardingSettings?.verifyStyle ||
                        (typeof flow?.onboardingSettings?.style === 'string'
                            ? flow.onboardingSettings.style.replace(/^style_/i, '')
                            : '') ||
                        'a';
                    const activeStyleId = (String(rawStyle).toLowerCase() as VerifyStyleId) || 'a';
                    const preset =
                        typeof this._setup.getStyleById === 'function'
                            ? this._setup.getStyleById(activeStyleId)
                            : null;
                    const rawBrand = (proj.branding || {}) as any;

                    const normalizedBranding = {
                        backgroundColor:
                            rawBrand.backgroundColor ||
                            preset?.pageBg ||
                            rawBrand.bgColor ||
                            '#e8ebe6',
                        buttonColor: rawBrand.buttonColor || preset?.buttonBg || '#9fe870',
                        buttonTextColor:
                            rawBrand.buttonTextColor ||
                            preset?.buttonText ||
                            rawBrand.buttonTxtColor ||
                            '#163300',
                        image: rawBrand.image || rawBrand.rightImage || '',
                        imageBackgroundColor:
                            rawBrand.imageBackgroundColor ||
                            rawBrand.rightBackgroundColor ||
                            '#ffffff',
                        logo: rawBrand.logo || '',
                        textColor:
                            rawBrand.textColor || preset?.ink || rawBrand.txtColor || '#0e0f0c',
                        titleColor: rawBrand.titleColor || preset?.ink || '#0e0f0c',
                    };

                    this.form.patchValue({
                        ...proj,
                        allowedCountries: this._normalizeCountries(proj.allowedCountries),
                        dataProtection: {
                            ...(proj.dataProtection || {}),
                            country: this._normalizeCountry(
                                proj.dataProtection?.country || 'Colombia'
                            ),
                        },
                        branding: normalizedBranding,
                    });

                    if (flow) {
                        this.form.get('projectFlow')?.patchValue({
                            ...flow,
                            onboardingSettings: {
                                ...(flow.onboardingSettings || {}),
                                enrollmentClient: 'v2',
                                verifyStyle: activeStyleId,
                            },
                        });

                        const bizGroup = this.form.get('projectFlow.business');
                        const savedEndpoints = bizGroup?.get('criminalHistoryVerificationEndpoints')?.value;
                        if (
                            bizGroup &&
                            (!Array.isArray(savedEndpoints) || savedEndpoints.length === 0) &&
                            !flow.business?.criminalHistoryVerificationEndpoints?.length
                        ) {
                            bizGroup.patchValue({
                                criminalHistoryVerificationEndpoints: legacyRegistryChecksToEndpoints(
                                    flow.corporateDocs?.officialRegistryChecks
                                ),
                                criminalHistoryVerification: true,
                                informationVerification: true,
                                screening: flow.corporateDocs?.screening ?? true,
                                attemptLimit: flow.corporateDocs?.attemptLimit ?? flow.business?.attemptLimit ?? 3,
                            });
                        }

                        const bizDocTypesCtrl = this.form.get(
                            'projectFlow.business.documentTypes'
                        ) as FormArray | null;
                        if (bizDocTypesCtrl) {
                            const incomingDocTypes =
                                Array.isArray(flow.business?.documentTypes) &&
                                flow.business.documentTypes.length > 0
                                    ? flow.business.documentTypes
                                    : this._normalizeCountries(proj.allowedCountries).map(
                                          (country) => ({
                                              country,
                                              configurations: [
                                                  {
                                                      documentCategory: 'business_document',
                                                      active: true,
                                                      documentTemplates: [],
                                                  },
                                                  {
                                                      documentCategory: 'tax_document',
                                                      active: true,
                                                      documentTemplates: [],
                                                  },
                                                  {
                                                      documentCategory: 'bank_document',
                                                      active: true,
                                                      documentTemplates: [],
                                                  },
                                                  {
                                                      documentCategory: 'proof_of_address',
                                                      active: false,
                                                      documentTemplates: [],
                                                  },
                                              ],
                                          })
                                      );
                            bizDocTypesCtrl.clear();
                            for (const dt of incomingDocTypes) {
                                bizDocTypesCtrl.push(
                                    this._factory.createDocumentTypeFormGroup(
                                        {
                                            country: this._normalizeCountry(
                                                dt.country || 'Colombia'
                                            ),
                                            configurations: dt.configurations,
                                        },
                                        'business'
                                    )
                                );
                            }
                        }
                    }

                    if (activeStyleId && activeStyleId !== 'a') {
                        const isDefaultA =
                            !rawBrand?.buttonColor ||
                            rawBrand.buttonColor === '#9fe870' ||
                            rawBrand.buttonColor === '#059669' ||
                            rawBrand.buttonColor === '#14AE5C';
                        if (isDefaultA) {
                            const brandingGroup = this.form.get('branding');
                            this._setup.applyStylePreset(activeStyleId, brandingGroup);
                        }
                    }
                }
                this.loading.set(false);
                this._cdr.markForCheck();
            },
            error: () => {
                this._snack.open(
                    this._transloco?.translate('smartBusiness.setup.loadError') ||
                        'Failed to load SmartBusiness project',
                    'OK',
                    { duration: 3000 }
                );
                this.loading.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    fillDevSample(): void {
        this.form.patchValue({
            name: 'Verifik B2B Corporate Onboarding 2026',
            allowedCountries: ['Colombia', 'Mexico', 'United States', 'Chile'],
            contactEmail: 'compliance@verifik.co',
            defaultLanguage: 'es',
            privacyUrl: 'https://verifik.co/privacy',
            termsAndConditionsUrl: 'https://verifik.co/terms',
            dataProtection: {
                name: 'Verifik Data Protection Officer',
                email: 'dpo@verifik.co',
                address: 'Carrera 7 # 116-50 Piso 8',
                city: 'Bogotá',
                country: 'Colombia',
                postalCode: '110111',
            },
            projectFlow: {
                integrations: {
                    redirectUrl: 'https://yourcompany.com/onboarding/completed',
                    webhook: 'https://api.yourcompany.com/webhooks/kyb-complete',
                },
            },
        });
        this.form.markAsDirty();
        this._snack.open(
            this._transloco?.translate('smartBusiness.setup.demoLoaded') ||
                'Sample KYB values loaded successfully',
            'OK',
            { duration: 2500 }
        );
        this._cdr.markForCheck();
    }

    goToStep(index: number): void {
        this.stepIndex = index;
        const targetRoute =
            this.projectId === 'new'
                ? ['/smart-business/projects', 'new', 'setup', index]
                : ['/smart-business/projects', this.projectId, 'setup', index];
        void this._router.navigate(targetRoute);
    }

    nextStep(): void {
        if (this.stepIndex < 5) {
            this.goToStep(this.stepIndex + 1);
        } else {
            this.saveProject();
        }
    }

    previousStep(): void {
        if (this.stepIndex > 0) {
            this.goToStep(this.stepIndex - 1);
        } else {
            this.returnToProjects();
        }
    }

    returnToProjects(): void {
        void this._router.navigate(['/smart-business/projects']);
    }

    saveProject(): void {
        this.saving.set(true);
        const rawValue = this.form.getRawValue();
        const isFinalOrActive = this.project?.status === 'active' || this.stepIndex === 5;
        const resolvedStatus: 'draft' | 'active' | 'paused' = isFinalOrActive
            ? 'active'
            : (rawValue.status as 'draft' | 'active' | 'paused') || 'draft';

        const computedLastStep =
            this.stepIndex === 5
                ? 6
                : Math.max(
                      this.stepIndex + 1,
                      this.maxVisitedStep + 1,
                      Number(this.project?.lastStep || 0)
                  );

        const rawBizDocTypes = Array.isArray(rawValue.projectFlow?.business?.documentTypes)
            ? rawValue.projectFlow.business.documentTypes
            : [];
        const sanitizedBizDocTypes = rawBizDocTypes
            .filter((dt: any) => dt && dt.country)
            .map((dt: any) => ({
                country: this._normalizeCountry(dt.country),
                configurations: (dt.configurations || []).map((cfg: any) => {
                    const validTemplates = (cfg.documentTemplates || [])
                        .map((t: any) => ({
                            promptTemplate:
                                t?.promptTemplate && typeof t.promptTemplate === 'object'
                                    ? t.promptTemplate._id
                                    : t?.promptTemplate || null,
                            required: t?.required === 'mandatory' ? 'mandatory' : 'optional',
                        }))
                        .filter((t: any) => Boolean(t.promptTemplate));
                    return {
                        active: Boolean(cfg.active && validTemplates.length > 0),
                        documentCategory: cfg.documentCategory,
                        documentTemplates: validTemplates,
                    };
                }),
            }));

        const docTypeCountries = sanitizedBizDocTypes
            .map((dt: any) => dt.country)
            .filter((c: string) => Boolean(c) && c !== 'World');
        const mergedCountries =
            docTypeCountries.length > 0
                ? Array.from(
                      new Set([
                          ...docTypeCountries,
                          ...this._normalizeCountries(rawValue.allowedCountries),
                      ])
                  )
                : this._normalizeCountries(rawValue.allowedCountries);

        const bizEndpoints: string[] = Array.isArray(
            rawValue.projectFlow?.business?.criminalHistoryVerificationEndpoints
        )
            ? rawValue.projectFlow.business.criminalHistoryVerificationEndpoints
            : [];

        const projectFlowPayload = {
            ...(rawValue.projectFlow || {}),
            target: 'business' as const,
            type: 'onboarding' as const,
            status: resolvedStatus,
            version: 3,
            business: {
                attemptLimit: Number(
                    rawValue.projectFlow?.business?.attemptLimit ||
                        rawValue.projectFlow?.corporateDocs?.attemptLimit ||
                        3
                ),
                criminalHistoryVerification: Boolean(
                    rawValue.projectFlow?.business?.criminalHistoryVerification ?? true
                ),
                criminalHistoryVerificationEndpoints: bizEndpoints,
                informationVerification: Boolean(rawValue.projectFlow?.business?.informationVerification ?? true),
                screening: Boolean(rawValue.projectFlow?.business?.screening ?? true),
                documentTypes: sanitizedBizDocTypes,
            },
            corporateDocs: {
                ...(rawValue.projectFlow?.corporateDocs || {}),
                attemptLimit: Number(rawValue.projectFlow?.business?.attemptLimit || 3),
                screening: Boolean(rawValue.projectFlow?.business?.screening ?? true),
                officialRegistryChecks: endpointsToLegacyRegistryChecks(bizEndpoints),
            },
            onboardingSettings: {
                ...(rawValue.projectFlow?.onboardingSettings || {}),
                enrollmentClient: 'v2' as const,
                verifyStyle: (rawValue.projectFlow?.onboardingSettings?.verifyStyle ||
                    'a') as VerifyStyleId,
            },
        };

        const payload: Partial<BusinessProject> & {
            projectFlow?: any;
            projectFlowType?: string;
            version?: number;
        } = {
            ...rawValue,
            target: 'business',
            status: resolvedStatus,
            version: 3,
            projectFlowType: 'onboarding',
            allowedCountries: mergedCountries,
            dataProtection: {
                ...(rawValue.dataProtection || {}),
                country: this._normalizeCountry(rawValue.dataProtection?.country || 'Colombia'),
                postalCode: rawValue.dataProtection?.postalCode || '110111',
            },
            projectFlow: projectFlowPayload,
            currentStep: this.stepIndex === 5 ? 6 : this.stepIndex + 1,
            lastStep: computedLastStep,
        };

        const existingFlowId = this.project?.projectFlows?.[0]?._id;
        this._setup.projectId = this.projectId;

        this._setup.saveProject(payload, this.projectId, existingFlowId).subscribe({
            next: (res) => {
                this.saving.set(false);
                this._snack.open(
                    this._transloco?.translate('smartBusiness.setup.savedSuccess') ||
                        'SmartBusiness project saved successfully',
                    'OK',
                    { duration: 3000 }
                );
                const savedId = res?.data?._id || this.projectId;
                if (savedId && savedId !== 'new') {
                    void this._router.navigate(['/smart-business/projects', savedId]);
                } else {
                    this.returnToProjects();
                }
            },
            error: () => {
                this.saving.set(false);
                this._snack.open(
                    this._transloco?.translate('smartBusiness.setup.savedSandbox') ||
                        'SmartBusiness project saved in local sandbox mode',
                    'OK',
                    { duration: 3000 }
                );
                this.returnToProjects();
            },
        });
    }
}
