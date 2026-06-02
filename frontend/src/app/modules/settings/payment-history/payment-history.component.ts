import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    signal,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    InvoiceBlobResponse,
    PaymentHistoryService,
    PaymentTransaction,
} from './payment-history.service';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { getBusinessUserClientId, getVerifikAccount } from '../utils/settings-business-user.util';

const getStoredUser = (): any => getVerifikAccount() || null;

const SUPPORTED_INVOICE_LANGUAGES = new Set(['en', 'es', 'zh', 'ja', 'pt', 'ko']);

@Component({
    selector: 'app-payment-history',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        TranslocoModule,
        SettingsBusinessAccountEmptyStateComponent,
    ],
    templateUrl: './payment-history.component.html',
})
export class PaymentHistoryComponent implements OnInit, OnChanges {
    @Input() user: unknown;
    @Output() userChange = new EventEmitter<unknown>();

    loading = signal(false);
    error = signal<string | null>(null);
    transactions = signal<PaymentTransaction[]>([]);
    page = signal(1);
    pageSize = 10;
    total = signal(0);

    constructor(
        private _paymentHistoryService: PaymentHistoryService,
        private _dialog: MatDialog,
        private _translocoService: TranslocoService
    ) {}

    ngOnInit(): void {
        this.loadTransactions();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['user']) {
            this.loadTransactions();
        }
    }

    get userClientId(): string | undefined {
        return getBusinessUserClientId(this.user);
    }

    onBusinessAccountLinked(account: unknown): void {
        this.userChange.emit(account);
        this.loadTransactions();
    }

    loadTransactions(page = this.page()): void {
        if (!this.userClientId) {
            this.loading.set(false);
            this.error.set(null);
            this.transactions.set([]);
            this.total.set(0);
            return;
        }

        this.loading.set(true);
        this.error.set(null);
        this.page.set(page);

        this._paymentHistoryService.listTransactions(page, this.pageSize).subscribe({
            next: (response) => {
                this.transactions.set(response.data || []);
                this.total.set(response.total || 0);
                this.loading.set(false);
            },
            error: () => {
                this.error.set(
                    this._translocoService.translate('settings.paymentHistory.loadError')
                );
                this.loading.set(false);
            },
        });
    }

    openInvoice(transaction: PaymentTransaction): void {
        this._dialog.open(PaymentInvoiceDialogComponent, {
            width: 'min(1120px, 96vw)',
            maxWidth: '96vw',
            height: 'min(860px, 92vh)',
            panelClass: 'payment-invoice-dialog-panel',
            data: {
                transaction,
                defaultEmail: getStoredUser()?.email || transaction.stripeInvoice?.customer_email || '',
            },
        });
    }

    canGoNext(): boolean {
        return this.page() * this.pageSize < this.total();
    }

    transactionLabel(transaction: PaymentTransaction): string {
        if (transaction.paymentMethod === 'subscription') {
            return this._translocoService.translate('settings.paymentHistory.subscriptionPayment');
        }

        return transaction.reason || this._translocoService.translate('settings.paymentHistory.creditRecharge');
    }

    formatMoney(transaction: PaymentTransaction): string {
        const currency = (transaction.currency || transaction.stripeInvoice?.currency || 'USD').toUpperCase();
        try {
            return new Intl.NumberFormat(undefined, {
                style: 'currency',
                currency,
                minimumFractionDigits: 2,
            }).format(Number(transaction.amount || 0));
        } catch {
            return `${Number(transaction.amount || 0).toFixed(2)} ${currency}`;
        }
    }

    gatewayLabel(transaction: PaymentTransaction): string {
        const raw = transaction.paymentMethod || transaction.gatewayProvider || 'card';
        const normalized = raw.toLowerCase();

        if (normalized === 'subscription') {
            return this._translocoService.translate('settings.paymentHistory.methodSubscription');
        }
        if (normalized === 'card') {
            return this._translocoService.translate('settings.paymentHistory.methodCard');
        }

        return raw;
    }

    transactionStatus(transaction: PaymentTransaction): string {
        const raw = transaction.status?.trim();
        if (!raw || raw.toLowerCase() === 'approved') {
            return this._translocoService.translate('settings.paymentHistory.statusApproved');
        }

        return raw;
    }
}

