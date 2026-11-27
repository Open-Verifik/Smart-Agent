export type StaffAction =
    | 'read'
    | 'create'
    | 'update'
    | 'delete'
    | 'execute'
    | 'approve'
    | 'export'
    | 'manageKeys'
    | 'readAll';

export type StaffResource =
    | 'home'
    | 'smartCheckPlayground'
    | 'smartCheckLists'
    | 'smartCheckHistory'
    | 'smartReportsTemplates'
    | 'smartReportsBatch'
    | 'smartReportsResults'
    | 'smartFleetAssets'
    | 'smartFleetRules'
    | 'smartEnrollProjects'
    | 'smartEnrollRecords'
    | 'smartEnrollScan'
    | 'smartEnrollBiometrics'
    | 'smartBusinessProjects'
    | 'smartBusinessRecords'
    | 'humanAuthn'
    | 'smartAccess'
    | 'smartLinks'
    | 'smartMonitorStatus'
    | 'smartMonitorWebhooks'
    | 'smartTools'
    | 'billingCredits'
    | 'billingSubscriptions'
    | 'billingUsage'
    | 'apiKeys'
    | 'team'
    | 'workspaceSettings';

export type SystemRoleSlug =
    | 'admin'
    | 'compliance_officer'
    | 'developer'
    | 'finance'
    | 'operator'
    | 'report_builder'
    | 'viewer';

export type RequestDurationOption = '24h' | '7d' | '30d' | 'permanent';

export type EndpointPolicyMode = 'all' | 'blocklist' | 'allowlist';

export interface EndpointPolicy {
    mode: EndpointPolicyMode;
    features: string[];
}

export interface TeamFeatureBudgetDto {
    featureCode: string;
    monthlyBudget: number;
    currentPeriodUsage?: number;
    remaining?: number;
    percentUsed?: number;
}

export interface CatalogEndpointItem {
    code: string;
    name: string;
    nameES?: string | null;
    url?: string;
    method?: string;
    country?: string;
    group?: string;
    baseCategory?: string;
    price?: number;
}

export type PermissionMap = Record<string, Record<string, boolean>>;

export interface ResourceDefinition {
    key: StaffResource;
    label: string;
    labelKey: string;
    group: string;
    groupKey: string;
    navGroup: string;
    applicableActions: StaffAction[];
}

export interface SystemRoleMeta {
    slug: SystemRoleSlug;
    name: string;
    nameKey: string;
    description: string;
    descriptionKey: string;
    color: string;
    allowAccessRequests: boolean;
    requestableResources: StaffResource[] | null;
}

export interface AccessRequestPolicyState {
    allowByTenant: boolean;
    allowByRole: boolean;
    canRequestAccess: boolean;
    requestableResources: StaffResource[] | null;
}

export interface StaffTemporaryGrant {
    _id?: string;
    resource: StaffResource;
    actions: StaffAction[];
    permanent?: boolean;
    grantedAt?: string;
    expiresAt?: string | null;
    requestId?: string | null;
    grantedByType?: 'client' | 'staff';
    grantedById?: string;
    revokedAt?: string | null;
}

export interface StaffAccessPolicy {
    hideRestrictedNavigation: boolean;
    allowAccessRequests: boolean;
    notifyAdminsOnAccessRequest: boolean;
    defaultRequestDuration: RequestDurationOption;
    teamScopedVisibility: boolean;
    requireTeamApiKeys: boolean;
}

export interface TeamBudgetSummary {
    monthlyBudget: number | null;
    currentPeriodBonus: number;
    effectiveCap: number | null;
    currentPeriodUsage: number;
    remaining: number | null;
    percentUsed: number;
    budgetPeriod: string;
    budgetEnforcement: 'hard' | 'soft';
    resetAt: string;
    featureBudgets?: TeamFeatureBudgetDto[];
}

export interface CostCenterSummary {
    _id: string;
    name: string;
    code: string;
    country?: string;
}

export interface StaffTeamSummary {
    _id: string;
    name: string;
    slug: string;
    color?: string;
    status: 'active' | 'paused';
    defaultCostCenter?: CostCenterSummary | string | null;
    allowedCostCenters?: Array<CostCenterSummary | string>;
    enforceCostCenter?: boolean;
    monthlyBudget?: number | null;
    currentPeriodUsage?: number;
    currentPeriodBonus?: number;
    budgetEnforcement?: 'hard' | 'soft';
    budgetPeriod?: string;
    budget?: TeamBudgetSummary | null;
}

export interface CustomRoleSummary {
    _id: string;
    name: string;
    slug: string;
    color?: string;
    allowAccessRequests?: boolean;
    requestableResources?: StaffResource[] | null;
}

