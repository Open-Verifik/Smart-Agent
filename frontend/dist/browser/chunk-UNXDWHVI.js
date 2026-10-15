import {
  SmartScanService
} from "./chunk-ZSHYXHUF.js";
import {
  MatChipsModule
} from "./chunk-UGO33WM5.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-C3RXWDTM.js";
import "./chunk-JURKDGMK.js";
import {
  MatSelectModule
} from "./chunk-DW2XB3R4.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-WXNXCCYE.js";
import "./chunk-BYQUUNDI.js";
import "./chunk-PDLCCGUT.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-GG23NHUM.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CTAWHRE6.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-7FACNXV2.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-NBA3XD53.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EIYDU75T.js";
import "./chunk-IXSC6NFZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-5EV2TUYF.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VENEX45A.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DM2XPT7T.js";
import "./chunk-KTYFS5OT.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  JsonPipe,
  Location,
  LowerCasePipe,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
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
} from "./chunk-I5BUD46C.js";
import {
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool.component.ts
var _c0 = ["frontInput"];
var _c1 = ["backInput"];
var _c2 = ["editMenuTrigger"];
var _c3 = (a0, a1, a2) => ({ "scan-tool-steps__item--current": a0, "scan-tool-steps__item--done": a1, "scan-tool-steps__item--todo": a2 });
var _c4 = () => ["/smart-enroll/smart-scan/document-type/new"];
var _c5 = (a0) => ({ country: a0 });
var _c6 = (a0, a1) => ({ "bg-emerald-50/80 dark:bg-emerald-950/30": a0, "bg-amber-50/80 dark:bg-amber-950/30": a1 });
var _c7 = (a0, a1) => ({ "text-emerald-600 dark:text-emerald-400": a0, "text-amber-600 dark:text-amber-400": a1 });
var _c8 = (a0, a1) => ({ "text-emerald-900 dark:text-emerald-200": a0, "text-amber-900 dark:text-amber-200": a1 });
var _c9 = (a0, a1) => ({ "border-emerald-300 bg-emerald-100/80 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-100": a0, "border-amber-300 bg-amber-100/80 text-amber-900 dark:border-amber-800 dark:bg-amber-900/40 dark:text-amber-100": a1 });
var _c10 = (a0, a1, a2) => ({ "bg-emerald-500": a0, "bg-amber-500": a1, "bg-red-500": a2 });
var _c11 = (a0, a1, a2) => ({ "text-emerald-800 dark:text-emerald-300": a0, "text-amber-800 dark:text-amber-300": a1, "text-red-800 dark:text-red-300": a2 });
var _c12 = (a0, a1) => ({ "border-emerald-200/80 hover:bg-emerald-100/40 dark:border-emerald-900/40 dark:hover:bg-emerald-900/20": a0, "border-amber-200/80 hover:bg-amber-100/40 dark:border-amber-900/40 dark:hover:bg-amber-900/20": a1 });
var _c13 = (a0) => ({ "rotate-90": a0 });
var _c14 = (a0) => ({ "bg-stone-50/80 dark:bg-gray-800/40": a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item._id;
var _forTrack2 = ($index, $item) => $item.mapKey;
var _forTrack3 = ($index, $item) => $item.key;
function ScanToolComponent_For_25_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
function ScanToolComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanToolComponent_For_25_Conditional_0_Template, 1, 0, "span", 21);
    \u0275\u0275elementStart(1, "span", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const \u0275$index_38_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(\u0275$index_38_r3 > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c3, ctx_r3.isFlowStepCurrent(s_r2.id), ctx_r3.isFlowStepDone(s_r2.id), !ctx_r3.isFlowStepCurrent(s_r2.id) && !ctx_r3.isFlowStepDone(s_r2.id)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_38_r3 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, s_r2.labelKey));
  }
}
function ScanToolComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.errorMessage, " ");
  }
}
function ScanToolComponent_Conditional_27_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_27_For_8_Template_button_click_0_listener() {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleCountry(c_r6));
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
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("scan-tool-pill--active", ctx_r3.selectedCountry === c_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getFlag(c_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getCountryLabel(c_r6));
  }
}
function ScanToolComponent_Conditional_27_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_27_Conditional_9_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.searchQuery = "");
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ScanToolComponent_Conditional_27_Conditional_9_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_27_Conditional_9_For_20_Template_button_click_0_listener() {
      const cat_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleCategory(cat_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("scan-tool-chip--active", ctx_r3.selectedCategory === cat_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCategoryLabel(cat_r10), " ");
  }
}
function ScanToolComponent_Conditional_27_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "mat-form-field", 36)(2, "mat-icon", 37);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 38);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function ScanToolComponent_Conditional_27_Conditional_9_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.searchQuery, $event) || (ctx_r3.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ScanToolComponent_Conditional_27_Conditional_9_Conditional_6_Template, 3, 0, "button", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "div", 40)(9, "button", 41);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_27_Conditional_9_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleMine(false));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 41);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_27_Conditional_9_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleMine(true));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 27)(16, "button", 41);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_27_Conditional_9_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectedCategory = "");
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, ScanToolComponent_Conditional_27_Conditional_9_For_20_Template, 2, 3, "button", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.searchQuery);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 12, "smartScan.searchPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.searchQuery ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("scan-tool-chip--active", !ctx_r3.showMine);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "smartScan.mineFilterAll"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("scan-tool-chip--active", ctx_r3.showMine);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 16, "smartScan.mineFilterMine"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("scan-tool-chip--active", !ctx_r3.selectedCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 18, "smartScan.allCategories"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.categories);
  }
}
function ScanToolComponent_Conditional_27_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275pipe(3, "lowercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r3.filteredDocumentTypes.length, " ", \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind1(2, 2, "smartScan.results")), " ");
  }
}
function ScanToolComponent_Conditional_27_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "mat-icon", 44);
    \u0275\u0275elementStart(2, "p", 45);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:document-magnifying-glass");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartScan.selectCountryToSeeTypes"), " ");
  }
}
function ScanToolComponent_Conditional_27_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "mat-progress-spinner", 46);
    \u0275\u0275elementEnd();
  }
}
function ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 55);
  }
  if (rf & 2) {
    const dt_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", dt_r12.backImage, \u0275\u0275sanitizeUrl)("alt", dt_r12.name + " (back)");
  }
}
function ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 55);
  }
  if (rf & 2) {
    const dt_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", dt_r12.frontImage, \u0275\u0275sanitizeUrl)("alt", dt_r12.name);
  }
}
function ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "mat-icon", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:identification");
  }
}
function ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const dt_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.editDocumentType(dt_r12, $event));
    });
    \u0275\u0275elementStart(2, "mat-icon", 67);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "smartScan.editDocumentType"));
  }
}
function ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const dt_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.flipCard(dt_r12._id, $event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dt_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", ctx_r3.flippedCardId === dt_r12._id ? "Show front" : "Show back");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.flippedCardId === dt_r12._id ? "flip_to_front" : "flip");
  }
}
function ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.mineBadge"), " ");
  }
}
function ScanToolComponent_Conditional_27_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_27_Conditional_17_For_2_Template_div_click_0_listener() {
      const dt_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectDocumentType(dt_r12));
    })("contextmenu", function ScanToolComponent_Conditional_27_Conditional_17_For_2_Template_div_contextmenu_0_listener($event) {
      const dt_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onOwnedCardContextMenu($event, dt_r12));
    });
    \u0275\u0275elementStart(1, "div", 53)(2, "div", 54);
    \u0275\u0275template(3, ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_3_Template, 1, 2, "img", 55)(4, ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_4_Template, 1, 2, "img", 55)(5, ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_5_Template, 2, 1, "div", 56)(6, ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_6_Template, 4, 3, "button", 57)(7, ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_7_Template, 3, 2, "button", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 59)(9, "div", 60)(10, "span", 61);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ScanToolComponent_Conditional_27_Conditional_17_For_2_Conditional_12_Template, 3, 3, "span", 62);
    \u0275\u0275elementStart(13, "p", 63);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 64)(16, "span", 35);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const dt_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.flippedCardId === dt_r12._id && dt_r12.backImage ? 3 : dt_r12.frontImage ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(dt_r12.client ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(dt_r12.backImage ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(dt_r12.code);
    \u0275\u0275advance();
    \u0275\u0275conditional(dt_r12.client ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", dt_r12.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.getFlag(dt_r12.country));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getCountryLabel(dt_r12.country));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getCategoryLabel(dt_r12.category));
  }
}
function ScanToolComponent_Conditional_27_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275repeaterCreate(1, ScanToolComponent_Conditional_27_Conditional_17_For_2_Template, 24, 9, "div", 47, _forTrack1);
    \u0275\u0275elementStart(3, "a", 48)(4, "mat-icon", 49);
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 50);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 51);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.filteredDocumentTypes);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c4))("queryParams", \u0275\u0275pureFunction1(9, _c5, ctx_r3.selectedCountry));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "smartScan.addDocumentType"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "smartScan.addDocumentTypeHint"), " ");
  }
}
function ScanToolComponent_Conditional_27_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "mat-icon", 44);
    \u0275\u0275elementStart(2, "p", 45);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 69);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:document-magnifying-glass");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "smartScan.noDocTypes"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c4))("queryParams", \u0275\u0275pureFunction1(10, _c5, ctx_r3.selectedCountry));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "smartScan.addDocumentType"), " ");
  }
}
function ScanToolComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 25)(2, "div")(3, "h3", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27);
    \u0275\u0275repeaterCreate(7, ScanToolComponent_Conditional_27_For_8_Template, 5, 4, "button", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ScanToolComponent_Conditional_27_Conditional_9_Template, 21, 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 29)(11, "h4", 26);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ScanToolComponent_Conditional_27_Conditional_14_Template, 4, 6, "p", 30)(15, ScanToolComponent_Conditional_27_Conditional_15_Template, 5, 4, "div", 31)(16, ScanToolComponent_Conditional_27_Conditional_16_Template, 2, 0, "div", 32)(17, ScanToolComponent_Conditional_27_Conditional_17_Template, 12, 11, "div", 33)(18, ScanToolComponent_Conditional_27_Conditional_18_Template, 8, 12, "div", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "smartScan.selectCountry"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.countries);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.selectedCountry ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "smartScan.selectDocumentType"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.selectedCountry && !ctx_r3.documentTypesLoading ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.selectedCountry ? 15 : ctx_r3.documentTypesLoading ? 16 : ctx_r3.filteredDocumentTypes.length > 0 ? 17 : 18);
  }
}
function ScanToolComponent_Conditional_28_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75)(1, "mat-icon", 85);
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
function ScanToolComponent_Conditional_28_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "img", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.selectedDocType().frontImage, \u0275\u0275sanitizeUrl)("alt", ctx_r3.selectedDocType().name);
  }
}
function ScanToolComponent_Conditional_28_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "span", 87);
    \u0275\u0275text(2, "Front side preview not available");
    \u0275\u0275elementEnd()();
  }
}
function ScanToolComponent_Conditional_28_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "img", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.selectedDocType().backImage, \u0275\u0275sanitizeUrl)("alt", ctx_r3.selectedDocType().name + " (back)");
  }
}
function ScanToolComponent_Conditional_28_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "span", 87);
    \u0275\u0275text(2, "Back side preview not available");
    \u0275\u0275elementEnd()();
  }
}
function ScanToolComponent_Conditional_28_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanToolComponent_Conditional_28_Conditional_21_Conditional_0_Template, 2, 2, "div", 79)(1, ScanToolComponent_Conditional_28_Conditional_21_Conditional_1_Template, 3, 0, "div", 88);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.selectedDocType().backImage ? 0 : 1);
  }
}
function ScanToolComponent_Conditional_28_Conditional_23_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89)(1, "mat-icon", 90);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r16 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r16.name, " ");
  }
}
function ScanToolComponent_Conditional_28_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 78);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275repeaterCreate(4, ScanToolComponent_Conditional_28_Conditional_23_For_5_Template, 4, 1, "span", 89, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.extractableFields"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.selectedTemplateFields);
  }
}
function ScanToolComponent_Conditional_28_Conditional_24_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89)(1, "mat-icon", 90);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r17 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r17.name, " ");
  }
}
function ScanToolComponent_Conditional_28_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 91);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275repeaterCreate(4, ScanToolComponent_Conditional_28_Conditional_24_For_5_Template, 4, 1, "span", 89, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.backSideFields"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.selectedTemplateBackFields);
  }
}
function ScanToolComponent_Conditional_28_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "mat-icon", 92);
    \u0275\u0275text(2, "list_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 87);
    \u0275\u0275text(4, " Field definitions will be available after scanning. ");
    \u0275\u0275elementEnd()();
  }
}
function ScanToolComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 25)(2, "div", 70)(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 71)(6, "p", 72);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 73);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 74);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_28_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.backToSelect());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, ScanToolComponent_Conditional_28_Conditional_13_Template, 5, 3, "span", 75);
    \u0275\u0275elementStart(14, "div", 76)(15, "div", 77)(16, "h4", 78);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ScanToolComponent_Conditional_28_Conditional_19_Template, 2, 2, "div", 79)(20, ScanToolComponent_Conditional_28_Conditional_20_Template, 3, 0, "div", 80)(21, ScanToolComponent_Conditional_28_Conditional_21_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 77);
    \u0275\u0275template(23, ScanToolComponent_Conditional_28_Conditional_23_Template, 6, 3)(24, ScanToolComponent_Conditional_28_Conditional_24_Template, 6, 3)(25, ScanToolComponent_Conditional_28_Conditional_25_Template, 5, 0, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 82)(27, "button", 83);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_28_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.proceedToUpload());
    });
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementStart(30, "mat-icon", 84);
    \u0275\u0275text(31, "arrow_forward");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getFlag(ctx_r3.selectedDocType().country));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r3.selectedDocType().code, " \u2014 ", ctx_r3.selectedDocType().name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r3.getCountryLabel(ctx_r3.selectedDocType().country), " \xB7 ", ctx_r3.getCategoryLabel(ctx_r3.selectedDocType().category), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 14, "smartScan.changeDocument"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.requiresBackSide ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 16, "smartScan.previewTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.selectedDocType().frontImage ? 19 : 20);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.requiresBackSide ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.selectedTemplateFields.length > 0 ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.selectedTemplateBackFields.length > 0 ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.selectedTemplateFields.length === 0 && ctx_r3.selectedTemplateBackFields.length === 0 ? 25 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 18, "smartScan.proceedToScan"), " ");
  }
}
function ScanToolComponent_Conditional_29_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275element(1, "img", 99);
    \u0275\u0275elementStart(2, "div", 71)(3, "p", 100);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 101);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_29_Conditional_20_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.triggerFrontInput();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.frontUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.frontFile == null ? null : ctx_r3.frontFile.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "smartReduce.changeImage"), " ");
  }
}
function ScanToolComponent_Conditional_29_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "mat-icon", 102);
    \u0275\u0275text(2, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 103);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 104);
    \u0275\u0275text(7, " JPG, JPEG, PNG ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "smartScan.dropZone"), " ");
  }
}
function ScanToolComponent_Conditional_29_Conditional_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275element(1, "img", 106);
    \u0275\u0275elementStart(2, "div", 71)(3, "p", 100);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 101);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_29_Conditional_22_Conditional_7_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.triggerBackInput();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.backUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.backFile == null ? null : ctx_r3.backFile.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "smartReduce.changeImage"), " ");
  }
}
function ScanToolComponent_Conditional_29_Conditional_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "mat-icon", 107);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 108);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "smartScan.dropZone"), " ");
  }
}
function ScanToolComponent_Conditional_29_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h4", 93);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 94);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_29_Conditional_22_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.triggerBackInput());
    })("drop", function ScanToolComponent_Conditional_29_Conditional_22_Template_div_drop_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDropBack($event));
    })("dragover", function ScanToolComponent_Conditional_29_Conditional_22_Template_div_dragover_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDragOver($event));
    });
    \u0275\u0275elementStart(5, "input", 95, 3);
    \u0275\u0275listener("change", function ScanToolComponent_Conditional_29_Conditional_22_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onBackSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ScanToolComponent_Conditional_29_Conditional_22_Conditional_7_Template, 8, 5, "div", 96)(8, ScanToolComponent_Conditional_29_Conditional_22_Conditional_8_Template, 6, 3, "div", 105);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "smartScan.uploadBackSide"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("accept", ctx_r3.ACCEPTED);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.backUrl ? 7 : 8);
  }
}
function ScanToolComponent_Conditional_29_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 109);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartScan.scanning"), " ");
  }
}
function ScanToolComponent_Conditional_29_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartScan.scanDocument"), " ");
  }
}
function ScanToolComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 25)(2, "div", 70)(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 71)(6, "p", 72);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 73);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 74);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_29_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.backToPreview());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "h4", 93);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 94);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_29_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.triggerFrontInput());
    })("drop", function ScanToolComponent_Conditional_29_Template_div_drop_17_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDropFront($event));
    })("dragover", function ScanToolComponent_Conditional_29_Template_div_dragover_17_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDragOver($event));
    });
    \u0275\u0275elementStart(18, "input", 95, 2);
    \u0275\u0275listener("change", function ScanToolComponent_Conditional_29_Template_input_change_18_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFrontSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ScanToolComponent_Conditional_29_Conditional_20_Template, 8, 5, "div", 96)(21, ScanToolComponent_Conditional_29_Conditional_21_Template, 8, 3, "div", 97);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ScanToolComponent_Conditional_29_Conditional_22_Template, 9, 5, "div");
    \u0275\u0275elementStart(23, "div", 82)(24, "button", 98);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_29_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.scanDocument());
    });
    \u0275\u0275template(25, ScanToolComponent_Conditional_29_Conditional_25_Template, 3, 3)(26, ScanToolComponent_Conditional_29_Conditional_26_Template, 2, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.getFlag((tmp_4_0 = (tmp_4_0 = ctx_r3.selectedDocType()) == null ? null : tmp_4_0.country) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (tmp_5_0 = ctx_r3.selectedDocType()) == null ? null : tmp_5_0.code, " \u2014 ", (tmp_5_0 = ctx_r3.selectedDocType()) == null ? null : tmp_5_0.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r3.getCountryLabel((tmp_6_0 = (tmp_6_0 = ctx_r3.selectedDocType()) == null ? null : tmp_6_0.country) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : ""), " \xB7 ", ctx_r3.getCategoryLabel((tmp_6_0 = (tmp_6_0 = ctx_r3.selectedDocType()) == null ? null : tmp_6_0.category) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : ""), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "smartScan.changeDocument"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 14, "smartScan.uploadDocument"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("accept", ctx_r3.ACCEPTED);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.frontUrl ? 20 : 21);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.requiresBackSide ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r3.frontFile || ctx_r3.scanLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.scanLoading() ? 25 : 26);
  }
}
function ScanToolComponent_Conditional_30_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r23 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classification_r23.detectedDocumentName);
  }
}
function ScanToolComponent_Conditional_30_Conditional_1_Conditional_31_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r23 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c8, classification_r23.isMatch, !classification_r23.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r23.reason, " ");
  }
}
function ScanToolComponent_Conditional_30_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_30_Conditional_1_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.showClassificationReason = !ctx_r3.showClassificationReason);
    });
    \u0275\u0275elementStart(1, "mat-icon", 133);
    \u0275\u0275text(2, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 122);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ScanToolComponent_Conditional_30_Conditional_1_Conditional_31_Conditional_7_Template, 2, 5, "div", 134);
  }
  if (rf & 2) {
    const classification_r23 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c12, classification_r23.isMatch, !classification_r23.isMatch));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c13, ctx_r3.showClassificationReason));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.showClassificationReason ? \u0275\u0275pipeBind1(5, 4, "smartScan.hideReason") : \u0275\u0275pipeBind1(6, 6, "smartScan.showReason"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.showClassificationReason ? 7 : -1);
  }
}
function ScanToolComponent_Conditional_30_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "div", 118)(2, "mat-icon", 119);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 71)(5, "p", 120);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 121)(10, "span", 122);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 123);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-icon", 124);
    \u0275\u0275text(16, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 122);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 125);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ScanToolComponent_Conditional_30_Conditional_1_Conditional_22_Template, 2, 1, "span", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 127)(24, "span", 128);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 129);
    \u0275\u0275element(28, "div", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 131);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(31, ScanToolComponent_Conditional_30_Conditional_1_Conditional_31_Template, 8, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r23 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c6, classification_r23.isMatch, !classification_r23.isMatch));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c7, classification_r23.isMatch, !classification_r23.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r23.isMatch ? "check_circle" : "warning", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(34, _c8, classification_r23.isMatch, !classification_r23.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r23.isMatch ? \u0275\u0275pipeBind1(7, 18, "smartScan.classificationMatch") : \u0275\u0275pipeBind1(8, 20, "smartScan.classificationMismatch"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 22, "smartScan.requestedType"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", classification_r23.requestedDocumentType, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 24, "smartScan.detectedType"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(37, _c9, classification_r23.isMatch, !classification_r23.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r23.detectedDocumentType, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(classification_r23.detectedDocumentName ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 26, "smartScan.confidence"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r3.confidencePercent, "%");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(40, _c10, ctx_r3.confidencePercent >= 80, ctx_r3.confidencePercent >= 50 && ctx_r3.confidencePercent < 80, ctx_r3.confidencePercent < 50));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(44, _c11, ctx_r3.confidencePercent >= 80, ctx_r3.confidencePercent >= 50 && ctx_r3.confidencePercent < 80, ctx_r3.confidencePercent < 50));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r3.confidencePercent, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(classification_r23.reason ? 31 : -1);
  }
}
function ScanToolComponent_Conditional_30_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 116);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r3.scanResult()));
  }
}
function ScanToolComponent_Conditional_30_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136);
    \u0275\u0275element(1, "img", 140);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.scanResult().url, \u0275\u0275sanitizeUrl);
  }
}
function ScanToolComponent_Conditional_30_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136);
    \u0275\u0275element(1, "img", 141);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.scanResult().backUrl, \u0275\u0275sanitizeUrl);
  }
}
function ScanToolComponent_Conditional_30_Conditional_23_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r3.smartCheck.featureCode, "");
  }
}
function ScanToolComponent_Conditional_30_Conditional_23_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 143);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "smartScan.smartCheckMissing"), " ", ctx_r3.smartCheck.missing == null ? null : ctx_r3.smartCheck.missing.join(", "), " ");
  }
}
function ScanToolComponent_Conditional_30_Conditional_23_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 144);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.smartCheck.error == null ? null : ctx_r3.smartCheck.error.message, " ");
  }
}
function ScanToolComponent_Conditional_30_Conditional_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "h4", 139);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 142);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275template(7, ScanToolComponent_Conditional_30_Conditional_23_Conditional_5_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ScanToolComponent_Conditional_30_Conditional_23_Conditional_5_Conditional_8_Template, 3, 4, "p", 143)(9, ScanToolComponent_Conditional_30_Conditional_23_Conditional_5_Conditional_9_Template, 2, 1, "p", 144);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "smartScan.smartCheckResult"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "smartScan.smartCheckStatus." + ctx_r3.smartCheck.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.smartCheck.featureCode ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.smartCheck.reason === "missing_dependencies" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r3.smartCheck.error == null ? null : ctx_r3.smartCheck.error.message) ? 9 : -1);
  }
}
function ScanToolComponent_Conditional_30_Conditional_23_For_10_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 146);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r25 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, section_r25.labelKey), " ");
  }
}
function ScanToolComponent_Conditional_30_Conditional_23_For_10_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148)(1, "span", 146);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 149);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r26 = ctx.$implicit;
    const \u0275$index_605_r27 = ctx.$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c14, \u0275$index_605_r27 % 2 === 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r26.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r26.value);
  }
}
function ScanToolComponent_Conditional_30_Conditional_23_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275template(1, ScanToolComponent_Conditional_30_Conditional_23_For_10_Conditional_0_Conditional_1_Template, 3, 3, "h5", 146);
    \u0275\u0275elementStart(2, "div", 147);
    \u0275\u0275repeaterCreate(3, ScanToolComponent_Conditional_30_Conditional_23_For_10_Conditional_0_For_4_Template, 5, 5, "div", 148, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r25.labelKey ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(section_r25.fields);
  }
}
function ScanToolComponent_Conditional_30_Conditional_23_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanToolComponent_Conditional_30_Conditional_23_For_10_Conditional_0_Template, 5, 1, "div", 145);
  }
  if (rf & 2) {
    const section_r25 = ctx.$implicit;
    \u0275\u0275conditional(section_r25.fields.length ? 0 : -1);
  }
}
function ScanToolComponent_Conditional_30_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 135);
    \u0275\u0275template(2, ScanToolComponent_Conditional_30_Conditional_23_Conditional_2_Template, 2, 1, "div", 136)(3, ScanToolComponent_Conditional_30_Conditional_23_Conditional_3_Template, 2, 1, "div", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 137);
    \u0275\u0275template(5, ScanToolComponent_Conditional_30_Conditional_23_Conditional_5_Template, 10, 9, "div", 138);
    \u0275\u0275elementStart(6, "h4", 139);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, ScanToolComponent_Conditional_30_Conditional_23_For_10_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r3.scanResult()) == null ? null : tmp_4_0.url) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_5_0 = ctx_r3.scanResult()) == null ? null : tmp_5_0.backUrl) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.smartCheck ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "smartScan.extractedFields"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.extractionSections());
  }
}
function ScanToolComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, ScanToolComponent_Conditional_30_Conditional_1_Template, 32, 48, "div", 110);
    \u0275\u0275elementStart(2, "div", 111)(3, "h3", 112);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27)(7, "button", 113);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_30_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showRawJson = !ctx_r3.showRawJson);
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 113);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_30_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.scanSimilar());
    });
    \u0275\u0275elementStart(11, "mat-icon", 114);
    \u0275\u0275text(12, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 113);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_30_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reset());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 115);
    \u0275\u0275listener("click", function ScanToolComponent_Conditional_30_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToList());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 25);
    \u0275\u0275template(22, ScanToolComponent_Conditional_30_Conditional_22_Template, 3, 3, "pre", 116)(23, ScanToolComponent_Conditional_30_Conditional_23_Template, 11, 6, "div", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r3.getClassification()) ? 1 : -1, tmp_3_0);
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
    \u0275\u0275conditional(ctx_r3.showRawJson ? 22 : 23);
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
    this._route = inject(ActivatedRoute);
    this._location = inject(Location);
    this._transloco = inject(TranslocoService);
    this.step = "select";
    this.selectedCountry = "";
    this.searchQuery = "";
    this.selectedCategory = "";
    this.countries = [];
    this.categories = [];
    this.documentTypesLoading = false;
    this.showMine = false;
    this.flippedCardId = null;
    this._countriesSub = null;
    this._documentTypesSub = null;
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
    this.menuX = 0;
    this.menuY = 0;
    this.contextDocumentType = null;
  }
  ngOnInit() {
    this._scanService.resetScanState();
    this._scanService.documentTypes.set([]);
    const requestedCountry = this._route.snapshot.queryParamMap.get("country") || "";
    this._countriesSub = this._scanService.getDocumentTypeCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
        const match = countries.find((country) => country.toLowerCase() === requestedCountry.toLowerCase());
        if (match)
          this.toggleCountry(match);
        this._cdr.markForCheck();
      },
      error: () => {
        this.errorMessage = "Failed to load document types";
        this._cdr.markForCheck();
      }
    });
  }
  ngOnDestroy() {
    this._countriesSub?.unsubscribe();
    this._documentTypesSub?.unsubscribe();
  }
  getFlag(country) {
    const key = country?.toLowerCase().replace(/_/g, " ");
    return COUNTRY_FLAGS[key ?? ""] ?? "\u{1F3F3}\uFE0F";
  }
  getCountryLabel(country) {
    if (!country)
      return "";
    const normalized = country.trim().toLowerCase().replace(/[\s-]+/g, "_");
    const key = `smartScan.countries.${normalized}`;
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
    if (this.selectedCountry === country) {
      this.clearCountrySelection();
      return;
    }
    this.selectedCountry = country;
    this.selectedCategory = "";
    this.searchQuery = "";
    this.flippedCardId = null;
    this.loadDocumentTypes(country);
  }
  toggleCategory(category) {
    this.selectedCategory = this.selectedCategory === category ? "" : category;
  }
  toggleMine(mine) {
    if (this.showMine === mine || !this.selectedCountry)
      return;
    this.showMine = mine;
    this.selectedCategory = "";
    this.loadDocumentTypes(this.selectedCountry);
  }
  loadDocumentTypes(country) {
    if (!country)
      return;
    this._documentTypesSub?.unsubscribe();
    this.documentTypesLoading = true;
    this.categories = [];
    this._scanService.documentTypes.set([]);
    this._cdr.markForCheck();
    this._documentTypesSub = this._scanService.getDocumentTypes(country, this.showMine).subscribe({
      next: () => {
        const types = this._scanService.documentTypes();
        this.categories = [...new Set(types.map((t) => t.category).filter(Boolean))].sort();
        this.documentTypesLoading = false;
        this._cdr.markForCheck();
      },
      error: () => {
        this.documentTypesLoading = false;
        this.errorMessage = "Failed to load document types";
        this._cdr.markForCheck();
      }
    });
  }
  clearCountrySelection() {
    this._documentTypesSub?.unsubscribe();
    this._documentTypesSub = null;
    this.selectedCountry = "";
    this.selectedCategory = "";
    this.searchQuery = "";
    this.categories = [];
    this.documentTypesLoading = false;
    this.flippedCardId = null;
    this._scanService.documentTypes.set([]);
    this._cdr.markForCheck();
  }
  restoreSelectStep() {
    this.selectedCountry = this.lastCountry;
    this.selectedCategory = this.lastCategory;
    this.searchQuery = this.lastSearchQuery;
    this.step = "select";
    if (this.selectedCountry && this.documentTypes().length === 0) {
      this.loadDocumentTypes(this.selectedCountry);
    }
    this._cdr.markForCheck();
  }
  get filteredDocumentTypes() {
    if (!this.selectedCountry)
      return [];
    let types = this.documentTypes();
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
  onOwnedCardContextMenu(event, documentType) {
    if (!documentType.client)
      return;
    event.preventDefault();
    event.stopPropagation();
    this.contextDocumentType = documentType;
    this.menuX = event.clientX;
    this.menuY = event.clientY;
    this._cdr.detectChanges();
    this.editMenuTrigger?.openMenu();
  }
  editDocumentType(documentType, event) {
    event?.stopPropagation();
    this._router.navigate(["/smart-enroll/smart-scan/document-type", documentType._id]);
  }
  editContextDocumentType() {
    if (!this.contextDocumentType)
      return;
    this.editDocumentType(this.contextDocumentType);
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
    this.restoreSelectStep();
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
    this.restoreSelectStep();
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
      const templateId = this._scanService.selectedPromptTemplate()?._id;
      this._scanService.scanDocument(docType.code, image, backImage, templateId).subscribe({
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
    this.clearCountrySelection();
    this.showRawJson = false;
    this._cdr.markForCheck();
  }
  goBack() {
    const navigationId = window.history.state?.navigationId;
    if (typeof navigationId === "number" && navigationId > 1) {
      this._location.back();
      return;
    }
    this._router.navigate(["/smart-enroll/smart-scan/list"]);
  }
  goToList() {
    this._router.navigate(["/smart-enroll/smart-scan/list"]);
  }
  getExtractionFields() {
    const extraction = this.scanResult()?.OCRExtraction;
    if (!extraction || typeof extraction !== "object")
      return [];
    return Object.entries(extraction).filter(([k]) => k !== "documentClassification" && k !== "smartCheck" && !k.startsWith("_")).map(([key, value]) => ({ key, value }));
  }
  extractionSections() {
    const rows = this.getExtractionFields();
    const { front, back } = this.sideKeys();
    if (!front.size && !back.size)
      return [{ id: "all", labelKey: "", fields: rows }];
    return [
      { id: "front", labelKey: "smartScan.frontSideFields", fields: rows.filter((row) => front.has(row.key)) },
      {
        id: "back",
        labelKey: "smartScan.backSideFields",
        fields: rows.filter((row) => back.has(row.key) && !front.has(row.key))
      },
      {
        id: "other",
        labelKey: "smartScan.otherFields",
        fields: rows.filter((row) => !front.has(row.key) && !back.has(row.key))
      }
    ];
  }
  sideKeys() {
    const mapping = this.scanResult()?.fieldMapping;
    if (mapping?.front || mapping?.back) {
      return {
        front: new Set(Object.keys(mapping.front || {})),
        back: new Set(Object.keys(mapping.back || {}))
      };
    }
    return {
      front: new Set(this.selectedTemplateFields.map((field) => field.mapKey).filter(Boolean)),
      back: new Set(this.selectedTemplateBackFields.map((field) => field.mapKey).filter(Boolean))
    };
  }
  get smartCheck() {
    return this.scanResult()?.smartCheck ?? null;
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
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frontInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.backInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editMenuTrigger = _t.first);
      }
    }, decls: 41, vars: 28, consts: [["editMenuTrigger", "matMenuTrigger"], ["ownedTypeMenu", "matMenu"], ["frontInput", ""], ["backInput", ""], [1, "scan-tool-root", "flex", "flex-col", "flex-auto", "min-w-0", "min-h-screen", "bg-stone-50", "dark:bg-gray-950"], [1, "flex", "flex-col", "w-full", "max-w-5xl", "mx-auto", "px-5", "py-10", "md:px-8", "md:py-12"], [1, "mb-8", "md:mb-10"], ["mat-stroked-button", "", "type", "button", 1, "mb-5", "!rounded-xl", "!border-stone-200", "!text-stone-700", "dark:!border-gray-700", "dark:!text-stone-200", 3, "click"], [1, "icon-size-5", "mr-1"], [1, "flex", "flex-col", "gap-4", "sm:flex-row", "sm:items-start", "sm:gap-6"], [1, "flex", "h-11", "w-11", "shrink-0", "items-center", "justify-center", "rounded-2xl", "border", "border-stone-200/80", "bg-white", "shadow-sm", "dark:border-gray-700", "dark:bg-gray-900/60"], [1, "icon-size-5", "text-stone-700", "dark:text-stone-200"], [1, "min-w-0", "flex-1", "space-y-2"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "max-w-2xl", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "text-xs", "leading-relaxed", "text-stone-500", "dark:text-stone-500"], [1, "scan-tool-steps", "mb-8", "flex", "flex-wrap", "items-center", "gap-y-2", "text-xs", "sm:mb-10", "sm:text-sm"], [1, "mb-6", "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "scan-tool-panel", "overflow-hidden"], [1, "fixed", "z-50", "h-0", "w-0", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "scan-tool-steps__rule", "mx-0.5", "hidden", "h-px", "w-6", "shrink-0", "rounded-full", "bg-stone-200", "sm:block", "lg:w-10", "dark:bg-gray-700"], [1, "inline-flex", "max-w-[9rem]", "items-center", "gap-1.5", "truncate", "rounded-full", "px-3", "py-1.5", "font-medium", "transition-colors", "sm:max-w-none", 3, "ngClass"], [1, "w-5", "text-center", "text-[11px]", "tabular-nums", "opacity-80"], [1, "truncate"], [1, "space-y-6", "p-6", "md:p-8"], [1, "mb-4", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "scan-tool-pill", 3, "scan-tool-pill--active"], [1, "border-t", "border-stone-100", "px-6", "py-6", "md:px-8", "md:py-8", "dark:border-gray-800"], [1, "mb-6", "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "border", "border-dashed", "border-stone-200", "bg-stone-50/50", "py-16", "text-center", "dark:border-gray-700", "dark:bg-gray-950/30"], [1, "flex", "items-center", "justify-center", "py-16"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2", "lg:grid-cols-3"], ["type", "button", 1, "scan-tool-pill", 3, "click"], [1, "text-base", "leading-none"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "scan-tool-search", "w-full"], ["matPrefix", "", 1, "mr-2", "text-stone-400"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["matSuffix", "", "mat-icon-button", "", "type", "button"], [1, "mb-3", "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "scan-tool-chip", 3, "click"], ["type", "button", 1, "scan-tool-chip", 3, "scan-tool-chip--active"], ["matSuffix", "", "mat-icon-button", "", "type", "button", 3, "click"], [1, "icon-size-16", "mb-4", "text-stone-300", "dark:text-stone-600", 3, "svgIcon"], [1, "text-base", "font-medium", "text-stone-600", "dark:text-stone-400"], ["mode", "indeterminate", "diameter", "36"], [1, "doc-type-card", "cursor-pointer"], [1, "doc-type-card", "flex", "min-h-64", "cursor-pointer", "flex-col", "items-center", "justify-center", "rounded-3xl", "border", "border-dashed", "border-stone-300", "bg-stone-50/70", "p-6", "text-center", "transition", "hover:border-stone-400", "dark:border-gray-600", "dark:bg-gray-950/40", 3, "routerLink", "queryParams"], [1, "icon-size-10", "mb-3", "text-stone-400"], [1, "text-sm", "font-semibold", "text-stone-800", "dark:text-stone-100"], [1, "mt-1", "text-xs", "text-stone-500"], [1, "doc-type-card", "cursor-pointer", 3, "click", "contextmenu"], [1, "scan-tool-doc-card"], [1, "scan-tool-doc-card__media"], ["loading", "lazy", 1, "h-full", "w-full", "object-contain", 3, "src", "alt"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "bg-gradient-to-br", "from-stone-100", "to-stone-200/80", "dark:from-gray-900", "dark:to-gray-950"], ["type", "button", "mat-icon-button", "", 1, "absolute", "left-1", "top-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-black/40", "text-white", "hover:bg-black/60"], ["type", "button", "mat-icon-button", "", 1, "absolute", "right-1", "top-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-black/40", "text-white", "hover:bg-black/60", 3, "title"], [1, "p-4"], [1, "min-w-0"], [1, "scan-tool-doc-card__code"], [1, "ml-2", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-400"], [1, "mt-2", "truncate", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-2", "flex", "flex-wrap", "items-center", "gap-1.5", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "icon-size-16", "text-stone-300", "dark:text-stone-600", 3, "svgIcon"], ["type", "button", "mat-icon-button", "", 1, "absolute", "left-1", "top-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-black/40", "text-white", "hover:bg-black/60", 3, "click"], [1, "icon-size-4"], ["type", "button", "mat-icon-button", "", 1, "absolute", "right-1", "top-1", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-lg", "bg-black/40", "text-white", "hover:bg-black/60", 3, "click", "title"], [1, "mt-4", "text-sm", "font-semibold", "text-stone-900", "underline", "dark:text-stone-100", 3, "routerLink", "queryParams"], [1, "scan-tool-strip"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "text-xs", "text-stone-600", "dark:text-stone-400"], ["mat-stroked-button", "", 1, "scan-tool-mat-btn-pill", "shrink-0", "!text-xs", 3, "click"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-amber-100/90", "px-2.5", "py-1", "text-xs", "font-medium", "text-amber-900", "dark:bg-amber-950/50", "dark:text-amber-200"], [1, "grid", "grid-cols-1", "gap-0", "divide-y", "divide-stone-100", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "lg:grid-cols-2", "lg:divide-x", "lg:divide-y-0", "dark:divide-gray-800", "dark:border-gray-700"], [1, "space-y-4", "p-6", "md:p-8"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-stone-50/50", "dark:border-gray-700", "dark:bg-gray-950/50"], [1, "flex", "h-40", "items-center", "justify-center", "rounded-2xl", "border", "border-dashed", "border-stone-300", "bg-stone-50/50", "dark:border-gray-600", "dark:bg-gray-950/30"], [1, "flex", "flex-col", "items-center", "justify-center", "py-10", "text-center"], [1, "flex", "flex-wrap", "gap-3", "pt-2"], ["mat-flat-button", "", "color", "primary", 1, "scan-tool-mat-btn-pill", 3, "click"], [1, "icon-size-4", "ml-1"], [1, "icon-size-3.5"], [1, "max-h-56", "w-full", "object-contain", 3, "src", "alt"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "flex", "h-32", "items-center", "justify-center", "rounded-2xl", "border", "border-dashed", "border-stone-300", "bg-stone-50/50", "dark:border-gray-600", "dark:bg-gray-950/30"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-xl", "border", "border-stone-200/80", "bg-stone-50/80", "px-3", "py-1.5", "text-xs", "font-medium", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-800/50", "dark:text-stone-200"], [1, "icon-size-3.5", "text-stone-500", "dark:text-stone-400"], [1, "mt-4", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "icon-size-10", "mb-2", "text-stone-300", "dark:text-stone-600"], [1, "mb-2", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-600", "dark:text-stone-400"], [1, "scan-tool-dropzone", 3, "click", "drop", "dragover"], ["type", "file", 1, "hidden", 3, "change", "accept"], [1, "flex", "items-center", "gap-4", "p-4"], [1, "flex", "flex-col", "items-center", "justify-center", "px-6", "py-14"], ["mat-flat-button", "", "color", "primary", 1, "scan-tool-mat-btn-pill", 3, "click", "disabled"], ["alt", "Front", 1, "h-20", "w-28", "rounded-xl", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "text-sm", "font-medium", "text-stone-900", "dark:text-white"], ["mat-stroked-button", "", 1, "scan-tool-mat-btn-pill", "mt-2", "!text-xs", 3, "click"], [1, "icon-size-12", "mb-3", "text-stone-400", "dark:text-stone-500"], [1, "text-base", "font-medium", "text-stone-800", "dark:text-stone-200"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "items-center", "justify-center", "px-6", "py-10"], ["alt", "Back", 1, "h-20", "w-28", "rounded-xl", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "icon-size-10", "mb-2", "text-stone-400", "dark:text-stone-500"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], ["diameter", "20", 1, "mr-2", "inline-block"], [1, "border-b", "border-stone-200/80", "dark:border-gray-800", 3, "ngClass"], [1, "scan-tool-panel__header", "flex", "flex-wrap", "items-center", "justify-between", "gap-4", "px-5", "py-4", "md:px-6", "md:py-5"], [1, "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], ["mat-stroked-button", "", 1, "scan-tool-mat-btn-pill", "!text-xs", "!border-stone-200", "dark:!border-gray-600", 3, "click"], [1, "icon-size-4", "mr-1"], ["mat-flat-button", "", "color", "primary", 1, "scan-tool-mat-btn-pill", "!text-xs", 3, "click"], [1, "max-h-96", "overflow-auto", "rounded-2xl", "border", "border-stone-200/90", "bg-stone-100/80", "p-4", "font-mono", "text-xs", "dark:border-gray-700", "dark:bg-gray-900/60"], [1, "grid", "grid-cols-1", "gap-6", "lg:grid-cols-2"], [1, "flex", "items-start", "gap-3", "p-5", "md:p-6"], [1, "icon-size-6", "mt-0.5", "shrink-0", 3, "ngClass"], [1, "text-base", "font-semibold", 3, "ngClass"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "inline-flex", "items-center", "rounded-xl", "border", "border-stone-200/80", "bg-white/90", "px-2.5", "py-1", "font-mono", "text-xs", "font-bold", "text-stone-800", "dark:border-gray-600", "dark:bg-gray-900/70", "dark:text-stone-200"], [1, "icon-size-4", "text-stone-400"], [1, "inline-flex", "items-center", "rounded-xl", "border", "px-2.5", "py-1", "font-mono", "text-xs", "font-bold", 3, "ngClass"], [1, "text-sm", "text-stone-700", "dark:text-stone-300"], [1, "mt-4", "flex", "items-center", "gap-3"], [1, "whitespace-nowrap", "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "h-2", "flex-1", "overflow-hidden", "rounded-full", "bg-white/60", "dark:bg-gray-800/60"], [1, "h-full", "rounded-full", "transition-all", "duration-500", 3, "ngClass"], [1, "min-w-[3rem]", "text-right", "text-sm", "font-semibold", "tabular-nums", 3, "ngClass"], [1, "flex", "cursor-pointer", "select-none", "items-center", "gap-2", "border-t", "px-5", "py-3", "dark:border-gray-700/80", 3, "click", "ngClass"], [1, "icon-size-4", "text-stone-500", "transition-transform", "dark:text-stone-400", 3, "ngClass"], [1, "px-5", "pb-5", "text-sm", "leading-relaxed", 3, "ngClass"], [1, "space-y-4"], [1, "overflow-hidden", "rounded-3xl", "border", "border-stone-200/90", "bg-white", "dark:border-gray-700", "dark:bg-gray-900/50"], [1, "space-y-3"], [1, "rounded-2xl", "border", "border-stone-200/90", "p-4", "dark:border-gray-700"], [1, "font-semibold", "text-stone-900", "dark:text-white"], ["alt", "Document front", 1, "max-h-80", "w-full", "object-contain", 3, "src"], ["alt", "Document back", 1, "max-h-60", "w-full", "object-contain", 3, "src"], [1, "mt-1", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "mt-2", "text-sm", "text-amber-800", "dark:text-amber-200"], [1, "mt-2", "text-sm", "text-red-700", "dark:text-red-300"], [1, "space-y-2"], [1, "text-sm", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "dark:border-gray-700"], [1, "flex", "justify-between", "gap-4", "px-4", "py-3", 3, "ngClass"], [1, "break-all", "text-right", "text-sm", "font-medium", "text-stone-900", "dark:text-white"]], template: function ScanToolComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "header", 6)(3, "button", 7);
        \u0275\u0275listener("click", function ScanToolComponent_Template_button_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goBack());
        });
        \u0275\u0275elementStart(4, "mat-icon", 8);
        \u0275\u0275text(5, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 9)(9, "div", 10)(10, "mat-icon", 11);
        \u0275\u0275text(11, "document_scanner");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 12)(13, "h1", 13);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p", 14);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 15);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(22, "nav", 16);
        \u0275\u0275pipe(23, "transloco");
        \u0275\u0275repeaterCreate(24, ScanToolComponent_For_25_Template, 7, 10, null, null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ScanToolComponent_Conditional_26_Template, 2, 1, "div", 17)(27, ScanToolComponent_Conditional_27_Template, 19, 9, "div", 18)(28, ScanToolComponent_Conditional_28_Template, 32, 20, "div", 18)(29, ScanToolComponent_Conditional_29_Template, 27, 16, "div", 18)(30, ScanToolComponent_Conditional_30_Template, 24, 17, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "div", 19, 0);
        \u0275\u0275elementStart(33, "mat-menu", null, 1)(35, "button", 20);
        \u0275\u0275listener("click", function ScanToolComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.editContextDocumentType());
        });
        \u0275\u0275elementStart(36, "mat-icon");
        \u0275\u0275text(37, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "transloco");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const ownedTypeMenu_r28 = \u0275\u0275reference(34);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 16, "smartScan.back"), " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 18, "smartScan.toolTitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 20, "smartScan.toolSubtitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 22, "smartScan.privacyNote"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(23, 24, "smartScan.toolTitle"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.flowStepDefs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMessage ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "select" ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "preview" && ctx.selectedDocType() ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "upload" ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.step === "results" && ctx.scanResult() ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("left", ctx.menuX, "px")("top", ctx.menuY, "px");
        \u0275\u0275property("matMenuTriggerFor", ownedTypeMenu_r28);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 26, "smartScan.editDocumentType"));
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
      RouterLink,
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
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
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
      MatMenuModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<div\r
    class="scan-tool-root flex flex-col flex-auto min-w-0 min-h-screen bg-stone-50 dark:bg-gray-950"\r
