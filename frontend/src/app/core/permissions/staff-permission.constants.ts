import {
    PermissionMap,
    ResourceDefinition,
    StaffAccessPolicy,
    StaffAction,
    StaffResource,
    SystemRoleMeta,
    SystemRoleSlug,
} from './staff-permission.types';

export const STAFF_ACTIONS: readonly StaffAction[] = [
    'read',
    'create',
    'update',
    'delete',
    'execute',
    'approve',
    'export',
    'manageKeys',
    'readAll',
    'manageOwnTeam',
] as const;

export const ACTION_LABELS: Record<StaffAction, { label: string; labelKey: string; tooltipKey: string }> = {
    read: { label: 'View', labelKey: 'staffRbac.actions.read', tooltipKey: 'staffRbac.actionTooltips.read' },
    create: { label: 'Create', labelKey: 'staffRbac.actions.create', tooltipKey: 'staffRbac.actionTooltips.create' },
    update: { label: 'Edit', labelKey: 'staffRbac.actions.update', tooltipKey: 'staffRbac.actionTooltips.update' },
    delete: { label: 'Delete', labelKey: 'staffRbac.actions.delete', tooltipKey: 'staffRbac.actionTooltips.delete' },
    execute: { label: 'Run', labelKey: 'staffRbac.actions.execute', tooltipKey: 'staffRbac.actionTooltips.execute' },
    approve: { label: 'Approve', labelKey: 'staffRbac.actions.approve', tooltipKey: 'staffRbac.actionTooltips.approve' },
    export: { label: 'Export', labelKey: 'staffRbac.actions.export', tooltipKey: 'staffRbac.actionTooltips.export' },
    manageKeys: {
        label: 'Keys / Admin',
        labelKey: 'staffRbac.actions.manageKeys',
        tooltipKey: 'staffRbac.actionTooltips.manageKeys',
    },
    readAll: {
        label: 'All Teams',
        labelKey: 'staffRbac.actions.readAll',
        tooltipKey: 'staffRbac.actionTooltips.readAll',
    },
    manageOwnTeam: {
        label: 'Manage Own Team',
        labelKey: 'staffRbac.actions.manageOwnTeam',
        tooltipKey: 'staffRbac.actionTooltips.manageOwnTeam',
    },
};

const ACTION_BY_CODE: Record<string, StaffAction> = {
    R: 'read',
    C: 'create',
    U: 'update',
    D: 'delete',
    E: 'execute',
    A: 'approve',
    X: 'export',
    K: 'manageKeys',
    L: 'readAll',
    M: 'manageOwnTeam',
};

export const SYSTEM_ROLES: readonly SystemRoleSlug[] = [
    'admin',
    'team_manager',
    'compliance_officer',
    'developer',
    'finance',
    'operator',
    'report_builder',
    'viewer',
] as const;

export const LEGACY_ROLE_MAP: Record<string, SystemRoleSlug> = {
    administrador: 'admin',
    desarrollador: 'developer',
    contabilidad: 'finance',
    empleado: 'operator',
};

