import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import type {
    Branding,
    BusinessProjectFlow,
    DefaultProjectFlow,
    PaginatedResponse,
    PersonalProjectFlow,
    Project,
} from './setup.types';

/**
 * Names mirror verifik-client-panel `ProjectsSmartEnrollService` so the form factory and
 * step components keep the same wiring as the source repo.
 */

/** Minimal `DocumentType` shape used by the documents step preview UX. */
export interface DocumentTypeLite {
    _id: string;
    name: string;
    code: string;
    country: string;
    category: string;
    frontImage?: string;
    backImage?: string;
}

/** Minimal `PromptTemplate` shape returned by `/v2/prompt-templates`. */
export interface PromptTemplateLite {
    _id: string;
    name: string;
    country?: string;
    documentCategory?: string;
    documentType?: DocumentTypeLite | string;
    system?: boolean;
}

export type PreviewView =
    | 'signup'
    | 'document-scan'
    | 'document-upload'
    | 'document-result'
    | 'liveness'
    | 'liveness-result';

@Injectable({ providedIn: 'root' })
export class SetupService {
    private _http = inject(HttpClient);

    private _projectId$ = new BehaviorSubject<string>('new');
    private _project$ = new BehaviorSubject<Project | null>(null);
    private _stepIndex$ = new BehaviorSubject<number>(0);

    private _stepIndex = 0;
    private _projectId = 'new';
    private _project: Project | null = null;

    constructor() {
        this.project = this.getDefaultProject();
        this.projectId = 'new';
        this.stepIndex = 0;
    }

    private get apiUrl(): string {
        return environment.apiUrl;
    }

    private get baseUrl(): string {
        return `${this.apiUrl}/v3`;
    }

    private get authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    // ---------------------------------------------------------------------------
    // Form key arrays — mirrored from verifik-client-panel projects-smart-enroll.service
    // ---------------------------------------------------------------------------

    get basicSetupFormKeys(): string[] {
        return [
            'name',
            'allowedCountries',
            'contactEmail',
            'privacyUrl',
            'termsAndConditionsUrl',
            'dataProtection.name',
            'dataProtection.email',
            'dataProtection.address',
            'dataProtection.address2',
            'dataProtection.country',
            'dataProtection.postalCode',
            'dataProtection.city',
        ];
    }

    get businessFormKeys(): string[] {
        return [
            'projectFlow.steps.businessVerification',
            'projectFlow.business',
            'projectFlow.business.attemptLimit',
            'projectFlow.business.documentTypes',
            'projectFlow.business.screening',
        ];
    }

    get businessPreviewViews(): Record<number, PreviewView[]> {
        return {
            0: [],
            1: ['signup'],
            2: ['document-scan', 'document-upload', 'document-result'],
            3: ['signup', 'document-scan', 'document-upload', 'document-result', 'liveness', 'liveness-result'],
            4: [],
            5: ['signup', 'document-scan', 'document-upload', 'document-result', 'liveness', 'liveness-result'],
        };
    }

    get businessSteps(): string[] {
        return [
            'smartEnrollProjects.setup.steps.basic_setup',
            'smartEnrollProjects.setup.steps.signup_form',
            'smartEnrollProjects.setup.steps.business',
            'smartEnrollProjects.setup.steps.representatives',
            'smartEnrollProjects.setup.steps.integrations',
            'smartEnrollProjects.setup.steps.user_interface',
        ];
    }

    get businessTargetFormKeys(): Record<number, string[]> {
        return {
            0: this.basicSetupFormKeys,
            1: this.signUpFormFormBusinessKeys,
            2: this.businessFormKeys,
            3: this.representativesFormKeys,
            4: this.integrationFormKeys,
            5: this.userInterfaceFormKeys,
        };
    }

    get defaultBranding(): Branding {
        return {
            backgroundColor: '#ffffff',
            buttonColor: '#3f3f46',
            buttonTextColor: '#ffffff',
            image: '',
            imageBackgroundColor: '#ffffff',
            logo: '',
            textColor: '#3f3f46',
            titleColor: '#3f3f46',
        };
    }

    get defaultFormKeys(): Record<number, string[]> {
        return {
            0: this.basicSetupFormKeys,
            1: this.signUpFormFormPersonalKeys,
        };
    }

    get documentsFormKeys(): string[] {
        return [
            'projectFlow.steps.document',
            'projectFlow.documents',
            'projectFlow.documents.attemptLimit',
            'projectFlow.documents.documentTypes',
            'projectFlow.documents.screening',
            'projectFlow.documents.verificationMethods',
        ];
    }

