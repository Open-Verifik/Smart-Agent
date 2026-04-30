import {
  WebhooksService
} from "./chunk-HO77CFQ5.js";
import {
  Clipboard,
  ClipboardModule
} from "./chunk-Q3S2LSGV.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-DBYYWGBF.js";
import {
  FuseSplashScreenService
} from "./chunk-VHS5ALDQ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-QRUO2OAL.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-KU43NSH4.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WH2N6KB4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-HZQU4G6R.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  Input,
  JsonPipe,
  MatButtonModule,
  MatIconButton,
  NgForOf,
  NgIf,
  Subject,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LLRZIRCV.js";

// src/app/modules/smart-monitor/webhooks/webhook-events.component.ts
var _c0 = () => [10, 20, 50];
function WebhookEventsComponent_ng_container_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "mat-progress-spinner", 18);
    \u0275\u0275elementEnd();
  }
}
function WebhookEventsComponent_ng_container_0_button_19_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const n_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r5);
  }
}
function WebhookEventsComponent_ng_container_0_button_19_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.returnProjectName(event_r4.projectFlow) || "\u2014", " ");
  }
}
function WebhookEventsComponent_ng_container_0_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_button_19_Template_button_click_0_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedWebhookEvent(event_r4));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275element(2, "span", 21);
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275template(4, WebhookEventsComponent_ng_container_0_button_19_ng_container_4_Template, 2, 1, "ng-container", 15)(5, WebhookEventsComponent_ng_container_0_button_19_ng_container_5_Template, 2, 1, "ng-container", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 24);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", (ctx_r1.eventSelected == null ? null : ctx_r1.eventSelected._id) === event_r4._id);
    \u0275\u0275advance();
    \u0275\u0275property("title", (event_r4.projectFlow == null ? null : event_r4.projectFlow.project == null ? null : event_r4.projectFlow.project.name) || ctx_r1.returnProjectName(event_r4.projectFlow) || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classProp("ok", (event_r4.response == null ? null : event_r4.response.status) === "success")("fail", (event_r4.response == null ? null : event_r4.response.status) === "fail");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r4.projectFlow == null ? null : event_r4.projectFlow.project == null ? null : event_r4.projectFlow.project.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(event_r4.projectFlow == null ? null : event_r4.projectFlow.project == null ? null : event_r4.projectFlow.project.name));
    \u0275\u0275advance();
    \u0275\u0275property("title", event_r4.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 12, event_r4.sentAt, "short"));
  }
}
function WebhookEventsComponent_ng_container_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.details.not_events"), " ");
  }
}
function WebhookEventsComponent_ng_container_0_mat_paginator_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-paginator", 26);
    \u0275\u0275listener("page", function WebhookEventsComponent_ng_container_0_mat_paginator_21_Template_mat_paginator_page_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPaginatorEvent($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("length", ctx_r1.paginatorData.length)("pageIndex", ctx_r1.paginatorData.pageIndex)("pageSize", ctx_r1.paginatorData.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(4, _c0));
  }
}
function WebhookEventsComponent_ng_container_0_ng_container_23_pre_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.eventSelected.response.body));
  }
}
function WebhookEventsComponent_ng_container_0_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 27)(2, "div", 28)(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 31);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_ng_container_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resend(ctx_r1.eventSelected._id));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 32)(10, "h3", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 34);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_ng_container_23_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(ctx_r1.eventSelected.response));
    });
    \u0275\u0275element(13, "mat-icon", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 36)(15, "span", 37);
    \u0275\u0275element(16, "mat-icon", 38);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, WebhookEventsComponent_ng_container_0_ng_container_23_pre_18_Template, 3, 3, "pre", 39);
    \u0275\u0275elementStart(19, "div", 32)(20, "h3", 33);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 34);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_ng_container_23_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(ctx_r1.eventSelected.body));
    });
    \u0275\u0275element(23, "mat-icon", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "pre", 40);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r1.eventSelected.projectFlow == null ? null : ctx_r1.eventSelected.projectFlow.project == null ? null : ctx_r1.eventSelected.projectFlow.project.name) || ctx_r1.returnProjectName(ctx_r1.eventSelected.projectFlow));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.eventSelected.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.resend"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.response"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.eventSelected.response);
    \u0275\u0275attribute("aria-label", t_r6("webhooks.details.copy_response"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ok", (ctx_r1.eventSelected.response == null ? null : ctx_r1.eventSelected.response.status) === "success")("fail", (ctx_r1.eventSelected.response == null ? null : ctx_r1.eventSelected.response.status) === "fail");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", (ctx_r1.eventSelected.response == null ? null : ctx_r1.eventSelected.response.status) === "fail" ? "heroicons_outline:x-circle" : "heroicons_outline:check-circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.eventSelected.response == null ? null : ctx_r1.eventSelected.response.status) === "success" ? t_r6("webhooks.details.success") : t_r6("webhooks.details.failed"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.eventSelected.response == null ? null : ctx_r1.eventSelected.response.body);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.request"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.eventSelected.body);
    \u0275\u0275attribute("aria-label", t_r6("webhooks.details.copy_request"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 17, ctx_r1.eventSelected.body));
  }
}
function WebhookEventsComponent_ng_container_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.details.select_event"), " ");
  }
}
function WebhookEventsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectFilter(void 0));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 4);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectFilter("success"));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 4);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectFilter("fail"));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5)(11, "span", 6);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 7);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 8);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275template(18, WebhookEventsComponent_ng_container_0_div_18_Template, 2, 0, "div", 10)(19, WebhookEventsComponent_ng_container_0_button_19_Template, 11, 15, "button", 11)(20, WebhookEventsComponent_ng_container_0_div_20_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, WebhookEventsComponent_ng_container_0_mat_paginator_21_Template, 1, 5, "mat-paginator", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 14);
    \u0275\u0275template(23, WebhookEventsComponent_ng_container_0_ng_container_23_Template, 27, 19, "ng-container", 15)(24, WebhookEventsComponent_ng_container_0_div_24_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.filterSelected === void 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.details.all"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.filterSelected === "success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.details.success"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.filterSelected === "fail");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.details.failed"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.project_name"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.webhook_type"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.events.sent"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.searching);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.eventsData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searching && !(ctx_r1.eventsData == null ? null : ctx_r1.eventsData.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paginatorData.length > ctx_r1.paginatorData.pageSize || ctx_r1.paginatorData.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.eventSelected);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.eventSelected);
  }
}
var WebhookEventsComponent = class _WebhookEventsComponent {
  constructor() {
    this._service = inject(WebhooksService);
    this._splash = inject(FuseSplashScreenService);
    this._cdr = inject(ChangeDetectorRef);
    this._clipboard = inject(Clipboard);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this.webhookId = "";
    this.appRegistrationId = "";
    this.projectFlowFilter = "";
    this._destroyed = new Subject();
    this._initialEventsProvided = false;
    this.eventsData = [];
    this.searching = false;
    this.projectFlows = [];
    this.paginatorData = {
      length: 0,
      pageIndex: 0,
      pageSize: 10,
      lastPage: 0
    };
  }
  /** Initial events from parent */
  set initialEvents(value) {
    this.eventsData = value ? [...value] : [];
    this._initialEventsProvided = !!value;
    this._cdr.markForCheck();
  }
  set initialPaginator(meta) {
    if (!meta)
      return;
    this.paginatorData.length = meta.total ?? 0;
    this.paginatorData.lastPage = meta.pages ?? 0;
    if (meta.limit)
      this.paginatorData.pageSize = meta.limit;
    this._cdr.markForCheck();
  }
  ngOnChanges(changes) {
    const pf = changes["projectFlowFilter"];
    if (pf && !pf.firstChange && this._hasFilterId()) {
      this.eventSelected = void 0;
      this.paginatorData.pageIndex = 0;
      this._searchEvents();
    }
  }
  ngOnInit() {
    this._service.getProjectFlows().subscribe({
      next: (result) => {
        this.projectFlows = result.data || [];
        this._cdr.markForCheck();
      },
      error: () => {
      }
    });
    if (!this._initialEventsProvided && this._hasFilterId()) {
      this._searchEvents();
    }
  }
  _hasFilterId() {
    return !!(this.webhookId || this.appRegistrationId);
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  returnProjectName(projectFlow) {
    const id = typeof projectFlow === "string" ? projectFlow : projectFlow?._id;
    if (!id || !this.projectFlows.length)
      return null;
    const current = this.projectFlows.find((e) => e._id === id);
    return current?.project?.name ?? null;
  }
  selectFilter(filter) {
    this.filterSelected = filter;
    this.eventSelected = void 0;
    this.paginatorData.pageIndex = 0;
    this._searchEvents();
  }
  selectedWebhookEvent(ev) {
    this.eventSelected = ev;
    this._cdr.markForCheck();
  }
  onPaginatorEvent(ev) {
    if (ev.pageSize === this.paginatorData.pageSize && ev.pageIndex >= this.paginatorData.lastPage) {
      return;
    }
    this.paginatorData.pageSize = ev.pageSize;
    if (ev.pageSize === this.paginatorData.pageSize) {
      this.paginatorData.pageIndex = ev.pageIndex;
    } else {
      this.paginatorData.pageIndex = 0;
    }
    this._searchEvents();
  }
  copyToClipboard(value) {
    if (value === void 0 || value === null)
      return;
    const text = typeof value === "string" ? value : JSON.stringify(value, null, 2);
    this._clipboard.copy(text);
    this._snack.open(this._transloco.translate("webhooks.details.copied"), void 0, { duration: 2e3 });
  }
  resend(webhookEventId) {
    this._splash.show();
    const t0 = Date.now();
    this._service.resendWebhookEvent(webhookEventId).subscribe({
      next: (response) => {
        if (response.data) {
          this.eventsData = [response.data, ...this.eventsData];
        }
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
  _searchEvents() {
    if (!this._hasFilterId())
      return;
    this.searching = true;
    this._cdr.markForCheck();
    const query = {
      page: this.paginatorData.pageIndex + 1,
      perPage: this.paginatorData.pageSize,
      sort: "-createdAt"
    };
    if (this.webhookId) {
      query["where_webhook"] = this.webhookId;
    } else if (this.appRegistrationId) {
      query["where_appRegistration"] = this.appRegistrationId;
    }
    if (this.filterSelected)
      query["where_response.status"] = this.filterSelected;
    if (this.projectFlowFilter)
      query["where_projectFlow"] = this.projectFlowFilter;
    this._service.getEvents(query).subscribe({
      next: (response) => {
        this.eventsData = response.data || [];
        this.paginatorData.length = response.total ?? 0;
        this.paginatorData.pageIndex = (response.page ?? 1) - 1;
        this.paginatorData.lastPage = response.pages ?? 0;
        this.searching = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.searching = false;
        this._cdr.markForCheck();
      }
    });
  }
  static {
    this.\u0275fac = function WebhookEventsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebhookEventsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebhookEventsComponent, selectors: [["webhook-events"]], inputs: { webhookId: "webhookId", appRegistrationId: "appRegistrationId", initialEvents: "initialEvents", initialPaginator: "initialPaginator", projectFlowFilter: "projectFlowFilter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "events-shell"], [1, "events-pane", "list-pane"], ["role", "tablist", 1, "segmented"], ["type", "button", "role", "tab", 1, "seg-btn", 3, "click"], [1, "table-head"], [1, "col-project"], [1, "col-type", "hide-sm"], [1, "col-date", "hide-sm"], [1, "table-body-wrap"], ["class", "loading-overlay", 4, "ngIf"], ["type", "button", "class", "event-row", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "empty-banner", 4, "ngIf"], ["class", "paginator", 3, "length", "pageIndex", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [1, "events-pane", "detail-pane"], [4, "ngIf"], ["class", "detail-empty", 4, "ngIf"], [1, "loading-overlay"], ["diameter", "36", "mode", "indeterminate"], ["type", "button", 1, "event-row", 3, "click"], [1, "col-project", 3, "title"], [1, "status-dot"], [1, "proj-name"], [1, "col-type", "hide-sm", 3, "title"], [1, "col-date", "hide-sm", "muted-xs"], [1, "empty-banner"], [1, "paginator", 3, "page", "length", "pageIndex", "pageSize", "pageSizeOptions"], [1, "detail-header"], [1, "detail-titles"], [1, "detail-project"], [1, "detail-type", "mono-xs"], ["type", "button", 1, "btn-resend", 3, "click"], [1, "detail-section-head"], [1, "detail-section-title"], ["type", "button", "mat-icon-button", "", 1, "btn-copy", 3, "click", "disabled"], ["svgIcon", "heroicons_outline:clipboard-document", 1, "copy-ic"], [1, "pill-row"], [1, "status-pill"], [1, "pill-icon", 3, "svgIcon"], ["class", "code-block", 4, "ngIf"], [1, "code-block"], [1, "detail-empty"]], template: function WebhookEventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, WebhookEventsComponent_ng_container_0_Template, 25, 18, "ng-container", 0);
      }
    }, dependencies: [
      ClipboardModule,
      CommonModule,
      NgForOf,
      NgIf,
      JsonPipe,
      DatePipe,
      TranslocoModule,
      TranslocoDirective,
      MatButtonModule,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatPaginatorModule,
      MatPaginator,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n}\n.events-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n  min-height: 420px;\n  width: 100%;\n  box-sizing: border-box;\n}\n@media (min-width: 960px) {\n  .events-shell[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  }\n}\n.events-pane[_ngcontent-%COMP%] {\n  min-height: 320px;\n}\n.list-pane[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgb(243, 244, 246);\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 960px) {\n  .list-pane[_ngcontent-%COMP%] {\n    border-bottom: none;\n    border-right: 1px solid rgb(243, 244, 246);\n  }\n}\n.segmented[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.65rem 0.75rem;\n  gap: 0.35rem;\n  background: rgb(249, 250, 251);\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.seg-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid transparent;\n  background: transparent;\n  border-radius: 10px;\n  padding: 0.45rem 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: rgb(107, 114, 128);\n  cursor: pointer;\n  transition:\n    background 0.15s ease,\n    color 0.15s ease,\n    border-color 0.15s ease;\n}\n.seg-btn[_ngcontent-%COMP%]:hover {\n  color: rgb(17, 24, 39);\n  background: rgb(243, 244, 246);\n}\n.seg-btn.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: rgb(17, 24, 39);\n  border-color: rgb(229, 231, 235);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n@media (max-width: 639px) {\n  .table-head[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .event-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n.table-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 100px;\n  gap: 0.5rem;\n  padding: 0.5rem 0.85rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: rgb(156, 163, 175);\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.table-body-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  overflow-y: auto;\n  max-height: 420px;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.72);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.event-row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 100px;\n  gap: 0.5rem;\n  align-items: center;\n  padding: 0.55rem 0.85rem;\n  border: none;\n  border-bottom: 1px solid rgb(249, 250, 251);\n  background: #fff;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.12s ease;\n}\n.event-row[_ngcontent-%COMP%]:hover {\n  background: rgb(249, 250, 251);\n}\n.event-row.selected[_ngcontent-%COMP%] {\n  background: rgb(239, 246, 255);\n}\n.col-project[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 0;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  flex-shrink: 0;\n  background: rgb(209, 213, 219);\n}\n.status-dot.ok[_ngcontent-%COMP%] {\n  background: rgb(34, 197, 94);\n}\n.status-dot.fail[_ngcontent-%COMP%] {\n  background: rgb(239, 68, 68);\n}\n.proj-name[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-type[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.mono-xs[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n}\n.muted-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.hide-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 640px) {\n  .hide-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .table-head[_ngcontent-%COMP%], \n   .event-row[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) 100px;\n  }\n}\n.empty-banner[_ngcontent-%COMP%] {\n  margin: 1.5rem;\n  padding: 0.65rem 1rem;\n  border-radius: 10px;\n  background: rgb(254, 242, 242);\n  color: rgb(185, 28, 28);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-align: center;\n}\n.paginator[_ngcontent-%COMP%] {\n  border-top: 1px solid rgb(243, 244, 246);\n  background: rgb(249, 250, 251);\n}\n.detail-pane[_ngcontent-%COMP%] {\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  background: rgb(252, 252, 252);\n}\n.detail-empty[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(156, 163, 175);\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 2rem;\n  text-align: center;\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.detail-titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 0;\n}\n.detail-project[_ngcontent-%COMP%] {\n  font-weight: 650;\n  font-size: 0.9375rem;\n  color: rgb(17, 24, 39);\n}\n.detail-type[_ngcontent-%COMP%] {\n  color: rgb(107, 114, 128);\n}\n.btn-resend[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border: none;\n  border-radius: 10px;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.45rem 0.85rem;\n  cursor: pointer;\n}\n.btn-resend[_ngcontent-%COMP%]:hover {\n  background: rgb(29, 78, 216);\n}\n.detail-section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin: 0.25rem 0 0;\n}\n.detail-section-head[_ngcontent-%COMP%]   .detail-section-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.detail-section-title[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: rgb(107, 114, 128);\n}\n.btn-copy[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  color: rgb(107, 114, 128);\n}\n.btn-copy[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: rgb(37, 99, 235);\n}\n.copy-ic[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.pill-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n}\n.status-pill.ok[_ngcontent-%COMP%] {\n  border-color: rgb(187, 247, 208);\n  background: rgb(240, 253, 244);\n  color: rgb(22, 101, 52);\n}\n.status-pill.fail[_ngcontent-%COMP%] {\n  border-color: rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(185, 28, 28);\n}\n.pill-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.code-block[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.75rem;\n  border-radius: 12px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(17, 24, 39);\n  color: rgb(243, 244, 246);\n  font-size: 0.7rem;\n  line-height: 1.45;\n  overflow: auto;\n  max-height: 220px;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n/*# sourceMappingURL=webhook-events.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WebhookEventsComponent, [{
    type: Component,
    args: [{ selector: "webhook-events", standalone: true, imports: [
      ClipboardModule,
      CommonModule,
      TranslocoModule,
      MatButtonModule,
      MatIconModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,
      MatSnackBarModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="events-shell">
        <div class="events-pane list-pane">
            <div class="segmented" role="tablist">
                <button
                    type="button"
                    role="tab"
                    class="seg-btn"
                    [class.active]="filterSelected === undefined"
                    (click)="selectFilter(undefined)"
                >
                    {{ t('webhooks.details.all') }}
                </button>
                <button
                    type="button"
                    role="tab"
                    class="seg-btn"
                    [class.active]="filterSelected === 'success'"
                    (click)="selectFilter('success')"
                >
                    {{ t('webhooks.details.success') }}
                </button>
                <button
                    type="button"
                    role="tab"
                    class="seg-btn"
                    [class.active]="filterSelected === 'fail'"
                    (click)="selectFilter('fail')"
                >
                    {{ t('webhooks.details.failed') }}
                </button>
            </div>

            <div class="table-head">
                <span class="col-project">{{ t('webhooks.details.project_name') }}</span>
                <span class="col-type hide-sm">{{ t('webhooks.details.webhook_type') }}</span>
                <span class="col-date hide-sm">{{ t('webhooks.events.sent') }}</span>
            </div>

            <div class="table-body-wrap">
                <div class="loading-overlay" *ngIf="searching">
                    <mat-progress-spinner diameter="36" mode="indeterminate"></mat-progress-spinner>
                </div>

                <button
                    type="button"
                    class="event-row"
                    *ngFor="let event of eventsData"
                    [class.selected]="eventSelected?._id === event._id"
                    (click)="selectedWebhookEvent(event)"
                >
                    <div class="col-project" [title]="event.projectFlow?.project?.name || returnProjectName(event.projectFlow) || '\u2014'">
                        <span
                            class="status-dot"
                            [class.ok]="event.response?.status === 'success'"
                            [class.fail]="event.response?.status === 'fail'"
                        ></span>
                        <span class="proj-name">
                            <ng-container *ngIf="event.projectFlow?.project?.name as n">{{ n }}</ng-container>
                            <ng-container *ngIf="!event.projectFlow?.project?.name">
                                {{ returnProjectName(event.projectFlow) || '\u2014' }}
                            </ng-container>
                        </span>
                    </div>
                    <span class="col-type hide-sm" [title]="event.type">{{ event.type }}</span>
                    <span class="col-date hide-sm muted-xs">{{ event.sentAt | date : 'short' }}</span>
                </button>

                <div class="empty-banner" *ngIf="!searching && !eventsData?.length">
                    {{ t('webhooks.details.not_events') }}
                </div>
            </div>

            <mat-paginator
                *ngIf="paginatorData.length > paginatorData.pageSize || paginatorData.length > 0"
                class="paginator"
                (page)="onPaginatorEvent($event)"
                [length]="paginatorData.length"
                [pageIndex]="paginatorData.pageIndex"
                [pageSize]="paginatorData.pageSize"
                [pageSizeOptions]="[10, 20, 50]"
            ></mat-paginator>
        </div>

        <div class="events-pane detail-pane">
            <ng-container *ngIf="eventSelected">
                <div class="detail-header">
                    <div class="detail-titles">
                        <span class="detail-project">{{ eventSelected.projectFlow?.project?.name || returnProjectName(eventSelected.projectFlow) }}</span>
                        <span class="detail-type mono-xs">{{ eventSelected.type }}</span>
                    </div>
                    <button type="button" class="btn-resend" (click)="resend(eventSelected._id)">{{ t('webhooks.details.resend') }}</button>
                </div>

                <div class="detail-section-head">
                    <h3 class="detail-section-title">{{ t('webhooks.details.response') }}</h3>
                    <button
                        type="button"
                        class="btn-copy"
                        mat-icon-button
                        [disabled]="!eventSelected.response"
                        (click)="copyToClipboard(eventSelected.response)"
                        [attr.aria-label]="t('webhooks.details.copy_response')"
                    >
                        <mat-icon svgIcon="heroicons_outline:clipboard-document" class="copy-ic"></mat-icon>
                    </button>
                </div>
                <div class="pill-row">
                    <span class="status-pill" [class.ok]="eventSelected.response?.status === 'success'" [class.fail]="eventSelected.response?.status === 'fail'">
                        <mat-icon class="pill-icon" [svgIcon]="eventSelected.response?.status === 'fail' ? 'heroicons_outline:x-circle' : 'heroicons_outline:check-circle'"></mat-icon>
                        {{ eventSelected.response?.status === 'success' ? t('webhooks.details.success') : t('webhooks.details.failed') }}
                    </span>
                </div>
                <pre *ngIf="eventSelected.response?.body" class="code-block">{{ eventSelected.response.body | json }}</pre>

                <div class="detail-section-head">
                    <h3 class="detail-section-title">{{ t('webhooks.details.request') }}</h3>
                    <button
                        type="button"
                        class="btn-copy"
                        mat-icon-button
                        [disabled]="!eventSelected.body"
                        (click)="copyToClipboard(eventSelected.body)"
                        [attr.aria-label]="t('webhooks.details.copy_request')"
                    >
                        <mat-icon svgIcon="heroicons_outline:clipboard-document" class="copy-ic"></mat-icon>
                    </button>
                </div>
                <pre class="code-block">{{ eventSelected.body | json }}</pre>
            </ng-container>

            <div class="detail-empty" *ngIf="!eventSelected">
                {{ t('webhooks.details.select_event') }}
            </div>
        </div>
    </div>
</ng-container>
`, styles: ['/* src/app/modules/smart-monitor/webhooks/webhook-events.component.scss */\n:host {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n}\n.events-shell {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n  min-height: 420px;\n  width: 100%;\n  box-sizing: border-box;\n}\n@media (min-width: 960px) {\n  .events-shell {\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  }\n}\n.events-pane {\n  min-height: 320px;\n}\n.list-pane {\n  border-bottom: 1px solid rgb(243, 244, 246);\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 960px) {\n  .list-pane {\n    border-bottom: none;\n    border-right: 1px solid rgb(243, 244, 246);\n  }\n}\n.segmented {\n  display: flex;\n  padding: 0.65rem 0.75rem;\n  gap: 0.35rem;\n  background: rgb(249, 250, 251);\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.seg-btn {\n  flex: 1;\n  border: 1px solid transparent;\n  background: transparent;\n  border-radius: 10px;\n  padding: 0.45rem 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: rgb(107, 114, 128);\n  cursor: pointer;\n  transition:\n    background 0.15s ease,\n    color 0.15s ease,\n    border-color 0.15s ease;\n}\n.seg-btn:hover {\n  color: rgb(17, 24, 39);\n  background: rgb(243, 244, 246);\n}\n.seg-btn.active {\n  background: #fff;\n  color: rgb(17, 24, 39);\n  border-color: rgb(229, 231, 235);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n@media (max-width: 639px) {\n  .table-head {\n    display: none;\n  }\n  .event-row {\n    grid-template-columns: 1fr !important;\n  }\n}\n.table-head {\n  display: grid;\n  grid-template-columns: 1fr 1fr 100px;\n  gap: 0.5rem;\n  padding: 0.5rem 0.85rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: rgb(156, 163, 175);\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.table-body-wrap {\n  position: relative;\n  flex: 1;\n  overflow-y: auto;\n  max-height: 420px;\n}\n.loading-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.72);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.event-row {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 100px;\n  gap: 0.5rem;\n  align-items: center;\n  padding: 0.55rem 0.85rem;\n  border: none;\n  border-bottom: 1px solid rgb(249, 250, 251);\n  background: #fff;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.12s ease;\n}\n.event-row:hover {\n  background: rgb(249, 250, 251);\n}\n.event-row.selected {\n  background: rgb(239, 246, 255);\n}\n.col-project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 0;\n}\n.status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  flex-shrink: 0;\n  background: rgb(209, 213, 219);\n}\n.status-dot.ok {\n  background: rgb(34, 197, 94);\n}\n.status-dot.fail {\n  background: rgb(239, 68, 68);\n}\n.proj-name {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-type {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.mono-xs {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n}\n.muted-xs {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.hide-sm {\n  display: none;\n}\n@media (min-width: 640px) {\n  .hide-sm {\n    display: block;\n  }\n  .table-head,\n  .event-row {\n    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) 100px;\n  }\n}\n.empty-banner {\n  margin: 1.5rem;\n  padding: 0.65rem 1rem;\n  border-radius: 10px;\n  background: rgb(254, 242, 242);\n  color: rgb(185, 28, 28);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-align: center;\n}\n.paginator {\n  border-top: 1px solid rgb(243, 244, 246);\n  background: rgb(249, 250, 251);\n}\n.detail-pane {\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  background: rgb(252, 252, 252);\n}\n.detail-empty {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(156, 163, 175);\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 2rem;\n  text-align: center;\n}\n.detail-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.detail-titles {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 0;\n}\n.detail-project {\n  font-weight: 650;\n  font-size: 0.9375rem;\n  color: rgb(17, 24, 39);\n}\n.detail-type {\n  color: rgb(107, 114, 128);\n}\n.btn-resend {\n  flex-shrink: 0;\n  border: none;\n  border-radius: 10px;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.45rem 0.85rem;\n  cursor: pointer;\n}\n.btn-resend:hover {\n  background: rgb(29, 78, 216);\n}\n.detail-section-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin: 0.25rem 0 0;\n}\n.detail-section-head .detail-section-title {\n  margin: 0;\n}\n.detail-section-title {\n  margin: 0.25rem 0 0;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: rgb(107, 114, 128);\n}\n.btn-copy {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  color: rgb(107, 114, 128);\n}\n.btn-copy:hover:not(:disabled) {\n  color: rgb(37, 99, 235);\n}\n.copy-ic {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.pill-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n}\n.status-pill.ok {\n  border-color: rgb(187, 247, 208);\n  background: rgb(240, 253, 244);\n  color: rgb(22, 101, 52);\n}\n.status-pill.fail {\n  border-color: rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(185, 28, 28);\n}\n.pill-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.code-block {\n  margin: 0;\n  padding: 0.75rem;\n  border-radius: 12px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(17, 24, 39);\n  color: rgb(243, 244, 246);\n  font-size: 0.7rem;\n  line-height: 1.45;\n  overflow: auto;\n  max-height: 220px;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n/*# sourceMappingURL=webhook-events.component.css.map */\n'] }]
  }], null, { webhookId: [{
    type: Input
  }], appRegistrationId: [{
    type: Input
  }], initialEvents: [{
    type: Input
  }], initialPaginator: [{
    type: Input
  }], projectFlowFilter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebhookEventsComponent, { className: "WebhookEventsComponent", filePath: "src/app/modules/smart-monitor/webhooks/webhook-events.component.ts", lineNumber: 41 });
})();

export {
  WebhookEventsComponent
};
//# sourceMappingURL=chunk-MWQOSDTT.js.map
