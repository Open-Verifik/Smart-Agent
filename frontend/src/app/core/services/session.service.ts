import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthUtils } from '../auth/auth.utils';

/**
 * SessionService - Centralized session management
 *
 * Handles:
 * - Session cleanup (clearing all auth-related localStorage items)
 * - Infinite reload loop prevention
 * - Session expiration detection and handling
 * - Consistent user experience when session expires
 */
@Injectable({
    providedIn: 'root',
})
export class SessionService {
    private _router = inject(Router);
    private _matDialog = inject(MatDialog);

    // Session state
    private _isLoggingOut = false;
    private _reloadCount = 0;
    private _lastReloadTime = 0;
    private readonly MAX_RELOADS_PER_MINUTE = 3;
    private readonly RELOAD_WINDOW_MS = 60000; // 1 minute

    // Observable for session expiration events
    private _sessionExpired$ = new BehaviorSubject<boolean>(false);
    public sessionExpired$ = this._sessionExpired$.asObservable();

    // Storage key for tracking reload attempts
    private readonly RELOAD_TRACKING_KEY = 'session_reload_tracking';

    constructor() {
        // Initialize reload tracking from localStorage (persists across reloads)
        this._loadReloadTracking();
    }

    /**
     * Check if the current access token is valid (exists and not expired)
     */
    isTokenValid(): boolean {
        const token = localStorage.getItem('accessToken');
        if (!token || token.trim() === '') {
            return false;
        }
        const isValid = !AuthUtils.isTokenExpired(token);
        if (!isValid) {
            console.warn('[SessionService] Token check failed: Token appears expired');
        }
        return isValid;
    }

    /**
     * Check if user has any valid authentication (Web2 or Web3)
     */
    hasValidAuthentication(): boolean {
        // Check Web2 auth
        if (this.isTokenValid()) {
            return true;
        }

        // Check Web3 auth (wallet)
        const walletAddress = localStorage.getItem('x402_agent_address');
        const walletType = localStorage.getItem('x402_wallet_type');
        const hasEncryptedWallet = !!localStorage.getItem('x402_agent_pk_encrypted');
        const hasPlainPk = !!localStorage.getItem('x402_agent_pk');

        if (walletAddress && (walletType === 'metamask' || hasEncryptedWallet || hasPlainPk)) {
            return true;
        }

        return false;
    }

    /**
     * Handle session expiration
     * Called when a 401/403 is received or token is detected as expired
     *
     * @param options Configuration options
     * @param options.clearWeb2Only Only clear Web2 credentials (preserve wallet)
     * @param options.silent Don't navigate, just cleanup
     * @param options.showModal Show auth modal instead of redirecting
     */
    handleSessionExpired(
        options: {
            clearWeb2Only?: boolean;
            silent?: boolean;
            showModal?: boolean;
        } = {}
    ): void {
        // Prevent multiple simultaneous logout attempts
        if (this._isLoggingOut) {
            console.warn('[SessionService] Already handling session expiration, skipping...');
            return;
        }

        this._isLoggingOut = true;

        console.log('[SessionService] Handling session expiration', options);

        // Clear Web2 credentials
        this._clearWeb2Credentials();

        // Clear Web3 credentials if not preserving
        if (!options.clearWeb2Only) {
            this._clearWeb3Credentials();
        }

        // Emit session expired event
        this._sessionExpired$.next(true);

        // Close any open dialogs
        this._matDialog.closeAll();

        // Reset logout flag after a delay
        setTimeout(() => {
            this._isLoggingOut = false;
        }, 1000);

        // Navigate if not silent
        if (!options.silent) {
            // Navigate to home (which will show auth modal or redirect appropriately)
            this._router.navigate(['/']);
        }
    }

    /**
     * Clear all Web2-related credentials from localStorage
     */
    private _clearWeb2Credentials(): void {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('verifik_account');
        localStorage.removeItem('user');
        localStorage.removeItem('currentConversationId');
        // Note: We don't clear chatMode as user might want to keep their preference
    }

    /**
     * Clear all Web3-related credentials from localStorage
     */
    private _clearWeb3Credentials(): void {
        localStorage.removeItem('x402_agent_address');
        localStorage.removeItem('x402_agent_pk');
        localStorage.removeItem('x402_agent_pk_encrypted');
        localStorage.removeItem('x402_wallet_type');
        localStorage.removeItem('x402_encryption_method');
        localStorage.removeItem('x402_encryption_salt');
        localStorage.removeItem('x402_credential_id');
        localStorage.removeItem('lastWalletAddress');
    }

