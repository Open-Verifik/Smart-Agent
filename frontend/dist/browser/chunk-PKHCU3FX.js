import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NRO2XGZE.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VENEX45A.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-I5BUD46C.js";

// src/app/modules/smart-batch/batch-executor-control.component.ts
function BatchExecutorControlComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.badgeClasses);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.badgeLabelKey), " ");
  }
}
var BatchExecutorControlComponent = class _BatchExecutorControlComponent {
  constructor() {
    this.executor = "browser";
    this.saving = false;
    this.showBadge = true;
    this.compact = false;
    this.hintKey = "createBatchConfig.runModeAsyncHint";
    this.executorChange = new EventEmitter();
  }
  get resolvedExecutor() {
    return this.executor === "queue" ? "queue" : "browser";
  }
  get badgeLabelKey() {
    if (this.executor === "queue")
      return "createBatchConfig.runModeAsync";
    return "createBatchConfig.runModeSync";
  }
  get badgeClasses() {
    if (this.executor === "queue") {
      return "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-blue-300";
    }
    if (this.executor === "browser") {
      return "border-stone-200 bg-stone-50 text-stone-600 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300";
    }
    return "border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/30 dark:text-indigo-300";
  }
  optionClass(value) {
    const compact = this.compact ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm";
    const base = `${compact} rounded-full font-semibold transition disabled:opacity-50`;
    if (this.resolvedExecutor === value) {
      return `${base} bg-white text-blue-700 shadow-sm ring-1 ring-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:ring-blue-800`;
    }
    return `${base} text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white`;
  }
  select(value) {
    if (this.saving)
      return;
    if (value === "queue" && this.executor === "queue")
      return;
    if (value === "browser" && this.executor === "browser")
      return;
    this.executorChange.emit(value);
  }
  static {
    this.\u0275fac = function BatchExecutorControlComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BatchExecutorControlComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BatchExecutorControlComponent, selectors: [["batch-executor-control"]], inputs: { executor: "executor", saving: "saving", showBadge: "showBadge", compact: "compact", hintKey: "hintKey" }, outputs: { executorChange: "executorChange" }, decls: 10, vars: 16, consts: [[1, "flex", "flex-wrap", "items-center", "gap-2", 3, "click", "pointerdown"], [1, "inline-flex", "rounded-full", "border", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "uppercase", "tracking-wide", 3, "class"], [1, "inline-flex", "rounded-full", "bg-stone-100", "p-0.5", "dark:bg-gray-800", 3, "matTooltip"], ["type", "button", 3, "click", "disabled"], [1, "inline-flex", "rounded-full", "border", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "uppercase", "tracking-wide"]], template: function BatchExecutorControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function BatchExecutorControlComponent_Template_div_click_0_listener($event) {
          return $event.stopPropagation();
        })("pointerdown", function BatchExecutorControlComponent_Template_div_pointerdown_0_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275template(1, BatchExecutorControlComponent_Conditional_1_Template, 3, 5, "span", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275pipe(3, "transloco");
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function BatchExecutorControlComponent_Template_button_click_4_listener() {
          return ctx.select("queue");
        });
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function BatchExecutorControlComponent_Template_button_click_7_listener() {
          return ctx.select("browser");
        });
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showBadge ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 10, ctx.hintKey));
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.optionClass("queue"));
        \u0275\u0275property("disabled", ctx.saving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 12, "createBatchConfig.runModeAsync"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.optionClass("browser"));
        \u0275\u0275property("disabled", ctx.saving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 14, "createBatchConfig.runModeSync"), " ");
      }
    }, dependencies: [MatTooltipModule, MatTooltip, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BatchExecutorControlComponent, [{
    type: Component,
    args: [{
      selector: "batch-executor-control",
      standalone: true,
      imports: [MatTooltipModule, TranslocoModule],
      template: `
        <div
            class="flex flex-wrap items-center gap-2"
            (click)="$event.stopPropagation()"
            (pointerdown)="$event.stopPropagation()"
        >
            @if (showBadge) {
                <span
                    class="inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide"
                    [class]="badgeClasses"
                >
                    {{ badgeLabelKey | transloco }}
                </span>
            }
            <div
                class="inline-flex rounded-full bg-stone-100 p-0.5 dark:bg-gray-800"
                [matTooltip]="hintKey | transloco"
            >
                <button
                    type="button"
                    [disabled]="saving"
                    [class]="optionClass('queue')"
                    (click)="select('queue')"
                >
                    {{ 'createBatchConfig.runModeAsync' | transloco }}
                </button>
                <button
                    type="button"
                    [disabled]="saving"
                    [class]="optionClass('browser')"
                    (click)="select('browser')"
                >
                    {{ 'createBatchConfig.runModeSync' | transloco }}
                </button>
            </div>
        </div>
    `
    }]
  }], null, { executor: [{
    type: Input
  }], saving: [{
    type: Input
  }], showBadge: [{
    type: Input
  }], compact: [{
    type: Input
  }], hintKey: [{
    type: Input
  }], executorChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BatchExecutorControlComponent, { className: "BatchExecutorControlComponent", filePath: "src/app/modules/smart-batch/batch-executor-control.component.ts", lineNumber: 48 });
})();

export {
  BatchExecutorControlComponent
};
//# sourceMappingURL=chunk-PKHCU3FX.js.map
