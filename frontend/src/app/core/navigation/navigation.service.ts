import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';
import { defaultPermissionsForRole } from 'app/core/permissions/staff-permission.constants';
import { StaffPermissionService } from 'app/core/permissions/staff-permission.service';
import { StaffAction, StaffPermissionState, StaffResource } from 'app/core/permissions/staff-permission.types';
import { cloneDeep } from 'lodash-es';
import { combineLatest, map, Observable, ReplaySubject, tap } from 'rxjs';

function canAccessInState(
    state: StaffPermissionState,
    resource: StaffResource | string,
    action: StaffAction = 'read'
): boolean {
    if (state.isOwner || !state.isStaff) return true;
    if (resource === 'workspaceSettings' && action === 'delete') return false;
    if (state.permissions?.[resource]?.[action] === true) return true;

    const now = Date.now();
    for (const grant of state.temporaryGrants || []) {
        if (!grant || grant.revokedAt || grant.resource !== resource) continue;
        if (!grant.permanent && grant.expiresAt) {
            const exp = new Date(grant.expiresAt).getTime();
            if (!Number.isFinite(exp) || exp <= now) continue;
        }
        if (Array.isArray(grant.actions) && grant.actions.includes(action)) {
            return true;
        }
    }

    if (!state.permissions && state.canonicalRole) {
        return defaultPermissionsForRole(state.canonicalRole)?.[resource]?.[action] === true;
    }

    return false;
}

function isMetaPermitted(meta: FuseNavigationItem['meta'], state: StaffPermissionState): boolean {
    if (!meta) return true;
    if (Array.isArray(meta.anyResources) && meta.anyResources.length > 0) {
        return meta.anyResources.some((res: StaffResource) =>
            canAccessInState(state, res, meta.action ?? 'read')
        );
    }
    if (meta.resource) {
        return canAccessInState(state, meta.resource, meta.action ?? 'read');
    }
    return true;
}

function cleanDividers(items: FuseNavigationItem[]): FuseNavigationItem[] {
    const out: FuseNavigationItem[] = [];
    for (const item of items) {
        if (item.type === 'divider') {
            if (out.length === 0 || out[out.length - 1].type === 'divider') {
                continue;
            }
        }
        out.push(item);
    }
    while (out.length > 0 && out[out.length - 1].type === 'divider') {
        out.pop();
    }
    return out;
}

function transformItems(
    items: FuseNavigationItem[],
    state: StaffPermissionState,
    hideRestricted: boolean
): FuseNavigationItem[] {
    const mapped: FuseNavigationItem[] = [];

    for (const raw of items) {
        const item = cloneDeep(raw);

        if (item.type === 'divider' || item.type === 'spacer') {
            mapped.push(item);
            continue;
        }

        if (item.children && item.children.length > 0) {
            const nextChildren = transformItems(item.children, state, hideRestricted);
            const nonDividerCount = nextChildren.filter(
                (c) => c.type !== 'divider' && c.type !== 'spacer'
            ).length;

            if (hideRestricted && nonDividerCount === 0) {
                continue;
            }

            item.children = nextChildren;

            // In Mode A, lock parent product if every leaf inside it is locked
            if (!hideRestricted && (item.type === 'collapsable' || item.type === 'aside')) {
                const anyUnlocked = nextChildren.some(
                    (c) =>
                        c.type !== 'divider' &&
                        c.type !== 'spacer' &&
                        !c.classes?.wrapper?.includes('nav-item--locked')
                );
                if (!anyUnlocked && nonDividerCount > 0) {
                    const prevWrapper = item.classes?.wrapper || '';
                    item.classes = {
                        ...(item.classes || {}),
                        wrapper: `${prevWrapper} nav-item--locked`.trim(),
                    };
                    item.badge = { title: '', classes: 'nav-lock-badge' };
                }
            }

            mapped.push(item);
            continue;
        }

        const permitted = isMetaPermitted(item.meta, state);
        if (!permitted) {
            if (hideRestricted) {
                continue;
            }
            const prevWrapper = item.classes?.wrapper || '';
            item.classes = {
                ...(item.classes || {}),
                wrapper: `${prevWrapper} nav-item--locked`.trim(),
            };
            item.badge = { title: '', classes: 'nav-lock-badge' };
        }

        mapped.push(item);
    }

    return hideRestricted ? cleanDividers(mapped) : mapped;
}

/**
 * Pure helper applying Client > Staff RBAC filtering or lock-badging across all
 * four Fuse navigation trees (`compact`, `default`, `futuristic`, `horizontal`).
 */
export function filterNavigationForStaff(
    navigation: Navigation,
    state: StaffPermissionState
): Navigation {
    if (!navigation || state.isOwner || !state.isStaff) {
        return navigation;
    }

    const hideRestricted = state.accessPolicy?.hideRestrictedNavigation === true;

    return {
        compact: transformItems(navigation.compact || [], state, hideRestricted),
        default: transformItems(navigation.default || [], state, hideRestricted),
        futuristic: transformItems(navigation.futuristic || [], state, hideRestricted),
        horizontal: transformItems(navigation.horizontal || [], state, hideRestricted),
    };
}

@Injectable({ providedIn: 'root' })
export class NavigationService {
    private _httpClient = inject(HttpClient);
    private _staffPermissionService = inject(StaffPermissionService);
    private _navigation: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reactive getter for navigation filtered/badged per Client > Staff RBAC policy.
     */
    get navigation$(): Observable<Navigation> {
        return combineLatest([this._navigation.asObservable(), this._staffPermissionService.state$]).pipe(
            map(([navigation, state]) => filterNavigationForStaff(navigation, state))
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<Navigation> {
        return this._httpClient.get<Navigation>('api/common/navigation').pipe(
            tap((navigation) => {
                this._navigation.next(navigation);
            })
        );
    }
}
