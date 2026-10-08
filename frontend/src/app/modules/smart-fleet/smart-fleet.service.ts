import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { tap, timeout } from 'rxjs';

export const DEFAULT_PER_PAGE = 20;

export interface PaginatedResponse<T> {
    data: T[];
    total?: number | null;
    limit?: number | null;
    page?: number | null;
    pages?: number | null;
}

export interface PaginationState {
    page: number;
    perPage: number;
    total: number;
    pages: number;
}

const EMPTY_PAGINATION: PaginationState = {
    page: 1,
    perPage: DEFAULT_PER_PAGE,
    total: 0,
    pages: 1,
};

const readPagination = <T>(
    response: PaginatedResponse<T>,
    requestedPage: number,
    requestedPerPage: number
): PaginationState => {
    const total = response.total ?? response.data?.length ?? 0;
    const perPage = response.limit ?? requestedPerPage;

    return {
        page: response.page ?? requestedPage,
        perPage,
        total,
        pages: response.pages ?? Math.max(1, Math.ceil(total / perPage)),
    };
};

export type FleetCheckType = 'soat' | 'rtm' | 'comparendos' | 'ownership' | 'claims' | 'custom';

export type FleetFrequency = 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'custom';

export type FleetSeverity = 'info' | 'warning' | 'critical';

export type FleetChannel = 'email' | 'webhook' | 'inApp' | 'sms' | 'whatsapp';

export const FLEET_GROUP_COLOR_DEFAULT = '#6366f1';

export const FLEET_GROUP_COLORS = [
    '#6366f1',
    '#0ea5e9',
    '#10b981',
    '#f59e0b',
    '#ef4444',
    '#a855f7',
    '#ec4899',
    '#64748b',
];

export const FLEET_GROUP_ICONS = [
    'car',
    'pickup',
    'minivan',
    'van',
    'bus',
    'truck',
    'tractocamion',
    'tractomula',
    'tractor',
    'motorcycle',
    'motocarro',
] as const;

export type FleetGroupIcon = (typeof FLEET_GROUP_ICONS)[number];

export const FLEET_GROUP_ICON_DEFAULT: FleetGroupIcon = 'car';

export interface FleetGroupRef {
    name: string;
    color: string;
    icon: FleetGroupIcon;
}

export function normalizeFleetGroup(entry: Partial<FleetGroupRef> | string | null | undefined): FleetGroupRef {
    if (!entry || typeof entry === 'string') {
        return {
            name: typeof entry === 'string' ? entry : '',
            color: FLEET_GROUP_COLOR_DEFAULT,
            icon: FLEET_GROUP_ICON_DEFAULT,
        };
    }

    const icon = FLEET_GROUP_ICONS.find((item) => item === entry.icon) || FLEET_GROUP_ICON_DEFAULT;

    return {
        name: entry.name || '',
        color: entry.color || FLEET_GROUP_COLOR_DEFAULT,
        icon,
    };
}

export type FleetAlertStatus = 'open' | 'acknowledged' | 'resolved' | 'all';

export interface FleetAssetState {
    checkedAt?: string;
    expiresAt?: string;
    status?: string;
    total?: number;
    count?: number;
    [key: string]: unknown;
}

export interface FleetAsset {
    _id?: string;
    client?: string;
    type?: 'vehicle' | 'driver';
    country?: string;
    plate?: string;
    vin?: string;
    ownerDocumentType?: string;
    ownerDocumentNumber?: string;
    nickname?: string;
    /** null clears the group when a vehicle is dragged out. */
    group?: string | null;
    notes?: string;
    isActive?: boolean;
    lastCheckedAt?: string;
    nextCheckAt?: string;
    alertCounts?: { critical: number; warning: number; info: number };
    lastKnownState?: Record<FleetCheckType | string, FleetAssetState>;
    createdAt?: string;
    updatedAt?: string;
}

/** Country option returned by GET /fleet-assets/countries (live catalog). */
export interface FleetCountryOption {
    code: string;
    available: boolean;
}

