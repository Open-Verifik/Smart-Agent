import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-NBA3XD53.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EIYDU75T.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoDirective,
  TranslocoModule
} from "./chunk-VENEX45A.js";
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  CommonModule,
  Component,
  DomSanitizer,
  EventEmitter,
  HttpClient,
  HttpHeaders,
  Injectable,
  Input,
  Output,
  Subject,
  debounceTime,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I5BUD46C.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/core/project-flow-otp-email/otp-email-template.types.ts
var normalizeEmailTemplateDesign = (design) => design === "custom" || design === "tcc" ? "custom" : "standard";
var OTP_CONTENT_HTML_VARIABLES = {
  standard: [
    { token: "greeting", slot: "greeting" },
    { token: "message", slot: "message" },
    { token: "do_not_share", slot: "doNotShare" },
    { token: "did_not_request", slot: "didNotRequest" },
    { token: "buttonText", slot: "buttonText" },
    { token: "otp" },
    { token: "subject" },
    { token: "authLink" },
    { token: "projectName" },
    { token: "logo" },
    { token: "buttonColor" },
    { token: "buttonTxtColor" }
  ],
  custom: [
    { token: "greeting", slot: "greeting" },
    { token: "message", slot: "message" },
    { token: "otp_label", slot: "otpLabel" },
    { token: "do_not_share", slot: "doNotShare" },
    { token: "did_not_request", slot: "didNotRequest" },
    { token: "signature", slot: "signature" },
    { token: "footer_note", slot: "footerNote" },
    { token: "otp" },
    { token: "subject" },
    { token: "projectName" },
    { token: "logo" },
    { token: "address" },
    { token: "buttonColor" },
    { token: "buttonTxtColor" }
  ]
};
var GENERIC_FULL_EMAIL_HTML = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title><%= subject %></title>
</head>
<body style="margin:0;padding:0;width:100%;background-color:#f5f5f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1c1917;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#f5f5f4;"><%= subject %></div>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background-color:#f5f5f4;" bgcolor="#f5f5f4">
<tbody>
<tr>
<td align="center" valign="top" style="padding:32px 16px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:separate;max-width:600px;width:100%;margin:0 auto;background-color:#ffffff;border:1px solid #e7e5e4;border-radius:16px;overflow:hidden;">
<tbody>
<tr>
<td style="padding:0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
<tbody>
<tr>
<td align="center" valign="middle" style="padding:40px 40px 24px;border-bottom:1px solid #f5f5f4;font-size:0;line-height:0;">
<img alt="<%= projectName %>" src="<%= logo %>" height="96" style="display:inline-block;height:96px;max-height:96px;width:auto;max-width:280px;min-width:64px;outline:none;border:0;text-decoration:none;" />
</td>
</tr>
</tbody>
</table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
<tbody>
<tr>
<td style="padding:32px 40px 40px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1c1917;">
<p style="margin:0 0 18px;font-size:18px;line-height:26px;font-weight:600;color:#1c1917;text-align:left;"><%- greeting %></p>
<p style="margin:0 0 24px;font-size:15px;line-height:24px;font-weight:400;color:#57534e;text-align:left;"><%= message %></p>
<p style="margin:0 0 12px;font-size:13px;line-height:20px;font-weight:600;color:#44403c;text-align:left;"><%= otp_label %></p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;">
<tbody>
<tr>
<td align="center" style="padding:20px 24px;background-color:#f8fafc;border:2px solid #cbd5e1;border-radius:12px;">
<div style="font-family:'SF Mono',SFMono-Regular,ui-monospace,Menlo,Consolas,monospace;font-size:30px;line-height:38px;font-weight:700;letter-spacing:8px;color:<%= buttonColor %>;text-align:center;padding-left:8px;"><%= otp %></div>
</td>
</tr>
</tbody>
</table>
<p style="margin:28px 0 0;font-size:13px;line-height:20px;font-weight:400;color:#78716c;text-align:left;"><%= footer_note %></p>
<p style="margin:24px 0 0;font-size:13px;line-height:20px;font-weight:400;color:#78716c;text-align:left;"><%= do_not_share %></p>
<p style="margin:8px 0 0;font-size:13px;line-height:20px;font-weight:400;color:#78716c;text-align:left;"><%= did_not_request %></p>
<p style="margin:28px 0 0;font-size:14px;line-height:20px;font-weight:400;color:#57534e;text-align:left;"><%= signature %></p>
<p style="margin:4px 0 0;font-size:15px;line-height:22px;font-weight:600;color:#1c1917;text-align:left;"><%= projectName %></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;max-width:600px;width:100%;margin:0 auto;">
<tbody>
<tr>
<td align="center" valign="top" style="padding:24px 32px 8px;text-align:center;">
<p style="margin:0 0 8px;font-size:12px;line-height:18px;font-weight:400;color:#a8a29e;"><%= address %></p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</body>
</html>`;
var TCC_FULL_EMAIL_HTML = `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title><%= subject %></title>
</head>
<body style="margin:0;padding:0;width:100%;background-color:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#000000;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#ffffff;"><%= subject %></div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;color:#000000;font-size:17px;max-width:600px;margin:0 auto;">
<tbody>
<tr>
<td style="padding:0;">
<img src="https://cdn.smemails.com/tecco/images/tecco_01.jpg" alt="TECCO BY TCC" width="600" style="display:block;border:0;width:100%;max-width:600px;height:auto;" />
</td>
</tr>
<tr>
<td style="padding:28px 32px 8px;line-height:24px;"><%- greeting %></td>
</tr>
<tr>
<td style="padding:0 32px 8px;line-height:24px;"><%= message %></td>
</tr>
<tr>
<td style="padding:16px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tbody>
<tr>
<td align="center" bgcolor="#EDEDED" style="padding:18px 12px;font-weight:bold;font-size:26px;letter-spacing:6px;text-align:center;border-radius:6px;"><%= otp %></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style="padding:8px 32px 28px;line-height:24px;"><%= did_not_request %></td>
</tr>
</tbody>
</table>
</body>
</html>`;
var OTP_EMAIL_TEMPLATE_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Espa\xF1ol" },
  { code: "pt", label: "Portugu\xEAs" },
  { code: "fr", label: "Fran\xE7ais" },
  { code: "ja", label: "\u65E5\u672C\u8A9E" },
  { code: "ko", label: "\uD55C\uAD6D\uC5B4" },
  { code: "zh", label: "\u4E2D\u6587" }
];
var EMPTY_OTP_EMAIL_TEMPLATE_FORM = {
  subject: "",
  message: "",
  doNotShare: "",
  didNotRequest: "",
  buttonText: "",
  buttonColor: "",
  buttonTxtColor: "",
  showButton: true,
  greeting: "",
  otpLabel: "",
  signature: "",
  footerNote: "",
  contentHtml: "",
  htmlSlotStatus: {}
};
var buildOtpEmailTemplatesForm = (emailTemplates, branding) => {
  const formValues = {};
  for (const lang of OTP_EMAIL_TEMPLATE_LANGUAGES) {
    const et = emailTemplates?.[lang.code] ?? {};
    formValues[lang.code] = {
      subject: et.subject ?? "",
      message: et.message ?? "",
      doNotShare: et.doNotShare ?? "",
      didNotRequest: et.didNotRequest ?? "",
      buttonText: et.buttonText ?? "",
      buttonColor: et.buttonColor || branding.buttonColor || "#4f46e5",
      buttonTxtColor: et.buttonTxtColor || branding.buttonTextColor || "#FFFFFF",
      showButton: et.showButton !== false,
      greeting: et.greeting ?? "",
      otpLabel: et.otpLabel ?? "",
      signature: et.signature ?? "",
      footerNote: et.footerNote ?? "",
      contentHtml: et.contentHtml ?? "",
      htmlSlotStatus: et.htmlSlotStatus ?? {}
    };
  }
  return formValues;
};

// src/app/core/project-flow-otp-email/project-flow-otp-email.service.ts
var ProjectFlowOtpEmailService = class _ProjectFlowOtpEmailService {
  constructor() {
    this._http = inject(HttpClient);
    this.apiUrl = environment.apiUrl;
  }
  authHeaders() {
    const token = localStorage.getItem("accessToken") || "";
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  getPreview(flowId, language, emailTemplate, emailTemplateDesign) {
    const params = { language };
    if (emailTemplate) {
      params["emailTemplate"] = JSON.stringify(emailTemplate);
    }
    if (emailTemplateDesign) {
      params["emailTemplateDesign"] = emailTemplateDesign;
    }
    return this._http.get(`${this.apiUrl}/v2/project-flows/${flowId}/email-preview`, { params, headers: this.authHeaders() });
  }
  sendTestEmail(flowId, payload) {
    return this._http.post(`${this.apiUrl}/v2/project-flows/${flowId}/test-email`, payload, { headers: this.authHeaders() });
  }
  updateEmailTemplateSettings(flowId, payload) {
    return this._http.put(`${this.apiUrl}/v2/project-flows/${flowId}`, payload, { headers: this.authHeaders() });
  }
  static {
    this.\u0275fac = function ProjectFlowOtpEmailService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectFlowOtpEmailService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectFlowOtpEmailService, factory: _ProjectFlowOtpEmailService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectFlowOtpEmailService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/project-flow-otp-email/project-flow-otp-email-editor.component.ts
var _forTrack0 = ($index, $item) => $item.code;
var _forTrack1 = ($index, $item) => $item.token;
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.layoutCustomDescription"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.description"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_For_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.layoutStandard"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.layoutCustom"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_For_18_Template_button_click_0_listener() {
      const design_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectDesign(design_r5));
    });
    \u0275\u0275template(1, ProjectFlowOtpEmailEditorComponent_ng_container_0_For_18_Conditional_1_Template, 1, 1)(2, ProjectFlowOtpEmailEditorComponent_ng_container_0_For_18_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const design_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.selectedDesign() === design_r5 ? "bg-indigo-600 text-white shadow-sm" : "text-stone-600 hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-gray-700/50");
    \u0275\u0275advance();
    \u0275\u0275conditional(design_r5 === "standard" ? 1 : 2);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_For_24_Template_button_click_0_listener() {
      const lang_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectTemplateLang(lang_r7.code));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.selectedTemplateLang() === lang_r7.code ? "bg-indigo-600 text-white" : "bg-white text-stone-600 border border-stone-200 dark:bg-gray-800 dark:text-stone-300 dark:border-gray-700 hover:bg-stone-50 dark:hover:bg-gray-700/50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lang_r7.label, " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.detail.emailTemplate.slotRemovedBadge"));
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 45);
    \u0275\u0275text(2);
    \u0275\u0275template(3, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_0_Conditional_3_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 20);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_0_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("greeting", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const etForm_r10 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.greetingLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSlotRemoved("greeting") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", t_r2("smartEnrollProjects.detail.emailTemplate.greetingPlaceholder"))("ngModel", etForm_r10.greeting);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.detail.emailTemplate.greetingHelp"));
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.detail.emailTemplate.slotRemovedBadge"));
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.detail.emailTemplate.slotRemovedBadge"));
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 45);
    \u0275\u0275text(2);
    \u0275\u0275template(3, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_6_Conditional_3_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 50);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_6_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("otpLabel", $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const etForm_r10 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.otpLabelLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSlotRemoved("otpLabel") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", t_r2("smartEnrollProjects.detail.emailTemplate.otpLabelPlaceholder"))("ngModel", etForm_r10.otpLabel);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.detail.emailTemplate.slotRemovedBadge"));
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.detail.emailTemplate.slotRemovedBadge"));
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.detail.emailTemplate.slotRemovedBadge"));
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.detail.emailTemplate.slotRemovedBadge"));
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 45);
    \u0275\u0275text(2);
    \u0275\u0275template(3, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_17_Conditional_3_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 50);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("signature", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 18)(6, "label", 45);
    \u0275\u0275text(7);
    \u0275\u0275template(8, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_17_Conditional_8_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 50);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_17_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("footerNote", $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const etForm_r10 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.signatureLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSlotRemoved("signature") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", t_r2("smartEnrollProjects.detail.emailTemplate.signaturePlaceholder"))("ngModel", etForm_r10.signature);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.footerNoteLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSlotRemoved("footerNote") ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", t_r2("smartEnrollProjects.detail.emailTemplate.footerNotePlaceholder"))("ngModel", etForm_r10.footerNote);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_18_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("smartEnrollProjects.detail.emailTemplate.slotRemovedBadge"));
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 45);
    \u0275\u0275text(2);
    \u0275\u0275template(3, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_18_Conditional_4_Conditional_3_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 48);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_18_Conditional_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("buttonText", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 54)(6, "div", 18)(7, "label", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 55)(10, "input", 56);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_18_Conditional_4_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("buttonColor", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 57);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_18_Conditional_4_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("buttonColor", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 18)(13, "label", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 55)(16, "input", 56);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_18_Conditional_4_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("buttonTxtColor", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 57);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_18_Conditional_4_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("buttonTxtColor", $event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    const etForm_r10 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.buttonTextLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSlotRemoved("buttonText") ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", etForm_r10.buttonText);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.buttonColorLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", etForm_r10.buttonColor);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", etForm_r10.buttonColor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.buttonTxtColorLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", etForm_r10.buttonTxtColor);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", etForm_r10.buttonTxtColor);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "input", 52);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_18_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("showButton", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_18_Conditional_4_Template, 18, 9);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const etForm_r10 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", etForm_r10.showButton);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.showButtonLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(etForm_r10.showButton ? 4 : -1);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_0_Template, 7, 5, "div", 18);
    \u0275\u0275elementStart(1, "div", 18)(2, "label", 45);
    \u0275\u0275text(3);
    \u0275\u0275template(4, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_4_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "textarea", 47);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("message", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_6_Template, 5, 4, "div", 18);
    \u0275\u0275elementStart(7, "div", 18)(8, "label", 45);
    \u0275\u0275text(9);
    \u0275\u0275template(10, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_10_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 48);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("doNotShare", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 18)(13, "label", 45);
    \u0275\u0275text(14);
    \u0275\u0275template(15, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_15_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 48);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("didNotRequest", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_17_Template, 10, 8)(18, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Conditional_18_Template, 5, 3);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const etForm_r10 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.isCustomLayout() ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.messageLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSlotRemoved("message") ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", t_r2("smartEnrollProjects.detail.emailTemplate.messagePlaceholder"))("ngModel", etForm_r10.message);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isCustomLayout() ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.doNotShareLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSlotRemoved("doNotShare") ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", etForm_r10.doNotShare);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.didNotRequestLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSlotRemoved("didNotRequest") ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", etForm_r10.didNotRequest);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isCustomLayout() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isCustomLayout() ? 18 : -1);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.importTccDefault());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.importTccDefault"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.importDefaultLayout());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.importDefaultLayout"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_For_13_Template_button_click_0_listener() {
      const variable_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.insertVariable(variable_r19.token));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const variable_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", variable_r19.token, " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_15_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "code", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const err_r20 = \u0275\u0275nextContext().$implicit;
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.htmlErrorUnknownVariable"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(err_r20.token);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_15_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.htmlErrorScriptlets"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_15_For_5_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const err_r20 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(": ", err_r20.token, "");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_15_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275template(1, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_15_For_5_Conditional_3_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const err_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", err_r20.code, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(err_r20.token ? 1 : -1);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_15_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_15_For_5_Conditional_1_Template, 3, 2)(2, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_15_For_5_Conditional_2_Template, 1, 1)(3, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_15_For_5_Conditional_3_Template, 2, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const err_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(err_r20.code === "unknown_variable" ? 1 : err_r20.code === "scriptlets_not_allowed" ? 2 : 3);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "p", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 67);
    \u0275\u0275repeaterCreate(4, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_15_For_5_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.htmlErrorsTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.htmlErrors());
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "p", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 59);
    \u0275\u0275template(4, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_4_Template, 2, 1, "button", 60)(5, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_5_Template, 2, 1, "button", 60);
    \u0275\u0275elementStart(6, "button", 14);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetContentHtml());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18)(9, "span", 19);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 61);
    \u0275\u0275repeaterCreate(12, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_For_13_Template, 2, 1, "button", 62, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "textarea", 63);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Template_textarea_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("contentHtml", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Conditional_15_Template, 6, 1, "div", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const etForm_r10 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.htmlEditorHelp"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isTccOtpEmailClient ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.clearHtml"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.insertVariable"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.allowedVariables());
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", t_r2("smartEnrollProjects.detail.emailTemplate.htmlPlaceholder"))("ngModel", etForm_r10.contentHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.htmlErrors().length ? 15 : -1);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "span", 69);
    \u0275\u0275elementEnd();
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.sendTestEmailError"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 29);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r2.safePreviewHtml(), \u0275\u0275sanitizeHtml);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.sendTestEmailButton"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.sendTestEmailSuccess"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.sendTestEmailError"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.htmlErrorsBlockSave"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.saveError"), " ");
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 42);
  }
}
function ProjectFlowOtpEmailEditorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275declareLet(1);
    \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div")(5, "h3", 3);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275template(8, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_8_Template, 1, 1)(9, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 6)(14, "span", 7);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8);
    \u0275\u0275repeaterCreate(17, ProjectFlowOtpEmailEditorComponent_ng_container_0_For_18_Template, 3, 3, "button", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 10);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 11)(22, "div", 12);
    \u0275\u0275repeaterCreate(23, ProjectFlowOtpEmailEditorComponent_ng_container_0_For_24_Template, 2, 3, "button", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 14);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetLanguageToDefaults());
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "p", 15);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 16)(30, "div", 17)(31, "div", 18)(32, "label", 19);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 20);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateOtpEmailField("subject", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 21)(36, "button", 22);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setEditorTab("copy"));
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 22);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setEditorTab("html"));
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_40_Template, 19, 14)(41, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_41_Template, 16, 7, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 24)(43, "span", 25);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 26);
    \u0275\u0275template(46, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_46_Template, 2, 0, "div", 27)(47, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_47_Template, 2, 1, "div", 28)(48, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_48_Template, 1, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 30);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 31)(52, "label", 32);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 33)(55, "input", 34);
    \u0275\u0275listener("ngModelChange", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.testRecipientEmail.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 35);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendTestEmail());
    });
    \u0275\u0275template(57, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_57_Template, 1, 0, "span", 36)(58, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_58_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(59, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_59_Template, 2, 1, "p", 37)(60, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_60_Template, 2, 1, "p", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 39);
    \u0275\u0275template(62, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_62_Template, 2, 1, "span", 40)(63, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_63_Template, 2, 1, "span", 40);
    \u0275\u0275elementStart(64, "button", 41);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveOtpEmail());
    });
    \u0275\u0275template(65, ProjectFlowOtpEmailEditorComponent_ng_container_0_Conditional_65_Template, 1, 0, "span", 42);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 43);
    \u0275\u0275listener("click", function ProjectFlowOtpEmailEditorComponent_ng_container_0_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    const etForm_r21 = \u0275\u0275storeLet(ctx_r2.otpEmailTemplatesForm()[ctx_r2.selectedTemplateLang()]);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isCustomLayout() ? 8 : 9);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.layoutToggleLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.layoutOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.layoutPreviewNote"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.availableLanguages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.resetLanguageDefaults"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.languageTabHint"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.subjectLabel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", t_r2("smartEnrollProjects.detail.emailTemplate.subjectPlaceholder"))("ngModel", etForm_r21.subject);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.editorTab() === "copy" ? "bg-indigo-600 text-white shadow-sm" : "text-stone-600 hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-gray-700/50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.copyTab"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.editorTab() === "html" ? "bg-indigo-600 text-white shadow-sm" : "text-stone-600 hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-gray-700/50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.htmlTab"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.editorTab() === "copy" ? 40 : 41);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.preview"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.loadingPreview() ? 46 : ctx_r2.previewError() ? 47 : ctx_r2.safePreviewHtml() ? 48 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.previewNote"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.sendTestEmailLabel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", t_r2("smartEnrollProjects.detail.emailTemplate.sendTestEmailPlaceholder"))("ngModel", ctx_r2.testRecipientEmail());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.sendingTestEmail() || !ctx_r2.testRecipientEmail());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.sendingTestEmail() ? 57 : 58);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.testEmailSuccess() ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.testEmailError() ? 60 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.htmlErrors().length ? 62 : ctx_r2.saveError() ? 63 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.savingOtpEmail() || ctx_r2.htmlErrors().length > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.savingOtpEmail() ? 65 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.save"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("smartEnrollProjects.detail.emailTemplate.cancel"), " ");
  }
}
var ProjectFlowOtpEmailEditorComponent = class _ProjectFlowOtpEmailEditorComponent {
  constructor() {
    this.emailTemplateDesign = "standard";
    this.isTccOtpEmailClient = false;
    this.closed = new EventEmitter();
    this.saved = new EventEmitter();
    this.availableLanguages = OTP_EMAIL_TEMPLATE_LANGUAGES;
    this.layoutOptions = ["standard", "custom"];
    this._otpEmailService = inject(ProjectFlowOtpEmailService);
    this._sanitizer = inject(DomSanitizer);
    this._destroy$ = new Subject();
    this._previewRefresh$ = new Subject();
    this.otpEmailTemplatesForm = signal({});
    this.selectedTemplateLang = signal("en");
    this.selectedDesign = signal("standard");
    this.editorTab = signal("copy");
    this.htmlSlotStatus = signal({});
    this.htmlErrors = signal([]);
    this.previewHtml = signal("");
    this.safePreviewHtml = signal(null);
    this.loadingPreview = signal(false);
    this.previewError = signal(false);
    this.savingOtpEmail = signal(false);
    this.saveError = signal(false);
    this.testRecipientEmail = signal("");
    this.sendingTestEmail = signal(false);
    this.testEmailSuccess = signal(false);
    this.testEmailError = signal(false);
  }
  isCustomLayout() {
    return this.selectedDesign() === "custom";
  }
  allowedVariables() {
    return OTP_CONTENT_HTML_VARIABLES[this.selectedDesign()] ?? [];
  }
  hasContentHtml() {
    return Boolean(this.otpEmailTemplatesForm()[this.selectedTemplateLang()]?.contentHtml?.trim());
  }
  isSlotRemoved(slot) {
    return this.hasContentHtml() && this.htmlSlotStatus()[slot] === "removed";
  }
  setEditorTab(tab) {
    this.editorTab.set(tab);
  }
  insertVariable(token) {
    const lang = this.selectedTemplateLang();
    const current = this.otpEmailTemplatesForm()[lang]?.contentHtml ?? "";
    const snippet = `<%= ${token} %>`;
    this.updateOtpEmailField("contentHtml", current ? `${current}${snippet}` : snippet);
  }
  importTccDefault() {
    this.updateOtpEmailField("contentHtml", TCC_FULL_EMAIL_HTML);
  }
  importDefaultLayout() {
    this.updateOtpEmailField("contentHtml", GENERIC_FULL_EMAIL_HTML);
  }
  resetContentHtml() {
    this.htmlSlotStatus.set({});
    this.htmlErrors.set([]);
    this.updateOtpEmailField("contentHtml", "");
  }
  ngOnInit() {
    this.selectedDesign.set(normalizeEmailTemplateDesign(this.emailTemplateDesign));
    this.otpEmailTemplatesForm.set(buildOtpEmailTemplatesForm(this.emailTemplates, this.branding));
    this._previewRefresh$.pipe(debounceTime(350), takeUntil(this._destroy$)).subscribe(() => this.loadServerPreview());
    this.loadServerPreview();
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  close() {
    this.closed.emit();
  }
  selectTemplateLang(lang) {
    this.selectedTemplateLang.set(lang);
    this.loadServerPreview();
  }
  selectDesign(design) {
    if (this.selectedDesign() === design)
      return;
    this.selectedDesign.set(design);
    this._previewRefresh$.next();
  }
  resetLanguageToDefaults() {
    const lang = this.selectedTemplateLang();
    this.otpEmailTemplatesForm.update((form) => __spreadProps(__spreadValues({}, form), {
      [lang]: __spreadProps(__spreadValues({}, EMPTY_OTP_EMAIL_TEMPLATE_FORM), {
        buttonColor: this.branding.buttonColor || "#4f46e5",
        buttonTxtColor: this.branding.buttonTextColor || "#FFFFFF"
      })
    }));
    this._previewRefresh$.next();
  }
  updateOtpEmailField(field, value) {
    const lang = this.selectedTemplateLang();
    this.otpEmailTemplatesForm.update((form) => __spreadProps(__spreadValues({}, form), {
      [lang]: __spreadProps(__spreadValues({}, form[lang]), { [field]: value })
    }));
    this._previewRefresh$.next();
  }
  saveOtpEmail() {
    if (!this.flowId || this.htmlErrors().length)
      return;
    this.savingOtpEmail.set(true);
    this.saveError.set(false);
    this._otpEmailService.updateEmailTemplateSettings(this.flowId, {
      emailTemplates: this.otpEmailTemplatesForm(),
      emailTemplateDesign: this.selectedDesign()
    }).subscribe({
      next: () => {
        this.savingOtpEmail.set(false);
        this.saved.emit();
        this.close();
      },
      error: () => {
        this.savingOtpEmail.set(false);
        this.saveError.set(true);
      }
    });
  }
  sendTestEmail() {
    const email = this.testRecipientEmail().trim();
    if (!this.flowId || !email)
      return;
    this.sendingTestEmail.set(true);
    this.testEmailSuccess.set(false);
    this.testEmailError.set(false);
    const lang = this.selectedTemplateLang();
    this._otpEmailService.sendTestEmail(this.flowId, {
      email,
      language: lang,
      emailTemplate: this.otpEmailTemplatesForm()[lang],
      emailTemplateDesign: this.selectedDesign()
    }).subscribe({
      next: (res) => {
        this.sendingTestEmail.set(false);
        if (res?.data?.sent) {
          this.testEmailSuccess.set(true);
          setTimeout(() => this.testEmailSuccess.set(false), 5e3);
        } else {
          this.testEmailError.set(true);
        }
      },
      error: () => {
        this.sendingTestEmail.set(false);
        this.testEmailError.set(true);
      }
    });
  }
  loadServerPreview() {
    if (!this.flowId)
      return;
    const lang = this.selectedTemplateLang();
    this.loadingPreview.set(true);
    this.previewError.set(false);
    this._otpEmailService.getPreview(this.flowId, lang, this.otpEmailTemplatesForm()[lang], this.selectedDesign()).subscribe({
      next: (res) => {
        const html = res?.data?.html ?? "";
        this.previewHtml.set(html);
        this.safePreviewHtml.set(this._sanitizer.bypassSecurityTrustHtml(html));
        this.htmlSlotStatus.set(res?.data?.htmlSlotStatus ?? {});
        this.htmlErrors.set(res?.data?.htmlErrors ?? []);
        this.loadingPreview.set(false);
      },
      error: () => {
        this.loadingPreview.set(false);
        this.previewError.set(true);
        this.previewHtml.set("");
        this.safePreviewHtml.set(null);
      }
    });
  }
  static {
    this.\u0275fac = function ProjectFlowOtpEmailEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectFlowOtpEmailEditorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectFlowOtpEmailEditorComponent, selectors: [["project-flow-otp-email-editor"]], inputs: { flowId: "flowId", projectName: "projectName", branding: "branding", emailTemplates: "emailTemplates", emailTemplateDesign: "emailTemplateDesign", isTccOtpEmailClient: "isTccOtpEmailClient" }, outputs: { closed: "closed", saved: "saved" }, decls: 1, vars: 0, consts: [[4, "transloco"], [1, "rounded-2xl", "border", "border-indigo-200/80", "bg-indigo-50/30", "p-6", "dark:border-indigo-900/40", "dark:bg-indigo-950/20"], [1, "mb-5", "flex", "items-center", "justify-between"], [1, "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-0.5", "text-xs", "text-stone-500", "dark:text-stone-400"], ["mat-icon-button", "", "type", "button", 1, "!text-stone-400", "hover:!text-stone-600", 3, "click"], [1, "mb-5"], [1, "mb-2", "block", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "inline-flex", "rounded-lg", "border", "border-stone-200", "bg-white", "p-0.5", "dark:border-gray-700", "dark:bg-gray-800"], ["type", "button", 1, "rounded-md", "px-3", "py-1.5", "text-xs", "font-medium", "transition-all", "duration-200", 3, "class"], [1, "mt-2", "text-[11px]", "text-stone-400", "dark:text-stone-500"], [1, "mb-5", "flex", "flex-wrap", "items-center", "justify-between", "gap-2", "border-b", "border-stone-200", "pb-3", "dark:border-gray-800"], [1, "flex", "flex-wrap", "gap-1"], ["type", "button", 1, "inline-flex", "items-center", "rounded-lg", "px-3", "py-1.5", "text-xs", "font-medium", "transition-all", "duration-200", 3, "class"], ["mat-stroked-button", "", "type", "button", 1, "!h-8", "!px-3", "!text-xs", 3, "click"], [1, "mb-5", "text-[11px]", "text-amber-800", "dark:text-amber-200"], [1, "grid", "grid-cols-1", "gap-6", "lg:grid-cols-2"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-1.5"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], ["type", "text", 1, "rounded-lg", "border", "border-stone-300", "bg-white", "px-3", "py-2", "text-sm", "text-stone-800", "placeholder-stone-400", "outline-none", "focus:border-indigo-500", "focus:ring-1", "focus:ring-indigo-500", "dark:border-gray-600", "dark:bg-gray-800", "dark:text-stone-100", 3, "ngModelChange", "placeholder", "ngModel"], [1, "inline-flex", "w-fit", "rounded-lg", "border", "border-stone-200", "bg-white", "p-0.5", "dark:border-gray-700", "dark:bg-gray-800"], ["type", "button", 1, "rounded-md", "px-3", "py-1.5", "text-xs", "font-medium", "transition-all", "duration-200", 3, "click"], [1, "flex", "flex-col", "gap-3"], [1, "rounded-xl", "border", "border-stone-200", "bg-stone-100/50", "p-4", "dark:border-gray-800", "dark:bg-gray-900/60"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-wider", "text-stone-400", "dark:text-stone-500"], [1, "relative", "mt-2", "min-h-[420px]", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/80", "bg-white", "shadow-sm", "dark:border-gray-700"], [1, "flex", "h-[420px]", "items-center", "justify-center"], [1, "flex", "h-[420px]", "items-center", "justify-center", "px-6", "text-center", "text-xs", "text-red-600"], [1, "email-preview-frame", "overflow-auto", 3, "innerHTML"], [1, "mt-3", "text-center", "text-[10px]", "italic", "text-stone-400", "dark:text-stone-500"], [1, "mt-6", "border-t", "border-stone-200", "pt-4", "dark:border-gray-800"], [1, "mb-1.5", "block", "text-xs", "font-semibold", "text-stone-700", "dark:text-stone-300"], [1, "flex", "gap-2"], ["type", "email", 1, "flex-1", "rounded-lg", "border", "border-stone-300", "bg-white", "px-3", "py-1.5", "text-xs", "text-stone-800", "outline-none", "focus:border-indigo-500", "focus:ring-1", "focus:ring-indigo-500", "dark:border-gray-600", "dark:bg-gray-800", "dark:text-stone-100", 3, "ngModelChange", "placeholder", "ngModel"], ["mat-stroked-button", "", "type", "button", 1, "!h-8", "!px-3", 3, "click", "disabled"], [1, "inline-block", "h-3.5", "w-3.5", "animate-spin", "rounded-full", "border-2", "border-stone-400", "border-t-stone-800"], [1, "mt-1.5", "text-xs", "text-emerald-600", "dark:text-emerald-400"], [1, "mt-1.5", "text-xs", "text-red-600", "dark:text-red-400"], [1, "mt-6", "flex", "items-center", "justify-end", "gap-3", "border-t", "border-stone-200", "pt-4", "dark:border-gray-800"], [1, "mr-auto", "text-xs", "text-red-600", "dark:text-red-400"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-xl", 3, "click", "disabled"], [1, "mr-2", "inline-block", "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white", "border-t-transparent"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", 3, "click"], ["type", "button", 1, "inline-flex", "items-center", "rounded-lg", "px-3", "py-1.5", "text-xs", "font-medium", "transition-all", "duration-200", 3, "click"], [1, "flex", "items-center", "gap-2", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "rounded", "bg-amber-100", "px-1.5", "py-0.5", "text-[9px]", "font-semibold", "normal-case", "text-amber-700", "dark:bg-amber-900/40", "dark:text-amber-300"], ["rows", "3", 1, "resize-y", "rounded-lg", "border", "border-stone-300", "bg-white", "px-3", "py-2", "text-sm", "text-stone-800", "placeholder-stone-400", "outline-none", "focus:border-indigo-500", "focus:ring-1", "focus:ring-indigo-500", "dark:border-gray-600", "dark:bg-gray-800", "dark:text-stone-100", 3, "ngModelChange", "placeholder", "ngModel"], ["type", "text", 1, "rounded-lg", "border", "border-stone-300", "bg-white", "px-3", "py-2", "text-sm", "text-stone-800", "outline-none", "focus:border-indigo-500", "focus:ring-1", "focus:ring-indigo-500", "dark:border-gray-600", "dark:bg-gray-800", "dark:text-stone-100", 3, "ngModelChange", "ngModel"], [1, "text-[11px]", "text-stone-400", "dark:text-stone-500"], ["type", "text", 1, "rounded-lg", "border", "border-stone-300", "bg-white", "px-3", "py-2", "text-sm", "text-stone-800", "outline-none", "focus:border-indigo-500", "focus:ring-1", "focus:ring-indigo-500", "dark:border-gray-600", "dark:bg-gray-800", "dark:text-stone-100", 3, "ngModelChange", "placeholder", "ngModel"], [1, "flex", "items-center", "gap-2", "py-1"], ["type", "checkbox", "id", "showButtonCheckboxEditor", 1, "h-4", "w-4", "rounded", "border-stone-300", "text-indigo-600", "focus:ring-indigo-500", 3, "ngModelChange", "ngModel"], ["for", "showButtonCheckboxEditor", 1, "text-xs", "font-semibold", "text-stone-700", "dark:text-stone-300", "cursor-pointer", "select-none"], [1, "grid", "grid-cols-2", "gap-3"], [1, "flex", "items-center", "gap-2"], ["type", "color", 1, "h-9", "w-9", "shrink-0", "cursor-pointer", "rounded", "border", "border-stone-300", 3, "ngModelChange", "ngModel"], ["type", "text", 1, "w-full", "rounded-lg", "border", "border-stone-300", "bg-white", "px-3", "py-2", "font-mono", "text-xs", "text-stone-800", "outline-none", "dark:border-gray-600", "dark:bg-gray-800", "dark:text-stone-100", 3, "ngModelChange", "ngModel"], [1, "text-[11px]", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "!h-8", "!px-3", "!text-xs"], [1, "flex", "flex-wrap", "gap-1.5"], ["type", "button", 1, "rounded", "border", "border-stone-300", "bg-white", "px-2", "py-1", "font-mono", "text-[11px]", "text-stone-700", "hover:bg-indigo-50", "dark:border-gray-600", "dark:bg-gray-800", "dark:text-stone-200", "dark:hover:bg-gray-700"], ["rows", "22", "spellcheck", "false", 1, "resize-y", "rounded-lg", "border", "border-stone-300", "bg-white", "px-3", "py-2", "font-mono", "text-xs", "leading-relaxed", "text-stone-800", "outline-none", "focus:border-indigo-500", "focus:ring-1", "focus:ring-indigo-500", "dark:border-gray-600", "dark:bg-gray-900", "dark:text-stone-100", 3, "ngModelChange", "placeholder", "ngModel"], [1, "rounded-lg", "border", "border-red-300", "bg-red-50", "p-3", "dark:border-red-900/50", "dark:bg-red-950/30"], ["type", "button", 1, "rounded", "border", "border-stone-300", "bg-white", "px-2", "py-1", "font-mono", "text-[11px]", "text-stone-700", "hover:bg-indigo-50", "dark:border-gray-600", "dark:bg-gray-800", "dark:text-stone-200", "dark:hover:bg-gray-700", 3, "click"], [1, "text-xs", "font-semibold", "text-red-700", "dark:text-red-400"], [1, "mt-1", "list-disc", "pl-4", "text-[11px]", "text-red-600", "dark:text-red-400"], [1, "font-mono"], [1, "inline-block", "h-6", "w-6", "animate-spin", "rounded-full", "border-2", "border-stone-300", "border-t-stone-700"]], template: function ProjectFlowOtpEmailEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProjectFlowOtpEmailEditorComponent_ng_container_0_Template, 69, 32, "ng-container", 0);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, TranslocoModule, TranslocoDirective, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectFlowOtpEmailEditorComponent, [{
    type: Component,
    args: [{ selector: "project-flow-otp-email-editor", standalone: true, imports: [CommonModule, FormsModule, TranslocoModule, MatButtonModule, MatIconModule], template: `<ng-container *transloco="let t">\r
    @let etForm = otpEmailTemplatesForm()[selectedTemplateLang()];\r
    <div class="rounded-2xl border border-indigo-200/80 bg-indigo-50/30 p-6 dark:border-indigo-900/40 dark:bg-indigo-950/20">\r
        <div class="mb-5 flex items-center justify-between">\r
            <div>\r
                <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.detail.emailTemplate.title') }}\r
                </h3>\r
                <p class="mt-0.5 text-xs text-stone-500 dark:text-stone-400">\r
                    @if (isCustomLayout()) {\r
                        {{ t('smartEnrollProjects.detail.emailTemplate.layoutCustomDescription') }}\r
                    } @else {\r
                        {{ t('smartEnrollProjects.detail.emailTemplate.description') }}\r
                    }\r
                </p>\r
            </div>\r
            <button mat-icon-button type="button" (click)="close()" class="!text-stone-400 hover:!text-stone-600">\r
                <mat-icon>close</mat-icon>\r
            </button>\r
        </div>\r
