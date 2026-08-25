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
import type { BringBackOffer, SmartAgentWeekOneUsd50Promotion } from 'app/core/user/user.types';
import { PaymentCard } from '../services/credits.service';
import {
    BoldCheckoutConfig,
    BoldCurrency,
    BoldQuote,
    CreditPurchaseTransaction,
    isThreeDSCreditPurchase,
    PaymentService,
    PurchasePolicy,
} from '../services/payment.service';

export interface PurchaseCreditsDialogData {
    /** Absent when the client has no saved card; the dialog then defaults to Bold. */
    card?: PaymentCard;
    promotion?: SmartAgentWeekOneUsd50Promotion;
    bringBackOffer?: BringBackOffer;
}

/** Stripe charges a saved card; Bold is a hosted checkout (card, PSE, Nequi, Bancolombia). */
export type CreditPaymentMethod = 'stripe' | 'bold';

/** One row in the payment list. Bold appears twice because the currency picks the rails. */
export type CreditPaymentOptionId = 'stripe' | 'bold-usd' | 'bold-cop' | 'pse';

export interface CreditPaymentOption {
    id: CreditPaymentOptionId;
    title: string;
    subtitle: string;
    /** Card brands show their artwork; the rest show a short wordmark. */
    logoSrc?: string;
    logoAlt?: string;
    logoText?: string;
}

const PURCHASE_ERROR_KEYS = {
    stripeNotConfigured: 'addCredits.purchaseDialog.errors.stripeNotConfigured',
    payment3dsFailed: 'addCredits.purchaseDialog.errors.payment3dsFailed',
    paymentFailedImmediate: 'addCredits.purchaseDialog.errors.paymentFailedImmediate',
    duplicateCreditPurchaseQuick: 'addCredits.purchaseDialog.errors.duplicate_credit_purchase_quick',
    duplicateCreditPurchaseSameDay: 'addCredits.purchaseDialog.errors.duplicate_credit_purchase_same_day',
    creditPurchaseInvalidAmount: 'addCredits.purchaseDialog.errors.credit_purchase_invalid_amount',
    boldUnavailable: 'addCredits.purchaseDialog.errors.boldUnavailable',
    boldWholeAmount: 'addCredits.purchaseDialog.errors.boldWholeAmount',
    boldFxUnavailable: 'addCredits.purchaseDialog.errors.boldFxUnavailable',
    firstPurchaseRequiresPse: 'addCredits.purchaseDialog.errors.firstPurchaseRequiresPse',
} as const;