export interface FleetWatchRule {
    _id?: string;
    /** null clears asset scope when updating a rule to fleet/group. */
    asset?: string | FleetAsset | null;
    /** null clears group scope when updating a rule to fleet/asset. */
    group?: string | null;
    name?: string;
    featureCode?: string;
    checkType: FleetCheckType;
    kind?: 'threshold' | 'delta';
    frequency?: FleetFrequency;
    /** Day interval when frequency is `custom` (1–90). */
    intervalDays?: number | null;
    thresholdDays?: number;
    watchPath?: string | null;
    parameterDefaults?: Record<string, unknown>;
    channels?: FleetChannel[];
    emailRecipients?: string[];
    webhookUrl?: string | null;
    smsRecipients?: string[];
    whatsappRecipients?: string[];
    severity?: FleetSeverity;
    isActive?: boolean;
    /** Saved without a vehicle, group, or fleet until someone assigns it. */
    unassigned?: boolean;
    lastTriggeredAt?: string;
    createdAt?: string;
}

/** Split a phone field into E.164 numbers. Country code is required. */
export function parseFleetPhones(value: string): string[] {
    return value
        .split(/[,;\s]+/)
        .map((part) => {
            const compact = part.replace(/[^\d+]/g, '');

            if (!compact) return '';

            const withPlus = compact.startsWith('+') ? compact : `+${compact}`;

            return /^\+[1-9]\d{7,14}$/.test(withPlus) ? withPlus : '';
        })
        .filter((phone, index, list) => phone && list.indexOf(phone) === index);
}

/** True when this vehicle has the identifiers the check's endpoint actually needs. */
export function fleetAssetSupportsCheck(check: FleetAvailableCheck, asset: FleetAsset): boolean {
    const value = (field: string) => {
        const raw = (asset as unknown as Record<string, unknown>)[field];

        return typeof raw === 'string' ? raw.trim() : '';
    };
    const plateFields = check.requiresByPlate?.length
        ? check.requiresByPlate
        : check.endpoints?.byPlate?.requires || [];
    const vinFields = check.requiresByVin?.length
        ? check.requiresByVin
        : check.endpoints?.byVin?.requires || [];

    if (plateFields.length || vinFields.length) {
        const plateOk = plateFields.length > 0 && plateFields.every((field) => value(field));
        const vinOk = vinFields.length > 0 && vinFields.every((field) => value(field));

        return plateOk || vinOk;
    }

    const requires = check.requires || [];

    if (!requires.length) return true;

    return requires.every((field) => value(field));
}

export interface FleetAlertDelivery {
    channel: FleetChannel;
    status: 'pending' | 'sent' | 'failed' | 'skipped';
    target?: string | null;
    error?: string | null;
    attemptedAt?: string;
}

export interface FleetAlert {
    _id?: string;
    asset?: string | FleetAsset;
    watchRule?: string | FleetWatchRule;
    type: string;
    severity: FleetSeverity;
    title: string;
    message?: string;
    sourceValue?: string | null;
    payload?: Record<string, unknown>;
    detectedAt?: string;
    acknowledgedAt?: string | null;
    resolvedAt?: string | null;
    deliveries?: FleetAlertDelivery[];
}

export interface FleetSnapshot {
    _id?: string;
    checkType: FleetCheckType;
    featureCode?: string;
    normalized?: Record<string, unknown>;
    /** Untouched API payload. Present only when the timeline is asked for it. */
    raw?: Record<string, unknown>;
    fingerprint?: string | null;
    isSuccessful?: boolean;
    error?: { message?: string; code?: string } | string | null;
    creditsSpent?: number;
    observedAt?: string;
}

export interface FleetCreditBreakdown {
    featureCode: string;
    frequency: FleetFrequency;
    checksPerMonth: number;
    pricePerCheck: number;
    creditsPerAsset: number;
    assets?: number;
}

export interface FleetCreditEstimate {
    assetCount: number;
    creditsPerAsset: number;
    totalCredits: number;
    breakdown: FleetCreditBreakdown[];
}

export interface FleetRunway {
    balance: number;
    monthlyCredits: number;
    dailyCredits: number;
    daysOfRunway: number | null;
}

export interface FleetExpiryEntry {
    asset: string;
    plate?: string | null;
    nickname?: string | null;
    group?: string | null;
    checkType: FleetCheckType;
    expiresAt: string;
    daysRemaining: number;
}

