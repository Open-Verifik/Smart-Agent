import {
  CdkDrag,
  DragDropModule
} from "./chunk-DX55R373.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-HZKTYM3F.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KCV7S453.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel
} from "./chunk-3YVZWUPK.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-TX3AVWPC.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VHMFS3U6.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Injectable,
  MatButton,
  MatButtonModule,
  MatIconButton,
  Output,
  ViewChild,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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
  ɵɵviewQuery
} from "./chunk-YTOBX75K.js";

// src/app/modules/smart-batch/report-builder-preview-data.service.ts
var ReportBuilderPreviewDataService = class _ReportBuilderPreviewDataService {
  constructor() {
    this._pendingPreviewData = signal(null);
  }
  /** Set preview data before navigating to report builder */
  setPendingPreviewData(data) {
    this._pendingPreviewData.set(data);
  }
  /** Consume and return pending preview data (clears after read) */
  consumePendingPreviewData() {
    const data = this._pendingPreviewData();
    this._pendingPreviewData.set(null);
    return data;
  }
  static {
    this.\u0275fac = function ReportBuilderPreviewDataService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportBuilderPreviewDataService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportBuilderPreviewDataService, factory: _ReportBuilderPreviewDataService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportBuilderPreviewDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/smart-batch/report-preview/report-preview.component.ts
var _c0 = ["reportPage"];
var _c1 = () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var _c2 = (a0, a1) => ({ x: a0, y: a1 });
var _c3 = (a0) => ({ path: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
function ReportPreviewComponent_Conditional_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("opacity", ctx_r0.watermarkOpacity());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.watermarkText());
  }
}
function ReportPreviewComponent_Conditional_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("opacity", ctx_r0.watermarkOpacity());
    \u0275\u0275property("src", ctx_r0.logoUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ReportPreviewComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, ReportPreviewComponent_Conditional_2_Conditional_0_Conditional_1_Template, 2, 3, "span", 11)(2, ReportPreviewComponent_Conditional_2_Conditional_0_Conditional_2_Template, 1, 3, "img", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.watermarkType() === "text" ? 1 : ctx_r0.watermarkType() === "logo" && ctx_r0.logoUrl() ? 2 : -1);
  }
}
function ReportPreviewComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("opacity", ctx_r0.watermarkOpacity());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.watermarkText());
  }
}
function ReportPreviewComponent_Conditional_2_Conditional_1_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("opacity", ctx_r0.watermarkOpacity());
    \u0275\u0275property("src", ctx_r0.logoUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ReportPreviewComponent_Conditional_2_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, ReportPreviewComponent_Conditional_2_Conditional_1_For_2_Conditional_1_Template, 2, 3, "span", 16)(2, ReportPreviewComponent_Conditional_2_Conditional_1_For_2_Conditional_2_Template, 1, 3, "img", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.watermarkType() === "text" ? 1 : ctx_r0.watermarkType() === "logo" && ctx_r0.logoUrl() ? 2 : -1);
  }
}
function ReportPreviewComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ReportPreviewComponent_Conditional_2_Conditional_1_For_2_Template, 3, 1, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function ReportPreviewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportPreviewComponent_Conditional_2_Conditional_0_Template, 3, 1, "div", 9)(1, ReportPreviewComponent_Conditional_2_Conditional_1_Template, 3, 1, "div", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.watermarkPattern() === "single" ? 0 : 1);
  }
}
function ReportPreviewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 20);
    \u0275\u0275listener("cdkDragEnded", function ReportPreviewComponent_Conditional_3_Template_div_cdkDragEnded_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSignatureDragEnd($event));
    });
    \u0275\u0275element(2, "img", 21);
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275listener("mousedown", function ReportPreviewComponent_Conditional_3_Template_div_mousedown_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startResize($event));
    });
    \u0275\u0275elementStart(4, "mat-icon", 23);
    \u0275\u0275text(5, "unfold_more");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r0.viewSignatureWidth, "px")("height", ctx_r0.viewSignatureHeight, "px");
    \u0275\u0275property("cdkDragFreeDragPosition", \u0275\u0275pureFunction2(6, _c2, ctx_r0.viewSignatureX, ctx_r0.viewSignatureY));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.signatureImage(), \u0275\u0275sanitizeUrl);
  }
}
function ReportPreviewComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, " Page 1 of 1 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.pageNumberPosition() === "top-left" ? "left" : ctx_r0.pageNumberPosition() === "top-right" ? "right" : "center");
  }
}
function ReportPreviewComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.logoUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ReportPreviewComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon", 26);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "smartReport.noSectionsToPreview"));
  }
}
function ReportPreviewComponent_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h2", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", (section_r4.style == null ? null : section_r4.style.textAlign) || "left");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", (section_r4.style == null ? null : section_r4.style.fontSize) || 22, "px")("font-weight", (section_r4.style == null ? null : section_r4.style.fontWeight) || "bold")("color", (section_r4.style == null ? null : section_r4.style.color) || ctx_r0.primaryColor());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r4.staticContent || section_r4.label || \u0275\u0275pipeBind1(3, 9, "smartReport.untitled"), " ");
  }
}
function ReportPreviewComponent_For_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "p", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", (section_r4.style == null ? null : section_r4.style.fontSize) || 12, "px")("font-weight", (section_r4.style == null ? null : section_r4.style.fontWeight) || "normal")("text-align", (section_r4.style == null ? null : section_r4.style.textAlign) || "left")("color", (section_r4.style == null ? null : section_r4.style.color) || "#374151");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r4.staticContent || \u0275\u0275pipeBind1(3, 9, "smartReport.textContent"), " ");
  }
}
function ReportPreviewComponent_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", (section_r4.style == null ? null : section_r4.style.textAlign) || "left");
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", (section_r4.style == null ? null : section_r4.style.fontSize) || 12, "px");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(section_r4.label || \u0275\u0275pipeBind1(3, 10, "smartReport.field"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("font-size", (section_r4.style == null ? null : section_r4.style.fontSize) || 12, "px")("color", (section_r4.style == null ? null : section_r4.style.color) || "#111827");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.resolveDataPath(section_r4.dataPath) || "\u2014");
  }
}
function ReportPreviewComponent_For_9_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r0.primaryColor());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r4.label, " ");
  }
}
function ReportPreviewComponent_For_9_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 42)(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r5.value, " ");
  }
}
function ReportPreviewComponent_For_9_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "smartReport.noDataAtPath", \u0275\u0275pureFunction1(4, _c3, section_r4.dataPath)), " ");
  }
}
function ReportPreviewComponent_For_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, ReportPreviewComponent_For_9_Conditional_4_Conditional_1_Template, 2, 3, "h4", 40);
    \u0275\u0275elementStart(2, "table", 41)(3, "tbody");
    \u0275\u0275repeaterCreate(4, ReportPreviewComponent_For_9_Conditional_4_For_5_Template, 5, 2, "tr", 42, _forTrack1);
    \u0275\u0275template(6, ReportPreviewComponent_For_9_Conditional_4_Conditional_6_Template, 4, 6, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r4.label ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.resolveTableData(section_r4.dataPath));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.resolveTableData(section_r4.dataPath).length === 0 ? 6 : -1);
  }
}
function ReportPreviewComponent_For_9_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 47);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", section_r4.staticContent, \u0275\u0275sanitizeUrl)("alt", section_r4.label || \u0275\u0275pipeBind1(1, 2, "smartReport.image"));
  }
}
function ReportPreviewComponent_For_9_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "mat-icon", 49);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd()();
  }
}
function ReportPreviewComponent_For_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, ReportPreviewComponent_For_9_Conditional_5_Conditional_1_Template, 2, 4, "img", 47)(2, ReportPreviewComponent_For_9_Conditional_5_Conditional_2_Template, 3, 0, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("text-align", (section_r4.style == null ? null : section_r4.style.textAlign) || "center");
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r4.staticContent ? 1 : 2);
  }
}
function ReportPreviewComponent_For_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 50);
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("border-color", (section_r4.style == null ? null : section_r4.style.color) || "#E5E7EB");
  }
}
function ReportPreviewComponent_For_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const section_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("height", (section_r4.style == null ? null : section_r4.style.padding) || 16, "px");
  }
}
function ReportPreviewComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function ReportPreviewComponent_For_9_Template_div_click_0_listener() {
      const section_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clickable() && ctx_r0.sectionClick() ? ctx_r0.sectionClick()(section_r4) : null);
    });
    \u0275\u0275template(1, ReportPreviewComponent_For_9_Conditional_1_Template, 4, 11, "div", 29)(2, ReportPreviewComponent_For_9_Conditional_2_Template, 4, 11, "div", 30)(3, ReportPreviewComponent_For_9_Conditional_3_Template, 6, 12, "div", 31)(4, ReportPreviewComponent_For_9_Conditional_4_Template, 7, 2, "div", 32)(5, ReportPreviewComponent_For_9_Conditional_5_Template, 3, 3, "div", 29)(6, ReportPreviewComponent_For_9_Conditional_6_Template, 1, 2, "hr", 33)(7, ReportPreviewComponent_For_9_Conditional_7_Template, 1, 2, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("cursor-pointer", ctx_r0.clickable())("ring-2", ctx_r0.clickable() && ctx_r0.selectedSectionId() === section_r4.id)("ring-indigo-400", ctx_r0.clickable() && ctx_r0.selectedSectionId() === section_r4.id)("rounded-md", ctx_r0.clickable() && ctx_r0.selectedSectionId() === section_r4.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r4.type === "header" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r4.type === "text" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r4.type === "field" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r4.type === "table" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r4.type === "image" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r4.type === "divider" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r4.type === "spacer" ? 7 : -1);
  }
}
function ReportPreviewComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "p", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.legend(), " ");
  }
}
function ReportPreviewComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1, " Page 1 of 1 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("text-align", ctx_r0.pageNumberPosition() === "bottom-left" ? "left" : ctx_r0.pageNumberPosition() === "bottom-right" ? "right" : "center");
    \u0275\u0275classProp("border-t", !ctx_r0.legend())("border-gray-200", !ctx_r0.legend())("pt-3", !ctx_r0.legend());
  }
}
function ReportPreviewComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, ReportPreviewComponent_Conditional_10_Conditional_1_Template, 3, 1, "div", 51)(2, ReportPreviewComponent_Conditional_10_Conditional_2_Template, 2, 8, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.legend() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showPageNumbers() && ctx_r0.pageNumberPosition().startsWith("bottom") ? 2 : -1);
  }
}
var ReportPreviewComponent = class _ReportPreviewComponent {
  constructor() {
    this.template = input.required();
    this.previewData = input.required();
    this.primaryColor = input("#4F46E5");
    this.orientation = input("portrait");
    this.clickable = input(false);
    this.selectedSectionId = input(null);
    this.sectionClick = input(null);
    this.logoUrl = input(null);
    this.legend = input("");
    this.showPageNumbers = input(false);
    this.pageNumberPosition = input("bottom-center");
    this.watermarkEnabled = input(false);
    this.watermarkType = input("text");
    this.watermarkText = input("CONFIDENTIAL");
    this.watermarkOpacity = input(0.08);
    this.watermarkPattern = input("single");
    this.signatureEnabled = input(false);
    this.signatureImage = input(null);
    this.signatureX = input(0);
    this.signatureY = input(0);
    this.signatureWidth = input(100);
    this.signatureHeight = input(50);
    this.signaturePositionChange = new EventEmitter();
    this.signatureSizeChange = new EventEmitter();
    this.isResizing = false;
    this.startX = 0;
    this.startY = 0;
    this.startWidth = 0;
    this.startHeight = 0;
    this.onResize = (event) => {
      if (!this.isResizing)
        return;
      const dx = event.clientX - this.startX;
      const dy = event.clientY - this.startY;
      const scales = this._scaleFactors;
      const newDomWidth = Math.max(20, this.startWidth + dx);
      const newDomHeight = Math.max(10, this.startHeight + dy);
      this.signatureSizeChange.emit({
        width: newDomWidth * scales.x,
        height: newDomHeight * scales.y
      });
    };
    this.stopResize = () => {
      this.isResizing = false;
      window.removeEventListener("mousemove", this.onResize);
      window.removeEventListener("mouseup", this.stopResize);
    };
  }
  get _scaleFactors() {
    if (!this.reportPage) {
      console.warn("[ReportPreview] reportPage missing");
      return { x: 1, y: 1 };
    }
    const rect = this.reportPage.nativeElement.getBoundingClientRect();
    const currentWidth = rect.width;
    const currentHeight = rect.height;
    if (!currentWidth || !currentHeight) {
      return { x: 1, y: 1 };
    }
    const MM_TO_PX = 3.7795275591;
    const canonicalWidth = (this.orientation() === "landscape" ? 297 : 210) * MM_TO_PX;
    const canonicalHeight = (this.orientation() === "landscape" ? 210 : 297) * MM_TO_PX;
    const factors = {
      x: canonicalWidth / currentWidth,
      y: canonicalHeight / currentHeight
    };
    return factors;
  }
  // Transforming Input (Canonical) -> View (Screen)
  get viewSignatureX() {
    return this.signatureX() / this._scaleFactors.x;
  }
  get viewSignatureY() {
    return this.signatureY() / this._scaleFactors.y;
  }
  // Width/Height might need scaling too if they are stored in Canonical px
  get viewSignatureWidth() {
    return this.signatureWidth() / this._scaleFactors.x;
  }
  get viewSignatureHeight() {
    return this.signatureHeight() / this._scaleFactors.y;
  }
  onSignatureDragEnd(event) {
    if (this.isResizing)
      return;
    const { x, y } = event.source.getFreeDragPosition();
    const scales = this._scaleFactors;
    this.signaturePositionChange.emit({ x: x * scales.x, y: y * scales.y });
  }
  startResize(event) {
    event.stopPropagation();
    event.preventDefault();
    this.isResizing = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.startWidth = this.viewSignatureWidth;
    this.startHeight = this.viewSignatureHeight;
    window.addEventListener("mousemove", this.onResize);
    window.addEventListener("mouseup", this.stopResize);
  }
  resolveDataPath(path) {
    if (!path)
      return "";
    const source = this.previewData();
    const parts = path.split(".");
    let current = source;
    for (const part of parts) {
      if (current == null || typeof current !== "object")
        return "";
      current = current[part];
    }
    if (current == null)
      return "";
    if (typeof current === "object")
      return JSON.stringify(current);
    return String(current);
  }
  resolveTableData(path) {
    if (!path)
      return [];
    const source = this.previewData();
    const parts = path.split(".");
    let current = source;
    for (const part of parts) {
      if (current == null || typeof current !== "object")
        return [];
      current = current[part];
    }
    if (current == null || typeof current !== "object")
      return [];
    return Object.entries(current).map(([key, val]) => ({
      key: this._humanize(key),
      value: val != null ? String(val) : ""
    }));
  }
  _humanize(key) {
    return key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").replace(/^./, (s) => s.toUpperCase()).trim();
  }
  static {
    this.\u0275fac = function ReportPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportPreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportPreviewComponent, selectors: [["report-preview"]], viewQuery: function ReportPreviewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.reportPage = _t.first);
      }
    }, inputs: { template: [1, "template"], previewData: [1, "previewData"], primaryColor: [1, "primaryColor"], orientation: [1, "orientation"], clickable: [1, "clickable"], selectedSectionId: [1, "selectedSectionId"], sectionClick: [1, "sectionClick"], logoUrl: [1, "logoUrl"], legend: [1, "legend"], showPageNumbers: [1, "showPageNumbers"], pageNumberPosition: [1, "pageNumberPosition"], watermarkEnabled: [1, "watermarkEnabled"], watermarkType: [1, "watermarkType"], watermarkText: [1, "watermarkText"], watermarkOpacity: [1, "watermarkOpacity"], watermarkPattern: [1, "watermarkPattern"], signatureEnabled: [1, "signatureEnabled"], signatureImage: [1, "signatureImage"], signatureX: [1, "signatureX"], signatureY: [1, "signatureY"], signatureWidth: [1, "signatureWidth"], signatureHeight: [1, "signatureHeight"] }, outputs: { signaturePositionChange: "signaturePositionChange", signatureSizeChange: "signatureSizeChange" }, decls: 11, vars: 10, consts: [["reportPage", ""], [1, "bg-white", "rounded-lg", "shadow-lg", "mx-auto", "overflow-hidden", "flex", "flex-col", "relative", 2, "border", "1px solid #e5e7eb"], [1, "absolute", "inset-0", "pointer-events-none", "z-20"], [1, "px-8", "pt-4", "text-[10px]", "text-gray-400", 3, "text-align"], [1, "p-8", "sm:p-10", "lg:p-12", "flex-1"], [1, "mb-6"], [1, "flex", "flex-col", "items-center", "justify-center", "h-64", "text-gray-300"], [1, "transition-all", "duration-200", 3, "cursor-pointer", "ring-2", "ring-indigo-400", "rounded-md"], [1, "px-8", "sm:px-10", "lg:px-12", "pb-6", "mt-auto"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "pointer-events-none", "z-10", "overflow-hidden"], [1, "absolute", "inset-0", "pointer-events-none", "z-10", "overflow-hidden", 2, "display", "grid", "grid-template-columns", "repeat(3, 1fr)", "grid-template-rows", "repeat(5, 1fr)", "gap", "0"], [1, "text-gray-500", "font-bold", "select-none", "whitespace-nowrap", 2, "font-size", "72px", "transform", "rotate(-35deg)", "letter-spacing", "8px", 3, "opacity"], ["alt", "Watermark", 1, "select-none", "max-w-[60%]", "max-h-[40%]", "object-contain", 2, "transform", "rotate(-15deg)", 3, "src", "opacity"], [1, "text-gray-500", "font-bold", "select-none", "whitespace-nowrap", 2, "font-size", "72px", "transform", "rotate(-35deg)", "letter-spacing", "8px"], ["alt", "Watermark", 1, "select-none", "max-w-[60%]", "max-h-[40%]", "object-contain", 2, "transform", "rotate(-15deg)", 3, "src"], [1, "flex", "items-center", "justify-center"], [1, "text-gray-500", "font-bold", "select-none", "whitespace-nowrap", 2, "font-size", "18px", "transform", "rotate(-35deg)", "letter-spacing", "3px", 3, "opacity"], ["alt", "", 1, "select-none", "w-16", "h-16", "object-contain", 2, "transform", "rotate(-15deg)", 3, "src", "opacity"], [1, "text-gray-500", "font-bold", "select-none", "whitespace-nowrap", 2, "font-size", "18px", "transform", "rotate(-35deg)", "letter-spacing", "3px"], ["alt", "", 1, "select-none", "w-16", "h-16", "object-contain", 2, "transform", "rotate(-15deg)", 3, "src"], ["cdkDrag", "", 1, "absolute", "cursor-move", "border-2", "border-dashed", "border-transparent", "hover:border-indigo-400", "transition-colors", "pointer-events-auto", "group", 3, "cdkDragEnded", "cdkDragFreeDragPosition"], ["draggable", "false", 1, "w-full", "h-full", "object-contain", "pointer-events-none", "select-none", 3, "src"], [1, "absolute", "bottom-[-6px]", "right-[-6px]", "w-5", "h-5", "bg-white", "border", "border-gray-300", "cursor-nwse-resize", "hover:border-indigo-500", "hover:bg-indigo-50", "rounded-full", "shadow-sm", "opacity-0", "group-hover:opacity-100", "transition-opacity", "flex", "items-center", "justify-center", "z-30", 3, "mousedown"], [1, "!text-[12px]", "!w-3", "!h-3", "text-gray-500", "rotate-90"], [1, "px-8", "pt-4", "text-[10px]", "text-gray-400"], ["alt", "Logo", 1, "h-10", "max-w-[180px]", "object-contain", 3, "src"], [1, "!text-5xl", "!w-14", "!h-14", "mb-3"], [1, "text-sm"], [1, "transition-all", "duration-200", 3, "click"], [1, "mb-4", 3, "text-align"], [1, "mb-3"], [1, "flex", "gap-3", "py-2.5", "border-b", "border-gray-100", 3, "text-align"], [1, "mb-4"], [1, "my-4", 2, "border-width", "1px", 3, "border-color"], [3, "height"], [1, "leading-tight"], [1, "leading-relaxed", "whitespace-pre-wrap"], [1, "flex", "gap-3", "py-2.5", "border-b", "border-gray-100"], [1, "text-gray-500", "min-w-[140px]", "shrink-0"], [1, "text-gray-900", "font-medium"], [1, "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wide", "mb-2", 3, "color"], [1, "w-full", "text-sm"], [1, "border-b", "border-gray-100"], [1, "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wide", "mb-2"], [1, "py-2", "pr-4", "text-gray-500", "w-1/3"], [1, "py-2", "text-gray-900", "font-medium"], ["colspan", "2", 1, "py-4", "text-center", "text-gray-300", "text-xs"], [1, "max-h-32", "inline-block", "rounded", 2, "max-width", "100%", 3, "src", "alt"], [1, "inline-flex", "items-center", "justify-center", "w-48", "h-24", "bg-gray-100", "rounded-lg", "text-gray-300"], [1, "!text-3xl"], [1, "my-4", 2, "border-width", "1px"], [1, "border-t", "border-gray-200", "pt-3", "mb-2"], [1, "text-[10px]", "text-gray-400", 3, "border-t", "border-gray-200", "pt-3", "text-align"], [1, "text-[10px]", "text-gray-400", "leading-relaxed", "whitespace-pre-wrap"], [1, "text-[10px]", "text-gray-400"]], template: function ReportPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275template(2, ReportPreviewComponent_Conditional_2_Template, 2, 1)(3, ReportPreviewComponent_Conditional_3_Template, 6, 9, "div", 2)(4, ReportPreviewComponent_Conditional_4_Template, 2, 2, "div", 3);
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275template(6, ReportPreviewComponent_Conditional_6_Template, 2, 1, "div", 5)(7, ReportPreviewComponent_Conditional_7_Template, 6, 3, "div", 6);
        \u0275\u0275repeaterCreate(8, ReportPreviewComponent_For_9_Template, 8, 15, "div", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, ReportPreviewComponent_Conditional_10_Template, 3, 2, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_7_0;
        \u0275\u0275styleProp("max-width", ctx.orientation() === "landscape" ? "297mm" : "210mm")("min-height", ctx.orientation() === "landscape" ? "210mm" : "297mm");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.watermarkEnabled() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.signatureEnabled() && ctx.signatureImage() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showPageNumbers() && ctx.pageNumberPosition().startsWith("top") ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.logoUrl() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_7_0 = ctx.template().sections) == null ? null : tmp_7_0.length) === 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.template().sections);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.legend() || ctx.showPageNumbers() && ctx.pageNumberPosition().startsWith("bottom") ? 10 : -1);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe, DragDropModule, CdkDrag], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportPreviewComponent, [{
    type: Component,
    args: [{ selector: "report-preview", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule, DragDropModule], template: `<div
    #reportPage
    class="bg-white rounded-lg shadow-lg mx-auto overflow-hidden flex flex-col relative"
    [style.max-width]="orientation() === 'landscape' ? '297mm' : '210mm'"
    [style.min-height]="orientation() === 'landscape' ? '210mm' : '297mm'"
    style="border: 1px solid #e5e7eb"
>
    <!-- Watermark overlay -->
    @if (watermarkEnabled()) {
        @if (watermarkPattern() === 'single') {
            <!-- Single centered watermark -->
            <div
                class="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden"
            >
                @if (watermarkType() === 'text') {
                    <span
                        class="text-gray-500 font-bold select-none whitespace-nowrap"
                        [style.opacity]="watermarkOpacity()"
                        style="font-size: 72px; transform: rotate(-35deg); letter-spacing: 8px"
                        >{{ watermarkText() }}</span
                    >
                } @else if (watermarkType() === 'logo' && logoUrl()) {
                    <img
                        [src]="logoUrl()"
                        alt="Watermark"
                        class="select-none max-w-[60%] max-h-[40%] object-contain"
                        [style.opacity]="watermarkOpacity()"
                        style="transform: rotate(-15deg)"
                    />
                }
            </div>
        } @else {
            <!-- Repeated tiled watermark -->
            <div
                class="absolute inset-0 pointer-events-none z-10 overflow-hidden"
                style="
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-rows: repeat(5, 1fr);
                    gap: 0;
                "
            >
                @for (i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; track i) {
                    <div class="flex items-center justify-center">
                        @if (watermarkType() === 'text') {
                            <span
                                class="text-gray-500 font-bold select-none whitespace-nowrap"
                                [style.opacity]="watermarkOpacity()"
                                style="
                                    font-size: 18px;
                                    transform: rotate(-35deg);
                                    letter-spacing: 3px;
                                "
                                >{{ watermarkText() }}</span
                            >
                        } @else if (watermarkType() === 'logo' && logoUrl()) {
                            <img
                                [src]="logoUrl()"
                                alt=""
                                class="select-none w-16 h-16 object-contain"
                                [style.opacity]="watermarkOpacity()"
                                style="transform: rotate(-15deg)"
                            />
                        }
                    </div>
                }
            </div>
        }
    }

    <!-- Signature Overlay -->
    @if (signatureEnabled() && signatureImage()) {
        <div class="absolute inset-0 pointer-events-none z-20">
            <div
                class="absolute cursor-move border-2 border-dashed border-transparent hover:border-indigo-400 transition-colors pointer-events-auto group"
                [style.width.px]="viewSignatureWidth"
                [style.height.px]="viewSignatureHeight"
                cdkDrag
                [cdkDragFreeDragPosition]="{ x: viewSignatureX, y: viewSignatureY }"
                (cdkDragEnded)="onSignatureDragEnd($event)"
            >
                <img
                    [src]="signatureImage()"
                    class="w-full h-full object-contain pointer-events-none select-none"
                    draggable="false"
                />

                <!-- Resize Handle -->
                <div
                    class="absolute bottom-[-6px] right-[-6px] w-5 h-5 bg-white border border-gray-300 cursor-nwse-resize hover:border-indigo-500 hover:bg-indigo-50 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-30"
                    (mousedown)="startResize($event)"
                >
                    <mat-icon class="!text-[12px] !w-3 !h-3 text-gray-500 rotate-90"
                        >unfold_more</mat-icon
                    >
                </div>
            </div>
        </div>
    }
    <!-- Top page number -->
    @if (showPageNumbers() && pageNumberPosition().startsWith('top')) {
        <div
            class="px-8 pt-4 text-[10px] text-gray-400"
            [style.text-align]="
                pageNumberPosition() === 'top-left'
                    ? 'left'
                    : pageNumberPosition() === 'top-right'
                      ? 'right'
                      : 'center'
            "
        >
            Page 1 of 1
        </div>
    }

    <div class="p-8 sm:p-10 lg:p-12 flex-1">
        <!-- Logo -->
        @if (logoUrl()) {
            <div class="mb-6">
                <img [src]="logoUrl()" alt="Logo" class="h-10 max-w-[180px] object-contain" />
            </div>
        }

        @if (template().sections?.length === 0) {
            <div class="flex flex-col items-center justify-center h-64 text-gray-300">
                <mat-icon class="!text-5xl !w-14 !h-14 mb-3">description</mat-icon>
                <p class="text-sm">{{ 'smartReport.noSectionsToPreview' | transloco }}</p>
            </div>
        }

        @for (section of template().sections; track section.id) {
            <div
                class="transition-all duration-200"
                [class.cursor-pointer]="clickable()"
                [class.ring-2]="clickable() && selectedSectionId() === section.id"
                [class.ring-indigo-400]="clickable() && selectedSectionId() === section.id"
                [class.rounded-md]="clickable() && selectedSectionId() === section.id"
                (click)="clickable() && sectionClick() ? sectionClick()!(section) : null"
            >
                @if (section.type === 'header') {
                    <div class="mb-4" [style.text-align]="section.style?.textAlign || 'left'">
                        <h2
                            [style.font-size.px]="section.style?.fontSize || 22"
                            [style.font-weight]="section.style?.fontWeight || 'bold'"
                            [style.color]="section.style?.color || primaryColor()"
                            class="leading-tight"
                        >
                            {{
                                section.staticContent ||
                                    section.label ||
                                    ('smartReport.untitled' | transloco)
                            }}
                        </h2>
                    </div>
                }

                @if (section.type === 'text') {
                    <div class="mb-3">
                        <p
                            [style.font-size.px]="section.style?.fontSize || 12"
                            [style.font-weight]="section.style?.fontWeight || 'normal'"
                            [style.text-align]="section.style?.textAlign || 'left'"
                            [style.color]="section.style?.color || '#374151'"
                            class="leading-relaxed whitespace-pre-wrap"
                        >
                            {{ section.staticContent || ('smartReport.textContent' | transloco) }}
                        </p>
                    </div>
                }

                @if (section.type === 'field') {
                    <div
                        class="flex gap-3 py-2.5 border-b border-gray-100"
                        [style.text-align]="section.style?.textAlign || 'left'"
                    >
                        <span
                            class="text-gray-500 min-w-[140px] shrink-0"
                            [style.font-size.px]="section.style?.fontSize || 12"
                            >{{ section.label || ('smartReport.field' | transloco) }}</span
                        >
                        <span
                            class="text-gray-900 font-medium"
                            [style.font-size.px]="section.style?.fontSize || 12"
                            [style.color]="section.style?.color || '#111827'"
                            >{{ resolveDataPath(section.dataPath) || '\u2014' }}</span
                        >
                    </div>
                }

                @if (section.type === 'table') {
                    <div class="mb-4">
                        @if (section.label) {
                            <h4
                                class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2"
                                [style.color]="primaryColor()"
                            >
                                {{ section.label }}
                            </h4>
                        }
                        <table class="w-full text-sm">
                            <tbody>
                                @for (row of resolveTableData(section.dataPath); track row.key) {
                                    <tr class="border-b border-gray-100">
                                        <td class="py-2 pr-4 text-gray-500 w-1/3">{{ row.key }}</td>
                                        <td class="py-2 text-gray-900 font-medium">
                                            {{ row.value }}
                                        </td>
                                    </tr>
                                }
                                @if (resolveTableData(section.dataPath).length === 0) {
                                    <tr>
                                        <td
                                            colspan="2"
                                            class="py-4 text-center text-gray-300 text-xs"
                                        >
                                            {{
                                                'smartReport.noDataAtPath'
                                                    | transloco: { path: section.dataPath }
                                            }}
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                }

                @if (section.type === 'image') {
                    <div class="mb-4" [style.text-align]="section.style?.textAlign || 'center'">
                        @if (section.staticContent) {
                            <img
                                [src]="section.staticContent"
                                [alt]="section.label || ('smartReport.image' | transloco)"
                                class="max-h-32 inline-block rounded"
                                style="max-width: 100%"
                            />
                        } @else {
                            <div
                                class="inline-flex items-center justify-center w-48 h-24 bg-gray-100 rounded-lg text-gray-300"
                            >
                                <mat-icon class="!text-3xl">image</mat-icon>
                            </div>
                        }
                    </div>
                }

                @if (section.type === 'divider') {
                    <hr
                        class="my-4"
                        [style.border-color]="section.style?.color || '#E5E7EB'"
                        style="border-width: 1px"
                    />
                }

                @if (section.type === 'spacer') {
                    <div [style.height.px]="section.style?.padding || 16"></div>
                }
            </div>
        }
    </div>

    <!-- Footer area: legend + bottom page numbers -->
    @if (legend() || (showPageNumbers() && pageNumberPosition().startsWith('bottom'))) {
        <div class="px-8 sm:px-10 lg:px-12 pb-6 mt-auto">
            @if (legend()) {
                <div class="border-t border-gray-200 pt-3 mb-2">
                    <p class="text-[10px] text-gray-400 leading-relaxed whitespace-pre-wrap">
                        {{ legend() }}
                    </p>
                </div>
            }
            @if (showPageNumbers() && pageNumberPosition().startsWith('bottom')) {
                <div
                    class="text-[10px] text-gray-400"
                    [class.border-t]="!legend()"
                    [class.border-gray-200]="!legend()"
                    [class.pt-3]="!legend()"
                    [style.text-align]="
                        pageNumberPosition() === 'bottom-left'
                            ? 'left'
                            : pageNumberPosition() === 'bottom-right'
                              ? 'right'
                              : 'center'
                    "
                >
                    Page 1 of 1
                </div>
            }
        </div>
    }
</div>
` }]
  }], null, { reportPage: [{
    type: ViewChild,
    args: ["reportPage"]
  }], signaturePositionChange: [{
    type: Output
  }], signatureSizeChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportPreviewComponent, { className: "ReportPreviewComponent", filePath: "src/app/modules/smart-batch/report-preview/report-preview.component.ts", lineNumber: 18 });
})();

