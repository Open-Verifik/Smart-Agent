import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-RWPBVZ63.js";
import {
  ReportBuilderPreviewDataService,
  ReportPreviewComponent,
  SendSampleModalComponent
} from "./chunk-6M3ZDMWZ.js";
import {
  SmartReportService
} from "./chunk-NIQX74WQ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DXMIRT7Q.js";
import {
  fuseAnimations
} from "./chunk-CK3XZJWG.js";
import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-DX55R373.js";
import "./chunk-A6T5DVED.js";
import "./chunk-GMB4P7VL.js";
import "./chunk-B4CPLDBC.js";
import "./chunk-MJXNRHWH.js";
import "./chunk-346ISJSG.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-HZKTYM3F.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-6KHU2J3U.js";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-KCV7S453.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-AY2HQ4EH.js";
import {
  MatOption
} from "./chunk-SYP4RNRN.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel
} from "./chunk-3YVZWUPK.js";
import "./chunk-L4JZMXIC.js";
import "./chunk-2W5F3UIW.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  RangeValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
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
  CommonModule,
  Component,
  DecimalPipe,
  MatButton,
  MatButtonModule,
  MatIconButton,
  SlicePipe,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵpipeBind3,
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
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-YTOBX75K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/smart-batch/helper-data.util.ts
function flattenDataForHelper(obj, prefix = "") {
  const paths = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value != null && typeof value === "object" && !Array.isArray(value)) {
      paths.push({
        path,
        value: "",
        type: "object"
      });
      paths.push(...flattenDataForHelper(value, path));
    } else {
      const displayValue = value == null ? "\u2014" : typeof value === "string" ? value : Array.isArray(value) ? JSON.stringify(value) : String(value);
      paths.push({
        path,
        value: displayValue.length > 60 ? displayValue.slice(0, 60) + "\u2026" : displayValue,
        type: "leaf"
      });
    }
  }
  return paths;
}
function buildHelperDataPaths(previewData) {
  const paths = [];
  if (previewData.inputData && Object.keys(previewData.inputData).length > 0) {
    paths.push({ path: "inputData", value: "", type: "object" });
    paths.push(...flattenDataForHelper(previewData.inputData, "inputData"));
  }
  if (previewData.results && Object.keys(previewData.results).length > 0) {
    paths.push({ path: "results", value: "", type: "object" });
    paths.push(...flattenDataForHelper(previewData.results, "results"));
  }
  return paths;
}

