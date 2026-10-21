import {
  PaymentService
} from "./chunk-VWOHFVN5.js";
import {
  MatSnackBar
} from "./chunk-TXEVGTMX.js";
import {
  UserService
} from "./chunk-6VDSDVMZ.js";
import {
  HttpWrapperService
} from "./chunk-BCBZJBUY.js";
import {
  SessionService
} from "./chunk-WSS6AKQE.js";
import {
  MatDialog
} from "./chunk-M5KDIZH5.js";
import {
  TranslocoService,
  takeUntilDestroyed
} from "./chunk-R5W3A6HI.js";
import {
  environment
} from "./chunk-PMCYMBOC.js";
import {
  Injectable,
  catchError,
  computed,
  finalize,
  inject,
  of,
  setClassMetadata,
  signal,
  take,
  ɵɵdefineInjectable
} from "./chunk-PNPEHISK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/core/account/account-environment.service.ts
var AccountEnvironmentService = class _AccountEnvironmentService {
  constructor() {
    this._sessionService = inject(SessionService);
    this._userService = inject(UserService);
    this._httpWrapper = inject(HttpWrapperService);
    this._paymentService = inject(PaymentService);
    this._matDialog = inject(MatDialog);
    this._transloco = inject(TranslocoService);
    this._snackBar = inject(MatSnackBar);
    this.isAuthenticated = signal(false);
    this.accountSnapshot = signal(null);
    this.sandboxToggleLoading = signal(false);
    this.verifyCompanyLoading = signal(false);
    this.sessionHydrated = signal(false);
    this.showVerifyStrip = computed(() => this.sessionHydrated() && this.isAuthenticated() && this.accountSnapshot()?.canRecharge === false && this.accountSnapshot()?.approvalRequestStatus !== "approved");
    this.verifyStripPendingReview = computed(() => this.isAuthenticated() && this.accountSnapshot()?.canRecharge === false && this.accountSnapshot()?.approvalRequestStatus === "requested");
    this.showSandboxStrip = computed(() => this.isAuthenticated() && this._isSandboxModeActive());
    this.isSandboxModeActive = computed(() => this._isSandboxModeActive());
    this.productionModeOn = computed(() => this.isAuthenticated() && this.accountSnapshot()?.canRecharge === true && !this._isSandboxModeActive());
    this.productionToggleDisabled = computed(() => this.sandboxToggleLoading() || this.accountSnapshot()?.canRecharge !== true || !this.accountSnapshot()?.settings?._id);
    this._refreshAuthState();
    this._hydrateFromStorage();
    this._userService.user$.pipe(takeUntilDestroyed()).subscribe((user) => {
      if (user) {
        this.accountSnapshot.set(user);
        if (typeof user.canRecharge === "boolean") {
          this.sessionHydrated.set(true);
        }
      }
      this._refreshAuthState();
    });
  }
  /** Refresh session user (settings.sandboxMode, canRecharge, etc.) from API. */
  syncUser() {
    if (!this._sessionService.hasValidAuthentication()) {
      return;
    }
    this._userService.get().pipe(take(1), catchError(() => of(null))).subscribe((user) => {
      if (user) {
        this.accountSnapshot.set(user);
        this._userService.user = user;
        this.sessionHydrated.set(true);
      }
      this._refreshAuthState();
    });
  }
  /** Called after AppComponent session restore so sandbox UI hydrates immediately. */
  onSessionSynced(user) {
    if (user) {
      this.accountSnapshot.set(user);
      this.sessionHydrated.set(true);
    }
    this._refreshAuthState();
  }
  /**
   * Called when the Production slide-toggle changes.
   * productionOn = true  → sandboxMode false  (live checks active).
   * productionOn = false → sandboxMode true   (sandbox).
   */
  toggleProductionMode(productionOn) {
    const settingsId = this.accountSnapshot()?.settings?._id;
    if (!settingsId || this.sandboxToggleLoading()) {
      return;
    }
    const sandboxMode = !productionOn;
    this.sandboxToggleLoading.set(true);
    const url = `${environment.apiUrl}/v2/client-settings/${settingsId}`;
    this._httpWrapper.sendRequest("put", url, { sandboxMode }).pipe(take(1), finalize(() => this.sandboxToggleLoading.set(false)), catchError((err) => {
      console.error("[AccountEnvironmentService] Failed to update sandbox mode:", err);
      this._snackBar.open(this._transloco.translate("accountEnv.errors.updateFailed"), void 0, { duration: 4e3 });
      return of(null);
    })).subscribe((res) => {
      if (!res) {
        return;
      }
      this._persistSandboxMode(sandboxMode);
      this._userService.get().pipe(take(1), catchError(() => of(null))).subscribe((fresh) => {
        if (fresh) {
          this.accountSnapshot.set(fresh);
        }
      });
    });
  }
  openSandboxInfoModal() {
    import("./chunk-WAYFHXOY.js").then(({ SandboxModeInfoModalComponent }) => {
      this._matDialog.open(SandboxModeInfoModalComponent, {
        panelClass: "sandbox-info-modal-dialog",
        maxWidth: "520px"
      });
    });
  }
  startCompanyVerification() {
    import("./chunk-K6MCCCWE.js").then(({ IdentityVerificationInfoModalComponent }) => {
      const dialogRef = this._matDialog.open(IdentityVerificationInfoModalComponent, {
        panelClass: "identity-verification-info-modal-dialog",
        maxWidth: "520px"
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result === "verify") {
          this.executeCompanyVerification();
        }
      });
    });
  }
  executeCompanyVerification() {
    if (this.verifyCompanyLoading()) {
      return;
    }
    this.verifyCompanyLoading.set(true);
    this._paymentService.resumeKYC().pipe(take(1), finalize(() => this.verifyCompanyLoading.set(false)), catchError((err) => {
      console.error("[AccountEnvironmentService] resume-kyc failed:", err);
      this._snackBar.open(this._transloco.translate("accountEnv.errors.verifyFailed"), void 0, { duration: 4e3 });
      return of(null);
    })).subscribe((response) => {
      if (!response) {
        return;
      }
      const data = response.data;
      if (data?.alreadyCompleted || !data?.path && data?.canRecharge === true) {
        this._snackBar.open(this._transloco.translate("accountEnv.verifyUnlocked"), void 0, { duration: 4e3 });
        this.syncUser();
        return;
      }
      if (data?.path && environment.kycBaseUrl) {
        window.open(`${environment.kycBaseUrl}${data.path}`, "_blank", "noopener,noreferrer");
      }
    });
  }
  _refreshAuthState() {
    this.isAuthenticated.set(this._sessionService.hasValidAuthentication());
  }
  _isSandboxModeActive() {
    const settings = this.accountSnapshot()?.settings;
    if (settings?._id) {
      return settings.sandboxMode === true;
    }
    const token = localStorage.getItem("accessToken");
    if (!token)
      return false;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.mode === "sandbox";
    } catch {
      return false;
    }
  }
  _hydrateFromStorage() {
    const raw = localStorage.getItem("verifik_account");
    if (!raw || raw === "undefined" || raw === "null") {
      return;
    }
    try {
      this.accountSnapshot.set(JSON.parse(raw));
    } catch {
    }
  }
  _persistSandboxMode(sandboxMode) {
    const raw = localStorage.getItem("verifik_account");
    if (!raw || raw === "undefined" || raw === "null") {
      return;
    }
    try {
      const prev = JSON.parse(raw);
      const settings = __spreadProps(__spreadValues({}, prev.settings ?? {}), { sandboxMode });
      const merged = __spreadProps(__spreadValues({}, prev), { settings });
      localStorage.setItem("verifik_account", JSON.stringify(merged));
      this._userService.user = merged;
      this.accountSnapshot.set(merged);
    } catch {
    }
  }
  static {
    this.\u0275fac = function AccountEnvironmentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountEnvironmentService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountEnvironmentService, factory: _AccountEnvironmentService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountEnvironmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  AccountEnvironmentService
};
//# sourceMappingURL=chunk-FWYUPNZS.js.map
