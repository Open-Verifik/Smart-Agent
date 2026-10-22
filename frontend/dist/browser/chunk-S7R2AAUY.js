import {
  filterFeaturesForCountry
} from "./chunk-YR6ZLJHC.js";
import {
  SmartBatchService
} from "./chunk-YYPGLQSF.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-DMXREZDX.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
} from "./chunk-QUFOCOZK.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KIEFKQUB.js";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-HVUVGZ2L.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-PJFCLQ64.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-JBF67GMG.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-FWBWCXY5.js";
import {
  CommonModule,
  Component,
  NgClass,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
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
} from "./chunk-YWP2Y7QK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-batch/report-builder/signature-pad-dialog/signature-pad-dialog.component.ts
var _c0 = ["pad"];
var _forTrack0 = ($index, $item) => $item.id;
function SignaturePadDialogComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function SignaturePadDialogComponent_For_11_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mode = tab_r2);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.mode === tab_r2 ? "bg-blue-600 text-white" : "bg-white text-stone-700 dark:bg-gray-900 dark:text-stone-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r2.tabLabel(tab_r2)), " ");
  }
}
function SignaturePadDialogComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "img", 17);
    \u0275\u0275elementStart(1, "button", 18);
    \u0275\u0275listener("click", function SignaturePadDialogComponent_Conditional_12_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.uploadPreview, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "smartReport.clear"), " ");
  }
}
function SignaturePadDialogComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 21);
    \u0275\u0275listener("click", function SignaturePadDialogComponent_Conditional_12_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      \u0275\u0275nextContext();
      const fileInput_r7 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(fileInput_r7.click());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "smartReport.signatureDrop"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "smartReport.signatureOr"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "smartReport.signatureChoose"), " ");
  }
}
function SignaturePadDialogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("dragover", function SignaturePadDialogComponent_Conditional_12_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragOver($event));
    })("dragleave", function SignaturePadDialogComponent_Conditional_12_Template_div_dragleave_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dragOver = false);
    })("drop", function SignaturePadDialogComponent_Conditional_12_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDrop($event));
    });
    \u0275\u0275template(1, SignaturePadDialogComponent_Conditional_12_Conditional_1_Template, 4, 4)(2, SignaturePadDialogComponent_Conditional_12_Conditional_2_Template, 9, 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 16, 0);
    \u0275\u0275listener("change", function SignaturePadDialogComponent_Conditional_12_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFile($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-blue-400", ctx_r2.dragOver);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.uploadPreview ? 1 : 2);
  }
}
function SignaturePadDialogComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "canvas", 28, 1);
    \u0275\u0275listener("pointerdown", function SignaturePadDialogComponent_Conditional_13_Conditional_1_Template_canvas_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startDrawing($event));
    })("pointermove", function SignaturePadDialogComponent_Conditional_13_Conditional_1_Template_canvas_pointermove_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.drawStroke($event));
    })("pointerup", function SignaturePadDialogComponent_Conditional_13_Conditional_1_Template_canvas_pointerup_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.stopDrawing($event));
    })("pointercancel", function SignaturePadDialogComponent_Conditional_13_Conditional_1_Template_canvas_pointercancel_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.stopDrawing($event));
    });
    \u0275\u0275elementEnd();
  }
}
function SignaturePadDialogComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("font-family", ctx_r2.selectedFont.family)("color", ctx_r2.penColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.typedName.trim(), " ");
  }
}
function SignaturePadDialogComponent_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartReport.signatureDrawHint"), " ");
  }
}
function SignaturePadDialogComponent_Conditional_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartReport.signatureTypeHint"), " ");
  }
}
function SignaturePadDialogComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, SignaturePadDialogComponent_Conditional_13_Conditional_1_Template, 2, 0, "canvas", 22)(2, SignaturePadDialogComponent_Conditional_13_Conditional_2_Template, 2, 5, "div", 23);
    \u0275\u0275element(3, "div", 24);
    \u0275\u0275elementStart(4, "div", 25)(5, "span", 26);
    \u0275\u0275template(6, SignaturePadDialogComponent_Conditional_13_Conditional_6_Template, 2, 3)(7, SignaturePadDialogComponent_Conditional_13_Conditional_7_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 27);
    \u0275\u0275listener("click", function SignaturePadDialogComponent_Conditional_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.mode === "draw" ? 1 : ctx_r2.typedName.trim() ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.mode === "draw" && !ctx_r2.hasDrawing ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.mode === "type" && !ctx_r2.typedName.trim() ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "smartReport.clear"), " ");
  }
}
function SignaturePadDialogComponent_Conditional_14_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function SignaturePadDialogComponent_Conditional_14_For_4_Template_button_click_0_listener() {
      const font_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectedFont = font_r12);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const font_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("font-family", font_r12.family)("color", ctx_r2.penColor);
    \u0275\u0275classProp("border-blue-600", ctx_r2.selectedFont.id === font_r12.id)("bg-blue-50", ctx_r2.selectedFont.id === font_r12.id)("border-stone-200", ctx_r2.selectedFont.id !== font_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.previewName(), " ");
  }
}
function SignaturePadDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 30);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function SignaturePadDialogComponent_Conditional_14_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.typedName, $event) || (ctx_r2.typedName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275repeaterCreate(3, SignaturePadDialogComponent_Conditional_14_For_4_Template, 2, 11, "button", 32, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(1, 2, "smartReport.signatureName"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.typedName);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.fonts);
  }
}
function SignaturePadDialogComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function SignaturePadDialogComponent_For_18_Template_button_click_0_listener() {
      const color_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setColor(color_r14.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", color_r14.value);
    \u0275\u0275classProp("ring-2", ctx_r2.penColor === color_r14.value)("ring-offset-2", ctx_r2.penColor === color_r14.value)("ring-stone-700", ctx_r2.penColor === color_r14.value);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 9, color_r14.labelKey));
  }
}
var SIGNATURE_FONTS = [
  { id: "great-vibes", family: '"Great Vibes", cursive' },
  { id: "allura", family: '"Allura", cursive' },
  { id: "sacramento", family: '"Sacramento", cursive' },
  { id: "alex-brush", family: '"Alex Brush", cursive' },
  { id: "dancing-script", family: '"Dancing Script", cursive' },
  { id: "pinyon-script", family: '"Pinyon Script", cursive' }
];
var SIGNATURE_COLORS = [
  { id: "black", value: "#111111", labelKey: "smartReport.signatureColorBlack" },
  { id: "blue", value: "#2563eb", labelKey: "smartReport.signatureColorBlue" },
  { id: "red", value: "#dc2626", labelKey: "smartReport.signatureColorRed" }
];
var SignaturePadDialogComponent = class _SignaturePadDialogComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this._transloco = inject(TranslocoService);
    this.modes = ["draw", "type", "upload"];
    this.fonts = SIGNATURE_FONTS;
    this.colors = SIGNATURE_COLORS;
    this.mode = "draw";
    this.penColor = SIGNATURE_COLORS[0].value;
    this.typedName = "";
    this.selectedFont = SIGNATURE_FONTS[0];
    this.hasDrawing = false;
    this.dragOver = false;
    this.uploadSource = null;
    this.uploadPreview = null;
    this._canvas = null;
    this._ctx = null;
    this._strokes = [];
    this._current = null;
  }
  set padRef(ref) {
    this._canvas = ref?.nativeElement ?? null;
    if (!this._canvas)
      return;
    requestAnimationFrame(() => this._bindCanvas());
  }
  tabLabel(tab) {
    if (tab === "type")
      return "smartReport.signatureTabType";
    if (tab === "upload")
      return "smartReport.signatureTabUpload";
    return "smartReport.signatureTabDraw";
  }
  previewName() {
    const typed = this.typedName.trim();
    return typed || this._transloco.translate("smartReport.signatureSample");
  }
  setColor(value) {
    this.penColor = value;
    if (this.mode === "draw")
      this._redraw();
    if (this.uploadSource)
      void this._refreshUploadPreview();
  }
  clear() {
    if (this.mode === "type") {
      this.typedName = "";
      return;
    }
    if (this.mode === "upload") {
      this.uploadSource = null;
      this.uploadPreview = null;
      return;
    }
    this._strokes = [];
    this._current = null;
    this.hasDrawing = false;
    this._redraw();
  }
  canCreate() {
    if (this.mode === "draw")
      return this.hasDrawing;
    if (this.mode === "type")
      return this.typedName.trim().length > 0;
    return Boolean(this.uploadSource);
  }
  save() {
    return __async(this, null, function* () {
      if (!this.canCreate())
        return;
      if (this.mode === "draw" && this._canvas) {
        this._dialogRef.close(this._canvas.toDataURL("image/png"));
        return;
      }
      if (this.mode === "type") {
        this._dialogRef.close(yield this._renderTyped());
        return;
      }
      if (this.uploadSource) {
        this._dialogRef.close(yield this._tintSignature(this.uploadSource, this.penColor));
      }
    });
  }
  startDrawing(event) {
    if (!this._canvas)
      return;
    event.preventDefault();
    this._canvas.setPointerCapture(event.pointerId);
    this._current = [this._point(event)];
    this._strokes.push(this._current);
    this.hasDrawing = true;
    this._redraw();
  }
  drawStroke(event) {
    if (!this._current || !this._canvas)
      return;
    this._current.push(this._point(event));
    this._redraw();
  }
  stopDrawing(event) {
    if (this._canvas?.hasPointerCapture(event.pointerId)) {
      this._canvas.releasePointerCapture(event.pointerId);
    }
    this._current = null;
  }
  onDragOver(event) {
    event.preventDefault();
    this.dragOver = true;
  }
  onDrop(event) {
    event.preventDefault();
    this.dragOver = false;
    const file = event.dataTransfer?.files?.[0];
    if (file)
      void this._readFile(file);
  }
  onFile(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (file)
      void this._readFile(file);
    input.value = "";
  }
  _point(event) {
    const rect = this._canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }
  _bindCanvas() {
    const canvas = this._canvas;
    if (!canvas)
      return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2)
      return;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);
    this._ctx = canvas.getContext("2d");
    this._redraw();
  }
  _redraw() {
    const canvas = this._canvas;
    const ctx = this._ctx;
    if (!canvas || !ctx)
      return;
    const rect = canvas.getBoundingClientRect();
    const ratio = rect.width > 0 ? canvas.width / rect.width : 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2.6 * ratio;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = this.penColor;
    ctx.fillStyle = this.penColor;
    for (const stroke of this._strokes) {
      if (!stroke.length)
        continue;
      if (stroke.length === 1) {
        ctx.beginPath();
        ctx.arc(stroke[0].x * ratio, stroke[0].y * ratio, ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.fill();
        continue;
      }
      ctx.beginPath();
      ctx.moveTo(stroke[0].x * ratio, stroke[0].y * ratio);
      for (let index = 1; index < stroke.length; index++) {
        ctx.lineTo(stroke[index].x * ratio, stroke[index].y * ratio);
      }
      ctx.stroke();
    }
  }
  _renderTyped() {
    return __async(this, null, function* () {
      const text = this.typedName.trim();
      const family = this.selectedFont.family;
      try {
        yield document.fonts.load(`80px ${family}`);
      } catch {
      }
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      canvas.height = 420;
      const ctx = canvas.getContext("2d");
      if (!ctx)
        return "";
      ctx.fillStyle = this.penColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      let size = 160;
      ctx.font = `${size}px ${family}`;
      while (ctx.measureText(text).width > canvas.width - 80 && size > 42) {
        size -= 4;
        ctx.font = `${size}px ${family}`;
      }
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      return canvas.toDataURL("image/png");
    });
  }
  _readFile(file) {
    return __async(this, null, function* () {
      if (!file.type.startsWith("image/") || file.size > 8 * 1024 * 1024)
        return;
      const source = yield new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      });
      this.uploadSource = source;
      yield this._refreshUploadPreview();
    });
  }
  _refreshUploadPreview() {
    return __async(this, null, function* () {
      if (!this.uploadSource)
        return;
      this.uploadPreview = yield this._tintSignature(this.uploadSource, this.penColor);
    });
  }
  _tintSignature(src, color) {
    return __async(this, null, function* () {
      const image = yield this._loadImage(src);
      const maxWidth = 1e3;
      const maxHeight = 360;
      const scale = Math.min(maxWidth / image.width, maxHeight / image.height, 1);
      const width = Math.max(1, Math.round(image.width * scale));
      const height = Math.max(1, Math.round(image.height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx)
        return src;
      ctx.drawImage(image, 0, 0, width, height);
      const frame = ctx.getImageData(0, 0, width, height);
      const rgb = this._hexRgb(color);
      const pixels = frame.data;
      for (let index = 0; index < pixels.length; index += 4) {
        const alpha = pixels[index + 3];
        const luminance = pixels[index] * 0.3 + pixels[index + 1] * 0.59 + pixels[index + 2] * 0.11;
        if (alpha < 16 || luminance > 245) {
          pixels[index + 3] = 0;
          continue;
        }
        pixels[index] = rgb[0];
        pixels[index + 1] = rgb[1];
        pixels[index + 2] = rgb[2];
      }
      ctx.putImageData(frame, 0, 0);
      return canvas.toDataURL("image/png");
    });
  }
  _hexRgb(hex) {
    const value = hex.replace("#", "");
    return [
      parseInt(value.slice(0, 2), 16),
      parseInt(value.slice(2, 4), 16),
      parseInt(value.slice(4, 6), 16)
    ];
  }
  _loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("signature image"));
      image.src = src;
    });
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
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.padRef = _t.first);
      }
    }, decls: 23, vars: 12, consts: [["fileInput", ""], ["pad", ""], [1, "flex", "items-center", "justify-between", "px-5", "pt-4"], [1, "text-base", "font-medium", "text-stone-800", "dark:text-stone-100"], ["type", "button", "mat-icon-button", "", "mat-dialog-close", ""], [1, "!pt-2"], [1, "grid", "grid-cols-3", "overflow-hidden", "rounded-md", "border", "border-stone-300", "dark:border-gray-600"], ["type", "button", 1, "py-2", "text-sm", "font-semibold", 3, "ngClass"], [1, "relative", "mt-3", "h-52", "overflow-hidden", "rounded-lg", "border", "border-stone-200", "bg-slate-50", "dark:border-gray-700", "dark:bg-gray-950"], [1, "mt-3", "flex", "items-center", "gap-2"], [1, "mx-1", "h-5", "w-px", "bg-stone-300", "dark:bg-gray-600"], ["type", "button", 1, "h-6", "w-6", "rounded-full", 3, "background", "ring-2", "ring-offset-2", "ring-stone-700"], ["align", "end", 1, "!px-5", "!pb-4"], ["mat-flat-button", "", "color", "primary", 3, "click", "disabled"], ["type", "button", 1, "py-2", "text-sm", "font-semibold", 3, "click", "ngClass"], [1, "mt-3", "flex", "h-52", "flex-col", "items-center", "justify-center", "rounded-lg", "border", "border-dashed", "border-stone-300", "bg-slate-50", "px-4", "text-center", "dark:border-gray-600", "dark:bg-gray-950", 3, "dragover", "dragleave", "drop"], ["type", "file", "accept", "image/png,image/jpeg,image/webp", 1, "hidden", 3, "change"], ["alt", "", 1, "max-h-32", "max-w-full", "object-contain", 3, "src"], ["type", "button", 1, "mt-2", "text-sm", "text-blue-600", "hover:underline", 3, "click"], [1, "text-sm", "text-stone-500"], [1, "my-2", "text-xs", "text-stone-400"], ["type", "button", 1, "rounded-md", "border", "border-blue-500", "px-3", "py-1.5", "text-sm", "font-medium", "text-blue-600", "hover:bg-blue-50", 3, "click"], [1, "block", "h-full", "w-full", "cursor-crosshair", "touch-none"], [1, "flex", "h-full", "items-center", "justify-center", "px-6", "pb-6", "text-5xl", "leading-none", 3, "fontFamily", "color"], [1, "pointer-events-none", "absolute", "inset-x-8", "bottom-10", "border-b", "border-stone-300", "dark:border-gray-600"], [1, "pointer-events-none", "absolute", "inset-x-3", "bottom-2", "flex", "items-center", "justify-between", "text-sm"], [1, "flex-1", "text-center", "text-stone-400"], ["type", "button", 1, "pointer-events-auto", "text-blue-600", "hover:underline", 3, "click"], [1, "block", "h-full", "w-full", "cursor-crosshair", "touch-none", 3, "pointerdown", "pointermove", "pointerup", "pointercancel"], [1, "flex", "h-full", "items-center", "justify-center", "px-6", "pb-6", "text-5xl", "leading-none"], ["type", "text", 1, "mt-3", "w-full", "rounded-md", "border", "border-stone-300", "px-3", "py-2", "text-sm", "dark:border-gray-600", "dark:bg-gray-950", "dark:text-white", 3, "ngModelChange", "placeholder", "ngModel"], [1, "mt-2", "flex", "gap-2", "overflow-x-auto", "pb-1"], ["type", "button", 1, "shrink-0", "rounded-lg", "border", "px-3", "py-2", "text-2xl", "leading-none", 3, "border-blue-600", "bg-blue-50", "border-stone-200", "fontFamily", "color"], ["type", "button", 1, "shrink-0", "rounded-lg", "border", "px-3", "py-2", "text-2xl", "leading-none", 3, "click"], ["type", "button", 1, "h-6", "w-6", "rounded-full", 3, "click"]], template: function SignaturePadDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "h2", 3);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 4);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "mat-dialog-content", 5)(9, "div", 6);
        \u0275\u0275repeaterCreate(10, SignaturePadDialogComponent_For_11_Template, 3, 4, "button", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, SignaturePadDialogComponent_Conditional_12_Template, 5, 3)(13, SignaturePadDialogComponent_Conditional_13_Template, 11, 6, "div", 8)(14, SignaturePadDialogComponent_Conditional_14_Template, 5, 4);
        \u0275\u0275elementStart(15, "div", 9);
        \u0275\u0275element(16, "span", 10);
        \u0275\u0275repeaterCreate(17, SignaturePadDialogComponent_For_18_Template, 2, 11, "button", 11, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "mat-dialog-actions", 12)(20, "button", 13);
        \u0275\u0275listener("click", function SignaturePadDialogComponent_Template_button_click_20_listener() {
          return ctx.save();
        });
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "smartReport.createSignature"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 8, "smartReport.close"));
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.modes);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.mode === "upload" ? 12 : 13);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.mode === "type" ? 14 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.colors);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.canCreate());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 10, "smartReport.signatureCreate"), " ");
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatButton, MatIconButton, MatDialogModule, MatDialogClose, MatDialogActions, MatDialogContent, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\ncanvas[_ngcontent-%COMP%] {\n  touch-action: none;\n}\n/*# sourceMappingURL=signature-pad-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignaturePadDialogComponent, [{
    type: Component,
    args: [{ selector: "signature-pad-dialog", standalone: true, imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule], template: `
        <div class="flex items-center justify-between px-5 pt-4">
            <h2 class="text-base font-medium text-stone-800 dark:text-stone-100">
                {{ 'smartReport.createSignature' | transloco }}
            </h2>
            <button type="button" mat-icon-button mat-dialog-close [attr.aria-label]="'smartReport.close' | transloco">
                <mat-icon>close</mat-icon>
            </button>
        </div>
        <mat-dialog-content class="!pt-2">
            <div class="grid grid-cols-3 overflow-hidden rounded-md border border-stone-300 dark:border-gray-600">
                @for (tab of modes; track tab) {
                    <button
                        type="button"
                        class="py-2 text-sm font-semibold"
                        [ngClass]="
                            mode === tab
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-stone-700 dark:bg-gray-900 dark:text-stone-200'
                        "
                        (click)="mode = tab"
                    >
                        {{ tabLabel(tab) | transloco }}
                    </button>
                }
            </div>

            @if (mode === 'upload') {
                <div
                    class="mt-3 flex h-52 flex-col items-center justify-center rounded-lg border border-dashed border-stone-300 bg-slate-50 px-4 text-center dark:border-gray-600 dark:bg-gray-950"
                    [class.border-blue-400]="dragOver"
                    (dragover)="onDragOver($event)"
                    (dragleave)="dragOver = false"
                    (drop)="onDrop($event)"
                >
                    @if (uploadPreview) {
                        <img [src]="uploadPreview" alt="" class="max-h-32 max-w-full object-contain" />
                        <button type="button" class="mt-2 text-sm text-blue-600 hover:underline" (click)="clear()">
                            {{ 'smartReport.clear' | transloco }}
                        </button>
                    } @else {
                        <p class="text-sm text-stone-500">{{ 'smartReport.signatureDrop' | transloco }}</p>
                        <p class="my-2 text-xs text-stone-400">{{ 'smartReport.signatureOr' | transloco }}</p>
                        <button
                            type="button"
                            class="rounded-md border border-blue-500 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50"
                            (click)="fileInput.click()"
                        >
                            {{ 'smartReport.signatureChoose' | transloco }}
                        </button>
                    }
                </div>
                <input #fileInput type="file" accept="image/png,image/jpeg,image/webp" class="hidden" (change)="onFile($event)" />
            } @else {
                <div class="relative mt-3 h-52 overflow-hidden rounded-lg border border-stone-200 bg-slate-50 dark:border-gray-700 dark:bg-gray-950">
                    @if (mode === 'draw') {
                        <canvas
                            #pad
                            class="block h-full w-full cursor-crosshair touch-none"
                            (pointerdown)="startDrawing($event)"
                            (pointermove)="drawStroke($event)"
                            (pointerup)="stopDrawing($event)"
                            (pointercancel)="stopDrawing($event)"
                        ></canvas>
                    } @else if (typedName.trim()) {
                        <div
                            class="flex h-full items-center justify-center px-6 pb-6 text-5xl leading-none"
                            [style.fontFamily]="selectedFont.family"
                            [style.color]="penColor"
                        >
                            {{ typedName.trim() }}
                        </div>
                    }
                    <div class="pointer-events-none absolute inset-x-8 bottom-10 border-b border-stone-300 dark:border-gray-600"></div>
                    <div class="pointer-events-none absolute inset-x-3 bottom-2 flex items-center justify-between text-sm">
                        <span class="flex-1 text-center text-stone-400">
                            @if (mode === 'draw' && !hasDrawing) {
                                {{ 'smartReport.signatureDrawHint' | transloco }}
                            }
                            @if (mode === 'type' && !typedName.trim()) {
                                {{ 'smartReport.signatureTypeHint' | transloco }}
                            }
                        </span>
                        <button type="button" class="pointer-events-auto text-blue-600 hover:underline" (click)="clear()">
                            {{ 'smartReport.clear' | transloco }}
                        </button>
                    </div>
                </div>
            }

            @if (mode === 'type') {
                <input
                    type="text"
                    class="mt-3 w-full rounded-md border border-stone-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-950 dark:text-white"
                    [placeholder]="'smartReport.signatureName' | transloco"
                    [(ngModel)]="typedName"
                />
                <div class="mt-2 flex gap-2 overflow-x-auto pb-1">
                    @for (font of fonts; track font.id) {
                        <button
                            type="button"
                            class="shrink-0 rounded-lg border px-3 py-2 text-2xl leading-none"
                            [class.border-blue-600]="selectedFont.id === font.id"
                            [class.bg-blue-50]="selectedFont.id === font.id"
                            [class.border-stone-200]="selectedFont.id !== font.id"
                            [style.fontFamily]="font.family"
                            [style.color]="penColor"
                            (click)="selectedFont = font"
                        >
                            {{ previewName() }}
                        </button>
                    }
                </div>
            }

            <div class="mt-3 flex items-center gap-2">
                <span class="mx-1 h-5 w-px bg-stone-300 dark:bg-gray-600"></span>
                @for (color of colors; track color.id) {
                    <button
                        type="button"
                        class="h-6 w-6 rounded-full"
                        [style.background]="color.value"
                        [class.ring-2]="penColor === color.value"
                        [class.ring-offset-2]="penColor === color.value"
                        [class.ring-stone-700]="penColor === color.value"
                        [attr.aria-label]="color.labelKey | transloco"
                        (click)="setColor(color.value)"
                    ></button>
                }
            </div>
        </mat-dialog-content>
        <mat-dialog-actions align="end" class="!px-5 !pb-4">
            <button mat-flat-button color="primary" [disabled]="!canCreate()" (click)="save()">
                {{ 'smartReport.signatureCreate' | transloco }}
            </button>
        </mat-dialog-actions>
    `, styles: ["/* angular:styles/component:scss;473df48689e2646bbaebc7cce99aa8d6cf648283d4755759b8be42190a51d148;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/smart-batch/report-builder/signature-pad-dialog/signature-pad-dialog.component.ts */\ncanvas {\n  touch-action: none;\n}\n/*# sourceMappingURL=signature-pad-dialog.component.css.map */\n"] }]
  }], null, { padRef: [{
    type: ViewChild,
    args: ["pad"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignaturePadDialogComponent, { className: "SignaturePadDialogComponent", filePath: "src/app/modules/smart-batch/report-builder/signature-pad-dialog/signature-pad-dialog.component.ts", lineNumber: 180 });
})();

// src/app/modules/smart-batch/report-builder/report-builder-add-consult-dialog.component.ts
var _forTrack02 = ($index, $item) => $item._id;
function ReportBuilderAddConsultDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
function ReportBuilderAddConsultDialogComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReport.addConsultEmpty"), " ");
  }
}
function ReportBuilderAddConsultDialogComponent_Conditional_16_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r2.description);
  }
}
function ReportBuilderAddConsultDialogComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 12);
    \u0275\u0275listener("click", function ReportBuilderAddConsultDialogComponent_Conditional_16_For_2_Template_button_click_1_listener() {
      const feature_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.pick(feature_r2));
    });
    \u0275\u0275elementStart(2, "mat-icon", 13);
    \u0275\u0275text(3, "api");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14)(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ReportBuilderAddConsultDialogComponent_Conditional_16_For_2_Conditional_7_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(feature_r2.nameES || feature_r2.name || feature_r2.code);
    \u0275\u0275advance();
    \u0275\u0275conditional(feature_r2.description ? 7 : -1);
  }
}
function ReportBuilderAddConsultDialogComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 8);
    \u0275\u0275repeaterCreate(1, ReportBuilderAddConsultDialogComponent_Conditional_16_For_2_Template, 8, 2, "li", null, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filtered());
  }
}
var ReportBuilderAddConsultDialogComponent = class _ReportBuilderAddConsultDialogComponent {
  constructor() {
    this._batch = inject(SmartBatchService);
    this._ref = inject(MatDialogRef);
    this.data = inject(MAT_DIALOG_DATA);
    this.loading = signal(true);
    this.query = signal("");
    this.features = signal([]);
    this.filtered = computed(() => {
      const q = this.query().trim().toLowerCase();
      let list = filterFeaturesForCountry(this.features(), this.data.country);
      if (q) {
        list = list.filter((feature) => {
          const haystack = `${feature.name ?? ""} ${feature.nameES ?? ""} ${feature.code ?? ""} ${feature.description ?? ""}`.toLowerCase();
          return haystack.includes(q);
        });
      }
      return list.slice(0, 80);
    });
  }
  ngOnInit() {
    this._batch.getAvailableFeatures(this.data.country).subscribe({
      next: (response) => {
        const exclude = new Set(this.data.excludeFeatureIds);
        const list = (response.data ?? []).filter((feature) => feature._id && !exclude.has(feature._id));
        this.features.set(list);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.features.set([]);
      }
    });
  }
  onQueryChange(value) {
    this.query.set(value);
  }
  pick(feature) {
    this._ref.close(feature);
  }
  close() {
    this._ref.close(void 0);
  }
  static {
    this.\u0275fac = function ReportBuilderAddConsultDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportBuilderAddConsultDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportBuilderAddConsultDialogComponent, selectors: [["report-builder-add-consult-dialog"]], decls: 21, vars: 14, consts: [["mat-dialog-title", "", 1, "!text-lg", "!font-semibold"], [1, "!max-h-[min(70vh,32rem)]"], [1, "mb-3", "text-sm", "text-stone-500", "dark:text-stone-400"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [1, "flex", "justify-center", "py-8"], [1, "py-6", "text-center", "text-sm", "italic", "text-stone-400"], [1, "mt-2", "max-h-[min(50vh,24rem)]", "space-y-1", "overflow-y-auto", "pr-1"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["diameter", "32"], ["type", "button", 1, "flex", "w-full", "items-start", "gap-3", "rounded-xl", "border", "border-stone-200", "px-3", "py-2.5", "text-left", "transition", "hover:border-indigo-300", "hover:bg-indigo-50/50", "dark:border-gray-700", "dark:hover:border-indigo-500/40", "dark:hover:bg-indigo-950/20", 3, "click"], [1, "mt-0.5", "shrink-0", "!text-[20px]", "text-stone-400"], [1, "min-w-0"], [1, "block", "text-sm", "font-medium", "text-stone-900", "dark:text-stone-100"], [1, "mt-0.5", "block", "line-clamp-2", "text-xs", "text-stone-500"]], template: function ReportBuilderAddConsultDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-dialog-content", 1)(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label");
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 4);
        \u0275\u0275listener("ngModelChange", function ReportBuilderAddConsultDialogComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.onQueryChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-icon", 5);
        \u0275\u0275text(13, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, ReportBuilderAddConsultDialogComponent_Conditional_14_Template, 2, 0, "div", 6)(15, ReportBuilderAddConsultDialogComponent_Conditional_15_Template, 3, 3, "p", 7)(16, ReportBuilderAddConsultDialogComponent_Conditional_16_Template, 3, 0, "ul", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-dialog-actions", 9)(18, "button", 10);
        \u0275\u0275listener("click", function ReportBuilderAddConsultDialogComponent_Template_button_click_18_listener() {
          return ctx.close();
        });
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, "smartReport.addConsultTitle"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "smartReport.addConsultBody"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "smartReport.addConsultSearch"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.query());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 14 : ctx.filtered().length === 0 ? 15 : 16);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 12, "smartReport.addConsultCancel"), " ");
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatDialogModule,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportBuilderAddConsultDialogComponent, [{
    type: Component,
    args: [{
      selector: "report-builder-add-consult-dialog",
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        TranslocoModule
      ],
      template: `
        <h2 mat-dialog-title class="!text-lg !font-semibold">
            {{ 'smartReport.addConsultTitle' | transloco }}
        </h2>
        <mat-dialog-content class="!max-h-[min(70vh,32rem)]">
            <p class="mb-3 text-sm text-stone-500 dark:text-stone-400">
                {{ 'smartReport.addConsultBody' | transloco }}
            </p>
            <mat-form-field appearance="outline" class="w-full">
                <mat-label>{{ 'smartReport.addConsultSearch' | transloco }}</mat-label>
                <input matInput [ngModel]="query()" (ngModelChange)="onQueryChange($event)" />
                <mat-icon matSuffix>search</mat-icon>
            </mat-form-field>

            @if (loading()) {
                <div class="flex justify-center py-8">
                    <mat-spinner diameter="32"></mat-spinner>
                </div>
            } @else if (filtered().length === 0) {
                <p class="py-6 text-center text-sm italic text-stone-400">
                    {{ 'smartReport.addConsultEmpty' | transloco }}
                </p>
            } @else {
                <ul class="mt-2 max-h-[min(50vh,24rem)] space-y-1 overflow-y-auto pr-1">
                    @for (feature of filtered(); track feature._id) {
                        <li>
                            <button
                                type="button"
                                class="flex w-full items-start gap-3 rounded-xl border border-stone-200 px-3 py-2.5 text-left transition hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-gray-700 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-950/20"
                                (click)="pick(feature)"
                            >
                                <mat-icon class="mt-0.5 shrink-0 !text-[20px] text-stone-400">api</mat-icon>
                                <span class="min-w-0">
                                    <span class="block text-sm font-medium text-stone-900 dark:text-stone-100">{{
                                        feature.nameES || feature.name || feature.code
                                    }}</span>
                                    @if (feature.description) {
                                        <span class="mt-0.5 block line-clamp-2 text-xs text-stone-500">{{
                                            feature.description
                                        }}</span>
                                    }
                                </span>
                            </button>
                        </li>
                    }
                </ul>
            }
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button mat-button type="button" (click)="close()">
                {{ 'smartReport.addConsultCancel' | transloco }}
            </button>
        </mat-dialog-actions>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportBuilderAddConsultDialogComponent, { className: "ReportBuilderAddConsultDialogComponent", filePath: "src/app/modules/smart-batch/report-builder/report-builder-add-consult-dialog.component.ts", lineNumber: 89 });
})();

// src/app/modules/smart-batch/report-builder/layout-text-dialog/layout-text-dialog.component.ts
var LayoutTextDialogComponent = class _LayoutTextDialogComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this.data = inject(MAT_DIALOG_DATA);
    this.draft = this.data.value ?? "";
  }
  save() {
    this._dialogRef.close(this.draft);
  }
  static {
    this.\u0275fac = function LayoutTextDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LayoutTextDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutTextDialogComponent, selectors: [["layout-text-dialog"]], decls: 20, vars: 19, consts: [[1, "flex", "items-center", "justify-between", "px-5", "pt-4"], [1, "text-base", "font-medium", "text-stone-800", "dark:text-stone-100"], ["type", "button", "mat-icon-button", "", "mat-dialog-close", ""], [1, "!pt-2"], ["rows", "10", 1, "min-h-52", "w-full", "resize-y", "rounded-lg", "border", "border-stone-200", "bg-slate-50", "px-3", "py-3", "text-sm", "leading-relaxed", "text-stone-800", "dark:border-gray-700", "dark:bg-gray-950", "dark:text-stone-100", 3, "ngModelChange", "placeholder", "maxlength", "ngModel"], [1, "mt-2", "text-right", "text-[11px]", "text-stone-400"], ["align", "end", 1, "!px-5", "!pb-4"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function LayoutTextDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "mat-dialog-content", 3)(9, "textarea", 4);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275twoWayListener("ngModelChange", function LayoutTextDialogComponent_Template_textarea_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.draft, $event) || (ctx.draft = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 5);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-dialog-actions", 6)(14, "button", 7);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 8);
        \u0275\u0275listener("click", function LayoutTextDialogComponent_Template_button_click_17_listener() {
          return ctx.save();
        });
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 9, ctx.data.titleKey), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 11, "visitaGuide.cancel"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 13, ctx.data.placeholderKey))("maxlength", ctx.data.maxLength);
        \u0275\u0275twoWayProperty("ngModel", ctx.draft);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.draft.length, " / ", ctx.data.maxLength, "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 15, "visitaGuide.cancel"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 17, "visitaGuide.layoutSaveText"), " ");
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, MatButtonModule, MatButton, MatIconButton, MatDialogModule, MatDialogClose, MatDialogActions, MatDialogContent, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutTextDialogComponent, [{
    type: Component,
    args: [{
      selector: "layout-text-dialog",
      standalone: true,
      imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule],
      template: `
        <div class="flex items-center justify-between px-5 pt-4">
            <h2 class="text-base font-medium text-stone-800 dark:text-stone-100">
                {{ data.titleKey | transloco }}
            </h2>
            <button type="button" mat-icon-button mat-dialog-close [attr.aria-label]="'visitaGuide.cancel' | transloco">
                <mat-icon>close</mat-icon>
            </button>
        </div>
        <mat-dialog-content class="!pt-2">
            <textarea
                class="min-h-52 w-full resize-y rounded-lg border border-stone-200 bg-slate-50 px-3 py-3 text-sm leading-relaxed text-stone-800 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-100"
                rows="10"
                [placeholder]="data.placeholderKey | transloco"
                [maxlength]="data.maxLength"
                [(ngModel)]="draft"
            ></textarea>
            <p class="mt-2 text-right text-[11px] text-stone-400">{{ draft.length }} / {{ data.maxLength }}</p>
        </mat-dialog-content>
        <mat-dialog-actions align="end" class="!px-5 !pb-4">
            <button mat-button mat-dialog-close type="button">
                {{ 'visitaGuide.cancel' | transloco }}
            </button>
            <button mat-flat-button color="primary" type="button" (click)="save()">
                {{ 'visitaGuide.layoutSaveText' | transloco }}
            </button>
        </mat-dialog-actions>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutTextDialogComponent, { className: "LayoutTextDialogComponent", filePath: "src/app/modules/smart-batch/report-builder/layout-text-dialog/layout-text-dialog.component.ts", lineNumber: 49 });
})();

