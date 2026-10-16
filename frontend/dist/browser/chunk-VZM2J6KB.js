import {
  truncateId
} from "./chunk-CRJOXNLH.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  NgClass,
  Output,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-enroll/demos/shared/person-single-select.component.ts
var _c0 = ["rootRef"];
var _c1 = ["searchInput"];
var _c2 = (a0) => ({ "opacity-50 cursor-not-allowed": a0 });
var _c3 = (a0) => ({ "text-on-surface-variant": a0 });
var _c4 = (a0) => ({ "border-primary bg-primary": a0 });
var _forTrack0 = ($index, $item) => $item._id;
function PersonSingleSelectComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.common.loadingPeople"), " ");
  }
}
function PersonSingleSelectComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.summary, " ");
  }
}
function PersonSingleSelectComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollDemos.common.noPeopleInProject"), " ");
  }
}
function PersonSingleSelectComponent_Conditional_9_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollDemos.common.noMatches"), " ");
  }
}
function PersonSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
function PersonSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "li", 16)(2, "button", 17);
    \u0275\u0275listener("click", function PersonSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_For_1_Template_button_click_2_listener() {
      const it_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.pick(it_r5._id));
    });
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275template(4, PersonSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_For_1_Conditional_4_Template, 1, 0, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20)(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const it_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    const checked_r6 = ctx_r1.selectedId === it_r5._id;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-selected", checked_r6);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", checked_r6 ? "bg-primary/10" : "hover:bg-surface-container-high/80");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c4, checked_r6));
    \u0275\u0275advance();
    \u0275\u0275conditional(checked_r6 ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", it_r5.name || \u0275\u0275pipeBind1(8, 6, "smartEnrollDemos.common.emDash"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncateId(it_r5._id));
  }
}
function PersonSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PersonSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_For_1_Template, 11, 10, "li", 16, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
function PersonSingleSelectComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "span", 12);
    \u0275\u0275text(6, " search ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 13, 1);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275listener("ngModelChange", function PersonSingleSelectComponent_Conditional_9_Conditional_2_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.search.set($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ul", 14);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275template(12, PersonSingleSelectComponent_Conditional_9_Conditional_2_Conditional_12_Template, 3, 3, "li", 15)(13, PersonSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("for", ctx_r1.listId + "-search");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "smartEnrollDemos.common.searchPeopleSr"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("id", ctx_r1.listId + "-search")("ngModel", ctx_r1.search())("placeholder", \u0275\u0275pipeBind1(9, 10, "smartEnrollDemos.common.searchPeoplePlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", ctx_r1.listId);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 12, "smartEnrollDemos.common.peopleListAria"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filtered().length === 0 ? 12 : 13);
  }
}
function PersonSingleSelectComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, PersonSingleSelectComponent_Conditional_9_Conditional_1_Template, 3, 3, "div", 9)(2, PersonSingleSelectComponent_Conditional_9_Conditional_2_Template, 14, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.items.length === 0 ? 1 : 2);
  }
}
function PersonSingleSelectComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8)(1, "span", 23);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
var matchesSearch = (item, q) => {
  if (!q.trim())
    return true;
  const s = q.trim().toLowerCase();
  const hay = [item.name, item._id].join(" ").toLowerCase();
  return hay.includes(s);
};
var PersonSingleSelectComponent = class _PersonSingleSelectComponent {
  constructor() {
    this.items = [];
    this.selectedId = null;
    this.disabled = false;
    this.loading = false;
    this.error = null;
    this.labelId = "";
    this.selectedIdChange = new EventEmitter();
    this.listId = `person-single-${Math.random().toString(36).slice(2, 9)}`;
    this.open = signal(false);
    this.search = signal("");
    this._transloco = inject(TranslocoService);
    this.byId = computed(() => {
      const m = /* @__PURE__ */ new Map();
      for (const it of this.items)
        m.set(it._id, it);
      return m;
    });
    this.filtered = computed(() => this.items.filter((it) => matchesSearch(it, this.search())));
    this.truncateId = truncateId;
  }
  get summary() {
    const selected = this.selectedId ? this.byId().get(this.selectedId) : void 0;
    if (selected)
      return selected.name || truncateId(selected._id);
    return this._transloco.translate("smartEnrollDemos.common.selectPerson");
  }
  toggleOpen() {
    if (this.disabled || this.loading)
      return;
    const next = !this.open();
    this.open.set(next);
    if (next) {
      requestAnimationFrame(() => this.searchInput?.nativeElement.focus());
    } else {
      this.search.set("");
    }
  }
  close() {
    this.open.set(false);
    this.search.set("");
  }
  pick(id) {
    this.selectedIdChange.emit(id);
    this.close();
  }
  onDocumentMouseDown(event) {
    if (!this.open())
      return;
    if (!this.rootRef?.nativeElement.contains(event.target)) {
      this.close();
    }
  }
  onEscape() {
    if (this.open())
      this.close();
  }
  static {
    this.\u0275fac = function PersonSingleSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonSingleSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonSingleSelectComponent, selectors: [["app-person-single-select"]], viewQuery: function PersonSingleSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rootRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
      }
    }, hostBindings: function PersonSingleSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function PersonSingleSelectComponent_mousedown_HostBindingHandler($event) {
          return ctx.onDocumentMouseDown($event);
        }, false, \u0275\u0275resolveDocument)("keydown.escape", function PersonSingleSelectComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { items: "items", selectedId: "selectedId", disabled: "disabled", loading: "loading", error: "error", labelId: "labelId" }, outputs: { selectedIdChange: "selectedIdChange" }, decls: 11, vars: 14, consts: [["rootRef", ""], ["searchInput", ""], [1, "space-y-2"], [1, "relative"], ["type", "button", "aria-haspopup", "listbox", 1, "w-full", "flex", "items-center", "justify-between", "gap-2", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-left", "text-sm", "text-on-surface", "focus:outline-none", "focus:border-primary/60", "transition-colors", 3, "click", "id", "disabled", "ngClass"], [3, "ngClass"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "shrink-0"], ["role", "presentation", 1, "absolute", "left-0", "right-0", "top-[calc(100%+6px)]", "z-50", "flex", "max-h-[min(320px,calc(100vh-220px))]", "flex-col", "overflow-hidden", "rounded-lg", "border", "border-outline-variant/30", "bg-surface-container-low", "shadow-lg"], [1, "text-sm", "text-error", "flex", "items-center", "gap-1"], [1, "px-4", "py-6", "text-sm", "text-on-surface-variant", "text-center"], [1, "shrink-0", "border-b", "border-outline-variant/20", "p-2"], [1, "sr-only", 3, "for"], ["aria-hidden", "true", 1, "material-symbols-outlined", "pointer-events-none", "absolute", "left-2.5", "top-1/2", "-translate-y-1/2", "text-[18px]", "text-on-surface-variant/70"], ["type", "search", "autocomplete", "off", 1, "w-full", "rounded-lg", "border", "border-outline-variant/30", "bg-surface-container-high/50", "py-2", "pl-9", "pr-3", "text-sm", "text-on-surface", "outline-none", "placeholder:text-on-surface-variant/50", "focus:border-primary/60", 3, "ngModelChange", "id", "ngModel", "placeholder"], ["role", "listbox", 1, "min-h-0", "flex-1", "overflow-y-auto", "overscroll-contain", "py-1", 3, "id"], [1, "px-3", "py-6", "text-center", "text-xs", "text-on-surface-variant"], ["role", "option", 1, "px-1"], ["type", "button", 1, "w-full", "flex", "cursor-pointer", "items-start", "gap-3", "rounded-md", "px-2", "py-2", "text-left", "text-sm", "transition-colors", 3, "click", "ngClass"], ["aria-hidden", "true", 1, "mt-0.5", "h-4", "w-4", "shrink-0", "rounded-full", "border", "border-outline-variant", "flex", "items-center", "justify-center", 3, "ngClass"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-white"], [1, "min-w-0", "flex-1"], [1, "font-medium", "text-on-surface", "block", "truncate"], [1, "text-xs", "text-on-surface-variant", "font-mono"], [1, "material-symbols-outlined", "text-sm"]], template: function PersonSingleSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "button", 4);
        \u0275\u0275listener("click", function PersonSingleSelectComponent_Template_button_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleOpen());
        });
        \u0275\u0275elementStart(4, "span", 5);
        \u0275\u0275template(5, PersonSingleSelectComponent_Conditional_5_Template, 2, 3)(6, PersonSingleSelectComponent_Conditional_6_Template, 1, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, PersonSingleSelectComponent_Conditional_9_Template, 3, 1, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, PersonSingleSelectComponent_Conditional_10_Template, 4, 1, "p", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.labelId || null)("disabled", ctx.disabled || ctx.loading)("ngClass", \u0275\u0275pureFunction1(10, _c2, ctx.disabled || ctx.loading));
        \u0275\u0275attribute("aria-expanded", ctx.open())("aria-controls", ctx.open() ? ctx.listId : null);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c3, !ctx.selectedId));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 5 : 6);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.open() ? "expand_less" : "expand_more", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.open() && !ctx.loading ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.error ? 10 : -1);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgClass, TranslocoModule, TranslocoPipe], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonSingleSelectComponent, [{
    type: Component,
    args: [{ selector: "app-person-single-select", standalone: true, imports: [FormsModule, NgClass, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div #rootRef class="space-y-2">\r
    <div class="relative">\r
        <button\r
            type="button"\r
            [id]="labelId || null"\r
            [disabled]="disabled || loading"\r
            aria-haspopup="listbox"\r
            [attr.aria-expanded]="open()"\r
            [attr.aria-controls]="open() ? listId : null"\r
            (click)="toggleOpen()"\r
            class="w-full flex items-center justify-between gap-2 bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-left text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-colors"\r
            [ngClass]="{ 'opacity-50 cursor-not-allowed': disabled || loading }"\r
        >\r
            <span [ngClass]="{ 'text-on-surface-variant': !selectedId }">\r
                @if (loading) {\r
                    {{ 'smartEnrollDemos.common.loadingPeople' | transloco }}\r
                } @else {\r
                    {{ summary }}\r
                }\r
            </span>\r
            <span class="material-symbols-outlined text-on-surface-variant/70 shrink-0">\r
                {{ open() ? 'expand_less' : 'expand_more' }}\r
            </span>\r
        </button>\r
\r
        @if (open() && !loading) {\r
            <div\r
                class="absolute left-0 right-0 top-[calc(100%+6px)] z-50 flex max-h-[min(320px,calc(100vh-220px))] flex-col overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container-low shadow-lg"\r
                role="presentation"\r
            >\r
                @if (items.length === 0) {\r
                    <div class="px-4 py-6 text-sm text-on-surface-variant text-center">\r
                        {{ 'smartEnrollDemos.common.noPeopleInProject' | transloco }}\r
                    </div>\r
                } @else {\r
                    <div class="shrink-0 border-b border-outline-variant/20 p-2">\r
                        <label [for]="listId + '-search'" class="sr-only">\r
                            {{ 'smartEnrollDemos.common.searchPeopleSr' | transloco }}\r
                        </label>\r
                        <div class="relative">\r
                            <span\r
                                class="material-symbols-outlined pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant/70"\r
                                aria-hidden="true"\r
                            >\r
                                search\r
                            </span>\r
                            <input\r
                                #searchInput\r
                                [id]="listId + '-search'"\r
                                type="search"\r
                                autocomplete="off"\r
                                [ngModel]="search()"\r
                                (ngModelChange)="search.set($event)"\r
                                [placeholder]="'smartEnrollDemos.common.searchPeoplePlaceholder' | transloco"\r
                                class="w-full rounded-lg border border-outline-variant/30 bg-surface-container-high/50 py-2 pl-9 pr-3 text-sm text-on-surface outline-none placeholder:text-on-surface-variant/50 focus:border-primary/60"\r
                            />\r
                        </div>\r
                    </div>\r
                    <ul\r
                        [id]="listId"\r
                        role="listbox"\r
                        [attr.aria-label]="'smartEnrollDemos.common.peopleListAria' | transloco"\r
                        class="min-h-0 flex-1 overflow-y-auto overscroll-contain py-1"\r
                    >\r
                        @if (filtered().length === 0) {\r
                            <li class="px-3 py-6 text-center text-xs text-on-surface-variant">\r
                                {{ 'smartEnrollDemos.common.noMatches' | transloco }}\r
                            </li>\r
                        } @else {\r
                            @for (it of filtered(); track it._id) {\r
                                @let checked = selectedId === it._id;\r
                                <li role="option" [attr.aria-selected]="checked" class="px-1">\r
                                    <button\r
                                        type="button"\r
                                        (click)="pick(it._id)"\r
                                        class="w-full flex cursor-pointer items-start gap-3 rounded-md px-2 py-2 text-left text-sm transition-colors"\r
                                        [ngClass]="checked ? 'bg-primary/10' : 'hover:bg-surface-container-high/80'"\r
                                    >\r
                                        <span\r
                                            class="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-outline-variant flex items-center justify-center"\r
                                            [ngClass]="{ 'border-primary bg-primary': checked }"\r
                                            aria-hidden="true"\r
                                        >\r
                                            @if (checked) {\r
                                                <span class="h-1.5 w-1.5 rounded-full bg-white"></span>\r
                                            }\r
                                        </span>\r
                                        <span class="min-w-0 flex-1">\r
                                            <span class="font-medium text-on-surface block truncate">\r
                                                {{ it.name || ('smartEnrollDemos.common.emDash' | transloco) }}\r
                                            </span>\r
                                            <span class="text-xs text-on-surface-variant font-mono">{{ truncateId(it._id) }}</span>\r
                                        </span>\r
                                    </button>\r
                                </li>\r
                            }\r
                        }\r
                    </ul>\r
                }\r
            </div>\r
        }\r
    </div>\r
    @if (error) {\r
        <p class="text-sm text-error flex items-center gap-1">\r
            <span class="material-symbols-outlined text-sm">error_outline</span>\r
            {{ error }}\r
        </p>\r
    }\r
</div>\r
` }]
  }], null, { items: [{
    type: Input,
    args: [{ required: true }]
  }], selectedId: [{
    type: Input
  }], disabled: [{
    type: Input
  }], loading: [{
    type: Input
  }], error: [{
    type: Input
  }], labelId: [{
    type: Input
  }], selectedIdChange: [{
    type: Output
  }], rootRef: [{
    type: ViewChild,
    args: ["rootRef"]
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }], onDocumentMouseDown: [{
    type: HostListener,
    args: ["document:mousedown", ["$event"]]
  }], onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonSingleSelectComponent, { className: "PersonSingleSelectComponent", filePath: "src/app/modules/smart-enroll/demos/shared/person-single-select.component.ts", lineNumber: 34 });
})();

export {
  PersonSingleSelectComponent
};
//# sourceMappingURL=chunk-VZM2J6KB.js.map
