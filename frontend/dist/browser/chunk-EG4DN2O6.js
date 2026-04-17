import {
  merge_default
} from "./chunk-6FS3LBOZ.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule
} from "./chunk-KCV7S453.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  Component,
  Injectable,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgClass,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction8,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-YTOBX75K.js";

// src/@fuse/services/confirmation/dialog/dialog.component.ts
var _c0 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "bg-primary-100 text-primary-600 dark:bg-primary-600 dark:text-primary-50": a0, "bg-accent-100 text-accent-600 dark:bg-accent-600 dark:text-accent-50": a1, "bg-warn-100 text-warn-600 dark:bg-warn-600 dark:text-warn-50": a2, "bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-50": a3, "bg-blue-100 text-blue-600 dark:bg-blue-600 dark:text-blue-50": a4, "bg-green-100 text-green-500 dark:bg-green-500 dark:text-green-50": a5, "bg-amber-100 text-amber-500 dark:bg-amber-500 dark:text-amber-50": a6, "bg-red-100 text-red-600 dark:bg-red-600 dark:text-red-50": a7 });
function FuseConfirmationDialogComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 6);
    \u0275\u0275element(2, "mat-icon", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matDialogClose", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:x-mark");
  }
}
function FuseConfirmationDialogComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-icon", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction8(2, _c0, ctx_r0.data.icon.color === "primary", ctx_r0.data.icon.color === "accent", ctx_r0.data.icon.color === "warn", ctx_r0.data.icon.color === "basic", ctx_r0.data.icon.color === "info", ctx_r0.data.icon.color === "success", ctx_r0.data.icon.color === "warning", ctx_r0.data.icon.color === "error"));
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", ctx_r0.data.icon.name);
  }
}
function FuseConfirmationDialogComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r0.data.title, \u0275\u0275sanitizeHtml);
  }
}
function FuseConfirmationDialogComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r0.data.message, \u0275\u0275sanitizeHtml);
  }
}
function FuseConfirmationDialogComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, FuseConfirmationDialogComponent_Conditional_4_Conditional_1_Template, 1, 1, "div", 9)(2, FuseConfirmationDialogComponent_Conditional_4_Conditional_2_Template, 1, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.data.title ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.data.message ? 2 : -1);
  }
}
function FuseConfirmationDialogComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matDialogClose", "cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.actions.cancel.label, " ");
  }
}
function FuseConfirmationDialogComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("color", ctx_r0.data.actions.confirm.color)("matDialogClose", "confirmed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.actions.confirm.label, " ");
  }
}
function FuseConfirmationDialogComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, FuseConfirmationDialogComponent_Conditional_5_Conditional_1_Template, 2, 2, "button", 11)(2, FuseConfirmationDialogComponent_Conditional_5_Conditional_2_Template, 2, 3, "button", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.data.actions.cancel.show ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.data.actions.confirm.show ? 2 : -1);
  }
}
var FuseConfirmationDialogComponent = class _FuseConfirmationDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
  }
  static {
    this.\u0275fac = function FuseConfirmationDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseConfirmationDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseConfirmationDialogComponent, selectors: [["fuse-confirmation-dialog"]], decls: 6, vars: 4, consts: [[1, "relative", "flex", "h-full", "w-full", "flex-col"], [1, "absolute", "right-0", "top-0", "pr-4", "pt-4"], [1, "flex", "flex-auto", "flex-col", "items-center", "p-8", "pb-6", "sm:flex-row", "sm:items-start", "sm:pb-8"], [1, "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center", "rounded-full", "sm:mr-4", 3, "ngClass"], [1, "mt-4", "flex", "flex-col", "items-center", "space-y-1", "text-center", "sm:mt-0", "sm:items-start", "sm:pr-8", "sm:text-left"], [1, "flex", "items-center", "justify-center", "space-x-3", "bg-gray-50", "px-6", "py-4", "dark:bg-black", "dark:bg-opacity-10", "sm:justify-end"], ["mat-icon-button", "", 3, "matDialogClose"], [1, "text-secondary", 3, "svgIcon"], [1, "text-current", 3, "svgIcon"], [1, "text-xl", "font-medium", "leading-6", 3, "innerHTML"], [1, "text-secondary", 3, "innerHTML"], ["mat-stroked-button", "", 3, "matDialogClose"], ["mat-flat-button", "", 3, "color", "matDialogClose"]], template: function FuseConfirmationDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, FuseConfirmationDialogComponent_Conditional_1_Template, 3, 2, "div", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275template(3, FuseConfirmationDialogComponent_Conditional_3_Template, 2, 11, "div", 3)(4, FuseConfirmationDialogComponent_Conditional_4_Template, 3, 2, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, FuseConfirmationDialogComponent_Conditional_5_Template, 3, 2, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.data.dismissible ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.icon.show ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.data.title || ctx.data.message ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.data.actions.confirm.show || ctx.data.actions.cancel.show ? 5 : -1);
      }
    }, dependencies: [MatButtonModule, MatButton, MatIconButton, MatDialogModule, MatDialogClose, MatIconModule, MatIcon, NgClass], styles: ["/* angular:styles/component:scss;e48ca9ba17105b04c989094e8ba048ab14e02345a5e7192bc942079e3585c41f;/Users/miguel/Smart-Agent/frontend/src/@fuse/services/confirmation/dialog/dialog.component.ts */\n@media (min-width: 960px) {\n  .fuse-confirmation-dialog-panel {\n    width: 32rem;\n  }\n}\n.fuse-confirmation-dialog-panel .mat-mdc-dialog-container .mat-mdc-dialog-surface {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=dialog.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FuseConfirmationDialogComponent, [{
    type: Component,
    args: [{ selector: "fuse-confirmation-dialog", encapsulation: ViewEncapsulation.None, imports: [MatButtonModule, MatDialogModule, MatIconModule, NgClass], template: `<div class="relative flex h-full w-full flex-col">
    <!-- Dismiss button -->
    @if (data.dismissible) {
        <div class="absolute right-0 top-0 pr-4 pt-4">
            <button mat-icon-button [matDialogClose]="undefined">
                <mat-icon
                    class="text-secondary"
                    [svgIcon]="'heroicons_outline:x-mark'"
                ></mat-icon>
            </button>
        </div>
    }

    <!-- Content -->
    <div
        class="flex flex-auto flex-col items-center p-8 pb-6 sm:flex-row sm:items-start sm:pb-8"
    >
        <!-- Icon -->
        @if (data.icon.show) {
            <div
                class="flex h-10 w-10 flex-0 items-center justify-center rounded-full sm:mr-4"
                [ngClass]="{
                    'bg-primary-100 text-primary-600 dark:bg-primary-600 dark:text-primary-50':
                        data.icon.color === 'primary',
                    'bg-accent-100 text-accent-600 dark:bg-accent-600 dark:text-accent-50':
                        data.icon.color === 'accent',
                    'bg-warn-100 text-warn-600 dark:bg-warn-600 dark:text-warn-50':
                        data.icon.color === 'warn',
                    'bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-50':
                        data.icon.color === 'basic',
                    'bg-blue-100 text-blue-600 dark:bg-blue-600 dark:text-blue-50':
                        data.icon.color === 'info',
                    'bg-green-100 text-green-500 dark:bg-green-500 dark:text-green-50':
                        data.icon.color === 'success',
                    'bg-amber-100 text-amber-500 dark:bg-amber-500 dark:text-amber-50':
                        data.icon.color === 'warning',
                    'bg-red-100 text-red-600 dark:bg-red-600 dark:text-red-50':
                        data.icon.color === 'error',
                }"
            >
                <mat-icon
                    class="text-current"
                    [svgIcon]="data.icon.name"
                ></mat-icon>
            </div>
        }

        @if (data.title || data.message) {
            <div
                class="mt-4 flex flex-col items-center space-y-1 text-center sm:mt-0 sm:items-start sm:pr-8 sm:text-left"
            >
                <!-- Title -->
                @if (data.title) {
                    <div
                        class="text-xl font-medium leading-6"
                        [innerHTML]="data.title"
                    ></div>
                }

                <!-- Message -->
                @if (data.message) {
                    <div
                        class="text-secondary"
                        [innerHTML]="data.message"
                    ></div>
                }
            </div>
        }
    </div>

    <!-- Actions -->
    @if (data.actions.confirm.show || data.actions.cancel.show) {
        <div
            class="flex items-center justify-center space-x-3 bg-gray-50 px-6 py-4 dark:bg-black dark:bg-opacity-10 sm:justify-end"
        >
            <!-- Cancel -->
            @if (data.actions.cancel.show) {
                <button mat-stroked-button [matDialogClose]="'cancelled'">
                    {{ data.actions.cancel.label }}
                </button>
            }

            <!-- Confirm -->
            @if (data.actions.confirm.show) {
                <button
                    mat-flat-button
                    [color]="data.actions.confirm.color"
                    [matDialogClose]="'confirmed'"
                >
                    {{ data.actions.confirm.label }}
                </button>
            }
        </div>
    }
</div>
`, styles: ["/* angular:styles/component:scss;e48ca9ba17105b04c989094e8ba048ab14e02345a5e7192bc942079e3585c41f;/Users/miguel/Smart-Agent/frontend/src/@fuse/services/confirmation/dialog/dialog.component.ts */\n@media (min-width: 960px) {\n  .fuse-confirmation-dialog-panel {\n    width: 32rem;\n  }\n}\n.fuse-confirmation-dialog-panel .mat-mdc-dialog-container .mat-mdc-dialog-surface {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseConfirmationDialogComponent, { className: "FuseConfirmationDialogComponent", filePath: "src/@fuse/services/confirmation/dialog/dialog.component.ts", lineNumber: 29 });
})();

// src/@fuse/services/confirmation/confirmation.service.ts
var FuseConfirmationService = class _FuseConfirmationService {
  constructor() {
    this._matDialog = inject(MatDialog);
    this._defaultConfig = {
      title: "Confirm action",
      message: "Are you sure you want to confirm this action?",
      icon: {
        show: true,
        name: "heroicons_outline:exclamation-triangle",
        color: "warn"
      },
      actions: {
        confirm: {
          show: true,
          label: "Confirm",
          color: "warn"
        },
        cancel: {
          show: true,
          label: "Cancel"
        }
      },
      dismissible: false
    };
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  open(config = {}) {
    const userConfig = merge_default({}, this._defaultConfig, config);
    return this._matDialog.open(FuseConfirmationDialogComponent, {
      autoFocus: false,
      disableClose: !userConfig.dismissible,
      data: userConfig,
      panelClass: "fuse-confirmation-dialog-panel"
    });
  }
  static {
    this.\u0275fac = function FuseConfirmationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseConfirmationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuseConfirmationService, factory: _FuseConfirmationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FuseConfirmationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  FuseConfirmationService
};
//# sourceMappingURL=chunk-EG4DN2O6.js.map
