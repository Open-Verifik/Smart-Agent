import { describe, expect, it } from 'vitest';
import {
    isExpiredTokenRejection,
    isRoleDeniedRejection,
    isStaffSessionRevoked,
    STAFF_SESSION_REVOKED,
} from './session-rejection';

const staffRevoked = {
    status: 401,
    error: { message: STAFF_SESSION_REVOKED, code: STAFF_SESSION_REVOKED },
};

describe('staff_session_revoked contract', () => {
    it('matches HTTP 401 with code staff_session_revoked', () => {
        expect(isStaffSessionRevoked(staffRevoked)).toBe(true);
        expect(isRoleDeniedRejection(staffRevoked)).toBe(false);
    });

    it('does not treat a database denial as a revoked staff session', () => {
        const databaseFailure = {
            status: 401,
            error: { message: 'database_unavailable', code: 'internal_error' },
        };
        expect(isStaffSessionRevoked(databaseFailure)).toBe(false);
        expect(isRoleDeniedRejection(databaseFailure)).toBe(false);
    });

    it('requires HTTP 401 even if the body repeats the revoked code', () => {
        expect(
            isStaffSessionRevoked({
                status: 500,
                error: { message: STAFF_SESSION_REVOKED, code: STAFF_SESSION_REVOKED },
            })
        ).toBe(false);
    });

    it('requires the code field, not only the message', () => {
        expect(
            isStaffSessionRevoked({
                status: 401,
                error: { message: STAFF_SESSION_REVOKED, code: 'Unauthorized' },
            })
        ).toBe(false);
    });

    it('keeps ordinary role-denied 403s out of session rejection', () => {
        const roleDenied = {
            status: 403,
            error: { message: 'missing_permission', code: 'Forbidden' },
        };
        expect(isRoleDeniedRejection(roleDenied)).toBe(true);
        expect(isStaffSessionRevoked(roleDenied)).toBe(false);
        expect(isExpiredTokenRejection(roleDenied)).toBe(false);
    });

    it('still recognizes the existing expired-token 403', () => {
        const expired = {
            status: 403,
            error: { message: 'expired_token', code: 'Forbidden' },
        };
        expect(isExpiredTokenRejection(expired)).toBe(true);
        expect(isRoleDeniedRejection(expired)).toBe(false);
        expect(isStaffSessionRevoked(expired)).toBe(false);
    });
});
