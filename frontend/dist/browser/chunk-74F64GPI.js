import {
  SmartAccessProjectsService
} from "./chunk-KDNTWA3U.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import {
  MatButtonModule,
  MatIconButton
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-HYFP557I.js";
import "./chunk-PMCYMBOC.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PNPEHISK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-access/projects/access-login-detail/access-login-detail.component.ts
var _c0 = (a0) => ["/smart-access/projects", a0];
var _c1 = (a0) => ["/smart-access/projects", a0, "records"];
function AccessLoginDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 3);
    \u0275\u0275elementEnd();
  }
}
function AccessLoginDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.error()));
  }
}
function AccessLoginDetailComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 4)(1, "a", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 6);
    \u0275\u0275text(14, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 8);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 6);
    \u0275\u0275text(19, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 9);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 10)(23, "button", 11);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275listener("click", function AccessLoginDetailComponent_Conditional_3_Conditional_0_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "h1", 12);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 13);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 14)(34, "div", 15)(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 15)(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 15)(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "strong");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 15)(53, "span");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_18_0;
    let tmp_20_0;
    const r_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 18, "smartAccessProjects.detail.breadcrumbBrand"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 20, "smartAccessProjects.title"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(36, _c0, ctx_r0.projectId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.projectName || ctx_r0.projectId);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(38, _c1, ctx_r0.projectId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 22, "smartAccessProjects.recordsTitle"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r3._id);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 24, "smartAccessProjects.backToProject"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 26, "smartAccessProjects.loginDetail.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_12_0 = r_r3.status) !== null && tmp_12_0 !== void 0 ? tmp_12_0 : "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 28, "smartAccessProjects.colName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_14_0 = r_r3.name) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 30, "smartAccessProjects.colEmail"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_16_0 = r_r3.email) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 32, "smartAccessProjects.colPhone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_18_0 = r_r3.phone) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 34, "smartAccessProjects.colCreated"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_20_0 = r_r3.createdAt) !== null && tmp_20_0 !== void 0 ? tmp_20_0 : "\u2014");
  }
}
function AccessLoginDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AccessLoginDetailComponent_Conditional_3_Conditional_0_Template, 58, 40);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.row()) ? 0 : -1, tmp_1_0);
  }
}
var AccessLoginDetailComponent = class _AccessLoginDetailComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._projectsService = inject(SmartAccessProjectsService);
    this.loading = signal(true);
    this.error = signal(null);
    this.row = signal(null);
    this.projectId = "";
    this.projectName = "";
  }
  ngOnInit() {
    this.projectId = this._route.snapshot.paramMap.get("projectId") ?? "";
    const loginId = this._route.snapshot.paramMap.get("loginId");
    if (!this.projectId || !loginId) {
      void this._router.navigate(["/smart-access/projects"]);
      return;
    }
    this._projectsService.getProject(this.projectId).subscribe({
      next: (p) => {
        this.projectName = p?.name ?? "";
      }
    });
    this._projectsService.getAppLogin(loginId).subscribe({
      next: (r) => {
        if (!r)
          this.error.set("smartAccessProjects.projectNotFound");
        this.row.set(r);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("smartAccessProjects.recordsLoadError");
        this.loading.set(false);
      }
    });
  }
  back() {
    void this._router.navigate(["/smart-access/projects", this.projectId, "records"]);
  }
  static {
    this.\u0275fac = function AccessLoginDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccessLoginDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessLoginDetailComponent, selectors: [["smart-access-login-detail"]], decls: 4, vars: 1, consts: [[1, "wrap"], [1, "state"], [1, "err"], ["diameter", "36"], [1, "breadcrumb"], ["routerLink", "/chat", 1, "crumb"], [1, "slash"], ["routerLink", "/smart-access/projects", 1, "crumb"], [1, "crumb", 3, "routerLink"], [1, "leaf"], [1, "head"], ["mat-icon-button", "", "type", "button", 3, "click"], [1, "page-title"], [1, "status-line"], [1, "detail-card"], [1, "row"]], template: function AccessLoginDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AccessLoginDetailComponent_Conditional_1_Template, 2, 0, "div", 1)(2, AccessLoginDetailComponent_Conditional_2_Template, 3, 3, "div", 2)(3, AccessLoginDetailComponent_Conditional_3_Template, 1, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 1 : ctx.error() ? 2 : 3);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, MatButtonModule, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, TranslocoModule, TranslocoPipe], styles: ["\n\n.wrap[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.25rem 2.5rem;\n  max-width: 48rem;\n  margin: 0 auto;\n}\n.state[_ngcontent-%COMP%] {\n  padding: 3rem;\n  display: flex;\n  justify-content: center;\n}\n.err[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(127, 29, 29);\n  padding: 0.85rem 1rem;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.35rem;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n.slash[_ngcontent-%COMP%] {\n  color: rgb(203, 213, 225);\n}\n.crumb[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n  cursor: pointer;\n}\n.leaf[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n  word-break: break-all;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 650;\n}\n.status-line[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: rgb(100, 116, 139);\n}\n.detail-card[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid rgb(243, 244, 246);\n  font-size: 0.9rem;\n  color: rgb(71, 85, 105);\n}\n.row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: rgb(17, 24, 39);\n  font-weight: 600;\n}\n/*# sourceMappingURL=access-login-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessLoginDetailComponent, [{
    type: Component,
    args: [{ selector: "smart-access-login-detail", standalone: true, imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule], template: `
        <div class="wrap">
            @if (loading()) {
                <div class="state"><mat-spinner diameter="36"></mat-spinner></div>
            } @else if (error()) {
                <div class="err">{{ error()! | transloco }}</div>
            } @else {
                @if (row(); as r) {
                    <nav class="breadcrumb">
                        <a routerLink="/chat" class="crumb">{{ 'smartAccessProjects.detail.breadcrumbBrand' | transloco }}</a>
                        <span class="slash">/</span>
                        <a routerLink="/smart-access/projects" class="crumb">{{ 'smartAccessProjects.title' | transloco }}</a>
                        <span class="slash">/</span>
                        <a [routerLink]="['/smart-access/projects', projectId]" class="crumb">{{ projectName || projectId }}</a>
                        <span class="slash">/</span>
                        <a [routerLink]="['/smart-access/projects', projectId, 'records']" class="crumb">{{ 'smartAccessProjects.recordsTitle' | transloco }}</a>
                        <span class="slash">/</span>
                        <span class="leaf">{{ r._id }}</span>
                    </nav>
                    <div class="head">
                        <button mat-icon-button type="button" (click)="back()" [attr.aria-label]="'smartAccessProjects.backToProject' | transloco">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <div>
                            <h1 class="page-title">{{ 'smartAccessProjects.loginDetail.title' | transloco }}</h1>
                            <p class="status-line">{{ r.status ?? '\u2014' }}</p>
                        </div>
                    </div>
                    <div class="detail-card">
                        <div class="row"><span>{{ 'smartAccessProjects.colName' | transloco }}</span><strong>{{ r.name ?? '\u2014' }}</strong></div>
                        <div class="row"><span>{{ 'smartAccessProjects.colEmail' | transloco }}</span><strong>{{ r.email ?? '\u2014' }}</strong></div>
                        <div class="row"><span>{{ 'smartAccessProjects.colPhone' | transloco }}</span><strong>{{ r.phone ?? '\u2014' }}</strong></div>
                        <div class="row"><span>{{ 'smartAccessProjects.colCreated' | transloco }}</span><strong>{{ r.createdAt ?? '\u2014' }}</strong></div>
                    </div>
                }
            }
        </div>
    `, styles: ["/* angular:styles/component:scss;5a45564fd0d4228bb5003cf9038012f14446c0f73d0fd8ee0d0744dfea083a78;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/smart-access/projects/access-login-detail/access-login-detail.component.ts */\n.wrap {\n  padding: 1.5rem 1.25rem 2.5rem;\n  max-width: 48rem;\n  margin: 0 auto;\n}\n.state {\n  padding: 3rem;\n  display: flex;\n  justify-content: center;\n}\n.err {\n  border-radius: 12px;\n  border: 1px solid rgb(254, 202, 202);\n  background: rgb(254, 242, 242);\n  color: rgb(127, 29, 29);\n  padding: 0.85rem 1rem;\n}\n.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.35rem;\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: rgb(100, 116, 139);\n}\n.slash {\n  color: rgb(203, 213, 225);\n}\n.crumb {\n  color: inherit;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n  cursor: pointer;\n}\n.leaf {\n  font-weight: 600;\n  color: rgb(15, 23, 42);\n  word-break: break-all;\n}\n.head {\n  display: flex;\n  gap: 0.5rem;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.page-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 650;\n}\n.status-line {\n  margin: 0.35rem 0 0;\n  color: rgb(100, 116, 139);\n}\n.detail-card {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n}\n.row {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid rgb(243, 244, 246);\n  font-size: 0.9rem;\n  color: rgb(71, 85, 105);\n}\n.row:last-child {\n  border-bottom: none;\n}\n.row strong {\n  color: rgb(17, 24, 39);\n  font-weight: 600;\n}\n/*# sourceMappingURL=access-login-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessLoginDetailComponent, { className: "AccessLoginDetailComponent", filePath: "src/app/modules/smart-access/projects/access-login-detail/access-login-detail.component.ts", lineNumber: 134 });
})();
export {
  AccessLoginDetailComponent
};
//# sourceMappingURL=chunk-74F64GPI.js.map