// src/app/modules/smart-batch/batch-config-steps.util.ts
function batchStepFeatureId(step) {
  if (!step?.appFeature)
    return void 0;
  return typeof step.appFeature === "object" ? step.appFeature._id : step.appFeature;
}
function batchStepLabel(step) {
  const feature = step.appFeature;
  if (typeof feature === "object" && feature) {
    return (feature.nameES || feature.name || feature.code || "").trim() || `Paso ${step.sequence}`;
  }
  return `Paso ${step.sequence}`;
}
function appendFeatureToBatchSteps(steps, feature) {
  const id = feature._id;
  if (!id || steps.some((step) => batchStepFeatureId(step) === id)) {
    return steps;
  }
  const next = [
    ...steps,
    {
      appFeature: id,
      sequence: 0,
      enabled: true,
      parameterDefaults: {},
      inputFieldMapping: {},
      outputFieldsToKeep: [],
      maxRetries: 3,
      retryDelayBaseSeconds: 4,
      timeoutSeconds: 30
    }
  ];
  return renumberBatchSteps(next);
}
function renumberBatchSteps(steps) {
  const enabled = orderedBatchSteps(steps);
  const disabled = (steps ?? []).filter((step) => step.enabled === false);
  const renumbered = enabled.map((step, index) => __spreadProps(__spreadValues({}, step), { sequence: index + 1 }));
  return [...renumbered, ...disabled];
}
function orderedBatchSteps(steps) {
  return [...steps ?? []].filter((step) => step.enabled !== false).sort((a, b) => a.sequence - b.sequence);
}

