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

export const isThreeDSCreditPurchase = (
  data: CreditPurchaseResponseData,
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
        { headers },
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
        }),
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
        }),
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
      { headers },
    );
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
        data: { path: string };
      }>(`${this.apiUrl}/v2/app-registrations/resume-kyc`, {}, { headers })
      .pipe(
        finalize(() => {
          this.loading.set(false);
        }),
      );
  }
}