export interface FleetDashboard {
    assets: { total: number; active: number; limit: number; remaining: number };
    plan: {
        _id: string;
        status: string;
        assetLimit: number;
        billedQuantity: number;
        endDate?: string;
    } | null;
    rules: { active: number };
    alerts: {
        severity: {
            open: Record<FleetSeverity, number>;
            acknowledged: Record<FleetSeverity, number>;
        };
        openTotal: number;
        byType: { type: string; count: number }[];
    };
    expiringSoon: { horizonDays: number; entries: FleetExpiryEntry[] };
    spend: {
        windowDays: number;
        totalCredits: number;
        totalChecks: number;
        byCheckType: { checkType: string; credits: number; checks: number }[];
    };
    projectedMonthlyCredits: FleetCreditEstimate;
    runway: FleetRunway;
}

export interface FleetCheckEndpointPath {
    featureCode: string;
    method?: string;
    url?: string | null;
    featureName?: string | null;
    requires: string[];
}

export interface FleetCheckCondition {
    watchLabelKey?: string;
    watchPath?: string;
    statusField?: string;
    okStatuses?: string[];
    leadTimeDaysDefault?: number;
    summaryKey?: string;
    alertKeys?: string[];
}

export interface FleetAvailableCheck {
    checkType: FleetCheckType;
    featureCode: string;
    featureCodeByPlate?: string;
    featureCodeByVin?: string;
    kind: 'threshold' | 'delta';
    defaultThresholdDays: number | null;
    defaultSeverity: FleetSeverity;
    requires?: string[];
    requiresByPlate?: string[];
    requiresByVin?: string[];
    method?: string;
    url?: string | null;
    featureName?: string | null;
    /** Other checkTypes that share this featureCode / endpoint. */
    sharedWith?: FleetCheckType[];
    endpoints?: {
        byPlate?: FleetCheckEndpointPath | null;
        byVin?: FleetCheckEndpointPath | null;
    };
    condition?: FleetCheckCondition;
}

export interface FleetRuleEstimate {
    scope: { asset: string | null; group: string | null; assetCount: number };
    rule: FleetCreditEstimate;
    currentFleetMonthly: FleetCreditEstimate;
    projectedFleetMonthly: number;
}

export interface FleetWatchRuleScheduleRun {
    index: number;
    at: string;
}

export interface FleetWatchRuleUpcomingAsset {
    assetId: string;
    plate?: string;
    nickname?: string | null;
    nextCheckAt?: string | null;
    lastCheckedAt?: string | null;
}

export interface FleetWatchRuleSchedule {
    rule: FleetWatchRule;
    intervalMs: number;
    frequency: FleetFrequency;
    assetCount: number;
    nextRuns: FleetWatchRuleScheduleRun[];
    upcomingAssets: FleetWatchRuleUpcomingAsset[];
}

export interface FleetImportResult {
    imported: number;
    totalRows: number;
    rejected: { rowIndex: number; plate?: string; reason: string }[];
    assets: FleetAsset[];
}

/**
 * Joi rejects blank strings ("vin" is not allowed to be empty). Plate + owner
 * document is a valid identifier on its own, so unused fields must be omitted.
 */
export function compactFleetAssetPayload<T extends object>(asset: T): Partial<T> {
    const payload: Partial<T> = {};

    for (const [key, value] of Object.entries(asset)) {
        if (typeof value === 'string') {
            const trimmed = value.trim();

            if (!trimmed) continue;

            (payload as Record<string, unknown>)[key] = trimmed;
            continue;
        }

        if (value === null && key === 'group') {
            (payload as Record<string, unknown>)[key] = null;
            continue;
        }

        if (value === undefined || value === null) continue;

        (payload as Record<string, unknown>)[key] = value;
    }

    return payload;
}

/**
 * Smart Fleet API client.
 *
 * Mirrors `SmartBatchService`: plain `HttpClient` against `environment.apiUrl`, with the
 * JWT attached by the global auth interceptor, and signals for the list state that several
 * screens read at once.
 */
@Injectable({ providedIn: 'root' })
export class SmartFleetService {
    assets = signal<FleetAsset[]>([]);
    assetsPage = signal<PaginationState>(EMPTY_PAGINATION);
    isLoadingAssets = signal<boolean>(false);