    /**
     * Clear all session data (both Web2 and Web3)
     */
    clearAllSessionData(): void {
        this._clearWeb2Credentials();
        this._clearWeb3Credentials();
        // Clear reload tracking
        localStorage.removeItem(this.RELOAD_TRACKING_KEY);
    }

    /**
     * Safe reload with loop prevention
     * Tracks reloads and prevents infinite loops
     *
     * @returns true if reload was allowed, false if blocked due to loop detection
     */
    safeReload(): boolean {
        const now = Date.now();

        // Check if we're in a reload loop
        if (now - this._lastReloadTime < this.RELOAD_WINDOW_MS) {
            this._reloadCount++;
        } else {
            // Reset counter if outside window
            this._reloadCount = 1;
        }

        this._lastReloadTime = now;

        // Save tracking to localStorage (persists across reloads)
        this._saveReloadTracking();

        // Check if we've exceeded the limit
        if (this._reloadCount > this.MAX_RELOADS_PER_MINUTE) {
            console.error(
                '[SessionService] Reload loop detected! Stopping reload and clearing session.'
            );

            // Clear everything to break the loop
            this.clearAllSessionData();

            // Navigate to home instead of reloading
            this._router.navigate(['/']);

            return false;
        }

        // Perform the reload
        location.reload();
        return true;
    }

    /**
     * Load reload tracking from localStorage
     */
    private _loadReloadTracking(): void {
        try {
            const tracking = localStorage.getItem(this.RELOAD_TRACKING_KEY);
            if (tracking) {
                const data = JSON.parse(tracking);
                const now = Date.now();

                // Check if data is within the time window
                if (now - data.lastReloadTime < this.RELOAD_WINDOW_MS) {
                    this._reloadCount = data.reloadCount;
                    this._lastReloadTime = data.lastReloadTime;

                    // Check for loop on page load
                    if (this._reloadCount > this.MAX_RELOADS_PER_MINUTE) {
                        console.error(
                            '[SessionService] Reload loop detected on init! Clearing session.'
                        );
                        this.clearAllSessionData();
                    }
                } else {
                    // Data is stale, reset
                    localStorage.removeItem(this.RELOAD_TRACKING_KEY);
                }
            }
        } catch (error) {
            console.warn('[SessionService] Failed to load reload tracking', error);
            localStorage.removeItem(this.RELOAD_TRACKING_KEY);
        }
    }

    /**
     * Save reload tracking to localStorage
     */
    private _saveReloadTracking(): void {
        try {
            localStorage.setItem(
                this.RELOAD_TRACKING_KEY,
                JSON.stringify({
                    reloadCount: this._reloadCount,
                    lastReloadTime: this._lastReloadTime,
                })
            );
        } catch (error) {
            console.warn('[SessionService] Failed to save reload tracking', error);
        }
    }

    /**
     * Reset reload tracking (call after successful login)
     */
    resetReloadTracking(): void {
        this._reloadCount = 0;
        this._lastReloadTime = 0;
        localStorage.removeItem(this.RELOAD_TRACKING_KEY);
    }

    /**
     * Check if token is about to expire (within 5 minutes)
     * Useful for proactive session refresh
     */
    isTokenExpiringSoon(offsetSeconds: number = 300): boolean {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            return false;
        }
        return AuthUtils.isTokenExpired(token, -offsetSeconds);
    }

    /**
     * Get time until token expires (in milliseconds)
     * Returns -1 if token is invalid or already expired
     */
    getTokenExpirationTime(): number {
        const token = localStorage.getItem('accessToken');
        if (!token || token.trim() === '') {
            return -1;
        }

        try {
            const parts = token.split('.');
            if (parts.length !== 3) {
                return -1;
            }

            const payload = JSON.parse(atob(parts[1]));
            if (!payload.exp) {
                return -1;
            }

            const expirationMs = payload.exp * 1000;
            const now = Date.now();

            if (expirationMs <= now) {
                return -1; // Already expired
            }

            return expirationMs - now;
        } catch (error) {
            return -1;
        }
    }
}
