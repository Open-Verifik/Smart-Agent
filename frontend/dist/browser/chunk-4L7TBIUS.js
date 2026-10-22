import {
  COUNTRY_CENTROIDS,
  ChartComponent,
  NgApexchartsModule,
  anglesForLocation,
  countryName
} from "./chunk-T6XXGLUD.js";
import {
  UsageApiService
} from "./chunk-OVSGGC5D.js";
import "./chunk-NNMFBAZF.js";
import {
  AppNotificationsService,
  OnboardingService,
  QuickChatService,
  openNotificationCta,
  shouldShowNotificationCta
} from "./chunk-I7PXQXWD.js";
import {
  getVerifikDocsUrls
} from "./chunk-Z6YVHGZ4.js";
import {
  FuseConfigService
} from "./chunk-S7YSRK4U.js";
import {
  AccountEnvironmentService
} from "./chunk-LH7NVJQC.js";
import "./chunk-BLPRNM4C.js";
import "./chunk-6FS3LBOZ.js";
import "./chunk-N6A4QSA6.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-X2PSIDHT.js";
import "./chunk-BQZ6NKDU.js";
import {
  AuthModalComponent
} from "./chunk-BXHN2UKT.js";
import "./chunk-ENWXGLEW.js";
import "./chunk-X7X3KIY2.js";
import "./chunk-JURKDGMK.js";
import "./chunk-DT4JVZCC.js";
import "./chunk-DMXREZDX.js";
import "./chunk-CPZD6RE6.js";
import "./chunk-W5MZFF7W.js";
import "./chunk-QUFOCOZK.js";
import "./chunk-CO7JIY6V.js";
import "./chunk-6Y7NS256.js";
import {
  UserService
} from "./chunk-L5NPACLK.js";
import "./chunk-2W6CKTFA.js";
import {
  SessionService
} from "./chunk-BYA46NNG.js";
import {
  AuthUtils
} from "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from "./chunk-HVUVGZ2L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-PJFCLQ64.js";
import "./chunk-PDWCMJ4H.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import "./chunk-GX5GK4J6.js";
import "./chunk-JBF67GMG.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
  TranslocoService,
  takeUntilDestroyed,
  toSignal
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-QL64NPDU.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DOCUMENT,
  DatePipe,
  DecimalPipe,
  DestroyRef,
  HttpClient,
  Inject,
  Injectable,
  NgClass,
  NgIf,
  ViewEncapsulation,
  afterNextRender,
  catchError,
  computed,
  effect,
  finalize,
  forkJoin,
  inject,
  input,
  map,
  of,
  output,
  setClassMetadata,
  signal,
  switchMap,
  tap,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefer,
  ɵɵdeferOnViewport,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeStyle,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-YWP2Y7QK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/home/bring-back-offer-modal/bring-back-offer-modal.component.ts
