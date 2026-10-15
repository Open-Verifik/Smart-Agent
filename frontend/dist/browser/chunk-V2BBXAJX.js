import {
  ScanDeleteConfirmDialogComponent
} from "./chunk-B6QICPIW.js";
import {
  SmartScanService
} from "./chunk-ZSHYXHUF.js";
import {
  FuseHighlightService
} from "./chunk-6Z7R47EE.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CTAWHRE6.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-WKFG3L4B.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-7FACNXV2.js";
import {
  MatAnchor,
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
  DomSanitizer,
  NgClass,
  SecurityContext,
  finalize,
  inject,
  setClassMetadata,
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
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I5BUD46C.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/smart-scan/smart-scan.types.ts
var resolveEnrollmentRecordLink = (scan) => {
  if (!scan)
    return null;
  const ar = scan.appRegistration;
  const recordId = typeof ar === "string" ? ar : ar?._id;
  if (!recordId)
    return null;
  const fromScan = typeof scan.project === "string" ? scan.project : scan.project?._id;
  const fromAr = ar && typeof ar !== "string" ? typeof ar.project === "string" ? ar.project : ar.project?._id : void 0;
  const projectId = fromScan || fromAr;
  if (!projectId)
    return null;
  return { projectId, recordId };
};

// src/app/modules/smart-enroll/smart-scan/scan-detail/scan-detail.component.ts
var _c0 = (a0, a1) => ({ "bg-emerald-50/80 dark:bg-emerald-950/30": a0, "bg-amber-50/80 dark:bg-amber-950/30": a1 });
var _c1 = (a0, a1) => ({ "text-emerald-600 dark:text-emerald-400": a0, "text-amber-600 dark:text-amber-400": a1 });
var _c2 = (a0, a1) => ({ "text-emerald-900 dark:text-emerald-200": a0, "text-amber-900 dark:text-amber-200": a1 });
var _c3 = (a0, a1) => ({ "border-emerald-300 bg-emerald-100/80 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-100": a0, "border-amber-300 bg-amber-100/80 text-amber-900 dark:border-amber-800 dark:bg-amber-900/40 dark:text-amber-100": a1 });
var _c4 = (a0, a1, a2) => ({ "bg-emerald-500": a0, "bg-amber-500": a1, "bg-red-500": a2 });
var _c5 = (a0, a1, a2) => ({ "text-emerald-800 dark:text-emerald-300": a0, "text-amber-800 dark:text-amber-300": a1, "text-red-800 dark:text-red-300": a2 });
var _c6 = (a0, a1) => ({ "border-emerald-200/80 hover:bg-emerald-100/40 dark:border-emerald-900/40 dark:hover:bg-emerald-900/20": a0, "border-amber-200/80 hover:bg-amber-100/40 dark:border-amber-900/40 dark:hover:bg-amber-900/20": a1 });
var _c7 = (a0) => ({ "rotate-90": a0 });
var _c8 = (a0) => ({ "bg-stone-50/80 dark:bg-gray-800/40": a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function ScanDetailComponent_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19)(1, "mat-icon", 22);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", ctx);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartScan.viewEnrollmentRecord"), " ");
  }
}
function ScanDetailComponent_Conditional_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 21);
  }
}
function ScanDetailComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ScanDetailComponent_Conditional_24_Conditional_1_Template, 5, 4, "a", 19);
    \u0275\u0275elementStart(2, "button", 20);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_24_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275template(3, ScanDetailComponent_Conditional_24_Conditional_3_Template, 1, 0, "mat-spinner", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.enrollmentRecordLink()) ? 1 : -1, tmp_1_0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.deleteLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.deleteLoading ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "smartScan.deleteScan"), " ");
  }
}
function ScanDetailComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.deleteError, " ");
  }
}
function ScanDetailComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementEnd();
  }
}
function ScanDetailComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function ScanDetailComponent_Conditional_29_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.scan.documentType);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.scan.documentNumber);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_13_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classification_r4.detectedDocumentName);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_13_Conditional_31_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c2, classification_r4.isMatch, !classification_r4.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r4.reason, " ");
  }
}
function ScanDetailComponent_Conditional_29_Conditional_13_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_29_Conditional_13_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showClassificationReason = !ctx_r1.showClassificationReason);
    });
    \u0275\u0275elementStart(1, "mat-icon", 55);
    \u0275\u0275text(2, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ScanDetailComponent_Conditional_29_Conditional_13_Conditional_31_Conditional_7_Template, 2, 5, "div", 56);
  }
  if (rf & 2) {
    const classification_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c6, classification_r4.isMatch, !classification_r4.isMatch));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c7, ctx_r1.showClassificationReason));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showClassificationReason ? \u0275\u0275pipeBind1(5, 4, "smartScan.hideReason") : \u0275\u0275pipeBind1(6, 6, "smartScan.showReason"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showClassificationReason ? 7 : -1);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 39)(2, "mat-icon", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41)(5, "p", 42);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 43)(10, "span", 44);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 45);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-icon", 46);
    \u0275\u0275text(16, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 44);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 47);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ScanDetailComponent_Conditional_29_Conditional_13_Conditional_22_Template, 2, 1, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 49)(24, "span", 50);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 51);
    \u0275\u0275element(28, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 53);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(31, ScanDetailComponent_Conditional_29_Conditional_13_Conditional_31_Template, 8, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c0, classification_r4.isMatch, !classification_r4.isMatch));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c1, classification_r4.isMatch, !classification_r4.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r4.isMatch ? "check_circle" : "warning", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(34, _c2, classification_r4.isMatch, !classification_r4.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r4.isMatch ? \u0275\u0275pipeBind1(7, 18, "smartScan.classificationMatch") : \u0275\u0275pipeBind1(8, 20, "smartScan.classificationMismatch"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 22, "smartScan.requestedType"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", classification_r4.requestedDocumentType, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 24, "smartScan.detectedType"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(37, _c3, classification_r4.isMatch, !classification_r4.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r4.detectedDocumentType, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(classification_r4.detectedDocumentName ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 26, "smartScan.confidence"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.confidencePercent, "%");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(40, _c4, ctx_r1.confidencePercent >= 80, ctx_r1.confidencePercent >= 50 && ctx_r1.confidencePercent < 80, ctx_r1.confidencePercent < 50));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(44, _c5, ctx_r1.confidencePercent >= 80, ctx_r1.confidencePercent >= 50 && ctx_r1.confidencePercent < 80, ctx_r1.confidencePercent < 50));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.confidencePercent, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(classification_r4.reason ? 31 : -1);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 57)(2, "span", 58);
    \u0275\u0275text(3, "OCRExtraction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 59);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_29_Conditional_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyJson());
    });
    \u0275\u0275elementStart(5, "mat-icon", 60);
    \u0275\u0275text(6, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "pre", 61);
    \u0275\u0275element(11, "code", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.copyFeedback ? \u0275\u0275pipeBind1(8, 2, "smartScan.copied") : \u0275\u0275pipeBind1(9, 4, "smartScan.copyJson"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", ctx_r1.highlightedJson, \u0275\u0275sanitizeHtml);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "img", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.scan.url, \u0275\u0275sanitizeUrl);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "img", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.scan.backUrl, \u0275\u0275sanitizeUrl);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_23_For_9_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 70);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, section_r7.labelKey), " ");
  }
}
function ScanDetailComponent_Conditional_29_Conditional_23_For_9_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "span", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r8 = ctx.$implicit;
    const \u0275$index_230_r9 = ctx.$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c8, \u0275$index_230_r9 % 2 === 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r8.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r8.value);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_23_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275template(1, ScanDetailComponent_Conditional_29_Conditional_23_For_9_Conditional_0_Conditional_1_Template, 3, 3, "h4", 70);
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275repeaterCreate(3, ScanDetailComponent_Conditional_29_Conditional_23_For_9_Conditional_0_For_4_Template, 5, 5, "div", 71, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r7.labelKey ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(section_r7.fields);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_23_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanDetailComponent_Conditional_29_Conditional_23_For_9_Conditional_0_Template, 5, 1, "div", 69);
  }
  if (rf & 2) {
    const section_r7 = ctx.$implicit;
    \u0275\u0275conditional(section_r7.fields.length ? 0 : -1);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 63);
    \u0275\u0275template(2, ScanDetailComponent_Conditional_29_Conditional_23_Conditional_2_Template, 2, 1, "div", 64)(3, ScanDetailComponent_Conditional_29_Conditional_23_Conditional_3_Template, 2, 1, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65)(5, "h3", 66);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, ScanDetailComponent_Conditional_29_Conditional_23_For_9_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.scan.url ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.scan.backUrl ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "smartScan.extractedFields"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.extractionSections());
  }
}
function ScanDetailComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26)(5, "mat-icon", 27);
    \u0275\u0275text(6, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ScanDetailComponent_Conditional_29_Conditional_8_Template, 2, 1, "span", 28)(9, ScanDetailComponent_Conditional_29_Conditional_9_Template, 2, 1, "span", 29);
    \u0275\u0275elementStart(10, "span", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 31);
    \u0275\u0275template(13, ScanDetailComponent_Conditional_29_Conditional_13_Template, 32, 48, "div", 32);
    \u0275\u0275elementStart(14, "div", 33)(15, "h2", 34);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 35);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_29_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRawJson = !ctx_r1.showRawJson);
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 36);
    \u0275\u0275template(22, ScanDetailComponent_Conditional_29_Conditional_22_Template, 12, 6, "div", 37)(23, ScanDetailComponent_Conditional_29_Conditional_23_Template, 10, 5, "div", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusColor(ctx_r1.scan.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ctx_r1.scan.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getMethodLabel(ctx_r1.scan.validationMethod), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.scan.documentType ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.scan.documentNumber ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.scan.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.getClassification()) ? 13 : -1, tmp_7_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "smartScan.scanInfo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 12, "smartScan.rawJson"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showRawJson ? 22 : 23);
  }
}
var ScanDetailComponent = class _ScanDetailComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._scanService = inject(SmartScanService);
    this._cdr = inject(ChangeDetectorRef);
    this._dialog = inject(MatDialog);
    this._transloco = inject(TranslocoService);
    this._highlightService = inject(FuseHighlightService);
    this._domSanitizer = inject(DomSanitizer);
    this.scan = null;
    this.templateFields = [];
    this.loading = true;
    this.errorMessage = null;
    this.deleteLoading = false;
    this.deleteError = null;
    this.showRawJson = false;
    this.showClassificationReason = false;
    this.copyFeedback = false;
    this._copyFeedbackTimeout = null;
  }
  ngOnInit() {
    const id = this._route.snapshot.paramMap.get("id");
    if (!id) {
      this.goBack();
      return;
    }
    this._scanService.getScan(id).subscribe({
      next: (res) => {
        this.scan = res.data;
        const cls = this.getClassification();
        this.showClassificationReason = cls ? !cls.isMatch : false;
        this.loading = false;
        this.loadTemplateFields();
        this._cdr.markForCheck();
      },
      error: () => {
        this.errorMessage = "Failed to load scan details";
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  goBack() {
    this._router.navigate(["/smart-enroll/smart-scan/list"]);
  }
  confirmDelete() {
    if (!this.scan?._id || this.deleteLoading)
      return;
    this.deleteError = null;
    this._dialog.open(ScanDeleteConfirmDialogComponent, {
      width: "400px",
      data: {
        titleKey: "smartScan.deleteScanTitle",
        messageKey: "smartScan.deleteScanMessage",
        cancelKey: "smartScan.deleteScanCancel",
        confirmKey: "smartScan.deleteScanConfirm"
      }
    }).afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.deleteLoading = true;
      this._cdr.markForCheck();
      this._scanService.deleteScan(this.scan._id).pipe(finalize(() => {
        this.deleteLoading = false;
        this._cdr.markForCheck();
      })).subscribe({
        next: () => {
          this._scanService.getScans(1, this._scanService.pageSize()).subscribe({ error: () => {
          } });
          this.goBack();
        },
        error: (err) => {
          const msg = err?.error?.message || err?.message || this._transloco.translate("smartScan.deleteScanError");
          this.deleteError = msg;
        }
      });
    });
  }
  enrollmentRecordLink() {
    const link = resolveEnrollmentRecordLink(this.scan);
    if (!link)
      return null;
    return ["/smart-enroll/projects", link.projectId, "records", link.recordId];
  }
  getClassification() {
    const ocr = this.scan?.OCRExtraction;
    return ocr?.documentClassification ?? null;
  }
  get confidencePercent() {
    const cls = this.getClassification();
    return Math.round((cls?.confidence ?? 0) * 100);
  }
  getExtractionFields() {
    const extraction = this.scan?.OCRExtraction;
    if (!extraction || typeof extraction !== "object")
      return [];
    return Object.entries(extraction).filter(([k]) => k !== "documentClassification" && !k.startsWith("_")).map(([key, value]) => ({ key, value }));
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
  loadTemplateFields() {
    const mapping = this.scan?.fieldMapping;
    if (mapping?.front && Object.keys(mapping.front).length || mapping?.back && Object.keys(mapping.back).length)
      return;
    const code = this.scan?.documentType;
    if (!code)
      return;
    this._scanService.getPromptTemplatesByCode(code).subscribe({
      next: (response) => {
        const rows = Array.isArray(response.data) ? response.data : [];
        this.templateFields = rows.find((row) => row.fields?.length)?.fields || [];
        this._cdr.markForCheck();
      },
      error: () => {
        this.templateFields = [];
      }
    });
  }
  sideKeys() {
    const mapping = this.scan?.fieldMapping;
    if (mapping?.front || mapping?.back) {
      return {
        front: new Set(Object.keys(mapping.front || {})),
        back: new Set(Object.keys(mapping.back || {}))
      };
    }
    return {
      front: new Set(this.templateFields.filter((field) => field.page !== 1).map((field) => field.mapKey).filter(Boolean)),
      back: new Set(this.templateFields.filter((field) => field.page === 1).map((field) => field.mapKey).filter(Boolean))
    };
  }
  formatDate(date) {
    if (!date)
      return "-";
    return DateTime.fromISO(date).toFormat("MMM dd, yyyy HH:mm");
  }
  getStatusColor(status) {
    if (status === "ACTIVE" || status === "ACTIVE_BUT_UNVERIFIED") {
      return "text-emerald-800 bg-emerald-100/90 dark:bg-emerald-950/40 dark:text-emerald-200";
    }
    if (status === "ASSESSING") {
      return "text-amber-800 bg-amber-100/90 dark:bg-amber-950/40 dark:text-amber-200";
    }
    return "text-red-800 bg-red-100/90 dark:bg-red-950/40 dark:text-red-200";
  }
  getStatusLabel(status) {
    if (status === "ACTIVE" || status === "ACTIVE_BUT_UNVERIFIED")
      return "Active";
    if (status === "ASSESSING")
      return "Assessing";
    return status;
  }
  getMethodLabel(method) {
    const map = {
      SCAN_AGENT: "Scan Agent",
      SCAN_STUDIO: "Scan Studio",
      SCAN_PROMPT: "Scan Prompt"
    };
    return map[method] ?? method;
  }
  get formattedJson() {
    return this.scan?.OCRExtraction != null ? JSON.stringify(this.scan.OCRExtraction, null, 2) : "";
  }
  get highlightedJson() {
    const json = this.formattedJson;
    if (!json)
      return "";
    const html = this._highlightService.highlight(json, "json");
    const sanitized = this._domSanitizer.sanitize(SecurityContext.HTML, html);
    return sanitized ?? "";
  }
  copyJson() {
    const json = this.formattedJson;
    if (!json)
      return;
    navigator.clipboard.writeText(json).then(() => {
      if (this._copyFeedbackTimeout)
        clearTimeout(this._copyFeedbackTimeout);
      this.copyFeedback = true;
      this._cdr.markForCheck();
      this._copyFeedbackTimeout = setTimeout(() => {
        this.copyFeedback = false;
        this._copyFeedbackTimeout = null;
        this._cdr.markForCheck();
      }, 1500);
    });
  }
  static {
    this.\u0275fac = function ScanDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScanDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScanDetailComponent, selectors: [["scan-detail"]], decls: 30, vars: 17, consts: [[1, "scan-detail-root", "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "max-w-5xl"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "icon-size-4", "mx-2", "text-stone-400", 3, "svgIcon"], ["routerLink", "/smart-enroll/smart-scan/list", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "mt-5", "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "flex-1", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0", "flex-1", "pt-0.5"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "flex", "shrink-0", "flex-wrap", "items-center", "gap-2"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "mb-6", "w-full", "max-w-5xl", "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "flex", "flex-1", "items-center", "justify-center", "py-20"], [1, "mx-auto", "w-full", "max-w-5xl", "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "mx-auto", "w-full", "max-w-5xl", "space-y-6"], ["mat-stroked-button", "", "type", "button", 1, "rounded-full", 3, "routerLink"], ["mat-stroked-button", "", "color", "warn", "type", "button", 1, "rounded-full", 3, "click", "disabled"], ["diameter", "18", 1, "mr-2", "inline-block"], [1, "icon-size-4", "mr-2"], ["diameter", "40"], [1, "scan-detail-meta"], [1, "inline-flex", "items-center", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "border", "border-stone-200/90", "bg-stone-50/80", "px-3", "py-1", "text-xs", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-800/50", "dark:text-stone-200"], [1, "icon-size-3.5", "text-stone-500", "dark:text-stone-400"], [1, "scan-detail-code"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], [1, "ml-auto", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "scan-detail-panel"], [1, "border-b", "border-stone-200/80", "dark:border-gray-800", 3, "ngClass"], [1, "scan-detail-panel__header", "flex", "flex-wrap", "items-center", "justify-between", "gap-4", "px-5", "py-4", "md:px-6", "md:py-5"], [1, "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], ["mat-stroked-button", "", 1, "scan-detail-mat-btn-pill", "!border-stone-200", "!text-xs", "dark:!border-gray-600", 3, "click"], [1, "p-6", "md:p-8"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "dark:border-gray-700"], [1, "grid", "grid-cols-1", "gap-6", "lg:grid-cols-2"], [1, "flex", "items-start", "gap-3", "p-5", "md:p-6"], [1, "icon-size-6", "mt-0.5", "shrink-0", 3, "ngClass"], [1, "min-w-0", "flex-1"], [1, "text-base", "font-semibold", 3, "ngClass"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "inline-flex", "items-center", "rounded-xl", "border", "border-stone-200/80", "bg-white/90", "px-2.5", "py-1", "font-mono", "text-xs", "font-bold", "text-stone-800", "dark:border-gray-600", "dark:bg-gray-900/70", "dark:text-stone-200"], [1, "icon-size-4", "text-stone-400"], [1, "inline-flex", "items-center", "rounded-xl", "border", "px-2.5", "py-1", "font-mono", "text-xs", "font-bold", 3, "ngClass"], [1, "text-sm", "text-stone-700", "dark:text-stone-300"], [1, "mt-4", "flex", "items-center", "gap-3"], [1, "whitespace-nowrap", "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "h-2", "flex-1", "overflow-hidden", "rounded-full", "bg-white/60", "dark:bg-gray-800/60"], [1, "h-full", "rounded-full", "transition-all", "duration-500", 3, "ngClass"], [1, "min-w-[3rem]", "text-right", "text-sm", "font-semibold", "tabular-nums", 3, "ngClass"], [1, "flex", "cursor-pointer", "select-none", "items-center", "gap-2", "border-t", "px-5", "py-3", "dark:border-gray-700/80", 3, "click", "ngClass"], [1, "icon-size-4", "text-stone-500", "transition-transform", "dark:text-stone-400", 3, "ngClass"], [1, "px-5", "pb-5", "text-sm", "leading-relaxed", 3, "ngClass"], [1, "flex", "items-center", "justify-between", "border-b", "border-stone-200/90", "bg-stone-100/80", "px-4", "py-2.5", "dark:border-gray-700", "dark:bg-gray-800/50"], [1, "text-xs", "font-medium", "text-stone-600", "dark:text-stone-400"], ["type", "button", 1, "flex", "items-center", "gap-1.5", "rounded-full", "px-3", "py-1.5", "text-xs", "font-medium", "text-stone-600", "transition-colors", "hover:bg-stone-200/80", "dark:text-stone-300", "dark:hover:bg-gray-700", 3, "click"], [1, "icon-size-3.5"], [1, "m-0", "max-h-96", "select-text", "overflow-auto", "bg-stone-50/80", "p-4", "font-mono", "text-xs", "dark:bg-gray-950/50"], [1, "language-json", "hljs", "block", 3, "innerHTML"], [1, "space-y-4"], [1, "overflow-hidden", "rounded-3xl", "border", "border-stone-200/90", "bg-white", "dark:border-gray-700", "dark:bg-gray-900/50"], [1, "space-y-3"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], ["alt", "Document front", 1, "max-h-80", "w-full", "object-contain", 3, "src"], ["alt", "Document back", 1, "max-h-60", "w-full", "object-contain", 3, "src"], [1, "space-y-2"], [1, "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-400", "dark:text-stone-500"], [1, "flex", "justify-between", "gap-4", "px-4", "py-3", 3, "ngClass"], [1, "text-sm", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "break-all", "text-right", "text-sm", "font-medium", "text-stone-900", "dark:text-white"]], template: function ScanDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275text(5, "Verifik");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-icon", 5);
        \u0275\u0275elementStart(7, "a", 6);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-icon", 5);
        \u0275\u0275elementStart(11, "span", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "button", 10);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275listener("click", function ScanDetailComponent_Template_button_click_16_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(18, "mat-icon");
        \u0275\u0275text(19, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 11)(21, "h1", 12);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(24, ScanDetailComponent_Conditional_24_Template, 6, 6, "div", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "main", 14);
        \u0275\u0275template(26, ScanDetailComponent_Conditional_26_Template, 2, 1, "div", 15)(27, ScanDetailComponent_Conditional_27_Template, 2, 0, "div", 16)(28, ScanDetailComponent_Conditional_28_Template, 2, 1, "div", 17)(29, ScanDetailComponent_Conditional_29_Template, 24, 14, "div", 18);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "nav.smart_scan"));
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, "smartScan.detail"));
        \u0275\u0275advance(4);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 13, "smartScan.backToList"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 15, "smartScan.detail"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.scan && !ctx.loading ? 24 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.deleteError ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 27 : ctx.errorMessage ? 28 : ctx.scan ? 29 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconButton,
      MatDialogModule,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoPipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.scan-detail-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-detail-panel[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-detail-panel[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-detail-panel__header[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n}\n.scan-detail-panel__header[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.scan-detail-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n}\n.scan-detail-meta[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-detail-meta[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-detail-code[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.scan-detail-code[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n[_nghost-%COMP%]     .scan-detail-mat-btn-pill.mat-mdc-outlined-button, \n[_nghost-%COMP%]     .scan-detail-mat-btn-pill.mat-mdc-unelevated-button {\n  border-radius: 9999px;\n}\n/*# sourceMappingURL=scan-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScanDetailComponent, [{
    type: Component,
    args: [{ selector: "scan-detail", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<div class="scan-detail-root flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
    <header\r
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
    >\r
        <div class="mx-auto max-w-5xl">\r
            <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">\r
                <a routerLink="/chat" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">Verifik</a>\r
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>\r
                <a\r
                    routerLink="/smart-enroll/smart-scan/list"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >{{ 'nav.smart_scan' | transloco }}</a\r
                >\r
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>\r
                <span class="cursor-default text-stone-600 dark:text-stone-300">{{ 'smartScan.detail' | transloco }}</span>\r
            </div>\r
            <div class="mt-5 flex flex-wrap items-start justify-between gap-3">\r
                <div class="flex min-w-0 flex-1 items-start gap-3">\r
                    <button\r
                        mat-icon-button\r
                        (click)="goBack()"\r
                        type="button"\r
                        class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                        [attr.aria-label]="'smartScan.backToList' | transloco"\r
                    >\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                    <div class="min-w-0 flex-1 pt-0.5">\r
                        <h1 class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl">\r
                            {{ 'smartScan.detail' | transloco }}\r
                        </h1>\r
                    </div>\r
                </div>\r
                @if (scan && !loading) {\r
                    <div class="flex shrink-0 flex-wrap items-center gap-2">\r
                        @if (enrollmentRecordLink(); as recordLink) {\r
                            <a\r
                                mat-stroked-button\r
                                type="button"\r
                                class="rounded-full"\r
                                [routerLink]="recordLink"\r
                            >\r
                                <mat-icon class="icon-size-4 mr-2">person</mat-icon>\r
                                {{ 'smartScan.viewEnrollmentRecord' | transloco }}\r
                            </a>\r
                        }\r
                        <button\r
                            mat-stroked-button\r
                            color="warn"\r
                            type="button"\r
                            class="rounded-full"\r
                            [disabled]="deleteLoading"\r
                            (click)="confirmDelete()"\r
                        >\r
                            @if (deleteLoading) {\r
                                <mat-spinner class="mr-2 inline-block" diameter="18"></mat-spinner>\r
                            }\r
                            {{ 'smartScan.deleteScan' | transloco }}\r
                        </button>\r
                    </div>\r
                }\r
            </div>\r
        </div>\r
    </header>\r
\r
    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
        @if (deleteError) {\r
            <div\r
                class="mx-auto mb-6 w-full max-w-5xl rounded-2xl border border-red-200/90 bg-red-50/90 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"\r
            >\r
                {{ deleteError }}\r
            </div>\r
        }\r
        @if (loading) {\r
            <div class="flex flex-1 items-center justify-center py-20">\r
                <mat-spinner diameter="40"></mat-spinner>\r
            </div>\r
        } @else if (errorMessage) {\r
            <div\r
                class="mx-auto w-full max-w-5xl rounded-2xl border border-red-200/90 bg-red-50/90 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"\r
            >\r
                {{ errorMessage }}\r
            </div>\r
        } @else if (scan) {\r
            <div class="mx-auto w-full max-w-5xl space-y-6">\r
                <div class="scan-detail-meta">\r
                    <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" [ngClass]="getStatusColor(scan.status)">\r
                        {{ getStatusLabel(scan.status) }}\r
                    </span>\r
                    <span\r
                        class="inline-flex items-center gap-1.5 rounded-full border border-stone-200/90 bg-stone-50/80 px-3 py-1 text-xs font-medium text-stone-700 dark:border-gray-700 dark:bg-gray-800/50 dark:text-stone-200"\r
                    >\r
                        <mat-icon class="icon-size-3.5 text-stone-500 dark:text-stone-400">settings</mat-icon>\r
                        {{ getMethodLabel(scan.validationMethod) }}\r
                    </span>\r
                    @if (scan.documentType) {\r
                        <span class="scan-detail-code">{{ scan.documentType }}</span>\r
                    }\r
                    @if (scan.documentNumber) {\r
                        <span class="text-sm font-medium text-stone-700 dark:text-stone-300">{{ scan.documentNumber }}</span>\r
                    }\r
                    <span class="ml-auto text-sm text-stone-500 dark:text-stone-400">{{ formatDate(scan.createdAt) }}</span>\r
                </div>\r
\r
                <div class="scan-detail-panel">\r
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
                                        'text-emerald-600 dark:text-emerald-400': classification.isMatch,\r
                                        'text-amber-600 dark:text-amber-400': !classification.isMatch,\r
                                    }"\r
                                >\r
                                    {{ classification.isMatch ? 'check_circle' : 'warning' }}\r
                                </mat-icon>\r
                                <div class="min-w-0 flex-1">\r
                                    <p\r
                                        class="text-base font-semibold"\r
                                        [ngClass]="{\r
                                            'text-emerald-900 dark:text-emerald-200': classification.isMatch,\r
                                            'text-amber-900 dark:text-amber-200': !classification.isMatch,\r
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
                                        <span class="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">{{\r
                                            'smartScan.requestedType' | transloco\r
                                        }}</span>\r
                                        <span\r
                                            class="inline-flex items-center rounded-xl border border-stone-200/80 bg-white/90 px-2.5 py-1 font-mono text-xs font-bold text-stone-800 dark:border-gray-600 dark:bg-gray-900/70 dark:text-stone-200"\r
                                        >\r
                                            {{ classification.requestedDocumentType }}\r
                                        </span>\r
                                        <mat-icon class="icon-size-4 text-stone-400">arrow_forward</mat-icon>\r
                                        <span class="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">{{\r
                                            'smartScan.detectedType' | transloco\r
                                        }}</span>\r
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
                                            <span class="text-sm text-stone-700 dark:text-stone-300">{{ classification.detectedDocumentName }}</span>\r
                                        }\r
                                    </div>\r
\r
                                    <div class="mt-4 flex items-center gap-3">\r
                                        <span class="whitespace-nowrap text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">{{\r
                                            'smartScan.confidence' | transloco\r
                                        }}</span>\r
                                        <div class="h-2 flex-1 overflow-hidden rounded-full bg-white/60 dark:bg-gray-800/60">\r
                                            <div\r
                                                class="h-full rounded-full transition-all duration-500"\r
                                                [ngClass]="{\r
                                                    'bg-emerald-500': confidencePercent >= 80,\r
                                                    'bg-amber-500': confidencePercent >= 50 && confidencePercent < 80,\r
                                                    'bg-red-500': confidencePercent < 50,\r
                                                }"\r
                                                [style.width.%]="confidencePercent"\r
                                            ></div>\r
                                        </div>\r
                                        <span\r
                                            class="min-w-[3rem] text-right text-sm font-semibold tabular-nums"\r
                                            [ngClass]="{\r
                                                'text-emerald-800 dark:text-emerald-300': confidencePercent >= 80,\r
                                                'text-amber-800 dark:text-amber-300': confidencePercent >= 50 && confidencePercent < 80,\r
                                                'text-red-800 dark:text-red-300': confidencePercent < 50,\r
                                            }"\r
                                        >{{ confidencePercent }}%</span>\r
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
                                    <span class="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">\r
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
                                            'text-emerald-900 dark:text-emerald-200': classification.isMatch,\r
                                            'text-amber-900 dark:text-amber-200': !classification.isMatch,\r
                                        }"\r
                                    >\r
                                        {{ classification.reason }}\r
                                    </div>\r
                                }\r
                            }\r
                        </div>\r
                    }\r
\r
                    <div class="scan-detail-panel__header flex flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5">\r
                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">{{ 'smartScan.scanInfo' | transloco }}</h2>\r
                        <button mat-stroked-button (click)="showRawJson = !showRawJson" class="scan-detail-mat-btn-pill !border-stone-200 !text-xs dark:!border-gray-600">\r
                            {{ 'smartScan.rawJson' | transloco }}\r
                        </button>\r
                    </div>\r
\r
                    <div class="p-6 md:p-8">\r
                        @if (showRawJson) {\r
                            <div class="overflow-hidden rounded-2xl border border-stone-200/90 dark:border-gray-700">\r
                                <div\r
                                    class="flex items-center justify-between border-b border-stone-200/90 bg-stone-100/80 px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800/50"\r
                                >\r
                                    <span class="text-xs font-medium text-stone-600 dark:text-stone-400">OCRExtraction</span>\r
                                    <button\r
                                        type="button"\r
                                        (click)="copyJson()"\r
                                        class="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-200/80 dark:text-stone-300 dark:hover:bg-gray-700"\r
                                    >\r
                                        <mat-icon class="icon-size-3.5">content_copy</mat-icon>\r
                                        {{\r
                                            copyFeedback ? ('smartScan.copied' | transloco) : ('smartScan.copyJson' | transloco)\r
                                        }}\r
                                    </button>\r
                                </div>\r
                                <pre\r
                                    class="m-0 max-h-96 select-text overflow-auto bg-stone-50/80 p-4 font-mono text-xs dark:bg-gray-950/50"\r
                                ><code class="language-json hljs block" [innerHTML]="highlightedJson"></code></pre>\r
                            </div>\r
                        } @else {\r
                            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">\r
                                <div class="space-y-4">\r
                                    @if (scan.url) {\r
                                        <div class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50">\r
                                            <img [src]="scan.url" alt="Document front" class="max-h-80 w-full object-contain" />\r
                                        </div>\r
                                    }\r
                                    @if (scan.backUrl) {\r
                                        <div class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50">\r
                                            <img [src]="scan.backUrl" alt="Document back" class="max-h-60 w-full object-contain" />\r
                                        </div>\r
                                    }\r
                                </div>\r
\r
                                <div class="space-y-3">\r
                                    <h3 class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">\r
                                        {{ 'smartScan.extractedFields' | transloco }}\r
                                    </h3>\r
                                    @for (section of extractionSections(); track section.id) {\r
                                        @if (section.fields.length) {\r
                                            <div class="space-y-2">\r
                                                @if (section.labelKey) {\r
                                                    <h4 class="text-xs font-medium uppercase tracking-wider text-stone-400 dark:text-stone-500">\r
                                                        {{ section.labelKey | transloco }}\r
                                                    </h4>\r
                                                }\r
                                                <div class="overflow-hidden rounded-2xl border border-stone-200/90 dark:border-gray-700">\r
                                                    @for (f of section.fields; track f.key; let i = $index) {\r
                                                        <div\r
                                                            class="flex justify-between gap-4 px-4 py-3"\r
                                                            [ngClass]="{ 'bg-stone-50/80 dark:bg-gray-800/40': i % 2 === 0 }"\r
                                                        >\r
                                                            <span class="text-sm font-medium text-stone-500 dark:text-stone-400">{{ f.key }}</span>\r
                                                            <span class="break-all text-right text-sm font-medium text-stone-900 dark:text-white">{{ f.value }}</span>\r
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
            </div>\r
        }\r
    </main>\r
</div>\r
`, styles: ['/* src/app/modules/smart-enroll/smart-scan/scan-detail/scan-detail.component.scss */\n:host {\n  display: block;\n}\n.scan-detail-panel {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-detail-panel:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-detail-panel {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-detail-panel__header {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n}\n.scan-detail-panel__header:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.scan-detail-meta {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n}\n.scan-detail-meta:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-detail-meta {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-detail-code {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.scan-detail-code:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n:host ::ng-deep .scan-detail-mat-btn-pill.mat-mdc-outlined-button,\n:host ::ng-deep .scan-detail-mat-btn-pill.mat-mdc-unelevated-button {\n  border-radius: 9999px;\n}\n/*# sourceMappingURL=scan-detail.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScanDetailComponent, { className: "ScanDetailComponent", filePath: "src/app/modules/smart-enroll/smart-scan/scan-detail/scan-detail.component.ts", lineNumber: 38 });
})();
export {
  ScanDetailComponent
};
//# sourceMappingURL=chunk-V2BBXAJX.js.map
