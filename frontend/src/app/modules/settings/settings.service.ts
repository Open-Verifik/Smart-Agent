import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';

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

  constructor(private _http: HttpClient) {}

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
   * Build authorization headers with the current token
   */
  private _getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
    });
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

    return this._http
      .get<TokenRenewalResponse>(url, {
        headers: this._getAuthHeaders(),
        params,
      })
      .pipe(
        map((response) => {
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

    return this._http.post<TokenRevokeResponse>(url, {}, { headers: this._getAuthHeaders() }).pipe(
      map((response) => {
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

    return this._http
      .put<ProfileUpdateResponse>(url, profileData, { headers: this._getAuthHeaders() })
      .pipe(
        map((response) => {
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
}
