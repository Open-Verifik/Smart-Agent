import {
  buildColombiaVehicleReport,
  hasColombiaVehicleReportSteps
} from "./chunk-R7BWRX3I.js";
import {
  reportModelHasBlocks,
  reportModelHasRenderableContent
} from "./chunk-OB3TXKFD.js";

// src/app/modules/smart-batch/template-match.util.ts
function resolvePath(path, data) {
  if (!path || !data)
    return void 0;
  const parts = path.split(".");
  let current = data;
  for (const part of parts) {
    if (current == null || typeof current !== "object")
      return void 0;
    current = current[part];
  }
  return current;
}
function hasValue(value, forTable) {
  if (value == null)
    return false;
  if (forTable)
    return typeof value === "object" && !Array.isArray(value);
  return true;
}
function extractTemplateDataPaths(template) {
  const paths = [];
  const addFromSection = (section) => {
    if (!section?.dataPath)
      return;
    if (section.type === "field") {
      paths.push({ path: section.dataPath, label: section.label, isTable: false });
    } else if (section.type === "table") {
      paths.push({ path: section.dataPath, label: section.label, isTable: true });
    }
  };
  if (template.header?.dataPath)
    addFromSection(template.header);
  if (template.footer?.dataPath)
    addFromSection(template.footer);
  for (const s of template.sections ?? []) {
    addFromSection(s);
  }
  return paths;
}
function buildRowDataForResolution(row, options) {
  const data = {
    inputData: row.inputData ?? {},
    results: row.results ?? {}
  };
  const steps = options?.steps ?? [];
  let localReport;
  if (steps.length > 0 && hasColombiaVehicleReportSteps(steps)) {
    localReport = buildColombiaVehicleReport({
      rowIndex: row.rowIndex ?? 0,
      inputData: row.inputData,
      results: row.results,
      errors: row.errors ?? options?.errors
    }, steps, { batchName: options?.batchName });
  }
  if (reportModelHasRenderableContent(options?.report)) {
    data.report = options.report;
    return data;
  }
  if (reportModelHasRenderableContent(localReport)) {
    data.report = localReport;
  } else if (reportModelHasBlocks(localReport)) {
    data.report = localReport;
  }
  return data;
}
function validateTemplateAgainstData(template, rowData) {
  const paths = extractTemplateDataPaths(template);
  const matchedPaths = [];
  const missingPaths = [];
  for (const { path, label, isTable } of paths) {
    const value = resolvePath(path, rowData);
    if (hasValue(value, isTable)) {
      matchedPaths.push(path);
    } else {
      missingPaths.push({ path, label });
    }
  }
  return {
    matches: missingPaths.length === 0,
    matchedPaths,
    missingPaths
  };
}

export {
  buildRowDataForResolution,
  validateTemplateAgainstData
};
//# sourceMappingURL=chunk-FJCP2PEX.js.map
