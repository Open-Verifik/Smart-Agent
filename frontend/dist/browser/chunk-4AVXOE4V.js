import {
  AccountEnvironmentService
} from "./chunk-SKDOP6B7.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-R5W3A6HI.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-enroll/demos/shared/demo-sandbox-result-banner.component.ts
function DemoSandboxResultBannerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 2);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 3);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "smartEnrollDemos.common.sandboxResultBadge"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "smartEnrollDemos.common.sandboxResultTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "smartEnrollDemos.common.sandboxResultBody"), " ");
  }
}
var DemoSandboxResultBannerComponent = class _DemoSandboxResultBannerComponent {
  constructor() {
    this.env = inject(AccountEnvironmentService);
  }
  static {
    this.\u0275fac = function DemoSandboxResultBannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoSandboxResultBannerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoSandboxResultBannerComponent, selectors: [["app-demo-sandbox-result-banner"]], decls: 1, vars: 1, consts: [["role", "status", 1, "mb-6", "rounded-xl", "border", "border-amber-300/70", "bg-amber-400/15", "px-4", "py-3", "text-left", "dark:border-amber-700/40", "dark:bg-amber-900/25"], [1, "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-amber-800", "dark:text-amber-200"], [1, "mt-1", "text-sm", "font-semibold", "text-amber-950", "dark:text-amber-100"], [1, "mt-1", "text-xs", "leading-5", "text-amber-900/80", "dark:text-amber-200/80"]], template: function DemoSandboxResultBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DemoSandboxResultBannerComponent_Conditional_0_Template, 10, 9, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.env.showSandboxStrip() ? 0 : -1);
      }
    }, dependencies: [TranslocoModule, TranslocoPipe], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoSandboxResultBannerComponent, [{
    type: Component,
    args: [{
      selector: "app-demo-sandbox-result-banner",
      standalone: true,
      imports: [TranslocoModule],
      template: `
        @if (env.showSandboxStrip()) {
            <div
                class="mb-6 rounded-xl border border-amber-300/70 bg-amber-400/15 px-4 py-3 text-left dark:border-amber-700/40 dark:bg-amber-900/25"
                role="status"
            >
                <p class="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-200">
                    {{ 'smartEnrollDemos.common.sandboxResultBadge' | transloco }}
                </p>
                <p class="mt-1 text-sm font-semibold text-amber-950 dark:text-amber-100">
                    {{ 'smartEnrollDemos.common.sandboxResultTitle' | transloco }}
                </p>
                <p class="mt-1 text-xs leading-5 text-amber-900/80 dark:text-amber-200/80">
                    {{ 'smartEnrollDemos.common.sandboxResultBody' | transloco }}
                </p>
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoSandboxResultBannerComponent, { className: "DemoSandboxResultBannerComponent", filePath: "src/app/modules/smart-enroll/demos/shared/demo-sandbox-result-banner.component.ts", lineNumber: 32 });
})();

export {
  DemoSandboxResultBannerComponent
};
//# sourceMappingURL=chunk-4AVXOE4V.js.map
