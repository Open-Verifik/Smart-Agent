import {
  isBiometricsEndpoint
} from "./chunk-VAHIF73V.js";
import {
  FuseHighlightService
} from "./chunk-6Z7R47EE.js";
import {
  attachColombiaCedulaPremiumPricing
} from "./chunk-XV7JRBNY.js";
import {
  getAppFeatureCatalogCopy,
  resolveAboutOverview,
  resolveAboutParamsColumnVisibility
} from "./chunk-ZK2UTJXV.js";
import {
  isClientVisibleBatchDependencyField
} from "./chunk-USONFPXP.js";
import {
  MarkdownPipe
} from "./chunk-SBPE7Z7H.js";
import {
  AccountEnvironmentService
} from "./chunk-33SZVW2I.js";
import {
  AgentWalletService
} from "./chunk-UO34MIWZ.js";
import {
  MatTooltipModule
} from "./chunk-NRO2XGZE.js";
import {
  AuthService
} from "./chunk-64R62RHA.js";
import {
  UserService
} from "./chunk-6VQY5BEJ.js";
import {
  SessionService
} from "./chunk-V36MHRLI.js";
import {
  AuthUtils
} from "./chunk-EVWXSBKG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EIYDU75T.js";
import {
  TranslocoPipe,
  TranslocoService,
  toSignal
} from "./chunk-VENEX45A.js";
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  CommonModule,
  Component,
  DomSanitizer,
  HttpClient,
  HttpParams,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  SecurityContext,
  catchError,
  computed,
  distinctUntilChanged,
  finalize,
  forkJoin,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  skip,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-I5BUD46C.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/postman/human-authn-postman.catalog.ts
var HUMAN_AUTHN_DEMO_ROUTES = {
  "zelf-proofs": "/smart-enroll/demos/humanid-create",
  "zelf-proof-liveness-active-user": "/smart-enroll/demos/humanid-create",
  "zelf-proof-encrypt-qr": "/smart-enroll/demos/humanid-create-qr",
  "zelf-proof-decrypt": "/smart-enroll/demos/humanid-decrypt",
  "zelf-proof-preview": "/smart-enroll/demos/humanid-preview",
  face_recognition_liveness: "/smart-enroll/demos/liveness"
};
var ENCRYPT_DEPENDENCIES = [
  {
    field: "publicData",
    type: "Object",
    required: true,
    default: { name: "Jane Doe", documentNumber: "12345678" },
    description: "Public metadata stored with the HumanID (string key-value pairs)"
  },
  {
    field: "metadata",
    type: "Object",
    required: true,
    default: { secretKey: "example-secret" },
    description: "Private metadata encrypted into the HumanID (string key-value pairs)"
  },
  {
    field: "faceBase64",
    type: "String",
    required: true,
    description: "Base64 encoded facial image"
  },
  {
    field: "os",
    type: "String",
    required: true,
    enum: ["DESKTOP", "ANDROID", "IOS"],
    default: "DESKTOP",
    description: "Client operating system"
  },
  {
    field: "identifier",
    type: "String",
    required: true,
    default: "randomid",
    description: "Alphanumeric identifier only (no spaces or special characters)"
  },
  {
    field: "requireLiveness",
    type: "Boolean",
    required: true,
    default: true,
    description: "Require a live face when decrypting later"
  },
  {
    field: "livenessDetectionPriorCreation",
    type: "Boolean",
    required: false,
    default: false,
    description: "Require a live face when creating the HumanID"
  },
  {
    field: "storageProvider",
    type: "String",
    required: false,
    enum: ["ipfs", "none"],
    default: "ipfs",
    description: "Store the encrypted output in IPFS, or return it without Verifik persistence"
  },
  {
    field: "tolerance",
    type: "String",
    required: false,
    enum: ["SOFT", "REGULAR", "HARDENED", "REGULAR_HARD", "REGULAR_SOFT"],
    default: "HARDENED",
    description: "Liveness anti-spoof strictness (not forwarded as livenessLevel)"
  },
  {
    field: "password",
    type: "String",
    required: false,
    description: "Optional password for additional security"
  },
  {
    field: "referenceFaceBase64",
    type: "String",
    required: false,
    description: "Optional reference face image"
  },
  {
    field: "verifierKey",
    type: "String",
    required: false,
    description: "Optional verifier key"
  }
];
var DECRYPT_DEPENDENCIES = [
  {
    field: "faceBase64",
    type: "String",
    required: true,
    description: "Base64 encoded facial image of the HumanID owner"
  },
  {
    field: "os",
    type: "String",
    required: true,
    enum: ["DESKTOP", "ANDROID", "IOS"],
    default: "DESKTOP",
    description: "Client operating system"
  },
  {
    field: "humanID",
    type: "String",
    required: true,
    description: "HumanID token returned by encrypt"
  },
  {
    field: "password",
    type: "String",
    required: false,
    description: "Password if one was set at encrypt time"
  },
  {
    field: "verifierKey",
    type: "String",
    required: false,
    description: "Optional verifier key"
  }
];
var PREVIEW_DEPENDENCIES = [
  {
    field: "humanID",
    type: "String",
    required: true,
    description: "HumanID token returned by encrypt"
  },
  {
    field: "verifierKey",
    type: "String",
    required: false,
    description: "Optional verifier key"
  }
];
var HUMAN_AUTHN_OPERATION_DEPENDENCIES = {
  "zelf-proofs": ENCRYPT_DEPENDENCIES,
  "zelf-proof-liveness-active-user": ENCRYPT_DEPENDENCIES,
  "zelf-proof-encrypt-qr": ENCRYPT_DEPENDENCIES,
  "zelf-proof-decrypt": DECRYPT_DEPENDENCIES,
  "zelf-proof-preview": PREVIEW_DEPENDENCIES
};
var resolveHumanAuthnDependencies = (code, catalogDeps) => {
  const raw = Array.isArray(catalogDeps) ? catalogDeps : [];
  const catalog = raw.filter((dep) => !!dep && typeof dep.field === "string" && dep.field.length > 0);
  if (catalog.length) {
    return catalog;
  }
  return code ? HUMAN_AUTHN_OPERATION_DEPENDENCIES[code] ?? [] : [];
};
var getHumanAuthnDemoRoute = (code) => code ? HUMAN_AUTHN_DEMO_ROUTES[code] ?? null : null;
var shouldListHumanAuthnParams = (code) => !!code && code in HUMAN_AUTHN_DEMO_ROUTES;
var defaultValueForDependency = (dep) => {
  if (dep.default !== void 0 && dep.default !== null) {
    return dep.default;
  }
  if (Array.isArray(dep.enum) && dep.enum.length) {
    return dep.enum[0];
  }
  if (dep.type === "Object") {
    return {};
  }
  if (dep.type === "Boolean") {
    return false;
  }
  return "";
};
var paramValueForDependency = (dep) => {
  const value = defaultValueForDependency(dep);
  if (typeof value === "object") {
    return JSON.stringify(value);
  }
  return value === void 0 || value === null ? "" : String(value);
};

// src/app/modules/postman/postman-catalog.util.ts
var DEFAULT_POSTMAN_COUNTRY = "Colombia";
var WORLD_CATALOG_COUNTRY = "world";
var isWorldCountry = (value) => {
  const country = value?.trim().toLowerCase();
  return country === WORLD_CATALOG_COUNTRY || country === "global";
};
var catalogCountryScope = (selected) => {
  const country = selected?.trim();
  if (!country) {
    return [DEFAULT_POSTMAN_COUNTRY];
  }
  if (isWorldCountry(country)) {
    return [WORLD_CATALOG_COUNTRY];
  }
  return [country];
};
var countryCacheKey = (countries) => [...new Set(countries.filter(Boolean))].sort((a, b) => a.localeCompare(b, "en")).join("|");
var catalogCountryScopeForCountries = (countries) => {
  const named = [...new Set((countries ?? []).map((value) => value.trim()).filter(Boolean))];
  if (!named.length) {
    return [DEFAULT_POSTMAN_COUNTRY, WORLD_CATALOG_COUNTRY];
  }
  if (named.every((value) => isWorldCountry(value))) {
    return [WORLD_CATALOG_COUNTRY];
  }
  const scoped = named.map((value) => isWorldCountry(value) ? WORLD_CATALOG_COUNTRY : value);
  return [.../* @__PURE__ */ new Set([...scoped, WORLD_CATALOG_COUNTRY])];
};
var endpointMatchesCountryFilter = (endpointCountry, selected) => {
  if (!selected)
    return true;
  if (isWorldCountry(selected))
    return isWorldCountry(endpointCountry);
  return endpointCountry === selected;
};
var catalogNeedsDetailHydration = (endpoint) => !endpoint?.docs || !Object.keys(endpoint.docs).length;
var isCatalogTransportFailure = (err) => !err || err.status === 0;
var extractFeatureRows = (payload) => {
  if (Array.isArray(payload))
    return payload;
  if (!payload || typeof payload !== "object")
    return [];
  const data = payload.data;
  if (Array.isArray(data))
    return data;
  if (data && typeof data === "object" && Array.isArray(data.docs)) {
    return data.docs;
  }
  return [];
};
var extractCountryRows = (payload) => {
  const rows = extractFeatureRows(payload);
  return rows.map((row) => ({
    country: String(row?.country || "").trim(),
    count: Number(row?.count) || 0
  })).filter((row) => row.country);
};

// src/app/modules/postman/postman-include-cost.util.ts
var POSTMAN_INCLUDE_COST_KEY = "includeCost";
function isPostmanIncludeCostEnabled(value) {
  return value === true || value === "true";
}
function getPostmanIncludeCostValue(endpoint) {
  const row = endpoint.params?.find((p) => p.key === POSTMAN_INCLUDE_COST_KEY);
  return row ? row.value ?? "true" : null;
}
function ensurePostmanIncludeCostParam(endpoint) {
  const already = endpoint.params?.some((p) => p.key === POSTMAN_INCLUDE_COST_KEY);
  if (already)
    return endpoint;
  const newRow = {
    key: POSTMAN_INCLUDE_COST_KEY,
    value: "true",
    type: "boolean",
    required: false,
    description: "",
    enum: ["true", "false"],
    system: "includeCost",
    readonlyKey: true
  };
  return __spreadProps(__spreadValues({}, endpoint), { params: [...endpoint.params ?? [], newRow] });
}
function removePostmanIncludeCostParam(endpoint) {
  if (!endpoint.params?.some((p) => p.key === POSTMAN_INCLUDE_COST_KEY)) {
    return endpoint;
  }
  return __spreadProps(__spreadValues({}, endpoint), {
    params: endpoint.params.filter((p) => p.key !== POSTMAN_INCLUDE_COST_KEY)
  });
}
function syncPostmanIncludeCostParam(endpoint, paymentMethod) {
  return paymentMethod === "credits" ? ensurePostmanIncludeCostParam(endpoint) : removePostmanIncludeCostParam(endpoint);
}
function resolvePostmanIncludeCostForSend(endpoint, method) {
  const value = getPostmanIncludeCostValue(endpoint);
  if (!isPostmanIncludeCostEnabled(value))
    return {};
  const isBodyMethod = method === "POST" || method === "PUT" || method === "PATCH";
  return isBodyMethod ? { body: true } : { query: "true" };
}

// src/app/modules/postman/postman-sexo.util.ts
var FEMALE_ALIASES = /* @__PURE__ */ new Set(["F", "FEMENINO", "FEMALE", "MUJER", "FEMININO"]);
var MALE_ALIASES = /* @__PURE__ */ new Set(["M", "MASCULINO", "MALE", "HOMBRE", "MASCULINE"]);
var normalizePostmanSexoValue = (value) => {
  const trimmed = String(value ?? "").trim();
  if (!trimmed) {
    return "";
  }
  const upper = trimmed.toUpperCase();
  if (FEMALE_ALIASES.has(upper)) {
    return "FEMENINO";
  }
  if (MALE_ALIASES.has(upper)) {
    return "MASCULINO";
  }
  return trimmed;
};
var isPostmanSexoEnumMatch = (raw, enums) => {
  if (!enums?.length) {
    return false;
  }
  const canonical = normalizePostmanSexoValue(raw).toLowerCase();
  const valid = enums.map((v) => String(v).toLowerCase());
  if (valid.includes(canonical)) {
    return true;
  }
  if (canonical === "femenino" && (valid.includes("f") || valid.includes("femenino"))) {
    return true;
  }
  if (canonical === "masculino" && (valid.includes("m") || valid.includes("masculino"))) {
    return true;
  }
  return valid.includes(String(raw ?? "").trim().toLowerCase());
};
var filterPostmanSexoEnumOptions = (enums) => {
  const list = enums.map(String);
  const upper = new Set(list.map((v) => v.toUpperCase()));
  const hasLong = upper.has("FEMENINO") || upper.has("MASCULINO");
  if (!hasLong) {
    return [...list];
  }
  return list.filter((value) => {
    const key = value.toUpperCase();
    return key !== "M" && key !== "F";
  });
};
var getPostmanSexoLabelKey = (value) => {
  const canonical = normalizePostmanSexoValue(value);
  if (canonical === "FEMENINO") {
    return "postman.requestEditor.params.sexoFemale";
  }
  if (canonical === "MASCULINO") {
    return "postman.requestEditor.params.sexoMale";
  }
  return null;
};

// src/app/modules/postman/postman-url.util.ts
var POSTMAN_PATH_PARAM_KEYS_BY_CODE = {
  co_bogota_taxi_plate: ["plate"],
  co_bogota_taxi_driver_card: ["card"]
};
function buildPostmanEffectiveUrl(endpoint) {
  let url = endpoint.url;
  const pathKeys = endpoint.code ? POSTMAN_PATH_PARAM_KEYS_BY_CODE[endpoint.code] : void 0;
  if (!pathKeys?.length || !endpoint.params?.length) {
    return url;
  }
  const segments = [];
  for (const key of pathKeys) {
    const row = endpoint.params.find((p) => p.key === key);
    const v = row?.value?.trim();
    if (v) {
      segments.push(encodeURIComponent(v));
    }
  }
  if (segments.length === pathKeys.length) {
    url = `${url.replace(/\/+$/, "")}/${segments.join("/")}`;
  }
  return url;
}
function getPostmanPathParamKeysForEndpoint(endpoint) {
  return endpoint.code ? POSTMAN_PATH_PARAM_KEYS_BY_CODE[endpoint.code] : void 0;
}

// src/app/modules/postman/postman-request-validation.ts
var DOCUMENT_NUMBER_FIELD = "documentNumber";
var DOCUMENT_TYPE_FIELD = "documentType";
var FIELD_REQUIRED_TRANSLATION_KEY = "postman.requestEditor.validation.fieldRequired";
var PAIR_NUMBER_WHEN_TYPE_KEY = "createBatch.pairDocumentNumberRequiredWhenType";
var PAIR_TYPE_WHEN_NUMBER_KEY = "createBatch.pairDocumentTypeRequiredWhenNumber";
var PAIR_VALUE_PLACEHOLDERS = /* @__PURE__ */ new Set(["-", "n/a", "na"]);
var normalizeDependencyGroup = (d) => {
  if (d.dependencyGroup == null)
    return null;
  const s = String(d.dependencyGroup).trim();
  return s.length ? s : null;
};
var isEmptyValue = (value) => {
  if (value === null || value === void 0)
    return true;
  if (typeof value === "string" && value.trim() === "")
    return true;
  return false;
};
var isEffectivelyEmptyForMode = (value) => {
  if (value === null || value === void 0)
    return true;
  const normalized = String(value).trim();
  if (!normalized)
    return true;
  return PAIR_VALUE_PLACEHOLDERS.has(normalized.toLowerCase());
};
var findColumnKey = (row, fieldName) => {
  const lowerField = fieldName.toLowerCase();
  const keys = Object.keys(row);
  const match = keys.find((k) => k.toLowerCase() === lowerField);
  return match || null;
};
var getRowCellRaw = (row, field) => {
  const k = findColumnKey(row, field);
  return k ? row[k] : void 0;
};
var NAME_MODE_TRIGGER_FIELDS = /* @__PURE__ */ new Set(["fullName", "primerNombre", "primerApellido"]);
var NAME_MODE_REQUIRED_FIELDS = ["fullName", "primerNombre", "primerApellido", "fecha"];
var SEXO_FIELD = "sexo";
var SERIAL_FIELD = "serial";
var getPostmanXorGroupMetadata = (deps) => {
  const grouped = /* @__PURE__ */ new Map();
  for (const d of deps) {
    const g = normalizeDependencyGroup(d);
    if (g === null)
      continue;
    if (!grouped.has(g))
      grouped.set(g, []);
    grouped.get(g).push(d);
  }
  if (grouped.size < 2)
    return null;
  const docGroupIds = /* @__PURE__ */ new Set();
  const nameGroupIds = /* @__PURE__ */ new Set();
  const serialGroupIds = /* @__PURE__ */ new Set();
  for (const [gid, list] of grouped) {
    if (list.some((x) => x.field === "documentType" || x.field === "documentNumber")) {
      docGroupIds.add(gid);
    }
    if (list.some((x) => NAME_MODE_TRIGGER_FIELDS.has(x.field))) {
      nameGroupIds.add(gid);
    }
    if (list.some((x) => x.field === SERIAL_FIELD)) {
      serialGroupIds.add(gid);
    }
  }
  if (docGroupIds.size === 0 || nameGroupIds.size === 0)
    return null;
  return { docGroupIds, nameGroupIds, serialGroupIds };
};
var isDocumentSearchModeActive = (row, deps, docGroupIds) => {
  for (const d of deps) {
    const g = normalizeDependencyGroup(d);
    if (g === null || !docGroupIds.has(g))
      continue;
    if (d.field !== "documentType" && d.field !== "documentNumber")
      continue;
    if (!isEffectivelyEmptyForMode(getRowCellRaw(row, d.field)))
      return true;
  }
  return false;
};
var isFullNameModeActive = (row, deps, nameGroupIds) => {
  for (const d of deps) {
    const g = normalizeDependencyGroup(d);
    if (g === null || !nameGroupIds.has(g))
      continue;
    if (!NAME_MODE_TRIGGER_FIELDS.has(d.field))
      continue;
    if (!isEffectivelyEmptyForMode(getRowCellRaw(row, d.field)))
      return true;
  }
  return false;
};
var isSerialSearchModeActive = (row, deps, serialGroupIds) => {
  if (serialGroupIds.size === 0)
    return false;
  for (const d of deps) {
    const g = normalizeDependencyGroup(d);
    if (g === null || !serialGroupIds.has(g))
      continue;
    if (d.field !== SERIAL_FIELD)
      continue;
    if (!isEffectivelyEmptyForMode(getRowCellRaw(row, d.field)))
      return true;
  }
  return false;
};
var requiredWhenPredicateMatches = (row, when) => {
  if (!when?.field || !when.in?.length)
    return false;
  const v = getRowCellRaw(row, when.field);
  if (isEffectivelyEmptyForMode(v))
    return false;
  const norm = String(v).trim().toLowerCase();
  return when.in.some((x) => String(x).trim().toLowerCase() === norm);
};
var allXorGroupDependencyFieldsEmpty = (row, deps, xorMeta) => {
  for (const d of deps) {
    const g = normalizeDependencyGroup(d);
    if (g === null)
      continue;
    if (!xorMeta.docGroupIds.has(g) && !xorMeta.nameGroupIds.has(g) && !xorMeta.serialGroupIds.has(g)) {
      continue;
    }
    if (!isEffectivelyEmptyForMode(getRowCellRaw(row, d.field)))
      return false;
  }
  return true;
};
var appendSharedSexoRequiredIfNeeded = (row, deps, stepLabel, issues) => {
  const hasSexoDep = deps.some((d) => d.field === SEXO_FIELD);
  if (!hasSexoDep)
    return;
  if (!isEffectivelyEmptyForMode(getRowCellRaw(row, SEXO_FIELD)))
    return;
  issues.push({
    field: SEXO_FIELD,
    translationKey: FIELD_REQUIRED_TRANSLATION_KEY,
    translationParams: { field: SEXO_FIELD, step: stepLabel }
  });
};
var appendNameModeRequiredFields = (row, deps, nameGroupIds, stepLabel, issues) => {
  const nameFields = new Set(deps.filter((d) => {
    const g = normalizeDependencyGroup(d);
    return g !== null && nameGroupIds.has(g);
  }).map((d) => d.field));
  for (const field of NAME_MODE_REQUIRED_FIELDS) {
    if (!nameFields.has(field))
      continue;
    if (!isEffectivelyEmptyForMode(getRowCellRaw(row, field)))
      continue;
    issues.push({
      field,
      translationKey: FIELD_REQUIRED_TRANSLATION_KEY,
      translationParams: { field, step: stepLabel }
    });
  }
};
var appendLeakIssuesForGroups = (row, deps, leakGroupIds, translationKey, stepLabel, issues) => {
  for (const d of deps) {
    const g = normalizeDependencyGroup(d);
    if (g === null || !leakGroupIds.has(g))
      continue;
    if (!isEffectivelyEmptyForMode(getRowCellRaw(row, d.field))) {
      issues.push({
        field: d.field,
        translationKey,
        translationParams: { step: stepLabel, field: d.field }
      });
    }
  }
};
var isCalendarDdMmYyyy = (value) => {
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value);
  if (!m)
    return false;
  const d = parseInt(m[1], 10);
  const mo = parseInt(m[2], 10);
  const y = parseInt(m[3], 10);
  if (mo < 1 || mo > 12 || d < 1 || d > 31)
    return false;
  const dt = new Date(y, mo - 1, d);
  return dt.getFullYear() === y && dt.getMonth() === mo - 1 && dt.getDate() === d;
};
var valueMatchesDependencyDateFormat = (raw, format) => {
  const s = String(raw ?? "").trim();
  if (!s)
    return true;
  const norm = format.replace(/\s+/g, "").toLowerCase();
  if (norm === "dd/mm/yyyy") {
    return isCalendarDdMmYyyy(s);
  }
  return true;
};
var appendDocumentTypeNumberPairErrorsForDeps = (row, deps, docGroupIds, issues, stepLabel) => {
  const inDocGroup = (d) => {
    const g = normalizeDependencyGroup(d);
    if (docGroupIds) {
      return g !== null && docGroupIds.has(g);
    }
    return true;
  };
  const hasType = deps.some((d) => d.field === "documentType" && inDocGroup(d));
  const hasNum = deps.some((d) => d.field === "documentNumber" && inDocGroup(d));
  if (!hasType || !hasNum)
    return;
  const numKey = findColumnKey(row, DOCUMENT_NUMBER_FIELD);
  const typeKey = findColumnKey(row, DOCUMENT_TYPE_FIELD);
  const numRaw = numKey ? row[numKey] : void 0;
  const typeRaw = typeKey ? row[typeKey] : void 0;
  const numEmpty = isEffectivelyEmptyForMode(numRaw);
  const typeEmpty = isEffectivelyEmptyForMode(typeRaw);
  if (numEmpty === typeEmpty)
    return;
  const hasPairIssueFor = (field) => issues.some((iss) => iss.field === field && (iss.translationKey === "createBatch.pairDocumentTypeRequiredWhenNumber" || iss.translationKey === "createBatch.pairDocumentNumberRequiredWhenType"));
  if (!numEmpty && typeEmpty) {
    if (!hasPairIssueFor(DOCUMENT_TYPE_FIELD)) {
      issues.push({
        field: DOCUMENT_TYPE_FIELD,
        translationKey: "createBatch.pairDocumentTypeRequiredWhenNumber",
        translationParams: { step: stepLabel }
      });
    }
  } else if (numEmpty && !typeEmpty) {
    if (!hasPairIssueFor(DOCUMENT_NUMBER_FIELD)) {
      issues.push({
        field: DOCUMENT_NUMBER_FIELD,
        translationKey: "createBatch.pairDocumentNumberRequiredWhenType",
        translationParams: { step: stepLabel }
      });
    }
  }
};
var appendEnumIssueIfAny = (d, raw, issues) => {
  const enums = d.enum;
  if (!enums || !Array.isArray(enums) || enums.length === 0)
    return;
  if (isEmptyValue(raw))
    return;
  if (d.field === SEXO_FIELD) {
    if (!isPostmanSexoEnumMatch(raw, enums.map(String))) {
      issues.push({
        field: d.field,
        translationKey: "postman.requestEditor.validation.invalidEnum",
        translationParams: {
          field: d.field,
          value: String(raw),
          expected: enums.join(", ")
        }
      });
    }
    return;
  }
  const normalizedValue = String(raw).trim().toLowerCase();
  const validValues = enums.map((v) => String(v).toLowerCase());
  if (!validValues.includes(normalizedValue)) {
    issues.push({
      field: d.field,
      translationKey: "postman.requestEditor.validation.invalidEnum",
      translationParams: {
        field: d.field,
        value: String(raw),
        expected: enums.join(", ")
      }
    });
  }
};
var appendDateFormatIssueIfAny = (d, raw, issues) => {
  if (!d.dateFormat || isEmptyValue(raw))
    return;
  if (valueMatchesDependencyDateFormat(raw, d.dateFormat))
    return;
  issues.push({
    field: d.field,
    translationKey: "createBatch.invalidDateFormat",
    translationParams: { field: d.field, format: d.dateFormat }
  });
};
var dedupeFieldRequiredWhenDocumentPairIssue = (issues) => {
  const pairFields = /* @__PURE__ */ new Set();
  for (const i of issues) {
    if (i.translationKey === PAIR_NUMBER_WHEN_TYPE_KEY || i.translationKey === PAIR_TYPE_WHEN_NUMBER_KEY) {
      if (i.field) {
        pairFields.add(i.field);
      }
    }
  }
  if (pairFields.size === 0) {
    return issues;
  }
  return issues.filter((i) => !(i.translationKey === FIELD_REQUIRED_TRANSLATION_KEY && i.field && pairFields.has(i.field)));
};
var appendLegacyDependencyIssues = (row, deps, stepLabel, issues) => {
  for (const d of deps) {
    const raw = getRowCellRaw(row, d.field);
    if (d.required && isEmptyValue(raw)) {
      issues.push({
        field: d.field,
        translationKey: "postman.requestEditor.validation.fieldRequired",
        translationParams: { field: d.field, step: stepLabel }
      });
    }
    appendEnumIssueIfAny(d, raw, issues);
    appendDateFormatIssueIfAny(d, raw, issues);
  }
  const hasType = deps.some((d) => d.field === "documentType");
  const hasNum = deps.some((d) => d.field === "documentNumber");
  if (hasType && hasNum) {
    appendDocumentTypeNumberPairErrorsForDeps(row, deps, null, issues, stepLabel);
  }
};
var appendGroupedDependencyIssues = (row, deps, stepLabel, issues, options) => {
  const xorMeta = getPostmanXorGroupMetadata(deps);
  if (!xorMeta) {
    appendLegacyDependencyIssues(row, deps, stepLabel, issues);
    return;
  }
  const { docGroupIds, nameGroupIds, serialGroupIds } = xorMeta;
  const mode1Active = isDocumentSearchModeActive(row, deps, docGroupIds);
  const mode2Active = isFullNameModeActive(row, deps, nameGroupIds);
  const mode3Active = isSerialSearchModeActive(row, deps, serialGroupIds);
  const activeModeCount = Number(mode1Active) + Number(mode2Active) + Number(mode3Active);
  if (activeModeCount > 1) {
    issues.push({
      field: mode2Active ? "fullName" : mode3Active ? SERIAL_FIELD : DOCUMENT_NUMBER_FIELD,
      translationKey: "createBatch.validationXorBothModes",
      translationParams: { step: stepLabel }
    });
    return;
  }
  if (activeModeCount === 0) {
    const skipNeither = options?.lenientEmptyXor && allXorGroupDependencyFieldsEmpty(row, deps, xorMeta);
    if (!skipNeither) {
      issues.push({
        field: "fullName",
        translationKey: "createBatch.validationXorNeitherMode",
        translationParams: { step: stepLabel }
      });
      return;
    }
  }
  if (mode2Active) {
    appendLeakIssuesForGroups(row, deps, /* @__PURE__ */ new Set([...docGroupIds, ...serialGroupIds]), "createBatch.validationLeakDocumentWhenFullName", stepLabel, issues);
    appendNameModeRequiredFields(row, deps, nameGroupIds, stepLabel, issues);
    appendSharedSexoRequiredIfNeeded(row, deps, stepLabel, issues);
  }
  if (mode1Active) {
    appendLeakIssuesForGroups(row, deps, /* @__PURE__ */ new Set([...nameGroupIds, ...serialGroupIds]), "createBatch.validationLeakFullNameWhenDocument", stepLabel, issues);
    appendDocumentTypeNumberPairErrorsForDeps(row, deps, docGroupIds, issues, stepLabel);
    for (const d of deps) {
      const g = normalizeDependencyGroup(d);
      if (g === null || !docGroupIds.has(g))
        continue;
      if (!d.requiredWhen)
        continue;
      if (!requiredWhenPredicateMatches(row, d.requiredWhen))
        continue;
      if (isEffectivelyEmptyForMode(getRowCellRaw(row, d.field))) {
        const when = d.requiredWhen;
        issues.push({
          field: d.field,
          translationKey: "createBatch.validationConditionalRequired",
          translationParams: {
            step: stepLabel,
            field: d.field,
            whenField: when.field,
            values: (when.in || []).join(", ")
          }
        });
      }
    }
    appendSharedSexoRequiredIfNeeded(row, deps, stepLabel, issues);
  }
  if (mode3Active) {
    appendLeakIssuesForGroups(row, deps, /* @__PURE__ */ new Set([...docGroupIds, ...nameGroupIds]), "createBatch.validationLeakDocumentWhenFullName", stepLabel, issues);
    if (isEffectivelyEmptyForMode(getRowCellRaw(row, SERIAL_FIELD))) {
      issues.push({
        field: SERIAL_FIELD,
        translationKey: FIELD_REQUIRED_TRANSLATION_KEY,
        translationParams: { field: SERIAL_FIELD, step: stepLabel }
      });
    }
  }
  for (const d of deps) {
    const g = normalizeDependencyGroup(d);
    const isGrouped = g !== null;
    let applies = true;
    if (isGrouped) {
      const gid = g;
      applies = mode1Active && docGroupIds.has(gid) || mode2Active && nameGroupIds.has(gid) || mode3Active && serialGroupIds.has(gid);
    } else {
      applies = true;
    }
    if (!applies)
      continue;
    const raw = getRowCellRaw(row, d.field);
    if (d.required && isEmptyValue(raw) && isGrouped) {
      issues.push({
        field: d.field,
        translationKey: "postman.requestEditor.validation.fieldRequired",
        translationParams: { field: d.field, step: stepLabel }
      });
    }
    appendEnumIssueIfAny(d, raw, issues);
    appendDateFormatIssueIfAny(d, raw, issues);
  }
};
var buildGetInputRecord = (endpoint) => {
  const row = {};
  if (endpoint.method === "GET" && endpoint.params?.length) {
    for (const p of endpoint.params) {
      if (!isClientVisibleBatchDependencyField(p.key))
        continue;
      row[p.key] = p.value;
    }
  }
  return row;
};
var buildPostBodyInputRecord = (body) => {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return {};
  }
  const out = {};
  for (const [k, v] of Object.entries(body)) {
    out[k] = v;
  }
  return out;
};
var pathParamIssues = (endpoint) => {
  const pathKeys = getPostmanPathParamKeysForEndpoint(endpoint);
  if (!pathKeys?.length)
    return [];
  const issues = [];
  for (const key of pathKeys) {
    const v = endpoint.params?.find((p) => p.key === key)?.value;
    if (!String(v ?? "").trim()) {
      issues.push({
        field: key,
        translationKey: "postman.requestEditor.validation.pathSegmentRequired",
        translationParams: { segment: key }
      });
    }
  }
  return issues;
};
var legacyParamIssues = (endpoint, stepLabel) => {
  const issues = [];
  for (const p of endpoint.params ?? []) {
    if (!isClientVisibleBatchDependencyField(p.key))
      continue;
    if (p.required && !String(p.value ?? "").trim()) {
      issues.push({
        field: p.key,
        translationKey: "postman.requestEditor.validation.fieldRequired",
        translationParams: { field: p.key, step: stepLabel }
      });
    }
    if (!p.enum?.length)
      continue;
    const raw = p.value;
    if (isEmptyValue(raw))
      continue;
    if (p.key === SEXO_FIELD) {
      if (!isPostmanSexoEnumMatch(raw, p.enum.map(String))) {
        issues.push({
          field: p.key,
          translationKey: "postman.requestEditor.validation.invalidEnum",
          translationParams: {
            field: p.key,
            value: String(raw),
            expected: p.enum.join(", ")
          }
        });
      }
    } else {
      const normalizedValue = String(raw).trim().toLowerCase();
      const validValues = p.enum.map((v) => String(v).toLowerCase());
      if (!validValues.includes(normalizedValue)) {
        issues.push({
          field: p.key,
          translationKey: "postman.requestEditor.validation.invalidEnum",
          translationParams: {
            field: p.key,
            value: String(raw),
            expected: p.enum.join(", ")
          }
        });
      }
    }
    if (p.dateFormat && !isEmptyValue(raw) && !valueMatchesDependencyDateFormat(raw, p.dateFormat)) {
      issues.push({
        field: p.key,
        translationKey: "createBatch.invalidDateFormat",
        translationParams: { field: p.key, format: p.dateFormat }
      });
    }
  }
  return issues;
};
var getPostmanRequestValidationIssues = (endpoint, postBodyJsonDraft, options) => {
  if (!endpoint) {
    return [];
  }
  const stepLabel = endpoint.layoutDisplayName?.trim() || endpoint.label || endpoint.code || "API";
  const issues = [...pathParamIssues(endpoint)];
  let input;
  if (endpoint.method === "GET" || endpoint.method === "DELETE") {
    input = buildGetInputRecord(endpoint);
  } else {
    const draft = postBodyJsonDraft?.trim() ?? "";
    if (draft === "") {
      input = {};
    } else {
      try {
        const parsed = JSON.parse(draft);
        input = buildPostBodyInputRecord(parsed);
      } catch {
        return [
          ...issues,
          {
            translationKey: "postman.requestEditor.validation.invalidJsonBody"
          }
        ];
      }
    }
  }
  const rawDeps = endpoint.dependencies ?? [];
  const deps = rawDeps.filter((d) => d && typeof d.field === "string" && isClientVisibleBatchDependencyField(d.field));
  if (deps.length) {
    appendGroupedDependencyIssues(input, deps, stepLabel, issues, options);
  } else {
    issues.push(...legacyParamIssues(endpoint, stepLabel));
  }
  return dedupeFieldRequiredWhenDocumentPairIssue(issues);
};
var isPostmanRequestValid = (endpoint, postBodyJsonDraft) => getPostmanRequestValidationIssues(endpoint, postBodyJsonDraft).length === 0;
var DOCUMENT_FIELD_ORDER = [
  "documentType",
  "documentNumber",
  "sexo",
  "dateOfBirth",
  "expirationDate"
];
var NAME_FIELD_ORDER = [
  "fullName",
  "primerNombre",
  "segundoNombre",
  "primerApellido",
  "segundoApellido",
  "sexo",
  "fecha"
];
var isSharedXorNameAndDocumentField = (field) => field === SEXO_FIELD;
var getPostmanXorParamLayout = (endpoint) => {
  const allRows = (endpoint?.params ?? []).map((param, index) => ({
    index,
    param
  }));
  const rawDeps = endpoint?.dependencies ?? [];
  const deps = rawDeps.filter((d) => d && typeof d.field === "string" && isClientVisibleBatchDependencyField(d.field));
  const xor = getPostmanXorGroupMetadata(deps);
  if (!xor) {
    return { kind: "flat", allRows };
  }
  const fieldToGroup = /* @__PURE__ */ new Map();
  for (const d of deps) {
    const g = normalizeDependencyGroup(d);
    if (g)
      fieldToGroup.set(d.field, g);
  }
  const nameRows = [];
  const documentRows = [];
  const serialRows = [];
  const otherRows = [];
  const sharedNameDocRows = [];
  for (const item of allRows) {
    const g = fieldToGroup.get(item.param.key);
    if (g && xor.nameGroupIds.has(g)) {
      nameRows.push(item);
    } else if (g && xor.docGroupIds.has(g)) {
      documentRows.push(item);
    } else if (g && xor.serialGroupIds.has(g)) {
      serialRows.push(item);
    } else if (isSharedXorNameAndDocumentField(item.param.key)) {
      sharedNameDocRows.push(item);
    } else {
      otherRows.push(item);
    }
  }
  if (nameRows.length === 0 && documentRows.length === 0) {
    return { kind: "flat", allRows };
  }
  for (const shared of sharedNameDocRows) {
    nameRows.push(shared);
    documentRows.push(shared);
  }
  const docOrder = (key) => {
    const i = DOCUMENT_FIELD_ORDER.indexOf(key);
    return i === -1 ? 1e3 : i;
  };
  const nameOrder = (key) => {
    const i = NAME_FIELD_ORDER.indexOf(key);
    return i === -1 ? 1e3 : i;
  };
  documentRows.sort((a, b) => docOrder(a.param.key) - docOrder(b.param.key) || a.param.key.localeCompare(b.param.key));
  nameRows.sort((a, b) => nameOrder(a.param.key) - nameOrder(b.param.key) || a.param.key.localeCompare(b.param.key));
  serialRows.sort((a, b) => a.param.key.localeCompare(b.param.key));
  otherRows.sort((a, b) => a.index - b.index);
  return { kind: "xor", nameRows, documentRows, serialRows, otherRows };
};
var filterVisibleXorDocumentRows = (endpoint, documentRows) => {
  if (!endpoint?.params?.length)
    return documentRows;
  const input = buildGetInputRecord(endpoint);
  const rawDeps = endpoint.dependencies ?? [];
  const deps = rawDeps.filter((d) => d && typeof d.field === "string" && isClientVisibleBatchDependencyField(d.field));
  return documentRows.filter((item) => {
    const key = item.param.key;
    if (key === DOCUMENT_TYPE_FIELD || key === DOCUMENT_NUMBER_FIELD || isSharedXorNameAndDocumentField(key)) {
      return true;
    }
    const meta = deps.find((d) => d.field === key);
    if (!meta)
      return true;
    if (meta.requiredWhen?.in?.length) {
      return requiredWhenPredicateMatches(input, meta.requiredWhen);
    }
    return !isEffectivelyEmptyForMode(getRowCellRaw(input, DOCUMENT_TYPE_FIELD));
  });
};
var getPostmanDependencyGuidanceKind = (endpoint) => {
  if (!endpoint?.dependencies?.length)
    return null;
  const deps = endpoint.dependencies.filter((d) => d && typeof d.field === "string" && isClientVisibleBatchDependencyField(d.field));
  if (getPostmanXorGroupMetadata(deps))
    return "xor";
  const needsDocumentGuidance = deps.some((d) => (d.requiredWhen?.in?.length ?? 0) > 0 || !!d.dateFormat);
  if (needsDocumentGuidance)
    return "documentFields";
  return null;
};
var endpointShowsGroupedRequestGuidance = (endpoint) => getPostmanDependencyGuidanceKind(endpoint) != null;

