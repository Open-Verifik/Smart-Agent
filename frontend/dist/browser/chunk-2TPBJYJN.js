import {
  buildManualVerificationReasons,
  cleanOcrExtraction,
  compareMinScoreDisplayPercent,
  livenessMinScoreDisplayPercent,
  normalizeUnitScore,
  pickEnrollmentFaceMedia,
  scoreToPercent,
  showNameVerificationSection
} from "./chunk-L5TNKDIK.js";
import {
  ScanDeleteConfirmDialogComponent
} from "./chunk-KS5TOSVI.js";
import {
  SmartEnrollProjectsService
} from "./chunk-YSERIMFI.js";
import {
  Clipboard
} from "./chunk-FUHKLPA6.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DXMIRT7Q.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-EPB35CWV.js";
import "./chunk-GMB4P7VL.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import {
  DateTime
} from "./chunk-BAVSUFW7.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-KCV7S453.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-LHOHCIQM.js";
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
  CSP_NONCE,
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
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgClass,
  NgModule,
  Optional,
  Output,
  Subject,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
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
  ɵɵtextInterpolate2
} from "./chunk-YTOBX75K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

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

// src/app/modules/smart-enroll/projects/enroll-resend-link-dialog.component.ts
function EnrollResendLinkDialogComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon", 6);
    \u0275\u0275text(2, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.recipientEmail);
  }
}
function EnrollResendLinkDialogComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 17);
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
function EnrollResendLinkDialogComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordDetail.resendNoEmail"), " ");
  }
}
function EnrollResendLinkDialogComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "mat-spinner", 18);
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
  close() {
    this._dialogRef.close();
  }
  static {
    this.\u0275fac = function EnrollResendLinkDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EnrollResendLinkDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnrollResendLinkDialogComponent, selectors: [["enroll-resend-link-dialog"]], decls: 33, vars: 22, consts: [[1, "flex", "items-start", "justify-between", "gap-4"], ["mat-dialog-title", "", 1, "!m-0", "!font-semibold", "!text-lg", "!leading-snug", "!tracking-tight", "text-stone-900", "dark:text-white", "md:!text-xl"], ["mat-icon-button", "", "type", "button", 1, "!text-stone-500", "dark:!text-stone-400", 3, "click"], [1, "mt-1", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "mt-5", "rounded-xl", "border", "border-stone-200/90", "bg-stone-50", "p-4", "dark:border-gray-800", "dark:bg-gray-900/60"], [1, "flex", "items-center", "gap-2"], [1, "icon-size-4", "!text-stone-500"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-200"], [1, "mt-2", "flex", "items-center", "gap-2"], [1, "mt-4", "rounded-xl", "border", "border-blue-200/80", "bg-blue-50/80", "p-4", "dark:border-blue-900/50", "dark:bg-blue-950/30"], [1, "mt-5", "flex", "flex-col", "gap-3"], ["mat-stroked-button", "", "type", "button", "color", "primary", 1, "!h-11", "!rounded-xl", 3, "click", "disabled"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "!h-11", "!rounded-xl", 3, "click", "disabled"], [1, "text-center", "text-xs", "text-red-600", "dark:text-red-400"], [1, "mt-4", "flex", "items-center", "justify-center", "gap-2", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "text-xs", "font-semibold", "text-blue-700", "dark:text-blue-300"], [1, "mt-2", "break-all", "rounded-lg", "bg-white/90", "px-3", "py-2", "font-mono", "text-xs", "text-stone-700", "dark:bg-gray-950/80", "dark:text-stone-200"], ["diameter", "20"]], template: function EnrollResendLinkDialogComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(12, "div", 4)(13, "div", 5)(14, "mat-icon", 6);
        \u0275\u0275text(15, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 7);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, EnrollResendLinkDialogComponent_Conditional_18_Template, 5, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, EnrollResendLinkDialogComponent_Conditional_19_Template, 6, 4, "div", 9);
        \u0275\u0275elementStart(20, "div", 10)(21, "button", 11);
        \u0275\u0275listener("click", function EnrollResendLinkDialogComponent_Template_button_click_21_listener() {
          return ctx.copyLink();
        });
        \u0275\u0275elementStart(22, "mat-icon");
        \u0275\u0275text(23, "content_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 12);
        \u0275\u0275listener("click", function EnrollResendLinkDialogComponent_Template_button_click_26_listener() {
          return ctx.sendEmail();
        });
        \u0275\u0275elementStart(27, "mat-icon");
        \u0275\u0275text(28, "send");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, EnrollResendLinkDialogComponent_Conditional_31_Template, 3, 3, "p", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, EnrollResendLinkDialogComponent_Conditional_32_Template, 5, 3, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "smartEnrollProjects.recordDetail.resendDialogTitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 14, "smartEnrollProjects.recordDetail.resendDialogClose"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 16, "smartEnrollProjects.recordDetail.resendDialogDescription"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.recipientName || "\u2014");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.recipientEmail ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showLink() && ctx.generatedLink() ? 19 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 18, "smartEnrollProjects.recordDetail.resendCopyLink"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading() || !ctx.recipientEmail);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 20, "smartEnrollProjects.recordDetail.resendSendEmail"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.recipientEmail ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 32 : -1);
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
      TranslocoModule
    ], template: `<div class="flex items-start justify-between gap-4">
    <h2
        mat-dialog-title
        class="!m-0 !font-semibold !text-lg !leading-snug !tracking-tight text-stone-900 dark:text-white md:!text-xl"
    >
        {{ 'smartEnrollProjects.recordDetail.resendDialogTitle' | transloco }}
    </h2>
    <button
        mat-icon-button
        type="button"
        class="!text-stone-500 dark:!text-stone-400"
        (click)="close()"
        [attr.aria-label]="'smartEnrollProjects.recordDetail.resendDialogClose' | transloco"
    >
        <mat-icon>close</mat-icon>
    </button>
</div>

<mat-dialog-content>
    <p class="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {{ 'smartEnrollProjects.recordDetail.resendDialogDescription' | transloco }}
    </p>

    <div class="mt-5 rounded-xl border border-stone-200/90 bg-stone-50 p-4 dark:border-gray-800 dark:bg-gray-900/60">
        <div class="flex items-center gap-2">
            <mat-icon class="icon-size-4 !text-stone-500">person</mat-icon>
            <span class="text-sm font-medium text-stone-700 dark:text-stone-200">{{ recipientName || '\u2014' }}</span>
        </div>
        @if (recipientEmail) {
            <div class="mt-2 flex items-center gap-2">
                <mat-icon class="icon-size-4 !text-stone-500">mail</mat-icon>
                <span class="text-sm text-stone-600 dark:text-stone-300">{{ recipientEmail }}</span>
            </div>
        }
    </div>

    @if (showLink() && generatedLink()) {
        <div class="mt-4 rounded-xl border border-blue-200/80 bg-blue-50/80 p-4 dark:border-blue-900/50 dark:bg-blue-950/30">
            <p class="text-xs font-semibold text-blue-700 dark:text-blue-300">
                {{ 'smartEnrollProjects.recordDetail.resendGeneratedLink' | transloco }}
            </p>
            <p class="mt-2 break-all rounded-lg bg-white/90 px-3 py-2 font-mono text-xs text-stone-700 dark:bg-gray-950/80 dark:text-stone-200">
                {{ generatedLink() }}
            </p>
        </div>
    }

    <div class="mt-5 flex flex-col gap-3">
        <button
            mat-stroked-button
            type="button"
            color="primary"
            class="!h-11 !rounded-xl"
            [disabled]="loading()"
            (click)="copyLink()"
        >
            <mat-icon>content_copy</mat-icon>
            {{ 'smartEnrollProjects.recordDetail.resendCopyLink' | transloco }}
        </button>

        <button
            mat-flat-button
            type="button"
            color="primary"
            class="!h-11 !rounded-xl"
            [disabled]="loading() || !recipientEmail"
            (click)="sendEmail()"
        >
            <mat-icon>send</mat-icon>
            {{ 'smartEnrollProjects.recordDetail.resendSendEmail' | transloco }}
        </button>

        @if (!recipientEmail) {
            <p class="text-center text-xs text-red-600 dark:text-red-400">
                {{ 'smartEnrollProjects.recordDetail.resendNoEmail' | transloco }}
            </p>
        }
    </div>

    @if (loading()) {
        <div class="mt-4 flex items-center justify-center gap-2 text-sm text-stone-600 dark:text-stone-300">
            <mat-spinner diameter="20"></mat-spinner>
            <span>{{ 'smartEnrollProjects.recordDetail.resendProcessing' | transloco }}</span>
        </div>
    }
</mat-dialog-content>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnrollResendLinkDialogComponent, { className: "EnrollResendLinkDialogComponent", filePath: "src/app/modules/smart-enroll/projects/enroll-resend-link-dialog.component.ts", lineNumber: 35 });
})();

// src/app/modules/smart-enroll/projects/project-record-detail.component.ts
var _c0 = (a0) => ["/smart-enroll/projects", a0];
var _c1 = (a0) => ["/smart-enroll/projects", a0, "records"];
var _c2 = () => ["information", "email", "phone", "documents", "biometrics", "compare", "verdict"];
var _c3 = (a0, a1, a2, a3) => ({ "record-stepper-icon--ok": a0, "record-stepper-icon--error": a1, "record-stepper-icon--warn": a2, "record-stepper-icon--pending": a3 });
var _c4 = (a0) => ({ "md:grid-cols-2": a0 });
var _c5 = (a0, a1) => ({ id: a0, printedOn: a1 });
var _forTrack0 = ($index, $item) => $item.key;
function ProjectRecordDetailComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 18);
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
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_61_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openResendLinkDialog());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartEnrollProjects.recordDetail.resendLink"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-spinner", 28);
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
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
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
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
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 73);
    \u0275\u0275element(2, "img", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 75);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.enrollmentSelfieSrc(r_r5), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "smartEnrollProjects.recordDetail.livenessSelfie"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_69_Conditional_0_For_17_Template_button_click_0_listener() {
      const step_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.scrollToStep(step_r7));
    });
    \u0275\u0275elementStart(1, "mat-icon", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("record-stepper-btn--active", ctx_r2.activeStep() === step_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(7, _c3, ctx_r2.stepState(step_r7) === "ok", ctx_r2.stepState(step_r7) === "error", ctx_r2.stepState(step_r7) === "warn", ctx_r2.stepState(step_r7) === "pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.stepIcon(step_r7), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "smartEnrollProjects.recordDetail.step." + step_r7));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r5.informationValidation["updatedAt"] || r_r5.informationValidation["createdAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordDetail.empty.information"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_28_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 80);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.fieldLabel(row_r8.key), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.value);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 47);
    \u0275\u0275repeaterCreate(1, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_28_For_2_Template, 5, 2, "div", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.informationRows(r_r5));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_29_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "dt", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("sm:col-span-2", ctx_r2.technicalRowFullWidth(row_r9.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.fieldLabel(row_r9.key), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r9.value, " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 44)(2, "div", 30)(3, "h2", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 81);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 46)(10, "dl", 47);
    \u0275\u0275repeaterCreate(11, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_29_For_12_Template, 5, 4, "div", 82, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "smartEnrollProjects.recordDetail.section.technicalMetadata"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "smartEnrollProjects.recordDetail.section.technicalMetadataHint"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.technicalMetadataRows(r_r5));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_30_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r5.emailValidation["updatedAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_30_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86)(1, "mat-icon", 87);
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
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 49)(1, "div", 43)(2, "div", 44)(3, "h2", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_30_Conditional_6_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 46)(8, "p", 85);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_30_Conditional_10_Template, 5, 3, "span", 86);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, "smartEnrollProjects.recordDetail.section.email"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r5.emailValidation && r_r5.emailValidation["updatedAt"] ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (r_r5.emailValidation == null ? null : r_r5.emailValidation.email) || r_r5.email || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((r_r5.emailValidation == null ? null : r_r5.emailValidation.status) === "validated" ? 10 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_31_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r5.phoneValidation["updatedAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_31_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", r_r5.phoneValidation.countryCode, " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_31_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86)(1, "mat-icon", 87);
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
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 50)(1, "div", 43)(2, "div", 44)(3, "h2", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_31_Conditional_6_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 46)(8, "p", 85);
    \u0275\u0275template(9, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_31_Conditional_9_Template, 2, 1, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_31_Conditional_11_Template, 5, 3, "span", 86);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "smartEnrollProjects.recordDetail.section.phone"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r5.phoneValidation && r_r5.phoneValidation["updatedAt"] ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((r_r5.phoneValidation == null ? null : r_r5.phoneValidation.countryCode) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (r_r5.phoneValidation == null ? null : r_r5.phoneValidation.phone) || r_r5.phone || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((r_r5.phoneValidation == null ? null : r_r5.phoneValidation.status) === "validated" ? 11 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_33_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const failed_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(failed_r10["updatedAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_33_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 94);
    \u0275\u0275elementStart(2, "p", 95);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const failed_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.trustHttpUrl(failed_r10["url"]), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.frontScan"));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_33_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 94);
    \u0275\u0275elementStart(2, "p", 95);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const failed_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.sanitizeBase64(failed_r10["documentFace"].base64), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.documentFace"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_33_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const failed_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", failed_r10["scoreValidation"].errorMessage, " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_33_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "h2", 90);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_33_For_1_Conditional_5_Template, 2, 1, "span", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 92);
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_33_For_1_Conditional_7_Template, 5, 4, "div")(8, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_33_For_1_Conditional_8_Template, 5, 4, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_33_For_1_Conditional_9_Template, 2, 1, "div", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const failed_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, "smartEnrollProjects.recordDetail.section.documentFailed"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(failed_r10["updatedAt"] ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(failed_r10["url"] ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((failed_r10["documentFace"] == null ? null : failed_r10["documentFace"].base64) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((failed_r10["scoreValidation"] == null ? null : failed_r10["scoreValidation"].errorMessage) ? 9 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_33_For_1_Template, 10, 7, "div", 88, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    \u0275\u0275repeater(r_r5.failedDocumentValidations);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r5.documentValidation["updatedAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 94);
    \u0275\u0275elementStart(2, "p", 95);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.trustHttpUrl(r_r5.documentValidation["url"]), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.frontScan"));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 94);
    \u0275\u0275elementStart(2, "p", 95);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.documentFaceSrc(r_r5), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.documentFace"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 94);
    \u0275\u0275elementStart(2, "p", 95);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.trustHttpUrl(r_r5.documentValidation["backUrl"]), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.backScan"));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 97)(2, "h3", 99);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 100);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext(2);
    const l_r11 = r_r5.documentValidation["documentLiveness"];
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "smartEnrollProjects.recordDetail.documentLiveness"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", l_r11.isLive ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200" : "bg-red-100 text-red-900 dark:bg-red-950/50 dark:text-red-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", l_r11.isLive ? \u0275\u0275pipeBind1(7, 5, "smartEnrollProjects.recordDetail.livenessPassed") : \u0275\u0275pipeBind1(8, 7, "smartEnrollProjects.recordDetail.livenessFailed"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_11_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "p", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 106);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(key_r12);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.ocrData()[key_r12]);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 101)(2, "h3", 102);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 103);
    \u0275\u0275repeaterCreate(6, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_11_For_7_Template, 5, 2, "div", 104, \u0275\u0275repeaterTrackByIdentity);
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
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "h2", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_5_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 96);
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_7_Template, 5, 4, "div")(8, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_8_Template, 5, 4, "div")(9, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_9_Template, 5, 4, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_10_Template, 9, 9, "div", 97)(11, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Conditional_11_Template, 8, 3, "div", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "smartEnrollProjects.recordDetail.section.document"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r5.documentValidation["updatedAt"] ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r5.documentValidation["url"] ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasDocumentFace(r_r5) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r5.documentValidation["backUrl"] ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r5.documentValidation["documentLiveness"] ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.ocrDisplayKeys().length ? 11 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 107);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.empty.documents"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_37_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "h2", 90);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 108);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fb_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.section.biometricFailed"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", fb_r13["errorMessage"] || \u0275\u0275pipeBind1(7, 4, "smartEnrollProjects.recordDetail.biometricFailedHint"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_37_For_1_Template, 8, 6, "div", 88, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    \u0275\u0275repeater(r_r5.failedBiometricValidations);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_38_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r5.biometricValidation["updatedAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_38_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 110);
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.enrollmentSelfieSrc(r_r5), \u0275\u0275sanitizeUrl);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_38_Conditional_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "span", 113);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 114);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 115);
    \u0275\u0275element(7, "div", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const minLiv_r14 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "smartEnrollProjects.recordDetail.livenessMinimum"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", minLiv_r14, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", minLiv_r14, "%");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_38_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div")(2, "div", 112)(3, "span", 113);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 114);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 115);
    \u0275\u0275element(9, "div", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_38_Conditional_9_Conditional_10_Template, 8, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    const minLiv_r15 = \u0275\u0275storeLet(ctx_r2.livenessMinScorePercent());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "smartEnrollProjects.recordDetail.livenessScore"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.livenessDisplayPercent(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.livenessDisplayPercent(), "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(minLiv_r15 != null ? 10 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "h2", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_38_Conditional_5_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 109);
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_38_Conditional_7_Template, 1, 1, "img", 110);
    \u0275\u0275elementStart(8, "div", 111);
    \u0275\u0275template(9, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_38_Conditional_9_Template, 11, 8, "div");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "smartEnrollProjects.recordDetail.section.biometric"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r5.biometricValidation["updatedAt"] ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasEnrollmentSelfie(r_r5) ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r5.biometricValidation["livenessScore"] != null ? 9 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 107);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.empty.biometrics"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_41_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "span", 113);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 114);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 115);
    \u0275\u0275element(7, "div", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const minPct_r16 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "smartEnrollProjects.recordDetail.compareMinimum"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", minPct_r16, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", minPct_r16, "%");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_41_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 43)(2, "div", 44)(3, "h2", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46)(7, "div", 112)(8, "span", 113);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 114);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 115);
    \u0275\u0275element(14, "div", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_41_Conditional_0_Conditional_15_Template, 8, 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    const minPct_r17 = \u0275\u0275storeLet(ctx_r2.compareMinScorePercent());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "smartEnrollProjects.recordDetail.section.faceCompare"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "smartEnrollProjects.recordDetail.compareScore"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.compareScore(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.compareScore(), "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(minPct_r17 != null ? 15 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_41_Conditional_0_Template, 16, 11, "div", 43);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.score != null ? 0 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r5.documentValidation["updatedAt"], true));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 127);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const nmDoc_r18 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.firstNameMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmDoc_r18.firstNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 127);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const nmDoc_r18 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.lastNameMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmDoc_r18.lastNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 127);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const nmDoc_r18 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.fullNameMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmDoc_r18.fullNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 128);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const nmDoc_r18 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.field.namesMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", nmDoc_r18.namesMatch ? \u0275\u0275pipeBind1(6, 4, "smartEnrollProjects.recordDetail.boolYes") : \u0275\u0275pipeBind1(7, 6, "smartEnrollProjects.recordDetail.boolNo"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 123);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 124);
    \u0275\u0275template(5, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_10_Conditional_5_Template, 6, 4, "div", 125)(6, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_10_Conditional_6_Template, 6, 4, "div", 125)(7, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_10_Conditional_7_Template, 6, 4, "div", 125)(8, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_10_Conditional_8_Template, 8, 8, "div", 125);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const nmDoc_r18 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "smartEnrollProjects.recordDetail.compareGovernmentId"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.showNameMatchPctRow(nmDoc_r18.firstNameMatchPercentage) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatchPctRow(nmDoc_r18.lastNameMatchPercentage) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatchPctRow(nmDoc_r18.fullNameMatchPercentage) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(nmDoc_r18.namesMatch != null ? 8 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 127);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const nmForm_r19 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.firstNameMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmForm_r19.firstNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 127);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const nmForm_r19 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.lastNameMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmForm_r19.lastNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 127);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const nmForm_r19 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.fullNameMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmForm_r19.fullNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_11_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 128);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const nmForm_r19 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "smartEnrollProjects.recordDetail.field.namesMatch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", nmForm_r19.namesMatch ? \u0275\u0275pipeBind1(6, 4, "smartEnrollProjects.recordDetail.boolYes") : \u0275\u0275pipeBind1(7, 6, "smartEnrollProjects.recordDetail.boolNo"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 123);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 124);
    \u0275\u0275template(5, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_11_Conditional_5_Template, 6, 4, "div", 125)(6, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_11_Conditional_6_Template, 6, 4, "div", 125)(7, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_11_Conditional_7_Template, 6, 4, "div", 125)(8, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_11_Conditional_8_Template, 8, 8, "div", 125);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const nmForm_r19 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "smartEnrollProjects.recordDetail.compareGovernmentForm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.showNameMatchPctRow(nmForm_r19.firstNameMatchPercentage) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatchPctRow(nmForm_r19.lastNameMatchPercentage) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatchPctRow(nmForm_r19.fullNameMatchPercentage) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(nmForm_r19.namesMatch != null ? 8 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275elementStart(2, "div", 48)(3, "div", 44)(4, "h2", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_7_Template, 2, 1, "span", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 46)(9, "div", 121);
    \u0275\u0275template(10, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_10_Template, 9, 7, "div", 122)(11, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Conditional_11_Template, 9, 7, "div", 122);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    const nmDoc_r20 = \u0275\u0275storeLet(ctx_r2.nameMatchColumn(r_r5, "document"));
    \u0275\u0275advance();
    const nmForm_r21 = \u0275\u0275storeLet(ctx_r2.nameMatchColumn(r_r5, "information"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "smartEnrollProjects.recordDetail.verifyNames"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((r_r5.documentValidation == null ? null : r_r5.documentValidation["updatedAt"]) ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c4, ctx_r2.showNameMatch() || ctx_r2.nameMatchColumnHasData(nmDoc_r20) && ctx_r2.nameMatchColumnHasData(nmForm_r21)));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatch() || ctx_r2.nameMatchColumnHasData(nmDoc_r20) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatch() || ctx_r2.nameMatchColumnHasData(nmForm_r21) ? 11 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 107);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.empty.compare"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 60);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 61);
    \u0275\u0275text(1, "warning");
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 62);
    \u0275\u0275text(1, "cancel");
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 63);
    \u0275\u0275text(1, "person_search");
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 64);
    \u0275\u0275text(1, "hourglass_empty");
    \u0275\u0275elementEnd();
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_67_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reason_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, reason_r22.key, reason_r22.params));
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 67);
    \u0275\u0275repeaterCreate(1, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_67_For_2_Template, 3, 4, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.manualReasons());
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
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
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 72);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "p", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_6_Template, 2, 2, "span", 33);
    \u0275\u0275elementStart(7, "span", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 35)(10, "aside", 36);
    \u0275\u0275template(11, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_11_Template, 6, 4, "div", 37);
    \u0275\u0275elementStart(12, "p", 38);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "nav", 39);
    \u0275\u0275repeaterCreate(16, ProjectRecordDetailComponent_Conditional_69_Conditional_0_For_17_Template, 6, 12, "button", 40, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 41)(19, "section", 42)(20, "div", 43)(21, "div", 44)(22, "h2", 31);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_25_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 46);
    \u0275\u0275template(27, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_27_Template, 3, 3, "p", 34)(28, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_28_Template, 3, 0, "dl", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_29_Template, 13, 6, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_30_Template, 11, 6, "section", 49)(31, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_31_Template, 12, 7, "section", 50);
    \u0275\u0275elementStart(32, "section", 51);
    \u0275\u0275template(33, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_33_Template, 2, 0)(34, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_34_Template, 12, 9, "div", 43)(35, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_35_Template, 4, 3, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "section", 52);
    \u0275\u0275template(37, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_37_Template, 2, 0)(38, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_38_Template, 10, 6, "div", 43)(39, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_39_Template, 4, 3, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "section", 53);
    \u0275\u0275template(41, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_41_Template, 1, 1)(42, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_42_Template, 12, 11, "div", 48)(43, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_43_Template, 4, 3, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "section", 54)(45, "div", 55)(46, "div", 44)(47, "h2", 31);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 56);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 57)(53, "div", 58)(54, "div", 59);
    \u0275\u0275template(55, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_55_Template, 2, 0, "mat-icon", 60)(56, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_56_Template, 2, 0, "mat-icon", 61)(57, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_57_Template, 2, 0, "mat-icon", 62)(58, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_58_Template, 2, 0, "mat-icon", 63)(59, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_59_Template, 2, 0, "mat-icon", 64);
    \u0275\u0275elementStart(60, "div")(61, "p", 65);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p", 66);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(67, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_67_Template, 3, 0, "ul", 67);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(68, "div", 68);
    \u0275\u0275template(69, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_69_Template, 3, 3, "div", 69);
    \u0275\u0275elementStart(70, "div", 70)(71, "button", 71);
    \u0275\u0275listener("click", function ProjectRecordDetailComponent_Conditional_69_Conditional_0_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmDeleteRecord());
    });
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(74, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Conditional_74_Template, 1, 0, "mat-spinner", 72);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_21_0;
    const r_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.displayName(r_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5._id);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r5.status ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r5.updatedAt || r_r5.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.hasEnrollmentSelfie(r_r5) ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 30, "smartEnrollProjects.recordDetail.stepsHeading"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(42, _c2));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 32, "smartEnrollProjects.recordDetail.section.information"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r5.informationValidation && (r_r5.informationValidation["updatedAt"] || r_r5.informationValidation["createdAt"]) ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.informationRows(r_r5).length === 0 ? 27 : 28);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.technicalMetadataRows(r_r5).length ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r5.email || r_r5.emailValidation ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r5.phone || r_r5.phoneValidation ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((r_r5.failedDocumentValidations == null ? null : r_r5.failedDocumentValidations.length) ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r5.documentValidation ? 34 : !(r_r5.failedDocumentValidations == null ? null : r_r5.failedDocumentValidations.length) ? 35 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((r_r5.failedBiometricValidations == null ? null : r_r5.failedBiometricValidations.length) ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r5.biometricValidation ? 38 : !(r_r5.failedBiometricValidations == null ? null : r_r5.failedBiometricValidations.length) ? 39 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_21_0 = r_r5.compareFaceVerification == null ? null : r_r5.compareFaceVerification.result) ? 41 : -1, tmp_21_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showNameMatchCard() ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((r_r5.compareFaceVerification == null ? null : r_r5.compareFaceVerification.result == null ? null : r_r5.compareFaceVerification.result.score) == null && !ctx_r2.showNameMatchCard() ? 43 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 34, "smartEnrollProjects.recordDetail.section.verdict"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r5.updatedAt, true));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.verdictPanelClass(r_r5.status));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r5.status === "COMPLETED" ? 55 : r_r5.status === "COMPLETED_WITHOUT_KYC" ? 56 : r_r5.status === "FAILED" ? 57 : r_r5.status === "NEEDS_MANUAL_VERIFICATION" ? 58 : 59);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 36, ctx_r2.verdictTitleKey(r_r5.status)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 38, ctx_r2.verdictSubtitleKey(r_r5.status)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r5.status === "NEEDS_MANUAL_VERIFICATION" && ctx_r2.manualReasons().length ? 67 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.deleteErrorKey() ? 69 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.deleteLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(73, 40, "smartEnrollProjects.recordDetail.deleteEnrollment"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.deleteLoading() ? 74 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProjectRecordDetailComponent_Conditional_69_Conditional_0_Template, 75, 43);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.record()) ? 0 : -1, tmp_2_0);
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 131);
  }
  if (rf & 2) {
    const r_r23 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.enrollmentSelfieSrc(r_r23), \u0275\u0275sanitizeUrl);
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fact_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(fact_r24);
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 135);
    \u0275\u0275repeaterCreate(1, ProjectRecordDetailComponent_Conditional_70_Conditional_10_For_2_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r23 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.resumeFacts(r_r23));
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 138);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.projectLogo(), \u0275\u0275sanitizeUrl);
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r23 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r23.status);
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_19_For_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 150);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "smartEnrollProjects.recordDetail.validated"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_19_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd")(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_70_Conditional_19_For_6_Conditional_7_Template, 3, 3, "span", 150);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "smartEnrollProjects.recordDetail.field." + row_r25.key));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r25.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r25.validated ? 7 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 141)(1, "h2", 143);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dl", 148);
    \u0275\u0275repeaterCreate(5, ProjectRecordDetailComponent_Conditional_70_Conditional_19_For_6_Template, 8, 5, "div", 149, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r23 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.resume.contact"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.resumeContactRows(r_r23));
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_20_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fieldLabel(row_r26.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r26.value);
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 141)(1, "h2", 143);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dl", 148);
    \u0275\u0275repeaterCreate(5, ProjectRecordDetailComponent_Conditional_70_Conditional_20_For_6_Template, 5, 2, "div", 149, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r23 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartEnrollProjects.recordDetail.resume.personal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.resumePersonalRows(r_r23));
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure");
    \u0275\u0275element(1, "img", 153);
    \u0275\u0275elementStart(2, "figcaption");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r23 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.documentFrontSrc(r_r23), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.frontScan"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure");
    \u0275\u0275element(1, "img", 153);
    \u0275\u0275elementStart(2, "figcaption");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r23 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.documentFaceSrc(r_r23), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.documentFace"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure");
    \u0275\u0275element(1, "img", 153);
    \u0275\u0275elementStart(2, "figcaption");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r23 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.documentBackSrc(r_r23), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "smartEnrollProjects.recordDetail.backScan"), " ");
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151);
    \u0275\u0275template(1, ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_4_Conditional_1_Template, 5, 4, "figure")(2, ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_4_Conditional_2_Template, 5, 4, "figure")(3, ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_4_Conditional_3_Template, 5, 4, "figure");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r23 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentFrontSrc(r_r23) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasDocumentFace(r_r23) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.documentBackSrc(r_r23) ? 3 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "dt");
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
function ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r27.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r27.value);
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 152);
    \u0275\u0275template(1, ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_5_Conditional_1_Template, 6, 4, "div", 154);
    \u0275\u0275repeaterCreate(2, ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_5_For_3_Template, 5, 2, "div", 149, _forTrack0);
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
function ProjectRecordDetailComponent_Conditional_70_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 141)(1, "h2", 143);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_4_Template, 4, 3, "div", 151)(5, ProjectRecordDetailComponent_Conditional_70_Conditional_21_Conditional_5_Template, 4, 1, "dl", 152);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r23 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "smartEnrollProjects.recordDetail.resume.identityDocument"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasDocumentScans(r_r23) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.resumeDocumentFields().length ? 5 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_22_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158)(1, "span", 159);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 160);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 161);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--v", ctx_r2.livenessDisplayPercent());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "smartEnrollProjects.recordDetail.livenessScore"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.livenessDisplayPercent(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(8, 8, "smartEnrollProjects.recordDetail.livenessMinimum"), " ", ctx_r2.livenessMinScorePercent(), "% ");
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158)(1, "span", 159);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 160);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 161);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--v", ctx_r2.compareScore());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "smartEnrollProjects.recordDetail.compareScore"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.compareScore(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(8, 8, "smartEnrollProjects.recordDetail.compareMinimum"), " ", ctx_r2.compareMinScorePercent(), "% ");
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_22_Conditional_7_Conditional_3_Template(rf, ctx) {
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
    const nmDoc_r28 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "smartEnrollProjects.recordDetail.compareGovernmentId"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "smartEnrollProjects.recordDetail.firstNameMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmDoc_r28.firstNameMatchPercentage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "smartEnrollProjects.recordDetail.lastNameMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmDoc_r28.lastNameMatchPercentage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "smartEnrollProjects.recordDetail.fullNameMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmDoc_r28.fullNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_22_Conditional_7_Conditional_4_Template(rf, ctx) {
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
    const nmForm_r29 = \u0275\u0275readContextLet(1);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "smartEnrollProjects.recordDetail.compareGovernmentForm"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "smartEnrollProjects.recordDetail.firstNameMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmForm_r29.firstNameMatchPercentage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 11, "smartEnrollProjects.recordDetail.lastNameMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmForm_r29.lastNameMatchPercentage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 13, "smartEnrollProjects.recordDetail.fullNameMatch"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNameMatchPercent(nmForm_r29.fullNameMatchPercentage));
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0)(1);
    \u0275\u0275elementStart(2, "div", 157);
    \u0275\u0275template(3, ProjectRecordDetailComponent_Conditional_70_Conditional_22_Conditional_7_Conditional_3_Template, 20, 15, "div")(4, ProjectRecordDetailComponent_Conditional_70_Conditional_22_Conditional_7_Conditional_4_Template, 20, 15, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r23 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext();
    const nmDoc_r30 = \u0275\u0275storeLet(ctx_r2.nameMatchColumn(r_r23, "document"));
    \u0275\u0275advance();
    const nmForm_r31 = \u0275\u0275storeLet(ctx_r2.nameMatchColumn(r_r23, "information"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.nameMatchColumnHasData(nmDoc_r30) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.nameMatchColumnHasData(nmForm_r31) ? 4 : -1);
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 141)(1, "h2", 143);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 155);
    \u0275\u0275template(5, ProjectRecordDetailComponent_Conditional_70_Conditional_22_Conditional_5_Template, 9, 10, "div", 156)(6, ProjectRecordDetailComponent_Conditional_70_Conditional_22_Conditional_6_Template, 9, 10, "div", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProjectRecordDetailComponent_Conditional_70_Conditional_22_Conditional_7_Template, 5, 4, "div", 157);
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
function ProjectRecordDetailComponent_Conditional_70_Conditional_33_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reason_r32 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, reason_r32.key, reason_r32.params));
  }
}
function ProjectRecordDetailComponent_Conditional_70_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 146);
    \u0275\u0275repeaterCreate(1, ProjectRecordDetailComponent_Conditional_70_Conditional_33_For_2_Template, 3, 4, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.manualReasons());
  }
}
function ProjectRecordDetailComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "section", 129)(2, "header", 130);
    \u0275\u0275template(3, ProjectRecordDetailComponent_Conditional_70_Conditional_3_Template, 1, 1, "img", 131);
    \u0275\u0275elementStart(4, "div", 132)(5, "h1", 133);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 134);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ProjectRecordDetailComponent_Conditional_70_Conditional_10_Template, 3, 0, "p", 135);
    \u0275\u0275elementStart(11, "p", 136);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 137);
    \u0275\u0275template(14, ProjectRecordDetailComponent_Conditional_70_Conditional_14_Template, 1, 1, "img", 138)(15, ProjectRecordDetailComponent_Conditional_70_Conditional_15_Template, 2, 1, "span", 139);
    \u0275\u0275elementStart(16, "span", 140);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275template(19, ProjectRecordDetailComponent_Conditional_70_Conditional_19_Template, 7, 3, "section", 141)(20, ProjectRecordDetailComponent_Conditional_70_Conditional_20_Template, 7, 3, "section", 141);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, ProjectRecordDetailComponent_Conditional_70_Conditional_21_Template, 6, 5, "section", 141)(22, ProjectRecordDetailComponent_Conditional_70_Conditional_22_Template, 8, 6, "section", 141);
    \u0275\u0275elementStart(23, "section", 142)(24, "h2", 143);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 144);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 145);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, ProjectRecordDetailComponent_Conditional_70_Conditional_33_Template, 3, 0, "ul", 146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "footer", 147);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r23 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r2.printSectionId);
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r2.brandingVars());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasEnrollmentSelfie(r_r23) ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.displayName(r_r23));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 24, "smartEnrollProjects.recordDetail.resume.tagline"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.resumeFacts(r_r23).length ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r23._id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.projectLogo() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r23.status ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(r_r23.updatedAt || r_r23.createdAt));
    \u0275\u0275advance();
    \u0275\u0275classProp("enrollment-resume__two-col", ctx_r2.resumePersonalRows(r_r23).length)("enrollment-resume__one-col", !ctx_r2.resumePersonalRows(r_r23).length);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.resumeContactRows(r_r23).length ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.resumePersonalRows(r_r23).length ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasDocumentScans(r_r23) || ctx_r2.resumeDocumentFields().length ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.livenessMinScorePercent() != null || ctx_r2.compareMinScorePercent() != null || ctx_r2.showNameMatchCard() ? 22 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 26, "smartEnrollProjects.recordDetail.resume.verdict"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 28, ctx_r2.verdictTitleKey(r_r23.status)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 30, ctx_r2.verdictSubtitleKey(r_r23.status)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.manualReasons().length ? 33 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(36, 32, "smartEnrollProjects.recordDetail.resume.recordFooter", \u0275\u0275pureFunction2(35, _c5, r_r23._id, ctx_r2.printedOn())), " ");
  }
}
var STEP_ORDER = [
  "information",
  "email",
  "phone",
  "documents",
  "biometrics",
  "compare",
  "verdict"
];
var SKIP_INFO_KEYS = /* @__PURE__ */ new Set([
  "_id",
  "__v",
  "criminalData",
  "inputMethod",
  "validationMethod",
  "webhook",
  "type"
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
    this._resendForbiddenStatuses = /* @__PURE__ */ new Set(["COMPLETED_WITHOUT_KYC", "COMPLETED", "FAILED"]);
    this.printSectionId = "enrollment-print-section";
    this._sub = null;
    this._observer = null;
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
   * Uses Transloco when a key exists; otherwise a readable title from the property name
   * (avoids showing raw i18n paths when a locale omits a field).
   */
  fieldLabel(key) {
    const tk = `smartEnrollProjects.recordDetail.field.${key}`;
    const translated = this._transloco.translate(tk);
    if (this._translationLooksMissing(tk, translated)) {
      return this._humanizeFieldKey(key);
    }
    return translated;
  }
  _translationLooksMissing(translationKey, translated) {
    if (!translated || translated.trim() === "")
      return true;
    if (translated === translationKey)
      return true;
    if (/smartenrollprojects\.recorddetail\.field\./i.test(translated))
      return true;
    return false;
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
      firstNameMatchPercentage: pickNum("firstNameMatchPercentage"),
      lastNameMatchPercentage: pickNum("lastNameMatchPercentage"),
      fullNameMatchPercentage: pickNum("fullNameMatchPercentage"),
      namesMatch: pickBool("namesMatch")
    };
  }
  /** True if this source has any name-match field (used to show a sub-column without the flow flag) */
  nameMatchColumnHasData(column) {
    return column.firstNameMatchPercentage != null || column.lastNameMatchPercentage != null || column.fullNameMatchPercentage != null || column.namesMatch != null;
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
    const s = this.stepState(step);
    if (s === "ok")
      return "check_circle";
    if (s === "error")
      return "error";
    if (s === "warn")
      return "warning";
    return "radio_button_unchecked";
  }
  stepState(step) {
    const r = this.record();
    if (!r)
      return "pending";
    switch (step) {
      case "information":
        return r.informationValidation ? "ok" : "pending";
      case "email": {
        if (!r.email && !r.emailValidation)
          return "pending";
        const st = r.emailValidation?.status;
        return st === "validated" ? "ok" : r.email || r.emailValidation ? "warn" : "pending";
      }
      case "phone": {
        if (!r.phone && !r.phoneValidation)
          return "pending";
        const st = r.phoneValidation?.status;
        return st === "validated" ? "ok" : r.phone || r.phoneValidation ? "warn" : "pending";
      }
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
        const cmp = r.compareFaceVerification;
        if (cmp?.result?.score != null || this.showNameMatchCard())
          return "ok";
        return "pending";
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
  verdictPanelClass(status) {
    switch (status) {
      case "COMPLETED":
        return "record-verdict--ok";
      case "COMPLETED_WITHOUT_KYC":
        return "record-verdict--warn";
      case "FAILED":
        return "record-verdict--error";
      case "NEEDS_MANUAL_VERIFICATION":
        return "record-verdict--manual";
      default:
        return "record-verdict--pending";
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
    STEP_ORDER.forEach((step) => {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectRecordDetailComponent, selectors: [["project-record-detail"]], decls: 71, vars: 55, consts: [["exportMenu", "matMenu"], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "max-w-6xl"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "icon-size-4", "mx-2", "text-stone-400", 3, "svgIcon"], ["routerLink", "/smart-enroll/projects", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300", 3, "routerLink"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "mt-5", "flex", "flex-wrap", "items-start", "justify-between", "gap-4"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300", 3, "click"], [1, "min-w-0", "pt-0.5"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "mt-1", "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "no-print", "flex", "flex-wrap", "items-center", "gap-2"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", 3, "matMenuTriggerFor", "disabled"], ["diameter", "16"], ["mat-menu-item", "", "type", "button", 3, "click"], ["mat-menu-item", "", "type", "button", "ngxPrint", "", 3, "printSectionId", "useExistingCss", "printTitle"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl"], ["mat-stroked-button", "", "type", "button", 1, "shrink-0", "rounded-xl", 3, "click"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-6xl"], [1, "flex", "justify-center", "py-20"], [1, "rounded-2xl", "border", "border-red-200/90", "bg-red-50/90", "p-4", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "print-only", 3, "id"], ["diameter", "40"], [1, "record-detail-meta", "mb-8"], [1, "min-w-0", "flex-1"], [1, "text-lg", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-1", "font-mono", "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "inline-flex", "items-center", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "lg:grid", "lg:grid-cols-12", "lg:gap-10"], [1, "mb-8", "lg:sticky", "lg:top-24", "lg:col-span-3", "lg:mb-0", "lg:self-start"], [1, "mb-6", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "dark:border-gray-700", "dark:bg-gray-900/50"], [1, "mb-3", "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-col", "gap-1"], ["type", "button", 1, "record-stepper-btn", 3, "record-stepper-btn--active"], [1, "space-y-8", "lg:col-span-9"], ["id", "step-information", 1, "scroll-mt-28"], [1, "record-detail-panel"], [1, "record-detail-panel__header"], [1, "text-xs", "text-stone-500", "dark:text-stone-400"], [1, "p-5", "md:p-6"], [1, "grid", "gap-4", "sm:grid-cols-2"], [1, "record-detail-panel", "mt-6"], ["id", "step-email", 1, "scroll-mt-28"], ["id", "step-phone", 1, "scroll-mt-28"], ["id", "step-documents", 1, "scroll-mt-28"], ["id", "step-biometrics", 1, "scroll-mt-28"], ["id", "step-compare", 1, "scroll-mt-28"], ["id", "step-verdict", 1, "scroll-mt-28"], [1, "record-detail-panel", "overflow-hidden"], [1, "text-xs", "text-stone-500"], [1, "p-6", "md:p-8"], [1, "rounded-2xl", "border", "p-6", "md:p-8", 3, "ngClass"], [1, "flex", "flex-col", "items-center", "gap-4", "text-center"], [1, "icon-size-10", "text-emerald-600", "dark:text-emerald-400"], [1, "icon-size-10", "text-amber-600", "dark:text-amber-400"], [1, "icon-size-10", "text-red-600", "dark:text-red-400"], [1, "icon-size-10", "text-orange-600", "dark:text-orange-400"], [1, "icon-size-10", "text-stone-400"], [1, "text-xl", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-2", "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "w-full", "max-w-lg", "list-disc", "space-y-1", "pl-5", "text-left", "text-sm", "text-orange-900", "dark:text-orange-200"], [1, "no-print", "flex", "flex-col", "gap-3", "border-t", "border-stone-200/90", "pt-8", "dark:border-gray-800"], [1, "rounded-xl", "border", "border-red-200/90", "bg-red-50/90", "px-4", "py-3", "text-sm", "text-red-800", "dark:border-red-900/50", "dark:bg-red-950/40", "dark:text-red-300"], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["mat-stroked-button", "", "type", "button", "color", "warn", 1, "rounded-xl", 3, "click", "disabled"], ["diameter", "24"], [1, "aspect-[3/4]", "w-full", "overflow-hidden", "bg-stone-100", "dark:bg-gray-800"], ["alt", "", "loading", "lazy", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "border-t", "border-stone-100", "px-3", "py-2.5", "text-center", "text-xs", "font-medium", "text-stone-600", "dark:border-gray-800", "dark:text-stone-400"], ["type", "button", 1, "record-stepper-btn", 3, "click"], [1, "icon-size-5", "shrink-0", 3, "ngClass"], [1, "text-sm", "font-medium", "text-stone-800", "dark:text-stone-200"], [1, "text-xs", "font-medium", "uppercase", "tracking-wide", "text-stone-500", "dark:text-stone-400"], [1, "mt-1", "text-sm", "font-medium", "text-stone-900", "dark:text-stone-100"], [1, "mt-1.5", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-400"], [1, "min-w-0", 3, "sm:col-span-2"], [1, "min-w-0"], [1, "mt-1", "break-words", "text-sm", "font-medium", "leading-relaxed", "text-stone-900", "dark:text-stone-100"], [1, "text-sm", "text-stone-900", "dark:text-white"], [1, "mt-2", "inline-flex", "items-center", "gap-1", "rounded-full", "bg-emerald-100", "px-2.5", "py-0.5", "text-xs", "font-medium", "text-emerald-900", "dark:bg-emerald-950/50", "dark:text-emerald-200"], [1, "icon-size-3.5"], [1, "record-detail-panel", "mb-6", "border-red-200/90", "dark:border-red-900/40"], [1, "record-detail-panel__header", "border-red-100", "bg-red-50/50", "dark:border-red-900/30", "dark:bg-red-950/20"], [1, "text-lg", "font-semibold", "text-red-900", "dark:text-red-200"], [1, "text-xs", "text-red-700/80"], [1, "grid", "gap-4", "p-5", "sm:grid-cols-2", "md:p-6"], [1, "border-t", "border-red-100", "px-5", "py-4", "text-sm", "text-red-800", "dark:border-red-900/40", "dark:text-red-300", "md:px-6"], ["alt", "", "loading", "lazy", 1, "record-doc-img", 3, "src"], [1, "mt-2", "text-center", "text-xs", "text-stone-500"], [1, "grid", "grid-cols-1", "gap-6", "p-5", "sm:grid-cols-2", "lg:grid-cols-3", "md:p-6"], [1, "border-t", "border-stone-100", "px-5", "py-5", "dark:border-gray-800", "md:px-6"], [1, "border-t", "border-stone-100", "dark:border-gray-800"], [1, "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-2", "inline-flex", "rounded-full", "px-2.5", "py-0.5", "text-xs", "font-semibold", 3, "ngClass"], [1, "record-detail-panel__header", "!border-0"], [1, "text-base", "font-semibold", "text-stone-900", "dark:text-white"], [1, "grid", "gap-3", "px-5", "pb-6", "md:grid-cols-2", "md:px-6"], [1, "rounded-xl", "border", "border-stone-100", "bg-stone-50/80", "px-3", "py-2", "dark:border-gray-800", "dark:bg-gray-800/40"], [1, "text-xs", "font-medium", "text-stone-500", "dark:text-stone-400"], [1, "text-sm", "font-medium", "text-stone-900", "dark:text-stone-100"], [1, "p-6", "text-sm", "text-stone-500", "dark:text-stone-400"], [1, "p-5", "text-sm", "text-red-800", "dark:text-red-300", "md:p-6"], [1, "flex", "flex-col", "items-center", "gap-6", "p-5", "md:flex-row", "md:items-start", "md:p-6"], ["alt", "", "loading", "lazy", 1, "h-16", "w-16", "shrink-0", "rounded-lg", "border", "border-stone-200", "object-cover", "dark:border-gray-700", 3, "src"], [1, "min-w-0", "flex-1", "space-y-4"], [1, "flex", "items-center", "justify-between", "gap-2", "text-sm"], [1, "text-stone-600", "dark:text-stone-400"], [1, "font-semibold", "tabular-nums", "text-stone-900", "dark:text-white"], [1, "record-progress-track", "mt-2"], [1, "record-progress-fill", "bg-emerald-500"], [1, "mt-4", "flex", "items-center", "justify-between", "gap-2", "text-sm"], [1, "record-progress-fill", "bg-stone-400", "dark:bg-stone-500"], [1, "record-progress-fill", "bg-indigo-500"], [1, "text-xs", "font-normal", "text-stone-500", "dark:text-stone-400"], [1, "grid", "grid-cols-1", "gap-6", 3, "ngClass"], [1, "rounded-lg", "border", "border-stone-100", "bg-stone-50/90", "p-4", "dark:border-gray-800", "dark:bg-gray-800/40"], [1, "mb-4", "border-b", "border-stone-200", "pb-2", "text-sm", "font-semibold", "uppercase", "tracking-wider", "text-stone-500", "dark:border-gray-700", "dark:text-stone-400"], [1, "space-y-3"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "text-sm", "text-stone-600", "dark:text-stone-400"], [1, "rounded", "border", "border-stone-100", "bg-white", "px-2", "py-1", "text-sm", "font-semibold", "tabular-nums", "text-stone-900", "shadow-sm", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white"], [1, "rounded", "border", "border-stone-100", "bg-white", "px-2", "py-1", "text-sm", "font-semibold", "text-stone-900", "shadow-sm", "dark:border-gray-700", "dark:bg-gray-900", "dark:text-white"], [1, "enrollment-resume"], [1, "enrollment-resume__header"], ["alt", "", 1, "enrollment-resume__avatar", 3, "src"], [1, "enrollment-resume__identity"], [1, "enrollment-resume__name"], [1, "enrollment-resume__tagline"], [1, "enrollment-resume__facts"], [1, "enrollment-resume__id"], [1, "enrollment-resume__meta"], ["alt", "", 1, "enrollment-resume__logo", 3, "src"], [1, "enrollment-resume__status"], [1, "enrollment-resume__date"], [1, "enrollment-resume__card"], [1, "enrollment-resume__card", "enrollment-resume__card--verdict"], [1, "enrollment-resume__card-title"], [1, "enrollment-resume__verdict-title"], [1, "enrollment-resume__verdict-sub"], [1, "enrollment-resume__reasons"], [1, "enrollment-resume__footer"], [1, "enrollment-resume__list"], [1, "enrollment-resume__row"], [1, "enrollment-resume__badge"], [1, "enrollment-resume__doc-grid"], [1, "enrollment-resume__list", "enrollment-resume__list--two-col"], ["alt", "", 3, "src"], [1, "enrollment-resume__row", "enrollment-resume__row--full"], [1, "enrollment-resume__scores"], [1, "enrollment-resume__score", 3, "--v"], [1, "enrollment-resume__name-match"], [1, "enrollment-resume__score"], [1, "enrollment-resume__score-label"], [1, "enrollment-resume__score-value"], [1, "enrollment-resume__score-min"]], template: function ProjectRecordDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "div", 4)(4, "a", 5);
        \u0275\u0275text(5, "Verifik");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-icon", 6);
        \u0275\u0275elementStart(7, "a", 7);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-icon", 6);
        \u0275\u0275elementStart(11, "a", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "mat-icon", 6);
        \u0275\u0275elementStart(14, "a", 8);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "mat-icon", 6);
        \u0275\u0275elementStart(18, "span", 9);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 10)(22, "div", 11)(23, "button", 12);
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275listener("click", function ProjectRecordDetailComponent_Template_button_click_23_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goBack());
        });
        \u0275\u0275elementStart(25, "mat-icon");
        \u0275\u0275text(26, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 13)(28, "h1", 14);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 15);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 16)(35, "button", 17);
        \u0275\u0275template(36, ProjectRecordDetailComponent_Conditional_36_Template, 1, 0, "mat-spinner", 18)(37, ProjectRecordDetailComponent_Conditional_37_Template, 2, 0, "mat-icon");
        \u0275\u0275text(38);
        \u0275\u0275pipe(39, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-menu", null, 0)(42, "button", 19);
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
        \u0275\u0275elementStart(48, "button", 19);
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
        \u0275\u0275elementStart(54, "button", 20);
        \u0275\u0275pipe(55, "transloco");
        \u0275\u0275elementStart(56, "mat-icon");
        \u0275\u0275text(57, "print");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span");
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(61, ProjectRecordDetailComponent_Conditional_61_Template, 5, 3, "button", 21);
        \u0275\u0275elementStart(62, "button", 22);
        \u0275\u0275listener("click", function ProjectRecordDetailComponent_Template_button_click_62_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goProjects());
        });
        \u0275\u0275text(63);
        \u0275\u0275pipe(64, "transloco");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(65, "main", 23)(66, "div", 24);
        \u0275\u0275template(67, ProjectRecordDetailComponent_Conditional_67_Template, 2, 0, "div", 25)(68, ProjectRecordDetailComponent_Conditional_68_Template, 3, 3, "div", 26)(69, ProjectRecordDetailComponent_Conditional_69_Template, 1, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(70, ProjectRecordDetailComponent_Conditional_70_Template, 37, 38, "div", 27);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_27_0;
        const exportMenu_r33 = \u0275\u0275reference(41);
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 27, "smartEnrollProjects.title"));
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(51, _c0, ctx.projectId));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(((tmp_5_0 = ctx.project()) == null ? null : tmp_5_0.name) || ctx.projectId);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(53, _c1, ctx.projectId));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 29, "smartEnrollProjects.recordsTitle"));
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 31, "smartEnrollProjects.recordDetail.title"));
        \u0275\u0275advance(4);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(24, 33, "smartEnrollProjects.recordDetail.backToRecords"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 35, "smartEnrollProjects.recordDetail.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 37, "smartEnrollProjects.recordDetail.subtitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("matMenuTriggerFor", exportMenu_r33)("disabled", ctx.exportLoading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.exportLoading() ? 36 : 37);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 39, "smartEnrollProjects.recordDetail.export"), " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 41, "smartEnrollProjects.recordDetail.exportDownloadPdf"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 43, "smartEnrollProjects.recordDetail.exportEmailPdf"));
        \u0275\u0275advance(2);
        \u0275\u0275property("printSectionId", ctx.printSectionId)("useExistingCss", true)("printTitle", \u0275\u0275pipeBind1(55, 45, "smartEnrollProjects.recordDetail.printTitle"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 47, "smartEnrollProjects.recordDetail.exportBrowserPrint"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.canResendLink() ? 61 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 49, "smartEnrollProjects.allProjects"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 67 : ctx.errorKey() ? 68 : 69);
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_27_0 = ctx.record()) ? 70 : -1, tmp_27_0);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
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
      NgxPrintDirective,
      TranslocoModule,
      TranslocoPipe
    ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.record-detail-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.record-detail-panel[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.record-detail-panel[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.record-detail-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n@media (min-width: 960px) {\n  .record-detail-panel__header[_ngcontent-%COMP%] {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n}\n.record-detail-panel__header[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.record-detail-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n}\n.record-detail-meta[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.record-detail-meta[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.record-detail-code[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.record-detail-code[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.record-stepper-btn[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: transparent;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.record-stepper-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgb(231 229 228 / 0.8);\n  background-color: rgb(250 250 249 / 0.9);\n}\n.record-stepper-btn[_ngcontent-%COMP%]:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(30 41 59 / 0.5);\n}\n.record-stepper-btn--active[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n  background-color: rgb(245 245 244 / 0.9);\n}\n.record-stepper-btn--active[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n  background-color: rgb(30 41 59 / 0.8);\n}\n.record-stepper-icon--ok[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--ok[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--error[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--error[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--warn[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--warn[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--pending[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--pending[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.record-verdict--ok[_ngcontent-%COMP%] {\n  border-color: rgb(167 243 208 / 0.9);\n  background-color: rgb(236 253 245 / 0.9);\n}\n.record-verdict--ok[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  border-color: rgb(6 78 59 / 0.4);\n  background-color: rgb(2 44 34 / 0.3);\n}\n.record-verdict--warn[_ngcontent-%COMP%] {\n  border-color: rgb(253 230 138 / 0.9);\n  background-color: rgb(255 251 235 / 0.9);\n}\n.record-verdict--warn[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  border-color: rgb(120 53 15 / 0.4);\n  background-color: rgb(69 26 3 / 0.3);\n}\n.record-verdict--error[_ngcontent-%COMP%] {\n  border-color: rgb(254 202 202 / 0.9);\n  background-color: rgb(254 242 242 / 0.9);\n}\n.record-verdict--error[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  border-color: rgb(127 29 29 / 0.4);\n  background-color: rgb(69 10 10 / 0.3);\n}\n.record-verdict--manual[_ngcontent-%COMP%] {\n  border-color: rgb(254 215 170 / 0.9);\n  background-color: rgb(255 247 237 / 0.9);\n}\n.record-verdict--manual[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  border-color: rgb(124 45 18 / 0.4);\n  background-color: rgb(67 20 7 / 0.3);\n}\n.record-verdict--pending[_ngcontent-%COMP%] {\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(250 250 249 / 0.9);\n}\n.record-verdict--pending[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.record-doc-img[_ngcontent-%COMP%] {\n  max-height: 16rem;\n  width: 100%;\n  max-width: 28rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  object-fit: contain;\n}\n.record-doc-img[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n}\n.record-progress-track[_ngcontent-%COMP%] {\n  height: 0.5rem;\n  width: 100%;\n  max-width: 28rem;\n  overflow: hidden;\n  border-radius: 9999px;\n  background-color: rgb(231 229 228 / 0.8);\n}\n.record-progress-track[_ngcontent-%COMP%]:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n}\n.record-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 9999px;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 500ms;\n}\n.print-only[_ngcontent-%COMP%] {\n  display: none;\n}\n.enrollment-resume[_ngcontent-%COMP%] {\n  --resume-primary: #111827;\n  --resume-ink: #0f172a;\n  --resume-muted: #667085;\n  --resume-faint: #98a2b3;\n  --resume-rule: #eceff1;\n  --resume-track: #f2f4f7;\n  color: var(--resume-ink);\n  background: #ffffff;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "SF Pro Text",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  font-feature-settings:\n    "cv11",\n    "ss01",\n    "ss03",\n    "tnum";\n  font-variant-numeric: tabular-nums;\n  font-size: 10pt;\n  line-height: 1.4;\n  orphans: 3;\n  widows: 3;\n}\n.enrollment-resume__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: flex-start;\n  gap: 16pt;\n  padding-bottom: 12pt;\n  border-bottom: 0.5pt solid var(--resume-rule);\n  margin-bottom: 14pt;\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n.enrollment-resume__avatar[_ngcontent-%COMP%] {\n  width: 24mm;\n  height: 24mm;\n  object-fit: cover;\n  border-radius: 3pt;\n  border: 0.5pt solid var(--resume-rule);\n  background: var(--resume-track);\n}\n.enrollment-resume__identity[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.enrollment-resume__name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24pt;\n  font-weight: 600;\n  letter-spacing: -0.022em;\n  line-height: 1.05;\n  color: var(--resume-ink);\n}\n.enrollment-resume__tagline[_ngcontent-%COMP%] {\n  margin: 4pt 0 0;\n  font-size: 7.5pt;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  color: var(--resume-faint);\n  font-weight: 500;\n}\n.enrollment-resume__id[_ngcontent-%COMP%] {\n  margin: 8pt 0 0;\n  font-family:\n    "JetBrains Mono",\n    "SFMono-Regular",\n    Menlo,\n    Consolas,\n    monospace;\n  font-size: 8pt;\n  color: var(--resume-muted);\n  word-break: break-all;\n}\n.enrollment-resume__facts[_ngcontent-%COMP%] {\n  margin: 6pt 0 0;\n  font-size: 9pt;\n  color: var(--resume-muted);\n  letter-spacing: 0;\n  line-height: 1.3;\n}\n.enrollment-resume__facts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]::before {\n  content: " \\b7  ";\n  color: var(--resume-faint);\n}\n.enrollment-resume__one-col[_ngcontent-%COMP%] {\n  display: block;\n}\n.enrollment-resume__meta[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6pt;\n}\n.enrollment-resume__logo[_ngcontent-%COMP%] {\n  max-width: 26mm;\n  max-height: 12mm;\n  object-fit: contain;\n  margin-bottom: 4pt;\n}\n.enrollment-resume__status[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2.5pt 9pt;\n  border: 0.6pt solid var(--resume-primary);\n  border-radius: 999pt;\n  font-size: 7.5pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: var(--resume-primary);\n}\n.enrollment-resume__date[_ngcontent-%COMP%] {\n  font-size: 8.5pt;\n  color: var(--resume-muted);\n  font-variant-numeric: tabular-nums;\n}\n.enrollment-resume__two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 24pt;\n  row-gap: 0;\n}\n.enrollment-resume__card[_ngcontent-%COMP%] {\n  padding: 12pt 0;\n  border-top: 0.4pt solid var(--resume-rule);\n}\n.enrollment-resume__card[_ngcontent-%COMP%]:first-of-type, \n.enrollment-resume__two-col[_ngcontent-%COMP%]   .enrollment-resume__card[_ngcontent-%COMP%] {\n  border-top: 0;\n  padding-top: 0;\n}\n.enrollment-resume__card-title[_ngcontent-%COMP%] {\n  margin: 0 0 8pt;\n  font-size: 7.5pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: var(--resume-muted);\n  page-break-after: avoid;\n  break-after: avoid;\n}\n.enrollment-resume__list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0;\n}\n.enrollment-resume__list--two-col[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n  column-gap: 24pt;\n}\n.enrollment-resume__row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 110pt 1fr;\n  column-gap: 12pt;\n  padding: 2.5pt 0;\n  align-items: baseline;\n}\n.enrollment-resume__row--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.enrollment-resume__row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: 8pt;\n  color: var(--resume-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 500;\n}\n.enrollment-resume__row[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10pt;\n  color: var(--resume-ink);\n  font-weight: 500;\n  word-break: break-word;\n}\n.enrollment-resume__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 6pt;\n  padding: 0.5pt 5pt;\n  border-radius: 3pt;\n  font-size: 7pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #047857;\n  background: rgba(16, 185, 129, 0.1);\n}\n.enrollment-resume__doc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 10pt;\n  row-gap: 6pt;\n  margin-bottom: 10pt;\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n.enrollment-resume__doc-grid[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n}\n.enrollment-resume__doc-grid[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 32mm;\n  object-fit: contain;\n  border: 0.5pt solid var(--resume-rule);\n  border-radius: 2pt;\n  background: var(--resume-track);\n}\n.enrollment-resume__doc-grid[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  margin-top: 4pt;\n  font-size: 7.5pt;\n  color: var(--resume-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.enrollment-resume__scores[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10pt;\n}\n.enrollment-resume__score[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  column-gap: 12pt;\n  align-items: baseline;\n  padding-bottom: 4pt;\n  page-break-inside: avoid;\n  break-inside: avoid;\n  position: relative;\n}\n.enrollment-resume__score[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.5pt;\n  background:\n    linear-gradient(\n      to right,\n      var(--resume-primary) 0%,\n      var(--resume-primary) calc(var(--v, 0) * 1%),\n      var(--resume-track) calc(var(--v, 0) * 1%),\n      var(--resume-track) 100%);\n  border-radius: 999pt;\n}\n.enrollment-resume__score-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 9.5pt;\n  color: var(--resume-ink);\n}\n.enrollment-resume__score-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13pt;\n  color: var(--resume-ink);\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.01em;\n}\n.enrollment-resume__score-min[_ngcontent-%COMP%] {\n  font-size: 8pt;\n  color: var(--resume-muted);\n  white-space: nowrap;\n}\n.enrollment-resume__name-match[_ngcontent-%COMP%] {\n  margin-top: 12pt;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18pt;\n}\n.enrollment-resume__name-match[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6pt;\n  font-size: 7.5pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: var(--resume-muted);\n}\n.enrollment-resume__name-match[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.enrollment-resume__name-match[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 2.5pt 0;\n  font-size: 9.5pt;\n  color: var(--resume-ink);\n}\n.enrollment-resume__name-match[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.enrollment-resume__card--verdict[_ngcontent-%COMP%] {\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n.enrollment-resume__verdict-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13pt;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--resume-ink);\n}\n.enrollment-resume__verdict-sub[_ngcontent-%COMP%] {\n  margin: 3pt 0 0;\n  font-size: 9.5pt;\n  color: var(--resume-muted);\n}\n.enrollment-resume__reasons[_ngcontent-%COMP%] {\n  margin: 8pt 0 0;\n  padding-left: 14pt;\n  font-size: 9pt;\n  color: var(--resume-muted);\n}\n.enrollment-resume__reasons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1pt 0;\n}\n.enrollment-resume__footer[_ngcontent-%COMP%] {\n  margin-top: 18pt;\n  padding-top: 8pt;\n  border-top: 0.4pt solid var(--resume-rule);\n  font-size: 7.5pt;\n  color: var(--resume-faint);\n  text-align: center;\n  letter-spacing: 0.04em;\n}\n@media print {\n  [_nghost-%COMP%] {\n    display: block;\n    background: #fff !important;\n  }\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  [_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n   [_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > main[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .print-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  @page {\n    size: A4;\n    margin: 12mm;\n  }\n  *[_ngcontent-%COMP%] {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n/*# sourceMappingURL=project-record-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectRecordDetailComponent, [{
    type: Component,
    args: [{ selector: "project-record-detail", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatButtonModule,
      MatDialogModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      NgxPrintDirective,
      TranslocoModule
    ], template: `<div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">
    <header
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"
    >
        <div class="mx-auto max-w-6xl">
            <div class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400">
                <a routerLink="/chat" class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300">Verifik</a>
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>
                <a
                    routerLink="/smart-enroll/projects"
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"
                    >{{ 'smartEnrollProjects.title' | transloco }}</a
                >
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>
                <a
                    [routerLink]="['/smart-enroll/projects', projectId]"
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"
                    >{{ project()?.name || projectId }}</a
                >
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>
                <a
                    [routerLink]="['/smart-enroll/projects', projectId, 'records']"
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"
                    >{{ 'smartEnrollProjects.recordsTitle' | transloco }}</a
                >
                <mat-icon class="icon-size-4 mx-2 text-stone-400" [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>
                <span class="cursor-default text-stone-600 dark:text-stone-300">{{
                    'smartEnrollProjects.recordDetail.title' | transloco
                }}</span>
            </div>
            <div class="mt-5 flex flex-wrap items-start justify-between gap-4">
                <div class="flex min-w-0 items-start gap-3">
                    <button
                        mat-icon-button
                        type="button"
                        (click)="goBack()"
                        class="shrink-0 !text-stone-600 dark:!text-stone-300"
                        [attr.aria-label]="'smartEnrollProjects.recordDetail.backToRecords' | transloco"
                    >
                        <mat-icon>arrow_back</mat-icon>
                    </button>
                    <div class="min-w-0 pt-0.5">
                        <h1 class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl">
                            {{ 'smartEnrollProjects.recordDetail.title' | transloco }}
                        </h1>
                        <p class="mt-1 text-sm text-stone-600 dark:text-stone-400">
                            {{ 'smartEnrollProjects.recordDetail.subtitle' | transloco }}
                        </p>
                    </div>
                </div>
                <div class="no-print flex flex-wrap items-center gap-2">
                    <button
                        mat-stroked-button
                        type="button"
                        class="shrink-0 rounded-xl"
                        [matMenuTriggerFor]="exportMenu"
                        [disabled]="exportLoading()"
                    >
                        @if (exportLoading()) {
                            <mat-spinner diameter="16"></mat-spinner>
                        } @else {
                            <mat-icon>download</mat-icon>
                        }
                        {{ 'smartEnrollProjects.recordDetail.export' | transloco }}
                    </button>
                    <mat-menu #exportMenu="matMenu">
                        <button mat-menu-item type="button" (click)="downloadCv()">
                            <mat-icon>picture_as_pdf</mat-icon>
                            <span>{{ 'smartEnrollProjects.recordDetail.exportDownloadPdf' | transloco }}</span>
                        </button>
                        <button mat-menu-item type="button" (click)="emailCv()">
                            <mat-icon>send</mat-icon>
                            <span>{{ 'smartEnrollProjects.recordDetail.exportEmailPdf' | transloco }}</span>
                        </button>
                        <button
                            mat-menu-item
                            type="button"
                            ngxPrint
                            [printSectionId]="printSectionId"
                            [useExistingCss]="true"
                            [printTitle]="'smartEnrollProjects.recordDetail.printTitle' | transloco"
                        >
                            <mat-icon>print</mat-icon>
                            <span>{{ 'smartEnrollProjects.recordDetail.exportBrowserPrint' | transloco }}</span>
                        </button>
                    </mat-menu>
                    @if (canResendLink()) {
                        <button
                            mat-stroked-button
                            type="button"
                            class="shrink-0 rounded-xl"
                            (click)="openResendLinkDialog()"
                        >
                            <mat-icon>link</mat-icon>
                            {{ 'smartEnrollProjects.recordDetail.resendLink' | transloco }}
                        </button>
                    }
                    <button mat-stroked-button type="button" class="shrink-0 rounded-xl" (click)="goProjects()">
                        {{ 'smartEnrollProjects.allProjects' | transloco }}
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">
        <div class="mx-auto w-full max-w-6xl">
            @if (loading()) {
                <div class="flex justify-center py-20">
                    <mat-spinner diameter="40"></mat-spinner>
                </div>
            } @else if (errorKey()) {
                <div
                    class="rounded-2xl border border-red-200/90 bg-red-50/90 p-4 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"
                >
                    {{ errorKey()! | transloco }}
                </div>
            } @else {
                @if (record(); as r) {
                <div class="record-detail-meta mb-8">
                    <div class="min-w-0 flex-1">
                        <p class="text-lg font-semibold text-stone-900 dark:text-white">{{ displayName(r) }}</p>
                        <p class="mt-1 font-mono text-xs text-stone-500 dark:text-stone-400">{{ r._id }}</p>
                    </div>
                    @if (r.status) {
                        <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold" [ngClass]="statusPillClass(r.status)">
                            {{ r.status }}
                        </span>
                    }
                    <span class="text-sm text-stone-500 dark:text-stone-400">{{ formatDate(r.updatedAt || r.createdAt) }}</span>
                </div>

                <div class="lg:grid lg:grid-cols-12 lg:gap-10">
                    <aside class="mb-8 lg:sticky lg:top-24 lg:col-span-3 lg:mb-0 lg:self-start">
                        @if (hasEnrollmentSelfie(r)) {
                            <div
                                class="mb-6 overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900/50"
                            >
                                <div class="aspect-[3/4] w-full overflow-hidden bg-stone-100 dark:bg-gray-800">
                                    <img
                                        class="h-full w-full object-cover"
                                        [src]="enrollmentSelfieSrc(r)"
                                        alt=""
                                        loading="lazy"
                                    />
                                </div>
                                <p
                                    class="border-t border-stone-100 px-3 py-2.5 text-center text-xs font-medium text-stone-600 dark:border-gray-800 dark:text-stone-400"
                                >
                                    {{ 'smartEnrollProjects.recordDetail.livenessSelfie' | transloco }}
                                </p>
                            </div>
                        }
                        <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                            {{ 'smartEnrollProjects.recordDetail.stepsHeading' | transloco }}
                        </p>
                        <nav class="flex flex-col gap-1">
                            @for (step of ['information', 'email', 'phone', 'documents', 'biometrics', 'compare', 'verdict']; track step) {
                                <button
                                    type="button"
                                    class="record-stepper-btn"
                                    [class.record-stepper-btn--active]="activeStep() === step"
                                    (click)="scrollToStep($any(step))"
                                >
                                    <mat-icon
                                        class="icon-size-5 shrink-0"
                                        [ngClass]="{
                                            'record-stepper-icon--ok': stepState($any(step)) === 'ok',
                                            'record-stepper-icon--error': stepState($any(step)) === 'error',
                                            'record-stepper-icon--warn': stepState($any(step)) === 'warn',
                                            'record-stepper-icon--pending': stepState($any(step)) === 'pending',
                                        }"
                                    >
                                        {{ stepIcon($any(step)) }}
                                    </mat-icon>
                                    <span class="text-sm font-medium text-stone-800 dark:text-stone-200">{{
                                        'smartEnrollProjects.recordDetail.step.' + step | transloco
                                    }}</span>
                                </button>
                            }
                        </nav>
                    </aside>

                    <div class="space-y-8 lg:col-span-9">
                        <!-- Information -->
                        <section id="step-information" class="scroll-mt-28">
                            <div class="record-detail-panel">
                                <div class="record-detail-panel__header">
                                    <h2 class="text-lg font-semibold text-stone-900 dark:text-white">
                                        {{ 'smartEnrollProjects.recordDetail.section.information' | transloco }}
                                    </h2>
                                    @if (r.informationValidation && ($any(r.informationValidation)['updatedAt'] || $any(r.informationValidation)['createdAt'])) {
                                        <span class="text-xs text-stone-500 dark:text-stone-400">{{
                                            formatDate(
                                                $any(r.informationValidation)['updatedAt'] || $any(r.informationValidation)['createdAt'],
                                                true
                                            )
                                        }}</span>
                                    }
                                </div>
                                <div class="p-5 md:p-6">
                                    @if (informationRows(r).length === 0) {
                                        <p class="text-sm text-stone-500 dark:text-stone-400">
                                            {{ 'smartEnrollProjects.recordDetail.empty.information' | transloco }}
                                        </p>
                                    } @else {
                                        <dl class="grid gap-4 sm:grid-cols-2">
                                            @for (row of informationRows(r); track row.key) {
                                                <div>
                                                    <dt class="text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                                        {{ fieldLabel(row.key) }}
                                                    </dt>
                                                    <dd class="mt-1 text-sm font-medium text-stone-900 dark:text-stone-100">{{ row.value }}</dd>
                                                </div>
                                            }
                                        </dl>
                                    }
                                </div>
                            </div>

                            @if (technicalMetadataRows(r).length) {
                                <div class="record-detail-panel mt-6">
                                    <div class="record-detail-panel__header">
                                        <div class="min-w-0 flex-1">
                                            <h2 class="text-lg font-semibold text-stone-900 dark:text-white">
                                                {{ 'smartEnrollProjects.recordDetail.section.technicalMetadata' | transloco }}
                                            </h2>
                                            <p class="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                                                {{ 'smartEnrollProjects.recordDetail.section.technicalMetadataHint' | transloco }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-5 md:p-6">
                                        <dl class="grid gap-4 sm:grid-cols-2">
                                            @for (row of technicalMetadataRows(r); track row.key) {
                                                <div class="min-w-0" [class.sm:col-span-2]="technicalRowFullWidth(row.key)">
                                                    <dt class="text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400">
                                                        {{ fieldLabel(row.key) }}
                                                    </dt>
                                                    <dd
                                                        class="mt-1 break-words text-sm font-medium leading-relaxed text-stone-900 dark:text-stone-100"
                                                    >
                                                        {{ row.value }}
                                                    </dd>
                                                </div>
                                            }
                                        </dl>
                                    </div>
                                </div>
                            }
                        </section>

                        <!-- Email -->
                        @if (r.email || r.emailValidation) {
                            <section id="step-email" class="scroll-mt-28">
                                <div class="record-detail-panel">
                                    <div class="record-detail-panel__header">
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">
                                            {{ 'smartEnrollProjects.recordDetail.section.email' | transloco }}
                                        </h2>
                                        @if (r.emailValidation && $any(r.emailValidation)['updatedAt']) {
                                            <span class="text-xs text-stone-500">{{ formatDate($any(r.emailValidation)['updatedAt'], true) }}</span>
                                        }
                                    </div>
                                    <div class="p-5 md:p-6">
                                        <p class="text-sm text-stone-900 dark:text-white">
                                            {{ $any(r.emailValidation)?.email || r.email || '\u2014' }}
                                        </p>
                                        @if ($any(r.emailValidation)?.status === 'validated') {
                                            <span
                                                class="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200"
                                            >
                                                <mat-icon class="icon-size-3.5">verified</mat-icon>
                                                {{ 'smartEnrollProjects.recordDetail.validated' | transloco }}
                                            </span>
                                        }
                                    </div>
                                </div>
                            </section>
                        }

                        <!-- Phone -->
                        @if (r.phone || r.phoneValidation) {
                            <section id="step-phone" class="scroll-mt-28">
                                <div class="record-detail-panel">
                                    <div class="record-detail-panel__header">
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">
                                            {{ 'smartEnrollProjects.recordDetail.section.phone' | transloco }}
                                        </h2>
                                        @if (r.phoneValidation && $any(r.phoneValidation)['updatedAt']) {
                                            <span class="text-xs text-stone-500">{{ formatDate($any(r.phoneValidation)['updatedAt'], true) }}</span>
                                        }
                                    </div>
                                    <div class="p-5 md:p-6">
                                        <p class="text-sm text-stone-900 dark:text-white">
                                            @if ($any(r.phoneValidation)?.countryCode) {
                                                <span>{{ $any(r.phoneValidation).countryCode }} </span>
                                            }
                                            {{ $any(r.phoneValidation)?.phone || r.phone || '\u2014' }}
                                        </p>
                                        @if ($any(r.phoneValidation)?.status === 'validated') {
                                            <span
                                                class="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200"
                                            >
                                                <mat-icon class="icon-size-3.5">verified</mat-icon>
                                                {{ 'smartEnrollProjects.recordDetail.validated' | transloco }}
                                            </span>
                                        }
                                    </div>
                                </div>
                            </section>
                        }

                        <!-- Documents -->
                        <section id="step-documents" class="scroll-mt-28">
                            @if (r.failedDocumentValidations?.length) {
                                @for (failed of r.failedDocumentValidations!; track $index) {
                                    <div class="record-detail-panel mb-6 border-red-200/90 dark:border-red-900/40">
                                        <div class="record-detail-panel__header border-red-100 bg-red-50/50 dark:border-red-900/30 dark:bg-red-950/20">
                                            <h2 class="text-lg font-semibold text-red-900 dark:text-red-200">
                                                {{ 'smartEnrollProjects.recordDetail.section.documentFailed' | transloco }}
                                            </h2>
                                            @if ($any(failed)['updatedAt']) {
                                                <span class="text-xs text-red-700/80">{{ formatDate($any(failed)['updatedAt'], true) }}</span>
                                            }
                                        </div>
                                        <div class="grid gap-4 p-5 sm:grid-cols-2 md:p-6">
                                            @if ($any(failed)['url']) {
                                                <div>
                                                    <img
                                                        class="record-doc-img"
                                                        [src]="trustHttpUrl($any(failed)['url'])"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <p class="mt-2 text-center text-xs text-stone-500">{{ 'smartEnrollProjects.recordDetail.frontScan' | transloco }}</p>
                                                </div>
                                            }
                                            @if ($any(failed)['documentFace']?.base64) {
                                                <div>
                                                    <img
                                                        class="record-doc-img"
                                                        [src]="sanitizeBase64($any(failed)['documentFace'].base64)"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <p class="mt-2 text-center text-xs text-stone-500">
                                                        {{ 'smartEnrollProjects.recordDetail.documentFace' | transloco }}
                                                    </p>
                                                </div>
                                            }
                                        </div>
                                        @if ($any(failed)['scoreValidation']?.errorMessage) {
                                            <div class="border-t border-red-100 px-5 py-4 text-sm text-red-800 dark:border-red-900/40 dark:text-red-300 md:px-6">
                                                {{ $any(failed)['scoreValidation'].errorMessage }}
                                            </div>
                                        }
                                    </div>
                                }
                            }

                            @if (r.documentValidation) {
                                <div class="record-detail-panel">
                                    <div class="record-detail-panel__header">
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">
                                            {{ 'smartEnrollProjects.recordDetail.section.document' | transloco }}
                                        </h2>
                                        @if ($any(r.documentValidation)['updatedAt']) {
                                            <span class="text-xs text-stone-500">{{ formatDate($any(r.documentValidation)['updatedAt'], true) }}</span>
                                        }
                                    </div>
                                    <div class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 lg:grid-cols-3 md:p-6">
                                        @if ($any(r.documentValidation)['url']) {
                                            <div>
                                                <img
                                                    class="record-doc-img"
                                                    [src]="trustHttpUrl($any(r.documentValidation)['url'])"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <p class="mt-2 text-center text-xs text-stone-500">{{ 'smartEnrollProjects.recordDetail.frontScan' | transloco }}</p>
                                            </div>
                                        }
                                        @if (hasDocumentFace(r)) {
                                            <div>
                                                <img
                                                    class="record-doc-img"
                                                    [src]="documentFaceSrc(r)"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <p class="mt-2 text-center text-xs text-stone-500">
                                                    {{ 'smartEnrollProjects.recordDetail.documentFace' | transloco }}
                                                </p>
                                            </div>
                                        }
                                        @if ($any(r.documentValidation)['backUrl']) {
                                            <div>
                                                <img
                                                    class="record-doc-img"
                                                    [src]="trustHttpUrl($any(r.documentValidation)['backUrl'])"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <p class="mt-2 text-center text-xs text-stone-500">{{ 'smartEnrollProjects.recordDetail.backScan' | transloco }}</p>
                                            </div>
                                        }
                                    </div>

                                    @if ($any(r.documentValidation)['documentLiveness']) {
                                        @let l = $any(r.documentValidation)['documentLiveness'];
                                        <div class="border-t border-stone-100 px-5 py-5 dark:border-gray-800 md:px-6">
                                            <h3 class="text-sm font-semibold text-stone-900 dark:text-white">
                                                {{ 'smartEnrollProjects.recordDetail.documentLiveness' | transloco }}
                                            </h3>
                                            <span
                                                class="mt-2 inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold"
                                                [ngClass]="
                                                    l.isLive
                                                        ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200'
                                                        : 'bg-red-100 text-red-900 dark:bg-red-950/50 dark:text-red-200'
                                                "
                                            >
                                                {{ l.isLive ? ('smartEnrollProjects.recordDetail.livenessPassed' | transloco) : ('smartEnrollProjects.recordDetail.livenessFailed' | transloco) }}
                                            </span>
                                        </div>
                                    }

                                    @if (ocrDisplayKeys().length) {
                                        <div class="border-t border-stone-100 dark:border-gray-800">
                                            <div class="record-detail-panel__header !border-0">
                                                <h3 class="text-base font-semibold text-stone-900 dark:text-white">
                                                    {{ 'smartEnrollProjects.recordDetail.ocr' | transloco }}
                                                </h3>
                                            </div>
                                            <div class="grid gap-3 px-5 pb-6 md:grid-cols-2 md:px-6">
                                                @for (key of ocrDisplayKeys(); track key) {
                                                    <div class="rounded-xl border border-stone-100 bg-stone-50/80 px-3 py-2 dark:border-gray-800 dark:bg-gray-800/40">
                                                        <p class="text-xs font-medium text-stone-500 dark:text-stone-400">{{ key }}</p>
                                                        <p class="text-sm font-medium text-stone-900 dark:text-stone-100">{{ ocrData()[key] }}</p>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            } @else if (!(r.failedDocumentValidations?.length)) {
                                <div class="record-detail-panel">
                                    <div class="p-6 text-sm text-stone-500 dark:text-stone-400">
                                        {{ 'smartEnrollProjects.recordDetail.empty.documents' | transloco }}
                                    </div>
                                </div>
                            }
                        </section>

                        <!-- Biometrics -->
                        <section id="step-biometrics" class="scroll-mt-28">
                            @if (r.failedBiometricValidations?.length) {
                                @for (fb of r.failedBiometricValidations!; track $index) {
                                    <div class="record-detail-panel mb-6 border-red-200/90 dark:border-red-900/40">
                                        <div class="record-detail-panel__header border-red-100 bg-red-50/50 dark:border-red-900/30 dark:bg-red-950/20">
                                            <h2 class="text-lg font-semibold text-red-900 dark:text-red-200">
                                                {{ 'smartEnrollProjects.recordDetail.section.biometricFailed' | transloco }}
                                            </h2>
                                        </div>
                                        <div class="p-5 text-sm text-red-800 dark:text-red-300 md:p-6">
                                            {{ $any(fb)['errorMessage'] || ('smartEnrollProjects.recordDetail.biometricFailedHint' | transloco) }}
                                        </div>
                                    </div>
                                }
                            }

                            @if (r.biometricValidation) {
                                <div class="record-detail-panel">
                                    <div class="record-detail-panel__header">
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">
                                            {{ 'smartEnrollProjects.recordDetail.section.biometric' | transloco }}
                                        </h2>
                                        @if ($any(r.biometricValidation)['updatedAt']) {
                                            <span class="text-xs text-stone-500">{{ formatDate($any(r.biometricValidation)['updatedAt'], true) }}</span>
                                        }
                                    </div>
                                    <div class="flex flex-col items-center gap-6 p-5 md:flex-row md:items-start md:p-6">
                                        @if (hasEnrollmentSelfie(r)) {
                                            <img
                                                class="h-16 w-16 shrink-0 rounded-lg border border-stone-200 object-cover dark:border-gray-700"
                                                [src]="enrollmentSelfieSrc(r)"
                                                alt=""
                                                loading="lazy"
                                            />
                                        }
                                        <div class="min-w-0 flex-1 space-y-4">
                                            @if ($any(r.biometricValidation)['livenessScore'] != null) {
                                                @let minLiv = livenessMinScorePercent();
                                                <div>
                                                    <div class="flex items-center justify-between gap-2 text-sm">
                                                        <span class="text-stone-600 dark:text-stone-400">{{
                                                            'smartEnrollProjects.recordDetail.livenessScore' | transloco
                                                        }}</span>
                                                        <span class="font-semibold tabular-nums text-stone-900 dark:text-white">{{
                                                            livenessDisplayPercent()
                                                        }}%</span>
                                                    </div>
                                                    <div class="record-progress-track mt-2">
                                                        <div
                                                            class="record-progress-fill bg-emerald-500"
                                                            [style.width.%]="livenessDisplayPercent()"
                                                        ></div>
                                                    </div>
                                                    @if (minLiv != null) {
                                                        <div class="mt-4 flex items-center justify-between gap-2 text-sm">
                                                            <span class="text-stone-600 dark:text-stone-400">{{
                                                                'smartEnrollProjects.recordDetail.livenessMinimum' | transloco
                                                            }}</span>
                                                            <span class="font-semibold tabular-nums text-stone-900 dark:text-white"
                                                                >{{ minLiv }}%</span
                                                            >
                                                        </div>
                                                        <div class="record-progress-track mt-2">
                                                            <div
                                                                class="record-progress-fill bg-stone-400 dark:bg-stone-500"
                                                                [style.width.%]="minLiv"
                                                            ></div>
                                                        </div>
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            } @else if (!(r.failedBiometricValidations?.length)) {
                                <div class="record-detail-panel">
                                    <div class="p-6 text-sm text-stone-500 dark:text-stone-400">
                                        {{ 'smartEnrollProjects.recordDetail.empty.biometrics' | transloco }}
                                    </div>
                                </div>
                            }
                        </section>

                        <!-- Compare & name match -->
                        <section id="step-compare" class="scroll-mt-28">
                            @if ($any(r.compareFaceVerification)?.result; as cmpResult) {
                                @if (cmpResult.score != null) {
                                @let minPct = compareMinScorePercent();
                                <div class="record-detail-panel">
                                    <div class="record-detail-panel__header">
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">
                                            {{ 'smartEnrollProjects.recordDetail.section.faceCompare' | transloco }}
                                        </h2>
                                    </div>
                                    <div class="p-5 md:p-6">
                                        <div class="flex items-center justify-between gap-2 text-sm">
                                            <span class="text-stone-600 dark:text-stone-400">{{ 'smartEnrollProjects.recordDetail.compareScore' | transloco }}</span>
                                            <span class="font-semibold tabular-nums text-stone-900 dark:text-white">{{ compareScore() }}%</span>
                                        </div>
                                        <div class="record-progress-track mt-2">
                                            <div class="record-progress-fill bg-indigo-500" [style.width.%]="compareScore()"></div>
                                        </div>
                                        @if (minPct != null) {
                                            <div class="mt-4 flex items-center justify-between gap-2 text-sm">
                                                <span class="text-stone-600 dark:text-stone-400">{{
                                                    'smartEnrollProjects.recordDetail.compareMinimum' | transloco
                                                }}</span>
                                                <span class="font-semibold tabular-nums text-stone-900 dark:text-white">{{ minPct }}%</span>
                                            </div>
                                            <div class="record-progress-track mt-2">
                                                <div
                                                    class="record-progress-fill bg-stone-400 dark:bg-stone-500"
                                                    [style.width.%]="minPct"
                                                ></div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                }
                            }

                            @if (showNameMatchCard()) {
                                @let nmDoc = nameMatchColumn(r, 'document');
                                @let nmForm = nameMatchColumn(r, 'information');
                                <div class="record-detail-panel mt-6">
                                    <div class="record-detail-panel__header">
                                        <h2 class="text-lg font-semibold text-stone-900 dark:text-white">
                                            {{ 'smartEnrollProjects.recordDetail.verifyNames' | transloco }}
                                        </h2>
                                        @if ($any(r.documentValidation)?.['updatedAt']) {
                                            <span class="text-xs font-normal text-stone-500 dark:text-stone-400">{{
                                                formatDate($any(r.documentValidation)['updatedAt'], true)
                                            }}</span>
                                        }
                                    </div>
                                    <div class="p-5 md:p-6">
                                        <div
                                            class="grid grid-cols-1 gap-6"
                                            [ngClass]="{
                                                'md:grid-cols-2':
                                                    showNameMatch() ||
                                                    (nameMatchColumnHasData(nmDoc) && nameMatchColumnHasData(nmForm)),
                                            }"
                                        >
                                            @if (showNameMatch() || nameMatchColumnHasData(nmDoc)) {
                                                <div
                                                    class="rounded-lg border border-stone-100 bg-stone-50/90 p-4 dark:border-gray-800 dark:bg-gray-800/40"
                                                >
                                                    <div
                                                        class="mb-4 border-b border-stone-200 pb-2 text-sm font-semibold uppercase tracking-wider text-stone-500 dark:border-gray-700 dark:text-stone-400"
                                                    >
                                                        {{ 'smartEnrollProjects.recordDetail.compareGovernmentId' | transloco }}
                                                    </div>
                                                    <div class="space-y-3">
                                                        @if (showNameMatchPctRow(nmDoc.firstNameMatchPercentage)) {
                                                            <div class="flex items-center justify-between gap-3">
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{
                                                                    'smartEnrollProjects.recordDetail.firstNameMatch' | transloco
                                                                }}</span>
                                                                <span
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold tabular-nums text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                                                    >{{ formatNameMatchPercent(nmDoc.firstNameMatchPercentage) }}</span
                                                                >
                                                            </div>
                                                        }
                                                        @if (showNameMatchPctRow(nmDoc.lastNameMatchPercentage)) {
                                                            <div class="flex items-center justify-between gap-3">
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{
                                                                    'smartEnrollProjects.recordDetail.lastNameMatch' | transloco
                                                                }}</span>
                                                                <span
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold tabular-nums text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                                                    >{{ formatNameMatchPercent(nmDoc.lastNameMatchPercentage) }}</span
                                                                >
                                                            </div>
                                                        }
                                                        @if (showNameMatchPctRow(nmDoc.fullNameMatchPercentage)) {
                                                            <div class="flex items-center justify-between gap-3">
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{
                                                                    'smartEnrollProjects.recordDetail.fullNameMatch' | transloco
                                                                }}</span>
                                                                <span
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold tabular-nums text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                                                    >{{ formatNameMatchPercent(nmDoc.fullNameMatchPercentage) }}</span
                                                                >
                                                            </div>
                                                        }
                                                        @if (nmDoc.namesMatch != null) {
                                                            <div class="flex items-center justify-between gap-3">
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{
                                                                    'smartEnrollProjects.recordDetail.field.namesMatch' | transloco
                                                                }}</span>
                                                                <span
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                                                >
                                                                    {{
                                                                        nmDoc.namesMatch
                                                                            ? ('smartEnrollProjects.recordDetail.boolYes' | transloco)
                                                                            : ('smartEnrollProjects.recordDetail.boolNo' | transloco)
                                                                    }}
                                                                </span>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            }
                                            @if (showNameMatch() || nameMatchColumnHasData(nmForm)) {
                                                <div
                                                    class="rounded-lg border border-stone-100 bg-stone-50/90 p-4 dark:border-gray-800 dark:bg-gray-800/40"
                                                >
                                                    <div
                                                        class="mb-4 border-b border-stone-200 pb-2 text-sm font-semibold uppercase tracking-wider text-stone-500 dark:border-gray-700 dark:text-stone-400"
                                                    >
                                                        {{ 'smartEnrollProjects.recordDetail.compareGovernmentForm' | transloco }}
                                                    </div>
                                                    <div class="space-y-3">
                                                        @if (showNameMatchPctRow(nmForm.firstNameMatchPercentage)) {
                                                            <div class="flex items-center justify-between gap-3">
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{
                                                                    'smartEnrollProjects.recordDetail.firstNameMatch' | transloco
                                                                }}</span>
                                                                <span
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold tabular-nums text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                                                    >{{ formatNameMatchPercent(nmForm.firstNameMatchPercentage) }}</span
                                                                >
                                                            </div>
                                                        }
                                                        @if (showNameMatchPctRow(nmForm.lastNameMatchPercentage)) {
                                                            <div class="flex items-center justify-between gap-3">
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{
                                                                    'smartEnrollProjects.recordDetail.lastNameMatch' | transloco
                                                                }}</span>
                                                                <span
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold tabular-nums text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                                                    >{{ formatNameMatchPercent(nmForm.lastNameMatchPercentage) }}</span
                                                                >
                                                            </div>
                                                        }
                                                        @if (showNameMatchPctRow(nmForm.fullNameMatchPercentage)) {
                                                            <div class="flex items-center justify-between gap-3">
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{
                                                                    'smartEnrollProjects.recordDetail.fullNameMatch' | transloco
                                                                }}</span>
                                                                <span
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold tabular-nums text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                                                    >{{ formatNameMatchPercent(nmForm.fullNameMatchPercentage) }}</span
                                                                >
                                                            </div>
                                                        }
                                                        @if (nmForm.namesMatch != null) {
                                                            <div class="flex items-center justify-between gap-3">
                                                                <span class="text-sm text-stone-600 dark:text-stone-400">{{
                                                                    'smartEnrollProjects.recordDetail.field.namesMatch' | transloco
                                                                }}</span>
                                                                <span
                                                                    class="rounded border border-stone-100 bg-white px-2 py-1 text-sm font-semibold text-stone-900 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                                                >
                                                                    {{
                                                                        nmForm.namesMatch
                                                                            ? ('smartEnrollProjects.recordDetail.boolYes' | transloco)
                                                                            : ('smartEnrollProjects.recordDetail.boolNo' | transloco)
                                                                    }}
                                                                </span>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            }

                            @if ($any(r.compareFaceVerification)?.result?.score == null && !showNameMatchCard()) {
                                <div class="record-detail-panel">
                                    <div class="p-6 text-sm text-stone-500 dark:text-stone-400">
                                        {{ 'smartEnrollProjects.recordDetail.empty.compare' | transloco }}
                                    </div>
                                </div>
                            }
                        </section>

                        <!-- Verdict -->
                        <section id="step-verdict" class="scroll-mt-28">
                            <div class="record-detail-panel overflow-hidden">
                                <div class="record-detail-panel__header">
                                    <h2 class="text-lg font-semibold text-stone-900 dark:text-white">
                                        {{ 'smartEnrollProjects.recordDetail.section.verdict' | transloco }}
                                    </h2>
                                    <span class="text-xs text-stone-500">{{ formatDate(r.updatedAt, true) }}</span>
                                </div>
                                <div class="p-6 md:p-8">
                                    <div class="rounded-2xl border p-6 md:p-8" [ngClass]="verdictPanelClass(r.status)">
                                        <div class="flex flex-col items-center gap-4 text-center">
                                            @if (r.status === 'COMPLETED') {
                                                <mat-icon class="icon-size-10 text-emerald-600 dark:text-emerald-400">check_circle</mat-icon>
                                            } @else if (r.status === 'COMPLETED_WITHOUT_KYC') {
                                                <mat-icon class="icon-size-10 text-amber-600 dark:text-amber-400">warning</mat-icon>
                                            } @else if (r.status === 'FAILED') {
                                                <mat-icon class="icon-size-10 text-red-600 dark:text-red-400">cancel</mat-icon>
                                            } @else if (r.status === 'NEEDS_MANUAL_VERIFICATION') {
                                                <mat-icon class="icon-size-10 text-orange-600 dark:text-orange-400">person_search</mat-icon>
                                            } @else {
                                                <mat-icon class="icon-size-10 text-stone-400">hourglass_empty</mat-icon>
                                            }
                                            <div>
                                                <p class="text-xl font-semibold text-stone-900 dark:text-white">
                                                    {{ verdictTitleKey(r.status) | transloco }}
                                                </p>
                                                <p class="mt-2 text-sm text-stone-600 dark:text-stone-400">
                                                    {{ verdictSubtitleKey(r.status) | transloco }}
                                                </p>
                                            </div>
                                            @if (r.status === 'NEEDS_MANUAL_VERIFICATION' && manualReasons().length) {
                                                <ul class="w-full max-w-lg list-disc space-y-1 pl-5 text-left text-sm text-orange-900 dark:text-orange-200">
                                                    @for (reason of manualReasons(); track reason.key) {
                                                        <li>{{ reason.key | transloco: reason.params }}</li>
                                                    }
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div class="no-print flex flex-col gap-3 border-t border-stone-200/90 pt-8 dark:border-gray-800">
                            @if (deleteErrorKey()) {
                                <div
                                    class="rounded-xl border border-red-200/90 bg-red-50/90 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"
                                >
                                    {{ deleteErrorKey()! | transloco }}
                                </div>
                            }
                            <div class="flex flex-wrap items-center gap-3">
                                <button
                                    mat-stroked-button
                                    type="button"
                                    color="warn"
                                    class="rounded-xl"
                                    [disabled]="deleteLoading()"
                                    (click)="confirmDeleteRecord()"
                                >
                                    {{ 'smartEnrollProjects.recordDetail.deleteEnrollment' | transloco }}
                                </button>
                                @if (deleteLoading()) {
                                    <mat-spinner diameter="24"></mat-spinner>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                }
            }
        </div>
    </main>

    @if (record(); as r) {
        <div class="print-only" [id]="printSectionId">
        <section class="enrollment-resume" [style]="brandingVars()">
            <header class="enrollment-resume__header">
                @if (hasEnrollmentSelfie(r)) {
                    <img class="enrollment-resume__avatar" [src]="enrollmentSelfieSrc(r)" alt="" />
                }
                <div class="enrollment-resume__identity">
                    <h1 class="enrollment-resume__name">{{ displayName(r) }}</h1>
                    <p class="enrollment-resume__tagline">
                        {{ 'smartEnrollProjects.recordDetail.resume.tagline' | transloco }}
                    </p>
                    @if (resumeFacts(r).length) {
                        <p class="enrollment-resume__facts">
                            @for (fact of resumeFacts(r); track fact) {
                                <span>{{ fact }}</span>
                            }
                        </p>
                    }
                    <p class="enrollment-resume__id">{{ r._id }}</p>
                </div>
                <div class="enrollment-resume__meta">
                    @if (projectLogo()) {
                        <img class="enrollment-resume__logo" [src]="projectLogo()" alt="" />
                    }
                    @if (r.status) {
                        <span class="enrollment-resume__status">{{ r.status }}</span>
                    }
                    <span class="enrollment-resume__date">{{ formatDate(r.updatedAt || r.createdAt) }}</span>
                </div>
            </header>

            <div [class.enrollment-resume__two-col]="resumePersonalRows(r).length" [class.enrollment-resume__one-col]="!resumePersonalRows(r).length">
                @if (resumeContactRows(r).length) {
                    <section class="enrollment-resume__card">
                        <h2 class="enrollment-resume__card-title">
                            {{ 'smartEnrollProjects.recordDetail.resume.contact' | transloco }}
                        </h2>
                        <dl class="enrollment-resume__list">
                            @for (row of resumeContactRows(r); track row.key) {
                                <div class="enrollment-resume__row">
                                    <dt>{{ 'smartEnrollProjects.recordDetail.field.' + row.key | transloco }}</dt>
                                    <dd>
                                        <span>{{ row.value }}</span>
                                        @if (row.validated) {
                                            <span class="enrollment-resume__badge">
                                                {{ 'smartEnrollProjects.recordDetail.validated' | transloco }}
                                            </span>
                                        }
                                    </dd>
                                </div>
                            }
                        </dl>
                    </section>
                }

                @if (resumePersonalRows(r).length) {
                    <section class="enrollment-resume__card">
                        <h2 class="enrollment-resume__card-title">
                            {{ 'smartEnrollProjects.recordDetail.resume.personal' | transloco }}
                        </h2>
                        <dl class="enrollment-resume__list">
                            @for (row of resumePersonalRows(r); track row.key) {
                                <div class="enrollment-resume__row">
                                    <dt>{{ fieldLabel(row.key) }}</dt>
                                    <dd>{{ row.value }}</dd>
                                </div>
                            }
                        </dl>
                    </section>
                }
            </div>

            @if (hasDocumentScans(r) || resumeDocumentFields().length) {
                <section class="enrollment-resume__card">
                    <h2 class="enrollment-resume__card-title">
                        {{ 'smartEnrollProjects.recordDetail.resume.identityDocument' | transloco }}
                    </h2>
                    @if (hasDocumentScans(r)) {
                        <div class="enrollment-resume__doc-grid">
                            @if (documentFrontSrc(r)) {
                                <figure>
                                    <img [src]="documentFrontSrc(r)" alt="" />
                                    <figcaption>
                                        {{ 'smartEnrollProjects.recordDetail.frontScan' | transloco }}
                                    </figcaption>
                                </figure>
                            }
                            @if (hasDocumentFace(r)) {
                                <figure>
                                    <img [src]="documentFaceSrc(r)" alt="" />
                                    <figcaption>
                                        {{ 'smartEnrollProjects.recordDetail.documentFace' | transloco }}
                                    </figcaption>
                                </figure>
                            }
                            @if (documentBackSrc(r)) {
                                <figure>
                                    <img [src]="documentBackSrc(r)" alt="" />
                                    <figcaption>
                                        {{ 'smartEnrollProjects.recordDetail.backScan' | transloco }}
                                    </figcaption>
                                </figure>
                            }
                        </div>
                    }
                    @if (resumeDocumentFields().length) {
                        <dl class="enrollment-resume__list enrollment-resume__list--two-col">
                            @if (resumeDocumentFullName()) {
                                <div class="enrollment-resume__row enrollment-resume__row--full">
                                    <dt>{{ 'smartEnrollProjects.recordDetail.resume.extractedName' | transloco }}</dt>
                                    <dd>{{ resumeDocumentFullName() }}</dd>
                                </div>
                            }
                            @for (row of resumeDocumentFields(); track row.key) {
                                <div class="enrollment-resume__row">
                                    <dt>{{ row.key }}</dt>
                                    <dd>{{ row.value }}</dd>
                                </div>
                            }
                        </dl>
                    }
                </section>
            }

            @if (livenessMinScorePercent() != null || compareMinScorePercent() != null || showNameMatchCard()) {
                <section class="enrollment-resume__card">
                    <h2 class="enrollment-resume__card-title">
                        {{ 'smartEnrollProjects.recordDetail.resume.biometrics' | transloco }}
                    </h2>
                    <div class="enrollment-resume__scores">
                        @if (livenessMinScorePercent() != null) {
                            <div class="enrollment-resume__score" [style.--v]="livenessDisplayPercent()">
                                <span class="enrollment-resume__score-label">
                                    {{ 'smartEnrollProjects.recordDetail.livenessScore' | transloco }}
                                </span>
                                <span class="enrollment-resume__score-value">{{ livenessDisplayPercent() }}%</span>
                                <span class="enrollment-resume__score-min">
                                    {{ 'smartEnrollProjects.recordDetail.livenessMinimum' | transloco }} {{ livenessMinScorePercent() }}%
                                </span>
                            </div>
                        }
                        @if (compareMinScorePercent() != null) {
                            <div class="enrollment-resume__score" [style.--v]="compareScore()">
                                <span class="enrollment-resume__score-label">
                                    {{ 'smartEnrollProjects.recordDetail.compareScore' | transloco }}
                                </span>
                                <span class="enrollment-resume__score-value">{{ compareScore() }}%</span>
                                <span class="enrollment-resume__score-min">
                                    {{ 'smartEnrollProjects.recordDetail.compareMinimum' | transloco }} {{ compareMinScorePercent() }}%
                                </span>
                            </div>
                        }
                    </div>

                    @if (showNameMatchCard()) {
                        @let nmDoc = nameMatchColumn(r, 'document');
                        @let nmForm = nameMatchColumn(r, 'information');
                        <div class="enrollment-resume__name-match">
                            @if (nameMatchColumnHasData(nmDoc)) {
                                <div>
                                    <h3>{{ 'smartEnrollProjects.recordDetail.compareGovernmentId' | transloco }}</h3>
                                    <ul>
                                        <li>
                                            {{ 'smartEnrollProjects.recordDetail.firstNameMatch' | transloco }}
                                            <strong>{{ formatNameMatchPercent(nmDoc.firstNameMatchPercentage) }}</strong>
                                        </li>
                                        <li>
                                            {{ 'smartEnrollProjects.recordDetail.lastNameMatch' | transloco }}
                                            <strong>{{ formatNameMatchPercent(nmDoc.lastNameMatchPercentage) }}</strong>
                                        </li>
                                        <li>
                                            {{ 'smartEnrollProjects.recordDetail.fullNameMatch' | transloco }}
                                            <strong>{{ formatNameMatchPercent(nmDoc.fullNameMatchPercentage) }}</strong>
                                        </li>
                                    </ul>
                                </div>
                            }
                            @if (nameMatchColumnHasData(nmForm)) {
                                <div>
                                    <h3>{{ 'smartEnrollProjects.recordDetail.compareGovernmentForm' | transloco }}</h3>
                                    <ul>
                                        <li>
                                            {{ 'smartEnrollProjects.recordDetail.firstNameMatch' | transloco }}
                                            <strong>{{ formatNameMatchPercent(nmForm.firstNameMatchPercentage) }}</strong>
                                        </li>
                                        <li>
                                            {{ 'smartEnrollProjects.recordDetail.lastNameMatch' | transloco }}
                                            <strong>{{ formatNameMatchPercent(nmForm.lastNameMatchPercentage) }}</strong>
                                        </li>
                                        <li>
                                            {{ 'smartEnrollProjects.recordDetail.fullNameMatch' | transloco }}
                                            <strong>{{ formatNameMatchPercent(nmForm.fullNameMatchPercentage) }}</strong>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    }
                </section>
            }

            <section class="enrollment-resume__card enrollment-resume__card--verdict">
                <h2 class="enrollment-resume__card-title">
                    {{ 'smartEnrollProjects.recordDetail.resume.verdict' | transloco }}
                </h2>
                <p class="enrollment-resume__verdict-title">
                    {{ verdictTitleKey(r.status) | transloco }}
                </p>
                <p class="enrollment-resume__verdict-sub">
                    {{ verdictSubtitleKey(r.status) | transloco }}
                </p>
                @if (manualReasons().length) {
                    <ul class="enrollment-resume__reasons">
                        @for (reason of manualReasons(); track reason.key) {
                            <li>{{ reason.key | transloco: reason.params }}</li>
                        }
                    </ul>
                }
            </section>

            <footer class="enrollment-resume__footer">
                {{
                    'smartEnrollProjects.recordDetail.resume.recordFooter'
                        | transloco: { id: r._id, printedOn: printedOn() }
                }}
            </footer>
        </section>
        </div>
    }
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/projects/project-record-detail.component.scss */\n:host {\n  display: block;\n}\n.record-detail-panel {\n  overflow: hidden;\n  border-radius: 1.5rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.record-detail-panel:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.record-detail-panel {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.record-detail-panel__header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(245 245 244 / var(--tw-border-opacity, 1));\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n@media (min-width: 960px) {\n  .record-detail-panel__header {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n}\n.record-detail-panel__header:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));\n}\n.record-detail-meta {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1rem;\n}\n.record-detail-meta:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.5);\n}\n.record-detail-meta {\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\n}\n.record-detail-code {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1));\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-family:\n    "IBM Plex Mono",\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.025em;\n  --tw-text-opacity: 1;\n  color: rgb(68 64 60 / var(--tw-text-opacity, 1));\n}\n.record-detail-code:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity, 1));\n}\n.record-stepper-btn {\n  display: flex;\n  width: 100%;\n  align-items: flex-start;\n  gap: 0.75rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: transparent;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n  text-align: left;\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.record-stepper-btn:hover {\n  border-color: rgb(231 229 228 / 0.8);\n  background-color: rgb(250 250 249 / 0.9);\n}\n.record-stepper-btn:hover:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(30 41 59 / 0.5);\n}\n.record-stepper-btn--active {\n  --tw-border-opacity: 1;\n  border-color: rgb(214 211 209 / var(--tw-border-opacity, 1));\n  background-color: rgb(245 245 244 / 0.9);\n}\n.record-stepper-btn--active:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(71 85 105 / var(--tw-border-opacity, 1));\n  background-color: rgb(30 41 59 / 0.8);\n}\n.record-stepper-icon--ok {\n  --tw-text-opacity: 1;\n  color: rgb(5 150 105 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--ok:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(52 211 153 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--error {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--error:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--warn {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--warn:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 191 36 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--pending {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity, 1));\n}\n.record-stepper-icon--pending:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity, 1));\n}\n.record-verdict--ok {\n  border-color: rgb(167 243 208 / 0.9);\n  background-color: rgb(236 253 245 / 0.9);\n}\n.record-verdict--ok:where(.dark, .dark *) {\n  border-color: rgb(6 78 59 / 0.4);\n  background-color: rgb(2 44 34 / 0.3);\n}\n.record-verdict--warn {\n  border-color: rgb(253 230 138 / 0.9);\n  background-color: rgb(255 251 235 / 0.9);\n}\n.record-verdict--warn:where(.dark, .dark *) {\n  border-color: rgb(120 53 15 / 0.4);\n  background-color: rgb(69 26 3 / 0.3);\n}\n.record-verdict--error {\n  border-color: rgb(254 202 202 / 0.9);\n  background-color: rgb(254 242 242 / 0.9);\n}\n.record-verdict--error:where(.dark, .dark *) {\n  border-color: rgb(127 29 29 / 0.4);\n  background-color: rgb(69 10 10 / 0.3);\n}\n.record-verdict--manual {\n  border-color: rgb(254 215 170 / 0.9);\n  background-color: rgb(255 247 237 / 0.9);\n}\n.record-verdict--manual:where(.dark, .dark *) {\n  border-color: rgb(124 45 18 / 0.4);\n  background-color: rgb(67 20 7 / 0.3);\n}\n.record-verdict--pending {\n  border-color: rgb(231 229 228 / 0.9);\n  background-color: rgb(250 250 249 / 0.9);\n}\n.record-verdict--pending:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n  background-color: rgb(15 23 42 / 0.4);\n}\n.record-doc-img {\n  max-height: 16rem;\n  width: 100%;\n  max-width: 28rem;\n  border-radius: 1rem;\n  border-width: 1px;\n  border-color: rgb(231 229 228 / 0.9);\n  object-fit: contain;\n}\n.record-doc-img:where(.dark, .dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));\n}\n.record-progress-track {\n  height: 0.5rem;\n  width: 100%;\n  max-width: 28rem;\n  overflow: hidden;\n  border-radius: 9999px;\n  background-color: rgb(231 229 228 / 0.8);\n}\n.record-progress-track:where(.dark, .dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n}\n.record-progress-fill {\n  height: 100%;\n  border-radius: 9999px;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 500ms;\n}\n.print-only {\n  display: none;\n}\n.enrollment-resume {\n  --resume-primary: #111827;\n  --resume-ink: #0f172a;\n  --resume-muted: #667085;\n  --resume-faint: #98a2b3;\n  --resume-rule: #eceff1;\n  --resume-track: #f2f4f7;\n  color: var(--resume-ink);\n  background: #ffffff;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "SF Pro Text",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  font-feature-settings:\n    "cv11",\n    "ss01",\n    "ss03",\n    "tnum";\n  font-variant-numeric: tabular-nums;\n  font-size: 10pt;\n  line-height: 1.4;\n  orphans: 3;\n  widows: 3;\n}\n.enrollment-resume__header {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: flex-start;\n  gap: 16pt;\n  padding-bottom: 12pt;\n  border-bottom: 0.5pt solid var(--resume-rule);\n  margin-bottom: 14pt;\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n.enrollment-resume__avatar {\n  width: 24mm;\n  height: 24mm;\n  object-fit: cover;\n  border-radius: 3pt;\n  border: 0.5pt solid var(--resume-rule);\n  background: var(--resume-track);\n}\n.enrollment-resume__identity {\n  min-width: 0;\n}\n.enrollment-resume__name {\n  margin: 0;\n  font-size: 24pt;\n  font-weight: 600;\n  letter-spacing: -0.022em;\n  line-height: 1.05;\n  color: var(--resume-ink);\n}\n.enrollment-resume__tagline {\n  margin: 4pt 0 0;\n  font-size: 7.5pt;\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  color: var(--resume-faint);\n  font-weight: 500;\n}\n.enrollment-resume__id {\n  margin: 8pt 0 0;\n  font-family:\n    "JetBrains Mono",\n    "SFMono-Regular",\n    Menlo,\n    Consolas,\n    monospace;\n  font-size: 8pt;\n  color: var(--resume-muted);\n  word-break: break-all;\n}\n.enrollment-resume__facts {\n  margin: 6pt 0 0;\n  font-size: 9pt;\n  color: var(--resume-muted);\n  letter-spacing: 0;\n  line-height: 1.3;\n}\n.enrollment-resume__facts span + span::before {\n  content: " \\b7  ";\n  color: var(--resume-faint);\n}\n.enrollment-resume__one-col {\n  display: block;\n}\n.enrollment-resume__meta {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6pt;\n}\n.enrollment-resume__logo {\n  max-width: 26mm;\n  max-height: 12mm;\n  object-fit: contain;\n  margin-bottom: 4pt;\n}\n.enrollment-resume__status {\n  display: inline-block;\n  padding: 2.5pt 9pt;\n  border: 0.6pt solid var(--resume-primary);\n  border-radius: 999pt;\n  font-size: 7.5pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: var(--resume-primary);\n}\n.enrollment-resume__date {\n  font-size: 8.5pt;\n  color: var(--resume-muted);\n  font-variant-numeric: tabular-nums;\n}\n.enrollment-resume__two-col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 24pt;\n  row-gap: 0;\n}\n.enrollment-resume__card {\n  padding: 12pt 0;\n  border-top: 0.4pt solid var(--resume-rule);\n}\n.enrollment-resume__card:first-of-type,\n.enrollment-resume__two-col .enrollment-resume__card {\n  border-top: 0;\n  padding-top: 0;\n}\n.enrollment-resume__card-title {\n  margin: 0 0 8pt;\n  font-size: 7.5pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.18em;\n  color: var(--resume-muted);\n  page-break-after: avoid;\n  break-after: avoid;\n}\n.enrollment-resume__list {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 0;\n}\n.enrollment-resume__list--two-col {\n  grid-template-columns: 1fr 1fr;\n  column-gap: 24pt;\n}\n.enrollment-resume__row {\n  display: grid;\n  grid-template-columns: 110pt 1fr;\n  column-gap: 12pt;\n  padding: 2.5pt 0;\n  align-items: baseline;\n}\n.enrollment-resume__row--full {\n  grid-column: 1/-1;\n}\n.enrollment-resume__row dt {\n  font-size: 8pt;\n  color: var(--resume-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 500;\n}\n.enrollment-resume__row dd {\n  margin: 0;\n  font-size: 10pt;\n  color: var(--resume-ink);\n  font-weight: 500;\n  word-break: break-word;\n}\n.enrollment-resume__badge {\n  display: inline-block;\n  margin-left: 6pt;\n  padding: 0.5pt 5pt;\n  border-radius: 3pt;\n  font-size: 7pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #047857;\n  background: rgba(16, 185, 129, 0.1);\n}\n.enrollment-resume__doc-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 10pt;\n  row-gap: 6pt;\n  margin-bottom: 10pt;\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n.enrollment-resume__doc-grid figure {\n  margin: 0;\n  text-align: center;\n}\n.enrollment-resume__doc-grid figure img {\n  width: 100%;\n  max-height: 32mm;\n  object-fit: contain;\n  border: 0.5pt solid var(--resume-rule);\n  border-radius: 2pt;\n  background: var(--resume-track);\n}\n.enrollment-resume__doc-grid figure figcaption {\n  margin-top: 4pt;\n  font-size: 7.5pt;\n  color: var(--resume-faint);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.enrollment-resume__scores {\n  display: flex;\n  flex-direction: column;\n  gap: 10pt;\n}\n.enrollment-resume__score {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  column-gap: 12pt;\n  align-items: baseline;\n  padding-bottom: 4pt;\n  page-break-inside: avoid;\n  break-inside: avoid;\n  position: relative;\n}\n.enrollment-resume__score::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.5pt;\n  background:\n    linear-gradient(\n      to right,\n      var(--resume-primary) 0%,\n      var(--resume-primary) calc(var(--v, 0) * 1%),\n      var(--resume-track) calc(var(--v, 0) * 1%),\n      var(--resume-track) 100%);\n  border-radius: 999pt;\n}\n.enrollment-resume__score-label {\n  font-weight: 500;\n  font-size: 9.5pt;\n  color: var(--resume-ink);\n}\n.enrollment-resume__score-value {\n  font-weight: 600;\n  font-size: 13pt;\n  color: var(--resume-ink);\n  font-variant-numeric: tabular-nums;\n  letter-spacing: -0.01em;\n}\n.enrollment-resume__score-min {\n  font-size: 8pt;\n  color: var(--resume-muted);\n  white-space: nowrap;\n}\n.enrollment-resume__name-match {\n  margin-top: 12pt;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18pt;\n}\n.enrollment-resume__name-match h3 {\n  margin: 0 0 6pt;\n  font-size: 7.5pt;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: var(--resume-muted);\n}\n.enrollment-resume__name-match ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.enrollment-resume__name-match ul li {\n  display: flex;\n  justify-content: space-between;\n  padding: 2.5pt 0;\n  font-size: 9.5pt;\n  color: var(--resume-ink);\n}\n.enrollment-resume__name-match ul li strong {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.enrollment-resume__card--verdict {\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n.enrollment-resume__verdict-title {\n  margin: 0;\n  font-size: 13pt;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--resume-ink);\n}\n.enrollment-resume__verdict-sub {\n  margin: 3pt 0 0;\n  font-size: 9.5pt;\n  color: var(--resume-muted);\n}\n.enrollment-resume__reasons {\n  margin: 8pt 0 0;\n  padding-left: 14pt;\n  font-size: 9pt;\n  color: var(--resume-muted);\n}\n.enrollment-resume__reasons li {\n  padding: 1pt 0;\n}\n.enrollment-resume__footer {\n  margin-top: 18pt;\n  padding-top: 8pt;\n  border-top: 0.4pt solid var(--resume-rule);\n  font-size: 7.5pt;\n  color: var(--resume-faint);\n  text-align: center;\n  letter-spacing: 0.04em;\n}\n@media print {\n  :host {\n    display: block;\n    background: #fff !important;\n  }\n  .no-print {\n    display: none !important;\n  }\n  :host > div > header,\n  :host > div > main {\n    display: none !important;\n  }\n  .print-only {\n    display: block !important;\n  }\n  @page {\n    size: A4;\n    margin: 12mm;\n  }\n  * {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n/*# sourceMappingURL=project-record-detail.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectRecordDetailComponent, { className: "ProjectRecordDetailComponent", filePath: "src/app/modules/smart-enroll/projects/project-record-detail.component.ts", lineNumber: 163 });
})();
export {
  ProjectRecordDetailComponent
};
//# sourceMappingURL=chunk-2TPBJYJN.js.map
