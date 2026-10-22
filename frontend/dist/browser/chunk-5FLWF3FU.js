import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YWP2Y7QK.js";

// src/app/modules/smart-enroll/demos/shared/demo-upload-image-button.component.ts
function DemoUploadImageButtonComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.secondaryText);
  }
}
function DemoUploadImageButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "input", 2);
    \u0275\u0275listener("change", function DemoUploadImageButtonComponent_Conditional_1_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNativeFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 4)(5, "span", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DemoUploadImageButtonComponent_Conditional_1_Conditional_7_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const shellClass_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(shellClass_r3);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r1.id || null)("accept", ctx_r1.accept)("multiple", ctx_r1.multiple)("disabled", ctx_r1.disabled || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275classProp("animate-spin", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loading ? "progress_activity" : ctx_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.primaryText);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.secondaryText ? 7 : -1);
  }
}
function DemoUploadImageButtonComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.secondaryText);
  }
}
function DemoUploadImageButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function DemoUploadImageButtonComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clicked.emit());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 4)(4, "span", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DemoUploadImageButtonComponent_Conditional_2_Conditional_6_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const shellClass_r3 = \u0275\u0275readContextLet(0);
    \u0275\u0275classMap(shellClass_r3);
    \u0275\u0275property("id", ctx_r1.id || null)("disabled", ctx_r1.disabled || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275classProp("animate-spin", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loading ? "progress_activity" : ctx_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.primaryText);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.secondaryText ? 6 : -1);
  }
}
var DemoUploadImageButtonComponent = class _DemoUploadImageButtonComponent {
  constructor() {
    this.id = "";
    this.primaryText = "";
    this.secondaryText = "";
    this.icon = "upload_file";
    this.className = "";
    this.accept = "image/*";
    this.multiple = false;
    this.disabled = false;
    this.loading = false;
    this.useNativeInput = false;
    this.clicked = new EventEmitter();
    this.fileSelected = new EventEmitter();
  }
  onNativeFileChange(event) {
    this.fileSelected.emit(event);
  }
  static {
    this.\u0275fac = function DemoUploadImageButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoUploadImageButtonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoUploadImageButtonComponent, selectors: [["app-demo-upload-image-button"]], inputs: { id: "id", primaryText: "primaryText", secondaryText: "secondaryText", icon: "icon", className: "className", accept: "accept", multiple: "multiple", disabled: "disabled", loading: "loading", useNativeInput: "useNativeInput" }, outputs: { clicked: "clicked", fileSelected: "fileSelected" }, decls: 3, vars: 2, consts: [[3, "class"], ["type", "button", 3, "id", "disabled", "class"], ["type", "file", 1, "sr-only", 3, "change", "id", "accept", "multiple", "disabled"], ["aria-hidden", "true", 1, "material-symbols-outlined", "text-primary"], [1, "min-w-0", "text-left"], [1, "block", "truncate"], [1, "mt-0.5", "block", "truncate", "text-xs", "font-normal", "text-on-surface-variant"], ["type", "button", 3, "click", "id", "disabled"]], template: function DemoUploadImageButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275template(1, DemoUploadImageButtonComponent_Conditional_1_Template, 8, 11, "label", 0)(2, DemoUploadImageButtonComponent_Conditional_2_Template, 7, 9, "button", 1);
      }
      if (rf & 2) {
        \u0275\u0275storeLet("flex w-full items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-5 text-on-surface font-semibold shadow-sm transition-colors active:scale-[0.99] " + (ctx.loading ? "border-primary/50 bg-surface-bright cursor-wait" : ctx.disabled ? "cursor-not-allowed border-outline-variant/30 bg-surface-container/50 opacity-60" : "border-primary/35 bg-surface-container/80 hover:border-primary/55 hover:bg-surface-bright cursor-pointer") + " " + ctx.className);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.useNativeInput ? 1 : 2);
      }
    }, encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoUploadImageButtonComponent, [{
    type: Component,
    args: [{ selector: "app-demo-upload-image-button", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `@let shellClass =\r
    'flex w-full items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-5 text-on-surface font-semibold shadow-sm transition-colors active:scale-[0.99] ' +\r
    (loading\r
        ? 'border-primary/50 bg-surface-bright cursor-wait'\r
        : disabled\r
          ? 'cursor-not-allowed border-outline-variant/30 bg-surface-container/50 opacity-60'\r
          : 'border-primary/35 bg-surface-container/80 hover:border-primary/55 hover:bg-surface-bright cursor-pointer') +\r
    ' ' +\r
    className;\r
\r
@if (useNativeInput) {\r
    <label [class]="shellClass">\r
        <input\r
            type="file"\r
            [id]="id || null"\r
            [accept]="accept"\r
            [multiple]="multiple"\r
            [disabled]="disabled || loading"\r
            class="sr-only"\r
            (change)="onNativeFileChange($event)"\r
        />\r
        <span class="material-symbols-outlined text-primary" [class.animate-spin]="loading" aria-hidden="true">{{ loading ? 'progress_activity' : icon }}</span>\r
        <span class="min-w-0 text-left">\r
            <span class="block truncate">{{ primaryText }}</span>\r
            @if (secondaryText) {\r
                <span class="mt-0.5 block truncate text-xs font-normal text-on-surface-variant">{{ secondaryText }}</span>\r
            }\r
        </span>\r
    </label>\r
} @else {\r
    <button type="button" [id]="id || null" [disabled]="disabled || loading" (click)="clicked.emit()" [class]="shellClass">\r
        <span class="material-symbols-outlined text-primary" [class.animate-spin]="loading" aria-hidden="true">{{ loading ? 'progress_activity' : icon }}</span>\r
        <span class="min-w-0 text-left">\r
            <span class="block truncate">{{ primaryText }}</span>\r
            @if (secondaryText) {\r
                <span class="mt-0.5 block truncate text-xs font-normal text-on-surface-variant">{{ secondaryText }}</span>\r
            }\r
        </span>\r
    </button>\r
}\r
` }]
  }], null, { id: [{
    type: Input
  }], primaryText: [{
    type: Input
  }], secondaryText: [{
    type: Input
  }], icon: [{
    type: Input
  }], className: [{
    type: Input
  }], accept: [{
    type: Input
  }], multiple: [{
    type: Input
  }], disabled: [{
    type: Input
  }], loading: [{
    type: Input
  }], useNativeInput: [{
    type: Input
  }], clicked: [{
    type: Output
  }], fileSelected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoUploadImageButtonComponent, { className: "DemoUploadImageButtonComponent", filePath: "src/app/modules/smart-enroll/demos/shared/demo-upload-image-button.component.ts", lineNumber: 9 });
})();

export {
  DemoUploadImageButtonComponent
};
//# sourceMappingURL=chunk-5FLWF3FU.js.map
