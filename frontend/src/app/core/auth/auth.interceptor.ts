import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthUtils } from 'app/core/auth/auth.utils';
import {
    isEndpointRestrictedRejection,
    isStaffRbacDeniedRejection,
    isStaffSessionRevoked,
    isTeamBudgetRejection,
    readSessionError,
} from 'app/core/auth/session-rejection';
import { RequestAccessDialogComponent } from 'app/core/permissions/request-access-dialog/request-access-dialog.component';
import { StaffPermissionService } from 'app/core/permissions/staff-permission.service';
import { StaffAction, StaffResource } from 'app/core/permissions/staff-permission.types';
import { SessionService } from 'app/core/services/session.service';
import { Observable, catchError, throwError } from 'rxjs';

// Flag to prevent multiple session expiration handlers from running
let isHandlingSessionExpiration = false;
let lastRbacToastAt = 0;

/**
 * Intercept
 *
 * @param req
 * @param next
 */
export const authInterceptor = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const sessionService = inject(SessionService);
    const injector = inject(Injector);

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
                // Revoked staff membership. Do not keep the cached account or refresh it.
                if (isStaffSessionRevoked(error)) {
                    handleStaffSessionRevoked(authService, sessionService);
                    return throwError(() => error);
                }

                // Handle explicit expired token responses from backend
                if (
                    error.status === 403 &&
                    error.error?.code === 'Forbidden' &&
                    error.error?.message === 'expired_token'
                ) {
                    handleSessionExpiration(authService, sessionService, router);
                    return throwError(() => error);
                }

                // Non-destructive 403 handling for Staff RBAC, endpoint restrictions, and Sub-Team monthly budget ceilings
                if (
                    isStaffRbacDeniedRejection(error) ||
                    isTeamBudgetRejection(error) ||
                    isEndpointRestrictedRejection(error)
                ) {
                    handleStaffForbiddenNotice(error, injector);
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
                        req.url.includes('ai.verifik.co') ||
                        req.url.includes('api/') ||
                        req.url.includes('staging-api.verifik.co') ||
                        req.url.includes('api.verifik.co') ||
                        req.url.includes('verifik.app') ||
                        req.url.includes('localhost:3006') ||
                        req.url.includes('127.0.0.1:3006') ||
                        req.url.includes('localhost:3001') ||
                        req.url.includes('127.0.0.1:3001');

                    const hasWalletAuth = !!localStorage.getItem('x402_agent_address');

                    if (isBackendApiCall && hasWalletAuth) {
                        // User has wallet auth, just log the error and let the request fail gracefully
                        console.warn(
                            '[AuthInterceptor] Backend API 401 with wallet auth, skipping logout:',
                            error.url
                        );
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
        })
    );
};

/**
 * Clears the Web2 session after `staff_session_revoked` and opens sign-in once.
 * Does not retry the request or mint a replacement token.
 */
function handleStaffSessionRevoked(authService: AuthService, sessionService: SessionService): void {
    if (isHandlingSessionExpiration) {
        return;
    }

    isHandlingSessionExpiration = true;
    authService.signOut();
    sessionService.handleRevokedSession();

    setTimeout(() => {
        isHandlingSessionExpiration = false;
    }, 2000);
}

/**
 * Handle session expiration centrally
 * Uses SessionService to prevent infinite loops and provide consistent UX
 */
function handleSessionExpiration(
    authService: AuthService,
    sessionService: SessionService,
    router: Router
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
        showModal: true,
    });

    // Reset flag after a delay
    setTimeout(() => {
        isHandlingSessionExpiration = false;
    }, 2000);
}

/**
 * Surfaces non-destructive 403 notices for missing Staff permissions or exhausted
 * Sub-Team monthly credit ceilings, offering a one-click self-service Request CTA.
 */
function handleStaffForbiddenNotice(error: HttpErrorResponse, injector: Injector): void {
    const now = Date.now();
    if (now - lastRbacToastAt < 4000) {
        return;
    }
    lastRbacToastAt = now;

    const snackBar = injector.get(MatSnackBar, null, { optional: true });
    if (!snackBar) return;

    const dialog = injector.get(MatDialog, null, { optional: true });
    const transloco = injector.get(TranslocoService, null, { optional: true });
    const permService = injector.get(StaffPermissionService, null, { optional: true });
    const body = readSessionError(error);

    if (body.message === 'endpoint_restricted') {
        const endpointLabel = body.featureName || body.featureCode || 'this endpoint';
        const msg =
            transloco?.translate('staffRbac.errors.endpointRestricted', {
                endpoint: endpointLabel,
            }) || `Access to ${endpointLabel} is restricted by your workspace endpoint policy.`;
        snackBar.open(msg, undefined, { duration: 6000 });
        return;
    }

    if (
        body.message === 'team_budget_exceeded' ||
        body.message === 'team_feature_budget_exceeded' ||
        body.message === 'team_paused'
    ) {
        const endpointLabel = body.featureName || body.featureCode || 'this endpoint';
        const msg =
            body.message === 'team_paused'
                ? transloco?.translate('staffRbac.errors.teamPaused', {
                      team: body.teamName || 'Sub-Team',
                  }) || `Sub-team ${body.teamName || ''} is currently paused.`
                : body.message === 'team_feature_budget_exceeded'
                  ? transloco?.translate('staffRbac.errors.teamFeatureBudgetExceeded', {
                        team: body.teamName || 'Sub-Team',
                        endpoint: endpointLabel,
                    }) ||
                    `Monthly endpoint limit reached for ${endpointLabel} on ${body.teamName || 'your sub-team'}.`
                  : transloco?.translate('staffRbac.errors.teamBudgetExceeded', {
                        team: body.teamName || 'Sub-Team',
                    }) || `Monthly credit limit reached for ${body.teamName || 'your sub-team'}.`;

        const canBoost = Boolean(body.canRequestBoost && dialog && permService?.canRequestAccess());
        const actionLabel = canBoost
            ? transloco?.translate('staffRbac.errors.requestBoostAction') || 'Request Boost'
            : undefined;
        const ref = snackBar.open(msg, actionLabel, { duration: 6000 });
        if (canBoost && dialog) {
            ref.onAction().subscribe(() => {
                dialog.open(RequestAccessDialogComponent, {
                    width: '520px',
                    maxWidth: '95vw',
                    data: {
                        mode: 'budget_increase',
                        teamId: body.teamId,
                        teamName: body.teamName,
                    },
                });
            });
        }
        return;
    }

    const canRequest = Boolean(
        body.canRequestAccess &&
            body.resource &&
            dialog &&
            permService?.canRequestResource(body.resource)
    );
    const msg =
        transloco?.translate('staffRbac.errors.insufficientPermissions') ||
        'You do not have permission for this action.';
    const actionLabel = canRequest
        ? transloco?.translate('staffRbac.errors.requestAccessAction') || 'Request Access'
        : undefined;

    const ref = snackBar.open(msg, actionLabel, { duration: 5500 });
    if (canRequest && dialog && body.resource) {
        ref.onAction().subscribe(() => {
            dialog.open(RequestAccessDialogComponent, {
                width: '520px',
                maxWidth: '95vw',
                data: {
                    mode: 'resource_access',
                    resource: body.resource as StaffResource,
                    action: (body.action as StaffAction) || 'read',
                },
            });
        });
    }
}
