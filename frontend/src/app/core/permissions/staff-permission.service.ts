import { computed, inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import {
    DEFAULT_STAFF_ACCESS_POLICY,
    defaultPermissionsForRole,
    RESOURCE_MAP,
    resolveRoleSlug,
    SYSTEM_ROLE_METADATA,
} from './staff-permission.constants';
import {
    AccessRequestPolicyState,
    PermissionCheckTuple,
    PermissionMap,
    StaffAccessPolicy,
    StaffAction,
    StaffPermissionsSnapshot,
    StaffPermissionState,
    StaffResource,
    StaffTemporaryGrant,
} from './staff-permission.types';
import { StaffRbacApiService } from './staff-rbac-api.service';

const ACCOUNT_STORAGE_KEY = 'verifik_account';

const DEFAULT_REQUEST_POLICY: AccessRequestPolicyState = {
    allowByTenant: true,
    allowByRole: true,
    canRequestAccess: true,
    requestableResources: null,
};

const INITIAL_STATE: StaffPermissionState = {
    hydrated: false,
    isStaff: false,
    isOwner: false,
    role: null,
    canonicalRole: null,
    customRole: null,
    team: null,
    useCustomPermissions: false,
    permissions: null,
    temporaryGrants: [],
    accessPolicy: { ...DEFAULT_STAFF_ACCESS_POLICY },
    accessRequestPolicy: { ...DEFAULT_REQUEST_POLICY },
    pendingRequestsCount: 0,
};

@Injectable({ providedIn: 'root' })
export class StaffPermissionService {
    private readonly _api = inject(StaffRbacApiService);

    private readonly _state = signal<StaffPermissionState>({ ...INITIAL_STATE });
    private readonly _stateSubject = new BehaviorSubject<StaffPermissionState>({ ...INITIAL_STATE });

    readonly state = this._state.asReadonly();
    readonly state$: Observable<StaffPermissionState> = this._stateSubject.asObservable();

    readonly hydrated = computed(() => this._state().hydrated);
    readonly isStaff = computed(() => this._state().isStaff);
    readonly isOwner = computed(() => this._state().isOwner);
    readonly role = computed(() => this._state().role);
    readonly canonicalRole = computed(() => this._state().canonicalRole);
    readonly customRole = computed(() => this._state().customRole);
    readonly team = computed(() => this._state().team);
    readonly permissions = computed(() => this._state().permissions);
    readonly temporaryGrants = computed(() => this._state().temporaryGrants);
    readonly accessPolicy = computed(() => this._state().accessPolicy);
    readonly accessRequestPolicy = computed(() => this._state().accessRequestPolicy);
    readonly pendingRequestsCount = computed(() => this._state().pendingRequestsCount);

    readonly hideRestrictedNavigation = computed(
        () => this._state().accessPolicy?.hideRestrictedNavigation === true
    );
    readonly allowAccessRequests = computed(
        () => this._state().accessPolicy?.allowAccessRequests !== false
    );
    readonly canRequestAccess = computed(() => {
        const current = this._state();
        if (current.isOwner || !current.isStaff) return true;
        return (
            current.accessPolicy?.allowAccessRequests !== false &&
            current.accessRequestPolicy?.allowByRole !== false &&
            current.accessRequestPolicy?.canRequestAccess !== false
        );
    });
    readonly requestableResources = computed(() => this._state().accessRequestPolicy?.requestableResources ?? null);
    readonly canApproveRequests = computed(
        () =>
            this.isOwner() ||
            !this.isStaff() ||
            this.can('team', 'approve') ||
            this.can('billingCredits', 'update')
    );
    readonly canViewAllTeams = computed(
        () => this.isOwner() || !this.isStaff() || this.can('team', 'readAll')
    );
    readonly canManageOwnTeam = computed(
        () => this.isOwner() || !this.isStaff() || this.can('team', 'manageOwnTeam') || this.can('team', 'readAll')
    );

    constructor() {
        this._tryHydrateFromStorage();
    }

    can(resource: StaffResource | string, action: StaffAction = 'read'): boolean {
        const current = this._state();

        // Owners and non-staff guests/wallet sessions pass client-side staff gating
        if (current.isOwner || !current.isStaff) {
            return true;
        }

        if (resource === 'workspaceSettings' && action === 'delete') {
            return false;
        }

        if (current.permissions?.[resource]?.[action] === true) {
            return true;
        }

        // Backward-compatibility for pre-P0-1 cached staff sessions missing `smartReportsResults`
        if (
            resource === 'smartReportsResults' &&
            current.permissions &&
            current.permissions['smartReportsResults'] === undefined &&
            current.permissions['smartReportsBatch']?.[action] === true
        ) {
            return true;
        }

        // Check active temporary/JIT grants defensively
        const now = Date.now();
        for (const grant of current.temporaryGrants || []) {
            if (!grant || grant.revokedAt || grant.resource !== resource) continue;
            if (!grant.permanent && grant.expiresAt) {
                const exp = new Date(grant.expiresAt).getTime();
                if (!Number.isFinite(exp) || exp <= now) continue;
            }
            if (Array.isArray(grant.actions) && grant.actions.includes(action)) {
                return true;
            }
        }

        // Fallback when session payload lacks a precomputed matrix
        if (!current.permissions && current.canonicalRole) {
            const fallback = defaultPermissionsForRole(current.canonicalRole);
            return fallback?.[resource]?.[action] === true;
        }

        return false;
    }

    canAny(checks: PermissionCheckTuple[]): boolean {
        if (!checks.length) return true;
        return checks.some(([resource, action]) => this.can(resource, action ?? 'read'));
    }

    canAccessResource(resource: StaffResource | string): boolean {
        const meta = RESOURCE_MAP[resource];
        if (!meta) return this.can(resource, 'read');
        return meta.applicableActions.some((action) => this.can(resource, action));
    }

    canRequestResource(resource: StaffResource | string): boolean {
        if (!this.canRequestAccess()) return false;
        const allowlist = this._state().accessRequestPolicy?.requestableResources;
        if (allowlist === null || allowlist === undefined) return true;
        return allowlist.includes(resource as StaffResource);
    }

    hydrateFromSession(user: unknown): void {
        if (!user || typeof user !== 'object') {
            this.clear();
            return;
        }

        const record = user as Record<string, any>;
        const isStaff = Boolean(record['isStaff'] || record['staff']);
        const isOwner = Boolean(!isStaff && (record['_id'] || record['id']));

        const settingsPolicy =
            record['settings']?.staffAccessPolicy || record['clientSettings']?.staffAccessPolicy;

        const accessPolicy: StaffAccessPolicy = {
            ...DEFAULT_STAFF_ACCESS_POLICY,
            ...(settingsPolicy && typeof settingsPolicy === 'object' ? settingsPolicy : {}),
        };

        const rawRole = typeof record['role'] === 'string' ? record['role'] : null;
        const canonicalRole = isStaff
            ? typeof record['canonicalRole'] === 'string'
                ? resolveRoleSlug(record['canonicalRole'])
                : resolveRoleSlug(rawRole)
            : 'owner';

        const permissions: PermissionMap | null = isStaff
            ? record['permissions'] && typeof record['permissions'] === 'object'
                ? (record['permissions'] as PermissionMap)
                : defaultPermissionsForRole(canonicalRole)
            : null;

        const accessRequestPolicy = this._resolveAccessRequestPolicy(
            isStaff,
            canonicalRole,
            record['customRole'] ?? null,
            accessPolicy,
            record['accessRequestPolicy']
        );

        const next: StaffPermissionState = {
            hydrated: true,
            isStaff,
            isOwner,
            role: rawRole ?? canonicalRole,
            canonicalRole,
            customRole: record['customRole'] ?? null,
            team: record['team'] ?? null,
            useCustomPermissions: Boolean(record['useCustomPermissions']),
            permissions,
            temporaryGrants: Array.isArray(record['temporaryGrants']) ? record['temporaryGrants'] : [],
            accessPolicy,
            accessRequestPolicy,
            pendingRequestsCount: Number(record['pendingAccessRequestsCount'] || 0),
        };

        this._commit(next);
    }

    hydrateFromSnapshot(snapshot: StaffPermissionsSnapshot): void {
        if (!snapshot) return;

        const accessPolicy: StaffAccessPolicy = {
            ...DEFAULT_STAFF_ACCESS_POLICY,
            ...(snapshot.staffAccessPolicy || {}),
        };
        const isStaff = Boolean(snapshot.isStaff);
        const canonicalRole = snapshot.canonicalRole ?? null;
        const accessRequestPolicy = this._resolveAccessRequestPolicy(
            isStaff,
            canonicalRole,
            snapshot.customRole ?? null,
            accessPolicy,
            snapshot.accessRequestPolicy
        );

        const next: StaffPermissionState = {
            hydrated: true,
            isStaff,
            isOwner: Boolean(snapshot.isOwner),
            role: snapshot.role,
            canonicalRole,
            customRole: snapshot.customRole ?? null,
            team: snapshot.team ?? null,
            useCustomPermissions: Boolean(snapshot.useCustomPermissions),
            permissions: snapshot.permissions ?? null,
            temporaryGrants: Array.isArray(snapshot.activeTemporaryGrants)
                ? snapshot.activeTemporaryGrants
                : [],
            accessPolicy,
            accessRequestPolicy,
            pendingRequestsCount: Number(snapshot.pendingRequestsCount || 0),
        };

        this._commit(next);
        this._patchStoredAccount(next);
    }

    updateAccessPolicy(policy: Partial<StaffAccessPolicy>): void {
        const current = this._state();
        const merged: StaffAccessPolicy = {
            ...DEFAULT_STAFF_ACCESS_POLICY,
            ...current.accessPolicy,
            ...policy,
        };
        const accessRequestPolicy = this._resolveAccessRequestPolicy(
            current.isStaff,
            current.canonicalRole,
            current.customRole,
            merged
        );
        this._commit({ ...current, accessPolicy: merged, accessRequestPolicy });
    }

    updatePendingRequestsCount(count: number): void {
        const current = this._state();
        this._commit({ ...current, pendingRequestsCount: Math.max(0, Number(count) || 0) });
    }

    refresh(): Observable<StaffPermissionsSnapshot | null> {
        if (typeof localStorage === 'undefined' || !localStorage.getItem('accessToken')) {
            return of(null);
        }

        return this._api.getMyPermissions().pipe(
            tap((snapshot) => this.hydrateFromSnapshot(snapshot)),
            catchError(() => of(null))
        );
    }

    clear(): void {
        this._commit({ ...INITIAL_STATE });
    }

    private _commit(next: StaffPermissionState): void {
        this._state.set(next);
        this._stateSubject.next(next);
    }

    private _tryHydrateFromStorage(): void {
        if (typeof localStorage === 'undefined') return;
        try {
            const raw = localStorage.getItem(ACCOUNT_STORAGE_KEY);
            if (!raw) return;
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') {
                this.hydrateFromSession(parsed);
            }
        } catch {
            // Ignore malformed storage
        }
    }

    private _patchStoredAccount(next: StaffPermissionState): void {
        if (typeof localStorage === 'undefined') return;
        try {
            const raw = localStorage.getItem(ACCOUNT_STORAGE_KEY);
            if (!raw) return;
            const account = JSON.parse(raw);
            if (!account || typeof account !== 'object') return;
            account.canonicalRole = next.canonicalRole;
            account.permissions = next.permissions;
            account.customRole = next.customRole;
            account.team = next.team;
            account.useCustomPermissions = next.useCustomPermissions;
            account.temporaryGrants = next.temporaryGrants;
            account.accessRequestPolicy = next.accessRequestPolicy;
            account.pendingAccessRequestsCount = next.pendingRequestsCount;
            if (account.settings) {
                account.settings.staffAccessPolicy = next.accessPolicy;
            }
            if (account.clientSettings) {
                account.clientSettings.staffAccessPolicy = next.accessPolicy;
            }
            localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(account));
        } catch {
            // Ignore storage write errors
        }
    }

    private _resolveAccessRequestPolicy(
        isStaff: boolean,
        canonicalRole: string | null,
        customRole: StaffPermissionState['customRole'],
        accessPolicy: StaffAccessPolicy,
        provided?: Partial<AccessRequestPolicyState> | null
    ): AccessRequestPolicyState {
        const allowByTenant = accessPolicy?.allowAccessRequests !== false;
        if (!isStaff) {
            return {
                allowByTenant,
                allowByRole: true,
                canRequestAccess: true,
                requestableResources: null,
            };
        }

        if (provided && typeof provided === 'object' && typeof provided.allowByRole === 'boolean') {
            const allowByRole = provided.allowByRole;
            const requestableResources = Array.isArray(provided.requestableResources)
                ? provided.requestableResources
                : null;
            return {
                allowByTenant,
                allowByRole,
                canRequestAccess:
                    typeof provided.canRequestAccess === 'boolean'
                        ? provided.canRequestAccess
                        : allowByTenant && allowByRole,
                requestableResources,
            };
        }

        const meta = canonicalRole
            ? SYSTEM_ROLE_METADATA[canonicalRole as keyof typeof SYSTEM_ROLE_METADATA]
            : undefined;
        const allowByRole = customRole
            ? customRole.allowAccessRequests !== false
            : meta?.allowAccessRequests !== false;
        const requestableResources = customRole
            ? Array.isArray(customRole.requestableResources)
                ? customRole.requestableResources
                : null
            : Array.isArray(meta?.requestableResources)
              ? [...meta.requestableResources]
              : null;

        return {
            allowByTenant,
            allowByRole,
            canRequestAccess: allowByTenant && allowByRole,
            requestableResources,
        };
    }
}
