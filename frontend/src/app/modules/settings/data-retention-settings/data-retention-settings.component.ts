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
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { ClientSettings, SettingsService } from '../settings.service';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { getBusinessUserClientId } from '../utils/settings-business-user.util';
import {
    ClientDataRetentionConfig,
    DEFAULT_CONFIG,
    RetentionRuleConfig,
    computeAllSameMode,
    computeIsCustomized,
    syncGlobalToGranular,
} from './data-retention-settings.utils';

export type { RetentionRuleConfig, ClientDataRetentionConfig };
export { DEFAULT_CONFIG };

@Component({
    selector: 'app-data-retention-settings',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTooltipModule,
        TranslocoModule,
        SettingsBusinessAccountEmptyStateComponent,
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
    clientSettings: (ClientSettings & { data?: ClientDataRetentionConfig }) | null = null;

    config: ClientDataRetentionConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));

    constructor(
        private _settingsService: SettingsService,
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

    get userClientId(): string | undefined {
        return getBusinessUserClientId(this.user);
    }

    get isCustomized(): boolean {
        return computeIsCustomized(this.config);
    }

    setGlobalMode(mode: 'store' | 'ephemeral' | 'none'): void {
        this.config = syncGlobalToGranular(this.config, mode);
        this._cdr.markForCheck();
    }

    onGranularRuleChange(): void {
        const sameMode = computeAllSameMode(this.config);
        if (sameMode) {
            this.config.mode = sameMode;
        }
        this._cdr.markForCheck();
    }

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
                    if (res?.data) {
                        this.clientSettings = res.data as (ClientSettings & { data?: ClientDataRetentionConfig });
                        if (this.clientSettings.data) {
                            const fallbackMode = this.clientSettings.data.mode || 'store';
                            this.config = {
                                mode: fallbackMode,
                                webhookHoldHours: this.clientSettings.data.webhookHoldHours || 24,
                                allowManualDelete: this.clientSettings.data.allowManualDelete !== false,
                                types: {
                                    ...DEFAULT_CONFIG.types,
                                    ...(this.clientSettings.data.types || {}),
                                },
                            };
                            const types = this.config.types;
                            if (!types.documentImages?.mode) types.documentImages = { ...types.documentImages, mode: fallbackMode };
                            if (!types.faceImages?.mode) types.faceImages = { ...types.faceImages, mode: fallbackMode };
                            if (!types.ocrExtraction?.mode) types.ocrExtraction = { ...types.ocrExtraction, mode: fallbackMode };
                            if (!types.documentLiveness?.mode) types.documentLiveness = { ...types.documentLiveness, mode: fallbackMode };
                        }
                    }
                    this._cdr.markForCheck();
                },
                error: (err) => {
                    console.error('[DataRetentionSettings] Load failed:', err);
                },
            });
    }

    saveSettings(): void {
        const clientId = this.userClientId;
        if (!clientId || this.saving) return;

        this.saving = true;
        this._cdr.markForCheck();

        const payload: Partial<ClientSettings & { data: ClientDataRetentionConfig }> = {
            ...(this.clientSettings || {}),
            client: clientId,
            data: {
                ...this.config,
                webhookHoldHours: Math.max(24, Math.min(72, Number(this.config.webhookHoldHours) || 24)),
            },
        };

        this._settingsService
            .saveBillingConfig(payload)
            .pipe(
                takeUntil(this._destroy$),
                finalize(() => {
                    this.saving = false;
                    this._cdr.markForCheck();
                })
            )
            .subscribe({
                next: (res) => {
                    if (res?.data) {
                        this.clientSettings = res.data as (ClientSettings & { data?: ClientDataRetentionConfig });
                    }
                    this._snackBar.open(
                        this._transloco.translate('settings.dataRetention.savedSuccess'),
                        undefined,
                        { duration: 3000 }
                    );
                },
                error: (err) => {
                    console.error('[DataRetentionSettings] Save failed:', err);
                    this._snackBar.open(
                        this._transloco.translate('settings.dataRetention.saveError'),
                        undefined,
                        { duration: 4000 }
                    );
                },
            });
    }
}
