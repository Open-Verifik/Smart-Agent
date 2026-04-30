import {
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/smart-batch/step-result-display.util.ts
var DEFAULT_MAX_DEPTH = 14;
var DEFAULT_MAX_ROWS = 500;
var DEFAULT_MAX_CELL_CHARS = 2e4;
var LABEL_JOINER = " \u203A ";
var BLOB_KEY_PATTERN = /base64|pdfbytes|pdfdata/i;
var humanizeApiSegment = (key) => {
  if (!key)
    return "";
  const withSpaces = key.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2").trim();
  return withSpaces.replace(/^./, (c) => c.toUpperCase());
};
var joinPathLabel = (segments) => {
  const humanized = segments.map(humanizeApiSegment).filter(Boolean);
  const deduped = [];
  for (const h of humanized) {
    if (deduped.length > 0 && deduped[deduped.length - 1] === h)
      continue;
    deduped.push(h);
  }
  return deduped.join(LABEL_JOINER);
};
var stepDisplayLabelFromSegments = (segments) => joinPathLabel(segments);
var shouldOmitKey = (key) => {
  if (!key)
    return false;
  if (BLOB_KEY_PATTERN.test(key))
    return true;
  return false;
};
var truncateCell = (s, maxCellChars) => {
  if (s.length <= maxCellChars)
    return s;
  return s.slice(0, maxCellChars) + "\n\u2026";
};
var isCodeDescriptionObject = (v) => {
  if (!v || typeof v !== "object" || Array.isArray(v))
    return false;
  const o = v;
  const code = o.code ?? o.codigo ?? o.Code;
  const desc = o.description ?? o.descripcion ?? o.Description;
  return (typeof code === "string" || typeof code === "number") && typeof desc === "string";
};
var formatCodeDescriptionLine = (item) => {
  const code = item.code ?? item.codigo ?? item.Code;
  const desc = item.description ?? item.descripcion ?? item.Description;
  const c = code != null ? String(code) : "";
  const d = desc != null ? String(desc) : "";
  if (c && d)
    return `${c} \u2014 ${d}`;
  return c || d || "\u2014";
};
var flattenStepResultDisplay = (data, options = {}) => {
  const maxDepth = options.maxDepth ?? DEFAULT_MAX_DEPTH;
  const maxRows = options.maxRows ?? DEFAULT_MAX_ROWS;
  const maxCellChars = options.maxCellChars ?? DEFAULT_MAX_CELL_CHARS;
  const rows = [];
  const seenObjects = /* @__PURE__ */ new WeakSet();
  const flushTruncationRow = () => {
    if (rows.some((r) => r.label === "\u2026truncated"))
      return;
    rows.push({ label: "\u2026truncated", value: "Additional fields omitted" });
  };
  const walk = (value, segments, depth) => {
    if (rows.length >= maxRows) {
      flushTruncationRow();
      return;
    }
    if (value === null || value === void 0) {
      rows.push({ label: joinPathLabel(segments) || "Result", value: "\u2014" });
      return;
    }
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: truncateCell(String(value), maxCellChars)
      });
      return;
    }
    if (typeof value === "bigint") {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: truncateCell(String(value), maxCellChars)
      });
      return;
    }
    if (value instanceof Date) {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: value.toISOString()
      });
      return;
    }
    if (typeof value !== "object") {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: truncateCell(String(value), maxCellChars)
      });
      return;
    }
    if (seenObjects.has(value)) {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: "[Circular]"
      });
      return;
    }
    seenObjects.add(value);
    if (depth > maxDepth) {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: "[Max depth]"
      });
      seenObjects.delete(value);
      return;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) {
        rows.push({
          label: joinPathLabel(segments) || "Result",
          value: "\u2014"
        });
        seenObjects.delete(value);
        return;
      }
      const allCodeDesc = value.every((el) => el && typeof el === "object" && !Array.isArray(el) && isCodeDescriptionObject(el));
      if (allCodeDesc) {
        value.forEach((el, i) => {
          if (rows.length >= maxRows) {
            flushTruncationRow();
            return;
          }
          const line = formatCodeDescriptionLine(el);
          const leafSeg = segments.length > 0 ? [...segments, String(i + 1)] : [String(i + 1)];
          rows.push({
            label: joinPathLabel(leafSeg),
            value: truncateCell(line, maxCellChars)
          });
        });
        seenObjects.delete(value);
        return;
      }
      const primitivesOnly = value.every((el) => el === null || el === void 0 || typeof el === "string" || typeof el === "number" || typeof el === "boolean" || typeof el === "bigint");
      if (primitivesOnly) {
        rows.push({
          label: joinPathLabel(segments) || "Result",
          value: truncateCell(value.map((v) => v == null ? "\u2014" : String(v)).join(", "), maxCellChars)
        });
        seenObjects.delete(value);
        return;
      }
      value.forEach((el, i) => {
        const nextSeg = [...segments, String(i + 1)];
        walk(el, nextSeg, depth + 1);
      });
      seenObjects.delete(value);
      return;
    }
    const allKeys = Object.keys(value);
    if (allKeys.length === 0) {
      rows.push({
        label: joinPathLabel(segments) || "Result",
        value: "\u2014"
      });
      seenObjects.delete(value);
      return;
    }
    for (const key of allKeys) {
      if (rows.length >= maxRows) {
        flushTruncationRow();
        break;
      }
      if (shouldOmitKey(key)) {
        rows.push({
          label: joinPathLabel([...segments, key]),
          value: "[omitted]"
        });
        continue;
      }
      const raw = value[key];
      walk(raw, [...segments, key], depth + 1);
    }
    seenObjects.delete(value);
  };
  walk(data, [], 0);
  return rows;
};
var FIXED_INPUT_LABELS = ["Document Number", "Document Type"];
var truncatedSortKey = (label) => label === "\u2026truncated" || label.startsWith("\u2026");
var topLevelSegment = (label) => {
  const sep = " \u203A ";
  const i = label.indexOf(sep);
  return i === -1 ? label : label.slice(0, i);
};
var sortStepExportFieldLabels = (labels) => {
  const uniq = [...new Set(labels)];
  const fixedAvailable = FIXED_INPUT_LABELS.filter((f) => uniq.includes(f));
  const rest = uniq.filter((l) => !FIXED_INPUT_LABELS.includes(l));
  const bucket = (label) => {
    if (truncatedSortKey(label))
      return 9999;
    const t = topLevelSegment(label).toLowerCase();
    if (t.startsWith("commercial registry"))
      return 10;
    if (t.startsWith("establishment owner"))
      return 20;
    if (t.startsWith("economic activities"))
      return 30;
    return 100;
  };
  rest.sort((a, b) => {
    const ba = bucket(a);
    const bb = bucket(b);
    if (ba !== bb)
      return ba - bb;
    const ta = topLevelSegment(a).toLocaleLowerCase();
    const tb = topLevelSegment(b).toLocaleLowerCase();
    if (ta !== tb)
      return ta.localeCompare(tb);
    return a.localeCompare(b, void 0, { numeric: true });
  });
  return [...fixedAvailable, ...rest];
};

