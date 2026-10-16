import {
  ChangeDetectionStrategy,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-enroll/demos/shared/demo-scanner-shell.component.ts
var _c0 = ["*"];
var DemoScannerShellComponent = class _DemoScannerShellComponent {
  constructor() {
    this.shellClass = "";
    this.innerClass = "";
  }
  static {
    this.\u0275fac = function DemoScannerShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoScannerShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoScannerShellComponent, selectors: [["app-demo-scanner-shell"]], inputs: { shellClass: "shellClass", innerClass: "innerClass" }, ngContentSelectors: _c0, decls: 9, vars: 4, consts: [["aria-hidden", "true", 1, "pointer-events-none", "absolute", "inset-0", "opacity-[0.025]", "blueprint-grid"], [1, "scanner-corner-tl"], [1, "scanner-corner-tr"], [1, "scanner-corner-bl"], [1, "scanner-corner-br"], [1, "scan-line"]], template: function DemoScannerShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275element(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        \u0275\u0275elementStart(7, "div");
        \u0275\u0275projection(8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap("group relative mx-auto w-full min-h-[360px] h-[min(70vh,620px)] overflow-hidden rounded-xl border border-outline-variant/25 bg-surface-container-low shadow-ambient " + ctx.shellClass);
        \u0275\u0275advance(7);
        \u0275\u0275classMap("relative z-20 flex h-full w-full min-h-0 flex-col p-2 sm:p-3 " + ctx.innerClass);
      }
    }, encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoScannerShellComponent, [{
    type: Component,
    args: [{ selector: "app-demo-scanner-shell", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div\r
    [class]="\r
        'group relative mx-auto w-full min-h-[360px] h-[min(70vh,620px)] overflow-hidden rounded-xl border border-outline-variant/25 bg-surface-container-low shadow-ambient ' +\r
        shellClass\r
    "\r
>\r
    <div class="pointer-events-none absolute inset-0 opacity-[0.025] blueprint-grid" aria-hidden="true"></div>\r
    <div class="scanner-corner-tl"></div>\r
    <div class="scanner-corner-tr"></div>\r
    <div class="scanner-corner-bl"></div>\r
    <div class="scanner-corner-br"></div>\r
    <div class="scan-line"></div>\r
    <div [class]="'relative z-20 flex h-full w-full min-h-0 flex-col p-2 sm:p-3 ' + innerClass">\r
        <ng-content />\r
    </div>\r
</div>\r
` }]
  }], null, { shellClass: [{
    type: Input
  }], innerClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoScannerShellComponent, { className: "DemoScannerShellComponent", filePath: "src/app/modules/smart-enroll/demos/shared/demo-scanner-shell.component.ts", lineNumber: 9 });
})();

export {
  DemoScannerShellComponent
};
//# sourceMappingURL=chunk-MOO2AP2F.js.map
