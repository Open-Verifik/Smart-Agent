import {
  NewWebhookDialogComponent,
  WebhookStatsBarsComponent
} from "./chunk-4ALPURFC.js";
import {
  WebhookEventsComponent
} from "./chunk-BSN5XJPV.js";
import {
  WebhooksService
} from "./chunk-DLVDR6KR.js";
import "./chunk-IBMWDDA3.js";
import "./chunk-PI7X3PUO.js";
import {
  FuseSplashScreenService
} from "./chunk-NDA4EWAJ.js";
import "./chunk-KW3PRW6P.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-GXL6XPV2.js";
import {
  FuseConfirmationService
} from "./chunk-3SSPUNFY.js";
import "./chunk-6FS3LBOZ.js";
import {
  MatSnackBar
} from "./chunk-N6A4QSA6.js";
import "./chunk-LVI7H6QB.js";
import "./chunk-BQZ6NKDU.js";
import "./chunk-DT4JVZCC.js";
import "./chunk-W5MZFF7W.js";
import "./chunk-QUFOCOZK.js";
import "./chunk-2W6CKTFA.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-HVUVGZ2L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import {
  MatButtonModule
} from "./chunk-PJFCLQ64.js";
import "./chunk-PDWCMJ4H.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import "./chunk-GX5GK4J6.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-JBF67GMG.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Inject,
  NgForOf,
  NgIf,
  Subject,
  debounceTime,
  distinctUntilChanged,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-monitor/webhooks/dialogs/link-project-dialog.component.ts
