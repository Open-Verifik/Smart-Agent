import {
  SwatchPickerComponent
} from "./chunk-N6B7SQGP.js";
import {
  FileDropZoneComponent
} from "./chunk-VLAF74HM.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-TXEVGTMX.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import {
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Input,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-enroll/projects/setup/steps/user-interface/user-interface.component.ts
function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 17);
    \u0275\u0275elementStart(2, "div", 18)(3, "p", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearImage("logo"));
    });
    \u0275\u0275elementStart(6, "mat-icon", 21);
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.currentLogo"), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("smartEnrollProjects.setup.ui.images.removeLogo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.removeLogo"), " ");
  }
}
function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "file-drop-zone", 22);
    \u0275\u0275listener("attachmentUploaded", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_10_Template_file_drop_zone_attachmentUploaded_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAttachmentUploaded("logo", $event));
    })("uploadError", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_10_Template_file_drop_zone_uploadError_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onUploadError("logo", $event));
    })("fileError", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_10_Template_file_drop_zone_fileError_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileError("logo", $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("accept", ctx_r1.imageAccept)("maxFileSize", ctx_r1.logoMaxSize)("expirationDays", 0);
  }
}
function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 17);
    \u0275\u0275elementStart(2, "div", 18)(3, "p", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clearImage("image"));
    });
    \u0275\u0275elementStart(6, "mat-icon", 21);
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.currentImage"), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r3("smartEnrollProjects.setup.ui.images.removeImage"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.removeImage"), " ");
  }
}
function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "file-drop-zone", 22);
    \u0275\u0275listener("attachmentUploaded", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_18_Template_file_drop_zone_attachmentUploaded_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAttachmentUploaded("image", $event));
    })("uploadError", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_18_Template_file_drop_zone_uploadError_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onUploadError("image", $event));
    })("fileError", function SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_18_Template_file_drop_zone_fileError_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onFileError("image", $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("accept", ctx_r1.imageAccept)("maxFileSize", ctx_r1.imageMaxSize)("expirationDays", 0);
  }
}
function SetupUserInterfaceComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275declareLet(1)(2);
    \u0275\u0275elementStart(3, "section", 3)(4, "header")(5, "h2", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_9_Template, 9, 4, "div", 6)(10, SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_10_Template, 1, 3, "file-drop-zone", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "section", 3)(12, "header")(13, "h2", 4);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 5);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_17_Template, 9, 4, "div", 6)(18, SetupUserInterfaceComponent_ng_container_0_div_1_Conditional_18_Template, 1, 3, "file-drop-zone", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "section", 8)(20, "header", 9)(21, "h2", 4);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 5);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 10);
    \u0275\u0275element(26, "swatch-picker", 11)(27, "swatch-picker", 12)(28, "swatch-picker", 13)(29, "swatch-picker", 14)(30, "swatch-picker", 15)(31, "swatch-picker", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_16_0;
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const logoCtrl_r7 = ctx_r1.brandingFormGroup == null ? null : ctx_r1.brandingFormGroup.get("logo");
    const imageCtrl_r8 = ctx_r1.brandingFormGroup == null ? null : ctx_r1.brandingFormGroup.get("image");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("border-stone-200", !(logoCtrl_r7 == null ? null : logoCtrl_r7.errors))("dark:border-gray-700", !(logoCtrl_r7 == null ? null : logoCtrl_r7.errors))("border-red-500", logoCtrl_r7 == null ? null : logoCtrl_r7.errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.logo"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.logoSubtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.imageValue("logo")) ? 9 : 10, tmp_10_0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("border-stone-200", !(imageCtrl_r8 == null ? null : imageCtrl_r8.errors))("dark:border-gray-700", !(imageCtrl_r8 == null ? null : imageCtrl_r8.errors))("border-red-500", imageCtrl_r8 == null ? null : imageCtrl_r8.errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.banner"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.bannerSubtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r1.imageValue("image")) ? 17 : 18, tmp_16_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.brandingFormGroup);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.colors.heading"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.colors.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("colors", ctx_r1.titleColors)("label", t_r3("smartEnrollProjects.setup.ui.colors.title"))("required", true);
    \u0275\u0275advance();
    \u0275\u0275property("colors", ctx_r1.textColors)("label", t_r3("smartEnrollProjects.setup.ui.colors.text"))("required", true);
    \u0275\u0275advance();
    \u0275\u0275property("colors", ctx_r1.buttonColors)("label", t_r3("smartEnrollProjects.setup.ui.colors.button"))("required", true);
    \u0275\u0275advance();
    \u0275\u0275property("colors", ctx_r1.buttonTextColors)("label", t_r3("smartEnrollProjects.setup.ui.colors.buttonText"))("required", true);
    \u0275\u0275advance();
    \u0275\u0275property("colors", ctx_r1.backgroundColors)("label", t_r3("smartEnrollProjects.setup.ui.colors.background"))("required", true);
    \u0275\u0275advance();
    \u0275\u0275property("colors", ctx_r1.imageBackgroundColors)("label", t_r3("smartEnrollProjects.setup.ui.colors.imageBackground"))("required", true);
  }
}
function SetupUserInterfaceComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SetupUserInterfaceComponent_ng_container_0_div_1_Template, 32, 39, "div", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFormReady);
  }
}
var HALF_MEGABYTE = 0.5 * 1024 * 1024;
var TWO_MEGABYTES = 2 * 1024 * 1024;
var SetupUserInterfaceComponent = class _SetupUserInterfaceComponent {
  constructor() {
    this.loading = false;
    this.saving = false;
    this._cdr = inject(ChangeDetectorRef);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this.logoMaxSize = HALF_MEGABYTE;
    this.imageMaxSize = TWO_MEGABYTES;
    this.imageAccept = ".jpg,.jpeg,.png";
    this.titleColors = [
      "#2563eb",
      "#4f46e5",
      "#7c3aed",
      "#9333ea",
      "#c026d3",
      "#db2777",
      "#e11d48",
      "#dc2626",
      "#ea580c",
      "#d97706",
      "#16a34a",
      "#0891b2"
    ];
    this.textColors = [
      "#0f172a",
      "#111827",
      "#1c1917",
      "#1e3a8a",
      "#3730a3",
      "#4c1d95",
      "#581c87",
      "#86198f",
      "#9d174d",
      "#7f1d1d",
      "#7c2d12",
      "#3f3f46"
    ];
    this.buttonColors = [
      "#2563eb",
      "#1d4ed8",
      "#4f46e5",
      "#6d28d9",
      "#9333ea",
      "#db2777",
      "#e11d48",
      "#dc2626",
      "#ea580c",
      "#16a34a",
      "#0d9488",
      "#0f172a"
    ];
    this.buttonTextColors = [
      "#ffffff",
      "#f8fafc",
      "#f1f5f9",
      "#e0e7ff",
      "#dbeafe",
      "#cffafe",
      "#dcfce7",
      "#fef3c7",
      "#ffedd5",
      "#ffe4e6",
      "#fae8ff",
      "#f5f5f4"
    ];
    this.backgroundColors = [
      "#ffffff",
      "#fafafa",
      "#f8fafc",
      "#f0f9ff",
      "#eff6ff",
      "#eef2ff",
      "#faf5ff",
      "#fdf4ff",
      "#fdf2f8",
      "#fff1f2",
      "#fff7ed",
      "#f0fdf4"
    ];
    this.imageBackgroundColors = [
      "#ffffff",
      "#f9fafb",
      "#f5f5f4",
      "#e7e5e4",
      "#f0f9ff",
      "#dbeafe",
      "#e0e7ff",
      "#ede9fe",
      "#fce7f3",
      "#dcfce7",
      "#fef3c7",
      "#ffedd5"
    ];
  }
  get isFormReady() {
    return !this.loading && !!this.form && !!this.brandingFormGroup;
  }
  get brandingFormGroup() {
    return this.form?.get("branding") || null;
  }
  imageValue(forControl) {
    const v = this.brandingFormGroup?.get(forControl)?.value;
    return v || null;
  }
  onAttachmentUploaded(forControl, payload) {
    if (!this.brandingFormGroup)
      return;
    const ctrl = this.brandingFormGroup.get(forControl);
    ctrl?.setValue(payload?.attachment?.url || "");
    ctrl?.markAsTouched();
    ctrl?.markAsDirty();
    ctrl?.setErrors(null);
    ctrl?.updateValueAndValidity();
    const truncatedName = payload?.attachment?.name && payload.attachment.name.length > 50 ? `${payload.attachment.name.slice(0, 47)}...` : payload?.attachment?.name || "";
    this._snack.open(this._transloco.translate("smartEnrollProjects.setup.ui.images.uploadedSuccessfully", { name: truncatedName }), this._transloco.translate("close"), { duration: 3e3 });
    this._cdr.markForCheck();
  }
  onUploadError(forControl, payload) {
    if (!this.brandingFormGroup)
      return;
    const ctrl = this.brandingFormGroup.get(forControl);
    const message = payload?.error || this._transloco.translate("smartEnrollProjects.setup.ui.images.uploadFailed");
    ctrl?.setErrors({ uploadFailed: message });
    this._snack.open(message, this._transloco.translate("close"), { duration: 3e3 });
    this._cdr.markForCheck();
  }
  onFileError(forControl, payload) {
    this._snack.open(payload?.error || "", this._transloco.translate("close"), { duration: 3e3 });
  }
  clearImage(forControl) {
    if (!this.brandingFormGroup)
      return;
    const ctrl = this.brandingFormGroup.get(forControl);
    ctrl?.setValue("");
    ctrl?.markAsDirty();
    ctrl?.markAsTouched();
    ctrl?.setErrors(null);
    ctrl?.updateValueAndValidity();
    this._cdr.markForCheck();
  }
  static {
    this.\u0275fac = function SetupUserInterfaceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetupUserInterfaceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupUserInterfaceComponent, selectors: [["setup-user-interface"]], inputs: { form: "form", loading: "loading", saving: "saving" }, decls: 1, vars: 0, consts: [[4, "transloco"], ["class", "flex w-full flex-col gap-6", 4, "ngIf"], [1, "flex", "w-full", "flex-col", "gap-6"], [1, "flex", "flex-col", "gap-4", "rounded-2xl", "border", "bg-white", "px-6", "py-6", "dark:bg-gray-900/40"], [1, "text-base", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "items-center", "gap-4", "rounded-2xl", "border", "border-dashed", "border-stone-300", "bg-stone-50", "p-4", "dark:border-gray-700", "dark:bg-gray-900/40"], ["source", "project", 3, "accept", "maxFileSize", "expirationDays"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "px-6", "py-6", "dark:border-gray-700", "dark:bg-gray-900/40", 3, "formGroup"], [1, "mb-4"], [1, "grid", "grid-cols-1", "gap-3"], ["formControlName", "titleColor", 3, "colors", "label", "required"], ["formControlName", "textColor", 3, "colors", "label", "required"], ["formControlName", "buttonColor", 3, "colors", "label", "required"], ["formControlName", "buttonTextColor", 3, "colors", "label", "required"], ["formControlName", "backgroundColor", 3, "colors", "label", "required"], ["formControlName", "imageBackgroundColor", 3, "colors", "label", "required"], ["alt", "", 1, "h-16", "w-16", "rounded-lg", "border", "border-stone-200", "object-contain", "dark:border-gray-700", 3, "src"], [1, "flex-1", "min-w-[10rem]"], [1, "m-0", "text-sm", "font-semibold", "text-stone-800", "dark:text-stone-100"], ["mat-stroked-button", "", "type", "button", "color", "warn", 1, "rounded-full", 3, "click"], [1, "!h-4", "!w-4"], ["source", "project", 3, "attachmentUploaded", "uploadError", "fileError", "accept", "maxFileSize", "expirationDays"]], template: function SetupUserInterfaceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SetupUserInterfaceComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      ReactiveFormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatSnackBarModule,
      TranslocoModule,
      TranslocoDirective,
      FileDropZoneComponent,
      SwatchPickerComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupUserInterfaceComponent, [{
    type: Component,
    args: [{ selector: "setup-user-interface", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatIconModule,
      MatSnackBarModule,
      TranslocoModule,
      FileDropZoneComponent,
      SwatchPickerComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div *ngIf="isFormReady" class="flex w-full flex-col gap-6">\r
        @let logoCtrl = brandingFormGroup?.get('logo');\r
        @let imageCtrl = brandingFormGroup?.get('image');\r
\r
        <!-- 1. Logo -->\r
        <section\r
            class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"\r
            [class.border-stone-200]="!logoCtrl?.errors"\r
            [class.dark:border-gray-700]="!logoCtrl?.errors"\r
            [class.border-red-500]="logoCtrl?.errors"\r
        >\r
            <header>\r
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.ui.images.logo') }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.ui.images.logoSubtitle') }}\r
                </p>\r
            </header>\r
\r
            @if (imageValue('logo'); as src) {\r
                <div class="flex flex-wrap items-center gap-4 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">\r
                    <img [src]="src" alt="" class="h-16 w-16 rounded-lg border border-stone-200 object-contain dark:border-gray-700" />\r
                    <div class="flex-1 min-w-[10rem]">\r
                        <p class="m-0 text-sm font-semibold text-stone-800 dark:text-stone-100">\r
                            {{ t('smartEnrollProjects.setup.ui.images.currentLogo') }}\r
                        </p>\r
                    </div>\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        color="warn"\r
                        class="rounded-full"\r
                        (click)="clearImage('logo')"\r
                        [attr.aria-label]="t('smartEnrollProjects.setup.ui.images.removeLogo')"\r
                    >\r
                        <mat-icon class="!h-4 !w-4">delete</mat-icon>\r
                        {{ t('smartEnrollProjects.setup.ui.images.removeLogo') }}\r
                    </button>\r
                </div>\r
            } @else {\r
                <file-drop-zone\r
                    [accept]="imageAccept"\r
                    [maxFileSize]="logoMaxSize"\r
                    [expirationDays]="0"\r
                    source="project"\r
                    (attachmentUploaded)="onAttachmentUploaded('logo', $event)"\r
                    (uploadError)="onUploadError('logo', $event)"\r
                    (fileError)="onFileError('logo', $event)"\r
                ></file-drop-zone>\r
            }\r
        </section>\r
\r
        <!-- 2. Image / banner -->\r
        <section\r
            class="flex flex-col gap-4 rounded-2xl border bg-white px-6 py-6 dark:bg-gray-900/40"\r
            [class.border-stone-200]="!imageCtrl?.errors"\r
            [class.dark:border-gray-700]="!imageCtrl?.errors"\r
            [class.border-red-500]="imageCtrl?.errors"\r
        >\r
            <header>\r
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.ui.images.banner') }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.ui.images.bannerSubtitle') }}\r
                </p>\r
            </header>\r
