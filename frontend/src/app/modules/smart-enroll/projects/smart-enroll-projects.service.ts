import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import type { ClientSettingsOverrideSnapshot } from 'app/core/client-settings/override-conditions';
import type {
    AppRegistrationDetail,
    AppRegistrationFunnel,
    AppRegistrationListFilters,
    AppRegistrationRow,
    EnrollProject,
    EnrollProjectFlow,
    EnrollProjectMember,
    EnrollStaffRef,
    PaginatedResponse,
    ProjectMemberLookupRow,
    ResolvableAppRegistrationStatus,
} from './smart-enroll-projects.types';

/** Matches client-panel project-record getRecord() onboarding populates */
export const APP_REGISTRATION_DETAIL_POPULATES: string[] = [
    'emailValidation',
    'phoneValidation',
    'biometricValidation',
    'biometricValidation.face',
    'informationValidation',
    'consentSession',
    'documentFace',
    'documentValidation',
    'documentValidation.documentLiveness',
    'compareFaceVerification',
    'face',
    'person',
    'projectFlow',
    'failedDocumentValidations',
    'failedBiometricValidations.face',
    'manualReviewLog.reviewedByClient',
    'manualReviewLog.reviewedByStaff',
];

export interface DocumentTypeOption {
    _id?: string;
    name: string;
    code: string;
    country: string;
    category?: string;
}

export interface DocumentTypeSuggestion {
    code: string | null;
    name: string | null;
    country: string | null;
    category?: string | null;
    confidence?: number;
    source?: string;
}

const ONBOARDING_TYPE = 'onboarding';

const CLIENT_LIST_PARAMS: Record<string, string | string[]> = {
    with: ['projectFlows'],
    sort: '-updatedAt',
    populates: ['projectMembers', 'projectMembers.staff', 'client'],
    select: '_id name client projectFlows branding projectMembers demoMode demoOTP version updatedAt createdAt',
};

const STAFF_LIST_PARAMS: Record<string, string | string[]> = {
    with: ['projectFlows'],
    populates: ['projectMembers', 'projectMembers.staff'],
    select: '_id name client projectFlows branding projectMembers demoMode demoOTP updatedAt createdAt',
};

@Injectable({ providedIn: 'root' })
export class SmartEnrollProjectsService {
    private _http = inject(HttpClient);

    private get apiUrl(): string {
        return environment.apiUrl;
    }

    private get authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    parseStoredUser(): { staff?: string } | null {
        const raw = localStorage.getItem('user');
        if (!raw) return null;
        try {
            return JSON.parse(raw) as { staff?: string };
        } catch {
            return null;
        }
    }

    /**
     * Active Smart Enroll subscriptions for the current client (non-staff gate).
     * Mirrors client-panel getClientEnrollPlan query.
     */
    getActiveSmartEnrollPlans(): Observable<{ data: unknown[] }> {
        const params: Record<string, string | string[]> = {
            sort: 'startDate',
            where_status: 'active',
            populates: ['plan'],
        };
        return this._http
            .get<{ data: unknown[] }>(`${this.apiUrl}/v2/client-smart-enroll-plans`, {
                params,
                headers: this.authHeaders,
            })
            .pipe(
                catchError((err) => {
                    console.error('Error loading client smart enroll plans:', err);
                    return throwError(() => err);
                })
            );
    }

    /** Client settings for subscription override checks (JWT-scoped). */
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

    listProjects(): Observable<EnrollProject[]> {
        const user = this.parseStoredUser();
        if (user?.staff) {
            return this._fetchStaffProjectIds(user.staff).pipe(
                switchMap((ids) => {
                    if (!ids.length) return of([]);
                    return this._getProjectsByIds(ids);
                })
            );
        }
        return this._getProjectsClient();
    }

    getProject(id: string): Observable<EnrollProject | null> {
        const params: Record<string, string | string[]> = {
            with: ['projectFlows'],
            type: ONBOARDING_TYPE,
            populates: ['client', 'projectMembers', 'projectMembers.staff'],
        };
        return this._http
            .get<{ data: EnrollProject }>(`${this.apiUrl}/v2/projects/${id}`, {
                params,
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => res?.data ?? null),
                catchError((err) => {
                    console.error('Error loading project:', err);
                    return throwError(() => err);
                })
            );
    }

    getAppRegistration(recordId: string): Observable<AppRegistrationDetail | null> {
        const params: Record<string, string | string[]> = {
            populates: APP_REGISTRATION_DETAIL_POPULATES,
        };
        return this._http
            .get<{ data: AppRegistrationDetail }>(`${this.apiUrl}/v2/app-registrations/${recordId}`, {
                params,
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => res?.data ?? null),
                catchError((err) => {
                    console.error('Error loading app registration:', err);
                    return throwError(() => err);
                })
            );
    }

