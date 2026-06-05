import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AccountEnvironmentService } from 'app/core/account/account-environment.service';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthApiService } from 'app/core/services/auth-api.service';
import { SessionService } from 'app/core/services/session.service';
import { UserService } from 'app/core/user/user.service';
import { OnboardingService } from 'app/core/services/onboarding.service';

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
    private _accountEnvironment = inject(AccountEnvironmentService);
    private _router = inject(Router);
    private _onboardingService = inject(OnboardingService);

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

        this._router.events
            .pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd)
            )
            .subscribe((event: NavigationEnd) => {
                this._trackOnboardingVisited(event.urlAfterRedirects);
            });
    }

    /**
     * Captures and validates authentication tokens provided via URL query parameters.
     * This allows for SSO (Single Sign-On) handovers from external platforms.
     * @private
     */
    private _captureTokenFromUrl(): void {
        const path = window.location.pathname || '';

        // Bridge route owns exchange + final JWT flow (see BridgeComponent).
        if (path.includes('/bridge') || path.includes('/proposal')) {
            return;
        }

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
        const path = window.location.pathname || '';

        // Avoid racing bridge handoff against a previous session snapshot.
        if (path.includes('/bridge') || path.includes('/proposal')) {
            return;
        }

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
                const userData =
                    this._userService.applySessionResponse(res) ??
                    res.data?.user ??
                    res.user ??
                    res;

                this._accountEnvironment.onSessionSynced(userData);

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

    /**
     * Sends background telemetry to onboarding tracker on specific route visits.
     * @private
     */
    private _trackOnboardingVisited(url: string): void {
        if (!this._sessionService.hasValidAuthentication()) {
            return;
        }

        const path = url.split('?')[0].split('#')[0];

        // 1. Visit Hubs / Primary Sections (VISITED & STARTED)
        if (path === '/chat') {
            this._onboardingService.updateTaskStatus('test_smartcheck', 'VISITED').subscribe();
            this._onboardingService.updateTaskStatus('test_smartcheck', 'STARTED').subscribe();
        } else if (path === '/smart-enroll/demos') {
            this._onboardingService.updateTaskStatus('test_collection_demo', 'VISITED').subscribe();
            this._onboardingService.updateTaskStatus('test_add_person_demo', 'VISITED').subscribe();
            this._onboardingService.updateTaskStatus('test_search_person_demo', 'VISITED').subscribe();
            this._onboardingService.updateTaskStatus('test_liveness_demo', 'VISITED').subscribe();
        } else if (path === '/smart-access/projects') {
            this._onboardingService.updateTaskStatus('test_humanauthn_creation', 'VISITED').subscribe();
            this._onboardingService.updateTaskStatus('test_humanauthn_decryption', 'VISITED').subscribe();
            this._onboardingService.updateTaskStatus('test_humanauthn_preview', 'VISITED').subscribe();
        } else if (path === '/subscription-plans' || path === '/smart-enroll/plans' || path === '/smart-enroll/projects' || path === '/smart-access/plans' || path === '/smart-access/projects') {
            if (path === '/subscription-plans' || path === '/smart-enroll/plans' || path === '/smart-enroll/projects') {
                this._onboardingService.updateTaskStatus('subscribe_smart_enroll', 'VISITED').subscribe();
            }
            if (path === '/subscription-plans' || path === '/smart-access/plans' || path === '/smart-access/projects') {
                this._onboardingService.updateTaskStatus('subscribe_smart_access', 'VISITED').subscribe();
            }
        } else if (path === '/settings/billing-details') {
            this._onboardingService.updateTaskStatus('add_billing_details', 'VISITED').subscribe();
        } else if (path === '/home') {
            this._onboardingService.updateTaskStatus('complete_kyc', 'VISITED').subscribe();
        }

        // 2. Specific Action / Demo Pages (STARTED)
        if (path === '/smart-enroll/demos/create-collection') {
            this._onboardingService.updateTaskStatus('test_collection_demo', 'STARTED').subscribe();
        } else if (path === '/smart-enroll/demos/create-person' || path === '/smart-enroll/demos/create-person-with-liveness') {
            this._onboardingService.updateTaskStatus('test_add_person_demo', 'STARTED').subscribe();
        } else if (path === '/smart-enroll/demos/search-person' || path === '/smart-enroll/demos/search-live-person' || path === '/smart-enroll/demos/search-active-user') {
            this._onboardingService.updateTaskStatus('test_search_person_demo', 'STARTED').subscribe();
        } else if (path === '/smart-enroll/demos/liveness' || path === '/smart-enroll/demos/face-comparison-liveness') {
            this._onboardingService.updateTaskStatus('test_liveness_demo', 'STARTED').subscribe();
        } else if (path === '/smart-enroll/demos/humanid-create' || path === '/smart-enroll/demos/humanid-create-qr') {
            this._onboardingService.updateTaskStatus('test_humanauthn_creation', 'STARTED').subscribe();
        } else if (path === '/smart-enroll/demos/humanid-decrypt') {
            this._onboardingService.updateTaskStatus('test_humanauthn_decryption', 'STARTED').subscribe();
        } else if (path === '/smart-enroll/demos/humanid-preview') {
            this._onboardingService.updateTaskStatus('test_humanauthn_preview', 'STARTED').subscribe();
        }
    }
}