\r
            @if (imageValue('image'); as src) {\r
                <div class="flex flex-wrap items-center gap-4 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">\r
                    <img [src]="src" alt="" class="h-16 w-16 rounded-lg border border-stone-200 object-contain dark:border-gray-700" />\r
                    <div class="flex-1 min-w-[10rem]">\r
                        <p class="m-0 text-sm font-semibold text-stone-800 dark:text-stone-100">\r
                            {{ t('smartEnrollProjects.setup.ui.images.currentImage') }}\r
                        </p>\r
                    </div>\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        color="warn"\r
                        class="rounded-full"\r
                        (click)="clearImage('image')"\r
                        [attr.aria-label]="t('smartEnrollProjects.setup.ui.images.removeImage')"\r
                    >\r
                        <mat-icon class="!h-4 !w-4">delete</mat-icon>\r
                        {{ t('smartEnrollProjects.setup.ui.images.removeImage') }}\r
                    </button>\r
                </div>\r
            } @else {\r
                <file-drop-zone\r
                    [accept]="imageAccept"\r
                    [maxFileSize]="imageMaxSize"\r
                    [expirationDays]="0"\r
                    source="project"\r
                    (attachmentUploaded)="onAttachmentUploaded('image', $event)"\r
                    (uploadError)="onUploadError('image', $event)"\r
                    (fileError)="onFileError('image', $event)"\r
                ></file-drop-zone>\r
            }\r
        </section>\r