\r
        <div class="mb-5">\r
            <span class="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                {{ t('smartEnrollProjects.detail.emailTemplate.layoutToggleLabel') }}\r
            </span>\r
            <div class="inline-flex rounded-lg border border-stone-200 bg-white p-0.5 dark:border-gray-700 dark:bg-gray-800">\r
                @for (design of layoutOptions; track design) {\r
                    <button\r
                        type="button"\r
                        class="rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200"\r
                        [class]="selectedDesign() === design ? 'bg-indigo-600 text-white shadow-sm' : 'text-stone-600 hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-gray-700/50'"\r
                        (click)="selectDesign(design)"\r
                    >\r
                        @if (design === 'standard') {\r
                            {{ t('smartEnrollProjects.detail.emailTemplate.layoutStandard') }}\r
                        } @else {\r
                            {{ t('smartEnrollProjects.detail.emailTemplate.layoutCustom') }}\r
                        }\r
                    </button>\r
                }\r
            </div>\r
            <p class="mt-2 text-[11px] text-stone-400 dark:text-stone-500">\r
                {{ t('smartEnrollProjects.detail.emailTemplate.layoutPreviewNote') }}\r
            </p>\r
        </div>\r
\r
        <div class="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3 dark:border-gray-800">\r
            <div class="flex flex-wrap gap-1">\r
            @for (lang of availableLanguages; track lang.code) {\r
                <button\r
                    type="button"\r
                    class="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200"\r
                    [class]="selectedTemplateLang() === lang.code ? 'bg-indigo-600 text-white' : 'bg-white text-stone-600 border border-stone-200 dark:bg-gray-800 dark:text-stone-300 dark:border-gray-700 hover:bg-stone-50 dark:hover:bg-gray-700/50'"\r
                    (click)="selectTemplateLang(lang.code)"\r
                >\r
                    {{ lang.label }}\r
                </button>\r
            }\r
            </div>\r
            <button\r
                mat-stroked-button\r
                type="button"\r
                class="!h-8 !px-3 !text-xs"\r
                (click)="resetLanguageToDefaults()"\r
            >\r
                {{ t('smartEnrollProjects.detail.emailTemplate.resetLanguageDefaults') }}\r
            </button>\r
        </div>\r
        <p class="mb-5 text-[11px] text-amber-800 dark:text-amber-200">\r
            {{ t('smartEnrollProjects.detail.emailTemplate.languageTabHint') }}\r
        </p>\r
