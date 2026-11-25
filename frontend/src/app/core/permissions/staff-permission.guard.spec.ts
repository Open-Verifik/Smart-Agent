// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { provideRouter, Router, UrlTree } from '@angular/router';
import { of } from 'rxjs';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { staffPermissionGuard } from './staff-permission.guard';
import { StaffPermissionService } from './staff-permission.service';
import { StaffRbacApiService } from './staff-rbac-api.service';

beforeAll(() => {
    if (!globalThis.localStorage) {
        const store = new Map<string, string>();
        Object.defineProperty(globalThis, 'localStorage', {
            configurable: true,
            value: {
                getItem: (k: string) => store.get(k) ?? null,
                setItem: (k: string, v: string) => store.set(k, String(v)),
                removeItem: (k: string) => store.delete(k),
                clear: () => store.clear(),
            },
        });
    }
    const testBed = getTestBed();
    if (!testBed.platform) {
        testBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    }
});

describe('staffPermissionGuard', () => {
    let service: StaffPermissionService;
    let router: Router;

    beforeEach(() => {
        localStorage.clear();
        TestBed.configureTestingModule({
            providers: [
                provideRouter([]),
                StaffPermissionService,
                {
                    provide: StaffRbacApiService,
                    useValue: { getMyPermissions: () => of(null) },
                },
            ],
        });
        service = TestBed.inject(StaffPermissionService);
        router = TestBed.inject(Router);
    });

    afterEach(() => {
        service.clear();
        localStorage.clear();
    });

    it('allows workspace owners through protected routes', () => {
        service.hydrateFromSession({ _id: 'client-1', email: 'owner@acme.com' });

        const result = TestBed.runInInjectionContext(() =>
            staffPermissionGuard(
                { data: { permission: { resource: 'smartEnrollProjects', action: 'read' } } } as any,
                { url: '/smart-enroll/projects' } as any
            )
        );

        expect(result).toBe(true);
    });

    it('allows permitted staff through matching resource and action routes', () => {
        service.hydrateFromSession({
            _id: 'staff-1',
            staff: 'staff-1',
            isStaff: true,
            role: 'developer',
        });

        const result = TestBed.runInInjectionContext(() =>
            staffPermissionGuard(
                { data: { permission: { resource: 'apiKeys', action: 'read' } } } as any,
                { url: '/settings/api-key' } as any
            )
        );

        expect(result).toBe(true);
    });

    it('redirects unpermitted staff to /access-restricted with resource, action, and returnUrl params', () => {
        service.hydrateFromSession({
            _id: 'staff-2',
            staff: 'staff-2',
            isStaff: true,
            role: 'viewer',
        });

        const result = TestBed.runInInjectionContext(() =>
            staffPermissionGuard(
                { data: { permission: { resource: 'billingCredits', action: 'create' } } } as any,
                { url: '/add-credits' } as any
            )
        );

        expect(result instanceof UrlTree).toBe(true);
        const serialized = router.serializeUrl(result as UrlTree);
        expect(serialized).toContain('/access-restricted');
        const tree = result as UrlTree;
        expect(tree.queryParams['resource']).toBe('billingCredits');
        expect(tree.queryParams['action']).toBe('create');
        expect(tree.queryParams['from']).toBe('/add-credits');
    });

    it('redirects any staff member on ownerOnly routes with ownerOnly=1', () => {
        service.hydrateFromSession({
            _id: 'staff-admin',
            staff: 'staff-admin',
            isStaff: true,
            role: 'admin',
        });

        const result = TestBed.runInInjectionContext(() =>
            staffPermissionGuard(
                { data: { permission: { resource: 'workspaceSettings', ownerOnly: true } } } as any,
                { url: '/settings/delete-workspace' } as any
            )
        );

        expect(result instanceof UrlTree).toBe(true);
        const tree = result as UrlTree;
        expect(tree.queryParams['ownerOnly']).toBe('1');
        expect(tree.queryParams['resource']).toBe('workspaceSettings');
    });
});
