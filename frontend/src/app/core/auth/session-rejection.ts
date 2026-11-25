/**
 * Staff session rejection from verifik-backend.
 * Invalid staff sessions (missing or non-joined staff, wrong or missing tenant,
 * rotated phrase) are HTTP 401 with this code. A database failure may deny the
 * request, but it does not use this code and must not sign the user out.
 * Counterpart: Open-Verifik/verifik-backend#737.
 */
export const STAFF_SESSION_REVOKED = 'staff_session_revoked';

export interface SessionErrorBody {
    status?: number;
    code?: string;
    message?: string;
    resource?: string;
    action?: string;
    teamId?: string;
    teamName?: string;
    featureCode?: string;
    featureName?: string;
    restrictedBy?: string;
    canRequestAccess?: boolean;
    canRequestBoost?: boolean;
}

/**
 * Reads the HTTP status and API JSON body.
 * Ignores HttpErrorResponse's own status-line message.
 */
export function readSessionError(error: unknown): SessionErrorBody {
    if (!error || typeof error !== 'object') {
        return {};
    }

    const record = error as {
        status?: unknown;
        code?: unknown;
        message?: unknown;
        error?: unknown;
    };
    const status = typeof record.status === 'number' ? record.status : undefined;
    const nested = record.error;

    if (nested && typeof nested === 'object') {
        const body = nested as Record<string, unknown>;
        return {
            status,
            code: typeof body['code'] === 'string' ? (body['code'] as string) : undefined,
            message: typeof body['message'] === 'string' ? (body['message'] as string) : undefined,
            resource: typeof body['resource'] === 'string' ? (body['resource'] as string) : undefined,
            action: typeof body['action'] === 'string' ? (body['action'] as string) : undefined,
            teamId: typeof body['teamId'] === 'string' ? (body['teamId'] as string) : undefined,
            teamName: typeof body['teamName'] === 'string' ? (body['teamName'] as string) : undefined,
            featureCode: typeof body['featureCode'] === 'string' ? (body['featureCode'] as string) : undefined,
            featureName: typeof body['featureName'] === 'string' ? (body['featureName'] as string) : undefined,
            restrictedBy: typeof body['restrictedBy'] === 'string' ? (body['restrictedBy'] as string) : undefined,
            canRequestAccess: body['canRequestAccess'] === true,
            canRequestBoost: body['canRequestBoost'] === true,
        };
    }

    return {
        status,
        code: typeof record.code === 'string' ? record.code : undefined,
        message: typeof record.message === 'string' ? record.message : undefined,
    };
}

/**
 * True only for the finalized staff-session contract:
 * HTTP 401 and `code: "staff_session_revoked"`.
 */
export function isStaffSessionRevoked(error: unknown): boolean {
    const body = readSessionError(error);
    return body.status === 401 && body.code === STAFF_SESSION_REVOKED;
}

/**
 * Existing expired-token signal. Ordinary permission failures are not this.
 */
export function isExpiredTokenRejection(error: unknown): boolean {
    const body = readSessionError(error);
    if (body.status !== 403) {
        return false;
    }
    return body.code === 'expired_token' || body.message === 'expired_token';
}

/**
 * HTTP 403 that does not invalidate the session.
 * Role and permission failures stay on this path.
 */
export function isRoleDeniedRejection(error: unknown): boolean {
    const body = readSessionError(error);
    return body.status === 403 && !isExpiredTokenRejection(error);
}

export function isStaffRbacDeniedRejection(error: unknown): boolean {
    const body = readSessionError(error);
    return body.status === 403 && body.message === 'insufficient_staff_permissions';
}

export function isTeamBudgetRejection(error: unknown): boolean {
    const body = readSessionError(error);
    return (
        body.status === 403 &&
        (body.message === 'team_budget_exceeded' ||
            body.message === 'team_feature_budget_exceeded' ||
            body.message === 'team_paused')
    );
}

export function isEndpointRestrictedRejection(error: unknown): boolean {
    const body = readSessionError(error);
    return body.status === 403 && body.message === 'endpoint_restricted';
}
