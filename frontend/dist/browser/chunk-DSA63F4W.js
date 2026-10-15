import {
  formatDisplayValue,
  isPlainObject
} from "./chunk-Q7ZENBRV.js";
import {
  DemoUploadImageButtonComponent
} from "./chunk-TDKQRHA6.js";
import {
  DemoRasterImageComponent
} from "./chunk-ZLWP3B24.js";
import {
  DemoResultActionsComponent
} from "./chunk-I4NQXRI6.js";
import {
  DemoRelatedDocsSectionComponent
} from "./chunk-QCUB3VMU.js";
import {
  BiometricsDemoApiService,
  DemoPageShellComponent,
  fileToBase64
} from "./chunk-QDU3MPYG.js";
import "./chunk-B4YUVLJ7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VENEX45A.js";
import {
  Router
} from "./chunk-DM2XPT7T.js";
import "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  JsonPipe,
  NgClass,
  Output,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-I5BUD46C.js";
import {
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/shared/human-id-preview-result.component.ts
var _forTrack0 = ($index, $item) => $item[0];
function HumanIdPreviewResultComponent_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "dt", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.humanIdPreviewResult.passwordLayerLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatPasswordLayer(ctx_r0.parsed.passwordLayer));
  }
}
function HumanIdPreviewResultComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "dt", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.humanIdPreviewResult.livenessRequiredLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.parsed.requireLiveness ? \u0275\u0275pipeBind1(6, 4, "smartEnrollDemos.common.yes") : \u0275\u0275pipeBind1(7, 6, "smartEnrollDemos.common.no"), " ");
  }
}
function HumanIdPreviewResultComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dl", 13);
    \u0275\u0275template(5, HumanIdPreviewResultComponent_Conditional_12_Conditional_5_Template, 6, 4, "div", 14)(6, HumanIdPreviewResultComponent_Conditional_12_Conditional_6_Template, 8, 8, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartEnrollDemos.humanIdPreviewResult.summaryHeading"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.parsed == null ? null : ctx_r0.parsed.passwordLayer) !== void 0 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.parsed == null ? null : ctx_r0.parsed.requireLiveness) !== void 0 ? 6 : -1);
  }
}
function HumanIdPreviewResultComponent_Conditional_13_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "dt", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r2[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatValue(entry_r2[1], \u0275\u0275pipeBind1(5, 2, "smartEnrollDemos.common.yes"), \u0275\u0275pipeBind1(6, 4, "smartEnrollDemos.common.no")), " ");
  }
}
function HumanIdPreviewResultComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dl", 13);
    \u0275\u0275repeaterCreate(5, HumanIdPreviewResultComponent_Conditional_13_For_6_Template, 7, 6, "div", 17, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "smartEnrollDemos.humanIdPreviewResult.publicDataHeading"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.objectEntries(ctx_r0.parsed.publicData));
  }
}
var PREVIEW_DATA_HANDLED = /* @__PURE__ */ new Set(["publicData", "passwordLayer", "requireLiveness"]);
var HumanIdPreviewResultComponent = class _HumanIdPreviewResultComponent {
  constructor() {
    this.result = null;
    this.previewAnother = new EventEmitter();
    this.backToDemos = new EventEmitter();
  }
  get parsed() {
    if (!this.result)
      return null;
    const data = isPlainObject(this.result["data"]) ? this.result["data"] : null;
    const extraData = {};
    if (data) {
      for (const [k, v] of Object.entries(data)) {
        if (!PREVIEW_DATA_HANDLED.has(k))
          extraData[k] = v;
      }
    }
    return {
      publicData: isPlainObject(data?.["publicData"]) ? data["publicData"] : null,
      passwordLayer: typeof data?.["passwordLayer"] === "string" ? data["passwordLayer"] : void 0,
      requireLiveness: typeof data?.["requireLiveness"] === "boolean" ? data["requireLiveness"] : void 0,
      extraData
    };
  }
  formatValue(v, yes, no) {
    return formatDisplayValue(v, yes, no);
  }
  formatPasswordLayer(value) {
    const normalized = value.trim();
    if (normalized === "NoPassword")
      return "No password";
    if (normalized === "HasPassword")
      return "Password required";
    return normalized;
  }
  objectEntries(obj) {
    if (!obj)
      return [];
    return Object.entries(obj).filter(([, v]) => v !== void 0 && v !== null);
  }
  hasSummaryRow() {
    const p = this.parsed;
    return p?.passwordLayer !== void 0 || p?.requireLiveness !== void 0 || Object.keys(p?.extraData ?? {}).length > 0;
  }
  static {
    this.\u0275fac = function HumanIdPreviewResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanIdPreviewResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanIdPreviewResultComponent, selectors: [["app-human-id-preview-result"]], inputs: { result: "result" }, outputs: { previewAnother: "previewAnother", backToDemos: "backToDemos" }, decls: 27, vars: 21, consts: [[1, "space-y-5"], [1, "rounded-2xl", "bg-surface-container-low", "border", "border-primary/20", "p-6"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "material-symbols-outlined", "text-primary", "text-2xl"], [1, "font-bold", "text-on-surface", "text-lg"], [1, "text-sm", "text-on-surface-variant"], [1, "mb-6", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-high/40", "p-4"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "px-4", "py-3", "group"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-on-surface-variant", "flex", "items-center", "justify-between", "gap-2"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform", "text-lg"], [1, "mt-3", "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"], ["secondaryIcon", "visibility", 3, "secondary", "primary", "secondaryLabel", "primaryLabel", "primaryRouterLink"], [1, "text-sm", "font-bold", "text-primary", "mb-3"], [1, "space-y-2", "text-sm"], [1, "grid", "grid-cols-1", "sm:grid-cols-[minmax(0,11rem)_1fr]", "gap-x-3", "gap-y-1"], [1, "text-on-surface-variant", "font-medium"], [1, "text-on-surface"], [1, "grid", "grid-cols-1", "sm:grid-cols-[minmax(0,11rem)_1fr]", "gap-x-3", "gap-y-1", "border-b", "border-outline-variant/10", "pb-2", "last:border-0", "last:pb-0"], [1, "font-mono", "text-xs", "text-on-surface", "break-all"]], template: function HumanIdPreviewResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "preview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 5);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, HumanIdPreviewResultComponent_Conditional_12_Template, 7, 5, "section", 6)(13, HumanIdPreviewResultComponent_Conditional_13_Template, 7, 3, "section", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "details", 7)(15, "summary", 8)(16, "span");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 9);
        \u0275\u0275text(20, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "pre", 10);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "json");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "app-demo-result-actions", 11);
        \u0275\u0275pipe(25, "transloco");
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275listener("secondary", function HumanIdPreviewResultComponent_Template_app_demo_result_actions_secondary_24_listener() {
          return ctx.previewAnother.emit();
        })("primary", function HumanIdPreviewResultComponent_Template_app_demo_result_actions_primary_24_listener() {
          return ctx.backToDemos.emit();
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "smartEnrollDemos.humanIdPreviewResult.successTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "smartEnrollDemos.humanIdPreviewResult.successSubtitle"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.hasSummaryRow() ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.parsed == null ? null : ctx.parsed.publicData) ? 13 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 13, "smartEnrollDemos.humanIdPreviewResult.rawDebug"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 15, ctx.result));
        \u0275\u0275advance(2);
        \u0275\u0275property("secondaryLabel", \u0275\u0275pipeBind1(25, 17, "smartEnrollDemos.humanIdPreviewResult.previewAnother"))("primaryLabel", \u0275\u0275pipeBind1(26, 19, "smartEnrollDemos.humanIdPreviewResult.backToDemos"))("primaryRouterLink", null);
      }
    }, dependencies: [JsonPipe, TranslocoModule, TranslocoPipe, DemoResultActionsComponent], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanIdPreviewResultComponent, [{
    type: Component,
    args: [{ selector: "app-human-id-preview-result", standalone: true, imports: [JsonPipe, TranslocoModule, DemoResultActionsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-5">\r
    <div class="rounded-2xl bg-surface-container-low border border-primary/20 p-6">\r
        <div class="flex items-center gap-3 mb-6">\r
            <span class="material-symbols-outlined text-primary text-2xl">preview</span>\r
            <div>\r
                <p class="font-bold text-on-surface text-lg">{{ 'smartEnrollDemos.humanIdPreviewResult.successTitle' | transloco }}</p>\r
                <p class="text-sm text-on-surface-variant">{{ 'smartEnrollDemos.humanIdPreviewResult.successSubtitle' | transloco }}</p>\r
            </div>\r
        </div>\r
\r
        @if (hasSummaryRow()) {\r
            <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                <h3 class="text-sm font-bold text-primary mb-3">{{ 'smartEnrollDemos.humanIdPreviewResult.summaryHeading' | transloco }}</h3>\r
                <dl class="space-y-2 text-sm">\r
                    @if (parsed?.passwordLayer !== undefined) {\r
                        <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,11rem)_1fr] gap-x-3 gap-y-1">\r
                            <dt class="text-on-surface-variant font-medium">{{ 'smartEnrollDemos.humanIdPreviewResult.passwordLayerLabel' | transloco }}</dt>\r
                            <dd class="text-on-surface">{{ formatPasswordLayer(parsed!.passwordLayer!) }}</dd>\r
                        </div>\r
                    }\r
                    @if (parsed?.requireLiveness !== undefined) {\r
                        <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,11rem)_1fr] gap-x-3 gap-y-1">\r
                            <dt class="text-on-surface-variant font-medium">{{ 'smartEnrollDemos.humanIdPreviewResult.livenessRequiredLabel' | transloco }}</dt>\r
                            <dd class="text-on-surface">\r
                                {{\r
                                    parsed!.requireLiveness\r
                                        ? ('smartEnrollDemos.common.yes' | transloco)\r
                                        : ('smartEnrollDemos.common.no' | transloco)\r
                                }}\r
                            </dd>\r
                        </div>\r
                    }\r
                </dl>\r
            </section>\r
        }\r
\r
        @if (parsed?.publicData) {\r
            <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                <h3 class="text-sm font-bold text-primary mb-3">{{ 'smartEnrollDemos.humanIdPreviewResult.publicDataHeading' | transloco }}</h3>\r
                <dl class="space-y-2 text-sm">\r
                    @for (entry of objectEntries(parsed!.publicData); track entry[0]) {\r
                        <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,11rem)_1fr] gap-x-3 gap-y-1 border-b border-outline-variant/10 pb-2 last:border-0 last:pb-0">\r
                            <dt class="text-on-surface-variant font-medium">{{ entry[0] }}</dt>\r
                            <dd class="font-mono text-xs text-on-surface break-all">\r
                                {{ formatValue(entry[1], ('smartEnrollDemos.common.yes' | transloco), ('smartEnrollDemos.common.no' | transloco)) }}\r
                            </dd>\r
                        </div>\r
                    }\r
                </dl>\r
            </section>\r
        }\r
    </div>\r