function LinkProjectDialogComponent_ng_container_0_button_13_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 27);
    \u0275\u0275listener("error", function LinkProjectDialogComponent_ng_container_0_button_13_img_3_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.target.style.display = "none");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", project_r4.project == null ? null : project_r4.project.branding == null ? null : project_r4.project.branding.logo, \u0275\u0275sanitizeUrl);
  }
}
function LinkProjectDialogComponent_ng_container_0_button_13_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 28);
  }
}
function LinkProjectDialogComponent_ng_container_0_button_13_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r4 = \u0275\u0275nextContext().$implicit;
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r6("webhooks.details.replaces"), ": ", (project_r4.webhook == null ? null : project_r4.webhook.name) || project_r4.webhook, " ");
  }
}
function LinkProjectDialogComponent_ng_container_0_button_13_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 30);
  }
}
function LinkProjectDialogComponent_ng_container_0_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function LinkProjectDialogComponent_ng_container_0_button_13_Template_button_click_0_listener() {
      const project_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectProject(project_r4));
    });
    \u0275\u0275elementStart(1, "div", 17)(2, "div", 18);
    \u0275\u0275template(3, LinkProjectDialogComponent_ng_container_0_button_13_img_3_Template, 1, 1, "img", 19)(4, LinkProjectDialogComponent_ng_container_0_button_13_mat_icon_4_Template, 1, 0, "mat-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21)(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, LinkProjectDialogComponent_ng_container_0_button_13_span_10_Template, 2, 2, "span", 24);
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275template(12, LinkProjectDialogComponent_ng_container_0_button_13_mat_icon_12_Template, 1, 0, "mat-icon", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("project-row-selected", (ctx_r1.selectedProject == null ? null : ctx_r1.selectedProject._id) === project_r4._id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", project_r4.project == null ? null : project_r4.project.branding == null ? null : project_r4.project.branding.logo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(project_r4.project == null ? null : project_r4.project.branding == null ? null : project_r4.project.branding.logo));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r4.project == null ? null : project_r4.project.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r4.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", project_r4.webhook);
    \u0275\u0275advance();
    \u0275\u0275classProp("radio-on", (ctx_r1.selectedProject == null ? null : ctx_r1.selectedProject._id) === project_r4._id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedProject == null ? null : ctx_r1.selectedProject._id) === project_r4._id);
  }
}
function LinkProjectDialogComponent_ng_container_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "mat-icon", 32);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.no_projects_found"));
  }
}
function LinkProjectDialogComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h2", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function LinkProjectDialogComponent_ng_container_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275element(6, "mat-icon", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275element(10, "mat-icon", 8)(11, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275template(13, LinkProjectDialogComponent_ng_container_0_button_13_Template, 13, 10, "button", 11)(14, LinkProjectDialogComponent_ng_container_0_div_14_Template, 4, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 13)(16, "button", 14);
    \u0275\u0275listener("click", function LinkProjectDialogComponent_ng_container_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 15);
    \u0275\u0275listener("click", function LinkProjectDialogComponent_ng_container_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.add());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.link_project_title"));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r6("webhooks.new.cancel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.link_project_description"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r1.searchControl)("placeholder", t_r6("webhooks.details.search_project_placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredProjects);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredProjects.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("webhooks.new.cancel"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.selectedProject);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6("webhooks.new.add"));
  }
}
var LinkProjectDialogComponent = class _LinkProjectDialogComponent {
  constructor(data) {
    this.data = data;
    this._dialogRef = inject(MatDialogRef);
    this.searchControl = new FormControl("");
    this.filteredProjects = [];
    this.allProjects = [];
    this.selectedProject = null;
    const wid = this.data.currentWebhookId;
    this.allProjects = this.data.projects.filter((p) => {
      const wh = p.webhook;
      const whId = typeof wh === "string" ? wh : wh?._id;
      return !wh || whId !== wid;
    });
    this.filteredProjects = this.allProjects;
  }
  ngOnInit() {
    this.searchControl.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((value) => {
      this.filterProjects((value || "").toLowerCase());
    });
  }
  filterProjects(value) {
    this.filteredProjects = this.allProjects.filter((option) => option.project?.name?.toLowerCase().includes(value) || option.type?.toLowerCase().includes(value));
  }
  selectProject(project) {
    this.selectedProject = project;
  }
  close() {
    this._dialogRef.close();
  }
  add() {
    if (this.selectedProject) {
      this._dialogRef.close(this.selectedProject);
    }
  }
  static {
    this.\u0275fac = function LinkProjectDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LinkProjectDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LinkProjectDialogComponent, selectors: [["link-project-dialog"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "link-shell"], [1, "link-header"], [1, "link-title"], ["type", "button", 1, "icon-close", 3, "click"], ["svgIcon", "heroicons_outline:x-mark", 1, "icon-20"], [1, "link-desc"], [1, "search-wrap"], ["svgIcon", "heroicons_outline:magnifying-glass", 1, "search-icon"], [1, "search-input", 3, "formControl", "placeholder"], [1, "list-wrap"], ["type", "button", "class", "project-row", 3, "project-row-selected", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "link-footer"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], ["type", "button", 1, "project-row", 3, "click"], [1, "project-main"], [1, "logo-ring"], ["alt", "", "class", "logo-img", 3, "src", "error", 4, "ngIf"], ["class", "logo-fallback", "svgIcon", "heroicons_outline:photo", 4, "ngIf"], [1, "project-text"], [1, "project-name"], [1, "project-type"], ["class", "replace-pill", 4, "ngIf"], [1, "radio"], ["class", "check-icon", "svgIcon", "heroicons_outline:check", 4, "ngIf"], ["alt", "", 1, "logo-img", 3, "error", "src"], ["svgIcon", "heroicons_outline:photo", 1, "logo-fallback"], [1, "replace-pill"], ["svgIcon", "heroicons_outline:check", 1, "check-icon"], [1, "empty-state"], ["svgIcon", "heroicons_outline:folder-open", 1, "empty-icon"]], template: function LinkProjectDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LinkProjectDialogComponent_ng_container_0_Template, 20, 10, "ng-container", 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, TranslocoModule, TranslocoDirective, MatDialogModule, MatButtonModule, MatIconModule, MatIcon], styles: ["\n\n.link-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: min(90vh, 640px);\n  width: min(100vw - 2rem, 520px);\n}\n.link-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 1.25rem 1.25rem 0.5rem;\n}\n.link-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n}\n.icon-close[_ngcontent-%COMP%] {\n  border: none;\n  background: rgb(249, 250, 251);\n  border-radius: 8px;\n  padding: 0.35rem;\n  cursor: pointer;\n  line-height: 0;\n}\n.icon-close[_ngcontent-%COMP%]:hover {\n  background: rgb(243, 244, 246);\n}\n.icon-20[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(107, 114, 128);\n}\n.link-desc[_ngcontent-%COMP%] {\n  margin: 0 1.25rem 0.75rem;\n  font-size: 0.875rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 1.25rem 0.75rem;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(156, 163, 175);\n  pointer-events: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  padding-left: 2.75rem;\n  padding-right: 0.85rem;\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(249, 250, 251);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: rgb(59, 130, 246);\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);\n}\n.list-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 1.25rem 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-height: 200px;\n}\n.project-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  width: 100%;\n  text-align: left;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 12px;\n  padding: 0.65rem 0.75rem;\n  background: #fff;\n  cursor: pointer;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.project-row[_ngcontent-%COMP%]:hover {\n  background: rgb(249, 250, 251);\n}\n.project-row-selected[_ngcontent-%COMP%] {\n  border-color: rgb(59, 130, 246);\n  background: rgb(239, 246, 255);\n}\n.project-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  flex: 1;\n  min-width: 0;\n}\n.logo-ring[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 999px;\n  border: 1px solid rgb(243, 244, 246);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: #fff;\n}\n.logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.logo-fallback[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  font-size: 22px;\n  color: rgb(156, 163, 175);\n}\n.project-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.project-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: rgb(17, 24, 39);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.project-type[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.replace-pill[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: rgb(180, 83, 9);\n  background: rgb(254, 252, 232);\n  border: 1px solid rgb(253, 230, 138);\n  padding: 0.2rem 0.45rem;\n  border-radius: 6px;\n  white-space: nowrap;\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.radio[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 999px;\n  border: 2px solid rgb(209, 213, 219);\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.radio-on[_ngcontent-%COMP%] {\n  border-color: rgb(37, 99, 235);\n  background: rgb(37, 99, 235);\n}\n.check-icon[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  font-size: 12px;\n  color: #fff;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2.5rem 1rem;\n  color: rgb(107, 114, 128);\n  font-weight: 500;\n  gap: 0.5rem;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  font-size: 48px;\n  color: rgb(209, 213, 219);\n}\n.link-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.65rem;\n  padding: 1rem 1.25rem;\n  border-top: 1px solid rgb(243, 244, 246);\n  background: rgb(249, 250, 251);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  padding: 0.5rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=link-project-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinkProjectDialogComponent, [{
    type: Component,
    args: [{ selector: "link-project-dialog", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslocoModule, MatDialogModule, MatButtonModule, MatIconModule], template: `<ng-container *transloco="let t">\r
    <div class="link-shell">\r
        <div class="link-header">\r
            <h2 class="link-title">{{ t('webhooks.details.link_project_title') }}</h2>\r
            <button type="button" class="icon-close" (click)="close()" [attr.aria-label]="t('webhooks.new.cancel')">\r
                <mat-icon class="icon-20" svgIcon="heroicons_outline:x-mark"></mat-icon>\r
            </button>\r
        </div>\r
\r
        <p class="link-desc">{{ t('webhooks.details.link_project_description') }}</p>\r
\r
        <div class="search-wrap">\r
            <mat-icon class="search-icon" svgIcon="heroicons_outline:magnifying-glass"></mat-icon>\r
            <input\r
                [formControl]="searchControl"\r
                class="search-input"\r
                [placeholder]="t('webhooks.details.search_project_placeholder')"\r
            />\r
        </div>\r
\r
        <div class="list-wrap">\r
            <button\r
                type="button"\r
                class="project-row"\r
                *ngFor="let project of filteredProjects"\r
                [class.project-row-selected]="selectedProject?._id === project._id"\r
                (click)="selectProject(project)"\r
            >\r
                <div class="project-main">\r
                    <div class="logo-ring">\r
                        <img\r
                            *ngIf="project.project?.branding?.logo"\r
                            [src]="project.project?.branding?.logo"\r
                            alt=""\r
                            class="logo-img"\r
                            (error)="$any($event.target).style.display = 'none'"\r
                        />\r
                        <mat-icon *ngIf="!project.project?.branding?.logo" class="logo-fallback" svgIcon="heroicons_outline:photo"></mat-icon>\r
                    </div>\r
                    <div class="project-text">\r
                        <span class="project-name">{{ project.project?.name }}</span>\r
                        <span class="project-type">{{ project.type }}</span>\r
                    </div>\r
                </div>\r
                <span *ngIf="project.webhook" class="replace-pill">\r
                    {{ t('webhooks.details.replaces') }}: {{ project.webhook?.name || project.webhook }}\r
                </span>\r
                <span class="radio" [class.radio-on]="selectedProject?._id === project._id">\r
                    <mat-icon *ngIf="selectedProject?._id === project._id" class="check-icon" svgIcon="heroicons_outline:check"></mat-icon>\r
                </span>\r
            </button>\r
\r
            <div *ngIf="filteredProjects.length === 0" class="empty-state">\r
                <mat-icon class="empty-icon" svgIcon="heroicons_outline:folder-open"></mat-icon>\r
                <span>{{ t('webhooks.details.no_projects_found') }}</span>\r
            </div>\r
        </div>\r
\r
        <div class="link-footer">\r
            <button type="button" class="btn-secondary" (click)="close()">{{ t('webhooks.new.cancel') }}</button>\r
            <button type="button" class="btn-primary" [disabled]="!selectedProject" (click)="add()">{{ t('webhooks.new.add') }}</button>\r
        </div>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/smart-monitor/webhooks/dialogs/link-project-dialog.component.scss */\n.link-shell {\n  display: flex;\n  flex-direction: column;\n  max-height: min(90vh, 640px);\n  width: min(100vw - 2rem, 520px);\n}\n.link-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 1.25rem 1.25rem 0.5rem;\n}\n.link-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n}\n.icon-close {\n  border: none;\n  background: rgb(249, 250, 251);\n  border-radius: 8px;\n  padding: 0.35rem;\n  cursor: pointer;\n  line-height: 0;\n}\n.icon-close:hover {\n  background: rgb(243, 244, 246);\n}\n.icon-20 {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(107, 114, 128);\n}\n.link-desc {\n  margin: 0 1.25rem 0.75rem;\n  font-size: 0.875rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.search-wrap {\n  position: relative;\n  margin: 0 1.25rem 0.75rem;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(156, 163, 175);\n  pointer-events: none;\n}\n.search-input {\n  width: 100%;\n  height: 44px;\n  padding-left: 2.75rem;\n  padding-right: 0.85rem;\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(249, 250, 251);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.search-input:focus {\n  border-color: rgb(59, 130, 246);\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);\n}\n.list-wrap {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 1.25rem 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-height: 200px;\n}\n.project-row {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  width: 100%;\n  text-align: left;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 12px;\n  padding: 0.65rem 0.75rem;\n  background: #fff;\n  cursor: pointer;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.project-row:hover {\n  background: rgb(249, 250, 251);\n}\n.project-row-selected {\n  border-color: rgb(59, 130, 246);\n  background: rgb(239, 246, 255);\n}\n.project-main {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  flex: 1;\n  min-width: 0;\n}\n.logo-ring {\n  width: 40px;\n  height: 40px;\n  border-radius: 999px;\n  border: 1px solid rgb(243, 244, 246);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: #fff;\n}\n.logo-img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.logo-fallback {\n  width: 22px;\n  height: 22px;\n  font-size: 22px;\n  color: rgb(156, 163, 175);\n}\n.project-text {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.project-name {\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: rgb(17, 24, 39);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.project-type {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.replace-pill {\n  font-size: 0.65rem;\n  color: rgb(180, 83, 9);\n  background: rgb(254, 252, 232);\n  border: 1px solid rgb(253, 230, 138);\n  padding: 0.2rem 0.45rem;\n  border-radius: 6px;\n  white-space: nowrap;\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.radio {\n  width: 20px;\n  height: 20px;\n  border-radius: 999px;\n  border: 2px solid rgb(209, 213, 219);\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.radio-on {\n  border-color: rgb(37, 99, 235);\n  background: rgb(37, 99, 235);\n}\n.check-icon {\n  width: 12px;\n  height: 12px;\n  font-size: 12px;\n  color: #fff;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2.5rem 1rem;\n  color: rgb(107, 114, 128);\n  font-weight: 500;\n  gap: 0.5rem;\n}\n.empty-icon {\n  width: 48px;\n  height: 48px;\n  font-size: 48px;\n  color: rgb(209, 213, 219);\n}\n.link-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.65rem;\n  padding: 1rem 1.25rem;\n  border-top: 1px solid rgb(243, 244, 246);\n  background: rgb(249, 250, 251);\n}\n.btn-secondary {\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n  cursor: pointer;\n}\n.btn-primary {\n  border-radius: 10px;\n  border: none;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  padding: 0.5rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=link-project-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LinkProjectDialogComponent, { className: "LinkProjectDialogComponent", filePath: "src/app/modules/smart-monitor/webhooks/dialogs/link-project-dialog.component.ts", lineNumber: 22 });
})();

// src/app/modules/smart-monitor/webhooks/webhook-detail.component.ts
var _c0 = (a0) => ["/smart-batch", a0];
function WebhookDetailComponent_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-progress-spinner", 6);
    \u0275\u0275elementEnd();
  }
}
function WebhookDetailComponent_ng_container_0_ng_container_4_p_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.webhookData.description);
  }
}
function WebhookDetailComponent_ng_container_0_ng_container_4_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pf_r3 = ctx.$implicit;
    \u0275\u0275property("value", pf_r3._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", pf_r3.project == null ? null : pf_r3.project.name, " (", pf_r3.type, ") ");
  }
}
function WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_li_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pf_r5 = \u0275\u0275nextContext().$implicit;
    const t_r6 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.webhookData.statistics[pf_r5._id].total || 0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.events"));
  }
}
function WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 47)(1, "div", 48)(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 51);
    \u0275\u0275template(7, WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_li_1_span_7_Template, 4, 2, "span", 52);
    \u0275\u0275elementStart(8, "button", 53);
    \u0275\u0275listener("click", function WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_li_1_Template_button_click_8_listener() {
      const pf_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.unlinkProject(pf_r5));
    });
    \u0275\u0275element(9, "mat-icon", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pf_r5 = ctx.$implicit;
    const t_r6 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((pf_r5.project == null ? null : pf_r5.project.name) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pf_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.webhookData.statistics == null ? null : ctx_r1.webhookData.statistics[pf_r5._id]);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r6("webhooks.details.unlink_title"));
  }
}
function WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 58)(1, "span", 48)(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const configId_r7 = ctx.ngIf;
    const config_r8 = \u0275\u0275nextContext().$implicit;
    const t_r6 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, configId_r7));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.batchConfigName(config_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.batch_configuration"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.list.view"));
  }
}
function WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 47);
    \u0275\u0275template(1, WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_li_2_a_1_Template, 8, 6, "a", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const config_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.batchConfigId(config_r8));
  }
}
function WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 45);
    \u0275\u0275template(1, WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_li_1_Template, 10, 4, "li", 46)(2, WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_li_2_Template, 2, 1, "li", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.webhookData.projectFlow);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.webhookData.batchConfigurations);
  }
}
function WebhookDetailComponent_ng_container_0_ng_container_4_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.list.card.not_related_projects"), " ");
  }
}
function WebhookDetailComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 7)(2, "div", 8)(3, "button", 9);
    \u0275\u0275listener("click", function WebhookDetailComponent_ng_container_0_ng_container_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275element(4, "mat-icon", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "h1", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 14)(11, "div", 15)(12, "span", 16);
    \u0275\u0275element(13, "span", 17);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-slide-toggle", 18);
    \u0275\u0275twoWayListener("ngModelChange", function WebhookDetailComponent_ng_container_0_ng_container_4_Template_mat_slide_toggle_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.webhookData.isActive, $event) || (ctx_r1.webhookData.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function WebhookDetailComponent_ng_container_0_ng_container_4_Template_mat_slide_toggle_change_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activeWebhook());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 19);
    \u0275\u0275listener("click", function WebhookDetailComponent_ng_container_0_ng_container_4_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.edit());
    });
    \u0275\u0275element(17, "mat-icon", 20);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 21);
    \u0275\u0275element(20, "mat-icon", 22);
    \u0275\u0275elementStart(21, "code", 23);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, WebhookDetailComponent_ng_container_0_ng_container_4_p_23_Template, 2, 1, "p", 24);
    \u0275\u0275element(24, "div", 25);
    \u0275\u0275elementStart(25, "div", 26)(26, "h2", 27);
    \u0275\u0275element(27, "mat-icon", 28);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 29);
    \u0275\u0275listener("ngModelChange", function WebhookDetailComponent_ng_container_0_ng_container_4_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onProjectFlowFilterChange($event));
    });
    \u0275\u0275elementStart(30, "option", 30);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, WebhookDetailComponent_ng_container_0_ng_container_4_option_32_Template, 2, 3, "option", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_Template, 3, 2, "ul", 32)(34, WebhookDetailComponent_ng_container_0_ng_container_4_div_34_Template, 2, 1, "div", 33);
    \u0275\u0275elementStart(35, "button", 34);
    \u0275\u0275listener("click", function WebhookDetailComponent_ng_container_0_ng_container_4_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openLinkProject());
    });
    \u0275\u0275element(36, "mat-icon", 35);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "section", 36)(39, "h2", 37);
    \u0275\u0275element(40, "mat-icon", 38);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "webhook-stats-bars", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "section", 40)(44, "h2", 41);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "webhook-events", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", t_r6("webhooks.detail.back"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.webhookData.name || t_r6("webhooks.detail.unnamed"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.detail.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("on", ctx_r1.webhookData.isActive)("off", !ctx_r1.webhookData.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.webhookData.isActive ? t_r6("webhooks.list.card.active") : t_r6("webhooks.list.card.disabled"), " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.webhookData.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.list.edit"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.webhookData.url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.webhookData.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.details.related_project"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.projectFlowSelected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.all"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.webhookData.projectFlow);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasLinkedSources(ctx_r1.webhookData));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasLinkedSources(ctx_r1.webhookData));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.details.add-project"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.graph.activity"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("statistics", ctx_r1.webhookData.statisticsByDay)("days", 30);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("webhooks.events.section_title"));
    \u0275\u0275advance();
    \u0275\u0275property("webhookId", ctx_r1.webhookId)("initialEvents", ctx_r1.eventsData)("initialPaginator", ctx_r1.eventsMeta)("projectFlowFilter", ctx_r1.projectFlowSelected);
  }
}
function WebhookDetailComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275template(3, WebhookDetailComponent_ng_container_0_div_3_Template, 2, 0, "div", 3)(4, WebhookDetailComponent_ng_container_0_ng_container_4_Template, 47, 27, "ng-container", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.webhookData);
  }
}
var WebhookDetailComponent = class _WebhookDetailComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._service = inject(WebhooksService);
    this._splash = inject(FuseSplashScreenService);
    this._cdr = inject(ChangeDetectorRef);
    this._dialog = inject(MatDialog);
    this._confirm = inject(FuseConfirmationService);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._unsub = new Subject();
    this.loading = true;
    this.webhookId = "";
    this.eventsData = [];
    this.eventsMeta = {};
    this.projectFlows = [];
    this.projectFlowSelected = "";
  }
  ngOnInit() {
    this._route.paramMap.pipe(takeUntil(this._unsub)).subscribe((pm) => {
      const id = pm.get("id");
      if (id) {
        this.webhookId = id;
        this._load();
      }
    });
  }
  ngOnDestroy() {
    this._unsub.next();
    this._unsub.complete();
  }
  back() {
    this._router.navigate(["/smart-monitor/webhooks"]);
  }
  _load() {
    this.loading = true;
    this._cdr.markForCheck();
    this._service.getProjectFlows().subscribe({
      next: (r) => {
        this.projectFlows = r.data || [];
        this._cdr.markForCheck();
      },
      error: () => {
      }
    });
    this._service.getDetails(this.webhookId).subscribe({
      next: (details) => {
        this.webhookData = details.data;
        this._fetchEvents();
      },
      error: () => {
        this.loading = false;
        this._cdr.markForCheck();
        this._router.navigate(["/smart-monitor/webhooks"]);
      }
    });
  }
  _fetchEvents() {
    this._service.getEvents({
      where_webhook: this.webhookId,
      page: 1,
      perPage: 10
    }).subscribe({
      next: (response) => {
        this.eventsData = response.data || [];
        this.eventsMeta = {
          total: response.total,
          pages: response.pages,
          limit: response.limit
        };
        this.loading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  activeWebhook() {
    if (!this.webhookData)
      return;
    this._splash.show();
    const t0 = Date.now();
    this._service.activeWebhook(this.webhookData._id, this.webhookData.isActive).subscribe({
      next: (response) => {
        this.webhookData.isActive = response.data.isActive;
        this._closeSplash(t0);
      },
      error: () => this._closeSplash(t0)
    });
  }
  _closeSplash(start) {
    const wait = Math.max(0, 1e3 - (Date.now() - start));
    setTimeout(() => {
      this._splash.hide();
      this._cdr.markForCheck();
    }, wait);
  }
  /** Handles `MatDialogRef` payloads from legacy plain documents and new `{ savedWebhook }` wraps. */
  _mergeWebhookEditDialogResult(result) {
    if (!result || typeof result !== "object")
      return;
    const partial = result;
    if (partial.deleted === true) {
      void this._router.navigate(["/smart-monitor/webhooks"]);
      return;
    }
    if ("savedWebhook" in partial) {
      const doc = partial.savedWebhook;
      if (doc && typeof doc === "object") {
        this.webhookData = __spreadValues(__spreadValues({}, this.webhookData), doc);
        this._cdr.markForCheck();
      }
      return;
    }
    if ("_id" in partial) {
      this.webhookData = __spreadValues(__spreadValues({}, this.webhookData), partial);
      this._cdr.markForCheck();
    }
  }
  edit() {
    this._dialog.open(NewWebhookDialogComponent, {
      data: this.webhookData,
      width: "600px",
      maxWidth: "92vw",
      panelClass: "webhook-dialog-panel"
    }).afterClosed().subscribe((result) => {
      this._mergeWebhookEditDialogResult(result);
    });
  }
  openLinkProject() {
    this._dialog.open(LinkProjectDialogComponent, {
      data: { projects: this.projectFlows, currentWebhookId: this.webhookData._id },
      width: "560px",
      maxWidth: "92vw",
      panelClass: "webhook-dialog-panel"
    }).afterClosed().subscribe((selected) => {
      if (!selected)
        return;
      this._service.update(this.webhookData._id, { link: [selected._id] }).subscribe({
        next: (response) => {
          if (response.data)
            this._applyWebhookUpdate(response.data);
        },
        error: () => this._snack.open(this._transloco.translate("webhooks.messages.request_failed"), void 0, { duration: 3e3 })
      });
    });
  }
  unlinkProject(projectFlow) {
    this._confirm.open({
      title: this._transloco.translate("webhooks.details.unlink_title"),
      message: this._transloco.translate("webhooks.details.unlink_message"),
      actions: {
        confirm: { label: this._transloco.translate("webhooks.details.unlink_confirm") },
        cancel: { label: this._transloco.translate("webhooks.new.cancel") }
      }
    }).afterClosed().subscribe((r) => {
      if (r !== "confirmed")
        return;
      this._service.update(this.webhookData._id, { unlink: [projectFlow._id] }).subscribe({
        next: (response) => {
          if (response.data)
            this._applyWebhookUpdate(response.data);
        },
        error: () => this._snack.open(this._transloco.translate("webhooks.messages.request_failed"), void 0, { duration: 3e3 })
      });
    });
  }
  _applyWebhookUpdate(newData) {
    const raw = newData.projectFlow || [];
    const ids = raw.map((x) => typeof x === "string" ? x : x._id);
    this.webhookData.projectFlow = this.projectFlows.filter((pf) => ids.includes(pf._id));
    this._cdr.markForCheck();
  }
  onProjectFlowFilterChange(value) {
    this.projectFlowSelected = value;
    this._cdr.markForCheck();
  }
  hasLinkedSources(webhook) {
    return Boolean(webhook?.projectFlow?.length || webhook?.batchConfigurations?.length);
  }
  batchConfigName(config) {
    if (!config)
      return "";
    if (typeof config === "string")
      return config;
    return config.name || String(config._id || "");
  }
  batchConfigId(config) {
    if (!config)
      return null;
    if (typeof config === "string")
      return config;
    return config._id || null;
  }
  static {
    this.\u0275fac = function WebhookDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebhookDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebhookDetailComponent, selectors: [["webhook-detail"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "page"], [1, "inner"], ["class", "state-loading", 4, "ngIf"], [4, "ngIf"], [1, "state-loading"], ["diameter", "40", "mode", "indeterminate"], [1, "hero-card"], [1, "hero-top"], ["type", "button", 1, "icon-btn", 3, "click"], ["svgIcon", "heroicons_outline:arrow-left"], [1, "hero-title-block"], [1, "hero-name"], [1, "hero-sub"], [1, "hero-actions"], [1, "toggle-wrap"], [1, "status-pill"], [1, "dot"], ["color", "primary", 3, "ngModelChange", "change", "ngModel"], ["type", "button", 1, "btn-outline", 3, "click"], ["svgIcon", "heroicons_outline:pencil-square", 1, "btn-ic"], [1, "hero-url"], ["svgIcon", "heroicons_outline:link", 1, "url-ic"], [1, "url-text"], ["class", "hero-desc", 4, "ngIf"], [1, "hero-divider"], [1, "flows-header"], [1, "flows-title"], ["svgIcon", "heroicons_outline:folder", 1, "flows-ic"], [1, "native-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "pf-list", 4, "ngIf"], ["class", "panel-empty", 4, "ngIf"], ["type", "button", 1, "btn-link-flow", 3, "click"], ["svgIcon", "heroicons_outline:plus", 1, "btn-ic"], [1, "panel"], [1, "panel-title"], ["svgIcon", "heroicons_outline:chart-bar", 1, "panel-ic"], [3, "statistics", "days"], [1, "events-section"], [1, "section-heading"], [3, "webhookId", "initialEvents", "initialPaginator", "projectFlowFilter"], [1, "hero-desc"], [3, "value"], [1, "pf-list"], ["class", "pf-item", 4, "ngFor", "ngForOf"], [1, "pf-item"], [1, "pf-info"], [1, "pf-name"], [1, "pf-type"], [1, "pf-meta"], ["class", "pf-count", 4, "ngIf"], ["type", "button", 1, "unlink", 3, "click"], ["svgIcon", "heroicons_outline:trash"], [1, "pf-count"], [1, "pf-count-label"], ["class", "pf-batch-link", 3, "routerLink", 4, "ngIf"], [1, "pf-batch-link", 3, "routerLink"], [1, "pf-open"], [1, "panel-empty"]], template: function WebhookDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, WebhookDetailComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      FormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      SelectControlValueAccessor,
      NgControlStatus,
      NgModel,
      RouterModule,
      RouterLink,
      TranslocoModule,
      TranslocoDirective,
      MatButtonModule,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSlideToggleModule,
      MatSlideToggle,
      WebhookStatsBarsComponent,
      WebhookEventsComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  background: rgb(249, 250, 251);\n}\n.inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n  margin: 0;\n  padding: 2rem 1.25rem 3rem;\n  box-sizing: border-box;\n}\n.state-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.hero-card[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 1.25rem 1.35rem;\n  margin-bottom: 1rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.hero-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  border-radius: 10px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: rgb(107, 114, 128);\n  flex-shrink: 0;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(249, 250, 251);\n  color: rgb(17, 24, 39);\n}\n.hero-title-block[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.hero-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.hero-sub[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 0.875rem;\n  color: rgb(107, 114, 128);\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n}\n.toggle-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.35rem 0.65rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 12px;\n  background: rgb(249, 250, 251);\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-pill[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: rgb(209, 213, 219);\n}\n.status-pill.on[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: rgb(34, 197, 94);\n}\n.status-pill.off[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: rgb(156, 163, 175);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  border-radius: 10px;\n  padding: 0.5rem 0.85rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n  cursor: pointer;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgb(249, 250, 251);\n}\n.btn-ic[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.hero-url[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.55rem 0.85rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 10px;\n  background: rgb(249, 250, 251);\n  min-width: 0;\n  overflow: hidden;\n}\n.url-ic[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  color: rgb(156, 163, 175);\n  flex-shrink: 0;\n}\n.url-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgb(55, 65, 81);\n  word-break: break-all;\n  min-width: 0;\n}\n.hero-desc[_ngcontent-%COMP%] {\n  margin: 0.65rem 0 0;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(107, 114, 128);\n}\n.hero-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgb(229, 231, 235);\n  margin: 1rem 0;\n}\n.flows-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.65rem;\n  margin-bottom: 0.75rem;\n}\n.flows-title[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-size: 0.9375rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.flows-ic[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(37, 99, 235);\n}\n.native-select[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 10px;\n  padding: 0.4rem 0.65rem;\n  font-size: 0.8125rem;\n  background: rgb(249, 250, 251);\n  color: rgb(55, 65, 81);\n  max-width: 220px;\n}\n.pf-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 0.75rem;\n  padding: 0;\n  max-height: 240px;\n  overflow-y: auto;\n}\n.pf-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.55rem 0;\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.pf-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.pf-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  min-width: 0;\n}\n.pf-name[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pf-type[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.pf-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.pf-count[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  color: rgb(37, 99, 235);\n}\n.pf-count-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.7rem;\n  color: rgb(107, 114, 128);\n  margin-left: 0.15rem;\n}\n.pf-batch-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  width: 100%;\n  min-width: 0;\n  text-decoration: none;\n  color: inherit;\n  border-radius: 10px;\n  padding: 0.15rem 0.25rem;\n  margin: -0.15rem -0.25rem;\n}\n.pf-batch-link[_ngcontent-%COMP%]:hover {\n  background: rgb(239, 246, 255);\n}\n.pf-open[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid rgb(219, 234, 254);\n  background: rgb(239, 246, 255);\n  color: rgb(37, 99, 235);\n  border-radius: 8px;\n  padding: 0.3rem 0.65rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.pf-batch-link[_ngcontent-%COMP%]:hover   .pf-open[_ngcontent-%COMP%] {\n  background: rgb(219, 234, 254);\n}\n.unlink[_ngcontent-%COMP%] {\n  border: none;\n  background: rgb(254, 242, 242);\n  color: rgb(220, 38, 38);\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.unlink[_ngcontent-%COMP%]:hover {\n  background: rgb(254, 226, 226);\n}\n.unlink[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.panel-empty[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgb(180, 83, 9);\n  background: rgb(254, 252, 232);\n  border: 1px solid rgb(253, 230, 138);\n  padding: 0.75rem;\n  border-radius: 10px;\n  margin-bottom: 0.75rem;\n}\n.btn-link-flow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  width: 100%;\n  border: 1px dashed rgb(191, 219, 254);\n  border-radius: 10px;\n  background: rgb(239, 246, 255);\n  color: rgb(37, 99, 235);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.55rem 1rem;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-link-flow[_ngcontent-%COMP%]:hover {\n  background: rgb(219, 234, 254);\n}\n.panel[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 14px;\n  background: #fff;\n  padding: 1.1rem 1.15rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  min-width: 0;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}\n.panel-title[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-size: 0.9375rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.panel-ic[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(37, 99, 235);\n}\n.events-section[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.section-heading[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 1.0625rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n}\n.dark[_nghost-%COMP%]   .page[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .page[_ngcontent-%COMP%] {\n  background: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .icon-btn[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  border-color: rgb(71, 85, 105);\n  background: rgb(30, 41, 59);\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(51, 65, 85);\n  color: rgb(248, 250, 252);\n}\n.dark[_nghost-%COMP%]   .hero-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .hero-card[_ngcontent-%COMP%] {\n  border-color: rgb(51, 65, 85);\n  background: rgb(30, 41, 59);\n}\n.dark[_nghost-%COMP%]   .hero-name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .hero-name[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.dark[_nghost-%COMP%]   .hero-sub[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .hero-sub[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .toggle-wrap[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .toggle-wrap[_ngcontent-%COMP%] {\n  border-color: rgb(71, 85, 105);\n  background: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .status-pill[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  color: rgb(226, 232, 240);\n}\n.dark[_nghost-%COMP%]   .status-pill.on[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-pill.on[_ngcontent-%COMP%] {\n  color: rgb(187, 247, 208);\n}\n.dark[_nghost-%COMP%]   .status-pill.off[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-pill.off[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.dark[_nghost-%COMP%]   .status-pill[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-pill[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: rgb(100, 116, 139);\n}\n.dark[_nghost-%COMP%]   .btn-outline[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n  border-color: rgb(71, 85, 105);\n  background: rgb(30, 41, 59);\n  color: rgb(226, 232, 240);\n}\n.dark[_nghost-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .hero-url[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .hero-url[_ngcontent-%COMP%] {\n  border-color: rgb(51, 65, 85);\n  background: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .url-ic[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .url-ic[_ngcontent-%COMP%] {\n  color: rgb(100, 116, 139);\n}\n.dark[_nghost-%COMP%]   .url-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .url-text[_ngcontent-%COMP%] {\n  color: rgb(226, 232, 240);\n}\n.dark[_nghost-%COMP%]   .hero-desc[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .hero-desc[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .hero-divider[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .hero-divider[_ngcontent-%COMP%] {\n  background: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .flows-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .flows-title[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.dark[_nghost-%COMP%]   .flows-ic[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .flows-ic[_ngcontent-%COMP%] {\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .native-select[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .native-select[_ngcontent-%COMP%] {\n  border-color: rgb(71, 85, 105);\n  background: rgb(15, 23, 42);\n  color: rgb(226, 232, 240);\n  color-scheme: dark;\n}\n.dark[_nghost-%COMP%]   .pf-item[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pf-item[_ngcontent-%COMP%] {\n  border-bottom-color: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .pf-name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pf-name[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.dark[_nghost-%COMP%]   .pf-type[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pf-type[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .pf-count[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pf-count[_ngcontent-%COMP%] {\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .pf-count-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pf-count-label[_ngcontent-%COMP%] {\n  color: rgb(100, 116, 139);\n}\n.dark[_nghost-%COMP%]   .pf-batch-link[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .pf-batch-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.18);\n}\n.dark[_nghost-%COMP%]   .pf-open[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pf-open[_ngcontent-%COMP%] {\n  border-color: rgba(96, 165, 250, 0.45);\n  background: rgba(37, 99, 235, 0.18);\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .pf-batch-link[_ngcontent-%COMP%]:hover   .pf-open[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .pf-batch-link[_ngcontent-%COMP%]:hover   .pf-open[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.28);\n}\n.dark[_nghost-%COMP%]   .unlink[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .unlink[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.14);\n  color: rgb(252, 165, 165);\n}\n.dark[_nghost-%COMP%]   .unlink[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .unlink[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 113, 113, 0.24);\n}\n.dark[_nghost-%COMP%]   .panel-empty[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .panel-empty[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, 0.12);\n  border-color: rgba(250, 204, 21, 0.38);\n  color: rgb(253, 224, 71);\n}\n.dark[_nghost-%COMP%]   .btn-link-flow[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .btn-link-flow[_ngcontent-%COMP%] {\n  border-color: rgba(96, 165, 250, 0.45);\n  background: rgba(37, 99, 235, 0.18);\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .btn-link-flow[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .btn-link-flow[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.28);\n}\n.dark[_nghost-%COMP%]   .panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .panel[_ngcontent-%COMP%] {\n  border-color: rgb(51, 65, 85);\n  background: rgb(30, 41, 59);\n}\n.dark[_nghost-%COMP%]   .panel-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.dark[_nghost-%COMP%]   .panel-ic[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .panel-ic[_ngcontent-%COMP%] {\n  color: rgb(147, 197, 253);\n}\n.dark[_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n/*# sourceMappingURL=webhook-detail.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WebhookDetailComponent, [{
    type: Component,
    args: [{ selector: "webhook-detail", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      TranslocoModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSlideToggleModule,
      WebhookStatsBarsComponent,
      WebhookEventsComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="page">\r
        <div class="inner">\r
            <div *ngIf="loading" class="state-loading">\r
                <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>\r
            </div>\r
\r
            <ng-container *ngIf="!loading && webhookData">\r
                <section class="hero-card">\r
                    <div class="hero-top">\r
                        <button type="button" class="icon-btn" (click)="back()" [attr.aria-label]="t('webhooks.detail.back')">\r
                            <mat-icon svgIcon="heroicons_outline:arrow-left"></mat-icon>\r
                        </button>\r
                        <div class="hero-title-block">\r
                            <h1 class="hero-name">{{ webhookData.name || t('webhooks.detail.unnamed') }}</h1>\r
                            <p class="hero-sub">{{ t('webhooks.detail.subtitle') }}</p>\r
                        </div>\r
                        <div class="hero-actions">\r
                            <div class="toggle-wrap">\r
                                <span class="status-pill" [class.on]="webhookData.isActive" [class.off]="!webhookData.isActive">\r
                                    <span class="dot"></span>\r
                                    {{ webhookData.isActive ? t('webhooks.list.card.active') : t('webhooks.list.card.disabled') }}\r
                                </span>\r
                                <mat-slide-toggle\r
                                    [(ngModel)]="webhookData.isActive"\r
                                    (change)="activeWebhook()"\r
                                    color="primary"\r
                                ></mat-slide-toggle>\r
                            </div>\r
                            <button type="button" class="btn-outline" (click)="edit()">\r
                                <mat-icon class="btn-ic" svgIcon="heroicons_outline:pencil-square"></mat-icon>\r
                                {{ t('webhooks.list.edit') }}\r
                            </button>\r
                        </div>\r
                    </div>\r
\r
                    <div class="hero-url">\r
                        <mat-icon class="url-ic" svgIcon="heroicons_outline:link"></mat-icon>\r
                        <code class="url-text">{{ webhookData.url }}</code>\r
                    </div>\r
\r
                    <p class="hero-desc" *ngIf="webhookData.description">{{ webhookData.description }}</p>\r
\r
                    <div class="hero-divider"></div>\r
\r
                    <div class="flows-header">\r
                        <h2 class="flows-title">\r
                            <mat-icon class="flows-ic" svgIcon="heroicons_outline:folder"></mat-icon>\r
                            {{ t('webhooks.details.related_project') }}\r
                        </h2>\r
                        <select\r
                            class="native-select"\r
                            [ngModel]="projectFlowSelected"\r
                            (ngModelChange)="onProjectFlowFilterChange($event)"\r
                        >\r
                            <option value="">{{ t('webhooks.details.all') }}</option>\r
                            <option *ngFor="let pf of webhookData.projectFlow" [value]="pf._id">\r
                                {{ pf.project?.name }} ({{ pf.type }})\r
                            </option>\r
                        </select>\r
                    </div>\r
\r
                    <ul class="pf-list" *ngIf="hasLinkedSources(webhookData)">\r
                        <li class="pf-item" *ngFor="let pf of webhookData.projectFlow">\r
                            <div class="pf-info">\r
                                <span class="pf-name">{{ pf.project?.name || '\u2014' }}</span>\r
                                <span class="pf-type">{{ pf.type }}</span>\r
                            </div>\r
                            <div class="pf-meta">\r
                                <span class="pf-count" *ngIf="webhookData.statistics?.[pf._id]">\r
                                    {{ webhookData.statistics[pf._id].total || 0 }}\r
                                    <span class="pf-count-label">{{ t('webhooks.details.events') }}</span>\r
                                </span>\r
                                <button type="button" class="unlink" (click)="unlinkProject(pf)" [attr.aria-label]="t('webhooks.details.unlink_title')">\r
                                    <mat-icon svgIcon="heroicons_outline:trash"></mat-icon>\r
                                </button>\r
                            </div>\r
                        </li>\r
                        <li class="pf-item" *ngFor="let config of webhookData.batchConfigurations">\r
                            <a\r
                                *ngIf="batchConfigId(config) as configId"\r
                                class="pf-batch-link"\r
                                [routerLink]="['/smart-batch', configId]"\r
                            >\r
                                <span class="pf-info">\r
                                    <span class="pf-name">{{ batchConfigName(config) }}</span>\r
                                    <span class="pf-type">{{ t('webhooks.details.batch_configuration') }}</span>\r
                                </span>\r
                                <span class="pf-open">{{ t('webhooks.list.view') }}</span>\r
                            </a>\r
                        </li>\r
                    </ul>\r
\r
                    <div class="panel-empty" *ngIf="!hasLinkedSources(webhookData)">\r
                        {{ t('webhooks.list.card.not_related_projects') }}\r
                    </div>\r
\r
                    <button type="button" class="btn-link-flow" (click)="openLinkProject()">\r
                        <mat-icon class="btn-ic" svgIcon="heroicons_outline:plus"></mat-icon>\r
                        {{ t('webhooks.details.add-project') }}\r
                    </button>\r
                </section>\r
\r
                <section class="panel">\r
                    <h2 class="panel-title">\r
                        <mat-icon class="panel-ic" svgIcon="heroicons_outline:chart-bar"></mat-icon>\r
                        {{ t('webhooks.graph.activity') }}\r
                    </h2>\r
                    <webhook-stats-bars [statistics]="webhookData.statisticsByDay" [days]="30"></webhook-stats-bars>\r
                </section>\r
\r
                <section class="events-section">\r
                    <h2 class="section-heading">{{ t('webhooks.events.section_title') }}</h2>\r
                    <webhook-events\r
                        [webhookId]="webhookId"\r
                        [initialEvents]="eventsData"\r
                        [initialPaginator]="eventsMeta"\r
                        [projectFlowFilter]="projectFlowSelected"\r
                    ></webhook-events>\r
                </section>\r
            </ng-container>\r
        </div>\r
    </div>\r
</ng-container>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-monitor/webhooks/webhook-detail.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n}\n.page {\n  min-height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  background: rgb(249, 250, 251);\n}\n.inner {\n  width: 100%;\n  max-width: none;\n  margin: 0;\n  padding: 2rem 1.25rem 3rem;\n  box-sizing: border-box;\n}\n.state-loading {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.hero-card {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 1.25rem 1.35rem;\n  margin-bottom: 1rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.hero-top {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.icon-btn {\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  border-radius: 10px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: rgb(107, 114, 128);\n  flex-shrink: 0;\n}\n.icon-btn:hover {\n  background: rgb(249, 250, 251);\n  color: rgb(17, 24, 39);\n}\n.hero-title-block {\n  flex: 1;\n  min-width: 180px;\n}\n.hero-name {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.hero-sub {\n  margin: 0.25rem 0 0;\n  font-size: 0.875rem;\n  color: rgb(107, 114, 128);\n}\n.hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n}\n.toggle-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.35rem 0.65rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 12px;\n  background: rgb(249, 250, 251);\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-pill .dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: rgb(209, 213, 219);\n}\n.status-pill.on .dot {\n  background: rgb(34, 197, 94);\n}\n.status-pill.off .dot {\n  background: rgb(156, 163, 175);\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  border-radius: 10px;\n  padding: 0.5rem 0.85rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n  cursor: pointer;\n}\n.btn-outline:hover {\n  background: rgb(249, 250, 251);\n}\n.btn-ic {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.hero-url {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.55rem 0.85rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 10px;\n  background: rgb(249, 250, 251);\n  min-width: 0;\n  overflow: hidden;\n}\n.url-ic {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  color: rgb(156, 163, 175);\n  flex-shrink: 0;\n}\n.url-text {\n  font-size: 0.8125rem;\n  color: rgb(55, 65, 81);\n  word-break: break-all;\n  min-width: 0;\n}\n.hero-desc {\n  margin: 0.65rem 0 0;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(107, 114, 128);\n}\n.hero-divider {\n  height: 1px;\n  background: rgb(229, 231, 235);\n  margin: 1rem 0;\n}\n.flows-header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.65rem;\n  margin-bottom: 0.75rem;\n}\n.flows-title {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-size: 0.9375rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.flows-ic {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(37, 99, 235);\n}\n.native-select {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 10px;\n  padding: 0.4rem 0.65rem;\n  font-size: 0.8125rem;\n  background: rgb(249, 250, 251);\n  color: rgb(55, 65, 81);\n  max-width: 220px;\n}\n.pf-list {\n  list-style: none;\n  margin: 0 0 0.75rem;\n  padding: 0;\n  max-height: 240px;\n  overflow-y: auto;\n}\n.pf-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.55rem 0;\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.pf-item:last-child {\n  border-bottom: none;\n}\n.pf-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  min-width: 0;\n}\n.pf-name {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pf-type {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.pf-meta {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.pf-count {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  color: rgb(37, 99, 235);\n}\n.pf-count-label {\n  font-weight: 500;\n  font-size: 0.7rem;\n  color: rgb(107, 114, 128);\n  margin-left: 0.15rem;\n}\n.pf-batch-link {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  width: 100%;\n  min-width: 0;\n  text-decoration: none;\n  color: inherit;\n  border-radius: 10px;\n  padding: 0.15rem 0.25rem;\n  margin: -0.15rem -0.25rem;\n}\n.pf-batch-link:hover {\n  background: rgb(239, 246, 255);\n}\n.pf-open {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid rgb(219, 234, 254);\n  background: rgb(239, 246, 255);\n  color: rgb(37, 99, 235);\n  border-radius: 8px;\n  padding: 0.3rem 0.65rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.pf-batch-link:hover .pf-open {\n  background: rgb(219, 234, 254);\n}\n.unlink {\n  border: none;\n  background: rgb(254, 242, 242);\n  color: rgb(220, 38, 38);\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.unlink:hover {\n  background: rgb(254, 226, 226);\n}\n.unlink mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.panel-empty {\n  font-size: 0.8125rem;\n  color: rgb(180, 83, 9);\n  background: rgb(254, 252, 232);\n  border: 1px solid rgb(253, 230, 138);\n  padding: 0.75rem;\n  border-radius: 10px;\n  margin-bottom: 0.75rem;\n}\n.btn-link-flow {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  width: 100%;\n  border: 1px dashed rgb(191, 219, 254);\n  border-radius: 10px;\n  background: rgb(239, 246, 255);\n  color: rgb(37, 99, 235);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.55rem 1rem;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-link-flow:hover {\n  background: rgb(219, 234, 254);\n}\n.panel {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 14px;\n  background: #fff;\n  padding: 1.1rem 1.15rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  min-width: 0;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}\n.panel-title {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-size: 0.9375rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.panel-ic {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(37, 99, 235);\n}\n.events-section {\n  margin-top: 0.5rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.section-heading {\n  margin: 0 0 0.75rem;\n  font-size: 1.0625rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n}\n:host-context(.dark) .page {\n  background: rgb(15, 23, 42);\n}\n:host-context(.dark) .icon-btn {\n  border-color: rgb(71, 85, 105);\n  background: rgb(30, 41, 59);\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .icon-btn:hover {\n  background: rgb(51, 65, 85);\n  color: rgb(248, 250, 252);\n}\n:host-context(.dark) .hero-card {\n  border-color: rgb(51, 65, 85);\n  background: rgb(30, 41, 59);\n}\n:host-context(.dark) .hero-name {\n  color: rgb(248, 250, 252);\n}\n:host-context(.dark) .hero-sub {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .toggle-wrap {\n  border-color: rgb(71, 85, 105);\n  background: rgb(15, 23, 42);\n}\n:host-context(.dark) .status-pill {\n  color: rgb(226, 232, 240);\n}\n:host-context(.dark) .status-pill.on {\n  color: rgb(187, 247, 208);\n}\n:host-context(.dark) .status-pill.off {\n  color: rgb(203, 213, 225);\n}\n:host-context(.dark) .status-pill .dot {\n  background: rgb(100, 116, 139);\n}\n:host-context(.dark) .btn-outline {\n  border-color: rgb(71, 85, 105);\n  background: rgb(30, 41, 59);\n  color: rgb(226, 232, 240);\n}\n:host-context(.dark) .btn-outline:hover {\n  background: rgb(51, 65, 85);\n}\n:host-context(.dark) .hero-url {\n  border-color: rgb(51, 65, 85);\n  background: rgb(15, 23, 42);\n}\n:host-context(.dark) .url-ic {\n  color: rgb(100, 116, 139);\n}\n:host-context(.dark) .url-text {\n  color: rgb(226, 232, 240);\n}\n:host-context(.dark) .hero-desc {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .hero-divider {\n  background: rgb(51, 65, 85);\n}\n:host-context(.dark) .flows-title {\n  color: rgb(248, 250, 252);\n}\n:host-context(.dark) .flows-ic {\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .native-select {\n  border-color: rgb(71, 85, 105);\n  background: rgb(15, 23, 42);\n  color: rgb(226, 232, 240);\n  color-scheme: dark;\n}\n:host-context(.dark) .pf-item {\n  border-bottom-color: rgb(51, 65, 85);\n}\n:host-context(.dark) .pf-name {\n  color: rgb(248, 250, 252);\n}\n:host-context(.dark) .pf-type {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .pf-count {\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .pf-count-label {\n  color: rgb(100, 116, 139);\n}\n:host-context(.dark) .pf-batch-link:hover {\n  background: rgba(37, 99, 235, 0.18);\n}\n:host-context(.dark) .pf-open {\n  border-color: rgba(96, 165, 250, 0.45);\n  background: rgba(37, 99, 235, 0.18);\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .pf-batch-link:hover .pf-open {\n  background: rgba(37, 99, 235, 0.28);\n}\n:host-context(.dark) .unlink {\n  background: rgba(248, 113, 113, 0.14);\n  color: rgb(252, 165, 165);\n}\n:host-context(.dark) .unlink:hover {\n  background: rgba(248, 113, 113, 0.24);\n}\n:host-context(.dark) .panel-empty {\n  background: rgba(234, 179, 8, 0.12);\n  border-color: rgba(250, 204, 21, 0.38);\n  color: rgb(253, 224, 71);\n}\n:host-context(.dark) .btn-link-flow {\n  border-color: rgba(96, 165, 250, 0.45);\n  background: rgba(37, 99, 235, 0.18);\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .btn-link-flow:hover {\n  background: rgba(37, 99, 235, 0.28);\n}\n:host-context(.dark) .panel {\n  border-color: rgb(51, 65, 85);\n  background: rgb(30, 41, 59);\n}\n:host-context(.dark) .panel-title {\n  color: rgb(248, 250, 252);\n}\n:host-context(.dark) .panel-ic {\n  color: rgb(147, 197, 253);\n}\n:host-context(.dark) .section-heading {\n  color: rgb(248, 250, 252);\n}\n/*# sourceMappingURL=webhook-detail.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebhookDetailComponent, { className: "WebhookDetailComponent", filePath: "src/app/modules/smart-monitor/webhooks/webhook-detail.component.ts", lineNumber: 47 });
})();
export {
  WebhookDetailComponent
};
//# sourceMappingURL=chunk-XW54MLQJ.js.map
