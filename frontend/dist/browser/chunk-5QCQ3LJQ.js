import {
  FaceCropService
} from "./chunk-45PTEIW3.js";
import {
  buildFailedBiometricAttempts,
  buildFailedDocumentAttempts,
  buildManualVerificationReasons,
  canRerunCompare,
  cleanOcrExtraction,
  compareMinScoreDisplayPercent,
  documentFaceReasonKey,
  governmentNameResponse,
  isDocumentTypeUndetected,
  isNameVerificationPerformed,
  livenessAttemptUsage,
  livenessMinScoreDisplayPercent,
  manualNameReviewDecision,
  nameVerificationSkip,
  normalizeUnitScore,
  pickEnrollmentFaceMedia,
  recordFullName,
  resolveCompareStatus,
  resolveLivenessMinScoreUnit,
  resolveOtpStepState,
  scoreToPercent,
  showNameVerificationSection
} from "./chunk-YRZJJKLO.js";
import {
  APP_REGISTRATION_DETAIL_POPULATES,
  SmartEnrollProjectsService
} from "./chunk-RNN3ZZ7Z.js";
import {
  ScanDeleteConfirmDialogComponent
} from "./chunk-B6QICPIW.js";
import {
  WebhookEventsComponent
} from "./chunk-PXPAJ6XT.js";
import "./chunk-V3LBSTKW.js";
import {
  Clipboard,
  ClipboardModule
} from "./chunk-FW2IPGTG.js";
import "./chunk-AIP4IBNC.js";
import "./chunk-Q3XPOPVL.js";
import {
  DateTime
} from "./chunk-KW3PRW6P.js";
import {
  docsPageUrl
} from "./chunk-K5VHWW66.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-C3RXWDTM.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-O4LKJP5L.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-NRO2XGZE.js";
import "./chunk-DW2XB3R4.js";
import "./chunk-PDLCCGUT.js";
import "./chunk-GG23NHUM.js";
import "./chunk-F5BVEUVX.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CTAWHRE6.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
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
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
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
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Directive,
  DomSanitizer,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Input,
  JsonPipe,
  NgClass,
  NgModule,
  Optional,
  Output,
  Subject,
  ViewChild,
  computed,
  finalize,
  forkJoin,
  inject,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-I5BUD46C.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// node_modules/ngx-print/fesm2022/ngx-print.mjs
var PrintBase = class _PrintBase {
  nonce;
  _printStyle = [];
  _styleSheetFile = "";
  printComplete = new Subject();
  constructor(nonce) {
    this.nonce = nonce;
  }
  //#region Getters and Setters
  /**
   * Sets the print styles based on the provided values.
   *
   * @param {Object} values - Key-value pairs representing print styles.
   * @protected
   */
  setPrintStyle(values) {
    this._printStyle = [];
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ""));
      }
    }
  }
  /**
   *
   *
   * @returns the string that create the stylesheet which will be injected
   * later within <style></style> tag.
   *
   * -join/replace to transform an array objects to css-styled string
   */
  returnStyleValues() {
    const styleNonce = this.nonce ? ` nonce="${this.nonce}"` : "";
    return `<style${styleNonce}> ${this._printStyle.join(" ").replace(/,/g, ";")} </style>`;
  }
  /**
   * @returns string which contains the link tags containing the css which will
   * be injected later within <head></head> tag.
   *
   */
  returnStyleSheetLinkTags() {
    return this._styleSheetFile;
  }
  /**
   * Sets the style sheet file based on the provided CSS list.
   *
   * @param {string} cssList - CSS file or list of CSS files.
   * @protected
   */
  setStyleSheetFile(cssList) {
    const linkTagFn = function(cssFileName) {
      return `<link rel="stylesheet" type="text/css" href="${cssFileName}">`;
    };
    if (cssList.indexOf(",") !== -1) {
      const valueArr = cssList.split(",");
      this._styleSheetFile = valueArr.map((val) => linkTagFn(val)).join("");
    } else {
      this._styleSheetFile = linkTagFn(cssList);
    }
  }
  //#endregion
  //#region Private methods used by PrintBase
  /**
   * Updates the default values for input elements.
   *
   * @param {HTMLCollectionOf<HTMLInputElement>} elements - Collection of input elements.
   * @private
   */
  updateInputDefaults(elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element["defaultValue"] = element.value;
      if (element["checked"]) element["defaultChecked"] = true;
    }
  }
  /**
   * Updates the default values for select elements.
   *
   * @param {HTMLCollectionOf<HTMLSelectElement>} elements - Collection of select elements.
   * @private
   */
  updateSelectDefaults(elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const selectedIdx = element.selectedIndex;
      const selectedOption = element.options[selectedIdx];
      selectedOption.defaultSelected = true;
    }
  }
  /**
   * Updates the default values for textarea elements.
   *
   * @param {HTMLCollectionOf<HTMLTextAreaElement>} elements - Collection of textarea elements.
   * @private
   */
  updateTextAreaDefaults(elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element["defaultValue"] = element.value;
    }
  }
  /**
   * Converts a canvas element to an image and returns its HTML string.
   *
   * @param {HTMLCanvasElement} element - The canvas element to convert.
   * @returns {string} - HTML string of the image.
   * @private
   */
  canvasToImageHtml(element) {
    const dataUrl = element.toDataURL();
    return `<img src="${dataUrl}" style="max-width: 100%;">`;
  }
  /**
   * Includes canvas contents in the print section via img tags.
   *
   * @param {HTMLCollectionOf<HTMLCanvasElement>} elements - Collection of canvas elements.
   * @private
   */
  updateCanvasToImage(elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = this.canvasToImageHtml(elements[i]);
      elements[i].insertAdjacentHTML("afterend", element);
      elements[i].remove();
    }
  }
  /**
   * Retrieves the HTML content of a specified printing section.
   *
   * @param {string} printSectionId - Id of the printing section.
   * @returns {string | null} - HTML content of the printing section, or null if not found.
   * @private
   */
  getHtmlContents(printSectionId) {
    const printContents = document.getElementById(printSectionId);
    if (!printContents) return null;
    const inputEls = printContents.getElementsByTagName("input");
    const selectEls = printContents.getElementsByTagName("select");
    const textAreaEls = printContents.getElementsByTagName("textarea");
    const canvasEls = printContents.getElementsByTagName("canvas");
    this.updateInputDefaults(inputEls);
    this.updateSelectDefaults(selectEls);
    this.updateTextAreaDefaults(textAreaEls);
    this.updateCanvasToImage(canvasEls);
    return printContents.innerHTML;
  }
  /**
   * Retrieves the HTML content of elements with the specified tag.
   *
   * @param {keyof HTMLElementTagNameMap} tag - HTML tag name.
   * @returns {string} - Concatenated outerHTML of elements with the specified tag.
   * @private
   */
  getElementTag(tag) {
    const html = [];
    const elements = document.getElementsByTagName(tag);
    for (let index = 0; index < elements.length; index++) {
      html.push(elements[index].outerHTML);
    }
    return html.join("\r\n");
  }
  //#endregion
  notifyPrintComplete() {
    this.printComplete.next();
  }
  /**
   * Prints the specified content using the provided print options.
   *
   * @param {PrintOptions} printOptions - Options for printing.
   * @public
   */
  print(printOptions) {
    let styles = "", links = "", popOut = "top=0,left=0,height=auto,width=auto";
    const baseTag = this.getElementTag("base");
    if (printOptions.useExistingCss) {
      styles = this.getElementTag("style");
      links = this.getElementTag("link");
    }
    if (printOptions.openNewTab) {
      popOut = "";
    }
    const printContents = this.getHtmlContents(printOptions.printSectionId);
    if (!printContents) {
      console.error(`Print section with id ${printOptions.printSectionId} not found.`);
      return;
    }
    const popupWin = window.open("", "_blank", popOut);
    if (!popupWin) {
      console.error("Could not open print window.");
      return;
    }
    popupWin.document.open();
    const doc = popupWin.document;
    const html = doc.createElement("html");
    const head = doc.createElement("head");
    const body = doc.createElement("body");
    const title = doc.createElement("title");
    title.textContent = printOptions.printTitle || "";
    head.appendChild(title);
    if (baseTag) {
      head.innerHTML += baseTag;
    }
    head.innerHTML += this.returnStyleValues();
    head.innerHTML += this.returnStyleSheetLinkTags();
    head.innerHTML += styles;
    head.innerHTML += links;
    if (printOptions.bodyClass) {
      body.className = printOptions.bodyClass;
    }
    body.innerHTML += printContents;
    const script = doc.createElement("script");
    script.defer = true;
    if (this.nonce) {
      script.setAttribute("nonce", this.nonce);
    }
    script.textContent = `
      function triggerPrint(event) {
        window.removeEventListener('load', triggerPrint, false);
        ${printOptions.previewOnly ? "" : `setTimeout(function() {
          closeWindow(window.print());
        }, ${printOptions.printDelay});`}
      }
      function closeWindow(){
        ${printOptions.closeWindow ? "window.close();" : ""}
      }
      window.addEventListener('load', triggerPrint, false);
      window.addEventListener('afterprint', function () {
        if (window.opener) {
          window.opener.postMessage({ type: 'print-complete' }, '*');
        }
        closeWindow();
      }, { once: true });
    `;
    body.appendChild(script);
    html.appendChild(head);
    html.appendChild(body);
    doc.appendChild(html);
    popupWin.document.close();
    const handleMessage = (event) => {
      if (event.data?.type === "print-complete") {
        this.notifyPrintComplete();
        window.removeEventListener("message", handleMessage);
      }
    };
    window.addEventListener("message", handleMessage);
  }
  static \u0275fac = function PrintBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrintBase)(\u0275\u0275inject(CSP_NONCE, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PrintBase,
    factory: _PrintBase.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrintBase, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CSP_NONCE]
    }, {
      type: Optional
    }]
  }], null);
})();
var NgxPrintService = class _NgxPrintService extends PrintBase {
  printComplete$ = this.printComplete.asObservable();
  /**
   * Initiates the printing process using the provided print options.
   *
   * @param {PrintOptions} printOptions - Options for configuring the printing process.
   * @memberof NgxPrintService
   * @returns {void}
   */
  print(printOptions) {
    super.print(printOptions);
  }
  /**
   * Sets the print style for the printing process.
   *
   * @param {{ [key: string]: { [key: string]: string } }} values - A dictionary representing the print styles.
   * @memberof NgxPrintService
   * @setter
   */
  set printStyle(values) {
    super.setPrintStyle(values);
  }
  /**
   * Sets the stylesheet file for the printing process.
   *
   * @param {string} cssList - A string representing the path to the stylesheet file.
   * @memberof NgxPrintService
   * @setter
   */
  set styleSheetFile(cssList) {
    super.setStyleSheetFile(cssList);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NgxPrintService_BaseFactory;
    return function NgxPrintService_Factory(__ngFactoryType__) {
      return (\u0275NgxPrintService_BaseFactory || (\u0275NgxPrintService_BaseFactory = \u0275\u0275getInheritedFactory(_NgxPrintService)))(__ngFactoryType__ || _NgxPrintService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NgxPrintService,
    factory: _NgxPrintService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPrintService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PrintOptions = class {
  printSectionId = "";
  printTitle = "";
  useExistingCss = false;
  bodyClass = "";
  openNewTab = false;
  previewOnly = false;
  closeWindow = true;
  printDelay = 0;
  constructor(options) {
    if (options) {
      Object.assign(this, options);
    }
  }
};
var NgxPrintDirective = class _NgxPrintDirective extends PrintBase {
  printOptions = new PrintOptions();
  /**
   * Prevents the print dialog from opening on the window
   *
   * @memberof NgxPrintDirective
   */
  set previewOnly(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      previewOnly: value
    });
  }
  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  set printSectionId(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      printSectionId: value
    });
  }
  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  set printTitle(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      printTitle: value
    });
  }
  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  set useExistingCss(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      useExistingCss: value
    });
  }
  /**
   * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
   *
   * @memberof NgxPrintDirective
   */
  set printDelay(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      printDelay: value
    });
  }
  /**
   * Whether to close the window after print() returns.
   *
   */
  set closeWindow(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      closeWindow: value
    });
  }
  /**
   * Class attribute to apply to the body element.
   *
   */
  set bodyClass(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      bodyClass: value
    });
  }
  /**
   * Whether to open a new window or default to new window.
   *
   */
  set openNewTab(value) {
    this.printOptions = __spreadProps(__spreadValues({}, this.printOptions), {
      openNewTab: value
    });
  }
  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  set printStyle(values) {
    super.setPrintStyle(values);
  }
  /**
   * @memberof NgxPrintDirective
   * @param cssList
   */
  set styleSheetFile(cssList) {
    super.setStyleSheetFile(cssList);
  }
  /**
   *
   *
   * @memberof NgxPrintDirective
   */
  print() {
    super.print(this.printOptions);
    this.printComplete.pipe(take(1)).subscribe(() => this.printCompleted.emit());
  }
  printCompleted = new EventEmitter();
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NgxPrintDirective_BaseFactory;
    return function NgxPrintDirective_Factory(__ngFactoryType__) {
      return (\u0275NgxPrintDirective_BaseFactory || (\u0275NgxPrintDirective_BaseFactory = \u0275\u0275getInheritedFactory(_NgxPrintDirective)))(__ngFactoryType__ || _NgxPrintDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgxPrintDirective,
    selectors: [["", "ngxPrint", ""]],
    hostBindings: function NgxPrintDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NgxPrintDirective_click_HostBindingHandler() {
          return ctx.print();
        });
      }
    },
    inputs: {
      previewOnly: "previewOnly",
      printSectionId: "printSectionId",
      printTitle: "printTitle",
      useExistingCss: "useExistingCss",
      printDelay: "printDelay",
      closeWindow: "closeWindow",
      bodyClass: "bodyClass",
      openNewTab: "openNewTab",
      printStyle: "printStyle",
      styleSheetFile: "styleSheetFile"
    },
    outputs: {
      printCompleted: "printCompleted"
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPrintDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxPrint]",
      standalone: true
    }]
  }], null, {
    previewOnly: [{
      type: Input
    }],
    printSectionId: [{
      type: Input
    }],
    printTitle: [{
      type: Input
    }],
    useExistingCss: [{
      type: Input
    }],
    printDelay: [{
      type: Input
    }],
    closeWindow: [{
      type: Input
    }],
    bodyClass: [{
      type: Input
    }],
    openNewTab: [{
      type: Input
    }],
    printStyle: [{
      type: Input
    }],
    styleSheetFile: [{
      type: Input
    }],
    print: [{
      type: HostListener,
      args: ["click"]
    }],
    printCompleted: [{
      type: Output
    }]
  });
})();
var NgxPrintModule = class _NgxPrintModule {
  static \u0275fac = function NgxPrintModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxPrintModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NgxPrintModule,
    imports: [NgxPrintDirective],
    exports: [NgxPrintDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPrintModule, [{
    type: NgModule,
    args: [{
      imports: [NgxPrintDirective],
      exports: [NgxPrintDirective]
    }]
  }], null, null);
})();

// src/app/modules/smart-enroll/projects/capture-requirements-dialog.component.ts
var _c0 = (a0, a1) => ({ score: a0, threshold: a1 });
var _forTrack0 = ($index, $item) => $item.key;
function CaptureRequirementsDialogComponent_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "smartEnrollProjects.recordDetail.captureRequirements.scoreLine", \u0275\u0275pureFunction2(4, _c0, ctx_r0.data.scorePercent, ctx_r0.data.thresholdPercent)), " ");
  }
}
function CaptureRequirementsDialogComponent_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordDetail.captureRequirements.qualityNote"), " ");
  }
}
function CaptureRequirementsDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-icon", 12);
    \u0275\u0275elementStart(2, "div", 13)(3, "p", 14);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 15);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CaptureRequirementsDialogComponent_Conditional_7_Conditional_9_Template, 3, 7, "p", 16)(10, CaptureRequirementsDialogComponent_Conditional_7_Conditional_10_Template, 3, 3, "p", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "smartEnrollProjects.recordDetail.captureRequirements.diagnosisTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "smartEnrollProjects.recordDetail.biometricReason." + ctx_r0.data.reason), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isScoreFailure() ? 9 : 10);
  }
}
function CaptureRequirementsDialogComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275element(1, "mat-icon", 18);
    \u0275\u0275elementStart(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const requirement_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("capture-requirements-dialog__item--highlighted", ctx_r0.isHighlighted(requirement_r2));
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", ctx_r0.isHighlighted(requirement_r2) ? "heroicons_outline:x-circle" : "heroicons_outline:check-circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "smartEnrollProjects.recordDetail.captureRequirements.requirement." + requirement_r2.key), " ");
  }
}
var REQUIREMENTS = [
  { key: "singleFace", reasons: ["multiple_faces_detected", "no_face_detected"] },
  { key: "unobstructed", reasons: ["face_occluded"] },
  { key: "faceBox", reasons: ["face_too_far"] },
  { key: "padding", reasons: ["face_close_to_border", "face_not_centered", "face_too_close"] },
  { key: "pupils", reasons: ["face_too_far"] },
  { key: "rotation", reasons: ["face_rotation_too_large"] },
  { key: "lighting", reasons: ["poor_lighting"] },
  { key: "lens", reasons: [] }
];
var CaptureRequirementsDialogComponent = class _CaptureRequirementsDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this._dialogRef = inject(MatDialogRef);
    this.requirements = REQUIREMENTS;
    this.hasReason = computed(() => Boolean(this.data.reason) && this.data.reason !== "liveness_error");
    this.isScoreFailure = computed(() => this.data.reason === "liveness_failed" && this.data.scorePercent != null);
  }
  isHighlighted(requirement) {
    return this.data.reason != null && requirement.reasons.includes(this.data.reason);
  }
  close() {
    this._dialogRef.close();
  }
  static {
    this.\u0275fac = function CaptureRequirementsDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CaptureRequirementsDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaptureRequirementsDialogComponent, selectors: [["capture-requirements-dialog"]], decls: 26, vars: 19, consts: [["mat-dialog-title", "", 1, "capture-requirements-dialog__title"], [1, "capture-requirements-dialog__content"], [1, "capture-requirements-dialog__subtitle"], [1, "capture-requirements-dialog__diagnosis"], [1, "capture-requirements-dialog__section"], [1, "capture-requirements-dialog__list"], [1, "capture-requirements-dialog__item", 3, "capture-requirements-dialog__item--highlighted"], [1, "capture-requirements-dialog__footnote"], ["href", "https://docs.verifik.co/biometrics/face-image-requirements", "target", "_blank", "rel", "noopener noreferrer", 1, "capture-requirements-dialog__docs"], ["svgIcon", "heroicons_outline:arrow-top-right-on-square", 1, "icon-size-4"], ["align", "end", 1, "capture-requirements-dialog__actions"], ["type", "button", "mat-flat-button", "", "color", "primary", 3, "click"], ["svgIcon", "heroicons_outline:exclamation-triangle", 1, "capture-requirements-dialog__diagnosis-icon", "icon-size-5"], [1, "min-w-0"], [1, "capture-requirements-dialog__diagnosis-label"], [1, "capture-requirements-dialog__diagnosis-reason"], [1, "capture-requirements-dialog__diagnosis-score"], [1, "capture-requirements-dialog__item"], [1, "capture-requirements-dialog__item-icon", "icon-size-5", 3, "svgIcon"], [1, "capture-requirements-dialog__item-text"]], template: function CaptureRequirementsDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-dialog-content", 1)(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, CaptureRequirementsDialogComponent_Conditional_7_Template, 11, 7, "div", 3);
        \u0275\u0275elementStart(8, "h3", 4);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "ul", 5);
        \u0275\u0275repeaterCreate(12, CaptureRequirementsDialogComponent_For_13_Template, 5, 6, "li", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 7);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 8);
        \u0275\u0275element(18, "mat-icon", 9);
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "mat-dialog-actions", 10)(23, "button", 11);
        \u0275\u0275listener("click", function CaptureRequirementsDialogComponent_Template_button_click_23_listener() {
          return ctx.close();
        });
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, "smartEnrollProjects.recordDetail.captureRequirements.title"), "\n");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 9, "smartEnrollProjects.recordDetail.captureRequirements.subtitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.hasReason() ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 11, "smartEnrollProjects.recordDetail.captureRequirements.requirementsTitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.requirements);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 13, "smartEnrollProjects.recordDetail.captureRequirements.footnote"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 15, "smartEnrollProjects.recordDetail.captureRequirements.docsLink"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 17, "smartEnrollProjects.recordDetail.captureRequirements.close"), " ");
      }
    }, dependencies: [CommonModule, MatButtonModule, MatButton, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n.capture-requirements-dialog__title[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 1rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__title[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__content[_ngcontent-%COMP%] {\n  max-height: min(70vh, 560px);\n  overflow: auto;\n  padding-top: 0.5rem;\n}\n.capture-requirements-dialog__subtitle[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 0.75rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__subtitle[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 0.5rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(253 230 138 / var(--tw-border-opacity, 1));\n  background-color: rgb(255 251 235 / 0.7);\n  padding: 0.75rem;\n}\n.capture-requirements-dialog__diagnosis[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  border-color: rgb(120 53 15 / 0.4);\n  background-color: rgb(69 26 3 / 0.2);\n}\n.capture-requirements-dialog__diagnosis-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis-icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis-label[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 0.625rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(180 83 9 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis-label[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis-reason[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(120 53 15 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis-reason[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(253 230 138 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis-score[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.625rem;\n  line-height: 1.625;\n  color: rgb(146 64 14 / 0.9);\n}\n.capture-requirements-dialog__diagnosis-score[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  color: rgb(252 211 77 / 0.9);\n}\n.capture-requirements-dialog__section[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  margin-top: 1.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__section[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__list[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: 0.75rem;\n  list-style-type: none;\n}\n.capture-requirements-dialog__list[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.capture-requirements-dialog__list[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.capture-requirements-dialog__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.625rem;\n  border-radius: 0.5rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.capture-requirements-dialog__item--highlighted[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 251 235 / var(--tw-bg-opacity, 1));\n}\n.capture-requirements-dialog__item--highlighted[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  background-color: rgb(69 26 3 / 0.2);\n}\n.capture-requirements-dialog__item-icon[_ngcontent-%COMP%] {\n  margin-top: 0.125rem;\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item-icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item--highlighted[_ngcontent-%COMP%]   .capture-requirements-dialog__item-icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item--highlighted[_ngcontent-%COMP%]   .capture-requirements-dialog__item-icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item-text[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item--highlighted[_ngcontent-%COMP%]   .capture-requirements-dialog__item-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(120 53 15 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item--highlighted[_ngcontent-%COMP%]   .capture-requirements-dialog__item-text[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(253 230 138 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__footnote[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  margin-top: 1rem;\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__footnote[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__docs[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgba(var(--fuse-primary-600-rgb), var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__docs[_ngcontent-%COMP%]:hover {\n  text-decoration-line: underline;\n}\n.capture-requirements-dialog__docs[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgba(var(--fuse-primary-400-rgb), var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__actions[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-bottom: 0.5rem;\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=capture-requirements-dialog.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaptureRequirementsDialogComponent, [{
    type: Component,
    args: [{ selector: "capture-requirements-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h2 mat-dialog-title class="capture-requirements-dialog__title">\r
    {{ 'smartEnrollProjects.recordDetail.captureRequirements.title' | transloco }}\r
</h2>\r
\r
<mat-dialog-content class="capture-requirements-dialog__content">\r
    <p class="capture-requirements-dialog__subtitle">\r
        {{ 'smartEnrollProjects.recordDetail.captureRequirements.subtitle' | transloco }}\r
    </p>\r
\r
    @if (hasReason()) {\r
        <div class="capture-requirements-dialog__diagnosis">\r
            <mat-icon\r
                class="capture-requirements-dialog__diagnosis-icon icon-size-5"\r
                svgIcon="heroicons_outline:exclamation-triangle"\r
            ></mat-icon>\r
            <div class="min-w-0">\r
                <p class="capture-requirements-dialog__diagnosis-label">\r
                    {{ 'smartEnrollProjects.recordDetail.captureRequirements.diagnosisTitle' | transloco }}\r
                </p>\r
                <p class="capture-requirements-dialog__diagnosis-reason">\r
                    {{ 'smartEnrollProjects.recordDetail.biometricReason.' + data.reason | transloco }}\r
                </p>\r
                @if (isScoreFailure()) {\r
                    <p class="capture-requirements-dialog__diagnosis-score">\r
                        {{\r
                            'smartEnrollProjects.recordDetail.captureRequirements.scoreLine'\r
                                | transloco: { score: data.scorePercent, threshold: data.thresholdPercent }\r
                        }}\r
                    </p>\r
                } @else {\r
                    <p class="capture-requirements-dialog__diagnosis-score">\r
                        {{ 'smartEnrollProjects.recordDetail.captureRequirements.qualityNote' | transloco }}\r
                    </p>\r
                }\r
            </div>\r
        </div>\r
    }\r
\r
    <h3 class="capture-requirements-dialog__section">\r
        {{ 'smartEnrollProjects.recordDetail.captureRequirements.requirementsTitle' | transloco }}\r
    </h3>\r
\r
    <ul class="capture-requirements-dialog__list">\r
        @for (requirement of requirements; track requirement.key) {\r
            <li\r
                class="capture-requirements-dialog__item"\r
                [class.capture-requirements-dialog__item--highlighted]="isHighlighted(requirement)"\r
            >\r
                <mat-icon\r
                    class="capture-requirements-dialog__item-icon icon-size-5"\r
                    [svgIcon]="\r
                        isHighlighted(requirement) ? 'heroicons_outline:x-circle' : 'heroicons_outline:check-circle'\r
                    "\r
                ></mat-icon>\r
                <span class="capture-requirements-dialog__item-text">\r
                    {{\r
                        'smartEnrollProjects.recordDetail.captureRequirements.requirement.' + requirement.key | transloco\r
                    }}\r
                </span>\r
            </li>\r
        }\r
    </ul>\r
\r
    <p class="capture-requirements-dialog__footnote">\r
        {{ 'smartEnrollProjects.recordDetail.captureRequirements.footnote' | transloco }}\r
    </p>\r
\r
    <a\r
        class="capture-requirements-dialog__docs"\r
        href="https://docs.verifik.co/biometrics/face-image-requirements"\r
        target="_blank"\r
        rel="noopener noreferrer"\r
    >\r
        <mat-icon class="icon-size-4" svgIcon="heroicons_outline:arrow-top-right-on-square"></mat-icon>\r
        <span>{{ 'smartEnrollProjects.recordDetail.captureRequirements.docsLink' | transloco }}</span>\r
    </a>\r
</mat-dialog-content>\r
\r
<mat-dialog-actions align="end" class="capture-requirements-dialog__actions">\r
    <button type="button" mat-flat-button color="primary" (click)="close()">\r
        {{ 'smartEnrollProjects.recordDetail.captureRequirements.close' | transloco }}\r
    </button>\r
</mat-dialog-actions>\r
`, styles: ["/* src/app/modules/smart-enroll/projects/capture-requirements-dialog.component.scss */\n.capture-requirements-dialog__title {\n  margin: 0px;\n  font-size: 1rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__title:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__content {\n  max-height: min(70vh, 560px);\n  overflow: auto;\n  padding-top: 0.5rem;\n}\n.capture-requirements-dialog__subtitle {\n  margin: 0px;\n  font-size: 0.75rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__subtitle:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis {\n  margin-top: 1rem;\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 0.5rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(253 230 138 / var(--tw-border-opacity, 1));\n  background-color: rgb(255 251 235 / 0.7);\n  padding: 0.75rem;\n}\n.capture-requirements-dialog__diagnosis:where(.dark, .dark *) {\n  border-color: rgb(120 53 15 / 0.4);\n  background-color: rgb(69 26 3 / 0.2);\n}\n.capture-requirements-dialog__diagnosis-icon {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis-icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis-label {\n  margin: 0px;\n  font-size: 0.625rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(180 83 9 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis-label:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis-reason {\n  margin-top: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(120 53 15 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis-reason:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(253 230 138 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__diagnosis-score {\n  margin-top: 0.25rem;\n  font-size: 0.625rem;\n  line-height: 1.625;\n  color: rgb(146 64 14 / 0.9);\n}\n.capture-requirements-dialog__diagnosis-score:where(.dark, .dark *) {\n  color: rgb(252 211 77 / 0.9);\n}\n.capture-requirements-dialog__section {\n  margin-bottom: 0px;\n  margin-top: 1.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__section:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__list {\n  margin: 0px;\n  margin-top: 0.75rem;\n  list-style-type: none;\n}\n.capture-requirements-dialog__list > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.capture-requirements-dialog__list {\n  padding: 0px;\n}\n.capture-requirements-dialog__item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.625rem;\n  border-radius: 0.5rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.capture-requirements-dialog__item--highlighted {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 251 235 / var(--tw-bg-opacity, 1));\n}\n.capture-requirements-dialog__item--highlighted:where(.dark, .dark *) {\n  background-color: rgb(69 26 3 / 0.2);\n}\n.capture-requirements-dialog__item-icon {\n  margin-top: 0.125rem;\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item-icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item--highlighted .capture-requirements-dialog__item-icon {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item--highlighted .capture-requirements-dialog__item-icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item-text {\n  font-size: 0.75rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item-text:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item--highlighted .capture-requirements-dialog__item-text {\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(120 53 15 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__item--highlighted .capture-requirements-dialog__item-text:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(253 230 138 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__footnote {\n  margin-bottom: 0px;\n  margin-top: 1rem;\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__footnote:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__docs {\n  margin-top: 1rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgba(var(--fuse-primary-600-rgb), var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__docs:hover {\n  text-decoration-line: underline;\n}\n.capture-requirements-dialog__docs:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgba(var(--fuse-primary-400-rgb), var(--tw-text-opacity, 1));\n}\n.capture-requirements-dialog__actions {\n  gap: 0.5rem;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-bottom: 0.5rem;\n  padding-top: 1rem;\n}\n/*# sourceMappingURL=capture-requirements-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaptureRequirementsDialogComponent, { className: "CaptureRequirementsDialogComponent", filePath: "src/app/modules/smart-enroll/projects/capture-requirements-dialog.component.ts", lineNumber: 47 });
})();

// src/app/modules/smart-enroll/projects/dev-api-hint-dialog.component.ts
var DevApiHintDialogComponent = class _DevApiHintDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this._dialogRef = inject(MatDialogRef);
    this._clipboard = inject(Clipboard);
    this._snackBar = inject(MatSnackBar);
    this._transloco = inject(TranslocoService);
  }
  copy() {
    this._clipboard.copy(this.data.body);
    this._snackBar.open(this._transloco.translate("smartEnrollProjects.recordDetail.devView.apiHintCopy"), "OK", { duration: 2e3 });
  }
  close() {
    this._dialogRef.close();
  }
  static {
    this.\u0275fac = function DevApiHintDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DevApiHintDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DevApiHintDialogComponent, selectors: [["dev-api-hint-dialog"]], decls: 14, vars: 8, consts: [["mat-dialog-title", "", 1, "dev-api-hint-dialog__title"], [1, "dev-api-hint-dialog__content"], [1, "dev-api-hint-dialog__pre"], ["align", "end", 1, "dev-api-hint-dialog__actions"], ["type", "button", "mat-button", "", 3, "click"], ["type", "button", "mat-flat-button", "", "color", "primary", 3, "click"], [1, "dev-api-hint-dialog__copy-icon"]], template: function DevApiHintDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-dialog-content", 1)(3, "pre", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-dialog-actions", 3)(6, "button", 4);
        \u0275\u0275listener("click", function DevApiHintDialogComponent_Template_button_click_6_listener() {
          return ctx.close();
        });
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function DevApiHintDialogComponent_Template_button_click_9_listener() {
          return ctx.copy();
        });
        \u0275\u0275elementStart(10, "mat-icon", 6);
        \u0275\u0275text(11, "content_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.data.title);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.data.body);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "smartEnrollProjects.recordDetail.devView.apiHintClose"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 6, "smartEnrollProjects.recordDetail.devView.apiHintCopyButton"), " ");
      }
    }, dependencies: [ClipboardModule, CommonModule, MatButtonModule, MatButton, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ['\n\n.dev-api-hint-dialog__title[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 1rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.dev-api-hint-dialog__title[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.dev-api-hint-dialog__content[_ngcontent-%COMP%] {\n  max-height: min(70vh, 520px);\n  overflow: auto;\n  padding-top: 0.5rem;\n}\n.dev-api-hint-dialog__pre[_ngcontent-%COMP%] {\n  margin: 0px;\n  white-space: pre-wrap;\n  overflow-wrap: break-word;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(12 10 9 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(245 245 244 / var(--tw-text-opacity, 1));\n}\n.dev-api-hint-dialog__pre[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  background-color: rgb(0 0 0 / 0.7);\n}\n.dev-api-hint-dialog__actions[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-bottom: 0.5rem;\n  padding-top: 1rem;\n}\n.dev-api-hint-dialog__copy-icon[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n  font-size: 0.875rem;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=dev-api-hint-dialog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevApiHintDialogComponent, [{
    type: Component,
    args: [{ selector: "dev-api-hint-dialog", standalone: true, imports: [ClipboardModule, CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule], template: `<h2 mat-dialog-title class="dev-api-hint-dialog__title">{{ data.title }}</h2>\r
<mat-dialog-content class="dev-api-hint-dialog__content">\r
    <pre class="dev-api-hint-dialog__pre">{{ data.body }}</pre>\r
</mat-dialog-content>\r
<mat-dialog-actions align="end" class="dev-api-hint-dialog__actions">\r
    <button type="button" mat-button (click)="close()">\r
        {{ 'smartEnrollProjects.recordDetail.devView.apiHintClose' | transloco }}\r
    </button>\r
    <button type="button" mat-flat-button color="primary" (click)="copy()">\r
        <mat-icon class="dev-api-hint-dialog__copy-icon">content_copy</mat-icon>\r
        {{ 'smartEnrollProjects.recordDetail.devView.apiHintCopyButton' | transloco }}\r
    </button>\r
</mat-dialog-actions>\r
`, styles: ['/* src/app/modules/smart-enroll/projects/dev-api-hint-dialog.component.scss */\n.dev-api-hint-dialog__title {\n  margin: 0px;\n  font-size: 1rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.dev-api-hint-dialog__title:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.dev-api-hint-dialog__content {\n  max-height: min(70vh, 520px);\n  overflow: auto;\n  padding-top: 0.5rem;\n}\n.dev-api-hint-dialog__pre {\n  margin: 0px;\n  white-space: pre-wrap;\n  overflow-wrap: break-word;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(12 10 9 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(245 245 244 / var(--tw-text-opacity, 1));\n}\n.dev-api-hint-dialog__pre:where(.dark, .dark *) {\n  background-color: rgb(0 0 0 / 0.7);\n}\n.dev-api-hint-dialog__actions {\n  gap: 0.5rem;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-bottom: 0.5rem;\n  padding-top: 1rem;\n}\n.dev-api-hint-dialog__copy-icon {\n  margin-right: 0.25rem;\n  font-size: 0.875rem;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=dev-api-hint-dialog.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DevApiHintDialogComponent, { className: "DevApiHintDialogComponent", filePath: "src/app/modules/smart-enroll/projects/dev-api-hint-dialog.component.ts", lineNumber: 22 });
})();

// src/app/modules/smart-enroll/projects/dev-api-hint.util.ts
var extractMongoId = (ref) => {
  if (ref == null)
    return null;
  if (typeof ref === "string" && ref.trim())
    return ref.trim();
  if (typeof ref === "object" && ref !== null && "_id" in ref) {
    const id = ref._id;
    if (typeof id === "string" && id.trim())
      return id.trim();
  }
  return null;
};
var apiPath = (apiBase, segment) => {
  const base = apiBase.replace(/\/$/, "");
  const seg = segment.startsWith("/") ? segment : `/${segment}`;
  return `${base}/v2${seg}`;
};
var populatesBlock = (populates) => populates.map((p) => `  populates[]=${p}`).join("\n");
var headersBlock = (i18n) => `
${i18n.headers}
  Authorization: Bearer <accessToken>
`;
var listArrayGets = (items, urlForId, maxLines, i18n, moreUrlsLabel) => {
  if (!items.length)
    return i18n.emptyList;
  const ids = items.map(extractMongoId).filter((x) => !!x);
  if (!ids.length)
    return i18n.emptyList;
  const slice = ids.slice(0, maxLines);
  const lines = slice.map((id) => `GET ${urlForId(id)}`);
  const rest = ids.length - slice.length;
  if (rest > 0) {
    lines.push(moreUrlsLabel(rest));
  }
  return lines.join("\n");
};
var buildDevApiHintBody = (sectionKey, value, opts) => {
  const { recordId, project, apiBase, populates, i18n, moreUrlsLabel } = opts;
  const h = headersBlock(i18n);
  switch (sectionKey) {
    case "record": {
      const url = apiPath(apiBase, `/app-registrations/${recordId}`);
      const resendUrl = apiPath(apiBase, `/app-registrations/${recordId}/resend-link`);
      const q = populatesBlock(populates);
      return [
        `GET ${url}`,
        "",
        i18n.populatesExplainer,
        q,
        "",
        i18n.resumeNote,
        `POST ${resendUrl}`,
        '  { "sendEmail": false }',
        "",
        h.trimEnd()
      ].join("\n");
    }
    case "informationValidation": {
      const id = extractMongoId(value);
      if (!id)
        return i18n.noId;
      return `GET ${apiPath(apiBase, `/information-validations/${id}`)}${h}`;
    }
    case "emailValidation": {
      const id = extractMongoId(value);
      if (!id)
        return i18n.noId;
      return `GET ${apiPath(apiBase, `/email-validations/${id}`)}${h}`;
    }
    case "phoneValidation": {
      const id = extractMongoId(value);
      if (!id)
        return i18n.noId;
      return `GET ${apiPath(apiBase, `/phone-validations/${id}`)}${h}`;
    }
    case "documentValidation": {
      const id = extractMongoId(value);
      if (!id)
        return i18n.noId;
      return `GET ${apiPath(apiBase, `/document-validations/${id}`)}${h}`;
    }
    case "documentFace":
    case "face": {
      const id = extractMongoId(value);
      if (!id)
        return i18n.noId;
      return `GET ${apiPath(apiBase, `/identity-images/${id}`)}${h}`;
    }
    case "failedDocumentValidations": {
      const items = Array.isArray(value) ? value : [];
      const block = listArrayGets(items, (id) => apiPath(apiBase, `/document-validations/${id}`), 15, i18n, moreUrlsLabel);
      return `${block}${items.length ? h : ""}`;
    }
    case "biometricValidation": {
      const id = extractMongoId(value);
      if (!id)
        return i18n.noId;
      return `GET ${apiPath(apiBase, `/biometric-validations/${id}`)}${h}`;
    }
    case "failedBiometricValidations": {
      const items = Array.isArray(value) ? value : [];
      const block = listArrayGets(items, (id) => apiPath(apiBase, `/biometric-validations/${id}`), 15, i18n, moreUrlsLabel);
      return `${block}${items.length ? h : ""}`;
    }
    case "person": {
      const id = extractMongoId(value);
      if (!id)
        return i18n.noId;
      return `GET ${apiPath(apiBase, `/face-recognition/persons/${id}`)}${h}`;
    }
    case "compareFaceVerification": {
      const nestedId = extractMongoId(value);
      const url = apiPath(apiBase, `/app-registrations/${recordId}`);
      const parts = [
        i18n.noDirectCompare,
        nestedId ? `FaceVerification _id: ${nestedId}` : "",
        "",
        i18n.compareFallback,
        `GET ${url}`,
        "  populates[]=compareFaceVerification",
        "",
        h.trimEnd()
      ].filter(Boolean);
      return parts.join("\n");
    }
    case "projectFlow": {
      const id = extractMongoId(value);
      if (!id)
        return i18n.noId;
      return `GET ${apiPath(apiBase, `/project-flows/${id}`)}${h}`;
    }
    case "project": {
      const id = extractMongoId(value) ?? project?._id;
      if (!id)
        return i18n.noId;
      return `GET ${apiPath(apiBase, `/projects/${id}`)}${h}`;
    }
    case "webhookEvents": {
      const baseUrl = apiPath(apiBase, "/webhook-events");
      const populateSelects = '{"projectFlow":"project","project":"name"}';
      const params = [
        `where_appRegistration=${encodeURIComponent(recordId)}`,
        "where_status=sent",
        "sort=-createdAt",
        "page=1",
        "perPage=10",
        "populates[]=projectFlow.project",
        `populateSelects=${encodeURIComponent(populateSelects)}`
      ];
      return [i18n.webhookNote, "", `GET ${baseUrl}?${params.join("&")}`, "", h.trimEnd()].join("\n");
    }
    default:
      return i18n.noId;
  }
};

// src/app/modules/smart-enroll/projects/enroll-resume-help-dialog.component.ts
var SMARTENROLL_RESUME_DOCS_PATH = "/smartenroll/resume";
var SMARTENROLL_RESUME_DOCS_URL = docsPageUrl(SMARTENROLL_RESUME_DOCS_PATH);
var EnrollResumeHelpDialogComponent = class _EnrollResumeHelpDialogComponent {
  constructor() {
    this._dialogRef = inject(MatDialogRef);
    this.docsUrl = SMARTENROLL_RESUME_DOCS_URL;
  }
  close() {
    this._dialogRef.close();
  }
  static {
    this.\u0275fac = function EnrollResumeHelpDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnrollResumeHelpDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnrollResumeHelpDialogComponent, selectors: [["enroll-resume-help-dialog"]], decls: 34, vars: 28, consts: [[1, "resume-help-dialog__header"], ["mat-dialog-title", "", 1, "resume-help-dialog__title"], ["mat-icon-button", "", "type", "button", 1, "resume-help-dialog__close", 3, "click"], [1, "resume-help-dialog__content"], [1, "resume-help-dialog__intro"], [1, "resume-help-dialog__list"], ["align", "end", 1, "resume-help-dialog__actions"], ["type", "button", "mat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "resume-help-dialog__docs-icon"]], template: function EnrollResumeHelpDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275listener("click", function EnrollResumeHelpDialogComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "mat-dialog-content", 3)(9, "p", 4);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "ul", 5)(13, "li");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "li");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "li");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "mat-dialog-actions", 6)(26, "button", 7);
        \u0275\u0275listener("click", function EnrollResumeHelpDialogComponent_Template_button_click_26_listener() {
          return ctx.close();
        });
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "a", 8)(30, "mat-icon", 9);
        \u0275\u0275text(31, "open_in_new");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, "smartEnrollProjects.recordDetail.resumeHelp.title"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 12, "smartEnrollProjects.recordDetail.resumeHelp.close"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "smartEnrollProjects.recordDetail.resumeHelp.intro"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 16, "smartEnrollProjects.recordDetail.resumeHelp.storeId"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 18, "smartEnrollProjects.recordDetail.resumeHelp.createToken"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 20, "smartEnrollProjects.recordDetail.resumeHelp.resendLink"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 22, "smartEnrollProjects.recordDetail.resumeHelp.notResume"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 24, "smartEnrollProjects.recordDetail.resumeHelp.close"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.docsUrl, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 26, "smartEnrollProjects.recordDetail.resumeHelp.openDocs"), " ");
      }
    }, dependencies: [CommonModule, MatButtonModule, MatAnchor, MatButton, MatIconButton, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n.resume-help-dialog__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.resume-help-dialog__title[_ngcontent-%COMP%] {\n  margin: 0px;\n  flex: 1 1 0%;\n  padding-right: 0.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.375;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__title[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__close[_ngcontent-%COMP%] {\n  margin-right: -0.25rem;\n  margin-top: -0.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__close[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__content[_ngcontent-%COMP%] {\n  max-height: min(70vh, 480px);\n  overflow: auto;\n  padding-top: 0.25rem;\n}\n.resume-help-dialog__intro[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 0.75rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__intro[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__list[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  list-style-type: disc;\n}\n.resume-help-dialog__list[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));\n}\n.resume-help-dialog__list[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n  font-size: 0.75rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__list[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__actions[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-bottom: 0.25rem;\n  padding-top: 1rem;\n}\n.resume-help-dialog__docs-icon[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n  font-size: 0.875rem;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=enroll-resume-help-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnrollResumeHelpDialogComponent, [{
    type: Component,
    args: [{ selector: "enroll-resume-help-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule], template: `<div class="resume-help-dialog__header">\r
    <h2 mat-dialog-title class="resume-help-dialog__title">\r
        {{ 'smartEnrollProjects.recordDetail.resumeHelp.title' | transloco }}\r
    </h2>\r
    <button\r
        mat-icon-button\r
        type="button"\r
        class="resume-help-dialog__close"\r
        (click)="close()"\r
        [attr.aria-label]="'smartEnrollProjects.recordDetail.resumeHelp.close' | transloco"\r
    >\r
        <mat-icon>close</mat-icon>\r
    </button>\r
</div>\r
\r
<mat-dialog-content class="resume-help-dialog__content">\r
    <p class="resume-help-dialog__intro">\r
        {{ 'smartEnrollProjects.recordDetail.resumeHelp.intro' | transloco }}\r
    </p>\r
    <ul class="resume-help-dialog__list">\r
        <li>{{ 'smartEnrollProjects.recordDetail.resumeHelp.storeId' | transloco }}</li>\r
        <li>{{ 'smartEnrollProjects.recordDetail.resumeHelp.createToken' | transloco }}</li>\r
        <li>{{ 'smartEnrollProjects.recordDetail.resumeHelp.resendLink' | transloco }}</li>\r
        <li>{{ 'smartEnrollProjects.recordDetail.resumeHelp.notResume' | transloco }}</li>\r
    </ul>\r
</mat-dialog-content>\r
\r
<mat-dialog-actions align="end" class="resume-help-dialog__actions">\r
    <button type="button" mat-button (click)="close()">\r
        {{ 'smartEnrollProjects.recordDetail.resumeHelp.close' | transloco }}\r
    </button>\r
    <a mat-flat-button color="primary" [href]="docsUrl" target="_blank" rel="noopener noreferrer">\r
        <mat-icon class="resume-help-dialog__docs-icon">open_in_new</mat-icon>\r
        {{ 'smartEnrollProjects.recordDetail.resumeHelp.openDocs' | transloco }}\r
    </a>\r
</mat-dialog-actions>\r
`, styles: ["/* src/app/modules/smart-enroll/projects/enroll-resume-help-dialog.component.scss */\n.resume-help-dialog__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.resume-help-dialog__title {\n  margin: 0px;\n  flex: 1 1 0%;\n  padding-right: 0.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.375;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__title:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__close {\n  margin-right: -0.25rem;\n  margin-top: -0.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__close:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__content {\n  max-height: min(70vh, 480px);\n  overflow: auto;\n  padding-top: 0.25rem;\n}\n.resume-help-dialog__intro {\n  margin: 0px;\n  font-size: 0.75rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__intro:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__list {\n  margin-top: 1rem;\n  list-style-type: disc;\n}\n.resume-help-dialog__list > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));\n}\n.resume-help-dialog__list {\n  padding-left: 1.25rem;\n  font-size: 0.75rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__list:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.resume-help-dialog__actions {\n  gap: 0.5rem;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-bottom: 0.25rem;\n  padding-top: 1rem;\n}\n.resume-help-dialog__docs-icon {\n  margin-right: 0.25rem;\n  font-size: 0.875rem;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=enroll-resume-help-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnrollResumeHelpDialogComponent, { className: "EnrollResumeHelpDialogComponent", filePath: "src/app/modules/smart-enroll/projects/enroll-resume-help-dialog.component.ts", lineNumber: 19 });
})();

// src/app/modules/smart-enroll/projects/enroll-resend-link-dialog.component.ts
function EnrollResendLinkDialogComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon", 9);
    \u0275\u0275text(2, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.recipientEmail);
  }
}
function EnrollResendLinkDialogComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.resendGeneratedLink"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.generatedLink(), " ");
  }
}
function EnrollResendLinkDialogComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordDetail.resendNoEmail"), " ");
  }
}
function EnrollResendLinkDialogComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "smartEnrollProjects.recordDetail.resendProcessing"));
  }
}
var EnrollResendLinkDialogComponent = class _EnrollResendLinkDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this._dialogRef = inject(MatDialogRef);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._snackBar = inject(MatSnackBar);
    this._clipboard = inject(Clipboard);
    this._transloco = inject(TranslocoService);
    this._dialog = inject(MatDialog);
    this.loading = signal(false);
    this.generatedLink = signal("");
    this.showLink = signal(false);
  }
  get recipientName() {
    const info = this.data.record?.informationValidation ?? {};
    const full = typeof info["fullName"] === "string" ? info["fullName"] : "";
    if (full)
      return full;
    const first = typeof info["firstName"] === "string" ? info["firstName"] : "";
    const last = typeof info["lastName"] === "string" ? info["lastName"] : "";
    return `${first} ${last}`.trim();
  }
  get recipientEmail() {
    const info = this.data.record?.informationValidation ?? {};
    return typeof info["email"] === "string" ? info["email"] : "";
  }
  copyLink() {
    if (this.loading() || !this.data.record?._id)
      return;
    this.loading.set(true);
    this._projectsService.resendAppRegistrationLink(this.data.record._id, false).subscribe({
      next: (response) => {
        const link = response?.data?.link ?? "";
        this.generatedLink.set(link);
        this.showLink.set(true);
        const success = link ? this._clipboard.copy(link) : false;
        this.loading.set(false);
        if (success) {
          this._dialogRef.close({ success: true, emailSent: false });
          return;
        }
        this._snackBar.open(this._transloco.translate("smartEnrollProjects.recordDetail.resendErrorGeneric"), "OK", { duration: 3e3 });
      },
      error: (error) => {
        this.loading.set(false);
        const message = error?.error?.message ?? this._transloco.translate("smartEnrollProjects.recordDetail.resendErrorGeneric");
        this._snackBar.open(message, "OK", { duration: 3e3 });
      }
    });
  }
  sendEmail() {
    if (this.loading() || !this.data.record?._id)
      return;
    if (!this.recipientEmail) {
      this._snackBar.open(this._transloco.translate("smartEnrollProjects.recordDetail.resendNoEmail"), "OK", { duration: 3e3 });
      return;
    }
    this.loading.set(true);
    this._projectsService.resendAppRegistrationLink(this.data.record._id, true).subscribe({
      next: () => {
        this.loading.set(false);
        this._dialogRef.close({ success: true, emailSent: true });
      },
      error: (error) => {
        this.loading.set(false);
        const message = error?.error?.message ?? this._transloco.translate("smartEnrollProjects.recordDetail.resendErrorGeneric");
        this._snackBar.open(message, "OK", { duration: 3e3 });
      }
    });
  }
  openResumeHelpDialog() {
    this._dialog.open(EnrollResumeHelpDialogComponent, {
      width: "560px",
      maxWidth: "92vw",
      panelClass: "enroll-resume-help-dialog-panel"
    });
  }
  close() {
    this._dialogRef.close();
  }
  static {
    this.\u0275fac = function EnrollResendLinkDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnrollResendLinkDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnrollResendLinkDialogComponent, selectors: [["enroll-resend-link-dialog"]], decls: 42, vars: 31, consts: [[1, "flex", "items-start", "justify-between", "gap-4"], ["mat-dialog-title", "", 1, "!m-0", "!font-semibold", "!text-lg", "!leading-snug", "!tracking-tight", "text-stone-900", "dark:text-white", "md:!text-xl"], ["mat-icon-button", "", "type", "button", 1, "!text-stone-500", "dark:!text-stone-400", 3, "click"], [1, "mt-1", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "mt-3", "flex", "items-start", "gap-2", "rounded-xl", "border", "border-blue-200/80", "bg-blue-50/80", "px-3", "py-2.5", "dark:border-blue-900/50", "dark:bg-blue-950/30"], [1, "min-w-0", "flex-1", "text-xs", "leading-relaxed", "text-stone-700", "dark:text-stone-200"], ["mat-icon-button", "", "type", "button", 1, "!-mr-1", "!-mt-1", "!h-8", "!w-8", "!text-stone-500", "dark:!text-stone-300", 3, "click", "matTooltip"], [1, "mt-5", "rounded-xl", "border", "border-stone-200/90", "bg-stone-50", "p-4", "dark:border-gray-800", "dark:bg-gray-900/60"], [1, "flex", "items-center", "gap-2"], [1, "icon-size-4", "!text-stone-500"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-200"], [1, "mt-2", "flex", "items-center", "gap-2"], [1, "mt-4", "rounded-xl", "border", "border-blue-200/80", "bg-blue-50/80", "p-4", "dark:border-blue-900/50", "dark:bg-blue-950/30"], [1, "mt-5", "flex", "flex-col", "gap-3"], ["mat-stroked-button", "", "type", "button", "color", "primary", 1, "!h-11", "!rounded-xl", 3, "click", "disabled"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "!h-11", "!rounded-xl", 3, "click", "disabled"], [1, "text-center", "text-xs", "text-red-600", "dark:text-red-400"], [1, "mt-4", "flex", "items-center", "justify-center", "gap-2", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "text-xs", "font-semibold", "text-blue-700", "dark:text-blue-300"], [1, "mt-2", "break-all", "rounded-lg", "bg-white/90", "px-3", "py-2", "font-mono", "text-xs", "text-stone-700", "dark:bg-gray-950/80", "dark:text-stone-200"], ["diameter", "20"]], template: function EnrollResendLinkDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275listener("click", function EnrollResendLinkDialogComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "mat-dialog-content")(9, "p", 3);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 4)(13, "p", 5);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 6);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275listener("click", function EnrollResendLinkDialogComponent_Template_button_click_16_listener() {
          return ctx.openResumeHelpDialog();
        });
        \u0275\u0275elementStart(19, "mat-icon");
        \u0275\u0275text(20, "help_outline");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 7)(22, "div", 8)(23, "mat-icon", 9);
        \u0275\u0275text(24, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 10);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(27, EnrollResendLinkDialogComponent_Conditional_27_Template, 5, 1, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, EnrollResendLinkDialogComponent_Conditional_28_Template, 6, 4, "div", 12);
        \u0275\u0275elementStart(29, "div", 13)(30, "button", 14);
        \u0275\u0275listener("click", function EnrollResendLinkDialogComponent_Template_button_click_30_listener() {
          return ctx.copyLink();
        });
        \u0275\u0275elementStart(31, "mat-icon");
        \u0275\u0275text(32, "content_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 15);
        \u0275\u0275listener("click", function EnrollResendLinkDialogComponent_Template_button_click_35_listener() {
          return ctx.sendEmail();
        });
        \u0275\u0275elementStart(36, "mat-icon");
        \u0275\u0275text(37, "send");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(40, EnrollResendLinkDialogComponent_Conditional_40_Template, 3, 3, "p", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(41, EnrollResendLinkDialogComponent_Conditional_41_Template, 5, 3, "div", 17);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 15, "smartEnrollProjects.recordDetail.resendDialogTitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 17, "smartEnrollProjects.recordDetail.resendDialogClose"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 19, "smartEnrollProjects.recordDetail.resendDialogDescription"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 21, "smartEnrollProjects.recordDetail.resendDialogIntegratorNote"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 23, "smartEnrollProjects.recordDetail.resumeHelp.iconLabel"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 25, "smartEnrollProjects.recordDetail.resumeHelp.iconLabel"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.recipientName || "\u2014");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.recipientEmail ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showLink() && ctx.generatedLink() ? 28 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 27, "smartEnrollProjects.recordDetail.resendCopyLink"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading() || !ctx.recipientEmail);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 29, "smartEnrollProjects.recordDetail.resendSendEmail"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.recipientEmail ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 41 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatDialogModule,
      MatDialogTitle,
      MatDialogContent,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTooltipModule,
      MatTooltip,
      TranslocoModule,
      TranslocoPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnrollResendLinkDialogComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "enroll-resend-link-dialog", imports: [
      CommonModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      TranslocoModule
    ], template: `<div class="flex items-start justify-between gap-4">\r
    <h2\r
        mat-dialog-title\r
        class="!m-0 !font-semibold !text-lg !leading-snug !tracking-tight text-stone-900 dark:text-white md:!text-xl"\r
    >\r
        {{ 'smartEnrollProjects.recordDetail.resendDialogTitle' | transloco }}\r
    </h2>\r
    <button\r
        mat-icon-button\r
        type="button"\r
        class="!text-stone-500 dark:!text-stone-400"\r
        (click)="close()"\r
        [attr.aria-label]="'smartEnrollProjects.recordDetail.resendDialogClose' | transloco"\r
    >\r
        <mat-icon>close</mat-icon>\r
    </button>\r
</div>\r
\r
<mat-dialog-content>\r
    <p class="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">\r
        {{ 'smartEnrollProjects.recordDetail.resendDialogDescription' | transloco }}\r
    </p>\r
    <div class="mt-3 flex items-start gap-2 rounded-xl border border-blue-200/80 bg-blue-50/80 px-3 py-2.5 dark:border-blue-900/50 dark:bg-blue-950/30">\r
        <p class="min-w-0 flex-1 text-xs leading-relaxed text-stone-700 dark:text-stone-200">\r
            {{ 'smartEnrollProjects.recordDetail.resendDialogIntegratorNote' | transloco }}\r
        </p>\r
        <button\r
            mat-icon-button\r
            type="button"\r
            class="!-mr-1 !-mt-1 !h-8 !w-8 !text-stone-500 dark:!text-stone-300"\r
            (click)="openResumeHelpDialog()"\r
            [matTooltip]="'smartEnrollProjects.recordDetail.resumeHelp.iconLabel' | transloco"\r
            [attr.aria-label]="'smartEnrollProjects.recordDetail.resumeHelp.iconLabel' | transloco"\r
        >\r
            <mat-icon>help_outline</mat-icon>\r
        </button>\r
    </div>\r
\r
    <div class="mt-5 rounded-xl border border-stone-200/90 bg-stone-50 p-4 dark:border-gray-800 dark:bg-gray-900/60">\r
        <div class="flex items-center gap-2">\r
            <mat-icon class="icon-size-4 !text-stone-500">person</mat-icon>\r
            <span class="text-sm font-medium text-stone-700 dark:text-stone-200">{{ recipientName || '\u2014' }}</span>\r
        </div>\r
        @if (recipientEmail) {\r
            <div class="mt-2 flex items-center gap-2">\r
                <mat-icon class="icon-size-4 !text-stone-500">mail</mat-icon>\r
                <span class="text-sm text-stone-600 dark:text-stone-300">{{ recipientEmail }}</span>\r
            </div>\r
        }\r
    </div>\r
\r
    @if (showLink() && generatedLink()) {\r
        <div class="mt-4 rounded-xl border border-blue-200/80 bg-blue-50/80 p-4 dark:border-blue-900/50 dark:bg-blue-950/30">\r
            <p class="text-xs font-semibold text-blue-700 dark:text-blue-300">\r
                {{ 'smartEnrollProjects.recordDetail.resendGeneratedLink' | transloco }}\r
            </p>\r
            <p class="mt-2 break-all rounded-lg bg-white/90 px-3 py-2 font-mono text-xs text-stone-700 dark:bg-gray-950/80 dark:text-stone-200">\r
                {{ generatedLink() }}\r
            </p>\r
        </div>\r
    }\r
\r
    <div class="mt-5 flex flex-col gap-3">\r
        <button\r
            mat-stroked-button\r
            type="button"\r
            color="primary"\r
            class="!h-11 !rounded-xl"\r
            [disabled]="loading()"\r
            (click)="copyLink()"\r
        >\r
            <mat-icon>content_copy</mat-icon>\r
            {{ 'smartEnrollProjects.recordDetail.resendCopyLink' | transloco }}\r
        </button>\r
\r
        <button\r
            mat-flat-button\r
            type="button"\r
            color="primary"\r
            class="!h-11 !rounded-xl"\r
            [disabled]="loading() || !recipientEmail"\r
            (click)="sendEmail()"\r
        >\r
            <mat-icon>send</mat-icon>\r
            {{ 'smartEnrollProjects.recordDetail.resendSendEmail' | transloco }}\r
        </button>\r
\r
        @if (!recipientEmail) {\r
            <p class="text-center text-xs text-red-600 dark:text-red-400">\r
                {{ 'smartEnrollProjects.recordDetail.resendNoEmail' | transloco }}\r
            </p>\r
        }\r
    </div>\r
\r
    @if (loading()) {\r
        <div class="mt-4 flex items-center justify-center gap-2 text-sm text-stone-600 dark:text-stone-300">\r
            <mat-spinner diameter="20"></mat-spinner>\r
            <span>{{ 'smartEnrollProjects.recordDetail.resendProcessing' | transloco }}</span>\r
        </div>\r
    }\r
</mat-dialog-content>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnrollResendLinkDialogComponent, { className: "EnrollResendLinkDialogComponent", filePath: "src/app/modules/smart-enroll/projects/enroll-resend-link-dialog.component.ts", lineNumber: 38 });
})();

// src/app/modules/smart-enroll/projects/document-face-dialog.component.ts
function DocumentFaceDialogComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.documentFaceDialog.detecting"), " ");
  }
}
function DocumentFaceDialogComponent_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 15)(2, "p", 16);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 18);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "img", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "smartEnrollProjects.recordDetail.documentFaceDialog.foundLabel"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, ctx_r0.source() === "back" ? "smartEnrollProjects.recordDetail.documentFaceDialog.foundOnBack" : "smartEnrollProjects.recordDetail.documentFaceDialog.foundOnFront"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 8, "smartEnrollProjects.recordDetail.documentFaceDialog.checkHint"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.cropPreview(), \u0275\u0275sanitizeUrl);
  }
}
function DocumentFaceDialogComponent_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon", 20);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "smartEnrollProjects.recordDetail.documentFaceDialog.noFace"), " ");
  }
}
function DocumentFaceDialogComponent_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon", 22);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "smartEnrollProjects.recordDetail.documentFaceDialog.noScan"), " ");
  }
}
function DocumentFaceDialogComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function DocumentFaceDialogComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function DocumentFaceDialogComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.detect());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartEnrollProjects.recordDetail.documentFaceDialog.retry"), " ");
  }
}
function DocumentFaceDialogComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 13);
  }
}
function DocumentFaceDialogComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
var DocumentFaceDialogComponent = class _DocumentFaceDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this._dialogRef = inject(MatDialogRef);
    this._faceCrop = inject(FaceCropService);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._transloco = inject(TranslocoService);
    this.state = signal("detecting");
    this.source = signal(null);
    this.cropPreview = signal(null);
    this.submitting = signal(false);
    this.errorMessage = signal(null);
    this._cropBase64 = null;
  }
  ngOnInit() {
    void this.detect();
  }
  detect() {
    return __async(this, null, function* () {
      this.state.set("detecting");
      this.errorMessage.set(null);
      const sides = [
        ...this.data.frontUrl ? [{ side: "front", url: this.data.frontUrl }] : [],
        ...this.data.backUrl ? [{ side: "back", url: this.data.backUrl }] : []
      ];
      if (!sides.length) {
        this.state.set("unreadable");
        return;
      }
      for (const { side, url } of sides) {
        const crop = yield this._cropOrNull(url);
        if (!crop)
          continue;
        this._cropBase64 = crop;
        this.cropPreview.set(`data:image/jpeg;base64,${crop}`);
        this.source.set(side);
        this.state.set("ready");
        return;
      }
      this.state.set("noFace");
    });
  }
  confirm() {
    if (!this._cropBase64 || this.submitting())
      return;
    this.submitting.set(true);
    this.errorMessage.set(null);
    this._projectsService.rerunCompare(this.data.appRegistrationId, this._cropBase64).pipe(finalize(() => this.submitting.set(false))).subscribe({
      next: () => this._dialogRef.close({ success: true }),
      error: (error) => {
        const message = error?.error?.message ?? this._transloco.translate("smartEnrollProjects.recordDetail.documentFaceDialog.rerunError");
        this.errorMessage.set(message);
      }
    });
  }
  close() {
    if (this.submitting())
      return;
    this._dialogRef.close({ success: false });
  }
  /**
   * Detection failure and a scan that cannot be read at all are the same outcome here: this side
   * has no portrait to offer, so move on to the next one.
   */
  _cropOrNull(url) {
    return __async(this, null, function* () {
      try {
        return yield this._faceCrop.cropLargestFaceFromUrl(url);
      } catch {
        return null;
      }
    });
  }
  static {
    this.\u0275fac = function DocumentFaceDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentFaceDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentFaceDialogComponent, selectors: [["document-face-dialog"]], decls: 27, vars: 22, consts: [[1, "flex", "items-start", "justify-between", "gap-4"], ["mat-dialog-title", "", 1, "!m-0", "!font-semibold", "!text-lg", "!leading-snug", "!tracking-tight", "text-stone-900", "dark:text-white", "md:!text-xl"], ["mat-icon-button", "", "type", "button", 1, "!text-stone-500", "dark:!text-stone-400", 3, "click", "disabled"], [1, "mt-1", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "mt-6", "flex", "items-center", "gap-3", "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "mt-5", "grid", "gap-4", "md:grid-cols-[minmax(0,1fr)_auto]"], [1, "mt-5", "flex", "items-start", "gap-2.5", "rounded-xl", "border", "border-amber-200/80", "bg-amber-50/80", "p-3.5", "dark:border-amber-900/50", "dark:bg-amber-950/30"], [1, "mt-5", "flex", "items-start", "gap-2.5", "rounded-xl", "border", "border-stone-200/90", "bg-stone-50/90", "p-3.5", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mt-4", "rounded-xl", "border", "border-red-200/90", "bg-red-50/90", "px-4", "py-3", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "mt-6", "flex", "items-center", "justify-end", "gap-3"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-xl", 3, "click", "disabled"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-xl"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "!rounded-xl", 3, "click", "disabled"], ["diameter", "18"], ["diameter", "20"], [1, "rounded-xl", "border", "border-stone-200/90", "bg-white", "p-3.5", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "text-sm", "text-stone-700", "dark:text-stone-300"], [1, "mt-3", "text-xs", "leading-relaxed", "text-stone-500", "dark:text-stone-400"], ["alt", "", 1, "h-40", "w-40", "rounded-xl", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "icon-size-5", "shrink-0", "!text-amber-600", "dark:!text-amber-400"], [1, "text-xs", "leading-relaxed", "text-amber-900", "dark:text-amber-200"], [1, "icon-size-5", "shrink-0", "!text-stone-500", "dark:!text-stone-400"], [1, "text-xs", "leading-relaxed", "text-stone-700", "dark:text-stone-300"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-xl", 3, "click"]], template: function DocumentFaceDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275listener("click", function DocumentFaceDialogComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "mat-dialog-content")(9, "p", 3);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, DocumentFaceDialogComponent_Case_12_Template, 4, 3, "div", 4)(13, DocumentFaceDialogComponent_Case_13_Template, 12, 10, "div", 5)(14, DocumentFaceDialogComponent_Case_14_Template, 6, 3, "div", 6)(15, DocumentFaceDialogComponent_Case_15_Template, 6, 3, "div", 7)(16, DocumentFaceDialogComponent_Conditional_16_Template, 2, 1, "div", 8);
        \u0275\u0275elementStart(17, "div", 9)(18, "button", 10);
        \u0275\u0275listener("click", function DocumentFaceDialogComponent_Template_button_click_18_listener() {
          return ctx.close();
        });
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, DocumentFaceDialogComponent_Conditional_21_Template, 5, 3, "button", 11);
        \u0275\u0275elementStart(22, "button", 12);
        \u0275\u0275listener("click", function DocumentFaceDialogComponent_Template_button_click_22_listener() {
          return ctx.confirm();
        });
        \u0275\u0275template(23, DocumentFaceDialogComponent_Conditional_23_Template, 1, 0, "mat-spinner", 13)(24, DocumentFaceDialogComponent_Conditional_24_Template, 2, 0, "mat-icon");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "smartEnrollProjects.recordDetail.documentFaceDialog.title"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.submitting());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 14, "smartEnrollProjects.recordDetail.documentFaceDialog.close"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 16, "smartEnrollProjects.recordDetail.documentFaceDialog.subtitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_4_0 = ctx.state()) === "detecting" ? 12 : tmp_4_0 === "ready" ? 13 : tmp_4_0 === "noFace" ? 14 : tmp_4_0 === "unreadable" ? 15 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.errorMessage() ? 16 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.submitting());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 18, "smartEnrollProjects.recordDetail.documentFaceDialog.cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.state() === "noFace" ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.state() !== "ready" || ctx.submitting());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitting() ? 23 : 24);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 20, "smartEnrollProjects.recordDetail.documentFaceDialog.confirm"), " ");
      }
    }, dependencies: [CommonModule, MatButtonModule, MatButton, MatIconButton, MatDialogModule, MatDialogTitle, MatDialogContent, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, TranslocoModule, TranslocoPipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%]     .mat-mdc-dialog-content {\n  max-height: none;\n  overflow: visible;\n}\n[_nghost-%COMP%]     .mdc-dialog__content {\n  max-height: none;\n  overflow: visible;\n}\n.resolve-option[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  padding: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.resolve-option[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.resolve-option__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.resolve-option__text[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0px;\n  flex: 1 1 0%;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.resolve-option__title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.resolve-option__title[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.resolve-option__check--muted[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check--muted[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--ok[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--ok[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(110 231 183 / var(--tw-border-opacity, 1));\n  background-color: rgb(236 253 245 / 0.9);\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(6 95 70 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 44 34 / 0.3);\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--warn[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--warn[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 211 77 / var(--tw-border-opacity, 1));\n  background-color: rgb(255 251 235 / 0.9);\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(146 64 14 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 26 3 / 0.3);\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--error[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--error[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity, 1));\n  background-color: rgb(254 242 242 / 0.9);\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(153 27 27 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 10 10 / 0.3);\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.doc-type-detect[_ngcontent-%COMP%] {\n  appearance: none;\n  margin-top: 1.25rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.doc-type-detect[_ngcontent-%COMP%]:hover:not(:disabled) {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background-color: #111827;\n}\n.dark[_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%]:hover:not(:disabled), .dark   [_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6b7280;\n  background-color: #1f2937;\n}\n.doc-type-detect[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-detect__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect__icon[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n.doc-type-detect__text[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0px;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.doc-type-detect__title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect__title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.doc-type-detect__hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect__hint[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.doc-type-or[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]::before, \n.doc-type-or[_ngcontent-%COMP%]::after {\n  height: 1px;\n  flex: 1 1 0%;\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 229 228 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]:where(.dark, .dark *)::before, \n.doc-type-or[_ngcontent-%COMP%]:where(.dark, .dark *)::after {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]::before, \n.doc-type-or[_ngcontent-%COMP%]::after {\n  content: "";\n}\n.doc-type-search[_ngcontent-%COMP%] {\n  appearance: none;\n}\n.dark[_nghost-%COMP%]   .doc-type-search[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-search[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter[_ngcontent-%COMP%] {\n  appearance: none;\n  flex-shrink: 0;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(41 37 36 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-filter[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-filter[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter--active[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .doc-type-filter--active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-filter--active[_ngcontent-%COMP%] {\n  border-color: #e7e5e4;\n  background-color: #f5f5f4;\n  color: #1c1917;\n}\n.doc-type-list[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  max-height: 16rem;\n  overflow-y: auto;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-list[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-list[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n}\n.doc-type-option[_ngcontent-%COMP%] {\n  appearance: none;\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  text-align: left;\n}\n.doc-type-option[_ngcontent-%COMP%]:last-child {\n  border-bottom-width: 0px;\n}\n.dark[_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%] {\n  border-bottom-color: #374151;\n  background-color: #111827;\n}\n.doc-type-option[_ngcontent-%COMP%]:hover:not(:disabled) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%]:hover:not(:disabled), .dark   [_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1f2937;\n}\n.doc-type-option[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-option__name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.doc-type-option__country[_ngcontent-%COMP%] {\n  margin-top: 0.125rem;\n  display: block;\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.doc-type-option__radio[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.doc-type-option--selected[_ngcontent-%COMP%] {\n  background-color: #e7e5e4;\n}\n.doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], \n.doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%] {\n  color: #1c1917;\n}\n.doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%] {\n  color: #44403c;\n}\n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%] {\n  background-color: #334155;\n}\n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n/*# sourceMappingURL=resolve-status-dialog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentFaceDialogComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "document-face-dialog", imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule], template: `<div class="flex items-start justify-between gap-4">\r
    <h2\r
        mat-dialog-title\r
        class="!m-0 !font-semibold !text-lg !leading-snug !tracking-tight text-stone-900 dark:text-white md:!text-xl"\r
    >\r
        {{ 'smartEnrollProjects.recordDetail.documentFaceDialog.title' | transloco }}\r
    </h2>\r
    <button\r
        mat-icon-button\r
        type="button"\r
        class="!text-stone-500 dark:!text-stone-400"\r
        [disabled]="submitting()"\r
        (click)="close()"\r
        [attr.aria-label]="'smartEnrollProjects.recordDetail.documentFaceDialog.close' | transloco"\r
    >\r
        <mat-icon>close</mat-icon>\r
    </button>\r
</div>\r
\r
<mat-dialog-content>\r
    <p class="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">\r
        {{ 'smartEnrollProjects.recordDetail.documentFaceDialog.subtitle' | transloco }}\r
    </p>\r
\r
    @switch (state()) {\r
        @case ('detecting') {\r
            <div class="mt-6 flex items-center gap-3 text-sm text-stone-600 dark:text-stone-400">\r
                <mat-spinner diameter="20"></mat-spinner>\r
                {{ 'smartEnrollProjects.recordDetail.documentFaceDialog.detecting' | transloco }}\r
            </div>\r
        }\r
        @case ('ready') {\r
            <div class="mt-5 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto]">\r
                <div class="rounded-xl border border-stone-200/90 bg-white p-3.5 dark:border-gray-700 dark:bg-gray-900/40">\r
                    <p class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">\r
                        {{ 'smartEnrollProjects.recordDetail.documentFaceDialog.foundLabel' | transloco }}\r
                    </p>\r
                    <p class="mt-1 text-sm text-stone-700 dark:text-stone-300">\r
                        {{\r
                            (source() === 'back'\r
                                ? 'smartEnrollProjects.recordDetail.documentFaceDialog.foundOnBack'\r
                                : 'smartEnrollProjects.recordDetail.documentFaceDialog.foundOnFront'\r
                            ) | transloco\r
                        }}\r
                    </p>\r
                    <p class="mt-3 text-xs leading-relaxed text-stone-500 dark:text-stone-400">\r
                        {{ 'smartEnrollProjects.recordDetail.documentFaceDialog.checkHint' | transloco }}\r
                    </p>\r
                </div>\r
                <img\r
                    [src]="cropPreview()"\r
                    alt=""\r
                    class="h-40 w-40 rounded-xl border border-stone-200 object-cover dark:border-gray-700"\r
                />\r
            </div>\r
        }\r
        @case ('noFace') {\r
            <div\r
                class="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-200/80 bg-amber-50/80 p-3.5 dark:border-amber-900/50 dark:bg-amber-950/30"\r
            >\r
                <mat-icon class="icon-size-5 shrink-0 !text-amber-600 dark:!text-amber-400">warning</mat-icon>\r
                <p class="text-xs leading-relaxed text-amber-900 dark:text-amber-200">\r
                    {{ 'smartEnrollProjects.recordDetail.documentFaceDialog.noFace' | transloco }}\r
                </p>\r
            </div>\r
        }\r
        @case ('unreadable') {\r
            <div\r
                class="mt-5 flex items-start gap-2.5 rounded-xl border border-stone-200/90 bg-stone-50/90 p-3.5 dark:border-gray-700 dark:bg-gray-900/40"\r
            >\r
                <mat-icon class="icon-size-5 shrink-0 !text-stone-500 dark:!text-stone-400">info</mat-icon>\r
                <p class="text-xs leading-relaxed text-stone-700 dark:text-stone-300">\r
                    {{ 'smartEnrollProjects.recordDetail.documentFaceDialog.noScan' | transloco }}\r
                </p>\r
            </div>\r
        }\r
    }\r
\r
    @if (errorMessage()) {\r
        <div\r
            class="mt-4 rounded-xl border border-red-200/90 bg-red-50/90 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"\r
        >\r
            {{ errorMessage() }}\r
        </div>\r
    }\r
\r
    <div class="mt-6 flex items-center justify-end gap-3">\r
        <button mat-stroked-button type="button" class="!rounded-xl" [disabled]="submitting()" (click)="close()">\r
            {{ 'smartEnrollProjects.recordDetail.documentFaceDialog.cancel' | transloco }}\r
        </button>\r
        @if (state() === 'noFace') {\r
            <button mat-stroked-button type="button" class="!rounded-xl" (click)="detect()">\r
                <mat-icon>refresh</mat-icon>\r
                {{ 'smartEnrollProjects.recordDetail.documentFaceDialog.retry' | transloco }}\r
            </button>\r
        }\r
        <button\r
            mat-flat-button\r
            type="button"\r
            color="primary"\r
            class="!rounded-xl"\r
            [disabled]="state() !== 'ready' || submitting()"\r
            (click)="confirm()"\r
        >\r
            @if (submitting()) {\r
                <mat-spinner diameter="18"></mat-spinner>\r
            } @else {\r
                <mat-icon>done</mat-icon>\r
            }\r
            {{ 'smartEnrollProjects.recordDetail.documentFaceDialog.confirm' | transloco }}\r
        </button>\r
    </div>\r
</mat-dialog-content>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/projects/resolve-status-dialog.component.scss */\n:host ::ng-deep .mat-mdc-dialog-content {\n  max-height: none;\n  overflow: visible;\n}\n:host ::ng-deep .mdc-dialog__content {\n  max-height: none;\n  overflow: visible;\n}\n.resolve-option {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  padding: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.resolve-option:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.resolve-option__icon {\n  flex-shrink: 0;\n}\n.resolve-option__text {\n  display: flex;\n  min-width: 0px;\n  flex: 1 1 0%;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.resolve-option__title {\n  font-size: 0.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.resolve-option__title:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description {\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check {\n  flex-shrink: 0;\n}\n.resolve-option__check--muted {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check--muted:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--ok:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--ok .resolve-option__icon {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok .resolve-option__icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected {\n  --tw-border-opacity: 1;\n  border-color: rgb(110 231 183 / var(--tw-border-opacity, 1));\n  background-color: rgb(236 253 245 / 0.9);\n}\n.resolve-option--ok.resolve-option--selected:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(6 95 70 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 44 34 / 0.3);\n}\n.resolve-option--ok.resolve-option--selected .resolve-option__check {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected .resolve-option__check:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--warn:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--warn .resolve-option__icon {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn .resolve-option__icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 211 77 / var(--tw-border-opacity, 1));\n  background-color: rgb(255 251 235 / 0.9);\n}\n.resolve-option--warn.resolve-option--selected:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(146 64 14 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 26 3 / 0.3);\n}\n.resolve-option--warn.resolve-option--selected .resolve-option__check {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected .resolve-option__check:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--error:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--error .resolve-option__icon {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error .resolve-option__icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity, 1));\n  background-color: rgb(254 242 242 / 0.9);\n}\n.resolve-option--error.resolve-option--selected:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(153 27 27 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 10 10 / 0.3);\n}\n.resolve-option--error.resolve-option--selected .resolve-option__check {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected .resolve-option__check:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.doc-type-detect {\n  appearance: none;\n  margin-top: 1.25rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.doc-type-detect:hover:not(:disabled) {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect {\n  border-color: #4b5563;\n  background-color: #111827;\n}\n:host-context(.dark) .doc-type-detect:hover:not(:disabled) {\n  border-color: #6b7280;\n  background-color: #1f2937;\n}\n.doc-type-detect:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-detect__icon {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect__icon {\n  color: #e5e7eb;\n}\n.doc-type-detect__text {\n  display: flex;\n  min-width: 0px;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.doc-type-detect__title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect__title {\n  color: #ffffff;\n}\n.doc-type-detect__hint {\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect__hint {\n  color: #9ca3af;\n}\n.doc-type-or {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.doc-type-or:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.doc-type-or::before,\n.doc-type-or::after {\n  height: 1px;\n  flex: 1 1 0%;\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 229 228 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or:where(.dark, .dark *)::before,\n.doc-type-or:where(.dark, .dark *)::after {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or::before,\n.doc-type-or::after {\n  content: "";\n}\n.doc-type-search {\n  appearance: none;\n}\n:host-context(.dark) .doc-type-search {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter {\n  appearance: none;\n  flex-shrink: 0;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(41 37 36 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-filter {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter--active,\n:host-context(.dark) .doc-type-filter--active {\n  border-color: #e7e5e4;\n  background-color: #f5f5f4;\n  color: #1c1917;\n}\n.doc-type-list {\n  margin-top: 0.75rem;\n  max-height: 16rem;\n  overflow-y: auto;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n}\n:host-context(.dark) .doc-type-list {\n  border-color: #4b5563;\n}\n.doc-type-option {\n  appearance: none;\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  text-align: left;\n}\n.doc-type-option:last-child {\n  border-bottom-width: 0px;\n}\n:host-context(.dark) .doc-type-option {\n  border-bottom-color: #374151;\n  background-color: #111827;\n}\n.doc-type-option:hover:not(:disabled) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n:host-context(.dark) .doc-type-option:hover:not(:disabled) {\n  background-color: #1f2937;\n}\n.doc-type-option:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-option__name {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-option__name {\n  color: #f9fafb;\n}\n.doc-type-option__country {\n  margin-top: 0.125rem;\n  display: block;\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-option__country {\n  color: #9ca3af;\n}\n.doc-type-option__radio {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-option__radio {\n  color: #9ca3af;\n}\n.doc-type-option--selected {\n  background-color: #e7e5e4;\n}\n.doc-type-option--selected .doc-type-option__name,\n.doc-type-option--selected .doc-type-option__radio {\n  color: #1c1917;\n}\n.doc-type-option--selected .doc-type-option__country {\n  color: #44403c;\n}\n:host-context(.dark) .doc-type-option--selected {\n  background-color: #334155;\n}\n:host-context(.dark) .doc-type-option--selected .doc-type-option__name,\n:host-context(.dark) .doc-type-option--selected .doc-type-option__radio {\n  color: #f9fafb;\n}\n:host-context(.dark) .doc-type-option--selected .doc-type-option__country {\n  color: #d1d5db;\n}\n/*# sourceMappingURL=resolve-status-dialog.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentFaceDialogComponent, { className: "DocumentFaceDialogComponent", filePath: "src/app/modules/smart-enroll/projects/document-face-dialog.component.ts", lineNumber: 41 });
})();

// src/app/modules/smart-enroll/projects/document-type-dialog.component.ts
var _c02 = (a0) => ({ country: a0 });
var _forTrack02 = ($index, $item) => $item.code;
function DocumentTypeDialogComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 5);
  }
}
function DocumentTypeDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 6);
    \u0275\u0275text(1, "travel_explore");
    \u0275\u0275elementEnd();
  }
}
function DocumentTypeDialogComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.detectHint());
  }
}
function DocumentTypeDialogComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function DocumentTypeDialogComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function DocumentTypeDialogComponent_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleAllCountries());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("doc-type-filter--active", !ctx_r0.showAllCountries());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 3, ctx_r0.showAllCountries() ? "smartEnrollProjects.recordDetail.documentTypeDialog.showCountry" : "smartEnrollProjects.recordDetail.documentTypeDialog.showAll", \u0275\u0275pureFunction1(6, _c02, ctx_r0.data.country)), " ");
  }
}
function DocumentTypeDialogComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.documentTypeDialog.loading"), " ");
  }
}
function DocumentTypeDialogComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordDetail.documentTypeDialog.empty"), " ");
  }
}
function DocumentTypeDialogComponent_Conditional_38_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function DocumentTypeDialogComponent_Conditional_38_For_1_Template_button_click_0_listener() {
      const type_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.select(type_r4.code));
    });
    \u0275\u0275elementStart(1, "span", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-icon", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("doc-type-option--selected", ctx_r0.selected() === type_r4.code);
    \u0275\u0275property("disabled", ctx_r0.saving() || ctx_r0.detecting());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.optionLabel(type_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r4.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selected() === type_r4.code ? "radio_button_checked" : "radio_button_unchecked", " ");
  }
}
function DocumentTypeDialogComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DocumentTypeDialogComponent_Conditional_38_For_1_Template, 8, 6, "button", 26, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.visibleTypes());
  }
}
function DocumentTypeDialogComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 23);
  }
}
function DocumentTypeDialogComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
var DocumentTypeDialogComponent = class _DocumentTypeDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this._dialogRef = inject(MatDialogRef);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._transloco = inject(TranslocoService);
    this.types = signal([]);
    this.filter = signal("");
    this.showAllCountries = signal(false);
    this.selected = signal(null);
    this.loading = signal(true);
    this.detecting = signal(false);
    this.saving = signal(false);
    this.errorMessage = signal(null);
    this.detectHint = signal(null);
  }
  ngOnInit() {
    this._projectsService.listDocumentTypes().subscribe({
      next: (types) => {
        this.types.set(types);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.errorMessage.set(this._transloco.translate("smartEnrollProjects.recordDetail.documentTypeDialog.loadError"));
      }
    });
  }
  visibleTypes() {
    const query = this.filter().trim().toLowerCase();
    const country = this.data.country?.trim().toLowerCase() || "";
    const restrictCountry = !this.showAllCountries() && !!country;
    return this.types().filter((type) => {
      if (restrictCountry && !this._countriesOverlap(country, type.country))
        return false;
      if (!query)
        return true;
      return `${type.name} ${type.code} ${type.country}`.toLowerCase().includes(query);
    });
  }
  optionLabel(type) {
    return `${type.name} (${type.code})`;
  }
  select(code) {
    if (this.saving() || this.detecting())
      return;
    this.selected.set(code);
    this.errorMessage.set(null);
  }
  setFilter(value) {
    this.filter.set(value);
  }
  toggleAllCountries() {
    this.showAllCountries.update((current) => !current);
  }
  detect() {
    if (this.detecting() || this.saving())
      return;
    this.detecting.set(true);
    this.errorMessage.set(null);
    this.detectHint.set(null);
    this._projectsService.detectDocumentType(this.data.documentValidationId).pipe(finalize(() => this.detecting.set(false))).subscribe({
      next: (suggestion) => {
        if (!suggestion?.code) {
          this.detectHint.set(this._transloco.translate("smartEnrollProjects.recordDetail.documentTypeDialog.detectNone"));
          this.showAllCountries.set(true);
          return;
        }
        this.selected.set(suggestion.code);
        if (!this.visibleTypes().some((type) => type.code === suggestion.code)) {
          this.showAllCountries.set(true);
        }
        this.detectHint.set(this._transloco.translate("smartEnrollProjects.recordDetail.documentTypeDialog.detectFound", {
          name: suggestion.name || suggestion.code,
          code: suggestion.code
        }));
      },
      error: (error) => {
        this.errorMessage.set(error?.error?.message ?? this._transloco.translate("smartEnrollProjects.recordDetail.documentTypeDialog.detectError"));
      }
    });
  }
  save() {
    const code = this.selected();
    if (!code || this.saving())
      return;
    this.saving.set(true);
    this.errorMessage.set(null);
    this._projectsService.setDocumentType(this.data.documentValidationId, code).pipe(finalize(() => this.saving.set(false))).subscribe({
      next: () => this._dialogRef.close({ success: true, documentType: code }),
      error: (error) => {
        this.errorMessage.set(error?.error?.message ?? this._transloco.translate("smartEnrollProjects.recordDetail.documentTypeDialog.saveError"));
      }
    });
  }
  close() {
    if (this.saving())
      return;
    this._dialogRef.close({ success: false });
  }
  _countriesOverlap(scanCountry, catalogCountry) {
    const left = scanCountry.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const right = catalogCountry.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return left.includes(right) || right.includes(left);
  }
  static {
    this.\u0275fac = function DocumentTypeDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DocumentTypeDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentTypeDialogComponent, selectors: [["document-type-dialog"]], decls: 48, vars: 42, consts: [[1, "flex", "items-start", "justify-between", "gap-4"], ["mat-dialog-title", "", 1, "!m-0", "!font-semibold", "!text-lg", "!leading-snug", "!tracking-tight", "text-stone-900", "dark:text-white", "md:!text-xl"], ["mat-icon-button", "", "type", "button", 1, "!text-stone-500", "dark:!text-stone-400", 3, "click", "disabled"], [1, "mt-1", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], ["type", "button", 1, "doc-type-detect", 3, "click", "disabled"], ["diameter", "22"], [1, "doc-type-detect__icon"], [1, "doc-type-detect__text"], [1, "doc-type-detect__title"], [1, "doc-type-detect__hint"], [1, "mt-3", "text-sm", "text-stone-700", "dark:text-stone-300"], [1, "mt-4", "rounded-xl", "border", "border-red-200", "bg-red-50", "px-4", "py-3", "text-sm", "text-red-800", "dark:border-red-800", "dark:bg-red-950/50", "dark:text-red-200"], ["aria-hidden", "true", 1, "doc-type-or"], [1, "flex", "flex-col", "gap-3", "sm:flex-row", "sm:items-center"], ["for", "document-type-search", 1, "sr-only"], ["id", "document-type-search", "type", "search", 1, "doc-type-search", "min-w-0", "flex-1", "rounded-xl", "border", "border-stone-200", "bg-white", "px-3", "py-2.5", "text-sm", "text-stone-800", "shadow-sm", "focus:border-stone-400", "focus:outline-none", 3, "ngModelChange", "disabled", "ngModel", "placeholder"], ["type", "button", 1, "doc-type-filter", 3, "doc-type-filter--active"], [1, "doc-type-list"], [1, "flex", "items-center", "justify-center", "gap-2", "py-8", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "px-4", "py-6", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "mt-6", "flex", "items-center", "justify-end", "gap-3"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-xl", 3, "click", "disabled"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "!rounded-xl", 3, "click", "disabled"], ["diameter", "18"], ["type", "button", 1, "doc-type-filter", 3, "click"], ["diameter", "20"], ["type", "button", 1, "doc-type-option", 3, "doc-type-option--selected", "disabled"], ["type", "button", 1, "doc-type-option", 3, "click", "disabled"], [1, "min-w-0"], [1, "doc-type-option__name"], [1, "doc-type-option__country"], [1, "doc-type-option__radio"]], template: function DocumentTypeDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275listener("click", function DocumentTypeDialogComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "mat-dialog-content")(9, "p", 3);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 4);
        \u0275\u0275listener("click", function DocumentTypeDialogComponent_Template_button_click_12_listener() {
          return ctx.detect();
        });
        \u0275\u0275template(13, DocumentTypeDialogComponent_Conditional_13_Template, 1, 0, "mat-spinner", 5)(14, DocumentTypeDialogComponent_Conditional_14_Template, 2, 0, "mat-icon", 6);
        \u0275\u0275elementStart(15, "span", 7)(16, "span", 8);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 9);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(22, DocumentTypeDialogComponent_Conditional_22_Template, 2, 1, "p", 10)(23, DocumentTypeDialogComponent_Conditional_23_Template, 2, 1, "div", 11);
        \u0275\u0275elementStart(24, "div", 12)(25, "span");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 13)(29, "label", 14);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "input", 15);
        \u0275\u0275pipe(33, "transloco");
        \u0275\u0275listener("ngModelChange", function DocumentTypeDialogComponent_Template_input_ngModelChange_32_listener($event) {
          return ctx.setFilter($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, DocumentTypeDialogComponent_Conditional_34_Template, 3, 8, "button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 17);
        \u0275\u0275template(36, DocumentTypeDialogComponent_Conditional_36_Template, 4, 3, "div", 18)(37, DocumentTypeDialogComponent_Conditional_37_Template, 3, 3, "p", 19)(38, DocumentTypeDialogComponent_Conditional_38_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 20)(40, "button", 21);
        \u0275\u0275listener("click", function DocumentTypeDialogComponent_Template_button_click_40_listener() {
          return ctx.close();
        });
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 22);
        \u0275\u0275listener("click", function DocumentTypeDialogComponent_Template_button_click_43_listener() {
          return ctx.save();
        });
        \u0275\u0275template(44, DocumentTypeDialogComponent_Conditional_44_Template, 1, 0, "mat-spinner", 23)(45, DocumentTypeDialogComponent_Conditional_45_Template, 2, 0, "mat-icon");
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "transloco");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 22, "smartEnrollProjects.recordDetail.documentTypeDialog.title"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 24, "smartEnrollProjects.recordDetail.documentTypeDialog.close"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 26, "smartEnrollProjects.recordDetail.documentTypeDialog.subtitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading() || ctx.detecting() || ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.detecting() ? 13 : 14);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 28, "smartEnrollProjects.recordDetail.documentTypeDialog.detectLead"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 30, "smartEnrollProjects.recordDetail.documentTypeDialog.detect"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.detectHint() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMessage() ? 23 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 32, "smartEnrollProjects.recordDetail.documentTypeDialog.orList"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 34, "smartEnrollProjects.recordDetail.documentTypeDialog.searchLabel"));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading() || ctx.saving())("ngModel", ctx.filter())("placeholder", \u0275\u0275pipeBind1(33, 36, "smartEnrollProjects.recordDetail.documentTypeDialog.searchPlaceholder"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.country ? 34 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 36 : ctx.visibleTypes().length === 0 ? 37 : 38);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 38, "smartEnrollProjects.recordDetail.documentTypeDialog.cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.saving() || ctx.detecting() || !ctx.selected());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.saving() ? 44 : 45);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 40, "smartEnrollProjects.recordDetail.documentTypeDialog.save"), " ");
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatDialogModule,
      MatDialogTitle,
      MatDialogContent,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoPipe
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%]     .mat-mdc-dialog-content {\n  max-height: none;\n  overflow: visible;\n}\n[_nghost-%COMP%]     .mdc-dialog__content {\n  max-height: none;\n  overflow: visible;\n}\n.resolve-option[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  padding: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.resolve-option[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.resolve-option__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.resolve-option__text[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0px;\n  flex: 1 1 0%;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.resolve-option__title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.resolve-option__title[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.resolve-option__check--muted[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check--muted[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--ok[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--ok[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(110 231 183 / var(--tw-border-opacity, 1));\n  background-color: rgb(236 253 245 / 0.9);\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(6 95 70 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 44 34 / 0.3);\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--warn[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--warn[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 211 77 / var(--tw-border-opacity, 1));\n  background-color: rgb(255 251 235 / 0.9);\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(146 64 14 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 26 3 / 0.3);\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--error[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--error[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity, 1));\n  background-color: rgb(254 242 242 / 0.9);\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(153 27 27 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 10 10 / 0.3);\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.doc-type-detect[_ngcontent-%COMP%] {\n  appearance: none;\n  margin-top: 1.25rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.doc-type-detect[_ngcontent-%COMP%]:hover:not(:disabled) {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background-color: #111827;\n}\n.dark[_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%]:hover:not(:disabled), .dark   [_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6b7280;\n  background-color: #1f2937;\n}\n.doc-type-detect[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-detect__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect__icon[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n.doc-type-detect__text[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0px;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.doc-type-detect__title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect__title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.doc-type-detect__hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect__hint[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.doc-type-or[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]::before, \n.doc-type-or[_ngcontent-%COMP%]::after {\n  height: 1px;\n  flex: 1 1 0%;\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 229 228 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]:where(.dark, .dark *)::before, \n.doc-type-or[_ngcontent-%COMP%]:where(.dark, .dark *)::after {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]::before, \n.doc-type-or[_ngcontent-%COMP%]::after {\n  content: "";\n}\n.doc-type-search[_ngcontent-%COMP%] {\n  appearance: none;\n}\n.dark[_nghost-%COMP%]   .doc-type-search[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-search[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter[_ngcontent-%COMP%] {\n  appearance: none;\n  flex-shrink: 0;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(41 37 36 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-filter[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-filter[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter--active[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .doc-type-filter--active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-filter--active[_ngcontent-%COMP%] {\n  border-color: #e7e5e4;\n  background-color: #f5f5f4;\n  color: #1c1917;\n}\n.doc-type-list[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  max-height: 16rem;\n  overflow-y: auto;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-list[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-list[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n}\n.doc-type-option[_ngcontent-%COMP%] {\n  appearance: none;\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  text-align: left;\n}\n.doc-type-option[_ngcontent-%COMP%]:last-child {\n  border-bottom-width: 0px;\n}\n.dark[_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%] {\n  border-bottom-color: #374151;\n  background-color: #111827;\n}\n.doc-type-option[_ngcontent-%COMP%]:hover:not(:disabled) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%]:hover:not(:disabled), .dark   [_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1f2937;\n}\n.doc-type-option[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-option__name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.doc-type-option__country[_ngcontent-%COMP%] {\n  margin-top: 0.125rem;\n  display: block;\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.doc-type-option__radio[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.doc-type-option--selected[_ngcontent-%COMP%] {\n  background-color: #e7e5e4;\n}\n.doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], \n.doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%] {\n  color: #1c1917;\n}\n.doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%] {\n  color: #44403c;\n}\n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%] {\n  background-color: #334155;\n}\n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n/*# sourceMappingURL=resolve-status-dialog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentTypeDialogComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "document-type-dialog", imports: [
      CommonModule,
      FormsModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<div class="flex items-start justify-between gap-4">\r
    <h2\r
        mat-dialog-title\r
        class="!m-0 !font-semibold !text-lg !leading-snug !tracking-tight text-stone-900 dark:text-white md:!text-xl"\r
    >\r
        {{ 'smartEnrollProjects.recordDetail.documentTypeDialog.title' | transloco }}\r
    </h2>\r
    <button\r
        mat-icon-button\r
        type="button"\r
        class="!text-stone-500 dark:!text-stone-400"\r
        [disabled]="saving()"\r
        (click)="close()"\r
        [attr.aria-label]="'smartEnrollProjects.recordDetail.documentTypeDialog.close' | transloco"\r
    >\r
        <mat-icon>close</mat-icon>\r
    </button>\r
</div>\r
\r
<mat-dialog-content>\r
    <p class="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">\r
        {{ 'smartEnrollProjects.recordDetail.documentTypeDialog.subtitle' | transloco }}\r
    </p>\r
\r
    <button\r
        type="button"\r
        class="doc-type-detect"\r
        [disabled]="loading() || detecting() || saving()"\r
        (click)="detect()"\r
    >\r
        @if (detecting()) {\r
            <mat-spinner diameter="22"></mat-spinner>\r
        } @else {\r
            <mat-icon class="doc-type-detect__icon">travel_explore</mat-icon>\r
        }\r
        <span class="doc-type-detect__text">\r
            <span class="doc-type-detect__title">{{\r
                'smartEnrollProjects.recordDetail.documentTypeDialog.detectLead' | transloco\r
            }}</span>\r
            <span class="doc-type-detect__hint">{{\r
                'smartEnrollProjects.recordDetail.documentTypeDialog.detect' | transloco\r
            }}</span>\r
        </span>\r
    </button>\r
\r
    @if (detectHint()) {\r
        <p class="mt-3 text-sm text-stone-700 dark:text-stone-300">{{ detectHint() }}</p>\r
    }\r
\r
    @if (errorMessage()) {\r
        <div\r
            class="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/50 dark:text-red-200"\r
        >\r
            {{ errorMessage() }}\r
        </div>\r
    }\r
\r
    <div class="doc-type-or" aria-hidden="true">\r
        <span>{{ 'smartEnrollProjects.recordDetail.documentTypeDialog.orList' | transloco }}</span>\r
    </div>\r
\r
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center">\r
        <label class="sr-only" for="document-type-search">{{\r
            'smartEnrollProjects.recordDetail.documentTypeDialog.searchLabel' | transloco\r
        }}</label>\r
        <input\r
            id="document-type-search"\r
            type="search"\r
            class="doc-type-search min-w-0 flex-1 rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-800 shadow-sm focus:border-stone-400 focus:outline-none"\r
            [disabled]="loading() || saving()"\r
            [ngModel]="filter()"\r
            (ngModelChange)="setFilter($event)"\r
            [placeholder]="'smartEnrollProjects.recordDetail.documentTypeDialog.searchPlaceholder' | transloco"\r
        />\r
        @if (data.country) {\r
            <button\r
                type="button"\r
                class="doc-type-filter"\r
                [class.doc-type-filter--active]="!showAllCountries()"\r
                (click)="toggleAllCountries()"\r
            >\r
                {{\r
                    (showAllCountries()\r
                        ? 'smartEnrollProjects.recordDetail.documentTypeDialog.showCountry'\r
                        : 'smartEnrollProjects.recordDetail.documentTypeDialog.showAll'\r
                    ) | transloco: { country: data.country }\r
                }}\r
            </button>\r
        }\r
    </div>\r
\r
    <div class="doc-type-list">\r
        @if (loading()) {\r
            <div class="flex items-center justify-center gap-2 py-8 text-sm text-stone-500 dark:text-stone-400">\r
                <mat-spinner diameter="20"></mat-spinner>\r
                {{ 'smartEnrollProjects.recordDetail.documentTypeDialog.loading' | transloco }}\r
            </div>\r
        } @else if (visibleTypes().length === 0) {\r
            <p class="px-4 py-6 text-sm text-stone-500 dark:text-stone-400">\r
                {{ 'smartEnrollProjects.recordDetail.documentTypeDialog.empty' | transloco }}\r
            </p>\r
        } @else {\r
            @for (type of visibleTypes(); track type.code) {\r
                <button\r
                    type="button"\r
                    class="doc-type-option"\r
                    [class.doc-type-option--selected]="selected() === type.code"\r
                    [disabled]="saving() || detecting()"\r
                    (click)="select(type.code)"\r
                >\r
                    <span class="min-w-0">\r
                        <span class="doc-type-option__name">{{ optionLabel(type) }}</span>\r
                        <span class="doc-type-option__country">{{ type.country }}</span>\r
                    </span>\r
                    <mat-icon class="doc-type-option__radio">\r
                        {{ selected() === type.code ? 'radio_button_checked' : 'radio_button_unchecked' }}\r
                    </mat-icon>\r
                </button>\r
            }\r
        }\r
    </div>\r
\r
    <div class="mt-6 flex items-center justify-end gap-3">\r
        <button mat-stroked-button type="button" class="!rounded-xl" [disabled]="saving()" (click)="close()">\r
            {{ 'smartEnrollProjects.recordDetail.documentTypeDialog.cancel' | transloco }}\r
        </button>\r
        <button\r
            mat-flat-button\r
            type="button"\r
            color="primary"\r
            class="!rounded-xl"\r
            [disabled]="saving() || detecting() || !selected()"\r
            (click)="save()"\r
        >\r
            @if (saving()) {\r
                <mat-spinner diameter="18"></mat-spinner>\r
            } @else {\r
                <mat-icon>done</mat-icon>\r
            }\r
            {{ 'smartEnrollProjects.recordDetail.documentTypeDialog.save' | transloco }}\r
        </button>\r
    </div>\r
</mat-dialog-content>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/projects/resolve-status-dialog.component.scss */\n:host ::ng-deep .mat-mdc-dialog-content {\n  max-height: none;\n  overflow: visible;\n}\n:host ::ng-deep .mdc-dialog__content {\n  max-height: none;\n  overflow: visible;\n}\n.resolve-option {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  padding: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.resolve-option:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.resolve-option__icon {\n  flex-shrink: 0;\n}\n.resolve-option__text {\n  display: flex;\n  min-width: 0px;\n  flex: 1 1 0%;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.resolve-option__title {\n  font-size: 0.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.resolve-option__title:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description {\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check {\n  flex-shrink: 0;\n}\n.resolve-option__check--muted {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check--muted:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--ok:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--ok .resolve-option__icon {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok .resolve-option__icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected {\n  --tw-border-opacity: 1;\n  border-color: rgb(110 231 183 / var(--tw-border-opacity, 1));\n  background-color: rgb(236 253 245 / 0.9);\n}\n.resolve-option--ok.resolve-option--selected:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(6 95 70 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 44 34 / 0.3);\n}\n.resolve-option--ok.resolve-option--selected .resolve-option__check {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected .resolve-option__check:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--warn:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--warn .resolve-option__icon {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn .resolve-option__icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 211 77 / var(--tw-border-opacity, 1));\n  background-color: rgb(255 251 235 / 0.9);\n}\n.resolve-option--warn.resolve-option--selected:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(146 64 14 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 26 3 / 0.3);\n}\n.resolve-option--warn.resolve-option--selected .resolve-option__check {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected .resolve-option__check:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--error:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--error .resolve-option__icon {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error .resolve-option__icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity, 1));\n  background-color: rgb(254 242 242 / 0.9);\n}\n.resolve-option--error.resolve-option--selected:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(153 27 27 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 10 10 / 0.3);\n}\n.resolve-option--error.resolve-option--selected .resolve-option__check {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected .resolve-option__check:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.doc-type-detect {\n  appearance: none;\n  margin-top: 1.25rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.doc-type-detect:hover:not(:disabled) {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect {\n  border-color: #4b5563;\n  background-color: #111827;\n}\n:host-context(.dark) .doc-type-detect:hover:not(:disabled) {\n  border-color: #6b7280;\n  background-color: #1f2937;\n}\n.doc-type-detect:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-detect__icon {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect__icon {\n  color: #e5e7eb;\n}\n.doc-type-detect__text {\n  display: flex;\n  min-width: 0px;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.doc-type-detect__title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect__title {\n  color: #ffffff;\n}\n.doc-type-detect__hint {\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect__hint {\n  color: #9ca3af;\n}\n.doc-type-or {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.doc-type-or:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.doc-type-or::before,\n.doc-type-or::after {\n  height: 1px;\n  flex: 1 1 0%;\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 229 228 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or:where(.dark, .dark *)::before,\n.doc-type-or:where(.dark, .dark *)::after {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or::before,\n.doc-type-or::after {\n  content: "";\n}\n.doc-type-search {\n  appearance: none;\n}\n:host-context(.dark) .doc-type-search {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter {\n  appearance: none;\n  flex-shrink: 0;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(41 37 36 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-filter {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter--active,\n:host-context(.dark) .doc-type-filter--active {\n  border-color: #e7e5e4;\n  background-color: #f5f5f4;\n  color: #1c1917;\n}\n.doc-type-list {\n  margin-top: 0.75rem;\n  max-height: 16rem;\n  overflow-y: auto;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n}\n:host-context(.dark) .doc-type-list {\n  border-color: #4b5563;\n}\n.doc-type-option {\n  appearance: none;\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  text-align: left;\n}\n.doc-type-option:last-child {\n  border-bottom-width: 0px;\n}\n:host-context(.dark) .doc-type-option {\n  border-bottom-color: #374151;\n  background-color: #111827;\n}\n.doc-type-option:hover:not(:disabled) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n:host-context(.dark) .doc-type-option:hover:not(:disabled) {\n  background-color: #1f2937;\n}\n.doc-type-option:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-option__name {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-option__name {\n  color: #f9fafb;\n}\n.doc-type-option__country {\n  margin-top: 0.125rem;\n  display: block;\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-option__country {\n  color: #9ca3af;\n}\n.doc-type-option__radio {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-option__radio {\n  color: #9ca3af;\n}\n.doc-type-option--selected {\n  background-color: #e7e5e4;\n}\n.doc-type-option--selected .doc-type-option__name,\n.doc-type-option--selected .doc-type-option__radio {\n  color: #1c1917;\n}\n.doc-type-option--selected .doc-type-option__country {\n  color: #44403c;\n}\n:host-context(.dark) .doc-type-option--selected {\n  background-color: #334155;\n}\n:host-context(.dark) .doc-type-option--selected .doc-type-option__name,\n:host-context(.dark) .doc-type-option--selected .doc-type-option__radio {\n  color: #f9fafb;\n}\n:host-context(.dark) .doc-type-option--selected .doc-type-option__country {\n  color: #d1d5db;\n}\n/*# sourceMappingURL=resolve-status-dialog.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentTypeDialogComponent, { className: "DocumentTypeDialogComponent", filePath: "src/app/modules/smart-enroll/projects/document-type-dialog.component.ts", lineNumber: 40 });
})();

// src/app/modules/smart-enroll/projects/name-review-dialog.component.ts
var _forTrack03 = ($index, $item) => $item.value;
function NameReviewDialogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-icon", 23);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data.skipReason);
  }
}
function NameReviewDialogComponent_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.data.country, " ");
  }
}
function NameReviewDialogComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275template(2, NameReviewDialogComponent_Conditional_21_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.data.documentType, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.data.country ? 2 : -1);
  }
}
function NameReviewDialogComponent_For_31_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 30);
    \u0275\u0275text(1, "radio_button_checked");
    \u0275\u0275elementEnd();
  }
}
function NameReviewDialogComponent_For_31_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 31);
    \u0275\u0275text(1, "radio_button_unchecked");
    \u0275\u0275elementEnd();
  }
}
function NameReviewDialogComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function NameReviewDialogComponent_For_31_Template_button_click_0_listener() {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.select(option_r3.value));
    });
    \u0275\u0275elementStart(1, "mat-icon", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 27)(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 29);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, NameReviewDialogComponent_For_31_Conditional_10_Template, 2, 0, "mat-icon", 30)(11, NameReviewDialogComponent_For_31_Conditional_11_Template, 2, 0, "mat-icon", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("resolve-option--selected", ctx_r0.selected() === option_r3.value);
    \u0275\u0275property("ngClass", option_r3.colorClass)("disabled", ctx_r0.loading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, option_r3.titleKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, option_r3.descriptionKey));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.selected() === option_r3.value ? 10 : 11);
  }
}
function NameReviewDialogComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function NameReviewDialogComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 22);
  }
}
function NameReviewDialogComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
var NAME_REVIEW_OPTIONS = [
  {
    value: "match",
    icon: "check_circle",
    colorClass: "resolve-option--ok",
    titleKey: "smartEnrollProjects.recordDetail.nameReviewDialog.optionMatchTitle",
    descriptionKey: "smartEnrollProjects.recordDetail.nameReviewDialog.optionMatchDescription"
  },
  {
    value: "mismatch",
    icon: "cancel",
    colorClass: "resolve-option--error",
    titleKey: "smartEnrollProjects.recordDetail.nameReviewDialog.optionMismatchTitle",
    descriptionKey: "smartEnrollProjects.recordDetail.nameReviewDialog.optionMismatchDescription"
  }
];
var NameReviewDialogComponent = class _NameReviewDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this._dialogRef = inject(MatDialogRef);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._transloco = inject(TranslocoService);
    this.options = NAME_REVIEW_OPTIONS;
    this.selected = signal(this.data.preselected ?? null);
    this.note = signal("");
    this.loading = signal(false);
    this.errorMessage = signal(null);
  }
  select(option) {
    if (this.loading())
      return;
    this.selected.set(option);
    this.errorMessage.set(null);
  }
  setNote(value) {
    this.note.set(value);
  }
  confirm() {
    const decision = this.selected();
    const id = this.data.documentValidationId;
    if (!decision || !id || this.loading())
      return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this._projectsService.reviewDocumentNames(id, decision, this.note().trim() || void 0).pipe(finalize(() => this.loading.set(false))).subscribe({
      next: () => {
        this._dialogRef.close({ success: true, decision });
      },
      error: (error) => {
        const message = error?.error?.message ?? this._transloco.translate("smartEnrollProjects.recordDetail.nameReviewDialog.genericError");
        this.errorMessage.set(message);
      }
    });
  }
  close() {
    if (this.loading())
      return;
    this._dialogRef.close({ success: false });
  }
  static {
    this.\u0275fac = function NameReviewDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NameReviewDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NameReviewDialogComponent, selectors: [["name-review-dialog"]], decls: 54, vars: 45, consts: [[1, "flex", "items-start", "justify-between", "gap-4"], ["mat-dialog-title", "", 1, "!m-0", "!font-semibold", "!text-lg", "!leading-snug", "!tracking-tight", "text-stone-900", "dark:text-white", "md:!text-xl"], ["mat-icon-button", "", "type", "button", 1, "!text-stone-500", "dark:!text-stone-400", 3, "click", "disabled"], [1, "mt-1", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "mt-4", "flex", "items-start", "gap-2.5", "rounded-xl", "border", "border-stone-200/90", "bg-stone-50/90", "p-3.5", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "mt-5", "grid", "gap-3", "md:grid-cols-2"], [1, "rounded-xl", "border", "border-stone-200/90", "bg-white", "p-3.5", "dark:border-gray-700", "dark:bg-gray-900/40"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "break-words", "text-sm", "font-medium", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "mt-5", "flex", "flex-col", "gap-3"], ["type", "button", 1, "resolve-option", 3, "ngClass", "resolve-option--selected", "disabled"], [1, "mt-5"], [1, "mb-1.5", "block", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], ["rows", "2", "maxlength", "500", 1, "w-full", "resize-none", "rounded-xl", "border", "border-stone-200/90", "bg-white", "p-3", "text-sm", "text-stone-800", "shadow-sm", "focus:border-stone-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-900/60", "dark:text-stone-100", 3, "ngModelChange", "disabled", "ngModel", "placeholder"], [1, "mt-4", "flex", "items-start", "gap-2.5", "rounded-xl", "border", "border-amber-200/80", "bg-amber-50/80", "p-3.5", "dark:border-amber-900/50", "dark:bg-amber-950/30"], [1, "icon-size-5", "shrink-0", "!text-amber-600", "dark:!text-amber-400"], [1, "text-xs", "leading-relaxed", "text-amber-900", "dark:text-amber-200"], [1, "mt-4", "rounded-xl", "border", "border-red-200/90", "bg-red-50/90", "px-4", "py-3", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "mt-6", "flex", "items-center", "justify-end", "gap-3"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-xl", 3, "click", "disabled"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "!rounded-xl", 3, "click", "disabled"], ["diameter", "18"], [1, "icon-size-5", "shrink-0", "!text-stone-500", "dark:!text-stone-400"], [1, "text-xs", "leading-relaxed", "text-stone-700", "dark:text-stone-300"], ["type", "button", 1, "resolve-option", 3, "click", "ngClass", "disabled"], [1, "resolve-option__icon"], [1, "resolve-option__text"], [1, "resolve-option__title"], [1, "resolve-option__description"], [1, "icon-size-5", "resolve-option__check"], [1, "icon-size-5", "resolve-option__check", "resolve-option__check--muted"]], template: function NameReviewDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275listener("click", function NameReviewDialogComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "mat-dialog-content")(9, "p", 3);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, NameReviewDialogComponent_Conditional_12_Template, 5, 1, "div", 4);
        \u0275\u0275elementStart(13, "div", 5)(14, "div", 6)(15, "p", 7);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 8);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, NameReviewDialogComponent_Conditional_21_Template, 3, 2, "p", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 6)(23, "p", 7);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p", 8);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 10);
        \u0275\u0275repeaterCreate(30, NameReviewDialogComponent_For_31_Template, 12, 12, "button", 11, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 12)(33, "label", 13);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "textarea", 14);
        \u0275\u0275pipe(37, "transloco");
        \u0275\u0275listener("ngModelChange", function NameReviewDialogComponent_Template_textarea_ngModelChange_36_listener($event) {
          return ctx.setNote($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 15)(39, "mat-icon", 16);
        \u0275\u0275text(40, "bolt");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 17);
        \u0275\u0275text(42);
        \u0275\u0275pipe(43, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(44, NameReviewDialogComponent_Conditional_44_Template, 2, 1, "div", 18);
        \u0275\u0275elementStart(45, "div", 19)(46, "button", 20);
        \u0275\u0275listener("click", function NameReviewDialogComponent_Template_button_click_46_listener() {
          return ctx.close();
        });
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 21);
        \u0275\u0275listener("click", function NameReviewDialogComponent_Template_button_click_49_listener() {
          return ctx.confirm();
        });
        \u0275\u0275template(50, NameReviewDialogComponent_Conditional_50_Template, 1, 0, "mat-spinner", 22)(51, NameReviewDialogComponent_Conditional_51_Template, 2, 0, "mat-icon");
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "transloco");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 21, "smartEnrollProjects.recordDetail.nameReviewDialog.title"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 23, "smartEnrollProjects.recordDetail.nameReviewDialog.close"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 25, "smartEnrollProjects.recordDetail.nameReviewDialog.subtitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.skipReason ? 12 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 27, "smartEnrollProjects.recordDetail.nameReviewDialog.documentName"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.data.documentName || \u0275\u0275pipeBind1(20, 29, "smartEnrollProjects.recordDetail.nameReviewDialog.noName"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.documentType ? 21 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 31, "smartEnrollProjects.recordDetail.nameReviewDialog.formName"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.data.formName || \u0275\u0275pipeBind1(28, 33, "smartEnrollProjects.recordDetail.nameReviewDialog.noName"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.options);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 35, "smartEnrollProjects.recordDetail.nameReviewDialog.noteLabel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading())("ngModel", ctx.note())("placeholder", \u0275\u0275pipeBind1(37, 37, "smartEnrollProjects.recordDetail.nameReviewDialog.notePlaceholder"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 39, "smartEnrollProjects.recordDetail.nameReviewDialog.statusNotice"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.errorMessage() ? 44 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 41, "smartEnrollProjects.recordDetail.nameReviewDialog.cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading() || !ctx.selected());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 50 : 51);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 43, "smartEnrollProjects.recordDetail.nameReviewDialog.confirm"), " ");
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, MatButtonModule, MatButton, MatIconButton, MatDialogModule, MatDialogTitle, MatDialogContent, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, TranslocoModule, TranslocoPipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%]     .mat-mdc-dialog-content {\n  max-height: none;\n  overflow: visible;\n}\n[_nghost-%COMP%]     .mdc-dialog__content {\n  max-height: none;\n  overflow: visible;\n}\n.resolve-option[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  padding: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.resolve-option[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.resolve-option__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.resolve-option__text[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0px;\n  flex: 1 1 0%;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.resolve-option__title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.resolve-option__title[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.resolve-option__check--muted[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check--muted[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--ok[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--ok[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(110 231 183 / var(--tw-border-opacity, 1));\n  background-color: rgb(236 253 245 / 0.9);\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(6 95 70 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 44 34 / 0.3);\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--warn[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--warn[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 211 77 / var(--tw-border-opacity, 1));\n  background-color: rgb(255 251 235 / 0.9);\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(146 64 14 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 26 3 / 0.3);\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--error[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--error[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity, 1));\n  background-color: rgb(254 242 242 / 0.9);\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(153 27 27 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 10 10 / 0.3);\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.doc-type-detect[_ngcontent-%COMP%] {\n  appearance: none;\n  margin-top: 1.25rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.doc-type-detect[_ngcontent-%COMP%]:hover:not(:disabled) {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background-color: #111827;\n}\n.dark[_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%]:hover:not(:disabled), .dark   [_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6b7280;\n  background-color: #1f2937;\n}\n.doc-type-detect[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-detect__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect__icon[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n.doc-type-detect__text[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0px;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.doc-type-detect__title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect__title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.doc-type-detect__hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect__hint[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.doc-type-or[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]::before, \n.doc-type-or[_ngcontent-%COMP%]::after {\n  height: 1px;\n  flex: 1 1 0%;\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 229 228 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]:where(.dark, .dark *)::before, \n.doc-type-or[_ngcontent-%COMP%]:where(.dark, .dark *)::after {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]::before, \n.doc-type-or[_ngcontent-%COMP%]::after {\n  content: "";\n}\n.doc-type-search[_ngcontent-%COMP%] {\n  appearance: none;\n}\n.dark[_nghost-%COMP%]   .doc-type-search[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-search[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter[_ngcontent-%COMP%] {\n  appearance: none;\n  flex-shrink: 0;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(41 37 36 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-filter[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-filter[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter--active[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .doc-type-filter--active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-filter--active[_ngcontent-%COMP%] {\n  border-color: #e7e5e4;\n  background-color: #f5f5f4;\n  color: #1c1917;\n}\n.doc-type-list[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  max-height: 16rem;\n  overflow-y: auto;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-list[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-list[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n}\n.doc-type-option[_ngcontent-%COMP%] {\n  appearance: none;\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  text-align: left;\n}\n.doc-type-option[_ngcontent-%COMP%]:last-child {\n  border-bottom-width: 0px;\n}\n.dark[_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%] {\n  border-bottom-color: #374151;\n  background-color: #111827;\n}\n.doc-type-option[_ngcontent-%COMP%]:hover:not(:disabled) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%]:hover:not(:disabled), .dark   [_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1f2937;\n}\n.doc-type-option[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-option__name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.doc-type-option__country[_ngcontent-%COMP%] {\n  margin-top: 0.125rem;\n  display: block;\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.doc-type-option__radio[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.doc-type-option--selected[_ngcontent-%COMP%] {\n  background-color: #e7e5e4;\n}\n.doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], \n.doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%] {\n  color: #1c1917;\n}\n.doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%] {\n  color: #44403c;\n}\n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%] {\n  background-color: #334155;\n}\n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n/*# sourceMappingURL=resolve-status-dialog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NameReviewDialogComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "name-review-dialog", imports: [
      CommonModule,
      FormsModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<div class="flex items-start justify-between gap-4">\r
    <h2\r
        mat-dialog-title\r
        class="!m-0 !font-semibold !text-lg !leading-snug !tracking-tight text-stone-900 dark:text-white md:!text-xl"\r
    >\r
        {{ 'smartEnrollProjects.recordDetail.nameReviewDialog.title' | transloco }}\r
    </h2>\r
    <button\r
        mat-icon-button\r
        type="button"\r
        class="!text-stone-500 dark:!text-stone-400"\r
        [disabled]="loading()"\r
        (click)="close()"\r
        [attr.aria-label]="'smartEnrollProjects.recordDetail.nameReviewDialog.close' | transloco"\r
    >\r
        <mat-icon>close</mat-icon>\r
    </button>\r
</div>\r
\r
<mat-dialog-content>\r
    <p class="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">\r
        {{ 'smartEnrollProjects.recordDetail.nameReviewDialog.subtitle' | transloco }}\r
    </p>\r
\r
    @if (data.skipReason) {\r
        <div\r
            class="mt-4 flex items-start gap-2.5 rounded-xl border border-stone-200/90 bg-stone-50/90 p-3.5 dark:border-gray-700 dark:bg-gray-900/40"\r
        >\r
            <mat-icon class="icon-size-5 shrink-0 !text-stone-500 dark:!text-stone-400">info</mat-icon>\r
            <p class="text-xs leading-relaxed text-stone-700 dark:text-stone-300">{{ data.skipReason }}</p>\r
        </div>\r
    }\r
\r
    <div class="mt-5 grid gap-3 md:grid-cols-2">\r
        <div class="rounded-xl border border-stone-200/90 bg-white p-3.5 dark:border-gray-700 dark:bg-gray-900/40">\r
            <p class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">\r
                {{ 'smartEnrollProjects.recordDetail.nameReviewDialog.documentName' | transloco }}\r
            </p>\r
            <p class="mt-1 break-words text-sm font-medium text-stone-900 dark:text-white">\r
                {{ data.documentName || ('smartEnrollProjects.recordDetail.nameReviewDialog.noName' | transloco) }}\r
            </p>\r
            @if (data.documentType) {\r
                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                    {{ data.documentType }}@if (data.country) { \xB7 {{ data.country }} }\r
                </p>\r
            }\r
        </div>\r
        <div class="rounded-xl border border-stone-200/90 bg-white p-3.5 dark:border-gray-700 dark:bg-gray-900/40">\r
            <p class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">\r
                {{ 'smartEnrollProjects.recordDetail.nameReviewDialog.formName' | transloco }}\r
            </p>\r
            <p class="mt-1 break-words text-sm font-medium text-stone-900 dark:text-white">\r
                {{ data.formName || ('smartEnrollProjects.recordDetail.nameReviewDialog.noName' | transloco) }}\r
            </p>\r
        </div>\r
    </div>\r
\r
    <div class="mt-5 flex flex-col gap-3">\r
        @for (option of options; track option.value) {\r
            <button\r
                type="button"\r
                class="resolve-option"\r
                [ngClass]="option.colorClass"\r
                [class.resolve-option--selected]="selected() === option.value"\r
                [disabled]="loading()"\r
                (click)="select(option.value)"\r
            >\r
                <mat-icon class="resolve-option__icon">{{ option.icon }}</mat-icon>\r
                <span class="resolve-option__text">\r
                    <span class="resolve-option__title">{{ option.titleKey | transloco }}</span>\r
                    <span class="resolve-option__description">{{ option.descriptionKey | transloco }}</span>\r
                </span>\r
                @if (selected() === option.value) {\r
                    <mat-icon class="icon-size-5 resolve-option__check">radio_button_checked</mat-icon>\r
                } @else {\r
                    <mat-icon class="icon-size-5 resolve-option__check resolve-option__check--muted"\r
                        >radio_button_unchecked</mat-icon\r
                    >\r
                }\r
            </button>\r
        }\r
    </div>\r
\r
    <div class="mt-5">\r
        <label class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">\r
            {{ 'smartEnrollProjects.recordDetail.nameReviewDialog.noteLabel' | transloco }}\r
        </label>\r
        <textarea\r
            class="w-full resize-none rounded-xl border border-stone-200/90 bg-white p-3 text-sm text-stone-800 shadow-sm focus:border-stone-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900/60 dark:text-stone-100"\r
            rows="2"\r
            [disabled]="loading()"\r
            [ngModel]="note()"\r
            (ngModelChange)="setNote($event)"\r
            [placeholder]="'smartEnrollProjects.recordDetail.nameReviewDialog.notePlaceholder' | transloco"\r
            maxlength="500"\r
        ></textarea>\r
    </div>\r
\r
    <div\r
        class="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200/80 bg-amber-50/80 p-3.5 dark:border-amber-900/50 dark:bg-amber-950/30"\r
    >\r
        <mat-icon class="icon-size-5 shrink-0 !text-amber-600 dark:!text-amber-400">bolt</mat-icon>\r
        <p class="text-xs leading-relaxed text-amber-900 dark:text-amber-200">\r
            {{ 'smartEnrollProjects.recordDetail.nameReviewDialog.statusNotice' | transloco }}\r
        </p>\r
    </div>\r
\r
    @if (errorMessage()) {\r
        <div\r
            class="mt-4 rounded-xl border border-red-200/90 bg-red-50/90 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"\r
        >\r
            {{ errorMessage() }}\r
        </div>\r
    }\r
\r
    <div class="mt-6 flex items-center justify-end gap-3">\r
        <button mat-stroked-button type="button" class="!rounded-xl" [disabled]="loading()" (click)="close()">\r
            {{ 'smartEnrollProjects.recordDetail.nameReviewDialog.cancel' | transloco }}\r
        </button>\r
        <button\r
            mat-flat-button\r
            type="button"\r
            color="primary"\r
            class="!rounded-xl"\r
            [disabled]="loading() || !selected()"\r
            (click)="confirm()"\r
        >\r
            @if (loading()) {\r
                <mat-spinner diameter="18"></mat-spinner>\r
            } @else {\r
                <mat-icon>done</mat-icon>\r
            }\r
            {{ 'smartEnrollProjects.recordDetail.nameReviewDialog.confirm' | transloco }}\r
        </button>\r
    </div>\r
</mat-dialog-content>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/projects/resolve-status-dialog.component.scss */\n:host ::ng-deep .mat-mdc-dialog-content {\n  max-height: none;\n  overflow: visible;\n}\n:host ::ng-deep .mdc-dialog__content {\n  max-height: none;\n  overflow: visible;\n}\n.resolve-option {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  padding: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.resolve-option:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.resolve-option__icon {\n  flex-shrink: 0;\n}\n.resolve-option__text {\n  display: flex;\n  min-width: 0px;\n  flex: 1 1 0%;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.resolve-option__title {\n  font-size: 0.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.resolve-option__title:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description {\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check {\n  flex-shrink: 0;\n}\n.resolve-option__check--muted {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check--muted:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--ok:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--ok .resolve-option__icon {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok .resolve-option__icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected {\n  --tw-border-opacity: 1;\n  border-color: rgb(110 231 183 / var(--tw-border-opacity, 1));\n  background-color: rgb(236 253 245 / 0.9);\n}\n.resolve-option--ok.resolve-option--selected:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(6 95 70 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 44 34 / 0.3);\n}\n.resolve-option--ok.resolve-option--selected .resolve-option__check {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected .resolve-option__check:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--warn:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--warn .resolve-option__icon {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn .resolve-option__icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 211 77 / var(--tw-border-opacity, 1));\n  background-color: rgb(255 251 235 / 0.9);\n}\n.resolve-option--warn.resolve-option--selected:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(146 64 14 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 26 3 / 0.3);\n}\n.resolve-option--warn.resolve-option--selected .resolve-option__check {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected .resolve-option__check:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--error:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--error .resolve-option__icon {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error .resolve-option__icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity, 1));\n  background-color: rgb(254 242 242 / 0.9);\n}\n.resolve-option--error.resolve-option--selected:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(153 27 27 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 10 10 / 0.3);\n}\n.resolve-option--error.resolve-option--selected .resolve-option__check {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected .resolve-option__check:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.doc-type-detect {\n  appearance: none;\n  margin-top: 1.25rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.doc-type-detect:hover:not(:disabled) {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect {\n  border-color: #4b5563;\n  background-color: #111827;\n}\n:host-context(.dark) .doc-type-detect:hover:not(:disabled) {\n  border-color: #6b7280;\n  background-color: #1f2937;\n}\n.doc-type-detect:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-detect__icon {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect__icon {\n  color: #e5e7eb;\n}\n.doc-type-detect__text {\n  display: flex;\n  min-width: 0px;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.doc-type-detect__title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect__title {\n  color: #ffffff;\n}\n.doc-type-detect__hint {\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect__hint {\n  color: #9ca3af;\n}\n.doc-type-or {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.doc-type-or:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.doc-type-or::before,\n.doc-type-or::after {\n  height: 1px;\n  flex: 1 1 0%;\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 229 228 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or:where(.dark, .dark *)::before,\n.doc-type-or:where(.dark, .dark *)::after {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or::before,\n.doc-type-or::after {\n  content: "";\n}\n.doc-type-search {\n  appearance: none;\n}\n:host-context(.dark) .doc-type-search {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter {\n  appearance: none;\n  flex-shrink: 0;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(41 37 36 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-filter {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter--active,\n:host-context(.dark) .doc-type-filter--active {\n  border-color: #e7e5e4;\n  background-color: #f5f5f4;\n  color: #1c1917;\n}\n.doc-type-list {\n  margin-top: 0.75rem;\n  max-height: 16rem;\n  overflow-y: auto;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n}\n:host-context(.dark) .doc-type-list {\n  border-color: #4b5563;\n}\n.doc-type-option {\n  appearance: none;\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  text-align: left;\n}\n.doc-type-option:last-child {\n  border-bottom-width: 0px;\n}\n:host-context(.dark) .doc-type-option {\n  border-bottom-color: #374151;\n  background-color: #111827;\n}\n.doc-type-option:hover:not(:disabled) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n:host-context(.dark) .doc-type-option:hover:not(:disabled) {\n  background-color: #1f2937;\n}\n.doc-type-option:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-option__name {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-option__name {\n  color: #f9fafb;\n}\n.doc-type-option__country {\n  margin-top: 0.125rem;\n  display: block;\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-option__country {\n  color: #9ca3af;\n}\n.doc-type-option__radio {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-option__radio {\n  color: #9ca3af;\n}\n.doc-type-option--selected {\n  background-color: #e7e5e4;\n}\n.doc-type-option--selected .doc-type-option__name,\n.doc-type-option--selected .doc-type-option__radio {\n  color: #1c1917;\n}\n.doc-type-option--selected .doc-type-option__country {\n  color: #44403c;\n}\n:host-context(.dark) .doc-type-option--selected {\n  background-color: #334155;\n}\n:host-context(.dark) .doc-type-option--selected .doc-type-option__name,\n:host-context(.dark) .doc-type-option--selected .doc-type-option__radio {\n  color: #f9fafb;\n}\n:host-context(.dark) .doc-type-option--selected .doc-type-option__country {\n  color: #d1d5db;\n}\n/*# sourceMappingURL=resolve-status-dialog.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NameReviewDialogComponent, { className: "NameReviewDialogComponent", filePath: "src/app/modules/smart-enroll/projects/name-review-dialog.component.ts", lineNumber: 73 });
})();

// src/app/modules/smart-enroll/projects/resolve-status-dialog.component.ts
var _c03 = (a0) => ({ type: a0 });
var _forTrack04 = ($index, $item) => $item.value;
function ResolveStatusDialogComponent_For_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 20);
    \u0275\u0275text(1, "radio_button_checked");
    \u0275\u0275elementEnd();
  }
}
function ResolveStatusDialogComponent_For_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 21);
    \u0275\u0275text(1, "radio_button_unchecked");
    \u0275\u0275elementEnd();
  }
}
function ResolveStatusDialogComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ResolveStatusDialogComponent_For_14_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.select(option_r2.value));
    });
    \u0275\u0275elementStart(1, "mat-icon", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17)(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ResolveStatusDialogComponent_For_14_Conditional_10_Template, 2, 0, "mat-icon", 20)(11, ResolveStatusDialogComponent_For_14_Conditional_11_Template, 2, 0, "mat-icon", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("resolve-option--selected", ctx_r2.selected() === option_r2.value);
    \u0275\u0275property("ngClass", option_r2.colorClass)("disabled", ctx_r2.loading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, option_r2.titleKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, option_r2.descriptionKey));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selected() === option_r2.value ? 10 : 11);
  }
}
function ResolveStatusDialogComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon", 22);
    \u0275\u0275text(2, "bolt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "smartEnrollProjects.recordDetail.resolveDialog.webhookNotice", \u0275\u0275pureFunction1(4, _c03, ctx_r2.webhookTypePreview())), " ");
  }
}
function ResolveStatusDialogComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.errorMessage(), " ");
  }
}
function ResolveStatusDialogComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 14);
  }
}
function ResolveStatusDialogComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
var RESOLVE_OPTIONS = [
  {
    value: "COMPLETED",
    icon: "check_circle",
    colorClass: "resolve-option--ok",
    titleKey: "smartEnrollProjects.recordDetail.resolveDialog.optionCompletedTitle",
    descriptionKey: "smartEnrollProjects.recordDetail.resolveDialog.optionCompletedDescription"
  },
  {
    value: "COMPLETED_WITHOUT_KYC",
    icon: "warning",
    colorClass: "resolve-option--warn",
    titleKey: "smartEnrollProjects.recordDetail.resolveDialog.optionCompletedNoKycTitle",
    descriptionKey: "smartEnrollProjects.recordDetail.resolveDialog.optionCompletedNoKycDescription"
  },
  {
    value: "FAILED",
    icon: "cancel",
    colorClass: "resolve-option--error",
    titleKey: "smartEnrollProjects.recordDetail.resolveDialog.optionFailedTitle",
    descriptionKey: "smartEnrollProjects.recordDetail.resolveDialog.optionFailedDescription"
  }
];
var ResolveStatusDialogComponent = class _ResolveStatusDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this._dialogRef = inject(MatDialogRef);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._transloco = inject(TranslocoService);
    this.options = RESOLVE_OPTIONS;
    this.selected = signal(this.data.preselected ?? null);
    this.note = signal("");
    this.loading = signal(false);
    this.errorMessage = signal(null);
  }
  get isCorrectionMode() {
    return !this.data.preselected;
  }
  /** Best-effort preview of the webhook type this override will fire, for transparency. */
  webhookTypePreview() {
    const status = this.selected();
    if (!status)
      return "";
    const flowType = this.data.record?.projectFlow?.type || "onboarding";
    return `${flowType}_app_registration_${status.toLowerCase()}`;
  }
  select(option) {
    if (this.loading())
      return;
    this.selected.set(option);
    this.errorMessage.set(null);
  }
  setNote(value) {
    this.note.set(value);
  }
  confirm() {
    const status = this.selected();
    const id = this.data.record?._id;
    if (!status || !id || this.loading())
      return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this._projectsService.overrideAppRegistrationStatus(id, status, this.note().trim() || void 0).pipe(finalize(() => this.loading.set(false))).subscribe({
      next: (response) => {
        this._dialogRef.close({ success: true, record: response?.data, status });
      },
      error: (error) => {
        const message = error?.error?.message ?? this._transloco.translate("smartEnrollProjects.recordDetail.resolveDialog.genericError");
        this.errorMessage.set(message);
      }
    });
  }
  close() {
    if (this.loading())
      return;
    this._dialogRef.close({ success: false });
  }
  static {
    this.\u0275fac = function ResolveStatusDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResolveStatusDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResolveStatusDialogComponent, selectors: [["resolve-status-dialog"]], decls: 32, vars: 29, consts: [[1, "flex", "items-start", "justify-between", "gap-4"], ["mat-dialog-title", "", 1, "!m-0", "!font-semibold", "!text-lg", "!leading-snug", "!tracking-tight", "text-stone-900", "dark:text-white", "md:!text-xl"], ["mat-icon-button", "", "type", "button", 1, "!text-stone-500", "dark:!text-stone-400", 3, "click", "disabled"], [1, "mt-1", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "mt-5", "flex", "flex-col", "gap-3"], ["type", "button", 1, "resolve-option", 3, "ngClass", "resolve-option--selected", "disabled"], [1, "mt-5"], [1, "mb-1.5", "block", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], ["rows", "2", "maxlength", "500", 1, "w-full", "resize-none", "rounded-xl", "border", "border-stone-200/90", "bg-white", "p-3", "text-sm", "text-stone-800", "shadow-sm", "focus:border-stone-400", "focus:outline-none", "dark:border-gray-700", "dark:bg-gray-900/60", "dark:text-stone-100", 3, "ngModelChange", "disabled", "ngModel", "placeholder"], [1, "mt-4", "flex", "items-start", "gap-2.5", "rounded-xl", "border", "border-amber-200/80", "bg-amber-50/80", "p-3.5", "dark:border-amber-900/50", "dark:bg-amber-950/30"], [1, "mt-4", "rounded-xl", "border", "border-red-200/90", "bg-red-50/90", "px-4", "py-3", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "mt-6", "flex", "items-center", "justify-end", "gap-3"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-xl", 3, "click", "disabled"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "!rounded-xl", 3, "click", "disabled"], ["diameter", "18"], ["type", "button", 1, "resolve-option", 3, "click", "ngClass", "disabled"], [1, "resolve-option__icon"], [1, "resolve-option__text"], [1, "resolve-option__title"], [1, "resolve-option__description"], [1, "icon-size-5", "resolve-option__check"], [1, "icon-size-5", "resolve-option__check", "resolve-option__check--muted"], [1, "icon-size-5", "shrink-0", "!text-amber-600", "dark:!text-amber-400"], [1, "text-xs", "leading-relaxed", "text-amber-900", "dark:text-amber-200"]], template: function ResolveStatusDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275listener("click", function ResolveStatusDialogComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "mat-dialog-content")(9, "p", 3);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 4);
        \u0275\u0275repeaterCreate(13, ResolveStatusDialogComponent_For_14_Template, 12, 12, "button", 5, _forTrack04);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 6)(16, "label", 7);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "textarea", 8);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275listener("ngModelChange", function ResolveStatusDialogComponent_Template_textarea_ngModelChange_19_listener($event) {
          return ctx.setNote($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, ResolveStatusDialogComponent_Conditional_21_Template, 6, 6, "div", 9)(22, ResolveStatusDialogComponent_Conditional_22_Template, 2, 1, "div", 10);
        \u0275\u0275elementStart(23, "div", 11)(24, "button", 12);
        \u0275\u0275listener("click", function ResolveStatusDialogComponent_Template_button_click_24_listener() {
          return ctx.close();
        });
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 13);
        \u0275\u0275listener("click", function ResolveStatusDialogComponent_Template_button_click_27_listener() {
          return ctx.confirm();
        });
        \u0275\u0275template(28, ResolveStatusDialogComponent_Conditional_28_Template, 1, 0, "mat-spinner", 14)(29, ResolveStatusDialogComponent_Conditional_29_Template, 2, 0, "mat-icon");
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "transloco");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 15, ctx.isCorrectionMode ? "smartEnrollProjects.recordDetail.resolveDialog.overrideTitle" : "smartEnrollProjects.recordDetail.resolveDialog.resolveTitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 17, "smartEnrollProjects.recordDetail.resolveDialog.close"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 19, ctx.isCorrectionMode ? "smartEnrollProjects.recordDetail.resolveDialog.overrideSubtitle" : "smartEnrollProjects.recordDetail.resolveDialog.resolveSubtitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.options);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 21, "smartEnrollProjects.recordDetail.resolveDialog.noteLabel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading())("ngModel", ctx.note())("placeholder", \u0275\u0275pipeBind1(20, 23, "smartEnrollProjects.recordDetail.resolveDialog.notePlaceholder"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selected() ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.errorMessage() ? 22 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 25, "smartEnrollProjects.recordDetail.resolveDialog.cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading() || !ctx.selected());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 28 : 29);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 27, "smartEnrollProjects.recordDetail.resolveDialog.confirm"), " ");
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, MatButtonModule, MatButton, MatIconButton, MatDialogModule, MatDialogTitle, MatDialogContent, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, TranslocoModule, TranslocoPipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%]     .mat-mdc-dialog-content {\n  max-height: none;\n  overflow: visible;\n}\n[_nghost-%COMP%]     .mdc-dialog__content {\n  max-height: none;\n  overflow: visible;\n}\n.resolve-option[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  padding: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.resolve-option[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.resolve-option__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.resolve-option__text[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0px;\n  flex: 1 1 0%;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.resolve-option__title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.resolve-option__title[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.resolve-option__check--muted[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check--muted[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--ok[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--ok[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(110 231 183 / var(--tw-border-opacity, 1));\n  background-color: rgb(236 253 245 / 0.9);\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(6 95 70 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 44 34 / 0.3);\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--warn[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--warn[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 211 77 / var(--tw-border-opacity, 1));\n  background-color: rgb(255 251 235 / 0.9);\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(146 64 14 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 26 3 / 0.3);\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--error[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--error[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error[_ngcontent-%COMP%]   .resolve-option__icon[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity, 1));\n  background-color: rgb(254 242 242 / 0.9);\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(153 27 27 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 10 10 / 0.3);\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected[_ngcontent-%COMP%]   .resolve-option__check[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.doc-type-detect[_ngcontent-%COMP%] {\n  appearance: none;\n  margin-top: 1.25rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.doc-type-detect[_ngcontent-%COMP%]:hover:not(:disabled) {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background-color: #111827;\n}\n.dark[_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%]:hover:not(:disabled), .dark   [_nghost-%COMP%]   .doc-type-detect[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #6b7280;\n  background-color: #1f2937;\n}\n.doc-type-detect[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-detect__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect__icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect__icon[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n.doc-type-detect__text[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0px;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.doc-type-detect__title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect__title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect__title[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.doc-type-detect__hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-detect__hint[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-detect__hint[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.doc-type-or[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]::before, \n.doc-type-or[_ngcontent-%COMP%]::after {\n  height: 1px;\n  flex: 1 1 0%;\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 229 228 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]:where(.dark, .dark *)::before, \n.doc-type-or[_ngcontent-%COMP%]:where(.dark, .dark *)::after {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or[_ngcontent-%COMP%]::before, \n.doc-type-or[_ngcontent-%COMP%]::after {\n  content: "";\n}\n.doc-type-search[_ngcontent-%COMP%] {\n  appearance: none;\n}\n.dark[_nghost-%COMP%]   .doc-type-search[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-search[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter[_ngcontent-%COMP%] {\n  appearance: none;\n  flex-shrink: 0;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(41 37 36 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-filter[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-filter[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter--active[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .doc-type-filter--active[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-filter--active[_ngcontent-%COMP%] {\n  border-color: #e7e5e4;\n  background-color: #f5f5f4;\n  color: #1c1917;\n}\n.doc-type-list[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  max-height: 16rem;\n  overflow-y: auto;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-list[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-list[_ngcontent-%COMP%] {\n  border-color: #4b5563;\n}\n.doc-type-option[_ngcontent-%COMP%] {\n  appearance: none;\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  text-align: left;\n}\n.doc-type-option[_ngcontent-%COMP%]:last-child {\n  border-bottom-width: 0px;\n}\n.dark[_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%] {\n  border-bottom-color: #374151;\n  background-color: #111827;\n}\n.doc-type-option[_ngcontent-%COMP%]:hover:not(:disabled) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%]:hover:not(:disabled), .dark   [_nghost-%COMP%]   .doc-type-option[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1f2937;\n}\n.doc-type-option[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-option__name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.doc-type-option__country[_ngcontent-%COMP%] {\n  margin-top: 0.125rem;\n  display: block;\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.doc-type-option__radio[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.dark[_nghost-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.doc-type-option--selected[_ngcontent-%COMP%] {\n  background-color: #e7e5e4;\n}\n.doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], \n.doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%] {\n  color: #1c1917;\n}\n.doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%] {\n  color: #44403c;\n}\n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%] {\n  background-color: #334155;\n}\n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__name[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__radio[_ngcontent-%COMP%] {\n  color: #f9fafb;\n}\n.dark[_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .doc-type-option--selected[_ngcontent-%COMP%]   .doc-type-option__country[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n/*# sourceMappingURL=resolve-status-dialog.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResolveStatusDialogComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "resolve-status-dialog", imports: [
      CommonModule,
      FormsModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], template: `<div class="flex items-start justify-between gap-4">\r
    <h2\r
        mat-dialog-title\r
        class="!m-0 !font-semibold !text-lg !leading-snug !tracking-tight text-stone-900 dark:text-white md:!text-xl"\r
    >\r
        {{\r
            (isCorrectionMode\r
                ? 'smartEnrollProjects.recordDetail.resolveDialog.overrideTitle'\r
                : 'smartEnrollProjects.recordDetail.resolveDialog.resolveTitle'\r
            ) | transloco\r
        }}\r
    </h2>\r
    <button\r
        mat-icon-button\r
        type="button"\r
        class="!text-stone-500 dark:!text-stone-400"\r
        [disabled]="loading()"\r
        (click)="close()"\r
        [attr.aria-label]="'smartEnrollProjects.recordDetail.resolveDialog.close' | transloco"\r
    >\r
        <mat-icon>close</mat-icon>\r
    </button>\r
</div>\r
\r
<mat-dialog-content>\r
    <p class="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">\r
        {{\r
            (isCorrectionMode\r
                ? 'smartEnrollProjects.recordDetail.resolveDialog.overrideSubtitle'\r
                : 'smartEnrollProjects.recordDetail.resolveDialog.resolveSubtitle'\r
            ) | transloco\r
        }}\r
    </p>\r
\r
    <div class="mt-5 flex flex-col gap-3">\r
        @for (option of options; track option.value) {\r
            <button\r
                type="button"\r
                class="resolve-option"\r
                [ngClass]="option.colorClass"\r
                [class.resolve-option--selected]="selected() === option.value"\r
                [disabled]="loading()"\r
                (click)="select(option.value)"\r
            >\r
                <mat-icon class="resolve-option__icon">{{ option.icon }}</mat-icon>\r
                <span class="resolve-option__text">\r
                    <span class="resolve-option__title">{{ option.titleKey | transloco }}</span>\r
                    <span class="resolve-option__description">{{ option.descriptionKey | transloco }}</span>\r
                </span>\r
                @if (selected() === option.value) {\r
                    <mat-icon class="icon-size-5 resolve-option__check">radio_button_checked</mat-icon>\r
                } @else {\r
                    <mat-icon class="icon-size-5 resolve-option__check resolve-option__check--muted">radio_button_unchecked</mat-icon>\r
                }\r
            </button>\r
        }\r
    </div>\r
\r
    <div class="mt-5">\r
        <label class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">\r
            {{ 'smartEnrollProjects.recordDetail.resolveDialog.noteLabel' | transloco }}\r
        </label>\r
        <textarea\r
            class="w-full resize-none rounded-xl border border-stone-200/90 bg-white p-3 text-sm text-stone-800 shadow-sm focus:border-stone-400 focus:outline-none dark:border-gray-700 dark:bg-gray-900/60 dark:text-stone-100"\r
            rows="2"\r
            [disabled]="loading()"\r
            [ngModel]="note()"\r
            (ngModelChange)="setNote($event)"\r
            [placeholder]="'smartEnrollProjects.recordDetail.resolveDialog.notePlaceholder' | transloco"\r
            maxlength="500"\r
        ></textarea>\r
    </div>\r
\r
    @if (selected()) {\r
        <div class="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200/80 bg-amber-50/80 p-3.5 dark:border-amber-900/50 dark:bg-amber-950/30">\r
            <mat-icon class="icon-size-5 shrink-0 !text-amber-600 dark:!text-amber-400">bolt</mat-icon>\r
            <p class="text-xs leading-relaxed text-amber-900 dark:text-amber-200">\r
                {{ 'smartEnrollProjects.recordDetail.resolveDialog.webhookNotice' | transloco: { type: webhookTypePreview() } }}\r
            </p>\r
        </div>\r
    }\r
\r
    @if (errorMessage()) {\r
        <div class="mt-4 rounded-xl border border-red-200/90 bg-red-50/90 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">\r
            {{ errorMessage() }}\r
        </div>\r
    }\r
\r
    <div class="mt-6 flex items-center justify-end gap-3">\r
        <button mat-stroked-button type="button" class="!rounded-xl" [disabled]="loading()" (click)="close()">\r
            {{ 'smartEnrollProjects.recordDetail.resolveDialog.cancel' | transloco }}\r
        </button>\r
        <button\r
            mat-flat-button\r
            type="button"\r
            color="primary"\r
            class="!rounded-xl"\r
            [disabled]="loading() || !selected()"\r
            (click)="confirm()"\r
        >\r
            @if (loading()) {\r
                <mat-spinner diameter="18"></mat-spinner>\r
            } @else {\r
                <mat-icon>done</mat-icon>\r
            }\r
            {{ 'smartEnrollProjects.recordDetail.resolveDialog.confirm' | transloco }}\r
        </button>\r
    </div>\r
</mat-dialog-content>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/projects/resolve-status-dialog.component.scss */\n:host ::ng-deep .mat-mdc-dialog-content {\n  max-height: none;\n  overflow: visible;\n}\n:host ::ng-deep .mdc-dialog__content {\n  max-height: none;\n  overflow: visible;\n}\n.resolve-option {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  padding: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.resolve-option:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.resolve-option__icon {\n  flex-shrink: 0;\n}\n.resolve-option__text {\n  display: flex;\n  min-width: 0px;\n  flex: 1 1 0%;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.resolve-option__title {\n  font-size: 0.75rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n.resolve-option__title:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description {\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.resolve-option__description:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check {\n  flex-shrink: 0;\n}\n.resolve-option__check--muted {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.resolve-option__check--muted:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--ok:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--ok .resolve-option__icon {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok .resolve-option__icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected {\n  --tw-border-opacity: 1;\n  border-color: rgb(110 231 183 / var(--tw-border-opacity, 1));\n  background-color: rgb(236 253 245 / 0.9);\n}\n.resolve-option--ok.resolve-option--selected:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(6 95 70 / var(--tw-border-opacity, 1));\n  background-color: rgb(2 44 34 / 0.3);\n}\n.resolve-option--ok.resolve-option--selected .resolve-option__check {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.resolve-option--ok.resolve-option--selected .resolve-option__check:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--warn:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--warn .resolve-option__icon {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn .resolve-option__icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 211 77 / var(--tw-border-opacity, 1));\n  background-color: rgb(255 251 235 / 0.9);\n}\n.resolve-option--warn.resolve-option--selected:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(146 64 14 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 26 3 / 0.3);\n}\n.resolve-option--warn.resolve-option--selected .resolve-option__check {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.resolve-option--warn.resolve-option--selected .resolve-option__check:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.resolve-option--error:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.resolve-option--error .resolve-option__icon {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error .resolve-option__icon:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity, 1));\n  background-color: rgb(254 242 242 / 0.9);\n}\n.resolve-option--error.resolve-option--selected:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(153 27 27 / var(--tw-border-opacity, 1));\n  background-color: rgb(69 10 10 / 0.3);\n}\n.resolve-option--error.resolve-option--selected .resolve-option__check {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.resolve-option--error.resolve-option--selected .resolve-option__check:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.doc-type-detect {\n  appearance: none;\n  margin-top: 1.25rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.doc-type-detect:hover:not(:disabled) {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect {\n  border-color: #4b5563;\n  background-color: #111827;\n}\n:host-context(.dark) .doc-type-detect:hover:not(:disabled) {\n  border-color: #6b7280;\n  background-color: #1f2937;\n}\n.doc-type-detect:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-detect__icon {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect__icon {\n  color: #e5e7eb;\n}\n.doc-type-detect__text {\n  display: flex;\n  min-width: 0px;\n  flex-direction: column;\n  gap: 0.125rem;\n}\n.doc-type-detect__title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect__title {\n  color: #ffffff;\n}\n.doc-type-detect__hint {\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-detect__hint {\n  color: #9ca3af;\n}\n.doc-type-or {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.doc-type-or:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.doc-type-or::before,\n.doc-type-or::after {\n  height: 1px;\n  flex: 1 1 0%;\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 229 228 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or:where(.dark, .dark *)::before,\n.doc-type-or:where(.dark, .dark *)::after {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1));\n}\n.doc-type-or::before,\n.doc-type-or::after {\n  content: "";\n}\n.doc-type-search {\n  appearance: none;\n}\n:host-context(.dark) .doc-type-search {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter {\n  appearance: none;\n  flex-shrink: 0;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(41 37 36 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-filter {\n  border-color: #4b5563;\n  background-color: #111827;\n  color: #f5f5f4;\n}\n.doc-type-filter--active,\n:host-context(.dark) .doc-type-filter--active {\n  border-color: #e7e5e4;\n  background-color: #f5f5f4;\n  color: #1c1917;\n}\n.doc-type-list {\n  margin-top: 0.75rem;\n  max-height: 16rem;\n  overflow-y: auto;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n}\n:host-context(.dark) .doc-type-list {\n  border-color: #4b5563;\n}\n.doc-type-option {\n  appearance: none;\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  text-align: left;\n}\n.doc-type-option:last-child {\n  border-bottom-width: 0px;\n}\n:host-context(.dark) .doc-type-option {\n  border-bottom-color: #374151;\n  background-color: #111827;\n}\n.doc-type-option:hover:not(:disabled) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1));\n}\n:host-context(.dark) .doc-type-option:hover:not(:disabled) {\n  background-color: #1f2937;\n}\n.doc-type-option:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.doc-type-option__name {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(28 25 23 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-option__name {\n  color: #f9fafb;\n}\n.doc-type-option__country {\n  margin-top: 0.125rem;\n  display: block;\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-option__country {\n  color: #9ca3af;\n}\n.doc-type-option__radio {\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n:host-context(.dark) .doc-type-option__radio {\n  color: #9ca3af;\n}\n.doc-type-option--selected {\n  background-color: #e7e5e4;\n}\n.doc-type-option--selected .doc-type-option__name,\n.doc-type-option--selected .doc-type-option__radio {\n  color: #1c1917;\n}\n.doc-type-option--selected .doc-type-option__country {\n  color: #44403c;\n}\n:host-context(.dark) .doc-type-option--selected {\n  background-color: #334155;\n}\n:host-context(.dark) .doc-type-option--selected .doc-type-option__name,\n:host-context(.dark) .doc-type-option--selected .doc-type-option__radio {\n  color: #f9fafb;\n}\n:host-context(.dark) .doc-type-option--selected .doc-type-option__country {\n  color: #d1d5db;\n}\n/*# sourceMappingURL=resolve-status-dialog.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResolveStatusDialogComponent, { className: "ResolveStatusDialogComponent", filePath: "src/app/modules/smart-enroll/projects/resolve-status-dialog.component.ts", lineNumber: 72 });
})();

// src/app/modules/smart-enroll/projects/image-preview-dialog.component.ts
function ImagePreviewDialogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data.title);
  }
}
function ImagePreviewDialogComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3);
  }
}
var ImagePreviewDialogComponent = class _ImagePreviewDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this._dialogRef = inject(MatDialogRef);
    this.zoom = signal(1);
    this.minZoom = 0.5;
    this.maxZoom = 4;
    this._step = 0.25;
  }
  close() {
    this._dialogRef.close();
  }
  zoomIn() {
    this.zoom.update((z) => Math.min(this.maxZoom, Math.round((z + this._step) * 100) / 100));
  }
  zoomOut() {
    this.zoom.update((z) => Math.max(this.minZoom, Math.round((z - this._step) * 100) / 100));
  }
  resetZoom() {
    this.zoom.set(1);
  }
  static {
    this.\u0275fac = function ImagePreviewDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImagePreviewDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImagePreviewDialogComponent, selectors: [["image-preview-dialog"]], decls: 23, vars: 19, consts: [[1, "image-preview-dialog"], [1, "image-preview-dialog__toolbar"], [1, "image-preview-dialog__title"], [1, "image-preview-dialog__title-spacer"], [1, "image-preview-dialog__actions"], ["mat-icon-button", "", "type", "button", 3, "click", "disabled"], ["mat-icon-button", "", "type", "button", 3, "click"], [1, "image-preview-dialog__viewport"], ["alt", "", "draggable", "false", 1, "image-preview-dialog__img", 3, "src"]], template: function ImagePreviewDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ImagePreviewDialogComponent_Conditional_2_Template, 2, 1, "p", 2)(3, ImagePreviewDialogComponent_Conditional_3_Template, 1, 0, "span", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "button", 5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275listener("click", function ImagePreviewDialogComponent_Template_button_click_5_listener() {
          return ctx.zoomOut();
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "zoom_out");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275listener("click", function ImagePreviewDialogComponent_Template_button_click_9_listener() {
          return ctx.zoomIn();
        });
        \u0275\u0275elementStart(11, "mat-icon");
        \u0275\u0275text(12, "zoom_in");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 5);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275listener("click", function ImagePreviewDialogComponent_Template_button_click_13_listener() {
          return ctx.resetZoom();
        });
        \u0275\u0275elementStart(15, "mat-icon");
        \u0275\u0275text(16, "fit_screen");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "button", 6);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275listener("click", function ImagePreviewDialogComponent_Template_button_click_17_listener() {
          return ctx.close();
        });
        \u0275\u0275elementStart(19, "mat-icon");
        \u0275\u0275text(20, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 7);
        \u0275\u0275element(22, "img", 8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.title ? 2 : 3);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.zoom() <= ctx.minZoom);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 11, "smartEnrollProjects.recordDetail.imagePreview.zoomOut"));
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.zoom() >= ctx.maxZoom);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 13, "smartEnrollProjects.recordDetail.imagePreview.zoomIn"));
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.zoom() === 1);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 15, "smartEnrollProjects.recordDetail.imagePreview.resetZoom"));
        \u0275\u0275advance(4);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 17, "smartEnrollProjects.recordDetail.imagePreview.close"));
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("width", 100 * ctx.zoom(), "%");
        \u0275\u0275property("src", ctx.data.imageSrc, \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [CommonModule, MatButtonModule, MatIconButton, MatDialogModule, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.image-preview-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  max-height: min(100vh, 100dvh);\n}\n.image-preview-dialog__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.5rem 0.5rem 0.5rem 1rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  color: #e7e5e4;\n}\n.image-preview-dialog__toolbar[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.image-preview-dialog__title[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 0;\n  flex: 1;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #f5f5f4;\n}\n.image-preview-dialog__title-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.image-preview-dialog__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  gap: 0.125rem;\n}\n.image-preview-dialog__viewport[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  background: #0c0a09;\n}\n.image-preview-dialog__img[_ngcontent-%COMP%] {\n  display: block;\n  height: auto;\n  max-width: none;\n}\n/*# sourceMappingURL=image-preview-dialog.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImagePreviewDialogComponent, [{
    type: Component,
    args: [{ selector: "image-preview-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="image-preview-dialog">\r
    <div class="image-preview-dialog__toolbar">\r
        @if (data.title) {\r
            <p class="image-preview-dialog__title">{{ data.title }}</p>\r
        } @else {\r
            <span class="image-preview-dialog__title-spacer"></span>\r
        }\r
        <div class="image-preview-dialog__actions">\r
            <button\r
                mat-icon-button\r
                type="button"\r
                (click)="zoomOut()"\r
                [disabled]="zoom() <= minZoom"\r
                [attr.aria-label]="'smartEnrollProjects.recordDetail.imagePreview.zoomOut' | transloco"\r
            >\r
                <mat-icon>zoom_out</mat-icon>\r
            </button>\r
            <button\r
                mat-icon-button\r
                type="button"\r
                (click)="zoomIn()"\r
                [disabled]="zoom() >= maxZoom"\r
                [attr.aria-label]="'smartEnrollProjects.recordDetail.imagePreview.zoomIn' | transloco"\r
            >\r
                <mat-icon>zoom_in</mat-icon>\r
            </button>\r
            <button\r
                mat-icon-button\r
                type="button"\r
                (click)="resetZoom()"\r
                [disabled]="zoom() === 1"\r
                [attr.aria-label]="'smartEnrollProjects.recordDetail.imagePreview.resetZoom' | transloco"\r
            >\r
                <mat-icon>fit_screen</mat-icon>\r
            </button>\r
            <button\r
                mat-icon-button\r
                type="button"\r
                (click)="close()"\r
                [attr.aria-label]="'smartEnrollProjects.recordDetail.imagePreview.close' | transloco"\r
            >\r
                <mat-icon>close</mat-icon>\r
            </button>\r
        </div>\r
    </div>\r
    <div class="image-preview-dialog__viewport">\r
        <img\r
            [src]="data.imageSrc"\r
            alt=""\r
            class="image-preview-dialog__img"\r
            [style.width.%]="100 * zoom()"\r
            draggable="false"\r
        />\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/projects/image-preview-dialog.component.scss */\n:host {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.image-preview-dialog {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  max-height: min(100vh, 100dvh);\n}\n.image-preview-dialog__toolbar {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.5rem 0.5rem 0.5rem 1rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  color: #e7e5e4;\n}\n.image-preview-dialog__toolbar .mat-mdc-icon-button {\n  color: inherit;\n}\n.image-preview-dialog__title {\n  margin: 0;\n  min-width: 0;\n  flex: 1;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #f5f5f4;\n}\n.image-preview-dialog__title-spacer {\n  flex: 1;\n}\n.image-preview-dialog__actions {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  gap: 0.125rem;\n}\n.image-preview-dialog__viewport {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  background: #0c0a09;\n}\n.image-preview-dialog__img {\n  display: block;\n  height: auto;\n  max-width: none;\n}\n/*# sourceMappingURL=image-preview-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImagePreviewDialogComponent, { className: "ImagePreviewDialogComponent", filePath: "src/app/modules/smart-enroll/projects/image-preview-dialog.component.ts", lineNumber: 22 });
})();

// src/app/modules/smart-enroll/projects/project-record-detail.component.ts
var _c04 = ["eventsPanel"];
var _c1 = (a0) => ["/smart-enroll/projects", a0];
var _c2 = (a0) => ["/smart-enroll/projects", a0, "records"];
var _c3 = (a0, a1, a2, a3, a4) => ({ "record-stepper-icon--ok": a0, "record-stepper-icon--error": a1, "record-stepper-icon--warn": a2, "record-stepper-icon--info": a3, "record-stepper-icon--pending": a4 });
var _c4 = (a0) => ({ date: a0 });
var _c5 = (a0) => ({ number: a0 });
var _c6 = (a0, a1) => ({ used: a0, limit: a1 });
var _c7 = (a0) => ({ remaining: a0 });
var _c8 = (a0) => ({ captures: a0 });
var _c9 = (a0) => ({ "md:grid-cols-2": a0 });
var _c10 = (a0, a1) => ({ type: a0, number: a1 });
var _c11 = (a0) => ({ scanned: a0 });
var _c12 = (a0, a1, a2) => ({ status: a0, reviewer: a1, date: a2 });
var _c13 = (a0, a1) => ({ id: a0, printedOn: a1 });
var _forTrack05 = ($index, $item) => $item.key;
function ProjectRecordDetailComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 19);
  }
}
function ProjectRecordDetailComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "download");
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_61_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openResendLinkDialog());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_61_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openResumeHelpDialog());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "help_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "smartEnrollProjects.recordDetail.resendLink"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(7, 5, "smartEnrollProjects.recordDetail.resumeHelp.iconLabel"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 7, "smartEnrollProjects.recordDetail.resumeHelp.iconLabel"));
  }
}
function ProjectRecordDetailComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "mat-spinner", 30);
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.errorKey()), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_74_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.statusPillClass(r_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r5.status, " ");
  }
}
function ProjectRecordDetailComponent_Conditional_74_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 40)(1, "header", 41)(2, "h2", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "button", 47);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_74_Conditional_0_For_18_Template_button_click_5_listener() {
      const section_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openDevApiHint(section_r7.key, section_r7.value));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "api");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 48);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_74_Conditional_0_For_18_Template_button_click_10_listener() {
      const section_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.copyJson(section_r7.value));
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "content_copy");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "pre", 49);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.devSectionTitle(section_r7.key));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.devApiHintDisabled(section_r7.key, section_r7.value))("title", \u0275\u0275pipeBind1(6, 7, "smartEnrollProjects.recordDetail.devView.apiHint"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 9, "smartEnrollProjects.recordDetail.devView.apiHint"));
    \u0275\u0275advance(5);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(11, 11, "smartEnrollProjects.recordDetail.devView.copy"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 13, "smartEnrollProjects.recordDetail.devView.copy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, section_r7.value));
  }
}
function ProjectRecordDetailComponent_Conditional_74_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 31)(1, "header", 32)(2, "div", 33)(3, "p", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_74_Conditional_0_Conditional_7_Template, 2, 2, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "aside", 37)(9, "p", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 39);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_74_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openResumeHelpDialog());
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "help_outline");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(17, ProjectRecordDetailComponent_Conditional_74_Conditional_0_For_18_Template, 18, 17, "article", 40, _forTrack05);
    \u0275\u0275elementStart(19, "article", 40)(20, "header", 41)(21, "h2", 42);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 43)(25, "button", 44);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_74_Conditional_0_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openWebhookEventsApiHint());
    });
    \u0275\u0275elementStart(28, "mat-icon");
    \u0275\u0275text(29, "api");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 45);
    \u0275\u0275element(31, "webhook-events", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.displayName(r_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5._id);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r5.status ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "smartEnrollProjects.recordDetail.devView.resumeCallout"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 12, "smartEnrollProjects.recordDetail.resumeHelp.iconLabel"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 14, "smartEnrollProjects.recordDetail.resumeHelp.iconLabel"));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.devSections());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 16, "smartEnrollProjects.recordDetail.devView.webhookEvents"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(26, 18, "smartEnrollProjects.recordDetail.devView.apiHint"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(27, 20, "smartEnrollProjects.recordDetail.devView.apiHint"));
    \u0275\u0275advance(6);
    \u0275\u0275property("appRegistrationId", r_r5._id);
  }
}
function ProjectRecordDetailComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProjectRecordDetailComponent_Conditional_74_Conditional_0_Template, 32, 22, "section", 31);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.record()) ? 0 : -1, tmp_2_0);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r2.statusPillClass(r_r9.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabel(r_r9.status), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 97);
    \u0275\u0275element(2, "img", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 99);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.enrollmentSelfieSrc(r_r9), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "smartEnrollProjects.recordDetail.livenessSelfie"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_22_Template_button_click_0_listener() {
      const step_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.scrollToStep(step_r11));
    });
    \u0275\u0275elementStart(1, "mat-icon", 101);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 102);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("record-stepper-btn--active", ctx_r2.activeStep() === step_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(7, _c3, ctx_r2.stepState(step_r11) === "ok", ctx_r2.stepState(step_r11) === "error", ctx_r2.stepState(step_r11) === "warn", ctx_r2.stepState(step_r11) === "info", ctx_r2.stepState(step_r11) === "pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.stepIcon(step_r11), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "smartEnrollProjects.recordDetail.step." + step_r11));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_24_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatConsentDate(ctx));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_24_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 105)(1, "mat-icon", 54);
    \u0275\u0275text(2, "policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r2.consentPrivacyUrl(r_r9), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.consentPrivacyPolicy"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_24_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 105)(1, "mat-icon", 54);
    \u0275\u0275text(2, "gavel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r2.consentTermsUrl(r_r9), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.consentTermsAndConditions"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_24_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 103);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 104);
    \u0275\u0275template(4, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_24_Conditional_8_Conditional_4_Template, 5, 4, "a", 105)(5, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_24_Conditional_8_Conditional_5_Template, 5, 4, "a", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 3, "smartEnrollProjects.recordDetail.consentAcceptedOn", \u0275\u0275pureFunction1(6, _c4, ctx_r2.formatConsentDate(ctx))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.consentPrivacyUrl(r_r9) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.consentTermsUrl(r_r9) ? 5 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_24_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordDetail.empty.consent"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 62)(1, "div", 64)(2, "div", 65)(3, "h2", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_24_Conditional_6_Template, 2, 1, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 67);
    \u0275\u0275template(8, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_24_Conditional_8_Template, 6, 8)(9, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_24_Conditional_9_Template, 3, 3, "p", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const r_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "smartEnrollProjects.recordDetail.section.consent"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_8_0 = ctx_r2.consentAcceptedAt(r_r9)) ? 6 : -1, tmp_8_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_9_0 = ctx_r2.consentAcceptedAt(r_r9)) ? 8 : 9, tmp_9_0);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r9.informationValidation["updatedAt"] || r_r9.informationValidation["createdAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordDetail.empty.information"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt", 106);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 107);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.fieldLabel(row_r12.key), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.value);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 68);
    \u0275\u0275repeaterCreate(1, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_34_For_2_Template, 5, 2, "div", null, _forTrack05);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.informationRows(r_r9));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_35_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "dt", 106);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("sm:col-span-2", ctx_r2.technicalRowFullWidth(row_r13.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.fieldLabel(row_r13.key), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r13.value, " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 65)(2, "div", 51)(3, "h2", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 108);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 67)(10, "dl", 68);
    \u0275\u0275repeaterCreate(11, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_35_For_12_Template, 5, 4, "div", 109, _forTrack05);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "smartEnrollProjects.recordDetail.section.technicalMetadata"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "smartEnrollProjects.recordDetail.section.technicalMetadataHint"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.technicalMetadataRows(r_r9));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_36_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r9.emailValidation["updatedAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_36_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113)(1, "mat-icon", 116);
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartEnrollProjects.recordDetail.validated"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_36_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 114);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 116);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "smartEnrollProjects.recordDetail.collectedNotVerifiedHint"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "smartEnrollProjects.recordDetail.collectedNotVerified"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_36_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 115)(1, "mat-icon", 116);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartEnrollProjects.recordDetail.otpNotCompleted"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 70)(1, "div", 64)(2, "div", 65)(3, "h2", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_36_Conditional_6_Template, 2, 1, "span", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 67)(8, "p", 112);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_36_Case_10_Template, 5, 3, "span", 113)(11, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_36_Case_11_Template, 6, 6, "span", 114)(12, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_36_Case_12_Template, 5, 3, "span", 115);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const r_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "smartEnrollProjects.recordDetail.section.email"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r9.emailValidation && r_r9.emailValidation["updatedAt"] ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (r_r9.emailValidation == null ? null : r_r9.emailValidation.email) || r_r9.email || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx_r2.stepState("email")) === "ok" ? 10 : tmp_10_0 === "info" ? 11 : tmp_10_0 === "warn" ? 12 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_37_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r9.phoneValidation["updatedAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_37_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", r_r9.phoneValidation.countryCode, " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_37_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113)(1, "mat-icon", 116);
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartEnrollProjects.recordDetail.validated"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_37_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 114);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 116);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "smartEnrollProjects.recordDetail.collectedNotVerifiedHint"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "smartEnrollProjects.recordDetail.collectedNotVerified"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_37_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 115)(1, "mat-icon", 116);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartEnrollProjects.recordDetail.otpNotCompleted"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 71)(1, "div", 64)(2, "div", 65)(3, "h2", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_37_Conditional_6_Template, 2, 1, "span", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 67)(8, "p", 112);
    \u0275\u0275template(9, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_37_Conditional_9_Template, 2, 1, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_37_Case_11_Template, 5, 3, "span", 113)(12, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_37_Case_12_Template, 6, 6, "span", 114)(13, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_37_Case_13_Template, 5, 3, "span", 115);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const r_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "smartEnrollProjects.recordDetail.section.phone"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r9.phoneValidation && r_r9.phoneValidation["updatedAt"] ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((r_r9.phoneValidation == null ? null : r_r9.phoneValidation.countryCode) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (r_r9.phoneValidation == null ? null : r_r9.phoneValidation.phone) || r_r9.phone || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_11_0 = ctx_r2.stepState("phone")) === "ok" ? 11 : tmp_11_0 === "info" ? 12 : tmp_11_0 === "warn" ? 13 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const failed_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(failed_r15.updatedAt, true));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 130);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_18_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const failed_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openImagePreview(ctx_r2.trustHttpUrl(failed_r15.frontUrl), "smartEnrollProjects.recordDetail.frontScan"));
    });
    \u0275\u0275element(3, "img", 131);
    \u0275\u0275elementStart(4, "p", 132);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const failed_r15 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "smartEnrollProjects.recordDetail.imagePreview.openImage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.trustHttpUrl(failed_r15.frontUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "smartEnrollProjects.recordDetail.frontScan"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 130);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_18_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const failed_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openImagePreview(ctx_r2.trustHttpUrl(failed_r15.backUrl), "smartEnrollProjects.recordDetail.backScan"));
    });
    \u0275\u0275element(3, "img", 131);
    \u0275\u0275elementStart(4, "p", 132);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const failed_r15 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "smartEnrollProjects.recordDetail.imagePreview.openImage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.trustHttpUrl(failed_r15.backUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "smartEnrollProjects.recordDetail.backScan"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 130);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_18_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const failed_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openImagePreview(ctx_r2.sanitizeBase64(failed_r15.documentFaceBase64), "smartEnrollProjects.recordDetail.documentFace"));
    });
    \u0275\u0275element(3, "img", 131);
    \u0275\u0275elementStart(4, "p", 132);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const failed_r15 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "smartEnrollProjects.recordDetail.imagePreview.openImage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.sanitizeBase64(failed_r15.documentFaceBase64), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "smartEnrollProjects.recordDetail.documentFace"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275template(1, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_18_Conditional_1_Template, 7, 7, "div")(2, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_18_Conditional_2_Template, 7, 7, "div")(3, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_18_Conditional_3_Template, 7, 7, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const failed_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(failed_r15.frontUrl ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(failed_r15.backUrl ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(failed_r15.documentFaceBase64 ? 3 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "p", 134);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 135);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r19 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.fieldLabel(field_r19.key), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(field_r19.value);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275repeaterCreate(1, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_19_For_2_Template, 5, 2, "div", 133, _forTrack05);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const failed_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(failed_r15.fields);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_20_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "p", 134);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 135);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.value);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129)(1, "div", 136)(2, "h3", 137);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 138);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 139);
    \u0275\u0275repeaterCreate(9, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_20_For_10_Template, 5, 2, "div", 133, _forTrack05);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const failed_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.partialOcr"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "smartEnrollProjects.recordDetail.partialOcrHint"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(failed_r15.ocrRows);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 118)(2, "div", 119)(3, "h2", 120);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 121);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 122);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openCaptureRequirements(null));
    });
    \u0275\u0275element(12, "mat-icon", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_13_Template, 2, 1, "span", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 125)(15, "p", 126);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_18_Template, 4, 3, "div", 127)(19, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_19_Template, 3, 0, "div", 128)(20, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Conditional_20_Template, 11, 6, "div", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const failed_r15 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, "smartEnrollProjects.recordDetail.section.documentFailed"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 11, "smartEnrollProjects.recordDetail.attemptNumber", \u0275\u0275pureFunction1(20, _c5, failed_r15.attemptNumber)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 14, "smartEnrollProjects.recordDetail.captureRequirements.tooltip"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 16, "smartEnrollProjects.recordDetail.captureRequirements.tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(failed_r15.updatedAt ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 18, "smartEnrollProjects.recordDetail.documentFailedReason." + failed_r15.reasonKey), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(failed_r15.frontUrl || failed_r15.backUrl || failed_r15.documentFaceBase64 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(failed_r15.fields.length ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(failed_r15.ocrRows.length ? 20 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_For_1_Template, 21, 22, "div", 117, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.failedDocumentAttempts());
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r9.documentValidation["updatedAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 130);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const r_r9 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openImagePreview(ctx_r2.trustHttpUrl(r_r9.documentValidation["url"]), "smartEnrollProjects.recordDetail.frontScan"));
    });
    \u0275\u0275element(3, "img", 131);
    \u0275\u0275elementStart(4, "p", 132);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "smartEnrollProjects.recordDetail.imagePreview.openImage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.trustHttpUrl(r_r9.documentValidation["url"]), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "smartEnrollProjects.recordDetail.frontScan"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 130);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const r_r9 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openImagePreview(ctx_r2.documentFaceSrc(r_r9), "smartEnrollProjects.recordDetail.documentFace"));
    });
    \u0275\u0275element(3, "img", 131);
    \u0275\u0275elementStart(4, "p", 132);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "smartEnrollProjects.recordDetail.imagePreview.openImage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.documentFaceSrc(r_r9), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "smartEnrollProjects.recordDetail.documentFace"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 130);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const r_r9 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openImagePreview(ctx_r2.trustHttpUrl(r_r9.documentValidation["backUrl"]), "smartEnrollProjects.recordDetail.backScan"));
    });
    \u0275\u0275element(3, "img", 131);
    \u0275\u0275elementStart(4, "p", 132);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "smartEnrollProjects.recordDetail.imagePreview.openImage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.trustHttpUrl(r_r9.documentValidation["backUrl"]), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "smartEnrollProjects.recordDetail.backScan"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_10_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 146);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_10_For_2_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.openDocumentTypeDialog());
    });
    \u0275\u0275elementStart(1, "mat-icon", 147);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartEnrollProjects.recordDetail.documentTypeDialog.setType"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "p", 134);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 144)(4, "p", 135);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_10_For_2_Conditional_6_Template, 5, 3, "button", 145);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r25 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.fieldLabel(field_r25.key), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(field_r25.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(field_r25.key === "documentType" && ctx_r2.canSetDocumentType() ? 6 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141);
    \u0275\u0275repeaterCreate(1, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_10_For_2_Template, 7, 3, "div", 133, _forTrack05);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.documentSummaryFields());
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 142)(2, "h3", 148);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 149);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2);
    const l_r26 = r_r9.documentValidation["documentLiveness"];
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "smartEnrollProjects.recordDetail.documentLiveness"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", l_r26.isLive ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200" : "bg-red-100 text-red-900 dark:bg-red-950/50 dark:text-red-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r26.isLive ? \u0275\u0275pipeBind1(7, 5, "smartEnrollProjects.recordDetail.livenessPassed") : \u0275\u0275pipeBind1(8, 7, "smartEnrollProjects.recordDetail.livenessFailed"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_12_For_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 146);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_12_For_7_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.openDocumentTypeDialog());
    });
    \u0275\u0275elementStart(1, "mat-icon", 147);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartEnrollProjects.recordDetail.documentTypeDialog.setType"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_12_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "p", 134);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 144)(4, "p", 135);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_12_For_7_Conditional_6_Template, 5, 3, "button", 145);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r28 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(key_r28);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.ocrData()[key_r28]);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isOcrDocumentTypeField(key_r28) && ctx_r2.canSetDocumentType() ? 6 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "div", 136)(2, "h3", 137);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 139);
    \u0275\u0275repeaterCreate(6, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_12_For_7_Template, 7, 3, "div", 133, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartEnrollProjects.recordDetail.ocr"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.ocrDisplayKeys());
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "h2", 34);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_5_Template, 2, 1, "span", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 140);
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_7_Template, 7, 7, "div")(8, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_8_Template, 7, 7, "div")(9, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_9_Template, 7, 7, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_10_Template, 3, 0, "div", 141)(11, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_11_Template, 9, 9, "div", 142)(12, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Conditional_12_Template, 8, 3, "div", 143);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "smartEnrollProjects.recordDetail.section.document"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r9.documentValidation["updatedAt"] ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r9.documentValidation["url"] ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasDocumentFace(r_r9) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r9.documentValidation["backUrl"] ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentSummaryFields().length ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r9.documentValidation["documentLiveness"] ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.ocrDisplayKeys().length ? 12 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 150);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.empty.documents"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_43_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const usage_r29 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "smartEnrollProjects.recordDetail.livenessAttemptsRemaining", \u0275\u0275pureFunction1(4, _c7, usage_r29.limit - usage_r29.used)), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_43_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollProjects.recordDetail.livenessAttemptsExhausted"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_43_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const usage_r29 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "smartEnrollProjects.recordDetail.livenessQualityCaptures", \u0275\u0275pureFunction1(4, _c8, usage_r29.captures - usage_r29.used)), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 74)(2, "mat-icon", 151);
    \u0275\u0275text(3, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 110)(5, "p", 152);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 153);
    \u0275\u0275template(9, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_43_Conditional_9_Template, 2, 6)(10, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_43_Conditional_10_Template, 2, 3)(11, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_43_Conditional_11_Template, 2, 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const usage_r30 = \u0275\u0275storeLet(\u0275\u0275nextContext(3).livenessAttemptUsage());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 4, "smartEnrollProjects.recordDetail.livenessAttemptsUsed", \u0275\u0275pureFunction2(7, _c6, usage_r30.used, usage_r30.limit)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(usage_r30.used < usage_r30.limit ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(usage_r30.captures > usage_r30.used ? 11 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 157);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fb_r32 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(fb_r32.updatedAt, true));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 165);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const fb_r32 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openImagePreview(ctx_r2.failedBiometricSelfieSrc(fb_r32), "smartEnrollProjects.recordDetail.section.biometricFailed"));
    });
    \u0275\u0275element(2, "img", 166);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fb_r32 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "smartEnrollProjects.recordDetail.imagePreview.openImage"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.failedBiometricSelfieSrc(fb_r32), \u0275\u0275sanitizeUrl);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Conditional_27_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 172);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fb_r32 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordDetail.livenessBand." + fb_r32.scoreBand), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Conditional_27_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173)(1, "span", 168);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 169);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 170);
    \u0275\u0275element(7, "div", 174);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const minLivFailed_r34 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "smartEnrollProjects.recordDetail.livenessMinimum"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", minLivFailed_r34, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", minLivFailed_r34, "%");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 167)(2, "span", 168);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 169);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 170);
    \u0275\u0275element(8, "div", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Conditional_27_Conditional_9_Template, 3, 3, "p", 172)(10, ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Conditional_27_Conditional_10_Template, 8, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fb_r32 = \u0275\u0275nextContext().$implicit;
    const minLivFailed_r34 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "smartEnrollProjects.recordDetail.livenessScore"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", fb_r32.scorePercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", fb_r32.scorePercent, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(fb_r32.scoreBand ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(minLivFailed_r34 != null ? 10 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 75)(2, "div", 154)(3, "div", 119)(4, "h2", 155);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 156);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Template_button_click_7_listener() {
      const fb_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openCaptureRequirements(fb_r32));
    });
    \u0275\u0275element(10, "mat-icon", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Conditional_11_Template, 2, 1, "span", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 158);
    \u0275\u0275template(13, ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Conditional_13_Template, 3, 4, "button", 159);
    \u0275\u0275elementStart(14, "div", 160)(15, "div")(16, "p", 161);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 162);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 163);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Template_button_click_22_listener() {
      const fb_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openCaptureRequirements(fb_r32));
    });
    \u0275\u0275element(23, "mat-icon", 164);
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Conditional_27_Template, 11, 8, "div");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const fb_r32 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275storeLet(ctx_r2.livenessThresholdPercent());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", fb_r32.isQuality ? "border-amber-200/90 dark:border-amber-900/40" : "border-red-200/90 dark:border-red-900/40");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", fb_r32.isQuality ? "border-amber-100 bg-amber-50/50 dark:border-amber-900/30 dark:bg-amber-950/20" : "border-red-100 bg-red-50/50 dark:border-red-900/30 dark:bg-red-950/20");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", fb_r32.isQuality ? "text-amber-900 dark:text-amber-200" : "text-red-900 dark:text-red-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 15, "smartEnrollProjects.recordDetail.section.biometricAttemptFailed", \u0275\u0275pureFunction1(28, _c5, fb_r32.attemptNumber)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", fb_r32.isQuality ? "text-amber-600 hover:bg-amber-100 dark:text-amber-400 dark:hover:bg-amber-900/40" : "text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/40")("matTooltip", \u0275\u0275pipeBind1(8, 18, "smartEnrollProjects.recordDetail.captureRequirements.tooltip"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(9, 20, "smartEnrollProjects.recordDetail.captureRequirements.tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(fb_r32.updatedAt ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(fb_r32.face ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", fb_r32.isQuality ? "text-amber-900 dark:text-amber-200" : "text-red-900 dark:text-red-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 22, ctx_r2.failedBiometricReasonKey(fb_r32)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 24, fb_r32.consumedAttempt ? "smartEnrollProjects.recordDetail.biometricAttemptConsumed" : "smartEnrollProjects.recordDetail.biometricAttemptNotConsumed"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 26, "smartEnrollProjects.recordDetail.captureRequirements.explainLink"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(fb_r32.scorePercent != null ? 27 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_46_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r9.biometricValidation["updatedAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_46_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 175);
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.enrollmentSelfieSrc(r_r9), \u0275\u0275sanitizeUrl);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_46_Conditional_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173)(1, "span", 168);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 169);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 170);
    \u0275\u0275element(7, "div", 174);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const minLiv_r35 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "smartEnrollProjects.recordDetail.livenessMinimum"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", minLiv_r35, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", minLiv_r35, "%");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_46_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 167)(3, "span", 168);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 169);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 170);
    \u0275\u0275element(9, "div", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_46_Conditional_9_Conditional_10_Template, 8, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    const minLiv_r36 = \u0275\u0275storeLet(ctx_r2.livenessMinScorePercent());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "smartEnrollProjects.recordDetail.livenessScore"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.livenessDisplayPercent(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.livenessDisplayPercent(), "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(minLiv_r36 != null ? 10 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "h2", 34);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_46_Conditional_5_Template, 2, 1, "span", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 158);
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_46_Conditional_7_Template, 1, 1, "img", 175);
    \u0275\u0275elementStart(8, "div", 160);
    \u0275\u0275template(9, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_46_Conditional_9_Template, 11, 8, "div");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "smartEnrollProjects.recordDetail.section.biometric"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r9.biometricValidation["updatedAt"] ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasEnrollmentSelfie(r_r9) ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r9.biometricValidation["livenessScore"] != null ? 9 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 150);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.empty.biometrics"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 179);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openDocumentFaceDialog());
    });
    \u0275\u0275elementStart(1, "mat-icon", 180);
    \u0275\u0275text(2, "crop_free");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r2.compareActionLoading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.compareExtractFace"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 179);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.rerunCompare());
    });
    \u0275\u0275elementStart(1, "mat-icon", 180);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r2.compareActionLoading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.compareRerun"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173)(1, "span", 168);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 169);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 170);
    \u0275\u0275element(7, "div", 174);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const minPct_r39 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "smartEnrollProjects.recordDetail.compareMinimum"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", minPct_r39, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", minPct_r39, "%");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "span", 168);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 169);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 170);
    \u0275\u0275element(7, "div", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_10_Conditional_8_Template, 8, 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const minPct_r39 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "smartEnrollProjects.recordDetail.compareScore"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.compareScore(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.compareScore(), "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(minPct_r39 != null ? 8 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 183);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const faceReasonKey_r40 = \u0275\u0275readContextLet(10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, faceReasonKey_r40), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178)(1, "mat-icon", 182);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 110)(4, "p", 152);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(10);
    \u0275\u0275template(11, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_11_Conditional_11_Template, 3, 3, "p", 183);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const cmpStatus_r41 = \u0275\u0275readContextLet(49);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "smartEnrollProjects.recordDetail.compareState." + cmpStatus_r41 + ".title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "smartEnrollProjects.recordDetail.compareState." + cmpStatus_r41 + ".detail"), " ");
    \u0275\u0275advance(2);
    const faceReasonKey_r42 = \u0275\u0275storeLet(\u0275\u0275nextContext(2).documentFaceReasonKey());
    \u0275\u0275advance();
    \u0275\u0275conditional(cmpStatus_r41 === "missingDocumentFace" && faceReasonKey_r42 ? 11 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 64)(2, "div", 65)(3, "h2", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(6);
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_7_Template, 5, 4, "button", 177)(8, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_8_Template, 5, 4, "button", 177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 67);
    \u0275\u0275template(10, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_10_Template, 9, 7)(11, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Conditional_11_Template, 12, 8, "div", 178);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const cmpStatus_r41 = \u0275\u0275readContextLet(49);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275storeLet(ctx_r2.compareMinScorePercent());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "smartEnrollProjects.recordDetail.section.faceCompare"), " ");
    const cmpAction_r43 = ctx_r2.compareAction();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(cmpAction_r43 === "extract" ? 7 : cmpAction_r43 === "rerun" ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(cmpStatus_r41 === "passed" || cmpStatus_r41 === "failed" ? 10 : 11);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 157);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r9.documentValidation["updatedAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const nameDecision_r44 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, nameDecision_r44 === "match" ? "smartEnrollProjects.recordDetail.nameReviewedMatch" : "smartEnrollProjects.recordDetail.nameReviewedMismatch"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollProjects.recordDetail.nameMatchNotPerformed"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const nameSkip_r45 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, nameSkip_r45.key, nameSkip_r45.params), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartEnrollProjects.recordDetail.nameMatchNotPerformedHint"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 193);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 191)(1, "button", 192);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.rerunNameValidation());
    });
    \u0275\u0275template(2, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_24_Conditional_2_Template, 1, 0, "mat-spinner", 193)(3, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_24_Conditional_3_Template, 2, 0, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 194);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_24_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openNameReviewDialog());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "how_to_reg");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.nameActionLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.nameActionLoading() ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "smartEnrollProjects.recordDetail.nameRerun"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.nameActionLoading());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "smartEnrollProjects.recordDetail.nameReview"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275elementStart(2, "div", 184);
    \u0275\u0275element(3, "mat-icon", 185);
    \u0275\u0275elementStart(4, "div", 110)(5, "p", 186);
    \u0275\u0275template(6, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_6_Template, 2, 3)(7, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_7_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 162);
    \u0275\u0275template(9, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_9_Template, 2, 4)(10, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_10_Template, 2, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 187)(12, "div", 188)(13, "p", 189);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 190);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 188)(19, "p", 189);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 190);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Conditional_24_Template, 11, 9, "div", 191);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    const nameSkip_r47 = \u0275\u0275storeLet(ctx_r2.nameVerificationSkip());
    \u0275\u0275advance();
    const nameDecision_r48 = \u0275\u0275storeLet(ctx_r2.manualNameDecision());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", nameDecision_r48 === "match" ? "text-emerald-600 dark:text-emerald-400" : nameDecision_r48 === "mismatch" ? "text-red-600 dark:text-red-400" : "text-stone-400 dark:text-stone-500")("svgIcon", nameDecision_r48 === "match" ? "heroicons_outline:check-circle" : nameDecision_r48 === "mismatch" ? "heroicons_outline:x-circle" : "heroicons_outline:minus-circle");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(nameDecision_r48 ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(nameSkip_r47 ? 9 : 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 11, "smartEnrollProjects.recordDetail.nameFromDocument"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.documentFullName() || "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 13, "smartEnrollProjects.recordDetail.nameFromForm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formFullName() || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canReviewNames() ? 24 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const govName_r49 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "smartEnrollProjects.recordDetail.governmentResponse.checkedAt", \u0275\u0275pureFunction1(4, _c4, govName_r49.validatedAt)), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 208);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "smartEnrollProjects.recordDetail.governmentResponse.normalizedType", \u0275\u0275pureFunction1(4, _c11, r_r9.documentValidation == null ? null : r_r9.documentValidation.documentType)), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 183);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275template(3, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_8_Conditional_3_Template, 3, 6, "span", 208);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const govName_r49 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "smartEnrollProjects.recordDetail.governmentResponse.queriedWith", \u0275\u0275pureFunction2(5, _c10, govName_r49.documentType || "\u2014", govName_r49.documentNumber || "\u2014")), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.governmentLookupTypeDiffers() ? 3 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 209)(1, "dt", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd", 210);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const govName_r49 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.field.firstName"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", govName_r49.firstName, " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 209)(1, "dt", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd", 210);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const govName_r49 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.field.lastName"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", govName_r49.lastName, " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_28_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 209)(1, "dt", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 210);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const extra_r50 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.fieldLabel(extra_r50.key), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", extra_r50.value, " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 207);
    \u0275\u0275template(1, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_28_Conditional_1_Template, 6, 4, "div", 209)(2, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_28_Conditional_2_Template, 6, 4, "div", 209);
    \u0275\u0275repeaterCreate(3, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_28_For_4_Template, 5, 2, "div", 209, _forTrack05);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const govName_r49 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275conditional(govName_r49.firstName ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(govName_r49.lastName ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(govName_r49.extras);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195)(1, "div", 198)(2, "div", 199)(3, "mat-icon", 200);
    \u0275\u0275text(4, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_7_Template, 3, 6, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_8_Template, 4, 8, "p", 183);
    \u0275\u0275elementStart(9, "div", 201)(10, "div", 202)(11, "p", 203);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 204);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 205)(17, "p", 189);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 206);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 205)(23, "p", 189);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 206);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Conditional_28_Template, 5, 2, "dl", 207);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const govName_r49 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 10, "smartEnrollProjects.recordDetail.governmentResponse.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(govName_r49.validatedAt ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(govName_r49.documentNumber || govName_r49.documentType ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 12, "smartEnrollProjects.recordDetail.governmentResponse.registryName"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", govName_r49.fullName || "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 14, "smartEnrollProjects.recordDetail.nameFromDocument"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.documentFullName() || "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 16, "smartEnrollProjects.recordDetail.nameFromForm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formFullName() || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(govName_r49.firstName || govName_r49.lastName || govName_r49.extras.length ? 28 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213)(1, "span", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 214);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const nmDoc_r51 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.firstNameMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmDoc_r51.firstNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213)(1, "span", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 214);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const nmDoc_r51 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.lastNameMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmDoc_r51.lastNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213)(1, "span", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 214);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const nmDoc_r51 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.fullNameMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmDoc_r51.fullNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213)(1, "span", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 215);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const nmDoc_r51 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.field.namesMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", nmDoc_r51.namesMatch ? \u0275\u0275pipeBind1(6, 4, "smartEnrollProjects.recordDetail.boolYes") : \u0275\u0275pipeBind1(7, 6, "smartEnrollProjects.recordDetail.boolNo"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "div", 211);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 212);
    \u0275\u0275template(5, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_3_Conditional_5_Template, 6, 4, "div", 213)(6, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_3_Conditional_6_Template, 6, 4, "div", 213)(7, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_3_Conditional_7_Template, 6, 4, "div", 213)(8, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_3_Conditional_8_Template, 8, 8, "div", 213);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const nmDoc_r51 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "smartEnrollProjects.recordDetail.compareGovernmentId"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.showNameMatchPctRow(nmDoc_r51.firstNameMatchPercentage) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatchPctRow(nmDoc_r51.lastNameMatchPercentage) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatchPctRow(nmDoc_r51.fullNameMatchPercentage) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(nmDoc_r51.namesMatch != null ? 8 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213)(1, "span", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 214);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const nmForm_r52 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.firstNameMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmForm_r52.firstNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213)(1, "span", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 214);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const nmForm_r52 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.lastNameMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmForm_r52.lastNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213)(1, "span", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 214);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const nmForm_r52 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.fullNameMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmForm_r52.fullNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213)(1, "span", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 215);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const nmForm_r52 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.field.namesMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", nmForm_r52.namesMatch ? \u0275\u0275pipeBind1(6, 4, "smartEnrollProjects.recordDetail.boolYes") : \u0275\u0275pipeBind1(7, 6, "smartEnrollProjects.recordDetail.boolNo"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197)(1, "div", 211);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 212);
    \u0275\u0275template(5, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_4_Conditional_5_Template, 6, 4, "div", 213)(6, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_4_Conditional_6_Template, 6, 4, "div", 213)(7, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_4_Conditional_7_Template, 6, 4, "div", 213)(8, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_4_Conditional_8_Template, 8, 8, "div", 213);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const nmForm_r52 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "smartEnrollProjects.recordDetail.compareGovernmentForm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.showNameMatchPctRow(nmForm_r52.firstNameMatchPercentage) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatchPctRow(nmForm_r52.lastNameMatchPercentage) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatchPctRow(nmForm_r52.fullNameMatchPercentage) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(nmForm_r52.namesMatch != null ? 8 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275template(1, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_1_Template, 29, 18, "div", 195);
    \u0275\u0275elementStart(2, "div", 196);
    \u0275\u0275template(3, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_3_Template, 9, 7, "div", 197)(4, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Conditional_4_Template, 9, 7, "div", 197);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const nmDoc_r51 = \u0275\u0275readContextLet(0);
    const nmForm_r52 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext(3);
    const govName_r53 = \u0275\u0275storeLet(ctx_r2.governmentNameResponse());
    \u0275\u0275advance();
    \u0275\u0275conditional(govName_r53 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c9, ctx_r2.showNameMatch() || ctx_r2.nameMatchColumnHasData(nmDoc_r51) && ctx_r2.nameMatchColumnHasData(nmForm_r52)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatch() || ctx_r2.nameMatchColumnHasData(nmDoc_r51) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatch() || ctx_r2.nameMatchColumnHasData(nmForm_r52) ? 4 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275elementStart(2, "div", 69)(3, "div", 65)(4, "h2", 34);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_7_Template, 2, 1, "span", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 67);
    \u0275\u0275template(9, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_9_Template, 25, 15)(10, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Conditional_10_Template, 5, 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275storeLet(ctx_r2.nameMatchColumn(r_r9, "document"));
    \u0275\u0275advance();
    \u0275\u0275storeLet(ctx_r2.nameMatchColumn(r_r9, "information"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "smartEnrollProjects.recordDetail.verifyNames"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((r_r9.documentValidation == null ? null : r_r9.documentValidation["updatedAt"]) ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.nameVerificationPending() ? 9 : 10);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 150);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.empty.compare"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "warning");
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "fact_check");
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "hourglass_empty");
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_77_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reason_r54 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, reason_r54.key, reason_r54.params));
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 86);
    \u0275\u0275repeaterCreate(1, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_77_For_2_Template, 3, 4, "li", null, _forTrack05);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.manualReasons());
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "button", 216);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_78_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openResolveDialog("COMPLETED"));
    });
    \u0275\u0275elementStart(2, "mat-icon", 200);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 217);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_78_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openResolveDialog("COMPLETED_WITHOUT_KYC"));
    });
    \u0275\u0275elementStart(7, "mat-icon", 200);
    \u0275\u0275text(8, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 218);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_78_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r55);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openResolveDialog("FAILED"));
    });
    \u0275\u0275elementStart(12, "mat-icon", 200);
    \u0275\u0275text(13, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "smartEnrollProjects.recordDetail.triage.markCompleted"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "smartEnrollProjects.recordDetail.triage.markCompletedNoKyc"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 7, "smartEnrollProjects.recordDetail.triage.markFailed"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_79_For_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 222);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r56 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r56.note);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_79_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 220)(1, "p", 221);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_79_For_6_Conditional_4_Template, 2, 1, "p", 222);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r56 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "smartEnrollProjects.recordDetail.reviewHistory.rowSummary", \u0275\u0275pureFunction3(5, _c12, row_r56.status, row_r56.reviewer, row_r56.date)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r56.note ? 4 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "p", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 219);
    \u0275\u0275repeaterCreate(5, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_79_For_6_Template, 5, 9, "li", 220, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.reviewHistory.heading"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.manualReviewRows());
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r2.deleteErrorKey()), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 96);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "p", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_6_Template, 2, 2, "span", 36);
    \u0275\u0275elementStart(7, "span", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 53);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openResolveDialog());
    });
    \u0275\u0275elementStart(10, "mat-icon", 54);
    \u0275\u0275text(11, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 55)(15, "aside", 56);
    \u0275\u0275template(16, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_16_Template, 6, 4, "div", 57);
    \u0275\u0275elementStart(17, "p", 58);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "nav", 59);
    \u0275\u0275repeaterCreate(21, ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_22_Template, 6, 13, "button", 60, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 61);
    \u0275\u0275template(24, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_24_Template, 10, 5, "section", 62);
    \u0275\u0275elementStart(25, "section", 63)(26, "div", 64)(27, "div", 65)(28, "h2", 34);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_31_Template, 2, 1, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 67);
    \u0275\u0275template(33, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_33_Template, 3, 3, "p", 52)(34, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_34_Template, 3, 0, "dl", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_35_Template, 13, 6, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_36_Template, 13, 6, "section", 70)(37, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_37_Template, 14, 7, "section", 71);
    \u0275\u0275elementStart(38, "section", 72);
    \u0275\u0275template(39, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_39_Template, 2, 0)(40, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_40_Template, 13, 10, "div", 64)(41, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_41_Template, 4, 3, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "section", 73);
    \u0275\u0275template(43, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_43_Template, 12, 10, "div", 74);
    \u0275\u0275repeaterCreate(44, ProjectRecordDetailComponent_Conditional_75_Conditional_0_For_45_Template, 28, 30, "div", 75, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275template(46, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_46_Template, 10, 6, "div", 64)(47, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_47_Template, 4, 3, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "section", 76);
    \u0275\u0275declareLet(49);
    \u0275\u0275template(50, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_50_Template, 12, 6, "div", 64)(51, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_51_Template, 11, 7, "div", 69)(52, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_52_Template, 4, 3, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "section", 77)(54, "div", 78)(55, "div", 65)(56, "h2", 34);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 79);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 80)(62, "div", 81)(63, "div", 82)(64, "span", 83);
    \u0275\u0275template(65, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_65_Template, 2, 0, "mat-icon")(66, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_66_Template, 2, 0, "mat-icon")(67, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_67_Template, 2, 0, "mat-icon")(68, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_68_Template, 2, 0, "mat-icon")(69, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_69_Template, 2, 0, "mat-icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div")(71, "p", 84);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p", 85);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(77, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_77_Template, 3, 0, "ul", 86)(78, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_78_Template, 16, 9, "div", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(79, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_79_Template, 7, 3, "div", 88);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "section", 89)(81, "div", 78)(82, "div", 65)(83, "div")(84, "h2", 34);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "p", 90);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "div", 91);
    \u0275\u0275element(91, "webhook-events", 46, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "div", 92);
    \u0275\u0275template(94, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_94_Template, 3, 3, "div", 93);
    \u0275\u0275elementStart(95, "div", 94)(96, "button", 95);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_75_Conditional_0_Template_button_click_96_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmDeleteRecord());
    });
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(99, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Conditional_99_Template, 1, 0, "mat-spinner", 96);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r9 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.displayName(r_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9._id);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r9.status ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r9.updatedAt || r_r9.createdAt));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 38, "smartEnrollProjects.recordDetail.overrideStatus"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.hasEnrollmentSelfie(r_r9) ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 40, "smartEnrollProjects.recordDetail.stepsHeading"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.visibleSteps());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.showConsentStep() ? 24 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 42, "smartEnrollProjects.recordDetail.section.information"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r9.informationValidation && (r_r9.informationValidation["updatedAt"] || r_r9.informationValidation["createdAt"]) ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.informationRows(r_r9).length === 0 ? 33 : 34);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.technicalMetadataRows(r_r9).length ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r9.email || r_r9.emailValidation ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r9.phone || r_r9.phoneValidation ? 37 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.failedDocumentAttempts().length ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r9.documentValidation ? 40 : !ctx_r2.failedDocumentAttempts().length ? 41 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.failedBiometricAttempts().length ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.failedBiometricAttempts());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r9.biometricValidation ? 46 : !(r_r9.failedBiometricValidations == null ? null : r_r9.failedBiometricValidations.length) ? 47 : -1);
    \u0275\u0275advance(3);
    const cmpStatus_r57 = \u0275\u0275storeLet(ctx_r2.compareStatus());
    \u0275\u0275advance();
    \u0275\u0275conditional(cmpStatus_r57 !== "notApplicable" ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatchCard() ? 51 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((r_r9.compareFaceVerification == null ? null : r_r9.compareFaceVerification.result == null ? null : r_r9.compareFaceVerification.result.score) == null && !ctx_r2.showNameMatchCard() ? 52 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 45, "smartEnrollProjects.recordDetail.section.verdict"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r9.updatedAt, true));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.verdictPanelClass(r_r9.status));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.verdictIconBadgeClass(r_r9.status));
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r9.status === "COMPLETED" ? 65 : r_r9.status === "COMPLETED_WITHOUT_KYC" ? 66 : r_r9.status === "FAILED" ? 67 : r_r9.status === "NEEDS_MANUAL_VERIFICATION" ? 68 : 69);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(73, 47, ctx_r2.verdictTitleKey(r_r9.status)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 49, ctx_r2.verdictSubtitleKey(r_r9.status)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r9.status === "NEEDS_MANUAL_VERIFICATION" && ctx_r2.manualReasons().length ? 77 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r9.status === "NEEDS_MANUAL_VERIFICATION" ? 78 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.manualReviewRows().length ? 79 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 51, "smartEnrollProjects.recordDetail.section.events"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(89, 53, "smartEnrollProjects.recordDetail.section.eventsHint"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("appRegistrationId", r_r9._id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.deleteErrorKey() ? 94 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.deleteLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(98, 55, "smartEnrollProjects.recordDetail.deleteEnrollment"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.deleteLoading() ? 99 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProjectRecordDetailComponent_Conditional_75_Conditional_0_Template, 100, 57);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.record()) ? 0 : -1, tmp_2_0);
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 225);
  }
  if (rf & 2) {
    const r_r58 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.enrollmentSelfieSrc(r_r58), \u0275\u0275sanitizeUrl);
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fact_r59 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(fact_r59);
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 229);
    \u0275\u0275repeaterCreate(1, ProjectRecordDetailComponent_Conditional_76_Conditional_10_For_2_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r58 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.resumeFacts(r_r58));
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 232);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.projectLogo(), \u0275\u0275sanitizeUrl);
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 233);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r58 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(r_r58.status));
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_19_For_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 244);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordDetail.validated"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_19_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 243)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd")(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_76_Conditional_19_For_6_Conditional_7_Template, 3, 3, "span", 244);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r60 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartEnrollProjects.recordDetail.field." + row_r60.key));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r60.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r60.validated ? 7 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 235)(1, "h2", 237);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dl", 242);
    \u0275\u0275repeaterCreate(5, ProjectRecordDetailComponent_Conditional_76_Conditional_19_For_6_Template, 8, 5, "div", 243, _forTrack05);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r58 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.resume.contact"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.resumeContactRows(r_r58));
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_20_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 243)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r61 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fieldLabel(row_r61.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r61.value);
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 235)(1, "h2", 237);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dl", 242);
    \u0275\u0275repeaterCreate(5, ProjectRecordDetailComponent_Conditional_76_Conditional_20_For_6_Template, 5, 2, "div", 243, _forTrack05);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r58 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.resume.personal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.resumePersonalRows(r_r58));
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure");
    \u0275\u0275element(1, "img", 247);
    \u0275\u0275elementStart(2, "figcaption");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r58 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.documentFrontSrc(r_r58), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.frontScan"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure");
    \u0275\u0275element(1, "img", 247);
    \u0275\u0275elementStart(2, "figcaption");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r58 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.documentFaceSrc(r_r58), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.documentFace"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure");
    \u0275\u0275element(1, "img", 247);
    \u0275\u0275elementStart(2, "figcaption");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r58 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.documentBackSrc(r_r58), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.backScan"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 245);
    \u0275\u0275template(1, ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_4_Conditional_1_Template, 5, 4, "figure")(2, ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_4_Conditional_2_Template, 5, 4, "figure")(3, ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_4_Conditional_3_Template, 5, 4, "figure");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r58 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentFrontSrc(r_r58) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasDocumentFace(r_r58) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentBackSrc(r_r58) ? 3 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 248)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.resume.extractedName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.resumeDocumentFullName());
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 243)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r62 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r62.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r62.value);
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 246);
    \u0275\u0275template(1, ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_5_Conditional_1_Template, 6, 4, "div", 248);
    \u0275\u0275repeaterCreate(2, ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_5_For_3_Template, 5, 2, "div", 243, _forTrack05);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.resumeDocumentFullName() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.resumeDocumentFields());
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 235)(1, "h2", 237);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_4_Template, 4, 3, "div", 245)(5, ProjectRecordDetailComponent_Conditional_76_Conditional_21_Conditional_5_Template, 4, 1, "dl", 246);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r58 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "smartEnrollProjects.recordDetail.resume.identityDocument"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasDocumentScans(r_r58) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.resumeDocumentFields().length ? 5 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_22_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 252)(1, "span", 253);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 254);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 255);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap(ctx_r2.scoreBarVars(ctx_r2.livenessDisplayPercent()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "smartEnrollProjects.recordDetail.livenessScore"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.livenessDisplayPercent(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(8, 8, "smartEnrollProjects.recordDetail.livenessMinimum"), " ", ctx_r2.livenessMinScorePercent(), "% ");
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 252)(1, "span", 253);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 254);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 255);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap(ctx_r2.scoreBarVars(ctx_r2.compareScore()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "smartEnrollProjects.recordDetail.compareScore"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.compareScore(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(8, 8, "smartEnrollProjects.recordDetail.compareMinimum"), " ", ctx_r2.compareMinScorePercent(), "% ");
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_22_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.nameMatchNotPerformed"));
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_22_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const nmDoc_r63 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "smartEnrollProjects.recordDetail.compareGovernmentId"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "smartEnrollProjects.recordDetail.firstNameMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmDoc_r63.firstNameMatchPercentage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "smartEnrollProjects.recordDetail.lastNameMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmDoc_r63.lastNameMatchPercentage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "smartEnrollProjects.recordDetail.fullNameMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmDoc_r63.fullNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_22_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul")(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const nmForm_r64 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "smartEnrollProjects.recordDetail.compareGovernmentForm"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "smartEnrollProjects.recordDetail.firstNameMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmForm_r64.firstNameMatchPercentage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "smartEnrollProjects.recordDetail.lastNameMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmForm_r64.lastNameMatchPercentage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "smartEnrollProjects.recordDetail.fullNameMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmForm_r64.fullNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275elementStart(2, "div", 251);
    \u0275\u0275template(3, ProjectRecordDetailComponent_Conditional_76_Conditional_22_Conditional_7_Conditional_3_Template, 4, 3, "div")(4, ProjectRecordDetailComponent_Conditional_76_Conditional_22_Conditional_7_Conditional_4_Template, 20, 15, "div")(5, ProjectRecordDetailComponent_Conditional_76_Conditional_22_Conditional_7_Conditional_5_Template, 20, 15, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r58 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext();
    const nmDoc_r65 = \u0275\u0275storeLet(ctx_r2.nameMatchColumn(r_r58, "document"));
    \u0275\u0275advance();
    const nmForm_r66 = \u0275\u0275storeLet(ctx_r2.nameMatchColumn(r_r58, "information"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.nameVerificationPending() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.nameMatchColumnHasData(nmDoc_r65) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.nameMatchColumnHasData(nmForm_r66) ? 5 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 235)(1, "h2", 237);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 249);
    \u0275\u0275template(5, ProjectRecordDetailComponent_Conditional_76_Conditional_22_Conditional_5_Template, 9, 10, "div", 250)(6, ProjectRecordDetailComponent_Conditional_76_Conditional_22_Conditional_6_Template, 9, 10, "div", 250);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_76_Conditional_22_Conditional_7_Template, 6, 5, "div", 251);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "smartEnrollProjects.recordDetail.resume.biometrics"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.livenessMinScorePercent() != null ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.compareMinScorePercent() != null ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatchCard() ? 7 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_33_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reason_r67 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, reason_r67.key, reason_r67.params));
  }
}
function ProjectRecordDetailComponent_Conditional_76_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 240);
    \u0275\u0275repeaterCreate(1, ProjectRecordDetailComponent_Conditional_76_Conditional_33_For_2_Template, 3, 4, "li", null, _forTrack05);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.manualReasons());
  }
}
function ProjectRecordDetailComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "section", 223)(2, "header", 224);
    \u0275\u0275template(3, ProjectRecordDetailComponent_Conditional_76_Conditional_3_Template, 1, 1, "img", 225);
    \u0275\u0275elementStart(4, "div", 226)(5, "h1", 227);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 228);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProjectRecordDetailComponent_Conditional_76_Conditional_10_Template, 3, 0, "p", 229);
    \u0275\u0275elementStart(11, "p", 230);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 231);
    \u0275\u0275template(14, ProjectRecordDetailComponent_Conditional_76_Conditional_14_Template, 1, 1, "img", 232)(15, ProjectRecordDetailComponent_Conditional_76_Conditional_15_Template, 2, 1, "span", 233);
    \u0275\u0275elementStart(16, "span", 234);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275template(19, ProjectRecordDetailComponent_Conditional_76_Conditional_19_Template, 7, 3, "section", 235)(20, ProjectRecordDetailComponent_Conditional_76_Conditional_20_Template, 7, 3, "section", 235);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ProjectRecordDetailComponent_Conditional_76_Conditional_21_Template, 6, 5, "section", 235)(22, ProjectRecordDetailComponent_Conditional_76_Conditional_22_Template, 8, 6, "section", 235);
    \u0275\u0275elementStart(23, "section", 236)(24, "h2", 237);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 238);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 239);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, ProjectRecordDetailComponent_Conditional_76_Conditional_33_Template, 3, 0, "ul", 240);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "footer", 241);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r58 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r2.printSectionId);
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r2.brandingVars());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasEnrollmentSelfie(r_r58) ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.displayName(r_r58));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 24, "smartEnrollProjects.recordDetail.resume.tagline"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.resumeFacts(r_r58).length ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r58._id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.projectLogo() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r58.status ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r58.updatedAt || r_r58.createdAt));
    \u0275\u0275advance();
    \u0275\u0275classProp("enrollment-resume__two-col", ctx_r2.resumePersonalRows(r_r58).length)("enrollment-resume__one-col", !ctx_r2.resumePersonalRows(r_r58).length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.resumeContactRows(r_r58).length ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.resumePersonalRows(r_r58).length ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasDocumentScans(r_r58) || ctx_r2.resumeDocumentFields().length ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.livenessMinScorePercent() != null || ctx_r2.compareMinScorePercent() != null || ctx_r2.showNameMatchCard() ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 26, "smartEnrollProjects.recordDetail.resume.verdict"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 28, ctx_r2.verdictTitleKey(r_r58.status)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 30, ctx_r2.verdictSubtitleKey(r_r58.status)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.manualReasons().length ? 33 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(36, 32, "smartEnrollProjects.recordDetail.resume.recordFooter", \u0275\u0275pureFunction2(35, _c13, r_r58._id, ctx_r2.printedOn())), " ");
  }
}
var STEP_ORDER = [
  "consent",
  "information",
  "email",
  "phone",
  "documents",
  "biometrics",
  "compare",
  "verdict",
  "events"
];
var SKIP_INFO_KEYS = /* @__PURE__ */ new Set([
  "_id",
  "__v",
  "criminalData",
  "inputMethod",
  "validationMethod",
  "webhook",
  "type",
  "deleted"
]);
var HIDDEN_INFORMATION_KEYS = /* @__PURE__ */ new Set([
  "appRegistration",
  "client",
  "project",
  "projectFlow",
  "documentValidation",
  "emailValidation",
  "phoneValidation",
  "biometricValidation",
  "informationValidation",
  "status",
  "createdAt",
  "updatedAt",
  "ipAddress",
  "userAgent",
  "deviceId",
  "sessionId",
  "correlationId",
  "requestId",
  "firstNameMatchPercentage",
  "lastNameMatchPercentage",
  "fullNameMatchPercentage",
  "namesMatch"
]);
var NAME_MATCH_SNAPSHOT_KEYS = /* @__PURE__ */ new Set([
  "firstNameMatchPercentage",
  "lastNameMatchPercentage",
  "fullNameMatchPercentage",
  "namesMatch"
]);
var TECHNICAL_METADATA_KEY_ORDER = [
  "status",
  "createdAt",
  "updatedAt",
  "ipAddress",
  "userAgent",
  "client",
  "project",
  "projectFlow",
  "appRegistration",
  "deviceId",
  "sessionId",
  "correlationId",
  "requestId"
];
var RESUME_PERSONAL_EXCLUDE = /* @__PURE__ */ new Set([
  "email",
  "phone",
  "countryCode",
  "fullName",
  "firstName",
  "lastName",
  "middleName",
  "secondName",
  "dateOfBirth",
  "birthDate",
  "gender",
  "sex",
  "nationality",
  "country"
]);
var RESUME_FACT_KEYS = ["dateOfBirth", "birthDate", "gender", "sex", "nationality", "country"];
var RESUME_DOCUMENT_OCR_EXCLUDE = /* @__PURE__ */ new Set([
  "First Name",
  "Last Name",
  "Full Name",
  "First Name MRZ",
  "Last Name MRZ",
  "Middle Name",
  "Second Last Name",
  "Second Last Name MRZ",
  "First Last Name MRZ",
  "Name 1",
  "Name 2",
  "Name 3"
]);
var ProjectRecordDetailComponent = class _ProjectRecordDetailComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._projectsService = inject(SmartEnrollProjectsService);
    this._sanitizer = inject(DomSanitizer);
    this._transloco = inject(TranslocoService);
    this._cdr = inject(ChangeDetectorRef);
    this._dialog = inject(MatDialog);
    this._snackBar = inject(MatSnackBar);
    this._clipboard = inject(Clipboard);
    this._resendForbiddenStatuses = /* @__PURE__ */ new Set(["COMPLETED_WITHOUT_KYC", "COMPLETED", "FAILED"]);
    this.printSectionId = "enrollment-print-section";
    this._sub = null;
    this._observer = null;
    this._fieldLabelCache = /* @__PURE__ */ new Map();
    this.projectId = "";
    this.recordId = "";
    this.loading = signal(true);
    this.errorKey = signal(null);
    this.project = signal(null);
    this.record = signal(null);
    this.ocrDisplayKeys = signal([]);
    this.ocrData = signal({});
    this.activeStep = signal("information");
    this.deleteLoading = signal(false);
    this.deleteErrorKey = signal(null);
    this.exportLoading = signal(false);
    this.devView = signal(false);
    this.nameActionLoading = signal(false);
    this.compareActionLoading = signal(false);
  }
  ngOnInit() {
    this.projectId = this._route.snapshot.paramMap.get("projectId") ?? "";
    this.recordId = this._route.snapshot.paramMap.get("recordId") ?? "";
    if (!this.projectId || !this.recordId) {
      this._router.navigate(["/smart-enroll/projects"]);
      return;
    }
    this._sub = forkJoin({
      project: this._projectsService.getProject(this.projectId),
      record: this._projectsService.getAppRegistration(this.recordId)
    }).subscribe({
      next: ({ project, record }) => {
        if (!record) {
          this.errorKey.set("smartEnrollProjects.recordDetail.loadError");
          this.loading.set(false);
          return;
        }
        const recProject = record.project;
        if (recProject && recProject !== this.projectId) {
          this.errorKey.set("smartEnrollProjects.recordDetail.wrongProject");
          this.loading.set(false);
          return;
        }
        this.project.set(project);
        this.record.set(record);
        this._initOcr(record);
        this.loading.set(false);
        this._cdr.markForCheck();
        queueMicrotask(() => this._setupScrollSpy());
      },
      error: () => {
        this.errorKey.set("smartEnrollProjects.recordDetail.loadError");
        this.loading.set(false);
      }
    });
  }
  ngOnDestroy() {
    this._sub?.unsubscribe();
    this._observer?.disconnect();
  }
  goBack() {
    this._router.navigate(["/smart-enroll/projects", this.projectId, "records"]);
  }
  goProjects() {
    this._router.navigate(["/smart-enroll/projects"]);
  }
  toggleDevView() {
    this.devView.update((v) => !v);
  }
  /**
   * Per-card payloads for the Dev view. The top-level `record` card hides the heavy nested
   * objects that already render in their own cards so the dump stays readable.
   */
  devSections() {
    const r = this.record();
    if (!r)
      return [];
    const nestedKeys = /* @__PURE__ */ new Set([
      "informationValidation",
      "consentSession",
      "emailValidation",
      "phoneValidation",
      "documentValidation",
      "documentFace",
      "failedDocumentValidations",
      "biometricValidation",
      "failedBiometricValidations",
      "face",
      "person",
      "compareFaceVerification",
      "projectFlow"
    ]);
    const rAny = r;
    const recordSummary = {};
    for (const [key, value] of Object.entries(rAny)) {
      if (nestedKeys.has(key))
        continue;
      recordSummary[key] = value;
    }
    const sections = [
      { key: "record", value: recordSummary },
      { key: "informationValidation", value: r.informationValidation ?? null },
      { key: "consentSession", value: r.consentSession ?? null },
      { key: "emailValidation", value: r.emailValidation ?? null },
      { key: "phoneValidation", value: r.phoneValidation ?? null },
      { key: "documentValidation", value: r.documentValidation ?? null },
      { key: "documentFace", value: r.documentFace ?? null },
      { key: "failedDocumentValidations", value: r.failedDocumentValidations ?? [] },
      { key: "biometricValidation", value: r.biometricValidation ?? null },
      { key: "failedBiometricValidations", value: r.failedBiometricValidations ?? [] },
      { key: "face", value: rAny["face"] ?? null },
      { key: "person", value: rAny["person"] ?? null },
      { key: "compareFaceVerification", value: r.compareFaceVerification ?? null },
      { key: "projectFlow", value: r.projectFlow ?? null },
      { key: "project", value: this.project() }
    ];
    return sections.filter((section) => section.value !== null && section.value !== void 0);
  }
  devSectionTitle(key) {
    const tk = `smartEnrollProjects.recordDetail.devView.section.${key}`;
    const translated = this._transloco.translate(tk);
    if (!translated || translated === tk)
      return key;
    return translated;
  }
  copyJson(value) {
    try {
      const text = typeof value === "string" ? value : JSON.stringify(value, null, 2);
      this._clipboard.copy(text);
      this._snackBar.open(this._transloco.translate("smartEnrollProjects.recordDetail.devView.copied"), "OK", { duration: 2e3 });
    } catch {
      this._snackBar.open(this._transloco.translate("smartEnrollProjects.recordDetail.devView.copyError"), "OK", { duration: 2500 });
    }
  }
  devApiHintDisabled(sectionKey, value) {
    if (sectionKey === "failedDocumentValidations" || sectionKey === "failedBiometricValidations") {
      return !Array.isArray(value) || value.length === 0;
    }
    return false;
  }
  openDevApiHint(sectionKey, value) {
    const r = this.record();
    if (!r?._id)
      return;
    const i18n = {
      headers: this._transloco.translate("smartEnrollProjects.recordDetail.devView.apiHintHeadersBlock"),
      populatesExplainer: this._transloco.translate("smartEnrollProjects.recordDetail.devView.apiHintPopulatesExplainer"),
      noDirectCompare: this._transloco.translate("smartEnrollProjects.recordDetail.devView.apiHintCompareNoDirect"),
      compareFallback: this._transloco.translate("smartEnrollProjects.recordDetail.devView.apiHintCompareFallback"),
      emptyList: this._transloco.translate("smartEnrollProjects.recordDetail.devView.apiHintEmptyList"),
      noId: this._transloco.translate("smartEnrollProjects.recordDetail.devView.apiHintNoId"),
      webhookNote: this._transloco.translate("smartEnrollProjects.recordDetail.devView.apiHintWebhookNote"),
      resumeNote: this._transloco.translate("smartEnrollProjects.recordDetail.devView.apiHintResumeNote")
    };
    const body = buildDevApiHintBody(sectionKey, value, {
      recordId: r._id,
      project: this.project(),
      apiBase: environment.apiUrl,
      populates: APP_REGISTRATION_DETAIL_POPULATES,
      i18n,
      moreUrlsLabel: (count) => this._transloco.translate("smartEnrollProjects.recordDetail.devView.apiHintArrayMore", { count })
    });
    const title = this._transloco.translate("smartEnrollProjects.recordDetail.devView.apiHintTitle", {
      section: this.devSectionTitle(sectionKey)
    });
    this._dialog.open(DevApiHintDialogComponent, {
      data: { title, body },
      width: "640px",
      maxWidth: "92vw",
      panelClass: "dev-api-hint-dialog-panel"
    });
  }
  openWebhookEventsApiHint() {
    this.openDevApiHint("webhookEvents", null);
  }
  /**
   * Opens a fullscreen-style dialog to inspect a document or portrait image at higher zoom.
   */
  openImagePreview(imageSrc, titleKey) {
    if (imageSrc === "" || imageSrc == null)
      return;
    const title = titleKey ? this._transloco.translate(titleKey) : void 0;
    this._dialog.open(ImagePreviewDialogComponent, {
      data: { imageSrc, title },
      panelClass: "image-preview-dialog-panel",
      width: "100%",
      maxWidth: "100vw",
      maxHeight: "100vh",
      height: "100%"
    });
  }
  /**
   * Explains the capture rules the engine enforces, highlighting the one a given attempt broke.
   *
   * @param attempt the failed attempt to diagnose, or null for the general reference
   */
  openCaptureRequirements(attempt) {
    const data = {
      reason: attempt?.reasonKey ?? null,
      scorePercent: attempt?.scorePercent ?? null,
      thresholdPercent: this.livenessThresholdPercent()
    };
    this._dialog.open(CaptureRequirementsDialogComponent, {
      data,
      width: "560px",
      maxWidth: "92vw",
      panelClass: "capture-requirements-dialog-panel"
    });
  }
  confirmDeleteRecord() {
    const r = this.record();
    if (!r?._id || this.deleteLoading())
      return;
    this.deleteErrorKey.set(null);
    this._dialog.open(ScanDeleteConfirmDialogComponent, {
      width: "400px",
      data: {
        titleKey: "smartEnrollProjects.recordDetail.deleteEnrollmentTitle",
        messageKey: "smartEnrollProjects.recordDetail.deleteEnrollmentMessage",
        cancelKey: "smartEnrollProjects.recordDetail.deleteEnrollmentCancel",
        confirmKey: "smartEnrollProjects.recordDetail.deleteEnrollmentConfirm"
      }
    }).afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.deleteLoading.set(true);
      this._cdr.markForCheck();
      const isLogin = r.projectFlow?.type === "login";
      const req = isLogin ? this._projectsService.deleteAppLogin(r._id) : this._projectsService.deleteAppRegistration(r._id);
      req.pipe(finalize(() => {
        this.deleteLoading.set(false);
        this._cdr.markForCheck();
      })).subscribe({
        next: () => this._router.navigate(["/smart-enroll/projects", this.projectId, "records"]),
        error: () => {
          this.deleteErrorKey.set("smartEnrollProjects.recordDetail.deleteEnrollmentError");
        }
      });
    });
  }
  canResendLink() {
    const r = this.record();
    if (!r?._id)
      return false;
    if (!r.status)
      return true;
    return !this._resendForbiddenStatuses.has(r.status);
  }
  openResumeHelpDialog() {
    this._dialog.open(EnrollResumeHelpDialogComponent, {
      width: "560px",
      maxWidth: "92vw",
      panelClass: "enroll-resume-help-dialog-panel"
    });
  }
  openResendLinkDialog() {
    const r = this.record();
    if (!r?._id)
      return;
    this._dialog.open(EnrollResendLinkDialogComponent, {
      width: "500px",
      data: { record: r }
    }).afterClosed().subscribe((result) => {
      if (!result?.success)
        return;
      const key = result.emailSent ? "smartEnrollProjects.recordDetail.resendSuccessEmail" : "smartEnrollProjects.recordDetail.resendSuccessCopied";
      this._snackBar.open(this._transloco.translate(key), "OK", { duration: 3e3 });
    });
  }
  /**
   * Opens the resolve/override dialog. `preselected` is set from the primary triage buttons
   * (shown when the record needs manual verification); omitted, it opens as a generic
   * "Override status" correction affordance available regardless of current status.
   */
  openResolveDialog(preselected) {
    const r = this.record();
    if (!r?._id)
      return;
    this._dialog.open(ResolveStatusDialogComponent, {
      width: "520px",
      maxWidth: "92vw",
      maxHeight: "90vh",
      data: { record: r, preselected }
    }).afterClosed().subscribe((result) => {
      if (!result?.success)
        return;
      if (result.record) {
        this.record.set(result.record);
        this._initOcr(result.record);
      }
      this._cdr.markForCheck();
      this._snackBar.open(this._transloco.translate("smartEnrollProjects.recordDetail.resolveDialog.success", {
        status: this.statusLabel(result.status)
      }), "OK", { duration: 4e3 });
      this._eventsPanel?.refresh();
    });
  }
  /** Reviewer-facing display name from a populated (or bare id) client/staff ref. */
  _reviewerDisplayName(entry) {
    const client = entry.reviewedByClient;
    const staff = entry.reviewedByStaff;
    const ref = typeof staff === "object" && staff || typeof client === "object" && client || null;
    if (ref?.name)
      return ref.name;
    if (ref?.email)
      return ref.email;
    return this._transloco.translate("smartEnrollProjects.recordDetail.reviewHistory.unknownReviewer");
  }
  /** Formatted rows for the "Review history" list, most recent first. */
  manualReviewRows() {
    const entries = this.record()?.manualReviewLog ?? [];
    return [...entries].reverse().map((entry) => ({
      status: this.statusLabel(entry.newStatus),
      reviewer: this._reviewerDisplayName(entry),
      date: this.formatDate(entry.createdAt),
      note: entry.note?.trim() || void 0
    }));
  }
  /**
   * Request the backend-rendered CV PDF and download it via a temporary blob URL.
   */
  downloadCv() {
    const r = this.record();
    if (!r?._id || this.exportLoading())
      return;
    this.exportLoading.set(true);
    this._cdr.markForCheck();
    this._projectsService.exportAppRegistrationCV(r._id, this._currentLanguage()).pipe(finalize(() => {
      this.exportLoading.set(false);
      this._cdr.markForCheck();
    })).subscribe({
      next: ({ blob, filename }) => {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = filename;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
        this._snackBar.open(this._transloco.translate("smartEnrollProjects.recordDetail.exportCvSuccess"), "OK", { duration: 3e3 });
      },
      error: () => {
        this._snackBar.open(this._transloco.translate("smartEnrollProjects.recordDetail.exportCvError"), "OK", { duration: 4e3 });
      }
    });
  }
  /**
   * Email the CV PDF to the registration's email (server-side default) or, when missing,
   * notify the user that no recipient is on file.
   */
  emailCv() {
    const r = this.record();
    if (!r?._id || this.exportLoading())
      return;
    const iv = r.informationValidation ?? {};
    const email = typeof iv["email"] === "string" ? iv["email"] : "";
    if (!email) {
      this._snackBar.open(this._transloco.translate("smartEnrollProjects.recordDetail.resendNoEmail"), "OK", { duration: 3e3 });
      return;
    }
    this.exportLoading.set(true);
    this._cdr.markForCheck();
    this._projectsService.emailAppRegistrationCV(r._id, { recipients: [email], language: this._currentLanguage() }).pipe(finalize(() => {
      this.exportLoading.set(false);
      this._cdr.markForCheck();
    })).subscribe({
      next: () => {
        this._snackBar.open(this._transloco.translate("smartEnrollProjects.recordDetail.exportCvEmailSuccess"), "OK", { duration: 3e3 });
      },
      error: () => {
        this._snackBar.open(this._transloco.translate("smartEnrollProjects.recordDetail.exportCvEmailError"), "OK", { duration: 4e3 });
      }
    });
  }
  _currentLanguage() {
    const lang = this._transloco.getActiveLang();
    const supported = /* @__PURE__ */ new Set(["en", "es", "fr", "pt", "ja", "ko", "zh"]);
    return supported.has(lang) ? lang : "en";
  }
  scrollToStep(step) {
    const el = document.getElementById(`step-${step}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  formatDate(iso, short = false) {
    if (!iso)
      return "\u2014";
    const dt = DateTime.fromISO(iso);
    if (!dt.isValid)
      return iso;
    return short ? dt.toFormat("HH:mm") : dt.toFormat("MMM dd, yyyy HH:mm");
  }
  /** Consent card uses DD/MM/YYYY, HH:mm as specified in product spec */
  formatConsentDate(iso) {
    if (!iso)
      return "\u2014";
    const dt = DateTime.fromISO(iso);
    if (!dt.isValid)
      return iso;
    return dt.toFormat("dd/MM/yyyy, HH:mm");
  }
  /** Consent is recorded at app registration creation; prefer stored session, else createdAt. */
  consentAcceptedAt(r) {
    if (!r)
      return null;
    const cs = this.consentSession(r);
    if (cs?.acceptedAt)
      return cs.acceptedAt;
    if (cs?.createdAt)
      return cs.createdAt;
    return r.createdAt ?? null;
  }
  hasConsentProof(r) {
    return this.consentAcceptedAt(r) != null;
  }
  consentSession(r) {
    const cs = r?.consentSession;
    if (!cs || typeof cs !== "object")
      return null;
    return cs;
  }
  hasConsentSession(r) {
    return this.consentSession(r) != null;
  }
  showConsentStep() {
    if (this.hasConsentProof(this.record()))
      return true;
    const p = this.project();
    return !!(p?.privacyUrl || p?.termsAndConditionsUrl);
  }
  visibleSteps() {
    return STEP_ORDER.filter((step) => step !== "consent" || this.showConsentStep());
  }
  consentPrivacyUrl(r) {
    const cs = this.consentSession(r);
    if (cs?.privacyPolicyUrl)
      return cs.privacyPolicyUrl;
    return this.project()?.privacyUrl || "";
  }
  consentTermsUrl(r) {
    const cs = this.consentSession(r);
    if (cs?.termsAndConditionsUrl)
      return cs.termsAndConditionsUrl;
    return this.project()?.termsAndConditionsUrl || "";
  }
  displayName(r) {
    if (!r)
      return "\u2014";
    const iv = r.informationValidation;
    if (!iv)
      return r.email || r.phone || "\u2014";
    const full = iv["fullName"];
    if (typeof full === "string" && full.trim())
      return full;
    const first = iv["firstName"];
    const last = iv["lastName"];
    const parts = [first, last].filter((x) => typeof x === "string" && x.trim());
    return parts.length ? parts.join(" ") : r.email || r.phone || "\u2014";
  }
  informationRows(r) {
    const iv = r?.informationValidation;
    if (!iv)
      return [];
    const rows = [];
    for (const [key, raw] of Object.entries(iv)) {
      if (key.startsWith("$") || key.startsWith("_"))
        continue;
      if (SKIP_INFO_KEYS.has(key) || HIDDEN_INFORMATION_KEYS.has(key))
        continue;
      if (raw == null || raw === "" || typeof raw === "object" || typeof raw === "function")
        continue;
      rows.push({ key, value: this._formatInformationValue(key, raw) });
    }
    return rows.sort((a, b) => a.key.localeCompare(b.key));
  }
  /**
   * IDs, IP, user agent, timestamps, and validation snapshot fields — separate from signup answers.
   */
  technicalMetadataRows(r) {
    if (!r)
      return [];
    const out = [];
    const iv = r.informationValidation;
    const pushScalar = (key, raw) => {
      if (raw == null || raw === "")
        return;
      if (typeof raw === "object")
        return;
      out.push({ key, value: this._formatInformationValue(key, raw) });
    };
    const emitted = /* @__PURE__ */ new Set();
    const tryPushIv = (key) => {
      if (!iv || !Object.prototype.hasOwnProperty.call(iv, key))
        return;
      const raw = iv[key];
      if (raw == null || raw === "" || typeof raw === "object")
        return;
      out.push({ key, value: this._formatInformationValue(key, raw) });
      emitted.add(key);
    };
    if (iv) {
      for (const key of TECHNICAL_METADATA_KEY_ORDER) {
        tryPushIv(key);
      }
      for (const key of Object.keys(iv).sort()) {
        if (emitted.has(key) || SKIP_INFO_KEYS.has(key) || NAME_MATCH_SNAPSHOT_KEYS.has(key) || !HIDDEN_INFORMATION_KEYS.has(key)) {
          continue;
        }
        tryPushIv(key);
      }
    }
    if (r._id) {
      pushScalar("registrationRecordId", r._id);
    }
    if (r.createdAt) {
      pushScalar("recordCreatedAt", r.createdAt);
    }
    if (r.updatedAt) {
      pushScalar("recordUpdatedAt", r.updatedAt);
    }
    if (r.status != null && r.status !== "") {
      const ivStatus = iv && typeof iv["status"] === "string" ? iv["status"] : null;
      if (String(r.status) !== ivStatus) {
        pushScalar("registrationStatus", r.status);
      }
    }
    return out;
  }
  /** Long values that read better full-width in the 2-column grid */
  technicalRowFullWidth(key) {
    return key === "userAgent" || key === "requestId" || key === "correlationId";
  }
  /**
   * Uses Transloco when a key exists; otherwise a readable title from the property name.
   * Signup forms carry customer-defined fields, so misses are normal: the dictionary is read
   * directly instead of via translate() to keep the missing-key handler from logging them.
   */
  fieldLabel(key) {
    const lang = this._transloco.getActiveLang();
    const cacheKey = `${lang}|${key}`;
    const cached = this._fieldLabelCache.get(cacheKey);
    if (cached)
      return cached;
    const dictionary = this._transloco.getTranslation(lang);
    const translated = dictionary?.[`smartEnrollProjects.recordDetail.field.${key}`];
    if (typeof translated === "string" && translated.trim()) {
      this._fieldLabelCache.set(cacheKey, translated);
      return translated;
    }
    return this._humanizeFieldKey(key);
  }
  _humanizeFieldKey(key) {
    let s = key.replace(/_/g, " ");
    s = s.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
    s = s.replace(/([a-zA-Z])([0-9])/g, "$1 $2");
    s = s.replace(/([0-9])([a-zA-Z])/g, "$1 $2");
    s = s.trim();
    if (!s)
      return key;
    return s.replace(/\b\w/g, (ch) => ch.toUpperCase());
  }
  _formatInformationValue(key, raw) {
    if (typeof raw === "boolean") {
      return raw ? this._transloco.translate("smartEnrollProjects.recordDetail.boolYes") : this._transloco.translate("smartEnrollProjects.recordDetail.boolNo");
    }
    const s = String(raw);
    if (/Percentage$/i.test(key) && s !== "" && !Number.isNaN(Number(s))) {
      return `${s}%`;
    }
    const isDateKey = /At$/i.test(key) || key === "dateOfBirth" || key === "birthDate" || key === "documentExpirationDate";
    if (isDateKey) {
      const dt = DateTime.fromISO(s);
      if (dt.isValid)
        return dt.toFormat("MMM dd, yyyy HH:mm");
    }
    return s;
  }
  sanitizeBase64(data) {
    const cleaned = (data || "").replace(/^data:.*;base64,/, "");
    return this._sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${cleaned}`);
  }
  trustHttpUrl(url) {
    if (!url)
      return "";
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
  /**
   * IdentityImage populates use `base64` (client-panel); some paths may expose `url`.
   * Falls back to `biometricValidation.face` when top-level `face` is missing.
   */
  enrollmentSelfieFace(r) {
    return pickEnrollmentFaceMedia(r);
  }
  hasEnrollmentSelfie(r) {
    const f = this.enrollmentSelfieFace(r);
    return !!(f && (f.base64 || f.url));
  }
  enrollmentSelfieSrc(r) {
    const f = this.enrollmentSelfieFace(r);
    if (!f)
      return "";
    if (f.base64)
      return this.sanitizeBase64(f.base64);
    if (f.url)
      return this.trustHttpUrl(f.url);
    return "";
  }
  hasDocumentFace(r) {
    const df = r?.documentFace;
    return !!(df && (df.base64 || df.url));
  }
  documentFaceSrc(r) {
    const df = r?.documentFace;
    if (!df)
      return "";
    if (df.base64)
      return this.sanitizeBase64(df.base64);
    if (df.url)
      return this.trustHttpUrl(df.url);
    return "";
  }
  showNameMatch() {
    return showNameVerificationSection(this.project(), this.record());
  }
  /**
   * Name-match metrics for one source — same split as client-panel
   * (`documentValidation` = gov vs OCR/scan, `informationValidation` = gov vs form).
   */
  nameMatchColumn(r, source) {
    const performed = isNameVerificationPerformed(r);
    if (!performed) {
      return {
        performed: false,
        firstNameMatchPercentage: null,
        lastNameMatchPercentage: null,
        fullNameMatchPercentage: null,
        namesMatch: null
      };
    }
    const obj = source === "document" ? r?.documentValidation : r?.informationValidation;
    const pickNum = (k) => {
      if (!obj || !Object.prototype.hasOwnProperty.call(obj, k))
        return null;
      const x = obj[k];
      if (x === void 0 || x === null || x === "")
        return null;
      const n = Number(x);
      return Number.isFinite(n) ? n : null;
    };
    const pickBool = (k) => {
      if (!obj || !Object.prototype.hasOwnProperty.call(obj, k))
        return null;
      const raw = obj[k];
      if (raw === void 0 || raw === null || raw === "")
        return null;
      if (typeof raw === "boolean")
        return raw;
      if (raw === "true")
        return true;
      if (raw === "false")
        return false;
      return null;
    };
    return {
      performed: true,
      firstNameMatchPercentage: pickNum("firstNameMatchPercentage"),
      lastNameMatchPercentage: pickNum("lastNameMatchPercentage"),
      fullNameMatchPercentage: pickNum("fullNameMatchPercentage"),
      // The backend never writes `namesMatch` on informationValidation, so a stored
      // `false` there would always read as "No" regardless of the percentages.
      namesMatch: source === "document" ? pickBool("namesMatch") : null
    };
  }
  /** True if this source has any name-match field (used to show a sub-column without the flow flag) */
  nameMatchColumnHasData(column) {
    return column.firstNameMatchPercentage != null || column.lastNameMatchPercentage != null || column.fullNameMatchPercentage != null || column.namesMatch != null;
  }
  /** Failed liveness attempts, newest last, with score, decoded reason and captured frame. */
  failedBiometricAttempts() {
    return buildFailedBiometricAttempts(this.record());
  }
  /** Failed document scans with the reason, the detected type and whatever OCR was captured. */
  failedDocumentAttempts() {
    return buildFailedDocumentAttempts(this.record());
  }
  /**
   * Type, category, country and status of the accepted scan. Shown because a reviewer cannot
   * judge a skipped name check or a low match without knowing what the scan decided the
   * document was.
   */
  documentSummaryFields() {
    const docVal = this.record()?.documentValidation;
    if (!docVal)
      return [];
    const fields = [];
    for (const key of ["documentType", "documentCategory", "country", "status", "inputMethod"]) {
      const value = docVal[key];
      if (typeof value === "string" && value.trim())
        fields.push({ key, value: value.trim() });
    }
    return fields;
  }
  /** Translated label for a decoded failure reason. */
  failedBiometricReasonKey(attempt) {
    return `smartEnrollProjects.recordDetail.biometricReason.${attempt.reasonKey}`;
  }
  /**
   * Attempts spent against the flow's limit, so an abandoned record is not mistaken for one
   * that ran out of retries.
   */
  livenessAttemptUsage() {
    return livenessAttemptUsage(this.record());
  }
  /**
   * Configured liveness threshold for the failed-attempt bars. Unlike `livenessMinScorePercent`,
   * this does not require a successful validation on the record — a record with only failed
   * attempts still needs the threshold to explain the rejection.
   */
  livenessThresholdPercent() {
    return scoreToPercent(normalizeUnitScore(resolveLivenessMinScoreUnit(this.record())));
  }
  failedBiometricSelfieSrc(attempt) {
    if (attempt.face?.base64)
      return this.sanitizeBase64(attempt.face.base64);
    if (attempt.face?.url)
      return this.trustHttpUrl(attempt.face.url);
    return "";
  }
  /** True when the name verification has not run, so the card should say so explicitly. */
  nameVerificationPending() {
    return !isNameVerificationPerformed(this.record());
  }
  /** Plain-language skip explanation, with the detected type and country filled in. */
  nameVerificationSkip() {
    return nameVerificationSkip(this.record());
  }
  /** Name as the document scan read it, shown so the manager can judge a skipped check. */
  documentFullName() {
    return recordFullName(this.record(), "document");
  }
  /** Name as the person typed it into the sign-up form. */
  formFullName() {
    return recordFullName(this.record(), "form");
  }
  /** Reviewer verdict when the names were confirmed or rejected by hand. */
  manualNameDecision() {
    return manualNameReviewDecision(this.record());
  }
  /** What the government registry answered, shown so the percentages below can be read in context. */
  governmentNameResponse() {
    return governmentNameResponse(this.record());
  }
  /**
   * The registry resolves a normalized type (Panama `PA_CRP` is queried as `CCPA`), so it is
   * only worth calling out when it differs from what the scan reported.
   */
  governmentLookupTypeDiffers() {
    const resolved = this.governmentNameResponse()?.documentType;
    if (!resolved)
      return false;
    const docVal = this.record()?.documentValidation;
    return !!docVal?.documentType && docVal.documentType !== resolved;
  }
  /** The linked document validation, which the name actions operate on. */
  _documentValidationId() {
    const docVal = this.record()?.documentValidation;
    return docVal?._id ?? null;
  }
  /** True when there is a document to re-check or review names on. */
  canReviewNames() {
    return !!this._documentValidationId();
  }
  /** True when the scan stored an unknown type the reviewer can set from the catalog. */
  canSetDocumentType() {
    return this.canReviewNames() && isDocumentTypeUndetected(this.record());
  }
  /** The extracted-data tile for the scan's type, after `cleanOcrExtraction` spaces the key. */
  isOcrDocumentTypeField(key) {
    return key === "Document Type" || key === "documentType";
  }
  /** Open the catalog picker so the reviewer can set a type without running the name lookup. */
  openDocumentTypeDialog() {
    const documentValidationId = this._documentValidationId();
    if (!documentValidationId)
      return;
    const docVal = this.record()?.documentValidation;
    const data = {
      documentValidationId,
      country: docVal?.country ?? null
    };
    this._dialog.open(DocumentTypeDialogComponent, {
      width: "560px",
      maxWidth: "92vw",
      maxHeight: "90vh",
      data
    }).afterClosed().subscribe((result) => {
      if (!result?.success)
        return;
      this._refreshRecordAfterNameAction("documentTypeDialog.success");
    });
  }
  /**
   * Re-run the government name lookup. Useful after a routing fix, since records scored under
   * older routing keep their skip until someone asks for a fresh lookup.
   */
  rerunNameValidation() {
    const documentValidationId = this._documentValidationId();
    if (!documentValidationId || this.nameActionLoading())
      return;
    this.nameActionLoading.set(true);
    this._cdr.markForCheck();
    this._projectsService.rerunNameValidation(documentValidationId).pipe(finalize(() => {
      this.nameActionLoading.set(false);
      this._cdr.markForCheck();
    })).subscribe({
      next: () => this._refreshRecordAfterNameAction("nameRerunSuccess"),
      error: (error) => {
        const message = error?.error?.message ?? this._transloco.translate("smartEnrollProjects.recordDetail.nameRerunError");
        this._snackBar.open(message, "OK", { duration: 5e3 });
      }
    });
  }
  /** State of the selfie/document compare, so the card can say why there is no score. */
  compareStatus() {
    return resolveCompareStatus(this.record());
  }
  /** True when re-running the compare could still change the outcome. */
  canRerunCompare() {
    return canRerunCompare(this.record());
  }
  /** Explains a missing document portrait when the scan recorded why it has none. */
  documentFaceReasonKey() {
    return documentFaceReasonKey(this.record());
  }
  /**
   * Which action the compare card offers: a plain re-run when the record already holds a
   * document portrait, or cropping one out of the scan first when it does not.
   */
  compareAction() {
    if (!this.canRerunCompare())
      return null;
    return this.compareStatus() === "missingDocumentFace" ? "extract" : "rerun";
  }
  /**
   * Crop the portrait out of the stored scan and re-run the compare with it. This is the path
   * for a record whose onboarding client never sent one, which leaves the compare with nothing
   * to compare the selfie against.
   */
  openDocumentFaceDialog() {
    const record = this.record();
    if (!this.recordId || !record)
      return;
    const documentValidation = record.documentValidation;
    const data = {
      appRegistrationId: this.recordId,
      frontUrl: documentValidation?.url ?? null,
      backUrl: documentValidation?.backUrl ?? null
    };
    this._dialog.open(DocumentFaceDialogComponent, {
      width: "560px",
      maxWidth: "92vw",
      maxHeight: "90vh",
      data
    }).afterClosed().subscribe((result) => {
      if (!result?.success)
        return;
      this._refreshRecordAfterNameAction("compareRerunSuccess");
    });
  }
  /**
   * Re-run the selfie/document compare against the portrait already on the record, for a compare
   * that failed or never ran.
   */
  rerunCompare() {
    if (!this.recordId || this.compareActionLoading())
      return;
    this.compareActionLoading.set(true);
    this._cdr.markForCheck();
    this._projectsService.rerunCompare(this.recordId).pipe(finalize(() => {
      this.compareActionLoading.set(false);
      this._cdr.markForCheck();
    })).subscribe({
      next: () => this._refreshRecordAfterNameAction("compareRerunSuccess"),
      error: (error) => {
        const message = error?.error?.message ?? this._transloco.translate("smartEnrollProjects.recordDetail.compareRerunError");
        this._snackBar.open(message, "OK", { duration: 5e3 });
      }
    });
  }
  /** Open the confirm / reject names dialog, pre-filled with both name sources. */
  openNameReviewDialog(preselected) {
    const documentValidationId = this._documentValidationId();
    if (!documentValidationId)
      return;
    const docVal = this.record()?.documentValidation;
    const skip = this.nameVerificationSkip();
    const data = {
      documentValidationId,
      documentName: this.documentFullName(),
      formName: this.formFullName(),
      documentType: docVal?.documentType ?? null,
      country: docVal?.country ?? null,
      skipReason: skip ? this._transloco.translate(skip.key, skip.params) : null,
      preselected
    };
    this._dialog.open(NameReviewDialogComponent, {
      width: "560px",
      maxWidth: "92vw",
      maxHeight: "90vh",
      data
    }).afterClosed().subscribe((result) => {
      if (!result?.success)
        return;
      this._refreshRecordAfterNameAction("nameReviewDialog.success");
    });
  }
  /**
   * Reload the record so the name card reflects the new verdict or score.
   * @param successKey translation key (relative to `smartEnrollProjects.recordDetail`) for the toast
   */
  _refreshRecordAfterNameAction(successKey) {
    this._snackBar.open(this._transloco.translate(`smartEnrollProjects.recordDetail.${successKey}`), "OK", { duration: 4e3 });
    this._projectsService.getAppRegistration(this.recordId).subscribe({
      next: (record) => {
        if (!record)
          return;
        this.record.set(record);
        this._initOcr(record);
        this._cdr.markForCheck();
      }
    });
  }
  /** When the flow enables name verification, show full grid (client-panel); else only if a column has data */
  showNameMatchPctRow(value) {
    return value != null || this.showNameMatch();
  }
  /** Percent label: value, em dash when flow expects row but value missing, empty when no row */
  formatNameMatchPercent(value) {
    if (value != null && Number.isFinite(value))
      return `${value}%`;
    return this.showNameMatch() ? "\u2014" : "";
  }
  /** Name match card: flow flag (client-panel) or snapshot on either column */
  showNameMatchCard() {
    if (this.showNameMatch())
      return true;
    const r = this.record();
    const docCol = this.nameMatchColumn(r, "document");
    const formCol = this.nameMatchColumn(r, "information");
    return this.nameMatchColumnHasData(docCol) || this.nameMatchColumnHasData(formCol);
  }
  manualReasons() {
    return buildManualVerificationReasons(this.record());
  }
  stepIcon(step) {
    if (step === "events")
      return "bolt";
    const s = this.stepState(step);
    if (s === "ok")
      return "check_circle";
    if (s === "error")
      return "error";
    if (s === "warn")
      return "warning";
    if (s === "info")
      return "info";
    return "radio_button_unchecked";
  }
  stepState(step) {
    const r = this.record();
    if (!r)
      return "pending";
    switch (step) {
      case "consent":
        return this.hasConsentProof(r) ? "ok" : "pending";
      case "information":
        return r.informationValidation ? "ok" : "pending";
      case "email":
        return resolveOtpStepState(r, "email");
      case "phone":
        return resolveOtpStepState(r, "phone");
      case "documents": {
        const failed = r.failedDocumentValidations?.length ?? 0;
        if (failed > 0)
          return "error";
        return r.documentValidation ? "ok" : "pending";
      }
      case "biometrics": {
        const failedB = r.failedBiometricValidations?.length ?? 0;
        if (failedB > 0)
          return "error";
        if (!r.biometricValidation)
          return "pending";
        return this.hasEnrollmentSelfie(r) ? "ok" : "warn";
      }
      case "compare": {
        switch (resolveCompareStatus(r)) {
          case "passed":
            return "ok";
          case "failed":
            return "error";
          case "notRun":
          case "missingDocumentFace":
            return "warn";
          default:
            return "pending";
        }
      }
      case "verdict": {
        const st = r.status || "";
        if (st === "FAILED")
          return "error";
        if (st === "NEEDS_MANUAL_VERIFICATION")
          return "warn";
        if (st === "COMPLETED" || st === "COMPLETED_WITHOUT_KYC")
          return "ok";
        return "pending";
      }
      default:
        return "pending";
    }
  }
  /** Human-readable label for a raw AppRegistration status enum value. */
  statusLabel(status) {
    if (!status)
      return "\u2014";
    const tk = `smartEnrollProjects.recordDetail.statusLabel.${status}`;
    const translated = this._transloco.translate(tk);
    if (!translated || translated === tk)
      return this._humanizeFieldKey(status);
    return translated;
  }
  statusPillClass(status) {
    switch (status) {
      case "COMPLETED":
        return "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200";
      case "COMPLETED_WITHOUT_KYC":
        return "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200";
      case "FAILED":
        return "bg-red-100 text-red-900 dark:bg-red-950/50 dark:text-red-200";
      case "NEEDS_MANUAL_VERIFICATION":
        return "bg-orange-100 text-orange-900 dark:bg-orange-950/50 dark:text-orange-200";
      default:
        return "bg-stone-200 text-stone-800 dark:bg-gray-800 dark:text-stone-200";
    }
  }
  verdictTitleKey(status) {
    const base = "smartEnrollProjects.recordDetail.verdict.";
    switch (status) {
      case "COMPLETED":
        return `${base}completedTitle`;
      case "COMPLETED_WITHOUT_KYC":
        return `${base}completedNoKycTitle`;
      case "FAILED":
        return `${base}failedTitle`;
      case "NEEDS_MANUAL_VERIFICATION":
        return `${base}manualTitle`;
      default:
        return `${base}inProgressTitle`;
    }
  }
  verdictSubtitleKey(status) {
    const base = "smartEnrollProjects.recordDetail.verdict.";
    switch (status) {
      case "COMPLETED":
        return `${base}completedSubtitle`;
      case "COMPLETED_WITHOUT_KYC":
        return `${base}completedNoKycSubtitle`;
      case "FAILED":
        return `${base}failedSubtitle`;
      case "NEEDS_MANUAL_VERIFICATION":
        return `${base}manualSubtitle`;
      default:
        return `${base}inProgressSubtitle`;
    }
  }
  /**
   * Verdict card surface — a neutral white card with a thin hairline border for every status.
   * Color is reserved for the icon badge only (see `verdictIconBadgeClass`), avoiding a
   * full tinted-background panel.
   */
  verdictPanelClass(status) {
    switch (status) {
      case "FAILED":
        return "verdict-card--error";
      default:
        return "verdict-card--neutral";
    }
  }
  /** Small colored circle behind the verdict icon — the only spot of status color on the card. */
  verdictIconBadgeClass(status) {
    switch (status) {
      case "COMPLETED":
        return "verdict-icon-badge--ok";
      case "COMPLETED_WITHOUT_KYC":
        return "verdict-icon-badge--warn";
      case "FAILED":
        return "verdict-icon-badge--error";
      case "NEEDS_MANUAL_VERIFICATION":
        return "verdict-icon-badge--manual";
      default:
        return "verdict-icon-badge--pending";
    }
  }
  resumeContactRows(r) {
    if (!r)
      return [];
    const rows = [];
    const iv = r.informationValidation;
    const email = r.email ?? (iv && typeof iv["email"] === "string" ? iv["email"] : void 0) ?? r.emailValidation?.email;
    if (email) {
      rows.push({
        key: "email",
        value: email,
        validated: r.emailValidation?.status === "validated"
      });
    }
    const pv = r.phoneValidation;
    const rawPhone = r.phone ?? (iv && typeof iv["phone"] === "string" ? iv["phone"] : void 0) ?? pv?.phone;
    if (rawPhone) {
      const cc = pv?.countryCode ?? (iv && typeof iv["countryCode"] === "string" ? iv["countryCode"] : "");
      const prettyPhone = cc ? `${cc} ${rawPhone}` : rawPhone;
      rows.push({
        key: "phone",
        value: prettyPhone,
        validated: pv?.status === "validated"
      });
    }
    return rows;
  }
  resumePersonalRows(r) {
    return this.informationRows(r).filter((row) => !RESUME_PERSONAL_EXCLUDE.has(row.key));
  }
  /**
   * Up to three concise identity facts shown under the name (DOB, gender, nationality...).
   * Drawn from `informationValidation`, formatted using the same helpers as the rest of the resume.
   */
  resumeFacts(r) {
    const iv = r?.informationValidation;
    if (!iv)
      return [];
    const facts = [];
    for (const key of RESUME_FACT_KEYS) {
      if (facts.length >= 3)
        break;
      const raw = iv[key];
      if (raw == null || raw === "" || typeof raw === "object")
        continue;
      const formatted = this._formatInformationValue(key, raw);
      if (!formatted)
        continue;
      if (key === "dateOfBirth" || key === "birthDate") {
        facts.push(`DOB ${formatted.split(" ")[0]}`);
      } else {
        facts.push(formatted);
      }
    }
    return facts;
  }
  /**
   * All OCR display keys (the same `cleanOcrExtraction` order the live UI uses), minus the
   * name-related fields that are already shown above as the extracted name.
   */
  resumeDocumentFields() {
    const ocr = this.ocrData();
    const keys = this.ocrDisplayKeys();
    if (!ocr || keys.length === 0)
      return [];
    const rows = [];
    for (const key of keys) {
      if (RESUME_DOCUMENT_OCR_EXCLUDE.has(key))
        continue;
      const raw = ocr[key];
      if (raw == null || raw === "")
        continue;
      rows.push({ key, value: String(raw) });
    }
    return rows;
  }
  resumeDocumentFullName() {
    const ocr = this.ocrData();
    if (!ocr)
      return "";
    const first = typeof ocr["First Name"] === "string" ? ocr["First Name"] : "";
    const last = typeof ocr["Last Name"] === "string" ? ocr["Last Name"] : "";
    const combined = `${first} ${last}`.trim();
    if (combined)
      return combined;
    const full = typeof ocr["Full Name"] === "string" ? ocr["Full Name"] : "";
    return full;
  }
  documentFrontSrc(r) {
    const dv = r?.documentValidation;
    return dv?.url ? this.trustHttpUrl(dv.url) : "";
  }
  documentBackSrc(r) {
    const dv = r?.documentValidation;
    return dv?.backUrl ? this.trustHttpUrl(dv.backUrl) : "";
  }
  hasDocumentScans(r) {
    const dv = r?.documentValidation;
    return !!(dv?.url || dv?.backUrl) || this.hasDocumentFace(r);
  }
  printedOn() {
    return DateTime.now().toFormat("MMM dd, yyyy HH:mm");
  }
  /**
   * CSS variables driven by `project.branding`. Falls back to neutral defaults if a token is missing
   * or the color string is invalid. Returned as a Record so Angular's `[style]` binding applies it.
   */
  brandingVars() {
    const project = this.project();
    const branding = project?.branding ?? {};
    const out = {};
    const safeColor = (value) => {
      if (!value || typeof value !== "string")
        return null;
      const trimmed = value.trim();
      if (!trimmed || /[<>"']/.test(trimmed))
        return null;
      return trimmed;
    };
    const primary = safeColor(branding.bgColor) || safeColor(branding.titleColor);
    if (primary)
      out["--resume-primary"] = primary;
    const ink = safeColor(branding.titleColor);
    if (ink)
      out["--resume-ink"] = ink;
    return out;
  }
  /**
   * CSS custom property for the resume score bar fill (`--v` is 0–100).
   * Prefer a Record `[style]` binding over `[style.--v]` for broader template compiler compatibility.
   */
  scoreBarVars(percent) {
    const v = Number.isFinite(percent) ? Math.max(0, Math.min(100, percent)) : 0;
    return { "--v": String(v) };
  }
  /**
   * Logo URL or data-uri suitable for an `<img src>`. Returns empty string when absent.
   */
  projectLogo() {
    const project = this.project();
    const logo = project?.branding?.logo;
    if (!logo || typeof logo !== "string")
      return "";
    const trimmed = logo.trim();
    if (!trimmed)
      return "";
    if (trimmed.startsWith("http") || trimmed.startsWith("data:"))
      return trimmed;
    return `data:image/png;base64,${trimmed.replace(/^data:.*;base64,/, "")}`;
  }
  compareScore() {
    const r = this.record();
    const score = r?.compareFaceVerification?.result?.score;
    return scoreToPercent(normalizeUnitScore(score));
  }
  compareMinScorePercent() {
    return compareMinScoreDisplayPercent(this.record());
  }
  livenessDisplayPercent() {
    const r = this.record();
    const fromPerson = r?.person?.livenessScore;
    const fromBio = r?.biometricValidation?.livenessScore;
    const v = fromPerson ?? fromBio;
    return v != null ? scoreToPercent(normalizeUnitScore(v)) : 0;
  }
  livenessMinScorePercent() {
    return livenessMinScoreDisplayPercent(this.record());
  }
  _initOcr(r) {
    const dv = r.documentValidation;
    const raw = dv?.OCRExtraction;
    if (!raw || typeof raw !== "object") {
      this.ocrData.set({});
      this.ocrDisplayKeys.set([]);
      return;
    }
    const copy = __spreadValues({}, raw);
    const keys = cleanOcrExtraction(copy);
    this.ocrData.set(copy);
    this.ocrDisplayKeys.set(keys);
  }
  _setupScrollSpy() {
    this._observer?.disconnect();
    this._observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const id = visible[0]?.target?.id;
      if (!id?.startsWith("step-"))
        return;
      const step = id.replace("step-", "");
      if (STEP_ORDER.includes(step)) {
        this.activeStep.set(step);
        this._cdr.markForCheck();
      }
    }, { root: null, rootMargin: "-12% 0px -60% 0px", threshold: [0, 0.1, 0.25, 0.5, 1] });
    STEP_ORDER.filter((step) => step !== "consent" || this.showConsentStep()).forEach((step) => {
      const el = document.getElementById(`step-${step}`);
      if (el)
        this._observer?.observe(el);
    });
  }
  static {
    this.\u0275fac = function ProjectRecordDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectRecordDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectRecordDetailComponent, selectors: [["project-record-detail"]], viewQuery: function ProjectRecordDetailComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._eventsPanel = _t.first);
      }
    }, decls: 77, vars: 60, consts: [["exportMenu", "matMenu"], ["eventsPanel", ""], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "max-w-6xl"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "icon-size-4", "mx-2", "text-stone-400", 3, "svgIcon"], ["routerLink", "/smart-enroll/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300", 3, "routerLink"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "mt-5", "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0", "pt-0.5"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "no-print", "flex", "flex-wrap", "items-center", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", 3, "matMenuTriggerFor", "disabled"], ["diameter", "16"], ["mat-menu-item", "", "type", "button", 3, "click"], ["mat-menu-item", "", "type", "button", "ngxPrint", "", 3, "printSectionId", "useExistingCss", "printTitle"], [1, "flex", "items-center"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-6xl"], [1, "flex", "justify-center", "py-20"], [1, "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "print-only", 3, "id"], ["mat-icon-button", "", "type", "button", 1, "!text-stone-500", "dark:!text-stone-400", 3, "click", "matTooltip"], ["diameter", "40"], [1, "dev-view"], [1, "dev-view__header"], [1, "dev-view__title-block"], [1, "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-1", "font-mono", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "inline-flex", "items-center", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "dev-view__resume-callout"], [1, "dev-view__resume-callout-text"], ["mat-icon-button", "", "type", "button", 1, "dev-view__resume-help", 3, "click", "matTooltip"], [1, "dev-view__card"], [1, "dev-view__card-header"], [1, "dev-view__card-title"], [1, "dev-view__card-actions"], ["type", "button", "mat-icon-button", "", 1, "dev-view__api", 3, "click", "title"], [1, "dev-view__webhook-events"], [3, "appRegistrationId"], ["type", "button", "mat-icon-button", "", 1, "dev-view__api", 3, "click", "disabled", "title"], ["type", "button", "mat-icon-button", "", 1, "dev-view__copy", 3, "click", "title"], [1, "dev-json"], [1, "record-detail-meta", "mb-8"], [1, "min-w-0", "flex-1"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], ["mat-stroked-button", "", "type", "button", 1, "no-print", "!rounded-xl", 3, "click"], [1, "icon-size-4"], [1, "lg:grid", "lg:grid-cols-12", "lg:gap-10"], [1, "mb-8", "lg:sticky", "lg:top-24", "lg:col-span-3", "lg:mb-0", "lg:self-start"], [1, "mb-6", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-700", "dark:bg-gray-900/50"], [1, "mb-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-1"], ["type", "button", 1, "record-stepper-btn", 3, "record-stepper-btn--active"], [1, "space-y-8", "lg:col-span-9"], ["id", "step-consent", 1, "scroll-mt-28"], ["id", "step-information", 1, "scroll-mt-28"], [1, "record-detail-panel"], [1, "record-detail-panel__header"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "p-5", "md:p-6"], [1, "grid", "gap-4", "sm:grid-cols-2"], [1, "record-detail-panel", "mt-6"], ["id", "step-email", 1, "scroll-mt-28"], ["id", "step-phone", 1, "scroll-mt-28"], ["id", "step-documents", 1, "scroll-mt-28"], ["id", "step-biometrics", 1, "scroll-mt-28"], [1, "mb-6", "flex", "items-start", "gap-3", "rounded-xl", "border", "border-stone-200", "bg-stone-50/90", "p-4", "dark:border-gray-800", "dark:bg-gray-800/40"], [1, "record-detail-panel", "mb-6", 3, "ngClass"], ["id", "step-compare", 1, "scroll-mt-28"], ["id", "step-verdict", 1, "scroll-mt-28"], [1, "record-detail-panel", "overflow-hidden"], [1, "text-xs", "text-stone-500"], [1, "p-6", "md:p-8"], [1, "verdict-card", 3, "ngClass"], [1, "flex", "flex-col", "items-center", "gap-4", "text-center"], [1, "verdict-icon-badge", 3, "ngClass"], [1, "text-xl", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-2", "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "verdict-reasons"], [1, "no-print", "mt-2", "flex", "w-full", "max-w-lg", "flex-col", "gap-2", "sm:flex-row"], [1, "mt-6", "border-t", "border-stone-200/70", "pt-5", "dark:border-gray-800"], ["id", "step-events", 1, "scroll-mt-28"], [1, "mt-0.5", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "no-print", "p-4", "md:p-6"], [1, "no-print", "flex", "flex-col", "gap-3", "border-t", "border-stone-200/90", "pt-8", "dark:border-gray-800"], [1, "rounded-xl", "border", "border-red-200/90", "bg-red-50/90", "px-4", "py-3", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["mat-stroked-button", "", "type", "button", "color", "warn", 1, "rounded-xl", 3, "click", "disabled"], ["diameter", "24"], [1, "aspect-[3/4]", "w-full", "overflow-hidden", "bg-stone-100", "dark:bg-gray-800"], ["alt", "", "loading", "lazy", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "border-t", "border-stone-100", "px-3", "py-2.5", "text-center", "text-xs", "font-medium", "text-stone-600", "dark:border-gray-800", "dark:text-stone-400"], ["type", "button", 1, "record-stepper-btn", 3, "click"], [1, "icon-size-5", "shrink-0", 3, "ngClass"], [1, "text-sm", "font-medium", "text-stone-800", "dark:text-stone-200"], [1, "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "mt-4", "flex", "flex-wrap", "gap-x-6", "gap-y-2"], ["target", "_blank", "rel", "noopener noreferrer", 1, "inline-flex", "items-center", "gap-1.5", "text-sm", "font-medium", "text-indigo-600", "underline-offset-4", "hover:underline", "dark:text-indigo-400", 3, "href"], [1, "text-xs", "font-medium", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "text-sm", "font-medium", "text-stone-900", "dark:text-stone-100"], [1, "mt-1.5", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "min-w-0", 3, "sm:col-span-2"], [1, "min-w-0"], [1, "mt-1", "break-words", "text-sm", "font-medium", "leading-relaxed", "text-stone-900", "dark:text-stone-100"], [1, "text-sm", "text-stone-900", "dark:text-white"], [1, "mt-2", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-emerald-100", "px-2.5", "py-0.5", "text-xs", "font-medium", "text-emerald-900", "dark:bg-emerald-950/50", "dark:text-emerald-200"], [1, "mt-2", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-stone-100", "px-2.5", "py-0.5", "text-xs", "font-medium", "text-stone-700", "dark:bg-gray-800", "dark:text-stone-300", 3, "matTooltip"], [1, "mt-2", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-amber-100", "px-2.5", "py-0.5", "text-xs", "font-medium", "text-amber-900", "dark:bg-amber-950/50", "dark:text-amber-200"], [1, "icon-size-3.5"], [1, "record-detail-panel", "mb-6", "border-red-200/90", "dark:border-red-900/40"], [1, "record-detail-panel__header", "border-red-100", "bg-red-50/50", "dark:border-red-900/30", "dark:bg-red-950/20"], [1, "flex", "min-w-0", "items-center", "gap-1.5"], [1, "text-lg", "font-semibold", "text-red-900", "dark:text-red-200"], [1, "shrink-0", "text-xs", "font-medium", "text-red-700/80", "dark:text-red-300/80"], ["type", "button", 1, "shrink-0", "rounded-full", "p-0.5", "text-red-600", "transition-colors", "hover:bg-red-100", "dark:text-red-400", "dark:hover:bg-red-900/40", 3, "click", "matTooltip"], ["svgIcon", "heroicons_outline:exclamation-circle", 1, "icon-size-5"], [1, "text-xs", "text-red-700/80"], [1, "border-b", "border-red-100", "px-5", "py-4", "dark:border-red-900/40", "md:px-6"], [1, "text-sm", "font-medium", "text-red-900", "dark:text-red-200"], [1, "grid", "gap-4", "p-5", "sm:grid-cols-2", "md:p-6"], [1, "grid", "gap-3", "border-t", "border-red-100", "px-5", "py-4", "dark:border-red-900/40", "md:grid-cols-2", "md:px-6"], [1, "border-t", "border-red-100", "dark:border-red-900/40"], ["type", "button", 1, "record-doc-thumb", "block", "w-full", "text-left", 3, "click"], ["alt", "", "loading", "lazy", 1, "record-doc-img", "pointer-events-none", 3, "src"], [1, "mt-2", "text-center", "text-xs", "text-stone-500"], [1, "rounded-xl", "border", "border-stone-100", "bg-stone-50/80", "px-3", "py-2", "dark:border-gray-800", "dark:bg-gray-800/40"], [1, "text-xs", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "text-sm", "font-medium", "text-stone-900", "dark:text-stone-100"], [1, "record-detail-panel__header", "!border-0"], [1, "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [1, "px-5", "pb-3", "text-xs", "text-stone-500", "dark:text-stone-400", "md:px-6"], [1, "grid", "gap-3", "px-5", "pb-6", "md:grid-cols-2", "md:px-6"], [1, "grid", "grid-cols-1", "gap-6", "p-5", "sm:grid-cols-2", "lg:grid-cols-3", "md:p-6"], [1, "grid", "gap-3", "border-t", "border-stone-100", "px-5", "py-4", "dark:border-gray-800", "md:grid-cols-2", "md:px-6"], [1, "border-t", "border-stone-100", "px-5", "py-5", "dark:border-gray-800", "md:px-6"], [1, "border-t", "border-stone-100", "dark:border-gray-800"], [1, "mt-0.5", "flex", "items-center", "justify-between", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "!h-8", "!min-h-8", "!rounded-lg", "!px-2.5", "!text-xs"], ["mat-stroked-button", "", "type", "button", 1, "!h-8", "!min-h-8", "!rounded-lg", "!px-2.5", "!text-xs", 3, "click"], [1, "!text-base"], [1, "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-2", "inline-flex", "rounded-full", "px-2.5", "py-0.5", "text-xs", "font-semibold", 3, "ngClass"], [1, "p-6", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "icon-size-5", "shrink-0", "text-stone-500", "dark:text-stone-400"], [1, "text-sm", "font-medium", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-xs", "text-stone-600", "dark:text-stone-400"], [1, "record-detail-panel__header", 3, "ngClass"], [1, "text-lg", "font-semibold", 3, "ngClass"], ["type", "button", 1, "shrink-0", "rounded-full", "p-0.5", "transition-colors", 3, "click", "ngClass", "matTooltip"], [1, "text-xs", "font-normal", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "items-center", "gap-6", "p-5", "md:flex-row", "md:items-start", "md:p-6"], ["type", "button", 1, "shrink-0"], [1, "min-w-0", "flex-1", "space-y-4"], [1, "text-sm", "font-medium", 3, "ngClass"], [1, "mt-1", "text-xs", "text-stone-500", "dark:text-stone-400"], ["type", "button", 1, "mt-2", "inline-flex", "items-center", "gap-1", "text-xs", "font-medium", "text-primary-600", "hover:underline", "dark:text-primary-400", 3, "click"], ["svgIcon", "heroicons_outline:exclamation-circle", 1, "icon-size-4"], ["type", "button", 1, "shrink-0", 3, "click"], ["alt", "", "loading", "lazy", 1, "pointer-events-none", "h-16", "w-16", "rounded-lg", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "flex", "items-center", "justify-between", "gap-2", "text-sm"], [1, "text-stone-600", "dark:text-stone-400"], [1, "font-semibold", "tabular-nums", "text-stone-900", "dark:text-white"], [1, "record-progress-track", "mt-2"], [1, "record-progress-fill", "bg-red-500"], [1, "mt-2", "text-xs", "text-stone-600", "dark:text-stone-400"], [1, "mt-4", "flex", "items-center", "justify-between", "gap-2", "text-sm"], [1, "record-progress-fill", "bg-stone-400", "dark:bg-stone-500"], ["alt", "", "loading", "lazy", 1, "h-16", "w-16", "shrink-0", "rounded-lg", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "record-progress-fill", "bg-emerald-500"], ["type", "button", "mat-stroked-button", "", 1, "shrink-0", 3, "disabled"], [1, "flex", "items-start", "gap-3", "rounded-lg", "border", "border-amber-200", "bg-amber-50/80", "p-4", "dark:border-amber-900/40", "dark:bg-amber-950/20"], ["type", "button", "mat-stroked-button", "", 1, "shrink-0", 3, "click", "disabled"], [1, "icon-size-4", "mr-1.5"], [1, "record-progress-fill", "bg-indigo-500"], [1, "icon-size-5", "shrink-0", "text-amber-600", "dark:text-amber-400"], [1, "mt-2", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "flex", "items-start", "gap-3", "rounded-lg", "border", "border-stone-200", "bg-stone-50/90", "p-4", "dark:border-gray-800", "dark:bg-gray-800/40"], [1, "icon-size-5", "shrink-0", 3, "ngClass", "svgIcon"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], [1, "mt-4", "grid", "grid-cols-1", "gap-4", "md:grid-cols-2"], [1, "rounded-lg", "border", "border-stone-100", "bg-white", "p-4", "dark:border-gray-800", "dark:bg-gray-900/40"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "break-words", "text-sm", "font-medium", "text-stone-900", "dark:text-white"], [1, "mt-4", "flex", "flex-wrap", "items-center", "gap-3"], ["mat-stroked-button", "", "type", "button", 1, "!rounded-lg", 3, "click", "disabled"], ["diameter", "18"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "!rounded-lg", 3, "click", "disabled"], [1, "mb-6", "rounded-lg", "border", "border-primary-100", "bg-primary-50/60", "p-4", "dark:border-primary-900/40", "dark:bg-primary-900/10"], [1, "grid", "grid-cols-1", "gap-6", 3, "ngClass"], [1, "rounded-lg", "border", "border-stone-100", "bg-stone-50/90", "p-4", "dark:border-gray-800", "dark:bg-gray-800/40"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "items-center", "gap-2", "text-sm", "font-semibold", "uppercase", "tracking-wider", "text-primary-700", "dark:text-primary-300"], [1, "icon-size-5"], [1, "mt-4", "grid", "grid-cols-1", "gap-3", "md:grid-cols-3"], [1, "rounded-lg", "border", "border-primary-200", "bg-white", "p-3", "dark:border-primary-900/50", "dark:bg-gray-900/50"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-primary-600", "dark:text-primary-400"], [1, "mt-1", "break-words", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "rounded-lg", "border", "border-stone-100", "bg-white", "p-3", "dark:border-gray-800", "dark:bg-gray-900/50"], [1, "mt-1", "break-words", "text-sm", "text-stone-900", "dark:text-stone-100"], [1, "mt-4", "grid", "grid-cols-1", "gap-x-6", "gap-y-2", "border-t", "border-primary-100", "pt-3", "sm:grid-cols-2", "dark:border-primary-900/40"], [1, "text-stone-400", "dark:text-stone-500"], [1, "flex", "items-baseline", "justify-between", "gap-3"], [1, "break-words", "text-right", "text-xs", "font-medium", "text-stone-900", "dark:text-stone-100"], [1, "mb-4", "border-b", "border-stone-200", "pb-2", "text-sm", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:border-gray-700", "dark:text-stone-400"], [1, "space-y-3"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "rounded", "border", "border-stone-100", "bg-white", "px-2", "py-1", "text-sm", "font-semibold", "tabular-nums", "text-stone-900", "shadow-sm", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white"], [1, "rounded", "border", "border-stone-100", "bg-white", "px-2", "py-1", "text-sm", "font-semibold", "text-stone-900", "shadow-sm", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white"], ["type", "button", 1, "triage-btn", "triage-btn--ok", 3, "click"], ["type", "button", 1, "triage-btn", "triage-btn--warn", 3, "click"], ["type", "button", 1, "triage-btn", "triage-btn--error", 3, "click"], [1, "flex", "flex-col", "gap-2.5"], [1, "rounded-xl", "border", "border-stone-200/80", "bg-stone-50/80", "px-3.5", "py-2.5", "text-sm", "dark:border-gray-800", "dark:bg-gray-900/40"], [1, "text-stone-700", "dark:text-stone-200"], [1, "mt-1", "text-xs", "italic", "text-stone-500", "dark:text-stone-400"], [1, "enrollment-resume"], [1, "enrollment-resume__header"], ["alt", "", 1, "enrollment-resume__avatar", 3, "src"], [1, "enrollment-resume__identity"], [1, "enrollment-resume__name"], [1, "enrollment-resume__tagline"], [1, "enrollment-resume__facts"], [1, "enrollment-resume__id"], [1, "enrollment-resume__meta"], ["alt", "", 1, "enrollment-resume__logo", 3, "src"], [1, "enrollment-resume__status"], [1, "enrollment-resume__date"], [1, "enrollment-resume__card"], [1, "enrollment-resume__card", "enrollment-resume__card--verdict"], [1, "enrollment-resume__card-title"], [1, "enrollment-resume__verdict-title"], [1, "enrollment-resume__verdict-sub"], [1, "enrollment-resume__reasons"], [1, "enrollment-resume__footer"], [1, "enrollment-resume__list"], [1, "enrollment-resume__row"], [1, "enrollment-resume__badge"], [1, "enrollment-resume__doc-grid"], [1, "enrollment-resume__list", "enrollment-resume__list--two-col"], ["alt", "", 3, "src"], [1, "enrollment-resume__row", "enrollment-resume__row--full"], [1, "enrollment-resume__scores"], [1, "enrollment-resume__score", 3, "style"], [1, "enrollment-resume__name-match"], [1, "enrollment-resume__score"], [1, "enrollment-resume__score-label"], [1, "enrollment-resume__score-value"], [1, "enrollment-resume__score-min"]], template: function ProjectRecordDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "div", 4)(3, "div", 5)(4, "a", 6);
        \u0275\u0275text(5, "Verifik");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-icon", 7);
        \u0275\u0275elementStart(7, "a", 8);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-icon", 7);
        \u0275\u0275elementStart(11, "a", 9);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "mat-icon", 7);
        \u0275\u0275elementStart(14, "a", 9);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "mat-icon", 7);
        \u0275\u0275elementStart(18, "span", 10);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 11)(22, "div", 12)(23, "button", 13);
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275listener("click", function ProjectRecordDetailComponent_Template_button_click_23_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goBack());
        });
        \u0275\u0275elementStart(25, "mat-icon");
        \u0275\u0275text(26, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 14)(28, "h1", 15);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 16);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 17)(35, "button", 18);
        \u0275\u0275template(36, ProjectRecordDetailComponent_Conditional_36_Template, 1, 0, "mat-spinner", 19)(37, ProjectRecordDetailComponent_Conditional_37_Template, 2, 0, "mat-icon");
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-menu", null, 0)(42, "button", 20);
        \u0275\u0275listener("click", function ProjectRecordDetailComponent_Template_button_click_42_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.downloadCv());
        });
        \u0275\u0275elementStart(43, "mat-icon");
        \u0275\u0275text(44, "picture_as_pdf");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span");
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "button", 20);
        \u0275\u0275listener("click", function ProjectRecordDetailComponent_Template_button_click_48_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.emailCv());
        });
        \u0275\u0275elementStart(49, "mat-icon");
        \u0275\u0275text(50, "send");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span");
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "button", 21);
        \u0275\u0275pipe(55, "transloco");
        \u0275\u0275elementStart(56, "mat-icon");
        \u0275\u0275text(57, "print");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span");
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(61, ProjectRecordDetailComponent_Conditional_61_Template, 11, 9, "div", 22);
        \u0275\u0275elementStart(62, "button", 23);
        \u0275\u0275listener("click", function ProjectRecordDetailComponent_Template_button_click_62_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleDevView());
        });
        \u0275\u0275elementStart(63, "mat-icon");
        \u0275\u0275text(64);
        \u0275\u0275elementEnd();
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "button", 23);
        \u0275\u0275listener("click", function ProjectRecordDetailComponent_Template_button_click_67_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goProjects());
        });
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "transloco");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(70, "main", 24)(71, "div", 25);
        \u0275\u0275template(72, ProjectRecordDetailComponent_Conditional_72_Template, 2, 0, "div", 26)(73, ProjectRecordDetailComponent_Conditional_73_Template, 3, 3, "div", 27)(74, ProjectRecordDetailComponent_Conditional_74_Template, 1, 1)(75, ProjectRecordDetailComponent_Conditional_75_Template, 1, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(76, ProjectRecordDetailComponent_Conditional_76_Template, 37, 38, "div", 28);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_30_0;
        const exportMenu_r68 = \u0275\u0275reference(41);
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 30, "smartEnrollProjects.title"));
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(56, _c1, ctx.projectId));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(((tmp_5_0 = ctx.project()) == null ? null : tmp_5_0.name) || ctx.projectId);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(58, _c2, ctx.projectId));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 32, "smartEnrollProjects.recordsTitle"));
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 34, "smartEnrollProjects.recordDetail.title"));
        \u0275\u0275advance(4);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 36, "smartEnrollProjects.recordDetail.backToRecords"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 38, "smartEnrollProjects.recordDetail.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 40, "smartEnrollProjects.recordDetail.subtitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("matMenuTriggerFor", exportMenu_r68)("disabled", ctx.exportLoading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.exportLoading() ? 36 : 37);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 42, "smartEnrollProjects.recordDetail.export"), " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 44, "smartEnrollProjects.recordDetail.exportDownloadPdf"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 46, "smartEnrollProjects.recordDetail.exportEmailPdf"));
        \u0275\u0275advance(2);
        \u0275\u0275property("printSectionId", ctx.printSectionId)("useExistingCss", true)("printTitle", \u0275\u0275pipeBind1(55, 48, "smartEnrollProjects.recordDetail.printTitle"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 50, "smartEnrollProjects.recordDetail.exportBrowserPrint"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.canResendLink() ? 61 : -1);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-pressed", ctx.devView());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.devView() ? "visibility" : "code");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 52, ctx.devView() ? "smartEnrollProjects.recordDetail.devView.toggleOff" : "smartEnrollProjects.recordDetail.devView.toggleOn"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(69, 54, "smartEnrollProjects.allProjects"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 72 : ctx.errorKey() ? 73 : ctx.devView() ? 74 : 75);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_30_0 = ctx.record()) ? 76 : -1, tmp_30_0);
      }
    }, dependencies: [
      ClipboardModule,
      CommonModule,
      NgClass,
      JsonPipe,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatDialogModule,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule,
      MatTooltipModule,
      MatTooltip,
      NgxPrintDirective,
      TranslocoModule,
      TranslocoPipe,
      WebhookEventsComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.record-detail-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.record-detail-panel[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.record-detail-panel[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.record-detail-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n@media (min-width: 960px) {\n  .record-detail-panel__header[_ngcontent-%COMP%] {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n}\n.record-detail-panel__header[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.record-detail-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n}\n.record-detail-meta[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.record-detail-meta[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.record-detail-code[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.record-detail-code[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.record-stepper-btn[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: transparent;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.record-stepper-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgb(231 229 228 / 0.8);\n  background-color: rgb(250 250 249 / 0.9);\n}\n.record-stepper-btn[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(30 41 59 / 0.5);\n}\n.record-stepper-btn--active[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n  background-color: rgb(245 245 244 / 0.9);\n}\n.record-stepper-btn--active[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n  background-color: rgb(30 41 59 / 0.8);\n}\n.record-stepper-icon--ok[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--ok[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--error[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--error[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--warn[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--warn[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--info[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(2 132 199 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--info[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(56 189 248 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--pending[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--pending[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.verdict-card[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  border-width: 1px;\n  padding: 1.5rem;\n}\n@media (min-width: 960px) {\n  .verdict-card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n.verdict-card--neutral[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.verdict-card--neutral[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.verdict-card--error[_ngcontent-%COMP%] {\n  border-color: rgb(254 202 202 / 0.8);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.verdict-card--error[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  border-color: rgb(127 29 29 / 0.4);\n  background-color: rgb(15 23 42 / 0.4);\n}\n.verdict-icon-badge[_ngcontent-%COMP%] {\n  display: flex;\n  height: 3.5rem;\n  width: 3.5rem;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n}\n.verdict-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n  line-height: 28px;\n}\n.verdict-icon-badge--ok[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(236 253 245 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--ok[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  background-color: rgb(2 44 34 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--warn[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 251 235 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--warn[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  background-color: rgb(69 26 3 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--error[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 242 242 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--error[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  background-color: rgb(69 10 10 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--manual[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--manual[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--pending[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--pending[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.verdict-reasons[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 32rem;\n}\n.verdict-reasons[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not([hidden])    ~ [_ngcontent-%COMP%]:not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n.verdict-reasons[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  text-align: left;\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.verdict-reasons[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.verdict-reasons[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.verdict-reasons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 1rem;\n}\n.verdict-reasons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0px;\n  top: 0.55em;\n  height: 0.375rem;\n  width: 0.375rem;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(168 162 158 / var(--tw-bg-opacity, 1));\n}\n.verdict-reasons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:where(.dark, .dark *)::before {\n  --tw-bg-opacity: 1;\n  background-color: rgb(120 113 108 / var(--tw-bg-opacity, 1));\n}\n.triage-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 0%;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.triage-btn[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity, 1));\n}\n.triage-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n  --tw-ring-offset-width: 1px;\n}\n.triage-btn[_ngcontent-%COMP%]:focus-visible:where(.dark, .dark *) {\n  --tw-ring-offset-color: #020617;\n}\n.triage-btn--ok[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(4 120 87 / var(--tw-text-opacity, 1));\n}\n.triage-btn--ok[_ngcontent-%COMP%]:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(167 243 208 / var(--tw-border-opacity, 1));\n  background-color: rgb(236 253 245 / 0.8);\n}\n.triage-btn--ok[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.triage-btn--ok[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  border-color: rgb(6 78 59 / 0.6);\n  background-color: rgb(2 44 34 / 0.2);\n}\n.triage-btn--ok[_ngcontent-%COMP%]:focus-visible {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(110 231 183 / var(--tw-ring-opacity, 1));\n}\n.triage-btn--ok[_ngcontent-%COMP%]:focus-visible:where(.dark, .dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(6 95 70 / var(--tw-ring-opacity, 1));\n}\n.triage-btn--warn[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(180 83 9 / var(--tw-text-opacity, 1));\n}\n.triage-btn--warn[_ngcontent-%COMP%]:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(253 230 138 / var(--tw-border-opacity, 1));\n  background-color: rgb(255 251 235 / 0.8);\n}\n.triage-btn--warn[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.triage-btn--warn[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  border-color: rgb(120 53 15 / 0.6);\n  background-color: rgb(69 26 3 / 0.2);\n}\n.triage-btn--warn[_ngcontent-%COMP%]:focus-visible {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(252 211 77 / var(--tw-ring-opacity, 1));\n}\n.triage-btn--warn[_ngcontent-%COMP%]:focus-visible:where(.dark, .dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(146 64 14 / var(--tw-ring-opacity, 1));\n}\n.triage-btn--error[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity, 1));\n}\n.triage-btn--error[_ngcontent-%COMP%]:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 202 202 / var(--tw-border-opacity, 1));\n  background-color: rgb(254 242 242 / 0.8);\n}\n.triage-btn--error[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.triage-btn--error[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  border-color: rgb(127 29 29 / 0.6);\n  background-color: rgb(69 10 10 / 0.2);\n}\n.triage-btn--error[_ngcontent-%COMP%]:focus-visible {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(252 165 165 / var(--tw-ring-opacity, 1));\n}\n.triage-btn--error[_ngcontent-%COMP%]:focus-visible:where(.dark, .dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(153 27 27 / var(--tw-ring-opacity, 1));\n}\n.record-doc-thumb[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  padding: 0;\n  border-radius: 1rem;\n}\n.record-doc-thumb[_ngcontent-%COMP%]:hover   .record-doc-img[_ngcontent-%COMP%] {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(214 211 209 / var(--tw-ring-opacity, 1));\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-color: #fff;\n}\n.record-doc-thumb[_ngcontent-%COMP%]:hover   .record-doc-img[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(71 85 105 / var(--tw-ring-opacity, 1));\n  --tw-ring-offset-color: #0f172a;\n}\n.record-doc-thumb[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgb(168, 162, 158);\n  outline-offset: 2px;\n}\n.record-doc-thumb[_ngcontent-%COMP%]:focus-visible   .record-doc-img[_ngcontent-%COMP%] {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(168 162 158 / var(--tw-ring-opacity, 1));\n}\n.record-doc-thumb[_ngcontent-%COMP%]:focus-visible   .record-doc-img[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(120 113 108 / var(--tw-ring-opacity, 1));\n}\n.record-doc-img[_ngcontent-%COMP%] {\n  max-height: 16rem;\n  width: 100%;\n  max-width: 28rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  object-fit: contain;\n}\n.record-doc-img[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n}\n.record-progress-track[_ngcontent-%COMP%] {\n  height: 0.5rem;\n  width: 100%;\n  max-width: 28rem;\n  overflow: hidden;\n  border-radius: 9999px;\n  background-color: rgb(231 229 228 / 0.8);\n}\n.record-progress-track[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n}\n.record-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 9999px;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 500ms;\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.enrollment-resume[_ngcontent-%COMP%] {\n  --resume-primary: #111827;\n  --resume-ink: #0f172a;\n  --resume-muted: #667085;\n  --resume-faint: #98a2b3;\n  --resume-rule: #eceff1;\n  --resume-track: #f2f4f7;\n  color: var(--resume-ink);\n  background: #ffffff;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "SF Pro Text",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  font-feature-settings:\n    "cv11",\n    "ss01",\n    "ss03",\n    "tnum";\n  font-variant-numeric: tabular-nums;\n  font-size: 10pt;\n  line-height: 1.4;\n  orphans: 3;\n  widows: 3;\n}\n.enrollment-resume__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: flex-start;\n  gap: 16pt;\n  padding-bottom: 12pt;\n  border-bottom: 0.5pt solid var(--resume-rule);\n  margin-bottom: 14pt;\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n.enrollment-resume__avatar[_ngcontent-%COMP%] {\n  width: 24mm;\n  height: 24mm;\n  object-fit: cover;\n  border-radius: 3pt;\n  border: 0.5pt solid var(--resume-rule);\n  background: var(--resume-track);\n}\n.enrollment-resume__identity[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.enrollment-resume__name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24pt;\n  font-weight: 600;\n  letter-spacing: -0.022em;\n  line-height: 1.05;\n  color: var(--resume-ink);\n}\n.enrollment-resume__tagline[_ngcontent-%COMP%] {\n  margin: 4pt 0 0;\n  font-size: 7.5pt;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  color: var(--resume-faint);\n  font-weight: 500;\n}\n.enrollment-resume__id[_ngcontent-%COMP%] {\n  margin: 8pt 0 0;\n  font-family:\n    "JetBrains Mono",\n    "SFMono-Regular",\n    Menlo,\n    Consolas,\n    monospace;\n  font-size: 8pt;\n  color: var(--resume-muted);\n  word-break: break-all;\n}\n.enrollment-resume__facts[_ngcontent-%COMP%] {\n  margin: 6pt 0 0;\n  font-size: 9pt;\n  color: var(--resume-muted);\n  letter-spacing: 0;\n  line-height: 1.3;\n}\n.enrollment-resume__facts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]::before {\n  content: " \\b7  ";\n  color: var(--resume-faint);\n}\n.enrollment-resume__one-col[_ngcontent-%COMP%] {\n  display: block;\n}\n.enrollment-resume__meta[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6pt;\n}\n.enrollment-resume__logo[_ngcontent-%COMP%] {\n  max-width: 26mm;\n  max-height: 12mm;\n  object-fit: contain;\n  margin-bottom: 4pt;\n}\n.enrollment-resume__status[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2.5pt 9pt;\n  border: 0.6pt solid var(--resume-primary);\n  border-radius: 999pt;\n  font-size: 7.5pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: var(--resume-primary);\n}\n.enrollment-resume__date[_ngcontent-%COMP%] {\n  font-size: 8.5pt;\n  color: var(--resume-muted);\n  font-variant-numeric: tabular-nums;\n}\n.enrollment-resume__two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 24pt;\n  row-gap: 0;\n}\n.enrollment-resume__card[_ngcontent-%COMP%] {\n  padding: 12pt 0;\n  border-top: 0.4pt solid var(--resume-rule);\n}\n.enrollment-resume__card[_ngcontent-%COMP%]:first-of-type, \n.enrollment-resume__two-col[_ngcontent-%COMP%]   .enrollment-resume__card[_ngcontent-%COMP%] {\n  border-top: 0;\n  padding-top: 0;\n}\n.enrollment-resume__card-title[_ngcontent-%COMP%] {\n  margin: 0 0 8pt;\n  font-size: 7.5pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: var(--resume-muted);\n  page-break-after: avoid;\n  break-after: avoid;\n}\n.enrollment-resume__list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0;\n}\n.enrollment-resume__list--two-col[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n  column-gap: 24pt;\n}\n.enrollment-resume__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 110pt 1fr;\n  column-gap: 12pt;\n  padding: 2.5pt 0;\n  align-items: baseline;\n}\n.enrollment-resume__row--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.enrollment-resume__row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 8pt;\n  color: var(--resume-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 500;\n}\n.enrollment-resume__row[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10pt;\n  color: var(--resume-ink);\n  font-weight: 500;\n  word-break: break-word;\n}\n.enrollment-resume__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6pt;\n  padding: 0.5pt 5pt;\n  border-radius: 3pt;\n  font-size: 7pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #047857;\n  background: rgba(16, 185, 129, 0.1);\n}\n.enrollment-resume__doc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 10pt;\n  row-gap: 6pt;\n  margin-bottom: 10pt;\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n.enrollment-resume__doc-grid[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n}\n.enrollment-resume__doc-grid[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 32mm;\n  object-fit: contain;\n  border: 0.5pt solid var(--resume-rule);\n  border-radius: 2pt;\n  background: var(--resume-track);\n}\n.enrollment-resume__doc-grid[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  margin-top: 4pt;\n  font-size: 7.5pt;\n  color: var(--resume-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.enrollment-resume__scores[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10pt;\n}\n.enrollment-resume__score[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  column-gap: 12pt;\n  align-items: baseline;\n  padding-bottom: 4pt;\n  page-break-inside: avoid;\n  break-inside: avoid;\n  position: relative;\n}\n.enrollment-resume__score[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.5pt;\n  background:\n    linear-gradient(\n      to right,\n      var(--resume-primary) 0%,\n      var(--resume-primary) calc(var(--v, 0) * 1%),\n      var(--resume-track) calc(var(--v, 0) * 1%),\n      var(--resume-track) 100%);\n  border-radius: 999pt;\n}\n.enrollment-resume__score-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 9.5pt;\n  color: var(--resume-ink);\n}\n.enrollment-resume__score-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13pt;\n  color: var(--resume-ink);\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.01em;\n}\n.enrollment-resume__score-min[_ngcontent-%COMP%] {\n  font-size: 8pt;\n  color: var(--resume-muted);\n  white-space: nowrap;\n}\n.enrollment-resume__name-match[_ngcontent-%COMP%] {\n  margin-top: 12pt;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18pt;\n}\n.enrollment-resume__name-match[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6pt;\n  font-size: 7.5pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: var(--resume-muted);\n}\n.enrollment-resume__name-match[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.enrollment-resume__name-match[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 2.5pt 0;\n  font-size: 9.5pt;\n  color: var(--resume-ink);\n}\n.enrollment-resume__name-match[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.enrollment-resume__card--verdict[_ngcontent-%COMP%] {\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n.enrollment-resume__verdict-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13pt;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--resume-ink);\n}\n.enrollment-resume__verdict-sub[_ngcontent-%COMP%] {\n  margin: 3pt 0 0;\n  font-size: 9.5pt;\n  color: var(--resume-muted);\n}\n.enrollment-resume__reasons[_ngcontent-%COMP%] {\n  margin: 8pt 0 0;\n  padding-left: 14pt;\n  font-size: 9pt;\n  color: var(--resume-muted);\n}\n.enrollment-resume__reasons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1pt 0;\n}\n.enrollment-resume__footer[_ngcontent-%COMP%] {\n  margin-top: 18pt;\n  padding-top: 8pt;\n  border-top: 0.4pt solid var(--resume-rule);\n  font-size: 7.5pt;\n  color: var(--resume-faint);\n  text-align: center;\n  letter-spacing: 0.04em;\n}\n@media print {\n  [_nghost-%COMP%] {\n    display: block;\n    background: #fff !important;\n  }\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  [_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n   [_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > main[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  @page {\n    size: A4;\n    margin: 12mm;\n  }\n  *[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n.dev-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.dev-view__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n}\n.dev-view__header[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.dev-view__header[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.dev-view__title-block[_ngcontent-%COMP%] {\n  min-width: 0px;\n  flex: 1 1 0%;\n}\n.dev-view__resume-callout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(191 219 254 / 0.8);\n  background-color: rgb(239 246 255 / 0.8);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.dev-view__resume-callout[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  border-color: rgb(30 58 138 / 0.5);\n  background-color: rgb(23 37 84 / 0.3);\n}\n.dev-view__resume-callout-text[_ngcontent-%COMP%] {\n  margin: 0px;\n  min-width: 0px;\n  flex: 1 1 0%;\n  font-size: 0.75rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.dev-view__resume-callout-text[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(231 229 228 / var(--tw-text-opacity, 1));\n}\n.dev-view__resume-help[_ngcontent-%COMP%] {\n  margin-right: -0.25rem;\n  margin-top: -0.25rem;\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.dev-view__resume-help[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.dev-view__card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.dev-view__card[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.dev-view__card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.dev-view__card-header[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.dev-view__card-title[_ngcontent-%COMP%] {\n  min-width: 0px;\n  flex: 1 1 0%;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: -0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(41 37 36 / var(--tw-text-opacity, 1));\n}\n.dev-view__card-title[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(245 245 244 / var(--tw-text-opacity, 1));\n}\n.dev-view__card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  gap: 0.125rem;\n}\n.dev-view__api[_ngcontent-%COMP%], \n.dev-view__copy[_ngcontent-%COMP%] {\n  height: 2rem;\n  width: 2rem;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.dev-view__api[_ngcontent-%COMP%]:where(.dark, .dark *), \n.dev-view__copy[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.dev-json[_ngcontent-%COMP%] {\n  margin: 0px;\n  max-height: 420px;\n  overflow: auto;\n  --tw-bg-opacity: 1;\n  background-color: rgb(12 10 9 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(245 245 244 / var(--tw-text-opacity, 1));\n}\n.dev-json[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  background-color: rgb(0 0 0 / 0.6);\n}\n.dev-json[_ngcontent-%COMP%] {\n  white-space: pre;\n  word-break: normal;\n}\n.dev-view__webhook-events[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n@media (min-width: 960px) {\n  .dev-view__webhook-events[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=project-record-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectRecordDetailComponent, [{
    type: Component,
    args: [{ selector: "project-record-detail", standalone: true, imports: [
      ClipboardModule,
      CommonModule,
      RouterModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      MatTooltipModule,
      NgxPrintDirective,
      TranslocoModule,
      WebhookEventsComponent
    ], template: `<div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">\r
    <header\r
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"\r
    >\r
        <div class="mx-auto max-w-6xl">\r
            <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">\r
                <a routerLink="/chat" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">Verifik</a>\r
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>\r
                <a\r
                    routerLink="/smart-enroll/projects"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >{{ 'smartEnrollProjects.title' | transloco }}</a\r
                >\r
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>\r
                <a\r
                    [routerLink]="['/smart-enroll/projects', projectId]"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >{{ project()?.name || projectId }}</a\r
                >\r
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>\r
                <a\r
                    [routerLink]="['/smart-enroll/projects', projectId, 'records']"\r
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"\r
                    >{{ 'smartEnrollProjects.recordsTitle' | transloco }}</a\r
                >\r
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>\r
                <span class="cursor-default text-stone-600 dark:text-stone-300">{{\r
                    'smartEnrollProjects.recordDetail.title' | transloco\r
                }}</span>\r
            </div>\r
            <div class="mt-5 flex flex-wrap items-start justify-between gap-4">\r
                <div class="flex min-w-0 items-start gap-3">\r
                    <button\r
                        mat-icon-button\r
                        type="button"\r
                        (click)="goBack()"\r
                        class="shrink-0 !text-stone-600 dark:!text-stone-300"\r
                        [attr.aria-label]="'smartEnrollProjects.recordDetail.backToRecords' | transloco"\r
                    >\r
                        <mat-icon>arrow_back</mat-icon>\r
                    </button>\r
                    <div class="min-w-0 pt-0.5">\r
                        <h1 class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl">\r
                            {{ 'smartEnrollProjects.recordDetail.title' | transloco }}\r
                        </h1>\r
                        <p class="mt-1 text-sm text-stone-600 dark:text-stone-400">\r
                            {{ 'smartEnrollProjects.recordDetail.subtitle' | transloco }}\r
                        </p>\r
                    </div>\r
                </div>\r
                <div class="no-print flex flex-wrap items-center gap-2">\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        class="shrink-0 rounded-xl"\r
                        [matMenuTriggerFor]="exportMenu"\r
                        [disabled]="exportLoading()"\r
                    >\r
                        @if (exportLoading()) {\r
                            <mat-spinner diameter="16"></mat-spinner>\r
                        } @else {\r
                            <mat-icon>download</mat-icon>\r
                        }\r
                        {{ 'smartEnrollProjects.recordDetail.export' | transloco }}\r
                    </button>\r
                    <mat-menu #exportMenu="matMenu">\r
                        <button mat-menu-item type="button" (click)="downloadCv()">\r
                            <mat-icon>picture_as_pdf</mat-icon>\r
                            <span>{{ 'smartEnrollProjects.recordDetail.exportDownloadPdf' | transloco }}</span>\r
                        </button>\r
                        <button mat-menu-item type="button" (click)="emailCv()">\r
                            <mat-icon>send</mat-icon>\r
                            <span>{{ 'smartEnrollProjects.recordDetail.exportEmailPdf' | transloco }}</span>\r
                        </button>\r
                        <button\r
                            mat-menu-item\r
                            type="button"\r
                            ngxPrint\r
                            [printSectionId]="printSectionId"\r
                            [useExistingCss]="true"\r
                            [printTitle]="'smartEnrollProjects.recordDetail.printTitle' | transloco"\r
                        >\r
                            <mat-icon>print</mat-icon>\r
                            <span>{{ 'smartEnrollProjects.recordDetail.exportBrowserPrint' | transloco }}</span>\r
                        </button>\r
                    </mat-menu>\r
                    @if (canResendLink()) {\r
                        <div class="flex items-center">\r
                            <button\r
                                mat-stroked-button\r
                                type="button"\r
                                class="shrink-0 rounded-xl"\r
                                (click)="openResendLinkDialog()"\r
                            >\r
                                <mat-icon>link</mat-icon>\r
                                {{ 'smartEnrollProjects.recordDetail.resendLink' | transloco }}\r
                            </button>\r
                            <button\r
                                mat-icon-button\r
                                type="button"\r
                                class="!text-stone-500 dark:!text-stone-400"\r
                                (click)="openResumeHelpDialog()"\r
                                [matTooltip]="'smartEnrollProjects.recordDetail.resumeHelp.iconLabel' | transloco"\r
                                [attr.aria-label]="'smartEnrollProjects.recordDetail.resumeHelp.iconLabel' | transloco"\r
                            >\r
                                <mat-icon>help_outline</mat-icon>\r
                            </button>\r
                        </div>\r
                    }\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        class="shrink-0 rounded-xl"\r
                        (click)="toggleDevView()"\r
                        [attr.aria-pressed]="devView()"\r
                    >\r
                        <mat-icon>{{ devView() ? 'visibility' : 'code' }}</mat-icon>\r
                        {{\r
                            (devView()\r
                                ? 'smartEnrollProjects.recordDetail.devView.toggleOff'\r
                                : 'smartEnrollProjects.recordDetail.devView.toggleOn'\r
                            ) | transloco\r
                        }}\r
                    </button>\r
                    <button mat-stroked-button type="button" class="shrink-0 rounded-xl" (click)="goProjects()">\r
                        {{ 'smartEnrollProjects.allProjects' | transloco }}\r
                    </button>\r
                </div>\r
            </div>\r
        </div>\r
    </header>\r
\r
    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">\r
        <div class="mx-auto w-full max-w-6xl">\r
            @if (loading()) {\r
                <div class="flex justify-center py-20">\r
                    <mat-spinner diameter="40"></mat-spinner>\r
                </div>\r
            } @else if (errorKey()) {\r
                <div\r
                    class="rounded-2xl border border-red-200/90 bg-red-50/90 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"\r
                >\r
                    {{ errorKey()! | transloco }}\r
                </div>\r
            } @else if (devView()) {\r
                @if (record(); as r) {\r
                    <section class="dev-view">\r
                        <header class="dev-view__header">\r
                            <div class="dev-view__title-block">\r
                                <p class="text-lg font-semibold text-stone-900 dark:text-white">{{ displayName(r) }}</p>\r
                                <p class="mt-1 font-mono text-xs text-stone-500 dark:text-stone-400">{{ r._id }}</p>\r
                            </div>\r
                            @if (r.status) {\r
                                <span\r
                                    class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"\r
                                    [ngClass]="statusPillClass(r.status)"\r
                                >\r
                                    {{ r.status }}\r
                                </span>\r
                            }\r
                        </header>\r
\r
                        <aside class="dev-view__resume-callout">\r
                            <p class="dev-view__resume-callout-text">\r
                                {{ 'smartEnrollProjects.recordDetail.devView.resumeCallout' | transloco }}\r
                            </p>\r
                            <button\r
                                mat-icon-button\r
                                type="button"\r
                                class="dev-view__resume-help"\r
                                (click)="openResumeHelpDialog()"\r
                                [matTooltip]="'smartEnrollProjects.recordDetail.resumeHelp.iconLabel' | transloco"\r
                                [attr.aria-label]="'smartEnrollProjects.recordDetail.resumeHelp.iconLabel' | transloco"\r
                            >\r
                                <mat-icon>help_outline</mat-icon>\r
                            </button>\r
                        </aside>\r
\r
                        @for (section of devSections(); track section.key) {\r
                            <article class="dev-view__card">\r
                                <header class="dev-view__card-header">\r
                                    <h2 class="dev-view__card-title">{{ devSectionTitle(section.key) }}</h2>\r
                                    <div class="dev-view__card-actions">\r
                                        <button\r
                                            type="button"\r
                                            mat-icon-button\r
                                            class="dev-view__api"\r
                                            [disabled]="devApiHintDisabled(section.key, section.value)"\r
                                            (click)="openDevApiHint(section.key, section.value)"\r
                                            [attr.aria-label]="'smartEnrollProjects.recordDetail.devView.apiHint' | transloco"\r
                                            [title]="'smartEnrollProjects.recordDetail.devView.apiHint' | transloco"\r
                                        >\r
                                            <mat-icon>api</mat-icon>\r
                                        </button>\r
                                        <button\r
                                            type="button"\r
                                            mat-icon-button\r
                                            class="dev-view__copy"\r
                                            (click)="copyJson(section.value)"\r
                                            [attr.aria-label]="'smartEnrollProjects.recordDetail.devView.copy' | transloco"\r
                                            [title]="'smartEnrollProjects.recordDetail.devView.copy' | transloco"\r
                                        >\r
                                            <mat-icon>content_copy</mat-icon>\r
                                        </button>\r
                                    </div>\r
                                </header>\r
                                <pre class="dev-json">{{ section.value | json }}</pre>\r
                            </article>\r
                        }\r
\r
                        <article class="dev-view__card">\r
                            <header class="dev-view__card-header">\r
                                <h2 class="dev-view__card-title">\r
                                    {{ 'smartEnrollProjects.recordDetail.devView.webhookEvents' | transloco }}\r
                                </h2>\r
                                <div class="dev-view__card-actions">\r
                                    <button\r
                                        type="button"\r
                                        mat-icon-button\r
                                        class="dev-view__api"\r
                                        (click)="openWebhookEventsApiHint()"\r
                                        [attr.aria-label]="'smartEnrollProjects.recordDetail.devView.apiHint' | transloco"\r
                                        [title]="'smartEnrollProjects.recordDetail.devView.apiHint' | transloco"\r
                                    >\r
                                        <mat-icon>api</mat-icon>\r
                                    </button>\r
                                </div>\r
                            </header>\r
                            <div class="dev-view__webhook-events">\r
                                <webhook-events [appRegistrationId]="r._id"></webhook-events>\r
                            </div>\r
                        </article>\r
                    </section>\r
                }\r
            } @else {\r
                @if (record(); as r) {\r
                <div class="record-detail-meta mb-8">\r
                    <div class="min-w-0 flex-1">\r
                        <p class="text-lg font-semibold text-stone-900 dark:text-white">{{ displayName(r) }}</p>\r
                        <p class="mt-1 font-mono text-xs text-stone-500 dark:text-stone-400">{{ r._id }}</p>\r
                    </div>\r
                    @if (r.status) {\r
                        <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" [ngClass]="statusPillClass(r.status)">\r
                            {{ statusLabel(r.status) }}\r
                        </span>\r
                    }\r
                    <span class="text-sm text-stone-500 dark:text-stone-400">{{ formatDate(r.updatedAt || r.createdAt) }}</span>\r
                    <button\r
                        mat-stroked-button\r
                        type="button"\r
                        class="no-print !rounded-xl"\r
                        (click)="openResolveDialog()"\r
                    >\r
                        <mat-icon class="icon-size-4">tune</mat-icon>\r
                        {{ 'smartEnrollProjects.recordDetail.overrideStatus' | transloco }}\r
                    </button>\r
                </div>\r
\r
                <div class="lg:grid lg:grid-cols-12 lg:gap-10">\r
                    <aside class="mb-8 lg:sticky lg:top-24 lg:col-span-3 lg:mb-0 lg:self-start">\r
                        @if (hasEnrollmentSelfie(r)) {\r
                            <div\r
                                class="mb-6 overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900/50"\r
                            >\r
                                <div class="aspect-[3/4] w-full overflow-hidden bg-stone-100 dark:bg-gray-800">\r
                                    <img\r
                                        class="h-full w-full object-cover"\r
                                        [src]="enrollmentSelfieSrc(r)"\r
                                        alt=""\r
                                        loading="lazy"\r
                                    />\r
                                </div>\r
                                <p\r
                                    class="border-t border-stone-100 px-3 py-2.5 text-center text-xs font-medium text-stone-600 dark:border-gray-800 dark:text-stone-400"\r
                                >\r
                                    {{ 'smartEnrollProjects.recordDetail.livenessSelfie' | transloco }}\r
                                </p>\r
                            </div>\r
                        }\r
                        <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">\r
                            {{ 'smartEnrollProjects.recordDetail.stepsHeading' | transloco }}\r
                        </p>\r
                        <nav class="flex flex-col gap-1">\r
                            @for (step of visibleSteps(); track step) {\r
                                <button\r
                                    type="button"\r
                                    class="record-stepper-btn"\r
                                    [class.record-stepper-btn--active]="activeStep() === step"\r
                                    (click)="scrollToStep($any(step))"\r
                                >\r
                                    <mat-icon\r
                                        class="icon-size-5 shrink-0"\r
                                        [ngClass]="{\r
                                            'record-stepper-icon--ok': stepState($any(step)) === 'ok',\r
                                            'record-stepper-icon--error': stepState($any(step)) === 'error',\r
                                            'record-stepper-icon--warn': stepState($any(step)) === 'warn',\r
                                            'record-stepper-icon--info': stepState($any(step)) === 'info',\r
                                            'record-stepper-icon--pending': stepState($any(step)) === 'pending',\r
                                        }"\r
                                    >\r
                                        {{ stepIcon($any(step)) }}\r
                                    </mat-icon>\r
                                    <span class="text-sm font-medium text-stone-800 dark:text-stone-200">{{\r
                                        'smartEnrollProjects.recordDetail.step.' + step | transloco\r
                                    }}</span>\r
                                </button>\r
                            }\r
                        </nav>\r
                    </aside>\r
\r
                    <div class="space-y-8 lg:col-span-9">\r
                        <!-- Consent -->\r
                        @if (showConsentStep()) {\r
                            <section id="step-consent" class="scroll-mt-28">\r
                                <div class="record-detail-panel">\r
                                    <div class="record-detail-panel__header">\r
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                            {{ 'smartEnrollProjects.recordDetail.section.consent' | transloco }}\r
                                        </h2>\r
                                        @if (consentAcceptedAt(r); as consentAt) {\r
                                            <span class="text-xs text-stone-500 dark:text-stone-400">{{\r
                                                formatConsentDate(consentAt)\r
                                            }}</span>\r
                                        }\r
                                    </div>\r
                                    <div class="p-5 md:p-6">\r
                                        @if (consentAcceptedAt(r); as consentAt) {\r
                                            <p class="text-sm text-stone-600 dark:text-stone-400">\r
                                                {{\r
                                                    'smartEnrollProjects.recordDetail.consentAcceptedOn'\r
                                                        | transloco: { date: formatConsentDate(consentAt) }\r
                                                }}\r
                                            </p>\r
                                            <div class="mt-4 flex flex-wrap gap-x-6 gap-y-2">\r
                                                @if (consentPrivacyUrl(r)) {\r
                                                    <a\r
                                                        class="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"\r
                                                        [href]="consentPrivacyUrl(r)"\r
                                                        target="_blank"\r
                                                        rel="noopener noreferrer"\r
                                                    >\r
                                                        <mat-icon class="icon-size-4">policy</mat-icon>\r
                                                        {{ 'smartEnrollProjects.recordDetail.consentPrivacyPolicy' | transloco }}\r
                                                    </a>\r
                                                }\r
                                                @if (consentTermsUrl(r)) {\r
                                                    <a\r
                                                        class="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"\r
                                                        [href]="consentTermsUrl(r)"\r
                                                        target="_blank"\r
                                                        rel="noopener noreferrer"\r
                                                    >\r
                                                        <mat-icon class="icon-size-4">gavel</mat-icon>\r
                                                        {{ 'smartEnrollProjects.recordDetail.consentTermsAndConditions' | transloco }}\r
                                                    </a>\r
                                                }\r
                                            </div>\r
                                        } @else {\r
                                            <p class="text-sm text-stone-500 dark:text-stone-400">\r
                                                {{ 'smartEnrollProjects.recordDetail.empty.consent' | transloco }}\r
                                            </p>\r
                                        }\r
                                    </div>\r
                                </div>\r
                            </section>\r
                        }\r
\r
                        <!-- Information -->\r
                        <section id="step-information" class="scroll-mt-28">\r
                            <div class="record-detail-panel">\r
                                <div class="record-detail-panel__header">\r
                                    <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                        {{ 'smartEnrollProjects.recordDetail.section.information' | transloco }}\r
                                    </h2>\r
                                    @if (r.informationValidation && ($any(r.informationValidation)['updatedAt'] || $any(r.informationValidation)['createdAt'])) {\r
                                        <span class="text-xs text-stone-500 dark:text-stone-400">{{\r
                                            formatDate(\r
                                                $any(r.informationValidation)['updatedAt'] || $any(r.informationValidation)['createdAt'],\r
                                                true\r
                                            )\r
                                        }}</span>\r
                                    }\r
                                </div>\r
                                <div class="p-5 md:p-6">\r
                                    @if (informationRows(r).length === 0) {\r
                                        <p class="text-sm text-stone-500 dark:text-stone-400">\r
                                            {{ 'smartEnrollProjects.recordDetail.empty.information' | transloco }}\r
                                        </p>\r
                                    } @else {\r
                                        <dl class="grid gap-4 sm:grid-cols-2">\r
                                            @for (row of informationRows(r); track row.key) {\r
                                                <div>\r
                                                    <dt class="text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                                        {{ fieldLabel(row.key) }}\r
                                                    </dt>\r
                                                    <dd class="mt-1 text-sm font-medium text-stone-900 dark:text-stone-100">{{ row.value }}</dd>\r
                                                </div>\r
                                            }\r
                                        </dl>\r
                                    }\r
                                </div>\r
                            </div>\r
\r
                            @if (technicalMetadataRows(r).length) {\r
                                <div class="record-detail-panel mt-6">\r
                                    <div class="record-detail-panel__header">\r
                                        <div class="min-w-0 flex-1">\r
                                            <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                                {{ 'smartEnrollProjects.recordDetail.section.technicalMetadata' | transloco }}\r
                                            </h2>\r
                                            <p class="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">\r
                                                {{ 'smartEnrollProjects.recordDetail.section.technicalMetadataHint' | transloco }}\r
                                            </p>\r
                                        </div>\r
                                    </div>\r
                                    <div class="p-5 md:p-6">\r
                                        <dl class="grid gap-4 sm:grid-cols-2">\r
                                            @for (row of technicalMetadataRows(r); track row.key) {\r
                                                <div class="min-w-0" [class.sm:col-span-2]="technicalRowFullWidth(row.key)">\r
                                                    <dt class="text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400">\r
                                                        {{ fieldLabel(row.key) }}\r
                                                    </dt>\r
                                                    <dd\r
                                                        class="mt-1 break-words text-sm font-medium leading-relaxed text-stone-900 dark:text-stone-100"\r
                                                    >\r
                                                        {{ row.value }}\r
                                                    </dd>\r
                                                </div>\r
                                            }\r
                                        </dl>\r
                                    </div>\r
                                </div>\r
                            }\r
                        </section>\r
\r
                        <!-- Email -->\r
                        @if (r.email || r.emailValidation) {\r
                            <section id="step-email" class="scroll-mt-28">\r
                                <div class="record-detail-panel">\r
                                    <div class="record-detail-panel__header">\r
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                            {{ 'smartEnrollProjects.recordDetail.section.email' | transloco }}\r
                                        </h2>\r
                                        @if (r.emailValidation && $any(r.emailValidation)['updatedAt']) {\r
                                            <span class="text-xs text-stone-500">{{ formatDate($any(r.emailValidation)['updatedAt'], true) }}</span>\r
                                        }\r
                                    </div>\r
                                    <div class="p-5 md:p-6">\r
                                        <p class="text-sm text-stone-900 dark:text-white">\r
                                            {{ $any(r.emailValidation)?.email || r.email || '\u2014' }}\r
                                        </p>\r
                                        @switch (stepState('email')) {\r
                                            @case ('ok') {\r
                                                <span\r
                                                    class="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200"\r
                                                >\r
                                                    <mat-icon class="icon-size-3.5">verified</mat-icon>\r
                                                    {{ 'smartEnrollProjects.recordDetail.validated' | transloco }}\r
                                                </span>\r
                                            }\r
                                            @case ('info') {\r
                                                <span\r
                                                    class="mt-2 inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-700 dark:bg-gray-800 dark:text-stone-300"\r
                                                    [matTooltip]="'smartEnrollProjects.recordDetail.collectedNotVerifiedHint' | transloco"\r
                                                >\r
                                                    <mat-icon class="icon-size-3.5">info</mat-icon>\r
                                                    {{ 'smartEnrollProjects.recordDetail.collectedNotVerified' | transloco }}\r
                                                </span>\r
                                            }\r
                                            @case ('warn') {\r
                                                <span\r
                                                    class="mt-2 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-950/50 dark:text-amber-200"\r
                                                >\r
                                                    <mat-icon class="icon-size-3.5">warning</mat-icon>\r
                                                    {{ 'smartEnrollProjects.recordDetail.otpNotCompleted' | transloco }}\r
                                                </span>\r
                                            }\r
                                        }\r
                                    </div>\r
                                </div>\r
                            </section>\r
                        }\r
\r
                        <!-- Phone -->\r
                        @if (r.phone || r.phoneValidation) {\r
                            <section id="step-phone" class="scroll-mt-28">\r
                                <div class="record-detail-panel">\r
                                    <div class="record-detail-panel__header">\r
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                            {{ 'smartEnrollProjects.recordDetail.section.phone' | transloco }}\r
                                        </h2>\r
                                        @if (r.phoneValidation && $any(r.phoneValidation)['updatedAt']) {\r
                                            <span class="text-xs text-stone-500">{{ formatDate($any(r.phoneValidation)['updatedAt'], true) }}</span>\r
                                        }\r
                                    </div>\r
                                    <div class="p-5 md:p-6">\r
                                        <p class="text-sm text-stone-900 dark:text-white">\r
                                            @if ($any(r.phoneValidation)?.countryCode) {\r
                                                <span>{{ $any(r.phoneValidation).countryCode }} </span>\r
                                            }\r
                                            {{ $any(r.phoneValidation)?.phone || r.phone || '\u2014' }}\r
                                        </p>\r
                                        @switch (stepState('phone')) {\r
                                            @case ('ok') {\r
                                                <span\r
                                                    class="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200"\r
                                                >\r
                                                    <mat-icon class="icon-size-3.5">verified</mat-icon>\r
                                                    {{ 'smartEnrollProjects.recordDetail.validated' | transloco }}\r
                                                </span>\r
                                            }\r
                                            @case ('info') {\r
                                                <span\r
                                                    class="mt-2 inline-flex items-center gap-1 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-700 dark:bg-gray-800 dark:text-stone-300"\r
                                                    [matTooltip]="'smartEnrollProjects.recordDetail.collectedNotVerifiedHint' | transloco"\r
                                                >\r
                                                    <mat-icon class="icon-size-3.5">info</mat-icon>\r
                                                    {{ 'smartEnrollProjects.recordDetail.collectedNotVerified' | transloco }}\r
                                                </span>\r
                                            }\r
                                            @case ('warn') {\r
                                                <span\r
                                                    class="mt-2 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-950/50 dark:text-amber-200"\r
                                                >\r
                                                    <mat-icon class="icon-size-3.5">warning</mat-icon>\r
                                                    {{ 'smartEnrollProjects.recordDetail.otpNotCompleted' | transloco }}\r
                                                </span>\r
                                            }\r
                                        }\r
                                    </div>\r
                                </div>\r
                            </section>\r
                        }\r
\r
                        <!-- Documents -->\r
                        <section id="step-documents" class="scroll-mt-28">\r
                            @if (failedDocumentAttempts().length) {\r
                                @for (failed of failedDocumentAttempts(); track $index) {\r
                                    <div class="record-detail-panel mb-6 border-red-200/90 dark:border-red-900/40">\r
                                        <div class="record-detail-panel__header border-red-100 bg-red-50/50 dark:border-red-900/30 dark:bg-red-950/20">\r
                                            <div class="flex min-w-0 items-center gap-1.5">\r
                                                <h2 class="text-lg font-semibold text-red-900 dark:text-red-200">\r
                                                    {{ 'smartEnrollProjects.recordDetail.section.documentFailed' | transloco }}\r
                                                </h2>\r
                                                <span class="shrink-0 text-xs font-medium text-red-700/80 dark:text-red-300/80">\r
                                                    {{\r
                                                        'smartEnrollProjects.recordDetail.attemptNumber'\r
                                                            | transloco: { number: failed.attemptNumber }\r
                                                    }}\r
                                                </span>\r
                                                <button\r
                                                    type="button"\r
                                                    class="shrink-0 rounded-full p-0.5 text-red-600 transition-colors hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/40"\r
                                                    (click)="openCaptureRequirements(null)"\r
                                                    [matTooltip]="\r
                                                        'smartEnrollProjects.recordDetail.captureRequirements.tooltip' | transloco\r
                                                    "\r
                                                    [attr.aria-label]="\r
                                                        'smartEnrollProjects.recordDetail.captureRequirements.tooltip' | transloco\r
                                                    "\r
                                                >\r
                                                    <mat-icon class="icon-size-5" svgIcon="heroicons_outline:exclamation-circle"></mat-icon>\r
                                                </button>\r
                                            </div>\r
                                            @if (failed.updatedAt) {\r
                                                <span class="text-xs text-red-700/80">{{ formatDate(failed.updatedAt, true) }}</span>\r
                                            }\r
                                        </div>\r
                                        <div class="border-b border-red-100 px-5 py-4 dark:border-red-900/40 md:px-6">\r
                                            <p class="text-sm font-medium text-red-900 dark:text-red-200">\r
                                                {{\r
                                                    'smartEnrollProjects.recordDetail.documentFailedReason.' + failed.reasonKey\r
                                                        | transloco\r
                                                }}\r
                                            </p>\r
                                        </div>\r
                                        @if (failed.frontUrl || failed.backUrl || failed.documentFaceBase64) {\r
                                            <div class="grid gap-4 p-5 sm:grid-cols-2 md:p-6">\r
                                                @if (failed.frontUrl) {\r
                                                    <div>\r
                                                        <button\r
                                                            type="button"\r
                                                            class="record-doc-thumb block w-full text-left"\r
                                                            (click)="\r
                                                                openImagePreview(\r
                                                                    trustHttpUrl(failed.frontUrl),\r
                                                                    'smartEnrollProjects.recordDetail.frontScan'\r
                                                                )\r
                                                            "\r
                                                            [attr.aria-label]="\r
                                                                'smartEnrollProjects.recordDetail.imagePreview.openImage' | transloco\r
                                                            "\r
                                                        >\r
                                                            <img\r
                                                                class="record-doc-img pointer-events-none"\r
                                                                [src]="trustHttpUrl(failed.frontUrl)"\r
                                                                alt=""\r
                                                                loading="lazy"\r
                                                            />\r
                                                            <p class="mt-2 text-center text-xs text-stone-500">\r
                                                                {{ 'smartEnrollProjects.recordDetail.frontScan' | transloco }}\r
                                                            </p>\r
                                                        </button>\r
                                                    </div>\r
                                                }\r
                                                @if (failed.backUrl) {\r
                                                    <div>\r
                                                        <button\r
                                                            type="button"\r
                                                            class="record-doc-thumb block w-full text-left"\r
                                                            (click)="\r
                                                                openImagePreview(\r
                                                                    trustHttpUrl(failed.backUrl),\r
                                                                    'smartEnrollProjects.recordDetail.backScan'\r
                                                                )\r
                                                            "\r
                                                            [attr.aria-label]="\r
                                                                'smartEnrollProjects.recordDetail.imagePreview.openImage' | transloco\r
                                                            "\r
                                                        >\r
                                                            <img\r
                                                                class="record-doc-img pointer-events-none"\r
                                                                [src]="trustHttpUrl(failed.backUrl)"\r
                                                                alt=""\r
                                                                loading="lazy"\r
                                                            />\r
                                                            <p class="mt-2 text-center text-xs text-stone-500">\r
                                                                {{ 'smartEnrollProjects.recordDetail.backScan' | transloco }}\r
                                                            </p>\r
                                                        </button>\r
                                                    </div>\r
                                                }\r
                                                @if (failed.documentFaceBase64) {\r
                                                    <div>\r
                                                        <button\r
                                                            type="button"\r
                                                            class="record-doc-thumb block w-full text-left"\r
                                                            (click)="\r
                                                                openImagePreview(\r
                                                                    sanitizeBase64(failed.documentFaceBase64),\r
                                                                    'smartEnrollProjects.recordDetail.documentFace'\r
                                                                )\r
                                                            "\r
                                                            [attr.aria-label]="\r
                                                                'smartEnrollProjects.recordDetail.imagePreview.openImage' | transloco\r
                                                            "\r
                                                        >\r
                                                            <img\r
                                                                class="record-doc-img pointer-events-none"\r
                                                                [src]="sanitizeBase64(failed.documentFaceBase64)"\r
                                                                alt=""\r
                                                                loading="lazy"\r
                                                            />\r
                                                            <p class="mt-2 text-center text-xs text-stone-500">\r
                                                                {{ 'smartEnrollProjects.recordDetail.documentFace' | transloco }}\r
                                                            </p>\r
                                                        </button>\r
                                                    </div>\r
                                                }\r
                                            </div>\r
                                        }\r
                                        @if (failed.fields.length) {\r
                                            <div class="grid gap-3 border-t border-red-100 px-5 py-4 dark:border-red-900/40 md:grid-cols-2 md:px-6">\r
                                                @for (field of failed.fields; track field.key) {\r
                                                    <div class="rounded-xl border border-stone-100 bg-stone-50/80 px-3 py-2 dark:border-gray-800 dark:bg-gray-800/40">\r
                                                        <p class="text-xs font-medium text-stone-500 dark:text-stone-400">\r
                                                            {{ fieldLabel(field.key) }}\r
                                                        </p>\r
                                                        <p class="text-sm font-medium text-stone-900 dark:text-stone-100">{{ field.value }}</p>\r
                                                    </div>\r
                                                }\r
                                            </div>\r
                                        }\r
                                        @if (failed.ocrRows.length) {\r
                                            <div class="border-t border-red-100 dark:border-red-900/40">\r
                                                <div class="record-detail-panel__header !border-0">\r
                                                    <h3 class="text-base font-semibold text-stone-900 dark:text-white">\r
                                                        {{ 'smartEnrollProjects.recordDetail.partialOcr' | transloco }}\r
                                                    </h3>\r
                                                </div>\r
                                                <p class="px-5 pb-3 text-xs text-stone-500 dark:text-stone-400 md:px-6">\r
                                                    {{ 'smartEnrollProjects.recordDetail.partialOcrHint' | transloco }}\r
                                                </p>\r
                                                <div class="grid gap-3 px-5 pb-6 md:grid-cols-2 md:px-6">\r
                                                    @for (row of failed.ocrRows; track row.key) {\r
                                                        <div class="rounded-xl border border-stone-100 bg-stone-50/80 px-3 py-2 dark:border-gray-800 dark:bg-gray-800/40">\r
                                                            <p class="text-xs font-medium text-stone-500 dark:text-stone-400">{{ row.key }}</p>\r
                                                            <p class="text-sm font-medium text-stone-900 dark:text-stone-100">{{ row.value }}</p>\r
                                                        </div>\r
                                                    }\r
                                                </div>\r
                                            </div>\r
                                        }\r
                                    </div>\r
                                }\r
                            }\r
\r
                            @if (r.documentValidation) {\r
                                <div class="record-detail-panel">\r
                                    <div class="record-detail-panel__header">\r
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                            {{ 'smartEnrollProjects.recordDetail.section.document' | transloco }}\r
                                        </h2>\r
                                        @if ($any(r.documentValidation)['updatedAt']) {\r
                                            <span class="text-xs text-stone-500">{{ formatDate($any(r.documentValidation)['updatedAt'], true) }}</span>\r
                                        }\r
                                    </div>\r
                                    <div class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 lg:grid-cols-3 md:p-6">\r
                                        @if ($any(r.documentValidation)['url']) {\r
                                            <div>\r
                                                <button\r
                                                    type="button"\r
                                                    class="record-doc-thumb block w-full text-left"\r
                                                    (click)="\r
                                                        openImagePreview(\r
                                                            trustHttpUrl($any(r.documentValidation)['url']),\r
                                                            'smartEnrollProjects.recordDetail.frontScan'\r
                                                        )\r
                                                    "\r
                                                    [attr.aria-label]="\r
                                                        'smartEnrollProjects.recordDetail.imagePreview.openImage' | transloco\r
                                                    "\r
                                                >\r
                                                    <img\r
                                                        class="record-doc-img pointer-events-none"\r
                                                        [src]="trustHttpUrl($any(r.documentValidation)['url'])"\r
                                                        alt=""\r
                                                        loading="lazy"\r
                                                    />\r
                                                    <p class="mt-2 text-center text-xs text-stone-500">\r
                                                        {{ 'smartEnrollProjects.recordDetail.frontScan' | transloco }}\r
                                                    </p>\r
                                                </button>\r
                                            </div>\r
                                        }\r
                                        @if (hasDocumentFace(r)) {\r
                                            <div>\r
                                                <button\r
                                                    type="button"\r
                                                    class="record-doc-thumb block w-full text-left"\r
                                                    (click)="\r
                                                        openImagePreview(\r
                                                            documentFaceSrc(r),\r
                                                            'smartEnrollProjects.recordDetail.documentFace'\r
                                                        )\r
                                                    "\r
                                                    [attr.aria-label]="\r
                                                        'smartEnrollProjects.recordDetail.imagePreview.openImage' | transloco\r
                                                    "\r
                                                >\r
                                                    <img\r
                                                        class="record-doc-img pointer-events-none"\r
                                                        [src]="documentFaceSrc(r)"\r
                                                        alt=""\r
                                                        loading="lazy"\r
                                                    />\r
                                                    <p class="mt-2 text-center text-xs text-stone-500">\r
                                                        {{ 'smartEnrollProjects.recordDetail.documentFace' | transloco }}\r
                                                    </p>\r
                                                </button>\r
                                            </div>\r
                                        }\r
                                        @if ($any(r.documentValidation)['backUrl']) {\r
                                            <div>\r
                                                <button\r
                                                    type="button"\r
                                                    class="record-doc-thumb block w-full text-left"\r
                                                    (click)="\r
                                                        openImagePreview(\r
                                                            trustHttpUrl($any(r.documentValidation)['backUrl']),\r
                                                            'smartEnrollProjects.recordDetail.backScan'\r
                                                        )\r
                                                    "\r
                                                    [attr.aria-label]="\r
                                                        'smartEnrollProjects.recordDetail.imagePreview.openImage' | transloco\r
                                                    "\r
                                                >\r
                                                    <img\r
                                                        class="record-doc-img pointer-events-none"\r
                                                        [src]="trustHttpUrl($any(r.documentValidation)['backUrl'])"\r
                                                        alt=""\r
                                                        loading="lazy"\r
                                                    />\r
                                                    <p class="mt-2 text-center text-xs text-stone-500">\r
                                                        {{ 'smartEnrollProjects.recordDetail.backScan' | transloco }}\r
                                                    </p>\r
                                                </button>\r
                                            </div>\r
                                        }\r
                                    </div>\r
\r
                                    @if (documentSummaryFields().length) {\r
                                        <div class="grid gap-3 border-t border-stone-100 px-5 py-4 dark:border-gray-800 md:grid-cols-2 md:px-6">\r
                                            @for (field of documentSummaryFields(); track field.key) {\r
                                                <div class="rounded-xl border border-stone-100 bg-stone-50/80 px-3 py-2 dark:border-gray-800 dark:bg-gray-800/40">\r
                                                    <p class="text-xs font-medium text-stone-500 dark:text-stone-400">\r
                                                        {{ fieldLabel(field.key) }}\r
                                                    </p>\r
                                                    <div class="mt-0.5 flex items-center justify-between gap-2">\r
                                                        <p class="text-sm font-medium text-stone-900 dark:text-stone-100">{{ field.value }}</p>\r
                                                        @if (field.key === 'documentType' && canSetDocumentType()) {\r
                                                            <button\r
                                                                mat-stroked-button\r
                                                                type="button"\r
                                                                class="!h-8 !min-h-8 !rounded-lg !px-2.5 !text-xs"\r
                                                                (click)="openDocumentTypeDialog()"\r
                                                            >\r
                                                                <mat-icon class="!text-base">edit</mat-icon>\r
                                                                {{ 'smartEnrollProjects.recordDetail.documentTypeDialog.setType' | transloco }}\r
                                                            </button>\r
                                                        }\r
                                                    </div>\r
                                                </div>\r
                                            }\r
                                        </div>\r
                                    }\r
\r
                                    @if ($any(r.documentValidation)['documentLiveness']) {\r
                                        @let l = $any(r.documentValidation)['documentLiveness'];\r
                                        <div class="border-t border-stone-100 px-5 py-5 dark:border-gray-800 md:px-6">\r
                                            <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                                                {{ 'smartEnrollProjects.recordDetail.documentLiveness' | transloco }}\r
                                            </h3>\r
                                            <span\r
                                                class="mt-2 inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold"\r
                                                [ngClass]="\r
                                                    l.isLive\r
                                                        ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200'\r
                                                        : 'bg-red-100 text-red-900 dark:bg-red-950/50 dark:text-red-200'\r
                                                "\r
                                            >\r
                                                {{ l.isLive ? ('smartEnrollProjects.recordDetail.livenessPassed' | transloco) : ('smartEnrollProjects.recordDetail.livenessFailed' | transloco) }}\r
                                            </span>\r
                                        </div>\r
                                    }\r
\r
                                    @if (ocrDisplayKeys().length) {\r
                                        <div class="border-t border-stone-100 dark:border-gray-800">\r
                                            <div class="record-detail-panel__header !border-0">\r
                                                <h3 class="text-base font-semibold text-stone-900 dark:text-white">\r
                                                    {{ 'smartEnrollProjects.recordDetail.ocr' | transloco }}\r
                                                </h3>\r
                                            </div>\r
                                            <div class="grid gap-3 px-5 pb-6 md:grid-cols-2 md:px-6">\r
                                                @for (key of ocrDisplayKeys(); track key) {\r
                                                    <div class="rounded-xl border border-stone-100 bg-stone-50/80 px-3 py-2 dark:border-gray-800 dark:bg-gray-800/40">\r
                                                        <p class="text-xs font-medium text-stone-500 dark:text-stone-400">{{ key }}</p>\r
                                                        <div class="mt-0.5 flex items-center justify-between gap-2">\r
                                                            <p class="text-sm font-medium text-stone-900 dark:text-stone-100">{{ ocrData()[key] }}</p>\r
                                                            @if (isOcrDocumentTypeField(key) && canSetDocumentType()) {\r
                                                                <button\r
                                                                    mat-stroked-button\r
                                                                    type="button"\r
                                                                    class="!h-8 !min-h-8 !rounded-lg !px-2.5 !text-xs"\r
                                                                    (click)="openDocumentTypeDialog()"\r
                                                                >\r
                                                                    <mat-icon class="!text-base">edit</mat-icon>\r
                                                                    {{ 'smartEnrollProjects.recordDetail.documentTypeDialog.setType' | transloco }}\r
                                                                </button>\r
                                                            }\r
                                                        </div>\r
                                                    </div>\r
                                                }\r
                                            </div>\r
                                        </div>\r
                                    }\r
                                </div>\r
                            } @else if (!failedDocumentAttempts().length) {\r
                                <div class="record-detail-panel">\r
                                    <div class="p-6 text-sm text-stone-500 dark:text-stone-400">\r
                                        {{ 'smartEnrollProjects.recordDetail.empty.documents' | transloco }}\r
                                    </div>\r
                                </div>\r
                            }\r
                        </section>\r
\r
                        <!-- Biometrics -->\r
                        <section id="step-biometrics" class="scroll-mt-28">\r
                            @if (failedBiometricAttempts().length) {\r
                                @let usage = livenessAttemptUsage();\r
                                <div\r
                                    class="mb-6 flex items-start gap-3 rounded-xl border border-stone-200 bg-stone-50/90 p-4 dark:border-gray-800 dark:bg-gray-800/40"\r
                                >\r
                                    <mat-icon class="icon-size-5 shrink-0 text-stone-500 dark:text-stone-400">history</mat-icon>\r
                                    <div class="min-w-0">\r
                                        <p class="text-sm font-medium text-stone-900 dark:text-white">\r
                                            {{\r
                                                'smartEnrollProjects.recordDetail.livenessAttemptsUsed'\r
                                                    | transloco: { used: usage.used, limit: usage.limit }\r
                                            }}\r
                                        </p>\r
                                        <p class="mt-1 text-xs text-stone-600 dark:text-stone-400">\r
                                            @if (usage.used < usage.limit) {\r
                                                {{\r
                                                    'smartEnrollProjects.recordDetail.livenessAttemptsRemaining'\r
                                                        | transloco: { remaining: usage.limit - usage.used }\r
                                                }}\r
                                            } @else {\r
                                                {{ 'smartEnrollProjects.recordDetail.livenessAttemptsExhausted' | transloco }}\r
                                            }\r
                                            @if (usage.captures > usage.used) {\r
                                                {{\r
                                                    'smartEnrollProjects.recordDetail.livenessQualityCaptures'\r
                                                        | transloco: { captures: usage.captures - usage.used }\r
                                                }}\r
                                            }\r
                                        </p>\r
                                    </div>\r
                                </div>\r
                            }\r
\r
                            @for (fb of failedBiometricAttempts(); track $index) {\r
                                @let minLivFailed = livenessThresholdPercent();\r
                                <div\r
                                    class="record-detail-panel mb-6"\r
                                    [ngClass]="\r
                                        fb.isQuality\r
                                            ? 'border-amber-200/90 dark:border-amber-900/40'\r
                                            : 'border-red-200/90 dark:border-red-900/40'\r
                                    "\r
                                >\r
                                    <div\r
                                        class="record-detail-panel__header"\r
                                        [ngClass]="\r
                                            fb.isQuality\r
                                                ? 'border-amber-100 bg-amber-50/50 dark:border-amber-900/30 dark:bg-amber-950/20'\r
                                                : 'border-red-100 bg-red-50/50 dark:border-red-900/30 dark:bg-red-950/20'\r
                                        "\r
                                    >\r
                                        <div class="flex min-w-0 items-center gap-1.5">\r
                                            <h2\r
                                                class="text-lg font-semibold"\r
                                                [ngClass]="\r
                                                    fb.isQuality\r
                                                        ? 'text-amber-900 dark:text-amber-200'\r
                                                        : 'text-red-900 dark:text-red-200'\r
                                                "\r
                                            >\r
                                                {{\r
                                                    'smartEnrollProjects.recordDetail.section.biometricAttemptFailed'\r
                                                        | transloco: { number: fb.attemptNumber }\r
                                                }}\r
                                            </h2>\r
                                            <button\r
                                                type="button"\r
                                                class="shrink-0 rounded-full p-0.5 transition-colors"\r
                                                [ngClass]="\r
                                                    fb.isQuality\r
                                                        ? 'text-amber-600 hover:bg-amber-100 dark:text-amber-400 dark:hover:bg-amber-900/40'\r
                                                        : 'text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/40'\r
                                                "\r
                                                (click)="openCaptureRequirements(fb)"\r
                                                [matTooltip]="\r
                                                    'smartEnrollProjects.recordDetail.captureRequirements.tooltip'\r
                                                        | transloco\r
                                                "\r
                                                [attr.aria-label]="\r
                                                    'smartEnrollProjects.recordDetail.captureRequirements.tooltip'\r
                                                        | transloco\r
                                                "\r
                                            >\r
                                                <mat-icon\r
                                                    class="icon-size-5"\r
                                                    svgIcon="heroicons_outline:exclamation-circle"\r
                                                ></mat-icon>\r
                                            </button>\r
                                        </div>\r
                                        @if (fb.updatedAt) {\r
                                            <span class="text-xs font-normal text-stone-500 dark:text-stone-400">{{\r
                                                formatDate(fb.updatedAt, true)\r
                                            }}</span>\r
                                        }\r
                                    </div>\r
                                    <div class="flex flex-col items-center gap-6 p-5 md:flex-row md:items-start md:p-6">\r
                                        @if (fb.face) {\r
                                            <button\r
                                                type="button"\r
                                                class="shrink-0"\r
                                                (click)="\r
                                                    openImagePreview(\r
                                                        failedBiometricSelfieSrc(fb),\r
                                                        'smartEnrollProjects.recordDetail.section.biometricFailed'\r
                                                    )\r
                                                "\r
                                                [attr.aria-label]="\r
                                                    'smartEnrollProjects.recordDetail.imagePreview.openImage' | transloco\r
                                                "\r
                                            >\r
                                                <img\r
                                                    class="pointer-events-none h-16 w-16 rounded-lg border border-stone-200 object-cover dark:border-gray-700"\r
                                                    [src]="failedBiometricSelfieSrc(fb)"\r
                                                    alt=""\r
                                                    loading="lazy"\r
                                                />\r
                                            </button>\r
                                        }\r
                                        <div class="min-w-0 flex-1 space-y-4">\r
                                            <div>\r
                                                <p\r
                                                    class="text-sm font-medium"\r
                                                    [ngClass]="\r
                                                        fb.isQuality\r
                                                            ? 'text-amber-900 dark:text-amber-200'\r
                                                            : 'text-red-900 dark:text-red-200'\r
                                                    "\r
                                                >\r
                                                    {{ failedBiometricReasonKey(fb) | transloco }}\r
                                                </p>\r
                                                <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                                    {{\r
                                                        (fb.consumedAttempt\r
                                                            ? 'smartEnrollProjects.recordDetail.biometricAttemptConsumed'\r
                                                            : 'smartEnrollProjects.recordDetail.biometricAttemptNotConsumed'\r
                                                        ) | transloco\r
                                                    }}\r
                                                </p>\r
                                                <button\r
                                                    type="button"\r
                                                    class="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:underline dark:text-primary-400"\r
                                                    (click)="openCaptureRequirements(fb)"\r
                                                >\r
                                                    <mat-icon\r
                                                        class="icon-size-4"\r
                                                        svgIcon="heroicons_outline:exclamation-circle"\r
                                                    ></mat-icon>\r
                                                    <span>{{\r
                                                        'smartEnrollProjects.recordDetail.captureRequirements.explainLink'\r
                                                            | transloco\r
                                                    }}</span>\r
                                                </button>\r
                                            </div>\r
\r
                                            @if (fb.scorePercent != null) {\r
                                                <div>\r
                                                    <div class="flex items-center justify-between gap-2 text-sm">\r
                                                        <span class="text-stone-600 dark:text-stone-400">{{\r
                                                            'smartEnrollProjects.recordDetail.livenessScore' | transloco\r
                                                        }}</span>\r
                                                        <span class="font-semibold tabular-nums text-stone-900 dark:text-white"\r
                                                            >{{ fb.scorePercent }}%</span\r
                                                        >\r
                                                    </div>\r
                                                    <div class="record-progress-track mt-2">\r
                                                        <div\r
                                                            class="record-progress-fill bg-red-500"\r
                                                            [style.width.%]="fb.scorePercent"\r
                                                        ></div>\r
                                                    </div>\r
                                                    @if (fb.scoreBand) {\r
                                                        <p class="mt-2 text-xs text-stone-600 dark:text-stone-400">\r
                                                            {{\r
                                                                'smartEnrollProjects.recordDetail.livenessBand.' + fb.scoreBand\r
                                                                    | transloco\r
                                                            }}\r
                                                        </p>\r
                                                    }\r
                                                    @if (minLivFailed != null) {\r
                                                        <div class="mt-4 flex items-center justify-between gap-2 text-sm">\r
                                                            <span class="text-stone-600 dark:text-stone-400">{{\r
                                                                'smartEnrollProjects.recordDetail.livenessMinimum' | transloco\r
                                                            }}</span>\r
                                                            <span class="font-semibold tabular-nums text-stone-900 dark:text-white"\r
                                                                >{{ minLivFailed }}%</span\r
                                                            >\r
                                                        </div>\r
                                                        <div class="record-progress-track mt-2">\r
                                                            <div\r
                                                                class="record-progress-fill bg-stone-400 dark:bg-stone-500"\r
                                                                [style.width.%]="minLivFailed"\r
                                                            ></div>\r
                                                        </div>\r
                                                    }\r
                                                </div>\r
                                            }\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            }\r
\r
                            @if (r.biometricValidation) {\r
                                <div class="record-detail-panel">\r
                                    <div class="record-detail-panel__header">\r
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                            {{ 'smartEnrollProjects.recordDetail.section.biometric' | transloco }}\r
                                        </h2>\r
                                        @if ($any(r.biometricValidation)['updatedAt']) {\r
                                            <span class="text-xs text-stone-500">{{ formatDate($any(r.biometricValidation)['updatedAt'], true) }}</span>\r
                                        }\r
                                    </div>\r
                                    <div class="flex flex-col items-center gap-6 p-5 md:flex-row md:items-start md:p-6">\r
                                        @if (hasEnrollmentSelfie(r)) {\r
                                            <img\r
                                                class="h-16 w-16 shrink-0 rounded-lg border border-stone-200 object-cover dark:border-gray-700"\r
                                                [src]="enrollmentSelfieSrc(r)"\r
                                                alt=""\r
                                                loading="lazy"\r
                                            />\r
                                        }\r
                                        <div class="min-w-0 flex-1 space-y-4">\r
                                            @if ($any(r.biometricValidation)['livenessScore'] != null) {\r
                                                @let minLiv = livenessMinScorePercent();\r
                                                <div>\r
                                                    <div class="flex items-center justify-between gap-2 text-sm">\r
                                                        <span class="text-stone-600 dark:text-stone-400">{{\r
                                                            'smartEnrollProjects.recordDetail.livenessScore' | transloco\r
                                                        }}</span>\r
                                                        <span class="font-semibold tabular-nums text-stone-900 dark:text-white">{{\r
                                                            livenessDisplayPercent()\r
                                                        }}%</span>\r
                                                    </div>\r
                                                    <div class="record-progress-track mt-2">\r
                                                        <div\r
                                                            class="record-progress-fill bg-emerald-500"\r
                                                            [style.width.%]="livenessDisplayPercent()"\r
                                                        ></div>\r
                                                    </div>\r
                                                    @if (minLiv != null) {\r
                                                        <div class="mt-4 flex items-center justify-between gap-2 text-sm">\r
                                                            <span class="text-stone-600 dark:text-stone-400">{{\r
                                                                'smartEnrollProjects.recordDetail.livenessMinimum' | transloco\r
                                                            }}</span>\r
                                                            <span class="font-semibold tabular-nums text-stone-900 dark:text-white"\r
                                                                >{{ minLiv }}%</span\r
                                                            >\r
                                                        </div>\r
                                                        <div class="record-progress-track mt-2">\r
                                                            <div\r
                                                                class="record-progress-fill bg-stone-400 dark:bg-stone-500"\r
                                                                [style.width.%]="minLiv"\r
                                                            ></div>\r
                                                        </div>\r
                                                    }\r
                                                </div>\r
                                            }\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            } @else if (!(r.failedBiometricValidations?.length)) {\r
                                <div class="record-detail-panel">\r
                                    <div class="p-6 text-sm text-stone-500 dark:text-stone-400">\r
                                        {{ 'smartEnrollProjects.recordDetail.empty.biometrics' | transloco }}\r
                                    </div>\r
                                </div>\r
                            }\r
                        </section>\r
\r
                        <!-- Compare & name match -->\r
                        <section id="step-compare" class="scroll-mt-28">\r
                            @let cmpStatus = compareStatus();\r
                            @if (cmpStatus !== 'notApplicable') {\r
                                @let minPct = compareMinScorePercent();\r
                                <div class="record-detail-panel">\r
                                    <div class="record-detail-panel__header">\r
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                            {{ 'smartEnrollProjects.recordDetail.section.faceCompare' | transloco }}\r
                                        </h2>\r
                                        @let cmpAction = compareAction();\r
                                        @if (cmpAction === 'extract') {\r
                                            <button\r
                                                type="button"\r
                                                mat-stroked-button\r
                                                class="shrink-0"\r
                                                [disabled]="compareActionLoading()"\r
                                                (click)="openDocumentFaceDialog()"\r
                                            >\r
                                                <mat-icon class="icon-size-4 mr-1.5">crop_free</mat-icon>\r
                                                {{ 'smartEnrollProjects.recordDetail.compareExtractFace' | transloco }}\r
                                            </button>\r
                                        } @else if (cmpAction === 'rerun') {\r
                                            <button\r
                                                type="button"\r
                                                mat-stroked-button\r
                                                class="shrink-0"\r
                                                [disabled]="compareActionLoading()"\r
                                                (click)="rerunCompare()"\r
                                            >\r
                                                <mat-icon class="icon-size-4 mr-1.5">refresh</mat-icon>\r
                                                {{ 'smartEnrollProjects.recordDetail.compareRerun' | transloco }}\r
                                            </button>\r
                                        }\r
                                    </div>\r
                                    <div class="p-5 md:p-6">\r
                                        @if (cmpStatus === 'passed' || cmpStatus === 'failed') {\r
                                            <div class="flex items-center justify-between gap-2 text-sm">\r
                                                <span class="text-stone-600 dark:text-stone-400">{{ 'smartEnrollProjects.recordDetail.compareScore' | transloco }}</span>\r
                                                <span class="font-semibold tabular-nums text-stone-900 dark:text-white">{{ compareScore() }}%</span>\r
                                            </div>\r
                                            <div class="record-progress-track mt-2">\r
                                                <div class="record-progress-fill bg-indigo-500" [style.width.%]="compareScore()"></div>\r
                                            </div>\r
                                            @if (minPct != null) {\r
                                                <div class="mt-4 flex items-center justify-between gap-2 text-sm">\r
                                                    <span class="text-stone-600 dark:text-stone-400">{{\r
                                                        'smartEnrollProjects.recordDetail.compareMinimum' | transloco\r
                                                    }}</span>\r
                                                    <span class="font-semibold tabular-nums text-stone-900 dark:text-white">{{ minPct }}%</span>\r
                                                </div>\r
                                                <div class="record-progress-track mt-2">\r
                                                    <div\r
                                                        class="record-progress-fill bg-stone-400 dark:bg-stone-500"\r
                                                        [style.width.%]="minPct"\r
                                                    ></div>\r
                                                </div>\r
                                            }\r
                                        } @else {\r
                                            <div\r
                                                class="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50/80 p-4 dark:border-amber-900/40 dark:bg-amber-950/20"\r
                                            >\r
                                                <mat-icon class="icon-size-5 shrink-0 text-amber-600 dark:text-amber-400">warning</mat-icon>\r
                                                <div class="min-w-0">\r
                                                    <p class="text-sm font-medium text-stone-900 dark:text-white">\r
                                                        {{ 'smartEnrollProjects.recordDetail.compareState.' + cmpStatus + '.title' | transloco }}\r
                                                    </p>\r
                                                    <p class="mt-1 text-sm text-stone-600 dark:text-stone-400">\r
                                                        {{ 'smartEnrollProjects.recordDetail.compareState.' + cmpStatus + '.detail' | transloco }}\r
                                                    </p>\r
                                                    @let faceReasonKey = documentFaceReasonKey();\r
                                                    @if (cmpStatus === 'missingDocumentFace' && faceReasonKey) {\r
                                                        <p class="mt-2 text-xs text-stone-500 dark:text-stone-400">\r
                                                            {{ faceReasonKey | transloco }}\r
                                                        </p>\r
                                                    }\r
                                                </div>\r
                                            </div>\r
                                        }\r
                                    </div>\r
                                </div>\r
                            }\r
\r
                            @if (showNameMatchCard()) {\r
                                @let nmDoc = nameMatchColumn(r, 'document');\r
                                @let nmForm = nameMatchColumn(r, 'information');\r
                                <div class="record-detail-panel mt-6">\r
                                    <div class="record-detail-panel__header">\r
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                            {{ 'smartEnrollProjects.recordDetail.verifyNames' | transloco }}\r
                                        </h2>\r
                                        @if ($any(r.documentValidation)?.['updatedAt']) {\r
                                            <span class="text-xs font-normal text-stone-500 dark:text-stone-400">{{\r
                                                formatDate($any(r.documentValidation)['updatedAt'], true)\r
                                            }}</span>\r
                                        }\r
                                    </div>\r
                                    <div class="p-5 md:p-6">\r
                                        @if (nameVerificationPending()) {\r
                                            @let nameSkip = nameVerificationSkip();\r
                                            @let nameDecision = manualNameDecision();\r
                                            <div\r
                                                class="flex items-start gap-3 rounded-lg border border-stone-200 bg-stone-50/90 p-4 dark:border-gray-800 dark:bg-gray-800/40"\r
                                            >\r
                                                <mat-icon\r
                                                    class="icon-size-5 shrink-0"\r
                                                    [ngClass]="\r
                                                        nameDecision === 'match'\r
                                                            ? 'text-emerald-600 dark:text-emerald-400'\r
                                                            : nameDecision === 'mismatch'\r
                                                              ? 'text-red-600 dark:text-red-400'\r
                                                              : 'text-stone-400 dark:text-stone-500'\r
                                                    "\r
                                                    [svgIcon]="\r
                                                        nameDecision === 'match'\r
                                                            ? 'heroicons_outline:check-circle'\r
                                                            : nameDecision === 'mismatch'\r
                                                              ? 'heroicons_outline:x-circle'\r
                                                              : 'heroicons_outline:minus-circle'\r
                                                    "\r
                                                ></mat-icon>\r
                                                <div class="min-w-0">\r
                                                    <p class="text-sm font-medium text-stone-700 dark:text-stone-300">\r
                                                        @if (nameDecision) {\r
                                                            {{\r
                                                                (nameDecision === 'match'\r
                                                                    ? 'smartEnrollProjects.recordDetail.nameReviewedMatch'\r
                                                                    : 'smartEnrollProjects.recordDetail.nameReviewedMismatch'\r
                                                                ) | transloco\r
                                                            }}\r
                                                        } @else {\r
                                                            {{ 'smartEnrollProjects.recordDetail.nameMatchNotPerformed' | transloco }}\r
                                                        }\r
                                                    </p>\r
                                                    <p class="mt-1 text-xs text-stone-500 dark:text-stone-400">\r
                                                        @if (nameSkip) {\r
                                                            {{ nameSkip.key | transloco: nameSkip.params }}\r
                                                        } @else {\r
                                                            {{ 'smartEnrollProjects.recordDetail.nameMatchNotPerformedHint' | transloco }}\r
                                                        }\r
                                                    </p>\r
                                                </div>\r
                                            </div>\r
\r
                                            <!-- Names as each source recorded them, so the reviewer can decide here -->\r
                                            <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">\r
                                                <div\r
                                                    class="rounded-lg border border-stone-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900/40"\r
                                                >\r
                                                    <p\r
                                                        class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                                    >\r
                                                        {{ 'smartEnrollProjects.recordDetail.nameFromDocument' | transloco }}\r
                                                    </p>\r
                                                    <p class="mt-1 break-words text-sm font-medium text-stone-900 dark:text-white">\r
                                                        {{ documentFullName() || '\u2014' }}\r
                                                    </p>\r
                                                </div>\r
                                                <div\r
                                                    class="rounded-lg border border-stone-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900/40"\r
                                                >\r
                                                    <p\r
                                                        class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                                    >\r
                                                        {{ 'smartEnrollProjects.recordDetail.nameFromForm' | transloco }}\r
                                                    </p>\r
                                                    <p class="mt-1 break-words text-sm font-medium text-stone-900 dark:text-white">\r
                                                        {{ formFullName() || '\u2014' }}\r
                                                    </p>\r
                                                </div>\r
                                            </div>\r
\r
                                            @if (canReviewNames()) {\r
                                                <div class="mt-4 flex flex-wrap items-center gap-3">\r
                                                    <button\r
                                                        mat-stroked-button\r
                                                        type="button"\r
                                                        class="!rounded-lg"\r
                                                        [disabled]="nameActionLoading()"\r
                                                        (click)="rerunNameValidation()"\r
                                                    >\r
                                                        @if (nameActionLoading()) {\r
                                                            <mat-spinner diameter="18"></mat-spinner>\r
                                                        } @else {\r
                                                            <mat-icon>refresh</mat-icon>\r
                                                        }\r
                                                        {{ 'smartEnrollProjects.recordDetail.nameRerun' | transloco }}\r
                                                    </button>\r
                                                    <button\r
                                                        mat-flat-button\r
                                                        type="button"\r
                                                        color="primary"\r
                                                        class="!rounded-lg"\r
                                                        [disabled]="nameActionLoading()"\r
                                                        (click)="openNameReviewDialog()"\r
                                                    >\r
                                                        <mat-icon>how_to_reg</mat-icon>\r
                                                        {{ 'smartEnrollProjects.recordDetail.nameReview' | transloco }}\r
                                                    </button>\r
                                                </div>\r
                                            }\r
                                        } @else {\r
                                        @let govName = governmentNameResponse();\r
                                        <!-- The registry answer explains the percentages below: a name belonging to\r
                                             someone else scores low for the same reason garbled OCR does. -->\r
                                        @if (govName) {\r
                                            <div\r
                                                class="mb-6 rounded-lg border border-primary-100 bg-primary-50/60 p-4 dark:border-primary-900/40 dark:bg-primary-900/10"\r
                                            >\r
                                                <div class="flex flex-wrap items-start justify-between gap-3">\r
                                                    <div\r
                                                        class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300"\r
                                                    >\r
                                                        <mat-icon class="icon-size-5">account_balance</mat-icon>\r
                                                        {{ 'smartEnrollProjects.recordDetail.governmentResponse.title' | transloco }}\r
                                                    </div>\r
                                                    @if (govName.validatedAt) {\r
                                                        <span class="text-xs text-stone-500 dark:text-stone-400">\r
                                                            {{\r
                                                                'smartEnrollProjects.recordDetail.governmentResponse.checkedAt'\r
                                                                    | transloco: { date: govName.validatedAt }\r
                                                            }}\r
                                                        </span>\r
                                                    }\r
                                                </div>\r
\r
                                                @if (govName.documentNumber || govName.documentType) {\r
                                                    <p class="mt-2 text-xs text-stone-500 dark:text-stone-400">\r
                                                        {{\r
                                                            'smartEnrollProjects.recordDetail.governmentResponse.queriedWith'\r
                                                                | transloco\r
                                                                    : {\r
                                                                          type: govName.documentType || '\u2014',\r
                                                                          number: govName.documentNumber || '\u2014',\r
                                                                      }\r
                                                        }}\r
                                                        @if (governmentLookupTypeDiffers()) {\r
                                                            <span class="text-stone-400 dark:text-stone-500">\r
                                                                {{\r
                                                                    'smartEnrollProjects.recordDetail.governmentResponse.normalizedType'\r
                                                                        | transloco\r
                                                                            : { scanned: $any(r.documentValidation)?.documentType }\r
                                                                }}\r
                                                            </span>\r
                                                        }\r
                                                    </p>\r
                                                }\r
\r
                                                <!-- Three sources side by side, in the order the percentages compare them -->\r
                                                <div class="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">\r
                                                    <div\r
                                                        class="rounded-lg border border-primary-200 bg-white p-3 dark:border-primary-900/50 dark:bg-gray-900/50"\r
                                                    >\r
                                                        <p\r
                                                            class="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400"\r
                                                        >\r
                                                            {{\r
                                                                'smartEnrollProjects.recordDetail.governmentResponse.registryName'\r
                                                                    | transloco\r
                                                            }}\r
                                                        </p>\r
                                                        <p\r
                                                            class="mt-1 break-words text-sm font-semibold text-stone-900 dark:text-white"\r
                                                        >\r
                                                            {{ govName.fullName || '\u2014' }}\r
                                                        </p>\r
                                                    </div>\r
                                                    <div\r
                                                        class="rounded-lg border border-stone-100 bg-white p-3 dark:border-gray-800 dark:bg-gray-900/50"\r
                                                    >\r
                                                        <p\r
                                                            class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                                        >\r
                                                            {{ 'smartEnrollProjects.recordDetail.nameFromDocument' | transloco }}\r
                                                        </p>\r
                                                        <p class="mt-1 break-words text-sm text-stone-900 dark:text-stone-100">\r
                                                            {{ documentFullName() || '\u2014' }}\r
                                                        </p>\r
                                                    </div>\r
                                                    <div\r
                                                        class="rounded-lg border border-stone-100 bg-white p-3 dark:border-gray-800 dark:bg-gray-900/50"\r
                                                    >\r
                                                        <p\r
                                                            class="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400"\r
                                                        >\r
                                                            {{ 'smartEnrollProjects.recordDetail.nameFromForm' | transloco }}\r
                                                        </p>\r
                                                        <p class="mt-1 break-words text-sm text-stone-900 dark:text-stone-100">\r
                                                            {{ formFullName() || '\u2014' }}\r
                                                        </p>\r
                                                    </div>\r
                                                </div>\r
\r
                                                @if (govName.firstName || govName.lastName || govName.extras.length) {\r
                                                    <dl\r
                                                        class="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 border-t border-primary-100 pt-3 sm:grid-cols-2 dark:border-primary-900/40"\r
                                                    >\r
                                                        @if (govName.firstName) {\r
                                                            <div class="flex items-baseline justify-between gap-3">\r
                                                                <dt class="text-xs text-stone-500 dark:text-stone-400">\r
                                                                    {{\r
                                                                        'smartEnrollProjects.recordDetail.field.firstName' | transloco\r
                                                                    }}\r
                                                                </dt>\r
                                                                <dd\r
                                                                    class="break-words text-right text-xs font-medium text-stone-900 dark:text-stone-100"\r
                                                                >\r
                                                                    {{ govName.firstName }}\r
                                                                </dd>\r
                                                            </div>\r
                                                        }\r
                                                        @if (govName.lastName) {\r
                                                            <div class="flex items-baseline justify-between gap-3">\r
                                                                <dt class="text-xs text-stone-500 dark:text-stone-400">\r
                                                                    {{ 'smartEnrollProjects.recordDetail.field.lastName' | transloco }}\r
                                                                </dt>\r
                                                                <dd\r
                                                                    class="break-words text-right text-xs font-medium text-stone-900 dark:text-stone-100"\r
                                                                >\r
                                                                    {{ govName.lastName }}\r
                                                                </dd>\r
                                                            </div>\r
                                                        }\r
                                                        @for (extra of govName.extras; track extra.key) {\r
                                                            <div class="flex items-baseline justify-between gap-3">\r
                                                                <dt class="text-xs text-stone-500 dark:text-stone-400">\r
                                                                    {{ fieldLabel(extra.key) }}\r
                                                                </dt>\r
                                                                <dd\r
                                                                    class="break-words text-right text-xs font-medium text-stone-900 dark:text-stone-100"\r
                                                                >\r
                                                                    {{ extra.value }}\r
                                                                </dd>\r
                                                            </div>\r
                                                        }\r
                                                    </dl>\r
                                                }\r
                                            </div>\r
                                        }\r
                                        <div\r
                                            class="grid grid-cols-1 gap-6"\r
                                            [ngClass]="{\r
                                                'md:grid-cols-2':\r
                                                    showNameMatch() ||\r
                                                    (nameMatchColumnHasData(nmDoc) && nameMatchColumnHasData(nmForm)),\r
                                            }"\r
                                        >\r
                                            @if (showNameMatch() || nameMatchColumnHasData(nmDoc)) {\r
                                                <div\r
                                                    class="rounded-lg border border-stone-100 bg-stone-50/90 p-4 dark:border-gray-800 dark:bg-gray-800/40"\r
                                                >\r
                                                    <div\r
                                                        class="mb-4 border-b border-stone-200 pb-2 text-sm font-semibold uppercase tracking-wider text-stone-500 dark:border-gray-700 dark:text-stone-400"\r
                                                    >\r
                                                        {{ 'smartEnrollProjects.recordDetail.compareGovernmentId' | transloco }}\r
                                                    </div>\r
                                                    <div class="space-y-3">\r
                                                        @if (showNameMatchPctRow(nmDoc.firstNameMatchPercentage)) {\r
                                                            <div class="flex items-center justify-between gap-3">\r
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{\r
                                                                    'smartEnrollProjects.recordDetail.firstNameMatch' | transloco\r
                                                                }}</span>\r
                                                                <span\r
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold tabular-nums text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"\r
                                                                    >{{ formatNameMatchPercent(nmDoc.firstNameMatchPercentage) }}</span\r
                                                                >\r
                                                            </div>\r
                                                        }\r
                                                        @if (showNameMatchPctRow(nmDoc.lastNameMatchPercentage)) {\r
                                                            <div class="flex items-center justify-between gap-3">\r
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{\r
                                                                    'smartEnrollProjects.recordDetail.lastNameMatch' | transloco\r
                                                                }}</span>\r
                                                                <span\r
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold tabular-nums text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"\r
                                                                    >{{ formatNameMatchPercent(nmDoc.lastNameMatchPercentage) }}</span\r
                                                                >\r
                                                            </div>\r
                                                        }\r
                                                        @if (showNameMatchPctRow(nmDoc.fullNameMatchPercentage)) {\r
                                                            <div class="flex items-center justify-between gap-3">\r
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{\r
                                                                    'smartEnrollProjects.recordDetail.fullNameMatch' | transloco\r
                                                                }}</span>\r
                                                                <span\r
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold tabular-nums text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"\r
                                                                    >{{ formatNameMatchPercent(nmDoc.fullNameMatchPercentage) }}</span\r
                                                                >\r
                                                            </div>\r
                                                        }\r
                                                        @if (nmDoc.namesMatch != null) {\r
                                                            <div class="flex items-center justify-between gap-3">\r
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{\r
                                                                    'smartEnrollProjects.recordDetail.field.namesMatch' | transloco\r
                                                                }}</span>\r
                                                                <span\r
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"\r
                                                                >\r
                                                                    {{\r
                                                                        nmDoc.namesMatch\r
                                                                            ? ('smartEnrollProjects.recordDetail.boolYes' | transloco)\r
                                                                            : ('smartEnrollProjects.recordDetail.boolNo' | transloco)\r
                                                                    }}\r
                                                                </span>\r
                                                            </div>\r
                                                        }\r
                                                    </div>\r
                                                </div>\r
                                            }\r
                                            @if (showNameMatch() || nameMatchColumnHasData(nmForm)) {\r
                                                <div\r
                                                    class="rounded-lg border border-stone-100 bg-stone-50/90 p-4 dark:border-gray-800 dark:bg-gray-800/40"\r
                                                >\r
                                                    <div\r
                                                        class="mb-4 border-b border-stone-200 pb-2 text-sm font-semibold uppercase tracking-wider text-stone-500 dark:border-gray-700 dark:text-stone-400"\r
                                                    >\r
                                                        {{ 'smartEnrollProjects.recordDetail.compareGovernmentForm' | transloco }}\r
                                                    </div>\r
                                                    <div class="space-y-3">\r
                                                        @if (showNameMatchPctRow(nmForm.firstNameMatchPercentage)) {\r
                                                            <div class="flex items-center justify-between gap-3">\r
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{\r
                                                                    'smartEnrollProjects.recordDetail.firstNameMatch' | transloco\r
                                                                }}</span>\r
                                                                <span\r
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold tabular-nums text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"\r
                                                                    >{{ formatNameMatchPercent(nmForm.firstNameMatchPercentage) }}</span\r
                                                                >\r
                                                            </div>\r
                                                        }\r
                                                        @if (showNameMatchPctRow(nmForm.lastNameMatchPercentage)) {\r
                                                            <div class="flex items-center justify-between gap-3">\r
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{\r
                                                                    'smartEnrollProjects.recordDetail.lastNameMatch' | transloco\r
                                                                }}</span>\r
                                                                <span\r
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold tabular-nums text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"\r
                                                                    >{{ formatNameMatchPercent(nmForm.lastNameMatchPercentage) }}</span\r
                                                                >\r
                                                            </div>\r
                                                        }\r
                                                        @if (showNameMatchPctRow(nmForm.fullNameMatchPercentage)) {\r
                                                            <div class="flex items-center justify-between gap-3">\r
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{\r
                                                                    'smartEnrollProjects.recordDetail.fullNameMatch' | transloco\r
                                                                }}</span>\r
                                                                <span\r
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold tabular-nums text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"\r
                                                                    >{{ formatNameMatchPercent(nmForm.fullNameMatchPercentage) }}</span\r
                                                                >\r
                                                            </div>\r
                                                        }\r
                                                        @if (nmForm.namesMatch != null) {\r
                                                            <div class="flex items-center justify-between gap-3">\r
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{\r
                                                                    'smartEnrollProjects.recordDetail.field.namesMatch' | transloco\r
                                                                }}</span>\r
                                                                <span\r
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"\r
                                                                >\r
                                                                    {{\r
                                                                        nmForm.namesMatch\r
                                                                            ? ('smartEnrollProjects.recordDetail.boolYes' | transloco)\r
                                                                            : ('smartEnrollProjects.recordDetail.boolNo' | transloco)\r
                                                                    }}\r
                                                                </span>\r
                                                            </div>\r
                                                        }\r
                                                    </div>\r
                                                </div>\r
                                            }\r
                                        </div>\r
                                        }\r
                                    </div>\r
                                </div>\r
                            }\r
\r
                            @if ($any(r.compareFaceVerification)?.result?.score == null && !showNameMatchCard()) {\r
                                <div class="record-detail-panel">\r
                                    <div class="p-6 text-sm text-stone-500 dark:text-stone-400">\r
                                        {{ 'smartEnrollProjects.recordDetail.empty.compare' | transloco }}\r
                                    </div>\r
                                </div>\r
                            }\r
                        </section>\r
\r
                        <!-- Verdict -->\r
                        <section id="step-verdict" class="scroll-mt-28">\r
                            <div class="record-detail-panel overflow-hidden">\r
                                <div class="record-detail-panel__header">\r
                                    <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                        {{ 'smartEnrollProjects.recordDetail.section.verdict' | transloco }}\r
                                    </h2>\r
                                    <span class="text-xs text-stone-500">{{ formatDate(r.updatedAt, true) }}</span>\r
                                </div>\r
                                <div class="p-6 md:p-8">\r
                                    <div class="verdict-card" [ngClass]="verdictPanelClass(r.status)">\r
                                        <div class="flex flex-col items-center gap-4 text-center">\r
                                            <span class="verdict-icon-badge" [ngClass]="verdictIconBadgeClass(r.status)">\r
                                                @if (r.status === 'COMPLETED') {\r
                                                    <mat-icon>check_circle</mat-icon>\r
                                                } @else if (r.status === 'COMPLETED_WITHOUT_KYC') {\r
                                                    <mat-icon>warning</mat-icon>\r
                                                } @else if (r.status === 'FAILED') {\r
                                                    <mat-icon>cancel</mat-icon>\r
                                                } @else if (r.status === 'NEEDS_MANUAL_VERIFICATION') {\r
                                                    <mat-icon>fact_check</mat-icon>\r
                                                } @else {\r
                                                    <mat-icon>hourglass_empty</mat-icon>\r
                                                }\r
                                            </span>\r
                                            <div>\r
                                                <p class="text-xl font-semibold text-stone-900 dark:text-white">\r
                                                    {{ verdictTitleKey(r.status) | transloco }}\r
                                                </p>\r
                                                <p class="mt-2 text-sm text-stone-600 dark:text-stone-400">\r
                                                    {{ verdictSubtitleKey(r.status) | transloco }}\r
                                                </p>\r
                                            </div>\r
                                            @if (r.status === 'NEEDS_MANUAL_VERIFICATION' && manualReasons().length) {\r
                                                <ul class="verdict-reasons">\r
                                                    @for (reason of manualReasons(); track reason.key) {\r
                                                        <li>{{ reason.key | transloco: reason.params }}</li>\r
                                                    }\r
                                                </ul>\r
                                            }\r
                                            @if (r.status === 'NEEDS_MANUAL_VERIFICATION') {\r
                                                <div class="no-print mt-2 flex w-full max-w-lg flex-col gap-2 sm:flex-row">\r
                                                    <button\r
                                                        type="button"\r
                                                        class="triage-btn triage-btn--ok"\r
                                                        (click)="openResolveDialog('COMPLETED')"\r
                                                    >\r
                                                        <mat-icon class="icon-size-5">check_circle</mat-icon>\r
                                                        {{ 'smartEnrollProjects.recordDetail.triage.markCompleted' | transloco }}\r
                                                    </button>\r
                                                    <button\r
                                                        type="button"\r
                                                        class="triage-btn triage-btn--warn"\r
                                                        (click)="openResolveDialog('COMPLETED_WITHOUT_KYC')"\r
                                                    >\r
                                                        <mat-icon class="icon-size-5">warning</mat-icon>\r
                                                        {{ 'smartEnrollProjects.recordDetail.triage.markCompletedNoKyc' | transloco }}\r
                                                    </button>\r
                                                    <button\r
                                                        type="button"\r
                                                        class="triage-btn triage-btn--error"\r
                                                        (click)="openResolveDialog('FAILED')"\r
                                                    >\r
                                                        <mat-icon class="icon-size-5">cancel</mat-icon>\r
                                                        {{ 'smartEnrollProjects.recordDetail.triage.markFailed' | transloco }}\r
                                                    </button>\r
                                                </div>\r
                                            }\r
                                        </div>\r
                                    </div>\r
\r
                                    @if (manualReviewRows().length) {\r
                                        <div class="mt-6 border-t border-stone-200/70 pt-5 dark:border-gray-800">\r
                                            <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">\r
                                                {{ 'smartEnrollProjects.recordDetail.reviewHistory.heading' | transloco }}\r
                                            </p>\r
                                            <ul class="flex flex-col gap-2.5">\r
                                                @for (row of manualReviewRows(); track $index) {\r
                                                    <li class="rounded-xl border border-stone-200/80 bg-stone-50/80 px-3.5 py-2.5 text-sm dark:border-gray-800 dark:bg-gray-900/40">\r
                                                        <p class="text-stone-700 dark:text-stone-200">\r
                                                            {{\r
                                                                'smartEnrollProjects.recordDetail.reviewHistory.rowSummary'\r
                                                                    | transloco: { status: row.status, reviewer: row.reviewer, date: row.date }\r
                                                            }}\r
                                                        </p>\r
                                                        @if (row.note) {\r
                                                            <p class="mt-1 text-xs italic text-stone-500 dark:text-stone-400">{{ row.note }}</p>\r
                                                        }\r
                                                    </li>\r
                                                }\r
                                            </ul>\r
                                        </div>\r
                                    }\r
                                </div>\r
                            </div>\r
                        </section>\r
\r
                        <!-- Events -->\r
                        <section id="step-events" class="scroll-mt-28">\r
                            <div class="record-detail-panel overflow-hidden">\r
                                <div class="record-detail-panel__header">\r
                                    <div>\r
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">\r
                                            {{ 'smartEnrollProjects.recordDetail.section.events' | transloco }}\r
                                        </h2>\r
                                        <p class="mt-0.5 text-xs text-stone-500 dark:text-stone-400">\r
                                            {{ 'smartEnrollProjects.recordDetail.section.eventsHint' | transloco }}\r
                                        </p>\r
                                    </div>\r
                                </div>\r
                                <div class="no-print p-4 md:p-6">\r
                                    <webhook-events #eventsPanel [appRegistrationId]="r._id"></webhook-events>\r
                                </div>\r
                            </div>\r
                        </section>\r
\r
                        <div class="no-print flex flex-col gap-3 border-t border-stone-200/90 pt-8 dark:border-gray-800">\r
                            @if (deleteErrorKey()) {\r
                                <div\r
                                    class="rounded-xl border border-red-200/90 bg-red-50/90 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"\r
                                >\r
                                    {{ deleteErrorKey()! | transloco }}\r
                                </div>\r
                            }\r
                            <div class="flex flex-wrap items-center gap-3">\r
                                <button\r
                                    mat-stroked-button\r
                                    type="button"\r
                                    color="warn"\r
                                    class="rounded-xl"\r
                                    [disabled]="deleteLoading()"\r
                                    (click)="confirmDeleteRecord()"\r
                                >\r
                                    {{ 'smartEnrollProjects.recordDetail.deleteEnrollment' | transloco }}\r
                                </button>\r
                                @if (deleteLoading()) {\r
                                    <mat-spinner diameter="24"></mat-spinner>\r
                                }\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                }\r
            }\r
        </div>\r
    </main>\r
\r
    @if (record(); as r) {\r
        <div class="print-only" [id]="printSectionId">\r
        <section class="enrollment-resume" [style]="brandingVars()">\r
            <header class="enrollment-resume__header">\r
                @if (hasEnrollmentSelfie(r)) {\r
                    <img class="enrollment-resume__avatar" [src]="enrollmentSelfieSrc(r)" alt="" />\r
                }\r
                <div class="enrollment-resume__identity">\r
                    <h1 class="enrollment-resume__name">{{ displayName(r) }}</h1>\r
                    <p class="enrollment-resume__tagline">\r
                        {{ 'smartEnrollProjects.recordDetail.resume.tagline' | transloco }}\r
                    </p>\r
                    @if (resumeFacts(r).length) {\r
                        <p class="enrollment-resume__facts">\r
                            @for (fact of resumeFacts(r); track fact) {\r
                                <span>{{ fact }}</span>\r
                            }\r
                        </p>\r
                    }\r
                    <p class="enrollment-resume__id">{{ r._id }}</p>\r
                </div>\r
                <div class="enrollment-resume__meta">\r
                    @if (projectLogo()) {\r
                        <img class="enrollment-resume__logo" [src]="projectLogo()" alt="" />\r
                    }\r
                    @if (r.status) {\r
                        <span class="enrollment-resume__status">{{ statusLabel(r.status) }}</span>\r
                    }\r
                    <span class="enrollment-resume__date">{{ formatDate(r.updatedAt || r.createdAt) }}</span>\r
                </div>\r
            </header>\r
\r
            <div [class.enrollment-resume__two-col]="resumePersonalRows(r).length" [class.enrollment-resume__one-col]="!resumePersonalRows(r).length">\r
                @if (resumeContactRows(r).length) {\r
                    <section class="enrollment-resume__card">\r
                        <h2 class="enrollment-resume__card-title">\r
                            {{ 'smartEnrollProjects.recordDetail.resume.contact' | transloco }}\r
                        </h2>\r
                        <dl class="enrollment-resume__list">\r
                            @for (row of resumeContactRows(r); track row.key) {\r
                                <div class="enrollment-resume__row">\r
                                    <dt>{{ 'smartEnrollProjects.recordDetail.field.' + row.key | transloco }}</dt>\r
                                    <dd>\r
                                        <span>{{ row.value }}</span>\r
                                        @if (row.validated) {\r
                                            <span class="enrollment-resume__badge">\r
                                                {{ 'smartEnrollProjects.recordDetail.validated' | transloco }}\r
                                            </span>\r
                                        }\r
                                    </dd>\r
                                </div>\r
                            }\r
                        </dl>\r
                    </section>\r
                }\r
\r
                @if (resumePersonalRows(r).length) {\r
                    <section class="enrollment-resume__card">\r
                        <h2 class="enrollment-resume__card-title">\r
                            {{ 'smartEnrollProjects.recordDetail.resume.personal' | transloco }}\r
                        </h2>\r
                        <dl class="enrollment-resume__list">\r
                            @for (row of resumePersonalRows(r); track row.key) {\r
                                <div class="enrollment-resume__row">\r
                                    <dt>{{ fieldLabel(row.key) }}</dt>\r
                                    <dd>{{ row.value }}</dd>\r
                                </div>\r
                            }\r
                        </dl>\r
                    </section>\r
                }\r
            </div>\r
\r
            @if (hasDocumentScans(r) || resumeDocumentFields().length) {\r
                <section class="enrollment-resume__card">\r
                    <h2 class="enrollment-resume__card-title">\r
                        {{ 'smartEnrollProjects.recordDetail.resume.identityDocument' | transloco }}\r
                    </h2>\r
                    @if (hasDocumentScans(r)) {\r
                        <div class="enrollment-resume__doc-grid">\r
                            @if (documentFrontSrc(r)) {\r
                                <figure>\r
                                    <img [src]="documentFrontSrc(r)" alt="" />\r
                                    <figcaption>\r
                                        {{ 'smartEnrollProjects.recordDetail.frontScan' | transloco }}\r
                                    </figcaption>\r
                                </figure>\r
                            }\r
                            @if (hasDocumentFace(r)) {\r
                                <figure>\r
                                    <img [src]="documentFaceSrc(r)" alt="" />\r
                                    <figcaption>\r
                                        {{ 'smartEnrollProjects.recordDetail.documentFace' | transloco }}\r
                                    </figcaption>\r
                                </figure>\r
                            }\r
                            @if (documentBackSrc(r)) {\r
                                <figure>\r
                                    <img [src]="documentBackSrc(r)" alt="" />\r
                                    <figcaption>\r
                                        {{ 'smartEnrollProjects.recordDetail.backScan' | transloco }}\r
                                    </figcaption>\r
                                </figure>\r
                            }\r
                        </div>\r
                    }\r
                    @if (resumeDocumentFields().length) {\r
                        <dl class="enrollment-resume__list enrollment-resume__list--two-col">\r
                            @if (resumeDocumentFullName()) {\r
                                <div class="enrollment-resume__row enrollment-resume__row--full">\r
                                    <dt>{{ 'smartEnrollProjects.recordDetail.resume.extractedName' | transloco }}</dt>\r
                                    <dd>{{ resumeDocumentFullName() }}</dd>\r
                                </div>\r
                            }\r
                            @for (row of resumeDocumentFields(); track row.key) {\r
                                <div class="enrollment-resume__row">\r
                                    <dt>{{ row.key }}</dt>\r
                                    <dd>{{ row.value }}</dd>\r
                                </div>\r
                            }\r
                        </dl>\r
                    }\r
                </section>\r
            }\r
\r
            @if (livenessMinScorePercent() != null || compareMinScorePercent() != null || showNameMatchCard()) {\r
                <section class="enrollment-resume__card">\r
                    <h2 class="enrollment-resume__card-title">\r
                        {{ 'smartEnrollProjects.recordDetail.resume.biometrics' | transloco }}\r
                    </h2>\r
                    <div class="enrollment-resume__scores">\r
                        @if (livenessMinScorePercent() != null) {\r
                            <div class="enrollment-resume__score" [style]="scoreBarVars(livenessDisplayPercent())">\r
                                <span class="enrollment-resume__score-label">\r
                                    {{ 'smartEnrollProjects.recordDetail.livenessScore' | transloco }}\r
                                </span>\r
                                <span class="enrollment-resume__score-value">{{ livenessDisplayPercent() }}%</span>\r
                                <span class="enrollment-resume__score-min">\r
                                    {{ 'smartEnrollProjects.recordDetail.livenessMinimum' | transloco }} {{ livenessMinScorePercent() }}%\r
                                </span>\r
                            </div>\r
                        }\r
                        @if (compareMinScorePercent() != null) {\r
                            <div class="enrollment-resume__score" [style]="scoreBarVars(compareScore())">\r
                                <span class="enrollment-resume__score-label">\r
                                    {{ 'smartEnrollProjects.recordDetail.compareScore' | transloco }}\r
                                </span>\r
                                <span class="enrollment-resume__score-value">{{ compareScore() }}%</span>\r
                                <span class="enrollment-resume__score-min">\r
                                    {{ 'smartEnrollProjects.recordDetail.compareMinimum' | transloco }} {{ compareMinScorePercent() }}%\r
                                </span>\r
                            </div>\r
                        }\r
                    </div>\r
\r
                    @if (showNameMatchCard()) {\r
                        @let nmDoc = nameMatchColumn(r, 'document');\r
                        @let nmForm = nameMatchColumn(r, 'information');\r
                        <div class="enrollment-resume__name-match">\r
                            @if (nameVerificationPending()) {\r
                                <div>\r
                                    <p>{{ 'smartEnrollProjects.recordDetail.nameMatchNotPerformed' | transloco }}</p>\r
                                </div>\r
                            }\r
                            @if (nameMatchColumnHasData(nmDoc)) {\r
                                <div>\r
                                    <h3>{{ 'smartEnrollProjects.recordDetail.compareGovernmentId' | transloco }}</h3>\r
                                    <ul>\r
                                        <li>\r
                                            {{ 'smartEnrollProjects.recordDetail.firstNameMatch' | transloco }}\r
                                            <strong>{{ formatNameMatchPercent(nmDoc.firstNameMatchPercentage) }}</strong>\r
                                        </li>\r
                                        <li>\r
                                            {{ 'smartEnrollProjects.recordDetail.lastNameMatch' | transloco }}\r
                                            <strong>{{ formatNameMatchPercent(nmDoc.lastNameMatchPercentage) }}</strong>\r
                                        </li>\r
                                        <li>\r
                                            {{ 'smartEnrollProjects.recordDetail.fullNameMatch' | transloco }}\r
                                            <strong>{{ formatNameMatchPercent(nmDoc.fullNameMatchPercentage) }}</strong>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            }\r
                            @if (nameMatchColumnHasData(nmForm)) {\r
                                <div>\r
                                    <h3>{{ 'smartEnrollProjects.recordDetail.compareGovernmentForm' | transloco }}</h3>\r
                                    <ul>\r
                                        <li>\r
                                            {{ 'smartEnrollProjects.recordDetail.firstNameMatch' | transloco }}\r
                                            <strong>{{ formatNameMatchPercent(nmForm.firstNameMatchPercentage) }}</strong>\r
                                        </li>\r
                                        <li>\r
                                            {{ 'smartEnrollProjects.recordDetail.lastNameMatch' | transloco }}\r
                                            <strong>{{ formatNameMatchPercent(nmForm.lastNameMatchPercentage) }}</strong>\r
                                        </li>\r
                                        <li>\r
                                            {{ 'smartEnrollProjects.recordDetail.fullNameMatch' | transloco }}\r
                                            <strong>{{ formatNameMatchPercent(nmForm.fullNameMatchPercentage) }}</strong>\r
                                        </li>\r
                                    </ul>\r
                                </div>\r
                            }\r
                        </div>\r
                    }\r
                </section>\r
            }\r
\r
            <section class="enrollment-resume__card enrollment-resume__card--verdict">\r
                <h2 class="enrollment-resume__card-title">\r
                    {{ 'smartEnrollProjects.recordDetail.resume.verdict' | transloco }}\r
                </h2>\r
                <p class="enrollment-resume__verdict-title">\r
                    {{ verdictTitleKey(r.status) | transloco }}\r
                </p>\r
                <p class="enrollment-resume__verdict-sub">\r
                    {{ verdictSubtitleKey(r.status) | transloco }}\r
                </p>\r
                @if (manualReasons().length) {\r
                    <ul class="enrollment-resume__reasons">\r
                        @for (reason of manualReasons(); track reason.key) {\r
                            <li>{{ reason.key | transloco: reason.params }}</li>\r
                        }\r
                    </ul>\r
                }\r
            </section>\r
\r
            <footer class="enrollment-resume__footer">\r
                {{\r
                    'smartEnrollProjects.recordDetail.resume.recordFooter'\r
                        | transloco: { id: r._id, printedOn: printedOn() }\r
                }}\r
            </footer>\r
        </section>\r
        </div>\r
    }\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/projects/project-record-detail.component.scss */\n:host {\n  display: block;\n}\n.record-detail-panel {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.record-detail-panel:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.record-detail-panel {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.record-detail-panel__header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n@media (min-width: 960px) {\n  .record-detail-panel__header {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n}\n.record-detail-panel__header:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.record-detail-meta {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n}\n.record-detail-meta:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.record-detail-meta {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.record-detail-code {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.record-detail-code:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.record-stepper-btn {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: transparent;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.record-stepper-btn:hover {\n  border-color: rgb(231 229 228 / 0.8);\n  background-color: rgb(250 250 249 / 0.9);\n}\n.record-stepper-btn:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(30 41 59 / 0.5);\n}\n.record-stepper-btn--active {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n  background-color: rgb(245 245 244 / 0.9);\n}\n.record-stepper-btn--active:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n  background-color: rgb(30 41 59 / 0.8);\n}\n.record-stepper-icon--ok {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--ok:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--error {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--error:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--warn {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--warn:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--info {\n  --tw-text-opacity: 1;\n  color: rgb(2 132 199 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--info:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(56 189 248 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--pending {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--pending:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.verdict-card {\n  border-radius: 1rem;\n  border-width: 1px;\n  padding: 1.5rem;\n}\n@media (min-width: 960px) {\n  .verdict-card {\n    padding: 2rem;\n  }\n}\n.verdict-card--neutral {\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.verdict-card--neutral:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.verdict-card--error {\n  border-color: rgb(254 202 202 / 0.8);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.verdict-card--error:where(.dark, .dark *) {\n  border-color: rgb(127 29 29 / 0.4);\n  background-color: rgb(15 23 42 / 0.4);\n}\n.verdict-icon-badge {\n  display: flex;\n  height: 3.5rem;\n  width: 3.5rem;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n}\n.verdict-icon-badge mat-icon {\n  width: 28px;\n  height: 28px;\n  font-size: 28px;\n  line-height: 28px;\n}\n.verdict-icon-badge--ok {\n  --tw-bg-opacity: 1;\n  background-color: rgb(236 253 245 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--ok:where(.dark, .dark *) {\n  background-color: rgb(2 44 34 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--warn {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 251 235 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--warn:where(.dark, .dark *) {\n  background-color: rgb(69 26 3 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--error {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 242 242 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--error:where(.dark, .dark *) {\n  background-color: rgb(69 10 10 / 0.4);\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--manual {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--manual:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--pending {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.verdict-icon-badge--pending:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.verdict-reasons {\n  width: 100%;\n  max-width: 32rem;\n}\n.verdict-reasons > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n.verdict-reasons {\n  padding-left: 0px;\n  text-align: left;\n  font-size: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(87 83 78 / var(--tw-text-opacity, 1));\n}\n.verdict-reasons:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.verdict-reasons {\n  list-style: none;\n}\n.verdict-reasons li {\n  position: relative;\n  padding-left: 1rem;\n}\n.verdict-reasons li::before {\n  content: "";\n  position: absolute;\n  left: 0px;\n  top: 0.55em;\n  height: 0.375rem;\n  width: 0.375rem;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(168 162 158 / var(--tw-bg-opacity, 1));\n}\n.verdict-reasons li:where(.dark, .dark *)::before {\n  --tw-bg-opacity: 1;\n  background-color: rgb(120 113 108 / var(--tw-bg-opacity, 1));\n}\n.triage-btn {\n  display: flex;\n  flex: 1 1 0%;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border-width: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.triage-btn:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity, 1));\n}\n.triage-btn:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n  --tw-ring-offset-width: 1px;\n}\n.triage-btn:focus-visible:where(.dark, .dark *) {\n  --tw-ring-offset-color: #020617;\n}\n.triage-btn--ok {\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(4 120 87 / var(--tw-text-opacity, 1));\n}\n.triage-btn--ok:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(167 243 208 / var(--tw-border-opacity, 1));\n  background-color: rgb(236 253 245 / 0.8);\n}\n.triage-btn--ok:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.triage-btn--ok:hover:where(.dark, .dark *) {\n  border-color: rgb(6 78 59 / 0.6);\n  background-color: rgb(2 44 34 / 0.2);\n}\n.triage-btn--ok:focus-visible {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(110 231 183 / var(--tw-ring-opacity, 1));\n}\n.triage-btn--ok:focus-visible:where(.dark, .dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(6 95 70 / var(--tw-ring-opacity, 1));\n}\n.triage-btn--warn {\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(180 83 9 / var(--tw-text-opacity, 1));\n}\n.triage-btn--warn:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(253 230 138 / var(--tw-border-opacity, 1));\n  background-color: rgb(255 251 235 / 0.8);\n}\n.triage-btn--warn:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.triage-btn--warn:hover:where(.dark, .dark *) {\n  border-color: rgb(120 53 15 / 0.6);\n  background-color: rgb(69 26 3 / 0.2);\n}\n.triage-btn--warn:focus-visible {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(252 211 77 / var(--tw-ring-opacity, 1));\n}\n.triage-btn--warn:focus-visible:where(.dark, .dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(146 64 14 / var(--tw-ring-opacity, 1));\n}\n.triage-btn--error {\n  --tw-border-opacity: 1;\n  border-color: rgb(231 229 228 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity, 1));\n}\n.triage-btn--error:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 202 202 / var(--tw-border-opacity, 1));\n  background-color: rgb(254 242 242 / 0.8);\n}\n.triage-btn--error:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.triage-btn--error:hover:where(.dark, .dark *) {\n  border-color: rgb(127 29 29 / 0.6);\n  background-color: rgb(69 10 10 / 0.2);\n}\n.triage-btn--error:focus-visible {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(252 165 165 / var(--tw-ring-opacity, 1));\n}\n.triage-btn--error:focus-visible:where(.dark, .dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(153 27 27 / var(--tw-ring-opacity, 1));\n}\n.record-doc-thumb {\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  padding: 0;\n  border-radius: 1rem;\n}\n.record-doc-thumb:hover .record-doc-img {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(214 211 209 / var(--tw-ring-opacity, 1));\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-color: #fff;\n}\n.record-doc-thumb:hover .record-doc-img:where(.dark, .dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(71 85 105 / var(--tw-ring-opacity, 1));\n  --tw-ring-offset-color: #0f172a;\n}\n.record-doc-thumb:focus-visible {\n  outline: 2px solid rgb(168, 162, 158);\n  outline-offset: 2px;\n}\n.record-doc-thumb:focus-visible .record-doc-img {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(168 162 158 / var(--tw-ring-opacity, 1));\n}\n.record-doc-thumb:focus-visible .record-doc-img:where(.dark, .dark *) {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(120 113 108 / var(--tw-ring-opacity, 1));\n}\n.record-doc-img {\n  max-height: 16rem;\n  width: 100%;\n  max-width: 28rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  object-fit: contain;\n}\n.record-doc-img:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n}\n.record-progress-track {\n  height: 0.5rem;\n  width: 100%;\n  max-width: 28rem;\n  overflow: hidden;\n  border-radius: 9999px;\n  background-color: rgb(231 229 228 / 0.8);\n}\n.record-progress-track:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n}\n.record-progress-fill {\n  height: 100%;\n  border-radius: 9999px;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 500ms;\n}\n.print-only {\n  display: none;\n}\n.enrollment-resume {\n  --resume-primary: #111827;\n  --resume-ink: #0f172a;\n  --resume-muted: #667085;\n  --resume-faint: #98a2b3;\n  --resume-rule: #eceff1;\n  --resume-track: #f2f4f7;\n  color: var(--resume-ink);\n  background: #ffffff;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "SF Pro Text",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  font-feature-settings:\n    "cv11",\n    "ss01",\n    "ss03",\n    "tnum";\n  font-variant-numeric: tabular-nums;\n  font-size: 10pt;\n  line-height: 1.4;\n  orphans: 3;\n  widows: 3;\n}\n.enrollment-resume__header {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: flex-start;\n  gap: 16pt;\n  padding-bottom: 12pt;\n  border-bottom: 0.5pt solid var(--resume-rule);\n  margin-bottom: 14pt;\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n.enrollment-resume__avatar {\n  width: 24mm;\n  height: 24mm;\n  object-fit: cover;\n  border-radius: 3pt;\n  border: 0.5pt solid var(--resume-rule);\n  background: var(--resume-track);\n}\n.enrollment-resume__identity {\n  min-width: 0;\n}\n.enrollment-resume__name {\n  margin: 0;\n  font-size: 24pt;\n  font-weight: 600;\n  letter-spacing: -0.022em;\n  line-height: 1.05;\n  color: var(--resume-ink);\n}\n.enrollment-resume__tagline {\n  margin: 4pt 0 0;\n  font-size: 7.5pt;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  color: var(--resume-faint);\n  font-weight: 500;\n}\n.enrollment-resume__id {\n  margin: 8pt 0 0;\n  font-family:\n    "JetBrains Mono",\n    "SFMono-Regular",\n    Menlo,\n    Consolas,\n    monospace;\n  font-size: 8pt;\n  color: var(--resume-muted);\n  word-break: break-all;\n}\n.enrollment-resume__facts {\n  margin: 6pt 0 0;\n  font-size: 9pt;\n  color: var(--resume-muted);\n  letter-spacing: 0;\n  line-height: 1.3;\n}\n.enrollment-resume__facts span + span::before {\n  content: " \\b7  ";\n  color: var(--resume-faint);\n}\n.enrollment-resume__one-col {\n  display: block;\n}\n.enrollment-resume__meta {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6pt;\n}\n.enrollment-resume__logo {\n  max-width: 26mm;\n  max-height: 12mm;\n  object-fit: contain;\n  margin-bottom: 4pt;\n}\n.enrollment-resume__status {\n  display: inline-block;\n  padding: 2.5pt 9pt;\n  border: 0.6pt solid var(--resume-primary);\n  border-radius: 999pt;\n  font-size: 7.5pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: var(--resume-primary);\n}\n.enrollment-resume__date {\n  font-size: 8.5pt;\n  color: var(--resume-muted);\n  font-variant-numeric: tabular-nums;\n}\n.enrollment-resume__two-col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 24pt;\n  row-gap: 0;\n}\n.enrollment-resume__card {\n  padding: 12pt 0;\n  border-top: 0.4pt solid var(--resume-rule);\n}\n.enrollment-resume__card:first-of-type,\n.enrollment-resume__two-col .enrollment-resume__card {\n  border-top: 0;\n  padding-top: 0;\n}\n.enrollment-resume__card-title {\n  margin: 0 0 8pt;\n  font-size: 7.5pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: var(--resume-muted);\n  page-break-after: avoid;\n  break-after: avoid;\n}\n.enrollment-resume__list {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0;\n}\n.enrollment-resume__list--two-col {\n  grid-template-columns: 1fr 1fr;\n  column-gap: 24pt;\n}\n.enrollment-resume__row {\n  display: grid;\n  grid-template-columns: 110pt 1fr;\n  column-gap: 12pt;\n  padding: 2.5pt 0;\n  align-items: baseline;\n}\n.enrollment-resume__row--full {\n  grid-column: 1/-1;\n}\n.enrollment-resume__row dt {\n  font-size: 8pt;\n  color: var(--resume-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 500;\n}\n.enrollment-resume__row dd {\n  margin: 0;\n  font-size: 10pt;\n  color: var(--resume-ink);\n  font-weight: 500;\n  word-break: break-word;\n}\n.enrollment-resume__badge {\n  display: inline-block;\n  margin-left: 6pt;\n  padding: 0.5pt 5pt;\n  border-radius: 3pt;\n  font-size: 7pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #047857;\n  background: rgba(16, 185, 129, 0.1);\n}\n.enrollment-resume__doc-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 10pt;\n  row-gap: 6pt;\n  margin-bottom: 10pt;\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n.enrollment-resume__doc-grid figure {\n  margin: 0;\n  text-align: center;\n}\n.enrollment-resume__doc-grid figure img {\n  width: 100%;\n  max-height: 32mm;\n  object-fit: contain;\n  border: 0.5pt solid var(--resume-rule);\n  border-radius: 2pt;\n  background: var(--resume-track);\n}\n.enrollment-resume__doc-grid figure figcaption {\n  margin-top: 4pt;\n  font-size: 7.5pt;\n  color: var(--resume-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.enrollment-resume__scores {\n  display: flex;\n  flex-direction: column;\n  gap: 10pt;\n}\n.enrollment-resume__score {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  column-gap: 12pt;\n  align-items: baseline;\n  padding-bottom: 4pt;\n  page-break-inside: avoid;\n  break-inside: avoid;\n  position: relative;\n}\n.enrollment-resume__score::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.5pt;\n  background:\n    linear-gradient(\n      to right,\n      var(--resume-primary) 0%,\n      var(--resume-primary) calc(var(--v, 0) * 1%),\n      var(--resume-track) calc(var(--v, 0) * 1%),\n      var(--resume-track) 100%);\n  border-radius: 999pt;\n}\n.enrollment-resume__score-label {\n  font-weight: 500;\n  font-size: 9.5pt;\n  color: var(--resume-ink);\n}\n.enrollment-resume__score-value {\n  font-weight: 600;\n  font-size: 13pt;\n  color: var(--resume-ink);\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.01em;\n}\n.enrollment-resume__score-min {\n  font-size: 8pt;\n  color: var(--resume-muted);\n  white-space: nowrap;\n}\n.enrollment-resume__name-match {\n  margin-top: 12pt;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18pt;\n}\n.enrollment-resume__name-match h3 {\n  margin: 0 0 6pt;\n  font-size: 7.5pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: var(--resume-muted);\n}\n.enrollment-resume__name-match ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.enrollment-resume__name-match ul li {\n  display: flex;\n  justify-content: space-between;\n  padding: 2.5pt 0;\n  font-size: 9.5pt;\n  color: var(--resume-ink);\n}\n.enrollment-resume__name-match ul li strong {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.enrollment-resume__card--verdict {\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n.enrollment-resume__verdict-title {\n  margin: 0;\n  font-size: 13pt;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--resume-ink);\n}\n.enrollment-resume__verdict-sub {\n  margin: 3pt 0 0;\n  font-size: 9.5pt;\n  color: var(--resume-muted);\n}\n.enrollment-resume__reasons {\n  margin: 8pt 0 0;\n  padding-left: 14pt;\n  font-size: 9pt;\n  color: var(--resume-muted);\n}\n.enrollment-resume__reasons li {\n  padding: 1pt 0;\n}\n.enrollment-resume__footer {\n  margin-top: 18pt;\n  padding-top: 8pt;\n  border-top: 0.4pt solid var(--resume-rule);\n  font-size: 7.5pt;\n  color: var(--resume-faint);\n  text-align: center;\n  letter-spacing: 0.04em;\n}\n@media print {\n  :host {\n    display: block;\n    background: #fff !important;\n  }\n  .no-print {\n    display: none !important;\n  }\n  :host > div > header,\n  :host > div > main {\n    display: none !important;\n  }\n  .print-only {\n    display: block !important;\n  }\n  @page {\n    size: A4;\n    margin: 12mm;\n  }\n  * {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n.dev-view {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.dev-view__header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n}\n.dev-view__header:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.dev-view__header {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.dev-view__title-block {\n  min-width: 0px;\n  flex: 1 1 0%;\n}\n.dev-view__resume-callout {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(191 219 254 / 0.8);\n  background-color: rgb(239 246 255 / 0.8);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.dev-view__resume-callout:where(.dark, .dark *) {\n  border-color: rgb(30 58 138 / 0.5);\n  background-color: rgb(23 37 84 / 0.3);\n}\n.dev-view__resume-callout-text {\n  margin: 0px;\n  min-width: 0px;\n  flex: 1 1 0%;\n  font-size: 0.75rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.dev-view__resume-callout-text:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(231 229 228 / var(--tw-text-opacity, 1));\n}\n.dev-view__resume-help {\n  margin-right: -0.25rem;\n  margin-top: -0.25rem;\n  flex-shrink: 0;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.dev-view__resume-help:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.dev-view__card {\n  overflow: hidden;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.dev-view__card:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.dev-view__card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.dev-view__card-header:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.dev-view__card-title {\n  min-width: 0px;\n  flex: 1 1 0%;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: -0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(41 37 36 / var(--tw-text-opacity, 1));\n}\n.dev-view__card-title:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(245 245 244 / var(--tw-text-opacity, 1));\n}\n.dev-view__card-actions {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  gap: 0.125rem;\n}\n.dev-view__api,\n.dev-view__copy {\n  height: 2rem;\n  width: 2rem;\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.dev-view__api:where(.dark, .dark *),\n.dev-view__copy:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.dev-json {\n  margin: 0px;\n  max-height: 420px;\n  overflow: auto;\n  --tw-bg-opacity: 1;\n  background-color: rgb(12 10 9 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.625rem;\n  line-height: 1.625;\n  --tw-text-opacity: 1;\n  color: rgb(245 245 244 / var(--tw-text-opacity, 1));\n}\n.dev-json:where(.dark, .dark *) {\n  background-color: rgb(0 0 0 / 0.6);\n}\n.dev-json {\n  white-space: pre;\n  word-break: normal;\n}\n.dev-view__webhook-events {\n  padding: 0.75rem;\n}\n@media (min-width: 960px) {\n  .dev-view__webhook-events {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=project-record-detail.component.css.map */\n'] }]
  }], null, { _eventsPanel: [{
    type: ViewChild,
    args: ["eventsPanel"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectRecordDetailComponent, { className: "ProjectRecordDetailComponent", filePath: "src/app/modules/smart-enroll/projects/project-record-detail.component.ts", lineNumber: 235 });
})();
export {
  ProjectRecordDetailComponent
};
//# sourceMappingURL=chunk-5QCQ3LJQ.js.map
