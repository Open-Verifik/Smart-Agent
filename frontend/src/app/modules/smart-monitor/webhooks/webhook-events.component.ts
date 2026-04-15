import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { FuseSplashScreenService } from '@fuse/services/splash-screen';
import { Subject } from 'rxjs';
import { WebhooksService } from './webhooks.service';

@Component({
    selector: 'webhook-events',
    standalone: true,
    imports: [
        ClipboardModule,
        CommonModule,
        TranslocoModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
    ],
    templateUrl: './webhook-events.component.html',
    styleUrls: ['./webhook-events.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebhookEventsComponent implements OnInit, OnChanges, OnDestroy {
    private _service = inject(WebhooksService);
    private _splash = inject(FuseSplashScreenService);
    private _cdr = inject(ChangeDetectorRef);
    private _clipboard = inject(Clipboard);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);

    @Input() webhookId = '';
    /** Initial events from parent */
    @Input() set initialEvents(value: any[] | null) {
        this.eventsData = value ? [...value] : [];
        this._cdr.markForCheck();
    }
    @Input() set initialPaginator(meta: { total?: number; pages?: number; limit?: number } | null) {
        if (!meta) return;
        this.paginatorData.length = meta.total ?? 0;
        this.paginatorData.lastPage = meta.pages ?? 0;
        if (meta.limit) this.paginatorData.pageSize = meta.limit;
        this._cdr.markForCheck();
    }
    @Input() projectFlowFilter = '';

    private _destroyed = new Subject<void>();

    eventsData: any[] = [];
    eventSelected: any;
    filterSelected: string | undefined;
    searching = false;

    projectFlows: any[] = [];

    paginatorData = {
        length: 0,
        pageIndex: 0,
        pageSize: 10,
        lastPage: 0,
    };

    ngOnChanges(changes: SimpleChanges): void {
        const pf = changes['projectFlowFilter'];
        if (pf && !pf.firstChange && this.webhookId) {
            this.eventSelected = undefined;
            this.paginatorData.pageIndex = 0;
            this._searchEvents();
        }
    }

    ngOnInit(): void {
        this._service.getProjectFlows().subscribe({
            next: (result) => {
                this.projectFlows = result.data || [];
                this._cdr.markForCheck();
            },
            error: () => {},
        });
    }

    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }

    returnProjectName(projectFlow: any): string | null {
        const id = typeof projectFlow === 'string' ? projectFlow : projectFlow?._id;
        if (!id || !this.projectFlows.length) return null;
        const current = this.projectFlows.find((e) => e._id === id);
        return current?.project?.name ?? null;
    }

    selectFilter(filter: string | undefined): void {
        this.filterSelected = filter;
        this.eventSelected = undefined;
        this.paginatorData.pageIndex = 0;
        this._searchEvents();
    }

    selectedWebhookEvent(ev: any): void {
        this.eventSelected = ev;
        this._cdr.markForCheck();
    }

    onPaginatorEvent(ev: PageEvent): void {
        if (ev.pageSize === this.paginatorData.pageSize && ev.pageIndex >= this.paginatorData.lastPage) {
            return;
        }
        this.paginatorData.pageSize = ev.pageSize;
        if (ev.pageSize === this.paginatorData.pageSize) {
            this.paginatorData.pageIndex = ev.pageIndex;
        } else {
            this.paginatorData.pageIndex = 0;
        }
        this._searchEvents();
    }

    copyToClipboard(value: unknown): void {
        if (value === undefined || value === null) return;
        const text = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
        this._clipboard.copy(text);
        this._snack.open(this._transloco.translate('webhooks.details.copied'), undefined, { duration: 2000 });
    }

    resend(webhookEventId: string): void {
        this._splash.show();
        const t0 = Date.now();
        this._service.resendWebhookEvent(webhookEventId).subscribe({
            next: (response) => {
                if (response.data) {
                    this.eventsData = [response.data, ...this.eventsData];
                }
                this._closeSplash(t0);
            },
            error: () => this._closeSplash(t0),
        });
    }

    private _closeSplash(start: number): void {
        const wait = Math.max(0, 1000 - (Date.now() - start));
        setTimeout(() => {
            this._splash.hide();
            this._cdr.markForCheck();
        }, wait);
    }

    private _searchEvents(): void {
        if (!this.webhookId) return;
        this.searching = true;
        this._cdr.markForCheck();
        const query: Record<string, unknown> = {
            where_webhook: this.webhookId,
            page: this.paginatorData.pageIndex + 1,
            perPage: this.paginatorData.pageSize,
            sort: '-createdAt',
        };
        if (this.filterSelected) query['where_response.status'] = this.filterSelected;
        if (this.projectFlowFilter) query['where_projectFlow'] = this.projectFlowFilter;

        this._service.getEvents(query).subscribe({
            next: (response) => {
                this.eventsData = response.data || [];
                this.paginatorData.length = response.total ?? 0;
                this.paginatorData.pageIndex = (response.page ?? 1) - 1;
                this.paginatorData.lastPage = response.pages ?? 0;
                this.searching = false;
                this._cdr.markForCheck();
            },
            error: () => {
                this.searching = false;
                this._cdr.markForCheck();
            },
        });
    }
}
