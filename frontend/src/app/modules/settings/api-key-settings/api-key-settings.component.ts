import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
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
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';
import { ApiKeyHelpModalComponent, ApiKeyHelpModalContent } from './api-key-help-modal.component';
import {
    addCalendarMonths,
    getTokenExpirationDate,
    getTokenLifecycleStatus,
    getTokenRemainingDays,
    TokenLifecycleStatus,
} from './api-key-expiration.util';
import { SettingsService } from '../settings.service';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { getBusinessUserClientId } from '../utils/settings-business-user.util';

type ApiKeyHelpTopic = 'overview' | 'token' | 'extend' | 'revoke';

interface TokenExpiration {
    value: number;
    durationKey: string;
    descriptorKey?: string;
    badgeKey?: string;
    longLived?: boolean;
}

@Component({
    selector: 'app-api-key-settings',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        TranslocoModule,
        ClipboardModule,
        SettingsBusinessAccountEmptyStateComponent,
        ApiKeyHelpModalComponent,
    ],
    templateUrl: './api-key-settings.component.html',
    styleUrl: './api-key-settings.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiKeySettingsComponent implements OnInit, OnChanges, OnDestroy {
    private _destroy$ = new Subject<void>();

    @Input() user: unknown;
    @Output() userChange = new EventEmitter<unknown>();

    accessToken: string;
    hidePassword = true;
    isRenewing = false;
    isRevoking = false;
    showRenewPanel = false;
    showRevokeConfirm = false;
    selectedExpiration = 3;
    newlyGeneratedToken: string = null;
    showNewTokenAlert = false;
    activeHelp: ApiKeyHelpTopic | null = null;

    expirationOptions: TokenExpiration[] = [
        {
            value: 1,
            durationKey: 'settings.api_key.duration_1_month',
            descriptorKey: 'settings.api_key.duration_short_term',
        },
        {
            value: 2,
            durationKey: 'settings.api_key.duration_2_months',
        },
        {
            value: 3,
            durationKey: 'settings.api_key.duration_3_months',
            descriptorKey: 'settings.api_key.duration_balanced',
            badgeKey: 'settings.api_key.recommended',
        },
        {
            value: 6,
            durationKey: 'settings.api_key.duration_6_months',
        },
        {
            value: 12,
            durationKey: 'settings.api_key.duration_1_year',
            descriptorKey: 'settings.api_key.duration_long_running',
            longLived: true,
        },
        {
            value: 24,
            durationKey: 'settings.api_key.duration_2_years',
            descriptorKey: 'settings.api_key.duration_long_lived',
            longLived: true,
        },
        {
            value: 36,
            durationKey: 'settings.api_key.duration_3_years',
            descriptorKey: 'settings.api_key.duration_long_lived',
            longLived: true,
        },
    ];

    constructor(
        private _cdr: ChangeDetectorRef,
        private _snackBar: MatSnackBar,
        private _translocoService: TranslocoService,
        private _settingsService: SettingsService,
        private _clipboard: Clipboard
    ) {}

    ngOnInit(): void {
        this._loadAccessToken();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['user']) {
            this._loadAccessToken();
        }
    }

    get userClientId(): string | undefined {
        return getBusinessUserClientId(this.user);
    }

    get currentTokenExpiration(): Date | null {
        return getTokenExpirationDate(this.accessToken);
    }

    get currentTokenStatus(): TokenLifecycleStatus {
        return getTokenLifecycleStatus(this.currentTokenExpiration);
    }

    get currentTokenRemainingDays(): number | null {
        return getTokenRemainingDays(this.currentTokenExpiration);
    }

    get selectedExpirationDate(): Date {
        return addCalendarMonths(new Date(), this.selectedExpiration);
    }

    get selectedExpirationOption(): TokenExpiration {
        return (
            this.expirationOptions.find((option) => option.value === this.selectedExpiration) ||
            this.expirationOptions[0]
        );
    }

    get isLongLivedSelection(): boolean {
        return Boolean(this.selectedExpirationOption.longLived);
    }

    get activeHelpContent(): ApiKeyHelpModalContent | null {
        if (!this.activeHelp) {
            return null;
        }

        const topic = this.activeHelp;
        const baseKey = `settings.api_key.help.${topic}`;
        const points = this._getHelpPoints(topic);

        const note = this._translateOptional(`${baseKey}.note`);

        return {
            icon: this._getHelpIcon(topic),
            title: this._translocoService.translate(`${baseKey}.title`),
            intro: this._translocoService.translate(`${baseKey}.intro`),
            points,
            codeExample:
                topic === 'token' ? this._translocoService.translate(`${baseKey}.code`) : undefined,
            note: note || undefined,
            docsUrl:
                topic === 'overview' || topic === 'token'
                    ? 'https://docs.verifik.co/authentication/renew-your-token-jwt'
                    : undefined,
            docsLabel: this._translocoService.translate('settings.api_key.view_docs'),
        };
    }

    onBusinessAccountLinked(account: unknown): void {
        this.userChange.emit(account);
        this._loadAccessToken();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    openHelp(topic: ApiKeyHelpTopic): void {
        this.activeHelp = topic;
        this._cdr.markForCheck();
    }

    closeHelp(): void {
        this.activeHelp = null;
        this._cdr.markForCheck();
    }

    copyToken(): void {
        const tokenToCopy = this.newlyGeneratedToken || this.accessToken;
        if (!tokenToCopy) return;

        this._clipboard.copy(tokenToCopy);
        const message = this._translocoService.translate('settings.api_key.token_copied');
        this._snackBar.open(message, null, { duration: 2000 });
    }

    toggleRenewPanel(): void {
        this.showRenewPanel = !this.showRenewPanel;
        if (this.showRenewPanel) {
            this.showRevokeConfirm = false;
        }
        this._cdr.markForCheck();
    }

    selectExpiration(value: number): void {
        this.selectedExpiration = value;
        this._cdr.markForCheck();
    }

    onExpirationSelect(event: Event): void {
        this.selectExpiration(Number((event.target as HTMLSelectElement).value));
    }

    onExpirationKeydown(event: KeyboardEvent): void {
        const directionByKey: Record<string, number> = {
            ArrowDown: 1,
            ArrowRight: 1,
            ArrowUp: -1,
            ArrowLeft: -1,
        };
        const direction = directionByKey[event.key];
        const isBoundaryKey = event.key === 'Home' || event.key === 'End';

        if (!direction && !isBoundaryKey) return;

        event.preventDefault();

        const currentIndex = this.expirationOptions.findIndex(
            (option) => option.value === this.selectedExpiration
        );
        const lastIndex = this.expirationOptions.length - 1;
        const nextIndex =
            event.key === 'Home'
                ? 0
                : event.key === 'End'
                  ? lastIndex
                  : (currentIndex + direction + this.expirationOptions.length) %
                    this.expirationOptions.length;

        this.selectExpiration(this.expirationOptions[nextIndex].value);

        const radioOptions = (event.currentTarget as HTMLElement).querySelectorAll<HTMLElement>(
            '[role="radio"]'
        );
        radioOptions[nextIndex]?.focus();
    }

    formatDate(value: Date | null): string {
        if (!value) return '';

        try {
            return new Intl.DateTimeFormat(this._translocoService.getActiveLang() || 'en', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }).format(value);
        } catch {
            return value.toLocaleDateString();
        }
    }

    toggleRevokeConfirm(): void {
        this.showRevokeConfirm = !this.showRevokeConfirm;
        if (this.showRevokeConfirm) {
            this.showRenewPanel = false;
        }
        this._cdr.markForCheck();
    }

    renewToken(): void {
        this.isRenewing = true;
        this._cdr.markForCheck();

        this._settingsService
            .renewToken(this.selectedExpiration)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (response) => {
                    if (response?.accessToken) {
                        this.accessToken = response.accessToken;
                        this.newlyGeneratedToken = response.accessToken;
                        this.showNewTokenAlert = true;
                        this.showRenewPanel = false;

                        const message = this._translocoService.translate(
                            'settings.api_key.token_renewed_success'
                        );
                        this._snackBar.open(message, null, { duration: 3000 });
                    }
                    this.isRenewing = false;
                    this._cdr.markForCheck();
                },
                error: () => {
                    const message = this._translocoService.translate(
                        'settings.api_key.token_renewal_failed'
                    );
                    this._snackBar.open(message, null, { duration: 3000 });
                    this.isRenewing = false;
                    this._cdr.markForCheck();
                },
            });
    }

    revokeAndGenerateNew(): void {
        this.isRevoking = true;
        this._cdr.markForCheck();

        this._settingsService
            .revokeAndGenerateNew(this.selectedExpiration)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (response) => {
                    const newToken = response?.token || (response as any)?.accessToken;
                    if (newToken) {
                        this.accessToken = newToken;
                        this.newlyGeneratedToken = newToken;
                        this.showNewTokenAlert = true;
                        this.showRevokeConfirm = false;

                        const message = this._translocoService.translate(
                            'settings.api_key.tokens_revoked_success'
                        );
                        this._snackBar.open(message, null, { duration: 3000 });
                    }
                    this.isRevoking = false;
                    this._cdr.markForCheck();
                },
                error: () => {
                    const message = this._translocoService.translate(
                        'settings.api_key.token_revocation_failed'
                    );
                    this._snackBar.open(message, null, { duration: 3000 });
                    this.isRevoking = false;
                    this._cdr.markForCheck();
                },
            });
    }

    dismissNewTokenAlert(): void {
        this.showNewTokenAlert = false;
        this.newlyGeneratedToken = null;
        this._cdr.markForCheck();
    }

    getMaskedToken(): string {
        if (!this.accessToken) return '';
        const visibleChars = 12;
        if (this.accessToken.length <= visibleChars * 2) {
            return '•'.repeat(this.accessToken.length);
        }
        const start = this.accessToken.substring(0, visibleChars);
        const end = this.accessToken.substring(this.accessToken.length - visibleChars);
        const middleLength = this.accessToken.length - visibleChars * 2;
        return `${start}${'•'.repeat(Math.min(middleLength, 20))}${end}`;
    }

    private _loadAccessToken(): void {
        this.accessToken = this.userClientId ? this._settingsService.accessToken : '';
        this._cdr.markForCheck();
    }

    private _getHelpIcon(topic: ApiKeyHelpTopic): string {
        const icons: Record<ApiKeyHelpTopic, string> = {
            overview: 'help_outline',
            token: 'vpn_key',
            extend: 'autorenew',
            revoke: 'sync_problem',
        };

        return icons[topic];
    }

    private _getHelpPoints(topic: ApiKeyHelpTopic): string[] {
        const baseKey = `settings.api_key.help.${topic}`;
        const points: string[] = [];

        for (let index = 1; index <= 6; index += 1) {
            const key = `${baseKey}.point${index}`;
            const value = this._translateOptional(key);

            if (!value) {
                break;
            }

            points.push(value);
        }

        return points;
    }

    private _translateOptional(key: string): string | null {
        const value = this._translocoService.translate(key);

        if (!value || value === key) {
            return null;
        }

        return value;
    }
}
