import {
  HttpWrapperService
} from "./chunk-BCBZJBUY.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-R5W3A6HI.js";
import {
  environment
} from "./chunk-PMCYMBOC.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  Injectable,
  Input,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-enroll/plans/smart-enroll-plans.service.ts
var SmartEnrollPlansService = class _SmartEnrollPlansService {
  constructor() {
    this._http = inject(HttpWrapperService);
  }
  get baseUrl() {
    return environment.apiUrl;
  }
  getCatalogPlans(params = { sort: "amount" }) {
    return this._http.sendRequest("get", `${this.baseUrl}/v2/smart-enroll-plans`, params);
  }
  getClientEnrollPlans(params = {
    sort: "startDate",
    where_status: "active",
    populates: ["plan"]
  }) {
    return this._http.sendRequest("get", `${this.baseUrl}/v2/client-smart-enroll-plans`, params);
  }
  postClientEnrollPlan(body) {
    return this._http.sendRequest("post", `${this.baseUrl}/v2/client-smart-enroll-plans`, body);
  }
  upgradeClientEnrollPlan(body) {
    return this._http.sendRequest("post", `${this.baseUrl}/v2/client-smart-enroll-plans/upgrade`, body);
  }
  getClientSettings(params) {
    return this._http.sendRequest("get", `${this.baseUrl}/v2/client-settings`, params);
  }
  static {
    this.\u0275fac = function SmartEnrollPlansService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEnrollPlansService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartEnrollPlansService, factory: _SmartEnrollPlansService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEnrollPlansService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/smart-enroll/plans/smart-enroll-usage.util.ts
var DEFAULT_ENROLL_LOOKUP_DISCOUNT_PERCENT = 50;
var BACKGROUND_CHECK_LIST_PRICE = 0.5;
var COLOMBIA_IDENTITY_LIST_PRICE = 0.3;
var toFiniteNumber = (value, fallback = 0) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
};
var usagePercent = (used, limit) => {
  const usedN = Math.max(0, toFiniteNumber(used));
  const limitN = toFiniteNumber(limit);
  if (limitN <= 0)
    return usedN > 0 ? 100 : 0;
  return Math.min(100, Math.round(usedN / limitN * 100));
};
var remaining = (used, limit) => {
  return Math.max(0, toFiniteNumber(limit) - Math.max(0, toFiniteNumber(used)));
};
var overageCount = (used, limit) => {
  return Math.max(0, Math.max(0, toFiniteNumber(used)) - toFiniteNumber(limit));
};
var usageTone = (used, limit) => {
  if (overageCount(used, limit) > 0)
    return "alert";
  const percent = usagePercent(used, limit);
  if (percent >= 90)
    return "alert";
  if (percent >= 70)
    return "warn";
  return "ok";
};
var daysUntilReset = (endDate, now = /* @__PURE__ */ new Date()) => {
  if (!endDate)
    return 0;
  const end = endDate instanceof Date ? endDate : new Date(endDate);
  if (Number.isNaN(end.getTime()))
    return 0;
  return Math.max(0, Math.ceil((end.getTime() - now.getTime()) / 864e5));
};
var discountedOveragePrice = (listPrice, percent) => {
  const price = toFiniteNumber(listPrice);
  if (price < 0)
    return 0;
  const raw = Number(percent);
  const safePercent = Number.isFinite(raw) ? Math.min(100, Math.max(0, raw)) : DEFAULT_ENROLL_LOOKUP_DISCOUNT_PERCENT;
  return parseFloat((price * (1 - safePercent / 100)).toFixed(6));
};
var resolveDiscountPercent = (percent) => {
  const raw = Number(percent);
  if (!Number.isFinite(raw))
    return DEFAULT_ENROLL_LOOKUP_DISCOUNT_PERCENT;
  return Math.min(100, Math.max(0, raw));
};

// src/app/modules/smart-enroll/plans/usage-quota-bar.component.ts
var _c0 = (a0, a1) => ({ used: a0, limit: a1 });
var _c1 = (a0) => ({ count: a0 });
function UsageQuotaBarComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "smartenroll.plans.usage.over", \u0275\u0275pureFunction1(4, _c1, ctx_r0.over)), " ");
  }
}
function UsageQuotaBarComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "smartenroll.plans.usage.left", \u0275\u0275pureFunction1(4, _c1, ctx_r0.left)), " ");
  }
}
var UsageQuotaBarComponent = class _UsageQuotaBarComponent {
  constructor() {
    this.used = 0;
    this.limit = 0;
    this.label = "";
  }
  get percent() {
    return usagePercent(this.used, this.limit);
  }
  get left() {
    return remaining(this.used, this.limit);
  }
  get over() {
    return overageCount(this.used, this.limit);
  }
  get tone() {
    return usageTone(this.used, this.limit);
  }
  static {
    this.\u0275fac = function UsageQuotaBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsageQuotaBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsageQuotaBarComponent, selectors: [["usage-quota-bar"]], inputs: { used: "used", limit: "limit", label: "label" }, decls: 13, vars: 14, consts: [["leftTpl", ""], [1, "usage-bar"], [1, "usage-bar__meta"], [1, "usage-bar__label", "dark:!text-slate-50"], [1, "usage-bar__counts", "dark:!text-slate-400"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "usage-bar__track", "dark:!bg-white/10"], [1, "usage-bar__fill"], [1, "usage-bar__caption"], [4, "ngIf", "ngIfElse"]], template: function UsageQuotaBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "span", 3);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275template(10, UsageQuotaBarComponent_ng_container_10_Template, 3, 6, "ng-container", 8)(11, UsageQuotaBarComponent_ng_template_11_Template, 2, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const leftTpl_r2 = \u0275\u0275reference(12);
        \u0275\u0275attribute("data-tone", ctx.tone);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.label);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 8, "smartenroll.plans.usage.used_of", \u0275\u0275pureFunction2(11, _c0, ctx.used, ctx.limit)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-valuenow", ctx.percent);
        \u0275\u0275advance();
        \u0275\u0275styleProp("width", ctx.percent, "%");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.over > 0)("ngIfElse", leftTpl_r2);
      }
    }, dependencies: [CommonModule, NgIf, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.usage-bar[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.usage-bar__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 6px;\n}\n.usage-bar__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f0f2d;\n}\n.usage-bar__counts[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-variant-numeric: tabular-nums;\n}\n.usage-bar__track[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 999px;\n  background: #e5e7eb;\n  overflow: hidden;\n}\n.usage-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: inherit;\n  background: #059669;\n  transition: width 0.35s ease;\n}\n.usage-bar[data-tone=warn][_ngcontent-%COMP%]   .usage-bar__fill[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.usage-bar[data-tone=alert][_ngcontent-%COMP%]   .usage-bar__fill[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.usage-bar__caption[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #059669;\n}\n.usage-bar[data-tone=warn][_ngcontent-%COMP%]   .usage-bar__caption[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.usage-bar[data-tone=alert][_ngcontent-%COMP%]   .usage-bar__caption[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.dark[_nghost-%COMP%]   .usage-bar__label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-bar__label[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .usage-bar__counts[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-bar__counts[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .usage-bar__track[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-bar__track[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\n.dark[_nghost-%COMP%]   .usage-bar__caption[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-bar__caption[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.dark[_nghost-%COMP%]   .usage-bar[data-tone=warn][_ngcontent-%COMP%]   .usage-bar__caption[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-bar[data-tone=warn][_ngcontent-%COMP%]   .usage-bar__caption[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.dark[_nghost-%COMP%]   .usage-bar[data-tone=alert][_ngcontent-%COMP%]   .usage-bar__caption[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-bar[data-tone=alert][_ngcontent-%COMP%]   .usage-bar__caption[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n/*# sourceMappingURL=usage-quota-bar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsageQuotaBarComponent, [{
    type: Component,
    args: [{ selector: "usage-quota-bar", standalone: true, imports: [CommonModule, TranslocoModule], template: '<div class="usage-bar" [attr.data-tone]="tone">\r\n    <div class="usage-bar__meta">\r\n        <span class="usage-bar__label dark:!text-slate-50">{{ label }}</span>\r\n        <span class="usage-bar__counts dark:!text-slate-400">\r\n            {{ "smartenroll.plans.usage.used_of" | transloco: { used: used, limit: limit } }}\r\n        </span>\r\n    </div>\r\n    <div\r\n        class="usage-bar__track dark:!bg-white/10"\r\n        role="progressbar"\r\n        [attr.aria-valuenow]="percent"\r\n        aria-valuemin="0"\r\n        aria-valuemax="100"\r\n    >\r\n        <div class="usage-bar__fill" [style.width.%]="percent"></div>\r\n    </div>\r\n    <p class="usage-bar__caption">\r\n        <ng-container *ngIf="over > 0; else leftTpl">\r\n            {{ "smartenroll.plans.usage.over" | transloco: { count: over } }}\r\n        </ng-container>\r\n        <ng-template #leftTpl>\r\n            {{ "smartenroll.plans.usage.left" | transloco: { count: left } }}\r\n        </ng-template>\r\n    </p>\r\n</div>\r\n', styles: ["/* src/app/modules/smart-enroll/plans/usage-quota-bar.component.scss */\n:host {\n  display: block;\n}\n.usage-bar {\n  padding: 4px 0;\n}\n.usage-bar__meta {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 6px;\n}\n.usage-bar__label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f0f2d;\n}\n.usage-bar__counts {\n  font-size: 12px;\n  color: #6b7280;\n  font-variant-numeric: tabular-nums;\n}\n.usage-bar__track {\n  height: 8px;\n  border-radius: 999px;\n  background: #e5e7eb;\n  overflow: hidden;\n}\n.usage-bar__fill {\n  height: 100%;\n  border-radius: inherit;\n  background: #059669;\n  transition: width 0.35s ease;\n}\n.usage-bar[data-tone=warn] .usage-bar__fill {\n  background: #d97706;\n}\n.usage-bar[data-tone=alert] .usage-bar__fill {\n  background: #dc2626;\n}\n.usage-bar__caption {\n  margin: 6px 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #059669;\n}\n.usage-bar[data-tone=warn] .usage-bar__caption {\n  color: #d97706;\n}\n.usage-bar[data-tone=alert] .usage-bar__caption {\n  color: #dc2626;\n}\n:host-context(.dark) .usage-bar__label {\n  color: #f8fafc;\n}\n:host-context(.dark) .usage-bar__counts {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .usage-bar__track {\n  background: rgba(255, 255, 255, 0.1);\n}\n:host-context(.dark) .usage-bar__caption {\n  color: #34d399;\n}\n:host-context(.dark) .usage-bar[data-tone=warn] .usage-bar__caption {\n  color: #fbbf24;\n}\n:host-context(.dark) .usage-bar[data-tone=alert] .usage-bar__caption {\n  color: #f87171;\n}\n/*# sourceMappingURL=usage-quota-bar.component.css.map */\n"] }]
  }], null, { used: [{
    type: Input,
    args: [{ required: true }]
  }], limit: [{
    type: Input,
    args: [{ required: true }]
  }], label: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsageQuotaBarComponent, { className: "UsageQuotaBarComponent", filePath: "src/app/modules/smart-enroll/plans/usage-quota-bar.component.ts", lineNumber: 13 });
})();

