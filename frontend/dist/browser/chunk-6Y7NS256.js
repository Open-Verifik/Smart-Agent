import {
  UserService
} from "./chunk-L5NPACLK.js";
import {
  AuthUtils
} from "./chunk-EVWXSBKG.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  HttpClient,
  Injectable,
  catchError,
  inject,
  of,
  setClassMetadata,
  switchMap,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-YWP2Y7QK.js";

// src/app/core/auth/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this._authenticated = false;
    this._httpClient = inject(HttpClient);
    this._userService = inject(UserService);
  }
  /**
   * Joins Verifik API origin with path so `https://host` + `v2/...` does not produce `hostv2`.
   */
  resolveUrl(path) {
    const base = `${environment.apiUrl ?? ""}`.replace(/\/+$/, "");
    const segment = path.replace(/^\/+/, "");
    return `${base}/${segment}`;
  }
  set accessToken(token) {
    AuthUtils.storeAccessToken(token);
  }
  get accessToken() {
    return localStorage.getItem("accessToken") ?? "";
  }
  forgotPassword(email) {
    return this._httpClient.post(this.resolveUrl("api/auth/forgot-password"), email);
  }
  resetPassword(password) {
    return this._httpClient.post(this.resolveUrl("api/auth/reset-password"), password);
  }
  signIn(credentials) {
    if (this._authenticated)
      return throwError(() => new Error("User is already logged in."));
    return this._httpClient.post(this.resolveUrl("api/auth/sign-in"), credentials).pipe(switchMap((response) => {
      this._authenticated = true;
      this._userService.user = response.user;
      this.accessToken = response.accessToken;
      return of(response);
    }));
  }
  requestOTP(credentials) {
    if (this._authenticated)
      return throwError(() => new Error("User is already logged in."));
    return this._httpClient.post(this.resolveUrl("v2/auth/super/request-otp"), credentials).pipe(switchMap((response) => of(response)));
  }
  confirmOTP(credentials) {
    if (this._authenticated)
      return throwError(() => new Error("User is already logged in."));
    return this._httpClient.post(this.resolveUrl("v2/auth/super/verify-otp"), credentials).pipe(switchMap((response) => {
      if (!response.data) {
        return;
      }
      AuthUtils.storeAccessToken(response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      this._authenticated = true;
      this._userService.user = response.data.user;
      return of(response.data);
    }));
  }
  /**
   * Sign in using the access token
   */
  signInUsingToken() {
    return this._httpClient.post(this.resolveUrl("api/auth/sign-in-with-token"), {
      accessToken: this.accessToken
    }).pipe(catchError(() => of(false)), switchMap((response) => {
      if (response.accessToken) {
      }
      this._authenticated = true;
      this._userService.user = response.user;
      return of(true);
    }));
  }
  /**
   * Refreshes the user session without signing in again
   */
  refreshSession() {
    return this._userService.get().pipe(tap((user) => {
      try {
        const updateBalance = (key) => {
          const stored = localStorage.getItem(key);
          if (stored && stored !== "undefined" && stored !== "null") {
            try {
              const data = JSON.parse(stored);
              let changed = false;
              if (user.credits !== void 0) {
                data.credits = user.credits;
                changed = true;
              }
              if (changed) {
                localStorage.setItem(key, JSON.stringify(data));
              }
            } catch (e) {
              console.warn(`Failed to parse ${key} from local storage`, e);
            }
          }
        };
        updateBalance("verifik_account");
        updateBalance("user");
      } catch (error) {
        console.error("Failed to sync balance to local storage", error);
      }
    }));
  }
  /**
   * Sign out
   * Clears authentication state and removes tokens from localStorage
   *
   * @param clearWeb2Only If true, only clears Web2 credentials (preserves wallet)
   */
  signOut(clearWeb2Only = true) {
    this._authenticated = false;
    localStorage.removeItem("accessToken");
    localStorage.removeItem(AuthUtils.ACCESS_TOKEN_EXPIRES_AT_KEY);
    localStorage.removeItem("verifik_account");
    localStorage.removeItem("user");
    if (!clearWeb2Only) {
      localStorage.removeItem("x402_agent_address");
      localStorage.removeItem("x402_agent_pk");
      localStorage.removeItem("x402_agent_pk_encrypted");
      localStorage.removeItem("x402_wallet_type");
      localStorage.removeItem("x402_encryption_method");
      localStorage.removeItem("x402_encryption_salt");
      localStorage.removeItem("x402_credential_id");
      localStorage.removeItem("lastWalletAddress");
    }
    return of(true);
  }
  /**
   * Sign up
   *
   * @param user
   */
  signUp(user) {
    return this._httpClient.post(this.resolveUrl("api/auth/sign-up"), user);
  }
  /**
   * Unlock session
   *
   * @param credentials
   */
  unlockSession(credentials) {
    return this._httpClient.post(this.resolveUrl("api/auth/unlock-session"), credentials);
  }
  /**
   * Check the authentication status
   */
  check() {
    if (this._authenticated) {
      return of(true);
    }
    if (!this.accessToken) {
      return of(false);
    }
    if (AuthUtils.isTokenExpired(this.accessToken)) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem(AuthUtils.ACCESS_TOKEN_EXPIRES_AT_KEY);
      localStorage.removeItem("user");
      this._authenticated = false;
      return of(false);
    }
    return this.signInUsingToken();
  }
  /**
   * Simulate project login using app registration token (not session token)
   * This method uses HttpClient directly to use the app registration's token
   * @param appRegistrationToken - The token from the app registration record
   * @param projectType - The project type for the login
   */
  simulateProjectLogin(appRegistrationToken, projectType = "onboarding") {
    const headers = {
      Authorization: `Bearer ${appRegistrationToken}`
    };
    return this._httpClient.post(this.resolveUrl("v2/auth/project-login"), { projectType }, {
      headers
    });
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-6Y7NS256.js.map
