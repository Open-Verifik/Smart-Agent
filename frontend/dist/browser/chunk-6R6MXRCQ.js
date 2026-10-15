import {
  requiresHumanAuthnSubscription
} from "./chunk-4SHMR3LD.js";
import {
  AuthRequiredGateService
} from "./chunk-A6DA237F.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-VRPAX6NT.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-C3RXWDTM.js";
import "./chunk-KRS47QLN.js";
import "./chunk-RKG2MQOF.js";
import "./chunk-QDHC3TI3.js";
import "./chunk-W2APQW4E.js";
import "./chunk-JURKDGMK.js";
import "./chunk-DW2XB3R4.js";
import "./chunk-WXNXCCYE.js";
import "./chunk-BYQUUNDI.js";
import "./chunk-PDLCCGUT.js";
import "./chunk-GG23NHUM.js";
import "./chunk-A4N7R4VF.js";
import "./chunk-64R62RHA.js";
import "./chunk-6VQY5BEJ.js";
import "./chunk-F5BVEUVX.js";
import "./chunk-V36MHRLI.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CTAWHRE6.js";
import "./chunk-WKFG3L4B.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-7FACNXV2.js";
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
import "./chunk-5EV2TUYF.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VENEX45A.js";
import {
  Router,
  RouterLink
} from "./chunk-DM2XPT7T.js";
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  catchError,
  forkJoin,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
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
} from "./chunk-I5BUD46C.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/human-authn/projects/human-authn-projects.service.ts
var HumanAuthnProjectsService = class _HumanAuthnProjectsService {
  constructor() {
    this._http = inject(HttpClient);
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  get authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  parseStoredUser() {
    const raw = localStorage.getItem("verifik_account") || localStorage.getItem("user");
    if (!raw || raw === "undefined" || raw === "null")
      return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  getActiveHumanAuthnPlans() {
    return this._http.get(`${this.apiUrl}/v2/client-human-authn-plans`, {
      params: {
        sort: "startDate",
        where_status: "active",
        populates: "plan"
      },
      headers: this.authHeaders
    }).pipe(catchError((err) => {
      console.error("Error loading client HumanAuthn plans:", err);
      return throwError(() => err);
    }));
  }
  getClientSettings() {
    return this._http.get(`${this.apiUrl}/v2/client-settings`, {
      params: { findOne: "true" },
      headers: this.authHeaders
    }).pipe(catchError((err) => {
      console.error("Error loading client settings:", err);
      return throwError(() => err);
    }));
  }
  listProjects() {
    return this._http.get(`${this.apiUrl}/v3/projects`, {
      params: {
        populates: "projectFlows",
        projectFlowType: "humanAuthn",
        sort: "-updatedAt"
      },
      headers: this.authHeaders
    }).pipe(map((res) => {
      const payload = res?.data;
      const rows = Array.isArray(payload) ? payload : payload?.docs ?? [];
      return rows.filter((project) => (project.projectFlows || []).some((flow) => flow.type === "humanAuthn"));
    }), catchError((err) => {
      console.error("Error loading HumanAuthn projects:", err);
      return throwError(() => err);
    }));
  }
  updateProjectFlow(flowId, payload) {
    return this._http.put(`${this.apiUrl}/v2/project-flows/${flowId}`, payload, { headers: this.authHeaders });
  }
  getProjectMembers(projectId) {
    return this._http.get(`${this.apiUrl}/v2/project-members`, {
      params: { where_project: projectId, populates: "staff" },
      headers: this.authHeaders
    }).pipe(map((res) => res?.data ?? []));
  }
  static {
    this.\u0275fac = function HumanAuthnProjectsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnProjectsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HumanAuthnProjectsService, factory: _HumanAuthnProjectsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnProjectsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/human-authn/projects/human-authn-projects.component.ts
var _forTrack0 = ($index, $item) => $item._id;
function HumanAuthnProjectsComponent_ng_container_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-progress-spinner", 18);
    \u0275\u0275elementEnd();
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_23_Template(rf, ctx) {
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
function HumanAuthnProjectsComponent_ng_container_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 19)(2, "h2", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 22);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_24_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPlans());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.noPlanCardTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.noPlanCardBody"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.goToPlans"), " ");
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_25_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.emptyStaffTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.emptyStaffBody"));
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_25_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 27);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_25_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.createProject());
    });
    \u0275\u0275element(5, "mat-icon", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.emptyHeroTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.emptyHeroSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.createProject"), " ");
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 23);
    \u0275\u0275element(2, "mat-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, HumanAuthnProjectsComponent_ng_container_0_Conditional_25_Conditional_3_Template, 4, 2)(4, HumanAuthnProjectsComponent_ng_container_0_Conditional_25_Conditional_4_Template, 7, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("empty-hero-icon--muted", ctx_r0.isWorkspaceStaff());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isWorkspaceStaff() ? 3 : 4);
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.createProject());
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275element(2, "mat-icon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "h2", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 36);
    \u0275\u0275text(11, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("aria-label", t_r3("humanAuthnProjects.createProject"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.list.newProjectTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.list.newProjectSubtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.createProject"), " ");
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const project_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", project_r7.branding.logo, \u0275\u0275sanitizeUrl);
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "mat-icon", 65);
    \u0275\u0275elementEnd();
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", t_r3("humanAuthnProjects.list.demoMode"), ")");
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 66);
    \u0275\u0275element(2, "span", 67);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_8_Conditional_4_Template, 2, 1, "span", 68);
    \u0275\u0275elementStart(5, "mat-slide-toggle", 69);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_8_Template_mat_slide_toggle_click_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_8_Template_mat_slide_toggle_change_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const project_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onFlowStatusToggle($event, project_r7));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const flow_r9 = ctx;
    const project_r7 = \u0275\u0275nextContext().$implicit;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("pill-on", !ctx_r0.isDraftFlow(flow_r9))("pill-off", ctx_r0.isDraftFlow(flow_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isDraftFlow(flow_r9) ? t_r3("humanAuthnProjects.list.draft") : t_r3("humanAuthnProjects.list.active"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r7.demoMode ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.flowToggleChecked(flow_r9));
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_42_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275attribute("title", (member_r11.staff == null ? null : member_r11.staff.name) || "")("aria-label", (member_r11.staff == null ? null : member_r11.staff.name) || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatAcronym(member_r11.staff == null ? null : member_r11.staff.name), " ");
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_42_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 72);
    \u0275\u0275repeaterCreate(4, HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_42_For_5_Template, 2, 3, "div", 73, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r7 = \u0275\u0275nextContext().$implicit;
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.list.members"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.membersForCard(project_r7).slice(0, 5));
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 37);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_article_click_0_listener($event) {
      const project_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openProject(project_r7, $event));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "div", 39);
    \u0275\u0275template(3, HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_3_Template, 1, 1, "img", 40)(4, HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_4_Template, 2, 0, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42)(6, "h2", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_8_Template, 6, 7, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 45);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_button_click_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(10, "mat-icon", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-menu", null, 0)(13, "button", 47);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_button_click_13_listener($event) {
      const project_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openProject(project_r7, $event));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 47);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_button_click_15_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openHistory($event));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 48);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_div_click_17_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(18, "button", 49);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_button_click_18_listener($event) {
      const project_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSection(project_r7, 1, $event));
    });
    \u0275\u0275element(19, "mat-icon", 50);
    \u0275\u0275elementStart(20, "span", 51);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 52);
    \u0275\u0275text(23, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 49);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_button_click_24_listener($event) {
      const project_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSection(project_r7, 2, $event));
    });
    \u0275\u0275element(25, "mat-icon", 53);
    \u0275\u0275elementStart(26, "span", 51);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 52);
    \u0275\u0275text(29, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "button", 49);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_button_click_30_listener($event) {
      const project_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSection(project_r7, 3, $event));
    });
    \u0275\u0275element(31, "mat-icon", 54);
    \u0275\u0275elementStart(32, "span", 51);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 52);
    \u0275\u0275text(35, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "button", 55);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_button_click_36_listener($event) {
      const project_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openSection(project_r7, 5, $event));
    });
    \u0275\u0275element(37, "mat-icon", 56);
    \u0275\u0275elementStart(38, "span", 51);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 52);
    \u0275\u0275text(41, "\u203A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(42, HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Conditional_42_Template, 6, 1, "div", 57);
    \u0275\u0275elementStart(43, "div", 58);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 59);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_div_click_45_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(46, "button", 60);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_button_click_46_listener($event) {
      const project_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openProject(project_r7, $event));
    });
    \u0275\u0275element(47, "mat-icon", 61);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 62)(50, "button", 63);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_button_click_50_listener($event) {
      const project_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openProject(project_r7, $event));
    });
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 64);
    \u0275\u0275listener("click", function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template_button_click_52_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openHistory($event));
    });
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const project_r7 = ctx.$implicit;
    const projectMenu_r12 = \u0275\u0275reference(12);
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((project_r7.branding == null ? null : project_r7.branding.logo) ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r7.name || project_r7._id);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r0.currentFlow(project_r7)) ? 8 : -1, tmp_16_0);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", projectMenu_r12);
    \u0275\u0275attribute("aria-label", t_r3("humanAuthnProjects.list.moreActions"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.list.menuEdit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.list.menuHistory"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.list.signupForm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.list.documents"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.list.humanAuthn"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.list.integrations"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.membersForCard(project_r7).length ? 42 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", t_r3("humanAuthnProjects.updated"), ": ", ctx_r0.formatUpdated(project_r7.updatedAt), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.list.openSetup"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.list.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("humanAuthnProjects.list.seeLogs"), " ");
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, HumanAuthnProjectsComponent_ng_container_0_Conditional_26_Conditional_1_Template, 12, 4, "button", 28);
    \u0275\u0275repeaterCreate(2, HumanAuthnProjectsComponent_ng_container_0_Conditional_26_For_3_Template, 54, 17, "article", 29, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isWorkspaceStaff() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.projects());
  }
}
function HumanAuthnProjectsComponent_ng_container_0_Template(rf, ctx) {
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
    \u0275\u0275template(22, HumanAuthnProjectsComponent_ng_container_0_Conditional_22_Template, 2, 0, "div", 13)(23, HumanAuthnProjectsComponent_ng_container_0_Conditional_23_Template, 3, 3, "div", 14)(24, HumanAuthnProjectsComponent_ng_container_0_Conditional_24_Template, 8, 3, "div", 15)(25, HumanAuthnProjectsComponent_ng_container_0_Conditional_25_Template, 5, 3, "div", 16)(26, HumanAuthnProjectsComponent_ng_container_0_Conditional_26_Template, 4, 1, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.subtitle"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r3("nav.human_authn"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("humanAuthnProjects.title"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading() ? 22 : ctx_r0.error() ? 23 : ctx_r0.noActivePlan() ? 24 : ctx_r0.projects().length === 0 ? 25 : 26);
  }
}
var HumanAuthnProjectsComponent = class _HumanAuthnProjectsComponent {
  constructor() {
    this._projectsService = inject(HumanAuthnProjectsService);
    this._router = inject(Router);
    this._authGate = inject(AuthRequiredGateService);
    this.projects = signal([]);
    this.loading = signal(true);
    this.error = signal(null);
    this.noActivePlan = signal(false);
  }
  ngOnInit() {
    this._authGate.runWithAuthOrDialog({
      onAuthenticated: () => this._loadAfterAuth(),
      panelClass: "auth-required-dialog"
    });
  }
  _loadAfterAuth() {
    const user = this._projectsService.parseStoredUser();
    if (user?.staff) {
      this._loadProjects();
      return;
    }
    forkJoin({
      plans: this._projectsService.getActiveHumanAuthnPlans(),
      settings: this._projectsService.getClientSettings()
    }).subscribe({
      next: ({ plans, settings }) => {
        const rows = plans?.data ?? [];
        if (!rows.length && requiresHumanAuthnSubscription(settings?.data)) {
          this.noActivePlan.set(true);
          this.loading.set(false);
          return;
        }
        this._loadProjects();
      },
      error: () => {
        this.error.set("humanAuthnProjects.plansLoadError");
        this.loading.set(false);
      }
    });
  }
  _loadProjects() {
    this._projectsService.listProjects().subscribe({
      next: (rows) => {
        this.projects.set(rows);
        this.loading.set(false);
        this._hydrateMembers(rows);
      },
      error: () => {
        this.error.set("humanAuthnProjects.loadError");
        this.loading.set(false);
      }
    });
  }
  _hydrateMembers(projects) {
    if (!projects.length)
      return;
    forkJoin(projects.map((project) => this._projectsService.getProjectMembers(project._id).pipe(map((members) => ({ id: project._id, members })), catchError(() => of({ id: project._id, members: [] }))))).subscribe((rows) => {
      const byId = Object.fromEntries(rows.map((row) => [row.id, row.members]));
      this.projects.update((list) => list.map((project) => __spreadProps(__spreadValues({}, project), {
        projectMembers: byId[project._id] ?? project.projectMembers
      })));
    });
  }
  isWorkspaceStaff() {
    return !!this._projectsService.parseStoredUser()?.staff;
  }
  goToPlans() {
    this._router.navigate(["/human-authn/plans"]);
  }
  createProject() {
    this._router.navigate(["/human-authn/projects", "new", "setup", "0"]);
  }
  openProject(project, event) {
    event?.stopPropagation();
    this._router.navigate(["/human-authn/projects", project._id, "setup", "0"]);
  }
  openHistory(event) {
    event?.stopPropagation();
    this._router.navigate(["/human-authn/history"]);
  }
  openSection(project, step, event) {
    event.stopPropagation();
    this._router.navigate(["/human-authn/projects", project._id, "setup", String(step)]);
  }
  membersForCard(project) {
    return (project.projectMembers ?? []).filter((member) => member.staff);
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
        this.projects.update((list) => list.map((row) => {
          if (row._id !== project._id)
            return row;
          return __spreadProps(__spreadValues({}, row), {
            projectFlows: row.projectFlows?.map((item) => item._id === flow._id ? __spreadProps(__spreadValues({}, item), { status }) : item) ?? []
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
    const active = flows.find((flow) => flow.status && flow.status !== "draft");
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
  static {
    this.\u0275fac = function HumanAuthnProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanAuthnProjectsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanAuthnProjectsComponent, selectors: [["app-human-authn-projects"]], decls: 1, vars: 0, consts: [["projectMenu", "matMenu"], [4, "transloco"], [1, "page"], [1, "inner"], [1, "hero"], [1, "hero-icon"], ["svgIcon", "heroicons_outline:rectangle-stack"], [1, "title"], [1, "subtitle"], [1, "crumb"], ["routerLink", "/home", 1, "crumb-link"], [1, "crumb-sep"], [1, "crumb-here"], [1, "state-loading"], [1, "banner-error"], [1, "plan-gate"], [1, "empty-hero-card"], [1, "grid"], ["diameter", "40", "mode", "indeterminate"], [1, "plan-gate-body"], [1, "plan-gate-title"], [1, "plan-gate-muted"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "plan-gate-cta", 3, "click"], [1, "empty-hero-icon"], ["svgIcon", "heroicons_outline:plus-circle"], [1, "empty-hero-title"], [1, "empty-hero-text"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "empty-hero-cta", 3, "click"], ["type", "button", 1, "card", "card-create"], [1, "card"], ["type", "button", 1, "card", "card-create", 3, "click"], [1, "card-create-icon"], [1, "card-create-copy"], [1, "card-create-title"], [1, "card-create-text"], [1, "card-create-cta"], ["aria-hidden", "true"], [1, "card", 3, "click"], [1, "card-top"], [1, "card-brand"], ["alt", "", 1, "logo", 3, "src"], [1, "logo-fallback"], [1, "card-heading"], [1, "card-title"], [1, "status-row"], ["type", "button", "mat-icon-button", "", 1, "menu-btn", 3, "click", "matMenuTriggerFor"], ["svgIcon", "heroicons_outline:ellipsis-vertical"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "rows", 3, "click"], ["type", "button", 1, "row", 3, "click"], ["svgIcon", "heroicons_outline:phone", 1, "row-ic"], [1, "row-label"], ["aria-hidden", "true", 1, "row-chev"], ["svgIcon", "heroicons_outline:envelope", 1, "row-ic"], ["svgIcon", "heroicons_outline:face-smile", 1, "row-ic"], ["type", "button", 1, "row", "row-last", 3, "click"], ["svgIcon", "heroicons_outline:code-bracket", 1, "row-ic"], [1, "members"], [1, "meta"], [1, "card-actions", 3, "click"], ["type", "button", 1, "btn-live", 3, "click"], ["svgIcon", "heroicons_outline:arrow-top-right-on-square", 1, "btn-live-icon"], [1, "card-actions-row"], ["type", "button", 1, "btn-primary", 3, "click"], ["type", "button", 1, "btn-secondary", 3, "click"], ["svgIcon", "heroicons_outline:folder"], [1, "pill"], [1, "pill-dot"], [1, "demo-badge"], ["color", "primary", 3, "click", "change", "checked"], [1, "members", 3, "click"], [1, "members-label"], [1, "members-strip"], [1, "member-avatar"]], template: function HumanAuthnProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HumanAuthnProjectsComponent_ng_container_0_Template, 27, 5, "ng-container", 1);
      }
    }, dependencies: [
      CommonModule,
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
      RouterLink,
      TranslocoModule,
      TranslocoDirective,
      TranslocoPipe
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: rgb(249, 250, 251);\n}\n.inner[_ngcontent-%COMP%] {\n  max-width: 72rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 3rem;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.hero-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(37, 99, 235);\n  flex-shrink: 0;\n}\n.hero-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.875rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  font-size: 1rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.crumb[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n  margin-bottom: 1.5rem;\n}\n.crumb-link[_ngcontent-%COMP%] {\n  color: rgb(55, 65, 81);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.crumb-sep[_ngcontent-%COMP%] {\n  margin: 0 0.35rem;\n  color: rgb(209, 213, 219);\n}\n.crumb-here[_ngcontent-%COMP%] {\n  color: rgb(75, 85, 99);\n}\n.state-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.banner-error[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(127, 29, 29);\n  padding: 0.85rem 1rem;\n  font-size: 0.9rem;\n}\n.plan-gate[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  background: rgb(15, 23, 42);\n  color: #fff;\n  padding: 1.75rem 1.5rem 1.5rem;\n  max-width: 32rem;\n}\n.plan-gate-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 650;\n}\n.plan-gate-muted[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0;\n  font-size: 0.85rem;\n  color: rgb(148, 163, 184);\n  line-height: 1.5;\n}\n.plan-gate-cta[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  width: 100%;\n  border-radius: 12px;\n}\n.empty-hero-card[_ngcontent-%COMP%] {\n  max-width: 36rem;\n  margin: 0 auto;\n  text-align: center;\n  padding: 2.75rem 1.75rem 2.25rem;\n  border-radius: 18px;\n  border: 1px solid rgb(229, 231, 235);\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      rgb(248, 250, 252) 100%);\n  box-shadow: 0 8px 32px rgba(15, 23, 42, 0.08);\n}\n.empty-hero-icon[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  margin: 0 auto 1.25rem;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  color: rgb(37, 99, 235);\n}\n.empty-hero-icon--muted[_ngcontent-%COMP%] {\n  background: rgb(243, 244, 246);\n  border-color: rgb(229, 231, 235);\n  color: rgb(107, 114, 128);\n}\n.empty-hero-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  font-size: 2.25rem;\n}\n.empty-hero-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n  line-height: 1.3;\n}\n.empty-hero-text[_ngcontent-%COMP%] {\n  margin: 0.65rem auto 0;\n  max-width: 26rem;\n  font-size: 0.9375rem;\n  line-height: 1.55;\n  color: rgb(107, 114, 128);\n}\n.empty-hero-cta[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  min-width: 12rem;\n  border-radius: 12px !important;\n  padding: 0.5rem 1.25rem !important;\n  font-weight: 600 !important;\n}\n.empty-hero-cta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.35rem;\n  vertical-align: middle;\n  width: 1.15rem;\n  height: 1.15rem;\n  font-size: 1.15rem;\n}\n.dark[_nghost-%COMP%]   .page[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .page[_ngcontent-%COMP%] {\n  background: #0f0f1f;\n}\n.dark[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .crumb[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crumb[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .crumb-sep[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crumb-sep[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .crumb-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crumb-link[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .crumb-here[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .crumb-here[_ngcontent-%COMP%] {\n  color: rgb(226, 232, 240);\n}\n.dark[_nghost-%COMP%]   .empty-hero-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-hero-card[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      #11122a 0%,\n      #161828 100%);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .empty-hero-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-hero-icon[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.15);\n  border-color: rgba(79, 90, 246, 0.28);\n  color: rgb(129, 140, 248);\n}\n.dark[_nghost-%COMP%]   .empty-hero-icon--muted[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-hero-icon--muted[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .empty-hero-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-hero-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .empty-hero-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .empty-hero-text[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .hero-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .hero-icon[_ngcontent-%COMP%] {\n  background: rgba(43, 58, 240, 0.15);\n  border-color: rgba(79, 90, 246, 0.28);\n  color: rgb(129, 140, 248);\n}\n.dark[_nghost-%COMP%]   .card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      #11122a 0%,\n      #161828 100%);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);\n}\n.dark[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.16);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .logo-fallback[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .logo-fallback[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .card-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .pill-on[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pill-on[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.2);\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .pill-on[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pill-on[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: rgb(96, 165, 250);\n}\n.dark[_nghost-%COMP%]   .pill-off[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pill-off[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .pill-off[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pill-off[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: rgb(100, 116, 139);\n}\n.dark[_nghost-%COMP%]   .demo-badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .demo-badge[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .menu-btn[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n  border-color: rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  box-shadow: none;\n}\n.dark[_nghost-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover {\n  color: #f8fafc;\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.16);\n}\n.dark[_nghost-%COMP%]   .rows[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .rows[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n.dark[_nghost-%COMP%]   .row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .row[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .row[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n.dark[_nghost-%COMP%]   .row-ic[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .row-ic[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .row-chev[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .row-chev[_ngcontent-%COMP%] {\n  color: rgb(129, 140, 248);\n}\n.dark[_nghost-%COMP%]   .btn-live[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .btn-live[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgb(96, 165, 250);\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .btn-live[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .btn-live[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.15);\n  border-color: rgb(129, 140, 248);\n  color: rgb(191, 219, 254);\n}\n.dark[_nghost-%COMP%]   .btn-live[_ngcontent-%COMP%]:active, .dark   [_nghost-%COMP%]   .btn-live[_ngcontent-%COMP%]:active {\n  background: rgba(37, 99, 235, 0.25);\n}\n.dark[_nghost-%COMP%]   .btn-secondary[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.04);\n  color: #f8fafc;\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.dark[_nghost-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.16);\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.25rem;\n}\n@media (min-width: 900px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 1.1rem 1.15rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  cursor: pointer;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n  text-align: left;\n}\n.card[_ngcontent-%COMP%]:hover {\n  border-color: rgb(209, 213, 219);\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);\n}\n.card-create[_ngcontent-%COMP%] {\n  appearance: none;\n  background:\n    linear-gradient(\n      180deg,\n      rgb(239, 246, 255) 0%,\n      #ffffff 100%);\n  border-style: dashed;\n  border-color: rgb(191, 219, 254);\n  align-items: stretch;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    border-color 0.15s ease,\n    background 0.15s ease,\n    box-shadow 0.15s ease,\n    transform 0.15s ease;\n}\n.card-create[_ngcontent-%COMP%]:hover {\n  border-color: rgb(96, 165, 250);\n  background:\n    linear-gradient(\n      180deg,\n      rgb(219, 234, 254) 0%,\n      #ffffff 100%);\n  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.12);\n  transform: translateY(-1px);\n}\n.card-create[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-color: rgb(37, 99, 235);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);\n}\n.card-create-icon[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  background: rgb(219, 234, 254);\n  color: rgb(37, 99, 235);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-create-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.85rem;\n  height: 1.85rem;\n  font-size: 1.85rem;\n}\n.card-create-copy[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.card-create-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.01em;\n  color: rgb(17, 24, 39);\n}\n.card-create-text[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: rgb(75, 85, 99);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.card-create-cta[_ngcontent-%COMP%] {\n  margin-top: auto;\n  align-self: flex-end;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1rem;\n  border-radius: 999px;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.dark[_nghost-%COMP%]   .card-create[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-create[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(15, 15, 31, 0.6) 100%);\n  border-color: rgba(96, 165, 250, 0.35);\n}\n.dark[_nghost-%COMP%]   .card-create[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .card-create[_ngcontent-%COMP%]:hover {\n  border-color: rgb(96, 165, 250);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.2) 0%,\n      rgba(15, 15, 31, 0.6) 100%);\n}\n.dark[_nghost-%COMP%]   .card-create-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-create-icon[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.18);\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .card-create-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-create-title[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .card-create-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .card-create-text[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.card-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: start;\n  gap: 0.65rem;\n  position: relative;\n}\n.card-brand[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  object-fit: contain;\n}\n.logo-fallback[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  background: rgb(243, 244, 246);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(107, 114, 128);\n}\n.card-heading[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n  line-height: 1.3;\n}\n.status-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.35rem;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  border-radius: 999px;\n  padding: 0.2rem 0.55rem 0.2rem 0.4rem;\n  font-size: 0.72rem;\n  font-weight: 650;\n  letter-spacing: 0.02em;\n}\n.pill-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 999px;\n  flex-shrink: 0;\n}\n.pill-on[_ngcontent-%COMP%] {\n  background: rgb(219, 234, 254);\n  color: rgb(30, 64, 175);\n}\n.pill-on[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: rgb(37, 99, 235);\n}\n.pill-off[_ngcontent-%COMP%] {\n  background: rgb(243, 244, 246);\n  color: rgb(75, 85, 99);\n}\n.pill-off[_ngcontent-%COMP%]   .pill-dot[_ngcontent-%COMP%] {\n  background: rgb(156, 163, 175);\n}\n.demo-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: rgb(107, 114, 128);\n  letter-spacing: 0.01em;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin: 0;\n  justify-self: end;\n  align-self: start;\n  color: rgb(55, 65, 81);\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 999px;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);\n}\n.menu-btn[_ngcontent-%COMP%]:hover {\n  color: rgb(17, 24, 39);\n  background: rgb(249, 250, 251);\n  border-color: rgb(209, 213, 219);\n}\n.menu-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  font-size: 22px;\n}\n.rows[_ngcontent-%COMP%] {\n  border-top: 1px solid rgb(243, 244, 246);\n  margin-top: 0.15rem;\n}\n.row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.65rem 0.15rem;\n  border: none;\n  border-bottom: 1px solid rgb(243, 244, 246);\n  background: transparent;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  color: rgb(17, 24, 39);\n}\n.row-last[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.row[_ngcontent-%COMP%]:hover {\n  background: rgb(249, 250, 251);\n}\n.row-ic[_ngcontent-%COMP%] {\n  width: 1.15rem;\n  height: 1.15rem;\n  font-size: 1.15rem;\n  color: rgb(107, 114, 128);\n  flex-shrink: 0;\n}\n.row-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.row-chev[_ngcontent-%COMP%] {\n  color: rgb(37, 99, 235);\n  font-size: 1.25rem;\n  font-weight: 300;\n  line-height: 1;\n}\n.members[_ngcontent-%COMP%] {\n  padding-top: 0.35rem;\n}\n.members-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 650;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: rgb(156, 163, 175);\n  margin-bottom: 0.35rem;\n}\n.members-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.35rem;\n}\n.member-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(59, 130, 246),\n      rgb(37, 99, 235));\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(156, 163, 175);\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  margin-top: 0.35rem;\n}\n.card-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.btn-live[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 999px;\n  padding: 0.62rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  cursor: pointer;\n  color: rgb(37, 99, 235);\n  background: rgb(255, 255, 255);\n  border: 1.5px solid rgb(37, 99, 235);\n  box-shadow: none;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease;\n}\n.btn-live[_ngcontent-%COMP%]:hover {\n  background: rgb(239, 246, 255);\n  border-color: rgb(29, 78, 216);\n  color: rgb(29, 78, 216);\n}\n.btn-live[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(59, 130, 246);\n  outline-offset: 2px;\n}\n.btn-live[_ngcontent-%COMP%]:active {\n  background: rgb(219, 234, 254);\n}\n.btn-live-icon[_ngcontent-%COMP%] {\n  width: 1.05rem !important;\n  height: 1.05rem !important;\n  font-size: 1.05rem !important;\n  flex-shrink: 0;\n  color: inherit;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 6rem;\n  border: none;\n  border-radius: 999px;\n  padding: 0.55rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: rgb(37, 99, 235);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: rgb(29, 78, 216);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 6rem;\n  border-radius: 999px;\n  padding: 0.55rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: #fff;\n  color: rgb(17, 24, 39);\n  border: 1px solid rgb(229, 231, 235);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: rgb(209, 213, 219);\n  background: rgb(249, 250, 251);\n}\n/*# sourceMappingURL=human-authn-projects.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanAuthnProjectsComponent, [{
    type: Component,
    args: [{ selector: "app-human-authn-projects", standalone: true, imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatSlideToggleModule,
      RouterLink,
      TranslocoModule
    ], template: `<ng-container *transloco="let t">\r
    <div class="page">\r
        <div class="inner">\r
            <header class="hero">\r
                <div class="hero-icon">\r
                    <mat-icon svgIcon="heroicons_outline:rectangle-stack"></mat-icon>\r
                </div>\r
                <div>\r
                    <h1 class="title">{{ t('humanAuthnProjects.title') }}</h1>\r
                    <p class="subtitle">{{ t('humanAuthnProjects.subtitle') }}</p>\r
                </div>\r
            </header>\r
\r
            <div class="crumb">\r
                <a routerLink="/home" class="crumb-link">Verifik</a>\r
                <span class="crumb-sep">/</span>\r
                <span class="crumb-here">{{ t('nav.human_authn') }}</span>\r
                <span class="crumb-sep">/</span>\r
                <span class="crumb-here">{{ t('humanAuthnProjects.title') }}</span>\r
            </div>\r
\r
            @if (loading()) {\r
                <div class="state-loading">\r
                    <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>\r
                </div>\r
            } @else if (error()) {\r
                <div class="banner-error">{{ error()! | transloco }}</div>\r
            } @else if (noActivePlan()) {\r
                <div class="plan-gate">\r
                    <div class="plan-gate-body">\r
                        <h2 class="plan-gate-title">{{ t('humanAuthnProjects.noPlanCardTitle') }}</h2>\r
                        <p class="plan-gate-muted">{{ t('humanAuthnProjects.noPlanCardBody') }}</p>\r
                    </div>\r
                    <button mat-flat-button color="primary" type="button" class="plan-gate-cta" (click)="goToPlans()">\r
                        {{ t('humanAuthnProjects.goToPlans') }}\r
                    </button>\r
                </div>\r
            } @else if (projects().length === 0) {\r
                <div class="empty-hero-card">\r
                    <div class="empty-hero-icon" [class.empty-hero-icon--muted]="isWorkspaceStaff()">\r
                        <mat-icon svgIcon="heroicons_outline:plus-circle"></mat-icon>\r
                    </div>\r
                    @if (isWorkspaceStaff()) {\r
                        <h2 class="empty-hero-title">{{ t('humanAuthnProjects.emptyStaffTitle') }}</h2>\r
                        <p class="empty-hero-text">{{ t('humanAuthnProjects.emptyStaffBody') }}</p>\r
                    } @else {\r
                        <h2 class="empty-hero-title">{{ t('humanAuthnProjects.emptyHeroTitle') }}</h2>\r
                        <p class="empty-hero-text">{{ t('humanAuthnProjects.emptyHeroSubtitle') }}</p>\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            type="button"\r
                            class="empty-hero-cta"\r
                            (click)="createProject()"\r
                        >\r
                            <mat-icon svgIcon="heroicons_outline:plus-circle"></mat-icon>\r
                            {{ t('humanAuthnProjects.createProject') }}\r
                        </button>\r
                    }\r
                </div>\r
            } @else {\r
                <div class="grid">\r
                    @if (!isWorkspaceStaff()) {\r
                        <button\r
                            type="button"\r
                            class="card card-create"\r
                            (click)="createProject()"\r
                            [attr.aria-label]="t('humanAuthnProjects.createProject')"\r
                        >\r
                            <div class="card-create-icon">\r
                                <mat-icon svgIcon="heroicons_outline:plus-circle"></mat-icon>\r
                            </div>\r
                            <div class="card-create-copy">\r
                                <h2 class="card-create-title">{{ t('humanAuthnProjects.list.newProjectTitle') }}</h2>\r
                                <p class="card-create-text">{{ t('humanAuthnProjects.list.newProjectSubtitle') }}</p>\r
                            </div>\r
                            <span class="card-create-cta">\r
                                {{ t('humanAuthnProjects.createProject') }}\r
                                <span aria-hidden="true">\u203A</span>\r
                            </span>\r
                        </button>\r
                    }\r
\r
                    @for (project of projects(); track project._id) {\r
                        <article class="card" (click)="openProject(project, $event)">\r
                            <div class="card-top">\r
                                <div class="card-brand">\r
                                    @if (project.branding?.logo) {\r
                                        <img class="logo" [src]="project.branding!.logo" alt="" />\r
                                    } @else {\r
                                        <div class="logo-fallback">\r
                                            <mat-icon svgIcon="heroicons_outline:folder"></mat-icon>\r
                                        </div>\r
                                    }\r
                                </div>\r
                                <div class="card-heading">\r
                                    <h2 class="card-title">{{ project.name || project._id }}</h2>\r
                                    @if (currentFlow(project); as flow) {\r
                                        <div class="status-row">\r
                                            <span\r
                                                class="pill"\r
                                                [class.pill-on]="!isDraftFlow(flow)"\r
                                                [class.pill-off]="isDraftFlow(flow)"\r
                                            >\r
                                                <span class="pill-dot"></span>\r
                                                {{\r
                                                    isDraftFlow(flow)\r
                                                        ? t('humanAuthnProjects.list.draft')\r
                                                        : t('humanAuthnProjects.list.active')\r
                                                }}\r
                                            </span>\r
                                            @if (project.demoMode) {\r
                                                <span class="demo-badge">({{ t('humanAuthnProjects.list.demoMode') }})</span>\r
                                            }\r
                                            <mat-slide-toggle\r
                                                color="primary"\r
                                                [checked]="flowToggleChecked(flow)"\r
                                                (click)="$event.stopPropagation()"\r
                                                (change)="onFlowStatusToggle($event, project)"\r
                                            ></mat-slide-toggle>\r
                                        </div>\r
                                    }\r
                                </div>\r
                                <button\r
                                    type="button"\r
                                    mat-icon-button\r
                                    class="menu-btn"\r
                                    [matMenuTriggerFor]="projectMenu"\r
                                    (click)="$event.stopPropagation()"\r
                                    [attr.aria-label]="t('humanAuthnProjects.list.moreActions')"\r
                                >\r
                                    <mat-icon svgIcon="heroicons_outline:ellipsis-vertical"></mat-icon>\r
                                </button>\r
                                <mat-menu #projectMenu="matMenu">\r
                                    <button mat-menu-item type="button" (click)="openProject(project, $event)">\r
                                        {{ t('humanAuthnProjects.list.menuEdit') }}\r
                                    </button>\r
                                    <button mat-menu-item type="button" (click)="openHistory($event)">\r
                                        {{ t('humanAuthnProjects.list.menuHistory') }}\r
                                    </button>\r
                                </mat-menu>\r
                            </div>\r
\r
                            <div class="rows" (click)="$event.stopPropagation()">\r
                                <button type="button" class="row" (click)="openSection(project, 1, $event)">\r
                                    <mat-icon class="row-ic" svgIcon="heroicons_outline:phone"></mat-icon>\r
                                    <span class="row-label">{{ t('humanAuthnProjects.list.signupForm') }}</span>\r
                                    <span class="row-chev" aria-hidden="true">\u203A</span>\r
                                </button>\r
                                <button type="button" class="row" (click)="openSection(project, 2, $event)">\r
                                    <mat-icon class="row-ic" svgIcon="heroicons_outline:envelope"></mat-icon>\r
                                    <span class="row-label">{{ t('humanAuthnProjects.list.documents') }}</span>\r
                                    <span class="row-chev" aria-hidden="true">\u203A</span>\r
                                </button>\r
                                <button type="button" class="row" (click)="openSection(project, 3, $event)">\r
                                    <mat-icon class="row-ic" svgIcon="heroicons_outline:face-smile"></mat-icon>\r
                                    <span class="row-label">{{ t('humanAuthnProjects.list.humanAuthn') }}</span>\r
                                    <span class="row-chev" aria-hidden="true">\u203A</span>\r
                                </button>\r
                                <button type="button" class="row row-last" (click)="openSection(project, 5, $event)">\r
                                    <mat-icon class="row-ic" svgIcon="heroicons_outline:code-bracket"></mat-icon>\r
                                    <span class="row-label">{{ t('humanAuthnProjects.list.integrations') }}</span>\r
                                    <span class="row-chev" aria-hidden="true">\u203A</span>\r
                                </button>\r
                            </div>\r
\r
                            @if (membersForCard(project).length) {\r
                                <div class="members" (click)="$event.stopPropagation()">\r
                                    <div class="members-label">{{ t('humanAuthnProjects.list.members') }}</div>\r
                                    <div class="members-strip">\r
                                        @for (member of membersForCard(project).slice(0, 5); track member._id) {\r
                                            <div\r
                                                class="member-avatar"\r
                                                [attr.title]="member.staff?.name || ''"\r
                                                [attr.aria-label]="member.staff?.name || ''"\r
                                            >\r
                                                {{ formatAcronym(member.staff?.name) }}\r
                                            </div>\r
                                        }\r
                                    </div>\r
                                </div>\r
                            }\r
\r
                            <div class="meta">{{ t('humanAuthnProjects.updated') }}: {{ formatUpdated(project.updatedAt) }}</div>\r
\r
                            <div class="card-actions" (click)="$event.stopPropagation()">\r
                                <button type="button" class="btn-live" (click)="openProject(project, $event)">\r
                                    <mat-icon class="btn-live-icon" svgIcon="heroicons_outline:arrow-top-right-on-square"></mat-icon>\r
                                    {{ t('humanAuthnProjects.list.openSetup') }}\r
                                </button>\r
                                <div class="card-actions-row">\r
                                    <button type="button" class="btn-primary" (click)="openProject(project, $event)">\r
                                        {{ t('humanAuthnProjects.list.edit') }}\r
                                    </button>\r
                                    <button type="button" class="btn-secondary" (click)="openHistory($event)">\r
                                        {{ t('humanAuthnProjects.list.seeLogs') }}\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        </article>\r
                    }\r
                </div>\r
            }\r
        </div>\r
    </div>\r
</ng-container>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/human-authn/projects/human-authn-projects.component.scss */\n:host {\n  display: block;\n}\n.page {\n  min-height: 100%;\n  background: rgb(249, 250, 251);\n}\n.inner {\n  max-width: 72rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 3rem;\n}\n.hero {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.hero-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(37, 99, 235);\n  flex-shrink: 0;\n}\n.hero-icon mat-icon {\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n}\n.title {\n  margin: 0;\n  font-size: 1.875rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.subtitle {\n  margin: 0.4rem 0 0;\n  font-size: 1rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.crumb {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n  margin-bottom: 1.5rem;\n}\n.crumb-link {\n  color: rgb(55, 65, 81);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.crumb-sep {\n  margin: 0 0.35rem;\n  color: rgb(209, 213, 219);\n}\n.crumb-here {\n  color: rgb(75, 85, 99);\n}\n.state-loading {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.banner-error {\n  border-radius: 12px;\n  border: 1px solid rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(127, 29, 29);\n  padding: 0.85rem 1rem;\n  font-size: 0.9rem;\n}\n.plan-gate {\n  border-radius: 16px;\n  background: rgb(15, 23, 42);\n  color: #fff;\n  padding: 1.75rem 1.5rem 1.5rem;\n  max-width: 32rem;\n}\n.plan-gate-title {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 650;\n}\n.plan-gate-muted {\n  margin: 0.75rem 0 0;\n  font-size: 0.85rem;\n  color: rgb(148, 163, 184);\n  line-height: 1.5;\n}\n.plan-gate-cta {\n  margin-top: 1.25rem;\n  width: 100%;\n  border-radius: 12px;\n}\n.empty-hero-card {\n  max-width: 36rem;\n  margin: 0 auto;\n  text-align: center;\n  padding: 2.75rem 1.75rem 2.25rem;\n  border-radius: 18px;\n  border: 1px solid rgb(229, 231, 235);\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      rgb(248, 250, 252) 100%);\n  box-shadow: 0 8px 32px rgba(15, 23, 42, 0.08);\n}\n.empty-hero-icon {\n  width: 4rem;\n  height: 4rem;\n  margin: 0 auto 1.25rem;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgb(239, 246, 255);\n  border: 1px solid rgb(219, 234, 254);\n  color: rgb(37, 99, 235);\n}\n.empty-hero-icon--muted {\n  background: rgb(243, 244, 246);\n  border-color: rgb(229, 231, 235);\n  color: rgb(107, 114, 128);\n}\n.empty-hero-icon mat-icon {\n  width: 2.25rem;\n  height: 2.25rem;\n  font-size: 2.25rem;\n}\n.empty-hero-title {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n  line-height: 1.3;\n}\n.empty-hero-text {\n  margin: 0.65rem auto 0;\n  max-width: 26rem;\n  font-size: 0.9375rem;\n  line-height: 1.55;\n  color: rgb(107, 114, 128);\n}\n.empty-hero-cta {\n  margin-top: 1.5rem;\n  min-width: 12rem;\n  border-radius: 12px !important;\n  padding: 0.5rem 1.25rem !important;\n  font-weight: 600 !important;\n}\n.empty-hero-cta mat-icon {\n  margin-right: 0.35rem;\n  vertical-align: middle;\n  width: 1.15rem;\n  height: 1.15rem;\n  font-size: 1.15rem;\n}\n:host-context(.dark) .page {\n  background: #0f0f1f;\n}\n:host-context(.dark) .title {\n  color: #f8fafc;\n}\n:host-context(.dark) .subtitle,\n:host-context(.dark) .crumb,\n:host-context(.dark) .crumb-sep {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .crumb-link,\n:host-context(.dark) .crumb-here {\n  color: rgb(226, 232, 240);\n}\n:host-context(.dark) .empty-hero-card {\n  border-color: rgba(255, 255, 255, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      #11122a 0%,\n      #161828 100%);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .empty-hero-icon {\n  background: rgba(43, 58, 240, 0.15);\n  border-color: rgba(79, 90, 246, 0.28);\n  color: rgb(129, 140, 248);\n}\n:host-context(.dark) .empty-hero-icon--muted {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: rgba(255, 255, 255, 0.1);\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .empty-hero-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .empty-hero-text {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .hero-icon {\n  background: rgba(43, 58, 240, 0.15);\n  border-color: rgba(79, 90, 246, 0.28);\n  color: rgb(129, 140, 248);\n}\n:host-context(.dark) .card {\n  border-color: rgba(255, 255, 255, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      #11122a 0%,\n      #161828 100%);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);\n}\n:host-context(.dark) .card:hover {\n  border-color: rgba(255, 255, 255, 0.16);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .logo-fallback {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .card-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .pill-on {\n  background: rgba(37, 99, 235, 0.2);\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .pill-on .pill-dot {\n  background: rgb(96, 165, 250);\n}\n:host-context(.dark) .pill-off {\n  background: rgba(255, 255, 255, 0.06);\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .pill-off .pill-dot {\n  background: rgb(100, 116, 139);\n}\n:host-context(.dark) .demo-badge {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .menu-btn {\n  color: rgb(148, 163, 184);\n  border-color: rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  box-shadow: none;\n}\n:host-context(.dark) .menu-btn:hover {\n  color: #f8fafc;\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.16);\n}\n:host-context(.dark) .rows {\n  border-top-color: rgba(255, 255, 255, 0.06);\n}\n:host-context(.dark) .row {\n  border-bottom-color: rgba(255, 255, 255, 0.06);\n  color: #f8fafc;\n}\n:host-context(.dark) .row:hover {\n  background: rgba(255, 255, 255, 0.04);\n}\n:host-context(.dark) .row-ic {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .row-chev {\n  color: rgb(129, 140, 248);\n}\n:host-context(.dark) .btn-live {\n  background: transparent;\n  border-color: rgb(96, 165, 250);\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .btn-live:hover {\n  background: rgba(37, 99, 235, 0.15);\n  border-color: rgb(129, 140, 248);\n  color: rgb(191, 219, 254);\n}\n:host-context(.dark) .btn-live:active {\n  background: rgba(37, 99, 235, 0.25);\n}\n:host-context(.dark) .btn-secondary {\n  background: rgba(255, 255, 255, 0.04);\n  color: #f8fafc;\n  border-color: rgba(255, 255, 255, 0.1);\n}\n:host-context(.dark) .btn-secondary:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.16);\n}\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.25rem;\n}\n@media (min-width: 900px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.card {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 1.1rem 1.15rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  cursor: pointer;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n  text-align: left;\n}\n.card:hover {\n  border-color: rgb(209, 213, 219);\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);\n}\n.card-create {\n  appearance: none;\n  background:\n    linear-gradient(\n      180deg,\n      rgb(239, 246, 255) 0%,\n      #ffffff 100%);\n  border-style: dashed;\n  border-color: rgb(191, 219, 254);\n  align-items: stretch;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    border-color 0.15s ease,\n    background 0.15s ease,\n    box-shadow 0.15s ease,\n    transform 0.15s ease;\n}\n.card-create:hover {\n  border-color: rgb(96, 165, 250);\n  background:\n    linear-gradient(\n      180deg,\n      rgb(219, 234, 254) 0%,\n      #ffffff 100%);\n  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.12);\n  transform: translateY(-1px);\n}\n.card-create:focus-visible {\n  outline: none;\n  border-color: rgb(37, 99, 235);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);\n}\n.card-create-icon {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  background: rgb(219, 234, 254);\n  color: rgb(37, 99, 235);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-create-icon mat-icon {\n  width: 1.85rem;\n  height: 1.85rem;\n  font-size: 1.85rem;\n}\n.card-create-copy {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.card-create-title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 650;\n  letter-spacing: -0.01em;\n  color: rgb(17, 24, 39);\n}\n.card-create-text {\n  margin: 0.35rem 0 0;\n  color: rgb(75, 85, 99);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.card-create-cta {\n  margin-top: auto;\n  align-self: flex-end;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1rem;\n  border-radius: 999px;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n:host-context(.dark) .card-create {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.12) 0%,\n      rgba(15, 15, 31, 0.6) 100%);\n  border-color: rgba(96, 165, 250, 0.35);\n}\n:host-context(.dark) .card-create:hover {\n  border-color: rgb(96, 165, 250);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.2) 0%,\n      rgba(15, 15, 31, 0.6) 100%);\n}\n:host-context(.dark) .card-create-icon {\n  background: rgba(37, 99, 235, 0.18);\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .card-create-title {\n  color: #f8fafc;\n}\n:host-context(.dark) .card-create-text {\n  color: rgb(148, 163, 184);\n}\n.card-top {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: start;\n  gap: 0.65rem;\n  position: relative;\n}\n.card-brand {\n  flex-shrink: 0;\n}\n.logo {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  object-fit: contain;\n}\n.logo-fallback {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 12px;\n  background: rgb(243, 244, 246);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(107, 114, 128);\n}\n.card-heading {\n  flex: 1;\n  min-width: 0;\n}\n.card-title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n  line-height: 1.3;\n}\n.status-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.35rem;\n}\n.pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  border-radius: 999px;\n  padding: 0.2rem 0.55rem 0.2rem 0.4rem;\n  font-size: 0.72rem;\n  font-weight: 650;\n  letter-spacing: 0.02em;\n}\n.pill-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 999px;\n  flex-shrink: 0;\n}\n.pill-on {\n  background: rgb(219, 234, 254);\n  color: rgb(30, 64, 175);\n}\n.pill-on .pill-dot {\n  background: rgb(37, 99, 235);\n}\n.pill-off {\n  background: rgb(243, 244, 246);\n  color: rgb(75, 85, 99);\n}\n.pill-off .pill-dot {\n  background: rgb(156, 163, 175);\n}\n.demo-badge {\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: rgb(107, 114, 128);\n  letter-spacing: 0.01em;\n}\n.menu-btn {\n  flex-shrink: 0;\n  margin: 0;\n  justify-self: end;\n  align-self: start;\n  color: rgb(55, 65, 81);\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 999px;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);\n}\n.menu-btn:hover {\n  color: rgb(17, 24, 39);\n  background: rgb(249, 250, 251);\n  border-color: rgb(209, 213, 219);\n}\n.menu-btn mat-icon {\n  width: 22px;\n  height: 22px;\n  font-size: 22px;\n}\n.rows {\n  border-top: 1px solid rgb(243, 244, 246);\n  margin-top: 0.15rem;\n}\n.row {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.65rem 0.15rem;\n  border: none;\n  border-bottom: 1px solid rgb(243, 244, 246);\n  background: transparent;\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n  color: rgb(17, 24, 39);\n}\n.row-last {\n  border-bottom: none;\n}\n.row:hover {\n  background: rgb(249, 250, 251);\n}\n.row-ic {\n  width: 1.15rem;\n  height: 1.15rem;\n  font-size: 1.15rem;\n  color: rgb(107, 114, 128);\n  flex-shrink: 0;\n}\n.row-label {\n  flex: 1;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.row-chev {\n  color: rgb(37, 99, 235);\n  font-size: 1.25rem;\n  font-weight: 300;\n  line-height: 1;\n}\n.members {\n  padding-top: 0.35rem;\n}\n.members-label {\n  font-size: 0.65rem;\n  font-weight: 650;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: rgb(156, 163, 175);\n  margin-bottom: 0.35rem;\n}\n.members-strip {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.35rem;\n}\n.member-avatar {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(59, 130, 246),\n      rgb(37, 99, 235));\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.meta {\n  font-size: 0.75rem;\n  color: rgb(156, 163, 175);\n}\n.card-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  margin-top: 0.35rem;\n}\n.card-actions-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.btn-live {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 999px;\n  padding: 0.62rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  cursor: pointer;\n  color: rgb(37, 99, 235);\n  background: rgb(255, 255, 255);\n  border: 1.5px solid rgb(37, 99, 235);\n  box-shadow: none;\n  transition:\n    background-color 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease;\n}\n.btn-live:hover {\n  background: rgb(239, 246, 255);\n  border-color: rgb(29, 78, 216);\n  color: rgb(29, 78, 216);\n}\n.btn-live:focus-visible {\n  outline: 2px solid rgb(59, 130, 246);\n  outline-offset: 2px;\n}\n.btn-live:active {\n  background: rgb(219, 234, 254);\n}\n.btn-live-icon {\n  width: 1.05rem !important;\n  height: 1.05rem !important;\n  font-size: 1.05rem !important;\n  flex-shrink: 0;\n  color: inherit;\n}\n.btn-primary {\n  flex: 1;\n  min-width: 6rem;\n  border: none;\n  border-radius: 999px;\n  padding: 0.55rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: rgb(37, 99, 235);\n  color: #fff;\n}\n.btn-primary:hover {\n  background: rgb(29, 78, 216);\n}\n.btn-secondary {\n  flex: 1;\n  min-width: 6rem;\n  border-radius: 999px;\n  padding: 0.55rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  background: #fff;\n  color: rgb(17, 24, 39);\n  border: 1px solid rgb(229, 231, 235);\n}\n.btn-secondary:hover {\n  border-color: rgb(209, 213, 219);\n  background: rgb(249, 250, 251);\n}\n/*# sourceMappingURL=human-authn-projects.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanAuthnProjectsComponent, { className: "HumanAuthnProjectsComponent", filePath: "src/app/modules/human-authn/projects/human-authn-projects.component.ts", lineNumber: 38 });
})();
export {
  HumanAuthnProjectsComponent
};
//# sourceMappingURL=chunk-6R6MXRCQ.js.map
