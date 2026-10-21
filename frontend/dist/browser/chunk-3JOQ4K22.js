import {
  DemoCreditsUsageComponent
} from "./chunk-SH7ZW32X.js";
import {
  DemoResultActionsComponent
} from "./chunk-ZD622R6J.js";
import {
  formatDate,
  formatDob,
  isPlainObject,
  parseThumbnails,
  redactThumbnailsForDebug
} from "./chunk-CRJOXNLH.js";
import {
  DemoRasterImageComponent
} from "./chunk-T2IPWVBN.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-R5W3A6HI.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  EventEmitter,
  Input,
  JsonPipe,
  Output,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-enroll/demos/shared/create-person-result.component.ts
function CreatePersonResultComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
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
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollDemos.personResult.personId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.parsed.personId);
  }
}
function CreatePersonResultComponent_Conditional_0_Conditional_13_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-raster-image", 17);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const thumb_r3 = ctx.$implicit;
    \u0275\u0275property("src", thumb_r3.src)("alt", \u0275\u0275pipeBind1(1, 2, "smartEnrollDemos.personResult.thumbnailAlt"));
  }
}
function CreatePersonResultComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275repeaterCreate(5, CreatePersonResultComponent_Conditional_0_Conditional_13_For_6_Template, 2, 4, "app-demo-raster-image", 17, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "smartEnrollDemos.personResult.thumbnails"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.parsed.thumbnails);
  }
}
function CreatePersonResultComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 4);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 5);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, CreatePersonResultComponent_Conditional_0_Conditional_12_Template, 6, 4, "section", 6)(13, CreatePersonResultComponent_Conditional_0_Conditional_13_Template, 7, 3, "section", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "app-demo-credits-usage", 7);
    \u0275\u0275elementStart(15, "details", 8)(16, "summary", 9)(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 10);
    \u0275\u0275text(21, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "pre", 11);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "json");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "app-demo-result-actions", 12);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275listener("secondary", function CreatePersonResultComponent_Conditional_0_Template_app_demo_result_actions_secondary_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enrollAnother.emit());
    })("primary", function CreatePersonResultComponent_Conditional_0_Template_app_demo_result_actions_primary_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToDemos.emit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.headerIcon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.parsed.name || \u0275\u0275pipeBind1(8, 11, "smartEnrollDemos.personResult.personEnrolled"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, "smartEnrollDemos.personResult.subtitleCreate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.parsed.personId ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.parsed.thumbnails.length ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("result", ctx_r1.result);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 15, "smartEnrollDemos.personResult.rawDebug"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 17, ctx_r1.result));
    \u0275\u0275advance(2);
    \u0275\u0275property("secondaryLabel", \u0275\u0275pipeBind1(26, 19, "smartEnrollDemos.personResult.enrollAnother"))("primaryLabel", \u0275\u0275pipeBind1(27, 21, "smartEnrollDemos.personResult.backToDemos"))("primaryRouterLink", null);
  }
}
function CreatePersonResultComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 18)(2, "p", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "pre", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "smartEnrollDemos.personResult.noPersonObject"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, ctx_r1.result));
  }
}
var HANDLED = /* @__PURE__ */ new Set([
  "name",
  "thumbnails",
  "collections",
  "_id",
  "id",
  "gender",
  "date_of_birth",
  "nationality",
  "notes",
  "documentValidations",
  "emails",
  "phones",
  "isDemoPerson",
  "environment",
  "client",
  "createdAt",
  "updatedAt",
  "create_date",
  "modified_date",
  "__v"
]);
var CreatePersonResultComponent = class _CreatePersonResultComponent {
  constructor() {
    this.result = null;
    this.mode = "create";
    this.enrollAnother = new EventEmitter();
    this.backToDemos = new EventEmitter();
    this.formatDate = formatDate;
    this.formatDob = formatDob;
    this.redactThumbnailsForDebug = redactThumbnailsForDebug;
  }
  get parsed() {
    if (!this.result)
      return null;
    const data = isPlainObject(this.result["data"]) ? this.result["data"] : null;
    if (!data)
      return { data: null, extra: {} };
    const extra = {};
    for (const [k, v] of Object.entries(data)) {
      if (!HANDLED.has(k))
        extra[k] = v;
    }
    return {
      data,
      personId: typeof data["_id"] === "string" ? data["_id"] : typeof data["id"] === "string" ? data["id"] : "",
      name: typeof data["name"] === "string" ? data["name"] : "",
      gender: typeof data["gender"] === "string" ? data["gender"] : "",
      dateOfBirth: typeof data["date_of_birth"] === "string" ? data["date_of_birth"] : "",
      nationality: typeof data["nationality"] === "string" ? data["nationality"] : "",
      notes: data["notes"],
      collections: Array.isArray(data["collections"]) ? data["collections"].filter((c) => typeof c === "string") : [],
      thumbnails: parseThumbnails(Array.isArray(data["thumbnails"]) ? data["thumbnails"] : []),
      createdAt: typeof data["createdAt"] === "string" ? data["createdAt"] : "",
      updatedAt: typeof data["updatedAt"] === "string" ? data["updatedAt"] : "",
      extra
    };
  }
  get headerIcon() {
    if (this.mode === "delete")
      return "delete";
    if (this.mode === "update")
      return "edit";
    return "person_add";
  }
  formatGender(g) {
    if (g === "M")
      return "Male";
    if (g === "F")
      return "Female";
    return g;
  }
  static {
    this.\u0275fac = function CreatePersonResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreatePersonResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePersonResultComponent, selectors: [["app-create-person-result"]], inputs: { result: "result", mode: "mode" }, outputs: { enrollAnother: "enrollAnother", backToDemos: "backToDemos" }, decls: 2, vars: 1, consts: [[1, "space-y-5"], [1, "rounded-2xl", "bg-surface-container-low", "border", "border-primary/20", "p-6"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "material-symbols-outlined", "text-primary", "text-2xl"], [1, "font-bold", "text-on-surface", "text-lg"], [1, "text-sm", "text-on-surface-variant"], [1, "mb-6", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-high/40", "p-4"], [1, "block", 3, "result"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "px-4", "py-3", "group"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-on-surface-variant", "flex", "items-center", "justify-between", "gap-2"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform", "text-lg"], [1, "mt-3", "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"], ["secondaryIcon", "person_add", 3, "secondary", "primary", "secondaryLabel", "primaryLabel", "primaryRouterLink"], [1, "text-sm", "font-bold", "text-primary", "mb-2"], [1, "font-mono", "text-sm", "text-on-surface", "break-all"], [1, "text-sm", "font-bold", "text-primary", "mb-3"], [1, "flex", "flex-wrap", "gap-4"], ["className", "max-h-48 w-auto max-w-[200px] object-contain rounded-xl border border-outline-variant/20", 3, "src", "alt"], [1, "rounded-2xl", "border", "border-outline-variant/20", "bg-surface-container-low", "p-6"], [1, "text-on-surface-variant", "text-sm"], [1, "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto"]], template: function CreatePersonResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CreatePersonResultComponent_Conditional_0_Template, 28, 23, "div", 0)(1, CreatePersonResultComponent_Conditional_1_Template, 8, 6, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.parsed == null ? null : ctx.parsed.data) ? 0 : 1);
      }
    }, dependencies: [CommonModule, JsonPipe, TranslocoModule, TranslocoPipe, DemoRasterImageComponent, DemoResultActionsComponent, DemoCreditsUsageComponent], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreatePersonResultComponent, [{
    type: Component,
    args: [{ selector: "app-create-person-result", standalone: true, imports: [CommonModule, TranslocoModule, DemoRasterImageComponent, DemoResultActionsComponent, DemoCreditsUsageComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (parsed?.data) {\r
    <div class="space-y-5">\r
        <div class="rounded-2xl bg-surface-container-low border border-primary/20 p-6">\r
            <div class="flex items-center gap-3 mb-6">\r
                <span class="material-symbols-outlined text-primary text-2xl">{{ headerIcon }}</span>\r
                <div>\r
                    <p class="font-bold text-on-surface text-lg">\r
                        {{ parsed.name || ('smartEnrollDemos.personResult.personEnrolled' | transloco) }}\r
                    </p>\r
                    <p class="text-sm text-on-surface-variant">\r
                        {{ 'smartEnrollDemos.personResult.subtitleCreate' | transloco }}\r
                    </p>\r
                </div>\r
            </div>\r
\r
            @if (parsed.personId) {\r
                <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                    <h3 class="text-sm font-bold text-primary mb-2">{{ 'smartEnrollDemos.personResult.personId' | transloco }}</h3>\r
                    <p class="font-mono text-sm text-on-surface break-all">{{ parsed.personId }}</p>\r
                </section>\r
            }\r
\r
            @if (parsed.thumbnails.length) {\r
                <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                    <h3 class="text-sm font-bold text-primary mb-3">{{ 'smartEnrollDemos.personResult.thumbnails' | transloco }}</h3>\r
                    <div class="flex flex-wrap gap-4">\r
                        @for (thumb of parsed.thumbnails; track $index) {\r
                            <app-demo-raster-image\r
                                [src]="thumb.src"\r
                                [alt]="'smartEnrollDemos.personResult.thumbnailAlt' | transloco"\r
                                className="max-h-48 w-auto max-w-[200px] object-contain rounded-xl border border-outline-variant/20"\r
                            />\r
                        }\r
                    </div>\r
                </section>\r
            }\r
        </div>\r
\r
        <app-demo-credits-usage [result]="result" class="block" />\r
\r
        <details class="rounded-xl border border-outline-variant/20 bg-surface-container-low/50 px-4 py-3 group">\r
            <summary class="cursor-pointer list-none font-bold text-sm text-on-surface-variant flex items-center justify-between gap-2">\r
                <span>{{ 'smartEnrollDemos.personResult.rawDebug' | transloco }}</span>\r
                <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform text-lg">expand_more</span>\r
            </summary>\r
            <pre class="mt-3 text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{ result | json }}</pre>\r
        </details>\r
\r
        <app-demo-result-actions\r
            [secondaryLabel]="'smartEnrollDemos.personResult.enrollAnother' | transloco"\r
            secondaryIcon="person_add"\r
            [primaryLabel]="'smartEnrollDemos.personResult.backToDemos' | transloco"\r
            [primaryRouterLink]="null"\r
            (secondary)="enrollAnother.emit()"\r
            (primary)="backToDemos.emit()"\r
        />\r
    </div>\r
} @else {\r
    <div class="space-y-5">\r
        <div class="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-6">\r
            <p class="text-on-surface-variant text-sm">{{ 'smartEnrollDemos.personResult.noPersonObject' | transloco }}</p>\r
        </div>\r
        <pre class="text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto">{{ result | json }}</pre>\r
    </div>\r
}\r
` }]
  }], null, { result: [{
    type: Input
  }], mode: [{
    type: Input
  }], enrollAnother: [{
    type: Output
  }], backToDemos: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePersonResultComponent, { className: "CreatePersonResultComponent", filePath: "src/app/modules/smart-enroll/demos/shared/create-person-result.component.ts", lineNumber: 28 });
})();

export {
  CreatePersonResultComponent
};
//# sourceMappingURL=chunk-3JOQ4K22.js.map