export const SYSTEM_ROLE_METADATA: Record<SystemRoleSlug, SystemRoleMeta> = {
    admin: {
        slug: 'admin',
        name: 'Admin',
        nameKey: 'staffRbac.roles.admin.name',
        description:
            'Full operational, team, billing, and developer control (cannot delete workspace or override Owner-only guardrails).',
        descriptionKey: 'staffRbac.roles.admin.desc',
        color: 'indigo',
        allowAccessRequests: true,
        requestableResources: null,
    },
    team_manager: {
        slug: 'team_manager',
        name: 'Team Manager',
        nameKey: 'staffRbac.roles.team_manager.name',
        description:
            'Manage members, sub-teams, budgets, access requests, and CECO usage exports within assigned team and child sub-teams.',
        descriptionKey: 'staffRbac.roles.team_manager.desc',
        color: 'cyan',
        allowAccessRequests: true,
        requestableResources: null,
    },
    compliance_officer: {
        slug: 'compliance_officer',
        name: 'Compliance Officer',
        nameKey: 'staffRbac.roles.compliance_officer.name',
        description:
            'Review and approve/reject KYC & KYB dossiers, acknowledge fleet alerts, run checks, and export compliance reports.',
        descriptionKey: 'staffRbac.roles.compliance_officer.desc',
        color: 'emerald',
        allowAccessRequests: true,
        requestableResources: null,
    },
    developer: {
        slug: 'developer',
        name: 'Developer',
        nameKey: 'staffRbac.roles.developer.name',
        description:
            'Configure projects, flows, templates, webhooks, API keys, and run technical validations without billing or manual KYC approval.',
        descriptionKey: 'staffRbac.roles.developer.desc',
        color: 'sky',
        allowAccessRequests: true,
        requestableResources: null,
    },
    finance: {
        slug: 'finance',
        name: 'Finance',
        nameKey: 'staffRbac.roles.finance.name',
        description:
            'Manage credits, payment methods, subscriptions, invoices, cost centers, and usage reports without accessing PII or API keys.',
        descriptionKey: 'staffRbac.roles.finance.desc',
        color: 'amber',
        allowAccessRequests: true,
        requestableResources: null,
    },
    operator: {
        slug: 'operator',
        name: 'Operator',
        nameKey: 'staffRbac.roles.operator.name',
        description:
            'Run day-to-day verification lookups, SmartBatch jobs, SmartScan, and Smart Link campaigns without delete or config rights.',
        descriptionKey: 'staffRbac.roles.operator.desc',
        color: 'slate',
        allowAccessRequests: true,
        requestableResources: null,
    },
    report_builder: {
        slug: 'report_builder',
        name: 'Document Builder',
        nameKey: 'staffRbac.roles.report_builder.name',
        description:
            'Create and edit report templates and batch configurations without viewing executed report results, PII, or API keys.',
        descriptionKey: 'staffRbac.roles.report_builder.desc',
        color: 'violet',
        allowAccessRequests: false,
        requestableResources: [],
    },
    viewer: {
        slug: 'viewer',
        name: 'Viewer',
        nameKey: 'staffRbac.roles.viewer.name',
        description: 'Strict read-only observer across verification dashboards, records, and reports.',
        descriptionKey: 'staffRbac.roles.viewer.desc',
        color: 'zinc',
        allowAccessRequests: true,
        requestableResources: null,
    },
};

