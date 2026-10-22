import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-FWBWCXY5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YWP2Y7QK.js";

// src/app/modules/smart-enroll/demos/shared/demo-related-docs-section.component.ts
var _forTrack0 = ($index, $item) => $item.href;
function DemoRelatedDocsSectionComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5, " open_in_new ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r1 = ctx.$implicit;
    \u0275\u0275property("href", doc_r1.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(doc_r1.badgeMuted ? "border-outline-variant/35 bg-surface-container-high/40 text-on-surface-variant" : "border-primary/25 bg-primary/8 text-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r1.badge, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(doc_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r1.description);
  }
}
var DemoRelatedDocsSectionComponent = class _DemoRelatedDocsSectionComponent {
  constructor() {
    this.items = [];
  }
  static {
    this.\u0275fac = function DemoRelatedDocsSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoRelatedDocsSectionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoRelatedDocsSectionComponent, selectors: [["app-demo-related-docs-section"]], inputs: { items: "items" }, decls: 16, vars: 6, consts: [["aria-labelledby", "related-docs-heading", 1, "mt-12", "rounded-2xl", "border", "border-outline-variant/20", "bg-surface-container-low/35", "p-6", "md:p-8"], [1, "mb-6", "flex", "flex-col", "gap-1", "sm:flex-row", "sm:items-end", "sm:justify-between"], [1, "flex", "items-center", "gap-2.5"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-xl", "bg-primary/10", "text-primary"], [1, "material-symbols-outlined", "text-[22px]"], ["id", "related-docs-heading", 1, "text-lg", "font-black", "tracking-tight", "text-on-surface"], [1, "text-xs", "text-on-surface-variant", "mt-0.5"], [1, "grid", "gap-3", "sm:grid-cols-2"], ["target", "_blank", "rel", "noopener noreferrer", 1, "group", "flex", "flex-col", "rounded-xl", "border", "border-outline-variant/25", "bg-surface-container/60", "px-4", "py-3.5", "text-left", "shadow-sm", "transition-all", "hover:border-primary/35", "hover:bg-surface-container-low/80", "hover:shadow-md", "focus:outline-none", "focus-visible:ring-2", "focus-visible:ring-primary/45", 3, "href"], [1, "mb-2", "flex", "items-start", "justify-between", "gap-2"], [1, "inline-flex", "shrink-0", "items-center", "rounded-md", "border", "px-2", "py-0.5", "font-mono", "text-[0.625rem]", "font-bold", "uppercase", "tracking-wide", "tabular-nums"], ["aria-hidden", "true", 1, "material-symbols-outlined", "shrink-0", "text-lg", "text-on-surface-variant/70", "transition-colors", "group-hover:text-primary"], [1, "font-bold", "text-sm", "text-on-surface", "group-hover:text-primary", "transition-colors"], [1, "mt-1", "text-xs", "leading-relaxed", "text-on-surface-variant"]], template: function DemoRelatedDocsSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3)(4, "span", 4);
        \u0275\u0275text(5, "menu_book");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div")(7, "h3", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275repeaterCreate(14, DemoRelatedDocsSectionComponent_For_15_Template, 10, 6, "a", 8, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 2, "smartEnrollDemos.common.relatedDocsTitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 4, "smartEnrollDemos.common.relatedDocsSubtitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.items);
      }
    }, dependencies: [TranslocoModule, TranslocoPipe], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoRelatedDocsSectionComponent, [{
    type: Component,
    args: [{ selector: "app-demo-related-docs-section", standalone: true, imports: [TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section\r
    class="mt-12 rounded-2xl border border-outline-variant/20 bg-surface-container-low/35 p-6 md:p-8"\r
    aria-labelledby="related-docs-heading"\r
>\r
    <div class="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">\r
        <div class="flex items-center gap-2.5">\r
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">\r
                <span class="material-symbols-outlined text-[22px]">menu_book</span>\r
            </span>\r
            <div>\r
                <h3 id="related-docs-heading" class="text-lg font-black tracking-tight text-on-surface">\r
                    {{ 'smartEnrollDemos.common.relatedDocsTitle' | transloco }}\r
                </h3>\r
                <p class="text-xs text-on-surface-variant mt-0.5">\r
                    {{ 'smartEnrollDemos.common.relatedDocsSubtitle' | transloco }}\r
                </p>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <div class="grid gap-3 sm:grid-cols-2">\r
        @for (doc of items; track doc.href) {\r
            <a\r
                [href]="doc.href"\r
                target="_blank"\r
                rel="noopener noreferrer"\r
                class="group flex flex-col rounded-xl border border-outline-variant/25 bg-surface-container/60 px-4 py-3.5 text-left shadow-sm transition-all hover:border-primary/35 hover:bg-surface-container-low/80 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/45"\r
            >\r
                <div class="mb-2 flex items-start justify-between gap-2">\r
                    <span\r
                        class="inline-flex shrink-0 items-center rounded-md border px-2 py-0.5 font-mono text-[0.625rem] font-bold uppercase tracking-wide tabular-nums"\r
                        [class]="\r
                            doc.badgeMuted\r
                                ? 'border-outline-variant/35 bg-surface-container-high/40 text-on-surface-variant'\r
                                : 'border-primary/25 bg-primary/8 text-primary'\r
                        "\r
                    >\r
                        {{ doc.badge }}\r
                    </span>\r
                    <span\r
                        class="material-symbols-outlined shrink-0 text-lg text-on-surface-variant/70 transition-colors group-hover:text-primary"\r
                        aria-hidden="true"\r
                    >\r
                        open_in_new\r
                    </span>\r
                </div>\r
                <p class="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">{{ doc.title }}</p>\r
                <p class="mt-1 text-xs leading-relaxed text-on-surface-variant">{{ doc.description }}</p>\r
            </a>\r
        }\r
    </div>\r
</section>\r
` }]
  }], null, { items: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoRelatedDocsSectionComponent, { className: "DemoRelatedDocsSectionComponent", filePath: "src/app/modules/smart-enroll/demos/shared/demo-related-docs-section.component.ts", lineNumber: 12 });
})();

export {
  DemoRelatedDocsSectionComponent
};
//# sourceMappingURL=chunk-PBSKPAJ2.js.map
