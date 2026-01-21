import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { UserService } from 'app/core/user/user.service';
import { environment } from 'environments/environment';
import { catchError, finalize, of, tap, throwError } from 'rxjs';

export interface PaymentCard {
    _id: string;
    brand: 'visa' | 'mastercard' | 'amex';
    lastFour: string;
    name: string;
    expires_at: string; // Format: "YYYY-MM"
    isDefault: boolean;
    gatewayProvider: string;
    createdAt?: string;
}

export interface CreditBalance {
    credits: number;
    totalCredits: number;
}

export interface AutoRechargeConfig {
    hasAutoCharge: boolean;
    minThreshold: number;
    minRecharge: number;
    cardId?: string;
}

@Injectable({
    providedIn: 'root',
})
export class CreditsService {
    // Signals for reactive state
    cards = signal<PaymentCard[]>([]);
    balance = signal<CreditBalance | null>(null);
    autoRechargeConfig = signal<AutoRechargeConfig | null>(null);
    loading = signal<boolean>(false);
    error = signal<string | null>(null);

    private apiUrl = environment.apiUrl;
    private _userService = inject(UserService);

    constructor(private _httpClient: HttpClient) {
        // Subscribe to user updates to keep balance in sync
        this._userService.user$.subscribe((user) => {
            if (user) {
                this.updateBalanceFromUser(user);
            }
        });
    }

    private updateBalanceFromUser(user: any) {
        try {
            // Standard calculation based on separate fields
            const credits = Number(user.credits) || 0;

            // Use credits as total per user request (backend handles total logic)
            const totalCredits = Math.round(credits * 100) / 100;

            const balance: CreditBalance = {
                credits: Math.round(credits * 100) / 100,
                totalCredits: totalCredits,
            };
            this.balance.set(balance);
        } catch (err) {
            console.error('Error updating balance from user:', err);
        }
    }

    /**
     * Get all payment cards
     */
    getCards(gatewayProvider: string = 'stripe') {
        this.loading.set(true);
        this.error.set(null);

        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const params = {
            'populates[]': 'client',
            where_gatewayProvider: gatewayProvider,
        };

        return this._httpClient
            .get<{ data: PaymentCard[] }>(`${this.apiUrl}/v2/credit-cards`, { headers, params })
            .pipe(
                tap((response) => {
                    this.cards.set(response.data || []);
                }),
                catchError((err) => {
                    console.error('Error fetching cards:', err);
                    this.error.set('Failed to load payment cards');
                    return throwError(() => err);
                }),
                finalize(() => {
                    this.loading.set(false);
                }),
            );
    }

    /**
     * Refresh user data from localStorage (balance is stored in user object)
     * Call this after credit purchase to update the balance
     */
    refreshBalance(): void {
        this.getBalance().subscribe();
    }

    /**
     * Get current credit balance from user object
     */
    getBalance() {
        this.loading.set(true);

        this.error.set(null);

        try {
            const userStr = localStorage.getItem('verifik_account') || localStorage.getItem('user');
            const user = userStr ? JSON.parse(userStr) : null;

            if (user) {
                // Use credits directly from user object
                const credits = Number(user.credits) || 0;

                // Use credits as total per user request (backend handles total logic)
                const totalCredits = Math.round(credits * 100) / 100;

                const balance: CreditBalance = {
                    credits: Math.round(credits * 100) / 100,
                    totalCredits: totalCredits,
                };

                this.balance.set(balance);
            } else {
                this.balance.set({
                    credits: 0,
                    totalCredits: 0,
                });
            }
        } catch (err) {
            console.error('Error parsing user data:', err);

            this.error.set('Failed to load credit balance');

            this.balance.set({
                credits: 0,
                totalCredits: 0,
            });
        } finally {
            this.loading.set(false);
        }

        // Return an observable for consistency with other methods
        return of({ data: this.balance() });
    }

    /**
     * Set default payment card
     */
    setDefaultCard(cardId: string) {
        this.loading.set(true);
        this.error.set(null);

        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return this._httpClient
            .put<{
                data: PaymentCard[];
            }>(`${this.apiUrl}/v2/credit-cards/${cardId}/default`, {}, { headers })
            .pipe(
                tap((response) => {
                    // Update cards with new default status
                    this.cards.set(response.data || []);
                }),
                catchError((err) => {
                    console.error('Error setting default card:', err);
                    this.error.set('Failed to set default card');
                    return throwError(() => err);
                }),
                finalize(() => {
                    this.loading.set(false);
                }),
            );
    }

    /**
     * Delete payment card
     */
    deleteCard(cardId: string) {
        this.loading.set(true);
        this.error.set(null);

        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return this._httpClient
            .delete(`${this.apiUrl}/v2/credit-cards/${cardId}`, { headers })
            .pipe(
                tap(() => {
                    // Remove card from list
                    this.cards.update((cards) => cards.filter((card) => card._id !== cardId));
                }),
                catchError((err) => {
                    console.error('Error deleting card:', err);
                    this.error.set('Failed to delete card');
                    return throwError(() => err);
                }),
                finalize(() => {
                    this.loading.set(false);
                }),
            );
    }

    /**
     * Get auto-recharge configuration
     */
    getAutoRechargeConfig() {
        this.loading.set(true);
        this.error.set(null);

        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return this._httpClient
            .get<{
                data: { autoCharge: AutoRechargeConfig };
            }>(`${this.apiUrl}/v2/client-settings?findOne=true`, { headers })
            .pipe(
                tap((response) => {
                    this.autoRechargeConfig.set(response.data?.autoCharge || null);
                }),
                catchError((err) => {
                    console.error('Error fetching auto-recharge config:', err);
                    this.error.set('Failed to load auto-recharge settings');
                    return throwError(() => err);
                }),
                finalize(() => {
                    this.loading.set(false);
                }),
            );
    }

    /**
     * Update auto-recharge configuration
     */
    updateAutoRechargeConfig(config: AutoRechargeConfig) {
        this.loading.set(true);
        this.error.set(null);

        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const userId = JSON.parse(localStorage.getItem('user') || '{}')._id;

        return this._httpClient
            .put<{ data: { autoCharge: AutoRechargeConfig } }>(
                `${this.apiUrl}/v2/client-settings`,
                {
                    client: userId,
                    autoCharge: config,
                },
                { headers },
            )
            .pipe(
                tap((response) => {
                    this.autoRechargeConfig.set(response.data?.autoCharge || null);
                }),
                catchError((err) => {
                    console.error('Error updating auto-recharge config:', err);
                    this.error.set('Failed to update auto-recharge settings');
                    return throwError(() => err);
                }),
                finalize(() => {
                    this.loading.set(false);
                }),
            );
    }
}
