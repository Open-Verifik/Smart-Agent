// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { of } from 'rxjs';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { DEFAULT_STAFF_ACCESS_POLICY } from './staff-permission.constants';
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

describe('StaffPermissionService', () => {
    let service: StaffPermissionService;

    beforeEach(() => {
        localStorage.clear();
        TestBed.configureTestingModule({
            providers: [
                StaffPermissionService,
                {
                    provide: StaffRbacApiService,
                    useValue: {
                        getMyPermissions: () => of(null),
                    },
                },
            ],
        });
        service = TestBed.inject(StaffPermissionService);
    });

    afterEach(() => {
        service.clear();
        localStorage.clear();
    });

    it('grants workspace owners unrestricted access across all resources except staff flag', () => {
        service.hydrateFromSession({
            _id: 'client-1',
            email: 'owner@acme.com',
            name: 'Owner',
        });

        expect(service.isOwner()).toBe(true);
        expect(service.isStaff()).toBe(false);
        expect(service.can('smartEnrollProjects', 'create')).toBe(true);
        expect(service.can('billingCredits', 'delete')).toBe(true);
        expect(service.can('workspaceSettings', 'delete')).toBe(true);
        expect(service.can('team', 'approve')).toBe(true);
    });

    it('resolves legacy Spanish role aliases such as contabilidad to finance preset defaults', () => {
        service.hydrateFromSession({
            _id: 'staff-1',
            staff: 'staff-1',
            isStaff: true,
            role: 'contabilidad',
        });

        expect(service.isStaff()).toBe(true);
        expect(service.isOwner()).toBe(false);
        expect(service.canonicalRole()).toBe('finance');
        expect(service.can('billingCredits', 'read')).toBe(true);
        expect(service.can('billingCredits', 'create')).toBe(true);
        expect(service.can('billingUsage', 'export')).toBe(true);
        expect(service.can('smartEnrollProjects', 'read')).toBe(false);
        expect(service.can('apiKeys', 'manageKeys')).toBe(false);
        expect(service.can('workspaceSettings', 'delete')).toBe(false);
    });

    it('respects custom matrix permissions and blocks workspaceSettings.delete even for admins', () => {
        service.hydrateFromSession({
            _id: 'staff-2',
            staff: 'staff-2',
            isStaff: true,
            role: 'admin',
            useCustomPermissions: true,
            permissions: {
                smartReportsBatch: { read: true, create: false, execute: true },
                workspaceSettings: { read: true, update: true, delete: true },
            },
        });

        expect(service.can('smartReportsBatch', 'read')).toBe(true);
        expect(service.can('smartReportsBatch', 'execute')).toBe(true);
        expect(service.can('smartReportsBatch', 'create')).toBe(false);
        expect(service.can('workspaceSettings', 'update')).toBe(true);
        expect(service.can('workspaceSettings', 'delete')).toBe(false);
    });

    it('applies active non-expired temporaryGrants additively while ignoring expired or revoked grants', () => {
        const future = new Date(Date.now() + 60 * 60 * 1000).toISOString();
        const past = new Date(Date.now() - 60 * 60 * 1000).toISOString();

        service.hydrateFromSession({
            _id: 'staff-3',
            staff: 'staff-3',
            isStaff: true,
            role: 'viewer',
            temporaryGrants: [
                {
                    _id: 'grant-active',
                    resource: 'smartReportsBatch',
                    actions: ['execute', 'export'],
                    expiresAt: future,
                },
                {
                    _id: 'grant-expired',
                    resource: 'apiKeys',
                    actions: ['read', 'create'],
                    expiresAt: past,
                },
                {
                    _id: 'grant-revoked',
                    resource: 'smartLinks',
                    actions: ['delete'],
                    permanent: true,
                    revokedAt: past,
                },
            ],
        });

        expect(service.can('smartReportsBatch', 'execute')).toBe(true);
        expect(service.can('smartReportsBatch', 'export')).toBe(true);
        expect(service.can('smartReportsBatch', 'delete')).toBe(false);
        expect(service.can('apiKeys', 'create')).toBe(false);
        expect(service.can('smartLinks', 'delete')).toBe(false);
    });

    it('updates accessPolicy dynamically and resets cleanly on clear()', () => {
        service.hydrateFromSession({
            _id: 'staff-4',
            staff: 'staff-4',
            isStaff: true,
            role: 'operator',
        });

        expect(service.hideRestrictedNavigation()).toBe(false);
        service.updateAccessPolicy({ hideRestrictedNavigation: true, defaultRequestDuration: '24h' });
        expect(service.hideRestrictedNavigation()).toBe(true);
        expect(service.accessPolicy().defaultRequestDuration).toBe('24h');

        service.clear();
        expect(service.hydrated()).toBe(false);
        expect(service.isStaff()).toBe(false);
        expect(service.accessPolicy()).toEqual(DEFAULT_STAFF_ACCESS_POLICY);
    });

    it('enforces report_builder preset gating, disabled access requests, and team.readAll', () => {
        service.hydrateFromSession({
            _id: 'staff-builder',
            staff: 'staff-builder',
            isStaff: true,
            role: 'report_builder',
        });

        expect(service.canonicalRole()).toBe('report_builder');
        expect(service.can('smartReportsTemplates', 'create')).toBe(true);
        expect(service.can('smartReportsBatch', 'update')).toBe(true);
        expect(service.can('smartReportsBatch', 'execute')).toBe(false);
        expect(service.can('smartReportsResults', 'read')).toBe(false);
        expect(service.can('apiKeys', 'read')).toBe(false);
        expect(service.canRequestAccess()).toBe(false);
        expect(service.canRequestResource('smartReportsResults')).toBe(false);
        expect(service.canViewAllTeams()).toBe(false);

        service.hydrateFromSession({
            _id: 'staff-custom-req',
            staff: 'staff-custom-req',
            isStaff: true,
            role: 'viewer',
            customRole: {
                _id: 'cr-1',
                name: 'Scoped Requester',
                slug: 'scoped-requester',
                allowAccessRequests: true,
                requestableResources: ['smartReportsResults'],
            },
        });
        expect(service.canRequestAccess()).toBe(true);
        expect(service.canRequestResource('smartReportsResults')).toBe(true);
        expect(service.canRequestResource('apiKeys')).toBe(false);

        service.hydrateFromSession({
            _id: 'staff-admin',
            staff: 'staff-admin',
            isStaff: true,
            role: 'admin',
        });
        expect(service.can('team', 'readAll')).toBe(true);
        expect(service.canViewAllTeams()).toBe(true);
    });

    it('falls back to smartReportsBatch.{read,export} for legacy cached sessions missing smartReportsResults while honoring explicit false', () => {
        service.hydrateFromSession({
            _id: 'staff-legacy',
            staff: 'staff-legacy',
            isStaff: true,
            role: 'viewer',
            useCustomPermissions: true,
            permissions: {
                smartReportsBatch: { read: true, export: true },
            },
        });

        expect(service.can('smartReportsResults', 'read')).toBe(true);
        expect(service.can('smartReportsResults', 'export')).toBe(true);
        expect(service.can('smartReportsResults', 'create')).toBe(false);

        service.hydrateFromSession({
            _id: 'staff-explicit',
            staff: 'staff-explicit',
            isStaff: true,
            role: 'report_builder',
            permissions: {
                smartReportsBatch: { read: true, export: false },
                smartReportsResults: { read: false, export: false },
            },
        });
        expect(service.can('smartReportsResults', 'read')).toBe(false);
    });
});
