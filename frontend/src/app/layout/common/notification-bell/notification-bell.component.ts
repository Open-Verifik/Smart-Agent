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
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'notification-bell',
    standalone: true,
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatProgressSpinnerModule,
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

    readonly unreadCount = this._notifications.unreadCount;
    readonly items = this._notifications.hubInboxItems;
    readonly loading = this._notifications.hubInboxLoading;
    readonly listError = this._notifications.hubInboxError;

    readonly opened = signal(false);
    readonly canUseApi = signal(false);
    readonly expandedId = signal<string | null>(null);
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

    readonly selectedItem = computed(() => {
        const id = this.expandedId();
        if (!id) return null;
        return this.items().find((item) => item.notificationId === id) ?? null;
    });

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
        if (this.expandedImageSrc()) {
            this.closeImage();
            return;
        }
        if (this.selectedItem()) {
            this.closeDetail();
            return;
        }
        this._closePanel(true);
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        if (!this.opened()) return;
        const target = event.target as Node | null;
        if (!target?.isConnected) return;
        if (this._host.nativeElement.contains(target)) return;
        this._closePanel(true);
    }

    openFromRequest(): void {
        this._refreshAuth();
        const alreadyOpen = this.opened();
        this.opened.set(true);
        if (!alreadyOpen) {
            setTimeout(() => this._panelElement()?.focus());
        }
        if (!this.canUseApi()) return;
        this._notifications.refreshHubInbox().pipe(takeUntil(this._unsubscribeAll)).subscribe();
    }

    toggle(event: Event): void {
        event.stopPropagation();
        this._refreshAuth();
        const next = !this.opened();
        this.opened.set(next);
        if (!next) return;
        setTimeout(() => this._panelElement()?.focus());
        if (!this.canUseApi()) return;
        this._notifications.refreshHubInbox().pipe(takeUntil(this._unsubscribeAll)).subscribe();
    }

    openSignIn(): void {
        this._dialog.open(AuthModalComponent, {
            panelClass: 'auth-modal-dialog',
            width: '400px',
        });
    }

    markAll(): void {
        if (this.markingAll()) return;
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
        this.expandedImageSrc.set(null);
        this.rowErrorId.set(null);
        this.legalAccepted.set(false);
        if (item.interactionMode === 'seen_required' && item.receipt?.isUnread) {
            this._notifications
                .markSeen(item.notificationId)
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe({
                    next: () => this._notifications.noteSeenLocally(item.notificationId),
                });
        }
    }

    closeDetail(): void {
        this.expandedId.set(null);
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

    showDetailFooter(item: InboxItem): boolean {
        if (this.rowErrorId() === item.notificationId) return true;
        if (this.showCta(item)) return true;
        if (item.interactionMode === 'acknowledge' && item.receipt?.isUnread) return true;
        return item.interactionMode === 'accept' && Boolean(item.receipt?.isUnread);
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
        this._closePanel(false);
    }

    private _closePanel(restoreFocus: boolean): void {
        if (!this.opened()) return;
        this.opened.set(false);
        this.closeDetail();
        if (!restoreFocus) return;
        setTimeout(() => this._triggerElement()?.focus());
    }

    private _panelElement(): HTMLElement | null {
        const root = this._host.nativeElement as HTMLElement;
        return root.querySelector('.notification-bell__panel');
    }

    private _triggerElement(): HTMLButtonElement | null {
        const root = this._host.nativeElement as HTMLElement;
        return root.querySelector('.notification-bell__trigger');
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

    private _run(notificationId: string, request: Observable<void>): void {
        this.actionId.set(notificationId);
        this.rowErrorId.set(null);
        request.pipe(takeUntil(this._unsubscribeAll)).subscribe({
            next: () => {
                this.actionId.set(null);
                if (this.expandedId() === notificationId) this.expandedId.set(null);
            },
            error: () => {
                this.actionId.set(null);
                this.rowErrorId.set(notificationId);
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
