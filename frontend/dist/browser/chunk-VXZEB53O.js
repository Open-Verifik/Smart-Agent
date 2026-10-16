import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-R5W3A6HI.js";
import {
  Router,
  RouterLink
} from "./chunk-HYFP557I.js";
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  Component,
  HttpClient,
  Injectable,
  ViewEncapsulation,
  catchError,
  inject,
  map,
  setClassMetadata,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-PNPEHISK.js";
import {
  __async,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-enroll/demos/services/biometrics-demo.types.ts
var DEFAULT_LIVENESS_STANDALONE_MIN_SCORE = 0.6;
var DEFAULT_FACE_COMPARE_MIN_SCORE = 0.85;
var DEFAULT_COMPARE_WITH_LIVENESS_LIVENESS_FLOOR = 0.6;

// src/app/modules/smart-enroll/demos/services/biometrics-demo.util.ts
var DEMO_HUMANID_PRIVATE_DATA_DEFAULT = {
  secretKey: "7c4f9a2e8b1d0635f4a9c2e7b8d1f0a6e3c9b2d7f4a8e1c0b5d9f3a6e2c8b1",
  mnemonics: "ocean trumpet velvet ladder silent granite mirror humble ripple canyon frost pioneer anchor"
};
var normalizeImageBase64ForApi = (input) => {
  const trimmed = input.trim();
  const needle = "base64,";
  const at = trimmed.indexOf(needle);
  if (trimmed.startsWith("data:") && at !== -1) {
    return trimmed.slice(at + needle.length).replace(/\s/g, "");
  }
  return trimmed.replace(/\s/g, "");
};
var blobToRawBase64 = (blob) => __async(null, null, function* () {
  const buffer = yield blob.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 8192;
  for (let i = 0; i < bytes.byteLength; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
});
var fileToBase64 = (file) => __async(null, null, function* () {
  return blobToRawBase64(file);
});
var imageUrlToRawBase64 = (url) => __async(null, null, function* () {
  const resolved = typeof window !== "undefined" && url.startsWith("/") ? new URL(url, window.location.origin).href : url;
  const res = yield fetch(resolved, { cache: "force-cache" });
  if (!res.ok)
    throw new Error(`Failed to fetch image (${res.status})`);
  const blob = yield res.blob();
  if (blob.size === 0)
    throw new Error("Empty image");
  return blobToRawBase64(blob);
});
var coerceScore01 = (value) => {
  if (value == null)
    return null;
  if (typeof value === "number" && !Number.isNaN(value))
    return value > 1 ? value / 100 : value;
  if (typeof value === "string") {
    const n = parseFloat(value.trim());
    if (Number.isNaN(n))
      return null;
    return n > 1 ? n / 100 : n;
  }
  return null;
};
var parseFaceCompareResult = (data) => {
  if (!data || typeof data !== "object")
    return { match: false, score: 0, message: "" };
  let doc = data;
  const envelope = doc["data"];
  if (envelope && typeof envelope === "object" && !Array.isArray(envelope)) {
    doc = envelope;
  }
  const innerRaw = doc["result"];
  const inner = innerRaw && typeof innerRaw === "object" && !Array.isArray(innerRaw) ? innerRaw : doc;
  let score = typeof inner["score"] === "number" ? inner["score"] : 0;
  if (score > 1)
    score /= 100;
  let match;
  if (typeof inner["passed"] === "boolean") {
    match = inner["passed"];
  } else {
    const thresholdRaw = inner["compare_min_score"] ?? doc["compare_min_score"];
    const threshold = typeof thresholdRaw === "number" ? thresholdRaw : DEFAULT_FACE_COMPARE_MIN_SCORE;
    match = score >= threshold;
  }
  const message = typeof inner["message"] === "string" ? inner["message"] : "";
  return { match, score, message };
};
var parseLivenessResult = (raw) => {
  const empty = {
    passed: false,
    livenessScore: null,
    minScore: DEFAULT_LIVENESS_STANDALONE_MIN_SCORE,
    message: ""
  };
  if (!raw || typeof raw !== "object")
    return empty;
  let doc = raw;
  const envelope = doc["data"];
  if (envelope && typeof envelope === "object" && !Array.isArray(envelope)) {
    doc = envelope;
  }
  const livenessScore = coerceScore01(doc["liveness_score"]);
  const minRaw = doc["min_score"];
  const minScore = typeof minRaw === "number" && !Number.isNaN(minRaw) ? minRaw : DEFAULT_LIVENESS_STANDALONE_MIN_SCORE;
  let passed = typeof doc["passed"] === "boolean" ? doc["passed"] : false;
  if (typeof doc["passed"] !== "boolean" && livenessScore != null) {
    passed = livenessScore >= minScore;
  }
  const message = typeof doc["message"] === "string" ? doc["message"] : "";
  const root = raw;
  const creditsCharged = typeof root["creditsCharged"] === "number" ? root["creditsCharged"] : null;
  return { passed, livenessScore, minScore, message, creditsCharged };
};
var parseCompareWithLivenessResult = (data) => {
  const empty = {
    match: false,
    score: 0,
    livenessScore: null,
    livenessPassed: false,
    livenessMinScore: DEFAULT_COMPARE_WITH_LIVENESS_LIVENESS_FLOOR,
    livenessSkipped: true,
    message: ""
  };
  if (!data || typeof data !== "object")
    return empty;
  let root = data;
  const envelope = root["data"];
  if (envelope && typeof envelope === "object" && !Array.isArray(envelope)) {
    root = envelope;
  }
  const comparison = root["comparison"];
  const livenessDoc = root["liveness"];
  let score = 0;
  let match = false;
  if (comparison && typeof comparison === "object") {
    const res = comparison["result"];
    if (res && typeof res["score"] === "number") {
      score = res["score"];
      if (score > 1)
        score /= 100;
    }
    const thresholdRaw = comparison["compare_min_score"];
    const threshold = typeof thresholdRaw === "number" ? thresholdRaw : DEFAULT_FACE_COMPARE_MIN_SCORE;
    match = score >= threshold;
  }
  const livenessSkipped = livenessDoc == null;
  let livenessScore = null;
  let livenessPassed = false;
  let livenessMinScore = DEFAULT_COMPARE_WITH_LIVENESS_LIVENESS_FLOOR;
  if (!livenessSkipped && livenessDoc && typeof livenessDoc === "object") {
    const lr = livenessDoc["result"];
    if (lr && typeof lr === "object") {
      livenessScore = coerceScore01(lr["liveness_score"]);
      if (typeof lr["min_score"] === "number")
        livenessMinScore = lr["min_score"];
      if (typeof lr["passed"] === "boolean") {
        livenessPassed = lr["passed"];
      } else if (livenessScore != null) {
        livenessPassed = livenessScore >= livenessMinScore;
      }
    }
  }
  return { match, score, livenessScore, livenessPassed, livenessMinScore, livenessSkipped, message: "" };
};
var normalizePersonsListPayload = (data) => {
  if (Array.isArray(data))
    return data;
  if (data && typeof data === "object" && !Array.isArray(data)) {
    const d = data;
    if (Array.isArray(d["docs"]))
      return d["docs"];
  }
  return [];
};
var mapPersonDocsToListItems = (docs) => {
  const out = [];
  for (const doc of docs) {
    const rawId = doc["_id"];
    const _id = typeof rawId === "string" ? rawId : rawId != null && typeof rawId === "object" && "$oid" in rawId ? String(rawId.$oid) : rawId != null ? String(rawId) : "";
    if (!_id)
      continue;
    const name = typeof doc["name"] === "string" ? doc["name"] : "";
    out.push({ _id, name });
  }
  return out;
};
var isPersonAlreadySetError = (res) => res.error === "person_already_set" || res.code === "PreconditionFailed" && res.error === "person_already_set";
var getDemoOs = () => {
  if (typeof navigator === "undefined")
    return "DESKTOP";
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua))
    return "IOS";
  if (/Android/i.test(ua))
    return "ANDROID";
  return "DESKTOP";
};
var LIVENESS_API_ERROR_CODES = [
  "ERR_LIVENESS_FACE_CLOSE_TO_BORDER",
  "ERR_LIVENESS_FACE_TOO_SMALL",
  "ERR_MULTIPLE_FACES_DETECTED",
  "ERR_NO_FACE_DETECTED",
  "LIVENESS_CHECK_FAILED",
  "ERR_LIVENESS_FAILED"
];
var LIVENESS_API_ERROR_CODE_SET = new Set(LIVENESS_API_ERROR_CODES);
var isLivenessApiErrorCode = (code) => Boolean(code && LIVENESS_API_ERROR_CODE_SET.has(code));
var translateLivenessApiError = (translate, err) => {
  const code = typeof err?.code === "string" ? err.code.trim() : "";
  if (isLivenessApiErrorCode(code)) {
    return translate(`smartEnrollDemos.liveness.errors.${code}`);
  }
  const detail = typeof err?.error === "string" && err.error.trim() || typeof err?.message === "string" && err.message.trim() || "";
  if (detail)
    return detail;
  return translate("smartEnrollDemos.liveness.errors.fallback");
};
var FACE_SANDBOX_FAIL_MARKER = "FACEFAIL";
var applySandboxFaceFailMarker = (base64) => base64.startsWith(FACE_SANDBOX_FAIL_MARKER) ? base64 : `${FACE_SANDBOX_FAIL_MARKER}${base64}`;

