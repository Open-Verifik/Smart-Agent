import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-P7M6LMVE.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-AICPTZP5.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel
} from "./chunk-HWNQWMK7.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-M5KDIZH5.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-batch/report-builder/send-sample-modal/send-sample-modal.component.ts
var _c0 = (a0) => ({ index: a0 });
var _c1 = (a0) => ({ count: a0 });
function SendSampleModalComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartReport.atLeastOneRecipient"));
  }
}
function SendSampleModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartReport.enterValidEmails"));
  }
}
function SendSampleModalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-radio-group", 19)(5, "mat-radio-button", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-radio-button", 21);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "smartReport.emailScopeHint"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, "smartReport.emailScopeCurrent", \u0275\u0275pureFunction1(11, _c0, ctx_r0.currentRecordNumber)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 8, "smartReport.emailScopeAll", \u0275\u0275pureFunction1(13, _c1, ctx_r0.batchRowCount)), " ");
  }
}
var EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function emailsValidator(control) {
  const value = (control.value || "").trim();
  if (!value)
    return { required: true };
  const emails = value.split(",").map((v) => v.trim()).filter((v) => !!v);
  if (emails.length === 0)
    return { required: true };
  const invalid = emails.filter((e) => !EMAIL_REGEX.test(e));
  if (invalid.length > 0)
    return { invalidEmails: { value: invalid } };
  return null;
}
var SendSampleModalComponent = class _SendSampleModalComponent {
  get isSample() {
    return this._data?.isSample !== false;
  }
  get subjectPlaceholder() {
    return this.isSample ? this._transloco.translate("smartReport.subjectOptionalPlaceholder") : this._transloco.translate("smartReport.reportBatchPlaceholder");
  }
  get allowSendAll() {
    return this._data?.allowSendAll === true;
  }
  get currentRecordNumber() {
    return this._data?.currentRecordNumber ?? 1;
  }
  get batchRowCount() {
    return this._data?.batchRowCount ?? 1;
  }
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this._fb = inject(FormBuilder);
    this._data = inject(MAT_DIALOG_DATA, { optional: true });
    this._transloco = inject(TranslocoService);
    const defaultSubject = this._data?.defaultSubject || (this._data?.isSample === false ? this._transloco.translate("smartReport.reportBatchPlaceholder") : this._transloco.translate("smartReport.subjectOptionalPlaceholder"));
    this.form = this._fb.group({
      recipients: ["", [emailsValidator]],
      subject: [defaultSubject, []],
      emailScope: ["current"]
    });
  }
  onCancel() {
    this._dialogRef.close();
  }
  onSubmit() {
    const recipientsControl = this.form.get("recipients");
    if (this.form.invalid || !recipientsControl)
      return;
    const recipientsRaw = (recipientsControl.value || "").split(",").map((v) => v.trim()).filter((v) => !!v);
    const validRecipients = recipientsRaw.filter((e) => EMAIL_REGEX.test(e));
    if (validRecipients.length === 0) {
      recipientsControl.setErrors(recipientsRaw.length === 0 ? { required: true } : { invalidEmails: { value: recipientsRaw } });
      recipientsControl.markAsTouched();
      return;
    }
    const result = {
      recipients: validRecipients,
      subject: this.form.get("subject")?.value?.trim() || void 0,
      sendAll: this.allowSendAll && this.form.get("emailScope")?.value === "all"
    };
    this._dialogRef.close(result);
  }
  static {
    this.\u0275fac = function SendSampleModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SendSampleModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SendSampleModalComponent, selectors: [["send-sample-modal"]], decls: 44, vars: 30, consts: [[1, "flex", "flex-col", "w-full", "max-w-lg"], [1, "px-6", "pt-6", "pb-4"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3"], [1, "w-12", "h-12", "rounded-xl", "bg-gradient-to-br", "from-indigo-500", "to-purple-600", "flex", "items-center", "justify-center", "shadow-lg", "shadow-indigo-500/25"], [1, "!w-6", "!h-6", "text-white", "icon-size-6"], [1, "text-lg", "font-bold", "text-slate-900", "dark:text-white"], [1, "text-sm", "text-slate-500", "dark:text-slate-400"], ["mat-icon-button", "", 1, "!-mr-2", 3, "click"], [1, "px-6", "pb-6", "space-y-4", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "recipients", "rows", "3", 3, "placeholder"], ["matInput", "", "formControlName", "subject", 3, "placeholder"], [1, "rounded-xl", "border", "border-slate-200", "p-3", "dark:border-slate-700"], [1, "flex", "gap-3", "pt-2", "justify-end", "border-t", "border-slate-200", "dark:border-slate-700"], ["mat-button", "", "type", "button", 1, "!text-slate-600", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "!rounded-xl", "!bg-indigo-600", "!text-white", 3, "disabled"], [1, "!w-4", "!h-4", "mr-1"], [1, "mb-3", "text-sm", "text-slate-600", "dark:text-slate-400"], ["formControlName", "emailScope", 1, "flex", "flex-col", "gap-2"], ["value", "current"], ["value", "all"]], template: function SendSampleModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-icon", 5);
        \u0275\u0275text(6, "send");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div")(8, "h2", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "button", 8);
        \u0275\u0275listener("click", function SendSampleModalComponent_Template_button_click_14_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275elementStart(15, "mat-icon");
        \u0275\u0275text(16, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "form", 9);
        \u0275\u0275listener("ngSubmit", function SendSampleModalComponent_Template_form_ngSubmit_17_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(18, "mat-form-field", 10)(19, "mat-label");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "textarea", 11);
        \u0275\u0275pipe(23, "transloco");
        \u0275\u0275elementStart(24, "mat-hint");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, SendSampleModalComponent_Conditional_27_Template, 3, 3, "mat-error")(28, SendSampleModalComponent_Conditional_28_Template, 3, 3, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "mat-form-field", 10)(30, "mat-label");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(33, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, SendSampleModalComponent_Conditional_34_Template, 11, 15, "div", 13);
        \u0275\u0275elementStart(35, "div", 14)(36, "button", 15);
        \u0275\u0275listener("click", function SendSampleModalComponent_Template_button_click_36_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 16)(40, "mat-icon", 17);
        \u0275\u0275text(41, "send");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "transloco");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_6_0;
        let tmp_7_0;
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 14, ctx.isSample ? "smartReport.sendSampleReport" : "smartReport.sendReport"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 16, "smartReport.enterRecipientsAndSubject"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "smartReport.recipientEmails"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 20, "smartReport.recipientsPlaceholder"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 22, "smartReport.separateEmailsWithCommas"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_6_0 = ctx.form.get("recipients")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.form.get("recipients")) == null ? null : tmp_6_0.touched) ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_7_0 = ctx.form.get("recipients")) == null ? null : tmp_7_0.hasError("invalidEmails")) && ((tmp_7_0 = ctx.form.get("recipients")) == null ? null : tmp_7_0.touched) ? 28 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 24, "smartReport.subjectOptional"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", ctx.subjectPlaceholder);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allowSendAll ? 34 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 26, "smartReport.cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.form.pending);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 28, ctx.isSample ? "smartReport.sendSample" : "smartReport.sendReport"), " ");
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatDialogModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatHint,
      MatError,
      MatInputModule,
      MatInput,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      TranslocoModule,
      TranslocoPipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=send-sample-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SendSampleModalComponent, [{
    type: Component,
    args: [{ selector: "send-sample-modal", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule,
      TranslocoModule
    ], template: `
        <div class="flex flex-col w-full max-w-lg">
            <!-- Header -->
            <div class="px-6 pt-6 pb-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25"
                        >
                            <mat-icon class="!w-6 !h-6 text-white icon-size-6">send</mat-icon>
                        </div>
                        <div>
                            <h2 class="text-lg font-bold text-slate-900 dark:text-white">
                                {{ (isSample ? 'smartReport.sendSampleReport' : 'smartReport.sendReport') | transloco }}
                            </h2>
                            <p class="text-sm text-slate-500 dark:text-slate-400">
                                {{ 'smartReport.enterRecipientsAndSubject' | transloco }}
                            </p>
                        </div>
                    </div>
                    <button mat-icon-button (click)="onCancel()" class="!-mr-2">
                        <mat-icon>close</mat-icon>
                    </button>
                </div>
            </div>

            <!-- Form -->
            <form [formGroup]="form" (ngSubmit)="onSubmit()" class="px-6 pb-6 space-y-4">
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{ 'smartReport.recipientEmails' | transloco }}</mat-label>
                    <textarea
                        matInput
                        formControlName="recipients"
                        [placeholder]="'smartReport.recipientsPlaceholder' | transloco"
                        rows="3"
                    ></textarea>
                    <mat-hint>{{ 'smartReport.separateEmailsWithCommas' | transloco }}</mat-hint>
                    @if (form.get('recipients')?.hasError('required') && form.get('recipients')?.touched) {
                        <mat-error>{{ 'smartReport.atLeastOneRecipient' | transloco }}</mat-error>
                    }
                    @if (form.get('recipients')?.hasError('invalidEmails') && form.get('recipients')?.touched) {
                        <mat-error>{{ 'smartReport.enterValidEmails' | transloco }}</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{ 'smartReport.subjectOptional' | transloco }}</mat-label>
                    <input matInput formControlName="subject" [placeholder]="subjectPlaceholder" />
                </mat-form-field>

                @if (allowSendAll) {
                    <div class="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                        <p class="mb-3 text-sm text-slate-600 dark:text-slate-400">
                            {{ 'smartReport.emailScopeHint' | transloco }}
                        </p>
                        <mat-radio-group formControlName="emailScope" class="flex flex-col gap-2">
                            <mat-radio-button value="current">
                                {{
                                    'smartReport.emailScopeCurrent'
                                        | transloco: { index: currentRecordNumber }
                                }}
                            </mat-radio-button>
                            <mat-radio-button value="all">
                                {{
                                    'smartReport.emailScopeAll'
                                        | transloco: { count: batchRowCount }
                                }}
                            </mat-radio-button>
                        </mat-radio-group>
                    </div>
                }

                <div class="flex gap-3 pt-2 justify-end border-t border-slate-200 dark:border-slate-700">
                    <button mat-button type="button" (click)="onCancel()" class="!text-slate-600">
                        {{ 'smartReport.cancel' | transloco }}
                    </button>
                    <button
                        mat-flat-button
                        color="primary"
                        type="submit"
                        [disabled]="form.invalid || form.pending"
                        class="!rounded-xl !bg-indigo-600 !text-white"
                    >
                        <mat-icon class="!w-4 !h-4 mr-1">send</mat-icon>
                        {{ (isSample ? 'smartReport.sendSample' : 'smartReport.sendReport') | transloco }}
                    </button>
                </div>
            </form>
        </div>
    `, styles: ["/* angular:styles/component:scss;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/smart-batch/report-builder/send-sample-modal/send-sample-modal.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=send-sample-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SendSampleModalComponent, { className: "SendSampleModalComponent", filePath: "src/app/modules/smart-batch/report-builder/send-sample-modal/send-sample-modal.component.ts", lineNumber: 154 });
})();

export {
  SendSampleModalComponent
};
//# sourceMappingURL=chunk-6BPL7VRE.js.map
