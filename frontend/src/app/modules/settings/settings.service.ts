import { Injectable } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface TokenRenewalResponse {
  accessToken: string;
  tokenType: string;
}

export interface TokenRevokeResponse {
  token: string;
}

export interface ProfileData {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  countryCode?: string;
  company?: string;
  address?: string;
  avatar?: string;
}

export interface ProfileUpdateResponse {
  data: ProfileData;
}

export interface BillingAddress {
  address: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
}

export interface BillingPerson {
  person_name: string;
  person_documentType: string;
  person_documentNumber: string;
  person_countryCode: string;
  person_country: string;
  person_phone: string;
  person_email: string;
}

export interface BillingBusiness {
  business_name: string;
  business_documentType: string;
  business_documentNumber: string;
  business_countryCode: string;
  business_country: string;
  business_phone: string;
  business_email: string;
  business_legalRepresentative: string;
}

export interface InvoiceSettings {
  invoiceType: string;
  type: 'business' | 'person';
  business: BillingBusiness | null;
  person: BillingPerson | null;
  address: BillingAddress;
}

export interface ClientSettings {
  _id?: string;
  accountType: string;
  testAccount: boolean;
  invoiceSettings: InvoiceSettings;
  sendEmailNotifications: boolean;
  client: string;
}

export interface BillingConfigResponse {
  data: ClientSettings;
}

export interface Workspace {
  _id?: string;
  name: string;
  avatar?: string;
  client: string;
}

export interface WorkspaceResponse {
  data: Workspace;
}

export interface StaffMember {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  role: 'empleado' | 'contabilidad' | 'desarrollador' | 'administrador';
  client: string;
  status?: 'active' | 'pending' | 'inactive';
  avatar?: string;
}

export interface StaffListResponse {
  data: StaffMember[];
}

export interface StaffResponse {
  data: StaffMember;
}

/**
 * Settings Service
 * Handles API key management operations including token renewal and revocation
 *
 * API Documentation:
 * - Renew Token: GET /v2/auth/session?origin=refresh&expiresIn={months}
 * - Revoke & Generate: POST /v2/auth/renew-and-revoke
 */
