import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import {
    catchError,
    finalize,
    tap,
    throwError,
} from 'rxjs';
import type {
    DocumentType,
    DocumentValidation,
    DocumentValidationResponse,
    PromptTemplate,
    ScanResult,
} from './smart-scan.types';

const SCAN_METHODS = ['SCAN_AGENT', 'SCAN_STUDIO', 'SCAN_PROMPT'];

@Injectable({
    providedIn: 'root',
})
export class SmartScanService {
    scans = signal<DocumentValidation[]>([]);
    total = signal<number>(0);
    loading = signal<boolean>(false);
    error = signal<string | null>(null);

    documentTypes = signal<DocumentType[]>([]);
    promptTemplates = signal<PromptTemplate[]>([]);
    selectedDocumentType = signal<DocumentType | null>(null);
    selectedPromptTemplate = signal<PromptTemplate | null>(null);
    scanResult = signal<ScanResult | null>(null);
    scanLoading = signal<boolean>(false);

    pageSize = signal<number>(10);
    pageIndex = signal<number>(0);

    constructor(private _httpClient: HttpClient) {}

    private get apiUrl(): string {
        return environment.apiUrl;
    }

    private get authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    getScans(
        page: number = 1,
        limit: number = 10,
        filters?: {
            documentType?: string;
            documentNumber?: string;
            country?: string;
            status?: string;
            documentCategory?: string;
            nationality?: string;
        }
    ) {
        this.loading.set(true);
        this.error.set(null);

        const params: Record<string, string | string[]> = {
            page: page.toString(),
            limit: limit.toString(),
            sort: '-createdAt',
            in_validationMethod: SCAN_METHODS,
        };

        const whereKeys: (keyof NonNullable<typeof filters>)[] = [
            'documentType', 'documentNumber', 'country',
            'status', 'documentCategory', 'nationality',
        ];
        for (const key of whereKeys) {
            if (filters?.[key]) {
                params[`where_${key}`] = filters[key]!;
            }
        }

        return this._httpClient
            .get<DocumentValidationResponse>(`${this.apiUrl}/v2/document-validations`, {
                params,
                headers: this.authHeaders,
            })
            .pipe(
                tap((response) => {
                    const data = Array.isArray(response.data) ? response.data : [response.data];
                    this.scans.set(data);
                    this.total.set(response.total ?? 0);
                }),
                catchError((err) => {
                    console.error('Error fetching scans:', err);
                    this.error.set('Failed to load scans');
                    return throwError(() => err);
                }),
                finalize(() => this.loading.set(false))
            );
    }

    getScan(id: string) {
        return this._httpClient.get<{ data: DocumentValidation }>(
            `${this.apiUrl}/v2/document-validations/${id}`,
            { headers: this.authHeaders }
        );
    }

    deleteScan(id: string) {
        return this._httpClient
            .delete<{ data: unknown }>(`${this.apiUrl}/v2/document-validations/${id}`, {
                headers: this.authHeaders,
            })
            .pipe(
                catchError((err) => {
                    console.error('Error deleting document validation:', err);
                    return throwError(() => err);
                })
            );
    }

    getDocumentTypes(country?: string) {
        const params: Record<string, string> = {
            where_status: 'active',
            limit: '200',
        };
        if (country) {
            params['where_country'] = country;
        }

        return this._httpClient
            .get<{ data: DocumentType[] }>(`${this.apiUrl}/v2/document-types`, {
                params,
                headers: this.authHeaders,
            })
            .pipe(
                tap((response) => {
                    const data = Array.isArray(response.data) ? response.data : [];
                    this.documentTypes.set(data);
                }),
                catchError((err) => {
                    console.error('Error fetching document types:', err);
                    return throwError(() => err);
                })
            );
    }

    getPromptTemplates(documentTypeId?: string) {
        const params: Record<string, string> = {};
        if (documentTypeId) {
            params['where_documentType'] = documentTypeId;
        }

        return this._httpClient
            .get<{ data: PromptTemplate[] }>(`${this.apiUrl}/v2/prompt-templates`, {
                params,
                headers: this.authHeaders,
            })
            .pipe(
                tap((response) => {
                    const data = Array.isArray(response.data) ? response.data : [];
                    this.promptTemplates.set(data);
                }),
                catchError((err) => {
                    console.error('Error fetching prompt templates:', err);
                    return throwError(() => err);
                })
            );
    }

    scanDocument(documentType: string, image: string, backImage?: string) {
        this.scanLoading.set(true);
        this.scanResult.set(null);

        const body: Record<string, string> = {
            documentType,
            image,
        };
        if (backImage) {
            body['backImage'] = backImage;
        }

        return this._httpClient
            .post<{ data: ScanResult }>(`${this.apiUrl}/v2/ocr/scan-agent`, body, {
                headers: { ...this.authHeaders, 'Content-Type': 'application/json' },
            })
            .pipe(
                tap((response) => {
                    this.scanResult.set(response.data ?? null);
                }),
                catchError((err) => {
                    console.error('Error scanning document:', err);
                    return throwError(() => err);
                }),
                finalize(() => this.scanLoading.set(false))
            );
    }

    resetScanState() {
        this.scanResult.set(null);
        this.selectedDocumentType.set(null);
        this.selectedPromptTemplate.set(null);
    }
}