export const STAFF_RESOURCES: readonly ResourceDefinition[] = [
    {
        key: 'home',
        label: 'Home & Onboarding',
        labelKey: 'staffRbac.resources.home',
        group: 'Home',
        groupKey: 'staffRbac.groups.home',
        navGroup: 'home',
        applicableActions: ['read', 'update'],
    },
    {
        key: 'smartCheckPlayground',
        label: 'AI Chat & Postman',
        labelKey: 'staffRbac.resources.smartCheckPlayground',
        group: 'SmartCheck',
        groupKey: 'staffRbac.groups.smartCheck',
        navGroup: 'smart-check',
        applicableActions: ['read', 'create', 'update', 'delete', 'execute'],
    },
    {
        key: 'smartCheckLists',
        label: 'Check Lists',
        labelKey: 'staffRbac.resources.smartCheckLists',
        group: 'SmartCheck',
        groupKey: 'staffRbac.groups.smartCheck',
        navGroup: 'smart-check',
        applicableActions: ['read', 'create', 'update', 'delete', 'execute'],
    },
    {
        key: 'smartCheckHistory',
        label: 'Verification History',
        labelKey: 'staffRbac.resources.smartCheckHistory',
        group: 'SmartCheck',
        groupKey: 'staffRbac.groups.smartCheck',
        navGroup: 'smart-check',
        applicableActions: ['read', 'export'],
    },
    {
        key: 'smartReportsTemplates',
        label: 'PDF Builder & Templates',
        labelKey: 'staffRbac.resources.smartReportsTemplates',
        group: 'SmartReports',
        groupKey: 'staffRbac.groups.smartReports',
        navGroup: 'smart-reports',
        applicableActions: ['read', 'create', 'update', 'delete', 'export'],
    },
    {
        key: 'smartReportsBatch',
        label: 'Batch Presets & Configs',
        labelKey: 'staffRbac.resources.smartReportsBatch',
        group: 'SmartReports',
        groupKey: 'staffRbac.groups.smartReports',
        navGroup: 'smart-reports',
        applicableActions: ['read', 'create', 'update', 'delete', 'execute', 'export'],
    },
    {
        key: 'smartReportsResults',
        label: 'Report Runs & Results',
        labelKey: 'staffRbac.resources.smartReportsResults',
        group: 'SmartReports',
        groupKey: 'staffRbac.groups.smartReports',
        navGroup: 'smart-reports',
        applicableActions: ['read', 'export'],
    },
    {
        key: 'smartFleetAssets',
        label: 'Dashboard, Vehicles & Drivers',
        labelKey: 'staffRbac.resources.smartFleetAssets',
        group: 'SmartFleet',
        groupKey: 'staffRbac.groups.smartFleet',
        navGroup: 'smart-fleet',
        applicableActions: ['read', 'create', 'update', 'delete', 'execute', 'export'],
    },
    {
        key: 'smartFleetRules',
        label: 'Watch Rules & Alerts',
        labelKey: 'staffRbac.resources.smartFleetRules',
        group: 'SmartFleet',
        groupKey: 'staffRbac.groups.smartFleet',
        navGroup: 'smart-fleet',
        applicableActions: ['read', 'create', 'update', 'delete', 'approve', 'export'],
    },
    {
        key: 'smartEnrollProjects',
        label: 'KYC Projects & Flows',
        labelKey: 'staffRbac.resources.smartEnrollProjects',
        group: 'SmartEnroll',
        groupKey: 'staffRbac.groups.smartEnroll',
        navGroup: 'smart-enroll',
        applicableActions: ['read', 'create', 'update', 'delete'],
    },
    {
        key: 'smartEnrollRecords',
        label: 'Enrollment Records & Reviews',
        labelKey: 'staffRbac.resources.smartEnrollRecords',
        group: 'SmartEnroll',
        groupKey: 'staffRbac.groups.smartEnroll',
        navGroup: 'smart-enroll',
        applicableActions: ['read', 'update', 'delete', 'approve', 'export'],
    },
    {
        key: 'smartEnrollScan',
        label: 'SmartScan & Doc Templates',
        labelKey: 'staffRbac.resources.smartEnrollScan',
        group: 'SmartEnroll',
        groupKey: 'staffRbac.groups.smartEnroll',
        navGroup: 'smart-enroll',
        applicableActions: ['read', 'create', 'update', 'delete', 'execute'],
    },
    {
        key: 'smartEnrollBiometrics',
        label: 'Biometrics, People & Demos',
        labelKey: 'staffRbac.resources.smartEnrollBiometrics',
        group: 'SmartEnroll',
        groupKey: 'staffRbac.groups.smartEnroll',
        navGroup: 'smart-enroll',
        applicableActions: ['read', 'create', 'update', 'delete', 'execute'],
    },
    {
        key: 'smartBusinessProjects',
        label: 'KYB Projects & Templates',
        labelKey: 'staffRbac.resources.smartBusinessProjects',
        group: 'SmartBusiness',
        groupKey: 'staffRbac.groups.smartBusiness',
        navGroup: 'smart-business',
        applicableActions: ['read', 'create', 'update', 'delete', 'execute'],
    },
    {
        key: 'smartBusinessRecords',
        label: 'Company Dossiers & Reviews',
        labelKey: 'staffRbac.resources.smartBusinessRecords',
        group: 'SmartBusiness',
        groupKey: 'staffRbac.groups.smartBusiness',
        navGroup: 'smart-business',
        applicableActions: ['read', 'update', 'delete', 'approve', 'export'],
    },
    {
        key: 'humanAuthn',
        label: 'Projects, Demos & History',
        labelKey: 'staffRbac.resources.humanAuthn',
        group: 'HumanAuthn',
        groupKey: 'staffRbac.groups.humanAuthn',
        navGroup: 'human-authn',
        applicableActions: ['read', 'create', 'update', 'delete', 'execute'],
    },
    {
        key: 'smartAccess',
        label: 'Access Projects & Logins',
        labelKey: 'staffRbac.resources.smartAccess',
        group: 'Smart Access',
        groupKey: 'staffRbac.groups.smartAccess',
        navGroup: 'smart-access',
        applicableActions: ['read', 'create', 'update', 'delete'],
    },
    {
        key: 'smartLinks',
        label: 'Campaigns & Sessions',
        labelKey: 'staffRbac.resources.smartLinks',
        group: 'Smart Link',
        groupKey: 'staffRbac.groups.smartLinks',
        navGroup: 'smart-links',
        applicableActions: ['read', 'create', 'update', 'delete', 'execute'],
    },
    {
        key: 'smartMonitorStatus',
        label: 'Status Check & Incidents',
        labelKey: 'staffRbac.resources.smartMonitorStatus',
        group: 'SmartMonitor',
        groupKey: 'staffRbac.groups.smartMonitor',
        navGroup: 'smart-monitor',
        applicableActions: ['read', 'create', 'update', 'delete'],
    },
    {
        key: 'smartMonitorWebhooks',
        label: 'Webhooks & Events',
        labelKey: 'staffRbac.resources.smartMonitorWebhooks',
        group: 'SmartMonitor',
        groupKey: 'staffRbac.groups.smartMonitor',
        navGroup: 'smart-monitor',
        applicableActions: ['read', 'create', 'update', 'delete', 'manageKeys'],
    },
    {
        key: 'smartTools',
        label: 'SmartReduce, WhatsApp & SMS',
        labelKey: 'staffRbac.resources.smartTools',
        group: 'SmartTools',
        groupKey: 'staffRbac.groups.smartTools',
        navGroup: 'smart-tools',
        applicableActions: ['read', 'create', 'execute'],
    },
    {
        key: 'billingCredits',
        label: 'Credits, Cards & Invoices',
        labelKey: 'staffRbac.resources.billingCredits',
        group: 'Billing & Plans',
        groupKey: 'staffRbac.groups.billing',
        navGroup: 'billing',
        applicableActions: ['read', 'create', 'update', 'delete', 'export'],
    },
    {
        key: 'billingSubscriptions',
        label: 'Subscriptions & Plans',
        labelKey: 'staffRbac.resources.billingSubscriptions',
        group: 'Billing & Plans',
        groupKey: 'staffRbac.groups.billing',
        navGroup: 'billing',
        applicableActions: ['read', 'create', 'update', 'delete'],
    },
    {
        key: 'billingUsage',
        label: 'Usage Reports & Cost Centers',
        labelKey: 'staffRbac.resources.billingUsage',
        group: 'Billing & Plans',
        groupKey: 'staffRbac.groups.billing',
        navGroup: 'billing',
        applicableActions: ['read', 'create', 'update', 'delete', 'export'],
    },
    {
        key: 'apiKeys',
        label: 'API Keys & Production Mode',
        labelKey: 'staffRbac.resources.apiKeys',
        group: 'Developers',
        groupKey: 'staffRbac.groups.developers',
        navGroup: 'developers',
        applicableActions: ['read', 'create', 'delete', 'manageKeys'],
    },
    {
        key: 'team',
        label: 'Team, Sub-Teams, Roles & Requests',
        labelKey: 'staffRbac.resources.team',
        group: 'Workspace & Team',
        groupKey: 'staffRbac.groups.workspace',
        navGroup: 'workspace',
        applicableActions: ['read', 'create', 'update', 'delete', 'approve', 'readAll', 'manageOwnTeam'],
    },
    {
        key: 'workspaceSettings',
        label: 'Workspace, Notifications & Retention',
        labelKey: 'staffRbac.resources.workspaceSettings',
        group: 'Workspace & Team',
        groupKey: 'staffRbac.groups.workspace',
        navGroup: 'workspace',
        applicableActions: ['read', 'update', 'delete', 'manageKeys'],
    },
] as const;

