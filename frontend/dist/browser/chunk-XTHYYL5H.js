import {
  SmartEnrollProjectsService
} from "./chunk-HVQKWCWI.js";
import {
  Clipboard,
  ClipboardModule
} from "./chunk-Q3S2LSGV.js";
import {
  DateTime
} from "./chunk-BAVSUFW7.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-NLVEQCVI.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-KU43NSH4.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WH2N6KB4.js";
import "./chunk-BIHX2IQ4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-HZQU4G6R.js";
import {
  CommonModule,
  Component,
  MatButton,
  MatButtonModule,
  MatIconButton,
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
} from "./chunk-LLRZIRCV.js";
import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-enroll/projects/project-detail/project-detail.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0, a1) => ({ min: a0, max: a1 });
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.country;
var _forTrack2 = ($index, $item) => $item.documentCategory;
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
    \u0275\u0275elementStart(0, "mat-icon", 100);
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
    \u0275\u0275element(0, "span", 101);
  }
  if (rf & 2) {
    const sw_r13 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275styleProp("background-color", sw_r13.value);
    \u0275\u0275attribute("title", t_r4(sw_r13.labelKey) + " \xB7 " + sw_r13.value);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const basic_r14 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("href", basic_r14.privacyUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", basic_r14.privacyUrl, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_56_Template(rf, ctx) {
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
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const basic_r14 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("href", basic_r14.termsAndConditionsUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", basic_r14.termsAndConditionsUrl, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_61_Template(rf, ctx) {
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
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_65_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r15, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275repeaterCreate(1, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_65_For_2_Template, 2, 1, "span", 102, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const basic_r14 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275repeater(basic_r14.allowedCountries);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_66_Template(rf, ctx) {
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
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const basic_r14 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", basic_r14.dpo.email, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const basic_r14 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", basic_r14.dpo.city, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " , ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const basic_r14 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", basic_r14.dpo.country, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "p", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 103);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 104);
    \u0275\u0275template(6, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Conditional_6_Template, 1, 1)(7, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Conditional_7_Template, 1, 0)(8, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Conditional_8_Template, 1, 1)(9, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Conditional_9_Template, 1, 0)(10, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Conditional_10_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const basic_r14 = \u0275\u0275readContextLet(1);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.dpo"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", basic_r14.dpo.name || t_r4("smartEnrollProjects.detail.noValue"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(basic_r14.dpo.email ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r14.dpo.email && (basic_r14.dpo.city || basic_r14.dpo.country) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r14.dpo.city ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r14.dpo.city && basic_r14.dpo.country ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r14.dpo.country ? 10 : -1);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71)(1, "mat-icon", 51);
    \u0275\u0275text(2, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const signUp_r16 = \u0275\u0275readContextLet(2);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.fullName." + (signUp_r16.fullNameStyle || "separate")), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71)(1, "mat-icon", 51);
    \u0275\u0275text(2, "domain");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const signUp_r16 = \u0275\u0275readContextLet(2);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.business." + (signUp_r16.businessBasicInfoStyle || "name_number")), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72)(1, "mat-icon", 51);
    \u0275\u0275text(2, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const signUp_r16 = \u0275\u0275readContextLet(2);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.email." + signUp_r16.emailGateway), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_85_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const signUp_r16 = \u0275\u0275readContextLet(2);
    \u0275\u0275textInterpolate1(" \xB7 ", signUp_r16.countryCode, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72)(1, "mat-icon", 51);
    \u0275\u0275text(2, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_85_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const signUp_r16 = \u0275\u0275readContextLet(2);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.phone." + signUp_r16.phoneGateway), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r16.countryCode ? 4 : -1);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73)(1, "mat-icon", 51);
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
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73)(1, "mat-icon", 51);
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
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73)(1, "mat-icon", 51);
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
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_89_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r17 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.signupForm.additionalFields." + f_r17), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "p", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 67);
    \u0275\u0275repeaterCreate(4, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_89_For_5_Template, 2, 1, "span", 102, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const signUp_r16 = \u0275\u0275readContextLet(2);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.additionalFields"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(signUp_r16.additionalFields);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72)(1, "mat-icon", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r18 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r18 === "scan" ? "photo_camera" : "file_upload");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.documents.method." + m_r18), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71)(1, "mat-icon", 51);
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
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_109_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.documents.screening.informationVerification"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_109_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.documents.screening.criminalHistory"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_109_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.criminalEndpointLabel(e_r19), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275template(1, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_109_Conditional_1_Template, 2, 1, "span", 102)(2, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_109_Conditional_2_Template, 2, 1, "span", 102);
    \u0275\u0275repeaterCreate(3, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_109_For_4_Template, 2, 1, "span", 105, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const docs_r20 = \u0275\u0275readContextLet(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(docs_r20.informationVerification ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(docs_r20.criminalHistoryVerification ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(docs_r20.criminalEndpoints);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_111_Template(rf, ctx) {
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
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_112_For_1_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const cat_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", cat_r21.templates, " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_112_For_1_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_112_For_1_Conditional_6_For_2_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r21 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(6).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.documents.category." + cat_r21.documentCategory), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(cat_r21.templates ? 2 : -1);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_112_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275repeaterCreate(1, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_112_For_1_Conditional_6_For_2_Template, 3, 2, "span", 112, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(country_r22.activeCategories);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_112_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.setup.documents.types.activateHint"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_112_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107)(2, "p", 108);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_112_For_1_Conditional_6_Template, 3, 0, "div", 110)(7, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_112_For_1_Conditional_7_Template, 2, 1, "p", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r22 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", country_r22.country || t_r4("smartEnrollProjects.detail.noValue"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.documents.activeCount", \u0275\u0275pureFunction1(3, _c0, country_r22.activeCategories.length)), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(country_r22.activeCategories.length ? 6 : 7);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_112_For_1_Template, 8, 5, "div", 106, _forTrack1);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const docs_r20 = \u0275\u0275readContextLet(3);
    \u0275\u0275repeater(docs_r20.countries);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_158_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 54)(1, "header", 55)(2, "div")(3, "h2", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_158_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openSetup(3));
    });
    \u0275\u0275elementStart(8, "mat-icon", 59);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 15)(12, "span", 73)(13, "mat-icon", 51);
    \u0275\u0275text(14, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 73)(17, "mat-icon", 51);
    \u0275\u0275text(18, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const reps_r24 = \u0275\u0275readContextLet(5);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.steps.representatives"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.representatives.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.summary.representatives", \u0275\u0275pureFunction2(5, _c1, reps_r24.minRepresentatives, reps_r24.maxRepresentatives)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.representatives.notification." + reps_r24.notificationType), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_174_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "code", 113);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 32);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_174_Template_button_click_3_listener($event) {
      \u0275\u0275restoreView(_r25);
      \u0275\u0275nextContext();
      const integ_r26 = \u0275\u0275readContextLet(6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyValue(integ_r26.redirectUrl, $event));
    });
    \u0275\u0275elementStart(4, "mat-icon", 59);
    \u0275\u0275text(5, "content_copy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const integ_r26 = \u0275\u0275readContextLet(6);
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(integ_r26.redirectUrl);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4("smartEnrollProjects.detail.copy"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_175_Template(rf, ctx) {
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
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "code", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const integ_r26 = \u0275\u0275readContextLet(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(integ_r26.webhook);
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
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.setup.integrations.webhook.none"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_186_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73)(1, "mat-icon", 51);
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code", 114);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const integ_r26 = \u0275\u0275readContextLet(6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(integ_r26.apiUrl);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_203_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 90);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const brand_r12 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("src", brand_r12.logo, \u0275\u0275sanitizeUrl);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_204_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.noValue"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_209_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 90);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const brand_r12 = \u0275\u0275readContextLet(0);
    \u0275\u0275property("src", brand_r12.image, \u0275\u0275sanitizeUrl);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_210_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.detail.noValue"));
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_213_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "span", 115);
    \u0275\u0275elementStart(2, "p", 116);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 117);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sw_r27 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", sw_r27.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4(sw_r27.labelKey), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sw_r27.value);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_228_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 12)(2, "p", 97);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "code", 98);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_228_Template_button_click_6_listener($event) {
      const f_r29 = \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.copyValue(f_r29._id, $event));
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
    \u0275\u0275elementStart(30, "section", 54)(31, "header", 55)(32, "div")(33, "h2", 56);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 57);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(0));
    });
    \u0275\u0275elementStart(38, "mat-icon", 59);
    \u0275\u0275text(39, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 60)(42, "div", 61)(43, "span", 62);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 63);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 61)(48, "span", 62);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 63);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 61)(53, "span", 62);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_55_Template, 2, 2, "a", 64)(56, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_56_Template, 2, 1, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 61)(58, "span", 62);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275template(60, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_60_Template, 2, 2, "a", 64)(61, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_61_Template, 2, 1, "span", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 66)(63, "p", 62);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_65_Template, 3, 0, "div", 67)(66, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_66_Template, 2, 1, "p", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_67_Template, 11, 7, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "section", 54)(69, "header", 55)(70, "div")(71, "h2", 56);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p", 57);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(1));
    });
    \u0275\u0275elementStart(76, "mat-icon", 59);
    \u0275\u0275text(77, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 15)(80, "span", 70);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(82, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_82_Template, 4, 1, "span", 71)(83, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_83_Template, 4, 1, "span", 71)(84, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_84_Template, 4, 1, "span", 72)(85, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_85_Template, 5, 2, "span", 72)(86, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_86_Template, 4, 1, "span", 73)(87, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_87_Template, 4, 1, "span", 73)(88, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_88_Template, 4, 1, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(89, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_89_Template, 6, 1, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "section", 54)(91, "header", 55)(92, "div")(93, "h2", 56);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "p", 57);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(2));
    });
    \u0275\u0275elementStart(98, "mat-icon", 59);
    \u0275\u0275text(99, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 15)(102, "span", 73)(103, "mat-icon", 51);
    \u0275\u0275text(104, "replay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(105);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(106, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_107_Template, 4, 2, "span", 72, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(108, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_108_Template, 4, 1, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275template(109, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_109_Template, 5, 2, "div", 74);
    \u0275\u0275elementStart(110, "div", 75);
    \u0275\u0275template(111, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_111_Template, 2, 1, "p", 65)(112, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_112_Template, 2, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "section", 54)(114, "header", 55)(115, "div")(116, "h2", 56);
    \u0275\u0275text(117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "p", 57);
    \u0275\u0275text(119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_120_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(3));
    });
    \u0275\u0275elementStart(121, "mat-icon", 59);
    \u0275\u0275text(122, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "div", 76)(125, "span", 77)(126, "mat-icon", 51);
    \u0275\u0275text(127, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275text(128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "span", 73)(130, "mat-icon", 51);
    \u0275\u0275text(131, "replay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 78)(134, "div", 79)(135, "div", 80)(136, "span", 81);
    \u0275\u0275text(137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "span", 82);
    \u0275\u0275text(139);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "div", 83);
    \u0275\u0275element(141, "div", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 79)(143, "div", 80)(144, "span", 81);
    \u0275\u0275text(145);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "span", 82);
    \u0275\u0275text(147);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(148, "div", 83);
    \u0275\u0275element(149, "div", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "div", 79)(151, "div", 80)(152, "span", 81);
    \u0275\u0275text(153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "span", 82);
    \u0275\u0275text(155);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div", 83);
    \u0275\u0275element(157, "div", 84);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(158, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_158_Template, 20, 8, "section", 54);
    \u0275\u0275elementStart(159, "section", 54)(160, "header", 55)(161, "div")(162, "h2", 56);
    \u0275\u0275text(163);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "p", 57);
    \u0275\u0275text(165);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(166, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_166_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(4));
    });
    \u0275\u0275elementStart(167, "mat-icon", 59);
    \u0275\u0275text(168, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(169);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(170, "div", 60)(171, "div", 61)(172, "span", 62);
    \u0275\u0275text(173);
    \u0275\u0275elementEnd();
    \u0275\u0275template(174, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_174_Template, 6, 2, "div", 85)(175, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_175_Template, 2, 1, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "div", 61)(177, "span", 62);
    \u0275\u0275text(178);
    \u0275\u0275elementEnd();
    \u0275\u0275template(179, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_179_Template, 2, 1, "code", 86)(180, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_180_Template, 2, 1, "span", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(181, "div", 87)(182, "span", 73)(183, "mat-icon", 51);
    \u0275\u0275text(184, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(185);
    \u0275\u0275elementEnd();
    \u0275\u0275template(186, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_186_Template, 5, 1, "span", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(187, "section", 54)(188, "header", 55)(189, "div")(190, "h2", 56);
    \u0275\u0275text(191);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "p", 57);
    \u0275\u0275text(193);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(194, "button", 58);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_194_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openSetup(5));
    });
    \u0275\u0275elementStart(195, "mat-icon", 59);
    \u0275\u0275text(196, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(197);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(198, "div", 60)(199, "div", 88)(200, "p", 62);
    \u0275\u0275text(201);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "div", 89);
    \u0275\u0275template(203, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_203_Template, 1, 1, "img", 90)(204, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_204_Template, 2, 1, "span", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(205, "div", 88)(206, "p", 62);
    \u0275\u0275text(207);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "div", 89);
    \u0275\u0275template(209, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_209_Template, 1, 1, "img", 90)(210, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_210_Template, 2, 1, "span", 91);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(211, "div", 92);
    \u0275\u0275repeaterCreate(212, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_213_Template, 6, 4, "div", 93, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(214, "section", 54)(215, "h2", 94);
    \u0275\u0275text(216);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(217, "p", 57);
    \u0275\u0275text(218);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "div", 95)(220, "div", 96)(221, "div", 12)(222, "p", 97);
    \u0275\u0275text(223);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "code", 98);
    \u0275\u0275text(225);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(226, "button", 32);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_226_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyValue(ctx_r1.project()._id, $event));
    });
    \u0275\u0275element(227, "mat-icon", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(228, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_228_Template, 8, 3, "div", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(229, "p", 99);
    \u0275\u0275text(230);
    \u0275\u0275elementStart(231, "a", 35);
    \u0275\u0275text(232);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    let tmp_20_0;
    let tmp_101_0;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const brand_r30 = \u0275\u0275storeLet(ctx_r1.brandingPreview());
    \u0275\u0275advance();
    const basic_r31 = \u0275\u0275storeLet(ctx_r1.basicPreview());
    \u0275\u0275advance();
    const signUp_r32 = \u0275\u0275storeLet(ctx_r1.signUpPreview());
    \u0275\u0275advance();
    const docs_r33 = \u0275\u0275storeLet(ctx_r1.documentsPreview());
    const liveness_r34 = ctx_r1.livenessPreview();
    \u0275\u0275advance(2);
    const reps_r35 = \u0275\u0275storeLet(ctx_r1.representativesPreview());
    \u0275\u0275advance();
    const integ_r36 = \u0275\u0275storeLet(ctx_r1.integrationsPreview());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", brand_r30.backgroundColor);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", brand_r30.imageBackgroundColor);
    \u0275\u0275advance();
    \u0275\u0275conditional(brand_r30.logo ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", brand_r30.titleColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.project().name || t_r4("smartEnrollProjects.detail.untitledProject"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", brand_r30.textColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.summary.target." + ctx_r1.target()), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.project().updatedAt ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ((tmp_19_0 = ctx_r1.flow()) == null ? null : tmp_19_0.status) === "active" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200" : "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_20_0 = ctx_r1.flow()) == null ? null : tmp_20_0.status) || "draft", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", brand_r30.buttonColor)("color", brand_r30.buttonTextColor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.brand.editBrand"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.swatchEntries());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.steps.basic_setup"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.name"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", basic_r31.name || t_r4("smartEnrollProjects.detail.noValue"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.contactEmail"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", basic_r31.contactEmail || t_r4("smartEnrollProjects.detail.noValue"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.privacyUrl"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r31.privacyUrl ? 55 : 56);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.termsUrl"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r31.termsAndConditionsUrl ? 60 : 61);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.basic.allowedCountries"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(basic_r31.allowedCountries.length ? 65 : 66);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(basic_r31.dpo ? 67 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.steps.signup_form"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.signup.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.summary.target." + signUp_r32.target), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r32.target === "personal" && signUp_r32.fullName ? 82 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r32.target === "business" && signUp_r32.businessBasicInfo ? 83 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r32.email ? 84 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r32.phone ? 85 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r32.address ? 86 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r32.showTermsAndConditions ? 87 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r32.showPrivacyNotice ? 88 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(signUp_r32.target === "personal" && signUp_r32.additionalFields.length ? 89 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", docs_r33.target === "business" ? t_r4("smartEnrollProjects.setup.steps.business") : t_r4("smartEnrollProjects.setup.steps.documents"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.documents.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.documents.attempts", \u0275\u0275pureFunction1(108, _c0, docs_r33.attemptLimit)), " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(docs_r33.verificationMethods);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(docs_r33.screening ? 108 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(docs_r33.screening ? 109 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(docs_r33.countries.length === 0 ? 111 : 112);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.steps.liveness"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.liveness.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", liveness_r34.kycType === "zero_knowledge" ? t_r4("smartEnrollProjects.setup.liveness.kyc.zeroKnowledge") : t_r4("smartEnrollProjects.setup.liveness.kyc.traditional"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.documents.attempts", \u0275\u0275pureFunction1(110, _c0, liveness_r34.attemptLimit)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.liveness.thresholds.minScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", liveness_r34.minScore, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", liveness_r34.minScore, "%");
    \u0275\u0275property("ngClass", ctx_r1.scoreBarClass(liveness_r34.minScore));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.liveness.thresholds.compareMinScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", liveness_r34.compareMinScore, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", liveness_r34.compareMinScore, "%");
    \u0275\u0275property("ngClass", ctx_r1.scoreBarClass(liveness_r34.compareMinScore));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.liveness.thresholds.searchMinScore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", liveness_r34.searchMinScore, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", liveness_r34.searchMinScore, "%");
    \u0275\u0275property("ngClass", ctx_r1.scoreBarClass(liveness_r34.searchMinScore));
    \u0275\u0275advance();
    \u0275\u0275conditional(reps_r35 ? 158 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.steps.integrations"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.integrations.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.integrations.redirect.title"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(integ_r36.redirectUrl ? 174 : 175);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.setup.integrations.webhook.title"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(integ_r36.webhook ? 179 : 180);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", integ_r36.source === "API" ? t_r4("smartEnrollProjects.setup.integrations.source.api") : t_r4("smartEnrollProjects.setup.integrations.source.none"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(integ_r36.source === "API" && integ_r36.apiUrl ? 186 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.brand.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.brand.subtitle"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.editSection"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.brand.logo"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", brand_r30.imageBackgroundColor);
    \u0275\u0275advance();
    \u0275\u0275conditional(brand_r30.logo ? 203 : 204);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.brand.image"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", brand_r30.imageBackgroundColor);
    \u0275\u0275advance();
    \u0275\u0275conditional(brand_r30.image ? 209 : 210);
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
    \u0275\u0275conditional((tmp_101_0 = ctx_r1.flow()) ? 228 : -1, tmp_101_0);
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
    \u0275\u0275template(0, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Template, 23, 11, "div", 24)(1, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_1_Template, 8, 3, "div", 24)(2, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template, 233, 112, "div", 25);
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
    this.flow = computed(() => {
      const flows = this.project()?.projectFlows;
      if (!flows?.length)
        return null;
      const active = flows.find((f) => f.status && f.status !== "draft");
      return active ?? flows[0];
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
        allowedCountries: p?.allowedCountries ?? [],
        privacyUrl: p?.privacyUrl ?? "",
        termsAndConditionsUrl: p?.termsAndConditionsUrl ?? "",
        dpo: p?.dataProtection ?? null
      };
    });
    this.signUpPreview = computed(() => {
      const sf = this.flow()?.signUpForm ?? {};
      const fullNameStyle = sf["fullNameStyle"];
      const businessBasicInfoStyle = sf["businessBasicInfoStyle"];
      return {
        target: this.target(),
        fullName: !!sf["fullName"],
        fullNameStyle,
        businessBasicInfo: !!sf["businessBasicInfo"],
        businessBasicInfoStyle,
        email: !!sf["email"],
        emailGateway: sf["emailGateway"] ?? "none",
        phone: !!sf["phone"],
        phoneGateway: sf["phoneGateway"] ?? "none",
        countryCode: sf["countryCode"] ?? "",
        additionalFields: sf["additionalFields"] ?? [],
        address: !!sf["address"],
        showTermsAndConditions: !!sf["showTermsAndConditions"],
        showPrivacyNotice: !!sf["showPrivacyNotice"]
      };
    });
    this.documentsPreview = computed(() => {
      const f = this.flow();
      const target = this.target();
      const docs = (target === "business" ? f?.business : f?.documents) ?? {};
      const documentTypes = docs["documentTypes"] ?? [];
      return {
        target,
        attemptLimit: docs["attemptLimit"] ?? 3,
        verificationMethods: docs["verificationMethods"] ?? [],
        screening: !!docs["screening"],
        informationVerification: !!docs["informationVerification"],
        criminalHistoryVerification: !!docs["criminalHistoryVerification"],
        criminalEndpoints: docs["criminalHistoryVerificationEndpoints"] ?? [],
        countries: documentTypes.map((dt) => {
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
        })
      };
    });
    this.livenessPreview = computed(() => {
      const liveness = this.flow()?.liveness ?? {};
      const pct = (v) => typeof v === "number" ? Math.round(v * 100) : 0;
      return {
        kycType: liveness["kycType"] ?? "traditional",
        attemptLimit: liveness["attemptLimit"] ?? 3,
        minScore: pct(liveness["minScore"]),
        compareMinScore: pct(liveness["compareMinScore"]),
        searchMinScore: pct(liveness["searchMinScore"]),
        searchMode: liveness["searchMode"] ?? "FAST"
      };
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
  }
  ngOnInit() {
    const id = this._route.snapshot.paramMap.get("projectId");
    if (!id) {
      this.goToList();
      return;
    }
    this._sectionSub = this._route.queryParamMap.pipe(map((q) => q.get("section"))).subscribe((s) => this.section.set(s));
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
  goToRecords() {
    const id = this.project()?._id;
    if (!id)
      return;
    this._router.navigate(["/smart-enroll/projects", id, "records"]);
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
      world_api_onu: "ONU"
    };
    return map2[value] ?? value;
  }
  static {
    this.\u0275fac = function ProjectDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetailComponent, selectors: [["project-detail"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "max-w-5xl"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-enroll/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "mt-5", "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "font-mono", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "gap-2"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-5xl"], [1, "flex", "justify-center", "py-20"], [1, "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], [1, "!h-4", "!w-4", "mr-1"], ["diameter", "40"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "dark:border-gray-700", "dark:bg-gray-900/40", "md:p-8"], [1, "flex", "flex-col", "gap-6"], [1, "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "mt-6", "space-y-4"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], [1, "flex", "min-w-0", "items-center", "gap-2", "rounded-xl", "bg-stone-100", "px-3", "py-2", "dark:bg-gray-800"], [1, "min-w-0", "flex-1", "break-all", "text-xs", "text-stone-800", "dark:text-stone-200"], ["mat-icon-button", "", "type", "button", 3, "click"], ["svgIcon", "mat_outline:content_copy", 1, "icon-size-5"], [1, "mt-6", "text-sm", "text-stone-600", "dark:text-stone-400"], ["target", "_blank", "rel", "noopener noreferrer", 1, "font-semibold", "text-primary-600", "hover:underline", 3, "href"], [1, "mt-8", "flex", "flex-wrap", "gap-2"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-xl", 3, "click"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", 3, "click"], [1, "mt-6", "flex", "flex-wrap", "gap-2"], [1, "overflow-hidden", "rounded-3xl", "border", "border-stone-200/90", "dark:border-gray-700"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-6", "p-6", "md:p-8"], [1, "flex", "items-start", "gap-4"], [1, "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded-2xl", "border", "border-black/5"], ["alt", "", 1, "h-full", "w-full", "object-contain", 3, "src"], [1, "!h-7", "!w-7", 3, "color"], [1, "text-2xl", "font-semibold", "leading-tight"], [1, "mt-1", "text-sm"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-2"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], ["type", "button", 1, "inline-flex", "items-center", "gap-1", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", "shadow-sm", 3, "click"], [1, "!h-3.5", "!w-3.5", "!text-[14px]"], [1, "flex", "items-center", "gap-1"], [1, "h-6", "w-6", "rounded-full", "border", "border-black/10", 3, "background-color"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mb-4", "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["mat-stroked-button", "", "type", "button", 1, "rounded-full", 3, "click"], [1, "!h-4", "!w-4"], [1, "grid", "grid-cols-1", "gap-3", "md:grid-cols-2"], [1, "flex", "flex-col", "gap-1", "rounded-xl", "bg-stone-50", "px-3", "py-2", "dark:bg-gray-900/40"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "text-sm", "text-stone-800", "dark:text-stone-100"], ["target", "_blank", "rel", "noopener noreferrer", 1, "truncate", "text-sm", "text-primary-600", "hover:underline", 3, "href"], [1, "text-sm", "text-stone-500"], [1, "mt-4"], [1, "mt-2", "flex", "flex-wrap", "gap-1.5"], [1, "mt-1", "text-sm", "text-stone-500"], [1, "mt-4", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50/60", "px-3", "py-3", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-stone-900", "px-3", "py-1", "text-xs", "font-semibold", "text-white", "dark:bg-stone-200", "dark:text-stone-900"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-emerald-200", "bg-emerald-50", "px-3", "py-1", "text-xs", "font-medium", "text-emerald-700", "dark:border-emerald-900", "dark:bg-emerald-950/40", "dark:text-emerald-200"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-blue-200", "bg-blue-50", "px-3", "py-1", "text-xs", "font-medium", "text-blue-700", "dark:border-blue-900", "dark:bg-blue-950/40", "dark:text-blue-200"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-stone-200", "bg-stone-50", "px-3", "py-1", "text-xs", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200"], [1, "mt-3", "flex", "flex-wrap", "gap-1.5"], [1, "mt-4", "flex", "flex-col", "gap-2"], [1, "mb-4", "flex", "flex-wrap", "items-center", "gap-2"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-blue-200", "bg-blue-50", "px-3", "py-1", "text-xs", "font-semibold", "text-blue-700", "dark:border-blue-900", "dark:bg-blue-950/40", "dark:text-blue-200"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "items-baseline", "justify-between", "gap-2"], [1, "text-xs", "font-medium", "text-stone-600", "dark:text-stone-300"], [1, "font-mono", "text-sm", "font-semibold", "text-stone-900", "dark:text-stone-100"], [1, "h-2", "w-full", "overflow-hidden", "rounded-full", "bg-stone-100", "dark:bg-gray-800"], [1, "h-full", 3, "ngClass"], [1, "flex", "items-center", "gap-2"], [1, "truncate", "text-xs", "text-stone-800", "dark:text-stone-200"], [1, "mt-3", "flex", "flex-wrap", "gap-2"], [1, "flex", "flex-col", "gap-2", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50", "p-3", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "flex", "h-32", "items-center", "justify-center", "overflow-hidden", "rounded-lg"], ["alt", "", 1, "max-h-full", "max-w-full", "object-contain", 3, "src"], [1, "text-xs", "text-stone-500"], [1, "mt-4", "grid", "grid-cols-2", "gap-3", "sm:grid-cols-3", "md:grid-cols-6"], [1, "flex", "flex-col", "items-center", "gap-1", "rounded-xl", "border", "border-stone-200/80", "px-2", "py-3", "dark:border-gray-700"], [1, "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-4", "grid", "grid-cols-1", "gap-3", "md:grid-cols-2"], [1, "flex", "items-center", "justify-between", "gap-2", "rounded-xl", "bg-stone-100", "px-3", "py-2", "dark:bg-gray-800"], [1, "text-[11px]", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "block", "truncate", "text-xs", "text-stone-800", "dark:text-stone-200"], [1, "mt-4", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "!h-7", "!w-7"], [1, "h-6", "w-6", "rounded-full", "border", "border-black/10"], [1, "inline-flex", "items-center", "rounded-full", "border", "border-stone-200", "bg-white", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200"], [1, "mt-1", "text-sm", "font-medium", "text-stone-800", "dark:text-stone-100"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "inline-flex", "items-center", "rounded-full", "border", "border-blue-200", "bg-blue-50", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "text-blue-700", "dark:border-blue-900", "dark:bg-blue-950/40", "dark:text-blue-200"], [1, "flex", "flex-col", "gap-2", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50/60", "px-3", "py-2", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "m-0", "text-sm", "font-semibold", "text-stone-800", "dark:text-stone-100"], [1, "text-[11px]", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "gap-1.5"], [1, "text-[11px]", "text-amber-700", "dark:text-amber-400"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "border", "border-stone-200", "bg-white", "px-2.5", "py-0.5", "text-[11px]", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-stone-200"], [1, "min-w-0", "flex-1", "truncate", "text-xs", "text-stone-800", "dark:text-stone-200"], [1, "font-mono", "text-[11px]"], [1, "h-8", "w-8", "rounded-full", "border", "border-black/10", "shadow-sm"], [1, "m-0", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "m-0", "font-mono", "text-[10px]", "text-stone-700", "dark:text-stone-300"]], template: function ProjectDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProjectDetailComponent_ng_container_0_Template, 28, 7, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
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
      TranslocoPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectDetailComponent, [{
    type: Component,
    args: [{ selector: "project-detail", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ClipboardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<ng-container *transloco="let t">
    <div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">
        <header
            class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"
        >
            <div class="mx-auto max-w-5xl">
                <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">
                    <a routerLink="/chat" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">
                        Verifik
                    </a>
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>
                    <a
                        routerLink="/smart-enroll/projects"
                        class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"
                    >
                        {{ t('smartEnrollProjects.title') }}
                    </a>
                    <mat-icon class="icon-size-4 mx-2 text-stone-400" svgIcon="heroicons_solid:chevron-right"></mat-icon>
                    <span class="cursor-default text-stone-600 dark:text-stone-300">{{ t(sectionTitleKey()) }}</span>
                </div>
                <div class="mt-5 flex flex-wrap items-start justify-between gap-4">
                    <div class="flex min-w-0 items-start gap-3">
                        <button
                            mat-icon-button
                            type="button"
                            (click)="section() ? clearSection() : goToList()"
                            class="shrink-0 !text-stone-600 dark:!text-stone-300"
                            [attr.aria-label]="
                                section() ? t('smartEnrollProjects.detail.backToOverview') : t('smartEnrollProjects.backToList')
                            "
                        >
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <div class="min-w-0">
                            <h1 class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl">
                                {{ project()?.name || project()?._id }}
                            </h1>
                            @if (project()?._id) {
                                <p class="mt-1 font-mono text-xs text-stone-500 dark:text-stone-400">{{ project()!._id }}</p>
                            }
                        </div>
                    </div>
                    @if (project() && !loading() && !section()) {
                        <div class="flex flex-wrap gap-2">
                            <button mat-stroked-button type="button" class="shrink-0 rounded-xl" (click)="goToStaff()">
                                {{ t('smartEnrollProjects.list.menuStaff') }}
                            </button>
                            <button mat-stroked-button type="button" class="shrink-0 rounded-xl" (click)="goToRecords()">
                                {{ t('smartEnrollProjects.viewRecords') }}
                            </button>
                            <button mat-flat-button color="primary" type="button" class="shrink-0 rounded-xl" (click)="openSetup(0)">
                                <mat-icon class="!h-4 !w-4 mr-1">tune</mat-icon>
                                {{ t('smartEnrollProjects.setup.openSetup') }}
                            </button>
                        </div>
                    }
                </div>
            </div>
        </header>

        <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">
            <div class="mx-auto w-full max-w-5xl">
                @if (loading()) {
                    <div class="flex justify-center py-20">
                        <mat-spinner diameter="40"></mat-spinner>
                    </div>
                } @else if (errorKey()) {
                    <div
                        class="rounded-2xl border border-red-200/90 bg-red-50/90 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"
                    >
                        {{ errorKey()! | transloco }}
                    </div>
                } @else if (project()) {
                    @if (section() === 'api') {
                        <div class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40 md:p-8">
                            <p class="text-sm text-stone-600 dark:text-stone-400">{{ t('smartEnrollProjects.detail.apiIntro') }}</p>
                            <div class="mt-6 space-y-4">
                                <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <span class="text-sm font-medium text-stone-700 dark:text-stone-300">{{
                                        t('smartEnrollProjects.detail.projectId')
                                    }}</span>
                                    <div class="flex min-w-0 items-center gap-2 rounded-xl bg-stone-100 px-3 py-2 dark:bg-gray-800">
                                        <code class="min-w-0 flex-1 break-all text-xs text-stone-800 dark:text-stone-200">{{ project()!._id }}</code>
                                        <button
                                            mat-icon-button
                                            type="button"
                                            (click)="copyValue(project()!._id, $event)"
                                            [attr.aria-label]="t('smartEnrollProjects.detail.copy')"
                                        >
                                            <mat-icon class="icon-size-5" svgIcon="mat_outline:content_copy"></mat-icon>
                                        </button>
                                    </div>
                                </div>
                                @if (flow(); as f) {
                                    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                        <span class="text-sm font-medium text-stone-700 dark:text-stone-300">{{
                                            t('smartEnrollProjects.detail.projectFlowId')
                                        }}</span>
                                        <div class="flex min-w-0 items-center gap-2 rounded-xl bg-stone-100 px-3 py-2 dark:bg-gray-800">
                                            <code class="min-w-0 flex-1 break-all text-xs text-stone-800 dark:text-stone-200">{{ f._id }}</code>
                                            <button
                                                mat-icon-button
                                                type="button"
                                                (click)="copyValue(f._id, $event)"
                                                [attr.aria-label]="t('smartEnrollProjects.detail.copy')"
                                            >
                                                <mat-icon class="icon-size-5" svgIcon="mat_outline:content_copy"></mat-icon>
                                            </button>
                                        </div>
                                    </div>
                                }
                                @if (clientId(project()); as cid) {
                                    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                        <span class="text-sm font-medium text-stone-700 dark:text-stone-300">{{
                                            t('smartEnrollProjects.detail.clientId')
                                        }}</span>
                                        <div class="flex min-w-0 items-center gap-2 rounded-xl bg-stone-100 px-3 py-2 dark:bg-gray-800">
                                            <code class="min-w-0 flex-1 break-all text-xs text-stone-800 dark:text-stone-200">{{ cid }}</code>
                                            <button
                                                mat-icon-button
                                                type="button"
                                                (click)="copyValue(cid, $event)"
                                                [attr.aria-label]="t('smartEnrollProjects.detail.copy')"
                                            >
                                                <mat-icon class="icon-size-5" svgIcon="mat_outline:content_copy"></mat-icon>
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                            <p class="mt-6 text-sm text-stone-600 dark:text-stone-400">
                                {{ t('smartEnrollProjects.detail.documentation') }}
                                <a
                                    [href]="docsUrl()"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="font-semibold text-primary-600 hover:underline"
                                    >{{ t('smartEnrollProjects.detail.viewDocs') }}</a
                                >
                            </p>
                            <div class="mt-8 flex flex-wrap gap-2">
                                <button mat-flat-button color="primary" type="button" class="rounded-xl" (click)="clearSection()">
                                    {{ t('smartEnrollProjects.detail.backToOverview') }}
                                </button>
                                <button mat-stroked-button type="button" class="rounded-xl" (click)="goToRecords()">
                                    {{ t('smartEnrollProjects.list.seeLogs') }}
                                </button>
                            </div>
                        </div>
                    } @else if (section()) {
                        <div class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40 md:p-8">
                            <p class="text-sm text-stone-600 dark:text-stone-400">{{ t('smartEnrollProjects.detail.sectionHint') }}</p>
                            <div class="mt-6 flex flex-wrap gap-2">
                                <button mat-flat-button color="primary" type="button" class="rounded-xl" (click)="clearSection()">
                                    {{ t('smartEnrollProjects.detail.backToOverview') }}
                                </button>
                                <button mat-stroked-button type="button" class="rounded-xl" (click)="goToStaff()">
                                    {{ t('smartEnrollProjects.list.menuStaff') }}
                                </button>
                            </div>
                        </div>
                    } @else {
                        @let brand = brandingPreview();
                        @let basic = basicPreview();
                        @let signUp = signUpPreview();
                        @let docs = documentsPreview();
                        @let liveness = livenessPreview();
                        @let reps = representativesPreview();
                        @let integ = integrationsPreview();

                        <div class="flex flex-col gap-6">
                            <!-- 1. Brand-themed hero -->
                            <section
                                class="overflow-hidden rounded-3xl border border-stone-200/90 dark:border-gray-700"
                                [style.background-color]="brand.backgroundColor"
                            >
                                <div class="flex flex-wrap items-start justify-between gap-6 p-6 md:p-8">
                                    <div class="flex items-start gap-4">
                                        <div
                                            class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-black/5"
                                            [style.background-color]="brand.imageBackgroundColor"
                                        >
                                            @if (brand.logo) {
                                                <img [src]="brand.logo" alt="" class="h-full w-full object-contain" />
                                            } @else {
                                                <mat-icon class="!h-7 !w-7" [style.color]="brand.titleColor">business</mat-icon>
                                            }
                                        </div>
                                        <div class="min-w-0">
                                            <p class="text-2xl font-semibold leading-tight" [style.color]="brand.titleColor">
                                                {{ project()!.name || t('smartEnrollProjects.detail.untitledProject') }}
                                            </p>
                                            <p class="mt-1 text-sm" [style.color]="brand.textColor">
                                                {{ t('smartEnrollProjects.detail.summary.target.' + target()) }}
                                                @if (project()!.updatedAt) {
                                                    \xB7 {{ t('smartEnrollProjects.updated') }} {{ formatDate(project()!.updatedAt) }}
                                                }
                                            </p>
                                            <div class="mt-3 flex flex-wrap items-center gap-2">
                                                <span
                                                    class="rounded-full px-3 py-1 text-xs font-semibold"
                                                    [ngClass]="
                                                        flow()?.status === 'active'
                                                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200'
                                                            : 'bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200'
                                                    "
                                                >
                                                    {{ flow()?.status || 'draft' }}
                                                </span>
                                                <button
                                                    type="button"
                                                    class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
                                                    [style.background-color]="brand.buttonColor"
                                                    [style.color]="brand.buttonTextColor"
                                                    (click)="openSetup(5)"
                                                >
                                                    <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">palette</mat-icon>
                                                    {{ t('smartEnrollProjects.detail.brand.editBrand') }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex items-center gap-1">
                                        @for (sw of swatchEntries(); track sw.key) {
                                            <span
                                                class="h-6 w-6 rounded-full border border-black/10"
                                                [style.background-color]="sw.value"
                                                [attr.title]="t(sw.labelKey) + ' \xB7 ' + sw.value"
                                            ></span>
                                        }
                                    </div>
                                </div>
                            </section>

                            <!-- 2. Basic info -->
                            <section
                                class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"
                            >
                                <header class="mb-4 flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                                            {{ t('smartEnrollProjects.setup.steps.basic_setup') }}
                                        </h2>
                                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.basic.subtitle') }}
                                        </p>
                                    </div>
                                    <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(0)">
                                        <mat-icon class="!h-4 !w-4">edit</mat-icon>
                                        {{ t('smartEnrollProjects.detail.editSection') }}
                                    </button>
                                </header>

                                <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.basic.name') }}
                                        </span>
                                        <span class="text-sm text-stone-800 dark:text-stone-100">
                                            {{ basic.name || t('smartEnrollProjects.detail.noValue') }}
                                        </span>
                                    </div>
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.basic.contactEmail') }}
                                        </span>
                                        <span class="text-sm text-stone-800 dark:text-stone-100">
                                            {{ basic.contactEmail || t('smartEnrollProjects.detail.noValue') }}
                                        </span>
                                    </div>
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.basic.privacyUrl') }}
                                        </span>
                                        @if (basic.privacyUrl) {
                                            <a [href]="basic.privacyUrl" target="_blank" rel="noopener noreferrer" class="truncate text-sm text-primary-600 hover:underline">
                                                {{ basic.privacyUrl }}
                                            </a>
                                        } @else {
                                            <span class="text-sm text-stone-500">{{ t('smartEnrollProjects.detail.noValue') }}</span>
                                        }
                                    </div>
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.basic.termsUrl') }}
                                        </span>
                                        @if (basic.termsAndConditionsUrl) {
                                            <a [href]="basic.termsAndConditionsUrl" target="_blank" rel="noopener noreferrer" class="truncate text-sm text-primary-600 hover:underline">
                                                {{ basic.termsAndConditionsUrl }}
                                            </a>
                                        } @else {
                                            <span class="text-sm text-stone-500">{{ t('smartEnrollProjects.detail.noValue') }}</span>
                                        }
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <p class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                        {{ t('smartEnrollProjects.detail.basic.allowedCountries') }}
                                    </p>
                                    @if (basic.allowedCountries.length) {
                                        <div class="mt-2 flex flex-wrap gap-1.5">
                                            @for (c of basic.allowedCountries; track c) {
                                                <span class="inline-flex items-center rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                                    {{ c }}
                                                </span>
                                            }
                                        </div>
                                    } @else {
                                        <p class="mt-1 text-sm text-stone-500">{{ t('smartEnrollProjects.detail.basic.noCountries') }}</p>
                                    }
                                </div>

                                @if (basic.dpo) {
                                    <div class="mt-4 rounded-xl border border-stone-200/80 bg-stone-50/60 px-3 py-3 dark:border-gray-700 dark:bg-gray-900/40">
                                        <p class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.basic.dpo') }}
                                        </p>
                                        <p class="mt-1 text-sm font-medium text-stone-800 dark:text-stone-100">
                                            {{ basic.dpo.name || t('smartEnrollProjects.detail.noValue') }}
                                        </p>
                                        <p class="text-xs text-stone-500 dark:text-stone-400">
                                            @if (basic.dpo.email) { {{ basic.dpo.email }} }
                                            @if (basic.dpo.email && (basic.dpo.city || basic.dpo.country)) { \xB7 }
                                            @if (basic.dpo.city) { {{ basic.dpo.city }} }
                                            @if (basic.dpo.city && basic.dpo.country) { , }
                                            @if (basic.dpo.country) { {{ basic.dpo.country }} }
                                        </p>
                                    </div>
                                }
                            </section>

                            <!-- 3. Sign-up form -->
                            <section
                                class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"
                            >
                                <header class="mb-4 flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                                            {{ t('smartEnrollProjects.setup.steps.signup_form') }}
                                        </h2>
                                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.signup.subtitle') }}
                                        </p>
                                    </div>
                                    <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(1)">
                                        <mat-icon class="!h-4 !w-4">edit</mat-icon>
                                        {{ t('smartEnrollProjects.detail.editSection') }}
                                    </button>
                                </header>

                                <div class="flex flex-wrap gap-2">
                                    <span class="inline-flex items-center gap-1 rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold text-white dark:bg-stone-200 dark:text-stone-900">
                                        {{ t('smartEnrollProjects.detail.summary.target.' + signUp.target) }}
                                    </span>
                                    @if (signUp.target === 'personal' && signUp.fullName) {
                                        <span class="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">badge</mat-icon>
                                            {{ t('smartEnrollProjects.detail.signup.fullName.' + (signUp.fullNameStyle || 'separate')) }}
                                        </span>
                                    }
                                    @if (signUp.target === 'business' && signUp.businessBasicInfo) {
                                        <span class="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">domain</mat-icon>
                                            {{ t('smartEnrollProjects.detail.signup.business.' + (signUp.businessBasicInfoStyle || 'name_number')) }}
                                        </span>
                                    }
                                    @if (signUp.email) {
                                        <span class="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">mail</mat-icon>
                                            {{ t('smartEnrollProjects.detail.signup.email.' + signUp.emailGateway) }}
                                        </span>
                                    }
                                    @if (signUp.phone) {
                                        <span class="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">phone</mat-icon>
                                            {{ t('smartEnrollProjects.detail.signup.phone.' + signUp.phoneGateway) }}
                                            @if (signUp.countryCode) { \xB7 {{ signUp.countryCode }} }
                                        </span>
                                    }
                                    @if (signUp.address) {
                                        <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">location_on</mat-icon>
                                            {{ t('smartEnrollProjects.detail.signup.address') }}
                                        </span>
                                    }
                                    @if (signUp.showTermsAndConditions) {
                                        <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">description</mat-icon>
                                            {{ t('smartEnrollProjects.detail.signup.terms') }}
                                        </span>
                                    }
                                    @if (signUp.showPrivacyNotice) {
                                        <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">shield</mat-icon>
                                            {{ t('smartEnrollProjects.detail.signup.privacy') }}
                                        </span>
                                    }
                                </div>

                                @if (signUp.target === 'personal' && signUp.additionalFields.length) {
                                    <div class="mt-4">
                                        <p class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.signup.additionalFields') }}
                                        </p>
                                        <div class="mt-2 flex flex-wrap gap-1.5">
                                            @for (f of signUp.additionalFields; track f) {
                                                <span class="inline-flex items-center rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                                    {{ t('smartEnrollProjects.setup.signupForm.additionalFields.' + f) }}
                                                </span>
                                            }
                                        </div>
                                    </div>
                                }
                            </section>

                            <!-- 4. Documents -->
                            <section
                                class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"
                            >
                                <header class="mb-4 flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                                            {{
                                                docs.target === 'business'
                                                    ? t('smartEnrollProjects.setup.steps.business')
                                                    : t('smartEnrollProjects.setup.steps.documents')
                                            }}
                                        </h2>
                                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.documents.subtitle') }}
                                        </p>
                                    </div>
                                    <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(2)">
                                        <mat-icon class="!h-4 !w-4">edit</mat-icon>
                                        {{ t('smartEnrollProjects.detail.editSection') }}
                                    </button>
                                </header>

                                <div class="flex flex-wrap gap-2">
                                    <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">replay</mat-icon>
                                        {{ t('smartEnrollProjects.detail.documents.attempts', { count: docs.attemptLimit }) }}
                                    </span>
                                    @for (m of docs.verificationMethods; track m) {
                                        <span class="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">{{ m === 'scan' ? 'photo_camera' : 'file_upload' }}</mat-icon>
                                            {{ t('smartEnrollProjects.setup.documents.method.' + m) }}
                                        </span>
                                    }
                                    @if (docs.screening) {
                                        <span class="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">verified</mat-icon>
                                            {{ t('smartEnrollProjects.detail.documents.screeningOn') }}
                                        </span>
                                    }
                                </div>

                                @if (docs.screening) {
                                    <div class="mt-3 flex flex-wrap gap-1.5">
                                        @if (docs.informationVerification) {
                                            <span class="inline-flex items-center rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                                {{ t('smartEnrollProjects.setup.documents.screening.informationVerification') }}
                                            </span>
                                        }
                                        @if (docs.criminalHistoryVerification) {
                                            <span class="inline-flex items-center rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                                {{ t('smartEnrollProjects.setup.documents.screening.criminalHistory') }}
                                            </span>
                                        }
                                        @for (e of docs.criminalEndpoints; track e) {
                                            <span class="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
                                                {{ criminalEndpointLabel(e) }}
                                            </span>
                                        }
                                    </div>
                                }

                                <div class="mt-4 flex flex-col gap-2">
                                    @if (docs.countries.length === 0) {
                                        <p class="text-sm text-stone-500">{{ t('smartEnrollProjects.detail.documents.noCountries') }}</p>
                                    } @else {
                                        @for (country of docs.countries; track country.country) {
                                            <div class="flex flex-col gap-2 rounded-xl border border-stone-200/80 bg-stone-50/60 px-3 py-2 dark:border-gray-700 dark:bg-gray-900/40">
                                                <div class="flex items-center justify-between gap-3">
                                                    <p class="m-0 text-sm font-semibold text-stone-800 dark:text-stone-100">
                                                        {{ country.country || t('smartEnrollProjects.detail.noValue') }}
                                                    </p>
                                                    <span class="text-[11px] text-stone-500 dark:text-stone-400">
                                                        {{ t('smartEnrollProjects.detail.documents.activeCount', { count: country.activeCategories.length }) }}
                                                    </span>
                                                </div>
                                                @if (country.activeCategories.length) {
                                                    <div class="flex flex-wrap gap-1.5">
                                                        @for (cat of country.activeCategories; track cat.documentCategory) {
                                                            <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                                                {{ t('smartEnrollProjects.setup.documents.category.' + cat.documentCategory) }}
                                                                @if (cat.templates) { \xB7 {{ cat.templates }} }
                                                            </span>
                                                        }
                                                    </div>
                                                } @else {
                                                    <p class="text-[11px] text-amber-700 dark:text-amber-400">{{ t('smartEnrollProjects.setup.documents.types.activateHint') }}</p>
                                                }
                                            </div>
                                        }
                                    }
                                </div>
                            </section>

                            <!-- 5. Liveness -->
                            <section
                                class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"
                            >
                                <header class="mb-4 flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                                            {{ t('smartEnrollProjects.setup.steps.liveness') }}
                                        </h2>
                                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.liveness.subtitle') }}
                                        </p>
                                    </div>
                                    <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(3)">
                                        <mat-icon class="!h-4 !w-4">edit</mat-icon>
                                        {{ t('smartEnrollProjects.detail.editSection') }}
                                    </button>
                                </header>

                                <div class="mb-4 flex flex-wrap items-center gap-2">
                                    <span class="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">verified_user</mat-icon>
                                        {{
                                            liveness.kycType === 'zero_knowledge'
                                                ? t('smartEnrollProjects.setup.liveness.kyc.zeroKnowledge')
                                                : t('smartEnrollProjects.setup.liveness.kyc.traditional')
                                        }}
                                    </span>
                                    <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">replay</mat-icon>
                                        {{ t('smartEnrollProjects.detail.documents.attempts', { count: liveness.attemptLimit }) }}
                                    </span>
                                </div>

                                <div class="flex flex-col gap-3">
                                    <div class="flex flex-col gap-1">
                                        <div class="flex items-baseline justify-between gap-2">
                                            <span class="text-xs font-medium text-stone-600 dark:text-stone-300">
                                                {{ t('smartEnrollProjects.setup.liveness.thresholds.minScore') }}
                                            </span>
                                            <span class="font-mono text-sm font-semibold text-stone-900 dark:text-stone-100">
                                                {{ liveness.minScore }}%
                                            </span>
                                        </div>
                                        <div class="h-2 w-full overflow-hidden rounded-full bg-stone-100 dark:bg-gray-800">
                                            <div class="h-full" [ngClass]="scoreBarClass(liveness.minScore)" [style.width.%]="liveness.minScore"></div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-1">
                                        <div class="flex items-baseline justify-between gap-2">
                                            <span class="text-xs font-medium text-stone-600 dark:text-stone-300">
                                                {{ t('smartEnrollProjects.setup.liveness.thresholds.compareMinScore') }}
                                            </span>
                                            <span class="font-mono text-sm font-semibold text-stone-900 dark:text-stone-100">
                                                {{ liveness.compareMinScore }}%
                                            </span>
                                        </div>
                                        <div class="h-2 w-full overflow-hidden rounded-full bg-stone-100 dark:bg-gray-800">
                                            <div class="h-full" [ngClass]="scoreBarClass(liveness.compareMinScore)" [style.width.%]="liveness.compareMinScore"></div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-1">
                                        <div class="flex items-baseline justify-between gap-2">
                                            <span class="text-xs font-medium text-stone-600 dark:text-stone-300">
                                                {{ t('smartEnrollProjects.setup.liveness.thresholds.searchMinScore') }}
                                            </span>
                                            <span class="font-mono text-sm font-semibold text-stone-900 dark:text-stone-100">
                                                {{ liveness.searchMinScore }}%
                                            </span>
                                        </div>
                                        <div class="h-2 w-full overflow-hidden rounded-full bg-stone-100 dark:bg-gray-800">
                                            <div class="h-full" [ngClass]="scoreBarClass(liveness.searchMinScore)" [style.width.%]="liveness.searchMinScore"></div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <!-- 5b. Representatives (business only) -->
                            @if (reps) {
                                <section
                                    class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"
                                >
                                    <header class="mb-4 flex flex-wrap items-start justify-between gap-3">
                                        <div>
                                            <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                                                {{ t('smartEnrollProjects.setup.steps.representatives') }}
                                            </h2>
                                            <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                                                {{ t('smartEnrollProjects.detail.representatives.subtitle') }}
                                            </p>
                                        </div>
                                        <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(3)">
                                            <mat-icon class="!h-4 !w-4">edit</mat-icon>
                                            {{ t('smartEnrollProjects.detail.editSection') }}
                                        </button>
                                    </header>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">groups</mat-icon>
                                            {{ t('smartEnrollProjects.detail.summary.representatives', { min: reps.minRepresentatives, max: reps.maxRepresentatives }) }}
                                        </span>
                                        <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">notifications</mat-icon>
                                            {{ t('smartEnrollProjects.detail.representatives.notification.' + reps.notificationType) }}
                                        </span>
                                    </div>
                                </section>
                            }

                            <!-- 6. Integrations -->
                            <section
                                class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"
                            >
                                <header class="mb-4 flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                                            {{ t('smartEnrollProjects.setup.steps.integrations') }}
                                        </h2>
                                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.integrations.subtitle') }}
                                        </p>
                                    </div>
                                    <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(4)">
                                        <mat-icon class="!h-4 !w-4">edit</mat-icon>
                                        {{ t('smartEnrollProjects.detail.editSection') }}
                                    </button>
                                </header>

                                <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.setup.integrations.redirect.title') }}
                                        </span>
                                        @if (integ.redirectUrl) {
                                            <div class="flex items-center gap-2">
                                                <code class="min-w-0 flex-1 truncate text-xs text-stone-800 dark:text-stone-200">{{ integ.redirectUrl }}</code>
                                                <button mat-icon-button type="button" (click)="copyValue(integ.redirectUrl, $event)" [attr.aria-label]="t('smartEnrollProjects.detail.copy')">
                                                    <mat-icon class="!h-4 !w-4">content_copy</mat-icon>
                                                </button>
                                            </div>
                                        } @else {
                                            <span class="text-sm text-stone-500">{{ t('smartEnrollProjects.detail.noValue') }}</span>
                                        }
                                    </div>
                                    <div class="flex flex-col gap-1 rounded-xl bg-stone-50 px-3 py-2 dark:bg-gray-900/40">
                                        <span class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.setup.integrations.webhook.title') }}
                                        </span>
                                        @if (integ.webhook) {
                                            <code class="truncate text-xs text-stone-800 dark:text-stone-200">{{ integ.webhook }}</code>
                                        } @else {
                                            <span class="text-sm text-stone-500">{{ t('smartEnrollProjects.setup.integrations.webhook.none') }}</span>
                                        }
                                    </div>
                                </div>

                                <div class="mt-3 flex flex-wrap gap-2">
                                    <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">tune</mat-icon>
                                        {{
                                            integ.source === 'API'
                                                ? t('smartEnrollProjects.setup.integrations.source.api')
                                                : t('smartEnrollProjects.setup.integrations.source.none')
                                        }}
                                    </span>
                                    @if (integ.source === 'API' && integ.apiUrl) {
                                        <span class="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-900 dark:text-stone-200">
                                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">link</mat-icon>
                                            <code class="font-mono text-[11px]">{{ integ.apiUrl }}</code>
                                        </span>
                                    }
                                </div>
                            </section>

                            <!-- 7. Brand preview -->
                            <section
                                class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"
                            >
                                <header class="mb-4 flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">
                                            {{ t('smartEnrollProjects.detail.brand.title') }}
                                        </h2>
                                        <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.brand.subtitle') }}
                                        </p>
                                    </div>
                                    <button mat-stroked-button type="button" class="rounded-full" (click)="openSetup(5)">
                                        <mat-icon class="!h-4 !w-4">edit</mat-icon>
                                        {{ t('smartEnrollProjects.detail.editSection') }}
                                    </button>
                                </header>

                                <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <div class="flex flex-col gap-2 rounded-xl border border-stone-200/80 bg-stone-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">
                                        <p class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.brand.logo') }}
                                        </p>
                                        <div class="flex h-32 items-center justify-center overflow-hidden rounded-lg" [style.background-color]="brand.imageBackgroundColor">
                                            @if (brand.logo) {
                                                <img [src]="brand.logo" alt="" class="max-h-full max-w-full object-contain" />
                                            } @else {
                                                <span class="text-xs text-stone-500">{{ t('smartEnrollProjects.detail.noValue') }}</span>
                                            }
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-2 rounded-xl border border-stone-200/80 bg-stone-50 p-3 dark:border-gray-700 dark:bg-gray-900/40">
                                        <p class="text-[11px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.brand.image') }}
                                        </p>
                                        <div class="flex h-32 items-center justify-center overflow-hidden rounded-lg" [style.background-color]="brand.imageBackgroundColor">
                                            @if (brand.image) {
                                                <img [src]="brand.image" alt="" class="max-h-full max-w-full object-contain" />
                                            } @else {
                                                <span class="text-xs text-stone-500">{{ t('smartEnrollProjects.detail.noValue') }}</span>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                                    @for (sw of swatchEntries(); track sw.key) {
                                        <div class="flex flex-col items-center gap-1 rounded-xl border border-stone-200/80 px-2 py-3 dark:border-gray-700">
                                            <span class="h-8 w-8 rounded-full border border-black/10 shadow-sm" [style.background-color]="sw.value"></span>
                                            <p class="m-0 text-[10px] font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                                {{ t(sw.labelKey) }}
                                            </p>
                                            <p class="m-0 font-mono text-[10px] text-stone-700 dark:text-stone-300">{{ sw.value }}</p>
                                        </div>
                                    }
                                </div>
                            </section>

                            <!-- 8. API integration -->
                            <section class="rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40">
                                <h2 class="text-base font-semibold text-stone-900 dark:text-white">
                                    {{ t('smartEnrollProjects.detail.sectionApi') }}
                                </h2>
                                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                                    {{ t('smartEnrollProjects.detail.apiIntro') }}
                                </p>
                                <div class="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                                    <div class="flex items-center justify-between gap-2 rounded-xl bg-stone-100 px-3 py-2 dark:bg-gray-800">
                                        <div class="min-w-0">
                                            <p class="text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                                {{ t('smartEnrollProjects.detail.projectId') }}
                                            </p>
                                            <code class="block truncate text-xs text-stone-800 dark:text-stone-200">{{ project()!._id }}</code>
                                        </div>
                                        <button
                                            mat-icon-button
                                            type="button"
                                            (click)="copyValue(project()!._id, $event)"
                                            [attr.aria-label]="t('smartEnrollProjects.detail.copy')"
                                        >
                                            <mat-icon class="icon-size-5" svgIcon="mat_outline:content_copy"></mat-icon>
                                        </button>
                                    </div>

                                    @if (flow(); as f) {
                                        <div class="flex items-center justify-between gap-2 rounded-xl bg-stone-100 px-3 py-2 dark:bg-gray-800">
                                            <div class="min-w-0">
                                                <p class="text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                                    {{ t('smartEnrollProjects.detail.projectFlowId') }}
                                                </p>
                                                <code class="block truncate text-xs text-stone-800 dark:text-stone-200">{{ f._id }}</code>
                                            </div>
                                            <button
                                                mat-icon-button
                                                type="button"
                                                (click)="copyValue(f._id, $event)"
                                                [attr.aria-label]="t('smartEnrollProjects.detail.copy')"
                                            >
                                                <mat-icon class="icon-size-5" svgIcon="mat_outline:content_copy"></mat-icon>
                                            </button>
                                        </div>
                                    }
                                </div>
                                <p class="mt-4 text-xs text-stone-500 dark:text-stone-400">
                                    {{ t('smartEnrollProjects.detail.documentation') }}
                                    <a
                                        [href]="docsUrl()"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="font-semibold text-primary-600 hover:underline"
                                        >{{ t('smartEnrollProjects.detail.viewDocs') }}</a
                                    >
                                </p>
                            </section>
                        </div>
                    }
                }
            </div>
        </main>
    </div>
</ng-container>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetailComponent, { className: "ProjectDetailComponent", filePath: "src/app/modules/smart-enroll/projects/project-detail/project-detail.component.ts", lineNumber: 79 });
})();
export {
  ProjectDetailComponent
};
//# sourceMappingURL=chunk-XTHYYL5H.js.map
