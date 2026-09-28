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
import { SavedJsonWebToken, SettingsService } from '../settings.service';
import { SettingsBusinessAccountEmptyStateComponent } from '../shared/settings-business-account-empty-state.component';
import { getBusinessUserClientId, getVerifikAccount } from '../utils/settings-business-user.util';

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
    savedTokens: SavedJsonWebToken[] = [];
    savedTokenPage = 1;
    savedTokenPages = 1;
    loadingMoreTokens = false;
    newTokenAlias = '';
    editingAliasId: string = null;
    aliasDraft = '';
    savingAliasId: string = null;
    showNewListNote = false;
    private _registerInFlight = false;
    private _pendingAlias: string = null;
    private _listNoteCounted = false;
    private readonly _browserIdKey = 'verifik_browser_id';
    private readonly _listNoteKeyPrefix = 'verifik_new_token_list_views:';
    private readonly _listNoteCutoff = new Date('2026-09-28T05:00:00.000Z');
    private readonly _listNoteLimit = 10;

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
        this._loadSavedTokens(true);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['user']) {
            this._loadAccessToken();
            this._loadSavedTokens(true);
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

    formatDate(value: Date | string | null): string {
        if (!value) return '';

        const date = value instanceof Date ? value : new Date(value);

        if (Number.isNaN(date.getTime())) return '';

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

    toggleRevokeConfirm(): void {
        this.showRevokeConfirm = !this.showRevokeConfirm;
        if (this.showRevokeConfirm) {
            this.showRenewPanel = false;
        }
        this._cdr.markForCheck();
    }

    get aliasReady(): boolean {
        const alias = this.newTokenAlias.trim();

        return alias.length > 0 && alias.length <= 120;
    }

    onAliasInput(event: Event): void {
        this.newTokenAlias = (event.target as HTMLInputElement).value;
        this._cdr.markForCheck();
    }

    onAliasDraftInput(event: Event): void {
        this.aliasDraft = (event.target as HTMLInputElement).value;
        this._cdr.markForCheck();
    }

    startAliasEdit(row: SavedJsonWebToken): void {
        this.editingAliasId = row._id;
        this.aliasDraft = row.alias;
        this._cdr.markForCheck();
    }

    cancelAliasEdit(): void {
        this.editingAliasId = null;
        this.aliasDraft = '';
        this._cdr.markForCheck();
    }

    saveAlias(row: SavedJsonWebToken): void {
        const alias = this.aliasDraft.trim();

        if (!alias || alias.length > 120 || this.savingAliasId) return;

        this.savingAliasId = row._id;
        this._settingsService
            .updateJsonWebTokenAlias(row._id, alias)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (updated) => {
                    this.savedTokens = this.savedTokens.map((item) =>
                        item._id === row._id ? { ...item, ...updated, alias } : item
                    );
                    this.savingAliasId = null;
                    this.cancelAliasEdit();
                },
                error: () => {
                    this.savingAliasId = null;
                    this._cdr.markForCheck();
                },
            });
    }

    get hasMoreSavedTokens(): boolean {
        return this.savedTokenPage < this.savedTokenPages;
    }

    loadMoreSavedTokens(): void {
        if (!this.hasMoreSavedTokens || this.loadingMoreTokens) return;

        this._loadSavedTokens(false, this.savedTokenPage + 1);
    }

    savedTokenLabel(row: SavedJsonWebToken): TokenLifecycleStatus | 'revoked' {
        if (row.revokedAt) return 'revoked';

        return this.savedTokenStatus(row);
    }

    renewToken(): void {
        const alias = this.newTokenAlias.trim();

        if (!alias || alias.length > 120) return;

        this._pendingAlias = alias;
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
                        this.newTokenAlias = '';
                        this._registerCurrentToken();

                        const message = this._translocoService.translate(
                            'settings.api_key.token_renewed_success'
                        );
                        this._snackBar.open(message, null, { duration: 3000 });
                    }
                    this.isRenewing = false;
                    if (!response?.accessToken) this._pendingAlias = null;
                    this._cdr.markForCheck();
                },
                error: () => {
                    this._pendingAlias = null;
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
        const alias = this.newTokenAlias.trim();

        if (!alias || alias.length > 120) return;

        this._pendingAlias = alias;
        this.isRevoking = true;
        this._cdr.markForCheck();

        this._settingsService
            .revokeAndGenerateNew(this.selectedExpiration, alias)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (response) => {
                    const newToken = response?.token || (response as any)?.accessToken;
                    if (newToken) {
                        this.accessToken = newToken;
                        this.newlyGeneratedToken = newToken;
                        this.showNewTokenAlert = true;
                        this.showRevokeConfirm = false;
                        this.newTokenAlias = '';
                        this._registerCurrentToken();

                        const message = this._translocoService.translate(
                            'settings.api_key.tokens_revoked_success'
                        );
                        this._snackBar.open(message, null, { duration: 3000 });
                    }
                    this.isRevoking = false;
                    if (!newToken) this._pendingAlias = null;
                    this._cdr.markForCheck();
                },
                error: () => {
                    this._pendingAlias = null;
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

    tokenMatchesBrowser(row: SavedJsonWebToken): boolean {
        if (!this.accessToken || this.accessToken.length < 12) return false;

        return this.accessToken.slice(-12) === row.tokenSuffix;
    }

    maskSavedToken(row: SavedJsonWebToken): string {
        return `${row.tokenPrefix}${'•'.repeat(20)}${row.tokenSuffix}`;
    }

    savedTokenStatus(row: SavedJsonWebToken): TokenLifecycleStatus {
        return getTokenLifecycleStatus(row.expiresAt ? new Date(row.expiresAt) : null, new Date(), 7);
    }

    savedTokenRemainingDays(row: SavedJsonWebToken): number | null {
        return getTokenRemainingDays(row.expiresAt ? new Date(row.expiresAt) : null);
    }

    copySavedToken(row: SavedJsonWebToken): void {
        if (row.revokedAt || !this.tokenMatchesBrowser(row)) return;

        this._clipboard.copy(this.accessToken);
        const message = this._translocoService.translate('settings.api_key.token_copied');
        this._snackBar.open(message, null, { duration: 2000 });
    }

    private _browserAlias(): string {
        return `ai.verifik.co-${this._browserId()}`;
    }

    private _browserId(): string {
        const existing = localStorage.getItem(this._browserIdKey);

        if (existing) return existing;

        const created =
            typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
                ? crypto.randomUUID()
                : `${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`;

        localStorage.setItem(this._browserIdKey, created);

        return created;
    }

    private _loadSavedTokens(registerIfMissing: boolean, page = 1): void {
        if (!this.userClientId || !this.accessToken) {
            this.savedTokens = [];
            this.savedTokenPage = 1;
            this.savedTokenPages = 1;
            this._cdr.markForCheck();
            return;
        }

        const append = page > 1;
        if (append) this.loadingMoreTokens = true;

        this._settingsService
            .listJsonWebTokens(page)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (result) => {
                    const rows = result?.data || [];
                    this.savedTokens = append ? this._appendSavedTokens(rows) : rows;
                    this.savedTokenPage = result?.page || page;
                    this.savedTokenPages = result?.pages || 1;
                    this.loadingMoreTokens = false;

                    const hasMatch = this.savedTokens.some((row) => this.tokenMatchesBrowser(row));

                    if (registerIfMissing && !append && !hasMatch) {
                        this._registerCurrentToken();
                        return;
                    }

                    if (!append) this._countNewListNote();

                    this._cdr.markForCheck();
                },
                error: () => {
                    this.loadingMoreTokens = false;
                    this._cdr.markForCheck();
                },
            });
    }

    /**
     * Counts one open of this screen for an account created before 28 Sep 2026.
     * After 10 opens the note stays hidden in this browser.
     */
    private _countNewListNote(): void {
        if (this._listNoteCounted) return;

        this.showNewListNote = false;

        if (!this.savedTokens.length) return;

        const clientId = this.userClientId;
        const createdAt = this._clientCreatedAt();

        if (!clientId || !createdAt || createdAt.getTime() >= this._listNoteCutoff.getTime()) {
            this._listNoteCounted = true;
            return;
        }

        const key = `${this._listNoteKeyPrefix}${clientId}`;
        const seen = Number(localStorage.getItem(key) || '0');
        const views = Number.isFinite(seen) && seen > 0 ? seen : 0;

        this._listNoteCounted = true;

        if (views >= this._listNoteLimit) return;

        localStorage.setItem(key, String(views + 1));
        this.showNewListNote = true;
    }

    /**
     * Account creation time from the session, not the staff record.
     */
    private _clientCreatedAt(): Date | null {
        const account = getVerifikAccount();
        const record = this.user as Record<string, unknown> | null;
        const raw = account?.['clientCreatedAt'] ?? record?.['clientCreatedAt'];

        if (!raw) return null;

        const createdAt = new Date(raw as string);

        return Number.isNaN(createdAt.getTime()) ? null : createdAt;
    }

    private _appendSavedTokens(rows: SavedJsonWebToken[]): SavedJsonWebToken[] {
        const seen = new Set(this.savedTokens.map((row) => row._id));
        const next = rows.filter((row) => row?._id && !seen.has(row._id));

        return [...this.savedTokens, ...next];
    }

    private _registerCurrentToken(): void {
        if (this._registerInFlight || !this.accessToken || !this.userClientId) return;

        const alias = this._pendingAlias || this._browserAlias();

        this._pendingAlias = null;
        this._registerInFlight = true;
        this._settingsService
            .registerJsonWebToken(alias)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: () => {
                    this._registerInFlight = false;
                    this._loadSavedTokens(false);
                },
                error: () => {
                    this._registerInFlight = false;
                    this._cdr.markForCheck();
                },
            });
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
