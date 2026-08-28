import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import { trustNotificationBodyHtml } from 'app/core/notifications/notification-body-html.util';
import { AppNotificationsService } from 'app/core/notifications/app-notifications.service';
import { InboxItem } from 'app/core/notifications/app-notifications.models';
import {
    openNotificationCta,
    shouldShowNotificationCta,
} from 'app/core/notifications/notification-cta.util';
import { isInsufficientCreditsError } from 'app/core/utils/insufficient-credits.util';
import { QuickChatService } from 'app/layout/common/quick-chat/quick-chat.service';

export interface BlockingNotificationModalData {
    item: InboxItem;
}

@Component({
    selector: 'app-blocking-notification-modal',
    standalone: true,
    imports: [
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './blocking-notification-modal.component.html',
    styleUrls: ['./blocking-notification-modal.component.scss'],
})
export class BlockingNotificationModalComponent {
    private readonly _dialogRef = inject(
        MatDialogRef<BlockingNotificationModalComponent>
    );
    private readonly _data = inject<BlockingNotificationModalData>(MAT_DIALOG_DATA);
    private readonly _notifications = inject(AppNotificationsService);
    private readonly _sanitizer = inject(DomSanitizer);
    private readonly _router = inject(Router);
    private readonly _quickChat = inject(QuickChatService);

    readonly item = this._data.item;
    actionBusy = signal(false);
    legalAccepted = signal(false);

    safeBodyHtml(body: string): SafeHtml {
        return trustNotificationBodyHtml(this._sanitizer, body);
    }

    primaryActionDisabled(): boolean {
        if (this.actionBusy()) return true;
        if (this.item.interactionMode === 'accept') {
            return !this.legalAccepted() || !this.item.legal?.version;
        }
        return false;
    }

    runPrimary(): void {
        const id = this.item.notificationId;
        this.actionBusy.set(true);

        if (this.item.interactionMode === 'accept') {
            const version = this.item.legal?.version;
            if (!version) {
                this.actionBusy.set(false);
                return;
            }
            this._notifications
                .accept(id, { legalVersion: version, accepted: true })
                .subscribe({
                    next: () => this._closeSuccess(),
                    error: () => this.actionBusy.set(false),
                });
            return;
        }

        this._notifications.acknowledge(id).subscribe({
            next: () => this._closeSuccess(),
            error: () => this.actionBusy.set(false),
        });
    }

    showCta(): boolean {
        return shouldShowNotificationCta(this.item.cta);
    }

    openCta(): void {
        openNotificationCta(this.item.cta, {
            router: this._router,
            quickChat: this._quickChat,
        });
    }

    /**
     * True when this blocking notice is a credit-balance shortage.
     */
    isInsufficientCredits = (): boolean =>
        isInsufficientCreditsError(
            `${this.item.content.title ?? ''} ${this.item.content.summary ?? ''} ${this.item.content.body ?? ''}`
        );

    goToAddCredits = (): void => {
        const id = this.item.notificationId;
        this.actionBusy.set(true);
        this._notifications.acknowledge(id).subscribe({
            next: () => this._closeAndGoToCredits(),
            error: () => this._closeAndGoToCredits(),
        });
    };

    private _closeSuccess(): void {
        this.actionBusy.set(false);
        this._dialogRef.close(true);
    }

    private _closeAndGoToCredits = (): void => {
        this.actionBusy.set(false);
        this._dialogRef.close(true);
        void this._router.navigate(['/add-credits']);
    };
}
