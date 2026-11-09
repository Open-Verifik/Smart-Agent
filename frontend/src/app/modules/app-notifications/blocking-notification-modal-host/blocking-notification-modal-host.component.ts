import { Component, DestroyRef, effect, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppNotificationsService } from 'app/core/notifications/app-notifications.service';
import { BlockingNotificationService } from 'app/core/notifications/blocking-notification.service';
import { InboxItem } from 'app/core/notifications/app-notifications.models';

import { BlockingNotificationModalComponent } from '../blocking-notification-modal/blocking-notification-modal.component';

@Component({
    selector: 'app-blocking-notification-modal-host',
    standalone: true,
    template: '',
})
export class BlockingNotificationModalHostComponent implements OnInit {
    private readonly _destroyRef = inject(DestroyRef);
    private readonly _blocking = inject(BlockingNotificationService);
    private readonly _notifications = inject(AppNotificationsService);
    private readonly _dialog = inject(MatDialog);
    private readonly _router = inject(Router);

    private _dialogOpen = false;
    private static _hasBootstrapped = false;

    constructor() {
        effect(() => {
            const item = this._blocking.currentBlocking();
            if (!item || this._dialogOpen || !this._blocking.canRun()) {
                return;
            }
            this._openModal(item);
        });
    }

    ngOnInit(): void {
        if (this._isRootRelevantPage()) {
            this._bootstrapIfNeeded();
        } else {
            this._router.events
                .pipe(
                    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
                    takeUntilDestroyed(this._destroyRef)
                )
                .subscribe((event: NavigationEnd) => {
                    const path = event.urlAfterRedirects.split('?')[0].split('#')[0];
                    if (path === '' || path === '/' || path === '/home') {
                        this._bootstrapIfNeeded();
                    }
                });
        }
    }

    private _isRootRelevantPage(): boolean {
        const url = (this._router.url || '').split('?')[0].split('#')[0];
        return url === '' || url === '/' || url === '/home';
    }

    private _bootstrapIfNeeded(): void {
        if (BlockingNotificationModalHostComponent._hasBootstrapped) return;
        if (!this._blocking.canRun()) return;
        BlockingNotificationModalHostComponent._hasBootstrapped = true;
        this._notifications
            .bootstrapInbox()
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(() => {
                this._blocking.refreshQueue();
            });
    }

    private _openModal(item: InboxItem): void {
        this._dialogOpen = true;

        const ref = this._dialog.open(BlockingNotificationModalComponent, {
            data: { item },
            disableClose: true,
            panelClass: 'blocking-notification-dialog',
            maxWidth: '520px',
            width: '100%',
        });

        ref.afterClosed().subscribe((success) => {
            this._dialogOpen = false;
            if (success) {
                this._blocking.advanceAfterAction(item.notificationId);
                this._notifications
                    .getUnreadCount()
                    .pipe(takeUntilDestroyed(this._destroyRef))
                    .subscribe();
            } else {
                this._blocking.setCurrent(null);
            }
        });
    }
}
