import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthApiService } from 'app/core/services/auth-api.service';
import { SessionService } from 'app/core/services/session.service';
import { UserService } from 'app/core/user/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
    private _authService = inject(AuthService);
    private _authApiService = inject(AuthApiService);
    private _userService = inject(UserService);
    private _sessionService = inject(SessionService);

    /**
     * Constructor
     */
    constructor() {}

    ngOnInit(): void {
        /**
         * GLOBAL SESSION INITIALIZATION
         *
         * We handle token capture and session restoration here in the root component because:
         * 1. It's the earliest point in the application lifecycle.
         * 2. It ensures the session is established BEFORE any child components or guards
         *    try to use the auth state.
         * 3. It provides resilience against server-side redirects that might bypass
         *    dedicated auth routes (like /bridge).
         */
        this._captureTokenFromUrl();
        this._restoreSession();
    }

    /**
     * Captures and validates authentication tokens provided via URL query parameters.
     * This allows for SSO (Single Sign-On) handovers from external platforms.
     * @private
     */
    private _captureTokenFromUrl(): void {
        const urlParams = new URL(window.location.href).searchParams;
        const tokenFromUrl = urlParams.get('token');
        const userFromUrl = urlParams.get('user');

        if (!tokenFromUrl) {
            return;
        }

        // Detect user switch: If we already have a session for a different user, clear it first
        const currentToken = localStorage.getItem('accessToken');
        if (currentToken && currentToken !== tokenFromUrl) {
            console.log('[AppComponent] Switching user context based on URL token');
            this._authService.signOut(true);
        }

        console.log('[AppComponent] Provisioning session from URL token');
        localStorage.setItem('accessToken', tokenFromUrl);
        this._authService.accessToken = tokenFromUrl;

        // If user profile data was also provided, hydrate the local state
        if (userFromUrl) {
            try {
                const decodedUser = JSON.parse(atob(userFromUrl));
                localStorage.setItem('verifik_account', JSON.stringify(decodedUser));
                this._userService.user = decodedUser;
            } catch (e) {
                console.warn('[AppComponent] Failed to decode user data from URL', e);
            }
        }
    }

    /**
     * Attempts to restore an existing session from localStorage.
     * Validates the token and refreshes user metadata from the API.
     * @private
     */
    private _restoreSession(): void {
        const token = localStorage.getItem('accessToken');

        if (!token) {
            return;
        }

        // Handle expired tokens immediately (Guard Clause)
        if (!this._sessionService.isTokenValid()) {
            this._purgeExpiredSession();
            return;
        }

        // Valid token exists, attempt to sync state with API
        this._syncUserSession(token);
    }

    /**
     * Purges session data and handles cleanup for expired tokens.
     * @private
     */
    private _purgeExpiredSession(): void {
        console.warn('[AppComponent] Purging expired session credentials');
        this._sessionService.handleSessionExpired({
            clearWeb2Only: true,
            silent: true,
        });
    }

    /**
     * Synchronizes the user session data with the backend API.
     * @param token The active authentication token
     * @private
     */
    private _syncUserSession(token: string): void {
        this._authService.accessToken = token;

        this._authApiService.getSession().subscribe({
            next: (res: any) => {
                const userData = res.data?.user || res.user || res;
                localStorage.setItem('verifik_account', JSON.stringify(userData));
                this._userService.user = userData;
                this._sessionService.resetReloadTracking();
            },
            error: (err) => {
                console.error('[AppComponent] Background session sync failed', err);
                // If the token is rejected by the server, purge it
                if (err.status === 401 || err.status === 403) {
                    this._purgeExpiredSession();
                }
            },
        });
    }
}
