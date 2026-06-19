import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import type { ClientSettingsOverrideSnapshot } from 'app/core/client-settings/override-conditions';

import type {
    EnrollProjectMember,
    EnrollStaffRef,
    PaginatedResponse,
    ProjectMemberLookupRow,
} from '../../smart-enroll/projects/smart-enroll-projects.types';
import { projectHasLoginFlow } from './login-flow.util';
import type { AccessProject, AccessProjectFlow, AppLoginListFilters, AppLoginRow } from './smart-access-projects.types';

const LOGIN_TYPE = 'login';

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
export class SmartAccessProjectsService {
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

    /** Active Smart Access subscriptions — mirrors enroll plan gate pattern. */
    getActiveSmartAccessPlans(): Observable<{ data: unknown[] }> {
        const params: Record<string, string | string[]> = {
            sort: 'startDate',
            where_status: 'active',
            populates: ['plan'],
        };
        return this._http.get<{ data: unknown[] }>(`${this.apiUrl}/v2/client-smart-access-plans`, {
            params,
            headers: this.authHeaders,
        });
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

    listProjects(): Observable<AccessProject[]> {
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

    getProject(id: string): Observable<AccessProject | null> {
        const params: Record<string, string | string[]> = {
            with: ['projectFlows'],
            type: LOGIN_TYPE,
            populates: ['client', 'projectMembers', 'projectMembers.staff'],
        };
        return this._http
            .get<{ data: AccessProject }>(`${this.apiUrl}/v2/projects/${id}`, {
                params,
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => res?.data ?? null),
                catchError((err) => {
                    console.error('Error loading Smart Access project:', err);
                    return throwError(() => err);
                })
            );
    }

    deleteAppLogin(id: string): Observable<unknown> {
        return this._http.delete(`${this.apiUrl}/v2/app-logins/${id}`, { headers: this.authHeaders }).pipe(
            catchError((err) => {
                console.error('Error deleting app login:', err);
                return throwError(() => err);
            })
        );
    }

    getAppLogin(id: string): Observable<AppLoginRow | null> {
        return this._http
            .get<{ data: AppLoginRow }>(`${this.apiUrl}/v2/app-logins/${id}`, {
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => res?.data ?? null),
                catchError((err) => {
                    console.error('Error loading app login:', err);
                    return throwError(() => err);
                })
            );
    }

    listAppLogins(
        projectId: string,
        page: number,
        pageSize: number,
        filters: AppLoginListFilters = {}
    ): Observable<PaginatedResponse<AppLoginRow>> {
        const params: Record<string, string | string[]> = {
            page: String(page),
            perPage: String(pageSize),
            sort: filters.sort?.trim() || '-createdAt',
            where_project: projectId,
            populates: ['emailValidation', 'phoneValidation', 'biometricValidation', 'biometricValidation.face'],
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

        if (filters.createdFrom) params.whereGTE_createdAt = filters.createdFrom;
        if (filters.createdTo) params.whereLTE_createdAt = filters.createdTo;

        return this._http.get<PaginatedResponse<AppLoginRow>>(`${this.apiUrl}/v2/app-logins`, {
            params,
            headers: this.authHeaders,
        });
    }

    getProjectFlowWhiteList(payload: Record<string, string | number>): Observable<PaginatedResponse<unknown>> {
        return this._http.get<PaginatedResponse<unknown>>(`${this.apiUrl}/v2/project-flow-white-lists`, {
            params: payload as Record<string, string | string[]>,
            headers: this.authHeaders,
        });
    }

    deleteWhitelistEntry(id: string): Observable<unknown> {
        return this._http.delete(`${this.apiUrl}/v2/project-flow-white-lists/${id}`, {
            headers: this.authHeaders,
        });
    }

    updateProjectFlow(flowId: string, payload: Record<string, unknown>): Observable<{ data: AccessProjectFlow }> {
        return this._http.put<{ data: AccessProjectFlow }>(`${this.apiUrl}/v2/project-flows/${flowId}`, payload, {
            headers: this.authHeaders,
        });
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

    postProjectMember(payload: { client: string; project: string; role: string; staff: string }): Observable<unknown> {
        return this._http.post(`${this.apiUrl}/v2/project-members`, payload, { headers: this.authHeaders });
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
                params: { sort: '-createdAt', where_staff: staffId },
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => [...new Set((res?.data ?? []).map((r) => r.project).filter(Boolean))]),
                catchError((err) => {
                    console.error('Error loading project members:', err);
                    return throwError(() => err);
                })
            );
    }

    private _getProjectsByIds(ids: string[]): Observable<AccessProject[]> {
        const params: Record<string, string | string[]> = { ...STAFF_LIST_PARAMS, in__id: ids };
        return this._http
            .get<{ data: AccessProject[] }>(`${this.apiUrl}/v2/projects`, { params, headers: this.authHeaders })
            .pipe(
                map((res) => (res?.data ?? []).filter(projectHasLoginFlow)),
                catchError((err) => {
                    console.error('Error loading Smart Access projects (staff):', err);
                    return throwError(() => err);
                })
            );
    }

    private _getProjectsClient(): Observable<AccessProject[]> {
        return this._http
            .get<{ data: AccessProject[] }>(`${this.apiUrl}/v2/projects`, {
                params: CLIENT_LIST_PARAMS,
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => (res?.data ?? []).filter(projectHasLoginFlow)),
                catchError((err) => {
                    console.error('Error loading Smart Access projects:', err);
                    return throwError(() => err);
                })
            );
    }
}