\r
        <!-- 3. Colors -->\r
        <section\r
            class="rounded-2xl border border-stone-200/90 bg-white px-6 py-6 dark:border-gray-700 dark:bg-gray-900/40"\r
            [formGroup]="brandingFormGroup!"\r
        >\r
            <header class="mb-4">\r
                <h2 class="text-base font-semibold tracking-tight text-stone-900 dark:text-white">\r
                    {{ t('smartEnrollProjects.setup.ui.colors.heading') }}\r
                </h2>\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ t('smartEnrollProjects.setup.ui.colors.subtitle') }}\r
                </p>\r
            </header>\r
\r
            <div class="grid grid-cols-1 gap-3">\r
                <swatch-picker\r
                    formControlName="titleColor"\r
                    [colors]="titleColors"\r
                    [label]="t('smartEnrollProjects.setup.ui.colors.title')"\r
                    [required]="true"\r
                ></swatch-picker>\r
                <swatch-picker\r
                    formControlName="textColor"\r
                    [colors]="textColors"\r
                    [label]="t('smartEnrollProjects.setup.ui.colors.text')"\r
                    [required]="true"\r
                ></swatch-picker>\r
                <swatch-picker\r
                    formControlName="buttonColor"\r
                    [colors]="buttonColors"\r
                    [label]="t('smartEnrollProjects.setup.ui.colors.button')"\r
                    [required]="true"\r
                ></swatch-picker>\r
                <swatch-picker\r
                    formControlName="buttonTextColor"\r
                    [colors]="buttonTextColors"\r
                    [label]="t('smartEnrollProjects.setup.ui.colors.buttonText')"\r
                    [required]="true"\r
                ></swatch-picker>\r
                <swatch-picker\r
                    formControlName="backgroundColor"\r
                    [colors]="backgroundColors"\r
                    [label]="t('smartEnrollProjects.setup.ui.colors.background')"\r
                    [required]="true"\r
                ></swatch-picker>\r
                <swatch-picker\r
                    formControlName="imageBackgroundColor"\r
                    [colors]="imageBackgroundColors"\r
                    [label]="t('smartEnrollProjects.setup.ui.colors.imageBackground')"\r
                    [required]="true"\r
                ></swatch-picker>\r
            </div>\r
        </section>\r
    </div>\r
