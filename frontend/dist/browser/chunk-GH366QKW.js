import {
  AuthUtils
} from "./chunk-EVWXSBKG.js";
import {
  MatDialog
} from "./chunk-M5KDIZH5.js";
import {
  Router
} from "./chunk-HYFP557I.js";
import {
  BehaviorSubject,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-PNPEHISK.js";

// src/app/core/services/session.service.ts
var SessionService = class _SessionService {
  constructor() {
    this._router = inject(Router);
    this._matDialog = inject(MatDialog);
    this._isLoggingOut = false;
    this._reloadCount = 0;
    this._lastReloadTime = 0;
    this.MAX_RELOADS_PER_MINUTE = 3;
    this.RELOAD_WINDOW_MS = 6e4;
    this._sessionExpired$ = new BehaviorSubject(false);
    this.sessionExpired$ = this._sessionExpired$.asObservable();
    this.RELOAD_TRACKING_KEY = "session_reload_tracking";
    this.AUTH_MODAL_ID = "verifik-auth-modal";
    this._authModalPending = false;
    this._loadReloadTracking();
  }
  /**
   * Check if the current access token is valid (exists and not expired)
   */
  isTokenValid() {
    const token = localStorage.getItem("accessToken");
    if (!token || token.trim() === "") {
      return false;
    }
    if (AuthUtils.isTokenExpired(token) || this._storedExpiryHasPassed()) {
      console.warn("[SessionService] Token check failed: Token appears expired");
      return false;
    }
    return true;
  }
  /**
   * Check if user has any valid authentication (Web2 or Web3)
   */
  hasValidAuthentication() {
    if (this.isTokenValid()) {
      return true;
    }
    const walletAddress = localStorage.getItem("x402_agent_address");
    const walletType = localStorage.getItem("x402_wallet_type");
    const hasEncryptedWallet = !!localStorage.getItem("x402_agent_pk_encrypted");
    const hasPlainPk = !!localStorage.getItem("x402_agent_pk");
    if (walletAddress && (walletType === "metamask" || hasEncryptedWallet || hasPlainPk)) {
      return true;
    }
    return false;
  }
  /**
   * Handle session expiration
   * Called when a 401/403 is received or token is detected as expired
   *
   * @param options Configuration options
   * @param options.clearWeb2Only Only clear Web2 credentials (preserve wallet)
   * @param options.silent Don't navigate, just cleanup
   * @param options.showModal Show auth modal instead of redirecting
   */
  handleSessionExpired(options = {}) {
    if (this._isLoggingOut) {
      console.warn("[SessionService] Already handling session expiration, skipping...");
      return;
    }
    this._isLoggingOut = true;
    console.log("[SessionService] Handling session expiration", options);
    this._clearWeb2Credentials();
    if (!options.clearWeb2Only) {
      this._clearWeb3Credentials();
    }
    this._sessionExpired$.next(true);
    this._matDialog.closeAll();
    setTimeout(() => {
      this._isLoggingOut = false;
    }, 1e3);
    if (options.showModal) {
      this.openAuthModal();
      return;
    }
    if (!options.silent) {
      this._router.navigate(["/"]);
    }
  }
  /**
   * Opens the existing sign-in / create-account dialog.
   * No-ops when that dialog is already open or about to open.
   */
  openAuthModal() {
    if (this._authModalPending || this._matDialog.getDialogById(this.AUTH_MODAL_ID)) {
      return;
    }
    this._authModalPending = true;
    void import("./chunk-G5WVZAMA.js").then(({ AuthModalComponent }) => {
      if (this._matDialog.getDialogById(this.AUTH_MODAL_ID)) {
        this._authModalPending = false;
        return;
      }
      const dialogRef = this._matDialog.open(AuthModalComponent, {
        id: this.AUTH_MODAL_ID,
        panelClass: "auth-modal-dialog",
        width: "400px",
        maxWidth: "100vw"
      });
      dialogRef.afterClosed().subscribe(() => {
        this._authModalPending = false;
      });
    }).catch(() => {
      this._authModalPending = false;
    });
  }
  /**
   * Clear all Web2-related credentials from localStorage
   */
  _clearWeb2Credentials() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem(AuthUtils.ACCESS_TOKEN_EXPIRES_AT_KEY);
    localStorage.removeItem("verifik_account");
    localStorage.removeItem("user");
    localStorage.removeItem("currentConversationId");
  }
  /**
   * Clear all Web3-related credentials from localStorage
   */
  _clearWeb3Credentials() {
    localStorage.removeItem("x402_agent_address");
    localStorage.removeItem("x402_agent_pk");
    localStorage.removeItem("x402_agent_pk_encrypted");
    localStorage.removeItem("x402_wallet_type");
    localStorage.removeItem("x402_encryption_method");
    localStorage.removeItem("x402_encryption_salt");
    localStorage.removeItem("x402_credential_id");
    localStorage.removeItem("lastWalletAddress");
  }
  /**
   * Clear all session data (both Web2 and Web3)
   */
  clearAllSessionData() {
    this._clearWeb2Credentials();
    this._clearWeb3Credentials();
    localStorage.removeItem(this.RELOAD_TRACKING_KEY);
  }
  /**
   * Safe reload with loop prevention
   * Tracks reloads and prevents infinite loops
   *
   * @returns true if reload was allowed, false if blocked due to loop detection
   */
  safeReload() {
    const now = Date.now();
    if (now - this._lastReloadTime < this.RELOAD_WINDOW_MS) {
      this._reloadCount++;
    } else {
      this._reloadCount = 1;
    }
    this._lastReloadTime = now;
    this._saveReloadTracking();
    if (this._reloadCount > this.MAX_RELOADS_PER_MINUTE) {
      console.error("[SessionService] Reload loop detected! Stopping reload and clearing session.");
      this.clearAllSessionData();
      this._router.navigate(["/"]);
      return false;
    }
    location.reload();
    return true;
  }
  /**
   * Load reload tracking from localStorage
   */
  _loadReloadTracking() {
    try {
      const tracking = localStorage.getItem(this.RELOAD_TRACKING_KEY);
      if (tracking) {
        const data = JSON.parse(tracking);
        const now = Date.now();
        if (now - data.lastReloadTime < this.RELOAD_WINDOW_MS) {
          this._reloadCount = data.reloadCount;
          this._lastReloadTime = data.lastReloadTime;
          if (this._reloadCount > this.MAX_RELOADS_PER_MINUTE) {
            console.error("[SessionService] Reload loop detected on init! Clearing session.");
            this.clearAllSessionData();
          }
        } else {
          localStorage.removeItem(this.RELOAD_TRACKING_KEY);
        }
      }
    } catch (error) {
      console.warn("[SessionService] Failed to load reload tracking", error);
      localStorage.removeItem(this.RELOAD_TRACKING_KEY);
    }
  }
  /**
   * Save reload tracking to localStorage
   */
  _saveReloadTracking() {
    try {
      localStorage.setItem(this.RELOAD_TRACKING_KEY, JSON.stringify({
        reloadCount: this._reloadCount,
        lastReloadTime: this._lastReloadTime
      }));
    } catch (error) {
      console.warn("[SessionService] Failed to save reload tracking", error);
    }
  }
  /**
   * Reset reload tracking (call after successful login)
   */
  resetReloadTracking() {
    this._reloadCount = 0;
    this._lastReloadTime = 0;
    localStorage.removeItem(this.RELOAD_TRACKING_KEY);
  }
  /**
   * Check if token is about to expire (within 5 minutes)
   * Useful for proactive session refresh
   */
  isTokenExpiringSoon(offsetSeconds = 300) {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return false;
    }
    return AuthUtils.isTokenExpired(token, -offsetSeconds);
  }
  /**
   * Get time until token expires (in milliseconds)
   * Returns -1 if token is invalid or already expired
   */
  getTokenExpirationTime() {
    const token = localStorage.getItem("accessToken");
    if (!token || token.trim() === "") {
      return -1;
    }
    const expiresAt = AuthUtils.getTokenExpirationDate(token) || this._readStoredExpiry();
    if (!expiresAt)
      return -1;
    const remaining = expiresAt.getTime() - Date.now();
    return remaining > 0 ? remaining : -1;
  }
  /**
   * The date stored beside the session token, when the JWT itself has no claim.
   */
  _readStoredExpiry() {
    const stored = localStorage.getItem(AuthUtils.ACCESS_TOKEN_EXPIRES_AT_KEY);
    if (!stored)
      return null;
    const expiresAt = new Date(stored);
    return Number.isNaN(expiresAt.getTime()) ? null : expiresAt;
  }
  /**
   * True when accessTokenExpiresAt is present and already in the past.
   */
  _storedExpiryHasPassed() {
    const expiresAt = this._readStoredExpiry();
    if (!expiresAt)
      return false;
    return expiresAt.getTime() <= Date.now();
  }
  static {
    this.\u0275fac = function SessionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SessionService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionService, factory: _SessionService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SessionService
};
//# sourceMappingURL=chunk-GH366QKW.js.map