// src/app/modules/smart-enroll/demos/services/biometrics-demo-api.service.ts
var BiometricsDemoApiService = class _BiometricsDemoApiService {
  constructor() {
    this._http = inject(HttpClient);
    this._router = inject(Router);
  }
  get baseUrl() {
    return `${environment.apiUrl}/v2`;
  }
  authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  ensureAuthenticated() {
    if (localStorage.getItem("accessToken"))
      return true;
    void this._router.navigate(["/sign-in"]);
    return false;
  }
  stripImages(payload) {
    const body = __spreadValues({}, payload);
    if (Array.isArray(body.images)) {
      body.images = body.images.map((img) => normalizeImageBase64ForApi(img));
    }
    if (typeof body.image === "string") {
      body.image = normalizeImageBase64ForApi(body.image);
    }
    if (Array.isArray(body.gallery)) {
      body.gallery = body.gallery.map((img) => normalizeImageBase64ForApi(img));
    }
    if (typeof body.probe === "string") {
      body.probe = normalizeImageBase64ForApi(body.probe);
    } else if (Array.isArray(body.probe)) {
      body.probe = body.probe.map((img) => normalizeImageBase64ForApi(img));
    }
    if (typeof body.faceBase64 === "string") {
      body.faceBase64 = normalizeImageBase64ForApi(body.faceBase64);
    }
    if (typeof body.referenceFaceBase64 === "string") {
      body.referenceFaceBase64 = normalizeImageBase64ForApi(body.referenceFaceBase64);
    }
    return body;
  }
  handleError(err) {
    const body = err.error;
    const apiErr = {
      error: (typeof body?.["message"] === "string" ? body["message"] : void 0) ?? (typeof body?.["error"] === "string" ? body["error"] : void 0) ?? err.message,
      code: typeof body?.["code"] === "string" ? body["code"] : void 0,
      message: typeof body?.["message"] === "string" ? body["message"] : void 0,
      statusCode: err.status
    };
    return throwError(() => apiErr);
  }
  createCollection(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/collections`, payload, {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  listCollections(likeName) {
    const params = {};
    if (likeName)
      params["like_name"] = likeName;
    return this._http.get(`${this.baseUrl}/face-recognition/collections`, {
      headers: this.authHeaders(),
      params
    }).pipe(map((res) => Array.isArray(res?.data) ? res.data : []), catchError((e) => this.handleError(e)));
  }
  createPerson(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/persons`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  createPersonWithLiveness(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/persons/search-live-face`, this.stripImages(payload), { headers: this.authHeaders() }).pipe(catchError((e) => this.handleError(e)));
  }
  getPersons(params = {}) {
    return this._http.get(`${this.baseUrl}/face-recognition/persons`, {
      headers: this.authHeaders(),
      params
    }).pipe(catchError((e) => this.handleError(e)));
  }
  getPerson(personId) {
    return this._http.get(`${this.baseUrl}/face-recognition/persons/${encodeURIComponent(personId)}`, {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  updatePerson(personId, payload) {
    return this._http.put(`${this.baseUrl}/face-recognition/persons/${encodeURIComponent(personId)}`, payload, {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  deletePerson(personId, collection) {
    const params = {};
    if (collection)
      params["collection"] = collection;
    return this._http.delete(`${this.baseUrl}/face-recognition/persons/${encodeURIComponent(personId)}`, {
      headers: this.authHeaders(),
      params
    }).pipe(catchError((e) => this.handleError(e)));
  }
  detectLiveness(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/liveness`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  compareFaces(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/compare`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  compareFacesLive(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/compare-live`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  compareWithLiveness(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/compare-with-liveness`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  compareLive(payload) {
    return this.compareFacesLive(payload);
  }
  searchPersons(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/search`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  searchLivePerson(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/search-live-face`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  searchActiveUser(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/search-active-user`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  detectFace(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/detect`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  verifyFace(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/verify`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  searchCrops(payload) {
    return this._http.post(`${this.baseUrl}/face-recognition/search/crops`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  createHumanId(payload) {
    return this._http.post(`${this.baseUrl}/human-id/encrypt`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  createHumanIdQr(payload) {
    return this._http.post(`${this.baseUrl}/human-id/encrypt-qr-code`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  decryptHumanId(payload) {
    return this._http.post(`${this.baseUrl}/human-id/decrypt`, this.stripImages(payload), {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  previewHumanId(payload) {
    return this._http.post(`${this.baseUrl}/human-id/preview`, payload, { headers: this.authHeaders() }).pipe(catchError((e) => this.handleError(e)));
  }
  previewHumanIdQr(payload) {
    return this._http.post(`${this.baseUrl}/human-id/preview-human-id-qr`, payload, {
      headers: this.authHeaders()
    }).pipe(catchError((e) => this.handleError(e)));
  }
  static {
    this.\u0275fac = function BiometricsDemoApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BiometricsDemoApiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BiometricsDemoApiService, factory: _BiometricsDemoApiService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BiometricsDemoApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/modules/smart-enroll/demos/shared/demo-page-shell.component.ts
var _c0 = [[["", "demoHeaderBack", ""]], [["", "demoHeaderTitle", ""]], [["", "demoHeaderActions", ""]], "*"];
var _c1 = ["[demoHeaderBack]", "[demoHeaderTitle]", "[demoHeaderActions]", "*"];
var DemoPageShellComponent = class _DemoPageShellComponent {
  static {
    this.\u0275fac = function DemoPageShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DemoPageShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DemoPageShellComponent, selectors: [["app-demo-page-shell"]], hostAttrs: [1, "flex", "flex-auto", "min-w-0", "w-full"], ngContentSelectors: _c1, decls: 18, vars: 3, consts: [[1, "smart-enroll-demos", "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "w-full"], [1, "flex", "flex-auto", "flex-col", "w-full", "px-5", "py-8", "md:px-8", "md:py-10"], ["aria-label", "Breadcrumb", 1, "mb-6", "text-sm", "text-on-surface-variant"], [1, "flex", "flex-wrap", "items-center", "gap-1.5"], ["routerLink", "/smart-enroll/collections", 1, "hover:text-primary", "transition-colors"], ["aria-hidden", "true"], ["routerLink", "/smart-enroll/demos", 1, "hover:text-primary", "transition-colors"], [1, "flex", "w-full", "min-w-0", "flex-col", "gap-6"]], template: function DemoPageShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "nav", 2)(3, "ol", 3)(4, "li")(5, "a", 4);
        \u0275\u0275text(6, " Smart Enroll ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "li", 5);
        \u0275\u0275text(8, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "li")(10, "a", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275projection(14);
        \u0275\u0275projection(15, 1);
        \u0275\u0275projection(16, 2);
        \u0275\u0275projection(17, 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 1, "smartEnrollDemos.hub.title"), " ");
      }
    }, dependencies: [RouterLink, TranslocoModule, TranslocoPipe], styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/demos/shared/demo-page-shell.component.scss */\n.smart-enroll-demos {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos .material-symbols-outlined {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos .glass-panel-dark {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos .scan-line {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: demoScanAnim 3s linear infinite;\n}\n@keyframes demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos .scanner-corner-tl,\n.smart-enroll-demos .scanner-corner-tr,\n.smart-enroll-demos .scanner-corner-bl,\n.smart-enroll-demos .scanner-corner-br {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos .scanner-corner-tl {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-tr {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-bl {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-br {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .blueprint-grid {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos .bg-primary-cta {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos .demo-btn-primary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos .demo-btn-primary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-primary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-primary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .demo-btn-secondary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos .demo-btn-secondary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-secondary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-secondary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .shadow-primary {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos .shadow-ring-frost {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos .shadow-ambient {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos .border-frost {\n  border-color: var(--frost);\n}\n.smart-enroll-demos .scanning-ring {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos .bg-surface {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos .bg-surface-container {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .bg-surface-container-low {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .bg-surface-container-high {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .bg-surface-container-lowest {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos .bg-error-container\\/20 {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos .text-on-surface {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos .text-on-surface-variant {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .text-on-primary-container {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos .text-primary {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .text-error {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos .border-outline-variant\\/20 {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos .border-outline-variant\\/30 {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos .border-outline-variant\\/15 {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos .border-outline-variant\\/10 {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos .border-error\\/20 {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos .border-error {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos .placeholder-on-surface-variant\\/50::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos .hover\\:bg-surface-container:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .focus\\:border-primary\\/60:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos .hover\\:border-primary\\/40:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos .ring-primary-20 {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos .bg-primary-10 {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos .selected-liveness {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .human-id-liveness-toggle:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos .human-id-liveness-toggle--on {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon--on {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--decrypt {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track--on {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-callout {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .selected-tolerance {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos .demo-range-input {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark .smart-enroll-demos {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .glass-panel-dark {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark .smart-enroll-demos .demo-btn-primary {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark .smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark .smart-enroll-demos .demo-btn-secondary {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark .smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark .smart-enroll-demos input[type=date] {\n  color-scheme: dark;\n}\n.dark .smart-enroll-demos input[type=date]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub .demo-card,\n.human-authn-demos-hub .demo-card {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub .demo-card:hover,\n.human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark .smart-enroll-demos-hub .demo-card:hover,\n.dark .human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=demo-page-shell.component.css.map */\n'], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoPageShellComponent, [{
    type: Component,
    args: [{ selector: "app-demo-page-shell", standalone: true, imports: [RouterLink, TranslocoModule], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      class: "flex flex-auto min-w-0 w-full"
    }, template: `<div class="smart-enroll-demos flex min-h-screen min-w-0 flex-auto flex-col w-full">\r
    <main class="flex flex-auto flex-col w-full px-5 py-8 md:px-8 md:py-10">\r
        <nav class="mb-6 text-sm text-on-surface-variant" aria-label="Breadcrumb">\r
            <ol class="flex flex-wrap items-center gap-1.5">\r
                <li>\r
                    <a routerLink="/smart-enroll/collections" class="hover:text-primary transition-colors">\r
                        Smart Enroll\r
                    </a>\r
                </li>\r
                <li aria-hidden="true">/</li>\r
                <li>\r
                    <a routerLink="/smart-enroll/demos" class="hover:text-primary transition-colors">\r
                        {{ 'smartEnrollDemos.hub.title' | transloco }}\r
                    </a>\r
                </li>\r
            </ol>\r
        </nav>\r
\r
        <div class="flex w-full min-w-0 flex-col gap-6">\r
            <ng-content select="[demoHeaderBack]"></ng-content>\r
            <ng-content select="[demoHeaderTitle]"></ng-content>\r
            <ng-content select="[demoHeaderActions]"></ng-content>\r
            <ng-content></ng-content>\r
        </div>\r
    </main>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/smart-enroll/demos/shared/demo-page-shell.component.scss */\n.smart-enroll-demos {\n  --color-surface: 250 250 249;\n  --color-surface-container-lowest: 255 255 255;\n  --color-surface-container-low: 255 255 255;\n  --color-surface-container: 245 245 244;\n  --color-surface-container-high: 231 229 228;\n  --color-surface-container-highest: 214 211 209;\n  --color-surface-bright: 255 255 255;\n  --color-surface-dim: 250 250 249;\n  --color-surface-variant: 231 229 228;\n  --color-surface-tint: 38 66 255;\n  --color-primary: 38 66 255;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 219 234 254;\n  --color-primary-container: 219 234 254;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 28 25 23;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 28 25 23;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 87 83 78;\n  --color-secondary-fixed: 245 245 244;\n  --color-secondary-fixed-dim: 231 229 228;\n  --color-secondary-container: 231 229 228;\n  --color-on-secondary: 28 25 23;\n  --color-on-secondary-fixed: 28 25 23;\n  --color-on-secondary-fixed-variant: 68 64 60;\n  --color-on-secondary-container: 68 64 60;\n  --color-tertiary: 13 148 136;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 153 246 228;\n  --color-tertiary-container: 204 251 241;\n  --color-on-tertiary: 255 255 255;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 19 78 74;\n  --color-background: 250 250 249;\n  --color-on-background: 28 25 23;\n  --color-on-surface: 28 25 23;\n  --color-on-surface-variant: 87 83 78;\n  --color-inverse-surface: 28 25 23;\n  --color-inverse-on-surface: 250 250 249;\n  --color-outline: 168 162 158;\n  --color-outline-variant: 214 211 209;\n  --color-error: 185 28 28;\n  --color-error-container: 254 226 226;\n  --color-on-error: 255 255 255;\n  --color-on-error-container: 127 29 29;\n  --frost: rgb(38 66 255 / 0.12);\n  --frost-variant: rgb(38 66 255 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(28 25 23 / 0.08);\n  --shadow-float: 0 16px 60px rgb(28 25 23 / 0.12);\n  --shadow-glow: 0 0 40px rgb(38 66 255 / 0.08);\n  --shadow-scan-line: 0 0 15px rgb(38 66 255 / 0.35);\n  --shadow-primary: 0 1px 2px rgb(38 66 255 / 0.12), 0 4px 14px rgb(38 66 255 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(38 66 255 / 0.12);\n  --bg-primary-gradient:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta:\n    linear-gradient(\n      135deg,\n      #2642ff 0%,\n      #1a2f99 100%);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 38 66 255;\n  --utility-text-gradient-to: 26 47 153;\n  --utility-scanning-ring-outer: 38 66 255;\n  --utility-scanning-ring-inner: 26 47 153;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n  min-height: 100%;\n  width: 100%;\n}\n.smart-enroll-demos .material-symbols-outlined {\n  font-family: "Material Symbols Outlined", sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.smart-enroll-demos .glass-panel-dark {\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgb(var(--color-outline-variant)/0.35);\n}\n.smart-enroll-demos .scan-line {\n  position: absolute;\n  z-index: 28;\n  pointer-events: none;\n  width: 100%;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgb(var(--color-surface-tint)),\n      transparent);\n  box-shadow: var(--shadow-scan-line);\n  animation: demoScanAnim 3s linear infinite;\n}\n@keyframes demoScanAnim {\n  0% {\n    top: 20%;\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    top: 80%;\n    opacity: 0;\n  }\n}\n.smart-enroll-demos .scanner-corner-tl,\n.smart-enroll-demos .scanner-corner-tr,\n.smart-enroll-demos .scanner-corner-bl,\n.smart-enroll-demos .scanner-corner-br {\n  position: absolute;\n  z-index: 30;\n  pointer-events: none;\n  width: 2rem;\n  height: 2rem;\n  border-color: rgb(var(--color-surface-tint));\n}\n.smart-enroll-demos .scanner-corner-tl {\n  top: 1.5rem;\n  left: 1.5rem;\n  border-top: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-tr {\n  top: 1.5rem;\n  right: 1.5rem;\n  border-top: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-bl {\n  bottom: 1.5rem;\n  left: 1.5rem;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n}\n.smart-enroll-demos .scanner-corner-br {\n  bottom: 1.5rem;\n  right: 1.5rem;\n  border-bottom: 2px solid;\n  border-right: 2px solid;\n}\n.smart-enroll-demos .blueprint-grid {\n  background-image: radial-gradient(rgb(var(--color-primary)/0.45) 0.5px, transparent 0.5px);\n  background-size: 20px 20px;\n}\n.smart-enroll-demos .bg-primary-cta {\n  background: var(--utility-primary-cta);\n  color: rgb(var(--utility-primary-cta-color));\n}\n.smart-enroll-demos .demo-btn-primary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(28, 25, 23, 0.08);\n  background-color: rgb(28, 25, 23);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(255, 255, 255);\n  box-shadow: 0 1px 2px rgba(28, 25, 23, 0.06);\n  text-decoration: none;\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(41, 37, 36);\n  border-color: rgba(28, 25, 23, 0.12);\n}\n.smart-enroll-demos .demo-btn-primary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-primary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-primary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .demo-btn-secondary {\n  display: inline-flex;\n  width: 100%;\n  min-height: 2.75rem;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgb(231, 229, 228);\n  background-color: rgb(255, 255, 255);\n  padding: 0.75rem 1.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: rgb(28, 25, 23);\n  transition:\n    background-color 150ms ease,\n    border-color 150ms ease,\n    transform 100ms ease;\n}\n.smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(250, 250, 249);\n  border-color: rgb(214, 211, 209);\n}\n.smart-enroll-demos .demo-btn-secondary:active:not(:disabled) {\n  transform: scale(0.99);\n}\n.smart-enroll-demos .demo-btn-secondary:disabled {\n  cursor: not-allowed;\n  opacity: 0.45;\n}\n.smart-enroll-demos .demo-btn-secondary.demo-btn-inline {\n  width: auto;\n  flex: 1 1 0;\n}\n.smart-enroll-demos .shadow-primary {\n  box-shadow: var(--shadow-primary);\n}\n.smart-enroll-demos .shadow-ring-frost {\n  box-shadow: var(--shadow-ring-frost);\n}\n.smart-enroll-demos .shadow-ambient {\n  box-shadow: var(--shadow-ambient);\n}\n.smart-enroll-demos .border-frost {\n  border-color: var(--frost);\n}\n.smart-enroll-demos .scanning-ring {\n  box-shadow: 0 0 20px 2px rgb(var(--utility-scanning-ring-outer)/0.25), inset 0 0 20px 2px rgb(var(--utility-scanning-ring-inner)/0.15);\n}\n.smart-enroll-demos .bg-surface {\n  background-color: rgb(var(--color-surface));\n}\n.smart-enroll-demos .bg-surface-container {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .bg-surface-container-low {\n  background-color: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .bg-surface-container-high {\n  background-color: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .bg-surface-container-lowest {\n  background-color: rgb(var(--color-surface-container-lowest));\n}\n.smart-enroll-demos .bg-error-container\\/20 {\n  background-color: rgb(var(--color-error-container)/0.2);\n}\n.smart-enroll-demos .text-on-surface {\n  color: rgb(var(--color-on-surface));\n}\n.smart-enroll-demos .text-on-surface-variant {\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .text-on-primary-container {\n  color: rgb(var(--color-on-primary-container));\n}\n.smart-enroll-demos .text-primary {\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .text-error {\n  color: rgb(var(--color-error));\n}\n.smart-enroll-demos .border-outline-variant\\/20 {\n  border-color: rgb(var(--color-outline-variant)/0.2);\n}\n.smart-enroll-demos .border-outline-variant\\/30 {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n}\n.smart-enroll-demos .border-outline-variant\\/15 {\n  border-color: rgb(var(--color-outline-variant)/0.15);\n}\n.smart-enroll-demos .border-outline-variant\\/10 {\n  border-color: rgb(var(--color-outline-variant)/0.1);\n}\n.smart-enroll-demos .border-error\\/20 {\n  border-color: rgb(var(--color-error)/0.2);\n}\n.smart-enroll-demos .border-error {\n  border-color: rgb(var(--color-error));\n}\n.smart-enroll-demos .placeholder-on-surface-variant\\/50::placeholder {\n  color: rgb(var(--color-on-surface-variant)/0.5);\n}\n.smart-enroll-demos .hover\\:bg-surface-container:hover {\n  background-color: rgb(var(--color-surface-container));\n}\n.smart-enroll-demos .focus\\:border-primary\\/60:focus {\n  border-color: rgb(var(--color-primary)/0.6);\n}\n.smart-enroll-demos .hover\\:border-primary\\/40:hover {\n  border-color: rgb(var(--color-primary)/0.4);\n}\n.smart-enroll-demos .ring-primary-20 {\n  box-shadow: 0 0 0 4px rgba(38, 66, 255, 0.2);\n}\n.smart-enroll-demos .bg-primary-10 {\n  background: rgba(38, 66, 255, 0.06);\n}\n.smart-enroll-demos .selected-liveness {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle {\n  border-color: rgb(var(--color-outline-variant)/0.3);\n  background: rgb(var(--color-surface-container-low));\n}\n.smart-enroll-demos .human-id-liveness-toggle:hover {\n  border-color: rgb(var(--color-outline-variant)/0.5);\n}\n.smart-enroll-demos .human-id-liveness-toggle--on {\n  border-color: rgb(var(--color-primary)/0.4);\n  background: rgb(var(--color-primary)/0.06);\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon {\n  background: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .human-id-liveness-toggle__icon--on {\n  background: rgb(var(--color-primary)/0.15);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 9999px;\n  padding: 0.125rem 0.5rem;\n  font-size: 0.625rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.15);\n  color: rgb(180, 83, 9);\n}\n.smart-enroll-demos .human-id-liveness-toggle__stage--decrypt {\n  background: rgb(var(--color-primary)/0.12);\n  color: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track {\n  background: rgb(var(--color-surface-container-high));\n}\n.smart-enroll-demos .human-id-liveness-toggle__track--on {\n  background: rgb(var(--color-primary));\n}\n.smart-enroll-demos .human-id-liveness-callout {\n  border: 1px solid rgb(var(--color-outline-variant)/0.25);\n  background: rgb(var(--color-surface-container-low));\n  border-radius: 0.75rem;\n  padding: 0.875rem 1rem;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n  color: rgb(var(--color-on-surface-variant));\n}\n.smart-enroll-demos .selected-tolerance {\n  border-color: rgb(var(--color-primary)/0.5);\n  background: rgb(var(--color-primary)/0.08);\n}\n.smart-enroll-demos .demo-range-input {\n  accent-color: rgb(var(--color-primary));\n  height: 0.5rem;\n  cursor: pointer;\n}\n.dark .smart-enroll-demos {\n  --color-surface: 15 23 42;\n  --color-surface-container-lowest: 2 6 23;\n  --color-surface-container-low: 15 23 42;\n  --color-surface-container: 30 41 59;\n  --color-surface-container-high: 51 65 85;\n  --color-surface-container-highest: 71 85 105;\n  --color-surface-bright: 30 41 59;\n  --color-surface-dim: 2 6 23;\n  --color-surface-variant: 51 65 85;\n  --color-surface-tint: 37 99 235;\n  --color-primary: 96 165 250;\n  --color-primary-fixed: 239 246 255;\n  --color-primary-fixed-dim: 191 219 254;\n  --color-primary-container: 37 99 235;\n  --color-on-primary: 255 255 255;\n  --color-on-primary-fixed: 15 23 42;\n  --color-on-primary-fixed-variant: 30 58 138;\n  --color-on-primary-container: 248 250 252;\n  --color-inverse-primary: 59 130 246;\n  --color-secondary: 148 163 184;\n  --color-secondary-fixed: 226 232 240;\n  --color-secondary-fixed-dim: 148 163 184;\n  --color-secondary-container: 51 65 85;\n  --color-on-secondary: 248 250 252;\n  --color-on-secondary-fixed: 15 23 42;\n  --color-on-secondary-fixed-variant: 51 65 85;\n  --color-on-secondary-container: 203 213 225;\n  --color-tertiary: 45 212 191;\n  --color-tertiary-fixed: 204 251 241;\n  --color-tertiary-fixed-dim: 94 234 212;\n  --color-tertiary-container: 13 148 136;\n  --color-on-tertiary: 4 47 46;\n  --color-on-tertiary-fixed: 19 78 74;\n  --color-on-tertiary-fixed-variant: 17 94 89;\n  --color-on-tertiary-container: 248 250 252;\n  --color-background: 15 23 42;\n  --color-on-background: 248 250 252;\n  --color-on-surface: 248 250 252;\n  --color-on-surface-variant: 148 163 184;\n  --color-inverse-surface: 248 250 252;\n  --color-inverse-on-surface: 15 23 42;\n  --color-outline: 100 116 139;\n  --color-outline-variant: 51 65 85;\n  --color-error: 252 165 165;\n  --color-error-container: 127 29 29;\n  --color-on-error: 127 29 29;\n  --color-on-error-container: 254 226 226;\n  --frost: rgb(96 165 250 / 0.12);\n  --frost-variant: rgb(96 165 250 / 0.06);\n  --shadow-ambient: 0 8px 40px rgb(2 6 23 / 0.35);\n  --shadow-float: 0 16px 60px rgb(2 6 23 / 0.45);\n  --shadow-glow: 0 0 40px rgb(37 99 235 / 0.1);\n  --shadow-scan-line: 0 0 15px rgb(96 165 250 / 0.4);\n  --shadow-primary: 0 1px 2px rgb(37 99 235 / 0.12), 0 4px 14px rgb(37 99 235 / 0.16);\n  --shadow-ring-frost: 0 0 0 1px rgb(96 165 250 / 0.12);\n  --utility-primary-cta-color: 255 255 255;\n  --utility-text-gradient-from: 96 165 250;\n  --utility-text-gradient-to: 37 99 235;\n  --utility-scanning-ring-outer: 96 165 250;\n  --utility-scanning-ring-inner: 37 99 235;\n  background-color: rgb(var(--color-surface));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .glass-panel-dark {\n  background: rgb(var(--color-surface-container)/0.85);\n  border-bottom-color: rgb(var(--color-outline-variant)/0.35);\n}\n.dark .smart-enroll-demos .demo-btn-primary {\n  border-color: rgba(255, 255, 255, 0.1);\n  background-color: rgb(248, 250, 252);\n  color: rgb(15, 23, 42);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.dark .smart-enroll-demos .demo-btn-primary:hover:not(:disabled) {\n  background-color: rgb(226, 232, 240);\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.dark .smart-enroll-demos .demo-btn-secondary {\n  border-color: rgb(var(--color-outline-variant));\n  background-color: rgb(var(--color-surface-container));\n  color: rgb(var(--color-on-surface));\n}\n.dark .smart-enroll-demos .demo-btn-secondary:hover:not(:disabled) {\n  background-color: rgb(var(--color-surface-container-high));\n  border-color: rgb(var(--color-outline));\n}\n.dark .smart-enroll-demos .human-id-liveness-toggle__stage--encrypt {\n  background: rgba(245, 158, 11, 0.12);\n  color: rgb(251, 191, 36);\n}\n.dark .smart-enroll-demos input[type=date] {\n  color-scheme: dark;\n}\n.dark .smart-enroll-demos input[type=date]::-webkit-calendar-picker-indicator {\n  cursor: pointer;\n  opacity: 0.85;\n  filter: invert(1);\n}\n.smart-enroll-demos-hub .demo-card,\n.human-authn-demos-hub .demo-card {\n  transition: all 0.3s;\n}\n.smart-enroll-demos-hub .demo-card:hover,\n.human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(255, 255, 255, 0.02);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n.dark .smart-enroll-demos-hub .demo-card:hover,\n.dark .human-authn-demos-hub .demo-card:hover {\n  border-color: rgba(96, 165, 250, 0.35);\n  background: rgba(30, 41, 59, 0.5);\n  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.12);\n}\n/*# sourceMappingURL=demo-page-shell.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DemoPageShellComponent, { className: "DemoPageShellComponent", filePath: "src/app/modules/smart-enroll/demos/shared/demo-page-shell.component.ts", lineNumber: 17 });
})();

export {
  DEFAULT_LIVENESS_STANDALONE_MIN_SCORE,
  DEFAULT_FACE_COMPARE_MIN_SCORE,
  DEFAULT_COMPARE_WITH_LIVENESS_LIVENESS_FLOOR,
  DEMO_HUMANID_PRIVATE_DATA_DEFAULT,
  fileToBase64,
  imageUrlToRawBase64,
  parseFaceCompareResult,
  parseLivenessResult,
  parseCompareWithLivenessResult,
  normalizePersonsListPayload,
  mapPersonDocsToListItems,
  isPersonAlreadySetError,
  getDemoOs,
  isLivenessApiErrorCode,
  translateLivenessApiError,
  applySandboxFaceFailMarker,
  BiometricsDemoApiService,
  DemoPageShellComponent
};
//# sourceMappingURL=chunk-VXZEB53O.js.map