var _c0 = (a0) => ({ multiplier: a0 });
var _c1 = (a0) => ({ expiresAt: a0 });
var _c2 = (a0, a1) => ({ multiplier: a0, exampleReceived: a1 });
function BringBackOfferModalComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "addCredits.promo.bringBack.bodyTriple", \u0275\u0275pureFunction1(4, _c0, ctx_r1.offer.multiplier)), " ");
  }
}
function BringBackOfferModalComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "addCredits.promo.bringBack.body", \u0275\u0275pureFunction2(4, _c2, ctx_r1.offer.multiplier, ctx_r1.exampleReceived)), " ");
  }
}
var BringBackOfferModalComponent = class _BringBackOfferModalComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA);
    this.offer = this._data.offer;
    this.exampleReceived = 50 * (this.offer.multiplier || 2);
  }
  close(reason) {
    this._dialogRef.close(reason);
  }
  static {
    this.\u0275fac = function BringBackOfferModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BringBackOfferModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BringBackOfferModalComponent, selectors: [["home-bring-back-offer-modal"]], decls: 39, vars: 32, consts: [["doubleBody", ""], [1, "flex", "max-w-lg", "flex-col"], [1, "flex", "items-start", "justify-between", "gap-4", "border-b", "border-amber-200/80", "px-6", "pb-4", "pt-6", "dark:border-amber-900/50"], [1, "flex", "min-w-0", "items-start", "gap-3"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-xl", "bg-amber-600/15", "text-amber-800", "dark:text-amber-300"], [1, "min-w-0", "space-y-1"], [1, "inline-flex", "rounded-full", "border", "border-amber-200/90", "bg-amber-100", "px-2.5", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-[0.18em]", "text-amber-950", "dark:border-amber-800", "dark:bg-amber-900/50", "dark:text-amber-200"], [1, "text-lg", "font-semibold", "text-amber-950", "dark:text-amber-50"], ["mat-icon-button", "", "type", "button", 1, "!-mr-2", "shrink-0", 3, "click"], [1, "space-y-4", "px-6", "py-6", "text-sm", "leading-relaxed", "text-amber-950/95", "dark:text-amber-100/90"], [4, "ngIf", "ngIfElse"], [1, "text-sm", "font-semibold", "text-amber-950", "dark:text-amber-50"], [1, "flex", "flex-col", "gap-2", "border-t", "border-amber-200/80", "px-6", "py-4", "dark:border-amber-900/50", "sm:flex-row", "sm:flex-wrap", "sm:justify-end"], ["mat-stroked-button", "", "type", "button", 1, "order-3", "sm:order-1", 3, "click"], ["mat-stroked-button", "", "type", "button", 1, "order-2", 3, "click"], [1, "mr-1", "!h-4", "!w-4", "!text-base"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "order-1", "sm:order-3", 3, "click"]], template: function BringBackOfferModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "mat-icon");
        \u0275\u0275text(5, "local_offer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h2", 7);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "button", 8);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275listener("click", function BringBackOfferModalComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close("maybe_later"));
        });
        \u0275\u0275elementStart(15, "mat-icon");
        \u0275\u0275text(16, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 9);
        \u0275\u0275template(18, BringBackOfferModalComponent_p_18_Template, 3, 6, "p", 10)(19, BringBackOfferModalComponent_ng_template_19_Template, 3, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(21, "p", 11);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "date");
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 12)(26, "button", 13);
        \u0275\u0275listener("click", function BringBackOfferModalComponent_Template_button_click_26_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close("maybe_later"));
        });
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 14);
        \u0275\u0275listener("click", function BringBackOfferModalComponent_Template_button_click_29_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close("view_plans"));
        });
        \u0275\u0275elementStart(30, "mat-icon", 15);
        \u0275\u0275text(31, "credit_card");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 16);
        \u0275\u0275listener("click", function BringBackOfferModalComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close("accepted"));
        });
        \u0275\u0275elementStart(35, "mat-icon", 15);
        \u0275\u0275text(36, "payments");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "transloco");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const doubleBody_r3 = \u0275\u0275reference(20);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "addCredits.promo.bringBack.badge"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 11, "addCredits.promo.bringBack.title", \u0275\u0275pureFunction1(28, _c0, ctx.offer.multiplier)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 14, "home.bringBackModal.maybeLater"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.offer.tier === "triple")("ngIfElse", doubleBody_r3);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 19, "addCredits.promo.bringBack.deadline", \u0275\u0275pureFunction1(30, _c1, \u0275\u0275pipeBind2(23, 16, ctx.offer.expiresAt, "medium") || "")), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 22, "home.bringBackModal.maybeLater"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 24, "home.bringBackModal.viewPlans"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 26, "home.bringBackModal.okLetsDoIt"), " ");
      }
    }, dependencies: [CommonModule, NgIf, DatePipe, MatDialogModule, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=bring-back-offer-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BringBackOfferModalComponent, [{
    type: Component,
    args: [{ selector: "home-bring-back-offer-modal", standalone: true, imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule], template: `
		<div class="flex max-w-lg flex-col">
			<div
				class="flex items-start justify-between gap-4 border-b border-amber-200/80 px-6 pb-4 pt-6 dark:border-amber-900/50"
			>
				<div class="flex min-w-0 items-start gap-3">
					<div
						class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-600/15 text-amber-800 dark:text-amber-300"
					>
						<mat-icon>local_offer</mat-icon>
					</div>
					<div class="min-w-0 space-y-1">
						<p
							class="inline-flex rounded-full border border-amber-200/90 bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-950 dark:border-amber-800 dark:bg-amber-900/50 dark:text-amber-200"
						>
							{{ 'addCredits.promo.bringBack.badge' | transloco }}
						</p>
						<h2 class="text-lg font-semibold text-amber-950 dark:text-amber-50">
							{{
								'addCredits.promo.bringBack.title'
									| transloco: { multiplier: offer.multiplier }
							}}
						</h2>
					</div>
				</div>
				<button
					mat-icon-button
					type="button"
					(click)="close('maybe_later')"
					class="!-mr-2 shrink-0"
					[attr.aria-label]="'home.bringBackModal.maybeLater' | transloco"
				>
					<mat-icon>close</mat-icon>
				</button>
			</div>

			<div class="space-y-4 px-6 py-6 text-sm leading-relaxed text-amber-950/95 dark:text-amber-100/90">
				<p *ngIf="offer.tier === 'triple'; else doubleBody">
					{{
						'addCredits.promo.bringBack.bodyTriple'
							| transloco: { multiplier: offer.multiplier }
					}}
				</p>
				<ng-template #doubleBody>
					<p>
						{{
							'addCredits.promo.bringBack.body'
								| transloco
									: {
											multiplier: offer.multiplier,
											exampleReceived: exampleReceived,
									  }
						}}
					</p>
				</ng-template>
				<p class="text-sm font-semibold text-amber-950 dark:text-amber-50">
					{{
						'addCredits.promo.bringBack.deadline'
							| transloco: { expiresAt: (offer.expiresAt | date: 'medium') || '' }
					}}
				</p>
			</div>

			<div
				class="flex flex-col gap-2 border-t border-amber-200/80 px-6 py-4 dark:border-amber-900/50 sm:flex-row sm:flex-wrap sm:justify-end"
			>
				<button
					mat-stroked-button
					type="button"
					class="order-3 sm:order-1"
					(click)="close('maybe_later')"
				>
					{{ 'home.bringBackModal.maybeLater' | transloco }}
				</button>
				<button
					mat-stroked-button
					type="button"
					class="order-2"
					(click)="close('view_plans')"
				>
					<mat-icon class="mr-1 !h-4 !w-4 !text-base">credit_card</mat-icon>
					{{ 'home.bringBackModal.viewPlans' | transloco }}
				</button>
				<button
					mat-flat-button
					color="primary"
					type="button"
					class="order-1 sm:order-3"
					(click)="close('accepted')"
				>
					<mat-icon class="mr-1 !h-4 !w-4 !text-base">payments</mat-icon>
					{{ 'home.bringBackModal.okLetsDoIt' | transloco }}
				</button>
			</div>
		</div>
	`, styles: ["/* angular:styles/component:scss;b616e13b2656ec99dc516df519609620e8bb87e202697bc6ec9c90b4c20dc80a;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/home/bring-back-offer-modal/bring-back-offer-modal.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=bring-back-offer-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BringBackOfferModalComponent, { className: "BringBackOfferModalComponent", filePath: "src/app/modules/home/bring-back-offer-modal/bring-back-offer-modal.component.ts", lineNumber: 122 });
})();

// src/app/modules/home/bring-back-offer-modal/bring-back-offer-storage.ts
var normalizeBringBackExpiresAt = (expiresAt) => {
  const date = expiresAt instanceof Date ? expiresAt : new Date(expiresAt);
  if (!Number.isFinite(date.getTime())) {
    return String(expiresAt);
  }
  return date.toISOString();
};
var bringBackModalDismissKey = (clientId, expiresAt) => {
  return `bringBackOfferDismissed:${clientId}:${normalizeBringBackExpiresAt(expiresAt)}`;
};
var isBringBackModalDismissed = (clientId, expiresAt) => {
  if (!clientId || !expiresAt || typeof localStorage === "undefined") {
    return false;
  }
  return Boolean(localStorage.getItem(bringBackModalDismissKey(clientId, expiresAt)));
};
var dismissBringBackModal = (clientId, expiresAt, reason) => {
  if (!clientId || !expiresAt || typeof localStorage === "undefined") {
    return;
  }
  localStorage.setItem(bringBackModalDismissKey(clientId, expiresAt), reason);
};

// src/app/modules/home/get-started/get-started.component.ts
var HomeGetStartedComponent = class _HomeGetStartedComponent {
  constructor() {
    this._transloco = inject(TranslocoService);
  }
  get docsHome() {
    return getVerifikDocsUrls(this._transloco.getActiveLang()).docsHome;
  }
  static {
    this.\u0275fac = function HomeGetStartedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeGetStartedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeGetStartedComponent, selectors: [["app-home-get-started"]], decls: 84, vars: 62, consts: [["aria-labelledby", "get-started-heading", 1, "get-started"], [1, "get-started__header"], ["id", "get-started-heading", 1, "get-started__title"], ["target", "_blank", "rel", "noopener noreferrer", 1, "get-started__docs", 3, "href"], [1, "get-started__docs-icon"], [1, "get-started__grid"], [1, "get-started-card"], [1, "get-started-card__badges"], [1, "get-started-card__badge"], [1, "get-started-card__title"], [1, "get-started-card__body"], [1, "get-started-card__list"], ["mat-flat-button", "", "routerLink", "/smart-enroll/projects", 1, "get-started-card__cta"], ["mat-flat-button", "", "routerLink", "/human-authn/projects", 1, "get-started-card__cta"], [1, "get-started-card__links"], ["routerLink", "/settings/api-key"], [1, "get-started-card__inline-links"], ["routerLink", "/postman"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["routerLink", "/smart-monitor/webhooks"]], template: function HomeGetStartedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 3)(6, "mat-icon", 4);
        \u0275\u0275text(7, "menu_book");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "article", 6)(12, "div", 7)(13, "span", 8);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 8);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "h3", 9);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p", 10);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "ul", 11)(26, "li");
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "li");
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "a", 12);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "article", 6)(36, "div", 7)(37, "span", 8);
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "h3", 9);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p", 10);
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "a", 13);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "article", 6)(50, "div", 7)(51, "span", 8);
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "h3", 9);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "ul", 14)(58, "li")(59, "mat-icon");
        \u0275\u0275text(60, "vpn_key");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "a", 15);
        \u0275\u0275text(62);
        \u0275\u0275pipe(63, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "li")(65, "mat-icon");
        \u0275\u0275text(66, "terminal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div")(68, "p");
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 16)(72, "a", 17);
        \u0275\u0275text(73);
        \u0275\u0275pipe(74, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "a", 18);
        \u0275\u0275text(76);
        \u0275\u0275pipe(77, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(78, "li")(79, "mat-icon");
        \u0275\u0275text(80, "link");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "a", 19);
        \u0275\u0275text(82);
        \u0275\u0275pipe(83, "transloco");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 22, "home.getStarted.title"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.docsHome, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 24, "home.getStarted.docsLink"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 26, "home.getStarted.smartEnroll.badgeStart"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 28, "home.getStarted.smartEnroll.badgeNoCode"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 30, "home.getStarted.smartEnroll.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 32, "home.getStarted.smartEnroll.body"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 34, "home.getStarted.smartEnroll.bulletId"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 36, "home.getStarted.smartEnroll.bulletLiveness"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 38, "home.getStarted.smartEnroll.cta"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 40, "home.getStarted.humanAuthn.badgeNoCode"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 42, "home.getStarted.humanAuthn.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 44, "home.getStarted.humanAuthn.body"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 46, "home.getStarted.humanAuthn.cta"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 48, "home.getStarted.smartCheck.badge"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 50, "home.getStarted.smartCheck.title"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 52, "home.getStarted.smartCheck.token"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 54, "home.getStarted.smartCheck.explore"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 56, "home.getStarted.smartCheck.postman"));
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.docsHome, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 58, "home.getStarted.smartCheck.docs"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(83, 60, "home.getStarted.smartCheck.webhooks"), " ");
      }
    }, dependencies: [CommonModule, MatButtonModule, MatAnchor, MatIconModule, MatIcon, RouterLink, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.get-started[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.get-started__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n}\n.get-started__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .get-started__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .get-started__title[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.get-started__docs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  text-decoration: none;\n}\n.get-started__docs[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.dark[_nghost-%COMP%]   .get-started__docs[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .get-started__docs[_ngcontent-%COMP%] {\n  color: rgb(147, 197, 253);\n}\n.get-started__docs-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.get-started__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n@media (min-width: 768px) {\n  .get-started__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1100px) {\n  .get-started__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n.get-started-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(241, 245, 249);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  padding: 1.35rem 1.35rem 1.5rem;\n}\n.dark[_nghost-%COMP%]   .get-started-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .get-started-card[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.get-started-card__badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-bottom: 0.85rem;\n}\n.get-started-card__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  background: rgb(255, 255, 255);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .get-started-card__badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .get-started-card__badge[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.45);\n  border-color: rgba(148, 163, 184, 0.28);\n  color: rgb(226, 232, 240);\n}\n.get-started-card__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.55rem;\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.3;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .get-started-card__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .get-started-card__title[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.get-started-card__body[_ngcontent-%COMP%] {\n  margin: 0 0 0.85rem;\n  font-size: 0.875rem;\n  line-height: 1.55;\n  color: rgb(71, 85, 105);\n}\n.dark[_nghost-%COMP%]   .get-started-card__body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .get-started-card__body[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.get-started-card__list[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  padding-left: 1.15rem;\n  font-size: 0.875rem;\n  line-height: 1.55;\n  color: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .get-started-card__list[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .get-started-card__list[_ngcontent-%COMP%] {\n  color: rgb(226, 232, 240);\n}\n.get-started-card__cta[_ngcontent-%COMP%] {\n  margin-top: auto;\n  align-self: flex-start;\n  border-radius: 0.75rem !important;\n  background: rgb(15, 23, 42) !important;\n  color: rgb(255, 255, 255) !important;\n  font-weight: 600 !important;\n  height: 2.5rem !important;\n  padding: 0 1.1rem !important;\n}\n.dark[_nghost-%COMP%]   .get-started-card__cta[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .get-started-card__cta[_ngcontent-%COMP%] {\n  background: rgb(226, 232, 240) !important;\n  color: rgb(15, 23, 42) !important;\n}\n.get-started-card__links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.get-started-card__links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.65rem;\n}\n.get-started-card__links[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  color: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .get-started-card__links[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .get-started-card__links[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.get-started-card__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  line-height: 1.45;\n  color: rgb(37, 99, 235);\n  text-decoration: none;\n}\n.get-started-card__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.dark[_nghost-%COMP%]   .get-started-card__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .get-started-card__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgb(147, 197, 253);\n}\n.get-started-card__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.3rem;\n  font-size: 0.875rem;\n  line-height: 1.45;\n  color: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .get-started-card__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .get-started-card__links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgb(226, 232, 240);\n}\n.get-started-card__inline-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=get-started.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeGetStartedComponent, [{
    type: Component,
    args: [{ selector: "app-home-get-started", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule, RouterLink, TranslocoModule], template: `<section class="get-started" aria-labelledby="get-started-heading">\r
    <header class="get-started__header">\r
        <h2 id="get-started-heading" class="get-started__title">\r
            {{ 'home.getStarted.title' | transloco }}\r
        </h2>\r
        <a\r
            class="get-started__docs"\r
            [href]="docsHome"\r
            target="_blank"\r
            rel="noopener noreferrer"\r
        >\r
            <mat-icon class="get-started__docs-icon">menu_book</mat-icon>\r
            {{ 'home.getStarted.docsLink' | transloco }}\r
        </a>\r
    </header>\r
\r
    <div class="get-started__grid">\r
        <article class="get-started-card">\r
            <div class="get-started-card__badges">\r
                <span class="get-started-card__badge">{{\r
                    'home.getStarted.smartEnroll.badgeStart' | transloco\r
                }}</span>\r
                <span class="get-started-card__badge">{{\r
                    'home.getStarted.smartEnroll.badgeNoCode' | transloco\r
                }}</span>\r
            </div>\r
            <h3 class="get-started-card__title">\r
                {{ 'home.getStarted.smartEnroll.title' | transloco }}\r
            </h3>\r
            <p class="get-started-card__body">\r
                {{ 'home.getStarted.smartEnroll.body' | transloco }}\r
            </p>\r
            <ul class="get-started-card__list">\r
                <li>{{ 'home.getStarted.smartEnroll.bulletId' | transloco }}</li>\r
                <li>{{ 'home.getStarted.smartEnroll.bulletLiveness' | transloco }}</li>\r
            </ul>\r
            <a mat-flat-button routerLink="/smart-enroll/projects" class="get-started-card__cta">\r
                {{ 'home.getStarted.smartEnroll.cta' | transloco }}\r
            </a>\r
        </article>\r
\r
        <article class="get-started-card">\r
            <div class="get-started-card__badges">\r
                <span class="get-started-card__badge">{{\r
                    'home.getStarted.humanAuthn.badgeNoCode' | transloco\r
                }}</span>\r
            </div>\r
            <h3 class="get-started-card__title">\r
                {{ 'home.getStarted.humanAuthn.title' | transloco }}\r
            </h3>\r
            <p class="get-started-card__body">\r
                {{ 'home.getStarted.humanAuthn.body' | transloco }}\r
            </p>\r
            <a mat-flat-button routerLink="/human-authn/projects" class="get-started-card__cta">\r
                {{ 'home.getStarted.humanAuthn.cta' | transloco }}\r
            </a>\r
        </article>\r
\r
        <article class="get-started-card">\r
            <div class="get-started-card__badges">\r
                <span class="get-started-card__badge">{{\r
                    'home.getStarted.smartCheck.badge' | transloco\r
                }}</span>\r
            </div>\r
            <h3 class="get-started-card__title">\r
                {{ 'home.getStarted.smartCheck.title' | transloco }}\r
            </h3>\r
            <ul class="get-started-card__links">\r
                <li>\r
                    <mat-icon>vpn_key</mat-icon>\r
                    <a routerLink="/settings/api-key">\r
                        {{ 'home.getStarted.smartCheck.token' | transloco }}\r
                    </a>\r
                </li>\r
                <li>\r
                    <mat-icon>terminal</mat-icon>\r
                    <div>\r
                        <p>{{ 'home.getStarted.smartCheck.explore' | transloco }}</p>\r
                        <div class="get-started-card__inline-links">\r
                            <a routerLink="/postman">{{\r
                                'home.getStarted.smartCheck.postman' | transloco\r
                            }}</a>\r
                            <a [href]="docsHome" target="_blank" rel="noopener noreferrer">{{\r
                                'home.getStarted.smartCheck.docs' | transloco\r
                            }}</a>\r
                        </div>\r
                    </div>\r
                </li>\r
                <li>\r
                    <mat-icon>link</mat-icon>\r
                    <a routerLink="/smart-monitor/webhooks">\r
                        {{ 'home.getStarted.smartCheck.webhooks' | transloco }}\r
                    </a>\r
                </li>\r
            </ul>\r
        </article>\r
    </div>\r
</section>\r
`, styles: ["/* src/app/modules/home/get-started/get-started.component.scss */\n:host {\n  display: block;\n}\n.get-started {\n  margin-bottom: 2rem;\n}\n.get-started__header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n}\n.get-started__title {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .get-started__title {\n  color: rgb(248, 250, 252);\n}\n.get-started__docs {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  text-decoration: none;\n}\n.get-started__docs:hover {\n  text-decoration: underline;\n}\n:host-context(.dark) .get-started__docs {\n  color: rgb(147, 197, 253);\n}\n.get-started__docs-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.get-started__grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n@media (min-width: 768px) {\n  .get-started__grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1100px) {\n  .get-started__grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n.get-started-card {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(241, 245, 249);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  padding: 1.35rem 1.35rem 1.5rem;\n}\n:host-context(.dark) .get-started-card {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.get-started-card__badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-bottom: 0.85rem;\n}\n.get-started-card__badge {\n  display: inline-flex;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  background: rgb(255, 255, 255);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgb(51, 65, 85);\n}\n:host-context(.dark) .get-started-card__badge {\n  background: rgba(15, 23, 42, 0.45);\n  border-color: rgba(148, 163, 184, 0.28);\n  color: rgb(226, 232, 240);\n}\n.get-started-card__title {\n  margin: 0 0 0.55rem;\n  font-size: 1.15rem;\n  font-weight: 700;\n  line-height: 1.3;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .get-started-card__title {\n  color: rgb(248, 250, 252);\n}\n.get-started-card__body {\n  margin: 0 0 0.85rem;\n  font-size: 0.875rem;\n  line-height: 1.55;\n  color: rgb(71, 85, 105);\n}\n:host-context(.dark) .get-started-card__body {\n  color: rgb(203, 213, 225);\n}\n.get-started-card__list {\n  margin: 0 0 1.25rem;\n  padding-left: 1.15rem;\n  font-size: 0.875rem;\n  line-height: 1.55;\n  color: rgb(51, 65, 85);\n}\n:host-context(.dark) .get-started-card__list {\n  color: rgb(226, 232, 240);\n}\n.get-started-card__cta {\n  margin-top: auto;\n  align-self: flex-start;\n  border-radius: 0.75rem !important;\n  background: rgb(15, 23, 42) !important;\n  color: rgb(255, 255, 255) !important;\n  font-weight: 600 !important;\n  height: 2.5rem !important;\n  padding: 0 1.1rem !important;\n}\n:host-context(.dark) .get-started-card__cta {\n  background: rgb(226, 232, 240) !important;\n  color: rgb(15, 23, 42) !important;\n}\n.get-started-card__links {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.get-started-card__links li {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.65rem;\n}\n.get-started-card__links mat-icon {\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  color: rgb(51, 65, 85);\n}\n:host-context(.dark) .get-started-card__links mat-icon {\n  color: rgb(203, 213, 225);\n}\n.get-started-card__links a {\n  font-size: 0.875rem;\n  font-weight: 600;\n  line-height: 1.45;\n  color: rgb(37, 99, 235);\n  text-decoration: none;\n}\n.get-started-card__links a:hover {\n  text-decoration: underline;\n}\n:host-context(.dark) .get-started-card__links a {\n  color: rgb(147, 197, 253);\n}\n.get-started-card__links p {\n  margin: 0 0 0.3rem;\n  font-size: 0.875rem;\n  line-height: 1.45;\n  color: rgb(51, 65, 85);\n}\n:host-context(.dark) .get-started-card__links p {\n  color: rgb(226, 232, 240);\n}\n.get-started-card__inline-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=get-started.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeGetStartedComponent, { className: "HomeGetStartedComponent", filePath: "src/app/modules/home/get-started/get-started.component.ts", lineNumber: 16 });
})();

// src/app/modules/home/home-notification-banners/home-notification-banners.component.ts
function HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(banner_r2.content.summary);
  }
}
function HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-checkbox", 16);
    \u0275\u0275listener("change", function HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_13_Template_mat_checkbox_change_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const banner_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleLegalAccepted(banner_r2, $event.checked));
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", banner_r2.legal.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "appNotifications.inbox.legalLink"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r3.isLegalAccepted(banner_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "appNotifications.inbox.legalAcceptCheckbox"), " ");
  }
}
function HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "appNotifications.inbox.errors.action"), " ");
  }
}
function HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_15_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const banner_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openCta(banner_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", banner_r2.cta.label || \u0275\u0275pipeBind1(2, 1, "appNotifications.inbox.ctaDefault"), " ");
  }
}
function HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_15_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const banner_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.acknowledgeBanner(banner_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r3.isBusy(banner_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "appNotifications.inbox.actions.acknowledge"), " ");
  }
}
function HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_15_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const banner_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.acceptBanner(banner_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r3.acceptDisabled(banner_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "appNotifications.inbox.actions.accept"), " ");
  }
}
function HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_15_Conditional_1_Template, 3, 3, "button", 17)(2, HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_15_Conditional_2_Template, 3, 4, "button", 18)(3, HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_15_Conditional_3_Template, 3, 4, "button", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.showCta(banner_r2) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.showAcknowledge(banner_r2) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.showAccept(banner_r2) ? 3 : -1);
  }
}
function HomeNotificationBannersComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275element(1, "span", 2)(2, "span", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "span", 5);
    \u0275\u0275element(5, "mat-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7)(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_12_Template, 2, 1, "p", 10)(13, HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_13_Template, 6, 8)(14, HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_14_Template, 3, 3, "p", 11)(15, HomeNotificationBannersComponent_Conditional_0_For_2_Conditional_15_Template, 4, 3, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 13);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275listener("click", function HomeNotificationBannersComponent_Conditional_0_For_2_Template_button_click_16_listener() {
      const banner_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.dismissBanner(banner_r2));
    });
    \u0275\u0275element(18, "mat-icon", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const banner_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-category", banner_r2.category);
    \u0275\u0275advance(5);
    \u0275\u0275property("svgIcon", ctx_r3.categoryIcon(banner_r2.category));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, ctx_r3.categoryLabelKey(banner_r2.category)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(banner_r2.content.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(banner_r2.content.summary ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(banner_r2.interactionMode === "accept" && (banner_r2.legal == null ? null : banner_r2.legal.url) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.actionErrorId() === banner_r2.notificationId ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.showActions(banner_r2) ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.isBusy(banner_r2));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 13, "appNotifications.banners.dismissAria"));
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_outline:x-mark");
  }
}
function HomeNotificationBannersComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, HomeNotificationBannersComponent_Conditional_0_For_2_Template, 19, 15, "section", 1, \u0275\u0275componentInstance().trackById, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.banners());
  }
}
var HomeNotificationBannersComponent = class _HomeNotificationBannersComponent {
  constructor() {
    this._notifications = inject(AppNotificationsService);
    this._session = inject(SessionService);
    this._router = inject(Router);
    this._quickChat = inject(QuickChatService);
    this.banners = signal([]);
    this.dismissingId = signal(null);
    this.actionErrorId = signal(null);
    this.legalAcceptedIds = signal(/* @__PURE__ */ new Set());
    effect(() => {
      const items = this._notifications.activeBanners();
      if (!this._canUseApi()) {
        this.banners.set([]);
        return;
      }
      if (!items)
        return;
      this.banners.set(items);
    });
  }
  ngOnInit() {
    this.loadBanners();
  }
  loadBanners() {
    if (!this._canUseApi()) {
      this.banners.set([]);
      return;
    }
    const cached = this._notifications.activeBanners();
    if (cached)
      this.banners.set(cached);
    this._notifications.getActiveBanners().subscribe();
  }
  dismissBanner(item) {
    this._closeBanner(item, this._notifications.dismissAndForget(item.notificationId));
  }
  acknowledgeBanner(item) {
    this._closeBanner(item, this._notifications.acknowledgeAndForget(item.notificationId));
  }
  acceptBanner(item) {
    const version = item.legal?.version;
    if (!version || this.acceptDisabled(item))
      return;
    this._closeBanner(item, this._notifications.acceptAndForget(item.notificationId, {
      legalVersion: version,
      accepted: true
    }));
  }
  showCta(item) {
    return shouldShowNotificationCta(item.cta);
  }
  showAcknowledge(item) {
    return item.interactionMode === "acknowledge" && !item.receipt?.acknowledgedAt;
  }
  showAccept(item) {
    return item.interactionMode === "accept" && !item.receipt?.acceptedAt;
  }
  showActions(item) {
    return this.showCta(item) || this.showAcknowledge(item) || this.showAccept(item);
  }
  isBusy(item) {
    return this.dismissingId() === item.notificationId;
  }
  acceptDisabled(item) {
    if (this.isBusy(item) || !item.legal?.version)
      return true;
    return Boolean(item.legal?.url) && !this.isLegalAccepted(item);
  }
  isLegalAccepted(item) {
    return this.legalAcceptedIds().has(item.notificationId);
  }
  toggleLegalAccepted(item, checked) {
    this.legalAcceptedIds.update((current) => {
      const next = new Set(current);
      if (checked)
        next.add(item.notificationId);
      else
        next.delete(item.notificationId);
      return next;
    });
  }
  openCta(item) {
    openNotificationCta(item.cta, {
      router: this._router,
      quickChat: this._quickChat,
      openBell: () => this._notifications.requestOpenBell()
    });
  }
  trackById(_index, item) {
    return item.notificationId;
  }
  categoryIcon(category) {
    const map2 = {
      billing: "heroicons_solid:credit-card",
      security: "heroicons_solid:shield-check",
      legal: "heroicons_solid:scale",
      maintenance: "heroicons_solid:wrench-screwdriver",
      product: "heroicons_solid:sparkles",
      system: "heroicons_solid:bell"
    };
    return map2[category] ?? map2.system;
  }
  categoryLabelKey(category) {
    return `appNotifications.inbox.categories.${category}`;
  }
  _closeBanner(item, request$) {
    this.dismissingId.set(item.notificationId);
    this.actionErrorId.set(null);
    request$.subscribe({
      next: () => {
        this.dismissingId.set(null);
        this.banners.update((list) => list.filter((banner) => banner.notificationId !== item.notificationId));
      },
      error: () => {
        this.dismissingId.set(null);
        this.actionErrorId.set(item.notificationId);
      }
    });
  }
  _canUseApi() {
    if (!this._session.isTokenValid())
      return false;
    const payload = AuthUtils.getJwtPayload(localStorage.getItem("accessToken") || "");
    if (!payload)
      return false;
    return Boolean(payload["clientId"] ?? payload["staffId"] ?? payload["superAdminId"]);
  }
  static {
    this.\u0275fac = function HomeNotificationBannersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeNotificationBannersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeNotificationBannersComponent, selectors: [["app-home-notification-banners"]], decls: 1, vars: 1, consts: [[1, "home-banners"], [1, "home-banner"], ["aria-hidden", "true", 1, "home-banner__blob", "home-banner__blob--tr"], ["aria-hidden", "true", 1, "home-banner__blob", "home-banner__blob--bl"], [1, "home-banner__main"], ["aria-hidden", "true", 1, "home-banner__icon"], [3, "svgIcon"], [1, "home-banner__copy"], [1, "home-banner__pill"], [1, "home-banner__title"], [1, "home-banner__summary"], ["role", "alert", 1, "home-banner__error"], [1, "home-banner__actions"], ["type", "button", 1, "home-banner__dismiss", 3, "click", "disabled"], ["aria-hidden", "true", 3, "svgIcon"], ["target", "_blank", "rel", "noopener noreferrer", 1, "home-banner__legal", 3, "href"], [1, "home-banner__legal-check", 3, "change", "checked"], ["type", "button", 1, "home-banner__cta"], ["type", "button", 1, "home-banner__primary", 3, "disabled"], ["type", "button", 1, "home-banner__cta", 3, "click"], ["type", "button", 1, "home-banner__primary", 3, "click", "disabled"]], template: function HomeNotificationBannersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HomeNotificationBannersComponent_Conditional_0_Template, 3, 0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.banners().length ? 0 : -1);
      }
    }, dependencies: [MatCheckboxModule, MatCheckbox, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.home-banners[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.home-banner[_ngcontent-%COMP%] {\n  --banner-from: 238 242 255;\n  --banner-mid: 245 243 255;\n  --banner-to: 250 245 255;\n  --banner-border: 199 210 254;\n  --banner-accent: 79 70 229;\n  --banner-accent-2: 147 51 234;\n  --banner-icon: 67 56 202;\n  --banner-icon-2: 91 33 182;\n  --banner-ink: 30 27 75;\n  --banner-muted: 67 56 202;\n  position: relative;\n  isolation: isolate;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 40px;\n  align-items: start;\n  overflow: hidden;\n  width: 100%;\n  padding: 16px 12px 16px 16px;\n  border: 1px solid rgb(var(--banner-border)/0.85);\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      105deg,\n      rgb(var(--banner-from)/0.95) 0%,\n      rgb(var(--banner-mid)/0.98) 45%,\n      rgb(var(--banner-to)/0.96) 100%);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 28px -18px rgb(var(--banner-accent)/0.55);\n}\n.home-banner[data-category=billing][_ngcontent-%COMP%] {\n  --banner-from: 236 253 245;\n  --banner-mid: 240 253 250;\n  --banner-to: 255 255 255;\n  --banner-border: 167 243 208;\n  --banner-accent: 5 150 105;\n  --banner-accent-2: 13 148 136;\n  --banner-icon: 4 120 87;\n  --banner-icon-2: 6 95 70;\n  --banner-ink: 6 78 59;\n  --banner-muted: 4 120 87;\n}\n.home-banner[data-category=security][_ngcontent-%COMP%], \n.home-banner[data-category=legal][_ngcontent-%COMP%] {\n  --banner-from: 255 241 242;\n  --banner-mid: 255 247 237;\n  --banner-to: 255 255 255;\n  --banner-border: 254 205 211;\n  --banner-accent: 225 29 72;\n  --banner-accent-2: 234 88 12;\n  --banner-icon: 190 18 60;\n  --banner-icon-2: 194 65 12;\n  --banner-ink: 136 19 55;\n  --banner-muted: 190 18 60;\n}\n.home-banner[data-category=maintenance][_ngcontent-%COMP%] {\n  --banner-from: 255 251 235;\n  --banner-mid: 254 243 199;\n  --banner-to: 255 255 255;\n  --banner-border: 253 230 138;\n  --banner-accent: 217 119 6;\n  --banner-accent-2: 234 88 12;\n  --banner-icon: 180 83 9;\n  --banner-icon-2: 194 65 12;\n  --banner-ink: 120 53 15;\n  --banner-muted: 180 83 9;\n}\n.home-banner__blob[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  border-radius: 50%;\n  pointer-events: none;\n  filter: blur(48px);\n  opacity: 0.34;\n}\n.home-banner__blob--tr[_ngcontent-%COMP%] {\n  top: -64px;\n  right: -28px;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgb(var(--banner-accent)/0.95) 0%,\n      rgb(var(--banner-accent-2)) 55%,\n      transparent 100%);\n}\n.home-banner__blob--bl[_ngcontent-%COMP%] {\n  bottom: -48px;\n  left: -24px;\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      rgb(var(--banner-accent-2)/0.9) 0%,\n      rgb(var(--banner-accent)) 55%,\n      transparent 100%);\n}\n.home-banner__main[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 0;\n}\n.home-banner__icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex: 0 0 auto;\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      145deg,\n      rgb(var(--banner-icon)) 0%,\n      rgb(var(--banner-icon-2)) 100%);\n  color: #fff;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.28), 0 10px 18px -10px rgb(var(--banner-icon)/0.9);\n}\n.home-banner__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  min-width: 22px;\n  min-height: 22px;\n  font-size: 22px;\n  line-height: 22px;\n  color: #fff !important;\n}\n.home-banner__icon[_ngcontent-%COMP%]     svg {\n  display: block;\n  width: 22px;\n  height: 22px;\n  fill: #fff;\n}\n.home-banner__copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n  min-width: 0;\n  padding-top: 1px;\n}\n.home-banner__pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid rgb(var(--banner-accent)/0.25);\n  border-radius: 999px;\n  background: rgb(var(--banner-accent)/0.08);\n  padding: 2px 10px;\n  color: rgb(var(--banner-muted));\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  line-height: 1.4;\n  text-transform: uppercase;\n}\n.home-banner__title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgb(var(--banner-ink));\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n}\n.home-banner__summary[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  margin: 0;\n  overflow: hidden;\n  color: rgb(71, 85, 105);\n  font-size: 13px;\n  line-height: 1.45;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.home-banner__legal[_ngcontent-%COMP%] {\n  color: rgb(var(--banner-accent));\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.home-banner__legal-check[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.home-banner__error[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgb(190, 18, 60);\n  font-size: 13px;\n  line-height: 1.4;\n}\n.home-banner__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.home-banner__cta[_ngcontent-%COMP%], \n.home-banner__primary[_ngcontent-%COMP%] {\n  min-height: 34px;\n  margin: 0;\n  padding: 0 12px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1;\n  cursor: pointer;\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n}\n.home-banner__cta[_ngcontent-%COMP%] {\n  border: 1px solid rgb(var(--banner-accent)/0.35);\n  background: rgba(255, 255, 255, 0.72);\n  color: rgb(var(--banner-ink));\n}\n.home-banner__cta[_ngcontent-%COMP%]:hover {\n  background: #fff;\n}\n.home-banner__primary[_ngcontent-%COMP%] {\n  border: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(var(--banner-accent)) 0%,\n      rgb(var(--banner-accent-2)) 100%);\n  color: #fff;\n  box-shadow: 0 8px 16px -10px rgb(var(--banner-accent)/0.9);\n}\n.home-banner__primary[_ngcontent-%COMP%]:disabled, \n.home-banner__dismiss[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n.home-banner__cta[_ngcontent-%COMP%]:focus-visible, \n.home-banner__primary[_ngcontent-%COMP%]:focus-visible, \n.home-banner__dismiss[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(var(--banner-accent));\n  outline-offset: 2px;\n}\n.home-banner__dismiss[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  border-radius: 999px;\n  border: 1px solid rgb(var(--banner-ink)/0.12);\n  background: rgba(255, 255, 255, 0.88);\n  color: rgb(var(--banner-ink));\n  cursor: pointer;\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n}\n.home-banner__dismiss[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n  min-height: 18px;\n  font-size: 18px;\n  line-height: 18px;\n  color: rgb(var(--banner-ink)) !important;\n}\n.home-banner__dismiss[_ngcontent-%COMP%]     svg {\n  display: block;\n  width: 18px;\n  height: 18px;\n  fill: currentColor;\n}\n.home-banner__dismiss[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.8);\n}\n.dark[_nghost-%COMP%]   .home-banner[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-banner[_ngcontent-%COMP%] {\n  --banner-from: 30 41 59;\n  --banner-mid: 30 27 75;\n  --banner-to: 49 46 129;\n  --banner-border: 67 56 202;\n  --banner-ink: 238 242 255;\n  --banner-muted: 199 210 254;\n  background:\n    linear-gradient(\n      105deg,\n      rgb(var(--banner-from)/0.92) 0%,\n      rgb(var(--banner-mid)/0.55) 50%,\n      rgb(var(--banner-to)/0.35) 100%);\n  border-color: rgb(var(--banner-border)/0.45);\n}\n.dark[_nghost-%COMP%]   .home-banner[data-category=billing][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-banner[data-category=billing][_ngcontent-%COMP%] {\n  --banner-from: 6 78 59;\n  --banner-mid: 15 23 42;\n  --banner-to: 19 78 74;\n  --banner-border: 6 95 70;\n  --banner-accent: 52 211 153;\n  --banner-accent-2: 45 212 191;\n  --banner-icon: 6 95 70;\n  --banner-icon-2: 4 120 87;\n  --banner-ink: 236 253 245;\n  --banner-muted: 167 243 208;\n}\n.dark[_nghost-%COMP%]   .home-banner[data-category=security][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-banner[data-category=security][_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .home-banner[data-category=legal][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-banner[data-category=legal][_ngcontent-%COMP%] {\n  --banner-from: 76 5 25;\n  --banner-mid: 30 41 59;\n  --banner-to: 124 45 18;\n  --banner-border: 136 19 55;\n  --banner-accent: 251 113 133;\n  --banner-accent-2: 251 146 60;\n  --banner-icon: 159 18 57;\n  --banner-icon-2: 154 52 18;\n  --banner-ink: 255 241 242;\n  --banner-muted: 254 205 211;\n}\n.dark[_nghost-%COMP%]   .home-banner[data-category=maintenance][_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-banner[data-category=maintenance][_ngcontent-%COMP%] {\n  --banner-from: 120 53 15;\n  --banner-mid: 30 41 59;\n  --banner-to: 124 45 18;\n  --banner-border: 146 64 14;\n  --banner-accent: 251 191 36;\n  --banner-accent-2: 251 146 60;\n  --banner-icon: 146 64 14;\n  --banner-icon-2: 154 52 18;\n  --banner-ink: 255 251 235;\n  --banner-muted: 253 230 138;\n}\n.dark[_nghost-%COMP%]   .home-banner__summary[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-banner__summary[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.dark[_nghost-%COMP%]   .home-banner__cta[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-banner__cta[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.35);\n  color: rgb(var(--banner-ink));\n}\n.dark[_nghost-%COMP%]   .home-banner__cta[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .home-banner__cta[_ngcontent-%COMP%]:hover {\n  background: rgba(15, 23, 42, 0.55);\n}\n.dark[_nghost-%COMP%]   .home-banner__dismiss[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-banner__dismiss[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.16);\n  background: rgba(15, 23, 42, 0.72);\n  color: #fff;\n}\n.dark[_nghost-%COMP%]   .home-banner__dismiss[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .home-banner__dismiss[_ngcontent-%COMP%]:hover {\n  background: rgba(15, 23, 42, 0.6);\n}\n.dark[_nghost-%COMP%]   .home-banner__error[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-banner__error[_ngcontent-%COMP%] {\n  color: rgb(253, 164, 175);\n}\n/*# sourceMappingURL=home-notification-banners.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeNotificationBannersComponent, [{
    type: Component,
    args: [{ selector: "app-home-notification-banners", standalone: true, imports: [MatCheckboxModule, MatIconModule, TranslocoModule], template: `@if (banners().length) {\r
<div class="home-banners">\r
@for (banner of banners(); track trackById($index, banner)) {\r
    <section class="home-banner" [attr.data-category]="banner.category">\r
        <span class="home-banner__blob home-banner__blob--tr" aria-hidden="true"></span>\r
        <span class="home-banner__blob home-banner__blob--bl" aria-hidden="true"></span>\r
        <div class="home-banner__main">\r
            <span class="home-banner__icon" aria-hidden="true">\r
                <mat-icon [svgIcon]="categoryIcon(banner.category)"></mat-icon>\r
            </span>\r
            <div class="home-banner__copy">\r
                <span class="home-banner__pill">{{ categoryLabelKey(banner.category) | transloco }}</span>\r
                <h2 class="home-banner__title">{{ banner.content.title }}</h2>\r
                @if (banner.content.summary) {\r
                    <p class="home-banner__summary">{{ banner.content.summary }}</p>\r
                }\r
                @if (banner.interactionMode === 'accept' && banner.legal?.url) {\r
                    <a\r
                        class="home-banner__legal"\r
                        [href]="banner.legal.url"\r
                        target="_blank"\r
                        rel="noopener noreferrer"\r
                    >\r
                        {{ 'appNotifications.inbox.legalLink' | transloco }}\r
                    </a>\r
                    <mat-checkbox\r
                        class="home-banner__legal-check"\r
                        [checked]="isLegalAccepted(banner)"\r
                        (change)="toggleLegalAccepted(banner, $event.checked)"\r
                    >\r
                        {{ 'appNotifications.inbox.legalAcceptCheckbox' | transloco }}\r
                    </mat-checkbox>\r
                }\r
                @if (actionErrorId() === banner.notificationId) {\r
                    <p class="home-banner__error" role="alert">\r
                        {{ 'appNotifications.inbox.errors.action' | transloco }}\r
                    </p>\r
                }\r
                @if (showActions(banner)) {\r
                    <div class="home-banner__actions">\r
                        @if (showCta(banner)) {\r
                            <button class="home-banner__cta" type="button" (click)="openCta(banner)">\r
                                {{ banner.cta.label || ('appNotifications.inbox.ctaDefault' | transloco) }}\r
                            </button>\r
                        }\r
                        @if (showAcknowledge(banner)) {\r
                            <button\r
                                class="home-banner__primary"\r
                                type="button"\r
                                [disabled]="isBusy(banner)"\r
                                (click)="acknowledgeBanner(banner)"\r
                            >\r
                                {{ 'appNotifications.inbox.actions.acknowledge' | transloco }}\r
                            </button>\r
                        }\r
                        @if (showAccept(banner)) {\r
                            <button\r
                                class="home-banner__primary"\r
                                type="button"\r
                                [disabled]="acceptDisabled(banner)"\r
                                (click)="acceptBanner(banner)"\r
                            >\r
                                {{ 'appNotifications.inbox.actions.accept' | transloco }}\r
                            </button>\r
                        }\r
                    </div>\r
                }\r
            </div>\r
        </div>\r
        <button\r
            class="home-banner__dismiss"\r
            type="button"\r
            [disabled]="isBusy(banner)"\r
            [attr.aria-label]="'appNotifications.banners.dismissAria' | transloco"\r
            (click)="dismissBanner(banner)"\r
        >\r
            <mat-icon aria-hidden="true" [svgIcon]="'heroicons_outline:x-mark'"></mat-icon>\r
        </button>\r
    </section>\r
}\r
</div>\r
}\r
`, styles: ["/* src/app/modules/home/home-notification-banners/home-notification-banners.component.scss */\n:host {\n  display: block;\n}\n.home-banners {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.home-banner {\n  --banner-from: 238 242 255;\n  --banner-mid: 245 243 255;\n  --banner-to: 250 245 255;\n  --banner-border: 199 210 254;\n  --banner-accent: 79 70 229;\n  --banner-accent-2: 147 51 234;\n  --banner-icon: 67 56 202;\n  --banner-icon-2: 91 33 182;\n  --banner-ink: 30 27 75;\n  --banner-muted: 67 56 202;\n  position: relative;\n  isolation: isolate;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 40px;\n  align-items: start;\n  overflow: hidden;\n  width: 100%;\n  padding: 16px 12px 16px 16px;\n  border: 1px solid rgb(var(--banner-border)/0.85);\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      105deg,\n      rgb(var(--banner-from)/0.95) 0%,\n      rgb(var(--banner-mid)/0.98) 45%,\n      rgb(var(--banner-to)/0.96) 100%);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 28px -18px rgb(var(--banner-accent)/0.55);\n}\n.home-banner[data-category=billing] {\n  --banner-from: 236 253 245;\n  --banner-mid: 240 253 250;\n  --banner-to: 255 255 255;\n  --banner-border: 167 243 208;\n  --banner-accent: 5 150 105;\n  --banner-accent-2: 13 148 136;\n  --banner-icon: 4 120 87;\n  --banner-icon-2: 6 95 70;\n  --banner-ink: 6 78 59;\n  --banner-muted: 4 120 87;\n}\n.home-banner[data-category=security],\n.home-banner[data-category=legal] {\n  --banner-from: 255 241 242;\n  --banner-mid: 255 247 237;\n  --banner-to: 255 255 255;\n  --banner-border: 254 205 211;\n  --banner-accent: 225 29 72;\n  --banner-accent-2: 234 88 12;\n  --banner-icon: 190 18 60;\n  --banner-icon-2: 194 65 12;\n  --banner-ink: 136 19 55;\n  --banner-muted: 190 18 60;\n}\n.home-banner[data-category=maintenance] {\n  --banner-from: 255 251 235;\n  --banner-mid: 254 243 199;\n  --banner-to: 255 255 255;\n  --banner-border: 253 230 138;\n  --banner-accent: 217 119 6;\n  --banner-accent-2: 234 88 12;\n  --banner-icon: 180 83 9;\n  --banner-icon-2: 194 65 12;\n  --banner-ink: 120 53 15;\n  --banner-muted: 180 83 9;\n}\n.home-banner__blob {\n  position: absolute;\n  z-index: 0;\n  border-radius: 50%;\n  pointer-events: none;\n  filter: blur(48px);\n  opacity: 0.34;\n}\n.home-banner__blob--tr {\n  top: -64px;\n  right: -28px;\n  width: 150px;\n  height: 150px;\n  background:\n    radial-gradient(\n      circle,\n      rgb(var(--banner-accent)/0.95) 0%,\n      rgb(var(--banner-accent-2)) 55%,\n      transparent 100%);\n}\n.home-banner__blob--bl {\n  bottom: -48px;\n  left: -24px;\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      rgb(var(--banner-accent-2)/0.9) 0%,\n      rgb(var(--banner-accent)) 55%,\n      transparent 100%);\n}\n.home-banner__main {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 0;\n}\n.home-banner__icon {\n  display: grid;\n  place-items: center;\n  flex: 0 0 auto;\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      145deg,\n      rgb(var(--banner-icon)) 0%,\n      rgb(var(--banner-icon-2)) 100%);\n  color: #fff;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.28), 0 10px 18px -10px rgb(var(--banner-icon)/0.9);\n}\n.home-banner__icon mat-icon {\n  width: 22px;\n  height: 22px;\n  min-width: 22px;\n  min-height: 22px;\n  font-size: 22px;\n  line-height: 22px;\n  color: #fff !important;\n}\n.home-banner__icon ::ng-deep svg {\n  display: block;\n  width: 22px;\n  height: 22px;\n  fill: #fff;\n}\n.home-banner__copy {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n  min-width: 0;\n  padding-top: 1px;\n}\n.home-banner__pill {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid rgb(var(--banner-accent)/0.25);\n  border-radius: 999px;\n  background: rgb(var(--banner-accent)/0.08);\n  padding: 2px 10px;\n  color: rgb(var(--banner-muted));\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  line-height: 1.4;\n  text-transform: uppercase;\n}\n.home-banner__title {\n  margin: 0;\n  color: rgb(var(--banner-ink));\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n}\n.home-banner__summary {\n  display: -webkit-box;\n  margin: 0;\n  overflow: hidden;\n  color: rgb(71, 85, 105);\n  font-size: 13px;\n  line-height: 1.45;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.home-banner__legal {\n  color: rgb(var(--banner-accent));\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.home-banner__legal-check {\n  font-size: 13px;\n}\n.home-banner__error {\n  margin: 0;\n  color: rgb(190, 18, 60);\n  font-size: 13px;\n  line-height: 1.4;\n}\n.home-banner__actions {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.home-banner__cta,\n.home-banner__primary {\n  min-height: 34px;\n  margin: 0;\n  padding: 0 12px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 1;\n  cursor: pointer;\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n}\n.home-banner__cta {\n  border: 1px solid rgb(var(--banner-accent)/0.35);\n  background: rgba(255, 255, 255, 0.72);\n  color: rgb(var(--banner-ink));\n}\n.home-banner__cta:hover {\n  background: #fff;\n}\n.home-banner__primary {\n  border: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(var(--banner-accent)) 0%,\n      rgb(var(--banner-accent-2)) 100%);\n  color: #fff;\n  box-shadow: 0 8px 16px -10px rgb(var(--banner-accent)/0.9);\n}\n.home-banner__primary:disabled,\n.home-banner__dismiss:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n.home-banner__cta:focus-visible,\n.home-banner__primary:focus-visible,\n.home-banner__dismiss:focus-visible {\n  outline: 2px solid rgb(var(--banner-accent));\n  outline-offset: 2px;\n}\n.home-banner__dismiss {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  border-radius: 999px;\n  border: 1px solid rgb(var(--banner-ink)/0.12);\n  background: rgba(255, 255, 255, 0.88);\n  color: rgb(var(--banner-ink));\n  cursor: pointer;\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n}\n.home-banner__dismiss mat-icon {\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n  min-height: 18px;\n  font-size: 18px;\n  line-height: 18px;\n  color: rgb(var(--banner-ink)) !important;\n}\n.home-banner__dismiss ::ng-deep svg {\n  display: block;\n  width: 18px;\n  height: 18px;\n  fill: currentColor;\n}\n.home-banner__dismiss:hover {\n  background: rgba(255, 255, 255, 0.8);\n}\n:host-context(.dark) .home-banner {\n  --banner-from: 30 41 59;\n  --banner-mid: 30 27 75;\n  --banner-to: 49 46 129;\n  --banner-border: 67 56 202;\n  --banner-ink: 238 242 255;\n  --banner-muted: 199 210 254;\n  background:\n    linear-gradient(\n      105deg,\n      rgb(var(--banner-from)/0.92) 0%,\n      rgb(var(--banner-mid)/0.55) 50%,\n      rgb(var(--banner-to)/0.35) 100%);\n  border-color: rgb(var(--banner-border)/0.45);\n}\n:host-context(.dark) .home-banner[data-category=billing] {\n  --banner-from: 6 78 59;\n  --banner-mid: 15 23 42;\n  --banner-to: 19 78 74;\n  --banner-border: 6 95 70;\n  --banner-accent: 52 211 153;\n  --banner-accent-2: 45 212 191;\n  --banner-icon: 6 95 70;\n  --banner-icon-2: 4 120 87;\n  --banner-ink: 236 253 245;\n  --banner-muted: 167 243 208;\n}\n:host-context(.dark) .home-banner[data-category=security],\n:host-context(.dark) .home-banner[data-category=legal] {\n  --banner-from: 76 5 25;\n  --banner-mid: 30 41 59;\n  --banner-to: 124 45 18;\n  --banner-border: 136 19 55;\n  --banner-accent: 251 113 133;\n  --banner-accent-2: 251 146 60;\n  --banner-icon: 159 18 57;\n  --banner-icon-2: 154 52 18;\n  --banner-ink: 255 241 242;\n  --banner-muted: 254 205 211;\n}\n:host-context(.dark) .home-banner[data-category=maintenance] {\n  --banner-from: 120 53 15;\n  --banner-mid: 30 41 59;\n  --banner-to: 124 45 18;\n  --banner-border: 146 64 14;\n  --banner-accent: 251 191 36;\n  --banner-accent-2: 251 146 60;\n  --banner-icon: 146 64 14;\n  --banner-icon-2: 154 52 18;\n  --banner-ink: 255 251 235;\n  --banner-muted: 253 230 138;\n}\n:host-context(.dark) .home-banner__summary {\n  color: rgb(203, 213, 225);\n}\n:host-context(.dark) .home-banner__cta {\n  background: rgba(15, 23, 42, 0.35);\n  color: rgb(var(--banner-ink));\n}\n:host-context(.dark) .home-banner__cta:hover {\n  background: rgba(15, 23, 42, 0.55);\n}\n:host-context(.dark) .home-banner__dismiss {\n  border-color: rgba(255, 255, 255, 0.16);\n  background: rgba(15, 23, 42, 0.72);\n  color: #fff;\n}\n:host-context(.dark) .home-banner__dismiss:hover {\n  background: rgba(15, 23, 42, 0.6);\n}\n:host-context(.dark) .home-banner__error {\n  color: rgb(253, 164, 175);\n}\n/*# sourceMappingURL=home-notification-banners.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeNotificationBannersComponent, { className: "HomeNotificationBannersComponent", filePath: "src/app/modules/home/home-notification-banners/home-notification-banners.component.ts", lineNumber: 24 });
})();

// src/app/modules/home/home.service.ts
var HomeService = class _HomeService {
  constructor() {
    this._httpClient = inject(HttpClient);
    this._sessionService = inject(SessionService);
    this.countData = signal(null);
    this.monthlyData = signal(null);
    this.topSalesData = signal(null);
    this.dashboardData = signal(null);
    this.loading = signal(false);
    this.error = signal(null);
  }
  /**
   * Fetch stats when authenticated. Uses year/month params for count, monthly,
   * top-sales; pulls the full dashboard payload (expenses, distribution,
   * lastMonthRequests, topCodes) from `/v2/clients/dashboard`.
   */
  fetchStats() {
    if (!this._sessionService.hasValidAuthentication()) {
      this.countData.set(null);
      this.monthlyData.set(null);
      this.topSalesData.set(null);
      this.dashboardData.set(null);
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const month = (/* @__PURE__ */ new Date()).getMonth() + 1;
    const apiUrl = environment.apiUrl;
    const token = localStorage.getItem("accessToken");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const count$ = this._httpClient.get(`${apiUrl}/v2/api-requests/count`, {
      params: { year: year.toString(), month: month.toString() },
      headers
    }).pipe(tap((data) => this.countData.set(Array.isArray(data) ? data : [])), catchError(() => {
      this.error.set("Failed to load stats");
      this.countData.set(null);
      return of(null);
    }));
    const monthly$ = this._httpClient.get(`${apiUrl}/v2/api-requests/monthly`, {
      params: { year: year.toString() },
      headers
    }).pipe(tap((data) => this.monthlyData.set(Array.isArray(data) ? data : [])), catchError(() => {
      this.monthlyData.set(null);
      return of(null);
    }));
    const topSales$ = this._httpClient.get(`${apiUrl}/v2/api-requests/top-sales`, {
      params: { year: year.toString(), month: month.toString() },
      headers
    }).pipe(tap((data) => this.topSalesData.set(Array.isArray(data) ? data : [])), catchError(() => {
      this.topSalesData.set(null);
      return of(null);
    }));
    const dashboard$ = this._httpClient.get(`${apiUrl}/v2/clients/dashboard`, {
      params: {
        weeklyExpenses: "1",
        monthlyExpenses: "1",
        yearlyExpenses: "1",
        topCodes: "1",
        distribution: "1",
        lastMonthRequests: "1"
      },
      headers
    }).pipe(map((response) => response && "data" in response ? response.data : response), tap((data) => this.dashboardData.set(data ?? null)), catchError(() => {
      this.dashboardData.set(null);
      return of(null);
    }));
    forkJoin({ count: count$, monthly: monthly$, topSales: topSales$, dashboard: dashboard$ }).pipe(finalize(() => this.loading.set(false))).subscribe();
  }
  /** Aggregated totals from count data for the current client */
  getAggregatedTotals() {
    const data = this.countData();
    if (!data || data.length === 0) {
      return { total: 0, ok: 0, failed: 0, credits: 0 };
    }
    return data.reduce((acc, item) => ({
      total: acc.total + (item.total ?? 0),
      ok: acc.ok + (item.ok ?? 0),
      failed: acc.failed + (item.failed ?? 0),
      credits: acc.credits + (item.credits ?? 0)
    }), { total: 0, ok: 0, failed: 0, credits: 0 });
  }
  static {
    this.\u0275fac = function HomeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeService, factory: _HomeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/home/onboarding-quests/onboarding-quests.component.ts
var _c02 = (a0) => ({ count: a0 });
var _c12 = (a0) => ({ amount: a0 });
var _c22 = (a0) => ({ value: a0 });
var _forTrack0 = ($index, $item) => $item.taskId;
function OnboardingQuestsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "home.onboarding.quests.allDoneTitle"), " ");
  }
}
function OnboardingQuestsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "home.onboarding.quests.questsRemaining", \u0275\u0275pureFunction1(4, _c02, ctx_r0.openQuests().length)), " ");
  }
}
function OnboardingQuestsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 4, "home.onboarding.activated", \u0275\u0275pureFunction1(7, _c12, \u0275\u0275pipeBind2(1, 1, ctx_r0.totalRewarded(), "1.2-2"))), " ");
  }
}
function OnboardingQuestsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 4, "home.onboarding.pendingApproval", \u0275\u0275pureFunction1(7, _c12, \u0275\u0275pipeBind2(1, 1, ctx_r0.totalRewarded(), "1.2-2"))), " ");
  }
}
function OnboardingQuestsComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const milestone_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", milestone_r2, "%");
    \u0275\u0275classProp("quest-marker--reached", ctx_r0.isMilestoneReached(milestone_r2));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind2(1, 6, "home.onboarding.quests.milestoneReached", \u0275\u0275pureFunction1(9, _c22, milestone_r2)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", milestone_r2 === 100 ? "emoji_events" : "star", " ");
  }
}
function OnboardingQuestsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "mat-icon", 26);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "home.onboarding.failedVerification"));
  }
}
function OnboardingQuestsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 27)(2, "mat-icon");
    \u0275\u0275text(3, "emoji_events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 28);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 29);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "home.onboarding.quests.allDoneTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, "home.onboarding.quests.allDoneBody"));
  }
}
function OnboardingQuestsComponent_Conditional_35_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 26);
    \u0275\u0275text(1, "warning");
    \u0275\u0275elementEnd();
  }
}
function OnboardingQuestsComponent_Conditional_35_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 26);
    \u0275\u0275text(1, "play_circle");
    \u0275\u0275elementEnd();
  }
}
function OnboardingQuestsComponent_Conditional_35_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 26);
    \u0275\u0275text(1, "radio_button_unchecked");
    \u0275\u0275elementEnd();
  }
}
function OnboardingQuestsComponent_Conditional_35_For_5_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "home.onboarding.quests.activeQuest"), " ");
  }
}
function OnboardingQuestsComponent_Conditional_35_For_5_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "home.onboarding.statusLabels." + task_r4.status), " ");
  }
}
function OnboardingQuestsComponent_Conditional_35_For_5_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 42);
  }
}
function OnboardingQuestsComponent_Conditional_35_For_5_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function OnboardingQuestsComponent_Conditional_35_For_5_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onStartKyc());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "home.onboarding.completeTask"), " ");
  }
}
function OnboardingQuestsComponent_Conditional_35_For_5_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", ctx_r0.taskLink()(task_r4.taskId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "home.onboarding.completeTask"), " ");
  }
}
function OnboardingQuestsComponent_Conditional_35_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275template(3, OnboardingQuestsComponent_Conditional_35_For_5_Conditional_3_Template, 2, 0, "mat-icon", 26)(4, OnboardingQuestsComponent_Conditional_35_For_5_Conditional_4_Template, 2, 0, "mat-icon", 26)(5, OnboardingQuestsComponent_Conditional_35_For_5_Conditional_5_Template, 2, 0, "mat-icon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 36);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 37);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("click", function OnboardingQuestsComponent_Conditional_35_For_5_Template_button_click_9_listener() {
      const task_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOpenExplanation(task_r4));
    });
    \u0275\u0275elementStart(11, "mat-icon", 26);
    \u0275\u0275text(12, "help_outline");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 38)(14, "span", 39);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, OnboardingQuestsComponent_Conditional_35_For_5_Conditional_17_Template, 3, 3, "span", 40)(18, OnboardingQuestsComponent_Conditional_35_For_5_Conditional_18_Template, 3, 3, "span", 41)(19, OnboardingQuestsComponent_Conditional_35_For_5_Conditional_19_Template, 1, 0, "mat-spinner", 42)(20, OnboardingQuestsComponent_Conditional_35_For_5_Conditional_20_Template, 3, 3, "button", 43)(21, OnboardingQuestsComponent_Conditional_35_For_5_Conditional_21_Template, 3, 4, "a", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r4 = ctx.$implicit;
    const \u0275$index_102_r6 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--quest-row-index", \u0275$index_102_r6);
    \u0275\u0275classProp("quest-row--active", \u0275$index_102_r6 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-status", task_r4.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r4.status === "STUCK" ? 3 : task_r4.status === "STARTED" || task_r4.status === "VISITED" ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 11, "home.onboarding.tasks." + task_r4.taskId), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(10, 13, "home.onboarding.explanationModal.helpTooltip"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 15, "home.onboarding.taskReward"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_102_r6 === 0 ? 17 : 18);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.verifyingTaskId() === task_r4.taskId ? 19 : task_r4.taskId === "complete_kyc" ? 20 : 21);
  }
}
function OnboardingQuestsComponent_Conditional_35_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "home.onboarding.quests.moreQuests", \u0275\u0275pureFunction1(4, _c02, ctx_r0.hiddenQuestCount())), " ");
  }
}
function OnboardingQuestsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, OnboardingQuestsComponent_Conditional_35_For_5_Template, 22, 17, "article", 31, _forTrack0);
    \u0275\u0275template(6, OnboardingQuestsComponent_Conditional_35_Conditional_6_Template, 3, 6, "p", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "home.onboarding.quests.nextUp"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.nextQuests());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.hiddenQuestCount() > 0 ? 6 : -1);
  }
}
function OnboardingQuestsComponent_Conditional_36_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 51)(1, "mat-icon", 26);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 37);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function OnboardingQuestsComponent_Conditional_36_Conditional_9_For_2_Template_button_click_6_listener() {
      const task_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onOpenExplanation(task_r9));
    });
    \u0275\u0275elementStart(8, "mat-icon", 26);
    \u0275\u0275text(9, "help_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r9 = ctx.$implicit;
    const \u0275$index_183_r10 = ctx.$index;
    \u0275\u0275styleProp("--quest-row-index", \u0275$index_183_r10);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "home.onboarding.tasks." + task_r9.taskId));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(7, 6, "home.onboarding.explanationModal.helpTooltip"));
  }
}
function OnboardingQuestsComponent_Conditional_36_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 49);
    \u0275\u0275repeaterCreate(1, OnboardingQuestsComponent_Conditional_36_Conditional_9_For_2_Template, 10, 8, "li", 50, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.completedQuests());
  }
}
function OnboardingQuestsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 46);
    \u0275\u0275listener("click", function OnboardingQuestsComponent_Conditional_36_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCompleted());
    });
    \u0275\u0275elementStart(2, "mat-icon", 47);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-icon", 48);
    \u0275\u0275text(8, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, OnboardingQuestsComponent_Conditional_36_Conditional_9_Template, 3, 0, "ul", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, "home.onboarding.quests.completedCount", \u0275\u0275pureFunction1(7, _c02, ctx_r0.completedCount())), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("quest-completed__chevron--open", ctx_r0.completedExpanded());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.completedExpanded() ? 9 : -1);
  }
}
var NEXT_UP_LIMIT = 3;
var RING_CIRCUMFERENCE = 2 * Math.PI * 34;
var MILESTONES = [25, 50, 75, 100];
var OnboardingQuestsComponent = class _OnboardingQuestsComponent {
  constructor() {
    this.onboarding = input(null);
    this.verifyingTaskId = input(null);
    this.verificationError = input(null);
    this.taskLink = input.required();
    this.openExplanation = output();
    this.startKyc = output();
    this.ringCircumference = RING_CIRCUMFERENCE;
    this.milestones = MILESTONES;
    this.completedExpanded = signal(false);
    this.tasks = computed(() => this.onboarding()?.tasks ?? []);
    this.completedQuests = computed(() => this.tasks().filter((task) => task.status === "COMPLETED"));
    this.openQuests = computed(() => this.tasks().filter((task) => task.status !== "COMPLETED"));
    this.nextQuests = computed(() => this.openQuests().slice(0, NEXT_UP_LIMIT));
    this.hiddenQuestCount = computed(() => Math.max(0, this.openQuests().length - NEXT_UP_LIMIT));
    this.completedCount = computed(() => this.completedQuests().length);
    this.totalCount = computed(() => this.tasks().length);
    this.progressPercentage = computed(() => {
      const total = this.totalCount();
      if (!total)
        return 0;
      return this.completedCount() / total * 100;
    });
    this.allQuestsComplete = computed(() => this.totalCount() > 0 && this.openQuests().length === 0);
    this.totalRewarded = computed(() => this.onboarding()?.totalRewardedAmount ?? 0);
    this.isActivated = computed(() => this.onboarding()?.isActivated ?? false);
    this.ringOffset = computed(() => RING_CIRCUMFERENCE - this.progressPercentage() / 100 * RING_CIRCUMFERENCE);
  }
  /**
   * True once the checklist has passed the given milestone percentage.
   */
  isMilestoneReached(milestone) {
    return this.progressPercentage() >= milestone;
  }
  toggleCompleted() {
    this.completedExpanded.update((expanded) => !expanded);
  }
  onOpenExplanation(task) {
    this.openExplanation.emit({ taskId: task.taskId, status: task.status });
  }
  onStartKyc() {
    this.startKyc.emit();
  }
  static {
    this.\u0275fac = function OnboardingQuestsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OnboardingQuestsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OnboardingQuestsComponent, selectors: [["app-onboarding-quests"]], inputs: { onboarding: [1, "onboarding"], verifyingTaskId: [1, "verifyingTaskId"], verificationError: [1, "verificationError"], taskLink: [1, "taskLink"] }, outputs: { openExplanation: "openExplanation", startKyc: "startKyc" }, decls: 37, vars: 22, consts: [[1, "quest-card"], [1, "quest-card__header"], [1, "quest-ring-wrap"], ["viewBox", "0 0 80 80", "aria-hidden", "true", 1, "quest-ring"], ["cx", "40", "cy", "40", "r", "34", 1, "quest-ring__track"], ["cx", "40", "cy", "40", "r", "34", 1, "quest-ring__fill"], [1, "quest-ring__value"], [1, "quest-ring__total"], [1, "quest-card__intro"], [1, "quest-card__title"], [1, "quest-card__meta"], [1, "quest-reward"], [1, "icon-size-5"], [1, "quest-reward__amount"], [1, "quest-reward__note"], [1, "quest-track"], [1, "quest-track__bar"], [1, "quest-track__fill"], [1, "quest-track__markers"], [1, "quest-marker", 3, "quest-marker--reached", "left"], [1, "quest-error"], [1, "quest-trophy"], [1, "quest-list"], [1, "quest-completed"], [1, "quest-marker"], [1, "icon-size-3"], [1, "icon-size-4"], [1, "quest-trophy__badge"], [1, "quest-trophy__title"], [1, "quest-trophy__body"], [1, "quest-list__label"], [1, "quest-row", 3, "quest-row--active", "--quest-row-index"], [1, "quest-list__more"], [1, "quest-row"], [1, "quest-row__head"], [1, "quest-row__status"], [1, "quest-row__title"], ["type", "button", 1, "quest-row__help", 3, "click", "title"], [1, "quest-row__foot"], [1, "quest-chip"], [1, "quest-chip", "quest-chip--active"], [1, "quest-row__status-label"], ["diameter", "18", 1, "quest-row__spinner"], ["type", "button", 1, "quest-row__cta"], [1, "quest-row__cta", 3, "routerLink"], ["type", "button", 1, "quest-row__cta", 3, "click"], ["type", "button", 1, "quest-completed__toggle", 3, "click"], [1, "icon-size-4", "quest-completed__check"], [1, "icon-size-4", "quest-completed__chevron"], [1, "quest-completed__list"], [1, "quest-done-row", 3, "--quest-row-index"], [1, "quest-done-row"]], template: function OnboardingQuestsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "circle", 4)(5, "circle", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "span", 6)(7, "strong");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 8)(12, "h2", 9);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 10);
        \u0275\u0275template(16, OnboardingQuestsComponent_Conditional_16_Template, 2, 3)(17, OnboardingQuestsComponent_Conditional_17_Template, 2, 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 11)(19, "mat-icon", 12);
        \u0275\u0275text(20, "savings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 13);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 14);
        \u0275\u0275template(25, OnboardingQuestsComponent_Conditional_25_Template, 3, 9)(26, OnboardingQuestsComponent_Conditional_26_Template, 3, 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 15)(28, "div", 16);
        \u0275\u0275element(29, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 18);
        \u0275\u0275repeaterCreate(31, OnboardingQuestsComponent_For_32_Template, 4, 11, "span", 19, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(33, OnboardingQuestsComponent_Conditional_33_Template, 6, 3, "div", 20)(34, OnboardingQuestsComponent_Conditional_34_Template, 10, 6, "div", 21)(35, OnboardingQuestsComponent_Conditional_35_Template, 7, 4, "div", 22)(36, OnboardingQuestsComponent_Conditional_36_Template, 10, 9, "div", 23);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("quest-card--complete", ctx.allQuestsComplete());
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("stroke-dasharray", ctx.ringCircumference)("stroke-dashoffset", ctx.ringOffset());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.completedCount());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("/", ctx.totalCount(), "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 17, "home.onboarding.title"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.allQuestsComplete() ? 16 : 17);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(23, 19, ctx.totalRewarded(), "1.2-2"), " USD");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isActivated() ? 25 : 26);
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("width", ctx.progressPercentage(), "%");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.milestones);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.verificationError() ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allQuestsComplete() ? 34 : 35);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.completedCount() > 0 ? 36 : -1);
      }
    }, dependencies: [
      CommonModule,
      DecimalPipe,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      RouterLink,
      TranslocoModule,
      TranslocoPipe
    ], styles: ["/* src/app/modules/home/onboarding-quests/onboarding-quests.component.scss */\n.quest-card {\n  --quest-surface: rgb(255, 255, 255);\n  --quest-well: rgb(248, 250, 252);\n  --quest-border: rgba(148, 163, 184, 0.22);\n  --quest-hairline: rgba(148, 163, 184, 0.18);\n  --quest-title: rgb(15, 23, 42);\n  --quest-text: rgb(51, 65, 85);\n  --quest-muted: rgb(100, 116, 139);\n  --quest-faint: rgb(148, 163, 184);\n  --quest-accent: rgb(79, 70, 229);\n  --quest-accent-soft: rgb(238, 242, 255);\n  --quest-track: rgb(226, 232, 240);\n  --quest-success: rgb(5, 150, 105);\n  --quest-success-soft: rgba(16, 185, 129, 0.12);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1.25rem;\n  border: 1px solid var(--quest-border);\n  border-radius: 16px;\n  background: var(--quest-surface);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n.dark .quest-card {\n  --quest-surface: rgb(30, 41, 59);\n  --quest-well: rgba(15, 23, 42, 0.55);\n  --quest-border: rgba(148, 163, 184, 0.18);\n  --quest-hairline: rgba(148, 163, 184, 0.14);\n  --quest-title: rgb(248, 250, 252);\n  --quest-text: rgb(226, 232, 240);\n  --quest-muted: rgb(148, 163, 184);\n  --quest-faint: rgb(100, 116, 139);\n  --quest-accent: rgb(129, 140, 248);\n  --quest-accent-soft: rgba(79, 70, 229, 0.18);\n  --quest-track: rgb(51, 65, 85);\n  --quest-success: rgb(52, 211, 153);\n  --quest-success-soft: rgba(16, 185, 129, 0.16);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.quest-card--complete {\n  border-color: var(--quest-success-soft);\n}\n.quest-card__header {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n}\n.quest-ring-wrap {\n  position: relative;\n  flex-shrink: 0;\n  width: 72px;\n  height: 72px;\n}\n.quest-ring {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.quest-ring__track {\n  fill: none;\n  stroke: var(--quest-track);\n  stroke-width: 7;\n}\n.quest-ring__fill {\n  fill: none;\n  stroke: var(--quest-accent);\n  stroke-width: 7;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.quest-card--complete .quest-ring__fill {\n  stroke: var(--quest-success);\n}\n.quest-ring__value {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  color: var(--quest-title);\n  font-size: 1.05rem;\n  font-weight: 700;\n  line-height: 72px;\n}\n.quest-ring__total {\n  color: var(--quest-faint);\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.quest-card__intro {\n  min-width: 0;\n}\n.quest-card__title {\n  margin: 0;\n  color: var(--quest-title);\n  font-size: 0.9375rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.quest-card__meta {\n  margin: 0.25rem 0 0;\n  color: var(--quest-muted);\n  font-size: 0.75rem;\n  line-height: 1.35;\n}\n.quest-reward {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.25rem 0.5rem;\n  padding: 0.625rem 0.75rem;\n  border: 1px solid var(--quest-hairline);\n  border-radius: 12px;\n  background: var(--quest-well);\n}\n.quest-reward .mat-icon {\n  color: var(--quest-success);\n}\n.quest-reward__amount {\n  color: var(--quest-success);\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: -0.01em;\n}\n.quest-reward__note {\n  flex: 1 1 100%;\n  color: var(--quest-muted);\n  font-size: 0.6875rem;\n  line-height: 1.3;\n}\n.quest-track {\n  position: relative;\n  padding-bottom: 0.5rem;\n}\n.quest-track__bar {\n  height: 8px;\n  border-radius: 9999px;\n  background: var(--quest-track);\n  overflow: hidden;\n}\n.quest-track__fill {\n  height: 100%;\n  border-radius: 9999px;\n  background:\n    linear-gradient(\n      90deg,\n      rgb(99, 102, 241),\n      rgb(168, 85, 247));\n  transition: width 900ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.quest-card--complete .quest-track__fill {\n  background:\n    linear-gradient(\n      90deg,\n      rgb(16, 185, 129),\n      rgb(52, 211, 153));\n}\n.quest-track__markers {\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 8px;\n}\n.quest-marker {\n  position: absolute;\n  top: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--quest-surface);\n  border-radius: 9999px;\n  background: var(--quest-track);\n  color: var(--quest-faint);\n  transform: translate(-50%, -50%);\n  transition:\n    background-color 300ms ease,\n    color 300ms ease,\n    transform 300ms ease;\n}\n.quest-marker .mat-icon {\n  width: 10px;\n  height: 10px;\n  font-size: 10px;\n  line-height: 10px;\n}\n.quest-marker--reached {\n  background: rgb(251, 191, 36);\n  color: rgb(120, 53, 15);\n  transform: translate(-50%, -50%) scale(1.08);\n}\n.quest-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid rgba(220, 38, 38, 0.25);\n  border-radius: 10px;\n  background: rgba(254, 242, 242, 0.9);\n  color: rgb(185, 28, 28);\n  font-size: 0.75rem;\n}\n.quest-error .mat-icon {\n  color: rgb(220, 38, 38);\n}\n.dark .quest-error {\n  background: rgba(153, 27, 27, 0.2);\n  border-color: rgba(248, 113, 113, 0.3);\n  color: rgb(252, 165, 165);\n}\n.quest-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.quest-list__label {\n  margin: 0;\n  color: var(--quest-muted);\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.quest-list__more {\n  margin: 0.125rem 0 0;\n  color: var(--quest-faint);\n  font-size: 0.6875rem;\n  text-align: center;\n}\n.quest-row {\n  padding: 0.75rem;\n  border: 1px solid var(--quest-hairline);\n  border-radius: 12px;\n  background: var(--quest-well);\n  animation: quest-row-in 420ms cubic-bezier(0.22, 1, 0.36, 1) backwards;\n  animation-delay: calc(var(--quest-row-index, 0) * 70ms);\n  transition: border-color 200ms ease, transform 200ms ease;\n}\n.quest-row:hover {\n  border-color: var(--quest-accent);\n}\n.quest-row--active {\n  border-color: var(--quest-accent);\n  background: var(--quest-accent-soft);\n  box-shadow: 0 0 0 3px var(--quest-accent-soft);\n}\n.quest-row__head {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.quest-row__status {\n  flex-shrink: 0;\n  color: var(--quest-faint);\n}\n.quest-row__status[data-status=STUCK] {\n  color: rgb(245, 158, 11);\n}\n.quest-row__status[data-status=STARTED],\n.quest-row__status[data-status=VISITED] {\n  color: var(--quest-accent);\n}\n.quest-row__title {\n  flex: 1;\n  margin: 0;\n  color: var(--quest-title);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  line-height: 1.35;\n}\n.quest-row__help {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border: 0;\n  border-radius: 9999px;\n  background: transparent;\n  color: var(--quest-faint);\n  cursor: pointer;\n  transition: color 150ms ease;\n}\n.quest-row__help:hover {\n  color: var(--quest-accent);\n}\n.quest-row__foot {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.375rem;\n  margin-top: 0.625rem;\n}\n.quest-chip {\n  padding: 0.125rem 0.4rem;\n  border-radius: 6px;\n  background: var(--quest-success-soft);\n  color: var(--quest-success);\n  font-size: 0.625rem;\n  font-weight: 700;\n}\n.quest-chip--active {\n  background: var(--quest-accent-soft);\n  color: var(--quest-accent);\n}\n.quest-row__status-label {\n  color: var(--quest-faint);\n  font-size: 0.6875rem;\n}\n.quest-row__spinner {\n  margin-left: auto;\n}\n.quest-row__cta {\n  margin-left: auto;\n  padding: 0.3rem 0.7rem;\n  border: 0;\n  border-radius: 8px;\n  background: var(--quest-accent);\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: filter 150ms ease;\n}\n.quest-row__cta:hover {\n  filter: brightness(1.08);\n  text-decoration: none;\n}\n.quest-trophy {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 1rem 0.75rem;\n  border: 1px dashed var(--quest-success);\n  border-radius: 12px;\n  background: var(--quest-success-soft);\n  text-align: center;\n}\n.quest-trophy__badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 9999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(251, 191, 36),\n      rgb(245, 158, 11));\n  color: rgb(120, 53, 15);\n  box-shadow: 0 6px 16px -6px rgba(245, 158, 11, 0.7);\n  animation: quest-trophy-pop 620ms cubic-bezier(0.34, 1.56, 0.64, 1) backwards;\n}\n.quest-trophy__title {\n  margin: 0;\n  color: var(--quest-title);\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.quest-trophy__body {\n  margin: 0;\n  color: var(--quest-muted);\n  font-size: 0.75rem;\n  line-height: 1.4;\n}\n.quest-completed {\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--quest-hairline);\n}\n.quest-completed__toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.375rem 0.25rem;\n  border: 0;\n  border-radius: 8px;\n  background: transparent;\n  color: var(--quest-text);\n  font-family: inherit;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: color 150ms ease;\n}\n.quest-completed__toggle:hover {\n  color: var(--quest-title);\n}\n.quest-completed__check {\n  color: var(--quest-success);\n}\n.quest-completed__chevron {\n  margin-left: auto;\n  color: var(--quest-faint);\n  transition: transform 200ms ease;\n}\n.quest-completed__chevron--open {\n  transform: rotate(180deg);\n}\n.quest-completed__list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  margin: 0.25rem 0 0;\n  padding: 0;\n  list-style: none;\n}\n.quest-done-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.25rem;\n  color: var(--quest-muted);\n  font-size: 0.75rem;\n  line-height: 1.3;\n  animation: quest-row-in 300ms ease backwards;\n  animation-delay: calc(var(--quest-row-index, 0) * 35ms);\n}\n.quest-done-row .mat-icon {\n  flex-shrink: 0;\n  color: var(--quest-success);\n}\n.quest-done-row span {\n  flex: 1;\n}\n@keyframes quest-row-in {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes quest-trophy-pop {\n  from {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .quest-ring__fill,\n  .quest-track__fill,\n  .quest-marker,\n  .quest-completed__chevron {\n    transition: none;\n  }\n  .quest-row,\n  .quest-done-row,\n  .quest-trophy__badge {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=onboarding-quests.component.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OnboardingQuestsComponent, [{
    type: Component,
    args: [{ selector: "app-onboarding-quests", standalone: true, imports: [
      CommonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      RouterLink,
      TranslocoModule
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="quest-card" [class.quest-card--complete]="allQuestsComplete()">\r
    <!-- Header: progress ring, tier, rewards -->\r
    <header class="quest-card__header">\r
        <div class="quest-ring-wrap">\r
            <svg class="quest-ring" viewBox="0 0 80 80" aria-hidden="true">\r
                <circle class="quest-ring__track" cx="40" cy="40" r="34"></circle>\r
                <circle\r
                    class="quest-ring__fill"\r
                    cx="40"\r
                    cy="40"\r
                    r="34"\r
                    [style.stroke-dasharray]="ringCircumference"\r
                    [style.stroke-dashoffset]="ringOffset()"\r
                ></circle>\r
            </svg>\r
            <span class="quest-ring__value">\r
                <strong>{{ completedCount() }}</strong>\r
                <span class="quest-ring__total">/{{ totalCount() }}</span>\r
            </span>\r
        </div>\r
\r
        <div class="quest-card__intro">\r
            <h2 class="quest-card__title">{{ 'home.onboarding.title' | transloco }}</h2>\r
            <p class="quest-card__meta">\r
                @if (allQuestsComplete()) {\r
                    {{ 'home.onboarding.quests.allDoneTitle' | transloco }}\r
                } @else {\r
                    {{\r
                        'home.onboarding.quests.questsRemaining'\r
                            | transloco: { count: openQuests().length }\r
                    }}\r
                }\r
            </p>\r
        </div>\r
    </header>\r
\r
    <!-- Reward summary -->\r
    <div class="quest-reward">\r
        <mat-icon class="icon-size-5">savings</mat-icon>\r
        <span class="quest-reward__amount">\${{ totalRewarded() | number: '1.2-2' }} USD</span>\r
        <span class="quest-reward__note">\r
            @if (isActivated()) {\r
                {{\r
                    'home.onboarding.activated'\r
                        | transloco: { amount: totalRewarded() | number: '1.2-2' }\r
                }}\r
            } @else {\r
                {{\r
                    'home.onboarding.pendingApproval'\r
                        | transloco: { amount: totalRewarded() | number: '1.2-2' }\r
                }}\r
            }\r
        </span>\r
    </div>\r
\r
    <!-- Milestone track -->\r
    <div class="quest-track">\r
        <div class="quest-track__bar">\r
            <div class="quest-track__fill" [style.width.%]="progressPercentage()"></div>\r
        </div>\r
        <div class="quest-track__markers">\r
            @for (milestone of milestones; track milestone) {\r
                <span\r
                    class="quest-marker"\r
                    [class.quest-marker--reached]="isMilestoneReached(milestone)"\r
                    [style.left.%]="milestone"\r
                    [attr.aria-label]="\r
                        'home.onboarding.quests.milestoneReached' | transloco: { value: milestone }\r
                    "\r
                >\r
                    <mat-icon class="icon-size-3">\r
                        {{ milestone === 100 ? 'emoji_events' : 'star' }}\r
                    </mat-icon>\r
                </span>\r
            }\r
        </div>\r
    </div>\r
\r
    @if (verificationError()) {\r
        <div class="quest-error">\r
            <mat-icon class="icon-size-4">error</mat-icon>\r
            <span>{{ 'home.onboarding.failedVerification' | transloco }}</span>\r
        </div>\r
    }\r
\r
    @if (allQuestsComplete()) {\r
        <!-- Trophy summary replaces the quest list once everything is done -->\r
        <div class="quest-trophy">\r
            <div class="quest-trophy__badge">\r
                <mat-icon>emoji_events</mat-icon>\r
            </div>\r
            <p class="quest-trophy__title">{{ 'home.onboarding.quests.allDoneTitle' | transloco }}</p>\r
            <p class="quest-trophy__body">{{ 'home.onboarding.quests.allDoneBody' | transloco }}</p>\r
        </div>\r
    } @else {\r
        <div class="quest-list">\r
            <p class="quest-list__label">{{ 'home.onboarding.quests.nextUp' | transloco }}</p>\r
\r
            @for (task of nextQuests(); track task.taskId; let first = $first, i = $index) {\r
                <article\r
                    class="quest-row"\r
                    [class.quest-row--active]="first"\r
                    [style.--quest-row-index]="i"\r
                >\r
                    <div class="quest-row__head">\r
                        <span class="quest-row__status" [attr.data-status]="task.status">\r
                            @if (task.status === 'STUCK') {\r
                                <mat-icon class="icon-size-4">warning</mat-icon>\r
                            } @else if (task.status === 'STARTED' || task.status === 'VISITED') {\r
                                <mat-icon class="icon-size-4">play_circle</mat-icon>\r
                            } @else {\r
                                <mat-icon class="icon-size-4">radio_button_unchecked</mat-icon>\r
                            }\r
                        </span>\r
\r
                        <p class="quest-row__title">\r
                            {{ 'home.onboarding.tasks.' + task.taskId | transloco }}\r
                        </p>\r
\r
                        <button\r
                            type="button"\r
                            class="quest-row__help"\r
                            (click)="onOpenExplanation(task)"\r
                            [title]="'home.onboarding.explanationModal.helpTooltip' | transloco"\r
                        >\r
                            <mat-icon class="icon-size-4">help_outline</mat-icon>\r
                        </button>\r
                    </div>\r
\r
                    <div class="quest-row__foot">\r
                        <span class="quest-chip">{{ 'home.onboarding.taskReward' | transloco }}</span>\r
\r
                        @if (first) {\r
                            <span class="quest-chip quest-chip--active">\r
                                {{ 'home.onboarding.quests.activeQuest' | transloco }}\r
                            </span>\r
                        } @else {\r
                            <span class="quest-row__status-label">\r
                                {{ 'home.onboarding.statusLabels.' + task.status | transloco }}\r
                            </span>\r
                        }\r
\r
                        @if (verifyingTaskId() === task.taskId) {\r
                            <mat-spinner class="quest-row__spinner" diameter="18"></mat-spinner>\r
                        } @else if (task.taskId === 'complete_kyc') {\r
                            <button type="button" class="quest-row__cta" (click)="onStartKyc()">\r
                                {{ 'home.onboarding.completeTask' | transloco }}\r
                            </button>\r
                        } @else {\r
                            <a class="quest-row__cta" [routerLink]="taskLink()(task.taskId)">\r
                                {{ 'home.onboarding.completeTask' | transloco }}\r
                            </a>\r
                        }\r
                    </div>\r
                </article>\r
            }\r
\r
            @if (hiddenQuestCount() > 0) {\r
                <p class="quest-list__more">\r
                    {{\r
                        'home.onboarding.quests.moreQuests'\r
                            | transloco: { count: hiddenQuestCount() }\r
                    }}\r
                </p>\r
            }\r
        </div>\r
    }\r
\r
    <!-- Completed accordion -->\r
    @if (completedCount() > 0) {\r
        <div class="quest-completed">\r
            <button type="button" class="quest-completed__toggle" (click)="toggleCompleted()">\r
                <mat-icon class="icon-size-4 quest-completed__check">check_circle</mat-icon>\r
                <span>\r
                    {{\r
                        'home.onboarding.quests.completedCount'\r
                            | transloco: { count: completedCount() }\r
                    }}\r
                </span>\r
                <mat-icon\r
                    class="icon-size-4 quest-completed__chevron"\r
                    [class.quest-completed__chevron--open]="completedExpanded()"\r
                >\r
                    expand_more\r
                </mat-icon>\r
            </button>\r
\r
            @if (completedExpanded()) {\r
                <ul class="quest-completed__list">\r
                    @for (task of completedQuests(); track task.taskId; let i = $index) {\r
                        <li class="quest-done-row" [style.--quest-row-index]="i">\r
                            <mat-icon class="icon-size-4">check_circle</mat-icon>\r
                            <span>{{ 'home.onboarding.tasks.' + task.taskId | transloco }}</span>\r
                            <button\r
                                type="button"\r
                                class="quest-row__help"\r
                                (click)="onOpenExplanation(task)"\r
                                [title]="'home.onboarding.explanationModal.helpTooltip' | transloco"\r
                            >\r
                                <mat-icon class="icon-size-4">help_outline</mat-icon>\r
                            </button>\r
                        </li>\r
                    }\r
                </ul>\r
            }\r
        </div>\r
    }\r
</section>\r
`, styles: ["/* src/app/modules/home/onboarding-quests/onboarding-quests.component.scss */\n.quest-card {\n  --quest-surface: rgb(255, 255, 255);\n  --quest-well: rgb(248, 250, 252);\n  --quest-border: rgba(148, 163, 184, 0.22);\n  --quest-hairline: rgba(148, 163, 184, 0.18);\n  --quest-title: rgb(15, 23, 42);\n  --quest-text: rgb(51, 65, 85);\n  --quest-muted: rgb(100, 116, 139);\n  --quest-faint: rgb(148, 163, 184);\n  --quest-accent: rgb(79, 70, 229);\n  --quest-accent-soft: rgb(238, 242, 255);\n  --quest-track: rgb(226, 232, 240);\n  --quest-success: rgb(5, 150, 105);\n  --quest-success-soft: rgba(16, 185, 129, 0.12);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1.25rem;\n  border: 1px solid var(--quest-border);\n  border-radius: 16px;\n  background: var(--quest-surface);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n.dark .quest-card {\n  --quest-surface: rgb(30, 41, 59);\n  --quest-well: rgba(15, 23, 42, 0.55);\n  --quest-border: rgba(148, 163, 184, 0.18);\n  --quest-hairline: rgba(148, 163, 184, 0.14);\n  --quest-title: rgb(248, 250, 252);\n  --quest-text: rgb(226, 232, 240);\n  --quest-muted: rgb(148, 163, 184);\n  --quest-faint: rgb(100, 116, 139);\n  --quest-accent: rgb(129, 140, 248);\n  --quest-accent-soft: rgba(79, 70, 229, 0.18);\n  --quest-track: rgb(51, 65, 85);\n  --quest-success: rgb(52, 211, 153);\n  --quest-success-soft: rgba(16, 185, 129, 0.16);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.quest-card--complete {\n  border-color: var(--quest-success-soft);\n}\n.quest-card__header {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n}\n.quest-ring-wrap {\n  position: relative;\n  flex-shrink: 0;\n  width: 72px;\n  height: 72px;\n}\n.quest-ring {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.quest-ring__track {\n  fill: none;\n  stroke: var(--quest-track);\n  stroke-width: 7;\n}\n.quest-ring__fill {\n  fill: none;\n  stroke: var(--quest-accent);\n  stroke-width: 7;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.quest-card--complete .quest-ring__fill {\n  stroke: var(--quest-success);\n}\n.quest-ring__value {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  color: var(--quest-title);\n  font-size: 1.05rem;\n  font-weight: 700;\n  line-height: 72px;\n}\n.quest-ring__total {\n  color: var(--quest-faint);\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.quest-card__intro {\n  min-width: 0;\n}\n.quest-card__title {\n  margin: 0;\n  color: var(--quest-title);\n  font-size: 0.9375rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.quest-card__meta {\n  margin: 0.25rem 0 0;\n  color: var(--quest-muted);\n  font-size: 0.75rem;\n  line-height: 1.35;\n}\n.quest-reward {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.25rem 0.5rem;\n  padding: 0.625rem 0.75rem;\n  border: 1px solid var(--quest-hairline);\n  border-radius: 12px;\n  background: var(--quest-well);\n}\n.quest-reward .mat-icon {\n  color: var(--quest-success);\n}\n.quest-reward__amount {\n  color: var(--quest-success);\n  font-size: 1rem;\n  font-weight: 800;\n  letter-spacing: -0.01em;\n}\n.quest-reward__note {\n  flex: 1 1 100%;\n  color: var(--quest-muted);\n  font-size: 0.6875rem;\n  line-height: 1.3;\n}\n.quest-track {\n  position: relative;\n  padding-bottom: 0.5rem;\n}\n.quest-track__bar {\n  height: 8px;\n  border-radius: 9999px;\n  background: var(--quest-track);\n  overflow: hidden;\n}\n.quest-track__fill {\n  height: 100%;\n  border-radius: 9999px;\n  background:\n    linear-gradient(\n      90deg,\n      rgb(99, 102, 241),\n      rgb(168, 85, 247));\n  transition: width 900ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.quest-card--complete .quest-track__fill {\n  background:\n    linear-gradient(\n      90deg,\n      rgb(16, 185, 129),\n      rgb(52, 211, 153));\n}\n.quest-track__markers {\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 8px;\n}\n.quest-marker {\n  position: absolute;\n  top: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--quest-surface);\n  border-radius: 9999px;\n  background: var(--quest-track);\n  color: var(--quest-faint);\n  transform: translate(-50%, -50%);\n  transition:\n    background-color 300ms ease,\n    color 300ms ease,\n    transform 300ms ease;\n}\n.quest-marker .mat-icon {\n  width: 10px;\n  height: 10px;\n  font-size: 10px;\n  line-height: 10px;\n}\n.quest-marker--reached {\n  background: rgb(251, 191, 36);\n  color: rgb(120, 53, 15);\n  transform: translate(-50%, -50%) scale(1.08);\n}\n.quest-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid rgba(220, 38, 38, 0.25);\n  border-radius: 10px;\n  background: rgba(254, 242, 242, 0.9);\n  color: rgb(185, 28, 28);\n  font-size: 0.75rem;\n}\n.quest-error .mat-icon {\n  color: rgb(220, 38, 38);\n}\n.dark .quest-error {\n  background: rgba(153, 27, 27, 0.2);\n  border-color: rgba(248, 113, 113, 0.3);\n  color: rgb(252, 165, 165);\n}\n.quest-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.quest-list__label {\n  margin: 0;\n  color: var(--quest-muted);\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.quest-list__more {\n  margin: 0.125rem 0 0;\n  color: var(--quest-faint);\n  font-size: 0.6875rem;\n  text-align: center;\n}\n.quest-row {\n  padding: 0.75rem;\n  border: 1px solid var(--quest-hairline);\n  border-radius: 12px;\n  background: var(--quest-well);\n  animation: quest-row-in 420ms cubic-bezier(0.22, 1, 0.36, 1) backwards;\n  animation-delay: calc(var(--quest-row-index, 0) * 70ms);\n  transition: border-color 200ms ease, transform 200ms ease;\n}\n.quest-row:hover {\n  border-color: var(--quest-accent);\n}\n.quest-row--active {\n  border-color: var(--quest-accent);\n  background: var(--quest-accent-soft);\n  box-shadow: 0 0 0 3px var(--quest-accent-soft);\n}\n.quest-row__head {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.quest-row__status {\n  flex-shrink: 0;\n  color: var(--quest-faint);\n}\n.quest-row__status[data-status=STUCK] {\n  color: rgb(245, 158, 11);\n}\n.quest-row__status[data-status=STARTED],\n.quest-row__status[data-status=VISITED] {\n  color: var(--quest-accent);\n}\n.quest-row__title {\n  flex: 1;\n  margin: 0;\n  color: var(--quest-title);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  line-height: 1.35;\n}\n.quest-row__help {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border: 0;\n  border-radius: 9999px;\n  background: transparent;\n  color: var(--quest-faint);\n  cursor: pointer;\n  transition: color 150ms ease;\n}\n.quest-row__help:hover {\n  color: var(--quest-accent);\n}\n.quest-row__foot {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.375rem;\n  margin-top: 0.625rem;\n}\n.quest-chip {\n  padding: 0.125rem 0.4rem;\n  border-radius: 6px;\n  background: var(--quest-success-soft);\n  color: var(--quest-success);\n  font-size: 0.625rem;\n  font-weight: 700;\n}\n.quest-chip--active {\n  background: var(--quest-accent-soft);\n  color: var(--quest-accent);\n}\n.quest-row__status-label {\n  color: var(--quest-faint);\n  font-size: 0.6875rem;\n}\n.quest-row__spinner {\n  margin-left: auto;\n}\n.quest-row__cta {\n  margin-left: auto;\n  padding: 0.3rem 0.7rem;\n  border: 0;\n  border-radius: 8px;\n  background: var(--quest-accent);\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: filter 150ms ease;\n}\n.quest-row__cta:hover {\n  filter: brightness(1.08);\n  text-decoration: none;\n}\n.quest-trophy {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 1rem 0.75rem;\n  border: 1px dashed var(--quest-success);\n  border-radius: 12px;\n  background: var(--quest-success-soft);\n  text-align: center;\n}\n.quest-trophy__badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 9999px;\n  background:\n    linear-gradient(\n      135deg,\n      rgb(251, 191, 36),\n      rgb(245, 158, 11));\n  color: rgb(120, 53, 15);\n  box-shadow: 0 6px 16px -6px rgba(245, 158, 11, 0.7);\n  animation: quest-trophy-pop 620ms cubic-bezier(0.34, 1.56, 0.64, 1) backwards;\n}\n.quest-trophy__title {\n  margin: 0;\n  color: var(--quest-title);\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.quest-trophy__body {\n  margin: 0;\n  color: var(--quest-muted);\n  font-size: 0.75rem;\n  line-height: 1.4;\n}\n.quest-completed {\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--quest-hairline);\n}\n.quest-completed__toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.375rem 0.25rem;\n  border: 0;\n  border-radius: 8px;\n  background: transparent;\n  color: var(--quest-text);\n  font-family: inherit;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: color 150ms ease;\n}\n.quest-completed__toggle:hover {\n  color: var(--quest-title);\n}\n.quest-completed__check {\n  color: var(--quest-success);\n}\n.quest-completed__chevron {\n  margin-left: auto;\n  color: var(--quest-faint);\n  transition: transform 200ms ease;\n}\n.quest-completed__chevron--open {\n  transform: rotate(180deg);\n}\n.quest-completed__list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  margin: 0.25rem 0 0;\n  padding: 0;\n  list-style: none;\n}\n.quest-done-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.25rem;\n  color: var(--quest-muted);\n  font-size: 0.75rem;\n  line-height: 1.3;\n  animation: quest-row-in 300ms ease backwards;\n  animation-delay: calc(var(--quest-row-index, 0) * 35ms);\n}\n.quest-done-row .mat-icon {\n  flex-shrink: 0;\n  color: var(--quest-success);\n}\n.quest-done-row span {\n  flex: 1;\n}\n@keyframes quest-row-in {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes quest-trophy-pop {\n  from {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .quest-ring__fill,\n  .quest-track__fill,\n  .quest-marker,\n  .quest-completed__chevron {\n    transition: none;\n  }\n  .quest-row,\n  .quest-done-row,\n  .quest-trophy__badge {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=onboarding-quests.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OnboardingQuestsComponent, { className: "OnboardingQuestsComponent", filePath: "src/app/modules/home/onboarding-quests/onboarding-quests.component.ts", lineNumber: 40 });
})();

// src/app/modules/home/onboarding-explanation-modal/onboarding-explanation-modal.component.ts
var _c03 = (a0, a1, a2, a3) => ({ "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400": a0, "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400": a1, "bg-amber-500/10 text-amber-600 dark:text-amber-400": a2, "bg-rose-500/10 text-rose-600 dark:text-rose-400": a3 });
function OnboardingExplanationModalComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 21)(2, "mat-icon", 13);
    \u0275\u0275text(3, "code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 22)(5, "h3", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 23)(9, "span", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "home.onboarding.explanationModal.sectionApiReference"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(6, _c03, ctx_r0.techInfo.method === "POST", ctx_r0.techInfo.method === "GET", ctx_r0.techInfo.method === "PUT", ctx_r0.techInfo.method === "DELETE"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.techInfo.method, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.techInfo.endpoint);
  }
}
function OnboardingExplanationModalComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function OnboardingExplanationModalComponent_Conditional_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToTask());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.data.taskId === "complete_kyc" ? "home.onboarding.explanationModal.verifyIdentity" : "home.onboarding.explanationModal.goToTask"), " ");
  }
}
function OnboardingExplanationModalComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function OnboardingExplanationModalComponent_Conditional_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "home.onboarding.explanationModal.close"), " ");
  }
}
var OnboardingExplanationModalComponent = class _OnboardingExplanationModalComponent {
  constructor(data) {
    this.data = data;
    this._dialogRef = inject(MatDialogRef);
    this._router = inject(Router);
    this._accountEnv = inject(AccountEnvironmentService);
    this.techInfo = null;
    this._techMap = {
      test_smartcheck: {
        method: "POST",
        endpoint: "https://api.verifik.co/v2/postman/run",
        icon: "terminal",
        gradient: "from-blue-500 to-indigo-600"
      },
      test_collection_demo: {
        method: "POST",
        endpoint: "https://api.verifik.co/v2/face-recognition/collections",
        icon: "folder_open",
        gradient: "from-purple-500 to-indigo-600"
      },
      test_add_person_demo: {
        method: "POST",
        endpoint: "https://api.verifik.co/v2/face-recognition/collections/:code/persons",
        icon: "person_add",
        gradient: "from-pink-500 to-rose-600"
      },
      test_search_person_demo: {
        method: "POST",
        endpoint: "https://api.verifik.co/v2/face-recognition/search",
        icon: "search",
        gradient: "from-emerald-500 to-teal-600"
      },
      test_liveness_demo: {
        method: "POST",
        endpoint: "https://api.verifik.co/v2/biometrics/liveness",
        icon: "face",
        gradient: "from-violet-500 to-purple-600"
      },
      test_humanauthn_creation: {
        method: "POST",
        endpoint: "https://api.verifik.co/v2/human-id/encrypt",
        icon: "vpn_key",
        gradient: "from-amber-500 to-orange-600"
      },
      test_humanauthn_decryption: {
        method: "POST",
        endpoint: "https://api.verifik.co/v2/human-id/decrypt",
        icon: "lock_open",
        gradient: "from-teal-500 to-cyan-600"
      },
      test_humanauthn_preview: {
        method: "POST",
        endpoint: "https://api.verifik.co/v2/human-id/preview",
        icon: "visibility",
        gradient: "from-sky-500 to-blue-600"
      },
      subscribe_smart_access: {
        method: "POST",
        endpoint: "https://api.verifik.co/v2/subscriptions",
        icon: "subscriptions",
        gradient: "from-rose-500 to-red-600"
      },
      subscribe_smart_enroll: {
        method: "POST",
        endpoint: "https://api.verifik.co/v2/subscriptions",
        icon: "subscriptions",
        gradient: "from-rose-500 to-red-600"
      },
      add_billing_details: {
        method: "POST",
        endpoint: "https://api.verifik.co/v2/client-settings",
        icon: "payment",
        gradient: "from-emerald-500 to-teal-600"
      },
      complete_kyc: {
        method: "POST",
        endpoint: "https://api.verifik.co/v2/kyc/verify",
        icon: "verified_user",
        gradient: "from-cyan-500 to-blue-600"
      }
    };
  }
  ngOnInit() {
    this.techInfo = this._techMap[this.data.taskId] || null;
  }
  showApiReference() {
    return this.data.taskId.startsWith("test_");
  }
  close() {
    this._dialogRef.close();
  }
  goToTask() {
    if (this.data.taskId === "complete_kyc") {
      this._accountEnv.startCompanyVerification();
      this.close();
      return;
    }
    const link = this.getTaskLink(this.data.taskId);
    void this._router.navigate([link]);
    this.close();
  }
  getTaskLink(taskId) {
    switch (taskId) {
      case "test_smartcheck":
        return "/postman";
      case "test_collection_demo":
        return "/smart-enroll/demos/create-collection";
      case "test_add_person_demo":
        return "/smart-enroll/demos/create-person";
      case "test_search_person_demo":
        return "/smart-enroll/demos/search-person";
      case "test_liveness_demo":
        return "/smart-enroll/demos/liveness";
      case "test_humanauthn_creation":
        return "/smart-enroll/demos/humanid-create-qr";
      case "test_humanauthn_decryption":
        return "/smart-enroll/demos/humanid-decrypt";
      case "test_humanauthn_preview":
        return "/smart-enroll/demos/humanid-preview";
      case "subscribe_smart_access":
        return "/smart-access/projects";
      case "subscribe_smart_enroll":
        return "/smart-enroll/projects";
      case "add_billing_details":
        return "/settings/billing-details";
      case "complete_kyc":
        return "/home";
      default:
        return "/home";
    }
  }
  static {
    this.\u0275fac = function OnboardingExplanationModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OnboardingExplanationModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OnboardingExplanationModalComponent, selectors: [["app-onboarding-explanation-modal"]], decls: 45, vars: 25, consts: [[1, "relative", "flex", "w-full", "flex-col"], ["mat-icon-button", "", "type", "button", 1, "!absolute", "!top-0", "!right-0", "!text-slate-400", "hover:!text-slate-600", "dark:hover:!text-slate-200", "transition-colors", 3, "click"], [1, "!text-[20px]", "!w-[20px]", "!h-[20px]"], [1, "flex", "flex-col", "items-center", "text-center", "mt-2", "mb-6"], [1, "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "text-white", "shadow-md", "shadow-verifikBrand-500/20", "mb-4", 3, "ngClass"], [1, "!text-[28px]", "!w-[28px]", "!h-[28px]"], [1, "text-xl", "font-bold", "text-slate-900", "dark:text-white", "leading-snug"], [1, "mt-2", "text-xs", "text-slate-500", "dark:text-slate-400", "max-w-[340px]", "leading-relaxed", "flex", "items-center", "gap-1.5", "justify-center"], [1, "font-bold", "text-emerald-600", "dark:text-emerald-400"], [1, "text-slate-300", "dark:text-slate-700"], [1, "space-y-4", "mb-8"], [1, "flex", "items-start", "gap-4", "p-3", "rounded-xl", "hover:bg-slate-50", "dark:hover:bg-slate-800/40", "transition-colors", "duration-150"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-indigo-500/10", "text-indigo-600", "dark:text-indigo-400"], [1, "!text-[22px]", "!w-[22px]", "!h-[22px]"], [1, "min-w-0"], [1, "text-sm", "font-semibold", "text-slate-800", "dark:text-slate-200"], [1, "mt-0.5", "text-xs", "text-slate-500", "dark:text-slate-400", "leading-normal", 3, "innerHTML"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-emerald-500/10", "text-emerald-600", "dark:text-emerald-400"], [1, "mt-2"], ["mat-flat-button", "", "type", "button", 1, "w-full", "!rounded-xl", "!h-12", "!text-sm", "!font-bold", "!bg-gradient-to-r", "!from-verifikBrand-600", "!to-indigo-600", "!text-white", "hover:opacity-95", "hover:scale-[1.01]", "active:scale-[0.99]", "transition-all", "duration-150", "shadow-md", "shadow-verifikBrand-500/20"], ["mat-flat-button", "", "type", "button", 1, "w-full", "!rounded-xl", "!h-12", "!text-sm", "!font-bold", "!bg-slate-200", "dark:!bg-slate-800", "!text-slate-800", "dark:!text-slate-200", "hover:opacity-95"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-lg", "bg-amber-500/10", "text-amber-600", "dark:text-amber-400"], [1, "min-w-0", "flex-1"], [1, "mt-1", "flex", "items-center", "gap-1.5", "font-mono", "text-[11px]", "text-slate-600", "dark:text-slate-400", "overflow-hidden"], [1, "px-1.5", "py-0.5", "rounded", "text-[9px]", "font-bold", "tracking-wider", "shrink-0", 3, "ngClass"], [1, "select-all", "overflow-x-auto", "whitespace-nowrap", "scrollbar-none", "py-0.5"], ["mat-flat-button", "", "type", "button", 1, "w-full", "!rounded-xl", "!h-12", "!text-sm", "!font-bold", "!bg-gradient-to-r", "!from-verifikBrand-600", "!to-indigo-600", "!text-white", "hover:opacity-95", "hover:scale-[1.01]", "active:scale-[0.99]", "transition-all", "duration-150", "shadow-md", "shadow-verifikBrand-500/20", 3, "click"], ["mat-flat-button", "", "type", "button", 1, "w-full", "!rounded-xl", "!h-12", "!text-sm", "!font-bold", "!bg-slate-200", "dark:!bg-slate-800", "!text-slate-800", "dark:!text-slate-200", "hover:opacity-95", 3, "click"]], template: function OnboardingExplanationModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function OnboardingExplanationModalComponent_Template_button_click_1_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(2, "mat-icon", 2);
        \u0275\u0275text(3, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "mat-icon", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "h2", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 7)(12, "span", 8);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 9);
        \u0275\u0275text(16, "\u2022");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "div", 12)(23, "mat-icon", 13);
        \u0275\u0275text(24, "description");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 14)(26, "h3", 15);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "p", 16);
        \u0275\u0275pipe(30, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 11)(32, "div", 17)(33, "mat-icon", 13);
        \u0275\u0275text(34, "assignment_turned_in");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 14)(36, "h3", 15);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "p", 16);
        \u0275\u0275pipe(40, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(41, OnboardingExplanationModalComponent_Conditional_41_Template, 13, 11, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 18);
        \u0275\u0275template(43, OnboardingExplanationModalComponent_Conditional_43_Template, 3, 3, "button", 19)(44, OnboardingExplanationModalComponent_Conditional_44_Template, 3, 3, "button", 20);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", (ctx.techInfo == null ? null : ctx.techInfo.gradient) || "bg-gradient-to-tr from-verifikBrand-500 to-indigo-600");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((ctx.techInfo == null ? null : ctx.techInfo.icon) || "help");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "home.onboarding.tasks." + ctx.data.taskId), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, "home.onboarding.explanationModal.reward"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 15, "home.onboarding.statusLabels." + ctx.data.status));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 17, "home.onboarding.explanationModal.sectionDescription"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(30, 19, "home.onboarding.explanations." + ctx.data.taskId + ".description"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 21, "home.onboarding.explanationModal.sectionHowTo"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(40, 23, "home.onboarding.explanations." + ctx.data.taskId + ".requirement"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.techInfo && ctx.showApiReference() ? 41 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.status !== "COMPLETED" ? 43 : 44);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      MatDialogModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      TranslocoModule,
      TranslocoPipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n/*# sourceMappingURL=onboarding-explanation-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OnboardingExplanationModalComponent, [{
    type: Component,
    args: [{ selector: "app-onboarding-explanation-modal", standalone: true, imports: [
      CommonModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      TranslocoModule
    ], template: `
        <div class="relative flex w-full flex-col">
            <!-- Close Button -->
            <button
                mat-icon-button
                type="button"
                (click)="close()"
                class="!absolute !top-0 !right-0 !text-slate-400 hover:!text-slate-600 dark:hover:!text-slate-200 transition-colors"
            >
                <mat-icon class="!text-[20px] !w-[20px] !h-[20px]">close</mat-icon>
            </button>

            <!-- Header -->
            <div class="flex flex-col items-center text-center mt-2 mb-6">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md shadow-verifikBrand-500/20 mb-4"
                     [ngClass]="techInfo?.gradient || 'bg-gradient-to-tr from-verifikBrand-500 to-indigo-600'">
                    <mat-icon class="!text-[28px] !w-[28px] !h-[28px]">{{ techInfo?.icon || 'help' }}</mat-icon>
                </div>
                <h2 class="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {{ 'home.onboarding.tasks.' + data.taskId | transloco }}
                </h2>
                <!-- Subtitle with Reward & Status -->
                <p class="mt-2 text-xs text-slate-500 dark:text-slate-400 max-w-[340px] leading-relaxed flex items-center gap-1.5 justify-center">
                    <span class="font-bold text-emerald-600 dark:text-emerald-400">{{ 'home.onboarding.explanationModal.reward' | transloco }}</span>
                    <span class="text-slate-300 dark:text-slate-700">\u2022</span>
                    <span>{{ 'home.onboarding.statusLabels.' + data.status | transloco }}</span>
                </p>
            </div>

            <!-- Reasons List (Information Blocks) -->
            <div class="space-y-4 mb-8">
                <!-- Item 1: Description -->
                <div class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-150">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <mat-icon class="!text-[22px] !w-[22px] !h-[22px]">description</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {{ 'home.onboarding.explanationModal.sectionDescription' | transloco }}
                        </h3>
                        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-normal"
                           [innerHTML]="'home.onboarding.explanations.' + data.taskId + '.description' | transloco">
                        </p>
                    </div>
                </div>

                <!-- Item 2: How to Complete -->
                <div class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-150">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <mat-icon class="!text-[22px] !w-[22px] !h-[22px]">assignment_turned_in</mat-icon>
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {{ 'home.onboarding.explanationModal.sectionHowTo' | transloco }}
                        </h3>
                        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-normal"
                           [innerHTML]="'home.onboarding.explanations.' + data.taskId + '.requirement' | transloco">
                        </p>
                    </div>
                </div>

                <!-- Item 3: API Reference (if applicable) -->
                @if (techInfo && showApiReference()) {
                    <div class="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-150">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                            <mat-icon class="!text-[22px] !w-[22px] !h-[22px]">code</mat-icon>
                        </div>
                        <div class="min-w-0 flex-1">
                            <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                {{ 'home.onboarding.explanationModal.sectionApiReference' | transloco }}
                            </h3>
                            <div class="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-slate-600 dark:text-slate-400 overflow-hidden">
                                <span class="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider shrink-0"
                                      [ngClass]="{
                                          'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400': techInfo.method === 'POST',
                                          'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400': techInfo.method === 'GET',
                                          'bg-amber-500/10 text-amber-600 dark:text-amber-400': techInfo.method === 'PUT',
                                          'bg-rose-500/10 text-rose-600 dark:text-rose-400': techInfo.method === 'DELETE'
                                      }">
                                    {{ techInfo.method }}
                                </span>
                                <span class="select-all overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">{{ techInfo.endpoint }}</span>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <!-- Actions -->
            <div class="mt-2">
                @if (data.status !== 'COMPLETED') {
                    <button
                        mat-flat-button
                        type="button"
                        class="w-full !rounded-xl !h-12 !text-sm !font-bold !bg-gradient-to-r !from-verifikBrand-600 !to-indigo-600 !text-white hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all duration-150 shadow-md shadow-verifikBrand-500/20"
                        (click)="goToTask()"
                    >
                        {{ (data.taskId === 'complete_kyc' ? 'home.onboarding.explanationModal.verifyIdentity' : 'home.onboarding.explanationModal.goToTask') | transloco }}
                    </button>
                } @else {
                    <button
                        mat-flat-button
                        type="button"
                        class="w-full !rounded-xl !h-12 !text-sm !font-bold !bg-slate-200 dark:!bg-slate-800 !text-slate-800 dark:!text-slate-200 hover:opacity-95"
                        (click)="close()"
                    >
                        {{ 'home.onboarding.explanationModal.close' | transloco }}
                    </button>
                }
            </div>
        </div>
    `, styles: ["/* angular:styles/component:scss;65beb81b968b2902f741ddc641e44d2101885ee5860f1ab628cfac50fab78c10;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/home/onboarding-explanation-modal/onboarding-explanation-modal.component.ts */\n:host {\n  display: block;\n  position: relative;\n}\n/*# sourceMappingURL=onboarding-explanation-modal.component.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OnboardingExplanationModalComponent, { className: "OnboardingExplanationModalComponent", filePath: "src/app/modules/home/onboarding-explanation-modal/onboarding-explanation-modal.component.ts", lineNumber: 153 });
})();

// src/app/modules/home/tutorial-modal/tutorial-modal.component.ts
var _c04 = (a0, a1) => ({ current: a0, total: a1 });
function HomeTutorialModalComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-icon", 20);
    \u0275\u0275text(2, "lightbulb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.currentStepData().tipKey));
  }
}
function HomeTutorialModalComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
  if (rf & 2) {
    const $index_r2 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-indigo-500", $index_r2 === ctx_r0.currentStep())("bg-slate-300", $index_r2 !== ctx_r0.currentStep())("dark:bg-slate-600", $index_r2 !== ctx_r0.currentStep());
  }
}
function HomeTutorialModalComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function HomeTutorialModalComponent_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nextStep());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "mat-icon", 24);
    \u0275\u0275text(4, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "home.tutorial.next"), " ");
  }
}
function HomeTutorialModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function HomeTutorialModalComponent_Conditional_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "mat-icon", 24);
    \u0275\u0275text(4, "rocket_launch");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "home.tutorial.getStarted"), " ");
  }
}
var HomeTutorialModalComponent = class _HomeTutorialModalComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this.currentStep = signal(0);
    this.steps = [
      {
        icon: "waving_hand",
        titleKey: "home.tutorial.step0Title",
        descriptionKey: "home.tutorial.step0Desc",
        tipKey: "home.tutorial.step0Tip"
      },
      {
        icon: "chat",
        titleKey: "home.tutorial.step1Title",
        descriptionKey: "home.tutorial.step1Desc"
      },
      {
        icon: "terminal",
        titleKey: "home.tutorial.step2Title",
        descriptionKey: "home.tutorial.step2Desc"
      },
      {
        icon: "cloud_upload",
        titleKey: "home.tutorial.step3Title",
        descriptionKey: "home.tutorial.step3Desc",
        tipKey: "home.tutorial.step3Tip"
      },
      {
        icon: "build",
        titleKey: "home.tutorial.step4Title",
        descriptionKey: "home.tutorial.step4Desc"
      },
      {
        icon: "credit_card",
        titleKey: "home.tutorial.step5Title",
        descriptionKey: "home.tutorial.step5Desc"
      }
    ];
    this.currentStepData = () => this.steps[this.currentStep()];
    this.progressPercent = () => (this.currentStep() + 1) / this.steps.length * 100;
  }
  nextStep() {
    if (this.currentStep() < this.steps.length - 1) {
      this.currentStep.update((v) => v + 1);
    }
  }
  prevStep() {
    if (this.currentStep() > 0) {
      this.currentStep.update((v) => v - 1);
    }
  }
  close() {
    this._dialogRef.close();
  }
  static {
    this.\u0275fac = function HomeTutorialModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeTutorialModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeTutorialModalComponent, selectors: [["home-tutorial-modal"]], decls: 34, vars: 22, consts: [[1, "flex", "flex-col", "w-full", "max-w-lg"], [1, "relative", "px-6", "pt-6", "pb-4"], [1, "absolute", "top-0", "left-0", "right-0", "h-1", "bg-slate-200", "dark:bg-slate-700"], [1, "h-full", "bg-gradient-to-r", "from-indigo-500", "to-purple-600", "transition-all", "duration-300"], [1, "flex", "items-center", "justify-between"], [1, "text-xs", "font-medium", "text-slate-500", "dark:text-slate-400"], ["mat-icon-button", "", 1, "!-mr-2", 3, "click"], [1, "px-6", "pb-6"], [1, "flex", "flex-col", "items-center", "text-center", "py-8"], [1, "w-20", "h-20", "rounded-2xl", "bg-gradient-to-br", "from-indigo-500", "to-purple-600", "flex", "items-center", "justify-center", "mb-6", "shadow-lg", "shadow-indigo-500/25", "animate-pulse"], [1, "!w-10", "!h-10", "text-white", "icon-size-10"], [1, "text-xl", "font-bold", "text-slate-900", "dark:text-white", "mb-3"], [1, "text-slate-600", "dark:text-slate-400", "text-sm", "leading-relaxed", "max-w-md"], [1, "mt-4", "flex", "items-start", "gap-2", "p-3", "rounded-lg", "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-800/50", "text-left"], [1, "flex", "items-center", "justify-between", "pt-4", "border-t", "border-slate-200", "dark:border-slate-700"], ["mat-button", "", 1, "!text-slate-600", 3, "click", "disabled"], [1, "mr-1"], [1, "flex", "gap-1.5"], [1, "w-2", "h-2", "rounded-full", "transition-all", "duration-300", 3, "bg-indigo-500", "bg-slate-300", "dark:bg-slate-600"], ["mat-flat-button", "", "color", "primary"], [1, "text-amber-500", "!w-5", "!h-5", "shrink-0", "icon-size-5"], [1, "text-xs", "text-amber-700", "dark:text-amber-300"], [1, "w-2", "h-2", "rounded-full", "transition-all", "duration-300"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "ml-1"]], template: function HomeTutorialModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 6);
        \u0275\u0275listener("click", function HomeTutorialModalComponent_Template_button_click_8_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "mat-icon", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "h2", 11);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 12);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, HomeTutorialModalComponent_Conditional_22_Template, 6, 3, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
        \u0275\u0275listener("click", function HomeTutorialModalComponent_Template_button_click_24_listener() {
          return ctx.prevStep();
        });
        \u0275\u0275elementStart(25, "mat-icon", 16);
        \u0275\u0275text(26, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 17);
        \u0275\u0275repeaterCreate(30, HomeTutorialModalComponent_For_31_Template, 1, 6, "span", 18, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, HomeTutorialModalComponent_Conditional_32_Template, 5, 3, "button", 19)(33, HomeTutorialModalComponent_Conditional_33_Template, 5, 3, "button", 19);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx.progressPercent(), "%");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 10, "home.tutorial.stepOf", \u0275\u0275pureFunction2(19, _c04, ctx.currentStep() + 1, ctx.steps.length)), " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.currentStepData().icon);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 13, ctx.currentStepData().titleKey), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 15, ctx.currentStepData().descriptionKey), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.currentStepData().tipKey ? 22 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.currentStep() === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 17, "home.tutorial.back"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.steps);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.currentStep() < ctx.steps.length - 1 ? 32 : 33);
      }
    }, dependencies: [
      CommonModule,
      MatDialogModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      TranslocoModule,
      TranslocoPipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=tutorial-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeTutorialModalComponent, [{
    type: Component,
    args: [{ selector: "home-tutorial-modal", standalone: true, imports: [
      CommonModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      TranslocoModule
    ], template: `
        <div class="flex flex-col w-full max-w-lg">
            <!-- Header with progress -->
            <div class="relative px-6 pt-6 pb-4">
                <div class="absolute top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700">
                    <div
                        class="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
                        [style.width.%]="progressPercent()"
                    ></div>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {{ 'home.tutorial.stepOf' | transloco: { current: currentStep() + 1, total: steps.length } }}
                    </span>
                    <button mat-icon-button (click)="close()" class="!-mr-2">
                        <mat-icon>close</mat-icon>
                    </button>
                </div>
            </div>

            <!-- Content -->
            <div class="px-6 pb-6">
                <div class="flex flex-col items-center text-center py-8">
                    <!-- Animated Icon -->
                    <div
                        class="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/25 animate-pulse"
                    >
                        <mat-icon class="!w-10 !h-10 text-white icon-size-10">{{
                            currentStepData().icon
                        }}</mat-icon>
                    </div>

                    <!-- Title -->
                    <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {{ currentStepData().titleKey | transloco }}
                    </h2>

                    <!-- Description -->
                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
                        {{ currentStepData().descriptionKey | transloco }}
                    </p>

                    <!-- Tip -->
                    @if (currentStepData().tipKey) {
                        <div
                            class="mt-4 flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-left"
                        >
                            <mat-icon class="text-amber-500 !w-5 !h-5 shrink-0 icon-size-5">lightbulb</mat-icon>
                            <span class="text-xs text-amber-700 dark:text-amber-300">{{
                                currentStepData().tipKey | transloco
                            }}</span>
                        </div>
                    }
                </div>

                <!-- Navigation -->
                <div
                    class="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700"
                >
                    <button
                        mat-button
                        (click)="prevStep()"
                        [disabled]="currentStep() === 0"
                        class="!text-slate-600"
                    >
                        <mat-icon class="mr-1">arrow_back</mat-icon>
                        {{ 'home.tutorial.back' | transloco }}
                    </button>

                    <div class="flex gap-1.5">
                        @for (step of steps; track $index) {
                            <span
                                class="w-2 h-2 rounded-full transition-all duration-300"
                                [class.bg-indigo-500]="$index === currentStep()"
                                [class.bg-slate-300]="$index !== currentStep()"
                                [class.dark:bg-slate-600]="$index !== currentStep()"
                            ></span>
                        }
                    </div>

                    @if (currentStep() < steps.length - 1) {
                        <button mat-flat-button color="primary" (click)="nextStep()">
                            {{ 'home.tutorial.next' | transloco }}
                            <mat-icon class="ml-1">arrow_forward</mat-icon>
                        </button>
                    } @else {
                        <button mat-flat-button color="primary" (click)="close()">
                            {{ 'home.tutorial.getStarted' | transloco }}
                            <mat-icon class="ml-1">rocket_launch</mat-icon>
                        </button>
                    }
                </div>
            </div>
        </div>
    `, styles: ["/* angular:styles/component:scss;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/home/tutorial-modal/tutorial-modal.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=tutorial-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeTutorialModalComponent, { className: "HomeTutorialModalComponent", filePath: "src/app/modules/home/tutorial-modal/tutorial-modal.component.ts", lineNumber: 128 });
})();

// src/app/modules/home/usage-globe/usage-globe.component.ts
var _c05 = ["globeCanvas"];
var _c13 = (a0) => ({ total: a0 });
var _c23 = (a0, a1) => ({ total: a0, countries: a1 });
var _c3 = (a0) => ({ rate: a0 });
var _forTrack02 = ($index, $item) => $item.code;
function UsageGlobeComponent_section_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("home.usageGlobe.loading"), " ");
  }
}
function UsageGlobeComponent_section_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("home.usageGlobe.error"), " ");
  }
}
function UsageGlobeComponent_section_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r2("home.usageGlobe.emptySubtitle"), " ");
  }
}
function UsageGlobeComponent_section_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r2("home.usageGlobe.subtitleUnscoped", \u0275\u0275pureFunction1(3, _c13, \u0275\u0275pipeBind1(1, 1, ctx_r2.totalRequests()))), " ");
  }
}
function UsageGlobeComponent_section_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", t_r2("home.usageGlobe.subtitle", \u0275\u0275pureFunction2(3, _c23, \u0275\u0275pipeBind1(1, 1, ctx_r2.totalRequests()), ctx_r2.countryCount())), " ");
  }
}
function UsageGlobeComponent_section_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8)(1, "span", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 21);
    \u0275\u0275element(3, "path", 22)(4, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", t_r2("home.usageGlobe.sourceCreditsHint"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r2("home.usageGlobe.sourceCredits"), " ");
  }
}
function UsageGlobeComponent_section_0_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function UsageGlobeComponent_section_0_For_19_Template_button_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectRange(item_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("usage-globe-range--active", ctx_r2.range() === item_r5);
    \u0275\u0275attribute("aria-pressed", ctx_r2.range() === item_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r2("home.usageGlobe.ranges." + item_r5), " ");
  }
}
function UsageGlobeComponent_section_0_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const \u0275$index_58_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("usage-globe-label--hub", \u0275$index_58_r7 === 0);
    \u0275\u0275attribute("style", "position-anchor: " + ctx_r2.anchorFor(row_r6.code) + "; opacity: " + ctx_r2.visibilityFor(row_r6.code), \u0275\u0275sanitizeStyle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, row_r6.total));
  }
}
function UsageGlobeComponent_section_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "mat-spinner", 27);
    \u0275\u0275elementEnd();
  }
}
function UsageGlobeComponent_section_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon", 28);
    \u0275\u0275text(2, "travel_explore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("home.usageGlobe.emptyTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("home.usageGlobe.emptyBody"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2("home.usageGlobe.emptyCta"));
  }
}
function UsageGlobeComponent_section_0_Conditional_29_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", row_r9.code, " ");
  }
}
function UsageGlobeComponent_section_0_Conditional_29_For_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 10);
    \u0275\u0275text(1, "public");
    \u0275\u0275elementEnd();
  }
}
function UsageGlobeComponent_section_0_Conditional_29_For_4_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("home.usageGlobe.globalHint"));
  }
}
function UsageGlobeComponent_section_0_Conditional_29_For_4_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("home.usageGlobe.failedShare", \u0275\u0275pureFunction1(1, _c3, ctx_r2.failureRate(row_r9))));
  }
}
function UsageGlobeComponent_section_0_Conditional_29_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 34);
    \u0275\u0275listener("click", function UsageGlobeComponent_section_0_Conditional_29_For_4_Template_button_click_1_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openCountry(row_r9));
    });
    \u0275\u0275elementStart(2, "span", 35);
    \u0275\u0275template(3, UsageGlobeComponent_section_0_Conditional_29_For_4_Conditional_3_Template, 1, 1)(4, UsageGlobeComponent_section_0_Conditional_29_For_4_Conditional_4_Template, 2, 0, "mat-icon", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 36)(6, "span", 37)(7, "span", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 39);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 40);
    \u0275\u0275element(13, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UsageGlobeComponent_section_0_Conditional_29_For_4_Conditional_14_Template, 2, 1, "span", 41)(15, UsageGlobeComponent_section_0_Conditional_29_For_4_Conditional_15_Template, 2, 3, "span", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(row_r9.code ? 3 : 4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(row_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, row_r9.total));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r2.barWidth(row_r9));
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r9.code ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r9.failed ? 15 : -1);
  }
}
function UsageGlobeComponent_section_0_Conditional_29_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, service_r10.count));
  }
}
function UsageGlobeComponent_section_0_Conditional_29_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ul", 43);
    \u0275\u0275repeaterCreate(3, UsageGlobeComponent_section_0_Conditional_29_Conditional_5_For_4_Template, 6, 4, "li", null, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2("home.usageGlobe.topServices"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.services().slice(0, 3));
  }
}
function UsageGlobeComponent_section_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ol", 33);
    \u0275\u0275repeaterCreate(3, UsageGlobeComponent_section_0_Conditional_29_For_4_Template, 16, 9, "li", null, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, UsageGlobeComponent_section_0_Conditional_29_Conditional_5_Template, 5, 1);
  }
  if (rf & 2) {
    const t_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2(ctx_r2.countryCount() ? "home.usageGlobe.countries" : "home.usageGlobe.global"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.rows().slice(0, 6));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.services().length ? 5 : -1);
  }
}
function UsageGlobeComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "header", 3)(2, "div", 4)(3, "h2", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275template(6, UsageGlobeComponent_section_0_Conditional_6_Template, 1, 1)(7, UsageGlobeComponent_section_0_Conditional_7_Template, 1, 1)(8, UsageGlobeComponent_section_0_Conditional_8_Template, 1, 1)(9, UsageGlobeComponent_section_0_Conditional_9_Template, 2, 5)(10, UsageGlobeComponent_section_0_Conditional_10_Template, 2, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275template(12, UsageGlobeComponent_section_0_Conditional_12_Template, 6, 2, "span", 8);
    \u0275\u0275elementStart(13, "a", 9);
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "mat-icon", 10);
    \u0275\u0275text(16, "arrow_forward");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 11);
    \u0275\u0275repeaterCreate(18, UsageGlobeComponent_section_0_For_19_Template, 2, 4, "button", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13)(21, "div", 14);
    \u0275\u0275listener("pointerdown", function UsageGlobeComponent_section_0_Template_div_pointerdown_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPointerDown($event));
    })("pointermove", function UsageGlobeComponent_section_0_Template_div_pointermove_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPointerMove($event));
    })("pointerup", function UsageGlobeComponent_section_0_Template_div_pointerup_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPointerUp());
    })("pointercancel", function UsageGlobeComponent_section_0_Template_div_pointercancel_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPointerUp());
    })("pointerleave", function UsageGlobeComponent_section_0_Template_div_pointerleave_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPointerUp());
    });
    \u0275\u0275element(22, "canvas", 15, 0);
    \u0275\u0275repeaterCreate(24, UsageGlobeComponent_section_0_For_25_Template, 6, 7, "div", 16, _forTrack02);
    \u0275\u0275template(26, UsageGlobeComponent_section_0_Conditional_26_Template, 2, 0, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 18);
    \u0275\u0275template(28, UsageGlobeComponent_section_0_Conditional_28_Template, 9, 3, "div", 19)(29, UsageGlobeComponent_section_0_Conditional_29_Template, 6, 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r2("home.usageGlobe.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.loading() ? 6 : ctx_r2.failed() ? 7 : ctx_r2.isEmpty() ? 8 : !ctx_r2.countryCount() ? 9 : 10);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.source() !== "apiRequests" && !ctx_r2.loading() ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("home.usageGlobe.openReport"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", t_r2("home.usageGlobe.rangeLabel"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.ranges);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", t_r2("home.usageGlobe.globeLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.labelled());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.loading() ? 26 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isEmpty() || ctx_r2.failed() ? 28 : !ctx_r2.loading() ? 29 : -1);
  }
}
var SPIN_PER_FRAME = 22e-4;
var MAX_LABELS = 4;
var LABEL_MIN_DEGREES = 16;
var SETTLE_FRAMES = 45;
var _rangeWindow = (range) => {
  const end = /* @__PURE__ */ new Date();
  const start = new Date(end);
  start.setHours(0, 0, 0, 0);
  if (range === "week") {
    const offset = start.getDay() === 0 ? 6 : start.getDay() - 1;
    start.setDate(start.getDate() - offset);
  } else if (range === "month") {
    start.setDate(1);
  } else if (range === "previousMonth") {
    const first = new Date(end.getFullYear(), end.getMonth() - 1, 1);
    return { startDate: first.toISOString(), endDate: new Date(end.getFullYear(), end.getMonth(), 0, 23, 59, 59, 999).toISOString() };
  } else if (range === "year") {
    start.setMonth(0, 1);
  }
  return { startDate: start.toISOString(), endDate: end.toISOString() };
};
var UsageGlobeComponent = class _UsageGlobeComponent {
  constructor() {
    this.services = input([]);
    this._usageApi = inject(UsageApiService);
    this._transloco = inject(TranslocoService);
    this._router = inject(Router);
    this._document = inject(DOCUMENT);
    this._destroyRef = inject(DestroyRef);
    this._canvas = viewChild("globeCanvas");
    this.ranges = ["today", "week", "month", "previousMonth", "year"];
    this.range = signal("month");
    this.loading = signal(true);
    this.failed = signal(false);
    this.source = signal("apiRequests");
    this.totalRequests = signal(0);
    this._groups = signal([]);
    this._lang = toSignal(this._transloco.langChanges$.pipe(switchMap((lang) => this._transloco.load(lang).pipe(map(() => lang), catchError(() => of(lang))))), { initialValue: this._transloco.getActiveLang() });
    this.rows = computed(() => this._toRows(this._groups(), this.totalRequests()));
    this.hub = computed(() => this.rows().find((row) => row.onGlobe) || null);
    this.countryCount = computed(() => this.rows().filter((row) => row.code).length);
    this.labelled = computed(() => this.rows().filter((row) => row.onGlobe).reduce((kept, row) => {
      if (kept.length >= MAX_LABELS)
        return kept;
      const [lat, lng] = COUNTRY_CENTROIDS[row.code];
      const crowded = kept.some((other) => {
        const [otherLat, otherLng] = COUNTRY_CENTROIDS[other.code];
        return Math.hypot(lat - otherLat, lng - otherLng) < LABEL_MIN_DEGREES;
      });
      return crowded ? kept : [...kept, row];
    }, []));
    this.isEmpty = computed(() => !this.loading() && this.totalRequests() === 0);
    this._globe = null;
    this._usageSub = null;
    this._opening = false;
    this._frame = 0;
    this._phi = 0;
    this._theta = 0.25;
    this._dragFrom = null;
    this._visible = true;
    afterNextRender(() => this._load());
    this._destroyRef.onDestroy(() => this._teardown());
  }
  selectRange(next) {
    if (next === this.range())
      return;
    this.range.set(next);
    this._load();
  }
  openCountry(row) {
    if (row.code) {
      this._router.navigate(["/history"], { queryParams: { country: row.code } });
      return;
    }
    const window2 = _rangeWindow(this.range());
    this._router.navigate(["/settings/usage-report"], {
      queryParams: { groupBy: "endpoint", startDate: window2.startDate, endDate: window2.endDate }
    });
  }
  barWidth(row) {
    const top = this.rows()[0]?.total || 1;
    return `${Math.max(4, Math.round(row.total / top * 100))}%`;
  }
  failureRate(row) {
    return row.total ? Math.round(row.failed / row.total * 1e3) / 10 : 0;
  }
  /** CSS anchor name cobe assigns to a marker id. */
  anchorFor(code) {
    return `--cobe-${code.toLowerCase()}`;
  }
  visibilityFor(code) {
    return `var(--cobe-visible-${code.toLowerCase()}, 0)`;
  }
  onPointerDown(event) {
    this._dragFrom = event.clientX;
    event.target.setPointerCapture?.(event.pointerId);
  }
  onPointerMove(event) {
    if (this._dragFrom === null)
      return;
    this._phi += (event.clientX - this._dragFrom) / 200;
    this._dragFrom = event.clientX;
    this._render();
  }
  onPointerUp() {
    this._dragFrom = null;
  }
  _load() {
    const window2 = _rangeWindow(this.range());
    this.loading.set(true);
    this.failed.set(false);
    this._usageSub?.unsubscribe();
    this._usageSub = this._usageApi.getUsage(__spreadProps(__spreadValues({ groupBy: "country" }, window2), { limit: 100 })).subscribe({
      next: (report) => {
        this.source.set(report.source);
        this.totalRequests.set(report.totals.totalRequests);
        this._groups.set(report.groups);
        this.loading.set(false);
        void this._paintGlobe();
      },
      error: () => {
        this.failed.set(true);
        this._groups.set([]);
        this.totalRequests.set(0);
        this.loading.set(false);
        void this._paintGlobe();
      }
    });
  }
  _toRows(groups, total) {
    const lang = this._lang() || "en";
    return groups.filter((group) => group.totalRequests > 0).map((group) => ({
      code: group.key,
      name: group.key ? countryName(group.key, lang) : this._transloco.translate("home.usageGlobe.global"),
      total: group.totalRequests,
      failed: group.failed + group.timedOut,
      share: total ? group.totalRequests / total : 0,
      onGlobe: Boolean(group.key && COUNTRY_CENTROIDS[group.key])
    }));
  }
  _paintGlobe() {
    return __async(this, null, function* () {
      if (!this._globe) {
        yield this._initGlobe();
        return;
      }
      const hub = this.hub();
      if (hub?.code)
        [this._phi, this._theta] = this._clampAngles(anglesForLocation(...COUNTRY_CENTROIDS[hub.code]));
      this._globe.update({ markers: this._markers(), arcs: this._arcs(), phi: this._phi, theta: this._theta });
    });
  }
  _initGlobe() {
    return __async(this, null, function* () {
      const canvas = this._canvas()?.nativeElement;
      if (!canvas || this._globe || this._opening)
        return;
      this._opening = true;
      const { default: createGlobe } = yield import("./chunk-UJFZB2OP.js");
      const size = canvas.parentElement?.clientWidth || 320;
      const hub = this.hub();
      if (this._globe) {
        this._opening = false;
        return;
      }
      if (hub?.code)
        [this._phi, this._theta] = this._clampAngles(anglesForLocation(...COUNTRY_CENTROIDS[hub.code]));
      this._globe = createGlobe(canvas, __spreadProps(__spreadValues({}, this._themeOptions()), {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: size,
        height: size,
        phi: this._phi,
        theta: this._theta,
        mapSamples: 16e3,
        diffuse: 1.2,
        markers: this._markers(),
        arcs: this._arcs(),
        arcWidth: 0.6,
        arcHeight: 0.25,
        markerElevation: 0.01
      }));
      this._opening = false;
      this._globe.update({ markers: this._markers(), arcs: this._arcs(), phi: this._phi, theta: this._theta });
      this._observe(canvas);
      if (this._reducedMotion())
        this._settle(SETTLE_FRAMES);
      else
        this._spin();
    });
  }
  _settle(framesLeft) {
    this._render();
    if (framesLeft > 0)
      this._frame = requestAnimationFrame(() => this._settle(framesLeft - 1));
  }
  _markers() {
    return this.rows().filter((row) => row.onGlobe).map((row) => ({
      id: row.code.toLowerCase(),
      location: COUNTRY_CENTROIDS[row.code],
      size: 0.03 + 0.07 * Math.sqrt(row.share)
    }));
  }
  _arcs() {
    const hub = this.hub();
    if (!hub?.code)
      return [];
    return this.rows().filter((row) => row.onGlobe && row.code !== hub.code).map((row) => ({ id: `${row.code.toLowerCase()}-${hub.code.toLowerCase()}`, from: COUNTRY_CENTROIDS[row.code], to: COUNTRY_CENTROIDS[hub.code] }));
  }
  _themeOptions() {
    const dark = this._document.body.classList.contains("dark");
    return dark ? { dark: 1, mapBrightness: 4, mapBaseBrightness: 0.02, baseColor: [0.32, 0.33, 0.4], markerColor: [0.55, 0.6, 1], glowColor: [0.12, 0.13, 0.22], arcColor: [0.55, 0.6, 1] } : { dark: 0, mapBrightness: 6, mapBaseBrightness: 0, baseColor: [1, 1, 1], markerColor: [0.31, 0.27, 0.9], glowColor: [0.93, 0.93, 1], arcColor: [0.39, 0.4, 0.95] };
  }
  /** Keep the camera from tipping over the poles when centring on far-south hubs. */
  _clampAngles([phi, theta]) {
    return [phi, Math.max(-0.5, Math.min(0.6, theta))];
  }
  _render() {
    this._globe?.update({ phi: this._phi, theta: this._theta });
  }
  _spin() {
    const tick = () => {
      if (this._visible && this._dragFrom === null) {
        this._phi += SPIN_PER_FRAME;
        this._render();
      }
      this._frame = requestAnimationFrame(tick);
    };
    this._frame = requestAnimationFrame(tick);
  }
  /** Pause the spin offscreen, follow container resizes, and repaint on light/dark switches. */
  _observe(canvas) {
    const host = canvas.closest(".usage-globe-stage");
    const intersection = new IntersectionObserver(([entry]) => this._visible = entry.isIntersecting);
    const resize = new ResizeObserver(() => {
      const size = host?.clientWidth || 0;
      if (size)
        this._globe?.update({ width: size, height: size });
    });
    const theme = new MutationObserver(() => this._globe?.update(this._themeOptions()));
    if (host) {
      intersection.observe(host);
      resize.observe(host);
    }
    theme.observe(this._document.body, { attributes: true, attributeFilter: ["class"] });
    this._destroyRef.onDestroy(() => {
      intersection.disconnect();
      resize.disconnect();
      theme.disconnect();
    });
  }
  _reducedMotion() {
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }
  _teardown() {
    this._usageSub?.unsubscribe();
    cancelAnimationFrame(this._frame);
    this._globe?.destroy();
    this._globe = null;
  }
  static {
    this.\u0275fac = function UsageGlobeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsageGlobeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsageGlobeComponent, selectors: [["app-usage-globe"]], viewQuery: function UsageGlobeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._canvas, _c05, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { services: [1, "services"] }, decls: 1, vars: 0, consts: [["globeCanvas", ""], ["class", "usage-globe", 4, "transloco"], [1, "usage-globe"], [1, "usage-globe-header"], [1, "min-w-0"], [1, "usage-globe-title"], [1, "usage-globe-subtitle"], [1, "usage-globe-actions"], [1, "usage-globe-chip", 3, "title"], ["routerLink", "/settings/usage-report", 1, "usage-globe-link"], [1, "!h-4", "!w-4", "!text-base"], ["role", "group", 1, "usage-globe-ranges"], ["type", "button", 1, "usage-globe-range", 3, "usage-globe-range--active"], [1, "usage-globe-body"], ["role", "img", 1, "usage-globe-stage", 3, "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerleave"], [1, "usage-globe-canvas"], [1, "usage-globe-label", 3, "usage-globe-label--hub"], [1, "usage-globe-overlay"], [1, "usage-globe-panel"], [1, "usage-globe-empty"], ["aria-hidden", "true", 1, "usage-globe-chip__icon"], ["viewBox", "0 0 24 24", "focusable", "false"], ["d", "M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"], ["d", "M9 7h6v2H9zm7 0h2v2h-2zM9 11h6v2H9zm7 0h2v2h-2z"], ["type", "button", 1, "usage-globe-range", 3, "click"], [1, "usage-globe-label"], [1, "usage-globe-label-code"], ["diameter", "28"], [1, "text-slate-400"], [1, "font-medium", "text-slate-700", "dark:text-slate-200"], [1, "text-sm", "text-slate-500", "dark:text-slate-400"], ["routerLink", "/postman", 1, "usage-globe-link", "mt-2"], [1, "usage-globe-panel-title"], [1, "usage-globe-list"], ["type", "button", 1, "usage-globe-row", 3, "click"], [1, "usage-globe-iso"], [1, "usage-globe-row-main"], [1, "usage-globe-row-head"], [1, "truncate"], [1, "usage-globe-row-count"], [1, "usage-globe-bar"], [1, "usage-globe-row-meta"], [1, "usage-globe-panel-title", "mt-5"], [1, "usage-globe-services"]], template: function UsageGlobeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, UsageGlobeComponent_section_0_Template, 30, 8, "section", 1);
      }
    }, dependencies: [CommonModule, DecimalPipe, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, RouterLink, TranslocoModule, TranslocoDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 2rem;\n}\n.usage-globe[_ngcontent-%COMP%] {\n  container-type: inline-size;\n  position: relative;\n  overflow: hidden;\n  padding: 1.25rem 1.25rem 1.5rem;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background:\n    radial-gradient(\n      120% 90% at 18% 55%,\n      rgba(99, 102, 241, 0.07),\n      transparent 60%),\n    rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n.dark[_nghost-%COMP%]   .usage-globe[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.18);\n  background:\n    radial-gradient(\n      120% 90% at 18% 55%,\n      rgba(129, 140, 248, 0.12),\n      transparent 60%),\n    rgb(30, 41, 59);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.usage-globe-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem 1rem;\n}\n.usage-globe-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .usage-globe-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe-title[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.usage-globe-subtitle[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  font-size: 0.85rem;\n  color: rgb(100, 116, 139);\n  font-variant-numeric: tabular-nums;\n}\n.dark[_nghost-%COMP%]   .usage-globe-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe-subtitle[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.usage-globe-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.usage-globe-ranges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-top: 0.85rem;\n}\n.usage-globe-range[_ngcontent-%COMP%] {\n  height: 1.65rem;\n  padding: 0 0.65rem;\n  border-radius: 9999px;\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  background: transparent;\n  color: rgb(71, 85, 105);\n  font-size: 0.72rem;\n  font-weight: 600;\n  line-height: 1;\n  cursor: pointer;\n}\n.usage-globe-range[_ngcontent-%COMP%]:hover {\n  border-color: rgba(79, 70, 229, 0.45);\n  color: rgb(67, 56, 202);\n}\n.usage-globe-range--active[_ngcontent-%COMP%] {\n  border-color: transparent;\n  background: rgb(15, 23, 42);\n  color: white;\n}\n.dark[_nghost-%COMP%]   .usage-globe-range[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe-range[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.dark[_nghost-%COMP%]   .usage-globe-range[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .usage-globe-range[_ngcontent-%COMP%]:hover {\n  color: rgb(199, 210, 254);\n}\n.dark[_nghost-%COMP%]   .usage-globe-range.usage-globe-range--active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe-range.usage-globe-range--active[_ngcontent-%COMP%] {\n  background: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n}\n.usage-globe-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.2rem 0.65rem 0.2rem 0.25rem;\n  border: 1px solid rgba(224, 231, 255, 0.8);\n  border-radius: 9999px;\n  background:\n    linear-gradient(\n      105deg,\n      rgba(238, 242, 255, 0.95) 0%,\n      rgba(245, 243, 255, 0.98) 45%,\n      rgba(250, 245, 255, 0.96) 100%);\n  color: rgb(79, 70, 229);\n  font-size: 0.7rem;\n  font-weight: 600;\n  box-shadow: 0 1px 2px rgba(99, 102, 241, 0.08);\n}\n.usage-globe-chip__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 9999px;\n  background: #fff;\n  color: rgb(67, 56, 202);\n  box-shadow: 0 1px 2px rgba(79, 70, 229, 0.18);\n}\n.usage-globe-chip__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  fill: currentColor;\n}\n.dark[_nghost-%COMP%]   .usage-globe-chip[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe-chip[_ngcontent-%COMP%] {\n  border-color: rgba(49, 46, 129, 0.4);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(30, 41, 59, 0.92) 0%,\n      rgba(30, 27, 75, 0.55) 50%,\n      rgba(49, 46, 129, 0.35) 100%);\n  color: rgb(165, 180, 252);\n}\n.usage-globe-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgb(79, 70, 229);\n}\n.usage-globe-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.dark[_nghost-%COMP%]   .usage-globe-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe-link[_ngcontent-%COMP%] {\n  color: rgb(165, 180, 252);\n}\n.usage-globe-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 1.25rem;\n  margin-top: 1rem;\n  align-items: center;\n}\n@container (min-width: 640px) {\n  .usage-globe-body[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);\n    gap: 2rem;\n  }\n}\n.usage-globe-stage[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 380px;\n  aspect-ratio: 1;\n  margin-inline: auto;\n  cursor: grab;\n  touch-action: pan-y;\n}\n.usage-globe-stage[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.usage-globe-canvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  contain: layout paint size;\n}\n.usage-globe-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n}\n.usage-globe-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: anchor(top);\n  left: anchor(center);\n  translate: -50% -6px;\n  display: inline-flex;\n  gap: 0.35rem;\n  align-items: center;\n  padding: 0.2rem 0.5rem;\n  border-radius: 9999px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  background: rgba(255, 255, 255, 0.92);\n  color: rgb(15, 23, 42);\n  font-size: 0.7rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n  pointer-events: none;\n  backdrop-filter: blur(4px);\n  transition: opacity 0.35s ease;\n}\n.dark[_nghost-%COMP%]   .usage-globe-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe-label[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.25);\n  background: rgba(15, 23, 42, 0.85);\n  color: rgb(241, 245, 249);\n}\n.usage-globe-label--hub[_ngcontent-%COMP%] {\n  border-color: rgba(99, 102, 241, 0.45);\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.18);\n}\n.usage-globe-label-code[_ngcontent-%COMP%] {\n  color: rgb(79, 70, 229);\n}\n.dark[_nghost-%COMP%]   .usage-globe-label-code[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe-label-code[_ngcontent-%COMP%] {\n  color: rgb(165, 180, 252);\n}\n@supports not (anchor-name: --a) {\n  .usage-globe-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.usage-globe-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.usage-globe-panel-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: rgb(100, 116, 139);\n}\n.dark[_nghost-%COMP%]   .usage-globe-panel-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe-panel-title[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.usage-globe-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.usage-globe-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.5rem 0.5rem;\n  border-radius: 10px;\n  text-align: left;\n  transition: background-color 0.15s ease;\n}\n.usage-globe-row[_ngcontent-%COMP%]:not(:disabled):hover, \n.usage-globe-row[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(99, 102, 241, 0.07);\n}\n.usage-globe-row[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(99, 102, 241);\n  outline-offset: 1px;\n}\n.usage-globe-row[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n.usage-globe-iso[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  width: 2rem;\n  padding: 0.15rem 0;\n  border-radius: 6px;\n  background: rgba(148, 163, 184, 0.14);\n  color: rgb(51, 65, 85);\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-align: center;\n}\n.dark[_nghost-%COMP%]   .usage-globe-iso[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe-iso[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.16);\n  color: rgb(226, 232, 240);\n}\n.usage-globe-row-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.usage-globe-row-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.75rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .usage-globe-row-head[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe-row-head[_ngcontent-%COMP%] {\n  color: rgb(241, 245, 249);\n}\n.usage-globe-row-count[_ngcontent-%COMP%] {\n  flex: none;\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.usage-globe-bar[_ngcontent-%COMP%] {\n  display: block;\n  height: 4px;\n  border-radius: 9999px;\n  background: rgba(148, 163, 184, 0.16);\n  overflow: hidden;\n}\n.usage-globe-bar[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      rgb(129, 140, 248),\n      rgb(79, 70, 229));\n  transition: width 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n.usage-globe-row-meta[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgb(148, 163, 184);\n}\n.usage-globe-services[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.usage-globe-services[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding-inline: 0.5rem;\n  font-size: 0.8rem;\n  color: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .usage-globe-services[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .usage-globe-services[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.usage-globe-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.35rem;\n  padding: 1rem 0.5rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  .usage-globe-bar[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n   .usage-globe-label[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=usage-globe.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsageGlobeComponent, [{
    type: Component,
    args: [{ selector: "app-usage-globe", standalone: true, imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, RouterLink, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="usage-globe" *transloco="let t">\r
    <header class="usage-globe-header">\r
        <div class="min-w-0">\r
            <h2 class="usage-globe-title">{{ t('home.usageGlobe.title') }}</h2>\r
            <p class="usage-globe-subtitle">\r
                @if (loading()) {\r
                    {{ t('home.usageGlobe.loading') }}\r
                } @else if (failed()) {\r
                    {{ t('home.usageGlobe.error') }}\r
                } @else if (isEmpty()) {\r
                    {{ t('home.usageGlobe.emptySubtitle') }}\r
                } @else if (!countryCount()) {\r
                    {{ t('home.usageGlobe.subtitleUnscoped', { total: (totalRequests() | number) }) }}\r
                } @else {\r
                    {{ t('home.usageGlobe.subtitle', { total: (totalRequests() | number), countries: countryCount() }) }}\r
                }\r
            </p>\r
        </div>\r
        <div class="usage-globe-actions">\r
            @if (source() !== 'apiRequests' && !loading()) {\r
                <span class="usage-globe-chip" [title]="t('home.usageGlobe.sourceCreditsHint')">\r
                    <span class="usage-globe-chip__icon" aria-hidden="true">\r
                        <svg viewBox="0 0 24 24" focusable="false">\r
                            <path\r
                                d="M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"\r
                            />\r
                            <path d="M9 7h6v2H9zm7 0h2v2h-2zM9 11h6v2H9zm7 0h2v2h-2z" />\r
                        </svg>\r
                    </span>\r
                    {{ t('home.usageGlobe.sourceCredits') }}\r
                </span>\r
            }\r
            <a class="usage-globe-link" routerLink="/settings/usage-report">\r
                {{ t('home.usageGlobe.openReport') }}\r
                <mat-icon class="!h-4 !w-4 !text-base">arrow_forward</mat-icon>\r
            </a>\r
        </div>\r
    </header>\r
\r
    <div class="usage-globe-ranges" role="group" [attr.aria-label]="t('home.usageGlobe.rangeLabel')">\r
        @for (item of ranges; track item) {\r
            <button\r
                type="button"\r
                class="usage-globe-range"\r
                [class.usage-globe-range--active]="range() === item"\r
                [attr.aria-pressed]="range() === item"\r
                (click)="selectRange(item)"\r
            >\r
                {{ t('home.usageGlobe.ranges.' + item) }}\r
            </button>\r
        }\r
    </div>\r
\r
    <div class="usage-globe-body">\r
        <div\r
            class="usage-globe-stage"\r
            role="img"\r
            [attr.aria-label]="t('home.usageGlobe.globeLabel')"\r
            (pointerdown)="onPointerDown($event)"\r
            (pointermove)="onPointerMove($event)"\r
            (pointerup)="onPointerUp()"\r
            (pointercancel)="onPointerUp()"\r
            (pointerleave)="onPointerUp()"\r
        >\r
            <canvas #globeCanvas class="usage-globe-canvas"></canvas>\r
            @for (row of labelled(); track row.code; let first = $first) {\r
                <div\r
                    class="usage-globe-label"\r
                    [class.usage-globe-label--hub]="first"\r
                    [attr.style]="'position-anchor: ' + anchorFor(row.code!) + '; opacity: ' + visibilityFor(row.code!)"\r
                >\r
                    <span class="usage-globe-label-code">{{ row.code }}</span>\r
                    <span>{{ row.total | number }}</span>\r
                </div>\r
            }\r
            @if (loading()) {\r
                <div class="usage-globe-overlay"><mat-spinner diameter="28"></mat-spinner></div>\r
            }\r
        </div>\r
\r
        <div class="usage-globe-panel">\r
            @if (isEmpty() || failed()) {\r
                <div class="usage-globe-empty">\r
                    <mat-icon class="text-slate-400">travel_explore</mat-icon>\r
                    <p class="font-medium text-slate-700 dark:text-slate-200">{{ t('home.usageGlobe.emptyTitle') }}</p>\r
                    <p class="text-sm text-slate-500 dark:text-slate-400">{{ t('home.usageGlobe.emptyBody') }}</p>\r
                    <a class="usage-globe-link mt-2" routerLink="/postman">{{ t('home.usageGlobe.emptyCta') }}</a>\r
                </div>\r
            } @else if (!loading()) {\r
                <h3 class="usage-globe-panel-title">{{ t(countryCount() ? 'home.usageGlobe.countries' : 'home.usageGlobe.global') }}</h3>\r
                <ol class="usage-globe-list">\r
                    @for (row of rows().slice(0, 6); track row.code) {\r
                        <li>\r
                            <button type="button" class="usage-globe-row" (click)="openCountry(row)">\r
                                <span class="usage-globe-iso">\r
                                    @if (row.code) {\r
                                        {{ row.code }}\r
                                    } @else {\r
                                        <mat-icon class="!h-4 !w-4 !text-base">public</mat-icon>\r
                                    }\r
                                </span>\r
                                <span class="usage-globe-row-main">\r
                                    <span class="usage-globe-row-head">\r
                                        <span class="truncate">{{ row.name }}</span>\r
                                        <span class="usage-globe-row-count">{{ row.total | number }}</span>\r
                                    </span>\r
                                    <span class="usage-globe-bar"><span [style.width]="barWidth(row)"></span></span>\r
                                    @if (!row.code) {\r
                                        <span class="usage-globe-row-meta">{{ t('home.usageGlobe.globalHint') }}</span>\r
                                    }\r
                                    @if (row.failed) {\r
                                        <span class="usage-globe-row-meta">{{ t('home.usageGlobe.failedShare', { rate: failureRate(row) }) }}</span>\r
                                    }\r
                                </span>\r
                            </button>\r
                        </li>\r
                    }\r
                </ol>\r
\r
                @if (services().length) {\r
                    <h3 class="usage-globe-panel-title mt-5">{{ t('home.usageGlobe.topServices') }}</h3>\r
                    <ul class="usage-globe-services">\r
                        @for (service of services().slice(0, 3); track service.code) {\r
                            <li>\r
                                <span class="truncate">{{ service.label }}</span>\r
                                <span class="usage-globe-row-count">{{ service.count | number }}</span>\r
                            </li>\r
                        }\r
                    </ul>\r
                }\r
            }\r
        </div>\r
    </div>\r
</section>\r
`, styles: ["/* src/app/modules/home/usage-globe/usage-globe.component.scss */\n:host {\n  display: block;\n  margin-bottom: 2rem;\n}\n.usage-globe {\n  container-type: inline-size;\n  position: relative;\n  overflow: hidden;\n  padding: 1.25rem 1.25rem 1.5rem;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background:\n    radial-gradient(\n      120% 90% at 18% 55%,\n      rgba(99, 102, 241, 0.07),\n      transparent 60%),\n    rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n:host-context(.dark) .usage-globe {\n  border-color: rgba(148, 163, 184, 0.18);\n  background:\n    radial-gradient(\n      120% 90% at 18% 55%,\n      rgba(129, 140, 248, 0.12),\n      transparent 60%),\n    rgb(30, 41, 59);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.usage-globe-header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem 1rem;\n}\n.usage-globe-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .usage-globe-title {\n  color: rgb(248, 250, 252);\n}\n.usage-globe-subtitle {\n  margin-top: 0.2rem;\n  font-size: 0.85rem;\n  color: rgb(100, 116, 139);\n  font-variant-numeric: tabular-nums;\n}\n:host-context(.dark) .usage-globe-subtitle {\n  color: rgb(148, 163, 184);\n}\n.usage-globe-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.usage-globe-ranges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-top: 0.85rem;\n}\n.usage-globe-range {\n  height: 1.65rem;\n  padding: 0 0.65rem;\n  border-radius: 9999px;\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  background: transparent;\n  color: rgb(71, 85, 105);\n  font-size: 0.72rem;\n  font-weight: 600;\n  line-height: 1;\n  cursor: pointer;\n}\n.usage-globe-range:hover {\n  border-color: rgba(79, 70, 229, 0.45);\n  color: rgb(67, 56, 202);\n}\n.usage-globe-range--active {\n  border-color: transparent;\n  background: rgb(15, 23, 42);\n  color: white;\n}\n:host-context(.dark) .usage-globe-range {\n  color: rgb(203, 213, 225);\n}\n:host-context(.dark) .usage-globe-range:hover {\n  color: rgb(199, 210, 254);\n}\n:host-context(.dark) .usage-globe-range.usage-globe-range--active {\n  background: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n}\n.usage-globe-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.2rem 0.65rem 0.2rem 0.25rem;\n  border: 1px solid rgba(224, 231, 255, 0.8);\n  border-radius: 9999px;\n  background:\n    linear-gradient(\n      105deg,\n      rgba(238, 242, 255, 0.95) 0%,\n      rgba(245, 243, 255, 0.98) 45%,\n      rgba(250, 245, 255, 0.96) 100%);\n  color: rgb(79, 70, 229);\n  font-size: 0.7rem;\n  font-weight: 600;\n  box-shadow: 0 1px 2px rgba(99, 102, 241, 0.08);\n}\n.usage-globe-chip__icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 9999px;\n  background: #fff;\n  color: rgb(67, 56, 202);\n  box-shadow: 0 1px 2px rgba(79, 70, 229, 0.18);\n}\n.usage-globe-chip__icon svg {\n  width: 1rem;\n  height: 1rem;\n  fill: currentColor;\n}\n:host-context(.dark) .usage-globe-chip {\n  border-color: rgba(49, 46, 129, 0.4);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(30, 41, 59, 0.92) 0%,\n      rgba(30, 27, 75, 0.55) 50%,\n      rgba(49, 46, 129, 0.35) 100%);\n  color: rgb(165, 180, 252);\n}\n.usage-globe-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgb(79, 70, 229);\n}\n.usage-globe-link:hover {\n  text-decoration: underline;\n}\n:host-context(.dark) .usage-globe-link {\n  color: rgb(165, 180, 252);\n}\n.usage-globe-body {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 1.25rem;\n  margin-top: 1rem;\n  align-items: center;\n}\n@container (min-width: 640px) {\n  .usage-globe-body {\n    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);\n    gap: 2rem;\n  }\n}\n.usage-globe-stage {\n  position: relative;\n  width: 100%;\n  max-width: 380px;\n  aspect-ratio: 1;\n  margin-inline: auto;\n  cursor: grab;\n  touch-action: pan-y;\n}\n.usage-globe-stage:active {\n  cursor: grabbing;\n}\n.usage-globe-canvas {\n  width: 100%;\n  height: 100%;\n  contain: layout paint size;\n}\n.usage-globe-overlay {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n}\n.usage-globe-label {\n  position: absolute;\n  bottom: anchor(top);\n  left: anchor(center);\n  translate: -50% -6px;\n  display: inline-flex;\n  gap: 0.35rem;\n  align-items: center;\n  padding: 0.2rem 0.5rem;\n  border-radius: 9999px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  background: rgba(255, 255, 255, 0.92);\n  color: rgb(15, 23, 42);\n  font-size: 0.7rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n  pointer-events: none;\n  backdrop-filter: blur(4px);\n  transition: opacity 0.35s ease;\n}\n:host-context(.dark) .usage-globe-label {\n  border-color: rgba(148, 163, 184, 0.25);\n  background: rgba(15, 23, 42, 0.85);\n  color: rgb(241, 245, 249);\n}\n.usage-globe-label--hub {\n  border-color: rgba(99, 102, 241, 0.45);\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.18);\n}\n.usage-globe-label-code {\n  color: rgb(79, 70, 229);\n}\n:host-context(.dark) .usage-globe-label-code {\n  color: rgb(165, 180, 252);\n}\n@supports not (anchor-name: --a) {\n  .usage-globe-label {\n    display: none;\n  }\n}\n.usage-globe-panel {\n  min-width: 0;\n}\n.usage-globe-panel-title {\n  margin-bottom: 0.5rem;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: rgb(100, 116, 139);\n}\n:host-context(.dark) .usage-globe-panel-title {\n  color: rgb(148, 163, 184);\n}\n.usage-globe-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.usage-globe-row {\n  display: flex;\n  width: 100%;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.5rem 0.5rem;\n  border-radius: 10px;\n  text-align: left;\n  transition: background-color 0.15s ease;\n}\n.usage-globe-row:not(:disabled):hover,\n.usage-globe-row:focus-visible {\n  background: rgba(99, 102, 241, 0.07);\n}\n.usage-globe-row:focus-visible {\n  outline: 2px solid rgb(99, 102, 241);\n  outline-offset: 1px;\n}\n.usage-globe-row:disabled {\n  cursor: default;\n}\n.usage-globe-iso {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  width: 2rem;\n  padding: 0.15rem 0;\n  border-radius: 6px;\n  background: rgba(148, 163, 184, 0.14);\n  color: rgb(51, 65, 85);\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-align: center;\n}\n:host-context(.dark) .usage-globe-iso {\n  background: rgba(148, 163, 184, 0.16);\n  color: rgb(226, 232, 240);\n}\n.usage-globe-row-main {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.usage-globe-row-head {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.75rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .usage-globe-row-head {\n  color: rgb(241, 245, 249);\n}\n.usage-globe-row-count {\n  flex: none;\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.usage-globe-bar {\n  display: block;\n  height: 4px;\n  border-radius: 9999px;\n  background: rgba(148, 163, 184, 0.16);\n  overflow: hidden;\n}\n.usage-globe-bar > span {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background:\n    linear-gradient(\n      90deg,\n      rgb(129, 140, 248),\n      rgb(79, 70, 229));\n  transition: width 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n.usage-globe-row-meta {\n  font-size: 0.7rem;\n  color: rgb(148, 163, 184);\n}\n.usage-globe-services {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.usage-globe-services li {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding-inline: 0.5rem;\n  font-size: 0.8rem;\n  color: rgb(51, 65, 85);\n}\n:host-context(.dark) .usage-globe-services li {\n  color: rgb(203, 213, 225);\n}\n.usage-globe-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.35rem;\n  padding: 1rem 0.5rem;\n}\n@media (prefers-reduced-motion: reduce) {\n  .usage-globe-bar > span,\n  .usage-globe-label {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=usage-globe.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsageGlobeComponent, { className: "UsageGlobeComponent", filePath: "src/app/modules/home/usage-globe/usage-globe.component.ts", lineNumber: 89 });
})();

// src/app/modules/home/home.component.ts
var HomeComponent_Conditional_16_Defer_4_DepsFn = () => [UsageGlobeComponent];
var _c06 = (a0) => ({ name: a0 });
var _c14 = (a0) => ({ amount: a0 });
var _c24 = (a0) => ({ multiplier: a0 });
var _c32 = (a0) => ({ expiresAt: a0 });
var _c4 = (a0, a1) => ({ multiplier: a0, exampleReceived: a1 });
var _forTrack03 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.code;
function HomeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "home.welcome.greeting", \u0275\u0275pureFunction1(9, _c06, ctx_r0.userFirstName() || \u0275\u0275pipeBind1(2, 2, "home.welcome.fallbackName"))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "home.welcome.greetingSubtitle"), " ");
  }
}
function HomeComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 16);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "home.welcome.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "home.welcome.subtitle"), " ");
  }
}
function HomeComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-home-notification-banners");
  }
}
function HomeComponent_Conditional_5_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 4, "home.companyVerification.pendingTitle", \u0275\u0275pureFunction1(7, _c14, \u0275\u0275pipeBind2(1, 1, ctx_r0.welcomeCreditsAmount(), "1.0-2"))), " ");
  }
}
function HomeComponent_Conditional_5_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 4, "home.companyVerification.title", \u0275\u0275pureFunction1(7, _c14, \u0275\u0275pipeBind2(1, 1, ctx_r0.welcomeCreditsAmount(), "1.0-2"))), " ");
  }
}
function HomeComponent_Conditional_5_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 4, "home.companyVerification.pendingBody", \u0275\u0275pureFunction1(7, _c14, \u0275\u0275pipeBind2(1, 1, ctx_r0.welcomeCreditsAmount(), "1.0-2"))), " ");
  }
}
function HomeComponent_Conditional_5_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 4, "home.companyVerification.body", \u0275\u0275pureFunction1(7, _c14, \u0275\u0275pipeBind2(1, 1, ctx_r0.welcomeCreditsAmount(), "1.0-2"))), " ");
  }
}
function HomeComponent_Conditional_5_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 27);
  }
}
function HomeComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "ol", 17)(2, "li", 18)(3, "span", 19)(4, "span", 20);
    \u0275\u0275text(5, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "li", 18)(10, "span", 19)(11, "span", 20);
    \u0275\u0275text(12, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 21);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "li", 18)(17, "span", 19)(18, "span", 20);
    \u0275\u0275text(19, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 21);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 22)(24, "div", 23)(25, "h2", 24);
    \u0275\u0275template(26, HomeComponent_Conditional_5_Conditional_26_Template, 3, 9)(27, HomeComponent_Conditional_5_Conditional_27_Template, 3, 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 25);
    \u0275\u0275template(29, HomeComponent_Conditional_5_Conditional_29_Template, 3, 9)(30, HomeComponent_Conditional_5_Conditional_30_Template, 3, 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 26);
    \u0275\u0275listener("click", function HomeComponent_Conditional_5_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startKycVerification());
    });
    \u0275\u0275template(32, HomeComponent_Conditional_5_Conditional_32_Template, 1, 0, "mat-spinner", 27);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 29);
    \u0275\u0275element(37, "rect", 30)(38, "rect", 31)(39, "circle", 32)(40, "path", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("data-step", ctx_r0.companyVerificationStep());
    \u0275\u0275advance();
    \u0275\u0275classProp("company-verification-step--active", ctx_r0.companyVerificationStep() === 1)("company-verification-step--complete", ctx_r0.companyVerificationStep() > 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 17, "home.companyVerification.step1"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("company-verification-step--active", ctx_r0.companyVerificationStep() === 2)("company-verification-step--complete", ctx_r0.companyVerificationStep() > 2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 19, "home.companyVerification.step2"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 21, "home.companyVerification.step3"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.companyVerificationPending() ? 26 : 27);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.companyVerificationPending() ? 29 : 30);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.accountEnv.verifyCompanyLoading() || ctx_r0.companyVerificationPending());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.accountEnv.verifyCompanyLoading() ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 23, "home.companyVerification.cta"), " ");
  }
}
function HomeComponent_Conditional_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "addCredits.promo.bringBack.bodyTriple", \u0275\u0275pureFunction1(4, _c24, ((tmp_2_0 = ctx_r0.bringBackOffer()) == null ? null : tmp_2_0.multiplier) || 3)), " ");
  }
}
function HomeComponent_Conditional_6_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "addCredits.promo.bringBack.body", \u0275\u0275pureFunction2(4, _c4, ((tmp_2_0 = ctx_r0.bringBackOffer()) == null ? null : tmp_2_0.multiplier) || 2, ctx_r0.bringBackExampleReceived())), " ");
  }
}
function HomeComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 34)(2, "div", 35)(3, "div", 36)(4, "mat-icon", 37);
    \u0275\u0275text(5, "local_offer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "p", 39);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 40);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 41);
    \u0275\u0275template(14, HomeComponent_Conditional_6_Conditional_14_Template, 2, 6)(15, HomeComponent_Conditional_6_Conditional_15_Template, 2, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 42);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 43)(21, "a", 44)(22, "mat-icon", 45);
    \u0275\u0275text(23, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 46)(27, "mat-icon", 45);
    \u0275\u0275text(28, "credit_card");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "addCredits.promo.bringBack.badge"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 8, "addCredits.promo.bringBack.title", \u0275\u0275pureFunction1(21, _c24, ((tmp_2_0 = ctx_r0.bringBackOffer()) == null ? null : tmp_2_0.multiplier) || 2)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r0.bringBackOffer()) == null ? null : tmp_3_0.tier) === "triple" ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 14, "addCredits.promo.bringBack.deadline", \u0275\u0275pureFunction1(23, _c32, \u0275\u0275pipeBind2(18, 11, (tmp_4_0 = ctx_r0.bringBackOffer()) == null ? null : tmp_4_0.expiresAt, "medium") || "")), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 17, "addCredits.promo.bringBack.ctaRecharge"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 19, "addCredits.promo.bringBack.ctaSubscribe"), " ");
  }
}
function HomeComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 47)(2, "div", 48)(3, "p", 49);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 50);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 51);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 52);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 53);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 54);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 56);
    \u0275\u0275element(24, "rect", 57)(25, "rect", 58)(26, "circle", 59);
    \u0275\u0275elementStart(27, "text", 60);
    \u0275\u0275text(28, " 2x ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "addCredits.promo.weekOneUsd50.badge"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "addCredits.promo.weekOneUsd50.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "addCredits.promo.weekOneUsd50.body"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "addCredits.promo.weekOneUsd50.accountCreatedNotice"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 17, "addCredits.promo.weekOneUsd50.deadline", \u0275\u0275pureFunction1(22, _c32, \u0275\u0275pipeBind2(17, 14, (tmp_5_0 = ctx_r0.weekOneUsd50Promotion()) == null ? null : tmp_5_0.expiresAt, "medium") || "")), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 20, "addCredits.purchaseCredits"), " ");
  }
}
function HomeComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-home-get-started");
  }
}
function HomeComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 6)(1, "app-onboarding-quests", 61);
    \u0275\u0275listener("openExplanation", function HomeComponent_Conditional_10_Template_app_onboarding_quests_openExplanation_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openTaskExplanation($event.taskId, $event.status));
    })("startKyc", function HomeComponent_Conditional_10_Template_app_onboarding_quests_startKyc_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startKycVerification());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("onboarding", ctx_r0.onboarding())("verifyingTaskId", ctx_r0.verifyingTaskId())("verificationError", ctx_r0.verificationError())("taskLink", ctx_r0.getTaskLink);
  }
}
function HomeComponent_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "mat-spinner", 64);
    \u0275\u0275elementStart(2, "span", 65);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "home.stats.loading"));
  }
}
function HomeComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 63)(2, "div", 66)(3, "div", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 68);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 66)(9, "div", 67);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 68);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 66)(15, "div", 67);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 68);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 66)(21, "div", 67);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 68);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const totals_r4 = \u0275\u0275nextContext(2).getTotals();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(totals_r4.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "home.stats.totalValidations"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(totals_r4.ok);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 10, "home.stats.successful"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(totals_r4.failed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 12, "home.stats.failed"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 14, totals_r4.credits, "1.0-3"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 17, "home.stats.creditsUsed"), " ");
  }
}
function HomeComponent_Conditional_16_Defer_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-usage-globe", 69);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("services", ctx_r0.globeServices());
  }
}
function HomeComponent_Conditional_16_DeferPlaceholder_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 70);
  }
}
function HomeComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HomeComponent_Conditional_16_Conditional_0_Template, 5, 3, "div", 62)(1, HomeComponent_Conditional_16_Conditional_1_Template, 27, 19, "div", 63)(2, HomeComponent_Conditional_16_Defer_2_Template, 1, 1)(3, HomeComponent_Conditional_16_DeferPlaceholder_3_Template, 1, 0);
    \u0275\u0275defer(4, 2, HomeComponent_Conditional_16_Defer_4_DepsFn, null, 3);
    \u0275\u0275deferOnViewport(0, -1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.loading() ? 0 : 1);
  }
}
function HomeComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "p", 71);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 72);
    \u0275\u0275listener("click", function HomeComponent_Conditional_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAuthModal());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "home.stats.signInPrompt"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "home.stats.signIn"), " ");
  }
}
function HomeComponent_Conditional_18_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 79);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("chart", ctx_r0.chartWeeklyExpenses.chart)("colors", ctx_r0.chartWeeklyExpenses.colors)("series", ctx_r0.chartWeeklyExpenses.series)("stroke", ctx_r0.chartWeeklyExpenses.stroke)("tooltip", ctx_r0.chartWeeklyExpenses.tooltip)("xaxis", ctx_r0.chartWeeklyExpenses.xaxis)("yaxis", ctx_r0.chartWeeklyExpenses.yaxis);
  }
}
function HomeComponent_Conditional_18_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 79);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("chart", ctx_r0.chartMonthlyExpenses.chart)("colors", ctx_r0.chartMonthlyExpenses.colors)("series", ctx_r0.chartMonthlyExpenses.series)("stroke", ctx_r0.chartMonthlyExpenses.stroke)("tooltip", ctx_r0.chartMonthlyExpenses.tooltip)("xaxis", ctx_r0.chartMonthlyExpenses.xaxis)("yaxis", ctx_r0.chartMonthlyExpenses.yaxis);
  }
}
function HomeComponent_Conditional_18_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 79);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("chart", ctx_r0.chartYearlyExpenses.chart)("colors", ctx_r0.chartYearlyExpenses.colors)("series", ctx_r0.chartYearlyExpenses.series)("stroke", ctx_r0.chartYearlyExpenses.stroke)("tooltip", ctx_r0.chartYearlyExpenses.tooltip)("xaxis", ctx_r0.chartYearlyExpenses.xaxis)("yaxis", ctx_r0.chartYearlyExpenses.yaxis);
  }
}
function HomeComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "div", 73)(2, "div", 74)(3, "div", 75);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 77);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 78);
    \u0275\u0275template(12, HomeComponent_Conditional_18_Conditional_12_Template, 1, 7, "apx-chart", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 74)(14, "div", 75);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 76);
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "span", 77);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 78);
    \u0275\u0275template(23, HomeComponent_Conditional_18_Conditional_23_Template, 1, 7, "apx-chart", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 74)(25, "div", 75);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 76);
    \u0275\u0275text(29);
    \u0275\u0275elementStart(30, "span", 77);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 78);
    \u0275\u0275template(34, HomeComponent_Conditional_18_Conditional_34_Template, 1, 7, "apx-chart", 79);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const dashboard_r6 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 12, "home.stats.weeklyExpenses"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatCredits(dashboard_r6.weeklyExpenses == null ? null : dashboard_r6.weeklyExpenses.amount), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 14, "home.stats.creditsUnit"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.chartWeeklyExpenses ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 16, "home.stats.monthlyExpenses"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatCredits(dashboard_r6.monthlyExpenses == null ? null : dashboard_r6.monthlyExpenses.amount), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 18, "home.stats.creditsUnit"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.chartMonthlyExpenses ? 23 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 20, "home.stats.yearlyExpenses"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatCredits(dashboard_r6.yearlyExpenses == null ? null : dashboard_r6.yearlyExpenses.amount), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 22, "home.stats.creditsUnit"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.chartYearlyExpenses ? 34 : -1);
  }
}
function HomeComponent_Conditional_20_Conditional_1_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 96);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("chart", ctx_r0.chartLastMonth.chart)("colors", ctx_r0.chartLastMonth.colors)("dataLabels", ctx_r0.chartLastMonth.dataLabels)("grid", ctx_r0.chartLastMonth.grid)("legend", ctx_r0.chartLastMonth.legend)("series", ctx_r0.chartLastMonth.series)("stroke", ctx_r0.chartLastMonth.stroke)("tooltip", ctx_r0.chartLastMonth.tooltip)("xaxis", ctx_r0.chartLastMonth.xaxis)("yaxis", ctx_r0.chartLastMonth.yaxis);
  }
}
function HomeComponent_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 82)(2, "h3", 83);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 89);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275declareLet(8)(9)(10);
    \u0275\u0275elementStart(11, "div", 90)(12, "div", 91)(13, "div", 92);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 93)(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 94);
    \u0275\u0275text(20, "100%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 91)(22, "div", 92);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 93)(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 94);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 91)(31, "div", 92);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 93)(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 95);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 86);
    \u0275\u0275template(40, HomeComponent_Conditional_20_Conditional_1_Conditional_40_Template, 1, 10, "apx-chart", 96);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const last30_r7 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "home.stats.last30Days"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("30 ", \u0275\u0275pipeBind1(7, 13, "home.stats.days"), "");
    const okSum_r8 = ctx_r0.sumSeries(last30_r7.series == null ? null : last30_r7.series[0] == null ? null : last30_r7.series[0].data);
    const notFoundSum_r9 = ctx_r0.sumSeries(last30_r7.series == null ? null : last30_r7.series[1] == null ? null : last30_r7.series[1].data);
    const totalReq_r10 = last30_r7.amount || okSum_r8 + notFoundSum_r9;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 15, "home.stats.requestsTotal"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(totalReq_r10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 17, "home.stats.requestsSuccess"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(okSum_r8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.percentOf(okSum_r8, totalReq_r10), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 19, "home.stats.requestsNotFound"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(notFoundSum_r9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.percentOf(notFoundSum_r9, totalReq_r10), "%");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.chartLastMonth ? 40 : -1);
  }
}
function HomeComponent_Conditional_20_Conditional_8_For_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 106);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const top_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", top_r11.failed, " ", \u0275\u0275pipeBind1(2, 2, "home.stats.failed"), " ");
  }
}
function HomeComponent_Conditional_20_Conditional_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 100)(4, "div", 101);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 102);
    \u0275\u0275element(7, "div", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 104)(9, "span", 105);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, HomeComponent_Conditional_20_Conditional_8_For_3_Conditional_11_Template, 3, 4, "span", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const top_r11 = ctx.$implicit;
    const \u0275$index_434_r12 = ctx.$index;
    \u0275\u0275nextContext();
    const maxCount_r13 = \u0275\u0275readContextLet(0);
    \u0275\u0275classProp("performer-row-top", \u0275$index_434_r12 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_434_r12 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", top_r11.displayName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", top_r11.count / maxCount_r13 * 100, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(top_r11.count);
    \u0275\u0275advance();
    \u0275\u0275conditional(top_r11.failed > 0 ? 11 : -1);
  }
}
function HomeComponent_Conditional_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 84);
    \u0275\u0275repeaterCreate(2, HomeComponent_Conditional_20_Conditional_8_For_3_Template, 12, 8, "div", 97, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275storeLet(((tmp_3_0 = ctx_r0.podium()[0]) == null ? null : tmp_3_0.count) || 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.podium());
  }
}
function HomeComponent_Conditional_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "home.stats.noData"), " ");
  }
}
function HomeComponent_Conditional_20_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 87);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("chart", ctx_r0.chartUsageLine.chart)("colors", ctx_r0.chartUsageLine.colors)("dataLabels", ctx_r0.chartUsageLine.dataLabels)("grid", ctx_r0.chartUsageLine.grid)("labels", ctx_r0.chartUsageLine.labels)("legend", ctx_r0.chartUsageLine.legend)("plotOptions", ctx_r0.chartUsageLine.plotOptions)("series", ctx_r0.chartUsageLine.series)("states", ctx_r0.chartUsageLine.states)("stroke", ctx_r0.chartUsageLine.stroke)("tooltip", ctx_r0.chartUsageLine.tooltip)("xaxis", ctx_r0.chartUsageLine.xaxis)("yaxis", ctx_r0.chartUsageLine.yaxis);
  }
}
function HomeComponent_Conditional_20_Conditional_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 107);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("chart", ctx_r0.chartDistribution.chart)("colors", ctx_r0.chartDistribution.colors)("dataLabels", ctx_r0.chartDistribution.dataLabels)("markers", ctx_r0.chartDistribution.markers)("plotOptions", ctx_r0.chartDistribution.plotOptions)("series", ctx_r0.chartDistribution.series)("stroke", ctx_r0.chartDistribution.stroke)("tooltip", ctx_r0.chartDistribution.tooltip)("xaxis", ctx_r0.chartDistribution.xaxis)("yaxis", ctx_r0.chartDistribution.yaxis);
  }
}
function HomeComponent_Conditional_20_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 82)(2, "h3", 83);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 89);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 86);
    \u0275\u0275template(9, HomeComponent_Conditional_20_Conditional_17_Conditional_9_Template, 1, 10, "apx-chart", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "home.stats.serviceDistribution"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("30 ", \u0275\u0275pipeBind1(7, 5, "home.stats.days"), "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.chartDistribution ? 9 : -1);
  }
}
function HomeComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275template(1, HomeComponent_Conditional_20_Conditional_1_Template, 41, 21, "div", 80);
    \u0275\u0275elementStart(2, "div", 81)(3, "div", 80)(4, "div", 82)(5, "h3", 83);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, HomeComponent_Conditional_20_Conditional_8_Template, 4, 1, "div", 84)(9, HomeComponent_Conditional_20_Conditional_9_Template, 3, 3, "p", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 80)(11, "div", 82)(12, "h3", 83);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 86);
    \u0275\u0275template(16, HomeComponent_Conditional_20_Conditional_16_Template, 1, 13, "apx-chart", 87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(17, HomeComponent_Conditional_20_Conditional_17_Template, 10, 7, "div", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const dashboard_r14 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = dashboard_r14.lastMonthRequests) ? 1 : -1, tmp_2_0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "home.stats.topEndpoints"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.podium().length > 0 ? 8 : 9);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 8, "home.stats.weeklyUsage"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.chartUsageLine ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(dashboard_r14.distribution ? 17 : -1);
  }
}
function HomeComponent_For_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 108)(1, "div", 110)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "div", 111);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 112);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r15.link);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r15.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, item_r15.titleKey), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 6, item_r15.subtitleKey), " ");
  }
}
function HomeComponent_For_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 113);
    \u0275\u0275listener("click", function HomeComponent_For_27_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const item_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onShortcutActivate(item_r15));
    });
    \u0275\u0275elementStart(1, "div", 110)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "div", 111);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 112);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("shortcut-card--support", item_r15.accent === "support");
    \u0275\u0275advance();
    \u0275\u0275classProp("shortcut-icon--support", item_r15.accent === "support");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r15.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, item_r15.titleKey), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, item_r15.subtitleKey), " ");
  }
}
function HomeComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HomeComponent_For_27_Conditional_0_Template, 11, 8, "a", 108)(1, HomeComponent_For_27_Conditional_1_Template, 11, 11, "button", 109);
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.isShortcutLink(item_r15) ? 0 : 1);
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this._destroyRef = inject(DestroyRef);
    this._homeService = inject(HomeService);
    this._sessionService = inject(SessionService);
    this._matDialog = inject(MatDialog);
    this._transloco = inject(TranslocoService);
    this._lang = toSignal(this._transloco.langChanges$.pipe(switchMap((lang) => this._transloco.load(lang).pipe(map(() => lang), catchError(() => of(lang))))), { initialValue: this._transloco.getActiveLang() });
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._userService = inject(UserService);
    this._document = inject(DOCUMENT);
    this._fuseConfig = inject(FuseConfigService);
    this._quickChatService = inject(QuickChatService);
    this._appNotificationsService = inject(AppNotificationsService);
    this._schemeAutoListenerCleanup = null;
    this._onboardingService = inject(OnboardingService);
    this.accountEnv = inject(AccountEnvironmentService);
    this.isAuthenticated = signal(false);
    this.userFirstName = signal("");
    this.loading = this._homeService.loading;
    this.dashboardData = this._homeService.dashboardData;
    this.canRecharge = signal(void 0);
    this.approvalRequestStatus = signal(void 0);
    this.pendingWelcomeCredits = signal(void 0);
    this.showCompanyVerificationCard = computed(() => this.isAuthenticated() && this.canRecharge() === false && this.approvalRequestStatus() !== "approved");
    this.companyVerificationPending = computed(() => this.approvalRequestStatus() === "requested");
    this.companyVerificationStep = computed(() => this.companyVerificationPending() ? 2 : 1);
    this.welcomeCreditsAmount = computed(() => this.pendingWelcomeCredits()?.amount ?? 0);
    this.onboarding = signal(null);
    this.verifyingTaskId = signal(null);
    this.verificationError = signal(null);
    this.chartWeeklyExpenses = null;
    this.chartMonthlyExpenses = null;
    this.chartYearlyExpenses = null;
    this.chartDistribution = null;
    this.chartLastMonth = null;
    this.chartUsageLine = null;
    this.weekOneUsd50Promotion = signal(void 0);
    this.bringBackOffer = signal(void 0);
    this.showBringBackPromoBanner = computed(() => Boolean(this.bringBackOffer()?.eligible));
    this.showWeekOneUsd50PromoBanner = computed(() => Boolean(this.weekOneUsd50Promotion()?.eligible) && !this.showBringBackPromoBanner());
    this.bringBackExampleReceived = computed(() => {
      const multiplier = this.bringBackOffer()?.multiplier ?? 2;
      return 50 * multiplier;
    });
    this.podium = computed(() => {
      const overall = this.dashboardData()?.topCodes?.overall ?? [];
      const failedByCode = /* @__PURE__ */ new Map();
      for (const entry of this._homeService.topSalesData() ?? []) {
        failedByCode.set(entry._id, entry.failed ?? 0);
      }
      return overall.slice(0, 5).map((entry) => ({
        code: entry._id,
        count: entry.count ?? 0,
        failed: failedByCode.get(entry._id) ?? 0,
        displayName: this.getApiDisplayName(entry._id)
      }));
    });
    this.globeServices = computed(() => [...this._homeService.topSalesData() ?? []].sort((a, b) => (b.total ?? 0) - (a.total ?? 0)).slice(0, 3).map((entry) => ({ code: entry._id, label: this.getApiDisplayName(entry._id), count: entry.total ?? 0 })));
    this.shortcuts = [
      {
        id: "chat",
        titleKey: "home.shortcuts.chat",
        subtitleKey: "home.shortcuts.chatSubtitle",
        link: "/chat",
        icon: "chat_bubble"
      },
      {
        id: "support-tickets",
        titleKey: "home.shortcuts.supportTickets",
        subtitleKey: "home.shortcuts.supportTicketsSubtitle",
        icon: "support_agent",
        action: "support-tickets",
        accent: "support"
      },
      {
        id: "postman",
        titleKey: "home.shortcuts.postman",
        subtitleKey: "nav.api_testing",
        link: "/postman",
        icon: "terminal"
      },
      {
        id: "check-list",
        titleKey: "home.shortcuts.checkList",
        subtitleKey: "nav.check_list_subtitle",
        link: "/check-list",
        icon: "checklist"
      },
      {
        id: "smart-batch",
        titleKey: "home.shortcuts.smartBatch",
        subtitleKey: "nav.visita_guide_subtitle",
        link: "/smart-batch",
        icon: "queue"
      },
      {
        id: "smart-access",
        titleKey: "home.shortcuts.smartAccess",
        subtitleKey: "nav.smart_access_projects_subtitle",
        link: "/smart-access/projects",
        icon: "lock_open"
      },
      {
        id: "history",
        titleKey: "home.shortcuts.history",
        subtitleKey: "nav.history_subtitle",
        link: "/history",
        icon: "history"
      },
      {
        id: "smart-scan",
        titleKey: "home.shortcuts.smartScan",
        subtitleKey: "nav.scan_documents",
        link: "/smart-enroll/smart-scan",
        icon: "document_scanner"
      },
      {
        id: "status-check",
        titleKey: "home.shortcuts.statusCheck",
        subtitleKey: "nav.system_health",
        link: "/smart-monitor/status-check",
        icon: "monitor_heart"
      },
      {
        id: "incidents",
        titleKey: "home.shortcuts.incidents",
        subtitleKey: "nav.active_incidents",
        link: "/smart-monitor/incidents",
        icon: "warning"
      },
      {
        id: "webhooks",
        titleKey: "home.shortcuts.webhooks",
        subtitleKey: "nav.webhooks_subtitle",
        link: "/smart-monitor/webhooks",
        icon: "link"
      },
      {
        id: "smart-reduce",
        titleKey: "home.shortcuts.smartReduce",
        subtitleKey: "nav.resize_compress_images",
        link: "/smart-tools/smart-reduce",
        icon: "image"
      },
      {
        id: "subscription-plans",
        titleKey: "home.shortcuts.subscriptionPlans",
        subtitleKey: "nav.manage_subscription",
        link: "/subscription-plans",
        icon: "credit_card"
      },
      {
        id: "add-credits",
        titleKey: "home.shortcuts.addCredits",
        subtitleKey: "nav.purchase_credits",
        link: "/add-credits",
        icon: "add_circle"
      }
    ];
    this.getTaskLink = (taskId) => {
      switch (taskId) {
        case "test_smartcheck":
          return "/postman";
        case "test_collection_demo":
          return "/smart-enroll/demos/create-collection";
        case "test_add_person_demo":
          return "/smart-enroll/demos/create-person";
        case "test_search_person_demo":
          return "/smart-enroll/demos/search-person";
        case "test_liveness_demo":
          return "/smart-enroll/demos/liveness";
        case "test_humanauthn_creation":
          return "/smart-enroll/demos/humanid-create-qr";
        case "test_humanauthn_decryption":
          return "/smart-enroll/demos/humanid-decrypt";
        case "test_humanauthn_preview":
          return "/smart-enroll/demos/humanid-preview";
        case "subscribe_smart_access":
          return "/smart-access/projects";
        case "subscribe_smart_enroll":
          return "/smart-enroll/projects";
        case "add_billing_details":
          return "/settings/billing-details";
        case "complete_kyc":
          return "/home";
        default:
          return "/home";
      }
    };
    effect(() => {
      const data = this.dashboardData();
      if (!data) {
        this._resetCharts();
        return;
      }
      this._buildCharts(data);
    });
    this._destroyRef.onDestroy(() => this._detachSchemeAutoListener());
    this._fuseConfig.config$.pipe(takeUntilDestroyed()).subscribe((config) => {
      if (config.scheme === "auto") {
        this._attachSchemeAutoListener();
      } else {
        this._detachSchemeAutoListener();
      }
      this._scheduleRebuildCharts();
    });
  }
  ngOnInit() {
    this.isAuthenticated.set(this._sessionService.hasValidAuthentication());
    if (this.isAuthenticated()) {
      this._handleOpenNotificationsQueryParam();
      this._onboardingService.verifyAllTasks().subscribe({
        next: (res) => this.onboarding.set(res.data),
        error: (err) => {
          console.error("Failed to auto-verify onboarding tasks:", err);
          this._onboardingService.getOnboarding().subscribe({
            next: (res) => this.onboarding.set(res.data),
            error: (e) => console.error("Failed to load onboarding progress:", e)
          });
        }
      });
      this._loadUserData();
    }
    this._installApexSvgFix();
    this._homeService.fetchStats();
  }
  _loadUserData() {
    this._userService.get().pipe(catchError((err) => {
      console.error("Failed to load session for promotions:", err);
      return of(null);
    })).subscribe((user) => {
      const bringBack = user?.bringBackOffer;
      const activeBringBack = bringBack?.kind === "bring_back" && bringBack.eligible ? bringBack : void 0;
      this.bringBackOffer.set(activeBringBack);
      const promo = user?.promotion;
      this.weekOneUsd50Promotion.set(promo?.kind === "smart_agent_week1_usd50" ? promo : void 0);
      const clientId = user?._id || user?.id || "";
      const rawName = (user?.name || "").trim();
      this.userFirstName.set(rawName ? rawName.split(/\s+/)[0] : "");
      this.canRecharge.set(typeof user?.canRecharge === "boolean" ? user.canRecharge : void 0);
      this.approvalRequestStatus.set(user?.approvalRequestStatus);
      this.pendingWelcomeCredits.set((user?.pendingWelcomeCredits?.lockedUntilPurchase || user?.pendingWelcomeCredits?.lockedUntilApproval) && (user.pendingWelcomeCredits.amount ?? 0) > 0 ? user.pendingWelcomeCredits : void 0);
      if (activeBringBack) {
        this._maybeOpenBringBackOfferModal(clientId, activeBringBack);
      }
    });
  }
  getTotals() {
    return this._homeService.getAggregatedTotals();
  }
  verifyTask(taskId) {
    this.verifyingTaskId.set(taskId);
    this.verificationError.set(null);
    this._onboardingService.verifyTask(taskId).subscribe({
      next: (res) => {
        this.verifyingTaskId.set(null);
        if (res.data?.success) {
          this.onboarding.set(res.data.onboarding);
        } else {
          this.verificationError.set(taskId);
          setTimeout(() => {
            if (this.verificationError() === taskId) {
              this.verificationError.set(null);
            }
          }, 5e3);
        }
      },
      error: (err) => {
        this.verifyingTaskId.set(null);
        this.verificationError.set(taskId);
        setTimeout(() => {
          if (this.verificationError() === taskId) {
            this.verificationError.set(null);
          }
        }, 5e3);
        console.error("Failed to verify task:", err);
      }
    });
  }
  startKycVerification() {
    this.accountEnv.startCompanyVerification();
  }
  /**
   * Display name for an API or plan code.
   * Reads the active language so podium and globe labels recompute after a language change.
   */
  getApiDisplayName(code) {
    this._lang();
    const key = `appFeatures.${code}.title`;
    const translated = this._transloco.translate(key);
    return translated !== key ? translated : code;
  }
  /** Sum helper for KPIs above the last-30-days chart. */
  sumSeries(data) {
    if (!Array.isArray(data))
      return 0;
    return data.reduce((acc, val) => acc + (Number(val) || 0), 0);
  }
  /** Percentage helper, safe against div-by-zero. */
  percentOf(part, total) {
    if (!total)
      return "0";
    return (part * 100 / total).toFixed(1);
  }
  /** Format a credit amount for the expenses sparklines. */
  formatCredits(value) {
    const n = Math.abs(Number(value) || 0);
    return n.toFixed(2);
  }
  openAuthModal() {
    this._matDialog.open(AuthModalComponent, {
      panelClass: "auth-modal-dialog",
      width: "400px"
    });
  }
  /**
   * Blocking welcome-back modal once per offer until dismissed (localStorage).
   */
  _maybeOpenBringBackOfferModal(clientId, offer) {
    if (!clientId || !offer?.expiresAt) {
      return;
    }
    if (isBringBackModalDismissed(clientId, offer.expiresAt)) {
      return;
    }
    const dialogRef = this._matDialog.open(BringBackOfferModalComponent, {
      data: { offer },
      disableClose: true,
      panelClass: "bring-back-offer-modal-dialog",
      width: "100%",
      maxWidth: "520px"
    });
    dialogRef.afterClosed().subscribe((reason) => {
      if (!reason) {
        return;
      }
      dismissBringBackModal(clientId, offer.expiresAt, reason);
      if (reason === "accepted") {
        void this._router.navigate(["/add-credits"]);
        return;
      }
      if (reason === "view_plans") {
        void this._router.navigate(["/subscription-plans"]);
      }
    });
  }
  openTutorial() {
    this._matDialog.open(HomeTutorialModalComponent, {
      panelClass: "tutorial-modal-dialog",
      maxWidth: "500px"
    });
  }
  openTaskExplanation(taskId, status) {
    this._matDialog.open(OnboardingExplanationModalComponent, {
      panelClass: "onboarding-explanation-dialog",
      width: "100%",
      maxWidth: "512px",
      data: { taskId, status }
    });
  }
  onShortcutActivate(item) {
    if (item.action === "support-tickets") {
      this._quickChatService.requestOpenPanel();
    }
  }
  isShortcutLink(item) {
    return Boolean(item.link) && !item.action;
  }
  _resetCharts() {
    this.chartWeeklyExpenses = null;
    this.chartMonthlyExpenses = null;
    this.chartYearlyExpenses = null;
    this.chartDistribution = null;
    this.chartLastMonth = null;
    this.chartUsageLine = null;
  }
  _chartTheme() {
    const isDark = Boolean(this._document.body?.classList.contains("dark"));
    if (!isDark) {
      return {
        tooltipTheme: "dark",
        chartForeColor: "inherit",
        axisLabelColor: "rgb(148, 163, 184)",
        gridBorderColor: "rgba(148, 163, 184, 0.2)",
        chartBg: "transparent",
        areaColors: ["#64748B", "#94A3B8"],
        areaFills: ["#64748B", "#94A3B8"],
        lineMuted: ["#64748B", "#94A3B8"],
        radarPolygon: "rgba(148, 163, 184, 0.3)",
        radarConnector: "rgba(148, 163, 184, 0.3)",
        markerStroke: "#818CF8",
        distributionColor: "#818CF8",
        dataLabelColor: "#475569"
      };
    }
    return {
      tooltipTheme: "dark",
      chartForeColor: "#f1f5f9",
      axisLabelColor: "#94a3b8",
      gridBorderColor: "rgba(148, 163, 184, 0.14)",
      chartBg: "transparent",
      areaColors: ["#94a3b8", "#cbd5e1"],
      areaFills: ["#94a3b8", "#cbd5e1"],
      lineMuted: ["#94a3b8", "#cbd5e1"],
      radarPolygon: "rgba(148, 163, 184, 0.22)",
      radarConnector: "rgba(148, 163, 184, 0.22)",
      markerStroke: "#a5b4fc",
      distributionColor: "#a5b4fc",
      dataLabelColor: "#e2e8f0"
    };
  }
  _attachSchemeAutoListener() {
    this._detachSchemeAutoListener();
    const win = this._document.defaultView;
    if (!win || typeof win.matchMedia !== "function")
      return;
    const mql = win.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => this._scheduleRebuildCharts();
    mql.addEventListener("change", onChange);
    this._schemeAutoListenerCleanup = () => mql.removeEventListener("change", onChange);
  }
  _detachSchemeAutoListener() {
    this._schemeAutoListenerCleanup?.();
    this._schemeAutoListenerCleanup = null;
  }
  /** Defer so `body.light` / `body.dark` matches Fuse layout after config changes. */
  _scheduleRebuildCharts() {
    const win = this._document.defaultView;
    if (!win)
      return;
    win.setTimeout(() => this._rebuildChartsIfLoaded(), 0);
  }
  _rebuildChartsIfLoaded() {
    const data = this.dashboardData();
    if (!data) {
      this._resetCharts();
      return;
    }
    this._buildCharts(data);
  }
  _buildCharts(data) {
    const theme = this._chartTheme();
    this.chartWeeklyExpenses = data.weeklyExpenses ? this._buildExpenseSparkline(data.weeklyExpenses, "#22D3EE", theme) : null;
    this.chartMonthlyExpenses = data.monthlyExpenses ? this._buildExpenseSparkline(data.monthlyExpenses, "#4ADE80", theme) : null;
    this.chartYearlyExpenses = data.yearlyExpenses ? this._buildExpenseSparkline(data.yearlyExpenses, "#FB7185", theme) : null;
    this.chartLastMonth = data.lastMonthRequests ? this._buildLastMonthArea(data.lastMonthRequests, theme) : null;
    this.chartDistribution = data.distribution ? this._buildDistributionRadar(data.distribution, theme) : null;
    this.chartUsageLine = data.topCodes ? this._buildUsageLine(data.topCodes, theme) : null;
  }
  _buildExpenseSparkline(seriesData, color, theme) {
    const data = (seriesData.series ?? []).map((num) => Math.abs(Number(num) || 0));
    return {
      chart: {
        animations: { enabled: false },
        fontFamily: "inherit",
        foreColor: theme.chartForeColor,
        background: theme.chartBg,
        height: "100%",
        type: "line",
        sparkline: { enabled: true }
      },
      colors: [color],
      series: [{ name: "Credits", data }],
      stroke: { curve: "smooth" },
      tooltip: { theme: theme.tooltipTheme },
      xaxis: {
        type: "category",
        categories: seriesData.labels ?? []
      },
      yaxis: {
        labels: {
          formatter: (val) => this.formatCredits(val)
        }
      }
    };
  }
  _buildLastMonthArea(seriesData, theme) {
    return {
      chart: {
        animations: { enabled: false },
        fontFamily: "inherit",
        foreColor: theme.chartForeColor,
        background: theme.chartBg,
        height: "100%",
        type: "area",
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      colors: theme.areaColors,
      dataLabels: { enabled: false },
      fill: {
        colors: theme.areaFills,
        opacity: 0.45
      },
      grid: {
        show: false,
        padding: { bottom: -40, left: 0, right: 0 }
      },
      legend: { show: false },
      series: seriesData.series ?? [],
      stroke: { curve: "smooth", width: 2 },
      tooltip: {
        followCursor: true,
        theme: theme.tooltipTheme,
        x: { format: "MMM dd, yyyy" }
      },
      xaxis: {
        axisBorder: { show: false },
        labels: {
          offsetY: -20,
          rotate: 0,
          style: { colors: theme.axisLabelColor }
        },
        tickAmount: 3,
        tooltip: { enabled: false },
        type: "category",
        categories: seriesData.labels ?? []
      },
      yaxis: {
        labels: {
          style: { colors: theme.axisLabelColor }
        },
        max: (max) => max + 5,
        min: (min) => min - 5,
        show: false,
        tickAmount: 5
      }
    };
  }
  _buildDistributionRadar(distribution, theme) {
    const counts = distribution.series?.[1]?.data ?? [];
    const total = counts.reduce((acc, val) => acc + (Number(val) || 0), 0);
    const percentages = counts.map((value) => Number(((Number(value) || 0) * 100 / (total || 1)).toFixed(2)));
    return {
      chart: {
        fontFamily: "inherit",
        foreColor: theme.chartForeColor,
        background: theme.chartBg,
        height: "100%",
        type: "radar",
        sparkline: { enabled: true }
      },
      colors: [theme.distributionColor],
      dataLabels: {
        enabled: true,
        formatter: (val) => `${val}%`,
        textAnchor: "start",
        style: {
          fontSize: "13px",
          fontWeight: 500,
          colors: [theme.dataLabelColor]
        },
        background: { borderWidth: 0, padding: 4 },
        offsetY: -15
      },
      markers: {
        strokeColors: theme.markerStroke,
        strokeWidth: 4
      },
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: theme.radarPolygon,
            connectorColors: theme.radarConnector
          }
        }
      },
      series: [{ name: "Distribution", data: percentages }],
      stroke: { width: 2 },
      tooltip: {
        theme: theme.tooltipTheme,
        y: { formatter: (val) => `${val}%` }
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontSize: "12px",
            fontWeight: "500",
            colors: theme.axisLabelColor
          }
        },
        type: "category",
        categories: distribution.categories ?? []
      },
      yaxis: {
        max: (max) => parseInt((max + 10).toFixed(0), 10),
        tickAmount: 7
      }
    };
  }
  _buildUsageLine(topCodes, theme) {
    const aggregated = (topCodes.series ?? []).map((bucket) => bucket.reduce((acc, curr) => acc + (Number(curr?.count) || 0), 0));
    return {
      chart: {
        fontFamily: "inherit",
        foreColor: theme.chartForeColor,
        background: theme.chartBg,
        height: "100%",
        type: "line",
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      colors: theme.lineMuted,
      dataLabels: {
        enabled: true,
        enabledOnSeries: [0],
        background: { borderWidth: 0 },
        style: { colors: [theme.dataLabelColor] }
      },
      grid: { borderColor: theme.gridBorderColor },
      labels: topCodes.labels ?? [],
      legend: { show: false },
      plotOptions: { bar: { columnWidth: "50%" } },
      series: [
        {
          name: "Usages",
          type: "line",
          data: aggregated
        }
      ],
      states: {
        hover: { filter: { type: "darken", value: 0.75 } }
      },
      stroke: { width: [3, 0] },
      tooltip: { followCursor: true, theme: theme.tooltipTheme },
      xaxis: {
        axisBorder: { show: false },
        axisTicks: { color: theme.gridBorderColor },
        labels: { style: { colors: theme.axisLabelColor } },
        tooltip: { enabled: false }
      },
      yaxis: {
        labels: {
          offsetX: -16,
          style: { colors: theme.axisLabelColor }
        }
      }
    };
  }
  /**
   * Install ApexCharts global mounted/updated hook to fix `url(#id)` references on
   * SVG fills that get broken when a `<base>` tag is present (renders gradients as
   * black). Ported from verifik-client-panel dashboard.
   */
  _installApexSvgFix() {
    const apexGlobal = window["Apex"] ?? {};
    window["Apex"] = __spreadProps(__spreadValues({}, apexGlobal), {
      chart: __spreadProps(__spreadValues({}, apexGlobal.chart ?? {}), {
        events: __spreadProps(__spreadValues({}, (apexGlobal.chart && apexGlobal.chart.events) ?? {}), {
          mounted: (chart) => this._fixSvgFill(chart.el),
          updated: (chart) => this._fixSvgFill(chart.el)
        })
      })
    });
  }
  _fixSvgFill(element) {
    if (!element)
      return;
    const currentURL = this._router.url;
    Array.from(element.querySelectorAll("*[fill]")).filter((el) => el.getAttribute("fill")?.indexOf("url(") !== -1).forEach((el) => {
      const attrVal = el.getAttribute("fill");
      el.setAttribute("fill", `url(${currentURL}${attrVal.slice(attrVal.indexOf("#"))}`);
    });
  }
  _handleOpenNotificationsQueryParam() {
    const openNotifications = this._route.snapshot.queryParamMap.get("openNotifications");
    if (openNotifications !== "1")
      return;
    this._appNotificationsService.requestOpenBell();
    void this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { openNotifications: null },
      queryParamsHandling: "merge",
      replaceUrl: true
    });
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 28, vars: 20, consts: [[1, "home-container"], [1, "home-welcome", "mb-8"], ["aria-labelledby", "company-verification-heading", 1, "company-verification-card", "mb-8"], [1, "promo-banner", "promo-banner-amber", "mb-8", "px-5", "py-6", "md:px-8"], ["aria-labelledby", "week-one-promo-heading", 1, "home-promo-card", "mb-8"], [1, "dashboard-shell"], [1, "dashboard-rail"], [1, "dashboard-main"], [1, "mb-8"], [1, "text-lg", "font-semibold", "text-slate-800", "dark:text-slate-200", "mb-4"], [1, "sign-in-card", "p-6", "text-center"], [1, "dashboard-charts", "mb-8"], [1, "dashboard-wide"], [1, "shortcuts-section"], [1, "shortcuts-grid"], [1, "text-2xl", "font-bold", "text-slate-900", "dark:text-white", "mb-2"], [1, "text-slate-600", "dark:text-slate-400", "text-sm", "max-w-2xl"], [1, "company-verification-stepper"], [1, "company-verification-step"], [1, "company-verification-step__meta"], ["aria-hidden", "true", 1, "company-verification-step__index"], [1, "company-verification-step__label"], [1, "company-verification-body"], [1, "company-verification-copy"], ["id", "company-verification-heading", 1, "company-verification-title"], [1, "company-verification-text"], ["mat-flat-button", "", "type", "button", 1, "company-verification-cta", 3, "click", "disabled"], ["diameter", "18", 1, "mr-2", "inline-block", "align-middle"], ["aria-hidden", "true", 1, "company-verification-art"], ["viewBox", "0 0 220 160", "fill", "none", 1, "company-verification-art__svg"], ["x", "36", "y", "58", "width", "148", "height", "78", "rx", "10", "transform", "rotate(-8 110 97)", 1, "company-verification-art__slab"], ["x", "44", "y", "50", "width", "132", "height", "70", "rx", "8", "transform", "rotate(-8 110 85)", 1, "company-verification-art__slab-face"], ["cx", "148", "cy", "48", "r", "22", 1, "company-verification-art__badge"], ["d", "M138 48.5l6.2 6.2L158.5 40", "stroke-width", "3.2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "company-verification-art__check"], [1, "flex", "flex-col", "gap-6", "sm:flex-row", "sm:items-start", "sm:justify-between"], [1, "flex", "min-w-0", "flex-1", "items-start", "gap-4"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-xl", "bg-amber-600/15", "text-amber-800", "dark:bg-amber-400/15", "dark:text-amber-300"], [2, "transform", "scale(1.08)"], [1, "min-w-0", "space-y-2"], [1, "inline-flex", "rounded-full", "border", "border-amber-200/90", "bg-amber-100", "px-3", "py-1", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.2em]", "text-amber-950", "dark:border-amber-800", "dark:bg-amber-900/50", "dark:text-amber-200"], [1, "text-lg", "font-semibold", "leading-snug", "text-amber-950", "dark:text-amber-50"], [1, "max-w-3xl", "text-sm", "leading-relaxed", "text-amber-950/95", "dark:text-amber-100/95"], [1, "text-sm", "font-semibold", "text-amber-950", "dark:text-amber-50"], [1, "flex", "shrink-0", "flex-col", "gap-2", "sm:pt-1"], ["mat-flat-button", "", "color", "primary", "routerLink", "/add-credits", 1, "rounded-xl"], [1, "mr-2"], ["mat-stroked-button", "", "routerLink", "/subscription-plans", 1, "rounded-xl"], [1, "home-promo-card__body"], [1, "home-promo-card__copy"], [1, "home-promo-card__badge"], ["id", "week-one-promo-heading", 1, "home-promo-card__title"], [1, "home-promo-card__text"], [1, "home-promo-card__note"], [1, "home-promo-card__deadline"], ["mat-flat-button", "", "routerLink", "/add-credits", 1, "home-promo-card__cta"], ["aria-hidden", "true", 1, "home-promo-card__art"], ["viewBox", "0 0 220 160", "fill", "none", 1, "home-promo-card__svg"], ["x", "36", "y", "58", "width", "148", "height", "78", "rx", "10", "transform", "rotate(-8 110 97)", 1, "home-promo-card__slab"], ["x", "44", "y", "50", "width", "132", "height", "70", "rx", "8", "transform", "rotate(-8 110 85)", 1, "home-promo-card__slab-face"], ["cx", "148", "cy", "48", "r", "22", 1, "home-promo-card__badge-circle"], ["x", "148", "y", "53", "text-anchor", "middle", 1, "home-promo-card__badge-text"], [3, "openExplanation", "startKyc", "onboarding", "verifyingTaskId", "verificationError", "taskLink"], [1, "flex", "items-center", "gap-2", "py-8"], [1, "stat-strip"], ["diameter", "24"], [1, "text-slate-500", "text-sm"], [1, "stat-strip-item"], [1, "stat-value"], [1, "stat-label"], [3, "services"], [1, "usage-globe-placeholder"], [1, "text-slate-600", "dark:text-slate-400", "text-sm", "mb-4"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "charts-grid", "charts-grid-3"], [1, "chart-card", "chart-card-sparkline"], [1, "chart-card-label"], [1, "chart-card-value"], [1, "chart-card-unit"], [1, "chart-card-spark"], [1, "w-full", "h-full", "block", 3, "chart", "colors", "series", "stroke", "tooltip", "xaxis", "yaxis"], [1, "chart-card"], [1, "charts-grid", "charts-grid-2", "mt-6"], [1, "chart-card-header"], [1, "chart-card-title"], [1, "performers-list"], [1, "text-sm", "text-slate-500", "dark:text-slate-400"], [1, "chart-card-tall"], [1, "w-full", "h-full", "block", 3, "chart", "colors", "dataLabels", "grid", "labels", "legend", "plotOptions", "series", "states", "stroke", "tooltip", "xaxis", "yaxis"], [1, "chart-card", "mt-6"], [1, "chart-card-pill"], [1, "kpi-row"], [1, "kpi-item"], [1, "kpi-label"], [1, "kpi-value"], [1, "kpi-pct", "kpi-pct-positive"], [1, "kpi-pct", "kpi-pct-negative"], [1, "w-full", "h-full", "block", 3, "chart", "colors", "dataLabels", "grid", "legend", "series", "stroke", "tooltip", "xaxis", "yaxis"], [1, "performer-row", 3, "performer-row-top"], [1, "performer-row"], [1, "performer-rank"], [1, "performer-info"], [1, "performer-name"], [1, "performer-bar-track"], [1, "performer-bar-fill"], [1, "performer-stats"], [1, "performer-count"], [1, "api-failed-badge"], [1, "w-full", "h-full", "block", 3, "chart", "colors", "dataLabels", "markers", "plotOptions", "series", "stroke", "tooltip", "xaxis", "yaxis"], [1, "shortcut-card", 3, "routerLink"], ["type", "button", 1, "shortcut-card", 3, "shortcut-card--support"], [1, "shortcut-icon"], [1, "shortcut-title"], [1, "shortcut-subtitle"], ["type", "button", 1, "shortcut-card", 3, "click"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, HomeComponent_Conditional_2_Template, 7, 11)(3, HomeComponent_Conditional_3_Template, 6, 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, HomeComponent_Conditional_4_Template, 1, 0, "app-home-notification-banners")(5, HomeComponent_Conditional_5_Template, 41, 25, "section", 2)(6, HomeComponent_Conditional_6_Template, 31, 25, "section", 3)(7, HomeComponent_Conditional_7_Template, 29, 24, "section", 4)(8, HomeComponent_Conditional_8_Template, 1, 0, "app-home-get-started");
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275template(10, HomeComponent_Conditional_10_Template, 2, 4, "aside", 6);
        \u0275\u0275elementStart(11, "div", 7)(12, "section", 8)(13, "h2", 9);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, HomeComponent_Conditional_16_Template, 6, 1)(17, HomeComponent_Conditional_17_Template, 7, 6, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, HomeComponent_Conditional_18_Template, 35, 24, "section", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 12);
        \u0275\u0275template(20, HomeComponent_Conditional_20_Template, 18, 10, "section", 11);
        \u0275\u0275elementStart(21, "section", 13)(22, "h2", 9);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 14);
        \u0275\u0275repeaterCreate(26, HomeComponent_For_27_Template, 2, 1, null, null, _forTrack03);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_11_0;
        let tmp_12_0;
        \u0275\u0275classProp("home-container--signed-in", ctx.isAuthenticated());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isAuthenticated() ? 2 : 3);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isAuthenticated() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showCompanyVerificationCard() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isAuthenticated() && ctx.showBringBackPromoBanner() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isAuthenticated() && ctx.showWeekOneUsd50PromoBanner() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isAuthenticated() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("dashboard-shell--no-rail", !ctx.isAuthenticated() || !ctx.onboarding());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isAuthenticated() && ctx.onboarding() ? 10 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 16, "home.stats.title"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isAuthenticated() ? 16 : 17);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_11_0 = ctx.isAuthenticated() && !ctx.loading() && ctx.dashboardData()) ? 18 : -1, tmp_11_0);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_12_0 = ctx.isAuthenticated() && !ctx.loading() && ctx.dashboardData()) ? 20 : -1, tmp_12_0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 18, "home.shortcuts.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.shortcuts);
      }
    }, dependencies: [
      CommonModule,
      DecimalPipe,
      DatePipe,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      NgApexchartsModule,
      ChartComponent,
      RouterLink,
      TranslocoModule,
      TranslocoPipe,
      HomeNotificationBannersComponent,
      HomeGetStartedComponent,
      OnboardingQuestsComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  position: relative;\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(37, 99, 235, 0.09),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(14, 165, 233, 0.07),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n.dark[_nghost-%COMP%], .dark   [_nghost-%COMP%] {\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(56, 189, 248, 0.08),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.home-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n}\n.home-container--signed-in[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.home-container--signed-in[_ngcontent-%COMP%]    > .home-welcome[_ngcontent-%COMP%] {\n  order: 0;\n}\n.home-container--signed-in[_ngcontent-%COMP%]    > app-home-notification-banners[_ngcontent-%COMP%] {\n  order: 1;\n}\n.home-container--signed-in[_ngcontent-%COMP%]    > .dashboard-shell[_ngcontent-%COMP%] {\n  order: 2;\n}\n.home-container--signed-in[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.home-welcome):not(app-home-notification-banners):not(.dashboard-shell) {\n  order: 3;\n}\n.dashboard-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  align-items: start;\n  gap: 1.5rem;\n}\n@media (min-width: 1024px) {\n  .dashboard-shell[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) 340px;\n  }\n}\n@media (min-width: 1024px) {\n  .dashboard-shell--no-rail[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n.dashboard-main[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n@media (min-width: 1024px) {\n  .dashboard-main[_ngcontent-%COMP%] {\n    grid-area: 1/1;\n  }\n}\n.dashboard-wide[_ngcontent-%COMP%] {\n  min-width: 0;\n  grid-column: 1/-1;\n}\n.dashboard-rail[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin-bottom: 0.5rem;\n}\n@media (min-width: 1024px) {\n  .dashboard-rail[_ngcontent-%COMP%] {\n    grid-area: 1/2;\n    position: sticky;\n    top: 1.5rem;\n    max-height: calc(100vh - 3rem);\n    overflow-y: auto;\n    overscroll-behavior: contain;\n    scrollbar-width: thin;\n    margin-bottom: 0;\n  }\n}\n.promo-banner[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  border-left-width: 4px;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n.dark[_nghost-%COMP%]   .promo-banner[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .promo-banner[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.promo-banner-amber[_ngcontent-%COMP%] {\n  border-left-color: rgb(217, 119, 6);\n  background: rgb(255, 251, 235);\n}\n.dark[_nghost-%COMP%]   .promo-banner-amber[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .promo-banner-amber[_ngcontent-%COMP%] {\n  border-left-color: rgb(245, 158, 11);\n  background: rgba(120, 53, 15, 0.35);\n}\n.promo-banner-emerald[_ngcontent-%COMP%] {\n  border-left-color: rgb(5, 150, 105);\n  background: rgb(236, 253, 245);\n}\n.dark[_nghost-%COMP%]   .promo-banner-emerald[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .promo-banner-emerald[_ngcontent-%COMP%] {\n  border-left-color: rgb(52, 211, 153);\n  background: rgba(6, 78, 59, 0.4);\n}\n.home-promo-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(241, 245, 249);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  padding: 1.5rem 1.5rem 1.75rem;\n}\n.dark[_nghost-%COMP%]   .home-promo-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-promo-card[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.home-promo-card__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n@media (min-width: 768px) {\n  .home-promo-card__body[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.home-promo-card__copy[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1 1 0;\n}\n.home-promo-card__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin: 0 0 0.75rem;\n  padding: 0.25rem 0.7rem;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  background: rgb(255, 255, 255);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .home-promo-card__badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-promo-card__badge[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.45);\n  border-color: rgba(148, 163, 184, 0.28);\n  color: rgb(226, 232, 240);\n}\n.home-promo-card__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1.25;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .home-promo-card__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-promo-card__title[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.home-promo-card__text[_ngcontent-%COMP%], \n.home-promo-card__note[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  max-width: 40rem;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: rgb(71, 85, 105);\n}\n.dark[_nghost-%COMP%]   .home-promo-card__text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-promo-card__text[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .home-promo-card__note[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-promo-card__note[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.home-promo-card__note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.home-promo-card__deadline[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .home-promo-card__deadline[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-promo-card__deadline[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.home-promo-card__cta[_ngcontent-%COMP%] {\n  border-radius: 0.75rem !important;\n  background: rgb(15, 23, 42) !important;\n  color: rgb(255, 255, 255) !important;\n  font-weight: 600 !important;\n  height: 2.75rem !important;\n  padding: 0 1.25rem !important;\n}\n.dark[_nghost-%COMP%]   .home-promo-card__cta[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-promo-card__cta[_ngcontent-%COMP%] {\n  background: rgb(226, 232, 240) !important;\n  color: rgb(15, 23, 42) !important;\n}\n.home-promo-card__art[_ngcontent-%COMP%] {\n  display: none;\n  flex: 0 0 220px;\n  width: 220px;\n}\n@media (min-width: 768px) {\n  .home-promo-card__art[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.home-promo-card__svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.home-promo-card__slab[_ngcontent-%COMP%] {\n  fill: rgba(59, 130, 246, 0.16);\n}\n.home-promo-card__slab-face[_ngcontent-%COMP%] {\n  fill: rgb(255, 255, 255);\n  stroke: rgba(148, 163, 184, 0.45);\n}\n.home-promo-card__badge-circle[_ngcontent-%COMP%] {\n  fill: rgb(37, 99, 235);\n}\n.home-promo-card__badge-text[_ngcontent-%COMP%] {\n  fill: rgb(255, 255, 255);\n  font-size: 14px;\n  font-weight: 800;\n}\n.dark[_nghost-%COMP%]   .home-promo-card__slab[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-promo-card__slab[_ngcontent-%COMP%] {\n  fill: rgba(96, 165, 250, 0.22);\n}\n.dark[_nghost-%COMP%]   .home-promo-card__slab-face[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-promo-card__slab-face[_ngcontent-%COMP%] {\n  fill: rgb(51, 65, 85);\n  stroke: rgba(148, 163, 184, 0.35);\n}\n.dark[_nghost-%COMP%]   .home-promo-card__badge-circle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .home-promo-card__badge-circle[_ngcontent-%COMP%] {\n  fill: rgb(96, 165, 250);\n}\n.company-verification-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(241, 245, 249);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  padding: 1.5rem 1.5rem 1.75rem;\n}\n.dark[_nghost-%COMP%]   .company-verification-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .company-verification-card[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.company-verification-stepper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin: 0 0 1.75rem;\n  padding: 0;\n  list-style: none;\n}\n.company-verification-step__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  min-width: 0;\n}\n.company-verification-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-width: 0;\n  color: rgb(100, 116, 139);\n}\n.dark[_nghost-%COMP%]   .company-verification-step[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .company-verification-step[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.company-verification-step[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  height: 3px;\n  border-radius: 999px;\n  background: rgba(148, 163, 184, 0.28);\n}\n.company-verification-step--active[_ngcontent-%COMP%], \n.company-verification-step--complete[_ngcontent-%COMP%] {\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .company-verification-step--active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .company-verification-step--active[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .company-verification-step--complete[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .company-verification-step--complete[_ngcontent-%COMP%] {\n  color: rgb(241, 245, 249);\n}\n.company-verification-step--active[_ngcontent-%COMP%]::after, \n.company-verification-step--complete[_ngcontent-%COMP%]::after {\n  background: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .company-verification-step--active[_ngcontent-%COMP%]::after, .dark   [_nghost-%COMP%]   .company-verification-step--active[_ngcontent-%COMP%]::after, \n.dark[_nghost-%COMP%]   .company-verification-step--complete[_ngcontent-%COMP%]::after, .dark   [_nghost-%COMP%]   .company-verification-step--complete[_ngcontent-%COMP%]::after {\n  background: rgb(203, 213, 225);\n}\n.company-verification-step__index[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 999px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  background: rgba(148, 163, 184, 0.2);\n}\n.company-verification-step--active[_ngcontent-%COMP%]   .company-verification-step__index[_ngcontent-%COMP%], \n.company-verification-step--complete[_ngcontent-%COMP%]   .company-verification-step__index[_ngcontent-%COMP%] {\n  background: rgb(15, 23, 42);\n  color: rgb(255, 255, 255);\n}\n.dark[_nghost-%COMP%]   .company-verification-step--active[_ngcontent-%COMP%]   .company-verification-step__index[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .company-verification-step--active[_ngcontent-%COMP%]   .company-verification-step__index[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .company-verification-step--complete[_ngcontent-%COMP%]   .company-verification-step__index[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .company-verification-step--complete[_ngcontent-%COMP%]   .company-verification-step__index[_ngcontent-%COMP%] {\n  background: rgb(226, 232, 240);\n  color: rgb(15, 23, 42);\n}\n.company-verification-step__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1.3;\n}\n.company-verification-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n@media (min-width: 768px) {\n  .company-verification-body[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.company-verification-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1 1 0;\n}\n.company-verification-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1.25;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .company-verification-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .company-verification-title[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.company-verification-text[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  max-width: 40rem;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: rgb(71, 85, 105);\n}\n.dark[_nghost-%COMP%]   .company-verification-text[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .company-verification-text[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.company-verification-cta[_ngcontent-%COMP%] {\n  border-radius: 0.75rem !important;\n  background: rgb(15, 23, 42) !important;\n  color: rgb(255, 255, 255) !important;\n  font-weight: 600 !important;\n  height: 2.75rem !important;\n  padding: 0 1.25rem !important;\n}\n.company-verification-cta[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n}\n.dark[_nghost-%COMP%]   .company-verification-cta[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .company-verification-cta[_ngcontent-%COMP%] {\n  background: rgb(226, 232, 240) !important;\n  color: rgb(15, 23, 42) !important;\n}\n.company-verification-art[_ngcontent-%COMP%] {\n  display: none;\n  flex: 0 0 220px;\n  width: 220px;\n}\n@media (min-width: 768px) {\n  .company-verification-art[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.company-verification-art__svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.company-verification-art__slab[_ngcontent-%COMP%] {\n  fill: rgba(59, 130, 246, 0.16);\n}\n.company-verification-art__slab-face[_ngcontent-%COMP%] {\n  fill: rgb(255, 255, 255);\n  stroke: rgba(148, 163, 184, 0.45);\n}\n.company-verification-art__badge[_ngcontent-%COMP%] {\n  fill: rgb(37, 99, 235);\n}\n.company-verification-art__check[_ngcontent-%COMP%] {\n  stroke: rgb(255, 255, 255);\n  fill: none;\n}\n.dark[_nghost-%COMP%]   .company-verification-art__slab[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .company-verification-art__slab[_ngcontent-%COMP%] {\n  fill: rgba(96, 165, 250, 0.22);\n}\n.dark[_nghost-%COMP%]   .company-verification-art__slab-face[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .company-verification-art__slab-face[_ngcontent-%COMP%] {\n  fill: rgb(51, 65, 85);\n  stroke: rgba(148, 163, 184, 0.35);\n}\n.dark[_nghost-%COMP%]   .company-verification-art__badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .company-verification-art__badge[_ngcontent-%COMP%] {\n  fill: rgb(96, 165, 250);\n}\n.stat-strip[_ngcontent-%COMP%] {\n  container-type: inline-size;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 2rem;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n.dark[_nghost-%COMP%]   .stat-strip[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .stat-strip[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.stat-strip-item[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  padding: 1.5rem 1.25rem;\n  min-width: 0;\n}\n.stat-strip-item[_ngcontent-%COMP%]:not(:first-child) {\n  border-left: 1px solid rgba(148, 163, 184, 0.2);\n}\n.dark[_nghost-%COMP%]   .stat-strip-item[_ngcontent-%COMP%]:not(:first-child), .dark   [_nghost-%COMP%]   .stat-strip-item[_ngcontent-%COMP%]:not(:first-child) {\n  border-left-color: rgba(148, 163, 184, 0.18);\n}\n@container (max-width: 820px) {\n  .stat-strip-item[_ngcontent-%COMP%] {\n    flex: 1 1 50%;\n  }\n  .stat-strip-item[_ngcontent-%COMP%]:not(:first-child) {\n    border-left: none;\n  }\n  .stat-strip-item[_ngcontent-%COMP%]:nth-child(2n) {\n    border-left: 1px solid rgba(148, 163, 184, 0.2);\n  }\n  .stat-strip-item[_ngcontent-%COMP%]:nth-child(n+3) {\n    border-top: 1px solid rgba(148, 163, 184, 0.2);\n  }\n  .dark[_nghost-%COMP%]   .stat-strip-item[_ngcontent-%COMP%]:nth-child(2n), .dark   [_nghost-%COMP%]   .stat-strip-item[_ngcontent-%COMP%]:nth-child(2n) {\n    border-left-color: rgba(148, 163, 184, 0.18);\n  }\n  .dark[_nghost-%COMP%]   .stat-strip-item[_ngcontent-%COMP%]:nth-child(n+3), .dark   [_nghost-%COMP%]   .stat-strip-item[_ngcontent-%COMP%]:nth-child(n+3) {\n    border-top-color: rgba(148, 163, 184, 0.18);\n  }\n}\n@container (max-width: 420px) {\n  .stat-strip-item[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  .stat-strip-item[_ngcontent-%COMP%]:nth-child(2n) {\n    border-left: none;\n  }\n  .stat-strip-item[_ngcontent-%COMP%]:nth-child(n+2) {\n    border-top: 1px solid rgba(148, 163, 184, 0.2);\n  }\n  .dark[_nghost-%COMP%]   .stat-strip-item[_ngcontent-%COMP%]:nth-child(n+2), .dark   [_nghost-%COMP%]   .stat-strip-item[_ngcontent-%COMP%]:nth-child(n+2) {\n    border-top-color: rgba(148, 163, 184, 0.18);\n  }\n}\n.sign-in-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n.dark[_nghost-%COMP%]   .sign-in-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sign-in-card[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.usage-globe-placeholder[_ngcontent-%COMP%] {\n  min-height: 420px;\n  margin-bottom: 2rem;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: clamp(1.5rem, 5cqi, 2rem);\n  font-weight: 700;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgb(100, 116, 139);\n  margin-top: 0.35rem;\n}\n.dark[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.shortcuts-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.shortcuts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 0.75rem;\n}\n.shortcut-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n  padding: 1rem 1.1rem;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(255, 255, 255);\n  text-decoration: none;\n  color: inherit;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n  width: 100%;\n  text-align: left;\n  font: inherit;\n  cursor: pointer;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);\n}\n.shortcut-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(37, 99, 235, 0.45);\n  background: rgb(255, 255, 255);\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);\n}\n.dark[_nghost-%COMP%]   .shortcut-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .shortcut-card[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n}\n.dark[_nghost-%COMP%]   .shortcut-card[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .shortcut-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.45);\n  background: rgb(30, 41, 59);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n.shortcut-card--support[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.22);\n  background: rgb(255, 255, 255);\n}\n.shortcut-card--support[_ngcontent-%COMP%]:hover {\n  border-color: rgba(37, 99, 235, 0.45);\n  background: rgb(255, 255, 255);\n}\n.dark[_nghost-%COMP%]   .shortcut-card--support[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .shortcut-card--support[_ngcontent-%COMP%] {\n  border-color: rgba(148, 163, 184, 0.18);\n  background: rgb(30, 41, 59);\n}\n.dark[_nghost-%COMP%]   .shortcut-card--support[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .shortcut-card--support[_ngcontent-%COMP%]:hover {\n  border-color: rgba(96, 165, 250, 0.45);\n  background: rgb(30, 41, 59);\n}\n.shortcut-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 9999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: rgba(148, 163, 184, 0.12);\n  color: rgb(71, 85, 105);\n}\n.dark[_nghost-%COMP%]   .shortcut-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .shortcut-icon[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.14);\n  color: rgb(203, 213, 225);\n}\n.shortcut-icon--support[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.12);\n  color: rgb(71, 85, 105);\n}\n.dark[_nghost-%COMP%]   .shortcut-icon--support[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .shortcut-icon--support[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.14);\n  color: rgb(203, 213, 225);\n}\n.shortcut-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  margin-bottom: 0.2rem;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .shortcut-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .shortcut-title[_ngcontent-%COMP%] {\n  color: rgb(241, 245, 249);\n}\n.shortcut-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgb(100, 116, 139);\n}\n.dark[_nghost-%COMP%]   .shortcut-subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .shortcut-subtitle[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.tutorial-section[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n.dark[_nghost-%COMP%]   .tutorial-section[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .tutorial-section[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.top-apis-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.875rem 1.25rem;\n  border-radius: 12px;\n  background: transparent;\n  border: 1px solid rgba(148, 163, 184, 0.15);\n  transition: border-color 0.15s ease;\n}\n.top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border-color: rgba(148, 163, 184, 0.4);\n  transform: none;\n}\n.dark[_nghost-%COMP%]   .top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgba(148, 163, 184, 0.12);\n}\n.dark[_nghost-%COMP%]   .top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .top-apis-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border-color: rgba(148, 163, 184, 0.35);\n}\n.api-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.api-count-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: rgba(148, 163, 184, 0.12);\n  color: rgb(71, 85, 105);\n}\n.dark[_nghost-%COMP%]   .api-count-badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .api-count-badge[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.18);\n  color: rgb(203, 213, 225);\n}\n.api-failed-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: rgba(239, 68, 68, 0.1);\n  color: rgb(185, 28, 28);\n}\n.dark[_nghost-%COMP%]   .api-failed-badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .api-failed-badge[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.18);\n  color: rgb(252, 165, 165);\n}\n.dashboard-charts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.charts-grid-3[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}\n.charts-grid-2[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n.chart-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n.dark[_nghost-%COMP%]   .chart-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chart-card[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.chart-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.chart-card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .chart-card-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chart-card-title[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.chart-card-pill[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  background: rgba(148, 163, 184, 0.12);\n  color: rgb(71, 85, 105);\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.dark[_nghost-%COMP%]   .chart-card-pill[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chart-card-pill[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.18);\n  color: rgb(203, 213, 225);\n}\n.chart-card-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n.dark[_nghost-%COMP%]   .chart-card-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chart-card-label[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.chart-card-value[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: rgb(15, 23, 42);\n  line-height: 1.1;\n}\n.dark[_nghost-%COMP%]   .chart-card-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chart-card-value[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.chart-card-unit[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n.dark[_nghost-%COMP%]   .chart-card-unit[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chart-card-unit[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.chart-card-spark[_ngcontent-%COMP%] {\n  height: 64px;\n  margin-top: 1rem;\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.chart-card-tall[_ngcontent-%COMP%] {\n  position: relative;\n  height: 320px;\n  width: 100%;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.15);\n}\n.dark[_nghost-%COMP%]   .kpi-row[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .kpi-row[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(148, 163, 184, 0.12);\n}\n.kpi-item[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n.dark[_nghost-%COMP%]   .kpi-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.kpi-value[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: rgb(15, 23, 42);\n  line-height: 1.1;\n}\n.dark[_nghost-%COMP%]   .kpi-value[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.kpi-pct[_ngcontent-%COMP%] {\n  padding: 0.15rem 0.6rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.kpi-pct-positive[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: rgb(21, 128, 61);\n}\n.dark[_nghost-%COMP%]   .kpi-pct-positive[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .kpi-pct-positive[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.2);\n  color: rgb(134, 239, 172);\n}\n.kpi-pct-negative[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: rgb(185, 28, 28);\n}\n.dark[_nghost-%COMP%]   .kpi-pct-negative[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .kpi-pct-negative[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.2);\n  color: rgb(252, 165, 165);\n}\n.performers-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.performer-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.5rem 0;\n  border-radius: 0;\n  transition: none;\n}\n.performer-row[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n.performer-row-top[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n}\n.performer-rank[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: transparent;\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  color: rgb(71, 85, 105);\n}\n.performer-row-top[_ngcontent-%COMP%]   .performer-rank[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgb(99, 102, 241);\n  color: rgb(79, 70, 229);\n}\n.dark[_nghost-%COMP%]   .performer-rank[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .performer-rank[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgba(148, 163, 184, 0.3);\n  color: rgb(203, 213, 225);\n}\n.dark[_nghost-%COMP%]   .performer-row-top[_ngcontent-%COMP%]   .performer-rank[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .performer-row-top[_ngcontent-%COMP%]   .performer-rank[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgb(129, 140, 248);\n  color: rgb(165, 180, 252);\n}\n.performer-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.performer-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: rgb(30, 41, 59);\n  margin-bottom: 0.375rem;\n  overflow-wrap: anywhere;\n}\n.dark[_nghost-%COMP%]   .performer-name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .performer-name[_ngcontent-%COMP%] {\n  color: rgb(226, 232, 240);\n}\n.performer-bar-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  border-radius: 9999px;\n  background: rgba(148, 163, 184, 0.15);\n  overflow: hidden;\n}\n.dark[_nghost-%COMP%]   .performer-bar-track[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .performer-bar-track[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.18);\n}\n.performer-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 9999px;\n  background: rgb(99, 102, 241);\n  transition: width 0.5s ease;\n}\n.performer-stats[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.25rem;\n}\n.performer-count[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: rgb(15, 23, 42);\n}\n.dark[_nghost-%COMP%]   .performer-count[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .performer-count[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      NgApexchartsModule,
      RouterLink,
      TranslocoModule,
      HomeNotificationBannersComponent,
      HomeGetStartedComponent,
      OnboardingQuestsComponent,
      UsageGlobeComponent
    ], template: `<div class="home-container" [class.home-container--signed-in]="isAuthenticated()">\r
    <!-- Welcome / Hero -->\r
    <div class="home-welcome mb-8">\r
        @if (isAuthenticated()) {\r
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">\r
                {{\r
                    'home.welcome.greeting'\r
                        | transloco\r
                            : { name: userFirstName() || ('home.welcome.fallbackName' | transloco) }\r
                }}\r
            </h1>\r
            <p class="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">\r
                {{ 'home.welcome.greetingSubtitle' | transloco }}\r
            </p>\r
        } @else {\r
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">\r
                {{ 'home.welcome.title' | transloco }}\r
            </h1>\r
            <p class="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">\r
                {{ 'home.welcome.subtitle' | transloco }}\r
            </p>\r
        }\r
    </div>\r
\r
    @if (isAuthenticated()) {\r
        <app-home-notification-banners></app-home-notification-banners>\r
    }\r
\r
    @if (showCompanyVerificationCard()) {\r
        <section\r
            class="company-verification-card mb-8"\r
            aria-labelledby="company-verification-heading"\r
        >\r
            <ol class="company-verification-stepper" [attr.data-step]="companyVerificationStep()">\r
                <li\r
                    class="company-verification-step"\r
                    [class.company-verification-step--active]="companyVerificationStep() === 1"\r
                    [class.company-verification-step--complete]="companyVerificationStep() > 1"\r
                >\r
                    <span class="company-verification-step__meta">\r
                        <span class="company-verification-step__index" aria-hidden="true">1</span>\r
                        <span class="company-verification-step__label">\r
                            {{ 'home.companyVerification.step1' | transloco }}\r
                        </span>\r
                    </span>\r
                </li>\r
                <li\r
                    class="company-verification-step"\r
                    [class.company-verification-step--active]="companyVerificationStep() === 2"\r
                    [class.company-verification-step--complete]="companyVerificationStep() > 2"\r
                >\r
                    <span class="company-verification-step__meta">\r
                        <span class="company-verification-step__index" aria-hidden="true">2</span>\r
                        <span class="company-verification-step__label">\r
                            {{ 'home.companyVerification.step2' | transloco }}\r
                        </span>\r
                    </span>\r
                </li>\r
                <li class="company-verification-step">\r
                    <span class="company-verification-step__meta">\r
                        <span class="company-verification-step__index" aria-hidden="true">3</span>\r
                        <span class="company-verification-step__label">\r
                            {{ 'home.companyVerification.step3' | transloco }}\r
                        </span>\r
                    </span>\r
                </li>\r
            </ol>\r
\r
            <div class="company-verification-body">\r
                <div class="company-verification-copy">\r
                    <h2 id="company-verification-heading" class="company-verification-title">\r
                        @if (companyVerificationPending()) {\r
                            {{\r
                                'home.companyVerification.pendingTitle'\r
                                    | transloco\r
                                        : { amount: welcomeCreditsAmount() | number: '1.0-2' }\r
                            }}\r
                        } @else {\r
                            {{\r
                                'home.companyVerification.title'\r
                                    | transloco\r
                                        : { amount: welcomeCreditsAmount() | number: '1.0-2' }\r
                            }}\r
                        }\r
                    </h2>\r
                    <p class="company-verification-text">\r
                        @if (companyVerificationPending()) {\r
                            {{\r
                                'home.companyVerification.pendingBody'\r
                                    | transloco\r
                                        : { amount: welcomeCreditsAmount() | number: '1.0-2' }\r
                            }}\r
                        } @else {\r
                            {{\r
                                'home.companyVerification.body'\r
                                    | transloco\r
                                        : { amount: welcomeCreditsAmount() | number: '1.0-2' }\r
                            }}\r
                        }\r
                    </p>\r
                    <button\r
                        mat-flat-button\r
                        type="button"\r
                        class="company-verification-cta"\r
                        [disabled]="\r
                            accountEnv.verifyCompanyLoading() || companyVerificationPending()\r
                        "\r
                        (click)="startKycVerification()"\r
                    >\r
                        @if (accountEnv.verifyCompanyLoading()) {\r
                            <mat-spinner\r
                                diameter="18"\r
                                class="mr-2 inline-block align-middle"\r
                            ></mat-spinner>\r
                        }\r
                        {{ 'home.companyVerification.cta' | transloco }}\r
                    </button>\r
                </div>\r
\r
                <div class="company-verification-art" aria-hidden="true">\r
                    <svg class="company-verification-art__svg" viewBox="0 0 220 160" fill="none">\r
                        <rect\r
                            class="company-verification-art__slab"\r
                            x="36"\r
                            y="58"\r
                            width="148"\r
                            height="78"\r
                            rx="10"\r
                            transform="rotate(-8 110 97)"\r
                        />\r
                        <rect\r
                            class="company-verification-art__slab-face"\r
                            x="44"\r
                            y="50"\r
                            width="132"\r
                            height="70"\r
                            rx="8"\r
                            transform="rotate(-8 110 85)"\r
                        />\r
                        <circle class="company-verification-art__badge" cx="148" cy="48" r="22" />\r
                        <path\r
                            class="company-verification-art__check"\r
                            d="M138 48.5l6.2 6.2L158.5 40"\r
                            stroke-width="3.2"\r
                            stroke-linecap="round"\r
                            stroke-linejoin="round"\r
                        />\r
                    </svg>\r
                </div>\r
            </div>\r
        </section>\r
    }\r
\r
    @if (isAuthenticated() && showBringBackPromoBanner()) {\r
        <section class="promo-banner promo-banner-amber mb-8 px-5 py-6 md:px-8">\r
            <div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">\r
                <div class="flex min-w-0 flex-1 items-start gap-4">\r
                    <div\r
                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-600/15 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300"\r
                    >\r
                        <mat-icon style="transform: scale(1.08)">local_offer</mat-icon>\r
                    </div>\r
                    <div class="min-w-0 space-y-2">\r
                        <p\r
                            class="inline-flex rounded-full border border-amber-200/90 bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-950 dark:border-amber-800 dark:bg-amber-900/50 dark:text-amber-200"\r
                        >\r
                            {{ 'addCredits.promo.bringBack.badge' | transloco }}\r
                        </p>\r
                        <h2\r
                            class="text-lg font-semibold leading-snug text-amber-950 dark:text-amber-50"\r
                        >\r
                            {{\r
                                'addCredits.promo.bringBack.title'\r
                                    | transloco: { multiplier: bringBackOffer()?.multiplier || 2 }\r
                            }}\r
                        </h2>\r
                        <p\r
                            class="max-w-3xl text-sm leading-relaxed text-amber-950/95 dark:text-amber-100/95"\r
                        >\r
                            @if (bringBackOffer()?.tier === 'triple') {\r
                                {{\r
                                    'addCredits.promo.bringBack.bodyTriple'\r
                                        | transloco\r
                                            : { multiplier: bringBackOffer()?.multiplier || 3 }\r
                                }}\r
                            } @else {\r
                                {{\r
                                    'addCredits.promo.bringBack.body'\r
                                        | transloco\r
                                            : {\r
                                                  multiplier: bringBackOffer()?.multiplier || 2,\r
                                                  exampleReceived: bringBackExampleReceived(),\r
                                              }\r
                                }}\r
                            }\r
                        </p>\r
                        <p class="text-sm font-semibold text-amber-950 dark:text-amber-50">\r
                            {{\r
                                'addCredits.promo.bringBack.deadline'\r
                                    | transloco\r
                                        : {\r
                                              expiresAt:\r
                                                  (bringBackOffer()?.expiresAt | date: 'medium') ||\r
                                                  '',\r
                                          }\r
                            }}\r
                        </p>\r
                    </div>\r
                </div>\r
                <div class="flex shrink-0 flex-col gap-2 sm:pt-1">\r
                    <a mat-flat-button color="primary" routerLink="/add-credits" class="rounded-xl">\r
                        <mat-icon class="mr-2">payments</mat-icon>\r
                        {{ 'addCredits.promo.bringBack.ctaRecharge' | transloco }}\r
                    </a>\r
                    <a mat-stroked-button routerLink="/subscription-plans" class="rounded-xl">\r
                        <mat-icon class="mr-2">credit_card</mat-icon>\r
                        {{ 'addCredits.promo.bringBack.ctaSubscribe' | transloco }}\r
                    </a>\r
                </div>\r
            </div>\r
        </section>\r
    }\r
\r
    @if (isAuthenticated() && showWeekOneUsd50PromoBanner()) {\r
        <section class="home-promo-card mb-8" aria-labelledby="week-one-promo-heading">\r
            <div class="home-promo-card__body">\r
                <div class="home-promo-card__copy">\r
                    <p class="home-promo-card__badge">\r
                        {{ 'addCredits.promo.weekOneUsd50.badge' | transloco }}\r
                    </p>\r
                    <h2 id="week-one-promo-heading" class="home-promo-card__title">\r
                        {{ 'addCredits.promo.weekOneUsd50.title' | transloco }}\r
                    </h2>\r
                    <p class="home-promo-card__text">\r
                        {{ 'addCredits.promo.weekOneUsd50.body' | transloco }}\r
                    </p>\r
                    <p class="home-promo-card__note">\r
                        {{ 'addCredits.promo.weekOneUsd50.accountCreatedNotice' | transloco }}\r
                    </p>\r
                    <p class="home-promo-card__deadline">\r
                        {{\r
                            'addCredits.promo.weekOneUsd50.deadline'\r
                                | transloco\r
                                    : {\r
                                          expiresAt:\r
                                              (weekOneUsd50Promotion()?.expiresAt\r
                                                  | date: 'medium') || '',\r
                                      }\r
                        }}\r
                    </p>\r
                    <a mat-flat-button routerLink="/add-credits" class="home-promo-card__cta">\r
                        {{ 'addCredits.purchaseCredits' | transloco }}\r
                    </a>\r
                </div>\r
\r
                <div class="home-promo-card__art" aria-hidden="true">\r
                    <svg class="home-promo-card__svg" viewBox="0 0 220 160" fill="none">\r
                        <rect\r
                            class="home-promo-card__slab"\r
                            x="36"\r
                            y="58"\r
                            width="148"\r
                            height="78"\r
                            rx="10"\r
                            transform="rotate(-8 110 97)"\r
                        />\r
                        <rect\r
                            class="home-promo-card__slab-face"\r
                            x="44"\r
                            y="50"\r
                            width="132"\r
                            height="70"\r
                            rx="8"\r
                            transform="rotate(-8 110 85)"\r
                        />\r
                        <circle class="home-promo-card__badge-circle" cx="148" cy="48" r="22" />\r
                        <text\r
                            class="home-promo-card__badge-text"\r
                            x="148"\r
                            y="53"\r
                            text-anchor="middle"\r
                        >\r
                            2x\r
                        </text>\r
                    </svg>\r
                </div>\r
            </div>\r
        </section>\r
    }\r
\r
    @if (isAuthenticated()) {\r
        <app-home-get-started></app-home-get-started>\r
    }\r
\r
    <!--\r
        Dashboard shell: charts on the left, sticky gamified quest rail on the right.\r
        The rail is first in the DOM so it stacks above the charts on narrow screens.\r
    -->\r
    <div\r
        class="dashboard-shell"\r
        [class.dashboard-shell--no-rail]="!isAuthenticated() || !onboarding()"\r
    >\r
        @if (isAuthenticated() && onboarding()) {\r
            <aside class="dashboard-rail">\r
                <app-onboarding-quests\r
                    [onboarding]="onboarding()"\r
                    [verifyingTaskId]="verifyingTaskId()"\r
                    [verificationError]="verificationError()"\r
                    [taskLink]="getTaskLink"\r
                    (openExplanation)="openTaskExplanation($event.taskId, $event.status)"\r
                    (startKyc)="startKycVerification()"\r
                ></app-onboarding-quests>\r
            </aside>\r
        }\r
\r
        <div class="dashboard-main">\r
            <!-- Statistics Section -->\r
            <section class="mb-8">\r
                <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">\r
                    {{ 'home.stats.title' | transloco }}\r
                </h2>\r
\r
                @if (isAuthenticated()) {\r
                    @if (loading()) {\r
                        <div class="flex items-center gap-2 py-8">\r
                            <mat-spinner diameter="24"></mat-spinner>\r
                            <span class="text-slate-500 text-sm">{{\r
                                'home.stats.loading' | transloco\r
                            }}</span>\r
                        </div>\r
                    } @else {\r
                        @let totals = getTotals();\r
                        <div class="stat-strip">\r
                            <div class="stat-strip-item">\r
                                <div class="stat-value">{{ totals.total }}</div>\r
                                <div class="stat-label">\r
                                    {{ 'home.stats.totalValidations' | transloco }}\r
                                </div>\r
                            </div>\r
                            <div class="stat-strip-item">\r
                                <div class="stat-value">{{ totals.ok }}</div>\r
                                <div class="stat-label">\r
                                    {{ 'home.stats.successful' | transloco }}\r
                                </div>\r
                            </div>\r
                            <div class="stat-strip-item">\r
                                <div class="stat-value">{{ totals.failed }}</div>\r
                                <div class="stat-label">{{ 'home.stats.failed' | transloco }}</div>\r
                            </div>\r
                            <div class="stat-strip-item">\r
                                <div class="stat-value">{{ totals.credits | number: '1.0-3' }}</div>\r
                                <div class="stat-label">\r
                                    {{ 'home.stats.creditsUsed' | transloco }}\r
                                </div>\r
                            </div>\r
                        </div>\r
                    }\r
\r
                    @defer (on viewport) {\r
                        <app-usage-globe [services]="globeServices()"></app-usage-globe>\r
                    } @placeholder {\r
                        <div class="usage-globe-placeholder"></div>\r
                    }\r
                } @else {\r
                    <div class="sign-in-card p-6 text-center">\r
                        <p class="text-slate-600 dark:text-slate-400 text-sm mb-4">\r
                            {{ 'home.stats.signInPrompt' | transloco }}\r
                        </p>\r
                        <button mat-flat-button color="primary" (click)="openAuthModal()">\r
                            {{ 'home.stats.signIn' | transloco }}\r
                        </button>\r
                    </div>\r
                }\r
            </section>\r
\r
            <!-- Dashboard Charts Section (only when authenticated and data has loaded) -->\r
            @if (isAuthenticated() && !loading() && dashboardData(); as dashboard) {\r
                <section class="dashboard-charts mb-8">\r
                    <!-- Row 1: Expense Sparklines (weekly / monthly / yearly) -->\r
                    <div class="charts-grid charts-grid-3">\r
                        <div class="chart-card chart-card-sparkline">\r
                            <div class="chart-card-label">\r
                                {{ 'home.stats.weeklyExpenses' | transloco }}\r
                            </div>\r
                            <div class="chart-card-value">\r
                                {{ formatCredits(dashboard.weeklyExpenses?.amount) }}\r
                                <span class="chart-card-unit">{{\r
                                    'home.stats.creditsUnit' | transloco\r
                                }}</span>\r
                            </div>\r
                            <div class="chart-card-spark">\r
                                @if (chartWeeklyExpenses) {\r
                                    <apx-chart\r
                                        class="w-full h-full block"\r
                                        [chart]="chartWeeklyExpenses.chart!"\r
                                        [colors]="chartWeeklyExpenses.colors!"\r
                                        [series]="chartWeeklyExpenses.series!"\r
                                        [stroke]="chartWeeklyExpenses.stroke!"\r
                                        [tooltip]="chartWeeklyExpenses.tooltip!"\r
                                        [xaxis]="chartWeeklyExpenses.xaxis!"\r
                                        [yaxis]="chartWeeklyExpenses.yaxis!"\r
                                    ></apx-chart>\r
                                }\r
                            </div>\r
                        </div>\r
\r
                        <div class="chart-card chart-card-sparkline">\r
                            <div class="chart-card-label">\r
                                {{ 'home.stats.monthlyExpenses' | transloco }}\r
                            </div>\r
                            <div class="chart-card-value">\r
                                {{ formatCredits(dashboard.monthlyExpenses?.amount) }}\r
                                <span class="chart-card-unit">{{\r
                                    'home.stats.creditsUnit' | transloco\r
                                }}</span>\r
                            </div>\r
                            <div class="chart-card-spark">\r
                                @if (chartMonthlyExpenses) {\r
                                    <apx-chart\r
                                        class="w-full h-full block"\r
                                        [chart]="chartMonthlyExpenses.chart!"\r
                                        [colors]="chartMonthlyExpenses.colors!"\r
                                        [series]="chartMonthlyExpenses.series!"\r
                                        [stroke]="chartMonthlyExpenses.stroke!"\r
                                        [tooltip]="chartMonthlyExpenses.tooltip!"\r
                                        [xaxis]="chartMonthlyExpenses.xaxis!"\r
                                        [yaxis]="chartMonthlyExpenses.yaxis!"\r
                                    ></apx-chart>\r
                                }\r
                            </div>\r
                        </div>\r
\r
                        <div class="chart-card chart-card-sparkline">\r
                            <div class="chart-card-label">\r
                                {{ 'home.stats.yearlyExpenses' | transloco }}\r
                            </div>\r
                            <div class="chart-card-value">\r
                                {{ formatCredits(dashboard.yearlyExpenses?.amount) }}\r
                                <span class="chart-card-unit">{{\r
                                    'home.stats.creditsUnit' | transloco\r
                                }}</span>\r
                            </div>\r
                            <div class="chart-card-spark">\r
                                @if (chartYearlyExpenses) {\r
                                    <apx-chart\r
                                        class="w-full h-full block"\r
                                        [chart]="chartYearlyExpenses.chart!"\r
                                        [colors]="chartYearlyExpenses.colors!"\r
                                        [series]="chartYearlyExpenses.series!"\r
                                        [stroke]="chartYearlyExpenses.stroke!"\r
                                        [tooltip]="chartYearlyExpenses.tooltip!"\r
                                        [xaxis]="chartYearlyExpenses.xaxis!"\r
                                        [yaxis]="chartYearlyExpenses.yaxis!"\r
                                    ></apx-chart>\r
                                }\r
                            </div>\r
                        </div>\r
                    </div>\r
                </section>\r
            }\r
        </div>\r
        <!-- /dashboard-main -->\r
\r
        <!--\r
            Nothing sits beside the rail past its last row, so the tall charts,\r
            shortcuts and tutorial span both columns instead of staying narrow.\r
        -->\r
        <div class="dashboard-wide">\r
            @if (isAuthenticated() && !loading() && dashboardData(); as dashboard) {\r
                <section class="dashboard-charts mb-8">\r
                    <!-- Row 2: Last 30 days requests (KPIs + area chart) -->\r
                    @if (dashboard.lastMonthRequests; as last30) {\r
                        <div class="chart-card">\r
                            <div class="chart-card-header">\r
                                <h3 class="chart-card-title">\r
                                    {{ 'home.stats.last30Days' | transloco }}\r
                                </h3>\r
                                <span class="chart-card-pill"\r
                                    >30 {{ 'home.stats.days' | transloco }}</span\r
                                >\r
                            </div>\r
\r
                            @let okSum = sumSeries(last30.series?.[0]?.data);\r
                            @let notFoundSum = sumSeries(last30.series?.[1]?.data);\r
                            @let totalReq = last30.amount || okSum + notFoundSum;\r
                            <div class="kpi-row">\r
                                <div class="kpi-item">\r
                                    <div class="kpi-label">\r
                                        {{ 'home.stats.requestsTotal' | transloco }}\r
                                    </div>\r
                                    <div class="kpi-value">\r
                                        <span>{{ totalReq }}</span>\r
                                        <span class="kpi-pct kpi-pct-positive">100%</span>\r
                                    </div>\r
                                </div>\r
                                <div class="kpi-item">\r
                                    <div class="kpi-label">\r
                                        {{ 'home.stats.requestsSuccess' | transloco }}\r
                                    </div>\r
                                    <div class="kpi-value">\r
                                        <span>{{ okSum }}</span>\r
                                        <span class="kpi-pct kpi-pct-positive"\r
                                            >{{ percentOf(okSum, totalReq) }}%</span\r
                                        >\r
                                    </div>\r
                                </div>\r
                                <div class="kpi-item">\r
                                    <div class="kpi-label">\r
                                        {{ 'home.stats.requestsNotFound' | transloco }}\r
                                    </div>\r
                                    <div class="kpi-value">\r
                                        <span>{{ notFoundSum }}</span>\r
                                        <span class="kpi-pct kpi-pct-negative"\r
                                            >{{ percentOf(notFoundSum, totalReq) }}%</span\r
                                        >\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="chart-card-tall">\r
                                @if (chartLastMonth) {\r
                                    <apx-chart\r
                                        class="w-full h-full block"\r
                                        [chart]="chartLastMonth.chart!"\r
                                        [colors]="chartLastMonth.colors!"\r
                                        [dataLabels]="chartLastMonth.dataLabels!"\r
                                        [grid]="chartLastMonth.grid!"\r
                                        [legend]="chartLastMonth.legend!"\r
                                        [series]="chartLastMonth.series!"\r
                                        [stroke]="chartLastMonth.stroke!"\r
                                        [tooltip]="chartLastMonth.tooltip!"\r
                                        [xaxis]="chartLastMonth.xaxis!"\r
                                        [yaxis]="chartLastMonth.yaxis!"\r
                                    ></apx-chart>\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
\r
                    <!-- Row 3: Top endpoints podium + Weekly usage line -->\r
                    <div class="charts-grid charts-grid-2 mt-6">\r
                        <div class="chart-card">\r
                            <div class="chart-card-header">\r
                                <h3 class="chart-card-title">\r
                                    {{ 'home.stats.topEndpoints' | transloco }}\r
                                </h3>\r
                            </div>\r
\r
                            @if (podium().length > 0) {\r
                                @let maxCount = podium()[0]?.count || 1;\r
                                <div class="performers-list">\r
                                    @for (top of podium(); track top.code; let i = $index) {\r
                                        <div\r
                                            class="performer-row"\r
                                            [class.performer-row-top]="i === 0"\r
                                        >\r
                                            <div class="performer-rank">{{ i + 1 }}</div>\r
                                            <div class="performer-info">\r
                                                <div class="performer-name">\r
                                                    {{ top.displayName }}\r
                                                </div>\r
                                                <div class="performer-bar-track">\r
                                                    <div\r
                                                        class="performer-bar-fill"\r
                                                        [style.width.%]="\r
                                                            (top.count / maxCount) * 100\r
                                                        "\r
                                                    ></div>\r
                                                </div>\r
                                            </div>\r
                                            <div class="performer-stats">\r
                                                <span class="performer-count">{{ top.count }}</span>\r
                                                @if (top.failed > 0) {\r
                                                    <span class="api-failed-badge">\r
                                                        {{ top.failed }}\r
                                                        {{ 'home.stats.failed' | transloco }}\r
                                                    </span>\r
                                                }\r
                                            </div>\r
                                        </div>\r
                                    }\r
                                </div>\r
                            } @else {\r
                                <p class="text-sm text-slate-500 dark:text-slate-400">\r
                                    {{ 'home.stats.noData' | transloco }}\r
                                </p>\r
                            }\r
                        </div>\r
\r
                        <div class="chart-card">\r
                            <div class="chart-card-header">\r
                                <h3 class="chart-card-title">\r
                                    {{ 'home.stats.weeklyUsage' | transloco }}\r
                                </h3>\r
                            </div>\r
                            <div class="chart-card-tall">\r
                                @if (chartUsageLine) {\r
                                    <apx-chart\r
                                        class="w-full h-full block"\r
                                        [chart]="chartUsageLine.chart!"\r
                                        [colors]="chartUsageLine.colors!"\r
                                        [dataLabels]="chartUsageLine.dataLabels!"\r
                                        [grid]="chartUsageLine.grid!"\r
                                        [labels]="chartUsageLine.labels!"\r
                                        [legend]="chartUsageLine.legend!"\r
                                        [plotOptions]="chartUsageLine.plotOptions!"\r
                                        [series]="chartUsageLine.series!"\r
                                        [states]="chartUsageLine.states!"\r
                                        [stroke]="chartUsageLine.stroke!"\r
                                        [tooltip]="chartUsageLine.tooltip!"\r
                                        [xaxis]="chartUsageLine.xaxis!"\r
                                        [yaxis]="chartUsageLine.yaxis!"\r
                                    ></apx-chart>\r
                                }\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Row 4: Distribution radar -->\r
                    @if (dashboard.distribution) {\r
                        <div class="chart-card mt-6">\r
                            <div class="chart-card-header">\r
                                <h3 class="chart-card-title">\r
                                    {{ 'home.stats.serviceDistribution' | transloco }}\r
                                </h3>\r
                                <span class="chart-card-pill"\r
                                    >30 {{ 'home.stats.days' | transloco }}</span\r
                                >\r
                            </div>\r
                            <div class="chart-card-tall">\r
                                @if (chartDistribution) {\r
                                    <apx-chart\r
                                        class="w-full h-full block"\r
                                        [chart]="chartDistribution.chart!"\r
                                        [colors]="chartDistribution.colors!"\r
                                        [dataLabels]="chartDistribution.dataLabels!"\r
                                        [markers]="chartDistribution.markers!"\r
                                        [plotOptions]="chartDistribution.plotOptions!"\r
                                        [series]="chartDistribution.series!"\r
                                        [stroke]="chartDistribution.stroke!"\r
                                        [tooltip]="chartDistribution.tooltip!"\r
                                        [xaxis]="chartDistribution.xaxis!"\r
                                        [yaxis]="chartDistribution.yaxis!"\r
                                    ></apx-chart>\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
                </section>\r
            }\r
\r
            <!-- Helper Shortcuts -->\r
            <section class="shortcuts-section">\r
                <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">\r
                    {{ 'home.shortcuts.title' | transloco }}\r
                </h2>\r
                <div class="shortcuts-grid">\r
                    @for (item of shortcuts; track item.id) {\r
                        @if (isShortcutLink(item)) {\r
                            <a [routerLink]="item.link!" class="shortcut-card">\r
                                <div class="shortcut-icon">\r
                                    <mat-icon>{{ item.icon }}</mat-icon>\r
                                </div>\r
                                <div>\r
                                    <div class="shortcut-title">\r
                                        {{ item.titleKey | transloco }}\r
                                    </div>\r
                                    <div class="shortcut-subtitle">\r
                                        {{ item.subtitleKey | transloco }}\r
                                    </div>\r
                                </div>\r
                            </a>\r
                        } @else {\r
                            <button\r
                                type="button"\r
                                class="shortcut-card"\r
                                [class.shortcut-card--support]="item.accent === 'support'"\r
                                (click)="onShortcutActivate(item)"\r
                            >\r
                                <div\r
                                    class="shortcut-icon"\r
                                    [class.shortcut-icon--support]="item.accent === 'support'"\r
                                >\r
                                    <mat-icon>{{ item.icon }}</mat-icon>\r
                                </div>\r
                                <div>\r
                                    <div class="shortcut-title">\r
                                        {{ item.titleKey | transloco }}\r
                                    </div>\r
                                    <div class="shortcut-subtitle">\r
                                        {{ item.subtitleKey | transloco }}\r
                                    </div>\r
                                </div>\r
                            </button>\r
                        }\r
                    }\r
                </div>\r
            </section>\r
        </div>\r
        <!-- /dashboard-wide -->\r
    </div>\r
    <!-- /dashboard-shell -->\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/home/home.component.scss */\n:host {\n  display: block;\n  min-height: 100%;\n  position: relative;\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(37, 99, 235, 0.09),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(14, 165, 233, 0.07),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(248, 250, 252) 0%,\n      rgb(241, 245, 249) 100%);\n}\n:host-context(.dark) {\n  background:\n    radial-gradient(\n      1200px 480px at 8% -10%,\n      rgba(59, 130, 246, 0.14),\n      transparent 55%),\n    radial-gradient(\n      900px 420px at 96% 8%,\n      rgba(56, 189, 248, 0.08),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      rgb(15, 23, 42) 0%,\n      rgb(2, 6, 23) 100%);\n}\n.home-container {\n  position: relative;\n  z-index: 1;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n}\n.home-container--signed-in {\n  display: flex;\n  flex-direction: column;\n}\n.home-container--signed-in > .home-welcome {\n  order: 0;\n}\n.home-container--signed-in > app-home-notification-banners {\n  order: 1;\n}\n.home-container--signed-in > .dashboard-shell {\n  order: 2;\n}\n.home-container--signed-in > :not(.home-welcome):not(app-home-notification-banners):not(.dashboard-shell) {\n  order: 3;\n}\n.dashboard-shell {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  align-items: start;\n  gap: 1.5rem;\n}\n@media (min-width: 1024px) {\n  .dashboard-shell {\n    grid-template-columns: minmax(0, 1fr) 340px;\n  }\n}\n@media (min-width: 1024px) {\n  .dashboard-shell--no-rail {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n.dashboard-main {\n  min-width: 0;\n}\n@media (min-width: 1024px) {\n  .dashboard-main {\n    grid-area: 1/1;\n  }\n}\n.dashboard-wide {\n  min-width: 0;\n  grid-column: 1/-1;\n}\n.dashboard-rail {\n  min-width: 0;\n  margin-bottom: 0.5rem;\n}\n@media (min-width: 1024px) {\n  .dashboard-rail {\n    grid-area: 1/2;\n    position: sticky;\n    top: 1.5rem;\n    max-height: calc(100vh - 3rem);\n    overflow-y: auto;\n    overscroll-behavior: contain;\n    scrollbar-width: thin;\n    margin-bottom: 0;\n  }\n}\n.promo-banner {\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  border-left-width: 4px;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n:host-context(.dark) .promo-banner {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.promo-banner-amber {\n  border-left-color: rgb(217, 119, 6);\n  background: rgb(255, 251, 235);\n}\n:host-context(.dark) .promo-banner-amber {\n  border-left-color: rgb(245, 158, 11);\n  background: rgba(120, 53, 15, 0.35);\n}\n.promo-banner-emerald {\n  border-left-color: rgb(5, 150, 105);\n  background: rgb(236, 253, 245);\n}\n:host-context(.dark) .promo-banner-emerald {\n  border-left-color: rgb(52, 211, 153);\n  background: rgba(6, 78, 59, 0.4);\n}\n.home-promo-card {\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(241, 245, 249);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  padding: 1.5rem 1.5rem 1.75rem;\n}\n:host-context(.dark) .home-promo-card {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.home-promo-card__body {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n@media (min-width: 768px) {\n  .home-promo-card__body {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.home-promo-card__copy {\n  min-width: 0;\n  flex: 1 1 0;\n}\n.home-promo-card__badge {\n  display: inline-flex;\n  margin: 0 0 0.75rem;\n  padding: 0.25rem 0.7rem;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  background: rgb(255, 255, 255);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: rgb(51, 65, 85);\n}\n:host-context(.dark) .home-promo-card__badge {\n  background: rgba(15, 23, 42, 0.45);\n  border-color: rgba(148, 163, 184, 0.28);\n  color: rgb(226, 232, 240);\n}\n.home-promo-card__title {\n  margin: 0 0 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1.25;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .home-promo-card__title {\n  color: rgb(248, 250, 252);\n}\n.home-promo-card__text,\n.home-promo-card__note {\n  margin: 0 0 0.75rem;\n  max-width: 40rem;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: rgb(71, 85, 105);\n}\n:host-context(.dark) .home-promo-card__text,\n:host-context(.dark) .home-promo-card__note {\n  color: rgb(203, 213, 225);\n}\n.home-promo-card__note {\n  font-size: 0.75rem;\n}\n.home-promo-card__deadline {\n  margin: 0 0 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .home-promo-card__deadline {\n  color: rgb(248, 250, 252);\n}\n.home-promo-card__cta {\n  border-radius: 0.75rem !important;\n  background: rgb(15, 23, 42) !important;\n  color: rgb(255, 255, 255) !important;\n  font-weight: 600 !important;\n  height: 2.75rem !important;\n  padding: 0 1.25rem !important;\n}\n:host-context(.dark) .home-promo-card__cta {\n  background: rgb(226, 232, 240) !important;\n  color: rgb(15, 23, 42) !important;\n}\n.home-promo-card__art {\n  display: none;\n  flex: 0 0 220px;\n  width: 220px;\n}\n@media (min-width: 768px) {\n  .home-promo-card__art {\n    display: block;\n  }\n}\n.home-promo-card__svg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.home-promo-card__slab {\n  fill: rgba(59, 130, 246, 0.16);\n}\n.home-promo-card__slab-face {\n  fill: rgb(255, 255, 255);\n  stroke: rgba(148, 163, 184, 0.45);\n}\n.home-promo-card__badge-circle {\n  fill: rgb(37, 99, 235);\n}\n.home-promo-card__badge-text {\n  fill: rgb(255, 255, 255);\n  font-size: 14px;\n  font-weight: 800;\n}\n:host-context(.dark) .home-promo-card__slab {\n  fill: rgba(96, 165, 250, 0.22);\n}\n:host-context(.dark) .home-promo-card__slab-face {\n  fill: rgb(51, 65, 85);\n  stroke: rgba(148, 163, 184, 0.35);\n}\n:host-context(.dark) .home-promo-card__badge-circle {\n  fill: rgb(96, 165, 250);\n}\n.company-verification-card {\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(241, 245, 249);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n  padding: 1.5rem 1.5rem 1.75rem;\n}\n:host-context(.dark) .company-verification-card {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.company-verification-stepper {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin: 0 0 1.75rem;\n  padding: 0;\n  list-style: none;\n}\n.company-verification-step__meta {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  min-width: 0;\n}\n.company-verification-step {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-width: 0;\n  color: rgb(100, 116, 139);\n}\n:host-context(.dark) .company-verification-step {\n  color: rgb(148, 163, 184);\n}\n.company-verification-step::after {\n  content: "";\n  display: block;\n  height: 3px;\n  border-radius: 999px;\n  background: rgba(148, 163, 184, 0.28);\n}\n.company-verification-step--active,\n.company-verification-step--complete {\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .company-verification-step--active,\n:host-context(.dark) .company-verification-step--complete {\n  color: rgb(241, 245, 249);\n}\n.company-verification-step--active::after,\n.company-verification-step--complete::after {\n  background: rgb(51, 65, 85);\n}\n:host-context(.dark) .company-verification-step--active::after,\n:host-context(.dark) .company-verification-step--complete::after {\n  background: rgb(203, 213, 225);\n}\n.company-verification-step__index {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 999px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  background: rgba(148, 163, 184, 0.2);\n}\n.company-verification-step--active .company-verification-step__index,\n.company-verification-step--complete .company-verification-step__index {\n  background: rgb(15, 23, 42);\n  color: rgb(255, 255, 255);\n}\n:host-context(.dark) .company-verification-step--active .company-verification-step__index,\n:host-context(.dark) .company-verification-step--complete .company-verification-step__index {\n  background: rgb(226, 232, 240);\n  color: rgb(15, 23, 42);\n}\n.company-verification-step__label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1.3;\n}\n.company-verification-body {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n@media (min-width: 768px) {\n  .company-verification-body {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.company-verification-copy {\n  min-width: 0;\n  flex: 1 1 0;\n}\n.company-verification-title {\n  margin: 0 0 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1.25;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .company-verification-title {\n  color: rgb(248, 250, 252);\n}\n.company-verification-text {\n  margin: 0 0 1.25rem;\n  max-width: 40rem;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: rgb(71, 85, 105);\n}\n:host-context(.dark) .company-verification-text {\n  color: rgb(203, 213, 225);\n}\n.company-verification-cta {\n  border-radius: 0.75rem !important;\n  background: rgb(15, 23, 42) !important;\n  color: rgb(255, 255, 255) !important;\n  font-weight: 600 !important;\n  height: 2.75rem !important;\n  padding: 0 1.25rem !important;\n}\n.company-verification-cta:disabled {\n  opacity: 0.55;\n}\n:host-context(.dark) .company-verification-cta {\n  background: rgb(226, 232, 240) !important;\n  color: rgb(15, 23, 42) !important;\n}\n.company-verification-art {\n  display: none;\n  flex: 0 0 220px;\n  width: 220px;\n}\n@media (min-width: 768px) {\n  .company-verification-art {\n    display: block;\n  }\n}\n.company-verification-art__svg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.company-verification-art__slab {\n  fill: rgba(59, 130, 246, 0.16);\n}\n.company-verification-art__slab-face {\n  fill: rgb(255, 255, 255);\n  stroke: rgba(148, 163, 184, 0.45);\n}\n.company-verification-art__badge {\n  fill: rgb(37, 99, 235);\n}\n.company-verification-art__check {\n  stroke: rgb(255, 255, 255);\n  fill: none;\n}\n:host-context(.dark) .company-verification-art__slab {\n  fill: rgba(96, 165, 250, 0.22);\n}\n:host-context(.dark) .company-verification-art__slab-face {\n  fill: rgb(51, 65, 85);\n  stroke: rgba(148, 163, 184, 0.35);\n}\n:host-context(.dark) .company-verification-art__badge {\n  fill: rgb(96, 165, 250);\n}\n.stat-strip {\n  container-type: inline-size;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 2rem;\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n:host-context(.dark) .stat-strip {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.stat-strip-item {\n  flex: 1 1 0;\n  padding: 1.5rem 1.25rem;\n  min-width: 0;\n}\n.stat-strip-item:not(:first-child) {\n  border-left: 1px solid rgba(148, 163, 184, 0.2);\n}\n:host-context(.dark) .stat-strip-item:not(:first-child) {\n  border-left-color: rgba(148, 163, 184, 0.18);\n}\n@container (max-width: 820px) {\n  .stat-strip-item {\n    flex: 1 1 50%;\n  }\n  .stat-strip-item:not(:first-child) {\n    border-left: none;\n  }\n  .stat-strip-item:nth-child(2n) {\n    border-left: 1px solid rgba(148, 163, 184, 0.2);\n  }\n  .stat-strip-item:nth-child(n+3) {\n    border-top: 1px solid rgba(148, 163, 184, 0.2);\n  }\n  :host-context(.dark) .stat-strip-item:nth-child(2n) {\n    border-left-color: rgba(148, 163, 184, 0.18);\n  }\n  :host-context(.dark) .stat-strip-item:nth-child(n+3) {\n    border-top-color: rgba(148, 163, 184, 0.18);\n  }\n}\n@container (max-width: 420px) {\n  .stat-strip-item {\n    flex: 1 1 100%;\n  }\n  .stat-strip-item:nth-child(2n) {\n    border-left: none;\n  }\n  .stat-strip-item:nth-child(n+2) {\n    border-top: 1px solid rgba(148, 163, 184, 0.2);\n  }\n  :host-context(.dark) .stat-strip-item:nth-child(n+2) {\n    border-top-color: rgba(148, 163, 184, 0.18);\n  }\n}\n.sign-in-card {\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n:host-context(.dark) .sign-in-card {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.usage-globe-placeholder {\n  min-height: 420px;\n  margin-bottom: 2rem;\n}\n.stat-value {\n  font-size: clamp(1.5rem, 5cqi, 2rem);\n  font-weight: 700;\n  line-height: 1.1;\n  letter-spacing: -0.02em;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .stat-value {\n  color: rgb(248, 250, 252);\n}\n.stat-label {\n  font-size: 0.75rem;\n  color: rgb(100, 116, 139);\n  margin-top: 0.35rem;\n}\n:host-context(.dark) .stat-label {\n  color: rgb(148, 163, 184);\n}\n.shortcuts-section {\n  margin-bottom: 2rem;\n}\n.shortcuts-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 0.75rem;\n}\n.shortcut-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n  padding: 1rem 1.1rem;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(255, 255, 255);\n  text-decoration: none;\n  color: inherit;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n  width: 100%;\n  text-align: left;\n  font: inherit;\n  cursor: pointer;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);\n}\n.shortcut-card:hover {\n  border-color: rgba(37, 99, 235, 0.45);\n  background: rgb(255, 255, 255);\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);\n}\n:host-context(.dark) .shortcut-card {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n}\n:host-context(.dark) .shortcut-card:hover {\n  border-color: rgba(96, 165, 250, 0.45);\n  background: rgb(30, 41, 59);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n}\n.shortcut-card--support {\n  border-color: rgba(148, 163, 184, 0.22);\n  background: rgb(255, 255, 255);\n}\n.shortcut-card--support:hover {\n  border-color: rgba(37, 99, 235, 0.45);\n  background: rgb(255, 255, 255);\n}\n:host-context(.dark) .shortcut-card--support {\n  border-color: rgba(148, 163, 184, 0.18);\n  background: rgb(30, 41, 59);\n}\n:host-context(.dark) .shortcut-card--support:hover {\n  border-color: rgba(96, 165, 250, 0.45);\n  background: rgb(30, 41, 59);\n}\n.shortcut-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 9999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: rgba(148, 163, 184, 0.12);\n  color: rgb(71, 85, 105);\n}\n:host-context(.dark) .shortcut-icon {\n  background: rgba(148, 163, 184, 0.14);\n  color: rgb(203, 213, 225);\n}\n.shortcut-icon--support {\n  background: rgba(148, 163, 184, 0.12);\n  color: rgb(71, 85, 105);\n}\n:host-context(.dark) .shortcut-icon--support {\n  background: rgba(148, 163, 184, 0.14);\n  color: rgb(203, 213, 225);\n}\n.shortcut-title {\n  font-weight: 600;\n  font-size: 0.95rem;\n  margin-bottom: 0.2rem;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .shortcut-title {\n  color: rgb(241, 245, 249);\n}\n.shortcut-subtitle {\n  font-size: 0.8rem;\n  color: rgb(100, 116, 139);\n}\n:host-context(.dark) .shortcut-subtitle {\n  color: rgb(148, 163, 184);\n}\n.tutorial-section {\n  padding: 1.5rem;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n:host-context(.dark) .tutorial-section {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.top-apis-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.top-apis-list li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.875rem 1.25rem;\n  border-radius: 12px;\n  background: transparent;\n  border: 1px solid rgba(148, 163, 184, 0.15);\n  transition: border-color 0.15s ease;\n}\n.top-apis-list li:hover {\n  border-color: rgba(148, 163, 184, 0.4);\n  transform: none;\n}\n:host-context(.dark) .top-apis-list li {\n  background: transparent;\n  border-color: rgba(148, 163, 184, 0.12);\n}\n:host-context(.dark) .top-apis-list li:hover {\n  border-color: rgba(148, 163, 184, 0.35);\n}\n.api-badges {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.api-count-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: rgba(148, 163, 184, 0.12);\n  color: rgb(71, 85, 105);\n}\n:host-context(.dark) .api-count-badge {\n  background: rgba(148, 163, 184, 0.18);\n  color: rgb(203, 213, 225);\n}\n.api-failed-badge {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  background: rgba(239, 68, 68, 0.1);\n  color: rgb(185, 28, 28);\n}\n:host-context(.dark) .api-failed-badge {\n  background: rgba(239, 68, 68, 0.18);\n  color: rgb(252, 165, 165);\n}\n.dashboard-charts {\n  display: flex;\n  flex-direction: column;\n}\n.charts-grid {\n  display: grid;\n  gap: 0.75rem;\n}\n.charts-grid-3 {\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}\n.charts-grid-2 {\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n.chart-card {\n  padding: 1.25rem;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.04);\n}\n:host-context(.dark) .chart-card {\n  background: rgb(30, 41, 59);\n  border-color: rgba(148, 163, 184, 0.18);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);\n}\n.chart-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.chart-card-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .chart-card-title {\n  color: rgb(248, 250, 252);\n}\n.chart-card-pill {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  background: rgba(148, 163, 184, 0.12);\n  color: rgb(71, 85, 105);\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n:host-context(.dark) .chart-card-pill {\n  background: rgba(148, 163, 184, 0.18);\n  color: rgb(203, 213, 225);\n}\n.chart-card-label {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n:host-context(.dark) .chart-card-label {\n  color: rgb(148, 163, 184);\n}\n.chart-card-value {\n  margin-top: 0.5rem;\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: rgb(15, 23, 42);\n  line-height: 1.1;\n}\n:host-context(.dark) .chart-card-value {\n  color: rgb(248, 250, 252);\n}\n.chart-card-unit {\n  margin-left: 0.4rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n:host-context(.dark) .chart-card-unit {\n  color: rgb(148, 163, 184);\n}\n.chart-card-spark {\n  height: 64px;\n  margin-top: 1rem;\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.chart-card-tall {\n  position: relative;\n  height: 320px;\n  width: 100%;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.15);\n}\n:host-context(.dark) .kpi-row {\n  border-bottom-color: rgba(148, 163, 184, 0.12);\n}\n.kpi-item {\n  min-width: 0;\n}\n.kpi-label {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n:host-context(.dark) .kpi-label {\n  color: rgb(148, 163, 184);\n}\n.kpi-value {\n  margin-top: 0.35rem;\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: rgb(15, 23, 42);\n  line-height: 1.1;\n}\n:host-context(.dark) .kpi-value {\n  color: rgb(248, 250, 252);\n}\n.kpi-pct {\n  padding: 0.15rem 0.6rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.kpi-pct-positive {\n  background: rgba(34, 197, 94, 0.12);\n  color: rgb(21, 128, 61);\n}\n:host-context(.dark) .kpi-pct-positive {\n  background: rgba(34, 197, 94, 0.2);\n  color: rgb(134, 239, 172);\n}\n.kpi-pct-negative {\n  background: rgba(239, 68, 68, 0.12);\n  color: rgb(185, 28, 28);\n}\n:host-context(.dark) .kpi-pct-negative {\n  background: rgba(239, 68, 68, 0.2);\n  color: rgb(252, 165, 165);\n}\n.performers-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.performer-row {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.5rem 0;\n  border-radius: 0;\n  transition: none;\n}\n.performer-row:hover {\n  background: transparent;\n}\n.performer-row-top {\n  background: transparent;\n  border: none;\n}\n.performer-rank {\n  flex-shrink: 0;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: transparent;\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  color: rgb(71, 85, 105);\n}\n.performer-row-top .performer-rank {\n  background: transparent;\n  border-color: rgb(99, 102, 241);\n  color: rgb(79, 70, 229);\n}\n:host-context(.dark) .performer-rank {\n  background: transparent;\n  border-color: rgba(148, 163, 184, 0.3);\n  color: rgb(203, 213, 225);\n}\n:host-context(.dark) .performer-row-top .performer-rank {\n  background: transparent;\n  border-color: rgb(129, 140, 248);\n  color: rgb(165, 180, 252);\n}\n.performer-info {\n  flex: 1;\n  min-width: 0;\n}\n.performer-name {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: rgb(30, 41, 59);\n  margin-bottom: 0.375rem;\n  overflow-wrap: anywhere;\n}\n:host-context(.dark) .performer-name {\n  color: rgb(226, 232, 240);\n}\n.performer-bar-track {\n  width: 100%;\n  height: 4px;\n  border-radius: 9999px;\n  background: rgba(148, 163, 184, 0.15);\n  overflow: hidden;\n}\n:host-context(.dark) .performer-bar-track {\n  background: rgba(148, 163, 184, 0.18);\n}\n.performer-bar-fill {\n  height: 100%;\n  border-radius: 9999px;\n  background: rgb(99, 102, 241);\n  transition: width 0.5s ease;\n}\n.performer-stats {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.25rem;\n}\n.performer-count {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: rgb(15, 23, 42);\n}\n:host-context(.dark) .performer-count {\n  color: rgb(248, 250, 252);\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/modules/home/home.component.ts", lineNumber: 91 });
})();

// src/app/modules/home/home.routes.ts
var home_routes_default = [
  {
    path: "",
    component: HomeComponent
  }
];
export {
  home_routes_default as default
};
//# sourceMappingURL=chunk-4L7TBIUS.js.map
