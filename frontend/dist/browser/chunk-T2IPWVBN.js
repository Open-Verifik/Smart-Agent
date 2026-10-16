import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgClass,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-enroll/demos/shared/demo-raster-image.component.ts
function DemoRasterImageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 2);
    \u0275\u0275listener("error", function DemoRasterImageComponent_Conditional_0_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.src, \u0275\u0275sanitizeUrl)("alt", ctx_r1.alt)("ngClass", ctx_r1.className);
    \u0275\u0275attribute("sizes", ctx_r1.sizes);
  }
}
function DemoRasterImageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 3);
    \u0275\u0275listener("error", function DemoRasterImageComponent_Conditional_1_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.src, \u0275\u0275sanitizeUrl)("alt", ctx_r1.alt)("ngClass", ctx_r1.className);
    \u0275\u0275attribute("width", ctx_r1.width)("height", ctx_r1.height);
  }
}
var DemoRasterImageComponent = class _DemoRasterImageComponent {
  constructor() {
    this.src = "";
    this.alt = "";
    this.className = "";
    this.fill = false;
    this.sizes = "100vw";
    this.width = 800;
    this.height = 800;
  }
  onError(event) {
    const img = event.target;
    img.style.display = "none";
  }
  static {
    this.\u0275fac = function DemoRasterImageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoRasterImageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoRasterImageComponent, selectors: [["app-demo-raster-image"]], inputs: { src: "src", alt: "alt", className: "className", fill: "fill", sizes: "sizes", width: "width", height: "height" }, decls: 2, vars: 1, consts: [[1, "absolute", "inset-0", "h-full", "w-full", "object-cover", 3, "src", "alt", "ngClass"], [3, "src", "alt", "ngClass"], [1, "absolute", "inset-0", "h-full", "w-full", "object-cover", 3, "error", "src", "alt", "ngClass"], [3, "error", "src", "alt", "ngClass"]], template: function DemoRasterImageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DemoRasterImageComponent_Conditional_0_Template, 1, 4, "img", 0)(1, DemoRasterImageComponent_Conditional_1_Template, 1, 5, "img", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.fill ? 0 : 1);
      }
    }, dependencies: [NgClass], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoRasterImageComponent, [{
    type: Component,
    args: [{ selector: "app-demo-raster-image", standalone: true, imports: [NgClass], changeDetection: ChangeDetectionStrategy.OnPush, template: '@if (fill) {\r\n    <img\r\n        [src]="src"\r\n        [alt]="alt"\r\n        [attr.sizes]="sizes"\r\n        (error)="onError($event)"\r\n        class="absolute inset-0 h-full w-full object-cover"\r\n        [ngClass]="className"\r\n    />\r\n} @else {\r\n    <img\r\n        [src]="src"\r\n        [alt]="alt"\r\n        [attr.width]="width"\r\n        [attr.height]="height"\r\n        (error)="onError($event)"\r\n        [ngClass]="className"\r\n    />\r\n}\r\n' }]
  }], null, { src: [{
    type: Input,
    args: [{ required: true }]
  }], alt: [{
    type: Input,
    args: [{ required: true }]
  }], className: [{
    type: Input
  }], fill: [{
    type: Input
  }], sizes: [{
    type: Input
  }], width: [{
    type: Input
  }], height: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoRasterImageComponent, { className: "DemoRasterImageComponent", filePath: "src/app/modules/smart-enroll/demos/shared/demo-raster-image.component.ts", lineNumber: 11 });
})();

export {
  DemoRasterImageComponent
};
//# sourceMappingURL=chunk-T2IPWVBN.js.map