export const RESOURCE_MAP: Record<string, ResourceDefinition> = Object.fromEntries(
    STAFF_RESOURCES.map((r) => [r.key, r])
);

const DEFAULT_MATRIX_CODES: Record<StaffResource, Record<SystemRoleSlug, string>> = {
    home: { admin: 'RU', team_manager: 'R', compliance_officer: 'R', developer: 'R', finance: 'R', operator: 'R', report_builder: 'R', viewer: 'R' },
    smartCheckPlayground: { admin: 'RCUDE', team_manager: 'RCUDE', compliance_officer: 'RE', developer: 'RCUDE', finance: '', operator: 'RCE', report_builder: '', viewer: '' },
    smartCheckLists: { admin: 'RCUDE', team_manager: 'RCUDE', compliance_officer: 'RCE', developer: 'RCUDE', finance: '', operator: 'RCUE', report_builder: '', viewer: 'R' },
    smartCheckHistory: { admin: 'RX', team_manager: 'RX', compliance_officer: 'RX', developer: 'R', finance: 'RX', operator: 'R', report_builder: '', viewer: 'R' },
    smartReportsTemplates: { admin: 'RCUDX', team_manager: 'RCUDX', compliance_officer: 'RX', developer: 'RCUDX', finance: '', operator: 'R', report_builder: 'RCUDX', viewer: 'R' },
    smartReportsBatch: { admin: 'RCUDEX', team_manager: 'RCUDEX', compliance_officer: 'RCEX', developer: 'RCUDE', finance: '', operator: 'RCEX', report_builder: 'RCUD', viewer: 'R' },
    smartReportsResults: { admin: 'RX', team_manager: 'RX', compliance_officer: 'RX', developer: 'R', finance: '', operator: 'RX', report_builder: '', viewer: 'R' },
    smartFleetAssets: { admin: 'RCUDEX', team_manager: 'RCUDE', compliance_officer: 'RX', developer: 'RCUDE', finance: '', operator: 'RCUE', report_builder: '', viewer: 'R' },
    smartFleetRules: { admin: 'RCUDAX', team_manager: 'RCUDA', compliance_officer: 'RAX', developer: 'RCUD', finance: '', operator: 'RA', report_builder: '', viewer: 'R' },
    smartEnrollProjects: { admin: 'RCUD', team_manager: 'RCUD', compliance_officer: 'R', developer: 'RCUD', finance: '', operator: 'R', report_builder: '', viewer: 'R' },
    smartEnrollRecords: { admin: 'RUDAX', team_manager: 'RUAX', compliance_officer: 'RUAX', developer: 'RU', finance: '', operator: 'R', report_builder: '', viewer: 'R' },
    smartEnrollScan: { admin: 'RCUDE', team_manager: 'RCUDE', compliance_officer: 'RE', developer: 'RCUDE', finance: '', operator: 'RCE', report_builder: '', viewer: 'R' },
    smartEnrollBiometrics: { admin: 'RCUDE', team_manager: 'RCUDE', compliance_officer: 'R', developer: 'RCUDE', finance: '', operator: 'RCE', report_builder: '', viewer: 'R' },
    smartBusinessProjects: { admin: 'RCUDE', team_manager: 'RCUDE', compliance_officer: 'R', developer: 'RCUDE', finance: '', operator: 'R', report_builder: '', viewer: 'R' },
    smartBusinessRecords: { admin: 'RUDAX', team_manager: 'RUAX', compliance_officer: 'RUAX', developer: 'R', finance: '', operator: 'R', report_builder: '', viewer: 'R' },
    humanAuthn: { admin: 'RCUDE', team_manager: 'RCUDE', compliance_officer: 'R', developer: 'RCUDE', finance: '', operator: 'R', report_builder: '', viewer: 'R' },
    smartAccess: { admin: 'RCUD', team_manager: 'RCUD', compliance_officer: 'R', developer: 'RCUD', finance: '', operator: 'R', report_builder: '', viewer: 'R' },
    smartLinks: { admin: 'RCUDE', team_manager: 'RCUDE', compliance_officer: 'R', developer: 'RCUDE', finance: '', operator: 'RCE', report_builder: '', viewer: 'R' },
    smartMonitorStatus: { admin: 'RCUD', team_manager: 'RCUD', compliance_officer: 'R', developer: 'RCUD', finance: '', operator: 'R', report_builder: '', viewer: 'R' },
    smartMonitorWebhooks: { admin: 'RCUDK', team_manager: 'RCUD', compliance_officer: '', developer: 'RCUDK', finance: '', operator: '', report_builder: '', viewer: '' },
    smartTools: { admin: 'RCE', team_manager: 'RCE', compliance_officer: '', developer: 'RCE', finance: '', operator: 'RCE', report_builder: '', viewer: '' },
    billingCredits: { admin: 'RCUDX', team_manager: '', compliance_officer: '', developer: '', finance: 'RCUDX', operator: '', report_builder: '', viewer: '' },
    billingSubscriptions: { admin: 'RCUD', team_manager: '', compliance_officer: '', developer: '', finance: 'RCUD', operator: '', report_builder: '', viewer: '' },
    billingUsage: { admin: 'RCUDX', team_manager: 'RX', compliance_officer: 'R', developer: 'R', finance: 'RCUDX', operator: '', report_builder: '', viewer: 'R' },
    apiKeys: { admin: 'RCDK', team_manager: '', compliance_officer: '', developer: 'RCK', finance: '', operator: '', report_builder: '', viewer: '' },
    team: { admin: 'RCUDALM', team_manager: 'RCUDAM', compliance_officer: '', developer: '', finance: '', operator: '', report_builder: '', viewer: '' },
    workspaceSettings: { admin: 'RUK', team_manager: 'R', compliance_officer: 'R', developer: 'R', finance: 'R', operator: 'R', report_builder: 'R', viewer: 'R' },
};

