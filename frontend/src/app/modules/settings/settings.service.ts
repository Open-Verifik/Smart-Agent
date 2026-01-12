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
}
