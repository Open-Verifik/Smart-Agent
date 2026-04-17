import {
  NewWebhookDialogComponent,
  WebhookStatsBarsComponent,
  WebhooksService
} from "./chunk-A4AICJFH.js";
import {
  Clipboard,
  ClipboardModule
} from "./chunk-FUHKLPA6.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-RWPBVZ63.js";
import {
  FuseConfirmationService
} from "./chunk-EG4DN2O6.js";
import {
  FuseSplashScreenService
} from "./chunk-AAIC5PCV.js";
import "./chunk-6FS3LBOZ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DXMIRT7Q.js";
import "./chunk-LPSMXQSY.js";
import "./chunk-GMB4P7VL.js";
import "./chunk-B4CPLDBC.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-RJTDXPAX.js";
import "./chunk-BAVSUFW7.js";
import "./chunk-6KHU2J3U.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KCV7S453.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import "./chunk-AY2HQ4EH.js";
import "./chunk-SYP4RNRN.js";
import "./chunk-3YVZWUPK.js";
import "./chunk-L4JZMXIC.js";
import "./chunk-2W5F3UIW.js";
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
} from "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
import "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  Inject,
  Input,
  JsonPipe,
  MatButtonModule,
  MatIconButton,
  NgForOf,
  NgIf,
  Subject,
  debounceTime,
  distinctUntilChanged,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
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
} from "./chunk-YTOBX75K.js";
import {
  __spreadValues
} from "./chunk-KTESVR3Q.js";

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
    args: [{ selector: "link-project-dialog", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslocoModule, MatDialogModule, MatButtonModule, MatIconModule], template: `<ng-container *transloco="let t">
    <div class="link-shell">
        <div class="link-header">
            <h2 class="link-title">{{ t('webhooks.details.link_project_title') }}</h2>
            <button type="button" class="icon-close" (click)="close()" [attr.aria-label]="t('webhooks.new.cancel')">
                <mat-icon class="icon-20" svgIcon="heroicons_outline:x-mark"></mat-icon>
            </button>
        </div>

        <p class="link-desc">{{ t('webhooks.details.link_project_description') }}</p>

        <div class="search-wrap">
            <mat-icon class="search-icon" svgIcon="heroicons_outline:magnifying-glass"></mat-icon>
            <input
                [formControl]="searchControl"
                class="search-input"
                [placeholder]="t('webhooks.details.search_project_placeholder')"
            />
        </div>

        <div class="list-wrap">
            <button
                type="button"
                class="project-row"
                *ngFor="let project of filteredProjects"
                [class.project-row-selected]="selectedProject?._id === project._id"
                (click)="selectProject(project)"
            >
                <div class="project-main">
                    <div class="logo-ring">
                        <img
                            *ngIf="project.project?.branding?.logo"
                            [src]="project.project?.branding?.logo"
                            alt=""
                            class="logo-img"
                            (error)="$any($event.target).style.display = 'none'"
                        />
                        <mat-icon *ngIf="!project.project?.branding?.logo" class="logo-fallback" svgIcon="heroicons_outline:photo"></mat-icon>
                    </div>
                    <div class="project-text">
                        <span class="project-name">{{ project.project?.name }}</span>
                        <span class="project-type">{{ project.type }}</span>
                    </div>
                </div>
                <span *ngIf="project.webhook" class="replace-pill">
                    {{ t('webhooks.details.replaces') }}: {{ project.webhook?.name || project.webhook }}
                </span>
                <span class="radio" [class.radio-on]="selectedProject?._id === project._id">
                    <mat-icon *ngIf="selectedProject?._id === project._id" class="check-icon" svgIcon="heroicons_outline:check"></mat-icon>
                </span>
            </button>

            <div *ngIf="filteredProjects.length === 0" class="empty-state">
                <mat-icon class="empty-icon" svgIcon="heroicons_outline:folder-open"></mat-icon>
                <span>{{ t('webhooks.details.no_projects_found') }}</span>
            </div>
        </div>

        <div class="link-footer">
            <button type="button" class="btn-secondary" (click)="close()">{{ t('webhooks.new.cancel') }}</button>
            <button type="button" class="btn-primary" [disabled]="!selectedProject" (click)="add()">{{ t('webhooks.new.add') }}</button>
        </div>
    </div>
</ng-container>
`, styles: ["/* src/app/modules/smart-monitor/webhooks/dialogs/link-project-dialog.component.scss */\n.link-shell {\n  display: flex;\n  flex-direction: column;\n  max-height: min(90vh, 640px);\n  width: min(100vw - 2rem, 520px);\n}\n.link-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 1.25rem 1.25rem 0.5rem;\n}\n.link-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n}\n.icon-close {\n  border: none;\n  background: rgb(249, 250, 251);\n  border-radius: 8px;\n  padding: 0.35rem;\n  cursor: pointer;\n  line-height: 0;\n}\n.icon-close:hover {\n  background: rgb(243, 244, 246);\n}\n.icon-20 {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(107, 114, 128);\n}\n.link-desc {\n  margin: 0 1.25rem 0.75rem;\n  font-size: 0.875rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.search-wrap {\n  position: relative;\n  margin: 0 1.25rem 0.75rem;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(156, 163, 175);\n  pointer-events: none;\n}\n.search-input {\n  width: 100%;\n  height: 44px;\n  padding-left: 2.75rem;\n  padding-right: 0.85rem;\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(249, 250, 251);\n  font-size: 0.875rem;\n  outline: none;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.search-input:focus {\n  border-color: rgb(59, 130, 246);\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);\n}\n.list-wrap {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 1.25rem 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-height: 200px;\n}\n.project-row {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  width: 100%;\n  text-align: left;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 12px;\n  padding: 0.65rem 0.75rem;\n  background: #fff;\n  cursor: pointer;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.project-row:hover {\n  background: rgb(249, 250, 251);\n}\n.project-row-selected {\n  border-color: rgb(59, 130, 246);\n  background: rgb(239, 246, 255);\n}\n.project-main {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  flex: 1;\n  min-width: 0;\n}\n.logo-ring {\n  width: 40px;\n  height: 40px;\n  border-radius: 999px;\n  border: 1px solid rgb(243, 244, 246);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: #fff;\n}\n.logo-img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.logo-fallback {\n  width: 22px;\n  height: 22px;\n  font-size: 22px;\n  color: rgb(156, 163, 175);\n}\n.project-text {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.project-name {\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: rgb(17, 24, 39);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.project-type {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.replace-pill {\n  font-size: 0.65rem;\n  color: rgb(180, 83, 9);\n  background: rgb(254, 252, 232);\n  border: 1px solid rgb(253, 230, 138);\n  padding: 0.2rem 0.45rem;\n  border-radius: 6px;\n  white-space: nowrap;\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.radio {\n  width: 20px;\n  height: 20px;\n  border-radius: 999px;\n  border: 2px solid rgb(209, 213, 219);\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.radio-on {\n  border-color: rgb(37, 99, 235);\n  background: rgb(37, 99, 235);\n}\n.check-icon {\n  width: 12px;\n  height: 12px;\n  font-size: 12px;\n  color: #fff;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2.5rem 1rem;\n  color: rgb(107, 114, 128);\n  font-weight: 500;\n  gap: 0.5rem;\n}\n.empty-icon {\n  width: 48px;\n  height: 48px;\n  font-size: 48px;\n  color: rgb(209, 213, 219);\n}\n.link-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.65rem;\n  padding: 1rem 1.25rem;\n  border-top: 1px solid rgb(243, 244, 246);\n  background: rgb(249, 250, 251);\n}\n.btn-secondary {\n  border-radius: 10px;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n  cursor: pointer;\n}\n.btn-primary {\n  border-radius: 10px;\n  border: none;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  padding: 0.5rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-primary:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=link-project-dialog.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LinkProjectDialogComponent, { className: "LinkProjectDialogComponent", filePath: "src/app/modules/smart-monitor/webhooks/dialogs/link-project-dialog.component.ts", lineNumber: 22 });
})();

