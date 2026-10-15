import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-WKFG3L4B.js";
import {
  MatButtonModule
} from "./chunk-NBA3XD53.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EIYDU75T.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VENEX45A.js";
import {
  CommonModule,
  Component,
  Injectable,
  inject,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I5BUD46C.js";

// src/app/modules/smart-batch/use-template-mode-dialog.component.ts
function UseTemplateModeDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.title, " ");
  }
}
function UseTemplateModeDialogComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r0.data.template.nameKey), " ");
  }
}
function UseTemplateModeDialogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", (tmp_1_0 = ctx_r0.data.template == null ? null : ctx_r0.data.template.name) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "", " ");
  }
}
var UseTemplateModeDialogComponent = class _UseTemplateModeDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this._dialogRef = inject(MatDialogRef);
  }
  select(mode) {
    this._dialogRef.close(mode);
  }
  isAddInputs() {
    return this.data.context === "addInputs";
  }
  getEyebrowKey() {
    return this.isAddInputs() ? "batchProcessing.addInputsDialogEyebrow" : "smartBatchSystemPresets.useTemplate";
  }
  getChooseModeDescKey() {
    return this.isAddInputs() ? "batchProcessing.addInputsChooseModeDesc" : "smartBatchSystemPresets.chooseModeDesc";
  }
  getSingleOptionTitleKey() {
    return this.isAddInputs() ? "batchProcessing.addOneRecord" : "smartBatchSystemPresets.validateOneRecord";
  }
  getBatchOptionHintKey() {
    return this.isAddInputs() ? "batchProcessing.uploadBatchAppendHint" : "smartBatchSystemPresets.uploadBatchHint";
  }
  getValidateOneRecordHintKey() {
    const category = this.getTemplateCategory() ?? "citizen";
    const prefix = this.isAddInputs() ? "batchProcessing.addOneRecordHint" : "smartBatchSystemPresets.validateOneRecordHint";
    const hints = {
      citizen: `${prefix}Citizen`,
      company: `${prefix}Company`,
      vehicle: `${prefix}Vehicle`
    };
    return hints[category] ?? hints.citizen;
  }
  getValidateOneRecordIcon() {
    const icons = {
      citizen: "person_search",
      company: "business",
      vehicle: "directions_car"
    };
    return icons[this.getTemplateCategory() ?? ""] ?? "person_search";
  }
  getTemplateCategory() {
    if (this.data.category) {
      return this.data.category;
    }
    const template = this.data.template;
    if (!template) {
      return void 0;
    }
    if (template.category) {
      return template.category;
    }
    const systemKey = template.clonedFromSystemKey ?? template.systemKey;
    if (!systemKey) {
      return void 0;
    }
    if (systemKey.includes(".citizen."))
      return "citizen";
    if (systemKey.includes(".company."))
      return "company";
    if (systemKey.includes(".vehicle."))
      return "vehicle";
    return void 0;
  }
  static {
    this.\u0275fac = function UseTemplateModeDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UseTemplateModeDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UseTemplateModeDialogComponent, selectors: [["use-template-mode-dialog"]], decls: 47, vars: 24, consts: [[1, "p-1"], [1, "flex", "items-start", "gap-4", "border-b", "border-stone-200/80", "px-6", "pb-5", "pt-6", "dark:border-gray-800"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "dark:border-gray-800", "dark:bg-gray-950", "dark:text-stone-200"], [1, "min-w-0", "flex-1"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-stone-400", "dark:text-stone-500"], [1, "mt-1", "text-lg", "font-semibold", "leading-snug", "text-stone-950", "dark:text-white"], [1, "mt-2", "text-sm", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-3", "px-6", "py-5"], ["type", "button", 1, "group", "flex", "w-full", "items-start", "gap-4", "rounded-2xl", "border", "border-stone-200", "bg-white", "p-4", "text-left", "transition", "hover:border-stone-950", "hover:shadow-sm", "dark:border-gray-800", "dark:bg-gray-900/70", "dark:hover:border-white", 3, "click"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "bg-stone-50", "text-stone-700", "transition", "group-hover:border-stone-950", "group-hover:bg-stone-950", "group-hover:text-white", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-200", "dark:group-hover:border-white", "dark:group-hover:bg-white", "dark:group-hover:text-gray-950"], [1, "!h-5", "!w-5", "!text-[20px]"], [1, "block", "text-sm", "font-semibold", "text-stone-950", "dark:text-white"], [1, "mt-1", "block", "text-sm", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "shrink-0", "text-stone-300", "transition", "group-hover:text-stone-950", "dark:text-stone-600", "dark:group-hover:text-white"], [1, "flex", "justify-end", "border-t", "border-stone-200/80", "px-6", "py-4", "dark:border-gray-800"], ["type", "button", "mat-dialog-close", "", 1, "inline-flex", "min-h-10", "items-center", "justify-center", "rounded-xl", "px-4", "text-sm", "font-medium", "text-stone-600", "transition", "hover:bg-stone-100", "dark:text-stone-300", "dark:hover:bg-gray-800"]], template: function UseTemplateModeDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3)(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h2", 5);
        \u0275\u0275template(10, UseTemplateModeDialogComponent_Conditional_10_Template, 1, 1)(11, UseTemplateModeDialogComponent_Conditional_11_Template, 2, 3)(12, UseTemplateModeDialogComponent_Conditional_12_Template, 1, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 6);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 7)(17, "button", 8);
        \u0275\u0275listener("click", function UseTemplateModeDialogComponent_Template_button_click_17_listener() {
          return ctx.select("single");
        });
        \u0275\u0275elementStart(18, "div", 9)(19, "mat-icon", 10);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 3)(22, "span", 11);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 12);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "mat-icon", 13);
        \u0275\u0275text(29, "arrow_forward");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "button", 8);
        \u0275\u0275listener("click", function UseTemplateModeDialogComponent_Template_button_click_30_listener() {
          return ctx.select("batch");
        });
        \u0275\u0275elementStart(31, "div", 9)(32, "mat-icon", 10);
        \u0275\u0275text(33, "upload_file");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 3)(35, "span", 11);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 12);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "mat-icon", 13);
        \u0275\u0275text(42, "arrow_forward");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 14)(44, "button", 15);
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "transloco");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.isAddInputs() ? "playlist_add" : "description");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 10, ctx.getEyebrowKey()), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.data.title ? 10 : (ctx.data.template == null ? null : ctx.data.template.nameKey) ? 11 : 12);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 12, ctx.getChooseModeDescKey()), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.getValidateOneRecordIcon());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 14, ctx.getSingleOptionTitleKey()), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 16, ctx.getValidateOneRecordHintKey()), " ");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 18, "smartBatchSystemPresets.uploadBatch"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 20, ctx.getBatchOptionHintKey()), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 22, "smartBatchSystemPresets.cancel"), " ");
      }
    }, dependencies: [CommonModule, MatDialogModule, MatDialogClose, MatButtonModule, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseTemplateModeDialogComponent, [{
    type: Component,
    args: [{
      selector: "use-template-mode-dialog",
      standalone: true,
      imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
      template: `
        <div class="p-1">
            <div class="flex items-start gap-4 border-b border-stone-200/80 px-6 pb-5 pt-6 dark:border-gray-800">
                <div
                    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200"
                >
                    <mat-icon>{{ isAddInputs() ? 'playlist_add' : 'description' }}</mat-icon>
                </div>
                <div class="min-w-0 flex-1">
                    <p
                        class="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500"
                    >
                        {{ getEyebrowKey() | transloco }}
                    </p>
                    <h2 class="mt-1 text-lg font-semibold leading-snug text-stone-950 dark:text-white">
                        @if (data.title) {
                            {{ data.title }}
                        } @else if (data.template?.nameKey) {
                            {{ data.template!.nameKey! | transloco }}
                        } @else {
                            {{ data.template?.name ?? '' }}
                        }
                    </h2>
                    <p class="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                        {{ getChooseModeDescKey() | transloco }}
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-3 px-6 py-5">
                <button
                    type="button"
                    class="group flex w-full items-start gap-4 rounded-2xl border border-stone-200 bg-white p-4 text-left transition hover:border-stone-950 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900/70 dark:hover:border-white"
                    (click)="select('single')"
                >
                    <div
                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 transition group-hover:border-stone-950 group-hover:bg-stone-950 group-hover:text-white dark:border-gray-700 dark:bg-gray-950 dark:text-stone-200 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-gray-950"
                    >
                        <mat-icon class="!h-5 !w-5 !text-[20px]">{{ getValidateOneRecordIcon() }}</mat-icon>
                    </div>
                    <div class="min-w-0 flex-1">
                        <span class="block text-sm font-semibold text-stone-950 dark:text-white">
                            {{ getSingleOptionTitleKey() | transloco }}
                        </span>
                        <span class="mt-1 block text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                            {{ getValidateOneRecordHintKey() | transloco }}
                        </span>
                    </div>
                    <mat-icon class="mt-1 shrink-0 text-stone-300 transition group-hover:text-stone-950 dark:text-stone-600 dark:group-hover:text-white"
                        >arrow_forward</mat-icon
                    >
                </button>

                <button
                    type="button"
                    class="group flex w-full items-start gap-4 rounded-2xl border border-stone-200 bg-white p-4 text-left transition hover:border-stone-950 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900/70 dark:hover:border-white"
                    (click)="select('batch')"
                >
                    <div
                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 transition group-hover:border-stone-950 group-hover:bg-stone-950 group-hover:text-white dark:border-gray-700 dark:bg-gray-950 dark:text-stone-200 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-gray-950"
                    >
                        <mat-icon class="!h-5 !w-5 !text-[20px]">upload_file</mat-icon>
                    </div>
                    <div class="min-w-0 flex-1">
                        <span class="block text-sm font-semibold text-stone-950 dark:text-white">
                            {{ 'smartBatchSystemPresets.uploadBatch' | transloco }}
                        </span>
                        <span class="mt-1 block text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                            {{ getBatchOptionHintKey() | transloco }}
                        </span>
                    </div>
                    <mat-icon class="mt-1 shrink-0 text-stone-300 transition group-hover:text-stone-950 dark:text-stone-600 dark:group-hover:text-white"
                        >arrow_forward</mat-icon
                    >
                </button>
            </div>

            <div class="flex justify-end border-t border-stone-200/80 px-6 py-4 dark:border-gray-800">
                <button
                    type="button"
                    mat-dialog-close
                    class="inline-flex min-h-10 items-center justify-center rounded-xl px-4 text-sm font-medium text-stone-600 transition hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-gray-800"
                >
                    {{ 'smartBatchSystemPresets.cancel' | transloco }}
                </button>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UseTemplateModeDialogComponent, { className: "UseTemplateModeDialogComponent", filePath: "src/app/modules/smart-batch/use-template-mode-dialog.component.ts", lineNumber: 113 });
})();

// src/app/modules/smart-batch/smart-batch-input-mode.service.ts
var SmartBatchInputModeService = class _SmartBatchInputModeService {
  constructor() {
    this._dialog = inject(MatDialog);
  }
  openModeDialog(data) {
    const dialogRef = this._dialog.open(UseTemplateModeDialogComponent, {
      width: "520px",
      maxWidth: "95vw",
      panelClass: "smart-batch-mode-dialog",
      data
    });
    return dialogRef.afterClosed().pipe(take(1));
  }
  static {
    this.\u0275fac = function SmartBatchInputModeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartBatchInputModeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartBatchInputModeService, factory: _SmartBatchInputModeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartBatchInputModeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var inferBatchCategory = (name) => {
  const normalized = (name ?? "").toLowerCase();
  if (normalized.includes("vehicle") || normalized.includes("plate") || normalized.includes("veh\xEDculo")) {
    return "vehicle";
  }
  if (normalized.includes("company") || normalized.includes("business") || normalized.includes("empresa") || normalized.includes("nit")) {
    return "company";
  }
  if (normalized.includes("citizen") || normalized.includes("ciudadano") || normalized.includes("cedula") || normalized.includes("c\xE9dula")) {
    return "citizen";
  }
  return void 0;
};

export {
  SmartBatchInputModeService,
  inferBatchCategory
};
//# sourceMappingURL=chunk-6DXZIKYZ.js.map
