// src/app/core/utils/spreadsheet-sanitize.util.ts
var EMPTY_PLACEHOLDERS = /* @__PURE__ */ new Set(["-", "n/a", "na"]);
var cellIsEmptyForTrim = (value, options = {}) => {
  if (value === null || value === void 0)
    return true;
  const normalizedValue = String(value).trim();
  if (!normalizedValue)
    return true;
  if (!options.treatPlaceholdersAsEmpty)
    return false;
  return EMPTY_PLACEHOLDERS.has(normalizedValue.toLowerCase());
};
var sanitizeMatrix = (rows, options = {}) => {
  const nonEmptyRows = rows.filter((row) => !isMatrixRowEmpty(row, options));
  if (!nonEmptyRows.length) {
    return { rows: [] };
  }
  const columnRange = getMatrixColumnRange(nonEmptyRows, options);
  if (!columnRange) {
    return { rows: [] };
  }
  return {
    rows: nonEmptyRows.map((row) => row.slice(columnRange.firstColumnIndex, columnRange.lastColumnIndex + 1))
  };
};
var sanitizePapaObjectRows = (rows, fields, options = {}) => {
  const fieldOrder = getFieldOrder(rows, fields);
  const nonEmptyRows = rows.filter((row) => !isObjectRowEmpty(row, fieldOrder, options));
  if (!nonEmptyRows.length) {
    return { fieldOrder: [], rows: [] };
  }
  const columnRange = getObjectColumnRange(nonEmptyRows, fieldOrder, options);
  if (!columnRange) {
    return { fieldOrder: [], rows: [] };
  }
  const trimmedFieldOrder = fieldOrder.slice(columnRange.firstColumnIndex, columnRange.lastColumnIndex + 1);
  return {
    fieldOrder: trimmedFieldOrder,
    rows: nonEmptyRows.map((row) => copyFields(row, trimmedFieldOrder))
  };
};
var copyFields = (row, fields) => {
  const copiedRow = {};
  fields.forEach((field) => {
    copiedRow[field] = row[field];
  });
  return copiedRow;
};
var getFieldOrder = (rows, fields) => {
  if (fields?.length)
    return fields;
  const firstRow = rows.find((row) => row && typeof row === "object");
  return firstRow ? Object.keys(firstRow).filter((key) => key !== "__parsed_extra") : [];
};
var getMatrixColumnRange = (rows, options) => {
  const maxColumnLength = rows.reduce((maxLength, row) => Math.max(maxLength, row.length), 0);
  let firstColumnIndex = -1;
  let lastColumnIndex = -1;
  for (let columnIndex = 0; columnIndex < maxColumnLength; columnIndex++) {
    const hasValue = rows.some((row) => !cellIsEmptyForTrim(row[columnIndex], options));
    if (!hasValue)
      continue;
    if (firstColumnIndex === -1)
      firstColumnIndex = columnIndex;
    lastColumnIndex = columnIndex;
  }
  if (firstColumnIndex === -1)
    return null;
  return { firstColumnIndex, lastColumnIndex };
};
var getObjectColumnRange = (rows, fields, options) => {
  let firstColumnIndex = -1;
  let lastColumnIndex = -1;
  fields.forEach((field, columnIndex) => {
    const hasValue = rows.some((row) => !cellIsEmptyForTrim(row[field], options));
    if (!hasValue)
      return;
    if (firstColumnIndex === -1)
      firstColumnIndex = columnIndex;
    lastColumnIndex = columnIndex;
  });
  if (firstColumnIndex === -1)
    return null;
  return { firstColumnIndex, lastColumnIndex };
};
var isMatrixRowEmpty = (row, options) => row.every((cell) => cellIsEmptyForTrim(cell, options));
var isObjectRowEmpty = (row, fields, options = {}) => {
  if (!fields.length)
    return !Object.values(row).some((value) => !cellIsEmptyForTrim(value, options));
  return fields.every((field) => cellIsEmptyForTrim(row[field], options));
};

export {
  sanitizeMatrix,
  sanitizePapaObjectRows
};
//# sourceMappingURL=chunk-744LRSPF.js.map
