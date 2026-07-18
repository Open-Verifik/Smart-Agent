import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import type { AccessProjectFlow } from './smart-access-projects.types';

/**
 * v3 Projects API helpers for Smart Access (`projectFlowType: login`).
 */
@Injectable({ providedIn: 'root' })
export class SmartAccessSetupService {
    private _http = inject(HttpClient);

    private _projectId$ = new BehaviorSubject<string>('new');
    private _project$ = new BehaviorSubject<AccessProjectLike | null>(null);
    private _stepIndex$ = new BehaviorSubject<number>(0);

    projectId = 'new';
    stepIndex = 0;
    project: AccessProjectLike | null = null;

    constructor() {}

    private get baseUrl(): string {
        return `${environment.apiUrl}/v3`;
    }

    private get authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    private _params(query: Record<string, string | string[] | number | boolean | undefined>): Record<string, string | string[]> {
        const out: Record<string, string | string[]> = {};
        Object.entries(query || {}).forEach(([key, value]) => {
            if (value === undefined || value === null) return;
            out[key] = Array.isArray(value) ? value.map(String) : String(value);
        });
        return out;
    }

    getDefaultProjectShell(): Partial<AccessProjectLike> & { branding: AccessProjectLike['branding']; dataProtection: AccessProjectLike['dataProtection'] } {
        return {
            allowedCountries: [],
            branding: this.defaultBranding,
            contactEmail: '',
            dataProtection: {
                address: '',
                address2: '',
                city: '',
                country: '',
                email: '',
                name: '',
                postalCode: '',
            },
            defaultLanguage: 'en',
            identifier: '',
            name: '',
            privacyUrl: '',
            status: 'draft',
            target: 'personal',
            termsAndConditionsUrl: '',
            version: 3,
            projectFlows: [],
        };
    }

    defaultLoginFlow(): Partial<AccessProjectFlow> {
        return {
            status: 'draft',
            type: 'login',
            version: 3,
            loginSettings: {
                email: false,
                emailGateway: 'none',
                faceLiveness: false,
                phone: false,
                phoneGateway: 'none',
                searchMode: 'FAST',
                showFaceLivenessRecommendation: false,
                allowPasskeys: false,
            },
            integrations: {
                redirectUrl: '',
                webhook: null,
            },
            security: {
                strategy: 'whitelist',
                source: null,
                apiUrl: '',
                apiTestType: 'email',
                apiTestValue: '',
            },
        };
    }

    get defaultBranding(): AccessProjectLike['branding'] {
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

    requestProject(id: string, query: Record<string, string | string[] | number | boolean | undefined> = {}): Observable<{ data: AccessProjectLike }> {
        const params = this._params({
            populates: ['projectFlows'],
            projectFlowType: 'login',
            ...query,
        });
        return this._http.get<{ data: AccessProjectLike }>(`${this.baseUrl}/projects/${id}`, {
            params,
            headers: this.authHeaders,
        });
    }

    createProject(data: Partial<AccessProjectLike> & { projectFlowType?: 'login' }): Observable<{ data: AccessProjectLike }> {
        return this._http
            .post<{ data: AccessProjectLike }>(`${this.baseUrl}/projects`, data, { headers: this.authHeaders })
            .pipe(catchError((e) => throwError(() => e)));
    }

    updateProject(
        id: string,
        data: Partial<AccessProjectLike> & { projectFlowType?: 'login' }
    ): Observable<{ data: AccessProjectLike }> {
        return this._http
            .put<{ data: AccessProjectLike }>(`${this.baseUrl}/projects/${id}`, data, { headers: this.authHeaders })
            .pipe(catchError((e) => throwError(() => e)));
    }

    /** List webhooks, defaulting to active-only (mirrors legacy `_ObserveWebhook`). */
    listWebhooks(query: Record<string, string | string[] | number | boolean | undefined> = {}): Observable<{ data: { _id: string; name?: string }[] }> {
        return this._http.get<{ data: { _id: string; name?: string }[] }>(`${environment.apiUrl}/v2/webhooks`, {
            params: this._params({ where_isActive: true, ...query }),
            headers: this.authHeaders,
        });
    }

    /**
     * Test an identity / whitelist API URL by issuing GET with the test field as a
     * query param — matching legacy `ProjectService.identityUrlTester` (GET + params).
     */
    testIdentityUrl(opts: { identityUrl: string; testType: string; testValue: string }): Observable<unknown> {
        return this._http
            .get(opts.identityUrl, { params: { [opts.testType]: opts.testValue } })
            .pipe(catchError((e) => throwError(() => e)));
    }

    /** Shared wizard state mirrors enroll SetupService subset. */

    set projectObservable(p: AccessProjectLike | null) {
        this.project = p;
        this._project$.next(p);
    }
    get project$(): Observable<AccessProjectLike | null> {
        return this._project$.asObservable();
    }

    set projectIdObs(id: string) {
        this.projectId = id;
        this._projectId$.next(id);
    }
    get projectId$(): Observable<string> {
        return this._projectId$.asObservable();
    }

    set stepIndexObs(s: number) {
        this.stepIndex = s;
        this._stepIndex$.next(s);
    }
    get stepIndex$(): Observable<number> {
        return this._stepIndex$.asObservable();
    }
}

/** Minimal project shape consumed by Smart Access wizard. */
export type AccessProjectLike = {
    _id?: string;
    allowedCountries?: string[];
    branding?: {
        backgroundColor?: string;
        buttonColor?: string;
        buttonTextColor?: string;
        image?: string | null;
        imageBackgroundColor?: string;
        logo?: string | null;
        textColor?: string;
        titleColor?: string;
    };
    client?: string;
    contactEmail?: string;
    dataProtection?: Record<string, string>;
    defaultLanguage?: string;
    demoMode?: boolean;
    demoOTP?: string | number;
    name?: string;
    privacyUrl?: string;
    termsAndConditionsUrl?: string;
    target?: string;
    version?: number;
    identifier?: string;
    status?: string;
    projectFlows?: AccessProjectFlow[];
};
