import {
  StatusCheckService
} from "./chunk-ZHR6FTPN.js";
import {
  MatChipGrid,
  MatChipInput,
  MatChipRemove,
  MatChipRow,
  MatChipsModule
} from "./chunk-7S2EHCDW.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DXMIRT7Q.js";
import "./chunk-LPSMXQSY.js";
import "./chunk-GMB4P7VL.js";
import "./chunk-346ISJSG.js";
import {
  MatInputModule
} from "./chunk-HZKTYM3F.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KCV7S453.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-3YVZWUPK.js";
import {
  FormsModule,
  ReactiveFormsModule
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
  COMMA,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ENTER,
  Inject,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgForOf,
  NgIf,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YTOBX75K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/status-check/subscribe/subscribe.component.ts
var _c0 = (a0) => ({ name: a0 });
function SubscribeComponent_div_5_mat_chip_row_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip-row", 30);
    \u0275\u0275listener("removed", function SubscribeComponent_div_5_mat_chip_row_33_Template_mat_chip_row_removed_0_listener() {
      const email_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.remove(email_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 31)(3, "mat-icon");
    \u0275\u0275text(4, "cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const email_r3 = ctx.$implicit;
    \u0275\u0275property("editable", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r3, " ");
  }
}
function SubscribeComponent_div_5_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function SubscribeComponent_div_5_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.delete());
    });
    \u0275\u0275elementStart(1, "mat-icon", 33);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r3.loading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("network.alerts.remove"), " ");
  }
}
function SubscribeComponent_div_5_mat_spinner_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 34);
  }
}
function SubscribeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "mat-icon", 9);
    \u0275\u0275text(4, "notifications_active");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h1", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "h3", 13)(11, "mat-icon", 14);
    \u0275\u0275text(12, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ul", 15)(15, "li", 16)(16, "span", 17);
    \u0275\u0275text(17, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li", 16)(20, "span", 17);
    \u0275\u0275text(21, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li", 16)(24, "span", 17);
    \u0275\u0275text(25, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 18)(28, "label", 19);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-form-field", 20)(31, "mat-chip-grid", 21, 0);
    \u0275\u0275template(33, SubscribeComponent_div_5_mat_chip_row_33_Template, 5, 2, "mat-chip-row", 22);
    \u0275\u0275elementStart(34, "input", 23);
    \u0275\u0275listener("matChipInputTokenEnd", function SubscribeComponent_div_5_Template_input_matChipInputTokenEnd_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.add($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "p", 24);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 25);
    \u0275\u0275template(38, SubscribeComponent_div_5_button_38_Template, 4, 2, "button", 26);
    \u0275\u0275element(39, "div", 27);
    \u0275\u0275elementStart(40, "button", 28);
    \u0275\u0275listener("click", function SubscribeComponent_div_5_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275template(41, SubscribeComponent_div_5_mat_spinner_41_Template, 1, 0, "mat-spinner", 29);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const chipGrid_r7 = \u0275\u0275reference(32);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r3.currentSubscription ? t_r6("network.alerts.header_update") : t_r6("network.alerts.header_subscribe"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("network.alerts.subtitle", \u0275\u0275pureFunction1(17, _c0, ctx_r3.data.subject.method.currentTranslation)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r6("network.alerts.how_it_works"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r6("network.alerts.instruction_1"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r6("network.alerts.instruction_2"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r6("network.alerts.instruction_3"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("network.alerts.emails_label"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.emails);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", t_r6("network.alerts.placeholder"))("matChipInputFor", chipGrid_r7)("matChipInputSeparatorKeyCodes", ctx_r3.separatorKeysCodes)("matChipInputAddOnBlur", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("network.alerts.hint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.currentSubscription);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.currentSubscription ? t_r6("network.alerts.save_changes") : t_r6("network.alerts.enable"), " ");
  }
}
var SubscribeComponent = class _SubscribeComponent {
  constructor(data, _dialogRef, _translocoService, _snackBar, _statusCheckService, _cdr) {
    this.data = data;
    this._dialogRef = _dialogRef;
    this._translocoService = _translocoService;
    this._snackBar = _snackBar;
    this._statusCheckService = _statusCheckService;
    this._cdr = _cdr;
    this.separatorKeysCodes = [ENTER, COMMA];
    this.emails = [];
    this.loading = false;
    this.currentSubscription = null;
    if (data.subject?.subscription) {
      this.currentSubscription = data.subject.subscription;
      if (this.currentSubscription.emails) {
        const rawEmails = this.currentSubscription.emails;
        if (typeof rawEmails === "string") {
          this.emails = rawEmails.split(",").filter((e) => !!e);
        } else if (Array.isArray(rawEmails)) {
          if (rawEmails.length === 1 && rawEmails[0].includes(",")) {
            this.emails = rawEmails[0].split(",").filter((e) => !!e);
          } else {
            this.emails = [...rawEmails];
          }
        }
      }
    }
  }
  ngOnInit() {
  }
  add(event) {
    const value = (event.value || "").trim();
    if (!value)
      return;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(value)) {
      if (this.emails.length >= 5) {
        this._snackBar.open(this._translocoService.translate("network.alerts.max_reached"), "Close", { duration: 3e3 });
        return;
      }
      if (!this.emails.includes(value)) {
        this.emails.push(value);
      }
    } else {
      this._snackBar.open(this._translocoService.translate("network.alerts.invalid_email"), "Close", { duration: 3e3 });
    }
    event.chipInput.clear();
  }
  remove(email) {
    const index = this.emails.indexOf(email);
    if (index >= 0) {
      this.emails.splice(index, 1);
    }
  }
  save() {
    const pendingInput = document.querySelector("input[matChipInputFor]");
    if (pendingInput && pendingInput.value) {
      const value = pendingInput.value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(value) && !this.emails.includes(value)) {
        if (this.emails.length < 5) {
          this.emails.push(value);
          pendingInput.value = "";
        }
      }
    }
    if (this.emails.length === 0) {
      this._snackBar.open(this._translocoService.translate("network.alerts.at_least_one"), "Close", { duration: 3e3 });
      return;
    }
    this.loading = true;
    const payload = {
      emails: this.emails,
      // Send as array
      appFeature: this.data.subject.method.code,
      alias: `${this.data.subject.method.code}@mg.verifik.co`
    };
    if (this.currentSubscription) {
      const updatePayload = __spreadProps(__spreadValues({}, payload), {
        _id: this.currentSubscription._id
      });
      this._statusCheckService.putIncidentsSubscriptions(updatePayload).subscribe({
        next: (res) => {
          const subscription = res.data || res;
          if (!subscription.emails || subscription.emails.length === 0) {
            subscription.emails = this.emails;
          }
          this._dialogRef.close({ update: true, subscription });
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this._snackBar.open(this._translocoService.translate("network.alerts.error_update"), "Close", { duration: 3e3 });
        }
      });
    } else {
      this._statusCheckService.postIncidentsSubscriptions(payload).subscribe({
        next: (res) => {
          const subscription = res.data || res;
          if (!subscription.emails || subscription.emails.length === 0) {
            subscription.emails = this.emails;
          }
          this._dialogRef.close({ create: true, subscription });
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this._snackBar.open(this._translocoService.translate("network.alerts.error_create"), "Close", { duration: 3e3 });
        }
      });
    }
  }
  delete() {
    if (!this.currentSubscription)
      return;
    this.loading = true;
    this._statusCheckService.deleteIncidentsSubscriptions({ _id: this.currentSubscription._id }).subscribe({
      next: () => {
        this._dialogRef.close({ delete: true });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this._snackBar.open(this._translocoService.translate("network.alerts.error_delete"), "Close", { duration: 3e3 });
      }
    });
  }
  close() {
    this._dialogRef.close();
  }
  static {
    this.\u0275fac = function SubscribeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscribeComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(TranslocoService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(StatusCheckService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscribeComponent, selectors: [["status-check-subscribe"]], decls: 6, vars: 0, consts: [["chipGrid", ""], [1, "flex", "flex-col", "max-w-lg", "w-full"], [1, "flex", "items-center", "justify-end", "p-2"], ["mat-icon-button", "", 3, "click"], [1, "text-gray-400"], ["class", "flex flex-col px-8 pb-8", 4, "transloco"], [1, "flex", "flex-col", "px-8", "pb-8"], [1, "flex", "flex-col", "items-center", "text-center", "mb-8"], [1, "flex", "items-center", "justify-center", "w-16", "h-16", "rounded-full", "bg-primary-50", "dark:bg-primary-900/20", "mb-4"], [1, "icon-size-8", "text-primary-600", "dark:text-primary-400"], [1, "text-2xl", "font-bold", "tracking-tight", "text-gray-900", "dark:text-white"], [1, "text-gray-500", "dark:text-gray-400", "mt-2"], [1, "bg-gray-50", "dark:bg-gray-800/50", "rounded-xl", "p-4", "mb-8", "border", "border-gray-100", "dark:border-gray-700"], [1, "text-sm", "font-semibold", "text-gray-900", "dark:text-white", "mb-2", "flex", "items-center"], [1, "icon-size-4", "mr-2", "text-primary-500"], [1, "text-sm", "text-gray-600", "dark:text-gray-400", "space-y-2"], [1, "flex", "items-start"], [1, "mr-2", "text-primary-500"], [1, "flex", "flex-col"], [1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-2"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full"], ["aria-label", "Enter emails"], [3, "editable", "removed", 4, "ngFor", "ngForOf"], [3, "matChipInputTokenEnd", "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [1, "text-xs", "text-gray-400", "mt-2"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "gap-3", "mt-10"], ["class", "w-full sm:w-auto", "mat-stroked-button", "", "color", "warn", 3, "disabled", "click", 4, "ngIf"], [1, "flex-auto"], ["mat-flat-button", "", 1, "w-full", "sm:w-auto", "px-8", "py-2.5", "rounded-xl", "bg-primary-600", "text-white", "hover:bg-primary-700", "transition-colors", "disabled:opacity-50", 3, "click", "disabled"], ["diameter", "20", "class", "mr-2", 4, "ngIf"], [3, "removed", "editable"], ["matChipRemove", "", "aria-label", "'remove ' + email"], ["mat-stroked-button", "", "color", "warn", 1, "w-full", "sm:w-auto", 3, "click", "disabled"], [1, "icon-size-5", "mr-2"], ["diameter", "20", 1, "mr-2"]], template: function SubscribeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
        \u0275\u0275listener("click", function SubscribeComponent_Template_button_click_2_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(3, "mat-icon", 4);
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(5, SubscribeComponent_div_5_Template, 43, 19, "div", 5);
        \u0275\u0275elementEnd();
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatDialogModule,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatFormField,
      MatFormFieldModule,
      MatChipsModule,
      MatChipGrid,
      MatChipInput,
      MatChipRemove,
      MatChipRow,
      TranslocoModule,
      TranslocoDirective,
      MatSnackBarModule
    ], styles: ["/* src/app/modules/status-check/subscribe/subscribe.component.scss */\nstatus-check-subscribe {\n  display: block;\n  background: white;\n}\n.dark status-check-subscribe {\n  background: #111827;\n}\nstatus-check-subscribe .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\nstatus-check-subscribe .mat-mdc-chip-grid {\n  min-height: 48px;\n}\nstatus-check-subscribe .mat-mdc-standard-chip {\n  --mdc-chip-elevated-container-color: #f3f4f6;\n  --mdc-chip-label-text-color: #374151;\n  border-radius: 8px !important;\n}\n.dark status-check-subscribe .mat-mdc-standard-chip {\n  --mdc-chip-elevated-container-color: #374151;\n  --mdc-chip-label-text-color: #f3f4f6;\n}\n/*# sourceMappingURL=subscribe.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscribeComponent, [{
    type: Component,
    args: [{ selector: "status-check-subscribe", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatChipsModule,
      TranslocoModule,
      MatSnackBarModule
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex flex-col max-w-lg w-full">
    <!-- Close Button -->
    <div class="flex items-center justify-end p-2">
        <button mat-icon-button (click)="close()">
            <mat-icon class="text-gray-400">close</mat-icon>
        </button>
    </div>

    <div class="flex flex-col px-8 pb-8" *transloco="let t">
        <!-- Header & Icon -->
        <div class="flex flex-col items-center text-center mb-8">
            <div
                class="flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 dark:bg-primary-900/20 mb-4"
            >
                <mat-icon class="icon-size-8 text-primary-600 dark:text-primary-400"
                    >notifications_active</mat-icon
                >
            </div>
            <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{
                    currentSubscription
                        ? t('network.alerts.header_update')
                        : t('network.alerts.header_subscribe')
                }}
            </h1>
            <p class="text-gray-500 dark:text-gray-400 mt-2">
                {{
                    t('network.alerts.subtitle', {
                        name: data.subject.method.currentTranslation,
                    })
                }}
            </p>
        </div>

        <!-- Instructions Card -->
        <div
            class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 mb-8 border border-gray-100 dark:border-gray-700"
        >
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                <mat-icon class="icon-size-4 mr-2 text-primary-500">info</mat-icon>
                {{ t('network.alerts.how_it_works') }}
            </h3>
            <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li class="flex items-start">
                    <span class="mr-2 text-primary-500">\u2022</span>
                    {{ t('network.alerts.instruction_1') }}
                </li>
                <li class="flex items-start">
                    <span class="mr-2 text-primary-500">\u2022</span>
                    {{ t('network.alerts.instruction_2') }}
                </li>
                <li class="flex items-start">
                    <span class="mr-2 text-primary-500">\u2022</span>
                    {{ t('network.alerts.instruction_3') }}
                </li>
            </ul>
        </div>

        <!-- Emails Input -->
        <div class="flex flex-col">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{
                t('network.alerts.emails_label')
            }}</label>
            <mat-form-field class="w-full" appearance="outline" subscriptSizing="dynamic">
                <mat-chip-grid #chipGrid aria-label="Enter emails">
                    <mat-chip-row
                        *ngFor="let email of emails"
                        (removed)="remove(email)"
                        [editable]="false"
                    >
                        {{ email }}
                        <button matChipRemove aria-label="'remove ' + email">
                            <mat-icon>cancel</mat-icon>
                        </button>
                    </mat-chip-row>
                    <input
                        [placeholder]="t('network.alerts.placeholder')"
                        [matChipInputFor]="chipGrid"
                        [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                        [matChipInputAddOnBlur]="true"
                        (matChipInputTokenEnd)="add($event)"
                    />
                </mat-chip-grid>
            </mat-form-field>
            <p class="text-xs text-gray-400 mt-2">{{ t('network.alerts.hint') }}</p>
        </div>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row items-center gap-3 mt-10">
            <button
                *ngIf="currentSubscription"
                class="w-full sm:w-auto"
                mat-stroked-button
                color="warn"
                (click)="delete()"
                [disabled]="loading"
            >
                <mat-icon class="icon-size-5 mr-2">delete</mat-icon>
                {{ t('network.alerts.remove') }}
            </button>
            <div class="flex-auto"></div>
            <button
                class="w-full sm:w-auto px-8 py-2.5 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors disabled:opacity-50"
                mat-flat-button
                (click)="save()"
                [disabled]="loading"
            >
                <mat-spinner *ngIf="loading" diameter="20" class="mr-2"></mat-spinner>
                {{
                    currentSubscription
                        ? t('network.alerts.save_changes')
                        : t('network.alerts.enable')
                }}
            </button>
        </div>
    </div>
</div>
`, styles: ["/* src/app/modules/status-check/subscribe/subscribe.component.scss */\nstatus-check-subscribe {\n  display: block;\n  background: white;\n}\n.dark status-check-subscribe {\n  background: #111827;\n}\nstatus-check-subscribe .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\nstatus-check-subscribe .mat-mdc-chip-grid {\n  min-height: 48px;\n}\nstatus-check-subscribe .mat-mdc-standard-chip {\n  --mdc-chip-elevated-container-color: #f3f4f6;\n  --mdc-chip-label-text-color: #374151;\n  border-radius: 8px !important;\n}\n.dark status-check-subscribe .mat-mdc-standard-chip {\n  --mdc-chip-elevated-container-color: #374151;\n  --mdc-chip-label-text-color: #f3f4f6;\n}\n/*# sourceMappingURL=subscribe.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }, { type: TranslocoService }, { type: MatSnackBar }, { type: StatusCheckService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscribeComponent, { className: "SubscribeComponent", filePath: "src/app/modules/status-check/subscribe/subscribe.component.ts", lineNumber: 35 });
})();
export {
  SubscribeComponent
};
//# sourceMappingURL=chunk-6M3JZXDS.js.map