// src/app/modules/postman/postman.types.ts
var API_ENDPOINTS = [
  {
    id: "auth-email",
    label: "API Key Access via Email",
    code: "feature_email_login",
    category: "AUTHENTICATION",
    country: "world",
    method: "POST",
    url: `${environment.apiUrl}/v2/projects/email-login`,
    headers: [{ key: "Accept", value: "application/json" }],
    params: [
      {
        key: "email",
        value: "",
        type: "string",
        required: true,
        description: "Client email to receive the OTP."
      }
    ]
  },
  {
    id: "biometrics-liveness",
    label: "Liveness Detection",
    code: "face_recognition_liveness",
    category: "BIOMETRICS_APIS",
    country: "world",
    method: "POST",
    url: `${environment.apiUrl}/v2/face-recognition/liveness`,
    headers: [
      { key: "Content-Type", value: "application/json" },
      { key: "Authorization", value: "Bearer <token>" }
    ],
    body: {
      os: "DESKTOP",
      image: "",
      liveness_min_score: 0.6
    }
  },
  {
    id: "identity-colombia",
    label: "Colombian Citizen",
    code: "colombia_api_identity_lookup",
    category: "IDENTITY_VALIDATION",
    country: "Colombia",
    method: "GET",
    url: `${environment.apiUrl}/v2/co/cedula`,
    headers: [
      { key: "Accept", value: "application/json" },
      { key: "Authorization", value: "Bearer <token>" }
    ],
    params: [
      {
        key: "documentType",
        value: "CC",
        type: "string",
        required: true,
        description: "One of CC, CE, PPT, NIT, PEP.",
        enum: ["CC", "CE", "PPT", "NIT", "PEP"]
      },
      {
        key: "documentNumber",
        value: "",
        type: "string",
        required: true,
        description: "Document number."
      }
    ],
    documentationUrl: "docs/identity-validation/colombia/colombian-citizen.md"
  }
];

// src/app/modules/postman/sandbox/sandbox-error-profiles.ts
var SANDBOX_ERROR_DOCUMENT_404 = "90040401";
var SANDBOX_ERROR_DOCUMENT_500 = "90050001";
var SANDBOX_ERROR_PROFILE_404 = {
  documentNumber: SANDBOX_ERROR_DOCUMENT_404,
  processNumber: SANDBOX_ERROR_DOCUMENT_404,
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404
};
var SANDBOX_ERROR_PROFILE_500 = {
  documentNumber: SANDBOX_ERROR_DOCUMENT_500,
  fullName: "500 \u2014 Server error",
  responseType: "error",
  expectedStatus: 500
};
var SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER = {
  profileKey: "409-missing-documentNumber",
  documentNumber: "90040901",
  fullName: "409 \u2014 Missing documentNumber",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { documentNumber: "" }
};
var SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE = {
  profileKey: "409-invalid-documentType",
  documentNumber: "90040902",
  fullName: "409 \u2014 Invalid documentType",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { documentType: "INVALID", documentNumber: "10000001" }
};
var SANDBOX_CONFLICT_MISSING_EXPEDITION_DATE = {
  profileKey: "409-missing-expeditionDate",
  documentNumber: "90040903",
  fullName: "409 \u2014 Missing expeditionDate",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { expeditionDate: "", documentNumber: "10000001" }
};
var SANDBOX_CONFLICT_INVALID_EXPEDITION_DATE = {
  profileKey: "409-invalid-expeditionDate",
  documentNumber: "90040904",
  fullName: "409 \u2014 Invalid expeditionDate format",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { expeditionDate: "not-a-date", documentNumber: "10000001" }
};
var SANDBOX_CONFLICT_MISSING_CITY = {
  profileKey: "409-missing-city",
  documentNumber: "90040905",
  fullName: "409 \u2014 Missing city",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { city: "", documentNumber: "10000001" }
};
var SANDBOX_CONFLICT_MISSING_QUALITY = {
  profileKey: "409-missing-quality",
  documentNumber: "90040906",
  fullName: "409 \u2014 Missing quality",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { quality: "", documentNumber: "10000001" }
};
var SANDBOX_CONFLICT_MISSING_PROCESS_NUMBER = {
  profileKey: "409-missing-processNumber",
  documentNumber: "90040907",
  processNumber: "90040907",
  fullName: "409 \u2014 Missing processNumber",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { processNumber: "" }
};
var appendSandboxResponseProfiles = (successProfiles, options = {}) => [
  ...successProfiles,
  ...options.conflictProfiles ?? [],
  ...options.include404 !== false ? [SANDBOX_ERROR_PROFILE_404] : [],
  ...options.include500 ? [SANDBOX_ERROR_PROFILE_500] : []
];
var getPostmanSandboxProfileKey = (profile) => profile.profileKey ?? profile.vin ?? profile.plate ?? profile.processNumber ?? profile.documentNumber;
var matchesPostmanSandboxProfile = (profile, params) => {
  if (!params?.length) {
    return false;
  }
  if (profile.paramOverrides) {
    return Object.entries(profile.paramOverrides).every(([key, value]) => {
      const param = params.find((p) => p.key === key);
      return (param?.value ?? "") === value;
    });
  }
  const documentNumber = params.find((p) => p.key === "documentNumber")?.value?.trim() ?? "";
  const processNumber = params.find((p) => p.key === "processNumber")?.value?.trim() ?? "";
  const plate = params.find((p) => p.key === "plate")?.value?.trim() ?? "";
  const vin = params.find((p) => p.key === "vin")?.value?.trim() ?? "";
  if (profile.vin && vin) {
    return vin === profile.vin;
  }
  if (profile.plate && plate) {
    return plate === profile.plate;
  }
  if (profile.processNumber && processNumber) {
    return processNumber === profile.processNumber;
  }
  return documentNumber === profile.documentNumber;
};
var formatPostmanSandboxProfileLabel = (profile) => {
  if (profile.responseType === "error" && profile.expectedStatus) {
    return `${profile.documentNumber} \u2014 HTTP ${profile.expectedStatus} \xB7 ${profile.fullName.replace(/^\d{3}\s—\s/, "")}`;
  }
  return `${profile.vin ?? profile.plate ?? profile.processNumber ?? profile.documentNumber} \u2014 ${profile.fullName}`;
};

