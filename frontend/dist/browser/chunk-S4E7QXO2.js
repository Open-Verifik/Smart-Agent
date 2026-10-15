import {
  DemoCreditsUsageComponent
} from "./chunk-IQYQUAUX.js";
import {
  formatDisplayValue,
  isPlainObject,
  truncateMiddle
} from "./chunk-Q7ZENBRV.js";
import {
  DemoResultActionsComponent
} from "./chunk-I4NQXRI6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VENEX45A.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  JsonPipe,
  NgClass,
  Output,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-I5BUD46C.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/shared/human-id-json-key-value-field.component.ts
var _c0 = (a0, a1) => ({ "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20": a0, "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent": a1 });
var _forTrack0 = ($index, $item) => $item.id;
function HumanIdJsonKeyValueFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartEnrollDemos.common.requiredStar"));
  }
}
function HumanIdJsonKeyValueFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.hint);
  }
}
function HumanIdJsonKeyValueFieldComponent_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.jsonError);
  }
}
function HumanIdJsonKeyValueFieldComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 8)(2, "button", 9);
    \u0275\u0275listener("click", function HumanIdJsonKeyValueFieldComponent_Conditional_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyJson());
    });
    \u0275\u0275text(3, " Format & validate ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5, "Values are stored as strings for the API.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "textarea", 11);
    \u0275\u0275twoWayListener("ngModelChange", function HumanIdJsonKeyValueFieldComponent_Conditional_11_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.jsonDraft, $event) || (ctx_r0.jsonDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function HumanIdJsonKeyValueFieldComponent_Conditional_11_Template_textarea_blur_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyJson());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, HumanIdJsonKeyValueFieldComponent_Conditional_11_Conditional_7_Template, 2, 1, "p", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.jsonDraft);
    \u0275\u0275attribute("aria-invalid", !!ctx_r0.jsonError);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.jsonError ? 7 : -1);
  }
}
function HumanIdJsonKeyValueFieldComponent_Conditional_12_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "input", 18);
    \u0275\u0275listener("input", function HumanIdJsonKeyValueFieldComponent_Conditional_12_For_9_Template_input_input_1_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRowChange(row_r5.id, "key", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 19);
    \u0275\u0275listener("input", function HumanIdJsonKeyValueFieldComponent_Conditional_12_For_9_Template_input_input_2_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRowChange(row_r5.id, "value", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function HumanIdJsonKeyValueFieldComponent_Conditional_12_For_9_Template_button_click_3_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeRow(row_r5.id));
    });
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", row_r5.key);
    \u0275\u0275advance();
    \u0275\u0275property("value", row_r5.value);
  }
}
function HumanIdJsonKeyValueFieldComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 13)(2, "span");
    \u0275\u0275text(3, "Key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7, "Remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(8, HumanIdJsonKeyValueFieldComponent_Conditional_12_For_9_Template, 6, 2, "div", 15, _forTrack0);
    \u0275\u0275elementStart(10, "button", 16);
    \u0275\u0275listener("click", function HumanIdJsonKeyValueFieldComponent_Conditional_12_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addRow());
    });
    \u0275\u0275elementStart(11, "span", 17);
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Add field ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.rows);
  }
}
var newRow = () => ({
  id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
  key: "",
  value: ""
});
var recordToRows = (rec) => {
  const entries = Object.entries(rec);
  if (entries.length === 0)
    return [newRow()];
  return entries.map(([key, value]) => ({
    id: crypto.randomUUID?.() ?? `${key}-${Math.random()}`,
    key,
    value
  }));
};
var rowsToRecord = (rows) => {
  const out = {};
  for (const r of rows) {
    const k = r.key.trim();
    if (!k)
      continue;
    out[k] = r.value;
  }
  return out;
};
var parseStringRecord = (text) => {
  try {
    const parsed = JSON.parse(text);
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
      return { ok: false, error: "Must be a JSON object (not an array)." };
    }
    const out = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (typeof v === "string")
        out[k] = v;
      else if (v === null || v === void 0)
        out[k] = "";
      else if (typeof v === "object")
        out[k] = JSON.stringify(v);
      else
        out[k] = String(v);
    }
    return { ok: true, data: out };
  } catch {
    return { ok: false, error: "Invalid JSON." };
  }
};
var prettyStringify = (rec) => JSON.stringify(rec, null, 2);
var HumanIdJsonKeyValueFieldComponent = class _HumanIdJsonKeyValueFieldComponent {
  constructor() {
    this.label = "";
    this.required = false;
    this.hint = "";
    this.value = {};
    this.valueChange = new EventEmitter();
    this.mode = "rows";
    this.jsonDraft = "";
    this.rows = [];
    this.jsonError = null;
    this._cdr = inject(ChangeDetectorRef);
    this._lastSerialized = "";
  }
  ngOnChanges() {
    const s = JSON.stringify(this.value);
    if (s === this._lastSerialized)
      return;
    this._lastSerialized = s;
    this.jsonDraft = prettyStringify(this.value);
    this.rows = recordToRows(this.value);
    this.jsonError = null;
  }
  /** Call before submit so JSON mode drafts are parsed and synced. */
  commitJsonIfNeeded() {
    if (this.mode === "rows") {
      const rec = rowsToRecord(this.rows);
      this._lastSerialized = JSON.stringify(rec);
      this.valueChange.emit(rec);
      return rec;
    }
    const result = parseStringRecord(this.jsonDraft);
    if (!result.ok) {
      this.jsonError = result.error;
      this._cdr.markForCheck();
      return null;
    }
    this.jsonError = null;
    this._lastSerialized = JSON.stringify(result.data);
    this.valueChange.emit(result.data);
    this.jsonDraft = prettyStringify(result.data);
    this._cdr.markForCheck();
    return result.data;
  }
  switchToRows() {
    if (this.mode === "rows")
      return;
    const result = parseStringRecord(this.jsonDraft);
    if (!result.ok) {
      this.jsonError = result.error;
      this._cdr.markForCheck();
      return;
    }
    this.jsonError = null;
    this._lastSerialized = JSON.stringify(result.data);
    this.valueChange.emit(result.data);
    this.rows = recordToRows(result.data);
    this.mode = "rows";
    this._cdr.markForCheck();
  }
  switchToJson() {
    if (this.mode === "json")
      return;
    const rec = rowsToRecord(this.rows);
    this.valueChange.emit(rec);
    this._lastSerialized = JSON.stringify(rec);
    this.jsonDraft = prettyStringify(rec);
    this.jsonError = null;
    this.mode = "json";
    this._cdr.markForCheck();
  }
  applyJson() {
    const result = parseStringRecord(this.jsonDraft);
    if (!result.ok) {
      this.jsonError = result.error;
    } else {
      this.jsonError = null;
      this._lastSerialized = JSON.stringify(result.data);
      this.valueChange.emit(result.data);
      this.jsonDraft = prettyStringify(result.data);
    }
    this._cdr.markForCheck();
  }
  onRowChange(id, field, next) {
    this.rows = this.rows.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { [field]: next }) : r);
    const rec = rowsToRecord(this.rows);
    this._lastSerialized = JSON.stringify(rec);
    this.valueChange.emit(rec);
  }
  addRow() {
    this.rows = [...this.rows, newRow()];
  }
  removeRow(id) {
    const nextRows = this.rows.filter((r) => r.id !== id);
    this.rows = nextRows.length ? nextRows : [newRow()];
    const rec = rowsToRecord(this.rows);
    this._lastSerialized = JSON.stringify(rec);
    this.valueChange.emit(rec);
  }
  static {
    this.\u0275fac = function HumanIdJsonKeyValueFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanIdJsonKeyValueFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanIdJsonKeyValueFieldComponent, selectors: [["app-human-id-json-key-value-field"]], inputs: { label: "label", required: "required", hint: "hint", value: "value" }, outputs: { valueChange: "valueChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 13, vars: 13, consts: [[1, "space-y-2"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2"], [1, "block", "text-sm", "font-semibold", "text-on-surface"], [1, "text-error"], ["role", "group", 1, "inline-flex", "rounded-xl", "p-1", "bg-slate-100/80", "dark:bg-slate-900/80", "border", "border-slate-200/60", "dark:border-slate-800/60", "gap-1.5"], ["type", "button", 1, "px-3", "py-1.5", "text-xs", "font-semibold", "rounded-lg", "transition-all", "duration-150", 3, "click", "ngClass"], [1, "text-xs", "text-on-surface-variant"], [1, "space-y-2", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/40", "p-3"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["type", "button", 1, "text-xs", "font-semibold", "text-primary", "underline", "underline-offset-2", 3, "click"], [1, "text-[0.65rem]", "text-on-surface-variant"], ["spellcheck", "false", "rows", "12", 1, "w-full", "min-h-[12rem]", "rounded-lg", "border", "border-outline-variant/30", "bg-surface-container-low", "px-4", "py-3", "font-mono", "text-[0.8rem]", "leading-relaxed", "text-on-surface", "shadow-inner", "focus:border-primary/60", "focus:outline-none", 3, "ngModelChange", "blur", "ngModel"], [1, "text-xs", "text-error"], [1, "grid", "grid-cols-[1fr_1fr_auto]", "gap-2", "text-[0.65rem]", "font-semibold", "uppercase", "tracking-wide", "text-on-surface-variant"], [1, "sr-only"], [1, "grid", "grid-cols-[1fr_1fr_auto]", "gap-2", "items-center"], ["type", "button", 1, "mt-1", "flex", "items-center", "gap-1", "text-xs", "font-semibold", "text-primary", "hover:underline", 3, "click"], [1, "material-symbols-outlined", "text-base"], ["type", "text", "placeholder", "fieldName", 1, "rounded-lg", "border", "border-outline-variant/30", "bg-surface-container-low", "px-3", "py-2", "text-sm", "text-on-surface", "placeholder:text-on-surface-variant/50", "focus:border-primary/60", "focus:outline-none", 3, "input", "value"], ["type", "text", "placeholder", "value", 1, "rounded-lg", "border", "border-outline-variant/30", "bg-surface-container-low", "px-3", "py-2", "text-sm", "text-on-surface", "placeholder:text-on-surface-variant/50", "focus:border-primary/60", "focus:outline-none", 3, "input", "value"], ["type", "button", "aria-label", "Remove row", 1, "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-lg", "text-on-surface-variant", "hover:bg-error-container/20", "hover:text-error", 3, "click"], [1, "material-symbols-outlined", "text-lg"]], template: function HumanIdJsonKeyValueFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "label", 2);
        \u0275\u0275text(3);
        \u0275\u0275template(4, HumanIdJsonKeyValueFieldComponent_Conditional_4_Template, 3, 3, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
        \u0275\u0275listener("click", function HumanIdJsonKeyValueFieldComponent_Template_button_click_6_listener() {
          return ctx.switchToRows();
        });
        \u0275\u0275text(7, " Key / value ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 5);
        \u0275\u0275listener("click", function HumanIdJsonKeyValueFieldComponent_Template_button_click_8_listener() {
          return ctx.switchToJson();
        });
        \u0275\u0275text(9, " JSON ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(10, HumanIdJsonKeyValueFieldComponent_Conditional_10_Template, 2, 1, "p", 6)(11, HumanIdJsonKeyValueFieldComponent_Conditional_11_Template, 8, 3, "div", 0)(12, HumanIdJsonKeyValueFieldComponent_Conditional_12_Template, 14, 0, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.label, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.required ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", ctx.label + " input mode");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c0, ctx.mode === "rows", ctx.mode !== "rows"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c0, ctx.mode === "json", ctx.mode !== "json"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.hint ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode === "json" ? 11 : 12);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslocoModule, TranslocoPipe, NgClass], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanIdJsonKeyValueFieldComponent, [{
    type: Component,
    args: [{ selector: "app-human-id-json-key-value-field", standalone: true, imports: [FormsModule, TranslocoModule, NgClass], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-2">\r
    <div class="flex flex-wrap items-center justify-between gap-2">\r
        <label class="block text-sm font-semibold text-on-surface">\r
            {{ label }}\r
            @if (required) {\r
                <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
            }\r
        </label>\r
        <div\r
            class="inline-flex rounded-xl p-1 bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 gap-1.5"\r
            role="group"\r
            [attr.aria-label]="label + ' input mode'"\r
        >\r
            <button\r
                type="button"\r
                (click)="switchToRows()"\r
                class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150"\r
                [ngClass]="{\r
                    'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20': mode === 'rows',\r
                    'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent': mode !== 'rows'\r
                }"\r
            >\r
                Key / value\r
            </button>\r
            <button\r
                type="button"\r
                (click)="switchToJson()"\r
                class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150"\r
                [ngClass]="{\r
                    'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm border border-slate-200/20': mode === 'json',\r
                    'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-transparent': mode !== 'json'\r
                }"\r
            >\r
                JSON\r
            </button>\r
        </div>\r
    </div>\r
    @if (hint) {\r
        <p class="text-xs text-on-surface-variant">{{ hint }}</p>\r
    }\r
\r
    @if (mode === 'json') {\r
        <div class="space-y-2">\r
            <div class="flex flex-wrap items-center gap-2">\r
                <button\r
                    type="button"\r
                    (click)="applyJson()"\r
                    class="text-xs font-semibold text-primary underline underline-offset-2"\r
                >\r
                    Format & validate\r
                </button>\r
                <span class="text-[0.65rem] text-on-surface-variant">Values are stored as strings for the API.</span>\r
            </div>\r
            <textarea\r
                [(ngModel)]="jsonDraft"\r
                (blur)="applyJson()"\r
                spellcheck="false"\r
                rows="12"\r
                class="w-full min-h-[12rem] rounded-lg border border-outline-variant/30 bg-surface-container-low px-4 py-3 font-mono text-[0.8rem] leading-relaxed text-on-surface shadow-inner focus:border-primary/60 focus:outline-none"\r
                [attr.aria-invalid]="!!jsonError"\r
            ></textarea>\r
            @if (jsonError) {\r
                <p class="text-xs text-error">{{ jsonError }}</p>\r
            }\r
        </div>\r
    } @else {\r
        <div class="space-y-2 rounded-xl border border-outline-variant/20 bg-surface-container-low/40 p-3">\r
            <div class="grid grid-cols-[1fr_1fr_auto] gap-2 text-[0.65rem] font-semibold uppercase tracking-wide text-on-surface-variant">\r
                <span>Key</span>\r
                <span>Value</span>\r
                <span class="sr-only">Remove</span>\r
            </div>\r
            @for (row of rows; track row.id) {\r
                <div class="grid grid-cols-[1fr_1fr_auto] gap-2 items-center">\r
                    <input\r
                        type="text"\r
                        [value]="row.key"\r
                        (input)="onRowChange(row.id, 'key', $any($event.target).value)"\r
                        placeholder="fieldName"\r
                        class="rounded-lg border border-outline-variant/30 bg-surface-container-low px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary/60 focus:outline-none"\r
                    />\r
                    <input\r
                        type="text"\r
                        [value]="row.value"\r
                        (input)="onRowChange(row.id, 'value', $any($event.target).value)"\r
                        placeholder="value"\r
                        class="rounded-lg border border-outline-variant/30 bg-surface-container-low px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary/60 focus:outline-none"\r
                    />\r
                    <button\r
                        type="button"\r
                        (click)="removeRow(row.id)"\r
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-on-surface-variant hover:bg-error-container/20 hover:text-error"\r
                        aria-label="Remove row"\r
                    >\r
                        <span class="material-symbols-outlined text-lg">close</span>\r
                    </button>\r
                </div>\r
            }\r
            <button\r
                type="button"\r
                (click)="addRow()"\r
                class="mt-1 flex items-center gap-1 text-xs font-semibold text-primary hover:underline"\r
            >\r
                <span class="material-symbols-outlined text-base">add</span>\r
                Add field\r
            </button>\r
        </div>\r
    }\r
</div>\r
` }]
  }], null, { label: [{
    type: Input,
    args: [{ required: true }]
  }], required: [{
    type: Input
  }], hint: [{
    type: Input
  }], value: [{
    type: Input
  }], valueChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanIdJsonKeyValueFieldComponent, { className: "HumanIdJsonKeyValueFieldComponent", filePath: "src/app/modules/smart-enroll/demos/shared/human-id-json-key-value-field.component.ts", lineNumber: 74 });
})();

// src/app/modules/smart-enroll/demos/shared/human-id-liveness-toggle.component.ts
var _c02 = (a0) => ({ "translate-x-0.5": a0 });
function HumanIdLivenessToggleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("human-id-liveness-toggle__stage--encrypt", ctx_r0.stage === "encrypt")("human-id-liveness-toggle__stage--decrypt", ctx_r0.stage === "decrypt");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.stageLabel, " ");
  }
}
function HumanIdLivenessToggleComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.recommendedLabel, " ");
  }
}
var HumanIdLivenessToggleComponent = class _HumanIdLivenessToggleComponent {
  constructor() {
    this.title = "";
    this.hint = "";
    this.stageLabel = "";
    this.enabled = false;
    this.showRecommended = false;
    this.recommendedLabel = "Recommended";
    this.onLabel = "On";
    this.offLabel = "Off";
    this.enabledChange = new EventEmitter();
  }
  toggle() {
    this.enabledChange.emit(!this.enabled);
  }
  static {
    this.\u0275fac = function HumanIdLivenessToggleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanIdLivenessToggleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanIdLivenessToggleComponent, selectors: [["app-human-id-liveness-toggle"]], inputs: { stage: "stage", title: "title", hint: "hint", stageLabel: "stageLabel", enabled: "enabled", showRecommended: "showRecommended", recommendedLabel: "recommendedLabel", onLabel: "onLabel", offLabel: "offLabel" }, outputs: { enabledChange: "enabledChange" }, decls: 16, vars: 18, consts: [["type", "button", "role", "switch", 1, "human-id-liveness-toggle", "w-full", "rounded-xl", "border", "px-4", "py-4", "text-left", "flex", "items-start", "gap-4", "transition-colors", 3, "click"], ["aria-hidden", "true", 1, "mt-0.5", "flex", "h-9", "w-9", "shrink-0", "items-center", "justify-center", "rounded-lg", "human-id-liveness-toggle__icon"], [1, "material-symbols-outlined", "text-xl"], [1, "flex-1", "min-w-0"], [1, "flex", "flex-wrap", "items-center", "gap-2", "mb-1"], [1, "human-id-liveness-toggle__stage", 3, "human-id-liveness-toggle__stage--encrypt", "human-id-liveness-toggle__stage--decrypt"], [1, "text-sm", "font-semibold", "text-on-surface"], [1, "rounded-full", "bg-primary/15", "px-2", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "text-primary"], [1, "block", "text-xs", "text-on-surface-variant", "leading-relaxed"], ["aria-hidden", "true", 1, "relative", "mt-1", "inline-flex", "h-6", "w-11", "shrink-0", "items-center", "rounded-full", "transition-colors", "human-id-liveness-toggle__track"], [1, "inline-block", "h-5", "w-5", "transform", "rounded-full", "bg-white", "shadow", "transition-transform", 3, "ngClass"], [1, "sr-only"], [1, "human-id-liveness-toggle__stage"]], template: function HumanIdLivenessToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function HumanIdLivenessToggleComponent_Template_button_click_0_listener() {
          return ctx.toggle();
        });
        \u0275\u0275elementStart(1, "span", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "span", 3)(5, "span", 4);
        \u0275\u0275template(6, HumanIdLivenessToggleComponent_Conditional_6_Template, 2, 5, "span", 5);
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, HumanIdLivenessToggleComponent_Conditional_9_Template, 2, 1, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275element(13, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 11);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("human-id-liveness-toggle--on", ctx.enabled);
        \u0275\u0275attribute("aria-checked", ctx.enabled);
        \u0275\u0275advance();
        \u0275\u0275classProp("human-id-liveness-toggle__icon--on", ctx.enabled);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.enabled ? "shield_person" : "shield");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.stageLabel ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRecommended ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.hint);
        \u0275\u0275advance();
        \u0275\u0275classProp("human-id-liveness-toggle__track--on", ctx.enabled);
        \u0275\u0275advance();
        \u0275\u0275classProp("translate-x-5", ctx.enabled);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c02, !ctx.enabled));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.enabled ? ctx.onLabel : ctx.offLabel);
      }
    }, dependencies: [NgClass], styles: ['@charset "UTF-8";\n\n\n\n.smart-enroll-demos[_ngcontent-%COMP%] {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .glass-panel-dark[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scan-line[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: _ngcontent-%COMP%_demoScanAnim 3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tl[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tr[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-bl[_ngcontent-%COMP%], \n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-br[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tl[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-tr[_ngcontent-%COMP%] {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-bl[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanner-corner-br[_ngcontent-%COMP%] {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .blueprint-grid[_ngcontent-%COMP%] {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-primary-cta[_ngcontent-%COMP%] {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary.demo-btn-inline[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary.demo-btn-inline[_ngcontent-%COMP%] {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-primary[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-ring-frost[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .shadow-ambient[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-frost[_ngcontent-%COMP%] {\n  border-color: var(--frost);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .scanning-ring[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-low[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-high[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-surface-container-lowest[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-error-container\\/20[_ngcontent-%COMP%] {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-surface[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-surface-variant[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-on-primary-container[_ngcontent-%COMP%] {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%] {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/20[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/30[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/15[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-outline-variant\\/10[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-error\\/20[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .border-error[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .placeholder-on-surface-variant\\/50[_ngcontent-%COMP%]::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .hover\\:bg-surface-container[_ngcontent-%COMP%]:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .focus\\:border-primary\\/60[_ngcontent-%COMP%]:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .hover\\:border-primary\\/40[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .ring-primary-20[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .bg-primary-10[_ngcontent-%COMP%] {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .selected-liveness[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle[_ngcontent-%COMP%]:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle--on[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__icon[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__icon--on[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--encrypt[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--decrypt[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__track[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__track--on[_ngcontent-%COMP%] {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-callout[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .selected-tolerance[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos[_ngcontent-%COMP%]   .demo-range-input[_ngcontent-%COMP%] {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%] {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .glass-panel-dark[_ngcontent-%COMP%] {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%] {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .demo-btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   .human-id-liveness-toggle__stage--encrypt[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  color-scheme: dark;\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%], \n.human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover, \n.human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark[_ngcontent-%COMP%]   .smart-enroll-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover, \n.dark[_ngcontent-%COMP%]   .human-authn-demos-hub[_ngcontent-%COMP%]   .demo-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=_demos-theme.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanIdLivenessToggleComponent, [{
    type: Component,
    args: [{ selector: "app-human-id-liveness-toggle", standalone: true, imports: [NgClass], changeDetection: ChangeDetectionStrategy.OnPush, template: `<button\r
    type="button"\r
    role="switch"\r
    [attr.aria-checked]="enabled"\r
    (click)="toggle()"\r
    class="human-id-liveness-toggle w-full rounded-xl border px-4 py-4 text-left flex items-start gap-4 transition-colors"\r
    [class.human-id-liveness-toggle--on]="enabled"\r
>\r
    <span\r
        class="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg human-id-liveness-toggle__icon"\r
        [class.human-id-liveness-toggle__icon--on]="enabled"\r
        aria-hidden="true"\r
    >\r
        <span class="material-symbols-outlined text-xl">{{ enabled ? 'shield_person' : 'shield' }}</span>\r
    </span>\r
\r
    <span class="flex-1 min-w-0">\r
        <span class="flex flex-wrap items-center gap-2 mb-1">\r
            @if (stageLabel) {\r
                <span class="human-id-liveness-toggle__stage" [class.human-id-liveness-toggle__stage--encrypt]="stage === 'encrypt'" [class.human-id-liveness-toggle__stage--decrypt]="stage === 'decrypt'">\r
                    {{ stageLabel }}\r
                </span>\r
            }\r
            <span class="text-sm font-semibold text-on-surface">{{ title }}</span>\r
            @if (showRecommended) {\r
                <span class="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">\r
                    {{ recommendedLabel }}\r
                </span>\r
            }\r
        </span>\r
        <span class="block text-xs text-on-surface-variant leading-relaxed">{{ hint }}</span>\r
    </span>\r
\r
    <span\r
        class="relative mt-1 inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors human-id-liveness-toggle__track"\r
        [class.human-id-liveness-toggle__track--on]="enabled"\r
        aria-hidden="true"\r
    >\r
        <span\r
            class="inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform"\r
            [class.translate-x-5]="enabled"\r
            [ngClass]="{ 'translate-x-0.5': !enabled }"\r
        ></span>\r
    </span>\r
    <span class="sr-only">{{ enabled ? onLabel : offLabel }}</span>\r
</button>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/demos/styles/_demos-theme.scss */\n.smart-enroll-demos {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos .material-symbols-outlined {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos .glass-panel-dark {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos .scan-line {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: demoScanAnim 3s linear infinite;\n}\n@keyframes demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos .scanner-corner-tl,\n.smart-enroll-demos .scanner-corner-tr,\n.smart-enroll-demos .scanner-corner-bl,\n.smart-enroll-demos .scanner-corner-br {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos .scanner-corner-tl {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-tr {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-bl {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-br {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .blueprint-grid {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos .bg-primary-cta {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos .demo-btn-primary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos .demo-btn-primary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-primary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-primary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .demo-btn-secondary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos .demo-btn-secondary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-secondary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-secondary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .shadow-primary {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos .shadow-ring-frost {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos .shadow-ambient {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos .border-frost {\n  border-color: var(--frost);\n}\n.smart-enroll-demos .scanning-ring {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos .bg-surface {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos .bg-surface-container {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .bg-surface-container-low {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .bg-surface-container-high {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .bg-surface-container-lowest {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos .bg-error-container\\/20 {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos .text-on-surface {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos .text-on-surface-variant {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .text-on-primary-container {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos .text-primary {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .text-error {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos .border-outline-variant\\/20 {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos .border-outline-variant\\/30 {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos .border-outline-variant\\/15 {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos .border-outline-variant\\/10 {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos .border-error\\/20 {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos .border-error {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos .placeholder-on-surface-variant\\/50::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos .hover\\:bg-surface-container:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .focus\\:border-primary\\/60:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos .hover\\:border-primary\\/40:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos .ring-primary-20 {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos .bg-primary-10 {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos .selected-liveness {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .human-id-liveness-toggle:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos .human-id-liveness-toggle--on {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon--on {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--decrypt {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track--on {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-callout {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .selected-tolerance {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos .demo-range-input {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark .smart-enroll-demos {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .glass-panel-dark {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark .smart-enroll-demos .demo-btn-primary {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark .smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark .smart-enroll-demos .demo-btn-secondary {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark .smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark .smart-enroll-demos input[type=date] {\n  color-scheme: dark;\n}\n.dark .smart-enroll-demos input[type=date]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub .demo-card,\n.human-authn-demos-hub .demo-card {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub .demo-card:hover,\n.human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark .smart-enroll-demos-hub .demo-card:hover,\n.dark .human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=_demos-theme.css.map */\n'] }]
  }], null, { stage: [{
    type: Input,
    args: [{ required: true }]
  }], title: [{
    type: Input,
    args: [{ required: true }]
  }], hint: [{
    type: Input,
    args: [{ required: true }]
  }], stageLabel: [{
    type: Input
  }], enabled: [{
    type: Input
  }], showRecommended: [{
    type: Input
  }], recommendedLabel: [{
    type: Input
  }], onLabel: [{
    type: Input
  }], offLabel: [{
    type: Input
  }], enabledChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanIdLivenessToggleComponent, { className: "HumanIdLivenessToggleComponent", filePath: "src/app/modules/smart-enroll/demos/shared/human-id-liveness-toggle.component.ts", lineNumber: 14 });
})();

// src/app/modules/smart-enroll/demos/shared/human-id-structured-result.component.ts
function HumanIdStructuredResultComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15);
    \u0275\u0275element(6, "img", 16);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 17)(9, "a", 18);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 19);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "smartEnrollDemos.humanIdStructuredResult.pngQrHeading"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.zelfQrPngDataUrl, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(7, 8, "smartEnrollDemos.humanIdStructuredResult.qrCodeAlt"));
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r0.zelfQrPngDataUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "smartEnrollDemos.humanIdStructuredResult.downloadPng"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "smartEnrollDemos.humanIdStructuredResult.dataUrlHint"), " ");
  }
}
function HumanIdStructuredResultComponent_Conditional_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.truncateMiddle(ctx_r0.parsed.humanID), " ");
  }
}
function HumanIdStructuredResultComponent_Conditional_12_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.parsed.humanID);
  }
}
function HumanIdStructuredResultComponent_Conditional_12_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function HumanIdStructuredResultComponent_Conditional_12_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showFullZelfProof = !ctx_r0.showFullZelfProof);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.showFullZelfProof ? \u0275\u0275pipeBind1(2, 1, "smartEnrollDemos.humanIdStructuredResult.showLess") : \u0275\u0275pipeBind1(3, 3, "smartEnrollDemos.humanIdStructuredResult.showFull"), " ");
  }
}
function HumanIdStructuredResultComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 20)(2, "h3", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function HumanIdStructuredResultComponent_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.copyText(ctx_r0.parsed.humanID, "humanID"));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, HumanIdStructuredResultComponent_Conditional_12_Conditional_9_Template, 2, 1, "p", 23)(10, HumanIdStructuredResultComponent_Conditional_12_Conditional_10_Template, 2, 1, "pre", 24)(11, HumanIdStructuredResultComponent_Conditional_12_Conditional_11_Template, 4, 5, "button", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "smartEnrollDemos.humanIdStructuredResult.humanIDHeading"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.copiedField === "humanID" ? \u0275\u0275pipeBind1(7, 6, "smartEnrollDemos.humanIdStructuredResult.copied") : \u0275\u0275pipeBind1(8, 8, "smartEnrollDemos.humanIdStructuredResult.copyFull"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.showFullZelfProof ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.parsed.humanID.length > 52 ? 11 : -1);
  }
}
function HumanIdStructuredResultComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 28);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 29)(8, "div", 30)(9, "img", 31);
    \u0275\u0275listener("error", function HumanIdStructuredResultComponent_Conditional_13_Template_img_error_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onQrError());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 32)(11, "a", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 19);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "smartEnrollDemos.humanIdStructuredResult.gatewayQrHeading"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "smartEnrollDemos.humanIdStructuredResult.gatewayQrBody"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.qrSrc, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r0.ipfsGatewayUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.ipfsGatewayUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 10, "smartEnrollDemos.humanIdStructuredResult.opensNewTab"), " ");
  }
}
function HumanIdStructuredResultComponent_Conditional_14_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "dt", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 38);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(key_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatValue(ctx_r0.parsed.ipfs[key_r5], \u0275\u0275pipeBind1(5, 2, "smartEnrollDemos.common.yes"), \u0275\u0275pipeBind1(6, 4, "smartEnrollDemos.common.no")), " ");
  }
}
function HumanIdStructuredResultComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dl", 35);
    \u0275\u0275repeaterCreate(5, HumanIdStructuredResultComponent_Conditional_14_For_6_Template, 7, 6, "div", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollDemos.humanIdStructuredResult.ipfsSectionTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.ipfsKeys());
  }
}
var IPFS_DETAIL_KEYS = [
  "IpfsHash",
  "url",
  "PinSize",
  "Timestamp",
  "MimeType",
  "Name",
  "name",
  "pinned",
  "ID",
  "GroupId",
  "NumberOfFiles",
  "web3"
];
var HumanIdStructuredResultComponent = class _HumanIdStructuredResultComponent {
  constructor() {
    this.result = null;
    this.successTitle = "";
    this.successDescription = "";
    this.zelfQrPngDataUrl = null;
    this.createAnotherLabel = "";
    this.createAnother = new EventEmitter();
    this.backToDemos = new EventEmitter();
    this.copiedField = null;
    this.showFullZelfProof = false;
    this.qrLoadFailed = false;
  }
  get parsed() {
    if (!this.result)
      return null;
    const innerData = isPlainObject(this.result["data"]) ? this.result["data"] : null;
    const humanID = typeof innerData?.["humanID"] === "string" ? innerData["humanID"] : "";
    const ipfs = isPlainObject(innerData?.["ipfs"]) ? innerData["ipfs"] : null;
    return { humanID, ipfs };
  }
  get ipfsGatewayUrl() {
    const url = this.parsed?.ipfs?.["url"];
    return typeof url === "string" ? url : "";
  }
  get qrSrc() {
    if (!this.ipfsGatewayUrl || this.qrLoadFailed)
      return "";
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(this.ipfsGatewayUrl)}`;
  }
  formatValue(v, yes, no) {
    return formatDisplayValue(v, yes, no);
  }
  truncateMiddle(s) {
    return truncateMiddle(s);
  }
  ipfsKeys() {
    if (!this.parsed?.ipfs)
      return [];
    return IPFS_DETAIL_KEYS.filter((k) => this.parsed.ipfs[k] !== void 0);
  }
  copyText(text, fieldId) {
    return __async(this, null, function* () {
      try {
        yield navigator.clipboard.writeText(text);
        this.copiedField = fieldId;
        setTimeout(() => this.copiedField = null, 2e3);
      } catch {
        this.copiedField = null;
      }
    });
  }
  onQrError() {
    this.qrLoadFailed = true;
  }
  static {
    this.\u0275fac = function HumanIdStructuredResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HumanIdStructuredResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HumanIdStructuredResultComponent, selectors: [["app-human-id-structured-result"]], inputs: { result: "result", successTitle: "successTitle", successDescription: "successDescription", zelfQrPngDataUrl: "zelfQrPngDataUrl", createAnotherLabel: "createAnotherLabel" }, outputs: { createAnother: "createAnother", backToDemos: "backToDemos" }, decls: 29, vars: 22, consts: [[1, "space-y-5"], [1, "rounded-2xl", "bg-surface-container-low", "border", "border-primary/20", "p-6"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "material-symbols-outlined", "text-primary", "text-2xl"], [1, "font-bold", "text-on-surface", "text-lg"], [1, "text-sm", "text-on-surface-variant"], [1, "mb-6", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-high/40", "p-4"], [1, "block", "mb-6", 3, "result"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "px-4", "py-3", "group"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-on-surface-variant", "flex", "items-center", "justify-between", "gap-2"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform", "text-lg"], [1, "mt-3", "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"], ["secondaryIcon", "add", 3, "primary", "secondary", "secondaryLabel", "primaryLabel", "primaryRouterLink"], [1, "text-sm", "font-bold", "text-primary", "mb-2"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "items-center", "sm:items-start"], [1, "flex", "justify-center", "rounded-xl", "border", "border-outline-variant/20", "bg-white", "p-4", "shrink-0"], [1, "w-56", "h-56", "object-contain", 3, "src", "alt"], [1, "flex", "flex-col", "gap-2", "min-w-0"], ["download", "humanid-qr.png", 1, "inline-flex", "items-center", "justify-center", "text-sm", "font-semibold", "py-2", "px-4", "rounded-lg", "bg-primary/15", "text-primary", "border", "border-primary/30", "hover:bg-primary/25", "transition-colors", "w-fit", 3, "href"], [1, "text-xs", "text-on-surface-variant"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-2", "mb-2"], [1, "text-sm", "font-bold", "text-primary"], ["type", "button", 1, "text-xs", "font-semibold", "text-primary", "underline", "underline-offset-2", 3, "click"], [1, "text-[0.7rem]", "font-mono", "text-on-surface", "break-all", "bg-surface-container-high/80", "rounded-lg", "px-3", "py-2", "border", "border-outline-variant/15"], [1, "max-h-48", "overflow-auto", "text-[0.65rem]", "font-mono", "bg-surface-container-high", "rounded-lg", "p-3", "border", "border-outline-variant/15", "text-on-surface", "whitespace-pre-wrap"], ["type", "button", 1, "mt-2", "text-xs", "font-semibold", "text-on-surface-variant", "hover:text-primary"], ["type", "button", 1, "mt-2", "text-xs", "font-semibold", "text-on-surface-variant", "hover:text-primary", 3, "click"], [1, "text-sm", "font-bold", "text-primary", "mb-1"], [1, "text-xs", "text-on-surface-variant", "mb-3"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "items-start"], [1, "shrink-0", "rounded-lg", "border", "border-outline-variant/20", "bg-white", "p-2"], ["alt", "", "width", "200", "height", "200", 1, "block", 3, "error", "src"], [1, "min-w-0", "flex-1", "space-y-2"], ["target", "_blank", "rel", "noopener noreferrer", 1, "text-sm", "font-semibold", "text-primary", "break-all", "underline", "underline-offset-2", 3, "href"], [1, "text-sm", "font-bold", "text-primary", "mb-3"], [1, "space-y-2", "text-sm"], [1, "grid", "grid-cols-1", "sm:grid-cols-[minmax(0,11rem)_1fr]", "gap-x-3", "gap-y-1", "border-b", "border-outline-variant/10", "pb-2", "last:border-0", "last:pb-0"], [1, "text-on-surface-variant", "font-medium"], [1, "font-mono", "text-xs", "text-on-surface", "break-all"]], template: function HumanIdStructuredResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "p", 4);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, HumanIdStructuredResultComponent_Conditional_11_Template, 15, 14, "section", 6)(12, HumanIdStructuredResultComponent_Conditional_12_Template, 12, 10, "section", 6)(13, HumanIdStructuredResultComponent_Conditional_13_Template, 16, 12, "section", 6)(14, HumanIdStructuredResultComponent_Conditional_14_Template, 7, 3, "section", 6);
        \u0275\u0275element(15, "app-demo-credits-usage", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "details", 8)(17, "summary", 9)(18, "span");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 10);
        \u0275\u0275text(22, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "pre", 11);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "json");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "app-demo-result-actions", 12);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275pipe(28, "transloco");
        \u0275\u0275listener("primary", function HumanIdStructuredResultComponent_Template_app_demo_result_actions_primary_26_listener() {
          return ctx.backToDemos.emit();
        })("secondary", function HumanIdStructuredResultComponent_Template_app_demo_result_actions_secondary_26_listener() {
          return ctx.createAnother.emit();
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.successTitle);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.successDescription || \u0275\u0275pipeBind1(10, 12, "smartEnrollDemos.humanIdStructuredResult.defaultSuccessDescription"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.zelfQrPngDataUrl ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.parsed == null ? null : ctx.parsed.humanID) ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.ipfsGatewayUrl && !ctx.zelfQrPngDataUrl && ctx.qrSrc ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.parsed == null ? null : ctx.parsed.ipfs) ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("result", ctx.result);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 14, "smartEnrollDemos.humanIdStructuredResult.rawDebug"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 16, ctx.result));
        \u0275\u0275advance(2);
        \u0275\u0275property("secondaryLabel", ctx.createAnotherLabel || \u0275\u0275pipeBind1(27, 18, "smartEnrollDemos.humanIdStructuredResult.defaultCreateAnother"))("primaryLabel", \u0275\u0275pipeBind1(28, 20, "smartEnrollDemos.humanIdStructuredResult.backToDemos"))("primaryRouterLink", null);
      }
    }, dependencies: [JsonPipe, TranslocoModule, TranslocoPipe, DemoResultActionsComponent, DemoCreditsUsageComponent], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HumanIdStructuredResultComponent, [{
    type: Component,
    args: [{ selector: "app-human-id-structured-result", standalone: true, imports: [JsonPipe, TranslocoModule, DemoResultActionsComponent, DemoCreditsUsageComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-5">\r
    <div class="rounded-2xl bg-surface-container-low border border-primary/20 p-6">\r
        <div class="flex items-center gap-3 mb-6">\r
            <span class="material-symbols-outlined text-primary text-2xl">check_circle</span>\r
            <div>\r
                <p class="font-bold text-on-surface text-lg">{{ successTitle }}</p>\r
                <p class="text-sm text-on-surface-variant">\r
                    {{\r
                        successDescription ||\r
                            ('smartEnrollDemos.humanIdStructuredResult.defaultSuccessDescription' | transloco)\r
                    }}\r
                </p>\r
            </div>\r
        </div>\r
\r
        @if (zelfQrPngDataUrl) {\r
            <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                <h3 class="text-sm font-bold text-primary mb-2">\r
                    {{ 'smartEnrollDemos.humanIdStructuredResult.pngQrHeading' | transloco }}\r
                </h3>\r
                <div class="flex flex-col sm:flex-row gap-4 items-center sm:items-start">\r
                    <div class="flex justify-center rounded-xl border border-outline-variant/20 bg-white p-4 shrink-0">\r
                        <img [src]="zelfQrPngDataUrl" [alt]="'smartEnrollDemos.humanIdStructuredResult.qrCodeAlt' | transloco" class="w-56 h-56 object-contain" />\r
                    </div>\r
                    <div class="flex flex-col gap-2 min-w-0">\r
                        <a\r
                            [href]="zelfQrPngDataUrl"\r
                            download="humanid-qr.png"\r
                            class="inline-flex items-center justify-center text-sm font-semibold py-2 px-4 rounded-lg bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition-colors w-fit"\r
                        >\r
                            {{ 'smartEnrollDemos.humanIdStructuredResult.downloadPng' | transloco }}\r
                        </a>\r
                        <p class="text-xs text-on-surface-variant">\r
                            {{ 'smartEnrollDemos.humanIdStructuredResult.dataUrlHint' | transloco }}\r
                        </p>\r
                    </div>\r
                </div>\r
            </section>\r
        }\r
\r
        @if (parsed?.humanID) {\r
            <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                <div class="flex flex-wrap items-start justify-between gap-2 mb-2">\r
                    <h3 class="text-sm font-bold text-primary">\r
                        {{ 'smartEnrollDemos.humanIdStructuredResult.humanIDHeading' | transloco }}\r
                    </h3>\r
                    <button\r
                        type="button"\r
                        (click)="copyText(parsed!.humanID, 'humanID')"\r
                        class="text-xs font-semibold text-primary underline underline-offset-2"\r
                    >\r
                        {{\r
                            copiedField === 'humanID'\r
                                ? ('smartEnrollDemos.humanIdStructuredResult.copied' | transloco)\r
                                : ('smartEnrollDemos.humanIdStructuredResult.copyFull' | transloco)\r
                        }}\r
                    </button>\r
                </div>\r
                @if (!showFullZelfProof) {\r
                    <p class="text-[0.7rem] font-mono text-on-surface break-all bg-surface-container-high/80 rounded-lg px-3 py-2 border border-outline-variant/15">\r
                        {{ truncateMiddle(parsed!.humanID) }}\r
                    </p>\r
                } @else {\r
                    <pre class="max-h-48 overflow-auto text-[0.65rem] font-mono bg-surface-container-high rounded-lg p-3 border border-outline-variant/15 text-on-surface whitespace-pre-wrap">{{\r
                        parsed!.humanID\r
                    }}</pre>\r
                }\r
                @if (parsed!.humanID.length > 52) {\r
                    <button type="button" (click)="showFullZelfProof = !showFullZelfProof" class="mt-2 text-xs font-semibold text-on-surface-variant hover:text-primary">\r
                        {{\r
                            showFullZelfProof\r
                                ? ('smartEnrollDemos.humanIdStructuredResult.showLess' | transloco)\r
                                : ('smartEnrollDemos.humanIdStructuredResult.showFull' | transloco)\r
                        }}\r
                    </button>\r
                }\r
            </section>\r
        }\r
\r
        @if (ipfsGatewayUrl && !zelfQrPngDataUrl && qrSrc) {\r
            <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                <h3 class="text-sm font-bold text-primary mb-1">\r
                    {{ 'smartEnrollDemos.humanIdStructuredResult.gatewayQrHeading' | transloco }}\r
                </h3>\r
                <p class="text-xs text-on-surface-variant mb-3">\r
                    {{ 'smartEnrollDemos.humanIdStructuredResult.gatewayQrBody' | transloco }}\r
                </p>\r
                <div class="flex flex-col sm:flex-row gap-4 items-start">\r
                    <div class="shrink-0 rounded-lg border border-outline-variant/20 bg-white p-2">\r
                        <img [src]="qrSrc" alt="" class="block" (error)="onQrError()" width="200" height="200" />\r
                    </div>\r
                    <div class="min-w-0 flex-1 space-y-2">\r
                        <a [href]="ipfsGatewayUrl" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-primary break-all underline underline-offset-2">{{\r
                            ipfsGatewayUrl\r
                        }}</a>\r
                        <p class="text-xs text-on-surface-variant">\r
                            {{ 'smartEnrollDemos.humanIdStructuredResult.opensNewTab' | transloco }}\r
                        </p>\r
                    </div>\r
                </div>\r
            </section>\r
        }\r
\r
        @if (parsed?.ipfs) {\r
            <section class="mb-6 rounded-xl border border-outline-variant/20 bg-surface-container-high/40 p-4">\r
                <h3 class="text-sm font-bold text-primary mb-3">\r
                    {{ 'smartEnrollDemos.humanIdStructuredResult.ipfsSectionTitle' | transloco }}\r
                </h3>\r
                <dl class="space-y-2 text-sm">\r
                    @for (key of ipfsKeys(); track key) {\r
                        <div class="grid grid-cols-1 sm:grid-cols-[minmax(0,11rem)_1fr] gap-x-3 gap-y-1 border-b border-outline-variant/10 pb-2 last:border-0 last:pb-0">\r
                            <dt class="text-on-surface-variant font-medium">{{ key }}</dt>\r
                            <dd class="font-mono text-xs text-on-surface break-all">\r
                                {{ formatValue(parsed!.ipfs![key], ('smartEnrollDemos.common.yes' | transloco), ('smartEnrollDemos.common.no' | transloco)) }}\r
                            </dd>\r
                        </div>\r
                    }\r
                </dl>\r
            </section>\r
        }\r
\r
        <app-demo-credits-usage [result]="result" class="block mb-6" />\r
    </div>\r
\r
    <details class="rounded-xl border border-outline-variant/20 bg-surface-container-low/50 px-4 py-3 group">\r
        <summary class="cursor-pointer list-none font-bold text-sm text-on-surface-variant flex items-center justify-between gap-2">\r
            <span>{{ 'smartEnrollDemos.humanIdStructuredResult.rawDebug' | transloco }}</span>\r
            <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform text-lg">expand_more</span>\r
        </summary>\r
        <pre class="mt-3 text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{\r
            result | json\r
        }}</pre>\r
    </details>\r
\r
    <app-demo-result-actions\r
        [secondaryLabel]="createAnotherLabel || ('smartEnrollDemos.humanIdStructuredResult.defaultCreateAnother' | transloco)"\r
        secondaryIcon="add"\r
        [primaryLabel]="'smartEnrollDemos.humanIdStructuredResult.backToDemos' | transloco"\r
        [primaryRouterLink]="null"\r
        (primary)="backToDemos.emit()"\r
        (secondary)="createAnother.emit()"\r
    />\r
</div>\r
` }]
  }], null, { result: [{
    type: Input,
    args: [{ required: true }]
  }], successTitle: [{
    type: Input,
    args: [{ required: true }]
  }], successDescription: [{
    type: Input
  }], zelfQrPngDataUrl: [{
    type: Input
  }], createAnotherLabel: [{
    type: Input
  }], createAnother: [{
    type: Output
  }], backToDemos: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HumanIdStructuredResultComponent, { className: "HumanIdStructuredResultComponent", filePath: "src/app/modules/smart-enroll/demos/shared/human-id-structured-result.component.ts", lineNumber: 30 });
})();

export {
  HumanIdJsonKeyValueFieldComponent,
  HumanIdLivenessToggleComponent,
  HumanIdStructuredResultComponent
};
//# sourceMappingURL=chunk-S4E7QXO2.js.map
