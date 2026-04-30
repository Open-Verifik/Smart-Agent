import {
  isClientVisibleBatchDependencyField
} from "./chunk-RYDKXTHD.js";

// src/app/modules/smart-batch/batch-input-csv.util.ts
var collectDescriptors = (config) => {
  if (!config?.steps)
    return [];
  const fieldsMap = /* @__PURE__ */ new Map();
  config.steps.sort((a, b) => a.sequence - b.sequence).forEach((step) => {
    const feature = step.appFeature;
    const dependencies = feature?.dependencies || [];
    dependencies.forEach((dep) => {
      if (!dep?.field)
        return;
      if (!isClientVisibleBatchDependencyField(dep.field))
        return;
      if (!fieldsMap.has(dep.field) || dep.required) {
        fieldsMap.set(dep.field, {
          field: dep.field,
          required: dep.required || false
        });
      }
    });
  });
  return Array.from(fieldsMap.values()).sort((a, b) => {
    if (a.required !== b.required)
      return b.required ? 1 : -1;
    return a.field.localeCompare(b.field);
  });
};
var getBatchInputCsvHeaders = (config) => collectDescriptors(config).map((d) => d.field);
var escapeCsvRow = (cells) => cells.map((cell) => {
  const s = String(cell ?? "");
  if (s.includes(",") || s.includes('"') || s.includes("\n") || s.includes("\r")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}).join(",");
var inputDataValueForCsvCell = (value) => {
  if (value === null || value === void 0)
    return "";
  if (typeof value === "object") {
    try {
      return JSON.stringify(value);
    } catch {
      return String(value);
    }
  }
  return String(value);
};

export {
  getBatchInputCsvHeaders,
  escapeCsvRow,
  inputDataValueForCsvCell
};
//# sourceMappingURL=chunk-2M2KHA7S.js.map
