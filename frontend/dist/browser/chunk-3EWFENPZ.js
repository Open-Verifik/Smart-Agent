import {
  NewWebhookDialogComponent,
  WebhookStatsBarsComponent,
  WebhooksService
} from "./chunk-A4AICJFH.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-RWPBVZ63.js";
import {
  FuseSplashScreenService
} from "./chunk-AAIC5PCV.js";
import {
  MatSnackBar
} from "./chunk-DXMIRT7Q.js";
import "./chunk-LPSMXQSY.js";
import "./chunk-GMB4P7VL.js";
import "./chunk-B4CPLDBC.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import "./chunk-BAVSUFW7.js";
import {
  MatDialog
} from "./chunk-KCV7S453.js";
import {
  Router,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
import "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  MatButtonModule,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YTOBX75K.js";
import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-monitor/webhooks/webhooks-list.component.ts
function WebhooksListComponent_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-progress-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
function WebhooksListComponent_ng_container_0_div_12_article_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const projectFlow_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", projectFlow_r5.project == null ? null : projectFlow_r5.project.name, " (", projectFlow_r5.type, ") ");
  }
}
function WebhooksListComponent_ng_container_0_div_12_article_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275element(1, "mat-icon", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.list.card.not_related_projects"), " ");
  }
}
function WebhooksListComponent_ng_container_0_div_12_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 22)(1, "div", 23)(2, "div", 24)(3, "h2", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 26);
    \u0275\u0275element(6, "span", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-slide-toggle", 28);
    \u0275\u0275twoWayListener("ngModelChange", function WebhooksListComponent_ng_container_0_div_12_article_1_Template_mat_slide_toggle_ngModelChange_8_listener($event) {
      const webhook_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275twoWayBindingSet(webhook_r3.isActive, $event) || (webhook_r3.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function WebhooksListComponent_ng_container_0_div_12_article_1_Template_mat_slide_toggle_change_8_listener() {
      const webhook_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.activeWebhook(webhook_r3));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 29);
    \u0275\u0275element(10, "webhook-stats-bars", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 31)(12, "span", 32);
    \u0275\u0275element(13, "mat-icon", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "code", 34);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 31)(18, "span", 32);
    \u0275\u0275element(19, "mat-icon", 35);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 36);
    \u0275\u0275template(22, WebhooksListComponent_ng_container_0_div_12_article_1_span_22_Template, 2, 2, "span", 37)(23, WebhooksListComponent_ng_container_0_div_12_article_1_span_23_Template, 3, 1, "span", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 39)(25, "button", 40);
    \u0275\u0275listener("click", function WebhooksListComponent_ng_container_0_div_12_article_1_Template_button_click_25_listener() {
      const webhook_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.goDetail(webhook_r3));
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 41);
    \u0275\u0275listener("click", function WebhooksListComponent_ng_container_0_div_12_article_1_Template_button_click_27_listener() {
      const webhook_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openNew(webhook_r3));
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const webhook_r3 = ctx.$implicit;
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(webhook_r3.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("pill-on", webhook_r3.isActive)("pill-off", !webhook_r3.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", webhook_r3.isActive ? t_r6("webhooks.list.card.active") : t_r6("webhooks.list.card.disabled"), " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", webhook_r3.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275property("statistics", webhook_r3.statisticsByDay)("days", 7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.list.card.url"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(webhook_r3.url);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.list.card.related_projects"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", webhook_r3.projectFlow);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(webhook_r3.projectFlow == null ? null : webhook_r3.projectFlow.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.list.view"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.list.edit"), " ");
  }
}
function WebhooksListComponent_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, WebhooksListComponent_ng_container_0_div_12_article_1_Template, 29, 16, "article", 13);
    \u0275\u0275elementStart(2, "button", 14);
    \u0275\u0275listener("click", function WebhooksListComponent_ng_container_0_div_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openNew());
    });
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16);
    \u0275\u0275element(5, "mat-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.webhooks);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r6("webhooks.new.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.new.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.new.description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.new.create"), " ");
  }
}
function WebhooksListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "header", 3)(4, "div", 4);
    \u0275\u0275element(5, "mat-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h1", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, WebhooksListComponent_ng_container_0_div_11_Template, 2, 0, "div", 8)(12, WebhooksListComponent_ng_container_0_div_12_Template, 14, 5, "div", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r6("webhooks.list.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.list.subtitle"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading);
  }
}
var WebhooksListComponent = class _WebhooksListComponent {
  constructor() {
    this._service = inject(WebhooksService);
    this._splash = inject(FuseSplashScreenService);
    this._cdr = inject(ChangeDetectorRef);
    this._dialog = inject(MatDialog);
    this._router = inject(Router);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this.loading = true;
    this.webhooks = [];
  }
  ngOnInit() {
    this._load();
  }
  _load() {
    this.loading = true;
    this._cdr.markForCheck();
    this._service.get({ eventStatistics: 7 }).subscribe({
      next: (response) => {
        this.webhooks = response.data || [];
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this._cdr.markForCheck();
        this._snack.open(this._transloco.translate("webhooks.messages.request_failed"), void 0, { duration: 3e3 });
      }
    });
  }
  openNew(webhook) {
    this._dialog.open(NewWebhookDialogComponent, {
      data: webhook || null,
      width: "600px",
      maxWidth: "92vw",
      panelClass: "webhook-dialog-panel"
    }).afterClosed().subscribe((result) => {
      if (result)
        this._load();
    });
  }
  activeWebhook(webhook) {
    this._splash.show();
    const t0 = Date.now();
    this._service.activeWebhook(webhook._id, webhook.isActive).subscribe({
      next: (response) => {
        webhook.isActive = response.data.isActive;
        this._closeSplash(t0);
      },
      error: () => this._closeSplash(t0)
    });
  }
  _closeSplash(start) {
    const wait = Math.max(0, 1e3 - (Date.now() - start));
    setTimeout(() => {
      this._splash.hide();
      this._cdr.markForCheck();
    }, wait);
  }
  goDetail(webhook) {
    this._router.navigate(["/smart-monitor/webhooks", webhook._id]);
  }
  static {
    this.\u0275fac = function WebhooksListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebhooksListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebhooksListComponent, selectors: [["webhooks-list"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "page"], [1, "inner"], [1, "hero"], [1, "hero-icon"], ["svgIcon", "heroicons_outline:link"], [1, "title"], [1, "subtitle"], ["class", "state-loading", 4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "state-loading"], ["diameter", "40", "mode", "indeterminate"], [1, "grid"], ["class", "card", 4, "ngFor", "ngForOf"], ["type", "button", 1, "card", "card-dashed", 3, "click"], [1, "add-inner"], [1, "add-icon"], ["svgIcon", "heroicons_outline:plus"], [1, "add-title"], [1, "add-line"], [1, "add-hint"], [1, "btn-primary", "inline"], [1, "card"], [1, "card-top"], [1, "card-heading"], [1, "card-title"], [1, "pill"], [1, "pill-dot"], ["color", "primary", 3, "ngModelChange", "change", "ngModel"], [1, "chart-box"], [3, "statistics", "days"], [1, "field-block"], [1, "field-label"], ["svgIcon", "heroicons_outline:link", 1, "fld-ic"], [1, "url"], ["svgIcon", "heroicons_outline:folder", 1, "fld-ic"], [1, "chips"], ["class", "chip", 4, "ngFor", "ngForOf"], ["class", "chip-warn", 4, "ngIf"], [1, "card-actions"], ["type", "button", 1, "btn-primary", 3, "click"], ["type", "button", 1, "btn-ghost", 3, "click"], [1, "chip"], [1, "chip-warn"], ["svgIcon", "heroicons_outline:exclamation-triangle", 1, "chip-ic"]], template: function WebhooksListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, WebhooksListComponent_ng_container_0_Template, 13, 4, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      FormsModule,
      NgControlStatus,
      NgModel,
      RouterModule,
      TranslocoModule,
      TranslocoDirective,
      MatButtonModule,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSlideToggleModule,
      MatSlideToggle,
      WebhookStatsBarsComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: rgb(249, 250, 251);\n}\n.inner[_ngcontent-%COMP%] {\n  max-width: 72rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 3rem;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.hero-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(37, 99, 235);\n  flex-shrink: 0;\n}\n.hero-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.875rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  font-size: 1rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.state-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.25rem;\n}\n@media (min-width: 900px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  text-align: left;\n  transition: border-color 0.15s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  border-color: rgb(209, 213, 219);\n}\n.card-dashed[_ngcontent-%COMP%] {\n  border-style: dashed;\n  cursor: pointer;\n  align-items: stretch;\n  justify-content: center;\n  min-height: 280px;\n  background: rgb(252, 252, 252);\n}\n.card-dashed[_ngcontent-%COMP%]:hover {\n  border-color: rgb(59, 130, 246);\n  background: rgb(239, 246, 255);\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  min-width: 0;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 0.25rem 0.5rem;\n  border-radius: 999px;\n  width: fit-content;\n}\n.pill-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 999px;\n  background: rgb(209, 213, 219);\n}\n.pill-on[_ngcontent-%COMP%] {\n  background: rgb(240, 253, 244);\n  color: rgb(22, 101, 52);\n}\n.pill-on[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: rgb(34, 197, 94);\n}\n.pill-off[_ngcontent-%COMP%] {\n  background: rgb(243, 244, 246);\n  color: rgb(75, 85, 99);\n}\n.chart-box[_ngcontent-%COMP%] {\n  border: 1px solid rgb(243, 244, 246);\n  border-radius: 12px;\n  padding: 0.75rem 0.85rem;\n  background: rgb(252, 252, 252);\n}\n.field-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.field-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: rgb(75, 85, 99);\n}\n.fld-ic[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  color: rgb(156, 163, 175);\n}\n.url[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(55, 65, 81);\n  background: rgb(249, 250, 251);\n  border: 1px solid rgb(243, 244, 246);\n  border-radius: 8px;\n  padding: 0.45rem 0.55rem;\n  word-break: break-all;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.chip[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  padding: 0.3rem 0.55rem;\n  border-radius: 8px;\n  background: rgb(239, 246, 255);\n  color: rgb(29, 78, 216);\n  border: 1px solid rgb(219, 234, 254);\n}\n.chip-warn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  padding: 0.3rem 0.55rem;\n  border-radius: 8px;\n  background: rgb(254, 252, 232);\n  color: rgb(161, 98, 7);\n  border: 1px solid rgb(253, 230, 138);\n}\n.chip-ic[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: auto;\n  padding-top: 0.25rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  border: none;\n  border-radius: 10px;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.55rem 0.75rem;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(29, 78, 216);\n}\n.btn-primary.inline[_ngcontent-%COMP%] {\n  flex: none;\n  margin-top: 0.5rem;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 10px;\n  background: #fff;\n  color: rgb(37, 99, 235);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.55rem 0.75rem;\n  cursor: pointer;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgb(249, 250, 251);\n}\n.btn-ic[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.add-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 1rem;\n}\n.add-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 999px;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(37, 99, 235);\n  margin-bottom: 1rem;\n}\n.add-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n}\n.add-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.add-line[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: rgb(55, 65, 81);\n}\n.add-hint[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n  max-width: 280px;\n  line-height: 1.45;\n}\n/*# sourceMappingURL=webhooks-list.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WebhooksListComponent, [{
    type: Component,
    args: [{ selector: "webhooks-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      TranslocoModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSlideToggleModule,
      WebhookStatsBarsComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="page">
        <div class="inner">
            <header class="hero">
                <div class="hero-icon">
                    <mat-icon svgIcon="heroicons_outline:link"></mat-icon>
                </div>
                <div>
                    <h1 class="title">{{ t('webhooks.list.title') }}</h1>
                    <p class="subtitle">{{ t('webhooks.list.subtitle') }}</p>
                </div>
            </header>

            <div *ngIf="loading" class="state-loading">
                <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>
            </div>

            <div class="grid" *ngIf="!loading">
                <article class="card" *ngFor="let webhook of webhooks">
                    <div class="card-top">
                        <div class="card-heading">
                            <h2 class="card-title">{{ webhook.name }}</h2>
                            <span
                                class="pill"
                                [class.pill-on]="webhook.isActive"
                                [class.pill-off]="!webhook.isActive"
                            >
                                <span class="pill-dot"></span>
                                {{
                                    webhook.isActive
                                        ? t('webhooks.list.card.active')
                                        : t('webhooks.list.card.disabled')
                                }}
                            </span>
                        </div>
                        <mat-slide-toggle
                            [(ngModel)]="webhook.isActive"
                            (change)="activeWebhook(webhook)"
                            color="primary"
                        ></mat-slide-toggle>
                    </div>

                    <div class="chart-box">
                        <webhook-stats-bars
                            [statistics]="webhook.statisticsByDay"
                            [days]="7"
                        ></webhook-stats-bars>
                    </div>

                    <div class="field-block">
                        <span class="field-label">
                            <mat-icon class="fld-ic" svgIcon="heroicons_outline:link"></mat-icon>
                            {{ t('webhooks.list.card.url') }}
                        </span>
                        <code class="url">{{ webhook.url }}</code>
                    </div>

                    <div class="field-block">
                        <span class="field-label">
                            <mat-icon class="fld-ic" svgIcon="heroicons_outline:folder"></mat-icon>
                            {{ t('webhooks.list.card.related_projects') }}
                        </span>
                        <div class="chips">
                            <span class="chip" *ngFor="let projectFlow of webhook.projectFlow">
                                {{ projectFlow.project?.name }} ({{ projectFlow.type }})
                            </span>
                            <span class="chip-warn" *ngIf="!webhook.projectFlow?.length">
                                <mat-icon
                                    class="chip-ic"
                                    svgIcon="heroicons_outline:exclamation-triangle"
                                ></mat-icon>
                                {{ t('webhooks.list.card.not_related_projects') }}
                            </span>
                        </div>
                    </div>

                    <div class="card-actions">
                        <button type="button" class="btn-primary" (click)="goDetail(webhook)">
                            {{ t('webhooks.list.view') }}
                        </button>
                        <button type="button" class="btn-ghost" (click)="openNew(webhook)">
                            {{ t('webhooks.list.edit') }}
                        </button>
                    </div>
                </article>

                <button type="button" class="card card-dashed" (click)="openNew()">
                    <div class="add-inner">
                        <div class="add-icon">
                            <mat-icon svgIcon="heroicons_outline:plus"></mat-icon>
                        </div>
                        <h2 class="add-title">{{ t('webhooks.new.title') }}</h2>
                        <p class="add-line">{{ t('webhooks.new.subtitle') }}</p>
                        <p class="add-hint">{{ t('webhooks.new.description') }}</p>
                        <span class="btn-primary inline">
                            {{ t('webhooks.new.create') }}
                        </span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</ng-container>
`, styles: ["/* src/app/modules/smart-monitor/webhooks/webhooks-list.component.scss */\n:host {\n  display: block;\n}\n.page {\n  min-height: 100%;\n  background: rgb(249, 250, 251);\n}\n.inner {\n  max-width: 72rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 3rem;\n}\n.hero {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.hero-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(37, 99, 235);\n  flex-shrink: 0;\n}\n.hero-icon mat-icon {\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n}\n.title {\n  margin: 0;\n  font-size: 1.875rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.subtitle {\n  margin: 0.4rem 0 0;\n  font-size: 1rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.state-loading {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.25rem;\n}\n@media (min-width: 900px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.card {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.1rem;\n  text-align: left;\n  transition: border-color 0.15s ease;\n}\n.card:hover {\n  border-color: rgb(209, 213, 219);\n}\n.card-dashed {\n  border-style: dashed;\n  cursor: pointer;\n  align-items: stretch;\n  justify-content: center;\n  min-height: 280px;\n  background: rgb(252, 252, 252);\n}\n.card-dashed:hover {\n  border-color: rgb(59, 130, 246);\n  background: rgb(239, 246, 255);\n}\n.card-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.card-heading {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  min-width: 0;\n}\n.card-title {\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 0.25rem 0.5rem;\n  border-radius: 999px;\n  width: fit-content;\n}\n.pill-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 999px;\n  background: rgb(209, 213, 219);\n}\n.pill-on {\n  background: rgb(240, 253, 244);\n  color: rgb(22, 101, 52);\n}\n.pill-on .pill-dot {\n  background: rgb(34, 197, 94);\n}\n.pill-off {\n  background: rgb(243, 244, 246);\n  color: rgb(75, 85, 99);\n}\n.chart-box {\n  border: 1px solid rgb(243, 244, 246);\n  border-radius: 12px;\n  padding: 0.75rem 0.85rem;\n  background: rgb(252, 252, 252);\n}\n.field-block {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.field-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: rgb(75, 85, 99);\n}\n.fld-ic {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  color: rgb(156, 163, 175);\n}\n.url {\n  font-size: 0.75rem;\n  color: rgb(55, 65, 81);\n  background: rgb(249, 250, 251);\n  border: 1px solid rgb(243, 244, 246);\n  border-radius: 8px;\n  padding: 0.45rem 0.55rem;\n  word-break: break-all;\n}\n.chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.chip {\n  font-size: 0.6875rem;\n  font-weight: 600;\n  padding: 0.3rem 0.55rem;\n  border-radius: 8px;\n  background: rgb(239, 246, 255);\n  color: rgb(29, 78, 216);\n  border: 1px solid rgb(219, 234, 254);\n}\n.chip-warn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  padding: 0.3rem 0.55rem;\n  border-radius: 8px;\n  background: rgb(254, 252, 232);\n  color: rgb(161, 98, 7);\n  border: 1px solid rgb(253, 230, 138);\n}\n.chip-ic {\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n}\n.card-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: auto;\n  padding-top: 0.25rem;\n}\n.btn-primary {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  border: none;\n  border-radius: 10px;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.55rem 0.75rem;\n  cursor: pointer;\n}\n.btn-primary:hover {\n  background: rgb(29, 78, 216);\n}\n.btn-primary.inline {\n  flex: none;\n  margin-top: 0.5rem;\n}\n.btn-ghost {\n  flex: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 10px;\n  background: #fff;\n  color: rgb(37, 99, 235);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.55rem 0.75rem;\n  cursor: pointer;\n}\n.btn-ghost:hover {\n  background: rgb(249, 250, 251);\n}\n.btn-ic {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.add-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 1rem;\n}\n.add-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 999px;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(37, 99, 235);\n  margin-bottom: 1rem;\n}\n.add-icon mat-icon {\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n}\n.add-title {\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.add-line {\n  margin: 0.35rem 0 0;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: rgb(55, 65, 81);\n}\n.add-hint {\n  margin: 0.25rem 0 0;\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n  max-width: 280px;\n  line-height: 1.45;\n}\n/*# sourceMappingURL=webhooks-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebhooksListComponent, { className: "WebhooksListComponent", filePath: "src/app/modules/smart-monitor/webhooks/webhooks-list.component.ts", lineNumber: 35 });
})();
export {
  WebhooksListComponent
};
//# sourceMappingURL=chunk-3EWFENPZ.js.map
