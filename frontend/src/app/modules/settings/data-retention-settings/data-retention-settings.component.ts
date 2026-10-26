import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { RetentionPolicyFormComponent } from 'app/core/data-retention/retention-policy-form.component';
import type { RetentionPolicy } from 'app/core/data-retention/retention.model';
import { DataRetentionService } from 'app/core/data-retention/data-retention.service';
import { defaultRetentionPolicy, policyFromStored, type StoredRetention } from 'app/core/data-retention/retention.util';
import { SettingsService } from '../settings.service';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { getBusinessUserClientId } from '../utils/settings-business-user.util';

/**
 * Account-level data retention editor.
 * Loads `ClientSettings.data` and saves only `{ client, data }`.
 */
@Component({
    selector: 'app-data-retention-settings',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        TranslocoModule,
        SettingsBusinessAccountEmptyStateComponent,
        RetentionPolicyFormComponent,
    ],
    templateUrl: './data-retention-settings.component.html',
    styleUrl: './data-retention-settings.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataRetentionSettingsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() user: unknown = null;
    @Output() userChange = new EventEmitter<unknown>();

    private _destroy$ = new Subject<void>();

    loading = true;
    saving = false;
    loaded = false;
    policy: RetentionPolicy = defaultRetentionPolicy();

    constructor(
        private _settingsService: SettingsService,
        private _retentionService: DataRetentionService,
        private _snackBar: MatSnackBar,
        private _transloco: TranslocoService,
        private _cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.loadSettings();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['user'] && !changes['user'].firstChange) {
            this.loadSettings();
        }
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    /** Business client id for the signed-in user, when the account is linked. */
    get userClientId(): string | undefined {
        return getBusinessUserClientId(this.user);
    }

    /** Loads the current account policy. A missing `data` block keeps the store default. */
    loadSettings(): void {
        const clientId = this.userClientId;
        if (!clientId) {
            this.loading = false;
            this.loaded = true;
            this._cdr.markForCheck();
            return;
        }

        this.loading = true;
        this._cdr.markForCheck();

        this._settingsService
            .getBillingConfig(clientId)
            .pipe(
                takeUntil(this._destroy$),
                finalize(() => {
                    this.loading = false;
                    this.loaded = true;
                    this._cdr.markForCheck();
                })
            )
            .subscribe({
                next: (res) => {
                    const doc = res?.data as { data?: StoredRetention } | undefined;
                    this.applyLoadedPolicy(doc?.data);
                },
                error: () => this.notify('settings.dataRetention.loadError', 4000),
            });
    }

    /**
     * Saves the retention policy. The request body is only `{ client, data }`.
     * Billing fields from the loaded ClientSettings document are not sent.
     */
    saveSettings(): void {
        const clientId = this.userClientId;
        if (!clientId || this.saving) return;

        this.saving = true;
        this._cdr.markForCheck();

        this._retentionService
            .saveClientRetention(clientId, this.policy)
            .pipe(
                takeUntil(this._destroy$),
                finalize(() => {
                    this.saving = false;
                    this._cdr.markForCheck();
                })
            )
            .subscribe({
                next: (res) => {
                    const saved = (res?.data as { data?: StoredRetention } | undefined)?.data;
                    if (saved) this.applyLoadedPolicy(saved);
                    this.notify('settings.dataRetention.savedSuccess', 3000);
                },
                error: () => this.notify('settings.dataRetention.saveError', 4000),
            });
    }

    /** Replaces the form policy from an API document. */
    onPolicyChange(policy: RetentionPolicy): void {
        this.policy = policy;
        this._cdr.markForCheck();
    }

    private applyLoadedPolicy(stored: StoredRetention | undefined): void {
        this.policy = policyFromStored(stored) ?? defaultRetentionPolicy();
        this._cdr.markForCheck();
    }

    private notify(key: string, duration: number): void {
        this._snackBar.open(this._transloco.translate(key), undefined, { duration });
    }
}