export const DEFAULT_STAFF_ACCESS_POLICY: StaffAccessPolicy = {
    hideRestrictedNavigation: false,
    allowAccessRequests: true,
    notifyAdminsOnAccessRequest: true,
    defaultRequestDuration: '7d',
    teamScopedVisibility: false,
    requireTeamApiKeys: false,
};

export function resolveRoleSlug(rawRole?: string | null): SystemRoleSlug {
    if (!rawRole || typeof rawRole !== 'string') return 'viewer';
    const normalized = rawRole.trim().toLowerCase();
    if ((SYSTEM_ROLES as readonly string[]).includes(normalized)) {
        return normalized as SystemRoleSlug;
    }
    return LEGACY_ROLE_MAP[normalized] ?? 'viewer';
}

export function defaultPermissionsForRole(rawRole?: string | null): PermissionMap {
    const slug = resolveRoleSlug(rawRole);
    const out: PermissionMap = {};

    for (const res of STAFF_RESOURCES) {
        const codes = DEFAULT_MATRIX_CODES[res.key]?.[slug] ?? '';
        const allowed = new Set(res.applicableActions);
        const map: Record<string, boolean> = {};
        for (const action of STAFF_ACTIONS) {
            map[action] = false;
        }
        for (const ch of codes) {
            const action = ACTION_BY_CODE[ch];
            if (action && allowed.has(action)) {
                map[action] = true;
            }
        }
        out[res.key] = map;
    }

    if (out['workspaceSettings']) {
        out['workspaceSettings']['delete'] = false;
    }

    return out;
}

