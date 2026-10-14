import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { getVerifikDocsUrls } from 'app/core/docs/verifik-docs-urls';
import { countryName } from 'app/core/usage/country-geo';
import { CostCenter, UsageApiService, UsageGroup, UsageGroupBy, UsageQuery, UsageReport } from 'app/core/usage/usage-api.service';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { getBusinessUserClientId } from '../utils/settings-business-user.util';
import { buildUsageChart, usageRowsToCsv } from './usage-report-chart.util';

export type UsageRangeId = 'last_30_days' | 'this_month' | 'last_month' | 'last_3_months' | 'last_12_months';

/**
 * Settings → Usage report. Totals by month, day, country, cost center, or endpoint from `GET /v2/usage`,
 * with server-built CSV. Accounts whose request history only survives in billing show `source: credits`.
 */
@Component({
    selector: 'app-usage-report',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSnackBarModule,
        NgApexchartsModule,
        TranslocoModule,
        SettingsBusinessAccountEmptyStateComponent,
    ],
    templateUrl: './usage-report.component.html',
    styleUrl: './usage-report.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsageReportComponent implements OnChanges {
    @Input() user: unknown;
    @Output() userChange = new EventEmitter<unknown>();

    private readonly _api = inject(UsageApiService);
    private readonly _transloco = inject(TranslocoService);
    private readonly _snack = inject(MatSnackBar);
    private readonly _route = inject(ActivatedRoute);

    readonly groupings: UsageGroupBy[] = ['month', 'day', 'country', 'costCenter', 'endpoint'];
    readonly ranges: UsageRangeId[] = ['last_30_days', 'this_month', 'last_month', 'last_3_months', 'last_12_months'];

    readonly groupBy = signal<UsageGroupBy>('month');
    readonly range = signal<UsageRangeId>('last_12_months');
    /** Set when the globe opens this report for its own dates. Preset chips do not match that window. */
    readonly customWindow = signal<{ start: Date; end: Date } | null>(null);
    readonly costCenter = signal<string>('');
    readonly costCenters = signal<CostCenter[]>([]);
    readonly report = signal<UsageReport | null>(null);
    readonly loading = signal(false);
    readonly exporting = signal(false);
    readonly failed = signal(false);

    readonly chart = computed<ApexOptions | null>(() => {
        const report = this.report();

        if (!report?.groups.length) return null;

        return buildUsageChart(report, report.groupBy || this.groupBy(), (group) => this.label(group), this._isDark(), {
            ok: this._transloco.translate('settings.usageReport.ok'),
            failed: this._transloco.translate('settings.usageReport.failed'),
        });
    });

    get userClientId(): string | undefined {
        return getBusinessUserClientId(this.user);
    }

    get docsUrl(): string {
        return getVerifikDocsUrls(this._transloco.getActiveLang() || 'en').usageApi;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes['user'] || !this.userClientId) return;

        this._applyRouteQuery();
        this._api.listCostCenters().subscribe({ next: (centers) => this.costCenters.set(centers), error: () => this.costCenters.set([]) });
        this.load();
    }

    onBusinessAccountLinked(account: unknown): void {
        this.userChange.emit(account);
    }

    setGroupBy(value: UsageGroupBy): void {
        this.groupBy.set(value);
        this.load();
    }

    setRange(value: UsageRangeId): void {
        if (!value) return;

        this.customWindow.set(null);
        this.range.set(value);
        this.load();
    }

    setCostCenter(value: string): void {
        this.costCenter.set(value || '');
        this.load();
    }

    load(): void {
        this.loading.set(true);
        this.failed.set(false);
        this._api.getUsage(this._query()).subscribe({
            next: (report) => {
                this.report.set(report);
                this.loading.set(false);
            },
            error: () => {
                this.report.set(null);
                this.failed.set(true);
                this.loading.set(false);
            },
        });
    }

    downloadCsv(): void {
        if (this.exporting()) return;

        this.exporting.set(true);
        this._api.downloadUsageCsv(this._query()).subscribe({
            next: ({ blob, filename }) => {
                this._save(blob, filename);
                this.exporting.set(false);
            },
            error: () => {
                const report = this.report();
                if (report) this._save(new Blob([`\uFEFF${usageRowsToCsv(report, (group) => this.label(group))}`], { type: 'text/csv;charset=utf-8' }), `verifik-usage-${this.groupBy()}.csv`);
                else this._snack.open(this._transloco.translate('settings.usageReport.exportError'), undefined, { duration: 3000 });
                this.exporting.set(false);
            },
        });
    }

    /** Human label for a group key. */
    label(group: UsageGroup): string {
        const groupBy = this.report()?.groupBy || this.groupBy();

        if (groupBy === 'country') return group.key ? `${countryName(group.key, this._transloco.getActiveLang() || 'en')} (${group.key})` : this._transloco.translate('home.usageGlobe.global');

        if (groupBy === 'costCenter') return group.key ? `${group.costCenterName || group.key}${group.costCenterCode ? ` · ${group.costCenterCode}` : ''}` : this._transloco.translate('settings.usageReport.noCostCenter');

        return group.key || '—';
    }

    private _applyRouteQuery(): void {
        const params = this._route.snapshot.queryParamMap;
        const groupBy = params.get('groupBy');

        if (groupBy && this.groupings.includes(groupBy as UsageGroupBy)) this.groupBy.set(groupBy as UsageGroupBy);

        const start = this._parseDate(params.get('startDate'));
        const end = this._parseDate(params.get('endDate'));

        this.customWindow.set(start && end && start <= end ? { start, end } : null);
    }

    private _parseDate(value: string | null): Date | null {
        if (!value) return null;

        const date = new Date(value);

        return Number.isNaN(date.getTime()) ? null : date;
    }

    private _query(): UsageQuery {
        const { start, end } = this.customWindow() || this._bounds(this.range());
        const query: UsageQuery = { groupBy: this.groupBy(), startDate: start.toISOString(), endDate: end.toISOString(), limit: 500 };

        if (this.costCenter()) query.costCenter = this.costCenter();

        return query;
    }

    private _bounds(range: UsageRangeId): { start: Date; end: Date } {
        const now = new Date();
        const monthStart = (offset: number): Date => new Date(now.getFullYear(), now.getMonth() + offset, 1);

        switch (range) {
            case 'this_month':
                return { start: monthStart(0), end: now };
            case 'last_month':
                return { start: monthStart(-1), end: new Date(monthStart(0).getTime() - 1) };
            case 'last_3_months':
                return { start: monthStart(-2), end: now };
            case 'last_12_months':
                return { start: monthStart(-11), end: now };
            default:
                return { start: new Date(now.getTime() - 30 * 86400000), end: now };
        }
    }

    private _save(blob: Blob, filename: string): void {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');

        anchor.href = url;
        anchor.download = filename;
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        URL.revokeObjectURL(url);
    }

    private _isDark(): boolean {
        return document.body.classList.contains('dark');
    }
}
