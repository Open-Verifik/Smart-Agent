import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerifikApiService {
  private _apiUrl = environment.apiUrl;

  constructor(private _httpClient: HttpClient) {}

  /**
   * Get Project by ID (KYC Config)
   * Used for initialization
   */
  getProject(id: string): Observable<any> {
    return this._httpClient.get(`${this._apiUrl}/v2/projects/kyc`, {
      params: { id, type: 'onboarding' },
    });
  }

  /**
   * Get App Registration
   * Check status of current user registration
   */
  getAppRegistration(token: string, populates: string[] = []): Observable<any> {
    return this._httpClient.post(
      `${this._apiUrl}/v2/app-registrations/me`,
      { populates },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
  }

  /**
   * Create App Registration
   * Start the flow
   */
  createAppRegistration(projectId: string, data: any): Observable<any> {
    return this._httpClient.post(`${this._apiUrl}/v2/app-registrations`, {
      project: projectId,
      ...data,
    });
  }

  /**
   * Send OTP (Email/Phone)
   * POST /v2/{type}-validations/app-registration
   * Requires Bearer Token of App Registration
   */
  sendOtp(
    token: string,
    data: {
      project: string;
      type: 'email' | 'phone';
      email?: string;
      phone?: string;
      countryCode?: string;
    },
  ): Observable<any> {
    const isEmail = data.type === 'email';
    const endpoint = isEmail ? 'email-validations' : 'phone-validations';

    const payload: any = {
      project: data.project,
      validationMethod: 'verificationCode',
      type: 'onboarding',
    };

    if (isEmail) {
      payload.email = data.email;
    } else {
      payload.phone = data.phone;
      payload.countryCode = data.countryCode;
    }

    return this._httpClient.post(`${this._apiUrl}/v2/${endpoint}/app-registration`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  /**
   * Verify OTP (Email/Phone)
   * PUT /v2/{type}-validations
   */
  verifyOtp(
    token: string,
    data: {
      project: string;
      projectFlow: string;
      type: 'email' | 'phone';
      email?: string;
      phone?: string;
      countryCode?: string;
      code: string;
    },
  ): Observable<any> {
    const isEmail = data.type === 'email';
    const endpoint = isEmail ? 'email-validations' : 'phone-validations';

    const payload: any = {
      project: data.project,
      projectFlow: data.projectFlow,
      otp: Number(data.code),
    };

    if (isEmail) {
      payload.email = data.email;
    } else {
      payload.phone = data.phone;
      payload.countryCode = data.countryCode;
    }

    return this._httpClient.put(`${this._apiUrl}/v2/${endpoint}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  /**
   * Get Prompt Templates
   * GET /v2/prompt-templates
   */
  getPromptTemplates(token: string, params: any = {}): Observable<any> {
    return this._httpClient.get(`${this._apiUrl}/v2/prompt-templates`, {
      params,
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  /**
   * Create Document Validation
   * POST /v2/document-validations/app-registration
   */
  createDocumentValidation(token: string, data: any): Observable<any> {
    return this._httpClient.post(`${this._apiUrl}/v2/document-validations/app-registration`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
