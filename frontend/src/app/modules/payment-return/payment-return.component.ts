import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { environment } from 'environments/environment';

export type PaymentReturnState =
    | 'confirming'
    | 'approved'
    | 'pending'
    | 'failed'
    | 'expired'
    | 'abandoned'
    | 'unknown';

interface PaymentReturnSummary {
    state: Exclude<PaymentReturnState, 'confirming' | 'unknown'>;
    usdAmount: number;
    chargeAmount: number;
    chargeCurrency: string;
    gatewayProvider: string;
    stripeHostedInvoiceUrl?: string;
}

const CONFIRM_ATTEMPTS = 5;
const CONFIRM_RETRY_MS = 3000;
const INVOICE_LANGUAGES = new Set(['en', 'es', 'fr', 'pt', 'ja', 'ko', 'zh']);

@Component({
    selector: 'app-payment-return',
    standalone: true,
    imports: [CommonModule, MatIconModule, TranslocoModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './payment-return.component.html',
    styleUrl: './payment-return.component.scss',
})
export class PaymentReturnComponent implements OnInit, OnDestroy {
    state = signal<PaymentReturnState>('confirming');
    summary = signal<PaymentReturnSummary | null>(null);
    downloading = signal(false);
    downloadError = signal(false);

    private _http = inject(HttpClient);
    private _route = inject(ActivatedRoute);
    private _transloco = inject(TranslocoService);
    private _timer?: ReturnType<typeof setTimeout>;

    /**
     * Approved, confirming, and pending share the indigo card. Expired stays quiet. Failed stays rose.
     */
    statusTone(): 'indigo' | 'slate' | 'rose' {
        const current = this.state();

        if (current === 'failed') return 'rose';
        if (current === 'expired' || current === 'abandoned') return 'slate';

        return 'indigo';
    }

    statusIcon(): string {
        const current = this.state();

        if (current === 'approved') return 'check';
        if (current === 'failed') return 'error_outline';
        if (current === 'expired' || current === 'abandoned') return 'hourglass_disabled';

        return 'schedule';
    }

    ngOnInit(): void {
        const token = this._route.snapshot.queryParamMap.get('token');

        if (!token) {
            this.state.set('unknown');
            return;
        }

        this._confirm(token, 1, this._route.snapshot.queryParamMap.get('canceled') === '1');
    }

    ngOnDestroy(): void {
        clearTimeout(this._timer);
    }

    downloadInvoice(): void {
        const token = this._route.snapshot.queryParamMap.get('token');

        if (!token || this.state() !== 'approved' || this.downloading()) return;

        this.downloading.set(true);
        this.downloadError.set(false);

        this._http
            .get(`${environment.apiUrl}/v2/credits/payment-return/invoice`, {
                params: { token, language: this._invoiceLanguage() },
                responseType: 'blob',
                observe: 'response',
            })
            .subscribe({
                next: (response) => {
                    this._saveInvoice(response.body, response.headers.get('Content-Disposition'));
                    this.downloading.set(false);
                },
                error: () => {
                    this.downloading.set(false);
                    this.downloadError.set(true);
                },
            });
    }

    private _confirm(token: string, attempt: number, canceled: boolean): void {
        this._http
            .get<{ data: PaymentReturnSummary }>(`${environment.apiUrl}/v2/credits/payment-return`, {
                params: { token },
            })
            .subscribe({
                next: (response) => {
                    const data = response.data;

                    this.summary.set(data ?? null);

                    if (data?.state === 'pending' && canceled) {
                        this.state.set('abandoned');
                        return;
                    }

                    if (data?.state === 'pending' && attempt < CONFIRM_ATTEMPTS) {
                        this.state.set('confirming');
                        this._timer = setTimeout(() => this._confirm(token, attempt + 1, canceled), CONFIRM_RETRY_MS);
                        return;
                    }

                    this.state.set(data?.state || 'unknown');
                },
                error: () => this.state.set('unknown'),
            });
    }

    private _invoiceLanguage(): string {
        const normalized = (this._transloco.getActiveLang() || 'en').split('-')[0].toLowerCase();

        return INVOICE_LANGUAGES.has(normalized) ? normalized : 'en';
    }

    private _saveInvoice(blob: Blob | null, disposition: string | null): void {
        if (!blob) {
            this.downloadError.set(true);
            return;
        }

        const match = /filename="([^"]+)"/.exec(disposition || '');
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');

        anchor.href = url;
        anchor.download = match?.[1] || 'verifik-invoice.pdf';
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
}
