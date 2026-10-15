import {
  SmartEnrollProjectsService
} from "./chunk-RNN3ZZ7Z.js";
import {
  resolveStaffSaveErrorMessage
} from "./chunk-KXUDERQQ.js";
import {
  SettingsService
} from "./chunk-YRVPYELH.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-O4LKJP5L.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-SE6MSEYG.js";
import "./chunk-KRS47QLN.js";
import {
  CountryService
} from "./chunk-QDHC3TI3.js";
import "./chunk-F5BVEUVX.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CTAWHRE6.js";
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
  ɵɵpureFunction3,
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
} from "./chunk-I5BUD46C.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/projects/project-staff/project-staff.component.ts
var _c0 = (a0, a1) => ({ current: a0, total: a1 });
var _c1 = (a0, a1, a2) => ({ "border-blue-200/90 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-950/30": a0, "border-amber-200/90 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/30": a1, "border-red-200/90 bg-red-50 dark:border-red-900/50 dark:bg-red-950/30": a2 });
var _c2 = (a0, a1, a2) => ({ "text-blue-600 dark:text-blue-400": a0, "text-amber-600 dark:text-amber-400": a1, "text-red-600 dark:text-red-400": a2 });
var _c3 = (a0, a1, a2) => ({ "text-blue-950 dark:text-blue-100": a0, "text-amber-950 dark:text-amber-100": a1, "text-red-950 dark:text-red-100": a2 });
var _c4 = (a0, a1, a2) => ({ "text-blue-700 dark:text-blue-300": a0, "text-amber-700 dark:text-amber-300": a1, "text-red-700 dark:text-red-300": a2 });
var _forTrack0 = ($index, $item) => $item._id;
var _forTrack1 = ($index, $item) => $item.dialCode + $item.name;
function ProjectStaffComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.project().name, " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon", 11);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.loadError()));
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-progress-spinner", 13);
    \u0275\u0275elementEnd();
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const member_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.lastActiveDisplay(member_r3.lastActive), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.list.neverLoggedIn"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const member_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.lastActiveDisplay(member_r3.lastActive), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.list.neverLoggedIn"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
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
function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
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
function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 35);
    \u0275\u0275listener("change", function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_15_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const member_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onMemberRoleChange(member_r3, $event));
    });
    \u0275\u0275repeaterCreate(1, ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_15_For_2_Template, 2, 2, "option", 36, \u0275\u0275repeaterTrackByIdentity);
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
function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.accepted"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.invited"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_20_Template_button_click_0_listener() {
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
function ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "div", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275template(8, ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_8_Template, 1, 1)(9, ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 28);
    \u0275\u0275template(11, ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_11_Template, 1, 1)(12, ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_12_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 29);
    \u0275\u0275template(14, ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_14_Template, 2, 1, "span", 30)(15, ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_15_Template, 3, 2, "select", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 32);
    \u0275\u0275template(17, ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_17_Template, 1, 1)(18, ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_18_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 33);
    \u0275\u0275template(20, ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Conditional_20_Template, 2, 2, "button", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatAcronym(member_r3.staff == null ? null : member_r3.staff.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", member_r3.staff == null ? null : member_r3.staff.name, " ");
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
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.noMembers"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.noMembersHint"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 47);
    \u0275\u0275listener("change", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_7_Template_mat_checkbox_change_0_listener() {
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
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 44);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_For_18_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
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
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_For_18_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.addToProject"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_For_18_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 54);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "mat-checkbox", 49);
    \u0275\u0275listener("change", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_For_18_Template_mat_checkbox_change_1_listener() {
      const staff_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.toggleSelection(staff_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 23)(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25)(6, "div", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 51);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 52)(13, "select", 35);
    \u0275\u0275listener("change", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_For_18_Template_select_change_13_listener($event) {
      const staff_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onInviteRoleChange(staff_r10, $event));
    });
    \u0275\u0275repeaterCreate(14, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_For_18_For_15_Template, 2, 2, "option", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 33)(17, "button", 53);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_For_18_Template_button_click_17_listener() {
      const staff_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.createMember(staff_r10));
    });
    \u0275\u0275template(18, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_For_18_Conditional_18_Template, 1, 1)(19, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_For_18_Conditional_19_Template, 1, 0, "mat-progress-spinner", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const staff_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("is-selected", staff_r10.selected);
    \u0275\u0275advance();
    \u0275\u0275property("checked", staff_r10.selected)("disabled", ctx_r0.isInviting(staff_r10) || ctx_r0.saving());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatAcronym(staff_r10.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", staff_r10.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", staff_r10.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", staff_r10.email, " ");
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
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "button", 55);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.changePage(ctx_r0.currentPage() - 1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 55);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_19_Template_button_click_6_listener() {
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
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "a", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.noStaffAvailable"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.noStaffAvailableHintBefore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.noStaffAvailableHintLink"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", t_r4("smartEnrollProjects.staff.noStaffAvailableHintAfter"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.noStaff"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.noStaffHint"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "span", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 78);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 78);
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
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("settings.team.no_plan_warning"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
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
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("settings.team.save"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 54);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "mat-icon", 59);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 60);
    \u0275\u0275template(4, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_Conditional_4_Template, 10, 8)(5, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_Conditional_5_Template, 1, 1);
    \u0275\u0275elementStart(6, "a", 61);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 62)(9, "h3", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 63);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 64);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 65);
    \u0275\u0275elementStart(16, "label", 64);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 66);
    \u0275\u0275elementStart(19, "div", 67)(20, "div")(21, "label", 68);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 69);
    \u0275\u0275repeaterCreate(24, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_For_25_Template, 2, 3, "option", 36, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "label", 68);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "label", 64);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 71)(33, "option", 72);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 73);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 74);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 75);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 76)(42, "button", 77);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.saveWorkspaceStaff());
    });
    \u0275\u0275template(43, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_Conditional_43_Template, 1, 1)(44, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_Conditional_44_Template, 1, 0, "mat-progress-spinner", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(20, _c1, ctx_r0.hasSubscription && ctx_r0.canAddMoreWorkspaceStaff(), ctx_r0.hasSubscription && !ctx_r0.canAddMoreWorkspaceStaff(), !ctx_r0.hasSubscription));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(24, _c2, ctx_r0.hasSubscription && ctx_r0.canAddMoreWorkspaceStaff(), ctx_r0.hasSubscription && !ctx_r0.canAddMoreWorkspaceStaff(), !ctx_r0.hasSubscription));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(28, _c3, ctx_r0.hasSubscription && ctx_r0.canAddMoreWorkspaceStaff(), ctx_r0.hasSubscription && !ctx_r0.canAddMoreWorkspaceStaff(), !ctx_r0.hasSubscription));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasSubscription ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(32, _c4, ctx_r0.hasSubscription && ctx_r0.canAddMoreWorkspaceStaff(), ctx_r0.hasSubscription && !ctx_r0.canAddMoreWorkspaceStaff(), !ctx_r0.hasSubscription));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("settings.team.view_plans"));
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.workspaceStaffForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.inlineWorkspaceTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.inlineWorkspaceSubtitle"), " ");
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
    \u0275\u0275conditional(!ctx_r0.isSavingWorkspaceStaff ? 43 : 44);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_0_Template, 8, 4, "div", 19)(1, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_1_Template, 5, 2, "div", 19)(2, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Conditional_2_Template, 45, 36);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r0.sortedMembers().length ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.canInvite() && ctx_r0.canManageWorkspaceStaff() && ctx_r0.workspaceStaffContextLoaded ? 2 : -1);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "h2", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "section", 14)(6, "div", 42);
    \u0275\u0275template(7, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_7_Template, 1, 3, "mat-checkbox", 43)(8, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_8_Template, 1, 0, "span", 44);
    \u0275\u0275elementStart(9, "span", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 16);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 17);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(17, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_For_18_Template, 20, 12, "div", 45, _forTrack0);
    \u0275\u0275template(19, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_19_Template, 9, 6, "div", 46)(20, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Conditional_20_Template, 3, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.inviteTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.inviteSubtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.staffs().length ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.username"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.role"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.addToProject"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.paginatedStaff());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalPages > 1 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.staffs().length === 0 && !ctx_r0.loading() ? 20 : -1);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.sendInvitations"), " ");
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 54);
  }
}
function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.createMembers());
    });
    \u0275\u0275template(1, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_19_Conditional_1_Template, 1, 1)(2, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_19_Conditional_2_Template, 1, 0, "mat-progress-spinner", 54);
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
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(12, ProjectStaffComponent_ng_container_0_Conditional_14_For_13_Template, 21, 7, "div", 18, _forTrack0);
    \u0275\u0275template(14, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Template, 5, 2, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_15_Template, 21, 9);
    \u0275\u0275elementStart(16, "footer", 20)(17, "button", 21);
    \u0275\u0275listener("click", function ProjectStaffComponent_ng_container_0_Conditional_14_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ProjectStaffComponent_ng_container_0_Conditional_14_Conditional_19_Template, 3, 2, "button", 22);
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
    \u0275\u0275textInterpolate(t_r4("smartEnrollProjects.staff.removeFromProject"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.sortedMembers());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.sortedMembers().length && !ctx_r0.loading() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canInvite() ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.goBack"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canInvite() ? 19 : -1);
  }
}
function ProjectStaffComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "header", 3)(4, "div", 4)(5, "h1", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProjectStaffComponent_ng_container_0_Conditional_9_Template, 2, 1, "p", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ProjectStaffComponent_ng_container_0_Conditional_12_Template, 6, 3, "div", 9)(13, ProjectStaffComponent_ng_container_0_Conditional_13_Template, 2, 0, "div", 10)(14, ProjectStaffComponent_ng_container_0_Conditional_14_Template, 20, 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const t_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartEnrollProjects.staff.subtitle"), " ");
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
        const message = resolveStaffSaveErrorMessage(error, (key) => this._transloco.translate(key));
        this._snackBar.open(message, void 0, { duration: 5e3 });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectStaffComponent, selectors: [["project-staff"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "mx-auto", "w-full", "max-w-4xl", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mb-6", "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "max-w-2xl"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white", "md:text-3xl"], [1, "mt-2", "text-sm", "leading-6", "text-stone-500", "dark:text-stone-400", "md:text-base"], [1, "mt-2", "text-sm", "font-semibold", "text-stone-700", "dark:text-stone-300"], ["target", "_blank", "rel", "noopener noreferrer", 1, "inline-flex", "min-h-10", "shrink-0", "items-center", "text-sm", "font-medium", "text-indigo-600", "transition", "hover:text-indigo-500", "dark:text-indigo-400", "dark:hover:text-indigo-300", 3, "href"], ["role", "alert", 1, "mb-4", "flex", "gap-3", "rounded-xl", "border", "border-red-200/80", "bg-red-50", "px-4", "py-3", "text-sm", "dark:border-red-900/50", "dark:bg-red-950/30"], [1, "flex", "justify-center", "py-16"], [1, "shrink-0", "text-red-600", "dark:text-red-400", 2, "width", "20px", "height", "20px", "font-size", "20px"], [1, "m-0", "flex-1", "leading-relaxed", "text-red-950", "dark:text-red-100"], ["diameter", "40", "mode", "indeterminate"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70"], [1, "members-head", "hidden", "border-b", "border-stone-200/80", "bg-stone-50/50", "px-4", "py-3", "dark:border-gray-800", "dark:bg-gray-950/50", "md:grid", "md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto]", "md:gap-3", "md:px-5"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "sr-only"], [1, "members-row", "border-b", "border-stone-100", "px-4", "py-4", "last:border-b-0", "dark:border-gray-800", "md:grid", "md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto]", "md:items-center", "md:gap-3", "md:px-5", "md:py-3"], [1, "px-5", "py-10", "text-center"], [1, "mt-6", "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], ["mat-stroked-button", "", "type", "button", 1, "!min-h-11", "!rounded-xl", "!border-stone-200", "!font-medium", "dark:!border-gray-700", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "flex", "!min-h-11", "!rounded-xl", "items-center", "justify-center", "gap-2", "px-5", 3, "disabled"], [1, "flex", "min-w-0", "items-center", "gap-3"], [1, "flex", "h-8", "w-8", "shrink-0", "items-center", "justify-center", "rounded-full", "bg-gradient-to-br", "from-indigo-500", "to-indigo-600", "text-[0.65rem]", "font-bold", "text-white"], [1, "min-w-0"], [1, "truncate", "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-0.5", "text-xs", "text-stone-500", "dark:text-stone-400", "md:hidden"], [1, "hidden", "text-sm", "text-stone-600", "dark:text-stone-400", "md:block"], [1, "mt-2", "text-sm", "md:mt-0"], [1, "font-medium", "text-stone-800", "dark:text-stone-200"], [1, "w-full", "max-w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-3", "py-2", "text-sm", "text-stone-950", "outline-none", "transition", "focus:border-indigo-400", "focus:ring-2", "focus:ring-indigo-500/20", "disabled:opacity-60", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "dark:focus:border-indigo-400", "dark:focus:ring-indigo-400/20", "md:w-auto", 3, "value", "disabled"], [1, "mt-1", "text-sm", "text-stone-600", "dark:text-stone-400", "md:mt-0"], [1, "mt-2", "flex", "justify-end", "md:mt-0"], ["type", "button", 1, "text-xs", "font-semibold", "text-red-600", "underline", "underline-offset-2", "transition", "hover:text-red-500", "disabled:cursor-not-allowed", "disabled:opacity-50", "dark:text-red-400", "dark:hover:text-red-300", 3, "disabled"], [1, "w-full", "max-w-full", "rounded-xl", "border", "border-stone-200", "bg-stone-50/80", "px-3", "py-2", "text-sm", "text-stone-950", "outline-none", "transition", "focus:border-indigo-400", "focus:ring-2", "focus:ring-indigo-500/20", "disabled:opacity-60", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "dark:focus:border-indigo-400", "dark:focus:ring-indigo-400/20", "md:w-auto", 3, "change", "value", "disabled"], [3, "value"], ["type", "button", 1, "text-xs", "font-semibold", "text-red-600", "underline", "underline-offset-2", "transition", "hover:text-red-500", "disabled:cursor-not-allowed", "disabled:opacity-50", "dark:text-red-400", "dark:hover:text-red-300", 3, "click", "disabled"], [1, "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mt-8", "mb-3"], [1, "text-base", "font-semibold", "text-stone-950", "dark:text-white"], [1, "invite-head", "hidden", "border-b", "border-stone-200/80", "bg-stone-50/50", "px-4", "py-3", "dark:border-gray-800", "dark:bg-gray-950/50", "md:grid", "md:grid-cols-[auto_minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,1fr)_auto]", "md:items-center", "md:gap-3", "md:px-5"], [3, "checked", "disabled", "indeterminate"], [1, "w-10"], [1, "invite-row", "border-b", "border-stone-100", "px-4", "py-4", "last:border-b-0", "dark:border-gray-800", "md:grid", "md:grid-cols-[auto_minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,1fr)_auto]", "md:items-center", "md:gap-3", "md:px-5", "md:py-3", 3, "is-selected"], [1, "flex", "items-center", "justify-center", "gap-2", "border-t", "border-stone-100", "px-4", "py-3", "dark:border-gray-800"], [3, "change", "checked", "disabled", "indeterminate"], [1, "invite-row", "border-b", "border-stone-100", "px-4", "py-4", "last:border-b-0", "dark:border-gray-800", "md:grid", "md:grid-cols-[auto_minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,1fr)_auto]", "md:items-center", "md:gap-3", "md:px-5", "md:py-3"], [3, "change", "checked", "disabled"], [1, "mt-0.5", "truncate", "text-xs", "text-stone-500", "dark:text-stone-400", "md:hidden"], [1, "hidden", "truncate", "text-sm", "text-stone-600", "dark:text-stone-400", "md:block"], [1, "mt-2", "md:mt-0"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "!min-h-10", "!rounded-xl", "px-4", 3, "click", "disabled"], ["diameter", "20", "mode", "indeterminate"], ["mat-icon-button", "", "type", "button", 1, "!text-stone-600", "dark:!text-stone-400", 3, "click", "disabled"], [1, "text-sm", "text-stone-600", "dark:text-stone-400"], ["routerLink", "/settings/team", 1, "font-semibold", "text-indigo-600", "underline", "underline-offset-2", "dark:text-indigo-400"], [1, "mx-4", "mb-4", "flex", "gap-3", "rounded-xl", "border", "px-4", "py-3", "text-sm", "md:mx-5", 3, "ngClass"], [1, "mt-0.5", "shrink-0", 2, "width", "20px", "height", "20px", "font-size", "20px", 3, "ngClass"], [1, "m-0", "flex-1", "leading-relaxed", 3, "ngClass"], ["routerLink", "/subscription-plans", 1, "ml-1", "font-semibold", "underline", "underline-offset-2", 3, "ngClass"], [1, "mx-4", "mb-5", "rounded-xl", "border", "border-stone-200/90", "bg-stone-50/50", "p-4", "dark:border-gray-700", "dark:bg-gray-950/50", "md:mx-5", "md:p-5", 3, "formGroup"], [1, "mt-1", "text-xs", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], [1, "mt-4", "block", "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], ["type", "text", "formControlName", "name", 1, "mt-1.5", "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-white", "px-4", "text-sm", "text-stone-950", "outline-none", "transition", "focus:border-indigo-400", "focus:ring-2", "focus:ring-indigo-500/20", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "dark:focus:border-indigo-400", "dark:focus:ring-indigo-400/20"], ["type", "email", "formControlName", "email", 1, "mt-1.5", "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-white", "px-4", "text-sm", "text-stone-950", "outline-none", "transition", "focus:border-indigo-400", "focus:ring-2", "focus:ring-indigo-500/20", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "dark:focus:border-indigo-400", "dark:focus:ring-indigo-400/20"], [1, "mt-4", "grid", "gap-4", "sm:grid-cols-2"], [1, "block", "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], ["formControlName", "countryCode", 1, "mt-1.5", "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "text-sm", "text-stone-950", "outline-none", "transition", "focus:border-indigo-400", "focus:ring-2", "focus:ring-indigo-500/20", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "dark:focus:border-indigo-400", "dark:focus:ring-indigo-400/20"], ["type", "tel", "formControlName", "phone", 1, "mt-1.5", "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-white", "px-4", "text-sm", "text-stone-950", "outline-none", "transition", "focus:border-indigo-400", "focus:ring-2", "focus:ring-indigo-500/20", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "dark:focus:border-indigo-400", "dark:focus:ring-indigo-400/20"], ["formControlName", "role", 1, "mt-1.5", "h-11", "w-full", "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "text-sm", "text-stone-950", "outline-none", "transition", "focus:border-indigo-400", "focus:ring-2", "focus:ring-indigo-500/20", "dark:border-gray-700", "dark:bg-gray-950/50", "dark:text-stone-100", "dark:focus:border-indigo-400", "dark:focus:ring-indigo-400/20", "sm:max-w-xs"], ["value", "empleado"], ["value", "contabilidad"], ["value", "desarrollador"], ["value", "administrador"], [1, "mt-5"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "!min-h-11", "w-full", "!rounded-xl", "px-5", "sm:w-auto", 3, "click", "disabled"], [1, "font-semibold"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "flex", "!min-h-11", "!rounded-xl", "items-center", "justify-center", "gap-2", "px-5", 3, "click", "disabled"]], template: function ProjectStaffComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProjectStaffComponent_ng_container_0_Template, 15, 7, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
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
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.invite-row.is-selected[_ngcontent-%COMP%] {\n  background: rgba(238, 242, 255, 0.5);\n}\n.dark[_nghost-%COMP%]   .invite-row.is-selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .invite-row.is-selected[_ngcontent-%COMP%] {\n  background: rgba(30, 27, 75, 0.2);\n}\n/*# sourceMappingURL=project-staff.component.css.map */"] });
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
    ], template: `<ng-container *transloco="let t">\r
    <div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
        <div class="mx-auto w-full max-w-4xl px-5 py-8 md:px-8 md:py-10">\r
            <header class="mb-6 flex flex-wrap items-start justify-between gap-4">\r
                <div class="max-w-2xl">\r
                    <h1 class="text-2xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-3xl">\r
                        {{ t('smartEnrollProjects.staff.title') }}\r
                    </h1>\r
                    <p class="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400 md:text-base">\r
                        {{ t('smartEnrollProjects.staff.subtitle') }}\r
                    </p>\r
                    @if (project()?.name) {\r
                        <p class="mt-2 text-sm font-semibold text-stone-700 dark:text-stone-300">\r
                            {{ project()!.name }}\r
                        </p>\r
                    }\r
                </div>\r
                <a\r
                    class="inline-flex min-h-10 shrink-0 items-center text-sm font-medium text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"\r
                    [href]="docUrl()"\r
                    target="_blank"\r
                    rel="noopener noreferrer"\r
                >\r
                    {{ t('smartEnrollProjects.staff.documentation') }}\r
                </a>\r
            </header>\r
\r
            @if (loadError()) {\r
                <div\r
                    class="mb-4 flex gap-3 rounded-xl border border-red-200/80 bg-red-50 px-4 py-3 text-sm dark:border-red-900/50 dark:bg-red-950/30"\r
                    role="alert"\r
                >\r
                    <mat-icon class="shrink-0 text-red-600 dark:text-red-400" style="width: 20px; height: 20px; font-size: 20px"\r
                        >error_outline</mat-icon\r
                    >\r
                    <p class="m-0 flex-1 leading-relaxed text-red-950 dark:text-red-100">{{ loadError()! | transloco }}</p>\r
                </div>\r
            }\r
\r
            @if (loading() && !projectMembers().length && !staffs().length) {\r
                <div class="flex justify-center py-16">\r
                    <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>\r
                </div>\r
            } @else if (project()) {\r
                <!-- Current members -->\r
                <section\r
                    class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
                >\r
                    <div\r
                        class="members-head hidden border-b border-stone-200/80 bg-stone-50/50 px-4 py-3 dark:border-gray-800 dark:bg-gray-950/50 md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-3 md:px-5"\r
                    >\r
                        <span class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">{{\r
                            t('smartEnrollProjects.staff.username')\r
                        }}</span>\r
                        <span class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">{{\r
                            t('smartEnrollProjects.staff.lastActive')\r
                        }}</span>\r
                        <span class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">{{\r
                            t('smartEnrollProjects.staff.role')\r
                        }}</span>\r
                        <span class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">{{\r
                            t('smartEnrollProjects.staff.invitation')\r
                        }}</span>\r
                        <span class="sr-only">{{ t('smartEnrollProjects.staff.removeFromProject') }}</span>\r
                    </div>\r
\r
                    @for (member of sortedMembers(); track member._id) {\r
                        <div\r
                            class="members-row border-b border-stone-100 px-4 py-4 last:border-b-0 dark:border-gray-800 md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] md:items-center md:gap-3 md:px-5 md:py-3"\r
                        >\r
                            <div class="flex min-w-0 items-center gap-3">\r
                                <div\r
                                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-[0.65rem] font-bold text-white"\r
                                >\r
                                    {{ formatAcronym(member.staff?.name) }}\r
                                </div>\r
                                <div class="min-w-0">\r
                                    <div class="truncate text-sm font-semibold text-stone-950 dark:text-white">\r
                                        {{ member.staff?.name }}\r
                                    </div>\r
                                    <div class="mt-0.5 text-xs text-stone-500 dark:text-stone-400 md:hidden">\r
                                        @if (member.lastActive) {\r
                                            {{ lastActiveDisplay(member.lastActive) }}\r
                                        } @else {\r
                                            {{ t('smartEnrollProjects.list.neverLoggedIn') }}\r
                                        }\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="hidden text-sm text-stone-600 dark:text-stone-400 md:block">\r
                                @if (member.lastActive) {\r
                                    {{ lastActiveDisplay(member.lastActive) }}\r
                                } @else {\r
                                    {{ t('smartEnrollProjects.list.neverLoggedIn') }}\r
                                }\r
                            </div>\r
                            <div class="mt-2 text-sm md:mt-0">\r
                                @if (!canUpdateRole(member)) {\r
                                    <span class="font-medium text-stone-800 dark:text-stone-200">{{\r
                                        t('smartEnrollProjects.staff.roles.' + member.role)\r
                                    }}</span>\r
                                } @else {\r
                                    <select\r
                                        class="w-full max-w-full rounded-xl border border-stone-200 bg-stone-50/80 px-3 py-2 text-sm text-stone-950 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60 dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20 md:w-auto"\r
                                        [value]="member.role"\r
                                        [disabled]="isUpdatingOrRemoving(member)"\r
                                        (change)="onMemberRoleChange(member, $event)"\r
                                    >\r
                                        @for (role of roles; track role) {\r
                                            <option [value]="role">{{ t('smartEnrollProjects.staff.roles.' + role) }}</option>\r
                                        }\r
                                    </select>\r
                                }\r
                            </div>\r
                            <div class="mt-1 text-sm text-stone-600 dark:text-stone-400 md:mt-0">\r
                                @if (member.acceptedAt) {\r
                                    {{ t('smartEnrollProjects.staff.accepted') }}\r
                                } @else {\r
                                    {{ t('smartEnrollProjects.staff.invited') }}\r
                                }\r
                            </div>\r
                            <div class="mt-2 flex justify-end md:mt-0">\r
                                @if (canRemoveMember(member)) {\r
                                    <button\r
                                        type="button"\r
                                        class="text-xs font-semibold text-red-600 underline underline-offset-2 transition hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-red-400 dark:hover:text-red-300"\r
                                        [disabled]="isUpdatingOrRemoving(member)"\r
                                        (click)="removeMember(member)"\r
                                    >\r
                                        {{ t('smartEnrollProjects.staff.removeFromProject') }}\r
                                    </button>\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
\r
                    @if (!sortedMembers().length && !loading()) {\r
                        <div class="px-5 py-10 text-center">\r
                            <p class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                {{ t('smartEnrollProjects.staff.noMembers') }}\r
                            </p>\r
                            <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                {{ t('smartEnrollProjects.staff.noMembersHint') }}\r
                            </p>\r
                        </div>\r
                    }\r
                </section>\r
\r
                @if (canInvite()) {\r
                    <div class="mt-8 mb-3">\r
                        <h2 class="text-base font-semibold text-stone-950 dark:text-white">\r
                            {{ t('smartEnrollProjects.staff.inviteTitle') }}\r
                        </h2>\r
                        <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                            {{ t('smartEnrollProjects.staff.inviteSubtitle') }}\r
                        </p>\r
                    </div>\r
\r
                    <section\r
                        class="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/70"\r
                    >\r
                        <div\r
                            class="invite-head hidden border-b border-stone-200/80 bg-stone-50/50 px-4 py-3 dark:border-gray-800 dark:bg-gray-950/50 md:grid md:grid-cols-[auto_minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,1fr)_auto] md:items-center md:gap-3 md:px-5"\r
                        >\r
                            @if (staffs().length) {\r
                                <mat-checkbox\r
                                    [checked]="isAllSelected"\r
                                    [disabled]="saving()"\r
                                    [indeterminate]="!isAllSelected && hasSelectedStaff"\r
                                    (change)="selectAll()"\r
                                ></mat-checkbox>\r
                            } @else {\r
                                <span class="w-10"></span>\r
                            }\r
                            <span class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">{{\r
                                t('smartEnrollProjects.staff.username')\r
                            }}</span>\r
                            <span class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">{{\r
                                t('smartEnrollProjects.staff.email')\r
                            }}</span>\r
                            <span class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">{{\r
                                t('smartEnrollProjects.staff.role')\r
                            }}</span>\r
                            <span class="sr-only">{{ t('smartEnrollProjects.staff.addToProject') }}</span>\r
                        </div>\r
\r
                        @for (staff of paginatedStaff(); track staff._id) {\r
                            <div\r
                                class="invite-row border-b border-stone-100 px-4 py-4 last:border-b-0 dark:border-gray-800 md:grid md:grid-cols-[auto_minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,1fr)_auto] md:items-center md:gap-3 md:px-5 md:py-3"\r
                                [class.is-selected]="staff.selected"\r
                            >\r
                                <mat-checkbox\r
                                    [checked]="staff.selected"\r
                                    [disabled]="isInviting(staff) || saving()"\r
                                    (change)="toggleSelection(staff)"\r
                                ></mat-checkbox>\r
                                <div class="flex min-w-0 items-center gap-3">\r
                                    <div\r
                                        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-[0.65rem] font-bold text-white"\r
                                    >\r
                                        {{ formatAcronym(staff.name) }}\r
                                    </div>\r
                                    <div class="min-w-0">\r
                                        <div class="truncate text-sm font-semibold text-stone-950 dark:text-white">\r
                                            {{ staff.name }}\r
                                        </div>\r
                                        <div class="mt-0.5 truncate text-xs text-stone-500 dark:text-stone-400 md:hidden">\r
                                            {{ staff.email }}\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                                <div class="hidden truncate text-sm text-stone-600 dark:text-stone-400 md:block">\r
                                    {{ staff.email }}\r
                                </div>\r
                                <div class="mt-2 md:mt-0">\r
                                    <select\r
                                        class="w-full max-w-full rounded-xl border border-stone-200 bg-stone-50/80 px-3 py-2 text-sm text-stone-950 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60 dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20 md:w-auto"\r
                                        [value]="staff.role || 'viewer'"\r
                                        [disabled]="isInviting(staff) || saving()"\r
                                        (change)="onInviteRoleChange(staff, $event)"\r
                                    >\r
                                        @for (role of roles; track role) {\r
                                            <option [value]="role">{{ t('smartEnrollProjects.staff.roles.' + role) }}</option>\r
                                        }\r
                                    </select>\r
                                </div>\r
                                <div class="mt-2 flex justify-end md:mt-0">\r
                                    <button\r
                                        mat-flat-button\r
                                        color="primary"\r
                                        type="button"\r
                                        class="!min-h-10 !rounded-xl px-4"\r
                                        [disabled]="!canInvite() || isInviting(staff) || saving()"\r
                                        (click)="createMember(staff)"\r
                                    >\r
                                        @if (!isInviting(staff)) {\r
                                            {{ t('smartEnrollProjects.staff.addToProject') }}\r
                                        } @else {\r
                                            <mat-progress-spinner diameter="20" mode="indeterminate"></mat-progress-spinner>\r
                                        }\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        }\r
\r
                        @if (totalPages > 1) {\r
                            <div class="flex items-center justify-center gap-2 border-t border-stone-100 px-4 py-3 dark:border-gray-800">\r
                                <button\r
                                    mat-icon-button\r
                                    type="button"\r
                                    class="!text-stone-600 dark:!text-stone-400"\r
                                    [disabled]="currentPage() === 1"\r
                                    (click)="changePage(currentPage() - 1)"\r
                                >\r
                                    <mat-icon>chevron_left</mat-icon>\r
                                </button>\r
                                <span class="text-sm text-stone-600 dark:text-stone-400">{{\r
                                    t('smartEnrollProjects.staff.page', { current: currentPage(), total: totalPages })\r
                                }}</span>\r
                                <button\r
                                    mat-icon-button\r
                                    type="button"\r
                                    class="!text-stone-600 dark:!text-stone-400"\r
                                    [disabled]="currentPage() === totalPages"\r
                                    (click)="changePage(currentPage() + 1)"\r
                                >\r
                                    <mat-icon>chevron_right</mat-icon>\r
                                </button>\r
                            </div>\r
                        }\r
\r
                        @if (staffs().length === 0 && !loading()) {\r
                            @if (sortedMembers().length) {\r
                                <div class="px-5 py-10 text-center">\r
                                    <p class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                        {{ t('smartEnrollProjects.staff.noStaffAvailable') }}\r
                                    </p>\r
                                    <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartEnrollProjects.staff.noStaffAvailableHintBefore') }}\r
                                        <a\r
                                            routerLink="/settings/team"\r
                                            class="font-semibold text-indigo-600 underline underline-offset-2 dark:text-indigo-400"\r
                                            >{{ t('smartEnrollProjects.staff.noStaffAvailableHintLink') }}</a\r
                                        >{{ t('smartEnrollProjects.staff.noStaffAvailableHintAfter') }}\r
                                    </p>\r
                                </div>\r
                            } @else {\r
                                <div class="px-5 py-10 text-center">\r
                                    <p class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                        {{ t('smartEnrollProjects.staff.noStaff') }}\r
                                    </p>\r
                                    <p class="mt-1 text-sm text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartEnrollProjects.staff.noStaffHint') }}\r
                                    </p>\r
                                </div>\r
                            }\r
\r
                            @if (canInvite() && canManageWorkspaceStaff() && workspaceStaffContextLoaded) {\r
                                <div\r
                                    class="mx-4 mb-4 flex gap-3 rounded-xl border px-4 py-3 text-sm md:mx-5"\r
                                    [ngClass]="{\r
                                        'border-blue-200/90 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-950/30':\r
                                            hasSubscription && canAddMoreWorkspaceStaff(),\r
                                        'border-amber-200/90 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-950/30':\r
                                            hasSubscription && !canAddMoreWorkspaceStaff(),\r
                                        'border-red-200/90 bg-red-50 dark:border-red-900/50 dark:bg-red-950/30': !hasSubscription,\r
                                    }"\r
                                >\r
                                    <mat-icon\r
                                        class="mt-0.5 shrink-0"\r
                                        [ngClass]="{\r
                                            'text-blue-600 dark:text-blue-400': hasSubscription && canAddMoreWorkspaceStaff(),\r
                                            'text-amber-600 dark:text-amber-400': hasSubscription && !canAddMoreWorkspaceStaff(),\r
                                            'text-red-600 dark:text-red-400': !hasSubscription,\r
                                        }"\r
                                        style="width: 20px; height: 20px; font-size: 20px"\r
                                        >info</mat-icon\r
                                    >\r
                                    <p\r
                                        class="m-0 flex-1 leading-relaxed"\r
                                        [ngClass]="{\r
                                            'text-blue-950 dark:text-blue-100': hasSubscription && canAddMoreWorkspaceStaff(),\r
                                            'text-amber-950 dark:text-amber-100': hasSubscription && !canAddMoreWorkspaceStaff(),\r
                                            'text-red-950 dark:text-red-100': !hasSubscription,\r
                                        }"\r
                                    >\r
                                        @if (hasSubscription) {\r
                                            {{ t('settings.team.limit_info_1') }}\r
                                            <span class="font-semibold">{{\r
                                                selectedSubscription?.name === 'PyG' ? 'PAYG' : selectedSubscription?.name\r
                                            }}</span>\r
                                            {{ t('settings.team.limit_info_2') }}\r
                                            <span class="font-semibold">{{ staffLimit }}</span>\r
                                            {{ t('settings.team.limit_info_3') }}\r
                                            (<span class="font-semibold">{{ workspaceStaffCount }}/{{ staffLimit }}</span>\r
                                            {{ t('settings.team.used') }})\r
                                        } @else {\r
                                            {{ t('settings.team.no_plan_warning') }}\r
                                        }\r
                                        <a\r
                                            routerLink="/subscription-plans"\r
                                            class="ml-1 font-semibold underline underline-offset-2"\r
                                            [ngClass]="{\r
                                                'text-blue-700 dark:text-blue-300': hasSubscription && canAddMoreWorkspaceStaff(),\r
                                                'text-amber-700 dark:text-amber-300': hasSubscription && !canAddMoreWorkspaceStaff(),\r
                                                'text-red-700 dark:text-red-300': !hasSubscription,\r
                                            }"\r
                                            >{{ t('settings.team.view_plans') }}</a\r
                                        >\r
                                    </p>\r
                                </div>\r
\r
                                <div\r
                                    class="mx-4 mb-5 rounded-xl border border-stone-200/90 bg-stone-50/50 p-4 dark:border-gray-700 dark:bg-gray-950/50 md:mx-5 md:p-5"\r
                                    [formGroup]="workspaceStaffForm"\r
                                >\r
                                    <h3 class="text-sm font-semibold text-stone-950 dark:text-white">\r
                                        {{ t('smartEnrollProjects.staff.inlineWorkspaceTitle') }}\r
                                    </h3>\r
                                    <p class="mt-1 text-xs leading-relaxed text-stone-500 dark:text-stone-400">\r
                                        {{ t('smartEnrollProjects.staff.inlineWorkspaceSubtitle') }}\r
                                    </p>\r
\r
                                    <label class="mt-4 block text-sm font-semibold text-stone-950 dark:text-white">{{\r
                                        t('settings.team.full_name')\r
                                    }}</label>\r
                                    <input\r
                                        class="mt-1.5 h-11 w-full rounded-xl border border-stone-200 bg-white px-4 text-sm text-stone-950 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20"\r
                                        type="text"\r
                                        formControlName="name"\r
                                    />\r
\r
                                    <label class="mt-4 block text-sm font-semibold text-stone-950 dark:text-white">{{\r
                                        t('settings.team.email')\r
                                    }}</label>\r
                                    <input\r
                                        class="mt-1.5 h-11 w-full rounded-xl border border-stone-200 bg-white px-4 text-sm text-stone-950 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20"\r
                                        type="email"\r
                                        formControlName="email"\r
                                    />\r
\r
                                    <div class="mt-4 grid gap-4 sm:grid-cols-2">\r
                                        <div>\r
                                            <label class="block text-sm font-semibold text-stone-950 dark:text-white">{{\r
                                                t('settings.team.country_code')\r
                                            }}</label>\r
                                            <select\r
                                                class="mt-1.5 h-11 w-full rounded-xl border border-stone-200 bg-white px-3 text-sm text-stone-950 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20"\r
                                                formControlName="countryCode"\r
                                            >\r
                                                @for (c of countryCodes; track c.dialCode + c.name) {\r
                                                    <option [value]="c.dialCode">{{ c.dialCode }} {{ c.name }}</option>\r
                                                }\r
                                            </select>\r
                                        </div>\r
                                        <div>\r
                                            <label class="block text-sm font-semibold text-stone-950 dark:text-white">{{\r
                                                t('settings.team.phone')\r
                                            }}</label>\r
                                            <input\r
                                                class="mt-1.5 h-11 w-full rounded-xl border border-stone-200 bg-white px-4 text-sm text-stone-950 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20"\r
                                                type="tel"\r
                                                formControlName="phone"\r
                                            />\r
                                        </div>\r
                                    </div>\r
\r
                                    <label class="mt-4 block text-sm font-semibold text-stone-950 dark:text-white">{{\r
                                        t('settings.team.role')\r
                                    }}</label>\r
                                    <select\r
                                        class="mt-1.5 h-11 w-full rounded-xl border border-stone-200 bg-white px-3 text-sm text-stone-950 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-950/50 dark:text-stone-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/20 sm:max-w-xs"\r
                                        formControlName="role"\r
                                    >\r
                                        <option value="empleado">{{ t('settings.team.role_empleado') }}</option>\r
                                        <option value="contabilidad">{{ t('settings.team.role_contabilidad') }}</option>\r
                                        <option value="desarrollador">{{ t('settings.team.role_desarrollador') }}</option>\r
                                        <option value="administrador">{{ t('settings.team.role_administrador') }}</option>\r
                                    </select>\r
\r
                                    <div class="mt-5">\r
                                        <button\r
                                            mat-flat-button\r
                                            color="primary"\r
                                            type="button"\r
                                            class="!min-h-11 w-full !rounded-xl px-5 sm:w-auto"\r
                                            [disabled]="\r
                                                isSavingWorkspaceStaff ||\r
                                                workspaceStaffForm.invalid ||\r
                                                !canAddMoreWorkspaceStaff()\r
                                            "\r
                                            (click)="saveWorkspaceStaff()"\r
                                        >\r
                                            @if (!isSavingWorkspaceStaff) {\r
                                                {{ t('settings.team.save') }}\r
                                            } @else {\r
                                                <mat-progress-spinner diameter="20" mode="indeterminate"></mat-progress-spinner>\r
                                            }\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                            }\r
                        }\r
                    </section>\r
                }\r
\r
                <footer class="mt-6 flex flex-wrap items-center justify-between gap-3">\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        class="!min-h-11 !rounded-xl !border-stone-200 !font-medium dark:!border-gray-700"\r
                        (click)="goBack()"\r
                    >\r
                        {{ t('smartEnrollProjects.staff.goBack') }}\r
                    </button>\r
                    @if (canInvite()) {\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            type="button"\r
                            class="flex !min-h-11 !rounded-xl items-center justify-center gap-2 px-5"\r
                            [disabled]="isSavingDisabled"\r
                            (click)="createMembers()"\r
                        >\r
                            @if (!saving()) {\r
                                {{ t('smartEnrollProjects.staff.sendInvitations') }}\r
                            } @else {\r
                                <mat-progress-spinner diameter="20" mode="indeterminate"></mat-progress-spinner>\r
                            }\r
                        </button>\r
                    }\r
                </footer>\r
            }\r
        </div>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/smart-enroll/projects/project-staff/project-staff.component.scss */\n:host {\n  display: block;\n}\n.invite-row.is-selected {\n  background: rgba(238, 242, 255, 0.5);\n}\n:host-context(.dark) .invite-row.is-selected {\n  background: rgba(30, 27, 75, 0.2);\n}\n/*# sourceMappingURL=project-staff.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectStaffComponent, { className: "ProjectStaffComponent", filePath: "src/app/modules/smart-enroll/projects/project-staff/project-staff.component.ts", lineNumber: 43 });
})();
export {
  ProjectStaffComponent
};
//# sourceMappingURL=chunk-ZPP6FW2F.js.map