\r
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">\r
            <div class="flex flex-col gap-4">\r
                <div class="flex flex-col gap-1.5">\r
                    <label class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.detail.emailTemplate.subjectLabel') }}\r
                    </label>\r
                    <input\r
                        type="text"\r
                        class="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 placeholder-stone-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-100"\r
                        [placeholder]="t('smartEnrollProjects.detail.emailTemplate.subjectPlaceholder')"\r
                        [ngModel]="etForm.subject"\r
                        (ngModelChange)="updateOtpEmailField('subject', $event)"\r
                    />\r
                </div>\r
\r
                <div class="inline-flex w-fit rounded-lg border border-stone-200 bg-white p-0.5 dark:border-gray-700 dark:bg-gray-800">\r
                    <button\r
                        type="button"\r
                        class="rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200"\r
                        [class]="editorTab() === 'copy' ? 'bg-indigo-600 text-white shadow-sm' : 'text-stone-600 hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-gray-700/50'"\r
                        (click)="setEditorTab('copy')"\r
                    >\r
                        {{ t('smartEnrollProjects.detail.emailTemplate.copyTab') }}\r
                    </button>\r
                    <button\r
                        type="button"\r
                        class="rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200"\r
                        [class]="editorTab() === 'html' ? 'bg-indigo-600 text-white shadow-sm' : 'text-stone-600 hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-gray-700/50'"\r
                        (click)="setEditorTab('html')"\r
                    >\r
                        {{ t('smartEnrollProjects.detail.emailTemplate.htmlTab') }}\r
                    </button>\r
                </div>\r