// src/app/modules/smart-batch/batch-step-sequence.util.ts
var buildStepSequenceMap = (previousSteps, nextSteps) => {
  const map = /* @__PURE__ */ new Map();
  const nextByFeature = /* @__PURE__ */ new Map();
  for (const step of orderedBatchSteps(nextSteps)) {
    const id = batchStepFeatureId(step);
    if (id)
      nextByFeature.set(id, step.sequence);
  }
  for (const step of orderedBatchSteps(previousSteps)) {
    const id = batchStepFeatureId(step);
    if (!id)
      continue;
    const nextSeq = nextByFeature.get(id);
    if (nextSeq != null && nextSeq !== step.sequence) {
      map.set(step.sequence, nextSeq);
    }
  }
  return map;
};
var remapResultsPath = (path, seqMap) => {
  if (!path || !seqMap.size)
    return path;
  return path.replace(/results\.(\d+)/g, (_match, raw) => {
    const next = seqMap.get(Number(raw));
    return `results.${next ?? raw}`;
  });
};
var remapReportSectionPaths = (sections, seqMap) => {
  if (!seqMap.size)
    return sections;
  return sections.map((section) => __spreadProps(__spreadValues({}, section), {
    dataPath: remapResultsPath(section.dataPath, seqMap),
    ruleField: remapResultsPath(section.ruleField, seqMap)
  }));
};
var remapResultsRecord = (results, seqMap) => {
  if (!results || !seqMap.size)
    return __spreadValues({}, results ?? {});
  const next = {};
  for (const [rawKey, value] of Object.entries(results)) {
    const oldSeq = Number(rawKey);
    const newSeq = Number.isFinite(oldSeq) ? seqMap.get(oldSeq) ?? oldSeq : rawKey;
    if (next[newSeq] === void 0) {
      next[newSeq] = value;
    }
  }
  return next;
};
var ensureResultSlots = (results, steps) => {
  const next = __spreadValues({}, results ?? {});
  for (const step of orderedBatchSteps(steps)) {
    const key = step.sequence;
    if (next[key] === void 0 && next[String(key)] === void 0) {
      next[key] = {};
    }
  }
  return next;
};

export {
  SignaturePadDialogComponent,
  ReportBuilderAddConsultDialogComponent,
  LayoutTextDialogComponent,
  batchStepFeatureId,
  batchStepLabel,
  appendFeatureToBatchSteps,
  orderedBatchSteps,
  buildStepSequenceMap,
  remapReportSectionPaths,
  remapResultsRecord,
  ensureResultSlots
};
//# sourceMappingURL=chunk-S7R2AAUY.js.map
