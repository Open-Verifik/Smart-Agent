import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import { AutoRechargeConfig, CreditsService, PaymentCard } from '../services/credits.service';

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
    minThreshold: number = 10;
    minRecharge: number = 20;
    selectedCardId?: string;
    loading = false;
    error: string | null = null;

    ngOnInit(): void {
        if (this.data?.config) {
            this.enabled = this.data.config.hasAutoCharge || false;
            this.minThreshold = this.data.config.minThreshold || 10;
            this.minRecharge = this.data.config.minRecharge || 20;
            this.selectedCardId = this.data.config.cardId;
        }

        // Sort cards: Default first
        if (this.data?.cards?.length) {
            this.data.cards.sort((a, b) => (Number(b.isDefault) || 0) - (Number(a.isDefault) || 0));

            // Default to the first card (which is now the default one) if no card is selected
            if (!this.selectedCardId) {
                this.selectedCardId = this.data.cards[0]._id;
            }
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

        if (this.enabled) {
            if (this.minRecharge < 20 || this.minRecharge > 2000) {
                this.error = 'Recharge amount must be between $20 and $2000';
                return;
            }

            if (this.minThreshold < 10 || this.minThreshold > 1990) {
                this.error = 'Threshold amount must be between $10 and $1990';
                return;
            }
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
