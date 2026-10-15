import {
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-batch/smart-batch-dependency.constants.ts
var CLIENT_HIDDEN_DEPENDENCY_FIELDS = /* @__PURE__ */ new Set(["force"]);
var isClientVisibleBatchDependencyField = (field) => {
  if (!field)
    return false;
  return !CLIENT_HIDDEN_DEPENDENCY_FIELDS.has(field);
};
var stripClientHiddenRowFields = (row) => {
  const out = __spreadValues({}, row);
  for (const hidden of CLIENT_HIDDEN_DEPENDENCY_FIELDS) {
    for (const k of Object.keys(out)) {
      if (k.toLowerCase() === hidden) {
        delete out[k];
      }
    }
  }
  return out;
};

export {
  isClientVisibleBatchDependencyField,
  stripClientHiddenRowFields
};
//# sourceMappingURL=chunk-USONFPXP.js.map
