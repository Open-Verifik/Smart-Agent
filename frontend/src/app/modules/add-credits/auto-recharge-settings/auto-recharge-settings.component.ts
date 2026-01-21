import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import { AutoRechargeConfig, PaymentCard, CreditsService } from '../services/credits.service';

export interface AutoRechargeSettingsData {
    config: AutoRechargeConfig | null;
    cards: PaymentCard[];
}

@Component({
    selector: 'app-auto-recharge-settings',
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
    templateUrl: './auto-recharge-settings.component.html',
    styleUrls: ['./auto-recharge-settings.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AutoRechargeSettingsComponent implements OnInit {
    private _dialogRef = inject(MatDialogRef<AutoRechargeSettingsComponent>);
    private _creditsService = inject(CreditsService);
    data = inject<AutoRechargeSettingsData>(MAT_DIALOG_DATA);

    enabled: boolean = false;
    minThreshold: number = 100;
    minRecharge: number = 500;
    selectedCardId?: string;
    loading = false;
    error: string | null = null;

    ngOnInit(): void {
        if (this.data?.config) {
            this.enabled = this.data.config.hasAutoCharge || false;
            this.minThreshold = this.data.config.minThreshold || 100;
            this.minRecharge = this.data.config.minRecharge || 500;
            this.selectedCardId = this.data.config.cardId;
        }

        // Default to the first card if no card is selected and cards are available
        if (!this.selectedCardId && this.data?.cards && this.data.cards.length > 0) {
            const defaultCard = this.data.cards.find((c) => c.isDefault) || this.data.cards[0];
            this.selectedCardId = defaultCard._id;
        }
    }

    selectCard(cardId: string): void {
        if (!this.loading) {
            this.selectedCardId = cardId;
        }
    }

    close(): void {
        this._dialogRef.close();
    }

    save(): void {
        if (this.enabled && !this.selectedCardId) {
            this.error = 'Please select a payment method for auto-recharge';
            return;
        }

        if (this.enabled && (this.minThreshold < 0 || this.minRecharge < 0)) {
            this.error = 'Threshold and recharge amount must be positive';
            return;
        }

        this.loading = true;
        this.error = null;

        const config: AutoRechargeConfig = {
            hasAutoCharge: this.enabled,
            minThreshold: this.minThreshold,
            minRecharge: this.minRecharge,
            cardId: this.enabled ? this.selectedCardId : undefined,
        };

        this._creditsService.updateAutoRechargeConfig(config).subscribe({
            next: () => {
                this.loading = false;
                this._dialogRef.close('success');
            },
            error: (err) => {
                this.loading = false;
                this.error = err.error?.message || 'Failed to save auto-recharge settings';
            },
        });
    }
}
