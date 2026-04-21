import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { AuthModalComponent } from '../../layout/common/auth-modal/auth-modal.component';
import { SessionService } from '../../core/services/session.service';
import { DashboardData, HomeService } from './home.service';
import { HomeTutorialModalComponent } from './tutorial-modal/tutorial-modal.component';

interface ShortcutItem {
    id: string;
    titleKey: string;
    subtitleKey: string;
    link: string;
    icon: string;
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
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    private _homeService = inject(HomeService);
    private _sessionService = inject(SessionService);
    private _matDialog = inject(MatDialog);
    private _transloco = inject(TranslocoService);
    private _router = inject(Router);

    isAuthenticated = signal(false);
    loading = this._homeService.loading;
    dashboardData = this._homeService.dashboardData;

    chartWeeklyExpenses: ApexOptions | null = null;
    chartMonthlyExpenses: ApexOptions | null = null;
    chartYearlyExpenses: ApexOptions | null = null;
    chartDistribution: ApexOptions | null = null;
    chartLastMonth: ApexOptions | null = null;
    chartUsageLine: ApexOptions | null = null;

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
        { id: 'postman', titleKey: 'home.shortcuts.postman', subtitleKey: 'nav.api_testing', link: '/postman', icon: 'terminal' },
        { id: 'smart-batch', titleKey: 'home.shortcuts.smartBatch', subtitleKey: 'nav.batch_automation', link: '/smart-batch', icon: 'queue' },
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
    }

    ngOnInit(): void {
        this.isAuthenticated.set(this._sessionService.hasValidAuthentication());

        this._installApexSvgFix();

        this._homeService.fetchStats();
    }

    getTotals(): { total: number; ok: number; failed: number; credits: number } {
        return this._homeService.getAggregatedTotals();
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

    openTutorial(): void {
        this._matDialog.open(HomeTutorialModalComponent, {
            panelClass: 'tutorial-modal-dialog',
            maxWidth: '500px',
        });
    }

    private _resetCharts(): void {
        this.chartWeeklyExpenses = null;
        this.chartMonthlyExpenses = null;
        this.chartYearlyExpenses = null;
        this.chartDistribution = null;
        this.chartLastMonth = null;
        this.chartUsageLine = null;
    }

    private _buildCharts(data: DashboardData): void {
        this.chartWeeklyExpenses = data.weeklyExpenses ? this._buildExpenseSparkline(data.weeklyExpenses, '#22D3EE') : null;
        this.chartMonthlyExpenses = data.monthlyExpenses ? this._buildExpenseSparkline(data.monthlyExpenses, '#4ADE80') : null;
        this.chartYearlyExpenses = data.yearlyExpenses ? this._buildExpenseSparkline(data.yearlyExpenses, '#FB7185') : null;
        this.chartLastMonth = data.lastMonthRequests ? this._buildLastMonthArea(data.lastMonthRequests) : null;
        this.chartDistribution = data.distribution ? this._buildDistributionRadar(data.distribution) : null;
        this.chartUsageLine = data.topCodes ? this._buildUsageLine(data.topCodes) : null;
    }

    private _buildExpenseSparkline(seriesData: { labels: string[]; series: any[] }, color: string): ApexOptions {
        const data = (seriesData.series ?? []).map((num: number) => Math.abs(Number(num) || 0));

        return {
            chart: {
                animations: { enabled: false },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'line',
                sparkline: { enabled: true },
            },
            colors: [color],
            series: [{ name: 'Credits', data }],
            stroke: { curve: 'smooth' },
            tooltip: { theme: 'dark' },
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

    private _buildLastMonthArea(seriesData: { labels: string[]; series: any[] }): ApexOptions {
        return {
            chart: {
                animations: { enabled: false },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'area',
                toolbar: { show: false },
                zoom: { enabled: false },
            },
            colors: ['#64748B', '#94A3B8'],
            dataLabels: { enabled: false },
            fill: {
                colors: ['#64748B', '#94A3B8'],
                opacity: 0.5,
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
                theme: 'dark',
                x: { format: 'MMM dd, yyyy' },
            },
            xaxis: {
                axisBorder: { show: false },
                labels: {
                    offsetY: -20,
                    rotate: 0,
                    style: { colors: 'rgb(148, 163, 184)' },
                },
                tickAmount: 3,
                tooltip: { enabled: false },
                type: 'category',
                categories: seriesData.labels ?? [],
            },
            yaxis: {
                labels: {
                    style: { colors: 'rgb(148, 163, 184)' },
                },
                max: (max: number): number => max + 5,
                min: (min: number): number => min - 5,
                show: false,
                tickAmount: 5,
            },
        };
    }

    private _buildDistributionRadar(distribution: { categories: string[]; series: { name: string; data: number[] }[] }): ApexOptions {
        const counts = distribution.series?.[1]?.data ?? [];
        const total = counts.reduce((acc, val) => acc + (Number(val) || 0), 0);
        const percentages = counts.map((value) => Number(((Number(value) || 0) * 100 / (total || 1)).toFixed(2)));

        return {
            chart: {
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'radar',
                sparkline: { enabled: true },
            },
            colors: ['#818CF8'],
            dataLabels: {
                enabled: true,
                formatter: (val: number): string => `${val}%`,
                textAnchor: 'start',
                style: { fontSize: '13px', fontWeight: 500 },
                background: { borderWidth: 0, padding: 4 },
                offsetY: -15,
            },
            markers: {
                strokeColors: '#818CF8',
                strokeWidth: 4,
            },
            plotOptions: {
                radar: {
                    polygons: {
                        strokeColors: 'rgba(148, 163, 184, 0.3)',
                        connectorColors: 'rgba(148, 163, 184, 0.3)',
                    },
                },
            },
            series: [{ name: 'Distribution', data: percentages }],
            stroke: { width: 2 },
            tooltip: {
                theme: 'dark',
                y: { formatter: (val: number): string => `${val}%` },
            },
            xaxis: {
                labels: {
                    show: true,
                    style: { fontSize: '12px', fontWeight: '500' },
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

    private _buildUsageLine(topCodes: { labels: string[]; series: { date: string; count: number }[][] }): ApexOptions {
        const aggregated = (topCodes.series ?? []).map((bucket) => bucket.reduce((acc, curr) => acc + (Number(curr?.count) || 0), 0));

        return {
            chart: {
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'line',
                toolbar: { show: false },
                zoom: { enabled: false },
            },
            colors: ['#64748B', '#94A3B8'],
            dataLabels: {
                enabled: true,
                enabledOnSeries: [0],
                background: { borderWidth: 0 },
            },
            grid: { borderColor: 'rgba(148, 163, 184, 0.2)' },
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
            tooltip: { followCursor: true, theme: 'dark' },
            xaxis: {
                axisBorder: { show: false },
                axisTicks: { color: 'rgba(148, 163, 184, 0.2)' },
                labels: { style: { colors: 'rgb(148, 163, 184)' } },
                tooltip: { enabled: false },
            },
            yaxis: {
                labels: {
                    offsetX: -16,
                    style: { colors: 'rgb(148, 163, 184)' },
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
}
