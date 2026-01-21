import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { AuthService } from '../../core/auth/auth.service';
import { AutoRechargeSettingsComponent } from './auto-recharge-settings/auto-recharge-settings.component';
import { PaymentCardComponent } from './payment-card/payment-card.component';
import { PurchaseCreditsDialogComponent } from './purchase-credits-dialog/purchase-credits-dialog.component';
import { CreditsService } from './services/credits.service';
import { PaymentService } from './services/payment.service';

@Component({
    selector: 'add-credits',
    standalone: true,
    imports: [
        CommonModule,
        TranslocoModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        PaymentCardComponent,
        RouterModule,
    ],
    templateUrl: './add-credits.component.html',
    styleUrls: ['./add-credits.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AddCreditsComponent implements OnInit {
    private _creditsService = inject(CreditsService);
    private _paymentService = inject(PaymentService);
    private _dialog = inject(MatDialog);
    private _authService = inject(AuthService);

    // Signals from service
    cards = this._creditsService.cards;
    balance = this._creditsService.balance;
    autoRechargeConfig = this._creditsService.autoRechargeConfig;
    loading = this._creditsService.loading;
    error = this._creditsService.error;

    // Computed values
    hasCards = computed(() => this.cards().length > 0);
    defaultCard = computed(() => this.cards().find((card) => card.isDefault));

    ngOnInit(): void {
        this.loadData();
    }

    loadData(): void {
        this._creditsService.getCards().subscribe();
        this._creditsService.getBalance().subscribe();
        this._creditsService.getAutoRechargeConfig().subscribe();
    }

    onCardDeleted(cardId: string): void {
        this._creditsService.deleteCard(cardId).subscribe({
            next: () => {
                // Cards updated via signal
            },
            error: (err) => {
                console.error('Failed to delete card:', err);
            },
        });
    }

    onCardSetDefault(cardId: string): void {
        this._creditsService.setDefaultCard(cardId).subscribe({
            next: () => {
                // Cards updated via signal
            },
            error: (err) => {
                console.error('Failed to set default card:', err);
            },
        });
    }

    openAddCardDialog(): void {
        // For Stripe, we redirect to their checkout session
        // No dialog needed - just call the service
        this._paymentService.createStripeCard().subscribe({
            next: () => {
                // Redirect happens in the service
            },
            error: (err) => {
                console.error('Failed to create Stripe checkout session:', err);
            },
        });
    }

    openPurchaseCreditsDialog(): void {
        const currentCards = this.cards();
        if (currentCards.length === 0) {
            // If no cards, open add card dialog first
            this.openAddCardDialog();
            return;
        }

        // Use default card or fallback to first card
        const cardToUse = this.defaultCard() || currentCards[0];

        const dialogRef = this._dialog.open(PurchaseCreditsDialogComponent, {
            width: '500px',
            maxWidth: '90vw',
            data: {
                card: cardToUse,
            },
        });

        // Refreshes user data when dialog closes successfully
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'success') {
                // Refresh user data to get updated credits without signing in again
                this._authService.refreshSession().subscribe(() => {
                    // Reload balance after user data is refreshed and synced to local storage
                    this._creditsService.getBalance().subscribe();
                });
            }
        });
    }

    openAutoRechargeSettings(): void {
        const dialogRef = this._dialog.open(AutoRechargeSettingsComponent, {
            width: '600px',
            maxWidth: '90vw',
            data: {
                config: this.autoRechargeConfig(),
                cards: this.cards(),
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'success') {
                this._creditsService.getAutoRechargeConfig().subscribe();
            }
        });
    }
}
