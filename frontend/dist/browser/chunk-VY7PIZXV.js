import {
  RouterLink
} from "./chunk-QL64NPDU.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YWP2Y7QK.js";

// src/app/modules/smart-enroll/demos/shared/demo-result-actions.component.ts
function DemoResultActionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function DemoResultActionsComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSecondaryClick());
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.secondaryIcon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.secondaryLabel);
  }
}
function DemoResultActionsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r1.primaryRouterLink);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.primaryLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.primaryIcon);
  }
}
function DemoResultActionsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function DemoResultActionsComponent_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPrimaryClick());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.primaryLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.primaryIcon);
  }
}
var DemoResultActionsComponent = class _DemoResultActionsComponent {
  constructor() {
    this.primaryLabel = "";
    this.primaryIcon = "arrow_forward";
    this.primaryRouterLink = "/smart-enroll/demos";
    this.secondaryLabel = "";
    this.secondaryIcon = "refresh";
    this.showSecondary = true;
    this.secondary = new EventEmitter();
    this.primary = new EventEmitter();
    this.tryAgain = new EventEmitter();
  }
  /** @deprecated Use `secondaryLabel` */
  set tryAgainLabel(value) {
    this.secondaryLabel = value;
  }
  /** @deprecated Use `primaryLabel` */
  set backToDemosLabel(value) {
    this.primaryLabel = value;
  }
  /** @deprecated Use `primaryRouterLink` */
  set backToDemosLink(value) {
    this.primaryRouterLink = value;
  }
  /** @deprecated Use `secondaryIcon` */
  set tryAgainIcon(value) {
    this.secondaryIcon = value;
  }
  /** @deprecated Use `showSecondary` */
  set showTryAgain(value) {
    this.showSecondary = value;
  }
  onSecondaryClick() {
    this.secondary.emit();
    this.tryAgain.emit();
  }
  onPrimaryClick() {
    this.primary.emit();
  }
  static {
    this.\u0275fac = function DemoResultActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoResultActionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoResultActionsComponent, selectors: [["app-demo-result-actions"]], inputs: { primaryLabel: "primaryLabel", primaryIcon: "primaryIcon", primaryRouterLink: "primaryRouterLink", secondaryLabel: "secondaryLabel", secondaryIcon: "secondaryIcon", showSecondary: "showSecondary", tryAgainLabel: "tryAgainLabel", backToDemosLabel: "backToDemosLabel", backToDemosLink: "backToDemosLink", tryAgainIcon: "tryAgainIcon", showTryAgain: "showTryAgain" }, outputs: { secondary: "secondary", primary: "primary", tryAgain: "tryAgain" }, decls: 4, vars: 2, consts: [[1, "flex", "flex-col", "gap-3", "sm:flex-row"], ["type", "button", 1, "demo-btn-secondary", "demo-btn-inline"], [1, "demo-btn-primary", "demo-btn-inline", 3, "routerLink"], ["type", "button", 1, "demo-btn-primary", "demo-btn-inline"], ["type", "button", 1, "demo-btn-secondary", "demo-btn-inline", 3, "click"], ["aria-hidden", "true", 1, "material-symbols-outlined", "text-lg"], [1, "whitespace-nowrap"], ["type", "button", 1, "demo-btn-primary", "demo-btn-inline", 3, "click"]], template: function DemoResultActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, DemoResultActionsComponent_Conditional_1_Template, 5, 2, "button", 1)(2, DemoResultActionsComponent_Conditional_2_Template, 5, 3, "a", 2)(3, DemoResultActionsComponent_Conditional_3_Template, 5, 2, "button", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showSecondary && ctx.secondaryLabel ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.primaryRouterLink ? 2 : 3);
      }
    }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoResultActionsComponent, [{
    type: Component,
    args: [{ selector: "app-demo-result-actions", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="flex flex-col gap-3 sm:flex-row">\r\n    @if (showSecondary && secondaryLabel) {\r\n        <button type="button" (click)="onSecondaryClick()" class="demo-btn-secondary demo-btn-inline">\r\n            <span class="material-symbols-outlined text-lg" aria-hidden="true">{{ secondaryIcon }}</span>\r\n            <span class="whitespace-nowrap">{{ secondaryLabel }}</span>\r\n        </button>\r\n    }\r\n    @if (primaryRouterLink) {\r\n        <a [routerLink]="primaryRouterLink" class="demo-btn-primary demo-btn-inline">\r\n            <span class="whitespace-nowrap">{{ primaryLabel }}</span>\r\n            <span class="material-symbols-outlined text-lg" aria-hidden="true">{{ primaryIcon }}</span>\r\n        </a>\r\n    } @else {\r\n        <button type="button" (click)="onPrimaryClick()" class="demo-btn-primary demo-btn-inline">\r\n            <span class="whitespace-nowrap">{{ primaryLabel }}</span>\r\n            <span class="material-symbols-outlined text-lg" aria-hidden="true">{{ primaryIcon }}</span>\r\n        </button>\r\n    }\r\n</div>\r\n' }]
  }], null, { primaryLabel: [{
    type: Input
  }], primaryIcon: [{
    type: Input
  }], primaryRouterLink: [{
    type: Input
  }], secondaryLabel: [{
    type: Input
  }], secondaryIcon: [{
    type: Input
  }], showSecondary: [{
    type: Input
  }], secondary: [{
    type: Output
  }], primary: [{
    type: Output
  }], tryAgain: [{
    type: Output
  }], tryAgainLabel: [{
    type: Input
  }], backToDemosLabel: [{
    type: Input
  }], backToDemosLink: [{
    type: Input
  }], tryAgainIcon: [{
    type: Input
  }], showTryAgain: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoResultActionsComponent, { className: "DemoResultActionsComponent", filePath: "src/app/modules/smart-enroll/demos/shared/demo-result-actions.component.ts", lineNumber: 11 });
})();

export {
  DemoResultActionsComponent
};
//# sourceMappingURL=chunk-VY7PIZXV.js.map