// src/app/modules/smart-batch/report-builder/send-sample-modal/send-sample-modal.component.ts
function SendSampleModalComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartReport.atLeastOneRecipient"));
  }
}
function SendSampleModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartReport.enterValidEmails"));
  }
}
var EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function emailsValidator(control) {
  const value = (control.value || "").trim();
  if (!value)
    return { required: true };
  const emails = value.split(",").map((v) => v.trim()).filter((v) => !!v);
  if (emails.length === 0)
    return { required: true };
  const invalid = emails.filter((e) => !EMAIL_REGEX.test(e));
  if (invalid.length > 0)
    return { invalidEmails: { value: invalid } };
  return null;
}
var SendSampleModalComponent = class _SendSampleModalComponent {
  get isSample() {
    return this._data?.isSample !== false;
  }
  get subjectPlaceholder() {
    return this.isSample ? this._transloco.translate("smartReport.subjectOptionalPlaceholder") : this._transloco.translate("smartReport.reportBatchPlaceholder");
  }
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this._fb = inject(FormBuilder);
    this._data = inject(MAT_DIALOG_DATA, { optional: true });
    this._transloco = inject(TranslocoService);
    const defaultSubject = this._data?.defaultSubject || (this._data?.isSample === false ? this._transloco.translate("smartReport.reportBatchPlaceholder") : this._transloco.translate("smartReport.subjectOptionalPlaceholder"));
    this.form = this._fb.group({
      recipients: ["", [emailsValidator]],
      subject: [defaultSubject, []]
    });
  }
  onCancel() {
    this._dialogRef.close();
  }
  onSubmit() {
    const recipientsControl = this.form.get("recipients");
    if (this.form.invalid || !recipientsControl)
      return;
    const recipientsRaw = (recipientsControl.value || "").split(",").map((v) => v.trim()).filter((v) => !!v);
    const validRecipients = recipientsRaw.filter((e) => EMAIL_REGEX.test(e));
    if (validRecipients.length === 0) {
      recipientsControl.setErrors(recipientsRaw.length === 0 ? { required: true } : { invalidEmails: { value: recipientsRaw } });
      recipientsControl.markAsTouched();
      return;
    }
    const result = {
      recipients: validRecipients,
      subject: this.form.get("subject")?.value?.trim() || void 0
    };
    this._dialogRef.close(result);
  }
  static {
    this.\u0275fac = function SendSampleModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SendSampleModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SendSampleModalComponent, selectors: [["send-sample-modal"]], decls: 43, vars: 29, consts: [[1, "flex", "flex-col", "w-full", "max-w-lg"], [1, "px-6", "pt-6", "pb-4"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3"], [1, "w-12", "h-12", "rounded-xl", "bg-gradient-to-br", "from-indigo-500", "to-purple-600", "flex", "items-center", "justify-center", "shadow-lg", "shadow-indigo-500/25"], [1, "!w-6", "!h-6", "text-white", "icon-size-6"], [1, "text-lg", "font-bold", "text-slate-900", "dark:text-white"], [1, "text-sm", "text-slate-500", "dark:text-slate-400"], ["mat-icon-button", "", 1, "!-mr-2", 3, "click"], [1, "px-6", "pb-6", "space-y-4", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "recipients", "rows", "3", 3, "placeholder"], ["matInput", "", "formControlName", "subject", 3, "placeholder"], [1, "flex", "gap-3", "pt-2", "justify-end", "border-t", "border-slate-200", "dark:border-slate-700"], ["mat-button", "", "type", "button", 1, "!text-slate-600", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "!rounded-xl", "!bg-indigo-600", "!text-white", 3, "disabled"], [1, "!w-4", "!h-4", "mr-1"]], template: function SendSampleModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-icon", 5);
        \u0275\u0275text(6, "send");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div")(8, "h2", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "button", 8);
        \u0275\u0275listener("click", function SendSampleModalComponent_Template_button_click_14_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275elementStart(15, "mat-icon");
        \u0275\u0275text(16, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "form", 9);
        \u0275\u0275listener("ngSubmit", function SendSampleModalComponent_Template_form_ngSubmit_17_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(18, "mat-form-field", 10)(19, "mat-label");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "textarea", 11);
        \u0275\u0275pipe(23, "transloco");
        \u0275\u0275elementStart(24, "mat-hint");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, SendSampleModalComponent_Conditional_27_Template, 3, 3, "mat-error")(28, SendSampleModalComponent_Conditional_28_Template, 3, 3, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "mat-form-field", 10)(30, "mat-label");
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(33, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 13)(35, "button", 14);
        \u0275\u0275listener("click", function SendSampleModalComponent_Template_button_click_35_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 15)(39, "mat-icon", 16);
        \u0275\u0275text(40, "send");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "transloco");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_6_0;
        let tmp_7_0;
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 13, ctx.isSample ? "smartReport.sendSampleReport" : "smartReport.sendReport"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 15, "smartReport.enterRecipientsAndSubject"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 17, "smartReport.recipientEmails"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(23, 19, "smartReport.recipientsPlaceholder"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 21, "smartReport.separateEmailsWithCommas"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_6_0 = ctx.form.get("recipients")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.form.get("recipients")) == null ? null : tmp_6_0.touched) ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_7_0 = ctx.form.get("recipients")) == null ? null : tmp_7_0.hasError("invalidEmails")) && ((tmp_7_0 = ctx.form.get("recipients")) == null ? null : tmp_7_0.touched) ? 28 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 23, "smartReport.subjectOptional"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", ctx.subjectPlaceholder);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 25, "smartReport.cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.invalid || ctx.form.pending);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 27, ctx.isSample ? "smartReport.sendSample" : "smartReport.sendReport"), " ");
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatDialogModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatHint,
      MatError,
      MatInputModule,
      MatInput,
      TranslocoModule,
      TranslocoPipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=send-sample-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SendSampleModalComponent, [{
    type: Component,
    args: [{ selector: "send-sample-modal", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      TranslocoModule
    ], template: `
        <div class="flex flex-col w-full max-w-lg">
            <!-- Header -->
            <div class="px-6 pt-6 pb-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25"
                        >
                            <mat-icon class="!w-6 !h-6 text-white icon-size-6">send</mat-icon>
                        </div>
                        <div>
                            <h2 class="text-lg font-bold text-slate-900 dark:text-white">
                                {{ (isSample ? 'smartReport.sendSampleReport' : 'smartReport.sendReport') | transloco }}
                            </h2>
                            <p class="text-sm text-slate-500 dark:text-slate-400">
                                {{ 'smartReport.enterRecipientsAndSubject' | transloco }}
                            </p>
                        </div>
                    </div>
                    <button mat-icon-button (click)="onCancel()" class="!-mr-2">
                        <mat-icon>close</mat-icon>
                    </button>
                </div>
            </div>

            <!-- Form -->
            <form [formGroup]="form" (ngSubmit)="onSubmit()" class="px-6 pb-6 space-y-4">
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{ 'smartReport.recipientEmails' | transloco }}</mat-label>
                    <textarea
                        matInput
                        formControlName="recipients"
                        [placeholder]="'smartReport.recipientsPlaceholder' | transloco"
                        rows="3"
                    ></textarea>
                    <mat-hint>{{ 'smartReport.separateEmailsWithCommas' | transloco }}</mat-hint>
                    @if (form.get('recipients')?.hasError('required') && form.get('recipients')?.touched) {
                        <mat-error>{{ 'smartReport.atLeastOneRecipient' | transloco }}</mat-error>
                    }
                    @if (form.get('recipients')?.hasError('invalidEmails') && form.get('recipients')?.touched) {
                        <mat-error>{{ 'smartReport.enterValidEmails' | transloco }}</mat-error>
                    }
                </mat-form-field>

                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>{{ 'smartReport.subjectOptional' | transloco }}</mat-label>
                    <input matInput formControlName="subject" [placeholder]="subjectPlaceholder" />
                </mat-form-field>

                <div class="flex gap-3 pt-2 justify-end border-t border-slate-200 dark:border-slate-700">
                    <button mat-button type="button" (click)="onCancel()" class="!text-slate-600">
                        {{ 'smartReport.cancel' | transloco }}
                    </button>
                    <button
                        mat-flat-button
                        color="primary"
                        type="submit"
                        [disabled]="form.invalid || form.pending"
                        class="!rounded-xl !bg-indigo-600 !text-white"
                    >
                        <mat-icon class="!w-4 !h-4 mr-1">send</mat-icon>
                        {{ (isSample ? 'smartReport.sendSample' : 'smartReport.sendReport') | transloco }}
                    </button>
                </div>
            </form>
        </div>
    `, styles: ["/* angular:styles/component:scss;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/Users/miguel/Smart-Agent/frontend/src/app/modules/smart-batch/report-builder/send-sample-modal/send-sample-modal.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=send-sample-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SendSampleModalComponent, { className: "SendSampleModalComponent", filePath: "src/app/modules/smart-batch/report-builder/send-sample-modal/send-sample-modal.component.ts", lineNumber: 126 });
})();

export {
  ReportBuilderPreviewDataService,
  ReportPreviewComponent,
  SendSampleModalComponent
};
//# sourceMappingURL=chunk-6M3ZDMWZ.js.map
