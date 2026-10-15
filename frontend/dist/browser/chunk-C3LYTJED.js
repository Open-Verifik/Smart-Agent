import {
  DemoCreditsUsageComponent
} from "./chunk-IQYQUAUX.js";
import {
  faceCropToDataUrl,
  formatDisplayValue,
  isPlainObject
} from "./chunk-Q7ZENBRV.js";
import {
  DemoCaptureOptionHeadingComponent,
  DemoChooseOneCalloutComponent,
  DemoOrDividerComponent,
  FaceGuidedCameraComponent
} from "./chunk-DCFVZDVI.js";
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
  fileToBase64,
  getDemoOs
} from "./chunk-QDU3MPYG.js";
import "./chunk-45PTEIW3.js";
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
  ɵɵsanitizeUrl,
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

// src/app/modules/smart-enroll/demos/shared/human-id-decrypt-result.component.ts
var _forTrack0 = ($index, $item) => $item[0];
function HumanIdDecryptResultComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.humanIdDecryptResult.identifierHeading"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.parsed.identifier);
  }
}
function HumanIdDecryptResultComponent_Conditional_13_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "dt", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 19);
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
function HumanIdDecryptResultComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dl", 16);
    \u0275\u0275repeaterCreate(5, HumanIdDecryptResultComponent_Conditional_13_For_6_Template, 7, 6, "div", 17, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "smartEnrollDemos.humanIdDecryptResult.publicDataHeading"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.objectEntries(ctx_r0.parsed.publicData));
  }
}
function HumanIdDecryptResultComponent_Conditional_14_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "dt", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r3[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatValue(entry_r3[1], \u0275\u0275pipeBind1(5, 2, "smartEnrollDemos.common.yes"), \u0275\u0275pipeBind1(6, 4, "smartEnrollDemos.common.no")), " ");
  }
}
function HumanIdDecryptResultComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dl", 16);
    \u0275\u0275repeaterCreate(5, HumanIdDecryptResultComponent_Conditional_14_For_6_Template, 7, 6, "div", 17, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "smartEnrollDemos.humanIdDecryptResult.metadataHeading"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.objectEntries(ctx_r0.parsed.metadata));
  }
}
function HumanIdDecryptResultComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "img", 20);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartEnrollDemos.humanIdDecryptResult.faceCropHeading"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.faceCropUrl(), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(5, 5, "smartEnrollDemos.humanIdDecryptResult.faceCropAlt"));
  }
}
var HumanIdDecryptResultComponent = class _HumanIdDecryptResultComponent {
  constructor() {
    this.result = null;
    this.tryAgain = new EventEmitter();
    this.backToDemos = new EventEmitter();
  }
  get parsed() {
    if (!this.result)
      return null;
    const data = isPlainObject(this.result["data"]) ? this.result["data"] : null;
    return {
      identifier: typeof data?.["identifier"] === "string" ? data["identifier"] : "",
      publicData: isPlainObject(data?.["publicData"]) ? data["publicData"] : null,
      metadata: isPlainObject(data?.["metadata"]) ? data["metadata"] : null,
      faceCropBase64: typeof data?.["faceCropBase64"] === "string" ? data["faceCropBase64"] : "",
      difficulty: typeof data?.["difficulty"] === "string" ? data["difficulty"] : "",
      credits: isPlainObject(this.result["credits"]) ? this.result["credits"] : null,
      charged: typeof this.result["charged"] === "boolean" ? this.result["charged"] : void 0,
      requiredLiveness: typeof this.result["requiredLiveness"] === "boolean" ? this.result["requiredLiveness"] : void 0
    };
  }
  formatValue(v, yes, no) {
    return formatDisplayValue(v, yes, no);
  }
  faceCropUrl() {
    return faceCropToDataUrl(this.parsed?.faceCropBase64 ?? "");
  }
  objectEntries(obj) {
    if (!obj)
      return [];
    return Object.entries(obj).filter(([, v]) => v !== void 0 && v !== null);
  }
  static {
    this.\u0275fac = function HumanIdDecryptResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanIdDecryptResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanIdDecryptResultComponent, selectors: [["app-human-id-decrypt-result"]], inputs: { result: "result" }, outputs: { tryAgain: "tryAgain", backToDemos: "backToDemos" }, decls: 30, vars: 24, consts: [[1, "space-y-5"], [1, "rounded-2xl", "bg-surface-container-low", "border", "border-primary/20", "p-6"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "material-symbols-outlined", "text-primary", "text-2xl"], [1, "font-bold", "text-on-surface", "text-lg"], [1, "text-sm", "text-on-surface-variant"], [1, "mb-6", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-high/40", "p-4"], [1, "block", 3, "result"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "px-4", "py-3", "group"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-on-surface-variant", "flex", "items-center", "justify-between", "gap-2"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform", "text-lg"], [1, "mt-3", "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"], [3, "secondary", "primary", "secondaryLabel", "primaryLabel", "primaryRouterLink"], [1, "text-sm", "font-bold", "text-primary", "mb-2"], [1, "font-mono", "text-sm", "text-on-surface", "break-all"], [1, "text-sm", "font-bold", "text-primary", "mb-3"], [1, "space-y-2", "text-sm"], [1, "grid", "grid-cols-1", "sm:grid-cols-[minmax(0,11rem)_1fr]", "gap-x-3", "gap-y-1", "border-b", "border-outline-variant/10", "pb-2", "last:border-0", "last:pb-0"], [1, "text-on-surface-variant", "font-medium"], [1, "font-mono", "text-xs", "text-on-surface", "break-all"], [1, "max-h-64", "w-auto", "max-w-full", "object-contain", "rounded-xl", "border", "border-outline-variant/20", 3, "src", "alt"]], template: function HumanIdDecryptResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "lock_open");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 5);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, HumanIdDecryptResultComponent_Conditional_12_Template, 6, 4, "section", 6)(13, HumanIdDecryptResultComponent_Conditional_13_Template, 7, 3, "section", 6)(14, HumanIdDecryptResultComponent_Conditional_14_Template, 7, 3, "section", 6)(15, HumanIdDecryptResultComponent_Conditional_15_Template, 6, 7, "section", 6);
        \u0275\u0275element(16, "app-demo-credits-usage", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "details", 8)(18, "summary", 9)(19, "span");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 10);
        \u0275\u0275text(23, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "pre", 11);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "json");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "app-demo-result-actions", 12);
        \u0275\u0275pipe(28, "transloco");
        \u0275\u0275pipe(29, "transloco");
        \u0275\u0275listener("secondary", function HumanIdDecryptResultComponent_Template_app_demo_result_actions_secondary_27_listener() {
          return ctx.tryAgain.emit();
        })("primary", function HumanIdDecryptResultComponent_Template_app_demo_result_actions_primary_27_listener() {
          return ctx.backToDemos.emit();
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "smartEnrollDemos.humanIdDecryptResult.successTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, "smartEnrollDemos.humanIdDecryptResult.successSubtitle"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.parsed == null ? null : ctx.parsed.identifier) ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.parsed == null ? null : ctx.parsed.publicData) ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.parsed == null ? null : ctx.parsed.metadata) && ctx.objectEntries(ctx.parsed.metadata).length ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.parsed == null ? null : ctx.parsed.faceCropBase64) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("result", ctx.result);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 16, "smartEnrollDemos.humanIdDecryptResult.rawDebug"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 18, ctx.result));
        \u0275\u0275advance(2);
        \u0275\u0275property("secondaryLabel", \u0275\u0275pipeBind1(28, 20, "smartEnrollDemos.humanIdDecryptResult.tryAgain"))("primaryLabel", \u0275\u0275pipeBind1(29, 22, "smartEnrollDemos.humanIdDecryptResult.backToDemos"))("primaryRouterLink", null);
      }
    }, dependencies: [JsonPipe, TranslocoModule, TranslocoPipe, DemoResultActionsComponent, DemoCreditsUsageComponent], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanIdDecryptResultComponent, [{
    type: Component,
    args: [{ selector: "app-human-id-decrypt-result", standalone: true, imports: [JsonPipe, TranslocoModule, DemoResultActionsComponent, DemoCreditsUsageComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-5">\r
    <div class="rounded-2xl bg-surface-container-low border border-primary/20 p-6">\r
        <div class="flex items-center gap-3 mb-6">\r
            <span class="material-symbols-outlined text-primary text-2xl">lock_open</span>\r
            <div>\r
                <p class="font-bold text-on-surface text-lg">{{ 'smartEnrollDemos.humanIdDecryptResult.successTitle' | transloco }}</p>\r
                <p class="text-sm text-on-surface-variant">{{ 'smartEnrollDemos.humanIdDecryptResult.successSubtitle' | transloco }}</p>\r
            </div>\r
        </div>\r
\r
        @if (parsed?.identifier) {\r
            <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                <h3 class="text-sm font-bold text-primary mb-2">{{ 'smartEnrollDemos.humanIdDecryptResult.identifierHeading' | transloco }}</h3>\r
                <p class="font-mono text-sm text-on-surface break-all">{{ parsed!.identifier }}</p>\r
            </section>\r
        }\r
\r
        @if (parsed?.publicData) {\r
            <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                <h3 class="text-sm font-bold text-primary mb-3">{{ 'smartEnrollDemos.humanIdDecryptResult.publicDataHeading' | transloco }}</h3>\r
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
\r
        @if (parsed?.metadata && objectEntries(parsed!.metadata).length) {\r
            <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                <h3 class="text-sm font-bold text-primary mb-3">{{ 'smartEnrollDemos.humanIdDecryptResult.metadataHeading' | transloco }}</h3>\r
                <dl class="space-y-2 text-sm">\r
                    @for (entry of objectEntries(parsed!.metadata); track entry[0]) {\r
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
\r
        @if (parsed?.faceCropBase64) {\r
            <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                <h3 class="text-sm font-bold text-primary mb-3">{{ 'smartEnrollDemos.humanIdDecryptResult.faceCropHeading' | transloco }}</h3>\r
                <img [src]="faceCropUrl()" [alt]="'smartEnrollDemos.humanIdDecryptResult.faceCropAlt' | transloco" class="max-h-64 w-auto max-w-full object-contain rounded-xl border border-outline-variant/20" />\r
            </section>\r
        }\r
\r
        <app-demo-credits-usage\r
            [result]="result"\r
            class="block"\r
        />\r
    </div>\r
\r
    <details class="rounded-xl border border-outline-variant/20 bg-surface-container-low/50 px-4 py-3 group">\r
        <summary class="cursor-pointer list-none font-bold text-sm text-on-surface-variant flex items-center justify-between gap-2">\r
            <span>{{ 'smartEnrollDemos.humanIdDecryptResult.rawDebug' | transloco }}</span>\r
            <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform text-lg">expand_more</span>\r
        </summary>\r
        <pre class="mt-3 text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{ result | json }}</pre>\r
    </details>\r
\r
    <app-demo-result-actions\r
        [secondaryLabel]="'smartEnrollDemos.humanIdDecryptResult.tryAgain' | transloco"\r
        [primaryLabel]="'smartEnrollDemos.humanIdDecryptResult.backToDemos' | transloco"\r
        [primaryRouterLink]="null"\r
        (secondary)="tryAgain.emit()"\r
        (primary)="backToDemos.emit()"\r
    />\r
</div>\r
` }]
  }], null, { result: [{
    type: Input,
    args: [{ required: true }]
  }], tryAgain: [{
    type: Output
  }], backToDemos: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanIdDecryptResultComponent, { className: "HumanIdDecryptResultComponent", filePath: "src/app/modules/smart-enroll/demos/shared/human-id-decrypt-result.component.ts", lineNumber: 15 });
})();

// src/app/modules/smart-enroll/demos/pages/humanid-decrypt/humanid-decrypt-demo.component.ts
var _c0 = ["fileInput"];
var _c1 = ["qrFileInput"];
var _c2 = (a0, a1) => ({ "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20": a0, "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent": a1 });
function HumanidDecryptDemoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function HumanidDecryptDemoComponent_Conditional_9_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "textarea", 23);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function HumanidDecryptDemoComponent_Conditional_9_Conditional_12_Template_textarea_ngModelChange_7_listener($event) {
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
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "smartEnrollDemos.humanidDecrypt.proofLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.humanID);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 8, "smartEnrollDemos.humanidDecrypt.proofPlaceholder"));
  }
}
function HumanidDecryptDemoComponent_Conditional_9_Conditional_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-raster-image", 27);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.qrPreview)("alt", \u0275\u0275pipeBind1(1, 4, "smartEnrollDemos.humanidDecrypt.qrPreviewAlt"))("width", 400)("height", 160);
  }
}
function HumanidDecryptDemoComponent_Conditional_9_Conditional_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.humanidDecrypt.extractedHeading"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.humanID);
  }
}
function HumanidDecryptDemoComponent_Conditional_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "p", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-demo-upload-image-button", 25);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("clicked", function HumanidDecryptDemoComponent_Conditional_9_Conditional_13_Template_app_demo_upload_image_button_clicked_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerQrUpload());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 26, 0);
    \u0275\u0275listener("change", function HumanidDecryptDemoComponent_Conditional_9_Conditional_13_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onQrFile($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, HumanidDecryptDemoComponent_Conditional_9_Conditional_13_Conditional_9_Template, 2, 6, "app-demo-raster-image", 27)(10, HumanidDecryptDemoComponent_Conditional_9_Conditional_13_Conditional_10_Template, 6, 4, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "smartEnrollDemos.humanidDecrypt.qrUploadHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("primaryText", \u0275\u0275pipeBind1(5, 7, ctx_r1.qrExtracting ? "smartEnrollDemos.humanidDecrypt.readingQr" : "smartEnrollDemos.humanidDecrypt.chooseQrImage"))("secondaryText", \u0275\u0275pipeBind1(6, 9, "smartEnrollDemos.humanidDecrypt.secondaryPngJpeg"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.qrPreview ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.humanID && ctx_r1.proofMode === "qr" ? 10 : -1);
  }
}
function HumanidDecryptDemoComponent_Conditional_9_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-demo-choose-one-callout", 31);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275element(2, "app-demo-capture-option-heading", 32);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "app-face-guided-camera", 33);
    \u0275\u0275listener("captured", function HumanidDecryptDemoComponent_Conditional_9_Conditional_27_Template_app_face_guided_camera_captured_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCapture($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "app-demo-or-divider")(7, "app-demo-capture-option-heading", 34);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementStart(10, "app-demo-upload-image-button", 25);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275listener("clicked", function HumanidDecryptDemoComponent_Conditional_9_Conditional_27_Template_app_demo_upload_image_button_clicked_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerFaceUpload());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 35, 1);
    \u0275\u0275listener("change", function HumanidDecryptDemoComponent_Conditional_9_Conditional_27_Template_input_change_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFaceFile($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("description", \u0275\u0275pipeBind1(1, 7, "smartEnrollDemos.humanidDecrypt.chooseOneDescription"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 9, "smartEnrollDemos.humanidDecrypt.cameraTitle"))("subtitle", \u0275\u0275pipeBind1(4, 11, "smartEnrollDemos.humanidDecrypt.cameraSubtitle"));
    \u0275\u0275advance(5);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(8, 13, "smartEnrollDemos.humanidDecrypt.uploadTitle"))("subtitle", \u0275\u0275pipeBind1(9, 15, "smartEnrollDemos.humanidDecrypt.uploadSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("primaryText", \u0275\u0275pipeBind1(11, 17, "smartEnrollDemos.humanidDecrypt.uploadPrimary"))("secondaryText", \u0275\u0275pipeBind1(12, 19, "smartEnrollDemos.common.jpegPngGallery"));
  }
}
function HumanidDecryptDemoComponent_Conditional_9_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "img", 36);
    \u0275\u0275elementStart(1, "button", 37);
    \u0275\u0275listener("click", function HumanidDecryptDemoComponent_Conditional_9_Conditional_28_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFace());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.facePreview, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.humanidDecrypt.changeFaceImage"));
  }
}
function HumanidDecryptDemoComponent_Conditional_9_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function HumanidDecryptDemoComponent_Conditional_9_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.qrExtractMessage);
  }
}
function HumanidDecryptDemoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("submit", function HumanidDecryptDemoComponent_Conditional_9_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit($event));
    });
    \u0275\u0275elementStart(1, "div")(2, "p", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "button", 14);
    \u0275\u0275listener("click", function HumanidDecryptDemoComponent_Conditional_9_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProofMode("paste"));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 14);
    \u0275\u0275listener("click", function HumanidDecryptDemoComponent_Conditional_9_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProofMode("qr"));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, HumanidDecryptDemoComponent_Conditional_9_Conditional_12_Template, 9, 10, "div")(13, HumanidDecryptDemoComponent_Conditional_9_Conditional_13_Template, 11, 11, "div", 15);
    \u0275\u0275elementStart(14, "div")(15, "label", 16);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 17);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function HumanidDecryptDemoComponent_Conditional_9_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "p", 12);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementStart(24, "span", 18);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, HumanidDecryptDemoComponent_Conditional_9_Conditional_27_Template, 15, 21)(28, HumanidDecryptDemoComponent_Conditional_9_Conditional_28_Template, 4, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, HumanidDecryptDemoComponent_Conditional_9_Conditional_29_Template, 2, 1, "div", 19)(30, HumanidDecryptDemoComponent_Conditional_9_Conditional_30_Template, 2, 1, "div", 20);
    \u0275\u0275elementStart(31, "button", 21);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 16, "smartEnrollDemos.humanidDecrypt.humanIdModeLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(32, _c2, ctx_r1.proofMode === "paste", ctx_r1.proofMode !== "paste"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 18, "smartEnrollDemos.humanidDecrypt.pasteString"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(35, _c2, ctx_r1.proofMode === "qr", ctx_r1.proofMode !== "qr"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 20, "smartEnrollDemos.humanidDecrypt.uploadQrImage"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.proofMode === "paste" ? 12 : 13);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 22, "smartEnrollDemos.humanidDecrypt.passwordOptional"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 24, "smartEnrollDemos.humanidDecrypt.passwordPlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 26, "smartEnrollDemos.humanidDecrypt.faceImageLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 28, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.faceB64 ? 27 : 28);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.error ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.qrExtractMessage ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canDecrypt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 30, "smartEnrollDemos.humanidDecrypt.decryptCta"));
  }
}
function HumanidDecryptDemoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementStart(2, "p", 39);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "smartEnrollDemos.humanidDecrypt.processing"));
  }
}
function HumanidDecryptDemoComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-human-id-decrypt-result", 40);
    \u0275\u0275listener("tryAgain", function HumanidDecryptDemoComponent_Conditional_11_Template_app_human_id_decrypt_result_tryAgain_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    })("backToDemos", function HumanidDecryptDemoComponent_Conditional_11_Template_app_human_id_decrypt_result_backToDemos_0_listener() {
      \u0275\u0275restoreView(_r7);
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
function HumanidDecryptDemoComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 9)(1, "summary", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42)(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.humanidDecrypt.apiRefSummary"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "smartEnrollDemos.humanidDecrypt.apiBullet1"));
  }
}
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/biometrics/humanID-decrypt`,
  `${DOCS_BASE}/biometrics/humanID-encrypt`,
  `${DOCS_BASE}/biometrics/humanID-preview`,
  `${DOCS_BASE}/biometrics/humanID-encrypt-qr-code`,
  `${DOCS_BASE}/biometrics/liveness`
];
var RELATED_DOC_BADGE_MUTED = [false, false, false, false, false];
var HumanidDecryptDemoComponent = class _HumanidDecryptDemoComponent {
  constructor() {
    this.authChecked = false;
    this.step = "form";
    this.proofMode = "paste";
    this.humanID = "";
    this.password = "";
    this.facePreview = null;
    this.faceB64 = null;
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
  get canDecrypt() {
    return Boolean(this.faceB64 && this.humanID.trim() && !this.qrExtracting);
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
  onFaceFile(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    void fileToBase64(file).then((b64) => {
      this.faceB64 = b64;
      this.facePreview = URL.createObjectURL(file);
      this._cdr.markForCheck();
    });
  }
  onCapture(payload) {
    this.facePreview = payload.dataUrl;
    this.faceB64 = payload.base64;
    this._cdr.markForCheck();
  }
  clearFace() {
    this.faceB64 = null;
    this.facePreview = null;
    this._cdr.markForCheck();
  }
  triggerFaceUpload() {
    this.fileInput?.nativeElement.click();
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
        this._api.previewHumanIdQr({ humanIDQR }).subscribe({
          next: (data) => {
            const envelope = data;
            const inner = envelope?.["data"];
            const extracted = inner?.["humanID"];
            if (typeof extracted !== "string" || !extracted) {
              this.humanID = "";
              this.error = this._transloco.translate("smartEnrollDemos.humanidDecrypt.errorReadProof");
              this.qrExtractMessage = null;
            } else {
              this.humanID = extracted;
              this.qrExtractMessage = this._transloco.translate("smartEnrollDemos.humanidDecrypt.qrExtractSuccess");
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
    if (!this._api.ensureAuthenticated() || !this.faceB64 || !this.humanID.trim())
      return;
    this.step = "processing";
    this.error = null;
    this._cdr.markForCheck();
    this._api.decryptHumanId({
      faceBase64: this.faceB64,
      os: getDemoOs(),
      humanID: this.humanID.trim(),
      password: this.password || void 0
    }).subscribe({
      next: (data) => {
        this.result = data ?? null;
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
    this.faceB64 = null;
    this.facePreview = null;
    this.result = null;
    this.error = null;
    this.humanID = "";
    this.password = "";
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
      title: this._transloco.translate(`smartEnrollDemos.humanidDecrypt.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.humanidDecrypt.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.humanidDecrypt.relatedDocs.${i}.badge`),
      badgeMuted: RELATED_DOC_BADGE_MUTED[i]
    }));
  }
  static {
    this.\u0275fac = function HumanidDecryptDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanidDecryptDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanidDecryptDemoComponent, selectors: [["app-humanid-decrypt-demo"]], viewQuery: function HumanidDecryptDemoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.qrFileInput = _t.first);
      }
    }, decls: 14, vars: 9, consts: [["qrFileInput", ""], ["fileInput", ""], [1, "mb-8", "mt-6"], [1, "text-3xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant"], [1, "h-60", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "space-y-5"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-4"], [3, "result"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "px-4", "py-3", "group"], [3, "items"], [1, "space-y-5", 3, "submit"], [1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-2"], [1, "flex", "rounded-xl", "p-1", "bg-slate-100/80", "dark:bg-slate-900/80", "border", "border-slate-200/60", "dark:border-slate-800/60", "gap-1.5"], ["type", "button", 1, "flex-1", "py-2", "text-sm", "font-semibold", "rounded-lg", "transition-all", "duration-150", 3, "click", "ngClass"], [1, "space-y-3"], ["for", "dec-pw", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "dec-pw", "type", "text", "name", "password", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-sm", "focus:outline-none", "focus:border-primary/60", 3, "ngModelChange", "ngModel", "placeholder"], [1, "text-error"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "text-sm", "text-error"], [1, "px-4", "py-3", "bg-primary/10", "border", "border-primary/20", "rounded-lg", "text-sm", "text-primary"], ["type", "submit", 1, "demo-btn-primary", 3, "disabled"], ["for", "dec-proof", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], ["id", "dec-proof", "required", "", "rows", "4", "name", "humanID", 1, "w-full", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-on-surface", "placeholder-on-surface-variant/50", "text-xs", "font-mono", "focus:outline-none", "focus:border-primary/60", "resize-none", 3, "ngModelChange", "ngModel", "placeholder"], [1, "text-xs", "text-on-surface-variant"], [3, "clicked", "primaryText", "secondaryText"], ["type", "file", "accept", "image/png,image/jpeg,image/jpg,image/*", 1, "hidden", 3, "change"], ["className", "max-h-40 w-auto rounded-lg border border-outline-variant/30 object-contain bg-white p-2", 3, "src", "alt", "width", "height"], [1, "rounded-lg", "border", "border-primary/30", "bg-surface-container-high/40", "px-3", "py-2"], [1, "text-xs", "font-semibold", "text-primary", "mb-1"], [1, "text-[0.65rem]", "font-mono", "text-on-surface", "break-all", "line-clamp-4"], [3, "description"], ["label", "A", "id", "humanid-decrypt-camera-heading", 3, "title", "subtitle"], [3, "captured"], ["label", "B", "id", "humanid-decrypt-upload-heading", 3, "title", "subtitle"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], ["alt", "", 1, "w-full", "aspect-video", "rounded-xl", "border", "border-frost", "object-cover", "mb-3", 3, "src"], ["type", "button", 1, "text-sm", "text-primary", "underline", 3, "click"], [1, "w-12", "h-12", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "font-semibold"], [3, "tryAgain", "backToDemos", "result"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary"], [1, "mt-4", "text-xs", "text-on-surface-variant", "space-y-2", "border-t", "border-outline-variant/15", "pt-4"]], template: function HumanidDecryptDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-page-shell")(1, "div", 2)(2, "h2", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, HumanidDecryptDemoComponent_Conditional_8_Template, 1, 0, "div", 5)(9, HumanidDecryptDemoComponent_Conditional_9_Template, 34, 38, "form", 6)(10, HumanidDecryptDemoComponent_Conditional_10_Template, 5, 3, "div", 7)(11, HumanidDecryptDemoComponent_Conditional_11_Template, 1, 1, "app-human-id-decrypt-result", 8)(12, HumanidDecryptDemoComponent_Conditional_12_Template, 8, 6, "details", 9);
        \u0275\u0275element(13, "app-demo-related-docs-section", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx.step === "result" ? "smartEnrollDemos.humanidDecrypt.heroTitleResult" : "smartEnrollDemos.humanidDecrypt.heroTitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "smartEnrollDemos.humanidDecrypt.heroSubtitle"));
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
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      DemoOrDividerComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent,
      HumanIdDecryptResultComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.smart-enroll-demos[_ngcontent-%COMP%] {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .glass-panel-dark[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scan-line[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: _ngcontent-%COMP%_demoScanAnim 3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tl[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tr[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-bl[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-br[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tl[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tr[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-bl[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-br[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .blueprint-grid[_ngcontent-%COMP%] {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-primary-cta[_ngcontent-%COMP%] {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary.demo-btn-inline[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary.demo-btn-inline[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-primary[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-ring-frost[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-ambient[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-frost[_ngcontent-%COMP%] {\n  border-color: var(--frost);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanning-ring[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-low[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-high[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-lowest[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-error-container\\/20[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-surface[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-surface-variant[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-primary-container[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%] {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/20[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/30[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/15[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/10[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-error\\/20[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-error[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .placeholder-on-surface-variant\\/50[_ngcontent-%COMP%]::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .hover\\:bg-surface-container[_ngcontent-%COMP%]:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .focus\\:border-primary\\/60[_ngcontent-%COMP%]:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .hover\\:border-primary\\/40[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .ring-primary-20[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-primary-10[_ngcontent-%COMP%] {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .selected-liveness[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle--on[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__icon[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__icon--on[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--encrypt[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--decrypt[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__track[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__track--on[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-callout[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .selected-tolerance[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-range-input[_ngcontent-%COMP%] {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%] {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .glass-panel-dark[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--encrypt[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  color-scheme: dark;\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%], \n.human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover, \n.human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover, \n.dark[_ngcontent-%COMP%]   .human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=_demos-theme.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanidDecryptDemoComponent, [{
    type: Component,
    args: [{ selector: "app-humanid-decrypt-demo", standalone: true, imports: [
      FormsModule,
      NgClass,
      TranslocoModule,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      DemoChooseOneCalloutComponent,
      DemoCaptureOptionHeadingComponent,
      DemoOrDividerComponent,
      DemoUploadImageButtonComponent,
      DemoRasterImageComponent,
      FaceGuidedCameraComponent,
      HumanIdDecryptResultComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-page-shell>\r
    <div class="mb-8 mt-6">\r
        <h2 class="text-3xl font-black tracking-tight text-on-surface mb-2">\r
            {{ (step === 'result' ? 'smartEnrollDemos.humanidDecrypt.heroTitleResult' : 'smartEnrollDemos.humanidDecrypt.heroTitle') | transloco }}\r
        </h2>\r
        <p class="text-on-surface-variant">{{ 'smartEnrollDemos.humanidDecrypt.heroSubtitle' | transloco }}</p>\r
    </div>\r
\r
    @if (!authChecked) {\r
        <div class="h-60 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else if (step === 'form') {\r
        <form class="space-y-5" (submit)="submit($event)">\r
            <div>\r
                <p class="block text-sm font-semibold text-on-surface mb-2">{{ 'smartEnrollDemos.humanidDecrypt.humanIdModeLabel' | transloco }}</p>\r
                <div class="flex rounded-xl p-1 bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 gap-1.5">\r
                    <button type="button" \r
                            (click)="setProofMode('paste')" \r
                            class="flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-150" \r
                            [ngClass]="{\r
                                'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20': proofMode === 'paste',\r
                                'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent': proofMode !== 'paste'\r
                            }">\r
                        {{ 'smartEnrollDemos.humanidDecrypt.pasteString' | transloco }}\r
                    </button>\r
                    <button type="button" \r
                            (click)="setProofMode('qr')" \r
                            class="flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-150" \r
                            [ngClass]="{\r
                                'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20': proofMode === 'qr',\r
                                'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent': proofMode !== 'qr'\r
                            }">\r
                        {{ 'smartEnrollDemos.humanidDecrypt.uploadQrImage' | transloco }}\r
                    </button>\r
                </div>\r
            </div>\r
\r
            @if (proofMode === 'paste') {\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5" for="dec-proof">{{ 'smartEnrollDemos.humanidDecrypt.proofLabel' | transloco }} <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span></label>\r
                    <textarea id="dec-proof" required rows="4" [(ngModel)]="humanID" name="humanID" [placeholder]="'smartEnrollDemos.humanidDecrypt.proofPlaceholder' | transloco" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant/50 text-xs font-mono focus:outline-none focus:border-primary/60 resize-none"></textarea>\r
                </div>\r
            } @else {\r
                <div class="space-y-3">\r
                    <p class="text-xs text-on-surface-variant">{{ 'smartEnrollDemos.humanidDecrypt.qrUploadHelp' | transloco }}</p>\r
                    <app-demo-upload-image-button (clicked)="triggerQrUpload()" [primaryText]="(qrExtracting ? 'smartEnrollDemos.humanidDecrypt.readingQr' : 'smartEnrollDemos.humanidDecrypt.chooseQrImage') | transloco" [secondaryText]="'smartEnrollDemos.humanidDecrypt.secondaryPngJpeg' | transloco" />\r
                    <input #qrFileInput type="file" accept="image/png,image/jpeg,image/jpg,image/*" class="hidden" (change)="onQrFile($event)" />\r
                    @if (qrPreview) {\r
                        <app-demo-raster-image [src]="qrPreview" [alt]="'smartEnrollDemos.humanidDecrypt.qrPreviewAlt' | transloco" [width]="400" [height]="160" className="max-h-40 w-auto rounded-lg border border-outline-variant/30 object-contain bg-white p-2" />\r
                    }\r
                    @if (humanID && proofMode === 'qr') {\r
                        <div class="rounded-lg border border-primary/30 bg-surface-container-high/40 px-3 py-2">\r
                            <p class="text-xs font-semibold text-primary mb-1">{{ 'smartEnrollDemos.humanidDecrypt.extractedHeading' | transloco }}</p>\r
                            <p class="text-[0.65rem] font-mono text-on-surface break-all line-clamp-4">{{ humanID }}</p>\r
                        </div>\r
                    }\r
                </div>\r
            }\r
\r
            <div>\r
                <label class="block text-sm font-semibold text-on-surface mb-1.5" for="dec-pw">{{ 'smartEnrollDemos.humanidDecrypt.passwordOptional' | transloco }}</label>\r
                <input id="dec-pw" type="text" [(ngModel)]="password" name="password" [placeholder]="'smartEnrollDemos.humanidDecrypt.passwordPlaceholder' | transloco" class="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/60" />\r
            </div>\r
\r
            <div>\r
                <p class="block text-sm font-semibold text-on-surface mb-2">{{ 'smartEnrollDemos.humanidDecrypt.faceImageLabel' | transloco }} <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span></p>\r
                @if (!faceB64) {\r
                    <app-demo-choose-one-callout [description]="'smartEnrollDemos.humanidDecrypt.chooseOneDescription' | transloco" />\r
                    <app-demo-capture-option-heading label="A" id="humanid-decrypt-camera-heading" [title]="'smartEnrollDemos.humanidDecrypt.cameraTitle' | transloco" [subtitle]="'smartEnrollDemos.humanidDecrypt.cameraSubtitle' | transloco" />\r
                    <app-face-guided-camera (captured)="onCapture($event)" />\r
                    <app-demo-or-divider />\r
                    <app-demo-capture-option-heading label="B" id="humanid-decrypt-upload-heading" [title]="'smartEnrollDemos.humanidDecrypt.uploadTitle' | transloco" [subtitle]="'smartEnrollDemos.humanidDecrypt.uploadSubtitle' | transloco" />\r
                    <app-demo-upload-image-button (clicked)="triggerFaceUpload()" [primaryText]="'smartEnrollDemos.humanidDecrypt.uploadPrimary' | transloco" [secondaryText]="'smartEnrollDemos.common.jpegPngGallery' | transloco" />\r
                    <input #fileInput type="file" accept="image/*" class="hidden" (change)="onFaceFile($event)" />\r
                } @else {\r
                    <img [src]="facePreview" alt="" class="w-full aspect-video rounded-xl border border-frost object-cover mb-3" />\r
                    <button type="button" (click)="clearFace()" class="text-sm text-primary underline">{{ 'smartEnrollDemos.humanidDecrypt.changeFaceImage' | transloco }}</button>\r
                }\r
            </div>\r
\r
            @if (error) {\r
                <div class="px-4 py-3 bg-error-container/20 border border-error/20 rounded-lg text-sm text-error">{{ error }}</div>\r
            }\r
            @if (qrExtractMessage) {\r
                <div class="px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary">{{ qrExtractMessage }}</div>\r
            }\r
\r
            <button type="submit" [disabled]="!canDecrypt" class="demo-btn-primary">{{ 'smartEnrollDemos.humanidDecrypt.decryptCta' | transloco }}</button>\r
        </form>\r
    } @else if (step === 'processing') {\r
        <div class="flex flex-col items-center justify-center py-20 gap-4">\r
            <div class="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>\r
            <p class="font-semibold">{{ 'smartEnrollDemos.humanidDecrypt.processing' | transloco }}</p>\r
        </div>\r
    } @else {\r
        <app-human-id-decrypt-result [result]="result" (tryAgain)="reset()" (backToDemos)="backToDemos()" />\r
    }\r
\r
    @if (showApiReference) {\r
        <details class="mt-10 rounded-xl border border-outline-variant/20 bg-surface-container-low/50 px-4 py-3 group">\r
            <summary class="cursor-pointer list-none font-bold text-sm text-primary">{{ 'smartEnrollDemos.humanidDecrypt.apiRefSummary' | transloco }}</summary>\r
            <div class="mt-4 text-xs text-on-surface-variant space-y-2 border-t border-outline-variant/15 pt-4">\r
                <p>{{ 'smartEnrollDemos.humanidDecrypt.apiBullet1' | transloco }}</p>\r
            </div>\r
        </details>\r
    }\r
\r
    <app-demo-related-docs-section [items]="relatedDocs" />\r
</app-demo-page-shell>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/demos/styles/_demos-theme.scss */\n.smart-enroll-demos {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos .material-symbols-outlined {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos .glass-panel-dark {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos .scan-line {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: demoScanAnim 3s linear infinite;\n}\n@keyframes demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos .scanner-corner-tl,\n.smart-enroll-demos .scanner-corner-tr,\n.smart-enroll-demos .scanner-corner-bl,\n.smart-enroll-demos .scanner-corner-br {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos .scanner-corner-tl {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-tr {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-bl {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-br {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .blueprint-grid {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos .bg-primary-cta {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos .demo-btn-primary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos .demo-btn-primary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-primary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-primary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .demo-btn-secondary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos .demo-btn-secondary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-secondary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-secondary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .shadow-primary {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos .shadow-ring-frost {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos .shadow-ambient {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos .border-frost {\n  border-color: var(--frost);\n}\n.smart-enroll-demos .scanning-ring {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos .bg-surface {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos .bg-surface-container {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .bg-surface-container-low {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .bg-surface-container-high {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .bg-surface-container-lowest {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos .bg-error-container\\/20 {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos .text-on-surface {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos .text-on-surface-variant {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .text-on-primary-container {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos .text-primary {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .text-error {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos .border-outline-variant\\/20 {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos .border-outline-variant\\/30 {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos .border-outline-variant\\/15 {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos .border-outline-variant\\/10 {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos .border-error\\/20 {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos .border-error {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos .placeholder-on-surface-variant\\/50::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos .hover\\:bg-surface-container:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .focus\\:border-primary\\/60:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos .hover\\:border-primary\\/40:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos .ring-primary-20 {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos .bg-primary-10 {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos .selected-liveness {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .human-id-liveness-toggle:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos .human-id-liveness-toggle--on {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon--on {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--decrypt {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track--on {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-callout {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .selected-tolerance {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos .demo-range-input {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark .smart-enroll-demos {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .glass-panel-dark {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark .smart-enroll-demos .demo-btn-primary {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark .smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark .smart-enroll-demos .demo-btn-secondary {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark .smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark .smart-enroll-demos input[type=date] {\n  color-scheme: dark;\n}\n.dark .smart-enroll-demos input[type=date]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub .demo-card,\n.human-authn-demos-hub .demo-card {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub .demo-card:hover,\n.human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark .smart-enroll-demos-hub .demo-card:hover,\n.dark .human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=_demos-theme.css.map */\n'] }]
  }], null, { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], qrFileInput: [{
    type: ViewChild,
    args: ["qrFileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanidDecryptDemoComponent, { className: "HumanidDecryptDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/humanid-decrypt/humanid-decrypt-demo.component.ts", lineNumber: 64 });
})();
export {
  HumanidDecryptDemoComponent
};
//# sourceMappingURL=chunk-C3LYTJED.js.map
