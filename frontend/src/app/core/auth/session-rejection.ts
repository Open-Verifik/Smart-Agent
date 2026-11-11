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
        const body = nested as { code?: unknown; message?: unknown };
        return {
            status,
            code: typeof body.code === 'string' ? body.code : undefined,
            message: typeof body.message === 'string' ? body.message : undefined,
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
