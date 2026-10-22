import {
  SmartFleetService
} from "./chunk-CRZKQ4LX.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-FWBWCXY5.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-QL64NPDU.js";
import {
  CommonModule,
  Component,
  NgForOf,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YWP2Y7QK.js";

// src/app/modules/smart-fleet/fleet-nav.component.ts
function FleetNavComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "mat-icon", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-stone-900", ctx_r1.isActive(item_r1))("text-white", ctx_r1.isActive(item_r1))("text-stone-600", !ctx_r1.isActive(item_r1))("hover:bg-stone-100", !ctx_r1.isActive(item_r1))("dark:text-stone-300", !ctx_r1.isActive(item_r1))("dark:hover:bg-gray-800", !ctx_r1.isActive(item_r1));
    \u0275\u0275property("routerLink", item_r1.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 15, item_r1.label), " ");
  }
}
function FleetNavComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 6)(2, "mat-icon", 7);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "smartFleet.freePlanNotice"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "smartFleet.freePlanCta"), " ");
  }
}
var FleetNavComponent = class _FleetNavComponent {
  constructor() {
    this._router = inject(Router);
    this._fleet = inject(SmartFleetService);
    this.onFreePlan = this._fleet.onFreePlan;
    this.items = [
      {
        link: "/smart-fleet",
        exact: true,
        icon: "space_dashboard",
        label: "smartFleet.nav.overview"
      },
      {
        link: "/smart-fleet/assets",
        exact: false,
        icon: "directions_car",
        label: "smartFleet.nav.assets"
      },
      {
        link: "/smart-fleet/watch-rules",
        exact: false,
        icon: "rule",
        label: "smartFleet.nav.watchRules"
      },
      {
        link: "/smart-fleet/alerts",
        exact: false,
        icon: "notifications_active",
        label: "smartFleet.nav.alerts"
      },
      {
        link: "/smart-fleet/plans",
        exact: false,
        icon: "credit_card",
        label: "smartFleet.nav.plans"
      }
    ];
    this.plansItem = this.items[this.items.length - 1];
  }
  ngOnInit() {
    this._fleet.ensurePlanStatus();
  }
  isActive(item) {
    return this._router.isActive(item.link, {
      paths: item.exact ? "exact" : "subset",
      queryParams: "ignored",
      fragment: "ignored",
      matrixParams: "ignored"
    });
  }
  static {
    this.\u0275fac = function FleetNavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FleetNavComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FleetNavComponent, selectors: [["fleet-nav"]], decls: 5, vars: 5, consts: [[1, "flex", "flex-col", "gap-3"], [1, "flex", "flex-wrap", "gap-1.5", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-2", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900"], ["class", "inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-base font-medium transition-colors", 3, "routerLink", "bg-stone-900", "text-white", "text-stone-600", "hover:bg-stone-100", "dark:text-stone-300", "dark:hover:bg-gray-800", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3", "rounded-2xl", "border", "border-amber-300", "bg-amber-50", "px-4", "py-3", "text-sm", "text-amber-900", "dark:border-amber-800", "dark:bg-amber-900/20", "dark:text-amber-200"], [1, "inline-flex", "items-center", "gap-2.5", "rounded-xl", "px-5", "py-3", "text-base", "font-medium", "transition-colors", 3, "routerLink"], [1, "icon-size-5"], [1, "flex", "items-center", "gap-2"], [1, "icon-size-5", "text-current"], ["routerLink", "/smart-fleet/plans", 1, "rounded-lg", "bg-amber-600", "px-3", "py-1.5", "text-xs", "font-semibold", "text-white", "hover:bg-amber-700"]], template: function FleetNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1);
        \u0275\u0275pipe(2, "transloco");
        \u0275\u0275template(3, FleetNavComponent_a_3_Template, 5, 17, "a", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, FleetNavComponent_Conditional_4_Template, 10, 6, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "smartFleet.title"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.items);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.onFreePlan() && !ctx.isActive(ctx.plansItem) ? 4 : -1);
      }
    }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink, TranslocoModule, TranslocoPipe, MatIconModule, MatIcon], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FleetNavComponent, [{
    type: Component,
    args: [{
      selector: "fleet-nav",
      standalone: true,
      imports: [CommonModule, RouterModule, TranslocoModule, MatIconModule],
      encapsulation: ViewEncapsulation.None,
      template: `
        <div class="flex flex-col gap-3">
            <nav
                class="flex flex-wrap gap-1.5 rounded-2xl border border-stone-200/90 bg-white p-2 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                [attr.aria-label]="'smartFleet.title' | transloco"
            >
                <a
                    *ngFor="let item of items"
                    [routerLink]="item.link"
                    class="inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-base font-medium transition-colors"
                    [class.bg-stone-900]="isActive(item)"
                    [class.text-white]="isActive(item)"
                    [class.text-stone-600]="!isActive(item)"
                    [class.hover:bg-stone-100]="!isActive(item)"
                    [class.dark:text-stone-300]="!isActive(item)"
                    [class.dark:hover:bg-gray-800]="!isActive(item)"
                >
                    <mat-icon class="icon-size-5">{{ item.icon }}</mat-icon>
                    {{ item.label | transloco }}
                </a>
            </nav>
            @if (onFreePlan() && !isActive(plansItem)) {
                <div
                    class="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200"
                >
                    <div class="flex items-center gap-2">
                        <mat-icon class="icon-size-5 text-current">info</mat-icon>
                        <span>{{ 'smartFleet.freePlanNotice' | transloco }}</span>
                    </div>
                    <a
                        routerLink="/smart-fleet/plans"
                        class="rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-700"
                    >
                        {{ 'smartFleet.freePlanCta' | transloco }}
                    </a>
                </div>
            }
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FleetNavComponent, { className: "FleetNavComponent", filePath: "src/app/modules/smart-fleet/fleet-nav.component.ts", lineNumber: 60 });
})();

export {
  FleetNavComponent
};
//# sourceMappingURL=chunk-QX66EUCR.js.map
