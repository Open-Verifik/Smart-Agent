import {
  PersonSingleSelectComponent
} from "./chunk-VZM2J6KB.js";
import {
  CreatePersonResultComponent
} from "./chunk-KMHL3XWL.js";
import "./chunk-SH7ZW32X.js";
import "./chunk-Q7ZENBRV.js";
import {
  truncateCode
} from "./chunk-CRJOXNLH.js";
import "./chunk-T2IPWVBN.js";
import {
  DemoResultActionsComponent
} from "./chunk-ZD622R6J.js";
import {
  DemoRelatedDocsSectionComponent
} from "./chunk-N5HGB6KO.js";
import {
  BiometricsDemoApiService,
  DemoPageShellComponent,
  mapPersonDocsToListItems,
  normalizePersonsListPayload
} from "./chunk-VXZEB53O.js";
import "./chunk-B4YUVLJ7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  Router
} from "./chunk-HYFP557I.js";
import "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
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
  ɵɵNgOnChangesFeature,
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
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-PNPEHISK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/shared/collection-single-select.component.ts
var _c0 = ["rootRef"];
var _c1 = ["searchInput"];
var _c2 = (a0) => ({ "opacity-50 cursor-not-allowed": a0 });
var _c3 = (a0) => ({ "text-on-surface-variant": a0 });
var _c4 = (a0) => ({ "border-primary bg-primary": a0 });
var _forTrack0 = ($index, $item) => $item._id;
function CollectionSingleSelectComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.common.loadingCollections"), " ");
  }
}
function CollectionSingleSelectComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.summary, " ");
  }
}
function CollectionSingleSelectComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollDemos.common.noCollectionsAvailable"), " ");
  }
}
function CollectionSingleSelectComponent_Conditional_9_Conditional_2_Conditional_12_Template(rf, ctx) {
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
function CollectionSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
function CollectionSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "li", 16)(2, "button", 17);
    \u0275\u0275listener("click", function CollectionSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_For_1_Template_button_click_2_listener() {
      const it_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.pick(it_r5.code));
    });
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275template(4, CollectionSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_For_1_Conditional_4_Template, 1, 0, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20)(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const it_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    const checked_r6 = ctx_r1.selectedCode === it_r5.code;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-selected", checked_r6);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", checked_r6 ? "bg-primary/10" : "hover:bg-surface-container-high/80");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c4, checked_r6));
    \u0275\u0275advance();
    \u0275\u0275conditional(checked_r6 ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(it_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.truncateCode(it_r5.code));
  }
}
function CollectionSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CollectionSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_For_1_Template, 10, 8, "li", 16, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.filtered());
  }
}
function CollectionSingleSelectComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
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
    \u0275\u0275listener("ngModelChange", function CollectionSingleSelectComponent_Conditional_9_Conditional_2_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.search.set($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ul", 14);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275template(12, CollectionSingleSelectComponent_Conditional_9_Conditional_2_Conditional_12_Template, 3, 3, "li", 15)(13, CollectionSingleSelectComponent_Conditional_9_Conditional_2_Conditional_13_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("for", ctx_r1.listId + "-search");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "smartEnrollDemos.common.searchCollectionsSr"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("id", ctx_r1.listId + "-search")("ngModel", ctx_r1.search())("placeholder", \u0275\u0275pipeBind1(9, 10, "smartEnrollDemos.common.searchCollectionsPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", ctx_r1.listId);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 12, "smartEnrollDemos.common.collectionsListAria"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filtered().length === 0 ? 12 : 13);
  }
}
function CollectionSingleSelectComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, CollectionSingleSelectComponent_Conditional_9_Conditional_1_Template, 3, 3, "div", 9)(2, CollectionSingleSelectComponent_Conditional_9_Conditional_2_Template, 14, 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.items.length === 0 ? 1 : 2);
  }
}
function CollectionSingleSelectComponent_Conditional_10_Template(rf, ctx) {
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
  const hay = [item.name, item.code, item.description ?? ""].join(" ").toLowerCase();
  return hay.includes(s);
};
var CollectionSingleSelectComponent = class _CollectionSingleSelectComponent {
  constructor() {
    this.items = [];
    this.selectedCode = null;
    this.disabled = false;
    this.loading = false;
    this.error = null;
    this.labelId = "";
    this.selectedCodeChange = new EventEmitter();
    this.listId = `collection-single-${Math.random().toString(36).slice(2, 9)}`;
    this.open = signal(false);
    this.search = signal("");
    this._transloco = inject(TranslocoService);
    this.byCode = computed(() => {
      const m = /* @__PURE__ */ new Map();
      for (const it of this.items)
        m.set(it.code, it);
      return m;
    });
    this.filtered = computed(() => this.items.filter((it) => matchesSearch(it, this.search())));
    this.truncateCode = truncateCode;
  }
  get summary() {
    const selected = this.selectedCode ? this.byCode().get(this.selectedCode) : void 0;
    if (selected)
      return selected.name || truncateCode(selected.code);
    return this._transloco.translate("smartEnrollDemos.common.selectCollection");
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
  pick(code) {
    this.selectedCodeChange.emit(code);
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
    this.\u0275fac = function CollectionSingleSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionSingleSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionSingleSelectComponent, selectors: [["app-collection-single-select"]], viewQuery: function CollectionSingleSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rootRef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
      }
    }, hostBindings: function CollectionSingleSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function CollectionSingleSelectComponent_mousedown_HostBindingHandler($event) {
          return ctx.onDocumentMouseDown($event);
        }, false, \u0275\u0275resolveDocument)("keydown.escape", function CollectionSingleSelectComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { items: "items", selectedCode: "selectedCode", disabled: "disabled", loading: "loading", error: "error", labelId: "labelId" }, outputs: { selectedCodeChange: "selectedCodeChange" }, decls: 11, vars: 14, consts: [["rootRef", ""], ["searchInput", ""], [1, "space-y-2"], [1, "relative"], ["type", "button", "aria-haspopup", "listbox", 1, "w-full", "flex", "items-center", "justify-between", "gap-2", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-left", "text-sm", "text-on-surface", "focus:outline-none", "focus:border-primary/60", "transition-colors", 3, "click", "id", "disabled", "ngClass"], [3, "ngClass"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "shrink-0"], ["role", "presentation", 1, "absolute", "left-0", "right-0", "top-[calc(100%+6px)]", "z-50", "flex", "max-h-[min(320px,calc(100vh-220px))]", "flex-col", "overflow-hidden", "rounded-lg", "border", "border-outline-variant/30", "bg-surface-container-low", "shadow-lg"], [1, "text-sm", "text-error", "flex", "items-center", "gap-1"], [1, "px-4", "py-6", "text-sm", "text-on-surface-variant", "text-center"], [1, "shrink-0", "border-b", "border-outline-variant/20", "p-2"], [1, "sr-only", 3, "for"], ["aria-hidden", "true", 1, "material-symbols-outlined", "pointer-events-none", "absolute", "left-2.5", "top-1/2", "-translate-y-1/2", "text-[18px]", "text-on-surface-variant/70"], ["type", "search", "autocomplete", "off", 1, "w-full", "rounded-lg", "border", "border-outline-variant/30", "bg-surface-container-high/50", "py-2", "pl-9", "pr-3", "text-sm", "text-on-surface", "outline-none", "placeholder:text-on-surface-variant/50", "focus:border-primary/60", 3, "ngModelChange", "id", "ngModel", "placeholder"], ["role", "listbox", 1, "min-h-0", "flex-1", "overflow-y-auto", "overscroll-contain", "py-1", 3, "id"], [1, "px-3", "py-6", "text-center", "text-xs", "text-on-surface-variant"], ["role", "option", 1, "px-1"], ["type", "button", 1, "w-full", "flex", "cursor-pointer", "items-start", "gap-3", "rounded-md", "px-2", "py-2", "text-left", "text-sm", "transition-colors", 3, "click", "ngClass"], ["aria-hidden", "true", 1, "mt-0.5", "h-4", "w-4", "shrink-0", "rounded-full", "border", "border-outline-variant", "flex", "items-center", "justify-center", 3, "ngClass"], [1, "h-1.5", "w-1.5", "rounded-full", "bg-white"], [1, "min-w-0", "flex-1"], [1, "font-medium", "text-on-surface", "block", "truncate"], [1, "text-xs", "text-on-surface-variant", "font-mono"], [1, "material-symbols-outlined", "text-sm"]], template: function CollectionSingleSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "button", 4);
        \u0275\u0275listener("click", function CollectionSingleSelectComponent_Template_button_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleOpen());
        });
        \u0275\u0275elementStart(4, "span", 5);
        \u0275\u0275template(5, CollectionSingleSelectComponent_Conditional_5_Template, 2, 3)(6, CollectionSingleSelectComponent_Conditional_6_Template, 1, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, CollectionSingleSelectComponent_Conditional_9_Template, 3, 1, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, CollectionSingleSelectComponent_Conditional_10_Template, 4, 1, "p", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("id", ctx.labelId || null)("disabled", ctx.disabled || ctx.loading)("ngClass", \u0275\u0275pureFunction1(10, _c2, ctx.disabled || ctx.loading));
        \u0275\u0275attribute("aria-expanded", ctx.open())("aria-controls", ctx.open() ? ctx.listId : null);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c3, !ctx.selectedCode));
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionSingleSelectComponent, [{
    type: Component,
    args: [{ selector: "app-collection-single-select", standalone: true, imports: [FormsModule, NgClass, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div #rootRef class="space-y-2">\r
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
            <span [ngClass]="{ 'text-on-surface-variant': !selectedCode }">\r
                @if (loading) {\r
                    {{ 'smartEnrollDemos.common.loadingCollections' | transloco }}\r
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
                        {{ 'smartEnrollDemos.common.noCollectionsAvailable' | transloco }}\r
                    </div>\r
                } @else {\r
                    <div class="shrink-0 border-b border-outline-variant/20 p-2">\r
                        <label [for]="listId + '-search'" class="sr-only">\r
                            {{ 'smartEnrollDemos.common.searchCollectionsSr' | transloco }}\r
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
                                [placeholder]="'smartEnrollDemos.common.searchCollectionsPlaceholder' | transloco"\r
                                class="w-full rounded-lg border border-outline-variant/30 bg-surface-container-high/50 py-2 pl-9 pr-3 text-sm text-on-surface outline-none placeholder:text-on-surface-variant/50 focus:border-primary/60"\r
                            />\r
                        </div>\r
                    </div>\r
                    <ul\r
                        [id]="listId"\r
                        role="listbox"\r
                        [attr.aria-label]="'smartEnrollDemos.common.collectionsListAria' | transloco"\r
                        class="min-h-0 flex-1 overflow-y-auto overscroll-contain py-1"\r
                    >\r
                        @if (filtered().length === 0) {\r
                            <li class="px-3 py-6 text-center text-xs text-on-surface-variant">\r
                                {{ 'smartEnrollDemos.common.noMatches' | transloco }}\r
                            </li>\r
                        } @else {\r
                            @for (it of filtered(); track it._id) {\r
                                @let checked = selectedCode === it.code;\r
                                <li role="option" [attr.aria-selected]="checked" class="px-1">\r
                                    <button\r
                                        type="button"\r
                                        (click)="pick(it.code)"\r
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
                                            <span class="font-medium text-on-surface block truncate">{{ it.name }}</span>\r
                                            <span class="text-xs text-on-surface-variant font-mono">{{ truncateCode(it.code) }}</span>\r
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
  }], selectedCode: [{
    type: Input
  }], disabled: [{
    type: Input
  }], loading: [{
    type: Input
  }], error: [{
    type: Input
  }], labelId: [{
    type: Input
  }], selectedCodeChange: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionSingleSelectComponent, { className: "CollectionSingleSelectComponent", filePath: "src/app/modules/smart-enroll/demos/shared/collection-single-select.component.ts", lineNumber: 34 });
})();

// src/app/modules/smart-enroll/demos/shared/demo-confirm-modal.component.ts
var _c02 = ["confirmButton"];
function DemoConfirmModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
    \u0275\u0275listener("click", function DemoConfirmModalComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 8, 0);
    \u0275\u0275listener("click", function DemoConfirmModalComponent_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-labelledby", ctx_r1.titleId);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r1.titleId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resolvedCancel, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.variant === "danger" ? "bg-error text-white" : "bg-primary-cta text-on-primary-container");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.confirmLabel, " ");
  }
}
var DemoConfirmModalComponent = class _DemoConfirmModalComponent {
  constructor() {
    this.open = false;
    this.title = "";
    this.description = "";
    this.confirmLabel = "";
    this.cancelLabel = "";
    this.variant = "danger";
    this.confirmed = new EventEmitter();
    this.cancelled = new EventEmitter();
    this.titleId = `demo-confirm-${Math.random().toString(36).slice(2, 9)}`;
    this._transloco = inject(TranslocoService);
  }
  ngOnChanges(changes) {
    if (changes["open"]?.currentValue === true) {
      requestAnimationFrame(() => this.confirmButton?.nativeElement.focus());
    }
  }
  get resolvedCancel() {
    return this.cancelLabel || this._transloco.translate("smartEnrollDemos.common.cancel");
  }
  onEscape() {
    if (this.open) {
      this.cancelled.emit();
    }
  }
  onConfirm() {
    this.confirmed.emit();
  }
  onCancel() {
    this.cancelled.emit();
  }
  static {
    this.\u0275fac = function DemoConfirmModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoConfirmModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoConfirmModalComponent, selectors: [["app-demo-confirm-modal"]], viewQuery: function DemoConfirmModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmButton = _t.first);
      }
    }, hostBindings: function DemoConfirmModalComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function DemoConfirmModalComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { open: "open", title: "title", description: "description", confirmLabel: "confirmLabel", cancelLabel: "cancelLabel", variant: "variant" }, outputs: { confirmed: "confirmed", cancelled: "cancelled" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["confirmButton", ""], ["role", "presentation", 1, "fixed", "inset-0", "z-[100]", "flex", "items-center", "justify-center", "p-4", "bg-black/55", "backdrop-blur-[2px]"], ["role", "dialog", "aria-modal", "true", 1, "w-full", "max-w-md", "rounded-2xl", "border", "border-outline-variant/25", "bg-surface-container-low", "shadow-xl", "shadow-black/30"], [1, "p-6", "space-y-4"], [1, "text-lg", "font-bold", "text-on-surface", "tracking-tight", 3, "id"], [1, "text-sm", "text-on-surface-variant", "leading-relaxed"], [1, "flex", "flex-col-reverse", "sm:flex-row", "gap-3", "pt-2"], ["type", "button", 1, "flex-1", "py-3", "bg-surface-container", "text-on-surface", "font-semibold", "rounded-lg", "ghost-border", "hover:bg-surface-container-high", "transition-all", "active:scale-[0.98]", 3, "click"], ["type", "button", 1, "flex-1", "py-3", "font-bold", "rounded-lg", "shadow-primary", "hover:opacity-90", "active:scale-[0.98]", "transition-all", 3, "click", "ngClass"]], template: function DemoConfirmModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DemoConfirmModalComponent_Conditional_0_Template, 13, 7, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.open ? 0 : -1);
      }
    }, dependencies: [NgClass, TranslocoModule], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "app-demo-confirm-modal", standalone: true, imports: [NgClass, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (open) {\r
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/55 backdrop-blur-[2px]" role="presentation">\r
        <div\r
            role="dialog"\r
            aria-modal="true"\r
            [attr.aria-labelledby]="titleId"\r
            class="w-full max-w-md rounded-2xl border border-outline-variant/25 bg-surface-container-low shadow-xl shadow-black/30"\r
        >\r
            <div class="p-6 space-y-4">\r
                <h2 [id]="titleId" class="text-lg font-bold text-on-surface tracking-tight">{{ title }}</h2>\r
                <p class="text-sm text-on-surface-variant leading-relaxed">{{ description }}</p>\r
                <div class="flex flex-col-reverse sm:flex-row gap-3 pt-2">\r
                    <button\r
                        type="button"\r
                        (click)="onCancel()"\r
                        class="flex-1 py-3 bg-surface-container text-on-surface font-semibold rounded-lg ghost-border hover:bg-surface-container-high transition-all active:scale-[0.98]"\r
                    >\r
                        {{ resolvedCancel }}\r
                    </button>\r
                    <button\r
                        #confirmButton\r
                        type="button"\r
                        (click)="onConfirm()"\r
                        class="flex-1 py-3 font-bold rounded-lg shadow-primary hover:opacity-90 active:scale-[0.98] transition-all"\r
                        [ngClass]="\r
                            variant === 'danger'\r
                                ? 'bg-error text-white'\r
                                : 'bg-primary-cta text-on-primary-container'\r
                        "\r
                    >\r
                        {{ confirmLabel }}\r
                    </button>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
}\r
` }]
  }], null, { open: [{
    type: Input,
    args: [{ required: true }]
  }], title: [{
    type: Input,
    args: [{ required: true }]
  }], description: [{
    type: Input,
    args: [{ required: true }]
  }], confirmLabel: [{
    type: Input,
    args: [{ required: true }]
  }], cancelLabel: [{
    type: Input
  }], variant: [{
    type: Input
  }], confirmed: [{
    type: Output
  }], cancelled: [{
    type: Output
  }], confirmButton: [{
    type: ViewChild,
    args: ["confirmButton"]
  }], onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoConfirmModalComponent, { className: "DemoConfirmModalComponent", filePath: "src/app/modules/smart-enroll/demos/shared/demo-confirm-modal.component.ts", lineNumber: 26 });
})();

// src/app/modules/smart-enroll/demos/pages/delete-person/delete-person-demo.component.ts
function DeletePersonDemoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.deletePerson.heroTitleResult"), " ");
  }
}
function DeletePersonDemoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.deletePerson.heroTitleForm"), " ");
  }
}
function DeletePersonDemoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.deletePerson.heroSubtitleResult"), " ");
  }
}
function DeletePersonDemoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.deletePerson.heroSubtitleForm"), " ");
  }
}
function DeletePersonDemoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function DeletePersonDemoComponent_Conditional_10_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275element(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollDemos.deletePerson.loadingPersonCollections"), " ");
  }
}
function DeletePersonDemoComponent_Conditional_10_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19)(1, "span", 29);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.loadPersonDetailError, " ");
  }
}
function DeletePersonDemoComponent_Conditional_10_Conditional_41_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 29);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.collectionsError, " ");
  }
}
function DeletePersonDemoComponent_Conditional_10_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, DeletePersonDemoComponent_Conditional_10_Conditional_41_Conditional_7_Template, 4, 1, "div", 31);
    \u0275\u0275elementStart(8, "app-collection-single-select", 32);
    \u0275\u0275listener("selectedCodeChange", function DeletePersonDemoComponent_Conditional_10_Conditional_41_Template_app_collection_single_select_selectedCodeChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedCollectionCode = $event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "smartEnrollDemos.deletePerson.collectionLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.collectionsError ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r1.collectionsForPicker)("selectedCode", ctx_r1.selectedCollectionCode)("loading", ctx_r1.collectionsLoading || ctx_r1.loadingPersonDetail);
  }
}
function DeletePersonDemoComponent_Conditional_10_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 29);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function DeletePersonDemoComponent_Conditional_10_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.deletePerson.submitFull"), " ");
  }
}
function DeletePersonDemoComponent_Conditional_10_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.deletePerson.submitCollection"), " ");
  }
}
function DeletePersonDemoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10);
    \u0275\u0275listener("ngSubmit", function DeletePersonDemoComponent_Conditional_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleSubmit());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275element(2, "p", 12);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275element(4, "p", 12);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "label", 14);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementStart(10, "span", 15);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 16);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "app-person-single-select", 17);
    \u0275\u0275listener("selectedIdChange", function DeletePersonDemoComponent_Conditional_10_Template_app_person_single_select_selectedIdChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPersonSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, DeletePersonDemoComponent_Conditional_10_Conditional_17_Template, 4, 3, "p", 18)(18, DeletePersonDemoComponent_Conditional_10_Conditional_18_Template, 4, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "fieldset", 20)(20, "legend", 21);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "label", 22)(24, "input", 23);
    \u0275\u0275listener("change", function DeletePersonDemoComponent_Conditional_10_Template_input_change_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleModeChange("full"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span")(26, "span", 24);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 25);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "label", 22)(33, "input", 23);
    \u0275\u0275listener("change", function DeletePersonDemoComponent_Conditional_10_Template_input_change_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleModeChange("collection"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span")(35, "span", 24);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 25);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(41, DeletePersonDemoComponent_Conditional_10_Conditional_41_Template, 9, 10, "div")(42, DeletePersonDemoComponent_Conditional_10_Conditional_42_Template, 4, 1, "div", 26);
    \u0275\u0275elementStart(43, "button", 27);
    \u0275\u0275template(44, DeletePersonDemoComponent_Conditional_10_Conditional_44_Template, 2, 3)(45, DeletePersonDemoComponent_Conditional_10_Conditional_45_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(3, 22, "smartEnrollDemos.deletePerson.fullDeleteRich"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(5, 24, "smartEnrollDemos.deletePerson.partialDeleteRich"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 26, "smartEnrollDemos.deletePerson.personLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 28, "smartEnrollDemos.common.requiredStar"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 30, "smartEnrollDemos.deletePerson.personHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("items", ctx_r1.personRows)("selectedId", ctx_r1.selectedPersonId)("loading", ctx_r1.personsLoading)("error", ctx_r1.personsError);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.selectedPersonId == null ? null : ctx_r1.selectedPersonId.trim()) && ctx_r1.loadingPersonDetail ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loadPersonDetailError ? 18 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 32, "smartEnrollDemos.deletePerson.modeLegend"));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.mode === "full");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 34, "smartEnrollDemos.deletePerson.modeFullTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 36, "smartEnrollDemos.deletePerson.modeFullHint"));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.mode === "collection");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 38, "smartEnrollDemos.deletePerson.modeCollectionTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 40, "smartEnrollDemos.deletePerson.modeCollectionHint"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.mode === "collection" ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.error ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !(ctx_r1.selectedPersonId == null ? null : ctx_r1.selectedPersonId.trim()) || ctx_r1.mode === "collection" && (!(ctx_r1.selectedCollectionCode == null ? null : ctx_r1.selectedCollectionCode.trim()) || ctx_r1.loadingPersonDetail || !!ctx_r1.loadPersonDetailError) || ctx_r1.collectionsLoading || ctx_r1.personsLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mode === "full" ? 44 : 45);
  }
}
function DeletePersonDemoComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementStart(2, "p", 34);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "smartEnrollDemos.deletePerson.processing"));
  }
}
function DeletePersonDemoComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-create-person-result", 35);
    \u0275\u0275listener("enrollAnother", function DeletePersonDemoComponent_Conditional_12_Template_app_create_person_result_enrollAnother_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    })("backToDemos", function DeletePersonDemoComponent_Conditional_12_Template_app_create_person_result_backToDemos_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToDemos());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("result", ctx_r1.result);
  }
}
function DeletePersonDemoComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 36)(2, "div", 37)(3, "span", 38);
    \u0275\u0275text(4, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 39);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 40);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "details", 41)(13, "summary", 42)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 43);
    \u0275\u0275text(18, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "pre", 44);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "app-demo-result-actions", 45);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275listener("secondary", function DeletePersonDemoComponent_Conditional_13_Template_app_demo_result_actions_secondary_21_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    })("primary", function DeletePersonDemoComponent_Conditional_13_Template_app_demo_result_actions_primary_21_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToDemos());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "smartEnrollDemos.deletePerson.resultNoPersonDocTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "smartEnrollDemos.deletePerson.resultNoPersonDocBody"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "smartEnrollDemos.personResult.rawDebug"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.redactedResultJson);
    \u0275\u0275advance();
    \u0275\u0275property("secondaryLabel", \u0275\u0275pipeBind1(22, 13, "smartEnrollDemos.personResult.anotherAction"))("primaryLabel", \u0275\u0275pipeBind1(23, 15, "smartEnrollDemos.common.backToDemos"))("primaryRouterLink", null);
  }
}
function DeletePersonDemoComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 8)(1, "summary", 46)(2, "span", 47)(3, "span", 48);
    \u0275\u0275text(4, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 49);
    \u0275\u0275text(8, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 50)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "a", 51);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 52);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275element(19, "br");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "smartEnrollDemos.deletePerson.apiRefSummary"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "smartEnrollDemos.deletePerson.apiRefOfficialDocs"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 9, "smartEnrollDemos.deletePerson.apiRefLinkLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "smartEnrollDemos.deletePerson.apiRefEndpointLine"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 13, "smartEnrollDemos.deletePerson.apiRefOptionalQuery"), " ");
  }
}
var DOCS_BASE = "https://docs.verifik.co";
var RELATED_DOC_HREFS = [
  `${DOCS_BASE}/resources/the-person-object`,
  `${DOCS_BASE}/resources/list-all-persons`,
  `${DOCS_BASE}/resources/retrieve-a-person`,
  `${DOCS_BASE}/resources/persons/delete-a-person`,
  `${DOCS_BASE}/resources/create-a-person`,
  `${DOCS_BASE}/resources/create-a-person-with-liveness`,
  `${DOCS_BASE}/resources/persons/update-a-person`,
  `${DOCS_BASE}/resources/persons`
];
var RELATED_DOC_BADGE_MUTED = [true, false, false, false, false, false, false, true];
var readPersonPayload = (body) => {
  if (!body || typeof body !== "object" || Array.isArray(body))
    return null;
  const envelope = body;
  const inner = envelope["data"];
  if (inner && typeof inner === "object" && !Array.isArray(inner)) {
    return inner;
  }
  return null;
};
var isPlainObject = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
var redactThumbnailsForDebug = (value) => {
  if (value === null || typeof value !== "object")
    return value;
  if (Array.isArray(value))
    return value.map(redactThumbnailsForDebug);
  const o = value;
  const next = {};
  for (const [k, v] of Object.entries(o)) {
    if (k === "thumbnail" && typeof v === "string" && v.length > 64) {
      next[k] = `[base64 image, ${v.length} characters]`;
    } else {
      next[k] = redactThumbnailsForDebug(v);
    }
  }
  return next;
};
var DeletePersonDemoComponent = class _DeletePersonDemoComponent {
  constructor() {
    this._api = inject(BiometricsDemoApiService);
    this._router = inject(Router);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this.authChecked = false;
    this.step = "form";
    this.selectedPersonId = null;
    this.personsLoading = false;
    this.personsError = null;
    this.personRows = [];
    this.mode = "full";
    this.selectedCollectionCode = null;
    this.collectionItems = [];
    this.collectionsLoading = false;
    this.collectionsError = null;
    this.error = null;
    this.result = null;
    this.loadingPersonDetail = false;
    this.loadPersonDetailError = null;
    this.personMemberCodes = [];
    this.confirmOpen = false;
    this.relatedDocs = [];
  }
  ngOnInit() {
    if (!this._api.ensureAuthenticated()) {
      this.authChecked = true;
      return;
    }
    this.authChecked = true;
    this.relatedDocs = this.buildRelatedDocs();
    this.loadCollections();
    this.loadPersons();
  }
  get showApiReference() {
    return this.step !== "result";
  }
  get collectionsForPicker() {
    if (!this.personMemberCodes.length)
      return [];
    const memberSet = new Set(this.personMemberCodes);
    return this.collectionItems.filter((c) => memberSet.has(c.code) || memberSet.has(c._id));
  }
  get resultData() {
    return this.result && "data" in this.result ? this.result["data"] : void 0;
  }
  get hasPersonPayload() {
    return isPlainObject(this.resultData);
  }
  get confirmTitle() {
    return this.mode === "full" ? this._transloco.translate("smartEnrollDemos.deletePerson.confirmTitleFull") : this._transloco.translate("smartEnrollDemos.deletePerson.confirmTitleCollection");
  }
  get confirmDescription() {
    return this.mode === "full" ? this._transloco.translate("smartEnrollDemos.deletePerson.confirmDescFull") : this._transloco.translate("smartEnrollDemos.deletePerson.confirmDescCollection");
  }
  get confirmLabel() {
    return this.mode === "full" ? this._transloco.translate("smartEnrollDemos.deletePerson.confirmSubmitFull") : this._transloco.translate("smartEnrollDemos.deletePerson.confirmSubmitCollection");
  }
  get redactedResultJson() {
    return this.result ? JSON.stringify(redactThumbnailsForDebug(this.result), null, 2) : "";
  }
  loadCollections() {
    this.collectionsLoading = true;
    this.collectionsError = null;
    this._cdr.markForCheck();
    this._api.listCollections().subscribe({
      next: (items) => {
        this.collectionItems = items;
        this.collectionsLoading = false;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.collectionsError = err.error ?? err.message ?? "Failed to load collections";
        this.collectionItems = [];
        this.collectionsLoading = false;
        this._cdr.markForCheck();
      }
    });
  }
  loadPersons() {
    this.personsLoading = true;
    this.personsError = null;
    this._cdr.markForCheck();
    this._api.getPersons({ page: 1, limit: 200 }).subscribe({
      next: (data) => {
        const body = data;
        const raw = normalizePersonsListPayload(body?.data);
        this.personRows = mapPersonDocsToListItems(raw);
        this.personsLoading = false;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.personsError = err.error ?? err.message ?? "Failed to load people";
        this.personRows = [];
        this.personsLoading = false;
        this._cdr.markForCheck();
      }
    });
  }
  onPersonSelected(id) {
    this.selectedPersonId = id;
    this.selectedCollectionCode = null;
    if (!id?.trim()) {
      this.personMemberCodes = [];
      this.loadPersonDetailError = null;
      this.loadingPersonDetail = false;
      this._cdr.markForCheck();
      return;
    }
    this.loadPersonDetail(id.trim());
  }
  loadPersonDetail(id) {
    this.loadingPersonDetail = true;
    this.loadPersonDetailError = null;
    this._cdr.markForCheck();
    this._api.getPerson(id).subscribe({
      next: (data) => {
        this.loadingPersonDetail = false;
        const person = readPersonPayload(data);
        const cols = person && Array.isArray(person["collections"]) ? person["collections"].filter((c) => typeof c === "string") : [];
        this.personMemberCodes = cols;
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.loadingPersonDetail = false;
        this.loadPersonDetailError = err.error ?? err.message ?? "Failed to load person";
        this.personMemberCodes = [];
        this._cdr.markForCheck();
      }
    });
  }
  handleModeChange(next) {
    this.mode = next;
    if (next === "full")
      this.selectedCollectionCode = null;
  }
  handleSubmit() {
    const id = this.selectedPersonId?.trim();
    if (!id)
      return;
    if (this.mode === "collection" && !this.selectedCollectionCode?.trim()) {
      this.error = this._transloco.translate("smartEnrollDemos.deletePerson.errSelectCollection");
      this._cdr.markForCheck();
      return;
    }
    this.error = null;
    this.confirmOpen = true;
    this._cdr.markForCheck();
  }
  performDelete() {
    this.confirmOpen = false;
    const id = this.selectedPersonId?.trim();
    if (!id)
      return;
    this.step = "processing";
    this.error = null;
    this._cdr.markForCheck();
    const collection = this.mode === "collection" && this.selectedCollectionCode ? this.selectedCollectionCode.trim() : void 0;
    this._api.deletePerson(id, collection).subscribe({
      next: (data) => {
        this.result = data;
        this.step = "result";
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.error = err.error ?? err.message ?? "Request failed";
        this.step = "form";
        this._cdr.markForCheck();
      }
    });
  }
  cancelConfirm() {
    this.confirmOpen = false;
  }
  reset() {
    this.step = "form";
    this.selectedPersonId = null;
    this.mode = "full";
    this.selectedCollectionCode = null;
    this.personMemberCodes = [];
    this.loadPersonDetailError = null;
    this.confirmOpen = false;
    this.error = null;
    this.result = null;
  }
  backToDemos() {
    void this._router.navigate(["/smart-enroll/demos"]);
  }
  buildRelatedDocs() {
    return RELATED_DOC_HREFS.map((href, i) => ({
      href,
      title: this._transloco.translate(`smartEnrollDemos.deletePerson.relatedDocs.${i}.title`),
      description: this._transloco.translate(`smartEnrollDemos.deletePerson.relatedDocs.${i}.description`),
      badge: this._transloco.translate(`smartEnrollDemos.deletePerson.relatedDocs.${i}.badge`),
      badgeMuted: RELATED_DOC_BADGE_MUTED[i]
    }));
  }
  static {
    this.\u0275fac = function DeletePersonDemoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeletePersonDemoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeletePersonDemoComponent, selectors: [["app-delete-person-demo"]], decls: 16, vars: 9, consts: [["variant", "danger", 3, "confirmed", "cancelled", "open", "title", "description", "confirmLabel"], [1, "mb-8"], [1, "text-3xl", "font-black", "tracking-tight", "text-on-surface", "mb-2"], [1, "text-on-surface-variant"], [1, "h-60", "rounded-xl", "bg-surface-container-high", "animate-pulse"], [1, "space-y-5"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "gap-4"], ["mode", "delete", 3, "result"], [1, "mt-10", "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "text-left", "max-w-3xl", "mx-auto", "w-full", "px-4", "py-3", "group"], [3, "items"], [1, "space-y-5", 3, "ngSubmit"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "p-4", "space-y-2", "text-sm", "text-on-surface-variant"], [3, "innerHTML"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "p-4", "space-y-3"], ["id", "del-person-label", 1, "block", "text-sm", "font-semibold", "text-on-surface"], [1, "text-error"], [1, "text-xs", "text-on-surface-variant"], ["labelId", "del-person-label", 3, "selectedIdChange", "items", "selectedId", "loading", "error"], [1, "text-sm", "text-on-surface-variant", "flex", "items-center", "gap-2"], [1, "text-sm", "text-error", "flex", "items-center", "gap-1"], [1, "space-y-3", "rounded-xl", "border", "border-outline-variant/20", "p-4"], [1, "text-sm", "font-semibold", "text-on-surface", "px-1"], [1, "flex", "items-start", "gap-3", "cursor-pointer"], ["type", "radio", "name", "del-mode", 1, "mt-1", 3, "change", "checked"], [1, "font-medium", "text-on-surface"], [1, "block", "text-xs", "text-on-surface-variant"], [1, "px-4", "py-3", "bg-error-container/20", "border", "border-error/20", "rounded-lg", "flex", "items-center", "gap-2", "text-sm", "text-error"], ["type", "submit", 1, "w-full", "py-3", "bg-error", "text-white", "font-bold", "rounded-lg", "shadow-primary", "hover:opacity-90", "active:scale-95", "transition-all", "disabled:opacity-50", 3, "disabled"], [1, "inline-block", "h-4", "w-4", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "material-symbols-outlined", "text-sm"], ["id", "del-col-label", 1, "block", "text-sm", "font-semibold", "text-on-surface", "mb-1.5"], [1, "mb-2", "text-sm", "text-error", "flex", "items-center", "gap-1.5"], ["labelId", "del-col-label", 3, "selectedCodeChange", "items", "selectedCode", "loading"], [1, "w-12", "h-12", "border-2", "border-primary", "border-t-transparent", "rounded-full", "animate-spin"], [1, "text-on-surface", "font-semibold"], ["mode", "delete", 3, "enrollAnother", "backToDemos", "result"], [1, "rounded-2xl", "bg-surface-container-low", "border", "border-primary/20", "p-6"], [1, "flex", "items-center", "gap-3"], [1, "material-symbols-outlined", "text-primary", "text-3xl"], [1, "font-bold", "text-on-surface", "text-lg"], [1, "text-sm", "text-on-surface-variant", "mt-1"], [1, "rounded-xl", "border", "border-outline-variant/20", "bg-surface-container-low/50", "px-4", "py-3", "group"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-on-surface-variant", "flex", "items-center", "justify-between", "gap-2"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform", "text-lg"], [1, "mt-3", "text-[0.65rem]", "font-mono", "bg-surface-container-high/80", "rounded-lg", "p-3", "overflow-x-auto", "text-on-surface", "whitespace-pre-wrap"], [3, "secondary", "primary", "secondaryLabel", "primaryLabel", "primaryRouterLink"], [1, "cursor-pointer", "list-none", "font-bold", "text-sm", "text-primary", "flex", "items-center", "justify-between", "gap-2"], [1, "flex", "items-center", "gap-2"], [1, "material-symbols-outlined", "text-lg"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "group-open:rotate-180", "transition-transform"], [1, "mt-4", "space-y-3", "text-sm", "text-on-surface-variant", "border-t", "border-outline-variant/15", "pt-4"], ["href", "https://docs.verifik.co/resources/persons/delete-a-person", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "underline", "underline-offset-2"], [1, "text-xs", "leading-relaxed", "font-mono"]], template: function DeletePersonDemoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-demo-confirm-modal", 0);
        \u0275\u0275listener("confirmed", function DeletePersonDemoComponent_Template_app_demo_confirm_modal_confirmed_0_listener() {
          return ctx.performDelete();
        })("cancelled", function DeletePersonDemoComponent_Template_app_demo_confirm_modal_cancelled_0_listener() {
          return ctx.cancelConfirm();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(1, "app-demo-page-shell")(2, "div", 1)(3, "h2", 2);
        \u0275\u0275template(4, DeletePersonDemoComponent_Conditional_4_Template, 2, 3)(5, DeletePersonDemoComponent_Conditional_5_Template, 2, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275template(7, DeletePersonDemoComponent_Conditional_7_Template, 2, 3)(8, DeletePersonDemoComponent_Conditional_8_Template, 2, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, DeletePersonDemoComponent_Conditional_9_Template, 1, 0, "div", 4)(10, DeletePersonDemoComponent_Conditional_10_Template, 46, 42, "form", 5)(11, DeletePersonDemoComponent_Conditional_11_Template, 5, 3, "div", 6)(12, DeletePersonDemoComponent_Conditional_12_Template, 1, 1, "app-create-person-result", 7)(13, DeletePersonDemoComponent_Conditional_13_Template, 24, 17, "div", 5)(14, DeletePersonDemoComponent_Conditional_14_Template, 22, 15, "details", 8);
        \u0275\u0275element(15, "app-demo-related-docs-section", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("open", ctx.confirmOpen)("title", ctx.confirmTitle)("description", ctx.confirmDescription)("confirmLabel", ctx.confirmLabel);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.step === "result" ? 4 : 5);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.step === "result" ? 7 : 8);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.authChecked ? 9 : ctx.step === "form" ? 10 : ctx.step === "processing" ? 11 : ctx.hasPersonPayload ? 12 : 13);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.showApiReference ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("items", ctx.relatedDocs);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      NgForm,
      TranslocoModule,
      TranslocoPipe,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      DemoConfirmModalComponent,
      DemoResultActionsComponent,
      CollectionSingleSelectComponent,
      CreatePersonResultComponent,
      PersonSingleSelectComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeletePersonDemoComponent, [{
    type: Component,
    args: [{ selector: "app-delete-person-demo", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TranslocoModule,
      DemoPageShellComponent,
      DemoRelatedDocsSectionComponent,
      DemoConfirmModalComponent,
      DemoResultActionsComponent,
      CollectionSingleSelectComponent,
      CreatePersonResultComponent,
      PersonSingleSelectComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-demo-confirm-modal\r
    [open]="confirmOpen"\r
    [title]="confirmTitle"\r
    [description]="confirmDescription"\r
    [confirmLabel]="confirmLabel"\r
    variant="danger"\r
    (confirmed)="performDelete()"\r
    (cancelled)="cancelConfirm()"\r
/>\r
\r
<app-demo-page-shell>\r
    <div class="mb-8">\r
        <h2 class="text-3xl font-black tracking-tight text-on-surface mb-2">\r
            @if (step === 'result') {\r
                {{ 'smartEnrollDemos.deletePerson.heroTitleResult' | transloco }}\r
            } @else {\r
                {{ 'smartEnrollDemos.deletePerson.heroTitleForm' | transloco }}\r
            }\r
        </h2>\r
        <p class="text-on-surface-variant">\r
            @if (step === 'result') {\r
                {{ 'smartEnrollDemos.deletePerson.heroSubtitleResult' | transloco }}\r
            } @else {\r
                {{ 'smartEnrollDemos.deletePerson.heroSubtitleForm' | transloco }}\r
            }\r
        </p>\r
    </div>\r
\r
    @if (!authChecked) {\r
        <div class="h-60 rounded-xl bg-surface-container-high animate-pulse"></div>\r
    } @else if (step === 'form') {\r
        <form (ngSubmit)="handleSubmit()" class="space-y-5">\r
            <div class="rounded-xl border border-outline-variant/20 bg-surface-container-low/50 p-4 space-y-2 text-sm text-on-surface-variant">\r
                <p [innerHTML]="'smartEnrollDemos.deletePerson.fullDeleteRich' | transloco"></p>\r
                <p [innerHTML]="'smartEnrollDemos.deletePerson.partialDeleteRich' | transloco"></p>\r
            </div>\r
\r
            <div class="rounded-xl border border-outline-variant/20 bg-surface-container-low/50 p-4 space-y-3">\r
                <label class="block text-sm font-semibold text-on-surface" id="del-person-label">\r
                    {{ 'smartEnrollDemos.deletePerson.personLabel' | transloco }}\r
                    <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                </label>\r
                <p class="text-xs text-on-surface-variant">{{ 'smartEnrollDemos.deletePerson.personHint' | transloco }}</p>\r
                <app-person-single-select\r
                    labelId="del-person-label"\r
                    [items]="personRows"\r
                    [selectedId]="selectedPersonId"\r
                    (selectedIdChange)="onPersonSelected($event)"\r
                    [loading]="personsLoading"\r
                    [error]="personsError"\r
                />\r
                @if (selectedPersonId?.trim() && loadingPersonDetail) {\r
                    <p class="text-sm text-on-surface-variant flex items-center gap-2">\r
                        <span class="inline-block h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>\r
                        {{ 'smartEnrollDemos.deletePerson.loadingPersonCollections' | transloco }}\r
                    </p>\r
                }\r
                @if (loadPersonDetailError) {\r
                    <p class="text-sm text-error flex items-center gap-1">\r
                        <span class="material-symbols-outlined text-sm">error_outline</span>\r
                        {{ loadPersonDetailError }}\r
                    </p>\r
                }\r
            </div>\r
\r
            <fieldset class="space-y-3 rounded-xl border border-outline-variant/20 p-4">\r
                <legend class="text-sm font-semibold text-on-surface px-1">{{ 'smartEnrollDemos.deletePerson.modeLegend' | transloco }}</legend>\r
                <label class="flex items-start gap-3 cursor-pointer">\r
                    <input\r
                        type="radio"\r
                        name="del-mode"\r
                        [checked]="mode === 'full'"\r
                        (change)="handleModeChange('full')"\r
                        class="mt-1"\r
                    />\r
                    <span>\r
                        <span class="font-medium text-on-surface">{{ 'smartEnrollDemos.deletePerson.modeFullTitle' | transloco }}</span>\r
                        <span class="block text-xs text-on-surface-variant">{{ 'smartEnrollDemos.deletePerson.modeFullHint' | transloco }}</span>\r
                    </span>\r
                </label>\r
                <label class="flex items-start gap-3 cursor-pointer">\r
                    <input\r
                        type="radio"\r
                        name="del-mode"\r
                        [checked]="mode === 'collection'"\r
                        (change)="handleModeChange('collection')"\r
                        class="mt-1"\r
                    />\r
                    <span>\r
                        <span class="font-medium text-on-surface">{{ 'smartEnrollDemos.deletePerson.modeCollectionTitle' | transloco }}</span>\r
                        <span class="block text-xs text-on-surface-variant">{{ 'smartEnrollDemos.deletePerson.modeCollectionHint' | transloco }}</span>\r
                    </span>\r
                </label>\r
            </fieldset>\r
\r
            @if (mode === 'collection') {\r
                <div>\r
                    <label class="block text-sm font-semibold text-on-surface mb-1.5" id="del-col-label">\r
                        {{ 'smartEnrollDemos.deletePerson.collectionLabel' | transloco }}\r
                        <span class="text-error">{{ 'smartEnrollDemos.common.requiredStar' | transloco }}</span>\r
                    </label>\r
                    @if (collectionsError) {\r
                        <div class="mb-2 text-sm text-error flex items-center gap-1.5">\r
                            <span class="material-symbols-outlined text-sm">error_outline</span>\r
                            {{ collectionsError }}\r
                        </div>\r
                    }\r
                    <app-collection-single-select\r
                        labelId="del-col-label"\r
                        [items]="collectionsForPicker"\r
                        [selectedCode]="selectedCollectionCode"\r
                        (selectedCodeChange)="selectedCollectionCode = $event"\r
                        [loading]="collectionsLoading || loadingPersonDetail"\r
                    />\r
                </div>\r
            }\r
\r
            @if (error) {\r
                <div class="px-4 py-3 bg-error-container/20 border border-error/20 rounded-lg flex items-center gap-2 text-sm text-error">\r
                    <span class="material-symbols-outlined text-sm">error_outline</span>\r
                    {{ error }}\r
                </div>\r
            }\r
\r
            <button\r
                type="submit"\r
                [disabled]="\r
                    !selectedPersonId?.trim() ||\r
                    (mode === 'collection' &&\r
                        (!selectedCollectionCode?.trim() || loadingPersonDetail || !!loadPersonDetailError)) ||\r
                    collectionsLoading ||\r
                    personsLoading\r
                "\r
                class="w-full py-3 bg-error text-white font-bold rounded-lg shadow-primary hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"\r
            >\r
                @if (mode === 'full') {\r
                    {{ 'smartEnrollDemos.deletePerson.submitFull' | transloco }}\r
                } @else {\r
                    {{ 'smartEnrollDemos.deletePerson.submitCollection' | transloco }}\r
                }\r
            </button>\r
        </form>\r
    } @else if (step === 'processing') {\r
        <div class="flex flex-col items-center justify-center py-20 gap-4">\r
            <div class="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>\r
            <p class="text-on-surface font-semibold">{{ 'smartEnrollDemos.deletePerson.processing' | transloco }}</p>\r
        </div>\r
    } @else if (hasPersonPayload) {\r
        <app-create-person-result\r
            mode="delete"\r
            [result]="result"\r
            (enrollAnother)="reset()"\r
            (backToDemos)="backToDemos()"\r
        />\r
    } @else {\r
        <div class="space-y-5">\r
            <div class="rounded-2xl bg-surface-container-low border border-primary/20 p-6">\r
                <div class="flex items-center gap-3">\r
                    <span class="material-symbols-outlined text-primary text-3xl">task_alt</span>\r
                    <div>\r
                        <p class="font-bold text-on-surface text-lg">{{ 'smartEnrollDemos.deletePerson.resultNoPersonDocTitle' | transloco }}</p>\r
                        <p class="text-sm text-on-surface-variant mt-1">{{ 'smartEnrollDemos.deletePerson.resultNoPersonDocBody' | transloco }}</p>\r
                    </div>\r
                </div>\r
            </div>\r
            <details class="rounded-xl border border-outline-variant/20 bg-surface-container-low/50 px-4 py-3 group">\r
                <summary class="cursor-pointer list-none font-bold text-sm text-on-surface-variant flex items-center justify-between gap-2">\r
                    <span>{{ 'smartEnrollDemos.personResult.rawDebug' | transloco }}</span>\r
                    <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform text-lg">\r
                        expand_more\r
                    </span>\r
                </summary>\r
                <pre class="mt-3 text-[0.65rem] font-mono bg-surface-container-high/80 rounded-lg p-3 overflow-x-auto text-on-surface whitespace-pre-wrap">{{\r
                    redactedResultJson\r
                }}</pre>\r
            </details>\r
            <app-demo-result-actions\r
                [secondaryLabel]="'smartEnrollDemos.personResult.anotherAction' | transloco"\r
                [primaryLabel]="'smartEnrollDemos.common.backToDemos' | transloco"\r
                [primaryRouterLink]="null"\r
                (secondary)="reset()"\r
                (primary)="backToDemos()"\r
            />\r
        </div>\r
    }\r
\r
    @if (showApiReference) {\r
        <details class="mt-10 rounded-xl border border-outline-variant/20 bg-surface-container-low/50 text-left max-w-3xl mx-auto w-full px-4 py-3 group">\r
            <summary class="cursor-pointer list-none font-bold text-sm text-primary flex items-center justify-between gap-2">\r
                <span class="flex items-center gap-2">\r
                    <span class="material-symbols-outlined text-lg">menu_book</span>\r
                    {{ 'smartEnrollDemos.deletePerson.apiRefSummary' | transloco }}\r
                </span>\r
                <span class="material-symbols-outlined text-on-surface-variant/70 group-open:rotate-180 transition-transform">\r
                    expand_more\r
                </span>\r
            </summary>\r
            <div class="mt-4 space-y-3 text-sm text-on-surface-variant border-t border-outline-variant/15 pt-4">\r
                <p>\r
                    {{ 'smartEnrollDemos.deletePerson.apiRefOfficialDocs' | transloco }}\r
                    <a\r
                        href="https://docs.verifik.co/resources/persons/delete-a-person"\r
                        target="_blank"\r
                        rel="noopener noreferrer"\r
                        class="text-primary underline underline-offset-2"\r
                    >\r
                        {{ 'smartEnrollDemos.deletePerson.apiRefLinkLabel' | transloco }}\r
                    </a>\r
                </p>\r
                <p class="text-xs leading-relaxed font-mono">\r
                    {{ 'smartEnrollDemos.deletePerson.apiRefEndpointLine' | transloco }}\r
                    <br />\r
                    {{ 'smartEnrollDemos.deletePerson.apiRefOptionalQuery' | transloco }}\r
                </p>\r
            </div>\r
        </details>\r
    }\r
\r
    <app-demo-related-docs-section [items]="relatedDocs" />\r
</app-demo-page-shell>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeletePersonDemoComponent, { className: "DeletePersonDemoComponent", filePath: "src/app/modules/smart-enroll/demos/pages/delete-person/delete-person-demo.component.ts", lineNumber: 91 });
})();
export {
  DeletePersonDemoComponent
};
//# sourceMappingURL=chunk-ZYS3Q4MR.js.map
