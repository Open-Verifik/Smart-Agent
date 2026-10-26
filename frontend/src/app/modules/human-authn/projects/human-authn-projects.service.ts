import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, map, throwError } from 'rxjs';
import type { ClientSettingsOverrideSnapshot } from 'app/core/client-settings/override-conditions';

import type { ProjectDataRetentionOverride } from '../../smart-enroll/projects/smart-enroll-projects.types';

export interface HumanAuthnProjectFlow {
    _id?: string;
    type?: string;
    target?: string;
    status?: string;
    humanAuthn?: {
        mode?: string;
        livenessAtCreation?: boolean;
        outputFormat?: string;
        tolerance?: string;
        compareMinScore?: number;
        verifierKey?: string;
        publicDataKeys?: string[];
    };
    storage?: { provider?: string };
    integrations?: {
        redirectUrl?: string;
        webhook?: string | { _id?: string; name?: string } | null;
    };
    steps?: {
        document?: 'mandatory' | 'optional' | 'skip';
        humanAuthn?: 'mandatory';
    };
    documents?: {
        attemptLimit?: number;
        colombianBarcodeValidation?: boolean;
        criminalHistoryVerification?: boolean;
        criminalHistoryVerificationEndpoints?: string[];
        documentTypes?: any[];
        informationVerification?: boolean;
        screening?: boolean;
        verificationMethods?: string[];
    };
    signUpForm?: {
        additionalFields?: string[];
        allowAdditionalFields?: boolean;
        countryCode?: string;
        email?: boolean;
        emailGateway?: string;
        fullName?: boolean;
        fullNameStyle?: string;
        phone?: boolean;
        phoneGateway?: string;
        showPrivacyNotice?: boolean;
        showTermsAndConditions?: boolean;
    };
}

export interface HumanAuthnProjectMember {
    _id: string;
    staff?: { name?: string };
}

export interface HumanAuthnProjectBranding {
    backgroundColor?: string;
    buttonColor?: string;
    buttonTextColor?: string;
    image?: string;
    imageBackgroundColor?: string;
    logo?: string;
    textColor?: string;
    titleColor?: string;
}

export interface HumanAuthnProjectDataProtection {
    address?: string;
    address2?: string;
    city?: string;
    country?: string;
    email?: string;
    name?: string;
    postalCode?: string;
}

export interface HumanAuthnProject {
    _id: string;
    name: string;
    status?: string;
    target?: string;
    version?: number;
    currentStep?: number;
    lastStep?: number;
    demoMode?: boolean;
    allowedCountries?: string[];
    contactEmail?: string;
    defaultLanguage?: string;
    privacyUrl?: string;
    termsAndConditionsUrl?: string;
    dataProtection?: HumanAuthnProjectDataProtection;
    branding?: HumanAuthnProjectBranding;
    dataRetention?: ProjectDataRetentionOverride | null;
    updatedAt?: string;
    createdAt?: string;
    projectFlows?: HumanAuthnProjectFlow[];
    projectMembers?: HumanAuthnProjectMember[];
}

@Injectable({ providedIn: 'root' })
export class HumanAuthnProjectsService {
    private _http = inject(HttpClient);

    private get apiUrl(): string {
        return environment.apiUrl;
    }

    private get authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    parseStoredUser(): { staff?: boolean } | null {
        const raw = localStorage.getItem('verifik_account') || localStorage.getItem('user');
        if (!raw || raw === 'undefined' || raw === 'null') return null;
        try {
            return JSON.parse(raw);
        } catch {
            return null;
        }
    }

    getActiveHumanAuthnPlans(): Observable<{ data: unknown[] }> {
        return this._http
            .get<{ data: unknown[] }>(`${this.apiUrl}/v2/client-human-authn-plans`, {
                params: {
                    sort: 'startDate',
                    where_status: 'active',
                    populates: 'plan',
                },
                headers: this.authHeaders,
            })
            .pipe(
                catchError((err) => {
                    console.error('Error loading client HumanAuthn plans:', err);
                    return throwError(() => err);
                })
            );
    }

    getClientSettings(): Observable<{ data?: ClientSettingsOverrideSnapshot }> {
        return this._http
            .get<{ data?: ClientSettingsOverrideSnapshot }>(`${this.apiUrl}/v2/client-settings`, {
                params: { findOne: 'true' },
                headers: this.authHeaders,
            })
            .pipe(
                catchError((err) => {
                    console.error('Error loading client settings:', err);
                    return throwError(() => err);
                })
            );
    }

    listProjects(): Observable<HumanAuthnProject[]> {
        return this._http
            .get<{ data?: HumanAuthnProject[] | { docs?: HumanAuthnProject[] } }>(`${this.apiUrl}/v3/projects`, {
                params: {
                    populates: 'projectFlows',
                    projectFlowType: 'humanAuthn',
                    sort: '-updatedAt',
                },
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => {
                    const payload = res?.data;
                    const rows = Array.isArray(payload) ? payload : payload?.docs ?? [];
                    return rows.filter((project) =>
                        (project.projectFlows || []).some((flow) => flow.type === 'humanAuthn')
                    );
                }),
                catchError((err) => {
                    console.error('Error loading HumanAuthn projects:', err);
                    return throwError(() => err);
                })
            );
    }

    updateProjectFlow(flowId: string, payload: Record<string, unknown>): Observable<{ data: HumanAuthnProjectFlow }> {
        return this._http.put<{ data: HumanAuthnProjectFlow }>(
            `${this.apiUrl}/v2/project-flows/${flowId}`,
            payload,
            { headers: this.authHeaders }
        );
    }

    getProjectMembers(projectId: string): Observable<HumanAuthnProjectMember[]> {
        return this._http
            .get<{ data?: HumanAuthnProjectMember[] }>(`${this.apiUrl}/v2/project-members`, {
                params: { where_project: projectId, populates: 'staff' },
                headers: this.authHeaders,
            })
            .pipe(map((res) => res?.data ?? []));
    }

    /**
     * Loads one Human Auth project with its flows.
     * @param id - Project id.
     * @returns The project, or null when the API returns an empty body.
     * @throws The HTTP error when the request fails. The caller shows the snackbar.
     */
    getProject(id: string): Observable<HumanAuthnProject | null> {
        return this._http
            .get<{ data?: HumanAuthnProject }>(`${this.apiUrl}/v3/projects/${id}`, {
                params: {
                    populates: 'projectFlows',
                    projectFlowType: 'humanAuthn',
                },
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => res?.data ?? null),
                catchError((err) => throwError(() => err))
            );
    }

    /**
     * Updates a Human Auth project. Callers pass only the fields that changed.
     * @param id - Project id.
     * @param data - Partial project body, for example `{ dataRetention }`.
     * @returns The updated project.
     * @throws The HTTP error when the request fails.
     */
    updateProject(id: string, data: Record<string, unknown>): Observable<{ data: HumanAuthnProject }> {
        return this._http
            .put<{ data: HumanAuthnProject }>(
                `${this.apiUrl}/v3/projects/${id}`,
                {
                    ...data,
                    projectFlowType: 'humanAuthn',
                    target: 'personal',
                },
                { headers: this.authHeaders }
            )
            .pipe(catchError((err) => throwError(() => err)));
    }
}