\r
                @if (editorTab() === 'copy') {\r
                @if (isCustomLayout()) {\r
                    <div class="flex flex-col gap-1.5">\r
                        <label class="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollProjects.detail.emailTemplate.greetingLabel') }}\r
                            @if (isSlotRemoved('greeting')) {\r
                                <span class="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-semibold normal-case text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{{ t('smartEnrollProjects.detail.emailTemplate.slotRemovedBadge') }}</span>\r
                            }\r
                        </label>\r
                        <input\r
                            type="text"\r
                            class="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 placeholder-stone-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-100"\r
                            [placeholder]="t('smartEnrollProjects.detail.emailTemplate.greetingPlaceholder')"\r
                            [ngModel]="etForm.greeting"\r
                            (ngModelChange)="updateOtpEmailField('greeting', $event)"\r
                        />\r
                        <p class="text-[11px] text-stone-400 dark:text-stone-500">{{ t('smartEnrollProjects.detail.emailTemplate.greetingHelp') }}</p>\r
                    </div>\r
                }\r
\r
                <div class="flex flex-col gap-1.5">\r
                    <label class="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.detail.emailTemplate.messageLabel') }}\r
                        @if (isSlotRemoved('message')) {\r
                            <span class="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-semibold normal-case text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{{ t('smartEnrollProjects.detail.emailTemplate.slotRemovedBadge') }}</span>\r
                        }\r
                    </label>\r
                    <textarea\r
                        rows="3"\r
                        class="resize-y rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 placeholder-stone-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-100"\r
                        [placeholder]="t('smartEnrollProjects.detail.emailTemplate.messagePlaceholder')"\r
                        [ngModel]="etForm.message"\r
                        (ngModelChange)="updateOtpEmailField('message', $event)"\r
                    ></textarea>\r
                </div>\r
\r
                @if (isCustomLayout()) {\r
                    <div class="flex flex-col gap-1.5">\r
                        <label class="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollProjects.detail.emailTemplate.otpLabelLabel') }}\r
                            @if (isSlotRemoved('otpLabel')) {\r
                                <span class="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-semibold normal-case text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{{ t('smartEnrollProjects.detail.emailTemplate.slotRemovedBadge') }}</span>\r
                            }\r
                        </label>\r
                        <input\r
                            type="text"\r
                            class="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-100"\r
                            [placeholder]="t('smartEnrollProjects.detail.emailTemplate.otpLabelPlaceholder')"\r
                            [ngModel]="etForm.otpLabel"\r
                            (ngModelChange)="updateOtpEmailField('otpLabel', $event)"\r
                        />\r
                    </div>\r
                }\r
\r
                <div class="flex flex-col gap-1.5">\r
                    <label class="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.detail.emailTemplate.doNotShareLabel') }}\r
                        @if (isSlotRemoved('doNotShare')) {\r
                            <span class="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-semibold normal-case text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{{ t('smartEnrollProjects.detail.emailTemplate.slotRemovedBadge') }}</span>\r
                        }\r
                    </label>\r
                    <input\r
                        type="text"\r
                        class="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-100"\r
                        [ngModel]="etForm.doNotShare"\r
                        (ngModelChange)="updateOtpEmailField('doNotShare', $event)"\r
                    />\r
                </div>\r
\r
                <div class="flex flex-col gap-1.5">\r
                    <label class="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                        {{ t('smartEnrollProjects.detail.emailTemplate.didNotRequestLabel') }}\r
                        @if (isSlotRemoved('didNotRequest')) {\r
                            <span class="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-semibold normal-case text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{{ t('smartEnrollProjects.detail.emailTemplate.slotRemovedBadge') }}</span>\r
                        }\r
                    </label>\r
                    <input\r
                        type="text"\r
                        class="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-100"\r
                        [ngModel]="etForm.didNotRequest"\r
                        (ngModelChange)="updateOtpEmailField('didNotRequest', $event)"\r
                    />\r
                </div>\r
\r
                @if (isCustomLayout()) {\r
                    <div class="flex flex-col gap-1.5">\r
                        <label class="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollProjects.detail.emailTemplate.signatureLabel') }}\r
                            @if (isSlotRemoved('signature')) {\r
                                <span class="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-semibold normal-case text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{{ t('smartEnrollProjects.detail.emailTemplate.slotRemovedBadge') }}</span>\r
                            }\r
                        </label>\r
                        <input\r
                            type="text"\r
                            class="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-100"\r
                            [placeholder]="t('smartEnrollProjects.detail.emailTemplate.signaturePlaceholder')"\r
                            [ngModel]="etForm.signature"\r
                            (ngModelChange)="updateOtpEmailField('signature', $event)"\r
                        />\r
                    </div>\r
\r
                    <div class="flex flex-col gap-1.5">\r
                        <label class="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollProjects.detail.emailTemplate.footerNoteLabel') }}\r
                            @if (isSlotRemoved('footerNote')) {\r
                                <span class="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-semibold normal-case text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{{ t('smartEnrollProjects.detail.emailTemplate.slotRemovedBadge') }}</span>\r
                            }\r
                        </label>\r
                        <input\r
                            type="text"\r
                            class="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-100"\r
                            [placeholder]="t('smartEnrollProjects.detail.emailTemplate.footerNotePlaceholder')"\r
                            [ngModel]="etForm.footerNote"\r
                            (ngModelChange)="updateOtpEmailField('footerNote', $event)"\r
                        />\r
                    </div>\r
                }\r
\r
                @if (!isCustomLayout()) {\r
                <div class="flex items-center gap-2 py-1">\r
                    <input\r
                        type="checkbox"\r
                        id="showButtonCheckboxEditor"\r
                        class="h-4 w-4 rounded border-stone-300 text-indigo-600 focus:ring-indigo-500"\r
                        [ngModel]="etForm.showButton"\r
                        (ngModelChange)="updateOtpEmailField('showButton', $event)"\r
                    />\r
                    <label for="showButtonCheckboxEditor" class="text-xs font-semibold text-stone-700 dark:text-stone-300 cursor-pointer select-none">\r
                        {{ t('smartEnrollProjects.detail.emailTemplate.showButtonLabel') }}\r
                    </label>\r
                </div>\r
\r
                @if (etForm.showButton) {\r
                    <div class="flex flex-col gap-1.5">\r
                        <label class="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollProjects.detail.emailTemplate.buttonTextLabel') }}\r
                            @if (isSlotRemoved('buttonText')) {\r
                                <span class="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-semibold normal-case text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">{{ t('smartEnrollProjects.detail.emailTemplate.slotRemovedBadge') }}</span>\r
                            }\r
                        </label>\r
                        <input\r
                            type="text"\r
                            class="rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-100"\r
                            [ngModel]="etForm.buttonText"\r
                            (ngModelChange)="updateOtpEmailField('buttonText', $event)"\r
                        />\r
                    </div>\r
\r
                    <div class="grid grid-cols-2 gap-3">\r
                        <div class="flex flex-col gap-1.5">\r
                            <label class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                {{ t('smartEnrollProjects.detail.emailTemplate.buttonColorLabel') }}\r
                            </label>\r
                            <div class="flex items-center gap-2">\r
                                <input type="color" class="h-9 w-9 shrink-0 cursor-pointer rounded border border-stone-300" [ngModel]="etForm.buttonColor" (ngModelChange)="updateOtpEmailField('buttonColor', $event)" />\r
                                <input type="text" class="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 font-mono text-xs text-stone-800 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-stone-100" [ngModel]="etForm.buttonColor" (ngModelChange)="updateOtpEmailField('buttonColor', $event)" />\r
                            </div>\r
                        </div>\r
                        <div class="flex flex-col gap-1.5">\r
                            <label class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                {{ t('smartEnrollProjects.detail.emailTemplate.buttonTxtColorLabel') }}\r
                            </label>\r
                            <div class="flex items-center gap-2">\r
                                <input type="color" class="h-9 w-9 shrink-0 cursor-pointer rounded border border-stone-300" [ngModel]="etForm.buttonTxtColor" (ngModelChange)="updateOtpEmailField('buttonTxtColor', $event)" />\r
                                <input type="text" class="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 font-mono text-xs text-stone-800 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-stone-100" [ngModel]="etForm.buttonTxtColor" (ngModelChange)="updateOtpEmailField('buttonTxtColor', $event)" />\r
                            </div>\r
                        </div>\r
                    </div>\r
                }\r
                }\r
                } @else {\r
                    <div class="flex flex-col gap-3">\r
                        <p class="text-[11px] text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollProjects.detail.emailTemplate.htmlEditorHelp') }}\r
                        </p>\r
\r
                        <div class="flex flex-wrap items-center gap-2">\r
                            @if (isTccOtpEmailClient) {\r
                                <button mat-stroked-button type="button" class="!h-8 !px-3 !text-xs" (click)="importTccDefault()">\r
                                    {{ t('smartEnrollProjects.detail.emailTemplate.importTccDefault') }}\r
                                </button>\r
                            } @else {\r
                                <button mat-stroked-button type="button" class="!h-8 !px-3 !text-xs" (click)="importDefaultLayout()">\r
                                    {{ t('smartEnrollProjects.detail.emailTemplate.importDefaultLayout') }}\r
                                </button>\r
                            }\r
                            <button mat-stroked-button type="button" class="!h-8 !px-3 !text-xs" (click)="resetContentHtml()">\r
                                {{ t('smartEnrollProjects.detail.emailTemplate.clearHtml') }}\r
                            </button>\r
                        </div>\r
\r
                        <div class="flex flex-col gap-1.5">\r
                            <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                {{ t('smartEnrollProjects.detail.emailTemplate.insertVariable') }}\r
                            </span>\r
                            <div class="flex flex-wrap gap-1.5">\r
                                @for (variable of allowedVariables(); track variable.token) {\r
                                    <button\r
                                        type="button"\r
                                        class="rounded border border-stone-300 bg-white px-2 py-1 font-mono text-[11px] text-stone-700 hover:bg-indigo-50 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-200 dark:hover:bg-gray-700"\r
                                        (click)="insertVariable(variable.token)"\r
                                    >\r
                                        {{ variable.token }}\r
                                    </button>\r
                                }\r
                            </div>\r
                        </div>\r
\r
                        <textarea\r
                            rows="22"\r
                            spellcheck="false"\r
                            class="resize-y rounded-lg border border-stone-300 bg-white px-3 py-2 font-mono text-xs leading-relaxed text-stone-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-900 dark:text-stone-100"\r
                            [placeholder]="t('smartEnrollProjects.detail.emailTemplate.htmlPlaceholder')"\r
                            [ngModel]="etForm.contentHtml"\r
                            (ngModelChange)="updateOtpEmailField('contentHtml', $event)"\r
                        ></textarea>\r
\r
                        @if (htmlErrors().length) {\r
                            <div class="rounded-lg border border-red-300 bg-red-50 p-3 dark:border-red-900/50 dark:bg-red-950/30">\r
                                <p class="text-xs font-semibold text-red-700 dark:text-red-400">\r
                                    {{ t('smartEnrollProjects.detail.emailTemplate.htmlErrorsTitle') }}\r
                                </p>\r
                                <ul class="mt-1 list-disc pl-4 text-[11px] text-red-600 dark:text-red-400">\r
                                    @for (err of htmlErrors(); track $index) {\r
                                        <li>\r
                                            @if (err.code === 'unknown_variable') {\r
                                                {{ t('smartEnrollProjects.detail.emailTemplate.htmlErrorUnknownVariable') }}: <code class="font-mono">{{ err.token }}</code>\r
                                            } @else if (err.code === 'scriptlets_not_allowed') {\r
                                                {{ t('smartEnrollProjects.detail.emailTemplate.htmlErrorScriptlets') }}\r
                                            } @else {\r
                                                {{ err.code }}@if (err.token) {: {{ err.token }}}\r
                                            }\r
                                        </li>\r
                                    }\r
                                </ul>\r
                            </div>\r
                        }\r
                    </div>\r
                }\r
            </div>\r
