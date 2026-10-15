import {
  MASKED_OTP,
  PhoneValidationsService,
  buildOtpPreviewBody,
  formatMessagePhone,
  resolveMessageSource,
  resolveSenderTitle
} from "./chunk-KE2CZ2A2.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-O4LKJP5L.js";
import "./chunk-F5BVEUVX.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CTAWHRE6.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-7FACNXV2.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-NBA3XD53.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EIYDU75T.js";
import "./chunk-IXSC6NFZ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-VENEX45A.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-DM2XPT7T.js";
import "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I5BUD46C.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-tools/communication/message-detail.component.ts
function MessageDetailComponent_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-progress-spinner", 13);
    \u0275\u0275elementEnd();
  }
}
function MessageDetailComponent_ng_container_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("communication_messages.detail.not_found"), " ");
  }
}
function MessageDetailComponent_ng_container_0_div_14_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("communication_messages.detail.expires"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, ctx_r1.record.expiresAt, "medium"));
  }
}
function MessageDetailComponent_ng_container_0_div_14_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.senderName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("communication_messages.compose.preview_sender"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.senderName);
  }
}
function MessageDetailComponent_ng_container_0_div_14_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.senderName);
  }
}
function MessageDetailComponent_ng_container_0_div_14_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("communication_messages.compose.preview_powered_by"), " ");
  }
}
function MessageDetailComponent_ng_container_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "section", 16)(2, "h2", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dl", 18)(5, "div", 19)(6, "dt");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "dd");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 19)(11, "dt");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "dd")(14, "span", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 19)(17, "dt");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd")(20, "span", 21);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 19)(23, "dt");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 19)(28, "dt");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dd");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 19)(33, "dt");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "dd");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 19)(38, "dt");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "dd");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 19)(43, "dt");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "dd", 22);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 19)(48, "dt");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "dd");
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, MessageDetailComponent_ng_container_0_div_14_div_53_Template, 6, 5, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "section", 24)(55, "h2", 17);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 25);
    \u0275\u0275element(58, "div", 26);
    \u0275\u0275elementStart(59, "div", 27);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 28);
    \u0275\u0275template(62, MessageDetailComponent_ng_container_0_div_14_Conditional_62_Template, 8, 3, "div", 29);
    \u0275\u0275elementStart(63, "div", 30);
    \u0275\u0275template(64, MessageDetailComponent_ng_container_0_div_14_Conditional_64_Template, 2, 1, "div", 31);
    \u0275\u0275elementStart(65, "p", 32);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, MessageDetailComponent_ng_container_0_div_14_Conditional_67_Template, 2, 1, "div", 33);
    \u0275\u0275elementStart(68, "span", 34);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "date");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("communication_messages.detail.sent_details"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("communication_messages.list.columns.phone"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.previewPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("communication_messages.list.columns.status"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-status", ctx_r1.record.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.record.status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("communication_messages.list.columns.source"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.sourceKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("communication_messages.list.columns.project"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.projectLabel);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("communication_messages.detail.gateway"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.record.phoneGateway);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("communication_messages.compose.language"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.record.language || "en");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("communication_messages.detail.type"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.record.type || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("communication_messages.detail.otp"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.maskedOtp);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("communication_messages.list.columns.created"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 34, ctx_r1.record.createdAt, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.record.expiresAt);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("communication_messages.compose.preview_title"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("whatsapp", (ctx_r1.record.phoneGateway || ctx_r1.phoneGateway) === "whatsapp")("sms", (ctx_r1.record.phoneGateway || ctx_r1.phoneGateway) === "sms");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.previewPhone);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.record.phoneGateway || ctx_r1.phoneGateway) === "sms" ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("template", (ctx_r1.record.phoneGateway || ctx_r1.phoneGateway) === "whatsapp");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.record.phoneGateway || ctx_r1.phoneGateway) === "whatsapp" ? 64 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.previewBody);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.record.phoneGateway || ctx_r1.phoneGateway) === "whatsapp" ? 67 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 37, ctx_r1.record.createdAt, "shortTime"));
  }
}
function MessageDetailComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "header", 3)(4, "button", 4);
    \u0275\u0275listener("click", function MessageDetailComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(5, "mat-icon", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "h1", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, MessageDetailComponent_ng_container_0_div_12_Template, 2, 0, "div", 9)(13, MessageDetailComponent_ng_container_0_div_13_Template, 2, 1, "div", 10)(14, MessageDetailComponent_ng_container_0_div_14_Template, 71, 40, "div", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r3("communication_messages.compose.back"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3(ctx_r1.titleKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("communication_messages.detail.subtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && !ctx_r1.record);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.record);
  }
}
var MessageDetailComponent = class _MessageDetailComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._service = inject(PhoneValidationsService);
    this._cdr = inject(ChangeDetectorRef);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this.phoneGateway = "whatsapp";
    this.loading = true;
    this.record = null;
    this.maskedOtp = MASKED_OTP;
  }
  ngOnInit() {
    this.phoneGateway = this._route.snapshot.data["phoneGateway"] || "whatsapp";
    const id = this._route.snapshot.paramMap.get("id");
    if (!id) {
      this.goBack();
      return;
    }
    this._service.getById(id).subscribe({
      next: (response) => {
        this.record = response?.data || null;
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.record = null;
        this._cdr.markForCheck();
        this._snack.open(this._transloco.translate("communication_messages.detail.load_error"), void 0, { duration: 3e3 });
      }
    });
  }
  get listLink() {
    return this.phoneGateway === "sms" ? "/smart-tools/sms-messages" : "/smart-tools/whatsapp-messages";
  }
  get titleKey() {
    return this.phoneGateway === "sms" ? "communication_messages.detail.title_sms" : "communication_messages.detail.title_whatsapp";
  }
  get senderName() {
    return resolveSenderTitle(this.record);
  }
  get previewPhone() {
    return formatMessagePhone(this.record) || "\u2014";
  }
  get previewBody() {
    return buildOtpPreviewBody(this.record?.phoneGateway || this.phoneGateway, this.senderName, this.record?.language || "en", this.maskedOtp);
  }
  get sourceKey() {
    return "communication_messages.list.source." + resolveMessageSource(this.record);
  }
  get projectLabel() {
    return this.record?.project?.name || "\u2014";
  }
  goBack() {
    this._router.navigateByUrl(this.listLink);
  }
  static {
    this.\u0275fac = function MessageDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessageDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageDetailComponent, selectors: [["communication-message-detail"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "page"], [1, "inner"], [1, "hero"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["svgIcon", "heroicons_outline:arrow-left"], [1, "hero-text"], [1, "title"], [1, "subtitle"], ["class", "state-loading", 4, "ngIf"], ["class", "empty", 4, "ngIf"], ["class", "layout", 4, "ngIf"], [1, "state-loading"], ["diameter", "40", "mode", "indeterminate"], [1, "empty"], [1, "layout"], [1, "details-panel"], [1, "panel-heading"], [1, "details-grid"], [1, "detail-row"], [1, "status"], [1, "badge"], [1, "otp-mask"], ["class", "detail-row", 4, "ngIf"], [1, "preview-panel"], [1, "phone-frame"], [1, "phone-notch"], [1, "phone-status"], [1, "chat"], [1, "chat-header"], [1, "bubble"], [1, "bubble-title"], [1, "bubble-body"], [1, "bubble-footer"], [1, "time"], [1, "avatar"], [1, "sender-label"], [1, "sender-name"]], template: function MessageDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MessageDetailComponent_ng_container_0_Template, 15, 6, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      DatePipe,
      RouterModule,
      TranslocoModule,
      TranslocoDirective,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 1.5rem 1.25rem 2.5rem;\n  background: rgb(249, 250, 251);\n}\n.inner[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n.hero-text[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(17, 24, 39);\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: rgb(107, 114, 128);\n}\n.state-loading[_ngcontent-%COMP%], \n.empty[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 220px;\n  color: rgb(107, 114, 128);\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(280px, 1fr) minmax(280px, 1fr);\n  gap: 1.5rem;\n  align-items: start;\n}\n.details-panel[_ngcontent-%COMP%], \n.preview-panel[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 1rem;\n  padding: 1.25rem;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.panel-heading[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n}\n.details-grid[_ngcontent-%COMP%] {\n  margin: 0;\n  display: grid;\n  gap: 0.85rem;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(110px, 0.9fr) 1.4fr;\n  gap: 0.75rem;\n  align-items: baseline;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n  padding-bottom: 0;\n}\n.detail-row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: rgb(100, 116, 139);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.detail-row[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n  color: rgb(15, 23, 42);\n  word-break: break-word;\n}\n.otp-mask[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  letter-spacing: 0.08em;\n}\n.status[_ngcontent-%COMP%], \n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.15rem 0.55rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n  background: rgb(241, 245, 249);\n  color: rgb(51, 65, 85);\n}\n.status[data-status=sent][_ngcontent-%COMP%] {\n  background: rgb(220, 252, 231);\n  color: #15803d;\n}\n.status[data-status=validated][_ngcontent-%COMP%] {\n  background: rgb(219, 234, 254);\n  color: #1d4ed8;\n}\n.status[data-status=failed][_ngcontent-%COMP%] {\n  background: rgb(254, 226, 226);\n  color: #b91c1c;\n}\n.phone-frame[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  width: min(100%, 320px);\n  min-height: 520px;\n  border-radius: 2rem;\n  border: 10px solid #1f2937;\n  background: #ece5dd;\n  overflow: hidden;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);\n}\n.phone-frame.whatsapp[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgb(236, 229, 221) 0%,\n      rgb(229, 221, 213) 100%);\n  color: #111827;\n}\n.phone-frame.sms[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #111827;\n}\n.phone-notch[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.55rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 38%;\n  height: 1.1rem;\n  border-radius: 999px;\n  background: #1f2937;\n  z-index: 2;\n}\n.phone-status[_ngcontent-%COMP%] {\n  padding: 1.75rem 1rem 0.5rem;\n  text-align: center;\n  font-size: 0.75rem;\n  color: rgb(75, 85, 99);\n}\n.chat[_ngcontent-%COMP%] {\n  min-height: 440px;\n  padding: 0.75rem;\n}\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  padding: 0.65rem 0.75rem;\n  border-radius: 0.75rem;\n  background: rgba(255, 255, 255, 0.85);\n  border: 1px solid rgb(229, 231, 235);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 999px;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  background: #25d366;\n  color: #052e16;\n}\n.phone-frame.sms[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #eff6ff;\n}\n.sender-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgb(107, 114, 128);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.sender-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n}\n.bubble[_ngcontent-%COMP%] {\n  max-width: 88%;\n  margin-left: auto;\n  border-radius: 1rem 1rem 0.25rem 1rem;\n  padding: 0.85rem 0.95rem;\n  background: #dcf8c6;\n  color: #0f172a;\n  box-shadow: 0 1px 1px rgba(15, 23, 42, 0.08);\n}\n.phone-frame.whatsapp[_ngcontent-%COMP%]   .bubble.template[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: auto;\n  border-radius: 0.25rem 1rem 1rem 1rem;\n  background: #fff;\n  box-shadow: 0 1px 1px rgba(15, 23, 42, 0.1);\n}\n.phone-frame.sms[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #0f172a;\n  border-radius: 1rem 1rem 1rem 0.25rem;\n  margin-left: 0;\n  margin-right: auto;\n}\n.bubble-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.3;\n}\n.bubble-body[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: pre-wrap;\n  line-height: 1.4;\n  font-size: 0.9rem;\n}\n.phone-frame.whatsapp[_ngcontent-%COMP%]   .bubble.template[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #1f2937;\n}\n.bubble-footer[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n  font-size: 0.75rem;\n  font-style: normal;\n  color: rgb(107, 114, 128);\n  line-height: 1.3;\n}\n.time[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.45rem;\n  font-size: 0.7rem;\n  text-align: right;\n  color: rgb(100, 116, 139);\n}\n@media (max-width: 900px) {\n  .layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dark[_nghost-%COMP%]   .page[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .page[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.dark[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .panel-heading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .panel-heading[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .detail-row[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .detail-row[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .sender-name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sender-name[_ngcontent-%COMP%] {\n  color: rgb(241, 245, 249);\n}\n.dark[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .state-loading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .state-loading[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .empty[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .sender-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sender-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .phone-status[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-status[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .time[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .details-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .details-panel[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .preview-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .preview-panel[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgb(51, 65, 85);\n  box-shadow: none;\n}\n.dark[_nghost-%COMP%]   .detail-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  border-bottom-color: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .detail-row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .detail-row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .status[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgb(51, 65, 85);\n  color: rgb(226, 232, 240);\n}\n.dark[_nghost-%COMP%]   .status[data-status=sent][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status[data-status=sent][_ngcontent-%COMP%] {\n  background: rgba(20, 83, 45, 0.45);\n  color: #86efac;\n}\n.dark[_nghost-%COMP%]   .status[data-status=validated][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status[data-status=validated][_ngcontent-%COMP%] {\n  background: rgba(30, 58, 138, 0.45);\n  color: #93c5fd;\n}\n.dark[_nghost-%COMP%]   .status[data-status=failed][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status[data-status=failed][_ngcontent-%COMP%] {\n  background: rgba(127, 29, 29, 0.45);\n  color: #fca5a5;\n}\n.dark[_nghost-%COMP%]   .phone-frame[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-frame[_ngcontent-%COMP%] {\n  border-color: #111827;\n  background: #0b1220;\n  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .phone-frame.whatsapp[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-frame.whatsapp[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #0b141a 0%,\n      #111b21 40%,\n      #0b141a 100%);\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .phone-frame.sms[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-frame.sms[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  background: #111827;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .chat-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chat-header[_ngcontent-%COMP%] {\n  background: rgba(17, 24, 39, 0.85);\n  border-color: rgb(55, 65, 81);\n}\n.dark[_nghost-%COMP%]   .bubble[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  background: #005c4b;\n  color: #e7ffee;\n  box-shadow: none;\n}\n.dark[_nghost-%COMP%]   .phone-frame.whatsapp[_ngcontent-%COMP%]   .bubble.template[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-frame.whatsapp[_ngcontent-%COMP%]   .bubble.template[_ngcontent-%COMP%] {\n  background: #202c33;\n  color: #e9edef;\n}\n.dark[_nghost-%COMP%]   .bubble-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .bubble-title[_ngcontent-%COMP%] {\n  color: #e9edef;\n}\n.dark[_nghost-%COMP%]   .phone-frame.whatsapp[_ngcontent-%COMP%]   .bubble.template[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-frame.whatsapp[_ngcontent-%COMP%]   .bubble.template[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%] {\n  color: #e9edef;\n}\n.dark[_nghost-%COMP%]   .bubble-footer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .bubble-footer[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .phone-frame.sms[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-frame.sms[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  background: #1e3a8a;\n  color: #eff6ff;\n}\n.dark[_nghost-%COMP%]   .time[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n/*# sourceMappingURL=message-detail.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageDetailComponent, [{
    type: Component,
    args: [{ selector: "communication-message-detail", standalone: true, imports: [
      CommonModule,
      RouterModule,
      TranslocoModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSnackBarModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="page">\r
        <div class="inner">\r
            <header class="hero">\r
                <button mat-stroked-button type="button" (click)="goBack()">\r
                    <mat-icon svgIcon="heroicons_outline:arrow-left"></mat-icon>\r
                    {{ t('communication_messages.compose.back') }}\r
                </button>\r
                <div class="hero-text">\r
                    <h1 class="title">{{ t(titleKey) }}</h1>\r
                    <p class="subtitle">\r
                        {{ t('communication_messages.detail.subtitle') }}\r
                    </p>\r
                </div>\r
            </header>\r
\r
            <div *ngIf="loading" class="state-loading">\r
                <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>\r
            </div>\r
\r
            <div class="empty" *ngIf="!loading && !record">\r
                {{ t('communication_messages.detail.not_found') }}\r
            </div>\r
\r
            <div class="layout" *ngIf="!loading && record">\r
                <section class="details-panel">\r
                    <h2 class="panel-heading">\r
                        {{ t('communication_messages.detail.sent_details') }}\r
                    </h2>\r
\r
                    <dl class="details-grid">\r
                        <div class="detail-row">\r
                            <dt>{{ t('communication_messages.list.columns.phone') }}</dt>\r
                            <dd>{{ previewPhone }}</dd>\r
                        </div>\r
                        <div class="detail-row">\r
                            <dt>{{ t('communication_messages.list.columns.status') }}</dt>\r
                            <dd>\r
                                <span class="status" [attr.data-status]="record.status">{{\r
                                    record.status\r
                                }}</span>\r
                            </dd>\r
                        </div>\r
                        <div class="detail-row">\r
                            <dt>{{ t('communication_messages.list.columns.source') }}</dt>\r
                            <dd>\r
                                <span class="badge">{{ t(sourceKey) }}</span>\r
                            </dd>\r
                        </div>\r
                        <div class="detail-row">\r
                            <dt>{{ t('communication_messages.list.columns.project') }}</dt>\r
                            <dd>{{ projectLabel }}</dd>\r
                        </div>\r
                        <div class="detail-row">\r
                            <dt>{{ t('communication_messages.detail.gateway') }}</dt>\r
                            <dd>{{ record.phoneGateway }}</dd>\r
                        </div>\r
                        <div class="detail-row">\r
                            <dt>{{ t('communication_messages.compose.language') }}</dt>\r
                            <dd>{{ record.language || 'en' }}</dd>\r
                        </div>\r
                        <div class="detail-row">\r
                            <dt>{{ t('communication_messages.detail.type') }}</dt>\r
                            <dd>{{ record.type || '\u2014' }}</dd>\r
                        </div>\r
                        <div class="detail-row">\r
                            <dt>{{ t('communication_messages.detail.otp') }}</dt>\r
                            <dd class="otp-mask">{{ maskedOtp }}</dd>\r
                        </div>\r
                        <div class="detail-row">\r
                            <dt>{{ t('communication_messages.list.columns.created') }}</dt>\r
                            <dd>{{ record.createdAt | date: 'medium' }}</dd>\r
                        </div>\r
                        <div class="detail-row" *ngIf="record.expiresAt">\r
                            <dt>{{ t('communication_messages.detail.expires') }}</dt>\r
                            <dd>{{ record.expiresAt | date: 'medium' }}</dd>\r
                        </div>\r
                    </dl>\r
                </section>\r
\r
                <section class="preview-panel">\r
                    <h2 class="panel-heading">\r
                        {{ t('communication_messages.compose.preview_title') }}\r
                    </h2>\r
\r
                    <div\r
                        class="phone-frame"\r
                        [class.whatsapp]="(record.phoneGateway || phoneGateway) === 'whatsapp'"\r
                        [class.sms]="(record.phoneGateway || phoneGateway) === 'sms'"\r
                    >\r
                        <div class="phone-notch"></div>\r
                        <div class="phone-status">{{ previewPhone }}</div>\r
                        <div class="chat">\r
                            @if ((record.phoneGateway || phoneGateway) === 'sms') {\r
                                <div class="chat-header">\r
                                    <div class="avatar">{{ senderName.charAt(0) }}</div>\r
                                    <div>\r
                                        <div class="sender-label">\r
                                            {{\r
                                                t(\r
                                                    'communication_messages.compose.preview_sender'\r
                                                )\r
                                            }}\r
                                        </div>\r
                                        <div class="sender-name">{{ senderName }}</div>\r
                                    </div>\r
                                </div>\r
                            }\r
                            <div\r
                                class="bubble"\r
                                [class.template]="\r
                                    (record.phoneGateway || phoneGateway) === 'whatsapp'\r
                                "\r
                            >\r
                                @if ((record.phoneGateway || phoneGateway) === 'whatsapp') {\r
                                    <div class="bubble-title">{{ senderName }}</div>\r
                                }\r
                                <p class="bubble-body">{{ previewBody }}</p>\r
                                @if ((record.phoneGateway || phoneGateway) === 'whatsapp') {\r
                                    <div class="bubble-footer">\r
                                        {{\r
                                            t(\r
                                                'communication_messages.compose.preview_powered_by'\r
                                            )\r
                                        }}\r
                                    </div>\r
                                }\r
                                <span class="time">{{\r
                                    record.createdAt | date: 'shortTime'\r
                                }}</span>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </section>\r
            </div>\r
        </div>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/smart-tools/communication/message-detail.component.scss */\n:host {\n  display: block;\n}\n.page {\n  min-height: 100%;\n  padding: 1.5rem 1.25rem 2.5rem;\n  background: rgb(249, 250, 251);\n}\n.inner {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.hero {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n.hero-text {\n  flex: 1 1 auto;\n}\n.title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(17, 24, 39);\n}\n.subtitle {\n  margin: 0.25rem 0 0;\n  color: rgb(107, 114, 128);\n}\n.state-loading,\n.empty {\n  display: grid;\n  place-items: center;\n  min-height: 220px;\n  color: rgb(107, 114, 128);\n}\n.layout {\n  display: grid;\n  grid-template-columns: minmax(280px, 1fr) minmax(280px, 1fr);\n  gap: 1.5rem;\n  align-items: start;\n}\n.details-panel,\n.preview-panel {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 1rem;\n  padding: 1.25rem;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.panel-heading {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n}\n.details-grid {\n  margin: 0;\n  display: grid;\n  gap: 0.85rem;\n}\n.detail-row {\n  display: grid;\n  grid-template-columns: minmax(110px, 0.9fr) 1.4fr;\n  gap: 0.75rem;\n  align-items: baseline;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.detail-row:last-child {\n  border-bottom: 0;\n  padding-bottom: 0;\n}\n.detail-row dt {\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: rgb(100, 116, 139);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.detail-row dd {\n  margin: 0;\n  font-weight: 500;\n  color: rgb(15, 23, 42);\n  word-break: break-word;\n}\n.otp-mask {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  letter-spacing: 0.08em;\n}\n.status,\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.15rem 0.55rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: capitalize;\n  background: rgb(241, 245, 249);\n  color: rgb(51, 65, 85);\n}\n.status[data-status=sent] {\n  background: rgb(220, 252, 231);\n  color: #15803d;\n}\n.status[data-status=validated] {\n  background: rgb(219, 234, 254);\n  color: #1d4ed8;\n}\n.status[data-status=failed] {\n  background: rgb(254, 226, 226);\n  color: #b91c1c;\n}\n.phone-frame {\n  position: relative;\n  margin: 0 auto;\n  width: min(100%, 320px);\n  min-height: 520px;\n  border-radius: 2rem;\n  border: 10px solid #1f2937;\n  background: #ece5dd;\n  overflow: hidden;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);\n}\n.phone-frame.whatsapp .chat {\n  background:\n    linear-gradient(\n      180deg,\n      rgb(236, 229, 221) 0%,\n      rgb(229, 221, 213) 100%);\n  color: #111827;\n}\n.phone-frame.sms .chat {\n  background: #f3f4f6;\n  color: #111827;\n}\n.phone-notch {\n  position: absolute;\n  top: 0.55rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 38%;\n  height: 1.1rem;\n  border-radius: 999px;\n  background: #1f2937;\n  z-index: 2;\n}\n.phone-status {\n  padding: 1.75rem 1rem 0.5rem;\n  text-align: center;\n  font-size: 0.75rem;\n  color: rgb(75, 85, 99);\n}\n.chat {\n  min-height: 440px;\n  padding: 0.75rem;\n}\n.chat-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  padding: 0.65rem 0.75rem;\n  border-radius: 0.75rem;\n  background: rgba(255, 255, 255, 0.85);\n  border: 1px solid rgb(229, 231, 235);\n}\n.avatar {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 999px;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  background: #25d366;\n  color: #052e16;\n}\n.phone-frame.sms .avatar {\n  background: #2563eb;\n  color: #eff6ff;\n}\n.sender-label {\n  font-size: 0.7rem;\n  color: rgb(107, 114, 128);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.sender-name {\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n}\n.bubble {\n  max-width: 88%;\n  margin-left: auto;\n  border-radius: 1rem 1rem 0.25rem 1rem;\n  padding: 0.85rem 0.95rem;\n  background: #dcf8c6;\n  color: #0f172a;\n  box-shadow: 0 1px 1px rgba(15, 23, 42, 0.08);\n}\n.phone-frame.whatsapp .bubble.template {\n  margin-left: 0;\n  margin-right: auto;\n  border-radius: 0.25rem 1rem 1rem 1rem;\n  background: #fff;\n  box-shadow: 0 1px 1px rgba(15, 23, 42, 0.1);\n}\n.phone-frame.sms .bubble {\n  background: #dbeafe;\n  color: #0f172a;\n  border-radius: 1rem 1rem 1rem 0.25rem;\n  margin-left: 0;\n  margin-right: auto;\n}\n.bubble-title {\n  margin: 0 0 0.35rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.3;\n}\n.bubble-body {\n  margin: 0;\n  white-space: pre-wrap;\n  line-height: 1.4;\n  font-size: 0.9rem;\n}\n.phone-frame.whatsapp .bubble.template .bubble-body {\n  font-style: italic;\n  color: #1f2937;\n}\n.bubble-footer {\n  margin-top: 0.55rem;\n  font-size: 0.75rem;\n  font-style: normal;\n  color: rgb(107, 114, 128);\n  line-height: 1.3;\n}\n.time {\n  display: block;\n  margin-top: 0.45rem;\n  font-size: 0.7rem;\n  text-align: right;\n  color: rgb(100, 116, 139);\n}\n@media (max-width: 900px) {\n  .layout {\n    grid-template-columns: 1fr;\n  }\n}\n:host-context(.dark) .page {\n  background: transparent;\n}\n:host-context(.dark) .title,\n:host-context(.dark) .panel-heading,\n:host-context(.dark) .detail-row dd,\n:host-context(.dark) .sender-name {\n  color: rgb(241, 245, 249);\n}\n:host-context(.dark) .subtitle,\n:host-context(.dark) .state-loading,\n:host-context(.dark) .empty,\n:host-context(.dark) .sender-label,\n:host-context(.dark) .phone-status,\n:host-context(.dark) .time {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .details-panel,\n:host-context(.dark) .preview-panel {\n  background: rgb(30, 41, 59);\n  border-color: rgb(51, 65, 85);\n  box-shadow: none;\n}\n:host-context(.dark) .detail-row {\n  border-bottom-color: rgb(51, 65, 85);\n}\n:host-context(.dark) .detail-row dt {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .status,\n:host-context(.dark) .badge {\n  background: rgb(51, 65, 85);\n  color: rgb(226, 232, 240);\n}\n:host-context(.dark) .status[data-status=sent] {\n  background: rgba(20, 83, 45, 0.45);\n  color: #86efac;\n}\n:host-context(.dark) .status[data-status=validated] {\n  background: rgba(30, 58, 138, 0.45);\n  color: #93c5fd;\n}\n:host-context(.dark) .status[data-status=failed] {\n  background: rgba(127, 29, 29, 0.45);\n  color: #fca5a5;\n}\n:host-context(.dark) .phone-frame {\n  border-color: #111827;\n  background: #0b1220;\n  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .phone-frame.whatsapp .chat {\n  background:\n    linear-gradient(\n      180deg,\n      #0b141a 0%,\n      #111b21 40%,\n      #0b141a 100%);\n  color: #e2e8f0;\n}\n:host-context(.dark) .phone-frame.sms .chat {\n  background: #111827;\n  color: #e2e8f0;\n}\n:host-context(.dark) .chat-header {\n  background: rgba(17, 24, 39, 0.85);\n  border-color: rgb(55, 65, 81);\n}\n:host-context(.dark) .bubble {\n  background: #005c4b;\n  color: #e7ffee;\n  box-shadow: none;\n}\n:host-context(.dark) .phone-frame.whatsapp .bubble.template {\n  background: #202c33;\n  color: #e9edef;\n}\n:host-context(.dark) .bubble-title {\n  color: #e9edef;\n}\n:host-context(.dark) .phone-frame.whatsapp .bubble.template .bubble-body {\n  color: #e9edef;\n}\n:host-context(.dark) .bubble-footer {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .phone-frame.sms .bubble {\n  background: #1e3a8a;\n  color: #eff6ff;\n}\n:host-context(.dark) .time {\n  color: rgb(148, 163, 184);\n}\n/*# sourceMappingURL=message-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageDetailComponent, { className: "MessageDetailComponent", filePath: "src/app/modules/smart-tools/communication/message-detail.component.ts", lineNumber: 43 });
})();
export {
  MessageDetailComponent
};
//# sourceMappingURL=chunk-FCRKIM7H.js.map