/** Keeps the peso quote from firing on every keystroke of a custom amount. */
const BOLD_QUOTE_DEBOUNCE_MS = 400;


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

    selectedAmount: number | null = null;
    selectedCardId?: string;
    loading = false;
    error: string | null = null;

    paymentMethod: CreditPaymentMethod = 'stripe';

    /** Charge currency for Bold. COP is what unlocks PSE, Nequi and Botón Bancolombia. */
    boldCurrency: BoldCurrency = 'USD';

    /** Peso pricing for the selected amount; null until the quote resolves. */
    boldQuote: BoldQuote | null = null;
    boldQuoteLoading = false;

    /** No USD/COP rate available, so the COP option cannot be offered. */
    boldFxUnavailable = false;

    /**
     * Rails this client may use. Null until it resolves; a failed lookup leaves every option on
     * screen, since the API rejects a forbidden method anyway.
     */
    policy: PurchasePolicy | null = null;

    /**
     * Both pickers fold into their selection once the customer has chosen, so the dialog stops
     * scrolling on shorter screens. They start open because choosing is the point of the dialog.
     */
    amountExpanded = true;
    methodsExpanded = true;

    private _quoteTimer?: ReturnType<typeof setTimeout>;

    // Custom amount support
    isCustomAmount = false;
    customAmountValue: number | null = null;

    /** Preset amounts; minimum purchasable USD is `MIN_CREDIT_PURCHASE_USD` (custom input included). */
    creditAmounts = [49, 50, 100, 150, 200, 250, 500];

    // KYC Requirement support
    kycRequired = false;

    ngOnInit(): void {
        if (this.data?.card) {
            this.selectedCardId = this.data.card._id;
        }

        this.paymentMethod = this.data?.card ? 'stripe' : 'bold';

        this._loadPurchasePolicy();
    }

    /**
     * A restricted client has exactly one way to pay, so the dialog switches to it up front instead
     * of letting them pick something the API will reject.
     */
    private _loadPurchasePolicy(): void {
        this._paymentService.getPurchasePolicy().subscribe({
            next: (response) => {
                this.policy = response.data ?? null;

                if (!this.isPseOnly()) {
                    return;
                }

                this.paymentMethod = 'bold';
                this.boldCurrency = 'COP';

                this._loadBoldQuote();
            },
            error: () => {
                this.policy = null;
            },
        });
    }

    /** First purchase from a Colombian client: PSE only, in pesos. */
    isPseOnly(): boolean {
        return this.policy?.restricted === true;
    }

    selectPaymentMethod(method: CreditPaymentMethod): void {
        if (this.loading || this.isPseOnly() || this.paymentMethod === method) {
            return;
        }

        this.paymentMethod = method;
        this.error = null;
    }

    /** Every rail this client can pick, in the order they are offered. */
    paymentOptions(): CreditPaymentOption[] {
        if (this.isPseOnly()) {
            return [
                {
                    id: 'pse',
                    logoText: 'PSE',
                    title: this._transloco.translate('addCredits.purchaseDialog.bold.optionPse'),
                    subtitle: this._transloco.translate('addCredits.purchaseDialog.bold.methodsPse'),
                },
            ];
        }

        const options: CreditPaymentOption[] = [];

        if (this.data?.card) {
            options.push({
                id: 'stripe',
                logoSrc: this.getCardLogo(this.data.card.brand),
                logoAlt: this.data.card.brand,
                title: `•••• ${this.data.card.lastFour}`,
                subtitle: this._transloco.translate('addCredits.purchaseDialog.savedCard'),
            });
        }

        options.push({
            id: 'bold-usd',
            logoText: 'Bold',
            title: this._transloco.translate('addCredits.purchaseDialog.bold.optionUsd'),
            subtitle: this._transloco.translate('addCredits.purchaseDialog.bold.methodsUsd'),
        });

        if (!this.boldFxUnavailable) {
            options.push({
                id: 'bold-cop',
                logoText: 'Bold',
                title: this._transloco.translate('addCredits.purchaseDialog.bold.optionCop'),
                subtitle: this._transloco.translate('addCredits.purchaseDialog.bold.methodsCop'),
            });
        }

        return options;
    }

    /** Collapsed, only the chosen rail stays on screen. */
    visiblePaymentOptions(): CreditPaymentOption[] {
        const options = this.paymentOptions();

        if (this.methodsExpanded) {
            return options;
        }

        return options.filter((option) => this.isPaymentOptionSelected(option.id));
    }

    isPaymentOptionSelected(id: CreditPaymentOptionId): boolean {
        if (id === 'pse') {
            return true;
        }

        if (id === 'stripe') {
            return this.paymentMethod === 'stripe';
        }

        return this.isBoldOptionSelected(id === 'bold-cop' ? 'COP' : 'USD');
    }

    /** A lone option has nothing to fold away, so it never offers the toggle. */
    canCollapsePaymentOptions(): boolean {
        return this.paymentOptions().length > 1;
    }

    selectPaymentOption(id: CreditPaymentOptionId): void {
        if (this.loading) {
            return;
        }

        if (id === 'stripe') {
            this.selectPaymentMethod('stripe');
        } else if (id !== 'pse') {
            this.selectBoldOption(id === 'bold-cop' ? 'COP' : 'USD');
        }

        this.methodsExpanded = false;
    }

    expandPaymentOptions(): void {
        if (this.loading || !this.canCollapsePaymentOptions()) {
            return;
        }

        this.methodsExpanded = true;
    }

    /**
     * Bold decides the rails from the checkout currency, so picking an option is picking a currency.
     * @param currency USD (card only) or COP (card, PSE, Nequi, Bancolombia).
     */
    selectBoldOption(currency: BoldCurrency): void {
        if (this.loading || (this.paymentMethod === 'bold' && this.boldCurrency === currency)) {
            return;
        }

        // Restricted clients are locked to the peso checkout, the only one that offers PSE.
        if (this.isPseOnly() && currency !== 'COP') {
            return;
        }

        this.paymentMethod = 'bold';
        this.boldCurrency = currency;
        this.error = null;

        this._scheduleBoldQuote();
    }

    isBoldOptionSelected(currency: BoldCurrency): boolean {
        return this.paymentMethod === 'bold' && this.boldCurrency === currency;
    }

    /** Peso total formatted the way Colombian customers expect (304.900 COP). */
    boldCopTotalLabel(): string {
        if (!this.boldQuote || this.boldQuote.currency !== 'COP') {
            return '';
        }

        return `${new Intl.NumberFormat('es-CO').format(this.boldQuote.total)} COP`;
    }

    boldExchangeRateLabel(): string {
        if (!this.boldQuote || this.boldQuote.currency !== 'COP') {
            return '';
        }

        return new Intl.NumberFormat('es-CO', { maximumFractionDigits: 2 }).format(
            this.boldQuote.exchangeRate
        );
    }

    private _scheduleBoldQuote(): void {
        clearTimeout(this._quoteTimer);

        if (this.boldCurrency !== 'COP' || this.paymentMethod !== 'bold') {
            this.boldQuote = null;
            return;
        }

        this._quoteTimer = setTimeout(() => this._loadBoldQuote(), BOLD_QUOTE_DEBOUNCE_MS);
    }

    private _loadBoldQuote(): void {
        if (!this.isValidAmount()) {
            this.boldQuote = null;
            return;
        }

        this.boldQuoteLoading = true;

        this._paymentService.getBoldQuote(this.selectedAmount as number, 'COP').subscribe({
            next: (response) => {
                this.boldQuoteLoading = false;
                this.boldQuote = response.data ?? null;
                this.boldFxUnavailable = false;
            },
            error: (err) => {
                this.boldQuoteLoading = false;
                this.boldQuote = null;

                const slug = `${(err as { error?: { message?: string } })?.error?.message ?? ''}`;

                if (!slug.includes('bold_fx_unavailable')) {
                    return;
                }

                // Without a rate the peso price would be a guess, so fall back to the USD option.
                this.boldFxUnavailable = true;
                this.boldCurrency = 'USD';
            },
        });
    }

    showBringBackCreditsHint(): boolean {
        const offer = this.data?.bringBackOffer;

        if (!offer?.eligible || this.loading) {
            return false;
        }

        const active = this.isCustomAmount ? Number(this.customAmountValue) : this.selectedAmount;

        return Number.isFinite(active) && active >= this.minPurchaseUsd;
    }

    bringBackReceivedAmount(): number {
        const multiplier = this.data?.bringBackOffer?.multiplier ?? 2;
        const active = this.isCustomAmount ? Number(this.customAmountValue) : this.selectedAmount;

        return Math.round(active * multiplier);
    }

    showWeekOneDoubleCreditsHint(): boolean {
        if (this.showBringBackCreditsHint()) {
            return false;
        }

        const p = this.data?.promotion;

        if (!p?.eligible || this.loading) {
            return false;
        }

        const min = p.minPurchaseUsd ?? this.minPurchaseUsd;
        const active = this._activePurchaseUsd();

        return Number.isFinite(active) && active >= min;
    }

    /** Pay amount currently in the dialog, whether a preset or a typed custom value. */
    weekOneDoublePayAmount(): number {
        return this._activePurchaseUsd();
    }

    /** Purchase plus the matched bonus, respecting the server-side cap. */
    weekOneDoubleReceivedAmount(): number {
        const active = this._activePurchaseUsd();
        const cap = this.data?.promotion?.maxBonusUsd ?? this.maxPurchaseUsd;
        const bonus = Math.min(active, cap);

        return active + bonus;
    }

    private _activePurchaseUsd(): number {
        if (this.isCustomAmount) {
            return Number(this.customAmountValue);
        }

        return this.selectedAmount ?? Number.NaN;
    }

    hasSelectedAmount(): boolean {
        return Number.isFinite(this._activePurchaseUsd());
    }

    selectPresetAmount(amount: number): void {
        this.isCustomAmount = false;
        this.customAmountValue = null;
        this.selectedAmount = amount;
        this.amountExpanded = false;

        this._scheduleBoldQuote();
    }

    expandAmounts(): void {
        if (this.loading) {
            return;
        }

        this.amountExpanded = true;
    }

    /** Folds a typed amount away once it is usable, matching what picking a preset does. */
    onCustomAmountCommitted(): void {
        if (!this.isValidAmount()) {
            return;
        }

        this.amountExpanded = false;
    }

    toggleCustomAmount(): void {
        this.isCustomAmount = !this.isCustomAmount;
        if (this.isCustomAmount) {
            this.customAmountValue =
                this.selectedAmount != null && this.selectedAmount >= MIN_CREDIT_PURCHASE_USD
                    ? this.selectedAmount
                    : null;
            this.selectedAmount = this.customAmountValue;
        }

        this._scheduleBoldQuote();
    }

    onCustomAmountChange(value: number): void {
        this.customAmountValue = value;
        this.selectedAmount = value || null;

        this._scheduleBoldQuote();
    }

    isValidAmount(): boolean {
        const amount = this._activePurchaseUsd();
        const inRange =
            Number.isFinite(amount) &&
            amount >= MIN_CREDIT_PURCHASE_USD &&
            amount <= MAX_CREDIT_PURCHASE_USD;

        if (!inRange) {
            return false;
        }

        // Bold's integrity hash covers the amount as whole units, so cents cannot be charged.
        return this.paymentMethod !== 'bold' || Number.isInteger(amount);
    }

    canSubmit(): boolean {
        if (this.loading || !this.isValidAmount()) {
            return false;
        }

        return this.paymentMethod === 'bold' || Boolean(this.selectedCardId);
    }

    close(): void {
        this._dialogRef.close();
    }

    startKyc(): void {
        this.loading = true;

        this._paymentService.resumeKYC().subscribe({
            next: (response) => {
                this.loading = false;
                if (response.data?.alreadyCompleted || (!response.data?.path && response.data?.canRecharge === true)) {
                    this._dialogRef.close({ alreadyCompleted: true });
                    return;
                }

                if (response.data?.path && environment.kycBaseUrl) {
                    const kycUrl = `${environment.kycBaseUrl}${response.data.path}`;
                    window.open(kycUrl, '_blank');
                    this._dialogRef.close();
                }
            },
            error: (err) => {
                this.loading = false;
                this.error = this._transloco.translate(
                    'addCredits.purchaseDialog.errors.kycVerificationStartFailed'
                );
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
        return this._transloco.translate(PURCHASE_ERROR_KEYS[key]);
    }

    /** Maps `/v2/credits/purchase` API error bodies to localized text. */
    private _purchaseCreditsApiError(err: unknown): string {
        const slug = `${(err as { error?: { message?: string } })?.error?.message ?? ''}`;

        if (slug.includes('duplicate_credit_purchase_quick')) {
            return this._translatePurchaseError('duplicateCreditPurchaseQuick');
        }
        if (slug.includes('duplicate_credit_purchase_same_day')) {
            return this._translatePurchaseError('duplicateCreditPurchaseSameDay');
        }
        if (slug.includes('credit_purchase_invalid_amount')) {
            return this._translatePurchaseError('creditPurchaseInvalidAmount');
        }
        if (slug.includes('bold_amount_must_be_whole')) {
            return this._translatePurchaseError('boldWholeAmount');
        }
        if (slug.includes('bold_fx_unavailable')) {
            return this._translatePurchaseError('boldFxUnavailable');
        }
        if (slug.includes('first_purchase_requires_pse')) {
            return this._translatePurchaseError('firstPurchaseRequiresPse');
        }
        if (slug.includes('bold_pse_amount_out_of_range')) {
            return this._translatePurchaseError('creditPurchaseInvalidAmount');
        }
        if (
            slug.includes('bold_not_configured') ||
            slug.includes('bold_voucher_lookup_failed') ||
            slug.includes('bold_payment_link')
        ) {
            return this._translatePurchaseError('boldUnavailable');
        }

        const raw = slug.trim();

        return raw || this._transloco.translate('addCredits.purchaseDialog.errors.purchaseFailed');
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

    /**
     * True when the API rejected the purchase because the client still needs KYC/approval.
     */
    private _isKycRequiredError(err: { error?: { code?: string; message?: string } }): boolean {
        return (
            err.error?.code === 'client_cannot_recharge_needs_kyc' ||
            Boolean(err.error?.message?.includes('kyc'))
        );
    }

    /**
     * Hands the order to Bold's gateway. Bold navigates to `/add-credits?bold-order-id=...` when the
     * customer finishes, where {@link AddCreditsComponent} reconciles it, so this dialog closes as
     * soon as the gateway is open.
     */
    private _purchaseWithBold(): void {
        this.loading = true;
        this.error = null;

        this._paymentService
            .createBoldCheckout({
                amount: this.selectedAmount,
                currency: this.boldCurrency,
                origin: 'smart_agent',
            })
            .subscribe({
                next: (response) => void this._openBoldCheckout(response.data),
                error: (err) => {
                    this.loading = false;

                    if (this._isKycRequiredError(err)) {
                        this.kycRequired = true;
                        this.error = null;
                        return;
                    }

                    this.error = this._purchaseCreditsApiError(err);
                },
            });
    }

    /**
     * A PSE-only order is a hosted link the browser navigates to; everything else opens Bold's
     * embedded modal, whose library is only fetched at that point.
     */
    private async _openBoldCheckout(config: BoldCheckoutConfig): Promise<void> {
        try {
            if (config.mode === 'redirect') {
                // Leaves the spinner up: the page is on its way to Bold.
                this._paymentService.redirectToBoldCheckout(config);
                return;
            }

            await this._paymentService.loadBoldCheckoutScript();

            this._paymentService.openBoldCheckout(config);
        } catch {
            this.loading = false;
            this.error = this._translatePurchaseError('boldUnavailable');
            return;
        }

        this.loading = false;
        this._dialogRef.close('bold-checkout-opened');
    }

    purchase(): void {
        if (this.paymentMethod === 'bold') {
            if (!Number.isInteger(this.selectedAmount)) {
                this.error = this._translatePurchaseError('boldWholeAmount');
                return;
            }

            this._purchaseWithBold();
            return;
        }

        if (!this.selectedCardId) {
            this.error = this._transloco.translate(
                'addCredits.purchaseDialog.errors.selectPaymentMethod'
            );
            return;
        }

        if (!this.isValidAmount()) {
            this.error = this._transloco.translate(
                'addCredits.purchaseDialog.errors.amountOutOfRange',
                {
                    minUsd: `$${MIN_CREDIT_PURCHASE_USD}`,
                    maxUsd: `$${MAX_CREDIT_PURCHASE_USD.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })}`,
                }
            );
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
                        this.error = this._transloco.translate(
                            'addCredits.purchaseDialog.errors.purchaseFailed'
                        );
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
                        this.error = this._transloco.translate(
                            'addCredits.purchaseDialog.errors.paymentPendingVerification'
                        );
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

                    if (this._isKycRequiredError(err)) {
                        this.kycRequired = true;
                        this.error = null; // Clear error to show pure KYC state
                        return;
                    }

                    this.error = this._purchaseCreditsApiError(err);
                },
            });
    }
}
