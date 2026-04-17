import {
  SmartEnrollProjectsService
} from "./chunk-YSERIMFI.js";
import {
  Clipboard,
  ClipboardModule
} from "./chunk-FUHKLPA6.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  DateTime
} from "./chunk-BAVSUFW7.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VHMFS3U6.js";
import "./chunk-32YYYLAD.js";
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
import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-enroll/projects/project-detail/project-detail.component.ts
var _forTrack0 = ($index, $item) => $item.key;
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
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.project().branding.logo, \u0275\u0275sanitizeUrl);
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "mat-icon");
    \u0275\u0275text(2, "business");
    \u0275\u0275elementEnd()();
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" \xB7 ", t_r4("smartEnrollProjects.updated"), " ", ctx_r1.formatDate(ctx_r1.project().updatedAt), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = \u0275\u0275nextContext().$implicit;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4(s_r13.badgeKey), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = \u0275\u0275nextContext().$implicit;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4(s_r13.summaryKey, s_r13.summaryParams), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_15_Template_button_click_0_listener() {
      const s_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openSetup(s_r13.step));
    });
    \u0275\u0275elementStart(1, "div", 58)(2, "span", 59)(3, "mat-icon", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_15_Conditional_5_Template, 2, 1, "span", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_15_Conditional_8_Template, 2, 1, "p", 63);
    \u0275\u0275elementStart(9, "span", 64);
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "mat-icon", 65);
    \u0275\u0275text(12, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r13.icon);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r13.badgeKey ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4(s_r13.titleKey), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r13.summaryKey ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.summary.edit"), " ");
  }
}
function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 12)(2, "p", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "code", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Template_button_click_6_listener($event) {
      const f_r15 = \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.copyValue(f_r15._id, $event));
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
    \u0275\u0275elementStart(0, "div", 25)(1, "section", 40)(2, "div", 41);
    \u0275\u0275template(3, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_3_Template, 1, 1, "img", 42)(4, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_4_Template, 3, 0, "div", 43);
    \u0275\u0275elementStart(5, "div")(6, "p", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 45);
    \u0275\u0275text(9);
    \u0275\u0275template(10, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_10_Template, 1, 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "span", 46);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "section", 47);
    \u0275\u0275repeaterCreate(14, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_For_15_Template, 13, 5, "button", 48, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "section", 49)(17, "h2", 50);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 51);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 52)(22, "div", 53)(23, "div", 12)(24, "p", 54);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "code", 55);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 32);
    \u0275\u0275listener("click", function ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template_button_click_28_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyValue(ctx_r1.project()._id, $event));
    });
    \u0275\u0275element(29, "mat-icon", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Conditional_30_Template, 8, 3, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 56);
    \u0275\u0275text(32);
    \u0275\u0275elementStart(33, "a", 35);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_16_0;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r1.project().branding) == null ? null : tmp_4_0.logo) ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.project().name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.detail.summary.target." + ctx_r1.target()), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.project().updatedAt ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ((tmp_8_0 = ctx_r1.flow()) == null ? null : tmp_8_0.status) === "active" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200" : "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_9_0 = ctx_r1.flow()) == null ? null : tmp_9_0.status) || "draft", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.sections());
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
    \u0275\u0275conditional((tmp_16_0 = ctx_r1.flow()) ? 30 : -1, tmp_16_0);
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
    \u0275\u0275template(0, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_0_Template, 23, 11, "div", 24)(1, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_1_Template, 8, 3, "div", 24)(2, ProjectDetailComponent_ng_container_0_Conditional_27_Conditional_2_Template, 35, 15, "div", 25);
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
      const t = this.flow()?.target;
      return t === "business" ? "business" : "personal";
    });
    this.sections = computed(() => {
      const f = this.flow();
      const target = this.target();
      const branding = this.project()?.branding ?? {};
      const docs = target === "business" ? f?.business : f?.documents;
      const docCountries = docs?.documentTypes?.length ?? 0;
      const items = [
        {
          key: "basic",
          titleKey: "smartEnrollProjects.setup.steps.basic_setup",
          step: 0,
          icon: "tune",
          summaryKey: "smartEnrollProjects.detail.summary.basic",
          summaryParams: {
            countries: this.project()?.allowedCountries?.length ?? 0
          }
        },
        {
          key: "signup",
          titleKey: "smartEnrollProjects.setup.steps.signup_form",
          step: 1,
          icon: "edit_note",
          summaryKey: "smartEnrollProjects.detail.summary.signup",
          summaryParams: {
            email: f?.signUpForm?.email ? "\u2713" : "\u2014",
            phone: f?.signUpForm?.phone ? "\u2713" : "\u2014"
          }
        },
        {
          key: "documents",
          titleKey: target === "business" ? "smartEnrollProjects.setup.steps.business" : "smartEnrollProjects.setup.steps.documents",
          step: 2,
          icon: "document_scanner",
          summaryKey: "smartEnrollProjects.detail.summary.documents",
          summaryParams: { count: docCountries },
          badgeKey: target === "business" ? "smartEnrollProjects.detail.summary.business" : void 0
        },
        {
          key: target === "business" ? "representatives" : "liveness",
          titleKey: target === "business" ? "smartEnrollProjects.setup.steps.representatives" : "smartEnrollProjects.setup.steps.liveness",
          step: 3,
          icon: target === "business" ? "group" : "face",
          summaryKey: target === "business" ? "smartEnrollProjects.detail.summary.representatives" : "smartEnrollProjects.detail.summary.liveness",
          summaryParams: target === "business" ? {
            min: f?.representatives?.minRepresentatives ?? 1,
            max: f?.representatives?.maxRepresentatives ?? 1
          } : { score: Math.round((f?.liveness?.minScore ?? 0) * 100) }
        },
        {
          key: "integrations",
          titleKey: "smartEnrollProjects.setup.steps.integrations",
          step: 4,
          icon: "cable",
          summaryKey: "smartEnrollProjects.detail.summary.integrations",
          summaryParams: {
            redirect: f?.integrations?.redirectUrl ? "\u2713" : "\u2014",
            webhook: f?.integrations?.webhook ? "\u2713" : "\u2014"
          }
        },
        {
          key: "ui",
          titleKey: "smartEnrollProjects.setup.steps.user_interface",
          step: 5,
          icon: "palette",
          summaryKey: "smartEnrollProjects.detail.summary.ui",
          summaryParams: {
            logo: branding.logo ? "\u2713" : "\u2014",
            color: branding.buttonColor || branding.titleColor || "\u2014"
          }
        }
      ];
      return items;
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
  static {
    this.\u0275fac = function ProjectDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetailComponent, selectors: [["project-detail"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "max-w-5xl"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-enroll/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "mt-5", "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "font-mono", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "gap-2"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-5xl"], [1, "flex", "justify-center", "py-20"], [1, "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], [1, "!h-4", "!w-4", "mr-1"], ["diameter", "40"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "dark:border-gray-700", "dark:bg-gray-900/40", "md:p-8"], [1, "flex", "flex-col", "gap-6"], [1, "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "mt-6", "space-y-4"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], [1, "flex", "min-w-0", "items-center", "gap-2", "rounded-xl", "bg-stone-100", "px-3", "py-2", "dark:bg-gray-800"], [1, "min-w-0", "flex-1", "break-all", "text-xs", "text-stone-800", "dark:text-stone-200"], ["mat-icon-button", "", "type", "button", 3, "click"], ["svgIcon", "mat_outline:content_copy", 1, "icon-size-5"], [1, "mt-6", "text-sm", "text-stone-600", "dark:text-stone-400"], ["target", "_blank", "rel", "noopener noreferrer", 1, "font-semibold", "text-primary-600", "hover:underline", 3, "href"], [1, "mt-8", "flex", "flex-wrap", "gap-2"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-xl", 3, "click"], ["mat-stroked-button", "", "type", "button", 1, "rounded-xl", 3, "click"], [1, "mt-6", "flex", "flex-wrap", "gap-2"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-4", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "flex", "items-center", "gap-4"], ["alt", "", 1, "h-14", "w-14", "rounded-xl", "border", "border-stone-200/80", "object-contain", "dark:border-gray-700", 3, "src"], [1, "grid", "h-14", "w-14", "place-items-center", "rounded-xl", "border", "border-stone-200/80", "bg-stone-100", "text-stone-500", "dark:border-gray-700", "dark:bg-gray-800"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-200"], [1, "mt-0.5", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], ["type", "button", 1, "group", "flex", "flex-col", "items-start", "gap-2", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "text-left", "transition-colors", "hover:border-stone-300", "hover:bg-stone-50", "dark:border-gray-700", "dark:bg-gray-900/40", "dark:hover:border-gray-600", "dark:hover:bg-gray-900"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mt-4", "grid", "grid-cols-1", "gap-3", "md:grid-cols-2"], [1, "flex", "items-center", "justify-between", "gap-2", "rounded-xl", "bg-stone-100", "px-3", "py-2", "dark:bg-gray-800"], [1, "text-[11px]", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "block", "truncate", "text-xs", "text-stone-800", "dark:text-stone-200"], [1, "mt-4", "text-xs", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "group", "flex", "flex-col", "items-start", "gap-2", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "text-left", "transition-colors", "hover:border-stone-300", "hover:bg-stone-50", "dark:border-gray-700", "dark:bg-gray-900/40", "dark:hover:border-gray-600", "dark:hover:bg-gray-900", 3, "click"], [1, "flex", "w-full", "items-center", "justify-between"], [1, "grid", "h-9", "w-9", "place-items-center", "rounded-xl", "bg-stone-100", "text-stone-700", "dark:bg-gray-800", "dark:text-stone-200"], [1, "!h-5", "!w-5", "!text-base"], [1, "rounded-full", "bg-stone-100", "px-2", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"], [1, "mt-1", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mt-2", "inline-flex", "items-center", "gap-1", "text-xs", "font-semibold", "text-stone-700", "group-hover:text-stone-900", "dark:text-stone-300", "dark:group-hover:text-white"], [1, "!h-4", "!w-4", "!text-base"]], template: function ProjectDetailComponent_Template(rf, ctx) {
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
                        <div class="flex flex-col gap-6">
                            <section
                                class="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-stone-200/90 bg-white p-6 dark:border-gray-700 dark:bg-gray-900/40"
                            >
                                <div class="flex items-center gap-4">
                                    @if (project()!.branding?.logo) {
                                        <img
                                            [src]="project()!.branding!.logo"
                                            alt=""
                                            class="h-14 w-14 rounded-xl border border-stone-200/80 object-contain dark:border-gray-700"
                                        />
                                    } @else {
                                        <div
                                            class="grid h-14 w-14 place-items-center rounded-xl border border-stone-200/80 bg-stone-100 text-stone-500 dark:border-gray-700 dark:bg-gray-800"
                                        >
                                            <mat-icon>business</mat-icon>
                                        </div>
                                    }
                                    <div>
                                        <p class="text-sm font-medium text-stone-700 dark:text-stone-200">
                                            {{ project()!.name }}
                                        </p>
                                        <p class="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
                                            {{ t('smartEnrollProjects.detail.summary.target.' + target()) }}
                                            @if (project()!.updatedAt) {
                                                \xB7 {{ t('smartEnrollProjects.updated') }} {{ formatDate(project()!.updatedAt) }}
                                            }
                                        </p>
                                    </div>
                                </div>

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
                            </section>

                            <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                @for (s of sections(); track s.key) {
                                    <button
                                        type="button"
                                        (click)="openSetup(s.step)"
                                        class="group flex flex-col items-start gap-2 rounded-2xl border border-stone-200/90 bg-white p-5 text-left transition-colors hover:border-stone-300 hover:bg-stone-50 dark:border-gray-700 dark:bg-gray-900/40 dark:hover:border-gray-600 dark:hover:bg-gray-900"
                                    >
                                        <div class="flex w-full items-center justify-between">
                                            <span class="grid h-9 w-9 place-items-center rounded-xl bg-stone-100 text-stone-700 dark:bg-gray-800 dark:text-stone-200">
                                                <mat-icon class="!h-5 !w-5 !text-base">{{ s.icon }}</mat-icon>
                                            </span>
                                            @if (s.badgeKey) {
                                                <span class="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-600 dark:bg-gray-800 dark:text-stone-300">
                                                    {{ t(s.badgeKey) }}
                                                </span>
                                            }
                                        </div>
                                        <p class="mt-1 text-sm font-semibold text-stone-900 dark:text-white">
                                            {{ t(s.titleKey) }}
                                        </p>
                                        @if (s.summaryKey) {
                                            <p class="text-xs text-stone-500 dark:text-stone-400">
                                                {{ t(s.summaryKey, s.summaryParams) }}
                                            </p>
                                        }
                                        <span class="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-stone-700 group-hover:text-stone-900 dark:text-stone-300 dark:group-hover:text-white">
                                            {{ t('smartEnrollProjects.detail.summary.edit') }}
                                            <mat-icon class="!h-4 !w-4 !text-base">arrow_forward</mat-icon>
                                        </span>
                                    </button>
                                }
                            </section>

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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetailComponent, { className: "ProjectDetailComponent", filePath: "src/app/modules/smart-enroll/projects/project-detail/project-detail.component.ts", lineNumber: 47 });
})();
export {
  ProjectDetailComponent
};
//# sourceMappingURL=chunk-W2Q2XP5N.js.map
