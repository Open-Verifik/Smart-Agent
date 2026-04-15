import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { FuseSplashScreenService } from '@fuse/services/splash-screen';
import { NewWebhookDialogComponent } from './dialogs/new-webhook-dialog.component';
import { WebhookStatsBarsComponent } from './webhook-stats-bars.component';
import { WebhooksService } from './webhooks.service';

@Component({
    selector: 'webhooks-list',
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
    ],
    templateUrl: './webhooks-list.component.html',
    styleUrls: ['./webhooks-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebhooksListComponent implements OnInit {
    private _service = inject(WebhooksService);
    private _splash = inject(FuseSplashScreenService);
    private _cdr = inject(ChangeDetectorRef);
    private _dialog = inject(MatDialog);
    private _router = inject(Router);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    loading = true;
    webhooks: any[] = [];

    ngOnInit(): void {
        this._load();
    }

    private _load(): void {
        this.loading = true;
        this._cdr.markForCheck();
        this._service.get({ eventStatistics: 7 }).subscribe({
            next: (response) => {
                this.webhooks = response.data || [];
                this.loading = false;
                this._cdr.markForCheck();
            },
            error: () => {
                this.loading = false;
                this._cdr.markForCheck();
                this._snack.open(this._transloco.translate('webhooks.messages.request_failed'), undefined, { duration: 3000 });
            },
        });
    }

    openNew(webhook?: any): void {
        this._dialog
            .open(NewWebhookDialogComponent, {
                data: webhook || null,
                width: '600px',
                maxWidth: '92vw',
                panelClass: 'webhook-dialog-panel',
            })
            .afterClosed()
            .subscribe((result) => {
                if (result) this._load();
            });
    }

    activeWebhook(webhook: any): void {
        this._splash.show();
        const t0 = Date.now();
        this._service.activeWebhook(webhook._id, webhook.isActive).subscribe({
            next: (response) => {
                webhook.isActive = response.data.isActive;
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

    goDetail(webhook: any): void {
        this._router.navigate(['/smart-monitor/webhooks', webhook._id]);
    }
}
