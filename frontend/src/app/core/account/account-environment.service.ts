import { computed, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoService } from '@jsverse/transloco';
import { environment } from 'environments/environment';
import { of } from 'rxjs';
import { catchError, finalize, take } from 'rxjs/operators';
import {
    ClientKybStatusData,
    ClientKybTier,
    PaymentService,
} from '../../modules/add-credits/services/payment.service';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { SessionService } from '../services/session.service';
import { UserService } from '../user/user.service';
import type { User } from '../user/user.types';

@Injectable({ providedIn: 'root' })
export class AccountEnvironmentService {
    private _sessionService = inject(SessionService);
    private _userService = inject(UserService);
    private _httpWrapper = inject(HttpWrapperService);
    private _paymentService = inject(PaymentService);
    private _matDialog = inject(MatDialog);
    private _transloco = inject(TranslocoService);
    private _snackBar = inject(MatSnackBar);

    readonly isAuthenticated = signal(false);
    readonly accountSnapshot = signal<User | null>(null);
    readonly sandboxToggleLoading = signal(false);
    readonly verifyCompanyLoading = signal(false);
    readonly kybStatus = signal<ClientKybStatusData | null>(null);
    readonly kybStatusLoading = signal(false);
    readonly tier1StripDismissed = signal(false);

    private _kybLoadedForClientId: string | null = null;

    /**
     * True after `/v2/auth/session` (or equivalent) has hydrated the account.
     * Prevents stale `verifik_account` localStorage from flashing the KYC strip/modal.
     */
    readonly sessionHydrated = signal(false);

    readonly kybOnboardingEnabled = computed(() => this.kybStatus()?.kybOnboardingEnabled === true);

    readonly kybRegistration = computed(() => this.kybStatus()?.businessRegistration ?? null);

    readonly kybTier = computed<ClientKybTier>(() => {
        const status = this.kybStatus();
        if (status?.effectiveKybTier) {
            return status.effectiveKybTier;
        }
        return this.accountSnapshot()?.canRecharge === true ? 'legacy_kyc' : 'none';
    });

    readonly isLegacyKycClient = computed(() => this.kybTier() === 'legacy_kyc');

    readonly isTier1Standard = computed(() => this.kybTier() === 'tier1_standard');

    readonly isTier2Full = computed(() => this.kybTier() === 'tier2_full');

    readonly kybChangesRequested = computed(
        () => this.kybRegistration()?.status === 'CHANGES_REQUESTED'
    );

    readonly showVerifyStrip = computed(
        () =>
            this.sessionHydrated() &&
            this.isAuthenticated() &&
            this.accountSnapshot()?.canRecharge === false &&
            this.accountSnapshot()?.approvalRequestStatus !== 'approved'
    );

    readonly verifyStripPendingReview = computed(() => {
        if (!this.isAuthenticated() || this.accountSnapshot()?.canRecharge !== false) {
            return false;
        }
        if (this.kybChangesRequested()) {
            return false;
        }
        if (this.accountSnapshot()?.approvalRequestStatus === 'requested') {
            return true;
        }
        const status = this.kybRegistration()?.status;
        return (
            this.kybOnboardingEnabled() &&
            (status === 'NEEDS_MANUAL_VERIFICATION' || status === 'PENDING_REPRESENTATIVES')
        );
    });

    readonly showTier1UpgradeStrip = computed(
        () =>
            this.sessionHydrated() &&
            this.isAuthenticated() &&
            !this.tier1StripDismissed() &&
            this.kybOnboardingEnabled() &&
            this.kybTier() === 'tier1_standard' &&
            this.kybRegistration()?.status !== 'COMPLETED'
    );

    readonly showSandboxStrip = computed(
        () => this.isAuthenticated() && this._isSandboxModeActive()
    );

    /** True when API calls should use sandbox fixtures (settings or JWT mode). */
    readonly isSandboxModeActive = computed(() => this._isSandboxModeActive());

    /**
     * true = Production is ACTIVE (sandboxMode === false) and the account can recharge.
     * Unverified accounts must not appear as Production while KYC is still required.
     */
    readonly productionModeOn = computed(
        () =>
            this.isAuthenticated() &&
            this.accountSnapshot()?.canRecharge === true &&
            !this._isSandboxModeActive()
    );

    /** Toggle is enabled only when canRecharge is explicitly true and settings._id exists. */
    readonly productionToggleDisabled = computed(
        () =>
            this.sandboxToggleLoading() ||
            this.accountSnapshot()?.canRecharge !== true ||
            !this.accountSnapshot()?.settings?._id
    );

