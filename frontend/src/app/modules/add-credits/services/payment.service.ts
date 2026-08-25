import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { catchError, finalize, tap, throwError } from 'rxjs';

export interface StripeCheckoutSession {
    url: string;
}

export interface CreditPurchaseRequest {
    amount: number;
    cardId: string;
    currency?: string;
    origin?: string;
    /** Must match gateway used when listing cards (see {@link CreditsService.getCards}). */
    gatewayProvider?: string;
}

/** Saved Transaction from API (Mongoose document shape). */
export interface CreditPurchaseTransaction {
    _id?: string;
    status?: 'approved' | 'pending' | 'failed' | string;
    amount?: number;
    [key: string]: unknown;
}

/** Response when Stripe requires 3DS (client must run confirmCardPayment). */
export interface CreditPurchaseThreeDSData {
    requiresAction: true;
    clientSecret: string;
    paymentIntentId: string;
    stripePublishableKey: string;
    stripeStatus?: string;
    transaction: CreditPurchaseTransaction;
}

export type CreditPurchaseResponseData = CreditPurchaseTransaction | CreditPurchaseThreeDSData;

export interface CreditPurchaseResponse {
    data: CreditPurchaseResponseData;
    message?: string;
}

/**
 * Charge currency for a Bold order. Bold only offers PSE, Nequi and Botón Bancolombia on COP
 * checkouts; USD is card-only. Credits are always priced in USD either way.
 */
export type BoldCurrency = 'USD' | 'COP';

/** Rails Bold will offer for the chosen currency, as reported by the backend. */
export type BoldMethod = 'card' | 'pse' | 'nequi' | 'bancolombia';

/**
 * Which rails this client may pay with. A Colombian client's first purchase is restricted to PSE (a
 * bank transfer that cannot be charged back); everything unlocks once one payment is approved.
 */
export interface PurchasePolicy {
    restricted: boolean;
    isColombian: boolean;
    hasApprovedPurchase: boolean;
    allowedMethods: BoldMethod[] | null;
}

/** Priced checkout, so the dialog can show the peso total before opening the gateway. */
export interface BoldQuote {
    usdAmount: number;
    currency: BoldCurrency;
    /** Amount actually charged, in `currency` (whole COP, or the same USD figure). */
    total: number;
    exchangeRate: number;
    methods: BoldMethod[];
    restricted?: boolean;
    allowedMethods?: BoldMethod[] | null;
}

/**
 * Server-signed config for `new BoldCheckout(...)`; the integrity hash is never built client-side.
 * A restricted client gets `mode: 'redirect'` and a hosted `url` instead, since Bold's button cannot
 * limit which rails it offers.
 */
export interface BoldCheckoutConfig {
    orderId: string;
    transactionId?: string;
    mode?: 'embedded' | 'redirect';
    /** Hosted PSE-only checkout to navigate to; only set when `mode` is `redirect`. */
    url?: string;
    restricted?: boolean;
    amount: string;
    currency: BoldCurrency;
    usdAmount?: number;
    exchangeRate?: number;
    methods?: BoldMethod[];
    apiKey: string;
    integritySignature: string;
    description: string;
    redirectionUrl: string;
    originUrl?: string;
    renderMode?: string;
    /** True while Bold runs on sandbox keys (gateway shows a "Modo de pruebas" badge). */
    testMode?: boolean;
    customerData?: string;
}

export interface BoldConfirmData {
    finalized?: boolean;
    updated?: boolean;
    pending?: boolean;
    abandoned?: boolean;
    skipped?: boolean;
    reason?: string;
    transaction?: CreditPurchaseTransaction;
}

/**
 * What the customer is told about a Bold order. `abandoned` is a checkout that was opened and never
 * paid, which the gateway reports the same way as one still in flight until it ages out.
 */
export type BoldOrderState = 'pending' | 'approved' | 'failed' | 'abandoned';

/** One unresolved Bold order, re-polled against the gateway when the page loads. */
export interface BoldOpenOrder {
    orderId: string;
    state: BoldOrderState;
    usdAmount: number;
    currency: BoldCurrency;
    total: number;
    paymentMethod?: string;
    ageMinutes: number;
    createdAt?: string;
}