>\r
    <div class="flex flex-col w-full max-w-5xl mx-auto px-5 py-10 md:px-8 md:py-12">\r
        <!-- Header -->\r
        <header class="mb-8 md:mb-10">\r
            <button\r
                mat-stroked-button\r
                type="button"\r
                class="mb-5 !rounded-xl !border-stone-200 !text-stone-700 dark:!border-gray-700 dark:!text-stone-200"\r
                (click)="goBack()"\r
            >\r
                <mat-icon class="icon-size-5 mr-1">arrow_back</mat-icon>\r
                {{ 'smartScan.back' | transloco }}\r
            </button>\r
            <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">\r
                <div\r
                    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-stone-200/80 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900/60"\r
                >\r
                    <mat-icon class="icon-size-5 text-stone-700 dark:text-stone-200"\r
                        >document_scanner</mat-icon\r
                    >\r
                </div>\r
                <div class="min-w-0 flex-1 space-y-2">\r
                    <h1\r
                        class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl"\r
                    >\r
                        {{ 'smartScan.toolTitle' | transloco }}\r
                    </h1>\r
                    <p class="max-w-2xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">\r
                        {{ 'smartScan.toolSubtitle' | transloco }}\r
                    </p>\r
                    <p class="text-xs leading-relaxed text-stone-500 dark:text-stone-500">\r
                        {{ 'smartScan.privacyNote' | transloco }}\r
                    </p>\r
                </div>\r
            </div>\r
        </header>\r