    constructor() {
        this._refreshAuthState();
        this._hydrateFromStorage();

        this._userService.user$.pipe(takeUntilDestroyed()).subscribe((user) => {
            if (user) {
                this.accountSnapshot.set(user);
                // Session payloads always include a boolean canRecharge; localStorage hydrate
                // goes through `_hydrateFromStorage` and must not unlock the KYC strip early.
                if (typeof user.canRecharge === 'boolean') {
                    this.sessionHydrated.set(true);
                    const clientId = String(user._id || '');
                    if (clientId && this._kybLoadedForClientId !== clientId) {
                        this._kybLoadedForClientId = clientId;
                        this.loadKybStatus();
                    }
                }
            } else {
                this.accountSnapshot.set(null);
                this.sessionHydrated.set(false);
                this.kybStatus.set(null);
                this._kybLoadedForClientId = null;
            }
            this._refreshAuthState();
        });

        this._sessionService.sessionExpired$.pipe(takeUntilDestroyed()).subscribe((expired) => {
            if (!expired) {
                return;
            }
            this.accountSnapshot.set(null);
            this.sessionHydrated.set(false);
            this.kybStatus.set(null);
            this._kybLoadedForClientId = null;
            this._refreshAuthState();
        });
    }

    /** Refresh session user (settings.sandboxMode, canRecharge, etc.) from API. */
    syncUser(): void {
        if (!this._sessionService.hasValidAuthentication()) {
            return;
        }
        this._userService
            .get()
            .pipe(
                take(1),
                catchError(() => of(null))
            )
            .subscribe((user) => {
                if (user) {
                    this.accountSnapshot.set(user);
                    this._userService.user = user;
                    this.sessionHydrated.set(true);
                }
                this._refreshAuthState();
            });
        this.loadKybStatus();
    }

    /** Called after AppComponent session restore so sandbox UI hydrates immediately. */
    onSessionSynced(user: User | null): void {
        if (user) {
            this.accountSnapshot.set(user);
            this.sessionHydrated.set(true);
            const clientId = String(user._id || '');
            if (!clientId || this._kybLoadedForClientId !== clientId) {
                if (clientId) this._kybLoadedForClientId = clientId;
                this.loadKybStatus();
            }
        }
        this._refreshAuthState();
    }

    /** Fetches current KYB tier & business registration dossier without failing unauthenticated/legacy callers. */
    loadKybStatus(): void {
        if (!this._sessionService.hasValidAuthentication() || this.kybStatusLoading()) {
            return;
        }

        this.kybStatusLoading.set(true);
        this._paymentService
            .getMyKyb()
            .pipe(
                take(1),
                finalize(() => this.kybStatusLoading.set(false)),
                catchError(() => of(null))
            )
            .subscribe((response) => {
                if (response?.data) {
                    this.kybStatus.set(response.data);
                }
            });
    }

    dismissTier1Strip(): void {
        this.tier1StripDismissed.set(true);
    }

    /**
     * Called when the Production slide-toggle changes.
     * productionOn = true  → sandboxMode false  (live checks active).
     * productionOn = false → sandboxMode true   (sandbox).
     */
    toggleProductionMode(productionOn: boolean): void {
        const settingsId = this.accountSnapshot()?.settings?._id;
        if (!settingsId || this.sandboxToggleLoading()) {
            return;
        }

        const sandboxMode = !productionOn;
        this.sandboxToggleLoading.set(true);
        const url = `${environment.apiUrl}/v2/client-settings/${settingsId}`;
        this._httpWrapper
            .sendRequest('put', url, { sandboxMode })
            .pipe(
                take(1),
                finalize(() => this.sandboxToggleLoading.set(false)),
                catchError((err) => {
                    console.error(
                        '[AccountEnvironmentService] Failed to update sandbox mode:',
                        err
                    );
                    this._snackBar.open(
                        this._transloco.translate('accountEnv.errors.updateFailed'),
                        undefined,
                        { duration: 4000 }
                    );
                    return of(null);
                })
            )
            .subscribe((res) => {
                if (!res) {
                    return;
                }
                this._persistSandboxMode(sandboxMode);
                this._userService
                    .get()
                    .pipe(
                        take(1),
                        catchError(() => of(null))
                    )
                    .subscribe((fresh) => {
                        if (fresh) {
                            this.accountSnapshot.set(fresh);
                        }
                    });
            });
    }

    openSandboxInfoModal(): void {
        import('../../modules/home/sandbox-mode-info-modal/sandbox-mode-info-modal.component').then(
            ({ SandboxModeInfoModalComponent }) => {
                this._matDialog.open(SandboxModeInfoModalComponent, {
                    panelClass: 'sandbox-info-modal-dialog',
                    maxWidth: '520px',
                });
            }
        );
    }

