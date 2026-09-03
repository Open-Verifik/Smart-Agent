import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, map, throwError } from 'rxjs';
import type { ClientSettingsOverrideSnapshot } from 'app/core/client-settings/override-conditions';

export interface HumanAuthnProjectFlow {
    _id?: string;
    type?: string;
    target?: string;
    status?: string;
    humanAuthn?: { mode?: string; livenessAtCreation?: boolean };
    storage?: { provider?: string };
}

export interface HumanAuthnProject {
    _id: string;
    name: string;
    status?: string;
    updatedAt?: string;
    createdAt?: string;
    projectFlows?: HumanAuthnProjectFlow[];
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
}