// src/app/modules/postman/sandbox/countries/dominicanrepublic.postman-sandbox.ts
var DOMINICAN_REPUBLIC_IDENTITY_ENDPOINT_CODE = "republica_dominicana_api_citizen_lookup";
var DOMINICAN_REPUBLIC_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var DOMINICAN_REPUBLIC_POSTMAN_SANDBOX_BY_CODE = {
  [DOMINICAN_REPUBLIC_IDENTITY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(DOMINICAN_REPUBLIC_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [DOMINICAN_REPUBLIC_IDENTITY_ENDPOINT_CODE]: "CIE"
    },
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/canada.postman-sandbox.ts
var CANADA_COMPANY_ENDPOINT_CODE = "canada_api_company";
var CANADA_ONTARIO_DRIVER_LICENSE_ENDPOINT_CODE = "canada_api_driver_license_ontario";
var CANADA_ONTARIO_PLATE_ENDPOINT_CODE = "canada_api_ontario_plate";
var CANADA_QUEBEC_DRIVER_LICENSE_ENDPOINT_CODE = "canada_api_driver_license_quebec";
var CANADA_BC_DRIVER_LICENSE_ENDPOINT_CODE = "canada_api_driver_license_british-columbia";
var CANADA_COMPANY_DEFAULT_BUSINESS = "BAI HENG PACKAGING SUPPLIES INC";
var CANADA_COMPANY_DEFAULT_PROVINCE = "ON";
var CANADA_ONTARIO_PLATE_DEFAULT_PLATE = "BKTR456";
var CANADA_ONTARIO_PLATE_DEFAULT_PERMIT = "N9166001";
var CANADA_ONTARIO_PLATE_SANDBOX_PROFILES = [
  {
    documentNumber: "BKTR456",
    fullName: "BKTR456 \u2014 Ontario plate expiry (valid)",
    plate: "BKTR456",
    paramOverrides: { plate: "BKTR456", permitNumber: "N9166001" }
  },
  {
    documentNumber: "CXKT789",
    fullName: "CXKT789 \u2014 Ontario plate expiry (valid)",
    plate: "CXKT789",
    paramOverrides: { plate: "CXKT789", permitNumber: "N9166002" }
  },
  {
    documentNumber: "MNPL234",
    fullName: "MNPL234 \u2014 Ontario plate expiry (expired)",
    plate: "MNPL234",
    paramOverrides: { plate: "MNPL234", permitNumber: "N9166003" }
  }
];
var CANADA_ONTARIO_PLATE_ERROR_PROFILE_404 = {
  profileKey: "404-ontario-plate",
  documentNumber: "ERR40401",
  fullName: "404 \u2014 Ontario plate not found",
  responseType: "error",
  expectedStatus: 404,
  plate: "ERR40401",
  paramOverrides: { plate: "ERR40401", permitNumber: "N9166001" }
};
var CANADA_ONTARIO_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 Ontario Valid" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 Ontario Valid" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 Ontario Valid" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 Ontario Valid" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 Ontario Valid" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 Ontario Valid" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 Ontario Valid" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 Ontario Valid" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 Ontario Valid" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 Ontario Valid" }
];
var CANADA_QUEBEC_DEMO_LICENSE = "L12345678901";
var CANADA_QUEBEC_SANDBOX_PROFILES = [
  {
    documentNumber: CANADA_QUEBEC_DEMO_LICENSE,
    fullName: "Quebec licence demo \u2014 Valid",
    paramOverrides: { documentNumber: CANADA_QUEBEC_DEMO_LICENSE }
  },
  ...CANADA_ONTARIO_SANDBOX_PROFILES.map((profile) => __spreadProps(__spreadValues({}, profile), {
    fullName: profile.fullName.replace("Ontario", "Quebec")
  }))
];
var CANADA_BC_LAST_NAMES = [
  "MARTIN",
  "TREMBLAY",
  "GAGNON",
  "ROY",
  "COTE",
  "BOUCHARD",
  "GAUTHIER",
  "MORIN",
  "LAVOIE",
  "FORTIN"
];
var CANADA_BC_SANDBOX_PROFILES = Array.from({ length: 10 }, (_, index) => {
  const documentNumber = String(1000001 + index);
  return {
    documentNumber,
    fullName: `${CANADA_BC_LAST_NAMES[index]} \u2014 BC Valid`,
    paramOverrides: {
      documentNumber,
      lastName: CANADA_BC_LAST_NAMES[index]
    }
  };
});
var CANADA_BC_DEMO_PROFILE = {
  documentNumber: "1123456",
  fullName: "HELLO \u2014 BC demo Valid",
  paramOverrides: {
    documentNumber: "1123456",
    lastName: "HELLO"
  }
};
var CANADA_BC_ERROR_PROFILE_404 = {
  profileKey: "404-bc-lastName",
  documentNumber: "90040401",
  fullName: "404 \u2014 BC licence not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    documentNumber: "1000001",
    lastName: "NOT FOUND 90040401"
  }
};
var CANADA_COMPANY_SANDBOX_PROFILES = [
  {
    documentNumber: "10000001",
    fullName: "BAI HENG PACKAGING SUPPLIES INC \u2014 Active (ON)",
    paramOverrides: {
      business: CANADA_COMPANY_DEFAULT_BUSINESS,
      province: CANADA_COMPANY_DEFAULT_PROVINCE
    }
  }
];
var CANADA_COMPANY_ERROR_PROFILE_404 = {
  profileKey: "404-canada-company",
  documentNumber: "90040401",
  fullName: "404 \u2014 Business not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    business: "NOT FOUND 90040401 CORP",
    province: CANADA_COMPANY_DEFAULT_PROVINCE
  }
};
var CANADA_POSTMAN_SANDBOX_BY_CODE = {
  [CANADA_COMPANY_ENDPOINT_CODE]: {
    profiles: [...CANADA_COMPANY_SANDBOX_PROFILES, CANADA_COMPANY_ERROR_PROFILE_404],
    defaultDocumentNumber: "10000001",
    defaultBusiness: CANADA_COMPANY_DEFAULT_BUSINESS,
    defaultProvince: CANADA_COMPANY_DEFAULT_PROVINCE,
    showProfileMeta: false
  },
  [CANADA_ONTARIO_DRIVER_LICENSE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(CANADA_ONTARIO_SANDBOX_PROFILES, {
      conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER]
    }),
    defaultDocumentNumber: "10000001",
    showProfileMeta: false
  },
  [CANADA_ONTARIO_PLATE_ENDPOINT_CODE]: {
    profiles: [...CANADA_ONTARIO_PLATE_SANDBOX_PROFILES, CANADA_ONTARIO_PLATE_ERROR_PROFILE_404],
    defaultDocumentNumber: CANADA_ONTARIO_PLATE_DEFAULT_PLATE,
    defaultPlate: CANADA_ONTARIO_PLATE_DEFAULT_PLATE,
    defaultPermitNumber: CANADA_ONTARIO_PLATE_DEFAULT_PERMIT,
    showProfileMeta: false
  },
  [CANADA_QUEBEC_DRIVER_LICENSE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(CANADA_QUEBEC_SANDBOX_PROFILES, {
      conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER]
    }),
    defaultDocumentNumber: CANADA_QUEBEC_DEMO_LICENSE,
    showProfileMeta: false
  },
  [CANADA_BC_DRIVER_LICENSE_ENDPOINT_CODE]: {
    profiles: [
      CANADA_BC_DEMO_PROFILE,
      ...CANADA_BC_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      CANADA_BC_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: "1123456",
    defaultLastName: "HELLO",
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/india.postman-sandbox.ts
var INDIA_EPIC_ENDPOINT_CODE = "india_api_epic_lookup";
var INDIA_EPIC_VOTING_ENDPOINT_CODE = "india_api_epic_voting_lookup";
var INDIA_EPIC_NAMES = [
  "MARIA ELENA LOPEZ GARCIA",
  "JOSE ANTONIO PEREZ RODRIGUEZ",
  "CARLA ISABEL MARTINEZ FERNANDEZ",
  "LUIS ALBERTO GONZALEZ HERRERA",
  "ANA SOFIA RAMIREZ TORRES",
  "DIEGO ALEJANDRO SILVA MENDOZA",
  "VALENTINA ANDREA CASTRO VARGAS",
  "RICARDO JOSE MORALES SUAREZ",
  "PATRICIA CAROLINA DIAZ REYES",
  "FERNANDO MIGUEL ROJAS DELGADO"
];
var INDIA_EPIC_SANDBOX_PROFILES = Array.from({ length: 10 }, (_, index) => {
  const documentNumber = `VF${10000001 + index}`;
  return {
    documentNumber,
    fullName: `${INDIA_EPIC_NAMES[index]} \u2014 EPIC Valid`,
    paramOverrides: {
      documentType: "EPIC",
      documentNumber
    }
  };
});
var INDIA_EPIC_ERROR_PROFILE_404 = {
  documentNumber: "VF90040401",
  fullName: "404 \u2014 EPIC not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    documentType: "EPIC",
    documentNumber: "VF90040401"
  }
};
var INDIA_EPIC_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "VF10000001"
  }
});
var INDIA_POSTMAN_SANDBOX_BY_CODE = {
  [INDIA_EPIC_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(INDIA_EPIC_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        INDIA_EPIC_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }).concat(INDIA_EPIC_ERROR_PROFILE_404),
    defaultDocumentNumber: "VF10000001",
    documentTypeByCode: {
      [INDIA_EPIC_ENDPOINT_CODE]: "EPIC"
    },
    showProfileMeta: false
  },
  [INDIA_EPIC_VOTING_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(INDIA_EPIC_SANDBOX_PROFILES, {
      conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER]
    }).concat(INDIA_EPIC_ERROR_PROFILE_404),
    defaultDocumentNumber: "VF10000001",
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/vehicle-plate-profiles.ts
var MERCOSUR_SANDBOX_PLATES = Array.from({ length: 10 }, (_, index) => `AA123B${String.fromCharCode(65 + index)}`);
var CHILE_SIX_CHAR_SANDBOX_PLATES = Array.from({ length: 10 }, (_, index) => `BBCC${12 + index}`);
var SANDBOX_PROFILE_NAMES = [
  "MARIA ELENA LOPEZ GARCIA \u2014 valid",
  "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid",
  "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid",
  "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid",
  "ANA SOFIA RAMIREZ TORRES \u2014 valid",
  "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid",
  "VALENTINA ANDREA CASTRO VARGAS \u2014 valid",
  "RICARDO JOSE MORALES SUAREZ \u2014 valid",
  "PATRICIA CAROLINA DIAZ REYES \u2014 valid",
  "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid"
];
var SANDBOX_DEFAULT_PLATE = MERCOSUR_SANDBOX_PLATES[0];
var SANDBOX_DEFAULT_CHILE_VEHICLE_PLATE = CHILE_SIX_CHAR_SANDBOX_PLATES[0];
var SANDBOX_DEFAULT_SIMIT_PLATE = CHILE_SIX_CHAR_SANDBOX_PLATES[0];
var SANDBOX_ERROR_PLATE = "ERR40401";
var SANDBOX_ERROR_PLATE_SHORT = "ERR404";
var SANDBOX_VEHICLE_PLATE_PROFILES = MERCOSUR_SANDBOX_PLATES.map((plate, index) => ({
  plate,
  documentNumber: plate,
  fullName: SANDBOX_PROFILE_NAMES[index]
}));
var SANDBOX_SIMIT_PLATE_PROFILES = CHILE_SIX_CHAR_SANDBOX_PLATES.map((plate, index) => ({
  plate,
  documentNumber: plate,
  fullName: SANDBOX_PROFILE_NAMES[index]
}));
var SANDBOX_ERROR_PROFILE_SIMIT_PLATE_404 = {
  plate: SANDBOX_ERROR_PLATE_SHORT,
  documentNumber: SANDBOX_ERROR_PLATE_SHORT,
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404
};
var SANDBOX_ERROR_PROFILE_PLATE_404 = {
  plate: SANDBOX_ERROR_PLATE,
  documentNumber: SANDBOX_ERROR_PLATE,
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404
};
var SANDBOX_ERROR_VIN = "ERRV40401";
var SANDBOX_ERROR_PROFILE_VIN_404 = {
  vin: SANDBOX_ERROR_VIN,
  documentNumber: SANDBOX_ERROR_VIN,
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404
};
var SANDBOX_CONFLICT_MISSING_VIN = {
  profileKey: "409-missing-vin",
  vin: "90040911",
  documentNumber: "90040911",
  fullName: "409 \u2014 Missing vin",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { vin: "" }
};
var SANDBOX_CONFLICT_MISSING_PLATE = {
  profileKey: "409-missing-plate",
  plate: "90040910",
  documentNumber: "90040910",
  fullName: "409 \u2014 Missing plate",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { plate: "" }
};
var appendVehicleVinSandboxProfiles = (successProfiles, conflictProfiles = [SANDBOX_CONFLICT_MISSING_VIN]) => [
  ...successProfiles,
  ...conflictProfiles,
  SANDBOX_ERROR_PROFILE_VIN_404
];
var SANDBOX_DEFAULT_VIN = "VIN100001";
var SANDBOX_VEHICLE_VIN_PROFILES = [
  { vin: "VIN100001", documentNumber: "VIN100001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { vin: "VIN100002", documentNumber: "VIN100002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { vin: "VIN100003", documentNumber: "VIN100003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { vin: "VIN100004", documentNumber: "VIN100004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { vin: "VIN100005", documentNumber: "VIN100005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { vin: "VIN100006", documentNumber: "VIN100006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { vin: "VIN100007", documentNumber: "VIN100007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { vin: "VIN100008", documentNumber: "VIN100008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { vin: "VIN100009", documentNumber: "VIN100009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { vin: "VIN100010", documentNumber: "VIN100010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var appendVehiclePlateSandboxProfiles = (successProfiles = SANDBOX_VEHICLE_PLATE_PROFILES, conflictProfiles = [SANDBOX_CONFLICT_MISSING_PLATE]) => [
  ...successProfiles,
  ...conflictProfiles,
  SANDBOX_ERROR_PROFILE_PLATE_404
];
var appendSimitPlateSandboxProfiles = (successProfiles = SANDBOX_SIMIT_PLATE_PROFILES, conflictProfiles = [SANDBOX_CONFLICT_MISSING_PLATE]) => [
  ...successProfiles,
  ...conflictProfiles,
  SANDBOX_ERROR_PROFILE_SIMIT_PLATE_404
];

// src/app/modules/postman/sandbox/countries/usa.postman-sandbox.ts
var USA_COMPANY_ENDPOINT_CODE = "usa_api_company";
var USA_SSN_ENDPOINT_CODE = "usa_api_ssn";
var USA_FLORIDA_DRIVER_LICENSE_ENDPOINT_CODE = "usa_api_driver_license_lookup";
var USA_KANSAS_DRIVER_LICENSE_ENDPOINT_CODE = "usa_api_driver_license_lookup_kansas";
var USA_VEHICLE_BY_VIN_ENDPOINT_CODE = "usa_api_vehicle_lookup_by_vin";
var USA_COMPANY_DEFAULT_BUSINESS = "APPLE INC";
var USA_SSN_DEMO = "123-45-678";
var USA_KANSAS_DEFAULT_DATE_OF_BIRTH = "15/03/1990";
var USA_SSN_SANDBOX_PROFILES = [
  {
    documentNumber: USA_SSN_DEMO,
    fullName: "123-45-678 \u2014 SSN demo Valid",
    paramOverrides: { documentNumber: USA_SSN_DEMO }
  },
  ...Array.from({ length: 10 }, (_, index) => {
    const documentNumber = String(10000001 + index);
    return {
      documentNumber,
      fullName: `SSN fixture ${String(index + 1).padStart(2, "0")} \u2014 Valid`,
      paramOverrides: { documentNumber }
    };
  })
];
var USA_SSN_ERROR_PROFILE_404 = {
  documentNumber: "90040401",
  fullName: "404 \u2014 SSN not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: { documentNumber: "90040401" }
};
var USA_COMPANY_SANDBOX_PROFILES = [
  {
    documentNumber: "10000001",
    fullName: "APPLE INC \u2014 SEC demo Valid",
    paramOverrides: { business: USA_COMPANY_DEFAULT_BUSINESS }
  }
];
var USA_COMPANY_ERROR_PROFILE_404 = {
  profileKey: "404-usa-company",
  documentNumber: "90040401",
  fullName: "404 \u2014 Business not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: { business: "NOT FOUND 90040401 INC" }
};
var USA_FLORIDA_SANDBOX_PROFILES = Array.from({ length: 10 }, (_, index) => {
  const fixtureKey = 10000001 + index;
  const documentNumber = String(fixtureKey).padStart(13, "0");
  return {
    documentNumber,
    fullName: `Florida DL ${String(index + 1).padStart(2, "0")} \u2014 Valid`,
    paramOverrides: { documentNumber }
  };
});
var USA_FLORIDA_ERROR_PROFILE_404 = {
  documentNumber: String(90040401).padStart(13, "0"),
  fullName: "404 \u2014 Florida license not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: { documentNumber: String(90040401).padStart(13, "0") }
};
var USA_KANSAS_FIRST_NAMES = [
  "MARIA ELENA",
  "JOSE ANTONIO",
  "CARLA ISABEL",
  "LUIS ALBERTO",
  "ANA SOFIA",
  "DIEGO ALEJANDRO",
  "VALENTINA ANDREA",
  "RICARDO JOSE",
  "PATRICIA CAROLINA",
  "FERNANDO MIGUEL"
];
var USA_KANSAS_LAST_NAMES = [
  "LOPEZ GARCIA",
  "PEREZ RODRIGUEZ",
  "MARTINEZ FERNANDEZ",
  "GONZALEZ HERRERA",
  "RAMIREZ TORRES",
  "SILVA MENDOZA",
  "CASTRO VARGAS",
  "MORALES SUAREZ",
  "DIAZ REYES",
  "ROJAS DELGADO"
];
var USA_KANSAS_SANDBOX_PROFILES = Array.from({ length: 10 }, (_, index) => {
  const documentNumber = `K${10000001 + index}`;
  return {
    documentNumber,
    fullName: `${USA_KANSAS_FIRST_NAMES[index]} ${USA_KANSAS_LAST_NAMES[index]} \u2014 Kansas Valid`,
    paramOverrides: {
      documentNumber,
      dateOfBirth: USA_KANSAS_DEFAULT_DATE_OF_BIRTH,
      firstName: USA_KANSAS_FIRST_NAMES[index],
      lastName: USA_KANSAS_LAST_NAMES[index]
    }
  };
});
var USA_KANSAS_ERROR_PROFILE_404 = {
  documentNumber: "K90040401",
  fullName: "404 \u2014 Kansas license not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    documentNumber: "K90040401",
    dateOfBirth: USA_KANSAS_DEFAULT_DATE_OF_BIRTH,
    firstName: "NOT FOUND",
    lastName: "90040401"
  }
};
var USA_POSTMAN_SANDBOX_BY_CODE = {
  [USA_COMPANY_ENDPOINT_CODE]: {
    profiles: [...USA_COMPANY_SANDBOX_PROFILES, USA_COMPANY_ERROR_PROFILE_404],
    defaultDocumentNumber: "10000001",
    defaultBusiness: USA_COMPANY_DEFAULT_BUSINESS,
    showProfileMeta: false
  },
  [USA_SSN_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(USA_SSN_SANDBOX_PROFILES, {
      conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER]
    }).concat(USA_SSN_ERROR_PROFILE_404),
    defaultDocumentNumber: USA_SSN_DEMO,
    showProfileMeta: false
  },
  [USA_FLORIDA_DRIVER_LICENSE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(USA_FLORIDA_SANDBOX_PROFILES, {
      conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER]
    }).concat(USA_FLORIDA_ERROR_PROFILE_404),
    defaultDocumentNumber: String(10000001).padStart(13, "0"),
    showProfileMeta: false
  },
  [USA_KANSAS_DRIVER_LICENSE_ENDPOINT_CODE]: {
    profiles: [
      ...USA_KANSAS_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      USA_KANSAS_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: "K10000001",
    defaultDateOfBirth: USA_KANSAS_DEFAULT_DATE_OF_BIRTH,
    showProfileMeta: false
  },
  [USA_VEHICLE_BY_VIN_ENDPOINT_CODE]: {
    profiles: appendVehicleVinSandboxProfiles(SANDBOX_VEHICLE_VIN_PROFILES),
    defaultDocumentNumber: SANDBOX_DEFAULT_VIN,
    defaultVin: SANDBOX_DEFAULT_VIN,
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/utilities.postman-sandbox.ts
var IP_LOOKUP_ENDPOINT_CODE = "ip-lookup";
var IP_LOOKUP_DEMO = "8.8.8.8";
var IP_LOOKUP_SANDBOX_PROFILES = [
  {
    documentNumber: IP_LOOKUP_DEMO,
    fullName: "8.8.8.8 \u2014 Google DNS demo (US)",
    paramOverrides: { ip: IP_LOOKUP_DEMO }
  },
  ...Array.from({ length: 10 }, (_, index) => {
    const ip = `192.168.100.${index + 1}`;
    return {
      documentNumber: ip,
      fullName: `192.168.100.${index + 1} \u2014 Colombia sandbox fixture ${String(index + 1).padStart(2, "0")}`,
      paramOverrides: { ip }
    };
  })
];
var IP_LOOKUP_ERROR_PROFILE_404 = {
  documentNumber: "192.168.100.99",
  fullName: "404 \u2014 IP not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: { ip: "192.168.100.99" }
};
var UTILITIES_POSTMAN_SANDBOX_BY_CODE = {
  [IP_LOOKUP_ENDPOINT_CODE]: {
    profiles: [...IP_LOOKUP_SANDBOX_PROFILES, IP_LOOKUP_ERROR_PROFILE_404],
    defaultDocumentNumber: IP_LOOKUP_DEMO,
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/world.postman-sandbox.ts
var WORLD_DEA_ENDPOINT_CODE = "world_api_dea";
var WORLD_FBI_ENDPOINT_CODE = "world_api_fbi";
var WORLD_EUROPOL_ENDPOINT_CODE = "world_api_europol";
var WORLD_INTERPOL_ENDPOINT_CODE = "world_api_interpol";
var WORLD_OFAC_ENDPOINT_CODE = "world_api_ofac";
var WORLD_ONU_ENDPOINT_CODE = "world_api_onu";
var WORLD_SANDBOX_NAMES = [
  "MARIA ELENA LOPEZ GARCIA",
  "JOSE ANTONIO PEREZ RODRIGUEZ",
  "CARLA ISABEL MARTINEZ FERNANDEZ",
  "LUIS ALBERTO GONZALEZ HERRERA",
  "ANA SOFIA RAMIREZ TORRES",
  "DIEGO ALEJANDRO SILVA MENDOZA",
  "VALENTINA ANDREA CASTRO VARGAS",
  "RICARDO JOSE MORALES SUAREZ",
  "PATRICIA CAROLINA DIAZ REYES",
  "FERNANDO MIGUEL ROJAS DELGADO"
];
var buildDocumentSearchProfiles = (label) => Array.from({ length: 10 }, (_, index) => {
  const documentNumber = String(10000001 + index);
  const foundLabel = index % 2 === 0 ? "found" : "clean";
  return {
    documentNumber,
    fullName: `${WORLD_SANDBOX_NAMES[index]} \u2014 ${label} ${foundLabel}`,
    paramOverrides: {
      documentType: "CC",
      documentNumber
    }
  };
});
var WORLD_ERROR_PROFILE_404 = {
  documentNumber: "90040401",
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    documentType: "CC",
    documentNumber: "90040401"
  }
};
var WORLD_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "10000001"
  }
});
var DEA_NAME_DEMO = {
  profileKey: "dea-name-demo",
  documentNumber: "MATEO VERIFIK",
  fullName: "MATEO VERIFIK \u2014 DEA demo found",
  paramOverrides: {
    fullName: "MATEO VERIFIK",
    documentNumber: "",
    documentType: ""
  }
};
var FBI_NAME_DEMO = {
  profileKey: "fbi-name-demo",
  documentNumber: "WILVER VILLEGAS PALOMINO",
  fullName: "WILVER VILLEGAS PALOMINO \u2014 FBI demo found",
  paramOverrides: {
    fullName: "WILVER VILLEGAS PALOMINO",
    documentNumber: "",
    documentType: ""
  }
};
var buildWorldEndpointConfig = (label, extraProfiles = []) => ({
  profiles: appendSandboxResponseProfiles([...extraProfiles, ...buildDocumentSearchProfiles(label)], {
    conflictProfiles: [
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      WORLD_CONFLICT_INVALID_DOCUMENT_TYPE
    ]
  }).concat(WORLD_ERROR_PROFILE_404),
  defaultDocumentNumber: "10000001",
  documentTypeByCode: {},
  showProfileMeta: false
});
var WORLD_POSTMAN_SANDBOX_BY_CODE = {
  [WORLD_DEA_ENDPOINT_CODE]: __spreadProps(__spreadValues({}, buildWorldEndpointConfig("DEA", [DEA_NAME_DEMO])), {
    documentTypeByCode: { [WORLD_DEA_ENDPOINT_CODE]: "CC" }
  }),
  [WORLD_FBI_ENDPOINT_CODE]: __spreadProps(__spreadValues({}, buildWorldEndpointConfig("FBI", [FBI_NAME_DEMO])), {
    documentTypeByCode: { [WORLD_FBI_ENDPOINT_CODE]: "CC" }
  }),
  [WORLD_EUROPOL_ENDPOINT_CODE]: __spreadProps(__spreadValues({}, buildWorldEndpointConfig("Europol")), {
    documentTypeByCode: { [WORLD_EUROPOL_ENDPOINT_CODE]: "CC" }
  }),
  [WORLD_INTERPOL_ENDPOINT_CODE]: __spreadProps(__spreadValues({}, buildWorldEndpointConfig("Interpol")), {
    documentTypeByCode: { [WORLD_INTERPOL_ENDPOINT_CODE]: "CC" }
  }),
  [WORLD_OFAC_ENDPOINT_CODE]: __spreadProps(__spreadValues({}, buildWorldEndpointConfig("OFAC")), {
    documentTypeByCode: { [WORLD_OFAC_ENDPOINT_CODE]: "CC" }
  }),
  [WORLD_ONU_ENDPOINT_CODE]: __spreadProps(__spreadValues({}, buildWorldEndpointConfig("ONU")), {
    documentTypeByCode: { [WORLD_ONU_ENDPOINT_CODE]: "CC" }
  })
};

// src/app/modules/postman/sandbox/countries/bolivia.postman-sandbox.ts
var BOLIVIA_IDENTITY_ENDPOINT_CODE = "bolivia_api_identity_lookup";
var BOLIVIA_VEHICLE_ENDPOINT_CODE = "bolivia_api_vehicle";
var BOLIVIA_BUSINESS_ENDPOINT_CODE = "bolivia_api_business_lookup";
var BOLIVIA_DEFAULT_DATE_OF_BIRTH = "15/03/1990";
var BOLIVIA_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var BOLIVIA_BUSINESS_SANDBOX_PROFILES = BOLIVIA_SANDBOX_PROFILES.map((profile) => __spreadProps(__spreadValues({}, profile), {
  fullName: `${profile.fullName?.replace(" \u2014 valid", "")} \u2014 ACTIVO`,
  paramOverrides: {
    documentType: "NIT",
    documentNumber: profile.documentNumber
  }
}));
var BOLIVIA_BUSINESS_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "10000001"
  }
});
var BOLIVIA_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "10000001",
    dateOfBirth: BOLIVIA_DEFAULT_DATE_OF_BIRTH
  }
});
var BOLIVIA_CONFLICT_MISSING_DATE_OF_BIRTH = {
  profileKey: "409-missing-dateOfBirth",
  documentNumber: "90040908",
  fullName: "409 \u2014 Missing dateOfBirth",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "", documentNumber: "10000001" }
};
var BOLIVIA_CONFLICT_INVALID_DATE_OF_BIRTH = {
  profileKey: "409-invalid-dateOfBirth",
  documentNumber: "90040909",
  fullName: "409 \u2014 Invalid dateOfBirth format",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "not-a-date", documentNumber: "10000001" }
};
var BOLIVIA_POSTMAN_SANDBOX_BY_CODE = {
  [BOLIVIA_IDENTITY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(BOLIVIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        BOLIVIA_CONFLICT_INVALID_DOCUMENT_TYPE,
        BOLIVIA_CONFLICT_MISSING_DATE_OF_BIRTH,
        BOLIVIA_CONFLICT_INVALID_DATE_OF_BIRTH
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultDateOfBirth: BOLIVIA_DEFAULT_DATE_OF_BIRTH,
    documentTypeByCode: {
      [BOLIVIA_IDENTITY_ENDPOINT_CODE]: "CI"
    },
    showProfileMeta: false
  },
  [BOLIVIA_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [BOLIVIA_BUSINESS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(BOLIVIA_BUSINESS_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        BOLIVIA_BUSINESS_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [BOLIVIA_BUSINESS_ENDPOINT_CODE]: "NIT"
    },
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/argentina.postman-sandbox.ts
var ARGENTINA_IDENTITY_ENDPOINT_CODE = "argentina_api_identity_lookup";
var ARGENTINA_VEHICLE_ENDPOINT_CODE = "argentina_api_vehicle";
var ARGENTINA_VEHICLE_V3_ENDPOINT_CODE = "argentina_api_vehicle_v3";
var ARGENTINA_TRAFFIC_INFRACTIONS_ENDPOINT_CODE = "argentina_api_buenos_aires_traffic_infractions";
var ARGENTINA_TECHNICAL_INSPECTION_ENDPOINT_CODE = "argentina_api_buenos_aires_technical_inspection";
var ARGENTINA_RTO_ENDPOINT_CODE = "argentina_api_rto";
var ARGENTINA_COMPANY_ENDPOINT_CODE = "argentina_api_company_lookup";
var ARGENTINA_CERTIFICATE_VERIFY_ENDPOINT_CODE = "ar_certificate_verify";
var ARGENTINA_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO" }
];
var ARGENTINA_COMPANY_SANDBOX_PROFILES = ARGENTINA_SANDBOX_PROFILES.map((profile, index) => ({
  documentNumber: `201${String(10000001 + index).padStart(8, "0")}`,
  fullName: `${profile.fullName} \u2014 CUIT`,
  paramOverrides: {
    documentType: "CUIT",
    documentNumber: `201${String(10000001 + index).padStart(8, "0")}`
  }
}));
var ARGENTINA_CERTIFICATE_SANDBOX_PROFILES = [
  {
    documentNumber: "02118499487",
    fullName: "MARIA ELENA LOPEZ \u2014 clean record",
    paramOverrides: { requestCode: "02118499487", securityCode: "371488F861" }
  },
  {
    documentNumber: "02118499488",
    fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 clean record",
    paramOverrides: { requestCode: "02118499488", securityCode: "371488F862" }
  },
  {
    documentNumber: "02118499489",
    fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 listed record",
    paramOverrides: { requestCode: "02118499489", securityCode: "371488F863" }
  },
  {
    documentNumber: "02118499490",
    fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 clean record",
    paramOverrides: { requestCode: "02118499490", securityCode: "371488F864" }
  },
  {
    documentNumber: "02118499491",
    fullName: "ANA SOFIA RAMIREZ TORRES \u2014 clean record",
    paramOverrides: { requestCode: "02118499491", securityCode: "371488F865" }
  },
  {
    documentNumber: "02118499492",
    fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 listed record",
    paramOverrides: { requestCode: "02118499492", securityCode: "371488F866" }
  },
  {
    documentNumber: "02118499493",
    fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 clean record",
    paramOverrides: { requestCode: "02118499493", securityCode: "371488F867" }
  },
  {
    documentNumber: "02118499494",
    fullName: "RICARDO JOSE MORALES SUAREZ \u2014 clean record",
    paramOverrides: { requestCode: "02118499494", securityCode: "371488F868" }
  },
  {
    documentNumber: "02118499495",
    fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 listed record",
    paramOverrides: { requestCode: "02118499495", securityCode: "371488F869" }
  },
  {
    documentNumber: "02118499496",
    fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 clean record",
    paramOverrides: { requestCode: "02118499496", securityCode: "371488F870" }
  }
];
var ARGENTINA_CERTIFICATE_ERROR_PROFILE_404 = {
  profileKey: "404-requestCode",
  documentNumber: "90040401",
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: { requestCode: "90040401", securityCode: "371488F861" }
};
var ARGENTINA_CERTIFICATE_CONFLICT_MISSING_REQUEST_CODE = {
  profileKey: "409-missing-requestCode",
  documentNumber: "90040901",
  fullName: "409 \u2014 Missing requestCode",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { requestCode: "", securityCode: "371488F861" }
};
var ARGENTINA_CERTIFICATE_CONFLICT_MISSING_SECURITY_CODE = {
  profileKey: "409-missing-securityCode",
  documentNumber: "90040902",
  fullName: "409 \u2014 Missing securityCode",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { requestCode: "02118499487", securityCode: "" }
};
var buildArgentinaVehicleServiceConfig = () => ({
  profiles: appendVehiclePlateSandboxProfiles(),
  defaultPlate: SANDBOX_DEFAULT_PLATE,
  defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
  showProfileMeta: false
});
var ARGENTINA_POSTMAN_SANDBOX_BY_CODE = {
  [ARGENTINA_IDENTITY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(ARGENTINA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [ARGENTINA_IDENTITY_ENDPOINT_CODE]: "DNIAR"
    },
    showProfileMeta: false
  },
  [ARGENTINA_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [ARGENTINA_VEHICLE_V3_ENDPOINT_CODE]: buildArgentinaVehicleServiceConfig(),
  [ARGENTINA_TRAFFIC_INFRACTIONS_ENDPOINT_CODE]: buildArgentinaVehicleServiceConfig(),
  [ARGENTINA_TECHNICAL_INSPECTION_ENDPOINT_CODE]: buildArgentinaVehicleServiceConfig(),
  [ARGENTINA_RTO_ENDPOINT_CODE]: buildArgentinaVehicleServiceConfig(),
  [ARGENTINA_COMPANY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(ARGENTINA_COMPANY_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
          paramOverrides: {
            documentType: "INVALID",
            documentNumber: "20110000001"
          }
        })
      ]
    }),
    defaultDocumentNumber: "20110000001",
    documentTypeByCode: {
      [ARGENTINA_COMPANY_ENDPOINT_CODE]: "CUIT"
    },
    showProfileMeta: false
  },
  [ARGENTINA_CERTIFICATE_VERIFY_ENDPOINT_CODE]: {
    profiles: [
      ...ARGENTINA_CERTIFICATE_SANDBOX_PROFILES,
      ARGENTINA_CERTIFICATE_CONFLICT_MISSING_REQUEST_CODE,
      ARGENTINA_CERTIFICATE_CONFLICT_MISSING_SECURITY_CODE,
      ARGENTINA_CERTIFICATE_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: "02118499487",
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/vehicle-soap-profiles.ts
var SANDBOX_DEFAULT_SOAP_PLATE = "BBCC12";
var SANDBOX_DEFAULT_POLICY_NUMBER = "94590001";
var SOAP_FIXTURE_HINTS = {
  BBCC12: "TOYOTA COROLLA \u2014 VIGENTE",
  BBCC13: "NISSAN SENTRA \u2014 VIGENTE",
  BBCC14: "MAZDA CX-5 \u2014 VIGENTE",
  BBCC15: "HYUNDAI TUCSON \u2014 VENCIDO",
  BBCC16: "KIA SPORTAGE \u2014 VIGENTE",
  BBCC17: "CHEVROLET ONIX \u2014 VIGENTE",
  BBCC18: "FORD RANGER \u2014 VIGENTE",
  BBCC19: "SUZUKI GRAND VITARA \u2014 VIGENTE",
  BBCC20: "MITSUBISHI L200 \u2014 VIGENTE",
  BBCC21: "HONDA CR-V \u2014 VIGENTE"
};
var buildSoapFixtureProfiles = () => SANDBOX_SIMIT_PLATE_PROFILES.map((profile, index) => {
  const plate = profile.plate ?? profile.documentNumber;
  const policyNumber = `945900${String(index + 1).padStart(2, "0")}`;
  return {
    profileKey: `soap-${plate.toLowerCase()}`,
    plate,
    documentNumber: plate,
    fullName: `${profile.fullName.replace(" \u2014 valid", "")} \u2014 ${SOAP_FIXTURE_HINTS[plate]}`,
    paramOverrides: { plate, policyNumber }
  };
});
var SANDBOX_VEHICLE_SOAP_DEMO_PROFILE = {
  profileKey: "soap-htrt86",
  plate: "HTRT86",
  documentNumber: "HTRT86",
  fullName: "JUAN PEREZ LOPEZ \u2014 TOYOTA COROLLA demo (live-style)",
  paramOverrides: { plate: "HTRT86", policyNumber: "94596506" }
};
var SANDBOX_ERROR_PROFILE_SOAP_404 = {
  profileKey: "404-soap-plate",
  plate: SANDBOX_ERROR_PLATE_SHORT,
  documentNumber: SANDBOX_ERROR_PLATE_SHORT,
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: { plate: SANDBOX_ERROR_PLATE_SHORT, policyNumber: "6506" }
};
var SANDBOX_CONFLICT_MISSING_SOAP_PLATE = {
  profileKey: "409-missing-plate",
  documentNumber: "90040910",
  fullName: "409 \u2014 Missing plate",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { plate: "", policyNumber: SANDBOX_DEFAULT_POLICY_NUMBER }
};
var SANDBOX_CONFLICT_MISSING_POLICY_NUMBER = {
  profileKey: "409-missing-policyNumber",
  documentNumber: "90040911",
  fullName: "409 \u2014 Missing policyNumber",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { plate: SANDBOX_DEFAULT_SOAP_PLATE, policyNumber: "" }
};
var appendVehicleSoapSandboxProfiles = () => [
  ...buildSoapFixtureProfiles(),
  SANDBOX_VEHICLE_SOAP_DEMO_PROFILE,
  SANDBOX_CONFLICT_MISSING_SOAP_PLATE,
  SANDBOX_CONFLICT_MISSING_POLICY_NUMBER,
  SANDBOX_ERROR_PROFILE_SOAP_404
];

// src/app/modules/postman/sandbox/vehicle-soap-plate-profiles.ts
var SANDBOX_DEFAULT_SOAP_PLATE_ONLY = "BBCC12";
var SOAP_FIXTURE_HINTS2 = {
  BBCC12: "TOYOTA COROLLA \u2014 VIGENTE",
  BBCC13: "NISSAN SENTRA \u2014 VIGENTE",
  BBCC14: "MAZDA CX-5 \u2014 VIGENTE",
  BBCC15: "HYUNDAI TUCSON \u2014 VENCIDO",
  BBCC16: "KIA SPORTAGE \u2014 VIGENTE",
  BBCC17: "CHEVROLET ONIX \u2014 VIGENTE",
  BBCC18: "FORD RANGER \u2014 VIGENTE",
  BBCC19: "SUZUKI GRAND VITARA \u2014 VIGENTE",
  BBCC20: "MITSUBISHI L200 \u2014 VIGENTE",
  BBCC21: "HONDA CR-V \u2014 VIGENTE"
};
var buildSoapPlateFixtureProfiles = () => SANDBOX_SIMIT_PLATE_PROFILES.map((profile) => {
  const plate = profile.plate ?? profile.documentNumber;
  return {
    profileKey: `soap-plate-${plate.toLowerCase()}`,
    plate,
    documentNumber: plate,
    fullName: `${profile.fullName.replace(" \u2014 valid", "")} \u2014 ${SOAP_FIXTURE_HINTS2[plate]}`,
    paramOverrides: { plate }
  };
});
var LIVE_PROBE_PLATES = [
  { plate: "CLTK27", documentNumber: "CLTK27", fullName: "KIA CERATO 2010 \u2014 SOAP activo (live)", paramOverrides: { plate: "CLTK27" } },
  { plate: "HTRT86", documentNumber: "HTRT86", fullName: "MITSUBISHI L200 2016 \u2014 SOAP activo (live)", paramOverrides: { plate: "HTRT86" } },
  { plate: "RRWX51", documentNumber: "RRWX51", fullName: "SUZUKI DZIRE 2022 \u2014 SOAP activo (live)", paramOverrides: { plate: "RRWX51" } },
  { plate: "THHV64", documentNumber: "THHV64", fullName: "VOLVO XC40 2024 \u2014 SOAP activo (live)", paramOverrides: { plate: "THHV64" } },
  { plate: "CSXZ52", documentNumber: "CSXZ52", fullName: "KIA MORNING 2011 \u2014 SOAP activo (live)", paramOverrides: { plate: "CSXZ52" } },
  { plate: "CSXZ57", documentNumber: "CSXZ57", fullName: "NISSAN D22 2011 \u2014 SOAP activo (live)", paramOverrides: { plate: "CSXZ57" } },
  { plate: "CSXZ27", documentNumber: "CSXZ27", fullName: "MAHINDRA PIK UP 2011 \u2014 sin SOAP activo (live)", paramOverrides: { plate: "CSXZ27" } }
];
var SANDBOX_VEHICLE_SOAP_PLATE_DEMO_PROFILE = {
  profileKey: "soap-plate-htrt86",
  plate: "HTRT86",
  documentNumber: "HTRT86",
  fullName: "JUAN PEREZ LOPEZ \u2014 TOYOTA COROLLA demo (sandbox nested)",
  paramOverrides: { plate: "HTRT86" }
};
var SANDBOX_ERROR_PROFILE_SOAP_PLATE_404 = {
  profileKey: "404-soap-plate-only",
  plate: SANDBOX_ERROR_PLATE_SHORT,
  documentNumber: SANDBOX_ERROR_PLATE_SHORT,
  fullName: "404 \u2014 Vehicle not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: { plate: SANDBOX_ERROR_PLATE_SHORT }
};
var SANDBOX_CONFLICT_MISSING_SOAP_PLATE_ONLY = {
  profileKey: "409-missing-plate-only",
  documentNumber: "90040912",
  fullName: "409 \u2014 Missing plate",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { plate: "" }
};
var appendVehicleSoapPlateSandboxProfiles = () => [
  ...buildSoapPlateFixtureProfiles(),
  SANDBOX_VEHICLE_SOAP_PLATE_DEMO_PROFILE,
  ...LIVE_PROBE_PLATES,
  SANDBOX_CONFLICT_MISSING_SOAP_PLATE_ONLY,
  SANDBOX_ERROR_PROFILE_SOAP_PLATE_404
];

// src/app/modules/postman/sandbox/vehicle-stolen-profiles.ts
var SANDBOX_DEFAULT_STOLEN_PLATE = "PTKX93";
var SANDBOX_STOLEN_REPORT_PLATE = "NG8245";
var SANDBOX_STOLEN_NO_REPORT_PROFILE = {
  profileKey: "stolen-ptkx93",
  plate: SANDBOX_DEFAULT_STOLEN_PLATE,
  documentNumber: SANDBOX_DEFAULT_STOLEN_PLATE,
  fullName: "PTKX93 \u2014 no active theft report",
  paramOverrides: { plate: SANDBOX_DEFAULT_STOLEN_PLATE }
};
var SANDBOX_STOLEN_REPORT_PROFILE = {
  profileKey: "stolen-ng8245",
  plate: SANDBOX_STOLEN_REPORT_PLATE,
  documentNumber: SANDBOX_STOLEN_REPORT_PLATE,
  fullName: "NG8245 \u2014 active theft report",
  paramOverrides: { plate: SANDBOX_STOLEN_REPORT_PLATE }
};
var SANDBOX_CONFLICT_MISSING_STOLEN_PLATE = {
  profileKey: "409-missing-stolen-plate",
  documentNumber: "90040913",
  fullName: "409 \u2014 Missing plate",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { plate: "" }
};
var appendVehicleStolenSandboxProfiles = () => [
  SANDBOX_STOLEN_NO_REPORT_PROFILE,
  SANDBOX_STOLEN_REPORT_PROFILE,
  SANDBOX_CONFLICT_MISSING_STOLEN_PLATE
];

// src/app/modules/postman/sandbox/countries/chile.postman-sandbox.ts
var CHILE_IDENTITY_ENDPOINT_CODE = "chile_api_identity_lookup";
var CHILE_VEHICLE_ENDPOINT_CODE = "chile_api_vehicle";
var CHILE_VEHICLE_V3_ENDPOINT_CODE = "chile_api_vehicle_v3";
var CHILE_DRIVER_LICENSE_ENDPOINT_CODE = "chile_api_driver_license";
var CHILE_BUSINESS_ENDPOINT_CODE = "chile_api_business_lookup";
var CHILE_TAXPAYER_ENDPOINT_CODE = "chile_api_taxpayer_lookup";
var CHILE_VALIDATE_ENDPOINT_CODE = "chile_api_validate";
var CHILE_TRANSPORT_VEHICLE_ENDPOINT_CODE = "chile_api_transport_vehicle";
var CHILE_VEHICLE_SOAP_ENDPOINT_CODE = "chile_api_vehicle_soap";
var CHILE_VEHICLE_SOAP_PLATE_ENDPOINT_CODE = "chile_api_vehicle_soap_plate";
var CHILE_VEHICLE_STOLEN_ENDPOINT_CODE = "chile_api_vehicle_stolen";
var CHILE_CERTIFICATE_VERIFY_ENDPOINT_CODE = "cl_certificate_verify";
var CHILE_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var CHILE_CERTIFICATE_SANDBOX_PROFILES = [
  {
    documentNumber: "50070080804",
    fullName: "JUAN CARLOS PEREZ GONZALEZ \u2014 no annotations",
    paramOverrides: { folio: "50070080804", verificationCode: "2aacbb9a636a" }
  },
  {
    documentNumber: "50070080805",
    fullName: "MARIA ELENA LOPEZ GARCIA \u2014 no annotations",
    paramOverrides: { folio: "50070080805", verificationCode: "2aacbb9a636b" }
  },
  {
    documentNumber: "50070080806",
    fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 general conviction",
    paramOverrides: { folio: "50070080806", verificationCode: "2aacbb9a636c" }
  },
  {
    documentNumber: "50070080807",
    fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 no annotations",
    paramOverrides: { folio: "50070080807", verificationCode: "2aacbb9a636d" }
  },
  {
    documentNumber: "50070080808",
    fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 both registers",
    paramOverrides: { folio: "50070080808", verificationCode: "2aacbb9a636e" }
  },
  {
    documentNumber: "50070080809",
    fullName: "ANA SOFIA RAMIREZ TORRES \u2014 no annotations",
    paramOverrides: { folio: "50070080809", verificationCode: "2aacbb9a636f" }
  },
  {
    documentNumber: "50070080810",
    fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 no annotations",
    paramOverrides: { folio: "50070080810", verificationCode: "2aacbb9a6370" }
  },
  {
    documentNumber: "50070080811",
    fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 general conviction",
    paramOverrides: { folio: "50070080811", verificationCode: "2aacbb9a6371" }
  },
  {
    documentNumber: "50070080812",
    fullName: "RICARDO JOSE MORALES SUAREZ \u2014 no annotations",
    paramOverrides: { folio: "50070080812", verificationCode: "2aacbb9a6372" }
  },
  {
    documentNumber: "50070080813",
    fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 no annotations",
    paramOverrides: { folio: "50070080813", verificationCode: "2aacbb9a6373" }
  }
];
var CHILE_CERTIFICATE_ERROR_PROFILE_404 = {
  profileKey: "404-folio",
  documentNumber: "9004040100001",
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: { folio: "9004040100001", verificationCode: "2aacbb9a636a" }
};
var CHILE_CERTIFICATE_CONFLICT_MISSING_FOLIO = {
  profileKey: "409-missing-folio",
  documentNumber: "90040901",
  fullName: "409 \u2014 Missing folio",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { folio: "", verificationCode: "2aacbb9a636a" }
};
var CHILE_CERTIFICATE_CONFLICT_MISSING_VERIFICATION_CODE = {
  profileKey: "409-missing-verificationCode",
  documentNumber: "90040902",
  fullName: "409 \u2014 Missing verificationCode",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { folio: "50070080804", verificationCode: "" }
};
var CHILE_CERTIFICATE_CONFLICT_INVALID_FOLIO_LENGTH = {
  profileKey: "409-invalid-folio",
  documentNumber: "90040903",
  fullName: "409 \u2014 Invalid folio length",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { folio: "123", verificationCode: "2aacbb9a636a" }
};
var CHILE_VEHICLE_V3_SANDBOX_PROFILES = [
  {
    plate: "XH6640",
    documentNumber: "XH6640",
    fullName: "PEUGEOT PARTNER TOLE 1.9 \u2014 technical review approved"
  },
  {
    plate: "FHDJ31",
    documentNumber: "FHDJ31",
    fullName: "CHEVROLET SAIL \u2014 technical review approved"
  },
  {
    plate: "DCCH18",
    documentNumber: "DCCH18",
    fullName: "HYUNDAI ACCENT GL 1.6 \u2014 technical review approved"
  },
  {
    profileKey: "409-invalid-v3-plate",
    plate: "BB985",
    documentNumber: "BB985",
    fullName: "409 \u2014 Invalid plate format",
    responseType: "error",
    expectedStatus: 409
  }
];
var CHILE_POSTMAN_SANDBOX_BY_CODE = {
  [CHILE_IDENTITY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(CHILE_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [CHILE_IDENTITY_ENDPOINT_CODE]: "RUN"
    },
    showProfileMeta: false
  },
  [CHILE_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_CHILE_VEHICLE_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_CHILE_VEHICLE_PLATE,
    showProfileMeta: false
  },
  [CHILE_VEHICLE_V3_ENDPOINT_CODE]: {
    profiles: CHILE_VEHICLE_V3_SANDBOX_PROFILES,
    defaultPlate: "XH6640",
    defaultDocumentNumber: "XH6640",
    showProfileMeta: false
  },
  [CHILE_DRIVER_LICENSE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(CHILE_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [CHILE_DRIVER_LICENSE_ENDPOINT_CODE]: "RUN"
    },
    showProfileMeta: false
  },
  [CHILE_BUSINESS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(CHILE_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [CHILE_BUSINESS_ENDPOINT_CODE]: "RUT"
    },
    showProfileMeta: false
  },
  [CHILE_TAXPAYER_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(CHILE_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [CHILE_TAXPAYER_ENDPOINT_CODE]: "RUT"
    },
    showProfileMeta: false
  },
  [CHILE_VALIDATE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(CHILE_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultSerialNumber: "",
    documentTypeByCode: {
      [CHILE_VALIDATE_ENDPOINT_CODE]: "RUN"
    },
    showProfileMeta: false
  },
  [CHILE_TRANSPORT_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_CHILE_VEHICLE_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_CHILE_VEHICLE_PLATE,
    showProfileMeta: false
  },
  [CHILE_VEHICLE_SOAP_ENDPOINT_CODE]: {
    profiles: appendVehicleSoapSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_SOAP_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_SOAP_PLATE,
    showProfileMeta: false
  },
  [CHILE_VEHICLE_SOAP_PLATE_ENDPOINT_CODE]: {
    profiles: appendVehicleSoapPlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_SOAP_PLATE_ONLY,
    defaultDocumentNumber: SANDBOX_DEFAULT_SOAP_PLATE_ONLY,
    showProfileMeta: false
  },
  [CHILE_VEHICLE_STOLEN_ENDPOINT_CODE]: {
    profiles: appendVehicleStolenSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_STOLEN_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_STOLEN_PLATE,
    showProfileMeta: false
  },
  [CHILE_CERTIFICATE_VERIFY_ENDPOINT_CODE]: {
    profiles: [
      ...CHILE_CERTIFICATE_SANDBOX_PROFILES,
      CHILE_CERTIFICATE_CONFLICT_MISSING_FOLIO,
      CHILE_CERTIFICATE_CONFLICT_MISSING_VERIFICATION_CODE,
      CHILE_CERTIFICATE_CONFLICT_INVALID_FOLIO_LENGTH,
      CHILE_CERTIFICATE_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: "50070080804",
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/colombia.postman-sandbox.ts
var COLOMBIA_CEDULA_ENDPOINT_CODE = "colombia_api_identity_lookup";
var COLOMBIA_PROCURADURIA_ENDPOINT_CODE = "colombia_api_identity_lookup_procuraduria";
var COLOMBIA_PEP_ENDPOINT_CODE = "colombia_pep_lookup";
var COLOMBIA_CE_FOREIGNER_ENDPOINT_CODE = "colombia_api_identity_ce_foreigner_id";
var COLOMBIA_PEP_FOREIGNER_ENDPOINT_CODE = "colombia_api_identity_pep_foreigner_id";
var COLOMBIA_PPT_FOREIGNER_ENDPOINT_CODE = "colombia_api_identity_ppt_foreigner_id";
var COLOMBIA_JUDICIAL_RECORDS_ENDPOINT_CODE = "colombia_api_judicial_records";
var COLOMBIA_LAWYERS_ENDPOINT_CODE = "colombia_api_lawyers";
var COLOMBIA_LAWYERS_CERTIFICATE_ENDPOINT_CODE = "colombia_api_lawyers_certificate";
var COLOMBIA_JUDICIAL_PROCESS_DETAILS_ENDPOINT_CODE = "colombia_api_judicial_process_details";
var COLOMBIA_JUDICIAL_PROCESSES_ENDPOINT_CODE = "colombia_api_judicial_processes";
var COLOMBIA_MILITARY_SITUATION_ENDPOINT_CODE = "colombia_api_military_situation";
var COLOMBIA_MIN_TRABAJO_V3_ENDPOINT_CODE = "colombia_api_min_trabajo_v3";
var COLOMBIA_RETHUS_ENDPOINT_CODE = "colombia_api_rethus";
var COLOMBIA_ADRES_ENDPOINT_CODE = "colombia_api_adres";
var COLOMBIA_RUI_ENDPOINT_CODE = "colombia_api_rui";
var COLOMBIA_RUNT_VEHICLE_ENDPOINT_CODE = "colombia_api_vehicle";
var COLOMBIA_RUNT_DRIVER_ENDPOINT_CODE = "colombia_api_driver";
var COLOMBIA_RUNT_VEHICLE_COMPLETE_PLATE_ENDPOINT_CODE = "colombia_api_vehicle_complete_by_plate";
var COLOMBIA_RUNT_VEHICLE_SIMPLIFIED_ENDPOINT_CODE = "colombia_api_vehicle_complete_by_plate_simplified";
var COLOMBIA_RUNT_VEHICLE_VIN_ENDPOINT_CODE = "colombia_api_vehicle_complete_by_vin";
var COLOMBIA_RUNT_VEHICLE_SOAT_ENDPOINT_CODE = "colombia_api_vehicle_soat";
var COLOMBIA_RUNT_VEHICLE_COMPLETE_ENDPOINT_CODE = "colombia_api_vehicle_complete";
var COLOMBIA_RUNT_VEHICLE_OWNERS_ENDPOINT_CODE = "colombia_api_runt_owners";
var COLOMBIA_SIMIT_PLATE_ENDPOINT_CODE = "colombia_api_simit_plate";
var COLOMBIA_PICO_PLACA_ENDPOINT_CODE = "colombia_api_pico_placa";
var COLOMBIA_BOGOTA_FINES_ENDPOINT_CODE = "colombia_api_vehicle_fines_bogota";
var COLOMBIA_BOGOTA_ACCIDENTALITY_ENDPOINT_CODE = "colombia_api_vehicle_accidentality_bogota";
var COLOMBIA_BOGOTA_VEHICLE_TAX_ENDPOINT_CODE = "colombia_api_vehicle_tax";
var COLOMBIA_BOGOTA_TAXI_PLATE_ENDPOINT_CODE = "co_bogota_taxi_plate";
var COLOMBIA_SIMIT_AGREEMENTS_ENDPOINT_CODE = "colombia_api_simit_agreements";
var COLOMBIA_SIMIT_COMPLETE_ENDPOINT_CODE = "colombia_api_simit_complete";
var COLOMBIA_SIMIT_RESOLUTIONS_ENDPOINT_CODE = "colombia_api_simit_resolutions";
var COLOMBIA_SIMIT_SUSPENSIONS_ENDPOINT_CODE = "colombia_api_simit_suspensions";
var COLOMBIA_FASECOLDA_SINISTER_ENDPOINT_CODE = "colombia_api_vehicle_sinister_fasecolda_by_plate";
var COLOMBIA_FASECOLDA_VALUES_PLATE_ENDPOINT_CODE = "colombia_api_vehicle_valores_fasecolda_by_plate";
var COLOMBIA_SISBEN_ENDPOINT_CODE = "colombia_sisben_api_lookup";
var COLOMBIA_DELINQUENT_DEBTORS_ENDPOINT_CODE = "colombia_api_delinquent_debtors";
var COLOMBIA_AFFILIATIONS_ENDPOINT_CODE = "colombia_api_affiliations";
var COLOMBIA_CRIMINAL_HISTORY_ENDPOINT_CODE = "colombia_api_criminal_history";
var COLOMBIA_DIAN_ENDPOINT_CODE = "colombia_api_dian";
var COLOMBIA_POLICE_RNMC_ENDPOINT_CODE = "colombia_api_police_rnmc";
var COLOMBIA_POLICE_RNMC_PREMIUM_ENDPOINT_CODE = "colombia_api_police_rnmc_premium";
var COLOMBIA_CONTRALORIA_CERTIFICATE_ENDPOINT_CODE = "colombia_api_contraloria_certificate";
var COLOMBIA_DIAN_INVOICER_ENDPOINT_CODE = "colombia_api_dian_invoicer";
var COLOMBIA_RUES_V3_ENDPOINT_CODE = "colombia_api_rues_v3";
var COLOMBIA_REGISTRADURIA_CERTIFICATE_ENDPOINT_CODE = "colombia_api_registraduria_certificate";
var COLOMBIA_CEDULA_BY_NAME_ENDPOINT_CODE = "colombia_api_identity_lookup_by_name";
var COLOMBIA_REGISTRADURIA_SERIAL_ENDPOINT_CODE = "colombia_api_registraduria_serial";
var COLOMBIA_REGISTRADURIA_MATRIMONIO_ENDPOINT_CODE = "colombia_api_registraduria_matrimonio";
var COLOMBIA_REGISTRADURIA_VOTING_ENDPOINT_CODE = "colombia_api_registraduria_voting";
var COLOMBIA_SENA_ENDPOINT_CODE = "colombia_api_sena";
var COLOMBIA_SIMIT_COMPARENDO_DETAILS_ENDPOINT_CODE = "colombia_api_simit_subpoenas_details";
var COLOMBIA_MEDELLIN_FINES_ENDPOINT_CODE = "colombia_api_vehicle_fines_medellin";
var COLOMBIA_BOGOTA_TAXI_CARD_ENDPOINT_CODE = "co_bogota_taxi_driver_card";
var COLOMBIA_INPEC_ENDPOINT_CODE = "colombia_inpec_lookup";
var COLOMBIA_CONTRACTS_ENDPOINT_CODE = "api_colombia_contracts";
var COLOMBIA_SISCONMP_ENDPOINT_CODE = "colombia_api_sisconmp";
var COLOMBIA_FASECOLDA_VALUES_CODE_ENDPOINT_CODE = "colombia_api_vehicle_valores_fasecolda_by_code";
var COLOMBIA_SIGEP_BY_NAME_ENDPOINT_CODE = "colombia_sigep_by_name";
var COLOMBIA_SIGEP_BY_NUMBER_ENDPOINT_CODE = "colombia_sigep_by_number";
var COLOMBIA_CEDULA_EXTRA_ENDPOINT_CODE = "colombia_api_identity_lookup_extra";
var COLOMBIA_CEDULA_PREMIUM_ENDPOINT_CODE = "colombia_api_identity_lookup_premium";
var COLOMBIA_RUES_FULL_V3_ENDPOINT_CODE = "colombia_api_rues_full_v3";
var COLOMBIA_AFFILIATIONS_DEFAULT_DATE = "15/03/1990";
var COLOMBIA_CEDULA_EXTRA_DEFAULT_DATE = "15/03/2020";
var COLOMBIA_POLICE_RNMC_DEFAULT_DATE = "22/07/2005";
var COLOMBIA_REGISTRADURIA_CERTIFICATE_DEFAULT_DATE = "15/03/2018";
var COLOMBIA_SCCRC_BY_NAME_DEFAULT_DATE = "15/03/1990";
var COLOMBIA_SCCRC_SERIAL_DEFAULT = "0031058170";
var COLOMBIA_SCCRC_MARRIAGE_DEFAULT_DATE = "20/06/2015";
var COLOMBIA_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO" }
];
var COLOMBIA_INPEC_FIRST_SURNAMES = [
  "LOPEZ",
  "PEREZ",
  "MARTINEZ",
  "GONZALEZ",
  "RAMIREZ",
  "SILVA",
  "CASTRO",
  "MORALES",
  "DIAZ",
  "ROJAS"
];
var COLOMBIA_INPEC_SANDBOX_PROFILES = COLOMBIA_SANDBOX_PROFILES.map((profile, index) => __spreadProps(__spreadValues({}, profile), {
  fullName: `${profile.fullName} \u2014 ${index % 2 === 0 ? "con registro" : "sin registro"}`,
  paramOverrides: {
    documentType: "CC",
    documentNumber: profile.documentNumber,
    firstSurname: COLOMBIA_INPEC_FIRST_SURNAMES[index]
  }
}));
var COLOMBIA_POLICE_RNMC_SANDBOX_PROFILES = COLOMBIA_SANDBOX_PROFILES.map((profile, index) => __spreadProps(__spreadValues({}, profile), {
  fullName: `${profile.fullName} \u2014 ${index % 2 === 0 ? "con medidas" : "sin medidas"}`
}));
var COLOMBIA_DIAN_SANDBOX_PROFILES = COLOMBIA_SANDBOX_PROFILES.map((profile) => __spreadProps(__spreadValues({}, profile), {
  fullName: `${profile.fullName} \u2014 REGISTRO ACTIVO`,
  paramOverrides: {
    documentType: "NIT",
    documentNumber: profile.documentNumber
  }
}));
var COLOMBIA_FASECOLDA_CODE_SANDBOX_PROFILES = COLOMBIA_SANDBOX_PROFILES.map((profile) => ({
  documentNumber: profile.documentNumber,
  fullName: `${profile.fullName} \u2014 FASECOLDA code`,
  paramOverrides: {
    codeFasecolda: profile.documentNumber
  }
}));
var COLOMBIA_SIGEP_BY_NAME_SANDBOX_PROFILES = COLOMBIA_SANDBOX_PROFILES.map((profile) => ({
  documentNumber: profile.documentNumber,
  fullName: `${profile.fullName} \u2014 SIGEP`,
  paramOverrides: {
    fullName: profile.fullName
  }
}));
var COLOMBIA_SCCRC_BY_NAME_SANDBOX_PROFILES = COLOMBIA_SANDBOX_PROFILES.map((profile, index) => {
  const parts = String(profile.fullName || "").split(/\s+/);
  const primerNombre = parts[0] || "MARIA";
  const segundoNombre = parts[1] || "ELENA";
  const primerApellido = parts[2] || "LOPEZ";
  const segundoApellido = parts[3] || "GARCIA";
  const sexo = index % 2 === 0 ? "FEMENINO" : "MASCULINO";
  return {
    documentNumber: profile.documentNumber,
    fullName: `${profile.fullName} \u2014 SCCRC by name`,
    paramOverrides: {
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      sexo,
      fecha: COLOMBIA_SCCRC_BY_NAME_DEFAULT_DATE
    }
  };
});
var COLOMBIA_SCCRC_SERIAL_SANDBOX_PROFILES = COLOMBIA_SANDBOX_PROFILES.map((profile, index) => ({
  documentNumber: profile.documentNumber,
  fullName: `${profile.fullName} \u2014 SCCRC serial`,
  paramOverrides: {
    serial: index === 0 ? COLOMBIA_SCCRC_SERIAL_DEFAULT : `00310${String(profile.documentNumber).slice(-5)}`
  }
}));
var COLOMBIA_SCCRC_MATRIMONIO_SANDBOX_PROFILES = COLOMBIA_SANDBOX_PROFILES.map((profile, index) => {
  const parts = String(profile.fullName || "").split(/\s+/);
  const primerNombre = parts[0] || "JUAN";
  const segundoNombre = parts[1] || "CARLOS";
  const primerApellido = parts[2] || "PEREZ";
  const segundoApellido = parts[3] || "GOMEZ";
  const sexo = index % 2 === 0 ? "FEMENINO" : "MASCULINO";
  const mode = index % 3;
  if (mode === 1) {
    return {
      documentNumber: profile.documentNumber,
      fullName: `${profile.fullName} \u2014 SCCRC matrimonio (name)`,
      paramOverrides: {
        primerNombre,
        segundoNombre,
        primerApellido,
        segundoApellido,
        sexo,
        fecha: COLOMBIA_SCCRC_MARRIAGE_DEFAULT_DATE,
        documentNumber: "",
        serial: ""
      }
    };
  }
  if (mode === 2) {
    return {
      documentNumber: profile.documentNumber,
      fullName: `${profile.fullName} \u2014 SCCRC matrimonio (serial)`,
      paramOverrides: {
        serial: `00420${String(profile.documentNumber).slice(-5)}`,
        documentNumber: "",
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        sexo: "",
        fecha: ""
      }
    };
  }
  return {
    documentNumber: profile.documentNumber,
    fullName: `${profile.fullName} \u2014 SCCRC matrimonio (document)`,
    paramOverrides: {
      documentNumber: profile.documentNumber,
      sexo,
      fecha: "",
      primerNombre: "",
      segundoNombre: "",
      primerApellido: "",
      segundoApellido: "",
      serial: ""
    }
  };
});
var COLOMBIA_SCCRC_BY_NAME_CONFLICT_MISSING_PRIMER_NOMBRE = {
  profileKey: "409-sccrc-missing-primerNombre",
  documentNumber: "90040921",
  fullName: "409 \u2014 Missing primerNombre",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: {
    primerNombre: "",
    primerApellido: "LOPEZ",
    sexo: "FEMENINO",
    fecha: COLOMBIA_SCCRC_BY_NAME_DEFAULT_DATE
  }
};
var COLOMBIA_SCCRC_SERIAL_CONFLICT_MISSING_SERIAL = {
  profileKey: "409-sccrc-missing-serial",
  documentNumber: "90040922",
  fullName: "409 \u2014 Missing serial",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { serial: "" }
};
var COLOMBIA_SCCRC_MATRIMONIO_CONFLICT_MISSING_SEXO = {
  profileKey: "409-sccrc-matrimonio-missing-sexo",
  documentNumber: "90040923",
  fullName: "409 \u2014 Missing sexo (document mode)",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: {
    documentNumber: "10000001",
    sexo: "",
    fecha: "",
    primerNombre: "",
    primerApellido: "",
    serial: ""
  }
};
var COLOMBIA_SIGEP_BY_NAME_ERROR_PROFILE_404 = {
  profileKey: "404-sigep-name",
  documentNumber: "90040401",
  fullName: "404 \u2014 SIGEP name not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    fullName: "NOT FOUND 90040401"
  }
};
var COLOMBIA_DIAN_NIT_PREFIX_PROFILES = COLOMBIA_SANDBOX_PROFILES.map((profile, index) => ({
  documentNumber: `9010000${String(index + 1).padStart(2, "0")}`,
  fullName: `${profile.fullName} \u2014 REGISTRO ACTIVO (901 prefix)`,
  paramOverrides: {
    documentType: "NIT",
    documentNumber: `9010000${String(index + 1).padStart(2, "0")}`
  }
}));
var COLOMBIA_DIAN_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "10000001"
  }
});
var COLOMBIA_RUES_SANDBOX_PROFILES = COLOMBIA_DIAN_SANDBOX_PROFILES.map((profile) => __spreadProps(__spreadValues({}, profile), {
  fullName: `${profile.fullName?.replace(" \u2014 REGISTRO ACTIVO", "")} \u2014 RUES RM`,
  paramOverrides: {
    documentType: "NIT",
    documentNumber: profile.documentNumber,
    category: "RM"
  }
}));
var COLOMBIA_RUNT_VEHICLE_PROFILES = COLOMBIA_SANDBOX_PROFILES.map((profile, index) => __spreadProps(__spreadValues({}, profile), {
  plate: `ABC${10001 + index}`,
  fullName: `${profile.fullName} \u2014 valid`
}));
var COLOMBIA_RUNT_VEHICLE_OWNERS_PROFILES = [
  {
    plate: "CRL299",
    documentNumber: "CRL299",
    fullName: "CRL299 \u2014 vehicle owner history"
  }
];
var COLOMBIA_RUNT_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "10000001",
    plate: SANDBOX_DEFAULT_PLATE
  }
});
var COLOMBIA_PEP_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 Ministerio de Hacienda" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 Congreso de la Rep\xFAblica" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 Departamento Administrativo de la Presidencia" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 Ministerio del Interior" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 Contralor\xEDa General de la Rep\xFAblica" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 Ministerio de Hacienda" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 Congreso de la Rep\xFAblica" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 Departamento Administrativo de la Presidencia" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 Ministerio del Interior" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 Contralor\xEDa General de la Rep\xFAblica" }
];
var COLOMBIA_CE_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 VIGENTE", expeditionDate: "15/03/2020" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 VIGENTE", expeditionDate: "22/07/2019" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 VIGENTE", expeditionDate: "08/11/2021" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 VIGENTE", expeditionDate: "30/01/2018" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 VIGENTE", expeditionDate: "12/05/2022" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 VIGENTE", expeditionDate: "04/09/2017" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 VIGENTE", expeditionDate: "19/12/2023" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 VIGENTE", expeditionDate: "27/06/2016" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 VIGENTE", expeditionDate: "03/04/2020" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 VIGENTE", expeditionDate: "14/08/2019" }
];
var COLOMBIA_PEP_FOREIGNER_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 VIGENTE", expeditionDate: "15/03/2020" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 VIGENTE", expeditionDate: "22/07/2019" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 VIGENTE", expeditionDate: "08/11/2021" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 VIGENTE", expeditionDate: "30/01/2018" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 VIGENTE", expeditionDate: "12/05/2022" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 VIGENTE", expeditionDate: "04/09/2017" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 VIGENTE", expeditionDate: "19/12/2023" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 VIGENTE", expeditionDate: "27/06/2016" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 VIGENTE", expeditionDate: "03/04/2020" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 VIGENTE", expeditionDate: "14/08/2019" }
];
var COLOMBIA_PPT_FOREIGNER_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 VIGENTE", expeditionDate: "15/03/2020" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 VIGENTE", expeditionDate: "22/07/2019" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 VIGENTE", expeditionDate: "08/11/2021" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 VIGENTE", expeditionDate: "30/01/2018" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 VIGENTE", expeditionDate: "12/05/2022" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 VIGENTE", expeditionDate: "04/09/2017" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 VIGENTE", expeditionDate: "19/12/2023" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 VIGENTE", expeditionDate: "27/06/2016" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 VIGENTE", expeditionDate: "03/04/2020" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 VIGENTE", expeditionDate: "14/08/2019" }
];
var COLOMBIA_JUDICIAL_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 JUZGADO CIVIL DEL CIRCUITO" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 JUZGADO DE FAMILIA" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 JUZGADO PENAL DEL CIRCUITO" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 JUZGADO LABORAL DEL CIRCUITO" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 JUZGADO CIVIL DEL CIRCUITO" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 JUZGADO DE FAMILIA" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 JUZGADO PENAL DEL CIRCUITO" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 JUZGADO LABORAL DEL CIRCUITO" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 JUZGADO CIVIL DEL CIRCUITO" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 JUZGADO DE FAMILIA" }
];
var COLOMBIA_LAWYERS_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 Vigente" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 Vigente" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 Vigente" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 Vigente" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 Vigente" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 Vigente" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 Vigente" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 Vigente" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 Vigente" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 Vigente" }
];
var COLOMBIA_LAWYERS_CERTIFICATE_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 Vigente (ABG)" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 Vigente (ABG)" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 Vigente (ABG)" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 Vigente (ABG)" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 Vigente (ABG)" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 Vigente (ABG)" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 Vigente (ABG)" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 Vigente (ABG)" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 Vigente (ABG)" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 Vigente (ABG)" }
];
var COLOMBIA_JUDICIAL_PROCESS_DETAILS_SANDBOX_PROFILES = [
  { processNumber: "10000001", documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 Demandante" },
  { processNumber: "10000002", documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 Demandado" },
  { processNumber: "10000003", documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 Tercero" },
  { processNumber: "10000004", documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 Demandante" },
  { processNumber: "10000005", documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 Demandado" },
  { processNumber: "10000006", documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 Tercero" },
  { processNumber: "10000007", documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 Demandante" },
  { processNumber: "10000008", documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 Demandado" },
  { processNumber: "10000009", documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 Tercero" },
  { processNumber: "10000010", documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 Demandante" }
];
var COLOMBIA_JUDICIAL_PROCESSES_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 1 proceso" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 1 proceso" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 1 proceso" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 1 proceso" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 1 proceso" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 1 proceso" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 1 proceso" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 1 proceso" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 1 proceso" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 1 proceso" }
];
var COLOMBIA_MILITARY_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 DEFINITIVA" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 PRIMERA CLASE" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 SEGUNDA CLASE" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 BAJA" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 INCORPORADO" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 LICENCIA" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 DEFINITIVA" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 PRIMERA CLASE" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 SEGUNDA CLASE" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 DEFINITIVA" }
];
var COLOMBIA_MIN_TRABAJO_V3_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 Alturas B\xE1sico" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 Alturas Intermedio" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 Alturas Avanzado" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 Espacios Confinados" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 Supervisor Alturas" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 Alturas B\xE1sico" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 Alturas Intermedio" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 Alturas Avanzado" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 Alturas B\xE1sico" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 Alturas Intermedio" }
];
var COLOMBIA_RETHUS_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 MEDICO GENERAL" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 ENFERMERO PROFESIONAL" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 ODONTOLOGO" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 FARMACEUTICO" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 FISIOTERAPEUTA" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 MEDICO ESPECIALISTA" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 BACTERIOLOGO" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 NUTRICIONISTA" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 PSICOLOGO" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 MEDICO GENERAL" }
];
var COLOMBIA_RETHUS_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: { documentType: "INVALID", documentNumber: "10000001" }
});
var COLOMBIA_ADRES_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "LILIA MANUELA LESPORT FERNANDEZ \u2014 CONTRIBUTIVO ACTIVO" },
  { documentNumber: "10000002", fullName: "JUAN CARLOS PEREZ GOMEZ \u2014 SUBSIDIADO ACTIVO" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 INACTIVO" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 CONTRIBUTIVO ACTIVO" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 SUBSIDIADO ACTIVO" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 INACTIVO" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 CONTRIBUTIVO ACTIVO" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 SUBSIDIADO ACTIVO" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 INACTIVO" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 CONTRIBUTIVO ACTIVO" }
];
var COLOMBIA_ADRES_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: { documentType: "INVALID", documentNumber: "10000001" }
});
var COLOMBIA_RUI_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 RUI A01" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 RUI A04" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 RUI B01" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 RUI B05" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 RUI C01" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 RUI C05" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 RUI D01" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 RUI A01" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 RUI B01" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 RUI C01" }
];
var COLOMBIA_RUI_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: { documentType: "INVALID", documentNumber: "10000001" }
});
var COLOMBIA_POSTMAN_SANDBOX_BY_CODE = {
  [COLOMBIA_CEDULA_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_CEDULA_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_PROCURADURIA_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_PROCURADURIA_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_PEP_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_PEP_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_PEP_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_CE_FOREIGNER_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_CE_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_MISSING_EXPEDITION_DATE,
        SANDBOX_CONFLICT_INVALID_EXPEDITION_DATE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultExpeditionDate: "15/03/2020",
    documentTypeByCode: {
      [COLOMBIA_CE_FOREIGNER_ENDPOINT_CODE]: "CE"
    },
    showProfileMeta: false
  },
  [COLOMBIA_PEP_FOREIGNER_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_PEP_FOREIGNER_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_MISSING_EXPEDITION_DATE,
        SANDBOX_CONFLICT_INVALID_EXPEDITION_DATE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultExpeditionDate: "15/03/2020",
    showProfileMeta: false
  },
  [COLOMBIA_PPT_FOREIGNER_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_PPT_FOREIGNER_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_MISSING_EXPEDITION_DATE,
        SANDBOX_CONFLICT_INVALID_EXPEDITION_DATE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultExpeditionDate: "15/03/2020",
    showProfileMeta: false
  },
  [COLOMBIA_JUDICIAL_RECORDS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_JUDICIAL_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_MISSING_CITY,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultCity: "BOGOTA",
    documentTypeByCode: {
      [COLOMBIA_JUDICIAL_RECORDS_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_LAWYERS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_LAWYERS_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_LAWYERS_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_LAWYERS_CERTIFICATE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_LAWYERS_CERTIFICATE_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_MISSING_QUALITY,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultQuality: "ABG",
    documentTypeByCode: {
      [COLOMBIA_LAWYERS_CERTIFICATE_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_JUDICIAL_PROCESS_DETAILS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_JUDICIAL_PROCESS_DETAILS_SANDBOX_PROFILES, {
      conflictProfiles: [SANDBOX_CONFLICT_MISSING_PROCESS_NUMBER]
    }),
    defaultDocumentNumber: "10000001",
    defaultProcessNumber: "10000001",
    showProfileMeta: false
  },
  [COLOMBIA_JUDICIAL_PROCESSES_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_JUDICIAL_PROCESSES_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_JUDICIAL_PROCESSES_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_MILITARY_SITUATION_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_MILITARY_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_MILITARY_SITUATION_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_MIN_TRABAJO_V3_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_MIN_TRABAJO_V3_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_MIN_TRABAJO_V3_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_RETHUS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_RETHUS_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COLOMBIA_RETHUS_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_RETHUS_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_ADRES_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_ADRES_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COLOMBIA_ADRES_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_ADRES_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_RUI_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_RUI_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COLOMBIA_RUI_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_RUI_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_RUNT_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_RUNT_VEHICLE_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COLOMBIA_RUNT_CONFLICT_INVALID_DOCUMENT_TYPE,
        SANDBOX_CONFLICT_MISSING_PLATE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    documentTypeByCode: {
      [COLOMBIA_RUNT_VEHICLE_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_RUNT_DRIVER_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_RUNT_DRIVER_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_RUNT_VEHICLE_COMPLETE_PLATE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_RUNT_VEHICLE_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COLOMBIA_RUNT_CONFLICT_INVALID_DOCUMENT_TYPE,
        SANDBOX_CONFLICT_MISSING_PLATE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    documentTypeByCode: {
      [COLOMBIA_RUNT_VEHICLE_COMPLETE_PLATE_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_RUNT_VEHICLE_SIMPLIFIED_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_RUNT_VEHICLE_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COLOMBIA_RUNT_CONFLICT_INVALID_DOCUMENT_TYPE,
        SANDBOX_CONFLICT_MISSING_PLATE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    documentTypeByCode: {
      [COLOMBIA_RUNT_VEHICLE_SIMPLIFIED_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_RUNT_VEHICLE_VIN_ENDPOINT_CODE]: {
    profiles: appendVehicleVinSandboxProfiles(SANDBOX_VEHICLE_VIN_PROFILES),
    defaultVin: SANDBOX_DEFAULT_VIN,
    defaultDocumentNumber: SANDBOX_DEFAULT_VIN,
    showProfileMeta: false
  },
  [COLOMBIA_RUNT_VEHICLE_SOAT_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [COLOMBIA_RUNT_VEHICLE_COMPLETE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [COLOMBIA_RUNT_VEHICLE_OWNERS_ENDPOINT_CODE]: {
    profiles: [
      ...COLOMBIA_RUNT_VEHICLE_OWNERS_PROFILES,
      SANDBOX_CONFLICT_MISSING_PLATE
    ],
    defaultPlate: "CRL299",
    defaultDocumentNumber: "CRL299",
    showProfileMeta: false
  },
  [COLOMBIA_SIMIT_PLATE_ENDPOINT_CODE]: {
    profiles: appendSimitPlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_SIMIT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_SIMIT_PLATE,
    showProfileMeta: false
  },
  [COLOMBIA_PICO_PLACA_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [COLOMBIA_BOGOTA_FINES_ENDPOINT_CODE]: {
    profiles: appendSimitPlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_SIMIT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_SIMIT_PLATE,
    showProfileMeta: false
  },
  [COLOMBIA_BOGOTA_ACCIDENTALITY_ENDPOINT_CODE]: {
    profiles: appendSimitPlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_SIMIT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_SIMIT_PLATE,
    showProfileMeta: false
  },
  [COLOMBIA_BOGOTA_VEHICLE_TAX_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_RUNT_VEHICLE_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COLOMBIA_RUNT_CONFLICT_INVALID_DOCUMENT_TYPE,
        SANDBOX_CONFLICT_MISSING_PLATE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    documentTypeByCode: {
      [COLOMBIA_BOGOTA_VEHICLE_TAX_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_BOGOTA_TAXI_PLATE_ENDPOINT_CODE]: {
    profiles: appendSimitPlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_SIMIT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_SIMIT_PLATE,
    showProfileMeta: false
  },
  [COLOMBIA_SIMIT_AGREEMENTS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_SIMIT_AGREEMENTS_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_SIMIT_COMPLETE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_SIMIT_COMPLETE_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_SIMIT_RESOLUTIONS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_SIMIT_RESOLUTIONS_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_SIMIT_SUSPENSIONS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_SIMIT_SUSPENSIONS_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_FASECOLDA_SINISTER_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [COLOMBIA_FASECOLDA_VALUES_PLATE_ENDPOINT_CODE]: {
    profiles: appendSimitPlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_SIMIT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_SIMIT_PLATE,
    showProfileMeta: false
  },
  [COLOMBIA_SISBEN_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_SISBEN_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_DELINQUENT_DEBTORS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_DELINQUENT_DEBTORS_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_AFFILIATIONS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultDate: COLOMBIA_AFFILIATIONS_DEFAULT_DATE,
    documentTypeByCode: {
      [COLOMBIA_AFFILIATIONS_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_CRIMINAL_HISTORY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_CRIMINAL_HISTORY_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_DIAN_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles([...COLOMBIA_DIAN_SANDBOX_PROFILES, ...COLOMBIA_DIAN_NIT_PREFIX_PROFILES.slice(0, 3)], {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COLOMBIA_DIAN_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_DIAN_ENDPOINT_CODE]: "NIT"
    },
    showProfileMeta: false
  },
  [COLOMBIA_POLICE_RNMC_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_POLICE_RNMC_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultDate: COLOMBIA_POLICE_RNMC_DEFAULT_DATE,
    documentTypeByCode: {
      [COLOMBIA_POLICE_RNMC_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_POLICE_RNMC_PREMIUM_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_POLICE_RNMC_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_POLICE_RNMC_PREMIUM_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_CONTRALORIA_CERTIFICATE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_CONTRALORIA_CERTIFICATE_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_DIAN_INVOICER_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_DIAN_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COLOMBIA_DIAN_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_DIAN_INVOICER_ENDPOINT_CODE]: "NIT"
    },
    showProfileMeta: false
  },
  [COLOMBIA_RUES_V3_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_RUES_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COLOMBIA_DIAN_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultCategory: "RM",
    documentTypeByCode: {
      [COLOMBIA_RUES_V3_ENDPOINT_CODE]: "NIT"
    },
    showProfileMeta: false
  },
  [COLOMBIA_REGISTRADURIA_CERTIFICATE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultDate: COLOMBIA_REGISTRADURIA_CERTIFICATE_DEFAULT_DATE,
    documentTypeByCode: {
      [COLOMBIA_REGISTRADURIA_CERTIFICATE_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_CEDULA_BY_NAME_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SCCRC_BY_NAME_SANDBOX_PROFILES, {
      conflictProfiles: [COLOMBIA_SCCRC_BY_NAME_CONFLICT_MISSING_PRIMER_NOMBRE]
    }),
    defaultDocumentNumber: "10000001",
    defaultDate: COLOMBIA_SCCRC_BY_NAME_DEFAULT_DATE,
    showProfileMeta: false
  },
  [COLOMBIA_REGISTRADURIA_SERIAL_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SCCRC_SERIAL_SANDBOX_PROFILES, {
      conflictProfiles: [COLOMBIA_SCCRC_SERIAL_CONFLICT_MISSING_SERIAL],
      include404: false
    }),
    defaultDocumentNumber: "10000001",
    showProfileMeta: false
  },
  [COLOMBIA_REGISTRADURIA_MATRIMONIO_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SCCRC_MATRIMONIO_SANDBOX_PROFILES, {
      conflictProfiles: [COLOMBIA_SCCRC_MATRIMONIO_CONFLICT_MISSING_SEXO]
    }),
    defaultDocumentNumber: "10000001",
    defaultDate: COLOMBIA_SCCRC_MARRIAGE_DEFAULT_DATE,
    showProfileMeta: false
  },
  [COLOMBIA_INPEC_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_INPEC_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultFirstSurname: "LOPEZ",
    documentTypeByCode: {
      [COLOMBIA_INPEC_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_CONTRACTS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_CONTRACTS_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_SISCONMP_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_SISCONMP_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_FASECOLDA_VALUES_CODE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_FASECOLDA_CODE_SANDBOX_PROFILES, {
      conflictProfiles: []
    }),
    defaultDocumentNumber: "10000001",
    defaultCodeFasecolda: "10000001",
    showProfileMeta: false
  },
  [COLOMBIA_SIGEP_BY_NAME_ENDPOINT_CODE]: {
    profiles: [
      ...COLOMBIA_SIGEP_BY_NAME_SANDBOX_PROFILES,
      COLOMBIA_SIGEP_BY_NAME_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: "10000001",
    showProfileMeta: false
  },
  [COLOMBIA_SIGEP_BY_NUMBER_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_SIGEP_BY_NUMBER_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_CEDULA_EXTRA_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultDate: COLOMBIA_CEDULA_EXTRA_DEFAULT_DATE,
    documentTypeByCode: {
      [COLOMBIA_CEDULA_EXTRA_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_CEDULA_PREMIUM_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_CEDULA_PREMIUM_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_RUES_FULL_V3_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_RUES_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COLOMBIA_DIAN_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultCategory: "RM",
    documentTypeByCode: {
      [COLOMBIA_RUES_FULL_V3_ENDPOINT_CODE]: "NIT"
    },
    showProfileMeta: false
  },
  [COLOMBIA_REGISTRADURIA_VOTING_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER]
    }),
    defaultDocumentNumber: "10000001",
    showProfileMeta: false
  },
  [COLOMBIA_SENA_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_SENA_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_SIMIT_COMPARENDO_DETAILS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COLOMBIA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [COLOMBIA_SIMIT_COMPARENDO_DETAILS_ENDPOINT_CODE]: "CC"
    },
    showProfileMeta: false
  },
  [COLOMBIA_MEDELLIN_FINES_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [COLOMBIA_BOGOTA_TAXI_CARD_ENDPOINT_CODE]: {
    profiles: [
      ...COLOMBIA_SANDBOX_PROFILES.map((profile) => __spreadProps(__spreadValues({}, profile), {
        fullName: profile.fullName.replace(" \u2014 valid", " \u2014 taxi card")
      })),
      {
        documentNumber: "90040401",
        fullName: "404 \u2014 Taxi card not found",
        responseType: "error",
        expectedStatus: 404
      }
    ],
    defaultDocumentNumber: "10000001",
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/costarica.postman-sandbox.ts
var COSTA_RICA_IDENTITY_ENDPOINT_CODE = "costarica_api_identity_lookup";
var COSTA_RICA_VOTING_ENDPOINT_CODE = "costarica_api_voting_location";
var COSTA_RICA_VEHICLE_ENDPOINT_CODE = "costa_rica_api_vehicle";
var COSTA_RICA_BUSINESS_ENDPOINT_CODE = "costa_rica_api_business_lookup";
var COSTA_RICA_DNI_LENGTH = 9;
var padCostaRicaDocumentNumber = (fixtureKey) => String(fixtureKey).padStart(COSTA_RICA_DNI_LENGTH, "0");
var toCostaRicaVotingProfile = (documentNumber, fullName, options = {}) => __spreadValues({
  documentNumber,
  fullName,
  paramOverrides: { documentNumber }
}, options);
var COSTA_RICA_SANDBOX_PROFILES = [
  { documentNumber: "010000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "010000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "010000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "010000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "010000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "010000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "010000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "010000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "010000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "010000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var COSTA_RICA_VOTING_SANDBOX_PROFILES = COSTA_RICA_SANDBOX_PROFILES.map((profile) => toCostaRicaVotingProfile(profile.documentNumber, profile.fullName));
var COSTA_RICA_CONFLICT_INVALID_DOCUMENT_TYPE = {
  profileKey: "409-invalid-documentType",
  documentNumber: "90040902",
  fullName: "409 \u2014 Invalid documentType",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { documentType: "INVALID", documentNumber: "010000001" }
};
var COSTA_RICA_VOTING_CONFLICT_MISSING_DOCUMENT_NUMBER = {
  profileKey: "409-missing-documentNumber-costa-rica-voting",
  documentNumber: padCostaRicaDocumentNumber(90040901),
  fullName: "409 \u2014 Missing documentNumber",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { documentNumber: "" }
};
var COSTA_RICA_VOTING_CONFLICT_INVALID_DOCUMENT_TYPE = {
  profileKey: "409-invalid-documentType-costa-rica-voting",
  documentNumber: padCostaRicaDocumentNumber(90040902),
  fullName: "409 \u2014 Invalid documentType",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { documentType: "INVALID", documentNumber: "010000001" }
};
var COSTA_RICA_VOTING_ERROR_PROFILE_404 = toCostaRicaVotingProfile("090040401", "404 \u2014 Voting record not found", {
  profileKey: "404-costa-rica-voting",
  responseType: "error",
  expectedStatus: 404
});
var COSTA_RICA_ERROR_PROFILE_404 = {
  documentNumber: "090040401",
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: { documentNumber: "090040401" }
};
var COSTA_RICA_POSTMAN_SANDBOX_BY_CODE = {
  [COSTA_RICA_IDENTITY_ENDPOINT_CODE]: {
    profiles: [
      ...COSTA_RICA_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      COSTA_RICA_CONFLICT_INVALID_DOCUMENT_TYPE,
      COSTA_RICA_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: "010000001",
    documentTypeByCode: {
      [COSTA_RICA_IDENTITY_ENDPOINT_CODE]: "CCCR"
    },
    showProfileMeta: false
  },
  [COSTA_RICA_VOTING_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COSTA_RICA_VOTING_SANDBOX_PROFILES, {
      include404: false,
      conflictProfiles: [
        COSTA_RICA_VOTING_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COSTA_RICA_VOTING_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }).concat(COSTA_RICA_VOTING_ERROR_PROFILE_404),
    defaultDocumentNumber: "010000001",
    documentTypeByCode: {
      [COSTA_RICA_VOTING_ENDPOINT_CODE]: "CCCR"
    },
    showProfileMeta: false
  },
  [COSTA_RICA_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [COSTA_RICA_BUSINESS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(COSTA_RICA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        COSTA_RICA_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "010000001",
    documentTypeByCode: {
      [COSTA_RICA_BUSINESS_ENDPOINT_CODE]: "NITE"
    },
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/ecuador.postman-sandbox.ts
var ECUADOR_IDENTITY_ENDPOINT_CODE = "ecuador_api_identity_lookup";
var ECUADOR_VEHICLE_ENDPOINT_CODE = "ecuador_api_vehicle";
var ECUADOR_VEHICLE_FINES_ENDPOINT_CODE = "ecuador_api_vehicle_fines";
var ECUADOR_COMPANY_ENDPOINT_CODE = "ecuador_api_company_lookup";
var ECUADOR_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var ECUADOR_COMPANY_DEMO_RUC = "1790008959001";
var ECUADOR_COMPANY_SANDBOX_PROFILES = [
  {
    documentNumber: ECUADOR_COMPANY_DEMO_RUC,
    fullName: "EMPRESA EJEMPLO SA \u2014 ACTIVO",
    paramOverrides: {
      documentType: "RUCEC",
      documentNumber: ECUADOR_COMPANY_DEMO_RUC
    }
  },
  ...ECUADOR_SANDBOX_PROFILES.map((profile, index) => ({
    documentNumber: `17900${String(10000001 + index).padStart(8, "0")}`,
    fullName: `${profile.fullName?.replace(" \u2014 valid", "")} \u2014 ACTIVO`,
    paramOverrides: {
      documentType: "RUCEC",
      documentNumber: `17900${String(10000001 + index).padStart(8, "0")}`
    }
  }))
];
var ECUADOR_COMPANY_ERROR_PROFILE_404 = {
  documentNumber: "1799004040101",
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    documentType: "RUCEC",
    documentNumber: "1799004040101"
  }
};
var ECUADOR_POSTMAN_SANDBOX_BY_CODE = {
  [ECUADOR_IDENTITY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(ECUADOR_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [ECUADOR_IDENTITY_ENDPOINT_CODE]: "CCEC"
    },
    showProfileMeta: false
  },
  [ECUADOR_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [ECUADOR_VEHICLE_FINES_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [ECUADOR_COMPANY_ENDPOINT_CODE]: {
    profiles: [
      ...ECUADOR_COMPANY_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE,
      ECUADOR_COMPANY_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: ECUADOR_COMPANY_DEMO_RUC,
    documentTypeByCode: {
      [ECUADOR_COMPANY_ENDPOINT_CODE]: "RUCEC"
    },
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/brazil.postman-sandbox.ts
var BRAZIL_IDENTITY_ENDPOINT_CODE = "brasil_api_identity_lookup";
var BRAZIL_VEHICLE_ENDPOINT_CODE = "brasil_api_vehicle";
var BRAZIL_COMPANY_ENDPOINT_CODE = "brasil_api_company_lookup";
var BRAZIL_CRIMINAL_HISTORY_ENDPOINT_CODE = "brasil_api_criminal_history";
var BRAZIL_CRIMINAL_DEMO_CPF = "01234567801";
var BRAZIL_CRIMINAL_DEMO_DATE_OF_BIRTH = "17/02/2002";
var BRAZIL_COMPANY_DEFAULT_CNPJ = "09159197000180";
var BRAZIL_COMPANY_SANDBOX_PROFILES = [
  {
    documentNumber: BRAZIL_COMPANY_DEFAULT_CNPJ,
    fullName: "EMPRESA EXEMPLO LTDA \u2014 ATIVA",
    paramOverrides: {
      documentType: "CNPJ",
      documentNumber: BRAZIL_COMPANY_DEFAULT_CNPJ
    }
  }
];
var BRAZIL_COMPANY_ERROR_PROFILE_404 = {
  documentNumber: "90040401000180",
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    documentType: "CNPJ",
    documentNumber: "90040401000180"
  }
};
var BRAZIL_COMPANY_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: BRAZIL_COMPANY_DEFAULT_CNPJ
  }
});
var BRAZIL_DEFAULT_DATE_OF_BIRTH = "15/03/1990";
var BRAZIL_SANDBOX_PROFILES = [
  { documentNumber: "00010000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "00010000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "00010000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "00010000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "00010000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "00010000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "00010000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "00010000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "00010000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "00010000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var BRAZIL_VEHICLE_DEFAULT_PLATE = "PZY7H82";
var BRAZIL_VEHICLE_SANDBOX_PROFILES = [
  { plate: "PZY7H82", documentNumber: "PZY7H82", fullName: "HYUNDAI HB20 1.0M COMFOR \u2014 vehicle fixture" },
  { plate: "EDM4A46", documentNumber: "EDM4A46", fullName: "FORD FUSION \u2014 vehicle fixture" },
  { plate: "AAA2345", documentNumber: "AAA2345", fullName: "VOLKSWAGEN GOL 1000I \u2014 vehicle fixture" },
  { plate: "AAA2325", documentNumber: "AAA2325", fullName: "MERCEDES-BENZ LK 2325 \u2014 vehicle fixture" },
  { plate: "DSK4F82", documentNumber: "DSK4F82", fullName: "CHEVROLET CORSA HATCH MAXX \u2014 vehicle fixture" }
];
var BRAZIL_CONFLICT_INVALID_DOCUMENT_TYPE = {
  profileKey: "409-invalid-documentType",
  documentNumber: "90040902",
  fullName: "409 \u2014 Invalid documentType",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "00010000001",
    dateOfBirth: BRAZIL_DEFAULT_DATE_OF_BIRTH
  }
};
var BRAZIL_CONFLICT_MISSING_DATE_OF_BIRTH = {
  profileKey: "409-missing-dateOfBirth",
  documentNumber: "90040908",
  fullName: "409 \u2014 Missing dateOfBirth",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "", documentNumber: "00010000001" }
};
var BRAZIL_CONFLICT_INVALID_DATE_OF_BIRTH = {
  profileKey: "409-invalid-dateOfBirth",
  documentNumber: "90040909",
  fullName: "409 \u2014 Invalid dateOfBirth format",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "not-a-date", documentNumber: "00010000001" }
};
var BRAZIL_ERROR_PROFILE_404 = {
  documentNumber: "00090040401",
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404
};
var BRAZIL_CRIMINAL_SANDBOX_PROFILES = [
  {
    documentNumber: BRAZIL_CRIMINAL_DEMO_CPF,
    fullName: "Jo\xE3o Silva \u2014 criminal certificate demo",
    paramOverrides: {
      documentType: "CPF",
      documentNumber: BRAZIL_CRIMINAL_DEMO_CPF,
      dateOfBirth: BRAZIL_CRIMINAL_DEMO_DATE_OF_BIRTH
    }
  },
  ...BRAZIL_SANDBOX_PROFILES.map((profile) => __spreadProps(__spreadValues({}, profile), {
    paramOverrides: {
      documentType: "CPF",
      documentNumber: profile.documentNumber,
      dateOfBirth: BRAZIL_DEFAULT_DATE_OF_BIRTH
    }
  }))
];
var BRAZIL_CRIMINAL_ERROR_PROFILE_404 = {
  documentNumber: "90040401001",
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    documentType: "CPF",
    documentNumber: "90040401001",
    dateOfBirth: BRAZIL_DEFAULT_DATE_OF_BIRTH
  }
};
var BRAZIL_POSTMAN_SANDBOX_BY_CODE = {
  [BRAZIL_IDENTITY_ENDPOINT_CODE]: {
    profiles: [
      ...BRAZIL_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      BRAZIL_CONFLICT_INVALID_DOCUMENT_TYPE,
      BRAZIL_CONFLICT_MISSING_DATE_OF_BIRTH,
      BRAZIL_CONFLICT_INVALID_DATE_OF_BIRTH,
      BRAZIL_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: "00010000001",
    defaultDateOfBirth: BRAZIL_DEFAULT_DATE_OF_BIRTH,
    documentTypeByCode: {
      [BRAZIL_IDENTITY_ENDPOINT_CODE]: "CPF"
    },
    showProfileMeta: false
  },
  [BRAZIL_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(BRAZIL_VEHICLE_SANDBOX_PROFILES),
    defaultPlate: BRAZIL_VEHICLE_DEFAULT_PLATE,
    defaultDocumentNumber: BRAZIL_VEHICLE_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [BRAZIL_COMPANY_ENDPOINT_CODE]: {
    profiles: [
      ...BRAZIL_COMPANY_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      BRAZIL_COMPANY_CONFLICT_INVALID_DOCUMENT_TYPE,
      BRAZIL_COMPANY_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: BRAZIL_COMPANY_DEFAULT_CNPJ,
    documentTypeByCode: {
      [BRAZIL_COMPANY_ENDPOINT_CODE]: "CNPJ"
    },
    showProfileMeta: false
  },
  [BRAZIL_CRIMINAL_HISTORY_ENDPOINT_CODE]: {
    profiles: [
      ...BRAZIL_CRIMINAL_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      BRAZIL_CONFLICT_INVALID_DOCUMENT_TYPE,
      BRAZIL_CONFLICT_MISSING_DATE_OF_BIRTH,
      BRAZIL_CONFLICT_INVALID_DATE_OF_BIRTH,
      BRAZIL_CRIMINAL_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: BRAZIL_CRIMINAL_DEMO_CPF,
    defaultDateOfBirth: BRAZIL_CRIMINAL_DEMO_DATE_OF_BIRTH,
    documentTypeByCode: {
      [BRAZIL_CRIMINAL_HISTORY_ENDPOINT_CODE]: "CPF"
    },
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/elsalvador.postman-sandbox.ts
var EL_SALVADOR_IDENTITY_ENDPOINT_CODE = "el_salvador_api_identity_lookup";
var EL_SALVADOR_DEFAULT_DATE_OF_BIRTH = "15/03/1990";
var EL_SALVADOR_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var EL_SALVADOR_CONFLICT_MISSING_DATE_OF_BIRTH = {
  profileKey: "409-missing-dateOfBirth",
  documentNumber: "90040908",
  fullName: "409 \u2014 Missing dateOfBirth",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "", documentNumber: "10000001" }
};
var EL_SALVADOR_CONFLICT_INVALID_DATE_OF_BIRTH = {
  profileKey: "409-invalid-dateOfBirth",
  documentNumber: "90040909",
  fullName: "409 \u2014 Invalid dateOfBirth format",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "not-a-date", documentNumber: "10000001" }
};
var EL_SALVADOR_POSTMAN_SANDBOX_BY_CODE = {
  [EL_SALVADOR_IDENTITY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(EL_SALVADOR_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        EL_SALVADOR_CONFLICT_MISSING_DATE_OF_BIRTH,
        EL_SALVADOR_CONFLICT_INVALID_DATE_OF_BIRTH
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultDateOfBirth: EL_SALVADOR_DEFAULT_DATE_OF_BIRTH,
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/guatemala.postman-sandbox.ts
var GUATEMALA_IDENTITY_ENDPOINT_CODE = "guatemala_api_identity_lookup";
var GUATEMALA_IDENTITY_EXTRA_ENDPOINT_CODE = "guatemala_api_identity_extra_lookup";
var GUATEMALA_DEFAULT_DATE_OF_BIRTH = "15/03/1990";
var GUATEMALA_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var GUATEMALA_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "10000001",
    dateOfBirth: GUATEMALA_DEFAULT_DATE_OF_BIRTH
  }
});
var GUATEMALA_CONFLICT_MISSING_DATE_OF_BIRTH = {
  profileKey: "409-missing-dateOfBirth",
  documentNumber: "90040908",
  fullName: "409 \u2014 Missing dateOfBirth",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "", documentNumber: "10000001" }
};
var GUATEMALA_CONFLICT_INVALID_DATE_OF_BIRTH = {
  profileKey: "409-invalid-dateOfBirth",
  documentNumber: "90040909",
  fullName: "409 \u2014 Invalid dateOfBirth format",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "not-a-date", documentNumber: "10000001" }
};
var GUATEMALA_POSTMAN_SANDBOX_BY_CODE = {
  [GUATEMALA_IDENTITY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(GUATEMALA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        GUATEMALA_CONFLICT_INVALID_DOCUMENT_TYPE,
        GUATEMALA_CONFLICT_MISSING_DATE_OF_BIRTH,
        GUATEMALA_CONFLICT_INVALID_DATE_OF_BIRTH
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultDateOfBirth: GUATEMALA_DEFAULT_DATE_OF_BIRTH,
    documentTypeByCode: {
      [GUATEMALA_IDENTITY_ENDPOINT_CODE]: "CUI"
    },
    showProfileMeta: false
  },
  [GUATEMALA_IDENTITY_EXTRA_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(GUATEMALA_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        GUATEMALA_CONFLICT_INVALID_DOCUMENT_TYPE,
        GUATEMALA_CONFLICT_MISSING_DATE_OF_BIRTH,
        GUATEMALA_CONFLICT_INVALID_DATE_OF_BIRTH
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultDateOfBirth: GUATEMALA_DEFAULT_DATE_OF_BIRTH,
    documentTypeByCode: {
      [GUATEMALA_IDENTITY_EXTRA_ENDPOINT_CODE]: "CUI"
    },
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/honduras.postman-sandbox.ts
var HONDURAS_IDENTITY_ENDPOINT_CODE = "honduras_api_identity_lookup";
var HONDURAS_VOTING_ENDPOINT_CODE = "honduras_api_voting_location";
var HONDURAS_DNIHN_LENGTH = 13;
var padHondurasVotingDocumentNumber = (fixtureKey) => String(fixtureKey).padStart(HONDURAS_DNIHN_LENGTH, "0");
var toHondurasVotingProfile = (fixtureKey, fullName, options = {}) => {
  const documentNumber = padHondurasVotingDocumentNumber(fixtureKey);
  return __spreadValues({
    documentNumber,
    fullName,
    paramOverrides: { documentNumber }
  }, options);
};
var HONDURAS_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var HONDURAS_VOTING_SANDBOX_PROFILES = [
  toHondurasVotingProfile(10000001, "MARIA ELENA LOPEZ GARCIA \u2014 valid"),
  toHondurasVotingProfile(10000002, "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid"),
  toHondurasVotingProfile(10000003, "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid"),
  toHondurasVotingProfile(10000004, "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid"),
  toHondurasVotingProfile(10000005, "ANA SOFIA RAMIREZ TORRES \u2014 valid"),
  toHondurasVotingProfile(10000006, "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid"),
  toHondurasVotingProfile(10000007, "VALENTINA ANDREA CASTRO VARGAS \u2014 valid"),
  toHondurasVotingProfile(10000008, "RICARDO JOSE MORALES SUAREZ \u2014 valid"),
  toHondurasVotingProfile(10000009, "PATRICIA CAROLINA DIAZ REYES \u2014 valid"),
  toHondurasVotingProfile(10000010, "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid")
];
var HONDURAS_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: { documentType: "INVALID", documentNumber: "10000001" }
});
var HONDURAS_VOTING_CONFLICT_MISSING_DOCUMENT_NUMBER = {
  profileKey: "409-missing-documentNumber-honduras-voting",
  documentNumber: padHondurasVotingDocumentNumber(90040901),
  fullName: "409 \u2014 Missing documentNumber",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { documentNumber: "" }
};
var HONDURAS_VOTING_CONFLICT_INVALID_DOCUMENT_TYPE = {
  profileKey: "409-invalid-documentType-honduras-voting",
  documentNumber: padHondurasVotingDocumentNumber(90040902),
  fullName: "409 \u2014 Invalid documentType",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: padHondurasVotingDocumentNumber(10000001)
  }
};
var HONDURAS_VOTING_ERROR_PROFILE_404 = toHondurasVotingProfile(90040401, "404 \u2014 Voting record not found", {
  profileKey: "404-honduras-voting",
  responseType: "error",
  expectedStatus: 404
});
var HONDURAS_POSTMAN_SANDBOX_BY_CODE = {
  [HONDURAS_IDENTITY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(HONDURAS_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        HONDURAS_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [HONDURAS_IDENTITY_ENDPOINT_CODE]: "DNIHN"
    },
    showProfileMeta: false
  },
  [HONDURAS_VOTING_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(HONDURAS_VOTING_SANDBOX_PROFILES, {
      include404: false,
      conflictProfiles: [
        HONDURAS_VOTING_CONFLICT_MISSING_DOCUMENT_NUMBER,
        HONDURAS_VOTING_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }).concat(HONDURAS_VOTING_ERROR_PROFILE_404),
    defaultDocumentNumber: padHondurasVotingDocumentNumber(10000001),
    documentTypeByCode: {
      [HONDURAS_VOTING_ENDPOINT_CODE]: "DNIHN"
    },
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/mexico.postman-sandbox.ts
var MEXICO_IDENTITY_ENDPOINT_CODE = "mexico_identity_lookup";
var MEXICO_COMPANY_ENDPOINT_CODE = "mexico_api_company";
var MEXICO_VEHICLE_ENDPOINT_CODE = "mexico_api_vehicle";
var MEXICO_INE_VALIDATE_ENDPOINT_CODE = "mexico_api_ine_validate";
var MEXICO_INE_OCR_ENDPOINT_CODE = "mexico_api_ine_ocr";
var MEXICO_INE_SANDBOX_CIC = "187639699";
var MEXICO_INE_SANDBOX_OCR = "0276031206745";
var MEXICO_INE_SANDBOX_ELECTOR_KEY = "CSFTGV76061131H400";
var MEXICO_INE_ERROR_DOCUMENT = "900404019";
var MEXICO_COMPANY_DEMO_FME = "N-2021007300";
var MEXICO_COMPANY_SANDBOX_PROFILES = [
  {
    documentNumber: MEXICO_COMPANY_DEMO_FME,
    fullName: "INNOVACION, DISE\xD1O Y CONSTRUCCION \u2014 OTUMBA",
    paramOverrides: {
      documentType: "FME",
      documentNumber: MEXICO_COMPANY_DEMO_FME
    }
  },
  ...Array.from({ length: 10 }, (_, index) => {
    const embedId = 10000001 + index;
    const fme = `N-${embedId}`;
    return {
      documentNumber: fme,
      fullName: `VERIFIK SANDBOX MEXICO ${String(index + 1).padStart(2, "0")} \u2014 FME`,
      paramOverrides: {
        documentType: "FME",
        documentNumber: fme
      }
    };
  })
];
var MEXICO_COMPANY_ERROR_PROFILE_404 = {
  documentNumber: "N-90040401",
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    documentType: "FME",
    documentNumber: "N-90040401"
  }
};
var MEXICO_ERROR_CURP = "LOPE900404HDFNTF01";
var MEXICO_SANDBOX_PROFILES = [
  { documentNumber: "LOPE900501HDFGRN01", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "PERJ900502HDFRRD02", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "MARF900503HDFRNF03", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "GONL900504HDFNHR04", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "RAMA900505HDFMRT05", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "SILD900506HDFLMD06", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "CASV900507HDFSTR07", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "MORR900508HDFMLS08", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "DIAP900509HDFDRY09", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "ROJF900510HDFRJD10", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var MEXICO_CONFLICT_INVALID_DOCUMENT_TYPE = {
  profileKey: "409-invalid-documentType",
  documentNumber: "90040902",
  fullName: "409 \u2014 Invalid documentType",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { documentType: "INVALID", documentNumber: "LOPE900501HDFGRN01" }
};
var MEXICO_ERROR_PROFILE_404 = {
  documentNumber: MEXICO_ERROR_CURP,
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404
};
var MEXICO_POSTMAN_SANDBOX_BY_CODE = {
  [MEXICO_IDENTITY_ENDPOINT_CODE]: {
    profiles: [
      ...MEXICO_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      MEXICO_CONFLICT_INVALID_DOCUMENT_TYPE,
      MEXICO_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: "LOPE900501HDFGRN01",
    documentTypeByCode: {
      [MEXICO_IDENTITY_ENDPOINT_CODE]: "CURP"
    },
    showProfileMeta: false
  },
  [MEXICO_COMPANY_ENDPOINT_CODE]: {
    profiles: [
      ...MEXICO_COMPANY_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      MEXICO_CONFLICT_INVALID_DOCUMENT_TYPE,
      MEXICO_COMPANY_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: MEXICO_COMPANY_DEMO_FME,
    documentTypeByCode: {
      [MEXICO_COMPANY_ENDPOINT_CODE]: "FME"
    },
    showProfileMeta: false
  },
  [MEXICO_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [MEXICO_INE_VALIDATE_ENDPOINT_CODE]: {
    profiles: [
      {
        documentNumber: MEXICO_INE_SANDBOX_CIC,
        fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 CIC",
        paramOverrides: {
          documentType: "INE",
          documentNumber: MEXICO_INE_SANDBOX_CIC
        }
      },
      {
        documentNumber: MEXICO_INE_SANDBOX_OCR,
        fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 OCR",
        paramOverrides: {
          documentType: "INE",
          documentNumber: MEXICO_INE_SANDBOX_OCR
        }
      },
      {
        documentNumber: MEXICO_INE_SANDBOX_ELECTOR_KEY,
        fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 clave de elector",
        paramOverrides: {
          documentType: "INE",
          documentNumber: MEXICO_INE_SANDBOX_ELECTOR_KEY
        }
      },
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      {
        documentNumber: MEXICO_INE_ERROR_DOCUMENT,
        fullName: "404 \u2014 Record not found",
        responseType: "error",
        expectedStatus: 404,
        paramOverrides: {
          documentType: "INE",
          documentNumber: MEXICO_INE_ERROR_DOCUMENT
        }
      }
    ],
    defaultDocumentNumber: MEXICO_INE_SANDBOX_CIC,
    documentTypeByCode: {
      [MEXICO_INE_VALIDATE_ENDPOINT_CODE]: "INE"
    },
    showProfileMeta: false
  },
  [MEXICO_INE_OCR_ENDPOINT_CODE]: {
    profiles: [
      {
        documentNumber: "ine-front.jpg",
        fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 OCR + validate one-shot",
        paramOverrides: {
          front: "https://example.com/ine-front.jpg",
          back: "https://example.com/ine-back.jpg"
        }
      },
      {
        documentNumber: "404",
        fullName: "404 \u2014 Record not found",
        responseType: "error",
        expectedStatus: 404,
        paramOverrides: {
          front: "https://example.com/ine-front-404.jpg"
        }
      }
    ],
    defaultDocumentNumber: "ine-front.jpg",
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/panama.postman-sandbox.ts
var PANAMA_IDENTITY_ENDPOINT_CODE = "panama_api_identity_lookup";
var PANAMA_BUSINESS_ENDPOINT_CODE = "panama_api_business_lookup";
var PANAMA_COMPANY_DEMO_RUC = "155703400-2-2021";
var PANAMA_COMPANY_DEMO_DV = "39";
var PANAMA_DEFAULT_DATE_OF_BIRTH = "15/03/1990";
var PANAMA_ERROR_CEDULA_404 = "9-0040-401";
var PANAMA_SANDBOX_PROFILES = [
  { documentNumber: "8-1000-0001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "8-1000-0002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "8-1000-0003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "8-1000-0004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "8-1000-0005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "8-1000-0006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "8-1000-0007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "8-1000-0008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "8-1000-0009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "8-1000-0010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var PANAMA_ERROR_PROFILE_404 = {
  profileKey: "404-not-found-cedula",
  documentNumber: PANAMA_ERROR_CEDULA_404,
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    documentNumber: PANAMA_ERROR_CEDULA_404,
    dateOfBirth: PANAMA_DEFAULT_DATE_OF_BIRTH
  }
};
var PANAMA_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "8-1000-0001",
    dateOfBirth: PANAMA_DEFAULT_DATE_OF_BIRTH
  }
});
var PANAMA_CONFLICT_INVALID_CEDULA = {
  profileKey: "409-invalid-cedula",
  documentNumber: "90040910",
  fullName: "409 \u2014 Invalid c\xE9dula format",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: {
    documentNumber: "not-a-cedula",
    dateOfBirth: PANAMA_DEFAULT_DATE_OF_BIRTH
  }
};
var PANAMA_CONFLICT_MISSING_DATE_OF_BIRTH = {
  profileKey: "409-missing-dateOfBirth",
  documentNumber: "90040908",
  fullName: "409 \u2014 Missing dateOfBirth",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "", documentNumber: "8-1000-0001" }
};
var PANAMA_CONFLICT_INVALID_DATE_OF_BIRTH = {
  profileKey: "409-invalid-dateOfBirth",
  documentNumber: "90040909",
  fullName: "409 \u2014 Invalid dateOfBirth format",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "not-a-date", documentNumber: "8-1000-0001" }
};
var PANAMA_COMPANY_SANDBOX_PROFILES = [
  {
    documentNumber: PANAMA_COMPANY_DEMO_RUC,
    fullName: "MATA ENTERPRISES, S.A. \u2014 demo RUC",
    paramOverrides: {
      documentType: "RUC",
      documentNumber: PANAMA_COMPANY_DEMO_RUC,
      dv: PANAMA_COMPANY_DEMO_DV
    }
  },
  ...Array.from({ length: 10 }, (_, index) => {
    const embedId = 10000001 + index;
    const ruc = `${embedId}-2-2021`;
    const dv = String(embedId % 100).padStart(2, "0");
    return {
      documentNumber: ruc,
      fullName: `VERIFIK SANDBOX PANAMA ${String(index + 1).padStart(2, "0")} \u2014 RUC`,
      paramOverrides: {
        documentType: "RUC",
        documentNumber: ruc,
        dv
      }
    };
  })
];
var PANAMA_COMPANY_ERROR_PROFILE_404 = {
  profileKey: "404-panama-company",
  documentNumber: "90040401-2-2021",
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    documentType: "RUC",
    documentNumber: "90040401-2-2021",
    dv: "01"
  }
};
var PANAMA_COMPANY_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: PANAMA_COMPANY_DEMO_RUC,
    dv: PANAMA_COMPANY_DEMO_DV
  }
});
var PANAMA_POSTMAN_SANDBOX_BY_CODE = {
  [PANAMA_IDENTITY_ENDPOINT_CODE]: {
    profiles: [
      ...PANAMA_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      PANAMA_CONFLICT_INVALID_DOCUMENT_TYPE,
      PANAMA_CONFLICT_INVALID_CEDULA,
      PANAMA_CONFLICT_MISSING_DATE_OF_BIRTH,
      PANAMA_CONFLICT_INVALID_DATE_OF_BIRTH,
      PANAMA_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: "8-1000-0001",
    defaultDateOfBirth: PANAMA_DEFAULT_DATE_OF_BIRTH,
    documentTypeByCode: {
      [PANAMA_IDENTITY_ENDPOINT_CODE]: "CCPA"
    },
    showProfileMeta: false
  },
  [PANAMA_BUSINESS_ENDPOINT_CODE]: {
    profiles: [
      ...PANAMA_COMPANY_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      PANAMA_COMPANY_CONFLICT_INVALID_DOCUMENT_TYPE,
      PANAMA_COMPANY_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: PANAMA_COMPANY_DEMO_RUC,
    defaultDv: PANAMA_COMPANY_DEMO_DV,
    documentTypeByCode: {
      [PANAMA_BUSINESS_ENDPOINT_CODE]: "RUC"
    },
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/paraguay.postman-sandbox.ts
var PARAGUAY_IDENTITY_ENDPOINT_CODE = "paraguay_api_identity_lookup";
var PARAGUAY_VEHICLE_ENDPOINT_CODE = "paraguay_api_vehicle";
var PARAGUAY_BUSINESS_ENDPOINT_CODE = "paraguay_api_business_lookup";
var PARAGUAY_COMPANY_DEMO_RUC = "80033331";
var PARAGUAY_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var PARAGUAY_COMPANY_SANDBOX_PROFILES = [
  {
    documentNumber: PARAGUAY_COMPANY_DEMO_RUC,
    fullName: "CONDOMINIO MANUEL ADOLFO FERREIRA \u2014 demo RUC",
    paramOverrides: {
      documentType: "RUC",
      documentNumber: PARAGUAY_COMPANY_DEMO_RUC
    }
  },
  ...PARAGUAY_SANDBOX_PROFILES.map((profile) => __spreadProps(__spreadValues({}, profile), {
    fullName: `${profile.fullName?.replace(" \u2014 valid", "")} \u2014 empresa`,
    paramOverrides: {
      documentType: "RUC",
      documentNumber: profile.documentNumber
    }
  }))
];
var PARAGUAY_POSTMAN_SANDBOX_BY_CODE = {
  [PARAGUAY_IDENTITY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(PARAGUAY_SANDBOX_PROFILES, {
      conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER]
    }),
    defaultDocumentNumber: "10000001",
    showProfileMeta: false
  },
  [PARAGUAY_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [PARAGUAY_BUSINESS_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(PARAGUAY_COMPANY_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE
      ]
    }),
    defaultDocumentNumber: PARAGUAY_COMPANY_DEMO_RUC,
    documentTypeByCode: {
      [PARAGUAY_BUSINESS_ENDPOINT_CODE]: "RUC"
    },
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/uruguay.postman-sandbox.ts
var URUGUAY_IDENTITY_ENDPOINT_CODE = "uruguay_api_identity_lookup";
var URUGUAY_DEFAULT_DATE_OF_BIRTH = "15/03/1990";
var URUGUAY_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var URUGUAY_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "10000001",
    dateOfBirth: URUGUAY_DEFAULT_DATE_OF_BIRTH
  }
});
var URUGUAY_CONFLICT_MISSING_DATE_OF_BIRTH = {
  profileKey: "409-missing-dateOfBirth",
  documentNumber: "90040908",
  fullName: "409 \u2014 Missing dateOfBirth",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "", documentNumber: "10000001" }
};
var URUGUAY_CONFLICT_INVALID_DATE_OF_BIRTH = {
  profileKey: "409-invalid-dateOfBirth",
  documentNumber: "90040909",
  fullName: "409 \u2014 Invalid dateOfBirth format",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "not-a-date", documentNumber: "10000001" }
};
var URUGUAY_POSTMAN_SANDBOX_BY_CODE = {
  [URUGUAY_IDENTITY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(URUGUAY_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        URUGUAY_CONFLICT_INVALID_DOCUMENT_TYPE,
        URUGUAY_CONFLICT_MISSING_DATE_OF_BIRTH,
        URUGUAY_CONFLICT_INVALID_DATE_OF_BIRTH
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultDateOfBirth: URUGUAY_DEFAULT_DATE_OF_BIRTH,
    documentTypeByCode: {
      [URUGUAY_IDENTITY_ENDPOINT_CODE]: "CCUY"
    },
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/peru.postman-sandbox.ts
var PERU_V3_IDENTITY_ENDPOINT_CODE = "peru_identity_lookup_v3";
var PERU_SOAT_VEHICLE_ENDPOINT_CODE = "peru_api_vehicle_soat";
var PERU_VEHICLE_ENDPOINT_CODE = "peru_api_vehicle";
var PERU_COMPANY_V3_ENDPOINT_CODE = "peru_api_company_lookup_v3";
var PERU_CE_FOREIGNER_ENDPOINT_CODE = "peru_api_identity_ce_foreigner_id";
var PERU_IDENTITY_EXTRA_V3_ENDPOINT_CODE = "peru_identity_extra_lookup_v3";
var PERU_DRIVER_LICENSE_ENDPOINT_CODE = "peru_api_driver_license_lookup";
var PERU_COMPANY_DEMO_RUC = "20605980008";
var PERU_CE_DEFAULT_DATE_OF_BIRTH = "15/03/1990";
var PERU_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var PERU_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "10000001"
  }
});
var PERU_COMPANY_SANDBOX_PROFILES = [
  {
    documentNumber: PERU_COMPANY_DEMO_RUC,
    fullName: "MERCADOLIBRE PERU S.R.L. \u2014 demo RUC",
    paramOverrides: {
      documentType: "RUC",
      documentNumber: PERU_COMPANY_DEMO_RUC
    }
  },
  ...PERU_SANDBOX_PROFILES.map((profile, index) => ({
    documentNumber: `206${String(10000001 + index).padStart(8, "0")}`,
    fullName: `${profile.fullName?.replace(" \u2014 valid", "")} \u2014 empresa`,
    paramOverrides: {
      documentType: "RUC",
      documentNumber: `206${String(10000001 + index).padStart(8, "0")}`
    }
  }))
];
var PERU_COMPANY_ERROR_PROFILE_404 = {
  documentNumber: "20690040401",
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    documentType: "RUC",
    documentNumber: "20690040401"
  }
};
var PERU_CE_SANDBOX_PROFILES = PERU_SANDBOX_PROFILES.map((profile) => __spreadProps(__spreadValues({}, profile), {
  paramOverrides: {
    documentNumber: profile.documentNumber,
    dateOfBirth: PERU_CE_DEFAULT_DATE_OF_BIRTH
  }
}));
var PERU_CE_CONFLICT_MISSING_DATE_OF_BIRTH = {
  profileKey: "409-missing-dateOfBirth",
  documentNumber: "90040908",
  fullName: "409 \u2014 Missing dateOfBirth",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { dateOfBirth: "", documentNumber: "10000001" }
};
var PERU_POSTMAN_SANDBOX_BY_CODE = {
  [PERU_V3_IDENTITY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(PERU_SANDBOX_PROFILES, {
      conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER, PERU_CONFLICT_INVALID_DOCUMENT_TYPE]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [PERU_V3_IDENTITY_ENDPOINT_CODE]: "DNI"
    },
    showProfileMeta: false
  },
  [PERU_SOAT_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [PERU_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  },
  [PERU_COMPANY_V3_ENDPOINT_CODE]: {
    profiles: [
      ...PERU_COMPANY_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      PERU_CONFLICT_INVALID_DOCUMENT_TYPE,
      PERU_COMPANY_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: PERU_COMPANY_DEMO_RUC,
    documentTypeByCode: {
      [PERU_COMPANY_V3_ENDPOINT_CODE]: "RUC"
    },
    showProfileMeta: false
  },
  [PERU_CE_FOREIGNER_ENDPOINT_CODE]: {
    profiles: [
      ...PERU_CE_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      PERU_CE_CONFLICT_MISSING_DATE_OF_BIRTH
    ],
    defaultDocumentNumber: "10000001",
    defaultDateOfBirth: PERU_CE_DEFAULT_DATE_OF_BIRTH,
    showProfileMeta: false
  },
  [PERU_IDENTITY_EXTRA_V3_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(PERU_SANDBOX_PROFILES, {
      conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER, PERU_CONFLICT_INVALID_DOCUMENT_TYPE]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [PERU_IDENTITY_EXTRA_V3_ENDPOINT_CODE]: "DNI"
    },
    showProfileMeta: false
  },
  [PERU_DRIVER_LICENSE_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(PERU_SANDBOX_PROFILES, {
      conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER, PERU_CONFLICT_INVALID_DOCUMENT_TYPE]
    }),
    defaultDocumentNumber: "10000001",
    documentTypeByCode: {
      [PERU_DRIVER_LICENSE_ENDPOINT_CODE]: "DNI"
    },
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/spain.postman-sandbox.ts
var SPAIN_IDENTITY_ENDPOINT_CODE = "spain_api_identity_lookup";
var SPAIN_COMPANY_ENDPOINT_CODE = "spain_api_company_lookup";
var SPAIN_VEHICLE_ENDPOINT_CODE = "spain_api_vehicle_lookup";
var SPAIN_DEFAULT_EXPIRATION_DATE = "17/07/2026";
var SPAIN_SANDBOX_PROFILES = [
  { documentNumber: "10000001", fullName: "MARIA ELENA LOPEZ GARCIA \u2014 valid" },
  { documentNumber: "10000002", fullName: "JOSE ANTONIO PEREZ RODRIGUEZ \u2014 valid" },
  { documentNumber: "10000003", fullName: "CARLA ISABEL MARTINEZ FERNANDEZ \u2014 valid" },
  { documentNumber: "10000004", fullName: "LUIS ALBERTO GONZALEZ HERRERA \u2014 valid" },
  { documentNumber: "10000005", fullName: "ANA SOFIA RAMIREZ TORRES \u2014 valid" },
  { documentNumber: "10000006", fullName: "DIEGO ALEJANDRO SILVA MENDOZA \u2014 valid" },
  { documentNumber: "10000007", fullName: "VALENTINA ANDREA CASTRO VARGAS \u2014 valid" },
  { documentNumber: "10000008", fullName: "RICARDO JOSE MORALES SUAREZ \u2014 valid" },
  { documentNumber: "10000009", fullName: "PATRICIA CAROLINA DIAZ REYES \u2014 valid" },
  { documentNumber: "10000010", fullName: "FERNANDO MIGUEL ROJAS DELGADO \u2014 valid" }
];
var SPAIN_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "10000001",
    expirationDate: SPAIN_DEFAULT_EXPIRATION_DATE
  }
});
var SPAIN_CONFLICT_MISSING_EXPIRATION_DATE = {
  profileKey: "409-missing-expirationDate",
  documentNumber: "90040911",
  fullName: "409 \u2014 Missing expirationDate",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { expirationDate: "", documentNumber: "10000001" }
};
var SPAIN_CONFLICT_INVALID_EXPIRATION_DATE = {
  profileKey: "409-invalid-expirationDate",
  documentNumber: "90040912",
  fullName: "409 \u2014 Invalid expirationDate format",
  responseType: "error",
  expectedStatus: 409,
  paramOverrides: { expirationDate: "not-a-date", documentNumber: "10000001" }
};
var SPAIN_COMPANY_SANDBOX_PROFILES = Array.from({ length: 10 }, (_, index) => {
  const nif = `B${String(10000001 + index).padStart(8, "0")}`;
  return {
    documentNumber: nif,
    fullName: `VERIFIK SANDBOX ESPANA ${String(index + 1).padStart(2, "0")} \u2014 NIF`,
    paramOverrides: {
      documentType: "NIF",
      documentNumber: nif
    }
  };
});
var SPAIN_COMPANY_ERROR_PROFILE_404 = {
  documentNumber: "B90040401",
  fullName: "404 \u2014 Record not found",
  responseType: "error",
  expectedStatus: 404,
  paramOverrides: {
    documentType: "NIF",
    documentNumber: "B90040401"
  }
};
var SPAIN_COMPANY_CONFLICT_INVALID_DOCUMENT_TYPE = __spreadProps(__spreadValues({}, SANDBOX_CONFLICT_INVALID_DOCUMENT_TYPE), {
  paramOverrides: {
    documentType: "INVALID",
    documentNumber: "B10000001"
  }
});
var SPAIN_POSTMAN_SANDBOX_BY_CODE = {
  [SPAIN_IDENTITY_ENDPOINT_CODE]: {
    profiles: appendSandboxResponseProfiles(SPAIN_SANDBOX_PROFILES, {
      conflictProfiles: [
        SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
        SPAIN_CONFLICT_INVALID_DOCUMENT_TYPE,
        SPAIN_CONFLICT_MISSING_EXPIRATION_DATE,
        SPAIN_CONFLICT_INVALID_EXPIRATION_DATE
      ]
    }),
    defaultDocumentNumber: "10000001",
    defaultExpirationDate: SPAIN_DEFAULT_EXPIRATION_DATE,
    documentTypeByCode: {
      [SPAIN_IDENTITY_ENDPOINT_CODE]: "DNIES"
    },
    showProfileMeta: false
  },
  [SPAIN_COMPANY_ENDPOINT_CODE]: {
    profiles: [
      ...SPAIN_COMPANY_SANDBOX_PROFILES,
      SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER,
      SPAIN_COMPANY_CONFLICT_INVALID_DOCUMENT_TYPE,
      SPAIN_COMPANY_ERROR_PROFILE_404
    ],
    defaultDocumentNumber: "B10000001",
    documentTypeByCode: {
      [SPAIN_COMPANY_ENDPOINT_CODE]: "NIF"
    },
    showProfileMeta: false
  },
  [SPAIN_VEHICLE_ENDPOINT_CODE]: {
    profiles: appendVehiclePlateSandboxProfiles(),
    defaultDocumentNumber: SANDBOX_DEFAULT_PLATE,
    defaultPlate: SANDBOX_DEFAULT_PLATE,
    showProfileMeta: false
  }
};

// src/app/modules/postman/sandbox/countries/venezuela.postman-sandbox.ts
var VENEZUELA_CEDULA_ENDPOINT_CODE = "venezuela_api_identity_lookup";
var VENEZUELA_FOREIGNER_ENDPOINT_CODE = "venezuela_foreigner_api";
var VENEZUELA_SANDBOX_PROFILES = [
  {
    documentNumber: "10000001",
    fullName: "MARIA ELENA LOPEZ GARCIA",
    gender: "F",
    birthDate: "1990-03-15"
  },
  {
    documentNumber: "10000002",
    fullName: "JOSE ANTONIO PEREZ RODRIGUEZ",
    gender: "M",
    birthDate: "1985-07-22"
  },
  {
    documentNumber: "10000003",
    fullName: "CARLA ISABEL MARTINEZ FERNANDEZ",
    gender: "F",
    birthDate: "1992-11-08"
  },
  {
    documentNumber: "10000004",
    fullName: "LUIS ALBERTO GONZALEZ HERRERA",
    gender: "M",
    birthDate: "1988-01-30"
  },
  {
    documentNumber: "10000005",
    fullName: "ANA SOFIA RAMIREZ TORRES",
    gender: "F",
    birthDate: "1995-05-12"
  },
  {
    documentNumber: "10000006",
    fullName: "DIEGO ALEJANDRO SILVA MENDOZA",
    gender: "M",
    birthDate: "1983-09-04"
  },
  {
    documentNumber: "10000007",
    fullName: "VALENTINA ANDREA CASTRO VARGAS",
    gender: "F",
    birthDate: "1998-12-19"
  },
  {
    documentNumber: "10000008",
    fullName: "RICARDO JOSE MORALES SUAREZ",
    gender: "M",
    birthDate: "1979-06-27"
  },
  {
    documentNumber: "10000009",
    fullName: "PATRICIA CAROLINA DIAZ REYES",
    gender: "F",
    birthDate: "1991-04-03"
  },
  {
    documentNumber: "10000010",
    fullName: "FERNANDO MIGUEL ROJAS DELGADO",
    gender: "M",
    birthDate: "1987-08-14"
  }
];
var buildVenezuelaConfig = (documentTypeByCode, showProfileMeta = true, options = {}) => ({
  profiles: appendSandboxResponseProfiles(VENEZUELA_SANDBOX_PROFILES, {
    include500: options.include500,
    conflictProfiles: options.conflictProfiles
  }),
  defaultDocumentNumber: "10000001",
  documentTypeByCode,
  showProfileMeta
});
var VENEZUELA_POSTMAN_SANDBOX_BY_CODE = {
  [VENEZUELA_CEDULA_ENDPOINT_CODE]: buildVenezuelaConfig({
    [VENEZUELA_CEDULA_ENDPOINT_CODE]: "CCVE"
  }, true, { include500: true, conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER] }),
  [VENEZUELA_FOREIGNER_ENDPOINT_CODE]: buildVenezuelaConfig({
    [VENEZUELA_FOREIGNER_ENDPOINT_CODE]: "CEVE"
  }, false, { conflictProfiles: [SANDBOX_CONFLICT_MISSING_DOCUMENT_NUMBER] })
};

// src/app/modules/postman/sandbox/postman-sandbox.registry.ts
var POSTMAN_SANDBOX_BY_ENDPOINT_CODE = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, VENEZUELA_POSTMAN_SANDBOX_BY_CODE), COLOMBIA_POSTMAN_SANDBOX_BY_CODE), ARGENTINA_POSTMAN_SANDBOX_BY_CODE), CHILE_POSTMAN_SANDBOX_BY_CODE), ECUADOR_POSTMAN_SANDBOX_BY_CODE), COSTA_RICA_POSTMAN_SANDBOX_BY_CODE), GUATEMALA_POSTMAN_SANDBOX_BY_CODE), HONDURAS_POSTMAN_SANDBOX_BY_CODE), PARAGUAY_POSTMAN_SANDBOX_BY_CODE), MEXICO_POSTMAN_SANDBOX_BY_CODE), EL_SALVADOR_POSTMAN_SANDBOX_BY_CODE), BRAZIL_POSTMAN_SANDBOX_BY_CODE), BOLIVIA_POSTMAN_SANDBOX_BY_CODE), PANAMA_POSTMAN_SANDBOX_BY_CODE), URUGUAY_POSTMAN_SANDBOX_BY_CODE), PERU_POSTMAN_SANDBOX_BY_CODE), SPAIN_POSTMAN_SANDBOX_BY_CODE), CANADA_POSTMAN_SANDBOX_BY_CODE), DOMINICAN_REPUBLIC_POSTMAN_SANDBOX_BY_CODE), USA_POSTMAN_SANDBOX_BY_CODE), INDIA_POSTMAN_SANDBOX_BY_CODE), WORLD_POSTMAN_SANDBOX_BY_CODE), UTILITIES_POSTMAN_SANDBOX_BY_CODE);

// src/app/modules/postman/sandbox/postman-sandbox.util.ts
var DEFAULT_POSTMAN_SANDBOX_I18N_KEY = "sandboxProfiles";
var getPostmanSandboxConfig = (code) => {
  if (!code) {
    return null;
  }
  return POSTMAN_SANDBOX_BY_ENDPOINT_CODE[code] ?? null;
};
var isPostmanSandboxEndpoint = (code) => !!getPostmanSandboxConfig(code);
var getPostmanSandboxProfiles = (code) => getPostmanSandboxConfig(code)?.profiles ?? [];
var findMatchingPostmanSandboxProfile = (code, params) => {
  const profiles = getPostmanSandboxProfiles(code);
  return profiles.find((profile) => matchesPostmanSandboxProfile(profile, params)) ?? null;
};
var getPostmanSandboxProfilePickerValue = (code, params) => {
  const profile = findMatchingPostmanSandboxProfile(code, params);
  return profile ? getPostmanSandboxProfileKey(profile) : "";
};
var getPostmanSandboxI18nKey = (code) => getPostmanSandboxConfig(code)?.i18nKey ?? DEFAULT_POSTMAN_SANDBOX_I18N_KEY;
var getPostmanSandboxShowProfileMeta = (code) => getPostmanSandboxConfig(code)?.showProfileMeta ?? true;
var getPostmanSandboxDefaultDocumentType = (code) => {
  if (!code) {
    return null;
  }
  return getPostmanSandboxConfig(code)?.documentTypeByCode?.[code] ?? null;
};
var applySandboxParamValue = (params, key, value) => {
  if (!value) {
    return;
  }
  const param = params.find((p) => p.key === key);
  if (param && !param.value?.trim()) {
    param.value = value;
  }
};
var applyPostmanSandboxParamDefaults = (endpoint, documentNumber) => {
  const config = getPostmanSandboxConfig(endpoint.code);
  if (!config?.profiles.length || !endpoint.params?.length) {
    return;
  }
  const docNumberParam = endpoint.params.find((p) => p.key === "documentNumber");
  const processNumberParam = endpoint.params.find((p) => p.key === "processNumber");
  const plateParam = endpoint.params.find((p) => p.key === "plate");
  const vinParam = endpoint.params.find((p) => p.key === "vin");
  const codeFasecoldaParam = endpoint.params.find((p) => p.key === "codeFasecolda");
  const businessParam = endpoint.params.find((p) => p.key === "business");
  const fullNameParam = endpoint.params.find((p) => p.key === "fullName");
  if (businessParam && !docNumberParam && !processNumberParam && !plateParam && !vinParam) {
    if (businessParam.value?.trim()) {
      return;
    }
    businessParam.value = config.defaultBusiness ?? config.defaultDocumentNumber;
    applySandboxParamValue(endpoint.params, "province", config.defaultProvince);
    return;
  }
  if (fullNameParam && !docNumberParam && !processNumberParam && !plateParam && !vinParam) {
    if (fullNameParam.value?.trim()) {
      return;
    }
    const resolvedKey = documentNumber ?? config.defaultDocumentNumber;
    const profile2 = config.profiles.find((p) => p.documentNumber === resolvedKey) ?? config.profiles[0];
    fullNameParam.value = profile2?.paramOverrides?.fullName ?? profile2?.fullName ?? "";
    return;
  }
  if (codeFasecoldaParam && !docNumberParam && !processNumberParam && !plateParam && !vinParam) {
    if (codeFasecoldaParam.value?.trim()) {
      return;
    }
    const resolvedCode = documentNumber ?? config.defaultCodeFasecolda ?? config.defaultDocumentNumber;
    codeFasecoldaParam.value = resolvedCode;
    return;
  }
  if (vinParam && !docNumberParam && !processNumberParam && !plateParam) {
    if (vinParam.value?.trim()) {
      return;
    }
    const resolvedVin = documentNumber ?? config.defaultVin ?? config.defaultDocumentNumber;
    vinParam.value = resolvedVin;
    return;
  }
  if (plateParam && !docNumberParam && !processNumberParam) {
    if (plateParam.value?.trim()) {
      return;
    }
    const resolvedPlate = documentNumber ?? config.defaultPlate ?? config.defaultDocumentNumber;
    plateParam.value = resolvedPlate;
    applySandboxParamValue(endpoint.params, "state", config.defaultState);
    const policyNumberParam = endpoint.params.find((p) => p.key === "policyNumber");
    if (policyNumberParam && !policyNumberParam.value?.trim()) {
      const profile2 = config.profiles.find((p) => p.paramOverrides?.plate === resolvedPlate || p.plate === resolvedPlate || p.documentNumber === resolvedPlate) ?? config.profiles.find((profile3) => profile3.responseType !== "error") ?? config.profiles[0];
      applySandboxParamValue(endpoint.params, "policyNumber", profile2?.paramOverrides?.policyNumber);
    }
    applySandboxParamValue(endpoint.params, "permitNumber", config.profiles.find((p) => p.paramOverrides?.plate === resolvedPlate || p.plate === resolvedPlate || p.documentNumber === resolvedPlate)?.paramOverrides?.permitNumber ?? config.defaultPermitNumber);
    return;
  }
  if (processNumberParam && !docNumberParam) {
    if (processNumberParam.value?.trim()) {
      return;
    }
    const resolvedProcessNumber = documentNumber ?? config.defaultProcessNumber ?? config.defaultDocumentNumber;
    processNumberParam.value = resolvedProcessNumber;
    return;
  }
  if (!docNumberParam) {
    const allParamsEmpty = endpoint.params.every((param) => !param.value?.trim());
    if (!allParamsEmpty) {
      return;
    }
    const firstSuccessProfile = config.profiles.find((profile2) => profile2.responseType !== "error") ?? config.profiles[0];
    if (firstSuccessProfile?.paramOverrides) {
      Object.entries(firstSuccessProfile.paramOverrides).forEach(([key, value]) => {
        applySandboxParamValue(endpoint.params, key, value);
      });
    }
    return;
  }
  if (docNumberParam.value?.trim()) {
    return;
  }
  const resolvedDocumentNumber = documentNumber ?? config.defaultDocumentNumber;
  docNumberParam.value = resolvedDocumentNumber;
  const profile = config.profiles.find((p) => p.documentNumber === resolvedDocumentNumber) ?? config.profiles[0];
  const defaultDocumentType = getPostmanSandboxDefaultDocumentType(endpoint.code);
  applySandboxParamValue(endpoint.params, "documentType", defaultDocumentType ?? void 0);
  applySandboxParamValue(endpoint.params, "expeditionDate", profile?.expeditionDate ?? config.defaultExpeditionDate);
  applySandboxParamValue(endpoint.params, "city", config.defaultCity);
  applySandboxParamValue(endpoint.params, "quality", config.defaultQuality);
  applySandboxParamValue(endpoint.params, "dateOfBirth", config.defaultDateOfBirth);
  applySandboxParamValue(endpoint.params, "date", config.defaultDate);
  applySandboxParamValue(endpoint.params, "category", config.defaultCategory);
  applySandboxParamValue(endpoint.params, "firstSurname", config.defaultFirstSurname);
  applySandboxParamValue(endpoint.params, "serialNumber", config.defaultSerialNumber);
  applySandboxParamValue(endpoint.params, "lastName", profile?.paramOverrides?.lastName ?? config.defaultLastName);
  applySandboxParamValue(endpoint.params, "firstName", profile?.paramOverrides?.firstName);
  applySandboxParamValue(endpoint.params, "dv", profile?.paramOverrides?.dv ?? config.defaultDv);
  applySandboxParamValue(endpoint.params, "expirationDate", config.defaultExpirationDate);
  applySandboxParamValue(endpoint.params, "plate", profile?.plate ?? config.defaultPlate);
};

// src/app/modules/postman/postman-docs-params.util.ts
var SYSTEM_PARAM_KEYS = /* @__PURE__ */ new Set(["includeCost", "force"]);
var FALLBACK_DOC_PARAMS = {
  colombia_api_driver: [{ field: "primerApellido", description: "First last name" }]
};
var collectDocParamRows = (endpoint) => {
  const byField = /* @__PURE__ */ new Map();
  for (const locale of Object.values(endpoint.docs || {})) {
    for (const row of locale?.params ?? []) {
      const field = row.field?.trim();
      if (!field || byField.has(field) || SYSTEM_PARAM_KEYS.has(field))
        continue;
      byField.set(field, row);
    }
  }
  for (const row of FALLBACK_DOC_PARAMS[endpoint.code || ""] || []) {
    if (!byField.has(row.field))
      byField.set(row.field, row);
  }
  return [...byField.values()];
};
var requiredWhenForDocField = (code, field) => {
  if (code === "colombia_api_driver" && field === "primerApellido") {
    return { field: "documentType", in: ["PA"] };
  }
  return void 0;
};
var mergeParamsFromDocs = (endpoint) => {
  const existing = endpoint.params ?? [];
  const have = new Set(existing.map((param) => param.key));
  const extras = collectDocParamRows(endpoint).filter((row) => !have.has(row.field)).map((row) => {
    const requiredWhen = requiredWhenForDocField(endpoint.code, row.field);
    return __spreadValues({
      key: row.field,
      value: "",
      type: "String",
      required: false,
      description: row.description
    }, requiredWhen ? { requiredWhen } : {});
  });
  if (!extras.length)
    return endpoint;
  return __spreadProps(__spreadValues({}, endpoint), { params: [...existing, ...extras] });
};
var formatCatalogPrice = (value, maxDecimals = 6) => {
  if (value == null || !Number.isFinite(value))
    return "0";
  return parseFloat(value.toFixed(maxDecimals)).toString();
};
var roundCatalogNumber = (value, maxDecimals = 6) => {
  if (!Number.isFinite(value))
    return value;
  return parseFloat(value.toFixed(maxDecimals));
};
var sanitizeDisplayPayload = (value) => {
  if (typeof value === "number")
    return roundCatalogNumber(value);
  if (Array.isArray(value))
    return value.map((item) => sanitizeDisplayPayload(item));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [
      key,
      sanitizeDisplayPayload(item)
    ]));
  }
  return value;
};

