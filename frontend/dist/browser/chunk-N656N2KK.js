import {
  SmartEnrollProjectsService
} from "./chunk-YSERIMFI.js";
import {
  Clipboard,
  ClipboardModule
} from "./chunk-FUHKLPA6.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-RWPBVZ63.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-EPB35CWV.js";
import "./chunk-B4CPLDBC.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  DateTime
} from "./chunk-BAVSUFW7.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  CommonModule,
  Component,
  MatButton,
  MatButtonModule,
  MatIconButton,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/modules/smart-enroll/projects/project-list/project-list.component.ts
var _forTrack0 = ($index, $item) => $item._id;
function ProjectListComponent_ng_container_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-progress-spinner", 18);
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_ng_container_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.error()));
  }
}
function ProjectListComponent_ng_container_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 19)(2, "h2", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 23);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_24_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPlans());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.noPlanCardTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.noPlanBannerSubtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.noPlanCardBody"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.goToPlans"), " ");
  }
}
function ProjectListComponent_ng_container_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.empty"));
  }
}
function ProjectListComponent_ng_container_0_Conditional_26_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    const project_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", project_r5.branding.logo, \u0275\u0275sanitizeUrl);
  }
}
function ProjectListComponent_ng_container_0_Conditional_26_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "mat-icon", 60);
    \u0275\u0275elementEnd();
  }
}
function ProjectListComponent_ng_container_0_Conditional_26_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 61);
    \u0275\u0275element(2, "span", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-slide-toggle", 63);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Conditional_8_Template_mat_slide_toggle_click_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Conditional_8_Template_mat_slide_toggle_change_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const project_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onFlowStatusToggle($event, project_r5));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const flow_r7 = ctx;
    const t_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("pill-on", !ctx_r0.isDraftFlow(flow_r7))("pill-off", ctx_r0.isDraftFlow(flow_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isDraftFlow(flow_r7) ? t_r3("smartEnrollProjects.list.draft") : t_r3("smartEnrollProjects.list.active"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.flowToggleChecked(flow_r7));
  }
}
function ProjectListComponent_ng_container_0_Conditional_26_For_2_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275attribute("title", (m_r8.staff == null ? null : m_r8.staff.name) || "")("aria-label", (m_r8.staff == null ? null : m_r8.staff.name) || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatAcronym(m_r8.staff == null ? null : m_r8.staff.name), " ");
  }
}
function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 26);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_article_click_0_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openProject(project_r5, $event));
    });
    \u0275\u0275elementStart(1, "div", 27)(2, "div", 28);
    \u0275\u0275template(3, ProjectListComponent_ng_container_0_Conditional_26_For_2_Conditional_3_Template, 1, 1, "img", 29)(4, ProjectListComponent_ng_container_0_Conditional_26_For_2_Conditional_4_Template, 2, 0, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 31)(6, "h2", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProjectListComponent_ng_container_0_Conditional_26_For_2_Conditional_8_Template, 5, 6, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 34);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(10, "mat-icon", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-menu", null, 0)(13, "button", 36);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_13_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openLiveEnrollment(project_r5, $event));
    });
    \u0275\u0275element(14, "mat-icon", 37);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 36);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_17_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.copyLiveEnrollmentUrl(project_r5, $event));
    });
    \u0275\u0275element(18, "mat-icon", 38);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 36);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_21_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openProject(project_r5, $event));
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 36);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_23_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openRecords(project_r5, $event));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 36);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_25_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openStaff(project_r5, $event));
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 39);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_div_click_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(28, "button", 40);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_28_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSection(project_r5, "signup", $event));
    });
    \u0275\u0275element(29, "mat-icon", 41);
    \u0275\u0275elementStart(30, "span", 42);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 43);
    \u0275\u0275text(33, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "button", 40);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_34_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSection(project_r5, "documents", $event));
    });
    \u0275\u0275element(35, "mat-icon", 44);
    \u0275\u0275elementStart(36, "span", 42);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 43);
    \u0275\u0275text(39, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "button", 40);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_40_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSection(project_r5, "liveness", $event));
    });
    \u0275\u0275element(41, "mat-icon", 45);
    \u0275\u0275elementStart(42, "span", 42);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 43);
    \u0275\u0275text(45, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "button", 46);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_46_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSection(project_r5, "api", $event));
    });
    \u0275\u0275element(47, "mat-icon", 47);
    \u0275\u0275elementStart(48, "span", 42);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 43);
    \u0275\u0275text(51, "\u203A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 48);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_div_click_52_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(53, "div", 49);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 50);
    \u0275\u0275repeaterCreate(56, ProjectListComponent_ng_container_0_Conditional_26_For_2_For_57_Template, 2, 3, "div", 51, _forTrack0);
    \u0275\u0275elementStart(58, "button", 52);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_58_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.openStaff(project_r5, $event);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(59, " + ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 53);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 54);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_div_click_62_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(63, "button", 55);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_63_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openLiveEnrollment(project_r5, $event));
    });
    \u0275\u0275element(64, "mat-icon", 56);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 57)(67, "button", 58);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_67_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openProject(project_r5, $event));
    });
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "button", 59);
    \u0275\u0275listener("click", function ProjectListComponent_ng_container_0_Conditional_26_For_2_Template_button_click_69_listener($event) {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openRecords(project_r5, $event));
    });
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const project_r5 = ctx.$implicit;
    const projectMenu_r9 = \u0275\u0275reference(12);
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((project_r5.branding == null ? null : project_r5.branding.logo) ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r5.name || project_r5._id);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r0.currentFlow(project_r5)) ? 8 : -1, tmp_16_0);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", projectMenu_r9);
    \u0275\u0275attribute("aria-label", t_r3("smartEnrollProjects.list.moreActions"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.list.menuLiveEnrollment"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.list.copyLiveUrl"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.list.menuEdit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.list.menuRecords"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.list.menuStaff"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.list.signupForm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.list.documents"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.list.biometrics"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.list.apiIntegration"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.list.members"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.membersForCard(project_r5).slice(0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", t_r3("smartEnrollProjects.list.addMember"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", t_r3("smartEnrollProjects.updated"), ": ", ctx_r0.formatUpdated(project_r5.updatedAt), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.list.openLiveEnrollment"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.list.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.list.seeLogs"), " ");
  }
}
function ProjectListComponent_ng_container_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, ProjectListComponent_ng_container_0_Conditional_26_For_2_Template, 71, 21, "article", 25, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.projects());
  }
}
function ProjectListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "header", 4)(4, "div", 5);
    \u0275\u0275element(5, "mat-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h1", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 9)(12, "a", 10);
    \u0275\u0275text(13, "Verifik");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275text(15, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 12);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 11);
    \u0275\u0275text(19, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 12);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ProjectListComponent_ng_container_0_Conditional_22_Template, 2, 0, "div", 13)(23, ProjectListComponent_ng_container_0_Conditional_23_Template, 3, 3, "div", 14)(24, ProjectListComponent_ng_container_0_Conditional_24_Template, 10, 4, "div", 15)(25, ProjectListComponent_ng_container_0_Conditional_25_Template, 3, 1, "div", 16)(26, ProjectListComponent_ng_container_0_Conditional_26_Template, 3, 0, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.subtitle"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("nav.smart_enroll"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("smartEnrollProjects.title"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading() ? 22 : ctx_r0.error() ? 23 : ctx_r0.noActivePlan() ? 24 : ctx_r0.projects().length === 0 ? 25 : 26);
  }
}
var ProjectListComponent = class _ProjectListComponent {
  constructor() {
    this._clipboard = inject(Clipboard);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._router = inject(Router);
    this.projects = signal([]);
    this.loading = signal(true);
    this.error = signal(null);
    this.noActivePlan = signal(false);
  }
  ngOnInit() {
    const user = this._projectsService.parseStoredUser();
    if (user?.staff) {
      this._loadProjects();
      return;
    }
    this._projectsService.getActiveSmartEnrollPlans().subscribe({
      next: (res) => {
        const rows = res?.data ?? [];
        if (!rows.length) {
          this.noActivePlan.set(true);
          this.loading.set(false);
          return;
        }
        this._loadProjects();
      },
      error: () => {
        this.error.set("smartEnrollProjects.plansLoadError");
        this.loading.set(false);
      }
    });
  }
  goToPlans() {
    this._router.navigate(["/smart-enroll/plans"]);
  }
  openProject(project, event) {
    event?.stopPropagation();
    this._router.navigate(["/smart-enroll/projects", project._id]);
  }
  openRecords(project, event) {
    event?.stopPropagation();
    this._router.navigate(["/smart-enroll/projects", project._id, "records"]);
  }
  openStaff(project, event) {
    event?.stopPropagation();
    this._router.navigate(["/smart-enroll/projects", project._id, "staff"]);
  }
  /**
   * Public Smart Enroll entry on the KYC / access host (`/sign-up/:projectId`), same as Verifik access app.
   */
  liveEnrollmentUrl(project) {
    const base = (environment.kycBaseUrl ?? "").replace(/\/+$/, "");
    return `${base}/sign-up/${project._id}`;
  }
  openLiveEnrollment(project, event) {
    event?.stopPropagation();
    const url = this.liveEnrollmentUrl(project);
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }
  copyLiveEnrollmentUrl(project, event) {
    event?.stopPropagation();
    this._clipboard.copy(this.liveEnrollmentUrl(project));
  }
  openSection(project, section, event) {
    event.stopPropagation();
    this._router.navigate(["/smart-enroll/projects", project._id], {
      queryParams: { section }
    });
  }
  membersForCard(project) {
    return (project.projectMembers ?? []).filter((m) => m.staff);
  }
  formatAcronym(name) {
    if (!name?.trim())
      return "?";
    const matches = name.match(/\b(\w)/g);
    return matches?.slice(0, 2).join("").toUpperCase() ?? "?";
  }
  onFlowStatusToggle(event, project) {
    const flow = this.currentFlow(project);
    if (!flow?._id) {
      event.source.checked = !event.source.checked;
      return;
    }
    const nextStatus = event.checked ? "active" : "draft";
    this._projectsService.updateProjectFlow(flow._id, { status: nextStatus }).subscribe({
      next: (res) => {
        const status = res?.data?.status ?? nextStatus;
        this.projects.update((list) => list.map((p) => {
          if (p._id !== project._id)
            return p;
          return __spreadProps(__spreadValues({}, p), {
            projectFlows: p.projectFlows?.map((f) => f._id === flow._id ? __spreadProps(__spreadValues({}, f), { status }) : f) ?? []
          });
        }));
      },
      error: () => {
        event.source.checked = !event.checked;
      }
    });
  }
  flowToggleChecked(flow) {
    return !!flow?.status && flow.status !== "draft";
  }
  currentFlow(project) {
    const flows = project.projectFlows;
    if (!flows?.length)
      return null;
    const active = flows.find((f) => f.status && f.status !== "draft");
    return active ?? flows[0];
  }
  isDraftFlow(flow) {
    return !flow?.status || flow.status === "draft";
  }
  formatUpdated(date) {
    if (!date)
      return "\u2014";
    return DateTime.fromISO(date).toFormat("MMM dd, yyyy");
  }
  _loadProjects() {
    this._projectsService.listProjects().subscribe({
      next: (list) => {
        this.projects.set(list);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("smartEnrollProjects.loadError");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function ProjectListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectListComponent, selectors: [["project-list"]], decls: 1, vars: 0, consts: [["projectMenu", "matMenu"], [4, "transloco"], [1, "page"], [1, "inner"], [1, "hero"], [1, "hero-icon"], ["svgIcon", "heroicons_outline:rectangle-stack"], [1, "title"], [1, "subtitle"], [1, "crumb"], ["routerLink", "/chat", 1, "crumb-link"], [1, "crumb-sep"], [1, "crumb-here"], [1, "state-loading"], [1, "banner-error"], [1, "plan-gate"], [1, "empty-card"], [1, "grid"], ["diameter", "40", "mode", "indeterminate"], [1, "plan-gate-body"], [1, "plan-gate-title"], [1, "plan-gate-text"], [1, "plan-gate-muted"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "plan-gate-cta", 3, "click"], [1, "empty-title"], [1, "card"], [1, "card", 3, "click"], [1, "card-top"], [1, "card-brand"], ["alt", "", 1, "logo", 3, "src"], [1, "logo-fallback"], [1, "card-heading"], [1, "card-title"], [1, "status-row"], ["type", "button", "mat-icon-button", "", 1, "menu-btn", 3, "click", "matMenuTriggerFor"], ["svgIcon", "heroicons_outline:ellipsis-vertical"], ["mat-menu-item", "", "type", "button", 3, "click"], ["svgIcon", "heroicons_outline:arrow-top-right-on-square", 1, "menu-item-icon"], ["svgIcon", "heroicons_outline:link", 1, "menu-item-icon"], [1, "rows", 3, "click"], ["type", "button", 1, "row", 3, "click"], ["svgIcon", "heroicons_outline:phone", 1, "row-ic"], [1, "row-label"], ["aria-hidden", "true", 1, "row-chev"], ["svgIcon", "heroicons_outline:envelope", 1, "row-ic"], ["svgIcon", "heroicons_outline:face-smile", 1, "row-ic"], ["type", "button", 1, "row", "row-last", 3, "click"], ["svgIcon", "heroicons_outline:code-bracket", 1, "row-ic"], [1, "members", 3, "click"], [1, "members-label"], [1, "members-strip"], [1, "member-avatar"], ["type", "button", 1, "member-add", 3, "click"], [1, "meta"], [1, "card-actions", 3, "click"], ["type", "button", 1, "btn-live", 3, "click"], ["svgIcon", "heroicons_outline:arrow-top-right-on-square", 1, "btn-live-icon"], [1, "card-actions-row"], ["type", "button", 1, "btn-primary", 3, "click"], ["type", "button", 1, "btn-secondary", 3, "click"], ["svgIcon", "heroicons_outline:folder"], [1, "pill"], [1, "pill-dot"], ["color", "primary", 3, "click", "change", "checked"]], template: function ProjectListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProjectListComponent_ng_container_0_Template, 27, 5, "ng-container", 1);
      }
    }, dependencies: [
      ClipboardModule,
      CommonModule,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSlideToggleModule,
      MatSlideToggle,
      TranslocoModule,
      TranslocoDirective,
      TranslocoPipe
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: rgb(249, 250, 251);\n}\n.inner[_ngcontent-%COMP%] {\n  max-width: 72rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 3rem;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.hero-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(37, 99, 235);\n  flex-shrink: 0;\n}\n.hero-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.875rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  font-size: 1rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.crumb[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n  margin-bottom: 1.5rem;\n}\n.crumb-link[_ngcontent-%COMP%] {\n  color: rgb(55, 65, 81);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.crumb-sep[_ngcontent-%COMP%] {\n  margin: 0 0.35rem;\n  color: rgb(209, 213, 219);\n}\n.crumb-here[_ngcontent-%COMP%] {\n  color: rgb(75, 85, 99);\n}\n.state-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.banner-error[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(127, 29, 29);\n  padding: 0.85rem 1rem;\n  font-size: 0.9rem;\n}\n.plan-gate[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  background: rgb(15, 23, 42);\n  color: #fff;\n  padding: 1.75rem 1.5rem 1.5rem;\n  max-width: 32rem;\n}\n.plan-gate-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 650;\n}\n.plan-gate-text[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  font-size: 0.9rem;\n  color: rgb(203, 213, 225);\n}\n.plan-gate-muted[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0;\n  font-size: 0.85rem;\n  color: rgb(148, 163, 184);\n  line-height: 1.5;\n}\n.plan-gate-cta[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  width: 100%;\n  border-radius: 12px;\n}\n.empty-card[_ngcontent-%COMP%] {\n  border: 1px dashed rgb(209, 213, 219);\n  border-radius: 16px;\n  padding: 3rem 1.5rem;\n  text-align: center;\n  background: #fff;\n}\n.empty-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 650;\n  color: rgb(55, 65, 81);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.25rem;\n}\n@media (min-width: 900px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 1.1rem 1.15rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  cursor: pointer;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n  text-align: left;\n}\n.card[_ngcontent-%COMP%]:hover {\n  border-color: rgb(209, 213, 219);\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);\n}\n.card-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: start;\n  gap: 0.65rem;\n  position: relative;\n}\n.card-brand[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  object-fit: contain;\n}\n.logo-fallback[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  background: rgb(243, 244, 246);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(107, 114, 128);\n}\n.card-heading[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n  line-height: 1.3;\n}\n.status-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.35rem;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  border-radius: 999px;\n  padding: 0.2rem 0.55rem 0.2rem 0.4rem;\n  font-size: 0.72rem;\n  font-weight: 650;\n  letter-spacing: 0.02em;\n}\n.pill-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 999px;\n  flex-shrink: 0;\n}\n.pill-on[_ngcontent-%COMP%] {\n  background: rgb(219, 234, 254);\n  color: rgb(30, 64, 175);\n}\n.pill-on[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: rgb(37, 99, 235);\n}\n.pill-off[_ngcontent-%COMP%] {\n  background: rgb(243, 244, 246);\n  color: rgb(75, 85, 99);\n}\n.pill-off[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: rgb(156, 163, 175);\n}\n.menu-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin: 0;\n  justify-self: end;\n  align-self: start;\n  color: rgb(55, 65, 81);\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 999px;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);\n}\n.menu-btn[_ngcontent-%COMP%]:hover {\n  color: rgb(17, 24, 39);\n  background: rgb(249, 250, 251);\n  border-color: rgb(209, 213, 219);\n}\n.menu-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  font-size: 22px;\n}\n.menu-item-icon[_ngcontent-%COMP%] {\n  width: 1.15rem !important;\n  height: 1.15rem !important;\n  font-size: 1.15rem !important;\n  margin-right: 0.65rem;\n  vertical-align: middle;\n  color: rgb(107, 114, 128);\n}\n.rows[_ngcontent-%COMP%] {\n  border-top: 1px solid rgb(243, 244, 246);\n  margin-top: 0.15rem;\n}\n.row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.65rem 0.15rem;\n  border: none;\n  border-bottom: 1px solid rgb(243, 244, 246);\n  background: transparent;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  color: rgb(17, 24, 39);\n}\n.row-last[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.row[_ngcontent-%COMP%]:hover {\n  background: rgb(249, 250, 251);\n}\n.row-ic[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  height: 1.15rem;\n  font-size: 1.15rem;\n  color: rgb(107, 114, 128);\n  flex-shrink: 0;\n}\n.row-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.row-chev[_ngcontent-%COMP%] {\n  color: rgb(37, 99, 235);\n  font-size: 1.25rem;\n  font-weight: 300;\n  line-height: 1;\n}\n.members[_ngcontent-%COMP%] {\n  padding-top: 0.35rem;\n}\n.members-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 650;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: rgb(156, 163, 175);\n  margin-bottom: 0.35rem;\n}\n.members-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.35rem;\n}\n.member-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(59, 130, 246),\n      rgb(37, 99, 235));\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.member-add[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  border: 1px dashed rgb(209, 213, 219);\n  background: rgb(252, 252, 252);\n  color: rgb(37, 99, 235);\n  font-size: 1.1rem;\n  font-weight: 600;\n  line-height: 1;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.member-add[_ngcontent-%COMP%]:hover {\n  border-color: rgb(59, 130, 246);\n  background: rgb(239, 246, 255);\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(156, 163, 175);\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  margin-top: 0.35rem;\n}\n.card-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.btn-live[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 999px;\n  padding: 0.62rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  cursor: pointer;\n  color: rgb(37, 99, 235);\n  background: rgb(255, 255, 255);\n  border: 1.5px solid rgb(37, 99, 235);\n  box-shadow: none;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease;\n}\n.btn-live[_ngcontent-%COMP%]:hover {\n  background: rgb(239, 246, 255);\n  border-color: rgb(29, 78, 216);\n  color: rgb(29, 78, 216);\n}\n.btn-live[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(59, 130, 246);\n  outline-offset: 2px;\n}\n.btn-live[_ngcontent-%COMP%]:active {\n  background: rgb(219, 234, 254);\n}\n.btn-live-icon[_ngcontent-%COMP%] {\n  width: 1.05rem !important;\n  height: 1.05rem !important;\n  font-size: 1.05rem !important;\n  flex-shrink: 0;\n  color: inherit;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 6rem;\n  border: none;\n  border-radius: 999px;\n  padding: 0.55rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: rgb(37, 99, 235);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(29, 78, 216);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 6rem;\n  border-radius: 999px;\n  padding: 0.55rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: #fff;\n  color: rgb(17, 24, 39);\n  border: 1px solid rgb(229, 231, 235);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: rgb(209, 213, 219);\n  background: rgb(249, 250, 251);\n}\n/*# sourceMappingURL=project-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectListComponent, [{
    type: Component,
    args: [{ selector: "project-list", standalone: true, imports: [
      ClipboardModule,
      CommonModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatSlideToggleModule,
      TranslocoModule
    ], template: `<ng-container *transloco="let t">
    <div class="page">
        <div class="inner">
            <header class="hero">
                <div class="hero-icon">
                    <mat-icon svgIcon="heroicons_outline:rectangle-stack"></mat-icon>
                </div>
                <div>
                    <h1 class="title">{{ t('smartEnrollProjects.title') }}</h1>
                    <p class="subtitle">{{ t('smartEnrollProjects.subtitle') }}</p>
                </div>
            </header>

            <div class="crumb">
                <a routerLink="/chat" class="crumb-link">Verifik</a>
                <span class="crumb-sep">/</span>
                <span class="crumb-here">{{ t('nav.smart_enroll') }}</span>
                <span class="crumb-sep">/</span>
                <span class="crumb-here">{{ t('smartEnrollProjects.title') }}</span>
            </div>

            @if (loading()) {
                <div class="state-loading">
                    <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>
                </div>
            } @else if (error()) {
                <div class="banner-error">{{ error()! | transloco }}</div>
            } @else if (noActivePlan()) {
                <div class="plan-gate">
                    <div class="plan-gate-body">
                        <h2 class="plan-gate-title">{{ t('smartEnrollProjects.noPlanCardTitle') }}</h2>
                        <p class="plan-gate-text">{{ t('smartEnrollProjects.noPlanBannerSubtitle') }}</p>
                        <p class="plan-gate-muted">{{ t('smartEnrollProjects.noPlanCardBody') }}</p>
                    </div>
                    <button mat-flat-button color="primary" type="button" class="plan-gate-cta" (click)="goToPlans()">
                        {{ t('smartEnrollProjects.goToPlans') }}
                    </button>
                </div>
            } @else if (projects().length === 0) {
                <div class="empty-card">
                    <p class="empty-title">{{ t('smartEnrollProjects.empty') }}</p>
                </div>
            } @else {
                <div class="grid">
                    @for (project of projects(); track project._id) {
                        <article class="card" (click)="openProject(project, $event)">
                            <div class="card-top">
                                <div class="card-brand">
                                    @if (project.branding?.logo) {
                                        <img class="logo" [src]="project.branding!.logo" alt="" />
                                    } @else {
                                        <div class="logo-fallback">
                                            <mat-icon svgIcon="heroicons_outline:folder"></mat-icon>
                                        </div>
                                    }
                                </div>
                                <div class="card-heading">
                                    <h2 class="card-title">{{ project.name || project._id }}</h2>
                                    @if (currentFlow(project); as flow) {
                                        <div class="status-row">
                                            <span
                                                class="pill"
                                                [class.pill-on]="!isDraftFlow(flow)"
                                                [class.pill-off]="isDraftFlow(flow)"
                                            >
                                                <span class="pill-dot"></span>
                                                {{
                                                    isDraftFlow(flow)
                                                        ? t('smartEnrollProjects.list.draft')
                                                        : t('smartEnrollProjects.list.active')
                                                }}
                                            </span>
                                            <mat-slide-toggle
                                                color="primary"
                                                [checked]="flowToggleChecked(flow)"
                                                (click)="$event.stopPropagation()"
                                                (change)="onFlowStatusToggle($event, project)"
                                            ></mat-slide-toggle>
                                        </div>
                                    }
                                </div>
                                <button
                                    type="button"
                                    mat-icon-button
                                    class="menu-btn"
                                    [matMenuTriggerFor]="projectMenu"
                                    (click)="$event.stopPropagation()"
                                    [attr.aria-label]="t('smartEnrollProjects.list.moreActions')"
                                >
                                    <mat-icon svgIcon="heroicons_outline:ellipsis-vertical"></mat-icon>
                                </button>
                                <mat-menu #projectMenu="matMenu">
                                    <button mat-menu-item type="button" (click)="openLiveEnrollment(project, $event)">
                                        <mat-icon class="menu-item-icon" svgIcon="heroicons_outline:arrow-top-right-on-square"></mat-icon>
                                        <span>{{ t('smartEnrollProjects.list.menuLiveEnrollment') }}</span>
                                    </button>
                                    <button mat-menu-item type="button" (click)="copyLiveEnrollmentUrl(project, $event)">
                                        <mat-icon class="menu-item-icon" svgIcon="heroicons_outline:link"></mat-icon>
                                        <span>{{ t('smartEnrollProjects.list.copyLiveUrl') }}</span>
                                    </button>
                                    <button mat-menu-item type="button" (click)="openProject(project, $event)">
                                        {{ t('smartEnrollProjects.list.menuEdit') }}
                                    </button>
                                    <button mat-menu-item type="button" (click)="openRecords(project, $event)">
                                        {{ t('smartEnrollProjects.list.menuRecords') }}
                                    </button>
                                    <button mat-menu-item type="button" (click)="openStaff(project, $event)">
                                        {{ t('smartEnrollProjects.list.menuStaff') }}
                                    </button>
                                </mat-menu>
                            </div>

                            <div class="rows" (click)="$event.stopPropagation()">
                                <button type="button" class="row" (click)="openSection(project, 'signup', $event)">
                                    <mat-icon class="row-ic" svgIcon="heroicons_outline:phone"></mat-icon>
                                    <span class="row-label">{{ t('smartEnrollProjects.list.signupForm') }}</span>
                                    <span class="row-chev" aria-hidden="true">\u203A</span>
                                </button>
                                <button type="button" class="row" (click)="openSection(project, 'documents', $event)">
                                    <mat-icon class="row-ic" svgIcon="heroicons_outline:envelope"></mat-icon>
                                    <span class="row-label">{{ t('smartEnrollProjects.list.documents') }}</span>
                                    <span class="row-chev" aria-hidden="true">\u203A</span>
                                </button>
                                <button type="button" class="row" (click)="openSection(project, 'liveness', $event)">
                                    <mat-icon class="row-ic" svgIcon="heroicons_outline:face-smile"></mat-icon>
                                    <span class="row-label">{{ t('smartEnrollProjects.list.biometrics') }}</span>
                                    <span class="row-chev" aria-hidden="true">\u203A</span>
                                </button>
                                <button type="button" class="row row-last" (click)="openSection(project, 'api', $event)">
                                    <mat-icon class="row-ic" svgIcon="heroicons_outline:code-bracket"></mat-icon>
                                    <span class="row-label">{{ t('smartEnrollProjects.list.apiIntegration') }}</span>
                                    <span class="row-chev" aria-hidden="true">\u203A</span>
                                </button>
                            </div>

                            <div class="members" (click)="$event.stopPropagation()">
                                <div class="members-label">{{ t('smartEnrollProjects.list.members') }}</div>
                                <div class="members-strip">
                                    @for (m of membersForCard(project).slice(0, 5); track m._id) {
                                        <div
                                            class="member-avatar"
                                            [attr.title]="m.staff?.name || ''"
                                            [attr.aria-label]="m.staff?.name || ''"
                                        >
                                            {{ formatAcronym(m.staff?.name) }}
                                        </div>
                                    }
                                    <button
                                        type="button"
                                        class="member-add"
                                        (click)="openStaff(project, $event); $event.stopPropagation()"
                                        [attr.aria-label]="t('smartEnrollProjects.list.addMember')"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div class="meta">{{ t('smartEnrollProjects.updated') }}: {{ formatUpdated(project.updatedAt) }}</div>

                            <div class="card-actions" (click)="$event.stopPropagation()">
                                <button
                                    type="button"
                                    class="btn-live"
                                    (click)="openLiveEnrollment(project, $event)"
                                >
                                    <mat-icon class="btn-live-icon" svgIcon="heroicons_outline:arrow-top-right-on-square"></mat-icon>
                                    {{ t('smartEnrollProjects.list.openLiveEnrollment') }}
                                </button>
                                <div class="card-actions-row">
                                    <button type="button" class="btn-primary" (click)="openProject(project, $event)">
                                        {{ t('smartEnrollProjects.list.edit') }}
                                    </button>
                                    <button type="button" class="btn-secondary" (click)="openRecords(project, $event)">
                                        {{ t('smartEnrollProjects.list.seeLogs') }}
                                    </button>
                                </div>
                            </div>
                        </article>
                    }
                </div>
            }
        </div>
    </div>
</ng-container>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/projects/project-list/project-list.component.scss */\n:host {\n  display: block;\n}\n.page {\n  min-height: 100%;\n  background: rgb(249, 250, 251);\n}\n.inner {\n  max-width: 72rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 3rem;\n}\n.hero {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.hero-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(37, 99, 235);\n  flex-shrink: 0;\n}\n.hero-icon mat-icon {\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n}\n.title {\n  margin: 0;\n  font-size: 1.875rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.subtitle {\n  margin: 0.4rem 0 0;\n  font-size: 1rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.crumb {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n  margin-bottom: 1.5rem;\n}\n.crumb-link {\n  color: rgb(55, 65, 81);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.crumb-sep {\n  margin: 0 0.35rem;\n  color: rgb(209, 213, 219);\n}\n.crumb-here {\n  color: rgb(75, 85, 99);\n}\n.state-loading {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.banner-error {\n  border-radius: 12px;\n  border: 1px solid rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(127, 29, 29);\n  padding: 0.85rem 1rem;\n  font-size: 0.9rem;\n}\n.plan-gate {\n  border-radius: 16px;\n  background: rgb(15, 23, 42);\n  color: #fff;\n  padding: 1.75rem 1.5rem 1.5rem;\n  max-width: 32rem;\n}\n.plan-gate-title {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 650;\n}\n.plan-gate-text {\n  margin: 0.5rem 0 0;\n  font-size: 0.9rem;\n  color: rgb(203, 213, 225);\n}\n.plan-gate-muted {\n  margin: 0.75rem 0 0;\n  font-size: 0.85rem;\n  color: rgb(148, 163, 184);\n  line-height: 1.5;\n}\n.plan-gate-cta {\n  margin-top: 1.25rem;\n  width: 100%;\n  border-radius: 12px;\n}\n.empty-card {\n  border: 1px dashed rgb(209, 213, 219);\n  border-radius: 16px;\n  padding: 3rem 1.5rem;\n  text-align: center;\n  background: #fff;\n}\n.empty-title {\n  margin: 0;\n  font-weight: 650;\n  color: rgb(55, 65, 81);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.25rem;\n}\n@media (min-width: 900px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.card {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 1.1rem 1.15rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  cursor: pointer;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n  text-align: left;\n}\n.card:hover {\n  border-color: rgb(209, 213, 219);\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);\n}\n.card-top {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: start;\n  gap: 0.65rem;\n  position: relative;\n}\n.card-brand {\n  flex-shrink: 0;\n}\n.logo {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  object-fit: contain;\n}\n.logo-fallback {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  background: rgb(243, 244, 246);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(107, 114, 128);\n}\n.card-heading {\n  flex: 1;\n  min-width: 0;\n}\n.card-title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n  line-height: 1.3;\n}\n.status-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.35rem;\n}\n.pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  border-radius: 999px;\n  padding: 0.2rem 0.55rem 0.2rem 0.4rem;\n  font-size: 0.72rem;\n  font-weight: 650;\n  letter-spacing: 0.02em;\n}\n.pill-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 999px;\n  flex-shrink: 0;\n}\n.pill-on {\n  background: rgb(219, 234, 254);\n  color: rgb(30, 64, 175);\n}\n.pill-on .pill-dot {\n  background: rgb(37, 99, 235);\n}\n.pill-off {\n  background: rgb(243, 244, 246);\n  color: rgb(75, 85, 99);\n}\n.pill-off .pill-dot {\n  background: rgb(156, 163, 175);\n}\n.menu-btn {\n  flex-shrink: 0;\n  margin: 0;\n  justify-self: end;\n  align-self: start;\n  color: rgb(55, 65, 81);\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 999px;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);\n}\n.menu-btn:hover {\n  color: rgb(17, 24, 39);\n  background: rgb(249, 250, 251);\n  border-color: rgb(209, 213, 219);\n}\n.menu-btn mat-icon {\n  width: 22px;\n  height: 22px;\n  font-size: 22px;\n}\n.menu-item-icon {\n  width: 1.15rem !important;\n  height: 1.15rem !important;\n  font-size: 1.15rem !important;\n  margin-right: 0.65rem;\n  vertical-align: middle;\n  color: rgb(107, 114, 128);\n}\n.rows {\n  border-top: 1px solid rgb(243, 244, 246);\n  margin-top: 0.15rem;\n}\n.row {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.65rem 0.15rem;\n  border: none;\n  border-bottom: 1px solid rgb(243, 244, 246);\n  background: transparent;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  color: rgb(17, 24, 39);\n}\n.row-last {\n  border-bottom: none;\n}\n.row:hover {\n  background: rgb(249, 250, 251);\n}\n.row-ic {\n  width: 1.15rem;\n  height: 1.15rem;\n  font-size: 1.15rem;\n  color: rgb(107, 114, 128);\n  flex-shrink: 0;\n}\n.row-label {\n  flex: 1;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.row-chev {\n  color: rgb(37, 99, 235);\n  font-size: 1.25rem;\n  font-weight: 300;\n  line-height: 1;\n}\n.members {\n  padding-top: 0.35rem;\n}\n.members-label {\n  font-size: 0.65rem;\n  font-weight: 650;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: rgb(156, 163, 175);\n  margin-bottom: 0.35rem;\n}\n.members-strip {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.35rem;\n}\n.member-avatar {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(59, 130, 246),\n      rgb(37, 99, 235));\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.member-add {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  border: 1px dashed rgb(209, 213, 219);\n  background: rgb(252, 252, 252);\n  color: rgb(37, 99, 235);\n  font-size: 1.1rem;\n  font-weight: 600;\n  line-height: 1;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.member-add:hover {\n  border-color: rgb(59, 130, 246);\n  background: rgb(239, 246, 255);\n}\n.meta {\n  font-size: 0.75rem;\n  color: rgb(156, 163, 175);\n}\n.card-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  margin-top: 0.35rem;\n}\n.card-actions-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.btn-live {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 999px;\n  padding: 0.62rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  cursor: pointer;\n  color: rgb(37, 99, 235);\n  background: rgb(255, 255, 255);\n  border: 1.5px solid rgb(37, 99, 235);\n  box-shadow: none;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease;\n}\n.btn-live:hover {\n  background: rgb(239, 246, 255);\n  border-color: rgb(29, 78, 216);\n  color: rgb(29, 78, 216);\n}\n.btn-live:focus-visible {\n  outline: 2px solid rgb(59, 130, 246);\n  outline-offset: 2px;\n}\n.btn-live:active {\n  background: rgb(219, 234, 254);\n}\n.btn-live-icon {\n  width: 1.05rem !important;\n  height: 1.05rem !important;\n  font-size: 1.05rem !important;\n  flex-shrink: 0;\n  color: inherit;\n}\n.btn-primary {\n  flex: 1;\n  min-width: 6rem;\n  border: none;\n  border-radius: 999px;\n  padding: 0.55rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: rgb(37, 99, 235);\n  color: #fff;\n}\n.btn-primary:hover {\n  background: rgb(29, 78, 216);\n}\n.btn-secondary {\n  flex: 1;\n  min-width: 6rem;\n  border-radius: 999px;\n  padding: 0.55rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: #fff;\n  color: rgb(17, 24, 39);\n  border: 1px solid rgb(229, 231, 235);\n}\n.btn-secondary:hover {\n  border-color: rgb(209, 213, 219);\n  background: rgb(249, 250, 251);\n}\n/*# sourceMappingURL=project-list.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectListComponent, { className: "ProjectListComponent", filePath: "src/app/modules/smart-enroll/projects/project-list/project-list.component.ts", lineNumber: 33 });
})();
export {
  ProjectListComponent
};
//# sourceMappingURL=chunk-N656N2KK.js.map
