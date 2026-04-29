import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';

export interface StripeInvoice {
    hosted_invoice_url?: string;
    invoice_pdf?: string;
    number?: string;
    status?: string;
    amount_paid?: number;
    currency?: string;
    customer_email?: string;
    created?: number;
}

export interface PaymentTransaction {
    _id: string;
    amount: number;
    currency?: string;
    status?: string;
    reason?: string;
    paymentMethod?: string;
    gatewayProvider?: string;
    gatewayTransactionId?: string;
    origin?: string;
    createdAt?: string;
    stripeInvoice?: StripeInvoice | null;
    credit?: { amount?: number; category?: string } | null;
}

export interface TransactionListResponse {
    data: PaymentTransaction[];
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}

export interface InvoiceBlobResponse {
    blob: Blob;
    filename: string;
}

@Injectable({ providedIn: 'root' })
export class PaymentHistoryService {
    private readonly apiUrl = environment.apiUrl;

    constructor(private _http: HttpClient) {}

    listTransactions(page = 1, perPage = 10): Observable<TransactionListResponse> {
        const params = new HttpParams()
            .set('page', page)
            .set('perPage', perPage)
            .set('sort', '-createdAt')
            .set('status', 'approved');

        return this._http.get<TransactionListResponse>(`${this.apiUrl}/v2/transactions`, {
            params,
            headers: this._authHeaders(),
        });
    }

    exportInvoice(transactionId: string, language = 'en'): Observable<InvoiceBlobResponse> {
        return this._http
            .post(`${this.apiUrl}/v2/transactions/${transactionId}/export-invoice`, { language }, {
                headers: this._authHeaders({ Accept: 'application/pdf' }),
                observe: 'response',
                responseType: 'blob',
            })
            .pipe(map((res) => this._blobResponse(res, `verifik-invoice-${transactionId}.pdf`)));
    }

    emailInvoice(
        transactionId: string,
        payload: { recipients?: string[]; language?: string; subject?: string }
    ): Observable<{ data: { sent: boolean; messageId: string | null; recipients: string[] } }> {
        return this._http.post<{
            data: { sent: boolean; messageId: string | null; recipients: string[] };
        }>(`${this.apiUrl}/v2/transactions/${transactionId}/export-invoice/email`, payload, {
            headers: this._authHeaders(),
        });
    }

    private _authHeaders(extra: Record<string, string> = {}): Record<string, string> {
        const token = localStorage.getItem('accessToken');
        return token ? { ...extra, Authorization: `Bearer ${token}` } : extra;
    }

    private _blobResponse(
        res: HttpResponse<Blob>,
        fallbackFilename: string
    ): InvoiceBlobResponse {
        const disposition = res.headers.get('Content-Disposition') || '';
        const match = /filename="?([^";]+)"?/i.exec(disposition);

        return {
            blob: res.body as Blob,
            filename: match?.[1] || fallbackFilename,
        };
    }
}