    watchRules = signal<FleetWatchRule[]>([]);
    isLoadingRules = signal<boolean>(false);

    alerts = signal<FleetAlert[]>([]);
    alertsPage = signal<PaginationState>(EMPTY_PAGINATION);
    isLoadingAlerts = signal<boolean>(false);

    dashboard = signal<FleetDashboard | null>(null);
    isLoadingDashboard = signal<boolean>(false);

    constructor(private _httpClient: HttpClient) {}

    // ── Dashboard ────────────────────────────────────────────────

    getDashboard(options: { horizonDays?: number; spendDays?: number } = {}) {
        this.isLoadingDashboard.set(true);

        return this._httpClient
            .get<{ data: FleetDashboard }>(`${environment.apiUrl}/v2/fleet/dashboard`, {
                params: {
                    ...(options.horizonDays ? { horizonDays: options.horizonDays } : {}),
                    ...(options.spendDays ? { spendDays: options.spendDays } : {}),
                },
            })
            .pipe(
                tap({
                    next: (response) => {
                        this.dashboard.set(response.data);
                        this.isLoadingDashboard.set(false);
                    },
                    error: () => this.isLoadingDashboard.set(false),
                })
            );
    }

    // ── Assets ───────────────────────────────────────────────────

    /** Read a page without replacing the list the table is showing. */
    findAssets(
        options: {
            page?: number;
            perPage?: number;
            search?: string;
        } = {}
    ) {
        const page = options.page ?? 1;
        const perPage = options.perPage ?? DEFAULT_PER_PAGE;

        return this._httpClient.get<PaginatedResponse<FleetAsset>>(`${environment.apiUrl}/v2/fleet-assets`, {
            params: {
                page,
                perPage,
                ...(options.search ? { search: options.search } : {}),
            },
        });
    }

    getAssets(
        options: {
            page?: number;
            perPage?: number;
            group?: string;
            isActive?: boolean;
            search?: string;
        } = {}
    ) {
        const page = options.page ?? 1;
        const perPage = options.perPage ?? DEFAULT_PER_PAGE;

        this.isLoadingAssets.set(true);

        return this._httpClient
            .get<PaginatedResponse<FleetAsset>>(`${environment.apiUrl}/v2/fleet-assets`, {
                params: {
                    page,
                    perPage,
                    ...(options.group ? { group: options.group } : {}),
                    ...(options.isActive !== undefined ? { isActive: options.isActive } : {}),
                    ...(options.search ? { search: options.search } : {}),
                },
            })
            .pipe(
                tap({
                    next: (response) => {
                        this.assets.set(response.data ?? []);
                        this.assetsPage.set(readPagination(response, page, perPage));
                        this.isLoadingAssets.set(false);
                    },
                    error: () => this.isLoadingAssets.set(false),
                })
            );
    }

    /** Named groups saved for this client, including ones with no vehicles yet. */
    listGroups() {
        return this._httpClient.get<{ data: FleetGroupRef[] }>(`${environment.apiUrl}/v2/fleet-groups`);
    }

    createGroup(name: string, color = FLEET_GROUP_COLOR_DEFAULT, icon: FleetGroupIcon = FLEET_GROUP_ICON_DEFAULT) {
        return this._httpClient.post<{ data: FleetGroupRef }>(`${environment.apiUrl}/v2/fleet-groups`, {
            name,
            color,
            icon,
        });
    }

    updateGroup(name: string, changes: { color?: string; icon?: FleetGroupIcon; newName?: string }) {
        return this._httpClient.put<{ data: FleetGroupRef }>(`${environment.apiUrl}/v2/fleet-groups`, {
            name,
            ...changes,
        });
    }

    deleteGroup(name: string) {
        return this._httpClient.delete<{ data: { deleted: boolean; name: string } }>(
            `${environment.apiUrl}/v2/fleet-groups`,
            { params: { name } }
        );
    }

    /** Full list for the groups board. Does not replace the paginated table. */
    listAssets(perPage = 200) {
        return this._httpClient.get<PaginatedResponse<FleetAsset>>(
            `${environment.apiUrl}/v2/fleet-assets`,
            { params: { page: 1, perPage } }
        );
    }