\r
            <div class="rounded-xl border border-stone-200 bg-stone-100/50 p-4 dark:border-gray-800 dark:bg-gray-900/60">\r
                <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">\r
                    {{ t('smartEnrollProjects.detail.emailTemplate.preview') }}\r
                </span>\r
\r
                <div class="relative mt-2 min-h-[420px] overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm dark:border-gray-700">\r
                    @if (loadingPreview()) {\r
                        <div class="flex h-[420px] items-center justify-center">\r
                            <span class="inline-block h-6 w-6 animate-spin rounded-full border-2 border-stone-300 border-t-stone-700"></span>\r
                        </div>\r
                    } @else if (previewError()) {\r
                        <div class="flex h-[420px] items-center justify-center px-6 text-center text-xs text-red-600">\r
                            {{ t('smartEnrollProjects.detail.emailTemplate.sendTestEmailError') }}\r
                        </div>\r
                    } @else if (safePreviewHtml()) {\r
                        <div class="email-preview-frame overflow-auto" [innerHTML]="safePreviewHtml()"></div>\r
                    }\r
                </div>\r
\r
                <p class="mt-3 text-center text-[10px] italic text-stone-400 dark:text-stone-500">\r
                    {{ t('smartEnrollProjects.detail.emailTemplate.previewNote') }}\r
                </p>\r
