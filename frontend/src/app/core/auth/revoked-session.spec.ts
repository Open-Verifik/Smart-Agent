// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { of, Subject, throwError } from 'rxjs';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { AppComponent } from 'app/app.component';
import { AccountEnvironmentService } from 'app/core/account/account-environment.service';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { authInterceptor } from 'app/core/auth/auth.interceptor';
import { STAFF_SESSION_REVOKED } from 'app/core/auth/session-rejection';
import { PaymentService } from 'app/modules/add-credits/services/payment.service';
import { OnboardingService } from 'app/core/services/onboarding.service';
import { AuthApiService } from 'app/core/services/auth-api.service';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { SessionService } from 'app/core/services/session.service';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';
import { SettingsService } from 'app/modules/settings/settings.service';

beforeAll(() => {
    const testBed = getTestBed();
    if (!testBed.platform) {
        testBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    }
});

afterEach(() => {
    vi.restoreAllMocks();
});

function futureJwt(claims: Record<string, unknown> = {}): string {
    const encode = (value: object) =>
        btoa(JSON.stringify(value)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
    const exp = Math.floor(Date.now() / 1000) + 60 * 60;
    return `${encode({ alg: 'none', typ: 'JWT' })}.${encode({ exp, ...claims })}.sig`;
}

function httpError(status: number, code: string, message = code): HttpErrorResponse {
    return new HttpErrorResponse({
        status,
        statusText: 'Error',
        url: 'http://localhost:3001/v2/auth/session',
        error: { message, code },
    });
}

const staffRevoked = () => httpError(401, STAFF_SESSION_REVOKED);
const roleDenied = () => httpError(403, 'Forbidden', 'missing_permission');
const databaseDenied = () => httpError(401, 'internal_error', 'database_unavailable');

const ownerProfile: User = {
    _id: 'owner-1',
    email: 'owner@example.com',
    name: 'Owner',
    role: 'owner',
    canRecharge: true,
};

function seedOwnerSession(token: string): void {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('verifik_account', JSON.stringify(ownerProfile));
    localStorage.setItem('user', JSON.stringify({ _id: 'owner-1', role: 'owner' }));
}

function dialogMock() {
    return { closeAll: vi.fn(), getDialogById: vi.fn(), open: vi.fn() };
}

describe('revoked staff session', () => {
    let authApi: { getSession: ReturnType<typeof vi.fn> };
    let router: { events: Subject<unknown>; navigate: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        TestBed.resetTestingModule();
        localStorage.clear();
        vi.spyOn(SessionService.prototype, 'openAuthModal').mockImplementation(() => undefined);
        authApi = { getSession: vi.fn() };
        router = { events: new Subject(), navigate: vi.fn().mockResolvedValue(true) };

        TestBed.configureTestingModule({
            providers: [
                AuthService,
                UserService,
                SessionService,
                AccountEnvironmentService,
                { provide: AuthApiService, useValue: authApi },
                { provide: Router, useValue: router },
                { provide: MatDialog, useValue: dialogMock() },
                { provide: MatSnackBar, useValue: { open: vi.fn() } },
                { provide: TranslocoService, useValue: { translate: (key: string) => key } },
                { provide: PaymentService, useValue: {} },
                { provide: HttpClient, useValue: { post: vi.fn(), patch: vi.fn(), get: vi.fn() } },
                { provide: HttpWrapperService, useValue: { sendRequest: vi.fn() } },
                {
                    provide: OnboardingService,
                    useValue: {
                        areAllTasksCompleted: () => true,
                        updateTaskStatus: () => of(null),
                    },
                },
            ],
        });
    });

    it('accepts the unsigned fixture jwt used to boot a session', () => {
        expect(AuthUtils.isTokenExpired(futureJwt({ staffId: 'staff-1' }))).toBe(false);
    });

    it('clears the cached owner profile on revoked boot and does not retry', () => {
        const token = futureJwt({ staffId: 'staff-1', clientId: 'owner-1' });
        seedOwnerSession(token);
        authApi.getSession.mockReturnValue(throwError(() => staffRevoked()));

        const account = TestBed.inject(AccountEnvironmentService);
        const userService = TestBed.inject(UserService);
        const seen: Array<User | null> = [];
        userService.user$.subscribe((user) => seen.push(user));
        userService.user = ownerProfile;

        expect(account.accountSnapshot()?.role).toBe('owner');
        expect(account.sessionHydrated()).toBe(true);

        TestBed.runInInjectionContext(() => new AppComponent()).ngOnInit();

        expect(authApi.getSession).toHaveBeenCalledTimes(1);
        expect(localStorage.getItem('accessToken')).toBeNull();
        expect(localStorage.getItem('verifik_account')).toBeNull();
        expect(localStorage.getItem('user')).toBeNull();
        expect(account.accountSnapshot()).toBeNull();
        expect(account.sessionHydrated()).toBe(false);
        expect(account.isAuthenticated()).toBe(false);
        expect(seen.at(-1)).toBeNull();
        expect(router.navigate).toHaveBeenCalledWith(['/']);
        expect(SessionService.prototype.openAuthModal).toHaveBeenCalled();
    });

    it('keeps a valid staff session when boot succeeds', () => {
        const token = futureJwt({ staffId: 'staff-1', clientId: 'client-1' });
        localStorage.setItem('accessToken', token);
        authApi.getSession.mockReturnValue(
            of({
                data: {
                    user: {
                        _id: 'client-1',
                        staff: 'staff-1',
                        role: 'empleado',
                        email: 'staff@example.com',
                        canRecharge: true,
                    },
                },
            })
        );

        const account = TestBed.inject(AccountEnvironmentService);
        TestBed.runInInjectionContext(() => new AppComponent()).ngOnInit();

        expect(authApi.getSession).toHaveBeenCalledTimes(1);
        expect(localStorage.getItem('accessToken')).toBe(token);
        expect(account.accountSnapshot()?.role).toBe('empleado');
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('keeps a valid owner session when boot succeeds', () => {
        const token = futureJwt({ clientId: 'owner-1' });
        localStorage.setItem('accessToken', token);
        authApi.getSession.mockReturnValue(of({ data: { user: ownerProfile } }));

        const account = TestBed.inject(AccountEnvironmentService);
        TestBed.runInInjectionContext(() => new AppComponent()).ngOnInit();

        expect(authApi.getSession).toHaveBeenCalledTimes(1);
        expect(localStorage.getItem('accessToken')).toBe(token);
        expect(account.accountSnapshot()?.email).toBe('owner@example.com');
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('does not log the user out on a role-denied 403 during boot', () => {
        const token = futureJwt({ staffId: 'staff-1' });
        seedOwnerSession(token);
        authApi.getSession.mockReturnValue(throwError(() => roleDenied()));

        const account = TestBed.inject(AccountEnvironmentService);
        const userService = TestBed.inject(UserService);
        userService.user = ownerProfile;
        TestBed.runInInjectionContext(() => new AppComponent()).ngOnInit();

        expect(authApi.getSession).toHaveBeenCalledTimes(1);
        expect(localStorage.getItem('accessToken')).toBe(token);
        expect(localStorage.getItem('verifik_account')).not.toBeNull();
        expect(account.accountSnapshot()?.role).toBe('owner');
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('does not log the user out when a denial is not staff_session_revoked', () => {
        const token = futureJwt({ staffId: 'staff-1' });
        seedOwnerSession(token);
        authApi.getSession.mockReturnValue(throwError(() => databaseDenied()));

        const account = TestBed.inject(AccountEnvironmentService);
        TestBed.runInInjectionContext(() => new AppComponent()).ngOnInit();

        expect(authApi.getSession).toHaveBeenCalledTimes(1);
        expect(localStorage.getItem('accessToken')).toBe(token);
        expect(account.accountSnapshot()?.email).toBe('owner@example.com');
        expect(router.navigate).not.toHaveBeenCalled();
    });
});

describe('later staff_session_revoked responses', () => {
    let router: { navigate: ReturnType<typeof vi.fn>; events: Subject<unknown> };

    beforeEach(() => {
        TestBed.resetTestingModule();
        localStorage.clear();
        vi.spyOn(SessionService.prototype, 'openAuthModal').mockImplementation(() => undefined);
        router = { navigate: vi.fn().mockResolvedValue(true), events: new Subject() };
        TestBed.configureTestingModule({
            providers: [
                AuthService,
                UserService,
                SessionService,
                { provide: Router, useValue: router },
                { provide: MatDialog, useValue: dialogMock() },
                { provide: HttpClient, useValue: {} },
                { provide: HttpWrapperService, useValue: { sendRequest: vi.fn() } },
            ],
        });
    });

    function rejectOnce(url: string, error: HttpErrorResponse): number {
        let calls = 0;
        TestBed.runInInjectionContext(() => {
            authInterceptor(new HttpRequest('GET', url), () => {
                calls += 1;
                return throwError(() => error);
            }).subscribe({ error: () => undefined });
        });
        return calls;
    }

    it('clears a later protected rejection once and does not retry', () => {
        const token = futureJwt({ staffId: 'staff-1' });
        seedOwnerSession(token);
        localStorage.setItem('x402_agent_address', '0xabc');

        const calls = rejectOnce('http://localhost:3001/v2/projects', staffRevoked());

        expect(calls).toBe(1);
        expect(localStorage.getItem('accessToken')).toBeNull();
        expect(localStorage.getItem('verifik_account')).toBeNull();
        expect(localStorage.getItem('user')).toBeNull();
        expect(localStorage.getItem('x402_agent_address')).toBe('0xabc');
        expect(router.navigate).toHaveBeenCalledTimes(1);
        expect(router.navigate).toHaveBeenCalledWith(['/']);
    });

    it('leaves the session in place for a role-denied 403', () => {
        const token = futureJwt({ staffId: 'staff-1' });
        seedOwnerSession(token);

        const calls = rejectOnce('http://localhost:3001/v2/projects', roleDenied());

        expect(calls).toBe(1);
        expect(localStorage.getItem('accessToken')).toBe(token);
        expect(localStorage.getItem('verifik_account')).not.toBeNull();
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('leaves the session in place for an unlabeled 401', () => {
        const token = futureJwt({ staffId: 'staff-1' });
        seedOwnerSession(token);

        const calls = rejectOnce('http://localhost:3001/v2/auth/session', databaseDenied());

        expect(calls).toBe(1);
        expect(localStorage.getItem('accessToken')).toBe(token);
        expect(JSON.parse(localStorage.getItem('verifik_account') || '{}').role).toBe('owner');
        expect(router.navigate).not.toHaveBeenCalled();
    });
});

describe('refresh after staff_session_revoked', () => {
    let http: { sendRequest: ReturnType<typeof vi.fn> };
    let router: { navigate: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        TestBed.resetTestingModule();
        localStorage.clear();
        vi.spyOn(SessionService.prototype, 'openAuthModal').mockImplementation(() => undefined);
        http = { sendRequest: vi.fn() };
        router = { navigate: vi.fn().mockResolvedValue(true) };
        TestBed.configureTestingModule({
            providers: [
                SettingsService,
                AuthService,
                UserService,
                SessionService,
                { provide: HttpWrapperService, useValue: http },
                { provide: HttpClient, useValue: {} },
                { provide: Router, useValue: router },
                { provide: MatDialog, useValue: dialogMock() },
            ],
        });
    });

    it('does not store a refreshed token and does not call session again', () => {
        const token = futureJwt({ staffId: 'staff-1' });
        seedOwnerSession(token);
        http.sendRequest.mockReturnValue(throwError(() => staffRevoked()));

        const service = TestBed.inject(SettingsService);
        service.renewToken(12).subscribe({ error: () => undefined });

        expect(http.sendRequest).toHaveBeenCalledTimes(1);
        expect(http.sendRequest.mock.calls[0][2]).toMatchObject({ origin: 'refresh' });
        expect(localStorage.getItem('accessToken')).toBeNull();
        expect(localStorage.getItem('verifik_account')).toBeNull();
        expect(router.navigate).toHaveBeenCalledTimes(1);
    });

    it('still stores a token when refresh succeeds', () => {
        localStorage.setItem('accessToken', futureJwt({ clientId: 'owner-1' }));
        http.sendRequest.mockReturnValue(of({ accessToken: 'renewed-token', tokenType: 'Bearer' }));

        const service = TestBed.inject(SettingsService);
        service.renewToken(1).subscribe();

        expect(http.sendRequest).toHaveBeenCalledTimes(1);
        expect(localStorage.getItem('accessToken')).toBe('renewed-token');
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('does not clear the session when refresh is role-denied', () => {
        const token = futureJwt({ staffId: 'staff-1' });
        seedOwnerSession(token);
        http.sendRequest.mockReturnValue(throwError(() => roleDenied()));

        const service = TestBed.inject(SettingsService);
        service.renewToken(1).subscribe({ error: () => undefined });

        expect(http.sendRequest).toHaveBeenCalledTimes(1);
        expect(localStorage.getItem('accessToken')).toBe(token);
        expect(localStorage.getItem('verifik_account')).not.toBeNull();
        expect(router.navigate).not.toHaveBeenCalled();
    });
});