@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  /**
   * The Verifik API URL for authentication endpoints
   * Uses apiUrl from environment (e.g., https://verifik.app)
   */
  private readonly apiUrl = environment.apiUrl;

  constructor(private _httpWrapper: HttpWrapperService) {}

  /**
   * Get the current access token from localStorage
   */
  get accessToken(): string {
    return localStorage.getItem('accessToken') || '';
  }

  /**
   * Set the access token in localStorage
   */
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  /**
   * Renew the current token with a new expiration period
   *
   * @param expiresIn - Number of months for token validity (1-120+)
   * @returns Observable with the new access token
   *
   * API: GET /v2/auth/session?origin=refresh&expiresIn={months}
   * Docs: https://docs.verifik.co/authentication/renew-your-token-jwt
   */
  renewToken(expiresIn: number = 1): Observable<TokenRenewalResponse> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/auth/session`;
    const params = {
      origin: 'refresh',
      expiresIn: expiresIn.toString(),
    };

    return this._httpWrapper.sendRequest('get', url, params).pipe(
      map((response: TokenRenewalResponse) => {
        if (response?.accessToken) {
          // Update localStorage with the new token
          this.accessToken = response.accessToken;
        }
        return response;
      }),
      catchError((error) => {
        console.error('[SettingsService] Token renewal failed:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Revoke all previous tokens and generate a new one
   *
   * This service performs two actions:
   * 1. Expires all tokens that were previously generated
   * 2. Creates an entirely new token (valid for 30 days)
   *
   * @returns Observable with the new token
   *
   * API: POST /v2/auth/renew-and-revoke
   * Docs: https://docs.verifik.co/authentication/create-new-token-and-revoke-previous-tokens
   */
  revokeAndGenerateNew(): Observable<TokenRevokeResponse> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/auth/renew-and-revoke`;

    return this._httpWrapper.sendRequest('post', url, {}).pipe(
      map((response: TokenRevokeResponse) => {
        // The response can have either 'token' or 'accessToken'
        const newToken = response?.token || (response as any)?.accessToken;
        if (newToken) {
          // Update localStorage with the new token
          this.accessToken = newToken;
        }
        return response;
      }),
      catchError((error) => {
        console.error('[SettingsService] Token revocation failed:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Get masked version of a token for display
   * Shows first 12 and last 12 characters
   */
  getMaskedToken(token: string): string {
    if (!token) return '';
    const visibleChars = 12;
    if (token.length <= visibleChars * 2) {
      return '•'.repeat(token.length);
    }
    const start = token.substring(0, visibleChars);
    const end = token.substring(token.length - visibleChars);
    const middleLength = token.length - visibleChars * 2;
    return `${start}${'•'.repeat(Math.min(middleLength, 20))}${end}`;
  }

  // ============================================
  // Profile Management
  // ============================================

  /**
   * Get the user profile from localStorage
   */
  getStoredProfile(): ProfileData | null {
    const userStr = localStorage.getItem('verifik_account') || localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  /**
   * Update user profile in localStorage
   */
  updateStoredProfile(profile: ProfileData): void {
    // Try to preserve existing workspace data
    const existingUserStr = localStorage.getItem('verifik_account') || localStorage.getItem('user');
    const existingUser = existingUserStr ? JSON.parse(existingUserStr) : {};

    const updatedUser = {
      ...existingUser,
      ...profile,
    };

    // Update in the appropriate storage key
    if (localStorage.getItem('verifik_account')) {
      localStorage.setItem('verifik_account', JSON.stringify(updatedUser));
    } else {
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  }

  /**
   * Update user profile on the server
   *
   * @param userId - The user's ID
   * @param profileData - The profile data to update
   * @returns Observable with the updated profile
   *
   * API: PUT /v2/client/{userId}
   */
  updateProfile(
    userId: string,
    profileData: Partial<ProfileData>,
  ): Observable<ProfileUpdateResponse> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/clients/${userId}`;

    return this._httpWrapper.sendRequest('put', url, profileData).pipe(
      map((response: ProfileUpdateResponse) => {
        if (response?.data) {
          // Update localStorage with the updated profile
          this.updateStoredProfile(response.data);
        }
        return response;
      }),
      catchError((error) => {
        console.error('[SettingsService] Profile update failed:', error);
        return throwError(() => error);
      }),
    );
  }

  // ============================================
  // Billing Configuration
  // ============================================

  /**
   * Get billing configuration for the current client
   *
   * @param clientId - The client's ID
   * @returns Observable with the billing configuration
   *
   * API: GET /v2/client-settings?where_client={clientId}&findOne=true
   */
  getBillingConfig(clientId: string): Observable<BillingConfigResponse> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/client-settings`;
    const params = {
      where_client: clientId,
      findOne: 'true',
    };

    return this._httpWrapper.sendRequest('get', url, params).pipe(
      catchError((error) => {
        console.error('[SettingsService] Get billing config failed:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Create or update billing configuration
   *
   * @param billingData - The billing data to save
   * @returns Observable with the updated billing configuration
   *
   * API: POST /v2/client-settings
   */
  saveBillingConfig(billingData: Partial<ClientSettings>): Observable<BillingConfigResponse> {
    if (!this.accessToken) return throwError(() => new Error('No access token available'));
    

    const url = `${this.apiUrl}/v2/client-settings`;

    return this._httpWrapper.sendRequest('post', url, billingData).pipe(
      catchError((error) => {
        console.error('[SettingsService] Save billing config failed:', error);
        return throwError(() => error);
      }),
    );
  }

  // ============================================
  // Workspace Management
  // ============================================

  /**
   * Get workspace for the current client
   *
   * @param clientId - The client's ID
   * @returns Observable with the workspace data
   *
   * API: GET /v2/workspaces?where_client={clientId}&findOne=1
   */
  getWorkspace(clientId: string): Observable<WorkspaceResponse> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/work-spaces`;
    const params = {
      where_client: clientId,
      findOne: '1',
    };

    return this._httpWrapper.sendRequest('get', url, params).pipe(
      catchError((error) => {
        console.error('[SettingsService] Get workspace failed:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Create a new workspace
   *
   * @param workspaceData - The workspace data to create
   * @returns Observable with the created workspace
   *
   * API: POST /v2/work-spaces
   */
  createWorkspace(workspaceData: Partial<Workspace>): Observable<WorkspaceResponse> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/work-spaces`;

    return this._httpWrapper.sendRequest('post', url, workspaceData).pipe(
      catchError((error) => {
        console.error('[SettingsService] Create workspace failed:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Update an existing workspace
   *
   * @param workspaceId - The workspace ID
   * @param workspaceData - The workspace data to update
   * @returns Observable with the updated workspace
   *
   * API: PUT /v2/work-spaces/{workspaceId}
   */
  updateWorkspace(
    workspaceId: string,
    workspaceData: Partial<Workspace>,
  ): Observable<WorkspaceResponse> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/work-spaces/${workspaceId}`;

    return this._httpWrapper.sendRequest('put', url, workspaceData).pipe(
      catchError((error) => {
        console.error('[SettingsService] Update workspace failed:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Delete a workspace
   *
   * @param workspaceId - The workspace ID
   * @returns Observable with the deletion result
   *
   * API: DELETE /v2/work-spaces/{workspaceId}
   */
  deleteWorkspace(workspaceId: string): Observable<any> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/work-spaces/${workspaceId}`;

    return this._httpWrapper.sendRequest('delete', url).pipe(
      catchError((error) => {
        console.error('[SettingsService] Delete workspace failed:', error);
        return throwError(() => error);
      }),
    );
  }

  // ============================================
  // Staff Management
  // ============================================

  /**
   * Get all staff members for the current client
   *
   * @returns Observable with the staff list
   *
   * API: GET /v2/staff
   */
  getStaff(): Observable<StaffListResponse> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/staff`;

    return this._httpWrapper.sendRequest('get', url, {}).pipe(
      catchError((error) => {
        console.error('[SettingsService] Get staff failed:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Create a new staff member
   *
   * @param staffData - The staff data to create
   * @returns Observable with the created staff member
   *
   * API: POST /v2/staff
   */
  createStaff(staffData: Partial<StaffMember>): Observable<StaffResponse> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/staff`;

    return this._httpWrapper.sendRequest('post', url, staffData).pipe(
      catchError((error) => {
        console.error('[SettingsService] Create staff failed:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Update an existing staff member
   *
   * @param staffId - The staff ID
   * @param staffData - The staff data to update
   * @returns Observable with the updated staff member
   *
   * API: PUT /v2/staff/{staffId}
   */
  updateStaff(
    staffId: string,
    staffData: Partial<StaffMember>,
  ): Observable<StaffResponse> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/staff/${staffId}`;

    return this._httpWrapper.sendRequest('put', url, staffData).pipe(
      catchError((error) => {
        console.error('[SettingsService] Update staff failed:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Delete a staff member
   *
   * @param staffId - The staff ID
   * @returns Observable with the deletion result
   *
   * API: DELETE /v2/staff/{staffId}
   */
  deleteStaff(staffId: string): Observable<any> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/staff/${staffId}`;

    return this._httpWrapper.sendRequest('delete', url).pipe(
      catchError((error) => {
        console.error('[SettingsService] Delete staff failed:', error);
        return throwError(() => error);
      }),
    );
  }

  /**
   * Reinvite a staff member
   *
   * @param staffData - The staff member to reinvite
   * @returns Observable with the reinvite result
   *
   * API: POST /v2/staff/reinvite
   */
  reinviteStaff(staffData: Partial<StaffMember>): Observable<any> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/staff/reinvite`;

    return this._httpWrapper.sendRequest('post', url, staffData).pipe(
      catchError((error) => {
        console.error('[SettingsService] Reinvite staff failed:', error);
        return throwError(() => error);
      }),
    );
  }

  // ============================================
  // Subscription Management
  // ============================================

  /**
   * Get the current client's subscription
   *
   * @param clientId - The client's ID
   * @returns Observable with the subscription data
   *
   * API: GET /v2/client-subscription-plans?where_client={clientId}&where_active=true&findOne=1
   */
  getMySubscription(clientId: string): Observable<any> {
    if (!this.accessToken) {
      return throwError(() => new Error('No access token available'));
    }

    const url = `${this.apiUrl}/v2/client-subscription-plans`;
    const params = {
      where_client: clientId,
      where_active: 'true',
      findOne: '1',
    };

    return this._httpWrapper.sendRequest('get', url, params).pipe(
      catchError((error) => {
        console.error('[SettingsService] Get subscription failed:', error);
        return throwError(() => error);
      }),
    );
  }
}