\r
                <div class="mt-6 border-t border-stone-200 pt-4 dark:border-gray-800">\r
                    <label class="mb-1.5 block text-xs font-semibold text-stone-700 dark:text-stone-300">\r
                        {{ t('smartEnrollProjects.detail.emailTemplate.sendTestEmailLabel') }}\r
                    </label>\r
                    <div class="flex gap-2">\r
                        <input\r
                            type="email"\r
                            class="flex-1 rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs text-stone-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-stone-100"\r
                            [placeholder]="t('smartEnrollProjects.detail.emailTemplate.sendTestEmailPlaceholder')"\r
                            [ngModel]="testRecipientEmail()"\r
                            (ngModelChange)="testRecipientEmail.set($event)"\r
                        />\r
                        <button mat-stroked-button type="button" class="!h-8 !px-3" [disabled]="sendingTestEmail() || !testRecipientEmail()" (click)="sendTestEmail()">\r
                            @if (sendingTestEmail()) {\r
                                <span class="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-stone-400 border-t-stone-800"></span>\r
                            } @else {\r
                                {{ t('smartEnrollProjects.detail.emailTemplate.sendTestEmailButton') }}\r
                            }\r
                        </button>\r
                    </div>\r
                    @if (testEmailSuccess()) {\r
                        <p class="mt-1.5 text-xs text-emerald-600 dark:text-emerald-400">\r
                            {{ t('smartEnrollProjects.detail.emailTemplate.sendTestEmailSuccess') }}\r
                        </p>\r
                    }\r
                    @if (testEmailError()) {\r
                        <p class="mt-1.5 text-xs text-red-600 dark:text-red-400">\r
                            {{ t('smartEnrollProjects.detail.emailTemplate.sendTestEmailError') }}\r
                        </p>\r
                    }\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div class="mt-6 flex items-center justify-end gap-3 border-t border-stone-200 pt-4 dark:border-gray-800">\r
            @if (htmlErrors().length) {\r
                <span class="mr-auto text-xs text-red-600 dark:text-red-400">\r
                    {{ t('smartEnrollProjects.detail.emailTemplate.htmlErrorsBlockSave') }}\r
                </span>\r
            } @else if (saveError()) {\r
                <span class="mr-auto text-xs text-red-600 dark:text-red-400">\r
                    {{ t('smartEnrollProjects.detail.emailTemplate.saveError') }}\r
                </span>\r
            }\r
            <button mat-flat-button color="primary" type="button" class="rounded-xl" [disabled]="savingOtpEmail() || htmlErrors().length > 0" (click)="saveOtpEmail()">\r
                @if (savingOtpEmail()) {\r
                    <span class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>\r
                }\r
                {{ t('smartEnrollProjects.detail.emailTemplate.save') }}\r
            </button>\r
            <button mat-stroked-button type="button" class="rounded-xl" (click)="close()">\r
                {{ t('smartEnrollProjects.detail.emailTemplate.cancel') }}\r
            </button>\r
        </div>\r
    </div>\r
</ng-container>\r
` }]
  }], null, { flowId: [{
    type: Input,
    args: [{ required: true }]
  }], projectName: [{
    type: Input,
    args: [{ required: true }]
  }], branding: [{
    type: Input,
    args: [{ required: true }]
  }], emailTemplates: [{
    type: Input
  }], emailTemplateDesign: [{
    type: Input
  }], isTccOtpEmailClient: [{
    type: Input
  }], closed: [{
    type: Output
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectFlowOtpEmailEditorComponent, { className: "ProjectFlowOtpEmailEditorComponent", filePath: "src/app/core/project-flow-otp-email/project-flow-otp-email-editor.component.ts", lineNumber: 46 });
})();

export {
  ProjectFlowOtpEmailEditorComponent
};
//# sourceMappingURL=chunk-244JWIQE.js.map
