import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../core/auth/auth.service';
import type {
    BringBackOffer,
    PendingWelcomeCredits,
    SmartAgentWeekOneUsd50Promotion,
} from '../../core/user/user.types';
import { UserService } from '../../core/user/user.service';
import { AuthModalComponent } from '../../layout/common/auth-modal/auth-modal.component';
import {
    extractClientSettingsPayload,
    invoiceBillingDetailsComplete,
} from '../settings/utils/invoice-billing-complete';
import { BillingRequiredDialogComponent } from '../subscription-plans/billing-required-dialog/billing-required-dialog.component';
import { SubscriptionPlan } from '../subscription-plans/subscription-plan.types';
import { SubscriptionService } from '../subscription-plans/subscription.service';
import { AutoRechargeSettingsComponent } from './auto-recharge-settings/auto-recharge-settings.component';
import { PaymentCardComponent } from './payment-card/payment-card.component';
import { PurchaseCreditsDialogComponent } from './purchase-credits-dialog/purchase-credits-dialog.component';
import { CreditsService } from './services/credits.service';
import { BOLD_PENDING_ORDER_KEY, PaymentService } from './services/payment.service';

export type AddCreditsSidebarPlanTier = {
    plan: SubscriptionPlan;
    label: string;
    isBestValue: boolean;
};

/** Reconciliation state of a Bold order the customer just came back from. */
export type BoldReturnState = 'confirming' | 'approved' | 'pending' | 'failed';

/** Bold's webhook can lag ~10 minutes, and sandbox never sends one, so the return URL polls. */
const BOLD_CONFIRM_ATTEMPTS = 5;
const BOLD_CONFIRM_RETRY_MS = 3000;

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
        BillingRequiredDialogComponent,
    ],
    templateUrl: './add-credits.component.html',
    styleUrls: ['./add-credits.component.scss'],
})
export class AddCreditsComponent implements OnInit {
    private _creditsService = inject(CreditsService);
    private _paymentService = inject(PaymentService);
    private _subscriptionService = inject(SubscriptionService);
    private _dialog = inject(MatDialog);
    private _authService = inject(AuthService);
    private _userService = inject(UserService);
    private _activatedRoute = inject(ActivatedRoute);
    private _router = inject(Router);

    // Signals from service
    cards = this._creditsService.cards;
    balance = this._creditsService.balance;
    autoRechargeConfig = this._creditsService.autoRechargeConfig;
    loading = this._creditsService.loading;
    error = this._creditsService.error;

    /** Pricing table tiers for sidebar (monthly plans from API). */
    pricingPlansLoading = signal(false);
    sidebarPlanTiers = signal<AddCreditsSidebarPlanTier[]>([]);

    /** Session-driven first-week promotion (server-calculated eligibility). */
    weekOneUsd50Promotion = signal<SmartAgentWeekOneUsd50Promotion | undefined>(undefined);

    /** Session-driven bring-back win-back offer. */
    bringBackOffer = signal<BringBackOffer | undefined>(undefined);

    /** Signup welcome credits locked until account approval. */
    pendingWelcomeCredits = signal<PendingWelcomeCredits | undefined>(undefined);

    showBringBackPromoBanner = computed(() => Boolean(this.bringBackOffer()?.eligible));

    showWeekOneUsd50PromoBanner = computed(
        () => Boolean(this.weekOneUsd50Promotion()?.eligible) && !this.showBringBackPromoBanner(),
    );

    showPendingWelcomeCreditsBanner = computed(() => {
        const pending = this.pendingWelcomeCredits();
        return Boolean(pending?.lockedUntilApproval && (pending.amount ?? 0) > 0);
    });

    /** Comma-separated promo tier list for the wallet strip, e.g. "$50, $100, $150, $200". */
    weekOneUsd50PromoAmountsLabel = computed(() => {
        const amounts = this.weekOneUsd50Promotion()?.purchaseUsdAmounts ?? [50];
        return amounts.map((a) => `$${a}`).join(', ');
    });