\r
    <details class="rounded-xl border border-outline-variant/20 bg-surface-container-low/50 px-4 py-3 group">\r
        <summary class="cursor-pointer list-none font-bold text-sm text-on-surface-variant flex items-center justify-between gap-2">\r
            <span>{{ 'smartEnrollDemos.humanIdPreviewResult.rawDebug' | transloco }}</span>\r
            <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform text-lg">expand_more</span>\r
        </summary>\r
        <pre class="mt-3 text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{ result | json }}</pre>\r
    </details>\r
\r
    <app-demo-result-actions\r
        [secondaryLabel]="'smartEnrollDemos.humanIdPreviewResult.previewAnother' | transloco"\r
        secondaryIcon="visibility"\r
        [primaryLabel]="'smartEnrollDemos.humanIdPreviewResult.backToDemos' | transloco"\r
        [primaryRouterLink]="null"\r
        (secondary)="previewAnother.emit()"\r
        (primary)="backToDemos.emit()"\r
    />\r
</div>\r
` }]
  }], null, { result: [{
    type: Input,
    args: [{ required: true }]
  }], previewAnother: [{
    type: Output
  }], backToDemos: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanIdPreviewResultComponent, { className: "HumanIdPreviewResultComponent", filePath: "src/app/modules/smart-enroll/demos/shared/human-id-preview-result.component.ts", lineNumber: 16 });
})();

// src/app/modules/smart-enroll/demos/pages/humanid-preview/humanid-preview-demo.component.ts
var _c0 = ["qrFileInput"];
var _c1 = (a0, a1) => ({ "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20": a0, "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent": a1 });
function HumanidPreviewDemoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function HumanidPreviewDemoComponent_Conditional_9_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "textarea", 22);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function HumanidPreviewDemoComponent_Conditional_9_Conditional_12_Template_textarea_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.humanID, $event) || (ctx_r1.humanID = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "smartEnrollDemos.humanidPreview.proofLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.humanID);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "smartEnrollDemos.humanidPreview.proofPlaceholder"));
  }
}
function HumanidPreviewDemoComponent_Conditional_9_Conditional_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-raster-image", 26);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.qrPreview)("alt", \u0275\u0275pipeBind1(1, 4, "smartEnrollDemos.humanidPreview.qrPreviewAlt"))("width", 400)("height", 160);
  }
}
function HumanidPreviewDemoComponent_Conditional_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-demo-upload-image-button", 24);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("clicked", function HumanidPreviewDemoComponent_Conditional_9_Conditional_13_Template_app_demo_upload_image_button_clicked_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerQrUpload());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 25, 0);
    \u0275\u0275listener("change", function HumanidPreviewDemoComponent_Conditional_9_Conditional_13_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onQrFile($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, HumanidPreviewDemoComponent_Conditional_9_Conditional_13_Conditional_9_Template, 2, 6, "app-demo-raster-image", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "smartEnrollDemos.humanidPreview.qrUploadHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("primaryText", \u0275\u0275pipeBind1(5, 6, ctx_r1.qrExtracting ? "smartEnrollDemos.humanidPreview.readingQr" : "smartEnrollDemos.humanidPreview.chooseQrImage"))("secondaryText", \u0275\u0275pipeBind1(6, 8, "smartEnrollDemos.humanidPreview.secondaryPngJpeg"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.qrPreview ? 9 : -1);
  }
}
function HumanidPreviewDemoComponent_Conditional_9_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function HumanidPreviewDemoComponent_Conditional_9_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.qrExtractMessage);
  }
}
function HumanidPreviewDemoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10);
    \u0275\u0275listener("submit", function HumanidPreviewDemoComponent_Conditional_9_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit($event));
    });
    \u0275\u0275elementStart(1, "div")(2, "p", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12)(6, "button", 13);
    \u0275\u0275listener("click", function HumanidPreviewDemoComponent_Conditional_9_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProofMode("paste"));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 13);
    \u0275\u0275listener("click", function HumanidPreviewDemoComponent_Conditional_9_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProofMode("qr"));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, HumanidPreviewDemoComponent_Conditional_9_Conditional_12_Template, 9, 10, "div")(13, HumanidPreviewDemoComponent_Conditional_9_Conditional_13_Template, 10, 10, "div", 14);
    \u0275\u0275elementStart(14, "div")(15, "label", 15);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 16);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function HumanidPreviewDemoComponent_Conditional_9_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.verifierKey, $event) || (ctx_r1.verifierKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, HumanidPreviewDemoComponent_Conditional_9_Conditional_20_Template, 2, 1, "div", 17)(21, HumanidPreviewDemoComponent_Conditional_9_Conditional_21_Template, 2, 1, "div", 18);
    \u0275\u0275elementStart(22, "button", 19);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 13, "smartEnrollDemos.humanidPreview.humanIdModeLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c1, ctx_r1.proofMode === "paste", ctx_r1.proofMode !== "paste"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 15, "smartEnrollDemos.humanidPreview.pasteString"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c1, ctx_r1.proofMode === "qr", ctx_r1.proofMode !== "qr"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 17, "smartEnrollDemos.humanidPreview.uploadQrImage"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.proofMode === "paste" ? 12 : 13);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, "smartEnrollDemos.humanidPreview.verifierKeyOptional"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.verifierKey);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 21, "smartEnrollDemos.humanidPreview.verifierKeyPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.error ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.qrExtractMessage ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canPreview);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 23, "smartEnrollDemos.humanidPreview.previewCta"));
  }
}
function HumanidPreviewDemoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementStart(2, "p", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "smartEnrollDemos.humanidPreview.processing"));
  }
}
function HumanidPreviewDemoComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-human-id-preview-result", 29);
    \u0275\u0275listener("previewAnother", function HumanidPreviewDemoComponent_Conditional_11_Template_app_human_id_preview_result_previewAnother_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    })("backToDemos", function HumanidPreviewDemoComponent_Conditional_11_Template_app_human_id_preview_result_backToDemos_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToDemos());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("result", ctx_r1.result);
  }
}
function HumanidPreviewDemoComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 8)(1, "summary", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.humanidPreview.apiRefSummary"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "smartEnrollDemos.humanidPreview.apiBullet1"));
  }
}
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/biometrics/humanID-preview`,
  `${DOCS_BASE}/biometrics/humanID-encrypt`,
  `${DOCS_BASE}/biometrics/humanID-decrypt`,
  `${DOCS_BASE}/biometrics/humanID-encrypt-qr-code`,
  `${DOCS_BASE}/biometrics/liveness`
];
var RELATED_DOC_BADGE_MUTED = [false, false, false, false, false];
var HumanidPreviewDemoComponent = class _HumanidPreviewDemoComponent {
  constructor() {
    this.authChecked = false;
    this.step = "form";
    this.proofMode = "paste";
    this.humanID = "";
    this.verifierKey = "";
    this.result = null;
    this.error = null;
    this.qrPreview = null;
    this.qrExtracting = false;
    this.qrExtractMessage = null;
    this.relatedDocs = [];
    this._api = inject(BiometricsDemoApiService);
    this._cdr = inject(ChangeDetectorRef);
    this._transloco = inject(TranslocoService);
    this._router = inject(Router);
  }
  ngOnInit() {
    if (!this._api.ensureAuthenticated()) {
      this.authChecked = true;
      return;
    }
    this.authChecked = true;
    this.relatedDocs = this.buildRelatedDocs();
  }
  get showApiReference() {
    return this.step !== "result";
  }
  get canPreview() {
    return Boolean(this.humanID.trim() && !this.qrExtracting);
  }
  setProofMode(mode) {
    this.proofMode = mode;
    this.error = null;
    this.qrExtractMessage = null;
    if (mode === "paste") {
      this.qrPreview = null;
      this.humanID = "";
    } else {
      this.humanID = "";
    }
    this._cdr.markForCheck();
  }
  triggerQrUpload() {
    this.qrFileInput?.nativeElement.click();
  }
  onQrFile(event) {
    return __async(this, null, function* () {
      const file = event.target.files?.[0];
      if (!file)
        return;
      this.error = null;
      this.qrExtractMessage = null;
      this.qrPreview = URL.createObjectURL(file);
      this.qrExtracting = true;
      this._cdr.markForCheck();
      if (!this._api.ensureAuthenticated()) {
        this.qrExtracting = false;
        this.error = this._transloco.translate("smartEnrollDemos.common.mustBeSignedIn");
        this._cdr.markForCheck();
        return;
      }
      try {
        const rawB64 = yield fileToBase64(file);
        const mime = file.type?.startsWith("image/") ? file.type : "image/png";
        const humanIDQR = `data:${mime};base64,${rawB64}`;
        this._api.previewHumanIdQr({ humanIDQR, verifierKey: this.verifierKey.trim() || void 0 }).subscribe({
          next: (data) => {
            const envelope = data;
            const inner = envelope?.["data"];
            const extracted = inner?.["humanID"];
            if (typeof extracted !== "string" || !extracted) {
              this.humanID = "";
              this.error = this._transloco.translate("smartEnrollDemos.humanidPreview.errorReadProof");
              this.qrExtractMessage = null;
            } else {
              this.humanID = extracted;
              this.qrExtractMessage = this._transloco.translate("smartEnrollDemos.humanidPreview.qrExtractSuccess");
            }
            this.qrExtracting = false;
            this._cdr.markForCheck();
          },
          error: (err) => {
            this.humanID = "";
            this.error = err.error ?? err.message ?? "Request failed";
            this.qrExtractMessage = null;
            this.qrExtracting = false;
            this._cdr.markForCheck();
          }
        });
      } catch {
        this.qrExtracting = false;
        this._cdr.markForCheck();
      }
    });
  }
  submit(event) {
    event.preventDefault();
    if (!this._api.ensureAuthenticated() || !this.humanID.trim())
      return;
    this.step = "processing";
    this.error = null;
    this._cdr.markForCheck();
    this._api.previewHumanId({ humanID: this.humanID.trim(), verifierKey: this.verifierKey || void 0 }).subscribe({
      next: (data) => {
        this.result = data;
        this.step = "result";
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.error = err.error ?? err.message ?? "Request failed";
        this.step = "form";
        this._cdr.markForCheck();
      }
    });
  }
  reset() {
    this.step = "form";
    this.humanID = "";
    this.verifierKey = "";
    this.result = null;
    this.error = null;
    this.qrExtractMessage = null;
    this.qrPreview = null;
    this.proofMode = "paste";
    this._cdr.markForCheck();
  }
  backToDemos() {
    void this._router.navigate(["/smart-enroll/demos"]);
  }
  buildRelatedDocs() {
    return RELATED_DOC_HREFS.map((href, i) => ({
      href,
      title: this._transloco.translate(`smartEnrollDemos.humanidPreview.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.humanidPreview.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.humanidPreview.relatedDocs.${i}.badge`),
      badgeMuted: RELATED_DOC_BADGE_MUTED[i]
    }));
  }
  static {
    this.\u0275fac = function HumanidPreviewDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanidPreviewDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanidPreviewDemoComponent, selectors: [["app-humanid-preview-demo"]], viewQuery: function HumanidPreviewDemoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.qrFileInput = _t.first);
      }
    }, decls: 14, vars: 9, consts: [["qrFileInput", ""], [1, "mb-8", "mt-6"], [1, "text-3xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant"], [1, "h-60", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "space-y-5"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-4"], [3, "result"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "px-4", "py-3", "group"], [3, "items"], [1, "space-y-5", 3, "submit"], [1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-2"], [1, "flex", "rounded-xl", "p-1", "bg-slate-100/80", "dark:bg-slate-900/80", "border", "border-slate-200/60", "dark:border-slate-800/60", "gap-1.5"], ["type", "button", 1, "flex-1", "py-2", "text-sm", "font-semibold", "rounded-lg", "transition-all", "duration-150", 3, "click", "ngClass"], [1, "space-y-3"], ["for", "prev-verifier", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "prev-verifier", "type", "text", "name", "verifierKey", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel", "placeholder"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "text-sm", "text-error"], [1, "px-4", "py-3", "bg-primary/10", "border", "border-primary/20", "rounded-lg", "text-sm", "text-primary"], ["type", "submit", 1, "demo-btn-primary", 3, "disabled"], ["for", "prev-proof", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], [1, "text-error"], ["id", "prev-proof", "required", "", "rows", "4", "name", "humanID", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "placeholder-on-surface-variant/50", "text-xs", "font-mono", "focus:outline-none", "focus:border-primary/60", "resize-none", 3, "ngModelChange", "ngModel", "placeholder"], [1, "text-xs", "text-on-surface-variant"], [3, "clicked", "primaryText", "secondaryText"], ["type", "file", "accept", "image/png,image/jpeg,image/jpg,image/*", 1, "hidden", 3, "change"], ["className", "max-h-40 w-auto rounded-lg border border-outline-variant/30 object-contain bg-white p-2", 3, "src", "alt", "width", "height"], [1, "w-12", "h-12", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "font-semibold"], [3, "previewAnother", "backToDemos", "result"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary"], [1, "mt-4", "text-xs", "text-on-surface-variant", "border-t", "border-outline-variant/15", "pt-4"]], template: function HumanidPreviewDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell")(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, HumanidPreviewDemoComponent_Conditional_8_Template, 1, 0, "div", 4)(9, HumanidPreviewDemoComponent_Conditional_9_Template, 25, 31, "form", 5)(10, HumanidPreviewDemoComponent_Conditional_10_Template, 5, 3, "div", 6)(11, HumanidPreviewDemoComponent_Conditional_11_Template, 1, 1, "app-human-id-preview-result", 7)(12, HumanidPreviewDemoComponent_Conditional_12_Template, 8, 6, "details", 8);
        \u0275\u0275element(13, "app-demo-related-docs-section", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx.step === "result" ? "smartEnrollDemos.humanidPreview.heroTitleResult" : "smartEnrollDemos.humanidPreview.heroTitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "smartEnrollDemos.humanidPreview.heroSubtitle"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.authChecked ? 8 : ctx.step === "form" ? 9 : ctx.step === "processing" ? 10 : 11);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.showApiReference ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.relatedDocs);
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      NgModel,
      NgForm,
      NgClass,
      TranslocoModule,
      TranslocoPipe,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      HumanIdPreviewResultComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.smart-enroll-demos[_ngcontent-%COMP%] {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .glass-panel-dark[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scan-line[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: _ngcontent-%COMP%_demoScanAnim 3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tl[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tr[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-bl[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-br[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tl[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tr[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-bl[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-br[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .blueprint-grid[_ngcontent-%COMP%] {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-primary-cta[_ngcontent-%COMP%] {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary.demo-btn-inline[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary.demo-btn-inline[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-primary[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-ring-frost[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-ambient[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-frost[_ngcontent-%COMP%] {\n  border-color: var(--frost);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanning-ring[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-low[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-high[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-lowest[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-error-container\\/20[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-surface[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-surface-variant[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-primary-container[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%] {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/20[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/30[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/15[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/10[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-error\\/20[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-error[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .placeholder-on-surface-variant\\/50[_ngcontent-%COMP%]::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .hover\\:bg-surface-container[_ngcontent-%COMP%]:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .focus\\:border-primary\\/60[_ngcontent-%COMP%]:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .hover\\:border-primary\\/40[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .ring-primary-20[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-primary-10[_ngcontent-%COMP%] {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .selected-liveness[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle--on[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__icon[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__icon--on[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--encrypt[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--decrypt[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__track[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__track--on[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-callout[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .selected-tolerance[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-range-input[_ngcontent-%COMP%] {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%] {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .glass-panel-dark[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--encrypt[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  color-scheme: dark;\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%], \n.human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover, \n.human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover, \n.dark[_ngcontent-%COMP%]   .human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=_demos-theme.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanidPreviewDemoComponent, [{
    type: Component,
    args: [{ selector: "app-humanid-preview-demo", standalone: true, imports: [
      FormsModule,
      NgClass,
      TranslocoModule,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      HumanIdPreviewResultComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell>\r
    <div class="mb-8 mt-6">\r
        <h2 class="text-3xl font-black tracking-tight text-on-surface mb-2">\r
            {{ (step === 'result' ? 'smartEnrollDemos.humanidPreview.heroTitleResult' : 'smartEnrollDemos.humanidPreview.heroTitle') | transloco }}\r
        </h2>\r
        <p class="text-on-surface-variant">{{ 'smartEnrollDemos.humanidPreview.heroSubtitle' | transloco }}</p>\r
    </div>\r
\r
    @if (!authChecked) {\r
        <div class="h-60 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else if (step === 'form') {\r
        <form class="space-y-5" (submit)="submit($event)">\r
            <div>\r
                <p class="block text-sm font-semibold text-on-surface mb-2">{{ 'smartEnrollDemos.humanidPreview.humanIdModeLabel' | transloco }}</p>\r
                <div class="flex rounded-xl p-1 bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 gap-1.5">\r
                    <button type="button" \r
                            (click)="setProofMode('paste')" \r
                            class="flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-150" \r
                            [ngClass]="{\r
                                'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20': proofMode === 'paste',\r
                                'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent': proofMode !== 'paste'\r
                            }">\r
                        {{ 'smartEnrollDemos.humanidPreview.pasteString' | transloco }}\r
                    </button>\r
                    <button type="button" \r
                            (click)="setProofMode('qr')" \r
                            class="flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-150" \r
                            [ngClass]="{\r
                                'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20': proofMode === 'qr',\r
                                'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent': proofMode !== 'qr'\r
                            }">\r
                        {{ 'smartEnrollDemos.humanidPreview.uploadQrImage' | transloco }}\r
                    </button>\r
                </div>\r
            </div>\r
\r
            @if (proofMode === 'paste') {\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5" for="prev-proof">{{ 'smartEnrollDemos.humanidPreview.proofLabel' | transloco }} <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span></label>\r
                    <textarea id="prev-proof" required rows="4" [(ngModel)]="humanID" name="humanID" [placeholder]="'smartEnrollDemos.humanidPreview.proofPlaceholder' | transloco" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 text-xs font-mono focus:outline-none focus:border-primary/60 resize-none"></textarea>\r
                </div>\r
            } @else {\r
                <div class="space-y-3">\r
                    <p class="text-xs text-on-surface-variant">{{ 'smartEnrollDemos.humanidPreview.qrUploadHelp' | transloco }}</p>\r
                    <app-demo-upload-image-button (clicked)="triggerQrUpload()" [primaryText]="(qrExtracting ? 'smartEnrollDemos.humanidPreview.readingQr' : 'smartEnrollDemos.humanidPreview.chooseQrImage') | transloco" [secondaryText]="'smartEnrollDemos.humanidPreview.secondaryPngJpeg' | transloco" />\r
                    <input #qrFileInput type="file" accept="image/png,image/jpeg,image/jpg,image/*" class="hidden" (change)="onQrFile($event)" />\r
                    @if (qrPreview) {\r
                        <app-demo-raster-image [src]="qrPreview" [alt]="'smartEnrollDemos.humanidPreview.qrPreviewAlt' | transloco" [width]="400" [height]="160" className="max-h-40 w-auto rounded-lg border border-outline-variant/30 object-contain bg-white p-2" />\r
                    }\r
                </div>\r
            }\r
\r
            <div>\r
            <label class="block text-sm font-semibold text-on-surface mb-1.5" for="prev-verifier">{{ 'smartEnrollDemos.humanidPreview.verifierKeyOptional' | transloco }}</label>\r
            <input id="prev-verifier" type="text" [(ngModel)]="verifierKey" name="verifierKey" [placeholder]="'smartEnrollDemos.humanidPreview.verifierKeyPlaceholder' | transloco" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/60" />\r
            </div>\r
\r
            @if (error) {\r
                <div class="px-4 py-3 bg-error-container/20 border border-error/20 rounded-lg text-sm text-error">{{ error }}</div>\r
            }\r
            @if (qrExtractMessage) {\r
                <div class="px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary">{{ qrExtractMessage }}</div>\r
            }\r
\r
            <button type="submit" [disabled]="!canPreview" class="demo-btn-primary">{{ 'smartEnrollDemos.humanidPreview.previewCta' | transloco }}</button>\r
        </form>\r
    } @else if (step === 'processing') {\r
        <div class="flex flex-col items-center justify-center py-20 gap-4">\r
            <div class="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>\r
            <p class="font-semibold">{{ 'smartEnrollDemos.humanidPreview.processing' | transloco }}</p>\r
        </div>\r
    } @else {\r
        <app-human-id-preview-result [result]="result" (previewAnother)="reset()" (backToDemos)="backToDemos()" />\r
    }\r
\r
    @if (showApiReference) {\r
        <details class="mt-10 rounded-xl border border-outline-variant/20 bg-surface-container-low/50 px-4 py-3 group">\r
            <summary class="cursor-pointer list-none font-bold text-sm text-primary">{{ 'smartEnrollDemos.humanidPreview.apiRefSummary' | transloco }}</summary>\r
            <div class="mt-4 text-xs text-on-surface-variant border-t border-outline-variant/15 pt-4">\r
                <p>{{ 'smartEnrollDemos.humanidPreview.apiBullet1' | transloco }}</p>\r
            </div>\r
        </details>\r
    }\r
\r
    <app-demo-related-docs-section [items]="relatedDocs" />\r
</app-demo-page-shell>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/demos/styles/_demos-theme.scss */\n.smart-enroll-demos {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos .material-symbols-outlined {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos .glass-panel-dark {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos .scan-line {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: demoScanAnim 3s linear infinite;\n}\n@keyframes demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos .scanner-corner-tl,\n.smart-enroll-demos .scanner-corner-tr,\n.smart-enroll-demos .scanner-corner-bl,\n.smart-enroll-demos .scanner-corner-br {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos .scanner-corner-tl {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-tr {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-bl {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-br {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .blueprint-grid {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos .bg-primary-cta {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos .demo-btn-primary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos .demo-btn-primary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-primary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-primary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .demo-btn-secondary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos .demo-btn-secondary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-secondary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-secondary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .shadow-primary {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos .shadow-ring-frost {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos .shadow-ambient {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos .border-frost {\n  border-color: var(--frost);\n}\n.smart-enroll-demos .scanning-ring {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos .bg-surface {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos .bg-surface-container {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .bg-surface-container-low {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .bg-surface-container-high {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .bg-surface-container-lowest {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos .bg-error-container\\/20 {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos .text-on-surface {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos .text-on-surface-variant {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .text-on-primary-container {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos .text-primary {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .text-error {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos .border-outline-variant\\/20 {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos .border-outline-variant\\/30 {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos .border-outline-variant\\/15 {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos .border-outline-variant\\/10 {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos .border-error\\/20 {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos .border-error {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos .placeholder-on-surface-variant\\/50::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos .hover\\:bg-surface-container:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .focus\\:border-primary\\/60:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos .hover\\:border-primary\\/40:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos .ring-primary-20 {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos .bg-primary-10 {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos .selected-liveness {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .human-id-liveness-toggle:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos .human-id-liveness-toggle--on {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon--on {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--decrypt {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track--on {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-callout {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .selected-tolerance {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos .demo-range-input {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark .smart-enroll-demos {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .glass-panel-dark {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark .smart-enroll-demos .demo-btn-primary {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark .smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark .smart-enroll-demos .demo-btn-secondary {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark .smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark .smart-enroll-demos input[type=date] {\n  color-scheme: dark;\n}\n.dark .smart-enroll-demos input[type=date]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub .demo-card,\n.human-authn-demos-hub .demo-card {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub .demo-card:hover,\n.human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark .smart-enroll-demos-hub .demo-card:hover,\n.dark .human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=_demos-theme.css.map */\n'] }]
  }], null, { qrFileInput: [{
    type: ViewChild,
    args: ["qrFileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanidPreviewDemoComponent, { className: "HumanidPreviewDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/humanid-preview/humanid-preview-demo.component.ts", lineNumber: 56 });
})();
export {
  HumanidPreviewDemoComponent
};
//# sourceMappingURL=chunk-DSA63F4W.js.map
