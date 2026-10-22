import {
  AuthRequiredGateService
} from "./chunk-PJ7PXAOZ.js";
import {
  AboutEndpointComponent,
  JsonTableComponent,
  POSTMAN_INCLUDE_COST_KEY,
  PostmanService,
  applyPostmanSandboxParamDefaults,
  buildPostmanEffectiveUrl,
  catalogCountryScopeForCountries,
  ensurePostmanIncludeCostParam,
  getPostmanPathParamKeysForEndpoint,
  getPostmanRequestValidationIssues,
  normalizePostmanSexoValue,
  resolvePostmanIncludeCostForSend
} from "./chunk-MVXODGWL.js";
import "./chunk-VAHIF73V.js";
import "./chunk-RLXZXDLR.js";
import {
  formatCatalogPrice,
  mergeParamsFromDocs,
  sanitizeDisplayPayload
} from "./chunk-YSIFJH6G.js";
import "./chunk-XV7JRBNY.js";
import {
  getAppFeatureCatalogCopy,
  resolvePostmanEndpointCopy
} from "./chunk-ZK2UTJXV.js";
import {
  POSTMAN_COUNTRY_ISO,
  postmanCountryFlagUi
} from "./chunk-LFV2WSNG.js";
import "./chunk-USONFPXP.js";
import "./chunk-ZY3HAHLV.js";
import {
  FuseConfirmationService
} from "./chunk-3SSPUNFY.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-E5CL2DVE.js";
import {
  AccountEnvironmentService
} from "./chunk-LH7NVJQC.js";
import "./chunk-BLPRNM4C.js";
import "./chunk-6FS3LBOZ.js";
import "./chunk-N6A4QSA6.js";
import "./chunk-JCYMHGIK.js";
import "./chunk-H3UX3NVF.js";
import "./chunk-LVI7H6QB.js";
import "./chunk-ZUERA2CK.js";
import "./chunk-BXHN2UKT.js";
import "./chunk-ENWXGLEW.js";
import "./chunk-X7X3KIY2.js";
import "./chunk-JURKDGMK.js";
import "./chunk-DT4JVZCC.js";
import "./chunk-DMXREZDX.js";
import "./chunk-CPZD6RE6.js";
import "./chunk-W5MZFF7W.js";
import "./chunk-QUFOCOZK.js";
import "./chunk-CO7JIY6V.js";
import {
  AuthService
} from "./chunk-6Y7NS256.js";
import {
  UserService
} from "./chunk-L5NPACLK.js";
import "./chunk-2W6CKTFA.js";
import {
  SessionService
} from "./chunk-BYA46NNG.js";
import "./chunk-EVWXSBKG.js";
import "./chunk-KIEFKQUB.js";
import "./chunk-HVUVGZ2L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import {
  MatButtonModule
} from "./chunk-PJFCLQ64.js";
import "./chunk-PDWCMJ4H.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import "./chunk-GX5GK4J6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-JBF67GMG.js";
import {
  TranslocoPipe,
  TranslocoService,
  toSignal
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-QL64NPDU.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  JsonPipe,
  Subject,
  ViewEncapsulation,
  catchError,
  computed,
  debounceTime,
  effect,
  inject,
  input,
  of,
  output,
  setClassMetadata,
  signal,
  tap,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/check-list/check-list-countries.ts
var isNamedCountry = (value) => {
  const country = value?.trim();
  if (!country)
    return false;
  const normalized = country.toLowerCase();
  return normalized !== "world" && normalized !== "global";
};
var listCheckListCountries = (rows) => {
  const names = /* @__PURE__ */ new Set();
  for (const row of rows) {
    if (isNamedCountry(row.country))
      names.add(row.country.trim());
  }
  for (const name of Object.keys(POSTMAN_COUNTRY_ISO)) {
    if (isNamedCountry(name))
      names.add(name);
  }
  return [...names].sort((a, b) => a.localeCompare(b));
};

// src/app/modules/check-list/check-list.service.ts
var CheckListService = class _CheckListService {
  constructor() {
    this._http = inject(HttpClient);
    this.lists = signal([]);
    this.current = signal(null);
    this.loading = signal(false);
    this.saving = signal(false);
    this.error = signal(null);
  }
  _authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  _url(path = "") {
    return `${environment.apiUrl}/v2/check-lists${path}`;
  }
  list() {
    this.loading.set(true);
    this.error.set(null);
    return this._http.get(this._url(), { headers: this._authHeaders() }).pipe(tap({
      next: (response) => {
        this.lists.set(response.data || []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("checkList.errors.loadFailed");
      }
    }));
  }
  show(id) {
    this.loading.set(true);
    this.error.set(null);
    return this._http.get(this._url(`/${id}`), { headers: this._authHeaders() }).pipe(tap({
      next: (response) => {
        this.current.set(response.data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set("checkList.errors.loadFailed");
      }
    }));
  }
  create(payload) {
    this.saving.set(true);
    this.error.set(null);
    return this._http.post(this._url(), payload, { headers: this._authHeaders() }).pipe(tap({
      next: (response) => {
        this.current.set(response.data);
        this.lists.update((items) => [response.data, ...items]);
        this.saving.set(false);
      },
      error: () => {
        this.saving.set(false);
        this.error.set("checkList.errors.saveFailed");
      }
    }));
  }
  update(id, payload) {
    this.saving.set(true);
    this.error.set(null);
    return this._http.put(this._url(`/${id}`), payload, {
      headers: this._authHeaders()
    }).pipe(tap({
      next: (response) => {
        this.current.set(response.data);
        this.lists.update((items) => items.map((item) => item._id === response.data._id ? response.data : item));
        this.saving.set(false);
      },
      error: () => {
        this.saving.set(false);
        this.error.set("checkList.errors.saveFailed");
      }
    }));
  }
  destroy(id) {
    return this._http.delete(this._url(`/${id}`), { headers: this._authHeaders() }).pipe(tap(() => {
      this.lists.update((items) => items.filter((item) => item._id !== id));
      if (this.current()?._id === id)
        this.current.set(null);
    }));
  }
  static {
    this.\u0275fac = function CheckListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckListService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CheckListService, factory: _CheckListService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/check-list/check-list-create.component.ts
function CheckListCreateComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.error()));
  }
}
function CheckListCreateComponent_For_24_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const country_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.flagUi(country_r3).src, \u0275\u0275sanitizeUrl);
  }
}
function CheckListCreateComponent_For_24_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 3);
    \u0275\u0275text(1, "public");
    \u0275\u0275elementEnd();
  }
}
function CheckListCreateComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function CheckListCreateComponent_For_24_Template_button_click_0_listener() {
      const country_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCountry(country_r3));
    });
    \u0275\u0275template(1, CheckListCreateComponent_For_24_Case_1_Template, 1, 1, "img", 15)(2, CheckListCreateComponent_For_24_Case_2_Template, 2, 0, "mat-icon", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const country_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-on", ctx_r0.isCountrySelected(country_r3));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_11_0 = ctx_r0.flagUi(country_r3).k) === "img" ? 1 : tmp_11_0 === "globe" ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", country_r3, " ");
  }
}
function CheckListCreateComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 13)(1, "h2", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 17);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275listener("ngModelChange", function CheckListCreateComponent_Conditional_25_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.name.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 18);
    \u0275\u0275listener("click", function CheckListCreateComponent_Conditional_25_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "checkList.nameStep"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "checkList.nameHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.name())("placeholder", \u0275\u0275pipeBind1(8, 10, "checkList.namePlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.canSave());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving() ? \u0275\u0275pipeBind1(11, 12, "checkList.saving") : \u0275\u0275pipeBind1(12, 14, "checkList.createAction"), " ");
  }
}
var CheckListCreateComponent = class _CheckListCreateComponent {
  constructor() {
    this._lists = inject(CheckListService);
    this._postman = inject(PostmanService);
    this._router = inject(Router);
    this._authGate = inject(AuthRequiredGateService);
    this.name = signal("");
    this.selectedCountries = signal([]);
    this.saving = this._lists.saving;
    this.error = this._lists.error;
    this.countries = computed(() => listCheckListCountries(this._postman.catalogCountries()));
    this.canSave = computed(() => this.selectedCountries().length > 0 && Boolean(this.name().trim()) && !this.saving());
  }
  isCountrySelected(country) {
    return this.selectedCountries().some((item) => item.toLowerCase() === country.toLowerCase());
  }
  toggleCountry(country) {
    const next = this.isCountrySelected(country) ? this.selectedCountries().filter((item) => item.toLowerCase() !== country.toLowerCase()) : [...this.selectedCountries(), country];
    this.selectedCountries.set(next);
  }
  save() {
    if (!this.canSave())
      return;
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => {
        this._lists.create({
          name: this.name().trim(),
          countries: this.selectedCountries(),
          domains: [],
          featureCodes: [],
          status: "draft"
        }).subscribe({
          next: () => this._router.navigate(["/check-list"])
        });
      },
      dialogData: {
        titleKey: "checkList.authRequiredTitle",
        bodyKey: "checkList.authRequiredBody"
      }
    });
  }
  flagUi(country) {
    return postmanCountryFlagUi(country);
  }
  static {
    this.\u0275fac = function CheckListCreateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckListCreateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckListCreateComponent, selectors: [["app-check-list-create"]], decls: 26, vars: 17, consts: [[1, "check-list-root"], [1, "check-list-wrap"], ["routerLink", "/check-list", 1, "inline-flex", "items-center", "gap-2", "text-sm", "font-medium", "text-[var(--cl-muted)]"], [1, "!h-4", "!w-4", "!text-[16px]"], [1, "mt-6"], [1, "mb-2", "text-sm", "text-[var(--cl-muted)]"], [1, "check-list-display", "text-2xl"], [1, "mt-2", "max-w-2xl", "text-sm", "text-[var(--cl-muted)]"], [1, "mt-4", "text-sm", "text-rose-600"], [1, "mt-8"], [1, "text-base", "font-semibold"], [1, "mt-4", "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "check-list-pill", 3, "is-on"], [1, "mt-8", "max-w-xl"], ["type", "button", 1, "check-list-pill", 3, "click"], ["alt", "", 1, "h-4", "w-4", "rounded-full", "object-cover", 3, "src"], [1, "mt-1", "text-sm", "text-[var(--cl-muted)]"], [1, "check-list-field", "mt-4", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "button", 1, "check-list-cta", "check-list-pill", "mt-4", 3, "click", "disabled"]], template: function CheckListCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "mat-icon", 3);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "header", 4)(8, "p", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "h1", 6);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 7);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, CheckListCreateComponent_Conditional_17_Template, 3, 3, "p", 8);
        \u0275\u0275elementStart(18, "section", 9)(19, "h2", 10);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 11);
        \u0275\u0275repeaterCreate(23, CheckListCreateComponent_For_24_Template, 4, 4, "button", 12, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, CheckListCreateComponent_Conditional_25_Template, 13, 16, "section", 13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "checkList.back"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "checkList.workspaceKicker"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, "checkList.createTitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 13, "checkList.createSubtitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 17 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 15, "checkList.countryQuestion"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.countries());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selectedCountries().length ? 25 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, MatIconModule, MatIcon, TranslocoPipe], styles: ['/* src/app/modules/check-list/check-list.styles.scss */\n.check-list-root {\n  --cl-ink: rgb(15, 23, 42);\n  --cl-muted: rgb(100, 116, 139);\n  --cl-paper: rgb(248, 250, 252);\n  --cl-card: rgb(255, 255, 255);\n  --cl-line: rgba(148, 163, 184, 0.22);\n  --cl-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  --cl-accent: rgb(37, 99, 235);\n  position: absolute;\n  inset: 0;\n  overflow: auto;\n  color: var(--cl-ink);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(37, 99, 235, 0.09),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(14, 165, 233, 0.07),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n.check-list-root * {\n  box-sizing: border-box;\n}\n.check-list-wrap {\n  width: min(1200px, 100% - 3rem);\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n.check-list-display {\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n  color: var(--cl-ink);\n}\n.check-list-card {\n  background: var(--cl-card);\n  border: 1px solid var(--cl-line);\n  border-radius: 16px;\n  box-shadow: var(--cl-shadow);\n}\n.check-list-card.is-selected,\n.check-list-card.is-active {\n  border-color: rgba(37, 99, 235, 0.45);\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);\n}\n.check-list-price {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-paper);\n  color: var(--cl-muted);\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.check-list-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n  font-size: 13px;\n  font-weight: 600;\n  transition:\n    border-color 150ms ease,\n    background 150ms ease,\n    box-shadow 150ms ease;\n}\n.check-list-pill:hover {\n  border-color: rgba(37, 99, 235, 0.45);\n}\n.check-list-pill.is-on,\n.check-list-cta {\n  background: rgb(15, 23, 42);\n  color: rgb(255, 255, 255);\n  border-color: transparent;\n}\n.check-list-cta {\n  min-height: 40px;\n  padding: 0 18px;\n}\n.check-list-field {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  padding: 0.75rem 0.9rem;\n  font-size: 0.875rem;\n  color: var(--cl-ink);\n}\n.check-list-pill:disabled,\n.check-list-cta:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-pill.is-readonly {\n  pointer-events: none;\n}\n.check-list-icon-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: var(--cl-muted);\n}\n.check-list-icon-btn:hover {\n  background: rgba(148, 163, 184, 0.16);\n  color: var(--cl-ink);\n}\n.check-list-pill.is-danger:hover {\n  border-color: rgba(244, 63, 94, 0.55);\n  color: rgb(225, 29, 72);\n}\n.check-list-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.check-list-tab {\n  min-height: 34px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--cl-muted);\n  font-size: 13px;\n  font-weight: 600;\n}\n.check-list-tab.is-on {\n  border-color: var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n}\n.check-list-tab:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-drawer {\n  width: min(52rem, 100%);\n}\n.check-list-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 999px;\n  animation: check-list-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.check-list-spinner-lg {\n  width: 36px;\n  height: 36px;\n  border-width: 3px;\n  border-color: var(--cl-accent);\n  border-right-color: transparent;\n}\n.check-list-json {\n  margin: 0;\n  overflow: auto;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 12px;\n  line-height: 1.55;\n  white-space: pre-wrap;\n  word-break: break-word;\n  color: var(--cl-ink);\n}\n@keyframes check-list-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dark .check-list-root {\n  --cl-ink: rgb(248, 250, 252);\n  --cl-muted: rgb(148, 163, 184);\n  --cl-paper: rgb(15, 23, 42);\n  --cl-card: rgb(30, 41, 59);\n  --cl-line: rgba(148, 163, 184, 0.18);\n  --cl-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(56, 189, 248, 0.08),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.dark .check-list-card.is-selected,\n.dark .check-list-card.is-active {\n  border-color: rgba(96, 165, 250, 0.45);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n.dark .check-list-pill:hover {\n  border-color: rgba(96, 165, 250, 0.45);\n}\n.dark .check-list-pill.is-danger:hover {\n  border-color: rgba(251, 113, 133, 0.55);\n  color: rgb(251, 113, 133);\n}\n.dark .check-list-pill.is-on,\n.dark .check-list-cta {\n  background: rgb(226, 232, 240);\n  color: rgb(15, 23, 42);\n}\n/*# sourceMappingURL=check-list.styles.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckListCreateComponent, [{
    type: Component,
    args: [{ selector: "app-check-list-create", standalone: true, imports: [CommonModule, FormsModule, RouterLink, MatIconModule, TranslocoPipe], encapsulation: ViewEncapsulation.None, template: `
        <div class="check-list-root">
            <div class="check-list-wrap">
                <a routerLink="/check-list" class="inline-flex items-center gap-2 text-sm font-medium text-[var(--cl-muted)]">
                    <mat-icon class="!h-4 !w-4 !text-[16px]">arrow_back</mat-icon>
                    {{ 'checkList.back' | transloco }}
                </a>

                <header class="mt-6">
                    <p class="mb-2 text-sm text-[var(--cl-muted)]">
                        {{ 'checkList.workspaceKicker' | transloco }}
                    </p>
                    <h1 class="check-list-display text-2xl">
                        {{ 'checkList.createTitle' | transloco }}
                    </h1>
                    <p class="mt-2 max-w-2xl text-sm text-[var(--cl-muted)]">
                        {{ 'checkList.createSubtitle' | transloco }}
                    </p>
                </header>

                @if (error()) {
                    <p class="mt-4 text-sm text-rose-600">{{ error() | transloco }}</p>
                }

                <section class="mt-8">
                    <h2 class="text-base font-semibold">{{ 'checkList.countryQuestion' | transloco }}</h2>
                    <div class="mt-4 flex flex-wrap gap-2">
                        @for (country of countries(); track country) {
                            <button
                                type="button"
                                class="check-list-pill"
                                [class.is-on]="isCountrySelected(country)"
                                (click)="toggleCountry(country)"
                            >
                                @switch (flagUi(country).k) {
                                    @case ('img') {
                                        <img [src]="$any(flagUi(country)).src" alt="" class="h-4 w-4 rounded-full object-cover" />
                                    }
                                    @case ('globe') {
                                        <mat-icon class="!h-4 !w-4 !text-[16px]">public</mat-icon>
                                    }
                                }
                                {{ country }}
                            </button>
                        }
                    </div>
                </section>

                @if (selectedCountries().length) {
                    <section class="mt-8 max-w-xl">
                        <h2 class="text-base font-semibold">{{ 'checkList.nameStep' | transloco }}</h2>
                        <p class="mt-1 text-sm text-[var(--cl-muted)]">
                            {{ 'checkList.nameHint' | transloco }}
                        </p>
                        <input
                            class="check-list-field mt-4"
                            [ngModel]="name()"
                            (ngModelChange)="name.set($event)"
                            [placeholder]="'checkList.namePlaceholder' | transloco"
                        />
                        <button
                            type="button"
                            class="check-list-cta check-list-pill mt-4"
                            [disabled]="!canSave()"
                            (click)="save()"
                        >
                            {{ saving() ? ('checkList.saving' | transloco) : ('checkList.createAction' | transloco) }}
                        </button>
                    </section>
                }
            </div>
        </div>
    `, styles: ['/* src/app/modules/check-list/check-list.styles.scss */\n.check-list-root {\n  --cl-ink: rgb(15, 23, 42);\n  --cl-muted: rgb(100, 116, 139);\n  --cl-paper: rgb(248, 250, 252);\n  --cl-card: rgb(255, 255, 255);\n  --cl-line: rgba(148, 163, 184, 0.22);\n  --cl-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  --cl-accent: rgb(37, 99, 235);\n  position: absolute;\n  inset: 0;\n  overflow: auto;\n  color: var(--cl-ink);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(37, 99, 235, 0.09),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(14, 165, 233, 0.07),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n.check-list-root * {\n  box-sizing: border-box;\n}\n.check-list-wrap {\n  width: min(1200px, 100% - 3rem);\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n.check-list-display {\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n  color: var(--cl-ink);\n}\n.check-list-card {\n  background: var(--cl-card);\n  border: 1px solid var(--cl-line);\n  border-radius: 16px;\n  box-shadow: var(--cl-shadow);\n}\n.check-list-card.is-selected,\n.check-list-card.is-active {\n  border-color: rgba(37, 99, 235, 0.45);\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);\n}\n.check-list-price {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-paper);\n  color: var(--cl-muted);\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.check-list-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n  font-size: 13px;\n  font-weight: 600;\n  transition:\n    border-color 150ms ease,\n    background 150ms ease,\n    box-shadow 150ms ease;\n}\n.check-list-pill:hover {\n  border-color: rgba(37, 99, 235, 0.45);\n}\n.check-list-pill.is-on,\n.check-list-cta {\n  background: rgb(15, 23, 42);\n  color: rgb(255, 255, 255);\n  border-color: transparent;\n}\n.check-list-cta {\n  min-height: 40px;\n  padding: 0 18px;\n}\n.check-list-field {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  padding: 0.75rem 0.9rem;\n  font-size: 0.875rem;\n  color: var(--cl-ink);\n}\n.check-list-pill:disabled,\n.check-list-cta:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-pill.is-readonly {\n  pointer-events: none;\n}\n.check-list-icon-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: var(--cl-muted);\n}\n.check-list-icon-btn:hover {\n  background: rgba(148, 163, 184, 0.16);\n  color: var(--cl-ink);\n}\n.check-list-pill.is-danger:hover {\n  border-color: rgba(244, 63, 94, 0.55);\n  color: rgb(225, 29, 72);\n}\n.check-list-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.check-list-tab {\n  min-height: 34px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--cl-muted);\n  font-size: 13px;\n  font-weight: 600;\n}\n.check-list-tab.is-on {\n  border-color: var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n}\n.check-list-tab:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-drawer {\n  width: min(52rem, 100%);\n}\n.check-list-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 999px;\n  animation: check-list-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.check-list-spinner-lg {\n  width: 36px;\n  height: 36px;\n  border-width: 3px;\n  border-color: var(--cl-accent);\n  border-right-color: transparent;\n}\n.check-list-json {\n  margin: 0;\n  overflow: auto;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 12px;\n  line-height: 1.55;\n  white-space: pre-wrap;\n  word-break: break-word;\n  color: var(--cl-ink);\n}\n@keyframes check-list-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dark .check-list-root {\n  --cl-ink: rgb(248, 250, 252);\n  --cl-muted: rgb(148, 163, 184);\n  --cl-paper: rgb(15, 23, 42);\n  --cl-card: rgb(30, 41, 59);\n  --cl-line: rgba(148, 163, 184, 0.18);\n  --cl-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(56, 189, 248, 0.08),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.dark .check-list-card.is-selected,\n.dark .check-list-card.is-active {\n  border-color: rgba(96, 165, 250, 0.45);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n.dark .check-list-pill:hover {\n  border-color: rgba(96, 165, 250, 0.45);\n}\n.dark .check-list-pill.is-danger:hover {\n  border-color: rgba(251, 113, 133, 0.55);\n  color: rgb(251, 113, 133);\n}\n.dark .check-list-pill.is-on,\n.dark .check-list-cta {\n  background: rgb(226, 232, 240);\n  color: rgb(15, 23, 42);\n}\n/*# sourceMappingURL=check-list.styles.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckListCreateComponent, { className: "CheckListCreateComponent", filePath: "src/app/modules/check-list/check-list-create.component.ts", lineNumber: 93 });
})();

// src/app/modules/check-list/check-list-dashboard.component.ts
var _c0 = (a0) => ({ name: a0 });
var _c1 = (a0) => ["/check-list", a0];
var _forTrack0 = ($index, $item) => $item._id;
function CheckListDashboardComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.error()));
  }
}
function CheckListDashboardComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "checkList.loading"), " ");
  }
}
function CheckListDashboardComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "p", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 19);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function CheckListDashboardComponent_Conditional_39_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startNew());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "checkList.emptyTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "checkList.emptyBody"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "checkList.startFirst"), " ");
  }
}
function CheckListDashboardComponent_Conditional_40_For_2_For_40_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 33);
  }
  if (rf & 2) {
    const country_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.flagUi(country_r5).src, \u0275\u0275sanitizeUrl);
  }
}
function CheckListDashboardComponent_Conditional_40_For_2_For_40_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(country_r5.slice(0, 2));
  }
}
function CheckListDashboardComponent_Conditional_40_For_2_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275template(1, CheckListDashboardComponent_Conditional_40_For_2_For_40_Case_1_Template, 1, 1, "img", 33)(2, CheckListDashboardComponent_Conditional_40_For_2_For_40_Case_2_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_25_0;
    const country_r5 = ctx.$implicit;
    const \u0275$index_145_r6 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("margin-left", \u0275$index_145_r6 ? -8 : 0, "px")("z-index", 10 - \u0275$index_145_r6);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_25_0 = ctx_r0.flagUi(country_r5).k) === "img" ? 1 : 2);
  }
}
function CheckListDashboardComponent_Conditional_40_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 8)(1, "div", 20)(2, "a", 21)(3, "h3", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "button", 24);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275listener("click", function CheckListDashboardComponent_Conditional_40_For_2_Template_button_click_9_listener($event) {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.toggleStatus(item_r4);
      $event.preventDefault();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 25);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275listener("click", function CheckListDashboardComponent_Conditional_40_For_2_Template_button_click_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      $event.preventDefault();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(16, "mat-icon", 26);
    \u0275\u0275text(17, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-menu", null, 0)(20, "button", 27);
    \u0275\u0275listener("click", function CheckListDashboardComponent_Conditional_40_For_2_Template_button_click_20_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setStatus(item_r4, "active"));
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 27);
    \u0275\u0275listener("click", function CheckListDashboardComponent_Conditional_40_For_2_Template_button_click_26_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setStatus(item_r4, "draft"));
    });
    \u0275\u0275elementStart(27, "mat-icon");
    \u0275\u0275text(28, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 28);
    \u0275\u0275listener("click", function CheckListDashboardComponent_Conditional_40_For_2_Template_button_click_32_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.askDelete(item_r4));
    });
    \u0275\u0275elementStart(33, "mat-icon");
    \u0275\u0275text(34, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(38, "a", 29);
    \u0275\u0275repeaterCreate(39, CheckListDashboardComponent_Conditional_40_For_2_For_40_Template, 3, 5, "span", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(41, "span", 31);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const listMenu_r7 = \u0275\u0275reference(19);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(35, _c1, item_r4._id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r4.featureCodes.length, " ", \u0275\u0275pipeBind1(7, 17, "checkList.servicesSaved"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-on", item_r4.status === "active");
    \u0275\u0275attribute("aria-label", item_r4.status === "active" ? \u0275\u0275pipeBind1(10, 19, "checkList.markDraft") : \u0275\u0275pipeBind1(11, 21, "checkList.markActive"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 23, item_r4.status === "active" ? "checkList.status.active" : "checkList.status.draft"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", listMenu_r7);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 25, "checkList.moreActions"));
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", item_r4.status === "active");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 27, "checkList.markActive"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", item_r4.status === "draft");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 29, "checkList.markDraft"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 31, "checkList.delete"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(37, _c1, item_r4._id));
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r4.countries.slice(0, 4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r4.countries.join(", ") || \u0275\u0275pipeBind1(43, 33, "checkList.noCountries"), " ");
  }
}
function CheckListDashboardComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, CheckListDashboardComponent_Conditional_40_For_2_Template, 44, 39, "article", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.lists());
  }
}
var CheckListDashboardComponent = class _CheckListDashboardComponent {
  constructor() {
    this._service = inject(CheckListService);
    this._user = inject(UserService);
    this._router = inject(Router);
    this._authGate = inject(AuthRequiredGateService);
    this._confirm = inject(FuseConfirmationService);
    this._transloco = inject(TranslocoService);
    this.lists = this._service.lists;
    this.loading = this._service.loading;
    this.error = this._service.error;
    this.user = toSignal(this._user.user$, { initialValue: null });
    this.firstName = computed(() => {
      const name = this.user()?.name?.trim();
      return name ? name.split(/\s+/)[0] : "there";
    });
    this.countryCount = computed(() => {
      const countries = /* @__PURE__ */ new Set();
      for (const item of this.lists()) {
        item.countries.forEach((country) => countries.add(country));
      }
      return countries.size;
    });
    this.serviceCount = computed(() => this.lists().reduce((sum, item) => sum + (item.featureCodes?.length || 0), 0));
  }
  ngOnInit() {
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => this._service.list().subscribe(),
      dialogData: {
        titleKey: "checkList.authRequiredTitle",
        bodyKey: "checkList.authRequiredBody"
      }
    });
  }
  startNew() {
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => this._router.navigate(["/check-list/new"]),
      dialogData: {
        titleKey: "checkList.authRequiredTitle",
        bodyKey: "checkList.authRequiredBody"
      }
    });
  }
  toggleStatus(item) {
    this.setStatus(item, item.status === "active" ? "draft" : "active");
  }
  setStatus(item, status) {
    if (item.status === status)
      return;
    this._service.update(item._id, { status }).subscribe({
      error: () => this._service.error.set("checkList.errors.saveFailed")
    });
  }
  askDelete(item) {
    this._confirm.open({
      title: this._transloco.translate("checkList.deleteTitle"),
      message: this._transloco.translate("checkList.deleteBody", { name: item.name }),
      actions: {
        confirm: { label: this._transloco.translate("checkList.deleteConfirm") },
        cancel: { label: this._transloco.translate("checkList.deleteCancel") }
      }
    }).afterClosed().subscribe((result) => {
      if (result !== "confirmed")
        return;
      this._service.destroy(item._id).subscribe({
        error: () => this._service.error.set("checkList.errors.deleteFailed")
      });
    });
  }
  flagUi(country) {
    return postmanCountryFlagUi(country);
  }
  static {
    this.\u0275fac = function CheckListDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckListDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckListDashboardComponent, selectors: [["app-check-list-dashboard"]], decls: 41, vars: 29, consts: [["listMenu", "matMenu"], [1, "check-list-root"], [1, "check-list-wrap"], [1, "mb-8", "flex", "flex-wrap", "items-end", "justify-between", "gap-4"], [1, "check-list-display", "mb-2", "text-2xl"], [1, "max-w-2xl", "text-sm", "text-[var(--cl-muted)]"], ["type", "button", 1, "check-list-cta", "check-list-pill", 3, "click"], [1, "grid", "gap-3", "sm:grid-cols-3"], [1, "check-list-card", "p-5"], [1, "text-xs", "font-medium", "text-[var(--cl-muted)]"], [1, "check-list-display", "mt-2", "text-3xl"], [1, "mt-6", "text-sm", "text-rose-600"], [1, "mt-8"], [1, "mb-4", "flex", "items-center", "justify-between"], [1, "text-base", "font-semibold"], [1, "check-list-card", "p-6", "text-sm", "text-[var(--cl-muted)]"], [1, "check-list-card", "flex", "flex-col", "items-start", "gap-3", "p-6"], [1, "grid", "gap-3", "md:grid-cols-2"], [1, "check-list-display", "text-xl"], [1, "max-w-lg", "text-sm", "text-[var(--cl-muted)]"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "min-w-0", "flex-1", 3, "routerLink"], [1, "mt-1", "text-sm", "text-[var(--cl-muted)]"], [1, "flex", "shrink-0", "items-center", "gap-1"], ["type", "button", 1, "check-list-pill", 3, "click"], ["type", "button", 1, "check-list-icon-btn", 3, "click", "matMenuTriggerFor"], [1, "!h-5", "!w-5", "!text-[20px]"], ["mat-menu-item", "", "type", "button", 3, "click", "disabled"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "mt-4", "flex", "items-center", 3, "routerLink"], [1, "relative", "inline-flex", "h-8", "w-8", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border-2", "border-[var(--cl-card)]", "bg-[var(--cl-card)]", 3, "margin-left", "z-index"], [1, "ml-3", "text-sm", "text-[var(--cl-muted)]"], [1, "relative", "inline-flex", "h-8", "w-8", "items-center", "justify-center", "overflow-hidden", "rounded-full", "border-2", "border-[var(--cl-card)]", "bg-[var(--cl-card)]"], ["alt", "", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "text-[10px]", "font-bold"]], template: function CheckListDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "header", 3)(3, "div")(4, "h1", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 6);
        \u0275\u0275listener("click", function CheckListDashboardComponent_Template_button_click_10_listener() {
          return ctx.startNew();
        });
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "section", 7)(14, "article", 8)(15, "p", 9);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 10);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "article", 8)(21, "p", 9);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p", 10);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "article", 8)(27, "p", 9);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 10);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(32, CheckListDashboardComponent_Conditional_32_Template, 3, 3, "p", 11);
        \u0275\u0275elementStart(33, "section", 12)(34, "div", 13)(35, "h2", 14);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, CheckListDashboardComponent_Conditional_38_Template, 3, 3, "div", 15)(39, CheckListDashboardComponent_Conditional_39_Template, 10, 9, "div", 16)(40, CheckListDashboardComponent_Conditional_40_Template, 3, 0, "div", 17);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 12, "checkList.hello", \u0275\u0275pureFunction1(27, _c0, ctx.firstName())), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 15, "checkList.dashboardSubtitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 17, "checkList.newChecklist"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "checkList.stats.lists"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.lists().length);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 21, "checkList.stats.countries"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.countryCount());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 23, "checkList.stats.services"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.serviceCount());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 32 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 25, "checkList.yourLists"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 38 : !ctx.lists().length ? 39 : 40);
      }
    }, dependencies: [CommonModule, RouterLink, MatButtonModule, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, TranslocoPipe], styles: ['/* src/app/modules/check-list/check-list.styles.scss */\n.check-list-root {\n  --cl-ink: rgb(15, 23, 42);\n  --cl-muted: rgb(100, 116, 139);\n  --cl-paper: rgb(248, 250, 252);\n  --cl-card: rgb(255, 255, 255);\n  --cl-line: rgba(148, 163, 184, 0.22);\n  --cl-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  --cl-accent: rgb(37, 99, 235);\n  position: absolute;\n  inset: 0;\n  overflow: auto;\n  color: var(--cl-ink);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(37, 99, 235, 0.09),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(14, 165, 233, 0.07),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n.check-list-root * {\n  box-sizing: border-box;\n}\n.check-list-wrap {\n  width: min(1200px, 100% - 3rem);\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n.check-list-display {\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n  color: var(--cl-ink);\n}\n.check-list-card {\n  background: var(--cl-card);\n  border: 1px solid var(--cl-line);\n  border-radius: 16px;\n  box-shadow: var(--cl-shadow);\n}\n.check-list-card.is-selected,\n.check-list-card.is-active {\n  border-color: rgba(37, 99, 235, 0.45);\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);\n}\n.check-list-price {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-paper);\n  color: var(--cl-muted);\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.check-list-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n  font-size: 13px;\n  font-weight: 600;\n  transition:\n    border-color 150ms ease,\n    background 150ms ease,\n    box-shadow 150ms ease;\n}\n.check-list-pill:hover {\n  border-color: rgba(37, 99, 235, 0.45);\n}\n.check-list-pill.is-on,\n.check-list-cta {\n  background: rgb(15, 23, 42);\n  color: rgb(255, 255, 255);\n  border-color: transparent;\n}\n.check-list-cta {\n  min-height: 40px;\n  padding: 0 18px;\n}\n.check-list-field {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  padding: 0.75rem 0.9rem;\n  font-size: 0.875rem;\n  color: var(--cl-ink);\n}\n.check-list-pill:disabled,\n.check-list-cta:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-pill.is-readonly {\n  pointer-events: none;\n}\n.check-list-icon-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: var(--cl-muted);\n}\n.check-list-icon-btn:hover {\n  background: rgba(148, 163, 184, 0.16);\n  color: var(--cl-ink);\n}\n.check-list-pill.is-danger:hover {\n  border-color: rgba(244, 63, 94, 0.55);\n  color: rgb(225, 29, 72);\n}\n.check-list-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.check-list-tab {\n  min-height: 34px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--cl-muted);\n  font-size: 13px;\n  font-weight: 600;\n}\n.check-list-tab.is-on {\n  border-color: var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n}\n.check-list-tab:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-drawer {\n  width: min(52rem, 100%);\n}\n.check-list-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 999px;\n  animation: check-list-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.check-list-spinner-lg {\n  width: 36px;\n  height: 36px;\n  border-width: 3px;\n  border-color: var(--cl-accent);\n  border-right-color: transparent;\n}\n.check-list-json {\n  margin: 0;\n  overflow: auto;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 12px;\n  line-height: 1.55;\n  white-space: pre-wrap;\n  word-break: break-word;\n  color: var(--cl-ink);\n}\n@keyframes check-list-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dark .check-list-root {\n  --cl-ink: rgb(248, 250, 252);\n  --cl-muted: rgb(148, 163, 184);\n  --cl-paper: rgb(15, 23, 42);\n  --cl-card: rgb(30, 41, 59);\n  --cl-line: rgba(148, 163, 184, 0.18);\n  --cl-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(56, 189, 248, 0.08),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.dark .check-list-card.is-selected,\n.dark .check-list-card.is-active {\n  border-color: rgba(96, 165, 250, 0.45);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n.dark .check-list-pill:hover {\n  border-color: rgba(96, 165, 250, 0.45);\n}\n.dark .check-list-pill.is-danger:hover {\n  border-color: rgba(251, 113, 133, 0.55);\n  color: rgb(251, 113, 133);\n}\n.dark .check-list-pill.is-on,\n.dark .check-list-cta {\n  background: rgb(226, 232, 240);\n  color: rgb(15, 23, 42);\n}\n/*# sourceMappingURL=check-list.styles.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckListDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-check-list-dashboard", standalone: true, imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule, MatMenuModule, TranslocoPipe], encapsulation: ViewEncapsulation.None, template: `
        <div class="check-list-root">
            <div class="check-list-wrap">
                <header class="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h1 class="check-list-display mb-2 text-2xl">
                            {{ 'checkList.hello' | transloco: { name: firstName() } }}
                        </h1>
                        <p class="max-w-2xl text-sm text-[var(--cl-muted)]">
                            {{ 'checkList.dashboardSubtitle' | transloco }}
                        </p>
                    </div>
                    <button type="button" class="check-list-cta check-list-pill" (click)="startNew()">
                        {{ 'checkList.newChecklist' | transloco }}
                    </button>
                </header>

                <section class="grid gap-3 sm:grid-cols-3">
                    <article class="check-list-card p-5">
                        <p class="text-xs font-medium text-[var(--cl-muted)]">{{ 'checkList.stats.lists' | transloco }}</p>
                        <p class="check-list-display mt-2 text-3xl">{{ lists().length }}</p>
                    </article>
                    <article class="check-list-card p-5">
                        <p class="text-xs font-medium text-[var(--cl-muted)]">{{ 'checkList.stats.countries' | transloco }}</p>
                        <p class="check-list-display mt-2 text-3xl">{{ countryCount() }}</p>
                    </article>
                    <article class="check-list-card p-5">
                        <p class="text-xs font-medium text-[var(--cl-muted)]">{{ 'checkList.stats.services' | transloco }}</p>
                        <p class="check-list-display mt-2 text-3xl">{{ serviceCount() }}</p>
                    </article>
                </section>

                @if (error()) {
                    <p class="mt-6 text-sm text-rose-600">{{ error() | transloco }}</p>
                }

                <section class="mt-8">
                    <div class="mb-4 flex items-center justify-between">
                        <h2 class="text-base font-semibold">{{ 'checkList.yourLists' | transloco }}</h2>
                    </div>
                    @if (loading()) {
                        <div class="check-list-card p-6 text-sm text-[var(--cl-muted)]">
                            {{ 'checkList.loading' | transloco }}
                        </div>
                    } @else if (!lists().length) {
                        <div class="check-list-card flex flex-col items-start gap-3 p-6">
                            <p class="check-list-display text-xl">{{ 'checkList.emptyTitle' | transloco }}</p>
                            <p class="max-w-lg text-sm text-[var(--cl-muted)]">{{ 'checkList.emptyBody' | transloco }}</p>
                            <button type="button" class="check-list-cta check-list-pill" (click)="startNew()">
                                {{ 'checkList.startFirst' | transloco }}
                            </button>
                        </div>
                    } @else {
                        <div class="grid gap-3 md:grid-cols-2">
                            @for (item of lists(); track item._id) {
                                <article class="check-list-card p-5">
                                    <div class="flex items-start justify-between gap-3">
                                        <a class="min-w-0 flex-1" [routerLink]="['/check-list', item._id]">
                                            <h3 class="text-base font-semibold">{{ item.name }}</h3>
                                            <p class="mt-1 text-sm text-[var(--cl-muted)]">
                                                {{ item.featureCodes.length }}
                                                {{ 'checkList.servicesSaved' | transloco }}
                                            </p>
                                        </a>
                                        <div class="flex shrink-0 items-center gap-1">
                                            <button
                                                type="button"
                                                class="check-list-pill"
                                                [class.is-on]="item.status === 'active'"
                                                [attr.aria-label]="
                                                    item.status === 'active'
                                                        ? ('checkList.markDraft' | transloco)
                                                        : ('checkList.markActive' | transloco)
                                                "
                                                (click)="toggleStatus(item); $event.preventDefault(); $event.stopPropagation()"
                                            >
                                                {{
                                                    (item.status === 'active'
                                                        ? 'checkList.status.active'
                                                        : 'checkList.status.draft'
                                                    ) | transloco
                                                }}
                                            </button>
                                            <button
                                                type="button"
                                                class="check-list-icon-btn"
                                                [matMenuTriggerFor]="listMenu"
                                                [attr.aria-label]="'checkList.moreActions' | transloco"
                                                (click)="$event.preventDefault(); $event.stopPropagation()"
                                            >
                                                <mat-icon class="!h-5 !w-5 !text-[20px]">more_vert</mat-icon>
                                            </button>
                                            <mat-menu #listMenu="matMenu">
                                                <button
                                                    mat-menu-item
                                                    type="button"
                                                    [disabled]="item.status === 'active'"
                                                    (click)="setStatus(item, 'active')"
                                                >
                                                    <mat-icon>check_circle</mat-icon>
                                                    <span>{{ 'checkList.markActive' | transloco }}</span>
                                                </button>
                                                <button
                                                    mat-menu-item
                                                    type="button"
                                                    [disabled]="item.status === 'draft'"
                                                    (click)="setStatus(item, 'draft')"
                                                >
                                                    <mat-icon>edit_note</mat-icon>
                                                    <span>{{ 'checkList.markDraft' | transloco }}</span>
                                                </button>
                                                <button mat-menu-item type="button" (click)="askDelete(item)">
                                                    <mat-icon>delete</mat-icon>
                                                    <span>{{ 'checkList.delete' | transloco }}</span>
                                                </button>
                                            </mat-menu>
                                        </div>
                                    </div>
                                    <a class="mt-4 flex items-center" [routerLink]="['/check-list', item._id]">
                                        @for (country of item.countries.slice(0, 4); track country; let i = $index) {
                                            <span
                                                class="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--cl-card)] bg-[var(--cl-card)]"
                                                [style.margin-left.px]="i ? -8 : 0"
                                                [style.z-index]="10 - i"
                                            >
                                                @switch (flagUi(country).k) {
                                                    @case ('img') {
                                                        <img [src]="$any(flagUi(country)).src" alt="" class="h-full w-full object-cover" />
                                                    }
                                                    @default {
                                                        <span class="text-[10px] font-bold">{{ country.slice(0, 2) }}</span>
                                                    }
                                                }
                                            </span>
                                        }
                                        <span class="ml-3 text-sm text-[var(--cl-muted)]">
                                            {{ item.countries.join(', ') || ('checkList.noCountries' | transloco) }}
                                        </span>
                                    </a>
                                </article>
                            }
                        </div>
                    }
                </section>
            </div>
        </div>
    `, styles: ['/* src/app/modules/check-list/check-list.styles.scss */\n.check-list-root {\n  --cl-ink: rgb(15, 23, 42);\n  --cl-muted: rgb(100, 116, 139);\n  --cl-paper: rgb(248, 250, 252);\n  --cl-card: rgb(255, 255, 255);\n  --cl-line: rgba(148, 163, 184, 0.22);\n  --cl-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  --cl-accent: rgb(37, 99, 235);\n  position: absolute;\n  inset: 0;\n  overflow: auto;\n  color: var(--cl-ink);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(37, 99, 235, 0.09),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(14, 165, 233, 0.07),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n.check-list-root * {\n  box-sizing: border-box;\n}\n.check-list-wrap {\n  width: min(1200px, 100% - 3rem);\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n.check-list-display {\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n  color: var(--cl-ink);\n}\n.check-list-card {\n  background: var(--cl-card);\n  border: 1px solid var(--cl-line);\n  border-radius: 16px;\n  box-shadow: var(--cl-shadow);\n}\n.check-list-card.is-selected,\n.check-list-card.is-active {\n  border-color: rgba(37, 99, 235, 0.45);\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);\n}\n.check-list-price {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-paper);\n  color: var(--cl-muted);\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.check-list-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n  font-size: 13px;\n  font-weight: 600;\n  transition:\n    border-color 150ms ease,\n    background 150ms ease,\n    box-shadow 150ms ease;\n}\n.check-list-pill:hover {\n  border-color: rgba(37, 99, 235, 0.45);\n}\n.check-list-pill.is-on,\n.check-list-cta {\n  background: rgb(15, 23, 42);\n  color: rgb(255, 255, 255);\n  border-color: transparent;\n}\n.check-list-cta {\n  min-height: 40px;\n  padding: 0 18px;\n}\n.check-list-field {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  padding: 0.75rem 0.9rem;\n  font-size: 0.875rem;\n  color: var(--cl-ink);\n}\n.check-list-pill:disabled,\n.check-list-cta:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-pill.is-readonly {\n  pointer-events: none;\n}\n.check-list-icon-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: var(--cl-muted);\n}\n.check-list-icon-btn:hover {\n  background: rgba(148, 163, 184, 0.16);\n  color: var(--cl-ink);\n}\n.check-list-pill.is-danger:hover {\n  border-color: rgba(244, 63, 94, 0.55);\n  color: rgb(225, 29, 72);\n}\n.check-list-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.check-list-tab {\n  min-height: 34px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--cl-muted);\n  font-size: 13px;\n  font-weight: 600;\n}\n.check-list-tab.is-on {\n  border-color: var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n}\n.check-list-tab:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-drawer {\n  width: min(52rem, 100%);\n}\n.check-list-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 999px;\n  animation: check-list-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.check-list-spinner-lg {\n  width: 36px;\n  height: 36px;\n  border-width: 3px;\n  border-color: var(--cl-accent);\n  border-right-color: transparent;\n}\n.check-list-json {\n  margin: 0;\n  overflow: auto;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 12px;\n  line-height: 1.55;\n  white-space: pre-wrap;\n  word-break: break-word;\n  color: var(--cl-ink);\n}\n@keyframes check-list-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dark .check-list-root {\n  --cl-ink: rgb(248, 250, 252);\n  --cl-muted: rgb(148, 163, 184);\n  --cl-paper: rgb(15, 23, 42);\n  --cl-card: rgb(30, 41, 59);\n  --cl-line: rgba(148, 163, 184, 0.18);\n  --cl-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(56, 189, 248, 0.08),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.dark .check-list-card.is-selected,\n.dark .check-list-card.is-active {\n  border-color: rgba(96, 165, 250, 0.45);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n.dark .check-list-pill:hover {\n  border-color: rgba(96, 165, 250, 0.45);\n}\n.dark .check-list-pill.is-danger:hover {\n  border-color: rgba(251, 113, 133, 0.55);\n  color: rgb(251, 113, 133);\n}\n.dark .check-list-pill.is-on,\n.dark .check-list-cta {\n  background: rgb(226, 232, 240);\n  color: rgb(15, 23, 42);\n}\n/*# sourceMappingURL=check-list.styles.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckListDashboardComponent, { className: "CheckListDashboardComponent", filePath: "src/app/modules/check-list/check-list-dashboard.component.ts", lineNumber: 170 });
})();

// src/app/modules/check-list/check-list-request.service.ts
var CheckListRequestService = class _CheckListRequestService {
  constructor() {
    this._http = inject(HttpClient);
    this._session = inject(SessionService);
    this._auth = inject(AuthService);
    this._accountEnv = inject(AccountEnvironmentService);
    this.endpoint = signal(null);
    this.response = signal(null);
    this.responseTime = signal(null);
    this.loading = signal(false);
    this.error = signal(null);
  }
  prepare(endpoint) {
    const copy = JSON.parse(JSON.stringify(endpoint));
    copy.headers?.forEach((header) => {
      if (header.key === "Authorization" && header.value.includes("<token>")) {
        const token = localStorage.getItem("accessToken");
        if (token)
          header.value = header.value.replace("<token>", token);
      }
    });
    if (this._accountEnv.showSandboxStrip()) {
      applyPostmanSandboxParamDefaults(copy);
    }
    const prepared = ensurePostmanIncludeCostParam(mergeParamsFromDocs(copy));
    this.endpoint.set(prepared);
    this.response.set(null);
    this.error.set(null);
    this.responseTime.set(null);
    return prepared;
  }
  updateParam(key, value) {
    this.endpoint.update((current) => {
      if (!current)
        return current;
      const next = __spreadProps(__spreadValues({}, current), { params: current.params?.map((param) => __spreadValues({}, param)) });
      const row = next.params?.find((param) => param.key === key);
      if (row)
        row.value = value;
      if (next.body && typeof next.body === "object" && !Array.isArray(next.body)) {
        next.body = __spreadProps(__spreadValues({}, next.body), { [key]: value });
      }
      return next;
    });
  }
  send() {
    const endpoint = this.endpoint();
    if (!endpoint)
      return;
    const postDraft = endpoint.method === "GET" || endpoint.method === "DELETE" ? void 0 : JSON.stringify(endpoint.body && typeof endpoint.body === "object" ? endpoint.body : {}, null, 2);
    if (getPostmanRequestValidationIssues(endpoint, postDraft).length > 0)
      return;
    if (!this._session.isTokenValid()) {
      this._session.openAuthModal();
      return;
    }
    this.loading.set(true);
    this.response.set(null);
    this.error.set(null);
    const effectiveUrl = buildPostmanEffectiveUrl(endpoint);
    const pathParamKeys = getPostmanPathParamKeysForEndpoint(endpoint);
    const options = {
      headers: {},
      params: {}
    };
    endpoint.headers?.forEach((header) => {
      let value = header.value;
      if (value?.includes("<token>")) {
        value = value.replace("<token>", localStorage.getItem("accessToken") || "");
      }
      options.headers[header.key] = value;
    });
    endpoint.params?.forEach((param) => {
      if (!param.value || pathParamKeys?.includes(param.key) || param.key === POSTMAN_INCLUDE_COST_KEY) {
        return;
      }
      options.params[param.key] = param.key === "sexo" ? normalizePostmanSexoValue(param.value) : param.value;
    });
    let body = null;
    if (endpoint.method !== "GET" && endpoint.method !== "DELETE") {
      body = endpoint.body && typeof endpoint.body === "object" ? __spreadValues({}, endpoint.body) : {};
      if (body && typeof body["sexo"] === "string") {
        body["sexo"] = normalizePostmanSexoValue(String(body["sexo"]));
      }
    }
    const costSend = resolvePostmanIncludeCostForSend(endpoint, endpoint.method);
    if (costSend.query)
      options.params.includeCost = costSend.query;
    if (costSend.body && body)
      body = __spreadProps(__spreadValues({}, body), { includeCost: true });
    const started = Date.now();
    this._http.request(endpoint.method, effectiveUrl, __spreadProps(__spreadValues({}, options), { body, observe: "response" })).pipe(tap((res) => {
      const proof = res.headers?.get("x-validation-proof");
      if (res.body && typeof res.body === "object") {
        res.body["_proof"] = proof || res.body["_proof"];
      }
      this.loading.set(false);
      this.response.set(res);
      this.responseTime.set(Date.now() - started);
      this._refreshCredits(res.status);
    }), catchError((err) => {
      this.loading.set(false);
      if (err?.status === 401) {
        this._session.openAuthModal();
        return of(null);
      }
      this.error.set(err);
      this._refreshCredits(err?.status);
      return of(null);
    })).subscribe();
  }
  clear() {
    this.endpoint.set(null);
    this.response.set(null);
    this.error.set(null);
    this.responseTime.set(null);
    this.loading.set(false);
  }
  _refreshCredits(status) {
    if (!status || status <= 0 || !this._session.isTokenValid())
      return;
    this._auth.refreshSession().subscribe({ error: () => void 0 });
  }
  static {
    this.\u0275fac = function CheckListRequestService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckListRequestService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CheckListRequestService, factory: _CheckListRequestService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckListRequestService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/check-list/check-list-detail.component.ts
var _c02 = (a0) => ({ value: a0 });
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function CheckListDetailComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function CheckListDetailComponent_For_25_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab.set(tab_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-on", ctx_r2.activeTab() === tab_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, tab_r2.key), " ");
  }
}
function CheckListDetailComponent_Conditional_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "checkList.loadingDetails"), " ");
  }
}
function CheckListDetailComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "postman-about-endpoint", 17);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("docs", (tmp_2_0 = ctx_r2.endpoint()) == null ? null : tmp_2_0.docs)("endpoint", ctx_r2.endpoint());
  }
}
function CheckListDetailComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CheckListDetailComponent_Conditional_27_Conditional_0_Template, 3, 3, "p", 16)(1, CheckListDetailComponent_Conditional_27_Conditional_1_Template, 1, 2, "postman-about-endpoint", 17);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.detailLoading() && !((tmp_1_0 = ctx_r2.endpoint()) == null ? null : tmp_1_0.docs) ? 0 : 1);
  }
}
function CheckListDetailComponent_Conditional_28_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function CheckListDetailComponent_Conditional_28_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "checkList.optional"), " ");
  }
}
function CheckListDetailComponent_Conditional_28_For_5_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    \u0275\u0275property("value", option_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r7);
  }
}
function CheckListDetailComponent_Conditional_28_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 28);
    \u0275\u0275listener("ngModelChange", function CheckListDetailComponent_Conditional_28_For_5_Conditional_5_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const param_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.request.updateParam(param_r6.key, $event));
    });
    \u0275\u0275elementStart(1, "option", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, CheckListDetailComponent_Conditional_28_For_5_Conditional_5_For_5_Template, 2, 2, "option", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", param_r6.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "checkList.chooseValue"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(param_r6.enum);
  }
}
function CheckListDetailComponent_Conditional_28_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 31);
    \u0275\u0275listener("ngModelChange", function CheckListDetailComponent_Conditional_28_For_5_Conditional_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const param_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.request.updateParam(param_r6.key, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", param_r6.value)("placeholder", param_r6.description || param_r6.key);
  }
}
function CheckListDetailComponent_Conditional_28_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 19)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275template(3, CheckListDetailComponent_Conditional_28_For_5_Conditional_3_Template, 2, 0, "span", 24)(4, CheckListDetailComponent_Conditional_28_For_5_Conditional_4_Template, 3, 3, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CheckListDetailComponent_Conditional_28_For_5_Conditional_5_Template, 6, 4, "select", 26)(6, CheckListDetailComponent_Conditional_28_For_5_Conditional_6_Template, 1, 2, "input", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const param_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", param_r6.key, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(param_r6.required ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((param_r6.enum == null ? null : param_r6.enum.length) ? 5 : 6);
  }
}
function CheckListDetailComponent_Conditional_28_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
function CheckListDetailComponent_Conditional_28_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "checkList.fillRequired"));
  }
}
function CheckListDetailComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 13)(1, "h4", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, CheckListDetailComponent_Conditional_28_For_5_Template, 7, 3, "label", 19, _forTrack1);
    \u0275\u0275elementStart(6, "button", 20);
    \u0275\u0275listener("click", function CheckListDetailComponent_Conditional_28_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.run());
    });
    \u0275\u0275template(7, CheckListDetailComponent_Conditional_28_Conditional_7_Template, 1, 0, "span", 21);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CheckListDetailComponent_Conditional_28_Conditional_11_Template, 3, 3, "p", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "checkList.tryIt"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.visibleParams());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.request.loading() || !ctx_r2.canSend());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.request.loading() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.request.loading() ? \u0275\u0275pipeBind1(9, 7, "checkList.running") : \u0275\u0275pipeBind1(10, 9, "checkList.runCheck"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.issues().length ? 11 : -1);
  }
}
function CheckListDetailComponent_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "span", 34);
    \u0275\u0275elementStart(2, "p", 33);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "checkList.waitingResult"));
  }
}
function CheckListDetailComponent_Conditional_29_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" \xB7 ", ctx, "ms ");
  }
}
function CheckListDetailComponent_Conditional_29_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "postman-json-table", 39);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("data", ctx_r2.displayPayload());
  }
}
function CheckListDetailComponent_Conditional_29_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.displayPayload()));
  }
}
function CheckListDetailComponent_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "p", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275template(4, CheckListDetailComponent_Conditional_29_Conditional_2_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37)(6, "button", 15);
    \u0275\u0275listener("click", function CheckListDetailComponent_Conditional_29_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resultView.set("table"));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 15);
    \u0275\u0275listener("click", function CheckListDetailComponent_Conditional_29_Conditional_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resultView.set("json"));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 38);
    \u0275\u0275template(13, CheckListDetailComponent_Conditional_29_Conditional_2_Conditional_13_Template, 1, 1, "postman-json-table", 39)(14, CheckListDetailComponent_Conditional_29_Conditional_2_Conditional_14_Template, 3, 3, "pre", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, "checkList.result"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = ctx_r2.request.responseTime()) ? 4 : -1, tmp_3_0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-on", ctx_r2.resultView() === "table");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 11, "postman.responseViewer.viewMode.table"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-on", ctx_r2.resultView() === "json");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, "postman.responseViewer.viewMode.json"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.resultView() === "table" ? 13 : 14);
  }
}
function CheckListDetailComponent_Conditional_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "checkList.noResult"));
  }
}
function CheckListDetailComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14);
    \u0275\u0275template(1, CheckListDetailComponent_Conditional_29_Conditional_1_Template, 5, 3, "div", 32)(2, CheckListDetailComponent_Conditional_29_Conditional_2_Template, 15, 15)(3, CheckListDetailComponent_Conditional_29_Conditional_3_Template, 3, 3, "p", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.request.loading() ? 1 : ctx_r2.request.response() || ctx_r2.request.error() ? 2 : 3);
  }
}
var CheckListDetailComponent = class _CheckListDetailComponent {
  constructor() {
    this._transloco = inject(TranslocoService);
    this._postman = inject(PostmanService);
    this.request = inject(CheckListRequestService);
    this.detailLoading = this._postman.detailLoading;
    this.endpoint = input(null);
    this.saved = input(false);
    this.closed = output();
    this.toggleSaved = output();
    this.batch = output();
    this.activeTab = signal("about");
    this.resultView = signal("table");
    this.tabs = [
      { id: "about", key: "checkList.tabs.about" },
      { id: "request", key: "checkList.tabs.request" },
      { id: "result", key: "checkList.tabs.result" }
    ];
    this.copy = computed(() => {
      const endpoint = this.endpoint();
      if (!endpoint)
        return { title: "", description: "" };
      const catalog = getAppFeatureCatalogCopy(this._transloco, endpoint.code);
      return resolvePostmanEndpointCopy({
        endpoint,
        catalogTitle: catalog.title || endpoint.label,
        catalogDescription: catalog.description || endpoint.description || "",
        locale: this._transloco.getActiveLang()
      });
    });
    this.title = computed(() => this.copy().title);
    this.description = computed(() => this.copy().description);
    this.costLabel = computed(() => formatCatalogPrice(this.endpoint()?.estimatedCost));
    this.visibleParams = computed(() => (this.request.endpoint()?.params || []).filter((param) => param.system !== "includeCost"));
    this.issues = computed(() => {
      const endpoint = this.request.endpoint();
      if (!endpoint)
        return [];
      const postDraft = endpoint.method === "GET" || endpoint.method === "DELETE" ? void 0 : JSON.stringify(endpoint.body && typeof endpoint.body === "object" ? endpoint.body : {});
      return getPostmanRequestValidationIssues(endpoint, postDraft);
    });
    this.canSend = computed(() => this.issues().length === 0);
    this.displayPayload = computed(() => {
      const response = this.request.response();
      const raw = response ? response.body ?? response : this.request.error()?.error ?? this.request.error();
      return sanitizeDisplayPayload(raw);
    });
    effect(() => {
      this.endpoint();
      untracked(() => {
        this.activeTab.set("about");
        this.resultView.set("table");
      });
    });
  }
  run() {
    this.activeTab.set("result");
    this.request.send();
  }
  static {
    this.\u0275fac = function CheckListDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckListDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckListDetailComponent, selectors: [["app-check-list-detail"]], inputs: { endpoint: [1, "endpoint"], saved: [1, "saved"] }, outputs: { closed: "closed", toggleSaved: "toggleSaved", batch: "batch" }, decls: 30, vars: 20, consts: [[1, "check-list-card", "flex", "h-full", "min-h-0", "flex-col", "overflow-hidden"], [1, "flex", "items-start", "justify-between", "gap-3", "border-b", "border-[var(--cl-line)]", "p-5"], [1, "text-xs", "font-semibold", "uppercase", "tracking-[0.18em]", "text-[var(--cl-muted)]"], [1, "mt-1", "text-lg", "font-semibold"], [1, "mt-2", "text-sm", "text-[var(--cl-muted)]"], ["type", "button", 1, "check-list-pill", 3, "click"], [1, "!h-4", "!w-4", "!text-[16px]"], [1, "flex", "flex-wrap", "gap-2", "border-b", "border-[var(--cl-line)]", "px-5", "py-3"], [1, "check-list-pill"], ["type", "button", 1, "check-list-cta", "check-list-pill", 3, "click"], [1, "check-list-tabs", "px-5", "pt-3"], ["type", "button", 1, "check-list-tab", 3, "is-on"], [1, "min-h-0", "flex-1", "overflow-auto"], [1, "space-y-3", "p-5"], [1, "p-5"], ["type", "button", 1, "check-list-tab", 3, "click"], [1, "p-5", "text-sm", "text-[var(--cl-muted)]"], [3, "docs", "endpoint"], [1, "text-sm", "font-semibold"], [1, "block"], ["type", "button", 1, "check-list-cta", "check-list-pill", "w-full", 3, "click", "disabled"], [1, "check-list-spinner"], [1, "text-xs", "text-rose-600"], [1, "mb-1", "block", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-[var(--cl-muted)]"], [1, "text-rose-500"], [1, "font-medium", "normal-case", "tracking-normal"], [1, "check-list-field", 3, "ngModel"], [1, "check-list-field", 3, "ngModel", "placeholder"], [1, "check-list-field", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "check-list-field", 3, "ngModelChange", "ngModel", "placeholder"], [1, "flex", "min-h-48", "flex-col", "items-center", "justify-center", "gap-3"], [1, "text-sm", "text-[var(--cl-muted)]"], [1, "check-list-spinner", "check-list-spinner-lg"], [1, "mb-3", "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-[var(--cl-muted)]"], [1, "check-list-tabs"], [1, "rounded-xl", "border", "border-[var(--cl-line)]", "p-4"], [3, "data"], [1, "check-list-json"]], template: function CheckListDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "header", 1)(2, "div")(3, "p", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h3", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function CheckListDetailComponent_Template_button_click_9_listener() {
          return ctx.closed.emit();
        });
        \u0275\u0275elementStart(10, "mat-icon", 6);
        \u0275\u0275text(11, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 7)(13, "span", 8);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 5);
        \u0275\u0275listener("click", function CheckListDetailComponent_Template_button_click_16_listener() {
          return ctx.toggleSaved.emit();
        });
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 9);
        \u0275\u0275listener("click", function CheckListDetailComponent_Template_button_click_20_listener() {
          return ctx.batch.emit();
        });
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10);
        \u0275\u0275repeaterCreate(24, CheckListDetailComponent_For_25_Template, 3, 5, "button", 11, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 12);
        \u0275\u0275template(27, CheckListDetailComponent_Conditional_27_Template, 2, 1)(28, CheckListDetailComponent_Conditional_28_Template, 12, 11, "section", 13)(29, CheckListDetailComponent_Conditional_29_Template, 4, 1, "section", 14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", (tmp_0_0 = ctx.endpoint()) == null ? null : tmp_0_0.country, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.description());
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 9, "checkList.cost", \u0275\u0275pureFunction1(18, _c02, ctx.costLabel())), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.saved() ? \u0275\u0275pipeBind1(18, 12, "checkList.removeFromList") : \u0275\u0275pipeBind1(19, 14, "checkList.addToList"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 16, "checkList.createSmartBatch"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.activeTab() === "about" ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "request" ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "result" ? 29 : -1);
      }
    }, dependencies: [
      CommonModule,
      JsonPipe,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      MatIconModule,
      MatIcon,
      TranslocoPipe,
      AboutEndpointComponent,
      JsonTableComponent
    ], styles: ['/* src/app/modules/check-list/check-list.styles.scss */\n.check-list-root {\n  --cl-ink: rgb(15, 23, 42);\n  --cl-muted: rgb(100, 116, 139);\n  --cl-paper: rgb(248, 250, 252);\n  --cl-card: rgb(255, 255, 255);\n  --cl-line: rgba(148, 163, 184, 0.22);\n  --cl-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  --cl-accent: rgb(37, 99, 235);\n  position: absolute;\n  inset: 0;\n  overflow: auto;\n  color: var(--cl-ink);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(37, 99, 235, 0.09),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(14, 165, 233, 0.07),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n.check-list-root * {\n  box-sizing: border-box;\n}\n.check-list-wrap {\n  width: min(1200px, 100% - 3rem);\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n.check-list-display {\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n  color: var(--cl-ink);\n}\n.check-list-card {\n  background: var(--cl-card);\n  border: 1px solid var(--cl-line);\n  border-radius: 16px;\n  box-shadow: var(--cl-shadow);\n}\n.check-list-card.is-selected,\n.check-list-card.is-active {\n  border-color: rgba(37, 99, 235, 0.45);\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);\n}\n.check-list-price {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-paper);\n  color: var(--cl-muted);\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.check-list-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n  font-size: 13px;\n  font-weight: 600;\n  transition:\n    border-color 150ms ease,\n    background 150ms ease,\n    box-shadow 150ms ease;\n}\n.check-list-pill:hover {\n  border-color: rgba(37, 99, 235, 0.45);\n}\n.check-list-pill.is-on,\n.check-list-cta {\n  background: rgb(15, 23, 42);\n  color: rgb(255, 255, 255);\n  border-color: transparent;\n}\n.check-list-cta {\n  min-height: 40px;\n  padding: 0 18px;\n}\n.check-list-field {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  padding: 0.75rem 0.9rem;\n  font-size: 0.875rem;\n  color: var(--cl-ink);\n}\n.check-list-pill:disabled,\n.check-list-cta:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-pill.is-readonly {\n  pointer-events: none;\n}\n.check-list-icon-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: var(--cl-muted);\n}\n.check-list-icon-btn:hover {\n  background: rgba(148, 163, 184, 0.16);\n  color: var(--cl-ink);\n}\n.check-list-pill.is-danger:hover {\n  border-color: rgba(244, 63, 94, 0.55);\n  color: rgb(225, 29, 72);\n}\n.check-list-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.check-list-tab {\n  min-height: 34px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--cl-muted);\n  font-size: 13px;\n  font-weight: 600;\n}\n.check-list-tab.is-on {\n  border-color: var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n}\n.check-list-tab:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-drawer {\n  width: min(52rem, 100%);\n}\n.check-list-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 999px;\n  animation: check-list-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.check-list-spinner-lg {\n  width: 36px;\n  height: 36px;\n  border-width: 3px;\n  border-color: var(--cl-accent);\n  border-right-color: transparent;\n}\n.check-list-json {\n  margin: 0;\n  overflow: auto;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 12px;\n  line-height: 1.55;\n  white-space: pre-wrap;\n  word-break: break-word;\n  color: var(--cl-ink);\n}\n@keyframes check-list-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dark .check-list-root {\n  --cl-ink: rgb(248, 250, 252);\n  --cl-muted: rgb(148, 163, 184);\n  --cl-paper: rgb(15, 23, 42);\n  --cl-card: rgb(30, 41, 59);\n  --cl-line: rgba(148, 163, 184, 0.18);\n  --cl-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(56, 189, 248, 0.08),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.dark .check-list-card.is-selected,\n.dark .check-list-card.is-active {\n  border-color: rgba(96, 165, 250, 0.45);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n.dark .check-list-pill:hover {\n  border-color: rgba(96, 165, 250, 0.45);\n}\n.dark .check-list-pill.is-danger:hover {\n  border-color: rgba(251, 113, 133, 0.55);\n  color: rgb(251, 113, 133);\n}\n.dark .check-list-pill.is-on,\n.dark .check-list-cta {\n  background: rgb(226, 232, 240);\n  color: rgb(15, 23, 42);\n}\n/*# sourceMappingURL=check-list.styles.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckListDetailComponent, [{
    type: Component,
    args: [{ selector: "app-check-list-detail", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatIconModule,
      TranslocoPipe,
      AboutEndpointComponent,
      JsonTableComponent
    ], encapsulation: ViewEncapsulation.None, template: `
        <aside class="check-list-card flex h-full min-h-0 flex-col overflow-hidden">
            <header class="flex items-start justify-between gap-3 border-b border-[var(--cl-line)] p-5">
                <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cl-muted)]">
                        {{ endpoint()?.country }}
                    </p>
                    <h3 class="mt-1 text-lg font-semibold">{{ title() }}</h3>
                    <p class="mt-2 text-sm text-[var(--cl-muted)]">{{ description() }}</p>
                </div>
                <button type="button" class="check-list-pill" (click)="closed.emit()">
                    <mat-icon class="!h-4 !w-4 !text-[16px]">close</mat-icon>
                </button>
            </header>

            <div class="flex flex-wrap gap-2 border-b border-[var(--cl-line)] px-5 py-3">
                <span class="check-list-pill">
                    {{ 'checkList.cost' | transloco: { value: costLabel() } }}
                </span>
                <button type="button" class="check-list-pill" (click)="toggleSaved.emit()">
                    {{ saved() ? ('checkList.removeFromList' | transloco) : ('checkList.addToList' | transloco) }}
                </button>
                <button type="button" class="check-list-cta check-list-pill" (click)="batch.emit()">
                    {{ 'checkList.createSmartBatch' | transloco }}
                </button>
            </div>

            <div class="check-list-tabs px-5 pt-3">
                @for (tab of tabs; track tab.id) {
                    <button
                        type="button"
                        class="check-list-tab"
                        [class.is-on]="activeTab() === tab.id"
                        (click)="activeTab.set(tab.id)"
                    >
                        {{ tab.key | transloco }}
                    </button>
                }
            </div>

            <div class="min-h-0 flex-1 overflow-auto">
                @if (activeTab() === 'about') {
                    @if (detailLoading() && !endpoint()?.docs) {
                        <p class="p-5 text-sm text-[var(--cl-muted)]">
                            {{ 'checkList.loadingDetails' | transloco }}
                        </p>
                    } @else {
                        <postman-about-endpoint
                            [docs]="endpoint()?.docs"
                            [endpoint]="endpoint()"
                        ></postman-about-endpoint>
                    }
                }

                @if (activeTab() === 'request') {
                    <section class="space-y-3 p-5">
                        <h4 class="text-sm font-semibold">{{ 'checkList.tryIt' | transloco }}</h4>
                        @for (param of visibleParams(); track param.key) {
                            <label class="block">
                                <span class="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--cl-muted)]">
                                    {{ param.key }}
                                    @if (param.required) {
                                        <span class="text-rose-500">*</span>
                                    } @else {
                                        <span class="font-medium normal-case tracking-normal">
                                            {{ 'checkList.optional' | transloco }}
                                        </span>
                                    }
                                </span>
                                @if (param.enum?.length) {
                                    <select
                                        class="check-list-field"
                                        [ngModel]="param.value"
                                        (ngModelChange)="request.updateParam(param.key, $event)"
                                    >
                                        <option value="">{{ 'checkList.chooseValue' | transloco }}</option>
                                        @for (option of param.enum; track option) {
                                            <option [value]="option">{{ option }}</option>
                                        }
                                    </select>
                                } @else {
                                    <input
                                        class="check-list-field"
                                        [ngModel]="param.value"
                                        (ngModelChange)="request.updateParam(param.key, $event)"
                                        [placeholder]="param.description || param.key"
                                    />
                                }
                            </label>
                        }
                        <button
                            type="button"
                            class="check-list-cta check-list-pill w-full"
                            [disabled]="request.loading() || !canSend()"
                            (click)="run()"
                        >
                            @if (request.loading()) {
                                <span class="check-list-spinner"></span>
                            }
                            {{ request.loading() ? ('checkList.running' | transloco) : ('checkList.runCheck' | transloco) }}
                        </button>
                        @if (issues().length) {
                            <p class="text-xs text-rose-600">{{ 'checkList.fillRequired' | transloco }}</p>
                        }
                    </section>
                }

                @if (activeTab() === 'result') {
                    <section class="p-5">
                        @if (request.loading()) {
                            <div class="flex min-h-48 flex-col items-center justify-center gap-3">
                                <span class="check-list-spinner check-list-spinner-lg"></span>
                                <p class="text-sm text-[var(--cl-muted)]">{{ 'checkList.waitingResult' | transloco }}</p>
                            </div>
                        } @else if (request.response() || request.error()) {
                            <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
                                <p class="text-xs font-semibold uppercase tracking-wide text-[var(--cl-muted)]">
                                    {{ 'checkList.result' | transloco }}
                                    @if (request.responseTime(); as time) {
                                        \xB7 {{ time }}ms
                                    }
                                </p>
                                <div class="check-list-tabs">
                                    <button
                                        type="button"
                                        class="check-list-tab"
                                        [class.is-on]="resultView() === 'table'"
                                        (click)="resultView.set('table')"
                                    >
                                        {{ 'postman.responseViewer.viewMode.table' | transloco }}
                                    </button>
                                    <button
                                        type="button"
                                        class="check-list-tab"
                                        [class.is-on]="resultView() === 'json'"
                                        (click)="resultView.set('json')"
                                    >
                                        {{ 'postman.responseViewer.viewMode.json' | transloco }}
                                    </button>
                                </div>
                            </div>
                            <div class="rounded-xl border border-[var(--cl-line)] p-4">
                                @if (resultView() === 'table') {
                                    <postman-json-table [data]="displayPayload()"></postman-json-table>
                                } @else {
                                    <pre class="check-list-json">{{ displayPayload() | json }}</pre>
                                }
                            </div>
                        } @else {
                            <p class="text-sm text-[var(--cl-muted)]">{{ 'checkList.noResult' | transloco }}</p>
                        }
                    </section>
                }
            </div>
        </aside>
    `, styles: ['/* src/app/modules/check-list/check-list.styles.scss */\n.check-list-root {\n  --cl-ink: rgb(15, 23, 42);\n  --cl-muted: rgb(100, 116, 139);\n  --cl-paper: rgb(248, 250, 252);\n  --cl-card: rgb(255, 255, 255);\n  --cl-line: rgba(148, 163, 184, 0.22);\n  --cl-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  --cl-accent: rgb(37, 99, 235);\n  position: absolute;\n  inset: 0;\n  overflow: auto;\n  color: var(--cl-ink);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(37, 99, 235, 0.09),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(14, 165, 233, 0.07),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n.check-list-root * {\n  box-sizing: border-box;\n}\n.check-list-wrap {\n  width: min(1200px, 100% - 3rem);\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n.check-list-display {\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n  color: var(--cl-ink);\n}\n.check-list-card {\n  background: var(--cl-card);\n  border: 1px solid var(--cl-line);\n  border-radius: 16px;\n  box-shadow: var(--cl-shadow);\n}\n.check-list-card.is-selected,\n.check-list-card.is-active {\n  border-color: rgba(37, 99, 235, 0.45);\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);\n}\n.check-list-price {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-paper);\n  color: var(--cl-muted);\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.check-list-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n  font-size: 13px;\n  font-weight: 600;\n  transition:\n    border-color 150ms ease,\n    background 150ms ease,\n    box-shadow 150ms ease;\n}\n.check-list-pill:hover {\n  border-color: rgba(37, 99, 235, 0.45);\n}\n.check-list-pill.is-on,\n.check-list-cta {\n  background: rgb(15, 23, 42);\n  color: rgb(255, 255, 255);\n  border-color: transparent;\n}\n.check-list-cta {\n  min-height: 40px;\n  padding: 0 18px;\n}\n.check-list-field {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  padding: 0.75rem 0.9rem;\n  font-size: 0.875rem;\n  color: var(--cl-ink);\n}\n.check-list-pill:disabled,\n.check-list-cta:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-pill.is-readonly {\n  pointer-events: none;\n}\n.check-list-icon-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: var(--cl-muted);\n}\n.check-list-icon-btn:hover {\n  background: rgba(148, 163, 184, 0.16);\n  color: var(--cl-ink);\n}\n.check-list-pill.is-danger:hover {\n  border-color: rgba(244, 63, 94, 0.55);\n  color: rgb(225, 29, 72);\n}\n.check-list-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.check-list-tab {\n  min-height: 34px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--cl-muted);\n  font-size: 13px;\n  font-weight: 600;\n}\n.check-list-tab.is-on {\n  border-color: var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n}\n.check-list-tab:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-drawer {\n  width: min(52rem, 100%);\n}\n.check-list-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 999px;\n  animation: check-list-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.check-list-spinner-lg {\n  width: 36px;\n  height: 36px;\n  border-width: 3px;\n  border-color: var(--cl-accent);\n  border-right-color: transparent;\n}\n.check-list-json {\n  margin: 0;\n  overflow: auto;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 12px;\n  line-height: 1.55;\n  white-space: pre-wrap;\n  word-break: break-word;\n  color: var(--cl-ink);\n}\n@keyframes check-list-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dark .check-list-root {\n  --cl-ink: rgb(248, 250, 252);\n  --cl-muted: rgb(148, 163, 184);\n  --cl-paper: rgb(15, 23, 42);\n  --cl-card: rgb(30, 41, 59);\n  --cl-line: rgba(148, 163, 184, 0.18);\n  --cl-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(56, 189, 248, 0.08),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.dark .check-list-card.is-selected,\n.dark .check-list-card.is-active {\n  border-color: rgba(96, 165, 250, 0.45);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n.dark .check-list-pill:hover {\n  border-color: rgba(96, 165, 250, 0.45);\n}\n.dark .check-list-pill.is-danger:hover {\n  border-color: rgba(251, 113, 133, 0.55);\n  color: rgb(251, 113, 133);\n}\n.dark .check-list-pill.is-on,\n.dark .check-list-cta {\n  background: rgb(226, 232, 240);\n  color: rgb(15, 23, 42);\n}\n/*# sourceMappingURL=check-list.styles.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckListDetailComponent, { className: "CheckListDetailComponent", filePath: "src/app/modules/check-list/check-list-detail.component.ts", lineNumber: 188 });
})();

// src/app/modules/check-list/check-list-taxonomy.ts
var CHECK_LIST_DOMAINS = ["people", "vehicles", "businesses"];
var CATEGORY_DOMAINS = {
  identity: ["people"],
  identity_validation: ["people"],
  background_check: ["people"],
  judicial: ["people"],
  health: ["people"],
  voting: ["people"],
  email: ["people"],
  covid: ["people"],
  military: ["people"],
  antispoofing: ["people"],
  faceverification: ["people"],
  ocr: ["people"],
  verification: ["people"],
  search: ["people"],
  look_ups: ["people"],
  messaging: ["people"],
  biometrics_apis: ["people"],
  authentication: ["people"],
  transit: ["vehicles"],
  autodata: ["vehicles"],
  business: ["businesses"],
  certificates: ["businesses"],
  solutions: ["businesses"],
  payments: ["businesses"],
  data_sheet: ["businesses"],
  finance: ["people", "businesses"]
};
var normalizeDomain = (value) => {
  if (typeof value !== "string")
    return null;
  const domain = value.trim().toLowerCase();
  return CHECK_LIST_DOMAINS.includes(domain) ? domain : null;
};
var normalizeCheckListDomains = (value) => {
  if (!Array.isArray(value))
    return [];
  const unique = /* @__PURE__ */ new Set();
  for (const item of value) {
    const domain = normalizeDomain(item);
    if (domain)
      unique.add(domain);
  }
  return CHECK_LIST_DOMAINS.filter((domain) => unique.has(domain));
};
var resolveCheckListDomains = (feature) => {
  const explicit = normalizeCheckListDomains(feature.checkListDomains);
  if (explicit.length)
    return explicit;
  const category = String(feature.baseCategory || feature.category || "").trim().toLowerCase().replace(/[\s-]+/g, "_");
  return CATEGORY_DOMAINS[category] ? [...CATEGORY_DOMAINS[category]] : ["people"];
};
var isWorldCatalogCountry = (country) => {
  const value = (country || "").trim().toLowerCase();
  return !value || value === "world" || value === "global";
};
var normalizeCheckListCategory = (feature) => String(feature.baseCategory || feature.category || "other").trim().toLowerCase().replace(/[\s-]+/g, "_");
var isWorldBackgroundCheck = (feature) => isWorldCatalogCountry(feature.country) && normalizeCheckListCategory(feature) === "background_check";
var featureMatchesCountries = (featureCountry, selectedCountries) => {
  if (isWorldCatalogCountry(featureCountry))
    return false;
  if (!selectedCountries.length)
    return true;
  return selectedCountries.some((item) => item.toLowerCase() === featureCountry.trim().toLowerCase());
};
var featureMatchesCheckListCatalog = (feature, selectedCountries) => isWorldBackgroundCheck(feature) || featureMatchesCountries(feature.country, selectedCountries);

// src/app/modules/check-list/check-list-workspace.component.ts
var _c03 = (a0) => ({ value: a0 });
var _forTrack03 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.code || $item.id;
function CheckListWorkspaceComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "checkList.saving"));
  }
}
function CheckListWorkspaceComponent_Conditional_27_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function CheckListWorkspaceComponent_Conditional_27_For_5_Template_button_click_0_listener() {
      const country_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmBatch(country_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", country_r2, " ");
  }
}
function CheckListWorkspaceComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, CheckListWorkspaceComponent_Conditional_27_For_5_Template, 2, 1, "button", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "checkList.chooseBatchCountry"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.selectedCountries());
  }
}
function CheckListWorkspaceComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.error()));
  }
}
function CheckListWorkspaceComponent_For_32_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const country_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.flagUi(country_r4).src, \u0275\u0275sanitizeUrl);
  }
}
function CheckListWorkspaceComponent_For_32_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 3);
    \u0275\u0275text(1, "public");
    \u0275\u0275elementEnd();
  }
}
function CheckListWorkspaceComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275template(1, CheckListWorkspaceComponent_For_32_Case_1_Template, 1, 1, "img", 34)(2, CheckListWorkspaceComponent_For_32_Case_2_Template, 2, 0, "mat-icon", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const country_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r2.flagUi(country_r4).k) === "img" ? 1 : tmp_10_0 === "globe" ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", country_r4, " ");
  }
}
function CheckListWorkspaceComponent_ForEmpty_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "checkList.noCountries"), " ");
  }
}
function CheckListWorkspaceComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 36);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "checkList.emptyServicesTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "checkList.emptyServicesBody"), " ");
  }
}
function CheckListWorkspaceComponent_Conditional_43_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 38)(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "h3", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 43)(10, "button", 44);
    \u0275\u0275listener("click", function CheckListWorkspaceComponent_Conditional_43_For_2_Template_button_click_10_listener() {
      const endpoint_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEndpoint(endpoint_r6));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 45);
    \u0275\u0275listener("click", function CheckListWorkspaceComponent_Conditional_43_For_2_Template_button_click_13_listener() {
      const endpoint_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFeature(endpoint_r6));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const endpoint_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-selected", ((tmp_11_0 = ctx_r2.selectedEndpoint()) == null ? null : tmp_11_0.code) === endpoint_r6.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 7, "checkList.cost", \u0275\u0275pureFunction1(14, _c03, ctx_r2.endpointCost(endpoint_r6))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.endpointTitle(endpoint_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.endpointDescription(endpoint_r6), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "checkList.open"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 12, "checkList.removeFromList"), " ");
  }
}
function CheckListWorkspaceComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, CheckListWorkspaceComponent_Conditional_43_For_2_Template, 16, 16, "article", 37, _forTrack12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.savedEndpoints());
  }
}
function CheckListWorkspaceComponent_For_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function CheckListWorkspaceComponent_For_58_Template_button_click_0_listener() {
      const domain_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectDomain(domain_r8.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const domain_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-on", ctx_r2.activeDomain() === domain_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, domain_r8.titleKey), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(domain_r8.count());
  }
}
function CheckListWorkspaceComponent_For_60_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 38)(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "h3", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 43)(10, "button", 44);
    \u0275\u0275listener("click", function CheckListWorkspaceComponent_For_60_For_6_Template_button_click_10_listener() {
      const endpoint_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEndpoint(endpoint_r10));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 33);
    \u0275\u0275listener("click", function CheckListWorkspaceComponent_For_60_For_6_Template_button_click_13_listener() {
      const endpoint_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addFeature(endpoint_r10));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const endpoint_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 5, "checkList.cost", \u0275\u0275pureFunction1(12, _c03, ctx_r2.endpointCost(endpoint_r10))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.endpointTitle(endpoint_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.endpointDescription(endpoint_r10), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "checkList.open"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 10, "checkList.select"), " ");
  }
}
function CheckListWorkspaceComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h3", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 48);
    \u0275\u0275repeaterCreate(5, CheckListWorkspaceComponent_For_60_For_6_Template, 16, 14, "article", 38, _forTrack12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, group_r11.titleKey), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(group_r11.endpoints);
  }
}
function CheckListWorkspaceComponent_ForEmpty_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.catalogQuery().trim() ? "checkList.searchEmpty" : "checkList.allAdded"), " ");
  }
}
function CheckListWorkspaceComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function CheckListWorkspaceComponent_Conditional_62_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 50)(2, "app-check-list-detail", 51);
    \u0275\u0275listener("closed", function CheckListWorkspaceComponent_Conditional_62_Template_app_check_list_detail_closed_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    })("toggleSaved", function CheckListWorkspaceComponent_Conditional_62_Template_app_check_list_detail_toggleSaved_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFeature(ctx_r2.selectedEndpoint()));
    })("batch", function CheckListWorkspaceComponent_Conditional_62_Template_app_check_list_detail_batch_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openBatch(ctx_r2.selectedEndpoint()));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("endpoint", ctx_r2.selectedEndpoint())("saved", ctx_r2.isSelected(ctx_r2.selectedEndpoint()));
  }
}
var CheckListWorkspaceComponent = class _CheckListWorkspaceComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._lists = inject(CheckListService);
    this._postman = inject(PostmanService);
    this._request = inject(CheckListRequestService);
    this._transloco = inject(TranslocoService);
    this._authGate = inject(AuthRequiredGateService);
    this._save$ = new Subject();
    this._saveSub = this._save$.pipe(debounceTime(450)).subscribe(() => this.persist());
    this.name = signal("Untitled checklist");
    this.status = signal("draft");
    this.selectedCountries = signal([]);
    this.selectedDomains = signal([]);
    this.selectedCodes = signal([]);
    this.activeDomain = signal("people");
    this.selectedEndpoint = signal(null);
    this.catalogQuery = signal("");
    this.checklistId = signal(null);
    this._hydrated = false;
    this._pendingPersist = false;
    this.batchCountryNeeded = signal(false);
    this._batchCodes = [];
    this.saving = this._lists.saving;
    this.error = this._lists.error;
    this.domains = [
      {
        id: "people",
        titleKey: "checkList.domains.peopleTitle",
        count: computed(() => this.availableCount("people"))
      },
      {
        id: "vehicles",
        titleKey: "checkList.domains.vehiclesTitle",
        count: computed(() => this.availableCount("vehicles"))
      },
      {
        id: "businesses",
        titleKey: "checkList.domains.businessesTitle",
        count: computed(() => this.availableCount("businesses"))
      }
    ];
    this.savedEndpoints = computed(() => {
      const byCode = new Map(this._postman.visibleEndpoints().filter((endpoint) => endpoint.code).map((endpoint) => [endpoint.code, endpoint]));
      return this.selectedCodes().map((code) => byCode.get(code)).filter((endpoint) => Boolean(endpoint));
    });
    this.catalogEndpoints = computed(() => {
      const query = this.catalogQuery().trim().toLowerCase();
      const domain = this.activeDomain();
      const saved = new Set(this.selectedCodes());
      const pool = query ? this.catalogPool() : domain ? this.endpointsForDomain(domain) : [];
      return pool.filter((endpoint) => (!endpoint.code || !saved.has(endpoint.code)) && this.matchesCatalogQuery(endpoint, query));
    });
    this.catalogGroups = computed(() => {
      const available = this.catalogEndpoints();
      const countryEndpoints = available.filter((endpoint) => !isWorldCatalogCountry(endpoint.country));
      const worldChecks = available.filter((endpoint) => isWorldBackgroundCheck(endpoint));
      const byCategory = /* @__PURE__ */ new Map();
      for (const endpoint of countryEndpoints) {
        const category = normalizeCheckListCategory(endpoint);
        const rows = byCategory.get(category) || [];
        rows.push(endpoint);
        byCategory.set(category, rows);
      }
      const groups = this.orderedCategories(byCategory).map((category) => ({
        id: category,
        titleKey: this.categoryTitleKey(category),
        endpoints: byCategory.get(category) || []
      }));
      if (worldChecks.length) {
        groups.push({
          id: "world-background",
          titleKey: "checkList.worldBackground",
          endpoints: worldChecks
        });
      }
      return groups;
    });
    effect(() => {
      this.name();
      if (this._hydrated && this.checklistId())
        this._save$.next();
    });
  }
  ngOnInit() {
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => this.boot()
    });
  }
  ngOnDestroy() {
    this._saveSub.unsubscribe();
    this._request.clear();
  }
  boot() {
    const id = this._route.snapshot.paramMap.get("id");
    if (!id) {
      this._router.navigate(["/check-list"]);
      return;
    }
    this._lists.show(id).subscribe({
      next: (response) => {
        const record = response.data;
        this.name.set(record.name);
        this.status.set(record.status === "active" ? "active" : "draft");
        this.selectedCountries.set(record.countries || []);
        this.selectedDomains.set(record.domains || []);
        this.selectedCodes.set(record.featureCodes || []);
        this.activeDomain.set(record.domains?.[0] || "people");
        this.checklistId.set(record._id);
        this._postman.loadFeaturesForCountries(catalogCountryScopeForCountries(record.countries));
        this._hydrated = true;
      },
      error: () => this._router.navigate(["/check-list"])
    });
  }
  selectDomain(domain) {
    this.activeDomain.set(domain);
    if (!this.selectedDomains().includes(domain)) {
      this.selectedDomains.set([...this.selectedDomains(), domain]);
      this.persist();
    }
  }
  catalogPool() {
    return this._postman.visibleEndpoints().filter((endpoint) => featureMatchesCheckListCatalog(endpoint, this.selectedCountries()));
  }
  endpointsForDomain(domain) {
    return this.catalogPool().filter((endpoint) => resolveCheckListDomains(endpoint).includes(domain));
  }
  matchesCatalogQuery(endpoint, query) {
    if (!query)
      return true;
    const haystack = [
      this.endpointTitle(endpoint),
      this.endpointDescription(endpoint),
      endpoint.code,
      endpoint.country,
      endpoint.category,
      endpoint.label
    ].filter(Boolean).join(" ").toLowerCase();
    return haystack.includes(query);
  }
  availableCount(domain) {
    const saved = new Set(this.selectedCodes());
    return this.endpointsForDomain(domain).filter((endpoint) => !endpoint.code || !saved.has(endpoint.code)).length;
  }
  endpointTitle(endpoint) {
    return this.endpointCopy(endpoint).title;
  }
  endpointDescription(endpoint) {
    return this.endpointCopy(endpoint).description;
  }
  endpointCost(endpoint) {
    return formatCatalogPrice(endpoint.estimatedCost);
  }
  isSelected(endpoint) {
    return Boolean(endpoint?.code && this.selectedCodes().includes(endpoint.code));
  }
  openEndpoint(endpoint) {
    this.selectedEndpoint.set(endpoint);
    this._request.prepare(endpoint);
    this._postman.hydrateEndpointDetails(endpoint).subscribe((hydrated) => {
      if (this.selectedEndpoint()?.code !== hydrated.code)
        return;
      this.selectedEndpoint.set(hydrated);
      this._request.prepare(hydrated);
    });
  }
  addFeature(endpoint) {
    if (!endpoint.code || this.selectedCodes().includes(endpoint.code))
      return;
    this.selectedCodes.set([...this.selectedCodes(), endpoint.code]);
    this.persist();
  }
  removeFeature(endpoint) {
    if (!endpoint.code)
      return;
    this.selectedCodes.set(this.selectedCodes().filter((code) => code !== endpoint.code));
    this.persist();
    if (this.selectedEndpoint()?.code === endpoint.code)
      this.closeDetail();
  }
  closeDetail() {
    this.selectedEndpoint.set(null);
    this._request.clear();
  }
  toggleFeature(endpoint) {
    if (!endpoint?.code)
      return;
    this.selectedCodes.set(this.isSelected(endpoint) ? this.selectedCodes().filter((code) => code !== endpoint.code) : [...this.selectedCodes(), endpoint.code]);
    this.persist();
  }
  canBatch() {
    return this.selectedCodes().length > 0 && this.selectedCountries().length > 0;
  }
  openBatch(endpoint) {
    const countries = this.selectedCountries();
    this._batchCodes = endpoint?.code ? [endpoint.code] : this.selectedCodes();
    const preferred = endpoint?.country && endpoint.country.toLowerCase() !== "world" ? endpoint.country : null;
    if (preferred) {
      this.confirmBatch(preferred);
      return;
    }
    if (countries.length === 1) {
      this.confirmBatch(countries[0]);
      return;
    }
    this.batchCountryNeeded.set(true);
  }
  confirmBatch(country) {
    this.batchCountryNeeded.set(false);
    this._router.navigate(["/smart-batch/create"], {
      queryParams: {
        from: "check-list",
        checkListId: this.checklistId(),
        country,
        codes: this._batchCodes.join(","),
        name: this.name()
      }
    });
  }
  setStatus(status) {
    if (this.status() === status)
      return;
    this.status.set(status);
    this.persist();
  }
  flagUi(country) {
    return postmanCountryFlagUi(country);
  }
  categoryTitleKey(category) {
    return `categories.${category.toUpperCase()}`;
  }
  orderedCategories(byCategory) {
    const order = [
      "identity",
      "health",
      "judicial",
      "background_check",
      "transit",
      "autodata",
      "business",
      "certificates",
      "finance"
    ];
    return [...byCategory.keys()].sort((left, right) => {
      const leftRank = order.indexOf(left);
      const rightRank = order.indexOf(right);
      return (leftRank === -1 ? order.length : leftRank) - (rightRank === -1 ? order.length : rightRank) || left.localeCompare(right);
    });
  }
  endpointCopy(endpoint) {
    const catalog = getAppFeatureCatalogCopy(this._transloco, endpoint.code);
    return resolvePostmanEndpointCopy({
      endpoint,
      catalogTitle: catalog.title || endpoint.label,
      catalogDescription: catalog.description || endpoint.description || "",
      locale: this._transloco.getActiveLang()
    });
  }
  persist() {
    const id = this.checklistId();
    if (!id)
      return;
    if (this._lists.saving()) {
      this._pendingPersist = true;
      return;
    }
    this._lists.update(id, {
      name: this.name().trim() || "Untitled checklist",
      countries: this.selectedCountries(),
      domains: this.selectedDomains(),
      featureCodes: this.selectedCodes(),
      status: this.status()
    }).subscribe({
      next: () => {
        if (!this._pendingPersist)
          return;
        this._pendingPersist = false;
        this.persist();
      }
    });
  }
  static {
    this.\u0275fac = function CheckListWorkspaceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckListWorkspaceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckListWorkspaceComponent, selectors: [["app-check-list-workspace"]], decls: 63, vars: 53, consts: [[1, "check-list-root"], [1, "check-list-wrap"], ["routerLink", "/check-list", 1, "inline-flex", "items-center", "gap-2", "text-sm", "font-medium", "text-[var(--cl-muted)]"], [1, "!h-4", "!w-4", "!text-[16px]"], [1, "mt-6", "flex", "flex-wrap", "items-end", "justify-between", "gap-4"], [1, "min-w-0", "flex-1"], [1, "mb-2", "text-sm", "text-[var(--cl-muted)]"], [1, "check-list-display", "w-full", "border-0", "bg-transparent", "text-2xl", "outline-none", 3, "ngModelChange", "ngModel", "placeholder"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["role", "group", 1, "check-list-tabs"], ["type", "button", 1, "check-list-tab", 3, "click", "disabled"], [1, "check-list-pill"], ["type", "button", 1, "check-list-cta", "check-list-pill", 3, "click", "disabled"], [1, "flex", "w-full", "flex-wrap", "gap-2"], [1, "mt-4", "text-sm", "text-rose-600"], [1, "mt-6"], [1, "flex", "flex-wrap", "gap-2"], [1, "check-list-pill", "is-readonly"], [1, "text-sm", "text-[var(--cl-muted)]"], [1, "mt-8"], [1, "mb-4", "flex", "items-center", "justify-between", "gap-3"], [1, "text-base", "font-semibold"], [1, "check-list-card", "p-6"], [1, "grid", "gap-3", "md:grid-cols-2"], [1, "mt-1", "text-sm", "text-[var(--cl-muted)]"], [1, "relative", "mt-4", "block", "max-w-xl"], [1, "pointer-events-none", "absolute", "left-3", "top-1/2", "!h-4", "!w-4", "-translate-y-1/2", "!text-[18px]", "text-[var(--cl-muted)]"], [1, "check-list-field", "!pl-10", 3, "ngModelChange", "ngModel", "placeholder"], [1, "mt-4", "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "check-list-pill", 3, "is-on"], [1, "mt-4", "text-sm", "text-[var(--cl-muted)]"], [1, "w-full", "text-sm", "text-[var(--cl-muted)]"], ["type", "button", 1, "check-list-pill"], ["type", "button", 1, "check-list-pill", 3, "click"], ["alt", "", 1, "h-4", "w-4", "rounded-full", "object-cover", 3, "src"], [1, "check-list-display", "text-xl"], [1, "mt-2", "max-w-lg", "text-sm", "text-[var(--cl-muted)]"], [1, "check-list-card", "relative", "flex", "flex-col", "gap-4", "p-5", 3, "is-selected"], [1, "check-list-card", "relative", "flex", "flex-col", "gap-4", "p-5"], [1, "check-list-price"], [1, "pr-24"], [1, "text-lg", "font-semibold"], [1, "mt-1", "line-clamp-2", "text-sm", "text-[var(--cl-muted)]"], [1, "mt-auto", "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "check-list-cta", "check-list-pill", 3, "click"], ["type", "button", 1, "check-list-pill", "is-danger", 3, "click"], [1, "opacity-70"], [1, "text-sm", "font-semibold", "uppercase", "tracking-wide", "text-[var(--cl-muted)]"], [1, "mt-3", "grid", "gap-3", "md:grid-cols-2"], [1, "fixed", "inset-0", "z-40", "bg-black/30", 3, "click"], [1, "check-list-drawer", "fixed", "inset-y-0", "right-0", "z-50", "p-3", "sm:p-4"], [1, "block", "h-full", 3, "closed", "toggleSaved", "batch", "endpoint", "saved"]], template: function CheckListWorkspaceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "mat-icon", 3);
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "header", 4)(8, "div", 5)(9, "p", 6);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 7);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275listener("ngModelChange", function CheckListWorkspaceComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.name.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementStart(17, "button", 10);
        \u0275\u0275listener("click", function CheckListWorkspaceComponent_Template_button_click_17_listener() {
          return ctx.setStatus("draft");
        });
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 10);
        \u0275\u0275listener("click", function CheckListWorkspaceComponent_Template_button_click_20_listener() {
          return ctx.setStatus("active");
        });
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(23, CheckListWorkspaceComponent_Conditional_23_Template, 3, 3, "span", 11);
        \u0275\u0275elementStart(24, "button", 12);
        \u0275\u0275listener("click", function CheckListWorkspaceComponent_Template_button_click_24_listener() {
          return ctx.openBatch();
        });
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(27, CheckListWorkspaceComponent_Conditional_27_Template, 6, 3, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, CheckListWorkspaceComponent_Conditional_28_Template, 3, 3, "p", 14);
        \u0275\u0275elementStart(29, "section", 15)(30, "div", 16);
        \u0275\u0275repeaterCreate(31, CheckListWorkspaceComponent_For_32_Template, 4, 2, "span", 17, \u0275\u0275repeaterTrackByIdentity, false, CheckListWorkspaceComponent_ForEmpty_33_Template, 3, 3, "span", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "section", 19)(35, "div", 20)(36, "h2", 21);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 11);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(42, CheckListWorkspaceComponent_Conditional_42_Template, 7, 6, "div", 22)(43, CheckListWorkspaceComponent_Conditional_43_Template, 3, 0, "div", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "section", 19)(45, "h2", 21);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 24);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "label", 25)(52, "mat-icon", 26);
        \u0275\u0275text(53, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "input", 27);
        \u0275\u0275pipe(55, "transloco");
        \u0275\u0275listener("ngModelChange", function CheckListWorkspaceComponent_Template_input_ngModelChange_54_listener($event) {
          return ctx.catalogQuery.set($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 28);
        \u0275\u0275repeaterCreate(57, CheckListWorkspaceComponent_For_58_Template, 5, 6, "button", 29, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(59, CheckListWorkspaceComponent_For_60_Template, 7, 3, "div", 15, _forTrack03, false, CheckListWorkspaceComponent_ForEmpty_61_Template, 3, 3, "p", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(62, CheckListWorkspaceComponent_Conditional_62_Template, 3, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 29, "checkList.back"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 31, "checkList.workspaceKicker"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.name())("placeholder", \u0275\u0275pipeBind1(13, 33, "checkList.namePlaceholder"));
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(16, 35, "checkList.status.label"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("is-on", ctx.status() === "draft");
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 37, "checkList.status.draft"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("is-on", ctx.status() === "active");
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 39, "checkList.status.active"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.saving() ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.canBatch());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 41, "checkList.createSmartBatch"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.batchCountryNeeded() ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error() ? 28 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.selectedCountries());
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 43, "checkList.savedServices"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", ctx.selectedCodes().length, " ", \u0275\u0275pipeBind1(41, 45, "checkList.selected"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.savedEndpoints().length ? 42 : 43);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 47, "checkList.addServices"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 49, "checkList.addServicesHint"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", ctx.catalogQuery())("placeholder", \u0275\u0275pipeBind1(55, 51, "checkList.searchPlaceholder"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.domains);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.catalogGroups());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selectedEndpoint() ? 62 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterLink,
      MatIconModule,
      MatIcon,
      TranslocoPipe,
      CheckListDetailComponent
    ], styles: ['/* src/app/modules/check-list/check-list.styles.scss */\n.check-list-root {\n  --cl-ink: rgb(15, 23, 42);\n  --cl-muted: rgb(100, 116, 139);\n  --cl-paper: rgb(248, 250, 252);\n  --cl-card: rgb(255, 255, 255);\n  --cl-line: rgba(148, 163, 184, 0.22);\n  --cl-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  --cl-accent: rgb(37, 99, 235);\n  position: absolute;\n  inset: 0;\n  overflow: auto;\n  color: var(--cl-ink);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(37, 99, 235, 0.09),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(14, 165, 233, 0.07),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n.check-list-root * {\n  box-sizing: border-box;\n}\n.check-list-wrap {\n  width: min(1200px, 100% - 3rem);\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n.check-list-display {\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n  color: var(--cl-ink);\n}\n.check-list-card {\n  background: var(--cl-card);\n  border: 1px solid var(--cl-line);\n  border-radius: 16px;\n  box-shadow: var(--cl-shadow);\n}\n.check-list-card.is-selected,\n.check-list-card.is-active {\n  border-color: rgba(37, 99, 235, 0.45);\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);\n}\n.check-list-price {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-paper);\n  color: var(--cl-muted);\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.check-list-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n  font-size: 13px;\n  font-weight: 600;\n  transition:\n    border-color 150ms ease,\n    background 150ms ease,\n    box-shadow 150ms ease;\n}\n.check-list-pill:hover {\n  border-color: rgba(37, 99, 235, 0.45);\n}\n.check-list-pill.is-on,\n.check-list-cta {\n  background: rgb(15, 23, 42);\n  color: rgb(255, 255, 255);\n  border-color: transparent;\n}\n.check-list-cta {\n  min-height: 40px;\n  padding: 0 18px;\n}\n.check-list-field {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  padding: 0.75rem 0.9rem;\n  font-size: 0.875rem;\n  color: var(--cl-ink);\n}\n.check-list-pill:disabled,\n.check-list-cta:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-pill.is-readonly {\n  pointer-events: none;\n}\n.check-list-icon-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: var(--cl-muted);\n}\n.check-list-icon-btn:hover {\n  background: rgba(148, 163, 184, 0.16);\n  color: var(--cl-ink);\n}\n.check-list-pill.is-danger:hover {\n  border-color: rgba(244, 63, 94, 0.55);\n  color: rgb(225, 29, 72);\n}\n.check-list-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.check-list-tab {\n  min-height: 34px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--cl-muted);\n  font-size: 13px;\n  font-weight: 600;\n}\n.check-list-tab.is-on {\n  border-color: var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n}\n.check-list-tab:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-drawer {\n  width: min(52rem, 100%);\n}\n.check-list-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 999px;\n  animation: check-list-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.check-list-spinner-lg {\n  width: 36px;\n  height: 36px;\n  border-width: 3px;\n  border-color: var(--cl-accent);\n  border-right-color: transparent;\n}\n.check-list-json {\n  margin: 0;\n  overflow: auto;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 12px;\n  line-height: 1.55;\n  white-space: pre-wrap;\n  word-break: break-word;\n  color: var(--cl-ink);\n}\n@keyframes check-list-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dark .check-list-root {\n  --cl-ink: rgb(248, 250, 252);\n  --cl-muted: rgb(148, 163, 184);\n  --cl-paper: rgb(15, 23, 42);\n  --cl-card: rgb(30, 41, 59);\n  --cl-line: rgba(148, 163, 184, 0.18);\n  --cl-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(56, 189, 248, 0.08),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.dark .check-list-card.is-selected,\n.dark .check-list-card.is-active {\n  border-color: rgba(96, 165, 250, 0.45);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n.dark .check-list-pill:hover {\n  border-color: rgba(96, 165, 250, 0.45);\n}\n.dark .check-list-pill.is-danger:hover {\n  border-color: rgba(251, 113, 133, 0.55);\n  color: rgb(251, 113, 133);\n}\n.dark .check-list-pill.is-on,\n.dark .check-list-cta {\n  background: rgb(226, 232, 240);\n  color: rgb(15, 23, 42);\n}\n/*# sourceMappingURL=check-list.styles.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckListWorkspaceComponent, [{
    type: Component,
    args: [{ selector: "app-check-list-workspace", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterLink,
      MatIconModule,
      TranslocoPipe,
      CheckListDetailComponent
    ], encapsulation: ViewEncapsulation.None, template: `
        <div class="check-list-root">
            <div class="check-list-wrap">
                <a routerLink="/check-list" class="inline-flex items-center gap-2 text-sm font-medium text-[var(--cl-muted)]">
                    <mat-icon class="!h-4 !w-4 !text-[16px]">arrow_back</mat-icon>
                    {{ 'checkList.back' | transloco }}
                </a>

                <header class="mt-6 flex flex-wrap items-end justify-between gap-4">
                    <div class="min-w-0 flex-1">
                        <p class="mb-2 text-sm text-[var(--cl-muted)]">
                            {{ 'checkList.workspaceKicker' | transloco }}
                        </p>
                        <input
                            class="check-list-display w-full border-0 bg-transparent text-2xl outline-none"
                            [ngModel]="name()"
                            (ngModelChange)="name.set($event)"
                            [placeholder]="'checkList.namePlaceholder' | transloco"
                        />
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                        <div class="check-list-tabs" role="group" [attr.aria-label]="'checkList.status.label' | transloco">
                            <button
                                type="button"
                                class="check-list-tab"
                                [class.is-on]="status() === 'draft'"
                                [disabled]="saving()"
                                (click)="setStatus('draft')"
                            >
                                {{ 'checkList.status.draft' | transloco }}
                            </button>
                            <button
                                type="button"
                                class="check-list-tab"
                                [class.is-on]="status() === 'active'"
                                [disabled]="saving()"
                                (click)="setStatus('active')"
                            >
                                {{ 'checkList.status.active' | transloco }}
                            </button>
                        </div>
                        @if (saving()) {
                            <span class="check-list-pill">{{ 'checkList.saving' | transloco }}</span>
                        }
                        <button type="button" class="check-list-cta check-list-pill" [disabled]="!canBatch()" (click)="openBatch()">
                            {{ 'checkList.createSmartBatch' | transloco }}
                        </button>
                    </div>
                    @if (batchCountryNeeded()) {
                        <div class="flex w-full flex-wrap gap-2">
                            <p class="w-full text-sm text-[var(--cl-muted)]">
                                {{ 'checkList.chooseBatchCountry' | transloco }}
                            </p>
                            @for (country of selectedCountries(); track country) {
                                <button type="button" class="check-list-pill" (click)="confirmBatch(country)">
                                    {{ country }}
                                </button>
                            }
                        </div>
                    }
                </header>

                @if (error()) {
                    <p class="mt-4 text-sm text-rose-600">{{ error() | transloco }}</p>
                }

                <section class="mt-6">
                    <div class="flex flex-wrap gap-2">
                        @for (country of selectedCountries(); track country) {
                            <span class="check-list-pill is-readonly">
                                @switch (flagUi(country).k) {
                                    @case ('img') {
                                        <img [src]="$any(flagUi(country)).src" alt="" class="h-4 w-4 rounded-full object-cover" />
                                    }
                                    @case ('globe') {
                                        <mat-icon class="!h-4 !w-4 !text-[16px]">public</mat-icon>
                                    }
                                }
                                {{ country }}
                            </span>
                        } @empty {
                            <span class="text-sm text-[var(--cl-muted)]">
                                {{ 'checkList.noCountries' | transloco }}
                            </span>
                        }
                    </div>
                </section>

                <section class="mt-8">
                    <div class="mb-4 flex items-center justify-between gap-3">
                        <h2 class="text-base font-semibold">{{ 'checkList.savedServices' | transloco }}</h2>
                        <span class="check-list-pill">
                            {{ selectedCodes().length }} {{ 'checkList.selected' | transloco }}
                        </span>
                    </div>
                    @if (!savedEndpoints().length) {
                        <div class="check-list-card p-6">
                            <p class="check-list-display text-xl">{{ 'checkList.emptyServicesTitle' | transloco }}</p>
                            <p class="mt-2 max-w-lg text-sm text-[var(--cl-muted)]">
                                {{ 'checkList.emptyServicesBody' | transloco }}
                            </p>
                        </div>
                    } @else {
                        <div class="grid gap-3 md:grid-cols-2">
                            @for (endpoint of savedEndpoints(); track endpoint.code || endpoint.id) {
                                <article
                                    class="check-list-card relative flex flex-col gap-4 p-5"
                                    [class.is-selected]="selectedEndpoint()?.code === endpoint.code"
                                >
                                    <span class="check-list-price">
                                        {{ 'checkList.cost' | transloco: { value: endpointCost(endpoint) } }}
                                    </span>
                                    <div class="pr-24">
                                        <h3 class="text-lg font-semibold">{{ endpointTitle(endpoint) }}</h3>
                                        <p class="mt-1 line-clamp-2 text-sm text-[var(--cl-muted)]">
                                            {{ endpointDescription(endpoint) }}
                                        </p>
                                    </div>
                                    <div class="mt-auto flex flex-wrap gap-2">
                                        <button type="button" class="check-list-cta check-list-pill" (click)="openEndpoint(endpoint)">
                                            {{ 'checkList.open' | transloco }}
                                        </button>
                                        <button type="button" class="check-list-pill is-danger" (click)="removeFeature(endpoint)">
                                            {{ 'checkList.removeFromList' | transloco }}
                                        </button>
                                    </div>
                                </article>
                            }
                        </div>
                    }
                </section>

                <section class="mt-8">
                    <h2 class="text-base font-semibold">{{ 'checkList.addServices' | transloco }}</h2>
                    <p class="mt-1 text-sm text-[var(--cl-muted)]">{{ 'checkList.addServicesHint' | transloco }}</p>
                    <label class="relative mt-4 block max-w-xl">
                        <mat-icon class="pointer-events-none absolute left-3 top-1/2 !h-4 !w-4 -translate-y-1/2 !text-[18px] text-[var(--cl-muted)]">search</mat-icon>
                        <input
                            class="check-list-field !pl-10"
                            [ngModel]="catalogQuery()"
                            (ngModelChange)="catalogQuery.set($event)"
                            [placeholder]="'checkList.searchPlaceholder' | transloco"
                        />
                    </label>
                    <div class="mt-4 flex flex-wrap gap-2">
                        @for (domain of domains; track domain.id) {
                            <button
                                type="button"
                                class="check-list-pill"
                                [class.is-on]="activeDomain() === domain.id"
                                (click)="selectDomain(domain.id)"
                            >
                                {{ domain.titleKey | transloco }}
                                <span class="opacity-70">{{ domain.count() }}</span>
                            </button>
                        }
                    </div>
                    @for (group of catalogGroups(); track group.id) {
                        <div class="mt-6">
                            <h3 class="text-sm font-semibold uppercase tracking-wide text-[var(--cl-muted)]">
                                {{ group.titleKey | transloco }}
                            </h3>
                            <div class="mt-3 grid gap-3 md:grid-cols-2">
                                @for (endpoint of group.endpoints; track endpoint.code || endpoint.id) {
                                    <article class="check-list-card relative flex flex-col gap-4 p-5">
                                        <span class="check-list-price">
                                            {{ 'checkList.cost' | transloco: { value: endpointCost(endpoint) } }}
                                        </span>
                                        <div class="pr-24">
                                            <h3 class="text-lg font-semibold">{{ endpointTitle(endpoint) }}</h3>
                                            <p class="mt-1 line-clamp-2 text-sm text-[var(--cl-muted)]">
                                                {{ endpointDescription(endpoint) }}
                                            </p>
                                        </div>
                                        <div class="mt-auto flex flex-wrap gap-2">
                                            <button type="button" class="check-list-cta check-list-pill" (click)="openEndpoint(endpoint)">
                                                {{ 'checkList.open' | transloco }}
                                            </button>
                                            <button type="button" class="check-list-pill" (click)="addFeature(endpoint)">
                                                {{ 'checkList.select' | transloco }}
                                            </button>
                                        </div>
                                    </article>
                                }
                            </div>
                        </div>
                    } @empty {
                        <p class="mt-4 text-sm text-[var(--cl-muted)]">
                            {{ (catalogQuery().trim() ? 'checkList.searchEmpty' : 'checkList.allAdded') | transloco }}
                        </p>
                    }
                </section>
            </div>

            @if (selectedEndpoint()) {
                <div class="fixed inset-0 z-40 bg-black/30" (click)="closeDetail()"></div>
                <div class="check-list-drawer fixed inset-y-0 right-0 z-50 p-3 sm:p-4">
                    <app-check-list-detail
                        class="block h-full"
                        [endpoint]="selectedEndpoint()"
                        [saved]="isSelected(selectedEndpoint())"
                        (closed)="closeDetail()"
                        (toggleSaved)="toggleFeature(selectedEndpoint())"
                        (batch)="openBatch(selectedEndpoint())"
                    ></app-check-list-detail>
                </div>
            }
        </div>
    `, styles: ['/* src/app/modules/check-list/check-list.styles.scss */\n.check-list-root {\n  --cl-ink: rgb(15, 23, 42);\n  --cl-muted: rgb(100, 116, 139);\n  --cl-paper: rgb(248, 250, 252);\n  --cl-card: rgb(255, 255, 255);\n  --cl-line: rgba(148, 163, 184, 0.22);\n  --cl-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  --cl-accent: rgb(37, 99, 235);\n  position: absolute;\n  inset: 0;\n  overflow: auto;\n  color: var(--cl-ink);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(37, 99, 235, 0.09),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(14, 165, 233, 0.07),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n.check-list-root * {\n  box-sizing: border-box;\n}\n.check-list-wrap {\n  width: min(1200px, 100% - 3rem);\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n.check-list-display {\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1.15;\n  color: var(--cl-ink);\n}\n.check-list-card {\n  background: var(--cl-card);\n  border: 1px solid var(--cl-line);\n  border-radius: 16px;\n  box-shadow: var(--cl-shadow);\n}\n.check-list-card.is-selected,\n.check-list-card.is-active {\n  border-color: rgba(37, 99, 235, 0.45);\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);\n}\n.check-list-price {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-paper);\n  color: var(--cl-muted);\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.check-list-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 36px;\n  padding: 0 16px;\n  border-radius: 999px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n  font-size: 13px;\n  font-weight: 600;\n  transition:\n    border-color 150ms ease,\n    background 150ms ease,\n    box-shadow 150ms ease;\n}\n.check-list-pill:hover {\n  border-color: rgba(37, 99, 235, 0.45);\n}\n.check-list-pill.is-on,\n.check-list-cta {\n  background: rgb(15, 23, 42);\n  color: rgb(255, 255, 255);\n  border-color: transparent;\n}\n.check-list-cta {\n  min-height: 40px;\n  padding: 0 18px;\n}\n.check-list-field {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid var(--cl-line);\n  background: var(--cl-card);\n  padding: 0.75rem 0.9rem;\n  font-size: 0.875rem;\n  color: var(--cl-ink);\n}\n.check-list-pill:disabled,\n.check-list-cta:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-pill.is-readonly {\n  pointer-events: none;\n}\n.check-list-icon-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: var(--cl-muted);\n}\n.check-list-icon-btn:hover {\n  background: rgba(148, 163, 184, 0.16);\n  color: var(--cl-ink);\n}\n.check-list-pill.is-danger:hover {\n  border-color: rgba(244, 63, 94, 0.55);\n  color: rgb(225, 29, 72);\n}\n.check-list-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.check-list-tab {\n  min-height: 34px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  background: transparent;\n  color: var(--cl-muted);\n  font-size: 13px;\n  font-weight: 600;\n}\n.check-list-tab.is-on {\n  border-color: var(--cl-line);\n  background: var(--cl-card);\n  color: var(--cl-ink);\n}\n.check-list-tab:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.check-list-drawer {\n  width: min(52rem, 100%);\n}\n.check-list-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid currentColor;\n  border-right-color: transparent;\n  border-radius: 999px;\n  animation: check-list-spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.check-list-spinner-lg {\n  width: 36px;\n  height: 36px;\n  border-width: 3px;\n  border-color: var(--cl-accent);\n  border-right-color: transparent;\n}\n.check-list-json {\n  margin: 0;\n  overflow: auto;\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 12px;\n  line-height: 1.55;\n  white-space: pre-wrap;\n  word-break: break-word;\n  color: var(--cl-ink);\n}\n@keyframes check-list-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.dark .check-list-root {\n  --cl-ink: rgb(248, 250, 252);\n  --cl-muted: rgb(148, 163, 184);\n  --cl-paper: rgb(15, 23, 42);\n  --cl-card: rgb(30, 41, 59);\n  --cl-line: rgba(148, 163, 184, 0.18);\n  --cl-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(56, 189, 248, 0.08),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.dark .check-list-card.is-selected,\n.dark .check-list-card.is-active {\n  border-color: rgba(96, 165, 250, 0.45);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n.dark .check-list-pill:hover {\n  border-color: rgba(96, 165, 250, 0.45);\n}\n.dark .check-list-pill.is-danger:hover {\n  border-color: rgba(251, 113, 133, 0.55);\n  color: rgb(251, 113, 133);\n}\n.dark .check-list-pill.is-on,\n.dark .check-list-cta {\n  background: rgb(226, 232, 240);\n  color: rgb(15, 23, 42);\n}\n/*# sourceMappingURL=check-list.styles.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckListWorkspaceComponent, { className: "CheckListWorkspaceComponent", filePath: "src/app/modules/check-list/check-list-workspace.component.ts", lineNumber: 251 });
})();

// src/app/modules/check-list/check-list.routes.ts
var check_list_routes_default = [
  {
    path: "",
    component: CheckListDashboardComponent
  },
  {
    path: "new",
    component: CheckListCreateComponent
  },
  {
    path: ":id",
    component: CheckListWorkspaceComponent
  }
];
export {
  check_list_routes_default as default
};
//# sourceMappingURL=chunk-MU3IVTOO.js.map
