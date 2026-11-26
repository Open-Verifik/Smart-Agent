import { DatePipe } from '@angular/common';
import {
    Component,
    ElementRef,
    HostListener,
    OnDestroy,
    computed,
    inject,
    signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { AppNotificationsService } from 'app/core/notifications/app-notifications.service';
import {
    InboxItem,
    NotificationCategory,
} from 'app/core/notifications/app-notifications.models';
import { trustNotificationBodyHtml } from 'app/core/notifications/notification-body-html.util';
import {
    isSelfReferentialSmartAgentCta,
    openNotificationCta,
    resolveInAppCtaPath,
    shouldShowNotificationCta,
} from 'app/core/notifications/notification-cta.util';
import { SessionService } from 'app/core/services/session.service';
import { AuthModalComponent } from 'app/layout/common/auth-modal/auth-modal.component';
import { QuickChatService } from 'app/layout/common/quick-chat/quick-chat.service';
import { Observable, Subject, finalize, takeUntil } from 'rxjs';

export type BellFilter = 'all' | 'unread';

@Component({
    selector: 'notification-bell',
    standalone: true,
    imports: [
        DatePipe,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        TranslocoModule,
    ],
    templateUrl: './notification-bell.component.html',
    styleUrls: ['./notification-bell.component.scss'],
})
export class NotificationBellComponent implements OnDestroy {
    private readonly _notifications = inject(AppNotificationsService);
    private readonly _session = inject(SessionService);
    private readonly _dialog = inject(MatDialog);
    private readonly _router = inject(Router);
    private readonly _quickChat = inject(QuickChatService);
    private readonly _transloco = inject(TranslocoService);
    private readonly _sanitizer = inject(DomSanitizer);
    private readonly _host = inject(ElementRef<HTMLElement>);
    private readonly _unsubscribeAll = new Subject<void>();
    private readonly _seenInFlight = new Set<string>();

    readonly unreadCount = this._notifications.unreadCount;
    readonly items = this._notifications.hubInboxItems;
    readonly loading = this._notifications.hubInboxLoading;
    readonly listError = this._notifications.hubInboxError;

    readonly opened = signal(false);
    readonly canUseApi = signal(false);
    readonly filter = signal<BellFilter>('all');
    readonly expandedId = signal<string | null>(null);
    readonly detailItem = signal<InboxItem | null>(null);
    readonly detailLoading = signal(false);
    readonly detailError = signal<string | null>(null);
    readonly actionId = signal<string | null>(null);
    readonly rowErrorId = signal<string | null>(null);
    readonly legalAccepted = signal(false);
    readonly expandedImageSrc = signal<string | null>(null);
    readonly markingAll = signal(false);
    readonly markAllError = signal(false);

    readonly badgeLabel = computed(() => {
        const count = this.unreadCount();
        return count > 99 ? '99+' : String(count);
    });

    readonly selectedItem = computed(() => this.detailItem());

    readonly filteredItems = computed(() => {
        const list = this.items();
        if (this.filter() === 'unread') {
            return list.filter((item) => item.receipt?.isUnread);
        }
        return list;
    });

    readonly hasMarkableUnread = computed(() =>
        this.items().some(
            (item) =>
                item.receipt?.isUnread &&
                (item.interactionMode === 'informational' || item.interactionMode === 'seen_required')
        )
    );

    constructor() {
        this._notifications.openBell$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => this.openFromRequest());
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    @HostListener('document:keydown.escape')
    onEscape(): void {
        if (!this.opened()) return;
        if (this.expandedImageSrc()) {
            this.closeImage();
            return;
        }
        if (this.selectedItem()) {
            this.closeDetail();
            return;
        }
        this.closePanel(true);
    }

    @HostListener('document:pointerdown', ['$event'])
    onDocumentPointerDown(event: PointerEvent): void {
        if (!this.opened()) return;
        const target = event.target as Node | null;
        if (!target?.isConnected) return;
        if (this._host.nativeElement.contains(target)) return;
        this.closePanel(false);
    }

    openFromRequest(): void {
        this._refreshAuth();
        const alreadyOpen = this.opened();
        this.opened.set(true);
        if (!alreadyOpen) {
            queueMicrotask(() => this._panelElement()?.focus({ preventScroll: true }));
        }
        if (!this.canUseApi()) return;
        this._notifications.refreshHubInbox().pipe(takeUntil(this._unsubscribeAll)).subscribe();
    }

    toggle(event: Event): void {
        event.stopPropagation();
        this._refreshAuth();
        const next = !this.opened();
        if (!next) {
            this.closePanel(false);
            return;
        }
        this.opened.set(true);
        queueMicrotask(() => this._panelElement()?.focus({ preventScroll: true }));
        if (!this.canUseApi()) return;
        this._notifications.refreshHubInbox().pipe(takeUntil(this._unsubscribeAll)).subscribe();
    }

    closePanel(restoreFocus = true): void {
        if (!this.opened()) return;
        this.opened.set(false);
        this.closeDetail();
        if (!restoreFocus) return;
        queueMicrotask(() => this._triggerElement()?.focus({ preventScroll: true }));
    }

    setFilter(next: BellFilter): void {
        this.filter.set(next);
    }

    openSignIn(): void {
        this._dialog.open(AuthModalComponent, {
            panelClass: 'auth-modal-dialog',
            width: '400px',
        });
    }

    markAll(): void {
        if (this.markingAll() || !this.hasMarkableUnread()) return;
        this.markingAll.set(true);
        this.markAllError.set(false);
        this._notifications
            .markVisibleAsSeen()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => this.markingAll.set(false),
                error: () => {
                    this.markingAll.set(false);
                    this.markAllError.set(true);
                },
            });
    }

    openDetail(item: InboxItem): void {
        this.expandedId.set(item.notificationId);
        this.detailItem.set(item);
        this.detailLoading.set(!item.content?.body);
        this.detailError.set(null);
        this.expandedImageSrc.set(null);
        this.rowErrorId.set(null);
        this.legalAccepted.set(false);

        // Immediately mark informational and seen_required notifications as read on open.
        this._markSeenOnOpen(item);

        this._notifications
            .show(item.notificationId)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (response) => {
                    if (this.expandedId() !== item.notificationId) return;
                    const loaded = response.data ?? item;
                    const currentHub = this.items().find(
                        (entry) => entry.notificationId === item.notificationId
                    );
                    const merged: InboxItem =
                        currentHub && !currentHub.receipt?.isUnread && loaded.receipt?.isUnread
                            ? {
                                  ...loaded,
                                  receipt: {
                                      ...loaded.receipt,
                                      ...currentHub.receipt,
                                      isUnread: false,
                                  },
                              }
                            : loaded;
                    this.detailItem.set(merged);
                    this.detailLoading.set(false);
                    this._markSeenOnOpen(merged);
                },
                error: () => {
                    if (this.expandedId() !== item.notificationId) return;
                    this.detailLoading.set(false);
                    this.detailError.set('appNotifications.inbox.errors.loadDetail');
                },
            });
    }

    closeDetail(): void {
        this.expandedId.set(null);
        this.detailItem.set(null);
        this.detailLoading.set(false);
        this.detailError.set(null);
        this.expandedImageSrc.set(null);
        this.rowErrorId.set(null);
        this.legalAccepted.set(false);
    }

    onDetailBack(event: Event): void {
        event.stopPropagation();
        if (this.expandedImageSrc()) {
            this.closeImage();
            return;
        }
        this.closeDetail();
    }

    onBodyClick(event: MouseEvent): void {
        const target = event.target;
        if (!(target instanceof HTMLImageElement)) return;
        const src = target.currentSrc || target.src;
        if (!src) return;
        event.preventDefault();
        event.stopPropagation();
        this.expandedImageSrc.set(src);
    }

    closeImage(): void {
        this.expandedImageSrc.set(null);
    }

    safeBodyHtml(body: string): SafeHtml {
        return trustNotificationBodyHtml(this._sanitizer, body);
    }

    canDismiss(item: InboxItem): boolean {
        return item.interactionMode === 'informational' || item.interactionMode === 'seen_required';
    }

    dismiss(event: Event, item: InboxItem): void {
        event.stopPropagation();
        this._run(item.notificationId, this._notifications.dismissAndForget(item.notificationId));
    }

    acknowledge(item: InboxItem): void {
        this._run(item.notificationId, this._notifications.acknowledgeAndForget(item.notificationId));
    }

    accept(item: InboxItem): void {
        const version = item.legal?.version;
        if (!version) return;
        if (item.legal?.url && !this.legalAccepted()) return;
        this._run(
            item.notificationId,
            this._notifications.acceptAndForget(item.notificationId, {
                legalVersion: version,
                accepted: true,
            })
        );
    }

    showCta(item: InboxItem): boolean {
        return shouldShowNotificationCta(item.cta);
    }

    openCta(item: InboxItem): void {
        const url = item.cta?.url;
        const inAppPath = url ? resolveInAppCtaPath(url) : null;
        const opensBell =
            isSelfReferentialSmartAgentCta(url) || Boolean(inAppPath?.includes('openNotifications=1'));
        openNotificationCta(item.cta, {
            router: this._router,
            quickChat: this._quickChat,
            openBell: () => this._notifications.requestOpenBell(),
        });
        if (opensBell) return;
        this.closePanel(false);
    }

    categoryLabelKey(category: NotificationCategory): string {
        return `appNotifications.inbox.categories.${category}`;
    }

    categoryToneClass(category: NotificationCategory): string {
        const map: Record<NotificationCategory, string> = {
            billing: 'is-billing',
            security: 'is-security',
            legal: 'is-legal',
            maintenance: 'is-maintenance',
            product: 'is-product',
            system: 'is-system',
        };
        return map[category] ?? map.system;
    }

    relativeTime(publishedAt?: string): string {
        if (!publishedAt) return '';
        const minutes = Math.round((Date.now() - new Date(publishedAt).getTime()) / 60000);
        if (!Number.isFinite(minutes) || minutes < 1) {
            return this._transloco.translate('appNotifications.bell.justNow');
        }
        if (minutes < 60) {
            return this._transloco.translate('appNotifications.bell.minutes', { count: minutes });
        }
        const hours = Math.round(minutes / 60);
        if (hours < 24) {
            return this._transloco.translate('appNotifications.bell.hours', { count: hours });
        }
        return this._transloco.translate('appNotifications.bell.days', { count: Math.round(hours / 24) });
    }

    categoryIcon(category: NotificationCategory): string {
        const map: Record<NotificationCategory, string> = {
            billing: 'heroicons_outline:credit-card',
            security: 'heroicons_outline:shield-check',
            legal: 'heroicons_outline:scale',
            maintenance: 'heroicons_outline:wrench-screwdriver',
            product: 'heroicons_outline:sparkles',
            system: 'heroicons_outline:bell',
        };
        return map[category] ?? map.system;
    }

    trackById(_index: number, item: InboxItem): string {
        return item.notificationId;
    }

    private _panelElement(): HTMLElement | null {
        const root = this._host.nativeElement as HTMLElement;
        return root.querySelector('.notification-bell__panel');
    }

    private _triggerElement(): HTMLButtonElement | null {
        const root = this._host.nativeElement as HTMLElement;
        return root.querySelector('.notification-bell__trigger');
    }

    private _run(notificationId: string, request: Observable<void>): void {
        this.actionId.set(notificationId);
        this.rowErrorId.set(null);
        request.pipe(takeUntil(this._unsubscribeAll)).subscribe({
            next: () => {
                this.actionId.set(null);
                if (this.expandedId() === notificationId) this.closeDetail();
            },
            error: () => {
                this.actionId.set(null);
                this.rowErrorId.set(notificationId);
            },
        });
    }

    private _markSeenOnOpen(item: InboxItem): void {
        const isAutoReadable =
            item.interactionMode === 'informational' || item.interactionMode === 'seen_required';
        if (!isAutoReadable || !item.receipt?.isUnread) return;
        if (this._seenInFlight.has(item.notificationId)) return;

        const seenAt = new Date().toISOString();
        this._seenInFlight.add(item.notificationId);

        this.detailItem.update((current) => {
            if (!current || current.notificationId !== item.notificationId) return current;
            return {
                ...current,
                receipt: {
                    ...current.receipt,
                    status: current.receipt.status === 'dismissed' ? 'dismissed' : 'seen',
                    isUnread: false,
                    firstSeenAt: current.receipt.firstSeenAt || seenAt,
                },
            };
        });

        this._notifications
            .markAsSeen(item.notificationId)
            .pipe(
                finalize(() => this._seenInFlight.delete(item.notificationId)),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe({
                error: () => {
                    this.detailItem.update((current) => {
                        if (!current || current.notificationId !== item.notificationId) return current;
                        return {
                            ...current,
                            receipt: {
                                ...current.receipt,
                                isUnread: true,
                            },
                        };
                    });
                },
            });
    }

    private _refreshAuth(): void {
        const token = localStorage.getItem('accessToken') || '';
        const payload = AuthUtils.getJwtPayload(token);
        const ok =
            this._session.isTokenValid() &&
            Boolean(payload && (payload['clientId'] ?? payload['staffId'] ?? payload['superAdminId']));
        this.canUseApi.set(ok);
    }
}