\r
        <!-- Flow steps -->\r
        <nav\r
            class="scan-tool-steps mb-8 flex flex-wrap items-center gap-y-2 text-xs sm:mb-10 sm:text-sm"\r
            [attr.aria-label]="'smartScan.toolTitle' | transloco"\r
        >\r
            @for (s of flowStepDefs; track s.id; let i = $index) {\r
                @if (i > 0) {\r
                    <span\r
                        class="scan-tool-steps__rule mx-0.5 hidden h-px w-6 shrink-0 rounded-full bg-stone-200 sm:block lg:w-10 dark:bg-gray-700"\r
                    ></span>\r
                }\r
                <span\r
                    class="inline-flex max-w-[9rem] items-center gap-1.5 truncate rounded-full px-3 py-1.5 font-medium transition-colors sm:max-w-none"\r
                    [ngClass]="{\r
                        'scan-tool-steps__item--current': isFlowStepCurrent(s.id),\r
                        'scan-tool-steps__item--done': isFlowStepDone(s.id),\r
                        'scan-tool-steps__item--todo':\r
                            !isFlowStepCurrent(s.id) && !isFlowStepDone(s.id),\r
                    }"\r
                >\r
                    <span class="w-5 text-center text-[11px] tabular-nums opacity-80">{{\r
                        i + 1\r
                    }}</span>\r
                    <span class="truncate">{{ s.labelKey | transloco }}</span>\r
                </span>\r
            }\r
        </nav>\r