// src/app/modules/smart-batch/report-builder/signature-pad-dialog/signature-pad-dialog.component.ts
var _c0 = ["canvas"];
var SignaturePadDialogComponent = class _SignaturePadDialogComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.scaleX = 1;
    this.scaleY = 1;
  }
  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    this.ctx = ctx;
    this.scaleX = canvas.width / rect.width;
    this.scaleY = canvas.height / rect.height;
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = "round";
    this.ctx.strokeStyle = "#000000";
  }
  startDrawing(e) {
    this.isDrawing = true;
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.scaleX = this.canvasRef.nativeElement.width / rect.width;
    this.scaleY = this.canvasRef.nativeElement.height / rect.height;
    this.lastX = (e.clientX - rect.left) * this.scaleX;
    this.lastY = (e.clientY - rect.top) * this.scaleY;
  }
  draw(e) {
    if (!this.isDrawing)
      return;
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const x = (e.clientX - rect.left) * this.scaleX;
    const y = (e.clientY - rect.top) * this.scaleY;
    this._drawLine(this.lastX, this.lastY, x, y);
    this.lastX = x;
    this.lastY = y;
  }
  startDrawingTouch(e) {
    if (e.cancelable)
      e.preventDefault();
    this.isDrawing = true;
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.scaleX = this.canvasRef.nativeElement.width / rect.width;
    this.scaleY = this.canvasRef.nativeElement.height / rect.height;
    const touch = e.touches[0];
    this.lastX = (touch.clientX - rect.left) * this.scaleX;
    this.lastY = (touch.clientY - rect.top) * this.scaleY;
  }
  drawTouch(e) {
    if (e.cancelable)
      e.preventDefault();
    if (!this.isDrawing)
      return;
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * this.scaleX;
    const y = (touch.clientY - rect.top) * this.scaleY;
    this._drawLine(this.lastX, this.lastY, x, y);
    this.lastX = x;
    this.lastY = y;
  }
  stopDrawing() {
    this.isDrawing = false;
  }
  clearCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  save() {
    const dataUrl = this.canvasRef.nativeElement.toDataURL("image/png");
    this._dialogRef.close(dataUrl);
  }
  _drawLine(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  }
  static {
    this.\u0275fac = function SignaturePadDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignaturePadDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignaturePadDialogComponent, selectors: [["signature-pad-dialog"]], viewQuery: function SignaturePadDialogComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
      }
    }, decls: 20, vars: 12, consts: [["canvas", ""], ["mat-dialog-title", "", 1, "flex", "items-center", "justify-between"], ["mat-icon-button", "", "mat-dialog-close", ""], [1, "border", "border-gray-300", "rounded-lg", "overflow-hidden", "bg-white", "touch-none"], ["width", "600", "height", "300", 1, "block", "w-full", "h-auto", "cursor-crosshair", 3, "mousedown", "mousemove", "mouseup", "mouseleave", "touchstart", "touchmove", "touchend"], [1, "text-xs", "text-gray-500", "mt-2", "text-center"], ["align", "end", 1, "gap-2"], ["mat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function SignaturePadDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "h2", 1);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "transloco");
        \u0275\u0275elementStart(3, "button", 2)(4, "mat-icon");
        \u0275\u0275text(5, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "mat-dialog-content")(7, "div", 3)(8, "canvas", 4, 0);
        \u0275\u0275listener("mousedown", function SignaturePadDialogComponent_Template_canvas_mousedown_8_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startDrawing($event));
        })("mousemove", function SignaturePadDialogComponent_Template_canvas_mousemove_8_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.draw($event));
        })("mouseup", function SignaturePadDialogComponent_Template_canvas_mouseup_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.stopDrawing());
        })("mouseleave", function SignaturePadDialogComponent_Template_canvas_mouseleave_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.stopDrawing());
        })("touchstart", function SignaturePadDialogComponent_Template_canvas_touchstart_8_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startDrawingTouch($event));
        })("touchmove", function SignaturePadDialogComponent_Template_canvas_touchmove_8_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.drawTouch($event));
        })("touchend", function SignaturePadDialogComponent_Template_canvas_touchend_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.stopDrawing());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 5);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-dialog-actions", 6)(14, "button", 7);
        \u0275\u0275listener("click", function SignaturePadDialogComponent_Template_button_click_14_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.clearCanvas());
        });
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 8);
        \u0275\u0275listener("click", function SignaturePadDialogComponent_Template_button_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.save());
        });
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "smartReport.drawSignature"), " ");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 6, "smartReport.useMouseOrFingerToSign"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 8, "smartReport.clear"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, "smartReport.saveSignature"));
      }
    }, dependencies: [CommonModule, MatButtonModule, MatButton, MatIconButton, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\ncanvas[_ngcontent-%COMP%] {\n  touch-action: none;\n}\n/*# sourceMappingURL=signature-pad-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignaturePadDialogComponent, [{
    type: Component,
    args: [{ selector: "signature-pad-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule], template: `
        <h2 mat-dialog-title class="flex items-center justify-between">
            {{ 'smartReport.drawSignature' | transloco }}
            <button mat-icon-button mat-dialog-close>
                <mat-icon>close</mat-icon>
            </button>
        </h2>
        <mat-dialog-content>
            <div class="border border-gray-300 rounded-lg overflow-hidden bg-white touch-none">
                <canvas
                    #canvas
                    width="600"
                    height="300"
                    class="block w-full h-auto cursor-crosshair"
                    (mousedown)="startDrawing($event)"
                    (mousemove)="draw($event)"
                    (mouseup)="stopDrawing()"
                    (mouseleave)="stopDrawing()"
                    (touchstart)="startDrawingTouch($event)"
                    (touchmove)="drawTouch($event)"
                    (touchend)="stopDrawing()"
                ></canvas>
            </div>
            <p class="text-xs text-gray-500 mt-2 text-center">
                {{ 'smartReport.useMouseOrFingerToSign' | transloco }}
            </p>
        </mat-dialog-content>
        <mat-dialog-actions align="end" class="gap-2">
            <button mat-button (click)="clearCanvas()">{{ 'smartReport.clear' | transloco }}</button>
            <button mat-flat-button color="primary" (click)="save()">{{ 'smartReport.saveSignature' | transloco }}</button>
        </mat-dialog-actions>
    `, styles: ["/* angular:styles/component:scss;473df48689e2646bbaebc7cce99aa8d6cf648283d4755759b8be42190a51d148;/Users/miguel/Smart-Agent/frontend/src/app/modules/smart-batch/report-builder/signature-pad-dialog/signature-pad-dialog.component.ts */\ncanvas {\n  touch-action: none;\n}\n/*# sourceMappingURL=signature-pad-dialog.component.css.map */\n"] }]
  }], null, { canvasRef: [{
    type: ViewChild,
    args: ["canvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignaturePadDialogComponent, { className: "SignaturePadDialogComponent", filePath: "src/app/modules/smart-batch/report-builder/signature-pad-dialog/signature-pad-dialog.component.ts", lineNumber: 52 });
})();

// src/app/modules/smart-batch/report-builder/report-builder.component.ts
var _c02 = (a0, a1) => ({ sections: a0, primaryColor: a1 });
var _c1 = (a0) => ({ num: a0 });
var _c2 = () => ["left", "center", "right"];
var _forTrack0 = ($index, $item) => $item.type;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.path;
function ReportBuilderComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 74);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.sendingSample"), " ");
  }
}
function ReportBuilderComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 75);
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.sendSample"), " ");
  }
}
function ReportBuilderComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 74);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.saving"), " ");
  }
}
function ReportBuilderComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 75);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.saveTemplate"), " ");
  }
}
function ReportBuilderComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "img", 76);
    \u0275\u0275elementStart(2, "button", 77);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_81_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeLogo());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.logoUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartReport.remove"), " ");
  }
}
function ReportBuilderComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 78)(1, "mat-icon", 79);
    \u0275\u0275text(2, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "input", 80);
    \u0275\u0275listener("change", function ReportBuilderComponent_Conditional_82_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogoUpload($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 81);
    \u0275\u0275text(7, "PNG, JPG, SVG \xB7 max 500KB");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartReport.uploadLogo"), " ");
  }
}
function ReportBuilderComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 43)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-select", 82)(5, "mat-option", 83);
    \u0275\u0275text(6, "\u2196 Top Left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 84);
    \u0275\u0275text(8, "\u2191 Top Center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-option", 85);
    \u0275\u0275text(10, "\u2197 Top Right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 86);
    \u0275\u0275text(12, "\u2199 Bottom Left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-option", 87);
    \u0275\u0275text(14, "\u2193 Bottom Center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 88);
    \u0275\u0275text(16, "\u2198 Bottom Right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "smartReport.pageNumberPosition"));
  }
}
function ReportBuilderComponent_Conditional_106_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "input", 96);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 1, "smartReport.watermarkTextPlaceholder"));
  }
}
function ReportBuilderComponent_Conditional_106_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 91);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.watermarkLogoHint"), " ");
  }
}
function ReportBuilderComponent_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 89)(2, "button", 90);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_106_Template_button_click_2_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_2_0 = ctx_r1.templateForm.get("watermarkType")) == null ? null : tmp_2_0.setValue("text"));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 90);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_106_Template_button_click_5_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_2_0 = ctx_r1.templateForm.get("watermarkType")) == null ? null : tmp_2_0.setValue("logo"));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ReportBuilderComponent_Conditional_106_Conditional_8_Template, 3, 3, "div")(9, ReportBuilderComponent_Conditional_106_Conditional_9_Template, 3, 3, "p", 91);
    \u0275\u0275elementStart(10, "div")(11, "div", 92)(12, "label", 64);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 93);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "input", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "label", 95);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 89)(24, "button", 90);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_106_Template_button_click_24_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_2_0 = ctx_r1.templateForm.get("watermarkPattern")) == null ? null : tmp_2_0.setValue("single"));
    });
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 90);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_106_Template_button_click_27_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_2_0 = ctx_r1.templateForm.get("watermarkPattern")) == null ? null : tmp_2_0.setValue("repeated"));
    });
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_15_0;
    let tmp_16_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-indigo-50", ((tmp_1_0 = ctx_r1.templateForm.get("watermarkType")) == null ? null : tmp_1_0.value) === "text")("border-indigo-300", ((tmp_2_0 = ctx_r1.templateForm.get("watermarkType")) == null ? null : tmp_2_0.value) === "text");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 25, "smartReport.watermarkText"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-indigo-50", ((tmp_4_0 = ctx_r1.templateForm.get("watermarkType")) == null ? null : tmp_4_0.value) === "logo")("border-indigo-300", ((tmp_5_0 = ctx_r1.templateForm.get("watermarkType")) == null ? null : tmp_5_0.value) === "logo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 27, "smartReport.watermarkLogo"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_7_0 = ctx_r1.templateForm.get("watermarkType")) == null ? null : tmp_7_0.value) === "text" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = ctx_r1.templateForm.get("watermarkType")) == null ? null : tmp_8_0.value) === "logo" && !ctx_r1.logoUrl() ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 29, "smartReport.watermarkOpacity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 31, ((tmp_10_0 = ctx_r1.templateForm.get("watermarkOpacity")) == null ? null : tmp_10_0.value) * 100, "1.0-0"), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 34, "smartReport.watermarkPattern"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-indigo-50", ((tmp_12_0 = ctx_r1.templateForm.get("watermarkPattern")) == null ? null : tmp_12_0.value) === "single")("border-indigo-300", ((tmp_13_0 = ctx_r1.templateForm.get("watermarkPattern")) == null ? null : tmp_13_0.value) === "single");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 36, "smartReport.watermarkSingle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-indigo-50", ((tmp_15_0 = ctx_r1.templateForm.get("watermarkPattern")) == null ? null : tmp_15_0.value) === "repeated")("border-indigo-300", ((tmp_16_0 = ctx_r1.templateForm.get("watermarkPattern")) == null ? null : tmp_16_0.value) === "repeated");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 38, "smartReport.watermarkRepeated"), " ");
  }
}
function ReportBuilderComponent_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div")(2, "label", 95);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 97);
    \u0275\u0275element(6, "input", 98);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementStart(8, "button", 99);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_116_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showPassword = !ctx_r1.showPassword);
    });
    \u0275\u0275elementStart(9, "mat-icon", 100);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "p", 101);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "smartReport.securityPassword"));
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password")("placeholder", \u0275\u0275pipeBind1(7, 7, "smartReport.securityPasswordPlaceholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.showPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 9, "smartReport.securityPasswordHint"), " ");
  }
}
function ReportBuilderComponent_Conditional_126_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275element(1, "img", 104);
    \u0275\u0275elementStart(2, "button", 105);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_126_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.templateForm.patchValue({ signatureImage: null }));
    });
    \u0275\u0275elementStart(3, "mat-icon", 100);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "p", 64);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", (tmp_2_0 = ctx_r1.templateForm.get("signatureImage")) == null ? null : tmp_2_0.value, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "smartReport.dragSignatureToPosition"), " ");
  }
}
function ReportBuilderComponent_Conditional_126_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 106);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_126_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSignatureDialog());
    });
    \u0275\u0275elementStart(1, "mat-icon", 107);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartReport.drawSignature"), " ");
  }
}
function ReportBuilderComponent_Conditional_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, ReportBuilderComponent_Conditional_126_Conditional_1_Template, 8, 4)(2, ReportBuilderComponent_Conditional_126_Conditional_2_Template, 5, 3, "button", 102);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.templateForm.get("signatureImage")) == null ? null : tmp_1_0.value) ? 1 : 2);
  }
}
function ReportBuilderComponent_Conditional_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.openFromReportViewer"), " ");
  }
}
function ReportBuilderComponent_Conditional_135_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "code", 110);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 112);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_135_For_2_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyPathToClipboard(item_r9.path));
    });
    \u0275\u0275elementStart(7, "mat-icon", 113);
    \u0275\u0275text(8, "content_copy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.path);
    \u0275\u0275advance();
    \u0275\u0275property("title", item_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r9.value);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "smartReport.copyPath"));
  }
}
function ReportBuilderComponent_Conditional_135_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 112);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_135_For_2_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const item_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyPathToClipboard(item_r9.path));
    });
    \u0275\u0275elementStart(5, "mat-icon", 113);
    \u0275\u0275text(6, "content_copy");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.path);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 2, "smartReport.copyPathForTable"));
  }
}
function ReportBuilderComponent_Conditional_135_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportBuilderComponent_Conditional_135_For_2_Conditional_0_Template, 9, 6, "div", 108)(1, ReportBuilderComponent_Conditional_135_For_2_Conditional_1_Template, 7, 4, "div", 109);
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275conditional(item_r9.type === "leaf" ? 0 : 1);
  }
}
function ReportBuilderComponent_Conditional_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275repeaterCreate(1, ReportBuilderComponent_Conditional_135_For_2_Template, 2, 1, null, null, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.helperDataPaths());
  }
}
function ReportBuilderComponent_For_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function ReportBuilderComponent_For_142_Template_button_click_0_listener() {
      const sectionType_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSection(sectionType_r12.type));
    });
    \u0275\u0275elementStart(1, "mat-icon", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sectionType_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sectionType_r12.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, sectionType_r12.labelKey), " ");
  }
}
function ReportBuilderComponent_Conditional_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "mat-icon", 116);
    \u0275\u0275text(2, "add_box");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 117);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "smartReport.addSectionsFromAbove"), " ");
  }
}
function ReportBuilderComponent_For_158_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const section_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", section_r14.label, " ");
  }
}
function ReportBuilderComponent_For_158_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "slice");
  }
  if (rf & 2) {
    const section_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(1, 2, section_r14.staticContent, 0, 30), "", section_r14.staticContent.length > 30 ? "..." : "", " ");
  }
}
function ReportBuilderComponent_For_158_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const section_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", section_r14.dataPath, " ");
  }
}
function ReportBuilderComponent_For_158_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const section_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "smartReport.sectionNumber", \u0275\u0275pureFunction1(4, _c1, section_r14.order + 1)), " ");
  }
}
function ReportBuilderComponent_For_158_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275listener("click", function ReportBuilderComponent_For_158_Template_div_click_0_listener() {
      const section_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectSection(section_r14));
    });
    \u0275\u0275elementStart(1, "div", 119)(2, "mat-icon", 120);
    \u0275\u0275text(3, "drag_indicator");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 121)(5, "mat-icon", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 122)(8, "p", 123);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 124);
    \u0275\u0275template(11, ReportBuilderComponent_For_158_Conditional_11_Template, 1, 1)(12, ReportBuilderComponent_For_158_Conditional_12_Template, 2, 6)(13, ReportBuilderComponent_For_158_Conditional_13_Template, 1, 1)(14, ReportBuilderComponent_For_158_Conditional_14_Template, 2, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 125)(16, "button", 126);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275listener("click", function ReportBuilderComponent_For_158_Template_button_click_16_listener($event) {
      const section_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.duplicateSection(section_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(18, "mat-icon", 127);
    \u0275\u0275text(19, "content_copy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 126);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275listener("click", function ReportBuilderComponent_For_158_Template_button_click_20_listener($event) {
      const section_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.deleteSection(section_r14.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(22, "mat-icon", 128);
    \u0275\u0275text(23, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    const section_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ring-2", ((tmp_10_0 = ctx_r1.currentSelectedSection()) == null ? null : tmp_10_0.id) === section_r14.id)("ring-indigo-500", ((tmp_11_0 = ctx_r1.currentSelectedSection()) == null ? null : tmp_11_0.id) === section_r14.id)("bg-indigo-50", ((tmp_12_0 = ctx_r1.currentSelectedSection()) == null ? null : tmp_12_0.id) === section_r14.id);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ((tmp_13_0 = ctx_r1.templateForm.get("primaryColor")) == null ? null : tmp_13_0.value) + "15");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", (tmp_14_0 = ctx_r1.templateForm.get("primaryColor")) == null ? null : tmp_14_0.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getSectionIcon(section_r14.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSectionLabel(section_r14.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(section_r14.label ? 11 : section_r14.staticContent ? 12 : section_r14.dataPath ? 13 : 14);
    \u0275\u0275advance(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 15, "smartReport.duplicate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(21, 17, "smartReport.delete"));
  }
}
function ReportBuilderComponent_Conditional_159_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 133);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_159_Conditional_9_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const sel_r17 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSection(sel_r17.id, { staticContent: $event.target.value, label: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartReport.titleText"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r17.staticContent || "")("placeholder", \u0275\u0275pipeBind1(5, 5, "smartReport.reportTitle"));
  }
}
function ReportBuilderComponent_Conditional_159_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 134);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_159_Conditional_10_Template_textarea_input_4_listener($event) {
      \u0275\u0275restoreView(_r18);
      const sel_r17 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSection(sel_r17.id, { staticContent: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartReport.content"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r17.staticContent || "")("placeholder", \u0275\u0275pipeBind1(5, 5, "smartReport.enterTextContent"));
  }
}
function ReportBuilderComponent_Conditional_159_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 133);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_159_Conditional_11_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r19);
      const sel_r17 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSection(sel_r17.id, { label: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "label", 36);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 135);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_159_Conditional_11_Template_input_input_10_listener($event) {
      \u0275\u0275restoreView(_r19);
      const sel_r17 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSection(sel_r17.id, { dataPath: $event.target.value }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 81);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "smartReport.label"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r17.label || "")("placeholder", \u0275\u0275pipeBind1(5, 9, "smartReport.fieldLabel"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "smartReport.dataPath"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r17.dataPath || "")("placeholder", \u0275\u0275pipeBind1(11, 13, "smartReport.dataPathPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 15, "smartReport.dotSeparatedPath"), " ");
  }
}
function ReportBuilderComponent_Conditional_159_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 133);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_159_Conditional_12_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const sel_r17 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSection(sel_r17.id, { label: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "label", 36);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 136);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_159_Conditional_12_Template_input_input_10_listener($event) {
      \u0275\u0275restoreView(_r20);
      const sel_r17 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSection(sel_r17.id, { dataPath: $event.target.value }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 81);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "smartReport.tableTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r17.label || "")("placeholder", \u0275\u0275pipeBind1(5, 8, "smartReport.tableLabel"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "smartReport.dataPathObject"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r17.dataPath || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 12, "smartReport.pathToObject"), " ");
  }
}
function ReportBuilderComponent_Conditional_159_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 137);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_159_Conditional_13_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const sel_r17 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSection(sel_r17.id, { staticContent: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "label", 36);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 133);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_159_Conditional_13_Template_input_input_9_listener($event) {
      \u0275\u0275restoreView(_r21);
      const sel_r17 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSection(sel_r17.id, { label: $event.target.value }));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "smartReport.imageUrl"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r17.staticContent || "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "smartReport.altText"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", sel_r17.label || "")("placeholder", \u0275\u0275pipeBind1(10, 9, "smartReport.companyLogo"));
  }
}
function ReportBuilderComponent_Conditional_159_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 138);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_159_Conditional_14_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSectionStyle("padding", $event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartReport.heightPx"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r17.style == null ? null : sel_r17.style.padding) || 16);
  }
}
function ReportBuilderComponent_Conditional_159_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 139);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_159_Conditional_15_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateStyleColor($event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartReport.color"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r17.style == null ? null : sel_r17.style.color) || "#E5E7EB");
  }
}
function ReportBuilderComponent_Conditional_159_Conditional_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 142);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_159_Conditional_16_For_10_Template_button_click_0_listener() {
      const align_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateTextAlign(align_r26));
    });
    \u0275\u0275elementStart(1, "mat-icon", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const align_r26 = ctx.$implicit;
    const sel_r17 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-indigo-50", (sel_r17.style == null ? null : sel_r17.style.textAlign) === align_r26)("border-indigo-300", (sel_r17.style == null ? null : sel_r17.style.textAlign) === align_r26);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("format_align_", align_r26, "");
  }
}
function ReportBuilderComponent_Conditional_159_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "h4", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "label", 95);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 89);
    \u0275\u0275repeaterCreate(9, ReportBuilderComponent_Conditional_159_Conditional_16_For_10_Template, 3, 5, "button", 140, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 95);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 141);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_159_Conditional_16_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateFontSize(+$event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "label", 95);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 89)(21, "button", 142);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_159_Conditional_16_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateFontWeight("normal"));
    });
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 143);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_159_Conditional_16_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateFontWeight("bold"));
    });
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 4)(28, "label", 64);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 144);
    \u0275\u0275listener("input", function ReportBuilderComponent_Conditional_159_Conditional_16_Template_input_input_31_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateStyleColor($event.target.value));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const sel_r17 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 17, "smartReport.style"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 19, "smartReport.textAlign"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(31, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 21, "smartReport.fontSize"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r17.style == null ? null : sel_r17.style.fontSize) || 14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 23, "smartReport.fontWeight"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-indigo-50", (sel_r17.style == null ? null : sel_r17.style.fontWeight) !== "bold")("border-indigo-300", (sel_r17.style == null ? null : sel_r17.style.fontWeight) !== "bold");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 25, "smartReport.normal"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-indigo-50", (sel_r17.style == null ? null : sel_r17.style.fontWeight) === "bold")("border-indigo-300", (sel_r17.style == null ? null : sel_r17.style.fontWeight) === "bold");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 27, "smartReport.bold"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 29, "smartReport.textColor"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (sel_r17.style == null ? null : sel_r17.style.color) || "#111827");
  }
}
function ReportBuilderComponent_Conditional_159_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 129)(2, "h3", 63);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 130);
    \u0275\u0275listener("click", function ReportBuilderComponent_Conditional_159_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedSection.set(null));
    });
    \u0275\u0275elementStart(6, "mat-icon", 115);
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 131);
    \u0275\u0275template(9, ReportBuilderComponent_Conditional_159_Conditional_9_Template, 6, 7, "div")(10, ReportBuilderComponent_Conditional_159_Conditional_10_Template, 6, 7, "div")(11, ReportBuilderComponent_Conditional_159_Conditional_11_Template, 15, 17)(12, ReportBuilderComponent_Conditional_159_Conditional_12_Template, 14, 14)(13, ReportBuilderComponent_Conditional_159_Conditional_13_Template, 11, 11)(14, ReportBuilderComponent_Conditional_159_Conditional_14_Template, 5, 4, "div")(15, ReportBuilderComponent_Conditional_159_Conditional_15_Template, 5, 4, "div")(16, ReportBuilderComponent_Conditional_159_Conditional_16_Template, 32, 32, "div", 132);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sel_r17 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(4, 10, "smartReport.edit"), " ", ctx_r1.getSectionLabel(sel_r17.type), " ");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(sel_r17.type === "header" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r17.type === "text" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r17.type === "field" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r17.type === "table" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r17.type === "image" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r17.type === "spacer" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r17.type === "divider" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sel_r17.type === "header" || sel_r17.type === "text" || sel_r17.type === "field" ? 16 : -1);
  }
}
var ReportBuilderComponent = class _ReportBuilderComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._fb = inject(FormBuilder);
    this._snack = inject(MatSnackBar);
    this._reportService = inject(SmartReportService);
    this._dialog = inject(MatDialog);
    this._previewDataService = inject(ReportBuilderPreviewDataService);
    this._transloco = inject(TranslocoService);
    this.configId = signal(null);
    this.templateId = signal(null);
    this.template = signal(null);
    this.isLoading = signal(false);
    this.isSaving = signal(false);
    this.isSendingSample = signal(false);
    this.logoUrl = signal(null);
    this.activeTab = signal("design");
    this.showPassword = false;
    this.sections = signal([]);
    this.selectedSection = signal(null);
    this.currentSelectedSection = computed(() => {
      const sel = this.selectedSection();
      if (!sel)
        return null;
      return this.sections().find((s) => s.id === sel.id) ?? null;
    });
    this.sectionTypes = [
      { type: "header", labelKey: "smartReport.sectionHeader", icon: "title" },
      { type: "text", labelKey: "smartReport.sectionText", icon: "notes" },
      { type: "field", labelKey: "smartReport.sectionField", icon: "data_object" },
      { type: "table", labelKey: "smartReport.sectionTable", icon: "table_chart" },
      { type: "image", labelKey: "smartReport.sectionImage", icon: "image" },
      { type: "divider", labelKey: "smartReport.sectionDivider", icon: "horizontal_rule" },
      { type: "spacer", labelKey: "smartReport.sectionSpacer", icon: "space_bar" }
    ];
    this.previewData = signal({
      batchName: "Background Check - Batch #47",
      rowIndex: 0,
      inputData: {
        documentNumber: "1032386359",
        documentType: "CC",
        fullName: "JOHN DOE SMITH"
      },
      results: {
        1: {
          fullName: "JOHN DOE SMITH",
          firstName: "JOHN",
          lastName: "DOE SMITH",
          documentNumber: "1032386359",
          documentType: "CC",
          birthDate: "1990-05-15",
          gender: "Male",
          nationality: "Colombian",
          email: "john.doe@example.com",
          phone: "+57 300 123 4567",
          address: "Calle 100 #15-20, Bogota"
        },
        2: {
          isValid: true,
          score: 0.95,
          status: "VERIFIED",
          verifiedAt: "2026-02-10T14:30:00Z"
        }
      }
    });
    this._hasPreviewDataFromNavigation = false;
    this.onPreviewSectionClick = (section) => {
      this.selectSection(section);
    };
    this.helperDataPaths = computed(() => buildHelperDataPaths(this.previewData()));
    this.templateForm = this._fb.group({
      name: ["", [Validators.required, Validators.maxLength(150)]],
      description: ["", Validators.maxLength(500)],
      primaryColor: ["#4F46E5"],
      pageSize: ["A4"],
      orientation: ["portrait"],
      pdfEngine: ["puppeteer"],
      legend: [""],
      showPageNumbers: [false],
      pageNumberPosition: ["bottom-center"],
      watermarkEnabled: [false],
      watermarkType: ["text"],
      watermarkText: ["CONFIDENTIAL"],
      watermarkOpacity: [0.08],
      watermarkPattern: ["single"],
      securityEnabled: [false],
      securityPassword: [""],
      // Signature
      signatureEnabled: [false],
      signatureImage: [null],
      signatureX: [0],
      signatureY: [0],
      signatureWidth: [100],
      signatureHeight: [50]
    });
  }
  ngOnInit() {
    this._applyPreviewDataFromRouterState();
    this._route.params.subscribe((params) => {
      this.configId.set(params["configId"]);
      this.templateId.set(params["templateId"]);
      if (this.templateId()) {
        this._loadTemplate();
      } else {
        this._initDefaultSections();
      }
    });
  }
  /**
   * When navigating from report viewer with batch data, use it as preview.
   * Uses service first (reliable), then router state as fallback.
   */
  _applyPreviewDataFromRouterState() {
    let data = this._previewDataService.consumePendingPreviewData();
    if (!data) {
      const state = this._router.getCurrentNavigation()?.extras?.state;
      data = state?.previewData ?? void 0;
    }
    if (data && (data.inputData || data.results)) {
      const preview = {
        batchName: data.batchName ?? "Batch",
        rowIndex: data.rowIndex ?? 0,
        inputData: data.inputData ?? {},
        results: data.results ?? {}
      };
      this.previewData.set(preview);
      this._hasPreviewDataFromNavigation = true;
    }
  }
  // ============================================
  // DATA LOADING
  // ============================================
  _loadTemplate() {
    const id = this.templateId();
    if (!id)
      return;
    this.isLoading.set(true);
    this._reportService.getTemplate(id).subscribe({
      next: (template) => {
        this.template.set(template);
        this.sections.set(template.sections || []);
        if (!this._hasPreviewDataFromNavigation && template.sampleData && (template.sampleData.inputData || template.sampleData.results)) {
          this.previewData.set({
            batchName: template.sampleData.batchName ?? "Batch",
            rowIndex: template.sampleData.rowIndex ?? 0,
            inputData: template.sampleData.inputData ?? {},
            results: template.sampleData.results ?? {}
          });
        }
        this.templateForm.patchValue({
          name: template.name,
          description: template.description,
          primaryColor: template.primaryColor || "#4F46E5",
          pageSize: template.pageSize || "A4",
          orientation: template.orientation || "portrait",
          pdfEngine: template.pdfEngine || "puppeteer",
          legend: template.legend || "",
          showPageNumbers: template.showPageNumbers || false,
          pageNumberPosition: template.pageNumberPosition || "bottom-center",
          watermarkEnabled: template.watermark?.enabled || false,
          watermarkType: template.watermark?.type || "text",
          watermarkText: template.watermark?.text || "CONFIDENTIAL",
          watermarkOpacity: template.watermark?.opacity ?? 0.08,
          watermarkPattern: template.watermark?.pattern || "single",
          securityEnabled: template.security?.enabled || false,
          // If enabled, assume password exists and mask it. If not, empty.
          securityPassword: template.security?.enabled ? "******" : "",
          // Signature
          signatureEnabled: template.signature?.enabled || false,
          signatureImage: template.signature?.image || null,
          signatureX: template.signature?.x || 0,
          signatureY: template.signature?.y || 0,
          signatureWidth: template.signature?.width || 100,
          signatureHeight: template.signature?.height || 50
        });
        this.logoUrl.set(template.logo || null);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("Failed to load template:", err);
        this.isLoading.set(false);
        this._snack.open("Failed to load template", "Close", { duration: 3e3 });
      }
    });
  }
  _initDefaultSections() {
    this.sections.set([
      {
        id: this._generateId(),
        type: "header",
        order: 0,
        label: "Verification Report",
        staticContent: "Verification Report",
        style: { fontSize: 22, fontWeight: "bold", textAlign: "center" }
      },
      {
        id: this._generateId(),
        type: "divider",
        order: 1,
        style: { color: "#4F46E5" }
      },
      {
        id: this._generateId(),
        type: "field",
        order: 2,
        label: "Document Number",
        dataPath: "results.1.documentNumber"
      },
      {
        id: this._generateId(),
        type: "field",
        order: 3,
        label: "Full Name",
        dataPath: "results.1.fullName"
      }
    ]);
  }
  // ============================================
  // DRAG & DROP
  // ============================================
  onDrop(event) {
    const current = [...this.sections()];
    moveItemInArray(current, event.previousIndex, event.currentIndex);
    current.forEach((s, i) => s.order = i);
    this.sections.set(current);
  }
  // ============================================
  // SECTION MANAGEMENT
  // ============================================
  addSection(type) {
    const defaults = {
      header: {
        staticContent: "Section Title",
        style: { fontSize: 18, fontWeight: "bold", textAlign: "left" }
      },
      text: { staticContent: "Enter your text here...", style: { fontSize: 12 } },
      field: { label: "New Field", dataPath: "" },
      table: { label: "Data Table", dataPath: "results.1" },
      image: { staticContent: "", style: { textAlign: "center" } },
      divider: {
        style: { color: this.templateForm.get("primaryColor")?.value || "#4F46E5" }
      },
      spacer: { style: { padding: "16" } }
    };
    const newSection = __spreadValues({
      id: this._generateId(),
      type,
      order: this.sections().length
    }, defaults[type]);
    this.sections.update((list) => [...list, newSection]);
    this.selectSection(newSection);
  }
  selectSection(section) {
    this.selectedSection.set(__spreadValues({}, section));
  }
  updateSection(id, updates) {
    this.sections.update((list) => list.map((s) => s.id === id ? __spreadValues(__spreadValues({}, s), updates) : s));
    const sel = this.selectedSection();
    if (sel?.id === id) {
      this.selectedSection.set(__spreadValues(__spreadValues({}, sel), updates));
    }
  }
  deleteSection(id) {
    this.sections.update((list) => {
      const filtered = list.filter((s) => s.id !== id);
      filtered.forEach((s, i) => s.order = i);
      return filtered;
    });
    if (this.selectedSection()?.id === id) {
      this.selectedSection.set(null);
    }
  }
  duplicateSection(section) {
    const newSection = __spreadProps(__spreadValues({}, section), {
      id: this._generateId(),
      order: this.sections().length,
      label: section.label ? section.label + " (copy)" : void 0
    });
    this.sections.update((list) => [...list, newSection]);
  }
  // ============================================
  // STYLE HELPERS
  // ============================================
  updateSectionStyle(key, value) {
    const section = this.currentSelectedSection();
    if (!section)
      return;
    this.updateSection(section.id, {
      style: __spreadProps(__spreadValues({}, section.style), { [key]: value })
    });
  }
  updateTextAlign(align) {
    this.updateSectionStyle("textAlign", align);
  }
  updateFontSize(fontSize) {
    this.updateSectionStyle("fontSize", fontSize);
  }
  updateFontWeight(weight) {
    this.updateSectionStyle("fontWeight", weight);
  }
  updateStyleColor(color) {
    this.updateSectionStyle("color", color);
  }
  updateBgColor(color) {
    this.updateSectionStyle("backgroundColor", color);
  }
  // ============================================
  // SAVE
  // ============================================
  save(onSuccess) {
    if (this.templateForm.invalid) {
      this._snack.open("Please fill in all required fields", "Close", { duration: 3e3 });
      return;
    }
    this.isSaving.set(true);
    const formVal = this.templateForm.value;
    const templateData = __spreadProps(__spreadValues({}, formVal), {
      sections: this.sections(),
      batchConfiguration: this.configId() || void 0,
      sampleData: this.previewData(),
      logo: this.logoUrl() || void 0,
      watermark: {
        enabled: formVal.watermarkEnabled ?? false,
        type: formVal.watermarkType || "text",
        text: formVal.watermarkText || "CONFIDENTIAL",
        opacity: formVal.watermarkOpacity ?? 0.08,
        pattern: formVal.watermarkPattern || "single"
      },
      security: {
        enabled: formVal.securityEnabled ?? false,
        password: formVal.securityPassword || ""
      },
      signature: {
        enabled: formVal.signatureEnabled ?? false,
        image: formVal.signatureImage || "",
        x: formVal.signatureX || 0,
        y: formVal.signatureY || 0,
        width: formVal.signatureWidth || 100,
        height: formVal.signatureHeight || 50
      }
    });
    delete templateData.watermarkEnabled;
    delete templateData.watermarkType;
    delete templateData.watermarkText;
    delete templateData.watermarkOpacity;
    delete templateData.watermarkPattern;
    delete templateData.securityEnabled;
    delete templateData.securityPassword;
    delete templateData.signatureEnabled;
    delete templateData.signatureImage;
    delete templateData.signatureX;
    delete templateData.signatureY;
    delete templateData.signatureWidth;
    delete templateData.signatureHeight;
    const id = this.templateId();
    if (id) {
      this._reportService.updateTemplate(id, templateData).subscribe({
        next: () => {
          this._snack.open("Template saved!", "Close", { duration: 3e3 });
          this.isSaving.set(false);
          if (onSuccess)
            onSuccess();
        },
        error: (err) => {
          console.error("Save failed:", err);
          this._snack.open("Failed to save template", "Close", { duration: 3e3 });
          this.isSaving.set(false);
        }
      });
    } else {
      this._reportService.createTemplate(templateData).subscribe({
        next: (created) => {
          this._snack.open("Template created!", "Close", { duration: 3e3 });
          this.isSaving.set(false);
          if (onSuccess)
            onSuccess();
          this._router.navigate([
            "/smart-batch",
            this.configId(),
            "report-builder",
            created._id
          ]);
        },
        error: (err) => {
          console.error("Create failed:", err);
          this._snack.open("Failed to create template", "Close", { duration: 3e3 });
          this.isSaving.set(false);
        }
      });
    }
  }
  sendSample() {
    const id = this.templateId();
    if (!id) {
      this._snack.open(this._transloco.translate("smartReport.saveTemplateFirst"), "Close", {
        duration: 3500
      });
      return;
    }
    const defaultSubject = `Sample Report: ${this.templateForm.get("name")?.value || "Template Preview"}`;
    const dialogRef = this._dialog.open(SendSampleModalComponent, {
      panelClass: "send-sample-dialog",
      maxWidth: "560px",
      width: "95vw",
      disableClose: false,
      autoFocus: true,
      data: { defaultSubject, isSample: true }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result?.recipients?.length)
        return;
      const performSend = () => {
        this.isSendingSample.set(true);
        const id2 = this.templateId();
        if (!id2)
          return;
        this._reportService.sendTemplateSample(id2, {
          recipients: result.recipients,
          subject: result.subject,
          language: "en",
          sampleData: this.previewData()
        }).subscribe({
          next: (res) => {
            if (res.success) {
              this._snack.open(this._transloco.translate("smartReport.samplePdfSentSuccess"), "Close", {
                duration: 3500
              });
            } else {
              this._snack.open(res.error || this._transloco.translate("smartReport.failedToSendSamplePdf"), "Close", {
                duration: 4e3
              });
            }
            this.isSendingSample.set(false);
          },
          error: (err) => {
            console.error("Send sample failed:", err);
            this._snack.open(this._transloco.translate("smartReport.failedToSendSamplePdf"), "Close", {
              duration: 4e3
            });
            this.isSendingSample.set(false);
          }
        });
      };
      if (this.templateForm.dirty) {
        this.save(() => performSend());
      } else {
        performSend();
      }
    });
  }
  // ============================================
  // NAVIGATION
  // ============================================
  goBack() {
    const configId = this.configId();
    if (configId) {
      this._router.navigate(["/smart-batch", configId]);
    } else {
      this._router.navigate(["/smart-batch"]);
    }
  }
  getSectionIcon(type) {
    return this.sectionTypes.find((t) => t.type === type)?.icon || "help";
  }
  getSectionLabel(type) {
    const labelKey = this.sectionTypes.find((t) => t.type === type)?.labelKey;
    return labelKey ? this._transloco.translate(labelKey) : type;
  }
  copyPathToClipboard(path) {
    navigator.clipboard.writeText(path).then(() => this._snack.open(`${this._transloco.translate("smartReport.copied")}: ${path}`, "Close", { duration: 2e3 }), () => this._snack.open(this._transloco.translate("smartReport.failedToCopy"), "Close", {
      duration: 2e3
    }));
  }
  // ============================================
  // LOGO HELPERS
  // ============================================
  onLogoUpload(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (file.size > 512e3) {
      this._snack.open("Logo file must be less than 500KB", "Close", { duration: 3500 });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.logoUrl.set(reader.result);
    };
    reader.readAsDataURL(file);
  }
  removeLogo() {
    this.logoUrl.set(null);
  }
  // ============================================
  // SIGNATURE METHODS
  // ============================================
  onSignaturePositionChange(pos) {
    this.templateForm.patchValue({
      signatureX: Math.round(pos.x),
      signatureY: Math.round(pos.y)
    });
    this.templateForm.markAsDirty();
  }
  onSignatureSizeChange(size) {
    this.templateForm.patchValue({
      signatureWidth: Math.round(size.width),
      signatureHeight: Math.round(size.height)
    });
    this.templateForm.markAsDirty();
  }
  openSignatureDialog() {
    this._dialog.open(SignaturePadDialogComponent, {
      width: "640px",
      disableClose: true,
      autoFocus: false
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.templateForm.patchValue({
          signatureImage: result,
          signatureEnabled: true
        });
        this.templateForm.markAsDirty();
      }
    });
  }
  // ============================================
  // PRIVATE HELPERS
  // ============================================
  _generateId() {
    return "section_" + Math.random().toString(36).substring(2, 11);
  }
  static {
    this.\u0275fac = function ReportBuilderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportBuilderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportBuilderComponent, selectors: [["report-builder"]], decls: 170, vars: 123, consts: [[1, "min-h-screen", "w-full", "bg-gray-50"], [1, "bg-white", "border-b", "border-gray-200", "sticky", "top-0", "z-20"], [1, "max-w-[1600px]", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-3"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "text-lg", "font-bold", "text-gray-900"], [1, "text-xs", "text-gray-500"], ["mat-stroked-button", "", 1, "!rounded-xl", 3, "click", "disabled", "matTooltip"], [1, "inline-flex", "items-center", "gap-2"], ["mat-flat-button", "", 1, "!rounded-xl", "!bg-indigo-600", "!text-white", 3, "click", "disabled"], [1, "max-w-[1600px]", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6"], [1, "flex", "gap-6", "items-start"], [1, "w-full", "lg:w-[440px]", "shrink-0", "space-y-4"], [1, "bg-white", "rounded-2xl", "border", "border-gray-200", "p-5"], [1, "text-sm", "font-semibold", "text-gray-900", "mb-4"], [1, "space-y-4", 3, "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "name", 3, "placeholder"], [1, "grid", "grid-cols-3", "gap-3"], ["appearance", "outline"], ["formControlName", "pageSize"], ["value", "A4"], ["value", "Letter"], ["value", "Legal"], ["formControlName", "orientation"], ["value", "portrait"], ["value", "landscape"], ["formControlName", "pdfEngine"], ["value", "puppeteer"], ["value", "pdfkit"], [1, "flex", "items-center", "gap-4"], [1, "text-sm", "text-gray-600"], ["type", "color", "formControlName", "primaryColor", 1, "w-9", "h-9", "rounded-lg", "border", "border-gray-200", "cursor-pointer"], [1, "pt-3", "border-t", "border-gray-100"], [1, "text-xs", "font-medium", "text-gray-500", "mb-2", "block"], [1, "text-xs", "font-medium", "text-gray-500", "mb-1", "block"], ["formControlName", "legend", "rows", "2", 1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-xs", "text-gray-600", "resize-none", 3, "placeholder"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-xs", "font-medium", "text-gray-500"], [1, "relative", "inline-flex", "items-center", "cursor-pointer"], ["type", "checkbox", "formControlName", "showPageNumbers", 1, "sr-only", "peer"], [1, "w-9", "h-5", "bg-gray-200", "peer-focus:outline-none", "rounded-full", "peer", "peer-checked:after:translate-x-full", "peer-checked:after:border-white", "after:content-['']", "after:absolute", "after:top-[2px]", "after:left-[2px]", "after:bg-white", "after:border-gray-300", "after:border", "after:rounded-full", "after:h-4", "after:w-4", "after:transition-all", "peer-checked:bg-indigo-600"], ["appearance", "outline", 1, "w-full", "!text-xs"], ["type", "checkbox", "formControlName", "watermarkEnabled", 1, "sr-only", "peer"], [1, "space-y-3"], [1, "p-4", "bg-gray-50", "rounded-xl", "border", "border-gray-100", "space-y-4"], [1, "flex", "items-center", "gap-2"], [1, "text-gray-400", "!w-5", "!h-5", "!text-[20px]"], [1, "text-sm", "font-medium", "text-gray-700"], ["formControlName", "securityEnabled", "color", "primary"], [1, "space-y-4", "pt-2", "border-t", "border-gray-200"], ["formControlName", "signatureEnabled", "color", "primary"], [1, "bg-white", "rounded-2xl", "border", "border-gray-200", "p-4"], [1, "text-sm", "font-semibold", "text-gray-900", "mb-2"], [1, "text-xs", "text-gray-500", "mb-3"], [1, "text-xs", "text-gray-400", "italic"], [1, "max-h-[240px]", "overflow-y-auto", "space-y-1", "pr-1"], [1, "text-sm", "font-semibold", "text-gray-900", "mb-3"], [1, "flex", "flex-wrap", "gap-2"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-2", "rounded-lg", "border", "border-gray-200", "hover:border-indigo-300", "hover:bg-indigo-50", "transition-colors", "text-sm", "text-gray-700"], [1, "bg-white", "rounded-2xl", "border", "border-gray-200"], [1, "px-5", "py-3", "border-b", "border-gray-100", "flex", "items-center", "justify-between"], [1, "text-sm", "font-semibold", "text-gray-900"], [1, "text-xs", "text-gray-400"], [1, "text-xs", "font-medium", "text-gray-400"], ["cdkDropList", "", 1, "p-3", "min-h-[200px]", 3, "cdkDropListDropped"], [1, "flex", "flex-col", "items-center", "justify-center", "h-40", "text-gray-300"], ["cdkDrag", "", 1, "flex", "items-center", "gap-2", "bg-white", "border", "rounded-lg", "px-3", "py-2.5", "mb-2", "cursor-pointer", "hover:border-indigo-300", "transition-colors", "group", 3, "ring-2", "ring-indigo-500", "bg-indigo-50"], [1, "flex-1", "min-w-0"], [1, "sticky", "top-20"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "text-sm", "font-semibold", "text-gray-500"], [3, "signaturePositionChange", "signatureSizeChange", "template", "previewData", "primaryColor", "orientation", "clickable", "selectedSectionId", "sectionClick", "logoUrl", "legend", "showPageNumbers", "pageNumberPosition", "watermarkEnabled", "watermarkType", "watermarkText", "watermarkOpacity", "watermarkPattern", "signatureEnabled", "signatureImage", "signatureX", "signatureY", "signatureWidth", "signatureHeight"], [1, "animate-spin", "!text-lg"], [1, "!text-lg"], ["alt", "Logo", 1, "h-10", "max-w-[160px]", "object-contain", "rounded", "border", "border-gray-200", "bg-gray-50", "p-1", 3, "src"], ["type", "button", 1, "text-xs", "text-red-500", "hover:text-red-700", "transition-colors", 3, "click"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-2", "rounded-lg", "border", "border-dashed", "border-gray-300", "hover:border-indigo-300", "hover:bg-indigo-50", "transition-colors", "cursor-pointer", "text-sm", "text-gray-500"], [1, "!text-base"], ["type", "file", "accept", "image/png,image/jpeg,image/svg+xml,image/webp", 1, "hidden", 3, "change"], [1, "text-xs", "text-gray-400", "mt-1"], ["formControlName", "pageNumberPosition"], ["value", "top-left"], ["value", "top-center"], ["value", "top-right"], ["value", "bottom-left"], ["value", "bottom-center"], ["value", "bottom-right"], [1, "flex", "gap-1"], ["type", "button", 1, "flex-1", "py-2", "rounded-lg", "border", "text-xs", "transition-colors", 3, "click"], [1, "text-xs", "text-amber-500"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "text-xs", "text-gray-500", "font-mono"], ["type", "range", "formControlName", "watermarkOpacity", "min", "0.01", "max", "0.5", "step", "0.01", 1, "w-full", "h-1.5", "bg-gray-200", "rounded-lg", "appearance-none", "cursor-pointer", "accent-indigo-600"], [1, "text-xs", "text-gray-400", "mb-1", "block"], ["type", "text", "formControlName", "watermarkText", "maxlength", "100", 1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-xs", 3, "placeholder"], [1, "relative"], ["formControlName", "securityPassword", 1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-sm", "pr-10", 3, "type", "placeholder"], ["type", "button", 1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-gray-400", "hover:text-gray-600", 3, "click"], [1, "!w-4", "!h-4", "!text-[16px]"], [1, "text-[10px]", "text-gray-400", "mt-1"], ["type", "button", "mat-stroked-button", "", "color", "primary", 1, "w-full"], [1, "relative", "group", "border", "border-gray-200", "rounded-lg", "p-2", "bg-white", "flex", "justify-center"], [1, "h-16", "object-contain", 3, "src"], ["type", "button", 1, "absolute", "top-1", "right-1", "p-1", "bg-red-50", "text-red-500", "rounded-full", "hover:bg-red-100", "opacity-0", "group-hover:opacity-100", "transition-opacity", 3, "click"], ["type", "button", "mat-stroked-button", "", "color", "primary", 1, "w-full", 3, "click"], [1, "mr-2"], [1, "group", "flex", "items-center", "gap-2", "py-1.5", "px-2", "rounded", "hover:bg-gray-50", "text-xs"], [1, "group", "flex", "items-center", "gap-2", "pt-1.5", "pb-0.5"], [1, "flex-1", "min-w-0", "truncate", "text-gray-700", "font-mono"], [1, "text-gray-400", "truncate", "max-w-[120px]", 3, "title"], ["mat-icon-button", "", 1, "!w-6", "!h-6", "!rounded", "opacity-0", "group-hover:opacity-100", "transition-opacity", 3, "click", "matTooltip"], [1, "!text-sm", "!w-4", "!h-4"], [1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-2", "rounded-lg", "border", "border-gray-200", "hover:border-indigo-300", "hover:bg-indigo-50", "transition-colors", "text-sm", "text-gray-700", 3, "click"], [1, "!text-base", "text-gray-400"], [1, "!text-4xl", "!w-10", "!h-10", "mb-2"], [1, "text-sm"], ["cdkDrag", "", 1, "flex", "items-center", "gap-2", "bg-white", "border", "rounded-lg", "px-3", "py-2.5", "mb-2", "cursor-pointer", "hover:border-indigo-300", "transition-colors", "group", 3, "click"], ["cdkDragHandle", "", 1, "shrink-0", "w-6", "h-6", "rounded", "flex", "items-center", "justify-center", "cursor-grab", "text-gray-300", "hover:text-gray-500"], [1, "!text-sm"], [1, "shrink-0", "w-7", "h-7", "rounded-md", "flex", "items-center", "justify-center"], [1, "min-w-0", "flex-1"], [1, "text-sm", "font-medium", "text-gray-800", "truncate"], [1, "text-xs", "text-gray-400", "truncate"], [1, "shrink-0", "flex", "items-center", "gap-0.5", "opacity-0", "group-hover:opacity-100", "transition-opacity"], ["mat-icon-button", "", 1, "!w-7", "!h-7", 3, "click", "matTooltip"], [1, "!text-sm", "text-gray-400"], [1, "!text-sm", "text-red-400"], [1, "flex", "items-center", "justify-between", "mb-4"], ["mat-icon-button", "", 1, "!w-7", "!h-7", 3, "click"], [1, "space-y-4"], [1, "pt-3", "border-t", "border-gray-100", "space-y-3"], ["type", "text", 1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-sm", 3, "input", "value", "placeholder"], ["rows", "4", 1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-sm", 3, "input", "value", "placeholder"], ["type", "text", 1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-sm", "font-mono", 3, "input", "value", "placeholder"], ["type", "text", "placeholder", "results.1", 1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-sm", "font-mono", 3, "input", "value"], ["type", "text", "placeholder", "https://example.com/logo.png", 1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-sm", "font-mono", 3, "input", "value"], ["type", "number", "min", "4", "max", "200", 1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-sm", 3, "input", "value"], ["type", "color", 1, "w-9", "h-9", "rounded-lg", "border", "border-gray-200", "cursor-pointer", 3, "input", "value"], [1, "flex-1", "py-2", "rounded-lg", "border", "text-sm", "transition-colors", 3, "bg-indigo-50", "border-indigo-300"], ["type", "number", "min", "8", "max", "72", 1, "w-full", "px-3", "py-2", "border", "border-gray-200", "rounded-lg", "text-sm", 3, "input", "value"], [1, "flex-1", "py-2", "rounded-lg", "border", "text-sm", "transition-colors", 3, "click"], [1, "flex-1", "py-2", "rounded-lg", "border", "text-sm", "font-bold", "transition-colors", 3, "click"], ["type", "color", 1, "w-8", "h-8", "rounded", "border", "border-gray-200", "cursor-pointer", 3, "input", "value"]], template: function ReportBuilderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275listener("click", function ReportBuilderComponent_Template_button_click_5_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div")(10, "h1", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 7);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 4)(17, "button", 8);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275listener("click", function ReportBuilderComponent_Template_button_click_17_listener() {
          return ctx.sendSample();
        });
        \u0275\u0275elementStart(19, "span", 9);
        \u0275\u0275template(20, ReportBuilderComponent_Conditional_20_Template, 4, 3)(21, ReportBuilderComponent_Conditional_21_Template, 4, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "button", 10);
        \u0275\u0275listener("click", function ReportBuilderComponent_Template_button_click_22_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(23, "span", 9);
        \u0275\u0275template(24, ReportBuilderComponent_Conditional_24_Template, 4, 3)(25, ReportBuilderComponent_Conditional_25_Template, 4, 3);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(26, "div", 11)(27, "div", 12)(28, "div", 13)(29, "div", 14)(30, "h3", 15);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "form", 16)(34, "mat-form-field", 17)(35, "mat-label");
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "input", 18);
        \u0275\u0275pipe(39, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 19)(41, "mat-form-field", 20)(42, "mat-label");
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-select", 21)(46, "mat-option", 22);
        \u0275\u0275text(47, "A4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "mat-option", 23);
        \u0275\u0275text(49, "Letter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "mat-option", 24);
        \u0275\u0275text(51, "Legal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "mat-form-field", 20)(53, "mat-label");
        \u0275\u0275text(54);
        \u0275\u0275pipe(55, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "mat-select", 25)(57, "mat-option", 26);
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "mat-option", 27);
        \u0275\u0275text(61);
        \u0275\u0275pipe(62, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "mat-form-field", 20)(64, "mat-label");
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "mat-select", 28)(68, "mat-option", 29);
        \u0275\u0275text(69, "Puppeteer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "mat-option", 30);
        \u0275\u0275text(71, "PDFKit");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(72, "div", 31)(73, "label", 32);
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(76, "input", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 34)(78, "label", 35);
        \u0275\u0275text(79);
        \u0275\u0275pipe(80, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(81, ReportBuilderComponent_Conditional_81_Template, 5, 4, "div", 4)(82, ReportBuilderComponent_Conditional_82_Template, 8, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 34)(84, "label", 36);
        \u0275\u0275text(85);
        \u0275\u0275pipe(86, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(87, "textarea", 37);
        \u0275\u0275pipe(88, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 34)(90, "div", 38)(91, "label", 39);
        \u0275\u0275text(92);
        \u0275\u0275pipe(93, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "label", 40);
        \u0275\u0275element(95, "input", 41)(96, "div", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(97, ReportBuilderComponent_Conditional_97_Template, 17, 3, "mat-form-field", 43);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 34)(99, "div", 38)(100, "label", 39);
        \u0275\u0275text(101);
        \u0275\u0275pipe(102, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "label", 40);
        \u0275\u0275element(104, "input", 44)(105, "div", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(106, ReportBuilderComponent_Conditional_106_Template, 30, 40, "div", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 46)(108, "div", 3)(109, "div", 47)(110, "mat-icon", 48);
        \u0275\u0275text(111, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "span", 49);
        \u0275\u0275text(113);
        \u0275\u0275pipe(114, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(115, "mat-slide-toggle", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275template(116, ReportBuilderComponent_Conditional_116_Template, 14, 11, "div", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 46)(118, "div", 3)(119, "div", 47)(120, "mat-icon", 48);
        \u0275\u0275text(121, "draw");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "span", 49);
        \u0275\u0275text(123);
        \u0275\u0275pipe(124, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(125, "mat-slide-toggle", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275template(126, ReportBuilderComponent_Conditional_126_Template, 3, 1, "div", 51);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(127, "div", 53)(128, "h3", 54);
        \u0275\u0275text(129);
        \u0275\u0275pipe(130, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "p", 55);
        \u0275\u0275text(132);
        \u0275\u0275pipe(133, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(134, ReportBuilderComponent_Conditional_134_Template, 3, 3, "p", 56)(135, ReportBuilderComponent_Conditional_135_Template, 3, 0, "div", 57);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 53)(137, "h3", 58);
        \u0275\u0275text(138);
        \u0275\u0275pipe(139, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "div", 59);
        \u0275\u0275repeaterCreate(141, ReportBuilderComponent_For_142_Template, 5, 4, "button", 60, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "div", 61)(144, "div", 62)(145, "div")(146, "h3", 63);
        \u0275\u0275text(147);
        \u0275\u0275pipe(148, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "p", 64);
        \u0275\u0275text(150);
        \u0275\u0275pipe(151, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(152, "span", 65);
        \u0275\u0275text(153);
        \u0275\u0275pipe(154, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(155, "div", 66);
        \u0275\u0275listener("cdkDropListDropped", function ReportBuilderComponent_Template_div_cdkDropListDropped_155_listener($event) {
          return ctx.onDrop($event);
        });
        \u0275\u0275template(156, ReportBuilderComponent_Conditional_156_Template, 6, 3, "div", 67);
        \u0275\u0275repeaterCreate(157, ReportBuilderComponent_For_158_Template, 24, 19, "div", 68, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(159, ReportBuilderComponent_Conditional_159_Template, 17, 12, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "div", 69)(161, "div", 70)(162, "div", 71)(163, "h3", 72);
        \u0275\u0275text(164);
        \u0275\u0275pipe(165, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "span", 64);
        \u0275\u0275text(167);
        \u0275\u0275pipe(168, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "report-preview", 73);
        \u0275\u0275listener("signaturePositionChange", function ReportBuilderComponent_Template_report_preview_signaturePositionChange_169_listener($event) {
          return ctx.onSignaturePositionChange($event);
        })("signatureSizeChange", function ReportBuilderComponent_Template_report_preview_signatureSizeChange_169_listener($event) {
          return ctx.onSignatureSizeChange($event);
        });
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_23_0;
        let tmp_25_0;
        let tmp_27_0;
        let tmp_29_0;
        let tmp_40_0;
        let tmp_43_0;
        let tmp_45_0;
        let tmp_46_0;
        let tmp_48_0;
        let tmp_51_0;
        let tmp_52_0;
        let tmp_53_0;
        let tmp_54_0;
        let tmp_55_0;
        let tmp_56_0;
        let tmp_57_0;
        let tmp_58_0;
        let tmp_59_0;
        let tmp_60_0;
        let tmp_61_0;
        let tmp_62_0;
        let tmp_63_0;
        let tmp_64_0;
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 64, "smartReport.back"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 66, ctx.templateId() ? "smartReport.editReportTemplate" : "smartReport.newReportTemplate"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 68, "smartReport.designReportLayout"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.templateId() || ctx.isSendingSample())("matTooltip", !ctx.templateId() ? \u0275\u0275pipeBind1(18, 70, "smartReport.saveTemplateFirst") : "");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isSendingSample() ? 20 : 21);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.isSaving());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isSaving() ? 24 : 25);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 72, "smartReport.templateSettings"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.templateForm);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 74, "smartReport.templateName"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(39, 76, "smartReport.templateNamePlaceholder"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 78, "smartReport.pageSize"));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 80, "smartReport.orientation"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 82, "smartReport.portrait"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 84, "smartReport.landscape"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 86, "smartReport.pdfEngine"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(75, 88, "smartReport.primaryColor"), ":");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 90, "smartReport.workspaceLogo"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.logoUrl() ? 81 : 82);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 92, "smartReport.footerLegend"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(88, 94, "smartReport.footerLegendPlaceholder"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 96, "smartReport.pageNumbers"));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(((tmp_23_0 = ctx.templateForm.get("showPageNumbers")) == null ? null : tmp_23_0.value) ? 97 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 98, "smartReport.watermark"));
        \u0275\u0275advance(5);
        \u0275\u0275conditional(((tmp_25_0 = ctx.templateForm.get("watermarkEnabled")) == null ? null : tmp_25_0.value) ? 106 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 100, "smartReport.securityTitle"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_27_0 = ctx.templateForm.get("securityEnabled")) == null ? null : tmp_27_0.value) ? 116 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(124, 102, "smartReport.signature"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_29_0 = ctx.templateForm.get("signatureEnabled")) == null ? null : tmp_29_0.value) ? 126 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(130, 104, "smartReport.helperData"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(133, 106, "smartReport.helperDataHint"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.helperDataPaths().length === 0 ? 134 : 135);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(139, 108, "smartReport.addSections"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.sectionTypes);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(148, 110, "smartReport.reportLayout"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(151, 112, "smartReport.dragToReorder"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.sections().length, " ", \u0275\u0275pipeBind1(154, 114, "smartReport.sections"), "");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.sections().length === 0 ? 156 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.sections());
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_40_0 = ctx.currentSelectedSection()) ? 159 : -1, tmp_40_0);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(165, 116, "smartReport.preview"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(168, 118, "smartReport.livePreviewWithSample"));
        \u0275\u0275advance(2);
        \u0275\u0275property("template", \u0275\u0275pureFunction2(120, _c02, ctx.sections(), (tmp_43_0 = ctx.templateForm.get("primaryColor")) == null ? null : tmp_43_0.value))("previewData", ctx.previewData())("primaryColor", ((tmp_45_0 = ctx.templateForm.get("primaryColor")) == null ? null : tmp_45_0.value) || "#4F46E5")("orientation", ((tmp_46_0 = ctx.templateForm.get("orientation")) == null ? null : tmp_46_0.value) || "portrait")("clickable", true)("selectedSectionId", (tmp_48_0 = (tmp_48_0 = ctx.currentSelectedSection()) == null ? null : tmp_48_0.id) !== null && tmp_48_0 !== void 0 ? tmp_48_0 : null)("sectionClick", ctx.onPreviewSectionClick)("logoUrl", ctx.logoUrl())("legend", ((tmp_51_0 = ctx.templateForm.get("legend")) == null ? null : tmp_51_0.value) || "")("showPageNumbers", ((tmp_52_0 = ctx.templateForm.get("showPageNumbers")) == null ? null : tmp_52_0.value) || false)("pageNumberPosition", ((tmp_53_0 = ctx.templateForm.get("pageNumberPosition")) == null ? null : tmp_53_0.value) || "bottom-center")("watermarkEnabled", ((tmp_54_0 = ctx.templateForm.get("watermarkEnabled")) == null ? null : tmp_54_0.value) || false)("watermarkType", ((tmp_55_0 = ctx.templateForm.get("watermarkType")) == null ? null : tmp_55_0.value) || "text")("watermarkText", ((tmp_56_0 = ctx.templateForm.get("watermarkText")) == null ? null : tmp_56_0.value) || "CONFIDENTIAL")("watermarkOpacity", (tmp_57_0 = (tmp_57_0 = ctx.templateForm.get("watermarkOpacity")) == null ? null : tmp_57_0.value) !== null && tmp_57_0 !== void 0 ? tmp_57_0 : 0.08)("watermarkPattern", ((tmp_58_0 = ctx.templateForm.get("watermarkPattern")) == null ? null : tmp_58_0.value) || "single")("signatureEnabled", ((tmp_59_0 = ctx.templateForm.get("signatureEnabled")) == null ? null : tmp_59_0.value) || false)("signatureImage", ((tmp_60_0 = ctx.templateForm.get("signatureImage")) == null ? null : tmp_60_0.value) || null)("signatureX", ((tmp_61_0 = ctx.templateForm.get("signatureX")) == null ? null : tmp_61_0.value) || 0)("signatureY", ((tmp_62_0 = ctx.templateForm.get("signatureY")) == null ? null : tmp_62_0.value) || 0)("signatureWidth", ((tmp_63_0 = ctx.templateForm.get("signatureWidth")) == null ? null : tmp_63_0.value) || 100)("signatureHeight", ((tmp_64_0 = ctx.templateForm.get("signatureHeight")) == null ? null : tmp_64_0.value) || 50);
      }
    }, dependencies: [
      CommonModule,
      SlicePipe,
      DecimalPipe,
      RouterModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      RangeValueAccessor,
      CheckboxControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      FormGroupDirective,
      FormControlName,
      DragDropModule,
      CdkDropList,
      CdkDrag,
      CdkDragHandle,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatDialogModule,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      MatTooltip,
      MatSnackBarModule,
      MatSlideToggleModule,
      MatSlideToggle,
      TranslocoModule,
      TranslocoPipe,
      ReportPreviewComponent
    ], encapsulation: 2, data: { animation: [fuseAnimations] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportBuilderComponent, [{
    type: Component,
    args: [{ selector: "report-builder", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      DragDropModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      MatSnackBarModule,
      MatSlideToggleModule,
      TranslocoModule,
      ReportPreviewComponent
    ], animations: [fuseAnimations], template: `<div class="min-h-screen w-full bg-gray-50">
    <!-- ========== TOP BAR ========== -->
    <div class="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <button
                        mat-icon-button
                        (click)="goBack()"
                        [matTooltip]="'smartReport.back' | transloco"
                    >
                        <mat-icon>arrow_back</mat-icon>
                    </button>
                    <div>
                        <h1 class="text-lg font-bold text-gray-900">
                            {{
                                (templateId()
                                    ? 'smartReport.editReportTemplate'
                                    : 'smartReport.newReportTemplate'
                                ) | transloco
                            }}
                        </h1>
                        <p class="text-xs text-gray-500">
                            {{ 'smartReport.designReportLayout' | transloco }}
                        </p>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        mat-stroked-button
                        (click)="sendSample()"
                        [disabled]="!templateId() || isSendingSample()"
                        [matTooltip]="
                            !templateId() ? ('smartReport.saveTemplateFirst' | transloco) : ''
                        "
                        class="!rounded-xl"
                    >
                        <span class="inline-flex items-center gap-2">
                            @if (isSendingSample()) {
                                <mat-icon class="animate-spin !text-lg">refresh</mat-icon>
                                {{ 'smartReport.sendingSample' | transloco }}
                            } @else {
                                <mat-icon class="!text-lg">send</mat-icon>
                                {{ 'smartReport.sendSample' | transloco }}
                            }
                        </span>
                    </button>
                    <button
                        mat-flat-button
                        (click)="save()"
                        [disabled]="isSaving()"
                        class="!rounded-xl !bg-indigo-600 !text-white"
                    >
                        <span class="inline-flex items-center gap-2">
                            @if (isSaving()) {
                                <mat-icon class="animate-spin !text-lg">refresh</mat-icon>
                                {{ 'smartReport.saving' | transloco }}
                            } @else {
                                <mat-icon class="!text-lg">save</mat-icon>
                                {{ 'smartReport.saveTemplate' | transloco }}
                            }
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- ========== MAIN LAYOUT ========== -->
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex gap-6 items-start">
            <!-- ============================== -->
            <!-- LEFT COLUMN: Editor (40%)      -->
            <!-- ============================== -->
            <div class="w-full lg:w-[440px] shrink-0 space-y-4">
                <!-- Template Settings -->
                <div class="bg-white rounded-2xl border border-gray-200 p-5">
                    <h3 class="text-sm font-semibold text-gray-900 mb-4">
                        {{ 'smartReport.templateSettings' | transloco }}
                    </h3>
                    <form [formGroup]="templateForm" class="space-y-4">
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{ 'smartReport.templateName' | transloco }}</mat-label>
                            <input
                                matInput
                                formControlName="name"
                                [placeholder]="'smartReport.templateNamePlaceholder' | transloco"
                            />
                        </mat-form-field>

                        <div class="grid grid-cols-3 gap-3">
                            <mat-form-field appearance="outline">
                                <mat-label>{{ 'smartReport.pageSize' | transloco }}</mat-label>
                                <mat-select formControlName="pageSize">
                                    <mat-option value="A4">A4</mat-option>
                                    <mat-option value="Letter">Letter</mat-option>
                                    <mat-option value="Legal">Legal</mat-option>
                                </mat-select>
                            </mat-form-field>

                            <mat-form-field appearance="outline">
                                <mat-label>{{ 'smartReport.orientation' | transloco }}</mat-label>
                                <mat-select formControlName="orientation">
                                    <mat-option value="portrait">{{
                                        'smartReport.portrait' | transloco
                                    }}</mat-option>
                                    <mat-option value="landscape">{{
                                        'smartReport.landscape' | transloco
                                    }}</mat-option>
                                </mat-select>
                            </mat-form-field>

                            <mat-form-field appearance="outline">
                                <mat-label>{{ 'smartReport.pdfEngine' | transloco }}</mat-label>
                                <mat-select formControlName="pdfEngine">
                                    <mat-option value="puppeteer">Puppeteer</mat-option>
                                    <mat-option value="pdfkit">PDFKit</mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>

                        <div class="flex items-center gap-4">
                            <label class="text-sm text-gray-600"
                                >{{ 'smartReport.primaryColor' | transloco }}:</label
                            >
                            <input
                                type="color"
                                formControlName="primaryColor"
                                class="w-9 h-9 rounded-lg border border-gray-200 cursor-pointer"
                            />
                        </div>

                        <!-- Workspace Logo -->
                        <div class="pt-3 border-t border-gray-100">
                            <label class="text-xs font-medium text-gray-500 mb-2 block">{{
                                'smartReport.workspaceLogo' | transloco
                            }}</label>
                            @if (logoUrl()) {
                                <div class="flex items-center gap-3">
                                    <img
                                        [src]="logoUrl()"
                                        alt="Logo"
                                        class="h-10 max-w-[160px] object-contain rounded border border-gray-200 bg-gray-50 p-1"
                                    />
                                    <button
                                        type="button"
                                        (click)="removeLogo()"
                                        class="text-xs text-red-500 hover:text-red-700 transition-colors"
                                    >
                                        {{ 'smartReport.remove' | transloco }}
                                    </button>
                                </div>
                            } @else {
                                <label
                                    class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-dashed border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 transition-colors cursor-pointer text-sm text-gray-500"
                                >
                                    <mat-icon class="!text-base">upload</mat-icon>
                                    {{ 'smartReport.uploadLogo' | transloco }}
                                    <input
                                        type="file"
                                        accept="image/png,image/jpeg,image/svg+xml,image/webp"
                                        (change)="onLogoUpload($event)"
                                        class="hidden"
                                    />
                                </label>
                                <p class="text-xs text-gray-400 mt-1">PNG, JPG, SVG \xB7 max 500KB</p>
                            }
                        </div>

                        <!-- Footer Legend -->
                        <div class="pt-3 border-t border-gray-100">
                            <label class="text-xs font-medium text-gray-500 mb-1 block">{{
                                'smartReport.footerLegend' | transloco
                            }}</label>
                            <textarea
                                formControlName="legend"
                                class="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-gray-600 resize-none"
                                rows="2"
                                [placeholder]="'smartReport.footerLegendPlaceholder' | transloco"
                            ></textarea>
                        </div>

                        <!-- Pagination -->
                        <div class="pt-3 border-t border-gray-100">
                            <div class="flex items-center justify-between mb-2">
                                <label class="text-xs font-medium text-gray-500">{{
                                    'smartReport.pageNumbers' | transloco
                                }}</label>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        formControlName="showPageNumbers"
                                        class="sr-only peer"
                                    />
                                    <div
                                        class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"
                                    ></div>
                                </label>
                            </div>
                            @if (templateForm.get('showPageNumbers')?.value) {
                                <mat-form-field appearance="outline" class="w-full !text-xs">
                                    <mat-label>{{
                                        'smartReport.pageNumberPosition' | transloco
                                    }}</mat-label>
                                    <mat-select formControlName="pageNumberPosition">
                                        <mat-option value="top-left">\u2196 Top Left</mat-option>
                                        <mat-option value="top-center">\u2191 Top Center</mat-option>
                                        <mat-option value="top-right">\u2197 Top Right</mat-option>
                                        <mat-option value="bottom-left">\u2199 Bottom Left</mat-option>
                                        <mat-option value="bottom-center"
                                            >\u2193 Bottom Center</mat-option
                                        >
                                        <mat-option value="bottom-right"
                                            >\u2198 Bottom Right</mat-option
                                        >
                                    </mat-select>
                                </mat-form-field>
                            }
                        </div>

                        <!-- Watermark -->
                        <div class="pt-3 border-t border-gray-100">
                            <div class="flex items-center justify-between mb-2">
                                <label class="text-xs font-medium text-gray-500">{{
                                    'smartReport.watermark' | transloco
                                }}</label>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        formControlName="watermarkEnabled"
                                        class="sr-only peer"
                                    />
                                    <div
                                        class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"
                                    ></div>
                                </label>
                            </div>
                            @if (templateForm.get('watermarkEnabled')?.value) {
                                <div class="space-y-3">
                                    <!-- Watermark type -->
                                    <div class="flex gap-1">
                                        <button
                                            type="button"
                                            (click)="
                                                templateForm.get('watermarkType')?.setValue('text')
                                            "
                                            class="flex-1 py-2 rounded-lg border text-xs transition-colors"
                                            [class.bg-indigo-50]="
                                                templateForm.get('watermarkType')?.value === 'text'
                                            "
                                            [class.border-indigo-300]="
                                                templateForm.get('watermarkType')?.value === 'text'
                                            "
                                        >
                                            {{ 'smartReport.watermarkText' | transloco }}
                                        </button>
                                        <button
                                            type="button"
                                            (click)="
                                                templateForm.get('watermarkType')?.setValue('logo')
                                            "
                                            class="flex-1 py-2 rounded-lg border text-xs transition-colors"
                                            [class.bg-indigo-50]="
                                                templateForm.get('watermarkType')?.value === 'logo'
                                            "
                                            [class.border-indigo-300]="
                                                templateForm.get('watermarkType')?.value === 'logo'
                                            "
                                        >
                                            {{ 'smartReport.watermarkLogo' | transloco }}
                                        </button>
                                    </div>

                                    <!-- Text input (only for text type) -->
                                    @if (templateForm.get('watermarkType')?.value === 'text') {
                                        <div>
                                            <input
                                                type="text"
                                                formControlName="watermarkText"
                                                class="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                                                [placeholder]="
                                                    'smartReport.watermarkTextPlaceholder'
                                                        | transloco
                                                "
                                                maxlength="100"
                                            />
                                        </div>
                                    }
                                    @if (
                                        templateForm.get('watermarkType')?.value === 'logo' &&
                                        !logoUrl()
                                    ) {
                                        <p class="text-xs text-amber-500">
                                            {{ 'smartReport.watermarkLogoHint' | transloco }}
                                        </p>
                                    }

                                    <!-- Opacity slider -->
                                    <div>
                                        <div class="flex items-center justify-between mb-1">
                                            <label class="text-xs text-gray-400">{{
                                                'smartReport.watermarkOpacity' | transloco
                                            }}</label>
                                            <span class="text-xs text-gray-500 font-mono"
                                                >{{
                                                    templateForm.get('watermarkOpacity')?.value *
                                                        100 | number: '1.0-0'
                                                }}%</span
                                            >
                                        </div>
                                        <input
                                            type="range"
                                            formControlName="watermarkOpacity"
                                            min="0.01"
                                            max="0.5"
                                            step="0.01"
                                            class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                        />
                                    </div>

                                    <!-- Pattern -->
                                    <div>
                                        <label class="text-xs text-gray-400 mb-1 block">{{
                                            'smartReport.watermarkPattern' | transloco
                                        }}</label>
                                        <div class="flex gap-1">
                                            <button
                                                type="button"
                                                (click)="
                                                    templateForm
                                                        .get('watermarkPattern')
                                                        ?.setValue('single')
                                                "
                                                class="flex-1 py-2 rounded-lg border text-xs transition-colors"
                                                [class.bg-indigo-50]="
                                                    templateForm.get('watermarkPattern')?.value ===
                                                    'single'
                                                "
                                                [class.border-indigo-300]="
                                                    templateForm.get('watermarkPattern')?.value ===
                                                    'single'
                                                "
                                            >
                                                {{ 'smartReport.watermarkSingle' | transloco }}
                                            </button>
                                            <button
                                                type="button"
                                                (click)="
                                                    templateForm
                                                        .get('watermarkPattern')
                                                        ?.setValue('repeated')
                                                "
                                                class="flex-1 py-2 rounded-lg border text-xs transition-colors"
                                                [class.bg-indigo-50]="
                                                    templateForm.get('watermarkPattern')?.value ===
                                                    'repeated'
                                                "
                                                [class.border-indigo-300]="
                                                    templateForm.get('watermarkPattern')?.value ===
                                                    'repeated'
                                                "
                                            >
                                                {{ 'smartReport.watermarkRepeated' | transloco }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                        <!-- Security Configuration -->
                        <div class="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-4">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <mat-icon class="text-gray-400 !w-5 !h-5 !text-[20px]"
                                        >lock</mat-icon
                                    >
                                    <span class="text-sm font-medium text-gray-700">{{
                                        'smartReport.securityTitle' | transloco
                                    }}</span>
                                </div>
                                <mat-slide-toggle
                                    formControlName="securityEnabled"
                                    color="primary"
                                ></mat-slide-toggle>
                            </div>

                            @if (templateForm.get('securityEnabled')?.value) {
                                <div class="space-y-4 pt-2 border-t border-gray-200">
                                    <!-- Password -->
                                    <div>
                                        <label class="text-xs text-gray-400 mb-1 block">{{
                                            'smartReport.securityPassword' | transloco
                                        }}</label>
                                        <div class="relative">
                                            <input
                                                [type]="showPassword ? 'text' : 'password'"
                                                formControlName="securityPassword"
                                                class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm pr-10"
                                                [placeholder]="
                                                    'smartReport.securityPasswordPlaceholder'
                                                        | transloco
                                                "
                                            />
                                            <button
                                                type="button"
                                                (click)="showPassword = !showPassword"
                                                class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                <mat-icon class="!w-4 !h-4 !text-[16px]">{{
                                                    showPassword ? 'visibility_off' : 'visibility'
                                                }}</mat-icon>
                                            </button>
                                        </div>
                                        <p class="text-[10px] text-gray-400 mt-1">
                                            {{ 'smartReport.securityPasswordHint' | transloco }}
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>

                        <!-- Signature Configuration -->
                        <div class="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-4">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <mat-icon class="text-gray-400 !w-5 !h-5 !text-[20px]"
                                        >draw</mat-icon
                                    >
                                    <span class="text-sm font-medium text-gray-700">{{ 'smartReport.signature' | transloco }}</span>
                                </div>
                                <mat-slide-toggle
                                    formControlName="signatureEnabled"
                                    color="primary"
                                ></mat-slide-toggle>
                            </div>

                            @if (templateForm.get('signatureEnabled')?.value) {
                                <div class="space-y-4 pt-2 border-t border-gray-200">
                                    @if (templateForm.get('signatureImage')?.value) {
                                        <div
                                            class="relative group border border-gray-200 rounded-lg p-2 bg-white flex justify-center"
                                        >
                                            <img
                                                [src]="templateForm.get('signatureImage')?.value"
                                                class="h-16 object-contain"
                                            />
                                            <button
                                                type="button"
                                                (click)="
                                                    templateForm.patchValue({
                                                        signatureImage: null,
                                                    })
                                                "
                                                class="absolute top-1 right-1 p-1 bg-red-50 text-red-500 rounded-full hover:bg-red-100 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <mat-icon class="!w-4 !h-4 !text-[16px]"
                                                    >close</mat-icon
                                                >
                                            </button>
                                        </div>
                                        <p class="text-xs text-gray-400">
                                            {{ 'smartReport.dragSignatureToPosition' | transloco }}
                                        </p>
                                    } @else {
                                        <button
                                            type="button"
                                            mat-stroked-button
                                            color="primary"
                                            class="w-full"
                                            (click)="openSignatureDialog()"
                                        >
                                            <mat-icon class="mr-2">edit</mat-icon>
                                            {{ 'smartReport.drawSignature' | transloco }}
                                        </button>
                                    }
                                </div>
                            }
                        </div>
                    </form>
                </div>

                <!-- Helper Data - available paths from preview -->
                <div class="bg-white rounded-2xl border border-gray-200 p-4">
                    <h3 class="text-sm font-semibold text-gray-900 mb-2">
                        {{ 'smartReport.helperData' | transloco }}
                    </h3>
                    <p class="text-xs text-gray-500 mb-3">
                        {{ 'smartReport.helperDataHint' | transloco }}
                    </p>
                    @if (helperDataPaths().length === 0) {
                        <p class="text-xs text-gray-400 italic">
                            {{ 'smartReport.openFromReportViewer' | transloco }}
                        </p>
                    } @else {
                        <div class="max-h-[240px] overflow-y-auto space-y-1 pr-1">
                            @for (item of helperDataPaths(); track item.path) {
                                @if (item.type === 'leaf') {
                                    <div
                                        class="group flex items-center gap-2 py-1.5 px-2 rounded hover:bg-gray-50 text-xs"
                                    >
                                        <code
                                            class="flex-1 min-w-0 truncate text-gray-700 font-mono"
                                            >{{ item.path }}</code
                                        >
                                        <span
                                            class="text-gray-400 truncate max-w-[120px]"
                                            [title]="item.value"
                                            >{{ item.value }}</span
                                        >
                                        <button
                                            mat-icon-button
                                            (click)="copyPathToClipboard(item.path)"
                                            class="!w-6 !h-6 !rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                            [matTooltip]="'smartReport.copyPath' | transloco"
                                        >
                                            <mat-icon class="!text-sm !w-4 !h-4"
                                                >content_copy</mat-icon
                                            >
                                        </button>
                                    </div>
                                } @else {
                                    <div class="group flex items-center gap-2 pt-1.5 pb-0.5">
                                        <span class="text-xs font-medium text-gray-500">{{
                                            item.path
                                        }}</span>
                                        <button
                                            mat-icon-button
                                            (click)="copyPathToClipboard(item.path)"
                                            class="!w-6 !h-6 !rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                            [matTooltip]="
                                                'smartReport.copyPathForTable' | transloco
                                            "
                                        >
                                            <mat-icon class="!text-sm !w-4 !h-4"
                                                >content_copy</mat-icon
                                            >
                                        </button>
                                    </div>
                                }
                            }
                        </div>
                    }
                </div>

                <!-- Add Sections toolbar -->
                <div class="bg-white rounded-2xl border border-gray-200 p-4">
                    <h3 class="text-sm font-semibold text-gray-900 mb-3">
                        {{ 'smartReport.addSections' | transloco }}
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        @for (sectionType of sectionTypes; track sectionType.type) {
                            <button
                                (click)="addSection(sectionType.type)"
                                class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-sm text-gray-700"
                            >
                                <mat-icon class="!text-base text-gray-400">{{
                                    sectionType.icon
                                }}</mat-icon>
                                {{ sectionType.labelKey | transloco }}
                            </button>
                        }
                    </div>
                </div>

                <!-- Section List (drag & drop) -->
                <div class="bg-white rounded-2xl border border-gray-200">
                    <div
                        class="px-5 py-3 border-b border-gray-100 flex items-center justify-between"
                    >
                        <div>
                            <h3 class="text-sm font-semibold text-gray-900">
                                {{ 'smartReport.reportLayout' | transloco }}
                            </h3>
                            <p class="text-xs text-gray-400">
                                {{ 'smartReport.dragToReorder' | transloco }}
                            </p>
                        </div>
                        <span class="text-xs font-medium text-gray-400"
                            >{{ sections().length }} {{ 'smartReport.sections' | transloco }}</span
                        >
                    </div>

                    <div
                        cdkDropList
                        (cdkDropListDropped)="onDrop($event)"
                        class="p-3 min-h-[200px]"
                    >
                        @if (sections().length === 0) {
                            <div
                                class="flex flex-col items-center justify-center h-40 text-gray-300"
                            >
                                <mat-icon class="!text-4xl !w-10 !h-10 mb-2">add_box</mat-icon>
                                <p class="text-sm">
                                    {{ 'smartReport.addSectionsFromAbove' | transloco }}
                                </p>
                            </div>
                        }

                        @for (section of sections(); track section.id) {
                            <div
                                cdkDrag
                                class="flex items-center gap-2 bg-white border rounded-lg px-3 py-2.5 mb-2 cursor-pointer hover:border-indigo-300 transition-colors group"
                                [class.ring-2]="currentSelectedSection()?.id === section.id"
                                [class.ring-indigo-500]="
                                    currentSelectedSection()?.id === section.id
                                "
                                [class.bg-indigo-50]="currentSelectedSection()?.id === section.id"
                                (click)="selectSection(section)"
                            >
                                <div
                                    cdkDragHandle
                                    class="shrink-0 w-6 h-6 rounded flex items-center justify-center cursor-grab text-gray-300 hover:text-gray-500"
                                >
                                    <mat-icon class="!text-sm">drag_indicator</mat-icon>
                                </div>

                                <div
                                    class="shrink-0 w-7 h-7 rounded-md flex items-center justify-center"
                                    [style.background]="
                                        templateForm.get('primaryColor')?.value + '15'
                                    "
                                >
                                    <mat-icon
                                        [style.color]="templateForm.get('primaryColor')?.value"
                                        class="!text-base"
                                        >{{ getSectionIcon(section.type) }}</mat-icon
                                    >
                                </div>

                                <div class="min-w-0 flex-1">
                                    <p class="text-sm font-medium text-gray-800 truncate">
                                        {{ getSectionLabel(section.type) }}
                                    </p>
                                    <p class="text-xs text-gray-400 truncate">
                                        @if (section.label) {
                                            {{ section.label }}
                                        } @else if (section.staticContent) {
                                            {{ section.staticContent | slice: 0 : 30
                                            }}{{ section.staticContent.length > 30 ? '...' : '' }}
                                        } @else if (section.dataPath) {
                                            {{ section.dataPath }}
                                        } @else {
                                            {{
                                                'smartReport.sectionNumber'
                                                    | transloco: { num: section.order + 1 }
                                            }}
                                        }
                                    </p>
                                </div>

                                <div
                                    class="shrink-0 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <button
                                        mat-icon-button
                                        (click)="
                                            duplicateSection(section); $event.stopPropagation()
                                        "
                                        [matTooltip]="'smartReport.duplicate' | transloco"
                                        class="!w-7 !h-7"
                                    >
                                        <mat-icon class="!text-sm text-gray-400"
                                            >content_copy</mat-icon
                                        >
                                    </button>
                                    <button
                                        mat-icon-button
                                        (click)="
                                            deleteSection(section.id); $event.stopPropagation()
                                        "
                                        [matTooltip]="'smartReport.delete' | transloco"
                                        class="!w-7 !h-7"
                                    >
                                        <mat-icon class="!text-sm text-red-400">delete</mat-icon>
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <!-- Section Editor (contextual) -->
                @if (currentSelectedSection(); as sel) {
                    <div class="bg-white rounded-2xl border border-gray-200 p-5">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-sm font-semibold text-gray-900">
                                {{ 'smartReport.edit' | transloco }} {{ getSectionLabel(sel.type) }}
                            </h3>
                            <button
                                mat-icon-button
                                (click)="selectedSection.set(null)"
                                class="!w-7 !h-7"
                            >
                                <mat-icon class="!text-base text-gray-400">close</mat-icon>
                            </button>
                        </div>

                        <div class="space-y-4">
                            <!-- HEADER EDITOR -->
                            @if (sel.type === 'header') {
                                <div>
                                    <label class="text-xs font-medium text-gray-500 mb-1 block">{{
                                        'smartReport.titleText' | transloco
                                    }}</label>
                                    <input
                                        type="text"
                                        [value]="sel.staticContent || ''"
                                        (input)="
                                            updateSection(sel.id, {
                                                staticContent: $any($event.target).value,
                                                label: $any($event.target).value,
                                            })
                                        "
                                        class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                        [placeholder]="'smartReport.reportTitle' | transloco"
                                    />
                                </div>
                            }

                            <!-- TEXT EDITOR -->
                            @if (sel.type === 'text') {
                                <div>
                                    <label class="text-xs font-medium text-gray-500 mb-1 block">{{
                                        'smartReport.content' | transloco
                                    }}</label>
                                    <textarea
                                        [value]="sel.staticContent || ''"
                                        (input)="
                                            updateSection(sel.id, {
                                                staticContent: $any($event.target).value,
                                            })
                                        "
                                        class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                        rows="4"
                                        [placeholder]="'smartReport.enterTextContent' | transloco"
                                    ></textarea>
                                </div>
                            }

                            <!-- FIELD EDITOR -->
                            @if (sel.type === 'field') {
                                <div>
                                    <label class="text-xs font-medium text-gray-500 mb-1 block">{{
                                        'smartReport.label' | transloco
                                    }}</label>
                                    <input
                                        type="text"
                                        [value]="sel.label || ''"
                                        (input)="
                                            updateSection(sel.id, {
                                                label: $any($event.target).value,
                                            })
                                        "
                                        class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                        [placeholder]="'smartReport.fieldLabel' | transloco"
                                    />
                                </div>
                                <div>
                                    <label class="text-xs font-medium text-gray-500 mb-1 block">{{
                                        'smartReport.dataPath' | transloco
                                    }}</label>
                                    <input
                                        type="text"
                                        [value]="sel.dataPath || ''"
                                        (input)="
                                            updateSection(sel.id, {
                                                dataPath: $any($event.target).value,
                                            })
                                        "
                                        class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono"
                                        [placeholder]="
                                            'smartReport.dataPathPlaceholder' | transloco
                                        "
                                    />
                                    <p class="text-xs text-gray-400 mt-1">
                                        {{ 'smartReport.dotSeparatedPath' | transloco }}
                                    </p>
                                </div>
                            }

                            <!-- TABLE EDITOR -->
                            @if (sel.type === 'table') {
                                <div>
                                    <label class="text-xs font-medium text-gray-500 mb-1 block">{{
                                        'smartReport.tableTitle' | transloco
                                    }}</label>
                                    <input
                                        type="text"
                                        [value]="sel.label || ''"
                                        (input)="
                                            updateSection(sel.id, {
                                                label: $any($event.target).value,
                                            })
                                        "
                                        class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                        [placeholder]="'smartReport.tableLabel' | transloco"
                                    />
                                </div>
                                <div>
                                    <label class="text-xs font-medium text-gray-500 mb-1 block">{{
                                        'smartReport.dataPathObject' | transloco
                                    }}</label>
                                    <input
                                        type="text"
                                        [value]="sel.dataPath || ''"
                                        (input)="
                                            updateSection(sel.id, {
                                                dataPath: $any($event.target).value,
                                            })
                                        "
                                        class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono"
                                        placeholder="results.1"
                                    />
                                    <p class="text-xs text-gray-400 mt-1">
                                        {{ 'smartReport.pathToObject' | transloco }}
                                    </p>
                                </div>
                            }

                            <!-- IMAGE EDITOR -->
                            @if (sel.type === 'image') {
                                <div>
                                    <label class="text-xs font-medium text-gray-500 mb-1 block">{{
                                        'smartReport.imageUrl' | transloco
                                    }}</label>
                                    <input
                                        type="text"
                                        [value]="sel.staticContent || ''"
                                        (input)="
                                            updateSection(sel.id, {
                                                staticContent: $any($event.target).value,
                                            })
                                        "
                                        class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono"
                                        placeholder="https://example.com/logo.png"
                                    />
                                </div>
                                <div>
                                    <label class="text-xs font-medium text-gray-500 mb-1 block">{{
                                        'smartReport.altText' | transloco
                                    }}</label>
                                    <input
                                        type="text"
                                        [value]="sel.label || ''"
                                        (input)="
                                            updateSection(sel.id, {
                                                label: $any($event.target).value,
                                            })
                                        "
                                        class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                        [placeholder]="'smartReport.companyLogo' | transloco"
                                    />
                                </div>
                            }

                            <!-- SPACER EDITOR -->
                            @if (sel.type === 'spacer') {
                                <div>
                                    <label class="text-xs font-medium text-gray-500 mb-1 block">{{
                                        'smartReport.heightPx' | transloco
                                    }}</label>
                                    <input
                                        type="number"
                                        [value]="sel.style?.padding || 16"
                                        (input)="
                                            updateSectionStyle('padding', $any($event.target).value)
                                        "
                                        class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                        min="4"
                                        max="200"
                                    />
                                </div>
                            }

                            <!-- DIVIDER EDITOR -->
                            @if (sel.type === 'divider') {
                                <div>
                                    <label class="text-xs font-medium text-gray-500 mb-1 block">{{
                                        'smartReport.color' | transloco
                                    }}</label>
                                    <input
                                        type="color"
                                        [value]="sel.style?.color || '#E5E7EB'"
                                        (input)="updateStyleColor($any($event.target).value)"
                                        class="w-9 h-9 rounded-lg border border-gray-200 cursor-pointer"
                                    />
                                </div>
                            }

                            <!-- STYLE OPTIONS (for text-bearing sections) -->
                            @if (
                                sel.type === 'header' || sel.type === 'text' || sel.type === 'field'
                            ) {
                                <div class="pt-3 border-t border-gray-100 space-y-3">
                                    <h4 class="text-xs font-medium text-gray-500">
                                        {{ 'smartReport.style' | transloco }}
                                    </h4>

                                    <!-- Text Align -->
                                    <div>
                                        <label class="text-xs text-gray-400 mb-1 block">{{
                                            'smartReport.textAlign' | transloco
                                        }}</label>
                                        <div class="flex gap-1">
                                            @for (
                                                align of ['left', 'center', 'right'];
                                                track align
                                            ) {
                                                <button
                                                    (click)="updateTextAlign(align)"
                                                    class="flex-1 py-2 rounded-lg border text-sm transition-colors"
                                                    [class.bg-indigo-50]="
                                                        sel.style?.textAlign === align
                                                    "
                                                    [class.border-indigo-300]="
                                                        sel.style?.textAlign === align
                                                    "
                                                >
                                                    <mat-icon class="!text-base"
                                                        >format_align_{{ align }}</mat-icon
                                                    >
                                                </button>
                                            }
                                        </div>
                                    </div>

                                    <!-- Font Size -->
                                    <div>
                                        <label class="text-xs text-gray-400 mb-1 block">{{
                                            'smartReport.fontSize' | transloco
                                        }}</label>
                                        <input
                                            type="number"
                                            [value]="sel.style?.fontSize || 14"
                                            (input)="updateFontSize(+$any($event.target).value)"
                                            class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                                            min="8"
                                            max="72"
                                        />
                                    </div>

                                    <!-- Font Weight -->
                                    <div>
                                        <label class="text-xs text-gray-400 mb-1 block">{{
                                            'smartReport.fontWeight' | transloco
                                        }}</label>
                                        <div class="flex gap-1">
                                            <button
                                                (click)="updateFontWeight('normal')"
                                                class="flex-1 py-2 rounded-lg border text-sm transition-colors"
                                                [class.bg-indigo-50]="
                                                    sel.style?.fontWeight !== 'bold'
                                                "
                                                [class.border-indigo-300]="
                                                    sel.style?.fontWeight !== 'bold'
                                                "
                                            >
                                                {{ 'smartReport.normal' | transloco }}
                                            </button>
                                            <button
                                                (click)="updateFontWeight('bold')"
                                                class="flex-1 py-2 rounded-lg border text-sm font-bold transition-colors"
                                                [class.bg-indigo-50]="
                                                    sel.style?.fontWeight === 'bold'
                                                "
                                                [class.border-indigo-300]="
                                                    sel.style?.fontWeight === 'bold'
                                                "
                                            >
                                                {{ 'smartReport.bold' | transloco }}
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Text Color -->
                                    <div class="flex items-center gap-3">
                                        <label class="text-xs text-gray-400">{{
                                            'smartReport.textColor' | transloco
                                        }}</label>
                                        <input
                                            type="color"
                                            [value]="sel.style?.color || '#111827'"
                                            (input)="updateStyleColor($any($event.target).value)"
                                            class="w-8 h-8 rounded border border-gray-200 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>

            <!-- ============================== -->
            <!-- RIGHT COLUMN: Live Preview     -->
            <!-- ============================== -->
            <div class="flex-1 min-w-0">
                <div class="sticky top-20">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-sm font-semibold text-gray-500">
                            {{ 'smartReport.preview' | transloco }}
                        </h3>
                        <span class="text-xs text-gray-400">{{
                            'smartReport.livePreviewWithSample' | transloco
                        }}</span>
                    </div>

                    <!-- Paper container - shared ReportPreviewComponent -->
                    <report-preview
                        [template]="{
                            sections: sections(),
                            primaryColor: templateForm.get('primaryColor')?.value,
                        }"
                        [previewData]="previewData()"
                        [primaryColor]="templateForm.get('primaryColor')?.value || '#4F46E5'"
                        [orientation]="templateForm.get('orientation')?.value || 'portrait'"
                        [clickable]="true"
                        [selectedSectionId]="currentSelectedSection()?.id ?? null"
                        [sectionClick]="onPreviewSectionClick"
                        [logoUrl]="logoUrl()"
                        [legend]="templateForm.get('legend')?.value || ''"
                        [showPageNumbers]="templateForm.get('showPageNumbers')?.value || false"
                        [pageNumberPosition]="
                            templateForm.get('pageNumberPosition')?.value || 'bottom-center'
                        "
                        [watermarkEnabled]="templateForm.get('watermarkEnabled')?.value || false"
                        [watermarkType]="templateForm.get('watermarkType')?.value || 'text'"
                        [watermarkText]="templateForm.get('watermarkText')?.value || 'CONFIDENTIAL'"
                        [watermarkOpacity]="templateForm.get('watermarkOpacity')?.value ?? 0.08"
                        [watermarkPattern]="templateForm.get('watermarkPattern')?.value || 'single'"
                        [signatureEnabled]="templateForm.get('signatureEnabled')?.value || false"
                        [signatureImage]="templateForm.get('signatureImage')?.value || null"
                        [signatureX]="templateForm.get('signatureX')?.value || 0"
                        [signatureY]="templateForm.get('signatureY')?.value || 0"
                        [signatureWidth]="templateForm.get('signatureWidth')?.value || 100"
                        [signatureHeight]="templateForm.get('signatureHeight')?.value || 50"
                        (signaturePositionChange)="onSignaturePositionChange($event)"
                        (signatureSizeChange)="onSignatureSizeChange($event)"
                    />
                </div>
            </div>
        </div>
    </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportBuilderComponent, { className: "ReportBuilderComponent", filePath: "src/app/modules/smart-batch/report-builder/report-builder.component.ts", lineNumber: 52 });
})();
export {
  ReportBuilderComponent
};
//# sourceMappingURL=chunk-WLSLRDXC.js.map