    get initialSteps(): string[] {
        return [
            'smartEnrollProjects.setup.steps.basic_setup',
            'smartEnrollProjects.setup.steps.signup_form',
        ];
    }

    get integrationFormKeys(): string[] {
        return [
            'projectFlow.integrations.redirectUrl',
            'projectFlow.integrations.webhook',
            'projectFlow.integrations.apiTestType',
            'projectFlow.integrations.apiTestValue',
            'projectFlow.integrations.apiUrl',
            'projectFlow.integrations.source',
            'projectFlow.integrations.strategy',
        ];
    }

    get livenessFormKeys(): string[] {
        return [
            'projectFlow.steps.liveness',
            'projectFlow.liveness.attemptLimit',
            'projectFlow.liveness.minScore',
            'projectFlow.liveness.searchMinScore',
            'projectFlow.liveness.searchMode',
        ];
    }

    get personalPreviewViews(): Record<number, PreviewView[]> {
        return {
            0: [],
            1: ['signup'],
            2: ['document-scan', 'document-upload', 'document-result'],
            3: ['liveness', 'liveness-result'],
            4: [],
            5: ['signup', 'document-scan', 'document-upload', 'document-result', 'liveness', 'liveness-result'],
        };
    }

    get personalSteps(): string[] {
        return [
            'smartEnrollProjects.setup.steps.basic_setup',
            'smartEnrollProjects.setup.steps.signup_form',
            'smartEnrollProjects.setup.steps.documents',
            'smartEnrollProjects.setup.steps.liveness',
            'smartEnrollProjects.setup.steps.integrations',
            'smartEnrollProjects.setup.steps.user_interface',
        ];
    }

    get personalTargetFormKeys(): Record<number, string[]> {
        return {
            0: this.basicSetupFormKeys,
            1: this.signUpFormFormPersonalKeys,
            2: this.documentsFormKeys,
            3: this.livenessFormKeys,
            4: this.integrationFormKeys,
            5: this.userInterfaceFormKeys,
        };
    }

    get representativesFormKeys(): string[] {
        return [
            'projectFlow.steps.legalRepresentative',
            'projectFlow.representatives.information.additionalFields',
            'projectFlow.representatives.information.allowAdditionalFields',
            'projectFlow.representatives.information.email',
            'projectFlow.representatives.information.emailGateway',
            'projectFlow.representatives.information.fullName',
            'projectFlow.representatives.information.fullNameStyle',
            'projectFlow.representatives.information.phone',
            'projectFlow.representatives.information.phoneGateway',
            'projectFlow.representatives.information.showPrivacyNotice',
            'projectFlow.representatives.information.showTermsAndConditions',
            'projectFlow.representatives.documents.attemptLimit',
            'projectFlow.representatives.documents.criminalHistoryVerification',
            'projectFlow.representatives.documents.documentTypes',
            'projectFlow.representatives.documents.informationVerification',
            'projectFlow.representatives.documents.screening',
            'projectFlow.representatives.documents.verificationMethods',
            'projectFlow.representatives.liveness.attemptLimit',
            'projectFlow.representatives.liveness.minScore',
            'projectFlow.representatives.liveness.searchMinScore',
            'projectFlow.representatives.liveness.searchMode',
        ];
    }

    get signUpFormFormBusinessKeys(): string[] {
        return [
            'target',
            'projectFlow.signUpForm.address',
            'projectFlow.signUpForm.businessBasicInfo',
            'projectFlow.signUpForm.businessBasicInfoStyle',
            'projectFlow.signUpForm.countryCode',
            'projectFlow.signUpForm.email',
            'projectFlow.signUpForm.emailGateway',
            'projectFlow.signUpForm.phone',
            'projectFlow.signUpForm.phoneGateway',
            'projectFlow.signUpForm.showPrivacyNotice',
            'projectFlow.signUpForm.showTermsAndConditions',
        ];
    }

    get signUpFormFormPersonalKeys(): string[] {
        return [
            'target',
            'projectFlow.signUpForm.additionalFields',
            'projectFlow.signUpForm.allowAdditionalFields',
            'projectFlow.signUpForm.countryCode',
            'projectFlow.signUpForm.email',
            'projectFlow.signUpForm.emailGateway',
            'projectFlow.signUpForm.fullName',
            'projectFlow.signUpForm.fullNameStyle',
            'projectFlow.signUpForm.phone',
            'projectFlow.signUpForm.phoneGateway',
            'projectFlow.signUpForm.showPrivacyNotice',
            'projectFlow.signUpForm.showTermsAndConditions',
        ];
    }

