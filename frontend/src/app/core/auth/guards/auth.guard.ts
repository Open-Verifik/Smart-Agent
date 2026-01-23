import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { SessionService } from 'app/core/services/session.service';
import { of } from 'rxjs';

export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
    const router: Router = inject(Router);
    const authService: AuthService = inject(AuthService);
    const sessionService: SessionService = inject(SessionService);

    // Check if user has any valid authentication (Web2 token or Web3 wallet)
    if (sessionService.hasValidAuthentication()) {
        return of(true);
    }

    // Check if user has a token but it's expired
    const token = authService.accessToken;
    if (token && !sessionService.isTokenValid()) {
        // Token exists but is expired - clean it up silently
        console.warn('[AuthGuard] Token expired, cleaning up and redirecting to home');
        sessionService.handleSessionExpired({
            clearWeb2Only: true,
            silent: true,
        });
    }

    // If no valid authentication, redirect to home (which will show auth modal)
    // Note: We redirect to home instead of sign-in because the app uses modals for auth
    const redirectURL =
        state.url === '/sign-out' || state.url === '/'
            ? ''
            : `redirectURL=${state.url}`;

    // Navigate to home - the app will show the auth modal appropriately
    const urlTree = router.parseUrl(`/${redirectURL ? '?' + redirectURL : ''}`);

    return of(urlTree);
};