\r
        @if (errorMessage) {\r
            <div\r
                class="mb-6 rounded-2xl border border-red-200/90 bg-red-50/90 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"\r
            >\r
                {{ errorMessage }}\r
            </div>\r
        }\r
\r
        <!-- ============================================ -->\r
        <!-- STEP 1: Select Country + Document Type       -->\r
        <!-- ============================================ -->\r
        @if (step === 'select') {\r
            <div class="scan-tool-panel overflow-hidden">\r
                <div class="space-y-6 p-6 md:p-8">\r
                    <div>\r
                        <h3\r
                            class="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                        >\r
                            {{ 'smartScan.selectCountry' | transloco }}\r
                        </h3>\r
                        <div class="flex flex-wrap gap-2">\r
                            @for (c of countries; track c) {\r
                                <button\r
                                    type="button"\r
                                    (click)="toggleCountry(c)"\r
                                    class="scan-tool-pill"\r
                                    [class.scan-tool-pill--active]="selectedCountry === c"\r
                                >\r
                                    <span class="text-base leading-none">{{ getFlag(c) }}</span>\r
                                    <span>{{ getCountryLabel(c) }}</span>\r
                                </button>\r
                            }\r
                        </div>\r
                    </div>\r
\r
                    @if (selectedCountry) {\r
                        <div>\r
                            <mat-form-field\r
                                appearance="outline"\r
                                class="scan-tool-search w-full"\r
                                subscriptSizing="dynamic"\r
                            >\r
                                <mat-icon matPrefix class="mr-2 text-stone-400">search</mat-icon>\r
                                <input\r
                                    matInput\r
                                    [(ngModel)]="searchQuery"\r
                                    [placeholder]="'smartScan.searchPlaceholder' | transloco"\r
                                />\r
                                @if (searchQuery) {\r
                                    <button\r
                                        matSuffix\r
                                        mat-icon-button\r
                                        (click)="searchQuery = ''"\r
                                        type="button"\r
                                    >\r
                                        <mat-icon>close</mat-icon>\r
                                    </button>\r
                                }\r
                            </mat-form-field>\r
                        </div>\r
\r
                        <div>\r
                            <div class="mb-3 flex flex-wrap gap-2">\r
                                <button\r
                                    type="button"\r
                                    (click)="toggleMine(false)"\r
                                    class="scan-tool-chip"\r
                                    [class.scan-tool-chip--active]="!showMine"\r
                                >\r
                                    {{ 'smartScan.mineFilterAll' | transloco }}\r
                                </button>\r
                                <button\r
                                    type="button"\r
                                    (click)="toggleMine(true)"\r
                                    class="scan-tool-chip"\r
                                    [class.scan-tool-chip--active]="showMine"\r
                                >\r
                                    {{ 'smartScan.mineFilterMine' | transloco }}\r
                                </button>\r
                            </div>\r
                            <div class="flex flex-wrap gap-2">\r
                                <button\r
                                    type="button"\r
                                    (click)="selectedCategory = ''"\r
                                    class="scan-tool-chip"\r
                                    [class.scan-tool-chip--active]="!selectedCategory"\r
                                >\r
                                    {{ 'smartScan.allCategories' | transloco }}\r
                                </button>\r
                                @for (cat of categories; track cat) {\r
                                    <button\r
                                        type="button"\r
                                        (click)="toggleCategory(cat)"\r
                                        class="scan-tool-chip"\r
                                        [class.scan-tool-chip--active]="selectedCategory === cat"\r
                                    >\r
                                        {{ getCategoryLabel(cat) }}\r
                                    </button>\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
                </div>\r
\r
                <div\r
                    class="border-t border-stone-100 px-6 py-6 md:px-8 md:py-8 dark:border-gray-800"\r
                >\r
                    <h4\r
                        class="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                    >\r
                        {{ 'smartScan.selectDocumentType' | transloco }}\r
                    </h4>\r
                    @if (selectedCountry && !documentTypesLoading) {\r
                        <p class="mb-6 text-sm text-stone-600 dark:text-stone-400">\r
                            {{ filteredDocumentTypes.length }}\r
                            {{ 'smartScan.results' | transloco | lowercase }}\r
                        </p>\r
                    }\r
\r
                    @if (!selectedCountry) {\r
                        <div\r
                            class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-200 bg-stone-50/50 py-16 text-center dark:border-gray-700 dark:bg-gray-950/30"\r
                        >\r
                            <mat-icon\r
                                class="icon-size-16 mb-4 text-stone-300 dark:text-stone-600"\r
                                [svgIcon]="'heroicons_outline:document-magnifying-glass'"\r
                            ></mat-icon>\r
                            <p class="text-base font-medium text-stone-600 dark:text-stone-400">\r
                                {{ 'smartScan.selectCountryToSeeTypes' | transloco }}\r
                            </p>\r
                        </div>\r
                    } @else if (documentTypesLoading) {\r
                        <div class="flex items-center justify-center py-16">\r
                            <mat-progress-spinner\r
                                mode="indeterminate"\r
                                diameter="36"\r
                            ></mat-progress-spinner>\r
                        </div>\r
                    } @else if (filteredDocumentTypes.length > 0) {\r
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">\r
                            @for (dt of filteredDocumentTypes; track dt._id) {\r
                                <div\r
                                    class="doc-type-card cursor-pointer"\r
                                    (click)="selectDocumentType(dt)"\r
                                    (contextmenu)="onOwnedCardContextMenu($event, dt)"\r
                                >\r
                                    <div class="scan-tool-doc-card">\r
                                        <div class="scan-tool-doc-card__media">\r
                                            @if (flippedCardId === dt._id && dt.backImage) {\r
                                                <img\r
                                                    [src]="dt.backImage"\r
                                                    [alt]="dt.name + ' (back)'"\r
                                                    class="h-full w-full object-contain"\r
                                                    loading="lazy"\r
                                                />\r
                                            } @else if (dt.frontImage) {\r
                                                <img\r
                                                    [src]="dt.frontImage"\r
                                                    [alt]="dt.name"\r
                                                    class="h-full w-full object-contain"\r
                                                    loading="lazy"\r
                                                />\r
                                            } @else {\r
                                                <div\r
                                                    class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200/80 dark:from-gray-900 dark:to-gray-950"\r
                                                >\r
                                                    <mat-icon\r
                                                        class="icon-size-16 text-stone-300 dark:text-stone-600"\r
                                                        [svgIcon]="\r
                                                            'heroicons_outline:identification'\r
                                                        "\r
                                                    ></mat-icon>\r
                                                </div>\r
                                            }\r
                                            @if (dt.client) {\r
                                                <button\r
                                                    type="button"\r
                                                    mat-icon-button\r
                                                    class="absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white hover:bg-black/60"\r
                                                    (click)="editDocumentType(dt, $event)"\r
                                                    [attr.aria-label]="'smartScan.editDocumentType' | transloco"\r
                                                >\r
                                                    <mat-icon class="icon-size-4">edit</mat-icon>\r
                                                </button>\r
                                            }\r
                                            @if (dt.backImage) {\r
                                                <button\r
                                                    type="button"\r
                                                    mat-icon-button\r
                                                    class="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white hover:bg-black/60"\r
                                                    (click)="flipCard(dt._id, $event)"\r
                                                    [title]="\r
                                                        flippedCardId === dt._id\r
                                                            ? 'Show front'\r
                                                            : 'Show back'\r
                                                    "\r
                                                >\r
                                                    <mat-icon class="icon-size-4">{{\r
                                                        flippedCardId === dt._id\r
                                                            ? 'flip_to_front'\r
                                                            : 'flip'\r
                                                    }}</mat-icon>\r
                                                </button>\r
                                            }\r
                                        </div>\r
                                        <div class="p-4">\r
                                            <div class="min-w-0">\r
                                                <span class="scan-tool-doc-card__code">{{\r
                                                    dt.code\r
                                                }}</span>\r
                                                @if (dt.client) {\r
                                                    <span class="ml-2 text-[10px] font-semibold uppercase tracking-wide text-stone-400">\r
                                                        {{ 'smartScan.mineBadge' | transloco }}\r
                                                    </span>\r
                                                }\r
                                                <p\r
                                                    class="mt-2 truncate text-sm font-semibold text-stone-900 dark:text-white"\r
                                                >\r
                                                    {{ dt.name }}\r
                                                </p>\r
                                            </div>\r
                                            <div\r
                                                class="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400"\r
                                            >\r
                                                <span class="text-base leading-none">{{\r
                                                    getFlag(dt.country)\r
                                                }}</span>\r
                                                <span>{{ getCountryLabel(dt.country) }}</span>\r
                                                <span>\xB7</span>\r
                                                <span>{{ getCategoryLabel(dt.category) }}</span>\r
                                            </div>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            }\r
                            <a\r
                                class="doc-type-card flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-stone-50/70 p-6 text-center transition hover:border-stone-400 dark:border-gray-600 dark:bg-gray-950/40"\r
                                [routerLink]="['/smart-enroll/smart-scan/document-type/new']"\r
                                [queryParams]="{ country: selectedCountry }"\r
                            >\r
                                <mat-icon class="icon-size-10 mb-3 text-stone-400">add</mat-icon>\r
                                <p class="text-sm font-semibold text-stone-800 dark:text-stone-100">\r
                                    {{ 'smartScan.addDocumentType' | transloco }}\r
                                </p>\r
                                <p class="mt-1 text-xs text-stone-500">\r
                                    {{ 'smartScan.addDocumentTypeHint' | transloco }}\r
                                </p>\r
                            </a>\r
                        </div>\r
                    } @else {\r
                        <div\r
                            class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-200 bg-stone-50/50 py-16 text-center dark:border-gray-700 dark:bg-gray-950/30"\r
                        >\r
                            <mat-icon\r
                                class="icon-size-16 mb-4 text-stone-300 dark:text-stone-600"\r
                                [svgIcon]="'heroicons_outline:document-magnifying-glass'"\r
                            ></mat-icon>\r
                            <p class="text-base font-medium text-stone-600 dark:text-stone-400">\r
                                {{ 'smartScan.noDocTypes' | transloco }}\r
                            </p>\r
                            <a\r
                                class="mt-4 text-sm font-semibold text-stone-900 underline dark:text-stone-100"\r
                                [routerLink]="['/smart-enroll/smart-scan/document-type/new']"\r
                                [queryParams]="{ country: selectedCountry }"\r
                            >\r
                                {{ 'smartScan.addDocumentType' | transloco }}\r
                            </a>\r
                        </div>\r
                    }\r
                </div>\r
            </div>\r
        }\r
\r
        <!-- ============================================ -->\r
        <!-- STEP 2: Preview selected document            -->\r
        <!-- ============================================ -->\r
        @if (step === 'preview' && selectedDocType()) {\r
            <div class="scan-tool-panel overflow-hidden">\r
                <div class="space-y-6 p-6 md:p-8">\r
                    <div class="scan-tool-strip">\r
                        <span class="text-base leading-none">{{\r
                            getFlag(selectedDocType()!.country)\r
                        }}</span>\r
                        <div class="min-w-0 flex-1">\r
                            <p class="text-sm font-semibold text-stone-900 dark:text-white">\r
                                {{ selectedDocType()!.code }} \u2014 {{ selectedDocType()!.name }}\r
                            </p>\r
                            <p class="text-xs text-stone-600 dark:text-stone-400">\r
                                {{ getCountryLabel(selectedDocType()!.country) }} \xB7\r
                                {{ getCategoryLabel(selectedDocType()!.category) }}\r
                            </p>\r
                        </div>\r
                        <button\r
                            mat-stroked-button\r
                            (click)="backToSelect()"\r
                            class="scan-tool-mat-btn-pill shrink-0 !text-xs"\r
                        >\r
                            {{ 'smartScan.changeDocument' | transloco }}\r
                        </button>\r
                    </div>\r
\r
                    @if (requiresBackSide) {\r
                        <span\r
                            class="inline-flex items-center gap-1 rounded-full bg-amber-100/90 px-2.5 py-1 text-xs font-medium text-amber-900 dark:bg-amber-950/50 dark:text-amber-200"\r
                        >\r
                            <mat-icon class="icon-size-3.5">flip</mat-icon>\r
                            {{ 'smartScan.requiresBackSide' | transloco }}\r
                        </span>\r
                    }\r
\r
                    <div\r
                        class="grid grid-cols-1 gap-0 divide-y divide-stone-100 overflow-hidden rounded-2xl border border-stone-200/90 lg:grid-cols-2 lg:divide-x lg:divide-y-0 dark:divide-gray-800 dark:border-gray-700"\r
                    >\r
                        <div class="space-y-4 p-6 md:p-8">\r
                            <h4\r
                                class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                            >\r
                                {{ 'smartScan.previewTitle' | transloco }}\r
                            </h4>\r
                            @if (selectedDocType()!.frontImage) {\r
                                <div\r
                                    class="overflow-hidden rounded-2xl border border-stone-200/90 bg-stone-50/50 dark:border-gray-700 dark:bg-gray-950/50"\r
                                >\r
                                    <img\r
                                        [src]="selectedDocType()!.frontImage"\r
                                        [alt]="selectedDocType()!.name"\r
                                        class="max-h-56 w-full object-contain"\r
                                    />\r
                                </div>\r
                            } @else {\r
                                <div\r
                                    class="flex h-40 items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50/50 dark:border-gray-600 dark:bg-gray-950/30"\r
                                >\r
                                    <span class="text-sm text-stone-500 dark:text-stone-400"\r
                                        >Front side preview not available</span\r
                                    >\r
                                </div>\r
                            }\r
                            @if (requiresBackSide) {\r
                                @if (selectedDocType()!.backImage) {\r
                                    <div\r
                                        class="overflow-hidden rounded-2xl border border-stone-200/90 bg-stone-50/50 dark:border-gray-700 dark:bg-gray-950/50"\r
                                    >\r
                                        <img\r
                                            [src]="selectedDocType()!.backImage"\r
                                            [alt]="selectedDocType()!.name + ' (back)'"\r
                                            class="max-h-56 w-full object-contain"\r
                                        />\r
                                    </div>\r
                                } @else {\r
                                    <div\r
                                        class="flex h-32 items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50/50 dark:border-gray-600 dark:bg-gray-950/30"\r
                                    >\r
                                        <span class="text-sm text-stone-500 dark:text-stone-400"\r
                                            >Back side preview not available</span\r
                                        >\r
                                    </div>\r
                                }\r
                            }\r
                        </div>\r
\r
                        <div class="space-y-4 p-6 md:p-8">\r
                            @if (selectedTemplateFields.length > 0) {\r
                                <h4\r
                                    class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{ 'smartScan.extractableFields' | transloco }}\r
                                </h4>\r
                                <div class="flex flex-wrap gap-2">\r
                                    @for (f of selectedTemplateFields; track f.mapKey) {\r
                                        <span\r
                                            class="inline-flex items-center gap-1.5 rounded-xl border border-stone-200/80 bg-stone-50/80 px-3 py-1.5 text-xs font-medium text-stone-800 dark:border-gray-700 dark:bg-gray-800/50 dark:text-stone-200"\r
                                        >\r
                                            <mat-icon\r
                                                class="icon-size-3.5 text-stone-500 dark:text-stone-400"\r
                                                >check_circle</mat-icon\r
                                            >\r
                                            {{ f.name }}\r
                                        </span>\r
                                    }\r
                                </div>\r
                            }\r
                            @if (selectedTemplateBackFields.length > 0) {\r
                                <h4\r
                                    class="mt-4 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{ 'smartScan.backSideFields' | transloco }}\r
                                </h4>\r
                                <div class="flex flex-wrap gap-2">\r
                                    @for (f of selectedTemplateBackFields; track f.mapKey) {\r
                                        <span\r
                                            class="inline-flex items-center gap-1.5 rounded-xl border border-stone-200/80 bg-stone-50/80 px-3 py-1.5 text-xs font-medium text-stone-800 dark:border-gray-700 dark:bg-gray-800/50 dark:text-stone-200"\r
                                        >\r
                                            <mat-icon\r
                                                class="icon-size-3.5 text-stone-500 dark:text-stone-400"\r
                                                >check_circle</mat-icon\r
                                            >\r
                                            {{ f.name }}\r
                                        </span>\r
                                    }\r
                                </div>\r
                            }\r
                            @if (\r
                                selectedTemplateFields.length === 0 &&\r
                                selectedTemplateBackFields.length === 0\r
                            ) {\r
                                <div\r
                                    class="flex flex-col items-center justify-center py-10 text-center"\r
                                >\r
                                    <mat-icon\r
                                        class="icon-size-10 mb-2 text-stone-300 dark:text-stone-600"\r
                                        >list_alt</mat-icon\r
                                    >\r
                                    <p class="text-sm text-stone-500 dark:text-stone-400">\r
                                        Field definitions will be available after scanning.\r
                                    </p>\r
                                </div>\r
                            }\r
                        </div>\r
                    </div>\r
\r
                    <div class="flex flex-wrap gap-3 pt-2">\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            (click)="proceedToUpload()"\r
                            class="scan-tool-mat-btn-pill"\r
                        >\r
                            {{ 'smartScan.proceedToScan' | transloco }}\r
                            <mat-icon class="icon-size-4 ml-1">arrow_forward</mat-icon>\r
                        </button>\r
                    </div>\r
                </div>\r
            </div>\r
        }\r
\r
        <!-- ============================================ -->\r
        <!-- STEP 3: Upload Document                      -->\r
        <!-- ============================================ -->\r
        @if (step === 'upload') {\r
            <div class="scan-tool-panel overflow-hidden">\r
                <div class="space-y-6 p-6 md:p-8">\r
                    <div class="scan-tool-strip">\r
                        <span class="text-base leading-none">{{\r
                            getFlag(selectedDocType()?.country ?? '')\r
                        }}</span>\r
                        <div class="min-w-0 flex-1">\r
                            <p class="text-sm font-semibold text-stone-900 dark:text-white">\r
                                {{ selectedDocType()?.code }} \u2014 {{ selectedDocType()?.name }}\r
                            </p>\r
                            <p class="text-xs text-stone-600 dark:text-stone-400">\r
                                {{ getCountryLabel(selectedDocType()?.country ?? '') }} \xB7\r
                                {{ getCategoryLabel(selectedDocType()?.category ?? '') }}\r
                            </p>\r
                        </div>\r
                        <button\r
                            mat-stroked-button\r
                            (click)="backToPreview()"\r
                            class="scan-tool-mat-btn-pill shrink-0 !text-xs"\r
                        >\r
                            {{ 'smartScan.changeDocument' | transloco }}\r
                        </button>\r
                    </div>\r
\r
                    <div>\r
                        <h4\r
                            class="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400"\r
                        >\r
                            {{ 'smartScan.uploadDocument' | transloco }}\r
                        </h4>\r
                        <div\r
                            class="scan-tool-dropzone"\r
                            (click)="triggerFrontInput()"\r
                            (drop)="onDropFront($event)"\r
                            (dragover)="onDragOver($event)"\r
                        >\r
                            <input\r
                                #frontInput\r
                                type="file"\r
                                [accept]="ACCEPTED"\r
                                (change)="onFrontSelected($event)"\r
                                class="hidden"\r
                            />\r
                            @if (frontUrl) {\r
                                <div class="flex items-center gap-4 p-4">\r
                                    <img\r
                                        [src]="frontUrl"\r
                                        alt="Front"\r
                                        class="h-20 w-28 rounded-xl border border-stone-200 object-cover dark:border-gray-700"\r
                                    />\r
                                    <div class="min-w-0 flex-1">\r
                                        <p\r
                                            class="text-sm font-medium text-stone-900 dark:text-white"\r
                                        >\r
                                            {{ frontFile?.name }}\r
                                        </p>\r
                                        <button\r
                                            mat-stroked-button\r
                                            (click)="triggerFrontInput(); $event.stopPropagation()"\r
                                            class="scan-tool-mat-btn-pill mt-2 !text-xs"\r
                                        >\r
                                            {{ 'smartReduce.changeImage' | transloco }}\r
                                        </button>\r
                                    </div>\r
                                </div>\r
                            } @else {\r
                                <div class="flex flex-col items-center justify-center px-6 py-14">\r
                                    <mat-icon\r
                                        class="icon-size-12 mb-3 text-stone-400 dark:text-stone-500"\r
                                        >cloud_upload</mat-icon\r
                                    >\r
                                    <p\r
                                        class="text-base font-medium text-stone-800 dark:text-stone-200"\r
                                    >\r
                                        {{ 'smartScan.dropZone' | transloco }}\r
                                    </p>\r
                                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                        JPG, JPEG, PNG\r
                                    </p>\r
                                </div>\r
                            }\r
                        </div>\r
                    </div>\r
\r
                    @if (requiresBackSide) {\r
                        <div>\r
                            <h4\r
                                class="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400"\r
                            >\r
                                {{ 'smartScan.uploadBackSide' | transloco }}\r
                            </h4>\r
                            <div\r
                                class="scan-tool-dropzone"\r
                                (click)="triggerBackInput()"\r
                                (drop)="onDropBack($event)"\r
                                (dragover)="onDragOver($event)"\r
                            >\r
                                <input\r
                                    #backInput\r
                                    type="file"\r
                                    [accept]="ACCEPTED"\r
                                    (change)="onBackSelected($event)"\r
                                    class="hidden"\r
                                />\r
                                @if (backUrl) {\r
                                    <div class="flex items-center gap-4 p-4">\r
                                        <img\r
                                            [src]="backUrl"\r
                                            alt="Back"\r
                                            class="h-20 w-28 rounded-xl border border-stone-200 object-cover dark:border-gray-700"\r
                                        />\r
                                        <div class="min-w-0 flex-1">\r
                                            <p\r
                                                class="text-sm font-medium text-stone-900 dark:text-white"\r
                                            >\r
                                                {{ backFile?.name }}\r
                                            </p>\r
                                            <button\r
                                                mat-stroked-button\r
                                                (click)="\r
                                                    triggerBackInput(); $event.stopPropagation()\r
                                                "\r
                                                class="scan-tool-mat-btn-pill mt-2 !text-xs"\r
                                            >\r
                                                {{ 'smartReduce.changeImage' | transloco }}\r
                                            </button>\r
                                        </div>\r
                                    </div>\r
                                } @else {\r
                                    <div\r
                                        class="flex flex-col items-center justify-center px-6 py-10"\r
                                    >\r
                                        <mat-icon\r
                                            class="icon-size-10 mb-2 text-stone-400 dark:text-stone-500"\r
                                            >image</mat-icon\r
                                        >\r
                                        <p\r
                                            class="text-sm font-medium text-stone-700 dark:text-stone-300"\r
                                        >\r
                                            {{ 'smartScan.dropZone' | transloco }}\r
                                        </p>\r
                                    </div>\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
\r
                    <div class="flex flex-wrap gap-3 pt-2">\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            (click)="scanDocument()"\r
                            [disabled]="!frontFile || scanLoading()"\r
                            class="scan-tool-mat-btn-pill"\r
                        >\r
                            @if (scanLoading()) {\r
                                <mat-spinner diameter="20" class="mr-2 inline-block"></mat-spinner>\r
                                {{ 'smartScan.scanning' | transloco }}\r
                            } @else {\r
                                {{ 'smartScan.scanDocument' | transloco }}\r
                            }\r
                        </button>\r
                    </div>\r
                </div>\r
            </div>\r
        }\r
\r
        <!-- ============================================ -->\r
        <!-- STEP 4: Results                              -->\r
        <!-- ============================================ -->\r
        @if (step === 'results' && scanResult()) {\r
            <div class="scan-tool-panel overflow-hidden">\r
                @if (getClassification(); as classification) {\r
                    <div\r
                        class="border-b border-stone-200/80 dark:border-gray-800"\r
                        [ngClass]="{\r
                            'bg-emerald-50/80 dark:bg-emerald-950/30': classification.isMatch,\r
                            'bg-amber-50/80 dark:bg-amber-950/30': !classification.isMatch,\r
                        }"\r
                    >\r
                        <div class="flex items-start gap-3 p-5 md:p-6">\r
                            <mat-icon\r
                                class="icon-size-6 mt-0.5 shrink-0"\r
                                [ngClass]="{\r
                                    'text-emerald-600 dark:text-emerald-400':\r
                                        classification.isMatch,\r
                                    'text-amber-600 dark:text-amber-400': !classification.isMatch,\r
                                }"\r
                            >\r
                                {{ classification.isMatch ? 'check_circle' : 'warning' }}\r
                            </mat-icon>\r
                            <div class="min-w-0 flex-1">\r
                                <p\r
                                    class="text-base font-semibold"\r
                                    [ngClass]="{\r
                                        'text-emerald-900 dark:text-emerald-200':\r
                                            classification.isMatch,\r
                                        'text-amber-900 dark:text-amber-200':\r
                                            !classification.isMatch,\r
                                    }"\r
                                >\r
                                    {{\r
                                        classification.isMatch\r
                                            ? ('smartScan.classificationMatch' | transloco)\r
                                            : ('smartScan.classificationMismatch' | transloco)\r
                                    }}\r
                                </p>\r
\r
                                <div class="mt-3 flex flex-wrap items-center gap-2">\r
                                    <span\r
                                        class="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                        >{{ 'smartScan.requestedType' | transloco }}</span\r
                                    >\r
                                    <span\r
                                        class="inline-flex items-center rounded-xl border border-stone-200/80 bg-white/90 px-2.5 py-1 font-mono text-xs font-bold text-stone-800 dark:border-gray-600 dark:bg-gray-900/70 dark:text-stone-200"\r
                                    >\r
                                        {{ classification.requestedDocumentType }}\r
                                    </span>\r
                                    <mat-icon class="icon-size-4 text-stone-400"\r
                                        >arrow_forward</mat-icon\r
                                    >\r
                                    <span\r
                                        class="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                        >{{ 'smartScan.detectedType' | transloco }}</span\r
                                    >\r
                                    <span\r
                                        class="inline-flex items-center rounded-xl border px-2.5 py-1 font-mono text-xs font-bold"\r
                                        [ngClass]="{\r
                                            'border-emerald-300 bg-emerald-100/80 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-100':\r
                                                classification.isMatch,\r
                                            'border-amber-300 bg-amber-100/80 text-amber-900 dark:border-amber-800 dark:bg-amber-900/40 dark:text-amber-100':\r
                                                !classification.isMatch,\r
                                        }"\r
                                    >\r
                                        {{ classification.detectedDocumentType }}\r
                                    </span>\r
                                    @if (classification.detectedDocumentName) {\r
                                        <span class="text-sm text-stone-700 dark:text-stone-300">{{\r
                                            classification.detectedDocumentName\r
                                        }}</span>\r
                                    }\r
                                </div>\r
\r
                                <div class="mt-4 flex items-center gap-3">\r
                                    <span\r
                                        class="whitespace-nowrap text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                        >{{ 'smartScan.confidence' | transloco }}</span\r
                                    >\r
                                    <div\r
                                        class="h-2 flex-1 overflow-hidden rounded-full bg-white/60 dark:bg-gray-800/60"\r
                                    >\r
                                        <div\r
                                            class="h-full rounded-full transition-all duration-500"\r
                                            [ngClass]="{\r
                                                'bg-emerald-500': confidencePercent >= 80,\r
                                                'bg-amber-500':\r
                                                    confidencePercent >= 50 &&\r
                                                    confidencePercent < 80,\r
                                                'bg-red-500': confidencePercent < 50,\r
                                            }"\r
                                            [style.width.%]="confidencePercent"\r
                                        ></div>\r
                                    </div>\r
                                    <span\r
                                        class="min-w-[3rem] text-right text-sm font-semibold tabular-nums"\r
                                        [ngClass]="{\r
                                            'text-emerald-800 dark:text-emerald-300':\r
                                                confidencePercent >= 80,\r
                                            'text-amber-800 dark:text-amber-300':\r
                                                confidencePercent >= 50 && confidencePercent < 80,\r
                                            'text-red-800 dark:text-red-300':\r
                                                confidencePercent < 50,\r
                                        }"\r
                                        >{{ confidencePercent }}%</span\r
                                    >\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                        @if (classification.reason) {\r
                            <div\r
                                class="flex cursor-pointer select-none items-center gap-2 border-t px-5 py-3 dark:border-gray-700/80"\r
                                [ngClass]="{\r
                                    'border-emerald-200/80 hover:bg-emerald-100/40 dark:border-emerald-900/40 dark:hover:bg-emerald-900/20':\r
                                        classification.isMatch,\r
                                    'border-amber-200/80 hover:bg-amber-100/40 dark:border-amber-900/40 dark:hover:bg-amber-900/20':\r
                                        !classification.isMatch,\r
                                }"\r
                                (click)="showClassificationReason = !showClassificationReason"\r
                            >\r
                                <mat-icon\r
                                    class="icon-size-4 text-stone-500 transition-transform dark:text-stone-400"\r
                                    [ngClass]="{ 'rotate-90': showClassificationReason }"\r
                                >\r
                                    chevron_right\r
                                </mat-icon>\r
                                <span\r
                                    class="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                >\r
                                    {{\r
                                        showClassificationReason\r
                                            ? ('smartScan.hideReason' | transloco)\r
                                            : ('smartScan.showReason' | transloco)\r
                                    }}\r
                                </span>\r
                            </div>\r
                            @if (showClassificationReason) {\r
                                <div\r
                                    class="px-5 pb-5 text-sm leading-relaxed"\r
                                    [ngClass]="{\r
                                        'text-emerald-900 dark:text-emerald-200':\r
                                            classification.isMatch,\r
                                        'text-amber-900 dark:text-amber-200':\r
                                            !classification.isMatch,\r
                                    }"\r
                                >\r
                                    {{ classification.reason }}\r
                                </div>\r
                            }\r
                        }\r
                    </div>\r
                }\r
