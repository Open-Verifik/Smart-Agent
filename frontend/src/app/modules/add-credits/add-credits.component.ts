import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { forkJoin } from 'rxjs';
import { AuthService } from '../../core/auth/auth.service';
import { AuthModalComponent } from '../../layout/common/auth-modal/auth-modal.component';
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
        // Check if user is authenticated
        const hasToken = !!localStorage.getItem('accessToken');

        if (!hasToken) {
            // Open auth modal if no JWT token
            this.openAuthModal();

            return;
        }

        // Load data and clean up expired cards
        this.loadData();
    }

    loadData(): void {
        // Load all data first, then clean up expired cards
        forkJoin({
            cards: this._creditsService.getCards(),
            balance: this._creditsService.getBalance(),
            autoRecharge: this._creditsService.getAutoRechargeConfig(),
        }).subscribe({
            next: () => {
                // After loading, check for expired cards
                this.cleanupExpiredCards();
            },
            error: (err) => {
                console.error('Failed to load data:', err);
            },
        });
    }

    /**
     * Check for expired cards and automatically delete them
     * If default card is expired, set another card as default
     * If auto-recharge uses an expired card, disable it
     */
    private cleanupExpiredCards(): void {
        const currentCards = this.cards();
        const autoRecharge = this.autoRechargeConfig();

        if (currentCards.length === 0) return;

        const expiredCards = currentCards.filter((card) => this.isCardExpired(card.expires_at));

        if (expiredCards.length === 0) return;

        // Delete each expired card
        expiredCards.forEach((expiredCard) => {
            this._creditsService.deleteCard(expiredCard._id).subscribe({
                next: () => {
                    // After deletion, check if we need to update default or auto-recharge
                    const remainingCards = this.cards();

                    // If the expired card was the default, set a new default
                    if (expiredCard.isDefault && remainingCards.length > 0) {
                        const newDefaultCard = remainingCards[0];
                        this._creditsService.setDefaultCard(newDefaultCard._id).subscribe({
                            next: () => {
                                console.log(`Set new default card: ${newDefaultCard.lastFour}`);
                            },
                            error: (err) => console.error('Failed to set new default card:', err),
                        });
                    }

                    // If auto-recharge was using this card, disable it
                    if (autoRecharge?.cardId === expiredCard._id) {
                        const updatedConfig = {
                            ...autoRecharge,
                            hasAutoCharge: false,
                            cardId: undefined,
                        };

                        this._creditsService.updateAutoRechargeConfig(updatedConfig).subscribe({
                            next: () => {
                                console.log('Disabled auto-recharge due to expired card');
                            },
                            error: (err) => console.error('Failed to disable auto-recharge:', err),
                        });
                    }
                },
                error: (err) => {
                    console.error(`Failed to delete expired card ${expiredCard.lastFour}:`, err);
                },
            });
        });
    }

    /**
     * Check if a card is expired based on its expiration date
     */
    private isCardExpired(expiresAt: string): boolean {
        if (!expiresAt) return false;

        try {
            let month: number;
            let year: number;

            // Handle different date formats
            if (expiresAt.includes('/')) {
                // Format: MM/YYYY
                const parts = expiresAt.split('/').map((s) => parseInt(s.trim(), 10));
                month = parts[0];
                year = parts[1];
            } else if (expiresAt.includes('-')) {
                // Format: YYYY-MM
                const parts = expiresAt.split('-').map((s) => parseInt(s.trim(), 10));
                year = parts[0];
                month = parts[1];
            } else {
                console.warn('Unknown expiration date format:', expiresAt);
                return false;
            }

            if (!month || !year) return false;

            const now = new Date();
            const currentYear = now.getFullYear();
            const currentMonth = now.getMonth() + 1; // getMonth() is 0-indexed

            // Card is expired if year is past, or if same year but month is past
            if (year < currentYear) return true;
            if (year === currentYear && month < currentMonth) return true;

            return false;
        } catch (err) {
            console.error('Error parsing card expiration date:', err);
            return false;
        }
    }

    openAuthModal(): void {
        this._dialog.open(AuthModalComponent, {
            panelClass: 'auth-modal-dialog',
            width: '400px',
            maxWidth: '100vw',
            disableClose: true, // Prevent closing without auth
        });
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
