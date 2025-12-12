import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { Observable, catchError, throwError } from 'rxjs';

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
          authService.signOut();
          router.navigate(['sign-out']);
          return throwError(() => error);
        }

        // Catch "401 Unauthorized" responses
        if (error.status === 401) {
          // Skip auto-logout for our backend API calls to allow debugging
          const isBackendApiCall =
            req.url.includes('x402-agent.verifik.co') ||
            req.url.includes('api/') ||
            req.url.includes('staging-api.verifik.co') ||
            req.url.includes('api.verifik.co') ||
            req.url.includes('verifik.app');

          if (!isBackendApiCall) {
            // Sign out
            authService.signOut();

            // Reload the app
            location.reload();
          } else {
            // Just log the error for backend API calls
            console.error('Backend API 401 Error:', error);
          }
        }
      }

      return throwError(() => error);
    }),
  );
};