// src/app/modules/postman/postman-endpoint-detail.cache.ts
var POSTMAN_ENDPOINT_DETAIL_CACHE_KEY = "smartAgent_postmanEndpointDetails";
var POSTMAN_ENDPOINT_DETAIL_CACHE_LIMIT = 20;
var POSTMAN_ENDPOINT_DETAIL_CACHE_TTL_MS = 30 * 60 * 1e3;
var memoryByStorage = /* @__PURE__ */ new WeakMap();
var sessionStorageOrNull = () => {
  try {
    return typeof sessionStorage === "undefined" ? null : sessionStorage;
  } catch {
    return null;
  }
};
var pruneExpired = (entries, now, ttlMs) => entries.filter((entry) => now - entry.savedAt <= ttlMs);
var featureAliases = (key, feature) => {
  const row = feature && typeof feature === "object" ? feature : {};
  return [...new Set([key, String(row.code || ""), String(row._id || "")].filter(Boolean))];
};
var entryMatchesKey = (entry, key) => featureAliases(entry.key, entry.feature).includes(key);
var readPayload = (storage) => {
  const cached = memoryByStorage.get(storage);
  if (cached)
    return cached;
  try {
    const raw = storage.getItem(POSTMAN_ENDPOINT_DETAIL_CACHE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    const entries = parsed?.v === 1 && Array.isArray(parsed.entries) ? parsed.entries : [];
    memoryByStorage.set(storage, entries);
    return entries;
  } catch {
    memoryByStorage.set(storage, []);
    return [];
  }
};
var persist = (storage, entries) => {
  memoryByStorage.set(storage, entries);
  try {
    storage.setItem(POSTMAN_ENDPOINT_DETAIL_CACHE_KEY, JSON.stringify({ v: 1, entries }));
  } catch {
  }
};
var createPostmanEndpointDetailCache = (options) => {
  const storage = options?.storage === void 0 ? sessionStorageOrNull() : options.storage;
  const now = options?.now ?? Date.now;
  const limit = options?.limit ?? POSTMAN_ENDPOINT_DETAIL_CACHE_LIMIT;
  const ttlMs = options?.ttlMs ?? POSTMAN_ENDPOINT_DETAIL_CACHE_TTL_MS;
  return {
    get: (key) => {
      if (!storage || !key)
        return null;
      const fresh = pruneExpired(readPayload(storage), now(), ttlMs);
      const index = fresh.findIndex((entry2) => entryMatchesKey(entry2, key));
      if (index < 0) {
        persist(storage, fresh);
        return null;
      }
      const [entry] = fresh.splice(index, 1);
      fresh.unshift(entry);
      persist(storage, fresh);
      return entry.feature;
    },
    set: (key, feature) => {
      if (!storage || !key || feature == null)
        return;
      const aliases = featureAliases(key, feature);
      const fresh = pruneExpired(readPayload(storage), now(), ttlMs).filter((entry) => !aliases.some((alias) => entryMatchesKey(entry, alias)));
      fresh.unshift({ key: aliases[0], savedAt: now(), feature });
      persist(storage, fresh.slice(0, limit));
    },
    clear: () => {
      if (!storage)
        return;
      memoryByStorage.delete(storage);
      try {
        storage.removeItem(POSTMAN_ENDPOINT_DETAIL_CACHE_KEY);
      } catch {
      }
    }
  };
};
var postmanEndpointDetailCache = createPostmanEndpointDetailCache();

// src/app/modules/postman/postman.service.ts
var PostmanService = class _PostmanService {
  setCategoryFilter(categories) {
    this.categoryFilter.set(categories?.length ? [...categories] : null);
  }
  clearCategoryFilter() {
    this.categoryFilter.set(null);
  }
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._sessionService = inject(SessionService);
    this._userService = inject(UserService);
    this._authService = inject(AuthService);
    this._agentWalletService = inject(AgentWalletService);
    this._accountEnv = inject(AccountEnvironmentService);
    this._transloco = inject(TranslocoService);
    this.endpoints = signal(API_ENDPOINTS);
    this.categoryFilter = signal(null);
    this.visibleEndpoints = computed(() => {
      const all = this.endpoints();
      const categories = this.categoryFilter();
      if (!categories?.length)
        return all;
      return all.filter((ep) => isBiometricsEndpoint(ep.category, ep.code));
    });
    this.layoutFolders = signal([]);
    this.layoutEndpointsRaw = signal([]);
    this.layoutLoaded = signal(false);
    this.layoutLoading = signal(false);
    this.layoutError = signal(null);
    this.useLayoutSidebar = computed(() => {
      if (!this.layoutLoaded()) {
        return false;
      }
      return this._canUseWorkspacePostmanApis();
    });
    this.selectedEndpoint = signal(null);
    this.selectedCountry = signal(DEFAULT_POSTMAN_COUNTRY);
    this.catalogCountries = signal([]);
    this.detailLoading = signal(false);
    this.response = signal(null);
    this.responseTime = signal(null);
    this.isLoading = signal(false);
    this.error = signal(null);
    this.paymentMethod = signal("credits");
    this._featureCache = /* @__PURE__ */ new Map();
    this._loadedScopeKey = "";
    this._requestedScopeKey = "";
    this.loadExplorerData();
    this._userService.user$.pipe(skip(1), map((user) => ({
      identityKey: user?._id || user?.id || null,
      workspacePostman: this._canUseWorkspacePostmanApis()
    })), distinctUntilChanged((a, b) => a.identityKey === b.identityKey && a.workspacePostman === b.workspacePostman)).subscribe(() => {
      this.loadExplorerData();
    });
  }
  _authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  _apiUrl() {
    return environment.apiUrl;
  }
  /**
   * Workspace-only Postman APIs (`/v2/app-features/my-list`, `/v2/postman/layout`, folder CRUD)
   * require JWT claims `clientId`, `staffId`, or `superAdminId`. Smart Agent tokens that are only
   * “logged in” to a project often omit those claims; catalog + explorer must use `/v2/public/app-features`.
   */
  _canUseWorkspacePostmanApis() {
    if (!this._sessionService.isTokenValid()) {
      return false;
    }
    const token = localStorage.getItem("accessToken");
    if (!token?.trim()) {
      return false;
    }
    const payload = AuthUtils.getJwtPayload(token);
    if (!payload) {
      return false;
    }
    const clientId = payload["clientId"];
    const staffId = payload["staffId"];
    const superAdminId = payload["superAdminId"];
    return Boolean(clientId ?? staffId ?? superAdminId);
  }
  /** Same as `_canUseWorkspacePostmanApis` — exposed for UI (e.g. request editor) that must not call workspace-only APIs as guests. */
  canUseWorkspacePostmanApis() {
    return this._canUseWorkspacePostmanApis();
  }
  /**
   * Loads the country index, a slim country-scoped catalog, and Postman layout.
   */
  loadExplorerData(countries) {
    this.layoutLoading.set(true);
    this.layoutError.set(null);
    this._featureCache.clear();
    const scope = countries?.length ? countries : catalogCountryScope(this.selectedCountry());
    this._requestedScopeKey = countryCacheKey(scope);
    forkJoin({
      countries: this._fetchCatalogCountries(),
      features: this._fetchSlimFeatures(scope),
      layout: this._fetchLayout()
    }).pipe(tap(({ countries: countryRows, features, layout }) => {
      this.catalogCountries.set(countryRows);
      this._applyLayoutPayload(layout);
      this._commitFeaturePayload(scope, features);
    }), finalize(() => {
      this.layoutLoading.set(false);
      this.layoutLoaded.set(true);
    })).subscribe();
  }
  /**
   * Fetches slim features for the given countries (plus cache). Used when switching pills.
   */
  loadFeaturesForCountries(countries) {
    const scope = countries.length ? countries : catalogCountryScope(this.selectedCountry());
    const cacheKey = countryCacheKey(scope);
    this._requestedScopeKey = cacheKey;
    const cached = this._featureCache.get(cacheKey);
    if (cached && cacheKey === this._loadedScopeKey) {
      return;
    }
    if (cached) {
      this._loadedScopeKey = cacheKey;
      this._setEndpointsFromCatalog(cached);
      return;
    }
    this.layoutLoading.set(true);
    this._fetchSlimFeatures(scope).pipe(tap((features) => this._commitFeaturePayload(scope, features)), finalize(() => this.layoutLoading.set(false))).subscribe();
  }
  /**
   * Opens an endpoint by feature code, loading its country scope when needed.
   */
  openEndpointByCode(code) {
    const existing = this.endpoints().find((endpoint) => endpoint.code === code);
    if (existing) {
      this.selectEndpoint(existing);
      return;
    }
    this._fetchFeatureDetail(code).subscribe((feature) => {
      if (!feature)
        return;
      const country = feature.country || null;
      if (country && this.selectedCountry() !== country) {
        this.selectedCountry.set(country);
      }
      this.loadFeaturesForCountries(catalogCountryScope(country));
      this.selectEndpoint(this._createEndpointFromFeature(feature, this._apiUrl()));
    });
  }
  _fetchCatalogCountries() {
    const apiUrl = this._apiUrl();
    const workspaceUrl = `${apiUrl}/v2/app-features/countries`;
    const publicUrl = `${apiUrl}/v2/public/app-features/countries`;
    const source$ = this._canUseWorkspacePostmanApis() ? this._httpClient.get(workspaceUrl).pipe(catchError((err) => {
      console.error("Failed to fetch catalog countries", err);
      return this._httpClient.get(publicUrl);
    })) : this._httpClient.get(publicUrl);
    return source$.pipe(map((payload) => extractCountryRows(payload)), catchError((err) => {
      console.error("Failed to fetch catalog countries", err);
      return of([]);
    }));
  }
  _catalogListParams(countries) {
    return countries.filter(Boolean).reduce((params, country) => params.append("in_country", country), new HttpParams());
  }
  _fetchSlimFeatures(countries) {
    const apiUrl = this._apiUrl();
    const params = this._catalogListParams(countries);
    const workspaceUrl = `${apiUrl}/v2/app-features/my-list`;
    const publicUrl = `${apiUrl}/v2/public/app-features`;
    const public$ = this._httpClient.get(publicUrl, { params });
    const source$ = this._canUseWorkspacePostmanApis() ? this._httpClient.get(workspaceUrl, { params }).pipe(catchError((err) => {
      if (isCatalogTransportFailure(err)) {
        console.error("Catalog list transport failed; retrying public slim list", err);
      } else {
        console.error("Failed to fetch features", err);
      }
      return public$;
    })) : public$;
    return source$.pipe(catchError((err) => {
      console.error("Failed to fetch features", err);
      return of({ data: [] });
    }));
  }
  _fetchLayout() {
    if (!this._canUseWorkspacePostmanApis()) {
      return of(null);
    }
    return this._httpClient.get(`${this._apiUrl()}/v2/postman/layout`, {
      headers: this._authHeaders()
    }).pipe(catchError((err) => {
      console.error("Failed to fetch postman layout", err);
      this.layoutError.set("postman.sidebar.layoutLoadError");
      return of(null);
    }));
  }
  _applyLayoutPayload(layout) {
    const layoutData = layout?.data ?? null;
    this.layoutFolders.set((layoutData?.folders ?? []).map((f) => this._normalizeFolderDto(f)));
    this.layoutEndpointsRaw.set((layoutData?.endpoints ?? []).map((e) => this._normalizeEndpointDto(e)));
  }
  _commitFeaturePayload(countries, features) {
    const apiUrl = this._apiUrl();
    const allFeatures = extractFeatureRows(features).filter((feature) => feature?.isAvailable !== false && feature?.deleted !== true);
    const catalogFeatures = allFeatures.filter((feature) => feature?.catalogHidden !== true);
    const dynamicEndpoints = catalogFeatures.map((feature) => this._createEndpointFromFeature(feature, apiUrl));
    const mergedCatalog = attachColombiaCedulaPremiumPricing(this._mergeEndpoints(API_ENDPOINTS, dynamicEndpoints), allFeatures);
    const withLayout = this._applyPostmanLayout(mergedCatalog, {
      folders: this.layoutFolders(),
      endpoints: this.layoutEndpointsRaw()
    });
    const scoped = withLayout.filter((endpoint) => countries.some((country) => endpointMatchesCountryFilter(endpoint.country, country)));
    const cacheKey = countryCacheKey(countries);
    this._featureCache.set(cacheKey, scoped);
    if (cacheKey !== this._requestedScopeKey) {
      return;
    }
    this._loadedScopeKey = cacheKey;
    this._setEndpointsFromCatalog(scoped);
  }
  _setEndpointsFromCatalog(withLayout) {
    this.endpoints.set(withLayout);
    this.selectedEndpoint.update((current) => {
      if (!current)
        return current;
      const match = withLayout.find((endpoint) => this._isSameEndpoint(endpoint, current));
      if (!match)
        return current;
      return __spreadProps(__spreadValues({}, match), {
        headers: current.headers?.length ? current.headers : match.headers,
        params: this._mergeEndpointParams(current.params, match.params),
        body: current.body ?? match.body,
        docs: current.docs ?? match.docs,
        dependencies: current.dependencies?.length ? current.dependencies : match.dependencies
      });
    });
  }
  _rememberFeatureDetail(feature) {
    const row = feature && typeof feature === "object" ? feature : null;
    const key = row?.code || row?._id;
    if (!key)
      return;
    postmanEndpointDetailCache.set(String(key), feature);
  }
  _fetchFeatureDetail(codeOrId) {
    const cached = postmanEndpointDetailCache.get(codeOrId);
    if (cached)
      return of(cached);
    const apiUrl = this._apiUrl();
    const public$ = this._httpClient.get(`${apiUrl}/v2/public/app-features/${encodeURIComponent(codeOrId)}`);
    const workspace$ = this._canUseWorkspacePostmanApis() && /^[a-fA-F0-9]{24}$/.test(codeOrId) ? this._httpClient.get(`${apiUrl}/v2/app-features/${codeOrId}`).pipe(catchError(() => public$)) : public$;
    return workspace$.pipe(map((payload) => payload?.data ?? null), tap((feature) => this._rememberFeatureDetail(feature)), catchError((err) => {
      console.error("Failed to fetch feature detail", err);
      return of(null);
    }));
  }
  /**
   * Loads docs and extra params for one slim catalog row.
   */
  hydrateEndpointDetails(endpoint) {
    if (!catalogNeedsDetailHydration(endpoint)) {
      return of(endpoint);
    }
    const codeOrId = endpoint.code || endpoint.id;
    if (!codeOrId) {
      return of(endpoint);
    }
    const cached = postmanEndpointDetailCache.get(codeOrId);
    if (cached) {
      return of(this._mergeHydratedFeature(endpoint, cached));
    }
    this.detailLoading.set(true);
    return this._fetchFeatureDetail(codeOrId).pipe(map((feature) => feature ? this._mergeHydratedFeature(endpoint, feature) : endpoint), finalize(() => this.detailLoading.set(false)));
  }
  _mergeHydratedFeature(endpoint, feature) {
    const hydrated = this._createEndpointFromFeature(feature, this._apiUrl());
    return __spreadProps(__spreadValues(__spreadValues({}, endpoint), hydrated), {
      headers: endpoint.headers?.length ? endpoint.headers : hydrated.headers,
      params: this._mergeEndpointParams(endpoint.params, hydrated.params),
      body: endpoint.body ?? hydrated.body,
      docs: hydrated.docs ?? endpoint.docs,
      dependencies: hydrated.dependencies?.length ? hydrated.dependencies : endpoint.dependencies
    });
  }
  _normalizeFolderDto(f) {
    return __spreadProps(__spreadValues({}, f), {
      _id: String(f._id),
      parentFolder: f.parentFolder != null ? String(f.parentFolder) : null
    });
  }
  _normalizeEndpointDto(e) {
    return __spreadProps(__spreadValues({}, e), {
      _id: String(e._id),
      folder: e.folder != null ? String(e.folder) : null
    });
  }
  _applyPostmanLayout(catalog, layoutData) {
    if (!layoutData || !layoutData.endpoints?.length && !layoutData.folders?.length) {
      return catalog.map((ep) => __spreadValues({}, ep));
    }
    const folderIds = new Set((layoutData.folders || []).map((f) => String(f._id)));
    const byCode = /* @__PURE__ */ new Map();
    for (const row of layoutData.endpoints || []) {
      if (row.appFeatureCode) {
        byCode.set(row.appFeatureCode, this._normalizeEndpointDto(row));
      }
    }
    return catalog.map((ep) => {
      if (!ep.code) {
        return __spreadValues({}, ep);
      }
      const row = byCode.get(ep.code);
      if (!row) {
        return __spreadValues({}, ep);
      }
      let folderId = null;
      if (row.folder) {
        const fid = String(row.folder);
        folderId = folderIds.has(fid) ? fid : null;
      }
      return __spreadProps(__spreadValues({}, ep), {
        postmanEndpointId: row._id,
        postmanFolderId: folderId,
        layoutSortOrder: typeof row.sortOrder === "number" ? row.sortOrder : 0,
        layoutDisplayName: row.displayName?.trim() ? row.displayName : void 0,
        isFavorite: !!row.isFavorite
      });
    });
  }
  /**
   * Normalizes API `baseCategory` / `group` to a stable UPPER_SNAKE string for
   * grouping and `categories.*` i18n keys (avoids keys with spaces or apostrophes).
   */
  _mapCategory(category) {
    if (!category) {
      return "OTHER";
    }
    return category.trim().toUpperCase().replace(/'/g, "").replace(/[\s-]+/g, "_").replace(/_+/g, "_");
  }
  _createEndpointFromFeature(feature, apiUrl) {
    const method = feature.group === "apiRequest" ? "GET" : feature.method || "POST";
    const rawDeps = resolveHumanAuthnDependencies(feature.code, feature.dependencies);
    const dependencies = this._toPostmanDependencyMeta(rawDeps);
    const xorMeta = dependencies.length ? getPostmanXorGroupMetadata(dependencies) : null;
    const listParams = method === "GET" || shouldListHumanAuthnParams(feature.code);
    const created = __spreadValues(__spreadProps(__spreadValues(__spreadProps(__spreadValues(__spreadProps(__spreadValues({
      id: feature._id || feature.code,
      label: feature.name
    }, typeof feature.nameES === "string" && feature.nameES.trim() ? { nameES: feature.nameES.trim() } : {}), {
      code: feature.code,
      category: this._mapCategory(feature.baseCategory || feature.group),
      country: feature.country
    }), Array.isArray(feature.checkListDomains) && feature.checkListDomains.length ? { checkListDomains: feature.checkListDomains } : {}), {
      method,
      url: feature.url ? feature.url.startsWith("http") ? feature.url : `${apiUrl}/${feature.url}` : "",
      description: feature.description,
      estimatedCost: feature.price ?? 0,
      headers: [
        { key: "Content-Type", value: "application/json" },
        {
          key: "Authorization",
          value: "Bearer <token>"
        }
      ]
    }), dependencies.length ? { dependencies } : {}), {
      params: listParams ? this._paramsFromDependencies(rawDeps, xorMeta) : [],
      body: method !== "GET" && rawDeps.length ? this._bodyFromDependencies(rawDeps) : null
    }), feature.docs && typeof feature.docs === "object" ? { docs: feature.docs } : {});
    if (!created.docs && created.code) {
      const cached = postmanEndpointDetailCache.get(created.code);
      const cachedDocs = cached && typeof cached === "object" ? cached.docs : void 0;
      if (cachedDocs && typeof cachedDocs === "object") {
        created.docs = cachedDocs;
      }
    }
    return mergeParamsFromDocs(created);
  }
  _toPostmanDependencyMeta(rawDeps) {
    return rawDeps.map((dependency) => ({
      field: dependency.field,
      type: dependency.type,
      required: dependency.required,
      enum: dependency.enum ?? void 0,
      description: dependency.description,
      dependencyGroup: dependency.dependencyGroup,
      requiredWhen: dependency.requiredWhen,
      dateFormat: dependency.dateFormat
    }));
  }
  _paramsFromDependencies(rawDeps, xorMeta) {
    return rawDeps.filter((dependency) => isClientVisibleBatchDependencyField(dependency.field)).map((dependency) => {
      const groupId = dependency.dependencyGroup != null ? String(dependency.dependencyGroup).trim() : "";
      const isXorDocumentType = dependency.field === "documentType" && xorMeta && groupId.length > 0 && xorMeta.docGroupIds.has(groupId);
      const defaultVal = isXorDocumentType ? dependency.default ?? "" : paramValueForDependency(dependency);
      let desc = dependency.description;
      if (!desc && dependency.enum && dependency.enum.length) {
        desc = this._transloco.translate("postman.requestEditor.params.pickValue", {
          values: dependency.enum.join(", ")
        });
      }
      const enumList = Array.isArray(dependency.enum) && dependency.enum.length ? [...dependency.enum] : void 0;
      return __spreadValues(__spreadValues(__spreadValues(__spreadValues({
        key: dependency.field,
        value: typeof defaultVal === "string" ? defaultVal : String(defaultVal ?? ""),
        type: dependency.type,
        required: dependency.required,
        description: desc
      }, enumList ? { enum: enumList } : {}), groupId ? { dependencyGroup: groupId } : {}), dependency.requiredWhen ? { requiredWhen: dependency.requiredWhen } : {}), dependency.dateFormat ? { dateFormat: dependency.dateFormat } : {});
    });
  }
  _bodyFromDependencies(rawDeps) {
    return rawDeps.reduce((acc, dep) => {
      acc[dep.field] = defaultValueForDependency(dep);
      return acc;
    }, {});
  }
  /**
   * Merges static catalog params with API-derived params by `key` so metadata such as `enum`
   * from the feature list is preserved while keeping user-facing `value` from the catalog.
   */
  _mergeEndpointParams(existing, match) {
    if (!match?.length) {
      return existing?.length ? existing : match;
    }
    if (!existing?.length) {
      return match;
    }
    const matchByKey = new Map(match.map((p) => [p.key, p]));
    const merged = [];
    const consumedKeys = /* @__PURE__ */ new Set();
    for (const ex of existing) {
      const m = matchByKey.get(ex.key);
      if (m) {
        consumedKeys.add(ex.key);
        merged.push(this._mergeParamRow(ex, m));
      } else {
        merged.push(__spreadValues({}, ex));
      }
    }
    for (const m of match) {
      if (!consumedKeys.has(m.key)) {
        merged.push(__spreadValues({}, m));
      }
    }
    return merged;
  }
  _mergeParamRow(existing, match) {
    const enumMerged = existing.enum && existing.enum.length ? existing.enum : match.enum;
    const description = existing.description?.trim() ? existing.description : match.description;
    return __spreadProps(__spreadValues(__spreadValues({}, match), existing), {
      enum: enumMerged,
      description,
      dependencyGroup: existing.dependencyGroup ?? match.dependencyGroup,
      requiredWhen: existing.requiredWhen ?? match.requiredWhen,
      dateFormat: existing.dateFormat ?? match.dateFormat
    });
  }
  _mergeEndpoints(current, dynamicEndpoints) {
    const matchedDynamicIds = /* @__PURE__ */ new Set();
    const mergedCurrent = current.map((existing) => {
      const match = dynamicEndpoints.find((dynamic) => this._isSameEndpoint(existing, dynamic));
      if (!match) {
        return existing;
      }
      matchedDynamicIds.add(match.id);
      return __spreadProps(__spreadValues({}, match), {
        id: existing.id,
        label: existing.label || match.label,
        method: existing.method || match.method,
        url: existing.url || match.url,
        headers: existing.headers?.length ? existing.headers : match.headers,
        params: this._mergeEndpointParams(existing.params, match.params),
        body: existing.body ?? match.body,
        documentationUrl: existing.documentationUrl || match.documentationUrl,
        dependencies: match.dependencies?.length ? match.dependencies : existing.dependencies
      });
    });
    const newEndpoints = dynamicEndpoints.filter((endpoint) => !matchedDynamicIds.has(endpoint.id));
    return [...mergedCurrent, ...newEndpoints];
  }
  _isSameEndpoint(left, right) {
    if (left.code && right.code && left.code === right.code) {
      return true;
    }
    return this._normalizeUrl(left.url) === this._normalizeUrl(right.url);
  }
  _normalizeUrl(url) {
    return url.replace(environment.apiUrl, "").replace(/^\/+/, "");
  }
  /** Flatten folders depth-first for “Move to” menus (label with indent). */
  flattenFoldersForMenu() {
    const folders = this.layoutFolders();
    const roots = folders.filter((f) => f.parentFolder == null || f.parentFolder === "").sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0) || a.name.localeCompare(b.name));
    const result = [];
    const walk = (list, depth) => {
      for (const f of list) {
        const pad = depth > 0 ? `${"\u2014 ".repeat(depth)}` : "";
        result.push({ id: f._id, label: `${pad}${f.name}` });
        const kids = folders.filter((x) => x.parentFolder === f._id).sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0) || a.name.localeCompare(b.name));
        walk(kids, depth + 1);
      }
    };
    walk(roots, 0);
    return result;
  }
  createFolder(name, parentFolder) {
    const body = { name: name.trim() };
    if (parentFolder) {
      body["parentFolder"] = parentFolder;
    }
    return this._httpClient.post(`${this._apiUrl()}/v2/postman/folders`, body, {
      headers: this._authHeaders()
    });
  }
  updateFolder(folderId, patch) {
    return this._httpClient.put(`${this._apiUrl()}/v2/postman/folders/${folderId}`, patch, {
      headers: this._authHeaders()
    });
  }
  deleteFolder(folderId, options) {
    let params = new HttpParams();
    if (options?.deleteEndpointLayouts) {
      params = params.set("deleteEndpointLayouts", "true");
    }
    return this._httpClient.delete(`${this._apiUrl()}/v2/postman/folders/${folderId}`, {
      headers: this._authHeaders(),
      params
    });
  }
  /**
   * Creates or updates a PostmanEndpoint row to assign folder / metadata.
   */
  upsertEndpointLayout(endpoint, patch) {
    if (!endpoint.code) {
      return throwError(() => new Error("Endpoint has no app feature code"));
    }
    const headers = this._authHeaders();
    const base = `${this._apiUrl()}/v2/postman/endpoints`;
    if (endpoint.postmanEndpointId) {
      return this._httpClient.put(`${base}/${endpoint.postmanEndpointId}`, patch, {
        headers
      });
    }
    return this._httpClient.post(base, {
      appFeatureCode: endpoint.code,
      folder: patch.folder ?? null,
      displayName: patch.displayName ?? endpoint.layoutDisplayName ?? "",
      sortOrder: patch.sortOrder ?? endpoint.layoutSortOrder ?? 0,
      isFavorite: patch.isFavorite ?? endpoint.isFavorite ?? false
    }, { headers });
  }
  selectEndpoint(endpoint) {
    const endpointCopy = JSON.parse(JSON.stringify(endpoint));
    if (endpointCopy.headers) {
      endpointCopy.headers.forEach((h) => {
        if (h.key === "Authorization" && h.value.includes("<token>")) {
          const token = localStorage.getItem("accessToken");
          if (token) {
            h.value = h.value.replace("<token>", token);
          }
        }
      });
    }
    if (this._accountEnv.showSandboxStrip()) {
      applyPostmanSandboxParamDefaults(endpointCopy);
    }
    const withCost = this.paymentMethod() === "credits" ? ensurePostmanIncludeCostParam(endpointCopy) : removePostmanIncludeCostParam(endpointCopy);
    this.selectedEndpoint.set(withCost);
    this.response.set(null);
    this.error.set(null);
    this.hydrateEndpointDetails(withCost).subscribe((hydrated) => {
      this.selectedEndpoint.update((current) => {
        if (!current || !this._isSameEndpoint(current, hydrated))
          return current;
        return __spreadProps(__spreadValues(__spreadValues({}, current), hydrated), {
          headers: current.headers?.length ? current.headers : hydrated.headers,
          params: this._mergeEndpointParams(current.params, hydrated.params),
          body: current.body ?? hydrated.body
        });
      });
      if (!hydrated.docs)
        return;
      this.endpoints.update((list) => list.map((endpoint2) => this._isSameEndpoint(endpoint2, hydrated) ? __spreadProps(__spreadValues({}, endpoint2), { docs: hydrated.docs }) : endpoint2));
    });
  }
  sendRequest(endpoint) {
    const postDraft = endpoint.method === "GET" || endpoint.method === "DELETE" ? void 0 : JSON.stringify(endpoint.body && typeof endpoint.body === "object" ? endpoint.body : {}, null, 2);
    if (getPostmanRequestValidationIssues(endpoint, postDraft).length > 0) {
      return;
    }
    const isX402 = this.paymentMethod() === "x402";
    if (!isX402 && !this._sessionService.isTokenValid()) {
      this._sessionService.openAuthModal();
      return;
    }
    this.isLoading.set(true);
    this.response.set(null);
    this.error.set(null);
    const effectiveUrl = buildPostmanEffectiveUrl(endpoint);
    const pathParamKeys = getPostmanPathParamKeysForEndpoint(endpoint);
    let url = effectiveUrl;
    const options = {
      headers: {},
      params: {}
    };
    if (isX402) {
      url = `${environment.smartAgentUrl}/api/proxy`;
      const paymentTxHeader = endpoint.headers?.find((h) => h.key === "x-payment-tx");
      const walletAddressHeader = endpoint.headers?.find((h) => h.key === "x-wallet-address");
      options.headers["x-payment-tx"] = paymentTxHeader?.value || "";
      options.headers["x-wallet-address"] = walletAddressHeader?.value || "";
      options.headers["x-target-url"] = effectiveUrl;
      options.headers["Content-Type"] = "application/json";
    } else {
      if (endpoint.headers) {
        endpoint.headers.forEach((h) => {
          let value = h.value;
          if (value && value.includes("<token>")) {
            const token = localStorage.getItem("accessToken") || "";
            value = value.replace("<token>", token);
          }
          options.headers[h.key] = value;
        });
      }
    }
    if (endpoint.params) {
      endpoint.params.forEach((p) => {
        if (!p.value) {
          return;
        }
        if (pathParamKeys?.includes(p.key)) {
          return;
        }
        if (!p.key || p.key === POSTMAN_INCLUDE_COST_KEY) {
          return;
        }
        options.params[p.key] = p.key === "sexo" ? normalizePostmanSexoValue(p.value) : p.value;
      });
    }
    let body = null;
    if (endpoint.method !== "GET" && endpoint.method !== "DELETE") {
      body = endpoint.body && typeof endpoint.body === "object" ? __spreadValues({}, endpoint.body) : {};
      if (body && typeof body.sexo === "string") {
        body.sexo = normalizePostmanSexoValue(body.sexo);
      }
    }
    if (!isX402) {
      const costSend = resolvePostmanIncludeCostForSend(endpoint, endpoint.method);
      if (costSend.query) {
        options.params.includeCost = costSend.query;
      }
      if (costSend.body && body !== null) {
        body = __spreadProps(__spreadValues({}, body), { includeCost: true });
      }
    }
    const startTime = Date.now();
    const req$ = this._httpClient.request(endpoint.method, url, __spreadProps(__spreadValues({}, options), {
      body,
      observe: "response"
    }));
    req$.pipe(tap((res) => {
      const anyRes = res;
      const proof = anyRes.headers ? anyRes.headers.get("x-validation-proof") : null;
      if (anyRes.body && typeof anyRes.body === "object") {
        anyRes.body._proof = proof || anyRes.body._proof;
      }
      this.isLoading.set(false);
      this.response.set(res);
      this.responseTime.set(Date.now() - startTime);
      this._refreshCredits(anyRes?.status);
    }), catchError((err) => {
      this.isLoading.set(false);
      if (!isX402 && err?.status === 401) {
        this._sessionService.openAuthModal();
        return of(null);
      }
      this.error.set(err);
      this._refreshCredits(err?.status);
      return of(null);
    }), finalize(() => {
      this._refreshWalletForX402();
    })).subscribe();
  }
  /**
   * Refreshes session credits after a Postman call in `credits` mode whenever the
   * backend produced a real HTTP response (any status > 0, including 4xx like 404 and
   * 5xx). Network errors (status === 0) are skipped because no credit was consumed.
   */
  _refreshCredits(status) {
    if (this.paymentMethod() !== "credits")
      return;
    if (!status || status <= 0)
      return;
    if (!this._sessionService.isTokenValid())
      return;
    this._authService.refreshSession().subscribe({
      error: () => {
      }
    });
  }
  /**
   * Refreshes wallet balances after every Postman call in `x402` mode (success, error,
   * or 402 retry) so AVAX/VKA in the header stay aligned with the on-chain state.
   */
  _refreshWalletForX402() {
    if (this.paymentMethod() !== "x402")
      return;
    void this._agentWalletService.refreshBalance();
  }
  static {
    this.\u0275fac = function PostmanService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PostmanService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PostmanService, factory: _PostmanService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PostmanService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/postman/request-editor/about-endpoint.component.ts
var _c0 = () => ["200", "404", "409", "400", "500"];
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.field;
var _forTrack2 = ($index, $item) => $item.lang;
var _forTrack3 = ($index, $item) => $item.status;
function AboutEndpointComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-icon", 4);
    \u0275\u0275text(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "postman.requestEditor.about.fallbackLocale"), " ");
  }
}
function AboutEndpointComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 6);
    \u0275\u0275pipe(5, "markdown");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "postman.requestEditor.about.overview"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(5, 4, ctx_r0.overview()), \u0275\u0275sanitizeHtml);
  }
}
function AboutEndpointComponent_Conditional_3_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", h_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", h_r2.value, " ");
  }
}
function AboutEndpointComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "table", 8)(6, "thead", 9)(7, "tr")(8, "th", 10);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 10);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody", 11);
    \u0275\u0275repeaterCreate(15, AboutEndpointComponent_Conditional_3_For_16_Template, 5, 2, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "postman.requestEditor.about.headers"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "postman.requestEditor.headers.key"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "postman.requestEditor.headers.value"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.headers());
  }
}
function AboutEndpointComponent_Conditional_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "postman.requestEditor.about.paramsColumns.conditional"), " ");
  }
}
function AboutEndpointComponent_Conditional_4_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "postman.requestEditor.about.paramsColumns.dateFormat"), " ");
  }
}
function AboutEndpointComponent_Conditional_4_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "postman.requestEditor.about.paramsColumns.allowed"), " ");
  }
}
function AboutEndpointComponent_Conditional_4_For_25_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", row_r3.conditionalHint, " ");
  }
}
function AboutEndpointComponent_Conditional_4_For_25_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AboutEndpointComponent_Conditional_4_For_25_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 16);
    \u0275\u0275template(1, AboutEndpointComponent_Conditional_4_For_25_Conditional_8_Conditional_1_Template, 1, 1)(2, AboutEndpointComponent_Conditional_4_For_25_Conditional_8_Conditional_2_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.conditionalHint ? 1 : 2);
  }
}
function AboutEndpointComponent_Conditional_4_For_25_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.dateFormat || "\u2014", " ");
  }
}
function AboutEndpointComponent_Conditional_4_For_25_Conditional_10_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const allowed_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(allowed_r4);
  }
}
function AboutEndpointComponent_Conditional_4_For_25_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, AboutEndpointComponent_Conditional_4_For_25_Conditional_10_Conditional_1_For_2_Template, 2, 1, "span", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r3.allowed);
  }
}
function AboutEndpointComponent_Conditional_4_For_25_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AboutEndpointComponent_Conditional_4_For_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18);
    \u0275\u0275template(1, AboutEndpointComponent_Conditional_4_For_25_Conditional_10_Conditional_1_Template, 3, 0, "div", 20)(2, AboutEndpointComponent_Conditional_4_For_25_Conditional_10_Conditional_2_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional((row_r3.allowed == null ? null : row_r3.allowed.length) ? 1 : 2);
  }
}
function AboutEndpointComponent_Conditional_4_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 14)(1, "td", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AboutEndpointComponent_Conditional_4_For_25_Conditional_8_Template, 3, 1, "td", 16)(9, AboutEndpointComponent_Conditional_4_For_25_Conditional_9_Template, 2, 1, "td", 17)(10, AboutEndpointComponent_Conditional_4_For_25_Conditional_10_Template, 3, 1, "td", 18);
    \u0275\u0275elementStart(11, "td", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r3.field, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r3.type || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, row_r3.required ? "postman.requestEditor.about.yes" : "postman.requestEditor.about.no"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.showConditionalColumn() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showDateFormatColumn() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showAllowedColumn() ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r3.description || "\u2014", " ");
  }
}
function AboutEndpointComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 7)(5, "table", 8)(6, "thead", 9)(7, "tr")(8, "th", 10);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 10);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 10);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AboutEndpointComponent_Conditional_4_Conditional_17_Template, 3, 3, "th", 10)(18, AboutEndpointComponent_Conditional_4_Conditional_18_Template, 3, 3, "th", 10)(19, AboutEndpointComponent_Conditional_4_Conditional_19_Template, 3, 3, "th", 10);
    \u0275\u0275elementStart(20, "th", 10);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody", 11);
    \u0275\u0275repeaterCreate(24, AboutEndpointComponent_Conditional_4_For_25_Template, 13, 9, "tr", 14, _forTrack1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, "postman.requestEditor.about.parameters"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "postman.requestEditor.about.paramsColumns.field"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 12, "postman.requestEditor.about.paramsColumns.type"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 14, "postman.requestEditor.about.paramsColumns.required"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.showConditionalColumn() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showDateFormatColumn() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showAllowedColumn() ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 16, "postman.requestEditor.about.paramsColumns.description"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.paramsRows());
  }
}
function AboutEndpointComponent_Conditional_5_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function AboutEndpointComponent_Conditional_5_For_7_Template_button_click_0_listener() {
      const \u0275$index_157_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectedRequestIdx.set(\u0275$index_157_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ex_r8 = ctx.$implicit;
    const \u0275$index_157_r7 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-white", ctx_r0.selectedRequestIdx() === \u0275$index_157_r7)("shadow-sm", ctx_r0.selectedRequestIdx() === \u0275$index_157_r7)("text-slate-900", ctx_r0.selectedRequestIdx() === \u0275$index_157_r7)("dark:bg-slate-900", ctx_r0.selectedRequestIdx() === \u0275$index_157_r7)("dark:text-white", ctx_r0.selectedRequestIdx() === \u0275$index_157_r7)("text-slate-500", ctx_r0.selectedRequestIdx() !== \u0275$index_157_r7)("hover:text-slate-900", ctx_r0.selectedRequestIdx() !== \u0275$index_157_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ex_r8.label, " ");
  }
}
function AboutEndpointComponent_Conditional_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 28);
    \u0275\u0275element(1, "code", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.highlightedRequest(), \u0275\u0275sanitizeHtml);
  }
}
function AboutEndpointComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 23);
    \u0275\u0275repeaterCreate(6, AboutEndpointComponent_Conditional_5_For_7_Template, 2, 15, "button", 24, _forTrack2);
    \u0275\u0275elementStart(8, "div", 25)(9, "button", 26);
    \u0275\u0275listener("click", function AboutEndpointComponent_Conditional_5_Template_button_click_9_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.copy(((tmp_2_0 = ctx_r0.currentRequest()) == null ? null : tmp_2_0.code) || "", "request-" + ctx_r0.selectedRequestIdx()));
    });
    \u0275\u0275elementStart(10, "mat-icon", 27);
    \u0275\u0275text(11, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, AboutEndpointComponent_Conditional_5_Conditional_14_Template, 2, 1, "pre", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "postman.requestEditor.about.requestExamples"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.requestExamples());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 5, ctx_r0.copiedKey() === "request-" + ctx_r0.selectedRequestIdx() ? "postman.requestEditor.about.copied" : "postman.requestEditor.about.copy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r0.currentRequest()) ? 14 : -1, tmp_4_0);
  }
}
function AboutEndpointComponent_Conditional_6_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function AboutEndpointComponent_Conditional_6_For_7_Template_button_click_0_listener() {
      const \u0275$index_186_r11 = \u0275\u0275restoreView(_r10).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectedResponseIdx.set(\u0275$index_186_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r12 = ctx.$implicit;
    const \u0275$index_186_r11 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-emerald-100", ctx_r0.selectedResponseIdx() === \u0275$index_186_r11 && res_r12.status === "200")("text-emerald-700", ctx_r0.selectedResponseIdx() === \u0275$index_186_r11 && res_r12.status === "200")("bg-amber-100", ctx_r0.selectedResponseIdx() === \u0275$index_186_r11 && res_r12.status === "404")("text-amber-700", ctx_r0.selectedResponseIdx() === \u0275$index_186_r11 && res_r12.status === "404")("bg-rose-100", ctx_r0.selectedResponseIdx() === \u0275$index_186_r11 && (res_r12.status === "409" || res_r12.status === "400" || res_r12.status === "500"))("text-rose-700", ctx_r0.selectedResponseIdx() === \u0275$index_186_r11 && (res_r12.status === "409" || res_r12.status === "400" || res_r12.status === "500"))("bg-slate-200", ctx_r0.selectedResponseIdx() === \u0275$index_186_r11 && !\u0275\u0275pureFunction0(21, _c0).includes(res_r12.status))("text-slate-900", ctx_r0.selectedResponseIdx() === \u0275$index_186_r11 && !\u0275\u0275pureFunction0(22, _c0).includes(res_r12.status))("text-slate-500", ctx_r0.selectedResponseIdx() !== \u0275$index_186_r11)("hover:text-slate-900", ctx_r0.selectedResponseIdx() !== \u0275$index_186_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", res_r12.label || res_r12.status, " ");
  }
}
function AboutEndpointComponent_Conditional_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 28);
    \u0275\u0275element(1, "code", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.highlightedResponse(), \u0275\u0275sanitizeHtml);
  }
}
function AboutEndpointComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "div", 23);
    \u0275\u0275repeaterCreate(6, AboutEndpointComponent_Conditional_6_For_7_Template, 2, 23, "button", 31, _forTrack3);
    \u0275\u0275elementStart(8, "div", 25)(9, "button", 26);
    \u0275\u0275listener("click", function AboutEndpointComponent_Conditional_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.copy(ctx_r0.prettyCurrentResponse(), "response-" + ctx_r0.selectedResponseIdx()));
    });
    \u0275\u0275elementStart(10, "mat-icon", 27);
    \u0275\u0275text(11, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, AboutEndpointComponent_Conditional_6_Conditional_14_Template, 2, 1, "pre", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "postman.requestEditor.about.responseSamples"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.responses());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 5, ctx_r0.copiedKey() === "response-" + ctx_r0.selectedResponseIdx() ? "postman.requestEditor.about.copied" : "postman.requestEditor.about.copy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.responses()[ctx_r0.selectedResponseIdx()] ? 14 : -1);
  }
}
function AboutEndpointComponent_Conditional_7_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(note_r13);
  }
}
function AboutEndpointComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 33);
    \u0275\u0275repeaterCreate(5, AboutEndpointComponent_Conditional_7_For_6_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "postman.requestEditor.about.notes"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.notes());
  }
}
function AboutEndpointComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-icon", 34);
    \u0275\u0275text(2, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "postman.requestEditor.about.noDocsYet"));
  }
}
var AboutEndpointComponent = class _AboutEndpointComponent {
  constructor() {
    this._highlight = inject(FuseHighlightService);
    this._sanitizer = inject(DomSanitizer);
    this._transloco = inject(TranslocoService);
    this._docs = signal(void 0);
    this._endpoint = signal(null);
    this._activeLang = toSignal(this._transloco.langChanges$, {
      initialValue: this._transloco.getActiveLang()
    });
    this.selectedRequestIdx = signal(0);
    this.selectedResponseIdx = signal(0);
    this.copiedKey = signal(null);
    this.resolvedLocale = computed(() => {
      const docs = this._docs();
      if (!docs)
        return null;
      const active = this._toLocale(this._activeLang());
      if (active && docs[active])
        return { locale: active, isFallback: false };
      if (docs.en)
        return { locale: "en", isFallback: active !== "en" };
      const firstKey = Object.keys(docs).find((k) => !!docs[k]);
      return firstKey ? { locale: firstKey, isFallback: true } : null;
    });
    this.activeDoc = computed(() => {
      const resolved = this.resolvedLocale();
      return resolved ? this._docs()?.[resolved.locale] ?? null : null;
    });
    this.showFallbackBadge = computed(() => !!this.resolvedLocale()?.isFallback);
    this.overview = computed(() => {
      const ep = this._endpoint();
      if (!ep)
        return "";
      const catalogDescription = ep.code ? getAppFeatureCatalogCopy(this._transloco, ep.code).description ?? "" : "";
      return resolveAboutOverview({
        endpoint: ep,
        catalogDescription,
        locale: this._activeLang()
      });
    });
    this.headers = computed(() => this.activeDoc()?.headers ?? []);
    this.paramsRows = computed(() => {
      const doc = this.activeDoc();
      const catalog = (this._endpoint()?.params ?? []).filter((p) => p.system !== "includeCost" && isClientVisibleBatchDependencyField(p.key));
      const englishParamDescriptions = new Map((this._docs()?.en?.params ?? []).filter((row) => row.field?.trim() && row.description?.trim()).map((row) => [row.field, row.description.trim()]));
      const resolveDescription = (field, docDescription, catalogDescription) => docDescription?.trim() || catalogDescription?.trim() || englishParamDescriptions.get(field) || "";
      const byField = /* @__PURE__ */ new Map();
      for (const p of catalog) {
        byField.set(p.key, {
          type: p.type,
          required: p.required,
          allowed: p.enum,
          requiredWhen: p.requiredWhen,
          dateFormat: p.dateFormat,
          description: p.description
        });
      }
      const conditionalHint = (rw) => {
        if (!rw?.field || !rw.in?.length)
          return void 0;
        return `${rw.field}: ${rw.in.join(", ")}`;
      };
      if (doc?.params?.length) {
        return doc.params.filter((row) => row.field?.trim() && isClientVisibleBatchDependencyField(row.field)).map((row) => {
          const extra = byField.get(row.field) || {};
          byField.delete(row.field);
          return {
            field: row.field,
            type: extra.type,
            required: !!extra.required,
            allowed: extra.allowed,
            description: resolveDescription(row.field, row.description, extra.description),
            conditionalHint: conditionalHint(extra.requiredWhen),
            dateFormat: extra.dateFormat
          };
        });
      }
      return catalog.map((p) => ({
        field: p.key,
        type: p.type,
        required: !!p.required,
        allowed: p.enum,
        description: resolveDescription(p.key, void 0, p.description),
        conditionalHint: conditionalHint(p.requiredWhen),
        dateFormat: p.dateFormat
      }));
    });
    this.paramsColumnVisibility = computed(() => resolveAboutParamsColumnVisibility(this.paramsRows()));
    this.showConditionalColumn = computed(() => this.paramsColumnVisibility().showConditionalColumn);
    this.showAllowedColumn = computed(() => this.paramsColumnVisibility().showAllowedColumn);
    this.showDateFormatColumn = computed(() => this.paramsColumnVisibility().showDateFormatColumn);
    this.requestExamples = computed(() => this.activeDoc()?.requestExamples ?? []);
    this.responses = computed(() => this.activeDoc()?.responses ?? []);
    this.notes = computed(() => this.activeDoc()?.notes ?? []);
    this.currentRequest = computed(() => {
      const list = this.requestExamples();
      return list[this.selectedRequestIdx()] ?? list[0] ?? null;
    });
    this.highlightedRequest = computed(() => {
      const req = this.currentRequest();
      if (!req)
        return "";
      const language = req.language || "plaintext";
      return this._highlightSafe(req.code, language);
    });
    this.prettyCurrentResponse = computed(() => {
      const res = this.responses()[this.selectedResponseIdx()];
      if (!res)
        return "";
      return this._prettyJson(res.body);
    });
    this.highlightedResponse = computed(() => this._highlightSafe(this.prettyCurrentResponse(), "json"));
    this.isEmpty = computed(() => {
      return !this.overview() && !this.headers().length && !this.paramsRows().length && !this.requestExamples().length && !this.responses().length && !this.notes().length;
    });
  }
  set docs(value) {
    this._docs.set(value);
    this.selectedRequestIdx.set(0);
    this.selectedResponseIdx.set(0);
  }
  set endpoint(value) {
    this._endpoint.set(value);
  }
  copy(text, key) {
    return __async(this, null, function* () {
      if (!text)
        return;
      try {
        yield navigator.clipboard.writeText(text);
        this.copiedKey.set(key);
        setTimeout(() => {
          if (this.copiedKey() === key)
            this.copiedKey.set(null);
        }, 1500);
      } catch {
      }
    });
  }
  _toLocale(lang) {
    const normalized = (lang || "").toLowerCase();
    const supported = ["en", "es", "fr", "pt", "ko", "ja", "zh"];
    return supported.includes(normalized) ? normalized : null;
  }
  _prettyJson(raw) {
    if (!raw)
      return "";
    try {
      return JSON.stringify(JSON.parse(raw), null, 2);
    } catch {
      return raw;
    }
  }
  _highlightSafe(code, language) {
    if (!code)
      return "";
    try {
      const html = this._highlight.highlight(code, language);
      return this._sanitizer.sanitize(SecurityContext.HTML, html) ?? "";
    } catch {
      return this._sanitizer.sanitize(SecurityContext.HTML, code) ?? "";
    }
  }
  static {
    this.\u0275fac = function AboutEndpointComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutEndpointComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutEndpointComponent, selectors: [["postman-about-endpoint"]], hostAttrs: [1, "block", "w-full"], inputs: { docs: "docs", endpoint: "endpoint" }, decls: 9, vars: 8, consts: [[1, "mx-auto", "w-full", "max-w-4xl", "space-y-6", "p-6", "select-text"], [1, "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-amber-200", "bg-amber-50", "px-3", "py-1", "text-xs", "font-medium", "text-amber-700", "dark:border-amber-500/40", "dark:bg-amber-500/10", "dark:text-amber-300"], [1, "space-y-2"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-2", "rounded-xl", "border", "border-dashed", "border-slate-200", "bg-slate-50", "py-10", "text-center", "text-sm", "text-slate-500", "dark:border-slate-700", "dark:bg-slate-800/40"], [1, "icon-size-4"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-slate-500", "dark:text-slate-400"], [1, "endpoint-overview-md", "prose", "prose-sm", "max-w-none", "text-slate-700", "dark:prose-invert", "dark:text-slate-200", "prose-p:mb-0", "prose-p:leading-relaxed", "[&_p:not(:last-child)]:mb-2", 3, "innerHTML"], [1, "overflow-hidden", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700"], [1, "w-full", "text-left", "text-sm"], [1, "bg-slate-50", "text-xs", "uppercase", "text-slate-500", "dark:bg-slate-800/60", "dark:text-slate-400"], [1, "px-3", "py-2", "font-medium"], [1, "divide-y", "divide-slate-100", "dark:divide-slate-800"], [1, "px-3", "py-2", "font-mono", "text-slate-700", "dark:text-slate-200"], [1, "px-3", "py-2", "font-mono", "text-slate-600", "dark:text-slate-300"], [1, "align-top"], [1, "px-3", "py-2", "text-slate-600", "dark:text-slate-300"], [1, "px-3", "py-2", "text-slate-600", "dark:text-slate-300", "text-sm"], [1, "px-3", "py-2", "text-slate-600", "dark:text-slate-300", "font-mono", "text-xs"], [1, "px-3", "py-2"], [1, "text-slate-400"], [1, "flex", "flex-wrap", "gap-1"], [1, "inline-flex", "items-center", "rounded-md", "border", "border-slate-200", "bg-slate-50", "px-1.5", "py-0.5", "font-mono", "text-xs", "text-slate-700", "dark:border-slate-600", "dark:bg-slate-800", "dark:text-slate-200"], [1, "rounded-xl", "border", "border-slate-200", "dark:border-slate-700"], [1, "flex", "flex-wrap", "items-center", "gap-1", "border-b", "border-slate-200", "bg-slate-50", "px-2", "py-1.5", "dark:border-slate-700", "dark:bg-slate-800/60"], ["type", "button", 1, "rounded-md", "px-2.5", "py-1", "text-xs", "font-medium", "transition-colors", 3, "bg-white", "shadow-sm", "text-slate-900", "dark:bg-slate-900", "dark:text-white", "text-slate-500", "hover:text-slate-900"], [1, "ml-auto", "flex", "items-center"], ["type", "button", 1, "inline-flex", "items-center", "gap-1", "rounded-md", "px-2", "py-1", "text-xs", "text-slate-500", "transition-colors", "hover:bg-slate-100", "hover:text-slate-900", "dark:hover:bg-slate-800", "dark:hover:text-white", 3, "click"], [1, "icon-size-3.5"], [1, "hljs", "block", "overflow-x-auto", "p-3", "text-xs", "leading-relaxed"], ["type", "button", 1, "rounded-md", "px-2.5", "py-1", "text-xs", "font-medium", "transition-colors", 3, "click"], [3, "innerHTML"], ["type", "button", 1, "rounded-md", "px-2.5", "py-1", "text-xs", "font-semibold", "transition-colors", 3, "bg-emerald-100", "text-emerald-700", "bg-amber-100", "text-amber-700", "bg-rose-100", "text-rose-700", "bg-slate-200", "text-slate-900", "text-slate-500", "hover:text-slate-900"], ["type", "button", 1, "rounded-md", "px-2.5", "py-1", "text-xs", "font-semibold", "transition-colors", 3, "click"], [1, "list-disc", "space-y-1.5", "pl-5", "text-sm", "text-slate-700", "dark:text-slate-200"], [1, "icon-size-8", "opacity-60"]], template: function AboutEndpointComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AboutEndpointComponent_Conditional_1_Template, 5, 3, "div", 1)(2, AboutEndpointComponent_Conditional_2_Template, 6, 6, "section", 2)(3, AboutEndpointComponent_Conditional_3_Template, 17, 9, "section", 2)(4, AboutEndpointComponent_Conditional_4_Template, 26, 18, "section", 2)(5, AboutEndpointComponent_Conditional_5_Template, 15, 7, "section", 2)(6, AboutEndpointComponent_Conditional_6_Template, 15, 7, "section", 2)(7, AboutEndpointComponent_Conditional_7_Template, 7, 3, "section", 2)(8, AboutEndpointComponent_Conditional_8_Template, 6, 3, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showFallbackBadge() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.overview() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.headers().length ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.paramsRows().length ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.requestExamples().length ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.responses().length ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.notes().length ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isEmpty() ? 8 : -1);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon, MatTooltipModule, TranslocoPipe, MarkdownPipe], styles: ["\n\npre.hljs[_ngcontent-%COMP%] {\n  background-color: rgb(15, 23, 42);\n  color: rgb(226, 232, 240);\n  border-radius: 0.5rem;\n  margin: 0;\n}\n/*# sourceMappingURL=about-endpoint.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutEndpointComponent, [{
    type: Component,
    args: [{ selector: "postman-about-endpoint", standalone: true, imports: [CommonModule, MatIconModule, MatTooltipModule, TranslocoPipe, MarkdownPipe], host: { class: "block w-full" }, template: `
        <div class="mx-auto w-full max-w-4xl space-y-6 p-6 select-text">
                    @if (showFallbackBadge()) {
                        <div
                            class="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300"
                        >
                            <mat-icon class="icon-size-4">translate</mat-icon>
                            {{ 'postman.requestEditor.about.fallbackLocale' | transloco }}
                        </div>
                    }

                    @if (overview()) {
                        <section class="space-y-2">
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {{ 'postman.requestEditor.about.overview' | transloco }}
                            </h3>
                            <div
                                class="endpoint-overview-md prose prose-sm max-w-none text-slate-700 dark:prose-invert dark:text-slate-200 prose-p:mb-0 prose-p:leading-relaxed [&_p:not(:last-child)]:mb-2"
                                [innerHTML]="overview() | markdown"
                            ></div>
                        </section>
                    }

                    @if (headers().length) {
                        <section class="space-y-2">
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {{ 'postman.requestEditor.about.headers' | transloco }}
                            </h3>
                            <div
                                class="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700"
                            >
                                <table class="w-full text-left text-sm">
                                    <thead
                                        class="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-800/60 dark:text-slate-400"
                                    >
                                        <tr>
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.headers.key' | transloco }}
                                            </th>
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.headers.value' | transloco }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                        @for (h of headers(); track h.name) {
                                            <tr>
                                                <td class="px-3 py-2 font-mono text-slate-700 dark:text-slate-200">
                                                    {{ h.name }}
                                                </td>
                                                <td class="px-3 py-2 font-mono text-slate-600 dark:text-slate-300">
                                                    {{ h.value }}
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    }

                    @if (paramsRows().length) {
                        <section class="space-y-2">
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {{ 'postman.requestEditor.about.parameters' | transloco }}
                            </h3>
                            <div
                                class="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700"
                            >
                                <table class="w-full text-left text-sm">
                                    <thead
                                        class="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-800/60 dark:text-slate-400"
                                    >
                                        <tr>
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.about.paramsColumns.field' | transloco }}
                                            </th>
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.about.paramsColumns.type' | transloco }}
                                            </th>
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.about.paramsColumns.required' | transloco }}
                                            </th>
                                            @if (showConditionalColumn()) {
                                                <th class="px-3 py-2 font-medium">
                                                    {{ 'postman.requestEditor.about.paramsColumns.conditional' | transloco }}
                                                </th>
                                            }
                                            @if (showDateFormatColumn()) {
                                                <th class="px-3 py-2 font-medium">
                                                    {{ 'postman.requestEditor.about.paramsColumns.dateFormat' | transloco }}
                                                </th>
                                            }
                                            @if (showAllowedColumn()) {
                                                <th class="px-3 py-2 font-medium">
                                                    {{ 'postman.requestEditor.about.paramsColumns.allowed' | transloco }}
                                                </th>
                                            }
                                            <th class="px-3 py-2 font-medium">
                                                {{ 'postman.requestEditor.about.paramsColumns.description' | transloco }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                        @for (row of paramsRows(); track row.field) {
                                            <tr class="align-top">
                                                <td class="px-3 py-2 font-mono text-slate-700 dark:text-slate-200">
                                                    {{ row.field }}
                                                </td>
                                                <td class="px-3 py-2 text-slate-600 dark:text-slate-300">
                                                    {{ row.type || '\u2014' }}
                                                </td>
                                                <td class="px-3 py-2 text-slate-600 dark:text-slate-300">
                                                    {{ (row.required ? 'postman.requestEditor.about.yes' : 'postman.requestEditor.about.no') | transloco }}
                                                </td>
                                                @if (showConditionalColumn()) {
                                                    <td class="px-3 py-2 text-slate-600 dark:text-slate-300 text-sm">
                                                        @if (row.conditionalHint) {
                                                            {{ row.conditionalHint }}
                                                        } @else {
                                                            <span class="text-slate-400">\u2014</span>
                                                        }
                                                    </td>
                                                }
                                                @if (showDateFormatColumn()) {
                                                    <td class="px-3 py-2 text-slate-600 dark:text-slate-300 font-mono text-xs">
                                                        {{ row.dateFormat || '\u2014' }}
                                                    </td>
                                                }
                                                @if (showAllowedColumn()) {
                                                    <td class="px-3 py-2">
                                                        @if (row.allowed?.length) {
                                                            <div class="flex flex-wrap gap-1">
                                                                @for (allowed of row.allowed; track allowed) {
                                                                    <span
                                                                        class="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 font-mono text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                                                                        >{{ allowed }}</span
                                                                    >
                                                                }
                                                            </div>
                                                        } @else {
                                                            <span class="text-slate-400">\u2014</span>
                                                        }
                                                    </td>
                                                }
                                                <td class="px-3 py-2 text-slate-600 dark:text-slate-300">
                                                    {{ row.description || '\u2014' }}
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    }

                    @if (requestExamples().length) {
                        <section class="space-y-2">
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {{ 'postman.requestEditor.about.requestExamples' | transloco }}
                            </h3>
                            <div class="rounded-xl border border-slate-200 dark:border-slate-700">
                                <div
                                    class="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-800/60"
                                >
                                    @for (ex of requestExamples(); let i = $index; track ex.lang) {
                                        <button
                                            type="button"
                                            class="rounded-md px-2.5 py-1 text-xs font-medium transition-colors"
                                            [class.bg-white]="selectedRequestIdx() === i"
                                            [class.shadow-sm]="selectedRequestIdx() === i"
                                            [class.text-slate-900]="selectedRequestIdx() === i"
                                            [class.dark:bg-slate-900]="selectedRequestIdx() === i"
                                            [class.dark:text-white]="selectedRequestIdx() === i"
                                            [class.text-slate-500]="selectedRequestIdx() !== i"
                                            [class.hover:text-slate-900]="selectedRequestIdx() !== i"
                                            (click)="selectedRequestIdx.set(i)"
                                        >
                                            {{ ex.label }}
                                        </button>
                                    }
                                    <div class="ml-auto flex items-center">
                                        <button
                                            type="button"
                                            class="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                                            (click)="copy(currentRequest()?.code || '', 'request-' + selectedRequestIdx())"
                                        >
                                            <mat-icon class="icon-size-3.5">content_copy</mat-icon>
                                            {{ (copiedKey() === 'request-' + selectedRequestIdx() ? 'postman.requestEditor.about.copied' : 'postman.requestEditor.about.copy') | transloco }}
                                        </button>
                                    </div>
                                </div>
                                @if (currentRequest(); as req) {
                                    <pre
                                        class="hljs block overflow-x-auto p-3 text-xs leading-relaxed"
                                    ><code [innerHTML]="highlightedRequest()"></code></pre>
                                }
                            </div>
                        </section>
                    }

                    @if (responses().length) {
                        <section class="space-y-2">
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {{ 'postman.requestEditor.about.responseSamples' | transloco }}
                            </h3>
                            <div class="rounded-xl border border-slate-200 dark:border-slate-700">
                                <div
                                    class="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-800/60"
                                >
                                    @for (res of responses(); let i = $index; track res.status) {
                                        <button
                                            type="button"
                                            class="rounded-md px-2.5 py-1 text-xs font-semibold transition-colors"
                                            [class.bg-emerald-100]="selectedResponseIdx() === i && res.status === '200'"
                                            [class.text-emerald-700]="selectedResponseIdx() === i && res.status === '200'"
                                            [class.bg-amber-100]="selectedResponseIdx() === i && res.status === '404'"
                                            [class.text-amber-700]="selectedResponseIdx() === i && res.status === '404'"
                                            [class.bg-rose-100]="selectedResponseIdx() === i && (res.status === '409' || res.status === '400' || res.status === '500')"
                                            [class.text-rose-700]="selectedResponseIdx() === i && (res.status === '409' || res.status === '400' || res.status === '500')"
                                            [class.bg-slate-200]="selectedResponseIdx() === i && !['200','404','409','400','500'].includes(res.status)"
                                            [class.text-slate-900]="selectedResponseIdx() === i && !['200','404','409','400','500'].includes(res.status)"
                                            [class.text-slate-500]="selectedResponseIdx() !== i"
                                            [class.hover:text-slate-900]="selectedResponseIdx() !== i"
                                            (click)="selectedResponseIdx.set(i)"
                                        >
                                            {{ res.label || res.status }}
                                        </button>
                                    }
                                    <div class="ml-auto flex items-center">
                                        <button
                                            type="button"
                                            class="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                                            (click)="copy(prettyCurrentResponse(), 'response-' + selectedResponseIdx())"
                                        >
                                            <mat-icon class="icon-size-3.5">content_copy</mat-icon>
                                            {{ (copiedKey() === 'response-' + selectedResponseIdx() ? 'postman.requestEditor.about.copied' : 'postman.requestEditor.about.copy') | transloco }}
                                        </button>
                                    </div>
                                </div>
                                @if (responses()[selectedResponseIdx()]) {
                                    <pre
                                        class="hljs block overflow-x-auto p-3 text-xs leading-relaxed"
                                    ><code [innerHTML]="highlightedResponse()"></code></pre>
                                }
                            </div>
                        </section>
                    }

                    @if (notes().length) {
                        <section class="space-y-2">
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                {{ 'postman.requestEditor.about.notes' | transloco }}
                            </h3>
                            <ul class="list-disc space-y-1.5 pl-5 text-sm text-slate-700 dark:text-slate-200">
                                @for (note of notes(); track note) {
                                    <li>{{ note }}</li>
                                }
                            </ul>
                        </section>
                    }

                    @if (isEmpty()) {
                        <div
                            class="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200 bg-slate-50 py-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-800/40"
                        >
                            <mat-icon class="icon-size-8 opacity-60">menu_book</mat-icon>
                            <span>{{ 'postman.requestEditor.about.noDocsYet' | transloco }}</span>
                        </div>
                    }
                </div>
    `, styles: ["/* angular:styles/component:scss;650a852a284e9320d8cb915f1dec75daf3c6301593b42f0aa659f981b9d2b170;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/postman/request-editor/about-endpoint.component.ts */\npre.hljs {\n  background-color: rgb(15, 23, 42);\n  color: rgb(226, 232, 240);\n  border-radius: 0.5rem;\n  margin: 0;\n}\n/*# sourceMappingURL=about-endpoint.component.css.map */\n"] }]
  }], null, { docs: [{
    type: Input,
    args: [{ required: false }]
  }], endpoint: [{
    type: Input,
    args: [{ required: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutEndpointComponent, { className: "AboutEndpointComponent", filePath: "src/app/modules/postman/request-editor/about-endpoint.component.ts", lineNumber: 329 });
})();

// src/app/modules/postman/postman-audit-image.util.ts
var AUDIT_IMAGE_OMITTED_PLACEHOLDER = "[image omitted \u2014 see preview]";
var IMAGE_KEYS = /* @__PURE__ */ new Set(["screenshotbase64", "screenshot"]);
var isAuditImageKey = (key) => {
  const normalized = key.toLowerCase();
  return IMAGE_KEYS.has(normalized) || normalized.endsWith("screenshotbase64");
};
var looksLikeImageBase64 = (value) => {
  if (typeof value !== "string")
    return false;
  const trimmed = value.trim();
  if (!trimmed)
    return false;
  if (trimmed.toLowerCase().startsWith("data:image/"))
    return true;
  return /^(iVBOR|\/9j\/|R0lGOD|UklGR)/.test(trimmed);
};
var normalizeImageDataUrl = (raw) => {
  const trimmed = raw.trim();
  if (trimmed.toLowerCase().startsWith("data:image/"))
    return trimmed;
  return `data:image/png;base64,${trimmed}`;
};
var isTinyAuditPlaceholder = (raw) => {
  const payload = raw.includes("base64,") ? raw.slice(raw.indexOf("base64,") + 7) : raw;
  return payload.replace(/\s+/g, "").length < 200;
};
var extractFirstAuditImageDeep = (value) => {
  if (value === null || typeof value !== "object")
    return null;
  if (Array.isArray(value)) {
    for (const item of value) {
      const found = extractFirstAuditImageDeep(item);
      if (found)
        return found;
    }
    return null;
  }
  const record = value;
  for (const key of Object.keys(record)) {
    const nested = record[key];
    if (typeof nested === "string" && isAuditImageKey(key) && looksLikeImageBase64(nested)) {
      return nested;
    }
    if (nested !== null && typeof nested === "object") {
      const found = extractFirstAuditImageDeep(nested);
      if (found)
        return found;
    }
  }
  return null;
};
var redactAuditImages = (value) => {
  if (Array.isArray(value))
    return value.map((item) => redactAuditImages(item));
  if (value === null || typeof value !== "object")
    return value;
  const record = value;
  const next = {};
  for (const key of Object.keys(record)) {
    const nested = record[key];
    if (typeof nested === "string" && isAuditImageKey(key) && looksLikeImageBase64(nested)) {
      next[key] = AUDIT_IMAGE_OMITTED_PLACEHOLDER;
      continue;
    }
    next[key] = redactAuditImages(nested);
  }
  return next;
};

// src/app/modules/postman/response-viewer/json-table.component.ts
function JsonTableComponent_ng_container_0_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "postman.jsonTable.null"));
  }
}
function JsonTableComponent_ng_container_0_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1);
  }
}
function JsonTableComponent_ng_container_0_div_1_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.imageSrc(d_r1), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(2, 2, "postman.responseViewer.auditPreview"));
  }
}
function JsonTableComponent_ng_container_0_div_1_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('"', d_r1, '"');
  }
}
function JsonTableComponent_ng_container_0_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, JsonTableComponent_ng_container_0_div_1_ng_container_3_div_1_Template, 3, 4, "div", 11)(2, JsonTableComponent_ng_container_0_div_1_ng_container_3_ng_template_2_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const plainString_r3 = \u0275\u0275reference(3);
    const d_r1 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isImageValue(d_r1))("ngIfElse", plainString_r3);
  }
}
function JsonTableComponent_ng_container_0_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1);
  }
}
function JsonTableComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, JsonTableComponent_ng_container_0_div_1_span_1_Template, 3, 3, "span", 6)(2, JsonTableComponent_ng_container_0_div_1_span_2_Template, 2, 1, "span", 7)(3, JsonTableComponent_ng_container_0_div_1_ng_container_3_Template, 4, 2, "ng-container", 1)(4, JsonTableComponent_ng_container_0_div_1_span_4_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r1 === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", typeof d_r1 === "boolean");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", typeof d_r1 === "string");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", typeof d_r1 === "number");
  }
}
function JsonTableComponent_ng_container_0_div_2_table_7_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 22)(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 24);
    \u0275\u0275element(4, "postman-json-table", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", i_r6, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("data", item_r5)("expandAll", ctx_r1._expandAll);
  }
}
function JsonTableComponent_ng_container_0_div_2_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 20)(1, "tbody");
    \u0275\u0275template(2, JsonTableComponent_ng_container_0_div_2_table_7_tr_2_Template, 5, 3, "tr", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", d_r1);
  }
}
function JsonTableComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275listener("click", function JsonTableComponent_ng_container_0_div_2_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleExpanded());
    });
    \u0275\u0275elementStart(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, JsonTableComponent_ng_container_0_div_2_table_7_Template, 3, 1, "table", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isExpanded ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 4, "postman.jsonTable.array"), " (", d_r1.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isExpanded);
  }
}
function JsonTableComponent_ng_container_0_div_3_table_9_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 22)(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 24);
    \u0275\u0275element(4, "postman-json-table", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r8 = ctx.$implicit;
    const d_r1 = \u0275\u0275nextContext(3).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", key_r8, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("data", d_r1[key_r8])("expandAll", ctx_r1._expandAll);
  }
}
function JsonTableComponent_ng_container_0_div_3_table_9_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("{}");
  }
}
function JsonTableComponent_ng_container_0_div_3_table_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 20)(1, "tbody");
    \u0275\u0275template(2, JsonTableComponent_ng_container_0_div_3_table_9_tr_2_Template, 5, 3, "tr", 21)(3, JsonTableComponent_ng_container_0_div_3_table_9_tr_3_Template, 3, 1, "tr", 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getKeys(d_r1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getKeys(d_r1).length === 0);
  }
}
function JsonTableComponent_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 17);
    \u0275\u0275listener("click", function JsonTableComponent_ng_container_0_div_3_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleExpanded());
    });
    \u0275\u0275elementStart(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, JsonTableComponent_ng_container_0_div_3_table_9_Template, 4, 2, "table", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isExpanded ? "\u25BC" : "\u25B6");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(6, 5, "postman.jsonTable.object"), " (", ctx_r1.getKeys(d_r1).length, " ", ctx_r1.getKeys(d_r1).length === 1 ? \u0275\u0275pipeBind1(7, 7, "postman.jsonTable.key") : \u0275\u0275pipeBind1(8, 9, "postman.jsonTable.keys"), ")");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isExpanded);
  }
}
function JsonTableComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, JsonTableComponent_ng_container_0_div_1_Template, 5, 4, "div", 2)(2, JsonTableComponent_ng_container_0_div_2_Template, 8, 6, "div", 3)(3, JsonTableComponent_ng_container_0_div_3_Template, 10, 11, "div", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPrimitive(d_r1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isArray(d_r1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isObject(d_r1));
  }
}
var JsonTableComponent = class _JsonTableComponent {
  constructor() {
    this._sanitizer = inject(DomSanitizer);
    this.isExpanded = false;
    this._expandAll = false;
  }
  set data(val) {
    this._data = val;
    this.parsedData = this.tryParse(val);
  }
  set expandAll(value) {
    if (value) {
      this.isExpanded = true;
    }
    this._expandAll = value;
  }
  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }
  tryParse(val) {
    if (typeof val === "string") {
      try {
        const trimmed = val.trim();
        if (trimmed.startsWith("{") && trimmed.endsWith("}") || trimmed.startsWith("[") && trimmed.endsWith("]")) {
          const parsed = JSON.parse(val);
          if (typeof parsed === "object" && parsed !== null) {
            return parsed;
          }
        }
      } catch {
      }
    }
    return val;
  }
  typeof(val) {
    return typeof val;
  }
  isPrimitive(val) {
    return val === null || typeof val !== "object";
  }
  isArray(val) {
    return Array.isArray(val);
  }
  isObject(val) {
    return val !== null && typeof val === "object" && !Array.isArray(val);
  }
  getKeys(val) {
    return Object.keys(val);
  }
  isImageValue(val) {
    return looksLikeImageBase64(val);
  }
  imageSrc(val) {
    return this._sanitizer.bypassSecurityTrustUrl(normalizeImageDataUrl(val));
  }
  static {
    this.\u0275fac = function JsonTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JsonTableComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JsonTableComponent, selectors: [["postman-json-table"]], inputs: { data: "data", expandAll: "expandAll" }, decls: 1, vars: 1, consts: [["plainString", ""], [4, "ngIf"], ["class", "font-mono text-xs text-slate-800 dark:text-slate-200 break-all whitespace-pre-wrap select-text", 4, "ngIf"], ["class", "border dark:border-slate-800 rounded-md overflow-hidden my-1", 4, "ngIf"], ["class", "border dark:border-slate-800 rounded-md overflow-hidden my-1 shadow-sm", 4, "ngIf"], [1, "font-mono", "text-xs", "text-slate-800", "dark:text-slate-200", "break-all", "whitespace-pre-wrap", "select-text"], ["class", "text-slate-400 italic", 4, "ngIf"], ["class", "text-purple-600", 4, "ngIf"], ["class", "text-blue-600 dark:text-blue-400", 4, "ngIf"], [1, "text-slate-400", "italic"], [1, "text-purple-600"], ["class", "space-y-2", 4, "ngIf", "ngIfElse"], [1, "space-y-2"], [1, "max-h-64", "max-w-full", "rounded-lg", "border", "border-slate-200", "object-contain", "dark:border-slate-700", 3, "src", "alt"], [1, "text-green-700", "dark:text-green-400"], [1, "text-blue-600", "dark:text-blue-400"], [1, "border", "dark:border-slate-800", "rounded-md", "overflow-hidden", "my-1"], [1, "px-2", "py-1", "bg-slate-100", "dark:bg-slate-800/50", "text-xs", "text-slate-500", "font-mono", "border-b", "dark:border-slate-800", "cursor-pointer", "hover:bg-slate-200", "dark:hover:bg-slate-700/50", "transition-colors", "flex", "items-center", "gap-2", "select-none", 3, "click"], [1, "text-[10px]"], ["class", "w-full text-left text-xs border-collapse", 4, "ngIf"], [1, "w-full", "text-left", "text-xs", "border-collapse"], ["class", "border-b dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/30", 4, "ngFor", "ngForOf"], [1, "border-b", "dark:border-slate-800", "last:border-0", "hover:bg-slate-50", "dark:hover:bg-slate-900/30"], [1, "p-2", "w-10", "text-slate-400", "font-mono", "text-[10px]", "border-r", "dark:border-slate-800", "text-center", "align-top", "bg-slate-50/50", "dark:bg-slate-900/20"], [1, "p-2"], [3, "data", "expandAll"], [1, "border", "dark:border-slate-800", "rounded-md", "overflow-hidden", "my-1", "shadow-sm"], [1, "p-2", "w-1/3", "min-w-[120px]", "max-w-[200px]", "align-top", "font-semibold", "text-slate-600", "dark:text-slate-400", "border-r", "dark:border-slate-800", "bg-slate-50/50", "dark:bg-slate-900/20", "break-words"], [1, "p-2", "text-slate-400", "italic"]], template: function JsonTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, JsonTableComponent_ng_container_0_Template, 4, 3, "ng-container", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.parsedData);
      }
    }, dependencies: [_JsonTableComponent, CommonModule, NgForOf, NgIf, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=json-table.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonTableComponent, [{
    type: Component,
    args: [{ selector: "postman-json-table", standalone: true, imports: [CommonModule, JsonTableComponent, TranslocoPipe], template: `
    <ng-container *ngIf="parsedData as d">
      <!-- Primitives -->
      <div
        *ngIf="isPrimitive(d)"
        class="font-mono text-xs text-slate-800 dark:text-slate-200 break-all whitespace-pre-wrap select-text"
      >
        <span *ngIf="d === null" class="text-slate-400 italic">{{
          'postman.jsonTable.null' | transloco
        }}</span>
        <span *ngIf="typeof d === 'boolean'" class="text-purple-600">{{ d }}</span>
        <ng-container *ngIf="typeof d === 'string'">
          <div *ngIf="isImageValue(d); else plainString" class="space-y-2">
            <img
              [src]="imageSrc(d)"
              [alt]="'postman.responseViewer.auditPreview' | transloco"
              class="max-h-64 max-w-full rounded-lg border border-slate-200 object-contain dark:border-slate-700"
            />
          </div>
          <ng-template #plainString>
            <span class="text-green-700 dark:text-green-400">"{{ d }}"</span>
          </ng-template>
        </ng-container>
        <span *ngIf="typeof d === 'number'" class="text-blue-600 dark:text-blue-400">{{ d }}</span>
      </div>

      <!-- Arrays -->
      <div *ngIf="isArray(d)" class="border dark:border-slate-800 rounded-md overflow-hidden my-1">
        <div
          (click)="toggleExpanded()"
          class="px-2 py-1 bg-slate-100 dark:bg-slate-800/50 text-xs text-slate-500 font-mono border-b dark:border-slate-800 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-colors flex items-center gap-2 select-none"
        >
          <span class="text-[10px]">{{ isExpanded ? '\u25BC' : '\u25B6' }}</span>
          <span>{{ 'postman.jsonTable.array' | transloco }} ({{ d.length }})</span>
        </div>
        <table *ngIf="isExpanded" class="w-full text-left text-xs border-collapse">
          <tbody>
            <tr
              *ngFor="let item of d; let i = index"
              class="border-b dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/30"
            >
              <td
                class="p-2 w-10 text-slate-400 font-mono text-[10px] border-r dark:border-slate-800 text-center align-top bg-slate-50/50 dark:bg-slate-900/20"
              >
                {{ i }}
              </td>
              <td class="p-2">
                <postman-json-table [data]="item" [expandAll]="_expandAll"></postman-json-table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Objects -->
      <div
        *ngIf="isObject(d)"
        class="border dark:border-slate-800 rounded-md overflow-hidden my-1 shadow-sm"
      >
        <div
          (click)="toggleExpanded()"
          class="px-2 py-1 bg-slate-100 dark:bg-slate-800/50 text-xs text-slate-500 font-mono border-b dark:border-slate-800 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-colors flex items-center gap-2 select-none"
        >
          <span class="text-[10px]">{{ isExpanded ? '\u25BC' : '\u25B6' }}</span>
          <span
            >{{ 'postman.jsonTable.object' | transloco }} ({{ getKeys(d).length }}
            {{
              getKeys(d).length === 1
                ? ('postman.jsonTable.key' | transloco)
                : ('postman.jsonTable.keys' | transloco)
            }})</span
          >
        </div>
        <table *ngIf="isExpanded" class="w-full text-left text-xs border-collapse">
          <tbody>
            <tr
              *ngFor="let key of getKeys(d)"
              class="border-b dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/30"
            >
              <td
                class="p-2 w-1/3 min-w-[120px] max-w-[200px] align-top font-semibold text-slate-600 dark:text-slate-400 border-r dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 break-words"
              >
                {{ key }}
              </td>
              <td class="p-2">
                <postman-json-table [data]="d[key]" [expandAll]="_expandAll"></postman-json-table>
              </td>
            </tr>
            <tr *ngIf="getKeys(d).length === 0">
              <td class="p-2 text-slate-400 italic">{{ '{}' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ng-container>
  `, styles: ["/* angular:styles/component:scss;c146adc056889ecc2a92353d7c9f90548324ea4c8e13c31f51defdbd3b038aeb;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/postman/response-viewer/json-table.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=json-table.component.css.map */\n"] }]
  }], null, { data: [{
    type: Input
  }], expandAll: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JsonTableComponent, { className: "JsonTableComponent", filePath: "src/app/modules/postman/response-viewer/json-table.component.ts", lineNumber: 116 });
})();