/** Marker written by the first version of the return flow; only read now so it can be discarded. */
const LEGACY_BOLD_PENDING_ORDER_KEY = 'bold_pending_order_id';

const BOLD_CHECKOUT_SCRIPT_URL = 'https://checkout.bold.co/library/boldPaymentButton.js';

interface BoldCheckoutInstance {
    open: () => void;
    getConfig: (key: string) => string;
    updateConfig: (key: string, value: string) => void;
}

declare global {
    interface Window {
        BoldCheckout?: new (config: Record<string, string>) => BoldCheckoutInstance;
    }
}

export const isThreeDSCreditPurchase = (
    data: CreditPurchaseResponseData
): data is CreditPurchaseThreeDSData => {
    return (
        typeof data === 'object' &&
        data !== null &&
        'requiresAction' in data &&
        (data as CreditPurchaseThreeDSData).requiresAction === true
    );
};

@Injectable({
    providedIn: 'root',
})
export class PaymentService {
    loading = signal<boolean>(false);
    error = signal<string | null>(null);

    private apiUrl = environment.apiUrl;

    private _boldScriptPromise?: Promise<void>;

    constructor(private _httpClient: HttpClient) {}

    /**
     * Create Stripe checkout session for adding a new card
     * This redirects to Stripe's hosted checkout page
     */
    createStripeCard() {
        this.loading.set(true);
        this.error.set(null);

        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return this._httpClient
            .post<{ data: StripeCheckoutSession }>(
                `${this.apiUrl}/v2/credit-cards/stripe`,
                {
                    method: 'createCheckoutSession',
                    paymentGateway: 'stripe',
                },
                { headers }
            )
            .pipe(
                tap((response) => {
                    // Redirect to Stripe checkout
                    if (response.data?.url) {
                        window.location.href = response.data.url;
                    }
                }),
                catchError((err) => {
                    console.error('Error creating Stripe checkout session:', err);
                    this.error.set('Failed to initialize payment form');
                    return throwError(() => err);
                }),
                finalize(() => {
                    this.loading.set(false);
                })
            );
    }

    /**
     * After Stripe redirects from Checkout setup (success_url includes session_id).
     */
    syncCheckoutSession(sessionId: string) {
        this.error.set(null);

        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return this._httpClient.post<{ data: unknown }>(
            `${this.apiUrl}/v2/credit-cards/stripe/sync-checkout-session`,
            { sessionId },
            { headers }
        );
    }

    /**
     * Purchase credits (may return requiresAction for 3DS — handle in UI).
     */
    purchaseCredits(request: CreditPurchaseRequest) {
        this.error.set(null);

        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const payload = {
            amount: request.amount,
            cardId: request.cardId,
            currency: request.currency || 'USD',
            origin: request.origin || 'smart_agent',
            gatewayProvider: request.gatewayProvider ?? 'stripe',
        };

        return this._httpClient
            .post<CreditPurchaseResponse>(`${this.apiUrl}/v2/credits/purchase`, payload, {
                headers,
            })
            .pipe(
                catchError((err) => {
                    console.error('Error purchasing credits:', err);
                    this.error.set(err.error?.message || 'Failed to purchase credits');
                    return throwError(() => err);
                })
            );
    }

    /**
     * After Stripe.js completes 3DS, sync credits (backup to webhook).
     */
    confirmCreditPurchase(paymentIntentId: string) {
        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return this._httpClient.post<{ data: unknown }>(
            `${this.apiUrl}/v2/credits/purchase/confirm`,
            { paymentIntentId },
            { headers }
        );
    }

    /**
     * Which payment methods this client may use. Resolved server-side from billing country and
     * payment history, so the dialog never has to guess.
     */
    getPurchasePolicy() {
        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return this._httpClient.get<{ data: PurchasePolicy }>(
            `${this.apiUrl}/v2/credits/purchase-policy`,
            { headers }
        );
    }

    /**
     * Prices a Bold order without creating one. Fails with `bold_fx_unavailable` when no USD/COP
     * rate can be resolved, in which case only the USD option is offerable.
     */
    getBoldQuote(amount: number, currency: BoldCurrency) {
        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return this._httpClient.get<{ data: BoldQuote }>(`${this.apiUrl}/v2/credits/bold/quote`, {
            headers,
            params: { amount, currency },
        });
    }

