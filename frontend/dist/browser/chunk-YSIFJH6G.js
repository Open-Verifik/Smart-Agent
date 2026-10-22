import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

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

export {
  mergeParamsFromDocs,
  formatCatalogPrice,
  sanitizeDisplayPayload
};
//# sourceMappingURL=chunk-YSIFJH6G.js.map
