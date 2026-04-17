import {
  fuseAnimations
} from "./chunk-CK3XZJWG.js";
import {
  AuthService
} from "./chunk-E7LVUBZB.js";
import {
  UserService
} from "./chunk-ZWSCRV34.js";
import "./chunk-LPSMXQSY.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import "./chunk-Y5VEUI6L.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-LHOHCIQM.js";
import "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  CommonModule,
  Component,
  MatButton,
  MatButtonModule,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YTOBX75K.js";
import "./chunk-KTESVR3Q.js";

// src/app/modules/bridge/bridge.component.ts
function BridgeComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "div", 19);
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275element(4, "mat-spinner", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h1", 22);
    \u0275\u0275text(6, "Connecting Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 23);
    \u0275\u0275text(8, " Securing your session with Verifik services... ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeIn", void 0);
  }
}
function BridgeComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 24)(2, "mat-icon", 25);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h1", 22);
    \u0275\u0275text(5, "Welcome Back!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7, " Identity verified. Your workspace is ready. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275element(9, "mat-spinner", 28);
    \u0275\u0275elementStart(10, "span", 29);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@fadeIn", void 0);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("Entering in ", ctx_r0.countdown(), "s");
  }
}
function BridgeComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 30)(2, "mat-icon", 31);
    \u0275\u0275text(3, "error_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h1", 22);
    \u0275\u0275text(5, "Auth Failed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 32);
    \u0275\u0275listener("click", function BridgeComponent_div_20_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToLogin());
    });
    \u0275\u0275text(9, " Go to Login ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@fadeIn", void 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function BridgeComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 33)(2, "mat-icon", 34);
    \u0275\u0275text(3, "lock_person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h1", 22);
    \u0275\u0275text(5, "Access Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7, " Please access SmartCheck through the Verifik platform. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 35)(9, "a", 36);
    \u0275\u0275text(10, " Open Verifik ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 37);
    \u0275\u0275listener("click", function BridgeComponent_div_21_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.continueWithoutAuth());
    });
    \u0275\u0275text(12, " Continue as Guest ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("@fadeIn", void 0);
  }
}
var BridgeComponent = class _BridgeComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._authService = inject(AuthService);
    this._userService = inject(UserService);
    this.status = signal("loading");
    this.errorMessage = signal("");
    this.countdown = signal(3);
  }
  ngOnInit() {
    this.processToken();
  }
  processToken() {
    const token = this._route.snapshot.queryParamMap.get("token");
    const redirect = this._route.snapshot.queryParamMap.get("redirect") || "/chat";
    const userData = this._route.snapshot.queryParamMap.get("user");
    if (!token) {
      this.status.set("no_token");
      return;
    }
    try {
      if (!this.isValidJWT(token)) {
        throw new Error("Invalid token format");
      }
      const currentToken = localStorage.getItem("accessToken");
      if (currentToken && currentToken !== token) {
        console.log("[Bridge] New token detected, switching user context");
        this._authService.signOut(true);
      }
      localStorage.setItem("accessToken", token);
      this._authService.accessToken = token;
      if (userData) {
        try {
          const decodedUser = JSON.parse(atob(userData));
          localStorage.setItem("verifik_account", JSON.stringify(decodedUser));
          this._userService.user = decodedUser;
        } catch (e) {
          console.warn("[Bridge] Could not parse user data:", e);
        }
      }
      this.status.set("success");
      const interval = setInterval(() => {
        this.countdown.update((v) => v - 1);
        if (this.countdown() <= 0) {
          clearInterval(interval);
          this._router.navigateByUrl(redirect);
        }
      }, 800);
    } catch (error) {
      this.status.set("error");
      this.errorMessage.set(error.message || "An unexpected error occurred");
    }
  }
  isValidJWT(token) {
    const parts = token.split(".");
    if (parts.length !== 3)
      return false;
    try {
      const payload = JSON.parse(atob(parts[1]));
      if (payload.exp && payload.exp * 1e3 < Date.now()) {
        throw new Error("Token has expired");
      }
      return true;
    } catch (e) {
      return false;
    }
  }
  goToLogin() {
    window.location.href = "https://app.verifik.co/auth/sign-in";
  }
  continueWithoutAuth() {
    this._router.navigate(["/chat"]);
  }
  static {
    this.\u0275fac = function BridgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BridgeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BridgeComponent, selectors: [["app-bridge"]], decls: 25, vars: 5, consts: [[1, "min-h-screen", "bg-[#F8FAFC]", "flex", "items-center", "justify-center", "p-6", "relative", "overflow-hidden"], [1, "absolute", "inset-0", "overflow-hidden", "pointer-events-none"], [1, "absolute", "-top-[10%]", "-left-[10%]", "w-[40%]", "h-[40%]", "bg-indigo-500/5", "rounded-full", "blur-[120px]"], [1, "absolute", "-bottom-[10%]", "-right-[10%]", "w-[40%]", "h-[40%]", "bg-purple-500/5", "rounded-full", "blur-[120px]"], [1, "relative", "bg-white/80", "backdrop-blur-xl", "border", "border-white/40", "rounded-[2.5rem]", "p-12", "max-w-md", "w-full", "shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]"], [1, "flex", "flex-col", "items-center", "mb-12"], [1, "group", "relative"], [1, "absolute", "-inset-1", "bg-gradient-to-r", "from-indigo-500", "to-purple-600", "rounded-2xl", "blur", "opacity-25", "group-hover:opacity-50", "transition", "duration-1000", "group-hover:duration-200"], [1, "relative", "w-16", "h-16", "rounded-2xl", "bg-white", "flex", "items-center", "justify-center", "shadow-xl", "mb-6"], [1, "text-indigo-600", "!text-3xl", "!w-auto", "!h-auto"], [1, "text-2xl", "font-black", "text-slate-900", "tracking-tight", "mb-1"], [1, "flex", "items-center", "gap-2"], [1, "h-0.5", "w-6", "bg-indigo-500", "rounded-full"], [1, "text-[10px]", "uppercase", "font-black", "tracking-[0.3em]", "text-slate-400"], ["class", "text-center", 4, "ngIf"], [1, "absolute", "bottom-12", "left-0", "right-0", "text-center"], [1, "text-[10px]", "text-slate-400", "font-bold", "tracking-[0.3em]", "uppercase", "opacity-60"], [1, "text-center"], [1, "relative", "w-20", "h-20", "mx-auto", "mb-8"], [1, "absolute", "inset-0", "rounded-2xl", "bg-indigo-50/50", "animate-pulse"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], ["diameter", "32", "strokeWidth", "3"], [1, "text-xl", "font-bold", "text-slate-900", "mb-2"], [1, "text-slate-500", "text-sm", "leading-relaxed"], [1, "w-20", "h-20", "mx-auto", "mb-8", "rounded-full", "bg-emerald-50", "flex", "items-center", "justify-center", "shadow-inner"], [1, "text-emerald-500", "!text-4xl", "!w-auto", "!h-auto"], [1, "text-slate-500", "text-sm", "mb-10", "leading-relaxed"], [1, "inline-flex", "items-center", "gap-3", "px-6", "py-3.5", "bg-slate-50", "border", "border-slate-100", "rounded-2xl"], ["diameter", "14", "strokeWidth", "2.5"], [1, "text-xs", "font-bold", "text-slate-600", "uppercase", "tracking-widest"], [1, "w-20", "h-20", "mx-auto", "mb-8", "rounded-2xl", "bg-red-50", "flex", "items-center", "justify-center"], [1, "text-red-500", "!text-4xl", "!w-auto", "!h-auto"], ["mat-flat-button", "", 1, "w-full", "!rounded-2xl", "!py-7", "!bg-slate-900", "!text-white", "hover:!bg-slate-800", "!shadow-xl", "!shadow-slate-200/50", "transition-all", "!text-sm", "font-bold", "uppercase", "tracking-widest", 3, "click"], [1, "w-20", "h-20", "mx-auto", "mb-8", "rounded-2xl", "bg-amber-50", "flex", "items-center", "justify-center"], [1, "text-amber-500", "!text-4xl", "!w-auto", "!h-auto"], [1, "space-y-4"], ["href", "https://app.verifik.co", "target", "_blank", 1, "block", "w-full", "py-4", "bg-gradient-to-r", "from-indigo-600", "to-indigo-700", "hover:shadow-lg", "hover:shadow-indigo-200/50", "text-white", "font-bold", "rounded-2xl", "transition-all", "text-sm", "uppercase", "tracking-widest", "text-center", "shadow-md"], ["mat-button", "", 1, "w-full", "!rounded-2xl", "!py-4", "!text-slate-400", "hover:!bg-slate-50", "!text-xs", "font-bold", "uppercase", "tracking-widest", 3, "click"]], template: function BridgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275element(7, "div", 7);
        \u0275\u0275elementStart(8, "div", 8)(9, "mat-icon", 9);
        \u0275\u0275text(10, "bolt");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "h2", 10);
        \u0275\u0275text(12, " SmartCheck ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 11);
        \u0275\u0275element(14, "span", 12);
        \u0275\u0275elementStart(15, "p", 13);
        \u0275\u0275text(16, " Next Gen AI ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "span", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, BridgeComponent_div_18_Template, 9, 1, "div", 14)(19, BridgeComponent_div_19_Template, 12, 2, "div", 14)(20, BridgeComponent_div_20_Template, 10, 2, "div", 14)(21, BridgeComponent_div_21_Template, 13, 1, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15)(23, "p", 16);
        \u0275\u0275text(24, " Trusted Security by Verifik ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("@fadeInTop", void 0);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngIf", ctx.status() === "loading");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status() === "success");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status() === "error");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status() === "no_token");
      }
    }, dependencies: [CommonModule, NgIf, MatProgressSpinnerModule, MatProgressSpinner, MatIconModule, MatIcon, MatButtonModule, MatButton], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=bridge.component.css.map */"], data: { animation: [fuseAnimations] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BridgeComponent, [{
    type: Component,
    args: [{ selector: "app-bridge", standalone: true, imports: [CommonModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule], template: `
        <div
            class="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 relative overflow-hidden"
        >
            <!-- Background Decoration -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]"
                ></div>
                <div
                    class="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]"
                ></div>
            </div>

            <!-- Main Card -->
            <div
                class="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-12 max-w-md w-full shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]"
            >
                <!-- Brand Section -->
                <div class="flex flex-col items-center mb-12" [@fadeInTop]>
                    <div class="group relative">
                        <div
                            class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
                        ></div>
                        <div
                            class="relative w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl mb-6"
                        >
                            <mat-icon class="text-indigo-600 !text-3xl !w-auto !h-auto"
                                >bolt</mat-icon
                            >
                        </div>
                    </div>
                    <h2 class="text-2xl font-black text-slate-900 tracking-tight mb-1">
                        SmartCheck
                    </h2>
                    <div class="flex items-center gap-2">
                        <span class="h-0.5 w-6 bg-indigo-500 rounded-full"></span>
                        <p class="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400">
                            Next Gen AI
                        </p>
                        <span class="h-0.5 w-6 bg-indigo-500 rounded-full"></span>
                    </div>
                </div>

                <!-- Loading State -->
                <div *ngIf="status() === 'loading'" class="text-center" [@fadeIn]>
                    <div class="relative w-20 h-20 mx-auto mb-8">
                        <div
                            class="absolute inset-0 rounded-2xl bg-indigo-50/50 animate-pulse"
                        ></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <mat-spinner diameter="32" strokeWidth="3"></mat-spinner>
                        </div>
                    </div>
                    <h1 class="text-xl font-bold text-slate-900 mb-2">Connecting Account</h1>
                    <p class="text-slate-500 text-sm leading-relaxed">
                        Securing your session with Verifik services...
                    </p>
                </div>

                <!-- Success State -->
                <div *ngIf="status() === 'success'" class="text-center" [@fadeIn]>
                    <div
                        class="w-20 h-20 mx-auto mb-8 rounded-full bg-emerald-50 flex items-center justify-center shadow-inner"
                    >
                        <mat-icon class="text-emerald-500 !text-4xl !w-auto !h-auto"
                            >check</mat-icon
                        >
                    </div>
                    <h1 class="text-xl font-bold text-slate-900 mb-2">Welcome Back!</h1>
                    <p class="text-slate-500 text-sm mb-10 leading-relaxed">
                        Identity verified. Your workspace is ready.
                    </p>

                    <div
                        class="inline-flex items-center gap-3 px-6 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl"
                    >
                        <mat-spinner diameter="14" strokeWidth="2.5"></mat-spinner>
                        <span class="text-xs font-bold text-slate-600 uppercase tracking-widest"
                            >Entering in {{ countdown() }}s</span
                        >
                    </div>
                </div>

                <!-- Error State -->
                <div *ngIf="status() === 'error'" class="text-center" [@fadeIn]>
                    <div
                        class="w-20 h-20 mx-auto mb-8 rounded-2xl bg-red-50 flex items-center justify-center"
                    >
                        <mat-icon class="text-red-500 !text-4xl !w-auto !h-auto"
                            >error_outline</mat-icon
                        >
                    </div>
                    <h1 class="text-xl font-bold text-slate-900 mb-2">Auth Failed</h1>
                    <p class="text-slate-500 text-sm mb-10 leading-relaxed">{{ errorMessage() }}</p>

                    <button
                        mat-flat-button
                        (click)="goToLogin()"
                        class="w-full !rounded-2xl !py-7 !bg-slate-900 !text-white hover:!bg-slate-800 !shadow-xl !shadow-slate-200/50 transition-all !text-sm font-bold uppercase tracking-widest"
                    >
                        Go to Login
                    </button>
                </div>

                <!-- No Token State -->
                <div *ngIf="status() === 'no_token'" class="text-center" [@fadeIn]>
                    <div
                        class="w-20 h-20 mx-auto mb-8 rounded-2xl bg-amber-50 flex items-center justify-center"
                    >
                        <mat-icon class="text-amber-500 !text-4xl !w-auto !h-auto"
                            >lock_person</mat-icon
                        >
                    </div>
                    <h1 class="text-xl font-bold text-slate-900 mb-2">Access Required</h1>
                    <p class="text-slate-500 text-sm mb-10 leading-relaxed">
                        Please access SmartCheck through the Verifik platform.
                    </p>

                    <div class="space-y-4">
                        <a
                            href="https://app.verifik.co"
                            target="_blank"
                            class="block w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:shadow-lg hover:shadow-indigo-200/50 text-white font-bold rounded-2xl transition-all text-sm uppercase tracking-widest text-center shadow-md"
                        >
                            Open Verifik
                        </a>
                        <button
                            mat-button
                            (click)="continueWithoutAuth()"
                            class="w-full !rounded-2xl !py-4 !text-slate-400 hover:!bg-slate-50 !text-xs font-bold uppercase tracking-widest"
                        >
                            Continue as Guest
                        </button>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="absolute bottom-12 left-0 right-0 text-center">
                <p
                    class="text-[10px] text-slate-400 font-bold tracking-[0.3em] uppercase opacity-60"
                >
                    Trusted Security by Verifik
                </p>
            </div>
        </div>
    `, animations: [fuseAnimations], styles: ["/* angular:styles/component:scss;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/Users/miguel/Smart-Agent/frontend/src/app/modules/bridge/bridge.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=bridge.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BridgeComponent, { className: "BridgeComponent", filePath: "src/app/modules/bridge/bridge.component.ts", lineNumber: 188 });
})();

// src/app/modules/bridge/bridge.routes.ts
var bridge_routes_default = [
  {
    path: "",
    component: BridgeComponent
  }
];
export {
  bridge_routes_default as default
};
//# sourceMappingURL=chunk-KOZK5WXS.js.map
