import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import {
    catchError,
    finalize,
    map,
    of,
    tap,
    throwError,
} from 'rxjs';
import type {
    AppFeatureOption,
    DocumentType,
    DocumentTypeField,
    DocumentValidation,
    DocumentValidationResponse,
    PromptTemplate,
    RecentDocumentType,
    ScanResult,
} from './smart-scan.types';

const SCAN_METHODS = ['SCAN_AGENT', 'SCAN_STUDIO', 'SCAN_PROMPT'];

const SCAN_LIST_COLUMNS =
    '_id url backUrl documentType documentNumber documentCategory status validationMethod country createdAt OCRExtraction retention';

export const PERSONAL_SCAN_CATEGORIES = [
    'government_id',
    'passport',
    'license',
    'criminal',
] as const;

export const BUSINESS_SCAN_CATEGORIES = [
    'business_document',
    'tax_document',
    'bank_document',
    'proof_of_address',
] as const;

export type ScanTargetMode = 'personal' | 'business';

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

    pageSize = signal<number>(12);
    pageIndex = signal<number>(0);

    constructor(private _httpClient: HttpClient) {}

    private get apiUrl(): string {
        return environment.apiUrl;
    }

    private get authHeaders(): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    categoriesForTarget(target: ScanTargetMode = 'personal'): readonly string[] {
        return target === 'business' ? BUSINESS_SCAN_CATEGORIES : PERSONAL_SCAN_CATEGORIES;
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
        },
        target: ScanTargetMode = 'personal'
    ) {
        this.loading.set(true);
        this.error.set(null);

        const allowedCategories = this.categoriesForTarget(target);
        const params: Record<string, string | string[]> = {
            page: page.toString(),
            limit: limit.toString(),
            sort: '-createdAt',
            in_validationMethod: SCAN_METHODS,
            in_documentCategory: [...allowedCategories],
            columns: SCAN_LIST_COLUMNS,
            lean: 'true',
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
                    const raw = Array.isArray(response.data) ? response.data : [response.data];
                    const data = raw.filter(
                        (item) =>
                            item &&
                            (!item.documentCategory ||
                                allowedCategories.includes(item.documentCategory))
                    );
                    this.scans.set(data);
                    this.total.set(response.total ?? data.length);
                }),
                catchError((err) => {
                    console.error('Error fetching scans:', err);
                    this.error.set('Failed to load scans');
                    return throwError(() => err);
                }),
                finalize(() => this.loading.set(false))
            );
    }

    getRecentDocumentTypes(target: ScanTargetMode = 'personal') {
        const allowedCategories = this.categoriesForTarget(target);
        return this._httpClient
            .get<{ data: RecentDocumentType[] }>(`${this.apiUrl}/v2/document-validations/recent-document-types`, {
                headers: this.authHeaders,
            })
            .pipe(
                map((response) => {
                    const rows = Array.isArray(response.data) ? response.data : [];
                    return rows.filter(
                        (r) =>
                            r?.documentType?.category &&
                            allowedCategories.includes(r.documentType.category)
                    );
                }),
                catchError((err) => {
                    console.error('Error fetching recent document types:', err);
                    return of([] as RecentDocumentType[]);
                })
            );
    }

    getDocumentTypesByCode(code: string) {
        return this._httpClient
            .get<{ data: DocumentType[] }>(`${this.apiUrl}/v2/document-types`, {
                params: this.withFeaturePopulate({ where_code: code, where_status: 'active', limit: '10' }),
                headers: this.authHeaders,
            })
            .pipe(
                map((response) => (Array.isArray(response.data) ? response.data : [])),
                catchError((err) => {
                    console.error('Error fetching document type by code:', err);
                    return of([] as DocumentType[]);
                })
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

    /**
     * Active document-type countries only. Does not store records, so preview images stay unloaded.
     */
    getDocumentTypeCountries(target: ScanTargetMode = 'personal') {
        const allowedCategories = this.categoriesForTarget(target);
        const params: Record<string, string | string[]> = {
            where_status: 'active',
            in_category: [...allowedCategories],
            columns: 'country category',
            limit: '500',
        };

        return this._httpClient
            .get<{ data: Array<{ country?: string; category?: string }> }>(
                `${this.apiUrl}/v2/document-types`,
                {
                    params,
                    headers: this.authHeaders,
                }
            )
            .pipe(
                map((response) => {
                    const rows = (Array.isArray(response.data) ? response.data : []).filter(
                        (r) => !r.category || allowedCategories.includes(r.category)
                    );
                    return this.uniqueCountries(rows);
                }),
                catchError((err) => {
                    console.error('Error fetching document type countries:', err);
                    return throwError(() => err);
                })
            );
    }

    /**
     * Full document types for one country, including preview images.
     */
    getDocumentTypes(
        country: string,
        mine = false,
        target: ScanTargetMode = 'personal'
    ) {
        if (!country?.trim()) {
            this.documentTypes.set([]);
            return of([] as DocumentType[]);
        }

        const allowedCategories = this.categoriesForTarget(target);
        const params: Record<string, string | string[]> = {
            where_status: 'active',
            where_country: country,
            in_category: [...allowedCategories],
            limit: '200',
        };
        if (mine) params['where_mine'] = 'true';

        return this._httpClient
            .get<{ data: DocumentType[] }>(`${this.apiUrl}/v2/document-types`, {
                params: this.withFeaturePopulate(params),
                headers: this.authHeaders,
            })
            .pipe(
                map((response) => {
                    const rows = Array.isArray(response.data) ? response.data : [];
                    return rows.filter(
                        (dt) => dt?.category && allowedCategories.includes(dt.category)
                    );
                }),
                tap((data) => this.documentTypes.set(data)),
                catchError((err) => {
                    console.error('Error fetching document types:', err);
                    return throwError(() => err);
                })
            );
    }

    /**
     * Catalog query for the dedicated Document Templates screen (/smart-business/document-templates & /smart-enroll/document-templates).
     * Loads all active templates for the target domain (KYB or KYC) across all countries or a selected country/category.
     */
    getDocumentTemplatesCatalog(options: {
        target: ScanTargetMode;
        country?: string;
        category?: string;
        mine?: boolean;
    }) {
        const allowedCategories = this.categoriesForTarget(options.target);
        const params: Record<string, string | string[]> = {
            where_status: 'active',
            in_category: [...allowedCategories],
            limit: '500',
            sort: 'country name',
        };
        if (options.country?.trim()) {
            params['where_country'] = options.country.trim();
        }
        if (options.category?.trim() && allowedCategories.includes(options.category.trim())) {
            params['where_category'] = options.category.trim();
        }
        if (options.mine) {
            params['where_mine'] = 'true';
        }

        return this._httpClient
            .get<{ data: DocumentType[] }>(`${this.apiUrl}/v2/document-types`, {
                params: this.withFeaturePopulate(params),
                headers: this.authHeaders,
            })
            .pipe(
                map((response) => {
                    const rows = Array.isArray(response.data) ? response.data : [];
                    return rows.filter(
                        (dt) => dt?.category && allowedCategories.includes(dt.category)
                    );
                }),
                catchError((err) => {
                    console.error('Error fetching document templates catalog:', err);
                    return throwError(() => err);
                })
            );
    }

    private uniqueCountries(data: Array<{ country?: string }> | undefined): string[] {
        const rows = Array.isArray(data) ? data : [];
        const names = rows
            .map((row) =>
                row.country
                    ?.trim()
                    .toLowerCase()
                    .replace(/\s+/g, '_')
            )
            .filter((country): country is string => Boolean(country));
        return [...new Set(names)].sort();
    }

    getPromptTemplatesByCode(code: string) {
        return this._httpClient.get<{ data: PromptTemplate[] }>(`${this.apiUrl}/v2/prompt-templates`, {
            params: { where_documentTypes: code },
            headers: this.authHeaders,
        });
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

    getDocumentType(id: string) {
        return this._httpClient.get<{ data: DocumentType | null }>(`${this.apiUrl}/v2/document-types/${id}`, {
            params: this.withFeaturePopulate({}),
            headers: this.authHeaders,
        });
    }

    createDocumentType(body: Record<string, unknown>) {
        return this._httpClient.post<{ data: DocumentType }>(`${this.apiUrl}/v2/document-types`, body, {
            headers: { ...this.authHeaders, 'Content-Type': 'application/json' },
        });
    }

    updateDocumentType(id: string, body: Record<string, unknown>) {
        return this._httpClient.put<{ data: DocumentType }>(`${this.apiUrl}/v2/document-types/${id}`, body, {
            headers: { ...this.authHeaders, 'Content-Type': 'application/json' },
        });
    }

    updatePromptTemplate(id: string, body: Record<string, unknown>) {
        return this._httpClient.put<{ data: PromptTemplate }>(`${this.apiUrl}/v2/prompt-templates/${id}`, body, {
            headers: { ...this.authHeaders, 'Content-Type': 'application/json' },
        });
    }

    createPromptTemplate(body: Record<string, unknown>) {
        return this._httpClient.post<{ data: PromptTemplate }>(`${this.apiUrl}/v2/prompt-templates`, body, {
            headers: { ...this.authHeaders, 'Content-Type': 'application/json' },
        });
    }

    getSmartCheckFeatures(country: string) {
        const trimmed = country.trim();
        const titled = trimmed.replace(/\b\w/g, (char) => char.toUpperCase());
        const countries = [...new Set([trimmed, trimmed.toLowerCase(), trimmed.toUpperCase(), titled])].filter(Boolean);

        return this._httpClient.get<{ data: AppFeatureOption[] }>(`${this.apiUrl}/v2/app-features/my-list`, {
            params: {
                where_country: countries.join(','),
                where_isAvailable: 'true',
                limit: '200',
            },
            headers: this.authHeaders,
        });
    }

    /**
     * Includes the linked government endpoint name and URL on each document type.
     */
    private withFeaturePopulate(
        params: Record<string, string | string[]>
    ): Record<string, string | string[]> {
        return {
            ...params,
            'populates[]': 'appFeature',
            populateSelects: JSON.stringify({ appFeature: 'code name url' }),
        };
    }

    identifyDocumentFields(image: string, backImage?: string) {
        const body: Record<string, string> = { image };
        if (backImage) body['backImage'] = backImage;

        return this._httpClient.post<{ data?: DocumentTypeField[] }>(`${this.apiUrl}/v2/ocr/identify-fields`, body, {
            headers: { ...this.authHeaders, 'Content-Type': 'application/json' },
        });
    }

    scanDocument(
        documentType: string,
        image: string,
        backImage?: string,
        promptTemplateId?: string,
        colombianBarcodeValidation?: boolean
    ) {
        this.scanLoading.set(true);
        this.scanResult.set(null);

        const body: Record<string, string> = {
            documentType,
            image,
            includeCost: 'true',
        };
        if (backImage) {
            body['backImage'] = backImage;
        }
        if (promptTemplateId) {
            body['promptTemplateId'] = promptTemplateId;
        }
        if (colombianBarcodeValidation) {
            body['colombianBarcodeValidation'] = 'true';
        }

        return this._httpClient
            .post<{ data: ScanResult; creditsCharged?: number }>(`${this.apiUrl}/v2/ocr/scan-agent`, body, {
                headers: { ...this.authHeaders, 'Content-Type': 'application/json' },
            })
            .pipe(
                tap((response) => {
                    const result = response.data
                        ? {
                              ...response.data,
                              creditsCharged: response.creditsCharged ?? response.data.creditsCharged,
                          }
                        : null;
                    this.scanResult.set(result);
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