\r
                <div\r
                    class="scan-tool-panel__header flex flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5"\r
                >\r
                    <h3 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                        {{ 'smartScan.results' | transloco }}\r
                    </h3>\r
                    <div class="flex flex-wrap gap-2">\r
                        <button\r
                            mat-stroked-button\r
                            (click)="showRawJson = !showRawJson"\r
                            class="scan-tool-mat-btn-pill !text-xs !border-stone-200 dark:!border-gray-600"\r
                        >\r
                            {{ 'smartScan.rawJson' | transloco }}\r
                        </button>\r
                        <button\r
                            mat-stroked-button\r
                            (click)="scanSimilar()"\r
                            class="scan-tool-mat-btn-pill !text-xs !border-stone-200 dark:!border-gray-600"\r
                        >\r
                            <mat-icon class="icon-size-4 mr-1">content_copy</mat-icon>\r
                            {{ 'smartScan.scanSimilar' | transloco }}\r
                        </button>\r
                        <button\r
                            mat-stroked-button\r
                            (click)="reset()"\r
                            class="scan-tool-mat-btn-pill !text-xs !border-stone-200 dark:!border-gray-600"\r
                        >\r
                            {{ 'smartScan.scanAnother' | transloco }}\r
                        </button>\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            (click)="goToList()"\r
                            class="scan-tool-mat-btn-pill !text-xs"\r
                        >\r
                            {{ 'smartScan.viewInHistory' | transloco }}\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                <div class="space-y-6 p-6 md:p-8">\r
                    @if (showRawJson) {\r
                        <pre\r
                            class="max-h-96 overflow-auto rounded-2xl border border-stone-200/90 bg-stone-100/80 p-4 font-mono text-xs dark:border-gray-700 dark:bg-gray-900/60"\r
                            >{{ scanResult() | json }}</pre\r
                        >\r
                    } @else {\r
                        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">\r
                            <div class="space-y-4">\r
                                @if (scanResult()?.url) {\r
                                    <div\r
                                        class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50"\r
                                    >\r
                                        <img\r
                                            [src]="scanResult()!.url"\r
                                            alt="Document front"\r
                                            class="max-h-80 w-full object-contain"\r
                                        />\r
                                    </div>\r
                                }\r
                                @if (scanResult()?.backUrl) {\r
                                    <div\r
                                        class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50"\r
                                    >\r
                                        <img\r
                                            [src]="scanResult()!.backUrl"\r
                                            alt="Document back"\r
                                            class="max-h-60 w-full object-contain"\r
                                        />\r
                                    </div>\r
                                }\r
                            </div>\r
\r
                            <div class="space-y-3">\r
                                @if (smartCheck) {\r
                                    <div\r
                                        class="rounded-2xl border border-stone-200/90 p-4 dark:border-gray-700"\r
                                    >\r
                                        <h4 class="font-semibold text-stone-900 dark:text-white">\r
                                            {{ 'smartScan.smartCheckResult' | transloco }}\r
                                        </h4>\r
                                        <p class="mt-1 text-sm text-stone-600 dark:text-stone-300">\r
                                            {{ 'smartScan.smartCheckStatus.' + smartCheck.status | transloco }}\r
                                            @if (smartCheck.featureCode) {\r
                                                <span> \xB7 {{ smartCheck.featureCode }}</span>\r
                                            }\r
                                        </p>\r
                                        @if (smartCheck.reason === 'missing_dependencies') {\r
                                            <p class="mt-2 text-sm text-amber-800 dark:text-amber-200">\r
                                                {{ 'smartScan.smartCheckMissing' | transloco }}\r
                                                {{ smartCheck.missing?.join(', ') }}\r
                                            </p>\r
                                        }\r
                                        @if (smartCheck.error?.message) {\r
                                            <p class="mt-2 text-sm text-red-700 dark:text-red-300">\r
                                                {{ smartCheck.error?.message }}\r
                                            </p>\r
                                        }\r
                                    </div>\r
                                }\r
                                <h4 class="font-semibold text-stone-900 dark:text-white">\r
                                    {{ 'smartScan.extractedFields' | transloco }}\r
                                </h4>\r
                                @for (section of extractionSections(); track section.id) {\r
                                    @if (section.fields.length) {\r
                                        <div class="space-y-2">\r
                                            @if (section.labelKey) {\r
                                                <h5 class="text-sm font-medium text-stone-500 dark:text-stone-400">\r
                                                    {{ section.labelKey | transloco }}\r
                                                </h5>\r
                                            }\r
                                            <div\r
                                                class="overflow-hidden rounded-2xl border border-stone-200/90 dark:border-gray-700"\r
                                            >\r
                                                @for (f of section.fields; track f.key; let i = $index) {\r
                                                    <div\r
                                                        class="flex justify-between gap-4 px-4 py-3"\r
                                                        [ngClass]="{\r
                                                            'bg-stone-50/80 dark:bg-gray-800/40': i % 2 === 0,\r
                                                        }"\r
                                                    >\r
                                                        <span\r
                                                            class="text-sm font-medium text-stone-500 dark:text-stone-400"\r
                                                            >{{ f.key }}</span\r
                                                        >\r
                                                        <span\r
                                                            class="break-all text-right text-sm font-medium text-stone-900 dark:text-white"\r
                                                            >{{ f.value }}</span\r
                                                        >\r
                                                    </div>\r
                                                }\r
                                            </div>\r
                                        </div>\r
                                    }\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
                </div>\r
            </div>\r
        }\r
    </div>\r
    <div\r
        class="fixed z-50 h-0 w-0"\r
        [style.left.px]="menuX"\r
        [style.top.px]="menuY"\r
        [matMenuTriggerFor]="ownedTypeMenu"\r
        #editMenuTrigger="matMenuTrigger"\r
    ></div>\r
    <mat-menu #ownedTypeMenu="matMenu">\r
        <button mat-menu-item type="button" (click)="editContextDocumentType()">\r
            <mat-icon>edit</mat-icon>\r
            <span>{{ 'smartScan.editDocumentType' | transloco }}</span>\r
        </button>\r
    </mat-menu>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool.component.scss */\n:host {\n  display: block;\n}\n.scan-tool-root {\n  --st-radius: 1.25rem;\n  --st-radius-sm: 0.875rem;\n}\n.scan-tool-steps__item--current {\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-steps__item--current:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--done {\n  background-color: rgb(231 229 228 / 0.8);\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--done:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(231 229 228 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--todo {\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(255 255 255 / 0.8);\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-steps__item--todo:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity, 1));\n}\n.scan-tool-doc-card {\n  position: relative;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-doc-card:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.6);\n}\n.scan-tool-doc-card {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-tool-doc-card:hover {\n  box-shadow: 0 12px 32px -12px rgba(15, 23, 42, 0.12);\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-doc-card:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-doc-card__media {\n  position: relative;\n  height: 9rem;\n  overflow: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n}\n.scan-tool-doc-card__media:where(.dark, .dark *) {\n  background-color: rgb(2 6 23 / 0.8);\n}\n.scan-tool-doc-card__code {\n  display: inline-block;\n  border-radius: 0.375rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.scan-tool-doc-card__code:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.scan-tool-panel {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-panel:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-tool-panel {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-tool-panel__header {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n}\n.scan-tool-panel__header:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  border-radius: 9999px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-pill:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(231 229 228 / var(--tw-text-opacity, 1));\n}\n.scan-tool-pill:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-pill--active {\n  --tw-border-opacity: 1;\n  border-color: rgb(28 25 23 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-tool-pill--active:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip {\n  border-radius: 9999px;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-chip:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n}\n.scan-tool-chip:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n}\n.scan-tool-chip--active {\n  --tw-border-opacity: 1;\n  border-color: rgb(28 25 23 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.scan-tool-chip--active:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.scan-tool-dropzone {\n  cursor: pointer;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 2px;\n  border-style: dashed;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  background-color: rgb(250 250 249 / 0.5);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.scan-tool-dropzone:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 6 23 / 0.3);\n}\n.scan-tool-dropzone:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(168 162 158 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.scan-tool-dropzone:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(100 116 139 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.scan-tool-strip {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(250 250 249 / 0.8);\n  padding: 1rem;\n}\n.scan-tool-strip:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n:host ::ng-deep .scan-tool-search .mat-mdc-text-field-wrapper {\n  background-color: transparent;\n}\n:host ::ng-deep .scan-tool-search .mdc-notched-outline .mdc-notched-outline__leading,\n:host ::ng-deep .scan-tool-search .mdc-notched-outline .mdc-notched-outline__notch,\n:host ::ng-deep .scan-tool-search .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(231, 229, 228) !important;\n}\n:host ::ng-deep .scan-tool-search .mat-mdc-form-field-focus-overlay {\n  opacity: 0;\n}\n:host ::ng-deep .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__leading,\n:host ::ng-deep .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__notch,\n:host ::ng-deep .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(120, 113, 108) !important;\n}\n:host ::ng-deep .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__leading,\n:host ::ng-deep .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__notch,\n:host ::ng-deep .dark .scan-tool-search .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(63, 63, 70) !important;\n}\n:host ::ng-deep .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__leading,\n:host ::ng-deep .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__notch,\n:host ::ng-deep .dark .scan-tool-search.mat-focused .mdc-notched-outline .mdc-notched-outline__trailing {\n  border-color: rgb(161, 161, 170) !important;\n}\n:host ::ng-deep .scan-tool-mat-btn-pill.mat-mdc-unelevated-button,\n:host ::ng-deep .scan-tool-mat-btn-pill.mat-mdc-outlined-button {\n  border-radius: 9999px;\n}\n.doc-type-card {\n}\n/*# sourceMappingURL=scan-tool.component.css.map */\n'] }]
  }], null, { frontInput: [{
    type: ViewChild,
    args: ["frontInput"]
  }], backInput: [{
    type: ViewChild,
    args: ["backInput"]
  }], editMenuTrigger: [{
    type: ViewChild,
    args: ["editMenuTrigger"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScanToolComponent, { className: "ScanToolComponent", filePath: "src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool.component.ts", lineNumber: 67 });
})();
export {
  ScanToolComponent
};
//# sourceMappingURL=chunk-UNXDWHVI.js.map