    bringBackExampleReceived = computed(() => {
        const multiplier = this.bringBackOffer()?.multiplier ?? 2;
        return 50 * multiplier;
    });

    /** Outcome banner for an order the customer just paid on Bold's gateway. */
    boldReturnState = signal<BoldReturnState | null>(null);

    /** `GET /v2/client-settings` resolved (success or failure). */
    billingCheckResolved = signal(false);

    /** Invoice billing details sufficient for taxable purchases per subscription-plans rules. */
    hasBillingSetup = signal(false);

    showBillingRequiredModal = false;

    /** Enables purchase/add-card when billing questionnaire is satisfied. */
    billingActionsAllowed = computed(
        () => this.billingCheckResolved() && this.hasBillingSetup(),
    );

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

        this._maybeSyncStripeCheckoutThenLoadData();
        this._maybeConfirmBoldReturn();
        this._loadBillingGateForAddCredits();
    }

    /**
     * Bold redirects to `/add-credits?bold-order-id=...&bold-tx-status=...` after the gateway
     * closes. Credits come from the webhook, so this only reconciles and reports the outcome.
     * @returns True when a Bold order was picked up.
     */
    private _maybeConfirmBoldReturn(): boolean {
        const qp = this._activatedRoute.snapshot.queryParamMap;
        const orderId = qp.get('bold-order-id') ?? localStorage.getItem(BOLD_PENDING_ORDER_KEY);

        if (!orderId) {
            return false;
        }

        localStorage.removeItem(BOLD_PENDING_ORDER_KEY);

        if (qp.get('bold-order-id')) {
            void this._router.navigate(['/add-credits'], { replaceUrl: true });
        }

        this.boldReturnState.set('confirming');
        this._confirmBoldOrder(orderId, 1);

        return true;
    }

    /**
     * @param orderId Order reference sent to Bold.
     * @param attempt 1-based; PSE and delayed webhooks need a few passes before giving up.
     */
    private _confirmBoldOrder(orderId: string, attempt: number): void {
        this._paymentService.confirmBoldPurchase(orderId).subscribe({
            next: (response) => {
                const status = response.data?.transaction?.status;

                if (status === 'approved') {
                    this.boldReturnState.set('approved');
                    this._refreshSessionAndBalance();
                    return;
                }

                if (status === 'failed') {
                    this.boldReturnState.set('failed');
                    return;
                }

                if (attempt >= BOLD_CONFIRM_ATTEMPTS) {
                    this.boldReturnState.set('pending');
                    return;
                }

                setTimeout(
                    () => this._confirmBoldOrder(orderId, attempt + 1),
                    BOLD_CONFIRM_RETRY_MS,
                );
            },
            error: (err) => {
                console.error('Failed to confirm Bold order:', err);
                this.boldReturnState.set('pending');
            },
        });
    }

    dismissBoldReturnNotice(): void {
        this.boldReturnState.set(null);
    }

    private _refreshSessionAndBalance(): void {
        this._authService.refreshSession().subscribe(() => {
            this._creditsService.getBalance().subscribe();
        });
    }

    /**
     * Billing details (invoiceSettings) gate — same completeness as subscription-plans.
     */
    private _loadBillingGateForAddCredits(): void {
        this._subscriptionService.getBillingConfig({ findOne: true }).subscribe({
            next: (response) => {
                const cs = extractClientSettingsPayload(response);
                const inv = cs?.invoiceSettings;
                const ok = invoiceBillingDetailsComplete(inv);

                this.hasBillingSetup.set(ok);
                this.billingCheckResolved.set(true);

                if (!ok) {
                    this.showBillingRequiredModal = true;
                }
            },
            error: (err) => {
                console.error('Error loading billing config:', err);
                this.hasBillingSetup.set(false);
                this.billingCheckResolved.set(true);
                this.showBillingRequiredModal = true;
            },
        });
    }

    goToBillingDetails(): void {
        this.showBillingRequiredModal = false;
        void this._router.navigate(['/settings', 'billing-details'], {
            queryParams: { returnUrl: '/add-credits' },
        });
    }

    /**
     * @returns True when caller should bail (billing missing or awaiting billing GET).
     */
    private _billingGateBlocksPurchaseOrCardSetup(): boolean {
        if (!this.billingCheckResolved()) {
            return true;
        }

        if (this.hasBillingSetup()) {
            return false;
        }

        this.showBillingRequiredModal = true;

        return true;
    }

    /**
     * If Stripe redirects back with Checkout session id, persist card before webhook arrives.
     */
    private _maybeSyncStripeCheckoutThenLoadData(): void {
        const qp = this._activatedRoute.snapshot.queryParamMap;
        const sessionRaw = qp.get('session_id') ?? qp.get('sessionId');

        if (!sessionRaw?.startsWith('cs_')) {
            this.loadData();
            return;
        }

        this._paymentService.syncCheckoutSession(sessionRaw).subscribe({
            next: () => {
                void this._router
                    .navigate(['/add-credits'], { replaceUrl: true })
                    .then(() => this.loadData());
            },
            error: (err) => {
                console.error('Failed to sync card from Stripe Checkout:', err);
                void this._router
                    .navigate(['/add-credits'], { replaceUrl: true })
                    .then(() => this.loadData());
            },
        });
    }

    loadData(): void {
        this.pricingPlansLoading.set(true);
        forkJoin({
            cards: this._creditsService.getCards(),
            balance: this._creditsService.getBalance(),
            autoRecharge: this._creditsService.getAutoRechargeConfig(),
            session: this._userService.get().pipe(
                catchError((err) => {
                    console.error('Failed to load session:', err);
                    return of(null);
                }),
            ),
            pricing: this._subscriptionService
                .getPricingTableDisplay({ lang: this._getCurrentLang() })
                .pipe(
                    catchError((err) => {
                        console.error('Failed to load pricing table for sidebar:', err);
                        return of({ data: { plans: [] as SubscriptionPlan[] } });
                    }),
                ),
        }).subscribe({
            next: (result) => {
                const bringBack = result.session?.bringBackOffer;
                this.bringBackOffer.set(
                    bringBack?.kind === 'bring_back' && bringBack.eligible ? bringBack : undefined,
                );

                const promo = result.session?.promotion;
                this.weekOneUsd50Promotion.set(
                    promo?.kind === 'smart_agent_week1_usd50' ? promo : undefined,
                );

                const pending = result.session?.pendingWelcomeCredits;
                this.pendingWelcomeCredits.set(
                    pending?.lockedUntilApproval && (pending.amount ?? 0) > 0
                        ? pending
                        : undefined,
                );

                const rawPlans = result.pricing?.data?.plans ?? [];
                this.sidebarPlanTiers.set(this._buildSidebarPlanTiers(rawPlans));
                this.pricingPlansLoading.set(false);
                this.cleanupExpiredCards();
            },
            error: (err) => {
                console.error('Failed to load data:', err);
                this.pricingPlansLoading.set(false);
            },
        });
    }

    private _getCurrentLang(): string {
        const lang = (typeof navigator !== 'undefined' && navigator.language) || 'en';
        return lang.startsWith('es') ? 'es' : lang.startsWith('fr') ? 'fr' : 'en';
    }

    /**
     * Aligns with subscription-plans: displayName, monthly only, Basic / Plus / Business when possible.
     */
    private _buildSidebarPlanTiers(plans: SubscriptionPlan[]): AddCreditsSidebarPlanTier[] {
        const monthly = plans.filter((p) => p.interval === 'month');
        const processed: SubscriptionPlan[] = [];
        const seen: Record<string, boolean> = {};

        monthly.forEach((plan) => {
            const withDisplay = plan as SubscriptionPlan & { displayName?: string };
            const name = withDisplay.displayName || plan.name;
            const merged = { ...plan, name };
            if (merged._id && !seen[merged._id]) {
                seen[merged._id] = true;
                processed.push(merged);
            }
        });

        processed.sort((a, b) => (a.amount || 0) - (b.amount || 0));

        const nameOf = (p: SubscriptionPlan) => (p.name || '').toLowerCase();

        const findTier = (kind: 'basic' | 'plus' | 'business'): SubscriptionPlan | undefined => {
            return processed.find((p) => {
                const n = nameOf(p);
                if (kind === 'basic') {
                    return /\bbasic\b/.test(n) || n.includes('básico');
                }
                if (kind === 'plus') {
                    return /\bplus\b/.test(n);
                }
                return (
                    /\bbusiness\b/.test(n) || /\benterprise\b/.test(n) || n.includes('empresarial')
                );
            });
        };

        const basic = findTier('basic');
        const plus = findTier('plus');
        const business = findTier('business');

        const pickedIds = new Set<string>();
        const ordered: SubscriptionPlan[] = [];

        for (const p of [basic, plus, business]) {
            if (p?._id && !pickedIds.has(p._id)) {
                pickedIds.add(p._id);
                ordered.push(p);
            }
        }

        if (ordered.length < 3) {
            for (const p of processed) {
                if (ordered.length >= 3) break;
                if (pickedIds.has(p._id)) continue;
                if (/\bstarter\b/i.test(p.name || '')) continue;
                pickedIds.add(p._id);
                ordered.push(p);
            }
        }

        if (ordered.length < 3) {
            for (const p of processed) {
                if (ordered.length >= 3) break;
                if (pickedIds.has(p._id)) continue;
                pickedIds.add(p._id);
                ordered.push(p);
            }
        }

        const finalTiers = ordered.slice(0, 3);
        const hasPlus = finalTiers.some((p) => /\bplus\b/i.test(p.name || ''));

        return finalTiers.map((plan, index) => ({
            plan,
            label: plan.name,
            isBestValue: hasPlus
                ? /\bplus\b/i.test(plan.name || '')
                : finalTiers.length === 3 && index === 1,
        }));
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
        if (this._billingGateBlocksPurchaseOrCardSetup()) {
            return;
        }

        this._paymentService.createStripeCard().subscribe({
            next: () => {
                // Redirect happens in the service
            },
            error: (err) => {
                console.error('Failed to create Stripe checkout session:', err);
            },
        });
    }

    /**
     * Opens the purchase modal. Credit charge + i18n strings for duplicate/KYC/other API errors live in
     * {@link PurchaseCreditsDialogComponent} and are merged from `public/i18n/{lang}.json` plus `public/i18n/features-{lang}.json`
     * (see `TranslocoHttpLoader`: `addCredits.purchaseDialog.*`).
     *
     * Actual charging, 3DS (`confirmCardPayment`), and `POST /v2/credits/purchase/confirm` are handled in {@link PurchaseCreditsDialogComponent}.
     */
    openPurchaseCreditsDialog(): void {
        if (this._billingGateBlocksPurchaseOrCardSetup()) {
            return;
        }

        const currentCards = this.cards();

        // Without a saved card the dialog still opens: Bold's hosted checkout needs no stored card.
        const cardToUse = this.defaultCard() || currentCards[0];

        const dialogRef = this._dialog.open(PurchaseCreditsDialogComponent, {
            width: '500px',
            maxWidth: '92vw',
            panelClass: 'purchase-credits-dialog-panel',
            data: {
                card: cardToUse,
                promotion: this.weekOneUsd50Promotion(),
                bringBackOffer: this.bringBackOffer(),
            },
        });

        // Refreshes user data when dialog closes successfully or after KYC unlock
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'success' || result?.alreadyCompleted === true) {
                this._refreshSessionAndBalance();
            }
        });
    }

    openAutoRechargeSettings(): void {
        const dialogRef = this._dialog.open(AutoRechargeSettingsComponent, {
            width: '560px',
            maxWidth: '92vw',
            panelClass: 'auto-recharge-dialog-panel',
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

    trackBySidebarTier(_index: number, tier: AddCreditsSidebarPlanTier): string {
        return tier.plan._id;
    }
}
