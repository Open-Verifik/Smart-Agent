import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import type {
    AppRegistrationRow,
    EnrollProject,
    EnrollProjectFlow,
    EnrollProjectMember,
    EnrollStaffRef,
    PaginatedResponse,
    ProjectMemberLookupRow,
} from './smart-enroll-projects.types';

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

    listAppRegistrations(
        projectId: string,
        page: number,
        pageSize: number,
        search?: string
    ): Observable<PaginatedResponse<AppRegistrationRow>> {
        const params: Record<string, string | string[]> = {
            page: String(page),
            perPage: String(pageSize),
            sort: '-createdAt',
            where_project: projectId,
            populates: [
                'emailValidation',
                'phoneValidation',
                'biometricValidation',
                'informationValidation',
            ],
        };
        const q = search?.trim();
        if (q) {
            if (/^\d+$/.test(q)) {
                params['like_phone'] = q;
            } else if (q.includes('@')) {
                params['like_email'] = q;
            }
        }
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

    updateProjectFlow(flowId: string, payload: Record<string, unknown>): Observable<{ data: EnrollProjectFlow }> {
        return this._http.put<{ data: EnrollProjectFlow }>(
            `${this.apiUrl}/v2/project-flows/${flowId}`,
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
