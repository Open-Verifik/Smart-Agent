import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';
import { NotificationSettings, SettingsService } from '../settings.service';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { getBusinessUserClientId } from '../utils/settings-business-user.util';

/** Keys of the boolean form controls (excluding the master "active" switch). */
type CategoryKey =
    | 'paymentUpdates'
    | 'creditsExpiring'
    | 'lowBalance'
    | 'newEndpoints'
    | 'webhookErrors';

/** Definition for a category row rendered in the template. */
export interface NotificationCategory {
    key: CategoryKey;
    icon: string;
    titleKey: string;
    descKey: string;
}

type NotificationFormSnapshot = Record<CategoryKey | 'active', boolean>;

@Component({
    selector: 'app-notification-settings',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatTooltipModule,
        TranslocoModule,
        SettingsBusinessAccountEmptyStateComponent,
    ],
    templateUrl: './notification-settings.component.html',
    styleUrl: './notification-settings.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationSettingsComponent implements OnChanges, OnDestroy {
    private _destroy$ = new Subject<void>();

    @Input() user: unknown;
    @Output() userChange = new EventEmitter<unknown>();

    get userClientId(): string | undefined {
        return getBusinessUserClientId(this.user);
    }

    onBusinessAccountLinked(account: unknown): void {
        this.userChange.emit(account);
        this.prefsLoaded = false;
        this._maybeLoadSettings();
    }

    /** Categories rendered in order. Each maps to a boolean form control. */
    readonly categories: NotificationCategory[] = [
        {
            key: 'paymentUpdates',
            icon: 'credit_card',
            titleKey: 'settings.notifications.payment_title',
            descKey: 'settings.notifications.payment_desc',
        },
        {
            key: 'creditsExpiring',
            icon: 'schedule',
            titleKey: 'settings.notifications.credits_title',
            descKey: 'settings.notifications.credits_desc',
        },
        {
            key: 'lowBalance',
            icon: 'account_balance_wallet',
            titleKey: 'settings.notifications.balance_title',
            descKey: 'settings.notifications.balance_desc',
        },
        {
            key: 'newEndpoints',
            icon: 'rocket_launch',
            titleKey: 'settings.notifications.new_endpoints_title',
            descKey: 'settings.notifications.new_endpoints_desc',
        },
        {
            key: 'webhookErrors',
            icon: 'error_outline',
            titleKey: 'settings.notifications.webhook_title',
            descKey: 'settings.notifications.webhook_desc',
        },
    ];

    notificationsForm: FormGroup;
    settingsId: string | null = null;
    loadingPrefs = false;
    prefsLoaded = false;
    saving = false;

    /** Snapshot of the last successfully loaded/saved state — basis for the unsaved indicator. */
    private _serverSnapshot: NotificationFormSnapshot = this._defaultSnapshot();

    constructor(
        private _cdr: ChangeDetectorRef,
        private _snackBar: MatSnackBar,
        private _transloco: TranslocoService,
        private _settingsService: SettingsService,
        private _fb: FormBuilder
    ) {
        this.notificationsForm = this._fb.group({
            active: [false],
            paymentUpdates: [false],
            lowBalance: [false],
            newEndpoints: [false],
            creditsExpiring: [false],
            webhookErrors: [false],
        });

        this.notificationsForm.valueChanges
            .pipe(takeUntil(this._destroy$))
            .subscribe(() => this._cdr.markForCheck());
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes['user']) return;

        const prevId = getBusinessUserClientId(changes['user'].previousValue);
        const nextId = getBusinessUserClientId(changes['user'].currentValue);

        if (prevId === nextId && this.prefsLoaded) return;

        this.prefsLoaded = false;
        this._maybeLoadSettings();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    /** True when at least one category is enabled. Drives the "Active / Paused" pill. */
    get hasAnyEnabled(): boolean {
        const v = this.notificationsForm.value as NotificationFormSnapshot;
        return (
            !v.active &&
            (v.paymentUpdates ||
                v.creditsExpiring ||
                v.lowBalance ||
                v.newEndpoints ||
                v.webhookErrors)
        );
    }

    /** Master "pause all" state, mirrors the legacy `active` flag. */
    get isPaused(): boolean {
        return this.notificationsForm.value.active === true;
    }

    /** Count of currently enabled categories (only meaningful when not paused). */
    get enabledCount(): number {
        if (this.isPaused) return 0;
        const v = this.notificationsForm.value as NotificationFormSnapshot;
        return this.categories.reduce((acc, c) => acc + (v[c.key] ? 1 : 0), 0);
    }

    /** Total categories the user can toggle. */
    get totalCategories(): number {
        return this.categories.length;
    }

    /** True when the form differs from the last persisted snapshot. */
    get isDirty(): boolean {
        const cur = this.notificationsForm.value as NotificationFormSnapshot;
        const snap = this._serverSnapshot;
        if (cur.active !== snap.active) return true;
        for (const c of this.categories) {
            if (!!cur[c.key] !== !!snap[c.key]) return true;
        }
        return false;
    }

    /**
     * Turning the master switch on clears all categories so the user can't end up in a
     * confusing "paused but with categories still selected" state.
     */
    onStopAllChange(enabled: boolean): void {
        if (enabled) {
            this.notificationsForm.patchValue(
                {
                    paymentUpdates: false,
                    lowBalance: false,
                    newEndpoints: false,
                    creditsExpiring: false,
                    webhookErrors: false,
                },
                { emitEvent: true }
            );
        }
        this._cdr.markForCheck();
    }

    /**
     * Turning any category on while paused implicitly resumes notifications.
     */
    onChildToggleChange(checked: boolean): void {
        if (checked && this.notificationsForm.get('active')?.value === true) {
            this.notificationsForm.patchValue({ active: false }, { emitEvent: true });
        }
        this._cdr.markForCheck();
    }

    /**
     * Enable every category and resume notifications. Used by the "Enable all" quick action
     * when the user is currently paused.
     */
    enableAll(): void {
        const patch: Partial<NotificationFormSnapshot> = { active: false };
        for (const c of this.categories) {
            patch[c.key] = true;
        }
        this.notificationsForm.patchValue(patch);
        this._cdr.markForCheck();
    }

    /** Revert any local edits back to the last persisted state. */
    discardChanges(): void {
        this.notificationsForm.reset({ ...this._serverSnapshot });
        this._cdr.markForCheck();
    }

    trackByCategoryKey(_idx: number, cat: NotificationCategory): string {
        return cat.key;
    }

    save(): void {
        const clientId = this.userClientId;
        if (!clientId || this.saving || !this.isDirty) {
            return;
        }

        this.saving = true;
        this._cdr.markForCheck();

        const raw = this.notificationsForm.getRawValue() as NotificationFormSnapshot;
        const payload: Partial<NotificationSettings> = {
            active: !!raw.active,
            paymentUpdates: !!raw.paymentUpdates,
            lowBalance: !!raw.lowBalance,
            newEndpoints: !!raw.newEndpoints,
            creditsExpiring: !!raw.creditsExpiring,
            webhookErrors: !!raw.webhookErrors,
        };

        const onSuccess = (): void => {
            this._serverSnapshot = { ...raw };
            this._snackBar.open(
                this._transloco.translate('settings.notifications.save_success'),
                null,
                { duration: 3000, panelClass: ['notification-settings__snack--success'] }
            );
            this.saving = false;
            this._cdr.markForCheck();
        };

        const onError = (): void => {
            this._snackBar.open(
                this._transloco.translate('settings.notifications.save_error'),
                null,
                { duration: 4000, panelClass: ['notification-settings__snack--error'] }
            );
            this.saving = false;
            this._cdr.markForCheck();
        };

        if (this.settingsId) {
            this._settingsService
                .updateNotificationSettings(this.settingsId, {
                    _id: this.settingsId,
                    ...payload,
                })
                .pipe(takeUntil(this._destroy$))
                .subscribe({ next: onSuccess, error: onError });
            return;
        }

        this._settingsService
            .createNotificationSettings(payload)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (res) => {
                    const id = res?.data?._id;
                    if (id) {
                        this.settingsId =
                            typeof id === 'string'
                                ? id
                                : (id as { toString: () => string }).toString();
                    }
                    onSuccess();
                },
                error: onError,
            });
    }

    private _maybeLoadSettings(): void {
        const clientId = this.userClientId;
        if (!clientId) {
            this.settingsId = null;
            this._serverSnapshot = this._defaultSnapshot();
            this.notificationsForm.reset({ ...this._serverSnapshot });
            this.prefsLoaded = true;
            this._cdr.markForCheck();
            return;
        }

        if (this.prefsLoaded) return;

        this.loadingPrefs = true;
        this._cdr.markForCheck();

        this._settingsService
            .getNotificationSettings(clientId)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (res) => {
                    const data = res?.data;
                    if (data) {
                        this.settingsId =
                            (data._id as string) ||
                            (data as { id?: string }).id ||
                            null;
                        const snap: NotificationFormSnapshot = {
                            active: !!data.active,
                            paymentUpdates: !!data.paymentUpdates,
                            lowBalance: !!data.lowBalance,
                            newEndpoints: !!data.newEndpoints,
                            creditsExpiring: !!data.creditsExpiring,
                            webhookErrors: !!data.webhookErrors,
                        };
                        this._serverSnapshot = snap;
                        this.notificationsForm.patchValue(snap);
                    } else {
                        this.settingsId = null;
                        this._serverSnapshot = this._defaultSnapshot();
                        this.notificationsForm.reset({ ...this._serverSnapshot });
                    }
                    this.loadingPrefs = false;
                    this.prefsLoaded = true;
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.loadingPrefs = false;
                    this.prefsLoaded = true;
                    this._cdr.markForCheck();
                },
            });
    }

    private _defaultSnapshot(): NotificationFormSnapshot {
        return {
            active: false,
            paymentUpdates: false,
            creditsExpiring: false,
            lowBalance: false,
            newEndpoints: false,
            webhookErrors: false,
        };
    }
}
