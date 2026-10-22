import {
  NationalitySelectComponent,
  normalizeNationalityCode
} from "./chunk-ZR4RFQ5X.js";
import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-J7TSFZZL.js";
import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-LJHW6WXX.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "./chunk-OE53JTO2.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-XL5FUCYU.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-JSHIWGJY.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-PI7X3PUO.js";
import {
  toHttpParams
} from "./chunk-NNMFBAZF.js";
import {
  SMART_ENROLL_PROJECT_TYPE
} from "./chunk-VAHIF73V.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-2TFX63P7.js";
import {
  MatSnackBar
} from "./chunk-N6A4QSA6.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-X2PSIDHT.js";
import {
  SelectionModel
} from "./chunk-W5MZFF7W.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef
} from "./chunk-HVUVGZ2L.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-PJFCLQ64.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-JBF67GMG.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  NgClass,
  NgIf,
  Output,
  Subject,
  ViewChild,
  ViewEncapsulation,
  forkJoin,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/biometrics/collections.service.ts
var CollectionsService = class _CollectionsService {
  constructor() {
    this._http = inject(HttpClient);
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  createCollection(collection) {
    return this._http.post(`${this.apiUrl}/v2/face-recognition/collections`, collection, { headers: this.authHeaders() });
  }
  deleteCollection(id) {
    return this._http.delete(`${this.apiUrl}/v2/face-recognition/collections/${id}`, {
      headers: this.authHeaders()
    });
  }
  getAllCollections(params = {}) {
    return this._http.get(`${this.apiUrl}/v2/face-recognition/collections`, {
      headers: this.authHeaders(),
      params: toHttpParams(params)
    });
  }
  getCollectionByProjectType(projectType, params = {}) {
    const payload = __spreadValues({}, params);
    if (payload["image"] && typeof payload["image"] === "string") {
      payload["image"] = payload["image"].replace(/^data:.*;base64,/, "");
      return this._http.post(`${this.apiUrl}/v2/face-recognition/collections/project-type/${projectType}`, payload, { headers: this.authHeaders() });
    }
    return this._http.get(`${this.apiUrl}/v2/face-recognition/collections/project-type/${projectType}`, { headers: this.authHeaders(), params: toHttpParams(payload) });
  }
  movePeopleToCollection(peopleIds, fromCollection, toCollection) {
    return this._http.post(`${this.apiUrl}/v2/face-recognition/collections/move-people`, { fromCollection, toCollection, peopleIds }, { headers: this.authHeaders() });
  }
  updateCollection(collection) {
    return this._http.put(`${this.apiUrl}/v2/face-recognition/collections/${collection._id}`, collection, { headers: this.authHeaders() });
  }
  static {
    this.\u0275fac = function CollectionsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CollectionsService, factory: _CollectionsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/smart-enroll/biometrics/collections.util.ts
var SCOPE_SORT_ORDER = {
  smartEnroll: 0,
  other: 1,
  demo: 2
};
var getOnboardingCollectionCodes = (collections) => new Set(collections.map((collection) => collection.code).filter(Boolean));
var classifyCollectionScope = (collection, onboardingCodes) => {
  if (collection.isDemoCollection)
    return "demo";
  if (onboardingCodes.has(collection.code))
    return "smartEnroll";
  return "other";
};
var classifyCollections = (collections, onboardingCodes) => collections.map((collection) => {
  const collectionScopeType = classifyCollectionScope(collection, onboardingCodes);
  return __spreadProps(__spreadValues({}, collection), {
    collectionScopeType,
    isSmartEnrollCollection: collectionScopeType === "smartEnroll"
  });
});
var mergeAccountCollections = (allCollections, onboardingCollections, ensureCodes = [], extraCollections = []) => {
  const byCode = /* @__PURE__ */ new Map();
  const addCollection = (collection) => {
    if (!collection?.code)
      return;
    byCode.set(collection.code, __spreadValues(__spreadValues({}, byCode.get(collection.code)), collection));
  };
  allCollections.forEach(addCollection);
  onboardingCollections.forEach(addCollection);
  extraCollections.forEach(addCollection);
  const onboardingCodes = getOnboardingCollectionCodes(onboardingCollections);
  ensureCodes.forEach((code) => {
    if (byCode.has(code))
      return;
    byCode.set(code, {
      _id: code,
      code,
      name: code,
      description: "",
      project: "",
      createdAt: "",
      updatedAt: ""
    });
  });
  return sortCollectionsByScope(classifyCollections(Array.from(byCode.values()), onboardingCodes));
};
var sortCollectionsByScope = (collections) => [...collections].sort((left, right) => {
  const leftOrder = SCOPE_SORT_ORDER[left.collectionScopeType ?? "other"];
  const rightOrder = SCOPE_SORT_ORDER[right.collectionScopeType ?? "other"];
  if (leftOrder !== rightOrder)
    return leftOrder - rightOrder;
  return left.name.localeCompare(right.name);
});
var getCollectionBadgeKey = (collection) => {
  switch (collection.collectionScopeType) {
    case "demo":
      return "smartEnrollCollections.collectionBadgeDemo";
    case "smartEnroll":
      return "smartEnrollCollections.collectionBadgeSmartEnroll";
    default:
      return "smartEnrollCollections.collectionBadgeOther";
  }
};

// src/app/modules/smart-enroll/biometrics/people.service.ts
var PeopleService = class _PeopleService {
  constructor() {
    this._http = inject(HttpClient);
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  createPerson(payload) {
    const body = __spreadProps(__spreadValues({}, payload), {
      images: payload.images.map((image) => image.replace(/^data:.*;base64,/, ""))
    });
    return this._http.post(`${this.apiUrl}/v2/face-recognition/persons`, body, {
      headers: this.authHeaders()
    });
  }
  createPersonWithLiveness(payload) {
    const body = __spreadProps(__spreadValues({}, payload), {
      images: payload.images.map((image) => image.replace(/^data:.*;base64,/, ""))
    });
    return this._http.post(`${this.apiUrl}/v2/face-recognition/persons/search-live-face`, body, { headers: this.authHeaders() });
  }
  deletePerson(id) {
    return this._http.delete(`${this.apiUrl}/v2/face-recognition/persons/${id}`, {
      headers: this.authHeaders()
    });
  }
  getPeople(params = {}) {
    return this._http.get(`${this.apiUrl}/v2/face-recognition/persons`, {
      headers: this.authHeaders(),
      params: toHttpParams(params)
    });
  }
  getPeopleByProjectType(projectType, params = {}) {
    const payload = __spreadValues({}, params);
    if (payload["image"] && typeof payload["image"] === "string") {
      payload["image"] = payload["image"].replace(/^data:.*;base64,/, "");
      return this._http.post(`${this.apiUrl}/v2/face-recognition/persons/project-type/${projectType}`, payload, { headers: this.authHeaders() });
    }
    return this._http.get(`${this.apiUrl}/v2/face-recognition/persons/project-type/${projectType}`, { headers: this.authHeaders(), params: toHttpParams(payload) });
  }
  updatePerson(person) {
    return this._http.put(`${this.apiUrl}/v2/face-recognition/persons/${person._id}`, person, { headers: this.authHeaders() });
  }
  static {
    this.\u0275fac = function PeopleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PeopleService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PeopleService, factory: _PeopleService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PeopleService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/smart-enroll/shared/biometrics-confirm-dialog.component.ts
function BiometricsConfirmDialogComponent_div_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.subtitle, " ");
  }
}
function BiometricsConfirmDialogComponent_div_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.warning, " ");
  }
}
function BiometricsConfirmDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "div", 4)(4, "mat-icon");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "h2", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BiometricsConfirmDialogComponent_div_0_Conditional_9_Template, 2, 1, "p", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function BiometricsConfirmDialogComponent_div_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(11, "mat-icon", 9);
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "mat-dialog-content", 10)(14, "div", 11)(15, "p", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, BiometricsConfirmDialogComponent_div_0_Conditional_17_Template, 2, 1, "p", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 14)(19, "button", 15);
    \u0275\u0275listener("click", function BiometricsConfirmDialogComponent_div_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 16);
    \u0275\u0275listener("click", function BiometricsConfirmDialogComponent_div_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.data.icon || "delete_forever");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data.subtitle ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.message, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data.warning ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.cancelLabel || t_r3("cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.confirmLabel || t_r3("confirm"), " ");
  }
}
var BIOMETRICS_CONFIRM_DIALOG_PANEL_CLASS = "biometrics-confirm-dialog-panel";
var BiometricsConfirmDialogComponent = class _BiometricsConfirmDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this._dialogRef = inject(MatDialogRef);
  }
  onConfirm() {
    this._dialogRef.close({ action: "delete" });
  }
  onCancel() {
    this._dialogRef.close({ action: "cancel" });
  }
  static {
    this.\u0275fac = function BiometricsConfirmDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BiometricsConfirmDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BiometricsConfirmDialogComponent, selectors: [["app-biometrics-confirm-dialog"]], decls: 1, vars: 0, consts: [["class", "flex w-full flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70", 4, "transloco"], [1, "flex", "w-full", "flex-col", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "flex", "items-start", "justify-between", "gap-4", "border-b", "border-stone-200/90", "px-5", "py-5", "dark:border-gray-800", "md:px-6"], [1, "flex", "min-w-0", "items-start", "gap-3"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-red-200", "bg-red-50", "text-red-600", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-400"], [1, "min-w-0"], [1, "text-xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "mt-1", "truncate", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "inline-flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "text-stone-500", "transition", "hover:bg-stone-50", "hover:text-stone-800", "dark:border-gray-700", "dark:text-stone-400", "dark:hover:bg-gray-800", "dark:hover:text-stone-200", 3, "click"], [1, "!h-5", "!w-5", "!text-xl"], [1, "!m-0", "!flex", "!flex-col", "!gap-4", "!overflow-y-auto", "px-5", "py-6", "dark:text-stone-100", "md:px-6"], [1, "rounded-xl", "border", "border-red-200/80", "bg-red-50/60", "px-4", "py-4", "dark:border-red-900/40", "dark:bg-red-950/20"], [1, "m-0", "text-sm", "leading-6", "text-stone-700", "dark:text-stone-300"], [1, "mb-0", "mt-2", "text-xs", "leading-5", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col-reverse", "gap-2", "border-t", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800", "sm:flex-row", "sm:justify-end", "sm:gap-3", "md:px-6"], ["mat-stroked-button", "", "type", "button", 1, "!min-h-11", "w-full", "!rounded-xl", "!border-stone-200", "!font-medium", "sm:w-auto", "dark:!border-gray-700", 3, "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 1, "!min-h-11", "w-full", "!rounded-xl", "px-5", "sm:w-auto", 3, "click"]], template: function BiometricsConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BiometricsConfirmDialogComponent_div_0_Template, 23, 7, "div", 0);
      }
    }, dependencies: [MatDialogModule, MatDialogContent, MatButtonModule, MatButton, MatIconModule, MatIcon, TranslocoModule, TranslocoDirective], styles: ["/* src/app/modules/smart-enroll/shared/biometrics-confirm-dialog.component.scss */\n.biometrics-confirm-dialog-panel.cdk-overlay-pane {\n  max-width: min(480px, 94vw);\n}\n.biometrics-confirm-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.biometrics-confirm-dialog-panel .mat-mdc-dialog-surface {\n  border-radius: 1rem !important;\n  overflow: hidden;\n  background: transparent !important;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08);\n}\n/*# sourceMappingURL=biometrics-confirm-dialog.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BiometricsConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "app-biometrics-confirm-dialog", standalone: true, imports: [MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule], encapsulation: ViewEncapsulation.None, template: `<div\r
    class="flex w-full flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
    *transloco="let t"\r
>\r
    <header class="flex items-start justify-between gap-4 border-b border-stone-200/90 px-5 py-5 dark:border-gray-800 md:px-6">\r
        <div class="flex min-w-0 items-start gap-3">\r
            <div\r
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-600 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400"\r
            >\r
                <mat-icon>{{ data.icon || 'delete_forever' }}</mat-icon>\r
            </div>\r
            <div class="min-w-0">\r
                <h2 class="text-xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
                    {{ data.title }}\r
                </h2>\r
                @if (data.subtitle) {\r
                    <p class="mt-1 truncate text-sm leading-6 text-stone-500 dark:text-stone-400">\r
                        {{ data.subtitle }}\r
                    </p>\r
                }\r
            </div>\r
        </div>\r
        <button\r
            type="button"\r
            class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-stone-200 text-stone-500 transition hover:bg-stone-50 hover:text-stone-800 dark:border-gray-700 dark:text-stone-400 dark:hover:bg-gray-800 dark:hover:text-stone-200"\r
            (click)="onCancel()"\r
        >\r
            <mat-icon class="!h-5 !w-5 !text-xl">close</mat-icon>\r
        </button>\r
    </header>\r
\r
    <mat-dialog-content class="!m-0 !flex !flex-col !gap-4 !overflow-y-auto px-5 py-6 dark:text-stone-100 md:px-6">\r
        <div class="rounded-xl border border-red-200/80 bg-red-50/60 px-4 py-4 dark:border-red-900/40 dark:bg-red-950/20">\r
            <p class="m-0 text-sm leading-6 text-stone-700 dark:text-stone-300">\r
                {{ data.message }}\r
            </p>\r
            @if (data.warning) {\r
                <p class="mb-0 mt-2 text-xs leading-5 text-stone-500 dark:text-stone-400">\r
                    {{ data.warning }}\r
                </p>\r
            }\r
        </div>\r
    </mat-dialog-content>\r
\r
    <div class="flex flex-col-reverse gap-2 border-t border-stone-200/90 px-5 py-4 dark:border-gray-800 sm:flex-row sm:justify-end sm:gap-3 md:px-6">\r
        <button\r
            mat-stroked-button\r
            type="button"\r
            class="!min-h-11 w-full !rounded-xl !border-stone-200 !font-medium sm:w-auto dark:!border-gray-700"\r
            (click)="onCancel()"\r
        >\r
            {{ data.cancelLabel || t('cancel') }}\r
        </button>\r
        <button\r
            mat-flat-button\r
            color="warn"\r
            type="button"\r
            class="!min-h-11 w-full !rounded-xl px-5 sm:w-auto"\r
            (click)="onConfirm()"\r
        >\r
            {{ data.confirmLabel || t('confirm') }}\r
        </button>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/shared/biometrics-confirm-dialog.component.scss */\n.biometrics-confirm-dialog-panel.cdk-overlay-pane {\n  max-width: min(480px, 94vw);\n}\n.biometrics-confirm-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.biometrics-confirm-dialog-panel .mat-mdc-dialog-surface {\n  border-radius: 1rem !important;\n  overflow: hidden;\n  background: transparent !important;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08);\n}\n/*# sourceMappingURL=biometrics-confirm-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BiometricsConfirmDialogComponent, { className: "BiometricsConfirmDialogComponent", filePath: "src/app/modules/smart-enroll/shared/biometrics-confirm-dialog.component.ts", lineNumber: 27 });
})();

// src/app/modules/smart-enroll/shared/biometrics-people-table.component.ts
function BiometricsPeopleTableComponent_ng_container_0_ng_container_3_th_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 25)(1, "mat-checkbox", 26);
    \u0275\u0275listener("change", function BiometricsPeopleTableComponent_ng_container_0_ng_container_3_th_1_Template_mat_checkbox_change_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView($event ? ctx_r2.masterToggle() : null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("disabled", ctx_r2.disableActions);
  }
}
function BiometricsPeopleTableComponent_ng_container_0_ng_container_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 27)(1, "mat-checkbox", 28);
    \u0275\u0275listener("change", function BiometricsPeopleTableComponent_ng_container_0_ng_container_3_td_2_Template_mat_checkbox_change_1_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView($event ? ctx_r2.toggleRow(row_r5) : null);
    })("click", function BiometricsPeopleTableComponent_ng_container_0_ng_container_3_td_2_Template_mat_checkbox_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selection.isSelected(row_r5))("disabled", ctx_r2.disableActions);
  }
}
function BiometricsPeopleTableComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 22);
    \u0275\u0275template(1, BiometricsPeopleTableComponent_ng_container_0_ng_container_3_th_1_Template, 2, 3, "th", 23)(2, BiometricsPeopleTableComponent_ng_container_0_ng_container_3_td_2_Template, 2, 2, "td", 24);
    \u0275\u0275elementContainerEnd();
  }
}
function BiometricsPeopleTableComponent_ng_container_0_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollPeople.image"), " ");
  }
}
function BiometricsPeopleTableComponent_ng_container_0_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275element(1, "img", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.getRowThumbnail(element_r7), \u0275\u0275sanitizeUrl)("alt", element_r7.name);
  }
}
function BiometricsPeopleTableComponent_ng_container_0_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollPeople.nameId"), " ");
  }
}
function BiometricsPeopleTableComponent_ng_container_0_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30)(1, "div", 33)(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(element_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r8._id);
  }
}
function BiometricsPeopleTableComponent_ng_container_0_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollPeople.dateOfBirth"), " ");
  }
}
function BiometricsPeopleTableComponent_ng_container_0_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, element_r9.date_of_birth, "MMM d, yyyy"), " ");
  }
}
function BiometricsPeopleTableComponent_ng_container_0_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollPeople.nationality"), " ");
  }
}
function BiometricsPeopleTableComponent_ng_container_0_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r10.nationality || "\u2014", " ");
  }
}
function BiometricsPeopleTableComponent_ng_container_0_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollPeople.lastUpdated"), " ");
  }
}
function BiometricsPeopleTableComponent_ng_container_0_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, element_r11.updatedAt, "short"), " ");
  }
}
function BiometricsPeopleTableComponent_ng_container_0_ng_container_19_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("smartEnrollPeople.actions"), " ");
  }
}
function BiometricsPeopleTableComponent_ng_container_0_ng_container_19_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 41)(1, "div", 42)(2, "button", 43);
    \u0275\u0275listener("click", function BiometricsPeopleTableComponent_ng_container_0_ng_container_19_td_2_Template_button_click_2_listener($event) {
      const element_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.editItem(element_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "mat-icon", 44);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function BiometricsPeopleTableComponent_ng_container_0_ng_container_19_td_2_Template_button_click_5_listener($event) {
      const element_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.deleteItem(element_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(6, "mat-icon", 46);
    \u0275\u0275text(7, "delete_forever");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.disableActions);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.disableActions);
  }
}
function BiometricsPeopleTableComponent_ng_container_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 37);
    \u0275\u0275template(1, BiometricsPeopleTableComponent_ng_container_0_ng_container_19_th_1_Template, 2, 1, "th", 38)(2, BiometricsPeopleTableComponent_ng_container_0_ng_container_19_td_2_Template, 8, 2, "td", 39);
    \u0275\u0275elementContainerEnd();
  }
}
function BiometricsPeopleTableComponent_ng_container_0_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 47);
  }
}
function BiometricsPeopleTableComponent_ng_container_0_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function BiometricsPeopleTableComponent_ng_container_0_tr_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 50);
  }
}
function BiometricsPeopleTableComponent_ng_container_0_tr_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6("smartEnrollPeople.noRecords"));
  }
}
function BiometricsPeopleTableComponent_ng_container_0_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275template(2, BiometricsPeopleTableComponent_ng_container_0_tr_22_Conditional_2_Template, 1, 0, "mat-progress-bar", 50)(3, BiometricsPeopleTableComponent_ng_container_0_tr_22_Conditional_3_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.displayedColumns.length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loading ? 2 : 3);
  }
}
function BiometricsPeopleTableComponent_ng_container_0_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r14 = ctx.$implicit;
    \u0275\u0275property("value", size_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r14);
  }
}
function BiometricsPeopleTableComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "table", 2);
    \u0275\u0275template(3, BiometricsPeopleTableComponent_ng_container_0_ng_container_3_Template, 3, 0, "ng-container", 3);
    \u0275\u0275elementContainerStart(4, 4);
    \u0275\u0275template(5, BiometricsPeopleTableComponent_ng_container_0_th_5_Template, 2, 1, "th", 5)(6, BiometricsPeopleTableComponent_ng_container_0_td_6_Template, 2, 2, "td", 6);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 7);
    \u0275\u0275template(8, BiometricsPeopleTableComponent_ng_container_0_th_8_Template, 2, 1, "th", 8)(9, BiometricsPeopleTableComponent_ng_container_0_td_9_Template, 6, 2, "td", 6);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 9);
    \u0275\u0275template(11, BiometricsPeopleTableComponent_ng_container_0_th_11_Template, 2, 1, "th", 8)(12, BiometricsPeopleTableComponent_ng_container_0_td_12_Template, 3, 4, "td", 10);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 11);
    \u0275\u0275template(14, BiometricsPeopleTableComponent_ng_container_0_th_14_Template, 2, 1, "th", 5)(15, BiometricsPeopleTableComponent_ng_container_0_td_15_Template, 2, 1, "td", 10);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 12);
    \u0275\u0275template(17, BiometricsPeopleTableComponent_ng_container_0_th_17_Template, 2, 1, "th", 8)(18, BiometricsPeopleTableComponent_ng_container_0_td_18_Template, 3, 4, "td", 10);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(19, BiometricsPeopleTableComponent_ng_container_0_ng_container_19_Template, 3, 0, "ng-container", 13)(20, BiometricsPeopleTableComponent_ng_container_0_tr_20_Template, 1, 0, "tr", 14)(21, BiometricsPeopleTableComponent_ng_container_0_tr_21_Template, 1, 0, "tr", 15)(22, BiometricsPeopleTableComponent_ng_container_0_tr_22_Template, 4, 2, "tr", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 17)(24, "label", 18)(25, "select", 19);
    \u0275\u0275listener("change", function BiometricsPeopleTableComponent_ng_container_0_Template_select_change_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageSizeChange(+$event.target.value));
    });
    \u0275\u0275repeaterCreate(26, BiometricsPeopleTableComponent_ng_container_0_For_27_Template, 2, 2, "option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "mat-paginator", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.hideCheckboxes);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", !ctx_r2.hideActions);
    \u0275\u0275advance();
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.pageSize)("disabled", ctx_r2.disableActions);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.pageSizeOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.disableActions)("pageSize", ctx_r2.pageSize)("hidePageSize", true);
  }
}
var BiometricsPeopleTableComponent = class _BiometricsPeopleTableComponent {
  constructor() {
    this.disableActions = false;
    this.filterText = "";
    this.hideActions = false;
    this.hideCheckboxes = false;
    this.loading = false;
    this.people = [];
    this.preSelectedPeople = [];
    this.deletePerson = new EventEmitter();
    this.editPerson = new EventEmitter();
    this.selectionChange = new EventEmitter();
    this._cdr = inject(ChangeDetectorRef);
    this._unsubscriber$ = new Subject();
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = [];
    this.selection = new SelectionModel(true, []);
    this.pageSizeOptions = [25, 50, 100];
    this.pageSize = 25;
    this.dataSource.filterPredicate = (person, filter) => {
      const term = filter.trim().toLowerCase();
      if (!term)
        return true;
      return person.name?.toLowerCase().includes(term) || person._id?.toLowerCase().includes(term) || person.nationality?.toLowerCase().includes(term);
    };
  }
  ngAfterViewInit() {
    this._syncColumns();
    this._syncTableControls();
    this._applyPreselection();
    this.clearSelections$?.pipe(takeUntil(this._unsubscriber$)).subscribe(() => {
      this.selection.clear();
      this.selectionChange.emit([]);
      this._cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    if (changes["people"]) {
      this.dataSource.data = this.people || [];
      this._syncTableControls();
      this._applyPreselection();
    }
    if (changes["filterText"]) {
      this.dataSource.filter = this.filterText || "";
    }
    if (changes["hideCheckboxes"] || changes["hideActions"]) {
      this._syncColumns();
    }
    if (changes["preSelectedPeople"]) {
      this._applyPreselection();
    }
    this._cdr.markForCheck();
  }
  ngOnDestroy() {
    this._unsubscriber$.next();
    this._unsubscriber$.complete();
  }
  getRowThumbnail(person) {
    const thumb = person.thumbnails?.[0]?.thumbnail;
    if (!thumb)
      return "assets/images/avatars/default.jpg";
    const cleaned = thumb.replace(/^data:.*;base64,/, "");
    return `data:image/png;base64,${cleaned}`;
  }
  isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length && this.dataSource.data.length > 0;
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSource.data.forEach((row) => this.selection.select(row));
    }
    this.selectionChange.emit(this.selection.selected);
  }
  toggleRow(row) {
    this.selection.toggle(row);
    this.selectionChange.emit(this.selection.selected);
  }
  editItem(person) {
    this.editPerson.emit(person);
  }
  deleteItem(person) {
    this.deletePerson.emit(person);
  }
  onPageSizeChange(pageSize) {
    if (!pageSize || pageSize === this.pageSize)
      return;
    this.pageSize = pageSize;
    if (this.paginator) {
      this.paginator.pageIndex = 0;
      this.paginator.pageSize = pageSize;
      this.dataSource.paginator = this.paginator;
    }
    this._cdr.markForCheck();
  }
  _syncColumns() {
    const cols = [];
    if (!this.hideCheckboxes)
      cols.push("selected");
    cols.push("image", "name", "dateOfBirth", "nationality", "updatedAt");
    if (!this.hideActions)
      cols.push("actions");
    this.displayedColumns = cols;
  }
  _syncTableControls() {
    if (this.paginator)
      this.dataSource.paginator = this.paginator;
    if (this.sort)
      this.dataSource.sort = this.sort;
  }
  _applyPreselection() {
    if (!this.preSelectedPeople?.length)
      return;
    this.selection.clear();
    this.preSelectedPeople.forEach((person) => {
      const match = this.dataSource.data.find((row) => row._id === person._id);
      if (match)
        this.selection.select(match);
    });
  }
  static {
    this.\u0275fac = function BiometricsPeopleTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BiometricsPeopleTableComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BiometricsPeopleTableComponent, selectors: [["app-biometrics-people-table"]], viewQuery: function BiometricsPeopleTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5);
        \u0275\u0275viewQuery(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, inputs: { clearSelections$: "clearSelections$", disableActions: "disableActions", filterText: "filterText", hideActions: "hideActions", hideCheckboxes: "hideCheckboxes", loading: "loading", people: "people", preSelectedPeople: "preSelectedPeople" }, outputs: { deletePerson: "deletePerson", editPerson: "editPerson", selectionChange: "selectionChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "overflow-x-auto", "rounded-xl", "border", "border-stone-200/80", "dark:border-gray-800"], ["mat-table", "", "matSort", "", 1, "w-full", "bg-transparent", 3, "dataSource"], ["matColumnDef", "selected", 4, "ngIf"], ["matColumnDef", "image"], ["mat-header-cell", "", "class", "!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "!px-4 !py-4", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", "class", "!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400", 4, "matHeaderCellDef"], ["matColumnDef", "dateOfBirth"], ["mat-cell", "", "class", "!px-4 !py-4 text-sm text-stone-600 dark:text-stone-300", 4, "matCellDef"], ["matColumnDef", "nationality"], ["matColumnDef", "updatedAt"], ["matColumnDef", "actions", 4, "ngIf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "h-auto border-b border-stone-100 transition hover:bg-stone-50/80 dark:border-gray-800 dark:hover:bg-gray-800/40", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], [1, "mt-4", "flex", "flex-wrap", "items-center", "justify-end", "gap-3"], [1, "flex", "items-center", "gap-2", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "py-1", "text-sm", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200", 3, "change", "value", "disabled"], [3, "value"], [1, "!rounded-xl", "!border", "!border-stone-200/80", "dark:!border-gray-800", 3, "disabled", "pageSize", "hidePageSize"], ["matColumnDef", "selected"], ["mat-header-cell", "", "class", "min-w-20 max-w-20 !border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 dark:!border-gray-800 dark:!bg-gray-950/50", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "min-w-20 max-w-20 !px-4", 4, "matCellDef"], ["mat-header-cell", "", 1, "min-w-20", "max-w-20", "!border-b", "!border-stone-200/80", "!bg-stone-50/80", "!px-4", "!py-3", "dark:!border-gray-800", "dark:!bg-gray-950/50"], [3, "change", "checked", "indeterminate", "disabled"], ["mat-cell", "", 1, "min-w-20", "max-w-20", "!px-4"], [3, "change", "click", "checked", "disabled"], ["mat-header-cell", "", 1, "!border-b", "!border-stone-200/80", "!bg-stone-50/80", "!px-4", "!py-3", "text-xs", "font-semibold", "uppercase", "tracking-[0.12em]", "text-stone-500", "dark:!border-gray-800", "dark:!bg-gray-950/50", "dark:text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4"], [1, "h-10", "w-10", "rounded-full", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src", "alt"], ["mat-header-cell", "", "mat-sort-header", "", 1, "!border-b", "!border-stone-200/80", "!bg-stone-50/80", "!px-4", "!py-3", "text-xs", "font-semibold", "uppercase", "tracking-[0.12em]", "text-stone-500", "dark:!border-gray-800", "dark:!bg-gray-950/50", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-1"], [1, "font-semibold", "text-stone-950", "dark:text-white"], [1, "font-mono", "text-xs", "text-stone-500", "dark:text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4", "text-sm", "text-stone-600", "dark:text-stone-300"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "!px-4 !py-4 text-right", 4, "matCellDef"], ["mat-header-cell", "", 1, "!border-b", "!border-stone-200/80", "!bg-stone-50/80", "!px-4", "!py-3", "text-right", "text-xs", "font-semibold", "uppercase", "tracking-[0.12em]", "text-stone-500", "dark:!border-gray-800", "dark:!bg-gray-950/50", "dark:text-stone-400"], ["mat-cell", "", 1, "!px-4", "!py-4", "text-right"], [1, "inline-flex", "items-center", "gap-1"], ["mat-icon-button", "", "type", "button", 1, "!rounded-lg", "hover:!bg-stone-100", "dark:hover:!bg-gray-800", 3, "click", "disabled"], [1, "!text-stone-600", "dark:!text-stone-300"], ["mat-icon-button", "", "type", "button", 1, "!rounded-lg", "hover:!bg-red-50", "dark:hover:!bg-red-950/30", 3, "click", "disabled"], [1, "!text-red-600", "dark:!text-red-400"], ["mat-header-row", ""], ["mat-row", "", 1, "h-auto", "border-b", "border-stone-100", "transition", "hover:bg-stone-50/80", "dark:border-gray-800", "dark:hover:bg-gray-800/40"], [1, "py-12", "text-center"], ["mode", "indeterminate"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"]], template: function BiometricsPeopleTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BiometricsPeopleTableComponent_ng_container_0_Template, 29, 11, "ng-container", 0);
      }
    }, dependencies: [CommonModule, NgIf, DatePipe, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, MatCheckboxModule, MatCheckbox, MatButtonModule, MatIconButton, MatIconModule, MatIcon, MatProgressBarModule, MatProgressBar, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BiometricsPeopleTableComponent, [{
    type: Component,
    args: [{ selector: "app-biometrics-people-table", standalone: true, imports: [
      CommonModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatCheckboxModule,
      MatButtonModule,
      MatIconModule,
      MatProgressBarModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="overflow-x-auto rounded-xl border border-stone-200/80 dark:border-gray-800">\r
        <table mat-table [dataSource]="dataSource" matSort class="w-full bg-transparent">\r
            <ng-container matColumnDef="selected" *ngIf="!hideCheckboxes">\r
                <th mat-header-cell *matHeaderCellDef class="min-w-20 max-w-20 !border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 dark:!border-gray-800 dark:!bg-gray-950/50">\r
                    <mat-checkbox\r
                        (change)="$event ? masterToggle() : null"\r
                        [checked]="selection.hasValue() && isAllSelected()"\r
                        [indeterminate]="selection.hasValue() && !isAllSelected()"\r
                        [disabled]="disableActions"\r
                    ></mat-checkbox>\r
                </th>\r
                <td mat-cell *matCellDef="let row" class="min-w-20 max-w-20 !px-4">\r
                    <mat-checkbox\r
                        (change)="$event ? toggleRow(row) : null"\r
                        (click)="$event.stopPropagation()"\r
                        [checked]="selection.isSelected(row)"\r
                        [disabled]="disableActions"\r
                    ></mat-checkbox>\r
                </td>\r
            </ng-container>\r
\r
            <ng-container matColumnDef="image">\r
                <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                    {{ t('smartEnrollPeople.image') }}\r
                </th>\r
                <td mat-cell *matCellDef="let element" class="!px-4 !py-4">\r
                    <img\r
                        [src]="getRowThumbnail(element)"\r
                        [alt]="element.name"\r
                        class="h-10 w-10 rounded-full border border-stone-200 object-cover dark:border-gray-700"\r
                    />\r
                </td>\r
            </ng-container>\r
\r
            <ng-container matColumnDef="name">\r
                <th mat-header-cell *matHeaderCellDef mat-sort-header class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                    {{ t('smartEnrollPeople.nameId') }}\r
                </th>\r
                <td mat-cell *matCellDef="let element" class="!px-4 !py-4">\r
                    <div class="flex flex-col gap-1">\r
                        <span class="font-semibold text-stone-950 dark:text-white">{{ element.name }}</span>\r
                        <span class="font-mono text-xs text-stone-500 dark:text-stone-400">{{ element._id }}</span>\r
                    </div>\r
                </td>\r
            </ng-container>\r
\r
            <ng-container matColumnDef="dateOfBirth">\r
                <th mat-header-cell *matHeaderCellDef mat-sort-header class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                    {{ t('smartEnrollPeople.dateOfBirth') }}\r
                </th>\r
                <td mat-cell *matCellDef="let element" class="!px-4 !py-4 text-sm text-stone-600 dark:text-stone-300">\r
                    {{ element.date_of_birth | date: 'MMM d, yyyy' }}\r
                </td>\r
            </ng-container>\r
\r
            <ng-container matColumnDef="nationality">\r
                <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                    {{ t('smartEnrollPeople.nationality') }}\r
                </th>\r
                <td mat-cell *matCellDef="let element" class="!px-4 !py-4 text-sm text-stone-600 dark:text-stone-300">\r
                    {{ element.nationality || '\u2014' }}\r
                </td>\r
            </ng-container>\r
\r
            <ng-container matColumnDef="updatedAt">\r
                <th mat-header-cell *matHeaderCellDef mat-sort-header class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                    {{ t('smartEnrollPeople.lastUpdated') }}\r
                </th>\r
                <td mat-cell *matCellDef="let element" class="!px-4 !py-4 text-sm text-stone-600 dark:text-stone-300">\r
                    {{ element.updatedAt | date: 'short' }}\r
                </td>\r
            </ng-container>\r
\r
            <ng-container matColumnDef="actions" *ngIf="!hideActions">\r
                <th mat-header-cell *matHeaderCellDef class="!border-b !border-stone-200/80 !bg-stone-50/80 !px-4 !py-3 text-right text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 dark:!border-gray-800 dark:!bg-gray-950/50 dark:text-stone-400">\r
                    {{ t('smartEnrollPeople.actions') }}\r
                </th>\r
                <td mat-cell *matCellDef="let element" class="!px-4 !py-4 text-right">\r
                    <div class="inline-flex items-center gap-1">\r
                        <button\r
                            mat-icon-button\r
                            type="button"\r
                            class="!rounded-lg hover:!bg-stone-100 dark:hover:!bg-gray-800"\r
                            (click)="editItem(element); $event.stopPropagation()"\r
                            [disabled]="disableActions"\r
                        >\r
                            <mat-icon class="!text-stone-600 dark:!text-stone-300">edit</mat-icon>\r
                        </button>\r
                        <button\r
                            mat-icon-button\r
                            type="button"\r
                            class="!rounded-lg hover:!bg-red-50 dark:hover:!bg-red-950/30"\r
                            (click)="deleteItem(element); $event.stopPropagation()"\r
                            [disabled]="disableActions"\r
                        >\r
                            <mat-icon class="!text-red-600 dark:!text-red-400">delete_forever</mat-icon>\r
                        </button>\r
                    </div>\r
                </td>\r
            </ng-container>\r
\r
            <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>\r
            <tr\r
                mat-row\r
                *matRowDef="let row; columns: displayedColumns"\r
                class="h-auto border-b border-stone-100 transition hover:bg-stone-50/80 dark:border-gray-800 dark:hover:bg-gray-800/40"\r
            ></tr>\r
\r
            <tr *matNoDataRow>\r
                <td [attr.colspan]="displayedColumns.length" class="py-12 text-center">\r
                    @if (loading) {\r
                        <mat-progress-bar mode="indeterminate"></mat-progress-bar>\r
                    } @else {\r
                        <span class="text-sm text-stone-500 dark:text-stone-400">{{ t('smartEnrollPeople.noRecords') }}</span>\r
                    }\r
                </td>\r
            </tr>\r
        </table>\r
    </div>\r
\r
    <div class="mt-4 flex flex-wrap items-center justify-end gap-3">\r
        <label class="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">\r
            <select\r
                class="rounded-lg border border-stone-200 bg-white px-2 py-1 text-sm text-stone-800 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200"\r
                [value]="pageSize"\r
                [disabled]="disableActions"\r
                (change)="onPageSizeChange(+$any($event.target).value)"\r
            >\r
                @for (size of pageSizeOptions; track size) {\r
                    <option [value]="size">{{ size }}</option>\r
                }\r
            </select>\r
        </label>\r
        <mat-paginator\r
            class="!rounded-xl !border !border-stone-200/80 dark:!border-gray-800"\r
            [disabled]="disableActions"\r
            [pageSize]="pageSize"\r
            [hidePageSize]="true"\r
        ></mat-paginator>\r
    </div>\r
</ng-container>\r
` }]
  }], () => [], { clearSelections$: [{
    type: Input
  }], disableActions: [{
    type: Input
  }], filterText: [{
    type: Input
  }], hideActions: [{
    type: Input
  }], hideCheckboxes: [{
    type: Input
  }], loading: [{
    type: Input
  }], people: [{
    type: Input
  }], preSelectedPeople: [{
    type: Input
  }], deletePerson: [{
    type: Output
  }], editPerson: [{
    type: Output
  }], selectionChange: [{
    type: Output
  }], paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BiometricsPeopleTableComponent, { className: "BiometricsPeopleTableComponent", filePath: "src/app/modules/smart-enroll/shared/biometrics-people-table.component.ts", lineNumber: 45 });
})();

// src/app/modules/smart-enroll/shared/collection-scope-badge.component.ts
function CollectionScopeBadgeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.badgeClasses);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r0.getCollectionBadgeKey(ctx_r0.collection)), " ");
  }
}
var CollectionScopeBadgeComponent = class _CollectionScopeBadgeComponent {
  constructor() {
    this.getCollectionBadgeKey = getCollectionBadgeKey;
  }
  get badgeClasses() {
    switch (this.collection.collectionScopeType) {
      case "demo":
        return {
          "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200": true
        };
      case "smartEnroll":
        return {
          "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200": true
        };
      default:
        return {
          "bg-stone-100 text-stone-700 dark:bg-gray-800 dark:text-stone-300": true
        };
    }
  }
  static {
    this.\u0275fac = function CollectionScopeBadgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionScopeBadgeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionScopeBadgeComponent, selectors: [["app-collection-scope-badge"]], inputs: { collection: "collection" }, decls: 1, vars: 1, consts: [[1, "inline-flex", "items-center", "rounded-md", "px-2", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", 3, "ngClass"]], template: function CollectionScopeBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CollectionScopeBadgeComponent_Conditional_0_Template, 3, 4, "span", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.collection == null ? null : ctx.collection.collectionScopeType) ? 0 : -1);
      }
    }, dependencies: [CommonModule, NgClass, TranslocoModule, TranslocoPipe], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionScopeBadgeComponent, [{
    type: Component,
    args: [{
      selector: "app-collection-scope-badge",
      standalone: true,
      imports: [CommonModule, TranslocoModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
        @if (collection?.collectionScopeType) {
            <span
                class="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                [ngClass]="badgeClasses"
            >
                {{ getCollectionBadgeKey(collection) | transloco }}
            </span>
        }
    `
    }]
  }], null, { collection: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionScopeBadgeComponent, { className: "CollectionScopeBadgeComponent", filePath: "src/app/modules/smart-enroll/shared/collection-scope-badge.component.ts", lineNumber: 23 });
})();

// src/app/modules/smart-enroll/shared/edit-person-dialog.component.ts
var _forTrack0 = ($index, $item) => $item._id;
function EditPersonDialogComponent_div_0_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.photoPreview, \u0275\u0275sanitizeUrl);
  }
}
function EditPersonDialogComponent_div_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon");
    \u0275\u0275text(2, "person_add");
    \u0275\u0275elementEnd()();
  }
}
function EditPersonDialogComponent_div_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EditPersonDialogComponent_div_0_Conditional_3_Conditional_0_Template, 1, 1, "img", 14)(1, EditPersonDialogComponent_div_0_Conditional_3_Conditional_1_Template, 3, 0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.photoPreview ? 0 : 1);
  }
}
function EditPersonDialogComponent_div_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getRowThumbnail(ctx_r1.data.person), \u0275\u0275sanitizeUrl)("alt", ctx_r1.data.person.name);
  }
}
function EditPersonDialogComponent_div_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon");
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd()();
  }
}
function EditPersonDialogComponent_div_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.dialogCreateSubtitle"), " ");
  }
}
function EditPersonDialogComponent_div_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.person == null ? null : ctx_r1.data.person.name, " ");
  }
}
function EditPersonDialogComponent_div_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollCollections.loading"));
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 50);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.photoPreview, \u0275\u0275sanitizeUrl);
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "mat-icon");
    \u0275\u0275text(2, "photo_camera");
    \u0275\u0275elementEnd()();
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartEnrollPeople.photoRequired"));
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 20)(1, "h3", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-button-toggle-group", 44);
    \u0275\u0275listener("change", function EditPersonDialogComponent_div_0_Conditional_16_Conditional_2_Template_mat_button_toggle_group_change_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCreateMethodChange($event.value));
    });
    \u0275\u0275elementStart(4, "mat-button-toggle", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-button-toggle", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "section", 48)(11, "div", 49);
    \u0275\u0275template(12, EditPersonDialogComponent_div_0_Conditional_16_Conditional_2_Conditional_12_Template, 1, 1, "img", 50)(13, EditPersonDialogComponent_div_0_Conditional_16_Conditional_2_Conditional_13_Template, 3, 0, "div", 51);
    \u0275\u0275elementStart(14, "div", 52)(15, "label", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementStart(17, "span", 22);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 53);
    \u0275\u0275listener("click", function EditPersonDialogComponent_div_0_Conditional_16_Conditional_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const photoInput_r6 = \u0275\u0275reference(25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.triggerPhotoUpload(photoInput_r6));
    });
    \u0275\u0275elementStart(20, "mat-icon", 36);
    \u0275\u0275text(21, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 54, 1);
    \u0275\u0275listener("change", function EditPersonDialogComponent_div_0_Conditional_16_Conditional_2_Template_input_change_24_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPhotoSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 38);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, EditPersonDialogComponent_div_0_Conditional_16_Conditional_2_Conditional_28_Template, 2, 1, "p", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.createMethodLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.createMethod);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.createMethodStandard"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.createMethodLiveness"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3(ctx_r1.dialogSubtitleKey), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.photoPreview ? 12 : 13);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.referencePhoto"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.photoPreview ? t_r3("smartEnrollPeople.changePhoto") : t_r3("smartEnrollPeople.uploadPhoto"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartEnrollPeople.photoHint"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.photoError ? 28 : -1);
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartEnrollPeople.nameRequired"));
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartEnrollPeople.dateOfBirthRequired"));
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 56)(6, "option", 57);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 58);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.gender"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("smartEnrollPeople.genderMale"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollPeople.genderFemale"));
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "textarea", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.notes"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", t_r3("smartEnrollPeople.notesPlaceholder"));
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 32)(1, "mat-button-toggle-group", 61);
    \u0275\u0275listener("change", function EditPersonDialogComponent_div_0_Conditional_16_Conditional_29_Template_mat_button_toggle_group_change_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSearchModeChange($event.value));
    });
    \u0275\u0275elementStart(2, "mat-button-toggle", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-button-toggle", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 29)(7, "div", 64)(8, "label", 65);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-slider", 66);
    \u0275\u0275element(11, "input", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 64)(13, "label", 65);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-slider", 66);
    \u0275\u0275element(16, "input", 68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 69)(18, "mat-icon", 70);
    \u0275\u0275text(19, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 71);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_8_0;
    let tmp_9_0;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", (tmp_5_0 = ctx_r1.editForm.get("search_mode")) == null ? null : tmp_5_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollPeople.fast"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollPeople.accurate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", t_r3("smartEnrollPeople.minScore"), ": ", (tmp_8_0 = ctx_r1.editForm.get("min_score")) == null ? null : tmp_8_0.value, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", t_r3("smartEnrollPeople.livenessMinScore"), ": ", (tmp_9_0 = ctx_r1.editForm.get("liveness_min_score")) == null ? null : tmp_9_0.value, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.livenessBillingHint"), " ");
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.collectionRequired"), " ");
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.collectionsHint"), " ");
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_42_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 76);
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_42_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const collection_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", collection_r9.description, " ");
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_42_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275listener("click", function EditPersonDialogComponent_div_0_Conditional_16_Conditional_42_For_1_Template_div_click_0_listener() {
      const collection_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onLivenessCollectionSelect(collection_r9));
    });
    \u0275\u0275elementStart(1, "div", 75);
    \u0275\u0275template(2, EditPersonDialogComponent_div_0_Conditional_16_Conditional_42_For_1_Conditional_2_Template, 1, 0, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 77)(4, "div", 78)(5, "span", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-collection-scope-badge", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, EditPersonDialogComponent_div_0_Conditional_16_Conditional_42_For_1_Conditional_8_Template, 2, 1, "div", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const collection_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("border-stone-200", !ctx_r1.isLivenessCollectionSelected(collection_r9._id))("bg-white", !ctx_r1.isLivenessCollectionSelected(collection_r9._id))("border-indigo-300", ctx_r1.isLivenessCollectionSelected(collection_r9._id))("bg-indigo-50", ctx_r1.isLivenessCollectionSelected(collection_r9._id))("dark:border-gray-700", !ctx_r1.isLivenessCollectionSelected(collection_r9._id))("dark:bg-gray-950", !ctx_r1.isLivenessCollectionSelected(collection_r9._id))("dark:border-indigo-700", ctx_r1.isLivenessCollectionSelected(collection_r9._id))("dark:bg-indigo-950", ctx_r1.isLivenessCollectionSelected(collection_r9._id));
    \u0275\u0275advance();
    \u0275\u0275classProp("border-stone-300", !ctx_r1.isLivenessCollectionSelected(collection_r9._id))("border-indigo-600", ctx_r1.isLivenessCollectionSelected(collection_r9._id));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLivenessCollectionSelected(collection_r9._id) ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(collection_r9.name);
    \u0275\u0275advance();
    \u0275\u0275property("collection", collection_r9);
    \u0275\u0275advance();
    \u0275\u0275conditional(collection_r9.description ? 8 : -1);
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_42_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.noCollectionsAvailable"), " ");
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EditPersonDialogComponent_div_0_Conditional_16_Conditional_42_For_1_Template, 9, 24, "div", 72, _forTrack0, false, EditPersonDialogComponent_div_0_Conditional_16_Conditional_42_ForEmpty_2_Template, 2, 1, "div", 73);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.allCollections);
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_43_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const collection_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", collection_r11.description, " ");
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_43_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275listener("click", function EditPersonDialogComponent_div_0_Conditional_16_Conditional_43_For_1_Template_div_click_0_listener() {
      const collection_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onCollectionChange(collection_r11.code, !ctx_r1.isCollectionSelected(collection_r11.code)));
    });
    \u0275\u0275element(1, "mat-checkbox", 82);
    \u0275\u0275elementStart(2, "div", 77)(3, "div", 78)(4, "span", 79);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "app-collection-scope-badge", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, EditPersonDialogComponent_div_0_Conditional_16_Conditional_43_For_1_Conditional_7_Template, 2, 1, "div", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const collection_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("border-stone-200", !ctx_r1.isCollectionSelected(collection_r11.code))("bg-white", !ctx_r1.isCollectionSelected(collection_r11.code))("border-indigo-300", ctx_r1.isCollectionSelected(collection_r11.code))("bg-indigo-50", ctx_r1.isCollectionSelected(collection_r11.code))("dark:border-gray-700", !ctx_r1.isCollectionSelected(collection_r11.code))("dark:bg-gray-950", !ctx_r1.isCollectionSelected(collection_r11.code))("dark:border-indigo-700", ctx_r1.isCollectionSelected(collection_r11.code))("dark:bg-indigo-950", ctx_r1.isCollectionSelected(collection_r11.code));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isCollectionSelected(collection_r11.code));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(collection_r11.name);
    \u0275\u0275advance();
    \u0275\u0275property("collection", collection_r11);
    \u0275\u0275advance();
    \u0275\u0275conditional(collection_r11.description ? 7 : -1);
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_43_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.noCollectionsAvailable"), " ");
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EditPersonDialogComponent_div_0_Conditional_16_Conditional_43_For_1_Template, 8, 20, "div", 72, _forTrack0, false, EditPersonDialogComponent_div_0_Conditional_16_Conditional_43_ForEmpty_2_Template, 2, 1, "div", 73);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.allCollections);
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_44_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.warningPersonWillBeDeletedConfirmation"), " ");
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 40)(1, "mat-icon", 83);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 84)(4, "h4", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, EditPersonDialogComponent_div_0_Conditional_16_Conditional_44_Conditional_8_Template, 2, 1, "p", 87);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.warningPersonWillBeDeleted"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.warningPersonWillBeDeletedDescription"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showConfirmation ? 8 : -1);
  }
}
function EditPersonDialogComponent_div_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-dialog-content", 17)(1, "form", 18);
    \u0275\u0275template(2, EditPersonDialogComponent_div_0_Conditional_16_Conditional_2_Template, 29, 10);
    \u0275\u0275elementStart(3, "section", 19)(4, "div", 20)(5, "label", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 22);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "input", 23);
    \u0275\u0275template(10, EditPersonDialogComponent_div_0_Conditional_16_Conditional_10_Template, 2, 1, "p", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20)(12, "label", 25);
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "span", 22);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 26);
    \u0275\u0275element(17, "input", 27)(18, "mat-datepicker-toggle", 28)(19, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, EditPersonDialogComponent_div_0_Conditional_16_Conditional_21_Template, 2, 1, "p", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 29)(23, "div", 20)(24, "label", 30);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "app-nationality-select", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, EditPersonDialogComponent_div_0_Conditional_16_Conditional_27_Template, 10, 3, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, EditPersonDialogComponent_div_0_Conditional_16_Conditional_28_Template, 4, 2, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, EditPersonDialogComponent_div_0_Conditional_16_Conditional_29_Template, 22, 8, "section", 32);
    \u0275\u0275elementStart(30, "section", 33)(31, "div", 34)(32, "div", 35)(33, "mat-icon", 36);
    \u0275\u0275text(34, "folder");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "h3", 37);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 38);
    \u0275\u0275template(39, EditPersonDialogComponent_div_0_Conditional_16_Conditional_39_Template, 1, 1)(40, EditPersonDialogComponent_div_0_Conditional_16_Conditional_40_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 39);
    \u0275\u0275template(42, EditPersonDialogComponent_div_0_Conditional_16_Conditional_42_Template, 3, 1)(43, EditPersonDialogComponent_div_0_Conditional_16_Conditional_43_Template, 3, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, EditPersonDialogComponent_div_0_Conditional_16_Conditional_44_Template, 9, 3, "section", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 41)(46, "button", 42);
    \u0275\u0275listener("click", function EditPersonDialogComponent_div_0_Conditional_16_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 43);
    \u0275\u0275listener("click", function EditPersonDialogComponent_div_0_Conditional_16_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSave());
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_12_0;
    const dobPicker_r12 = \u0275\u0275reference(20);
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.editForm);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCreateMode ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.name"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(((tmp_7_0 = ctx_r1.editForm.get("name")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.editForm.get("name")) == null ? null : tmp_7_0.touched) ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.dateOfBirth"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("matDatepicker", dobPicker_r12)("placeholder", t_r3("smartEnrollPeople.dateOfBirthPlaceholder"));
    \u0275\u0275advance();
    \u0275\u0275property("for", dobPicker_r12);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_12_0 = ctx_r1.editForm.get("date_of_birth")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.editForm.get("date_of_birth")) == null ? null : tmp_12_0.touched) ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.nationality"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isCreateMode ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLivenessCreate ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLivenessCreate ? 29 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollPeople.collections"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isLivenessCreate ? 39 : 40);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isLivenessCreate ? 42 : 43);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasWarning && !ctx_r1.isCreateMode ? 44 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r1.currentSaveButtonColor)("disabled", ctx_r1.disableSave);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentSaveButtonText, " ");
  }
}
function EditPersonDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "header", 4)(2, "div", 5);
    \u0275\u0275template(3, EditPersonDialogComponent_div_0_Conditional_3_Template, 2, 1)(4, EditPersonDialogComponent_div_0_Conditional_4_Template, 1, 2, "img", 6)(5, EditPersonDialogComponent_div_0_Conditional_5_Template, 3, 0, "div", 7);
    \u0275\u0275elementStart(6, "div", 8)(7, "h2", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 10);
    \u0275\u0275template(10, EditPersonDialogComponent_div_0_Conditional_10_Template, 1, 1)(11, EditPersonDialogComponent_div_0_Conditional_11_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 11);
    \u0275\u0275listener("click", function EditPersonDialogComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(13, "mat-icon", 12);
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, EditPersonDialogComponent_div_0_Conditional_15_Template, 4, 1, "div", 13)(16, EditPersonDialogComponent_div_0_Conditional_16_Template, 50, 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isCreateMode ? 3 : (ctx_r1.data.person == null ? null : ctx_r1.data.person.thumbnails == null ? null : ctx_r1.data.person.thumbnails.length) ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isCreateMode ? t_r3("smartEnrollPeople.createPerson") : t_r3("smartEnrollPeople.editPerson"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isCreateMode ? 10 : 11);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.loading ? 15 : 16);
  }
}
var EDIT_PERSON_DIALOG_PANEL_CLASS = "edit-person-dialog-panel";
var EditPersonDialogComponent = class _EditPersonDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.dialogRef = inject(MatDialogRef);
    this._fb = inject(FormBuilder);
    this._collectionsService = inject(CollectionsService);
    this._snackBar = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this.loading = false;
    this.allCollections = [];
    this.hasWarning = false;
    this.showConfirmation = false;
    this.initialCollections = [];
    this.photoPreview = null;
    this.photoError = false;
    this.createMethod = "standard";
  }
  get isCreateMode() {
    return this.data?.mode === "create" || !this.data?.person;
  }
  get isLivenessCreate() {
    return this.isCreateMode && this.createMethod === "liveness";
  }
  ngOnInit() {
    this._buildForm();
    this._loadCollections();
  }
  get dialogSubtitleKey() {
    if (!this.isCreateMode)
      return "";
    return this.isLivenessCreate ? "smartEnrollPeople.createMethodLivenessHint" : "smartEnrollPeople.createMethodStandardHint";
  }
  get currentSaveButtonText() {
    if (this.isCreateMode) {
      return this._transloco.translate("smartEnrollPeople.createPerson");
    }
    if (this.hasWarning && !this.showConfirmation) {
      return this._transloco.translate("smartEnrollCollections.reviewChanges");
    }
    if (this.showConfirmation)
      return this._transloco.translate("confirm");
    return this._transloco.translate("save_changes");
  }
  get currentSaveButtonColor() {
    return this.hasWarning ? "warn" : "primary";
  }
  get disableSave() {
    if (this.loading || this.editForm?.invalid)
      return true;
    if (!this.isCreateMode)
      return false;
    if (!this.photoPreview)
      return true;
    if (this.isLivenessCreate) {
      return !this.editForm.get("collection_id")?.value;
    }
    const collections = this.editForm.get("collections")?.value || [];
    return collections.length === 0;
  }
  getRowThumbnail(person) {
    const thumb = person?.thumbnails?.[0]?.thumbnail;
    if (!thumb)
      return "assets/images/avatars/default.jpg";
    const cleaned = thumb.replace(/^data:.*;base64,/, "");
    return `data:image/png;base64,${cleaned}`;
  }
  isCollectionSelected(code) {
    return (this.editForm.get("collections")?.value || []).includes(code);
  }
  isLivenessCollectionSelected(collectionId) {
    return this.editForm.get("collection_id")?.value === collectionId;
  }
  onCollectionChange(code, checked) {
    const current = this.editForm.get("collections")?.value || [];
    const updated = checked ? [...current, code] : current.filter((c) => c !== code);
    this.editForm.patchValue({ collections: updated });
    this._validateCollections();
  }
  onLivenessCollectionSelect(collection) {
    this.editForm.patchValue({ collection_id: collection._id });
    this._cdr.markForCheck();
  }
  onCreateMethodChange(method) {
    if (this.createMethod === method)
      return;
    this.createMethod = method;
    this.editForm.patchValue({ collections: [], collection_id: "" });
    this._cdr.markForCheck();
  }
  onSearchModeChange(mode) {
    this.editForm.patchValue({ search_mode: mode });
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSave() {
    if (!this.editForm.valid) {
      this.editForm.markAllAsTouched();
      this._cdr.markForCheck();
      return;
    }
    if (!this.isCreateMode && this.hasWarning && !this.showConfirmation) {
      this.showConfirmation = true;
      this._cdr.markForCheck();
      return;
    }
    const formData = this.editForm.value;
    const dob = this._formatDateOfBirth(formData.date_of_birth);
    if (!dob) {
      this.editForm.get("date_of_birth")?.setErrors({ invalid: true });
      this.editForm.get("date_of_birth")?.markAsTouched();
      this._cdr.markForCheck();
      return;
    }
    if (this.isCreateMode) {
      if (!this.photoPreview) {
        this.photoError = true;
        this._cdr.markForCheck();
        return;
      }
      const nationality = normalizeNationalityCode(formData.nationality);
      if (this.isLivenessCreate) {
        this.dialogRef.close({
          action: "create",
          method: "liveness",
          person: {
            name: formData.name,
            gender: formData.gender,
            date_of_birth: dob,
            nationality,
            collection_id: formData.collection_id,
            liveness_min_score: formData.liveness_min_score,
            min_score: formData.min_score,
            search_mode: formData.search_mode === "accurate" ? "ACCURATE" : "FAST",
            images: [this.photoPreview]
          }
        });
        return;
      }
      this.dialogRef.close({
        action: "create",
        method: "standard",
        person: {
          name: formData.name,
          gender: formData.gender,
          date_of_birth: dob,
          nationality,
          notes: formData.notes || "",
          collections: formData.collections || [],
          images: [this.photoPreview]
        }
      });
      return;
    }
    this.dialogRef.close({
      action: "update",
      person: __spreadProps(__spreadValues(__spreadValues({}, this.data.person), formData), {
        collections: formData.collections || [],
        date_of_birth: dob,
        nationality: normalizeNationalityCode(formData.nationality),
        notes: formData.notes || ""
      })
    });
  }
  onPhotoSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    this.photoError = false;
    if (!file?.type.startsWith("image/")) {
      this.photoPreview = null;
      this._cdr.markForCheck();
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this._snackBar.open(this._transloco.translate("smartEnrollPeople.imageSizeError"), this._transloco.translate("close"), { duration: 3e3 });
      input.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      this.photoPreview = e.target?.result;
      this._cdr.markForCheck();
    };
    reader.readAsDataURL(file);
  }
  triggerPhotoUpload(input) {
    input.click();
  }
  _buildForm() {
    this.initialCollections = [...this.data.person?.collections || []];
    let dateOfBirth = null;
    if (this.data.person?.date_of_birth) {
      const dt = DateTime.fromISO(this.data.person.date_of_birth);
      if (dt.isValid)
        dateOfBirth = dt;
    }
    this.editForm = this._fb.group({
      collection_id: [""],
      collections: [this.data.person?.collections || []],
      date_of_birth: [dateOfBirth, [Validators.required]],
      gender: [this.data.person?.gender || "M", [Validators.required]],
      liveness_min_score: [0.65],
      min_score: [0.8],
      name: [this.data.person?.name || "", [Validators.required]],
      nationality: [this.data.person?.nationality || ""],
      notes: [this.data.person?.notes || ""],
      search_mode: ["fast"]
    });
  }
  _loadCollections() {
    this.loading = true;
    forkJoin({
      all: this._collectionsService.getAllCollections(),
      onboarding: this._collectionsService.getCollectionByProjectType(SMART_ENROLL_PROJECT_TYPE)
    }).subscribe({
      next: ({ all, onboarding }) => {
        const ensureCodes = [
          ...this.data.person?.collections || [],
          ...this.data.contextCollection?.code ? [this.data.contextCollection.code] : []
        ];
        this.allCollections = mergeAccountCollections(all.data || [], onboarding.data || [], ensureCodes, this.data.contextCollection ? [this.data.contextCollection] : []);
        this._ensureSelectedCollections();
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this._snackBar.open(this._transloco.translate("smartEnrollCollections.getError"), this._transloco.translate("close"), { duration: 3e3 });
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  _ensureSelectedCollections() {
    const current = this.editForm.get("collections")?.value || [];
    const knownCodes = new Set(this.allCollections.map((collection) => collection.code));
    const contextCode = this.data.contextCollection?.code;
    const merged = new Set(current);
    if (contextCode && knownCodes.has(contextCode))
      merged.add(contextCode);
    this.editForm.patchValue({ collections: Array.from(merged) });
    if (this.data.contextCollection?._id) {
      this.editForm.patchValue({ collection_id: this.data.contextCollection._id });
    }
  }
  _validateCollections() {
    const current = this.editForm.get("collections")?.value || [];
    this.hasWarning = current.length === 0 && this.initialCollections.length > 0;
    this.showConfirmation = false;
    this._cdr.markForCheck();
  }
  _formatDateOfBirth(value) {
    if (!value)
      return "";
    if (DateTime.isDateTime(value)) {
      return value.isValid ? value.toFormat("yyyy-MM-dd") : "";
    }
    if (value instanceof Date) {
      const dt = DateTime.fromJSDate(value);
      return dt.isValid ? dt.toFormat("yyyy-MM-dd") : "";
    }
    if (typeof value === "string") {
      const dt = DateTime.fromISO(value);
      return dt.isValid ? dt.toFormat("yyyy-MM-dd") : "";
    }
    return "";
  }
  static {
    this.\u0275fac = function EditPersonDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditPersonDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditPersonDialogComponent, selectors: [["app-edit-person-dialog"]], decls: 1, vars: 0, consts: [["dobPicker", ""], ["photoInput", ""], ["class", "flex w-full flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70", 4, "transloco"], [1, "flex", "w-full", "flex-col", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "flex", "items-start", "justify-between", "gap-4", "border-b", "border-stone-200/90", "px-5", "py-5", "dark:border-gray-800", "md:px-6"], [1, "flex", "min-w-0", "items-start", "gap-3"], [1, "h-12", "w-12", "shrink-0", "rounded-xl", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src", "alt"], [1, "flex", "h-12", "w-12", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "min-w-0"], [1, "truncate", "text-xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "mt-1", "truncate", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "inline-flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "text-stone-500", "transition", "hover:bg-stone-50", "hover:text-stone-800", "dark:border-gray-700", "dark:text-stone-400", "dark:hover:bg-gray-800", "dark:hover:text-stone-200", 3, "click"], [1, "!h-5", "!w-5", "!text-xl"], [1, "flex", "flex-col", "items-center", "justify-center", "px-6", "py-16"], ["alt", "", 1, "h-12", "w-12", "shrink-0", "rounded-xl", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], ["diameter", "36"], [1, "mt-4", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "!flex", "!max-h-[min(68vh,560px)]", "!flex-col", "!gap-6", "!overflow-y-auto", "px-5", "py-6", "dark:text-stone-100", "md:p-6"], [1, "flex", "flex-col", "gap-5", 3, "formGroup"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-2"], ["for", "person-name", 1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "text-red-500"], ["id", "person-name", "type", "text", "formControlName", "name", 1, "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-4", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:border-gray-500", "dark:focus:bg-gray-950/50"], [1, "text-xs", "text-red-600", "dark:text-red-400"], ["for", "person-dob", 1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "edit-person-dialog__date-field", "relative"], ["id", "person-dob", "type", "text", "formControlName", "date_of_birth", 1, "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-4", "pr-12", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:border-gray-500", "dark:focus:bg-gray-950/50", 3, "matDatepicker", "placeholder"], ["matIconSuffix", "", 3, "for"], [1, "grid", "gap-4", "sm:grid-cols-2"], ["for", "person-nationality", 1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], ["inputId", "person-nationality", "variant", "dialog", "formControlName", "nationality"], [1, "flex", "flex-col", "gap-4", "rounded-xl", "border", "border-stone-200/80", "p-4", "dark:border-gray-800"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-lg", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "!h-4", "!w-4", "!text-base"], [1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "max-h-52", "space-y-2", "overflow-y-auto", "rounded-xl", "border", "border-stone-200/80", "p-2", "dark:border-gray-800"], [1, "flex", "gap-3", "rounded-xl", "border", "border-red-200/90", "bg-red-50", "px-4", "py-4", "dark:border-red-900/50", "dark:bg-red-950/30"], [1, "flex", "flex-col-reverse", "gap-2", "border-t", "border-stone-200/90", "px-5", "py-4", "dark:border-gray-800", "sm:flex-row", "sm:justify-end", "sm:gap-3", "md:px-6"], ["mat-stroked-button", "", "type", "button", 1, "!min-h-11", "w-full", "!rounded-xl", "!border-stone-200", "!font-medium", "sm:w-auto", "dark:!border-gray-700", 3, "click"], ["mat-flat-button", "", "type", "button", 1, "!min-h-11", "w-full", "!rounded-xl", "px-5", "sm:w-auto", 3, "click", "color", "disabled"], [1, "edit-person-dialog__method-toggle", "w-full", "rounded-xl", 3, "change", "value"], ["value", "standard", 1, "flex-1"], ["value", "liveness", 1, "flex-1"], [1, "text-xs", "leading-5", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-3", "rounded-xl", "border", "border-stone-200/80", "p-4", "dark:border-gray-800"], [1, "flex", "flex-wrap", "items-center", "gap-4"], ["alt", "", 1, "h-20", "w-20", "rounded-xl", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-xl", "border", "border-dashed", "border-stone-300", "bg-stone-50", "text-stone-400", "dark:border-gray-700", "dark:bg-gray-950"], [1, "flex", "min-w-0", "flex-1", "flex-col", "gap-2"], ["type", "button", 1, "inline-flex", "min-h-10", "w-fit", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-stone-200", "bg-stone-950", "px-4", "text-sm", "font-medium", "text-white", "transition", "hover:bg-stone-800", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200", 3, "click"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], ["for", "person-gender", 1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], ["id", "person-gender", "formControlName", "gender", 1, "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-4", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:border-gray-500", "dark:focus:bg-gray-950/50"], ["value", "M"], ["value", "F"], ["for", "person-notes", 1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], ["id", "person-notes", "rows", "3", "formControlName", "notes", 1, "w-full", "resize-y", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-4", "py-3", "text-sm", "text-stone-900", "outline-none", "transition", "focus:border-stone-400", "focus:bg-white", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "placeholder:text-stone-400", "dark:placeholder:text-stone-500", "dark:focus:border-gray-500", "dark:focus:bg-gray-950/50", 3, "placeholder"], [1, "rounded-xl", 3, "change", "value"], ["value", "fast"], ["value", "accurate"], [1, "rounded-xl", "border", "border-stone-200", "p-4", "dark:border-gray-800"], [1, "text-xs", "font-medium", "uppercase", "tracking-[0.14em]", "text-stone-500", "dark:text-stone-400"], ["min", "0.5", "max", "1", "step", "0.05", "discrete", "", 1, "mt-2", "w-full"], ["matSliderThumb", "", "formControlName", "min_score"], ["matSliderThumb", "", "formControlName", "liveness_min_score"], [1, "flex", "gap-3", "rounded-xl", "border", "border-amber-200/90", "bg-amber-50", "px-4", "py-3", "dark:border-amber-900/50", "dark:bg-amber-950/30"], [1, "shrink-0", "text-amber-600", "dark:text-amber-400"], [1, "text-sm", "leading-6", "text-amber-900", "dark:text-amber-100"], [1, "flex", "cursor-pointer", "items-start", "gap-3", "rounded-xl", "border", "px-3", "py-3", "transition", 3, "border-stone-200", "bg-white", "border-indigo-300", "bg-indigo-50", "dark:border-gray-700", "dark:bg-gray-950", "dark:border-indigo-700", "dark:bg-indigo-950"], [1, "px-3", "py-6", "text-center", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "cursor-pointer", "items-start", "gap-3", "rounded-xl", "border", "px-3", "py-3", "transition", 3, "click"], [1, "mt-0.5", "flex", "h-4", "w-4", "shrink-0", "items-center", "justify-center", "rounded-full", "border-2"], [1, "h-2", "w-2", "rounded-full", "bg-indigo-600"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-sm", "font-medium", "text-stone-950", "dark:text-white"], [3, "collection"], [1, "mt-0.5", "text-xs", "leading-5", "text-stone-500", "dark:text-stone-400"], [1, "edit-person-dialog__checkbox", "mt-0.5", "pointer-events-none", 3, "checked"], [1, "shrink-0", "text-red-600", "dark:text-red-400"], [1, "min-w-0", "flex-1", "space-y-2"], [1, "text-sm", "font-semibold", "text-red-900", "dark:text-red-100"], [1, "text-sm", "leading-6", "text-red-800", "dark:text-red-200"], [1, "rounded-xl", "border", "border-red-300/80", "bg-red-100/80", "px-3", "py-2", "text-sm", "font-medium", "text-red-900", "dark:border-red-800", "dark:bg-red-950/50", "dark:text-red-100"]], template: function EditPersonDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EditPersonDialogComponent_div_0_Template, 17, 4, "div", 2);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatDialogModule,
      MatDialogContent,
      MatButtonModule,
      MatButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatCheckboxModule,
      MatCheckbox,
      MatDatepickerModule,
      MatDatepicker,
      MatDatepickerInput,
      MatDatepickerToggle,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      TranslocoModule,
      TranslocoDirective,
      CollectionScopeBadgeComponent,
      NationalitySelectComponent
    ], styles: ["/* src/app/modules/smart-enroll/shared/edit-person-dialog.component.scss */\n.edit-person-dialog-panel.cdk-overlay-pane {\n  max-width: min(640px, 94vw);\n}\n.edit-person-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.edit-person-dialog-panel .mat-mdc-dialog-surface {\n  border-radius: 1rem !important;\n  overflow: hidden;\n  background: transparent !important;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08);\n}\n.edit-person-dialog__date-field mat-datepicker-toggle {\n  position: absolute;\n  right: 0.25rem;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.edit-person-dialog__date-field mat-datepicker-toggle .mat-mdc-icon-button {\n  width: 2.25rem;\n  height: 2.25rem;\n  padding: 0;\n}\n.edit-person-dialog__checkbox .mdc-checkbox {\n  padding: 0;\n}\n.edit-person-dialog__method-toggle {\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n.edit-person-dialog__method-toggle .mat-button-toggle {\n  flex: 1;\n}\n.edit-person-dialog__method-toggle .mat-button-toggle-label-content {\n  padding: 0 0.75rem;\n  line-height: 2.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=edit-person-dialog.component.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditPersonDialogComponent, [{
    type: Component,
    args: [{ selector: "app-edit-person-dialog", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCheckboxModule,
      MatDatepickerModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSliderModule,
      TranslocoModule,
      CollectionScopeBadgeComponent,
      NationalitySelectComponent
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div\r
    class="flex w-full flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
    *transloco="let t"\r
>\r
    <header class="flex items-start justify-between gap-4 border-b border-stone-200/90 px-5 py-5 dark:border-gray-800 md:px-6">\r
        <div class="flex min-w-0 items-start gap-3">\r
            @if (isCreateMode) {\r
                @if (photoPreview) {\r
                    <img\r
                        [src]="photoPreview"\r
                        alt=""\r
                        class="h-12 w-12 shrink-0 rounded-xl border border-stone-200 object-cover dark:border-gray-700"\r
                    />\r
                } @else {\r
                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                        <mat-icon>person_add</mat-icon>\r
                    </div>\r
                }\r
            } @else if (data.person?.thumbnails?.length) {\r
                <img\r
                    [src]="getRowThumbnail(data.person)"\r
                    [alt]="data.person.name"\r
                    class="h-12 w-12 shrink-0 rounded-xl border border-stone-200 object-cover dark:border-gray-700"\r
                />\r
            } @else {\r
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                    <mat-icon>person</mat-icon>\r
                </div>\r
            }\r
            <div class="min-w-0">\r
                <h2 class="truncate text-xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
                    {{ isCreateMode ? t('smartEnrollPeople.createPerson') : t('smartEnrollPeople.editPerson') }}\r
                </h2>\r
                <p class="mt-1 truncate text-sm leading-6 text-stone-500 dark:text-stone-400">\r
                    @if (isCreateMode) {\r
                        {{ t('smartEnrollPeople.dialogCreateSubtitle') }}\r
                    } @else {\r
                        {{ data.person?.name }}\r
                    }\r
                </p>\r
            </div>\r
        </div>\r
        <button\r
            type="button"\r
            class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-stone-200 text-stone-500 transition hover:bg-stone-50 hover:text-stone-800 dark:border-gray-700 dark:text-stone-400 dark:hover:bg-gray-800 dark:hover:text-stone-200"\r
            (click)="onCancel()"\r
        >\r
            <mat-icon class="!h-5 !w-5 !text-xl">close</mat-icon>\r
        </button>\r
    </header>\r
\r
    @if (loading) {\r
        <div class="flex flex-col items-center justify-center px-6 py-16">\r
            <mat-spinner diameter="36"></mat-spinner>\r
            <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">{{ t('smartEnrollCollections.loading') }}</p>\r
        </div>\r
    } @else {\r
        <mat-dialog-content class="!flex !max-h-[min(68vh,560px)] !flex-col !gap-6 !overflow-y-auto px-5 py-6 dark:text-stone-100 md:p-6">\r
            <form [formGroup]="editForm" class="flex flex-col gap-5">\r
                @if (isCreateMode) {\r
                    <section class="flex flex-col gap-2">\r
                        <h3 class="text-sm font-semibold text-stone-950 dark:text-white">\r
                            {{ t('smartEnrollPeople.createMethodLabel') }}\r
                        </h3>\r
                        <mat-button-toggle-group\r
                            [value]="createMethod"\r
                            (change)="onCreateMethodChange($event.value)"\r
                            class="edit-person-dialog__method-toggle w-full rounded-xl"\r
                        >\r
                            <mat-button-toggle value="standard" class="flex-1">\r
                                {{ t('smartEnrollPeople.createMethodStandard') }}\r
                            </mat-button-toggle>\r
                            <mat-button-toggle value="liveness" class="flex-1">\r
                                {{ t('smartEnrollPeople.createMethodLiveness') }}\r
                            </mat-button-toggle>\r
                        </mat-button-toggle-group>\r
                        <p class="text-xs leading-5 text-stone-500 dark:text-stone-400">\r
                            {{ t(dialogSubtitleKey) }}\r
                        </p>\r
                    </section>\r
\r
                    <section class="flex flex-col gap-3 rounded-xl border border-stone-200/80 p-4 dark:border-gray-800">\r
                        <div class="flex flex-wrap items-center gap-4">\r
                            @if (photoPreview) {\r
                                <img [src]="photoPreview" alt="" class="h-20 w-20 rounded-xl border border-stone-200 object-cover dark:border-gray-700" />\r
                            } @else {\r
                                <div class="flex h-20 w-20 items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-50 text-stone-400 dark:border-gray-700 dark:bg-gray-950">\r
                                    <mat-icon>photo_camera</mat-icon>\r
                                </div>\r
                            }\r
                            <div class="flex min-w-0 flex-1 flex-col gap-2">\r
                                <label class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                    {{ t('smartEnrollPeople.referencePhoto') }}\r
                                    <span class="text-red-500">*</span>\r
                                </label>\r
                                <button\r
                                    type="button"\r
                                    class="inline-flex min-h-10 w-fit items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-950 px-4 text-sm font-medium text-white transition hover:bg-stone-800 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"\r
                                    (click)="triggerPhotoUpload(photoInput)"\r
                                >\r
                                    <mat-icon class="!h-4 !w-4 !text-base">upload</mat-icon>\r
                                    <span>{{ photoPreview ? t('smartEnrollPeople.changePhoto') : t('smartEnrollPeople.uploadPhoto') }}</span>\r
                                </button>\r
                                <input #photoInput type="file" accept="image/*" class="hidden" (change)="onPhotoSelected($event)" />\r
                                <p class="text-xs text-stone-500 dark:text-stone-400">{{ t('smartEnrollPeople.photoHint') }}</p>\r
                                @if (photoError) {\r
                                    <p class="text-xs text-red-600 dark:text-red-400">{{ t('smartEnrollPeople.photoRequired') }}</p>\r
                                }\r
                            </div>\r
                        </div>\r
                    </section>\r
                }\r
\r
                <section class="flex flex-col gap-4">\r
                    <div class="flex flex-col gap-2">\r
                        <label class="text-sm font-semibold text-stone-950 dark:text-white" for="person-name">\r
                            {{ t('smartEnrollPeople.name') }}\r
                            <span class="text-red-500">*</span>\r
                        </label>\r
                        <input\r
                            id="person-name"\r
                            type="text"\r
                            class="h-11 w-full rounded-xl border border-stone-200 bg-stone-50/80 px-4 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 dark:focus:border-gray-500 dark:focus:bg-gray-950/50"\r
                            formControlName="name"\r
                        />\r
                        @if (editForm.get('name')?.invalid && editForm.get('name')?.touched) {\r
                            <p class="text-xs text-red-600 dark:text-red-400">{{ t('smartEnrollPeople.nameRequired') }}</p>\r
                        }\r
                    </div>\r
\r
                    <div class="flex flex-col gap-2">\r
                        <label class="text-sm font-semibold text-stone-950 dark:text-white" for="person-dob">\r
                            {{ t('smartEnrollPeople.dateOfBirth') }}\r
                            <span class="text-red-500">*</span>\r
                        </label>\r
                        <div class="edit-person-dialog__date-field relative">\r
                            <input\r
                                id="person-dob"\r
                                type="text"\r
                                class="h-11 w-full rounded-xl border border-stone-200 bg-stone-50/80 px-4 pr-12 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 dark:focus:border-gray-500 dark:focus:bg-gray-950/50"\r
                                formControlName="date_of_birth"\r
                                [matDatepicker]="dobPicker"\r
                                [placeholder]="t('smartEnrollPeople.dateOfBirthPlaceholder')"\r
                            />\r
                            <mat-datepicker-toggle matIconSuffix [for]="dobPicker"></mat-datepicker-toggle>\r
                            <mat-datepicker #dobPicker></mat-datepicker>\r
                        </div>\r
                        @if (editForm.get('date_of_birth')?.invalid && editForm.get('date_of_birth')?.touched) {\r
                            <p class="text-xs text-red-600 dark:text-red-400">{{ t('smartEnrollPeople.dateOfBirthRequired') }}</p>\r
                        }\r
                    </div>\r
\r
                    <div class="grid gap-4 sm:grid-cols-2">\r
                        <div class="flex flex-col gap-2">\r
                            <label class="text-sm font-semibold text-stone-950 dark:text-white" for="person-nationality">\r
                                {{ t('smartEnrollPeople.nationality') }}\r
                            </label>\r
                            <app-nationality-select inputId="person-nationality" variant="dialog" formControlName="nationality" />\r
                        </div>\r
\r
                        @if (isCreateMode) {\r
                            <div class="flex flex-col gap-2">\r
                                <label class="text-sm font-semibold text-stone-950 dark:text-white" for="person-gender">\r
                                    {{ t('smartEnrollPeople.gender') }}\r
                                    <span class="text-red-500">*</span>\r
                                </label>\r
                                <select\r
                                    id="person-gender"\r
                                    class="h-11 w-full rounded-xl border border-stone-200 bg-stone-50/80 px-4 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 dark:focus:border-gray-500 dark:focus:bg-gray-950/50"\r
                                    formControlName="gender"\r
                                >\r
                                    <option value="M">{{ t('smartEnrollPeople.genderMale') }}</option>\r
                                    <option value="F">{{ t('smartEnrollPeople.genderFemale') }}</option>\r
                                </select>\r
                            </div>\r
                        }\r
                    </div>\r
\r
                    @if (!isLivenessCreate) {\r
                        <div class="flex flex-col gap-2">\r
                            <label class="text-sm font-semibold text-stone-950 dark:text-white" for="person-notes">\r
                                {{ t('smartEnrollPeople.notes') }}\r
                            </label>\r
                            <textarea\r
                                id="person-notes"\r
                                rows="3"\r
                                class="w-full resize-y rounded-xl border border-stone-200 bg-stone-50/80 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-stone-400 focus:bg-white dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 dark:focus:border-gray-500 dark:focus:bg-gray-950/50"\r
                                formControlName="notes"\r
                                [placeholder]="t('smartEnrollPeople.notesPlaceholder')"\r
                            ></textarea>\r
                        </div>\r
                    }\r
                </section>\r
\r
                @if (isLivenessCreate) {\r
                    <section class="flex flex-col gap-4 rounded-xl border border-stone-200/80 p-4 dark:border-gray-800">\r
                        <mat-button-toggle-group\r
                            [value]="editForm.get('search_mode')?.value"\r
                            (change)="onSearchModeChange($event.value)"\r
                            class="rounded-xl"\r
                        >\r
                            <mat-button-toggle value="fast">{{ t('smartEnrollPeople.fast') }}</mat-button-toggle>\r
                            <mat-button-toggle value="accurate">{{ t('smartEnrollPeople.accurate') }}</mat-button-toggle>\r
                        </mat-button-toggle-group>\r
\r
                        <div class="grid gap-4 sm:grid-cols-2">\r
                            <div class="rounded-xl border border-stone-200 p-4 dark:border-gray-800">\r
                                <label class="text-xs font-medium uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">\r
                                    {{ t('smartEnrollPeople.minScore') }}: {{ editForm.get('min_score')?.value }}\r
                                </label>\r
                                <mat-slider class="mt-2 w-full" min="0.5" max="1" step="0.05" discrete>\r
                                    <input matSliderThumb formControlName="min_score" />\r
                                </mat-slider>\r
                            </div>\r
                            <div class="rounded-xl border border-stone-200 p-4 dark:border-gray-800">\r
                                <label class="text-xs font-medium uppercase tracking-[0.14em] text-stone-500 dark:text-stone-400">\r
                                    {{ t('smartEnrollPeople.livenessMinScore') }}: {{ editForm.get('liveness_min_score')?.value }}\r
                                </label>\r
                                <mat-slider class="mt-2 w-full" min="0.5" max="1" step="0.05" discrete>\r
                                    <input matSliderThumb formControlName="liveness_min_score" />\r
                                </mat-slider>\r
                            </div>\r
                        </div>\r
\r
                        <div class="flex gap-3 rounded-xl border border-amber-200/90 bg-amber-50 px-4 py-3 dark:border-amber-900/50 dark:bg-amber-950/30">\r
                            <mat-icon class="shrink-0 text-amber-600 dark:text-amber-400">info</mat-icon>\r
                            <p class="text-sm leading-6 text-amber-900 dark:text-amber-100">\r
                                {{ t('smartEnrollPeople.livenessBillingHint') }}\r
                            </p>\r
                        </div>\r
                    </section>\r
                }\r
\r
                <section class="flex flex-col gap-3">\r
                    <div class="flex items-center gap-3">\r
                        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200">\r
                            <mat-icon class="!h-4 !w-4 !text-base">folder</mat-icon>\r
                        </div>\r
                        <div>\r
                            <h3 class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                {{ t('smartEnrollPeople.collections') }}\r
                            </h3>\r
                            <p class="text-xs text-stone-500 dark:text-stone-400">\r
                                @if (isLivenessCreate) {\r
                                    {{ t('smartEnrollPeople.collectionRequired') }}\r
                                } @else {\r
                                    {{ t('smartEnrollPeople.collectionsHint') }}\r
                                }\r
                            </p>\r
                        </div>\r
                    </div>\r
\r
                    <div class="max-h-52 space-y-2 overflow-y-auto rounded-xl border border-stone-200/80 p-2 dark:border-gray-800">\r
                        @if (isLivenessCreate) {\r
                            @for (collection of allCollections; track collection._id) {\r
                                <div\r
                                    class="flex cursor-pointer items-start gap-3 rounded-xl border px-3 py-3 transition"\r
                                    [class.border-stone-200]="!isLivenessCollectionSelected(collection._id)"\r
                                    [class.bg-white]="!isLivenessCollectionSelected(collection._id)"\r
                                    [class.border-indigo-300]="isLivenessCollectionSelected(collection._id)"\r
                                    [class.bg-indigo-50]="isLivenessCollectionSelected(collection._id)"\r
                                    [class.dark:border-gray-700]="!isLivenessCollectionSelected(collection._id)"\r
                                    [class.dark:bg-gray-950]="!isLivenessCollectionSelected(collection._id)"\r
                                    [class.dark:border-indigo-700]="isLivenessCollectionSelected(collection._id)"\r
                                    [class.dark:bg-indigo-950]="isLivenessCollectionSelected(collection._id)"\r
                                    (click)="onLivenessCollectionSelect(collection)"\r
                                >\r
                                    <div\r
                                        class="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2"\r
                                        [class.border-stone-300]="!isLivenessCollectionSelected(collection._id)"\r
                                        [class.border-indigo-600]="isLivenessCollectionSelected(collection._id)"\r
                                    >\r
                                        @if (isLivenessCollectionSelected(collection._id)) {\r
                                            <div class="h-2 w-2 rounded-full bg-indigo-600"></div>\r
                                        }\r
                                    </div>\r
                                    <div class="min-w-0 flex-1">\r
                                        <div class="flex flex-wrap items-center gap-2">\r
                                            <span class="text-sm font-medium text-stone-950 dark:text-white">{{ collection.name }}</span>\r
                                            <app-collection-scope-badge [collection]="collection"></app-collection-scope-badge>\r
                                        </div>\r
                                        @if (collection.description) {\r
                                            <div class="mt-0.5 text-xs leading-5 text-stone-500 dark:text-stone-400">\r
                                                {{ collection.description }}\r
                                            </div>\r
                                        }\r
                                    </div>\r
                                </div>\r
                            } @empty {\r
                                <div class="px-3 py-6 text-center text-sm text-stone-500 dark:text-stone-400">\r
                                    {{ t('smartEnrollPeople.noCollectionsAvailable') }}\r
                                </div>\r
                            }\r
                        } @else {\r
                            @for (collection of allCollections; track collection._id) {\r
                                <div\r
                                    class="flex cursor-pointer items-start gap-3 rounded-xl border px-3 py-3 transition"\r
                                    [class.border-stone-200]="!isCollectionSelected(collection.code)"\r
                                    [class.bg-white]="!isCollectionSelected(collection.code)"\r
                                    [class.border-indigo-300]="isCollectionSelected(collection.code)"\r
                                    [class.bg-indigo-50]="isCollectionSelected(collection.code)"\r
                                    [class.dark:border-gray-700]="!isCollectionSelected(collection.code)"\r
                                    [class.dark:bg-gray-950]="!isCollectionSelected(collection.code)"\r
                                    [class.dark:border-indigo-700]="isCollectionSelected(collection.code)"\r
                                    [class.dark:bg-indigo-950]="isCollectionSelected(collection.code)"\r
                                    (click)="onCollectionChange(collection.code, !isCollectionSelected(collection.code))"\r
                                >\r
                                    <mat-checkbox\r
                                        class="edit-person-dialog__checkbox mt-0.5 pointer-events-none"\r
                                        [checked]="isCollectionSelected(collection.code)"\r
                                    ></mat-checkbox>\r
                                    <div class="min-w-0 flex-1">\r
                                        <div class="flex flex-wrap items-center gap-2">\r
                                            <span class="text-sm font-medium text-stone-950 dark:text-white">{{ collection.name }}</span>\r
                                            <app-collection-scope-badge [collection]="collection"></app-collection-scope-badge>\r
                                        </div>\r
                                        @if (collection.description) {\r
                                            <div class="mt-0.5 text-xs leading-5 text-stone-500 dark:text-stone-400">\r
                                                {{ collection.description }}\r
                                            </div>\r
                                        }\r
                                    </div>\r
                                </div>\r
                            } @empty {\r
                                <div class="px-3 py-6 text-center text-sm text-stone-500 dark:text-stone-400">\r
                                    {{ t('smartEnrollPeople.noCollectionsAvailable') }}\r
                                </div>\r
                            }\r
                        }\r
                    </div>\r
                </section>\r
\r
                @if (hasWarning && !isCreateMode) {\r
                    <section class="flex gap-3 rounded-xl border border-red-200/90 bg-red-50 px-4 py-4 dark:border-red-900/50 dark:bg-red-950/30">\r
                        <mat-icon class="shrink-0 text-red-600 dark:text-red-400">warning</mat-icon>\r
                        <div class="min-w-0 flex-1 space-y-2">\r
                            <h4 class="text-sm font-semibold text-red-900 dark:text-red-100">\r
                                {{ t('smartEnrollPeople.warningPersonWillBeDeleted') }}\r
                            </h4>\r
                            <p class="text-sm leading-6 text-red-800 dark:text-red-200">\r
                                {{ t('smartEnrollPeople.warningPersonWillBeDeletedDescription') }}\r
                            </p>\r
                            @if (showConfirmation) {\r
                                <p class="rounded-xl border border-red-300/80 bg-red-100/80 px-3 py-2 text-sm font-medium text-red-900 dark:border-red-800 dark:bg-red-950/50 dark:text-red-100">\r
                                    {{ t('smartEnrollPeople.warningPersonWillBeDeletedConfirmation') }}\r
                                </p>\r
                            }\r
                        </div>\r
                    </section>\r
                }\r
            </form>\r
        </mat-dialog-content>\r
\r
        <div class="flex flex-col-reverse gap-2 border-t border-stone-200/90 px-5 py-4 dark:border-gray-800 sm:flex-row sm:justify-end sm:gap-3 md:px-6">\r
            <button\r
                mat-stroked-button\r
                type="button"\r
                class="!min-h-11 w-full !rounded-xl !border-stone-200 !font-medium sm:w-auto dark:!border-gray-700"\r
                (click)="onCancel()"\r
            >\r
                {{ t('cancel') }}\r
            </button>\r
            <button\r
                mat-flat-button\r
                [color]="currentSaveButtonColor"\r
                type="button"\r
                class="!min-h-11 w-full !rounded-xl px-5 sm:w-auto"\r
                [disabled]="disableSave"\r
                (click)="onSave()"\r
            >\r
                {{ currentSaveButtonText }}\r
            </button>\r
        </div>\r
    }\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/shared/edit-person-dialog.component.scss */\n.edit-person-dialog-panel.cdk-overlay-pane {\n  max-width: min(640px, 94vw);\n}\n.edit-person-dialog-panel .mat-mdc-dialog-container {\n  padding: 0 !important;\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.edit-person-dialog-panel .mat-mdc-dialog-surface {\n  border-radius: 1rem !important;\n  overflow: hidden;\n  background: transparent !important;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.08);\n}\n.edit-person-dialog__date-field mat-datepicker-toggle {\n  position: absolute;\n  right: 0.25rem;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.edit-person-dialog__date-field mat-datepicker-toggle .mat-mdc-icon-button {\n  width: 2.25rem;\n  height: 2.25rem;\n  padding: 0;\n}\n.edit-person-dialog__checkbox .mdc-checkbox {\n  padding: 0;\n}\n.edit-person-dialog__method-toggle {\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n.edit-person-dialog__method-toggle .mat-button-toggle {\n  flex: 1;\n}\n.edit-person-dialog__method-toggle .mat-button-toggle-label-content {\n  padding: 0 0.75rem;\n  line-height: 2.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=edit-person-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditPersonDialogComponent, { className: "EditPersonDialogComponent", filePath: "src/app/modules/smart-enroll/shared/edit-person-dialog.component.ts", lineNumber: 64 });
})();

export {
  CollectionsService,
  getOnboardingCollectionCodes,
  classifyCollections,
  PeopleService,
  BIOMETRICS_CONFIRM_DIALOG_PANEL_CLASS,
  BiometricsConfirmDialogComponent,
  BiometricsPeopleTableComponent,
  CollectionScopeBadgeComponent,
  EDIT_PERSON_DIALOG_PANEL_CLASS,
  EditPersonDialogComponent
};
//# sourceMappingURL=chunk-IXMVTZD7.js.map