    get userInterfaceFormKeys(): string[] {
        return [
            'branding.backgroundColor',
            'branding.buttonColor',
            'branding.buttonTextColor',
            'branding.logo',
            'branding.imageBackgroundColor',
            'branding.image',
            'branding.titleColor',
            'branding.textColor',
        ];
    }

    // ---------------------------------------------------------------------------
    // Reactive shared state
    // ---------------------------------------------------------------------------

    get project(): Project | null {
        return this._project;
    }
    set project(project: Project | null) {
        this._project = project;
        this._project$.next(project);
    }
    get project$(): Observable<Project | null> {
        return this._project$.asObservable();
    }

    get projectId(): string {
        return this._projectId;
    }
    set projectId(id: string) {
        this._projectId = id;
        this._projectId$.next(id);
    }
    get projectId$(): Observable<string> {
        return this._projectId$.asObservable();
    }

    get stepIndex(): number {
        return this._stepIndex;
    }
    set stepIndex(value: number) {
        this._stepIndex = value;
        this._stepIndex$.next(value);
    }
    get stepIndex$(): Observable<number> {
        return this._stepIndex$.asObservable();
    }

    // ---------------------------------------------------------------------------
    // Default factories — match verifik-client-panel defaults
    // ---------------------------------------------------------------------------

    getDefaultProject(): Project {
        return {
            allowedCountries: [],
            assignedCollection: '',
            client: '',
            collectionCode: '',
            contactEmail: '',
            currentStep: 0,
            identifier: '',
            lastStep: 0,
            name: '',
            privacyUrl: '',
            projectMembers: [],
            status: 'draft',
            target: '',
            termsAndConditionsUrl: '',
            dataProtection: {
                address: '',
                address2: '',
                city: '',
                country: '',
                email: '',
                name: '',
                postalCode: '',
            },
            branding: {
                backgroundColor: '',
                buttonColor: '',
                buttonTextColor: '',
                image: null,
                imageBackgroundColor: '',
                logo: null,
                textColor: '',
                titleColor: '',
            },
        } as Project;
    }

    getDefaultPersonalProjectFlow(): PersonalProjectFlow {
        return {
            target: 'personal',
            status: 'draft',
            type: 'onboarding',
            version: 3,
            client: '',
            project: '',
            documents: {
                attemptLimit: 3,
                criminalHistoryVerification: false,
                documentTypes: [],
                informationVerification: false,
                screening: false,
                verificationMethods: [],
            },
            integrations: {
                redirectUrl: '',
                webhook: null,
            },
            liveness: {
                attemptLimit: 3,
                minScore: 0.5,
                searchMinScore: 0.3,
                searchMode: 'FAST',
            },
            signUpForm: {
                additionalFields: [],
                allowAdditionalFields: false,
                countryCode: '',
                email: false,
                emailGateway: 'none',
                fullName: false,
                fullNameStyle: 'together',
                phone: false,
                phoneGateway: 'sms',
                showPrivacyNotice: false,
                showTermsAndConditions: false,
            },
            steps: {
                document: 'mandatory',
                liveness: 'mandatory',
            },
        };
    }

    getDefaultBusinessProjectFlow(): BusinessProjectFlow {
        return {
            target: 'business',
            status: 'draft',
            type: 'onboarding',
            version: 3,
            client: '',
            project: '',
            business: {
                attemptLimit: 3,
                criminalHistoryVerification: false,
                documentTypes: [],
                informationVerification: false,
                screening: false,
            },
            integrations: {
                redirectUrl: '',
                webhook: null,
            },
            liveness: {
                attemptLimit: 3,
                minScore: 0.5,
                searchMinScore: 0.3,
                searchMode: 'FAST',
            },
            representatives: {
                information: {
                    additionalFields: [],
                    allowAdditionalFields: false,
                    email: false,
                    emailGateway: 'none',
                    fullName: true,
                    fullNameStyle: 'separate',
                    phone: false,
                    phoneGateway: 'whatsapp',
                    showPrivacyNotice: true,
                    showTermsAndConditions: true,
                },
                documents: {
                    attemptLimit: 3,
                    criminalHistoryVerification: false,
                    documentTypes: [],
                    informationVerification: false,
                    screening: false,
                    verificationMethods: [],
                },
                liveness: {
                    attemptLimit: 3,
                    minScore: 0.5,
                    searchMinScore: 0.3,
                    searchMode: 'FAST',
                },
            },
            signUpForm: {
                additionalFields: [],
                allowAdditionalFields: false,
                address: false,
                countryCode: '',
                email: false,
                emailGateway: 'mailgun',
                phone: false,
                phoneGateway: 'sms',
                showPrivacyNotice: false,
                showTermsAndConditions: false,
                businessBasicInfo: true,
                businessBasicInfoStyle: 'name_number',
            },
            steps: {
                businessVerification: false,
                legalRepresentative: 'skip',
                liveness: 'mandatory',
            },
        };
    }

