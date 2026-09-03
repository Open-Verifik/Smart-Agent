import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

export interface HumanAuthnProject {
    _id?: string;
    name?: string;
    target?: string;
    version?: number;
    currentStep?: number;
    allowedCountries?: string[];
    contactEmail?: string;
    defaultLanguage?: string;
    privacyUrl?: string;
    termsAndConditionsUrl?: string;
    dataProtection?: Record<string, string>;
    branding?: Record<string, unknown>;
    projectFlows?: any[];
    status?: string;
}

@Injectable({ providedIn: 'root' })
export class HumanAuthnSetupService {
    private _http = inject(HttpClient);
    private _projectId$ = new BehaviorSubject<string>('new');
    private _project$ = new BehaviorSubject<HumanAuthnProject | null>(null);
    private _stepIndex$ = new BehaviorSubject<number>(0);

    projectId = 'new';
    project: HumanAuthnProject | null = null;
    stepIndex = 0;

    readonly steps = [
        'humanAuthnProjects.setup.steps.basic',
        'humanAuthnProjects.setup.steps.signup',
        'humanAuthnProjects.setup.steps.documents',
        'humanAuthnProjects.setup.steps.humanAuthn',
        'humanAuthnProjects.setup.steps.storage',
        'humanAuthnProjects.setup.steps.integrations',
        'humanAuthnProjects.setup.steps.ui',
    ];

    readonly formKeys: Record<number, string[]> = {
        0: [
            'name',
            'allowedCountries',
            'contactEmail',
            'defaultLanguage',
            'privacyUrl',
            'termsAndConditionsUrl',
            'dataProtection.name',
            'dataProtection.email',
            'dataProtection.address',
            'dataProtection.city',
            'dataProtection.country',
            'dataProtection.postalCode',
        ],
        1: [
            'projectFlow.signUpForm.email',
            'projectFlow.signUpForm.phone',
            'projectFlow.signUpForm.fullName',
        ],
        2: ['projectFlow.steps.document'],
        3: ['projectFlow.humanAuthn.mode'],
        4: ['projectFlow.storage.provider'],
        5: ['projectFlow.integrations.redirectUrl'],
        6: ['branding.backgroundColor'],
    };

    private get apiUrl(): string {
        return environment.apiUrl;
    }

    private get authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    get project$(): Observable<HumanAuthnProject | null> {
        return this._project$.asObservable();
    }

    get projectId$(): Observable<string> {
        return this._projectId$.asObservable();
    }

    get stepIndex$(): Observable<number> {
        return this._stepIndex$.asObservable();
    }

    setProjectId(id: string): void {
        this.projectId = id;
        this._projectId$.next(id);
    }

    setProject(project: HumanAuthnProject | null): void {
        this.project = project;
        this._project$.next(project);
    }

    setStepIndex(step: number): void {
        this.stepIndex = step;
        this._stepIndex$.next(step);
    }

    getDefaultProject(): HumanAuthnProject {
        return {
            name: '',
            target: 'personal',
            version: 3,
            currentStep: 0,
            allowedCountries: [],
            contactEmail: '',
            defaultLanguage: 'en',
            privacyUrl: '',
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
                backgroundColor: '#ffffff',
                buttonColor: '#3f3f46',
                buttonTextColor: '#ffffff',
                image: '',
                imageBackgroundColor: '#ffffff',
                logo: '',
                textColor: '#3f3f46',
                titleColor: '#3f3f46',
            },
            projectFlows: [this.getDefaultProjectFlow()],
        };
    }

    getDefaultProjectFlow(): Record<string, unknown> {
        return {
            type: 'humanAuthn',
            target: 'personal',
            status: 'draft',
            version: 3,
            humanAuthn: { mode: 'standard', livenessAtCreation: false },
            storage: { provider: 'ipfs' },
            integrations: { redirectUrl: '', webhook: null },
            steps: { document: 'skip', humanAuthn: 'mandatory' },
            documents: {
                attemptLimit: 3,
                criminalHistoryVerification: false,
                documentTypes: [],
                informationVerification: false,
                screening: false,
                verificationMethods: [],
            },
            signUpForm: {
                additionalFields: [],
                allowAdditionalFields: false,
                countryCode: '',
                email: false,
                emailGateway: 'none',
                fullName: true,
                fullNameStyle: 'together',
                phone: false,
                phoneGateway: 'sms',
                showPrivacyNotice: false,
                showTermsAndConditions: false,
            },
        };
    }

    requestProject(id: string): Observable<{ data: HumanAuthnProject }> {
        return this._http
            .get<{ data: HumanAuthnProject }>(`${this.apiUrl}/v3/projects/${id}`, {
                params: { populates: 'projectFlows', projectFlowType: 'humanAuthn' },
                headers: this.authHeaders,
            })
            .pipe(catchError((err) => throwError(() => err)));
    }

    createProject(data: Record<string, unknown>): Observable<{ data: HumanAuthnProject }> {
        return this._http
            .post<{ data: HumanAuthnProject }>(`${this.apiUrl}/v3/projects`, {
                ...data,
                projectFlowType: 'humanAuthn',
                target: 'personal',
            }, { headers: this.authHeaders })
            .pipe(catchError((err) => throwError(() => err)));
    }

    updateProject(id: string, data: Record<string, unknown>): Observable<{ data: HumanAuthnProject }> {
        return this._http
            .put<{ data: HumanAuthnProject }>(`${this.apiUrl}/v3/projects/${id}`, {
                ...data,
                projectFlowType: 'humanAuthn',
                target: 'personal',
            }, { headers: this.authHeaders })
            .pipe(catchError((err) => throwError(() => err)));
    }

    getWebhooks(): Observable<{ data: { _id: string; name?: string }[] }> {
        return this._http
            .get<{ data: { _id: string; name?: string }[] }>(`${this.apiUrl}/v2/webhooks`, {
                headers: this.authHeaders,
            })
            .pipe(catchError((err) => throwError(() => err)));
    }
}
