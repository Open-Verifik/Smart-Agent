import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-FWBWCXY5.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgIf,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-YWP2Y7QK.js";

// src/app/modules/subscription-plans/billing-required-dialog/billing-required-dialog.component.ts
function BillingRequiredDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "mat-icon");
    \u0275\u0275text(5, "credit_card");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 6);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 7);
    \u0275\u0275listener("click", function BillingRequiredDialogComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGoToBilling());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 3, "subscriptionPlans.billingRequired.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 5, "subscriptionPlans.billingRequired.message"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 7, "subscriptionPlans.billingRequired.cta"), " ");
  }
}
var BillingRequiredDialogComponent = class _BillingRequiredDialogComponent {
  constructor() {
    this.isOpen = false;
    this.goToBilling = new EventEmitter();
  }
  onGoToBilling() {
    this.goToBilling.emit();
  }
  static {
    this.\u0275fac = function BillingRequiredDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BillingRequiredDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingRequiredDialogComponent, selectors: [["billing-required-dialog"]], inputs: { isOpen: "isOpen" }, outputs: { goToBilling: "goToBilling" }, decls: 1, vars: 1, consts: [["class", "fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 p-4 backdrop-blur-sm", 4, "ngIf"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-stone-950/60", "p-4", "backdrop-blur-sm"], [1, "w-full", "max-w-md", "rounded-2xl", "border", "border-stone-200", "bg-white", "p-6", "shadow-xl", "dark:border-gray-800", "dark:bg-gray-900"], [1, "flex", "flex-col", "items-center", "text-center"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-2xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "mt-4", "text-lg", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "mt-6", "inline-flex", "min-h-11", "w-full", "items-center", "justify-center", "rounded-xl", "bg-stone-950", "px-4", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-stone-800", "dark:bg-white", "dark:text-gray-950", "dark:hover:bg-stone-200", 3, "click"]], template: function BillingRequiredDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BillingRequiredDialogComponent_div_0_Template, 15, 9, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isOpen);
      }
    }, dependencies: [CommonModule, NgIf, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n/*# sourceMappingURL=billing-required-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingRequiredDialogComponent, [{
    type: Component,
    args: [{ selector: "billing-required-dialog", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], template: `<div\r
    *ngIf="isOpen"\r
    class="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 p-4 backdrop-blur-sm"\r
>\r
    <div\r
        class="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900"\r
    >\r
        <div class="flex flex-col items-center text-center">\r
            <div\r
                class="flex h-12 w-12 items-center justify-center rounded-2xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200"\r
            >\r
                <mat-icon>credit_card</mat-icon>\r
            </div>\r
            <h2\r
                class="mt-4 text-lg font-semibold text-stone-950 dark:text-white"\r
            >\r
                {{ 'subscriptionPlans.billingRequired.title' | transloco }}\r
            </h2>\r
            <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">\r
                {{ 'subscriptionPlans.billingRequired.message' | transloco }}\r
            </p>\r
\r
            <button\r
                type="button"\r
                class="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-stone-950 px-4 text-sm font-semibold text-white transition hover:bg-stone-800 dark:bg-white dark:text-gray-950 dark:hover:bg-stone-200"\r
                (click)="onGoToBilling()"\r
            >\r
                {{ 'subscriptionPlans.billingRequired.cta' | transloco }}\r
            </button>\r
        </div>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/subscription-plans/billing-required-dialog/billing-required-dialog.component.scss */\n/*# sourceMappingURL=billing-required-dialog.component.css.map */\n"] }]
  }], null, { isOpen: [{
    type: Input
  }], goToBilling: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingRequiredDialogComponent, { className: "BillingRequiredDialogComponent", filePath: "src/app/modules/subscription-plans/billing-required-dialog/billing-required-dialog.component.ts", lineNumber: 13 });
})();

export {
  BillingRequiredDialogComponent
};
//# sourceMappingURL=chunk-HQZ4YACQ.js.map
