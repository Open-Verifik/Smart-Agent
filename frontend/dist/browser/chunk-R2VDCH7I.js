import {
  MASKED_OTP,
  PhoneValidationsService,
  buildOtpPreviewBody
} from "./chunk-PKJKEAWU.js";
import {
  Clipboard,
  ClipboardModule
} from "./chunk-ZX47OHQM.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-TXEVGTMX.js";
import {
  CountryService
} from "./chunk-4U26N45P.js";
import "./chunk-JURKDGMK.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-RM2644J3.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-AICPTZP5.js";
import "./chunk-VURK6DEU.js";
import "./chunk-E7WYNRWC.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel
} from "./chunk-HWNQWMK7.js";
import {
  UserService
} from "./chunk-K4AG7N5H.js";
import "./chunk-BCBZJBUY.js";
import "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import "./chunk-OIBNGD5S.js";
import "./chunk-WOW6NB5H.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import "./chunk-J762DGD5.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-HYFP557I.js";
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Input,
  ViewChild,
  firstValueFrom,
  inject,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
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
  ɵɵviewQuery
} from "./chunk-PNPEHISK.js";
import {
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-tools/communication/message-dev-guide.component.ts
function MessageDevGuideComponent_ng_container_0_Conditional_230_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function MessageDevGuideComponent_ng_container_0_Conditional_230_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyText(ctx_r1.lastResponseJson));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.copy"), " ");
  }
}
function MessageDevGuideComponent_ng_container_0_Conditional_231_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.lastOperationLabel, " \xB7 ");
  }
}
function MessageDevGuideComponent_ng_container_0_Conditional_231_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 HTTP ", ctx_r1.lastApiResponse.status, "");
  }
}
function MessageDevGuideComponent_ng_container_0_Conditional_231_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, MessageDevGuideComponent_ng_container_0_Conditional_231_Conditional_1_Template, 2, 1, "span");
    \u0275\u0275text(2);
    \u0275\u0275template(3, MessageDevGuideComponent_ng_container_0_Conditional_231_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "pre");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ok", ctx_r1.lastApiResponse.ok)("err", !ctx_r1.lastApiResponse.ok);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.lastOperationLabel ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.lastApiResponse.ok ? t_r4("communication_messages.dev_guide.response_ok") : t_r4("communication_messages.dev_guide.response_error"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.lastApiResponse.status ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lastResponseJson);
  }
}
function MessageDevGuideComponent_ng_container_0_Conditional_232_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.last_response_empty"), " ");
  }
}
function MessageDevGuideComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 1)(2, "header", 2)(3, "div")(4, "h2", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 6);
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a", 6);
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "open_in_new");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 7)(22, "article", 8)(23, "div", 9);
    \u0275\u0275text(24, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 10)(26, "h3");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "code", 11);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "table", 12)(33, "thead")(34, "tr")(35, "th");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "tbody")(42, "tr")(43, "td")(44, "code");
    \u0275\u0275text(45, "phone");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "td");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "tr")(51, "td")(52, "code");
    \u0275\u0275text(53, "countryCode");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "tr")(59, "td")(60, "code");
    \u0275\u0275text(61, "phoneGateway");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "tr")(67, "td")(68, "code");
    \u0275\u0275text(69, "title");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "td");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "td");
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "tr")(75, "td")(76, "code");
    \u0275\u0275text(77, "language");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "td");
    \u0275\u0275text(79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "td");
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(82, "div", 13)(83, "div", 14)(84, "span");
    \u0275\u0275text(85, "cURL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "button", 15);
    \u0275\u0275listener("click", function MessageDevGuideComponent_ng_container_0_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyText(ctx_r1.sendCurl));
    });
    \u0275\u0275elementStart(87, "mat-icon");
    \u0275\u0275text(88, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "pre");
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 13)(93, "div", 14)(94, "span");
    \u0275\u0275text(95, "Node.js");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "button", 15);
    \u0275\u0275listener("click", function MessageDevGuideComponent_ng_container_0_Template_button_click_96_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyText(ctx_r1.sendNode));
    });
    \u0275\u0275elementStart(97, "mat-icon");
    \u0275\u0275text(98, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "pre");
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "h4", 16);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "p", 17);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "div", 13)(107, "div", 14)(108, "span");
    \u0275\u0275text(109, "HTTP 200");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "button", 15);
    \u0275\u0275listener("click", function MessageDevGuideComponent_ng_container_0_Template_button_click_110_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyText(ctx_r1.sendSuccessSample));
    });
    \u0275\u0275elementStart(111, "mat-icon");
    \u0275\u0275text(112, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(113);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "pre");
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "h4", 16);
    \u0275\u0275text(117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 13)(119, "div", 14)(120, "span");
    \u0275\u0275text(121, "HTTP 403 / 409");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "button", 15);
    \u0275\u0275listener("click", function MessageDevGuideComponent_ng_container_0_Template_button_click_122_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyText(ctx_r1.sendErrorSamples));
    });
    \u0275\u0275elementStart(123, "mat-icon");
    \u0275\u0275text(124, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "pre");
    \u0275\u0275text(127);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(128, "article", 8)(129, "div", 9);
    \u0275\u0275text(130, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "div", 10)(132, "h3");
    \u0275\u0275text(133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "p");
    \u0275\u0275text(135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "code", 11);
    \u0275\u0275text(137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "table", 12)(139, "thead")(140, "tr")(141, "th");
    \u0275\u0275text(142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "th");
    \u0275\u0275text(144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "th");
    \u0275\u0275text(146);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(147, "tbody")(148, "tr")(149, "td")(150, "code");
    \u0275\u0275text(151, "phone");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "td");
    \u0275\u0275text(153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "td");
    \u0275\u0275text(155);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "tr")(157, "td")(158, "code");
    \u0275\u0275text(159, "countryCode");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "td");
    \u0275\u0275text(161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "td");
    \u0275\u0275text(163);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "tr")(165, "td")(166, "code");
    \u0275\u0275text(167, "otp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "td");
    \u0275\u0275text(169);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "td");
    \u0275\u0275text(171);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "tr")(173, "td")(174, "code");
    \u0275\u0275text(175, "phoneGateway");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "td");
    \u0275\u0275text(177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "td");
    \u0275\u0275text(179);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(180, "div", 13)(181, "div", 14)(182, "span");
    \u0275\u0275text(183, "cURL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "button", 15);
    \u0275\u0275listener("click", function MessageDevGuideComponent_ng_container_0_Template_button_click_184_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyText(ctx_r1.verifyCurl));
    });
    \u0275\u0275elementStart(185, "mat-icon");
    \u0275\u0275text(186, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(187);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "pre");
    \u0275\u0275text(189);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(190, "div", 13)(191, "div", 14)(192, "span");
    \u0275\u0275text(193, "Node.js");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "button", 15);
    \u0275\u0275listener("click", function MessageDevGuideComponent_ng_container_0_Template_button_click_194_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyText(ctx_r1.verifyNode));
    });
    \u0275\u0275elementStart(195, "mat-icon");
    \u0275\u0275text(196, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(197);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(198, "pre");
    \u0275\u0275text(199);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(200, "h4", 16);
    \u0275\u0275text(201);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "p", 17);
    \u0275\u0275text(203);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "div", 13)(205, "div", 14)(206, "span");
    \u0275\u0275text(207, "HTTP 200");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "button", 15);
    \u0275\u0275listener("click", function MessageDevGuideComponent_ng_container_0_Template_button_click_208_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyText(ctx_r1.verifySuccessSample));
    });
    \u0275\u0275elementStart(209, "mat-icon");
    \u0275\u0275text(210, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(211);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(212, "pre");
    \u0275\u0275text(213);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(214, "h4", 16);
    \u0275\u0275text(215);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(216, "div", 13)(217, "div", 14)(218, "span");
    \u0275\u0275text(219, "HTTP 403 / 404");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(220, "button", 15);
    \u0275\u0275listener("click", function MessageDevGuideComponent_ng_container_0_Template_button_click_220_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyText(ctx_r1.verifyErrorSamples));
    });
    \u0275\u0275elementStart(221, "mat-icon");
    \u0275\u0275text(222, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(223);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(224, "pre");
    \u0275\u0275text(225);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(226, "section", 18)(227, "div", 14)(228, "h3");
    \u0275\u0275text(229);
    \u0275\u0275elementEnd();
    \u0275\u0275template(230, MessageDevGuideComponent_ng_container_0_Conditional_230_Template, 4, 1, "button", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(231, MessageDevGuideComponent_ng_container_0_Conditional_231_Template, 6, 8)(232, MessageDevGuideComponent_ng_container_0_Conditional_232_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.intro"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.docsOverviewUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.link_overview"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.docsManualUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.link_send"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.docsValidateUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.link_verify"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.step_send_title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.step_send_body"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sendEndpoint);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.param"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.description"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.yes"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.param_phone"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.yes"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.param_country"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.yes"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.param_gateway"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.no"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.param_title"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.no"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.param_language"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.copy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sendCurl);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.copy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sendNode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.sample_success"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.sample_send_success_note"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.copy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sendSuccessSample);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.sample_errors"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.copy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sendErrorSamples);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.step_verify_title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.step_verify_body"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.verifyEndpoint);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.param"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.description"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.yes"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.param_phone"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.yes"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.param_country"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.yes"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.param_otp"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.no"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.param_gateway_optional"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.copy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.verifyCurl);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.copy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.verifyNode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.sample_success"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.sample_verify_success_note"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.copy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.verifySuccessSample);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.sample_errors"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", t_r4("communication_messages.dev_guide.copy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.verifyErrorSamples);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r4("communication_messages.dev_guide.last_response"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.lastApiResponse ? 230 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.lastApiResponse ? 231 : 232);
  }
}
var MessageDevGuideComponent = class _MessageDevGuideComponent {
  constructor() {
    this.countryCode = "+57";
    this.phone = "3001234567";
    this.title = "Company ABC";
    this.language = "en";
    this.lastApiResponse = null;
    this._clipboard = inject(Clipboard);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
  }
  get _docsBase() {
    return environment.documentationBaseUrl.replace(/\/$/, "");
  }
  get docsOverviewUrl() {
    return `${this._docsBase}/resources/phone-validations/`;
  }
  get docsManualUrl() {
    return `${this._docsBase}/resources/create-a-manual-phone-validation/`;
  }
  get docsValidateUrl() {
    return `${this._docsBase}/resources/validate-a-phone-validation/`;
  }
  get sendEndpoint() {
    return "POST /v2/phone-validations/manual";
  }
  get verifyEndpoint() {
    return "PUT /v2/phone-validations";
  }
  get samplePhone() {
    return this.phone?.trim() || "3001234567";
  }
  get sampleCountryCode() {
    return this.countryCode?.trim() || "+57";
  }
  get sampleTitle() {
    return this.title?.trim() || "Company ABC";
  }
  get sendCurl() {
    const body = {
      phone: this.samplePhone,
      countryCode: this.sampleCountryCode,
      phoneGateway: this.phoneGateway,
      title: this.sampleTitle,
      language: this.language || "en"
    };
    return [
      `curl -X POST "https://api.verifik.co/v2/phone-validations/manual" \\`,
      `  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\`,
      `  -H "Content-Type: application/json" \\`,
      `  -d '${JSON.stringify(body)}'`
    ].join("\n");
  }
  get sendNode() {
    return [
      `const response = await fetch("https://api.verifik.co/v2/phone-validations/manual", {`,
      `  method: "POST",`,
      `  headers: {`,
      `    Authorization: "Bearer YOUR_ACCESS_TOKEN",`,
      `    "Content-Type": "application/json",`,
      `  },`,
      `  body: JSON.stringify({`,
      `    phone: "${this.samplePhone}",`,
      `    countryCode: "${this.sampleCountryCode}",`,
      `    phoneGateway: "${this.phoneGateway}",`,
      `    title: "${this.sampleTitle}",`,
      `    language: "${this.language || "en"}",`,
      `  }),`,
      `});`,
      `const data = await response.json();`,
      `// Success when HTTP 200 and data.data.sent === true`
    ].join("\n");
  }
  get verifyCurl() {
    const body = {
      phone: this.samplePhone,
      countryCode: this.sampleCountryCode,
      otp: 123456,
      phoneGateway: this.phoneGateway
    };
    return [
      `curl -X PUT "https://api.verifik.co/v2/phone-validations" \\`,
      `  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\`,
      `  -H "Content-Type: application/json" \\`,
      `  -d '${JSON.stringify(body)}'`
    ].join("\n");
  }
  get verifyNode() {
    return [
      `const response = await fetch("https://api.verifik.co/v2/phone-validations", {`,
      `  method: "PUT",`,
      `  headers: {`,
      `    Authorization: "Bearer YOUR_ACCESS_TOKEN",`,
      `    "Content-Type": "application/json",`,
      `  },`,
      `  body: JSON.stringify({`,
      `    phone: "${this.samplePhone}",`,
      `    countryCode: "${this.sampleCountryCode}",`,
      `    otp: 123456,`,
      `    phoneGateway: "${this.phoneGateway}",`,
      `  }),`,
      `});`,
      `const data = await response.json();`,
      `// Success when HTTP 200 and data.data.status === "validated"`
    ].join("\n");
  }
  get sendSuccessSample() {
    return JSON.stringify({
      data: {
        client: "6a6a80c80dc78d2b350d1cd4",
        appRegistration: null,
        source: "manual",
        status: "sent",
        countryCode: this.sampleCountryCode,
        phone: this.samplePhone,
        phoneGateway: this.phoneGateway,
        otp: 626673,
        expiresAt: "2026-07-30T00:40:34.000Z",
        phoneData: {
          title: this.sampleTitle
        },
        type: "validation",
        requires2FA: false,
        language: this.language || "en",
        _id: "6a6a9b2ae233e5e81353f6fe",
        updatedAt: "2026-07-30T00:30:35.388Z",
        createdAt: "2026-07-30T00:30:35.388Z",
        __v: 0,
        new: true,
        sent: true
      },
      signature: {
        dateTime: "July 30, 2026 12:30 AM",
        message: "Certified by Verifik.co"
      },
      id: "WCGU9"
    }, null, 2);
  }
  get sendErrorSamples() {
    return [
      "// HTTP 403 \u2014 not enough credits (checked before send)",
      JSON.stringify({ message: "insufficient_credits", code: "Forbidden" }, null, 2),
      "",
      "// HTTP 409 \u2014 OTP already sent within the 2-minute cooldown",
      JSON.stringify({ message: "otp_recently_sent", code: "Conflict" }, null, 2),
      "",
      "// HTTP 409 \u2014 provider failed to deliver the message",
      JSON.stringify({ message: "otp_not_sent", code: "Conflict" }, null, 2)
    ].join("\n");
  }
  get verifySuccessSample() {
    return JSON.stringify({
      data: {
        _id: "665f1a2b3c4d5e6f7a8b9c0d",
        status: "validated",
        countryCode: this.sampleCountryCode,
        phone: this.samplePhone,
        type: "validation",
        showFaceLivenessRecommendation: false
      }
    }, null, 2);
  }
  get verifyErrorSamples() {
    return [
      "// HTTP 403 \u2014 code does not match the pending OTP",
      JSON.stringify({ message: "otp_does_not_match", code: "Forbidden" }, null, 2),
      "",
      "// HTTP 412 \u2014 OTP expired (or timed out before verify)",
      JSON.stringify({ message: "phoneValidation_has_expired", code: "PreconditionFailed" }, null, 2),
      "",
      "// HTTP 409 \u2014 OTP already verified",
      JSON.stringify({
        message: "phone_validation_already_validated",
        code: "Conflict"
      }, null, 2),
      "",
      "// HTTP 404 \u2014 no matching pending OTP for this phone",
      JSON.stringify({ message: "phone_validation_not_found", code: "NotFound" }, null, 2)
    ].join("\n");
  }
  get lastResponseJson() {
    if (!this.lastApiResponse) {
      return "";
    }
    try {
      return JSON.stringify(this.lastApiResponse.body, null, 2);
    } catch {
      return String(this.lastApiResponse.body);
    }
  }
  get lastOperationLabel() {
    if (!this.lastApiResponse?.operation) {
      return "";
    }
    return this.lastApiResponse.operation === "verify" ? this._transloco.translate("communication_messages.dev_guide.operation_verify") : this._transloco.translate("communication_messages.dev_guide.operation_send");
  }
  copyText(value) {
    if (!value) {
      return;
    }
    this._clipboard.copy(value);
    this._snack.open(this._transloco.translate("communication_messages.dev_guide.copied"), void 0, { duration: 2e3 });
  }
  static {
    this.\u0275fac = function MessageDevGuideComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessageDevGuideComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageDevGuideComponent, selectors: [["communication-message-dev-guide"]], inputs: { phoneGateway: "phoneGateway", countryCode: "countryCode", phone: "phone", title: "title", language: "language", lastApiResponse: "lastApiResponse" }, decls: 1, vars: 0, consts: [[4, "transloco"], [1, "dev-guide"], [1, "dev-guide-header"], [1, "dev-guide-title"], [1, "dev-guide-intro"], [1, "dev-guide-links"], ["target", "_blank", "rel", "noopener noreferrer", 1, "docs-link", 3, "href"], [1, "steps"], [1, "step"], [1, "step-badge"], [1, "step-body"], [1, "endpoint"], [1, "params"], [1, "code-block"], [1, "code-toolbar"], ["mat-button", "", "type", "button", 3, "click"], [1, "sample-heading"], [1, "sample-note"], ["id", "communication-last-api-response", 1, "api-result"], ["mat-button", "", "type", "button"], [1, "empty"], [1, "result-meta"]], template: function MessageDevGuideComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MessageDevGuideComponent_ng_container_0_Template, 233, 63, "ng-container", 0);
      }
    }, dependencies: [
      CommonModule,
      ClipboardModule,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatSnackBarModule,
      TranslocoModule,
      TranslocoDirective
    ], styles: ["\n\n.dev-guide[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 1rem;\n  padding: 1.25rem 1.35rem;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.dev-guide-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.dev-guide-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: rgb(17, 24, 39);\n}\n.dev-guide-intro[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 42rem;\n  font-size: 0.9rem;\n  color: rgb(75, 85, 99);\n  line-height: 1.45;\n}\n.dev-guide-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.docs-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.35rem 0.7rem;\n  border-radius: 999px;\n  border: 1px solid rgb(209, 213, 219);\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  text-decoration: none;\n  background: rgb(239, 246, 255);\n}\n.docs-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n}\n.steps[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.step[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 0.85rem;\n  padding: 1rem;\n  border-radius: 0.85rem;\n  background: rgb(249, 250, 251);\n  border: 1px solid rgb(243, 244, 246);\n}\n.step-badge[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 999px;\n  display: grid;\n  place-items: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #fff;\n  background: #2563eb;\n}\n.step-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.step-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.875rem;\n  color: rgb(75, 85, 99);\n  line-height: 1.45;\n}\n.endpoint[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.85rem;\n  padding: 0.35rem 0.55rem;\n  border-radius: 0.4rem;\n  background: rgb(17, 24, 39);\n  color: #e2e8f0;\n  font-size: 0.8rem;\n}\n.sample-heading[_ngcontent-%COMP%] {\n  margin: 1rem 0 0.35rem;\n  font-size: 0.9rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.sample-note[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.8rem;\n  color: rgb(75, 85, 99);\n  line-height: 1.4;\n}\n.params[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 0.85rem;\n  font-size: 0.8rem;\n}\n.params[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.params[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.45rem 0.5rem;\n  border-bottom: 1px solid rgb(229, 231, 235);\n  vertical-align: top;\n}\n.params[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: rgb(100, 116, 139);\n  font-weight: 600;\n}\n.params[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.code-block[_ngcontent-%COMP%], \n.api-result[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 0.65rem;\n  overflow: hidden;\n  background: #0b1220;\n}\n.code-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  padding: 0.35rem 0.5rem 0.35rem 0.85rem;\n  background: rgb(17, 24, 39);\n  color: rgb(203, 213, 225);\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.code-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: rgb(226, 232, 240);\n}\n.code-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: rgb(191, 219, 254);\n}\n.code-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  margin-right: 0.15rem;\n}\n.code-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], \n.api-result[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.85rem 1rem;\n  overflow: auto;\n  color: #e2e8f0;\n  font-size: 0.75rem;\n  line-height: 1.45;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.api-result[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n.result-meta[_ngcontent-%COMP%] {\n  padding: 0.45rem 1rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  background: rgb(30, 41, 59);\n  color: rgb(203, 213, 225);\n}\n.result-meta.ok[_ngcontent-%COMP%] {\n  color: #86efac;\n}\n.result-meta.err[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.empty[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  color: rgb(148, 163, 184);\n  font-size: 0.85rem;\n}\n@media (max-width: 700px) {\n  .step[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dark[_nghost-%COMP%]   .dev-guide[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .dev-guide[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgb(51, 65, 85);\n  box-shadow: none;\n}\n.dark[_nghost-%COMP%]   .dev-guide-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .dev-guide-title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .step-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .step-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .sample-heading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample-heading[_ngcontent-%COMP%] {\n  color: rgb(241, 245, 249);\n}\n.dark[_nghost-%COMP%]   .dev-guide-intro[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .dev-guide-intro[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .step-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .step-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .sample-note[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sample-note[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .step[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .step[_ngcontent-%COMP%] {\n  background: rgb(15, 23, 42);\n  border-color: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .params[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .params[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .params[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .params[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-color: rgb(51, 65, 85);\n  color: rgb(203, 213, 225);\n}\n.dark[_nghost-%COMP%]   .docs-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .docs-link[_ngcontent-%COMP%] {\n  background: rgba(30, 58, 138, 0.35);\n  border-color: rgba(59, 130, 246, 0.45);\n  color: #93c5fd;\n}\n/*# sourceMappingURL=message-dev-guide.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageDevGuideComponent, [{
    type: Component,
    args: [{ selector: "communication-message-dev-guide", standalone: true, imports: [
      CommonModule,
      ClipboardModule,
      MatButtonModule,
      MatIconModule,
      MatSnackBarModule,
      TranslocoModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <section class="dev-guide">\r
        <header class="dev-guide-header">\r
            <div>\r
                <h2 class="dev-guide-title">\r
                    {{ t('communication_messages.dev_guide.title') }}\r
                </h2>\r
                <p class="dev-guide-intro">\r
                    {{ t('communication_messages.dev_guide.intro') }}\r
                </p>\r
            </div>\r
            <div class="dev-guide-links">\r
                <a\r
                    class="docs-link"\r
                    [href]="docsOverviewUrl"\r
                    target="_blank"\r
                    rel="noopener noreferrer"\r
                >\r
                    {{ t('communication_messages.dev_guide.link_overview') }}\r
                    <mat-icon>open_in_new</mat-icon>\r
                </a>\r
                <a\r
                    class="docs-link"\r
                    [href]="docsManualUrl"\r
                    target="_blank"\r
                    rel="noopener noreferrer"\r
                >\r
                    {{ t('communication_messages.dev_guide.link_send') }}\r
                    <mat-icon>open_in_new</mat-icon>\r
                </a>\r
                <a\r
                    class="docs-link"\r
                    [href]="docsValidateUrl"\r
                    target="_blank"\r
                    rel="noopener noreferrer"\r
                >\r
                    {{ t('communication_messages.dev_guide.link_verify') }}\r
                    <mat-icon>open_in_new</mat-icon>\r
                </a>\r
            </div>\r
        </header>\r
\r
        <div class="steps">\r
            <article class="step">\r
                <div class="step-badge">1</div>\r
                <div class="step-body">\r
                    <h3>{{ t('communication_messages.dev_guide.step_send_title') }}</h3>\r
                    <p>{{ t('communication_messages.dev_guide.step_send_body') }}</p>\r
                    <code class="endpoint">{{ sendEndpoint }}</code>\r
\r
                    <table class="params">\r
                        <thead>\r
                            <tr>\r
                                <th>{{ t('communication_messages.dev_guide.param') }}</th>\r
                                <th>{{ t('communication_messages.dev_guide.required') }}</th>\r
                                <th>{{ t('communication_messages.dev_guide.description') }}</th>\r
                            </tr>\r
                        </thead>\r
                        <tbody>\r
                            <tr>\r
                                <td><code>phone</code></td>\r
                                <td>{{ t('communication_messages.dev_guide.yes') }}</td>\r
                                <td>{{ t('communication_messages.dev_guide.param_phone') }}</td>\r
                            </tr>\r
                            <tr>\r
                                <td><code>countryCode</code></td>\r
                                <td>{{ t('communication_messages.dev_guide.yes') }}</td>\r
                                <td>{{ t('communication_messages.dev_guide.param_country') }}</td>\r
                            </tr>\r
                            <tr>\r
                                <td><code>phoneGateway</code></td>\r
                                <td>{{ t('communication_messages.dev_guide.yes') }}</td>\r
                                <td>{{ t('communication_messages.dev_guide.param_gateway') }}</td>\r
                            </tr>\r
                            <tr>\r
                                <td><code>title</code></td>\r
                                <td>{{ t('communication_messages.dev_guide.no') }}</td>\r
                                <td>{{ t('communication_messages.dev_guide.param_title') }}</td>\r
                            </tr>\r
                            <tr>\r
                                <td><code>language</code></td>\r
                                <td>{{ t('communication_messages.dev_guide.no') }}</td>\r
                                <td>{{ t('communication_messages.dev_guide.param_language') }}</td>\r
                            </tr>\r
                        </tbody>\r
                    </table>\r
\r
                    <div class="code-block">\r
                        <div class="code-toolbar">\r
                            <span>cURL</span>\r
                            <button\r
                                mat-button\r
                                type="button"\r
                                (click)="copyText(sendCurl)"\r
                            >\r
                                <mat-icon>content_copy</mat-icon>\r
                                {{ t('communication_messages.dev_guide.copy') }}\r
                            </button>\r
                        </div>\r
                        <pre>{{ sendCurl }}</pre>\r
                    </div>\r
\r
                    <div class="code-block">\r
                        <div class="code-toolbar">\r
                            <span>Node.js</span>\r
                            <button\r
                                mat-button\r
                                type="button"\r
                                (click)="copyText(sendNode)"\r
                            >\r
                                <mat-icon>content_copy</mat-icon>\r
                                {{ t('communication_messages.dev_guide.copy') }}\r
                            </button>\r
                        </div>\r
                        <pre>{{ sendNode }}</pre>\r
                    </div>\r
\r
                    <h4 class="sample-heading">\r
                        {{ t('communication_messages.dev_guide.sample_success') }}\r
                    </h4>\r
                    <p class="sample-note">\r
                        {{ t('communication_messages.dev_guide.sample_send_success_note') }}\r
                    </p>\r
                    <div class="code-block">\r
                        <div class="code-toolbar">\r
                            <span>HTTP 200</span>\r
                            <button\r
                                mat-button\r
                                type="button"\r
                                (click)="copyText(sendSuccessSample)"\r
                            >\r
                                <mat-icon>content_copy</mat-icon>\r
                                {{ t('communication_messages.dev_guide.copy') }}\r
                            </button>\r
                        </div>\r
                        <pre>{{ sendSuccessSample }}</pre>\r
                    </div>\r
\r
                    <h4 class="sample-heading">\r
                        {{ t('communication_messages.dev_guide.sample_errors') }}\r
                    </h4>\r
                    <div class="code-block">\r
                        <div class="code-toolbar">\r
                            <span>HTTP 403 / 409</span>\r
                            <button\r
                                mat-button\r
                                type="button"\r
                                (click)="copyText(sendErrorSamples)"\r
                            >\r
                                <mat-icon>content_copy</mat-icon>\r
                                {{ t('communication_messages.dev_guide.copy') }}\r
                            </button>\r
                        </div>\r
                        <pre>{{ sendErrorSamples }}</pre>\r
                    </div>\r
                </div>\r
            </article>\r
\r
            <article class="step">\r
                <div class="step-badge">2</div>\r
                <div class="step-body">\r
                    <h3>{{ t('communication_messages.dev_guide.step_verify_title') }}</h3>\r
                    <p>{{ t('communication_messages.dev_guide.step_verify_body') }}</p>\r
                    <code class="endpoint">{{ verifyEndpoint }}</code>\r
\r
                    <table class="params">\r
                        <thead>\r
                            <tr>\r
                                <th>{{ t('communication_messages.dev_guide.param') }}</th>\r
                                <th>{{ t('communication_messages.dev_guide.required') }}</th>\r
                                <th>{{ t('communication_messages.dev_guide.description') }}</th>\r
                            </tr>\r
                        </thead>\r
                        <tbody>\r
                            <tr>\r
                                <td><code>phone</code></td>\r
                                <td>{{ t('communication_messages.dev_guide.yes') }}</td>\r
                                <td>{{ t('communication_messages.dev_guide.param_phone') }}</td>\r
                            </tr>\r
                            <tr>\r
                                <td><code>countryCode</code></td>\r
                                <td>{{ t('communication_messages.dev_guide.yes') }}</td>\r
                                <td>{{ t('communication_messages.dev_guide.param_country') }}</td>\r
                            </tr>\r
                            <tr>\r
                                <td><code>otp</code></td>\r
                                <td>{{ t('communication_messages.dev_guide.yes') }}</td>\r
                                <td>{{ t('communication_messages.dev_guide.param_otp') }}</td>\r
                            </tr>\r
                            <tr>\r
                                <td><code>phoneGateway</code></td>\r
                                <td>{{ t('communication_messages.dev_guide.no') }}</td>\r
                                <td>{{ t('communication_messages.dev_guide.param_gateway_optional') }}</td>\r
                            </tr>\r
                        </tbody>\r
                    </table>\r
\r
                    <div class="code-block">\r
                        <div class="code-toolbar">\r
                            <span>cURL</span>\r
                            <button\r
                                mat-button\r
                                type="button"\r
                                (click)="copyText(verifyCurl)"\r
                            >\r
                                <mat-icon>content_copy</mat-icon>\r
                                {{ t('communication_messages.dev_guide.copy') }}\r
                            </button>\r
                        </div>\r
                        <pre>{{ verifyCurl }}</pre>\r
                    </div>\r
\r
                    <div class="code-block">\r
                        <div class="code-toolbar">\r
                            <span>Node.js</span>\r
                            <button\r
                                mat-button\r
                                type="button"\r
                                (click)="copyText(verifyNode)"\r
                            >\r
                                <mat-icon>content_copy</mat-icon>\r
                                {{ t('communication_messages.dev_guide.copy') }}\r
                            </button>\r
                        </div>\r
                        <pre>{{ verifyNode }}</pre>\r
                    </div>\r
\r
                    <h4 class="sample-heading">\r
                        {{ t('communication_messages.dev_guide.sample_success') }}\r
                    </h4>\r
                    <p class="sample-note">\r
                        {{ t('communication_messages.dev_guide.sample_verify_success_note') }}\r
                    </p>\r
                    <div class="code-block">\r
                        <div class="code-toolbar">\r
                            <span>HTTP 200</span>\r
                            <button\r
                                mat-button\r
                                type="button"\r
                                (click)="copyText(verifySuccessSample)"\r
                            >\r
                                <mat-icon>content_copy</mat-icon>\r
                                {{ t('communication_messages.dev_guide.copy') }}\r
                            </button>\r
                        </div>\r
                        <pre>{{ verifySuccessSample }}</pre>\r
                    </div>\r
\r
                    <h4 class="sample-heading">\r
                        {{ t('communication_messages.dev_guide.sample_errors') }}\r
                    </h4>\r
                    <div class="code-block">\r
                        <div class="code-toolbar">\r
                            <span>HTTP 403 / 404</span>\r
                            <button\r
                                mat-button\r
                                type="button"\r
                                (click)="copyText(verifyErrorSamples)"\r
                            >\r
                                <mat-icon>content_copy</mat-icon>\r
                                {{ t('communication_messages.dev_guide.copy') }}\r
                            </button>\r
                        </div>\r
                        <pre>{{ verifyErrorSamples }}</pre>\r
                    </div>\r
                </div>\r
            </article>\r
        </div>\r
\r
        <section\r
            class="api-result"\r
            id="communication-last-api-response"\r
        >\r
            <div class="code-toolbar">\r
                <h3>{{ t('communication_messages.dev_guide.last_response') }}</h3>\r
                @if (lastApiResponse) {\r
                    <button\r
                        mat-button\r
                        type="button"\r
                        (click)="copyText(lastResponseJson)"\r
                    >\r
                        <mat-icon>content_copy</mat-icon>\r
                        {{ t('communication_messages.dev_guide.copy') }}\r
                    </button>\r
                }\r
            </div>\r
            @if (lastApiResponse) {\r
                <div\r
                    class="result-meta"\r
                    [class.ok]="lastApiResponse.ok"\r
                    [class.err]="!lastApiResponse.ok"\r
                >\r
                    @if (lastOperationLabel) {\r
                        <span>{{ lastOperationLabel }} \xB7 </span>\r
                    }\r
                    {{\r
                        lastApiResponse.ok\r
                            ? t('communication_messages.dev_guide.response_ok')\r
                            : t('communication_messages.dev_guide.response_error')\r
                    }}\r
                    @if (lastApiResponse.status) {\r
                        <span>\xB7 HTTP {{ lastApiResponse.status }}</span>\r
                    }\r
                </div>\r
                <pre>{{ lastResponseJson }}</pre>\r
            } @else {\r
                <p class="empty">\r
                    {{ t('communication_messages.dev_guide.last_response_empty') }}\r
                </p>\r
            }\r
        </section>\r
    </section>\r
</ng-container>\r
`, styles: ["/* src/app/modules/smart-tools/communication/message-dev-guide.component.scss */\n.dev-guide {\n  margin-top: 1.5rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 1rem;\n  padding: 1.25rem 1.35rem;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.dev-guide-header {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.dev-guide-title {\n  margin: 0 0 0.35rem;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: rgb(17, 24, 39);\n}\n.dev-guide-intro {\n  margin: 0;\n  max-width: 42rem;\n  font-size: 0.9rem;\n  color: rgb(75, 85, 99);\n  line-height: 1.45;\n}\n.dev-guide-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.docs-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.35rem 0.7rem;\n  border-radius: 999px;\n  border: 1px solid rgb(209, 213, 219);\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  text-decoration: none;\n  background: rgb(239, 246, 255);\n}\n.docs-link mat-icon {\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n}\n.steps {\n  display: grid;\n  gap: 1rem;\n}\n.step {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 0.85rem;\n  padding: 1rem;\n  border-radius: 0.85rem;\n  background: rgb(249, 250, 251);\n  border: 1px solid rgb(243, 244, 246);\n}\n.step-badge {\n  width: 1.75rem;\n  height: 1.75rem;\n  border-radius: 999px;\n  display: grid;\n  place-items: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #fff;\n  background: #2563eb;\n}\n.step-body h3 {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.step-body p {\n  margin: 0 0 0.75rem;\n  font-size: 0.875rem;\n  color: rgb(75, 85, 99);\n  line-height: 1.45;\n}\n.endpoint {\n  display: inline-block;\n  margin-bottom: 0.85rem;\n  padding: 0.35rem 0.55rem;\n  border-radius: 0.4rem;\n  background: rgb(17, 24, 39);\n  color: #e2e8f0;\n  font-size: 0.8rem;\n}\n.sample-heading {\n  margin: 1rem 0 0.35rem;\n  font-size: 0.9rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.sample-note {\n  margin: 0 0 0.5rem;\n  font-size: 0.8rem;\n  color: rgb(75, 85, 99);\n  line-height: 1.4;\n}\n.params {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 0.85rem;\n  font-size: 0.8rem;\n}\n.params th,\n.params td {\n  text-align: left;\n  padding: 0.45rem 0.5rem;\n  border-bottom: 1px solid rgb(229, 231, 235);\n  vertical-align: top;\n}\n.params th {\n  color: rgb(100, 116, 139);\n  font-weight: 600;\n}\n.params code {\n  font-size: 0.78rem;\n}\n.code-block,\n.api-result {\n  margin-top: 0.75rem;\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 0.65rem;\n  overflow: hidden;\n  background: #0b1220;\n}\n.code-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  padding: 0.35rem 0.5rem 0.35rem 0.85rem;\n  background: rgb(17, 24, 39);\n  color: rgb(203, 213, 225);\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.code-toolbar h3 {\n  margin: 0;\n  font-size: 0.85rem;\n  color: rgb(226, 232, 240);\n}\n.code-toolbar button {\n  color: rgb(191, 219, 254);\n}\n.code-toolbar mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  margin-right: 0.15rem;\n}\n.code-block pre,\n.api-result pre {\n  margin: 0;\n  padding: 0.85rem 1rem;\n  overflow: auto;\n  color: #e2e8f0;\n  font-size: 0.75rem;\n  line-height: 1.45;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.api-result {\n  margin-top: 1.25rem;\n}\n.result-meta {\n  padding: 0.45rem 1rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  background: rgb(30, 41, 59);\n  color: rgb(203, 213, 225);\n}\n.result-meta.ok {\n  color: #86efac;\n}\n.result-meta.err {\n  color: #fca5a5;\n}\n.empty {\n  margin: 0;\n  padding: 1rem;\n  color: rgb(148, 163, 184);\n  font-size: 0.85rem;\n}\n@media (max-width: 700px) {\n  .step {\n    grid-template-columns: 1fr;\n  }\n}\n:host-context(.dark) .dev-guide {\n  background: rgb(30, 41, 59);\n  border-color: rgb(51, 65, 85);\n  box-shadow: none;\n}\n:host-context(.dark) .dev-guide-title,\n:host-context(.dark) .step-body h3,\n:host-context(.dark) .sample-heading {\n  color: rgb(241, 245, 249);\n}\n:host-context(.dark) .dev-guide-intro,\n:host-context(.dark) .step-body p,\n:host-context(.dark) .sample-note {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .step {\n  background: rgb(15, 23, 42);\n  border-color: rgb(51, 65, 85);\n}\n:host-context(.dark) .params th,\n:host-context(.dark) .params td {\n  border-bottom-color: rgb(51, 65, 85);\n  color: rgb(203, 213, 225);\n}\n:host-context(.dark) .docs-link {\n  background: rgba(30, 58, 138, 0.35);\n  border-color: rgba(59, 130, 246, 0.45);\n  color: #93c5fd;\n}\n/*# sourceMappingURL=message-dev-guide.component.css.map */\n"] }]
  }], null, { phoneGateway: [{
    type: Input,
    args: [{ required: true }]
  }], countryCode: [{
    type: Input
  }], phone: [{
    type: Input
  }], title: [{
    type: Input
  }], language: [{
    type: Input
  }], lastApiResponse: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageDevGuideComponent, { className: "MessageDevGuideComponent", filePath: "src/app/modules/smart-tools/communication/message-dev-guide.component.ts", lineNumber: 38 });
})();

// src/app/modules/smart-tools/communication/message-compose.component.ts
var _c0 = ["countryCodeSearchInput"];
var _forTrack0 = ($index, $item) => $item.code;
function MessageComposeComponent_ng_container_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function MessageComposeComponent_ng_container_0_Conditional_29_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearCountryCodeSearch($event));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function MessageComposeComponent_ng_container_0_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4.countryCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r4.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r4.name);
  }
}
function MessageComposeComponent_ng_container_0_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r5 = ctx.$implicit;
    \u0275\u0275property("value", lang_r5.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lang_r5.label);
  }
}
function MessageComposeComponent_ng_container_0_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 42);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.sending"), " ");
  }
}
function MessageComposeComponent_ng_container_0_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.send"), " ");
  }
}
function MessageComposeComponent_ng_container_0_Conditional_53_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.expired"), " ");
  }
}
function MessageComposeComponent_ng_container_0_Conditional_53_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.expiryCountdownLabel, " ");
  }
}
function MessageComposeComponent_ng_container_0_Conditional_53_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 48);
    \u0275\u0275template(1, MessageComposeComponent_ng_container_0_Conditional_53_Conditional_5_Conditional_1_Template, 1, 1)(2, MessageComposeComponent_ng_container_0_Conditional_53_Conditional_5_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("expired", ctx_r1.isOtpExpired);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isOtpExpired ? 1 : 2);
  }
}
function MessageComposeComponent_ng_container_0_Conditional_53_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 42);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.verifying"), " ");
  }
}
function MessageComposeComponent_ng_container_0_Conditional_53_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.verify"), " ");
  }
}
function MessageComposeComponent_ng_container_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "h3", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MessageComposeComponent_ng_container_0_Conditional_53_Conditional_5_Template, 3, 3, "p", 45);
    \u0275\u0275elementStart(6, "mat-form-field", 13)(7, "mat-label");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 47);
    \u0275\u0275listener("click", function MessageComposeComponent_ng_container_0_Conditional_53_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.verify());
    });
    \u0275\u0275template(11, MessageComposeComponent_ng_container_0_Conditional_53_Conditional_11_Template, 2, 1)(12, MessageComposeComponent_ng_container_0_Conditional_53_Conditional_12_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.verify_title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.verify_hint"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.expiresAt ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("communication_messages.compose.otp"));
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r1.otpControl);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canVerify);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.verifying ? 11 : 12);
  }
}
function MessageComposeComponent_ng_container_0_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.senderName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.preview_sender"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.senderName);
  }
}
function MessageComposeComponent_ng_container_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.senderName);
  }
}
function MessageComposeComponent_ng_container_0_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.preview_powered_by"), " ");
  }
}
function MessageComposeComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "header", 4)(4, "button", 5);
    \u0275\u0275listener("click", function MessageComposeComponent_ng_container_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275element(5, "mat-icon", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "h1", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 10)(13, "section", 11)(14, "form", 12);
    \u0275\u0275listener("ngSubmit", function MessageComposeComponent_ng_container_0_Template_form_ngSubmit_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(15, "mat-form-field", 13)(16, "mat-label");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-select", 14);
    \u0275\u0275listener("openedChange", function MessageComposeComponent_ng_container_0_Template_mat_select_openedChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView($event ? ctx_r1.onCountryCodeSelectOpened() : ctx_r1.onCountryCodeSelectClosed());
    });
    \u0275\u0275elementStart(19, "mat-select-trigger")(20, "span", 15);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 17);
    \u0275\u0275listener("click", function MessageComposeComponent_ng_container_0_Template_div_click_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    })("keydown", function MessageComposeComponent_ng_container_0_Template_div_keydown_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    })("mousedown", function MessageComposeComponent_ng_container_0_Template_div_mousedown_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(25, "mat-icon", 18);
    \u0275\u0275text(26, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 19, 0);
    \u0275\u0275listener("click", function MessageComposeComponent_ng_container_0_Template_input_click_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    })("input", function MessageComposeComponent_ng_container_0_Template_input_input_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCountryCodeSearchChange($event.target.value));
    })("keydown", function MessageComposeComponent_ng_container_0_Template_input_keydown_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, MessageComposeComponent_ng_container_0_Conditional_29_Template, 3, 0, "button", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(30, MessageComposeComponent_ng_container_0_For_31_Template, 5, 3, "mat-option", 21, \u0275\u0275componentInstance().trackByPhoneCountryCode, true);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "mat-form-field", 13)(33, "mat-label");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-form-field", 13)(37, "mat-label");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 23);
    \u0275\u0275elementStart(40, "mat-hint");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "mat-form-field", 13)(43, "mat-label");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-select", 24);
    \u0275\u0275repeaterCreate(46, MessageComposeComponent_ng_container_0_For_47_Template, 2, 2, "mat-option", 21, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "p", 25);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 26);
    \u0275\u0275template(51, MessageComposeComponent_ng_container_0_Conditional_51_Template, 2, 1)(52, MessageComposeComponent_ng_container_0_Conditional_52_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, MessageComposeComponent_ng_container_0_Conditional_53_Template, 13, 7, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "section", 28)(55, "h2", 29);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 30);
    \u0275\u0275element(58, "div", 31);
    \u0275\u0275elementStart(59, "div", 32);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 33);
    \u0275\u0275template(62, MessageComposeComponent_ng_container_0_Conditional_62_Template, 8, 3, "div", 34);
    \u0275\u0275elementStart(63, "div", 35);
    \u0275\u0275template(64, MessageComposeComponent_ng_container_0_Conditional_64_Template, 2, 1, "div", 36);
    \u0275\u0275elementStart(65, "p", 37);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, MessageComposeComponent_ng_container_0_Conditional_67_Template, 2, 1, "div", 38);
    \u0275\u0275elementStart(68, "span", 39);
    \u0275\u0275text(69, "now");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275element(70, "communication-message-dev-guide", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_35_0;
    let tmp_37_0;
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.back"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6(ctx_r1.titleKey));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("communication_messages.compose.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("communication_messages.compose.country_code"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedDialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedCountryName);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", t_r6("communication_messages.compose.search_country"))("value", ctx_r1.countryCodeSearchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.countryCodeSearchTerm ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredPhoneCountryCodes);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("communication_messages.compose.phone"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("communication_messages.compose.sender_title"));
    \u0275\u0275advance();
    \u0275\u0275property("maxlength", ctx_r1.senderTitleMaxLength);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.sender_title_hint"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("communication_messages.compose.language"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.languages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.charge_note"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.sending || ctx_r1.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sending ? 51 : 52);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.otpSent ? 53 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("communication_messages.compose.preview_title"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("whatsapp", ctx_r1.phoneGateway === "whatsapp")("sms", ctx_r1.phoneGateway === "sms");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.previewPhone);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.phoneGateway === "sms" ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("template", ctx_r1.phoneGateway === "whatsapp");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.phoneGateway === "whatsapp" ? 64 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.previewBody);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.phoneGateway === "whatsapp" ? 67 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("phoneGateway", ctx_r1.phoneGateway)("countryCode", ctx_r1.selectedDialCode)("phone", ((tmp_35_0 = ctx_r1.form.get("phone")) == null ? null : tmp_35_0.value) || "")("title", ctx_r1.senderName)("language", ((tmp_37_0 = ctx_r1.form.get("language")) == null ? null : tmp_37_0.value) || "en")("lastApiResponse", ctx_r1.lastApiResponse);
  }
}
var DEFAULT_COUNTRY_ISO = "co";
var MessageComposeComponent = class _MessageComposeComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._fb = inject(FormBuilder);
    this._service = inject(PhoneValidationsService);
    this._userService = inject(UserService);
    this._countryService = inject(CountryService);
    this._cdr = inject(ChangeDetectorRef);
    this._snack = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
    this._expiryTimer = null;
    this.senderTitleMaxLength = 15;
    this.phoneGateway = "whatsapp";
    this.allPhoneCountryCodes = this._countryService.countryDialCodes;
    this.filteredPhoneCountryCodes = this._countryService.countryDialCodes;
    this.countryCodeSearchTerm = "";
    this.sending = false;
    this.verifying = false;
    this.otpSent = false;
    this.pendingValidationId = null;
    this.expiresAt = null;
    this.remainingSeconds = 0;
    this.lastApiResponse = null;
    this.form = this._fb.group({
      countryIso: [DEFAULT_COUNTRY_ISO, Validators.required],
      phone: ["", [Validators.required, Validators.pattern(/^\d{6,15}$/)]],
      title: [
        "Verifik",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(this.senderTitleMaxLength)
        ]
      ],
      language: ["en", Validators.required]
    });
    this.otpControl = new FormControl("", {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^\d{6}$/)]
    });
    this.languages = [
      { code: "en", label: "English" },
      { code: "es", label: "Espa\xF1ol" },
      { code: "fr", label: "Fran\xE7ais" },
      { code: "pt", label: "Portugu\xEAs" }
    ];
  }
  ngOnInit() {
    this.phoneGateway = this._route.snapshot.data["phoneGateway"] || "whatsapp";
    try {
      const account = JSON.parse(localStorage.getItem("verifik_account") || "null");
      if (account?.name) {
        this._setDefaultSenderTitle(account.name);
      }
    } catch {
    }
    this._userService.user$.pipe(take(1)).subscribe((user) => {
      const name = user?.name || user?.clientName;
      if (name) {
        this._setDefaultSenderTitle(name);
        this._cdr.markForCheck();
      }
    });
    this.form.get("countryIso")?.valueChanges.subscribe(() => {
      this._resetVerifyState();
    });
    this.form.get("phone")?.valueChanges.subscribe(() => {
      this._resetVerifyState();
    });
    this.otpControl.valueChanges.subscribe(() => {
      this._cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this._clearExpiryTimer();
  }
  /**
   * Clear pending verify UI when destination phone identity changes.
   */
  _resetVerifyState() {
    if (!this.otpSent && !this.otpControl.value && !this.pendingValidationId) {
      return;
    }
    this.otpSent = false;
    this.otpControl.reset("");
    this.otpControl.enable({ emitEvent: false });
    this.pendingValidationId = null;
    this.expiresAt = null;
    this.remainingSeconds = 0;
    this._clearExpiryTimer();
    this._cdr.markForCheck();
  }
  _clearExpiryTimer() {
    if (this._expiryTimer) {
      clearInterval(this._expiryTimer);
      this._expiryTimer = null;
    }
  }
  _startExpiryCountdown(expiresAtValue) {
    this._clearExpiryTimer();
    this.expiresAt = new Date(expiresAtValue);
    this._tickExpiry();
    this._expiryTimer = setInterval(() => this._tickExpiry(), 1e3);
  }
  _tickExpiry() {
    if (!this.expiresAt) {
      this.remainingSeconds = 0;
      this._cdr.markForCheck();
      return;
    }
    const ms = this.expiresAt.getTime() - Date.now();
    this.remainingSeconds = Math.max(0, Math.floor(ms / 1e3));
    if (this.remainingSeconds === 0) {
      this._clearExpiryTimer();
      this.otpControl.disable({ emitEvent: false });
    }
    this._cdr.markForCheck();
  }
  get isOtpExpired() {
    return this.otpSent && this.remainingSeconds <= 0 && Boolean(this.expiresAt);
  }
  get expiryCountdownLabel() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;
    const time = `${minutes}:${`${seconds}`.padStart(2, "0")}`;
    return this._transloco.translate("communication_messages.compose.expires_in", { time });
  }
  /**
   * Prefill title from client name only when the user has not edited it yet.
   */
  _setDefaultSenderTitle(name) {
    const control = this.form.get("title");
    if (!control || control.dirty) {
      return;
    }
    control.setValue(this._normalizeSenderTitle(name));
  }
  _normalizeSenderTitle(name) {
    return `${name || "Verifik"}`.substring(0, this.senderTitleMaxLength).split(".")[0] || "Verifik";
  }
  get senderName() {
    return this._normalizeSenderTitle(this.form.get("title")?.value || "Verifik");
  }
  get selectedCountry() {
    const iso = this.form.get("countryIso")?.value;
    if (!iso)
      return void 0;
    return this.allPhoneCountryCodes.find((c) => c.countryCode === iso);
  }
  get selectedDialCode() {
    return this.selectedCountry?.dialCode || "";
  }
  get selectedCountryName() {
    return this.selectedCountry?.name || "";
  }
  trackByPhoneCountryCode(_index, country) {
    return country.countryCode;
  }
  onCountryCodeSearchChange(searchTerm) {
    this.countryCodeSearchTerm = searchTerm;
    this.filteredPhoneCountryCodes = this._countryService.filterCountryDialCodes(this.allPhoneCountryCodes, searchTerm);
    this._cdr.markForCheck();
  }
  clearCountryCodeSearch(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.countryCodeSearchTerm = "";
    this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
    this._cdr.detectChanges();
    setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 0);
  }
  onCountryCodeSelectOpened() {
    this.countryCodeSearchTerm = "";
    this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
    this._cdr.markForCheck();
    setTimeout(() => this.countryCodeSearchInput?.nativeElement?.focus(), 100);
  }
  onCountryCodeSelectClosed() {
    this.countryCodeSearchTerm = "";
    this.filteredPhoneCountryCodes = this.allPhoneCountryCodes;
    this._cdr.markForCheck();
  }
  get titleKey() {
    return this.phoneGateway === "sms" ? "communication_messages.compose.title_sms" : "communication_messages.compose.title_whatsapp";
  }
  get listLink() {
    return this.phoneGateway === "sms" ? "/smart-tools/sms-messages" : "/smart-tools/whatsapp-messages";
  }
  get previewBody() {
    return buildOtpPreviewBody(this.phoneGateway, this.senderName || "Verifik", this.form.get("language")?.value || "en", MASKED_OTP);
  }
  get previewPhone() {
    const countryCode = this.selectedDialCode || "";
    const phone = this.form.value.phone || "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    return `${countryCode}${phone}`;
  }
  goBack() {
    this._router.navigateByUrl(this.listLink);
  }
  submit() {
    if (this.form.invalid || this.sending) {
      this.form.markAllAsTouched();
      return;
    }
    const dialCode = this.selectedDialCode;
    if (!dialCode) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending = true;
    this._cdr.markForCheck();
    const { phone, language, title } = this.form.getRawValue();
    this._service.sendManual({
      countryCode: dialCode,
      phone,
      phoneGateway: this.phoneGateway,
      title: this._normalizeSenderTitle(title || "Verifik"),
      language: language || "en"
    }).subscribe({
      next: (response) => this._onSendSuccess(response),
      error: (err) => this._onSendError(err)
    });
  }
  _onSendSuccess(response) {
    this.sending = false;
    this.lastApiResponse = {
      ok: Boolean(response?.data?.sent),
      status: 200,
      body: response,
      operation: "send"
    };
    if (!response?.data?.sent) {
      this._cdr.markForCheck();
      this._snack.open(this._transloco.translate("communication_messages.compose.error"), void 0, { duration: 4e3 });
      return;
    }
    this.otpSent = true;
    this.otpControl.reset("");
    this.otpControl.enable({ emitEvent: false });
    this.pendingValidationId = response.data._id || null;
    if (response.data.expiresAt) {
      this._startExpiryCountdown(response.data.expiresAt);
    } else {
      this.expiresAt = null;
      this.remainingSeconds = 0;
      this._clearExpiryTimer();
    }
    this._snack.open(this._transloco.translate("communication_messages.compose.success"), void 0, { duration: 3e3 });
    this._cdr.markForCheck();
  }
  _onSendError(err) {
    this.sending = false;
    this.lastApiResponse = {
      ok: false,
      status: err?.status,
      body: err?.error || { message: err?.message },
      operation: "send"
    };
    this._cdr.markForCheck();
    const message = err?.error?.message || this._transloco.translate("communication_messages.compose.error");
    this._snack.open(message, void 0, { duration: 4e3 });
  }
  get canVerify() {
    return this.otpSent && !this.verifying && !this.isOtpExpired && this.otpControl.valid;
  }
  verify() {
    if (!this.canVerify) {
      this.otpControl.markAsTouched();
      return;
    }
    const dialCode = this.selectedDialCode;
    const phone = this.form.get("phone")?.value;
    const otpRaw = this.otpControl.value;
    if (!dialCode || !phone || !otpRaw) {
      return;
    }
    this.verifying = true;
    this._cdr.markForCheck();
    this._service.verify({
      countryCode: dialCode,
      phone,
      otp: Number(otpRaw),
      phoneGateway: this.phoneGateway
    }).subscribe({
      next: (response) => this._onVerifySuccess(response),
      error: (err) => void this._onVerifyError(err)
    });
  }
  _onVerifySuccess(response) {
    this.verifying = false;
    const validated = response?.data?.status === "validated";
    this.lastApiResponse = {
      ok: validated,
      status: 200,
      body: response,
      operation: "verify"
    };
    this._cdr.markForCheck();
    if (!validated) {
      this._snack.open(this._transloco.translate("communication_messages.compose.verify_error"), void 0, { duration: 4e3 });
      this._scrollToLastApiResponse();
      return;
    }
    this._clearExpiryTimer();
    this._snack.open(this._transloco.translate("communication_messages.compose.verify_success"), void 0, { duration: 3e3 });
    this._scrollToLastApiResponse();
  }
  _onVerifyError(err) {
    return __async(this, null, function* () {
      this.verifying = false;
      this.lastApiResponse = {
        ok: false,
        status: err?.status,
        body: err?.error || { message: err?.message },
        operation: "verify"
      };
      this._cdr.markForCheck();
      const message = yield this._resolveVerifyErrorMessage(err);
      this._snack.open(message, void 0, { duration: 5e3 });
      this._scrollToLastApiResponse();
    });
  }
  /**
   * Bring the developer "Last API response" panel into view after verify.
   */
  _scrollToLastApiResponse() {
    setTimeout(() => {
      document.getElementById("communication-last-api-response")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
  _resolveVerifyErrorMessage(err) {
    return __async(this, null, function* () {
      const apiMessage = `${err?.error?.message || ""}`.trim();
      if (apiMessage === "phoneValidation_has_expired") {
        this.remainingSeconds = 0;
        this._clearExpiryTimer();
        return this._t("error_expired");
      }
      if (apiMessage === "phone_validation_already_validated") {
        return this._t("error_already_validated");
      }
      if (apiMessage === "otp_does_not_match") {
        return this._t("error_otp_mismatch");
      }
      if (apiMessage === "phone_validation_not_found") {
        return this._diagnoseNotFoundMessage();
      }
      return apiMessage || this._t("verify_error");
    });
  }
  /**
   * When API only says not found, check local expiry and/or GET by id.
   */
  _diagnoseNotFoundMessage() {
    return __async(this, null, function* () {
      if (this.isOtpExpired || this._isLocalExpiryPast()) {
        this.remainingSeconds = 0;
        this._clearExpiryTimer();
        return this._t("error_expired");
      }
      if (!this.pendingValidationId) {
        return this._t("error_not_found");
      }
      try {
        const response = yield firstValueFrom(this._service.getById(this.pendingValidationId));
        const record = response?.data || response;
        if (!record) {
          return this._t("error_not_found");
        }
        if (record.status === "validated") {
          return this._t("error_already_validated");
        }
        if (record.status === "failed" || record.expiresAt && new Date(record.expiresAt).getTime() <= Date.now()) {
          this.remainingSeconds = 0;
          this._clearExpiryTimer();
          return this._t("error_expired");
        }
      } catch {
      }
      return this._t("error_not_found");
    });
  }
  _isLocalExpiryPast() {
    return Boolean(this.expiresAt && this.expiresAt.getTime() <= Date.now());
  }
  _t(key) {
    return this._transloco.translate(`communication_messages.compose.${key}`);
  }
  static {
    this.\u0275fac = function MessageComposeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessageComposeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageComposeComponent, selectors: [["communication-message-compose"]], viewQuery: function MessageComposeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.countryCodeSearchInput = _t.first);
      }
    }, decls: 1, vars: 0, consts: [["countryCodeSearchInput", ""], [4, "transloco"], [1, "page"], [1, "inner"], [1, "hero"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["svgIcon", "heroicons_outline:arrow-left"], [1, "hero-text"], [1, "title"], [1, "subtitle"], [1, "layout"], [1, "form-panel"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full"], ["formControlName", "countryIso", "panelClass", "country-code-search-panel", 3, "openedChange"], [1, "country-code-value"], [1, "country-code-name"], [1, "country-code-search", 3, "click", "keydown", "mousedown"], [1, "country-code-search-icon"], ["type", "text", 1, "country-code-search-input", 3, "click", "input", "keydown", "placeholder", "value"], ["mat-icon-button", "", "type", "button", 1, "country-code-clear"], [3, "value"], ["matInput", "", "formControlName", "phone", "inputmode", "numeric"], ["matInput", "", "formControlName", "title", "autocomplete", "organization", 3, "maxlength"], ["formControlName", "language"], [1, "charge-note"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "send-btn", 3, "disabled"], [1, "verify-panel"], [1, "preview-panel"], [1, "preview-heading"], [1, "phone-frame"], [1, "phone-notch"], [1, "phone-status"], [1, "chat"], [1, "chat-header"], [1, "bubble"], [1, "bubble-title"], [1, "bubble-body"], [1, "bubble-footer"], [1, "time"], [3, "phoneGateway", "countryCode", "phone", "title", "language", "lastApiResponse"], ["mat-icon-button", "", "type", "button", 1, "country-code-clear", 3, "click"], ["diameter", "18", "mode", "indeterminate"], [1, "verify-title"], [1, "verify-hint"], [1, "expiry-note", 3, "expired"], ["matInput", "", "inputmode", "numeric", "maxlength", "6", "autocomplete", "one-time-code", 3, "formControl"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "send-btn", 3, "click", "disabled"], [1, "expiry-note"], [1, "avatar"], [1, "sender-label"], [1, "sender-name"]], template: function MessageComposeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MessageComposeComponent_ng_container_0_Template, 71, 37, "ng-container", 1);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      RouterModule,
      TranslocoModule,
      TranslocoDirective,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatHint,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      MatSnackBarModule,
      MessageDevGuideComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.country-code-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.country-code-name[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  color: rgb(107, 114, 128);\n}\n.country-code-search[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background: #fff;\n  border-bottom: 1px solid rgb(229, 231, 235);\n}\n.country-code-search-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: rgb(156, 163, 175);\n}\n.country-code-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent;\n  border: 0;\n  outline: none;\n  font-size: 0.875rem;\n}\n.country-code-search-input[_ngcontent-%COMP%]::placeholder {\n  color: rgb(156, 163, 175);\n}\n.country-code-clear[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  min-width: 0;\n  padding: 0;\n  line-height: 1;\n}\n.country-code-clear[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 1.5rem 1.25rem 2.5rem;\n  background: rgb(249, 250, 251);\n}\n.inner[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n.hero-text[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(17, 24, 39);\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: rgb(107, 114, 128);\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(280px, 1fr) minmax(280px, 1fr);\n  gap: 1.5rem;\n  align-items: start;\n}\n.form-panel[_ngcontent-%COMP%], \n.preview-panel[_ngcontent-%COMP%] {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 1rem;\n  padding: 1.25rem;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.charge-note[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 0.875rem;\n  color: rgb(107, 114, 128);\n}\n.send-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.verify-panel[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid rgb(229, 231, 235);\n}\n.verify-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.verify-hint[_ngcontent-%COMP%] {\n  margin: 0 0 0.85rem;\n  font-size: 0.875rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.expiry-note[_ngcontent-%COMP%] {\n  margin: 0 0 0.85rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  line-height: 1.4;\n}\n.expiry-note.expired[_ngcontent-%COMP%] {\n  color: rgb(185, 28, 28);\n}\n.preview-heading[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n}\n.phone-frame[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  width: min(100%, 320px);\n  min-height: 520px;\n  border-radius: 2rem;\n  border: 10px solid #1f2937;\n  background: #ece5dd;\n  overflow: hidden;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);\n}\n.phone-frame.whatsapp[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgb(236, 229, 221) 0%,\n      rgb(229, 221, 213) 100%);\n  color: #111827;\n}\n.phone-frame.sms[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #111827;\n}\n.phone-notch[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.55rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 38%;\n  height: 1.1rem;\n  border-radius: 999px;\n  background: #1f2937;\n  z-index: 2;\n}\n.phone-status[_ngcontent-%COMP%] {\n  padding: 1.75rem 1rem 0.5rem;\n  text-align: center;\n  font-size: 0.75rem;\n  color: rgb(75, 85, 99);\n}\n.chat[_ngcontent-%COMP%] {\n  min-height: 440px;\n  padding: 0.75rem;\n}\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  padding: 0.65rem 0.75rem;\n  border-radius: 0.75rem;\n  background: rgba(255, 255, 255, 0.85);\n  border: 1px solid rgb(229, 231, 235);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 999px;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  background: #25d366;\n  color: #052e16;\n}\n.phone-frame.sms[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #eff6ff;\n}\n.sender-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgb(107, 114, 128);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.sender-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n}\n.bubble[_ngcontent-%COMP%] {\n  max-width: 88%;\n  margin-left: auto;\n  border-radius: 1rem 1rem 0.25rem 1rem;\n  padding: 0.85rem 0.95rem;\n  background: #dcf8c6;\n  color: #0f172a;\n  box-shadow: 0 1px 1px rgba(15, 23, 42, 0.08);\n}\n.phone-frame.whatsapp[_ngcontent-%COMP%]   .bubble.template[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: auto;\n  border-radius: 0.25rem 1rem 1rem 1rem;\n  background: #fff;\n  box-shadow: 0 1px 1px rgba(15, 23, 42, 0.1);\n}\n.phone-frame.sms[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #0f172a;\n  border-radius: 1rem 1rem 1rem 0.25rem;\n  margin-left: 0;\n  margin-right: auto;\n}\n.bubble-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.3;\n}\n.bubble-body[_ngcontent-%COMP%] {\n  margin: 0;\n  white-space: pre-wrap;\n  line-height: 1.4;\n  font-size: 0.9rem;\n}\n.phone-frame.whatsapp[_ngcontent-%COMP%]   .bubble.template[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #1f2937;\n}\n.bubble-footer[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n  font-size: 0.75rem;\n  font-style: normal;\n  color: rgb(107, 114, 128);\n  line-height: 1.3;\n}\n.time[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.45rem;\n  font-size: 0.7rem;\n  text-align: right;\n  color: rgb(100, 116, 139);\n}\n@media (max-width: 900px) {\n  .layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dark[_nghost-%COMP%]   .page[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .page[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.dark[_nghost-%COMP%]   .title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .title[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .preview-heading[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .preview-heading[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .sender-name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sender-name[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .verify-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .verify-title[_ngcontent-%COMP%] {\n  color: rgb(241, 245, 249);\n}\n.dark[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .charge-note[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .charge-note[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .verify-hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .verify-hint[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .sender-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .sender-label[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .phone-status[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-status[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .time[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .time[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .country-code-name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .country-code-name[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .expiry-note[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .expiry-note[_ngcontent-%COMP%] {\n  color: #93c5fd;\n}\n.dark[_nghost-%COMP%]   .expiry-note.expired[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .expiry-note.expired[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.dark[_nghost-%COMP%]   .verify-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .verify-panel[_ngcontent-%COMP%] {\n  border-top-color: rgb(51, 65, 85);\n}\n.dark[_nghost-%COMP%]   .country-code-search[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .country-code-search[_ngcontent-%COMP%] {\n  background: rgb(17, 24, 39);\n  border-bottom-color: rgb(55, 65, 81);\n}\n.dark[_nghost-%COMP%]   .form-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .form-panel[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .preview-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .preview-panel[_ngcontent-%COMP%] {\n  background: rgb(30, 41, 59);\n  border-color: rgb(51, 65, 85);\n  box-shadow: none;\n}\n.dark[_nghost-%COMP%]   .phone-frame[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-frame[_ngcontent-%COMP%] {\n  border-color: #111827;\n  background: #0b1220;\n  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);\n}\n.dark[_nghost-%COMP%]   .phone-frame.whatsapp[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-frame.whatsapp[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #0b141a 0%,\n      #111b21 40%,\n      #0b141a 100%);\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .phone-frame.sms[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-frame.sms[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\n  background: #111827;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .chat-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .chat-header[_ngcontent-%COMP%] {\n  background: rgba(17, 24, 39, 0.85);\n  border-color: rgb(55, 65, 81);\n}\n.dark[_nghost-%COMP%]   .bubble[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  background: #005c4b;\n  color: #e7ffee;\n  box-shadow: none;\n}\n.dark[_nghost-%COMP%]   .phone-frame.whatsapp[_ngcontent-%COMP%]   .bubble.template[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-frame.whatsapp[_ngcontent-%COMP%]   .bubble.template[_ngcontent-%COMP%] {\n  background: #202c33;\n  color: #e9edef;\n}\n.dark[_nghost-%COMP%]   .bubble-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .bubble-title[_ngcontent-%COMP%] {\n  color: #e9edef;\n}\n.dark[_nghost-%COMP%]   .phone-frame.whatsapp[_ngcontent-%COMP%]   .bubble.template[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-frame.whatsapp[_ngcontent-%COMP%]   .bubble.template[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%] {\n  color: #e9edef;\n}\n.dark[_nghost-%COMP%]   .bubble-footer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .bubble-footer[_ngcontent-%COMP%] {\n  color: rgb(148, 163, 184);\n}\n.dark[_nghost-%COMP%]   .phone-frame.sms[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .phone-frame.sms[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  background: #1e3a8a;\n  color: #eff6ff;\n}\n/*# sourceMappingURL=message-compose.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageComposeComponent, [{
    type: Component,
    args: [{ selector: "communication-message-compose", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      TranslocoModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatSnackBarModule,
      MessageDevGuideComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    <div class="page">\r
        <div class="inner">\r
            <header class="hero">\r
                <button mat-stroked-button type="button" (click)="goBack()">\r
                    <mat-icon svgIcon="heroicons_outline:arrow-left"></mat-icon>\r
                    {{ t('communication_messages.compose.back') }}\r
                </button>\r
                <div class="hero-text">\r
                    <h1 class="title">{{ t(titleKey) }}</h1>\r
                    <p class="subtitle">{{ t('communication_messages.compose.subtitle') }}</p>\r
                </div>\r
            </header>\r
\r
            <div class="layout">\r
                <section class="form-panel">\r
                    <form [formGroup]="form" (ngSubmit)="submit()">\r
                        <mat-form-field appearance="outline" class="full">\r
                            <mat-label>{{\r
                                t('communication_messages.compose.country_code')\r
                            }}</mat-label>\r
                            <mat-select\r
                                formControlName="countryIso"\r
                                panelClass="country-code-search-panel"\r
                                (openedChange)="\r
                                    $event\r
                                        ? onCountryCodeSelectOpened()\r
                                        : onCountryCodeSelectClosed()\r
                                "\r
                            >\r
                                <mat-select-trigger>\r
                                    <span class="country-code-value">{{\r
                                        selectedDialCode\r
                                    }}</span>\r
                                    <span class="country-code-name">{{\r
                                        selectedCountryName\r
                                    }}</span>\r
                                </mat-select-trigger>\r
\r
                                <div\r
                                    class="country-code-search"\r
                                    (click)="$event.stopPropagation()"\r
                                    (keydown)="$event.stopPropagation()"\r
                                    (mousedown)="$event.stopPropagation()"\r
                                >\r
                                    <mat-icon class="country-code-search-icon">search</mat-icon>\r
                                    <input\r
                                        #countryCodeSearchInput\r
                                        type="text"\r
                                        class="country-code-search-input"\r
                                        [placeholder]="\r
                                            t('communication_messages.compose.search_country')\r
                                        "\r
                                        [value]="countryCodeSearchTerm"\r
                                        (click)="$event.stopPropagation()"\r
                                        (input)="\r
                                            onCountryCodeSearchChange($any($event.target).value)\r
                                        "\r
                                        (keydown)="$event.stopPropagation()"\r
                                    />\r
                                    @if (countryCodeSearchTerm) {\r
                                        <button\r
                                            mat-icon-button\r
                                            type="button"\r
                                            class="country-code-clear"\r
                                            (click)="clearCountryCodeSearch($event)"\r
                                        >\r
                                            <mat-icon>close</mat-icon>\r
                                        </button>\r
                                    }\r
                                </div>\r
\r
                                @for (\r
                                    option of filteredPhoneCountryCodes;\r
                                    track trackByPhoneCountryCode($index, option)\r
                                ) {\r
                                    <mat-option [value]="option.countryCode">\r
                                        <span class="country-code-value">{{\r
                                            option.dialCode\r
                                        }}</span>\r
                                        <span class="country-code-name">{{ option.name }}</span>\r
                                    </mat-option>\r
                                }\r
                            </mat-select>\r
                        </mat-form-field>\r
\r
                        <mat-form-field appearance="outline" class="full">\r
                            <mat-label>{{ t('communication_messages.compose.phone') }}</mat-label>\r
                            <input matInput formControlName="phone" inputmode="numeric" />\r
                        </mat-form-field>\r
\r
                        <mat-form-field appearance="outline" class="full">\r
                            <mat-label>{{\r
                                t('communication_messages.compose.sender_title')\r
                            }}</mat-label>\r
                            <input\r
                                matInput\r
                                formControlName="title"\r
                                [maxlength]="senderTitleMaxLength"\r
                                autocomplete="organization"\r
                            />\r
                            <mat-hint>\r
                                {{ t('communication_messages.compose.sender_title_hint') }}\r
                            </mat-hint>\r
                        </mat-form-field>\r
\r
                        <mat-form-field appearance="outline" class="full">\r
                            <mat-label>{{\r
                                t('communication_messages.compose.language')\r
                            }}</mat-label>\r
                            <mat-select formControlName="language">\r
                                @for (lang of languages; track lang.code) {\r
                                    <mat-option [value]="lang.code">{{ lang.label }}</mat-option>\r
                                }\r
                            </mat-select>\r
                        </mat-form-field>\r
\r
                        <p class="charge-note">\r
                            {{ t('communication_messages.compose.charge_note') }}\r
                        </p>\r
\r
                        <button\r
                            mat-flat-button\r
                            color="primary"\r
                            type="submit"\r
                            class="send-btn"\r
                            [disabled]="sending || form.invalid"\r
                        >\r
                            @if (sending) {\r
                                <mat-progress-spinner\r
                                    diameter="18"\r
                                    mode="indeterminate"\r
                                ></mat-progress-spinner>\r
                                {{ t('communication_messages.compose.sending') }}\r
                            } @else {\r
                                {{ t('communication_messages.compose.send') }}\r
                            }\r
                        </button>\r
                    </form>\r
\r
                    @if (otpSent) {\r
                        <div class="verify-panel">\r
                            <h3 class="verify-title">\r
                                {{ t('communication_messages.compose.verify_title') }}\r
                            </h3>\r
                            <p class="verify-hint">\r
                                {{ t('communication_messages.compose.verify_hint') }}\r
                            </p>\r
                            @if (expiresAt) {\r
                                <p\r
                                    class="expiry-note"\r
                                    [class.expired]="isOtpExpired"\r
                                >\r
                                    @if (isOtpExpired) {\r
                                        {{ t('communication_messages.compose.expired') }}\r
                                    } @else {\r
                                        {{ expiryCountdownLabel }}\r
                                    }\r
                                </p>\r
                            }\r
                            <mat-form-field appearance="outline" class="full">\r
                                <mat-label>{{\r
                                    t('communication_messages.compose.otp')\r
                                }}</mat-label>\r
                                <input\r
                                    matInput\r
                                    [formControl]="otpControl"\r
                                    inputmode="numeric"\r
                                    maxlength="6"\r
                                    autocomplete="one-time-code"\r
                                />\r
                            </mat-form-field>\r
                            <button\r
                                mat-flat-button\r
                                color="primary"\r
                                type="button"\r
                                class="send-btn"\r
                                [disabled]="!canVerify"\r
                                (click)="verify()"\r
                            >\r
                                @if (verifying) {\r
                                    <mat-progress-spinner\r
                                        diameter="18"\r
                                        mode="indeterminate"\r
                                    ></mat-progress-spinner>\r
                                    {{ t('communication_messages.compose.verifying') }}\r
                                } @else {\r
                                    {{ t('communication_messages.compose.verify') }}\r
                                }\r
                            </button>\r
                        </div>\r
                    }\r
                </section>\r
\r
                <section class="preview-panel">\r
                    <h2 class="preview-heading">\r
                        {{ t('communication_messages.compose.preview_title') }}\r
                    </h2>\r
\r
                    <div\r
                        class="phone-frame"\r
                        [class.whatsapp]="phoneGateway === 'whatsapp'"\r
                        [class.sms]="phoneGateway === 'sms'"\r
                    >\r
                        <div class="phone-notch"></div>\r
                        <div class="phone-status">{{ previewPhone }}</div>\r
                        <div class="chat">\r
                            @if (phoneGateway === 'sms') {\r
                                <div class="chat-header">\r
                                    <div class="avatar">{{ senderName.charAt(0) }}</div>\r
                                    <div>\r
                                        <div class="sender-label">\r
                                            {{\r
                                                t(\r
                                                    'communication_messages.compose.preview_sender'\r
                                                )\r
                                            }}\r
                                        </div>\r
                                        <div class="sender-name">{{ senderName }}</div>\r
                                    </div>\r
                                </div>\r
                            }\r
                            <div class="bubble" [class.template]="phoneGateway === 'whatsapp'">\r
                                @if (phoneGateway === 'whatsapp') {\r
                                    <div class="bubble-title">{{ senderName }}</div>\r
                                }\r
                                <p class="bubble-body">{{ previewBody }}</p>\r
                                @if (phoneGateway === 'whatsapp') {\r
                                    <div class="bubble-footer">\r
                                        {{\r
                                            t(\r
                                                'communication_messages.compose.preview_powered_by'\r
                                            )\r
                                        }}\r
                                    </div>\r
                                }\r
                                <span class="time">now</span>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </section>\r
            </div>\r
\r
            <communication-message-dev-guide\r
                [phoneGateway]="phoneGateway"\r
                [countryCode]="selectedDialCode"\r
                [phone]="form.get('phone')?.value || ''"\r
                [title]="senderName"\r
                [language]="form.get('language')?.value || 'en'"\r
                [lastApiResponse]="lastApiResponse"\r
            ></communication-message-dev-guide>\r
        </div>\r
    </div>\r
</ng-container>\r
`, styles: ["/* src/app/modules/smart-tools/communication/message-compose.component.scss */\n:host {\n  display: block;\n}\n.country-code-value {\n  font-weight: 600;\n}\n.country-code-name {\n  margin-left: 0.5rem;\n  color: rgb(107, 114, 128);\n}\n.country-code-search {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background: #fff;\n  border-bottom: 1px solid rgb(229, 231, 235);\n}\n.country-code-search-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n  color: rgb(156, 163, 175);\n}\n.country-code-search-input {\n  width: 100%;\n  background: transparent;\n  border: 0;\n  outline: none;\n  font-size: 0.875rem;\n}\n.country-code-search-input::placeholder {\n  color: rgb(156, 163, 175);\n}\n.country-code-clear {\n  width: 1.5rem;\n  height: 1.5rem;\n  min-width: 0;\n  padding: 0;\n  line-height: 1;\n}\n.country-code-clear mat-icon {\n  width: 1rem;\n  height: 1rem;\n  font-size: 1rem;\n}\n.page {\n  min-height: 100%;\n  padding: 1.5rem 1.25rem 2.5rem;\n  background: rgb(249, 250, 251);\n}\n.inner {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.hero {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n.hero-text {\n  flex: 1 1 auto;\n}\n.title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(17, 24, 39);\n}\n.subtitle {\n  margin: 0.25rem 0 0;\n  color: rgb(107, 114, 128);\n}\n.layout {\n  display: grid;\n  grid-template-columns: minmax(280px, 1fr) minmax(280px, 1fr);\n  gap: 1.5rem;\n  align-items: start;\n}\n.form-panel,\n.preview-panel {\n  border: 1px solid rgb(229, 231, 235);\n  border-radius: 1rem;\n  padding: 1.25rem;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.full {\n  width: 100%;\n}\n.charge-note {\n  margin: 0 0 1rem;\n  font-size: 0.875rem;\n  color: rgb(107, 114, 128);\n}\n.send-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.verify-panel {\n  margin-top: 1.25rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid rgb(229, 231, 235);\n}\n.verify-title {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n  font-weight: 650;\n  color: rgb(17, 24, 39);\n}\n.verify-hint {\n  margin: 0 0 0.85rem;\n  font-size: 0.875rem;\n  color: rgb(107, 114, 128);\n  line-height: 1.45;\n}\n.expiry-note {\n  margin: 0 0 0.85rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(37, 99, 235);\n  line-height: 1.4;\n}\n.expiry-note.expired {\n  color: rgb(185, 28, 28);\n}\n.preview-heading {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n}\n.phone-frame {\n  position: relative;\n  margin: 0 auto;\n  width: min(100%, 320px);\n  min-height: 520px;\n  border-radius: 2rem;\n  border: 10px solid #1f2937;\n  background: #ece5dd;\n  overflow: hidden;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);\n}\n.phone-frame.whatsapp .chat {\n  background:\n    linear-gradient(\n      180deg,\n      rgb(236, 229, 221) 0%,\n      rgb(229, 221, 213) 100%);\n  color: #111827;\n}\n.phone-frame.sms .chat {\n  background: #f3f4f6;\n  color: #111827;\n}\n.phone-notch {\n  position: absolute;\n  top: 0.55rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 38%;\n  height: 1.1rem;\n  border-radius: 999px;\n  background: #1f2937;\n  z-index: 2;\n}\n.phone-status {\n  padding: 1.75rem 1rem 0.5rem;\n  text-align: center;\n  font-size: 0.75rem;\n  color: rgb(75, 85, 99);\n}\n.chat {\n  min-height: 440px;\n  padding: 0.75rem;\n}\n.chat-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  padding: 0.65rem 0.75rem;\n  border-radius: 0.75rem;\n  background: rgba(255, 255, 255, 0.85);\n  border: 1px solid rgb(229, 231, 235);\n}\n.avatar {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 999px;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n  background: #25d366;\n  color: #052e16;\n}\n.phone-frame.sms .avatar {\n  background: #2563eb;\n  color: #eff6ff;\n}\n.sender-label {\n  font-size: 0.7rem;\n  color: rgb(107, 114, 128);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.sender-name {\n  font-weight: 600;\n  color: rgb(17, 24, 39);\n}\n.bubble {\n  max-width: 88%;\n  margin-left: auto;\n  border-radius: 1rem 1rem 0.25rem 1rem;\n  padding: 0.85rem 0.95rem;\n  background: #dcf8c6;\n  color: #0f172a;\n  box-shadow: 0 1px 1px rgba(15, 23, 42, 0.08);\n}\n.phone-frame.whatsapp .bubble.template {\n  margin-left: 0;\n  margin-right: auto;\n  border-radius: 0.25rem 1rem 1rem 1rem;\n  background: #fff;\n  box-shadow: 0 1px 1px rgba(15, 23, 42, 0.1);\n}\n.phone-frame.sms .bubble {\n  background: #dbeafe;\n  color: #0f172a;\n  border-radius: 1rem 1rem 1rem 0.25rem;\n  margin-left: 0;\n  margin-right: auto;\n}\n.bubble-title {\n  margin: 0 0 0.35rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.3;\n}\n.bubble-body {\n  margin: 0;\n  white-space: pre-wrap;\n  line-height: 1.4;\n  font-size: 0.9rem;\n}\n.phone-frame.whatsapp .bubble.template .bubble-body {\n  font-style: italic;\n  color: #1f2937;\n}\n.bubble-footer {\n  margin-top: 0.55rem;\n  font-size: 0.75rem;\n  font-style: normal;\n  color: rgb(107, 114, 128);\n  line-height: 1.3;\n}\n.time {\n  display: block;\n  margin-top: 0.45rem;\n  font-size: 0.7rem;\n  text-align: right;\n  color: rgb(100, 116, 139);\n}\n@media (max-width: 900px) {\n  .layout {\n    grid-template-columns: 1fr;\n  }\n}\n:host-context(.dark) .page {\n  background: transparent;\n}\n:host-context(.dark) .title,\n:host-context(.dark) .preview-heading,\n:host-context(.dark) .sender-name,\n:host-context(.dark) .verify-title {\n  color: rgb(241, 245, 249);\n}\n:host-context(.dark) .subtitle,\n:host-context(.dark) .charge-note,\n:host-context(.dark) .verify-hint,\n:host-context(.dark) .sender-label,\n:host-context(.dark) .phone-status,\n:host-context(.dark) .time,\n:host-context(.dark) .country-code-name {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .expiry-note {\n  color: #93c5fd;\n}\n:host-context(.dark) .expiry-note.expired {\n  color: #fca5a5;\n}\n:host-context(.dark) .verify-panel {\n  border-top-color: rgb(51, 65, 85);\n}\n:host-context(.dark) .country-code-search {\n  background: rgb(17, 24, 39);\n  border-bottom-color: rgb(55, 65, 81);\n}\n:host-context(.dark) .form-panel,\n:host-context(.dark) .preview-panel {\n  background: rgb(30, 41, 59);\n  border-color: rgb(51, 65, 85);\n  box-shadow: none;\n}\n:host-context(.dark) .phone-frame {\n  border-color: #111827;\n  background: #0b1220;\n  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);\n}\n:host-context(.dark) .phone-frame.whatsapp .chat {\n  background:\n    linear-gradient(\n      180deg,\n      #0b141a 0%,\n      #111b21 40%,\n      #0b141a 100%);\n  color: #e2e8f0;\n}\n:host-context(.dark) .phone-frame.sms .chat {\n  background: #111827;\n  color: #e2e8f0;\n}\n:host-context(.dark) .chat-header {\n  background: rgba(17, 24, 39, 0.85);\n  border-color: rgb(55, 65, 81);\n}\n:host-context(.dark) .bubble {\n  background: #005c4b;\n  color: #e7ffee;\n  box-shadow: none;\n}\n:host-context(.dark) .phone-frame.whatsapp .bubble.template {\n  background: #202c33;\n  color: #e9edef;\n}\n:host-context(.dark) .bubble-title {\n  color: #e9edef;\n}\n:host-context(.dark) .phone-frame.whatsapp .bubble.template .bubble-body {\n  color: #e9edef;\n}\n:host-context(.dark) .bubble-footer {\n  color: rgb(148, 163, 184);\n}\n:host-context(.dark) .phone-frame.sms .bubble {\n  background: #1e3a8a;\n  color: #eff6ff;\n}\n/*# sourceMappingURL=message-compose.component.css.map */\n"] }]
  }], null, { countryCodeSearchInput: [{
    type: ViewChild,
    args: ["countryCodeSearchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageComposeComponent, { className: "MessageComposeComponent", filePath: "src/app/modules/smart-tools/communication/message-compose.component.ts", lineNumber: 70 });
})();
export {
  MessageComposeComponent
};
//# sourceMappingURL=chunk-R2VDCH7I.js.map
