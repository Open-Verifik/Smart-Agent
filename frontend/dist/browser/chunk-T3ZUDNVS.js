import {
  isClientVisibleBatchDependencyField
} from "./chunk-USONFPXP.js";

// src/app/modules/smart-batch/batch-required-fields.util.ts
var BATCH_INPUT_META_SKIPPED_STEPS_KEY = "__batchSkippedSteps";
var normalizeEnumToken = (value) => String(value).trim().toLowerCase();
var mergeEnumValues = (prev, next) => {
  const combined = [...prev ?? [], ...next ?? []];
  if (combined.length === 0)
    return void 0;
  const seen = /* @__PURE__ */ new Set();
  const merged = [];
  for (const value of combined) {
    const token = normalizeEnumToken(value);
    if (!token || seen.has(token))
      continue;
    seen.add(token);
    merged.push(String(value).trim());
  }
  return merged.sort((a, b) => a.localeCompare(b));
};
var getStepFeature = (step) => step.appFeature;
var getStepDependencies = (step) => {
  const dependencies = getStepFeature(step)?.dependencies ?? [];
  return dependencies.filter((dep) => dep?.field && typeof dep.field === "string" && isClientVisibleBatchDependencyField(dep.field)).map((dep) => ({
    field: String(dep.field),
    required: Boolean(dep.required),
    enum: dep.enum ?? void 0,
    type: dep.type ?? void 0,
    description: dep.description ?? void 0,
    dependencyGroup: dep.dependencyGroup,
    requiredWhen: dep.requiredWhen,
    dateFormat: dep.dateFormat ?? void 0
  }));
};
var getEnabledSteps = (config) => [...config?.steps ?? []].filter((step) => step.enabled !== false).sort((a, b) => a.sequence - b.sequence);
var getEnumValuesForStepField = (step, fieldName) => {
  const dep = getStepDependencies(step).find((d) => d.field === fieldName);
  const enums = dep?.enum;
  return enums?.length ? enums : void 0;
};
var getUnionEnumValuesForField = (config, fieldName) => {
  let union;
  for (const step of getEnabledSteps(config)) {
    union = mergeEnumValues(union, getEnumValuesForStepField(step, fieldName));
  }
  return union;
};
var extractRequiredFieldsFromConfig = (config) => {
  if (!config?.steps?.length)
    return [];
  const fieldsMap = /* @__PURE__ */ new Map();
  getEnabledSteps(config).forEach((step) => {
    const feature = getStepFeature(step);
    getStepDependencies(step).forEach((dep) => {
      const prev = fieldsMap.get(dep.field);
      const stepEnum = dep.enum?.length ? dep.enum : void 0;
      const enumValuesByStep = [...prev?.enumValuesByStep ?? []];
      if (stepEnum) {
        enumValuesByStep.push({
          stepSequence: step.sequence,
          stepName: feature?.name || "Unknown Step",
          stepCode: feature?.code,
          values: stepEnum
        });
      }
      fieldsMap.set(dep.field, {
        field: dep.field,
        required: Boolean(dep.required) || Boolean(prev?.required),
        enumValues: mergeEnumValues(prev?.enumValues, stepEnum),
        enumValuesByStep,
        type: dep.type || prev?.type || "string",
        description: dep.description || prev?.description
      });
    });
  });
  return Array.from(fieldsMap.values()).sort((a, b) => {
    if (a.required !== b.required)
      return a.required ? -1 : 1;
    return a.field.localeCompare(b.field);
  });
};
var getStepIncompatibilityReason = (step, inputData) => {
  const input = inputData ?? {};
  for (const dep of getStepDependencies(step)) {
    const enums = dep.enum;
    if (!enums?.length)
      continue;
    const raw = input[dep.field];
    if (raw == null || String(raw).trim() === "")
      continue;
    const normalizedValue = normalizeEnumToken(raw);
    const validValues = enums.map((v) => String(v).trim());
    const validTokens = validValues.map((v) => normalizeEnumToken(v));
    if (!validTokens.includes(normalizedValue)) {
      return {
        field: dep.field,
        value: String(raw).trim(),
        allowedValues: validValues
      };
    }
  }
  return null;
};
var getStepCompatibilityViews = (config, inputData) => getEnabledSteps(config).map((step) => {
  const feature = getStepFeature(step);
  const skipReason = getStepIncompatibilityReason(step, inputData) ?? void 0;
  return {
    sequence: step.sequence,
    stepName: feature?.name || "Unknown Step",
    stepCode: feature?.code,
    compatible: !skipReason,
    skipReason
  };
});
var getBatchSkippedStepsFromInput = (inputData) => {
  const raw = inputData?.[BATCH_INPUT_META_SKIPPED_STEPS_KEY];
  if (!Array.isArray(raw))
    return [];
  return raw.filter((item) => item && typeof item === "object");
};
var getPresetStepCount = (template) => {
  if (template.presetSteps?.length)
    return template.presetSteps.length;
  return template.sections?.length ?? 0;
};

export {
  mergeEnumValues,
  getUnionEnumValuesForField,
  extractRequiredFieldsFromConfig,
  getStepCompatibilityViews,
  getBatchSkippedStepsFromInput,
  getPresetStepCount
};
//# sourceMappingURL=chunk-T3ZUDNVS.js.map
