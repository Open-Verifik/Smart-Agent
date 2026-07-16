import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { FuseConfigService } from '@fuse/services/config/config.service';
import type { FuseConfig } from '@fuse/services/config/config.types';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthModalComponent } from '../../layout/common/auth-modal/auth-modal.component';
import { SessionService } from '../../core/services/session.service';
import type { BringBackOffer, SmartAgentWeekOneUsd50Promotion } from '../../core/user/user.types';
import { UserService } from '../../core/user/user.service';
import { DashboardData, HomeService } from './home.service';
import { QuickChatService } from '../../layout/common/quick-chat/quick-chat.service';
import { HomeTutorialModalComponent } from './tutorial-modal/tutorial-modal.component';
import { OnboardingExplanationModalComponent } from './onboarding-explanation-modal/onboarding-explanation-modal.component';
import { BringBackOfferModalComponent } from './bring-back-offer-modal/bring-back-offer-modal.component';
import {
    dismissBringBackModal,
    isBringBackModalDismissed,
} from './bring-back-offer-modal/bring-back-offer-storage';
import { AppNotificationsService } from 'app/core/notifications/app-notifications.service';
import { HomeNotificationBannersComponent } from './home-notification-banners/home-notification-banners.component';
import { OnboardingService, Onboarding, OnboardingTask } from 'app/core/services/onboarding.service';
import { AccountEnvironmentService } from '../../core/account/account-environment.service';

interface ChartTheme {
    tooltipTheme: 'light' | 'dark';
    chartForeColor: string;
    axisLabelColor: string;
    gridBorderColor: string;
    chartBg: string;
    areaColors: string[];
    areaFills: string[];
    lineMuted: string[];
    radarPolygon: string;
    radarConnector: string;
    markerStroke: string;
    distributionColor: string;
    dataLabelColor: string;
}

interface ShortcutItem {
    id: string;
    titleKey: string;
    subtitleKey: string;
    icon: string;
    link?: string;
    action?: 'support-tickets';
    accent?: 'support';
}