// src/app/modules/smart-monitor/webhooks/webhook-events.component.ts
var _c0 = () => [10, 20, 50];
function WebhookEventsComponent_ng_container_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "mat-progress-spinner", 18);
    \u0275\u0275elementEnd();
  }
}
function WebhookEventsComponent_ng_container_0_button_19_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const n_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r5);
  }
}
function WebhookEventsComponent_ng_container_0_button_19_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.returnProjectName(event_r4.projectFlow) || "\u2014", " ");
  }
}
function WebhookEventsComponent_ng_container_0_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_button_19_Template_button_click_0_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedWebhookEvent(event_r4));
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275element(2, "span", 21);
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275template(4, WebhookEventsComponent_ng_container_0_button_19_ng_container_4_Template, 2, 1, "ng-container", 15)(5, WebhookEventsComponent_ng_container_0_button_19_ng_container_5_Template, 2, 1, "ng-container", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 24);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", (ctx_r1.eventSelected == null ? null : ctx_r1.eventSelected._id) === event_r4._id);
    \u0275\u0275advance();
    \u0275\u0275property("title", (event_r4.projectFlow == null ? null : event_r4.projectFlow.project == null ? null : event_r4.projectFlow.project.name) || ctx_r1.returnProjectName(event_r4.projectFlow) || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275classProp("ok", (event_r4.response == null ? null : event_r4.response.status) === "success")("fail", (event_r4.response == null ? null : event_r4.response.status) === "fail");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r4.projectFlow == null ? null : event_r4.projectFlow.project == null ? null : event_r4.projectFlow.project.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(event_r4.projectFlow == null ? null : event_r4.projectFlow.project == null ? null : event_r4.projectFlow.project.name));
    \u0275\u0275advance();
    \u0275\u0275property("title", event_r4.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 12, event_r4.sentAt, "short"));
  }
}
function WebhookEventsComponent_ng_container_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.details.not_events"), " ");
  }
}
function WebhookEventsComponent_ng_container_0_mat_paginator_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-paginator", 26);
    \u0275\u0275listener("page", function WebhookEventsComponent_ng_container_0_mat_paginator_21_Template_mat_paginator_page_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPaginatorEvent($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("length", ctx_r1.paginatorData.length)("pageIndex", ctx_r1.paginatorData.pageIndex)("pageSize", ctx_r1.paginatorData.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(4, _c0));
  }
}
function WebhookEventsComponent_ng_container_0_ng_container_23_pre_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.eventSelected.response.body));
  }
}
function WebhookEventsComponent_ng_container_0_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 27)(2, "div", 28)(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 31);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_ng_container_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resend(ctx_r1.eventSelected._id));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 32)(10, "h3", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 34);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_ng_container_23_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(ctx_r1.eventSelected.response));
    });
    \u0275\u0275element(13, "mat-icon", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 36)(15, "span", 37);
    \u0275\u0275element(16, "mat-icon", 38);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, WebhookEventsComponent_ng_container_0_ng_container_23_pre_18_Template, 3, 3, "pre", 39);
    \u0275\u0275elementStart(19, "div", 32)(20, "h3", 33);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 34);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_ng_container_23_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(ctx_r1.eventSelected.body));
    });
    \u0275\u0275element(23, "mat-icon", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "pre", 40);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r1.eventSelected.projectFlow == null ? null : ctx_r1.eventSelected.projectFlow.project == null ? null : ctx_r1.eventSelected.projectFlow.project.name) || ctx_r1.returnProjectName(ctx_r1.eventSelected.projectFlow));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.eventSelected.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.resend"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.response"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.eventSelected.response);
    \u0275\u0275attribute("aria-label", t_r6("webhooks.details.copy_response"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ok", (ctx_r1.eventSelected.response == null ? null : ctx_r1.eventSelected.response.status) === "success")("fail", (ctx_r1.eventSelected.response == null ? null : ctx_r1.eventSelected.response.status) === "fail");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", (ctx_r1.eventSelected.response == null ? null : ctx_r1.eventSelected.response.status) === "fail" ? "heroicons_outline:x-circle" : "heroicons_outline:check-circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r1.eventSelected.response == null ? null : ctx_r1.eventSelected.response.status) === "success" ? t_r6("webhooks.details.success") : t_r6("webhooks.details.failed"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.eventSelected.response == null ? null : ctx_r1.eventSelected.response.body);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.request"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.eventSelected.body);
    \u0275\u0275attribute("aria-label", t_r6("webhooks.details.copy_request"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 17, ctx_r1.eventSelected.body));
  }
}
function WebhookEventsComponent_ng_container_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.details.select_event"), " ");
  }
}
function WebhookEventsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectFilter(void 0));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 4);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectFilter("success"));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 4);
    \u0275\u0275listener("click", function WebhookEventsComponent_ng_container_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectFilter("fail"));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5)(11, "span", 6);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 7);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 8);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275template(18, WebhookEventsComponent_ng_container_0_div_18_Template, 2, 0, "div", 10)(19, WebhookEventsComponent_ng_container_0_button_19_Template, 11, 15, "button", 11)(20, WebhookEventsComponent_ng_container_0_div_20_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, WebhookEventsComponent_ng_container_0_mat_paginator_21_Template, 1, 5, "mat-paginator", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 14);
    \u0275\u0275template(23, WebhookEventsComponent_ng_container_0_ng_container_23_Template, 27, 19, "ng-container", 15)(24, WebhookEventsComponent_ng_container_0_div_24_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.filterSelected === void 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.details.all"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.filterSelected === "success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.details.success"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.filterSelected === "fail");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("webhooks.details.failed"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.project_name"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.details.webhook_type"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("webhooks.events.sent"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.searching);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.eventsData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searching && !(ctx_r1.eventsData == null ? null : ctx_r1.eventsData.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paginatorData.length > ctx_r1.paginatorData.pageSize || ctx_r1.paginatorData.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.eventSelected);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.eventSelected);
  }
}
var WebhookEventsComponent = class _WebhookEventsComponent {
  constructor() {
    this._service = inject(WebhooksService);
    this._splash = inject(FuseSplashScreenService);
    this._cdr = inject(ChangeDetectorRef);
    this._clipboard = inject(Clipboard);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this.webhookId = "";
    this.projectFlowFilter = "";
    this._destroyed = new Subject();
    this.eventsData = [];
    this.searching = false;
    this.projectFlows = [];
    this.paginatorData = {
      length: 0,
      pageIndex: 0,
      pageSize: 10,
      lastPage: 0
    };
  }
  /** Initial events from parent */
  set initialEvents(value) {
    this.eventsData = value ? [...value] : [];
    this._cdr.markForCheck();
  }
  set initialPaginator(meta) {
    if (!meta)
      return;
    this.paginatorData.length = meta.total ?? 0;
    this.paginatorData.lastPage = meta.pages ?? 0;
    if (meta.limit)
      this.paginatorData.pageSize = meta.limit;
    this._cdr.markForCheck();
  }
  ngOnChanges(changes) {
    const pf = changes["projectFlowFilter"];
    if (pf && !pf.firstChange && this.webhookId) {
      this.eventSelected = void 0;
      this.paginatorData.pageIndex = 0;
      this._searchEvents();
    }
  }
  ngOnInit() {
    this._service.getProjectFlows().subscribe({
      next: (result) => {
        this.projectFlows = result.data || [];
        this._cdr.markForCheck();
      },
      error: () => {
      }
    });
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  returnProjectName(projectFlow) {
    const id = typeof projectFlow === "string" ? projectFlow : projectFlow?._id;
    if (!id || !this.projectFlows.length)
      return null;
    const current = this.projectFlows.find((e) => e._id === id);
    return current?.project?.name ?? null;
  }
  selectFilter(filter) {
    this.filterSelected = filter;
    this.eventSelected = void 0;
    this.paginatorData.pageIndex = 0;
    this._searchEvents();
  }
  selectedWebhookEvent(ev) {
    this.eventSelected = ev;
    this._cdr.markForCheck();
  }
  onPaginatorEvent(ev) {
    if (ev.pageSize === this.paginatorData.pageSize && ev.pageIndex >= this.paginatorData.lastPage) {
      return;
    }
    this.paginatorData.pageSize = ev.pageSize;
    if (ev.pageSize === this.paginatorData.pageSize) {
      this.paginatorData.pageIndex = ev.pageIndex;
    } else {
      this.paginatorData.pageIndex = 0;
    }
    this._searchEvents();
  }
  copyToClipboard(value) {
    if (value === void 0 || value === null)
      return;
    const text = typeof value === "string" ? value : JSON.stringify(value, null, 2);
    this._clipboard.copy(text);
    this._snack.open(this._transloco.translate("webhooks.details.copied"), void 0, { duration: 2e3 });
  }
  resend(webhookEventId) {
    this._splash.show();
    const t0 = Date.now();
    this._service.resendWebhookEvent(webhookEventId).subscribe({
      next: (response) => {
        if (response.data) {
          this.eventsData = [response.data, ...this.eventsData];
        }
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
  _searchEvents() {
    if (!this.webhookId)
      return;
    this.searching = true;
    this._cdr.markForCheck();
    const query = {
      where_webhook: this.webhookId,
      page: this.paginatorData.pageIndex + 1,
      perPage: this.paginatorData.pageSize,
      sort: "-createdAt"
    };
    if (this.filterSelected)
      query["where_response.status"] = this.filterSelected;
    if (this.projectFlowFilter)
      query["where_projectFlow"] = this.projectFlowFilter;
    this._service.getEvents(query).subscribe({
      next: (response) => {
        this.eventsData = response.data || [];
        this.paginatorData.length = response.total ?? 0;
        this.paginatorData.pageIndex = (response.page ?? 1) - 1;
        this.paginatorData.lastPage = response.pages ?? 0;
        this.searching = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.searching = false;
        this._cdr.markForCheck();
      }
    });
  }
  static {
    this.\u0275fac = function WebhookEventsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebhookEventsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebhookEventsComponent, selectors: [["webhook-events"]], inputs: { webhookId: "webhookId", initialEvents: "initialEvents", initialPaginator: "initialPaginator", projectFlowFilter: "projectFlowFilter" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "events-shell"], [1, "events-pane", "list-pane"], ["role", "tablist", 1, "segmented"], ["type", "button", "role", "tab", 1, "seg-btn", 3, "click"], [1, "table-head"], [1, "col-project"], [1, "col-type", "hide-sm"], [1, "col-date", "hide-sm"], [1, "table-body-wrap"], ["class", "loading-overlay", 4, "ngIf"], ["type", "button", "class", "event-row", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "empty-banner", 4, "ngIf"], ["class", "paginator", 3, "length", "pageIndex", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [1, "events-pane", "detail-pane"], [4, "ngIf"], ["class", "detail-empty", 4, "ngIf"], [1, "loading-overlay"], ["diameter", "36", "mode", "indeterminate"], ["type", "button", 1, "event-row", 3, "click"], [1, "col-project", 3, "title"], [1, "status-dot"], [1, "proj-name"], [1, "col-type", "hide-sm", 3, "title"], [1, "col-date", "hide-sm", "muted-xs"], [1, "empty-banner"], [1, "paginator", 3, "page", "length", "pageIndex", "pageSize", "pageSizeOptions"], [1, "detail-header"], [1, "detail-titles"], [1, "detail-project"], [1, "detail-type", "mono-xs"], ["type", "button", 1, "btn-resend", 3, "click"], [1, "detail-section-head"], [1, "detail-section-title"], ["type", "button", "mat-icon-button", "", 1, "btn-copy", 3, "click", "disabled"], ["svgIcon", "heroicons_outline:clipboard-document", 1, "copy-ic"], [1, "pill-row"], [1, "status-pill"], [1, "pill-icon", 3, "svgIcon"], ["class", "code-block", 4, "ngIf"], [1, "code-block"], [1, "detail-empty"]], template: function WebhookEventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, WebhookEventsComponent_ng_container_0_Template, 25, 18, "ng-container", 0);
      }
    }, dependencies: [
      ClipboardModule,
      CommonModule,
      NgForOf,
      NgIf,
      JsonPipe,
      DatePipe,
      TranslocoModule,
      TranslocoDirective,
      MatButtonModule,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatPaginatorModule,
      MatPaginator,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n}\n.events-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n  min-height: 420px;\n  width: 100%;\n  box-sizing: border-box;\n}\n@media (min-width: 960px) {\n  .events-shell[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  }\n}\n.events-pane[_ngcontent-%COMP%] {\n  min-height: 320px;\n}\n.list-pane[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgb(243, 244, 246);\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 960px) {\n  .list-pane[_ngcontent-%COMP%] {\n    border-bottom: none;\n    border-right: 1px solid rgb(243, 244, 246);\n  }\n}\n.segmented[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.65rem 0.75rem;\n  gap: 0.35rem;\n  background: rgb(249, 250, 251);\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.seg-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid transparent;\n  background: transparent;\n  border-radius: 10px;\n  padding: 0.45rem 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: rgb(107, 114, 128);\n  cursor: pointer;\n  transition:\n    background 0.15s ease,\n    color 0.15s ease,\n    border-color 0.15s ease;\n}\n.seg-btn[_ngcontent-%COMP%]:hover {\n  color: rgb(17, 24, 39);\n  background: rgb(243, 244, 246);\n}\n.seg-btn.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: rgb(17, 24, 39);\n  border-color: rgb(229, 231, 235);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n@media (max-width: 639px) {\n  .table-head[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .event-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n.table-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 100px;\n  gap: 0.5rem;\n  padding: 0.5rem 0.85rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: rgb(156, 163, 175);\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.table-body-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  overflow-y: auto;\n  max-height: 420px;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.72);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.event-row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 100px;\n  gap: 0.5rem;\n  align-items: center;\n  padding: 0.55rem 0.85rem;\n  border: none;\n  border-bottom: 1px solid rgb(249, 250, 251);\n  background: #fff;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.12s ease;\n}\n.event-row[_ngcontent-%COMP%]:hover {\n  background: rgb(249, 250, 251);\n}\n.event-row.selected[_ngcontent-%COMP%] {\n  background: rgb(239, 246, 255);\n}\n.col-project[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 0;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  flex-shrink: 0;\n  background: rgb(209, 213, 219);\n}\n.status-dot.ok[_ngcontent-%COMP%] {\n  background: rgb(34, 197, 94);\n}\n.status-dot.fail[_ngcontent-%COMP%] {\n  background: rgb(239, 68, 68);\n}\n.proj-name[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-type[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.mono-xs[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n}\n.muted-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.hide-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 640px) {\n  .hide-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .table-head[_ngcontent-%COMP%], \n   .event-row[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) 100px;\n  }\n}\n.empty-banner[_ngcontent-%COMP%] {\n  margin: 1.5rem;\n  padding: 0.65rem 1rem;\n  border-radius: 10px;\n  background: rgb(254, 242, 242);\n  color: rgb(185, 28, 28);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-align: center;\n}\n.paginator[_ngcontent-%COMP%] {\n  border-top: 1px solid rgb(243, 244, 246);\n  background: rgb(249, 250, 251);\n}\n.detail-pane[_ngcontent-%COMP%] {\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  background: rgb(252, 252, 252);\n}\n.detail-empty[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(156, 163, 175);\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 2rem;\n  text-align: center;\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.detail-titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 0;\n}\n.detail-project[_ngcontent-%COMP%] {\n  font-weight: 650;\n  font-size: 0.9375rem;\n  color: rgb(17, 24, 39);\n}\n.detail-type[_ngcontent-%COMP%] {\n  color: rgb(107, 114, 128);\n}\n.btn-resend[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  border: none;\n  border-radius: 10px;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.45rem 0.85rem;\n  cursor: pointer;\n}\n.btn-resend[_ngcontent-%COMP%]:hover {\n  background: rgb(29, 78, 216);\n}\n.detail-section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin: 0.25rem 0 0;\n}\n.detail-section-head[_ngcontent-%COMP%]   .detail-section-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.detail-section-title[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: rgb(107, 114, 128);\n}\n.btn-copy[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  color: rgb(107, 114, 128);\n}\n.btn-copy[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: rgb(37, 99, 235);\n}\n.copy-ic[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.pill-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n}\n.status-pill.ok[_ngcontent-%COMP%] {\n  border-color: rgb(187, 247, 208);\n  background: rgb(240, 253, 244);\n  color: rgb(22, 101, 52);\n}\n.status-pill.fail[_ngcontent-%COMP%] {\n  border-color: rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(185, 28, 28);\n}\n.pill-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.code-block[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.75rem;\n  border-radius: 12px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(17, 24, 39);\n  color: rgb(243, 244, 246);\n  font-size: 0.7rem;\n  line-height: 1.45;\n  overflow: auto;\n  max-height: 220px;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n/*# sourceMappingURL=webhook-events.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WebhookEventsComponent, [{
    type: Component,
    args: [{ selector: "webhook-events", standalone: true, imports: [
      ClipboardModule,
      CommonModule,
      TranslocoModule,
      MatButtonModule,
      MatIconModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,
      MatSnackBarModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="events-shell">
        <div class="events-pane list-pane">
            <div class="segmented" role="tablist">
                <button
                    type="button"
                    role="tab"
                    class="seg-btn"
                    [class.active]="filterSelected === undefined"
                    (click)="selectFilter(undefined)"
                >
                    {{ t('webhooks.details.all') }}
                </button>
                <button
                    type="button"
                    role="tab"
                    class="seg-btn"
                    [class.active]="filterSelected === 'success'"
                    (click)="selectFilter('success')"
                >
                    {{ t('webhooks.details.success') }}
                </button>
                <button
                    type="button"
                    role="tab"
                    class="seg-btn"
                    [class.active]="filterSelected === 'fail'"
                    (click)="selectFilter('fail')"
                >
                    {{ t('webhooks.details.failed') }}
                </button>
            </div>

            <div class="table-head">
                <span class="col-project">{{ t('webhooks.details.project_name') }}</span>
                <span class="col-type hide-sm">{{ t('webhooks.details.webhook_type') }}</span>
                <span class="col-date hide-sm">{{ t('webhooks.events.sent') }}</span>
            </div>

            <div class="table-body-wrap">
                <div class="loading-overlay" *ngIf="searching">
                    <mat-progress-spinner diameter="36" mode="indeterminate"></mat-progress-spinner>
                </div>

                <button
                    type="button"
                    class="event-row"
                    *ngFor="let event of eventsData"
                    [class.selected]="eventSelected?._id === event._id"
                    (click)="selectedWebhookEvent(event)"
                >
                    <div class="col-project" [title]="event.projectFlow?.project?.name || returnProjectName(event.projectFlow) || '\u2014'">
                        <span
                            class="status-dot"
                            [class.ok]="event.response?.status === 'success'"
                            [class.fail]="event.response?.status === 'fail'"
                        ></span>
                        <span class="proj-name">
                            <ng-container *ngIf="event.projectFlow?.project?.name as n">{{ n }}</ng-container>
                            <ng-container *ngIf="!event.projectFlow?.project?.name">
                                {{ returnProjectName(event.projectFlow) || '\u2014' }}
                            </ng-container>
                        </span>
                    </div>
                    <span class="col-type hide-sm" [title]="event.type">{{ event.type }}</span>
                    <span class="col-date hide-sm muted-xs">{{ event.sentAt | date : 'short' }}</span>
                </button>

                <div class="empty-banner" *ngIf="!searching && !eventsData?.length">
                    {{ t('webhooks.details.not_events') }}
                </div>
            </div>

            <mat-paginator
                *ngIf="paginatorData.length > paginatorData.pageSize || paginatorData.length > 0"
                class="paginator"
                (page)="onPaginatorEvent($event)"
                [length]="paginatorData.length"
                [pageIndex]="paginatorData.pageIndex"
                [pageSize]="paginatorData.pageSize"
                [pageSizeOptions]="[10, 20, 50]"
            ></mat-paginator>
        </div>

        <div class="events-pane detail-pane">
            <ng-container *ngIf="eventSelected">
                <div class="detail-header">
                    <div class="detail-titles">
                        <span class="detail-project">{{ eventSelected.projectFlow?.project?.name || returnProjectName(eventSelected.projectFlow) }}</span>
                        <span class="detail-type mono-xs">{{ eventSelected.type }}</span>
                    </div>
                    <button type="button" class="btn-resend" (click)="resend(eventSelected._id)">{{ t('webhooks.details.resend') }}</button>
                </div>

                <div class="detail-section-head">
                    <h3 class="detail-section-title">{{ t('webhooks.details.response') }}</h3>
                    <button
                        type="button"
                        class="btn-copy"
                        mat-icon-button
                        [disabled]="!eventSelected.response"
                        (click)="copyToClipboard(eventSelected.response)"
                        [attr.aria-label]="t('webhooks.details.copy_response')"
                    >
                        <mat-icon svgIcon="heroicons_outline:clipboard-document" class="copy-ic"></mat-icon>
                    </button>
                </div>
                <div class="pill-row">
                    <span class="status-pill" [class.ok]="eventSelected.response?.status === 'success'" [class.fail]="eventSelected.response?.status === 'fail'">
                        <mat-icon class="pill-icon" [svgIcon]="eventSelected.response?.status === 'fail' ? 'heroicons_outline:x-circle' : 'heroicons_outline:check-circle'"></mat-icon>
                        {{ eventSelected.response?.status === 'success' ? t('webhooks.details.success') : t('webhooks.details.failed') }}
                    </span>
                </div>
                <pre *ngIf="eventSelected.response?.body" class="code-block">{{ eventSelected.response.body | json }}</pre>

                <div class="detail-section-head">
                    <h3 class="detail-section-title">{{ t('webhooks.details.request') }}</h3>
                    <button
                        type="button"
                        class="btn-copy"
                        mat-icon-button
                        [disabled]="!eventSelected.body"
                        (click)="copyToClipboard(eventSelected.body)"
                        [attr.aria-label]="t('webhooks.details.copy_request')"
                    >
                        <mat-icon svgIcon="heroicons_outline:clipboard-document" class="copy-ic"></mat-icon>
                    </button>
                </div>
                <pre class="code-block">{{ eventSelected.body | json }}</pre>
            </ng-container>

            <div class="detail-empty" *ngIf="!eventSelected">
                {{ t('webhooks.details.select_event') }}
            </div>
        </div>
    </div>
</ng-container>
`, styles: ['/* src/app/modules/smart-monitor/webhooks/webhook-events.component.scss */\n:host {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n}\n.events-shell {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n  min-height: 420px;\n  width: 100%;\n  box-sizing: border-box;\n}\n@media (min-width: 960px) {\n  .events-shell {\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  }\n}\n.events-pane {\n  min-height: 320px;\n}\n.list-pane {\n  border-bottom: 1px solid rgb(243, 244, 246);\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 960px) {\n  .list-pane {\n    border-bottom: none;\n    border-right: 1px solid rgb(243, 244, 246);\n  }\n}\n.segmented {\n  display: flex;\n  padding: 0.65rem 0.75rem;\n  gap: 0.35rem;\n  background: rgb(249, 250, 251);\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.seg-btn {\n  flex: 1;\n  border: 1px solid transparent;\n  background: transparent;\n  border-radius: 10px;\n  padding: 0.45rem 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: rgb(107, 114, 128);\n  cursor: pointer;\n  transition:\n    background 0.15s ease,\n    color 0.15s ease,\n    border-color 0.15s ease;\n}\n.seg-btn:hover {\n  color: rgb(17, 24, 39);\n  background: rgb(243, 244, 246);\n}\n.seg-btn.active {\n  background: #fff;\n  color: rgb(17, 24, 39);\n  border-color: rgb(229, 231, 235);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n@media (max-width: 639px) {\n  .table-head {\n    display: none;\n  }\n  .event-row {\n    grid-template-columns: 1fr !important;\n  }\n}\n.table-head {\n  display: grid;\n  grid-template-columns: 1fr 1fr 100px;\n  gap: 0.5rem;\n  padding: 0.5rem 0.85rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: rgb(156, 163, 175);\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.table-body-wrap {\n  position: relative;\n  flex: 1;\n  overflow-y: auto;\n  max-height: 420px;\n}\n.loading-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.72);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n}\n.event-row {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 100px;\n  gap: 0.5rem;\n  align-items: center;\n  padding: 0.55rem 0.85rem;\n  border: none;\n  border-bottom: 1px solid rgb(249, 250, 251);\n  background: #fff;\n  text-align: left;\n  cursor: pointer;\n  transition: background 0.12s ease;\n}\n.event-row:hover {\n  background: rgb(249, 250, 251);\n}\n.event-row.selected {\n  background: rgb(239, 246, 255);\n}\n.col-project {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 0;\n}\n.status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  flex-shrink: 0;\n  background: rgb(209, 213, 219);\n}\n.status-dot.ok {\n  background: rgb(34, 197, 94);\n}\n.status-dot.fail {\n  background: rgb(239, 68, 68);\n}\n.proj-name {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-type {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n.mono-xs {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n}\n.muted-xs {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.hide-sm {\n  display: none;\n}\n@media (min-width: 640px) {\n  .hide-sm {\n    display: block;\n  }\n  .table-head,\n  .event-row {\n    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) 100px;\n  }\n}\n.empty-banner {\n  margin: 1.5rem;\n  padding: 0.65rem 1rem;\n  border-radius: 10px;\n  background: rgb(254, 242, 242);\n  color: rgb(185, 28, 28);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  text-align: center;\n}\n.paginator {\n  border-top: 1px solid rgb(243, 244, 246);\n  background: rgb(249, 250, 251);\n}\n.detail-pane {\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  background: rgb(252, 252, 252);\n}\n.detail-empty {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(156, 163, 175);\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 2rem;\n  text-align: center;\n}\n.detail-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.detail-titles {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 0;\n}\n.detail-project {\n  font-weight: 650;\n  font-size: 0.9375rem;\n  color: rgb(17, 24, 39);\n}\n.detail-type {\n  color: rgb(107, 114, 128);\n}\n.btn-resend {\n  flex-shrink: 0;\n  border: none;\n  border-radius: 10px;\n  background: rgb(37, 99, 235);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.45rem 0.85rem;\n  cursor: pointer;\n}\n.btn-resend:hover {\n  background: rgb(29, 78, 216);\n}\n.detail-section-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin: 0.25rem 0 0;\n}\n.detail-section-head .detail-section-title {\n  margin: 0;\n}\n.detail-section-title {\n  margin: 0.25rem 0 0;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: rgb(107, 114, 128);\n}\n.btn-copy {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  color: rgb(107, 114, 128);\n}\n.btn-copy:hover:not(:disabled) {\n  color: rgb(37, 99, 235);\n}\n.copy-ic {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.pill-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.35rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n}\n.status-pill.ok {\n  border-color: rgb(187, 247, 208);\n  background: rgb(240, 253, 244);\n  color: rgb(22, 101, 52);\n}\n.status-pill.fail {\n  border-color: rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(185, 28, 28);\n}\n.pill-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.code-block {\n  margin: 0;\n  padding: 0.75rem;\n  border-radius: 12px;\n  border: 1px solid rgb(229, 231, 235);\n  background: rgb(17, 24, 39);\n  color: rgb(243, 244, 246);\n  font-size: 0.7rem;\n  line-height: 1.45;\n  overflow: auto;\n  max-height: 220px;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n/*# sourceMappingURL=webhook-events.component.css.map */\n'] }]
  }], null, { webhookId: [{
    type: Input
  }], initialEvents: [{
    type: Input
  }], initialPaginator: [{
    type: Input
  }], projectFlowFilter: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebhookEventsComponent, { className: "WebhookEventsComponent", filePath: "src/app/modules/smart-monitor/webhooks/webhook-events.component.ts", lineNumber: 41 });
})();

// src/app/modules/smart-monitor/webhooks/webhook-detail.component.ts
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
function WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 45);
    \u0275\u0275template(1, WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_li_1_Template, 10, 4, "li", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.webhookData.projectFlow);
  }
}
function WebhookDetailComponent_ng_container_0_ng_container_4_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
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
    \u0275\u0275template(33, WebhookDetailComponent_ng_container_0_ng_container_4_ul_33_Template, 2, 1, "ul", 32)(34, WebhookDetailComponent_ng_container_0_ng_container_4_div_34_Template, 2, 1, "div", 33);
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
    \u0275\u0275property("ngIf", ctx_r1.webhookData.projectFlow == null ? null : ctx_r1.webhookData.projectFlow.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.webhookData.projectFlow == null ? null : ctx_r1.webhookData.projectFlow.length));
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
  edit() {
    this._dialog.open(NewWebhookDialogComponent, {
      data: this.webhookData,
      width: "600px",
      maxWidth: "92vw",
      panelClass: "webhook-dialog-panel"
    }).afterClosed().subscribe((result) => {
      if (result?.deleted) {
        this._router.navigate(["/smart-monitor/webhooks"]);
        return;
      }
      if (result) {
        this.webhookData = __spreadValues(__spreadValues({}, this.webhookData), result);
        this._cdr.markForCheck();
      }
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
  static {
    this.\u0275fac = function WebhookDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebhookDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebhookDetailComponent, selectors: [["webhook-detail"]], decls: 1, vars: 0, consts: [[4, "transloco"], [1, "page"], [1, "inner"], ["class", "state-loading", 4, "ngIf"], [4, "ngIf"], [1, "state-loading"], ["diameter", "40", "mode", "indeterminate"], [1, "hero-card"], [1, "hero-top"], ["type", "button", 1, "icon-btn", 3, "click"], ["svgIcon", "heroicons_outline:arrow-left"], [1, "hero-title-block"], [1, "hero-name"], [1, "hero-sub"], [1, "hero-actions"], [1, "toggle-wrap"], [1, "status-pill"], [1, "dot"], ["color", "primary", 3, "ngModelChange", "change", "ngModel"], ["type", "button", 1, "btn-outline", 3, "click"], ["svgIcon", "heroicons_outline:pencil-square", 1, "btn-ic"], [1, "hero-url"], ["svgIcon", "heroicons_outline:link", 1, "url-ic"], [1, "url-text"], ["class", "hero-desc", 4, "ngIf"], [1, "hero-divider"], [1, "flows-header"], [1, "flows-title"], ["svgIcon", "heroicons_outline:folder", 1, "flows-ic"], [1, "native-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "pf-list", 4, "ngIf"], ["class", "panel-empty", 4, "ngIf"], ["type", "button", 1, "btn-link-flow", 3, "click"], ["svgIcon", "heroicons_outline:plus", 1, "btn-ic"], [1, "panel"], [1, "panel-title"], ["svgIcon", "heroicons_outline:chart-bar", 1, "panel-ic"], [3, "statistics", "days"], [1, "events-section"], [1, "section-heading"], [3, "webhookId", "initialEvents", "initialPaginator", "projectFlowFilter"], [1, "hero-desc"], [3, "value"], [1, "pf-list"], ["class", "pf-item", 4, "ngFor", "ngForOf"], [1, "pf-item"], [1, "pf-info"], [1, "pf-name"], [1, "pf-type"], [1, "pf-meta"], ["class", "pf-count", 4, "ngIf"], ["type", "button", 1, "unlink", 3, "click"], ["svgIcon", "heroicons_outline:trash"], [1, "pf-count"], [1, "pf-count-label"], [1, "panel-empty"]], template: function WebhookDetailComponent_Template(rf, ctx) {
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
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  background: rgb(249, 250, 251);\n}\n.inner[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n  margin: 0;\n  padding: 2rem 1.25rem 3rem;\n  box-sizing: border-box;\n}\n.state-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.hero-card[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 1.25rem 1.35rem;\n  margin-bottom: 1rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.hero-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  border-radius: 10px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: rgb(107, 114, 128);\n  flex-shrink: 0;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(249, 250, 251);\n  color: rgb(17, 24, 39);\n}\n.hero-title-block[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 180px;\n}\n.hero-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.hero-sub[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 0.875rem;\n  color: rgb(107, 114, 128);\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n}\n.toggle-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.35rem 0.65rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 12px;\n  background: rgb(249, 250, 251);\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-pill[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: rgb(209, 213, 219);\n}\n.status-pill.on[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: rgb(34, 197, 94);\n}\n.status-pill.off[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: rgb(156, 163, 175);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  border-radius: 10px;\n  padding: 0.5rem 0.85rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n  cursor: pointer;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgb(249, 250, 251);\n}\n.btn-ic[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.hero-url[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.55rem 0.85rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 10px;\n  background: rgb(249, 250, 251);\n  min-width: 0;\n  overflow: hidden;\n}\n.url-ic[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  color: rgb(156, 163, 175);\n  flex-shrink: 0;\n}\n.url-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgb(55, 65, 81);\n  word-break: break-all;\n  min-width: 0;\n}\n.hero-desc[_ngcontent-%COMP%] {\n  margin: 0.65rem 0 0;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(107, 114, 128);\n}\n.hero-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgb(229, 231, 235);\n  margin: 1rem 0;\n}\n.flows-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.65rem;\n  margin-bottom: 0.75rem;\n}\n.flows-title[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-size: 0.9375rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.flows-ic[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(37, 99, 235);\n}\n.native-select[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 10px;\n  padding: 0.4rem 0.65rem;\n  font-size: 0.8125rem;\n  background: rgb(249, 250, 251);\n  color: rgb(55, 65, 81);\n  max-width: 220px;\n}\n.pf-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 0.75rem;\n  padding: 0;\n  max-height: 240px;\n  overflow-y: auto;\n}\n.pf-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.55rem 0;\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.pf-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.pf-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  min-width: 0;\n}\n.pf-name[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pf-type[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.pf-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.pf-count[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  color: rgb(37, 99, 235);\n}\n.pf-count-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.7rem;\n  color: rgb(107, 114, 128);\n  margin-left: 0.15rem;\n}\n.unlink[_ngcontent-%COMP%] {\n  border: none;\n  background: rgb(254, 242, 242);\n  color: rgb(220, 38, 38);\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.unlink[_ngcontent-%COMP%]:hover {\n  background: rgb(254, 226, 226);\n}\n.unlink[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.panel-empty[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgb(180, 83, 9);\n  background: rgb(254, 252, 232);\n  border: 1px solid rgb(253, 230, 138);\n  padding: 0.75rem;\n  border-radius: 10px;\n  margin-bottom: 0.75rem;\n}\n.btn-link-flow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  width: 100%;\n  border: 1px dashed rgb(191, 219, 254);\n  border-radius: 10px;\n  background: rgb(239, 246, 255);\n  color: rgb(37, 99, 235);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.55rem 1rem;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-link-flow[_ngcontent-%COMP%]:hover {\n  background: rgb(219, 234, 254);\n}\n.panel[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 14px;\n  background: #fff;\n  padding: 1.1rem 1.15rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  min-width: 0;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}\n.panel-title[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-size: 0.9375rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.panel-ic[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(37, 99, 235);\n}\n.events-section[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.section-heading[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 1.0625rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n}\n/*# sourceMappingURL=webhook-detail.component.css.map */'], changeDetection: 0 });
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
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">
    <div class="page">
        <div class="inner">
            <div *ngIf="loading" class="state-loading">
                <mat-progress-spinner diameter="40" mode="indeterminate"></mat-progress-spinner>
            </div>

            <ng-container *ngIf="!loading && webhookData">
                <section class="hero-card">
                    <div class="hero-top">
                        <button type="button" class="icon-btn" (click)="back()" [attr.aria-label]="t('webhooks.detail.back')">
                            <mat-icon svgIcon="heroicons_outline:arrow-left"></mat-icon>
                        </button>
                        <div class="hero-title-block">
                            <h1 class="hero-name">{{ webhookData.name || t('webhooks.detail.unnamed') }}</h1>
                            <p class="hero-sub">{{ t('webhooks.detail.subtitle') }}</p>
                        </div>
                        <div class="hero-actions">
                            <div class="toggle-wrap">
                                <span class="status-pill" [class.on]="webhookData.isActive" [class.off]="!webhookData.isActive">
                                    <span class="dot"></span>
                                    {{ webhookData.isActive ? t('webhooks.list.card.active') : t('webhooks.list.card.disabled') }}
                                </span>
                                <mat-slide-toggle
                                    [(ngModel)]="webhookData.isActive"
                                    (change)="activeWebhook()"
                                    color="primary"
                                ></mat-slide-toggle>
                            </div>
                            <button type="button" class="btn-outline" (click)="edit()">
                                <mat-icon class="btn-ic" svgIcon="heroicons_outline:pencil-square"></mat-icon>
                                {{ t('webhooks.list.edit') }}
                            </button>
                        </div>
                    </div>

                    <div class="hero-url">
                        <mat-icon class="url-ic" svgIcon="heroicons_outline:link"></mat-icon>
                        <code class="url-text">{{ webhookData.url }}</code>
                    </div>

                    <p class="hero-desc" *ngIf="webhookData.description">{{ webhookData.description }}</p>

                    <div class="hero-divider"></div>

                    <div class="flows-header">
                        <h2 class="flows-title">
                            <mat-icon class="flows-ic" svgIcon="heroicons_outline:folder"></mat-icon>
                            {{ t('webhooks.details.related_project') }}
                        </h2>
                        <select
                            class="native-select"
                            [ngModel]="projectFlowSelected"
                            (ngModelChange)="onProjectFlowFilterChange($event)"
                        >
                            <option value="">{{ t('webhooks.details.all') }}</option>
                            <option *ngFor="let pf of webhookData.projectFlow" [value]="pf._id">
                                {{ pf.project?.name }} ({{ pf.type }})
                            </option>
                        </select>
                    </div>

                    <ul class="pf-list" *ngIf="webhookData.projectFlow?.length">
                        <li class="pf-item" *ngFor="let pf of webhookData.projectFlow">
                            <div class="pf-info">
                                <span class="pf-name">{{ pf.project?.name || '\u2014' }}</span>
                                <span class="pf-type">{{ pf.type }}</span>
                            </div>
                            <div class="pf-meta">
                                <span class="pf-count" *ngIf="webhookData.statistics?.[pf._id]">
                                    {{ webhookData.statistics[pf._id].total || 0 }}
                                    <span class="pf-count-label">{{ t('webhooks.details.events') }}</span>
                                </span>
                                <button type="button" class="unlink" (click)="unlinkProject(pf)" [attr.aria-label]="t('webhooks.details.unlink_title')">
                                    <mat-icon svgIcon="heroicons_outline:trash"></mat-icon>
                                </button>
                            </div>
                        </li>
                    </ul>

                    <div class="panel-empty" *ngIf="!webhookData.projectFlow?.length">
                        {{ t('webhooks.list.card.not_related_projects') }}
                    </div>

                    <button type="button" class="btn-link-flow" (click)="openLinkProject()">
                        <mat-icon class="btn-ic" svgIcon="heroicons_outline:plus"></mat-icon>
                        {{ t('webhooks.details.add-project') }}
                    </button>
                </section>

                <section class="panel">
                    <h2 class="panel-title">
                        <mat-icon class="panel-ic" svgIcon="heroicons_outline:chart-bar"></mat-icon>
                        {{ t('webhooks.graph.activity') }}
                    </h2>
                    <webhook-stats-bars [statistics]="webhookData.statisticsByDay" [days]="30"></webhook-stats-bars>
                </section>

                <section class="events-section">
                    <h2 class="section-heading">{{ t('webhooks.events.section_title') }}</h2>
                    <webhook-events
                        [webhookId]="webhookId"
                        [initialEvents]="eventsData"
                        [initialPaginator]="eventsMeta"
                        [projectFlowFilter]="projectFlowSelected"
                    ></webhook-events>
                </section>
            </ng-container>
        </div>
    </div>
</ng-container>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-monitor/webhooks/webhook-detail.component.scss */\n:host {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n}\n.page {\n  min-height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  background: rgb(249, 250, 251);\n}\n.inner {\n  width: 100%;\n  max-width: none;\n  margin: 0;\n  padding: 2rem 1.25rem 3rem;\n  box-sizing: border-box;\n}\n.state-loading {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.hero-card {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 16px;\n  background: #fff;\n  padding: 1.25rem 1.35rem;\n  margin-bottom: 1rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.hero-top {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.icon-btn {\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  border-radius: 10px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: rgb(107, 114, 128);\n  flex-shrink: 0;\n}\n.icon-btn:hover {\n  background: rgb(249, 250, 251);\n  color: rgb(17, 24, 39);\n}\n.hero-title-block {\n  flex: 1;\n  min-width: 180px;\n}\n.hero-name {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 650;\n  letter-spacing: -0.03em;\n  color: rgb(17, 24, 39);\n}\n.hero-sub {\n  margin: 0.25rem 0 0;\n  font-size: 0.875rem;\n  color: rgb(107, 114, 128);\n}\n.hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n}\n.toggle-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.35rem 0.65rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 12px;\n  background: rgb(249, 250, 251);\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-pill .dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: rgb(209, 213, 219);\n}\n.status-pill.on .dot {\n  background: rgb(34, 197, 94);\n}\n.status-pill.off .dot {\n  background: rgb(156, 163, 175);\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid rgb(229, 231, 235);\n  background: #fff;\n  border-radius: 10px;\n  padding: 0.5rem 0.85rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(55, 65, 81);\n  cursor: pointer;\n}\n.btn-outline:hover {\n  background: rgb(249, 250, 251);\n}\n.btn-ic {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.hero-url {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding: 0.55rem 0.85rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 10px;\n  background: rgb(249, 250, 251);\n  min-width: 0;\n  overflow: hidden;\n}\n.url-ic {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  color: rgb(156, 163, 175);\n  flex-shrink: 0;\n}\n.url-text {\n  font-size: 0.8125rem;\n  color: rgb(55, 65, 81);\n  word-break: break-all;\n  min-width: 0;\n}\n.hero-desc {\n  margin: 0.65rem 0 0;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(107, 114, 128);\n}\n.hero-divider {\n  height: 1px;\n  background: rgb(229, 231, 235);\n  margin: 1rem 0;\n}\n.flows-header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.65rem;\n  margin-bottom: 0.75rem;\n}\n.flows-title {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-size: 0.9375rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.flows-ic {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(37, 99, 235);\n}\n.native-select {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 10px;\n  padding: 0.4rem 0.65rem;\n  font-size: 0.8125rem;\n  background: rgb(249, 250, 251);\n  color: rgb(55, 65, 81);\n  max-width: 220px;\n}\n.pf-list {\n  list-style: none;\n  margin: 0 0 0.75rem;\n  padding: 0;\n  max-height: 240px;\n  overflow-y: auto;\n}\n.pf-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.55rem 0;\n  border-bottom: 1px solid rgb(243, 244, 246);\n}\n.pf-item:last-child {\n  border-bottom: none;\n}\n.pf-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  min-width: 0;\n}\n.pf-name {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pf-type {\n  font-size: 0.75rem;\n  color: rgb(107, 114, 128);\n}\n.pf-meta {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.pf-count {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  color: rgb(37, 99, 235);\n}\n.pf-count-label {\n  font-weight: 500;\n  font-size: 0.7rem;\n  color: rgb(107, 114, 128);\n  margin-left: 0.15rem;\n}\n.unlink {\n  border: none;\n  background: rgb(254, 242, 242);\n  color: rgb(220, 38, 38);\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.unlink:hover {\n  background: rgb(254, 226, 226);\n}\n.unlink mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.panel-empty {\n  font-size: 0.8125rem;\n  color: rgb(180, 83, 9);\n  background: rgb(254, 252, 232);\n  border: 1px solid rgb(253, 230, 138);\n  padding: 0.75rem;\n  border-radius: 10px;\n  margin-bottom: 0.75rem;\n}\n.btn-link-flow {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  width: 100%;\n  border: 1px dashed rgb(191, 219, 254);\n  border-radius: 10px;\n  background: rgb(239, 246, 255);\n  color: rgb(37, 99, 235);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  padding: 0.55rem 1rem;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-link-flow:hover {\n  background: rgb(219, 234, 254);\n}\n.panel {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 14px;\n  background: #fff;\n  padding: 1.1rem 1.15rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  min-width: 0;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}\n.panel-title {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  font-size: 0.9375rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.panel-ic {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  color: rgb(37, 99, 235);\n}\n.events-section {\n  margin-top: 0.5rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.section-heading {\n  margin: 0 0 0.75rem;\n  font-size: 1.0625rem;\n  font-weight: 650;\n  letter-spacing: -0.02em;\n  color: rgb(17, 24, 39);\n}\n/*# sourceMappingURL=webhook-detail.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebhookDetailComponent, { className: "WebhookDetailComponent", filePath: "src/app/modules/smart-monitor/webhooks/webhook-detail.component.ts", lineNumber: 47 });
})();
export {
  WebhookDetailComponent
};
//# sourceMappingURL=chunk-7JWZKR6X.js.map