    /**
     * Opens a Bold order (hosted checkout, no saved card). Returns the signed config the browser
     * hands to Bold; credits are only granted once Bold confirms the sale.
     */
    createBoldCheckout(request: { amount: number; currency?: BoldCurrency; origin?: string }) {
        this.error.set(null);

        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return this._httpClient.post<{ data: BoldCheckoutConfig }>(
            `${this.apiUrl}/v2/credits/bold/checkout`,
            {
                amount: request.amount,
                currency: request.currency || 'USD',
                origin: request.origin || 'smart_agent',
            },
            { headers }
        );
    }

    /**
     * After Bold redirects back, reconcile that specific order (fallback for a delayed or sandbox
     * webhook).
     */
    confirmBoldPurchase(orderId: string) {
        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return this._httpClient.post<{ data: BoldConfirmData }>(
            `${this.apiUrl}/v2/credits/bold/confirm`,
            { orderId },
            { headers }
        );
    }

    /**
     * Re-polls every Bold order this client left open, asking the gateway again for each. The server
     * owns that list, so a checkout is still followed up on days later or from another device — and
     * an order nobody ever paid is reported as `abandoned` instead of pending forever.
     */
    reconcileBoldOrders() {
        // Predecessor of this call kept the order in localStorage, where it outlived the checkout.
        localStorage.removeItem(LEGACY_BOLD_PENDING_ORDER_KEY);

        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return this._httpClient.post<{ data: { orders: BoldOpenOrder[] } }>(
            `${this.apiUrl}/v2/credits/bold/reconcile`,
            {},
            { headers }
        );
    }

    /**
     * Bold's checkout library is only fetched when the user actually picks Bold.
     */
    loadBoldCheckoutScript(): Promise<void> {
        if (window.BoldCheckout) {
            return Promise.resolve();
        }

        if (!this._boldScriptPromise) {
            this._boldScriptPromise = new Promise<void>((resolve, reject) => {
                const script = document.createElement('script');

                script.src = BOLD_CHECKOUT_SCRIPT_URL;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => {
                    this._boldScriptPromise = undefined;
                    reject(new Error('bold_script_load_failed'));
                };

                document.head.appendChild(script);
            });
        }

        return this._boldScriptPromise;
    }

    /**
     * Opens Bold's gateway over the current page. Bold navigates to `redirectionUrl` when the
     * customer finishes, so the caller should not wait for a result.
     */
    openBoldCheckout(config: BoldCheckoutConfig): void {
        if (!window.BoldCheckout) {
            throw new Error('bold_script_load_failed');
        }

        const checkout = new window.BoldCheckout({
            orderId: config.orderId,
            currency: config.currency,
            amount: config.amount,
            apiKey: config.apiKey,
            integritySignature: config.integritySignature,
            description: config.description,
            redirectionUrl: config.redirectionUrl,
            renderMode: config.renderMode || 'embedded',
            ...(config.originUrl ? { originUrl: config.originUrl } : {}),
            ...(config.customerData ? { customerData: config.customerData } : {}),
        });

        checkout.open();
    }

    /**
     * Sends the customer to a hosted Bold checkout (the PSE-only link a restricted first purchase
     * gets). Nothing is kept in the browser: the pending order lives in the database, so the return
     * page reconciles it even if Bold comes back without query parameters.
     */
    redirectToBoldCheckout(config: BoldCheckoutConfig): void {
        if (!config.url) {
            throw new Error('bold_missing_checkout_url');
        }

        window.location.href = config.url;
    }

    /**
     * Resume KYC process
     */
    resumeKYC() {
        this.loading.set(true);
        const token = localStorage.getItem('accessToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        return this._httpClient
            .post<{
                data: {
                    path?: string | null;
                    alreadyCompleted?: boolean;
                    canRecharge?: boolean;
                    approvalAction?: string;
                };
            }>(`${this.apiUrl}/v2/app-registrations/resume-kyc`, {}, { headers })
            .pipe(
                finalize(() => {
                    this.loading.set(false);
                })
            );
    }
}