    deleteAppRegistration(id: string): Observable<unknown> {
        return this._http
            .delete(`${this.apiUrl}/v2/app-registrations/${id}`, { headers: this.authHeaders })
            .pipe(
                catchError((err) => {
                    console.error('Error deleting app registration:', err);
                    return throwError(() => err);
                })
            );
    }

    deleteAppLogin(id: string): Observable<unknown> {
        return this._http
            .delete(`${this.apiUrl}/v2/app-logins/${id}`, { headers: this.authHeaders })
            .pipe(
                catchError((err) => {
                    console.error('Error deleting app login:', err);
                    return throwError(() => err);
                })
            );
    }

    /**
     * Download the CV-style enrollment summary as a PDF Blob (and the suggested filename).
     * The backend may set `Content-Disposition: attachment; filename="..."`; we parse it when present.
     */
    exportAppRegistrationCV(
        id: string,
        language?: string
    ): Observable<{ blob: Blob; filename: string }> {
        return this._http
            .post(
                `${this.apiUrl}/v2/app-registrations/${id}/export-cv`,
                language ? { language } : {},
                {
                    headers: {
                        ...this.authHeaders,
                        Accept: 'application/pdf',
                    },
                    observe: 'response',
                    responseType: 'blob',
                }
            )
            .pipe(
                map((res) => {
                    const disposition = res.headers.get('Content-Disposition') || '';
                    const match = /filename="?([^";]+)"?/i.exec(disposition);
                    const filename = match?.[1] ?? `enrollment-${id}.pdf`;
                    return { blob: res.body as Blob, filename };
                }),
                catchError((err) => {
                    console.error('Error exporting app registration CV:', err);
                    return throwError(() => err);
                })
            );
    }

    /**
     * Email the CV PDF via Mailgun. Recipients default server-side to the registration email.
     */
    emailAppRegistrationCV(
        id: string,
        payload: { recipients?: string[]; language?: string; subject?: string } = {}
    ): Observable<{ data: { sent: boolean; messageId: string | null; recipients: string[] } }> {
        return this._http
            .post<{ data: { sent: boolean; messageId: string | null; recipients: string[] } }>(
                `${this.apiUrl}/v2/app-registrations/${id}/export-cv/email`,
                payload,
                { headers: this.authHeaders }
            )
            .pipe(
                catchError((err) => {
                    console.error('Error emailing app registration CV:', err);
                    return throwError(() => err);
                })
            );
    }

    resendAppRegistrationLink(
        id: string,
        sendEmail: boolean
    ): Observable<{ data: { link: string } }> {
        return this._http
            .post<{ data: { link: string } }>(
                `${this.apiUrl}/v2/app-registrations/${id}/resend-link`,
                { sendEmail: sendEmail ? 'true' : 'false' },
                { headers: this.authHeaders }
            )
            .pipe(
                catchError((err) => {
                    console.error('Error resending app registration link:', err);
                    return throwError(() => err);
                })
            );
    }

    /**
     * Manually resolve/override an enrollment's status (Completed / Completed without KYC / Failed,
     * or any other AppRegistration status for corrections). Reuses the backend's `adminOverride` sync
     * step, which fires the same customer webhook as a natural completion and records a
     * `manualReviewLog` audit entry (reviewer, previous/new status, optional note).
     */
    overrideAppRegistrationStatus(
        id: string,
        status: ResolvableAppRegistrationStatus,
        note?: string
    ): Observable<{ data: AppRegistrationDetail }> {
        return this._http
            .put<{ data: AppRegistrationDetail }>(
                `${this.apiUrl}/v2/app-registrations/${id}/sync`,
                { step: 'adminOverride', status, ...(note?.trim() ? { note: note.trim() } : {}) },
                { headers: this.authHeaders }
            )
            .pipe(
                catchError((err) => {
                    console.error('Error overriding app registration status:', err);
                    return throwError(() => err);
                })
            );
    }

    /**
     * Re-run the government name lookup on a document validation. `force` bypasses the
     * `imageValidated` short-circuit, so a record skipped under older routing is re-scored.
     */
    /**
     * Re-run the selfie/document face compare, optionally with a portrait the reviewer cropped out
     * of the stored scan. That crop is what recovers a record whose compare never ran because the
     * onboarding client never sent one.
     */
    rerunCompare(appRegistrationId: string, documentFace?: string): Observable<{ data: unknown }> {
        return this._http
            .post<{ data: unknown }>(
                `${this.apiUrl}/v2/app-registrations/${appRegistrationId}/rerun-compare`,
                documentFace ? { documentFace } : {},
                { headers: this.authHeaders }
            )
            .pipe(
                catchError((err) => {
                    console.error('Error re-running face compare:', err);
                    return throwError(() => err);
                })
            );
    }

    rerunNameValidation(documentValidationId: string): Observable<{ data: unknown }> {
        return this._http
            .put<{ data: unknown }>(
                `${this.apiUrl}/v2/document-validations/${documentValidationId}/validate`,
                { force: true },
                { headers: this.authHeaders }
            )
            .pipe(
                catchError((err) => {
                    console.error('Error re-running name validation:', err);
                    return throwError(() => err);
                })
            );
    }

    /**
     * Record a reviewer verdict on the names when no registry can score them (licenses,
     * passports, unmapped types) or the lookup keeps failing. Leaves the enrollment status alone —
     * that stays with overrideAppRegistrationStatus().
     */
    listDocumentTypes(): Observable<DocumentTypeOption[]> {
        return this._http
            .get<{ data: DocumentTypeOption[] }>(`${this.apiUrl}/v2/document-types`, {
                params: { where_status: 'active', limit: '200' },
                headers: this.authHeaders,
            })
            .pipe(
                map((response) => (Array.isArray(response.data) ? response.data : [])),
                catchError((err) => {
                    console.error('Error listing document types:', err);
                    return throwError(() => err);
                })
            );
    }

    setDocumentType(documentValidationId: string, documentType: string): Observable<{ data: unknown }> {
        return this._http
            .put<{ data: unknown }>(
                `${this.apiUrl}/v2/document-validations/${documentValidationId}/document-type`,
                { documentType },
                { headers: this.authHeaders }
            )
            .pipe(
                catchError((err) => {
                    console.error('Error setting document type:', err);
                    return throwError(() => err);
                })
            );
    }

    detectDocumentType(documentValidationId: string): Observable<DocumentTypeSuggestion> {
        return this._http
            .post<{ data: DocumentTypeSuggestion }>(
                `${this.apiUrl}/v2/document-validations/${documentValidationId}/detect-document-type`,
                {},
                { headers: this.authHeaders }
            )
            .pipe(
                map((response) => response.data),
                catchError((err) => {
                    console.error('Error detecting document type:', err);
                    return throwError(() => err);
                })
            );
    }

    reviewDocumentNames(
        documentValidationId: string,
        decision: 'match' | 'mismatch',
        note?: string
    ): Observable<{ data: unknown }> {
        return this._http
            .put<{ data: unknown }>(
                `${this.apiUrl}/v2/document-validations/${documentValidationId}/manual-name-review`,
                { decision, ...(note?.trim() ? { note: note.trim() } : {}) },
                { headers: this.authHeaders }
            )
            .pipe(
                catchError((err) => {
                    console.error('Error saving manual name review:', err);
                    return throwError(() => err);
                })
            );
    }

    listAppRegistrations(
        projectId: string,
        page: number,
        pageSize: number,
        filters: AppRegistrationListFilters = {}
    ): Observable<PaginatedResponse<AppRegistrationRow>> {
        const params: Record<string, string | string[]> = {
            page: String(page),
            perPage: String(pageSize),
            sort: filters.sort?.trim() || '-createdAt',
            where_project: projectId,
            populates: [
                'emailValidation',
                'phoneValidation',
                'biometricValidation',
                'biometricValidation.face',
                'face',
                'informationValidation',
            ],
        };

        const term = filters.search?.trim();
        if (term) {
            params['?like_name'] = term;
            params['?like_email'] = term;
            params['?like_phone'] = term;
        }

        const status = filters.status?.trim();
        if (status && status !== 'all') {
            params.where_status = status;
        }

        const currentStep = filters.currentStep?.trim();
        if (currentStep && currentStep !== 'all') {
            params.where_currentStep = currentStep;
        }

        if (filters.createdFrom) params.whereGTE_createdAt = filters.createdFrom;
        if (filters.createdTo) params.whereLTE_createdAt = filters.createdTo;

        return this._http
            .get<PaginatedResponse<AppRegistrationRow>>(`${this.apiUrl}/v2/app-registrations`, {
                params,
                headers: this.authHeaders,
            })
            .pipe(
                catchError((err) => {
                    console.error('Error loading app registrations:', err);
                    return throwError(() => err);
                })
            );
    }

    /**
     * Where the project's registrations are stalling, over its whole history.
     *
     * Opt-in on the backend, so nothing else that reads statistics pays for the aggregations.
     */
    getProjectFunnel(projectId: string): Observable<AppRegistrationFunnel | null> {
        return this._http
            .get<{ data?: { funnel?: AppRegistrationFunnel } }>(`${this.apiUrl}/v2/app-registrations/statistics`, {
                params: { project: projectId, funnel: 'true' },
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => res?.data?.funnel ?? null),
                catchError((err) => {
                    console.error('Error loading app registration funnel:', err);
                    return of(null);
                })
            );
    }

    updateProject(id: string, payload: Record<string, unknown>): Observable<{ data: EnrollProject }> {
        return this._http
            .put<{ data: EnrollProject }>(
                `${this.apiUrl}/v3/projects/${id}`,
                payload,
                { headers: this.authHeaders }
            )
            .pipe(catchError((err) => throwError(() => err)));
    }

    updateProjectFlow(flowId: string, payload: Record<string, unknown>): Observable<{ data: EnrollProjectFlow }> {
        return this._http.put<{ data: EnrollProjectFlow }>(
            `${this.apiUrl}/v2/project-flows/${flowId}`,
            payload,
            { headers: this.authHeaders }
        );
    }

    sendTestEmail(flowId: string, payload: { email: string; language?: string; emailTemplate?: Record<string, unknown> }): Observable<{ data: { sent: boolean } }> {
        return this._http.post<{ data: { sent: boolean } }>(
            `${this.apiUrl}/v2/project-flows/${flowId}/test-email`,
            payload,
            { headers: this.authHeaders }
        );
    }


    getProjectMembers(projectId: string): Observable<EnrollProjectMember[]> {
        const params: Record<string, string | string[]> = {
            where_project: projectId,
            populates: ['staff'],
        };
        return this._http
            .get<PaginatedResponse<EnrollProjectMember>>(`${this.apiUrl}/v2/project-members`, {
                params,
                headers: this.authHeaders,
            })
            .pipe(map((res) => res?.data ?? []));
    }

    getStaffList(params: Record<string, string | string[]>): Observable<EnrollStaffRef[]> {
        return this._http
            .get<PaginatedResponse<EnrollStaffRef>>(`${this.apiUrl}/v2/staff`, {
                params,
                headers: this.authHeaders,
            })
            .pipe(map((res) => res?.data ?? []));
    }

    postProjectMember(payload: {
        client: string;
        project: string;
        role: string;
        staff: string;
    }): Observable<unknown> {
        return this._http.post(`${this.apiUrl}/v2/project-members`, payload, {
            headers: this.authHeaders,
        });
    }

    updateProjectMember(memberId: string, payload: { role: string }): Observable<unknown> {
        return this._http.put(`${this.apiUrl}/v2/project-members/${memberId}`, payload, {
            headers: this.authHeaders,
        });
    }

    deleteProjectMember(memberId: string): Observable<unknown> {
        return this._http.delete(`${this.apiUrl}/v2/project-members/${memberId}`, {
            headers: this.authHeaders,
        });
    }

    private _fetchStaffProjectIds(staffId: string): Observable<string[]> {
        return this._http
            .get<PaginatedResponse<ProjectMemberLookupRow>>(`${this.apiUrl}/v2/project-members`, {
                params: {
                    sort: '-createdAt',
                    where_staff: staffId,
                },
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => {
                    const rows = res?.data ?? [];
                    return [...new Set(rows.map((r) => r.project).filter(Boolean))];
                }),
                catchError((err) => {
                    console.error('Error loading project members:', err);
                    return throwError(() => err);
                })
            );
    }

    private _getProjectsByIds(ids: string[]): Observable<EnrollProject[]> {
        const params: Record<string, string | string[]> = {
            ...STAFF_LIST_PARAMS,
            in__id: ids,
        };
        return this._http
            .get<{ data: EnrollProject[] }>(`${this.apiUrl}/v2/projects`, {
                params,
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => res?.data ?? []),
                catchError((err) => {
                    console.error('Error loading projects (staff):', err);
                    return throwError(() => err);
                })
            );
    }

    private _getProjectsClient(): Observable<EnrollProject[]> {
        return this._http
            .get<{ data: EnrollProject[] }>(`${this.apiUrl}/v2/projects`, {
                params: CLIENT_LIST_PARAMS,
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => res?.data ?? []),
                catchError((err) => {
                    console.error('Error loading projects:', err);
                    return throwError(() => err);
                })
            );
    }
}
