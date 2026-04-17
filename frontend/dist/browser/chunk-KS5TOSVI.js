import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-KCV7S453.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VHMFS3U6.js";
import {
  Component,
  MatButton,
  MatButtonModule,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YTOBX75K.js";

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
  ScanDeleteConfirmDialogComponent
};
//# sourceMappingURL=chunk-KS5TOSVI.js.map