    getDefaultProjectFlow(): DefaultProjectFlow {
        return { target: '' };
    }

    // ---------------------------------------------------------------------------
    // HTTP — backend already supports v3 via project.route.js
    // ---------------------------------------------------------------------------

    private _params(query: Record<string, string | string[] | number | boolean | undefined>): Record<string, string | string[]> {
        const out: Record<string, string | string[]> = {};
        Object.entries(query || {}).forEach(([key, value]) => {
            if (value === undefined || value === null) return;
            out[key] = Array.isArray(value) ? value.map(String) : String(value);
        });
        return out;
    }

    requestProjects(
        query: Record<string, string | string[] | number | boolean | undefined> = {}
    ): Observable<PaginatedResponse<Project>> {
        return this._http
            .get<PaginatedResponse<Project>>(`${this.baseUrl}/projects`, {
                params: this._params(query),
                headers: this.authHeaders,
            })
            .pipe(catchError((err) => throwError(() => err)));
    }

    requestProject(
        id: string,
        query: Record<string, string | string[] | number | boolean | undefined> = {}
    ): Observable<{ data: Project }> {
        return this._http
            .get<{ data: Project }>(`${this.baseUrl}/projects/${id}`, {
                params: this._params(query),
                headers: this.authHeaders,
            })
            .pipe(catchError((err) => throwError(() => err)));
    }

    createProject(data: Partial<Project> & { projectFlowType?: 'onboarding' }): Observable<{ data: Project }> {
        return this._http
            .post<{ data: Project }>(`${this.baseUrl}/projects`, data, {
                headers: this.authHeaders,
            })
            .pipe(catchError((err) => throwError(() => err)));
    }

    updateProject(
        id: string,
        data: Partial<Project> & { projectFlowType?: 'onboarding' }
    ): Observable<{ data: Project }> {
        return this._http
            .put<{ data: Project }>(`${this.baseUrl}/projects/${id}`, data, {
                headers: this.authHeaders,
            })
            .pipe(catchError((err) => throwError(() => err)));
    }

    deleteProject(id: string, query: Record<string, string | string[] | number | boolean | undefined> = {}): Observable<unknown> {
        return this._http
            .delete(`${this.baseUrl}/projects/${id}`, {
                params: this._params(query),
                headers: this.authHeaders,
            })
            .pipe(catchError((err) => throwError(() => err)));
    }

    /** Background-check feature catalog used by the documents step. */
    getAppFeatures(query: Record<string, string | string[] | number | boolean | undefined> = {}): Observable<{ data: unknown[] }> {
        return this._http
            .get<{ data: unknown[] }>(`${this.apiUrl}/v2/app-features`, {
                params: this._params(query),
                headers: this.authHeaders,
            })
            .pipe(catchError((err) => throwError(() => err)));
    }

    /**
     * Catalog of prompt templates used by the documents step to populate the
     * per-country, per-category list. Mirrors the call client-panel issues
     * (`{ in_country: [country, 'World'], populates: ['documentType'] }`).
     */
    listPromptTemplates(
        query: Record<string, string | string[] | number | boolean | undefined> = {}
    ): Observable<{ data: PromptTemplateLite[] }> {
        return this._http
            .get<{ data: PromptTemplateLite[] }>(`${this.apiUrl}/v2/prompt-templates`, {
                params: this._params(query),
                headers: this.authHeaders,
            })
            .pipe(catchError((err) => throwError(() => err)));
    }

    /** List webhooks for the integrations step. */
    listWebhooks(query: Record<string, string | string[] | number | boolean | undefined> = {}): Observable<{ data: { _id: string; name?: string }[] }> {
        return this._http
            .get<{ data: { _id: string; name?: string }[] }>(`${this.apiUrl}/v2/webhooks`, {
                params: this._params(query),
                headers: this.authHeaders,
            })
            .pipe(catchError((err) => throwError(() => err)));
    }

    /** Test the redirect API endpoint with a payload chosen from the form. */
    testApi(apiUrl: string, apiTestType: string, apiTestValue: string): Observable<unknown> {
        return this._http
            .post(apiUrl, { [apiTestType]: apiTestValue })
            .pipe(catchError((err) => throwError(() => err)));
    }
}
