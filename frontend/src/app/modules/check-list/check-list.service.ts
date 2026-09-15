import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, tap } from 'rxjs';
import { CheckListListResponse, CheckListPayload, CheckListRecord } from './check-list.types';

@Injectable({ providedIn: 'root' })
export class CheckListService {
    private _http = inject(HttpClient);

    lists = signal<CheckListRecord[]>([]);
    current = signal<CheckListRecord | null>(null);
    loading = signal(false);
    saving = signal(false);
    error = signal<string | null>(null);

    private _authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    private _url(path = ''): string {
        return `${environment.apiUrl}/v2/check-lists${path}`;
    }

    list(): Observable<CheckListListResponse> {
        this.loading.set(true);
        this.error.set(null);
        return this._http.get<CheckListListResponse>(this._url(), { headers: this._authHeaders() }).pipe(
            tap({
                next: (response) => {
                    this.lists.set(response.data || []);
                    this.loading.set(false);
                },
                error: () => {
                    this.loading.set(false);
                    this.error.set('checkList.errors.loadFailed');
                },
            })
        );
    }

    show(id: string): Observable<{ data: CheckListRecord }> {
        this.loading.set(true);
        this.error.set(null);
        return this._http
            .get<{ data: CheckListRecord }>(this._url(`/${id}`), { headers: this._authHeaders() })
            .pipe(
                tap({
                    next: (response) => {
                        this.current.set(response.data);
                        this.loading.set(false);
                    },
                    error: () => {
                        this.loading.set(false);
                        this.error.set('checkList.errors.loadFailed');
                    },
                })
            );
    }

    create(payload: CheckListPayload): Observable<{ data: CheckListRecord }> {
        this.saving.set(true);
        this.error.set(null);
        return this._http
            .post<{ data: CheckListRecord }>(this._url(), payload, { headers: this._authHeaders() })
            .pipe(
                tap({
                    next: (response) => {
                        this.current.set(response.data);
                        this.lists.update((items) => [response.data, ...items]);
                        this.saving.set(false);
                    },
                    error: () => {
                        this.saving.set(false);
                        this.error.set('checkList.errors.saveFailed');
                    },
                })
            );
    }

    update(id: string, payload: Partial<CheckListPayload>): Observable<{ data: CheckListRecord }> {
        this.saving.set(true);
        this.error.set(null);
        return this._http
            .put<{ data: CheckListRecord }>(this._url(`/${id}`), payload, {
                headers: this._authHeaders(),
            })
            .pipe(
                tap({
                    next: (response) => {
                        this.current.set(response.data);
                        this.lists.update((items) =>
                            items.map((item) => (item._id === response.data._id ? response.data : item))
                        );
                        this.saving.set(false);
                    },
                    error: () => {
                        this.saving.set(false);
                        this.error.set('checkList.errors.saveFailed');
                    },
                })
            );
    }

    destroy(id: string): Observable<{ data: CheckListRecord }> {
        return this._http
            .delete<{ data: CheckListRecord }>(this._url(`/${id}`), { headers: this._authHeaders() })
            .pipe(
                tap(() => {
                    this.lists.update((items) => items.filter((item) => item._id !== id));
                    if (this.current()?._id === id) this.current.set(null);
                })
            );
    }
}
