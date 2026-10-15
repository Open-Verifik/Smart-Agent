import {
  AuthModalComponent
} from "./chunk-RKG2MQOF.js";
import {
  SessionService
} from "./chunk-V36MHRLI.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-WKFG3L4B.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
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
  Router
} from "./chunk-DM2XPT7T.js";
import {
  CommonModule,
  Component,
  Injectable,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-I5BUD46C.js";
import {
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/layout/common/auth-required-dialog/auth-required-dialog.types.ts
var DEFAULT_AUTH_REQUIRED_DIALOG_DATA = {
  titleKey: "guestFeatureAuth.title",
  bodyKey: "guestFeatureAuth.body",
  signInKey: "guestFeatureAuth.signIn",
  backHomeKey: "guestFeatureAuth.backHome",
  closeAriaKey: "guestFeatureAuth.closeAria"
};

// src/app/layout/common/auth-required-dialog/auth-required-dialog.component.ts
var AuthRequiredDialogComponent = class _AuthRequiredDialogComponent {
  constructor() {
    this.data = __spreadValues(__spreadValues({}, DEFAULT_AUTH_REQUIRED_DIALOG_DATA), inject(MAT_DIALOG_DATA, { optional: true }) ?? {});
    this._dialogRef = inject(MatDialogRef);
  }
  closeAsHome() {
    this._dialogRef.close("home");
  }
  signIn() {
    this._dialogRef.close("signIn");
  }
  static {
    this.\u0275fac = function AuthRequiredDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthRequiredDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthRequiredDialogComponent, selectors: [["auth-required-dialog"]], decls: 20, vars: 15, consts: [[1, "relative", "flex", "flex-col", "items-center", "px-8", "pt-10", "pb-8", "w-full"], ["mat-icon-button", "", "type", "button", 1, "!absolute", "!top-3", "!right-3", "!text-slate-400", "hover:!text-slate-600", "dark:hover:!text-slate-200", 3, "click"], [1, "!text-[18px]", "!w-[18px]", "!h-[18px]"], [1, "flex", "items-center", "justify-center", "w-14", "h-14", "rounded-2xl", "bg-primary/10", "mb-5"], [1, "!text-primary", "!text-[26px]", "!w-[26px]", "!h-[26px]"], [1, "text-xl", "font-bold", "text-slate-900", "dark:text-slate-100", "text-center", "m-0", "mb-2", "leading-snug"], [1, "text-sm", "text-slate-500", "dark:text-slate-400", "text-center", "leading-relaxed", "m-0", "mb-7", "max-w-[280px]"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "w-full", "!rounded-lg", "!h-11", "!text-sm", "!font-semibold", "mb-3", 3, "click"], ["mat-button", "", "type", "button", 1, "!text-slate-400", "dark:!text-slate-500", "!text-sm", "hover:!text-slate-600", "dark:hover:!text-slate-300", "!h-9", 3, "click"]], template: function AuthRequiredDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275pipe(2, "transloco");
        \u0275\u0275listener("click", function AuthRequiredDialogComponent_Template_button_click_1_listener() {
          return ctx.closeAsHome();
        });
        \u0275\u0275elementStart(3, "mat-icon", 2);
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3)(6, "mat-icon", 4);
        \u0275\u0275text(7, "lock");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "h2", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 6);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 7);
        \u0275\u0275listener("click", function AuthRequiredDialogComponent_Template_button_click_14_listener() {
          return ctx.signIn();
        });
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 8);
        \u0275\u0275listener("click", function AuthRequiredDialogComponent_Template_button_click_17_listener() {
          return ctx.closeAsHome();
        });
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, ctx.data.closeAriaKey));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, ctx.data.titleKey), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 9, ctx.data.bodyKey), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, ctx.data.signInKey), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 13, ctx.data.backHomeKey), " ");
      }
    }, dependencies: [CommonModule, MatDialogModule, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRequiredDialogComponent, [{
    type: Component,
    args: [{
      selector: "auth-required-dialog",
      standalone: true,
      imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
      template: `
        <div class="relative flex flex-col items-center px-8 pt-10 pb-8 w-full">
            <!-- Close -->
            <button
                mat-icon-button
                type="button"
                [attr.aria-label]="data.closeAriaKey | transloco"
                (click)="closeAsHome()"
                class="!absolute !top-3 !right-3 !text-slate-400 hover:!text-slate-600 dark:hover:!text-slate-200"
            >
                <mat-icon class="!text-[18px] !w-[18px] !h-[18px]">close</mat-icon>
            </button>

            <!-- Icon badge -->
            <div class="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
                <mat-icon class="!text-primary !text-[26px] !w-[26px] !h-[26px]">lock</mat-icon>
            </div>

            <!-- Title -->
            <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100 text-center m-0 mb-2 leading-snug">
                {{ data.titleKey | transloco }}
            </h2>

            <!-- Body -->
            <p class="text-sm text-slate-500 dark:text-slate-400 text-center leading-relaxed m-0 mb-7 max-w-[280px]">
                {{ data.bodyKey | transloco }}
            </p>

            <!-- Primary CTA -->
            <button
                mat-flat-button
                color="primary"
                type="button"
                class="w-full !rounded-lg !h-11 !text-sm !font-semibold mb-3"
                (click)="signIn()"
            >
                {{ data.signInKey | transloco }}
            </button>

            <!-- Secondary ghost link -->
            <button
                mat-button
                type="button"
                class="!text-slate-400 dark:!text-slate-500 !text-sm hover:!text-slate-600 dark:hover:!text-slate-300 !h-9"
                (click)="closeAsHome()"
            >
                {{ data.backHomeKey | transloco }}
            </button>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthRequiredDialogComponent, { className: "AuthRequiredDialogComponent", filePath: "src/app/layout/common/auth-required-dialog/auth-required-dialog.component.ts", lineNumber: 65 });
})();

// src/app/core/services/auth-required-gate.service.ts
var AuthRequiredGateService = class _AuthRequiredGateService {
  constructor() {
    this._dialog = inject(MatDialog);
    this._router = inject(Router);
    this._sessionService = inject(SessionService);
  }
  runWithAuthOrDialog(options) {
    if (this._sessionService.hasValidAuthentication()) {
      options.onAuthenticated();
      return;
    }
    const data = __spreadValues(__spreadValues({}, DEFAULT_AUTH_REQUIRED_DIALOG_DATA), options.dialogData);
    this._dialog.open(AuthRequiredDialogComponent, {
      width: "400px",
      maxWidth: "100vw",
      panelClass: options.panelClass ?? "auth-required-dialog",
      data
    }).afterClosed().subscribe((result) => {
      if (result === "signIn") {
        this._dialog.open(AuthModalComponent, {
          panelClass: "auth-modal-dialog",
          width: "400px"
        }).afterClosed().subscribe(() => {
          if (this._sessionService.hasValidAuthentication()) {
            options.onAuthenticated();
          } else {
            this._router.navigate(["/home"]);
          }
        });
        return;
      }
      if (result === "home") {
        this._router.navigate(["/home"]);
        return;
      }
      if (!this._sessionService.hasValidAuthentication()) {
        this._router.navigate(["/home"]);
      }
    });
  }
  static {
    this.\u0275fac = function AuthRequiredGateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthRequiredGateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthRequiredGateService, factory: _AuthRequiredGateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRequiredGateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthRequiredGateService
};
//# sourceMappingURL=chunk-A6DA237F.js.map
