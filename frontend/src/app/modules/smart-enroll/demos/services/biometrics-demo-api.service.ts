import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable, catchError, map, throwError } from 'rxjs';
import type {
    ApiErrorResponse,
    CompareLivePayload,
    CompareWithLivenessPayload,
    CreateCollectionPayload,
    CreateHumanIdPayload,
    CreatePersonPayload,
    CreatePersonWithLivenessPayload,
    DecryptHumanIdPayload,
    DetectFacePayload,
    FaceCollectionListItem,
    FaceComparisonLivePayload,
    FaceComparisonPayload,
    LivenessPayload,
    PreviewHumanIdPayload,
    PreviewZelfIdQrPayload,
    SearchActiveUserPayload,
    SearchCropsPayload,
    SearchLivePersonPayload,
    SearchPersonsPayload,
    UpdatePersonPayload,
    VerifyFacePayload,
} from './biometrics-demo.types';
import { normalizeImageBase64ForApi } from './biometrics-demo.util';

@Injectable({ providedIn: 'root' })
export class BiometricsDemoApiService {
    private _http = inject(HttpClient);
    private _router = inject(Router);

    private get baseUrl(): string {
        return `${environment.apiUrl}/v2`;
    }

    private authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    ensureAuthenticated(): boolean {
        if (localStorage.getItem('accessToken')) return true;
        void this._router.navigate(['/sign-in']);
        return false;
    }

    private stripImages<T extends { images?: string[]; image?: string; gallery?: string[]; probe?: string | string[]; faceBase64?: string; referenceFaceBase64?: string }>(
        payload: T
    ): T {
        const body = { ...payload } as T & Record<string, unknown>;
        if (Array.isArray(body.images)) {
            body.images = body.images.map((img) => normalizeImageBase64ForApi(img));
        }
        if (typeof body.image === 'string') {
            body.image = normalizeImageBase64ForApi(body.image);
        }
        if (Array.isArray(body.gallery)) {
            body.gallery = body.gallery.map((img) => normalizeImageBase64ForApi(img));
        }
        if (typeof body.probe === 'string') {
            body.probe = normalizeImageBase64ForApi(body.probe);
        } else if (Array.isArray(body.probe)) {
            body.probe = body.probe.map((img) => normalizeImageBase64ForApi(img));
        }
        if (typeof body.faceBase64 === 'string') {
            body.faceBase64 = normalizeImageBase64ForApi(body.faceBase64);
        }
        if (typeof body.referenceFaceBase64 === 'string') {
            body.referenceFaceBase64 = normalizeImageBase64ForApi(body.referenceFaceBase64);
        }
        return body;
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        const body = err.error as Record<string, unknown> | null;
        const apiErr: ApiErrorResponse = {
            error:
                (typeof body?.['message'] === 'string' ? body['message'] : undefined) ??
                (typeof body?.['error'] === 'string' ? body['error'] : undefined) ??
                err.message,
            code: typeof body?.['code'] === 'string' ? body['code'] : undefined,
            message: typeof body?.['message'] === 'string' ? body['message'] : undefined,
            statusCode: err.status,
        };
        return throwError(() => apiErr);
    }

    createCollection(payload: CreateCollectionPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/face-recognition/collections`, payload, {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    listCollections(likeName?: string): Observable<FaceCollectionListItem[]> {
        const params: Record<string, string> = {};
        if (likeName) params['like_name'] = likeName;
        return this._http
            .get<{ data: FaceCollectionListItem[] }>(`${this.baseUrl}/face-recognition/collections`, {
                headers: this.authHeaders(),
                params,
            })
            .pipe(
                map((res) => (Array.isArray(res?.data) ? res.data : [])),
                catchError((e) => this.handleError(e))
            );
    }

    createPerson(payload: CreatePersonPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/face-recognition/persons`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    createPersonWithLiveness(payload: CreatePersonWithLivenessPayload): Observable<unknown> {
        return this._http
            .post(
                `${this.baseUrl}/face-recognition/persons/search-live-face`,
                this.stripImages(payload),
                { headers: this.authHeaders() }
            )
            .pipe(catchError((e) => this.handleError(e)));
    }

    getPersons(params: Record<string, string | number> = {}): Observable<unknown> {
        return this._http
            .get(`${this.baseUrl}/face-recognition/persons`, {
                headers: this.authHeaders(),
                params,
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    getPerson(personId: string): Observable<unknown> {
        return this._http
            .get(`${this.baseUrl}/face-recognition/persons/${encodeURIComponent(personId)}`, {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    updatePerson(personId: string, payload: UpdatePersonPayload): Observable<unknown> {
        return this._http
            .put(`${this.baseUrl}/face-recognition/persons/${encodeURIComponent(personId)}`, payload, {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    deletePerson(personId: string, collection?: string): Observable<unknown> {
        const params: Record<string, string> = {};
        if (collection) params['collection'] = collection;
        return this._http
            .delete(`${this.baseUrl}/face-recognition/persons/${encodeURIComponent(personId)}`, {
                headers: this.authHeaders(),
                params,
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    detectLiveness(payload: LivenessPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/face-recognition/liveness`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    compareFaces(payload: FaceComparisonPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/face-recognition/compare`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    compareFacesLive(payload: FaceComparisonLivePayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/face-recognition/compare-live`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    compareWithLiveness(payload: CompareWithLivenessPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/face-recognition/compare-with-liveness`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    compareLive(payload: CompareLivePayload): Observable<unknown> {
        return this.compareFacesLive(payload);
    }

    searchPersons(payload: SearchPersonsPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/face-recognition/search`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    searchLivePerson(payload: SearchLivePersonPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/face-recognition/search-live-face`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    searchActiveUser(payload: SearchActiveUserPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/face-recognition/search-active-user`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    detectFace(payload: DetectFacePayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/face-recognition/detect`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    verifyFace(payload: VerifyFacePayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/face-recognition/verify`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    searchCrops(payload: SearchCropsPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/face-recognition/search/crops`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    createHumanId(payload: CreateHumanIdPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/human-id/encrypt`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    createHumanIdQr(payload: CreateHumanIdPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/human-id/encrypt-qr-code`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    decryptHumanId(payload: DecryptHumanIdPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/human-id/decrypt`, this.stripImages(payload), {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }

    previewHumanId(payload: PreviewHumanIdPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/human-id/preview`, payload, { headers: this.authHeaders() })
            .pipe(catchError((e) => this.handleError(e)));
    }

    previewZelfIdQr(payload: PreviewZelfIdQrPayload): Observable<unknown> {
        return this._http
            .post(`${this.baseUrl}/human-id/preview-zelf-id-qr`, payload, {
                headers: this.authHeaders(),
            })
            .pipe(catchError((e) => this.handleError(e)));
    }
}
