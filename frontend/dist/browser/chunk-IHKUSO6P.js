import {
  formatCatalogPrice
} from "./chunk-YSIFJH6G.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-FWBWCXY5.js";
import {
  CommonModule,
  Component,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YWP2Y7QK.js";

// src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool-smart-check-result.component.ts
var _c0 = (a0) => ({ cost: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function ScanToolSmartCheckResultComponent_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatCredits(ctx_r0.ocrCost()));
  }
}
function ScanToolSmartCheckResultComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 8)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.endpointMethod());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.endpointUrl());
  }
}
function ScanToolSmartCheckResultComponent_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const check_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(check_r2.featureCode);
  }
}
function ScanToolSmartCheckResultComponent_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatCredits(ctx_r0.smartCheckCost()));
  }
}
function ScanToolSmartCheckResultComponent_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "mat-icon");
    \u0275\u0275text(2, "toll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "smartScan.costTotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 4, "smartScan.wizard.endpointCost", \u0275\u0275pureFunction1(7, _c0, ctx_r0.formatCredits(ctx_r0.totalCost()))), " ");
  }
}
function ScanToolSmartCheckResultComponent_Conditional_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const check_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "smartScan.smartCheckMissing"), " ", check_r2.missing == null ? null : check_r2.missing.join(", "), " ");
  }
}
function ScanToolSmartCheckResultComponent_Conditional_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const check_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", check_r2.error == null ? null : check_r2.error.message, " ");
  }
}
function ScanToolSmartCheckResultComponent_Conditional_0_Conditional_39_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 30)(1, "div", 31)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 33);
    \u0275\u0275element(13, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("data-tone", ctx_r0.rowTone(row_r3.percent));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, row_r3.labelKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", row_r3.percent, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.ocrValue || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.sourceValue || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", row_r3.percent, "%");
  }
}
function ScanToolSmartCheckResultComponent_Conditional_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 14)(3, "defs")(4, "linearGradient", 15);
    \u0275\u0275element(5, "stop", 16)(6, "stop", 17)(7, "stop", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "path", 19)(9, "path", 20);
    \u0275\u0275elementStart(10, "g", 21);
    \u0275\u0275element(11, "line", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "circle", 23);
    \u0275\u0275elementStart(13, "text", 24);
    \u0275\u0275text(14, "0%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "text", 25);
    \u0275\u0275text(16, "50%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "text", 26);
    \u0275\u0275text(18, "100%");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 27)(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 28)(26, "div", 29)(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(33, ScanToolSmartCheckResultComponent_Conditional_0_Conditional_39_For_34_Template, 14, 9, "article", 30, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-tone", ctx_r0.tone());
    \u0275\u0275advance(8);
    \u0275\u0275attribute("stroke-dasharray", ctx_r0.overallPercent() + " 100");
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", "rotate(" + ctx_r0.needleDegrees() + "deg)");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", ctx_r0.overallPercent(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 8, ctx_r0.verdictKey()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 10, "smartScan.nameMatch.ocrColumn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 12, "smartScan.nameMatch.sourceColumn"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.nameRows());
  }
}
function ScanToolSmartCheckResultComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "span", 4);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ol", 5)(16, "li")(17, "mat-icon");
    \u0275\u0275text(18, "document_scanner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 6)(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "small");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, ScanToolSmartCheckResultComponent_Conditional_0_Conditional_25_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li")(27, "mat-icon");
    \u0275\u0275text(28, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 6)(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, ScanToolSmartCheckResultComponent_Conditional_0_Conditional_33_Template, 5, 2, "small", 8)(34, ScanToolSmartCheckResultComponent_Conditional_0_Conditional_34_Template, 2, 1, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, ScanToolSmartCheckResultComponent_Conditional_0_Conditional_35_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ScanToolSmartCheckResultComponent_Conditional_0_Conditional_36_Template, 10, 9, "li", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ScanToolSmartCheckResultComponent_Conditional_0_Conditional_37_Template, 3, 4, "p", 10)(38, ScanToolSmartCheckResultComponent_Conditional_0_Conditional_38_Template, 2, 1, "p", 11)(39, ScanToolSmartCheckResultComponent_Conditional_0_Conditional_39_Template, 35, 14, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const check_r2 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-status", check_r2.status);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 15, "smartScan.governmentCheckTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 17, "smartScan.wizard.smartCheckStep.explainHelp"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-status", check_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 19, "smartScan.smartCheckStatus." + check_r2.status), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, "smartScan.costOcr"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_8_0 = ctx_r0.documentType()) == null ? null : tmp_8_0.name) || ctx_r0.scanResult().documentType);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.ocrCost() !== null ? 25 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.endpointName() || \u0275\u0275pipeBind1(32, 23, "smartScan.smartCheckResult"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.endpointUrl() ? 33 : check_r2.featureCode ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.smartCheckCost() !== null ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.totalCost() !== null ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(check_r2.reason === "missing_dependencies" ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((check_r2.error == null ? null : check_r2.error.message) ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nameRows().length ? 39 : -1);
  }
}
var FIRST_KEYS = ["firstName", "firstNames", "nombres", "givenName", "givenNames", "name"];
var LAST_KEYS = ["lastName", "lastNames", "apellidos", "surname", "surnames", "familyName"];
var FULL_KEYS = ["fullName", "completeName", "nombreCompleto"];
var stripDiacritics = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/[^A-Z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
var diceSimilarity = (leftRaw, rightRaw) => {
  const left = leftRaw.replace(/\s+/g, "");
  const right = rightRaw.replace(/\s+/g, "");
  if (!left && !right)
    return 1;
  if (!left || !right)
    return 0;
  if (left === right)
    return 1;
  if (left.length < 2 || right.length < 2)
    return 0;
  const counts = /* @__PURE__ */ new Map();
  for (let i = 0; i < left.length - 1; i++) {
    const pair = left.slice(i, i + 2);
    counts.set(pair, (counts.get(pair) || 0) + 1);
  }
  let intersection = 0;
  for (let i = 0; i < right.length - 1; i++) {
    const pair = right.slice(i, i + 2);
    const count = counts.get(pair) || 0;
    if (count > 0) {
      counts.set(pair, count - 1);
      intersection++;
    }
  }
  return 2 * intersection / (left.length + right.length - 2);
};
var scoreNamePair = (ocrRaw, sourceRaw) => {
  const ocr = stripDiacritics(ocrRaw);
  const source = stripDiacritics(sourceRaw);
  if (!ocr || !source)
    return 0;
  if (ocr === source)
    return 100;
  const direct = diceSimilarity(ocr, source);
  const sortedOcr = ocr.split(" ").sort().join(" ");
  const sortedSource = source.split(" ").sort().join(" ");
  const reordered = diceSimilarity(sortedOcr, sortedSource);
  return Math.round(Math.max(direct, reordered) * 100);
};
var pickString = (record, keys) => {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim())
      return value.trim();
  }
  return "";
};
var extractNames = (raw) => {
  if (!raw || typeof raw !== "object")
    return null;
  const record = raw;
  const nested = record["data"] && typeof record["data"] === "object" ? record["data"] : record;
  let firstName = pickString(nested, FIRST_KEYS);
  let lastName = pickString(nested, LAST_KEYS);
  let fullName = pickString(nested, FULL_KEYS);
  if (!fullName && Array.isArray(nested["arrayName"])) {
    fullName = nested["arrayName"].map((part) => String(part || "").trim()).filter(Boolean).join(" ");
  }
  if (!fullName && (firstName || lastName)) {
    fullName = [firstName, lastName].filter(Boolean).join(" ");
  }
  if ((!firstName || !lastName) && fullName) {
    const tokens = fullName.split(/\s+/).filter(Boolean);
    if (!firstName && tokens.length) {
      firstName = tokens.slice(0, Math.ceil(tokens.length / 2)).join(" ");
    }
    if (!lastName && tokens.length > 1) {
      lastName = tokens.slice(Math.ceil(tokens.length / 2)).join(" ");
    }
  }
  if (!firstName && !lastName && !fullName)
    return null;
  return { firstName, lastName, fullName };
};
var ScanToolSmartCheckResultComponent = class _ScanToolSmartCheckResultComponent {
  constructor() {
    this.scanResult = input.required();
    this.documentType = input(null);
    this.ticks = [0, 25, 50, 75, 100];
    this.smartCheck = computed(() => this.scanResult()?.smartCheck ?? null);
    this.endpointName = computed(() => {
      const check = this.smartCheck();
      const linked = this.documentType()?.appFeature;
      if (check?.featureName)
        return check.featureName;
      if (linked && typeof linked === "object" && linked.name)
        return linked.name;
      return check?.featureCode || "";
    });
    this.endpointUrl = computed(() => {
      const check = this.smartCheck();
      const linked = this.documentType()?.appFeature;
      if (check?.featureUrl)
        return check.featureUrl;
      if (linked && typeof linked === "object" && linked.url)
        return linked.url;
      return "";
    });
    this.endpointMethod = computed(() => this.smartCheck()?.method || "GET");
    this.ocrCost = computed(() => {
      const value = this.scanResult()?.cost?.ocr ?? this.scanResult()?.creditsCharged;
      return typeof value === "number" && Number.isFinite(value) ? value : null;
    });
    this.smartCheckCost = computed(() => {
      const value = this.scanResult()?.cost?.smartCheck ?? this.smartCheck()?.creditsCharged;
      return typeof value === "number" && Number.isFinite(value) ? value : null;
    });
    this.totalCost = computed(() => {
      const explicit = this.scanResult()?.cost?.total;
      if (typeof explicit === "number" && Number.isFinite(explicit))
        return explicit;
      const ocr = this.ocrCost();
      const check = this.smartCheckCost();
      if (ocr == null && check == null)
        return null;
      return (ocr || 0) + (check || 0);
    });
    this.nameRows = computed(() => {
      const ocr = extractNames(this.scanResult()?.OCRExtraction);
      const source = extractNames(this.smartCheck()?.data);
      if (!ocr || !source)
        return [];
      const rows = [
        {
          id: "firstName",
          labelKey: "smartScan.nameMatch.firstName",
          ocrValue: ocr.firstName,
          sourceValue: source.firstName,
          percent: scoreNamePair(ocr.firstName, source.firstName)
        },
        {
          id: "lastName",
          labelKey: "smartScan.nameMatch.lastName",
          ocrValue: ocr.lastName,
          sourceValue: source.lastName,
          percent: scoreNamePair(ocr.lastName, source.lastName)
        },
        {
          id: "fullName",
          labelKey: "smartScan.nameMatch.fullName",
          ocrValue: ocr.fullName,
          sourceValue: source.fullName,
          percent: scoreNamePair(ocr.fullName, source.fullName)
        }
      ];
      return rows.filter((row) => row.ocrValue || row.sourceValue);
    });
    this.overallPercent = computed(() => {
      const rows = this.nameRows();
      if (!rows.length)
        return 0;
      const full = rows.find((row) => row.id === "fullName");
      const parts = rows.filter((row) => row.id !== "fullName");
      const partsAvg = parts.length ? Math.round(parts.reduce((sum, row) => sum + row.percent, 0) / parts.length) : 0;
      if (!full)
        return partsAvg;
      return Math.max(full.percent, partsAvg);
    });
    this.needleDegrees = computed(() => this.overallPercent() / 100 * 180 - 90);
    this.verdictKey = computed(() => {
      const score = this.overallPercent();
      if (score >= 90)
        return "smartScan.nameMatch.verdictExact";
      if (score >= 70)
        return "smartScan.nameMatch.verdictClose";
      return "smartScan.nameMatch.verdictMismatch";
    });
    this.tone = computed(() => {
      const score = this.overallPercent();
      if (score >= 85)
        return "high";
      if (score >= 65)
        return "mid";
      return "low";
    });
  }
  formatCredits(value) {
    return formatCatalogPrice(value ?? 0);
  }
  rowTone(percent) {
    if (percent >= 85)
      return "high";
    if (percent >= 65)
      return "mid";
    return "low";
  }
  static {
    this.\u0275fac = function ScanToolSmartCheckResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScanToolSmartCheckResultComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScanToolSmartCheckResultComponent, selectors: [["scan-tool-smart-check-result"]], inputs: { scanResult: [1, "scanResult"], documentType: [1, "documentType"] }, decls: 1, vars: 1, consts: [[1, "sc-result"], [1, "sc-heading"], [1, "sc-heading__left"], [1, "sc-heading__index"], [1, "sc-status"], [1, "sc-flow"], [1, "sc-flow__copy"], [1, "sc-flow__cost"], [1, "sc-flow__route"], [1, "sc-flow__result"], [1, "sc-notice", "sc-notice--warn"], [1, "sc-notice", "sc-notice--error"], [1, "sc-compare"], [1, "sc-gauge"], ["viewBox", "0 0 220 132", "aria-hidden", "true", 1, "sc-gauge__svg"], ["id", "scGaugeArc", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "0%"], ["offset", "0%", "stop-color", "#ef4444"], ["offset", "50%", "stop-color", "#f59e0b"], ["offset", "100%", "stop-color", "#10b981"], ["d", "M 24 110 A 86 86 0 0 1 196 110", "fill", "none", "stroke-width", "14", "stroke-linecap", "round", 1, "sc-gauge__track"], ["d", "M 24 110 A 86 86 0 0 1 196 110", "fill", "none", "stroke", "url(#scGaugeArc)", "stroke-width", "14", "stroke-linecap", "round", "pathLength", "100", 1, "sc-gauge__fill"], [1, "sc-gauge__needle"], ["x1", "110", "y1", "110", "x2", "110", "y2", "36", "stroke-width", "3", "stroke-linecap", "round"], ["cx", "110", "cy", "110", "r", "7", 1, "sc-gauge__hub"], ["x", "18", "y", "127", 1, "sc-gauge__scale"], ["x", "110", "y", "14", "text-anchor", "middle", 1, "sc-gauge__scale"], ["x", "202", "y", "127", "text-anchor", "end", 1, "sc-gauge__scale"], [1, "sc-gauge__readout"], [1, "sc-rows"], [1, "sc-rows__legend"], [1, "sc-row"], [1, "sc-row__top"], [1, "sc-row__values"], [1, "sc-row__bar"]], template: function ScanToolSmartCheckResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ScanToolSmartCheckResultComponent_Conditional_0_Template, 40, 25, "section", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.smartCheck()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.sc-result[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n  color: #fafaf9;\n}\n.sc-heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.sc-heading__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n}\n.sc-heading__left[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.sc-heading__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #a8a29e;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.sc-heading__index[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #fff;\n  color: #1c1917;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.sc-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.2rem 0.6rem;\n  border: 1px solid rgba(52, 211, 153, 0.35);\n  border-radius: 999px;\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.sc-status[data-status=failed][_ngcontent-%COMP%] {\n  border-color: rgba(248, 113, 113, 0.35);\n  background: rgba(239, 68, 68, 0.14);\n  color: #fca5a5;\n}\n.sc-status[data-status=skipped][_ngcontent-%COMP%] {\n  border-color: rgba(251, 191, 36, 0.35);\n  background: rgba(245, 158, 11, 0.14);\n  color: #fcd34d;\n}\n.sc-flow[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.sc-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.7rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.85rem;\n  background: #292524;\n}\n.sc-flow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 1.15rem;\n  height: 1.15rem;\n  color: #e7e5e4;\n  font-size: 1.15rem;\n}\n.sc-flow__copy[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 1 1 auto;\n  gap: 0.15rem;\n  min-width: 0;\n}\n.sc-flow__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f5f5f4;\n  font-size: 0.8rem;\n  font-weight: 650;\n}\n.sc-flow__copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.7rem;\n}\n.sc-flow__route[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.4rem;\n}\n.sc-flow__route[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.05rem 0.35rem;\n  border-radius: 0.3rem;\n  background: #1c1917;\n  color: #fafaf9;\n  font-size: 0.65rem;\n  font-weight: 700;\n}\n.sc-flow__route[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #d6d3d1;\n  word-break: break-all;\n}\n.sc-flow__cost[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #fafaf9;\n  font-size: 0.8rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.sc-flow__result[_ngcontent-%COMP%] {\n  border-color: #e7e5e4 !important;\n  background: #fff !important;\n}\n.sc-flow__result[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.sc-flow__result[_ngcontent-%COMP%]   .sc-flow__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.sc-flow__result[_ngcontent-%COMP%]   .sc-flow__cost[_ngcontent-%COMP%] {\n  color: #1c1917 !important;\n}\n.sc-notice[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.65rem 0.8rem;\n  border-radius: 0.8rem;\n  font-size: 0.78rem;\n}\n.sc-notice--warn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(251, 191, 36, 0.35);\n  background: rgba(245, 158, 11, 0.14);\n  color: #fde68a;\n}\n.sc-notice--error[_ngcontent-%COMP%] {\n  border: 1px solid rgba(248, 113, 113, 0.35);\n  background: rgba(239, 68, 68, 0.14);\n  color: #fecaca;\n}\n.sc-compare[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  padding-top: 1.15rem;\n  border-top: 1px solid #44403c;\n}\n.sc-gauge[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  padding: 1rem 1rem 1.1rem;\n  border: 1px solid #44403c;\n  border-radius: 1rem;\n  background: #292524;\n}\n.sc-gauge__svg[_ngcontent-%COMP%] {\n  width: min(100%, 14rem);\n  height: auto;\n  overflow: visible;\n}\n.sc-gauge__track[_ngcontent-%COMP%] {\n  stroke: #44403c;\n}\n.sc-gauge__needle[_ngcontent-%COMP%] {\n  transform-origin: 110px 110px;\n  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.sc-gauge__needle[_ngcontent-%COMP%]   line[_ngcontent-%COMP%] {\n  stroke: #fafaf9;\n}\n.sc-gauge__hub[_ngcontent-%COMP%] {\n  fill: #fafaf9;\n}\n.sc-gauge__scale[_ngcontent-%COMP%] {\n  fill: #a8a29e;\n  font-size: 9px;\n  font-weight: 600;\n}\n.sc-gauge__readout[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  gap: 0.25rem;\n  margin-top: -0.25rem;\n}\n.sc-gauge__readout[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1;\n  font-variant-numeric: tabular-nums;\n}\n.sc-gauge__readout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.18rem 0.6rem;\n  border: 1px solid rgba(52, 211, 153, 0.35);\n  border-radius: 999px;\n  background: rgba(16, 185, 129, 0.16);\n  color: #6ee7b7;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.sc-gauge[data-tone=mid][_ngcontent-%COMP%]   .sc-gauge__readout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-color: rgba(251, 191, 36, 0.35);\n  background: rgba(245, 158, 11, 0.16);\n  color: #fcd34d;\n}\n.sc-gauge[data-tone=low][_ngcontent-%COMP%]   .sc-gauge__readout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-color: rgba(248, 113, 113, 0.35);\n  background: rgba(239, 68, 68, 0.16);\n  color: #fca5a5;\n}\n.sc-rows[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n}\n.sc-rows__legend[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n  padding: 0 0.75rem;\n  color: #a8a29e;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.sc-row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.85rem;\n  background: #292524;\n}\n.sc-row__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.sc-row__top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a8a29e;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.sc-row__top[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-variant-numeric: tabular-nums;\n  color: #6ee7b7;\n}\n.sc-row[data-tone=mid][_ngcontent-%COMP%]   .sc-row__top[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fcd34d;\n}\n.sc-row[data-tone=low][_ngcontent-%COMP%]   .sc-row__top[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.sc-row__values[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 0.75rem;\n}\n.sc-row__values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: #fafaf9;\n  word-break: break-word;\n}\n.sc-row__bar[_ngcontent-%COMP%] {\n  height: 0.32rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: #1c1917;\n}\n.sc-row__bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: 999px;\n  background: #10b981;\n  transition: width 400ms ease;\n}\n.sc-row[data-tone=mid][_ngcontent-%COMP%]   .sc-row__bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.sc-row[data-tone=low][_ngcontent-%COMP%]   .sc-row__bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n/*# sourceMappingURL=scan-tool-smart-check-result.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScanToolSmartCheckResultComponent, [{
    type: Component,
    args: [{ selector: "scan-tool-smart-check-result", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], template: `@if (smartCheck(); as check) {\r
    <section class="sc-result" [attr.data-status]="check.status">\r
        <div class="sc-heading">\r
            <div class="sc-heading__left">\r
                <span class="sc-heading__index">02</span>\r
                <div>\r
                    <h4>{{ 'smartScan.governmentCheckTitle' | transloco }}</h4>\r
                    <p>{{ 'smartScan.wizard.smartCheckStep.explainHelp' | transloco }}</p>\r
                </div>\r
            </div>\r
            <span class="sc-status" [attr.data-status]="check.status">\r
                {{ 'smartScan.smartCheckStatus.' + check.status | transloco }}\r
            </span>\r
        </div>\r
\r
        <ol class="sc-flow">\r
            <li>\r
                <mat-icon>document_scanner</mat-icon>\r
                <div class="sc-flow__copy">\r
                    <strong>{{ 'smartScan.costOcr' | transloco }}</strong>\r
                    <small>{{ documentType()?.name || scanResult().documentType }}</small>\r
                </div>\r
                @if (ocrCost() !== null) {\r
                    <span class="sc-flow__cost">{{ formatCredits(ocrCost()) }}</span>\r
                }\r
            </li>\r
            <li>\r
                <mat-icon>verified</mat-icon>\r
                <div class="sc-flow__copy">\r
                    <strong>{{ endpointName() || ('smartScan.smartCheckResult' | transloco) }}</strong>\r
                    @if (endpointUrl()) {\r
                        <small class="sc-flow__route">\r
                            <span>{{ endpointMethod() }}</span>\r
                            <code>{{ endpointUrl() }}</code>\r
                        </small>\r
                    } @else if (check.featureCode) {\r
                        <small>{{ check.featureCode }}</small>\r
                    }\r
                </div>\r
                @if (smartCheckCost() !== null) {\r
                    <span class="sc-flow__cost">{{ formatCredits(smartCheckCost()) }}</span>\r
                }\r
            </li>\r
            @if (totalCost() !== null) {\r
                <li class="sc-flow__result">\r
                    <mat-icon>toll</mat-icon>\r
                    <div class="sc-flow__copy">\r
                        <strong>{{ 'smartScan.costTotal' | transloco }}</strong>\r
                    </div>\r
                    <span class="sc-flow__cost">\r
                        {{ 'smartScan.wizard.endpointCost' | transloco: { cost: formatCredits(totalCost()) } }}\r
                    </span>\r
                </li>\r
            }\r
        </ol>\r
\r
        @if (check.reason === 'missing_dependencies') {\r
            <p class="sc-notice sc-notice--warn">\r
                {{ 'smartScan.smartCheckMissing' | transloco }} {{ check.missing?.join(', ') }}\r
            </p>\r
        }\r
\r
        @if (check.error?.message) {\r
            <p class="sc-notice sc-notice--error">\r
                {{ check.error?.message }}\r
            </p>\r
        }\r
\r
        @if (nameRows().length) {\r
            <div class="sc-compare">\r
                <div class="sc-gauge" [attr.data-tone]="tone()">\r
                    <svg viewBox="0 0 220 132" class="sc-gauge__svg" aria-hidden="true">\r
                        <defs>\r
                            <linearGradient id="scGaugeArc" x1="0%" y1="0%" x2="100%" y2="0%">\r
                                <stop offset="0%" stop-color="#ef4444" />\r
                                <stop offset="50%" stop-color="#f59e0b" />\r
                                <stop offset="100%" stop-color="#10b981" />\r
                            </linearGradient>\r
                        </defs>\r
                        <path\r
                            class="sc-gauge__track"\r
                            d="M 24 110 A 86 86 0 0 1 196 110"\r
                            fill="none"\r
                            stroke-width="14"\r
                            stroke-linecap="round"\r
                        />\r
                        <path\r
                            class="sc-gauge__fill"\r
                            d="M 24 110 A 86 86 0 0 1 196 110"\r
                            fill="none"\r
                            stroke="url(#scGaugeArc)"\r
                            stroke-width="14"\r
                            stroke-linecap="round"\r
                            pathLength="100"\r
                            [attr.stroke-dasharray]="overallPercent() + ' 100'"\r
                        />\r
                        <g\r
                            class="sc-gauge__needle"\r
                            [style.transform]="'rotate(' + needleDegrees() + 'deg)'"\r
                        >\r
                            <line x1="110" y1="110" x2="110" y2="36" stroke-width="3" stroke-linecap="round" />\r
                        </g>\r
                        <circle class="sc-gauge__hub" cx="110" cy="110" r="7" />\r
                        <text x="18" y="127" class="sc-gauge__scale">0%</text>\r
                        <text x="110" y="14" text-anchor="middle" class="sc-gauge__scale">50%</text>\r
                        <text x="202" y="127" text-anchor="end" class="sc-gauge__scale">100%</text>\r
                    </svg>\r
                    <div class="sc-gauge__readout">\r
                        <strong>{{ overallPercent() }}%</strong>\r
                        <span>{{ verdictKey() | transloco }}</span>\r
                    </div>\r
                </div>\r
\r
                <div class="sc-rows">\r
                    <div class="sc-rows__legend">\r
                        <span>{{ 'smartScan.nameMatch.ocrColumn' | transloco }}</span>\r
                        <span>{{ 'smartScan.nameMatch.sourceColumn' | transloco }}</span>\r
                    </div>\r
                    @for (row of nameRows(); track row.id) {\r
                        <article class="sc-row" [attr.data-tone]="rowTone(row.percent)">\r
                            <div class="sc-row__top">\r
                                <span>{{ row.labelKey | transloco }}</span>\r
                                <strong>{{ row.percent }}%</strong>\r
                            </div>\r
                            <div class="sc-row__values">\r
                                <p>{{ row.ocrValue || '\u2014' }}</p>\r
                                <p>{{ row.sourceValue || '\u2014' }}</p>\r
                            </div>\r
                            <div class="sc-row__bar">\r
                                <span [style.width.%]="row.percent"></span>\r
                            </div>\r
                        </article>\r
                    }\r
                </div>\r
            </div>\r
        }\r
    </section>\r
}\r
`, styles: ["/* src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool-smart-check-result.component.scss */\n:host {\n  display: block;\n}\n.sc-result {\n  display: grid;\n  gap: 1.25rem;\n  color: #fafaf9;\n}\n.sc-heading {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.sc-heading__left {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.8rem;\n}\n.sc-heading__left h4 {\n  margin: 0;\n  color: #fff;\n  font-size: 0.95rem;\n  font-weight: 680;\n}\n.sc-heading__left p {\n  margin: 0.25rem 0 0;\n  color: #a8a29e;\n  font-size: 0.72rem;\n  line-height: 1.45;\n}\n.sc-heading__index {\n  display: grid;\n  flex: 0 0 1.8rem;\n  width: 1.8rem;\n  height: 1.8rem;\n  place-items: center;\n  border-radius: 999px;\n  background: #fff;\n  color: #1c1917;\n  font-size: 0.62rem;\n  font-weight: 750;\n}\n.sc-status {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.2rem 0.6rem;\n  border: 1px solid rgba(52, 211, 153, 0.35);\n  border-radius: 999px;\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.sc-status[data-status=failed] {\n  border-color: rgba(248, 113, 113, 0.35);\n  background: rgba(239, 68, 68, 0.14);\n  color: #fca5a5;\n}\n.sc-status[data-status=skipped] {\n  border-color: rgba(251, 191, 36, 0.35);\n  background: rgba(245, 158, 11, 0.14);\n  color: #fcd34d;\n}\n.sc-flow {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.sc-flow li {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.7rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.85rem;\n  background: #292524;\n}\n.sc-flow li mat-icon {\n  flex: 0 0 auto;\n  width: 1.15rem;\n  height: 1.15rem;\n  color: #e7e5e4;\n  font-size: 1.15rem;\n}\n.sc-flow__copy {\n  display: grid;\n  flex: 1 1 auto;\n  gap: 0.15rem;\n  min-width: 0;\n}\n.sc-flow__copy strong {\n  color: #f5f5f4;\n  font-size: 0.8rem;\n  font-weight: 650;\n}\n.sc-flow__copy small {\n  color: #a8a29e;\n  font-size: 0.7rem;\n}\n.sc-flow__route {\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.4rem;\n}\n.sc-flow__route span {\n  padding: 0.05rem 0.35rem;\n  border-radius: 0.3rem;\n  background: #1c1917;\n  color: #fafaf9;\n  font-size: 0.65rem;\n  font-weight: 700;\n}\n.sc-flow__route code {\n  color: #d6d3d1;\n  word-break: break-all;\n}\n.sc-flow__cost {\n  flex: 0 0 auto;\n  color: #fafaf9;\n  font-size: 0.8rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.sc-flow__result {\n  border-color: #e7e5e4 !important;\n  background: #fff !important;\n}\n.sc-flow__result mat-icon,\n.sc-flow__result .sc-flow__copy strong,\n.sc-flow__result .sc-flow__cost {\n  color: #1c1917 !important;\n}\n.sc-notice {\n  margin: 0;\n  padding: 0.65rem 0.8rem;\n  border-radius: 0.8rem;\n  font-size: 0.78rem;\n}\n.sc-notice--warn {\n  border: 1px solid rgba(251, 191, 36, 0.35);\n  background: rgba(245, 158, 11, 0.14);\n  color: #fde68a;\n}\n.sc-notice--error {\n  border: 1px solid rgba(248, 113, 113, 0.35);\n  background: rgba(239, 68, 68, 0.14);\n  color: #fecaca;\n}\n.sc-compare {\n  display: grid;\n  gap: 1rem;\n  padding-top: 1.15rem;\n  border-top: 1px solid #44403c;\n}\n.sc-gauge {\n  display: grid;\n  justify-items: center;\n  padding: 1rem 1rem 1.1rem;\n  border: 1px solid #44403c;\n  border-radius: 1rem;\n  background: #292524;\n}\n.sc-gauge__svg {\n  width: min(100%, 14rem);\n  height: auto;\n  overflow: visible;\n}\n.sc-gauge__track {\n  stroke: #44403c;\n}\n.sc-gauge__needle {\n  transform-origin: 110px 110px;\n  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n.sc-gauge__needle line {\n  stroke: #fafaf9;\n}\n.sc-gauge__hub {\n  fill: #fafaf9;\n}\n.sc-gauge__scale {\n  fill: #a8a29e;\n  font-size: 9px;\n  font-weight: 600;\n}\n.sc-gauge__readout {\n  display: grid;\n  justify-items: center;\n  gap: 0.25rem;\n  margin-top: -0.25rem;\n}\n.sc-gauge__readout strong {\n  color: #fff;\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  line-height: 1;\n  font-variant-numeric: tabular-nums;\n}\n.sc-gauge__readout span {\n  padding: 0.18rem 0.6rem;\n  border: 1px solid rgba(52, 211, 153, 0.35);\n  border-radius: 999px;\n  background: rgba(16, 185, 129, 0.16);\n  color: #6ee7b7;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.sc-gauge[data-tone=mid] .sc-gauge__readout span {\n  border-color: rgba(251, 191, 36, 0.35);\n  background: rgba(245, 158, 11, 0.16);\n  color: #fcd34d;\n}\n.sc-gauge[data-tone=low] .sc-gauge__readout span {\n  border-color: rgba(248, 113, 113, 0.35);\n  background: rgba(239, 68, 68, 0.16);\n  color: #fca5a5;\n}\n.sc-rows {\n  display: grid;\n  gap: 0.55rem;\n}\n.sc-rows__legend {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n  padding: 0 0.75rem;\n  color: #a8a29e;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.sc-row {\n  display: grid;\n  gap: 0.45rem;\n  padding: 0.75rem 0.85rem;\n  border: 1px solid #44403c;\n  border-radius: 0.85rem;\n  background: #292524;\n}\n.sc-row__top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.sc-row__top span {\n  color: #a8a29e;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.sc-row__top strong {\n  font-size: 0.78rem;\n  font-variant-numeric: tabular-nums;\n  color: #6ee7b7;\n}\n.sc-row[data-tone=mid] .sc-row__top strong {\n  color: #fcd34d;\n}\n.sc-row[data-tone=low] .sc-row__top strong {\n  color: #fca5a5;\n}\n.sc-row__values {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 0.75rem;\n}\n.sc-row__values p {\n  margin: 0;\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: #fafaf9;\n  word-break: break-word;\n}\n.sc-row__bar {\n  height: 0.32rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: #1c1917;\n}\n.sc-row__bar span {\n  display: block;\n  height: 100%;\n  border-radius: 999px;\n  background: #10b981;\n  transition: width 400ms ease;\n}\n.sc-row[data-tone=mid] .sc-row__bar span {\n  background: #f59e0b;\n}\n.sc-row[data-tone=low] .sc-row__bar span {\n  background: #ef4444;\n}\n/*# sourceMappingURL=scan-tool-smart-check-result.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScanToolSmartCheckResultComponent, { className: "ScanToolSmartCheckResultComponent", filePath: "src/app/modules/smart-enroll/smart-scan/scan-tool/scan-tool-smart-check-result.component.ts", lineNumber: 127 });
})();

export {
  ScanToolSmartCheckResultComponent
};
//# sourceMappingURL=chunk-IHKUSO6P.js.map
