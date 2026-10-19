import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { Observable } from 'rxjs';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { AppNotificationsService } from 'app/core/notifications/app-notifications.service';
import { InboxItem, NotificationCategory } from 'app/core/notifications/app-notifications.models';
import {
    openNotificationCta,
    shouldShowNotificationCta,
} from 'app/core/notifications/notification-cta.util';
import { SessionService } from 'app/core/services/session.service';
import { QuickChatService } from 'app/layout/common/quick-chat/quick-chat.service';

@Component({
    selector: 'app-home-notification-banners',
    standalone: true,
    imports: [MatCheckboxModule, MatIconModule, TranslocoModule],
    templateUrl: './home-notification-banners.component.html',
    styleUrls: ['./home-notification-banners.component.scss'],
})
export class HomeNotificationBannersComponent implements OnInit {
    private readonly _notifications = inject(AppNotificationsService);
    private readonly _session = inject(SessionService);
    private readonly _router = inject(Router);
    private readonly _quickChat = inject(QuickChatService);

    banners = signal<InboxItem[]>([]);
    dismissingId = signal<string | null>(null);
    actionErrorId = signal<string | null>(null);
    legalAcceptedIds = signal<ReadonlySet<string>>(new Set());

    constructor() {
        effect(() => {
            const items = this._notifications.activeBanners();
            if (!this._canUseApi()) {
                this.banners.set([]);
                return;
            }
            if (!items) return;
            this.banners.set(items);
        });
    }

    ngOnInit(): void {
        this.loadBanners();
    }

    loadBanners(): void {
        if (!this._canUseApi()) {
            this.banners.set([]);
            return;
        }

        const cached = this._notifications.activeBanners();
        if (cached) this.banners.set(cached);
        this._notifications.getActiveBanners().subscribe();
    }

    dismissBanner(item: InboxItem): void {
        this._closeBanner(item, this._notifications.dismissAndForget(item.notificationId));
    }

    acknowledgeBanner(item: InboxItem): void {
        this._closeBanner(item, this._notifications.acknowledgeAndForget(item.notificationId));
    }

    acceptBanner(item: InboxItem): void {
        const version = item.legal?.version;
        if (!version || this.acceptDisabled(item)) return;

        this._closeBanner(
            item,
            this._notifications.acceptAndForget(item.notificationId, {
                legalVersion: version,
                accepted: true,
            })
        );
    }

    showCta(item: InboxItem): boolean {
        return shouldShowNotificationCta(item.cta);
    }

    showAcknowledge(item: InboxItem): boolean {
        return item.interactionMode === 'acknowledge' && !item.receipt?.acknowledgedAt;
    }

    showAccept(item: InboxItem): boolean {
        return item.interactionMode === 'accept' && !item.receipt?.acceptedAt;
    }

    showActions(item: InboxItem): boolean {
        return this.showCta(item) || this.showAcknowledge(item) || this.showAccept(item);
    }

    isBusy(item: InboxItem): boolean {
        return this.dismissingId() === item.notificationId;
    }

    acceptDisabled(item: InboxItem): boolean {
        if (this.isBusy(item) || !item.legal?.version) return true;
        return Boolean(item.legal?.url) && !this.isLegalAccepted(item);
    }

    isLegalAccepted(item: InboxItem): boolean {
        return this.legalAcceptedIds().has(item.notificationId);
    }

    toggleLegalAccepted(item: InboxItem, checked: boolean): void {
        this.legalAcceptedIds.update((current) => {
            const next = new Set(current);
            if (checked) next.add(item.notificationId);
            else next.delete(item.notificationId);
            return next;
        });
    }

    openCta(item: InboxItem): void {
        openNotificationCta(item.cta, {
            router: this._router,
            quickChat: this._quickChat,
            openBell: () => this._notifications.requestOpenBell(),
        });
    }

    trackById(_index: number, item: InboxItem): string {
        return item.notificationId;
    }

    categoryIcon(category: NotificationCategory): string {
        const map: Record<NotificationCategory, string> = {
            billing: 'heroicons_solid:credit-card',
            security: 'heroicons_solid:shield-check',
            legal: 'heroicons_solid:scale',
            maintenance: 'heroicons_solid:wrench-screwdriver',
            product: 'heroicons_solid:sparkles',
            system: 'heroicons_solid:bell',
        };
        return map[category] ?? map.system;
    }

    categoryLabelKey(category: NotificationCategory): string {
        return `appNotifications.inbox.categories.${category}`;
    }

    private _closeBanner(item: InboxItem, request$: Observable<void>): void {
        this.dismissingId.set(item.notificationId);
        this.actionErrorId.set(null);
        request$.subscribe({
            next: () => {
                this.dismissingId.set(null);
                this.banners.update((list) =>
                    list.filter((banner) => banner.notificationId !== item.notificationId)
                );
            },
            error: () => {
                this.dismissingId.set(null);
                this.actionErrorId.set(item.notificationId);
            },
        });
    }

    private _canUseApi(): boolean {
        if (!this._session.isTokenValid()) return false;
        const payload = AuthUtils.getJwtPayload(
            localStorage.getItem('accessToken') || ''
        );
        if (!payload) return false;
        return Boolean(
            payload['clientId'] ?? payload['staffId'] ?? payload['superAdminId']
        );
    }
}
