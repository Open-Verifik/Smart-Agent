import {
  formatCreditsAmount,
  parseCreditUsage
} from "./chunk-Q7ZENBRV.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-R5W3A6HI.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-enroll/demos/shared/demo-credits-usage.component.ts
function DemoCreditsUsageComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 7)(5, "div", 8)(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 11);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatAmount(ctx_r0.usage.creditsCharged), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 3, "smartEnrollDemos.common.creditsUnit"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 5, "smartEnrollDemos.common.creditsChargedLabel"), " ");
  }
}
function DemoCreditsUsageComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 12);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, ctx_r0.notChargedKey), " ");
  }
}
function DemoCreditsUsageComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mt-3", ctx_r0.usage.creditsCharged != null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.usage.featureCode, " ");
  }
}
function DemoCreditsUsageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275template(1, DemoCreditsUsageComponent_Conditional_0_Conditional_1_Template, 14, 7, "div", 2)(2, DemoCreditsUsageComponent_Conditional_0_Conditional_2_Template, 6, 3, "div", 3)(3, DemoCreditsUsageComponent_Conditional_0_Conditional_3_Template, 2, 3, "p", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.usage.charged && ctx_r0.usage.creditsCharged != null ? "border-stone-200/90 bg-gradient-to-br from-stone-50 to-white dark:border-gray-800 dark:from-gray-900/80 dark:to-gray-900/40" : "border-outline-variant/20 bg-surface-container-high/40");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.usage.creditsCharged != null && ctx_r0.usage.charged ? 1 : ctx_r0.usage.creditsCharged != null ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.usage.featureCode ? 3 : -1);
  }
}
var DemoCreditsUsageComponent = class _DemoCreditsUsageComponent {
  constructor() {
    this.result = null;
    this.notChargedKey = "smartEnrollDemos.common.creditsNotCharged";
  }
  get usage() {
    return parseCreditUsage(this.result);
  }
  formatAmount(amount) {
    return formatCreditsAmount(amount);
  }
  static {
    this.\u0275fac = function DemoCreditsUsageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoCreditsUsageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoCreditsUsageComponent, selectors: [["app-demo-credits-usage"]], inputs: { result: "result", notChargedKey: "notChargedKey" }, decls: 1, vars: 1, consts: [[1, "rounded-xl", "border", "p-4", "sm:p-5", 3, "class"], [1, "rounded-xl", "border", "p-4", "sm:p-5"], [1, "flex", "items-start", "gap-4"], [1, "flex", "items-start", "gap-3"], [1, "inline-flex", "max-w-full", "items-center", "rounded-lg", "border", "border-stone-200/80", "bg-white/80", "px-2.5", "py-1", "text-[11px]", "font-mono", "text-stone-600", "dark:border-gray-700", "dark:bg-gray-900/60", "dark:text-stone-400", 3, "mt-3"], ["aria-hidden", "true", 1, "flex", "h-12", "w-12", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-white", "shadow-sm", "dark:border-gray-700", "dark:bg-gray-900"], [1, "material-symbols-outlined", "text-2xl", "text-stone-800", "dark:text-stone-100"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-baseline", "gap-x-2", "gap-y-0.5"], [1, "text-3xl", "font-semibold", "tracking-tight", "tabular-nums", "text-stone-950", "dark:text-white"], [1, "text-sm", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-400", "dark:text-stone-500"], ["aria-hidden", "true", 1, "material-symbols-outlined", "text-xl", "text-stone-400", "dark:text-stone-500", "shrink-0"], [1, "text-sm", "leading-relaxed", "text-on-surface-variant"], [1, "inline-flex", "max-w-full", "items-center", "rounded-lg", "border", "border-stone-200/80", "bg-white/80", "px-2.5", "py-1", "text-[11px]", "font-mono", "text-stone-600", "dark:border-gray-700", "dark:bg-gray-900/60", "dark:text-stone-400"]], template: function DemoCreditsUsageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DemoCreditsUsageComponent_Conditional_0_Template, 4, 4, "section", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.usage ? 0 : -1);
      }
    }, dependencies: [TranslocoModule, TranslocoPipe], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoCreditsUsageComponent, [{
    type: Component,
    args: [{ selector: "app-demo-credits-usage", standalone: true, imports: [TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (usage) {\r
    <section\r
        class="rounded-xl border p-4 sm:p-5"\r
        [class]="\r
            usage.charged && usage.creditsCharged != null\r
                ? 'border-stone-200/90 bg-gradient-to-br from-stone-50 to-white dark:border-gray-800 dark:from-gray-900/80 dark:to-gray-900/40'\r
                : 'border-outline-variant/20 bg-surface-container-high/40'\r
        "\r
    >\r
        @if (usage.creditsCharged != null && usage.charged) {\r
            <div class="flex items-start gap-4">\r
                <div\r
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900"\r
                    aria-hidden="true"\r
                >\r
                    <span class="material-symbols-outlined text-2xl text-stone-800 dark:text-stone-100">payments</span>\r
                </div>\r
                <div class="min-w-0 flex-1">\r
                    <div class="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">\r
                        <span class="text-3xl font-semibold tracking-tight tabular-nums text-stone-950 dark:text-white">\r
                            {{ formatAmount(usage.creditsCharged!) }}\r
                        </span>\r
                        <span class="text-sm font-medium text-stone-500 dark:text-stone-400">\r
                            {{ 'smartEnrollDemos.common.creditsUnit' | transloco }}\r
                        </span>\r
                    </div>\r
                    <p class="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">\r
                        {{ 'smartEnrollDemos.common.creditsChargedLabel' | transloco }}\r
                    </p>\r
                </div>\r
            </div>\r
        } @else if (usage.creditsCharged != null) {\r
            <div class="flex items-start gap-3">\r
                <span class="material-symbols-outlined text-xl text-stone-400 dark:text-stone-500 shrink-0" aria-hidden="true">info</span>\r
                <p class="text-sm leading-relaxed text-on-surface-variant">\r
                    {{ notChargedKey | transloco }}\r
                </p>\r
            </div>\r
        }\r
\r
        @if (usage.featureCode) {\r
            <p\r
                class="inline-flex max-w-full items-center rounded-lg border border-stone-200/80 bg-white/80 px-2.5 py-1 text-[11px] font-mono text-stone-600 dark:border-gray-700 dark:bg-gray-900/60 dark:text-stone-400"\r
                [class.mt-3]="usage.creditsCharged != null"\r
            >\r
                {{ usage.featureCode }}\r
            </p>\r
        }\r
    </section>\r
}\r
` }]
  }], null, { result: [{
    type: Input,
    args: [{ required: true }]
  }], notChargedKey: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoCreditsUsageComponent, { className: "DemoCreditsUsageComponent", filePath: "src/app/modules/smart-enroll/demos/shared/demo-credits-usage.component.ts", lineNumber: 12 });
})();

export {
  DemoCreditsUsageComponent
};
//# sourceMappingURL=chunk-SH7ZW32X.js.map