interface PodiumEntry {
    code: string;
    count: number;
    failed: number;
    displayName: string;
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        NgApexchartsModule,
        RouterLink,
        TranslocoModule,
        HomeNotificationBannersComponent,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    private readonly _destroyRef = inject(DestroyRef);
    private _homeService = inject(HomeService);
    private _sessionService = inject(SessionService);
    private _matDialog = inject(MatDialog);
    private _transloco = inject(TranslocoService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _userService = inject(UserService);
    private _document = inject(DOCUMENT);
    private _fuseConfig = inject(FuseConfigService);
    private _quickChatService = inject(QuickChatService);
    private _appNotificationsService = inject(AppNotificationsService);

    private _schemeAutoListenerCleanup: (() => void) | null = null;
    private _onboardingService = inject(OnboardingService);
    private _accountEnv = inject(AccountEnvironmentService);

    isAuthenticated = signal(false);
    loading = this._homeService.loading;
    dashboardData = this._homeService.dashboardData;

    onboarding = signal<Onboarding | null>(null);
    verifyingTaskId = signal<string | null>(null);
    verificationError = signal<string | null>(null);

    completedTasksCount = computed(() => {
        const tasks = this.onboarding()?.tasks ?? [];
        return tasks.filter(t => t.status === 'COMPLETED').length;
    });

    onboardingProgressPercentage = computed(() => {
        const tasks = this.onboarding()?.tasks ?? [];
        if (tasks.length === 0) return 0;
        return (tasks.filter(t => t.status === 'COMPLETED').length / tasks.length) * 100;
    });

    onboardingTotalRewarded = computed(() => {
        return this.onboarding()?.totalRewardedAmount ?? 0;
    });

    onboardingActivated = computed(() => {
        return this.onboarding()?.isActivated ?? false;
    });

    chartWeeklyExpenses: ApexOptions | null = null;
    chartMonthlyExpenses: ApexOptions | null = null;
    chartYearlyExpenses: ApexOptions | null = null;
    chartDistribution: ApexOptions | null = null;
    chartLastMonth: ApexOptions | null = null;
    chartUsageLine: ApexOptions | null = null;

    /** Session-driven first-week promotion (server-calculated eligibility). */
    weekOneUsd50Promotion = signal<SmartAgentWeekOneUsd50Promotion | undefined>(undefined);

    /** Session-driven bring-back win-back offer. */
    bringBackOffer = signal<BringBackOffer | undefined>(undefined);

    showBringBackPromoBanner = computed(() => Boolean(this.bringBackOffer()?.eligible));

    showWeekOneUsd50PromoBanner = computed(
        () => Boolean(this.weekOneUsd50Promotion()?.eligible) && !this.showBringBackPromoBanner(),
    );

    bringBackExampleReceived = computed(() => {
        const multiplier = this.bringBackOffer()?.multiplier ?? 2;
        return 50 * multiplier;
    });

    /** Combined podium: dashboard.topCodes.overall enriched with `failed` from top-sales */
    podium = computed<PodiumEntry[]>(() => {
        const overall = this.dashboardData()?.topCodes?.overall ?? [];
        const failedByCode = new Map<string, number>();

        for (const entry of this._homeService.topSalesData() ?? []) {
            failedByCode.set(entry._id, entry.failed ?? 0);
        }

        return overall.slice(0, 5).map((entry) => ({
            code: entry._id,
            count: entry.count ?? 0,
            failed: failedByCode.get(entry._id) ?? 0,
            displayName: this.getApiDisplayName(entry._id),
        }));
    });

    shortcuts: ShortcutItem[] = [
        { id: 'chat', titleKey: 'home.shortcuts.chat', subtitleKey: 'nav.ai_validation', link: '/chat', icon: 'chat_bubble' },
        {
            id: 'support-tickets',
            titleKey: 'home.shortcuts.supportTickets',
            subtitleKey: 'home.shortcuts.supportTicketsSubtitle',
            icon: 'support_agent',
            action: 'support-tickets',
            accent: 'support',
        },
        { id: 'postman', titleKey: 'home.shortcuts.postman', subtitleKey: 'nav.api_testing', link: '/postman', icon: 'terminal' },
        { id: 'smart-batch', titleKey: 'home.shortcuts.smartBatch', subtitleKey: 'nav.batch_automation', link: '/smart-batch', icon: 'queue' },
        { id: 'smart-access', titleKey: 'home.shortcuts.smartAccess', subtitleKey: 'nav.smart_access_projects_subtitle', link: '/smart-access/projects', icon: 'lock_open' },
        { id: 'history', titleKey: 'home.shortcuts.history', subtitleKey: 'nav.history_subtitle', link: '/history', icon: 'history' },
        { id: 'smart-scan', titleKey: 'home.shortcuts.smartScan', subtitleKey: 'nav.scan_documents', link: '/smart-enroll/smart-scan', icon: 'document_scanner' },
        { id: 'status-check', titleKey: 'home.shortcuts.statusCheck', subtitleKey: 'nav.system_health', link: '/smart-monitor/status-check', icon: 'monitor_heart' },
        { id: 'incidents', titleKey: 'home.shortcuts.incidents', subtitleKey: 'nav.active_incidents', link: '/smart-monitor/incidents', icon: 'warning' },
        { id: 'webhooks', titleKey: 'home.shortcuts.webhooks', subtitleKey: 'nav.webhooks_subtitle', link: '/smart-monitor/webhooks', icon: 'link' },
        { id: 'smart-reduce', titleKey: 'home.shortcuts.smartReduce', subtitleKey: 'nav.resize_compress_images', link: '/smart-tools/smart-reduce', icon: 'image' },
        { id: 'subscription-plans', titleKey: 'home.shortcuts.subscriptionPlans', subtitleKey: 'nav.manage_subscription', link: '/subscription-plans', icon: 'credit_card' },
        { id: 'add-credits', titleKey: 'home.shortcuts.addCredits', subtitleKey: 'nav.purchase_credits', link: '/add-credits', icon: 'add_circle' },
    ];

    constructor() {
        effect(() => {
            const data = this.dashboardData();
            if (!data) {
                this._resetCharts();
                return;
            }
            this._buildCharts(data);
        });

        this._destroyRef.onDestroy(() => this._detachSchemeAutoListener());

        this._fuseConfig.config$
            .pipe(takeUntilDestroyed())
            .subscribe((config: FuseConfig) => {
                if (config.scheme === 'auto') {
                    this._attachSchemeAutoListener();
                } else {
                    this._detachSchemeAutoListener();
                }
                this._scheduleRebuildCharts();
            });
    }

    ngOnInit(): void {
        this.isAuthenticated.set(this._sessionService.hasValidAuthentication());

        if (this.isAuthenticated()) {
            this._appNotificationsService.syncInbox('smart_agent').subscribe();
            this._handleOpenNotificationsQueryParam();

            this._onboardingService.verifyAllTasks().subscribe({
                next: (res) => this.onboarding.set(res.data),
                error: (err) => {
                    console.error('Failed to auto-verify onboarding tasks:', err);
                    this._onboardingService.getOnboarding().subscribe({
                        next: (res) => this.onboarding.set(res.data),
                        error: (e) => console.error('Failed to load onboarding progress:', e),
                    });
                }
            });

            this._userService
                .get()
                .pipe(
                    catchError((err) => {
                        console.error('Failed to load session for promotions:', err);
                        return of(null);
                    }),
                )
                .subscribe((user) => {
                    const bringBack = user?.bringBackOffer;
                    const activeBringBack =
                        bringBack?.kind === 'bring_back' && bringBack.eligible ? bringBack : undefined;

                    this.bringBackOffer.set(activeBringBack);

                    const promo = user?.promotion;
                    this.weekOneUsd50Promotion.set(
                        promo?.kind === 'smart_agent_week1_usd50' ? promo : undefined,
                    );

                    if (activeBringBack) {
                        this._maybeOpenBringBackOfferModal(
                            user?._id || user?.id || '',
                            activeBringBack,
                        );
                    }
                });
        }

        this._installApexSvgFix();

        this._homeService.fetchStats();
    }

    getTotals(): { total: number; ok: number; failed: number; credits: number } {
        return this._homeService.getAggregatedTotals();
    }

    verifyTask(taskId: string): void {
        this.verifyingTaskId.set(taskId);
        this.verificationError.set(null);
        this._onboardingService.verifyTask(taskId).subscribe({
            next: (res) => {
                this.verifyingTaskId.set(null);
                if (res.data?.success) {
                    this.onboarding.set(res.data.onboarding);
                } else {
                    this.verificationError.set(taskId);
                    setTimeout(() => {
                        if (this.verificationError() === taskId) {
                            this.verificationError.set(null);
                        }
                    }, 5000);
                }
            },
            error: (err) => {
                this.verifyingTaskId.set(null);
                this.verificationError.set(taskId);
                setTimeout(() => {
                    if (this.verificationError() === taskId) {
                        this.verificationError.set(null);
                    }
                }, 5000);
                console.error('Failed to verify task:', err);
            }
        });
    }

    getTaskLink(taskId: string): string {
        switch (taskId) {
            case 'test_smartcheck': return '/postman';
            case 'test_collection_demo': return '/smart-enroll/demos/create-collection';
            case 'test_add_person_demo': return '/smart-enroll/demos/create-person';
            case 'test_search_person_demo': return '/smart-enroll/demos/search-person';
            case 'test_liveness_demo': return '/smart-enroll/demos/liveness';
            case 'test_humanauthn_creation': return '/smart-enroll/demos/humanid-create-qr';
            case 'test_humanauthn_decryption':
                return '/smart-enroll/demos/humanid-decrypt';
            case 'test_humanauthn_preview':
                return '/smart-enroll/demos/humanid-preview';
            case 'subscribe_smart_access': return '/smart-access/projects';
            case 'subscribe_smart_enroll': return '/smart-enroll/projects';
            case 'add_billing_details': return '/settings/billing-details';
            case 'complete_kyc': return '/home';
            default: return '/home';
        }
    }

    startKycVerification(): void {
        this._accountEnv.startCompanyVerification();
    }

    /** Display name for API code - uses appFeatures translation or falls back to code */
    getApiDisplayName(code: string): string {
        const key = `appFeatures.${code}.title`;
        const translated = this._transloco.translate(key);
        return translated !== key ? translated : code;
    }

    /** Sum helper for KPIs above the last-30-days chart. */
    sumSeries(data: number[] | undefined | null): number {
        if (!Array.isArray(data)) return 0;
        return data.reduce((acc, val) => acc + (Number(val) || 0), 0);
    }

    /** Percentage helper, safe against div-by-zero. */
    percentOf(part: number, total: number): string {
        if (!total) return '0';
        return ((part * 100) / total).toFixed(1);
    }

    /** Format a credit amount for the expenses sparklines. */
    formatCredits(value: number | null | undefined): string {
        const n = Math.abs(Number(value) || 0);
        return n.toFixed(2);
    }

    openAuthModal(): void {
        this._matDialog.open(AuthModalComponent, {
            panelClass: 'auth-modal-dialog',
            width: '400px',
        });
    }

    /**
     * Blocking welcome-back modal once per offer until dismissed (localStorage).
     */
    private _maybeOpenBringBackOfferModal(clientId: string, offer: BringBackOffer): void {
        if (!clientId || !offer?.expiresAt) {
            return;
        }

        if (isBringBackModalDismissed(clientId, offer.expiresAt)) {
            return;
        }

        const dialogRef = this._matDialog.open(BringBackOfferModalComponent, {
            data: { offer },
            disableClose: true,
            panelClass: 'bring-back-offer-modal-dialog',
            width: '100%',
            maxWidth: '520px',
        });

        dialogRef.afterClosed().subscribe((reason) => {
            if (!reason) {
                return;
            }

            dismissBringBackModal(clientId, offer.expiresAt, reason);

            if (reason === 'accepted') {
                void this._router.navigate(['/add-credits']);
                return;
            }

            if (reason === 'view_plans') {
                void this._router.navigate(['/subscription-plans']);
            }
        });
    }

    openTutorial(): void {
        this._matDialog.open(HomeTutorialModalComponent, {
            panelClass: 'tutorial-modal-dialog',
            maxWidth: '500px',
        });
    }

    openTaskExplanation(taskId: string, status: string): void {
        this._matDialog.open(OnboardingExplanationModalComponent, {
            panelClass: 'onboarding-explanation-dialog',
            width: '100%',
            maxWidth: '512px',
            data: { taskId, status },
        });
    }

    onShortcutActivate(item: ShortcutItem): void {
        if (item.action === 'support-tickets') {
            this._quickChatService.requestOpenPanel();
        }
    }

    isShortcutLink(item: ShortcutItem): boolean {
        return Boolean(item.link) && !item.action;
    }

    private _resetCharts(): void {
        this.chartWeeklyExpenses = null;
        this.chartMonthlyExpenses = null;
        this.chartYearlyExpenses = null;
        this.chartDistribution = null;
        this.chartLastMonth = null;
        this.chartUsageLine = null;
    }

    private _chartTheme(): ChartTheme {
        const isDark = Boolean(this._document.body?.classList.contains('dark'));

        if (!isDark) {
            return {
                tooltipTheme: 'dark',
                chartForeColor: 'inherit',
                axisLabelColor: 'rgb(148, 163, 184)',
                gridBorderColor: 'rgba(148, 163, 184, 0.2)',
                chartBg: 'transparent',
                areaColors: ['#64748B', '#94A3B8'],
                areaFills: ['#64748B', '#94A3B8'],
                lineMuted: ['#64748B', '#94A3B8'],
                radarPolygon: 'rgba(148, 163, 184, 0.3)',
                radarConnector: 'rgba(148, 163, 184, 0.3)',
                markerStroke: '#818CF8',
                distributionColor: '#818CF8',
                dataLabelColor: '#475569',
            };
        }

        return {
            tooltipTheme: 'dark',
            chartForeColor: '#f1f5f9',
            axisLabelColor: '#94a3b8',
            gridBorderColor: 'rgba(148, 163, 184, 0.14)',
            chartBg: 'transparent',
            areaColors: ['#94a3b8', '#cbd5e1'],
            areaFills: ['#94a3b8', '#cbd5e1'],
            lineMuted: ['#94a3b8', '#cbd5e1'],
            radarPolygon: 'rgba(148, 163, 184, 0.22)',
            radarConnector: 'rgba(148, 163, 184, 0.22)',
            markerStroke: '#a5b4fc',
            distributionColor: '#a5b4fc',
            dataLabelColor: '#e2e8f0',
        };
    }

    private _attachSchemeAutoListener(): void {
        this._detachSchemeAutoListener();
        const win = this._document.defaultView;
        if (!win || typeof win.matchMedia !== 'function') return;

        const mql = win.matchMedia('(prefers-color-scheme: dark)');
        const onChange = (): void => this._scheduleRebuildCharts();

        mql.addEventListener('change', onChange);
        this._schemeAutoListenerCleanup = (): void =>
            mql.removeEventListener('change', onChange);
    }

    private _detachSchemeAutoListener(): void {
        this._schemeAutoListenerCleanup?.();
        this._schemeAutoListenerCleanup = null;
    }

    /** Defer so `body.light` / `body.dark` matches Fuse layout after config changes. */
    private _scheduleRebuildCharts(): void {
        const win = this._document.defaultView;
        if (!win) return;
        win.setTimeout(() => this._rebuildChartsIfLoaded(), 0);
    }

    private _rebuildChartsIfLoaded(): void {
        const data = this.dashboardData();
        if (!data) {
            this._resetCharts();
            return;
        }
        this._buildCharts(data);
    }

    private _buildCharts(data: DashboardData): void {
        const theme = this._chartTheme();

        this.chartWeeklyExpenses = data.weeklyExpenses
            ? this._buildExpenseSparkline(data.weeklyExpenses, '#22D3EE', theme)
            : null;
        this.chartMonthlyExpenses = data.monthlyExpenses
            ? this._buildExpenseSparkline(data.monthlyExpenses, '#4ADE80', theme)
            : null;
        this.chartYearlyExpenses = data.yearlyExpenses
            ? this._buildExpenseSparkline(data.yearlyExpenses, '#FB7185', theme)
            : null;
        this.chartLastMonth = data.lastMonthRequests ? this._buildLastMonthArea(data.lastMonthRequests, theme) : null;
        this.chartDistribution = data.distribution ? this._buildDistributionRadar(data.distribution, theme) : null;
        this.chartUsageLine = data.topCodes ? this._buildUsageLine(data.topCodes, theme) : null;
    }

    private _buildExpenseSparkline(
        seriesData: { labels: string[]; series: any[] },
        color: string,
        theme: ChartTheme,
    ): ApexOptions {
        const data = (seriesData.series ?? []).map((num: number) => Math.abs(Number(num) || 0));

        return {
            chart: {
                animations: { enabled: false },
                fontFamily: 'inherit',
                foreColor: theme.chartForeColor,
                background: theme.chartBg,
                height: '100%',
                type: 'line',
                sparkline: { enabled: true },
            },
            colors: [color],
            series: [{ name: 'Credits', data }],
            stroke: { curve: 'smooth' },
            tooltip: { theme: theme.tooltipTheme },
            xaxis: {
                type: 'category',
                categories: seriesData.labels ?? [],
            },
            yaxis: {
                labels: {
                    formatter: (val: number): string => this.formatCredits(val),
                },
            },
        };
    }

    private _buildLastMonthArea(
        seriesData: { labels: string[]; series: any[] },
        theme: ChartTheme,
    ): ApexOptions {
        return {
            chart: {
                animations: { enabled: false },
                fontFamily: 'inherit',
                foreColor: theme.chartForeColor,
                background: theme.chartBg,
                height: '100%',
                type: 'area',
                toolbar: { show: false },
                zoom: { enabled: false },
            },
            colors: theme.areaColors,
            dataLabels: { enabled: false },
            fill: {
                colors: theme.areaFills,
                opacity: 0.45,
            },
            grid: {
                show: false,
                padding: { bottom: -40, left: 0, right: 0 },
            },
            legend: { show: false },
            series: seriesData.series ?? [],
            stroke: { curve: 'smooth', width: 2 },
            tooltip: {
                followCursor: true,
                theme: theme.tooltipTheme,
                x: { format: 'MMM dd, yyyy' },
            },
            xaxis: {
                axisBorder: { show: false },
                labels: {
                    offsetY: -20,
                    rotate: 0,
                    style: { colors: theme.axisLabelColor },
                },
                tickAmount: 3,
                tooltip: { enabled: false },
                type: 'category',
                categories: seriesData.labels ?? [],
            },
            yaxis: {
                labels: {
                    style: { colors: theme.axisLabelColor },
                },
                max: (max: number): number => max + 5,
                min: (min: number): number => min - 5,
                show: false,
                tickAmount: 5,
            },
        };
    }

    private _buildDistributionRadar(
        distribution: { categories: string[]; series: { name: string; data: number[] }[] },
        theme: ChartTheme,
    ): ApexOptions {
        const counts = distribution.series?.[1]?.data ?? [];
        const total = counts.reduce((acc, val) => acc + (Number(val) || 0), 0);
        const percentages = counts.map((value) => Number(((Number(value) || 0) * 100 / (total || 1)).toFixed(2)));

        return {
            chart: {
                fontFamily: 'inherit',
                foreColor: theme.chartForeColor,
                background: theme.chartBg,
                height: '100%',
                type: 'radar',
                sparkline: { enabled: true },
            },
            colors: [theme.distributionColor],
            dataLabels: {
                enabled: true,
                formatter: (val: number): string => `${val}%`,
                textAnchor: 'start',
                style: {
                    fontSize: '13px',
                    fontWeight: 500,
                    colors: [theme.dataLabelColor],
                },
                background: { borderWidth: 0, padding: 4 },
                offsetY: -15,
            },
            markers: {
                strokeColors: theme.markerStroke,
                strokeWidth: 4,
            },
            plotOptions: {
                radar: {
                    polygons: {
                        strokeColors: theme.radarPolygon,
                        connectorColors: theme.radarConnector,
                    },
                },
            },
            series: [{ name: 'Distribution', data: percentages }],
            stroke: { width: 2 },
            tooltip: {
                theme: theme.tooltipTheme,
                y: { formatter: (val: number): string => `${val}%` },
            },
            xaxis: {
                labels: {
                    show: true,
                    style: {
                        fontSize: '12px',
                        fontWeight: '500',
                        colors: theme.axisLabelColor,
                    },
                },
                type: 'category',
                categories: distribution.categories ?? [],
            },
            yaxis: {
                max: (max: number): number => parseInt((max + 10).toFixed(0), 10),
                tickAmount: 7,
            },
        };
    }

    private _buildUsageLine(
        topCodes: { labels: string[]; series: { date: string; count: number }[][] },
        theme: ChartTheme,
    ): ApexOptions {
        const aggregated = (topCodes.series ?? []).map((bucket) => bucket.reduce((acc, curr) => acc + (Number(curr?.count) || 0), 0));

        return {
            chart: {
                fontFamily: 'inherit',
                foreColor: theme.chartForeColor,
                background: theme.chartBg,
                height: '100%',
                type: 'line',
                toolbar: { show: false },
                zoom: { enabled: false },
            },
            colors: theme.lineMuted,
            dataLabels: {
                enabled: true,
                enabledOnSeries: [0],
                background: { borderWidth: 0 },
                style: { colors: [theme.dataLabelColor] },
            },
            grid: { borderColor: theme.gridBorderColor },
            labels: topCodes.labels ?? [],
            legend: { show: false },
            plotOptions: { bar: { columnWidth: '50%' } },
            series: [
                {
                    name: 'Usages',
                    type: 'line',
                    data: aggregated,
                },
            ],
            states: {
                hover: { filter: { type: 'darken', value: 0.75 } as any },
            },
            stroke: { width: [3, 0] },
            tooltip: { followCursor: true, theme: theme.tooltipTheme },
            xaxis: {
                axisBorder: { show: false },
                axisTicks: { color: theme.gridBorderColor },
                labels: { style: { colors: theme.axisLabelColor } },
                tooltip: { enabled: false },
            },
            yaxis: {
                labels: {
                    offsetX: -16,
                    style: { colors: theme.axisLabelColor },
                },
            },
        };
    }

    /**
     * Install ApexCharts global mounted/updated hook to fix `url(#id)` references on
     * SVG fills that get broken when a `<base>` tag is present (renders gradients as
     * black). Ported from verifik-client-panel dashboard.
     */
    private _installApexSvgFix(): void {
        const apexGlobal = (window as any)['Apex'] ?? {};
        (window as any)['Apex'] = {
            ...apexGlobal,
            chart: {
                ...(apexGlobal.chart ?? {}),
                events: {
                    ...((apexGlobal.chart && apexGlobal.chart.events) ?? {}),
                    mounted: (chart: any): void => this._fixSvgFill(chart.el),
                    updated: (chart: any): void => this._fixSvgFill(chart.el),
                },
            },
        };
    }

    private _fixSvgFill(element: Element | null): void {
        if (!element) return;

        const currentURL = this._router.url;

        Array.from(element.querySelectorAll('*[fill]'))
            .filter((el) => el.getAttribute('fill')?.indexOf('url(') !== -1)
            .forEach((el) => {
                const attrVal = el.getAttribute('fill') as string;
                el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
            });
    }

    private _handleOpenNotificationsQueryParam(): void {
        const openNotifications = this._route.snapshot.queryParamMap.get('openNotifications');
        if (openNotifications !== '1') return;

        this._appNotificationsService.refreshHubInbox().subscribe({
            next: () => {
                this._quickChatService.requestOpenPanel({ tab: 'notifications' });
            },
            error: () => {
                this._quickChatService.requestOpenPanel({ tab: 'notifications' });
            },
        });

        void this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { openNotifications: null },
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }
}
