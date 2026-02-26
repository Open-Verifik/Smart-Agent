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
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { StatusCheckService } from 'app/modules/status-check/status-check.service';
import { DateTime } from 'luxon';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'incidents',
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
    templateUrl: './incidents.component.html',
    styleUrls: ['./incidents.component.scss'],
})
export class IncidentsComponent implements OnInit, OnDestroy {
    private _service = inject(StatusCheckService);
    private _cdr = inject(ChangeDetectorRef);
    private _router = inject(Router);
    private _unsubscribeAll = new Subject<any>();

    public loading = true;
    public incidents: any[] = [];
    public subscriptions: any[] = [];

    // Status config for UI badges (labelKey: transloco key)
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
        this._loadSubscriptionsThenIncidents();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    private _loadSubscriptionsThenIncidents(): void {
        this.loading = true;

        this._service
            .getIncidentsSubscriptions({ populates: ['appFeature'] })
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (result: any) => {
                    this.subscriptions = result.data || result || [];
                    this._loadIncidents();
                },
                error: () => {
                    this.loading = false;
                    this._cdr.markForCheck();
                },
            });
    }

    private _loadIncidents(): void {
        if (!this.subscriptions.length) {
            this.loading = false;
            this._cdr.markForCheck();
            return;
        }

        // Build the list of aliases the client is subscribed to
        const aliases = [...new Set(this.subscriptions.map((s: any) => s.alias).filter(Boolean))];

        const params: any = {
            in_status: ['down', 'review'],
            populates: ['appFeature'],
            sort: '-createdAt',
        };

        // If we have aliases filter by them; otherwise fall back to subscribed appFeature IDs
        if (aliases.length) {
            params.in_alias = aliases;
        }

        this._service
            .getIncidents(params)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (result: any) => {
                    this.incidents = result.data || result || [];
                    this.loading = false;
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.loading = false;
                    this._cdr.markForCheck();
                },
            });
    }

    getStatusCfg(status: string) {
        return this.statusConfig[status] ?? this.statusConfig['closed'];
    }

    formatDate(dateStr: string): string {
        if (!dateStr) return 'N/A';
        return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATETIME_MED);
    }

    formatDuration(minutes: number): string {
        if (!minutes) return '—';
        if (minutes < 60) return `${minutes}m`;
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return m ? `${h}h ${m}m` : `${h}h`;
    }

    getServiceName(incident: any): string {
        return incident.appFeature?.name || incident.code || '';
    }

    openDetail(incident: any): void {
        this._router.navigate(['/smart-monitor/incidents', incident._id]);
    }
}
