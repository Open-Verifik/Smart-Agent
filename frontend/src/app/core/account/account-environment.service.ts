import { computed, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoService } from '@jsverse/transloco';
import { catchError, finalize, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { PaymentService } from '../../modules/add-credits/services/payment.service';
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

    readonly showVerifyStrip = computed(
        () => this.isAuthenticated() && this.accountSnapshot()?.canRecharge === false,
    );

    readonly showSandboxStrip = computed(
        () => this.isAuthenticated() && this.accountSnapshot()?.settings?.sandboxMode === true,
    );

    /**
     * true = Production is ACTIVE (sandboxMode === false).
     * The slide-toggle `checked` represents "Production on", not "Sandbox on".
     */
    readonly productionModeOn = computed(
        () => this.isAuthenticated() && this.accountSnapshot()?.settings?.sandboxMode === false,
    );

    /** Toggle is enabled only when canRecharge is explicitly true and settings._id exists. */
    readonly productionToggleDisabled = computed(
        () =>
            this.sandboxToggleLoading() ||
            this.accountSnapshot()?.canRecharge !== true ||
            !this.accountSnapshot()?.settings?._id,
    );

    constructor() {
        this.isAuthenticated.set(this._sessionService.hasValidAuthentication());

        if (this.isAuthenticated()) {
            this._hydrateFromStorage();

            this._userService.user$.pipe(takeUntilDestroyed()).subscribe((user) => {
                this.accountSnapshot.set(user);
            });
        }
    }

    /** Call once after session restore to populate from API. */
    syncUser(): void {
        if (!this.isAuthenticated()) {
            return;
        }
        this._userService
            .get()
            .pipe(take(1), catchError(() => of(null)))
            .subscribe((user) => {
                if (user) {
                    this.accountSnapshot.set(user);
                }
            });
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
                    console.error('[AccountEnvironmentService] Failed to update sandbox mode:', err);
                    this._snackBar.open(
                        this._transloco.translate('accountEnv.errors.updateFailed'),
                        undefined,
                        { duration: 4000 },
                    );
                    return of(null);
                }),
            )
            .subscribe((res) => {
                if (!res) {
                    return;
                }
                this._persistSandboxMode(sandboxMode);
                this._userService
                    .get()
                    .pipe(take(1), catchError(() => of(null)))
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
            },
        );
    }

    startCompanyVerification(): void {
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
                        { duration: 4000 },
                    );
                    return of(null);
                }),
            )
            .subscribe((response) => {
                const path = (response as any)?.data?.path;
                if (path && environment.kycBaseUrl) {
                    window.open(`${environment.kycBaseUrl}${path}`, '_blank', 'noopener,noreferrer');
                }
            });
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
