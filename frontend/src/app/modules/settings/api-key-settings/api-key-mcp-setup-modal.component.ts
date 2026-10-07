import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AccountEnvironmentService } from 'app/core/account/account-environment.service';
import { Subject, takeUntil } from 'rxjs';
import {
    addCalendarMonths,
    getTokenExpirationDate,
} from './api-key-expiration.util';
import {
    buildMcpConfigSnippet,
    McpConfigTab,
} from './mcp-config-builder.util';
import { VERIFIK_MCP_CONFIG } from './verifik-mcp.config';
import { SettingsService } from '../settings.service';

export type McpSetupMode = 'full' | 'connect';

export interface McpSetupTokenContext {
    alias: string;
    expiresAt?: string | Date | null;
    token?: string | null;
    tokenAvailable: boolean;
}

interface TokenExpirationOption {
    value: number;
    durationKey: string;
    descriptorKey?: string;
    badgeKey?: string;
    longLived?: boolean;
}

@Component({
    selector: 'app-api-key-mcp-setup-modal',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        TranslocoModule,
        ClipboardModule,
    ],
    templateUrl: './api-key-mcp-setup-modal.component.html',
    styleUrl: './api-key-mcp-setup-modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiKeyMcpSetupModalComponent implements OnChanges, OnDestroy {
    @Input() isOpen = false;
    @Input() mode: McpSetupMode = 'full';
    @Input() tokenContext: McpSetupTokenContext | null = null;

    @Output() close = new EventEmitter<void>();
    @Output() tokenCreated = new EventEmitter<{ accessToken: string; alias: string }>();

    currentStep = 1;
    newTokenAlias = '';
    selectedExpiration = 3;
    isCreating = false;
    plaintextToken: string | null = null;
    pastedToken = '';
    activeConfigTab: McpConfigTab = 'cursor';
    createdTokenExpiresAt: Date | null = null;

    readonly configTabs: McpConfigTab[] = ['cursor', 'claude', 'generic'];
    readonly expirationOptions: TokenExpirationOption[] = [
        { value: 1, durationKey: 'settings.api_key.duration_1_month', descriptorKey: 'settings.api_key.duration_short_term' },
        { value: 2, durationKey: 'settings.api_key.duration_2_months' },
        {
            value: 3,
            durationKey: 'settings.api_key.duration_3_months',
            descriptorKey: 'settings.api_key.duration_balanced',
            badgeKey: 'settings.api_key.recommended',
        },
        { value: 6, durationKey: 'settings.api_key.duration_6_months' },
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

    private _destroy$ = new Subject<void>();
    private _appendedToBody = false;
    private _originalParent: Node | null = null;
    private _originalNextSibling: Node | null = null;
    private _previousBodyOverflow = '';

    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private _elementRef: ElementRef<HTMLElement>,
        private _cdr: ChangeDetectorRef,
        private _settingsService: SettingsService,
        private _accountEnvironment: AccountEnvironmentService,
        private _clipboard: Clipboard,
        private _snackBar: MatSnackBar,
        private _translocoService: TranslocoService
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if ('isOpen' in changes || 'mode' in changes || 'tokenContext' in changes) {
            if (this.isOpen) {
                this._resetState();
            }
            this._syncBodyAttachment();
        }
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
        this._detachFromBody();
    }

    @HostListener('document:keydown.escape')
    onEscape(): void {
        if (this.isOpen) {
            this.onClose();
        }
    }

    get aliasReady(): boolean {
        const alias = this.newTokenAlias.trim();
        return alias.length > 0 && alias.length <= 120;
    }

    get selectedExpirationOption(): TokenExpirationOption {
        return (
            this.expirationOptions.find((option) => option.value === this.selectedExpiration) ||
            this.expirationOptions[0]
        );
    }

    get selectedExpirationDate(): Date {
        return addCalendarMonths(new Date(), this.selectedExpiration);
    }

    get isLongLivedSelection(): boolean {
        return Boolean(this.selectedExpirationOption.longLived);
    }

    get tokenForConfig(): string {
        if (this.plaintextToken) {
            return this.plaintextToken;
        }

        if (this.pastedToken.trim()) {
            return this.pastedToken.trim();
        }

        return VERIFIK_MCP_CONFIG.tokenPlaceholder;
    }

    get hasResolvableToken(): boolean {
        return Boolean(this.plaintextToken || this.pastedToken.trim());
    }

    get showTokenPastePrompt(): boolean {
        return this.mode === 'connect' && !this.plaintextToken;
    }

    get summaryAlias(): string {
        return this.newTokenAlias.trim() || this.tokenContext?.alias || '';
    }

    get summaryExpiresAt(): Date | null {
        if (this.createdTokenExpiresAt) {
            return this.createdTokenExpiresAt;
        }

        if (this.tokenContext?.expiresAt) {
            const date = new Date(this.tokenContext.expiresAt);
            return Number.isNaN(date.getTime()) ? null : date;
        }

        return this.mode === 'full' ? this.selectedExpirationDate : null;
    }

    get activeConfigSnippet(): string {
        return buildMcpConfigSnippet(this.activeConfigTab, {
            token: this.tokenForConfig,
            apiBase: this._apiBaseUrl(),
        });
    }

    get stepLabels(): string[] {
        return [
            this._translocoService.translate('settings.api_key.mcp.step_create'),
            this._translocoService.translate('settings.api_key.mcp.step_save'),
            this._translocoService.translate('settings.api_key.mcp.step_connect'),
        ];
    }

    onBackdropClick(event: MouseEvent): void {
        if (event.target === event.currentTarget) {
            this.onClose();
        }
    }

    onClose(): void {
        this.plaintextToken = null;
        this.pastedToken = '';
        this.close.emit();
    }

    selectExpiration(value: number): void {
        this.selectedExpiration = value;
        this._cdr.markForCheck();
    }

    onAliasInput(event: Event): void {
        this.newTokenAlias = (event.target as HTMLInputElement).value;
        this._cdr.markForCheck();
    }

    onPastedTokenInput(event: Event): void {
        this.pastedToken = (event.target as HTMLInputElement).value;
        this._cdr.markForCheck();
    }

    selectConfigTab(tab: McpConfigTab): void {
        this.activeConfigTab = tab;
        this._cdr.markForCheck();
    }

    goBack(): void {
        if (this.mode === 'connect' || this.currentStep <= 1) {
            return;
        }

        this.currentStep -= 1;
        this._cdr.markForCheck();
    }

    continueFromStep1(): void {
        if (!this.aliasReady || this.isCreating) {
            return;
        }

        const alias = this.newTokenAlias.trim();
        this.isCreating = true;
        this._cdr.markForCheck();

        this._settingsService
            .renewToken(this.selectedExpiration)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (response) => {
                    if (response?.accessToken) {
                        this.plaintextToken = response.accessToken;
                        this.createdTokenExpiresAt =
                            getTokenExpirationDate(response.accessToken) || this.selectedExpirationDate;
                        this.currentStep = 2;
                        this._registerToken(alias, response.accessToken);
                        this.tokenCreated.emit({ accessToken: response.accessToken, alias });
                    } else {
                        this._showError('settings.api_key.token_renewal_failed');
                    }
                    this.isCreating = false;
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.isCreating = false;
                    this._showError('settings.api_key.token_renewal_failed');
                    this._cdr.markForCheck();
                },
            });
    }

    continueFromStep2(): void {
        this.currentStep = 3;
        this._cdr.markForCheck();
    }

    copyToken(): void {
        if (!this.plaintextToken) {
            return;
        }

        this._copyText(this.plaintextToken, 'settings.api_key.token_copied');
    }

    copyActiveConfig(): void {
        this._copyText(this.activeConfigSnippet, 'settings.api_key.mcp.config_copied');
    }

    copyAllConfigs(): void {
        const bundle = this.configTabs
            .map((tab) => {
                const label = this._translocoService.translate(`settings.api_key.mcp.tab_${tab}`);
                return `--- ${label} ---\n${buildMcpConfigSnippet(tab, {
                    token: this.tokenForConfig,
                    apiBase: this._apiBaseUrl(),
                })}`;
            })
            .join('\n\n');

        this._copyText(bundle, 'settings.api_key.mcp.all_configs_copied');
    }

    formatDate(value: Date | string | null): string {
        if (!value) {
            return '';
        }

        const date = value instanceof Date ? value : new Date(value);

        if (Number.isNaN(date.getTime())) {
            return '';
        }

        try {
            return new Intl.DateTimeFormat(this._translocoService.getActiveLang() || 'en', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }).format(date);
        } catch {
            return date.toLocaleDateString();
        }
    }

    private _resetState(): void {
        this.currentStep = this.mode === 'connect' ? 3 : 1;
        this.newTokenAlias = this.tokenContext?.alias || '';
        this.selectedExpiration = 3;
        this.isCreating = false;
        this.plaintextToken = this.tokenContext?.token || null;
        this.pastedToken = '';
        this.activeConfigTab = 'cursor';
        this.createdTokenExpiresAt = this.plaintextToken
            ? getTokenExpirationDate(this.plaintextToken)
            : null;
        this._cdr.markForCheck();
    }

    private _registerToken(alias: string, accessToken: string): void {
        this._settingsService.accessToken = accessToken;
        this._settingsService
            .registerJsonWebToken(alias)
            .pipe(takeUntil(this._destroy$))
            .subscribe({ error: () => undefined });
    }

    private _apiBaseUrl(): string {
        const { envDefaults } = VERIFIK_MCP_CONFIG;

        return this._accountEnvironment.isSandboxModeActive()
            ? envDefaults.apiBaseStaging
            : envDefaults.apiBaseProduction;
    }

    private _copyText(text: string, messageKey: string): void {
        this._clipboard.copy(text);
        this._snackBar.open(this._translocoService.translate(messageKey), null, { duration: 2000 });
    }

    private _showError(messageKey: string): void {
        this._snackBar.open(this._translocoService.translate(messageKey), null, { duration: 3000 });
    }

    private _syncBodyAttachment(): void {
        if (this.isOpen) {
            this._attachToBody();
            return;
        }

        this._detachFromBody();
    }

    private _attachToBody(): void {
        if (this._appendedToBody) {
            return;
        }

        const element = this._elementRef.nativeElement;
        this._originalParent = element.parentNode;
        this._originalNextSibling = element.nextSibling;
        this._previousBodyOverflow = this._document.body.style.overflow;
        this._document.body.style.overflow = 'hidden';
        this._document.body.appendChild(element);
        this._appendedToBody = true;
    }

    private _detachFromBody(): void {
        if (!this._appendedToBody) {
            return;
        }

        const element = this._elementRef.nativeElement;

        if (this._originalParent) {
            if (this._originalNextSibling) {
                this._originalParent.insertBefore(element, this._originalNextSibling);
            } else {
                this._originalParent.appendChild(element);
            }
        }

        this._document.body.style.overflow = this._previousBodyOverflow;
        this._appendedToBody = false;
        this._originalParent = null;
        this._originalNextSibling = null;
        this._previousBodyOverflow = '';
    }
}
