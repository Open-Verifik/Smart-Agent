import { Injectable } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ClientSubscription, SubscriptionPlan } from './subscription-plan.types';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private baseUrl = environment.apiUrl;

  constructor(private _httpWrapper: HttpWrapperService) {}

  /**
   * Get all available subscription plans
   */
  getSubscriptions(params: any = {}): Observable<{ data: SubscriptionPlan[] }> {
    return this._httpWrapper.sendRequest('get', `${this.baseUrl}/v2/subscription-plans`, params);
  }

  /**
   * Get current user's subscription
   */
  getMySubscription(params: any = {}): Observable<{ data: ClientSubscription }> {
    return this._httpWrapper.sendRequest('get', `${this.baseUrl}/v2/client-subscription-plans`, params);
  }

  /**
   * Change user's subscription plan
   */
  changeMySubscription(data: { id: string }): Observable<any> {
    const requestData = {
      ...data,
      source: 'smart_agent' // Indicate this request comes from Smart Agent
    };
    return this._httpWrapper.sendRequest('put', `${this.baseUrl}/v2/subscription-plans/${data.id}/subscribe`, requestData);
  }

  /**
   * Cancel user's subscription
   */
  cancelSubscription(data: { id: string }): Observable<any> {
    return this._httpWrapper.sendRequest('put', `${this.baseUrl}/v2/client-subscription-plans/${data.id}/cancel`, data);
  }

  /**
   * Get billing configuration
   */
  getBillingConfig(params: any = {}): Observable<any> {
    return this._httpWrapper.sendRequest('get', `${this.baseUrl}/v2/client-settings`, params);
  }

  /**
   * Get payment cards
   */
  getCards(params: any = {}): Observable<any> {
    return this._httpWrapper.sendRequest('get', `${this.baseUrl}/v2/credit-cards`, params);
  }

  /**
   * Create Stripe portal session
   */
  createPortalSession(params: any = {}): Observable<any> {
    const requestParams = {
      ...params,
      source: 'smart_agent' // Indicate this request comes from Smart Agent
    };
    return this._httpWrapper.sendRequest('get', `${this.baseUrl}/v2/subscription-plans/session/portal`, requestParams);
  }

  /**
   * Get app features
   */
  getFeatures(params: any = {}): Observable<any> {
    return this._httpWrapper.sendRequest('get', `${this.baseUrl}/v2/app-features`, params);
  }
}