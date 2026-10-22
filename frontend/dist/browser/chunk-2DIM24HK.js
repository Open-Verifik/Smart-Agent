import {
  MatDialogModule,
  MatDialogRef
} from "./chunk-HVUVGZ2L.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-5HABGTLH.js";
import {
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
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-FWBWCXY5.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YWP2Y7QK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/layout/common/identity-verification-info-modal/identity-verification-info-modal.component.ts
var IdentityVerificationInfoModalComponent = class _IdentityVerificationInfoModalComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
  }
  close() {
    this._dialogRef.close();
  }
  verify() {
    this._dialogRef.close("verify");
  }
  static {
    this.\u0275fac = function IdentityVerificationInfoModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdentityVerificationInfoModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IdentityVerificationInfoModalComponent, selectors: [["identity-verification-info-modal"]], decls: 77, vars: 42, consts: [[1, "identity-modal"], ["mat-icon-button", "", "type", "button", 1, "identity-modal__close", 3, "click"], [1, "identity-modal__header"], ["aria-hidden", "true", 1, "identity-modal__art"], ["viewBox", "0 0 88 64", "fill", "none"], ["x", "8", "y", "22", "width", "56", "height", "32", "rx", "6", "transform", "rotate(-8 36 38)", 1, "identity-modal__slab"], ["x", "12", "y", "18", "width", "50", "height", "28", "rx", "5", "transform", "rotate(-8 37 32)", 1, "identity-modal__slab-face"], ["cx", "58", "cy", "18", "r", "12", 1, "identity-modal__badge"], ["d", "M53 18.2l3.4 3.4 7.2-7.4", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "identity-modal__check"], [1, "identity-modal__title"], [1, "identity-modal__subtitle"], [1, "identity-modal__reasons"], [1, "identity-modal__reason"], ["aria-hidden", "true", 1, "identity-modal__icon"], ["mat-flat-button", "", "type", "button", 1, "identity-modal__cta", 3, "click"]], template: function IdentityVerificationInfoModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275pipe(2, "transloco");
        \u0275\u0275listener("click", function IdentityVerificationInfoModalComponent_Template_button_click_1_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 2)(6, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 4);
        \u0275\u0275element(8, "rect", 5)(9, "rect", 6)(10, "circle", 7)(11, "path", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "h2", 9);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 10);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "ul", 11)(19, "li", 12)(20, "span", 13)(21, "mat-icon");
        \u0275\u0275text(22, "shield");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div")(24, "h3");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "li", 12)(31, "span", 13)(32, "mat-icon");
        \u0275\u0275text(33, "assignment_ind");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div")(35, "h3");
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "li", 12)(42, "span", 13)(43, "mat-icon");
        \u0275\u0275text(44, "folder_shared");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div")(46, "h3");
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "li", 12)(53, "span", 13)(54, "mat-icon");
        \u0275\u0275text(55, "rocket_launch");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div")(57, "h3");
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "p");
        \u0275\u0275text(61);
        \u0275\u0275pipe(62, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "li", 12)(64, "span", 13)(65, "mat-icon");
        \u0275\u0275text(66, "payments");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div")(68, "h3");
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "p");
        \u0275\u0275text(72);
        \u0275\u0275pipe(73, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(74, "button", 14);
        \u0275\u0275listener("click", function IdentityVerificationInfoModalComponent_Template_button_click_74_listener() {
          return ctx.verify();
        });
        \u0275\u0275text(75);
        \u0275\u0275pipe(76, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 14, "accountEnv.identityVerificationModal.cancel"));
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 16, "accountEnv.identityVerificationModal.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 18, "accountEnv.identityVerificationModal.subtitle"), " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 20, "accountEnv.identityVerificationModal.reason5_title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 22, "accountEnv.identityVerificationModal.reason5_desc"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 24, "accountEnv.identityVerificationModal.reason1_title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 26, "accountEnv.identityVerificationModal.reason1_desc"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 28, "accountEnv.identityVerificationModal.reason2_title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 30, "accountEnv.identityVerificationModal.reason2_desc"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 32, "accountEnv.identityVerificationModal.reason3_title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 34, "accountEnv.identityVerificationModal.reason3_desc"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 36, "accountEnv.identityVerificationModal.reason4_title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 38, "accountEnv.identityVerificationModal.reason4_desc"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 40, "accountEnv.identityVerificationModal.cta"), " ");
      }
    }, dependencies: [CommonModule, MatDialogModule, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n.identity-modal[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.identity-modal__close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  color: rgb(148, 163, 184);\n}\n.identity-modal__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.identity-modal__art[_ngcontent-%COMP%] {\n  width: 88px;\n  margin-bottom: 0.75rem;\n}\n.identity-modal__art[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.identity-modal__slab[_ngcontent-%COMP%] {\n  fill: rgba(59, 130, 246, 0.16);\n}\n.identity-modal__slab-face[_ngcontent-%COMP%] {\n  fill: rgb(255, 255, 255);\n  stroke: rgba(148, 163, 184, 0.45);\n}\n.identity-modal__badge[_ngcontent-%COMP%] {\n  fill: rgb(37, 99, 235);\n}\n.identity-modal__check[_ngcontent-%COMP%] {\n  stroke: rgb(255, 255, 255);\n  fill: none;\n}\n.identity-modal__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  line-height: 1.3;\n  color: rgb(15, 23, 42);\n}\n.identity-modal__subtitle[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  max-width: 22rem;\n  font-size: 0.8125rem;\n  line-height: 1.55;\n  color: rgb(71, 85, 105);\n}\n.identity-modal__reasons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: 0 0 1.5rem;\n  padding: 0;\n  list-style: none;\n}\n.identity-modal__reason[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n  padding: 0.65rem 0.5rem;\n  border-radius: 12px;\n}\n.identity-modal__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  flex-shrink: 0;\n  border-radius: 0.65rem;\n  background: rgb(255, 255, 255);\n  color: rgb(15, 23, 42);\n  border: 1px solid rgba(148, 163, 184, 0.28);\n}\n.identity-modal__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n.identity-modal__reason[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n}\n.identity-modal__reason[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  font-size: 0.75rem;\n  line-height: 1.45;\n  color: rgb(71, 85, 105);\n}\n.identity-modal__cta[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0.75rem !important;\n  background: rgb(15, 23, 42) !important;\n  color: rgb(255, 255, 255) !important;\n  font-weight: 600 !important;\n  height: 2.75rem !important;\n}\n.dark[_nghost-%COMP%]   .identity-modal__slab[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .identity-modal__slab[_ngcontent-%COMP%] {\n  fill: rgba(96, 165, 250, 0.22);\n}\n.dark[_nghost-%COMP%]   .identity-modal__slab-face[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .identity-modal__slab-face[_ngcontent-%COMP%] {\n  fill: rgb(51, 65, 85);\n  stroke: rgba(148, 163, 184, 0.35);\n}\n.dark[_nghost-%COMP%]   .identity-modal__badge[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .identity-modal__badge[_ngcontent-%COMP%] {\n  fill: rgb(96, 165, 250);\n}\n.dark[_nghost-%COMP%]   .identity-modal__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .identity-modal__title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .identity-modal__reason[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .identity-modal__reason[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: rgb(248, 250, 252);\n}\n.dark[_nghost-%COMP%]   .identity-modal__subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .identity-modal__subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .identity-modal__reason[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .identity-modal__reason[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.dark[_nghost-%COMP%]   .identity-modal__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .identity-modal__icon[_ngcontent-%COMP%] {\n  background: rgb(15, 23, 42);\n  color: rgb(226, 232, 240);\n  border-color: rgba(148, 163, 184, 0.22);\n}\n.dark[_nghost-%COMP%]   .identity-modal__cta[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .identity-modal__cta[_ngcontent-%COMP%] {\n  background: rgb(226, 232, 240) !important;\n  color: rgb(15, 23, 42) !important;\n}\n/*# sourceMappingURL=identity-verification-info-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityVerificationInfoModalComponent, [{
    type: Component,
    args: [{ selector: "identity-verification-info-modal", standalone: true, imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule], template: `
        <div class="identity-modal">
            <button
                mat-icon-button
                type="button"
                (click)="close()"
                class="identity-modal__close"
                [attr.aria-label]="'accountEnv.identityVerificationModal.cancel' | transloco"
            >
                <mat-icon>close</mat-icon>
            </button>

            <div class="identity-modal__header">
                <div class="identity-modal__art" aria-hidden="true">
                    <svg viewBox="0 0 88 64" fill="none">
                        <rect class="identity-modal__slab" x="8" y="22" width="56" height="32" rx="6" transform="rotate(-8 36 38)" />
                        <rect class="identity-modal__slab-face" x="12" y="18" width="50" height="28" rx="5" transform="rotate(-8 37 32)" />
                        <circle class="identity-modal__badge" cx="58" cy="18" r="12" />
                        <path
                            class="identity-modal__check"
                            d="M53 18.2l3.4 3.4 7.2-7.4"
                            stroke-width="2.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <h2 class="identity-modal__title">
                    {{ 'accountEnv.identityVerificationModal.title' | transloco }}
                </h2>
                <p class="identity-modal__subtitle">
                    {{ 'accountEnv.identityVerificationModal.subtitle' | transloco }}
                </p>
            </div>

            <ul class="identity-modal__reasons">
                <li class="identity-modal__reason">
                    <span class="identity-modal__icon" aria-hidden="true">
                        <mat-icon>shield</mat-icon>
                    </span>
                    <div>
                        <h3>{{ 'accountEnv.identityVerificationModal.reason5_title' | transloco }}</h3>
                        <p>{{ 'accountEnv.identityVerificationModal.reason5_desc' | transloco }}</p>
                    </div>
                </li>
                <li class="identity-modal__reason">
                    <span class="identity-modal__icon" aria-hidden="true">
                        <mat-icon>assignment_ind</mat-icon>
                    </span>
                    <div>
                        <h3>{{ 'accountEnv.identityVerificationModal.reason1_title' | transloco }}</h3>
                        <p>{{ 'accountEnv.identityVerificationModal.reason1_desc' | transloco }}</p>
                    </div>
                </li>
                <li class="identity-modal__reason">
                    <span class="identity-modal__icon" aria-hidden="true">
                        <mat-icon>folder_shared</mat-icon>
                    </span>
                    <div>
                        <h3>{{ 'accountEnv.identityVerificationModal.reason2_title' | transloco }}</h3>
                        <p>{{ 'accountEnv.identityVerificationModal.reason2_desc' | transloco }}</p>
                    </div>
                </li>
                <li class="identity-modal__reason">
                    <span class="identity-modal__icon" aria-hidden="true">
                        <mat-icon>rocket_launch</mat-icon>
                    </span>
                    <div>
                        <h3>{{ 'accountEnv.identityVerificationModal.reason3_title' | transloco }}</h3>
                        <p>{{ 'accountEnv.identityVerificationModal.reason3_desc' | transloco }}</p>
                    </div>
                </li>
                <li class="identity-modal__reason">
                    <span class="identity-modal__icon" aria-hidden="true">
                        <mat-icon>payments</mat-icon>
                    </span>
                    <div>
                        <h3>{{ 'accountEnv.identityVerificationModal.reason4_title' | transloco }}</h3>
                        <p>{{ 'accountEnv.identityVerificationModal.reason4_desc' | transloco }}</p>
                    </div>
                </li>
            </ul>

            <button mat-flat-button type="button" class="identity-modal__cta" (click)="verify()">
                {{ 'accountEnv.identityVerificationModal.cta' | transloco }}
            </button>
        </div>
    `, styles: ["/* angular:styles/component:scss;4aa2a6733c40994437f7034c789c72300e154426707ac97b65c2748bd73c1cb7;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/layout/common/identity-verification-info-modal/identity-verification-info-modal.component.ts */\n:host {\n  display: block;\n  position: relative;\n}\n.identity-modal {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.identity-modal__close {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  color: rgb(148, 163, 184);\n}\n.identity-modal__header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.identity-modal__art {\n  width: 88px;\n  margin-bottom: 0.75rem;\n}\n.identity-modal__art svg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.identity-modal__slab {\n  fill: rgba(59, 130, 246, 0.16);\n}\n.identity-modal__slab-face {\n  fill: rgb(255, 255, 255);\n  stroke: rgba(148, 163, 184, 0.45);\n}\n.identity-modal__badge {\n  fill: rgb(37, 99, 235);\n}\n.identity-modal__check {\n  stroke: rgb(255, 255, 255);\n  fill: none;\n}\n.identity-modal__title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  line-height: 1.3;\n  color: rgb(15, 23, 42);\n}\n.identity-modal__subtitle {\n  margin: 0.5rem 0 0;\n  max-width: 22rem;\n  font-size: 0.8125rem;\n  line-height: 1.55;\n  color: rgb(71, 85, 105);\n}\n.identity-modal__reasons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: 0 0 1.5rem;\n  padding: 0;\n  list-style: none;\n}\n.identity-modal__reason {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n  padding: 0.65rem 0.5rem;\n  border-radius: 12px;\n}\n.identity-modal__icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  flex-shrink: 0;\n  border-radius: 0.65rem;\n  background: rgb(255, 255, 255);\n  color: rgb(15, 23, 42);\n  border: 1px solid rgba(148, 163, 184, 0.28);\n}\n.identity-modal__icon mat-icon {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n.identity-modal__reason h3 {\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n}\n.identity-modal__reason p {\n  margin: 0.15rem 0 0;\n  font-size: 0.75rem;\n  line-height: 1.45;\n  color: rgb(71, 85, 105);\n}\n.identity-modal__cta {\n  width: 100%;\n  border-radius: 0.75rem !important;\n  background: rgb(15, 23, 42) !important;\n  color: rgb(255, 255, 255) !important;\n  font-weight: 600 !important;\n  height: 2.75rem !important;\n}\n:host-context(.dark) .identity-modal__slab {\n  fill: rgba(96, 165, 250, 0.22);\n}\n:host-context(.dark) .identity-modal__slab-face {\n  fill: rgb(51, 65, 85);\n  stroke: rgba(148, 163, 184, 0.35);\n}\n:host-context(.dark) .identity-modal__badge {\n  fill: rgb(96, 165, 250);\n}\n:host-context(.dark) .identity-modal__title,\n:host-context(.dark) .identity-modal__reason h3 {\n  color: rgb(248, 250, 252);\n}\n:host-context(.dark) .identity-modal__subtitle,\n:host-context(.dark) .identity-modal__reason p {\n  color: rgb(203, 213, 225);\n}\n:host-context(.dark) .identity-modal__icon {\n  background: rgb(15, 23, 42);\n  color: rgb(226, 232, 240);\n  border-color: rgba(148, 163, 184, 0.22);\n}\n:host-context(.dark) .identity-modal__cta {\n  background: rgb(226, 232, 240) !important;\n  color: rgb(15, 23, 42) !important;\n}\n/*# sourceMappingURL=identity-verification-info-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IdentityVerificationInfoModalComponent, { className: "IdentityVerificationInfoModalComponent", filePath: "src/app/layout/common/identity-verification-info-modal/identity-verification-info-modal.component.ts", lineNumber: 270 });
})();
export {
  IdentityVerificationInfoModalComponent
};
//# sourceMappingURL=chunk-2DIM24HK.js.map
