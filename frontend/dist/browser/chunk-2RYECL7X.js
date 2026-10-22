import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-HVUVGZ2L.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-PJFCLQ64.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-FWBWCXY5.js";
import {
  CommonModule,
  Component,
  Input,
  NgClass,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YWP2Y7QK.js";

// src/app/modules/smart-enroll/projects/barcode-validation-panel.component.ts
var _c0 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.key;
function BarcodeValidationPanelComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordDetail.barcode.unreadableWarning"), " ");
  }
}
function BarcodeValidationPanelComponent_Conditional_0_Conditional_12_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordDetail.barcode.field." + field_r1));
  }
}
function BarcodeValidationPanelComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 9);
    \u0275\u0275repeaterCreate(5, BarcodeValidationPanelComponent_Conditional_0_Conditional_12_For_6_Template, 3, 3, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.barcode.mismatchLead"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.validation.disagreements);
  }
}
function BarcodeValidationPanelComponent_Conditional_0_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.barcode.field." + field_r3.key), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(field_r3.value);
  }
}
function BarcodeValidationPanelComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, BarcodeValidationPanelComponent_Conditional_0_Conditional_13_For_2_Template, 6, 4, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.confirmedFields());
  }
}
function BarcodeValidationPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 4);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, BarcodeValidationPanelComponent_Conditional_0_Conditional_11_Template, 3, 3, "p", 5)(12, BarcodeValidationPanelComponent_Conditional_0_Conditional_12_Template, 7, 3, "div", 6)(13, BarcodeValidationPanelComponent_Conditional_0_Conditional_13_Template, 3, 0, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "smartEnrollProjects.recordDetail.barcode.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.verdictClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "smartEnrollProjects.recordDetail.barcode.verdict." + (ctx_r1.validation.verdict || "unreadable")), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 11, "smartEnrollProjects.recordDetail.barcode.attempts", \u0275\u0275pureFunction1(14, _c0, ctx_r1.validation.attempts || 1)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.validation.verdict === "unreadable" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.validation.verdict === "mismatch" && (ctx_r1.validation.disagreements == null ? null : ctx_r1.validation.disagreements.length) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.validation.verdict !== "unreadable" && ctx_r1.confirmedFields().length ? 13 : -1);
  }
}
var BarcodeValidationPanelComponent = class _BarcodeValidationPanelComponent {
  constructor() {
    this.validation = null;
  }
  confirmedFields() {
    const barcode = this.validation?.barcode;
    if (!barcode)
      return [];
    return [
      { key: "fullName", value: barcode.fullName || "" },
      { key: "documentNumber", value: barcode.documentNumber || "" },
      { key: "dateOfBirth", value: barcode.dateOfBirth || "" },
      { key: "gender", value: barcode.gender || "" },
      { key: "bloodType", value: barcode.bloodType || "" }
    ].filter((field) => field.value);
  }
  verdictClass() {
    if (this.validation?.verdict === "confirmed") {
      return "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200";
    }
    if (this.validation?.verdict === "mismatch") {
      return "bg-red-100 text-red-900 dark:bg-red-950/50 dark:text-red-200";
    }
    return "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200";
  }
  static {
    this.\u0275fac = function BarcodeValidationPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BarcodeValidationPanelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarcodeValidationPanelComponent, selectors: [["barcode-validation-panel"]], inputs: { validation: "validation" }, decls: 1, vars: 1, consts: [[1, "border-t", "border-stone-100", "px-5", "py-5", "dark:border-gray-800", "md:px-6"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "inline-flex", "rounded-full", "px-2.5", "py-0.5", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-2", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "mt-3", "rounded-xl", "bg-amber-50", "px-3", "py-2", "text-sm", "text-amber-950", "dark:bg-amber-950/30", "dark:text-amber-100"], [1, "mt-3"], [1, "mt-3", "grid", "gap-3", "md:grid-cols-2"], [1, "text-sm", "font-medium", "text-red-800", "dark:text-red-200"], [1, "mt-2", "list-disc", "space-y-1", "pl-5", "text-sm", "text-stone-700", "dark:text-stone-200"], [1, "rounded-xl", "border", "border-stone-100", "bg-stone-50/80", "px-3", "py-2", "dark:border-gray-800", "dark:bg-gray-800/40"], [1, "text-xs", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "mt-0.5", "text-sm", "font-medium", "text-stone-900", "dark:text-stone-100"]], template: function BarcodeValidationPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BarcodeValidationPanelComponent_Conditional_0_Template, 14, 16, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.validation ? 0 : -1);
      }
    }, dependencies: [CommonModule, NgClass, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarcodeValidationPanelComponent, [{
    type: Component,
    args: [{ selector: "barcode-validation-panel", standalone: true, imports: [CommonModule, TranslocoModule], template: `@if (validation) {\r
    <div class="border-t border-stone-100 px-5 py-5 dark:border-gray-800 md:px-6">\r
        <div class="flex flex-wrap items-center justify-between gap-3">\r
            <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                {{ 'smartEnrollProjects.recordDetail.barcode.title' | transloco }}\r
            </h3>\r
            <span class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold" [ngClass]="verdictClass()">\r
                {{ 'smartEnrollProjects.recordDetail.barcode.verdict.' + (validation.verdict || 'unreadable') | transloco }}\r
            </span>\r
        </div>\r
\r
        <p class="mt-2 text-sm text-stone-600 dark:text-stone-300">\r
            {{ 'smartEnrollProjects.recordDetail.barcode.attempts' | transloco: { count: validation.attempts || 1 } }}\r
        </p>\r
\r
        @if (validation.verdict === 'unreadable') {\r
            <p class="mt-3 rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-950 dark:bg-amber-950/30 dark:text-amber-100">\r
                {{ 'smartEnrollProjects.recordDetail.barcode.unreadableWarning' | transloco }}\r
            </p>\r
        }\r
\r
        @if (validation.verdict === 'mismatch' && validation.disagreements?.length) {\r
            <div class="mt-3">\r
                <p class="text-sm font-medium text-red-800 dark:text-red-200">\r
                    {{ 'smartEnrollProjects.recordDetail.barcode.mismatchLead' | transloco }}\r
                </p>\r
                <ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-stone-700 dark:text-stone-200">\r
                    @for (field of validation.disagreements; track field) {\r
                        <li>{{ 'smartEnrollProjects.recordDetail.barcode.field.' + field | transloco }}</li>\r
                    }\r
                </ul>\r
            </div>\r
        }\r
\r
        @if (validation.verdict !== 'unreadable' && confirmedFields().length) {\r
            <div class="mt-3 grid gap-3 md:grid-cols-2">\r
                @for (field of confirmedFields(); track field.key) {\r
                    <div class="rounded-xl border border-stone-100 bg-stone-50/80 px-3 py-2 dark:border-gray-800 dark:bg-gray-800/40">\r
                        <p class="text-xs font-medium text-stone-500 dark:text-stone-400">\r
                            {{ 'smartEnrollProjects.recordDetail.barcode.field.' + field.key | transloco }}\r
                        </p>\r
                        <p class="mt-0.5 text-sm font-medium text-stone-900 dark:text-stone-100">{{ field.value }}</p>\r
                    </div>\r
                }\r
            </div>\r
        }\r
    </div>\r
}\r
` }]
  }], null, { validation: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarcodeValidationPanelComponent, { className: "BarcodeValidationPanelComponent", filePath: "src/app/modules/smart-enroll/projects/barcode-validation-panel.component.ts", lineNumber: 25 });
})();

// src/app/modules/smart-enroll/smart-scan/scan-delete-confirm-dialog.component.ts
var ScanDeleteConfirmDialogComponent = class _ScanDeleteConfirmDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
  }
  static {
    this.\u0275fac = function ScanDeleteConfirmDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScanDeleteConfirmDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScanDeleteConfirmDialogComponent, selectors: [["scan-delete-confirm-dialog"]], decls: 14, vars: 14, consts: [["mat-dialog-title", "", 1, "!m-0", "!font-semibold", "!text-lg", "!leading-snug", "!tracking-tight", "text-stone-900", "dark:text-white", "md:!text-xl"], [1, "m-0", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], ["align", "end"], ["mat-button", "", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close"]], template: function ScanDeleteConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-dialog-content")(4, "p", 1);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "mat-dialog-actions", 2)(8, "button", 3);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 4);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, ctx.data.titleKey), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, ctx.data.messageKey));
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", false);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, ctx.data.cancelKey));
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, ctx.data.confirmKey));
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScanDeleteConfirmDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "scan-delete-confirm-dialog",
      imports: [MatDialogModule, MatButtonModule, TranslocoModule],
      template: `
        <h2
            mat-dialog-title
            class="!m-0 !font-semibold !text-lg !leading-snug !tracking-tight text-stone-900 dark:text-white md:!text-xl"
        >
            {{ data.titleKey | transloco }}
        </h2>
        <mat-dialog-content>
            <p class="m-0 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{{ data.messageKey | transloco }}</p>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button [mat-dialog-close]="false">{{ data.cancelKey | transloco }}</button>
            <button mat-flat-button color="warn" [mat-dialog-close]="true">{{ data.confirmKey | transloco }}</button>
        </mat-dialog-actions>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScanDeleteConfirmDialogComponent, { className: "ScanDeleteConfirmDialogComponent", filePath: "src/app/modules/smart-enroll/smart-scan/scan-delete-confirm-dialog.component.ts", lineNumber: 33 });
})();

export {
  BarcodeValidationPanelComponent,
  ScanDeleteConfirmDialogComponent
};
//# sourceMappingURL=chunk-2RYECL7X.js.map
