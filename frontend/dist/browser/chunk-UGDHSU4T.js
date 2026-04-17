import {
  SmartEnrollProjectsService
} from "./chunk-YSERIMFI.js";
import {
  SettingsService
} from "./chunk-ONZYIJUI.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DXMIRT7Q.js";
import {
  CountryService
} from "./chunk-GFJLSNKF.js";
import "./chunk-LPSMXQSY.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-6734Q5GP.js";
import "./chunk-GMB4P7VL.js";
import "./chunk-B4CPLDBC.js";
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
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgSelectMultipleOption
} from "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
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
  finalize,
  forkJoin,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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

// src/app/modules/smart-enroll/projects/project-staff/project-staff.component.ts
var _c0 = (a0, a1) => ({ current: a0, total: a1 });
var _forTrack0 = ($index, $item) => $item._id;
var _forTrack1 = ($index, $item) => $item.dialCode + $item.name;
function ProjectStaffComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.project().name);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.loadError()));
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-progress-spinner", 10);
    \u0275\u0275elementEnd();
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const member_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.lastActiveDisplay(member_r3.lastActive), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.list.neverLoggedIn"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const member_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.lastActiveDisplay(member_r3.lastActive), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.list.neverLoggedIn"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r3 = \u0275\u0275nextContext().$implicit;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.roles." + member_r3.role));
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r6 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275property("value", role_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.roles." + role_r6));
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 31);
    \u0275\u0275listener("change", function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_15_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const member_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onMemberRoleChange(member_r3, $event));
    });
    \u0275\u0275repeaterCreate(1, ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_15_For_2_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", member_r3.role)("disabled", ctx_r0.isUpdatingOrRemoving(member_r3));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.roles);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.accepted"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.invited"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const member_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeMember(member_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r3 = \u0275\u0275nextContext().$implicit;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.isUpdatingOrRemoving(member_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.removeFromProject"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 21)(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 24);
    \u0275\u0275template(8, ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_8_Template, 1, 1)(9, ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275template(11, ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_11_Template, 1, 1)(12, ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_12_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 26);
    \u0275\u0275template(14, ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_14_Template, 2, 1, "span")(15, ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_15_Template, 3, 2, "select", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 28);
    \u0275\u0275template(17, ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_17_Template, 1, 1)(18, ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_18_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 29);
    \u0275\u0275template(20, ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_20_Template, 2, 2, "button", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatAcronym(member_r3.staff == null ? null : member_r3.staff.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r3.staff == null ? null : member_r3.staff.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(member_r3.lastActive ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(member_r3.lastActive ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.canUpdateRole(member_r3) ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(member_r3.acceptedAt ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.canRemoveMember(member_r3) ? 20 : -1);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.noMembers"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.noMembersHint"));
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 43);
    \u0275\u0275listener("change", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_6_Template_mat_checkbox_change_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectAll());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("checked", ctx_r0.isAllSelected)("disabled", ctx_r0.saving())("indeterminate", !ctx_r0.isAllSelected && ctx_r0.hasSelectedStaff);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r11 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275property("value", role_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.roles." + role_r11));
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.addToProject"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 48);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "mat-checkbox", 45);
    \u0275\u0275listener("change", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Template_mat_checkbox_change_1_listener() {
      const staff_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.toggleSelection(staff_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 21)(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 26)(13, "select", 31);
    \u0275\u0275listener("change", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Template_select_change_13_listener($event) {
      const staff_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onInviteRoleChange(staff_r10, $event));
    });
    \u0275\u0275repeaterCreate(14, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_For_15_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 46)(17, "button", 47);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Template_button_click_17_listener() {
      const staff_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.createMember(staff_r10));
    });
    \u0275\u0275template(18, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Conditional_18_Template, 1, 1)(19, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Conditional_19_Template, 1, 0, "mat-progress-spinner", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const staff_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", staff_r10.selected);
    \u0275\u0275advance();
    \u0275\u0275property("checked", staff_r10.selected)("disabled", ctx_r0.isInviting(staff_r10) || ctx_r0.saving());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatAcronym(staff_r10.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(staff_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(staff_r10.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(staff_r10.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", staff_r10.role || "viewer")("disabled", ctx_r0.isInviting(staff_r10) || ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.roles);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.canInvite() || ctx_r0.isInviting(staff_r10) || ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isInviting(staff_r10) ? 18 : 19);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 49);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage() - 1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 49);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage() + 1));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.page", \u0275\u0275pureFunction2(3, _c0, ctx_r0.currentPage(), ctx_r0.totalPages)));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "a", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.noStaffAvailable"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.noStaffAvailableHintBefore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.noStaffAvailableHintLink"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", t_r4("smartEnrollProjects.staff.noStaffAvailableHintAfter"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.noStaff"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.noStaffHint"));
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "span", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 71);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 71);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r4("settings.team.limit_info_1"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.selectedSubscription == null ? null : ctx_r0.selectedSubscription.name) === "PyG" ? "PAYG" : ctx_r0.selectedSubscription == null ? null : ctx_r0.selectedSubscription.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("settings.team.limit_info_2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.staffLimit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("settings.team.limit_info_3"), " (");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.workspaceStaffCount, "/", ctx_r0.staffLimit, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("settings.team.used"), ") ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("settings.team.no_plan_warning"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("value", c_r14.dialCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r14.dialCode, " ", c_r14.name, "");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("settings.team.save"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 48);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "p", 53);
    \u0275\u0275template(2, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_2_Template, 10, 8)(3, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_3_Template, 1, 1);
    \u0275\u0275elementStart(4, "a", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 55)(7, "h3", 56);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label", 58);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 59);
    \u0275\u0275elementStart(14, "label", 58);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 60);
    \u0275\u0275elementStart(17, "div", 61)(18, "div")(19, "label", 58);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 62);
    \u0275\u0275repeaterCreate(22, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_For_23_Template, 2, 3, "option", 32, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "label", 58);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "label", 58);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "select", 64)(31, "option", 65);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 66);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 67);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 68);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 69)(40, "button", 70);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.saveWorkspaceStaff());
    });
    \u0275\u0275template(41, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_41_Template, 1, 1)(42, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_42_Template, 1, 0, "mat-progress-spinner", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("banner-ok", ctx_r0.hasSubscription && ctx_r0.canAddMoreWorkspaceStaff())("banner-warn", ctx_r0.hasSubscription && !ctx_r0.canAddMoreWorkspaceStaff())("banner-bad", !ctx_r0.hasSubscription);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hasSubscription ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("settings.team.view_plans"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.workspaceStaffForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.inlineWorkspaceTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.inlineWorkspaceSubtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("settings.team.full_name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("settings.team.email"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r4("settings.team.country_code"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.countryCodes);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("settings.team.phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("settings.team.role"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("settings.team.role_empleado"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("settings.team.role_contabilidad"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("settings.team.role_desarrollador"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("settings.team.role_administrador"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isSavingWorkspaceStaff || ctx_r0.workspaceStaffForm.invalid || !ctx_r0.canAddMoreWorkspaceStaff());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isSavingWorkspaceStaff ? 41 : 42);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_0_Template, 8, 4, "div", 17)(1, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_1_Template, 5, 2, "div", 17)(2, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Template, 43, 22);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r0.sortedMembers().length ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.canInvite() && ctx_r0.canManageWorkspaceStaff() && ctx_r0.workspaceStaffContextLoaded ? 2 : -1);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "section", 11)(5, "div", 38);
    \u0275\u0275template(6, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_6_Template, 1, 3, "mat-checkbox", 39)(7, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_7_Template, 1, 0, "span", 40);
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Template, 20, 12, "div", 41, _forTrack0);
    \u0275\u0275template(17, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_17_Template, 9, 6, "div", 42)(18, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Template, 3, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.inviteTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.inviteSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.staffs().length ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.username"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.role"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.paginatedStaff());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalPages > 1 ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.staffs().length === 0 && !ctx_r0.loading() ? 18 : -1);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.sendInvitations"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 48);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.createMembers());
    });
    \u0275\u0275template(1, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Conditional_1_Template, 1, 1)(2, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Conditional_2_Template, 1, 0, "mat-progress-spinner", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.isSavingDisabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.saving() ? 1 : 2);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, ProjectStaffComponent_ng_container_0_Conditional_14_For_12_Template, 21, 7, "div", 16, _forTrack0);
    \u0275\u0275template(13, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_13_Template, 5, 2, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Template, 19, 8);
    \u0275\u0275elementStart(15, "footer", 18)(16, "button", 19);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Template, 3, 2, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.username"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.lastActive"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.role"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.invitation"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.sortedMembers());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.sortedMembers().length && !ctx_r0.loading() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canInvite() ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.goBack"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canInvite() ? 18 : -1);
  }
}
function ProjectStaffComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "header", 3)(4, "div")(5, "h1", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProjectStaffComponent_ng_container_0_Conditional_9_Template, 2, 1, "p", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ProjectStaffComponent_ng_container_0_Conditional_12_Template, 3, 3, "div", 8)(13, ProjectStaffComponent_ng_container_0_Conditional_13_Template, 2, 0, "div", 9)(14, ProjectStaffComponent_ng_container_0_Conditional_14_Template, 19, 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const t_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.subtitle"));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx_r0.project()) == null ? null : tmp_4_0.name) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.docUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.documentation"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadError() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading() && !ctx_r0.projectMembers().length && !ctx_r0.staffs().length ? 13 : ctx_r0.project() ? 14 : -1);
  }
}
var ProjectStaffComponent = class _ProjectStaffComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._settingsService = inject(SettingsService);
    this._formBuilder = inject(FormBuilder);
    this._countryService = inject(CountryService);
    this._snackBar = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this.project = signal(null);
    this.projectMembers = signal([]);
    this.staffs = signal([]);
    this.loading = signal(true);
    this.loadError = signal(null);
    this.saving = signal(false);
    this.currentUserProjectMember = signal(null);
    this.currentPage = signal(1);
    this.itemsPerPage = 5;
    this.roles = ["viewer", "editor", "admin"];
    this.selectedStaffIdMap = {};
    this.countryCodes = [];
    this.workspaceStaffContextLoaded = false;
    this.hasSubscription = false;
    this.staffLimit = 0;
    this.workspaceStaffCount = 0;
    this.selectedSubscription = null;
    this.isSavingWorkspaceStaff = false;
    this._clientUser = null;
    this.countryCodes = this._countryService.countryDialCodes;
    this.workspaceStaffForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      countryCode: ["+1"],
      phone: ["", [Validators.required, Validators.pattern(/^\d{8,15}$/)]],
      role: ["empleado"]
    });
  }
  ngOnInit() {
    this._clientUser = this._parseUser();
    const projectId = this._route.snapshot.paramMap.get("projectId");
    if (!projectId) {
      this._goToProjects();
      return;
    }
    this._projectsService.getProject(projectId).subscribe({
      next: (p) => {
        if (!p) {
          this.loadError.set("smartEnrollProjects.projectNotFound");
          this.loading.set(false);
          return;
        }
        this.project.set(p);
        this._loadWorkspaceStaffLimits();
        this._loadMembers();
      },
      error: () => {
        this.loadError.set("smartEnrollProjects.loadError");
        this.loading.set(false);
      }
    });
  }
  canManageWorkspaceStaff() {
    const u = this._clientUser;
    if (!u)
      return false;
    if (u.staff && u.role !== "administrador")
      return false;
    return true;
  }
  canAddMoreWorkspaceStaff() {
    if (!this.hasSubscription || this.staffLimit === 0)
      return false;
    return this.workspaceStaffCount < this.staffLimit;
  }
  saveWorkspaceStaff() {
    if (this.workspaceStaffForm.invalid || this.isSavingWorkspaceStaff)
      return;
    if (!this.canAddMoreWorkspaceStaff()) {
      this._snackBar.open(this._transloco.translate("settings.team.limit_reached"), void 0, { duration: 4e3 });
      return;
    }
    const clientId = this._clientId(this.project());
    if (!clientId)
      return;
    this.isSavingWorkspaceStaff = true;
    const formValue = this.workspaceStaffForm.value;
    const payload = {
      name: formValue.name,
      email: formValue.email,
      countryCode: formValue.countryCode,
      phone: String(formValue.phone),
      role: formValue.role,
      client: clientId
    };
    this._settingsService.createStaff(payload).pipe(finalize(() => {
      this.isSavingWorkspaceStaff = false;
    })).subscribe({
      next: () => {
        this._snackBar.open(this._transloco.translate("settings.team.save_success"), void 0, { duration: 3e3 });
        this.workspaceStaffForm.reset({
          name: "",
          email: "",
          countryCode: "+1",
          phone: "",
          role: "empleado"
        });
        this._loadWorkspaceStaffLimits();
        this._loadMembers();
      },
      error: (error) => {
        let message = this._transloco.translate("settings.team.save_error");
        if (error?.error?.message === "cannot_create_staff" || error?.status === 412) {
          message = this._transloco.translate("settings.team.no_plan_error");
        }
        this._snackBar.open(message, void 0, { duration: 4e3 });
      }
    });
  }
  get isCurrentUserMemberAdminOrOwner() {
    const m = this.currentUserProjectMember();
    return m?.role === "admin" || m?.role === "owner" || !m;
  }
  get hasSelectedStaff() {
    return Object.keys(this.selectedStaffIdMap).length > 0;
  }
  get isAllSelected() {
    const s = this.staffs();
    return s.length > 0 && s.length === Object.keys(this.selectedStaffIdMap).length;
  }
  get isSavingDisabled() {
    return !this.hasSelectedStaff || this.saving();
  }
  paginatedStaff() {
    const s = this.staffs();
    const page = this.currentPage();
    return s.slice((page - 1) * this.itemsPerPage, page * this.itemsPerPage);
  }
  sortedMembers() {
    const list = [...this.projectMembers()];
    return list.sort((a, b) => {
      if (a.role === "owner")
        return -1;
      if (b.role === "owner")
        return 1;
      const tb = DateTime.fromISO(String(b.lastActive || "")).toMillis();
      const ta = DateTime.fromISO(String(a.lastActive || "")).toMillis();
      return tb - ta;
    });
  }
  get totalPages() {
    return Math.ceil(this.staffs().length / this.itemsPerPage) || 0;
  }
  docUrl() {
    const lang = this._transloco.getActiveLang();
    const useEn = lang === "fr" || lang !== "es";
    return useEn ? "https://docs.verifik.co/services/smartaccess#id-5.-team-management-1" : "https://docs.verifik.co/verifik-es/services/smartaccess#id-5.-gestion-de-equipos-1";
  }
  canInvite() {
    return this.isCurrentUserMemberAdminOrOwner;
  }
  canRemoveMember(member) {
    return !this.isOwner(member) && this.isCurrentUserMemberAdminOrOwner;
  }
  canUpdateRole(member) {
    return !this.isOwner(member) && this.isCurrentUserMemberAdminOrOwner;
  }
  isOwner(member) {
    return member.role === "owner";
  }
  isInviting(staff) {
    return !!staff.saving;
  }
  isUpdatingOrRemoving(member) {
    return !!member.saving || !!member.removing;
  }
  formatAcronym(name) {
    if (!name?.trim())
      return "?";
    const matches = name.match(/\b(\w)/g);
    return matches?.slice(0, 2).join("").toUpperCase() ?? "?";
  }
  lastActiveDisplay(date) {
    if (!date)
      return "";
    const dt = DateTime.fromISO(date);
    if (!dt.isValid)
      return "";
    return dt.toRelative() ?? "";
  }
  goBack() {
    const id = this.project()?._id;
    if (id) {
      this._router.navigate(["/smart-enroll/projects"]);
      return;
    }
    this._goToProjects();
  }
  changePage(page) {
    this.currentPage.set(page);
  }
  selectAll() {
    const staffList = this.staffs();
    if (this.isAllSelected) {
      this.selectedStaffIdMap = {};
      staffList.forEach((st) => {
        st.selected = false;
      });
      this.staffs.set([...staffList]);
      return;
    }
    this.selectedStaffIdMap = {};
    staffList.forEach((st) => {
      this.selectedStaffIdMap[st._id] = st;
      st.selected = true;
    });
    this.staffs.set([...staffList]);
  }
  toggleSelection(staff) {
    if (this.selectedStaffIdMap[staff._id]) {
      delete this.selectedStaffIdMap[staff._id];
    } else {
      this.selectedStaffIdMap[staff._id] = staff;
    }
    staff.selected = !staff.selected;
    this.staffs.set([...this.staffs()]);
  }
  createMember(staff) {
    if (staff.saving || this.saving())
      return void 0;
    const proj = this.project();
    const clientId = this._clientId(proj);
    if (!proj || !clientId)
      return void 0;
    staff.saving = true;
    this.staffs.set([...this.staffs()]);
    return this._projectsService.postProjectMember({
      client: clientId,
      project: proj._id,
      role: staff.role || "viewer",
      staff: staff._id
    }).subscribe({
      next: () => {
        staff.saving = false;
        this.selectedStaffIdMap = {};
        this._loadMembers();
      },
      error: () => {
        staff.saving = false;
        this.staffs.set([...this.staffs()]);
      }
    });
  }
  createMembers() {
    if (!this.hasSelectedStaff || this.saving())
      return;
    const proj = this.project();
    const clientId = this._clientId(proj);
    if (!proj || !clientId)
      return;
    this.saving.set(true);
    const observables = Object.values(this.selectedStaffIdMap).map((staff) => this._projectsService.postProjectMember({
      client: clientId,
      project: proj._id,
      role: staff.role || "viewer",
      staff: staff._id
    }));
    if (!observables.length) {
      this.saving.set(false);
      return;
    }
    forkJoin(observables).subscribe({
      next: () => {
        this.saving.set(false);
        this.selectedStaffIdMap = {};
        this._loadMembers();
      },
      error: () => {
        this.saving.set(false);
      }
    });
  }
  removeMember(member) {
    if (member.removing)
      return;
    member.removing = true;
    this.projectMembers.set([...this.projectMembers()]);
    this._projectsService.deleteProjectMember(member._id).subscribe({
      next: () => this._loadMembers(),
      error: () => {
        member.removing = false;
        this.projectMembers.set([...this.projectMembers()]);
      }
    });
  }
  updateRole(member, role) {
    if (member.saving || !this.isCurrentUserMemberAdminOrOwner)
      return;
    if (member.role === role)
      return;
    member.saving = true;
    this.projectMembers.set([...this.projectMembers()]);
    this._projectsService.updateProjectMember(member._id, { role }).subscribe({
      next: () => this._loadMembers(),
      error: () => {
        member.saving = false;
        this.projectMembers.set([...this.projectMembers()]);
      }
    });
  }
  onMemberRoleChange(member, event) {
    const value = event.target.value;
    this.updateRole(member, value);
  }
  onInviteRoleChange(staff, event) {
    staff.role = event.target.value;
    this.staffs.update((s) => [...s]);
  }
  _parseUser() {
    const raw = localStorage.getItem("user");
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  _goToProjects() {
    this._router.navigate(["/smart-enroll/projects"]);
  }
  _clientId(project) {
    if (!project?.client)
      return null;
    return typeof project.client === "string" ? project.client : project.client._id;
  }
  _loadWorkspaceStaffLimits() {
    const clientId = this._clientId(this.project());
    if (!clientId || !this.canManageWorkspaceStaff()) {
      this.workspaceStaffContextLoaded = true;
      return;
    }
    forkJoin({
      sub: this._settingsService.getMySubscription(clientId),
      staff: this._settingsService.getStaff()
    }).pipe(finalize(() => {
      this.workspaceStaffContextLoaded = true;
    })).subscribe({
      next: ({ sub, staff }) => {
        this.workspaceStaffCount = staff?.data?.length ?? 0;
        if (sub?.data?.subscriptionPlan) {
          this.selectedSubscription = sub.data.subscriptionPlan;
          this.hasSubscription = true;
          const chairsAddon = this.selectedSubscription?.changesInPrices?.find((addon) => addon?.addOn === "chairs");
          this.staffLimit = chairsAddon?.count ?? 0;
        } else {
          this.selectedSubscription = { name: "PAYG" };
          this.hasSubscription = false;
          this.staffLimit = 0;
        }
      },
      error: () => {
        this.workspaceStaffCount = 0;
        this.selectedSubscription = { name: "PAYG" };
        this.hasSubscription = false;
        this.staffLimit = 0;
      }
    });
  }
  _loadMembers() {
    const proj = this.project();
    if (!proj)
      return;
    this.loading.set(true);
    this._projectsService.getProjectMembers(proj._id).subscribe({
      next: (rows) => {
        this._prepareProjectMembers(rows);
      },
      error: () => {
        this.loadError.set("smartEnrollProjects.staff.loadMembersError");
        this.loading.set(false);
      }
    });
  }
  _prepareProjectMembers(projectMembers) {
    const proj = this.project();
    if (!proj)
      return;
    const members = [];
    const notIn = [];
    const hasProjectMembers = Array.isArray(projectMembers) && projectMembers.length > 0;
    let currentMember = this.currentUserProjectMember();
    if (hasProjectMembers) {
      for (const member of projectMembers) {
        if (!member.staff)
          continue;
        notIn.push(member.staff._id);
        if (this._clientUser?.staff && this._clientUser.staff === member.staff._id) {
          currentMember = member;
        }
        members.push(member);
      }
    }
    const client = proj.client && typeof proj.client !== "string" ? proj.client : null;
    if (client) {
      const ownerRow = {
        _id: "000000000000000000000001",
        lastActive: client.updatedAt,
        role: "owner",
        status: "joined",
        project: proj._id,
        client: client._id,
        acceptedAt: proj.createdAt ? new Date(proj.createdAt) : void 0,
        bannedAt: null,
        staff: {
          avatar: client.avatar,
          email: client.email,
          name: client.name,
          _id: client._id
        }
      };
      members.push(ownerRow);
      if (!this._clientUser?.staff) {
        currentMember = ownerRow;
      }
    }
    this.currentUserProjectMember.set(currentMember);
    this.projectMembers.set(members);
    const params = { where_status: "joined" };
    if (notIn.length) {
      params["notIn__id"] = notIn;
    }
    this._projectsService.getStaffList(params).subscribe({
      next: (result) => {
        const mapped = result.map((s) => __spreadProps(__spreadValues({}, s), {
          role: "viewer"
        }));
        this.staffs.set(mapped);
        this.currentPage.set(1);
        this.loading.set(false);
      },
      error: () => {
        this.loadError.set("smartEnrollProjects.staff.loadStaffError");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function ProjectStaffComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectStaffComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectStaffComponent, selectors: [["project-staff"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "page"], [1, "inner"], [1, "hero"], [1, "title"], [1, "subtitle"], [1, "project-name"], ["target", "_blank", "rel", "noopener noreferrer", 1, "doc-link", 3, "href"], [1, "banner-error"], [1, "state-loading"], ["diameter", "40", "mode", "indeterminate"], [1, "panel"], [1, "table-head", "grid-row", "members-head"], [1, "th"], [1, "th", "hide-sm"], [1, "th", "th-actions"], [1, "grid-row", "data-row", "members-row"], [1, "empty-block"], [1, "footer-actions"], ["mat-stroked-button", "", "type", "button", 1, "btn-outline", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "disabled"], [1, "cell-user"], [1, "avatar"], [1, "name"], [1, "muted", "show-sm"], [1, "cell-muted", "hide-sm"], [1, "cell-role"], [1, "role-select", 3, "value", "disabled"], [1, "cell-invite"], [1, "cell-actions"], ["type", "button", 1, "link-danger", 3, "disabled"], [1, "role-select", 3, "change", "value", "disabled"], [3, "value"], ["type", "button", 1, "link-danger", 3, "click", "disabled"], [1, "empty-title"], [1, "empty-sub"], [1, "section-title"], [1, "section-sub"], [1, "table-head", "grid-row", "invite-head"], [1, "chk", 3, "checked", "disabled", "indeterminate"], [1, "chk-spacer"], [1, "grid-row", "invite-row", 3, "selected"], [1, "pager"], [1, "chk", 3, "change", "checked", "disabled", "indeterminate"], [1, "grid-row", "invite-row"], [1, "chk", 3, "change", "checked", "disabled"], [1, "cell-actions", "end"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "btn-add", 3, "click", "disabled"], ["diameter", "20", "mode", "indeterminate"], ["mat-icon-button", "", "type", "button", 3, "click", "disabled"], [1, "pager-label"], ["routerLink", "/settings/team", 1, "hint-here-link"], [1, "workspace-limit-banner"], [1, "workspace-limit-text"], ["routerLink", "/subscription-plans", 1, "workspace-limit-plans"], [1, "inline-workspace-form", 3, "formGroup"], [1, "inline-form-title"], [1, "inline-form-sub"], [1, "inline-label"], ["type", "text", "formControlName", "name", 1, "inline-input"], ["type", "email", "formControlName", "email", 1, "inline-input"], [1, "inline-grid-2"], ["formControlName", "countryCode", 1, "inline-select"], ["type", "tel", "formControlName", "phone", 1, "inline-input"], ["formControlName", "role", 1, "inline-select"], ["value", "empleado"], ["value", "contabilidad"], ["value", "desarrollador"], ["value", "administrador"], [1, "inline-form-actions"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "btn-submit-workspace", 3, "click", "disabled"], [1, "font-semibold"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"]], template: function ProjectStaffComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProjectStaffComponent_ng_container_0_Template, 15, 7, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      ReactiveFormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatCheckboxModule,
      MatCheckbox,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule,
      TranslocoModule,
      TranslocoDirective,
      TranslocoPipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: rgb(249, 250, 251);\n}\n.inner[_ngcontent-%COMP%] {\n  max-width: 56rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 3rem;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.75rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: 0.95rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n  max-width: 40rem;\n}\n.project-name[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n}\n.doc-link[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  text-decoration: none;\n  align-self: center;\n}\n.doc-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.banner-error[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(127, 29, 29);\n  padding: 0.85rem 1rem;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n.state-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 3rem;\n}\n.panel[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 0.5rem 0 1rem;\n  margin-bottom: 1.5rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 0.25rem;\n  font-size: 1.1rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.section-sub[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: rgb(107, 114, 128);\n}\n.grid-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.35rem;\n  padding: 0.65rem 1rem;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .members-head[_ngcontent-%COMP%], \n   .members-row[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(5.5rem, auto);\n  }\n  .invite-head[_ngcontent-%COMP%], \n   .invite-row[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 2fr) minmax(0, 1.5fr) minmax(0, 1fr) minmax(6.5rem, auto);\n  }\n}\n.th[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 650;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: rgb(107, 114, 128);\n}\n.th-actions[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.hide-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) {\n  .hide-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .show-sm[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.data-row[_ngcontent-%COMP%], \n.invite-row[_ngcontent-%COMP%] {\n  border-top: 1px solid rgb(243, 244, 246);\n}\n.invite-row.selected[_ngcontent-%COMP%] {\n  background: rgb(249, 250, 251);\n}\n.cell-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  min-width: 0;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(59, 130, 246),\n      rgb(37, 99, 235));\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  font-size: 0.9rem;\n}\n.muted[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgb(107, 114, 128);\n}\n.cell-muted[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgb(75, 85, 99);\n}\n.cell-role[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.role-trigger[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 0.25rem 0;\n  font: inherit;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  cursor: pointer;\n  text-align: left;\n}\n.cell-invite[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgb(75, 85, 99);\n}\n.cell-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.cell-actions.end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.chk[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.chk-spacer[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.btn-add[_ngcontent-%COMP%] {\n  border-radius: 999px;\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n}\n.pager-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgb(75, 85, 99);\n}\n.empty-block[_ngcontent-%COMP%] {\n  padding: 1.5rem 1rem 0.5rem;\n  text-align: center;\n}\n.empty-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 650;\n  color: rgb(31, 41, 55);\n}\n.empty-sub[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: 0.9rem;\n  color: rgb(107, 114, 128);\n}\n.hint-here-link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.hint-here-link[_ngcontent-%COMP%]:hover {\n  color: rgb(29, 78, 216);\n}\n.empty-cta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 1rem;\n}\n.footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border-color: rgb(17, 24, 39) !important;\n  color: rgb(17, 24, 39) !important;\n}\n.role-select[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border-radius: 8px;\n  border: 1px solid rgb(229, 231, 235);\n  padding: 0.35rem 0.5rem;\n  font-size: 0.85rem;\n  background: #fff;\n  color: rgb(17, 24, 39);\n}\n.link-danger[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgb(220, 38, 38);\n  cursor: pointer;\n  text-decoration: underline;\n}\n.link-danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.workspace-limit-banner[_ngcontent-%COMP%] {\n  margin: 0.75rem 1rem 1rem;\n  padding: 0.85rem 1rem;\n  border-radius: 12px;\n  border: 1px solid rgb(229, 231, 235);\n  font-size: 0.85rem;\n  line-height: 1.45;\n}\n.workspace-limit-banner.banner-ok[_ngcontent-%COMP%] {\n  background: rgb(239, 246, 255);\n  border-color: rgb(191, 219, 254);\n  color: rgb(30, 58, 138);\n}\n.workspace-limit-banner.banner-warn[_ngcontent-%COMP%] {\n  background: rgb(255, 251, 235);\n  border-color: rgb(253, 230, 138);\n  color: rgb(120, 53, 15);\n}\n.workspace-limit-banner.banner-bad[_ngcontent-%COMP%] {\n  background: rgb(254, 242, 242);\n  border-color: rgb(254, 202, 202);\n  color: rgb(127, 29, 29);\n}\n.workspace-limit-text[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.workspace-limit-plans[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n  font-weight: 600;\n  text-decoration: underline;\n  color: inherit;\n}\n.inline-workspace-form[_ngcontent-%COMP%] {\n  margin: 0 1rem 1.25rem;\n  padding: 1rem 1.1rem 1.15rem;\n  border-radius: 12px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(252, 252, 252);\n}\n.inline-form-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.inline-form-sub[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 0.85rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.4;\n}\n.inline-label[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.65rem 0 0.25rem;\n  font-size: 0.72rem;\n  font-weight: 650;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: rgb(107, 114, 128);\n}\n.inline-input[_ngcontent-%COMP%], \n.inline-select[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  padding: 0.5rem 0.65rem;\n  font-size: 0.9rem;\n  background: #fff;\n  color: rgb(17, 24, 39);\n}\n.inline-grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem 0.75rem;\n}\n@media (min-width: 640px) {\n  .inline-grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.inline-form-actions[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.btn-submit-workspace[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  width: 100%;\n}\n@media (min-width: 480px) {\n  .btn-submit-workspace[_ngcontent-%COMP%] {\n    width: auto;\n    min-width: 8rem;\n  }\n}\n/*# sourceMappingURL=project-staff.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectStaffComponent, [{
    type: Component,
    args: [{ selector: "project-staff", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      TranslocoModule
    ], template: `<ng-container *transloco="let t">
    <div class="page">
        <div class="inner">
            <header class="hero">
                <div>
                    <h1 class="title">{{ t('smartEnrollProjects.staff.title') }}</h1>
                    <p class="subtitle">{{ t('smartEnrollProjects.staff.subtitle') }}</p>
                    @if (project()?.name) {
                        <p class="project-name">{{ project()!.name }}</p>
                    }
                </div>
                <a class="doc-link" [href]="docUrl()" target="_blank" rel="noopener noreferrer">
                    {{ t('smartEnrollProjects.staff.documentation') }}
                </a>
            </header>

            @if (loadError()) {
                <div class="banner-error">{{ loadError()! | transloco }}</div>
            }

            @if (loading() && !projectMembers().length && !staffs().length) {
                <div class="state-loading">
                    <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>
                </div>
            } @else if (project()) {
                <section class="panel">
                    <div class="table-head grid-row members-head">
                        <span class="th">{{ t('smartEnrollProjects.staff.username') }}</span>
                        <span class="th hide-sm">{{ t('smartEnrollProjects.staff.lastActive') }}</span>
                        <span class="th">{{ t('smartEnrollProjects.staff.role') }}</span>
                        <span class="th">{{ t('smartEnrollProjects.staff.invitation') }}</span>
                        <span class="th th-actions"></span>
                    </div>

                    @for (member of sortedMembers(); track member._id) {
                        <div class="grid-row data-row members-row">
                            <div class="cell-user">
                                <div class="avatar">{{ formatAcronym(member.staff?.name) }}</div>
                                <div>
                                    <div class="name">{{ member.staff?.name }}</div>
                                    <div class="muted show-sm">
                                        @if (member.lastActive) {
                                            {{ lastActiveDisplay(member.lastActive) }}
                                        } @else {
                                            {{ t('smartEnrollProjects.list.neverLoggedIn') }}
                                        }
                                    </div>
                                </div>
                            </div>
                            <div class="cell-muted hide-sm">
                                @if (member.lastActive) {
                                    {{ lastActiveDisplay(member.lastActive) }}
                                } @else {
                                    {{ t('smartEnrollProjects.list.neverLoggedIn') }}
                                }
                            </div>
                            <div class="cell-role">
                                @if (!canUpdateRole(member)) {
                                    <span>{{ t('smartEnrollProjects.staff.roles.' + member.role) }}</span>
                                } @else {
                                    <select
                                        class="role-select"
                                        [value]="member.role"
                                        [disabled]="isUpdatingOrRemoving(member)"
                                        (change)="onMemberRoleChange(member, $event)"
                                    >
                                        @for (role of roles; track role) {
                                            <option [value]="role">{{ t('smartEnrollProjects.staff.roles.' + role) }}</option>
                                        }
                                    </select>
                                }
                            </div>
                            <div class="cell-invite">
                                @if (member.acceptedAt) {
                                    {{ t('smartEnrollProjects.staff.accepted') }}
                                } @else {
                                    {{ t('smartEnrollProjects.staff.invited') }}
                                }
                            </div>
                            <div class="cell-actions">
                                @if (canRemoveMember(member)) {
                                    <button
                                        type="button"
                                        class="link-danger"
                                        [disabled]="isUpdatingOrRemoving(member)"
                                        (click)="removeMember(member)"
                                    >
                                        {{ t('smartEnrollProjects.staff.removeFromProject') }}
                                    </button>
                                }
                            </div>
                        </div>
                    }

                    @if (!sortedMembers().length && !loading()) {
                        <div class="empty-block">
                            <p class="empty-title">{{ t('smartEnrollProjects.staff.noMembers') }}</p>
                            <p class="empty-sub">{{ t('smartEnrollProjects.staff.noMembersHint') }}</p>
                        </div>
                    }
                </section>

                @if (canInvite()) {
                    <h2 class="section-title">{{ t('smartEnrollProjects.staff.inviteTitle') }}</h2>
                    <p class="section-sub">{{ t('smartEnrollProjects.staff.inviteSubtitle') }}</p>

                    <section class="panel">
                        <div class="table-head grid-row invite-head">
                            @if (staffs().length) {
                                <mat-checkbox
                                    class="chk"
                                    [checked]="isAllSelected"
                                    [disabled]="saving()"
                                    [indeterminate]="!isAllSelected && hasSelectedStaff"
                                    (change)="selectAll()"
                                ></mat-checkbox>
                            } @else {
                                <span class="chk-spacer"></span>
                            }
                            <span class="th">{{ t('smartEnrollProjects.staff.username') }}</span>
                            <span class="th hide-sm">{{ t('smartEnrollProjects.staff.email') }}</span>
                            <span class="th">{{ t('smartEnrollProjects.staff.role') }}</span>
                            <span class="th th-actions"></span>
                        </div>

                        @for (staff of paginatedStaff(); track staff._id) {
                            <div class="grid-row invite-row" [class.selected]="staff.selected">
                                <mat-checkbox
                                    class="chk"
                                    [checked]="staff.selected"
                                    [disabled]="isInviting(staff) || saving()"
                                    (change)="toggleSelection(staff)"
                                ></mat-checkbox>
                                <div class="cell-user">
                                    <div class="avatar">{{ formatAcronym(staff.name) }}</div>
                                    <div>
                                        <div class="name">{{ staff.name }}</div>
                                        <div class="muted show-sm">{{ staff.email }}</div>
                                    </div>
                                </div>
                                <div class="cell-muted hide-sm">{{ staff.email }}</div>
                                <div class="cell-role">
                                    <select
                                        class="role-select"
                                        [value]="staff.role || 'viewer'"
                                        [disabled]="isInviting(staff) || saving()"
                                        (change)="onInviteRoleChange(staff, $event)"
                                    >
                                        @for (role of roles; track role) {
                                            <option [value]="role">{{ t('smartEnrollProjects.staff.roles.' + role) }}</option>
                                        }
                                    </select>
                                </div>
                                <div class="cell-actions end">
                                    <button
                                        mat-flat-button
                                        color="primary"
                                        type="button"
                                        class="btn-add"
                                        [disabled]="!canInvite() || isInviting(staff) || saving()"
                                        (click)="createMember(staff)"
                                    >
                                        @if (!isInviting(staff)) {
                                            {{ t('smartEnrollProjects.staff.addToProject') }}
                                        } @else {
                                            <mat-progress-spinner diameter="20" mode="indeterminate"></mat-progress-spinner>
                                        }
                                    </button>
                                </div>
                            </div>
                        }

                        @if (totalPages > 1) {
                            <div class="pager">
                                <button mat-icon-button type="button" [disabled]="currentPage() === 1" (click)="changePage(currentPage() - 1)">
                                    <mat-icon>chevron_left</mat-icon>
                                </button>
                                <span class="pager-label">{{ t('smartEnrollProjects.staff.page', { current: currentPage(), total: totalPages }) }}</span>
                                <button
                                    mat-icon-button
                                    type="button"
                                    [disabled]="currentPage() === totalPages"
                                    (click)="changePage(currentPage() + 1)"
                                >
                                    <mat-icon>chevron_right</mat-icon>
                                </button>
                            </div>
                        }

                        @if (staffs().length === 0 && !loading()) {
                            @if (sortedMembers().length) {
                                <div class="empty-block">
                                    <p class="empty-title">{{ t('smartEnrollProjects.staff.noStaffAvailable') }}</p>
                                    <p class="empty-sub">
                                        {{ t('smartEnrollProjects.staff.noStaffAvailableHintBefore') }}
                                        <a routerLink="/settings/team" class="hint-here-link">{{
                                            t('smartEnrollProjects.staff.noStaffAvailableHintLink')
                                        }}</a>{{ t('smartEnrollProjects.staff.noStaffAvailableHintAfter') }}
                                    </p>
                                </div>
                            } @else {
                                <div class="empty-block">
                                    <p class="empty-title">{{ t('smartEnrollProjects.staff.noStaff') }}</p>
                                    <p class="empty-sub">{{ t('smartEnrollProjects.staff.noStaffHint') }}</p>
                                </div>
                            }

                            @if (canInvite() && canManageWorkspaceStaff() && workspaceStaffContextLoaded) {
                                <div
                                    class="workspace-limit-banner"
                                    [class.banner-ok]="hasSubscription && canAddMoreWorkspaceStaff()"
                                    [class.banner-warn]="hasSubscription && !canAddMoreWorkspaceStaff()"
                                    [class.banner-bad]="!hasSubscription"
                                >
                                    <p class="workspace-limit-text">
                                        @if (hasSubscription) {
                                            {{ t('settings.team.limit_info_1') }}
                                            <span class="font-semibold">{{
                                                selectedSubscription?.name === 'PyG' ? 'PAYG' : selectedSubscription?.name
                                            }}</span>
                                            {{ t('settings.team.limit_info_2') }}
                                            <span class="font-semibold">{{ staffLimit }}</span>
                                            {{ t('settings.team.limit_info_3') }}
                                            (<span class="font-semibold">{{ workspaceStaffCount }}/{{ staffLimit }}</span>
                                            {{ t('settings.team.used') }})
                                        } @else {
                                            {{ t('settings.team.no_plan_warning') }}
                                        }
                                        <a routerLink="/subscription-plans" class="workspace-limit-plans">{{
                                            t('settings.team.view_plans')
                                        }}</a>
                                    </p>
                                </div>

                                <div class="inline-workspace-form" [formGroup]="workspaceStaffForm">
                                    <h3 class="inline-form-title">{{ t('smartEnrollProjects.staff.inlineWorkspaceTitle') }}</h3>
                                    <p class="inline-form-sub">{{ t('smartEnrollProjects.staff.inlineWorkspaceSubtitle') }}</p>

                                    <label class="inline-label">{{ t('settings.team.full_name') }}</label>
                                    <input class="inline-input" type="text" formControlName="name" />

                                    <label class="inline-label">{{ t('settings.team.email') }}</label>
                                    <input class="inline-input" type="email" formControlName="email" />

                                    <div class="inline-grid-2">
                                        <div>
                                            <label class="inline-label">{{ t('settings.team.country_code') }}</label>
                                            <select class="inline-select" formControlName="countryCode">
                                                @for (c of countryCodes; track c.dialCode + c.name) {
                                                    <option [value]="c.dialCode">{{ c.dialCode }} {{ c.name }}</option>
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            <label class="inline-label">{{ t('settings.team.phone') }}</label>
                                            <input class="inline-input" type="tel" formControlName="phone" />
                                        </div>
                                    </div>

                                    <label class="inline-label">{{ t('settings.team.role') }}</label>
                                    <select class="inline-select" formControlName="role">
                                        <option value="empleado">{{ t('settings.team.role_empleado') }}</option>
                                        <option value="contabilidad">{{ t('settings.team.role_contabilidad') }}</option>
                                        <option value="desarrollador">{{ t('settings.team.role_desarrollador') }}</option>
                                        <option value="administrador">{{ t('settings.team.role_administrador') }}</option>
                                    </select>

                                    <div class="inline-form-actions">
                                        <button
                                            mat-flat-button
                                            color="primary"
                                            type="button"
                                            class="btn-submit-workspace"
                                            [disabled]="
                                                isSavingWorkspaceStaff ||
                                                workspaceStaffForm.invalid ||
                                                !canAddMoreWorkspaceStaff()
                                            "
                                            (click)="saveWorkspaceStaff()"
                                        >
                                            @if (!isSavingWorkspaceStaff) {
                                                {{ t('settings.team.save') }}
                                            } @else {
                                                <mat-progress-spinner diameter="20" mode="indeterminate"></mat-progress-spinner>
                                            }
                                        </button>
                                    </div>
                                </div>
                            }
                        }
                    </section>
                }

                <footer class="footer-actions">
                    <button mat-stroked-button type="button" class="btn-outline" (click)="goBack()">
                        {{ t('smartEnrollProjects.staff.goBack') }}
                    </button>
                    @if (canInvite()) {
                        <button
                            mat-flat-button
                            color="primary"
                            type="button"
                            [disabled]="isSavingDisabled"
                            (click)="createMembers()"
                        >
                            @if (!saving()) {
                                {{ t('smartEnrollProjects.staff.sendInvitations') }}
                            } @else {
                                <mat-progress-spinner diameter="20" mode="indeterminate"></mat-progress-spinner>
                            }
                        </button>
                    }
                </footer>
            }
        </div>
    </div>
</ng-container>
`, styles: ["/* src/app/modules/smart-enroll/projects/project-staff/project-staff.component.scss */\n:host {\n  display: block;\n}\n.page {\n  min-height: 100%;\n  background: rgb(249, 250, 251);\n}\n.inner {\n  max-width: 56rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 3rem;\n}\n.hero {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.title {\n  margin: 0;\n  font-size: 1.75rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.subtitle {\n  margin: 0.35rem 0 0;\n  font-size: 0.95rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n  max-width: 40rem;\n}\n.project-name {\n  margin: 0.5rem 0 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n}\n.doc-link {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  text-decoration: none;\n  align-self: center;\n}\n.doc-link:hover {\n  text-decoration: underline;\n}\n.banner-error {\n  border-radius: 12px;\n  border: 1px solid rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(127, 29, 29);\n  padding: 0.85rem 1rem;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n.state-loading {\n  display: flex;\n  justify-content: center;\n  padding: 3rem;\n}\n.panel {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 0.5rem 0 1rem;\n  margin-bottom: 1.5rem;\n}\n.section-title {\n  margin: 1.5rem 0 0.25rem;\n  font-size: 1.1rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.section-sub {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: rgb(107, 114, 128);\n}\n.grid-row {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.35rem;\n  padding: 0.65rem 1rem;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .members-head,\n  .members-row {\n    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(5.5rem, auto);\n  }\n  .invite-head,\n  .invite-row {\n    grid-template-columns: auto minmax(0, 2fr) minmax(0, 1.5fr) minmax(0, 1fr) minmax(6.5rem, auto);\n  }\n}\n.th {\n  font-size: 0.72rem;\n  font-weight: 650;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: rgb(107, 114, 128);\n}\n.th-actions {\n  width: 2.5rem;\n}\n.hide-sm {\n  display: none;\n}\n@media (min-width: 768px) {\n  .hide-sm {\n    display: block;\n  }\n  .show-sm {\n    display: none;\n  }\n}\n.data-row,\n.invite-row {\n  border-top: 1px solid rgb(243, 244, 246);\n}\n.invite-row.selected {\n  background: rgb(249, 250, 251);\n}\n.cell-user {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  min-width: 0;\n}\n.avatar {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(59, 130, 246),\n      rgb(37, 99, 235));\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.name {\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  font-size: 0.9rem;\n}\n.muted {\n  font-size: 0.8rem;\n  color: rgb(107, 114, 128);\n}\n.cell-muted {\n  font-size: 0.85rem;\n  color: rgb(75, 85, 99);\n}\n.cell-role {\n  font-size: 0.85rem;\n}\n.role-trigger {\n  border: none;\n  background: transparent;\n  padding: 0.25rem 0;\n  font: inherit;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  cursor: pointer;\n  text-align: left;\n}\n.cell-invite {\n  font-size: 0.85rem;\n  color: rgb(75, 85, 99);\n}\n.cell-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n.cell-actions.end {\n  justify-content: flex-end;\n}\n.chk {\n  margin-right: 0.25rem;\n}\n.chk-spacer {\n  width: 2.5rem;\n}\n.btn-add {\n  border-radius: 999px;\n}\n.pager {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n}\n.pager-label {\n  font-size: 0.85rem;\n  color: rgb(75, 85, 99);\n}\n.empty-block {\n  padding: 1.5rem 1rem 0.5rem;\n  text-align: center;\n}\n.empty-title {\n  margin: 0;\n  font-weight: 650;\n  color: rgb(31, 41, 55);\n}\n.empty-sub {\n  margin: 0.35rem 0 0;\n  font-size: 0.9rem;\n  color: rgb(107, 114, 128);\n}\n.hint-here-link {\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.hint-here-link:hover {\n  color: rgb(29, 78, 216);\n}\n.empty-cta {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 1rem;\n}\n.footer-actions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.btn-outline {\n  border-radius: 999px;\n  border-color: rgb(17, 24, 39) !important;\n  color: rgb(17, 24, 39) !important;\n}\n.role-select {\n  max-width: 100%;\n  border-radius: 8px;\n  border: 1px solid rgb(229, 231, 235);\n  padding: 0.35rem 0.5rem;\n  font-size: 0.85rem;\n  background: #fff;\n  color: rgb(17, 24, 39);\n}\n.link-danger {\n  border: none;\n  background: none;\n  padding: 0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgb(220, 38, 38);\n  cursor: pointer;\n  text-decoration: underline;\n}\n.link-danger:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.workspace-limit-banner {\n  margin: 0.75rem 1rem 1rem;\n  padding: 0.85rem 1rem;\n  border-radius: 12px;\n  border: 1px solid rgb(229, 231, 235);\n  font-size: 0.85rem;\n  line-height: 1.45;\n}\n.workspace-limit-banner.banner-ok {\n  background: rgb(239, 246, 255);\n  border-color: rgb(191, 219, 254);\n  color: rgb(30, 58, 138);\n}\n.workspace-limit-banner.banner-warn {\n  background: rgb(255, 251, 235);\n  border-color: rgb(253, 230, 138);\n  color: rgb(120, 53, 15);\n}\n.workspace-limit-banner.banner-bad {\n  background: rgb(254, 242, 242);\n  border-color: rgb(254, 202, 202);\n  color: rgb(127, 29, 29);\n}\n.workspace-limit-text {\n  margin: 0;\n}\n.workspace-limit-plans {\n  margin-left: 0.25rem;\n  font-weight: 600;\n  text-decoration: underline;\n  color: inherit;\n}\n.inline-workspace-form {\n  margin: 0 1rem 1.25rem;\n  padding: 1rem 1.1rem 1.15rem;\n  border-radius: 12px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(252, 252, 252);\n}\n.inline-form-title {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.inline-form-sub {\n  margin: 0 0 1rem;\n  font-size: 0.85rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.4;\n}\n.inline-label {\n  display: block;\n  margin: 0.65rem 0 0.25rem;\n  font-size: 0.72rem;\n  font-weight: 650;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: rgb(107, 114, 128);\n}\n.inline-input,\n.inline-select {\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  padding: 0.5rem 0.65rem;\n  font-size: 0.9rem;\n  background: #fff;\n  color: rgb(17, 24, 39);\n}\n.inline-grid-2 {\n  display: grid;\n  gap: 0.5rem 0.75rem;\n}\n@media (min-width: 640px) {\n  .inline-grid-2 {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.inline-form-actions {\n  margin-top: 1rem;\n}\n.btn-submit-workspace {\n  border-radius: 999px;\n  width: 100%;\n}\n@media (min-width: 480px) {\n  .btn-submit-workspace {\n    width: auto;\n    min-width: 8rem;\n  }\n}\n/*# sourceMappingURL=project-staff.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectStaffComponent, { className: "ProjectStaffComponent", filePath: "src/app/modules/smart-enroll/projects/project-staff/project-staff.component.ts", lineNumber: 42 });
})();
export {
  ProjectStaffComponent
};
//# sourceMappingURL=chunk-UGDHSU4T.js.map
