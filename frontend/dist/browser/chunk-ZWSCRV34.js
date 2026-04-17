import {
  HttpWrapperService
} from "./chunk-LPSMXQSY.js";
import {
  environment
} from "./chunk-32YYYLAD.js";
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
} from "./chunk-YTOBX75K.js";
import {
  __spreadValues
} from "./chunk-KTESVR3Q.js";

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
   * Get the current signed-in user data
   */
  get() {
    return this._httpWrapper.sendRequest("post", environment.apiUrl + "/v2/auth/session", { origin: "app" }).pipe(map((response) => response.data?.user || response.user || response), tap((user) => {
      this._user.next(user);
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
   * Update the client
   *
   * @param user
   */
  updateClient(data) {
    return this._httpWrapper.sendRequest("put", environment.apiUrl + "/v2/clients/me", data).pipe(tap((response) => {
      const updatedUser = response.data || response;
      this._user.pipe(take(1)).subscribe((currentUser) => {
        this._user.next(__spreadValues(__spreadValues(__spreadValues({}, currentUser), updatedUser), data));
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
//# sourceMappingURL=chunk-ZWSCRV34.js.map
