import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { SessionService } from 'app/core/services/session.service';
import { Observable, catchError, throwError } from 'rxjs';

// Flag to prevent multiple session expiration handlers from running
let isHandlingSessionExpiration = false;

/**
 * Intercept
 *
 * @param req
 * @param next
 */
export const authInterceptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const sessionService = inject(SessionService);

  // Clone the request object
  let newReq = req.clone();

  // Request
  //
  // If the access token didn't expire, add the Authorization header.
  // We won't add the Authorization header if the access token expired.
  // This will force the server to return a "401 Unauthorized" response
  // for the protected API routes which our response interceptor will
  // catch and delete the access token from the local storage while logging
  // the user out from the app.
  const token = authService.accessToken;
  if (token && token.trim() !== '' && !AuthUtils.isTokenExpired(token)) {
    newReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });
  }

  // Response
  return next(newReq).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        // Handle explicit expired token responses from backend
        if (
          error.status === 403 &&
          error.error?.code === 'Forbidden' &&
          error.error?.message === 'expired_token'
        ) {
          handleSessionExpiration(authService, sessionService, router);
          return throwError(() => error);
        }

        // Catch "401 Unauthorized" responses
        if (error.status === 401) {
          // Check for specific error messages that indicate session expiration
          const errorMessage = error.error?.message || error.error?.error || '';
          const isSessionExpired =
            errorMessage.includes('expired') ||
            errorMessage.includes('invalid_token') ||
            errorMessage.includes('jwt expired') ||
            errorMessage.includes('Token expired') ||
            errorMessage.includes('Unauthorized');

          // Skip auto-logout for backend API calls with valid wallet-only auth
          // This allows x402 (wallet-based) operations to continue even if Web2 token is expired
          const isBackendApiCall =
            req.url.includes('x402-agent.verifik.co') ||
            req.url.includes('api/') ||
            req.url.includes('staging-api.verifik.co') ||
            req.url.includes('api.verifik.co') ||
            req.url.includes('verifik.app');

          const hasWalletAuth = !!localStorage.getItem('x402_agent_address');

          if (isBackendApiCall && hasWalletAuth) {
            // User has wallet auth, just log the error and let the request fail gracefully
            console.warn('[AuthInterceptor] Backend API 401 with wallet auth, skipping logout:', error.url);
          } else if (isSessionExpired || !isBackendApiCall) {
            // Session is definitely expired or this is a non-backend call
            handleSessionExpiration(authService, sessionService, router);
          } else {
            // Backend API call without clear session expiration - just log
            console.error('[AuthInterceptor] Backend API 401 Error:', error);
          }
        }
      }

      return throwError(() => error);
    }),
  );
};

/**
 * Handle session expiration centrally
 * Uses SessionService to prevent infinite loops and provide consistent UX
 */
function handleSessionExpiration(
  authService: AuthService,
  sessionService: SessionService,
  router: Router,
): void {
  // Prevent multiple handlers from running simultaneously
  if (isHandlingSessionExpiration) {
    console.warn('[AuthInterceptor] Already handling session expiration, skipping...');
    return;
  }

  isHandlingSessionExpiration = true;

  console.log('[AuthInterceptor] Session expired, cleaning up...');

  // Sign out through auth service (which now properly clears localStorage)
  authService.signOut();

  // Use SessionService for safe cleanup and navigation
  // clearWeb2Only: true - preserve wallet if user has one
  sessionService.handleSessionExpired({
    clearWeb2Only: true,
    silent: false,
  });

  // Reset flag after a delay
  setTimeout(() => {
    isHandlingSessionExpiration = false;
  }, 2000);
}
