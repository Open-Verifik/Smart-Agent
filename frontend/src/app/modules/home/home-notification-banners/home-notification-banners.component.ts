import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { AppNotificationsService } from 'app/core/notifications/app-notifications.service';
import { InboxItem } from 'app/core/notifications/app-notifications.models';
import {
    openNotificationCta,
    shouldShowNotificationCta,
} from 'app/core/notifications/notification-cta.util';
import { SessionService } from 'app/core/services/session.service';
import { QuickChatService } from 'app/layout/common/quick-chat/quick-chat.service';

@Component({
    selector: 'app-home-notification-banners',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, TranslocoModule],
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

    ngOnInit(): void {
        this.loadBanners();
    }

    loadBanners(): void {
        if (!this._canUseApi()) {
            this.banners.set([]);
            return;
        }

        this._notifications.getActiveBanners().subscribe((res) => {
            this.banners.set(res.data || []);
        });
    }

    dismissBanner(item: InboxItem): void {
        this.dismissingId.set(item.notificationId);
        this._notifications.dismiss(item.notificationId).subscribe({
            next: () => {
                this.dismissingId.set(null);
                this.banners.update((list) =>
                    list.filter((b) => b.notificationId !== item.notificationId)
                );
                this._notifications.getUnreadCount().subscribe();
            },
            error: () => this.dismissingId.set(null),
        });
    }

    showCta(item: InboxItem): boolean {
        return shouldShowNotificationCta(item.cta);
    }

    openCta(item: InboxItem): void {
        openNotificationCta(item.cta, {
            router: this._router,
            quickChat: this._quickChat,
        });
    }

    trackById(_index: number, item: InboxItem): string {
        return item.notificationId;
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
