import {
  ScanToolSmartCheckResultComponent
} from "./chunk-IHKUSO6P.js";
import {
  BarcodeValidationPanelComponent,
  ScanDeleteConfirmDialogComponent
} from "./chunk-2RYECL7X.js";
import {
  ImagePreviewDialogComponent
} from "./chunk-5BUZNTKT.js";
import {
  SmartScanService
} from "./chunk-T477ZOJL.js";
import {
  FuseHighlightService
} from "./chunk-RLXZXDLR.js";
import "./chunk-YSIFJH6G.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-E5CL2DVE.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import {
  MatDialog,
  MatDialogModule
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
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-QL64NPDU.js";
import "./chunk-3V5B4ZWC.js";
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
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
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
} from "./chunk-YWP2Y7QK.js";
import {
  __objRest
} from "./chunk-F5M2C4EZ.js";

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
var _c0 = (a0) => ({ code: a0 });
var _c1 = (a0, a1) => ({ "bg-emerald-50/80 dark:bg-emerald-950/30": a0, "bg-amber-50/80 dark:bg-amber-950/30": a1 });
var _c2 = (a0, a1) => ({ "text-emerald-600 dark:text-emerald-400": a0, "text-amber-600 dark:text-amber-400": a1 });
var _c3 = (a0, a1) => ({ "text-emerald-900 dark:text-emerald-200": a0, "text-amber-900 dark:text-amber-200": a1 });
var _c4 = (a0, a1) => ({ "border-emerald-300 bg-emerald-100/80 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-100": a0, "border-amber-300 bg-amber-100/80 text-amber-900 dark:border-amber-800 dark:bg-amber-900/40 dark:text-amber-100": a1 });
var _c5 = (a0, a1, a2) => ({ "bg-emerald-500": a0, "bg-amber-500": a1, "bg-red-500": a2 });
var _c6 = (a0, a1, a2) => ({ "text-emerald-800 dark:text-emerald-300": a0, "text-amber-800 dark:text-amber-300": a1, "text-red-800 dark:text-red-300": a2 });
var _c7 = (a0, a1) => ({ "border-emerald-200/80 hover:bg-emerald-100/40 dark:border-emerald-900/40 dark:hover:bg-emerald-900/20": a0, "border-amber-200/80 hover:bg-amber-100/40 dark:border-amber-900/40 dark:hover:bg-amber-900/20": a1 });
var _c8 = (a0) => ({ "rotate-90": a0 });
var _c9 = (a0) => ({ "bg-stone-50/80 dark:bg-gray-800/40": a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function ScanDetailComponent_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20)(1, "mat-icon", 22);
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
function ScanDetailComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, ScanDetailComponent_Conditional_24_Conditional_1_Template, 5, 4, "a", 20);
    \u0275\u0275elementStart(2, "button", 21);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_24_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scanAnother());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.enrollmentRecordLink()) ? 1 : -1, tmp_1_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 2, "smartScan.scanAnotherSame", \u0275\u0275pureFunction1(5, _c0, ctx_r1.scan.documentType)), " ");
  }
}
function ScanDetailComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
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
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementEnd();
  }
}
function ScanDetailComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
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
function ScanDetailComponent_Conditional_29_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartScan.templateCurrent"));
  }
}
function ScanDetailComponent_Conditional_29_Conditional_30_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(classification_r4.detectedDocumentName);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_30_Conditional_31_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c3, classification_r4.isMatch, !classification_r4.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r4.reason, " ");
  }
}
function ScanDetailComponent_Conditional_29_Conditional_30_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_29_Conditional_30_Conditional_31_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showClassificationReason = !ctx_r1.showClassificationReason);
    });
    \u0275\u0275elementStart(1, "mat-icon", 64);
    \u0275\u0275text(2, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ScanDetailComponent_Conditional_29_Conditional_30_Conditional_31_Conditional_7_Template, 2, 5, "div", 65);
  }
  if (rf & 2) {
    const classification_r4 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c7, classification_r4.isMatch, !classification_r4.isMatch));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c8, ctx_r1.showClassificationReason));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showClassificationReason ? \u0275\u0275pipeBind1(5, 4, "smartScan.hideReason") : \u0275\u0275pipeBind1(6, 6, "smartScan.showReason"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showClassificationReason ? 7 : -1);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 48)(2, "mat-icon", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 50)(5, "p", 51);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 52)(10, "span", 53);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 54);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-icon", 55);
    \u0275\u0275text(16, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 53);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 56);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ScanDetailComponent_Conditional_29_Conditional_30_Conditional_22_Template, 2, 1, "span", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 58)(24, "span", 59);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 60);
    \u0275\u0275element(28, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 62);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(31, ScanDetailComponent_Conditional_29_Conditional_30_Conditional_31_Template, 8, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const classification_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(28, _c1, classification_r4.isMatch, !classification_r4.isMatch));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(31, _c2, classification_r4.isMatch, !classification_r4.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r4.isMatch ? "check_circle" : "warning", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(34, _c3, classification_r4.isMatch, !classification_r4.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r4.isMatch ? \u0275\u0275pipeBind1(7, 18, "smartScan.classificationMatch") : \u0275\u0275pipeBind1(8, 20, "smartScan.classificationMismatch"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 22, "smartScan.requestedType"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", classification_r4.requestedDocumentType, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 24, "smartScan.detectedType"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(37, _c4, classification_r4.isMatch, !classification_r4.isMatch));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", classification_r4.detectedDocumentType, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(classification_r4.detectedDocumentName ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 26, "smartScan.confidence"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.confidencePercent, "%");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(40, _c5, ctx_r1.confidencePercent >= 80, ctx_r1.confidencePercent >= 50 && ctx_r1.confidencePercent < 80, ctx_r1.confidencePercent < 50));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(44, _c6, ctx_r1.confidencePercent >= 80, ctx_r1.confidencePercent >= 50 && ctx_r1.confidencePercent < 80, ctx_r1.confidencePercent < 50));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.confidencePercent, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(classification_r4.reason ? 31 : -1);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 66)(2, "div", 67)(3, "span", 68);
    \u0275\u0275text(4, "OCRExtraction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 69);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_29_Conditional_38_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyJson());
    });
    \u0275\u0275elementStart(6, "mat-icon", 70);
    \u0275\u0275text(7, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "pre", 71);
    \u0275\u0275element(12, "code", 72);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.copyFeedback ? \u0275\u0275pipeBind1(9, 2, "smartScan.copied") : \u0275\u0275pipeBind1(10, 4, "smartScan.copyJson"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", ctx_r1.highlightedJson, \u0275\u0275sanitizeHtml);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_39_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "button", 81);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_29_Conditional_39_Conditional_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openImagePreview(ctx_r1.scan.url, ctx_r1.scan.documentType));
    });
    \u0275\u0275element(2, "img", 82);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.scan.url, \u0275\u0275sanitizeUrl);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_39_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "button", 81);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_29_Conditional_39_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openImagePreview(ctx_r1.scan.backUrl, ctx_r1.scan.documentType));
    });
    \u0275\u0275element(2, "img", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.scan.backUrl, \u0275\u0275sanitizeUrl);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_39_For_19_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, section_r9.labelKey), " ");
  }
}
function ScanDetailComponent_Conditional_29_Conditional_39_For_19_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r10 = ctx.$implicit;
    const \u0275$index_275_r11 = ctx.$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c9, \u0275$index_275_r11 % 2 === 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r10.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r10.value);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_39_For_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, ScanDetailComponent_Conditional_29_Conditional_39_For_19_Conditional_0_Conditional_1_Template, 3, 3, "h4", 85);
    \u0275\u0275elementStart(2, "div", 66);
    \u0275\u0275repeaterCreate(3, ScanDetailComponent_Conditional_29_Conditional_39_For_19_Conditional_0_For_4_Template, 5, 5, "div", 86, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r9.labelKey ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(section_r9.fields);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_39_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanDetailComponent_Conditional_29_Conditional_39_For_19_Conditional_0_Template, 5, 1, "div", 84);
  }
  if (rf & 2) {
    const section_r9 = ctx.$implicit;
    \u0275\u0275conditional(section_r9.fields.length ? 0 : -1);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 43)(2, "section", 73)(3, "div", 74)(4, "span");
    \u0275\u0275text(5, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 75);
    \u0275\u0275template(14, ScanDetailComponent_Conditional_29_Conditional_39_Conditional_14_Template, 3, 1, "div", 76)(15, ScanDetailComponent_Conditional_29_Conditional_39_Conditional_15_Template, 3, 1, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 77);
    \u0275\u0275element(17, "barcode-validation-panel", 78);
    \u0275\u0275repeaterCreate(18, ScanDetailComponent_Conditional_29_Conditional_39_For_19_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "aside", 79);
    \u0275\u0275element(21, "scan-tool-smart-check-result", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const result_r12 = ctx_r1.scanAsResult;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "smartScan.extractedFields"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 9, ctx_r1.singlePhoto ? "smartScan.onePhotoHelp" : "smartScan.resultsSidesHelp"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.scan.url ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.scan.backUrl ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("validation", ctx_r1.barcodeValidation());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.extractionSections());
    \u0275\u0275advance(3);
    \u0275\u0275property("scanResult", result_r12)("documentType", ctx_r1.documentType);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_40_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "button", 81);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_29_Conditional_40_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openImagePreview(ctx_r1.scan.url, ctx_r1.scan.documentType));
    });
    \u0275\u0275element(2, "img", 92);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.scan.url, \u0275\u0275sanitizeUrl);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_40_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "button", 81);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_29_Conditional_40_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openImagePreview(ctx_r1.scan.backUrl, ctx_r1.scan.documentType));
    });
    \u0275\u0275element(2, "img", 93);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.scan.backUrl, \u0275\u0275sanitizeUrl);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_40_For_14_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, section_r15.labelKey), " ");
  }
}
function ScanDetailComponent_Conditional_29_Conditional_40_For_14_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r16 = ctx.$implicit;
    const \u0275$index_332_r17 = ctx.$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c9, \u0275$index_332_r17 % 2 === 0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r16.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r16.value);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_40_For_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, ScanDetailComponent_Conditional_29_Conditional_40_For_14_Conditional_0_Conditional_1_Template, 3, 3, "h4", 85);
    \u0275\u0275elementStart(2, "div", 66);
    \u0275\u0275repeaterCreate(3, ScanDetailComponent_Conditional_29_Conditional_40_For_14_Conditional_0_For_4_Template, 5, 5, "div", 86, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r15.labelKey ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(section_r15.fields);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_40_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ScanDetailComponent_Conditional_29_Conditional_40_For_14_Conditional_0_Template, 5, 1, "div", 84);
  }
  if (rf & 2) {
    const section_r15 = ctx.$implicit;
    \u0275\u0275conditional(section_r15.fields.length ? 0 : -1);
  }
}
function ScanDetailComponent_Conditional_29_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 89)(2, "div", 75);
    \u0275\u0275template(3, ScanDetailComponent_Conditional_29_Conditional_40_Conditional_3_Template, 3, 1, "div", 76)(4, ScanDetailComponent_Conditional_29_Conditional_40_Conditional_4_Template, 3, 1, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 77);
    \u0275\u0275element(6, "barcode-validation-panel", 78);
    \u0275\u0275elementStart(7, "h3", 90);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 91);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, ScanDetailComponent_Conditional_29_Conditional_40_For_14_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.scan.url ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.scan.backUrl ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("validation", ctx_r1.barcodeValidation());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "smartScan.extractedFields"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, ctx_r1.singlePhoto ? "smartScan.onePhotoHelp" : "smartScan.resultsSidesHelp"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.extractionSections());
  }
}
function ScanDetailComponent_Conditional_29_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 46);
  }
}
function ScanDetailComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 24)(2, "span", 25);
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
    \u0275\u0275elementStart(12, "section", 31)(13, "p", 32);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 33)(17, "h2", 34);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 35);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 35);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p", 36);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, ScanDetailComponent_Conditional_29_Conditional_28_Template, 3, 3, "p", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 38);
    \u0275\u0275template(30, ScanDetailComponent_Conditional_29_Conditional_30_Template, 32, 48, "div", 39);
    \u0275\u0275elementStart(31, "div", 40)(32, "h2", 34);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 41);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_29_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showRawJson = !ctx_r1.showRawJson);
    });
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(38, ScanDetailComponent_Conditional_29_Conditional_38_Template, 13, 6, "div", 42)(39, ScanDetailComponent_Conditional_29_Conditional_39_Template, 22, 11, "div", 43)(40, ScanDetailComponent_Conditional_29_Conditional_40_Template, 15, 9, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 44)(42, "button", 45);
    \u0275\u0275template(43, ScanDetailComponent_Conditional_29_Conditional_43_Template, 1, 0, "mat-spinner", 46);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-menu", null, 0)(48, "button", 47);
    \u0275\u0275listener("click", function ScanDetailComponent_Conditional_29_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275elementStart(49, "mat-icon");
    \u0275\u0275text(50, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const scanActions_r18 = \u0275\u0275reference(47);
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
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 21, "smartScan.templateUsed"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.scan.scanTemplate == null ? null : ctx_r1.scan.scanTemplate.name) || ctx_r1.scan.documentType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 23, (ctx_r1.scan.scanTemplate == null ? null : ctx_r1.scan.scanTemplate.owned) ? "smartScan.yourFields" : "smartScan.verifikFields"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 25, ctx_r1.singlePhoto ? "smartScan.onePhoto" : "smartScan.backRequired"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 27, ctx_r1.singlePhoto ? "smartScan.onePhotoHelp" : "smartScan.backPhotoHelp"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.scan.scanTemplate == null ? null : ctx_r1.scan.scanTemplate.source) === "current" ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_14_0 = ctx_r1.getClassification()) ? 30 : -1, tmp_14_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 29, "smartScan.scanInfo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 31, "smartScan.rawJson"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showRawJson ? 38 : ctx_r1.resolvedSmartCheck && ctx_r1.scanAsResult ? 39 : 40);
    \u0275\u0275advance(4);
    \u0275\u0275property("matMenuTriggerFor", scanActions_r18)("disabled", ctx_r1.deleteLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.deleteLoading ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 33, "smartScan.moreActions"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 35, "smartScan.deleteScan"));
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
    this.documentType = null;
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
        this.loadDocumentTypeMeta();
        this._cdr.markForCheck();
      },
      error: () => {
        this.errorMessage = "Failed to load scan details";
        this.loading = false;
        this._cdr.markForCheck();
      }
    });
  }
  get resolvedSmartCheck() {
    if (!this.scan)
      return null;
    if (this.scan.smartCheck?.status) {
      const _a = this.scan.smartCheck, { creditsCharged: _c } = _a, clean = __objRest(_a, ["creditsCharged"]);
      return clean;
    }
    const score = this.scan.scoreValidation;
    if (!score || typeof score !== "object")
      return null;
    if (typeof score["status"] === "string") {
      const _b = score, { creditsCharged: _c, ocrCreditsCharged: _o } = _b, clean = __objRest(_b, ["creditsCharged", "ocrCreditsCharged"]);
      return clean;
    }
    if (score["fullName"] || score["firstName"] || score["lastName"] || Array.isArray(score["arrayName"])) {
      return {
        status: "completed",
        data: score
      };
    }
    return null;
  }
  get resolvedCost() {
    if (!this.scan)
      return null;
    if (this.scan.cost && (this.scan.cost.ocr != null || this.scan.cost.smartCheck != null)) {
      const ocr2 = this.scan.cost.ocr || 0;
      const smartCheck2 = this.scan.cost.smartCheck || 0;
      return {
        ocr: ocr2,
        smartCheck: smartCheck2,
        total: this.scan.cost.total ?? Number((ocr2 + smartCheck2).toFixed(6))
      };
    }
    const score = this.scan.scoreValidation;
    const ocr = this.scan.creditsCharged ?? score?.ocrCreditsCharged;
    const smartCheck = this.scan.smartCheck?.creditsCharged ?? score?.creditsCharged;
    if (ocr == null && smartCheck == null)
      return null;
    return {
      ocr: ocr || 0,
      smartCheck: smartCheck || 0,
      total: Number(((ocr || 0) + (smartCheck || 0)).toFixed(6))
    };
  }
  get scanAsResult() {
    if (!this.scan)
      return null;
    const cost = this.resolvedCost;
    return {
      _id: this.scan._id,
      documentType: this.scan.documentType,
      documentNumber: this.scan.documentNumber,
      OCRExtraction: this.scan.OCRExtraction,
      status: this.scan.status,
      url: this.scan.url,
      backUrl: this.scan.backUrl,
      cost,
      creditsCharged: cost?.ocr,
      smartCheck: this.resolvedSmartCheck,
      fieldMapping: this.scan.fieldMapping
    };
  }
  goBack() {
    this._router.navigate(["/smart-enroll/smart-scan/list"]);
  }
  scanAnother() {
    const code = this.scan?.documentType;
    if (!code)
      return;
    this._router.navigate(["/smart-enroll/smart-scan/new"], { queryParams: { documentType: code } });
  }
  /**
   * Opens the document photo full screen so it can be zoomed.
   */
  openImagePreview(imageSrc, title) {
    if (!imageSrc)
      return;
    this._dialog.open(ImagePreviewDialogComponent, {
      data: { imageSrc, title },
      panelClass: "image-preview-dialog-panel",
      width: "100%",
      maxWidth: "100vw",
      maxHeight: "100vh",
      height: "100%"
    });
  }
  get singlePhoto() {
    const template = this.scan?.scanTemplate;
    if (template)
      return !template.requiresBackSide;
    const back = this.scan?.fieldMapping?.back;
    return !this.scan?.backUrl && !back;
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
  barcodeValidation() {
    const extraction = this.scan?.OCRExtraction;
    return extraction?.barcodeValidation || null;
  }
  getExtractionFields() {
    const extraction = this.scan?.OCRExtraction;
    if (!extraction || typeof extraction !== "object")
      return [];
    return Object.entries(extraction).filter(([k]) => k !== "documentClassification" && k !== "barcodeValidation" && !k.startsWith("_")).map(([key, value]) => ({ key, value }));
  }
  extractionSections() {
    const rows = this.getExtractionFields();
    const { front, back } = this.sideKeys();
    if (!front.size && !back.size)
      return [{ id: "all", labelKey: "", fields: rows }];
    return [
      { id: "front", labelKey: "smartScan.frontPhotoTitle", fields: rows.filter((row) => front.has(row.key)) },
      {
        id: "back",
        labelKey: "smartScan.backPhotoTitle",
        fields: this.singlePhoto ? [] : rows.filter((row) => back.has(row.key))
      },
      {
        id: "other",
        labelKey: "smartScan.otherFields",
        fields: rows.filter((row) => !front.has(row.key) && !back.has(row.key))
      }
    ];
  }
  loadDocumentTypeMeta() {
    const code = this.scan?.documentType;
    if (!code)
      return;
    this._scanService.getDocumentTypesByCode(code).subscribe({
      next: (types) => {
        const owned = types.find((type) => type.client);
        this.documentType = owned || types[0] || null;
        this._cdr.markForCheck();
      },
      error: () => {
        this.documentType = null;
      }
    });
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
    if (!this.scan)
      return "";
    const cost = this.resolvedCost;
    const smartCheck = this.resolvedSmartCheck;
    if (!smartCheck && !cost) {
      return this.scan.OCRExtraction != null ? JSON.stringify(this.scan.OCRExtraction, null, 2) : "";
    }
    const payload = {
      OCRExtraction: this.scan.OCRExtraction
    };
    if (smartCheck)
      payload["smartCheck"] = smartCheck;
    if (cost)
      payload["cost"] = cost;
    return JSON.stringify(payload, null, 2);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScanDetailComponent, selectors: [["scan-detail"]], decls: 30, vars: 17, consts: [["scanActions", "matMenu"], [1, "scan-detail-root", "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "max-w-5xl"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "icon-size-4", "mx-2", "text-stone-400", 3, "svgIcon"], ["routerLink", "/smart-enroll/smart-scan/list", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "mt-5", "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "flex-1", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0", "flex-1", "pt-0.5"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "flex", "shrink-0", "flex-wrap", "items-center", "gap-2"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "mb-6", "w-full", "max-w-5xl", "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "flex", "flex-1", "items-center", "justify-center", "py-20"], [1, "mx-auto", "w-full", "max-w-5xl", "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "mx-auto", "w-full", "max-w-5xl", "space-y-6"], ["mat-stroked-button", "", "type", "button", 1, "rounded-full", 3, "routerLink"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-full", 3, "click"], [1, "icon-size-4", "mr-2"], ["diameter", "40"], [1, "scan-detail-meta"], [1, "inline-flex", "items-center", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "border", "border-stone-200/90", "bg-stone-50/80", "px-3", "py-1", "text-xs", "font-medium", "text-stone-700", "dark:border-gray-700", "dark:bg-gray-800/50", "dark:text-stone-200"], [1, "icon-size-3.5", "text-stone-500", "dark:text-stone-400"], [1, "scan-detail-code"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], [1, "ml-auto", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "rounded-3xl", "border", "border-stone-200/90", "bg-white", "p-5", "dark:border-gray-700", "dark:bg-gray-900/50", "md:p-6"], [1, "text-[0.65rem]", "font-bold", "uppercase", "tracking-[0.16em]", "text-stone-400"], [1, "mt-2", "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], [1, "rounded-full", "bg-stone-100", "px-2.5", "py-1", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-600", "dark:bg-gray-800", "dark:text-stone-300"], [1, "mt-2", "max-w-2xl", "text-sm", "leading-relaxed", "text-stone-500"], [1, "mt-2", "text-xs", "text-stone-400"], [1, "scan-detail-panel"], [1, "border-b", "border-stone-200/80", "dark:border-gray-800", 3, "ngClass"], [1, "scan-detail-panel__header", "flex", "flex-wrap", "items-center", "justify-between", "gap-4", "px-5", "py-4", "md:px-6", "md:py-5"], ["mat-stroked-button", "", 1, "scan-detail-mat-btn-pill", "!border-stone-200", "!text-xs", "dark:!border-gray-600", 3, "click"], [1, "p-6", "md:p-8"], [1, "scan-results-decision"], [1, "flex", "justify-end"], ["mat-stroked-button", "", "type", "button", 1, "rounded-full", "!text-stone-500", 3, "matMenuTriggerFor", "disabled"], ["diameter", "18", 1, "mr-2", "inline-block"], ["mat-menu-item", "", "type", "button", 3, "click"], [1, "flex", "items-start", "gap-3", "p-5", "md:p-6"], [1, "icon-size-6", "mt-0.5", "shrink-0", 3, "ngClass"], [1, "min-w-0", "flex-1"], [1, "text-base", "font-semibold", 3, "ngClass"], [1, "mt-3", "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "inline-flex", "items-center", "rounded-xl", "border", "border-stone-200/80", "bg-white/90", "px-2.5", "py-1", "font-mono", "text-xs", "font-bold", "text-stone-800", "dark:border-gray-600", "dark:bg-gray-900/70", "dark:text-stone-200"], [1, "icon-size-4", "text-stone-400"], [1, "inline-flex", "items-center", "rounded-xl", "border", "px-2.5", "py-1", "font-mono", "text-xs", "font-bold", 3, "ngClass"], [1, "text-sm", "text-stone-700", "dark:text-stone-300"], [1, "mt-4", "flex", "items-center", "gap-3"], [1, "whitespace-nowrap", "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "h-2", "flex-1", "overflow-hidden", "rounded-full", "bg-white/60", "dark:bg-gray-800/60"], [1, "h-full", "rounded-full", "transition-all", "duration-500", 3, "ngClass"], [1, "min-w-[3rem]", "text-right", "text-sm", "font-semibold", "tabular-nums", 3, "ngClass"], [1, "flex", "cursor-pointer", "select-none", "items-center", "gap-2", "border-t", "px-5", "py-3", "dark:border-gray-700/80", 3, "click", "ngClass"], [1, "icon-size-4", "text-stone-500", "transition-transform", "dark:text-stone-400", 3, "ngClass"], [1, "px-5", "pb-5", "text-sm", "leading-relaxed", 3, "ngClass"], [1, "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "dark:border-gray-700"], [1, "flex", "items-center", "justify-between", "border-b", "border-stone-200/90", "bg-stone-100/80", "px-4", "py-2.5", "dark:border-gray-700", "dark:bg-gray-800/50"], [1, "text-xs", "font-medium", "text-stone-600", "dark:text-stone-400"], ["type", "button", 1, "flex", "items-center", "gap-1.5", "rounded-full", "px-3", "py-1.5", "text-xs", "font-medium", "text-stone-600", "transition-colors", "hover:bg-stone-200/80", "dark:text-stone-300", "dark:hover:bg-gray-700", 3, "click"], [1, "icon-size-3.5"], [1, "m-0", "max-h-96", "select-text", "overflow-auto", "bg-stone-50/80", "p-4", "font-mono", "text-xs", "dark:bg-gray-950/50"], [1, "language-json", "hljs", "block", 3, "innerHTML"], [1, "scan-results-record", "space-y-6"], [1, "results-section-heading"], [1, "space-y-4"], [1, "overflow-hidden", "rounded-3xl", "border", "border-stone-200/90", "bg-white", "dark:border-gray-700", "dark:bg-gray-900/50"], [1, "space-y-3"], [3, "validation"], [1, "scan-results-explainer"], [3, "scanResult", "documentType"], ["type", "button", 1, "block", "w-full", "cursor-zoom-in", "border-0", "bg-transparent", "p-0", 3, "click"], ["alt", "Document front", 1, "max-h-72", "w-full", "object-contain", 3, "src"], ["alt", "Document back", 1, "max-h-56", "w-full", "object-contain", 3, "src"], [1, "space-y-2"], [1, "text-xs", "font-medium", "uppercase", "tracking-wider", "text-stone-400", "dark:text-stone-500"], [1, "flex", "justify-between", "gap-4", "px-4", "py-3", 3, "ngClass"], [1, "text-sm", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "break-all", "text-right", "text-sm", "font-medium", "text-stone-900", "dark:text-white"], [1, "grid", "grid-cols-1", "gap-6", "lg:grid-cols-2"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "text-xs", "text-stone-500"], ["alt", "Document front", 1, "max-h-80", "w-full", "object-contain", 3, "src"], ["alt", "Document back", 1, "max-h-60", "w-full", "object-contain", 3, "src"]], template: function ScanDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "div", 4)(4, "a", 5);
        \u0275\u0275text(5, "Verifik");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-icon", 6);
        \u0275\u0275elementStart(7, "a", 7);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-icon", 6);
        \u0275\u0275elementStart(11, "span", 8);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "button", 11);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275listener("click", function ScanDetailComponent_Template_button_click_16_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(18, "mat-icon");
        \u0275\u0275text(19, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 12)(21, "h1", 13);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(24, ScanDetailComponent_Conditional_24_Template, 5, 7, "div", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "main", 15);
        \u0275\u0275template(26, ScanDetailComponent_Conditional_26_Template, 2, 1, "div", 16)(27, ScanDetailComponent_Conditional_27_Template, 2, 0, "div", 17)(28, ScanDetailComponent_Conditional_28_Template, 2, 1, "div", 18)(29, ScanDetailComponent_Conditional_29_Template, 54, 37, "div", 19);
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
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      BarcodeValidationPanelComponent,
      ScanToolSmartCheckResultComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoPipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.scan-detail-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-detail-panel[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-detail-panel[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-detail-panel__header[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n}\n.scan-detail-panel__header[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.scan-detail-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n}\n.scan-detail-meta[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-detail-meta[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-detail-code[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.scan-detail-code[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n[_nghost-%COMP%]     .scan-detail-mat-btn-pill.mat-mdc-outlined-button, \n[_nghost-%COMP%]     .scan-detail-mat-btn-pill.mat-mdc-unelevated-button {\n  border-radius: 9999px;\n}\n.scan-results-decision[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(22rem, 0.85fr);\n}\n@media (max-width: 1024px) {\n  .scan-results-decision[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.scan-results-record[_ngcontent-%COMP%], \n.scan-results-explainer[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n}\n.scan-results-explainer[_ngcontent-%COMP%] {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.results-section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n}\n.results-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.results-section-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.results-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.dark[_nghost-%COMP%]   .scan-results-explainer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .scan-results-explainer[_ngcontent-%COMP%] {\n  background: #020617;\n}\n.dark[_nghost-%COMP%]   .results-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .results-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #334155;\n}\n.dark[_nghost-%COMP%]   .results-section-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .results-section-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n.dark[_nghost-%COMP%]   .results-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .results-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=scan-detail.component.css.map */'] });
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
      MatMenuModule,
      BarcodeValidationPanelComponent,
      ScanToolSmartCheckResultComponent,
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
                        <button mat-flat-button color="primary" type="button" class="rounded-full" (click)="scanAnother()">\r
                            {{ 'smartScan.scanAnotherSame' | transloco: { code: scan.documentType } }}\r
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
                <section class="rounded-3xl border border-stone-200/90 bg-white p-5 dark:border-gray-700 dark:bg-gray-900/50 md:p-6">\r
                    <p class="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-stone-400">\r
                        {{ 'smartScan.templateUsed' | transloco }}\r
                    </p>\r
                    <div class="mt-2 flex flex-wrap items-center gap-2">\r
                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                            {{ scan.scanTemplate?.name || scan.documentType }}\r
                        </h2>\r
                        <span class="rounded-full bg-stone-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-stone-600 dark:bg-gray-800 dark:text-stone-300">\r
                            {{ (scan.scanTemplate?.owned ? 'smartScan.yourFields' : 'smartScan.verifikFields') | transloco }}\r
                        </span>\r
                        <span class="rounded-full bg-stone-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-stone-600 dark:bg-gray-800 dark:text-stone-300">\r
                            {{ (singlePhoto ? 'smartScan.onePhoto' : 'smartScan.backRequired') | transloco }}\r
                        </span>\r
                    </div>\r
                    <p class="mt-2 max-w-2xl text-sm leading-relaxed text-stone-500">\r
                        {{ (singlePhoto ? 'smartScan.onePhotoHelp' : 'smartScan.backPhotoHelp') | transloco }}\r
                    </p>\r
                    @if (scan.scanTemplate?.source === 'current') {\r
                        <p class="mt-2 text-xs text-stone-400">{{ 'smartScan.templateCurrent' | transloco }}</p>\r
                    }\r
                </section>\r
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
                    @if (showRawJson) {\r
                        <div class="p-6 md:p-8">\r
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
                        </div>\r
                    } @else if (resolvedSmartCheck && scanAsResult) {\r
                        @let result = scanAsResult!;\r
                        <div class="scan-results-decision">\r
                            <section class="scan-results-record space-y-6">\r
                                <div class="results-section-heading">\r
                                    <span>01</span>\r
                                    <div>\r
                                        <h4>{{ 'smartScan.extractedFields' | transloco }}</h4>\r
                                        <p>{{ (singlePhoto ? 'smartScan.onePhotoHelp' : 'smartScan.resultsSidesHelp') | transloco }}</p>\r
                                    </div>\r
                                </div>\r
\r
                                <div class="space-y-4">\r
                                    @if (scan.url) {\r
                                        <div class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50">\r
                                            <button\r
                                                type="button"\r
                                                class="block w-full cursor-zoom-in border-0 bg-transparent p-0"\r
                                                (click)="openImagePreview(scan.url, scan.documentType)"\r
                                            >\r
                                                <img [src]="scan.url" alt="Document front" class="max-h-72 w-full object-contain" />\r
                                            </button>\r
                                        </div>\r
                                    }\r
                                    @if (scan.backUrl) {\r
                                        <div class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50">\r
                                            <button\r
                                                type="button"\r
                                                class="block w-full cursor-zoom-in border-0 bg-transparent p-0"\r
                                                (click)="openImagePreview(scan.backUrl, scan.documentType)"\r
                                            >\r
                                                <img [src]="scan.backUrl" alt="Document back" class="max-h-56 w-full object-contain" />\r
                                            </button>\r
                                        </div>\r
                                    }\r
                                </div>\r
\r
                                <div class="space-y-3">\r
                                    <barcode-validation-panel [validation]="barcodeValidation()" />\r
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
                            </section>\r
\r
                            <aside class="scan-results-explainer">\r
                                <scan-tool-smart-check-result\r
                                    [scanResult]="result"\r
                                    [documentType]="documentType"\r
                                />\r
                            </aside>\r
                        </div>\r
                    } @else {\r
                        <div class="p-6 md:p-8">\r
                            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">\r
                                <div class="space-y-4">\r
                                    @if (scan.url) {\r
                                        <div class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50">\r
                                            <button\r
                                                type="button"\r
                                                class="block w-full cursor-zoom-in border-0 bg-transparent p-0"\r
                                                (click)="openImagePreview(scan.url, scan.documentType)"\r
                                            >\r
                                                <img [src]="scan.url" alt="Document front" class="max-h-80 w-full object-contain" />\r
                                            </button>\r
                                        </div>\r
                                    }\r
                                    @if (scan.backUrl) {\r
                                        <div class="overflow-hidden rounded-3xl border border-stone-200/90 bg-white dark:border-gray-700 dark:bg-gray-900/50">\r
                                            <button\r
                                                type="button"\r
                                                class="block w-full cursor-zoom-in border-0 bg-transparent p-0"\r
                                                (click)="openImagePreview(scan.backUrl, scan.documentType)"\r
                                            >\r
                                                <img [src]="scan.backUrl" alt="Document back" class="max-h-60 w-full object-contain" />\r
                                            </button>\r
                                        </div>\r
                                    }\r
                                </div>\r
\r
                                <div class="space-y-3">\r
                                    <barcode-validation-panel [validation]="barcodeValidation()" />\r
                                    <h3 class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">\r
                                        {{ 'smartScan.extractedFields' | transloco }}\r
                                    </h3>\r
                                    <p class="text-xs text-stone-500">\r
                                        {{ (singlePhoto ? 'smartScan.onePhotoHelp' : 'smartScan.resultsSidesHelp') | transloco }}\r
                                    </p>\r
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
                        </div>\r
                    }\r
                </div>\r
\r
                <div class="flex justify-end">\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        class="rounded-full !text-stone-500"\r
                        [matMenuTriggerFor]="scanActions"\r
                        [disabled]="deleteLoading"\r
                    >\r
                        @if (deleteLoading) {\r
                            <mat-spinner class="mr-2 inline-block" diameter="18"></mat-spinner>\r
                        }\r
                        {{ 'smartScan.moreActions' | transloco }}\r
                    </button>\r
                    <mat-menu #scanActions="matMenu">\r
                        <button mat-menu-item type="button" (click)="confirmDelete()">\r
                            <mat-icon>delete</mat-icon>\r
                            <span>{{ 'smartScan.deleteScan' | transloco }}</span>\r
                        </button>\r
                    </mat-menu>\r
                </div>\r
            </div>\r
        }\r
    </main>\r
</div>\r
`, styles: ['/* src/app/modules/smart-enroll/smart-scan/scan-detail/scan-detail.component.scss */\n:host {\n  display: block;\n}\n.scan-detail-panel {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.scan-detail-panel:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-detail-panel {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-detail-panel__header {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n}\n.scan-detail-panel__header:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.scan-detail-meta {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n}\n.scan-detail-meta:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.scan-detail-meta {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.scan-detail-code {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.scan-detail-code:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n:host ::ng-deep .scan-detail-mat-btn-pill.mat-mdc-outlined-button,\n:host ::ng-deep .scan-detail-mat-btn-pill.mat-mdc-unelevated-button {\n  border-radius: 9999px;\n}\n.scan-results-decision {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(22rem, 0.85fr);\n}\n@media (max-width: 1024px) {\n  .scan-results-decision {\n    grid-template-columns: 1fr;\n  }\n}\n.scan-results-record,\n.scan-results-explainer {\n  padding: 1.75rem;\n}\n.scan-results-explainer {\n  background: #1c1917;\n  color: #fafaf9;\n}\n.results-section-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n}\n.results-section-heading > span {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #292524;\n  color: #fff;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.results-section-heading h4 {\n  margin: 0;\n  color: #292524;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.results-section-heading p {\n  margin: 0.25rem 0 0;\n  color: #78716c;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n:host-context(.dark) .scan-results-explainer {\n  background: #020617;\n}\n:host-context(.dark) .results-section-heading > span {\n  background: #334155;\n}\n:host-context(.dark) .results-section-heading h4 {\n  color: #f8fafc;\n}\n:host-context(.dark) .results-section-heading p {\n  color: #94a3b8;\n}\n/*# sourceMappingURL=scan-detail.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScanDetailComponent, { className: "ScanDetailComponent", filePath: "src/app/modules/smart-enroll/smart-scan/scan-detail/scan-detail.component.ts", lineNumber: 51 });
})();
export {
  ScanDetailComponent
};
//# sourceMappingURL=chunk-CO7ZF7O5.js.map
