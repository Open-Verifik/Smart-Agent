import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { StatusCheckService } from 'app/modules/status-check/status-check.service';
import { DateTime } from 'luxon';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'incident-detail',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        TranslocoModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
    ],
    templateUrl: './incident-detail.component.html',
    styleUrls: ['./incident-detail.component.scss'],
})
export class IncidentDetailComponent implements OnInit, OnDestroy {
    private _service = inject(StatusCheckService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _cdr = inject(ChangeDetectorRef);
    private _unsubscribeAll = new Subject<any>();

    public loading = true;
    public incident: any = null;
    public logs: any[] = [];

    // Category display config (labelKey: transloco key)
    readonly categoryConfig: Record<
        string,
        { labelKey: string; icon: string; classes: string; connectorClass: string }
    > = {
        investigating: {
            labelKey: 'smartMonitor.categoryInvestigating',
            icon: 'search',
            classes:
                'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800',
            connectorClass: 'bg-blue-300 dark:bg-blue-700',
        },
        identified: {
            labelKey: 'smartMonitor.categoryIdentified',
            icon: 'manage_search',
            classes:
                'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800',
            connectorClass: 'bg-orange-300 dark:bg-orange-700',
        },
        fixing: {
            labelKey: 'smartMonitor.categoryFixing',
            icon: 'build',
            classes:
                'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
            connectorClass: 'bg-yellow-300 dark:bg-yellow-700',
        },
        resolved: {
            labelKey: 'smartMonitor.categoryResolved',
            icon: 'check_circle',
            classes:
                'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
            connectorClass: 'bg-green-300 dark:bg-green-700',
        },
        privateNote: {
            labelKey: 'smartMonitor.categoryNote',
            icon: 'sticky_note_2',
            classes:
                'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700',
            connectorClass: 'bg-gray-300 dark:bg-gray-700',
        },
    };

    readonly statusConfig: Record<string, { labelKey: string; classes: string; dotClass: string }> = {
        down: {
            labelKey: 'smartMonitor.statusDown',
            classes: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
            dotClass: 'bg-red-500 animate-pulse',
        },
        review: {
            labelKey: 'smartMonitor.statusReview',
            classes: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
            dotClass: 'bg-yellow-500 animate-pulse',
        },
        up: {
            labelKey: 'smartMonitor.statusUp',
            classes: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
            dotClass: 'bg-green-500',
        },
        closed: {
            labelKey: 'smartMonitor.statusClosed',
            classes: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
            dotClass: 'bg-gray-400',
        },
    };

    ngOnInit(): void {
        const id = this._route.snapshot.paramMap.get('id');
        if (id) {
            this._loadIncident(id);
        }
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    private _loadIncident(id: string): void {
        this._service
            .getIncidents({ _id: id, populates: ['appFeature', 'resolution'] })
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (result: any) => {
                    const data = result.data || result;
                    this.incident = Array.isArray(data) ? data[0] : data;
                    this._loadLogs(id);
                },
                error: () => {
                    this.loading = false;
                    this._cdr.markForCheck();
                },
            });
    }

    private _loadLogs(incidentId: string): void {
        this._service
            .getIncidentLogs({
                where_incident: incidentId,
                sort: 'createdAt', // Chronological order
            })
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (result: any) => {
                    const rawLogs = result.data || result || [];
                    // Show all non-private logs + any automatic message logs
                    this.logs = rawLogs.filter((log: any) => log.category !== 'privateNote');
                    this.loading = false;
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.loading = false;
                    this._cdr.markForCheck();
                },
            });
    }

    getCategoryCfg(category: string) {
        return this.categoryConfig[category] ?? this.categoryConfig['investigating'];
    }

    getStatusCfg(status: string) {
        return this.statusConfig[status] ?? this.statusConfig['closed'];
    }

    getServiceName(): string {
        return this.incident?.appFeature?.name || this.incident?.code || '';
    }

    formatDate(dateStr: string): string {
        if (!dateStr) return 'N/A';
        return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATETIME_MED);
    }

    formatRelative(dateStr: string): string {
        if (!dateStr) return '';
        return DateTime.fromISO(dateStr).toRelative() ?? '';
    }

    formatDuration(minutes: number): string {
        if (!minutes) return '—';
        if (minutes < 60) return `${minutes}m`;
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return m ? `${h}h ${m}m` : `${h}h`;
    }

    goBack(): void {
        this._router.navigate(['/smart-monitor/incidents']);
    }
}