export function normalizePermissions(raw?: PermissionMap | null): PermissionMap {
    const out: PermissionMap = {};
    for (const res of STAFF_RESOURCES) {
        const allowed = new Set(res.applicableActions);
        out[res.key] = {};
        for (const action of STAFF_ACTIONS) {
            if (!allowed.has(action) || (res.key === 'workspaceSettings' && action === 'delete')) {
                out[res.key][action] = false;
            } else {
                out[res.key][action] = Boolean(raw?.[res.key]?.[action]);
            }
        }
    }
    return out;
}

export interface AccessRequestBundlePreset {
    id: string;
    labelKey: string;
    defaultLabel: string;
    actions: StaffAction[];
}

export function getPresetsForResource(resource: StaffResource): AccessRequestBundlePreset[] {
    const meta = RESOURCE_MAP[resource];
    const applicable = new Set(meta?.applicableActions ?? ['read']);
    const filter = (actions: StaffAction[]): StaffAction[] => actions.filter((a) => applicable.has(a));

    const presets: AccessRequestBundlePreset[] = [
        {
            id: 'viewer',
            labelKey: 'staffRbac.presets.viewOnly',
            defaultLabel: 'View only (Read)',
            actions: filter(['read', 'export']),
        },
        {
            id: 'operator',
            labelKey: 'staffRbac.presets.runAndCreate',
            defaultLabel: 'Operator (Read, Create, Run & Export)',
            actions: filter(['read', 'create', 'update', 'execute', 'export']),
        },
        {
            id: 'full',
            labelKey: 'staffRbac.presets.fullAccess',
            defaultLabel: 'Full Module Access',
            actions: meta?.applicableActions.filter(
                (a) => !(resource === 'workspaceSettings' && a === 'delete')
            ) ?? ['read'],
        },
    ];

    return presets.filter((p) => p.actions.length > 0);
}