</ng-container>\r
` }]
  }], null, { form: [{
    type: Input
  }], loading: [{
    type: Input
  }], saving: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupUserInterfaceComponent, { className: "SetupUserInterfaceComponent", filePath: "src/app/modules/smart-enroll/projects/setup/steps/user-interface/user-interface.component.ts", lineNumber: 40 });
})();

// src/app/modules/smart-enroll/projects/setup/setup-dev-sample-core.util.ts
var FALLBACK_ALLOWED_COUNTRIES = [
  "Canada",
  "Mexico",
  "Germany",
  "France",
  "Japan",
  "Brazil",
  "Andorra",
  "Ireland",
  "Spain",
  "Portugal"
];
var PROJECT_NAME_PREFIXES = ["Sandbox", "Smoke", "Local", "Preview", "Lab", "Scratch"];
var FIRST_NAMES = [
  "Alex",
  "Jordan",
  "Riley",
  "Morgan",
  "Casey",
  "Taylor",
  "Quinn",
  "Avery",
  "Jamie",
  "Parker"
];
var LAST_NAMES = [
  "Miller",
  "Nguyen",
  "Silva",
  "Martinez",
  "Okafor",
  "Chen",
  "Patel",
  "Klein",
  "Santos",
  "Murphy"
];
var STREETS = ["Oak Lane", "Maple Ave", "Cedar Blvd", "River Road", "Hillcrest Dr", "Bay Street"];
var CITY_NAMES = ["Denver", "Austin", "Portland", "Madrid", "Oslo", "Lyon", "Calgary", "Tampa"];
var DIAL_CODES = ["+1", "+34", "+44", "+49", "+33", "+52", "+507"];
function randomDigits(len) {
  return Array.from({ length: len }, () => Math.floor(Math.random() * 10).toString()).join("");
}
function randomTokenHex(byteLength) {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}
function randomChoice(xs) {
  return xs[Math.floor(Math.random() * xs.length)];
}
function pickUniqueRandom(pool, count) {
  if (count <= 0 || pool.length === 0)
    return [];
  if (pool.length <= count)
    return [...pool];
  const copy = [...pool];
  const out = [];
  while (out.length < count && copy.length > 0) {
    const i = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(i, 1)[0]);
  }
  return out;
}
function luminanceOkForWhiteText(hex) {
  const x = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!x)
    return false;
  const n = Number.parseInt(x[1], 16);
  const r = n >> 16 & 255;
  const g = n >> 8 & 255;
  const b = n & 255;
  const y = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return y < 0.55;
}
function randomHexColor() {
  return `#${randomTokenHex(3)}`;
}
function randomAddressLine() {
  return `${100 + Number(randomDigits(2))} ${randomChoice(STREETS)}`;
}
function randomPostalCode() {
  return `${randomChoice(["A", "B", "C", "K", "V"])}${randomDigits(1)}${randomChoice(["A", "B", "C"])} ${randomDigits(3)}`;
}
function randomPersonName() {
  return `${randomChoice(FIRST_NAMES)} ${randomChoice(LAST_NAMES)}`;
}
function slugFromToken(token) {
  return token.slice(0, 12);
}
function resolveAllowedCountries(pool) {
  const usable = (pool ?? [...FALLBACK_ALLOWED_COUNTRIES]).filter((c) => !!c?.trim?.() && c !== "All" && c !== "World");
  const uniq = [...new Set(usable)];
  const pickCount = uniq.length <= 2 ? uniq.length : 2 + Math.floor(Math.random() * 2);
  const picks = pickUniqueRandom(uniq, pickCount);
  return picks.length > 0 ? picks : [...FALLBACK_ALLOWED_COUNTRIES].slice(0, 2);
}
function resolveDevSampleRedirectOrigin(redirectOrigin) {
  return typeof redirectOrigin === "string" && redirectOrigin.trim() ? redirectOrigin.trim().replace(/\/+$/, "") : "https://localhost:4201";
}
function randomChoiceCity() {
  return randomChoice(CITY_NAMES);
}

export {
  SetupUserInterfaceComponent,
  PROJECT_NAME_PREFIXES,
  DIAL_CODES,
  randomDigits,
  randomTokenHex,
  randomChoice,
  luminanceOkForWhiteText,
  randomHexColor,
  randomAddressLine,
  randomPostalCode,
  randomPersonName,
  slugFromToken,
  resolveAllowedCountries,
  resolveDevSampleRedirectOrigin,
  randomChoiceCity
};
//# sourceMappingURL=chunk-BX3SUYQR.js.map