// src/app/modules/smart-enroll/plans/usage-quota-gauge.component.ts
var _c02 = (a0) => ({ count: a0 });
function UsageQuotaGaugeComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "smartenroll.plans.usage.over", \u0275\u0275pureFunction1(4, _c02, ctx_r0.over)), " ");
  }
}
function UsageQuotaGaugeComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "smartenroll.plans.usage.left", \u0275\u0275pureFunction1(4, _c02, ctx_r0.left)), " ");
  }
}
function UsageQuotaGaugeComponent_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hint);
  }
}
var UsageQuotaGaugeComponent = class _UsageQuotaGaugeComponent {
  constructor() {
    this.used = 0;
    this.limit = 0;
    this.label = "";
    this.hint = "";
  }
  get percent() {
    return usagePercent(this.used, this.limit);
  }
  get left() {
    return remaining(this.used, this.limit);
  }
  get over() {
    return overageCount(this.used, this.limit);
  }
  get tone() {
    return usageTone(this.used, this.limit);
  }
  get dashArray() {
    return `${this.percent} 100`;
  }
  static {
    this.\u0275fac = function UsageQuotaGaugeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsageQuotaGaugeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsageQuotaGaugeComponent, selectors: [["usage-quota-gauge"]], inputs: { used: "used", limit: "limit", label: "label", hint: "hint" }, decls: 21, vars: 13, consts: [["leftTpl", ""], [1, "usage-gauge", "dark:!border-white/10", "dark:!bg-white/5"], [1, "usage-gauge__label", "dark:!text-slate-50"], [1, "usage-gauge__dial"], ["viewBox", "0 0 200 118", "role", "img", 1, "usage-gauge__svg"], ["pathLength", "100", "d", "M 24 100 A 76 76 0 0 1 176 100", 1, "usage-gauge__track", "dark:!stroke-white/20"], ["pathLength", "100", "d", "M 24 100 A 76 76 0 0 1 176 100", 1, "usage-gauge__fill"], [1, "usage-gauge__center"], [1, "usage-gauge__used", "dark:!text-slate-50"], [1, "usage-gauge__sep", "dark:!text-slate-400"], [1, "usage-gauge__limit", "dark:!text-slate-400"], [1, "usage-gauge__caption"], [4, "ngIf", "ngIfElse"], ["class", "usage-gauge__hint dark:!text-slate-400", 4, "ngIf"], [1, "usage-gauge__hint", "dark:!text-slate-400"]], template: function UsageQuotaGaugeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "p", 2);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4);
        \u0275\u0275element(5, "path", 5)(6, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(7, "div", 7)(8, "span", 8);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 9);
        \u0275\u0275text(12, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 10);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "p", 11);
        \u0275\u0275template(17, UsageQuotaGaugeComponent_ng_container_17_Template, 3, 6, "ng-container", 12)(18, UsageQuotaGaugeComponent_ng_template_18_Template, 2, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, UsageQuotaGaugeComponent_p_20_Template, 2, 1, "p", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const leftTpl_r2 = \u0275\u0275reference(19);
        \u0275\u0275attribute("data-tone", ctx.tone);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.label);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", ctx.label);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("stroke-dasharray", ctx.dashArray);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, ctx.used));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 11, ctx.limit));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.over > 0)("ngIfElse", leftTpl_r2);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.hint);
      }
    }, dependencies: [CommonModule, NgIf, DecimalPipe, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.usage-gauge[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px 12px 14px;\n  text-align: center;\n}\n.usage-gauge__label[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f0f2d;\n}\n.usage-gauge__dial[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 220px;\n  margin: 0 auto;\n}\n.usage-gauge__svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.usage-gauge__track[_ngcontent-%COMP%], \n.usage-gauge__fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 14;\n  stroke-linecap: round;\n}\n.usage-gauge__track[_ngcontent-%COMP%] {\n  stroke: #e5e7eb;\n}\n.usage-gauge__fill[_ngcontent-%COMP%] {\n  stroke: #059669;\n  transition: stroke-dasharray 0.35s ease;\n}\n.usage-gauge[data-tone=warn][_ngcontent-%COMP%]   .usage-gauge__fill[_ngcontent-%COMP%] {\n  stroke: #d97706;\n}\n.usage-gauge[data-tone=alert][_ngcontent-%COMP%]   .usage-gauge__fill[_ngcontent-%COMP%] {\n  stroke: #dc2626;\n}\n.usage-gauge__center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 8px;\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  gap: 4px;\n  font-variant-numeric: tabular-nums;\n}\n.usage-gauge__used[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f0f2d;\n  letter-spacing: -0.03em;\n}\n.usage-gauge__sep[_ngcontent-%COMP%], \n.usage-gauge__limit[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #6b7280;\n}\n.usage-gauge__caption[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #059669;\n}\n.usage-gauge[data-tone=warn][_ngcontent-%COMP%]   .usage-gauge__caption[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.usage-gauge[data-tone=alert][_ngcontent-%COMP%]   .usage-gauge__caption[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.usage-gauge__hint[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 11px;\n  color: #6b7280;\n}\n.dark[_nghost-%COMP%]   .usage-gauge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-gauge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.dark[_nghost-%COMP%]   .usage-gauge__label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-gauge__label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .usage-gauge__used[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-gauge__used[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .usage-gauge__sep[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-gauge__sep[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .usage-gauge__limit[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-gauge__limit[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .usage-gauge__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-gauge__hint[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .usage-gauge__track[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-gauge__track[_ngcontent-%COMP%] {\n  stroke: rgba(255, 255, 255, 0.12);\n}\n.dark[_nghost-%COMP%]   .usage-gauge__caption[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-gauge__caption[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.dark[_nghost-%COMP%]   .usage-gauge[data-tone=warn][_ngcontent-%COMP%]   .usage-gauge__caption[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-gauge[data-tone=warn][_ngcontent-%COMP%]   .usage-gauge__caption[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.dark[_nghost-%COMP%]   .usage-gauge[data-tone=alert][_ngcontent-%COMP%]   .usage-gauge__caption[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-gauge[data-tone=alert][_ngcontent-%COMP%]   .usage-gauge__caption[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n/*# sourceMappingURL=usage-quota-gauge.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsageQuotaGaugeComponent, [{
    type: Component,
    args: [{ selector: "usage-quota-gauge", standalone: true, imports: [CommonModule, TranslocoModule], template: '<div class="usage-gauge dark:!border-white/10 dark:!bg-white/5" [attr.data-tone]="tone">\r\n    <p class="usage-gauge__label dark:!text-slate-50">{{ label }}</p>\r\n    <div class="usage-gauge__dial">\r\n        <svg class="usage-gauge__svg" viewBox="0 0 200 118" role="img" [attr.aria-label]="label">\r\n            <path\r\n                class="usage-gauge__track dark:!stroke-white/20"\r\n                pathLength="100"\r\n                d="M 24 100 A 76 76 0 0 1 176 100"\r\n            />\r\n            <path\r\n                class="usage-gauge__fill"\r\n                pathLength="100"\r\n                [attr.stroke-dasharray]="dashArray"\r\n                d="M 24 100 A 76 76 0 0 1 176 100"\r\n            />\r\n        </svg>\r\n        <div class="usage-gauge__center">\r\n            <span class="usage-gauge__used dark:!text-slate-50">{{ used | number }}</span>\r\n            <span class="usage-gauge__sep dark:!text-slate-400">/</span>\r\n            <span class="usage-gauge__limit dark:!text-slate-400">{{ limit | number }}</span>\r\n        </div>\r\n    </div>\r\n    <p class="usage-gauge__caption">\r\n        <ng-container *ngIf="over > 0; else leftTpl">\r\n            {{ "smartenroll.plans.usage.over" | transloco: { count: over } }}\r\n        </ng-container>\r\n        <ng-template #leftTpl>\r\n            {{ "smartenroll.plans.usage.left" | transloco: { count: left } }}\r\n        </ng-template>\r\n    </p>\r\n    <p *ngIf="hint" class="usage-gauge__hint dark:!text-slate-400">{{ hint }}</p>\r\n</div>\r\n', styles: ["/* src/app/modules/smart-enroll/plans/usage-quota-gauge.component.scss */\n:host {\n  display: block;\n}\n.usage-gauge {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px 12px 14px;\n  text-align: center;\n}\n.usage-gauge__label {\n  margin: 0 0 4px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #0f0f2d;\n}\n.usage-gauge__dial {\n  position: relative;\n  width: 100%;\n  max-width: 220px;\n  margin: 0 auto;\n}\n.usage-gauge__svg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.usage-gauge__track,\n.usage-gauge__fill {\n  fill: none;\n  stroke-width: 14;\n  stroke-linecap: round;\n}\n.usage-gauge__track {\n  stroke: #e5e7eb;\n}\n.usage-gauge__fill {\n  stroke: #059669;\n  transition: stroke-dasharray 0.35s ease;\n}\n.usage-gauge[data-tone=warn] .usage-gauge__fill {\n  stroke: #d97706;\n}\n.usage-gauge[data-tone=alert] .usage-gauge__fill {\n  stroke: #dc2626;\n}\n.usage-gauge__center {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 8px;\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  gap: 4px;\n  font-variant-numeric: tabular-nums;\n}\n.usage-gauge__used {\n  font-size: 22px;\n  font-weight: 700;\n  color: #0f0f2d;\n  letter-spacing: -0.03em;\n}\n.usage-gauge__sep,\n.usage-gauge__limit {\n  font-size: 15px;\n  font-weight: 600;\n  color: #6b7280;\n}\n.usage-gauge__caption {\n  margin: 4px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #059669;\n}\n.usage-gauge[data-tone=warn] .usage-gauge__caption {\n  color: #d97706;\n}\n.usage-gauge[data-tone=alert] .usage-gauge__caption {\n  color: #dc2626;\n}\n.usage-gauge__hint {\n  margin: 4px 0 0;\n  font-size: 11px;\n  color: #6b7280;\n}\n:host-context(.dark) .usage-gauge {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n:host-context(.dark) .usage-gauge__label,\n:host-context(.dark) .usage-gauge__used {\n  color: #f8fafc;\n}\n:host-context(.dark) .usage-gauge__sep,\n:host-context(.dark) .usage-gauge__limit,\n:host-context(.dark) .usage-gauge__hint {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .usage-gauge__track {\n  stroke: rgba(255, 255, 255, 0.12);\n}\n:host-context(.dark) .usage-gauge__caption {\n  color: #34d399;\n}\n:host-context(.dark) .usage-gauge[data-tone=warn] .usage-gauge__caption {\n  color: #fbbf24;\n}\n:host-context(.dark) .usage-gauge[data-tone=alert] .usage-gauge__caption {\n  color: #f87171;\n}\n/*# sourceMappingURL=usage-quota-gauge.component.css.map */\n"] }]
  }], null, { used: [{
    type: Input,
    args: [{ required: true }]
  }], limit: [{
    type: Input,
    args: [{ required: true }]
  }], label: [{
    type: Input,
    args: [{ required: true }]
  }], hint: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsageQuotaGaugeComponent, { className: "UsageQuotaGaugeComponent", filePath: "src/app/modules/smart-enroll/plans/usage-quota-gauge.component.ts", lineNumber: 13 });
})();

export {
  SmartEnrollPlansService,
  BACKGROUND_CHECK_LIST_PRICE,
  COLOMBIA_IDENTITY_LIST_PRICE,
  remaining,
  daysUntilReset,
  discountedOveragePrice,
  resolveDiscountPercent,
  UsageQuotaBarComponent,
  UsageQuotaGaugeComponent
};
//# sourceMappingURL=chunk-WHRMSH7I.js.map
