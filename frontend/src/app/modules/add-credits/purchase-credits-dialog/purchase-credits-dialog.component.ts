import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import { environment } from 'environments/environment';
import { PaymentCard } from '../services/credits.service';
import { PaymentService } from '../services/payment.service';

export interface PurchaseCreditsDialogData {
    card: PaymentCard;
}

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
    data = inject<PurchaseCreditsDialogData>(MAT_DIALOG_DATA);

    selectedAmount: number = 100;
    selectedCardId?: string;
    loading = false;
    error: string | null = null;

    // Custom amount support
    isCustomAmount = false;
    customAmountValue: number | null = null;

    // Updated amounts: now starting from $20
    creditAmounts = [20, 50, 100, 250, 500, 1000];

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
            this.customAmountValue = this.selectedAmount >= 20 ? this.selectedAmount : 20;
            this.selectedAmount = this.customAmountValue;
        }
    }

    onCustomAmountChange(value: number): void {
        this.customAmountValue = value;
        this.selectedAmount = value || 0;
    }

    isValidAmount(): boolean {
        return this.selectedAmount >= 20 && this.selectedAmount <= 2000;
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

    purchase(): void {
        if (!this.selectedCardId) {
            this.error = 'Please select a payment method';
            return;
        }

        if (!this.isValidAmount()) {
            this.error = 'Amount must be between $20 and $2,000';
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
                    this.loading = false;
                    // Check if payment is pending
                    if (response.data?.status === 'pending') {
                        this.error =
                            'Payment is pending verification. Credits will be added once payment is confirmed.';
                        // Still close as success since the payment was initiated
                        setTimeout(() => {
                            this._dialogRef.close('success');
                        }, 2000);
                    } else {
                        this._dialogRef.close('success');
                    }
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
