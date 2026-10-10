import { Injectable, inject, signal } from '@angular/core';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { SessionService } from 'app/core/services/session.service';
import { switchMap, tap } from 'rxjs';

import { AppNotificationsService } from './app-notifications.service';
import { InboxItem } from './app-notifications.models';

@Injectable({ providedIn: 'root' })
export class BlockingNotificationService {
    private readonly _notifications = inject(AppNotificationsService);
    private readonly _session = inject(SessionService);

    private readonly _queue = signal<InboxItem[]>([]);
    private readonly _current = signal<InboxItem | null>(null);
    /** Acted-on ids stay closed even if a refresh still lists them as blocking. */
    private readonly _settledIds = new Set<string>();
    private _queueGeneration = 0;

    readonly currentBlocking = this._current.asReadonly();

    canRun(): boolean {
        if (!this._session.isTokenValid()) return false;
        const payload = AuthUtils.getJwtPayload(
            localStorage.getItem('accessToken') || ''
        );
        if (!payload) return false;
        return Boolean(
            payload['clientId'] ?? payload['staffId'] ?? payload['superAdminId']
        );
    }

    refreshQueue(): void {
        if (!this.canRun()) {
            this._queue.set([]);
            this._current.set(null);
            return;
        }

        const generation = ++this._queueGeneration;
        this._notifications
            .syncInbox()
            .pipe(
                switchMap(() => this._notifications.getActiveModals()),
                tap((res) => {
                    if (generation !== this._queueGeneration) return;
                    const rows = res.data || [];
                    for (const id of [...this._settledIds]) {
                        const stillBlocking = rows.some(
                            (item) => item.notificationId === id && item.receipt?.isBlocking
                        );
                        if (!stillBlocking) this._settledIds.delete(id);
                    }
                    const blocking = rows.filter(
                        (item) => item.receipt?.isBlocking && !this._settledIds.has(item.notificationId)
                    );
                    this._queue.set(blocking);
                    this._current.set(blocking[0] ?? null);
                })
            )
            .subscribe({ error: () => undefined });
    }

    advanceAfterAction(notificationId?: string): void {
        if (notificationId) this._settledIds.add(notificationId);
        this._current.set(null);
        this.refreshQueue();
    }

    setCurrent(item: InboxItem | null): void {
        this._current.set(item);
    }
}
