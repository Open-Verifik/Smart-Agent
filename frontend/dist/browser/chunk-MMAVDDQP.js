import {
  DemoRasterImageComponent
} from "./chunk-T2IPWVBN.js";
import {
  DemoResultActionsComponent
} from "./chunk-ZD622R6J.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-R5W3A6HI.js";
import {
  RouterLink
} from "./chunk-HYFP557I.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-enroll/demos/shared/create-person-already-exists-result.component.ts
function CreatePersonAlreadyExistsResultComponent_Conditional_12_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-demo-raster-image", 15);
  }
  if (rf & 2) {
    const src_r1 = ctx.$implicit;
    \u0275\u0275property("src", src_r1);
  }
}
function CreatePersonAlreadyExistsResultComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275repeaterCreate(5, CreatePersonAlreadyExistsResultComponent_Conditional_12_For_6_Template, 1, 1, "app-demo-raster-image", 15, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "smartEnrollDemos.alreadyEnrolled.imagesHeading"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.previews);
  }
}
var CreatePersonAlreadyExistsResultComponent = class _CreatePersonAlreadyExistsResultComponent {
  constructor() {
    this.previews = [];
    this.editForm = new EventEmitter();
    this.backToDemos = new EventEmitter();
  }
  static {
    this.\u0275fac = function CreatePersonAlreadyExistsResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreatePersonAlreadyExistsResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreatePersonAlreadyExistsResultComponent, selectors: [["app-create-person-already-exists-result"]], inputs: { previews: "previews" }, outputs: { editForm: "editForm", backToDemos: "backToDemos" }, decls: 29, vars: 23, consts: [[1, "space-y-5"], [1, "rounded-2xl", "bg-surface-container-low", "border", "border-error/25", "p-6"], [1, "flex", "items-start", "gap-3", "mb-6"], [1, "material-symbols-outlined", "text-error", "text-2xl", "shrink-0"], [1, "font-bold", "text-on-surface", "text-lg"], [1, "text-sm", "text-on-surface-variant", "mt-1"], [1, "mb-6", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-high/40", "p-4"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-high/40", "p-4"], [1, "text-sm", "font-bold", "text-primary", "mb-3"], [1, "space-y-3", "text-sm", "text-on-surface-variant"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["routerLink", "/smart-enroll/demos/update-person", 1, "text-primary", "font-semibold", "underline", "underline-offset-2"], ["routerLink", "/smart-enroll/demos/delete-person", 1, "text-primary", "font-semibold", "underline", "underline-offset-2"], ["secondaryIcon", "edit", 3, "secondary", "primary", "secondaryLabel", "primaryLabel", "primaryRouterLink"], [1, "flex", "flex-wrap", "gap-4"], ["alt", "", "className", "max-h-56 w-auto max-w-[220px] object-contain rounded-xl border border-outline-variant/20", 3, "src"]], template: function CreatePersonAlreadyExistsResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "person_off");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 5);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, CreatePersonAlreadyExistsResultComponent_Conditional_12_Template, 7, 3, "section", 6);
        \u0275\u0275elementStart(13, "section", 7)(14, "h3", 8);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "ul", 9)(18, "li", 10)(19, "a", 11);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "li", 10)(23, "a", 12);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "transloco");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(26, "app-demo-result-actions", 13);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275pipe(28, "transloco");
        \u0275\u0275listener("secondary", function CreatePersonAlreadyExistsResultComponent_Template_app_demo_result_actions_secondary_26_listener() {
          return ctx.editForm.emit();
        })("primary", function CreatePersonAlreadyExistsResultComponent_Template_app_demo_result_actions_primary_26_listener() {
          return ctx.backToDemos.emit();
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, "smartEnrollDemos.alreadyEnrolled.title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, "smartEnrollDemos.alreadyEnrolled.body"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.previews.length ? 12 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 13, "smartEnrollDemos.alreadyEnrolled.nextSteps"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 15, "smartEnrollDemos.alreadyEnrolled.updateDemo"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 17, "smartEnrollDemos.alreadyEnrolled.deleteDemo"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("secondaryLabel", \u0275\u0275pipeBind1(27, 19, "smartEnrollDemos.alreadyEnrolled.editFormAgain"))("primaryLabel", \u0275\u0275pipeBind1(28, 21, "smartEnrollDemos.alreadyEnrolled.backToDemos"))("primaryRouterLink", null);
      }
    }, dependencies: [RouterLink, TranslocoModule, TranslocoPipe, DemoRasterImageComponent, DemoResultActionsComponent], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreatePersonAlreadyExistsResultComponent, [{
    type: Component,
    args: [{ selector: "app-create-person-already-exists-result", standalone: true, imports: [RouterLink, TranslocoModule, DemoRasterImageComponent, DemoResultActionsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-5">\r
    <div class="rounded-2xl bg-surface-container-low border border-error/25 p-6">\r
        <div class="flex items-start gap-3 mb-6">\r
            <span class="material-symbols-outlined text-error text-2xl shrink-0">person_off</span>\r
            <div>\r
                <p class="font-bold text-on-surface text-lg">{{ 'smartEnrollDemos.alreadyEnrolled.title' | transloco }}</p>\r
                <p class="text-sm text-on-surface-variant mt-1">{{ 'smartEnrollDemos.alreadyEnrolled.body' | transloco }}</p>\r
            </div>\r
        </div>\r
\r
        @if (previews.length) {\r
            <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                <h3 class="text-sm font-bold text-primary mb-3">{{ 'smartEnrollDemos.alreadyEnrolled.imagesHeading' | transloco }}</h3>\r
                <div class="flex flex-wrap gap-4">\r
                    @for (src of previews; track $index) {\r
                        <app-demo-raster-image [src]="src" alt="" className="max-h-56 w-auto max-w-[220px] object-contain rounded-xl border border-outline-variant/20" />\r
                    }\r
                </div>\r
            </section>\r
        }\r
\r
        <section class="rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
            <h3 class="text-sm font-bold text-primary mb-3">{{ 'smartEnrollDemos.alreadyEnrolled.nextSteps' | transloco }}</h3>\r
            <ul class="space-y-3 text-sm text-on-surface-variant">\r
                <li class="flex flex-wrap items-center gap-2">\r
                    <a routerLink="/smart-enroll/demos/update-person" class="text-primary font-semibold underline underline-offset-2">\r
                        {{ 'smartEnrollDemos.alreadyEnrolled.updateDemo' | transloco }}\r
                    </a>\r
                </li>\r
                <li class="flex flex-wrap items-center gap-2">\r
                    <a routerLink="/smart-enroll/demos/delete-person" class="text-primary font-semibold underline underline-offset-2">\r
                        {{ 'smartEnrollDemos.alreadyEnrolled.deleteDemo' | transloco }}\r
                    </a>\r
                </li>\r
            </ul>\r
        </section>\r
    </div>\r
\r
    <app-demo-result-actions\r
        [secondaryLabel]="'smartEnrollDemos.alreadyEnrolled.editFormAgain' | transloco"\r
        secondaryIcon="edit"\r
        [primaryLabel]="'smartEnrollDemos.alreadyEnrolled.backToDemos' | transloco"\r
        [primaryRouterLink]="null"\r
        (secondary)="editForm.emit()"\r
        (primary)="backToDemos.emit()"\r
    />\r
</div>\r
` }]
  }], null, { previews: [{
    type: Input,
    args: [{ required: true }]
  }], editForm: [{
    type: Output
  }], backToDemos: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreatePersonAlreadyExistsResultComponent, { className: "CreatePersonAlreadyExistsResultComponent", filePath: "src/app/modules/smart-enroll/demos/shared/create-person-already-exists-result.component.ts", lineNumber: 14 });
})();

export {
  CreatePersonAlreadyExistsResultComponent
};
//# sourceMappingURL=chunk-MMAVDDQP.js.map
