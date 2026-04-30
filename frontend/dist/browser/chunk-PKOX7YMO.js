import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-KU43NSH4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-HZQU4G6R.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LLRZIRCV.js";

// src/app/modules/subscription-plans/billing-required-dialog/billing-required-dialog.component.ts
function BillingRequiredDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "mat-icon");
    \u0275\u0275text(6, "credit_card");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h2", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 7);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
    \u0275\u0275listener("click", function BillingRequiredDialogComponent_div_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGoToBilling());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 3, "subscriptionPlans.billingRequired.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, "subscriptionPlans.billingRequired.message"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 7, "subscriptionPlans.billingRequired.cta"), " ");
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingRequiredDialogComponent, selectors: [["billing-required-dialog"]], inputs: { isOpen: "isOpen" }, outputs: { goToBilling: "goToBilling" }, decls: 1, vars: 1, consts: [["class", "dialog-backdrop", 4, "ngIf"], [1, "dialog-backdrop"], [1, "dialog-container"], [1, "dialog-content"], [1, "content-section"], [1, "icon-wrapper"], [1, "title"], [1, "message"], [1, "actions"], [1, "btn", "btn-confirm", 3, "click"]], template: function BillingRequiredDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BillingRequiredDialogComponent_div_0_Template, 17, 9, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isOpen);
      }
    }, dependencies: [CommonModule, NgIf, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ['\n\n.dialog-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 24px;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.dialog-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 24px;\n  max-width: 480px;\n  width: 100%;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n.dark[_nghost-%COMP%]   .dialog-container[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .dialog-container[_ngcontent-%COMP%] {\n  background: rgba(30, 41, 59, 0.95);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.dialog-content[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.content-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.icon-wrapper[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15),\n      rgba(139, 92, 246, 0.15));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  color: #8b5cf6;\n}\n.icon-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 12px;\n  letter-spacing: -0.02em;\n}\n.dark[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.message[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0 0 28px;\n}\n.dark[_nghost-%COMP%]   .message[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .message[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 16px 32px;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  position: relative;\n  overflow: hidden;\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-confirm[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  color: white;\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-confirm[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 50%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-confirm[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.4);\n}\n.actions[_ngcontent-%COMP%]   .btn.btn-confirm[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n/*# sourceMappingURL=billing-required-dialog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingRequiredDialogComponent, [{
    type: Component,
    args: [{ selector: "billing-required-dialog", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], template: `<!-- Dialog Backdrop -->
<div class="dialog-backdrop" *ngIf="isOpen">
  <div class="dialog-container">
    <div class="dialog-content">
      <div class="content-section">
        <div class="icon-wrapper">
          <mat-icon>credit_card</mat-icon>
        </div>
        <h2 class="title">{{ 'subscriptionPlans.billingRequired.title' | transloco }}</h2>
        <p class="message">{{ 'subscriptionPlans.billingRequired.message' | transloco }}</p>
        <div class="actions">
          <button class="btn btn-confirm" (click)="onGoToBilling()">
            {{ 'subscriptionPlans.billingRequired.cta' | transloco }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/modules/subscription-plans/billing-required-dialog/billing-required-dialog.component.scss */\n.dialog-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 24px;\n  animation: fadeIn 0.2s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.dialog-container {\n  position: relative;\n  background: #ffffff;\n  border-radius: 24px;\n  max-width: 480px;\n  width: 100%;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);\n  animation: slideUp 0.3s ease-out;\n}\n:host-context(.dark) .dialog-container {\n  background: rgba(30, 41, 59, 0.95);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.dialog-content {\n  padding: 40px;\n}\n.content-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.icon-wrapper {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.15),\n      rgba(139, 92, 246, 0.15));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  color: #8b5cf6;\n}\n.icon-wrapper mat-icon {\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n}\n.title {\n  font-size: 24px;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0 0 12px;\n  letter-spacing: -0.02em;\n}\n:host-context(.dark) .title {\n  color: #ffffff;\n}\n.message {\n  font-size: 15px;\n  color: #475569;\n  line-height: 1.6;\n  margin: 0 0 28px;\n}\n:host-context(.dark) .message {\n  color: rgba(255, 255, 255, 0.7);\n}\n.actions {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.actions .btn {\n  padding: 16px 32px;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  position: relative;\n  overflow: hidden;\n}\n.actions .btn.btn-confirm {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #a855f7 100%);\n  color: white;\n}\n.actions .btn.btn-confirm::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 50%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.actions .btn.btn-confirm:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.4);\n}\n.actions .btn.btn-confirm:hover::before {\n  opacity: 1;\n}\n/*# sourceMappingURL=billing-required-dialog.component.css.map */\n'] }]
  }], null, { isOpen: [{
    type: Input
  }], goToBilling: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingRequiredDialogComponent, { className: "BillingRequiredDialogComponent", filePath: "src/app/modules/subscription-plans/billing-required-dialog/billing-required-dialog.component.ts", lineNumber: 13 });
})();

// src/app/modules/settings/utils/invoice-billing-complete.ts
var extractClientSettingsPayload = (response) => {
  const raw = response?.data;
  if (raw == null)
    return null;
  if (Array.isArray(raw))
    return raw[0] ?? null;
  if (typeof raw === "object" && raw !== null && "docs" in raw) {
    const docs = raw.docs;
    if (Array.isArray(docs))
      return docs[0] ?? null;
  }
  return raw;
};
var invoiceBillingDetailsComplete = (invoiceSettings) => {
  const inv = invoiceSettings;
  return !!(inv?.type && (inv.person || inv.business) && inv.address);
};

export {
  BillingRequiredDialogComponent,
  extractClientSettingsPayload,
  invoiceBillingDetailsComplete
};
//# sourceMappingURL=chunk-PKOX7YMO.js.map
