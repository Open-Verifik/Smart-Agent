import {
  HttpWrapperService
} from "./chunk-BCBZJBUY.js";
import {
  AuthUtils
} from "./chunk-EVWXSBKG.js";
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  HttpClient,
  Injectable,
  ReplaySubject,
  inject,
  map,
  setClassMetadata,
  take,
  tap,
  ɵɵdefineInjectable
} from "./chunk-PNPEHISK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/core/user/user.service.ts
var UserService = class _UserService {
  constructor() {
    this._httpClient = inject(HttpClient);
    this._httpWrapper = inject(HttpWrapperService);
    this._user = new ReplaySubject(1);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Setter & getter for user
   *
   * @param value
   */
  set user(value) {
    this._user.next(value);
  }
  get user$() {
    return this._user.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Persists accessToken and user from a /v2/auth/session response.
   */
  applySessionResponse(response) {
    if (!response || typeof response !== "object") {
      return null;
    }
    const payload = response;
    const accessToken = payload.data?.accessToken ?? payload.accessToken;
    if (accessToken) {
      const existing = localStorage.getItem("accessToken") || "";
      const keepExisting = Boolean(existing) && existing !== accessToken && AuthUtils.accessTokenStillValid(existing);
      AuthUtils.storeAccessToken(keepExisting ? existing : accessToken);
    }
    const user = payload.data?.user ?? payload.user ?? null;
    if (!user)
      return null;
    localStorage.setItem("verifik_account", JSON.stringify(user));
    this._user.next(user);
    return user;
  }
  /**
   * Get the current signed-in user data
   */
  get() {
    return this._httpWrapper.sendRequest("post", environment.apiUrl + "/v2/auth/session", { origin: "app" }).pipe(map((response) => {
      const user = this.applySessionResponse(response);
      return user ?? (response.data?.user || response.user || response);
    }));
  }
  /**
   * Update the user
   *
   * @param user
   */
  update(user) {
    return this._httpClient.patch(environment.baseUrl + "api/common/user", { user }).pipe(map((response) => {
      this._user.next(response);
    }));
  }
  /**
   * Patch the signed-in client. Applies only the requested fields so a raw
   * Client PUT body cannot overwrite session `credits` (credits + extraCredits).
   *
   * @param data - Fields to persist (e.g. language)
   */
  updateClient(data) {
    return this._httpWrapper.sendRequest("put", environment.apiUrl + "/v2/clients/me", data).pipe(tap(() => {
      this._user.pipe(take(1)).subscribe((currentUser) => {
        const nextUser = __spreadProps(__spreadValues(__spreadValues({}, currentUser), data), { credits: currentUser?.credits });
        localStorage.setItem("verifik_account", JSON.stringify(nextUser));
        this._user.next(nextUser);
      });
    }));
  }
  static {
    this.\u0275fac = function UserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  UserService
};
//# sourceMappingURL=chunk-K4AG7N5H.js.map
