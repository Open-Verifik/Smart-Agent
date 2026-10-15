import {
  documentFailureReasonKey,
  livenessFailureReasonKey
} from "./chunk-YRZJJKLO.js";
import {
  SmartEnrollProjectsService
} from "./chunk-RNN3ZZ7Z.js";
import {
  ProjectFlowOtpEmailEditorComponent
} from "./chunk-244JWIQE.js";
import {
  Clipboard,
  ClipboardModule
} from "./chunk-FW2IPGTG.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
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
  FormsModule
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
import "./chunk-KTYFS5OT.js";
import {
  CommonModule,
  Component,
  NgClass,
  computed,
  inject,
  map,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-I5BUD46C.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/projects/project-detail/project-detail.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0) => ({ total: a0 });
var _c2 = (a0, a1) => ({ min: a0, max: a1 });
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.country;
var _forTrack3 = ($index, $item) => $item.documentCategory;
function ProjectDetailComponent_ng_container_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.project()._id);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 20);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToStaff());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_22_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToRecords());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSetup(0));
    });
    \u0275\u0275elementStart(6, "mat-icon", 22);
    \u0275\u0275text(7, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.list.menuStaff"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.viewRecords"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.openSetup"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.errorKey()), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "code", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Conditional_12_Template_button_click_6_listener($event) {
      const f_r7 = \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.copyValue(f_r7._id, $event));
    });
    \u0275\u0275element(7, "mat-icon", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.projectFlowId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx._id);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smartEnrollProjects.detail.copy"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30)(4, "code", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Conditional_13_Template_button_click_6_listener($event) {
      const cid_r9 = \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.copyValue(cid_r9, $event));
    });
    \u0275\u0275element(7, "mat-icon", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.clientId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smartEnrollProjects.detail.copy"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "p", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "div", 28)(5, "span", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 30)(8, "code", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 32);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyValue(ctx_r1.project()._id, $event));
    });
    \u0275\u0275element(11, "mat-icon", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Conditional_12_Template, 8, 3, "div", 28)(13, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Conditional_13_Template, 8, 3, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 34);
    \u0275\u0275text(15);
    \u0275\u0275elementStart(16, "a", 35);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 36)(19, "button", 37);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearSection());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 38);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToRecords());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.apiIntro"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.projectId"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.project()._id);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smartEnrollProjects.detail.copy"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_8_0 = ctx_r1.flow()) ? 12 : -1, tmp_8_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_9_0 = ctx_r1.clientId(ctx_r1.project())) ? 13 : -1, tmp_9_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.documentation"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.docsUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.viewDocs"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.backToOverview"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.list.seeLogs"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "p", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39)(4, "button", 37);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearSection());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 38);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToStaff());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.sectionHint"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.backToOverview"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.list.menuStaff"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 44);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const brand_r12 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("src", brand_r12.logo, \u0275\u0275sanitizeUrl);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 101);
    \u0275\u0275text(1, "business");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const brand_r12 = \u0275\u0275readContextLet(0);
    \u0275\u0275styleProp("color", brand_r12.titleColor);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" \xB7 ", t_r4("smartEnrollProjects.updated"), " ", ctx_r1.formatDate(ctx_r1.project().updatedAt), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 102);
  }
  if (rf & 2) {
    const sw_r13 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275styleProp("background-color", sw_r13.value);
    \u0275\u0275attribute("title", t_r4(sw_r13.labelKey) + " \xB7 " + sw_r13.value);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_For_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4(ctx), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_For_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const bucket_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", bucket_r16.label, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 108);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_For_15_Template_button_click_0_listener() {
      const bucket_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.goToRecords(bucket_r16.label));
    });
    \u0275\u0275elementStart(1, "span", 109)(2, "span", 110);
    \u0275\u0275template(3, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_For_15_Conditional_3_Template, 1, 1)(4, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_For_15_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 111);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 112);
    \u0275\u0275element(8, "span", 113);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_24_0;
    const bucket_r16 = ctx.$implicit;
    const fn_r17 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_24_0 = ctx_r1.stepLabelKey(bucket_r16.label)) ? 3 : 4, tmp_24_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", bucket_r16.count, " \xB7 ", ctx_r1.funnelShare(bucket_r16.count), "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.funnelBarWidth(bucket_r16.count, fn_r17.byCurrentStep), "%");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "span", 109)(2, "span", 110);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 111);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 112);
    \u0275\u0275element(7, "span", 114);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bucket_r18 = ctx.$implicit;
    const fn_r17 = \u0275\u0275nextContext(2);
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.status." + bucket_r18.label), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", bucket_r18.count, " \xB7 ", ctx_r1.funnelShare(bucket_r18.count), "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.funnelBarWidth(bucket_r18.count, fn_r17.byStatus), "%");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_Conditional_22_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 116)(1, "span", 117);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bucket_r19 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(6).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4(ctx_r1.documentFailureLabelKey(bucket_r19.label)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", bucket_r19.count, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 115);
    \u0275\u0275repeaterCreate(4, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_Conditional_22_For_5_Template, 5, 2, "li", 116, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fn_r17 = \u0275\u0275nextContext(2);
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.funnel.documentFailures"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(fn_r17.documentFailures);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_Conditional_23_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 116)(1, "span", 117);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bucket_r20 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(6).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4(ctx_r1.livenessFailureLabelKey(bucket_r20.label)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", bucket_r20.count, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 104);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 115);
    \u0275\u0275repeaterCreate(4, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_Conditional_23_For_5_Template, 5, 2, "li", 116, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fn_r17 = \u0275\u0275nextContext(2);
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.funnel.livenessFailures"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(fn_r17.livenessFailures);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 54)(1, "header", 55)(2, "div")(3, "h2", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.goToRecords());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 103)(10, "div")(11, "h3", 104);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 105);
    \u0275\u0275repeaterCreate(14, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_For_15_Template, 9, 5, "button", 106, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "h3", 104);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 105);
    \u0275\u0275repeaterCreate(20, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_For_21_Template, 8, 5, "div", 107, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_Conditional_22_Template, 6, 1, "div")(23, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_Conditional_23_Template, 6, 1, "div");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fn_r17 = \u0275\u0275nextContext();
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.funnel.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.funnel.subtitle", \u0275\u0275pureFunction1(7, _c1, fn_r17.total)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.viewRecords"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.funnel.byStep"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(fn_r17.byCurrentStep);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.funnel.byStatus"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(fn_r17.byStatus);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(fn_r17.documentFailures.length ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(fn_r17.livenessFailures.length ? 23 : -1);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Conditional_0_Template, 24, 9, "section", 54);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.total ? 0 : -1);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const basic_r21 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("href", basic_r21.privacyUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", basic_r21.privacyUrl, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.noValue"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const basic_r21 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("href", basic_r21.termsAndConditionsUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", basic_r21.termsAndConditionsUrl, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.noValue"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_71_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r22, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275repeaterCreate(1, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_71_For_2_Template, 2, 1, "span", 118, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const basic_r21 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275repeater(basic_r21.allowedCountries);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.basic.noCountries"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_73_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const basic_r21 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", basic_r21.dpo.email, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_73_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_73_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const basic_r21 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", basic_r21.dpo.city, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_73_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " , ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_73_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const basic_r21 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", basic_r21.dpo.country, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "p", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 119);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 120);
    \u0275\u0275template(6, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_73_Conditional_6_Template, 1, 1)(7, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_73_Conditional_7_Template, 1, 0)(8, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_73_Conditional_8_Template, 1, 1)(9, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_73_Conditional_9_Template, 1, 0)(10, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_73_Conditional_10_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const basic_r21 = \u0275\u0275readContextLet(1);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.dpo"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", basic_r21.dpo.name || t_r4("smartEnrollProjects.detail.noValue"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(basic_r21.dpo.email ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r21.dpo.email && (basic_r21.dpo.city || basic_r21.dpo.country) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r21.dpo.city ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r21.dpo.city && basic_r21.dpo.country ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r21.dpo.country ? 10 : -1);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_82_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleOtpEmailEditor());
    });
    \u0275\u0275elementStart(1, "mat-icon", 59);
    \u0275\u0275text(2, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.emailTemplate.title"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72)(1, "mat-icon", 51);
    \u0275\u0275text(2, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const signUp_r24 = \u0275\u0275readContextLet(2);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.fullName." + (signUp_r24.fullNameStyle || "separate")), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72)(1, "mat-icon", 51);
    \u0275\u0275text(2, "domain");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const signUp_r24 = \u0275\u0275readContextLet(2);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.business." + (signUp_r24.businessBasicInfoStyle || "name_number")), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73)(1, "mat-icon", 51);
    \u0275\u0275text(2, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const signUp_r24 = \u0275\u0275readContextLet(2);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.email." + signUp_r24.emailGateway), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_93_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const signUp_r24 = \u0275\u0275readContextLet(2);
    \u0275\u0275textInterpolate1(" \xB7 ", signUp_r24.countryCode, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73)(1, "mat-icon", 51);
    \u0275\u0275text(2, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_93_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const signUp_r24 = \u0275\u0275readContextLet(2);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.phone." + signUp_r24.phoneGateway), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r24.countryCode ? 4 : -1);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74)(1, "mat-icon", 51);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.address"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74)(1, "mat-icon", 51);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.terms"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74)(1, "mat-icon", 51);
    \u0275\u0275text(2, "shield");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.privacy"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_97_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r25 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.signupForm.additionalFields." + f_r25), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "p", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 67);
    \u0275\u0275repeaterCreate(4, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_97_For_5_Template, 2, 1, "span", 118, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const signUp_r24 = \u0275\u0275readContextLet(2);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.additionalFields"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(signUp_r24.additionalFields);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "project-flow-otp-email-editor", 121);
    \u0275\u0275listener("closed", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_98_Template_project_flow_otp_email_editor_closed_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.closeOtpEmailEditor());
    })("saved", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_98_Template_project_flow_otp_email_editor_saved_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onOtpEmailSaved());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("flowId", ctx_r1.flow()._id)("projectName", ((tmp_13_0 = ctx_r1.project()) == null ? null : tmp_13_0.name) || "Verifik")("branding", ctx_r1.otpEmailBranding())("emailTemplates", (tmp_15_0 = ctx_r1.flow()) == null ? null : tmp_15_0.emailTemplates)("emailTemplateDesign", ((tmp_16_0 = ctx_r1.flow()) == null ? null : tmp_16_0.emailTemplateDesign) || "standard")("isTccOtpEmailClient", ((tmp_17_0 = ctx_r1.flow()) == null ? null : tmp_17_0.isTccOtpEmailClient) === true);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73)(1, "mat-icon", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r27 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r27 === "scan" ? "photo_camera" : "file_upload");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.documents.method." + m_r27), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72)(1, "mat-icon", 51);
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.documents.screeningOn"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_118_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.documents.screening.informationVerification"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_118_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.documents.screening.criminalHistory"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_118_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 122);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.criminalEndpointLabel(e_r28), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275template(1, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_118_Conditional_1_Template, 2, 1, "span", 118)(2, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_118_Conditional_2_Template, 2, 1, "span", 118);
    \u0275\u0275repeaterCreate(3, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_118_For_4_Template, 2, 1, "span", 122, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const docs_r29 = \u0275\u0275readContextLet(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(docs_r29.informationVerification ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(docs_r29.criminalHistoryVerification ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(docs_r29.criminalEndpoints);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.documents.noCountries"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_121_For_1_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const cat_r30 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", cat_r30.templates, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_121_For_1_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_121_For_1_Conditional_6_For_2_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r30 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.documents.category." + cat_r30.documentCategory), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(cat_r30.templates ? 2 : -1);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_121_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275repeaterCreate(1, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_121_For_1_Conditional_6_For_2_Template, 3, 2, "span", 129, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(country_r31.activeCategories);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_121_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.setup.documents.types.activateHint"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_121_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123)(1, "div", 124)(2, "p", 125);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 126);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_121_For_1_Conditional_6_Template, 3, 0, "div", 127)(7, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_121_For_1_Conditional_7_Template, 2, 1, "p", 128);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r31 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", country_r31.country || t_r4("smartEnrollProjects.detail.noValue"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.documents.activeCount", \u0275\u0275pureFunction1(3, _c0, country_r31.activeCategories.length)), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(country_r31.activeCategories.length ? 6 : 7);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_121_For_1_Template, 8, 5, "div", 123, _forTrack2);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const docs_r29 = \u0275\u0275readContextLet(3);
    \u0275\u0275repeater(docs_r29.countries);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_163_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 54)(1, "header", 55)(2, "div")(3, "h2", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_163_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openSetup(3));
    });
    \u0275\u0275elementStart(8, "mat-icon", 59);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 15)(12, "span", 74)(13, "mat-icon", 51);
    \u0275\u0275text(14, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 74)(17, "mat-icon", 51);
    \u0275\u0275text(18, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const reps_r33 = \u0275\u0275readContextLet(5);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.steps.representatives"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.representatives.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.summary.representatives", \u0275\u0275pureFunction2(5, _c2, reps_r33.minRepresentatives, reps_r33.maxRepresentatives)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.representatives.notification." + reps_r33.notificationType), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_179_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "code", 130);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 32);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_179_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r34);
      \u0275\u0275nextContext();
      const integ_r35 = \u0275\u0275readContextLet(6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyValue(integ_r35.redirectUrl, $event));
    });
    \u0275\u0275elementStart(4, "mat-icon", 59);
    \u0275\u0275text(5, "content_copy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const integ_r35 = \u0275\u0275readContextLet(6);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(integ_r35.redirectUrl);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smartEnrollProjects.detail.copy"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_180_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.noValue"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const integ_r35 = \u0275\u0275readContextLet(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(integ_r35.webhook);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.setup.integrations.webhook.none"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74)(1, "mat-icon", 51);
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code", 131);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const integ_r35 = \u0275\u0275readContextLet(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(integ_r35.apiUrl);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_208_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 91);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const brand_r12 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("src", brand_r12.logo, \u0275\u0275sanitizeUrl);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_209_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.noValue"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_214_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 91);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const brand_r12 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("src", brand_r12.image, \u0275\u0275sanitizeUrl);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_215_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.noValue"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_218_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "span", 132);
    \u0275\u0275elementStart(2, "p", 133);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 134);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sw_r36 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", sw_r36.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4(sw_r36.labelKey), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sw_r36.value);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_233_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 12)(2, "p", 98);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "code", 99);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_233_Template_button_click_6_listener($event) {
      const f_r38 = \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.copyValue(f_r38._id, $event));
    });
    \u0275\u0275element(7, "mat-icon", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.projectFlowId"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx._id);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smartEnrollProjects.detail.copy"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0)(1)(2)(3)(4)(5)(6);
    \u0275\u0275elementStart(7, "div", 25)(8, "section", 40)(9, "div", 41)(10, "div", 42)(11, "div", 43);
    \u0275\u0275template(12, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_12_Template, 1, 1, "img", 44)(13, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_13_Template, 2, 2, "mat-icon", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12)(15, "p", 46);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 47);
    \u0275\u0275text(18);
    \u0275\u0275template(19, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_19_Template, 1, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 48)(21, "span", 49);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 50);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(5));
    });
    \u0275\u0275elementStart(24, "mat-icon", 51);
    \u0275\u0275text(25, "palette");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 52);
    \u0275\u0275repeaterCreate(28, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_29_Template, 1, 3, "span", 53, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Template, 1, 1);
    \u0275\u0275elementStart(31, "section", 54)(32, "header", 55)(33, "div")(34, "h2", 56);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 57);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(0));
    });
    \u0275\u0275elementStart(39, "mat-icon", 59);
    \u0275\u0275text(40, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 60)(43, "div", 61)(44, "span", 62);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 63);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 61)(49, "span", 62);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 63);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 61)(54, "span", 62);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 63);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 61)(59, "span", 62);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_61_Template, 2, 2, "a", 64)(62, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_62_Template, 2, 1, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 61)(64, "span", 62);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_66_Template, 2, 2, "a", 64)(67, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Template, 2, 1, "span", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 66)(69, "p", 62);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_71_Template, 3, 0, "div", 67)(72, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_72_Template, 2, 1, "p", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(73, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_73_Template, 11, 7, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "section", 54)(75, "header", 55)(76, "div")(77, "h2", 56);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 57);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 15);
    \u0275\u0275template(82, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_82_Template, 4, 1, "button", 70);
    \u0275\u0275elementStart(83, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(1));
    });
    \u0275\u0275elementStart(84, "mat-icon", 59);
    \u0275\u0275text(85, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "div", 15)(88, "span", 71);
    \u0275\u0275text(89);
    \u0275\u0275elementEnd();
    \u0275\u0275template(90, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_90_Template, 4, 1, "span", 72)(91, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_91_Template, 4, 1, "span", 72)(92, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_92_Template, 4, 1, "span", 73)(93, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_93_Template, 5, 2, "span", 73)(94, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_94_Template, 4, 1, "span", 74)(95, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_95_Template, 4, 1, "span", 74)(96, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_96_Template, 4, 1, "span", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275template(97, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_97_Template, 6, 1, "div", 66)(98, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_98_Template, 1, 6, "project-flow-otp-email-editor", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "section", 54)(100, "header", 55)(101, "div")(102, "h2", 56);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "p", 57);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_106_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(2));
    });
    \u0275\u0275elementStart(107, "mat-icon", 59);
    \u0275\u0275text(108, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 15)(111, "span", 74)(112, "mat-icon", 51);
    \u0275\u0275text(113, "replay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(114);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(115, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_116_Template, 4, 2, "span", 73, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(117, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_117_Template, 4, 1, "span", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275template(118, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_118_Template, 5, 2, "div", 76);
    \u0275\u0275elementStart(119, "div", 77);
    \u0275\u0275template(120, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_120_Template, 2, 1, "p", 65)(121, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_121_Template, 2, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "section", 54)(123, "header", 55)(124, "div")(125, "h2", 56);
    \u0275\u0275text(126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "p", 57);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_129_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(3));
    });
    \u0275\u0275elementStart(130, "mat-icon", 59);
    \u0275\u0275text(131, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 78)(134, "span", 74)(135, "mat-icon", 51);
    \u0275\u0275text(136, "replay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(137);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "div", 79)(139, "div", 80)(140, "div", 81)(141, "span", 82);
    \u0275\u0275text(142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "span", 83);
    \u0275\u0275text(144);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "div", 84);
    \u0275\u0275element(146, "div", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div", 80)(148, "div", 81)(149, "span", 82);
    \u0275\u0275text(150);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "span", 83);
    \u0275\u0275text(152);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(153, "div", 84);
    \u0275\u0275element(154, "div", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "div", 80)(156, "div", 81)(157, "span", 82);
    \u0275\u0275text(158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "span", 83);
    \u0275\u0275text(160);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "div", 84);
    \u0275\u0275element(162, "div", 85);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(163, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_163_Template, 20, 8, "section", 54);
    \u0275\u0275elementStart(164, "section", 54)(165, "header", 55)(166, "div")(167, "h2", 56);
    \u0275\u0275text(168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "p", 57);
    \u0275\u0275text(170);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_171_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(4));
    });
    \u0275\u0275elementStart(172, "mat-icon", 59);
    \u0275\u0275text(173, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(174);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(175, "div", 60)(176, "div", 61)(177, "span", 62);
    \u0275\u0275text(178);
    \u0275\u0275elementEnd();
    \u0275\u0275template(179, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_179_Template, 6, 2, "div", 86)(180, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_180_Template, 2, 1, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "div", 61)(182, "span", 62);
    \u0275\u0275text(183);
    \u0275\u0275elementEnd();
    \u0275\u0275template(184, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_184_Template, 2, 1, "code", 87)(185, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_185_Template, 2, 1, "span", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "div", 88)(187, "span", 74)(188, "mat-icon", 51);
    \u0275\u0275text(189, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(190);
    \u0275\u0275elementEnd();
    \u0275\u0275template(191, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_191_Template, 5, 1, "span", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(192, "section", 54)(193, "header", 55)(194, "div")(195, "h2", 56);
    \u0275\u0275text(196);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "p", 57);
    \u0275\u0275text(198);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(199, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_199_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(5));
    });
    \u0275\u0275elementStart(200, "mat-icon", 59);
    \u0275\u0275text(201, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(202);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(203, "div", 60)(204, "div", 89)(205, "p", 62);
    \u0275\u0275text(206);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "div", 90);
    \u0275\u0275template(208, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_208_Template, 1, 1, "img", 91)(209, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_209_Template, 2, 1, "span", 92);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(210, "div", 89)(211, "p", 62);
    \u0275\u0275text(212);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "div", 90);
    \u0275\u0275template(214, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_214_Template, 1, 1, "img", 91)(215, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_215_Template, 2, 1, "span", 92);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(216, "div", 93);
    \u0275\u0275repeaterCreate(217, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_218_Template, 6, 4, "div", 94, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(219, "section", 54)(220, "h2", 95);
    \u0275\u0275text(221);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "p", 57);
    \u0275\u0275text(223);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "div", 96)(225, "div", 97)(226, "div", 12)(227, "p", 98);
    \u0275\u0275text(228);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(229, "code", 99);
    \u0275\u0275text(230);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(231, "button", 32);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_231_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyValue(ctx_r1.project()._id, $event));
    });
    \u0275\u0275element(232, "mat-icon", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(233, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_233_Template, 8, 3, "div", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(234, "p", 100);
    \u0275\u0275text(235);
    \u0275\u0275elementStart(236, "a", 35);
    \u0275\u0275text(237);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    let tmp_20_0;
    let tmp_25_0;
    let tmp_55_0;
    let tmp_105_0;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const brand_r39 = \u0275\u0275storeLet(ctx_r1.brandingPreview());
    \u0275\u0275advance();
    const basic_r40 = \u0275\u0275storeLet(ctx_r1.basicPreview());
    \u0275\u0275advance();
    const signUp_r41 = \u0275\u0275storeLet(ctx_r1.signUpPreview());
    \u0275\u0275advance();
    const docs_r42 = \u0275\u0275storeLet(ctx_r1.documentsPreview());
    const liveness_r43 = ctx_r1.livenessPreview();
    \u0275\u0275advance(2);
    const reps_r44 = \u0275\u0275storeLet(ctx_r1.representativesPreview());
    \u0275\u0275advance();
    const integ_r45 = \u0275\u0275storeLet(ctx_r1.integrationsPreview());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", brand_r39.backgroundColor);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", brand_r39.imageBackgroundColor);
    \u0275\u0275advance();
    \u0275\u0275conditional(brand_r39.logo ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", brand_r39.titleColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.project().name || t_r4("smartEnrollProjects.detail.untitledProject"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", brand_r39.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.summary.target." + ctx_r1.target()), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.project().updatedAt ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ((tmp_19_0 = ctx_r1.flow()) == null ? null : tmp_19_0.status) === "active" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200" : "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_20_0 = ctx_r1.flow()) == null ? null : tmp_20_0.status) || "draft", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", brand_r39.buttonColor)("color", brand_r39.buttonTextColor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.brand.editBrand"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.swatchEntries());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_25_0 = ctx_r1.funnel()) ? 30 : -1, tmp_25_0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.steps.basic_setup"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.name"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", basic_r40.name || t_r4("smartEnrollProjects.detail.noValue"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.contactEmail"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", basic_r40.contactEmail || t_r4("smartEnrollProjects.detail.noValue"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.defaultLanguage"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", basic_r40.defaultLanguage || "en", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.privacyUrl"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r40.privacyUrl ? 61 : 62);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.termsUrl"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r40.termsAndConditionsUrl ? 66 : 67);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.allowedCountries"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r40.allowedCountries.length ? 71 : 72);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(basic_r40.dpo ? 73 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.steps.signup_form"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(signUp_r41.email && signUp_r41.emailGateway === "mailgun" ? 82 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.summary.target." + signUp_r41.target), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r41.target === "personal" && signUp_r41.fullName ? 90 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r41.target === "business" && signUp_r41.businessBasicInfo ? 91 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r41.email ? 92 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r41.phone ? 93 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r41.address ? 94 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r41.showTermsAndConditions ? 95 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r41.showPrivacyNotice ? 96 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r41.target === "personal" && signUp_r41.additionalFields.length ? 97 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showOtpEmailEditor() && ((tmp_55_0 = ctx_r1.flow()) == null ? null : tmp_55_0._id) ? 98 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", docs_r42.target === "business" ? t_r4("smartEnrollProjects.setup.steps.business") : t_r4("smartEnrollProjects.setup.steps.documents"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.documents.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.documents.attempts", \u0275\u0275pureFunction1(112, _c0, docs_r42.attemptLimit)), " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(docs_r42.verificationMethods);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(docs_r42.screening ? 117 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(docs_r42.screening ? 118 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(docs_r42.countries.length === 0 ? 120 : 121);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.steps.liveness"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.liveness.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.documents.attempts", \u0275\u0275pureFunction1(114, _c0, liveness_r43.attemptLimit)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.liveness.thresholds.minScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", liveness_r43.minScore, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", liveness_r43.minScore, "%");
    \u0275\u0275property("ngClass", ctx_r1.scoreBarClass(liveness_r43.minScore));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.liveness.thresholds.compareMinScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", liveness_r43.compareMinScore, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", liveness_r43.compareMinScore, "%");
    \u0275\u0275property("ngClass", ctx_r1.scoreBarClass(liveness_r43.compareMinScore));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.liveness.thresholds.searchMinScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", liveness_r43.searchMinScore, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", liveness_r43.searchMinScore, "%");
    \u0275\u0275property("ngClass", ctx_r1.scoreBarClass(liveness_r43.searchMinScore));
    \u0275\u0275advance();
    \u0275\u0275conditional(reps_r44 ? 163 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.steps.integrations"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.integrations.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.integrations.redirect.title"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(integ_r45.redirectUrl ? 179 : 180);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.integrations.webhook.title"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(integ_r45.webhook ? 184 : 185);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", integ_r45.source === "API" ? t_r4("smartEnrollProjects.setup.integrations.source.api") : t_r4("smartEnrollProjects.setup.integrations.source.none"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(integ_r45.source === "API" && integ_r45.apiUrl ? 191 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.brand.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.brand.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.brand.logo"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", brand_r39.imageBackgroundColor);
    \u0275\u0275advance();
    \u0275\u0275conditional(brand_r39.logo ? 208 : 209);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.brand.image"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", brand_r39.imageBackgroundColor);
    \u0275\u0275advance();
    \u0275\u0275conditional(brand_r39.image ? 214 : 215);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.swatchEntries());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.sectionApi"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.apiIntro"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.projectId"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.project()._id);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smartEnrollProjects.detail.copy"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_105_0 = ctx_r1.flow()) ? 233 : -1, tmp_105_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.documentation"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.docsUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.viewDocs"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Template, 23, 11, "div", 24)(1, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_1_Template, 8, 3, "div", 24)(2, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template, 238, 116, "div", 25);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.section() === "api" ? 0 : ctx_r1.section() ? 1 : 2);
  }
}
function ProjectDetailComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
    \u0275\u0275text(6, " Verifik ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "mat-icon", 6);
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "mat-icon", 6);
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "button", 11);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.section() ? ctx_r1.clearSection() : ctx_r1.goToList());
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 12)(19, "h1", 13);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ProjectDetailComponent_ng_container_0_Conditional_21_Template, 2, 1, "p", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ProjectDetailComponent_ng_container_0_Conditional_22_Template, 9, 3, "div", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "main", 16)(24, "div", 17);
    \u0275\u0275template(25, ProjectDetailComponent_ng_container_0_Conditional_25_Template, 2, 0, "div", 18)(26, ProjectDetailComponent_ng_container_0_Conditional_26_Template, 3, 3, "div", 19)(27, ProjectDetailComponent_ng_container_0_Conditional_27_Template, 3, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4(ctx_r1.sectionTitleKey()));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx_r1.section() ? t_r4("smartEnrollProjects.detail.backToOverview") : t_r4("smartEnrollProjects.backToList"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx_r1.project()) == null ? null : tmp_5_0.name) || ((tmp_5_0 = ctx_r1.project()) == null ? null : tmp_5_0._id), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_6_0 = ctx_r1.project()) == null ? null : tmp_6_0._id) ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.project() && !ctx_r1.loading() && !ctx_r1.section() ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() ? 25 : ctx_r1.errorKey() ? 26 : ctx_r1.project() ? 27 : -1);
  }
}
var FUNNEL_STEP_LABELS = /* @__PURE__ */ new Set([
  "1",
  "not_started",
  "instructions",
  "signUpForm",
  "basicInformation",
  "document",
  "liveness",
  "form",
  "end",
  "skipKYC"
]);
var ProjectDetailComponent = class _ProjectDetailComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._clipboard = inject(Clipboard);
    this._transloco = inject(TranslocoService);
    this.project = signal(null);
    this.loading = signal(true);
    this.errorKey = signal(null);
    this.section = signal(null);
    this.showOtpEmailEditor = signal(false);
    this.funnel = signal(null);
    this.flow = computed(() => {
      const flows = this.project()?.projectFlows;
      if (!flows?.length)
        return null;
      const onboardingFlows = flows.filter((f) => f.type === "onboarding");
      if (!onboardingFlows.length)
        return null;
      const active = onboardingFlows.find((f) => f.status && f.status !== "draft");
      return active ?? onboardingFlows[0];
    });
    this.target = computed(() => {
      const t = this.flow()?.target ?? this.project()?.target;
      return t === "business" ? "business" : "personal";
    });
    this.basicPreview = computed(() => {
      const p = this.project();
      return {
        name: p?.name ?? "",
        contactEmail: p?.contactEmail ?? "",
        defaultLanguage: p?.defaultLanguage ?? "en",
        allowedCountries: p?.allowedCountries ?? [],
        privacyUrl: p?.privacyUrl ?? "",
        termsAndConditionsUrl: p?.termsAndConditionsUrl ?? "",
        dpo: p?.dataProtection ?? null
      };
    });
    this.signUpPreview = computed(() => {
      const f = this.flow();
      const sf = f?.signUpForm ?? f?.onboardingSettings?.signUpForm ?? {};
      let fullNameStyle = sf["fullNameStyle"];
      if (!fullNameStyle) {
        if (sf["firstName"] && sf["lastName"]) {
          fullNameStyle = "separate";
        } else if (sf["fullName"]) {
          fullNameStyle = "together";
        }
      }
      const businessBasicInfoStyle = sf["businessBasicInfoStyle"];
      return {
        target: this.target(),
        fullName: !!(sf["fullName"] || sf["firstName"] || sf["lastName"]),
        fullNameStyle,
        businessBasicInfo: !!sf["businessBasicInfo"],
        businessBasicInfoStyle,
        email: !!sf["email"],
        emailGateway: sf["emailGateway"] ?? "none",
        phone: !!sf["phone"],
        phoneGateway: sf["phoneGateway"] ?? "none",
        countryCode: sf["countryCode"] ?? "",
        additionalFields: sf["additionalFields"] ?? sf["extraFields"] ?? [],
        address: !!sf["address"],
        showTermsAndConditions: !!sf["showTermsAndConditions"],
        showPrivacyNotice: !!sf["showPrivacyNotice"]
      };
    });
    this.documentsPreview = computed(() => {
      const f = this.flow();
      const target = this.target();
      const docsV3 = target === "business" ? f?.business : f?.documents;
      const isV3 = !!docsV3 && Object.keys(docsV3).length > 0;
      let attemptLimit = 3;
      let verificationMethods = [];
      let screening = false;
      let informationVerification = false;
      let criminalHistoryVerification = false;
      let criminalEndpoints = [];
      let countries = [];
      if (isV3) {
        const docs = docsV3 ?? {};
        attemptLimit = docs["attemptLimit"] ?? 3;
        verificationMethods = docs["verificationMethods"] ?? [];
        screening = !!docs["screening"];
        informationVerification = !!docs["informationVerification"];
        criminalHistoryVerification = !!docs["criminalHistoryVerification"];
        criminalEndpoints = docs["criminalHistoryVerificationEndpoints"] ?? [];
        const documentTypes = docs["documentTypes"] ?? [];
        countries = documentTypes.map((dt) => {
          const configurations = dt["configurations"] ?? [];
          return {
            country: dt["country"] ?? "",
            activeCategories: configurations.filter((c) => !!c["active"]).map((c) => {
              const templates = c["documentTemplates"] ?? [];
              return {
                documentCategory: c["documentCategory"] ?? "",
                templates: templates.filter((tpl) => !!tpl["promptTemplate"]).length
              };
            })
          };
        });
      } else {
        const docV2 = f?.onboardingSettings?.["document"] ?? {};
        attemptLimit = docV2["maxAttempts"] ?? 3;
        const uploadAllowed = docV2["uploadDocumentAllowed"] !== false;
        const scanAllowed = docV2["scanDocumentAllowed"] !== false;
        if (uploadAllowed)
          verificationMethods.push("upload");
        if (scanAllowed)
          verificationMethods.push("scan");
        informationVerification = !!docV2["verifyNames"];
        criminalHistoryVerification = !!docV2["verifyCriminalHistory"];
        screening = informationVerification || criminalHistoryVerification;
        criminalEndpoints = docV2["criminalEndpoints"] ?? [];
        const activeCategories = [];
        if (!!docV2["useGovernmentID"]) {
          activeCategories.push({ documentCategory: "government_id", templates: 0 });
        }
        if (!!docV2["usePassport"]) {
          activeCategories.push({ documentCategory: "passport", templates: 0 });
        }
        if (!!docV2["useLicense"]) {
          activeCategories.push({ documentCategory: "license", templates: 0 });
        }
        const countriesList = this.project()?.allowedCountries ?? [];
        if (countriesList.length > 0) {
          countries = countriesList.map((c) => ({
            country: c,
            activeCategories
          }));
        } else {
          countries = [
            {
              country: "Global",
              activeCategories
            }
          ];
        }
      }
      return {
        target,
        attemptLimit,
        verificationMethods,
        screening,
        informationVerification,
        criminalHistoryVerification,
        criminalEndpoints,
        countries
      };
    });
    this.livenessPreview = computed(() => {
      const f = this.flow();
      const isV3 = !!f?.liveness;
      const pct = (v) => {
        if (typeof v === "number") {
          return v > 1 ? Math.round(v) : Math.round(v * 100);
        }
        return 0;
      };
      if (isV3) {
        const liveness = f?.liveness ?? {};
        return {
          kycType: liveness["kycType"] ?? "traditional",
          attemptLimit: liveness["attemptLimit"] ?? 3,
          minScore: pct(liveness["minScore"]),
          compareMinScore: pct(liveness["compareMinScore"]),
          searchMinScore: pct(liveness["searchMinScore"]),
          searchMode: liveness["searchMode"] ?? "FAST"
        };
      } else {
        const livenessV2 = f?.onboardingSettings?.["liveness"] ?? {};
        const docV2 = f?.onboardingSettings?.["document"] ?? {};
        return {
          kycType: "traditional",
          attemptLimit: livenessV2["maxAttempts"] ?? 3,
          minScore: pct(livenessV2["livenessMinScore"]),
          compareMinScore: pct(docV2["compareMinScore"]),
          searchMinScore: pct(livenessV2["searchMinScore"]),
          searchMode: livenessV2["searchMode"] ?? "FAST"
        };
      }
    });
    this.representativesPreview = computed(() => {
      if (this.target() !== "business")
        return null;
      const r = this.flow()?.representatives ?? {};
      return {
        minRepresentatives: r["minRepresentatives"] ?? 1,
        maxRepresentatives: r["maxRepresentatives"] ?? 1,
        notificationType: r["notificationType"] ?? "email"
      };
    });
    this.integrationsPreview = computed(() => {
      const i = this.flow()?.integrations ?? {};
      return {
        redirectUrl: i["redirectUrl"] ?? "",
        webhook: i["webhook"] ?? "",
        source: i["source"] ?? "NONE",
        apiUrl: i["apiUrl"] ?? ""
      };
    });
    this.brandingPreview = computed(() => {
      const b = this.project()?.branding ?? {};
      return {
        logo: b.logo,
        image: b.image,
        titleColor: b.titleColor || "#0f172a",
        textColor: b.textColor || b.txtColor || "#475569",
        buttonColor: b.buttonColor || "#2563eb",
        buttonTextColor: b.buttonTextColor || b.buttonTxtColor || "#ffffff",
        backgroundColor: b.backgroundColor || b.bgColor || "#ffffff",
        imageBackgroundColor: b.imageBackgroundColor || "#ffffff"
      };
    });
    this.swatchEntries = computed(() => {
      const b = this.brandingPreview();
      return [
        { key: "titleColor", labelKey: "smartEnrollProjects.setup.ui.colors.title", value: b.titleColor },
        { key: "textColor", labelKey: "smartEnrollProjects.setup.ui.colors.text", value: b.textColor },
        { key: "buttonColor", labelKey: "smartEnrollProjects.setup.ui.colors.button", value: b.buttonColor },
        { key: "buttonTextColor", labelKey: "smartEnrollProjects.setup.ui.colors.buttonText", value: b.buttonTextColor },
        { key: "backgroundColor", labelKey: "smartEnrollProjects.setup.ui.colors.background", value: b.backgroundColor },
        { key: "imageBackgroundColor", labelKey: "smartEnrollProjects.setup.ui.colors.imageBackground", value: b.imageBackgroundColor }
      ];
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
    const id = this._route.snapshot.paramMap.get("projectId");
    if (!id) {
      this.goToList();
      return;
    }
    this._sectionSub = this._route.queryParamMap.pipe(map((q) => q.get("section"))).subscribe((s) => this.section.set(s));
    this._projectsService.getProjectFunnel(id).subscribe((funnel) => this.funnel.set(funnel));
    this._projectsService.getProject(id).subscribe({
      next: (p) => {
        this.project.set(p);
        this.loading.set(false);
        if (!p)
          this.errorKey.set("smartEnrollProjects.projectNotFound");
      },
      error: () => {
        this.errorKey.set("smartEnrollProjects.loadError");
        this.loading.set(false);
      }
    });
  }
  ngOnDestroy() {
    this._sectionSub?.unsubscribe();
  }
  goToList() {
    this._router.navigate(["/smart-enroll/projects"]);
  }
  goToRecords(step) {
    const id = this.project()?._id;
    if (!id)
      return;
    const filter = step === "not_started" ? "1" : step;
    this._router.navigate(["/smart-enroll/projects", id, "records"], {
      queryParams: filter ? { step: filter } : {}
    });
  }
  /** Translation key for a step value, falling back to the raw value when it is unknown. */
  stepLabelKey(step) {
    return FUNNEL_STEP_LABELS.has(step) ? `smartEnrollProjects.step.${step}` : "";
  }
  /**
   * Share of the project's registrations sitting in a bucket, as a bar width.
   * Relative to the largest bucket rather than the total, so small buckets stay visible.
   */
  funnelBarWidth(count, buckets) {
    const largest = Math.max(...buckets.map((bucket) => bucket.count), 0);
    return largest > 0 ? Math.max(Math.round(count / largest * 100), 2) : 0;
  }
  /**
   * Translated label for a failure reason bucket.
   *
   * The raw `failedReason` can be an upstream message carrying internal paths, so the funnel
   * shows the same vetted labels as the record detail rather than the stored string.
   */
  documentFailureLabelKey(reason) {
    return `smartEnrollProjects.recordDetail.documentFailedReason.${documentFailureReasonKey(reason)}`;
  }
  /** Translated label for a liveness failure reason bucket. */
  livenessFailureLabelKey(reason) {
    return `smartEnrollProjects.recordDetail.biometricReason.${livenessFailureReasonKey(reason)}`;
  }
  /** Percentage of all registrations, for the label beside the count. */
  funnelShare(count) {
    const total = this.funnel()?.total ?? 0;
    return total > 0 ? Math.round(count / total * 100) : 0;
  }
  goToStaff() {
    const id = this.project()?._id;
    if (!id)
      return;
    this._router.navigate(["/smart-enroll/projects", id, "staff"]);
  }
  openSetup(step = 0) {
    const id = this.project()?._id;
    if (!id)
      return;
    this._router.navigate(["/smart-enroll/projects", id, "setup", step]);
  }
  clearSection() {
    const id = this.project()?._id;
    if (!id)
      return;
    this._router.navigate(["/smart-enroll/projects", id], { queryParams: {} });
  }
  sectionTitleKey() {
    const s = this.section();
    const mapKeys = {
      signup: "smartEnrollProjects.detail.sectionSignup",
      documents: "smartEnrollProjects.detail.sectionDocuments",
      liveness: "smartEnrollProjects.detail.sectionLiveness",
      api: "smartEnrollProjects.detail.sectionApi"
    };
    return s ? mapKeys[s] ?? "smartEnrollProjects.detailTitle" : "smartEnrollProjects.detailTitle";
  }
  clientId(project) {
    if (!project?.client)
      return null;
    return typeof project.client === "string" ? project.client : project.client._id;
  }
  docsUrl() {
    const lang = this._transloco.getActiveLang();
    const useEn = lang === "fr" || lang !== "es";
    return useEn ? "https://docs.verifik.co/services/smart-enroll" : "https://docs.verifik.co/verifik-es/services/smart-enroll";
  }
  copyValue(value, event) {
    event?.stopPropagation();
    if (value)
      this._clipboard.copy(value);
  }
  formatDate(date) {
    if (!date)
      return "\u2014";
    return DateTime.fromISO(date).toFormat("MMM dd, yyyy HH:mm");
  }
  /** Tailwind class for the colored bar in the liveness card. */
  scoreBarClass(percent) {
    if (percent >= 85)
      return "bg-emerald-500";
    if (percent >= 70)
      return "bg-amber-500";
    return "bg-rose-500";
  }
  /**
   * Friendly label for a criminal-history endpoint identifier.
   * `local_api` is translated; `world_api_*` codes map to the agency's
   * proper-case name; anything else falls back to the raw code.
   */
  criminalEndpointLabel(value) {
    if (value === "local_api") {
      return this._transloco.translate("smartEnrollProjects.setup.documents.screening.localApi");
    }
    const map2 = {
      world_api_interpol: "Interpol",
      world_api_fbi: "FBI",
      world_api_dea: "DEA",
      world_api_europol: "Europol",
      world_api_ofac: "OFAC",
      world_api_onu: "ONU",
      colombia_api_inpec: this._transloco.translate("smartEnrollProjects.setup.documents.screening.checks.colombia.inpec.title"),
      colombia_api_identity_lookup_procuraduria: this._transloco.translate("smartEnrollProjects.setup.documents.screening.checks.colombia.procuraduria.title"),
      colombia_api_police_rnmc: this._transloco.translate("smartEnrollProjects.setup.documents.screening.checks.colombia.rnmc.title"),
      colombia_special_api_police_identity_lookup: this._transloco.translate("smartEnrollProjects.setup.documents.screening.checks.colombia.police.title")
    };
    return map2[value] ?? value;
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
      next: (p) => this.project.set(p)
    });
  }
  static {
    this.\u0275fac = function ProjectDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetailComponent, selectors: [["project-detail"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "max-w-5xl"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-enroll/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "mt-5", "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "font-mono", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "gap-2"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-5xl"], [1, "flex", "justify-center", "py-20"], [1, "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], [1, "!h-4", "!w-4", "mr-1"], ["diameter", "40"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "dark:border-gray-700", "dark:bg-gray-900/40", "md:p-8"], [1, "flex", "flex-col", "gap-6"], [1, "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "mt-6", "space-y-4"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], [1, "flex", "min-w-0", "items-center", "gap-2", "rounded-xl", "bg-stone-100", "px-3", "py-2", "dark:bg-gray-800"], [1, "min-w-0", "flex-1", "break-all", "text-xs", "text-stone-800", "dark:text-stone-200"], ["mat-icon-button", "", "type", "button", 3, "click"], ["svgIcon", "mat_outline:content_copy", 1, "icon-size-5"], [1, "mt-6", "text-sm", "text-stone-600", "dark:text-stone-400"], ["target", "_blank", "rel", "noopener noreferrer", 1, "font-semibold", "text-primary-600", "hover:underline", 3, "href"], [1, "mt-8", "flex", "flex-wrap", "gap-2"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-xl", 3, "click"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", 3, "click"], [1, "mt-6", "flex", "flex-wrap", "gap-2"], [1, "overflow-hidden", "rounded-3xl", "border", "border-stone-200/90", "dark:border-gray-700", "dark:!bg-gradient-to-b", "dark:!from-[#11122a]", "dark:!to-[#161828]"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-6", "p-6", "md:p-8"], [1, "flex", "items-start", "gap-4"], [1, "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded-2xl", "border", "border-black/5", "dark:border-white/10", "dark:!bg-white/5"], ["alt", "", 1, "h-full", "w-full", "object-contain", 3, "src"], [1, "!h-7", "!w-7", "dark:!text-stone-300", 3, "color"], [1, "text-2xl", "font-semibold", "leading-tight", "dark:!text-white"], [1, "mt-1", "text-sm", "dark:!text-stone-400"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-2"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], ["type", "button", 1, "inline-flex", "items-center", "gap-1", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", "shadow-sm", 3, "click"], [1, "!h-3.5", "!w-3.5", "!text-[14px]"], [1, "flex", "items-center", "gap-1"], [1, "h-6", "w-6", "rounded-full", "border", "border-black/10", "dark:border-white/20", 3, "background-color"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mb-4", "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["mat-stroked-button", "", "type", "button", 1, "rounded-full", 3, "click"], [1, "!h-4", "!w-4"], [1, "grid", "grid-cols-1", "gap-3", "md:grid-cols-2"], [1, "flex", "flex-col", "gap-1", "rounded-xl", "bg-stone-50", "px-3", "py-2", "dark:bg-gray-900/40"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "text-sm", "text-stone-800", "dark:text-stone-100"], ["target", "_blank", "rel", "noopener noreferrer", 1, "truncate", "text-sm", "text-primary-600", "hover:underline", 3, "href"], [1, "text-sm", "text-stone-500"], [1, "mt-4"], [1, "mt-2", "flex", "flex-wrap", "gap-1.5"], [1, "mt-1", "text-sm", "text-stone-500"], [1, "mt-4", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50/60", "px-3", "py-3", "dark:border-gray-700", "dark:bg-gray-900/40"], ["mat-stroked-button", "", "type", "button", 1, "rounded-full"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-stone-900", "px-3", "py-1", "text-xs", "font-semibold", "text-white", "dark:bg-stone-200", "dark:text-stone-900"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-emerald-200", "bg-emerald-50", "px-3", "py-1", "text-xs", "font-medium", "text-emerald-700", "dark:border-emerald-900", "dark:bg-emerald-950/40", "dark:text-emerald-200"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-blue-200", "bg-blue-50", "px-3", "py-1", "text-xs", "font-medium", "text-blue-700", "dark:border-blue-900", "dark:bg-blue-950/40", "dark:text-blue-200"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-3", "py-1", "text-xs", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200"], [3, "flowId", "projectName", "branding", "emailTemplates", "emailTemplateDesign", "isTccOtpEmailClient"], [1, "mt-3", "flex", "flex-wrap", "gap-1.5"], [1, "mt-4", "flex", "flex-col", "gap-2"], [1, "mb-4", "flex", "flex-wrap", "items-center", "gap-2"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "items-baseline", "justify-between", "gap-2"], [1, "text-xs", "font-medium", "text-stone-600", "dark:text-stone-300"], [1, "font-mono", "text-sm", "font-semibold", "text-stone-900", "dark:text-stone-100"], [1, "h-2", "w-full", "overflow-hidden", "rounded-full", "bg-stone-100", "dark:bg-gray-800"], [1, "h-full", 3, "ngClass"], [1, "flex", "items-center", "gap-2"], [1, "truncate", "text-xs", "text-stone-800", "dark:text-stone-200"], [1, "mt-3", "flex", "flex-wrap", "gap-2"], [1, "flex", "flex-col", "gap-2", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50", "p-3", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "flex", "h-32", "items-center", "justify-center", "overflow-hidden", "rounded-lg"], ["alt", "", 1, "max-h-full", "max-w-full", "object-contain", 3, "src"], [1, "text-xs", "text-stone-500"], [1, "mt-4", "grid", "grid-cols-2", "gap-3", "sm:grid-cols-3", "md:grid-cols-6"], [1, "flex", "flex-col", "items-center", "gap-1", "rounded-xl", "border", "border-stone-200/80", "px-2", "py-3", "dark:border-gray-700"], [1, "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-4", "grid", "grid-cols-1", "gap-3", "md:grid-cols-2"], [1, "flex", "items-center", "justify-between", "gap-2", "rounded-xl", "bg-stone-100", "px-3", "py-2", "dark:bg-gray-800"], [1, "text-[11px]", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "block", "truncate", "text-xs", "text-stone-800", "dark:text-stone-200"], [1, "mt-4", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "!h-7", "!w-7", "dark:!text-stone-300"], [1, "h-6", "w-6", "rounded-full", "border", "border-black/10", "dark:border-white/20"], [1, "grid", "grid-cols-1", "gap-6", "md:grid-cols-2"], [1, "mb-3", "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-2"], ["type", "button", 1, "group", "flex", "flex-col", "gap-1", "rounded-xl", "px-3", "py-2", "text-left", "transition-colors", "hover:bg-stone-50", "dark:hover:bg-gray-800/60"], [1, "flex", "flex-col", "gap-1", "px-3", "py-2"], ["type", "button", 1, "group", "flex", "flex-col", "gap-1", "rounded-xl", "px-3", "py-2", "text-left", "transition-colors", "hover:bg-stone-50", "dark:hover:bg-gray-800/60", 3, "click"], [1, "flex", "items-baseline", "justify-between", "gap-3", "text-sm"], [1, "text-stone-800", "dark:text-stone-100"], [1, "shrink-0", "tabular-nums", "text-stone-500", "dark:text-stone-400"], [1, "h-1.5", "overflow-hidden", "rounded-full", "bg-stone-100", "dark:bg-gray-800"], [1, "block", "h-full", "rounded-full", "bg-primary-500"], [1, "block", "h-full", "rounded-full", "bg-stone-400", "dark:bg-stone-500"], [1, "flex", "flex-col", "gap-1.5"], [1, "flex", "items-baseline", "justify-between", "gap-3", "px-3", "text-sm"], [1, "min-w-0", "break-words", "text-stone-700", "dark:text-stone-300"], [1, "inline-flex", "items-center", "rounded-full", "border", "border-stone-200", "bg-white", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200"], [1, "mt-1", "text-sm", "font-medium", "text-stone-800", "dark:text-stone-100"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [3, "closed", "saved", "flowId", "projectName", "branding", "emailTemplates", "emailTemplateDesign", "isTccOtpEmailClient"], [1, "inline-flex", "items-center", "rounded-full", "border", "border-blue-200", "bg-blue-50", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "text-blue-700", "dark:border-blue-900", "dark:bg-blue-950/40", "dark:text-blue-200"], [1, "flex", "flex-col", "gap-2", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50/60", "px-3", "py-2", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "m-0", "text-sm", "font-semibold", "text-stone-800", "dark:text-stone-100"], [1, "text-[11px]", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "gap-1.5"], [1, "text-[11px]", "text-amber-700", "dark:text-amber-400"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-stone-200", "bg-white", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200"], [1, "min-w-0", "flex-1", "truncate", "text-xs", "text-stone-800", "dark:text-stone-200"], [1, "font-mono", "text-[11px]"], [1, "h-8", "w-8", "rounded-full", "border", "border-black/10", "shadow-sm"], [1, "m-0", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "m-0", "font-mono", "text-[10px]", "text-stone-700", "dark:text-stone-300"]], template: function ProjectDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProjectDetailComponent_ng_container_0_Template, 28, 7, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      FormsModule,
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
      ProjectFlowOtpEmailEditorComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectDetailComponent, [{
    type: Component,
    args: [{ selector: "project-detail", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      ClipboardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule,
      ProjectFlowOtpEmailEditorComponent
    ], template: `<ng-container *transloco="let t">\r
    <div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
        <header\r
            class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
        >\r
            <div class="mx-auto max-w-5xl">\r
                <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">\r
                    <a routerLink="/chat" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">\r
                        Verifik\r
                    </a>\r
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                    <a\r
                        routerLink="/smart-enroll/projects"\r
                        class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >\r
                        {{ t('smartEnrollProjects.title') }}\r
                    </a>\r
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>\r
                    <span class="cursor-default text-stone-600 dark:text-stone-300">{{ t(sectionTitleKey()) }}</span>\r
                </div>\r
                <div class="mt-5 flex flex-wrap items-start justify-between gap-4">\r
                    <div class="flex min-w-0 items-start gap-3">\r
                        <button\r
                            mat-icon-button\r
                            type="button"\r
                            (click)="section() ? clearSection() : goToList()"\r
                            class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                            [attr.aria-label]="\r
                                section() ? t('smartEnrollProjects.detail.backToOverview') : t('smartEnrollProjects.backToList')\r
                            "\r
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
                    @if (project() && !loading() && !section()) {\r
                        <div class="flex flex-wrap gap-2">\r
                            <button mat-stroked-button type="button" class="shrink-0 rounded-xl" (click)="goToStaff()">\r
                                {{ t('smartEnrollProjects.list.menuStaff') }}\r
                            </button>\r
                            <button mat-stroked-button type="button" class="shrink-0 rounded-xl" (click)="goToRecords()">\r
                                {{ t('smartEnrollProjects.viewRecords') }}\r
                            </button>\r
                            <button mat-flat-button color="primary" type="button" class="shrink-0 rounded-xl" (click)="openSetup(0)">\r
                                <mat-icon class="!h-4 !w-4 mr-1">tune</mat-icon>\r
                                {{ t('smartEnrollProjects.setup.openSetup') }}\r
                            </button>\r
                        </div>\r
                    }\r
                </div>\r
            </div>\r
        </header>\r
\r
        <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
            <div class="mx-auto w-full max-w-5xl">\r
                @if (loading()) {\r
                    <div class="flex justify-center py-20">\r
                        <mat-spinner diameter="40"></mat-spinner>\r
                    </div>\r
                } @else if (errorKey()) {\r
                    <div\r
                        class="rounded-2xl border border-red-200/90 bg-red-50/90 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"\r
                    >\r
                        {{ errorKey()! | transloco }}\r
                    </div>\r
                } @else if (project()) {\r
                    @if (section() === 'api') {\r
                        <div class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40 md:p-8">\r
                            <p class="text-sm text-stone-600 dark:text-stone-400">{{ t('smartEnrollProjects.detail.apiIntro') }}</p>\r
                            <div class="mt-6 space-y-4">\r
                                <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">\r
                                    <span class="text-sm font-medium text-stone-700 dark:text-stone-300">{{\r
                                        t('smartEnrollProjects.detail.projectId')\r
                                    }}</span>\r
                                    <div class="flex min-w-0 items-center gap-2 rounded-xl bg-stone-100 px-3 py-2 dark:bg-gray-800">\r
                                        <code class="min-w-0 flex-1 break-all text-xs text-stone-800 dark:text-stone-200">{{ project()!._id }}</code>\r
                                        <button\r
                                            mat-icon-button\r
                                            type="button"\r
                                            (click)="copyValue(project()!._id, $event)"\r
                                            [attr.aria-label]="t('smartEnrollProjects.detail.copy')"\r
                                        >\r
                                            <mat-icon class="icon-size-5" svgIcon="mat_outline:content_copy"></mat-icon>\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                                @if (flow(); as f) {\r
                                    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">\r
                                        <span class="text-sm font-medium text-stone-700 dark:text-stone-300">{{\r
                                            t('smartEnrollProjects.detail.projectFlowId')\r
                                        }}</span>\r
                                        <div class="flex min-w-0 items-center gap-2 rounded-xl bg-stone-100 px-3 py-2 dark:bg-gray-800">\r
                                            <code class="min-w-0 flex-1 break-all text-xs text-stone-800 dark:text-stone-200">{{ f._id }}</code>\r
                                            <button\r
                                                mat-icon-button\r
                                                type="button"\r
                                                (click)="copyValue(f._id, $event)"\r
                                                [attr.aria-label]="t('smartEnrollProjects.detail.copy')"\r
                                            >\r
                                                <mat-icon class="icon-size-5" svgIcon="mat_outline:content_copy"></mat-icon>\r
                                            </button>\r
                                        </div>\r
                                    </div>\r
                                }\r
                                @if (clientId(project()); as cid) {\r
                                    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">\r
                                        <span class="text-sm font-medium text-stone-700 dark:text-stone-300">{{\r
                                            t('smartEnrollProjects.detail.clientId')\r
                                        }}</span>\r
                                        <div class="flex min-w-0 items-center gap-2 rounded-xl bg-stone-100 px-3 py-2 dark:bg-gray-800">\r
                                            <code class="min-w-0 flex-1 break-all text-xs text-stone-800 dark:text-stone-200">{{ cid }}</code>\r
                                            <button\r
                                                mat-icon-button\r
                                                type="button"\r
                                                (click)="copyValue(cid, $event)"\r
                                                [attr.aria-label]="t('smartEnrollProjects.detail.copy')"\r
                                            >\r
                                                <mat-icon class="icon-size-5" svgIcon="mat_outline:content_copy"></mat-icon>\r
                                            </button>\r
                                        </div>\r
                                    </div>\r
                                }\r
                            </div>\r
                            <p class="mt-6 text-sm text-stone-600 dark:text-stone-400">\r
                                {{ t('smartEnrollProjects.detail.documentation') }}\r
                                <a\r
                                    [href]="docsUrl()"\r
                                    target="_blank"\r
                                    rel="noopener noreferrer"\r
                                    class="font-semibold text-primary-600 hover:underline"\r
                                    >{{ t('smartEnrollProjects.detail.viewDocs') }}</a\r
                                >\r
                            </p>\r
                            <div class="mt-8 flex flex-wrap gap-2">\r
                                <button mat-flat-button color="primary" type="button" class="rounded-xl" (click)="clearSection()">\r
                                    {{ t('smartEnrollProjects.detail.backToOverview') }}\r
                                </button>\r
                                <button mat-stroked-button type="button" class="rounded-xl" (click)="goToRecords()">\r
                                    {{ t('smartEnrollProjects.list.seeLogs') }}\r
                                </button>\r
                            </div>\r
                        </div>\r
                    } @else if (section()) {\r
                        <div class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40 md:p-8">\r
                            <p class="text-sm text-stone-600 dark:text-stone-400">{{ t('smartEnrollProjects.detail.sectionHint') }}</p>\r
                            <div class="mt-6 flex flex-wrap gap-2">\r
                                <button mat-flat-button color="primary" type="button" class="rounded-xl" (click)="clearSection()">\r
                                    {{ t('smartEnrollProjects.detail.backToOverview') }}\r
                                </button>\r
                                <button mat-stroked-button type="button" class="rounded-xl" (click)="goToStaff()">\r
                                    {{ t('smartEnrollProjects.list.menuStaff') }}\r
                                </button>\r
                            </div>\r
                        </div>\r
                    } @else {\r
                        @let brand = brandingPreview();\r
                        @let basic = basicPreview();\r
                        @let signUp = signUpPreview();\r
                        @let docs = documentsPreview();\r
                        @let liveness = livenessPreview();\r
                        @let reps = representativesPreview();\r
                        @let integ = integrationsPreview();\r
\r
                        <div class="flex flex-col gap-6">\r
                            <!-- 1. Brand-themed hero -->\r
                            <section\r
                                class="overflow-hidden rounded-3xl border border-stone-200/90 dark:border-gray-700 dark:!bg-gradient-to-b dark:!from-[#11122a] dark:!to-[#161828]"\r
                                [style.background-color]="brand.backgroundColor"\r
                            >\r
                                <div class="flex flex-wrap items-start justify-between gap-6 p-6 md:p-8">\r
                                    <div class="flex items-start gap-4">\r
                                        <div\r
                                            class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 dark:!bg-white/5"\r
                                            [style.background-color]="brand.imageBackgroundColor"\r
                                        >\r
                                            @if (brand.logo) {\r
                                                <img [src]="brand.logo" alt="" class="h-full w-full object-contain" />\r
                                            } @else {\r
                                                <mat-icon class="!h-7 !w-7 dark:!text-stone-300" [style.color]="brand.titleColor">business</mat-icon>\r
                                            }\r
                                        </div>\r
                                        <div class="min-w-0">\r
                                            <p class="text-2xl font-semibold leading-tight dark:!text-white" [style.color]="brand.titleColor">\r
                                                {{ project()!.name || t('smartEnrollProjects.detail.untitledProject') }}\r
                                            </p>\r
                                            <p class="mt-1 text-sm dark:!text-stone-400" [style.color]="brand.textColor">\r
                                                {{ t('smartEnrollProjects.detail.summary.target.' + target()) }}\r
                                                @if (project()!.updatedAt) {\r
                                                    \xB7 {{ t('smartEnrollProjects.updated') }} {{ formatDate(project()!.updatedAt) }}\r
                                                }\r
                                            </p>\r
                                            <div class="mt-3 flex flex-wrap items-center gap-2">\r
                                                <span\r
                                                    class="rounded-full px-3 py-1 text-xs font-semibold"\r
                                                    [ngClass]="\r
                                                        flow()?.status === 'active'\r
                                                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200'\r
                                                            : 'bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200'\r
                                                    "\r
                                                >\r
                                                    {{ flow()?.status || 'draft' }}\r
                                                </span>\r
                                                <button\r
                                                    type="button"\r
                                                    class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"\r
                                                    [style.background-color]="brand.buttonColor"\r
                                                    [style.color]="brand.buttonTextColor"\r
                                                    (click)="openSetup(5)"\r
                                                >\r
                                                    <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">palette</mat-icon>\r
                                                    {{ t('smartEnrollProjects.detail.brand.editBrand') }}\r
                                                </button>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
\r
                                    <div class="flex items-center gap-1">\r
                                        @for (sw of swatchEntries(); track sw.key) {\r
                                            <span\r
                                                class="h-6 w-6 rounded-full border border-black/10 dark:border-white/20"\r
                                                [style.background-color]="sw.value"\r
                                                [attr.title]="t(sw.labelKey) + ' \xB7 ' + sw.value"\r
                                            ></span>\r
                                        }\r
                                    </div>\r
                                </div>\r
                            </section>\r
\r
                            <!-- 1b. Funnel: where enrollees stop -->\r
                            @if (funnel(); as fn) {\r
                                @if (fn.total) {\r
                                    <section\r
                                        class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                                    >\r
                                        <header class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                                            <div>\r
                                                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                                    {{ t('smartEnrollProjects.detail.funnel.title') }}\r
                                                </h2>\r
                                                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                                    {{ t('smartEnrollProjects.detail.funnel.subtitle', { total: fn.total }) }}\r
                                                </p>\r
                                            </div>\r
                                            <button mat-stroked-button type="button" class="rounded-full" (click)="goToRecords()">\r
                                                {{ t('smartEnrollProjects.viewRecords') }}\r
                                            </button>\r
                                        </header>\r
\r
                                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">\r
                                            <div>\r
                                                <h3\r
                                                    class="mb-3 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400"\r
                                                >\r
                                                    {{ t('smartEnrollProjects.detail.funnel.byStep') }}\r
                                                </h3>\r
                                                <div class="flex flex-col gap-2">\r
                                                    @for (bucket of fn.byCurrentStep; track bucket.label) {\r
                                                        <button\r
                                                            type="button"\r
                                                            class="group flex flex-col gap-1 rounded-xl px-3 py-2 text-left transition-colors hover:bg-stone-50 dark:hover:bg-gray-800/60"\r
                                                            (click)="goToRecords(bucket.label)"\r
                                                        >\r
                                                            <span class="flex items-baseline justify-between gap-3 text-sm">\r
                                                                <span class="text-stone-800 dark:text-stone-100">\r
                                                                    @if (stepLabelKey(bucket.label); as key) {\r
                                                                        {{ t(key) }}\r
                                                                    } @else {\r
                                                                        {{ bucket.label }}\r
                                                                    }\r
                                                                </span>\r
                                                                <span class="shrink-0 tabular-nums text-stone-500 dark:text-stone-400">\r
                                                                    {{ bucket.count }} \xB7 {{ funnelShare(bucket.count) }}%\r
                                                                </span>\r
                                                            </span>\r
                                                            <span class="h-1.5 overflow-hidden rounded-full bg-stone-100 dark:bg-gray-800">\r
                                                                <span\r
                                                                    class="block h-full rounded-full bg-primary-500"\r
                                                                    [style.width.%]="funnelBarWidth(bucket.count, fn.byCurrentStep)"\r
                                                                ></span>\r
                                                            </span>\r
                                                        </button>\r
                                                    }\r
                                                </div>\r
                                            </div>\r
\r
                                            <div>\r
                                                <h3\r
                                                    class="mb-3 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400"\r
                                                >\r
                                                    {{ t('smartEnrollProjects.detail.funnel.byStatus') }}\r
                                                </h3>\r
                                                <div class="flex flex-col gap-2">\r
                                                    @for (bucket of fn.byStatus; track bucket.label) {\r
                                                        <div class="flex flex-col gap-1 px-3 py-2">\r
                                                            <span class="flex items-baseline justify-between gap-3 text-sm">\r
                                                                <span class="text-stone-800 dark:text-stone-100">\r
                                                                    {{ t('smartEnrollProjects.status.' + bucket.label) }}\r
                                                                </span>\r
                                                                <span class="shrink-0 tabular-nums text-stone-500 dark:text-stone-400">\r
                                                                    {{ bucket.count }} \xB7 {{ funnelShare(bucket.count) }}%\r
                                                                </span>\r
                                                            </span>\r
                                                            <span class="h-1.5 overflow-hidden rounded-full bg-stone-100 dark:bg-gray-800">\r
                                                                <span\r
                                                                    class="block h-full rounded-full bg-stone-400 dark:bg-stone-500"\r
                                                                    [style.width.%]="funnelBarWidth(bucket.count, fn.byStatus)"\r
                                                                ></span>\r
                                                            </span>\r
                                                        </div>\r
                                                    }\r
                                                </div>\r
                                            </div>\r
\r
                                            @if (fn.documentFailures.length) {\r
                                                <div>\r
                                                    <h3\r
                                                        class="mb-3 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400"\r
                                                    >\r
                                                        {{ t('smartEnrollProjects.detail.funnel.documentFailures') }}\r
                                                    </h3>\r
                                                    <ul class="flex flex-col gap-1.5">\r
                                                        @for (bucket of fn.documentFailures; track bucket.label) {\r
                                                            <li class="flex items-baseline justify-between gap-3 px-3 text-sm">\r
                                                                <span class="min-w-0 break-words text-stone-700 dark:text-stone-300">\r
                                                                    {{ t(documentFailureLabelKey(bucket.label)) }}\r
                                                                </span>\r
                                                                <span class="shrink-0 tabular-nums text-stone-500 dark:text-stone-400">\r
                                                                    {{ bucket.count }}\r
                                                                </span>\r
                                                            </li>\r
                                                        }\r
                                                    </ul>\r
                                                </div>\r
                                            }\r
\r
                                            @if (fn.livenessFailures.length) {\r
                                                <div>\r
                                                    <h3\r
                                                        class="mb-3 text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400"\r
                                                    >\r
                                                        {{ t('smartEnrollProjects.detail.funnel.livenessFailures') }}\r
                                                    </h3>\r
                                                    <ul class="flex flex-col gap-1.5">\r
                                                        @for (bucket of fn.livenessFailures; track bucket.label) {\r
                                                            <li class="flex items-baseline justify-between gap-3 px-3 text-sm">\r
                                                                <span class="min-w-0 break-words text-stone-700 dark:text-stone-300">\r
                                                                    {{ t(livenessFailureLabelKey(bucket.label)) }}\r
                                                                </span>\r
                                                                <span class="shrink-0 tabular-nums text-stone-500 dark:text-stone-400">\r
                                                                    {{ bucket.count }}\r
                                                                </span>\r
                                                            </li>\r
                                                        }\r
                                                    </ul>\r
                                                </div>\r
                                            }\r
                                        </div>\r
                                    </section>\r
                                }\r
                            }\r
\r
                            <!-- 2. Basic info -->\r
                            <section\r
                                class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                            >\r
                                <header class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                                    <div>\r
                                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                            {{ t('smartEnrollProjects.setup.steps.basic_setup') }}\r
                                        </h2>\r
                                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.basic.subtitle') }}\r
                                        </p>\r
                                    </div>\r
                                    <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(0)">\r
                                        <mat-icon class="!h-4 !w-4">edit</mat-icon>\r
                                        {{ t('smartEnrollProjects.detail.editSection') }}\r
                                    </button>\r
                                </header>\r
\r
                                <div class="grid grid-cols-1 gap-3 md:grid-cols-2">\r
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">\r
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.basic.name') }}\r
                                        </span>\r
                                        <span class="text-sm text-stone-800 dark:text-stone-100">\r
                                            {{ basic.name || t('smartEnrollProjects.detail.noValue') }}\r
                                        </span>\r
                                    </div>\r
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">\r
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.basic.contactEmail') }}\r
                                        </span>\r
                                        <span class="text-sm text-stone-800 dark:text-stone-100">\r
                                            {{ basic.contactEmail || t('smartEnrollProjects.detail.noValue') }}\r
                                        </span>\r
                                    </div>\r
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">\r
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.basic.defaultLanguage') }}\r
                                        </span>\r
                                        <span class="text-sm text-stone-800 dark:text-stone-100">\r
                                            {{ basic.defaultLanguage || 'en' }}\r
                                        </span>\r
                                    </div>\r
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">\r
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.basic.privacyUrl') }}\r
                                        </span>\r
                                        @if (basic.privacyUrl) {\r
                                            <a [href]="basic.privacyUrl" target="_blank" rel="noopener noreferrer" class="truncate text-sm text-primary-600 hover:underline">\r
                                                {{ basic.privacyUrl }}\r
                                            </a>\r
                                        } @else {\r
                                            <span class="text-sm text-stone-500">{{ t('smartEnrollProjects.detail.noValue') }}</span>\r
                                        }\r
                                    </div>\r
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">\r
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.basic.termsUrl') }}\r
                                        </span>\r
                                        @if (basic.termsAndConditionsUrl) {\r
                                            <a [href]="basic.termsAndConditionsUrl" target="_blank" rel="noopener noreferrer" class="truncate text-sm text-primary-600 hover:underline">\r
                                                {{ basic.termsAndConditionsUrl }}\r
                                            </a>\r
                                        } @else {\r
                                            <span class="text-sm text-stone-500">{{ t('smartEnrollProjects.detail.noValue') }}</span>\r
                                        }\r
                                    </div>\r
                                </div>\r
\r
                                <div class="mt-4">\r
                                    <p class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartEnrollProjects.detail.basic.allowedCountries') }}\r
                                    </p>\r
                                    @if (basic.allowedCountries.length) {\r
                                        <div class="mt-2 flex flex-wrap gap-1.5">\r
                                            @for (c of basic.allowedCountries; track c) {\r
                                                <span class="inline-flex items-center rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                                    {{ c }}\r
                                                </span>\r
                                            }\r
                                        </div>\r
                                    } @else {\r
                                        <p class="mt-1 text-sm text-stone-500">{{ t('smartEnrollProjects.detail.basic.noCountries') }}</p>\r
                                    }\r
                                </div>\r
\r
                                @if (basic.dpo) {\r
                                    <div class="mt-4 rounded-xl border border-stone-200/80 bg-stone-50/60 px-3 py-3 dark:border-gray-700 dark:bg-gray-900/40">\r
                                        <p class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.basic.dpo') }}\r
                                        </p>\r
                                        <p class="mt-1 text-sm font-medium text-stone-800 dark:text-stone-100">\r
                                            {{ basic.dpo.name || t('smartEnrollProjects.detail.noValue') }}\r
                                        </p>\r
                                        <p class="text-xs text-stone-500 dark:text-stone-400">\r
                                            @if (basic.dpo.email) { {{ basic.dpo.email }} }\r
                                            @if (basic.dpo.email && (basic.dpo.city || basic.dpo.country)) { \xB7 }\r
                                            @if (basic.dpo.city) { {{ basic.dpo.city }} }\r
                                            @if (basic.dpo.city && basic.dpo.country) { , }\r
                                            @if (basic.dpo.country) { {{ basic.dpo.country }} }\r
                                        </p>\r
                                    </div>\r
                                }\r
                            </section>\r
\r
                            <!-- 3. Sign-up form -->\r
                            <section\r
                                class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                            >\r
                                <header class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                                    <div>\r
                                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                            {{ t('smartEnrollProjects.setup.steps.signup_form') }}\r
                                        </h2>\r
                                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.signup.subtitle') }}\r
                                        </p>\r
                                    </div>\r
                                    <div class="flex flex-wrap gap-2">\r
                                        @if (signUp.email && signUp.emailGateway === 'mailgun') {\r
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
                                            {{ t('smartEnrollProjects.detail.editSection') }}\r
                                        </button>\r
                                    </div>\r
                                </header>\r
\r
                                <div class="flex flex-wrap gap-2">\r
                                    <span class="inline-flex items-center gap-1 rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold text-white dark:bg-stone-200 dark:text-stone-900">\r
                                        {{ t('smartEnrollProjects.detail.summary.target.' + signUp.target) }}\r
                                    </span>\r
                                    @if (signUp.target === 'personal' && signUp.fullName) {\r
                                        <span class="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">badge</mat-icon>\r
                                            {{ t('smartEnrollProjects.detail.signup.fullName.' + (signUp.fullNameStyle || 'separate')) }}\r
                                        </span>\r
                                    }\r
                                    @if (signUp.target === 'business' && signUp.businessBasicInfo) {\r
                                        <span class="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">domain</mat-icon>\r
                                            {{ t('smartEnrollProjects.detail.signup.business.' + (signUp.businessBasicInfoStyle || 'name_number')) }}\r
                                        </span>\r
                                    }\r
                                    @if (signUp.email) {\r
                                        <span class="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">mail</mat-icon>\r
                                            {{ t('smartEnrollProjects.detail.signup.email.' + signUp.emailGateway) }}\r
                                        </span>\r
                                    }\r
                                    @if (signUp.phone) {\r
                                        <span class="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">phone</mat-icon>\r
                                            {{ t('smartEnrollProjects.detail.signup.phone.' + signUp.phoneGateway) }}\r
                                            @if (signUp.countryCode) { \xB7 {{ signUp.countryCode }} }\r
                                        </span>\r
                                    }\r
                                    @if (signUp.address) {\r
                                        <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">location_on</mat-icon>\r
                                            {{ t('smartEnrollProjects.detail.signup.address') }}\r
                                        </span>\r
                                    }\r
                                    @if (signUp.showTermsAndConditions) {\r
                                        <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">description</mat-icon>\r
                                            {{ t('smartEnrollProjects.detail.signup.terms') }}\r
                                        </span>\r
                                    }\r
                                    @if (signUp.showPrivacyNotice) {\r
                                        <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">shield</mat-icon>\r
                                            {{ t('smartEnrollProjects.detail.signup.privacy') }}\r
                                        </span>\r
                                    }\r
                                </div>\r
\r
                                @if (signUp.target === 'personal' && signUp.additionalFields.length) {\r
                                    <div class="mt-4">\r
                                        <p class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.signup.additionalFields') }}\r
                                        </p>\r
                                        <div class="mt-2 flex flex-wrap gap-1.5">\r
                                            @for (f of signUp.additionalFields; track f) {\r
                                                <span class="inline-flex items-center rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                                    {{ t('smartEnrollProjects.setup.signupForm.additionalFields.' + f) }}\r
                                                </span>\r
                                            }\r
                                        </div>\r
                                    </div>\r
                                }\r
\r
                                <!-- Email Template Editor Panel -->\r
                                @if (showOtpEmailEditor() && flow()?._id) {\r
                                    <project-flow-otp-email-editor\r
                                        [flowId]="flow()!._id!"\r
                                        [projectName]="project()?.name || 'Verifik'"\r
                                        [branding]="otpEmailBranding()"\r
                                        [emailTemplates]="$any(flow()?.emailTemplates)"\r
                                        [emailTemplateDesign]="flow()?.emailTemplateDesign || 'standard'"\r
                                        [isTccOtpEmailClient]="flow()?.isTccOtpEmailClient === true"\r
                                        (closed)="closeOtpEmailEditor()"\r
                                        (saved)="onOtpEmailSaved()"\r
                                    />\r
                                }\r
                            </section>\r
\r
                            <!-- 4. Documents -->\r
                            <section\r
                                class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                            >\r
                                <header class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                                    <div>\r
                                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                            {{\r
                                                docs.target === 'business'\r
                                                    ? t('smartEnrollProjects.setup.steps.business')\r
                                                    : t('smartEnrollProjects.setup.steps.documents')\r
                                            }}\r
                                        </h2>\r
                                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.documents.subtitle') }}\r
                                        </p>\r
                                    </div>\r
                                    <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(2)">\r
                                        <mat-icon class="!h-4 !w-4">edit</mat-icon>\r
                                        {{ t('smartEnrollProjects.detail.editSection') }}\r
                                    </button>\r
                                </header>\r
\r
                                <div class="flex flex-wrap gap-2">\r
                                    <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">replay</mat-icon>\r
                                        {{ t('smartEnrollProjects.detail.documents.attempts', { count: docs.attemptLimit }) }}\r
                                    </span>\r
                                    @for (m of docs.verificationMethods; track m) {\r
                                        <span class="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">{{ m === 'scan' ? 'photo_camera' : 'file_upload' }}</mat-icon>\r
                                            {{ t('smartEnrollProjects.setup.documents.method.' + m) }}\r
                                        </span>\r
                                    }\r
                                    @if (docs.screening) {\r
                                        <span class="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">verified</mat-icon>\r
                                            {{ t('smartEnrollProjects.detail.documents.screeningOn') }}\r
                                        </span>\r
                                    }\r
                                </div>\r
\r
                                @if (docs.screening) {\r
                                    <div class="mt-3 flex flex-wrap gap-1.5">\r
                                        @if (docs.informationVerification) {\r
                                            <span class="inline-flex items-center rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                                {{ t('smartEnrollProjects.setup.documents.screening.informationVerification') }}\r
                                            </span>\r
                                        }\r
                                        @if (docs.criminalHistoryVerification) {\r
                                            <span class="inline-flex items-center rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                                {{ t('smartEnrollProjects.setup.documents.screening.criminalHistory') }}\r
                                            </span>\r
                                        }\r
                                        @for (e of docs.criminalEndpoints; track e) {\r
                                            <span class="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">\r
                                                {{ criminalEndpointLabel(e) }}\r
                                            </span>\r
                                        }\r
                                    </div>\r
                                }\r
\r
                                <div class="mt-4 flex flex-col gap-2">\r
                                    @if (docs.countries.length === 0) {\r
                                        <p class="text-sm text-stone-500">{{ t('smartEnrollProjects.detail.documents.noCountries') }}</p>\r
                                    } @else {\r
                                        @for (country of docs.countries; track country.country) {\r
                                            <div class="flex flex-col gap-2 rounded-xl border border-stone-200/80 bg-stone-50/60 px-3 py-2 dark:border-gray-700 dark:bg-gray-900/40">\r
                                                <div class="flex items-center justify-between gap-3">\r
                                                    <p class="m-0 text-sm font-semibold text-stone-800 dark:text-stone-100">\r
                                                        {{ country.country || t('smartEnrollProjects.detail.noValue') }}\r
                                                    </p>\r
                                                    <span class="text-[11px] text-stone-500 dark:text-stone-400">\r
                                                        {{ t('smartEnrollProjects.detail.documents.activeCount', { count: country.activeCategories.length }) }}\r
                                                    </span>\r
                                                </div>\r
                                                @if (country.activeCategories.length) {\r
                                                    <div class="flex flex-wrap gap-1.5">\r
                                                        @for (cat of country.activeCategories; track cat.documentCategory) {\r
                                                            <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                                                {{ t('smartEnrollProjects.setup.documents.category.' + cat.documentCategory) }}\r
                                                                @if (cat.templates) { \xB7 {{ cat.templates }} }\r
                                                            </span>\r
                                                        }\r
                                                    </div>\r
                                                } @else {\r
                                                    <p class="text-[11px] text-amber-700 dark:text-amber-400">{{ t('smartEnrollProjects.setup.documents.types.activateHint') }}</p>\r
                                                }\r
                                            </div>\r
                                        }\r
                                    }\r
                                </div>\r
                            </section>\r
\r
                            <!-- 5. Liveness -->\r
                            <section\r
                                class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                            >\r
                                <header class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                                    <div>\r
                                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                            {{ t('smartEnrollProjects.setup.steps.liveness') }}\r
                                        </h2>\r
                                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.liveness.subtitle') }}\r
                                        </p>\r
                                    </div>\r
                                    <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(3)">\r
                                        <mat-icon class="!h-4 !w-4">edit</mat-icon>\r
                                        {{ t('smartEnrollProjects.detail.editSection') }}\r
                                    </button>\r
                                </header>\r
\r
                                <div class="mb-4 flex flex-wrap items-center gap-2">\r
                                    <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">replay</mat-icon>\r
                                        {{ t('smartEnrollProjects.detail.documents.attempts', { count: liveness.attemptLimit }) }}\r
                                    </span>\r
                                </div>\r
\r
                                <div class="flex flex-col gap-3">\r
                                    <div class="flex flex-col gap-1">\r
                                        <div class="flex items-baseline justify-between gap-2">\r
                                            <span class="text-xs font-medium text-stone-600 dark:text-stone-300">\r
                                                {{ t('smartEnrollProjects.setup.liveness.thresholds.minScore') }}\r
                                            </span>\r
                                            <span class="font-mono text-sm font-semibold text-stone-900 dark:text-stone-100">\r
                                                {{ liveness.minScore }}%\r
                                            </span>\r
                                        </div>\r
                                        <div class="h-2 w-full overflow-hidden rounded-full bg-stone-100 dark:bg-gray-800">\r
                                            <div class="h-full" [ngClass]="scoreBarClass(liveness.minScore)" [style.width.%]="liveness.minScore"></div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex flex-col gap-1">\r
                                        <div class="flex items-baseline justify-between gap-2">\r
                                            <span class="text-xs font-medium text-stone-600 dark:text-stone-300">\r
                                                {{ t('smartEnrollProjects.setup.liveness.thresholds.compareMinScore') }}\r
                                            </span>\r
                                            <span class="font-mono text-sm font-semibold text-stone-900 dark:text-stone-100">\r
                                                {{ liveness.compareMinScore }}%\r
                                            </span>\r
                                        </div>\r
                                        <div class="h-2 w-full overflow-hidden rounded-full bg-stone-100 dark:bg-gray-800">\r
                                            <div class="h-full" [ngClass]="scoreBarClass(liveness.compareMinScore)" [style.width.%]="liveness.compareMinScore"></div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex flex-col gap-1">\r
                                        <div class="flex items-baseline justify-between gap-2">\r
                                            <span class="text-xs font-medium text-stone-600 dark:text-stone-300">\r
                                                {{ t('smartEnrollProjects.setup.liveness.thresholds.searchMinScore') }}\r
                                            </span>\r
                                            <span class="font-mono text-sm font-semibold text-stone-900 dark:text-stone-100">\r
                                                {{ liveness.searchMinScore }}%\r
                                            </span>\r
                                        </div>\r
                                        <div class="h-2 w-full overflow-hidden rounded-full bg-stone-100 dark:bg-gray-800">\r
                                            <div class="h-full" [ngClass]="scoreBarClass(liveness.searchMinScore)" [style.width.%]="liveness.searchMinScore"></div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </section>\r
\r
                            <!-- 5b. Representatives (business only) -->\r
                            @if (reps) {\r
                                <section\r
                                    class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                                >\r
                                    <header class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                                        <div>\r
                                            <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                                {{ t('smartEnrollProjects.setup.steps.representatives') }}\r
                                            </h2>\r
                                            <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                                {{ t('smartEnrollProjects.detail.representatives.subtitle') }}\r
                                            </p>\r
                                        </div>\r
                                        <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(3)">\r
                                            <mat-icon class="!h-4 !w-4">edit</mat-icon>\r
                                            {{ t('smartEnrollProjects.detail.editSection') }}\r
                                        </button>\r
                                    </header>\r
                                    <div class="flex flex-wrap gap-2">\r
                                        <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">groups</mat-icon>\r
                                            {{ t('smartEnrollProjects.detail.summary.representatives', { min: reps.minRepresentatives, max: reps.maxRepresentatives }) }}\r
                                        </span>\r
                                        <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">notifications</mat-icon>\r
                                            {{ t('smartEnrollProjects.detail.representatives.notification.' + reps.notificationType) }}\r
                                        </span>\r
                                    </div>\r
                                </section>\r
                            }\r
\r
                            <!-- 6. Integrations -->\r
                            <section\r
                                class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                            >\r
                                <header class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                                    <div>\r
                                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                            {{ t('smartEnrollProjects.setup.steps.integrations') }}\r
                                        </h2>\r
                                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.integrations.subtitle') }}\r
                                        </p>\r
                                    </div>\r
                                    <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(4)">\r
                                        <mat-icon class="!h-4 !w-4">edit</mat-icon>\r
                                        {{ t('smartEnrollProjects.detail.editSection') }}\r
                                    </button>\r
                                </header>\r
\r
                                <div class="grid grid-cols-1 gap-3 md:grid-cols-2">\r
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">\r
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.setup.integrations.redirect.title') }}\r
                                        </span>\r
                                        @if (integ.redirectUrl) {\r
                                            <div class="flex items-center gap-2">\r
                                                <code class="min-w-0 flex-1 truncate text-xs text-stone-800 dark:text-stone-200">{{ integ.redirectUrl }}</code>\r
                                                <button mat-icon-button type="button" (click)="copyValue(integ.redirectUrl, $event)" [attr.aria-label]="t('smartEnrollProjects.detail.copy')">\r
                                                    <mat-icon class="!h-4 !w-4">content_copy</mat-icon>\r
                                                </button>\r
                                            </div>\r
                                        } @else {\r
                                            <span class="text-sm text-stone-500">{{ t('smartEnrollProjects.detail.noValue') }}</span>\r
                                        }\r
                                    </div>\r
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">\r
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.setup.integrations.webhook.title') }}\r
                                        </span>\r
                                        @if (integ.webhook) {\r
                                            <code class="truncate text-xs text-stone-800 dark:text-stone-200">{{ integ.webhook }}</code>\r
                                        } @else {\r
                                            <span class="text-sm text-stone-500">{{ t('smartEnrollProjects.setup.integrations.webhook.none') }}</span>\r
                                        }\r
                                    </div>\r
                                </div>\r
\r
                                <div class="mt-3 flex flex-wrap gap-2">\r
                                    <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">tune</mat-icon>\r
                                        {{\r
                                            integ.source === 'API'\r
                                                ? t('smartEnrollProjects.setup.integrations.source.api')\r
                                                : t('smartEnrollProjects.setup.integrations.source.none')\r
                                        }}\r
                                    </span>\r
                                    @if (integ.source === 'API' && integ.apiUrl) {\r
                                        <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">\r
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">link</mat-icon>\r
                                            <code class="font-mono text-[11px]">{{ integ.apiUrl }}</code>\r
                                        </span>\r
                                    }\r
                                </div>\r
                            </section>\r
\r
                            <!-- 7. Brand preview -->\r
                            <section\r
                                class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"\r
                            >\r
                                <header class="mb-4 flex flex-wrap items-start justify-between gap-3">\r
                                    <div>\r
                                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                                            {{ t('smartEnrollProjects.detail.brand.title') }}\r
                                        </h2>\r
                                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.brand.subtitle') }}\r
                                        </p>\r
                                    </div>\r
                                    <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(5)">\r
                                        <mat-icon class="!h-4 !w-4">edit</mat-icon>\r
                                        {{ t('smartEnrollProjects.detail.editSection') }}\r
                                    </button>\r
                                </header>\r
\r
                                <div class="grid grid-cols-1 gap-3 md:grid-cols-2">\r
                                    <div class="flex flex-col gap-2 rounded-xl border border-stone-200/80 bg-stone-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">\r
                                        <p class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.brand.logo') }}\r
                                        </p>\r
                                        <div class="flex h-32 items-center justify-center overflow-hidden rounded-lg" [style.background-color]="brand.imageBackgroundColor">\r
                                            @if (brand.logo) {\r
                                                <img [src]="brand.logo" alt="" class="max-h-full max-w-full object-contain" />\r
                                            } @else {\r
                                                <span class="text-xs text-stone-500">{{ t('smartEnrollProjects.detail.noValue') }}</span>\r
                                            }\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex flex-col gap-2 rounded-xl border border-stone-200/80 bg-stone-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">\r
                                        <p class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                            {{ t('smartEnrollProjects.detail.brand.image') }}\r
                                        </p>\r
                                        <div class="flex h-32 items-center justify-center overflow-hidden rounded-lg" [style.background-color]="brand.imageBackgroundColor">\r
                                            @if (brand.image) {\r
                                                <img [src]="brand.image" alt="" class="max-h-full max-w-full object-contain" />\r
                                            } @else {\r
                                                <span class="text-xs text-stone-500">{{ t('smartEnrollProjects.detail.noValue') }}</span>\r
                                            }\r
                                        </div>\r
                                    </div>\r
                                </div>\r
\r
                                <div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">\r
                                    @for (sw of swatchEntries(); track sw.key) {\r
                                        <div class="flex flex-col items-center gap-1 rounded-xl border border-stone-200/80 px-2 py-3 dark:border-gray-700">\r
                                            <span class="h-8 w-8 rounded-full border border-black/10 shadow-sm" [style.background-color]="sw.value"></span>\r
                                            <p class="m-0 text-[10px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                                {{ t(sw.labelKey) }}\r
                                            </p>\r
                                            <p class="m-0 font-mono text-[10px] text-stone-700 dark:text-stone-300">{{ sw.value }}</p>\r
                                        </div>\r
                                    }\r
                                </div>\r
                            </section>\r
\r
                            <!-- 8. API integration -->\r
                            <section class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40">\r
                                <h2 class="text-base font-semibold text-stone-900 dark:text-white">\r
                                    {{ t('smartEnrollProjects.detail.sectionApi') }}\r
                                </h2>\r
                                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                    {{ t('smartEnrollProjects.detail.apiIntro') }}\r
                                </p>\r
                                <div class="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">\r
                                    <div class="flex items-center justify-between gap-2 rounded-xl bg-stone-100 px-3 py-2 dark:bg-gray-800">\r
                                        <div class="min-w-0">\r
                                            <p class="text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                                {{ t('smartEnrollProjects.detail.projectId') }}\r
                                            </p>\r
                                            <code class="block truncate text-xs text-stone-800 dark:text-stone-200">{{ project()!._id }}</code>\r
                                        </div>\r
                                        <button\r
                                            mat-icon-button\r
                                            type="button"\r
                                            (click)="copyValue(project()!._id, $event)"\r
                                            [attr.aria-label]="t('smartEnrollProjects.detail.copy')"\r
                                        >\r
                                            <mat-icon class="icon-size-5" svgIcon="mat_outline:content_copy"></mat-icon>\r
                                        </button>\r
                                    </div>\r
\r
                                    @if (flow(); as f) {\r
                                        <div class="flex items-center justify-between gap-2 rounded-xl bg-stone-100 px-3 py-2 dark:bg-gray-800">\r
                                            <div class="min-w-0">\r
                                                <p class="text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                                    {{ t('smartEnrollProjects.detail.projectFlowId') }}\r
                                                </p>\r
                                                <code class="block truncate text-xs text-stone-800 dark:text-stone-200">{{ f._id }}</code>\r
                                            </div>\r
                                            <button\r
                                                mat-icon-button\r
                                                type="button"\r
                                                (click)="copyValue(f._id, $event)"\r
                                                [attr.aria-label]="t('smartEnrollProjects.detail.copy')"\r
                                            >\r
                                                <mat-icon class="icon-size-5" svgIcon="mat_outline:content_copy"></mat-icon>\r
                                            </button>\r
                                        </div>\r
                                    }\r
                                </div>\r
                                <p class="mt-4 text-xs text-stone-500 dark:text-stone-400">\r
                                    {{ t('smartEnrollProjects.detail.documentation') }}\r
                                    <a\r
                                        [href]="docsUrl()"\r
                                        target="_blank"\r
                                        rel="noopener noreferrer"\r
                                        class="font-semibold text-primary-600 hover:underline"\r
                                        >{{ t('smartEnrollProjects.detail.viewDocs') }}</a\r
                                    >\r
                                </p>\r
                            </section>\r
                        </div>\r
                    }\r
                }\r
            </div>\r
        </main>\r
    </div>\r
</ng-container>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetailComponent, { className: "ProjectDetailComponent", filePath: "src/app/modules/smart-enroll/projects/project-detail/project-detail.component.ts", lineNumber: 100 });
})();
export {
  ProjectDetailComponent
};
//# sourceMappingURL=chunk-7ALEJMNR.js.map
