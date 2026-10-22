import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import "./chunk-GX5GK4J6.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute
} from "./chunk-QL64NPDU.js";
import {
  environment
} from "./chunk-3V5B4ZWC.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  CurrencyPipe,
  HttpClient,
  NgClass,
  NgIf,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YWP2Y7QK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/payment-return/payment-return.component.ts
var _c0 = (a0, a1, a2) => ({ "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/30": a0, "bg-gradient-to-br from-stone-400 to-stone-600 shadow-stone-500/20": a1, "bg-gradient-to-br from-rose-500 to-rose-700 shadow-rose-500/30": a2 });
var _c1 = (a0, a1, a2) => ({ "border-indigo-500/25 bg-indigo-500/[0.08] text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-300": a0, "border-stone-400/30 bg-stone-500/[0.08] text-stone-600 dark:border-stone-400/30 dark:bg-stone-400/10 dark:text-stone-300": a1, "border-rose-500/25 bg-rose-500/[0.08] text-rose-600 dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-300": a2 });
function PaymentReturnComponent_div_21_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "paymentReturn.charged"), " ", \u0275\u0275pipeBind4(3, 4, payment_r1.chargeAmount, "COP", "symbol", "1.0-0"), " ");
  }
}
function PaymentReturnComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PaymentReturnComponent_div_21_p_7_Template, 4, 9, "p", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r1 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "paymentReturn.credited"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(6, 5, payment_r1.usdAmount, "USD", "symbol", "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", payment_r1.chargeCurrency === "COP");
  }
}
function PaymentReturnComponent_button_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
function PaymentReturnComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function PaymentReturnComponent_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadInvoice());
    });
    \u0275\u0275template(1, PaymentReturnComponent_button_22_span_1_Template, 1, 0, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.downloading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.downloading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, ctx_r2.downloading() ? "paymentReturn.downloading" : "paymentReturn.download"), " ");
  }
}
function PaymentReturnComponent_a_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("href", (tmp_1_0 = ctx_r2.summary()) == null ? null : tmp_1_0.stripeHostedInvoiceUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "paymentReturn.stripeInvoice"), " ");
  }
}
function PaymentReturnComponent_p_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "paymentReturn.downloadError"), " ");
  }
}
var CONFIRM_ATTEMPTS = 5;
var CONFIRM_RETRY_MS = 3e3;
var INVOICE_LANGUAGES = /* @__PURE__ */ new Set(["en", "es", "fr", "pt", "ja", "ko", "zh"]);
var PaymentReturnComponent = class _PaymentReturnComponent {
  constructor() {
    this.state = signal("confirming");
    this.summary = signal(null);
    this.downloading = signal(false);
    this.downloadError = signal(false);
    this._http = inject(HttpClient);
    this._route = inject(ActivatedRoute);
    this._transloco = inject(TranslocoService);
  }
  /**
   * Approved, confirming, and pending share the indigo card. Expired stays quiet. Failed stays rose.
   */
  statusTone() {
    const current = this.state();
    if (current === "failed")
      return "rose";
    if (current === "expired" || current === "abandoned")
      return "slate";
    return "indigo";
  }
  statusIcon() {
    const current = this.state();
    if (current === "approved")
      return "check";
    if (current === "failed")
      return "error_outline";
    if (current === "expired" || current === "abandoned")
      return "hourglass_disabled";
    return "schedule";
  }
  ngOnInit() {
    const token = this._route.snapshot.queryParamMap.get("token");
    if (!token) {
      this.state.set("unknown");
      return;
    }
    this._confirm(token, 1, this._route.snapshot.queryParamMap.get("canceled") === "1");
  }
  ngOnDestroy() {
    clearTimeout(this._timer);
  }
  downloadInvoice() {
    const token = this._route.snapshot.queryParamMap.get("token");
    if (!token || this.state() !== "approved" || this.downloading())
      return;
    this.downloading.set(true);
    this.downloadError.set(false);
    this._http.get(`${environment.apiUrl}/v2/credits/payment-return/invoice`, {
      params: { token, language: this._invoiceLanguage() },
      responseType: "blob",
      observe: "response"
    }).subscribe({
      next: (response) => {
        this._saveInvoice(response.body, response.headers.get("Content-Disposition"));
        this.downloading.set(false);
      },
      error: () => {
        this.downloading.set(false);
        this.downloadError.set(true);
      }
    });
  }
  _confirm(token, attempt, canceled) {
    this._http.get(`${environment.apiUrl}/v2/credits/payment-return`, {
      params: { token }
    }).subscribe({
      next: (response) => {
        const data = response.data;
        this.summary.set(data ?? null);
        if (data?.state === "pending" && canceled) {
          this.state.set("abandoned");
          return;
        }
        if (data?.state === "pending" && attempt < CONFIRM_ATTEMPTS) {
          this.state.set("confirming");
          this._timer = setTimeout(() => this._confirm(token, attempt + 1, canceled), CONFIRM_RETRY_MS);
          return;
        }
        this.state.set(data?.state || "unknown");
      },
      error: () => this.state.set("unknown")
    });
  }
  _invoiceLanguage() {
    const normalized = (this._transloco.getActiveLang() || "en").split("-")[0].toLowerCase();
    return INVOICE_LANGUAGES.has(normalized) ? normalized : "en";
  }
  _saveInvoice(blob, disposition) {
    if (!blob) {
      this.downloadError.set(true);
      return;
    }
    const match = /filename="([^"]+)"/.exec(disposition || "");
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = match?.[1] || "verifik-invoice.pdf";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  static {
    this.\u0275fac = function PaymentReturnComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentReturnComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentReturnComponent, selectors: [["app-payment-return"]], decls: 28, vars: 28, consts: [[1, "flex", "min-h-screen", "items-center", "justify-center", "bg-stone-100", "px-4", "py-10", "dark:bg-zinc-950"], [1, "w-full", "max-w-md", "rounded-3xl", "border", "border-stone-200/90", "bg-white", "p-8", "shadow-sm", "dark:border-zinc-800", "dark:bg-zinc-900"], [1, "text-[11px]", "font-semibold", "uppercase", "tracking-[0.2em]", "text-stone-400", "dark:text-zinc-500"], [1, "mt-2", "text-2xl", "font-semibold", "tracking-tight", "text-stone-950", "dark:text-white"], [1, "status-note", "relative", "mt-6", "overflow-hidden", "rounded-2xl", "border", "shadow-sm", 3, "ngClass"], ["aria-hidden", "true", 1, "status-note__blob", "status-note__blob--tr"], ["aria-hidden", "true", 1, "status-note__blob", "status-note__blob--bl"], [1, "relative", "z-10", "flex", "items-start", "gap-3", "p-4"], [1, "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-2xl", "shadow-lg", 3, "ngClass"], [1, "!h-5", "!w-5", "!text-xl", "text-white"], [1, "min-w-0"], [1, "inline-flex", "items-center", "rounded-full", "border", "px-3", "py-1", "text-[11px]", "font-semibold", "uppercase", "tracking-wider", 3, "ngClass"], [1, "mt-1", "mb-0", "text-sm", "leading-relaxed", "text-gray-600", "dark:text-slate-400"], ["class", "mt-8 text-center", 4, "ngIf"], ["type", "button", "class", "mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-stone-950 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:cursor-wait disabled:opacity-70 dark:bg-white dark:text-zinc-950 dark:hover:bg-stone-100", 3, "disabled", "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "class", "mt-3 inline-flex h-11 w-full items-center justify-center rounded-xl border border-stone-200 text-sm font-semibold text-stone-800 transition hover:bg-stone-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800", 3, "href", 4, "ngIf"], ["class", "mb-0 mt-3 text-center text-sm text-rose-600 dark:text-rose-400", 4, "ngIf"], [1, "mt-6", "mb-0", "text-xs", "leading-5", "text-stone-400", "dark:text-zinc-500"], [1, "mt-8", "text-center"], [1, "m-0", "text-[11px]", "font-semibold", "uppercase", "tracking-[0.16em]", "text-stone-400", "dark:text-zinc-500"], [1, "m-0", "mt-2", "text-4xl", "font-semibold", "tabular-nums", "tracking-tight", "text-stone-950", "dark:text-white"], ["class", "mb-0 mt-3 text-sm text-stone-500 dark:text-zinc-400", 4, "ngIf"], [1, "mb-0", "mt-3", "text-sm", "text-stone-500", "dark:text-zinc-400"], ["type", "button", 1, "mt-8", "inline-flex", "h-11", "w-full", "items-center", "justify-center", "gap-2", "rounded-xl", "bg-stone-950", "text-sm", "font-semibold", "text-white", "transition", "hover:bg-stone-800", "disabled:cursor-wait", "disabled:opacity-70", "dark:bg-white", "dark:text-zinc-950", "dark:hover:bg-stone-100", 3, "click", "disabled"], ["class", "h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white dark:border-zinc-950/20 dark:border-t-zinc-950", 4, "ngIf"], [1, "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/30", "border-t-white", "dark:border-zinc-950/20", "dark:border-t-zinc-950"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-3", "inline-flex", "h-11", "w-full", "items-center", "justify-center", "rounded-xl", "border", "border-stone-200", "text-sm", "font-semibold", "text-stone-800", "transition", "hover:bg-stone-50", "dark:border-zinc-700", "dark:text-zinc-100", "dark:hover:bg-zinc-800", 3, "href"], [1, "mb-0", "mt-3", "text-center", "text-sm", "text-rose-600", "dark:text-rose-400"]], template: function PaymentReturnComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "p", 2);
        \u0275\u0275text(3, "Verifik");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275element(8, "div", 5)(9, "div", 6);
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "mat-icon", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "span", 11);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 12);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(21, PaymentReturnComponent_div_21_Template, 8, 10, "div", 13)(22, PaymentReturnComponent_button_22_Template, 4, 5, "button", 14)(23, PaymentReturnComponent_a_23_Template, 3, 4, "a", 15)(24, PaymentReturnComponent_p_24_Template, 3, 3, "p", 16);
        \u0275\u0275elementStart(25, "p", 17);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_9_0;
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 12, "paymentReturn.title"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", "status-note--" + ctx.statusTone());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(20, _c0, ctx.statusTone() === "indigo", ctx.statusTone() === "slate", ctx.statusTone() === "rose"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.statusIcon());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(24, _c1, ctx.statusTone() === "indigo", ctx.statusTone() === "slate", ctx.statusTone() === "rose"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 14, "paymentReturn.badges." + ctx.state()), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 16, "paymentReturn." + ctx.state()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.summary());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "approved");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "approved" && ((tmp_9_0 = ctx.summary()) == null ? null : tmp_9_0.stripeHostedInvoiceUrl));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.downloadError());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 18, "paymentReturn.noAccount"), " ");
      }
    }, dependencies: [CommonModule, NgClass, NgIf, CurrencyPipe, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n.status-note--indigo[_ngcontent-%COMP%] {\n  border-color: rgba(224, 231, 255, 0.8);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(238, 242, 255, 0.95) 0%,\n      rgba(245, 243, 255, 0.98) 45%,\n      rgba(250, 245, 255, 0.96) 100%);\n}\n.status-note--slate[_ngcontent-%COMP%] {\n  border-color: rgba(231, 229, 228, 0.9);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(250, 250, 249, 0.98) 0%,\n      rgba(245, 245, 244, 0.96) 100%);\n}\n.status-note--rose[_ngcontent-%COMP%] {\n  border-color: rgba(255, 228, 230, 0.9);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(255, 241, 242, 0.96) 0%,\n      rgba(255, 228, 230, 0.92) 55%,\n      rgba(255, 241, 242, 0.98) 100%);\n}\n.dark[_nghost-%COMP%]   .status-note--indigo[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-note--indigo[_ngcontent-%COMP%] {\n  border-color: rgba(49, 46, 129, 0.4);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(30, 41, 59, 0.92) 0%,\n      rgba(30, 27, 75, 0.55) 50%,\n      rgba(49, 46, 129, 0.35) 100%);\n}\n.dark[_nghost-%COMP%]   .status-note--slate[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-note--slate[_ngcontent-%COMP%] {\n  border-color: rgba(63, 63, 70, 0.8);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(24, 24, 27, 0.92) 0%,\n      rgba(39, 39, 42, 0.7) 100%);\n}\n.dark[_nghost-%COMP%]   .status-note--rose[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-note--rose[_ngcontent-%COMP%] {\n  border-color: rgba(136, 19, 55, 0.45);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(30, 41, 59, 0.92) 0%,\n      rgba(76, 5, 25, 0.45) 100%);\n}\n.status-note__blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  filter: blur(48px);\n  opacity: 0.32;\n}\n.status-note--indigo[_ngcontent-%COMP%]   .status-note__blob--tr[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  top: -60px;\n  right: -30px;\n  background:\n    radial-gradient(\n      circle,\n      #818cf8 0%,\n      #6366f1 55%,\n      transparent 100%);\n}\n.status-note--indigo[_ngcontent-%COMP%]   .status-note__blob--bl[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  bottom: -40px;\n  left: -24px;\n  background:\n    radial-gradient(\n      circle,\n      #c4b5fd 0%,\n      #7c3aed 55%,\n      transparent 100%);\n}\n.status-note--slate[_ngcontent-%COMP%]   .status-note__blob--tr[_ngcontent-%COMP%], \n.status-note--slate[_ngcontent-%COMP%]   .status-note__blob--bl[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      #d6d3d1 0%,\n      #a8a29e 55%,\n      transparent 100%);\n}\n.status-note--slate[_ngcontent-%COMP%]   .status-note__blob--tr[_ngcontent-%COMP%] {\n  top: -60px;\n  right: -30px;\n}\n.status-note--slate[_ngcontent-%COMP%]   .status-note__blob--bl[_ngcontent-%COMP%] {\n  bottom: -40px;\n  left: -24px;\n}\n.status-note--rose[_ngcontent-%COMP%]   .status-note__blob--tr[_ngcontent-%COMP%], \n.status-note--rose[_ngcontent-%COMP%]   .status-note__blob--bl[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      #fda4af 0%,\n      #e11d48 55%,\n      transparent 100%);\n}\n.status-note--rose[_ngcontent-%COMP%]   .status-note__blob--tr[_ngcontent-%COMP%] {\n  top: -60px;\n  right: -30px;\n}\n.status-note--rose[_ngcontent-%COMP%]   .status-note__blob--bl[_ngcontent-%COMP%] {\n  bottom: -40px;\n  left: -24px;\n}\n/*# sourceMappingURL=payment-return.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentReturnComponent, [{
    type: Component,
    args: [{ selector: "app-payment-return", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex min-h-screen items-center justify-center bg-stone-100 px-4 py-10 dark:bg-zinc-950">\r
    <section class="w-full max-w-md rounded-3xl border border-stone-200/90 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">\r
        <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 dark:text-zinc-500">Verifik</p>\r
        <h1 class="mt-2 text-2xl font-semibold tracking-tight text-stone-950 dark:text-white">\r
            {{ 'paymentReturn.title' | transloco }}\r
        </h1>\r
\r
        <div class="status-note relative mt-6 overflow-hidden rounded-2xl border shadow-sm" [ngClass]="'status-note--' + statusTone()">\r
            <div class="status-note__blob status-note__blob--tr" aria-hidden="true"></div>\r
            <div class="status-note__blob status-note__blob--bl" aria-hidden="true"></div>\r
            <div class="relative z-10 flex items-start gap-3 p-4">\r
                <div\r
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl shadow-lg"\r
                    [ngClass]="{\r
                        'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/30': statusTone() === 'indigo',\r
                        'bg-gradient-to-br from-stone-400 to-stone-600 shadow-stone-500/20': statusTone() === 'slate',\r
                        'bg-gradient-to-br from-rose-500 to-rose-700 shadow-rose-500/30': statusTone() === 'rose'\r
                    }"\r
                >\r
                    <mat-icon class="!h-5 !w-5 !text-xl text-white">{{ statusIcon() }}</mat-icon>\r
                </div>\r
                <div class="min-w-0">\r
                    <span\r
                        class="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"\r
                        [ngClass]="{\r
                            'border-indigo-500/25 bg-indigo-500/[0.08] text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-300':\r
                                statusTone() === 'indigo',\r
                            'border-stone-400/30 bg-stone-500/[0.08] text-stone-600 dark:border-stone-400/30 dark:bg-stone-400/10 dark:text-stone-300':\r
                                statusTone() === 'slate',\r
                            'border-rose-500/25 bg-rose-500/[0.08] text-rose-600 dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-300':\r
                                statusTone() === 'rose'\r
                        }"\r
                    >\r
                        {{ 'paymentReturn.badges.' + state() | transloco }}\r
                    </span>\r
                    <p class="mt-1 mb-0 text-sm leading-relaxed text-gray-600 dark:text-slate-400">\r
                        {{ 'paymentReturn.' + state() | transloco }}\r
                    </p>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <div *ngIf="summary() as payment" class="mt-8 text-center">\r
            <p class="m-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-400 dark:text-zinc-500">\r
                {{ 'paymentReturn.credited' | transloco }}\r
            </p>\r
            <p class="m-0 mt-2 text-4xl font-semibold tabular-nums tracking-tight text-stone-950 dark:text-white">\r
                {{ payment.usdAmount | currency: 'USD' : 'symbol' : '1.2-2' }}\r
            </p>\r
            <p *ngIf="payment.chargeCurrency === 'COP'" class="mb-0 mt-3 text-sm text-stone-500 dark:text-zinc-400">\r
                {{ 'paymentReturn.charged' | transloco }}\r
                {{ payment.chargeAmount | currency: 'COP' : 'symbol' : '1.0-0' }}\r
            </p>\r
        </div>\r
\r
        <button\r
            *ngIf="state() === 'approved'"\r
            type="button"\r
            (click)="downloadInvoice()"\r
            [disabled]="downloading()"\r
            class="mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-stone-950 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:cursor-wait disabled:opacity-70 dark:bg-white dark:text-zinc-950 dark:hover:bg-stone-100"\r
        >\r
            <span\r
                *ngIf="downloading()"\r
                class="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white dark:border-zinc-950/20 dark:border-t-zinc-950"\r
            ></span>\r
            {{ (downloading() ? 'paymentReturn.downloading' : 'paymentReturn.download') | transloco }}\r
        </button>\r
        <a\r
            *ngIf="state() === 'approved' && summary()?.stripeHostedInvoiceUrl"\r
            [href]="summary()?.stripeHostedInvoiceUrl"\r
            target="_blank"\r
            rel="noopener noreferrer"\r
            class="mt-3 inline-flex h-11 w-full items-center justify-center rounded-xl border border-stone-200 text-sm font-semibold text-stone-800 transition hover:bg-stone-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"\r
        >\r
            {{ 'paymentReturn.stripeInvoice' | transloco }}\r
        </a>\r
        <p *ngIf="downloadError()" class="mb-0 mt-3 text-center text-sm text-rose-600 dark:text-rose-400">\r
            {{ 'paymentReturn.downloadError' | transloco }}\r
        </p>\r
\r
        <p class="mt-6 mb-0 text-xs leading-5 text-stone-400 dark:text-zinc-500">\r
            {{ 'paymentReturn.noAccount' | transloco }}\r
        </p>\r
    </section>\r
</div>\r
`, styles: ["/* src/app/modules/payment-return/payment-return.component.scss */\n.status-note--indigo {\n  border-color: rgba(224, 231, 255, 0.8);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(238, 242, 255, 0.95) 0%,\n      rgba(245, 243, 255, 0.98) 45%,\n      rgba(250, 245, 255, 0.96) 100%);\n}\n.status-note--slate {\n  border-color: rgba(231, 229, 228, 0.9);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(250, 250, 249, 0.98) 0%,\n      rgba(245, 245, 244, 0.96) 100%);\n}\n.status-note--rose {\n  border-color: rgba(255, 228, 230, 0.9);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(255, 241, 242, 0.96) 0%,\n      rgba(255, 228, 230, 0.92) 55%,\n      rgba(255, 241, 242, 0.98) 100%);\n}\n:host-context(.dark) .status-note--indigo {\n  border-color: rgba(49, 46, 129, 0.4);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(30, 41, 59, 0.92) 0%,\n      rgba(30, 27, 75, 0.55) 50%,\n      rgba(49, 46, 129, 0.35) 100%);\n}\n:host-context(.dark) .status-note--slate {\n  border-color: rgba(63, 63, 70, 0.8);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(24, 24, 27, 0.92) 0%,\n      rgba(39, 39, 42, 0.7) 100%);\n}\n:host-context(.dark) .status-note--rose {\n  border-color: rgba(136, 19, 55, 0.45);\n  background:\n    linear-gradient(\n      105deg,\n      rgba(30, 41, 59, 0.92) 0%,\n      rgba(76, 5, 25, 0.45) 100%);\n}\n.status-note__blob {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  filter: blur(48px);\n  opacity: 0.32;\n}\n.status-note--indigo .status-note__blob--tr {\n  width: 140px;\n  height: 140px;\n  top: -60px;\n  right: -30px;\n  background:\n    radial-gradient(\n      circle,\n      #818cf8 0%,\n      #6366f1 55%,\n      transparent 100%);\n}\n.status-note--indigo .status-note__blob--bl {\n  width: 110px;\n  height: 110px;\n  bottom: -40px;\n  left: -24px;\n  background:\n    radial-gradient(\n      circle,\n      #c4b5fd 0%,\n      #7c3aed 55%,\n      transparent 100%);\n}\n.status-note--slate .status-note__blob--tr,\n.status-note--slate .status-note__blob--bl {\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      #d6d3d1 0%,\n      #a8a29e 55%,\n      transparent 100%);\n}\n.status-note--slate .status-note__blob--tr {\n  top: -60px;\n  right: -30px;\n}\n.status-note--slate .status-note__blob--bl {\n  bottom: -40px;\n  left: -24px;\n}\n.status-note--rose .status-note__blob--tr,\n.status-note--rose .status-note__blob--bl {\n  width: 120px;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle,\n      #fda4af 0%,\n      #e11d48 55%,\n      transparent 100%);\n}\n.status-note--rose .status-note__blob--tr {\n  top: -60px;\n  right: -30px;\n}\n.status-note--rose .status-note__blob--bl {\n  bottom: -40px;\n  left: -24px;\n}\n/*# sourceMappingURL=payment-return.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentReturnComponent, { className: "PaymentReturnComponent", filePath: "src/app/modules/payment-return/payment-return.component.ts", lineNumber: 39 });
})();
export {
  PaymentReturnComponent
};
//# sourceMappingURL=chunk-V6MJASF2.js.map