export interface ClientRoleDto {
    _id: string;
    client?: string;
    name: string;
    slug: string;
    description?: string;
    color?: string;
    basedOn?: SystemRoleSlug | null;
    permissions: PermissionMap;
    endpointPolicy?: EndpointPolicy;
    allowAccessRequests?: boolean;
    requestableResources?: StaffResource[] | null;
    memberCount?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface TeamBudgetHistoryDto {
    _id?: string;
    team: string;
    period: string;
    budgetCap: number | null;
    bonusGranted: number;
    totalUsed: number;
    requestCount?: number;
}

export interface TeamDto {
    _id: string;
    client?: string;
    name: string;
    slug: string;
    description?: string;
    color?: string;
    status: 'active' | 'paused';
    defaultRole?: SystemRoleSlug | null;
    defaultCustomRole?: CustomRoleSummary | string | null;
    defaultCostCenter?: CostCenterSummary | string | null;
    allowedCostCenters?: Array<CostCenterSummary | string>;
    enforceCostCenter?: boolean;
    monthlyBudget: number | null;
    budgetEnforcement: 'hard' | 'soft';
    budgetPeriod: string;
    currentPeriodUsage: number;
    currentPeriodBonus: number;
    alertThresholds?: number[];
    endpointPolicy?: EndpointPolicy;
    featureBudgets?: TeamFeatureBudgetDto[];
    budget?: TeamBudgetSummary;
    memberCount?: number;
    members?: Array<{
        _id: string;
        name: string;
        email: string;
        role: string;
        customRole?: string | CustomRoleSummary | null;
        status: string;
        avatar?: string | null;
    }>;
    history?: TeamBudgetHistoryDto[];
    createdAt?: string;
    updatedAt?: string;
}

export type AccessRequestType = 'resource_access' | 'role_upgrade' | 'budget_increase';
export type AccessRequestStatus = 'pending' | 'approved' | 'rejected' | 'expired' | 'revoked' | 'cancelled';

export interface StaffAccessRequestResourceItem {
    resource: StaffResource;
    actions: StaffAction[];
}

export interface StaffAccessRequestDto {
    _id: string;
    client: string;
    staff:
        | string
        | {
              _id: string;
              name: string;
              email: string;
              avatar?: string;
              role?: string;
              customRole?: string | CustomRoleSummary | null;
              team?: string | null;
          };
    requestType: AccessRequestType;
    requestedResources?: StaffAccessRequestResourceItem[];
    approvedResources?: StaffAccessRequestResourceItem[];
    requestedRole?: {
        role?: SystemRoleSlug | null;
        customRole?: string | CustomRoleSummary | null;
    };
    requestedTeamBudget?: {
        team?: string | StaffTeamSummary;
        requestedAmount: number;
        boostMode: 'one_time' | 'recurring';
    };
    approvedBudgetAmount?: number | null;
    approvedBoostMode?: 'one_time' | 'recurring' | null;
    reason: string;
    requestedDuration: RequestDurationOption;
    approvedDuration?: RequestDurationOption | null;
    sourcePath?: string;
    status: AccessRequestStatus;
    reviewedByName?: string | null;
    reviewedAt?: string | null;
    reviewNote?: string | null;
    expiresAt?: string | null;
    revokedAt?: string | null;
    revokeReason?: string | null;
    createdAt?: string;
    updatedAt?: string;
}

export interface StaffPermissionsSnapshot {
    isStaff: boolean;
    isOwner: boolean;
    role: string | null;
    canonicalRole: string | null;
    customRole: CustomRoleSummary | null;
    team: StaffTeamSummary | null;
    useCustomPermissions: boolean;
    permissions: PermissionMap | null;
    endpointPolicy?: EndpointPolicy;
    activeTemporaryGrants: StaffTemporaryGrant[];
    staffAccessPolicy: StaffAccessPolicy;
    accessRequestPolicy?: AccessRequestPolicyState;
    pendingRequestsCount: number;
}

export interface StaffPermissionState {
    hydrated: boolean;
    isStaff: boolean;
    isOwner: boolean;
    role: string | null;
    canonicalRole: string | null;
    customRole: CustomRoleSummary | null;
    team: StaffTeamSummary | null;
    useCustomPermissions: boolean;
    permissions: PermissionMap | null;
    temporaryGrants: StaffTemporaryGrant[];
    accessPolicy: StaffAccessPolicy;
    accessRequestPolicy: AccessRequestPolicyState;
    pendingRequestsCount: number;
}

export type TeamAssignableResourceType =
    | 'projects'
    | 'projectFlows'
    | 'smartReportTemplates'
    | 'batchConfigurations'
    | 'smartBatches'
    | 'smartReports'
    | 'appRegistrations'
    | 'documentValidations'
    | 'biometricValidations'
    | 'apiRequests';

export type PermissionCheckTuple = [StaffResource, StaffAction?];

export interface RoutePermissionRequirement {
    resource?: StaffResource;
    action?: StaffAction;
    any?: PermissionCheckTuple[];
    ownerOnly?: boolean;
}
