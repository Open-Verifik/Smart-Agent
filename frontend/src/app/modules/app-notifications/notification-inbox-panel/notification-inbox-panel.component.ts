import { DatePipe, NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    SecurityContext,
    computed,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { AppNotificationsService } from 'app/core/notifications/app-notifications.service';
import {
    InboxItem,
    InteractionMode,
    NotificationCategory,
} from 'app/core/notifications/app-notifications.models';
import { SessionService } from 'app/core/services/session.service';
import { FuseScrollbarDirective } from '@fuse/directives/scrollbar';
import { AuthModalComponent } from 'app/layout/common/auth-modal/auth-modal.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-notification-inbox-panel',
    standalone: true,
    imports: [
        NgClass,
        DatePipe,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
        FuseScrollbarDirective,
    ],
    templateUrl: './notification-inbox-panel.component.html',
    styleUrls: ['./notification-inbox-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationInboxPanelComponent implements OnDestroy {
    private readonly _notifications = inject(AppNotificationsService);
    private readonly _session = inject(SessionService);
    private readonly _dialog = inject(MatDialog);
    private readonly _sanitizer = inject(DomSanitizer);
    private readonly _unsubscribeAll = new Subject<void>();

    readonly hasSession = computed(() => this._session.hasValidAuthentication());
    readonly canUseApi = signal(false);

    /** Hub list state owned by AppNotificationsService (persists across tab switches). */
    readonly items = this._notifications.hubInboxItems;
    readonly loadingList = this._notifications.hubInboxLoading;
    readonly listError = this._notifications.hubInboxError;
    readonly pendingOutsideInbox = this._notifications.hubInboxPendingOutside;

    selectedItem = signal<InboxItem | null>(null);
    loadingDetail = signal(false);
    detailError = signal<string | null>(null);
    actionBusy = signal(false);
    legalAccepted = signal(false);

    constructor() {
        this._refreshAuthSignals();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    refreshIfNeeded(): void {
        this._refreshAuthSignals();
        if (!this.canUseApi()) {
            this._notifications.clearHubInbox();
            this.selectedItem.set(null);
            return;
        }
        this._notifications.refreshHubInbox().pipe(takeUntil(this._unsubscribeAll)).subscribe();
    }

    openSignIn(): void {
        this._dialog.open(AuthModalComponent, {
            panelClass: 'auth-modal-dialog',
            width: '400px',
        });
    }

    isReadItem(item: InboxItem): boolean {
        return !item.receipt?.isUnread;
    }

    selectItem(item: InboxItem): void {
        this.detailError.set(null);
        this.legalAccepted.set(false);
        this.selectedItem.set(item);
        this._loadDetail(item.notificationId);
    }

    clearSelection(): void {
        this.selectedItem.set(null);
        this.detailError.set(null);
        this.legalAccepted.set(false);
    }

    showDetailPane(): boolean {
        return Boolean(this.selectedItem() || this.loadingDetail() || this.detailError());
    }

    showListPane(): boolean {
        return !this.showDetailPane();
    }

    safeBodyHtml(body: string): SafeHtml {
        const cleaned = this._sanitizer.sanitize(SecurityContext.HTML, body || '') || '';
        return this._sanitizer.bypassSecurityTrustHtml(cleaned);
    }

    categoryLabelKey(cat: NotificationCategory): string {
        return `appNotifications.inbox.categories.${cat}`;
    }

    categoryBadgeClass(cat: NotificationCategory): string {
        const map: Record<NotificationCategory, string> = {
            billing: 'inbox-pill--billing',
            security: 'inbox-pill--security',
            legal: 'inbox-pill--legal',
            maintenance: 'inbox-pill--maintenance',
            product: 'inbox-pill--product',
            system: 'inbox-pill--system',
        };
        return map[cat] ?? map.system;
    }

    primaryActionKey(mode: InteractionMode): string {
        switch (mode) {
            case 'acknowledge':
                return 'appNotifications.inbox.actions.acknowledge';
            case 'accept':
                return 'appNotifications.inbox.actions.accept';
            case 'seen_required':
                return 'appNotifications.inbox.actions.markSeen';
            default:
                return 'appNotifications.inbox.actions.dismiss';
        }
    }

    showPrimaryAction(item: InboxItem | null): boolean {
        if (!item) return false;
        if (item.interactionMode === 'accept') return true;
        if (item.receipt.isUnread) return true;
        return item.interactionMode === 'informational' && !item.receipt.dismissedAt;
    }

    primaryActionDisabled(item: InboxItem | null): boolean {
        if (!item || this.actionBusy()) return true;
        if (item.interactionMode === 'accept') {
            return !this.legalAccepted() || !item.legal?.version;
        }
        return false;
    }

    dismissFromDetail(): void {
        const item = this.selectedItem();
        if (!item) return;
        this._dismiss(item.notificationId);
    }

    runPrimaryAction(): void {
        const item = this.selectedItem();
        if (!item) return;

        switch (item.interactionMode) {
            case 'acknowledge':
                this._acknowledge(item.notificationId);
                break;
            case 'accept':
                this._accept(item);
                break;
            case 'seen_required':
                this._markSeen(item.notificationId);
                break;
            default:
                this._dismiss(item.notificationId);
        }
    }

    openCtaUrl(item: InboxItem | null): void {
        const url = item?.cta?.url?.trim();
        if (!url) return;
        window.open(url, item.cta?.openInNewTab !== false ? '_blank' : '_self', 'noopener');
    }

    trackByNotificationId(_index: number, item: InboxItem): string {
        return item.notificationId;
    }

    private _loadDetail(notificationId: string): void {
        this.loadingDetail.set(true);
        this.detailError.set(null);

        this._notifications
            .show(notificationId)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (res) => {
                    this.loadingDetail.set(false);
                    const item = res.data;
                    this.selectedItem.set(item);

                    if (item.interactionMode === 'seen_required' && item.receipt.isUnread) {
                        this._markSeen(notificationId, false);
                    }
                },
                error: () => {
                    this.loadingDetail.set(false);
                    this.detailError.set('appNotifications.inbox.errors.loadDetail');
                },
            });
    }

    private _markSeen(notificationId: string, reloadList = true): void {
        this.actionBusy.set(true);
        this._notifications
            .markSeen(notificationId)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => {
                    this.actionBusy.set(false);
                    this._afterAction(notificationId, reloadList);
                },
                error: () => {
                    this.actionBusy.set(false);
                    this.detailError.set('appNotifications.inbox.errors.action');
                },
            });
    }

    private _acknowledge(notificationId: string): void {
        this.actionBusy.set(true);
        this._notifications
            .acknowledge(notificationId)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => {
                    this.actionBusy.set(false);
                    this._afterAction(notificationId);
                },
                error: () => {
                    this.actionBusy.set(false);
                    this.detailError.set('appNotifications.inbox.errors.action');
                },
            });
    }

    private _accept(item: InboxItem): void {
        const version = item.legal?.version;
        if (!version) return;

        this.actionBusy.set(true);
        this._notifications
            .accept(item.notificationId, { legalVersion: version, accepted: true })
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => {
                    this.actionBusy.set(false);
                    this._afterAction(item.notificationId);
                },
                error: () => {
                    this.actionBusy.set(false);
                    this.detailError.set('appNotifications.inbox.errors.action');
                },
            });
    }

    private _dismiss(notificationId: string): void {
        this.actionBusy.set(true);
        this._notifications
            .dismiss(notificationId)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => {
                    this.actionBusy.set(false);
                    this._afterAction(notificationId);
                },
                error: () => {
                    this.actionBusy.set(false);
                    this.detailError.set('appNotifications.inbox.errors.action');
                },
            });
    }

    private _afterAction(notificationId: string, stayOnDetail = true): void {
        if (stayOnDetail) {
            this._loadDetail(notificationId);
        }
        this._notifications.refreshHubInbox(true).pipe(takeUntil(this._unsubscribeAll)).subscribe();
    }

    private _refreshAuthSignals(): void {
        const ok =
            this._session.isTokenValid() &&
            (() => {
                const payload = AuthUtils.getJwtPayload(
                    localStorage.getItem('accessToken') || ''
                );
                if (!payload) return false;
                return Boolean(
                    payload['clientId'] ?? payload['staffId'] ?? payload['superAdminId']
                );
            })();
        this.canUseApi.set(ok);
    }
}
