import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, switchMap } from 'rxjs';
import { SmartBusinessService } from '../../smart-business.service';
import type {
    BusinessBranding,
    BusinessProject,
    BusinessProjectFlow,
    VerifyStyleId,
} from '../../smart-business.types';
import { BUSINESS_VERIFY_STYLES, BUSINESS_WIZARD_STEPS, BusinessWizardStep, StyleOption } from './business-setup.types';

@Injectable({ providedIn: 'root' })
export class BusinessSetupService {
    private _businessService: SmartBusinessService;

    constructor(businessService?: SmartBusinessService) {
        if (businessService) {
            this._businessService = businessService;
        } else {
            try {
                this._businessService = inject(SmartBusinessService, { optional: true }) as any;
            } catch {
                this._businessService = {} as any;
            }
        }
    }

    private _projectId$ = new BehaviorSubject<string>('new');
    private _project$ = new BehaviorSubject<BusinessProject | null>(null);
    private _stepIndex$ = new BehaviorSubject<number>(0);

    readonly steps: BusinessWizardStep[] = BUSINESS_WIZARD_STEPS;
    readonly styles: StyleOption[] = BUSINESS_VERIFY_STYLES;

    get projectId$(): Observable<string> {
        return this._projectId$.asObservable();
    }
    get projectId(): string {
        return this._projectId$.getValue();
    }
    set projectId(id: string) {
        this._projectId$.next(id);
    }

    get project$(): Observable<BusinessProject | null> {
        return this._project$.asObservable();
    }
    get project(): BusinessProject | null {
        return this._project$.getValue();
    }
    set project(project: BusinessProject | null) {
        this._project$.next(project);
    }

    get stepIndex$(): Observable<number> {
        return this._stepIndex$.asObservable();
    }
    get stepIndex(): number {
        return this._stepIndex$.getValue();
    }
    set stepIndex(step: number) {
        this._stepIndex$.next(step);
    }

    get defaultBranding(): BusinessBranding {
        return {
            backgroundColor: '#e8ebe6',
            buttonColor: '#9fe870',
            buttonTextColor: '#163300',
            image: '',
            imageBackgroundColor: '#ffffff',
            logo: '',
            textColor: '#0e0f0c',
            titleColor: '#0e0f0c',
        };
    }

    get defaultProject(): BusinessProject {
        return {
            _id: '',
            name: '',
            target: 'business',
            status: 'draft',
            allowedCountries: ['Colombia', 'Mexico', 'United States', 'Chile', 'Peru'],
            defaultLanguage: 'es',
            contactEmail: '',
            privacyUrl: '',
            termsAndConditionsUrl: '',
            dataProtection: {
                name: '',
                email: '',
                address: '',
                address2: '',
                city: '',
                country: 'Colombia',
                postalCode: '',
            },
            branding: this.defaultBranding,
            currentStep: 0,
            lastStep: 0,
            projectFlows: [this.defaultProjectFlow],
        };
    }

    get defaultProjectFlow(): BusinessProjectFlow {
        return {
            target: 'business',
            type: 'onboarding',
            status: 'draft',
            version: 3,
            onboardingSettings: {
                enrollmentClient: 'v2',
                verifyStyle: 'a',
                flowOrder: 'consent_first',
                requiresSignature: false,
            },
            companyIntake: {
                countryCode: 'CO',
                collectCommercialName: true,
                collectAddress: true,
                collectPhone: true,
                phoneGateway: 'both',
                collectEmail: true,
                emailGateway: 'mailgun',
                allowedEntityTypes: ['SAS', 'SA', 'LTDA', 'LLC', 'CORP'],
            },
            corporateDocs: {
                attemptLimit: 3,
                screening: true,
                officialRegistryChecks: {
                    dian: true,
                    rues: true,
                    sat: false,
                    sanctionsList: true,
                },
                requiredDocuments: [
                    {
                        category: 'business_document',
                        label: 'Certificado de Existencia y Representación Legal (Cámara de Comercio)',
                        required: true,
                        maxDaysOld: 90,
                        ocrValidation: true,
                    },
                    {
                        category: 'tax_document',
                        label: 'Registro Único Tributario (RUT / NIT)',
                        required: true,
                        ocrValidation: true,
                    },
                    {
                        category: 'bank_document',
                        label: 'Certificación Bancaria',
                        required: false,
                        maxDaysOld: 30,
                        ocrValidation: false,
                    },
                ],
            },
            representativesPolicy: {
                minRepresentatives: 1,
                maxRepresentatives: 5,
                uboOwnershipThreshold: 25,
                requireLiveness: true,
                requireDocumentScan: true,
                notificationChannel: 'both',
                livenessMinScore: 0.85,
                compareMinScore: 0.85,
            },
            integrations: {
                redirectUrl: '',
                webhook: null,
                apiUrl: '',
                source: 'NONE',
                strategy: 'none',
            },
        };
    }

    getStyleById(id: VerifyStyleId | string): StyleOption {
        return this.styles.find((s) => s.id === id) || this.styles[0];
    }

    applyStylePreset(styleId: VerifyStyleId, brandingGroup: any): void {
        const style = this.getStyleById(styleId);
        if (!brandingGroup) return;

        brandingGroup.patchValue({
            backgroundColor: style.pageBg,
            buttonColor: style.buttonBg,
            buttonTextColor: style.buttonText,
            textColor: style.ink,
            titleColor: style.ink,
        });
        brandingGroup.markAsDirty();
    }

    requestProject(id: string): Observable<BusinessProject> {
        return this._businessService.getProject(id);
    }

    saveProject(
        payload: Partial<BusinessProject> & { projectFlow?: Partial<BusinessProjectFlow>; projectFlowType?: string },
        explicitProjectId?: string,
        explicitFlowId?: string
    ): Observable<{ data: BusinessProject }> {
        const targetId = explicitProjectId || this.projectId;
        if (targetId && targetId !== 'new') {
            const flowId = explicitFlowId || this.project?.projectFlows?.[0]?._id;
            if (flowId && payload.projectFlow) {
                return this._businessService.updateProjectFlow(flowId, payload.projectFlow).pipe(
                    catchError(() => of(null)),
                    switchMap(() => this._businessService.updateProject(targetId, payload))
                );
            }
            return this._businessService.updateProject(targetId, payload);
        }
        return this._businessService.createProject(payload);
    }
}
