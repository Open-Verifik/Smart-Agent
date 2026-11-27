import { inject, Injectable } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { environment } from 'environments/environment';
import { map, Observable, shareReplay } from 'rxjs';
import {
    AccessRequestType,
    CatalogEndpointItem,
    ClientRoleDto,
    EndpointPolicy,
    PermissionMap,
    RequestDurationOption,
    StaffAccessRequestDto,
    StaffAccessRequestResourceItem,
    StaffAuditLogPageDto,
    StaffPermissionsSnapshot,
    StaffResource,
    SystemRoleSlug,
    TeamAssignableResourceType,
    TeamDto,
    TeamFeatureBudgetDto,
} from './staff-permission.types';

const apiUrl = (path: string): string =>
    `${(environment.apiUrl || '').replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;

@Injectable({ providedIn: 'root' })
export class StaffRbacApiService {
    private readonly _http = inject(HttpWrapperService);
    private _endpointsCache$?: Observable<CatalogEndpointItem[]>;

    // ---- Endpoint Catalog (cached) ----

    listAvailableEndpoints(): Observable<CatalogEndpointItem[]> {
        if (!this._endpointsCache$) {
            this._endpointsCache$ = this._http
                .sendRequest('get', apiUrl('v2/public/app-features'))
                .pipe(
                    map((res) => {
                        const raw: any[] = Array.isArray(res?.data)
                            ? res.data
                            : Array.isArray(res)
                              ? res
                              : [];
                        const seen = new Set<string>();
                        const items: CatalogEndpointItem[] = [];
                        for (const item of raw) {
                            const code = String(item?.code || '').trim();
                            if (!code || seen.has(code)) continue;
                            if (item?.isAvailable === false || item?.catalogHidden === true) continue;
                            seen.add(code);
                            items.push({
                                code,
                                name: String(item?.name || code),
                                nameES: item?.nameES || null,
                                url: item?.url ? String(item.url) : undefined,
                                method: item?.method ? String(item.method) : undefined,
                                country: item?.country ? String(item.country) : undefined,
                                group: item?.group ? String(item.group) : undefined,
                                baseCategory: item?.baseCategory ? String(item.baseCategory) : undefined,
                                price:
                                    typeof item?.smartCheckPrice === 'number'
                                        ? item.smartCheckPrice
                                        : typeof item?.price === 'number'
                                          ? item.price
                                          : undefined,
                            });
                        }
                        return items.sort((a, b) => a.name.localeCompare(b.name));
                    }),
                    shareReplay(1)
                );
        }
        return this._endpointsCache$;
    }

    // ---- Caller permissions ----

    getMyPermissions(): Observable<StaffPermissionsSnapshot> {
        return this._http
            .sendRequest('get', apiUrl('v2/staff/me/permissions'))
            .pipe(map((res) => (res?.data ?? res) as StaffPermissionsSnapshot));
    }

    // ---- Staff security actions ----

    revokeStaffSession(staffId: string): Observable<{ revoked: boolean }> {
        return this._http
            .sendRequest('post', apiUrl(`v2/staff/${staffId}/revoke-session`), {})
            .pipe(map((res) => res?.data ?? res));
    }

    revokeStaffGrant(staffId: string, grantId: string): Observable<{ revoked: boolean }> {
        return this._http
            .sendRequest('delete', apiUrl(`v2/staff/${staffId}/grants/${grantId}`))
            .pipe(map((res) => res?.data ?? res));
    }

    // ---- Custom Roles ----

    getRoleCatalog(): Observable<unknown> {
        return this._http
            .sendRequest('get', apiUrl('v2/client-roles/catalog'))
            .pipe(map((res) => res?.data ?? res));
    }

    listClientRoles(): Observable<ClientRoleDto[]> {
        return this._http
            .sendRequest('get', apiUrl('v2/client-roles'))
            .pipe(map((res) => (Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [])));
    }

    createClientRole(payload: {
        name: string;
        description?: string;
        color?: string;
        basedOn?: SystemRoleSlug | null;
        permissions: PermissionMap;
        endpointPolicy?: EndpointPolicy;
        allowAccessRequests?: boolean;
        requestableResources?: StaffResource[] | null;
    }): Observable<ClientRoleDto> {
        return this._http
            .sendRequest('post', apiUrl('v2/client-roles'), payload)
            .pipe(map((res) => (res?.data ?? res) as ClientRoleDto));
    }

    updateClientRole(
        id: string,
        payload: Partial<{
            name: string;
            description: string;
            color: string;
            basedOn: SystemRoleSlug | null;
            permissions: PermissionMap;
            endpointPolicy: EndpointPolicy;
            allowAccessRequests: boolean;
            requestableResources: StaffResource[] | null;
        }>
    ): Observable<ClientRoleDto> {
        return this._http
            .sendRequest('put', apiUrl(`v2/client-roles/${id}`), payload)
            .pipe(map((res) => (res?.data ?? res) as ClientRoleDto));
    }

    duplicateClientRole(id: string, payload?: { name?: string }): Observable<ClientRoleDto> {
        return this._http
            .sendRequest('post', apiUrl(`v2/client-roles/${id}/duplicate`), payload ?? {})
            .pipe(map((res) => (res?.data ?? res) as ClientRoleDto));
    }

    deleteClientRole(
        id: string,
        reassignTo?: { reassignToRole?: SystemRoleSlug; reassignToCustomRole?: string | null }
    ): Observable<unknown> {
        const cleanParams: Record<string, string> = {};
        if (reassignTo?.reassignToRole) cleanParams['reassignToRole'] = reassignTo.reassignToRole;
        if (reassignTo?.reassignToCustomRole) {
            cleanParams['reassignToCustomRole'] = reassignTo.reassignToCustomRole;
        }
        return this._http
            .sendRequest('delete', apiUrl(`v2/client-roles/${id}`), cleanParams)
            .pipe(map((res) => res?.data ?? res));
    }

    // ---- Sub-Teams & Monthly Budgets ----

    listTeams(): Observable<TeamDto[]> {
        return this._http
            .sendRequest('get', apiUrl('v2/teams'))
            .pipe(map((res) => (Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [])));
    }

    getTeam(id: string): Observable<TeamDto> {
        return this._http
            .sendRequest('get', apiUrl(`v2/teams/${id}`))
            .pipe(map((res) => (res?.data ?? res) as TeamDto));
    }

    createTeam(payload: {
        name: string;
        description?: string;
        color?: string;
        status?: 'active' | 'paused';
        monthlyBudget?: number | null;
        budgetEnforcement?: 'hard' | 'soft';
        alertThresholds?: number[];
        endpointPolicy?: EndpointPolicy;
        featureBudgets?: TeamFeatureBudgetDto[];
        defaultRole?: SystemRoleSlug | null;
        defaultCustomRole?: string | null;
        parentTeam?: string | null;
        defaultCostCenter?: string | null;
        allowedCostCenters?: string[];
        enforceCostCenter?: boolean;
        memberIds?: string[];
    }): Observable<TeamDto> {
        return this._http
            .sendRequest('post', apiUrl('v2/teams'), payload)
            .pipe(map((res) => (res?.data ?? res) as TeamDto));
    }

    updateTeam(
        id: string,
        payload: Partial<{
            name: string;
            description: string;
            color: string;
            status: 'active' | 'paused';
            monthlyBudget: number | null;
            budgetEnforcement: 'hard' | 'soft';
            alertThresholds: number[];
            endpointPolicy: EndpointPolicy;
            featureBudgets: TeamFeatureBudgetDto[];
            defaultRole: SystemRoleSlug | null;
            defaultCustomRole: string | null;
            parentTeam: string | null;
            defaultCostCenter: string | null;
            allowedCostCenters: string[];
            enforceCostCenter: boolean;
            memberIds: string[];
        }>
    ): Observable<TeamDto> {
        return this._http
            .sendRequest('put', apiUrl(`v2/teams/${id}`), payload)
            .pipe(map((res) => (res?.data ?? res) as TeamDto));
    }

    addTeamBudgetBoost(
        id: string,
        payload: { amount: number; mode?: 'one_time' | 'recurring' }
    ): Observable<TeamDto> {
        return this._http
            .sendRequest('post', apiUrl(`v2/teams/${id}/boost`), payload)
            .pipe(map((res) => (res?.data ?? res) as TeamDto));
    }

    createTeamApiKey(
        id: string,
        payload: { name: string; expiresIn?: string; project?: string }
    ): Observable<{ token: string; tokenRecord: unknown }> {
        return this._http
            .sendRequest('post', apiUrl(`v2/teams/${id}/api-keys`), payload)
            .pipe(map((res) => res?.data ?? res));
    }

    deleteTeam(id: string): Observable<unknown> {
        return this._http
            .sendRequest('delete', apiUrl(`v2/teams/${id}`))
            .pipe(map((res) => res?.data ?? res));
    }

    assignResourcesToTeam(
        teamId: string,
        payload: {
            resourceType: TeamAssignableResourceType;
            ids: string[];
            visibility?: 'team' | 'workspace';
        }
    ): Observable<{
        resourceType: TeamAssignableResourceType;
        teamId: string | null;
        matchedCount: number;
        modifiedCount: number;
    }> {
        return this._http
            .sendRequest('post', apiUrl(`v2/teams/${teamId}/assign`), payload)
            .pipe(map((res) => res?.data ?? res));
    }

    // ---- Access & Budget Requests ----

    listAccessRequests(params?: {
        status?: string;
        requestType?: string;
        page?: number;
        perPage?: number;
    }): Observable<{
        docs: StaffAccessRequestDto[];
        total: number;
        pendingCount: number;
        page: number;
        pages: number;
    }> {
        return this._http
            .sendRequest('get', apiUrl('v2/staff-access-requests'), params ?? {})
            .pipe(map((res) => res?.data ?? res));
    }

    listMyAccessRequests(status = 'all'): Observable<StaffAccessRequestDto[]> {
        return this._http
            .sendRequest('get', apiUrl('v2/staff-access-requests/mine'), { status })
            .pipe(map((res) => (Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [])));
    }

    createAccessRequest(payload: {
        requestType: AccessRequestType;
        requestedResources?: StaffAccessRequestResourceItem[];
        requestedRole?: { role?: SystemRoleSlug | null; customRole?: string | null };
        requestedTeamBudget?: {
            team?: string;
            requestedAmount: number;
            boostMode?: 'one_time' | 'recurring';
        };
        requestedDuration?: RequestDurationOption;
        reason: string;
        sourcePath?: string;
    }): Observable<StaffAccessRequestDto> {
        return this._http
            .sendRequest('post', apiUrl('v2/staff-access-requests'), payload)
            .pipe(map((res) => (res?.data ?? res) as StaffAccessRequestDto));
    }

    approveAccessRequest(
        id: string,
        payload?: {
            approvedResources?: StaffAccessRequestResourceItem[];
            approvedDuration?: RequestDurationOption;
            role?: SystemRoleSlug;
            customRole?: string | null;
            approvedBudgetAmount?: number;
            approvedBoostMode?: 'one_time' | 'recurring';
            reviewNote?: string;
        }
    ): Observable<StaffAccessRequestDto> {
        return this._http
            .sendRequest('post', apiUrl(`v2/staff-access-requests/${id}/approve`), payload ?? {})
            .pipe(map((res) => (res?.data ?? res) as StaffAccessRequestDto));
    }

    rejectAccessRequest(id: string, payload?: { reviewNote?: string }): Observable<StaffAccessRequestDto> {
        return this._http
            .sendRequest('post', apiUrl(`v2/staff-access-requests/${id}/reject`), payload ?? {})
            .pipe(map((res) => (res?.data ?? res) as StaffAccessRequestDto));
    }

    cancelAccessRequest(id: string): Observable<StaffAccessRequestDto> {
        return this._http
            .sendRequest('post', apiUrl(`v2/staff-access-requests/${id}/cancel`), {})
            .pipe(map((res) => (res?.data ?? res) as StaffAccessRequestDto));
    }

    revokeAccessRequest(id: string, payload?: { revokeReason?: string }): Observable<StaffAccessRequestDto> {
        return this._http
            .sendRequest('post', apiUrl(`v2/staff-access-requests/${id}/revoke`), payload ?? {})
            .pipe(map((res) => (res?.data ?? res) as StaffAccessRequestDto));
    }

    // ---- Audit Logs ----

    listAuditLogs(params?: {
        team?: string;
        action?: string;
        resourceType?: string;
        startDate?: string;
        endDate?: string;
        page?: number;
        limit?: number;
    }): Observable<StaffAuditLogPageDto> {
        return this._http
            .sendRequest('get', apiUrl('v2/staff-audit-logs'), params ?? {})
            .pipe(map((res) => (res?.data ?? res) as StaffAuditLogPageDto));
    }
}