    getAsset(id: string) {
        return this._httpClient.get<{ data: FleetAsset }>(
            `${environment.apiUrl}/v2/fleet-assets/${id}`
        );
    }

    /** Live countries from the check catalog (ISO alpha-2). */
    getCountries() {
        return this._httpClient.get<{ data: { countries: FleetCountryOption[] } }>(
            `${environment.apiUrl}/v2/fleet-assets/countries`
        );
    }

    createAsset(asset: FleetAsset) {
        return this._httpClient.post<{ data: FleetAsset }>(
            `${environment.apiUrl}/v2/fleet-assets`,
            compactFleetAssetPayload(asset)
        );
    }

    updateAsset(id: string, asset: Partial<FleetAsset>) {
        return this._httpClient.put<{ data: FleetAsset }>(
            `${environment.apiUrl}/v2/fleet-assets/${id}`,
            compactFleetAssetPayload(asset)
        );
    }

    deleteAsset(id: string) {
        return this._httpClient.delete<{ data: { deleted: boolean } }>(
            `${environment.apiUrl}/v2/fleet-assets/${id}`
        );
    }

    /** Bulk import parsed server-side, so the browser never has to understand XLSX. */
    importAssets(payload: {
        content: string;
        format?: 'csv' | 'xlsx' | 'jsonl';
        country?: string;
        group?: string;
    }) {
        return this._httpClient.post<{ data: FleetImportResult }>(
            `${environment.apiUrl}/v2/fleet-assets/import`,
            payload
        );
    }

    /**
     * Run every applicable check immediately (enqueue + process in the same request).
     * Give scrapers enough time; the server budgets ~180s.
     */
    checkAssetNow(id: string) {
        return this._httpClient
            .post<{
                data: {
                    run: unknown;
                    status?: string | null;
                    settled?: boolean;
                    reason?: string | null;
                    checkTypes?: FleetCheckType[];
                };
            }>(`${environment.apiUrl}/v2/fleet-assets/${id}/check-now`, {})
            .pipe(timeout(200_000));
    }

    /** Rules that apply to an asset (asset-scoped + group + fleet-wide). */
    getApplicableRules(assetId: string) {
        return this._httpClient.get<{ data: { asset: string; rules: FleetWatchRule[] } }>(
            `${environment.apiUrl}/v2/fleet-assets/${assetId}/applicable-rules`
        );
    }

    getAssetTimeline(
        id: string,
        options: { checkType?: FleetCheckType; limit?: number; includeRaw?: boolean } = {}
    ) {
        return this._httpClient.get<{
            data: FleetSnapshot[] | { asset?: string; snapshots?: FleetSnapshot[] };
        }>(`${environment.apiUrl}/v2/fleet-assets/${id}/timeline`, {
            params: {
                ...(options.checkType ? { checkType: options.checkType } : {}),
                ...(options.limit ? { limit: options.limit } : {}),
                ...(options.includeRaw ? { includeRaw: true } : {}),
            },
        });
    }

    // ── Watch rules ──────────────────────────────────────────────

    getWatchRules(options: { asset?: string; group?: string; isActive?: boolean } = {}) {
        this.isLoadingRules.set(true);

        return this._httpClient
            .get<PaginatedResponse<FleetWatchRule>>(`${environment.apiUrl}/v2/fleet-watch-rules`, {
                params: {
                    perPage: 100,
                    ...(options.asset ? { asset: options.asset } : {}),
                    ...(options.group ? { group: options.group } : {}),
                    ...(options.isActive !== undefined ? { isActive: options.isActive } : {}),
                },
            })
            .pipe(
                tap({
                    next: (response) => {
                        this.watchRules.set(response.data ?? []);
                        this.isLoadingRules.set(false);
                    },
                    error: () => this.isLoadingRules.set(false),
                })
            );
    }

    /** Asset-scoped fetch that does not replace the rules list on the rules page. */
    listWatchRules(options: { asset?: string; group?: string } = {}) {
        return this._httpClient.get<PaginatedResponse<FleetWatchRule>>(
            `${environment.apiUrl}/v2/fleet-watch-rules`,
            {
                params: {
                    perPage: 100,
                    ...(options.asset ? { asset: options.asset } : {}),
                    ...(options.group ? { group: options.group } : {}),
                },
            }
        );
    }

