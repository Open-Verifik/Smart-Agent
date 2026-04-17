import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-ZS5MQPSO.js";
import {
  SmartBatchService
} from "./chunk-6YNO6YW5.js";
import {
  SmartReportService
} from "./chunk-NIQX74WQ.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-EPB35CWV.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-6KHU2J3U.js";
import {
  Router,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import "./chunk-L4JZMXIC.js";
import "./chunk-2W5F3UIW.js";
import "./chunk-TX3AVWPC.js";
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
  DatePipe,
  MatButton,
  MatButtonModule,
  MatIconButton,
  UpperCasePipe,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YTOBX75K.js";
import "./chunk-KTESVR3Q.js";

// src/app/modules/smart-batch/smart-batch.component.ts
function _forTrack0($index, $item) {
  let tmp_0_0;
  return (tmp_0_0 = $item._id) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : $item.id;
}
var _forTrack1 = ($index, $item) => $item._id;
function SmartBatchComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function SmartBatchComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createConfiguration());
    });
    \u0275\u0275elementStart(1, "mat-icon", 11);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartBatchLanding.createConfiguration"), " ");
  }
}
function SmartBatchComponent_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 11);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "smartBatchLanding.createTemplateFirstHint"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "smartBatchLanding.createTemplate"), " ");
  }
}
function SmartBatchComponent_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function SmartBatchComponent_Conditional_18_Conditional_1_Template_button_click_0_listener() {
      let tmp_3_0;
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createTemplate((tmp_3_0 = (tmp_3_0 = ctx_r1.configurations()[0]._id) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ctx_r1.configurations()[0].id) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ""));
    });
    \u0275\u0275elementStart(1, "mat-icon", 11);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartBatchLanding.createTemplate"), " ");
  }
}
function SmartBatchComponent_Conditional_18_Conditional_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function SmartBatchComponent_Conditional_18_Conditional_2_For_10_Template_button_click_0_listener() {
      let tmp_14_0;
      const config_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.createTemplate((tmp_14_0 = (tmp_14_0 = config_r5._id) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : config_r5.id) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : ""));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const config_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", config_r5.name, " ");
  }
}
function SmartBatchComponent_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 13)(1, "mat-icon", 11);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "mat-icon", 14);
    \u0275\u0275text(6, "arrow_drop_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-menu", null, 0);
    \u0275\u0275repeaterCreate(9, SmartBatchComponent_Conditional_18_Conditional_2_For_10_Template, 2, 1, "button", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const createTemplateMenu_r6 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", createTemplateMenu_r6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartBatchLanding.createTemplate"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.configurations());
  }
}
function SmartBatchComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartBatchComponent_Conditional_18_Conditional_0_Template, 6, 6, "button", 12)(1, SmartBatchComponent_Conditional_18_Conditional_1_Template, 5, 3, "button", 9)(2, SmartBatchComponent_Conditional_18_Conditional_2_Template, 11, 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.configurations().length === 0 ? 0 : ctx_r1.configurations().length === 1 ? 1 : 2);
  }
}
function SmartBatchComponent_Conditional_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartBatchLanding.loadingConfigurations"), " ");
  }
}
function SmartBatchComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 22)(2, "mat-icon", 23);
    \u0275\u0275text(3, "layers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 24);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 25);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 26);
    \u0275\u0275listener("click", function SmartBatchComponent_Conditional_19_Conditional_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.createConfiguration());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "smartBatchLanding.noConfigurations"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "smartBatchLanding.noConfigurationsDesc"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "smartBatchLanding.createFirstConfiguration"), " ");
  }
}
function SmartBatchComponent_Conditional_19_Conditional_2_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartBatchLanding.inactive"), " ");
  }
}
function SmartBatchComponent_Conditional_19_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function SmartBatchComponent_Conditional_19_Conditional_2_For_2_Template_div_click_0_listener() {
      let tmp_13_0;
      const config_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDashboard((tmp_13_0 = (tmp_13_0 = config_r9._id) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : config_r9.id) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : ""));
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "button", 30);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("click", function SmartBatchComponent_Conditional_19_Conditional_2_For_2_Template_button_click_2_listener($event) {
      let tmp_13_0;
      const config_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editConfiguration((tmp_13_0 = (tmp_13_0 = config_r9._id) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : config_r9.id) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "", $event));
    });
    \u0275\u0275elementStart(4, "mat-icon", 31);
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function SmartBatchComponent_Conditional_19_Conditional_2_For_2_Template_button_click_6_listener($event) {
      let tmp_13_0;
      const config_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteConfiguration((tmp_13_0 = (tmp_13_0 = config_r9._id) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : config_r9.id) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "", $event));
    });
    \u0275\u0275elementStart(8, "mat-icon", 31);
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 33)(11, "div", 34)(12, "span", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "h3", 36);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 37)(18, "span", 38);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "uppercase");
    \u0275\u0275pipe(21, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, SmartBatchComponent_Conditional_19_Conditional_2_For_2_Conditional_22_Template, 3, 3, "span", 39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "p", 40);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 41)(27, "div")(28, "span", 42);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 43);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div")(34, "span", 42);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 44);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const config_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 12, "smartBatchLanding.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 14, "smartBatchLanding.delete"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.getCountryFlag(config_r9.country));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", config_r9.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(20, 16, config_r9.inputFormat), " \u2192 ", \u0275\u0275pipeBind1(21, 18, config_r9.outputFormat), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!config_r9.isActive ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", config_r9.description || \u0275\u0275pipeBind1(25, 20, "smartBatchLanding.noDescription"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 22, "smartBatchLanding.steps"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(config_r9.steps.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 24, "smartBatchLanding.strategy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(config_r9.mergeStrategy.replace("-", " "));
  }
}
function SmartBatchComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, SmartBatchComponent_Conditional_19_Conditional_2_For_2_Template, 39, 26, "div", 27, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.configurations());
  }
}
function SmartBatchComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartBatchComponent_Conditional_19_Conditional_0_Template, 5, 3, "div", 17)(1, SmartBatchComponent_Conditional_19_Conditional_1_Template, 13, 9, "div", 18)(2, SmartBatchComponent_Conditional_19_Conditional_2_Template, 3, 0, "div", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isLoading() ? 0 : ctx_r1.configurations().length === 0 ? 1 : 2);
  }
}
function SmartBatchComponent_Conditional_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartBatchLanding.loadingTemplates"), " ");
  }
}
function SmartBatchComponent_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 22)(2, "mat-icon", 23);
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 24);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 45);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 46);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "smartBatchLanding.noTemplates"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "smartBatchLanding.noTemplatesDesc"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "smartBatchLanding.noTemplatesHint"), " ");
  }
}
function SmartBatchComponent_Conditional_20_Conditional_2_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", template_r11.pageSize, " ");
  }
}
function SmartBatchComponent_Conditional_20_Conditional_2_For_2_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const template_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getConfigName(template_r11.batchConfiguration), " ");
  }
}
function SmartBatchComponent_Conditional_20_Conditional_2_For_2_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartBatchLanding.standalone"), " ");
  }
}
function SmartBatchComponent_Conditional_20_Conditional_2_For_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const template_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, template_r11.createdAt, "medium"), " ");
  }
}
function SmartBatchComponent_Conditional_20_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 29)(2, "button", 30);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("click", function SmartBatchComponent_Conditional_20_Conditional_2_For_2_Template_button_click_2_listener($event) {
      const template_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openTemplateEditor(template_r11, $event));
    });
    \u0275\u0275elementStart(4, "mat-icon", 31);
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function SmartBatchComponent_Conditional_20_Conditional_2_For_2_Template_button_click_6_listener($event) {
      let tmp_13_0;
      const template_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteTemplate((tmp_13_0 = template_r11._id) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : "", $event));
    });
    \u0275\u0275elementStart(8, "mat-icon", 31);
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "h3", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 49)(13, "span", 38);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, SmartBatchComponent_Conditional_20_Conditional_2_For_2_Conditional_16_Template, 2, 1, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 50);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 41)(21, "div")(22, "span", 42);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 43);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div")(28, "span", 42);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 51);
    \u0275\u0275template(32, SmartBatchComponent_Conditional_20_Conditional_2_For_2_Conditional_32_Template, 1, 1)(33, SmartBatchComponent_Conditional_20_Conditional_2_For_2_Conditional_33_Template, 2, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, SmartBatchComponent_Conditional_20_Conditional_2_For_2_Conditional_34_Template, 3, 4, "p", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_19_0;
    const template_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 11, "smartBatchLanding.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 13, "smartBatchLanding.delete"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", template_r11.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 15, (tmp_15_0 = template_r11.pdfEngine) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : "pdfkit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(template_r11.pageSize ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", template_r11.description || \u0275\u0275pipeBind1(19, 17, "smartBatchLanding.noDescription"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 19, "smartBatchLanding.sections"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_19_0 = template_r11.sections == null ? null : template_r11.sections.length) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 21, "smartBatchLanding.linkedTo"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(template_r11.batchConfiguration ? 32 : 33);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(template_r11.createdAt ? 34 : -1);
  }
}
function SmartBatchComponent_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, SmartBatchComponent_Conditional_20_Conditional_2_For_2_Template, 35, 23, "div", 47, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.templates());
  }
}
function SmartBatchComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SmartBatchComponent_Conditional_20_Conditional_0_Template, 5, 3, "div", 17)(1, SmartBatchComponent_Conditional_20_Conditional_1_Template, 13, 9, "div", 18)(2, SmartBatchComponent_Conditional_20_Conditional_2_Template, 3, 0, "div", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isLoadingTemplates() ? 0 : ctx_r1.templates().length === 0 ? 1 : 2);
  }
}
var SmartBatchComponent = class _SmartBatchComponent {
  constructor() {
    this._smartBatchService = inject(SmartBatchService);
    this._smartReportService = inject(SmartReportService);
    this._router = inject(Router);
    this._transloco = inject(TranslocoService);
    this.configurations = this._smartBatchService.configurations;
    this.isLoading = this._smartBatchService.isLoading;
    this.activeTab = signal("configurations");
    this.templates = this._smartReportService.templates;
    this.isLoadingTemplates = this._smartReportService.isLoading;
  }
  ngOnInit() {
    this._smartBatchService.getConfigurations().subscribe({
      next: () => {
      },
      error: (err) => console.error("[SmartBatch] getConfigurations error", err)
    });
    this._smartReportService.getTemplates().subscribe({
      error: (err) => console.error("[SmartBatch] getTemplates error", err)
    });
  }
  setActiveTab(tab) {
    this.activeTab.set(tab);
  }
  createConfiguration() {
    this._router.navigate(["smart-batch/create"]);
  }
  createTemplate(configId) {
    if (!configId)
      return;
    this._router.navigate(["smart-batch", configId, "report-builder"]);
  }
  deleteConfiguration(id, event) {
    event.stopPropagation();
    if (confirm("Are you sure you want to delete this configuration?")) {
      this._smartBatchService.deleteConfiguration(id).subscribe();
    }
  }
  deleteTemplate(id, event) {
    event.stopPropagation();
    const message = this._transloco.translate("smartBatchLanding.deleteConfirmation");
    if (confirm(message)) {
      this._smartReportService.deleteTemplate(id).subscribe();
    }
  }
  openTemplateEditor(template, event) {
    event.stopPropagation();
    const configId = template.batchConfiguration;
    if (!configId) {
      alert("This template is not linked to a configuration. Open it from a configuration's report builder.");
      return;
    }
    const templateId = template._id ?? template.id ?? "";
    if (!templateId)
      return;
    this._router.navigate(["smart-batch", configId, "report-builder", templateId]);
  }
  getConfigName(configId) {
    const config = this.configurations().find((c) => (c._id ?? c.id) === configId);
    return config?.name ?? configId;
  }
  editConfiguration(id, event) {
    event.stopPropagation();
    this._router.navigate(["smart-batch/edit", id]);
  }
  openDashboard(id) {
    const targetUrl = `/smart-batch/${id}`;
    if (!id) {
      console.warn("[SmartBatch] openDashboard: id is falsy, skipping navigation");
      return;
    }
    this._router.navigateByUrl(targetUrl).then((success) => {
      if (!success) {
        console.warn("[SmartBatch] navigateByUrl returned false - route may not have matched");
      }
    }, (err) => {
      console.error("[SmartBatch] navigateByUrl failed", { targetUrl, err });
    });
  }
  getCountryFlag(country) {
    const map = {
      colombia: "\u{1F1E8}\u{1F1F4}",
      col: "\u{1F1E8}\u{1F1F4}",
      co: "\u{1F1E8}\u{1F1F4}",
      "united states": "\u{1F1FA}\u{1F1F8}",
      usa: "\u{1F1FA}\u{1F1F8}",
      us: "\u{1F1FA}\u{1F1F8}",
      peru: "\u{1F1F5}\u{1F1EA}",
      pe: "\u{1F1F5}\u{1F1EA}",
      world: "\u{1F310}",
      mexico: "\u{1F1F2}\u{1F1FD}",
      mx: "\u{1F1F2}\u{1F1FD}",
      brazil: "\u{1F1E7}\u{1F1F7}",
      br: "\u{1F1E7}\u{1F1F7}",
      chile: "\u{1F1E8}\u{1F1F1}",
      cl: "\u{1F1E8}\u{1F1F1}",
      argentina: "\u{1F1E6}\u{1F1F7}",
      ar: "\u{1F1E6}\u{1F1F7}",
      ecuador: "\u{1F1EA}\u{1F1E8}",
      ec: "\u{1F1EA}\u{1F1E8}",
      venezuela: "\u{1F1FB}\u{1F1EA}",
      ve: "\u{1F1FB}\u{1F1EA}",
      bolivia: "\u{1F1E7}\u{1F1F4}",
      bo: "\u{1F1E7}\u{1F1F4}",
      uruguay: "\u{1F1FA}\u{1F1FE}",
      uy: "\u{1F1FA}\u{1F1FE}",
      paraguay: "\u{1F1F5}\u{1F1FE}",
      py: "\u{1F1F5}\u{1F1FE}",
      panama: "\u{1F1F5}\u{1F1E6}",
      pa: "\u{1F1F5}\u{1F1E6}",
      "costa rica": "\u{1F1E8}\u{1F1F7}",
      cr: "\u{1F1E8}\u{1F1F7}",
      guatemala: "\u{1F1EC}\u{1F1F9}",
      gt: "\u{1F1EC}\u{1F1F9}",
      honduras: "\u{1F1ED}\u{1F1F3}",
      hn: "\u{1F1ED}\u{1F1F3}",
      "el salvador": "\u{1F1F8}\u{1F1FB}",
      sv: "\u{1F1F8}\u{1F1FB}",
      "dominican republic": "\u{1F1E9}\u{1F1F4}",
      "rep\xFAblica dominicana": "\u{1F1E9}\u{1F1F4}",
      "republica dominicana": "\u{1F1E9}\u{1F1F4}",
      do: "\u{1F1E9}\u{1F1F4}",
      canada: "\u{1F1E8}\u{1F1E6}",
      ca: "\u{1F1E8}\u{1F1E6}",
      spain: "\u{1F1EA}\u{1F1F8}",
      es: "\u{1F1EA}\u{1F1F8}"
    };
    const key = (country || "").trim().toLowerCase();
    const flag = map[key] ?? "\u{1F3F3}\uFE0F";
    return flag;
  }
  static {
    this.\u0275fac = function SmartBatchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartBatchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmartBatchComponent, selectors: [["smart-batch"]], decls: 21, vars: 17, consts: [["createTemplateMenu", "matMenu"], [1, "flex", "flex-col", "w-full", "h-full", "bg-[#f8fafc]", "dark:bg-[#0f172a]", "p-6", "gap-6"], [1, "text-2xl", "font-bold", "tracking-tight", "text-slate-900", "dark:text-white"], [1, "mt-1", "text-slate-500", "dark:text-slate-400"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "!rounded-lg", 3, "change", "value"], ["value", "configurations"], ["value", "templates"], [1, "flex", "gap-2"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-lg", "!px-6", "!py-2"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-lg", "!px-6", "!py-2", 3, "click"], [1, "mr-2", "icon-size-5"], ["mat-flat-button", "", "color", "primary", "disabled", "", 1, "!rounded-lg", "!px-6", "!py-2", 3, "matTooltip"], ["mat-flat-button", "", "color", "primary", 1, "!rounded-lg", "!px-6", "!py-2", 3, "matMenuTriggerFor"], [1, "ml-2", "icon-size-5"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "flex-1"], [1, "flex", "flex-col", "items-center", "justify-center", "flex-1", "border-2", "border-dashed", "border-slate-200", "dark:border-slate-800", "rounded-2xl", "p-12", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["diameter", "48"], [1, "mt-4", "text-slate-500"], [1, "w-20", "h-20", "bg-slate-50", "dark:bg-slate-900", "rounded-full", "flex", "items-center", "justify-center", "mb-6"], [1, "text-slate-400", "icon-size-10"], [1, "text-lg", "font-medium", "text-slate-900", "dark:text-white"], [1, "text-slate-500", "dark:text-slate-400", "max-w-sm", "mt-2", "mb-6"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "group", "relative", "bg-white", "dark:bg-slate-900", "rounded-2xl", "border", "border-slate-200", "dark:border-slate-800", "p-6", "transition-all", "hover:shadow-md", "hover:border-blue-500/50", "cursor-pointer"], [1, "group", "relative", "bg-white", "dark:bg-slate-900", "rounded-2xl", "border", "border-slate-200", "dark:border-slate-800", "p-6", "transition-all", "hover:shadow-md", "hover:border-blue-500/50", "cursor-pointer", 3, "click"], [1, "absolute", "top-4", "right-4", "opacity-0", "group-hover:opacity-100", "transition-opacity", "flex", "gap-1"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "icon-size-5"], ["mat-icon-button", "", "color", "warn", 3, "click", "matTooltip"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "flex", "items-center", "gap-3"], [1, "text-2xl"], [1, "font-semibold", "text-slate-900", "dark:text-white", "line-clamp-1"], [1, "flex", "items-center", "gap-2", "mt-0.5"], [1, "text-xs", "font-medium", "px-2", "py-0.5", "rounded-full", "bg-slate-100", "dark:bg-slate-800", "text-slate-600", "dark:text-slate-400"], [1, "text-xs", "font-medium", "px-2", "py-0.5", "rounded-full", "bg-red-100", "dark:bg-red-900/30", "text-red-600", "dark:text-red-400"], [1, "text-sm", "text-slate-500", "dark:text-slate-400", "mb-6", "line-clamp-2", "min-h-[2.5rem]"], [1, "grid", "grid-cols-2", "gap-4", "pt-4", "border-t", "border-slate-100", "dark:border-slate-800"], [1, "block", "text-xs", "text-slate-400", "font-medium", "uppercase", "tracking-wider"], [1, "text-lg", "font-semibold", "text-slate-900", "dark:text-white"], [1, "text-sm", "font-medium", "text-slate-700", "dark:text-slate-300", "capitalize", "truncate"], [1, "text-slate-500", "dark:text-slate-400", "max-w-sm", "mt-2"], [1, "text-slate-400", "dark:text-slate-500", "text-sm", "max-w-sm", "mt-2"], [1, "group", "relative", "bg-white", "dark:bg-slate-900", "rounded-2xl", "border", "border-slate-200", "dark:border-slate-800", "p-6", "transition-all", "hover:shadow-md", "hover:border-blue-500/50"], [1, "font-semibold", "text-slate-900", "dark:text-white", "line-clamp-1", "pr-16"], [1, "flex", "flex-wrap", "gap-2", "mt-2"], [1, "text-sm", "text-slate-500", "dark:text-slate-400", "mt-4", "mb-4", "line-clamp-2", "min-h-[2.5rem]"], [1, "text-sm", "font-medium", "text-slate-700", "dark:text-slate-300", "truncate", "block"], [1, "text-xs", "text-slate-400", "mt-3"]], template: function SmartBatchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div")(2, "h1", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "mat-button-toggle-group", 5);
        \u0275\u0275listener("change", function SmartBatchComponent_Template_mat_button_toggle_group_change_9_listener($event) {
          return ctx.setActiveTab($event.value);
        });
        \u0275\u0275elementStart(10, "mat-button-toggle", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-button-toggle", 7);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 8);
        \u0275\u0275template(17, SmartBatchComponent_Conditional_17_Template, 5, 3, "button", 9)(18, SmartBatchComponent_Conditional_18_Template, 3, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(19, SmartBatchComponent_Conditional_19_Template, 3, 1)(20, SmartBatchComponent_Conditional_20_Template, 3, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "smartBatchLanding.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 11, "smartBatchLanding.subtitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.activeTab());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "smartBatchLanding.configurationsTab"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, "smartBatchLanding.reportTemplatesTab"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.activeTab() === "configurations" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "templates" ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "configurations" ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.activeTab() === "templates" ? 20 : -1);
      }
    }, dependencies: [
      CommonModule,
      UpperCasePipe,
      DatePipe,
      TranslocoModule,
      TranslocoPipe,
      RouterModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartBatchComponent, [{
    type: Component,
    args: [{ selector: "smart-batch", standalone: true, imports: [
      CommonModule,
      TranslocoModule,
      RouterModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatMenuModule,
      MatIconModule,
      MatTooltipModule,
      MatProgressSpinnerModule
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex flex-col w-full h-full bg-[#f8fafc] dark:bg-[#0f172a] p-6 gap-6">
    <!-- Header -->
    <div>
        <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {{ 'smartBatchLanding.title' | transloco }}
        </h1>
        <p class="mt-1 text-slate-500 dark:text-slate-400">
            {{ 'smartBatchLanding.subtitle' | transloco }}
        </p>
    </div>

    <!-- Toggle + Actions -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <mat-button-toggle-group
            [value]="activeTab()"
            (change)="setActiveTab($event.value)"
            class="!rounded-lg"
        >
            <mat-button-toggle value="configurations">{{
                'smartBatchLanding.configurationsTab' | transloco
            }}</mat-button-toggle>
            <mat-button-toggle value="templates">{{
                'smartBatchLanding.reportTemplatesTab' | transloco
            }}</mat-button-toggle>
        </mat-button-toggle-group>
        <div class="flex gap-2">
            @if (activeTab() === 'configurations') {
                <button
                    mat-flat-button
                    color="primary"
                    (click)="createConfiguration()"
                    class="!rounded-lg !px-6 !py-2"
                >
                    <mat-icon class="mr-2 icon-size-5">add</mat-icon>
                    {{ 'smartBatchLanding.createConfiguration' | transloco }}
                </button>
            }
            @if (activeTab() === 'templates') {
                @if (configurations().length === 0) {
                    <button
                        mat-flat-button
                        color="primary"
                        disabled
                        [matTooltip]="'smartBatchLanding.createTemplateFirstHint' | transloco"
                        class="!rounded-lg !px-6 !py-2"
                    >
                        <mat-icon class="mr-2 icon-size-5">add</mat-icon>
                        {{ 'smartBatchLanding.createTemplate' | transloco }}
                    </button>
                } @else if (configurations().length === 1) {
                    <button
                        mat-flat-button
                        color="primary"
                        (click)="createTemplate(configurations()[0]._id ?? configurations()[0].id ?? '')"
                        class="!rounded-lg !px-6 !py-2"
                    >
                        <mat-icon class="mr-2 icon-size-5">add</mat-icon>
                        {{ 'smartBatchLanding.createTemplate' | transloco }}
                    </button>
                } @else {
                    <button
                        mat-flat-button
                        color="primary"
                        [matMenuTriggerFor]="createTemplateMenu"
                        class="!rounded-lg !px-6 !py-2"
                    >
                        <mat-icon class="mr-2 icon-size-5">add</mat-icon>
                        {{ 'smartBatchLanding.createTemplate' | transloco }}
                        <mat-icon class="ml-2 icon-size-5">arrow_drop_down</mat-icon>
                    </button>
                    <mat-menu #createTemplateMenu="matMenu">
                        @for (config of configurations(); track config._id ?? config.id) {
                            <button
                                mat-menu-item
                                (click)="createTemplate(config._id ?? config.id ?? '')"
                            >
                                {{ config.name }}
                            </button>
                        }
                    </mat-menu>
                }
            }
        </div>
    </div>

    <!-- Configurations Tab -->
    @if (activeTab() === 'configurations') {
        @if (isLoading()) {
            <div class="flex flex-col items-center justify-center flex-1">
                <mat-spinner diameter="48"></mat-spinner>
                <p class="mt-4 text-slate-500">
                    {{ 'smartBatchLanding.loadingConfigurations' | transloco }}
                </p>
            </div>
        } @else if (configurations().length === 0) {
            <div
                class="flex flex-col items-center justify-center flex-1 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center"
            >
                <div
                    class="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mb-6"
                >
                    <mat-icon class="text-slate-400 icon-size-10">layers</mat-icon>
                </div>
                <h3 class="text-lg font-medium text-slate-900 dark:text-white">
                    {{ 'smartBatchLanding.noConfigurations' | transloco }}
                </h3>
                <p class="text-slate-500 dark:text-slate-400 max-w-sm mt-2 mb-6">
                    {{ 'smartBatchLanding.noConfigurationsDesc' | transloco }}
                </p>
                <button mat-stroked-button color="primary" (click)="createConfiguration()">
                    {{ 'smartBatchLanding.createFirstConfiguration' | transloco }}
                </button>
            </div>
        } @else {
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                @for (config of configurations(); track config._id ?? config.id) {
                    <div
                        (click)="openDashboard(config._id ?? config.id ?? '')"
                        class="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 transition-all hover:shadow-md hover:border-blue-500/50 cursor-pointer"
                    >
                        <div
                            class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1"
                        >
                            <button
                                mat-icon-button
                                (click)="editConfiguration(config._id ?? config.id ?? '', $event)"
                                [matTooltip]="'smartBatchLanding.edit' | transloco"
                            >
                                <mat-icon class="icon-size-5">edit</mat-icon>
                            </button>
                            <button
                                mat-icon-button
                                color="warn"
                                (click)="deleteConfiguration(config._id ?? config.id ?? '', $event)"
                                [matTooltip]="'smartBatchLanding.delete' | transloco"
                            >
                                <mat-icon class="icon-size-5">delete</mat-icon>
                            </button>
                        </div>
                        <div class="flex items-start justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <span class="text-2xl">{{ getCountryFlag(config.country) }}</span>
                                <div>
                                    <h3 class="font-semibold text-slate-900 dark:text-white line-clamp-1">
                                        {{ config.name }}
                                    </h3>
                                    <div class="flex items-center gap-2 mt-0.5">
                                        <span
                                            class="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                                        >
                                            {{ config.inputFormat | uppercase }} \u2192
                                            {{ config.outputFormat | uppercase }}
                                        </span>
                                        @if (!config.isActive) {
                                            <span
                                                class="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                                            >
                                                {{ 'smartBatchLanding.inactive' | transloco }}
                                            </span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2 min-h-[2.5rem]">
                            {{ config.description || ('smartBatchLanding.noDescription' | transloco) }}
                        </p>
                        <div
                            class="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800"
                        >
                            <div>
                                <span
                                    class="block text-xs text-slate-400 font-medium uppercase tracking-wider"
                                    >{{ 'smartBatchLanding.steps' | transloco }}</span
                                >
                                <span class="text-lg font-semibold text-slate-900 dark:text-white">{{
                                    config.steps.length
                                }}</span>
                            </div>
                            <div>
                                <span
                                    class="block text-xs text-slate-400 font-medium uppercase tracking-wider"
                                    >{{ 'smartBatchLanding.strategy' | transloco }}</span
                                >
                                <span
                                    class="text-sm font-medium text-slate-700 dark:text-slate-300 capitalize truncate"
                                    >{{ config.mergeStrategy.replace('-', ' ') }}</span
                                >
                            </div>
                        </div>
                    </div>
                }
            </div>
        }
    }

    <!-- Report Templates Tab -->
    @if (activeTab() === 'templates') {
        @if (isLoadingTemplates()) {
            <div class="flex flex-col items-center justify-center flex-1">
                <mat-spinner diameter="48"></mat-spinner>
                <p class="mt-4 text-slate-500">
                    {{ 'smartBatchLanding.loadingTemplates' | transloco }}
                </p>
            </div>
        } @else if (templates().length === 0) {
            <div
                class="flex flex-col items-center justify-center flex-1 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center"
            >
                <div
                    class="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mb-6"
                >
                    <mat-icon class="text-slate-400 icon-size-10">description</mat-icon>
                </div>
                <h3 class="text-lg font-medium text-slate-900 dark:text-white">
                    {{ 'smartBatchLanding.noTemplates' | transloco }}
                </h3>
                <p class="text-slate-500 dark:text-slate-400 max-w-sm mt-2">
                    {{ 'smartBatchLanding.noTemplatesDesc' | transloco }}
                </p>
                <p class="text-slate-400 dark:text-slate-500 text-sm max-w-sm mt-2">
                    {{ 'smartBatchLanding.noTemplatesHint' | transloco }}
                </p>
            </div>
        } @else {
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                @for (template of templates(); track template._id) {
                    <div
                        class="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 transition-all hover:shadow-md hover:border-blue-500/50"
                    >
                        <div
                            class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1"
                        >
                            <button
                                mat-icon-button
                                (click)="openTemplateEditor(template, $event)"
                                [matTooltip]="'smartBatchLanding.edit' | transloco"
                            >
                                <mat-icon class="icon-size-5">edit</mat-icon>
                            </button>
                            <button
                                mat-icon-button
                                color="warn"
                                (click)="deleteTemplate(template._id ?? '', $event)"
                                [matTooltip]="'smartBatchLanding.delete' | transloco"
                            >
                                <mat-icon class="icon-size-5">delete</mat-icon>
                            </button>
                        </div>
                        <h3 class="font-semibold text-slate-900 dark:text-white line-clamp-1 pr-16">
                            {{ template.name }}
                        </h3>
                        <div class="flex flex-wrap gap-2 mt-2">
                            <span
                                class="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                            >
                                {{ (template.pdfEngine ?? 'pdfkit') | uppercase }}
                            </span>
                            @if (template.pageSize) {
                                <span
                                    class="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                                >
                                    {{ template.pageSize }}
                                </span>
                            }
                        </div>
                        <p class="text-sm text-slate-500 dark:text-slate-400 mt-4 mb-4 line-clamp-2 min-h-[2.5rem]">
                            {{ template.description || ('smartBatchLanding.noDescription' | transloco) }}
                        </p>
                        <div
                            class="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800"
                        >
                            <div>
                                <span
                                    class="block text-xs text-slate-400 font-medium uppercase tracking-wider"
                                    >{{ 'smartBatchLanding.sections' | transloco }}</span
                                >
                                <span class="text-lg font-semibold text-slate-900 dark:text-white">{{
                                    template.sections?.length ?? 0
                                }}</span>
                            </div>
                            <div>
                                <span
                                    class="block text-xs text-slate-400 font-medium uppercase tracking-wider"
                                    >{{ 'smartBatchLanding.linkedTo' | transloco }}</span
                                >
                                <span class="text-sm font-medium text-slate-700 dark:text-slate-300 truncate block">
                                    @if (template.batchConfiguration) {
                                        {{ getConfigName(template.batchConfiguration) }}
                                    } @else {
                                        {{ 'smartBatchLanding.standalone' | transloco }}
                                    }
                                </span>
                            </div>
                        </div>
                        @if (template.createdAt) {
                            <p class="text-xs text-slate-400 mt-3">
                                {{ template.createdAt | date: 'medium' }}
                            </p>
                        }
                    </div>
                }
            </div>
        }
    }
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmartBatchComponent, { className: "SmartBatchComponent", filePath: "src/app/modules/smart-batch/smart-batch.component.ts", lineNumber: 31 });
})();

// src/app/modules/smart-batch/smart-batch.routes.ts
var smart_batch_routes_default = [
  {
    path: "",
    component: SmartBatchComponent
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-MSMHBBDQ.js").then((m) => m.CreateBatchConfigComponent)
  },
  {
    path: "edit/:id",
    loadComponent: () => import("./chunk-MSMHBBDQ.js").then((m) => m.CreateBatchConfigComponent)
  },
  {
    path: ":configId",
    loadComponent: () => import("./chunk-I45DN3RZ.js").then((m) => m.BatchDashboardComponent)
  },
  {
    path: ":configId/batch/new",
    loadComponent: () => import("./chunk-NGUSLL6U.js").then((m) => m.CreateBatchComponent)
  },
  {
    path: ":configId/batch/:batchId",
    loadComponent: () => import("./chunk-QK3SASBH.js").then((m) => m.BatchProcessingComponent)
  },
  {
    path: ":configId/report-builder",
    loadComponent: () => import("./chunk-WLSLRDXC.js").then((m) => m.ReportBuilderComponent)
  },
  {
    path: ":configId/report-builder/:templateId",
    loadComponent: () => import("./chunk-WLSLRDXC.js").then((m) => m.ReportBuilderComponent)
  },
  {
    path: ":configId/batch/:batchId/report",
    loadComponent: () => import("./chunk-BIXT6W2O.js").then((m) => m.ReportViewerComponent)
  }
];
export {
  smart_batch_routes_default as default
};
//# sourceMappingURL=chunk-QC5PBH4E.js.map
