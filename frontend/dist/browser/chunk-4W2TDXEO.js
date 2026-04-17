import {
  MatChipsModule
} from "./chunk-7S2EHCDW.js";
import {
  SmartScanService
} from "./chunk-FS2ZUC6W.js";
import "./chunk-MJXNRHWH.js";
import "./chunk-346ISJSG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-HZKTYM3F.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  Router,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import {
  MatSelectModule
} from "./chunk-AY2HQ4EH.js";
import "./chunk-SYP4RNRN.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-3YVZWUPK.js";
import "./chunk-L4JZMXIC.js";
import "./chunk-2W5F3UIW.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TX3AVWPC.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
import "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  JsonPipe,
  LowerCasePipe,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgClass,
  ViewChild,
  inject,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YTOBX75K.js";
import {
  __async
} from "./chunk-KTESVR3Q.js";

// src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool.component.ts
var _c0 = ["frontInput"];
var _c1 = ["backInput"];
var _c2 = (a0, a1, a2) => ({ "scan-tool-steps__item--current": a0, "scan-tool-steps__item--done": a1, "scan-tool-steps__item--todo": a2 });
var _c3 = (a0, a1) => ({ "bg-emerald-50/80 dark:bg-emerald-950/30": a0, "bg-amber-50/80 dark:bg-amber-950/30": a1 });
var _c4 = (a0, a1) => ({ "text-emerald-600 dark:text-emerald-400": a0, "text-amber-600 dark:text-amber-400": a1 });
var _c5 = (a0, a1) => ({ "text-emerald-900 dark:text-emerald-200": a0, "text-amber-900 dark:text-amber-200": a1 });
var _c6 = (a0, a1) => ({ "border-emerald-300 bg-emerald-100/80 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-100": a0, "border-amber-300 bg-amber-100/80 text-amber-900 dark:border-amber-800 dark:bg-amber-900/40 dark:text-amber-100": a1 });
var _c7 = (a0, a1, a2) => ({ "bg-emerald-500": a0, "bg-amber-500": a1, "bg-red-500": a2 });
var _c8 = (a0, a1, a2) => ({ "text-emerald-800 dark:text-emerald-300": a0, "text-amber-800 dark:text-amber-300": a1, "text-red-800 dark:text-red-300": a2 });
var _c9 = (a0, a1) => ({ "border-emerald-200/80 hover:bg-emerald-100/40 dark:border-emerald-900/40 dark:hover:bg-emerald-900/20": a0, "border-amber-200/80 hover:bg-amber-100/40 dark:border-amber-900/40 dark:hover:bg-amber-900/20": a1 });
var _c10 = (a0) => ({ "rotate-90": a0 });
var _c11 = (a0) => ({ "bg-stone-50/80 dark:bg-gray-800/40": a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item._id;
var _forTrack2 = ($index, $item) => $item.mapKey;
var _forTrack3 = ($index, $item) => $item.key;
function ScanToolComponent_For_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
}
function ScanToolComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanToolComponent_For_20_Conditional_0_Template, 1, 0, "span", 15);
    \u0275\u0275elementStart(1, "span", 16)(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const \u0275$index_31_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(\u0275$index_31_r2 > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c2, ctx_r2.isFlowStepCurrent(s_r1.id), ctx_r2.isFlowStepDone(s_r1.id), !ctx_r2.isFlowStepCurrent(s_r1.id) && !ctx_r2.isFlowStepDone(s_r1.id)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_31_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, s_r1.labelKey));
  }
}
function ScanToolComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMessage, " ");
  }
}
function ScanToolComponent_Conditional_22_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_22_For_13_Template_button_click_0_listener() {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleCountry(c_r6));
    });
    \u0275\u0275elementStart(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("scan-tool-pill--active", ctx_r2.selectedCountry === c_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getFlag(c_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCountryLabel(c_r6));
  }
}
function ScanToolComponent_Conditional_22_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_22_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.searchQuery = "");
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ScanToolComponent_Conditional_22_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_22_For_27_Template_button_click_0_listener() {
      const cat_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleCategory(cat_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("scan-tool-chip--active", ctx_r2.selectedCategory === cat_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getCategoryLabel(cat_r9), " ");
  }
}
function ScanToolComponent_Conditional_22_Conditional_36_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 41);
  }
  if (rf & 2) {
    const dt_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", dt_r11.backImage, \u0275\u0275sanitizeUrl)("alt", dt_r11.name + " (back)");
  }
}
function ScanToolComponent_Conditional_22_Conditional_36_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 41);
  }
  if (rf & 2) {
    const dt_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", dt_r11.frontImage, \u0275\u0275sanitizeUrl)("alt", dt_r11.name);
  }
}
function ScanToolComponent_Conditional_22_Conditional_36_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "mat-icon", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:identification");
  }
}
function ScanToolComponent_Conditional_22_Conditional_36_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_22_Conditional_36_For_2_Conditional_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const dt_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.flipCard(dt_r11._id, $event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dt_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", ctx_r2.flippedCardId === dt_r11._id ? "Show front" : "Show back");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.flippedCardId === dt_r11._id ? "flip_to_front" : "flip");
  }
}
function ScanToolComponent_Conditional_22_Conditional_36_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_22_Conditional_36_For_2_Template_div_click_0_listener() {
      const dt_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectDocumentType(dt_r11));
    });
    \u0275\u0275elementStart(1, "div", 39)(2, "div", 40);
    \u0275\u0275template(3, ScanToolComponent_Conditional_22_Conditional_36_For_2_Conditional_3_Template, 1, 2, "img", 41)(4, ScanToolComponent_Conditional_22_Conditional_36_For_2_Conditional_4_Template, 1, 2, "img", 41)(5, ScanToolComponent_Conditional_22_Conditional_36_For_2_Conditional_5_Template, 2, 1, "div", 42)(6, ScanToolComponent_Conditional_22_Conditional_36_For_2_Conditional_6_Template, 3, 2, "button", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 44)(8, "div", 45)(9, "span", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 48)(14, "span", 35);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const dt_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.flippedCardId === dt_r11._id && dt_r11.backImage ? 3 : dt_r11.frontImage ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(dt_r11.backImage ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(dt_r11.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", dt_r11.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getFlag(dt_r11.country));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCountryLabel(dt_r11.country));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryLabel(dt_r11.category));
  }
}
function ScanToolComponent_Conditional_22_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275repeaterCreate(1, ScanToolComponent_Conditional_22_Conditional_36_For_2_Template, 22, 7, "div", 37, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredDocumentTypes);
  }
}
function ScanToolComponent_Conditional_22_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "mat-icon", 52);
    \u0275\u0275elementStart(2, "p", 53);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:document-magnifying-glass");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartScan.noDocTypes"), " ");
  }
}
function ScanToolComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 19)(2, "div")(3, "h3", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21)(7, "button", 22);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_22_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedCountry = "");
    });
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9, "\u{1F30D}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, ScanToolComponent_Conditional_22_For_13_Template, 5, 4, "button", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "mat-form-field", 25)(16, "mat-icon", 26);
    \u0275\u0275text(17, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 27);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function ScanToolComponent_Conditional_22_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ScanToolComponent_Conditional_22_Conditional_20_Template, 3, 0, "button", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "div", 21)(23, "button", 29);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_22_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedCategory = "");
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, ScanToolComponent_Conditional_22_For_27_Template, 2, 3, "button", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 31)(29, "h4", 20);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 32);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275pipe(35, "lowercase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ScanToolComponent_Conditional_22_Conditional_36_Template, 3, 0, "div", 33)(37, ScanToolComponent_Conditional_22_Conditional_37_Template, 5, 4, "div", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 14, "smartScan.selectCountry"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("scan-tool-pill--active", !ctx_r2.selectedCountry);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 16, "smartScan.allCountries"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.countries);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchQuery);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 18, "smartScan.searchPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.searchQuery ? 20 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("scan-tool-chip--active", !ctx_r2.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 20, "smartScan.allCategories"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.categories);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 22, "smartScan.selectDocumentType"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r2.filteredDocumentTypes.length, " ", \u0275\u0275pipeBind1(35, 26, \u0275\u0275pipeBind1(34, 24, "smartScan.results")), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.filteredDocumentTypes.length > 0 ? 36 : 37);
  }
}
function ScanToolComponent_Conditional_23_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59)(1, "mat-icon", 69);
    \u0275\u0275text(2, "flip");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartScan.requiresBackSide"), " ");
  }
}
function ScanToolComponent_Conditional_23_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "img", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.selectedDocType().frontImage, \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedDocType().name);
  }
}
function ScanToolComponent_Conditional_23_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span", 71);
    \u0275\u0275text(2, "Front side preview not available");
    \u0275\u0275elementEnd()();
  }
}
function ScanToolComponent_Conditional_23_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "img", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.selectedDocType().backImage, \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedDocType().name + " (back)");
  }
}
function ScanToolComponent_Conditional_23_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 71);
    \u0275\u0275text(2, "Back side preview not available");
    \u0275\u0275elementEnd()();
  }
}
function ScanToolComponent_Conditional_23_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanToolComponent_Conditional_23_Conditional_21_Conditional_0_Template, 2, 2, "div", 63)(1, ScanToolComponent_Conditional_23_Conditional_21_Conditional_1_Template, 3, 0, "div", 72);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.selectedDocType().backImage ? 0 : 1);
  }
}
function ScanToolComponent_Conditional_23_Conditional_23_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73)(1, "mat-icon", 74);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r14 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r14.name, " ");
  }
}
function ScanToolComponent_Conditional_23_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275repeaterCreate(4, ScanToolComponent_Conditional_23_Conditional_23_For_5_Template, 4, 1, "span", 73, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.extractableFields"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.selectedTemplateFields);
  }
}
function ScanToolComponent_Conditional_23_Conditional_24_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73)(1, "mat-icon", 74);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r15.name, " ");
  }
}
function ScanToolComponent_Conditional_23_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 75);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275repeaterCreate(4, ScanToolComponent_Conditional_23_Conditional_24_For_5_Template, 4, 1, "span", 73, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.backSideFields"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.selectedTemplateBackFields);
  }
}
function ScanToolComponent_Conditional_23_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "mat-icon", 76);
    \u0275\u0275text(2, "list_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 71);
    \u0275\u0275text(4, " Field definitions will be available after scanning. ");
    \u0275\u0275elementEnd()();
  }
}
function ScanToolComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 19)(2, "div", 54)(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55)(6, "p", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 58);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_23_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.backToSelect());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, ScanToolComponent_Conditional_23_Conditional_13_Template, 5, 3, "span", 59);
    \u0275\u0275elementStart(14, "div", 60)(15, "div", 61)(16, "h4", 62);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ScanToolComponent_Conditional_23_Conditional_19_Template, 2, 2, "div", 63)(20, ScanToolComponent_Conditional_23_Conditional_20_Template, 3, 0, "div", 64)(21, ScanToolComponent_Conditional_23_Conditional_21_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 61);
    \u0275\u0275template(23, ScanToolComponent_Conditional_23_Conditional_23_Template, 6, 3)(24, ScanToolComponent_Conditional_23_Conditional_24_Template, 6, 3)(25, ScanToolComponent_Conditional_23_Conditional_25_Template, 5, 0, "div", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 66)(27, "button", 67);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_23_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.proceedToUpload());
    });
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementStart(30, "mat-icon", 68);
    \u0275\u0275text(31, "arrow_forward");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getFlag(ctx_r2.selectedDocType().country));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r2.selectedDocType().code, " \u2014 ", ctx_r2.selectedDocType().name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r2.getCountryLabel(ctx_r2.selectedDocType().country), " \xB7 ", ctx_r2.getCategoryLabel(ctx_r2.selectedDocType().category), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 14, "smartScan.changeDocument"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.requiresBackSide ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 16, "smartScan.previewTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedDocType().frontImage ? 19 : 20);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.requiresBackSide ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedTemplateFields.length > 0 ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedTemplateBackFields.length > 0 ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedTemplateFields.length === 0 && ctx_r2.selectedTemplateBackFields.length === 0 ? 25 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 18, "smartScan.proceedToScan"), " ");
  }
}
function ScanToolComponent_Conditional_24_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "img", 84);
    \u0275\u0275elementStart(2, "div", 55)(3, "p", 85);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 86);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_24_Conditional_20_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.triggerFrontInput();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.frontUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.frontFile == null ? null : ctx_r2.frontFile.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "smartReduce.changeImage"), " ");
  }
}
function ScanToolComponent_Conditional_24_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "mat-icon", 87);
    \u0275\u0275text(2, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 88);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 89);
    \u0275\u0275text(7, " JPG, JPEG, PNG ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "smartScan.dropZone"), " ");
  }
}
function ScanToolComponent_Conditional_24_Conditional_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "img", 91);
    \u0275\u0275elementStart(2, "div", 55)(3, "p", 85);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 86);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_24_Conditional_22_Conditional_7_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.triggerBackInput();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.backUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.backFile == null ? null : ctx_r2.backFile.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "smartReduce.changeImage"), " ");
  }
}
function ScanToolComponent_Conditional_24_Conditional_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "mat-icon", 92);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 93);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "smartScan.dropZone"), " ");
  }
}
function ScanToolComponent_Conditional_24_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h4", 77);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 78);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_24_Conditional_22_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.triggerBackInput());
    })("drop", function ScanToolComponent_Conditional_24_Conditional_22_Template_div_drop_4_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDropBack($event));
    })("dragover", function ScanToolComponent_Conditional_24_Conditional_22_Template_div_dragover_4_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDragOver($event));
    });
    \u0275\u0275elementStart(5, "input", 79, 1);
    \u0275\u0275listener("change", function ScanToolComponent_Conditional_24_Conditional_22_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onBackSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ScanToolComponent_Conditional_24_Conditional_22_Conditional_7_Template, 8, 5, "div", 80)(8, ScanToolComponent_Conditional_24_Conditional_22_Conditional_8_Template, 6, 3, "div", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "smartScan.uploadBackSide"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("accept", ctx_r2.ACCEPTED);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.backUrl ? 7 : 8);
  }
}
function ScanToolComponent_Conditional_24_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 94);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.scanning"), " ");
  }
}
function ScanToolComponent_Conditional_24_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartScan.scanDocument"), " ");
  }
}
function ScanToolComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 19)(2, "div", 54)(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55)(6, "p", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 58);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_24_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.backToPreview());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "h4", 77);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 78);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_24_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.triggerFrontInput());
    })("drop", function ScanToolComponent_Conditional_24_Template_div_drop_17_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDropFront($event));
    })("dragover", function ScanToolComponent_Conditional_24_Template_div_dragover_17_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragOver($event));
    });
    \u0275\u0275elementStart(18, "input", 79, 0);
    \u0275\u0275listener("change", function ScanToolComponent_Conditional_24_Template_input_change_18_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFrontSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ScanToolComponent_Conditional_24_Conditional_20_Template, 8, 5, "div", 80)(21, ScanToolComponent_Conditional_24_Conditional_21_Template, 8, 3, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ScanToolComponent_Conditional_24_Conditional_22_Template, 9, 5, "div");
    \u0275\u0275elementStart(23, "div", 66)(24, "button", 82);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_24_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scanDocument());
    });
    \u0275\u0275template(25, ScanToolComponent_Conditional_24_Conditional_25_Template, 3, 3)(26, ScanToolComponent_Conditional_24_Conditional_26_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 83);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_24_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reset());
    });
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getFlag((tmp_2_0 = (tmp_2_0 = ctx_r2.selectedDocType()) == null ? null : tmp_2_0.country) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (tmp_3_0 = ctx_r2.selectedDocType()) == null ? null : tmp_3_0.code, " \u2014 ", (tmp_3_0 = ctx_r2.selectedDocType()) == null ? null : tmp_3_0.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r2.getCountryLabel((tmp_4_0 = (tmp_4_0 = ctx_r2.selectedDocType()) == null ? null : tmp_4_0.country) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ""), " \xB7 ", ctx_r2.getCategoryLabel((tmp_4_0 = (tmp_4_0 = ctx_r2.selectedDocType()) == null ? null : tmp_4_0.category) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ""), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "smartScan.changeDocument"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 15, "smartScan.uploadDocument"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("accept", ctx_r2.ACCEPTED);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.frontUrl ? 20 : 21);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.requiresBackSide ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.frontFile || ctx_r2.scanLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.scanLoading() ? 25 : 26);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 17, "smartScan.cancel"), " ");
  }
}
function ScanToolComponent_Conditional_25_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r21 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classification_r21.detectedDocumentName);
  }
}
function ScanToolComponent_Conditional_25_Conditional_1_Conditional_31_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r21 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c5, classification_r21.isMatch, !classification_r21.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r21.reason, " ");
  }
}
function ScanToolComponent_Conditional_25_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_25_Conditional_1_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.showClassificationReason = !ctx_r2.showClassificationReason);
    });
    \u0275\u0275elementStart(1, "mat-icon", 118);
    \u0275\u0275text(2, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 107);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ScanToolComponent_Conditional_25_Conditional_1_Conditional_31_Conditional_7_Template, 2, 5, "div", 119);
  }
  if (rf & 2) {
    const classification_r21 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c9, classification_r21.isMatch, !classification_r21.isMatch));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c10, ctx_r2.showClassificationReason));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.showClassificationReason ? \u0275\u0275pipeBind1(5, 4, "smartScan.hideReason") : \u0275\u0275pipeBind1(6, 6, "smartScan.showReason"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.showClassificationReason ? 7 : -1);
  }
}
function ScanToolComponent_Conditional_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 103)(2, "mat-icon", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 55)(5, "p", 105);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 106)(10, "span", 107);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 108);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-icon", 109);
    \u0275\u0275text(16, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 107);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 110);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ScanToolComponent_Conditional_25_Conditional_1_Conditional_22_Template, 2, 1, "span", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 112)(24, "span", 113);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 114);
    \u0275\u0275element(28, "div", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 116);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(31, ScanToolComponent_Conditional_25_Conditional_1_Conditional_31_Template, 8, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r21 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c3, classification_r21.isMatch, !classification_r21.isMatch));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c4, classification_r21.isMatch, !classification_r21.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r21.isMatch ? "check_circle" : "warning", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(34, _c5, classification_r21.isMatch, !classification_r21.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r21.isMatch ? \u0275\u0275pipeBind1(7, 18, "smartScan.classificationMatch") : \u0275\u0275pipeBind1(8, 20, "smartScan.classificationMismatch"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 22, "smartScan.requestedType"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", classification_r21.requestedDocumentType, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 24, "smartScan.detectedType"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(37, _c6, classification_r21.isMatch, !classification_r21.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r21.detectedDocumentType, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(classification_r21.detectedDocumentName ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 26, "smartScan.confidence"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r2.confidencePercent, "%");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(40, _c7, ctx_r2.confidencePercent >= 80, ctx_r2.confidencePercent >= 50 && ctx_r2.confidencePercent < 80, ctx_r2.confidencePercent < 50));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(44, _c8, ctx_r2.confidencePercent >= 80, ctx_r2.confidencePercent >= 50 && ctx_r2.confidencePercent < 80, ctx_r2.confidencePercent < 50));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.confidencePercent, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(classification_r21.reason ? 31 : -1);
  }
}
function ScanToolComponent_Conditional_25_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 101);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.scanResult()));
  }
}
function ScanToolComponent_Conditional_25_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275element(1, "img", 126);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.scanResult().url, \u0275\u0275sanitizeUrl);
  }
}
function ScanToolComponent_Conditional_25_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275element(1, "img", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.scanResult().backUrl, \u0275\u0275sanitizeUrl);
  }
}
function ScanToolComponent_Conditional_25_Conditional_23_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 128);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 129);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r23 = ctx.$implicit;
    const \u0275$index_521_r24 = ctx.$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c11, \u0275$index_521_r24 % 2 === 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r23.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r23.value);
  }
}
function ScanToolComponent_Conditional_25_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 120);
    \u0275\u0275template(2, ScanToolComponent_Conditional_25_Conditional_23_Conditional_2_Template, 2, 1, "div", 121)(3, ScanToolComponent_Conditional_25_Conditional_23_Conditional_3_Template, 2, 1, "div", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 122)(5, "h4", 123);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 124);
    \u0275\u0275repeaterCreate(9, ScanToolComponent_Conditional_25_Conditional_23_For_10_Template, 5, 5, "div", 125, _forTrack3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r2.scanResult()) == null ? null : tmp_2_0.url) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_3_0 = ctx_r2.scanResult()) == null ? null : tmp_3_0.backUrl) ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "smartScan.extractedFields"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.getExtractionFields());
  }
}
function ScanToolComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, ScanToolComponent_Conditional_25_Conditional_1_Template, 32, 48, "div", 95);
    \u0275\u0275elementStart(2, "div", 96)(3, "h3", 97);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 21)(7, "button", 98);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_25_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showRawJson = !ctx_r2.showRawJson);
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 98);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_25_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scanSimilar());
    });
    \u0275\u0275elementStart(11, "mat-icon", 99);
    \u0275\u0275text(12, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 98);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_25_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reset());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 100);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_25_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToList());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 19);
    \u0275\u0275template(22, ScanToolComponent_Conditional_25_Conditional_22_Template, 3, 3, "pre", 101)(23, ScanToolComponent_Conditional_25_Conditional_23_Template, 11, 5, "div", 102);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.getClassification()) ? 1 : -1, tmp_1_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "smartScan.results"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "smartScan.rawJson"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 11, "smartScan.scanSimilar"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "smartScan.scanAnother"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 15, "smartScan.viewInHistory"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.showRawJson ? 22 : 23);
  }
}
var COUNTRY_FLAGS = {
  argentina: "\u{1F1E6}\u{1F1F7}",
  bolivia: "\u{1F1E7}\u{1F1F4}",
  brazil: "\u{1F1E7}\u{1F1F7}",
  canada: "\u{1F1E8}\u{1F1E6}",
  chile: "\u{1F1E8}\u{1F1F1}",
  colombia: "\u{1F1E8}\u{1F1F4}",
  "costa rica": "\u{1F1E8}\u{1F1F7}",
  cuba: "\u{1F1E8}\u{1F1FA}",
  "dominican republic": "\u{1F1E9}\u{1F1F4}",
  ecuador: "\u{1F1EA}\u{1F1E8}",
  "el salvador": "\u{1F1F8}\u{1F1FB}",
  guatemala: "\u{1F1EC}\u{1F1F9}",
  honduras: "\u{1F1ED}\u{1F1F3}",
  mexico: "\u{1F1F2}\u{1F1FD}",
  nicaragua: "\u{1F1F3}\u{1F1EE}",
  panama: "\u{1F1F5}\u{1F1E6}",
  paraguay: "\u{1F1F5}\u{1F1FE}",
  peru: "\u{1F1F5}\u{1F1EA}",
  "puerto rico": "\u{1F1F5}\u{1F1F7}",
  spain: "\u{1F1EA}\u{1F1F8}",
  "united states": "\u{1F1FA}\u{1F1F8}",
  uruguay: "\u{1F1FA}\u{1F1FE}",
  venezuela: "\u{1F1FB}\u{1F1EA}",
  portugal: "\u{1F1F5}\u{1F1F9}",
  france: "\u{1F1EB}\u{1F1F7}",
  germany: "\u{1F1E9}\u{1F1EA}",
  italy: "\u{1F1EE}\u{1F1F9}",
  "united kingdom": "\u{1F1EC}\u{1F1E7}",
  japan: "\u{1F1EF}\u{1F1F5}",
  "south korea": "\u{1F1F0}\u{1F1F7}",
  china: "\u{1F1E8}\u{1F1F3}",
  india: "\u{1F1EE}\u{1F1F3}",
  australia: "\u{1F1E6}\u{1F1FA}",
  "new zealand": "\u{1F1F3}\u{1F1FF}",
  "south africa": "\u{1F1FF}\u{1F1E6}",
  nigeria: "\u{1F1F3}\u{1F1EC}",
  kenya: "\u{1F1F0}\u{1F1EA}",
  egypt: "\u{1F1EA}\u{1F1EC}",
  "saudi arabia": "\u{1F1F8}\u{1F1E6}",
  "united arab emirates": "\u{1F1E6}\u{1F1EA}",
  israel: "\u{1F1EE}\u{1F1F1}",
  turkey: "\u{1F1F9}\u{1F1F7}",
  russia: "\u{1F1F7}\u{1F1FA}",
  poland: "\u{1F1F5}\u{1F1F1}",
  netherlands: "\u{1F1F3}\u{1F1F1}",
  belgium: "\u{1F1E7}\u{1F1EA}",
  switzerland: "\u{1F1E8}\u{1F1ED}",
  austria: "\u{1F1E6}\u{1F1F9}",
  sweden: "\u{1F1F8}\u{1F1EA}",
  norway: "\u{1F1F3}\u{1F1F4}",
  denmark: "\u{1F1E9}\u{1F1F0}",
  finland: "\u{1F1EB}\u{1F1EE}",
  ireland: "\u{1F1EE}\u{1F1EA}",
  philippines: "\u{1F1F5}\u{1F1ED}",
  thailand: "\u{1F1F9}\u{1F1ED}",
  indonesia: "\u{1F1EE}\u{1F1E9}",
  malaysia: "\u{1F1F2}\u{1F1FE}",
  singapore: "\u{1F1F8}\u{1F1EC}",
  vietnam: "\u{1F1FB}\u{1F1F3}",
  taiwan: "\u{1F1F9}\u{1F1FC}",
  "hong kong": "\u{1F1ED}\u{1F1F0}"
};
var ScanToolComponent = class _ScanToolComponent {
  constructor() {
    this._scanService = inject(SmartScanService);
    this._cdr = inject(ChangeDetectorRef);
    this._router = inject(Router);
    this._transloco = inject(TranslocoService);
    this.step = "select";
    this.selectedCountry = "";
    this.searchQuery = "";
    this.selectedCategory = "";
    this.countries = [];
    this.categories = [];
    this.flippedCardId = null;
    this.lastCountry = "";
    this.lastCategory = "";
    this.lastSearchQuery = "";
    this.documentTypes = this._scanService.documentTypes;
    this.selectedDocType = this._scanService.selectedDocumentType;
    this.frontFile = null;
    this.frontUrl = null;
    this.backFile = null;
    this.backUrl = null;
    this.requiresBackSide = false;
    this.scanResult = this._scanService.scanResult;
    this.scanLoading = this._scanService.scanLoading;
    this.errorMessage = null;
    this.showRawJson = false;
    this.showClassificationReason = false;
    this.ACCEPTED = ".jpg,.jpeg,.png,image/jpeg,image/png";
    this.flowStepDefs = [
      { id: "select", labelKey: "smartScan.flowStepSelect" },
      { id: "preview", labelKey: "smartScan.flowStepReview" },
      { id: "upload", labelKey: "smartScan.flowStepUpload" },
      { id: "results", labelKey: "smartScan.flowStepResults" }
    ];
    this._flowStepOrder = ["select", "preview", "upload", "results"];
  }
  ngOnInit() {
    this._scanService.resetScanState();
    this._scanService.getDocumentTypes().subscribe({
      next: () => {
        const types = this._scanService.documentTypes();
        this.countries = [...new Set(types.map((t) => t.country).filter(Boolean))].sort();
        this.categories = [...new Set(types.map((t) => t.category).filter(Boolean))].sort();
        this._cdr.markForCheck();
      },
      error: () => {
        this.errorMessage = "Failed to load document types";
        this._cdr.markForCheck();
      }
    });
  }
  getFlag(country) {
    const key = country?.toLowerCase().replace(/_/g, " ");
    return COUNTRY_FLAGS[key ?? ""] ?? "\u{1F3F3}\uFE0F";
  }
  getCountryLabel(country) {
    if (!country)
      return "";
    const key = `smartScan.countries.${country}`;
    const translated = this._transloco.translate(key);
    if (translated === key) {
      return country.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    }
    return translated;
  }
  getCategoryLabel(category) {
    if (!category)
      return "";
    const key = `smartScan.categories.${category}`;
    const translated = this._transloco.translate(key);
    if (translated === key) {
      return category.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    }
    return translated;
  }
  toggleCountry(country) {
    this.selectedCountry = this.selectedCountry === country ? "" : country;
  }
  toggleCategory(category) {
    this.selectedCategory = this.selectedCategory === category ? "" : category;
  }
  get filteredDocumentTypes() {
    let types = this.documentTypes();
    if (this.selectedCountry) {
      types = types.filter((t) => t.country === this.selectedCountry);
    }
    if (this.selectedCategory) {
      types = types.filter((t) => t.category === this.selectedCategory);
    }
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      types = types.filter((t) => t.name?.toLowerCase().includes(q) || t.code?.toLowerCase().includes(q) || t.category?.toLowerCase().includes(q));
    }
    return types;
  }
  flipCard(id, event) {
    event.stopPropagation();
    this.flippedCardId = this.flippedCardId === id ? null : id;
  }
  selectDocumentType(dt) {
    this._scanService.selectedDocumentType.set(dt);
    this.lastCountry = this.selectedCountry;
    this.lastCategory = this.selectedCategory;
    this.lastSearchQuery = this.searchQuery;
    this._scanService.getPromptTemplates(dt._id).subscribe({
      next: () => {
        const templates = this._scanService.promptTemplates();
        const tpl = templates[0];
        this.requiresBackSide = tpl?.requiresBackSide ?? false;
        this._scanService.selectedPromptTemplate.set(tpl ?? null);
        this.step = "preview";
        this._cdr.markForCheck();
      },
      error: () => {
        this.requiresBackSide = false;
        this.step = "preview";
        this._cdr.markForCheck();
      }
    });
  }
  get selectedTemplateFields() {
    const tpl = this._scanService.selectedPromptTemplate();
    if (!tpl?.fields)
      return [];
    return tpl.fields.filter((f) => f.page === 0);
  }
  get selectedTemplateBackFields() {
    const tpl = this._scanService.selectedPromptTemplate();
    if (!tpl?.fields)
      return [];
    return tpl.fields.filter((f) => f.page === 1);
  }
  proceedToUpload() {
    this.step = "upload";
  }
  backToSelect() {
    this.selectedCountry = this.lastCountry;
    this.selectedCategory = this.lastCategory;
    this.searchQuery = this.lastSearchQuery;
    this.step = "select";
    this._cdr.markForCheck();
  }
  backToPreview() {
    this.step = "preview";
  }
  scanSimilar() {
    if (this.frontUrl)
      URL.revokeObjectURL(this.frontUrl);
    if (this.backUrl)
      URL.revokeObjectURL(this.backUrl);
    this.frontFile = null;
    this.frontUrl = null;
    this.backFile = null;
    this.backUrl = null;
    this._scanService.scanResult.set(null);
    this._scanService.selectedDocumentType.set(null);
    this._scanService.selectedPromptTemplate.set(null);
    this.showRawJson = false;
    this.selectedCountry = this.lastCountry;
    this.selectedCategory = this.lastCategory;
    this.searchQuery = this.lastSearchQuery;
    this.step = "select";
    this._cdr.markForCheck();
  }
  triggerFrontInput() {
    this.frontInput?.nativeElement?.click();
  }
  triggerBackInput() {
    this.backInput?.nativeElement?.click();
  }
  onFrontSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (file)
      this.loadFrontFile(file);
    input.value = "";
  }
  onBackSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (file)
      this.loadBackFile(file);
    input.value = "";
  }
  onDropFront(event) {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer?.files?.[0];
    if (file)
      this.loadFrontFile(file);
  }
  onDropBack(event) {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer?.files?.[0];
    if (file)
      this.loadBackFile(file);
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  loadFrontFile(file) {
    if (!file.type.startsWith("image/"))
      return;
    if (this.frontUrl)
      URL.revokeObjectURL(this.frontUrl);
    this.frontFile = file;
    this.frontUrl = URL.createObjectURL(file);
    this._cdr.markForCheck();
  }
  loadBackFile(file) {
    if (!file.type.startsWith("image/"))
      return;
    if (this.backUrl)
      URL.revokeObjectURL(this.backUrl);
    this.backFile = file;
    this.backUrl = URL.createObjectURL(file);
    this._cdr.markForCheck();
  }
  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  scanDocument() {
    return __async(this, null, function* () {
      const docType = this.selectedDocType();
      if (!docType || !this.frontFile)
        return;
      this.errorMessage = null;
      const image = yield this.fileToBase64(this.frontFile);
      const backImage = this.backFile ? yield this.fileToBase64(this.backFile) : void 0;
      this._scanService.scanDocument(docType.code, image, backImage).subscribe({
        next: () => {
          this.step = "results";
          const cls = this.getClassification();
          this.showClassificationReason = cls ? !cls.isMatch : false;
          this._cdr.markForCheck();
        },
        error: (err) => {
          this.errorMessage = err?.error?.message || err?.message || "Scan failed";
          this._cdr.markForCheck();
        }
      });
    });
  }
  reset() {
    if (this.frontUrl)
      URL.revokeObjectURL(this.frontUrl);
    if (this.backUrl)
      URL.revokeObjectURL(this.backUrl);
    this._scanService.resetScanState();
    this.step = "select";
    this.frontFile = null;
    this.frontUrl = null;
    this.backFile = null;
    this.backUrl = null;
    this.selectedCountry = "";
    this.selectedCategory = "";
    this.searchQuery = "";
    this.showRawJson = false;
    this._cdr.markForCheck();
  }
  goToList() {
    this._router.navigate(["/smart-enroll/smart-scan/list"]);
  }
  getExtractionFields() {
    const extraction = this.scanResult()?.OCRExtraction;
    if (!extraction || typeof extraction !== "object")
      return [];
    return Object.entries(extraction).filter(([k]) => k !== "documentClassification" && !k.startsWith("_")).map(([key, value]) => ({ key, value }));
  }
  getClassification() {
    const extraction = this.scanResult()?.OCRExtraction;
    return extraction?.documentClassification ?? null;
  }
  get confidencePercent() {
    const cls = this.getClassification();
    return Math.round((cls?.confidence ?? 0) * 100);
  }
  isFlowStepCurrent(stepId) {
    return this.step === stepId;
  }
  isFlowStepDone(stepId) {
    const currentIdx = this._flowStepOrder.indexOf(this.step);
    const stepIdx = this._flowStepOrder.indexOf(stepId);
    return stepIdx >= 0 && stepIdx < currentIdx;
  }
  static {
    this.\u0275fac = function ScanToolComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScanToolComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScanToolComponent, selectors: [["scan-tool"]], viewQuery: function ScanToolComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frontInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.backInput = _t.first);
      }
    }, decls: 26, vars: 17, consts: [["frontInput", ""], ["backInput", ""], [1, "scan-tool-root", "flex", "flex-col", "flex-auto", "min-w-0", "min-h-screen", "bg-stone-50", "dark:bg-gray-950"], [1, "flex", "flex-col", "w-full", "max-w-5xl", "mx-auto", "px-5", "py-10", "md:px-8", "md:py-12"], [1, "mb-8", "md:mb-10"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-start", "sm:gap-6"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-2xl", "border", "border-stone-200/80", "bg-white", "shadow-sm", "dark:border-gray-700", "dark:bg-gray-900/60"], [1, "icon-size-5", "text-stone-700", "dark:text-stone-200"], [1, "min-w-0", "flex-1", "space-y-2"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "max-w-2xl", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "text-xs", "leading-relaxed", "text-stone-500", "dark:text-stone-500"], [1, "scan-tool-steps", "mb-8", "flex", "flex-wrap", "items-center", "gap-y-2", "text-xs", "sm:mb-10", "sm:text-sm"], [1, "mb-6", "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "scan-tool-panel", "overflow-hidden"], [1, "scan-tool-steps__rule", "mx-0.5", "hidden", "h-px", "w-6", "shrink-0", "rounded-full", "bg-stone-200", "sm:block", "lg:w-10", "dark:bg-gray-700"], [1, "inline-flex", "max-w-[9rem]", "items-center", "gap-1.5", "truncate", "rounded-full", "px-3", "py-1.5", "font-medium", "transition-colors", "sm:max-w-none", 3, "ngClass"], [1, "w-5", "text-center", "text-[11px]", "tabular-nums", "opacity-80"], [1, "truncate"], [1, "space-y-6", "p-6", "md:p-8"], [1, "mb-4", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "scan-tool-pill", 3, "click"], ["aria-hidden", "true", 1, "text-base", "leading-none"], ["type", "button", 1, "scan-tool-pill", 3, "scan-tool-pill--active"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "scan-tool-search", "w-full"], ["matPrefix", "", 1, "mr-2", "text-stone-400"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["matSuffix", "", "mat-icon-button", "", "type", "button"], ["type", "button", 1, "scan-tool-chip", 3, "click"], ["type", "button", 1, "scan-tool-chip", 3, "scan-tool-chip--active"], [1, "border-t", "border-stone-100", "px-6", "py-6", "md:px-8", "md:py-8", "dark:border-gray-800"], [1, "mb-6", "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "border", "border-dashed", "border-stone-200", "bg-stone-50/50", "py-16", "text-center", "dark:border-gray-700", "dark:bg-gray-950/30"], [1, "text-base", "leading-none"], ["matSuffix", "", "mat-icon-button", "", "type", "button", 3, "click"], [1, "doc-type-card", "cursor-pointer"], [1, "doc-type-card", "cursor-pointer", 3, "click"], [1, "scan-tool-doc-card"], [1, "scan-tool-doc-card__media"], ["loading", "lazy", 1, "h-full", "w-full", "object-contain", 3, "src", "alt"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "bg-gradient-to-br", "from-stone-100", "to-stone-200/80", "dark:from-gray-900", "dark:to-gray-950"], ["type", "button", "mat-icon-button", "", 1, "absolute", "right-1", "top-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-black/40", "text-white", "hover:bg-black/60", 3, "title"], [1, "p-4"], [1, "min-w-0"], [1, "scan-tool-doc-card__code"], [1, "mt-2", "truncate", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-2", "flex", "flex-wrap", "items-center", "gap-1.5", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "icon-size-16", "text-stone-300", "dark:text-stone-600", 3, "svgIcon"], ["type", "button", "mat-icon-button", "", 1, "absolute", "right-1", "top-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-black/40", "text-white", "hover:bg-black/60", 3, "click", "title"], [1, "icon-size-4"], [1, "icon-size-16", "mb-4", "text-stone-300", "dark:text-stone-600", 3, "svgIcon"], [1, "text-base", "font-medium", "text-stone-600", "dark:text-stone-400"], [1, "scan-tool-strip"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "text-xs", "text-stone-600", "dark:text-stone-400"], ["mat-stroked-button", "", 1, "scan-tool-mat-btn-pill", "shrink-0", "!text-xs", 3, "click"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-amber-100/90", "px-2.5", "py-1", "text-xs", "font-medium", "text-amber-900", "dark:bg-amber-950/50", "dark:text-amber-200"], [1, "grid", "grid-cols-1", "gap-0", "divide-y", "divide-stone-100", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "lg:grid-cols-2", "lg:divide-x", "lg:divide-y-0", "dark:divide-gray-800", "dark:border-gray-700"], [1, "space-y-4", "p-6", "md:p-8"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-stone-50/50", "dark:border-gray-700", "dark:bg-gray-950/50"], [1, "flex", "h-40", "items-center", "justify-center", "rounded-2xl", "border", "border-dashed", "border-stone-300", "bg-stone-50/50", "dark:border-gray-600", "dark:bg-gray-950/30"], [1, "flex", "flex-col", "items-center", "justify-center", "py-10", "text-center"], [1, "flex", "flex-wrap", "gap-3", "pt-2"], ["mat-flat-button", "", "color", "primary", 1, "scan-tool-mat-btn-pill", 3, "click"], [1, "icon-size-4", "ml-1"], [1, "icon-size-3.5"], [1, "max-h-56", "w-full", "object-contain", 3, "src", "alt"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "h-32", "items-center", "justify-center", "rounded-2xl", "border", "border-dashed", "border-stone-300", "bg-stone-50/50", "dark:border-gray-600", "dark:bg-gray-950/30"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50/80", "px-3", "py-1.5", "text-xs", "font-medium", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-800/50", "dark:text-stone-200"], [1, "icon-size-3.5", "text-stone-500", "dark:text-stone-400"], [1, "mt-4", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "icon-size-10", "mb-2", "text-stone-300", "dark:text-stone-600"], [1, "mb-2", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-600", "dark:text-stone-400"], [1, "scan-tool-dropzone", 3, "click", "drop", "dragover"], ["type", "file", 1, "hidden", 3, "change", "accept"], [1, "flex", "items-center", "gap-4", "p-4"], [1, "flex", "flex-col", "items-center", "justify-center", "px-6", "py-14"], ["mat-flat-button", "", "color", "primary", 1, "scan-tool-mat-btn-pill", 3, "click", "disabled"], ["mat-stroked-button", "", 1, "scan-tool-mat-btn-pill", "!border-stone-200", "dark:!border-gray-600", 3, "click"], ["alt", "Front", 1, "h-20", "w-28", "rounded-xl", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "text-sm", "font-medium", "text-stone-900", "dark:text-white"], ["mat-stroked-button", "", 1, "scan-tool-mat-btn-pill", "mt-2", "!text-xs", 3, "click"], [1, "icon-size-12", "mb-3", "text-stone-400", "dark:text-stone-500"], [1, "text-base", "font-medium", "text-stone-800", "dark:text-stone-200"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "items-center", "justify-center", "px-6", "py-10"], ["alt", "Back", 1, "h-20", "w-28", "rounded-xl", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "icon-size-10", "mb-2", "text-stone-400", "dark:text-stone-500"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], ["diameter", "20", 1, "mr-2", "inline-block"], [1, "border-b", "border-stone-200/80", "dark:border-gray-800", 3, "ngClass"], [1, "scan-tool-panel__header", "flex", "flex-wrap", "items-center", "justify-between", "gap-4", "px-5", "py-4", "md:px-6", "md:py-5"], [1, "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], ["mat-stroked-button", "", 1, "scan-tool-mat-btn-pill", "!text-xs", "!border-stone-200", "dark:!border-gray-600", 3, "click"], [1, "icon-size-4", "mr-1"], ["mat-flat-button", "", "color", "primary", 1, "scan-tool-mat-btn-pill", "!text-xs", 3, "click"], [1, "max-h-96", "overflow-auto", "rounded-2xl", "border", "border-stone-200/90", "bg-stone-100/80", "p-4", "font-mono", "text-xs", "dark:border-gray-700", "dark:bg-gray-900/60"], [1, "grid", "grid-cols-1", "gap-6", "lg:grid-cols-2"], [1, "flex", "items-start", "gap-3", "p-5", "md:p-6"], [1, "icon-size-6", "mt-0.5", "shrink-0", 3, "ngClass"], [1, "text-base", "font-semibold", 3, "ngClass"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "inline-flex", "items-center", "rounded-xl", "border", "border-stone-200/80", "bg-white/90", "px-2.5", "py-1", "font-mono", "text-xs", "font-bold", "text-stone-800", "dark:border-gray-600", "dark:bg-gray-900/70", "dark:text-stone-200"], [1, "icon-size-4", "text-stone-400"], [1, "inline-flex", "items-center", "rounded-xl", "border", "px-2.5", "py-1", "font-mono", "text-xs", "font-bold", 3, "ngClass"], [1, "text-sm", "text-stone-700", "dark:text-stone-300"], [1, "mt-4", "flex", "items-center", "gap-3"], [1, "whitespace-nowrap", "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "h-2", "flex-1", "overflow-hidden", "rounded-full", "bg-white/60", "dark:bg-gray-800/60"], [1, "h-full", "rounded-full", "transition-all", "duration-500", 3, "ngClass"], [1, "min-w-[3rem]", "text-right", "text-sm", "font-semibold", "tabular-nums", 3, "ngClass"], [1, "flex", "cursor-pointer", "select-none", "items-center", "gap-2", "border-t", "px-5", "py-3", "dark:border-gray-700/80", 3, "click", "ngClass"], [1, "icon-size-4", "text-stone-500", "transition-transform", "dark:text-stone-400", 3, "ngClass"], [1, "px-5", "pb-5", "text-sm", "leading-relaxed", 3, "ngClass"], [1, "space-y-4"], [1, "overflow-hidden", "rounded-3xl", "border", "border-stone-200/90", "bg-white", "dark:border-gray-700", "dark:bg-gray-900/50"], [1, "space-y-3"], [1, "font-semibold", "text-stone-900", "dark:text-white"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "dark:border-gray-700"], [1, "flex", "justify-between", "gap-4", "px-4", "py-3", 3, "ngClass"], ["alt", "Document front", 1, "max-h-80", "w-full", "object-contain", 3, "src"], ["alt", "Document back", 1, "max-h-60", "w-full", "object-contain", 3, "src"], [1, "text-sm", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "break-all", "text-right", "text-sm", "font-medium", "text-stone-900", "dark:text-white"]], template: function ScanToolComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "header", 4)(3, "div", 5)(4, "div", 6)(5, "mat-icon", 7);
        \u0275\u0275text(6, "document_scanner");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 8)(8, "h1", 9);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 10);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 11);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "nav", 12);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275repeaterCreate(19, ScanToolComponent_For_20_Template, 7, 10, null, null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, ScanToolComponent_Conditional_21_Template, 2, 1, "div", 13)(22, ScanToolComponent_Conditional_22_Template, 38, 28, "div", 14)(23, ScanToolComponent_Conditional_23_Template, 32, 20, "div", 14)(24, ScanToolComponent_Conditional_24_Template, 30, 19, "div", 14)(25, ScanToolComponent_Conditional_25_Template, 24, 17, "div", 14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "smartScan.toolTitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 11, "smartScan.toolSubtitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 13, "smartScan.privacyNote"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 15, "smartScan.toolTitle"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.flowStepDefs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMessage ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "select" ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "preview" && ctx.selectedDocType() ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "upload" ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "results" && ctx.scanResult() ? 25 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      LowerCasePipe,
      JsonPipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      RouterModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatChipsModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoPipe
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.scan-tool-root[_ngcontent-%COMP%] {\n  --st-radius: 1.25rem;\n  --st-radius-sm: 0.875rem;\n}\n.scan-tool-steps__item--current[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-steps__item--current[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--done[_ngcontent-%COMP%] {\n  background-color: rgb(231 229 228 / 0.8);\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--done[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(231 229 228 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--todo[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(255 255 255 / 0.8);\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--todo[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity, 1));\n}\n.scan-tool-doc-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-doc-card[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.6);\n}\n.scan-tool-doc-card[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-tool-doc-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 32px -12px rgba(15, 23, 42, 0.12);\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-doc-card[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-doc-card__media[_ngcontent-%COMP%] {\n  position: relative;\n  height: 9rem;\n  overflow: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n}\n.scan-tool-doc-card__media[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  background-color: rgb(2 6 23 / 0.8);\n}\n.scan-tool-doc-card__code[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 0.375rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.scan-tool-doc-card__code[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-panel[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-tool-panel[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-tool-panel__header[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n}\n.scan-tool-panel__header[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  border-radius: 9999px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-pill[_ngcontent-%COMP%]:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(231 229 228 / var(--tw-text-opacity, 1));\n}\n.scan-tool-pill[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill--active[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(28 25 23 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-pill--active[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-chip[_ngcontent-%COMP%]:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-chip[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-chip--active[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(28 25 23 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip--active[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-dropzone[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 2px;\n  border-style: dashed;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  background-color: rgb(250 250 249 / 0.5);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-dropzone[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 6 23 / 0.3);\n}\n.scan-tool-dropzone[_ngcontent-%COMP%]:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(168 162 158 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.scan-tool-dropzone[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(100 116 139 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.scan-tool-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(250 250 249 / 0.8);\n  padding: 1rem;\n}\n.scan-tool-strip[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n[_nghost-%COMP%]     .scan-tool-search .mat-mdc-text-field-wrapper {\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .scan-tool-search .mdc-notched-outline .mdc-notched-outline__leading, \n[_nghost-%COMP%]     .scan-tool-search .mdc-notched-outline .mdc-notched-outline__notch, \n[_nghost-%COMP%]     .scan-tool-search .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(231, 229, 228) !important;\n}\n[_nghost-%COMP%]     .scan-tool-search .mat-mdc-form-field-focus-overlay {\n  opacity: 0;\n}\n[_nghost-%COMP%]     .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__leading, \n[_nghost-%COMP%]     .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__notch, \n[_nghost-%COMP%]     .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(120, 113, 108) !important;\n}\n[_nghost-%COMP%]     .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__leading, \n[_nghost-%COMP%]     .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__notch, \n[_nghost-%COMP%]     .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(63, 63, 70) !important;\n}\n[_nghost-%COMP%]     .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__leading, \n[_nghost-%COMP%]     .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__notch, \n[_nghost-%COMP%]     .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(161, 161, 170) !important;\n}\n[_nghost-%COMP%]     .scan-tool-mat-btn-pill.mat-mdc-unelevated-button, \n[_nghost-%COMP%]     .scan-tool-mat-btn-pill.mat-mdc-outlined-button {\n  border-radius: 9999px;\n}\n.doc-type-card[_ngcontent-%COMP%] {\n}\n/*# sourceMappingURL=scan-tool.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScanToolComponent, [{
    type: Component,
    args: [{ selector: "scan-tool", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatChipsModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<div
    class="scan-tool-root flex flex-col flex-auto min-w-0 min-h-screen bg-stone-50 dark:bg-gray-950"
>
    <div class="flex flex-col w-full max-w-5xl mx-auto px-5 py-10 md:px-8 md:py-12">
        <!-- Header -->
        <header class="mb-8 md:mb-10">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div
                    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-stone-200/80 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900/60"
                >
                    <mat-icon class="icon-size-5 text-stone-700 dark:text-stone-200"
                        >document_scanner</mat-icon
                    >
                </div>
                <div class="min-w-0 flex-1 space-y-2">
                    <h1
                        class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl"
                    >
                        {{ 'smartScan.toolTitle' | transloco }}
                    </h1>
                    <p class="max-w-2xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                        {{ 'smartScan.toolSubtitle' | transloco }}
                    </p>
                    <p class="text-xs leading-relaxed text-stone-500 dark:text-stone-500">
                        {{ 'smartScan.privacyNote' | transloco }}
                    </p>
                </div>
            </div>
        </header>

        <!-- Flow steps -->
        <nav
            class="scan-tool-steps mb-8 flex flex-wrap items-center gap-y-2 text-xs sm:mb-10 sm:text-sm"
            [attr.aria-label]="'smartScan.toolTitle' | transloco"
        >
            @for (s of flowStepDefs; track s.id; let i = $index) {
                @if (i > 0) {
                    <span
                        class="scan-tool-steps__rule mx-0.5 hidden h-px w-6 shrink-0 rounded-full bg-stone-200 sm:block lg:w-10 dark:bg-gray-700"
                    ></span>
                }
                <span
                    class="inline-flex max-w-[9rem] items-center gap-1.5 truncate rounded-full px-3 py-1.5 font-medium transition-colors sm:max-w-none"
                    [ngClass]="{
                        'scan-tool-steps__item--current': isFlowStepCurrent(s.id),
                        'scan-tool-steps__item--done': isFlowStepDone(s.id),
                        'scan-tool-steps__item--todo':
                            !isFlowStepCurrent(s.id) && !isFlowStepDone(s.id),
                    }"
                >
                    <span class="w-5 text-center text-[11px] tabular-nums opacity-80">{{
                        i + 1
                    }}</span>
                    <span class="truncate">{{ s.labelKey | transloco }}</span>
                </span>
            }
        </nav>

        @if (errorMessage) {
            <div
                class="mb-6 rounded-2xl border border-red-200/90 bg-red-50/90 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"
            >
                {{ errorMessage }}
            </div>
        }

        <!-- ============================================ -->
        <!-- STEP 1: Select Country + Document Type       -->
        <!-- ============================================ -->
        @if (step === 'select') {
            <div class="scan-tool-panel overflow-hidden">
                <div class="space-y-6 p-6 md:p-8">
                    <div>
                        <h3
                            class="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                        >
                            {{ 'smartScan.selectCountry' | transloco }}
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <button
                                type="button"
                                (click)="selectedCountry = ''"
                                class="scan-tool-pill"
                                [class.scan-tool-pill--active]="!selectedCountry"
                            >
                                <span class="text-base leading-none" aria-hidden="true">\u{1F30D}</span>
                                {{ 'smartScan.allCountries' | transloco }}
                            </button>
                            @for (c of countries; track c) {
                                <button
                                    type="button"
                                    (click)="toggleCountry(c)"
                                    class="scan-tool-pill"
                                    [class.scan-tool-pill--active]="selectedCountry === c"
                                >
                                    <span class="text-base leading-none">{{ getFlag(c) }}</span>
                                    <span>{{ getCountryLabel(c) }}</span>
                                </button>
                            }
                        </div>
                    </div>

                    <div>
                        <mat-form-field
                            appearance="outline"
                            class="scan-tool-search w-full"
                            subscriptSizing="dynamic"
                        >
                            <mat-icon matPrefix class="mr-2 text-stone-400">search</mat-icon>
                            <input
                                matInput
                                [(ngModel)]="searchQuery"
                                [placeholder]="'smartScan.searchPlaceholder' | transloco"
                            />
                            @if (searchQuery) {
                                <button
                                    matSuffix
                                    mat-icon-button
                                    (click)="searchQuery = ''"
                                    type="button"
                                >
                                    <mat-icon>close</mat-icon>
                                </button>
                            }
                        </mat-form-field>
                    </div>

                    <div>
                        <div class="flex flex-wrap gap-2">
                            <button
                                type="button"
                                (click)="selectedCategory = ''"
                                class="scan-tool-chip"
                                [class.scan-tool-chip--active]="!selectedCategory"
                            >
                                {{ 'smartScan.allCategories' | transloco }}
                            </button>
                            @for (cat of categories; track cat) {
                                <button
                                    type="button"
                                    (click)="toggleCategory(cat)"
                                    class="scan-tool-chip"
                                    [class.scan-tool-chip--active]="selectedCategory === cat"
                                >
                                    {{ getCategoryLabel(cat) }}
                                </button>
                            }
                        </div>
                    </div>
                </div>

                <div
                    class="border-t border-stone-100 px-6 py-6 md:px-8 md:py-8 dark:border-gray-800"
                >
                    <h4
                        class="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                    >
                        {{ 'smartScan.selectDocumentType' | transloco }}
                    </h4>
                    <p class="mb-6 text-sm text-stone-600 dark:text-stone-400">
                        {{ filteredDocumentTypes.length }}
                        {{ 'smartScan.results' | transloco | lowercase }}
                    </p>

                    @if (filteredDocumentTypes.length > 0) {
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            @for (dt of filteredDocumentTypes; track dt._id) {
                                <div
                                    class="doc-type-card cursor-pointer"
                                    (click)="selectDocumentType(dt)"
                                >
                                    <div class="scan-tool-doc-card">
                                        <div class="scan-tool-doc-card__media">
                                            @if (flippedCardId === dt._id && dt.backImage) {
                                                <img
                                                    [src]="dt.backImage"
                                                    [alt]="dt.name + ' (back)'"
                                                    class="h-full w-full object-contain"
                                                    loading="lazy"
                                                />
                                            } @else if (dt.frontImage) {
                                                <img
                                                    [src]="dt.frontImage"
                                                    [alt]="dt.name"
                                                    class="h-full w-full object-contain"
                                                    loading="lazy"
                                                />
                                            } @else {
                                                <div
                                                    class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200/80 dark:from-gray-900 dark:to-gray-950"
                                                >
                                                    <mat-icon
                                                        class="icon-size-16 text-stone-300 dark:text-stone-600"
                                                        [svgIcon]="
                                                            'heroicons_outline:identification'
                                                        "
                                                    ></mat-icon>
                                                </div>
                                            }
                                            @if (dt.backImage) {
                                                <button
                                                    type="button"
                                                    mat-icon-button
                                                    class="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white hover:bg-black/60"
                                                    (click)="flipCard(dt._id, $event)"
                                                    [title]="
                                                        flippedCardId === dt._id
                                                            ? 'Show front'
                                                            : 'Show back'
                                                    "
                                                >
                                                    <mat-icon class="icon-size-4">{{
                                                        flippedCardId === dt._id
                                                            ? 'flip_to_front'
                                                            : 'flip'
                                                    }}</mat-icon>
                                                </button>
                                            }
                                        </div>
                                        <div class="p-4">
                                            <div class="min-w-0">
                                                <span class="scan-tool-doc-card__code">{{
                                                    dt.code
                                                }}</span>
                                                <p
                                                    class="mt-2 truncate text-sm font-semibold text-stone-900 dark:text-white"
                                                >
                                                    {{ dt.name }}
                                                </p>
                                            </div>
                                            <div
                                                class="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400"
                                            >
                                                <span class="text-base leading-none">{{
                                                    getFlag(dt.country)
                                                }}</span>
                                                <span>{{ getCountryLabel(dt.country) }}</span>
                                                <span>\xB7</span>
                                                <span>{{ getCategoryLabel(dt.category) }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    } @else {
                        <div
                            class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-200 bg-stone-50/50 py-16 text-center dark:border-gray-700 dark:bg-gray-950/30"
                        >
                            <mat-icon
                                class="icon-size-16 mb-4 text-stone-300 dark:text-stone-600"
                                [svgIcon]="'heroicons_outline:document-magnifying-glass'"
                            ></mat-icon>
                            <p class="text-base font-medium text-stone-600 dark:text-stone-400">
                                {{ 'smartScan.noDocTypes' | transloco }}
                            </p>
                        </div>
                    }
                </div>
            </div>
        }

        <!-- ============================================ -->
        <!-- STEP 2: Preview selected document            -->
        <!-- ============================================ -->
        @if (step === 'preview' && selectedDocType()) {
            <div class="scan-tool-panel overflow-hidden">
                <div class="space-y-6 p-6 md:p-8">
                    <div class="scan-tool-strip">
                        <span class="text-base leading-none">{{
                            getFlag(selectedDocType()!.country)
                        }}</span>
                        <div class="min-w-0 flex-1">
                            <p class="text-sm font-semibold text-stone-900 dark:text-white">
                                {{ selectedDocType()!.code }} \u2014 {{ selectedDocType()!.name }}
                            </p>
                            <p class="text-xs text-stone-600 dark:text-stone-400">
                                {{ getCountryLabel(selectedDocType()!.country) }} \xB7
                                {{ getCategoryLabel(selectedDocType()!.category) }}
                            </p>
                        </div>
                        <button
                            mat-stroked-button
                            (click)="backToSelect()"
                            class="scan-tool-mat-btn-pill shrink-0 !text-xs"
                        >
                            {{ 'smartScan.changeDocument' | transloco }}
                        </button>
                    </div>

                    @if (requiresBackSide) {
                        <span
                            class="inline-flex items-center gap-1 rounded-full bg-amber-100/90 px-2.5 py-1 text-xs font-medium text-amber-900 dark:bg-amber-950/50 dark:text-amber-200"
                        >
                            <mat-icon class="icon-size-3.5">flip</mat-icon>
                            {{ 'smartScan.requiresBackSide' | transloco }}
                        </span>
                    }

                    <div
                        class="grid grid-cols-1 gap-0 divide-y divide-stone-100 overflow-hidden rounded-2xl border border-stone-200/90 lg:grid-cols-2 lg:divide-x lg:divide-y-0 dark:divide-gray-800 dark:border-gray-700"
                    >
                        <div class="space-y-4 p-6 md:p-8">
                            <h4
                                class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                            >
                                {{ 'smartScan.previewTitle' | transloco }}
                            </h4>
                            @if (selectedDocType()!.frontImage) {
                                <div
                                    class="overflow-hidden rounded-2xl border border-stone-200/90 bg-stone-50/50 dark:border-gray-700 dark:bg-gray-950/50"
                                >
                                    <img
                                        [src]="selectedDocType()!.frontImage"
                                        [alt]="selectedDocType()!.name"
                                        class="max-h-56 w-full object-contain"
                                    />
                                </div>
                            } @else {
                                <div
                                    class="flex h-40 items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50/50 dark:border-gray-600 dark:bg-gray-950/30"
                                >
                                    <span class="text-sm text-stone-500 dark:text-stone-400"
                                        >Front side preview not available</span
                                    >
                                </div>
                            }
                            @if (requiresBackSide) {
                                @if (selectedDocType()!.backImage) {
                                    <div
                                        class="overflow-hidden rounded-2xl border border-stone-200/90 bg-stone-50/50 dark:border-gray-700 dark:bg-gray-950/50"
                                    >
                                        <img
                                            [src]="selectedDocType()!.backImage"
                                            [alt]="selectedDocType()!.name + ' (back)'"
                                            class="max-h-56 w-full object-contain"
                                        />
                                    </div>
                                } @else {
                                    <div
                                        class="flex h-32 items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50/50 dark:border-gray-600 dark:bg-gray-950/30"
                                    >
                                        <span class="text-sm text-stone-500 dark:text-stone-400"
                                            >Back side preview not available</span
                                        >
                                    </div>
                                }
                            }
                        </div>

                        <div class="space-y-4 p-6 md:p-8">
                            @if (selectedTemplateFields.length > 0) {
                                <h4
                                    class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                >
                                    {{ 'smartScan.extractableFields' | transloco }}
                                </h4>
                                <div class="flex flex-wrap gap-2">
                                    @for (f of selectedTemplateFields; track f.mapKey) {
                                        <span
                                            class="inline-flex items-center gap-1.5 rounded-xl border border-stone-200/80 bg-stone-50/80 px-3 py-1.5 text-xs font-medium text-stone-800 dark:border-gray-700 dark:bg-gray-800/50 dark:text-stone-200"
                                        >
                                            <mat-icon
                                                class="icon-size-3.5 text-stone-500 dark:text-stone-400"
                                                >check_circle</mat-icon
                                            >
                                            {{ f.name }}
                                        </span>
                                    }
                                </div>
                            }
                            @if (selectedTemplateBackFields.length > 0) {
                                <h4
                                    class="mt-4 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                >
                                    {{ 'smartScan.backSideFields' | transloco }}
                                </h4>
                                <div class="flex flex-wrap gap-2">
                                    @for (f of selectedTemplateBackFields; track f.mapKey) {
                                        <span
                                            class="inline-flex items-center gap-1.5 rounded-xl border border-stone-200/80 bg-stone-50/80 px-3 py-1.5 text-xs font-medium text-stone-800 dark:border-gray-700 dark:bg-gray-800/50 dark:text-stone-200"
                                        >
                                            <mat-icon
                                                class="icon-size-3.5 text-stone-500 dark:text-stone-400"
                                                >check_circle</mat-icon
                                            >
                                            {{ f.name }}
                                        </span>
                                    }
                                </div>
                            }
                            @if (
                                selectedTemplateFields.length === 0 &&
                                selectedTemplateBackFields.length === 0
                            ) {
                                <div
                                    class="flex flex-col items-center justify-center py-10 text-center"
                                >
                                    <mat-icon
                                        class="icon-size-10 mb-2 text-stone-300 dark:text-stone-600"
                                        >list_alt</mat-icon
                                    >
                                    <p class="text-sm text-stone-500 dark:text-stone-400">
                                        Field definitions will be available after scanning.
                                    </p>
                                </div>
                            }
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-3 pt-2">
                        <button
                            mat-flat-button
                            color="primary"
                            (click)="proceedToUpload()"
                            class="scan-tool-mat-btn-pill"
                        >
                            {{ 'smartScan.proceedToScan' | transloco }}
                            <mat-icon class="icon-size-4 ml-1">arrow_forward</mat-icon>
                        </button>
                    </div>
                </div>
            </div>
        }

        <!-- ============================================ -->
        <!-- STEP 3: Upload Document                      -->
        <!-- ============================================ -->
        @if (step === 'upload') {
            <div class="scan-tool-panel overflow-hidden">
                <div class="space-y-6 p-6 md:p-8">
                    <div class="scan-tool-strip">
                        <span class="text-base leading-none">{{
                            getFlag(selectedDocType()?.country ?? '')
                        }}</span>
                        <div class="min-w-0 flex-1">
                            <p class="text-sm font-semibold text-stone-900 dark:text-white">
                                {{ selectedDocType()?.code }} \u2014 {{ selectedDocType()?.name }}
                            </p>
                            <p class="text-xs text-stone-600 dark:text-stone-400">
                                {{ getCountryLabel(selectedDocType()?.country ?? '') }} \xB7
                                {{ getCategoryLabel(selectedDocType()?.category ?? '') }}
                            </p>
                        </div>
                        <button
                            mat-stroked-button
                            (click)="backToPreview()"
                            class="scan-tool-mat-btn-pill shrink-0 !text-xs"
                        >
                            {{ 'smartScan.changeDocument' | transloco }}
                        </button>
                    </div>

                    <div>
                        <h4
                            class="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400"
                        >
                            {{ 'smartScan.uploadDocument' | transloco }}
                        </h4>
                        <div
                            class="scan-tool-dropzone"
                            (click)="triggerFrontInput()"
                            (drop)="onDropFront($event)"
                            (dragover)="onDragOver($event)"
                        >
                            <input
                                #frontInput
                                type="file"
                                [accept]="ACCEPTED"
                                (change)="onFrontSelected($event)"
                                class="hidden"
                            />
                            @if (frontUrl) {
                                <div class="flex items-center gap-4 p-4">
                                    <img
                                        [src]="frontUrl"
                                        alt="Front"
                                        class="h-20 w-28 rounded-xl border border-stone-200 object-cover dark:border-gray-700"
                                    />
                                    <div class="min-w-0 flex-1">
                                        <p
                                            class="text-sm font-medium text-stone-900 dark:text-white"
                                        >
                                            {{ frontFile?.name }}
                                        </p>
                                        <button
                                            mat-stroked-button
                                            (click)="triggerFrontInput(); $event.stopPropagation()"
                                            class="scan-tool-mat-btn-pill mt-2 !text-xs"
                                        >
                                            {{ 'smartReduce.changeImage' | transloco }}
                                        </button>
                                    </div>
                                </div>
                            } @else {
                                <div class="flex flex-col items-center justify-center px-6 py-14">
                                    <mat-icon
                                        class="icon-size-12 mb-3 text-stone-400 dark:text-stone-500"
                                        >cloud_upload</mat-icon
                                    >
                                    <p
                                        class="text-base font-medium text-stone-800 dark:text-stone-200"
                                    >
                                        {{ 'smartScan.dropZone' | transloco }}
                                    </p>
                                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">
                                        JPG, JPEG, PNG
                                    </p>
                                </div>
                            }
                        </div>
                    </div>

                    @if (requiresBackSide) {
                        <div>
                            <h4
                                class="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400"
                            >
                                {{ 'smartScan.uploadBackSide' | transloco }}
                            </h4>
                            <div
                                class="scan-tool-dropzone"
                                (click)="triggerBackInput()"
                                (drop)="onDropBack($event)"
                                (dragover)="onDragOver($event)"
                            >
                                <input
                                    #backInput
                                    type="file"
                                    [accept]="ACCEPTED"
                                    (change)="onBackSelected($event)"
                                    class="hidden"
                                />
                                @if (backUrl) {
                                    <div class="flex items-center gap-4 p-4">
                                        <img
                                            [src]="backUrl"
                                            alt="Back"
                                            class="h-20 w-28 rounded-xl border border-stone-200 object-cover dark:border-gray-700"
                                        />
                                        <div class="min-w-0 flex-1">
                                            <p
                                                class="text-sm font-medium text-stone-900 dark:text-white"
                                            >
                                                {{ backFile?.name }}
                                            </p>
                                            <button
                                                mat-stroked-button
                                                (click)="
                                                    triggerBackInput(); $event.stopPropagation()
                                                "
                                                class="scan-tool-mat-btn-pill mt-2 !text-xs"
                                            >
                                                {{ 'smartReduce.changeImage' | transloco }}
                                            </button>
                                        </div>
                                    </div>
                                } @else {
                                    <div
                                        class="flex flex-col items-center justify-center px-6 py-10"
                                    >
                                        <mat-icon
                                            class="icon-size-10 mb-2 text-stone-400 dark:text-stone-500"
                                            >image</mat-icon
                                        >
                                        <p
                                            class="text-sm font-medium text-stone-700 dark:text-stone-300"
                                        >
                                            {{ 'smartScan.dropZone' | transloco }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    }

                    <div class="flex flex-wrap gap-3 pt-2">
                        <button
                            mat-flat-button
                            color="primary"
                            (click)="scanDocument()"
                            [disabled]="!frontFile || scanLoading()"
                            class="scan-tool-mat-btn-pill"
                        >
                            @if (scanLoading()) {
                                <mat-spinner diameter="20" class="mr-2 inline-block"></mat-spinner>
                                {{ 'smartScan.scanning' | transloco }}
                            } @else {
                                {{ 'smartScan.scanDocument' | transloco }}
                            }
                        </button>
                        <button
                            mat-stroked-button
                            (click)="reset()"
                            class="scan-tool-mat-btn-pill !border-stone-200 dark:!border-gray-600"
                        >
                            {{ 'smartScan.cancel' | transloco }}
                        </button>
                    </div>
                </div>
            </div>
        }

        <!-- ============================================ -->
        <!-- STEP 4: Results                              -->
        <!-- ============================================ -->
        @if (step === 'results' && scanResult()) {
            <div class="scan-tool-panel overflow-hidden">
                @if (getClassification(); as classification) {
                    <div
                        class="border-b border-stone-200/80 dark:border-gray-800"
                        [ngClass]="{
                            'bg-emerald-50/80 dark:bg-emerald-950/30': classification.isMatch,
                            'bg-amber-50/80 dark:bg-amber-950/30': !classification.isMatch,
                        }"
                    >
                        <div class="flex items-start gap-3 p-5 md:p-6">
                            <mat-icon
                                class="icon-size-6 mt-0.5 shrink-0"
                                [ngClass]="{
                                    'text-emerald-600 dark:text-emerald-400':
                                        classification.isMatch,
                                    'text-amber-600 dark:text-amber-400': !classification.isMatch,
                                }"
                            >
                                {{ classification.isMatch ? 'check_circle' : 'warning' }}
                            </mat-icon>
                            <div class="min-w-0 flex-1">
                                <p
                                    class="text-base font-semibold"
                                    [ngClass]="{
                                        'text-emerald-900 dark:text-emerald-200':
                                            classification.isMatch,
                                        'text-amber-900 dark:text-amber-200':
                                            !classification.isMatch,
                                    }"
                                >
                                    {{
                                        classification.isMatch
                                            ? ('smartScan.classificationMatch' | transloco)
                                            : ('smartScan.classificationMismatch' | transloco)
                                    }}
                                </p>

                                <div class="mt-3 flex flex-wrap items-center gap-2">
                                    <span
                                        class="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                        >{{ 'smartScan.requestedType' | transloco }}</span
                                    >
                                    <span
                                        class="inline-flex items-center rounded-xl border border-stone-200/80 bg-white/90 px-2.5 py-1 font-mono text-xs font-bold text-stone-800 dark:border-gray-600 dark:bg-gray-900/70 dark:text-stone-200"
                                    >
                                        {{ classification.requestedDocumentType }}
                                    </span>
                                    <mat-icon class="icon-size-4 text-stone-400"
                                        >arrow_forward</mat-icon
                                    >
                                    <span
                                        class="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                        >{{ 'smartScan.detectedType' | transloco }}</span
                                    >
                                    <span
                                        class="inline-flex items-center rounded-xl border px-2.5 py-1 font-mono text-xs font-bold"
                                        [ngClass]="{
                                            'border-emerald-300 bg-emerald-100/80 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-100':
                                                classification.isMatch,
                                            'border-amber-300 bg-amber-100/80 text-amber-900 dark:border-amber-800 dark:bg-amber-900/40 dark:text-amber-100':
                                                !classification.isMatch,
                                        }"
                                    >
                                        {{ classification.detectedDocumentType }}
                                    </span>
                                    @if (classification.detectedDocumentName) {
                                        <span class="text-sm text-stone-700 dark:text-stone-300">{{
                                            classification.detectedDocumentName
                                        }}</span>
                                    }
                                </div>

                                <div class="mt-4 flex items-center gap-3">
                                    <span
                                        class="whitespace-nowrap text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                        >{{ 'smartScan.confidence' | transloco }}</span
                                    >
                                    <div
                                        class="h-2 flex-1 overflow-hidden rounded-full bg-white/60 dark:bg-gray-800/60"
                                    >
                                        <div
                                            class="h-full rounded-full transition-all duration-500"
                                            [ngClass]="{
                                                'bg-emerald-500': confidencePercent >= 80,
                                                'bg-amber-500':
                                                    confidencePercent >= 50 &&
                                                    confidencePercent < 80,
                                                'bg-red-500': confidencePercent < 50,
                                            }"
                                            [style.width.%]="confidencePercent"
                                        ></div>
                                    </div>
                                    <span
                                        class="min-w-[3rem] text-right text-sm font-semibold tabular-nums"
                                        [ngClass]="{
                                            'text-emerald-800 dark:text-emerald-300':
                                                confidencePercent >= 80,
                                            'text-amber-800 dark:text-amber-300':
                                                confidencePercent >= 50 && confidencePercent < 80,
                                            'text-red-800 dark:text-red-300':
                                                confidencePercent < 50,
                                        }"
                                        >{{ confidencePercent }}%</span
                                    >
                                </div>
                            </div>
                        </div>

                        @if (classification.reason) {
                            <div
                                class="flex cursor-pointer select-none items-center gap-2 border-t px-5 py-3 dark:border-gray-700/80"
                                [ngClass]="{
                                    'border-emerald-200/80 hover:bg-emerald-100/40 dark:border-emerald-900/40 dark:hover:bg-emerald-900/20':
                                        classification.isMatch,
                                    'border-amber-200/80 hover:bg-amber-100/40 dark:border-amber-900/40 dark:hover:bg-amber-900/20':
                                        !classification.isMatch,
                                }"
                                (click)="showClassificationReason = !showClassificationReason"
                            >
                                <mat-icon
                                    class="icon-size-4 text-stone-500 transition-transform dark:text-stone-400"
                                    [ngClass]="{ 'rotate-90': showClassificationReason }"
                                >
                                    chevron_right
                                </mat-icon>
                                <span
                                    class="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                >
                                    {{
                                        showClassificationReason
                                            ? ('smartScan.hideReason' | transloco)
                                            : ('smartScan.showReason' | transloco)
                                    }}
                                </span>
                            </div>
                            @if (showClassificationReason) {
                                <div
                                    class="px-5 pb-5 text-sm leading-relaxed"
                                    [ngClass]="{
                                        'text-emerald-900 dark:text-emerald-200':
                                            classification.isMatch,
                                        'text-amber-900 dark:text-amber-200':
                                            !classification.isMatch,
                                    }"
                                >
                                    {{ classification.reason }}
                                </div>
                            }
                        }
                    </div>
                }

                <div
                    class="scan-tool-panel__header flex flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5"
                >
                    <h3 class="text-lg font-semibold text-stone-900 dark:text-white">
                        {{ 'smartScan.results' | transloco }}
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        <button
                            mat-stroked-button
                            (click)="showRawJson = !showRawJson"
                            class="scan-tool-mat-btn-pill !text-xs !border-stone-200 dark:!border-gray-600"
                        >
                            {{ 'smartScan.rawJson' | transloco }}
                        </button>
                        <button
                            mat-stroked-button
                            (click)="scanSimilar()"
                            class="scan-tool-mat-btn-pill !text-xs !border-stone-200 dark:!border-gray-600"
                        >
                            <mat-icon class="icon-size-4 mr-1">content_copy</mat-icon>
                            {{ 'smartScan.scanSimilar' | transloco }}
                        </button>
                        <button
                            mat-stroked-button
                            (click)="reset()"
                            class="scan-tool-mat-btn-pill !text-xs !border-stone-200 dark:!border-gray-600"
                        >
                            {{ 'smartScan.scanAnother' | transloco }}
                        </button>
                        <button
                            mat-flat-button
                            color="primary"
                            (click)="goToList()"
                            class="scan-tool-mat-btn-pill !text-xs"
                        >
                            {{ 'smartScan.viewInHistory' | transloco }}
                        </button>
                    </div>
                </div>

                <div class="space-y-6 p-6 md:p-8">
                    @if (showRawJson) {
                        <pre
                            class="max-h-96 overflow-auto rounded-2xl border border-stone-200/90 bg-stone-100/80 p-4 font-mono text-xs dark:border-gray-700 dark:bg-gray-900/60"
                            >{{ scanResult() | json }}</pre
                        >
                    } @else {
                        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div class="space-y-4">
                                @if (scanResult()?.url) {
                                    <div
                                        class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50"
                                    >
                                        <img
                                            [src]="scanResult()!.url"
                                            alt="Document front"
                                            class="max-h-80 w-full object-contain"
                                        />
                                    </div>
                                }
                                @if (scanResult()?.backUrl) {
                                    <div
                                        class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50"
                                    >
                                        <img
                                            [src]="scanResult()!.backUrl"
                                            alt="Document back"
                                            class="max-h-60 w-full object-contain"
                                        />
                                    </div>
                                }
                            </div>

                            <div class="space-y-3">
                                <h4 class="font-semibold text-stone-900 dark:text-white">
                                    {{ 'smartScan.extractedFields' | transloco }}
                                </h4>
                                <div
                                    class="overflow-hidden rounded-2xl border border-stone-200/90 dark:border-gray-700"
                                >
                                    @for (f of getExtractionFields(); track f.key; let i = $index) {
                                        <div
                                            class="flex justify-between gap-4 px-4 py-3"
                                            [ngClass]="{
                                                'bg-stone-50/80 dark:bg-gray-800/40': i % 2 === 0,
                                            }"
                                        >
                                            <span
                                                class="text-sm font-medium text-stone-500 dark:text-stone-400"
                                                >{{ f.key }}</span
                                            >
                                            <span
                                                class="break-all text-right text-sm font-medium text-stone-900 dark:text-white"
                                                >{{ f.value }}</span
                                            >
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        }
    </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool.component.scss */\n:host {\n  display: block;\n}\n.scan-tool-root {\n  --st-radius: 1.25rem;\n  --st-radius-sm: 0.875rem;\n}\n.scan-tool-steps__item--current {\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-steps__item--current:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--done {\n  background-color: rgb(231 229 228 / 0.8);\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--done:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(231 229 228 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--todo {\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(255 255 255 / 0.8);\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--todo:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity, 1));\n}\n.scan-tool-doc-card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-doc-card:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.6);\n}\n.scan-tool-doc-card {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-tool-doc-card:hover {\n  box-shadow: 0 12px 32px -12px rgba(15, 23, 42, 0.12);\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-doc-card:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-doc-card__media {\n  position: relative;\n  height: 9rem;\n  overflow: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n}\n.scan-tool-doc-card__media:where(.dark, .dark *) {\n  background-color: rgb(2 6 23 / 0.8);\n}\n.scan-tool-doc-card__code {\n  display: inline-block;\n  border-radius: 0.375rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.scan-tool-doc-card__code:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-panel {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-panel:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-tool-panel {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-tool-panel__header {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n}\n.scan-tool-panel__header:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  border-radius: 9999px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-pill:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(231 229 228 / var(--tw-text-opacity, 1));\n}\n.scan-tool-pill:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill--active {\n  --tw-border-opacity: 1;\n  border-color: rgb(28 25 23 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-pill--active:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip {\n  border-radius: 9999px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-chip:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-chip:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-chip--active {\n  --tw-border-opacity: 1;\n  border-color: rgb(28 25 23 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip--active:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-dropzone {\n  cursor: pointer;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 2px;\n  border-style: dashed;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  background-color: rgb(250 250 249 / 0.5);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-dropzone:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 6 23 / 0.3);\n}\n.scan-tool-dropzone:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(168 162 158 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.scan-tool-dropzone:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(100 116 139 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.scan-tool-strip {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(250 250 249 / 0.8);\n  padding: 1rem;\n}\n.scan-tool-strip:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n:host ::ng-deep .scan-tool-search .mat-mdc-text-field-wrapper {\n  background-color: transparent;\n}\n:host ::ng-deep .scan-tool-search .mdc-notched-outline .mdc-notched-outline__leading,\n:host ::ng-deep .scan-tool-search .mdc-notched-outline .mdc-notched-outline__notch,\n:host ::ng-deep .scan-tool-search .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(231, 229, 228) !important;\n}\n:host ::ng-deep .scan-tool-search .mat-mdc-form-field-focus-overlay {\n  opacity: 0;\n}\n:host ::ng-deep .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__leading,\n:host ::ng-deep .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__notch,\n:host ::ng-deep .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(120, 113, 108) !important;\n}\n:host ::ng-deep .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__leading,\n:host ::ng-deep .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__notch,\n:host ::ng-deep .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(63, 63, 70) !important;\n}\n:host ::ng-deep .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__leading,\n:host ::ng-deep .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__notch,\n:host ::ng-deep .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(161, 161, 170) !important;\n}\n:host ::ng-deep .scan-tool-mat-btn-pill.mat-mdc-unelevated-button,\n:host ::ng-deep .scan-tool-mat-btn-pill.mat-mdc-outlined-button {\n  border-radius: 9999px;\n}\n.doc-type-card {\n}\n/*# sourceMappingURL=scan-tool.component.css.map */\n'] }]
  }], null, { frontInput: [{
    type: ViewChild,
    args: ["frontInput"]
  }], backInput: [{
    type: ViewChild,
    args: ["backInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScanToolComponent, { className: "ScanToolComponent", filePath: "src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool.component.ts", lineNumber: 63 });
})();
export {
  ScanToolComponent
};
//# sourceMappingURL=chunk-4W2TDXEO.js.map
