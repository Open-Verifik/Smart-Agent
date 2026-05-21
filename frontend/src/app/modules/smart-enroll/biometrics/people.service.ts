import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { toHttpParams } from './http-params.util';
import type { CreatePersonPayload, CreatePersonWithLivenessPayload, Person } from './people.types';

@Injectable({ providedIn: 'root' })
export class PeopleService {
    private _http = inject(HttpClient);

    private get apiUrl(): string {
        return environment.apiUrl;
    }

    private authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    createPerson(payload: CreatePersonPayload): Observable<{ data: Person }> {
        const body = {
            ...payload,
            images: payload.images.map((image) => image.replace(/^data:.*;base64,/, '')),
        };

        return this._http.post<{ data: Person }>(`${this.apiUrl}/v2/face-recognition/persons`, body, {
            headers: this.authHeaders(),
        });
    }

    createPersonWithLiveness(payload: CreatePersonWithLivenessPayload): Observable<{ data: Person }> {
        const body = {
            ...payload,
            images: payload.images.map((image) => image.replace(/^data:.*;base64,/, '')),
        };

        return this._http.post<{ data: Person }>(
            `${this.apiUrl}/v2/face-recognition/persons/search-live-face`,
            body,
            { headers: this.authHeaders() }
        );
    }

    deletePerson(id: string): Observable<unknown> {
        return this._http.delete(`${this.apiUrl}/v2/face-recognition/persons/${id}`, {
            headers: this.authHeaders(),
        });
    }

    getPeople(params: Record<string, unknown> = {}): Observable<{ data: Person[] }> {
        return this._http.get<{ data: Person[] }>(`${this.apiUrl}/v2/face-recognition/persons`, {
            headers: this.authHeaders(),
            params: toHttpParams(params),
        });
    }

    getPeopleByProjectType(
        projectType: string,
        params: Record<string, unknown> = {}
    ): Observable<{ data: Person[] }> {
        const payload = { ...params };

        if (payload['image'] && typeof payload['image'] === 'string') {
            payload['image'] = (payload['image'] as string).replace(/^data:.*;base64,/, '');

            return this._http.post<{ data: Person[] }>(
                `${this.apiUrl}/v2/face-recognition/persons/project-type/${projectType}`,
                payload,
                { headers: this.authHeaders() }
            );
        }

        return this._http.get<{ data: Person[] }>(
            `${this.apiUrl}/v2/face-recognition/persons/project-type/${projectType}`,
            { headers: this.authHeaders(), params: toHttpParams(payload) }
        );
    }

    updatePerson(person: Partial<Person>): Observable<{ data: Person }> {
        return this._http.put<{ data: Person }>(
            `${this.apiUrl}/v2/face-recognition/persons/${person._id}`,
            person,
            { headers: this.authHeaders() }
        );
    }
}
