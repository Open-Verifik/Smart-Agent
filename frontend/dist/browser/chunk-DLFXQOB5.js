import {
  SmartAccessProjectsService
} from "./chunk-KDNTWA3U.js";
import {
  resolveStaffSaveErrorMessage
} from "./chunk-KXUDERQQ.js";
import {
  SettingsService
} from "./chunk-VKPGY5XX.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-TXEVGTMX.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-2HNEWPD3.js";
import "./chunk-4J4GSXOK.js";
import {
  CountryService
} from "./chunk-4U26N45P.js";
import "./chunk-BCBZJBUY.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
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
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-HYFP557I.js";
import "./chunk-PMCYMBOC.js";
import {
  CommonModule,
  Component,
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
} from "./chunk-PNPEHISK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-access/projects/project-staff/access-project-staff.component.ts
var _c0 = (a0, a1) => ({ current: a0, total: a1 });
var _forTrack0 = ($index, $item) => $item._id;
var _forTrack1 = ($index, $item) => $item.dialCode + $item.name;
function AccessProjectStaffComponent_ng_container_0_Conditional_9_Template(rf, ctx) {
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
function AccessProjectStaffComponent_ng_container_0_Conditional_12_Template(rf, ctx) {
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
function AccessProjectStaffComponent_ng_container_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-progress-spinner", 10);
    \u0275\u0275elementEnd();
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const member_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.lastActiveDisplay(member_r3.lastActive), " ");
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.list.neverLoggedIn"), " ");
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const member_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.lastActiveDisplay(member_r3.lastActive), " ");
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.list.neverLoggedIn"), " ");
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r3 = \u0275\u0275nextContext().$implicit;
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.roles." + member_r3.role));
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_15_For_2_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.roles." + role_r6));
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 31);
    \u0275\u0275listener("change", function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_15_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const member_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onMemberRoleChange(member_r3, $event));
    });
    \u0275\u0275repeaterCreate(1, AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_15_For_2_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
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
function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.staff.accepted"), " ");
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.staff.invited"), " ");
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_20_Template_button_click_0_listener() {
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
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.staff.removeFromProject"), " ");
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 21)(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 24);
    \u0275\u0275template(8, AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_8_Template, 1, 1)(9, AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275template(11, AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_11_Template, 1, 1)(12, AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_12_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 26);
    \u0275\u0275template(14, AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_14_Template, 2, 1, "span")(15, AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_15_Template, 3, 2, "select", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 28);
    \u0275\u0275template(17, AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_17_Template, 1, 1)(18, AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_18_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 29);
    \u0275\u0275template(20, AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Conditional_20_Template, 2, 2, "button", 30);
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
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_13_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.noMembers"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.noMembersHint"));
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 43);
    \u0275\u0275listener("change", function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_6_Template_mat_checkbox_change_0_listener() {
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
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_For_15_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.roles." + role_r11));
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.staff.addToProject"), " ");
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 48);
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "mat-checkbox", 45);
    \u0275\u0275listener("change", function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Template_mat_checkbox_change_1_listener() {
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
    \u0275\u0275listener("change", function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Template_select_change_13_listener($event) {
      const staff_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onInviteRoleChange(staff_r10, $event));
    });
    \u0275\u0275repeaterCreate(14, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_For_15_Template, 2, 2, "option", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 46)(17, "button", 47);
    \u0275\u0275listener("click", function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Template_button_click_17_listener() {
      const staff_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.createMember(staff_r10));
    });
    \u0275\u0275template(18, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Conditional_18_Template, 1, 1)(19, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Conditional_19_Template, 1, 0, "mat-progress-spinner", 48);
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
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 49);
    \u0275\u0275listener("click", function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_17_Template_button_click_1_listener() {
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
    \u0275\u0275listener("click", function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_17_Template_button_click_6_listener() {
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
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.page", \u0275\u0275pureFunction2(3, _c0, ctx_r0.currentPage(), ctx_r0.totalPages)));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages);
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_0_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.noStaffAvailable"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.staff.noStaffAvailableHintBefore"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.noStaffAvailableHintLink"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", t_r4("smartAccessProjects.staff.noStaffAvailableHintAfter"), " ");
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_1_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.noStaff"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.noStaffHint"));
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_2_Template(rf, ctx) {
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
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("settings.team.no_plan_warning"), " ");
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_For_23_Template(rf, ctx) {
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
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(5).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("settings.team.save"), " ");
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 48);
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "p", 53);
    \u0275\u0275template(2, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_2_Template, 10, 8)(3, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_3_Template, 1, 1);
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
    \u0275\u0275repeaterCreate(22, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_For_23_Template, 2, 3, "option", 32, _forTrack1);
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
    \u0275\u0275listener("click", function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.saveWorkspaceStaff());
    });
    \u0275\u0275template(41, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_41_Template, 1, 1)(42, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Conditional_42_Template, 1, 0, "mat-progress-spinner", 48);
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
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.inlineWorkspaceTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.inlineWorkspaceSubtitle"));
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
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_0_Template, 8, 4, "div", 17)(1, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_1_Template, 5, 2, "div", 17)(2, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Conditional_2_Template, 43, 22);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r0.sortedMembers().length ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.canInvite() && ctx_r0.canManageWorkspaceStaff() && ctx_r0.workspaceStaffContextLoaded ? 2 : -1);
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "section", 11)(5, "div", 38);
    \u0275\u0275template(6, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_6_Template, 1, 3, "mat-checkbox", 39)(7, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_7_Template, 1, 0, "span", 40);
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
    \u0275\u0275repeaterCreate(15, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_For_16_Template, 20, 12, "div", 41, _forTrack0);
    \u0275\u0275template(17, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_17_Template, 9, 6, "div", 42)(18, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Conditional_18_Template, 3, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.inviteTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.inviteSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.staffs().length ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.username"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.role"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.paginatedStaff());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.totalPages > 1 ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.staffs().length === 0 && !ctx_r0.loading() ? 18 : -1);
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.staff.sendInvitations"), " ");
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 48);
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.createMembers());
    });
    \u0275\u0275template(1, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Conditional_1_Template, 1, 1)(2, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Conditional_2_Template, 1, 0, "mat-progress-spinner", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.isSavingDisabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.saving() ? 1 : 2);
  }
}
function AccessProjectStaffComponent_ng_container_0_Conditional_14_Template(rf, ctx) {
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
    \u0275\u0275repeaterCreate(11, AccessProjectStaffComponent_ng_container_0_Conditional_14_For_12_Template, 21, 7, "div", 16, _forTrack0);
    \u0275\u0275template(13, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_13_Template, 5, 2, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_14_Template, 19, 8);
    \u0275\u0275elementStart(15, "footer", 18)(16, "button", 19);
    \u0275\u0275listener("click", function AccessProjectStaffComponent_ng_container_0_Conditional_14_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AccessProjectStaffComponent_ng_container_0_Conditional_14_Conditional_18_Template, 3, 2, "button", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.username"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.lastActive"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.role"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.invitation"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.sortedMembers());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.sortedMembers().length && !ctx_r0.loading() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canInvite() ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.staff.goBack"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canInvite() ? 18 : -1);
  }
}
function AccessProjectStaffComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "header", 3)(4, "div")(5, "h1", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AccessProjectStaffComponent_ng_container_0_Conditional_9_Template, 2, 1, "p", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AccessProjectStaffComponent_ng_container_0_Conditional_12_Template, 3, 3, "div", 8)(13, AccessProjectStaffComponent_ng_container_0_Conditional_13_Template, 2, 0, "div", 9)(14, AccessProjectStaffComponent_ng_container_0_Conditional_14_Template, 19, 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const t_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("smartAccessProjects.staff.subtitle"));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_4_0 = ctx_r0.project()) == null ? null : tmp_4_0.name) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.docUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("smartAccessProjects.staff.documentation"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadError() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading() && !ctx_r0.projectMembers().length && !ctx_r0.staffs().length ? 13 : ctx_r0.project() ? 14 : -1);
  }
}
var AccessProjectStaffComponent = class _AccessProjectStaffComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._projectsService = inject(SmartAccessProjectsService);
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
          this.loadError.set("smartAccessProjects.projectNotFound");
          this.loading.set(false);
          return;
        }
        this.project.set(p);
        this._loadWorkspaceStaffLimits();
        this._loadMembers();
      },
      error: () => {
        this.loadError.set("smartAccessProjects.loadError");
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
      this._router.navigate(["/smart-access/projects"]);
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
    this._router.navigate(["/smart-access/projects"]);
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
        this.loadError.set("smartAccessProjects.staff.loadMembersError");
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
        this.loadError.set("smartAccessProjects.staff.loadStaffError");
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function AccessProjectStaffComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccessProjectStaffComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessProjectStaffComponent, selectors: [["smart-access-project-staff"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "page"], [1, "inner"], [1, "hero"], [1, "title"], [1, "subtitle"], [1, "project-name"], ["target", "_blank", "rel", "noopener noreferrer", 1, "doc-link", 3, "href"], [1, "banner-error"], [1, "state-loading"], ["diameter", "40", "mode", "indeterminate"], [1, "panel"], [1, "table-head", "grid-row", "members-head"], [1, "th"], [1, "th", "hide-sm"], [1, "th", "th-actions"], [1, "grid-row", "data-row", "members-row"], [1, "empty-block"], [1, "footer-actions"], ["mat-stroked-button", "", "type", "button", 1, "btn-outline", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "disabled"], [1, "cell-user"], [1, "avatar"], [1, "name"], [1, "muted", "show-sm"], [1, "cell-muted", "hide-sm"], [1, "cell-role"], [1, "role-select", 3, "value", "disabled"], [1, "cell-invite"], [1, "cell-actions"], ["type", "button", 1, "link-danger", 3, "disabled"], [1, "role-select", 3, "change", "value", "disabled"], [3, "value"], ["type", "button", 1, "link-danger", 3, "click", "disabled"], [1, "empty-title"], [1, "empty-sub"], [1, "section-title"], [1, "section-sub"], [1, "table-head", "grid-row", "invite-head"], [1, "chk", 3, "checked", "disabled", "indeterminate"], [1, "chk-spacer"], [1, "grid-row", "invite-row", 3, "selected"], [1, "pager"], [1, "chk", 3, "change", "checked", "disabled", "indeterminate"], [1, "grid-row", "invite-row"], [1, "chk", 3, "change", "checked", "disabled"], [1, "cell-actions", "end"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "btn-add", 3, "click", "disabled"], ["diameter", "20", "mode", "indeterminate"], ["mat-icon-button", "", "type", "button", 3, "click", "disabled"], [1, "pager-label"], ["routerLink", "/settings/team", 1, "hint-here-link"], [1, "workspace-limit-banner"], [1, "workspace-limit-text"], ["routerLink", "/subscription-plans", 1, "workspace-limit-plans"], [1, "inline-workspace-form", 3, "formGroup"], [1, "inline-form-title"], [1, "inline-form-sub"], [1, "inline-label"], ["type", "text", "formControlName", "name", 1, "inline-input"], ["type", "email", "formControlName", "email", 1, "inline-input"], [1, "inline-grid-2"], ["formControlName", "countryCode", 1, "inline-select"], ["type", "tel", "formControlName", "phone", 1, "inline-input"], ["formControlName", "role", 1, "inline-select"], ["value", "empleado"], ["value", "contabilidad"], ["value", "desarrollador"], ["value", "administrador"], [1, "inline-form-actions"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "btn-submit-workspace", 3, "click", "disabled"], [1, "font-semibold"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"]], template: function AccessProjectStaffComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AccessProjectStaffComponent_ng_container_0_Template, 15, 7, "ng-container", 0);
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
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background: rgb(249, 250, 251);\n}\n.inner[_ngcontent-%COMP%] {\n  max-width: 56rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 3rem;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.75rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: 0.95rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n  max-width: 40rem;\n}\n.project-name[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n}\n.doc-link[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  text-decoration: none;\n  align-self: center;\n}\n.doc-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.banner-error[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(127, 29, 29);\n  padding: 0.85rem 1rem;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n.state-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 3rem;\n}\n.panel[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 0.5rem 0 1rem;\n  margin-bottom: 1.5rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 0.25rem;\n  font-size: 1.1rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.section-sub[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: rgb(107, 114, 128);\n}\n.grid-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.35rem;\n  padding: 0.65rem 1rem;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .members-head[_ngcontent-%COMP%], \n   .members-row[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(5.5rem, auto);\n  }\n  .invite-head[_ngcontent-%COMP%], \n   .invite-row[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 2fr) minmax(0, 1.5fr) minmax(0, 1fr) minmax(6.5rem, auto);\n  }\n}\n.th[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 650;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: rgb(107, 114, 128);\n}\n.th-actions[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.hide-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) {\n  .hide-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .show-sm[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.data-row[_ngcontent-%COMP%], \n.invite-row[_ngcontent-%COMP%] {\n  border-top: 1px solid rgb(243, 244, 246);\n}\n.invite-row.selected[_ngcontent-%COMP%] {\n  background: rgb(249, 250, 251);\n}\n.cell-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  min-width: 0;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(59, 130, 246),\n      rgb(37, 99, 235));\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  font-size: 0.9rem;\n}\n.muted[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgb(107, 114, 128);\n}\n.cell-muted[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgb(75, 85, 99);\n}\n.cell-role[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.role-trigger[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 0.25rem 0;\n  font: inherit;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  cursor: pointer;\n  text-align: left;\n}\n.cell-invite[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgb(75, 85, 99);\n}\n.cell-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.cell-actions.end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.chk[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.chk-spacer[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.btn-add[_ngcontent-%COMP%] {\n  border-radius: 999px;\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n}\n.pager-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgb(75, 85, 99);\n}\n.empty-block[_ngcontent-%COMP%] {\n  padding: 1.5rem 1rem 0.5rem;\n  text-align: center;\n}\n.empty-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 650;\n  color: rgb(31, 41, 55);\n}\n.empty-sub[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: 0.9rem;\n  color: rgb(107, 114, 128);\n}\n.hint-here-link[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.hint-here-link[_ngcontent-%COMP%]:hover {\n  color: rgb(29, 78, 216);\n}\n.empty-cta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 1rem;\n}\n.footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  border-color: rgb(17, 24, 39) !important;\n  color: rgb(17, 24, 39) !important;\n}\n.role-select[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border-radius: 8px;\n  border: 1px solid rgb(229, 231, 235);\n  padding: 0.35rem 0.5rem;\n  font-size: 0.85rem;\n  background: #fff;\n  color: rgb(17, 24, 39);\n}\n.link-danger[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgb(220, 38, 38);\n  cursor: pointer;\n  text-decoration: underline;\n}\n.link-danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.workspace-limit-banner[_ngcontent-%COMP%] {\n  margin: 0.75rem 1rem 1rem;\n  padding: 0.85rem 1rem;\n  border-radius: 12px;\n  border: 1px solid rgb(229, 231, 235);\n  font-size: 0.85rem;\n  line-height: 1.45;\n}\n.workspace-limit-banner.banner-ok[_ngcontent-%COMP%] {\n  background: rgb(239, 246, 255);\n  border-color: rgb(191, 219, 254);\n  color: rgb(30, 58, 138);\n}\n.workspace-limit-banner.banner-warn[_ngcontent-%COMP%] {\n  background: rgb(255, 251, 235);\n  border-color: rgb(253, 230, 138);\n  color: rgb(120, 53, 15);\n}\n.workspace-limit-banner.banner-bad[_ngcontent-%COMP%] {\n  background: rgb(254, 242, 242);\n  border-color: rgb(254, 202, 202);\n  color: rgb(127, 29, 29);\n}\n.workspace-limit-text[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.workspace-limit-plans[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n  font-weight: 600;\n  text-decoration: underline;\n  color: inherit;\n}\n.inline-workspace-form[_ngcontent-%COMP%] {\n  margin: 0 1rem 1.25rem;\n  padding: 1rem 1.1rem 1.15rem;\n  border-radius: 12px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(252, 252, 252);\n}\n.inline-form-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.inline-form-sub[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 0.85rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.4;\n}\n.inline-label[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0.65rem 0 0.25rem;\n  font-size: 0.72rem;\n  font-weight: 650;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: rgb(107, 114, 128);\n}\n.inline-input[_ngcontent-%COMP%], \n.inline-select[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  padding: 0.5rem 0.65rem;\n  font-size: 0.9rem;\n  background: #fff;\n  color: rgb(17, 24, 39);\n}\n.inline-grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem 0.75rem;\n}\n@media (min-width: 640px) {\n  .inline-grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.inline-form-actions[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.btn-submit-workspace[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  width: 100%;\n}\n@media (min-width: 480px) {\n  .btn-submit-workspace[_ngcontent-%COMP%] {\n    width: auto;\n    min-width: 8rem;\n  }\n}\n/*# sourceMappingURL=access-project-staff.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessProjectStaffComponent, [{
    type: Component,
    args: [{ selector: "smart-access-project-staff", standalone: true, imports: [
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
    <div class="page">\r
        <div class="inner">\r
            <header class="hero">\r
                <div>\r
                    <h1 class="title">{{ t('smartAccessProjects.staff.title') }}</h1>\r
                    <p class="subtitle">{{ t('smartAccessProjects.staff.subtitle') }}</p>\r
                    @if (project()?.name) {\r
                        <p class="project-name">{{ project()!.name }}</p>\r
                    }\r
                </div>\r
                <a class="doc-link" [href]="docUrl()" target="_blank" rel="noopener noreferrer">\r
                    {{ t('smartAccessProjects.staff.documentation') }}\r
                </a>\r
            </header>\r
\r
            @if (loadError()) {\r
                <div class="banner-error">{{ loadError()! | transloco }}</div>\r
            }\r
\r
            @if (loading() && !projectMembers().length && !staffs().length) {\r
                <div class="state-loading">\r
                    <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>\r
                </div>\r
            } @else if (project()) {\r
                <section class="panel">\r
                    <div class="table-head grid-row members-head">\r
                        <span class="th">{{ t('smartAccessProjects.staff.username') }}</span>\r
                        <span class="th hide-sm">{{ t('smartAccessProjects.staff.lastActive') }}</span>\r
                        <span class="th">{{ t('smartAccessProjects.staff.role') }}</span>\r
                        <span class="th">{{ t('smartAccessProjects.staff.invitation') }}</span>\r
                        <span class="th th-actions"></span>\r
                    </div>\r
\r
                    @for (member of sortedMembers(); track member._id) {\r
                        <div class="grid-row data-row members-row">\r
                            <div class="cell-user">\r
                                <div class="avatar">{{ formatAcronym(member.staff?.name) }}</div>\r
                                <div>\r
                                    <div class="name">{{ member.staff?.name }}</div>\r
                                    <div class="muted show-sm">\r
                                        @if (member.lastActive) {\r
                                            {{ lastActiveDisplay(member.lastActive) }}\r
                                        } @else {\r
                                            {{ t('smartAccessProjects.list.neverLoggedIn') }}\r
                                        }\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="cell-muted hide-sm">\r
                                @if (member.lastActive) {\r
                                    {{ lastActiveDisplay(member.lastActive) }}\r
                                } @else {\r
                                    {{ t('smartAccessProjects.list.neverLoggedIn') }}\r
                                }\r
                            </div>\r
                            <div class="cell-role">\r
                                @if (!canUpdateRole(member)) {\r
                                    <span>{{ t('smartAccessProjects.staff.roles.' + member.role) }}</span>\r
                                } @else {\r
                                    <select\r
                                        class="role-select"\r
                                        [value]="member.role"\r
                                        [disabled]="isUpdatingOrRemoving(member)"\r
                                        (change)="onMemberRoleChange(member, $event)"\r
                                    >\r
                                        @for (role of roles; track role) {\r
                                            <option [value]="role">{{ t('smartAccessProjects.staff.roles.' + role) }}</option>\r
                                        }\r
                                    </select>\r
                                }\r
                            </div>\r
                            <div class="cell-invite">\r
                                @if (member.acceptedAt) {\r
                                    {{ t('smartAccessProjects.staff.accepted') }}\r
                                } @else {\r
                                    {{ t('smartAccessProjects.staff.invited') }}\r
                                }\r
                            </div>\r
                            <div class="cell-actions">\r
                                @if (canRemoveMember(member)) {\r
                                    <button\r
                                        type="button"\r
                                        class="link-danger"\r
                                        [disabled]="isUpdatingOrRemoving(member)"\r
                                        (click)="removeMember(member)"\r
                                    >\r
                                        {{ t('smartAccessProjects.staff.removeFromProject') }}\r
                                    </button>\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
\r
                    @if (!sortedMembers().length && !loading()) {\r
                        <div class="empty-block">\r
                            <p class="empty-title">{{ t('smartAccessProjects.staff.noMembers') }}</p>\r
                            <p class="empty-sub">{{ t('smartAccessProjects.staff.noMembersHint') }}</p>\r
                        </div>\r
                    }\r
                </section>\r
\r
                @if (canInvite()) {\r
                    <h2 class="section-title">{{ t('smartAccessProjects.staff.inviteTitle') }}</h2>\r
                    <p class="section-sub">{{ t('smartAccessProjects.staff.inviteSubtitle') }}</p>\r
\r
                    <section class="panel">\r
                        <div class="table-head grid-row invite-head">\r
                            @if (staffs().length) {\r
                                <mat-checkbox\r
                                    class="chk"\r
                                    [checked]="isAllSelected"\r
                                    [disabled]="saving()"\r
                                    [indeterminate]="!isAllSelected && hasSelectedStaff"\r
                                    (change)="selectAll()"\r
                                ></mat-checkbox>\r
                            } @else {\r
                                <span class="chk-spacer"></span>\r
                            }\r
                            <span class="th">{{ t('smartAccessProjects.staff.username') }}</span>\r
                            <span class="th hide-sm">{{ t('smartAccessProjects.staff.email') }}</span>\r
                            <span class="th">{{ t('smartAccessProjects.staff.role') }}</span>\r
                            <span class="th th-actions"></span>\r
                        </div>\r
\r
                        @for (staff of paginatedStaff(); track staff._id) {\r
                            <div class="grid-row invite-row" [class.selected]="staff.selected">\r
                                <mat-checkbox\r
                                    class="chk"\r
                                    [checked]="staff.selected"\r
                                    [disabled]="isInviting(staff) || saving()"\r
                                    (change)="toggleSelection(staff)"\r
                                ></mat-checkbox>\r
                                <div class="cell-user">\r
                                    <div class="avatar">{{ formatAcronym(staff.name) }}</div>\r
                                    <div>\r
                                        <div class="name">{{ staff.name }}</div>\r
                                        <div class="muted show-sm">{{ staff.email }}</div>\r
                                    </div>\r
                                </div>\r
                                <div class="cell-muted hide-sm">{{ staff.email }}</div>\r
                                <div class="cell-role">\r
                                    <select\r
                                        class="role-select"\r
                                        [value]="staff.role || 'viewer'"\r
                                        [disabled]="isInviting(staff) || saving()"\r
                                        (change)="onInviteRoleChange(staff, $event)"\r
                                    >\r
                                        @for (role of roles; track role) {\r
                                            <option [value]="role">{{ t('smartAccessProjects.staff.roles.' + role) }}</option>\r
                                        }\r
                                    </select>\r
                                </div>\r
                                <div class="cell-actions end">\r
                                    <button\r
                                        mat-flat-button\r
                                        color="primary"\r
                                        type="button"\r
                                        class="btn-add"\r
                                        [disabled]="!canInvite() || isInviting(staff) || saving()"\r
                                        (click)="createMember(staff)"\r
                                    >\r
                                        @if (!isInviting(staff)) {\r
                                            {{ t('smartAccessProjects.staff.addToProject') }}\r
                                        } @else {\r
                                            <mat-progress-spinner diameter="20" mode="indeterminate"></mat-progress-spinner>\r
                                        }\r
                                    </button>\r
                                </div>\r
                            </div>\r
                        }\r
\r
                        @if (totalPages > 1) {\r
                            <div class="pager">\r
                                <button mat-icon-button type="button" [disabled]="currentPage() === 1" (click)="changePage(currentPage() - 1)">\r
                                    <mat-icon>chevron_left</mat-icon>\r
                                </button>\r
                                <span class="pager-label">{{ t('smartAccessProjects.staff.page', { current: currentPage(), total: totalPages }) }}</span>\r
                                <button\r
                                    mat-icon-button\r
                                    type="button"\r
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
                                <div class="empty-block">\r
                                    <p class="empty-title">{{ t('smartAccessProjects.staff.noStaffAvailable') }}</p>\r
                                    <p class="empty-sub">\r
                                        {{ t('smartAccessProjects.staff.noStaffAvailableHintBefore') }}\r
                                        <a routerLink="/settings/team" class="hint-here-link">{{\r
                                            t('smartAccessProjects.staff.noStaffAvailableHintLink')\r
                                        }}</a>{{ t('smartAccessProjects.staff.noStaffAvailableHintAfter') }}\r
                                    </p>\r
                                </div>\r
                            } @else {\r
                                <div class="empty-block">\r
                                    <p class="empty-title">{{ t('smartAccessProjects.staff.noStaff') }}</p>\r
                                    <p class="empty-sub">{{ t('smartAccessProjects.staff.noStaffHint') }}</p>\r
                                </div>\r
                            }\r
\r
                            @if (canInvite() && canManageWorkspaceStaff() && workspaceStaffContextLoaded) {\r
                                <div\r
                                    class="workspace-limit-banner"\r
                                    [class.banner-ok]="hasSubscription && canAddMoreWorkspaceStaff()"\r
                                    [class.banner-warn]="hasSubscription && !canAddMoreWorkspaceStaff()"\r
                                    [class.banner-bad]="!hasSubscription"\r
                                >\r
                                    <p class="workspace-limit-text">\r
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
                                        <a routerLink="/subscription-plans" class="workspace-limit-plans">{{\r
                                            t('settings.team.view_plans')\r
                                        }}</a>\r
                                    </p>\r
                                </div>\r
\r
                                <div class="inline-workspace-form" [formGroup]="workspaceStaffForm">\r
                                    <h3 class="inline-form-title">{{ t('smartAccessProjects.staff.inlineWorkspaceTitle') }}</h3>\r
                                    <p class="inline-form-sub">{{ t('smartAccessProjects.staff.inlineWorkspaceSubtitle') }}</p>\r
\r
                                    <label class="inline-label">{{ t('settings.team.full_name') }}</label>\r
                                    <input class="inline-input" type="text" formControlName="name" />\r
\r
                                    <label class="inline-label">{{ t('settings.team.email') }}</label>\r
                                    <input class="inline-input" type="email" formControlName="email" />\r
\r
                                    <div class="inline-grid-2">\r
                                        <div>\r
                                            <label class="inline-label">{{ t('settings.team.country_code') }}</label>\r
                                            <select class="inline-select" formControlName="countryCode">\r
                                                @for (c of countryCodes; track c.dialCode + c.name) {\r
                                                    <option [value]="c.dialCode">{{ c.dialCode }} {{ c.name }}</option>\r
                                                }\r
                                            </select>\r
                                        </div>\r
                                        <div>\r
                                            <label class="inline-label">{{ t('settings.team.phone') }}</label>\r
                                            <input class="inline-input" type="tel" formControlName="phone" />\r
                                        </div>\r
                                    </div>\r
\r
                                    <label class="inline-label">{{ t('settings.team.role') }}</label>\r
                                    <select class="inline-select" formControlName="role">\r
                                        <option value="empleado">{{ t('settings.team.role_empleado') }}</option>\r
                                        <option value="contabilidad">{{ t('settings.team.role_contabilidad') }}</option>\r
                                        <option value="desarrollador">{{ t('settings.team.role_desarrollador') }}</option>\r
                                        <option value="administrador">{{ t('settings.team.role_administrador') }}</option>\r
                                    </select>\r
\r
                                    <div class="inline-form-actions">\r
                                        <button\r
                                            mat-flat-button\r
                                            color="primary"\r
                                            type="button"\r
                                            class="btn-submit-workspace"\r
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
                <footer class="footer-actions">\r
                    <button mat-stroked-button type="button" class="btn-outline" (click)="goBack()">\r
                        {{ t('smartAccessProjects.staff.goBack') }}\r
                    </button>\r
                    @if (canInvite()) {\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            type="button"\r
                            [disabled]="isSavingDisabled"\r
                            (click)="createMembers()"\r
                        >\r
                            @if (!saving()) {\r
                                {{ t('smartAccessProjects.staff.sendInvitations') }}\r
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
`, styles: ["/* src/app/modules/smart-access/projects/project-staff/access-project-staff.component.scss */\n:host {\n  display: block;\n}\n.page {\n  min-height: 100%;\n  background: rgb(249, 250, 251);\n}\n.inner {\n  max-width: 56rem;\n  margin: 0 auto;\n  padding: 2rem 1.25rem 3rem;\n}\n.hero {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.title {\n  margin: 0;\n  font-size: 1.75rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.subtitle {\n  margin: 0.35rem 0 0;\n  font-size: 0.95rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n  max-width: 40rem;\n}\n.project-name {\n  margin: 0.5rem 0 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n}\n.doc-link {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  text-decoration: none;\n  align-self: center;\n}\n.doc-link:hover {\n  text-decoration: underline;\n}\n.banner-error {\n  border-radius: 12px;\n  border: 1px solid rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(127, 29, 29);\n  padding: 0.85rem 1rem;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n.state-loading {\n  display: flex;\n  justify-content: center;\n  padding: 3rem;\n}\n.panel {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 0.5rem 0 1rem;\n  margin-bottom: 1.5rem;\n}\n.section-title {\n  margin: 1.5rem 0 0.25rem;\n  font-size: 1.1rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.section-sub {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: rgb(107, 114, 128);\n}\n.grid-row {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0.35rem;\n  padding: 0.65rem 1rem;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .members-head,\n  .members-row {\n    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(5.5rem, auto);\n  }\n  .invite-head,\n  .invite-row {\n    grid-template-columns: auto minmax(0, 2fr) minmax(0, 1.5fr) minmax(0, 1fr) minmax(6.5rem, auto);\n  }\n}\n.th {\n  font-size: 0.72rem;\n  font-weight: 650;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: rgb(107, 114, 128);\n}\n.th-actions {\n  width: 2.5rem;\n}\n.hide-sm {\n  display: none;\n}\n@media (min-width: 768px) {\n  .hide-sm {\n    display: block;\n  }\n  .show-sm {\n    display: none;\n  }\n}\n.data-row,\n.invite-row {\n  border-top: 1px solid rgb(243, 244, 246);\n}\n.invite-row.selected {\n  background: rgb(249, 250, 251);\n}\n.cell-user {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  min-width: 0;\n}\n.avatar {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(59, 130, 246),\n      rgb(37, 99, 235));\n  color: #fff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.name {\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  font-size: 0.9rem;\n}\n.muted {\n  font-size: 0.8rem;\n  color: rgb(107, 114, 128);\n}\n.cell-muted {\n  font-size: 0.85rem;\n  color: rgb(75, 85, 99);\n}\n.cell-role {\n  font-size: 0.85rem;\n}\n.role-trigger {\n  border: none;\n  background: transparent;\n  padding: 0.25rem 0;\n  font: inherit;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  cursor: pointer;\n  text-align: left;\n}\n.cell-invite {\n  font-size: 0.85rem;\n  color: rgb(75, 85, 99);\n}\n.cell-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n.cell-actions.end {\n  justify-content: flex-end;\n}\n.chk {\n  margin-right: 0.25rem;\n}\n.chk-spacer {\n  width: 2.5rem;\n}\n.btn-add {\n  border-radius: 999px;\n}\n.pager {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n}\n.pager-label {\n  font-size: 0.85rem;\n  color: rgb(75, 85, 99);\n}\n.empty-block {\n  padding: 1.5rem 1rem 0.5rem;\n  text-align: center;\n}\n.empty-title {\n  margin: 0;\n  font-weight: 650;\n  color: rgb(31, 41, 55);\n}\n.empty-sub {\n  margin: 0.35rem 0 0;\n  font-size: 0.9rem;\n  color: rgb(107, 114, 128);\n}\n.hint-here-link {\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.hint-here-link:hover {\n  color: rgb(29, 78, 216);\n}\n.empty-cta {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 1rem;\n}\n.footer-actions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.btn-outline {\n  border-radius: 999px;\n  border-color: rgb(17, 24, 39) !important;\n  color: rgb(17, 24, 39) !important;\n}\n.role-select {\n  max-width: 100%;\n  border-radius: 8px;\n  border: 1px solid rgb(229, 231, 235);\n  padding: 0.35rem 0.5rem;\n  font-size: 0.85rem;\n  background: #fff;\n  color: rgb(17, 24, 39);\n}\n.link-danger {\n  border: none;\n  background: none;\n  padding: 0;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgb(220, 38, 38);\n  cursor: pointer;\n  text-decoration: underline;\n}\n.link-danger:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.workspace-limit-banner {\n  margin: 0.75rem 1rem 1rem;\n  padding: 0.85rem 1rem;\n  border-radius: 12px;\n  border: 1px solid rgb(229, 231, 235);\n  font-size: 0.85rem;\n  line-height: 1.45;\n}\n.workspace-limit-banner.banner-ok {\n  background: rgb(239, 246, 255);\n  border-color: rgb(191, 219, 254);\n  color: rgb(30, 58, 138);\n}\n.workspace-limit-banner.banner-warn {\n  background: rgb(255, 251, 235);\n  border-color: rgb(253, 230, 138);\n  color: rgb(120, 53, 15);\n}\n.workspace-limit-banner.banner-bad {\n  background: rgb(254, 242, 242);\n  border-color: rgb(254, 202, 202);\n  color: rgb(127, 29, 29);\n}\n.workspace-limit-text {\n  margin: 0;\n}\n.workspace-limit-plans {\n  margin-left: 0.25rem;\n  font-weight: 600;\n  text-decoration: underline;\n  color: inherit;\n}\n.inline-workspace-form {\n  margin: 0 1rem 1.25rem;\n  padding: 1rem 1.1rem 1.15rem;\n  border-radius: 12px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(252, 252, 252);\n}\n.inline-form-title {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.inline-form-sub {\n  margin: 0 0 1rem;\n  font-size: 0.85rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.4;\n}\n.inline-label {\n  display: block;\n  margin: 0.65rem 0 0.25rem;\n  font-size: 0.72rem;\n  font-weight: 650;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: rgb(107, 114, 128);\n}\n.inline-input,\n.inline-select {\n  width: 100%;\n  box-sizing: border-box;\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  padding: 0.5rem 0.65rem;\n  font-size: 0.9rem;\n  background: #fff;\n  color: rgb(17, 24, 39);\n}\n.inline-grid-2 {\n  display: grid;\n  gap: 0.5rem 0.75rem;\n}\n@media (min-width: 640px) {\n  .inline-grid-2 {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.inline-form-actions {\n  margin-top: 1rem;\n}\n.btn-submit-workspace {\n  border-radius: 999px;\n  width: 100%;\n}\n@media (min-width: 480px) {\n  .btn-submit-workspace {\n    width: auto;\n    min-width: 8rem;\n  }\n}\n/*# sourceMappingURL=access-project-staff.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessProjectStaffComponent, { className: "AccessProjectStaffComponent", filePath: "src/app/modules/smart-access/projects/project-staff/access-project-staff.component.ts", lineNumber: 43 });
})();
export {
  AccessProjectStaffComponent
};
//# sourceMappingURL=chunk-DLFXQOB5.js.map
