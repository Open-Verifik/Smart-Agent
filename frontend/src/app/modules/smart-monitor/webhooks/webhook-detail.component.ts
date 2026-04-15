import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FuseSplashScreenService } from '@fuse/services/splash-screen';
import { Subject, takeUntil } from 'rxjs';
import { LinkProjectDialogComponent } from './dialogs/link-project-dialog.component';
import { NewWebhookDialogComponent } from './dialogs/new-webhook-dialog.component';
import { WebhookEventsComponent } from './webhook-events.component';
import { WebhookStatsBarsComponent } from './webhook-stats-bars.component';
import { WebhooksService } from './webhooks.service';

@Component({
    selector: 'webhook-detail',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TranslocoModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        WebhookStatsBarsComponent,
        WebhookEventsComponent,
    ],
    templateUrl: './webhook-detail.component.html',
    styleUrls: ['./webhook-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebhookDetailComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _service = inject(WebhooksService);
    private _splash = inject(FuseSplashScreenService);
    private _cdr = inject(ChangeDetectorRef);
    private _dialog = inject(MatDialog);
    private _confirm = inject(FuseConfirmationService);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _unsub = new Subject<void>();

    loading = true;
    webhookId = '';
    webhookData: any;
    eventsData: any[] = [];
    eventsMeta: { total?: number; pages?: number; limit?: number } = {};
    projectFlows: any[] = [];
    projectFlowSelected = '';

    ngOnInit(): void {
        this._route.paramMap.pipe(takeUntil(this._unsub)).subscribe((pm) => {
            const id = pm.get('id');
            if (id) {
                this.webhookId = id;
                this._load();
            }
        });
    }

    ngOnDestroy(): void {
        this._unsub.next();
        this._unsub.complete();
    }

    back(): void {
        this._router.navigate(['/smart-monitor/webhooks']);
    }

    private _load(): void {
        this.loading = true;
        this._cdr.markForCheck();
        this._service.getProjectFlows().subscribe({
            next: (r) => {
                this.projectFlows = r.data || [];
                this._cdr.markForCheck();
            },
            error: () => {},
        });
        this._service.getDetails(this.webhookId).subscribe({
            next: (details) => {
                this.webhookData = details.data;
                this._fetchEvents();
            },
            error: () => {
                this.loading = false;
                this._cdr.markForCheck();
                this._router.navigate(['/smart-monitor/webhooks']);
            },
        });
    }

    private _fetchEvents(): void {
        this._service
            .getEvents({
                where_webhook: this.webhookId,
                page: 1,
                perPage: 10,
            })
            .subscribe({
                next: (response) => {
                    this.eventsData = response.data || [];
                    this.eventsMeta = {
                        total: response.total,
                        pages: response.pages,
                        limit: response.limit,
                    };
                    this.loading = false;
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.loading = false;
                    this._cdr.markForCheck();
                },
            });
    }

    activeWebhook(): void {
        if (!this.webhookData) return;
        this._splash.show();
        const t0 = Date.now();
        this._service.activeWebhook(this.webhookData._id, this.webhookData.isActive).subscribe({
            next: (response) => {
                this.webhookData.isActive = response.data.isActive;
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

    edit(): void {
        this._dialog
            .open(NewWebhookDialogComponent, {
                data: this.webhookData,
                width: '600px',
                maxWidth: '92vw',
                panelClass: 'webhook-dialog-panel',
            })
            .afterClosed()
            .subscribe((result) => {
                if (result?.deleted) {
                    this._router.navigate(['/smart-monitor/webhooks']);
                    return;
                }
                if (result) {
                    this.webhookData = { ...this.webhookData, ...result };
                    this._cdr.markForCheck();
                }
            });
    }

    openLinkProject(): void {
        this._dialog
            .open(LinkProjectDialogComponent, {
                data: { projects: this.projectFlows, currentWebhookId: this.webhookData._id },
                width: '560px',
                maxWidth: '92vw',
                panelClass: 'webhook-dialog-panel',
            })
            .afterClosed()
            .subscribe((selected) => {
                if (!selected) return;
                this._service.update(this.webhookData._id, { link: [selected._id] }).subscribe({
                    next: (response) => {
                        if (response.data) this._applyWebhookUpdate(response.data);
                    },
                    error: () =>
                        this._snack.open(this._transloco.translate('webhooks.messages.request_failed'), undefined, { duration: 3000 }),
                });
            });
    }

    unlinkProject(projectFlow: any): void {
        this._confirm
            .open({
                title: this._transloco.translate('webhooks.details.unlink_title'),
                message: this._transloco.translate('webhooks.details.unlink_message'),
                actions: {
                    confirm: { label: this._transloco.translate('webhooks.details.unlink_confirm') },
                    cancel: { label: this._transloco.translate('webhooks.new.cancel') },
                },
            })
            .afterClosed()
            .subscribe((r) => {
                if (r !== 'confirmed') return;
                this._service.update(this.webhookData._id, { unlink: [projectFlow._id] }).subscribe({
                    next: (response) => {
                        if (response.data) this._applyWebhookUpdate(response.data);
                    },
                    error: () =>
                        this._snack.open(this._transloco.translate('webhooks.messages.request_failed'), undefined, { duration: 3000 }),
                });
            });
    }

    private _applyWebhookUpdate(newData: any): void {
        const raw = newData.projectFlow || [];
        const ids = raw.map((x: any) => (typeof x === 'string' ? x : x._id));
        this.webhookData.projectFlow = this.projectFlows.filter((pf) => ids.includes(pf._id));
        this._cdr.markForCheck();
    }

    onProjectFlowFilterChange(value: string): void {
        this.projectFlowSelected = value;
        this._cdr.markForCheck();
    }
}
