import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export interface PaymentConfirmationData {
    amount: string; // AVAX Amount
    currentBalance: string; // AVAX Balance
    tokenBalance?: string; // VKA Balance
    endpoint?: string;
    details?: string;
    receiver: string;
    // VKA Support
    priceVka?: number;
    vkaContract?: string;
}

import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-payment-confirmation',
    standalone: true,
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        TranslocoModule,
        MatRadioModule,
        FormsModule,
    ],
    templateUrl: './payment-confirmation.component.html',
    styleUrls: ['./payment-confirmation.component.scss'],
})
export class PaymentConfirmationComponent {
    // Payment Selection: 'AVAX' | 'VKA'
    selectedCurrency: 'AVAX' | 'VKA' = 'AVAX';

    constructor(
        public dialogRef: MatDialogRef<PaymentConfirmationComponent>,
        @Inject(MAT_DIALOG_DATA) public data: PaymentConfirmationData
    ) {
        // Default to VKA if available
        if (data.priceVka) {
            this.selectedCurrency = 'VKA';
        }
    }

    get newBalance(): number {
        if (this.selectedCurrency === 'AVAX') {
            const current = parseFloat(this.data.currentBalance || '0');
            const cost = parseFloat(this.data.amount || '0');
            return current - cost;
        } else if (this.selectedCurrency === 'VKA') {
            const current = parseFloat(this.data.tokenBalance || '0');
            const cost = this.data.priceVka || 0;
            return current - cost;
        }
        return 0;
    }

    confirm() {
        this.dialogRef.close({
            confirmed: true,
            currency: this.selectedCurrency,
            amount:
                this.selectedCurrency === 'AVAX'
                    ? this.data.amount
                    : this.data.priceVka?.toString(),
        });
    }

    close() {
        this.dialogRef.close(false);
    }
}
