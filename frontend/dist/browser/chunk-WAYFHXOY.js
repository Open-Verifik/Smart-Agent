import {
  MatDialogModule,
  MatDialogRef
} from "./chunk-M5KDIZH5.js";
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
  TranslocoModule,
  TranslocoPipe
} from "./chunk-R5W3A6HI.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNPEHISK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/home/sandbox-mode-info-modal/sandbox-mode-info-modal.component.ts
var SandboxModeInfoModalComponent = class _SandboxModeInfoModalComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
  }
  close() {
    this._dialogRef.close();
  }
  static {
    this.\u0275fac = function SandboxModeInfoModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SandboxModeInfoModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SandboxModeInfoModalComponent, selectors: [["home-sandbox-mode-info-modal"]], decls: 34, vars: 21, consts: [[1, "flex", "max-w-lg", "flex-col"], [1, "flex", "items-start", "justify-between", "gap-4", "border-b", "border-slate-200", "px-6", "pb-4", "pt-6", "dark:border-slate-700"], [1, "flex", "min-w-0", "items-start", "gap-3"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-xl", "bg-amber-500/15", "text-amber-700", "dark:text-amber-300"], [1, "min-w-0"], [1, "text-lg", "font-semibold", "text-slate-900", "dark:text-white"], ["mat-icon-button", "", "type", "button", 1, "!-mr-2", "shrink-0", 3, "click"], [1, "space-y-4", "px-6", "py-6", "text-sm", "leading-relaxed", "text-slate-600", "dark:text-slate-400"], [1, "list-disc", "space-y-2", "pl-5"], [1, "rounded-lg", "border", "border-slate-200", "bg-slate-50", "p-3", "text-xs", "dark:border-slate-600", "dark:bg-slate-800/60"], [1, "flex", "justify-end", "border-t", "border-slate-200", "px-6", "py-4", "dark:border-slate-700"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function SandboxModeInfoModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
        \u0275\u0275text(5, "science");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "h2", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "button", 6);
        \u0275\u0275listener("click", function SandboxModeInfoModalComponent_Template_button_click_10_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(11, "mat-icon");
        \u0275\u0275text(12, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 7)(14, "p");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "ul", 8)(18, "li");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "li");
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "li");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "p", 9);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 10)(31, "button", 11);
        \u0275\u0275listener("click", function SandboxModeInfoModalComponent_Template_button_click_31_listener() {
          return ctx.close();
        });
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "transloco");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 7, "home.sandbox.modalTitle"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 9, "home.sandbox.modalIntro"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 11, "home.sandbox.modalBullet1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 13, "home.sandbox.modalBullet2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 15, "home.sandbox.modalBullet3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 17, "home.sandbox.modalFooter"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 19, "home.sandbox.modalClose"), " ");
      }
    }, dependencies: [CommonModule, MatDialogModule, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=sandbox-mode-info-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SandboxModeInfoModalComponent, [{
    type: Component,
    args: [{ selector: "home-sandbox-mode-info-modal", standalone: true, imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule], template: `
        <div class="flex max-w-lg flex-col">
            <div class="flex items-start justify-between gap-4 border-b border-slate-200 px-6 pb-4 pt-6 dark:border-slate-700">
                <div class="flex min-w-0 items-start gap-3">
                    <div
                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300"
                    >
                        <mat-icon>science</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <h2 class="text-lg font-semibold text-slate-900 dark:text-white">
                            {{ 'home.sandbox.modalTitle' | transloco }}
                        </h2>
                    </div>
                </div>
                <button mat-icon-button type="button" (click)="close()" class="!-mr-2 shrink-0">
                    <mat-icon>close</mat-icon>
                </button>
            </div>
            <div class="space-y-4 px-6 py-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                <p>{{ 'home.sandbox.modalIntro' | transloco }}</p>
                <ul class="list-disc space-y-2 pl-5">
                    <li>{{ 'home.sandbox.modalBullet1' | transloco }}</li>
                    <li>{{ 'home.sandbox.modalBullet2' | transloco }}</li>
                    <li>{{ 'home.sandbox.modalBullet3' | transloco }}</li>
                </ul>
                <p class="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs dark:border-slate-600 dark:bg-slate-800/60">
                    {{ 'home.sandbox.modalFooter' | transloco }}
                </p>
            </div>
            <div class="flex justify-end border-t border-slate-200 px-6 py-4 dark:border-slate-700">
                <button mat-flat-button color="primary" type="button" (click)="close()">
                    {{ 'home.sandbox.modalClose' | transloco }}
                </button>
            </div>
        </div>
    `, styles: ["/* angular:styles/component:scss;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/home/sandbox-mode-info-modal/sandbox-mode-info-modal.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=sandbox-mode-info-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SandboxModeInfoModalComponent, { className: "SandboxModeInfoModalComponent", filePath: "src/app/modules/home/sandbox-mode-info-modal/sandbox-mode-info-modal.component.ts", lineNumber: 57 });
})();
export {
  SandboxModeInfoModalComponent
};
//# sourceMappingURL=chunk-WAYFHXOY.js.map
