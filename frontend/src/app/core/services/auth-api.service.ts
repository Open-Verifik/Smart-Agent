import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpWrapperService } from './http-wrapper.service';
import { environment } from 'environments/environment';

export interface EmailValidationRequest {
  email: string;
  project: string;
  type: string;
  validationMethod: string;
}

export interface EmailValidationResponse {
  data?: {
    _id: string;
  };
}

export interface EmailValidationValidateRequest {
  otp: string;
  email: string;
  projectFlow: string;
  project: string;
  type: string;
}

export interface PhoneValidationRequest {
  phone: string;
  countryCode: string;
  project: string;
  type: string;
  validationMethod: string;
  phoneGateway?: string; // 'sms' or 'whatsapp'
}

export interface PhoneValidationResponse {
  data?: {
    _id: string;
  };
}

export interface PhoneValidationValidateRequest {
  otp: string;
  phoneValidation: string;
  project: string;
  type: string;
  phone: string;
  countryCode: string;
}

export interface AuthTokenResponse {
  data?: {
    token?: string;
    accessToken?: string;
  };
  token?: string;
  accessToken?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private _httpWrapper = inject(HttpWrapperService);
  private _apiUrl = environment.apiUrl;

  /**
   * Send email OTP for validation
   */
  sendEmailOtp(request: EmailValidationRequest): Observable<EmailValidationResponse> {
    return this._httpWrapper.sendRequest('post', `${this._apiUrl}/v2/email-validations`, request);
  }

  /**
   * Validate email OTP
   */
  validateEmailOtp(request: EmailValidationValidateRequest): Observable<AuthTokenResponse> {
    return this._httpWrapper.sendRequest(
      'post',
      `${this._apiUrl}/v2/email-validations/validate`,
      request,
    );
  }

  /**
   * Send phone OTP for validation
   */
  sendPhoneOtp(request: PhoneValidationRequest): Observable<PhoneValidationResponse> {
    return this._httpWrapper.sendRequest('post', `${this._apiUrl}/v2/phone-validations`, request);
  }

  /**
   * Validate phone OTP
   */
  validatePhoneOtp(request: PhoneValidationValidateRequest): Observable<AuthTokenResponse> {
    return this._httpWrapper.sendRequest(
      'post',
      `${this._apiUrl}/v2/phone-validations/validate`,
      request,
    );
  }

  /**
   * Project Login to get real access token
   */
  projectLogin(): Observable<AuthTokenResponse> {
    return this._httpWrapper.sendRequest('post', `${this._apiUrl}/v2/auth/project-login`, {});
  }

  /**
   * Get user session data
   */
  getSession(): Observable<any> {
    return this._httpWrapper.sendRequest('post', `${this._apiUrl}/v2/auth/session`, {
      origin: 'app',
    });
  }
}
