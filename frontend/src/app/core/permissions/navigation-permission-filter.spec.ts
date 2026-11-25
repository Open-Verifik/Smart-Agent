import '@angular/compiler';
import 'zone.js';
import { describe, expect, it } from 'vitest';
import { filterNavigationForStaff } from 'app/core/navigation/navigation.service';
import { Navigation } from 'app/core/navigation/navigation.types';
import { DEFAULT_STAFF_ACCESS_POLICY, defaultPermissionsForRole } from './staff-permission.constants';
import { StaffPermissionState } from './staff-permission.types';

function buildFixtureNav(): Navigation {
    const items = [
        {
            id: 'home',
            title: 'Home',
            type: 'basic' as const,
            link: '/home',
            meta: { resource: 'home' },
        },
        { id: 'div-1', type: 'divider' as const },
        {
            id: 'smart-enroll',
            title: 'SmartEnroll',
            type: 'collapsable' as const,
            children: [
                {
                    id: 'smart-enroll-projects',
                    title: 'Projects',
                    type: 'basic' as const,
                    link: '/smart-enroll/projects',
                    meta: { resource: 'smartEnrollProjects' },
                },
            ],
        },
        { id: 'div-2', type: 'divider' as const },
        {
            id: 'billing-group',
            title: 'Billing',
            type: 'collapsable' as const,
            children: [
                {
                    id: 'billing-credits',
                    title: 'Add Credits',
                    type: 'basic' as const,
                    link: '/add-credits',
                    meta: { resource: 'billingCredits' },
                },
            ],
        },
        { id: 'div-3', type: 'divider' as const },
    ];

    return {
        default: items,
        compact: [{ id: 'compact-root', title: 'Workspace', type: 'aside' as const, children: items }],
        futuristic: items,
        horizontal: items,
    };
}

function viewerState(hideRestrictedNavigation: boolean): StaffPermissionState {
    return {
        hydrated: true,
        isStaff: true,
        isOwner: false,
        role: 'viewer',
        canonicalRole: 'viewer',
        customRole: null,
        team: null,
        useCustomPermissions: false,
        permissions: defaultPermissionsForRole('viewer'),
        temporaryGrants: [],
        accessPolicy: {
            ...DEFAULT_STAFF_ACCESS_POLICY,
            hideRestrictedNavigation,
        },
        pendingRequestsCount: 0,
    };
}

describe('filterNavigationForStaff', () => {
    it('returns navigation unmodified for workspace owners', () => {
        const nav = buildFixtureNav();
        const ownerState: StaffPermissionState = {
            hydrated: true,
            isStaff: false,
            isOwner: true,
            role: 'owner',
            canonicalRole: 'owner',
            customRole: null,
            team: null,
            useCustomPermissions: false,
            permissions: null,
            temporaryGrants: [],
            accessPolicy: { ...DEFAULT_STAFF_ACCESS_POLICY },
            pendingRequestsCount: 0,
        };

        const out = filterNavigationForStaff(nav, ownerState);
        expect(out).toBe(nav);
    });

    it('adds nav-item--locked and nav-lock-badge in Mode A without removing items', () => {
        const nav = buildFixtureNav();
        const out = filterNavigationForStaff(nav, viewerState(false));

        expect(out.default.length).toBe(nav.default.length);
        const enrollGroup = out.default.find((i) => i.id === 'smart-enroll');
        const billingGroup = out.default.find((i) => i.id === 'billing-group');

        expect(enrollGroup?.classes?.wrapper || '').not.toContain('nav-item--locked');
        expect(billingGroup?.classes?.wrapper).toContain('nav-item--locked');
        expect(billingGroup?.badge?.classes).toBe('nav-lock-badge');
        expect(billingGroup?.children?.[0]?.classes?.wrapper).toContain('nav-item--locked');
    });

    it('removes restricted items, empty groups, and duplicate/trailing dividers in Mode B', () => {
        const nav = buildFixtureNav();
        const out = filterNavigationForStaff(nav, viewerState(true));

        const ids = out.default.map((i) => i.id);
        expect(ids).toContain('home');
        expect(ids).toContain('smart-enroll');
        expect(ids).not.toContain('billing-group');
        // No trailing divider after empty billing-group is removed
        expect(out.default[out.default.length - 1]?.type).not.toBe('divider');
        // No two consecutive dividers remain
        for (let i = 1; i < out.default.length; i++) {
            expect(out.default[i].type === 'divider' && out.default[i - 1].type === 'divider').toBe(false);
        }
    });
});