export {
  DEFAULT_POSTMAN_COUNTRY,
  catalogCountryScope,
  catalogCountryScopeForCountries,
  endpointMatchesCountryFilter,
  getHumanAuthnDemoRoute,
  POSTMAN_INCLUDE_COST_KEY,
  ensurePostmanIncludeCostParam,
  syncPostmanIncludeCostParam,
  resolvePostmanIncludeCostForSend,
  normalizePostmanSexoValue,
  filterPostmanSexoEnumOptions,
  getPostmanSexoLabelKey,
  buildPostmanEffectiveUrl,
  getPostmanPathParamKeysForEndpoint,
  getPostmanRequestValidationIssues,
  isPostmanRequestValid,
  getPostmanXorParamLayout,
  filterVisibleXorDocumentRows,
  getPostmanDependencyGuidanceKind,
  endpointShowsGroupedRequestGuidance,
  getPostmanSandboxProfileKey,
  formatPostmanSandboxProfileLabel,
  getPostmanSandboxConfig,
  isPostmanSandboxEndpoint,
  getPostmanSandboxProfiles,
  getPostmanSandboxProfilePickerValue,
  getPostmanSandboxI18nKey,
  getPostmanSandboxShowProfileMeta,
  getPostmanSandboxDefaultDocumentType,
  applyPostmanSandboxParamDefaults,
  mergeParamsFromDocs,
  formatCatalogPrice,
  sanitizeDisplayPayload,
  PostmanService,
  AboutEndpointComponent,
  normalizeImageDataUrl,
  isTinyAuditPlaceholder,
  extractFirstAuditImageDeep,
  redactAuditImages,
  JsonTableComponent
};
//# sourceMappingURL=chunk-Z7VJQHJ7.js.map