    createWatchRule(rule: FleetWatchRule) {
        return this._httpClient.post<{ data: FleetWatchRule }>(
            `${environment.apiUrl}/v2/fleet-watch-rules`,
            rule
        );
    }

    updateWatchRule(id: string, rule: Partial<FleetWatchRule>) {
        return this._httpClient.put<{ data: FleetWatchRule }>(
            `${environment.apiUrl}/v2/fleet-watch-rules/${id}`,
            rule
        );
    }

    deleteWatchRule(id: string) {
        return this._httpClient.delete<{ data: { deleted: boolean } }>(
            `${environment.apiUrl}/v2/fleet-watch-rules/${id}`
        );
    }

    /** Cron-style next runs + soonest vehicles for a watch rule. */
    getWatchRuleSchedule(id: string) {
        return this._httpClient.get<{ data: FleetWatchRuleSchedule }>(
            `${environment.apiUrl}/v2/fleet-watch-rules/${id}/schedule`
        );
    }

    /**
     * Monthly credit burn a rule would add, before it is saved. Shown at rule creation
     * because per-vehicle daily checks add up faster than people expect.
     */
    estimateWatchRule(rule: {
        asset?: string;
        group?: string;
        checkType: FleetCheckType;
        featureCode?: string;
        frequency?: FleetFrequency;
        intervalDays?: number;
    }) {
        return this._httpClient.post<{ data: FleetRuleEstimate }>(
            `${environment.apiUrl}/v2/fleet-watch-rules/estimate`,
            rule
        );
    }

    getAvailableChecks(country = 'co') {
        return this._httpClient.get<{ data: { country: string; checks: FleetAvailableCheck[] } }>(
            `${environment.apiUrl}/v2/fleet-watch-rules/available-checks`,
            { params: { country } }
        );
    }

    // ── Alerts ───────────────────────────────────────────────────

    getAlerts(
        options: {
            page?: number;
            perPage?: number;
            asset?: string;
            type?: string;
            severity?: FleetSeverity;
            status?: FleetAlertStatus;
        } = {}
    ) {
        const page = options.page ?? 1;
        const perPage = options.perPage ?? DEFAULT_PER_PAGE;

        this.isLoadingAlerts.set(true);

        return this._httpClient
            .get<PaginatedResponse<FleetAlert>>(`${environment.apiUrl}/v2/fleet-alerts`, {
                params: {
                    page,
                    perPage,
                    populates: 'asset',
                    ...(options.asset ? { asset: options.asset } : {}),
                    ...(options.type ? { type: options.type } : {}),
                    ...(options.severity ? { severity: options.severity } : {}),
                    ...(options.status ? { status: options.status } : {}),
                },
            })
            .pipe(
                tap({
                    next: (response) => {
                        this.alerts.set(response.data ?? []);
                        this.alertsPage.set(readPagination(response, page, perPage));
                        this.isLoadingAlerts.set(false);
                    },
                    error: () => this.isLoadingAlerts.set(false),
                })
            );
    }

    acknowledgeAlert(id: string) {
        return this._httpClient.post<{ data: FleetAlert }>(
            `${environment.apiUrl}/v2/fleet-alerts/${id}/acknowledge`,
            {}
        );
    }

    acknowledgeAlerts(ids: string[]) {
        return this._httpClient.post<{ data: { acknowledged: number } }>(
            `${environment.apiUrl}/v2/fleet-alerts/acknowledge`,
            { ids }
        );
    }

    /** Server-rendered file, so the export matches what the backend considers an alert. */
    exportAlerts(
        options: {
            type?: string;
            severity?: FleetSeverity;
            from?: string;
            to?: string;
            format?: 'csv' | 'xlsx' | 'jsonl';
        } = {}
    ) {
        return this._httpClient.get(`${environment.apiUrl}/v2/fleet-alerts/export`, {
            params: {
                format: options.format ?? 'csv',
                ...(options.type ? { type: options.type } : {}),
                ...(options.severity ? { severity: options.severity } : {}),
                ...(options.from ? { from: options.from } : {}),
                ...(options.to ? { to: options.to } : {}),
            },
            responseType: 'blob',
        });
    }
}