    startCompanyVerification(): void {
        import('../../layout/common/identity-verification-info-modal/identity-verification-info-modal.component').then(
            ({ IdentityVerificationInfoModalComponent }) => {
                const dialogRef = this._matDialog.open(IdentityVerificationInfoModalComponent, {
                    panelClass: 'identity-verification-info-modal-dialog',
                    maxWidth: '520px',
                });

                dialogRef.afterClosed().subscribe((result) => {
                    if (result === 'verify') {
                        this.executeCompanyVerification();
                    }
                });
            }
        );
    }

    executeCompanyVerification(options?: { forceNew?: boolean }): void {
        if (this.verifyCompanyLoading()) {
            return;
        }

        if (this.kybOnboardingEnabled() && !this.isLegacyKycClient()) {
            this.openKybFlowDirectly(Boolean(options?.forceNew));
            return;
        }

        this._executeLegacyKycVerification();
    }

    /** Opens or resumes the KYB short-link portal directly (used by Tier 1 strip and Settings KYB panel). */
    openKybFlowDirectly(forceNew = false): void {
        if (this.verifyCompanyLoading()) {
            return;
        }

        this.verifyCompanyLoading.set(true);
        this._paymentService
            .resumeKYB({ origin: environment.kycBaseUrl, forceNew })
            .pipe(
                take(1),
                finalize(() => this.verifyCompanyLoading.set(false)),
                catchError((err) => {
                    const code = String(err?.error?.message || err?.error?.code || '');
                    if (err?.status === 503 || code.includes('verifik_kyb_project_not_configured')) {
                        this._executeLegacyKycVerification();
                        return of(null);
                    }
                    console.error('[AccountEnvironmentService] resume-kyb failed:', err);
                    this._snackBar.open(
                        this._transloco.translate('accountEnv.errors.verifyFailed'),
                        undefined,
                        { duration: 4000 }
                    );
                    return of(null);
                })
            )
            .subscribe((response) => {
                const verifyUrl = response?.data?.verifyUrl;
                if (!verifyUrl) {
                    return;
                }

                window.open(verifyUrl, '_blank', 'noopener,noreferrer');
                this.loadKybStatus();
            });
    }

    private _executeLegacyKycVerification(): void {
        if (this.verifyCompanyLoading()) {
            return;
        }

        this.verifyCompanyLoading.set(true);
        this._paymentService
            .resumeKYC()
            .pipe(
                take(1),
                finalize(() => this.verifyCompanyLoading.set(false)),
                catchError((err) => {
                    console.error('[AccountEnvironmentService] resume-kyc failed:', err);
                    this._snackBar.open(
                        this._transloco.translate('accountEnv.errors.verifyFailed'),
                        undefined,
                        { duration: 4000 }
                    );
                    return of(null);
                })
            )
            .subscribe((response) => {
                if (!response) {
                    return;
                }

                const data = response.data;
                if (data?.alreadyCompleted || (!data?.path && data?.canRecharge === true)) {
                    this._snackBar.open(
                        this._transloco.translate('accountEnv.verifyUnlocked'),
                        undefined,
                        { duration: 4000 }
                    );
                    this.syncUser();
                    return;
                }

                if (data?.path && environment.kycBaseUrl) {
                    window.open(
                        `${environment.kycBaseUrl}${data.path}`,
                        '_blank',
                        'noopener,noreferrer'
                    );
                }
            });
    }

    private _refreshAuthState(): void {
        this.isAuthenticated.set(this._sessionService.hasValidAuthentication());
    }

    private _isSandboxModeActive(): boolean {
        const settings = this.accountSnapshot()?.settings;

        if (settings?._id) {
            return settings.sandboxMode === true;
        }

        const token = localStorage.getItem('accessToken');

        if (!token) return false;

        try {
            const payload = JSON.parse(atob(token.split('.')[1])) as { mode?: string };
            return payload.mode === 'sandbox';
        } catch {
            return false;
        }
    }

    private _hydrateFromStorage(): void {
        const raw = localStorage.getItem('verifik_account');
        if (!raw || raw === 'undefined' || raw === 'null') {
            return;
        }
        try {
            this.accountSnapshot.set(JSON.parse(raw) as User);
        } catch {
            /* ignore corrupt snapshot */
        }
    }

    private _persistSandboxMode(sandboxMode: boolean): void {
        const raw = localStorage.getItem('verifik_account');
        if (!raw || raw === 'undefined' || raw === 'null') {
            return;
        }
        try {
            const prev = JSON.parse(raw) as User & Record<string, unknown>;
            const settings = { ...(prev.settings ?? {}), sandboxMode };
            const merged = { ...prev, settings } as User;
            localStorage.setItem('verifik_account', JSON.stringify(merged));
            this._userService.user = merged;
            this.accountSnapshot.set(merged);
        } catch {
            /* ignore */
        }
    }
}
