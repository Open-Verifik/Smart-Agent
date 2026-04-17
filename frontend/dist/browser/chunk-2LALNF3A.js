import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-QNPXLBXJ.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-RWPBVZ63.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-ZS5MQPSO.js";
import "./chunk-A6T5DVED.js";
import "./chunk-GMB4P7VL.js";
import "./chunk-B4CPLDBC.js";
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
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-VHMFS3U6.js";
import "./chunk-R4RYJRMO.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  MatButton,
  MatButtonModule,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YTOBX75K.js";
import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-tools/smart-reduce/smart-reduce.component.ts
var _c0 = ["fileInput"];
var _c1 = ["canvas"];
var _forTrack0 = ($index, $item) => $item.value;
function SmartReduceComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.errorMessage), " ");
  }
}
function SmartReduceComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function SmartReduceComponent_Conditional_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.triggerFileInput());
    })("drop", function SmartReduceComponent_Conditional_21_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDrop($event));
    })("dragover", function SmartReduceComponent_Conditional_21_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragOver($event));
    });
    \u0275\u0275elementStart(1, "input", 16, 0);
    \u0275\u0275listener("change", function SmartReduceComponent_Conditional_21_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 18)(5, "mat-icon", 19);
    \u0275\u0275text(6, "cloud_upload");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 20);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 21);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 2, "smartReduce.dropZone"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 4, "smartReduce.selectImage"), " ");
  }
}
function SmartReduceComponent_Conditional_22_Conditional_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "smartReduce.compressionRatio"), ": ", ctx_r0.getCompressionRatio(), "% ");
  }
}
function SmartReduceComponent_Conditional_22_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 32)(2, "h3", 33);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34)(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SmartReduceComponent_Conditional_22_Conditional_13_Conditional_8_Template, 3, 4, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 37)(10, "button", 38);
    \u0275\u0275listener("click", function SmartReduceComponent_Conditional_22_Conditional_13_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.download());
    });
    \u0275\u0275elementStart(11, "mat-icon", 39);
    \u0275\u0275text(12, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 40);
    \u0275\u0275listener("click", function SmartReduceComponent_Conditional_22_Conditional_13_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.resizeAgain());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 40);
    \u0275\u0275listener("click", function SmartReduceComponent_Conditional_22_Conditional_13_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reset());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "smartReduce.resizeComplete"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" ", ctx_r0.getTargetPixels().w, " \xD7 ", ctx_r0.getTargetPixels().h, " \u2014 ", ctx_r0.processedSizeKb, " KB ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getCompressionRatio() > 0 ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, "smartReduce.download"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 12, "smartReduce.resizeAgain"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 14, "smartReduce.resizeNew"), " ");
  }
}
function SmartReduceComponent_Conditional_22_Conditional_14_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r6 = ctx.$implicit;
    \u0275\u0275property("value", u_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, u_r6.label));
  }
}
function SmartReduceComponent_Conditional_22_Conditional_14_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r7 = ctx.$implicit;
    \u0275\u0275property("value", m_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, m_r7.label));
  }
}
function SmartReduceComponent_Conditional_22_Conditional_14_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r8 = ctx.$implicit;
    \u0275\u0275property("value", f_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r8.label);
  }
}
function SmartReduceComponent_Conditional_22_Conditional_14_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-slider", 57)(5, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function SmartReduceComponent_Conditional_22_Conditional_14_Conditional_42_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.quality, $event) || (ctx_r0.quality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "smartReduce.quality"));
    \u0275\u0275advance(2);
    \u0275\u0275property("displayWith", ctx_r0.formatQuality)("disabled", ctx_r0.state === "processing");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.quality);
  }
}
function SmartReduceComponent_Conditional_22_Conditional_14_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function SmartReduceComponent_Conditional_22_Conditional_14_Conditional_43_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.backgroundColor, $event) || (ctx_r0.backgroundColor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartReduce.background"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.backgroundColor);
    \u0275\u0275property("disabled", ctx_r0.state === "processing");
  }
}
function SmartReduceComponent_Conditional_22_Conditional_14_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 60);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartReduce.resizing"), " ");
  }
}
function SmartReduceComponent_Conditional_22_Conditional_14_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartReduce.resize"), " ");
  }
}
function SmartReduceComponent_Conditional_22_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 41)(2, "h3", 42);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 43)(6, "mat-form-field", 44)(7, "mat-label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SmartReduceComponent_Conditional_22_Conditional_14_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.targetWidth, $event) || (ctx_r0.targetWidth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SmartReduceComponent_Conditional_22_Conditional_14_Template_input_ngModelChange_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onWidthChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-form-field", 44)(12, "mat-label");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SmartReduceComponent_Conditional_22_Conditional_14_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.targetHeight, $event) || (ctx_r0.targetHeight = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SmartReduceComponent_Conditional_22_Conditional_14_Template_input_ngModelChange_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onHeightChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 44)(17, "mat-label");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-select", 46);
    \u0275\u0275twoWayListener("ngModelChange", function SmartReduceComponent_Conditional_22_Conditional_14_Template_mat_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.sizeUnit, $event) || (ctx_r0.sizeUnit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function SmartReduceComponent_Conditional_22_Conditional_14_Template_mat_select_selectionChange_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onUnitChange());
    });
    \u0275\u0275repeaterCreate(21, SmartReduceComponent_Conditional_22_Conditional_14_For_22_Template, 3, 4, "mat-option", 47, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "mat-slide-toggle", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SmartReduceComponent_Conditional_22_Conditional_14_Template_mat_slide_toggle_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.aspectLocked, $event) || (ctx_r0.aspectLocked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "label", 49);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-button-toggle-group", 50);
    \u0275\u0275twoWayListener("ngModelChange", function SmartReduceComponent_Conditional_22_Conditional_14_Template_mat_button_toggle_group_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.resizeMode, $event) || (ctx_r0.resizeMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(33, SmartReduceComponent_Conditional_22_Conditional_14_For_34_Template, 3, 4, "mat-button-toggle", 47, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "label", 49);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-button-toggle-group", 51);
    \u0275\u0275twoWayListener("ngModelChange", function SmartReduceComponent_Conditional_22_Conditional_14_Template_mat_button_toggle_group_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.outputFormat, $event) || (ctx_r0.outputFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(40, SmartReduceComponent_Conditional_22_Conditional_14_For_41_Template, 2, 2, "mat-button-toggle", 47, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, SmartReduceComponent_Conditional_22_Conditional_14_Conditional_42_Template, 6, 6, "div", 52)(43, SmartReduceComponent_Conditional_22_Conditional_14_Conditional_43_Template, 5, 5, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 54)(45, "button", 55);
    \u0275\u0275listener("click", function SmartReduceComponent_Conditional_22_Conditional_14_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.resize());
    });
    \u0275\u0275template(46, SmartReduceComponent_Conditional_22_Conditional_14_Conditional_46_Template, 3, 3)(47, SmartReduceComponent_Conditional_22_Conditional_14_Conditional_47_Template, 2, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 28, "smartReduce.chooseSize"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 30, "smartReduce.width"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.targetWidth);
    \u0275\u0275property("disabled", ctx_r0.state === "processing");
    \u0275\u0275advance();
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 32, "smartReduce.height"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.targetHeight);
    \u0275\u0275property("disabled", ctx_r0.state === "processing");
    \u0275\u0275advance();
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 34, "smartReduce.sizeUnit"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.sizeUnit);
    \u0275\u0275property("disabled", ctx_r0.state === "processing");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.sizeUnits);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.aspectLocked);
    \u0275\u0275property("disabled", ctx_r0.state === "processing");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 36, ctx_r0.aspectLocked ? "smartReduce.aspectLock" : "smartReduce.aspectUnlock"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(29, 38, "smartReduce.stretch"), " / ", \u0275\u0275pipeBind1(30, 40, "smartReduce.crop"), " / ", \u0275\u0275pipeBind1(31, 42, "smartReduce.fit"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.resizeMode);
    \u0275\u0275property("disabled", ctx_r0.state === "processing");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.resizeModes);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 44, "smartReduce.format"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.outputFormat);
    \u0275\u0275property("disabled", ctx_r0.state === "processing");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.outputFormats);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.outputFormat === "jpeg" ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.outputFormat === "png" || ctx_r0.outputFormat === "gif" ? 43 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.state === "processing");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.state === "processing" ? 46 : 47);
  }
}
function SmartReduceComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275element(2, "img", 24);
    \u0275\u0275elementStart(3, "div", 25)(4, "p", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "button", 28);
    \u0275\u0275listener("click", function SmartReduceComponent_Conditional_22_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reset());
    });
    \u0275\u0275elementStart(9, "mat-icon", 29);
    \u0275\u0275text(10, "swap_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, SmartReduceComponent_Conditional_22_Conditional_13_Template, 21, 16, "div", 30)(14, SmartReduceComponent_Conditional_22_Conditional_14_Template, 48, 46, "div", 31);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.sourceUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.sourceFile.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.sourceFile.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r0.sourceWidth, " \xD7 ", ctx_r0.sourceHeight, " \u2014 ", ctx_r0.sourceSizeKb, " KB ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "smartReduce.changeImage"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.state === "done" && ctx_r0.processedBlob ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.state === "configuring" || ctx_r0.state === "processing" ? 14 : -1);
  }
}
var ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/bmp"];
var ACCEPTED_EXT = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];
var DPI = 96;
var CM_PER_INCH = 2.54;
var SmartReduceComponent = class _SmartReduceComponent {
  constructor() {
    this._cdr = inject(ChangeDetectorRef);
    this.sourceFile = null;
    this.sourceUrl = null;
    this.sourceWidth = 0;
    this.sourceHeight = 0;
    this.sourceSizeKb = 0;
    this.targetWidth = 0;
    this.targetHeight = 0;
    this.sizeUnit = "pixels";
    this.aspectLocked = true;
    this.resizeMode = "fit";
    this.outputFormat = "jpeg";
    this.quality = 90;
    this.backgroundColor = "#ffffff";
    this.processedBlob = null;
    this.processedSizeKb = 0;
    this.isProcessing = false;
    this.isComplete = false;
    this.errorMessage = null;
    this.state = "idle";
    this.sizeUnits = [
      { value: "percent", label: "smartReduce.unitPercent" },
      { value: "pixels", label: "smartReduce.unitPixels" },
      { value: "cm", label: "smartReduce.unitCm" },
      { value: "inches", label: "smartReduce.unitInches" }
    ];
    this.resizeModes = [
      { value: "stretch", label: "smartReduce.stretch" },
      { value: "crop", label: "smartReduce.crop" },
      { value: "fit", label: "smartReduce.fit" }
    ];
    this.outputFormats = [
      { value: "jpeg", label: "JPG" },
      { value: "png", label: "PNG" },
      { value: "gif", label: "GIF" }
    ];
    this.formatQuality = (v) => v + "%";
  }
  onFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (file)
      this.loadFile(file);
    input.value = "";
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer?.files?.[0];
    if (file)
      this.loadFile(file);
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  loadFile(file) {
    this.errorMessage = null;
    const ext = "." + (file.name.split(".").pop()?.toLowerCase() ?? "");
    const validType = ACCEPTED_TYPES.includes(file.type);
    const validExt = ACCEPTED_EXT.includes(ext);
    if (!validType && !validExt) {
      this.errorMessage = "smartReduce.unsupportedFormat";
      this._cdr.markForCheck();
      return;
    }
    this.revokeSourceUrl();
    this.sourceFile = file;
    this.sourceUrl = URL.createObjectURL(file);
    this.processedBlob = null;
    this.isComplete = false;
    this.state = "configuring";
    const img = new Image();
    img.onload = () => {
      this.sourceWidth = img.naturalWidth;
      this.sourceHeight = img.naturalHeight;
      this.sourceSizeKb = Math.round(file.size / 1024);
      this.targetWidth = this.sourceWidth;
      this.targetHeight = this.sourceHeight;
      this._cdr.markForCheck();
    };
    img.onerror = () => {
      this.errorMessage = "smartReduce.unsupportedFormat";
      this._cdr.markForCheck();
    };
    img.src = this.sourceUrl;
  }
  revokeSourceUrl() {
    if (this.sourceUrl) {
      URL.revokeObjectURL(this.sourceUrl);
      this.sourceUrl = null;
    }
  }
  onWidthChange() {
    if (this.aspectLocked && this.sourceWidth > 0 && this.sourceHeight > 0) {
      const ratio = this.sourceHeight / this.sourceWidth;
      this.targetHeight = Math.round(this.targetWidth * ratio);
    }
  }
  onHeightChange() {
    if (this.aspectLocked && this.sourceWidth > 0 && this.sourceHeight > 0) {
      const ratio = this.sourceWidth / this.sourceHeight;
      this.targetWidth = Math.round(this.targetHeight * ratio);
    }
  }
  onUnitChange() {
    if (this.sizeUnit === "percent") {
      this.targetWidth = 100;
      this.targetHeight = 100;
    } else if (this.sizeUnit === "pixels") {
      this.targetWidth = this.sourceWidth;
      this.targetHeight = this.sourceHeight;
    } else {
      this.targetWidth = Math.round(this.sourceWidth / DPI * CM_PER_INCH);
      this.targetHeight = Math.round(this.sourceHeight / DPI * CM_PER_INCH);
    }
    this._cdr.markForCheck();
  }
  getTargetPixels() {
    if (this.sizeUnit === "pixels") {
      return { w: this.targetWidth, h: this.targetHeight };
    }
    if (this.sizeUnit === "percent") {
      return {
        w: Math.round(this.sourceWidth * this.targetWidth / 100),
        h: Math.round(this.sourceHeight * this.targetHeight / 100)
      };
    }
    const pxPerUnit = this.sizeUnit === "inches" ? DPI : DPI / CM_PER_INCH;
    return {
      w: Math.round(this.targetWidth * pxPerUnit),
      h: Math.round(this.targetHeight * pxPerUnit)
    };
  }
  resize() {
    if (!this.sourceUrl || !this.sourceFile)
      return;
    this.isProcessing = true;
    this.state = "processing";
    this.errorMessage = null;
    this._cdr.markForCheck();
    const img = new Image();
    img.onload = () => {
      try {
        const { w, h } = this.getTargetPixels();
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx)
          throw new Error("Canvas not supported");
        let drawW = w;
        let drawH = h;
        let sx = 0;
        let sy = 0;
        let sWidth = img.naturalWidth;
        let sHeight = img.naturalHeight;
        if (this.resizeMode === "fit") {
          const scale = Math.min(w / img.naturalWidth, h / img.naturalHeight);
          drawW = Math.round(img.naturalWidth * scale);
          drawH = Math.round(img.naturalHeight * scale);
        } else if (this.resizeMode === "crop") {
          const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
          sWidth = Math.round(w / scale);
          sHeight = Math.round(h / scale);
          sx = (img.naturalWidth - sWidth) / 2;
          sy = (img.naturalHeight - sHeight) / 2;
        }
        canvas.width = drawW;
        canvas.height = drawH;
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, drawW, drawH);
        if (this.resizeMode === "crop") {
          ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, drawW, drawH);
        } else {
          ctx.drawImage(img, 0, 0, drawW, drawH);
        }
        const mime = this.outputFormat === "jpeg" ? "image/jpeg" : this.outputFormat === "png" ? "image/png" : "image/gif";
        const quality = this.outputFormat === "jpeg" ? this.quality / 100 : void 0;
        canvas.toBlob((blob) => {
          if (blob) {
            this.processedBlob = blob;
            this.processedSizeKb = Math.round(blob.size / 1024);
            this.isComplete = true;
            this.state = "done";
          } else {
            this.state = "configuring";
          }
          this.isProcessing = false;
          this._cdr.markForCheck();
        }, mime, quality);
      } catch (err) {
        this.errorMessage = "Error processing image";
        this.isProcessing = false;
        this.state = "configuring";
        this._cdr.markForCheck();
      }
    };
    img.onerror = () => {
      this.errorMessage = "Error loading image";
      this.isProcessing = false;
      this.state = "configuring";
      this._cdr.markForCheck();
    };
    img.src = this.sourceUrl;
  }
  download() {
    if (!this.processedBlob || !this.sourceFile)
      return;
    const ext = this.outputFormat === "jpeg" ? ".jpg" : "." + this.outputFormat;
    const baseName = this.sourceFile.name.replace(/\.[^.]+$/, "");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(this.processedBlob);
    a.download = baseName + "_resized" + ext;
    a.click();
    URL.revokeObjectURL(a.href);
  }
  reset() {
    this.revokeSourceUrl();
    this.sourceFile = null;
    this.sourceUrl = null;
    this.sourceWidth = 0;
    this.sourceHeight = 0;
    this.sourceSizeKb = 0;
    this.targetWidth = 0;
    this.targetHeight = 0;
    this.processedBlob = null;
    this.processedSizeKb = 0;
    this.isProcessing = false;
    this.isComplete = false;
    this.state = "idle";
    this.errorMessage = null;
    this._cdr.markForCheck();
  }
  resizeAgain() {
    this.processedBlob = null;
    this.processedSizeKb = 0;
    this.isComplete = false;
    this.state = "configuring";
    this._cdr.markForCheck();
  }
  getCompressionRatio() {
    if (this.sourceSizeKb <= 0)
      return 0;
    return Math.round((1 - this.processedSizeKb / this.sourceSizeKb) * 100);
  }
  triggerFileInput() {
    this.fileInput?.nativeElement?.click();
  }
  ngOnDestroy() {
    this.revokeSourceUrl();
  }
  static {
    this.\u0275fac = function SmartReduceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartReduceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartReduceComponent, selectors: [["smart-reduce"]], viewQuery: function SmartReduceComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
      }
    }, decls: 23, vars: 12, consts: [["fileInput", ""], [1, "flex", "flex-col", "flex-auto", "min-w-0", "bg-gray-50", "dark:bg-gray-900", "min-h-screen"], [1, "flex", "flex-col", "w-full", "max-w-3xl", "mx-auto", "p-6", "md:p-8"], [1, "flex", "flex-col", "py-6", "mb-8", "border-b", "border-gray-200", "dark:border-gray-800"], [1, "flex", "items-center", "gap-3", "mb-1"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-xl", "bg-blue-100", "dark:bg-blue-900/30"], [1, "text-blue-600", "dark:text-blue-400", "icon-size-5"], [1, "flex-1", "min-w-0"], [1, "flex", "items-center", "gap-2", "flex-wrap"], [1, "text-2xl", "font-bold", "tracking-tight", "text-gray-900", "dark:text-white"], [1, "inline-flex", "items-center", "gap-1", "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-gray-100", "dark:bg-gray-700", "text-gray-500", "dark:text-gray-400"], [1, "icon-size-3.5"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-0.5"], [1, "mb-6", "p-4", "rounded-xl", "bg-red-50", "dark:bg-red-900/20", "border", "border-red-200", "dark:border-red-800", "text-red-700", "dark:text-red-400"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "dark:border-gray-700", "overflow-hidden", "cursor-pointer", "hover:border-blue-300", "dark:hover:border-blue-700", "transition-colors"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "dark:border-gray-700", "overflow-hidden", "cursor-pointer", "hover:border-blue-300", "dark:hover:border-blue-700", "transition-colors", 3, "click", "drop", "dragover"], ["type", "file", "accept", ".jpg,.jpeg,.png,.gif,.bmp,image/jpeg,image/png,image/gif,image/bmp", 1, "hidden", 3, "change"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "px-6"], [1, "flex", "items-center", "justify-center", "w-20", "h-20", "rounded-full", "bg-gray-100", "dark:bg-gray-700", "mb-5"], [1, "icon-size-10", "text-gray-400", "dark:text-gray-500"], [1, "text-lg", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1"], [1, "flex", "items-center", "justify-between", "gap-4", "p-4", "rounded-2xl", "bg-white", "dark:bg-gray-800", "shadow-sm", "border", "border-gray-200", "dark:border-gray-700", "mb-6"], [1, "flex", "items-center", "gap-4", "min-w-0"], [1, "w-16", "h-16", "object-cover", "rounded-lg", "flex-shrink-0", 3, "src", "alt"], [1, "min-w-0"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-white", "truncate"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], ["mat-stroked-button", "", 1, "flex-shrink-0", 3, "click"], [1, "icon-size-4", "mr-1"], [1, "rounded-2xl", "shadow-sm", "border", "border-green-200", "dark:border-green-800", "bg-green-50/50", "dark:bg-green-900/10", "overflow-hidden", "mb-6"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-sm", "border", "border-gray-200", "dark:border-gray-700", "overflow-hidden"], [1, "p-6"], [1, "text-lg", "font-semibold", "text-green-800", "dark:text-green-300", "mb-4"], [1, "flex", "flex-wrap", "items-center", "gap-3", "mb-4"], [1, "text-sm", "text-gray-600", "dark:text-gray-400"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold", "bg-green-200", "dark:bg-green-800/50", "text-green-800", "dark:text-green-300"], [1, "flex", "flex-wrap", "gap-3"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "mr-2", "icon-size-5"], ["mat-stroked-button", "", 3, "click"], [1, "p-6", "space-y-6"], [1, "text-lg", "font-semibold", "text-gray-900", "dark:text-white"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "gap-4"], [1, "w-full", "fuse-mat-dense", 3, "subscriptSizing"], ["matInput", "", "type", "number", "min", "1", 3, "ngModelChange", "ngModel", "disabled"], [3, "ngModelChange", "selectionChange", "ngModel", "disabled"], [3, "value"], [3, "ngModelChange", "ngModel", "disabled"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-2"], [1, "!rounded-lg", 3, "ngModelChange", "ngModel", "disabled"], [1, "!rounded-lg", "mb-4", 3, "ngModelChange", "ngModel", "disabled"], [1, "flex", "items-center", "gap-4"], [1, "flex", "items-center", "gap-2"], [1, "pt-2"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-lg", "!px-6", 3, "click", "disabled"], [1, "text-sm", "text-gray-600", "dark:text-gray-400", "min-w-[60px]"], ["min", "1", "max", "100", "step", "1", "discrete", "", 1, "flex-1", "max-w-[200px]", 3, "displayWith", "disabled"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], ["type", "color", 1, "w-10", "h-10", "rounded", "border", "border-gray-300", "dark:border-gray-600", "cursor-pointer", 3, "ngModelChange", "ngModel", "disabled"], ["diameter", "20", 1, "inline-block", "mr-2"]], template: function SmartReduceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "mat-icon", 6);
        \u0275\u0275text(6, "photo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "h2", 9);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 10)(13, "mat-icon", 11);
        \u0275\u0275text(14, "shield");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "p", 12);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(20, SmartReduceComponent_Conditional_20_Template, 3, 3, "div", 13)(21, SmartReduceComponent_Conditional_21_Template, 13, 6, "div", 14)(22, SmartReduceComponent_Conditional_22_Template, 15, 11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "smartReduce.title"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 8, "smartReduce.privacyBadge"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 10, "smartReduce.subtitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMessage ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.state === "idle" ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.sourceFile && ctx.sourceUrl && ctx.state !== "idle" ? 22 : -1);
      }
    }, dependencies: [
      CommonModule,
      TranslocoModule,
      TranslocoPipe,
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      MinValidator,
      NgModel,
      MatButtonModule,
      MatButton,
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
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSlideToggleModule,
      MatSlideToggle,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle
    ], styles: ["\n\n/*# sourceMappingURL=smart-reduce.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartReduceComponent, [{
    type: Component,
    args: [{ selector: "smart-reduce", standalone: true, imports: [
      CommonModule,
      TranslocoModule,
      FormsModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatSliderModule,
      MatProgressSpinnerModule,
      MatSlideToggleModule,
      MatButtonToggleModule
    ], template: `<div class="flex flex-col flex-auto min-w-0 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="flex flex-col w-full max-w-3xl mx-auto p-6 md:p-8">
        <!-- Header -->
        <div class="flex flex-col py-6 mb-8 border-b border-gray-200 dark:border-gray-800">
            <div class="flex items-center gap-3 mb-1">
                <div
                    class="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30"
                >
                    <mat-icon class="text-blue-600 dark:text-blue-400 icon-size-5">photo</mat-icon>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {{ 'smartReduce.title' | transloco }}
                        </h2>
                        <span
                            class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                        >
                            <mat-icon class="icon-size-3.5">shield</mat-icon>
                            {{ 'smartReduce.privacyBadge' | transloco }}
                        </span>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        {{ 'smartReduce.subtitle' | transloco }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Error -->
        @if (errorMessage) {
            <div
                class="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
            >
                {{ errorMessage | transloco }}
            </div>
        }

        <!-- Step 1: Drop zone (idle) -->
        @if (state === 'idle') {
            <div
                class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                (click)="triggerFileInput()"
                (drop)="onDrop($event)"
                (dragover)="onDragOver($event)"
            >
                <input
                    #fileInput
                    type="file"
                    accept=".jpg,.jpeg,.png,.gif,.bmp,image/jpeg,image/png,image/gif,image/bmp"
                    (change)="onFileSelected($event)"
                    class="hidden"
                />
                <div class="flex flex-col items-center justify-center py-16 px-6">
                    <div
                        class="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 mb-5"
                    >
                        <mat-icon class="icon-size-10 text-gray-400 dark:text-gray-500"
                            >cloud_upload</mat-icon
                        >
                    </div>
                    <p class="text-lg font-medium text-gray-700 dark:text-gray-300">
                        {{ 'smartReduce.dropZone' | transloco }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {{ 'smartReduce.selectImage' | transloco }}
                    </p>
                </div>
            </div>
        }

        <!-- Step 1 (continued): Image preview bar + Step 2 or Step 3 -->
        @if (sourceFile && sourceUrl && state !== 'idle') {
            <!-- Compact image info row with Change image -->
            <div
                class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 mb-6"
            >
                <div class="flex items-center gap-4 min-w-0">
                    <img
                        [src]="sourceUrl"
                        [alt]="sourceFile.name"
                        class="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div class="min-w-0">
                        <p class="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {{ sourceFile.name }}
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                            {{ sourceWidth }} \xD7 {{ sourceHeight }} \u2014 {{ sourceSizeKb }} KB
                        </p>
                    </div>
                </div>
                <button mat-stroked-button (click)="reset()" class="flex-shrink-0">
                    <mat-icon class="icon-size-4 mr-1">swap_horiz</mat-icon>
                    {{ 'smartReduce.changeImage' | transloco }}
                </button>
            </div>

            <!-- Step 3: Result card (done) - shown instead of options -->
            @if (state === 'done' && processedBlob) {
                <div
                    class="rounded-2xl shadow-sm border border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10 overflow-hidden mb-6"
                >
                    <div class="p-6">
                        <h3 class="text-lg font-semibold text-green-800 dark:text-green-300 mb-4">
                            {{ 'smartReduce.resizeComplete' | transloco }}
                        </h3>
                        <div class="flex flex-wrap items-center gap-3 mb-4">
                            <span class="text-sm text-gray-600 dark:text-gray-400">
                                {{ getTargetPixels().w }} \xD7 {{ getTargetPixels().h }} \u2014
                                {{ processedSizeKb }} KB
                            </span>
                            @if (getCompressionRatio() > 0) {
                                <span
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-200 dark:bg-green-800/50 text-green-800 dark:text-green-300"
                                >
                                    {{ 'smartReduce.compressionRatio' | transloco }}:
                                    {{ getCompressionRatio() }}%
                                </span>
                            }
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <button mat-flat-button color="primary" (click)="download()">
                                <mat-icon class="mr-2 icon-size-5">download</mat-icon>
                                {{ 'smartReduce.download' | transloco }}
                            </button>
                            <button mat-stroked-button (click)="resizeAgain()">
                                {{ 'smartReduce.resizeAgain' | transloco }}
                            </button>
                            <button mat-stroked-button (click)="reset()">
                                {{ 'smartReduce.resizeNew' | transloco }}
                            </button>
                        </div>
                    </div>
                </div>
            }

            <!-- Step 2: Options panel (configuring or processing) -->
            @if (state === 'configuring' || state === 'processing') {
                <div
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                    <div class="p-6 space-y-6">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            {{ 'smartReduce.chooseSize' | transloco }}
                        </h3>

                        <!-- Dimensions -->
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <mat-form-field class="w-full fuse-mat-dense" [subscriptSizing]="'dynamic'">
                                <mat-label>{{ 'smartReduce.width' | transloco }}</mat-label>
                                <input
                                    matInput
                                    type="number"
                                    min="1"
                                    [(ngModel)]="targetWidth"
                                    (ngModelChange)="onWidthChange()"
                                    [disabled]="state === 'processing'"
                                />
                            </mat-form-field>
                            <mat-form-field class="w-full fuse-mat-dense" [subscriptSizing]="'dynamic'">
                                <mat-label>{{ 'smartReduce.height' | transloco }}</mat-label>
                                <input
                                    matInput
                                    type="number"
                                    min="1"
                                    [(ngModel)]="targetHeight"
                                    (ngModelChange)="onHeightChange()"
                                    [disabled]="state === 'processing'"
                                />
                            </mat-form-field>
                            <mat-form-field class="w-full fuse-mat-dense" [subscriptSizing]="'dynamic'">
                                <mat-label>{{ 'smartReduce.sizeUnit' | transloco }}</mat-label>
                                <mat-select
                                    [(ngModel)]="sizeUnit"
                                    (selectionChange)="onUnitChange()"
                                    [disabled]="state === 'processing'"
                                >
                                    @for (u of sizeUnits; track u.value) {
                                        <mat-option [value]="u.value">{{ u.label | transloco }}</mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>

                        <mat-slide-toggle [(ngModel)]="aspectLocked" [disabled]="state === 'processing'">
                            {{ (aspectLocked ? 'smartReduce.aspectLock' : 'smartReduce.aspectUnlock') | transloco }}
                        </mat-slide-toggle>

                        <!-- Resize mode -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {{ 'smartReduce.stretch' | transloco }} / {{ 'smartReduce.crop' | transloco }} /
                                {{ 'smartReduce.fit' | transloco }}
                            </label>
                            <mat-button-toggle-group
                                [(ngModel)]="resizeMode"
                                [disabled]="state === 'processing'"
                                class="!rounded-lg"
                            >
                                @for (m of resizeModes; track m.value) {
                                    <mat-button-toggle [value]="m.value">{{
                                        m.label | transloco
                                    }}</mat-button-toggle>
                                }
                            </mat-button-toggle-group>
                        </div>

                        <!-- Output format + quality/background -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                {{ 'smartReduce.format' | transloco }}
                            </label>
                            <mat-button-toggle-group
                                [(ngModel)]="outputFormat"
                                [disabled]="state === 'processing'"
                                class="!rounded-lg mb-4"
                            >
                                @for (f of outputFormats; track f.value) {
                                    <mat-button-toggle [value]="f.value">{{ f.label }}</mat-button-toggle>
                                }
                            </mat-button-toggle-group>

                            @if (outputFormat === 'jpeg') {
                                <div class="flex items-center gap-4">
                                    <span class="text-sm text-gray-600 dark:text-gray-400 min-w-[60px]">{{
                                        'smartReduce.quality' | transloco
                                    }}</span>
                                    <mat-slider
                                        min="1"
                                        max="100"
                                        step="1"
                                        discrete
                                        [displayWith]="formatQuality"
                                        [disabled]="state === 'processing'"
                                        class="flex-1 max-w-[200px]"
                                    >
                                        <input matSliderThumb [(ngModel)]="quality" />
                                    </mat-slider>
                                </div>
                            }

                            @if (outputFormat === 'png' || outputFormat === 'gif') {
                                <div class="flex items-center gap-2">
                                    <span class="text-sm text-gray-600 dark:text-gray-400">{{
                                        'smartReduce.background' | transloco
                                    }}</span>
                                    <input
                                        type="color"
                                        [(ngModel)]="backgroundColor"
                                        class="w-10 h-10 rounded border border-gray-300 dark:border-gray-600 cursor-pointer"
                                        [disabled]="state === 'processing'"
                                    />
                                </div>
                            }
                        </div>

                        <!-- Resize action -->
                        <div class="pt-2">
                            <button
                                mat-flat-button
                                color="primary"
                                (click)="resize()"
                                [disabled]="state === 'processing'"
                                class="!rounded-lg !px-6"
                            >
                                @if (state === 'processing') {
                                    <mat-spinner diameter="20" class="inline-block mr-2"></mat-spinner>
                                    {{ 'smartReduce.resizing' | transloco }}
                                } @else {
                                    {{ 'smartReduce.resize' | transloco }}
                                }
                            </button>
                        </div>
                    </div>
                </div>
            }
        }
    </div>
</div>
`, styles: ["/* src/app/modules/smart-tools/smart-reduce/smart-reduce.component.scss */\n/*# sourceMappingURL=smart-reduce.component.css.map */\n"] }]
  }], null, { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], canvasRef: [{
    type: ViewChild,
    args: ["canvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartReduceComponent, { className: "SmartReduceComponent", filePath: "src/app/modules/smart-tools/smart-reduce/smart-reduce.component.ts", lineNumber: 52 });
})();
export {
  SmartReduceComponent
};
//# sourceMappingURL=chunk-2LALNF3A.js.map
