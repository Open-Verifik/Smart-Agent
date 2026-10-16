import {
  truncateCode
} from "./chunk-CRJOXNLH.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-R5W3A6HI.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  EventEmitter,
  HostListener,
  Input,
  NgClass,
  Output,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-enroll/demos/shared/collection-multi-select.component.ts
var _c0 = ["searchInput"];
var _c1 = (a0) => ({ count: a0 });
var _c2 = (a0) => ({ label: a0 });
var _forTrack0 = ($index, $item) => $item._id;
function CollectionMultiSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.common.loadingCollections"), " ");
  }
}
function CollectionMultiSelectComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.common.selectCollections"), " ");
  }
}
function CollectionMultiSelectComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.common.collectionSelected"), " ");
  }
}
function CollectionMultiSelectComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "smartEnrollDemos.common.collectionsSelected", \u0275\u0275pureFunction1(4, _c1, ctx_r0.selectedIds.length)), " ");
  }
}
function CollectionMultiSelectComponent_Conditional_10_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("innerHTML", ctx_r0.emptySlot, \u0275\u0275sanitizeHtml);
  }
}
function CollectionMultiSelectComponent_Conditional_10_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollDemos.common.noCollectionsAvailable"), " ");
  }
}
function CollectionMultiSelectComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, CollectionMultiSelectComponent_Conditional_10_Conditional_1_Conditional_1_Template, 1, 1, "span", 8)(2, CollectionMultiSelectComponent_Conditional_10_Conditional_1_Conditional_2_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.emptySlot ? 1 : 2);
  }
}
function CollectionMultiSelectComponent_Conditional_10_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollDemos.common.noMatches"), " ");
  }
}
function CollectionMultiSelectComponent_Conditional_10_Conditional_2_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 14)(1, "label", 15)(2, "input", 16);
    \u0275\u0275listener("change", function CollectionMultiSelectComponent_Conditional_10_Conditional_2_Conditional_9_For_1_Template_input_change_2_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.toggle(item_r4._id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17)(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.selectedIds.includes(item_r4._id) ? "bg-primary/10" : "hover:bg-surface-container-high/80");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.selectedIds.includes(item_r4._id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.truncateCode(item_r4.code));
  }
}
function CollectionMultiSelectComponent_Conditional_10_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CollectionMultiSelectComponent_Conditional_10_Conditional_2_Conditional_9_For_1_Template, 8, 4, "li", 14, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.filtered);
  }
}
function CollectionMultiSelectComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 2)(2, "span", 10);
    \u0275\u0275text(3, " search ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 11, 0);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function CollectionMultiSelectComponent_Conditional_10_Conditional_2_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.search, $event) || (ctx_r0.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ul", 12);
    \u0275\u0275template(8, CollectionMultiSelectComponent_Conditional_10_Conditional_2_Conditional_8_Template, 3, 3, "li", 13)(9, CollectionMultiSelectComponent_Conditional_10_Conditional_2_Conditional_9_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.search);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 4, "smartEnrollDemos.common.searchCollectionsPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", ctx_r0.listId);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.filtered.length === 0 ? 8 : 9);
  }
}
function CollectionMultiSelectComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, CollectionMultiSelectComponent_Conditional_10_Conditional_1_Template, 3, 1, "div", 7)(2, CollectionMultiSelectComponent_Conditional_10_Conditional_2_Template, 10, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.items.length === 0 ? 1 : 2);
  }
}
function CollectionMultiSelectComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 20)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 22);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("click", function CollectionMultiSelectComponent_Conditional_11_For_2_Template_button_click_3_listener() {
      const id_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(id_r6));
    });
    \u0275\u0275elementStart(5, "span", 23);
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_13_0;
    const id_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_11_0 = (tmp_11_0 = ctx_r0.byId.get(id_r6)) == null ? null : tmp_11_0.name) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : id_r6);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.disabled);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(4, 3, "smartEnrollDemos.common.removeItemAria", \u0275\u0275pureFunction1(6, _c2, (tmp_13_0 = (tmp_13_0 = ctx_r0.byId.get(id_r6)) == null ? null : tmp_13_0.name) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : id_r6)));
  }
}
function CollectionMultiSelectComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, CollectionMultiSelectComponent_Conditional_11_For_2_Template, 7, 8, "span", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.selectedIds);
  }
}
var CollectionMultiSelectComponent = class _CollectionMultiSelectComponent {
  constructor() {
    this.items = [];
    this.selectedIds = [];
    this.disabled = false;
    this.loading = false;
    this.selectedIdsChange = new EventEmitter();
    this.open = false;
    this.search = "";
    this.listId = `col-multi-${Math.random().toString(36).slice(2, 9)}`;
    this.truncateCode = truncateCode;
  }
  get filtered() {
    const q = this.search.trim().toLowerCase();
    if (!q)
      return this.items;
    return this.items.filter((item) => [item.name, item.code, item.description ?? ""].join(" ").toLowerCase().includes(q));
  }
  get byId() {
    return new Map(this.items.map((item) => [item._id, item]));
  }
  toggleOpen() {
    if (this.disabled || this.loading)
      return;
    this.open = !this.open;
    if (this.open) {
      setTimeout(() => this.searchInput?.nativeElement.focus(), 0);
    } else {
      this.search = "";
    }
  }
  close() {
    this.open = false;
    this.search = "";
  }
  toggle(id) {
    const next = this.selectedIds.includes(id) ? this.selectedIds.filter((x) => x !== id) : [...this.selectedIds, id];
    this.selectedIdsChange.emit(next);
  }
  remove(id) {
    this.selectedIdsChange.emit(this.selectedIds.filter((x) => x !== id));
  }
  onEscape() {
    if (this.open)
      this.close();
  }
  onDocClick(event) {
    if (!this.open)
      return;
    const target = event.target;
    if (!event.currentTarget.body.contains(target))
      return;
  }
  static {
    this.\u0275fac = function CollectionMultiSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CollectionMultiSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionMultiSelectComponent, selectors: [["app-collection-multi-select"]], viewQuery: function CollectionMultiSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
      }
    }, hostBindings: function CollectionMultiSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function CollectionMultiSelectComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEscape();
        }, false, \u0275\u0275resolveDocument)("mousedown", function CollectionMultiSelectComponent_mousedown_HostBindingHandler($event) {
          return ctx.onDocClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { items: "items", selectedIds: "selectedIds", disabled: "disabled", loading: "loading", labelId: "labelId", emptySlot: "emptySlot" }, outputs: { selectedIdsChange: "selectedIdsChange" }, decls: 12, vars: 10, consts: [["searchInput", ""], [1, "space-y-2", 3, "mousedown"], [1, "relative"], ["type", "button", 1, "w-full", "flex", "items-center", "justify-between", "gap-2", "bg-surface-container-low", "border", "border-outline-variant/30", "rounded-lg", "px-4", "py-3", "text-left", "text-sm", "text-on-surface", "focus:outline-none", "focus:border-primary/60", "transition-colors", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "click", "id", "disabled"], [1, "material-symbols-outlined", "text-on-surface-variant/70", "shrink-0"], [1, "absolute", "left-0", "right-0", "top-[calc(100%+6px)]", "z-50", "flex", "max-h-[min(320px,calc(100vh-220px))]", "flex-col", "overflow-hidden", "rounded-lg", "border", "border-outline-variant/30", "bg-surface-container-low", "shadow-lg"], [1, "flex", "flex-wrap", "gap-2", "pt-1"], [1, "px-4", "py-6", "text-sm", "text-on-surface-variant", "text-center"], [3, "innerHTML"], [1, "shrink-0", "border-b", "border-outline-variant/20", "p-2"], ["aria-hidden", "true", 1, "material-symbols-outlined", "pointer-events-none", "absolute", "left-2.5", "top-1/2", "-translate-y-1/2", "text-[18px]", "text-on-surface-variant/70"], ["type", "search", 1, "w-full", "rounded-lg", "border", "border-outline-variant/30", "bg-surface-container-high/50", "py-2", "pl-9", "pr-3", "text-sm", "text-on-surface", "outline-none", "placeholder:text-on-surface-variant/50", "focus:border-primary/60", 3, "ngModelChange", "ngModel", "placeholder"], [1, "min-h-0", "flex-1", "overflow-y-auto", "overscroll-contain", "py-1", 3, "id"], [1, "px-3", "py-6", "text-center", "text-xs", "text-on-surface-variant"], [1, "px-1"], [1, "flex", "cursor-pointer", "items-start", "gap-3", "rounded-md", "px-2", "py-2", "text-left", "text-sm", "transition-colors", 3, "ngClass"], ["type", "checkbox", 1, "mt-0.5", "h-4", "w-4", "shrink-0", "rounded", "border-outline-variant", "text-primary", "focus:ring-primary/40", 3, "change", "checked"], [1, "min-w-0", "flex-1"], [1, "font-medium", "text-on-surface", "block", "truncate"], [1, "text-xs", "text-on-surface-variant", "font-mono"], [1, "inline-flex", "items-center", "gap-1", "pl-2.5", "pr-1", "py-1", "rounded-lg", "bg-primary/15", "text-on-surface", "text-xs", "font-medium", "border", "border-primary/25"], [1, "max-w-[200px]", "truncate"], ["type", "button", 1, "shrink-0", "p-0.5", "rounded", "hover:bg-primary/20", "text-on-surface-variant", "disabled:opacity-50", 3, "click", "disabled"], [1, "material-symbols-outlined", "text-[16px]"]], template: function CollectionMultiSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("mousedown", function CollectionMultiSelectComponent_Template_div_mousedown_0_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(1, "div", 2)(2, "button", 3);
        \u0275\u0275listener("click", function CollectionMultiSelectComponent_Template_button_click_2_listener() {
          return ctx.toggleOpen();
        });
        \u0275\u0275elementStart(3, "span");
        \u0275\u0275template(4, CollectionMultiSelectComponent_Conditional_4_Template, 2, 3)(5, CollectionMultiSelectComponent_Conditional_5_Template, 2, 3)(6, CollectionMultiSelectComponent_Conditional_6_Template, 2, 3)(7, CollectionMultiSelectComponent_Conditional_7_Template, 2, 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 4);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, CollectionMultiSelectComponent_Conditional_10_Template, 3, 1, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, CollectionMultiSelectComponent_Conditional_11_Template, 3, 0, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.labelId)("disabled", ctx.disabled || ctx.loading);
        \u0275\u0275attribute("aria-expanded", ctx.open)("aria-controls", ctx.open ? ctx.listId : null);
        \u0275\u0275advance();
        \u0275\u0275classProp("text-on-surface-variant", ctx.selectedIds.length === 0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 4 : ctx.selectedIds.length === 0 ? 5 : ctx.selectedIds.length === 1 ? 6 : 7);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.open ? "expand_less" : "expand_more", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.open && !ctx.loading ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selectedIds.length > 0 ? 11 : -1);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslocoModule, TranslocoPipe], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionMultiSelectComponent, [{
    type: Component,
    args: [{ selector: "app-collection-multi-select", standalone: true, imports: [CommonModule, FormsModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="space-y-2" (mousedown)="$event.stopPropagation()">\r
    <div class="relative">\r
        <button\r
            type="button"\r
            [id]="labelId"\r
            [disabled]="disabled || loading"\r
            [attr.aria-expanded]="open"\r
            [attr.aria-controls]="open ? listId : null"\r
            (click)="toggleOpen()"\r
            class="w-full flex items-center justify-between gap-2 bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-left text-sm text-on-surface focus:outline-none focus:border-primary/60 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"\r
        >\r
            <span [class.text-on-surface-variant]="selectedIds.length === 0">\r
                @if (loading) {\r
                    {{ 'smartEnrollDemos.common.loadingCollections' | transloco }}\r
                } @else if (selectedIds.length === 0) {\r
                    {{ 'smartEnrollDemos.common.selectCollections' | transloco }}\r
                } @else if (selectedIds.length === 1) {\r
                    {{ 'smartEnrollDemos.common.collectionSelected' | transloco }}\r
                } @else {\r
                    {{ 'smartEnrollDemos.common.collectionsSelected' | transloco: { count: selectedIds.length } }}\r
                }\r
            </span>\r
            <span class="material-symbols-outlined text-on-surface-variant/70 shrink-0">\r
                {{ open ? 'expand_less' : 'expand_more' }}\r
            </span>\r
        </button>\r
\r
        @if (open && !loading) {\r
            <div\r
                class="absolute left-0 right-0 top-[calc(100%+6px)] z-50 flex max-h-[min(320px,calc(100vh-220px))] flex-col overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container-low shadow-lg"\r
            >\r
                @if (items.length === 0) {\r
                    <div class="px-4 py-6 text-sm text-on-surface-variant text-center">\r
                        @if (emptySlot) {\r
                            <span [innerHTML]="emptySlot"></span>\r
                        } @else {\r
                            {{ 'smartEnrollDemos.common.noCollectionsAvailable' | transloco }}\r
                        }\r
                    </div>\r
                } @else {\r
                    <div class="shrink-0 border-b border-outline-variant/20 p-2">\r
                        <div class="relative">\r
                            <span\r
                                class="material-symbols-outlined pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant/70"\r
                                aria-hidden="true"\r
                            >\r
                                search\r
                            </span>\r
                            <input\r
                                #searchInput\r
                                type="search"\r
                                [(ngModel)]="search"\r
                                [placeholder]="'smartEnrollDemos.common.searchCollectionsPlaceholder' | transloco"\r
                                class="w-full rounded-lg border border-outline-variant/30 bg-surface-container-high/50 py-2 pl-9 pr-3 text-sm text-on-surface outline-none placeholder:text-on-surface-variant/50 focus:border-primary/60"\r
                            />\r
                        </div>\r
                    </div>\r
                    <ul [id]="listId" class="min-h-0 flex-1 overflow-y-auto overscroll-contain py-1">\r
                        @if (filtered.length === 0) {\r
                            <li class="px-3 py-6 text-center text-xs text-on-surface-variant">\r
                                {{ 'smartEnrollDemos.common.noMatches' | transloco }}\r
                            </li>\r
                        } @else {\r
                            @for (item of filtered; track item._id) {\r
                                <li class="px-1">\r
                                    <label\r
                                        class="flex cursor-pointer items-start gap-3 rounded-md px-2 py-2 text-left text-sm transition-colors"\r
                                        [ngClass]="selectedIds.includes(item._id) ? 'bg-primary/10' : 'hover:bg-surface-container-high/80'"\r
                                    >\r
                                        <input\r
                                            type="checkbox"\r
                                            class="mt-0.5 h-4 w-4 shrink-0 rounded border-outline-variant text-primary focus:ring-primary/40"\r
                                            [checked]="selectedIds.includes(item._id)"\r
                                            (change)="toggle(item._id)"\r
                                        />\r
                                        <span class="min-w-0 flex-1">\r
                                            <span class="font-medium text-on-surface block truncate">{{ item.name }}</span>\r
                                            <span class="text-xs text-on-surface-variant font-mono">{{ truncateCode(item.code) }}</span>\r
                                        </span>\r
                                    </label>\r
                                </li>\r
                            }\r
                        }\r
                    </ul>\r
                }\r
            </div>\r
        }\r
    </div>\r
\r
    @if (selectedIds.length > 0) {\r
        <div class="flex flex-wrap gap-2 pt-1">\r
            @for (id of selectedIds; track id) {\r
                <span\r
                    class="inline-flex items-center gap-1 pl-2.5 pr-1 py-1 rounded-lg bg-primary/15 text-on-surface text-xs font-medium border border-primary/25"\r
                >\r
                    <span class="max-w-[200px] truncate">{{ byId.get(id)?.name ?? id }}</span>\r
                    <button\r
                        type="button"\r
                        (click)="remove(id)"\r
                        [disabled]="disabled"\r
                        class="shrink-0 p-0.5 rounded hover:bg-primary/20 text-on-surface-variant disabled:opacity-50"\r
                        [attr.aria-label]="'smartEnrollDemos.common.removeItemAria' | transloco: { label: byId.get(id)?.name ?? id }"\r
                    >\r
                        <span class="material-symbols-outlined text-[16px]">close</span>\r
                    </button>\r
                </span>\r
            }\r
        </div>\r
    }\r
</div>\r
` }]
  }], null, { searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }], items: [{
    type: Input,
    args: [{ required: true }]
  }], selectedIds: [{
    type: Input,
    args: [{ required: true }]
  }], disabled: [{
    type: Input
  }], loading: [{
    type: Input
  }], labelId: [{
    type: Input
  }], emptySlot: [{
    type: Input
  }], selectedIdsChange: [{
    type: Output
  }], onEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }], onDocClick: [{
    type: HostListener,
    args: ["document:mousedown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionMultiSelectComponent, { className: "CollectionMultiSelectComponent", filePath: "src/app/modules/smart-enroll/demos/shared/collection-multi-select.component.ts", lineNumber: 24 });
})();

export {
  CollectionMultiSelectComponent
};
//# sourceMappingURL=chunk-4LGLLXRB.js.map
