import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'environments/environment';
import { MAX_CREDIT_PURCHASE_USD, MIN_CREDIT_PURCHASE_USD } from '../add-credits.constants';
import { PaymentCard } from '../services/credits.service';
import {
    CreditPurchaseTransaction,
    isThreeDSCreditPurchase,
    PaymentService,
} from '../services/payment.service';

export interface PurchaseCreditsDialogData {
    card: PaymentCard;
}

const PURCHASE_ERROR_KEYS = {
    stripeNotConfigured: 'addCredits.purchaseDialog.errors.stripeNotConfigured',
    payment3dsFailed: 'addCredits.purchaseDialog.errors.payment3dsFailed',
    paymentFailedImmediate: 'addCredits.purchaseDialog.errors.paymentFailedImmediate',
} as const;

const PURCHASE_ERROR_FALLBACKS: Record<keyof typeof PURCHASE_ERROR_KEYS, string> = {
    stripeNotConfigured:
        'Payment could not be completed. Card verification is not available. Please try again.',
    payment3dsFailed: 'Card verification failed. Please try again or use another card.',
    paymentFailedImmediate: 'Payment was declined. Please try another card or contact support.',
};

@Component({
    selector: 'app-purchase-credits-dialog',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        TranslocoModule,
        MatProgressSpinnerModule,
    ],
    templateUrl: './purchase-credits-dialog.component.html',
    styleUrls: ['./purchase-credits-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PurchaseCreditsDialogComponent implements OnInit {
    private _dialogRef = inject(MatDialogRef<PurchaseCreditsDialogComponent>);
    private _paymentService = inject(PaymentService);
    private _transloco = inject(TranslocoService);
    data = inject<PurchaseCreditsDialogData>(MAT_DIALOG_DATA);

    readonly minPurchaseUsd = MIN_CREDIT_PURCHASE_USD;
    readonly maxPurchaseUsd = MAX_CREDIT_PURCHASE_USD;

    selectedAmount: number = 100;
    selectedCardId?: string;
    loading = false;
    error: string | null = null;

    // Custom amount support
    isCustomAmount = false;
    customAmountValue: number | null = null;

    /** Preset amounts; minimum purchasable USD is `MIN_CREDIT_PURCHASE_USD` (custom input included). */
    creditAmounts = [40, 50, 100, 250, 500, 1000];

    // KYC Requirement support
    kycRequired = false;

    ngOnInit(): void {
        if (this.data?.card) {
            this.selectedCardId = this.data.card._id;
        }
    }

    selectPresetAmount(amount: number): void {
        this.isCustomAmount = false;
        this.customAmountValue = null;
        this.selectedAmount = amount;
    }

    toggleCustomAmount(): void {
        this.isCustomAmount = !this.isCustomAmount;
        if (this.isCustomAmount) {
            // When switching to custom, initialize with current selection or minimum
            this.customAmountValue =
                this.selectedAmount >= MIN_CREDIT_PURCHASE_USD
                    ? this.selectedAmount
                    : MIN_CREDIT_PURCHASE_USD;
            this.selectedAmount = this.customAmountValue;
        }
    }

    onCustomAmountChange(value: number): void {
        this.customAmountValue = value;
        this.selectedAmount = value || 0;
    }

    isValidAmount(): boolean {
        return (
            this.selectedAmount >= MIN_CREDIT_PURCHASE_USD &&
            this.selectedAmount <= MAX_CREDIT_PURCHASE_USD
        );
    }

    close(): void {
        this._dialogRef.close();
    }

    startKyc(): void {
        this.loading = true;

        this._paymentService.resumeKYC().subscribe({
            next: (response) => {
                this.loading = false;
                // @ts-ignore
                if (response.data?.path && environment.kycBaseUrl) {
                    // @ts-ignore
                    const kycUrl = `${environment.kycBaseUrl}${response.data.path}`;
                    window.open(kycUrl, '_blank');
                    this._dialogRef.close();
                }
            },
            error: (err) => {
                this.loading = false;
                this.error = 'Failed to start KYC verification. Please contact support.';
            },
        });
    }

    getCardLogo(brand: string): string {
        const logos: Record<string, string> = {
            visa: 'https://cdn.verifik.co/assets/billing-svg/VisaLogo.svg',
            mastercard: 'https://cdn.verifik.co/assets/billing-svg/MasterCardLogo.svg',
            amex: 'https://cdn.verifik.co/assets/billing-svg/AmericanExpressLogo.svg',
        };
        return logos[brand?.toLowerCase()] || '';
    }

    private _translatePurchaseError(key: keyof typeof PURCHASE_ERROR_KEYS): string {
        const path = PURCHASE_ERROR_KEYS[key];
        const translated = this._transloco.translate(path);
        return translated === path ? PURCHASE_ERROR_FALLBACKS[key] : translated;
    }

    /**
     * Completes Stripe 3DS and confirms the credit purchase on the API.
     */
    private async _completeStripe3ds(
        clientSecret: string,
        paymentIntentId: string,
        stripePublishableKey: string,
    ): Promise<void> {
        try {
            const stripe = await loadStripe(stripePublishableKey);
            if (!stripe) {
                this.loading = false;
                this.error = this._translatePurchaseError('stripeNotConfigured');
                return;
            }

            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret);

            if (error) {
                this.loading = false;
                this.error = error.message || this._translatePurchaseError('payment3dsFailed');
                return;
            }

            if (paymentIntent?.status !== 'succeeded') {
                this.loading = false;
                this.error = this._translatePurchaseError('payment3dsFailed');
                return;
            }

            this._paymentService.confirmCreditPurchase(paymentIntentId).subscribe({
                next: () => {
                    this.loading = false;
                    this._dialogRef.close('success');
                },
                error: (err) => {
                    this.loading = false;
                    this.error =
                        err.error?.message || this._translatePurchaseError('payment3dsFailed');
                },
            });
        } catch {
            this.loading = false;
            this.error = this._translatePurchaseError('payment3dsFailed');
        }
    }

    purchase(): void {
        if (!this.selectedCardId) {
            this.error = 'Please select a payment method';
            return;
        }

        if (!this.isValidAmount()) {
            this.error = `Amount must be between $${MIN_CREDIT_PURCHASE_USD} and $${MAX_CREDIT_PURCHASE_USD.toLocaleString('en-US')}`;
            return;
        }

        this.loading = true;
        this.error = null;

        this._paymentService
            .purchaseCredits({
                amount: this.selectedAmount,
                cardId: this.selectedCardId,
                currency: 'USD',
                origin: 'smart_agent',
            })
            .subscribe({
                next: (response) => {
                    const data = response.data;
                    if (!data) {
                        this.loading = false;
                        this.error = 'Failed to purchase credits';
                        return;
                    }

                    if (isThreeDSCreditPurchase(data)) {
                        const { clientSecret, paymentIntentId, stripePublishableKey } = data;
                        if (!clientSecret || !paymentIntentId || !stripePublishableKey) {
                            this.loading = false;
                            this.error = this._translatePurchaseError('stripeNotConfigured');
                            return;
                        }
                        void this._completeStripe3ds(
                            clientSecret,
                            paymentIntentId,
                            stripePublishableKey,
                        );
                        return;
                    }

                    const tx = data as CreditPurchaseTransaction;
                    if (tx.status === 'failed') {
                        this.loading = false;
                        this.error = this._translatePurchaseError('paymentFailedImmediate');
                        return;
                    }

                    if (tx.status === 'pending') {
                        this.loading = false;
                        this.error =
                            'Payment is pending verification. Credits will be added once payment is confirmed.';
                        setTimeout(() => {
                            this._dialogRef.close('success');
                        }, 2000);
                        return;
                    }

                    this.loading = false;
                    this._dialogRef.close('success');
                },
                error: (err) => {
                    this.loading = false;
                    // Handle KYC requirement errors
                    if (
                        err.error?.code === 'client_cannot_recharge_needs_kyc' ||
                        err.error?.message?.includes('kyc')
                    ) {
                        this.kycRequired = true;
                        this.error = null; // Clear error to show pure KYC state
                    } else {
                        this.error = err.error?.message || 'Failed to purchase credits';
                    }
                },
            });
    }
}
