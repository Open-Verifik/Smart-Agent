import {
  ProjectFlowOtpEmailEditorComponent
} from "./chunk-244JWIQE.js";
import {
  AccessSignInPreviewComponent
} from "./chunk-Z3QQUEFP.js";
import {
  SmartAccessProjectsService,
  smartAccessLoginFlow
} from "./chunk-WDLGCJBV.js";
import {
  Clipboard,
  ClipboardModule
} from "./chunk-FW2IPGTG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CTAWHRE6.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-NBA3XD53.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EIYDU75T.js";
import "./chunk-IXSC6NFZ.js";
import {
  FormBuilder,
  ReactiveFormsModule
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VENEX45A.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DM2XPT7T.js";
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  CommonModule,
  Component,
  NgClass,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdeclareLet,
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
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I5BUD46C.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-access/projects/project-detail/access-project-detail.component.ts
var _forTrack0 = ($index, $item) => $item.labelKey;
function AccessProjectDetailComponent_ng_container_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.project()._id);
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 21);
    \u0275\u0275listener("click", function AccessProjectDetailComponent_ng_container_0_Conditional_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openRecords());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 22);
    \u0275\u0275listener("click", function AccessProjectDetailComponent_ng_container_0_Conditional_22_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSetup(0));
    });
    \u0275\u0275elementStart(4, "mat-icon", 23);
    \u0275\u0275text(5, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.viewRecords"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.openSetup"), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementEnd();
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey()), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const brand_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("src", brand_r5.logo, \u0275\u0275sanitizeUrl);
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 72);
    \u0275\u0275text(1, "lock_open");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const brand_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275styleProp("color", brand_r5.titleColor);
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 73);
  }
  if (rf & 2) {
    const sw_r6 = ctx.$implicit;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275styleProp("background-color", sw_r6.value);
    \u0275\u0275attribute("title", t_r3(sw_r6.labelKey) + " \xB7 " + sw_r6.value);
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275element(1, "img", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const brand_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275styleProp("background-color", brand_r5.imageBackgroundColor);
    \u0275\u0275advance();
    \u0275\u0275property("src", brand_r5.image, \u0275\u0275sanitizeUrl);
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_52_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleOtpEmailEditor());
    });
    \u0275\u0275elementStart(1, "mat-icon", 52);
    \u0275\u0275text(2, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.detail.emailTemplate.title"), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53)(1, "mat-icon", 36);
    \u0275\u0275text(2, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const login_r8 = \u0275\u0275readContextLet(1);
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.email_" + login_r8.emailGateway), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53)(1, "mat-icon", 36);
    \u0275\u0275text(2, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const login_r8 = \u0275\u0275readContextLet(1);
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.phone_" + login_r8.phoneGateway), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54)(1, "mat-icon", 36);
    \u0275\u0275text(2, "fingerprint");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.biometrics"), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55)(1, "mat-icon", 36);
    \u0275\u0275text(2, "security");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.passkeys"), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.noMethods"), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "project-flow-otp-email-editor", 76);
    \u0275\u0275listener("closed", function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_63_Template_project_flow_otp_email_editor_closed_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.closeOtpEmailEditor());
    })("saved", function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_63_Template_project_flow_otp_email_editor_saved_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onOtpEmailSaved());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("flowId", ctx_r0.flow()._id)("projectName", ((tmp_9_0 = ctx_r0.project()) == null ? null : tmp_9_0.name) || "Verifik")("branding", ctx_r0.otpEmailBranding())("emailTemplates", (tmp_11_0 = ctx_r0.flow()) == null ? null : tmp_11_0.emailTemplates)("emailTemplateDesign", ((tmp_12_0 = ctx_r0.flow()) == null ? null : tmp_12_0.emailTemplateDesign) || "standard")("isTccOtpEmailClient", ((tmp_13_0 = ctx_r0.flow()) == null ? null : tmp_13_0.isTccOtpEmailClient) === true);
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 77)(2, "div", 78)(3, "span", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 80);
    \u0275\u0275element(8, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 77)(10, "div", 78)(11, "span", 67);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 79);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 80);
    \u0275\u0275element(16, "div", 81);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const login_r8 = \u0275\u0275readContextLet(1);
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.livenessScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", login_r8.livenessMinScorePct, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", login_r8.livenessMinScorePct, "%");
    \u0275\u0275property("ngClass", ctx_r0.scoreBarClass(login_r8.livenessMinScorePct));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.searchScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", login_r8.searchMinScorePct, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", login_r8.searchMinScorePct, "%");
    \u0275\u0275property("ngClass", ctx_r0.scoreBarClass(login_r8.searchMinScorePct));
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59)(1, "mat-icon", 36);
    \u0275\u0275text(2, "api");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.source_API"), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60)(1, "mat-icon", 36);
    \u0275\u0275text(2, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.source_CSV"), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61)(1, "mat-icon", 36);
    \u0275\u0275text(2, "how_to_reg");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.source_SMART_ENROLL"), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62)(1, "mat-icon", 36);
    \u0275\u0275text(2, "remove_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.source_NONE"), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "code", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 46);
    \u0275\u0275listener("click", function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_81_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      \u0275\u0275nextContext();
      const security_r11 = \u0275\u0275readContextLet(2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyValue(security_r11.apiUrl || ""));
    });
    \u0275\u0275element(4, "mat-icon", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const security_r11 = \u0275\u0275readContextLet(2);
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(security_r11.apiUrl);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("smartAccessProjects.detail.copy"));
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.source_SMART_ENROLL_hint"), " ");
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const integrations_r12 = \u0275\u0275readContextLet(3);
    \u0275\u0275property("href", integrations_r12.redirectUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(integrations_r12.redirectUrl);
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("smartAccessProjects.detail.noValue"));
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 71)(1, "div", 83)(2, "h2", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 84);
    \u0275\u0275element(7, "access-sign-in-preview", 85);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.previewTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.previewSubtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("form", ctx)("branding", ctx_r0.brandingPreview());
  }
}
function AccessProjectDetailComponent_ng_container_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0)(1)(2)(3);
    \u0275\u0275elementStart(4, "div", 20)(5, "section", 25)(6, "div", 26)(7, "div", 27)(8, "div", 28);
    \u0275\u0275template(9, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_9_Template, 1, 1, "img", 29)(10, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_10_Template, 2, 2, "mat-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12)(12, "p", 31);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 32);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 33)(17, "span", 34);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 35);
    \u0275\u0275listener("click", function AccessProjectDetailComponent_ng_container_0_Conditional_27_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSetup(3));
    });
    \u0275\u0275elementStart(20, "mat-icon", 36);
    \u0275\u0275text(21, "palette");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 37);
    \u0275\u0275repeaterCreate(24, AccessProjectDetailComponent_ng_container_0_Conditional_27_For_25_Template, 1, 3, "span", 38, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_26_Template, 2, 3, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "section", 40)(28, "header", 41)(29, "div")(30, "h2", 42);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 43);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 44)(35, "code", 45);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 46);
    \u0275\u0275listener("click", function AccessProjectDetailComponent_ng_container_0_Conditional_27_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyValue(ctx_r0.liveUrl()));
    });
    \u0275\u0275element(38, "mat-icon", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 48)(40, "button", 49);
    \u0275\u0275listener("click", function AccessProjectDetailComponent_ng_container_0_Conditional_27_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openLive());
    });
    \u0275\u0275elementStart(41, "mat-icon", 23);
    \u0275\u0275text(42, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "section", 40)(45, "header", 41)(46, "div")(47, "h2", 42);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 43);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 15);
    \u0275\u0275template(52, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_52_Template, 4, 1, "button", 50);
    \u0275\u0275elementStart(53, "button", 51);
    \u0275\u0275listener("click", function AccessProjectDetailComponent_ng_container_0_Conditional_27_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSetup(1));
    });
    \u0275\u0275elementStart(54, "mat-icon", 52);
    \u0275\u0275text(55, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 15);
    \u0275\u0275template(58, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_58_Template, 4, 1, "span", 53)(59, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_59_Template, 4, 1, "span", 53)(60, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_60_Template, 4, 1, "span", 54)(61, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_61_Template, 4, 1, "span", 55)(62, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_62_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275template(63, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_63_Template, 2, 6, "div", 57)(64, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_64_Template, 17, 10, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "section", 40)(66, "header", 41)(67, "div")(68, "h2", 42);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "p", 43);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "button", 51);
    \u0275\u0275listener("click", function AccessProjectDetailComponent_ng_container_0_Conditional_27_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSetup(2));
    });
    \u0275\u0275elementStart(73, "mat-icon", 52);
    \u0275\u0275text(74, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 15);
    \u0275\u0275template(77, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_77_Template, 4, 1, "span", 59)(78, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_78_Template, 4, 1, "span", 60)(79, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_79_Template, 4, 1, "span", 61)(80, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_80_Template, 4, 1, "span", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(81, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_81_Template, 5, 2, "div", 63)(82, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_82_Template, 2, 1, "p", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "section", 40)(84, "header", 41)(85, "div")(86, "h2", 42);
    \u0275\u0275text(87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "p", 43);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "button", 51);
    \u0275\u0275listener("click", function AccessProjectDetailComponent_ng_container_0_Conditional_27_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSetup(2));
    });
    \u0275\u0275elementStart(91, "mat-icon", 52);
    \u0275\u0275text(92, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 65)(95, "div", 66)(96, "span", 67);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275template(98, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_98_Template, 2, 2, "a", 68)(99, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_99_Template, 2, 1, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 66)(101, "span", 67);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "span", 70);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(105, AccessProjectDetailComponent_ng_container_0_Conditional_27_Conditional_105_Template, 8, 4, "section", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_35_0;
    let tmp_50_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    const brand_r13 = \u0275\u0275storeLet(ctx_r0.brandingPreview());
    \u0275\u0275advance();
    const login_r14 = \u0275\u0275storeLet(ctx_r0.loginPreview());
    \u0275\u0275advance();
    const security_r15 = \u0275\u0275storeLet(ctx_r0.securityPreview());
    \u0275\u0275advance();
    const integrations_r16 = \u0275\u0275storeLet(ctx_r0.integrationsPreview());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", brand_r13.backgroundColor);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", brand_r13.imageBackgroundColor);
    \u0275\u0275advance();
    \u0275\u0275conditional(brand_r13.logo ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", brand_r13.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.overline"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", brand_r13.titleColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.project().name || t_r3("smartAccessProjects.detail.untitled"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.loginActive() ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200" : "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_15_0 = ctx_r0.flow()) == null ? null : tmp_15_0.status) || "draft", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", brand_r13.buttonColor)("color", brand_r13.buttonTextColor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.editBrand"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.swatchEntries());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(brand_r13.image ? 26 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.liveUrl"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.liveUrlSubtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.liveUrl());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("smartAccessProjects.detail.copy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.list.menuLiveSignIn"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.channelsTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.channelsSubtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(login_r14.email && login_r14.emailGateway === "mailgun" ? 52 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.editSection"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(login_r14.email ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(login_r14.phone ? 59 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(login_r14.faceLiveness ? 60 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(login_r14.allowPasskeys ? 61 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!login_r14.email && !login_r14.phone && !login_r14.faceLiveness && !login_r14.allowPasskeys ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showOtpEmailEditor() && ((tmp_35_0 = ctx_r0.flow()) == null ? null : tmp_35_0._id) ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(login_r14.faceLiveness ? 64 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.securityTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.securitySubtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.editSection"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(security_r15.source === "API" ? 77 : security_r15.source === "CSV" ? 78 : security_r15.source === "SMART_ENROLL" ? 79 : 80);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(security_r15.source === "API" && security_r15.apiUrl ? 81 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(security_r15.source === "SMART_ENROLL" ? 82 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.integrationsTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.integrationsSubtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.detail.editSection"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.setup.whitelist.redirect_url"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(integrations_r16.redirectUrl ? 98 : 99);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.setup.whitelist.webhook"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.emptyOr(integrations_r16.webhook), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_50_0 = ctx_r0.previewForm()) ? 105 : -1, tmp_50_0);
  }
}
function AccessProjectDetailComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
    \u0275\u0275text(6, "Verifik");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "mat-icon", 6);
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "mat-icon", 6);
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "button", 11)(16, "mat-icon");
    \u0275\u0275text(17, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 12)(19, "h1", 13);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AccessProjectDetailComponent_ng_container_0_Conditional_21_Template, 2, 1, "p", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, AccessProjectDetailComponent_ng_container_0_Conditional_22_Template, 7, 2, "div", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "main", 16)(24, "div", 17);
    \u0275\u0275template(25, AccessProjectDetailComponent_ng_container_0_Conditional_25_Template, 2, 0, "div", 18)(26, AccessProjectDetailComponent_ng_container_0_Conditional_26_Template, 3, 3, "div", 19)(27, AccessProjectDetailComponent_ng_container_0_Conditional_27_Template, 106, 53, "div", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    const t_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r3("smartAccessProjects.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r0.project()) == null ? null : tmp_3_0.name) || ((tmp_3_0 = ctx_r0.project()) == null ? null : tmp_3_0._id) || t_r3("smartAccessProjects.detail.untitled"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", t_r3("smartAccessProjects.backToList"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx_r0.project()) == null ? null : tmp_5_0.name) || ((tmp_5_0 = ctx_r0.project()) == null ? null : tmp_5_0._id), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r0.project()) == null ? null : tmp_6_0._id) ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.project() && !ctx_r0.loading() ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.loading() ? 25 : ctx_r0.errorKey() ? 26 : ctx_r0.project() ? 27 : -1);
  }
}
var AccessProjectDetailComponent = class _AccessProjectDetailComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._projectsService = inject(SmartAccessProjectsService);
    this._clipboard = inject(Clipboard);
    this._transloco = inject(TranslocoService);
    this._fb = inject(FormBuilder);
    this.project = signal(null);
    this.loading = signal(true);
    this.errorKey = signal(null);
    this.showOtpEmailEditor = signal(false);
    this.previewForm = signal(null);
    this.flow = computed(() => smartAccessLoginFlow(this.project()));
    this.loginActive = computed(() => {
      const f = this.flow();
      return !!f?.status && f.status !== "draft";
    });
    this.liveUrl = computed(() => {
      const p = this.project();
      const base = `${environment.kycBaseUrl ?? ""}`.replace(/\/+$/, "");
      if (!p || !base)
        return "";
      return `${base}/sign-in/${p._id}`;
    });
    this.brandingPreview = computed(() => {
      const b = this.project()?.branding ?? {};
      return {
        logo: b["logo"],
        image: b["image"],
        titleColor: b["titleColor"] || "#0f172a",
        textColor: b["textColor"] || b["txtColor"] || "#475569",
        buttonColor: b["buttonColor"] || "#2563eb",
        buttonTextColor: b["buttonTextColor"] || b["buttonTxtColor"] || "#ffffff",
        backgroundColor: b["backgroundColor"] || b["bgColor"] || "#ffffff",
        imageBackgroundColor: b["imageBackgroundColor"] || "#ffffff"
      };
    });
    this.swatchEntries = computed(() => {
      const b = this.brandingPreview();
      return [
        { labelKey: "smartAccessProjects.detail.brand.titleColor", value: b.titleColor },
        { labelKey: "smartAccessProjects.detail.brand.textColor", value: b.textColor },
        { labelKey: "smartAccessProjects.detail.brand.buttonColor", value: b.buttonColor },
        { labelKey: "smartAccessProjects.detail.brand.buttonTextColor", value: b.buttonTextColor },
        { labelKey: "smartAccessProjects.detail.brand.backgroundColor", value: b.backgroundColor },
        { labelKey: "smartAccessProjects.detail.brand.imageBackgroundColor", value: b.imageBackgroundColor }
      ];
    });
    this.loginPreview = computed(() => {
      const ls = this.flow()?.loginSettings ?? {};
      const pct = (v) => typeof v === "number" ? Math.round(v * 100) : 0;
      return {
        email: !!ls.email,
        emailGateway: ls.emailGateway || "none",
        phone: !!ls.phone,
        phoneGateway: ls.phoneGateway || "none",
        faceLiveness: !!ls.faceLiveness,
        livenessMinScorePct: pct(ls.livenessMinScore),
        searchMinScorePct: pct(ls.searchMinScore),
        searchMode: ls.searchMode || "FAST",
        allowPasskeys: !!ls.allowPasskeys,
        showFaceLivenessRecommendation: !!ls.showFaceLivenessRecommendation
      };
    });
    this.securityPreview = computed(() => {
      const s = this.flow()?.security ?? {};
      return { source: s.source ?? null, apiUrl: s.apiUrl ?? "", strategy: s.strategy ?? "whitelist" };
    });
    this.integrationsPreview = computed(() => {
      const i = this.flow()?.integrations ?? {};
      return { redirectUrl: i.redirectUrl ?? "", webhook: i.webhook ?? null };
    });
    this.otpEmailBranding = computed(() => {
      const b = this.brandingPreview();
      return {
        logo: b.logo,
        name: this.project()?.name,
        buttonColor: b.buttonColor,
        buttonTextColor: b.buttonTextColor
      };
    });
  }
  ngOnInit() {
    this._paramSub = this._route.paramMap.subscribe((pm) => {
      const id = pm.get("projectId");
      if (!id) {
        void this._router.navigate(["/smart-access/projects"]);
        return;
      }
      this._projectsService.getProject(id).subscribe({
        next: (proj) => {
          if (!proj) {
            this.errorKey.set("smartAccessProjects.projectNotFound");
          } else {
            this.project.set(proj);
            this.previewForm.set(this._buildPreviewForm(proj));
          }
          this.loading.set(false);
        },
        error: () => {
          this.errorKey.set("smartAccessProjects.loadError");
          this.loading.set(false);
        }
      });
    });
  }
  ngOnDestroy() {
    this._paramSub?.unsubscribe();
  }
  openSetup(step = 0) {
    const id = this.project()?._id;
    if (!id)
      return;
    void this._router.navigate(["/smart-access/projects", id, "setup", step]);
  }
  openRecords() {
    const id = this.project()?._id;
    if (!id)
      return;
    void this._router.navigate(["/smart-access/projects", id, "records"]);
  }
  openLive() {
    const url = this.liveUrl();
    if (!url || typeof window === "undefined")
      return;
    window.open(url, "_blank", "noopener,noreferrer");
  }
  copyValue(value, event) {
    event?.stopPropagation();
    if (value)
      this._clipboard.copy(value);
  }
  scoreBarClass(percent) {
    if (percent >= 85)
      return "bg-emerald-500";
    if (percent >= 70)
      return "bg-amber-500";
    return "bg-rose-500";
  }
  emptyOr(v) {
    const s = `${v ?? ""}`.trim();
    return s || this._transloco.translate("smartAccessProjects.detail.noValue");
  }
  toggleOtpEmailEditor() {
    this.showOtpEmailEditor.update((v) => !v);
  }
  closeOtpEmailEditor() {
    this.showOtpEmailEditor.set(false);
  }
  onOtpEmailSaved() {
    const id = this.project()?._id;
    if (!id)
      return;
    this._projectsService.getProject(id).subscribe({
      next: (proj) => this.project.set(proj)
    });
  }
  /**
   * Build a minimal reactive form from project data so the sign-in preview
   * component can read login settings without needing the full setup wizard form.
   */
  _buildPreviewForm(proj) {
    const flow = smartAccessLoginFlow(proj);
    const ls = flow?.loginSettings ?? {};
    return this._fb.group({
      projectFlow: this._fb.group({
        loginSettings: this._fb.group({
          email: [!!ls.email],
          emailGateway: [ls.emailGateway || "none"],
          phone: [!!ls.phone],
          phoneGateway: [ls.phoneGateway || "none"],
          faceLiveness: [!!ls.faceLiveness],
          allowPasskeys: [!!ls.allowPasskeys],
          livenessMinScore: [ls.livenessMinScore ?? 0.65],
          searchMinScore: [ls.searchMinScore ?? 0.85],
          searchMode: [ls.searchMode || "FAST"],
          showFaceLivenessRecommendation: [!!ls.showFaceLivenessRecommendation]
        })
      })
    });
  }
  static {
    this.\u0275fac = function AccessProjectDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccessProjectDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessProjectDetailComponent, selectors: [["smart-access-project-detail"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "max-w-5xl"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-access/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "mt-5", "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", "routerLink", "/smart-access/projects", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "font-mono", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "gap-2"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-5xl"], [1, "flex", "justify-center", "py-20"], [1, "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "flex", "flex-col", "gap-6"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], [1, "!h-4", "!w-4", "mr-1"], ["diameter", "40"], [1, "overflow-hidden", "rounded-3xl", "border", "border-stone-200/90", "dark:border-gray-700"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-6", "p-6", "md:p-8"], [1, "flex", "items-start", "gap-4"], [1, "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded-2xl", "border", "border-black/5", "shrink-0"], ["alt", "", 1, "h-full", "w-full", "object-contain", 3, "src"], [1, "!h-7", "!w-7", 3, "color"], [1, "text-xs", "font-semibold", "uppercase", "tracking-widest", "mb-1"], [1, "text-2xl", "font-semibold", "leading-tight"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-2"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], ["type", "button", 1, "inline-flex", "items-center", "gap-1", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", "shadow-sm", 3, "click"], [1, "!h-3.5", "!w-3.5", "!text-[14px]"], [1, "flex", "items-center", "gap-1"], [1, "h-6", "w-6", "rounded-full", "border", "border-black/10", 3, "background-color"], [1, "h-24", "w-full", "overflow-hidden", 3, "background-color"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mb-4", "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "min-w-0", "items-center", "gap-2", "rounded-xl", "bg-stone-100", "px-3", "py-2", "dark:bg-gray-800"], [1, "min-w-0", "flex-1", "break-all", "text-xs", "text-stone-800", "dark:text-stone-200"], ["mat-icon-button", "", "type", "button", 3, "click"], ["svgIcon", "mat_outline:content_copy", 1, "icon-size-5"], [1, "mt-4", "flex", "flex-wrap", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", 3, "click"], ["mat-stroked-button", "", "type", "button", 1, "rounded-full"], ["mat-stroked-button", "", "type", "button", 1, "rounded-full", 3, "click"], [1, "!h-4", "!w-4"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-blue-200", "bg-blue-50", "px-3", "py-1", "text-xs", "font-medium", "text-blue-700", "dark:border-blue-900", "dark:bg-blue-950/40", "dark:text-blue-200"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-purple-200", "bg-purple-50", "px-3", "py-1", "text-xs", "font-medium", "text-purple-700", "dark:border-purple-900", "dark:bg-purple-950/40", "dark:text-purple-200"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-3", "py-1", "text-xs", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200"], [1, "text-sm", "text-stone-400", "dark:text-stone-500"], [1, "mt-5"], [1, "mt-5", "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-teal-200", "bg-teal-50", "px-3", "py-1", "text-xs", "font-medium", "text-teal-700", "dark:border-teal-900", "dark:bg-teal-950/40", "dark:text-teal-200"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-orange-200", "bg-orange-50", "px-3", "py-1", "text-xs", "font-medium", "text-orange-700", "dark:border-orange-900", "dark:bg-orange-950/40", "dark:text-orange-200"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-indigo-200", "bg-indigo-50", "px-3", "py-1", "text-xs", "font-medium", "text-indigo-700", "dark:border-indigo-900", "dark:bg-indigo-950/40", "dark:text-indigo-200"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-3", "py-1", "text-xs", "font-medium", "text-stone-500", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-400"], [1, "mt-4", "flex", "min-w-0", "items-center", "gap-2", "rounded-xl", "bg-stone-100", "px-3", "py-2", "dark:bg-gray-800"], [1, "mt-3", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "grid", "grid-cols-1", "gap-3", "sm:grid-cols-2"], [1, "flex", "flex-col", "gap-1", "rounded-xl", "bg-stone-50", "px-3", "py-2", "dark:bg-gray-900/40"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], ["target", "_blank", "rel", "noopener noreferrer", 1, "truncate", "text-sm", "text-primary-600", "hover:underline", 3, "href"], [1, "text-sm", "text-stone-500"], [1, "text-sm", "text-stone-800", "dark:text-stone-100"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "dark:border-gray-700", "dark:bg-gray-900/40", "overflow-hidden"], [1, "!h-7", "!w-7"], [1, "h-6", "w-6", "rounded-full", "border", "border-black/10"], [1, "h-24", "w-full", "overflow-hidden"], ["alt", "", 1, "h-full", "w-full", "object-cover", "object-center", 3, "src"], [3, "closed", "saved", "flowId", "projectName", "branding", "emailTemplates", "emailTemplateDesign", "isTccOtpEmailClient"], [1, "rounded-xl", "bg-stone-50", "px-3", "py-3", "dark:bg-gray-900/40"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-bold", "text-stone-800", "dark:text-stone-100"], [1, "mt-2", "h-1.5", "w-full", "overflow-hidden", "rounded-full", "bg-stone-200", "dark:bg-gray-700"], [1, "h-full", "rounded-full", "transition-all", 3, "ngClass"], [1, "min-w-0", "flex-1", "break-all", "text-xs", "text-stone-700", "dark:text-stone-300"], [1, "px-6", "pt-6", "pb-4"], [1, "preview-container"], [3, "form", "branding"]], template: function AccessProjectDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AccessProjectDetailComponent_ng_container_0_Template, 28, 7, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ReactiveFormsModule,
      RouterModule,
      RouterLink,
      ClipboardModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoDirective,
      TranslocoPipe,
      AccessSignInPreviewComponent,
      ProjectFlowOtpEmailEditorComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.preview-container[_ngcontent-%COMP%] {\n  height: 800px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.preview-container[_ngcontent-%COMP%]   access-sign-in-preview[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  display: block;\n}\n/*# sourceMappingURL=access-project-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessProjectDetailComponent, [{
    type: Component,
    args: [{ selector: "smart-access-project-detail", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      ClipboardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule,
      AccessSignInPreviewComponent,
      ProjectFlowOtpEmailEditorComponent
    ], template: `<ng-container *transloco="let t">\r
    <div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
\r
        <!-- \u2500\u2500 Sticky header \u2500\u2500 -->\r
        <header class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8">\r
            <div class="mx-auto max-w-5xl">\r
                <!-- Breadcrumb -->\r
                <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">\r
                    <a routerLink="/chat" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">Verifik</a>\r
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                    <a routerLink="/smart-access/projects" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">\r
                        {{ t('smartAccessProjects.title') }}\r
                    </a>\r
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                    <span class="cursor-default text-stone-600 dark:text-stone-300">\r
                        {{ project()?.name || project()?._id || t('smartAccessProjects.detail.untitled') }}\r
                    </span>\r
                </div>\r
\r
                <!-- Title row -->\r
                <div class="mt-5 flex flex-wrap items-start justify-between gap-4">\r
                    <div class="flex min-w-0 items-start gap-3">\r
                        <button\r
                            mat-icon-button\r
                            type="button"\r
                            routerLink="/smart-access/projects"\r
                            class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                            [attr.aria-label]="t('smartAccessProjects.backToList')"\r
                        >\r
                            <mat-icon>arrow_back</mat-icon>\r
                        </button>\r
                        <div class="min-w-0">\r
                            <h1 class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl">\r
                                {{ project()?.name || project()?._id }}\r
                            </h1>\r
                            @if (project()?._id) {\r
                                <p class="mt-1 font-mono text-xs text-stone-500 dark:text-stone-400">{{ project()!._id }}</p>\r
                            }\r
                        </div>\r
                    </div>\r
                    @if (project() && !loading()) {\r
                        <div class="flex flex-wrap gap-2">\r
                            <button mat-stroked-button type="button" class="shrink-0 rounded-xl" (click)="openRecords()">\r
                                {{ t('smartAccessProjects.viewRecords') }}\r
                            </button>\r
                            <button mat-flat-button color="primary" type="button" class="shrink-0 rounded-xl" (click)="openSetup(0)">\r
                                <mat-icon class="!h-4 !w-4 mr-1">tune</mat-icon>\r
                                {{ t('smartAccessProjects.detail.openSetup') }}\r
                            </button>\r
                        </div>\r
                    }\r
                </div>\r
            </div>\r
        </header>\r
\r
        <!-- \u2500\u2500 Main content \u2500\u2500 -->\r
        <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
            <div class="mx-auto w-full max-w-5xl">\r
\r
                @if (loading()) {\r
                    <div class="flex justify-center py-20">\r
                        <mat-spinner diameter="40"></mat-spinner>\r
                    </div>\r
                } @else if (errorKey()) {\r
                    <div class="rounded-2xl border border-red-200/90 bg-red-50/90 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">\r
                        {{ errorKey()! | transloco }}\r
                    </div>\r
                } @else if (project()) {\r
                    @let brand = brandingPreview();\r
                    @let login = loginPreview();\r
                    @let security = securityPreview();\r
                    @let integrations = integrationsPreview();\r
\r
                    <div class="flex flex-col gap-6">\r
\r
                        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
                             1. Brand hero\r
                        \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
                        <section\r
                            class="overflow-hidden rounded-3xl border border-stone-200/90 dark:border-gray-700"\r
                            [style.background-color]="brand.backgroundColor"\r
                        >\r
                            <div class="flex flex-wrap items-start justify-between gap-6 p-6 md:p-8">\r
                                <div class="flex items-start gap-4">\r
                                    <!-- Logo tile -->\r
                                    <div\r
                                        class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-black/5 shrink-0"\r
                                        [style.background-color]="brand.imageBackgroundColor"\r
                                    >\r
                                        @if (brand.logo) {\r
                                            <img [src]="brand.logo" alt="" class="h-full w-full object-contain" />\r
                                        } @else {\r
                                            <mat-icon class="!h-7 !w-7" [style.color]="brand.titleColor">lock_open</mat-icon>\r
                                        }\r
                                    </div>\r
\r
                                    <!-- Title + meta -->\r
                                    <div class="min-w-0">\r
                                        <p class="text-xs font-semibold uppercase tracking-widest mb-1" [style.color]="brand.textColor">\r
                                            {{ t('smartAccessProjects.detail.overline') }}\r
                                        </p>\r
                                        <p class="text-2xl font-semibold leading-tight" [style.color]="brand.titleColor">\r
                                            {{ project()!.name || t('smartAccessProjects.detail.untitled') }}\r
                                        </p>\r
                                        <div class="mt-3 flex flex-wrap items-center gap-2">\r
                                            <!-- Status chip -->\r
                                            <span\r
                                                class="rounded-full px-3 py-1 text-xs font-semibold"\r
                                                [ngClass]="loginActive()\r
                                                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200'\r
                                                    : 'bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200'"\r
                                            >\r
                                                {{ flow()?.status || 'draft' }}\r
                                            </span>\r
                                            <!-- Edit branding pill -->\r
                                            <button\r
                                                type="button"\r
                                                class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"\r
                                                [style.background-color]="brand.buttonColor"\r
                                                [style.color]="brand.buttonTextColor"\r
                                                (click)="openSetup(3)"\r
                                            >\r
                                                <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">palette</mat-icon>\r
                                                {{ t('smartAccessProjects.detail.editBrand') }}\r
                                            </button>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
\r
                                <!-- Color swatches -->\r
                                <div class="flex items-center gap-1">\r
                                    @for (sw of swatchEntries(); track sw.labelKey) {\r
                                        <span\r
                                            class="h-6 w-6 rounded-full border border-black/10"\r
                                            [style.background-color]="sw.value"\r
                                            [attr.title]="t(sw.labelKey) + ' \xB7 ' + sw.value"\r
                                        ></span>\r
                                    }\r
                                </div>\r
                            </div>\r
\r
                            <!-- Banner image strip -->\r
                            @if (brand.image) {\r
                                <div class="h-24 w-full overflow-hidden" [style.background-color]="brand.imageBackgroundColor">\r
                                    <img [src]="brand.image" alt="" class="h-full w-full object-cover object-center" />\r
                                </div>\r
                            }\r
                        </section>\r
\r
                        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
                             2. Live sign-in URL\r
                        \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
                        <section class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40">\r
                            <header class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                                <div>\r
                                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                        {{ t('smartAccessProjects.detail.liveUrl') }}\r
                                    </h2>\r
                                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartAccessProjects.detail.liveUrlSubtitle') }}\r
                                    </p>\r
                                </div>\r
                            </header>\r
\r
                            <div class="flex min-w-0 items-center gap-2 rounded-xl bg-stone-100 px-3 py-2 dark:bg-gray-800">\r
                                <code class="min-w-0 flex-1 break-all text-xs text-stone-800 dark:text-stone-200">{{ liveUrl() }}</code>\r
                                <button\r
                                    mat-icon-button\r
                                    type="button"\r
                                    (click)="copyValue(liveUrl())"\r
                                    [attr.aria-label]="t('smartAccessProjects.detail.copy')"\r
                                >\r
                                    <mat-icon class="icon-size-5" svgIcon="mat_outline:content_copy"></mat-icon>\r
                                </button>\r
                            </div>\r
\r
                            <div class="mt-4 flex flex-wrap gap-2">\r
                                <button mat-stroked-button type="button" class="rounded-xl" (click)="openLive()">\r
                                    <mat-icon class="!h-4 !w-4 mr-1">open_in_new</mat-icon>\r
                                    {{ t('smartAccessProjects.list.menuLiveSignIn') }}\r
                                </button>\r
                            </div>\r
                        </section>\r
\r
                        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
                             3. Login channels\r
                        \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
                        <section class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40">\r
                            <header class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                                <div>\r
                                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                        {{ t('smartAccessProjects.detail.channelsTitle') }}\r
                                    </h2>\r
                                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartAccessProjects.detail.channelsSubtitle') }}\r
                                    </p>\r
                                </div>\r
                                <div class="flex flex-wrap gap-2">\r
                                    @if (login.email && login.emailGateway === 'mailgun') {\r
                                        <button\r
                                            mat-stroked-button\r
                                            type="button"\r
                                            class="rounded-full"\r
                                            (click)="toggleOtpEmailEditor()"\r
                                        >\r
                                            <mat-icon class="!h-4 !w-4">email</mat-icon>\r
                                            {{ t('smartEnrollProjects.detail.emailTemplate.title') }}\r
                                        </button>\r
                                    }\r
                                    <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(1)">\r
                                        <mat-icon class="!h-4 !w-4">edit</mat-icon>\r
                                        {{ t('smartAccessProjects.detail.editSection') }}\r
                                    </button>\r
                                </div>\r
                            </header>\r
\r
                            <!-- Method chips -->\r
                            <div class="flex flex-wrap gap-2">\r
                                @if (login.email) {\r
                                    <span class="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">\r
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">mail</mat-icon>\r
                                        {{ t('smartAccessProjects.detail.email_' + login.emailGateway) }}\r
                                    </span>\r
                                }\r
                                @if (login.phone) {\r
                                    <span class="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">\r
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">phone</mat-icon>\r
                                        {{ t('smartAccessProjects.detail.phone_' + login.phoneGateway) }}\r
                                    </span>\r
                                }\r
                                @if (login.faceLiveness) {\r
                                    <span class="inline-flex items-center gap-1 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:border-purple-900 dark:bg-purple-950/40 dark:text-purple-200">\r
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">fingerprint</mat-icon>\r
                                        {{ t('smartAccessProjects.detail.biometrics') }}\r
                                    </span>\r
                                }\r
                                @if (login.allowPasskeys) {\r
                                    <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">security</mat-icon>\r
                                        {{ t('smartAccessProjects.detail.passkeys') }}\r
                                    </span>\r
                                }\r
                                @if (!login.email && !login.phone && !login.faceLiveness && !login.allowPasskeys) {\r
                                    <span class="text-sm text-stone-400 dark:text-stone-500">\r
                                        {{ t('smartAccessProjects.detail.noMethods') }}\r
                                    </span>\r
                                }\r
                            </div>\r
\r
                            @if (showOtpEmailEditor() && flow()?._id) {\r
                                <div class="mt-5">\r
                                    <project-flow-otp-email-editor\r
                                        [flowId]="flow()!._id!"\r
                                        [projectName]="project()?.name || 'Verifik'"\r
                                        [branding]="otpEmailBranding()"\r
                                        [emailTemplates]="flow()?.emailTemplates"\r
                                        [emailTemplateDesign]="flow()?.emailTemplateDesign || 'standard'"\r
                                        [isTccOtpEmailClient]="flow()?.isTccOtpEmailClient === true"\r
                                        (closed)="closeOtpEmailEditor()"\r
                                        (saved)="onOtpEmailSaved()"\r
                                    />\r
                                </div>\r
                            }\r
\r
                            <!-- Biometrics scores -->\r
                            @if (login.faceLiveness) {\r
                                <div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">\r
                                    <!-- Liveness score -->\r
                                    <div class="rounded-xl bg-stone-50 px-3 py-3 dark:bg-gray-900/40">\r
                                        <div class="flex items-center justify-between">\r
                                            <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                                {{ t('smartAccessProjects.detail.livenessScore') }}\r
                                            </span>\r
                                            <span class="text-sm font-bold text-stone-800 dark:text-stone-100">\r
                                                {{ login.livenessMinScorePct }}%\r
                                            </span>\r
                                        </div>\r
                                        <div class="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-gray-700">\r
                                            <div\r
                                                class="h-full rounded-full transition-all"\r
                                                [ngClass]="scoreBarClass(login.livenessMinScorePct)"\r
                                                [style.width.%]="login.livenessMinScorePct"\r
                                            ></div>\r
                                        </div>\r
                                    </div>\r
                                    <!-- Search score -->\r
                                    <div class="rounded-xl bg-stone-50 px-3 py-3 dark:bg-gray-900/40">\r
                                        <div class="flex items-center justify-between">\r
                                            <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                                {{ t('smartAccessProjects.detail.searchScore') }}\r
                                            </span>\r
                                            <span class="text-sm font-bold text-stone-800 dark:text-stone-100">\r
                                                {{ login.searchMinScorePct }}%\r
                                            </span>\r
                                        </div>\r
                                        <div class="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-gray-700">\r
                                            <div\r
                                                class="h-full rounded-full transition-all"\r
                                                [ngClass]="scoreBarClass(login.searchMinScorePct)"\r
                                                [style.width.%]="login.searchMinScorePct"\r
                                            ></div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            }\r
                        </section>\r
\r
                        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
                             4. Connect database (whitelist mode)\r
                        \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
                        <section class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40">\r
                            <header class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                                <div>\r
                                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                        {{ t('smartAccessProjects.detail.securityTitle') }}\r
                                    </h2>\r
                                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartAccessProjects.detail.securitySubtitle') }}\r
                                    </p>\r
                                </div>\r
                                <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(2)">\r
                                    <mat-icon class="!h-4 !w-4">edit</mat-icon>\r
                                    {{ t('smartAccessProjects.detail.editSection') }}\r
                                </button>\r
                            </header>\r
\r
                            <div class="flex flex-wrap gap-2">\r
                                <!-- Source mode badge -->\r
                                @if (security.source === 'API') {\r
                                    <span class="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:border-teal-900 dark:bg-teal-950/40 dark:text-teal-200">\r
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">api</mat-icon>\r
                                        {{ t('smartAccessProjects.detail.source_API') }}\r
                                    </span>\r
                                } @else if (security.source === 'CSV') {\r
                                    <span class="inline-flex items-center gap-1 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 dark:border-orange-900 dark:bg-orange-950/40 dark:text-orange-200">\r
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">upload_file</mat-icon>\r
                                        {{ t('smartAccessProjects.detail.source_CSV') }}\r
                                    </span>\r
                                } @else if (security.source === 'SMART_ENROLL') {\r
                                    <span class="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200">\r
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">how_to_reg</mat-icon>\r
                                        {{ t('smartAccessProjects.detail.source_SMART_ENROLL') }}\r
                                    </span>\r
                                } @else {\r
                                    <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-500 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-400">\r
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">remove_circle_outline</mat-icon>\r
                                        {{ t('smartAccessProjects.detail.source_NONE') }}\r
                                    </span>\r
                                }\r
                            </div>\r
\r
                            <!-- API URL detail (only when source = API) -->\r
                            @if (security.source === 'API' && security.apiUrl) {\r
                                <div class="mt-4 flex min-w-0 items-center gap-2 rounded-xl bg-stone-100 px-3 py-2 dark:bg-gray-800">\r
                                    <code class="min-w-0 flex-1 break-all text-xs text-stone-700 dark:text-stone-300">{{ security.apiUrl }}</code>\r
                                    <button\r
                                        mat-icon-button\r
                                        type="button"\r
                                        (click)="copyValue(security.apiUrl || '')"\r
                                        [attr.aria-label]="t('smartAccessProjects.detail.copy')"\r
                                    >\r
                                        <mat-icon class="icon-size-5" svgIcon="mat_outline:content_copy"></mat-icon>\r
                                    </button>\r
                                </div>\r
                            }\r
\r
                            <!-- Smart Enroll info -->\r
                            @if (security.source === 'SMART_ENROLL') {\r
                                <p class="mt-3 text-xs text-stone-500 dark:text-stone-400">\r
                                    {{ t('smartAccessProjects.detail.source_SMART_ENROLL_hint') }}\r
                                </p>\r
                            }\r
                        </section>\r
\r
                        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
                             5. Post-login (integrations)\r
                        \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
                        <section class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40">\r
                            <header class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                                <div>\r
                                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                        {{ t('smartAccessProjects.detail.integrationsTitle') }}\r
                                    </h2>\r
                                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartAccessProjects.detail.integrationsSubtitle') }}\r
                                    </p>\r
                                </div>\r
                                <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(2)">\r
                                    <mat-icon class="!h-4 !w-4">edit</mat-icon>\r
                                    {{ t('smartAccessProjects.detail.editSection') }}\r
                                </button>\r
                            </header>\r
\r
                            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">\r
                                <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">\r
                                    <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartAccessProjects.setup.whitelist.redirect_url') }}\r
                                    </span>\r
                                    @if (integrations.redirectUrl) {\r
                                        <a\r
                                            [href]="integrations.redirectUrl"\r
                                            target="_blank"\r
                                            rel="noopener noreferrer"\r
                                            class="truncate text-sm text-primary-600 hover:underline"\r
                                        >{{ integrations.redirectUrl }}</a>\r
                                    } @else {\r
                                        <span class="text-sm text-stone-500">{{ t('smartAccessProjects.detail.noValue') }}</span>\r
                                    }\r
                                </div>\r
                                <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">\r
                                    <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartAccessProjects.setup.whitelist.webhook') }}\r
                                    </span>\r
                                    <span class="text-sm text-stone-800 dark:text-stone-100">\r
                                        {{ emptyOr(integrations.webhook) }}\r
                                    </span>\r
                                </div>\r
                            </div>\r
                        </section>\r
\r
                        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
                             6. Sign-in preview\r
                        \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
                        @if (previewForm(); as form) {\r
                            <section class="rounded-2xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/40 overflow-hidden">\r
                                <div class="px-6 pt-6 pb-4">\r
                                    <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                        {{ t('smartAccessProjects.detail.previewTitle') }}\r
                                    </h2>\r
                                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartAccessProjects.detail.previewSubtitle') }}\r
                                    </p>\r
                                </div>\r
                                <div class="preview-container">\r
                                    <access-sign-in-preview\r
                                        [form]="form"\r
                                        [branding]="brandingPreview()"\r
                                    ></access-sign-in-preview>\r
                                </div>\r
                            </section>\r
                        }\r
\r
                    </div>\r
                }\r
            </div>\r
        </main>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/smart-access/projects/project-detail/access-project-detail.component.scss */\n:host {\n  display: block;\n}\n.preview-container {\n  height: 800px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.preview-container access-sign-in-preview {\n  flex: 1;\n  min-height: 0;\n  display: block;\n}\n/*# sourceMappingURL=access-project-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessProjectDetailComponent, { className: "AccessProjectDetailComponent", filePath: "src/app/modules/smart-access/projects/project-detail/access-project-detail.component.ts", lineNumber: 65 });
})();
export {
  AccessProjectDetailComponent
};
//# sourceMappingURL=chunk-H64IIRYD.js.map