@Component({
    selector: 'app-payment-invoice-dialog',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        TranslocoModule,
    ],
    templateUrl: './payment-invoice-dialog.component.html',
})
export class PaymentInvoiceDialogComponent implements OnInit, OnDestroy {
    loadingPdf = signal(false);
    sendingEmail = signal(false);
    pdfUrl: string | null = null;
    safePdfUrl: SafeResourceUrl | null = null;
    filename = 'verifik-invoice.pdf';
    emailForm: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: { transaction: PaymentTransaction; defaultEmail?: string },
        private _dialogRef: MatDialogRef<PaymentInvoiceDialogComponent>,
        private _paymentHistoryService: PaymentHistoryService,
        private _sanitizer: DomSanitizer,
        private _snackBar: MatSnackBar,
        private _translocoService: TranslocoService,
        private _formBuilder: FormBuilder
    ) {
        this.emailForm = this._formBuilder.group({
            email: [this.data.defaultEmail || '', [Validators.required, Validators.email]],
        });
    }

    ngOnInit(): void {
        this.loadInvoicePdf();
    }

    ngOnDestroy(): void {
        if (this.pdfUrl) URL.revokeObjectURL(this.pdfUrl);
    }

    loadInvoicePdf(): void {
        this.loadingPdf.set(true);
        const language = this._invoicePdfLanguage();

        this._paymentHistoryService.exportInvoice(this.data.transaction._id, language).subscribe({
            next: (response) => this._setPdfResponse(response),
            error: () => {
                this.loadingPdf.set(false);
                this._snackBar.open(
                    this._translocoService.translate('settings.paymentHistory.invoiceLoadError'),
                    null,
                    { duration: 3000 }
                );
            },
        });
    }

    close(): void {
        this._dialogRef.close();
    }

    download(): void {
        if (!this.pdfUrl) return;

        const anchor = document.createElement('a');
        anchor.href = this.pdfUrl;
        anchor.download = this.filename;
        anchor.click();
    }

    print(): void {
        if (!this.pdfUrl) return;

        const popup = window.open(this.pdfUrl, '_blank', 'noopener,noreferrer');
        if (!popup) return;

        popup.addEventListener('load', () => popup.print(), { once: true });
    }

    openStripeInvoice(): void {
        const url = this.data.transaction.stripeInvoice?.hosted_invoice_url;
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
    }

    openStripePdf(): void {
        const url = this.data.transaction.stripeInvoice?.invoice_pdf;
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
    }

    sendEmail(): void {
        if (this.emailForm.invalid) {
            this.emailForm.markAllAsTouched();
            return;
        }

        this.sendingEmail.set(true);
        const email = this.emailForm.value.email?.trim();
        const language = this._invoicePdfLanguage();

        this._paymentHistoryService
            .emailInvoice(this.data.transaction._id, {
                recipients: email ? [email] : undefined,
                language,
            })
            .subscribe({
                next: () => {
                    this.sendingEmail.set(false);
                    this._snackBar.open(
                        this._translocoService.translate('settings.paymentHistory.emailSent'),
                        null,
                        { duration: 3000 }
                    );
                },
                error: () => {
                    this.sendingEmail.set(false);
                    this._snackBar.open(
                        this._translocoService.translate('settings.paymentHistory.emailError'),
                        null,
                        { duration: 3000 }
                    );
                },
            });
    }

    private _setPdfResponse(response: InvoiceBlobResponse): void {
        if (this.pdfUrl) URL.revokeObjectURL(this.pdfUrl);

        this.filename = response.filename;
        this.pdfUrl = URL.createObjectURL(response.blob);
        this.safePdfUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
        this.loadingPdf.set(false);
    }

    private _invoicePdfLanguage(): string {
        const activeLang = this._translocoService.getActiveLang() || 'en';
        const normalized = activeLang.split('-')[0].toLowerCase();

        return SUPPORTED_INVOICE_LANGUAGES.has(normalized) ? normalized : 'en';
    }
}
