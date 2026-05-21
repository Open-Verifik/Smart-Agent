import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import type { Collection } from './collections.types';
import { toHttpParams } from './http-params.util';

@Injectable({ providedIn: 'root' })
export class CollectionsService {
    private _http = inject(HttpClient);

    private get apiUrl(): string {
        return environment.apiUrl;
    }

    private authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    createCollection(collection: Partial<Collection>): Observable<{ data: Collection }> {
        return this._http.post<{ data: Collection }>(
            `${this.apiUrl}/v2/face-recognition/collections`,
            collection,
            { headers: this.authHeaders() }
        );
    }

    deleteCollection(id: string): Observable<unknown> {
        return this._http.delete(`${this.apiUrl}/v2/face-recognition/collections/${id}`, {
            headers: this.authHeaders(),
        });
    }

    getAllCollections(params: Record<string, unknown> = {}): Observable<{ data: Collection[] }> {
        return this._http.get<{ data: Collection[] }>(`${this.apiUrl}/v2/face-recognition/collections`, {
            headers: this.authHeaders(),
            params: toHttpParams(params),
        });
    }

    getCollectionByProjectType(
        projectType: string,
        params: Record<string, unknown> = {}
    ): Observable<{ data: Collection[] }> {
        const payload = { ...params };

        if (payload['image'] && typeof payload['image'] === 'string') {
            payload['image'] = (payload['image'] as string).replace(/^data:.*;base64,/, '');

            return this._http.post<{ data: Collection[] }>(
                `${this.apiUrl}/v2/face-recognition/collections/project-type/${projectType}`,
                payload,
                { headers: this.authHeaders() }
            );
        }

        return this._http.get<{ data: Collection[] }>(
            `${this.apiUrl}/v2/face-recognition/collections/project-type/${projectType}`,
            { headers: this.authHeaders(), params: toHttpParams(payload) }
        );
    }

    movePeopleToCollection(
        peopleIds: string[],
        fromCollection: Partial<Collection>,
        toCollection: Partial<Collection>
    ): Observable<unknown> {
        return this._http.post(
            `${this.apiUrl}/v2/face-recognition/collections/move-people`,
            { fromCollection, toCollection, peopleIds },
            { headers: this.authHeaders() }
        );
    }

    updateCollection(collection: Partial<Collection>): Observable<{ data: Collection }> {
        return this._http.put<{ data: Collection }>(
            `${this.apiUrl}/v2/face-recognition/collections/${collection._id}`,
            collection,
            { headers: this.authHeaders() }
        );
    }
}
