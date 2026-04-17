import {
  FuseSplashScreenService
} from "./chunk-AAIC5PCV.js";
import {
  MatSnackBar
} from "./chunk-DXMIRT7Q.js";
import {
  HttpWrapperService
} from "./chunk-LPSMXQSY.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  DateTime
} from "./chunk-BAVSUFW7.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KCV7S453.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-TX3AVWPC.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-VHMFS3U6.js";
import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DecimalPipe,
  Inject,
  Injectable,
  Input,
  JsonPipe,
  MatButtonModule,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YTOBX75K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/smart-monitor/webhooks/webhooks.service.ts
var WebhooksService = class _WebhooksService {
  constructor() {
    this._http = inject(HttpWrapperService);
  }
  get baseUrl() {
    return environment.apiUrl;
  }
  get(params = {}) {
    const q = __spreadProps(__spreadValues({}, params), {
      populates: ["projectFlow.project"],
      populateSelects: '{"project":"name","projectFlow":"project name type"}'
    });
    return this._http.sendRequest("get", `${this.baseUrl}/v2/webhooks`, q);
  }
  getDetails(id, projectFlow) {
    const params = {
      eventStatistics: 30,
      populates: ["projectFlow.project"],
      populateSelects: '{"project":"name","projectFlow":"project name type"}'
    };
    if (projectFlow) {
      params.projectFlow = projectFlow;
    }
    return this._http.sendRequest("get", `${this.baseUrl}/v2/webhooks/${id}`, params);
  }
  getEvents(query, page = 0, perPage = 10) {
    const params = __spreadProps(__spreadValues({}, query), {
      where_status: "sent",
      sort: "-createdAt",
      populates: ["projectFlow.project"],
      populateSelects: '{ "projectFlow": "project", "project": "name" }'
    });
    if (!params.page || !params.perPage) {
      params.page = page;
      params.perPage = perPage;
    }
    return this._http.sendRequest("get", `${this.baseUrl}/v2/webhook-events`, params);
  }
  getEventById(id) {
    const params = {
      allSameEvents: true,
      where__id: id,
      where_status: "sent",
      populates: ["projectFlow.project"]
    };
    return this._http.sendRequest("get", `${this.baseUrl}/v2/webhook-events/${id}`, params);
  }
  resendWebhookEvent(id) {
    return this._http.sendRequest("put", `${this.baseUrl}/v2/webhook-events/${id}/resend`, {
      allSameEvents: true
    });
  }
  create(body) {
    return this._http.sendRequest("post", `${this.baseUrl}/v2/webhooks`, body);
  }
  getProjectFlows() {
    const params = {
      where_status: "active",
      in_type: ["onboarding", "login", "smartlink"],
      sort: "-type name",
      populates: ["project", "webhook"],
      populateSelects: '{"project":"name branding.logo", "webhook":"name"}'
    };
    return this._http.sendRequest("get", `${this.baseUrl}/v2/project-flows`, params);
  }
  activeWebhook(webhookId, isActive) {
    return this._http.sendRequest("put", `${this.baseUrl}/v2/webhooks/${webhookId}`, { isActive });
  }
  update(webhookId, body) {
    return this._http.sendRequest("put", `${this.baseUrl}/v2/webhooks/${webhookId}`, body);
  }
  delete(webhookId) {
    return this._http.sendRequest("delete", `${this.baseUrl}/v2/webhooks/${webhookId}`);
  }
  test(url) {
    return this._http.sendRequest("post", `${this.baseUrl}/v2/webhooks/test`, { url });
  }
  static {
    this.\u0275fac = function WebhooksService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebhooksService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WebhooksService, factory: _WebhooksService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WebhooksService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/smart-monitor/webhooks/dialogs/new-webhook-dialog.component.ts
function NewWebhookDialogComponent_ng_container_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("webhooks.new.name_required"), " ");
  }
}
function NewWebhookDialogComponent_ng_container_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("webhooks.new.name_too_long"), " ");
  }
}
function NewWebhookDialogComponent_ng_container_0_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("webhooks.new.test_webhook"));
  }
}
function NewWebhookDialogComponent_ng_container_0_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275element(1, "mat-progress-spinner", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("webhooks.new.testing"), " ");
  }
}
function NewWebhookDialogComponent_ng_container_0_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("webhooks.new.url_description"));
  }
}
function NewWebhookDialogComponent_ng_container_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("webhooks.new.url_format"));
  }
}
function NewWebhookDialogComponent_ng_container_0_div_21_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("HTTP ", ctx_r2.testResult.statusCode, "");
  }
}
function NewWebhookDialogComponent_ng_container_0_div_21_div_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r2.testResult.message, "");
  }
}
function NewWebhookDialogComponent_ng_container_0_div_21_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, NewWebhookDialogComponent_ng_container_0_div_21_div_5_span_1_Template, 2, 1, "span", 10)(2, NewWebhookDialogComponent_ng_container_0_div_21_div_5_span_2_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.testResult.statusCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.testResult.message);
  }
}
function NewWebhookDialogComponent_ng_container_0_div_21_pre_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.testResult.body));
  }
}
function NewWebhookDialogComponent_ng_container_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-icon", 26);
    \u0275\u0275elementStart(2, "div", 27)(3, "div", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, NewWebhookDialogComponent_ng_container_0_div_21_div_5_Template, 3, 2, "div", 29)(6, NewWebhookDialogComponent_ng_container_0_div_21_pre_6_Template, 3, 3, "pre", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("test-ok", ctx_r2.testResult.status === "success")("test-fail", ctx_r2.testResult.status === "fail");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", ctx_r2.testResult.status === "success" ? "heroicons_outline:check-circle" : "heroicons_outline:x-circle");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.testResult.status === "success" ? t_r2("webhooks.new.test_success_message") : t_r2("webhooks.new.test_failed_message"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.testResult.statusCode || ctx_r2.testResult.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.testResult.body);
  }
}
function NewWebhookDialogComponent_ng_container_0_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("webhooks.new.description_required"), " ");
  }
}
function NewWebhookDialogComponent_ng_container_0_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function NewWebhookDialogComponent_ng_container_0_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("webhooks.new.delete"));
  }
}
function NewWebhookDialogComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 3)(5, "div", 4)(6, "label", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 6);
    \u0275\u0275template(9, NewWebhookDialogComponent_ng_container_0_span_9_Template, 2, 1, "span", 7)(10, NewWebhookDialogComponent_ng_container_0_span_10_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 4)(12, "div", 8)(13, "label", 5);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 9);
    \u0275\u0275listener("click", function NewWebhookDialogComponent_ng_container_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.testWebhook());
    });
    \u0275\u0275template(16, NewWebhookDialogComponent_ng_container_0_span_16_Template, 2, 1, "span", 10)(17, NewWebhookDialogComponent_ng_container_0_span_17_Template, 3, 1, "span", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 12);
    \u0275\u0275listener("input", function NewWebhookDialogComponent_ng_container_0_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.validateURL($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, NewWebhookDialogComponent_ng_container_0_span_19_Template, 2, 1, "span", 13)(20, NewWebhookDialogComponent_ng_container_0_span_20_Template, 2, 1, "span", 7)(21, NewWebhookDialogComponent_ng_container_0_div_21_Template, 7, 8, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 4)(23, "label", 5);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "textarea", 15);
    \u0275\u0275template(26, NewWebhookDialogComponent_ng_container_0_span_26_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 16);
    \u0275\u0275template(28, NewWebhookDialogComponent_ng_container_0_button_28_Template, 2, 1, "button", 17);
    \u0275\u0275element(29, "span", 18);
    \u0275\u0275elementStart(30, "button", 19);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 20);
    \u0275\u0275listener("click", function NewWebhookDialogComponent_ng_container_0_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.data ? ctx_r2.update() : ctx_r2.create());
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_17_0;
    let tmp_18_0;
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.data ? t_r2("webhooks.new.edit_title") : t_r2("webhooks.new.title"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.fieldsForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("webhooks.new.name"));
    \u0275\u0275advance();
    \u0275\u0275classProp("field-input-invalid", ((tmp_5_0 = ctx_r2.fieldsForm.get("name")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r2.fieldsForm.get("name")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r2.fieldsForm.get("name")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx_r2.fieldsForm.get("name")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r2.fieldsForm.get("name")) == null ? null : tmp_7_0.hasError("maxlength")) && ((tmp_7_0 = ctx_r2.fieldsForm.get("name")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("webhooks.new.url"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.testingWebhook || !((tmp_9_0 = ctx_r2.fieldsForm.get("url")) == null ? null : tmp_9_0.value) || ((tmp_9_0 = ctx_r2.fieldsForm.get("url")) == null ? null : tmp_9_0.invalid) || ctx_r2.urlError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.testingWebhook);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.testingWebhook);
    \u0275\u0275advance();
    \u0275\u0275classProp("field-input-invalid", (((tmp_12_0 = ctx_r2.fieldsForm.get("url")) == null ? null : tmp_12_0.invalid) || ctx_r2.urlError) && ((tmp_12_0 = ctx_r2.fieldsForm.get("url")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_13_0 = ctx_r2.fieldsForm.get("url")) == null ? null : tmp_13_0.touched) || !ctx_r2.urlError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_14_0 = ctx_r2.fieldsForm.get("url")) == null ? null : tmp_14_0.touched) && ctx_r2.urlError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.testResult);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("webhooks.new.description1"));
    \u0275\u0275advance();
    \u0275\u0275classProp("field-input-invalid", ((tmp_17_0 = ctx_r2.fieldsForm.get("description")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r2.fieldsForm.get("description")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_18_0 = ctx_r2.fieldsForm.get("description")) == null ? null : tmp_18_0.hasError("required")) && ((tmp_18_0 = ctx_r2.fieldsForm.get("description")) == null ? null : tmp_18_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.data);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r2("webhooks.new.cancel"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.fieldsForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2(ctx_r2.data ? "webhooks.new.update" : "webhooks.new.create"), " ");
  }
}
var NewWebhookDialogComponent = class _NewWebhookDialogComponent {
  constructor(data) {
    this.data = data;
    this._fb = inject(FormBuilder);
    this._service = inject(WebhooksService);
    this._splash = inject(FuseSplashScreenService);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._dialogRef = inject(MatDialogRef);
    this.urlError = false;
    this.testingWebhook = false;
    this.testResult = null;
    this.fieldsForm = this._fb.group({
      name: ["", [Validators.required, Validators.maxLength(40)]],
      url: ["", [Validators.required]],
      description: ["", [Validators.required, Validators.maxLength(400)]],
      isActive: [true]
    });
    if (this.data) {
      this.fieldsForm.patchValue(this.data);
    }
  }
  ngOnInit() {
  }
  _toast(msg, isError) {
    this._snack.open(msg, void 0, {
      duration: 3e3,
      panelClass: isError ? ["bg-red-900", "text-white"] : ["bg-gray-900", "text-white"]
    });
  }
  create() {
    this.urlError = false;
    if (!this.validateLastURL(this.fieldsForm.value.url)) {
      this.urlError = true;
      return;
    }
    this._splash.show();
    const body = this.fieldsForm.value;
    this._service.create(body).subscribe({
      next: (response) => {
        this._splash.hide();
        this._toast(this._transloco.translate("webhooks.messages.saved"), false);
        this._dialogRef.close(response.data);
      },
      error: () => {
        this._splash.hide();
        this._toast(this._transloco.translate("webhooks.messages.request_failed"), true);
      }
    });
  }
  validateURL(ev) {
    const input = ev.target;
    const url = input.value;
    if (!url?.length) {
      this.urlError = false;
      return;
    }
    this.urlError = !/^https?:\/\//.test(url);
  }
  validateLastURL(url) {
    if (!url?.length)
      return false;
    return /^https?:\/\//.test(url);
  }
  update() {
    this._splash.show();
    const body = this.fieldsForm.value;
    const id = this.data?.["_id"];
    this._service.update(id, body).subscribe({
      next: (response) => {
        this._splash.hide();
        this._dialogRef.close(response.data);
      },
      error: () => {
        this._splash.hide();
        this._toast(this._transloco.translate("webhooks.messages.request_failed"), true);
      }
    });
  }
  delete() {
    const id = this.data?.["_id"];
    this._splash.show();
    this._service.delete(id).subscribe({
      next: () => {
        this._splash.hide();
        this._dialogRef.close({ deleted: true });
      },
      error: () => {
        this._splash.hide();
        this._toast(this._transloco.translate("webhooks.messages.request_failed"), true);
      }
    });
  }
  testWebhook() {
    const url = this.fieldsForm.get("url")?.value;
    if (!url) {
      this._toast(this._transloco.translate("webhooks.new.url_required_for_test"), true);
      return;
    }
    if (!this.validateLastURL(url)) {
      this.urlError = true;
      this._toast(this._transloco.translate("webhooks.new.invalid_url"), true);
      return;
    }
    this.testingWebhook = true;
    this.testResult = null;
    this._service.test(url).subscribe({
      next: (response) => {
        this.testingWebhook = false;
        this.testResult = response.data;
        if (response.data?.status === "success") {
          this._toast(this._transloco.translate("webhooks.new.test_success"), false);
        } else {
          this._toast(this._transloco.translate("webhooks.new.test_failed"), true);
        }
      },
      error: (error) => {
        this.testingWebhook = false;
        this.testResult = {
          status: "fail",
          message: error.error?.message || this._transloco.translate("webhooks.new.test_error")
        };
        this._toast(this._transloco.translate("webhooks.new.test_error"), true);
      }
    });
  }
  static {
    this.\u0275fac = function NewWebhookDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewWebhookDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewWebhookDialogComponent, selectors: [["new-webhook-dialog"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "dialog-shell"], [1, "dialog-title"], [1, "form-stack", 3, "formGroup"], [1, "field"], [1, "field-label"], ["type", "text", "formControlName", "name", 1, "field-input"], ["class", "field-error", 4, "ngIf"], [1, "field-row-label"], ["type", "button", 1, "text-link", 3, "click", "disabled"], [4, "ngIf"], ["class", "inline-flex items-center gap-2", 4, "ngIf"], ["type", "url", "formControlName", "url", 1, "field-input", 3, "input"], ["class", "field-hint", 4, "ngIf"], ["class", "test-result", 3, "test-ok", "test-fail", 4, "ngIf"], ["formControlName", "description", "rows", "4", 1, "field-textarea"], [1, "dialog-actions"], ["type", "button", "class", "btn-danger-ghost", 3, "click", 4, "ngIf"], [1, "flex-1"], ["type", "button", "mat-dialog-close", "", 1, "btn-secondary"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], [1, "field-error"], [1, "inline-flex", "items-center", "gap-2"], ["diameter", "14", "mode", "indeterminate"], [1, "field-hint"], [1, "test-result"], [1, "test-icon", 3, "svgIcon"], [1, "test-body"], [1, "test-msg"], ["class", "test-meta", 4, "ngIf"], ["class", "test-json", 4, "ngIf"], [1, "test-meta"], [1, "test-json"], ["type", "button", 1, "btn-danger-ghost", 3, "click"]], template: function NewWebhookDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NewWebhookDialogComponent_ng_container_0_Template, 34, 24, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      JsonPipe,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      TranslocoModule,
      TranslocoDirective,
      MatDialogModule,
      MatDialogClose,
      MatButtonModule,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], styles: ["\n\n.dialog-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  min-width: min(100vw - 2rem, 520px);\n  padding: 0.25rem;\n}\n.dialog-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.375rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n}\n.form-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.field-row-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n}\n.field-input[_ngcontent-%COMP%], \n.field-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(249, 250, 251);\n  padding: 0.65rem 0.85rem;\n  font-size: 0.875rem;\n  color: rgb(17, 24, 39);\n  outline: none;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.field-input[_ngcontent-%COMP%]:focus, \n.field-textarea[_ngcontent-%COMP%]:focus {\n  border-color: rgb(59, 130, 246);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n  background: #fff;\n}\n.field-input-invalid[_ngcontent-%COMP%] {\n  border-color: rgb(248, 113, 113);\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(220, 38, 38);\n}\n.text-link[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  cursor: pointer;\n  padding: 0.25rem 0.35rem;\n  border-radius: 6px;\n}\n.text-link[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(239, 246, 255);\n}\n.text-link[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.test-result[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.65rem;\n  margin-top: 0.5rem;\n  padding: 0.75rem;\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n}\n.test-ok[_ngcontent-%COMP%] {\n  background: rgb(240, 253, 244);\n  border-color: rgb(187, 247, 208);\n}\n.test-fail[_ngcontent-%COMP%] {\n  background: rgb(254, 242, 242);\n  border-color: rgb(254, 202, 202);\n}\n.test-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  font-size: 22px;\n}\n.test-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.test-msg[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.test-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(75, 85, 99);\n  margin-top: 0.25rem;\n}\n.test-json[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  padding: 0.5rem;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 0.7rem;\n  max-height: 8rem;\n  overflow: auto;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding-top: 1rem;\n  margin-top: 0.25rem;\n  border-top: 1px solid rgb(243, 244, 246);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  padding: 0.55rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgb(249, 250, 251);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  padding: 0.55rem 1.1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgb(29, 78, 216);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.btn-danger-ghost[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: rgb(220, 38, 38);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0.5rem 0.25rem;\n  margin-right: auto;\n}\n.btn-danger-ghost[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=new-webhook-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewWebhookDialogComponent, [{
    type: Component,
    args: [{ selector: "new-webhook-dialog", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      TranslocoModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule
    ], template: `<ng-container *transloco="let t">
    <div class="dialog-shell">
        <h2 class="dialog-title">{{ data ? t('webhooks.new.edit_title') : t('webhooks.new.title') }}</h2>

        <form [formGroup]="fieldsForm" class="form-stack">
            <div class="field">
                <label class="field-label">{{ t('webhooks.new.name') }}</label>
                <input
                    type="text"
                    formControlName="name"
                    class="field-input"
                    [class.field-input-invalid]="fieldsForm.get('name')?.invalid && fieldsForm.get('name')?.touched"
                />
                <span class="field-error" *ngIf="fieldsForm.get('name')?.hasError('required') && fieldsForm.get('name')?.touched">
                    {{ t('webhooks.new.name_required') }}
                </span>
                <span class="field-error" *ngIf="fieldsForm.get('name')?.hasError('maxlength') && fieldsForm.get('name')?.touched">
                    {{ t('webhooks.new.name_too_long') }}
                </span>
            </div>

            <div class="field">
                <div class="field-row-label">
                    <label class="field-label">{{ t('webhooks.new.url') }}</label>
                    <button
                        type="button"
                        class="text-link"
                        (click)="testWebhook()"
                        [disabled]="testingWebhook || !fieldsForm.get('url')?.value || fieldsForm.get('url')?.invalid || urlError"
                    >
                        <span *ngIf="!testingWebhook">{{ t('webhooks.new.test_webhook') }}</span>
                        <span *ngIf="testingWebhook" class="inline-flex items-center gap-2">
                            <mat-progress-spinner diameter="14" mode="indeterminate"></mat-progress-spinner>
                            {{ t('webhooks.new.testing') }}
                        </span>
                    </button>
                </div>
                <input
                    type="url"
                    formControlName="url"
                    (input)="validateURL($event)"
                    class="field-input"
                    [class.field-input-invalid]="
                        (fieldsForm.get('url')?.invalid || urlError) && fieldsForm.get('url')?.touched
                    "
                />
                <span class="field-hint" *ngIf="!fieldsForm.get('url')?.touched || !urlError">{{ t('webhooks.new.url_description') }}</span>
                <span class="field-error" *ngIf="fieldsForm.get('url')?.touched && urlError">{{ t('webhooks.new.url_format') }}</span>

                <div *ngIf="testResult" class="test-result" [class.test-ok]="testResult.status === 'success'" [class.test-fail]="testResult.status === 'fail'">
                    <mat-icon
                        class="test-icon"
                        [svgIcon]="testResult.status === 'success' ? 'heroicons_outline:check-circle' : 'heroicons_outline:x-circle'"
                    ></mat-icon>
                    <div class="test-body">
                        <div class="test-msg">
                            {{
                                testResult.status === 'success'
                                    ? t('webhooks.new.test_success_message')
                                    : t('webhooks.new.test_failed_message')
                            }}
                        </div>
                        <div class="test-meta" *ngIf="testResult.statusCode || testResult.message">
                            <span *ngIf="testResult.statusCode">HTTP {{ testResult.statusCode }}</span>
                            <span *ngIf="testResult.message"> \u2014 {{ testResult.message }}</span>
                        </div>
                        <pre *ngIf="testResult.body" class="test-json">{{ testResult.body | json }}</pre>
                    </div>
                </div>
            </div>

            <div class="field">
                <label class="field-label">{{ t('webhooks.new.description1') }}</label>
                <textarea
                    formControlName="description"
                    rows="4"
                    class="field-textarea"
                    [class.field-input-invalid]="fieldsForm.get('description')?.invalid && fieldsForm.get('description')?.touched"
                ></textarea>
                <span class="field-error" *ngIf="fieldsForm.get('description')?.hasError('required') && fieldsForm.get('description')?.touched">
                    {{ t('webhooks.new.description_required') }}
                </span>
            </div>
        </form>

        <div class="dialog-actions">
            <button *ngIf="data" type="button" class="btn-danger-ghost" (click)="delete()">{{ t('webhooks.new.delete') }}</button>
            <span class="flex-1"></span>
            <button type="button" mat-dialog-close class="btn-secondary">{{ t('webhooks.new.cancel') }}</button>
            <button type="button" class="btn-primary" [disabled]="fieldsForm.invalid" (click)="data ? update() : create()">
                {{ t(data ? 'webhooks.new.update' : 'webhooks.new.create') }}
            </button>
        </div>
    </div>
</ng-container>
`, styles: ["/* src/app/modules/smart-monitor/webhooks/dialogs/new-webhook-dialog.component.scss */\n.dialog-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  min-width: min(100vw - 2rem, 520px);\n  padding: 0.25rem;\n}\n.dialog-title {\n  margin: 0;\n  font-size: 1.375rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n}\n.form-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.field-row-label {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.field-label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n}\n.field-input,\n.field-textarea {\n  width: 100%;\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(249, 250, 251);\n  padding: 0.65rem 0.85rem;\n  font-size: 0.875rem;\n  color: rgb(17, 24, 39);\n  outline: none;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.field-input:focus,\n.field-textarea:focus {\n  border-color: rgb(59, 130, 246);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n  background: #fff;\n}\n.field-input-invalid {\n  border-color: rgb(248, 113, 113);\n}\n.field-hint {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.field-error {\n  font-size: 0.75rem;\n  color: rgb(220, 38, 38);\n}\n.text-link {\n  border: none;\n  background: none;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  cursor: pointer;\n  padding: 0.25rem 0.35rem;\n  border-radius: 6px;\n}\n.text-link:hover:not(:disabled) {\n  background: rgb(239, 246, 255);\n}\n.text-link:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.test-result {\n  display: flex;\n  gap: 0.65rem;\n  margin-top: 0.5rem;\n  padding: 0.75rem;\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n}\n.test-ok {\n  background: rgb(240, 253, 244);\n  border-color: rgb(187, 247, 208);\n}\n.test-fail {\n  background: rgb(254, 242, 242);\n  border-color: rgb(254, 202, 202);\n}\n.test-icon {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  font-size: 22px;\n}\n.test-body {\n  flex: 1;\n  min-width: 0;\n}\n.test-msg {\n  font-size: 0.8125rem;\n  font-weight: 600;\n}\n.test-meta {\n  font-size: 0.75rem;\n  color: rgb(75, 85, 99);\n  margin-top: 0.25rem;\n}\n.test-json {\n  margin: 0.5rem 0 0;\n  padding: 0.5rem;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 0.7rem;\n  max-height: 8rem;\n  overflow: auto;\n}\n.dialog-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding-top: 1rem;\n  margin-top: 0.25rem;\n  border-top: 1px solid rgb(243, 244, 246);\n}\n.btn-secondary {\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  padding: 0.55rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n  cursor: pointer;\n}\n.btn-secondary:hover {\n  background: rgb(249, 250, 251);\n}\n.btn-primary {\n  border-radius: 10px;\n  border: none;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  padding: 0.55rem 1.1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);\n}\n.btn-primary:hover:not(:disabled) {\n  background: rgb(29, 78, 216);\n}\n.btn-primary:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.btn-danger-ghost {\n  border: none;\n  background: none;\n  color: rgb(220, 38, 38);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0.5rem 0.25rem;\n  margin-right: auto;\n}\n.btn-danger-ghost:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=new-webhook-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewWebhookDialogComponent, { className: "NewWebhookDialogComponent", filePath: "src/app/modules/smart-monitor/webhooks/dialogs/new-webhook-dialog.component.ts", lineNumber: 28 });
})();

// src/app/modules/smart-monitor/webhooks/webhook-stats-bars.component.ts
function WebhookStatsBarsComponent_ng_container_0_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "div", 9)(3, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("title", b_r1.day + ": +" + b_r1.success + " / -" + b_r1.failed);
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", b_r1.failedPct, "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", b_r1.successPct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r1.label);
  }
}
function WebhookStatsBarsComponent_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, WebhookStatsBarsComponent_ng_container_0_div_7_div_1_Template, 6, 6, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.bars);
  }
}
function WebhookStatsBarsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, WebhookStatsBarsComponent_ng_container_0_div_7_Template, 2, 1, "div", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.days === 7 ? t_r3("webhooks.graph.lastWeek") : t_r3("webhooks.graph.balance"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 4, ctx_r1.errorRate, "1.0-1"), "% ", t_r3("webhooks.graph.errorRate"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.bars.length);
  }
}
var WebhookStatsBarsComponent = class _WebhookStatsBarsComponent {
  constructor() {
    this.statistics = null;
    this.days = 7;
    this.lastDays = [];
    this.bars = [];
    this.errorRate = 0;
  }
  ngOnChanges() {
    this.rebuild();
  }
  rebuild() {
    this.lastDays = [];
    for (let i = this.days - 1; i >= 0; i--) {
      this.lastDays.push(DateTime.now().minus({ days: i }).toFormat("yyyy-MM-dd"));
    }
    let totalOk = 0;
    let totalFail = 0;
    let max = 1;
    const raw = this.lastDays.map((day) => {
      const d = this.statistics?.[day];
      const success = d?.success ?? 0;
      const failed = d?.failed ?? 0;
      totalOk += success;
      totalFail += failed;
      const sum = success + failed;
      if (sum > max)
        max = sum;
      return { day, success, failed, sum };
    });
    this.errorRate = totalOk + totalFail > 0 ? totalFail / (totalOk + totalFail) * 100 : 0;
    this.bars = raw.map((r) => ({
      day: r.day,
      success: r.success,
      failed: r.failed,
      successPct: max ? r.success / max * 100 : 0,
      failedPct: max ? r.failed / max * 100 : 0,
      label: DateTime.fromISO(r.day).toFormat("LLL d")
    }));
  }
  static {
    this.\u0275fac = function WebhookStatsBarsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebhookStatsBarsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebhookStatsBarsComponent, selectors: [["webhook-stats-bars"]], inputs: { statistics: "statistics", days: "days" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "stats-head"], [1, "stats-title"], [1, "stats-rate"], ["class", "bars-row", 4, "ngIf"], [1, "bars-row"], ["class", "bar-col", 4, "ngFor", "ngForOf"], [1, "bar-col"], [1, "bar-stack"], [1, "seg", "fail"], [1, "seg", "ok"], [1, "bar-label"]], template: function WebhookStatsBarsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, WebhookStatsBarsComponent_ng_container_0_Template, 8, 7, "ng-container", 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, TranslocoModule, TranslocoDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n}\n.stats-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n.stats-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n}\n.stats-rate[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.bars-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2px;\n  height: 120px;\n  padding-top: 0.25rem;\n  overflow: hidden;\n}\n.bar-col[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.bar-stack[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 28px;\n  height: 88px;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: flex-start;\n  gap: 2px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: rgb(243, 244, 246);\n}\n.seg[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 0;\n  border-radius: 4px;\n  transition: height 0.2s ease;\n}\n.seg.ok[_ngcontent-%COMP%] {\n  background: rgb(59, 130, 246);\n}\n.seg.fail[_ngcontent-%COMP%] {\n  background: rgb(248, 113, 113);\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 0.5625rem;\n  color: rgb(156, 163, 175);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n/*# sourceMappingURL=webhook-stats-bars.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WebhookStatsBarsComponent, [{
    type: Component,
    args: [{ selector: "webhook-stats-bars", standalone: true, imports: [CommonModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="stats-head">
        <span class="stats-title">{{ days === 7 ? t('webhooks.graph.lastWeek') : t('webhooks.graph.balance') }}</span>
        <span class="stats-rate">{{ errorRate | number : '1.0-1' }}% {{ t('webhooks.graph.errorRate') }}</span>
    </div>
    <div class="bars-row" *ngIf="bars.length">
        <div class="bar-col" *ngFor="let b of bars">
            <div class="bar-stack" [attr.title]="b.day + ': +' + b.success + ' / -' + b.failed">
                <div class="seg fail" [style.height.%]="b.failedPct"></div>
                <div class="seg ok" [style.height.%]="b.successPct"></div>
            </div>
            <span class="bar-label">{{ b.label }}</span>
        </div>
    </div>
</ng-container>
`, styles: ["/* src/app/modules/smart-monitor/webhooks/webhook-stats-bars.component.scss */\n:host {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n}\n.stats-head {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n.stats-title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n}\n.stats-rate {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.bars-row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2px;\n  height: 120px;\n  padding-top: 0.25rem;\n  overflow: hidden;\n}\n.bar-col {\n  flex: 1 1 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.bar-stack {\n  width: 100%;\n  max-width: 28px;\n  height: 88px;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: flex-start;\n  gap: 2px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: rgb(243, 244, 246);\n}\n.seg {\n  width: 100%;\n  min-height: 0;\n  border-radius: 4px;\n  transition: height 0.2s ease;\n}\n.seg.ok {\n  background: rgb(59, 130, 246);\n}\n.seg.fail {\n  background: rgb(248, 113, 113);\n}\n.bar-label {\n  font-size: 0.5625rem;\n  color: rgb(156, 163, 175);\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n/*# sourceMappingURL=webhook-stats-bars.component.css.map */\n"] }]
  }], null, { statistics: [{
    type: Input
  }], days: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebhookStatsBarsComponent, { className: "WebhookStatsBarsComponent", filePath: "src/app/modules/smart-monitor/webhooks/webhook-stats-bars.component.ts", lineNumber: 15 });
})();

export {
  WebhooksService,
  NewWebhookDialogComponent,
  WebhookStatsBarsComponent
};
//# sourceMappingURL=chunk-A4AICJFH.js.map