// src/app/modules/smart-batch/step-result-presenters/registry.ts
var isColombiaRuesLikeShape = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return false;
  const o = data;
  return Boolean(o.commercialRegistry && Array.isArray(o.economicActivities));
};
var formatEconomicActivityLine = (item) => {
  if (item === null || item === void 0)
    return "\u2014";
  if (typeof item !== "object" || Array.isArray(item))
    return String(item);
  const e = item;
  const code = e.code ?? e.codigo ?? e.activityCode ?? e.ciiu;
  const rawName = e.name;
  const nameIsCiiuSlot = typeof rawName === "string" && /^ciiu\d*$/i.test(rawName.trim());
  const desc = e.description ?? e.descripcion ?? e.activityDescription ?? e.text ?? (nameIsCiiuSlot ? void 0 : rawName);
  const c = code != null ? String(code).trim() : "";
  const d = desc != null ? String(desc).trim() : "";
  if (c && d)
    return `${c} \u2014 ${d}`;
  if (c || d)
    return c || d;
  if (nameIsCiiuSlot)
    return "\u2014";
  return "\u2014";
};
var presentColombiaRues = (data) => {
  if (!data || typeof data !== "object" || Array.isArray(data))
    return null;
  const o = data;
  const economicActivities = o.economicActivities;
  if (!Array.isArray(economicActivities) || economicActivities.length === 0)
    return null;
  const rest = __spreadValues({}, o);
  delete rest.economicActivities;
  const base = flattenStepResultDisplay(rest);
  const activityRows = economicActivities.map((ea, i) => ({
    label: stepDisplayLabelFromSegments(["economicActivities", String(i + 1)]),
    value: formatEconomicActivityLine(ea)
  }));
  return [...base, ...activityRows];
};
var PRESENTERS_BY_CODE = {
  colombia_api_rues: presentColombiaRues,
  colombia_api_rues_full: presentColombiaRues,
  colombia_api_rues_v3: presentColombiaRues,
  colombia_api_rues_full_v3: presentColombiaRues
};
var getStepDisplayFields = (ctx, data) => {
  const code = ctx.featureCode?.trim() ?? "";
  let presented = null;
  if (code && PRESENTERS_BY_CODE[code]) {
    presented = PRESENTERS_BY_CODE[code](data);
  } else if (!code && isColombiaRuesLikeShape(data)) {
    presented = presentColombiaRues(data);
  }
  if (presented && presented.length > 0) {
    return presented;
  }
  return flattenStepResultDisplay(data);
};

export {
  sortStepExportFieldLabels,
  getStepDisplayFields
};
//# sourceMappingURL=chunk-RJ42CGUZ.js.map
