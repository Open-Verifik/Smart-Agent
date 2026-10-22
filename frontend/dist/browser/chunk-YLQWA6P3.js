import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-FWBWCXY5.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  NgClass,
  NgStyle,
  NgTemplateOutlet,
  Output,
  ViewChild,
  ViewChildren,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YWP2Y7QK.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-batch/header-logos.util.ts
var HEADER_LOGO_INSET = 32;
var HEADER_LOGO_BAND_TOP = 16;
var HEADER_LOGO_GAP = 8;
var HEADER_LOGO_DEFAULT_WIDTH = 140;
var HEADER_LOGO_DEFAULT_HEIGHT = 44;
var HEADER_LOGO_MIN_WIDTH = 48;
var HEADER_LOGO_MAX_WIDTH = 280;
var HEADER_LOGO_MIN_HEIGHT = 24;
var HEADER_LOGO_MAX_HEIGHT = 88;
var HEADER_LOGO_BAND_HEIGHT = HEADER_LOGO_DEFAULT_HEIGHT + 16;
var alignOf = (align) => align === "center" || align === "right" ? align : "left";
function companyLogoBand(logo) {
  return logo?.band === "footer" ? "footer" : "header";
}
function fitHeaderLogoSize(width, height, targetHeight) {
  const baseW = Math.max(1, Number(width) || HEADER_LOGO_DEFAULT_WIDTH);
  const baseH = Math.max(1, Number(height) || HEADER_LOGO_DEFAULT_HEIGHT);
  const ratio = baseW / baseH;
  let nextHeight = targetHeight == null ? baseH : Number(targetHeight);
  if (!Number.isFinite(nextHeight))
    nextHeight = baseH;
  nextHeight = Math.min(HEADER_LOGO_MAX_HEIGHT, Math.max(HEADER_LOGO_MIN_HEIGHT, nextHeight));
  let nextWidth = nextHeight * ratio;
  if (nextWidth > HEADER_LOGO_MAX_WIDTH) {
    nextWidth = HEADER_LOGO_MAX_WIDTH;
    nextHeight = Math.max(HEADER_LOGO_MIN_HEIGHT, nextWidth / ratio);
  } else if (nextWidth < HEADER_LOGO_MIN_WIDTH) {
    nextWidth = HEADER_LOGO_MIN_WIDTH;
    nextHeight = Math.min(HEADER_LOGO_MAX_HEIGHT, nextWidth / ratio);
  }
  return {
    width: Math.round(nextWidth),
    height: Math.round(Math.min(HEADER_LOGO_MAX_HEIGHT, nextHeight))
  };
}
function headerLogoBandHeight(logos) {
  let tallest = HEADER_LOGO_DEFAULT_HEIGHT;
  for (const logo of logos) {
    if (!logo?.src)
      continue;
    tallest = Math.max(tallest, fitHeaderLogoSize(logo.width, logo.height).height);
  }
  return tallest + 16;
}
function placeHeaderLogos(logos, pageWidth, band = "header") {
  const width = Number(pageWidth);
  if (!Number.isFinite(width) || width <= HEADER_LOGO_INSET * 2)
    return [];
  const usable = width - HEADER_LOGO_INSET * 2;
  const groups = { left: [], center: [], right: [] };
  for (const logo of logos) {
    if (!logo?.src || companyLogoBand(logo) !== band)
      continue;
    groups[alignOf(logo.align)].push(logo);
  }
  const placed = [];
  const bandHeight = headerLogoBandHeight(logos.filter((logo) => companyLogoBand(logo) === band));
  for (const align of ["left", "center", "right"]) {
    const group = groups[align];
    if (!group.length)
      continue;
    const fitted = group.map((logo) => __spreadValues(__spreadValues({}, logo), fitHeaderLogoSize(logo.width, logo.height)));
    const natural = fitted.reduce((sum, logo) => sum + logo.width, 0) + HEADER_LOGO_GAP * (fitted.length - 1);
    const scale = natural > usable ? usable / natural : 1;
    const widths = fitted.map((logo) => logo.width * scale);
    const heights = fitted.map((logo) => logo.height * scale);
    const total = widths.reduce((sum, item) => sum + item, 0) + HEADER_LOGO_GAP * (fitted.length - 1);
    let x = HEADER_LOGO_INSET;
    if (align === "right")
      x = width - HEADER_LOGO_INSET - total;
    if (align === "center")
      x = HEADER_LOGO_INSET + (usable - total) / 2;
    fitted.forEach((logo, index) => {
      const height = heights[index];
      placed.push(__spreadProps(__spreadValues({}, logo), {
        align,
        width: widths[index],
        height,
        x,
        y: HEADER_LOGO_BAND_TOP + Math.max(0, (bandHeight - height) / 2)
      }));
      x += widths[index] + HEADER_LOGO_GAP;
    });
  }
  return placed;
}
function placeCompanyLogos(logos, pageWidth, pageHeight) {
  const header = placeHeaderLogos(logos, pageWidth, "header");
  const footerSource = logos.filter((logo) => companyLogoBand(logo) === "footer");
  const footerBand = headerLogoBandHeight(footerSource);
  const footer = placeHeaderLogos(logos, pageWidth, "footer").map((logo) => __spreadProps(__spreadValues({}, logo), {
    y: pageHeight - HEADER_LOGO_BAND_TOP - footerBand + (logo.y - HEADER_LOGO_BAND_TOP)
  }));
  return [...header, ...footer];
}
function headerLogoAlignAt(centerX, pageWidth) {
  if (centerX < pageWidth / 3)
    return "left";
  if (centerX > pageWidth * 2 / 3)
    return "right";
  return "center";
}

// src/app/modules/smart-batch/report-param-entries.util.ts
var sortByKeyOrder = (items, keyOrder, getKey) => {
  if (!keyOrder?.length || items.length < 2)
    return items;
  const rank = new Map(keyOrder.map((key, index) => [key, index]));
  return items.map((item, index) => ({ item, index, rank: rank.get(getKey(item)) })).sort((left, right) => {
    const leftRank = left.rank ?? keyOrder.length + left.index;
    const rightRank = right.rank ?? keyOrder.length + right.index;
    return leftRank - rightRank || left.index - right.index;
  }).map((entry) => entry.item);
};
var mergeLayoutKeyOrder = (existing, discovered) => {
  if (!discovered.length)
    return existing?.length ? [...existing] : [];
  if (!existing?.length)
    return [...discovered];
  const present = new Set(discovered);
  const merged = existing.filter((key) => present.has(key));
  for (const key of discovered) {
    if (!merged.includes(key))
      merged.push(key);
  }
  return merged;
};
var applyVisibleKeyReorder = (fullOrder, visibleOrdered) => {
  const visibleSet = new Set(visibleOrdered);
  let visibleIndex = 0;
  const next = fullOrder.map((key) => {
    if (!visibleSet.has(key))
      return key;
    return visibleOrdered[visibleIndex++] ?? key;
  });
  for (const key of visibleOrdered) {
    if (!next.includes(key))
      next.push(key);
  }
  return next;
};
var collectLayoutSheetItems = (value, options) => {
  const hiddenKeys = options?.hiddenKeys;
  const fields = collectScalarParams(value, {
    hiddenKeys,
    skipObjectArrays: true,
    maxDepth: 8,
    maxItems: 400
  }).map((entry) => ({
    kind: "field",
    key: entry.key,
    label: entry.label,
    entry
  }));
  const tables = collectObjectTables(value, {
    hiddenKeys,
    keyOrder: options?.keyOrder
  }).map((table) => ({
    kind: "table",
    key: table.key,
    label: table.label,
    table
  }));
  return sortByKeyOrder([...fields, ...tables], options?.keyOrder, (item) => item.key);
};
var chunkLayoutSheetItems = (items) => {
  const chunks = [];
  for (const item of items) {
    if (item.kind === "table") {
      chunks.push({ kind: "table", table: item.table });
      continue;
    }
    const last = chunks[chunks.length - 1];
    if (last?.kind === "fields")
      last.entries.push(item.entry);
    else
      chunks.push({ kind: "fields", entries: [item.entry] });
  }
  return chunks;
};
var BLOB_KEY_PATTERN = /base64|pdfbytes|pdfdata/i;
var ROOT_TABLE_KEY = "__list";
var humanizeSegment = (segment) => {
  if (/^\d+$/.test(segment))
    return String(Number(segment) + 1);
  return segment.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/^./, (letter) => letter.toUpperCase()).trim();
};
var humanizeParamKey = (key) => key.split(".").filter((part) => part && part !== ROOT_TABLE_KEY).map(humanizeSegment).join(" \xB7 ") || key;
var isScalar = (value) => value != null && typeof value !== "object";
var PERIOD_OBJECT_KEYS = /* @__PURE__ */ new Set([
  "days",
  "dias",
  "months",
  "meses",
  "years",
  "anios",
  "anos",
  "a\xF1os"
]);
var isPeriodObject = (value) => {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return false;
  const keys = Object.keys(value);
  if (!keys.length || keys.length > PERIOD_OBJECT_KEYS.size)
    return false;
  if (!keys.every((key) => PERIOD_OBJECT_KEYS.has(key)))
    return false;
  return keys.some((key) => value[key] != null && value[key] !== "");
};
var formatPeriodObject = (value) => {
  const years = value.years ?? value.anios ?? value.a\u00F1os ?? value.anos;
  const months = value.months ?? value.meses;
  const days = value.days ?? value.dias;
  const parts = [];
  const push = (raw, singular, plural) => {
    if (raw == null || raw === "")
      return;
    const num = Number(raw);
    if (!Number.isFinite(num) || num < 0)
      return;
    if (num === 0)
      return;
    parts.push(num === 1 ? `1 ${singular}` : `${num} ${plural}`);
  };
  push(years, "a\xF1o", "a\xF1os");
  push(months, "mes", "meses");
  push(days, "d\xEDa", "d\xEDas");
  return parts.length ? parts.join(", ") : "\u2014";
};
var isCodeDescriptionObject = (value) => {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return false;
  const item = value;
  const code = item.code ?? item.codigo ?? item.Code;
  const desc = item.description ?? item.descripcion ?? item.Description;
  return (typeof code === "string" || typeof code === "number") && typeof desc === "string";
};
var formatCodeDescriptionLine = (item) => {
  const code = item.code ?? item.codigo ?? item.Code;
  const desc = item.description ?? item.descripcion ?? item.Description;
  const codeText = code != null ? String(code) : "";
  const descText = desc != null ? String(desc) : "";
  if (codeText && descText)
    return `${codeText} \u2014 ${descText}`;
  return codeText || descText || "\u2014";
};
var joinReportDataPath = (base, key) => {
  const left = (base || "").replace(/\.+$/, "");
  const right = (key || "").replace(/^\.+/, "");
  if (!left)
    return right;
  if (!right)
    return left;
  return `${left}.${right}`;
};
var LAYOUT_HOST_SECTION_TYPES = /* @__PURE__ */ new Set(["keyValueGrid", "card", "table"]);
var relativeLayoutItemKey = (sourcePath, targetPath, key) => {
  const full = joinReportDataPath(sourcePath, key);
  if (!full)
    return null;
  const prefix = (targetPath || "").replace(/\.+$/, "");
  if (!prefix)
    return full;
  if (full === prefix)
    return "";
  if (full.startsWith(`${prefix}.`))
    return full.slice(prefix.length + 1);
  return null;
};
var remapLayoutOverrideKey = (storedKey, fromKey, toKey) => {
  if (storedKey === fromKey)
    return toKey;
  if (storedKey.startsWith(`${fromKey}.`) || storedKey.startsWith(`${fromKey}#`)) {
    return `${toKey}${storedKey.slice(fromKey.length)}`;
  }
  return storedKey;
};
var valueAtDataPath = (root, dataPath) => {
  if (!dataPath)
    return root;
  let current = root;
  for (const part of dataPath.split(".")) {
    if (current == null || typeof current !== "object")
      return null;
    current = current[part];
  }
  return current;
};
var isHiddenParamKey = (key, hiddenKeys) => {
  if (!hiddenKeys?.length)
    return false;
  for (const hidden of hiddenKeys) {
    if (!hidden)
      continue;
    if (key === hidden || key.startsWith(`${hidden}.`))
      return true;
  }
  return false;
};
var isObjectRecordArray = (value) => Array.isArray(value) && value.length > 0 && value.every((item) => item && typeof item === "object" && !Array.isArray(item)) && !value.every((item) => isCodeDescriptionObject(item));
var formatReportCellValue = (value) => {
  if (value == null)
    return "\u2014";
  if (isScalar(value))
    return String(value);
  if (isCodeDescriptionObject(value))
    return formatCodeDescriptionLine(value);
  if (isPeriodObject(value))
    return formatPeriodObject(value);
  const nested = collectScalarParams(value, { maxItems: 12, maxDepth: 4, skipObjectArrays: false });
  if (!nested.length)
    return "\u2014";
  return nested.map((entry) => `${entry.label}: ${entry.value}`).join("; ");
};
var cellText = formatReportCellValue;
var collectScalarParams = (value, options) => {
  const hidden = options?.hiddenKeys ?? [];
  const maxDepth = options?.maxDepth ?? 8;
  const maxItems = options?.maxItems ?? 200;
  const skipObjectArrays = options?.skipObjectArrays === true;
  const rows = [];
  const seen = /* @__PURE__ */ new WeakSet();
  const push = (key, text) => {
    if (isHiddenParamKey(key, hidden) || rows.length >= maxItems)
      return;
    rows.push({ key, label: humanizeParamKey(key), value: text });
  };
  const walk = (node, prefix, depth) => {
    if (rows.length >= maxItems || node == null)
      return;
    if (isScalar(node)) {
      if (!prefix)
        return;
      push(prefix, String(node));
      return;
    }
    if (typeof node !== "object")
      return;
    if (seen.has(node))
      return;
    seen.add(node);
    if (depth > maxDepth) {
      if (prefix)
        push(prefix, "\u2026");
      return;
    }
    if (Array.isArray(node)) {
      if (node.length === 0) {
        if (prefix)
          push(prefix, "\u2014");
        return;
      }
      if (skipObjectArrays && isObjectRecordArray(node))
        return;
      if (node.every((item) => isCodeDescriptionObject(item))) {
        node.forEach((item, index) => {
          const key = prefix ? `${prefix}.${index}` : String(index);
          push(key, formatCodeDescriptionLine(item));
        });
        return;
      }
      if (node.every((item) => item == null || isScalar(item))) {
        push(prefix || "items", node.map((item) => item == null ? "\u2014" : String(item)).join(", "));
        return;
      }
      node.forEach((item, index) => {
        const next = prefix ? `${prefix}.${index}` : String(index);
        walk(item, next, depth + 1);
      });
      return;
    }
    const record = node;
    const keys = Object.keys(record);
    if (keys.length === 0) {
      if (prefix)
        push(prefix, "\u2014");
      return;
    }
    for (const rawKey of keys) {
      if (rows.length >= maxItems)
        return;
      const key = prefix ? `${prefix}.${rawKey}` : rawKey;
      if (BLOB_KEY_PATTERN.test(rawKey) || isHiddenParamKey(key, hidden))
        continue;
      const entry = record[rawKey];
      if (isScalar(entry)) {
        push(key, String(entry));
        continue;
      }
      walk(entry, key, depth + 1);
    }
  };
  walk(value, "", 1);
  return rows;
};
var tableColumnPath = (tableKey, column) => !tableKey || tableKey === ROOT_TABLE_KEY ? column : `${tableKey}.${column}`;
var layoutTableRulesKey = (key) => {
  const hash = key.lastIndexOf("#");
  if (hash <= 0)
    return key;
  const row = key.slice(hash + 1);
  return /^\d+$/.test(row) ? key.slice(0, hash) : key;
};
var orderColumnKeys = (columnKeys, tableKey, keyOrder) => {
  if (!keyOrder?.length || columnKeys.length < 2)
    return columnKeys;
  const rank = new Map(keyOrder.map((key, index) => [key, index]));
  return columnKeys.map((column, index) => ({ column, index })).sort((left, right) => {
    const leftRank = rank.get(tableColumnPath(tableKey, left.column)) ?? rank.get(left.column) ?? keyOrder.length + left.index;
    const rightRank = rank.get(tableColumnPath(tableKey, right.column)) ?? rank.get(right.column) ?? keyOrder.length + right.index;
    return leftRank - rightRank || left.index - right.index;
  }).map((entry) => entry.column);
};
var tableFromRecords = (records, key, keyOrder) => {
  const tableKey = key || ROOT_TABLE_KEY;
  const columnKeys = [];
  for (const record of records) {
    for (const column of Object.keys(record)) {
      if (BLOB_KEY_PATTERN.test(column))
        continue;
      if (!columnKeys.includes(column))
        columnKeys.push(column);
    }
  }
  const ordered = orderColumnKeys(columnKeys, tableKey, keyOrder);
  if (!ordered.length)
    return null;
  return {
    key: tableKey,
    label: humanizeParamKey(tableKey),
    columns: ordered.map((column) => ({ key: column, label: humanizeParamKey(column) })),
    rows: records.map((record) => {
      const row = {};
      for (const column of ordered) {
        row[column] = cellText(record[column]);
      }
      return row;
    })
  };
};
var withVisibleColumns = (table, hiddenKeys) => {
  if (isHiddenParamKey(table.key, hiddenKeys))
    return null;
  const columns = table.columns.filter((column) => !isHiddenParamKey(tableColumnPath(table.key, column.key), hiddenKeys));
  if (!columns.length)
    return null;
  const keys = columns.map((column) => column.key);
  return __spreadProps(__spreadValues({}, table), {
    columns,
    rows: table.rows.map((row) => {
      const next = {};
      for (const key of keys)
        next[key] = row[key] ?? "\u2014";
      return next;
    })
  });
};
var collectObjectTables = (value, options) => {
  const hidden = options?.hiddenKeys ?? [];
  const maxTables = options?.maxTables ?? 12;
  const hideColumns = options?.hideColumns !== false;
  const keyOrder = options?.keyOrder;
  const tables = [];
  const seen = /* @__PURE__ */ new WeakSet();
  const absorb = (records, key, depth) => {
    if (tables.length >= maxTables || depth > 8)
      return;
    const nestedColumns = [];
    for (const record of records) {
      for (const [column, entry] of Object.entries(record)) {
        if (isObjectRecordArray(entry) && !nestedColumns.includes(column))
          nestedColumns.push(column);
      }
    }
    const flatRecords = records.map((record) => {
      if (!nestedColumns.length)
        return record;
      const copy = __spreadValues({}, record);
      for (const column of nestedColumns)
        delete copy[column];
      return copy;
    });
    const table = tableFromRecords(flatRecords, key, keyOrder);
    const visible = table ? hideColumns ? withVisibleColumns(table, hidden) : table : null;
    if (visible && !isHiddenParamKey(visible.key, hidden))
      tables.push(visible);
    for (const column of nestedColumns) {
      if (tables.length >= maxTables)
        return;
      const childKey = key ? `${key}.${column}` : column;
      if (isHiddenParamKey(childKey, hidden))
        continue;
      const merged = [];
      records.forEach((record, index) => {
        const child = record[column];
        if (!isObjectRecordArray(child))
          return;
        for (const item of child)
          merged.push(__spreadValues({ row: index + 1 }, item));
      });
      if (merged.length)
        absorb(merged, childKey, depth + 1);
    }
  };
  const walk = (node, prefix, depth) => {
    if (tables.length >= maxTables || node == null || typeof node !== "object")
      return;
    if (seen.has(node))
      return;
    seen.add(node);
    if (depth > 8)
      return;
    if (isObjectRecordArray(node)) {
      absorb(node, prefix, depth);
      return;
    }
    if (Array.isArray(node))
      return;
    for (const [rawKey, entry] of Object.entries(node)) {
      if (BLOB_KEY_PATTERN.test(rawKey))
        continue;
      const key = prefix ? `${prefix}.${rawKey}` : rawKey;
      if (isHiddenParamKey(key, hidden))
        continue;
      walk(entry, key, depth + 1);
    }
  };
  walk(value, "", 1);
  return tables;
};
var setHiddenParamKey = (hiddenKeys, key, visible) => {
  const hidden = new Set(hiddenKeys ?? []);
  if (visible) {
    for (const item of [...hidden]) {
      if (item === key || item.startsWith(`${key}.`) || key.startsWith(`${item}.`)) {
        hidden.delete(item);
      }
    }
  } else {
    hidden.add(key);
    for (const item of [...hidden]) {
      if (item !== key && item.startsWith(`${key}.`))
        hidden.delete(item);
    }
  }
  return [...hidden];
};
var layoutParamGroups = (value, hiddenKeys) => {
  const groups = collectObjectTables(value, { hiddenKeys }).map((table) => ({
    key: table.key,
    label: table.label,
    kind: "table",
    keys: [table.key]
  }));
  const scalars = collectScalarParams(value, {
    hiddenKeys,
    skipObjectArrays: true,
    maxDepth: 8,
    maxItems: 400
  });
  const byPrefix = /* @__PURE__ */ new Map();
  for (const entry of scalars) {
    const prefix = entry.key.includes(".") ? entry.key.split(".")[0] : entry.key;
    byPrefix.set(prefix, [...byPrefix.get(prefix) ?? [], entry]);
  }
  for (const [prefix, entries] of byPrefix) {
    groups.push({
      key: prefix,
      label: humanizeParamKey(prefix),
      kind: "fields",
      keys: entries.map((entry) => entry.key)
    });
  }
  return groups.filter((group) => group.keys.length > 0);
};

// src/app/modules/smart-batch/report-row-line.util.ts
var ROW_LINE_WIDTH_MIN = 1;
var ROW_LINE_WIDTH_MAX = 12;
var ROW_LINE_WIDTH_DEFAULT = 3;
var ROW_LINE_MARK_MIN = 2;
var ROW_LINE_MARK_MAX = 32;
function clampRowLineWidth(value, fallback = ROW_LINE_WIDTH_DEFAULT) {
  const n = Number(value);
  if (!Number.isFinite(n))
    return fallback;
  return Math.max(ROW_LINE_WIDTH_MIN, Math.min(ROW_LINE_WIDTH_MAX, Math.round(n)));
}
function defaultRowLineMark(style) {
  return style === "dotted" ? 2 : 8;
}
function clampRowLineMark(value, style, fallback) {
  const n = Number(value);
  const base = fallback ?? defaultRowLineMark(style);
  if (!Number.isFinite(n))
    return base;
  return Math.max(ROW_LINE_MARK_MIN, Math.min(ROW_LINE_MARK_MAX, Math.round(n)));
}
function rowLinePaint(style, color, width, mark) {
  const thickness = clampRowLineWidth(width);
  const size = `100% ${thickness}px`;
  if (style === "dotted") {
    const on = clampRowLineMark(mark, "dotted");
    const gap = on * 2;
    return {
      image: `repeating-linear-gradient(to right, ${color} 0 ${on}px, transparent ${on}px ${on + gap}px)`,
      size
    };
  }
  if (style === "dashed") {
    const on = clampRowLineMark(mark, "dashed");
    const gap = Math.max(4, Math.round(on * 0.75));
    return {
      image: `repeating-linear-gradient(to right, ${color} 0 ${on}px, transparent ${on}px ${on + gap}px)`,
      size
    };
  }
  return { image: `linear-gradient(${color}, ${color})`, size };
}

// src/app/modules/smart-batch/report-fonts.util.ts
var REPORT_FONT_STACKS = [
  { value: "Inter, system-ui, sans-serif", labelKey: "smartReport.fontSans" },
  { value: 'Georgia, "Times New Roman", serif', labelKey: "smartReport.fontSerif" },
  { value: '"Times New Roman", Times, serif', labelKey: "smartReport.fontTimes" },
  { value: "Arial, Helvetica, sans-serif", labelKey: "smartReport.fontArial" },
  { value: "Verdana, Geneva, sans-serif", labelKey: "smartReport.fontVerdana" },
  { value: '"Courier New", Courier, monospace', labelKey: "smartReport.fontMono" }
];
var REPORT_TEXT_ALIGNS = ["left", "center", "right", "justify"];
var REPORT_FONT_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900];
var MAX_CUSTOM_FONTS = 6;
var MAX_FONT_FILE_BYTES = 1e6;
var FONT_FILE_ACCEPT = ".woff2,.woff,.ttf,.otf";
var FAMILY_PATTERN = /^[\p{L}\p{N} _-]{1,60}$/u;
var HTTPS_URL_PATTERN = /^https:\/\/[^\s"'()<>\\]+$/;
var DATA_FONT_PATTERN = /^data:(?:font\/[a-z0-9.+-]+|application\/(?:font-woff2?|x-font-[a-z0-9]+|octet-stream|vnd\.ms-fontobject));base64,[A-Za-z0-9+/=]+$/;
var FONT_FILE_PATTERN = /\.(woff2?|ttf|otf)(?:[?#]|$)/i;
var isValidFontFamily = (family) => FAMILY_PATTERN.test(family.trim());
var isValidFontUrl = (url) => HTTPS_URL_PATTERN.test(url) || DATA_FONT_PATTERN.test(url);
var googleFontUrl = (family) => `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family.trim()).replace(/%20/g, "+")}:ital,wght@0,400;0,700;1,400;1,700&display=swap`;
var googleFontWeightUrl = (family, weights) => {
  const encoded = encodeURIComponent(family.trim()).replace(/%20/g, "+");
  const list = uniqueFontWeights(weights);
  return `https://fonts.googleapis.com/css2?family=${encoded}:wght@${list.join(";")}&display=swap`;
};
var BUILTIN_FONT_WEIGHTS = {
  // Segoe UI / system-ui: light, regular, semibold, bold. Named web fonts only ship regular and bold.
  "Inter, system-ui, sans-serif": [300, 400, 600, 700],
  'Georgia, "Times New Roman", serif': [400, 700],
  '"Times New Roman", Times, serif': [400, 700],
  "Arial, Helvetica, sans-serif": [400, 700],
  "Verdana, Geneva, sans-serif": [400, 700],
  '"Courier New", Courier, monospace': [400, 700]
};
var fontWeightCatalog = signal({});
var isFontWeightStep = (value) => typeof value === "number" && REPORT_FONT_WEIGHTS.includes(value);
var isReportFontWeight = (value) => value === "normal" || value === "bold" || isFontWeightStep(value);
var fontWeightStep = (weight) => {
  if (weight === "bold")
    return 700;
  if (weight === "normal")
    return 400;
  const n = Number(weight);
  return isFontWeightStep(n) ? n : 400;
};
var storedFontWeight = (step) => {
  if (step === 400)
    return "normal";
  if (step === 700)
    return "bold";
  return isFontWeightStep(step) ? step : 400;
};
var nearestFontWeight = (weights, target) => {
  const list = uniqueFontWeights(weights);
  return list.reduce((best, step) => Math.abs(step - target) < Math.abs(best - target) ? step : best);
};
var regularFontWeight = (weights) => {
  const list = uniqueFontWeights(weights);
  if (list.includes(400))
    return 400;
  const light = list.filter((step) => step < 600);
  return light.length ? light[light.length - 1] : list[0];
};
var boldFontWeight = (weights) => {
  const list = uniqueFontWeights(weights);
  if (list.includes(700))
    return 700;
  const heavy = list.filter((step) => step >= 600);
  return heavy.length ? heavy[heavy.length - 1] : list[list.length - 1];
};
var familyFromStack = (stack) => {
  const quoted = /^"([^"]+)"/.exec(stack.trim());
  if (quoted)
    return quoted[1];
  return stack.split(",")[0]?.replace(/["']/g, "").trim() || stack;
};
var availableFontWeights = (stack, fonts = []) => {
  const builtin = BUILTIN_FONT_WEIGHTS[stack];
  if (builtin)
    return [...builtin];
  const family = familyFromStack(stack).toLowerCase();
  const custom = fonts.find((font) => font.family.toLowerCase() === family);
  if (custom?.weights?.length)
    return uniqueFontWeights(custom.weights);
  const cached = fontWeightCatalog()[family];
  if (cached?.length)
    return [...cached];
  return [400, 700];
};
var weightFromFontName = (name) => {
  const base = name.replace(/\.[a-z0-9]+$/i, "");
  const rules = [
    [/extra[-_ ]?light|ultra[-_ ]?light/i, 200],
    [/semi[-_ ]?bold|demi[-_ ]?bold/i, 600],
    [/extra[-_ ]?bold|ultra[-_ ]?bold/i, 800],
    [/thin|hairline/i, 100],
    [/light/i, 300],
    [/medium/i, 500],
    [/black|heavy/i, 900],
    [/bold/i, 700],
    [/regular|normal|book|roman/i, 400]
  ];
  for (const [pattern, weight] of rules) {
    if (pattern.test(base))
      return weight;
  }
  return 400;
};
var fontNeedsWeightProbe = (font) => !font.weights?.length && (font.source === "google" || font.source === "url" && !FONT_FILE_PATTERN.test(font.url));
var discoverGoogleFontWeights = (family) => __async(null, null, function* () {
  const found = [];
  yield Promise.all(REPORT_FONT_WEIGHTS.map((weight) => __async(null, null, function* () {
    try {
      const response = yield fetch(googleFontWeightUrl(family, [weight]));
      if (response.ok)
        found.push(weight);
    } catch {
    }
  })));
  found.sort((left, right) => left - right);
  return found.length ? found : [400, 700];
});
var discoverStylesheetWeights = (url) => __async(null, null, function* () {
  try {
    const response = yield fetch(url);
    if (!response.ok)
      return [400, 700];
    const css = yield response.text();
    const found = /* @__PURE__ */ new Set();
    for (const match of css.matchAll(/font-weight:\s*(\d+)(?:\s+(\d+))?/g)) {
      const start = Number(match[1]);
      const end = match[2] ? Number(match[2]) : start;
      for (const step of REPORT_FONT_WEIGHTS) {
        if (step >= Math.min(start, end) && step <= Math.max(start, end))
          found.add(step);
      }
    }
    const list = [...found].sort((left, right) => left - right);
    return list.length ? list : [400, 700];
  } catch {
    return [400, 700];
  }
});
var uniqueFontWeights = (weights) => {
  const found = weights.filter(isFontWeightStep);
  const list = found.length ? found : [400, 700];
  return [...new Set(list)].sort((left, right) => left - right);
};
var customFontStack = (family) => `"${family}", system-ui, sans-serif`;
var familyFromFontUrl = (url) => {
  const match = /[?&]family=([^:&]+)/.exec(url);
  if (match)
    return decodeURIComponent(match[1].replace(/\+/g, " ")).trim();
  const file = url.split(/[?#]/)[0].split("/").pop() ?? "";
  return familyFromFileName(file);
};
var familyFromFileName = (name) => name.replace(/\.[a-z0-9]+$/i, "").replace(/[-_](regular|bold|italic|light|medium|semibold|black|thin|variable.*|vf)$/i, "").replace(/[^\p{L}\p{N} _-]/gu, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\s+/g, " ").trim().slice(0, 60);
var readFontFile = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    const ext = (file.name.split(".").pop() ?? "").toLowerCase();
    const mime = ext === "woff2" ? "font/woff2" : ext === "woff" ? "font/woff" : ext === "otf" ? "font/otf" : "font/ttf";
    const base64 = String(reader.result ?? "").split(",")[1] ?? "";
    resolve(`data:${mime};base64,${base64}`);
  };
  reader.onerror = () => reject(reader.error);
  reader.readAsDataURL(file);
});
var sanitizeCustomFonts = (fonts) => {
  if (!Array.isArray(fonts))
    return [];
  const seen = /* @__PURE__ */ new Set();
  const clean = [];
  for (const raw of fonts) {
    const family = typeof raw?.family === "string" ? raw.family.trim() : "";
    if (!isValidFontFamily(family) || seen.has(family.toLowerCase()))
      continue;
    const source = raw.source === "google" || raw.source === "file" ? raw.source : "url";
    const url = source === "google" ? googleFontUrl(family) : String(raw.url ?? "");
    if (!isValidFontUrl(url))
      continue;
    seen.add(family.toLowerCase());
    const weights = uniqueFontWeights(Array.isArray(raw.weights) ? raw.weights.map((step) => Number(step)) : []);
    const declared = Array.isArray(raw.weights) && weights.length ? weights : void 0;
    clean.push(__spreadValues({ family, source, url }, declared ? { weights: declared } : {}));
    if (clean.length >= MAX_CUSTOM_FONTS)
      break;
  }
  return clean;
};
var isStylesheetFont = (font) => font.source === "google" || font.source === "url" && !FONT_FILE_PATTERN.test(font.url);
var fontFaceRule = (font) => {
  const weight = font.weights?.[0] ?? 400;
  return `@font-face{font-family:"${font.family}";src:url("${font.url}");font-weight:${weight};font-style:normal;font-display:block}`;
};
var stylesheetHrefs = (font, catalog) => {
  const hrefs = [font.url];
  if (font.source !== "google")
    return hrefs;
  const weights = font.weights?.length ? font.weights : catalog[font.family.toLowerCase()];
  if (weights?.some((step) => step !== 400 && step !== 700))
    hrefs.push(googleFontWeightUrl(font.family, weights));
  return hrefs;
};
var fontHeadMarkup = (fonts) => {
  const clean = sanitizeCustomFonts(fonts);
  if (!clean.length)
    return "";
  const catalog = fontWeightCatalog();
  const links = clean.filter(isStylesheetFont).flatMap((font) => stylesheetHrefs(font, catalog).map((href) => `<link rel="stylesheet" href="${href.replace(/&/g, "&amp;")}" />`)).join("");
  const faces = clean.filter((font) => !isStylesheetFont(font)).map(fontFaceRule).join("");
  return links + (faces ? `<style data-report-fonts>${faces}</style>` : "");
};
var registerReportFonts = (fonts) => {
  if (typeof document === "undefined")
    return;
  const catalog = fontWeightCatalog();
  for (const font of sanitizeCustomFonts(fonts)) {
    if (isStylesheetFont(font)) {
      for (const href of stylesheetHrefs(font, catalog)) {
        const key2 = `${font.family}|${href.length}|${href.slice(-48)}`;
        if (document.head.querySelector(`[data-report-font="${CSS.escape(key2)}"]`))
          continue;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.setAttribute("data-report-font", key2);
        document.head.appendChild(link);
      }
      continue;
    }
    const key = `${font.family}|${font.url.length}|${font.url.slice(-48)}|${font.weights?.[0] ?? 400}`;
    if (document.head.querySelector(`[data-report-font="${CSS.escape(key)}"]`))
      continue;
    const node = document.createElement("style");
    node.textContent = fontFaceRule(font);
    node.setAttribute("data-report-font", key);
    document.head.appendChild(node);
  }
};

// src/app/modules/smart-batch/report-text-case.util.ts
var REPORT_TEXT_CASES = ["none", "sentence", "title", "upper", "lower"];
var MINOR_WORDS = /* @__PURE__ */ new Set([
  "a",
  "al",
  "con",
  "de",
  "del",
  "e",
  "el",
  "en",
  "la",
  "las",
  "lo",
  "los",
  "o",
  "por",
  "para",
  "sin",
  "u",
  "un",
  "una",
  "y",
  "and",
  "at",
  "by",
  "for",
  "in",
  "of",
  "on",
  "or",
  "the",
  "to"
]);
var LOCALE = "es";
var isReportTextCase = (value) => typeof value === "string" && REPORT_TEXT_CASES.includes(value);
var capitalizeFirst = (word) => word.replace(new RegExp("\\p{L}", "u"), (letter) => letter.toLocaleUpperCase(LOCALE));
var applyTextCase = (text, mode) => {
  if (!text || !mode || mode === "none")
    return text;
  if (mode === "upper")
    return text.toLocaleUpperCase(LOCALE);
  if (mode === "lower")
    return text.toLocaleLowerCase(LOCALE);
  let sentenceStart = true;
  let firstWord = true;
  return text.replace(/\S+/g, (token) => {
    if (!new RegExp("\\p{L}", "u").test(token))
      return token;
    const atSentenceStart = sentenceStart;
    const isFirst = firstWord;
    sentenceStart = /[.!?]["')\]»]*$/.test(token);
    firstWord = false;
    if (/[\d@]/.test(token))
      return token;
    const lower = token.toLocaleLowerCase(LOCALE);
    if (mode === "sentence")
      return atSentenceStart ? capitalizeFirst(lower) : lower;
    const bare = lower.replace(/[^\p{L}]/gu, "");
    return !isFirst && !atSentenceStart && MINOR_WORDS.has(bare) ? lower : capitalizeFirst(lower);
  });
};

// src/app/modules/smart-batch/report-text-role.util.ts
var DEFAULT_FAMILY = REPORT_FONT_STACKS[0].value;
var nestedForRole = (style, role) => {
  if (!style)
    return void 0;
  if (role === "title")
    return style.titleStyle;
  if (role === "label")
    return style.labelStyle;
  return style.valueStyle;
};
var resolveTextRole = (section, role, primaryColor, key) => {
  const style = section.style;
  const keyed = key && role !== "title" ? section.keyOverrides?.[key] : void 0;
  const nested = __spreadValues(__spreadValues({}, nestedForRole(style, role)), role === "label" ? keyed?.labelStyle : role === "value" ? keyed?.valueStyle : void 0);
  const isHeader = section.type === "header";
  const defaultSize = role === "title" ? isHeader ? 22 : 13 : role === "label" ? 10 : 12;
  const defaultWeight = role === "title" || isHeader ? "bold" : "normal";
  const defaultAlign = isHeader && role === "title" ? "center" : "left";
  const defaultColor = role === "title" ? primaryColor : role === "label" ? "#6B7280" : "#111827";
  const fallbackColor = role === "title" ? style?.color : role === "label" ? style?.labelColor || style?.color : style?.valueColor || style?.color;
  const size = Number(nested?.fontSize ?? (role === "title" ? style?.fontSize : void 0));
  const align = nested?.textAlign ?? (role === "title" ? style?.textAlign : void 0);
  const rawWeight = nested?.fontWeight || (role === "title" ? style?.fontWeight : void 0) || defaultWeight;
  return {
    fontFamily: nested?.fontFamily || (role === "title" ? style?.fontFamily : void 0) || DEFAULT_FAMILY,
    fontSize: Number.isFinite(size) && size > 0 ? size : defaultSize,
    fontWeight: isReportFontWeight(rawWeight) ? rawWeight : defaultWeight,
    fontStyle: nested?.fontStyle || (role === "title" ? style?.fontStyle : void 0) || "normal",
    textDecoration: (nested?.textDecoration ?? (role === "title" ? style?.textDecoration : void 0)) === "underline" ? "underline" : "none",
    textAlign: align === "left" || align === "center" || align === "right" || align === "justify" ? align : defaultAlign,
    color: nested?.color || fallbackColor || defaultColor,
    textCase: isReportTextCase(nested?.textCase) ? nested.textCase : "none"
  };
};
var roleStyle = (resolved) => __spreadValues({
  fontFamily: resolved.fontFamily,
  fontSize: resolved.fontSize,
  fontWeight: resolved.fontWeight,
  fontStyle: resolved.fontStyle,
  textDecoration: resolved.textDecoration,
  textAlign: resolved.textAlign,
  color: resolved.color
}, resolved.textCase !== "none" ? { textCase: resolved.textCase } : {});
var TITLE_MIRROR_TYPES = /* @__PURE__ */ new Set([
  "header",
  "text",
  "keyValueGrid",
  "card",
  "table",
  "dataTable",
  "badge",
  "repeater",
  "reportBlocks"
]);
var ROW_LINE_TYPES = /* @__PURE__ */ new Set([
  "keyValueGrid",
  "card",
  "table",
  "dataTable",
  "field"
]);
var NESTED_TABLE_HOSTS = /* @__PURE__ */ new Set(["keyValueGrid", "card", "table"]);
var DEFAULT_TABLE_FILL = "#fffbeb";
var mixWithBlack = (hex, colorShare) => {
  const raw = hex.trim().replace("#", "");
  const full = raw.length === 3 ? raw.split("").map((part) => part + part).join("") : raw;
  const parsed = /^[0-9a-fA-F]{6}$/.test(full) ? [parseInt(full.slice(0, 2), 16), parseInt(full.slice(2, 4), 16), parseInt(full.slice(4, 6), 16)] : [255, 251, 235];
  const channel = (value) => Math.max(0, Math.min(255, Math.round(value * colorShare))).toString(16).padStart(2, "0");
  return `#${channel(parsed[0])}${channel(parsed[1])}${channel(parsed[2])}`;
};
var stampNestedTables = (section, primaryColor, sampleRoot) => {
  const source = section.keyOverrides ?? {};
  const tableKeys = /* @__PURE__ */ new Set();
  if (NESTED_TABLE_HOSTS.has(section.type)) {
    const data = valueAtDataPath(sampleRoot, section.dataPath);
    for (const item of collectLayoutSheetItems(data, {
      hiddenKeys: section.hiddenKeys,
      keyOrder: section.keyOrder
    })) {
      if (item.kind === "table")
        tableKeys.add(item.key);
    }
  }
  const keys = /* @__PURE__ */ new Set([...Object.keys(source), ...tableKeys]);
  if (!keys.size)
    return section.keyOverrides;
  const next = {};
  for (const key of keys) {
    const current = source[key] ?? {};
    const override = __spreadValues({}, current);
    if (tableKeys.has(key)) {
      const fill = override.backgroundColor || DEFAULT_TABLE_FILL;
      const width = Number(override.borderWidth);
      const radius = Number(override.borderRadius);
      override.backgroundColor = fill;
      override.borderWidth = width > 0 ? Math.round(width) : 1;
      override.borderColor = override.borderColor || mixWithBlack(fill, 0.62);
      override.borderRadius = Number.isFinite(radius) && radius >= 0 ? radius : 8;
      override.showTableBadge = override.showTableBadge !== false;
    }
    next[key] = override;
  }
  return next;
};
var materializeSectionTypography = (section, primaryColor, sampleRoot) => {
  const title = resolveTextRole(section, "title", primaryColor);
  const label = resolveTextRole(section, "label", primaryColor);
  const value = resolveTextRole(section, "value", primaryColor);
  const style = __spreadProps(__spreadValues({}, section.style ?? {}), {
    titleStyle: roleStyle(title),
    labelStyle: roleStyle(label),
    valueStyle: roleStyle(value)
  });
  if (TITLE_MIRROR_TYPES.has(section.type)) {
    if (!style.fontFamily)
      style.fontFamily = title.fontFamily;
    if (!style.fontSize)
      style.fontSize = title.fontSize;
    if (!style.textAlign)
      style.textAlign = title.textAlign;
    if (!style.color)
      style.color = title.color;
    if (!style.fontStyle)
      style.fontStyle = title.fontStyle;
    if (style.textDecoration !== "underline")
      style.textDecoration = title.textDecoration;
    if (style.fontWeight !== "normal" && style.fontWeight !== "bold")
      style.fontWeight = title.fontWeight;
    style.labelColor = style.labelColor || label.color;
    style.valueColor = style.valueColor || value.color;
  }
  if (section.type === "field") {
    style.labelColor = style.labelColor || label.color;
    style.valueColor = style.valueColor || value.color;
    if (!style.fontFamily)
      style.fontFamily = label.fontFamily;
  }
  if (section.type === "header" || section.type === "text") {
    style.fontWeight = title.fontWeight;
    style.fontStyle = title.fontStyle;
    style.textDecoration = title.textDecoration;
    style.fontFamily = title.fontFamily;
    style.fontSize = title.fontSize;
    style.textAlign = title.textAlign;
    style.color = title.color;
  }
  if (section.type === "divider" && !style.color)
    style.color = "#E5E7EB";
  if (section.type === "spacer" && !style.padding)
    style.padding = "16";
  if (section.type === "shape" && !style.color && !style.backgroundColor)
    style.color = primaryColor;
  if ((section.type === "card" || section.type === "badge") && !style.variant)
    style.variant = "neutral";
  const next = __spreadValues(__spreadProps(__spreadValues({}, section), {
    style
  }), section.type === "shape" && !section.shape ? { shape: "rectangle" } : {});
  if (sampleRoot !== void 0) {
    const keyOverrides = stampNestedTables(section, primaryColor, sampleRoot);
    if (keyOverrides)
      next.keyOverrides = keyOverrides;
  } else if (section.keyOverrides) {
    const keyOverrides = stampNestedTables(section, primaryColor, void 0);
    if (keyOverrides)
      next.keyOverrides = keyOverrides;
  }
  if (ROW_LINE_TYPES.has(section.type)) {
    if (next.showRowLines == null)
      next.showRowLines = true;
    if (!next.rowLineStyle)
      next.rowLineStyle = "solid";
    if (!next.rowLineColor)
      next.rowLineColor = "#d6d3d1";
    if (next.rowLineWidth == null)
      next.rowLineWidth = 3;
    if ((next.rowLineStyle === "dotted" || next.rowLineStyle === "dashed") && next.rowLineMark == null) {
      next.rowLineMark = defaultRowLineMark(next.rowLineStyle);
    }
  }
  if (section.type === "keyValueGrid" && !next.columnsPerRow)
    next.columnsPerRow = 2;
  if (section.type === "dataTable" && !next.maxColumns)
    next.maxColumns = 6;
  if (next.keyOverrides)
    next.keyOverrides = withoutFixedValues(next.keyOverrides);
  return next;
};
var withoutFixedValues = (overrides) => {
  const next = {};
  for (const [key, override] of Object.entries(overrides)) {
    if (!override || !("value" in override)) {
      next[key] = override;
      continue;
    }
    const _a = override, { value: _fixed } = _a, rest = __objRest(_a, ["value"]);
    if (Object.keys(rest).length)
      next[key] = rest;
  }
  return next;
};

// src/app/modules/smart-batch/report-icon.util.ts
var REPORT_ICON_SETS = [
  { id: "mat_solid", labelKey: "reportIcons.setMaterialSolid", url: "icons/material-solid.svg" },
  { id: "mat_outline", labelKey: "reportIcons.setMaterialOutline", url: "icons/material-outline.svg" },
  { id: "heroicons_outline", labelKey: "reportIcons.setHeroOutline", url: "icons/heroicons-outline.svg" },
  { id: "heroicons_solid", labelKey: "reportIcons.setHeroSolid", url: "icons/heroicons-solid.svg" },
  { id: "feather", labelKey: "reportIcons.setFeather", url: "icons/feather.svg" }
];
var ICONIFY_API = "https://api.iconify.design";
var REPORT_ICON_MAX_LENGTH = 6e4;
var SVG_NS = "http://www.w3.org/2000/svg";
var BLOCKED_TAGS = /* @__PURE__ */ new Set([
  "script",
  "foreignobject",
  "iframe",
  "object",
  "embed",
  "audio",
  "video",
  "canvas",
  "set",
  "animate",
  "animatemotion",
  "animatetransform",
  "handler",
  "listener"
]);
var COLOR_PATTERN = /^(#[0-9a-f]{3,8}|rgba?\([\d\s.,%]+\)|hsla?\([\d\s.,%deg]+\)|[a-z]{3,20})$/i;
function safeIconColor(value, fallback = "#111827") {
  const color = String(value ?? "").trim();
  return COLOR_PATTERN.test(color) ? color : fallback;
}
var _isSafeHref = (value) => {
  const href = value.trim().toLowerCase();
  return href.startsWith("#") || /^data:image\/(png|jpe?g|gif|webp);base64,/.test(href);
};
var _cleanStyleText = (value) => value.replace(/@import[^;]*;?/gi, "").replace(/expression\s*\(/gi, "").replace(/url\(\s*(['"]?)(?!#)[^)]*\1\s*\)/gi, "none");
function sanitizeIconSvg(raw) {
  if (!raw || typeof DOMParser === "undefined")
    return null;
  const doc = new DOMParser().parseFromString(raw, "image/svg+xml");
  const root = doc.documentElement;
  if (!root || root.nodeName.toLowerCase() !== "svg" || doc.getElementsByTagName("parsererror").length) {
    return null;
  }
  const prefix = `i${Math.random().toString(36).slice(2, 8)}-`;
  const walk = (element) => {
    for (const child of Array.from(element.children)) {
      if (BLOCKED_TAGS.has(child.nodeName.toLowerCase())) {
        child.remove();
        continue;
      }
      walk(child);
    }
    for (const attribute of Array.from(element.attributes)) {
      const name = attribute.name.toLowerCase();
      if (name.startsWith("on")) {
        element.removeAttribute(attribute.name);
        continue;
      }
      if ((name === "href" || name === "xlink:href") && !_isSafeHref(attribute.value)) {
        element.removeAttribute(attribute.name);
        continue;
      }
      if (name === "style") {
        element.setAttribute("style", _cleanStyleText(attribute.value));
      }
    }
    if (element.nodeName.toLowerCase() === "style") {
      element.textContent = _cleanStyleText(element.textContent ?? "");
    }
  };
  walk(root);
  let markup = new XMLSerializer().serializeToString(_standalone(root));
  markup = _prefixReferences(markup, prefix);
  return markup.length <= REPORT_ICON_MAX_LENGTH ? markup : null;
}
function _standalone(root) {
  const svg = root.cloneNode(true);
  if (!svg.getAttribute("viewBox")) {
    const width = parseFloat(svg.getAttribute("width") ?? "");
    const height = parseFloat(svg.getAttribute("height") ?? "");
    svg.setAttribute("viewBox", `0 0 ${width > 0 ? width : 24} ${height > 0 ? height : 24}`);
  }
  for (const name of ["width", "height", "x", "y", "id", "class", "style", "aria-hidden"]) {
    svg.removeAttribute(name);
  }
  svg.setAttribute("xmlns", SVG_NS);
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  return svg;
}
function _prefixReferences(markup, prefix) {
  return markup.replace(/\sid="([^"]+)"/g, (_m, id) => ` id="${prefix}${id}"`).replace(/url\(\s*#([^)\s]+)\s*\)/g, (_m, id) => `url(#${prefix}${id})`).replace(/(\s(?:xlink:)?href)="#([^"]+)"/g, (_m, attr, id) => `${attr}="#${prefix}${id}"`).replace(/\sclass="([^"]+)"/g, (_m, names) => ` class="${names.split(/\s+/).filter(Boolean).map((name) => `${prefix}${name}`).join(" ")}"`).replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/g, (_m, open, css, close) => `${open}${css.replace(/\.(-?[_a-zA-Z][\w-]*)/g, `.${prefix}$1`)}${close}`);
}
function colorIconSvg(svg, color, keepColors = false) {
  if (!svg || keepColors)
    return svg;
  const paint = safeIconColor(color);
  const unpainted = (value) => /^(none|transparent)$/i.test(value.trim());
  return svg.replace(/(\s(?:fill|stroke))\s*=\s*"([^"]*)"/gi, (match, attr, value) => unpainted(value) ? match : `${attr}="${paint}"`).replace(/((?:^|[;{\s"])(?:fill|stroke))\s*:\s*([^;"}]+)/gi, (match, prop, value) => unpainted(value) ? match : `${prop}:${paint}`).replace(/<svg\b([^>]*)>/i, (match, attrs) => /\sfill\s*=/.test(attrs) ? match : `<svg${attrs} fill="${paint}">`);
}
var _spriteCache = /* @__PURE__ */ new Map();
function _loadSprite(set) {
  let pending = _spriteCache.get(set.id);
  if (!pending) {
    pending = fetch(set.url).then((response) => {
      if (!response.ok)
        throw new Error(`icons ${response.status}`);
      return response.text();
    }).then((text) => new DOMParser().parseFromString(text, "image/svg+xml"));
    pending.catch(() => _spriteCache.delete(set.id));
    _spriteCache.set(set.id, pending);
  }
  return pending;
}
function listSpriteIcons(set) {
  return __async(this, null, function* () {
    const doc = yield _loadSprite(set);
    return Array.from(doc.querySelectorAll("symbol[id], defs > svg[id]")).map((node) => node.getAttribute("id") || "").filter(Boolean);
  });
}
function spriteIconSvg(set, id) {
  return __async(this, null, function* () {
    const doc = yield _loadSprite(set);
    const node = Array.from(doc.querySelectorAll("symbol[id], defs > svg[id]")).find((item) => item.getAttribute("id") === id);
    if (!node)
      return null;
    const svg = doc.createElementNS(SVG_NS, "svg");
    for (const attribute of Array.from(node.attributes)) {
      if (attribute.name !== "id")
        svg.setAttribute(attribute.name, attribute.value);
    }
    svg.innerHTML = node.innerHTML;
    return new XMLSerializer().serializeToString(svg);
  });
}
function searchIconify(query, limit = 96, prefixes) {
  return __async(this, null, function* () {
    const term = query.trim();
    if (!term)
      return [];
    const scope = prefixes ? `&prefixes=${encodeURIComponent(prefixes)}` : "";
    const response = yield fetch(`${ICONIFY_API}/search?query=${encodeURIComponent(term)}&limit=${limit}${scope}`);
    if (!response.ok)
      throw new Error(`iconify ${response.status}`);
    const body = yield response.json();
    return Array.isArray(body.icons) ? body.icons : [];
  });
}
function iconifyPreviewUrl(id) {
  const [prefix, name] = id.split(":");
  return `${ICONIFY_API}/${encodeURIComponent(prefix)}/${encodeURIComponent(name)}.svg`;
}
function iconifySvg(id) {
  return __async(this, null, function* () {
    const response = yield fetch(iconifyPreviewUrl(id));
    return response.ok ? response.text() : null;
  });
}

// src/app/modules/smart-batch/report-value-rules.util.ts
var REPORT_RULE_OPERATORS = [
  "contains",
  "notContains",
  "equals",
  "notEquals",
  "startsWith",
  "isEmpty",
  "notEmpty",
  "gt",
  "gte",
  "lt",
  "lte",
  "between",
  "isTrue",
  "isFalse",
  "datePast",
  "dateFuture",
  "dateWithinDays",
  "dateOlderThanDays"
];
var REPORT_RULE_BADGES = ["check", "cross", "warning", "info", "dot", "clock", "up", "down"];
var RULE_OPERATOR_GROUPS = [
  { group: "text", operators: ["contains", "notContains", "equals", "notEquals", "startsWith"] },
  { group: "number", operators: ["gt", "gte", "lt", "lte", "between"] },
  { group: "date", operators: ["datePast", "dateFuture", "dateWithinDays", "dateOlderThanDays"] },
  { group: "other", operators: ["isEmpty", "notEmpty", "isTrue", "isFalse"] }
];
var RULE_OPERATORS_WITHOUT_VALUE = /* @__PURE__ */ new Set([
  "isEmpty",
  "notEmpty",
  "isTrue",
  "isFalse",
  "datePast",
  "dateFuture"
]);
var MAX_VALUE_RULES = 12;
var EMPTY_MARKERS = /* @__PURE__ */ new Set(["", "-", "--", "---", "\u2014", "n/a", "na", "null", "undefined", "sin dato", "sin informacion"]);
var TRUE_MARKERS = /* @__PURE__ */ new Set(["true", "si", "yes", "1", "verdadero", "x"]);
var FALSE_MARKERS = /* @__PURE__ */ new Set(["false", "no", "0", "falso"]);
var MONTHS = {
  ene: 0,
  enero: 0,
  jan: 0,
  january: 0,
  feb: 1,
  febrero: 1,
  february: 1,
  mar: 2,
  marzo: 2,
  march: 2,
  abr: 3,
  abril: 3,
  apr: 3,
  april: 3,
  may: 4,
  mayo: 4,
  jun: 5,
  junio: 5,
  june: 5,
  jul: 6,
  julio: 6,
  july: 6,
  ago: 7,
  agosto: 7,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  septiembre: 8,
  setiembre: 8,
  september: 8,
  oct: 9,
  octubre: 9,
  october: 9,
  nov: 10,
  noviembre: 10,
  november: 10,
  dic: 11,
  diciembre: 11,
  dec: 11,
  december: 11
};
var normalizeRuleText = (value) => String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
var ruleTokens = (value) => String(value ?? "").split(/[,;|]/).map(normalizeRuleText).filter(Boolean);
var parseRuleNumber = (raw) => {
  if (typeof raw === "number")
    return raw;
  if (typeof raw === "boolean" || raw == null)
    return NaN;
  let text = String(raw).trim();
  if (!text)
    return NaN;
  const negative = /^\(.*\)$/.test(text) || /^-/.test(text.replace(/^[^\d-]+/, ""));
  text = text.replace(/[^\d.,]/g, "");
  if (!text || !/\d/.test(text))
    return NaN;
  const lastDot = text.lastIndexOf(".");
  const lastComma = text.lastIndexOf(",");
  if (lastDot >= 0 && lastComma >= 0) {
    const decimal = lastDot > lastComma ? "." : ",";
    const thousands = decimal === "." ? "," : ".";
    text = text.split(thousands).join("").replace(decimal, ".");
  } else if (lastComma >= 0) {
    const parts = text.split(",");
    text = parts.length === 2 && parts[1].length <= 2 ? parts.join(".") : parts.join("");
  } else if (lastDot >= 0) {
    const parts = text.split(".");
    text = parts.length > 2 || parts.length === 2 && parts[1].length === 3 && parts[0].length <= 3 ? parts.join("") : text;
  }
  const value = Number(text);
  if (!Number.isFinite(value))
    return NaN;
  return negative ? -Math.abs(value) : value;
};
var dayStart = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
var validDate = (year, month, day) => {
  if (year < 1e3 || month < 0 || month > 11 || day < 1 || day > 31)
    return null;
  const date = new Date(year, month, day);
  return date.getMonth() === month ? date : null;
};
var parseRuleDate = (raw) => {
  if (raw instanceof Date)
    return Number.isNaN(raw.getTime()) ? null : raw;
  if (raw == null || typeof raw === "boolean" || typeof raw === "number")
    return null;
  const text = String(raw).trim();
  let match = /^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/.exec(text);
  if (match)
    return validDate(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  match = /^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})/.exec(text);
  if (match)
    return validDate(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
  match = /^(\d{1,2})\s*(?:de\s+)?([a-z\u00e1\u00e9\u00ed\u00f3\u00fa]+)\.?\s*(?:de\s+|del\s+)?(\d{4})/i.exec(normalizeRuleText(text));
  if (match && MONTHS[match[2]] !== void 0)
    return validDate(Number(match[3]), MONTHS[match[2]], Number(match[1]));
  return null;
};
var isEmptyValue = (raw) => {
  if (raw == null)
    return true;
  if (Array.isArray(raw))
    return raw.length === 0;
  if (typeof raw === "object")
    return Object.keys(raw).length === 0;
  return EMPTY_MARKERS.has(normalizeRuleText(raw));
};
var ruleMatches = (rule, raw, today = /* @__PURE__ */ new Date()) => {
  const text = normalizeRuleText(raw);
  const tokens = ruleTokens(rule.value);
  switch (rule.operator) {
    case "contains":
      return tokens.length > 0 && tokens.some((token) => text.includes(token));
    case "notContains":
      return tokens.length > 0 && !tokens.some((token) => text.includes(token));
    case "equals":
      return tokens.some((token) => text === token);
    case "notEquals":
      return tokens.length > 0 && !tokens.some((token) => text === token);
    case "startsWith":
      return tokens.some((token) => text.startsWith(token));
    case "isEmpty":
      return isEmptyValue(raw);
    case "notEmpty":
      return !isEmptyValue(raw);
    case "isTrue":
      return raw === true || TRUE_MARKERS.has(text);
    case "isFalse":
      return raw === false || FALSE_MARKERS.has(text);
    case "gt":
    case "gte":
    case "lt":
    case "lte":
    case "between": {
      const value = parseRuleNumber(raw);
      const target = parseRuleNumber(rule.value);
      if (!Number.isFinite(value) || !Number.isFinite(target))
        return false;
      if (rule.operator === "gt")
        return value > target;
      if (rule.operator === "gte")
        return value >= target;
      if (rule.operator === "lt")
        return value < target;
      if (rule.operator === "lte")
        return value <= target;
      const upper = parseRuleNumber(rule.value2);
      if (!Number.isFinite(upper))
        return false;
      return value >= Math.min(target, upper) && value <= Math.max(target, upper);
    }
    case "datePast":
    case "dateFuture":
    case "dateWithinDays":
    case "dateOlderThanDays": {
      const date = parseRuleDate(raw);
      if (!date)
        return false;
      const day = dayStart(date);
      const now = dayStart(today);
      const msDay = 864e5;
      if (rule.operator === "datePast")
        return day < now;
      if (rule.operator === "dateFuture")
        return day >= now;
      const days = Math.max(0, Math.round(parseRuleNumber(rule.value)));
      if (!Number.isFinite(days))
        return false;
      if (rule.operator === "dateWithinDays")
        return day >= now && day <= now + days * msDay;
      return day < now - days * msDay;
    }
    default:
      return false;
  }
};
var matchValueRule = (rules, raw, today) => {
  if (!Array.isArray(rules) || !rules.length)
    return null;
  return rules.find((rule) => rule && ruleMatches(rule, raw, today)) ?? null;
};
var keyValueRules = (section, key) => {
  let current = key;
  while (current) {
    const rules = section.keyOverrides?.[current]?.rules;
    if (rules?.length)
      return rules;
    const dot = current.lastIndexOf(".");
    current = dot > 0 ? current.slice(0, dot) : "";
  }
  return section.valueRules ?? [];
};
var BADGE_ART = {
  check: (c) => `<circle cx="12" cy="12" r="10" fill="${c}"/><path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`,
  cross: (c) => `<circle cx="12" cy="12" r="10" fill="${c}"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`,
  warning: (c) => `<path d="M12 2.8L22.2 20.5H1.8z" fill="${c}" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 9v5" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="17.2" r="1.3" fill="#fff"/>`,
  info: (c) => `<circle cx="12" cy="12" r="10" fill="${c}"/><path d="M12 11v6" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="7.6" r="1.4" fill="#fff"/>`,
  dot: (c) => `<circle cx="12" cy="12" r="6" fill="${c}"/>`,
  clock: (c) => `<circle cx="12" cy="12" r="10" fill="${c}"/><path d="M12 7v5.5l3.5 2" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
  up: (c) => `<path d="M12 3.5l7.5 8.5h-4.75v8.5h-5.5V12H4.5z" fill="${c}"/>`,
  down: (c) => `<path d="M12 20.5l7.5-8.5h-4.75V3.5h-5.5V12H4.5z" fill="${c}"/>`
};
var ruleBadgeSvg = (badge, color) => {
  const art = badge ? BADGE_ART[badge] : null;
  if (!art)
    return "";
  return `<svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" style="display:inline-block;vertical-align:-0.14em;margin-right:0.3em;flex-shrink:0">${art(safeIconColor(color, "#374151"))}</svg>`;
};
var _cleanIcons = /* @__PURE__ */ new Map();
var _cleanRuleIcon = (raw) => {
  let clean = _cleanIcons.get(raw);
  if (clean === void 0) {
    if (_cleanIcons.size > 100)
      _cleanIcons.clear();
    clean = sanitizeIconSvg(raw) ?? "";
    _cleanIcons.set(raw, clean);
  }
  return clean;
};
var ruleIconMarkup = (rule) => {
  if (rule.iconSvg) {
    const clean = _cleanRuleIcon(rule.iconSvg);
    if (clean) {
      const art = colorIconSvg(clean, safeIconColor(rule.color, "#374151"), Boolean(rule.iconKeepColors));
      return `<span aria-hidden="true" style="display:inline-block;width:1em;height:1em;line-height:0;vertical-align:-0.14em;margin-right:0.3em;flex-shrink:0">${art}</span>`;
    }
  }
  return ruleBadgeSvg(rule.badge, rule.color);
};
var RED = { color: "#b91c1c", backgroundColor: "#fee2e2" };
var AMBER = { color: "#b45309", backgroundColor: "#fef3c7" };
var GREEN = { color: "#15803d", backgroundColor: "#dcfce7" };
var ruleSeq = 0;
var newRuleId = () => `regla-${Date.now().toString(36)}-${(ruleSeq++).toString(36)}`;
var REPORT_RULE_PRESETS = [
  {
    id: "status",
    icon: "traffic",
    build: () => [
      __spreadProps(__spreadValues({
        id: newRuleId(),
        operator: "contains",
        value: "no vigente, vencid, inactiv, cancelad, suspendid, revocad, rechazad, bloquead, embargad, negativ, invalid, con deuda, moroso, expired, revoked, rejected"
      }, RED), {
        bold: true,
        badge: "cross"
      }),
      __spreadProps(__spreadValues({
        id: newRuleId(),
        operator: "contains",
        value: "pendiente, en tramite, por vencer, en revision, en proceso, pending"
      }, AMBER), {
        bold: true,
        badge: "warning"
      }),
      __spreadProps(__spreadValues({
        id: newRuleId(),
        operator: "contains",
        value: "vigente, activ, aprobad, valid, positiv, al dia, paz y salvo, sin deuda, approved"
      }, GREEN), {
        bold: true,
        badge: "check"
      })
    ]
  },
  {
    id: "dates",
    icon: "event",
    build: () => [
      __spreadProps(__spreadValues({ id: newRuleId(), operator: "datePast" }, RED), { bold: true, badge: "cross" }),
      __spreadProps(__spreadValues({ id: newRuleId(), operator: "dateWithinDays", value: "30" }, AMBER), { bold: true, badge: "clock" }),
      __spreadProps(__spreadValues({ id: newRuleId(), operator: "dateFuture" }, GREEN), { badge: "check" })
    ]
  },
  {
    id: "numbers",
    icon: "exposure",
    build: () => [
      { id: newRuleId(), operator: "lt", value: "0", color: "#b91c1c", bold: true, badge: "down" },
      { id: newRuleId(), operator: "gt", value: "0", color: "#15803d", badge: "up" }
    ]
  },
  {
    id: "yesNo",
    icon: "rule",
    build: () => [
      __spreadProps(__spreadValues({ id: newRuleId(), operator: "isTrue" }, GREEN), { badge: "check", text: "S\xED" }),
      __spreadProps(__spreadValues({ id: newRuleId(), operator: "isFalse" }, RED), { badge: "cross", text: "No" })
    ]
  },
  {
    id: "empty",
    icon: "block",
    build: () => [{ id: newRuleId(), operator: "isEmpty", color: "#9ca3af", badge: "dot", text: "Sin informaci\xF3n" }]
  }
];
var HEX = /^#[0-9a-f]{3,8}$/i;
var sanitizeValueRules = (rules) => {
  if (!Array.isArray(rules))
    return [];
  return rules.filter((rule) => Boolean(rule) && REPORT_RULE_OPERATORS.includes(rule.operator)).slice(0, MAX_VALUE_RULES).map((rule) => {
    const clean = { id: String(rule.id || newRuleId()).slice(0, 60), operator: rule.operator };
    if (rule.value != null && rule.value !== "")
      clean.value = String(rule.value).slice(0, 500);
    if (rule.value2 != null && rule.value2 !== "")
      clean.value2 = String(rule.value2).slice(0, 60);
    if (rule.color && HEX.test(rule.color))
      clean.color = rule.color;
    if (rule.backgroundColor && HEX.test(rule.backgroundColor))
      clean.backgroundColor = rule.backgroundColor;
    if (rule.bold)
      clean.bold = true;
    if (typeof rule.iconSvg === "string" && rule.iconSvg && rule.iconSvg.length <= REPORT_ICON_MAX_LENGTH) {
      clean.iconSvg = rule.iconSvg;
      if (rule.iconName)
        clean.iconName = String(rule.iconName).slice(0, 200);
      if (rule.iconKeepColors)
        clean.iconKeepColors = true;
    } else if (rule.badge && REPORT_RULE_BADGES.includes(rule.badge)) {
      clean.badge = rule.badge;
    }
    if (rule.text)
      clean.text = String(rule.text).slice(0, 120);
    return clean;
  });
};

// src/app/modules/smart-batch/report-shape-rules.util.ts
var MIXED = "__mixed__";
var recordsAtPath = (root, path) => {
  const value = valueAtDataPath(root, path);
  if (Array.isArray(value)) {
    return value.filter((entry) => Boolean(entry) && typeof entry === "object" && !Array.isArray(entry));
  }
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return [value];
  }
  return [];
};
var columnShortKey = (columnStoreKey) => {
  const dot = columnStoreKey.lastIndexOf(".");
  return dot >= 0 ? columnStoreKey.slice(dot + 1) : columnStoreKey;
};
var cellRaw = (row, columnStoreKey) => {
  const short = columnShortKey(columnStoreKey);
  if (Object.prototype.hasOwnProperty.call(row, short))
    return row[short];
  if (Object.prototype.hasOwnProperty.call(row, columnStoreKey))
    return row[columnStoreKey];
  return valueAtDataPath(row, columnStoreKey);
};
var effectiveTableCellText = (hostSection, columnStoreKey, raw) => {
  const formatted = formatReportCellValue(raw);
  const rules = hostSection ? keyValueRules(hostSection, columnStoreKey) : [];
  const matched = matchValueRule(rules, formatted) ?? matchValueRule(rules, raw);
  const text = matched?.text?.trim();
  return text || formatted;
};
var resolveShapeRuleValue = (section, data, sections) => {
  if (!section.ruleField)
    return void 0;
  if (section.ruleColumnKey) {
    const host = (section.ruleRulesSectionId ? sections.find((item) => item.id === section.ruleRulesSectionId) : void 0) ?? sections.find((item) => item.dataPath && section.ruleField.startsWith(item.dataPath) && item.type !== "shape");
    const rows = recordsAtPath(data, section.ruleField);
    const effective = rows.map((row) => effectiveTableCellText(host, section.ruleColumnKey, cellRaw(row, section.ruleColumnKey)));
    if (!effective.length)
      return void 0;
    const mode = section.ruleTableMode === "any" ? "any" : "all";
    if (mode === "all") {
      const first = effective[0];
      return effective.every((text) => text === first) ? first : MIXED;
    }
    return [...new Set(effective)].join(" | ");
  }
  return valueAtDataPath(data, section.ruleField);
};
var shapeRuleTestSamples = (section, data, sections) => {
  const value = resolveShapeRuleValue(__spreadProps(__spreadValues({}, section), { type: "shape", id: "", order: 0 }), data, sections);
  if (value == null || value === "")
    return [];
  if (value === MIXED)
    return [MIXED];
  return String(value).split("|").map((part) => part.trim()).filter(Boolean).slice(0, 8);
};

// src/app/modules/smart-batch/report-design-z-index.constants.ts
var REPORT_SHEET_Z_MAX = 9e3;
var REPORT_SHEET_Z_DRAG = 9200;
var REPORT_SHEET_Z_PEEK = 9100;
var REPORT_UI_Z_BACKDROP = 1e6;
var REPORT_UI_Z_PANEL = 1001e3;
var REPORT_UI_Z_TOOLBAR = 1002e3;
var REPORT_UI_Z_MENU = 1004e3;
var REPORT_UI_Z_CDK_OVERLAY = 1006e3;
var REPORT_UI_Z_MARQUEE = 1008e3;
var REPORT_DESIGN_BODY_CLASS = "report-design-active";
function clampReportSheetZ(value) {
  if (!Number.isFinite(value))
    return 40;
  return Math.min(Math.max(0, Math.round(value)), REPORT_SHEET_Z_MAX);
}

// src/app/modules/smart-batch/report-preview/report-preview.component.ts
var _c0 = ["measureLegend"];
var _c1 = ["reportPage"];
var _c2 = ["measureSection"];
var _c3 = () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var _c4 = (a0, a1) => ({ current: a0, total: a1 });
var _c5 = (a0) => ({ section: a0, measure: false });
var _c6 = () => [];
var _c7 = (a0) => ({ section: a0, measure: true });
var _c8 = () => ({ current: 1, total: 1 });
var _c9 = (a0) => ({ path: a0 });
var _c10 = (a0, a1, a2) => ({ section: a0, key: a1, axes: "xy", measure: a2 });
var _c11 = (a0, a1) => ({ key: a0, label: a1 });
var _c12 = (a0, a1, a2) => ({ section: a0, key: a1, axes: "w", measure: a2 });
var _c13 = (a0, a1, a2) => ({ section: a0, key: a1, axes: "y", measure: a2 });
var _c14 = (a0) => ({ count: a0 });
var _c15 = (a0) => ({ num: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.axis + ":" + $item.page + ":" + $item.at;
var _forTrack2 = ($index, $item) => $item.key;
var _forTrack3 = ($index, $item) => $item.kind === "table" ? $item.table.key : $item.entries[0] == null ? null : $item.entries[0].key;
function ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("opacity", ctx_r2.watermarkPaintOpacity())("font-size", ctx_r2.viewWatermarkFontSize, "px")("transform", ctx_r2.watermarkRotateStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.watermarkText());
  }
}
function ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("opacity", ctx_r2.watermarkPaintOpacity())("transform", ctx_r2.watermarkRotateStyle);
    \u0275\u0275property("src", ctx_r2.watermarkStampSrc(), \u0275\u0275sanitizeUrl);
  }
}
function ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Conditional_4_Template_div_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.startRotate($event, "watermark"));
    });
    \u0275\u0275elementStart(1, "mat-icon", 29);
    \u0275\u0275text(2, "rotate_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Conditional_4_Template_div_pointerdown_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.startResize($event, "watermark"));
    });
    \u0275\u0275elementStart(4, "mat-icon", 31);
    \u0275\u0275text(5, "open_in_full");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("top", ctx_r2.rotateHandleTop(ctx_r2.viewWatermarkY), "px");
  }
}
function ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Template_div_pointerdown_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startMove($event, "watermark"));
    })("click", function ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectOverlay("watermark", $event));
    })("contextmenu", function ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Template_div_contextmenu_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onOverlayContextMenu("watermark", $event));
    });
    \u0275\u0275template(2, ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Conditional_2_Template, 2, 7, "span", 24)(3, ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Conditional_3_Template, 1, 5, "img", 25)(4, ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Conditional_4_Template, 6, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_5_r5 = \u0275\u0275nextContext(2).$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("z-index", ctx_r2.layerPaintZ("watermark", 900))("visibility", ctx_r2.layerVisibility("watermark"))("opacity", ctx_r2.layerPeekOpacity("watermark"));
    \u0275\u0275advance();
    \u0275\u0275styleProp("pointer-events", ctx_r2.isLayerQuiet("watermark") ? "none" : null)("left", ctx_r2.viewWatermarkX, "px")("top", ctx_r2.viewWatermarkY, "px")("width", ctx_r2.viewWatermarkWidth, "px")("height", ctx_r2.viewWatermarkHeight, "px")("outline", ctx_r2.watermarkOverlayBorder);
    \u0275\u0275classProp("cursor-move", ctx_r2.isOverlayChosen("watermark"))("cursor-pointer", ctx_r2.clickable() && \u0275$index_5_r5 === 0 && !ctx_r2.isOverlaySelected("watermark"))("layer-quiet", ctx_r2.isLayerQuiet("watermark"))("pointer-events-auto", ctx_r2.clickable() && \u0275$index_5_r5 === 0 && !ctx_r2.isLayerQuiet("watermark"))("group", ctx_r2.isOverlaySelected("watermark"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.watermarkType() === "text" ? 2 : ctx_r2.watermarkType() === "logo" && ctx_r2.watermarkStampSrc() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isOverlaySelected("watermark") && !ctx_r2.isLayerQuiet("watermark") ? 4 : -1);
  }
}
function ReportPreviewComponent_For_3_Conditional_2_Conditional_1_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275styleProp("opacity", ctx_r2.watermarkPaintOpacity())("transform", ctx_r2.watermarkRotateStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.watermarkText());
  }
}
function ReportPreviewComponent_For_3_Conditional_2_Conditional_1_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 37);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275styleProp("opacity", ctx_r2.watermarkPaintOpacity())("transform", ctx_r2.watermarkRotateStyle);
    \u0275\u0275property("src", ctx_r2.watermarkStampSrc(), \u0275\u0275sanitizeUrl);
  }
}
function ReportPreviewComponent_For_3_Conditional_2_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, ReportPreviewComponent_For_3_Conditional_2_Conditional_1_For_2_Conditional_1_Template, 2, 5, "span", 34)(2, ReportPreviewComponent_For_3_Conditional_2_Conditional_1_For_2_Conditional_2_Template, 1, 5, "img", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.watermarkType() === "text" ? 1 : ctx_r2.watermarkType() === "logo" && ctx_r2.watermarkStampSrc() ? 2 : -1);
  }
}
function ReportPreviewComponent_For_3_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275repeaterCreate(1, ReportPreviewComponent_For_3_Conditional_2_Conditional_1_For_2_Template, 3, 1, "div", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("z-index", ctx_r2.layerPaintZ("watermark", 900))("visibility", ctx_r2.layerVisibility("watermark"))("opacity", ctx_r2.layerPeekOpacity("watermark"))("outline", ctx_r2.isLayerPeeked("watermark") ? "2px dashed rgba(217, 119, 6, 0.9)" : null)("outline-offset", 6, "px");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(10, _c3));
  }
}
function ReportPreviewComponent_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportPreviewComponent_For_3_Conditional_2_Conditional_0_Template, 5, 30, "div", 20)(1, ReportPreviewComponent_For_3_Conditional_2_Conditional_1_Template, 3, 11, "div", 21);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.watermarkPattern() === "single" ? 0 : 1);
  }
}
function ReportPreviewComponent_For_3_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_Conditional_3_Conditional_3_Template_div_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startResize($event, "signature"));
    });
    \u0275\u0275elementStart(1, "mat-icon", 43);
    \u0275\u0275text(2, "open_in_full");
    \u0275\u0275elementEnd()();
  }
}
function ReportPreviewComponent_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_Conditional_3_Template_div_pointerdown_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startMove($event, "signature"));
    })("click", function ReportPreviewComponent_For_3_Conditional_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectOverlay("signature", $event));
    })("contextmenu", function ReportPreviewComponent_For_3_Conditional_3_Template_div_contextmenu_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOverlayContextMenu("signature", $event));
    });
    \u0275\u0275element(2, "img", 40);
    \u0275\u0275template(3, ReportPreviewComponent_For_3_Conditional_3_Conditional_3_Template, 3, 0, "div", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("z-index", ctx_r2.layerPaintZ("signature", 120))("visibility", ctx_r2.layerVisibility("signature"))("opacity", ctx_r2.layerPeekOpacity("signature"));
    \u0275\u0275advance();
    \u0275\u0275styleProp("pointer-events", ctx_r2.isLayerQuiet("signature") ? "none" : null)("left", ctx_r2.viewSignatureX, "px")("top", ctx_r2.viewSignatureY, "px")("width", ctx_r2.viewSignatureWidth, "px")("height", ctx_r2.viewSignatureHeight, "px")("outline", ctx_r2.signatureOverlayBorder);
    \u0275\u0275classProp("cursor-move", ctx_r2.isOverlayChosen("signature"))("cursor-pointer", ctx_r2.clickable() && !ctx_r2.isOverlaySelected("signature"))("layer-quiet", ctx_r2.isLayerQuiet("signature"))("pointer-events-auto", ctx_r2.clickable() && !ctx_r2.isLayerQuiet("signature"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.signatureImage(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isOverlaySelected("signature") && !ctx_r2.isLayerQuiet("signature") ? 3 : -1);
  }
}
function ReportPreviewComponent_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 44);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r2.headerBandTopView(), "px")("height", ctx_r2.headerBandHeightView(), "px");
  }
}
function ReportPreviewComponent_For_3_Conditional_5_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_Conditional_5_For_1_Conditional_3_Template_div_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const logo_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startHeaderLogoResize($event, logo_r9.id));
    })("pointermove", function ReportPreviewComponent_For_3_Conditional_5_For_1_Conditional_3_Template_div_pointermove_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onHeaderLogoResize($event));
    })("pointerup", function ReportPreviewComponent_For_3_Conditional_5_For_1_Conditional_3_Template_div_pointerup_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.stopHeaderLogoResize($event));
    })("pointercancel", function ReportPreviewComponent_For_3_Conditional_5_For_1_Conditional_3_Template_div_pointercancel_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.stopHeaderLogoResize($event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 50);
    \u0275\u0275text(2, "open_in_full");
    \u0275\u0275elementEnd()();
  }
}
function ReportPreviewComponent_For_3_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_Conditional_5_For_1_Template_div_pointerdown_1_listener($event) {
      const logo_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startHeaderLogoMove($event, logo_r9.id));
    })("pointermove", function ReportPreviewComponent_For_3_Conditional_5_For_1_Template_div_pointermove_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onHeaderLogoMove($event));
    })("pointerup", function ReportPreviewComponent_For_3_Conditional_5_For_1_Template_div_pointerup_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.stopHeaderLogoMove($event));
    })("pointercancel", function ReportPreviewComponent_For_3_Conditional_5_For_1_Template_div_pointercancel_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.stopHeaderLogoMove($event));
    })("click", function ReportPreviewComponent_For_3_Conditional_5_For_1_Template_div_click_1_listener($event) {
      const logo_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectOverlay(ctx_r2.headerOverlayId(logo_r9.id), $event));
    })("contextmenu", function ReportPreviewComponent_For_3_Conditional_5_For_1_Template_div_contextmenu_1_listener($event) {
      const logo_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onOverlayContextMenu(ctx_r2.headerOverlayId(logo_r9.id), $event));
    });
    \u0275\u0275element(2, "img", 48);
    \u0275\u0275template(3, ReportPreviewComponent_For_3_Conditional_5_For_1_Conditional_3_Template, 3, 0, "div", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const logo_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("z-index", ctx_r2.layerPaintZ(ctx_r2.headerOverlayId(logo_r9.id), 850))("visibility", ctx_r2.layerVisibility(ctx_r2.headerOverlayId(logo_r9.id)))("opacity", ctx_r2.layerPeekOpacity(ctx_r2.headerOverlayId(logo_r9.id)));
    \u0275\u0275advance();
    \u0275\u0275styleProp("pointer-events", ctx_r2.isLayerQuiet(ctx_r2.headerOverlayId(logo_r9.id)) ? "none" : null)("left", logo_r9.viewX, "px")("top", logo_r9.viewY, "px")("width", logo_r9.viewWidth, "px")("height", logo_r9.viewHeight, "px")("outline", ctx_r2.headerLogoBorder(logo_r9.id));
    \u0275\u0275classProp("cursor-ew-resize", ctx_r2.clickable())("layer-quiet", ctx_r2.isLayerQuiet(ctx_r2.headerOverlayId(logo_r9.id)))("pointer-events-auto", ctx_r2.clickable() && !ctx_r2.isLayerQuiet(ctx_r2.headerOverlayId(logo_r9.id)));
    \u0275\u0275attribute("data-overlay-id", ctx_r2.headerOverlayId(logo_r9.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", logo_r9.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.clickable() && ctx_r2.isOverlaySelected(ctx_r2.headerOverlayId(logo_r9.id)) && !ctx_r2.isLayerQuiet(ctx_r2.headerOverlayId(logo_r9.id)) ? 3 : -1);
  }
}
function ReportPreviewComponent_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ReportPreviewComponent_For_3_Conditional_5_For_1_Template, 4, 27, "div", 45, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.headerLogoViews());
  }
}
function ReportPreviewComponent_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 51);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r2.footerBandTopView(), "px")("height", ctx_r2.footerBandHeightView(), "px");
  }
}
function ReportPreviewComponent_For_3_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_Conditional_7_Conditional_3_Template_div_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startRotate($event, "logo"));
    });
    \u0275\u0275elementStart(1, "mat-icon", 55);
    \u0275\u0275text(2, "rotate_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 42);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_Conditional_7_Conditional_3_Template_div_pointerdown_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startResize($event, "logo"));
    });
    \u0275\u0275elementStart(4, "mat-icon", 50);
    \u0275\u0275text(5, "open_in_full");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("top", ctx_r2.rotateHandleTop(ctx_r2.viewLogoY), "px");
  }
}
function ReportPreviewComponent_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 52);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_Conditional_7_Template_div_pointerdown_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startMove($event, "logo"));
    })("click", function ReportPreviewComponent_For_3_Conditional_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectOverlay("logo", $event));
    })("contextmenu", function ReportPreviewComponent_For_3_Conditional_7_Template_div_contextmenu_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOverlayContextMenu("logo", $event));
    });
    \u0275\u0275element(2, "img", 53);
    \u0275\u0275template(3, ReportPreviewComponent_For_3_Conditional_7_Conditional_3_Template, 6, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("z-index", ctx_r2.layerPaintZ("logo", 80))("visibility", ctx_r2.layerVisibility("logo"))("opacity", ctx_r2.layerPeekOpacity("logo"));
    \u0275\u0275advance();
    \u0275\u0275styleProp("pointer-events", ctx_r2.isLayerQuiet("logo") ? "none" : null)("left", ctx_r2.viewLogoX, "px")("top", ctx_r2.viewLogoY, "px")("width", ctx_r2.viewLogoWidth, "px")("height", ctx_r2.viewLogoHeight, "px")("outline", ctx_r2.logoOverlayBorder);
    \u0275\u0275classProp("cursor-move", ctx_r2.isOverlayChosen("logo"))("cursor-pointer", ctx_r2.clickable() && !ctx_r2.isOverlaySelected("logo"))("layer-quiet", ctx_r2.isLayerQuiet("logo"))("pointer-events-auto", ctx_r2.clickable() && !ctx_r2.isLayerQuiet("logo"))("group", ctx_r2.isOverlaySelected("logo"));
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", ctx_r2.logoRotateStyle);
    \u0275\u0275property("src", ctx_r2.logoUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isOverlaySelected("logo") && !ctx_r2.isLayerQuiet("logo") ? 3 : -1);
  }
}
function ReportPreviewComponent_For_3_For_9_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_For_9_Conditional_0_Conditional_3_Template_div_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const image_r14 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startRotate($event, ctx_r2.sheetOverlayId(image_r14.id)));
    });
    \u0275\u0275elementStart(1, "mat-icon", 55);
    \u0275\u0275text(2, "rotate_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 42);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_For_9_Conditional_0_Conditional_3_Template_div_pointerdown_3_listener($event) {
      \u0275\u0275restoreView(_r15);
      const image_r14 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startResize($event, ctx_r2.sheetOverlayId(image_r14.id)));
    });
    \u0275\u0275elementStart(4, "mat-icon", 50);
    \u0275\u0275text(5, "open_in_full");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r14 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r2.rotateHandleTop(ctx_r2.sheetImageView(image_r14).y), "px");
  }
}
function ReportPreviewComponent_For_3_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_For_9_Conditional_0_Template_div_pointerdown_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const image_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startMove($event, ctx_r2.sheetOverlayId(image_r14.id)));
    })("click", function ReportPreviewComponent_For_3_For_9_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const image_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectOverlay(ctx_r2.sheetOverlayId(image_r14.id), $event));
    })("contextmenu", function ReportPreviewComponent_For_3_For_9_Conditional_0_Template_div_contextmenu_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const image_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onOverlayContextMenu(ctx_r2.sheetOverlayId(image_r14.id), $event));
    });
    \u0275\u0275element(2, "img", 48);
    \u0275\u0275template(3, ReportPreviewComponent_For_3_For_9_Conditional_0_Conditional_3_Template, 6, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_31_0;
    const image_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("z-index", ctx_r2.layerPaintZ(ctx_r2.sheetOverlayId(image_r14.id), image_r14.zIndex || 48))("visibility", ctx_r2.layerVisibility(ctx_r2.sheetOverlayId(image_r14.id)))("opacity", ctx_r2.layerPeekOpacity(ctx_r2.sheetOverlayId(image_r14.id)));
    \u0275\u0275attribute("data-sheet-image-page", (tmp_31_0 = image_r14.page) !== null && tmp_31_0 !== void 0 ? tmp_31_0 : 0);
    \u0275\u0275advance();
    \u0275\u0275styleProp("pointer-events", ctx_r2.isLayerQuiet(ctx_r2.sheetOverlayId(image_r14.id)) ? "none" : null)("left", ctx_r2.sheetImageView(image_r14).x, "px")("top", ctx_r2.sheetImageView(image_r14).y, "px")("width", ctx_r2.sheetImageView(image_r14).width, "px")("height", ctx_r2.sheetImageView(image_r14).height, "px")("outline", ctx_r2.sheetImageBorder(image_r14.id));
    \u0275\u0275classProp("cursor-move", ctx_r2.isOverlayChosen(ctx_r2.sheetOverlayId(image_r14.id)))("cursor-pointer", ctx_r2.clickable() && !ctx_r2.isOverlaySelected(ctx_r2.sheetOverlayId(image_r14.id)))("layer-quiet", ctx_r2.isLayerQuiet(ctx_r2.sheetOverlayId(image_r14.id)))("pointer-events-auto", ctx_r2.clickable() && !ctx_r2.isLayerQuiet(ctx_r2.sheetOverlayId(image_r14.id)))("group", ctx_r2.isOverlaySelected(ctx_r2.sheetOverlayId(image_r14.id)));
    \u0275\u0275attribute("data-overlay-id", ctx_r2.sheetOverlayId(image_r14.id));
    \u0275\u0275advance();
    \u0275\u0275styleProp("transform", "rotate(" + (image_r14.rotation || 0) + "deg)");
    \u0275\u0275property("src", image_r14.src, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isOverlaySelected(ctx_r2.sheetOverlayId(image_r14.id)) && !ctx_r2.isLayerQuiet(ctx_r2.sheetOverlayId(image_r14.id)) ? 3 : -1);
  }
}
function ReportPreviewComponent_For_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportPreviewComponent_For_3_For_9_Conditional_0_Template, 4, 34, "div", 56);
  }
  if (rf & 2) {
    const image_r14 = ctx.$implicit;
    \u0275\u0275conditional(image_r14.src ? 0 : -1);
  }
}
function ReportPreviewComponent_For_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r15 = \u0275\u0275nextContext();
    const \u0275$index_5_r5 = ctx_r15.$index;
    const \u0275$count_5_r17 = ctx_r15.$count;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("position", ctx_r2.hasFreeLayout() ? "absolute" : null)("top", ctx_r2.hasFreeLayout() ? 0 : null, "px")("left", ctx_r2.hasFreeLayout() ? 0 : null, "px")("right", ctx_r2.hasFreeLayout() ? 0 : null, "px")("z-index", ctx_r2.hasFreeLayout() ? "910" : null)("pointer-events", ctx_r2.hasFreeLayout() ? "none" : null)("text-align", ctx_r2.pageNumberPosition() === "top-left" ? "left" : ctx_r2.pageNumberPosition() === "top-right" ? "right" : "center");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 15, "smartReport.pageOf", \u0275\u0275pureFunction2(18, _c4, \u0275$index_5_r5 + 1, \u0275$count_5_r17)), " ");
  }
}
function ReportPreviewComponent_For_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("height", ctx_r2.viewContentPaddingTop, "px");
  }
}
function ReportPreviewComponent_For_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon", 60);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 61);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "smartReport.noSectionsToPreview"));
  }
}
function ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "mat-icon", 69);
    \u0275\u0275text(2, "open_with");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r19 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("left", ctx_r2.moveBadgeOffset(section_r19.frame == null ? null : section_r19.frame.x), "px")("top", ctx_r2.moveBadgeOffset(section_r19.frame == null ? null : section_r19.frame.y), "px");
  }
}
function ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_2_Template_div_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const section_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startSectionRotate(section_r19, $event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 55);
    \u0275\u0275text(2, "rotate_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 71);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_2_Template_button_pointerdown_3_listener($event) {
      \u0275\u0275restoreView(_r20);
      const section_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startSectionResize(section_r19, $event, "nw"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 72);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_2_Template_button_pointerdown_4_listener($event) {
      \u0275\u0275restoreView(_r20);
      const section_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startSectionResize(section_r19, $event, "ne"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 73);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_2_Template_button_pointerdown_5_listener($event) {
      \u0275\u0275restoreView(_r20);
      const section_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startSectionResize(section_r19, $event, "sw"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 74);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_2_Template_button_pointerdown_6_listener($event) {
      \u0275\u0275restoreView(_r20);
      const section_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startSectionResize(section_r19, $event, "se"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r19 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r2.rotateHandleTop(section_r19.frame == null ? null : section_r19.frame.y), "px");
  }
}
function ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_3_For_1_Template_button_pointerdown_0_listener($event) {
      const handle_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const section_r19 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startSectionResize(section_r19, $event, handle_r22.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const handle_r22 = ctx.$implicit;
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 3, "smartReport.resizeBlock"))("ngClass", handle_r22.cls);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "smartReport.resizeBlock"));
  }
}
function ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_3_For_1_Template, 3, 7, "button", 75, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r2.blockResizeHandles);
  }
}
function ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 65);
  }
}
function ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 66);
  }
}
function ReportPreviewComponent_For_3_For_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function ReportPreviewComponent_For_3_For_15_Conditional_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const section_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSectionActivate(section_r19, $event));
    })("contextmenu", function ReportPreviewComponent_For_3_For_15_Conditional_0_Template_div_contextmenu_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const section_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSectionContextMenu(section_r19, $event));
    })("pointerdown", function ReportPreviewComponent_For_3_For_15_Conditional_0_Template_div_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const section_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSectionPointerDown(section_r19, $event));
    });
    \u0275\u0275template(1, ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_1_Template, 3, 4, "div", 64)(2, ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_2_Template, 7, 2)(3, ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_3_Template, 2, 0)(4, ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_4_Template, 1, 0, "div", 65)(5, ReportPreviewComponent_For_3_For_15_Conditional_0_Conditional_5_Template, 1, 0, "div", 66);
    \u0275\u0275elementContainer(6, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_35_0;
    const section_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    const sectionBody_r23 = \u0275\u0275reference(9);
    \u0275\u0275styleProp("pointer-events", ctx_r2.draggingSectionId() && ctx_r2.draggingSectionId() !== section_r19.id ? "none" : null)("touch-action", ctx_r2.reorderable() ? "none" : null)("background-color", ctx_r2.isShapeSection(section_r19) ? null : ctx_r2.sectionFrameBackground(section_r19))("border", ctx_r2.isShapeSection(section_r19) ? "none" : ctx_r2.sectionFrameBorder(section_r19))("border-radius", ctx_r2.isShapeSection(section_r19) ? 0 : ctx_r2.sectionFrameRadius(section_r19), "px")("padding", ctx_r2.isShapeSection(section_r19) ? "0" : ctx_r2.sectionFramePadding(section_r19));
    \u0275\u0275classProp("layer-quiet", ctx_r2.isLayerQuiet("sec:" + section_r19.id))("is-text-editing", ((tmp_35_0 = ctx_r2.editingText()) == null ? null : tmp_35_0.sectionId) === section_r19.id)("relative", !ctx_r2.hasFreeLayout())("absolute", ctx_r2.hasFreeLayout())("mb-3", !ctx_r2.hasFreeLayout())("cursor-pointer", ctx_r2.clickable() && !ctx_r2.reorderable())("select-none", ctx_r2.reorderable())("cursor-grab", ctx_r2.clickable() && ctx_r2.reorderable() && ctx_r2.draggingSectionId() !== section_r19.id)("cursor-grabbing", ctx_r2.draggingSectionId() === section_r19.id)("opacity-90", ctx_r2.draggingSectionId() === section_r19.id)("selection-outline", ctx_r2.showsSectionOutline(section_r19))("selection-outline-tight", ctx_r2.hugsText(section_r19));
    \u0275\u0275property("ngStyle", ctx_r2.sectionHostStyle(section_r19));
    \u0275\u0275attribute("data-section-id", section_r19.id)("data-section-type", section_r19.type);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.clickable() && ctx_r2.reorderable() && !ctx_r2.isLayerQuiet("sec:" + section_r19.id) && (ctx_r2.isSectionChosen(section_r19) || ctx_r2.draggingSectionId() === section_r19.id) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.clickable() && ctx_r2.isShapeSection(section_r19) && ctx_r2.selectedSectionId() === section_r19.id && !ctx_r2.isLayerQuiet("sec:" + section_r19.id) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.clickable() && ctx_r2.reorderable() && ctx_r2.hasFreeLayout() && !ctx_r2.isShapeSection(section_r19) && !ctx_r2.hugsText(section_r19) && !ctx_r2.isLayerQuiet("sec:" + section_r19.id) && ctx_r2.selectedSectionId() === section_r19.id && !ctx_r2.selectedCellKey() && !ctx_r2.draggingSectionId() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSectionDropBefore(section_r19) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSectionDropAfter(section_r19) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sectionBody_r23)("ngTemplateOutletContext", \u0275\u0275pureFunction1(46, _c5, section_r19));
  }
}
function ReportPreviewComponent_For_3_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportPreviewComponent_For_3_For_15_Conditional_0_Template, 7, 48, "div", 62);
  }
  if (rf & 2) {
    const section_r19 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r2.isPageAnchor(section_r19) ? 0 : -1);
  }
}
function ReportPreviewComponent_For_3_Conditional_16_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 78);
  }
  if (rf & 2) {
    const guide_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("left", guide_r24.axis === "x" ? guide_r24.at : 0, "px")("top", guide_r24.axis === "y" ? guide_r24.at : 0, "px")("width", guide_r24.axis === "y" ? "100%" : "0px")("height", guide_r24.axis === "x" ? "100%" : "0px")("border-left", guide_r24.axis === "x" ? "1px dashed #e11d48" : null)("border-top", guide_r24.axis === "y" ? "1px dashed #e11d48" : null);
  }
}
function ReportPreviewComponent_For_3_Conditional_16_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportPreviewComponent_For_3_Conditional_16_For_1_Conditional_0_Template, 1, 12, "div", 77);
  }
  if (rf & 2) {
    const guide_r24 = ctx.$implicit;
    const \u0275$index_5_r5 = \u0275\u0275nextContext(2).$index;
    \u0275\u0275conditional(guide_r24.page === \u0275$index_5_r5 ? 0 : -1);
  }
}
function ReportPreviewComponent_For_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ReportPreviewComponent_For_3_Conditional_16_For_1_Template, 1, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.alignmentGuides());
  }
}
function ReportPreviewComponent_For_3_Conditional_17_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 84);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("text-align", ctx_r2.legendPosition());
    \u0275\u0275property("textContent", ctx_r2.legend());
  }
}
function ReportPreviewComponent_For_3_Conditional_17_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 85);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("text-align", ctx_r2.termsPosition());
    \u0275\u0275property("textContent", ctx_r2.termsAndConditions());
  }
}
function ReportPreviewComponent_For_3_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275template(1, ReportPreviewComponent_For_3_Conditional_17_Conditional_1_Conditional_1_Template, 1, 3, "p", 82)(2, ReportPreviewComponent_For_3_Conditional_17_Conditional_1_Conditional_2_Template, 1, 3, "p", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.legend() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.termsAndConditions() ? 2 : -1);
  }
}
function ReportPreviewComponent_For_3_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r15 = \u0275\u0275nextContext(2);
    const \u0275$index_5_r5 = ctx_r15.$index;
    const \u0275$count_5_r17 = ctx_r15.$count;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r2.footerAlign(ctx_r2.pageNumberPosition()));
    \u0275\u0275classProp("border-t", !ctx_r2.legend() && !ctx_r2.termsAndConditions())("border-gray-200", !ctx_r2.legend() && !ctx_r2.termsAndConditions())("pt-3", !ctx_r2.legend() && !ctx_r2.termsAndConditions());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 9, "smartReport.pageOf", \u0275\u0275pureFunction2(12, _c4, \u0275$index_5_r5 + 1, \u0275$count_5_r17)), " ");
  }
}
function ReportPreviewComponent_For_3_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275template(1, ReportPreviewComponent_For_3_Conditional_17_Conditional_1_Template, 3, 2, "div", 80)(2, ReportPreviewComponent_For_3_Conditional_17_Conditional_2_Template, 3, 15, "div", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("position", ctx_r2.hasFreeLayout() ? "absolute" : null)("left", ctx_r2.hasFreeLayout() ? 0 : null, "px")("right", ctx_r2.hasFreeLayout() ? 0 : null, "px")("bottom", ctx_r2.hasFreeLayout() ? 0 : null, "px")("z-index", ctx_r2.hasFreeLayout() ? "910" : null)("pointer-events", ctx_r2.hasFreeLayout() && ctx_r2.draggingSectionId() ? "none" : null)("padding-left", ctx_r2.hasFreeLayout() ? 32 : null, "px")("padding-right", ctx_r2.hasFreeLayout() ? 32 : null, "px")("padding-bottom", ctx_r2.hasFreeLayout() ? 24 : null, "px")("background-color", ctx_r2.hasFreeLayout() ? ctx_r2.pageBackgroundColor() || "#ffffff" : null);
    \u0275\u0275classProp("mt-auto", !ctx_r2.hasFreeLayout())("pb-6", !ctx_r2.hasFreeLayout())("px-0", !ctx_r2.hasFreeLayout());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.legend() || ctx_r2.termsAndConditions() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showPageNumbers() && ctx_r2.pageNumberPosition().startsWith("bottom") ? 2 : -1);
  }
}
function ReportPreviewComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11, 3);
    \u0275\u0275template(2, ReportPreviewComponent_For_3_Conditional_2_Template, 2, 1)(3, ReportPreviewComponent_For_3_Conditional_3_Template, 4, 28, "div", 12)(4, ReportPreviewComponent_For_3_Conditional_4_Template, 1, 4, "div", 13)(5, ReportPreviewComponent_For_3_Conditional_5_Template, 2, 0)(6, ReportPreviewComponent_For_3_Conditional_6_Template, 1, 4, "div", 14)(7, ReportPreviewComponent_For_3_Conditional_7_Template, 4, 32, "div", 12);
    \u0275\u0275repeaterCreate(8, ReportPreviewComponent_For_3_For_9_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275template(10, ReportPreviewComponent_For_3_Conditional_10_Template, 3, 21, "div", 15);
    \u0275\u0275elementStart(11, "div", 16);
    \u0275\u0275template(12, ReportPreviewComponent_For_3_Conditional_12_Template, 1, 2, "div", 17)(13, ReportPreviewComponent_For_3_Conditional_13_Template, 6, 3, "div", 18);
    \u0275\u0275repeaterCreate(14, ReportPreviewComponent_For_3_For_15_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275template(16, ReportPreviewComponent_For_3_Conditional_16_Template, 2, 0)(17, ReportPreviewComponent_For_3_Conditional_17_Template, 3, 28, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_24_0;
    let tmp_45_0;
    const pageSections_r25 = ctx.$implicit;
    const \u0275$index_5_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r2.pageWidthCss())("max-width", ctx_r2.pageWidthCss())("min-width", ctx_r2.pageWidthCss())("min-height", ctx_r2.pageHeightCss())("height", ctx_r2.pageHeightCss())("background-color", ctx_r2.pageBackgroundColor() || "#ffffff");
    \u0275\u0275classProp("shadow-lg", !ctx_r2.thumbnailMode());
    \u0275\u0275attribute("data-report-row", (tmp_24_0 = ctx_r2.previewData()) == null ? null : tmp_24_0.rowIndex)("data-report-page-index", \u0275$index_5_r5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.watermarkEnabled() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.signatureEnabled() && ctx_r2.signatureImage() && \u0275$index_5_r5 === (ctx_r2.signaturePage() || 0) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasHeaderLogos() && ctx_r2.clickable() && !ctx_r2.thumbnailMode() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.headerLogoViews().length ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasFooterLogos() && ctx_r2.clickable() && !ctx_r2.thumbnailMode() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_5_r5 === 0 && ctx_r2.logoEnabled() && ctx_r2.logoUrl() && !ctx_r2.headerLogoViews().length ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.sheetImagesForPage(\u0275$index_5_r5));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showPageNumbers() && ctx_r2.pageNumberPosition().startsWith("top") ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("box-shadow", ctx_r2.clickable() && ctx_r2.reorderable() ? "inset 0 0 0 1px rgba(99, 102, 241, 0.25)" : null);
    \u0275\u0275classProp("relative", !ctx_r2.hasFreeLayout())("flex", !ctx_r2.hasFreeLayout())("flex-1", !ctx_r2.hasFreeLayout())("flex-col", !ctx_r2.hasFreeLayout())("absolute", ctx_r2.hasFreeLayout())("inset-0", ctx_r2.hasFreeLayout())("p-8", !ctx_r2.hasFreeLayout())("overflow-hidden", !ctx_r2.hasFreeLayout())("overflow-visible", ctx_r2.hasFreeLayout());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.hasFreeLayout() && \u0275$index_5_r5 === 0 && ctx_r2.viewContentPaddingTop > 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_5_r5 === 0 && ((tmp_45_0 = (tmp_45_0 = ctx_r2.template().sections) == null ? null : tmp_45_0.length) !== null && tmp_45_0 !== void 0 ? tmp_45_0 : 0) === 0 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(pageSections_r25);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.alignmentGuides().length ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasBottomChrome() ? 17 : -1);
  }
}
function ReportPreviewComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function ReportPreviewComponent_Conditional_4_Conditional_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.emitRemovePage($event));
    });
    \u0275\u0275elementStart(1, "mat-icon", 89);
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "visitaGuide.layoutRemovePage"), " ");
  }
}
function ReportPreviewComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, ReportPreviewComponent_Conditional_4_Conditional_1_Template, 5, 3, "button", 87);
    \u0275\u0275elementStart(2, "button", 88);
    \u0275\u0275listener("click", function ReportPreviewComponent_Conditional_4_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.emitAddPage($event));
    });
    \u0275\u0275elementStart(3, "mat-icon", 89);
    \u0275\u0275text(4, "note_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canRemoveLastPage() ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "visitaGuide.layoutAddPage"), " ");
  }
}
function ReportPreviewComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", null, 4);
    \u0275\u0275elementContainer(2, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r28 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    const sectionBody_r23 = \u0275\u0275reference(9);
    \u0275\u0275styleProp("background-color", ctx_r2.sectionFrameBackground(section_r28))("border", ctx_r2.sectionFrameBorder(section_r28))("border-radius", ctx_r2.sectionFrameRadius(section_r28), "px")("padding", ctx_r2.sectionFramePadding(section_r28));
    \u0275\u0275attribute("data-section-id", section_r28.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", sectionBody_r23)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c7, section_r28));
  }
}
function ReportPreviewComponent_Conditional_5_Conditional_3_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 84);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("text-align", ctx_r2.legendPosition());
    \u0275\u0275property("textContent", ctx_r2.legend());
  }
}
function ReportPreviewComponent_Conditional_5_Conditional_3_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 85);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("text-align", ctx_r2.termsPosition());
    \u0275\u0275property("textContent", ctx_r2.termsAndConditions());
  }
}
function ReportPreviewComponent_Conditional_5_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275template(1, ReportPreviewComponent_Conditional_5_Conditional_3_Conditional_2_Conditional_1_Template, 1, 3, "p", 82)(2, ReportPreviewComponent_Conditional_5_Conditional_3_Conditional_2_Conditional_2_Template, 1, 3, "p", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.legend() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.termsAndConditions() ? 2 : -1);
  }
}
function ReportPreviewComponent_Conditional_5_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("text-align", ctx_r2.footerAlign(ctx_r2.pageNumberPosition()));
    \u0275\u0275classProp("border-t", !ctx_r2.legend() && !ctx_r2.termsAndConditions())("border-gray-200", !ctx_r2.legend() && !ctx_r2.termsAndConditions())("pt-3", !ctx_r2.legend() && !ctx_r2.termsAndConditions());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 9, "smartReport.pageOf", \u0275\u0275pureFunction0(12, _c8)), " ");
  }
}
function ReportPreviewComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93, 5);
    \u0275\u0275template(2, ReportPreviewComponent_Conditional_5_Conditional_3_Conditional_2_Template, 3, 2, "div", 80)(3, ReportPreviewComponent_Conditional_5_Conditional_3_Conditional_3_Template, 3, 13, "div", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.legend() || ctx_r2.termsAndConditions() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showPageNumbers() && ctx_r2.pageNumberPosition().startsWith("bottom") ? 3 : -1);
  }
}
function ReportPreviewComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275repeaterCreate(1, ReportPreviewComponent_Conditional_5_For_2_Template, 3, 13, "div", 92, _forTrack0);
    \u0275\u0275template(3, ReportPreviewComponent_Conditional_5_Conditional_3_Template, 4, 2, "div", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r2.measureWidthCss());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.template().sections || \u0275\u0275pureFunction0(3, _c6));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hasBottomChrome() ? 3 : -1);
  }
}
function ReportPreviewComponent_ng_template_6_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_ng_template_6_Conditional_0_Conditional_0_Template_button_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r29 = \u0275\u0275nextContext(2);
      const section_r31 = ctx_r29.section;
      const key_r32 = ctx_r29.key;
      const axes_r33 = ctx_r29.axes;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startCellResize(section_r31, key_r32, axes_r33.includes("w") ? "w" : "x", $event));
    })("dblclick", function ReportPreviewComponent_ng_template_6_Conditional_0_Conditional_0_Template_button_dblclick_0_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r29 = \u0275\u0275nextContext(2);
      const section_r31 = ctx_r29.section;
      const key_r32 = ctx_r29.key;
      const axes_r33 = ctx_r29.axes;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetCellSize(section_r31, key_r32, axes_r33.includes("w") ? "w" : "x", $event));
    })("click", function ReportPreviewComponent_ng_template_6_Conditional_0_Conditional_0_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r29);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 2, "smartReport.resizeCellWidth"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "smartReport.resizeCellWidth"));
  }
}
function ReportPreviewComponent_ng_template_6_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_ng_template_6_Conditional_0_Conditional_1_Template_button_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r29 = \u0275\u0275nextContext(2);
      const section_r31 = ctx_r29.section;
      const key_r32 = ctx_r29.key;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startCellResize(section_r31, key_r32, "y", $event));
    })("dblclick", function ReportPreviewComponent_ng_template_6_Conditional_0_Conditional_1_Template_button_dblclick_0_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r29 = \u0275\u0275nextContext(2);
      const section_r31 = ctx_r29.section;
      const key_r32 = ctx_r29.key;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetCellSize(section_r31, key_r32, "y", $event));
    })("click", function ReportPreviewComponent_ng_template_6_Conditional_0_Conditional_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r34);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 2, "smartReport.resizeCellHeight"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, "smartReport.resizeCellHeight"));
  }
}
function ReportPreviewComponent_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportPreviewComponent_ng_template_6_Conditional_0_Conditional_0_Template, 3, 6, "button", 94)(1, ReportPreviewComponent_ng_template_6_Conditional_0_Conditional_1_Template, 3, 6, "button", 95);
  }
  if (rf & 2) {
    const axes_r33 = \u0275\u0275nextContext().axes;
    \u0275\u0275conditional(axes_r33.includes("x") || axes_r33.includes("w") ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(axes_r33.includes("y") ? 1 : -1);
  }
}
function ReportPreviewComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportPreviewComponent_ng_template_6_Conditional_0_Template, 2, 2);
  }
  if (rf & 2) {
    const section_r31 = ctx.section;
    const key_r32 = ctx.key;
    const measure_r35 = ctx.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!measure_r35 && ctx_r2.clickable() && ctx_r2.reorderable() && ctx_r2.isCellSelected(section_r31, key_r32) && !ctx_r2.isLayerQuiet("sec:" + section_r31.id) ? 0 : -1);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h2", 110);
    \u0275\u0275listener("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_0_Template_h2_contextmenu_1_listener($event) {
      \u0275\u0275restoreView(_r36);
      const section_r37 = \u0275\u0275nextContext().section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTitleContextMenu(section_r37, $event));
    });
    \u0275\u0275elementContainer(2, 67);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r37 = \u0275\u0275nextContext();
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("text-align", ctx_r2.roleTextAlign(section_r37, "title"))("max-width", ctx_r2.hasFreeLayout() ? ctx_r2.textHugMaxCss(section_r37) : null, "px");
    \u0275\u0275classProp("mb-4", !ctx_r2.hasFreeLayout())("w-fit", ctx_r2.hasFreeLayout());
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r2.roleFontSize(section_r37, "title"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "title"))("font-style", ctx_r2.roleFontStyle(section_r37, "title"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "title"))("font-family", ctx_r2.roleFontFamily(section_r37, "title"))("color", ctx_r2.roleColor(section_r37, "title"))("max-width", ctx_r2.hasFreeLayout() ? ctx_r2.textHugMaxCss(section_r37) : null, "px");
    \u0275\u0275classProp("max-w-full", !ctx_r2.hasFreeLayout())("ring-2", ctx_r2.isTitleSelected(section_r37))("ring-inset", ctx_r2.isTitleSelected(section_r37))("ring-indigo-400", ctx_r2.isTitleSelected(section_r37))("rounded-sm", ctx_r2.isTitleSelected(section_r37));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "title", section_r37.staticContent || section_r37.label || \u0275\u0275pipeBind1(3, 34, "smartReport.untitled"), measure_r39, true));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 111);
    \u0275\u0275elementContainer(2, 67);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r37 = \u0275\u0275nextContext();
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275classProp("mb-3", !ctx_r2.hasFreeLayout())("w-fit", ctx_r2.hasFreeLayout());
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r2.roleFontSize(section_r37, "title"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "title"))("font-style", ctx_r2.roleFontStyle(section_r37, "title"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "title"))("font-family", ctx_r2.roleFontFamily(section_r37, "title"))("text-align", ctx_r2.roleTextAlign(section_r37, "title"))("color", ctx_r2.roleColor(section_r37, "title"))("max-width", ctx_r2.hasFreeLayout() ? ctx_r2.textHugMaxCss(section_r37) : null, "px");
    \u0275\u0275classProp("inline-block", ctx_r2.hasFreeLayout());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "body", section_r37.staticContent || \u0275\u0275pipeBind1(3, 24, "smartReport.textContent"), measure_r39, true));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 112);
    \u0275\u0275elementContainer(2, 67);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 113);
    \u0275\u0275elementContainer(5, 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r37 = \u0275\u0275nextContext();
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275property("ngStyle", ctx_r2.rowLineBg(section_r37));
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-size", ctx_r2.roleFontSize(section_r37, "label"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "label"))("font-style", ctx_r2.roleFontStyle(section_r37, "label"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "label"))("font-family", ctx_r2.roleFontFamily(section_r37, "label"))("text-align", ctx_r2.roleTextAlign(section_r37, "label"))("color", ctx_r2.roleColor(section_r37, "label"));
    \u0275\u0275classProp("ring-1", ctx_r2.isFieldPartSelected(section_r37, "label"))("ring-lime-500", ctx_r2.isFieldPartSelected(section_r37, "label"))("rounded-sm", ctx_r2.isFieldPartSelected(section_r37, "label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "title", section_r37.label || \u0275\u0275pipeBind1(3, 45, "smartReport.field"), measure_r39));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("font-size", ctx_r2.roleFontSize(section_r37, "value"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "value"))("font-style", ctx_r2.roleFontStyle(section_r37, "value"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "value"))("font-family", ctx_r2.roleFontFamily(section_r37, "value"))("text-align", ctx_r2.roleTextAlign(section_r37, "value"))("color", ctx_r2.roleColor(section_r37, "value"));
    \u0275\u0275classProp("ring-1", ctx_r2.isFieldPartSelected(section_r37, "value"))("ring-orange-400", ctx_r2.isFieldPartSelected(section_r37, "value"))("rounded-sm", ctx_r2.isFieldPartSelected(section_r37, "value"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellValue", ctx_r2.boundValue(section_r37, "__value", ctx_r2.resolveDataPath(section_r37.dataPath) || "\u2014"), measure_r39, false, "__value", ctx_r2.resolveDataPath(section_r37.dataPath) || ""));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h4", 118);
    \u0275\u0275listener("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_3_Conditional_1_Template_h4_contextmenu_0_listener($event) {
      \u0275\u0275restoreView(_r41);
      const section_r37 = \u0275\u0275nextContext(2).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTitleContextMenu(section_r37, $event));
    });
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r37 = \u0275\u0275nextContext(2);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("font-size", ctx_r2.roleFontSize(section_r37, "title"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "title"))("font-style", ctx_r2.roleFontStyle(section_r37, "title"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "title"))("color", ctx_r2.roleColor(section_r37, "title"));
    \u0275\u0275classProp("ring-2", ctx_r2.isTitleSelected(section_r37))("ring-inset", ctx_r2.isTitleSelected(section_r37))("ring-indigo-400", ctx_r2.isTitleSelected(section_r37))("rounded-sm", ctx_r2.isTitleSelected(section_r37));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "title", section_r37.label, measure_r39));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 117)(1, "td", 119);
    \u0275\u0275elementContainer(2, 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 120);
    \u0275\u0275elementContainer(4, 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r42 = ctx.$implicit;
    const ctx_r37 = \u0275\u0275nextContext(2);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275property("ngStyle", ctx_r2.rowLineBg(section_r37));
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "label"))("font-size", ctx_r2.roleFontSize(section_r37, "label"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "label"))("font-style", ctx_r2.roleFontStyle(section_r37, "label"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "label"))("text-align", ctx_r2.roleTextAlign(section_r37, "label"))("color", ctx_r2.roleColor(section_r37, "label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellLabel", ctx_r2.entryLabel(section_r37, row_r42), measure_r39, false, row_r42.key, row_r42.label));
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "value"))("font-size", ctx_r2.roleFontSize(section_r37, "value"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "value"))("font-style", ctx_r2.roleFontStyle(section_r37, "value"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "value"))("text-align", ctx_r2.roleTextAlign(section_r37, "value"))("color", ctx_r2.roleColor(section_r37, "value"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellValue", ctx_r2.boundValue(section_r37, row_r42.key, row_r42.value), measure_r39, false, row_r42.key, row_r42.value));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 121);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "smartReport.noDataAtPath", \u0275\u0275pureFunction1(4, _c9, section_r37.dataPath)), " ");
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275template(1, ReportPreviewComponent_ng_template_8_Conditional_3_Conditional_1_Template, 2, 20, "h4", 115);
    \u0275\u0275elementStart(2, "table", 116)(3, "tbody");
    \u0275\u0275repeaterCreate(4, ReportPreviewComponent_ng_template_8_Conditional_3_For_5_Template, 5, 33, "tr", 117, _forTrack2);
    \u0275\u0275template(6, ReportPreviewComponent_ng_template_8_Conditional_3_Conditional_6_Template, 4, 6, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext().section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "title"))("text-align", ctx_r2.roleTextAlign(section_r37, "title"));
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.label ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.resolveTableData(section_r37));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.resolveTableData(section_r37).length === 0 ? 6 : -1);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 122);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    \u0275\u0275property("src", section_r37.staticContent, \u0275\u0275sanitizeUrl)("alt", section_r37.label || \u0275\u0275pipeBind1(1, 2, "smartReport.image"));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 123);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    \u0275\u0275property("src", section_r37.staticContent, \u0275\u0275sanitizeUrl)("alt", section_r37.label || \u0275\u0275pipeBind1(1, 2, "smartReport.image"));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "mat-icon", 125);
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd()();
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275template(2, ReportPreviewComponent_ng_template_8_Conditional_4_Conditional_2_Template, 2, 4, "img", 122)(3, ReportPreviewComponent_ng_template_8_Conditional_4_Conditional_3_Template, 2, 4, "img", 123)(4, ReportPreviewComponent_ng_template_8_Conditional_4_Conditional_4_Template, 3, 0, "div", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const section_r37 = \u0275\u0275nextContext().section;
    const ctx_r2 = \u0275\u0275nextContext();
    const framed_r43 = ctx_r2.hasFreeLayout() && !!((tmp_7_0 = ctx_r2.displayFrame(section_r37)) == null ? null : tmp_7_0.height);
    \u0275\u0275advance();
    \u0275\u0275styleProp("text-align", ctx_r2.roleTextAlign(section_r37, "title"));
    \u0275\u0275classProp("mb-4", !framed_r43)("h-full", framed_r43)("w-full", framed_r43);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.staticContent && framed_r43 ? 2 : section_r37.staticContent ? 3 : 4);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr", 126);
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext().section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("margin-top", ctx_r2.dividerMargin(section_r37), "px")("margin-bottom", ctx_r2.dividerMargin(section_r37), "px")("border-top", ctx_r2.dividerBorderTop(section_r37));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 127);
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext().section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", ctx_r2.shapeRotateStyle(section_r37));
    \u0275\u0275property("innerHTML", ctx_r2.iconMarkup(section_r37), \u0275\u0275sanitizeHtml);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "div", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext().section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-top", ctx_r2.lineStroke(section_r37));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_8_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "ellipse", 130);
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("fill", ctx_r2.shapeFill(section_r37))("stroke", ctx_r2.shapeStroke(section_r37))("stroke-width", ctx_r2.shapeStrokeWidth(section_r37));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_8_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "ellipse", 130);
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("fill", ctx_r2.shapeFill(section_r37))("stroke", ctx_r2.shapeStroke(section_r37))("stroke-width", ctx_r2.shapeStrokeWidth(section_r37));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_8_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "polygon", 131);
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("fill", ctx_r2.shapeFill(section_r37))("stroke", ctx_r2.shapeStroke(section_r37))("stroke-width", ctx_r2.shapeStrokeWidth(section_r37));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_8_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "polygon", 132);
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("fill", ctx_r2.shapeFill(section_r37))("stroke", ctx_r2.shapeStroke(section_r37))("stroke-width", ctx_r2.shapeStrokeWidth(section_r37));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_8_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "polygon", 133);
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("fill", ctx_r2.shapeFill(section_r37))("stroke", ctx_r2.shapeStroke(section_r37))("stroke-width", ctx_r2.shapeStrokeWidth(section_r37));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_8_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 134);
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("rx", ctx_r2.shapeRectRadius(section_r37, "x"))("ry", ctx_r2.shapeRectRadius(section_r37, "y"))("fill", ctx_r2.shapeFill(section_r37))("stroke", ctx_r2.shapeStroke(section_r37))("stroke-width", ctx_r2.shapeStrokeWidth(section_r37));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 129);
    \u0275\u0275template(2, ReportPreviewComponent_ng_template_8_Conditional_8_Case_2_Template, 1, 3, ":svg:ellipse", 130)(3, ReportPreviewComponent_ng_template_8_Conditional_8_Case_3_Template, 1, 3, ":svg:ellipse", 130)(4, ReportPreviewComponent_ng_template_8_Conditional_8_Case_4_Template, 1, 3, ":svg:polygon", 131)(5, ReportPreviewComponent_ng_template_8_Conditional_8_Case_5_Template, 1, 3, ":svg:polygon", 132)(6, ReportPreviewComponent_ng_template_8_Conditional_8_Case_6_Template, 1, 3, ":svg:polygon", 133)(7, ReportPreviewComponent_ng_template_8_Conditional_8_Case_7_Template, 1, 5, ":svg:rect", 134);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const section_r37 = \u0275\u0275nextContext().section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", ctx_r2.shapeRotateStyle(section_r37));
    \u0275\u0275advance();
    \u0275\u0275attribute("preserveAspectRatio", ctx_r2.shapeKeepRatio(section_r37) ? "xMidYMid meet" : "none");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_9_0 = ctx_r2.shapeKind(section_r37)) === "circle" ? 2 : tmp_9_0 === "bullet" ? 3 : tmp_9_0 === "star" ? 4 : tmp_9_0 === "triangle" ? 5 : tmp_9_0 === "diamond" ? 6 : 7);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext().section;
    \u0275\u0275styleProp("height", (section_r37.style == null ? null : section_r37.style.padding) || 16, "px");
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h4", 118);
    \u0275\u0275listener("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_1_Template_h4_contextmenu_0_listener($event) {
      \u0275\u0275restoreView(_r44);
      const section_r37 = \u0275\u0275nextContext(2).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTitleContextMenu(section_r37, $event));
    });
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r37 = \u0275\u0275nextContext(2);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("font-size", ctx_r2.roleFontSize(section_r37, "title"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "title"))("font-style", ctx_r2.roleFontStyle(section_r37, "title"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "title"))("color", ctx_r2.roleColor(section_r37, "title"));
    \u0275\u0275classProp("ring-2", ctx_r2.isTitleSelected(section_r37))("ring-inset", ctx_r2.isTitleSelected(section_r37))("ring-indigo-400", ctx_r2.isTitleSelected(section_r37))("rounded-sm", ctx_r2.isTitleSelected(section_r37));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "title", section_r37.label, measure_r39));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 138);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_2_For_4_Template_th_click_0_listener($event) {
      const column_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, column_r46.key, "label", $event));
    })("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_2_For_4_Template_th_contextmenu_0_listener($event) {
      const column_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellContextMenu(section_r37, column_r46.key, $event));
    });
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r46 = ctx.$implicit;
    const ctx_r37 = \u0275\u0275nextContext(3);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "label"))("font-size", ctx_r2.roleFontSize(section_r37, "label"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "label"))("font-style", ctx_r2.roleFontStyle(section_r37, "label"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "label"))("text-align", ctx_r2.roleTextAlign(section_r37, "label"))("color", ctx_r2.roleColor(section_r37, "label"));
    \u0275\u0275classProp("ring-1", ctx_r2.isCellSelected(section_r37, column_r46.key, "label"))("ring-lime-500", ctx_r2.isCellSelected(section_r37, column_r46.key, "label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellLabel", ctx_r2.entryLabel(section_r37, column_r46), measure_r39, false, column_r46.key, column_r46.label));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_2_For_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 140);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_2_For_7_For_2_Template_td_click_0_listener($event) {
      const \u0275$index_391_r48 = \u0275\u0275restoreView(_r47).$index;
      const section_r37 = \u0275\u0275nextContext(4).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, ctx_r2.structuralColumns(section_r37)[\u0275$index_391_r48].key, "value", $event));
    })("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_2_For_7_For_2_Template_td_contextmenu_0_listener($event) {
      const \u0275$index_391_r48 = \u0275\u0275restoreView(_r47).$index;
      const section_r37 = \u0275\u0275nextContext(4).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellContextMenu(section_r37, ctx_r2.structuralColumns(section_r37)[\u0275$index_391_r48].key, $event));
    });
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r49 = ctx.$implicit;
    const \u0275$index_391_r48 = ctx.$index;
    const \u0275$index_388_r50 = \u0275\u0275nextContext().$index;
    const ctx_r37 = \u0275\u0275nextContext(3);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "value"))("font-size", ctx_r2.roleFontSize(section_r37, "value"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "value"))("font-style", ctx_r2.roleFontStyle(section_r37, "value"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "value"))("text-align", ctx_r2.roleTextAlign(section_r37, "value"))("color", ctx_r2.roleColor(section_r37, "value"));
    \u0275\u0275classProp("ring-1", ctx_r2.isCellSelected(section_r37, ctx_r2.structuralColumns(section_r37)[\u0275$index_391_r48].key, "value"))("ring-orange-400", ctx_r2.isCellSelected(section_r37, ctx_r2.structuralColumns(section_r37)[\u0275$index_391_r48].key, "value"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellValue", ctx_r2.boundValue(section_r37, ctx_r2.cellStoreKey(ctx_r2.structuralColumns(section_r37)[\u0275$index_391_r48].key, \u0275$index_388_r50), cell_r49), measure_r39, false, ctx_r2.cellStoreKey(ctx_r2.structuralColumns(section_r37)[\u0275$index_391_r48].key, \u0275$index_388_r50), cell_r49));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 117);
    \u0275\u0275repeaterCreate(1, ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_2_For_7_For_2_Template, 2, 20, "td", 139, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r51 = ctx.$implicit;
    const section_r37 = \u0275\u0275nextContext(3).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r2.rowLineBg(section_r37));
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r51);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 116)(1, "thead")(2, "tr", 136);
    \u0275\u0275repeaterCreate(3, ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_2_For_4_Template, 2, 20, "th", 137, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tbody");
    \u0275\u0275repeaterCreate(6, ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_2_For_7_Template, 3, 1, "tr", 117, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("border-color", ctx_r2.primaryColor());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.structuralColumns(section_r37));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.structuralSampleRows(section_r37));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "smartReport.noDataAtPath", \u0275\u0275pureFunction1(4, _c9, section_r37.dataPath || "\u2014")), " ");
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275template(1, ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_1_Template, 2, 20, "h4", 115)(2, ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_2_Template, 8, 2, "table", 116)(3, ReportPreviewComponent_ng_template_8_Conditional_10_Conditional_3_Template, 3, 6, "div", 135);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext().section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "title"))("text-align", ctx_r2.roleTextAlign(section_r37, "title"));
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.label ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.structuralColumns(section_r37).length > 0 ? 2 : 3);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h4", 118);
    \u0275\u0275listener("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_1_Template_h4_contextmenu_0_listener($event) {
      \u0275\u0275restoreView(_r52);
      const section_r37 = \u0275\u0275nextContext(2).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTitleContextMenu(section_r37, $event));
    });
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r37 = \u0275\u0275nextContext(2);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("font-size", ctx_r2.roleFontSize(section_r37, "title"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "title"))("font-style", ctx_r2.roleFontStyle(section_r37, "title"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "title"))("color", ctx_r2.roleColor(section_r37, "title"));
    \u0275\u0275classProp("ring-2", ctx_r2.isTitleSelected(section_r37))("ring-inset", ctx_r2.isTitleSelected(section_r37))("ring-indigo-400", ctx_r2.isTitleSelected(section_r37))("rounded-sm", ctx_r2.isTitleSelected(section_r37));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "title", section_r37.label, measure_r39));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_0_For_2_Template_div_click_0_listener($event) {
      const entry_r54 = \u0275\u0275restoreView(_r53).$implicit;
      const section_r37 = \u0275\u0275nextContext(5).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, entry_r54.key, "cell", $event));
    })("pointerdown", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_0_For_2_Template_div_pointerdown_0_listener($event) {
      const entry_r54 = \u0275\u0275restoreView(_r53).$implicit;
      const section_r37 = \u0275\u0275nextContext(5).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellPointerDown(section_r37, entry_r54.key, $event));
    })("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_0_For_2_Template_div_contextmenu_0_listener($event) {
      const entry_r54 = \u0275\u0275restoreView(_r53).$implicit;
      const section_r37 = \u0275\u0275nextContext(5).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellContextMenu(section_r37, entry_r54.key, $event));
    });
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementStart(2, "div", 146);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_0_For_2_Template_div_click_2_listener($event) {
      const entry_r54 = \u0275\u0275restoreView(_r53).$implicit;
      const section_r37 = \u0275\u0275nextContext(5).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, entry_r54.key, "label", $event));
    });
    \u0275\u0275elementContainer(3, 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 147);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_0_For_2_Template_div_click_4_listener($event) {
      const entry_r54 = \u0275\u0275restoreView(_r53).$implicit;
      const section_r37 = \u0275\u0275nextContext(5).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, entry_r54.key, "value", $event));
    });
    \u0275\u0275elementContainer(5, 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r54 = ctx.$implicit;
    const \u0275$index_414_r55 = ctx.$index;
    const \u0275$count_414_r56 = ctx.$count;
    const ctx_r37 = \u0275\u0275nextContext(5);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const cellResizeHandles_r57 = \u0275\u0275reference(7);
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("grid-column", ctx_r2.cellGridColumn(section_r37, entry_r54.key))("min-height", ctx_r2.cellMinHeight(section_r37, entry_r54.key), "px")("background-color", ctx_r2.cellBackground(section_r37, entry_r54.key) || null)("border", ctx_r2.cellHasBox(section_r37, entry_r54.key) ? ctx_r2.cellBorder(section_r37, entry_r54.key) : null)("border-radius", ctx_r2.cellRadius(section_r37, entry_r54.key), "px");
    \u0275\u0275classProp("ring-2", ctx_r2.isCellSelected(section_r37, entry_r54.key))("ring-inset", ctx_r2.isCellSelected(section_r37, entry_r54.key))("ring-indigo-400", ctx_r2.isCellSelected(section_r37, entry_r54.key))("cursor-pointer", ctx_r2.clickable() && !ctx_r2.reorderable())("cursor-grab", ctx_r2.clickable() && ctx_r2.reorderable());
    \u0275\u0275property("ngStyle", ctx_r2.rowLineBg(section_r37, entry_r54.key, \u0275$index_414_r55 === \u0275$count_414_r56 - 1));
    \u0275\u0275attribute("data-cell-key", entry_r54.key);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", cellResizeHandles_r57)("ngTemplateOutletContext", \u0275\u0275pureFunction3(68, _c10, section_r37, entry_r54.key, measure_r39));
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "label", entry_r54.key))("font-size", ctx_r2.roleFontSize(section_r37, "label", entry_r54.key), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "label", entry_r54.key))("font-style", ctx_r2.roleFontStyle(section_r37, "label", entry_r54.key))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "label", entry_r54.key))("text-align", ctx_r2.roleTextAlign(section_r37, "label", entry_r54.key))("color", ctx_r2.roleColor(section_r37, "label", entry_r54.key));
    \u0275\u0275classProp("ring-1", ctx_r2.isCellSelected(section_r37, entry_r54.key, "label"))("ring-lime-500", ctx_r2.isCellSelected(section_r37, entry_r54.key, "label"))("rounded-sm", ctx_r2.isCellSelected(section_r37, entry_r54.key, "label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellLabel", ctx_r2.entryLabel(section_r37, entry_r54), measure_r39, false, entry_r54.key, entry_r54.label));
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "value", entry_r54.key))("font-size", ctx_r2.roleFontSize(section_r37, "value", entry_r54.key), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "value", entry_r54.key))("font-style", ctx_r2.roleFontStyle(section_r37, "value", entry_r54.key))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "value", entry_r54.key))("text-align", ctx_r2.roleTextAlign(section_r37, "value", entry_r54.key))("color", ctx_r2.roleColor(section_r37, "value", entry_r54.key));
    \u0275\u0275classProp("ring-1", ctx_r2.isCellSelected(section_r37, entry_r54.key, "value"))("ring-orange-400", ctx_r2.isCellSelected(section_r37, entry_r54.key, "value"))("rounded-sm", ctx_r2.isCellSelected(section_r37, entry_r54.key, "value"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellValue", ctx_r2.boundValue(section_r37, entry_r54.key, entry_r54.value), measure_r39, false, entry_r54.key, entry_r54.value));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275repeaterCreate(1, ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_0_For_2_Template, 6, 72, "div", 144, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chunk_r58 = \u0275\u0275nextContext().$implicit;
    const section_r37 = \u0275\u0275nextContext(3).section;
    \u0275\u0275styleProp("grid-template-columns", "repeat(" + (section_r37.columnsPerRow || 2) + ", minmax(0, 1fr))");
    \u0275\u0275advance();
    \u0275\u0275repeater(chunk_r58.entries);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 155);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chunk_r58 = \u0275\u0275nextContext(2).$implicit;
    const section_r37 = \u0275\u0275nextContext(3).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r2.tableHeaderFill(section_r37, chunk_r58.table.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "smartReport.sheetTable"), " ");
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 156);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chunk_r58 = \u0275\u0275nextContext(2).$implicit;
    const section_r37 = \u0275\u0275nextContext(3).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "label"))("font-size", ctx_r2.roleFontSize(section_r37, "label"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "label"))("color", ctx_r2.roleColor(section_r37, "label"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.tableLabel(section_r37, chunk_r58.table), " ");
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 157);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_For_8_Template_th_click_0_listener($event) {
      const column_r61 = \u0275\u0275restoreView(_r60).$implicit;
      const chunk_r58 = \u0275\u0275nextContext(2).$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, ctx_r2.tableColumnKey(chunk_r58.table.key, column_r61.key), "label", $event));
    })("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_For_8_Template_th_contextmenu_0_listener($event) {
      const column_r61 = \u0275\u0275restoreView(_r60).$implicit;
      const chunk_r58 = \u0275\u0275nextContext(2).$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellContextMenu(section_r37, ctx_r2.tableColumnKey(chunk_r58.table.key, column_r61.key), $event));
    });
    \u0275\u0275elementContainer(1, 67)(2, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r61 = ctx.$implicit;
    const chunk_r58 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r37 = \u0275\u0275nextContext(3);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const cellResizeHandles_r57 = \u0275\u0275reference(7);
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("width", ctx_r2.columnWidth(section_r37, ctx_r2.tableColumnKey(chunk_r58.table.key, column_r61.key)), "px")("border-color", ctx_r2.tableEdge(section_r37, chunk_r58.table.key))("font-family", ctx_r2.tableText(section_r37, "label", chunk_r58.table.key, column_r61.key).fontFamily)("font-size", ctx_r2.tableText(section_r37, "label", chunk_r58.table.key, column_r61.key).fontSize, "px")("font-weight", ctx_r2.tableText(section_r37, "label", chunk_r58.table.key, column_r61.key).fontWeight)("font-style", ctx_r2.tableText(section_r37, "label", chunk_r58.table.key, column_r61.key).fontStyle)("text-decoration", ctx_r2.tableText(section_r37, "label", chunk_r58.table.key, column_r61.key).textDecoration)("text-align", ctx_r2.tableText(section_r37, "label", chunk_r58.table.key, column_r61.key).textAlign)("color", ctx_r2.tableText(section_r37, "label", chunk_r58.table.key, column_r61.key).color);
    \u0275\u0275classProp("ring-1", ctx_r2.isCellSelected(section_r37, ctx_r2.tableColumnKey(chunk_r58.table.key, column_r61.key), "label"))("ring-lime-500", ctx_r2.isCellSelected(section_r37, ctx_r2.tableColumnKey(chunk_r58.table.key, column_r61.key), "label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellLabel", ctx_r2.entryLabel(section_r37, \u0275\u0275pureFunction2(26, _c11, ctx_r2.tableColumnKey(chunk_r58.table.key, column_r61.key), column_r61.label)), measure_r39, false, ctx_r2.tableColumnKey(chunk_r58.table.key, column_r61.key), column_r61.label));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", cellResizeHandles_r57)("ngTemplateOutletContext", \u0275\u0275pureFunction3(29, _c12, section_r37, ctx_r2.tableColumnKey(chunk_r58.table.key, column_r61.key), measure_r39));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_For_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 159);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_For_11_For_2_Template_td_click_0_listener($event) {
      const column_r63 = \u0275\u0275restoreView(_r62).$implicit;
      const chunk_r58 = \u0275\u0275nextContext(3).$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, ctx_r2.tableColumnKey(chunk_r58.table.key, column_r63.key), "value", $event));
    })("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_For_11_For_2_Template_td_contextmenu_0_listener($event) {
      const column_r63 = \u0275\u0275restoreView(_r62).$implicit;
      const chunk_r58 = \u0275\u0275nextContext(3).$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellContextMenu(section_r37, ctx_r2.tableColumnKey(chunk_r58.table.key, column_r63.key), $event));
    });
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r63 = ctx.$implicit;
    const ctx_r63 = \u0275\u0275nextContext();
    const row_r65 = ctx_r63.$implicit;
    const \u0275$index_456_r66 = ctx_r63.$index;
    const chunk_r58 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r37 = \u0275\u0275nextContext(3);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("font-family", ctx_r2.tableText(section_r37, "value", chunk_r58.table.key, column_r63.key).fontFamily)("font-size", ctx_r2.tableText(section_r37, "value", chunk_r58.table.key, column_r63.key).fontSize, "px")("font-weight", ctx_r2.tableText(section_r37, "value", chunk_r58.table.key, column_r63.key).fontWeight)("font-style", ctx_r2.tableText(section_r37, "value", chunk_r58.table.key, column_r63.key).fontStyle)("text-decoration", ctx_r2.tableText(section_r37, "value", chunk_r58.table.key, column_r63.key).textDecoration)("text-align", ctx_r2.tableText(section_r37, "value", chunk_r58.table.key, column_r63.key).textAlign)("color", ctx_r2.tableText(section_r37, "value", chunk_r58.table.key, column_r63.key).color);
    \u0275\u0275classProp("ring-1", ctx_r2.isCellSelected(section_r37, ctx_r2.tableColumnKey(chunk_r58.table.key, column_r63.key), "value"))("ring-orange-400", ctx_r2.isCellSelected(section_r37, ctx_r2.tableColumnKey(chunk_r58.table.key, column_r63.key), "value"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellValue", ctx_r2.boundValue(section_r37, ctx_r2.cellStoreKey(ctx_r2.tableColumnKey(chunk_r58.table.key, column_r63.key), \u0275$index_456_r66), row_r65[column_r63.key]), measure_r39, false, ctx_r2.cellStoreKey(ctx_r2.tableColumnKey(chunk_r58.table.key, column_r63.key), \u0275$index_456_r66), row_r65[column_r63.key]));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_For_11_For_2_Template, 2, 20, "td", 158, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_456_r66 = ctx.$index;
    const \u0275$count_456_r67 = ctx.$count;
    const chunk_r58 = \u0275\u0275nextContext(2).$implicit;
    const section_r37 = \u0275\u0275nextContext(3).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", ctx_r2.tableEdge(section_r37, chunk_r58.table.key));
    \u0275\u0275classProp("border-b", !(\u0275$index_456_r66 === \u0275$count_456_r67 - 1));
    \u0275\u0275advance();
    \u0275\u0275repeater(chunk_r58.table.columns);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r59);
      const chunk_r58 = \u0275\u0275nextContext().$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, chunk_r58.table.key, "cell", $event));
    })("pointerdown", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_Template_div_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r59);
      const chunk_r58 = \u0275\u0275nextContext().$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellPointerDown(section_r37, chunk_r58.table.key, $event));
    })("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_Template_div_contextmenu_0_listener($event) {
      \u0275\u0275restoreView(_r59);
      const chunk_r58 = \u0275\u0275nextContext().$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellContextMenu(section_r37, chunk_r58.table.key, $event));
    });
    \u0275\u0275elementStart(1, "div", 149);
    \u0275\u0275template(2, ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_Conditional_2_Template, 3, 5, "span", 150)(3, ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_Conditional_3_Template, 2, 9, "p", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "table", 152)(5, "thead")(6, "tr");
    \u0275\u0275repeaterCreate(7, ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_For_8_Template, 3, 33, "th", 153, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_For_11_Template, 3, 4, "tr", 154, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chunk_r58 = \u0275\u0275nextContext().$implicit;
    const section_r37 = \u0275\u0275nextContext(3).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r2.tableFill(section_r37, chunk_r58.table.key))("border", ctx_r2.cellHasBox(section_r37, chunk_r58.table.key) ? ctx_r2.cellBorder(section_r37, chunk_r58.table.key) : "1px solid " + ctx_r2.tableEdge(section_r37, chunk_r58.table.key))("border-radius", ctx_r2.cellRadius(section_r37, chunk_r58.table.key) || null, "px");
    \u0275\u0275classProp("ring-2", ctx_r2.isCellSelected(section_r37, chunk_r58.table.key))("ring-inset", ctx_r2.isCellSelected(section_r37, chunk_r58.table.key))("ring-indigo-400", ctx_r2.isCellSelected(section_r37, chunk_r58.table.key))("cursor-pointer", ctx_r2.clickable());
    \u0275\u0275attribute("data-cell-key", chunk_r58.table.key);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.tableShowsBadge(section_r37, chunk_r58.table.key) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(chunk_r58.table.key !== "__list" ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", ctx_r2.tableHeaderFill(section_r37, chunk_r58.table.key));
    \u0275\u0275advance();
    \u0275\u0275repeater(chunk_r58.table.columns);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(chunk_r58.table.rows);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_0_Template, 3, 2, "div", 141)(1, ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Conditional_1_Template, 12, 19, "div", 142);
  }
  if (rf & 2) {
    const chunk_r58 = ctx.$implicit;
    \u0275\u0275conditional(chunk_r58.kind === "fields" ? 0 : 1);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_For_1_Template, 2, 1, null, null, _forTrack3);
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.sheetChunks(section_r37));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "smartReport.noDataAtPath", \u0275\u0275pureFunction1(4, _c9, section_r37.dataPath || "\u2014")), " ");
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275template(1, ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_1_Template, 2, 20, "h4", 115)(2, ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_2_Template, 2, 0)(3, ReportPreviewComponent_ng_template_8_Conditional_11_Conditional_3_Template, 3, 6, "div", 135);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext().section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "title"))("text-align", ctx_r2.roleTextAlign(section_r37, "title"));
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.label ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.sectionHasStructuredData(section_r37) ? 2 : 3);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 163);
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r37 = \u0275\u0275nextContext(2);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "label"))("font-size", ctx_r2.roleFontSize(section_r37, "label"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "label"))("font-style", ctx_r2.roleFontStyle(section_r37, "label"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "label"))("color", ctx_r2.roleColor(section_r37, "label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "title", section_r37.label, measure_r39));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 160);
    \u0275\u0275template(1, ReportPreviewComponent_ng_template_8_Conditional_12_Conditional_1_Template, 2, 14, "span", 161);
    \u0275\u0275elementStart(2, "span", 162);
    \u0275\u0275elementContainer(3, 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r37 = \u0275\u0275nextContext();
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "title"))("text-align", ctx_r2.roleTextAlign(section_r37, "title"));
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.label ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "value"))("font-size", ctx_r2.roleFontSize(section_r37, "value"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "value"))("font-style", ctx_r2.roleFontStyle(section_r37, "value"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "value"));
    \u0275\u0275property("ngClass", ctx_r2.variantClasses(section_r37));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellValue", ctx_r2.boundValue(section_r37, "__value", ctx_r2.resolveDataPath(section_r37.dataPath) || "\u2014"), measure_r39, false, "__value", ctx_r2.resolveDataPath(section_r37.dataPath) || ""));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h4", 167);
    \u0275\u0275listener("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_1_Template_h4_contextmenu_0_listener($event) {
      \u0275\u0275restoreView(_r68);
      const section_r37 = \u0275\u0275nextContext(2).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTitleContextMenu(section_r37, $event));
    });
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r37 = \u0275\u0275nextContext(2);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("font-size", ctx_r2.roleFontSize(section_r37, "title"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "title"))("font-style", ctx_r2.roleFontStyle(section_r37, "title"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "title"))("color", ctx_r2.roleColor(section_r37, "title"));
    \u0275\u0275classProp("ring-2", ctx_r2.isTitleSelected(section_r37))("ring-inset", ctx_r2.isTitleSelected(section_r37))("ring-indigo-400", ctx_r2.isTitleSelected(section_r37))("rounded-sm", ctx_r2.isTitleSelected(section_r37));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "title", section_r37.label, measure_r39));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 168);
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r37 = \u0275\u0275nextContext(2);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "value"))("font-size", ctx_r2.roleFontSize(section_r37, "value"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "value"))("font-style", ctx_r2.roleFontStyle(section_r37, "value"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "value"))("text-align", ctx_r2.roleTextAlign(section_r37, "value"))("color", ctx_r2.roleColor(section_r37, "value"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "body", section_r37.staticContent, measure_r39, true));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 171);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_0_For_2_Template_div_click_0_listener($event) {
      const entry_r70 = \u0275\u0275restoreView(_r69).$implicit;
      const section_r37 = \u0275\u0275nextContext(5).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, entry_r70.key, "cell", $event));
    })("pointerdown", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_0_For_2_Template_div_pointerdown_0_listener($event) {
      const entry_r70 = \u0275\u0275restoreView(_r69).$implicit;
      const section_r37 = \u0275\u0275nextContext(5).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellPointerDown(section_r37, entry_r70.key, $event));
    })("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_0_For_2_Template_div_contextmenu_0_listener($event) {
      const entry_r70 = \u0275\u0275restoreView(_r69).$implicit;
      const section_r37 = \u0275\u0275nextContext(5).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellContextMenu(section_r37, entry_r70.key, $event));
    });
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementStart(2, "span", 172);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_0_For_2_Template_span_click_2_listener($event) {
      const entry_r70 = \u0275\u0275restoreView(_r69).$implicit;
      const section_r37 = \u0275\u0275nextContext(5).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, entry_r70.key, "label", $event));
    });
    \u0275\u0275elementContainer(3, 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 147);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_0_For_2_Template_span_click_4_listener($event) {
      const entry_r70 = \u0275\u0275restoreView(_r69).$implicit;
      const section_r37 = \u0275\u0275nextContext(5).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, entry_r70.key, "value", $event));
    });
    \u0275\u0275elementContainer(5, 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r70 = ctx.$implicit;
    const \u0275$index_499_r71 = ctx.$index;
    const \u0275$count_499_r72 = ctx.$count;
    const ctx_r37 = \u0275\u0275nextContext(5);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const cellResizeHandles_r57 = \u0275\u0275reference(7);
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("min-height", ctx_r2.cellMinHeight(section_r37, entry_r70.key), "px")("background-color", ctx_r2.cellBackground(section_r37, entry_r70.key) || null)("border", ctx_r2.cellHasBox(section_r37, entry_r70.key) ? ctx_r2.cellBorder(section_r37, entry_r70.key) : null)("border-radius", ctx_r2.cellRadius(section_r37, entry_r70.key), "px");
    \u0275\u0275classProp("ring-2", ctx_r2.isCellSelected(section_r37, entry_r70.key))("ring-inset", ctx_r2.isCellSelected(section_r37, entry_r70.key))("ring-indigo-400", ctx_r2.isCellSelected(section_r37, entry_r70.key))("cursor-pointer", ctx_r2.clickable() && !ctx_r2.reorderable())("cursor-grab", ctx_r2.clickable() && ctx_r2.reorderable());
    \u0275\u0275property("ngStyle", ctx_r2.rowLineBg(section_r37, entry_r70.key, \u0275$index_499_r71 === \u0275$count_499_r72 - 1));
    \u0275\u0275attribute("data-cell-key", entry_r70.key);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", cellResizeHandles_r57)("ngTemplateOutletContext", \u0275\u0275pureFunction3(62, _c13, section_r37, entry_r70.key, measure_r39));
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "label", entry_r70.key))("font-size", ctx_r2.roleFontSize(section_r37, "label", entry_r70.key), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "label", entry_r70.key))("font-style", ctx_r2.roleFontStyle(section_r37, "label", entry_r70.key))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "label", entry_r70.key))("text-align", ctx_r2.roleTextAlign(section_r37, "label", entry_r70.key))("color", ctx_r2.roleColor(section_r37, "label", entry_r70.key));
    \u0275\u0275classProp("ring-1", ctx_r2.isCellSelected(section_r37, entry_r70.key, "label"))("ring-lime-500", ctx_r2.isCellSelected(section_r37, entry_r70.key, "label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellLabel", ctx_r2.entryLabel(section_r37, entry_r70), measure_r39, false, entry_r70.key, entry_r70.label));
    \u0275\u0275advance();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "value", entry_r70.key))("font-size", ctx_r2.roleFontSize(section_r37, "value", entry_r70.key), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "value", entry_r70.key))("font-style", ctx_r2.roleFontStyle(section_r37, "value", entry_r70.key))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "value", entry_r70.key))("text-align", ctx_r2.roleTextAlign(section_r37, "value", entry_r70.key))("color", ctx_r2.roleColor(section_r37, "value", entry_r70.key));
    \u0275\u0275classProp("ring-1", ctx_r2.isCellSelected(section_r37, entry_r70.key, "value"))("ring-orange-400", ctx_r2.isCellSelected(section_r37, entry_r70.key, "value"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellValue", ctx_r2.boundValue(section_r37, entry_r70.key, entry_r70.value), measure_r39, false, entry_r70.key, entry_r70.value));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275repeaterCreate(1, ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_0_For_2_Template, 6, 66, "div", 170, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chunk_r73 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(chunk_r73.entries);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 155);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chunk_r73 = \u0275\u0275nextContext(2).$implicit;
    const section_r37 = \u0275\u0275nextContext(3).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r2.tableHeaderFill(section_r37, chunk_r73.table.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "smartReport.sheetTable"), " ");
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 156);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chunk_r73 = \u0275\u0275nextContext(2).$implicit;
    const section_r37 = \u0275\u0275nextContext(3).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "label"))("font-size", ctx_r2.roleFontSize(section_r37, "label"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "label"))("color", ctx_r2.roleColor(section_r37, "label"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.tableLabel(section_r37, chunk_r73.table), " ");
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 157);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_For_8_Template_th_click_0_listener($event) {
      const column_r76 = \u0275\u0275restoreView(_r75).$implicit;
      const chunk_r73 = \u0275\u0275nextContext(2).$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, ctx_r2.tableColumnKey(chunk_r73.table.key, column_r76.key), "label", $event));
    })("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_For_8_Template_th_contextmenu_0_listener($event) {
      const column_r76 = \u0275\u0275restoreView(_r75).$implicit;
      const chunk_r73 = \u0275\u0275nextContext(2).$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellContextMenu(section_r37, ctx_r2.tableColumnKey(chunk_r73.table.key, column_r76.key), $event));
    });
    \u0275\u0275elementContainer(1, 67)(2, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r76 = ctx.$implicit;
    const chunk_r73 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r37 = \u0275\u0275nextContext(3);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const cellResizeHandles_r57 = \u0275\u0275reference(7);
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("width", ctx_r2.columnWidth(section_r37, ctx_r2.tableColumnKey(chunk_r73.table.key, column_r76.key)), "px")("border-color", ctx_r2.tableEdge(section_r37, chunk_r73.table.key))("font-family", ctx_r2.tableText(section_r37, "label", chunk_r73.table.key, column_r76.key).fontFamily)("font-size", ctx_r2.tableText(section_r37, "label", chunk_r73.table.key, column_r76.key).fontSize, "px")("font-weight", ctx_r2.tableText(section_r37, "label", chunk_r73.table.key, column_r76.key).fontWeight)("font-style", ctx_r2.tableText(section_r37, "label", chunk_r73.table.key, column_r76.key).fontStyle)("text-decoration", ctx_r2.tableText(section_r37, "label", chunk_r73.table.key, column_r76.key).textDecoration)("text-align", ctx_r2.tableText(section_r37, "label", chunk_r73.table.key, column_r76.key).textAlign)("color", ctx_r2.tableText(section_r37, "label", chunk_r73.table.key, column_r76.key).color);
    \u0275\u0275classProp("ring-1", ctx_r2.isCellSelected(section_r37, ctx_r2.tableColumnKey(chunk_r73.table.key, column_r76.key), "label"))("ring-lime-500", ctx_r2.isCellSelected(section_r37, ctx_r2.tableColumnKey(chunk_r73.table.key, column_r76.key), "label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellLabel", ctx_r2.entryLabel(section_r37, \u0275\u0275pureFunction2(26, _c11, ctx_r2.tableColumnKey(chunk_r73.table.key, column_r76.key), column_r76.label)), measure_r39, false, ctx_r2.tableColumnKey(chunk_r73.table.key, column_r76.key), column_r76.label));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", cellResizeHandles_r57)("ngTemplateOutletContext", \u0275\u0275pureFunction3(29, _c12, section_r37, ctx_r2.tableColumnKey(chunk_r73.table.key, column_r76.key), measure_r39));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_For_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 159);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_For_11_For_2_Template_td_click_0_listener($event) {
      const column_r78 = \u0275\u0275restoreView(_r77).$implicit;
      const chunk_r73 = \u0275\u0275nextContext(3).$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, ctx_r2.tableColumnKey(chunk_r73.table.key, column_r78.key), "value", $event));
    })("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_For_11_For_2_Template_td_contextmenu_0_listener($event) {
      const column_r78 = \u0275\u0275restoreView(_r77).$implicit;
      const chunk_r73 = \u0275\u0275nextContext(3).$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellContextMenu(section_r37, ctx_r2.tableColumnKey(chunk_r73.table.key, column_r78.key), $event));
    });
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r78 = ctx.$implicit;
    const ctx_r78 = \u0275\u0275nextContext();
    const row_r80 = ctx_r78.$implicit;
    const \u0275$index_541_r81 = ctx_r78.$index;
    const chunk_r73 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r37 = \u0275\u0275nextContext(3);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("font-family", ctx_r2.tableText(section_r37, "value", chunk_r73.table.key, column_r78.key).fontFamily)("font-size", ctx_r2.tableText(section_r37, "value", chunk_r73.table.key, column_r78.key).fontSize, "px")("font-weight", ctx_r2.tableText(section_r37, "value", chunk_r73.table.key, column_r78.key).fontWeight)("font-style", ctx_r2.tableText(section_r37, "value", chunk_r73.table.key, column_r78.key).fontStyle)("text-decoration", ctx_r2.tableText(section_r37, "value", chunk_r73.table.key, column_r78.key).textDecoration)("text-align", ctx_r2.tableText(section_r37, "value", chunk_r73.table.key, column_r78.key).textAlign)("color", ctx_r2.tableText(section_r37, "value", chunk_r73.table.key, column_r78.key).color);
    \u0275\u0275classProp("ring-1", ctx_r2.isCellSelected(section_r37, ctx_r2.tableColumnKey(chunk_r73.table.key, column_r78.key), "value"))("ring-orange-400", ctx_r2.isCellSelected(section_r37, ctx_r2.tableColumnKey(chunk_r73.table.key, column_r78.key), "value"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "cellValue", ctx_r2.boundValue(section_r37, ctx_r2.cellStoreKey(ctx_r2.tableColumnKey(chunk_r73.table.key, column_r78.key), \u0275$index_541_r81), row_r80[column_r78.key]), measure_r39, false, ctx_r2.cellStoreKey(ctx_r2.tableColumnKey(chunk_r73.table.key, column_r78.key), \u0275$index_541_r81), row_r80[column_r78.key]));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_For_11_For_2_Template, 2, 20, "td", 158, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_541_r81 = ctx.$index;
    const \u0275$count_541_r82 = ctx.$count;
    const chunk_r73 = \u0275\u0275nextContext(2).$implicit;
    const section_r37 = \u0275\u0275nextContext(3).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", ctx_r2.tableEdge(section_r37, chunk_r73.table.key));
    \u0275\u0275classProp("border-b", !(\u0275$index_541_r81 === \u0275$count_541_r82 - 1));
    \u0275\u0275advance();
    \u0275\u0275repeater(chunk_r73.table.columns);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148);
    \u0275\u0275listener("click", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r74);
      const chunk_r73 = \u0275\u0275nextContext().$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellActivate(section_r37, chunk_r73.table.key, "cell", $event));
    })("pointerdown", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_Template_div_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r74);
      const chunk_r73 = \u0275\u0275nextContext().$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellPointerDown(section_r37, chunk_r73.table.key, $event));
    })("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_Template_div_contextmenu_0_listener($event) {
      \u0275\u0275restoreView(_r74);
      const chunk_r73 = \u0275\u0275nextContext().$implicit;
      const section_r37 = \u0275\u0275nextContext(3).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCellContextMenu(section_r37, chunk_r73.table.key, $event));
    });
    \u0275\u0275elementStart(1, "div", 149);
    \u0275\u0275template(2, ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_Conditional_2_Template, 3, 5, "span", 150)(3, ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_Conditional_3_Template, 2, 9, "p", 151);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "table", 152)(5, "thead")(6, "tr");
    \u0275\u0275repeaterCreate(7, ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_For_8_Template, 3, 33, "th", 153, _forTrack2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_For_11_Template, 3, 4, "tr", 154, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const chunk_r73 = \u0275\u0275nextContext().$implicit;
    const section_r37 = \u0275\u0275nextContext(3).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r2.tableFill(section_r37, chunk_r73.table.key))("border", ctx_r2.cellHasBox(section_r37, chunk_r73.table.key) ? ctx_r2.cellBorder(section_r37, chunk_r73.table.key) : "1px solid " + ctx_r2.tableEdge(section_r37, chunk_r73.table.key))("border-radius", ctx_r2.cellRadius(section_r37, chunk_r73.table.key) || null, "px");
    \u0275\u0275classProp("ring-2", ctx_r2.isCellSelected(section_r37, chunk_r73.table.key))("ring-inset", ctx_r2.isCellSelected(section_r37, chunk_r73.table.key))("ring-indigo-400", ctx_r2.isCellSelected(section_r37, chunk_r73.table.key))("cursor-pointer", ctx_r2.clickable());
    \u0275\u0275attribute("data-cell-key", chunk_r73.table.key);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.tableShowsBadge(section_r37, chunk_r73.table.key) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(chunk_r73.table.key !== "__list" ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", ctx_r2.tableHeaderFill(section_r37, chunk_r73.table.key));
    \u0275\u0275advance();
    \u0275\u0275repeater(chunk_r73.table.columns);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(chunk_r73.table.rows);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_0_Template, 3, 0, "div", 169)(1, ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Conditional_1_Template, 12, 19, "div", 142);
  }
  if (rf & 2) {
    const chunk_r73 = ctx.$implicit;
    \u0275\u0275conditional(chunk_r73.kind === "fields" ? 0 : 1);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_For_1_Template, 2, 1, null, null, _forTrack3);
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.sheetChunks(section_r37));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275template(1, ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_1_Template, 2, 20, "h4", 165)(2, ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_2_Template, 2, 16, "p", 166)(3, ReportPreviewComponent_ng_template_8_Conditional_13_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext().section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "title"))("text-align", ctx_r2.roleTextAlign(section_r37, "title"));
    \u0275\u0275property("ngClass", ctx_r2.variantClasses(section_r37));
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.label ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.staticContent ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.sectionHasStructuredData(section_r37) ? 3 : -1);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h4", 118);
    \u0275\u0275listener("contextmenu", function ReportPreviewComponent_ng_template_8_Conditional_14_Conditional_1_Template_h4_contextmenu_0_listener($event) {
      \u0275\u0275restoreView(_r83);
      const section_r37 = \u0275\u0275nextContext(2).section;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTitleContextMenu(section_r37, $event));
    });
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r37 = \u0275\u0275nextContext(2);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275styleProp("font-size", ctx_r2.roleFontSize(section_r37, "title"), "px")("font-weight", ctx_r2.roleFontWeight(section_r37, "title"))("font-style", ctx_r2.roleFontStyle(section_r37, "title"))("text-decoration", ctx_r2.roleTextDecoration(section_r37, "title"))("color", ctx_r2.roleColor(section_r37, "title"));
    \u0275\u0275classProp("ring-2", ctx_r2.isTitleSelected(section_r37))("ring-inset", ctx_r2.isTitleSelected(section_r37))("ring-indigo-400", ctx_r2.isTitleSelected(section_r37))("rounded-sm", ctx_r2.isTitleSelected(section_r37));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "title", section_r37.label, measure_r39));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_14_Conditional_2_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 175);
    \u0275\u0275elementContainer(1, 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r37 = \u0275\u0275nextContext(4);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "itemTemplate", section_r37.itemTemplate || "", measure_r39, true, void 0, section_r37.itemTemplate || ""));
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_14_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173)(1, "div", 174);
    \u0275\u0275elementContainer(2, 67);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ReportPreviewComponent_ng_template_8_Conditional_14_Conditional_2_For_1_Conditional_5_Template, 2, 2, "p", 175);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r84 = ctx.$index;
    const ctx_r37 = \u0275\u0275nextContext(3);
    const section_r37 = ctx_r37.section;
    const measure_r39 = ctx_r37.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    const sheetText_r40 = \u0275\u0275reference(11);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", sheetText_r40)("ngTemplateOutletContext", ctx_r2.sheetTextContext(section_r37, "itemTitle", section_r37.itemTitle || \u0275\u0275pipeBind2(3, 3, "smartReport.sectionNumber", \u0275\u0275pureFunction1(9, _c15, $index_r84 + 1)), measure_r39, false, void 0, section_r37.itemTitle || \u0275\u0275pipeBind2(4, 6, "smartReport.sectionNumber", \u0275\u0275pureFunction1(11, _c15, $index_r84 + 1))));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(section_r37.itemTemplate || ctx_r2.canInlineEdit(measure_r39) ? 5 : -1);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ReportPreviewComponent_ng_template_8_Conditional_14_Conditional_2_For_1_Template, 6, 13, "div", 173, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(2, "p", 86);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.fullContent() ? ctx_r2.structuralRecords(section_r37) : ctx_r2.structuralRecords(section_r37).slice(0, 2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "smartReport.structuralRows", \u0275\u0275pureFunction1(4, _c14, ctx_r2.structuralRecords(section_r37).length)), " ");
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "smartReport.noDataAtPath", \u0275\u0275pureFunction1(4, _c9, section_r37.dataPath || "\u2014")), " ");
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275template(1, ReportPreviewComponent_ng_template_8_Conditional_14_Conditional_1_Template, 2, 20, "h4", 115)(2, ReportPreviewComponent_ng_template_8_Conditional_14_Conditional_2_Template, 5, 6)(3, ReportPreviewComponent_ng_template_8_Conditional_14_Conditional_3_Template, 3, 6, "div", 135);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext().section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("font-family", ctx_r2.roleFontFamily(section_r37, "title"))("text-align", ctx_r2.roleTextAlign(section_r37, "title"));
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.label ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.structuralRecords(section_r37).length > 0 ? 2 : 3);
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext(2).section;
    \u0275\u0275textInterpolate1(" ", section_r37.blockIds.join(", "), " ");
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartReport.allBlocks"), " ");
  }
}
function ReportPreviewComponent_ng_template_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "mat-icon", 176);
    \u0275\u0275text(2, "dashboard_customize");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 177);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 178);
    \u0275\u0275template(7, ReportPreviewComponent_ng_template_8_Conditional_15_Conditional_7_Template, 1, 1)(8, ReportPreviewComponent_ng_template_8_Conditional_15_Conditional_8_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r37 = \u0275\u0275nextContext().section;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "smartReport.sectionReportBlocks"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((section_r37.blockIds == null ? null : section_r37.blockIds.length) ? 7 : 8);
  }
}
function ReportPreviewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportPreviewComponent_ng_template_8_Conditional_0_Template, 4, 36, "div", 98)(1, ReportPreviewComponent_ng_template_8_Conditional_1_Template, 4, 26, "div", 99)(2, ReportPreviewComponent_ng_template_8_Conditional_2_Template, 6, 47, "div", 100)(3, ReportPreviewComponent_ng_template_8_Conditional_3_Template, 7, 6, "div", 101)(4, ReportPreviewComponent_ng_template_8_Conditional_4_Template, 5, 9, "div", 102)(5, ReportPreviewComponent_ng_template_8_Conditional_5_Template, 1, 6, "hr", 103)(6, ReportPreviewComponent_ng_template_8_Conditional_6_Template, 1, 3, "div", 104)(7, ReportPreviewComponent_ng_template_8_Conditional_7_Template, 2, 2, "div", 105)(8, ReportPreviewComponent_ng_template_8_Conditional_8_Template, 8, 4, "div", 106)(9, ReportPreviewComponent_ng_template_8_Conditional_9_Template, 1, 2, "div", 17)(10, ReportPreviewComponent_ng_template_8_Conditional_10_Template, 4, 6, "div", 101)(11, ReportPreviewComponent_ng_template_8_Conditional_11_Template, 4, 6, "div", 101)(12, ReportPreviewComponent_ng_template_8_Conditional_12_Template, 4, 18, "div", 107)(13, ReportPreviewComponent_ng_template_8_Conditional_13_Template, 4, 8, "div", 108)(14, ReportPreviewComponent_ng_template_8_Conditional_14_Template, 4, 6, "div", 101)(15, ReportPreviewComponent_ng_template_8_Conditional_15_Template, 9, 4, "div", 109);
  }
  if (rf & 2) {
    const section_r37 = ctx.section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(section_r37.type === "header" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "text" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "field" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "table" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "image" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "divider" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "shape" && ctx_r2.shapeKind(section_r37) === "icon" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "shape" && ctx_r2.shapeKind(section_r37) === "line" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "shape" && ctx_r2.shapeKind(section_r37) !== "icon" && ctx_r2.shapeKind(section_r37) !== "line" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "spacer" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "dataTable" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "keyValueGrid" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "badge" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "card" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "repeater" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(section_r37.type === "reportBlocks" ? 15 : -1);
  }
}
function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 181);
    \u0275\u0275listener("input", function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_0_Template_textarea_input_0_listener($event) {
      \u0275\u0275restoreView(_r85);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onInlineDraftInput($event));
    })("blur", function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_0_Template_textarea_blur_0_listener() {
      \u0275\u0275restoreView(_r85);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.commitInlineEdit());
    })("keydown", function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_0_Template_textarea_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r85);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onInlineKeydown($event, true));
    })("click", function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_0_Template_textarea_click_0_listener($event) {
      \u0275\u0275restoreView(_r85);
      return \u0275\u0275resetView($event.stopPropagation());
    })("pointerdown", function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_0_Template_textarea_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r85);
      return \u0275\u0275resetView($event.stopPropagation());
    })("dblclick", function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_0_Template_textarea_dblclick_0_listener($event) {
      \u0275\u0275restoreView(_r85);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r86 = \u0275\u0275nextContext(2).section;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("max-width", ctx_r2.hugsText(section_r86) ? ctx_r2.textHugMaxCss(section_r86) : null, "px");
    \u0275\u0275classProp("block", !ctx_r2.hugsText(section_r86))("w-full", !ctx_r2.hugsText(section_r86))("hug-field", ctx_r2.hugsText(section_r86));
    \u0275\u0275property("value", ctx_r2.inlineDraft());
  }
}
function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 182);
    \u0275\u0275listener("input", function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_1_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onInlineDraftInput($event));
    })("blur", function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_1_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r87);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.commitInlineEdit());
    })("keydown", function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_1_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r87);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onInlineKeydown($event, false));
    })("click", function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_1_Template_input_click_0_listener($event) {
      \u0275\u0275restoreView(_r87);
      return \u0275\u0275resetView($event.stopPropagation());
    })("pointerdown", function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_1_Template_input_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r87);
      return \u0275\u0275resetView($event.stopPropagation());
    })("dblclick", function ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_1_Template_input_dblclick_0_listener($event) {
      \u0275\u0275restoreView(_r87);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r2.inlineDraft());
  }
}
function ReportPreviewComponent_ng_template_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_0_Template, 1, 9, "textarea", 179)(1, ReportPreviewComponent_ng_template_10_Conditional_0_Conditional_1_Template, 1, 1, "input", 180);
  }
  if (rf & 2) {
    const ctx_r87 = \u0275\u0275nextContext();
    const kind_r89 = ctx_r87.kind;
    const multiline_r90 = ctx_r87.multiline;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(multiline_r90 || ctx_r2.isCanvasText(kind_r89) ? 0 : 1);
  }
}
function ReportPreviewComponent_ng_template_10_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 185);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_ng_template_10_Conditional_1_Conditional_1_Template_span_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r91);
      const kind_r89 = \u0275\u0275nextContext(2).kind;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSheetTextPointerDown(kind_r89, $event));
    })("click", function ReportPreviewComponent_ng_template_10_Conditional_1_Conditional_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r91);
      const ctx_r87 = \u0275\u0275nextContext(2);
      const section_r86 = ctx_r87.section;
      const kind_r89 = ctx_r87.kind;
      const key_r92 = ctx_r87.key;
      const fallback_r93 = ctx_r87.fallback;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSheetTextClick(section_r86, kind_r89, $event, key_r92, fallback_r93));
    })("dblclick", function ReportPreviewComponent_ng_template_10_Conditional_1_Conditional_1_Template_span_dblclick_0_listener($event) {
      \u0275\u0275restoreView(_r91);
      const ctx_r87 = \u0275\u0275nextContext(2);
      const section_r86 = ctx_r87.section;
      const kind_r89 = ctx_r87.kind;
      const key_r92 = ctx_r87.key;
      const fallback_r93 = ctx_r87.fallback;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSheetTextDoubleClick(section_r86, kind_r89, $event, key_r92, fallback_r93));
    });
    \u0275\u0275element(1, "span", 186);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const rule_r94 = \u0275\u0275readContextLet(0);
    const ctx_r87 = \u0275\u0275nextContext();
    const section_r86 = ctx_r87.section;
    const kind_r89 = ctx_r87.kind;
    const key_r92 = ctx_r87.key;
    const fallback_r93 = ctx_r87.fallback;
    const measure_r95 = ctx_r87.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", rule_r94.color || null)("background-color", rule_r94.backgroundColor || null)("font-weight", rule_r94.bold ? 700 : null)("padding", rule_r94.backgroundColor ? "0.05em 0.5em" : null)("border-radius", rule_r94.backgroundColor ? "999px" : null);
    \u0275\u0275classProp("cursor-text", ctx_r2.canInlineEdit(measure_r95) && kind_r89 !== "cellValue" && !ctx_r2.isCanvasText(kind_r89));
    \u0275\u0275attribute("data-text-kind", kind_r89);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.ruleBadge(rule_r94), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rule_r94.text || ctx_r2.sheetDisplayText(section_r86, kind_r89, key_r92, fallback_r93) || "\xA0");
  }
}
function ReportPreviewComponent_ng_template_10_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 187);
    \u0275\u0275listener("pointerdown", function ReportPreviewComponent_ng_template_10_Conditional_1_Conditional_2_Template_span_pointerdown_0_listener($event) {
      \u0275\u0275restoreView(_r96);
      const kind_r89 = \u0275\u0275nextContext(2).kind;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSheetTextPointerDown(kind_r89, $event));
    })("click", function ReportPreviewComponent_ng_template_10_Conditional_1_Conditional_2_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r96);
      const ctx_r87 = \u0275\u0275nextContext(2);
      const section_r86 = ctx_r87.section;
      const kind_r89 = ctx_r87.kind;
      const key_r92 = ctx_r87.key;
      const fallback_r93 = ctx_r87.fallback;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSheetTextClick(section_r86, kind_r89, $event, key_r92, fallback_r93));
    })("dblclick", function ReportPreviewComponent_ng_template_10_Conditional_1_Conditional_2_Template_span_dblclick_0_listener($event) {
      \u0275\u0275restoreView(_r96);
      const ctx_r87 = \u0275\u0275nextContext(2);
      const section_r86 = ctx_r87.section;
      const kind_r89 = ctx_r87.kind;
      const key_r92 = ctx_r87.key;
      const fallback_r93 = ctx_r87.fallback;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSheetTextDoubleClick(section_r86, kind_r89, $event, key_r92, fallback_r93));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r87 = \u0275\u0275nextContext(2);
    const section_r86 = ctx_r87.section;
    const kind_r89 = ctx_r87.kind;
    const key_r92 = ctx_r87.key;
    const fallback_r93 = ctx_r87.fallback;
    const measure_r95 = ctx_r87.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("cursor-text", ctx_r2.canInlineEdit(measure_r95) && kind_r89 !== "cellValue" && !ctx_r2.isCanvasText(kind_r89));
    \u0275\u0275attribute("data-text-kind", kind_r89);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.sheetDisplayText(section_r86, kind_r89, key_r92, fallback_r93) || "\xA0");
  }
}
function ReportPreviewComponent_ng_template_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275template(1, ReportPreviewComponent_ng_template_10_Conditional_1_Conditional_1_Template, 3, 15, "span", 183)(2, ReportPreviewComponent_ng_template_10_Conditional_1_Conditional_2_Template, 2, 4, "span", 184);
  }
  if (rf & 2) {
    const ctx_r87 = \u0275\u0275nextContext();
    const section_r86 = ctx_r87.section;
    const kind_r89 = ctx_r87.kind;
    const key_r92 = ctx_r87.key;
    const fallback_r93 = ctx_r87.fallback;
    const rule_r97 = \u0275\u0275storeLet(\u0275\u0275nextContext().cellRule(section_r86, kind_r89, key_r92, fallback_r93));
    \u0275\u0275advance();
    \u0275\u0275conditional(rule_r97 ? 1 : 2);
  }
}
function ReportPreviewComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportPreviewComponent_ng_template_10_Conditional_0_Template, 2, 1)(1, ReportPreviewComponent_ng_template_10_Conditional_1_Template, 3, 2);
  }
  if (rf & 2) {
    const section_r86 = ctx.section;
    const kind_r89 = ctx.kind;
    const key_r92 = ctx.key;
    const measure_r95 = ctx.measure;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.canInlineEdit(measure_r95) && ctx_r2.isEditingText(section_r86.id, kind_r89, key_r92) ? 0 : 1);
  }
}
function isReportPageAnchor(section) {
  return section.type === "spacer" && section.id.startsWith("hoja-");
}
function resizeCursor(handle) {
  if (handle === "n" || handle === "s")
    return "ns-resize";
  if (handle === "e" || handle === "w")
    return "ew-resize";
  return handle === "ne" || handle === "sw" ? "nesw-resize" : "nwse-resize";
}
var MM_TO_PX = 3.7795275591;
var SECTION_GAP_PX = 12;
var PAGE_INSET_PX = 32;
var REPORT_PAGE_SIZE_MM = {
  A4: { width: 210, height: 297 },
  Letter: { width: 215.9, height: 279.4 },
  Legal: { width: 215.9, height: 355.6 }
};
function resolvePageSizeName(value) {
  return value === "Letter" || value === "Legal" ? value : "A4";
}
function reportPaperSizeMm(pageSize, orientation = "portrait") {
  const base = REPORT_PAGE_SIZE_MM[resolvePageSizeName(pageSize)];
  return orientation === "landscape" ? { width: base.height, height: base.width } : { width: base.width, height: base.height };
}
function reportPaperSizePx(pageSize, orientation = "portrait") {
  const mm = reportPaperSizeMm(pageSize, orientation);
  return { width: mm.width * MM_TO_PX, height: mm.height * MM_TO_PX };
}
var ReportPreviewComponent = class _ReportPreviewComponent {
  _setSheetDragging(active) {
    if (this._sheetDragging === active)
      return;
    this._sheetDragging = active;
    this.sheetGrabbing.set(active);
    if (active) {
      this._lockedViewScale = this._readViewScale();
      this._lockedPointerScale = this._readPointerScale();
      this._pageInnerCache.clear();
      this._pageRectCache = null;
      this._alignCache = null;
    } else {
      this._lockedViewScale = null;
      this._lockedPointerScale = null;
      this._pageInnerCache.clear();
      this._pageRectCache = null;
      this._alignCache = null;
    }
    this.sheetDragChange.emit(active);
  }
  /**
   * Rotate handle sits fully above the element so it never covers it; when
   * the element is near the sheet top (which clips) it keeps the closer spot.
   */
  rotateHandleTop(elementTop) {
    return typeof elementTop === "number" && elementTop >= 42 ? -40 : -12;
  }
  /** Move badge goes outside the block corner when the sheet has room for it. */
  moveBadgeOffset(edge) {
    return typeof edge === "number" && edge >= 30 ? -28 : -10;
  }
  constructor() {
    this._domSanitizer = inject(DomSanitizer);
    this._iconMarkupCache = /* @__PURE__ */ new Map();
    this.template = input.required();
    this.previewData = input.required();
    this.primaryColor = input("#4F46E5");
    this.pageBackgroundColor = input("#ffffff");
    this.orientation = input("portrait");
    this.pageSize = input(null);
    this.viewZoom = input(1);
    this.clickable = input(false);
    this.selectedSectionId = input(null);
    this.selectedSectionIds = input([]);
    this.selectedCellKey = input(null);
    this.selectedCellPart = input(null);
    this.selectedOverlay = input(null);
    this.sectionClick = input(null);
    this.customContextMenu = input(false);
    this.reorderable = input(false);
    this.printCapture = input(false);
    this.logoUrl = input(null);
    this.legend = input("");
    this.legendPosition = input("left");
    this.termsAndConditions = input("");
    this.termsPosition = input("left");
    this.showPageNumbers = input(false);
    this.pageNumberPosition = input("bottom-center");
    this.watermarkEnabled = input(false);
    this.watermarkType = input("text");
    this.watermarkLogoUrl = input(void 0);
    this.watermarkStampSrc = computed(() => {
      const dedicated = this.watermarkLogoUrl();
      if (dedicated !== void 0)
        return dedicated || null;
      return this.logoUrl();
    });
    this.watermarkText = input("CONFIDENTIAL");
    this.watermarkOpacity = input(0.08);
    this.watermarkPattern = input("single");
    this.watermarkX = input(250);
    this.watermarkY = input(420);
    this.watermarkWidth = input(280);
    this.watermarkHeight = input(160);
    this.watermarkRotation = input(-15);
    this.signatureEnabled = input(false);
    this.signatureImage = input(null);
    this.signatureX = input(0);
    this.signatureY = input(0);
    this.signatureWidth = input(100);
    this.signatureHeight = input(50);
    this.signaturePage = input(0);
    this.logoEnabled = input(false);
    this.logoX = input(32);
    this.logoY = input(32);
    this.logoWidth = input(160);
    this.logoHeight = input(60);
    this.logoRotation = input(0);
    this.logoAutoFitContent = input(false);
    this.sheetImages = input([]);
    this.layerZ = input({});
    this.hiddenLayerIds = input([]);
    this.lockedLayerIds = input([]);
    this.peekedLayerId = input(null);
    this.marqueeMode = input(false);
    this.selectedOverlayIds = input([]);
    this.bodyTopPadding = input(0);
    this.thumbnailMode = input(false);
    this.fullContent = input(false);
    this.signaturePositionChange = new EventEmitter();
    this.signatureSizeChange = new EventEmitter();
    this.logoPositionChange = new EventEmitter();
    this.logoSizeChange = new EventEmitter();
    this.logoRotationChange = new EventEmitter();
    this.watermarkPositionChange = new EventEmitter();
    this.watermarkSizeChange = new EventEmitter();
    this.watermarkRotationChange = new EventEmitter();
    this.headerLogoAlignChange = new EventEmitter();
    this.headerLogoSizeChange = new EventEmitter();
    this.sheetImageChange = new EventEmitter();
    this.overlaySelect = new EventEmitter();
    this.lockedLayerLocate = new EventEmitter();
    this.backgroundClick = new EventEmitter();
    this.sectionContextMenu = new EventEmitter();
    this.overlayContextMenu = new EventEmitter();
    this.paperContextMenu = new EventEmitter();
    this.sectionReorder = new EventEmitter();
    this.sectionFramesChange = new EventEmitter();
    this.boxSelectionChange = new EventEmitter();
    this.groupOverlayMove = new EventEmitter();
    this.sectionFrameChange = new EventEmitter();
    this.sectionRotationChange = new EventEmitter();
    this.cellSelect = new EventEmitter();
    this.cellContextMenu = new EventEmitter();
    this.cellPlace = new EventEmitter();
    this.inlineTextChange = new EventEmitter();
    this.cellSizeChange = new EventEmitter();
    this.addPage = new EventEmitter();
    this.removePage = new EventEmitter();
    this.sheetDragChange = new EventEmitter();
    this.pages = signal([[]]);
    this.isResizing = false;
    this.isRotating = false;
    this.isMoving = false;
    this.resizeTarget = null;
    this.rotateTarget = null;
    this.moveTarget = null;
    this.startX = 0;
    this.startY = 0;
    this.startWidth = 0;
    this.startHeight = 0;
    this.startMoveX = 0;
    this.startMoveY = 0;
    this.rotateCenterX = 0;
    this.rotateCenterY = 0;
    this.startAngle = 0;
    this.startRotation = 0;
    this.pendingResize = null;
    this.pendingMove = null;
    this._overlayGrab = null;
    this.resizeFrameId = null;
    this.moveFrameId = null;
    this.gestureEl = null;
    this.gesturePointerId = null;
    this._measureScheduled = false;
    this._measureFrameId = null;
    this._autoPinFrameId = null;
    this._autoPinAttempts = 0;
    this._contentFitFrameId = null;
    this._host = inject(ElementRef);
    this._sectionDrag = null;
    this._sectionDragMoved = false;
    this._marquee = null;
    this._marqueeEl = null;
    this._groupShift = null;
    this._keepCellSelection = false;
    this._cellDrag = null;
    this._cellDragMoved = false;
    this._onWindowCellMove = (event) => {
      const drag = this._cellDrag;
      if (!drag || event.pointerId !== drag.pointerId)
        return;
      if (Math.hypot(event.clientX - drag.startClientX, event.clientY - drag.startClientY) < 8)
        return;
      this._cellDragMoved = true;
      this._setSheetDragging(true);
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    };
    this._onWindowCellUp = (event) => {
      const drag = this._cellDrag;
      if (!drag || event.pointerId !== drag.pointerId)
        return;
      window.removeEventListener("pointermove", this._onWindowCellMove);
      window.removeEventListener("pointerup", this._onWindowCellUp, true);
      window.removeEventListener("pointercancel", this._onWindowCellUp, true);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      this._cellDrag = null;
      this._setSheetDragging(false);
      if (!this._cellDragMoved)
        return;
      this.cellPlace.emit({
        section: drag.section,
        key: drag.key,
        clientX: event.clientX,
        clientY: event.clientY,
        extract: drag.extract
      });
      queueMicrotask(() => {
        this._cellDragMoved = false;
      });
    };
    this._pinnedIdsThisDrag = /* @__PURE__ */ new Set();
    this._sectionDragRaf = null;
    this._resizeRaf = null;
    this._rotateRaf = null;
    this._pendingDragPoint = null;
    this._pendingResizePoint = null;
    this._pendingRotatePoint = null;
    this._lockedViewScale = null;
    this._lockedPointerScale = null;
    this._pageInnerCache = /* @__PURE__ */ new Map();
    this._pageRectCache = null;
    this._alignCache = null;
    this.draggingSectionId = signal(null);
    this._groupDragIds = signal([]);
    this.alignmentGuides = signal([]);
    this._sheetDragging = false;
    this.sheetGrabbing = signal(false);
    this.marqueeRect = signal(null);
    this.freeLayout = computed(() => {
      if (Object.keys(this.liveFrames()).length > 0)
        return true;
      return (this.template().sections ?? []).some((section) => Boolean(section.frame));
    });
    this.liveRotations = signal({});
    this.blockResizeHandles = [
      { id: "ne", cls: "right-[-14px] top-[-14px] h-3.5 w-3.5 rounded-sm cursor-nesw-resize" },
      { id: "sw", cls: "bottom-[-14px] left-[-14px] h-3.5 w-3.5 rounded-sm cursor-nesw-resize" },
      { id: "se", cls: "bottom-[-14px] right-[-14px] h-3.5 w-3.5 rounded-sm cursor-nwse-resize" },
      { id: "n", cls: "left-1/2 top-[-12px] h-2.5 w-6 -translate-x-1/2 rounded-full cursor-ns-resize" },
      { id: "s", cls: "bottom-[-12px] left-1/2 h-2.5 w-6 -translate-x-1/2 rounded-full cursor-ns-resize" },
      { id: "e", cls: "right-[-12px] top-1/2 h-6 w-2.5 -translate-y-1/2 rounded-full cursor-ew-resize" },
      { id: "w", cls: "left-[-12px] top-1/2 h-6 w-2.5 -translate-y-1/2 rounded-full cursor-ew-resize" }
    ];
    this.liveCellSizes = signal({});
    this._cellResize = null;
    this._sectionResize = null;
    this._sectionRotate = null;
    this.editingText = signal(null);
    this.inlineDraft = signal("");
    this._suppressInlineBlur = false;
    this._inlineSeedValue = "";
    this._selectAllOnFocus = false;
    this.liveFrames = signal({});
    this._onLockedLayerPointerDown = (event) => {
      if (!this.clickable() || this.thumbnailMode() || this.printCapture() || event.button !== 0)
        return;
      const origin = event.target;
      if (origin?.closest("[data-section-handle], [data-overlay-handle], [data-cell-handle], [data-inline-edit], [data-move-badge]")) {
        return;
      }
      const id = this._topSheetLayerAt(event.clientX, event.clientY);
      if (!id || !this.isLayerLocked(id))
        return;
      event.preventDefault();
      event.stopPropagation();
      this.lockedLayerLocate.emit(id);
    };
    this._onMarqueePointerDownCapture = (event) => {
      this.onMarqueePointerDown(event);
    };
    this._onMarqueeMove = (event) => {
      const drag = this._marquee;
      if (!drag || event.pointerId !== drag.pointerId)
        return;
      const width = Math.abs(event.clientX - drag.startX);
      const height = Math.abs(event.clientY - drag.startY);
      if (!drag.active && width < 4 && height < 4)
        return;
      drag.active = true;
      event.preventDefault();
      this._paintMarquee({
        left: Math.min(drag.startX, event.clientX),
        top: Math.min(drag.startY, event.clientY),
        width,
        height
      });
    };
    this._onMarqueeUp = (event) => {
      const drag = this._marquee;
      if (!drag || event.pointerId !== drag.pointerId)
        return;
      window.removeEventListener("pointermove", this._onMarqueeMove);
      window.removeEventListener("pointerup", this._onMarqueeUp, true);
      window.removeEventListener("pointercancel", this._onMarqueeUp, true);
      try {
        this._host.nativeElement.releasePointerCapture(event.pointerId);
      } catch {
      }
      const rect = this.marqueeRect();
      this._marquee = null;
      this._removeMarqueeEl();
      if (!drag.active || !rect) {
        const at = document.elementFromPoint(drag.startX, drag.startY);
        const clicked = this._hitSelectable(at);
        if (!clicked) {
          if (!drag.additive)
            this.boxSelectionChange.emit({ sectionIds: [], overlayIds: [] });
          return;
        }
        this._emitBoxSelection(clicked.kind === "section" ? [clicked.id] : [], clicked.kind === "overlay" ? [clicked.id] : [], drag.additive);
        return;
      }
      this._finishMarquee(rect, drag.additive);
      this._swallowNextClick();
    };
    this._onHostPointerDownCapture = (event) => {
      if (!this.editingText())
        return;
      if (event.target?.closest("[data-inline-edit]"))
        return;
      this.commitInlineEdit();
    };
    this._onWindowSectionResizeMove = (event) => {
      const resize = this._sectionResize;
      if (!resize || event.pointerId !== resize.pointerId)
        return;
      event.preventDefault();
      this._pendingResizePoint = { x: event.clientX, y: event.clientY };
      if (this._resizeRaf !== null)
        return;
      this._resizeRaf = requestAnimationFrame(() => {
        this._resizeRaf = null;
        const point = this._pendingResizePoint;
        if (!point || !this._sectionResize)
          return;
        this._applySectionResize(point.x, point.y);
      });
    };
    this._onWindowSectionResizeUp = (event) => {
      const resize = this._sectionResize;
      if (!resize || event.pointerId !== resize.pointerId)
        return;
      this._pendingResizePoint = { x: event.clientX, y: event.clientY };
      this._flushSectionResizeRaf();
      this._applySectionResize(event.clientX, event.clientY);
      const frame = this.liveFrames()[resize.id];
      this._sectionResize = null;
      this._pendingResizePoint = null;
      window.removeEventListener("pointermove", this._onWindowSectionResizeMove);
      window.removeEventListener("pointerup", this._onWindowSectionResizeUp, true);
      window.removeEventListener("pointercancel", this._onWindowSectionResizeUp, true);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      const moved = Math.abs(event.clientX - resize.startClientX) > 2 || Math.abs(event.clientY - resize.startClientY) > 2;
      if (frame && moved)
        this.sectionFrameChange.emit({ id: resize.id, frame });
      this.liveFrames.set({});
      this._setSheetDragging(false);
      this._scheduleContentFit();
    };
    this._onWindowSectionRotateMove = (event) => {
      const rotate = this._sectionRotate;
      if (!rotate || event.pointerId !== rotate.pointerId)
        return;
      event.preventDefault();
      this._pendingRotatePoint = { x: event.clientX, y: event.clientY };
      if (this._rotateRaf !== null)
        return;
      this._rotateRaf = requestAnimationFrame(() => {
        this._rotateRaf = null;
        const point = this._pendingRotatePoint;
        if (!point || !this._sectionRotate)
          return;
        this._applySectionRotate(point.x, point.y);
      });
    };
    this._onWindowSectionRotateUp = (event) => {
      const rotate = this._sectionRotate;
      if (!rotate || event.pointerId !== rotate.pointerId)
        return;
      this._pendingRotatePoint = { x: event.clientX, y: event.clientY };
      this._flushSectionRotateRaf();
      this._applySectionRotate(event.clientX, event.clientY);
      const rotation = this.liveRotations()[rotate.id] ?? 0;
      this._sectionRotate = null;
      this._pendingRotatePoint = null;
      window.removeEventListener("pointermove", this._onWindowSectionRotateMove);
      window.removeEventListener("pointerup", this._onWindowSectionRotateUp, true);
      window.removeEventListener("pointercancel", this._onWindowSectionRotateUp, true);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      this.sectionRotationChange.emit({ id: rotate.id, rotation });
      this.liveRotations.set({});
      this._setSheetDragging(false);
    };
    this._onWindowSectionMove = (event) => {
      this.onSectionPointerMove(event);
    };
    this._onWindowSectionUp = (event) => {
      this.onSectionPointerUp(event);
    };
    this._headerDrag = null;
    this.headerLogoDragX = signal(null);
    this.headerLogoResize = signal(null);
    this._headerResize = null;
    this.onMove = (event) => {
      if (!this.isMoving)
        return;
      if ((this.moveTarget === "signature" || this._sheetImageId(this.moveTarget)) && this._overlayGrab) {
        this.pendingMove = this._pagedOverlayMoveAt(event.clientX, event.clientY);
      } else {
        const scales = this._pointerScaleFactors;
        this.pendingMove = {
          x: Math.max(0, Math.round(this.startMoveX + (event.clientX - this.startX) * scales.x)),
          y: Math.max(0, Math.round(this.startMoveY + (event.clientY - this.startY) * scales.y))
        };
      }
      if (this.moveFrameId !== null)
        return;
      this.moveFrameId = requestAnimationFrame(this._flushMove);
    };
    this._flushMove = () => {
      this.moveFrameId = null;
      const payload = this.pendingMove;
      if (!payload || !this.moveTarget)
        return;
      this.pendingMove = null;
      this._emitMove(payload);
    };
    this._movePage = 0;
    this.stopMove = () => {
      this.isMoving = false;
      if (this.moveFrameId !== null) {
        cancelAnimationFrame(this.moveFrameId);
        this.moveFrameId = null;
      }
      if (this.pendingMove) {
        const payload = this.pendingMove;
        this.pendingMove = null;
        this._emitMove(payload);
      }
      const shift = this._groupShift;
      this._groupShift = null;
      if (shift?.sections.length) {
        const live = this.liveFrames();
        const updates = shift.sections.map((mate) => {
          const frame = live[mate.id];
          return frame ? { id: mate.id, frame } : null;
        }).filter((item) => Boolean(item));
        if (updates.length)
          this.sectionFramesChange.emit(updates);
        this.liveFrames.set({});
      }
      this.moveTarget = null;
      this._overlayGrab = null;
      this.alignmentGuides.set([]);
      this._setSheetDragging(false);
      this._releasePointer(this.onMove, this.stopMove);
    };
    this.onResize = (event) => {
      if (!this.isResizing)
        return;
      const dx = event.clientX - this.startX;
      const dy = event.clientY - this.startY;
      const scales = this._pointerScaleFactors;
      this.pendingResize = {
        width: Math.max(24, Math.round(this.startWidth + dx * scales.x)),
        height: Math.max(16, Math.round(this.startHeight + dy * scales.y))
      };
      if (this.resizeFrameId !== null)
        return;
      this.resizeFrameId = requestAnimationFrame(this._flushResize);
    };
    this._flushResize = () => {
      this.resizeFrameId = null;
      const payload = this.pendingResize;
      if (!payload)
        return;
      this.pendingResize = null;
      this._emitResize(payload);
    };
    this.stopResize = () => {
      this.isResizing = false;
      if (this.resizeFrameId !== null) {
        cancelAnimationFrame(this.resizeFrameId);
        this.resizeFrameId = null;
      }
      if (this.pendingResize) {
        const payload = this.pendingResize;
        this.pendingResize = null;
        this._emitResize(payload);
      }
      this.resizeTarget = null;
      this._setSheetDragging(false);
      this._releasePointer(this.onResize, this.stopResize);
    };
    this.onRotate = (event) => {
      if (!this.isRotating)
        return;
      const angle = Math.atan2(event.clientY - this.rotateCenterY, event.clientX - this.rotateCenterX);
      const next = Math.round(this.startRotation + (angle - this.startAngle) * 180 / Math.PI);
      const extra = this._sheetImage(this._sheetImageId(this.rotateTarget));
      if (this.rotateTarget === "logo") {
        this.logoRotationChange.emit(next);
      } else if (extra) {
        this.sheetImageChange.emit(__spreadProps(__spreadValues({}, extra), { rotation: next }));
      } else {
        this.watermarkRotationChange.emit(next);
      }
    };
    this.stopRotate = () => {
      this.isRotating = false;
      this.rotateTarget = null;
      this._setSheetDragging(false);
      this._releasePointer(this.onRotate, this.stopRotate);
    };
    this._onWindowCellResizeMove = (event) => {
      const resize = this._cellResize;
      if (!resize || event.pointerId !== resize.pointerId)
        return;
      event.preventDefault();
      const id = `${resize.sectionId}|${resize.key}`;
      const section = (this.template().sections ?? []).find((item) => item.id === resize.sectionId);
      const base = section ? this._cellSize(section, resize.key) : {};
      const size = __spreadValues(__spreadValues({}, base), this._cellResizeSize(event.clientX, event.clientY));
      this.liveCellSizes.update((current) => __spreadProps(__spreadValues({}, current), { [id]: size }));
    };
    this._onWindowCellResizeUp = (event) => {
      const resize = this._cellResize;
      if (!resize || event.pointerId !== resize.pointerId)
        return;
      const size = this._cellResizeSize(event.clientX, event.clientY);
      this._cellResize = null;
      window.removeEventListener("pointermove", this._onWindowCellResizeMove);
      window.removeEventListener("pointerup", this._onWindowCellResizeUp, true);
      window.removeEventListener("pointercancel", this._onWindowCellResizeUp, true);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      const moved = Math.abs(event.clientX - resize.startClientX) > 2 || Math.abs(event.clientY - resize.startClientY) > 2;
      if (moved)
        this.cellSizeChange.emit(__spreadValues({ sectionId: resize.sectionId, key: resize.key }, size));
      this.liveCellSizes.set({});
      this._setSheetDragging(false);
      this._scheduleContentFit();
    };
    effect(() => registerReportFonts(this.template()?.customFonts));
    effect(() => {
      const editing = this.editingText();
      if (!editing || !this.lockedLayerIds().includes(`sec:${editing.sectionId}`))
        return;
      untracked(() => this.editingText.set(null));
    });
    effect(() => {
      this.template().sections;
      this.previewData();
      this.legend();
      this.legendPosition();
      this.termsAndConditions();
      this.termsPosition();
      this.orientation();
      this.bodyTopPadding();
      this.logoEnabled();
      this.logoY();
      this.logoHeight();
      this.logoAutoFitContent();
      this.showPageNumbers();
      this.pageNumberPosition();
      untracked(() => this._seedPagesIfNeeded());
      this._scheduleMeasurement();
    });
  }
  ngAfterViewInit() {
    this._measureSections.changes.subscribe(() => this._scheduleMeasurement());
    this._reportPages.changes.subscribe(() => this._scheduleMeasurement());
    this._scheduleMeasurement();
    this._host.nativeElement.addEventListener("pointerdown", this._onLockedLayerPointerDown, true);
    this._host.nativeElement.addEventListener("pointerdown", this._onMarqueePointerDownCapture, true);
  }
  /** First paper card; used as the canonical scale + drag/resize anchor. */
  get reportPage() {
    return this._reportPages?.first;
  }
  /**
   * Keep `pages` in sync with the latest section references. Pagination
   * groups blocks by sheet, so the flat page order is not the template
   * order. Comparing those lists by index used to collapse every sheet
   * back onto page 1 and jump the viewport there.
   */
  _seedPagesIfNeeded() {
    const sections = this.template().sections || [];
    const current = this.pages();
    const flatCurrent = current.flat();
    const incomingIds = new Set(sections.map((section) => section.id));
    const sameSet = flatCurrent.length === sections.length && flatCurrent.every((section) => incomingIds.has(section.id));
    if (!sameSet) {
      const next = sections.length > 0 ? [sections.slice()] : [[]];
      this._replacePages(this._usesPinnedFrames() ? this._pagesFromFrames(sections) : next);
      return;
    }
    const byId = new Map(sections.map((section) => [section.id, section]));
    let referencesChanged = false;
    const refreshed = current.map((page) => page.map((section) => {
      const fresh = byId.get(section.id);
      if (fresh && fresh !== section)
        referencesChanged = true;
      return fresh ?? section;
    }));
    if (referencesChanged)
      this._replacePages(refreshed);
  }
  _scheduleMeasurement() {
    if (this._measureScheduled)
      return;
    this._measureScheduled = true;
    if (this._measureFrameId !== null)
      cancelAnimationFrame(this._measureFrameId);
    this._measureFrameId = requestAnimationFrame(() => {
      this._measureScheduled = false;
      this._measureFrameId = null;
      this._performMeasurement();
    });
  }
  _performMeasurement() {
    const sections = this.template().sections || [];
    if (sections.length === 0) {
      this._setPagesIfDifferent([[]]);
      return;
    }
    if (this.hasFreeLayout()) {
      this._setPagesIfDifferent(this._pagesFromFrames(sections));
      this._scheduleAutoPinMissingFrames();
      this._scheduleContentFit();
      return;
    }
    if (this.thumbnailMode()) {
      this._setPagesIfDifferent([sections.slice()]);
      return;
    }
    const els = this._measureSections?.toArray() || [];
    if (els.length !== sections.length) {
      this._scheduleMeasurement();
      return;
    }
    if (this._hasBottomChrome() && !this._measureLegend?.nativeElement) {
      this._scheduleMeasurement();
      return;
    }
    const heights = /* @__PURE__ */ new Map();
    for (const ref of els) {
      const el = ref.nativeElement;
      const id = el.dataset["sectionId"];
      if (!id)
        continue;
      heights.set(id, el.getBoundingClientRect().height);
    }
    const pageHeightDom = this.pageHeightPx();
    const innerPaddingTopBottom = this._getInnerPaddingTopBottom();
    const legendHeight = this._getLegendHeight();
    const topChromeHeight = this._getTopChromeHeight();
    const firstPageExtraTop = this.viewContentPaddingTop;
    const baseAvailable = Math.max(0, pageHeightDom - innerPaddingTopBottom - legendHeight - topChromeHeight);
    const firstPageAvailable = Math.max(0, baseAvailable - firstPageExtraTop);
    const newPages = [[]];
    let acc = 0;
    let isFirstPage = true;
    for (const section of sections) {
      const h = (heights.get(section.id) || 0) + SECTION_GAP_PX;
      const available = isFirstPage ? firstPageAvailable : baseAvailable;
      const currentBucket = newPages[newPages.length - 1];
      if (currentBucket.length > 0 && acc + h > available) {
        newPages.push([]);
        acc = 0;
        isFirstPage = false;
      }
      newPages[newPages.length - 1].push(section);
      acc += h;
    }
    this._setPagesIfDifferent(newPages);
    this._scheduleAutoPinMissingFrames();
  }
  _setPagesIfDifferent(newPages) {
    const current = this.pages();
    const same = newPages.length === current.length && newPages.every((p, i) => p.length === current[i]?.length && p.every((s, j) => s.id === current[i][j].id && s === current[i][j]));
    if (same)
      return;
    this._replacePages(newPages);
  }
  /** Swap the sheet list without sending the viewport back to page 1. */
  _replacePages(next) {
    const host = this._dragViewport();
    const top = host?.scrollTop ?? 0;
    this.pages.set(next);
    if (!host)
      return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (host.isConnected)
          host.scrollTop = top;
      });
    });
  }
  hasBottomChrome() {
    return Boolean(this.legend()) || Boolean(this.termsAndConditions()) || this.showPageNumbers() && this.pageNumberPosition().startsWith("bottom");
  }
  footerAlign(position) {
    if (position.includes("right") || position === "right")
      return "right";
    if (position.includes("center") || position === "center")
      return "center";
    return "left";
  }
  _hasBottomChrome() {
    return this.hasBottomChrome();
  }
  _getLegendHeight() {
    if (!this._hasBottomChrome())
      return 0;
    const el = this._measureLegend?.nativeElement;
    if (!el)
      return 0;
    return el.getBoundingClientRect().height;
  }
  _getTopChromeHeight() {
    if (!(this.showPageNumbers() && this.pageNumberPosition().startsWith("top")))
      return 0;
    const el = this.reportPage?.nativeElement.querySelector("[data-report-top-chrome]");
    return el?.getBoundingClientRect().height || 28;
  }
  _getInnerPaddingTopBottom() {
    const inner = this.reportPage?.nativeElement.querySelector("[data-report-page-inner]");
    if (!inner)
      return 96;
    const style = getComputedStyle(inner);
    return (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0);
  }
  /** Canonical px per layout px. Ignores visual zoom so boxes keep their ratio. */
  get _scaleFactors() {
    return this._lockedViewScale ?? this._readViewScale();
  }
  /** Canonical px per screen px. Use this for pointer drag / drop. */
  get _pointerScaleFactors() {
    return this._lockedPointerScale ?? this._readPointerScale();
  }
  _readViewScale() {
    const el = this.reportPage?.nativeElement;
    if (!el)
      return { x: 1, y: 1 };
    const currentWidth = el.offsetWidth;
    const currentHeight = el.offsetHeight;
    if (!currentWidth || !currentHeight)
      return { x: 1, y: 1 };
    return {
      x: this.pageWidthPx() / currentWidth,
      y: this.pageHeightPx() / currentHeight
    };
  }
  _readPointerScale() {
    const el = this.reportPage?.nativeElement;
    if (!el)
      return { x: 1, y: 1 };
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height)
      return { x: 1, y: 1 };
    return {
      x: this.pageWidthPx() / rect.width,
      y: this.pageHeightPx() / rect.height
    };
  }
  // Transforming Input (Canonical) -> View (Screen)
  get viewSignatureX() {
    return this.signatureX() / this._scaleFactors.x;
  }
  get viewSignatureY() {
    return this.signatureY() / this._scaleFactors.y;
  }
  // Width/Height might need scaling too if they are stored in Canonical px
  get viewSignatureWidth() {
    return this.signatureWidth() / this._scaleFactors.x;
  }
  get viewSignatureHeight() {
    return this.signatureHeight() / this._scaleFactors.y;
  }
  get viewLogoX() {
    return this.logoX() / this._scaleFactors.x;
  }
  get viewLogoY() {
    return this.logoY() / this._scaleFactors.y;
  }
  get viewLogoWidth() {
    return this.logoWidth() / this._scaleFactors.x;
  }
  get viewLogoHeight() {
    return this.logoHeight() / this._scaleFactors.y;
  }
  /** Company logos packed into the header or the footer. A drag stays inside that band. */
  headerLogoViews() {
    const scale = this._scaleFactors;
    const drag = this.headerLogoDragX();
    return placeCompanyLogos(this._headerLogosForView(), this.pageWidthPx(), this.pageHeightPx()).map((logo) => {
      const x = drag?.id === logo.id ? drag.x : logo.x;
      return __spreadProps(__spreadValues({}, logo), {
        x,
        viewX: x / scale.x,
        viewY: logo.y / scale.y,
        viewWidth: logo.width / scale.x,
        viewHeight: logo.height / scale.y
      });
    });
  }
  headerBandTopView() {
    return HEADER_LOGO_BAND_TOP / this._scaleFactors.y;
  }
  headerBandHeightView() {
    return headerLogoBandHeight(this._logosInBand("header")) / this._scaleFactors.y;
  }
  footerBandHeightView() {
    return headerLogoBandHeight(this._logosInBand("footer")) / this._scaleFactors.y;
  }
  footerBandTopView() {
    const band = headerLogoBandHeight(this._logosInBand("footer"));
    return (this.pageHeightPx() - HEADER_LOGO_BAND_TOP - band) / this._scaleFactors.y;
  }
  hasHeaderLogos() {
    return this._logosInBand("header").length > 0;
  }
  hasFooterLogos() {
    return this._logosInBand("footer").length > 0;
  }
  headerLogoBorder(id) {
    return this._overlayOutline(this.headerOverlayId(id), "2px dashed rgba(99, 102, 241, 0.85)");
  }
  headerOverlayId(id) {
    return `hdr:${id}`;
  }
  _headerLogosForView() {
    const resize = this.headerLogoResize();
    const drag = this.headerLogoDragX();
    return (this.template()?.headerLogos ?? []).map((logo) => {
      let next = logo;
      if (resize?.id === logo.id)
        next = __spreadProps(__spreadValues({}, next), { width: resize.width, height: resize.height });
      if (drag?.id === logo.id)
        next = __spreadProps(__spreadValues({}, next), { band: drag.band });
      return next;
    });
  }
  _logosInBand(band) {
    return this._headerLogosForView().filter((logo) => companyLogoBand(logo) === band);
  }
  get viewWatermarkX() {
    return this.watermarkX() / this._scaleFactors.x;
  }
  get viewWatermarkY() {
    return this.watermarkY() / this._scaleFactors.y;
  }
  get viewWatermarkWidth() {
    return this.watermarkWidth() / this._scaleFactors.x;
  }
  get viewWatermarkHeight() {
    return this.watermarkHeight() / this._scaleFactors.y;
  }
  sheetOverlayId(id) {
    return `img:${id}`;
  }
  sheetImagesForPage(pageIndex) {
    return this.sheetImages().filter((image) => (image.page ?? 0) === pageIndex);
  }
  sheetImageView(image) {
    const scales = this._scaleFactors;
    return {
      x: image.x / scales.x,
      y: image.y / scales.y,
      width: image.width / scales.x,
      height: image.height / scales.y
    };
  }
  sheetImageBorder(id) {
    return this._overlayOutline(this.sheetOverlayId(id), "2px dashed rgba(99, 102, 241, 0.85)");
  }
  _sheetImageId(target) {
    return target?.startsWith("img:") ? target.slice(4) : null;
  }
  _sheetImage(id) {
    if (!id)
      return null;
    return this.sheetImages().find((image) => image.id === id) ?? null;
  }
  /** Largest size that still fits the stamp box, so widening the box enlarges the text. */
  get viewWatermarkFontSize() {
    const height = Math.max(1, this.viewWatermarkHeight);
    const width = Math.max(1, this.viewWatermarkWidth);
    const text = (this.watermarkText() || "").replace(/\s+/g, " ").trim();
    const heightCap = height * 0.86;
    if (!text)
      return Math.max(12, Math.min(height * 0.32, heightCap));
    const fromWidth = width * 0.94 / (text.length * 0.68);
    return Math.max(12, Math.min(fromWidth, heightCap));
  }
  get logoRotateStyle() {
    return `rotate(${this.logoRotation()}deg)`;
  }
  get watermarkRotateStyle() {
    return `rotate(${this.watermarkRotation()}deg)`;
  }
  /** Keeps the stamp readable on any block color. The slider still lightens or darkens it. */
  watermarkPaintOpacity() {
    const value = Number(this.watermarkOpacity());
    const opacity = Number.isFinite(value) ? value : 0.08;
    return Math.min(0.4, Math.max(0.04, opacity));
  }
  get logoOverlayBorder() {
    return this._overlayOutline("logo", "2px dashed rgba(99, 102, 241, 0.85)");
  }
  get watermarkOverlayBorder() {
    return this._overlayOutline("watermark", "2px dashed rgba(217, 119, 6, 0.9)");
  }
  get signatureOverlayBorder() {
    return this._overlayOutline("signature", "2px dashed rgba(99, 102, 241, 0.85)");
  }
  _overlayOutline(id, outline) {
    return this.isOverlayChosen(id) || this.isLayerPeeked(id) ? outline : "none";
  }
  isOverlayChosen(id) {
    return this.clickable() && (this.selectedOverlay() === id || this.selectedOverlayIds().includes(id));
  }
  isOverlaySelected(id) {
    return this.clickable() && this.selectedOverlay() === id;
  }
  /** Shared paint order for blocks, images, and stamps. */
  layerZIndex(id, fallback) {
    const value = Number(this.layerZ()[id]);
    if (Number.isFinite(value) && value > 0)
      return clampReportSheetZ(Math.round(value));
    const safe = Number.isFinite(fallback) ? fallback : 40;
    return clampReportSheetZ(Math.min(800, Math.max(1, Math.round(safe))));
  }
  isLayerHidden(id) {
    return this.hiddenLayerIds().includes(id);
  }
  isLayerLocked(id) {
    return this.lockedLayerIds().includes(id);
  }
  isLayerPeeked(id) {
    return this.clickable() && this.peekedLayerId() === id;
  }
  /** Hidden layers stay off the sheet, except while the layers panel is locating one. */
  layerVisibility(id) {
    return this.isLayerHidden(id) && !this.isLayerPeeked(id) ? "hidden" : null;
  }
  /** A hidden layer stays faint while the panel is only locating it. */
  layerPeekOpacity(id) {
    return this.isLayerPeeked(id) && this.isLayerHidden(id) ? 0.55 : null;
  }
  layerPaintZ(id, fallback) {
    if (this.isLayerPeeked(id))
      return REPORT_SHEET_Z_PEEK;
    return this.layerZIndex(id, fallback);
  }
  showsSectionOutline(section) {
    if (!this.clickable())
      return false;
    if (this.isLayerPeeked(`sec:${section.id}`))
      return true;
    if (this.isLayerQuiet(`sec:${section.id}`))
      return false;
    if (this.isSectionChosen(section) && this.selectedSectionId() !== section.id)
      return true;
    return this.selectedSectionId() === section.id && !this.selectedCellKey() && this.selectedCellPart() !== "title" && this.selectedCellPart() !== "label" && this.selectedCellPart() !== "value" && !this.isShapeSection(section);
  }
  revealLayer(id) {
    const selector = id.startsWith("sec:") ? `[data-section-id="${CSS.escape(id.slice(4))}"]` : `[data-overlay-id="${CSS.escape(id)}"]`;
    const node = this._host.nativeElement.querySelector(selector);
    if (node instanceof HTMLElement) {
      node.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
    }
  }
  _sectionLocked(section) {
    return this.isLayerLocked(`sec:${section.id}`);
  }
  /** Locked and hidden layers do not take the click, so the block behind them can be edited. */
  isLayerQuiet(id) {
    return this.isLayerHidden(id) || this.isLayerLocked(id);
  }
  _sectionPointer(section) {
    if (this.isLayerQuiet(`sec:${section.id}`))
      return "none";
    if (this.draggingSectionId() && this.draggingSectionId() !== section.id)
      return "none";
    return "auto";
  }
  selectOverlay(id, event) {
    event?.stopPropagation();
    if (!this.clickable())
      return;
    this.overlaySelect.emit(id);
  }
  onPaperClick(event) {
    if (!this.clickable())
      return;
    const target = event.target;
    if (target?.closest("[data-overlay-box]") || target?.closest("[data-report-section]")) {
      return;
    }
    this.backgroundClick.emit();
  }
  _topSheetLayerAt(x, y) {
    const root = this._host.nativeElement;
    let best = null;
    const consider = (node, id) => {
      if (this.isLayerHidden(id) && !this.isLayerPeeked(id))
        return;
      const style = getComputedStyle(node);
      if (style.display === "none" || style.visibility === "hidden")
        return;
      const rect = node.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1)
        return;
      if (x < rect.left || y < rect.top || x > rect.right || y > rect.bottom)
        return;
      const z = this._paintedZ(node);
      if (!best || z >= best.z)
        best = { id, z };
    };
    root.querySelectorAll("[data-report-section]").forEach((node) => {
      if (!(node instanceof HTMLElement))
        return;
      const sectionId = node.getAttribute("data-section-id");
      if (!sectionId)
        return;
      const section = (this.template()?.sections ?? []).find((item) => item.id === sectionId);
      if (!section || this.isPageAnchor(section))
        return;
      consider(node, `sec:${sectionId}`);
    });
    root.querySelectorAll("[data-overlay-box]").forEach((node) => {
      if (!(node instanceof HTMLElement))
        return;
      const overlayId = node.getAttribute("data-overlay-id");
      if (overlayId)
        consider(node, overlayId);
    });
    return best?.id ?? null;
  }
  _paintedZ(node) {
    let el = node;
    const root = this._host.nativeElement;
    while (el && el !== root) {
      const z = Number(getComputedStyle(el).zIndex);
      if (Number.isFinite(z))
        return z;
      el = el.parentElement;
    }
    return 0;
  }
  onMarqueePointerDown(event) {
    if (!this.marqueeMode() || !this.clickable() || event.button !== 0)
      return;
    const origin = event.target;
    if (origin?.closest("[data-section-handle], [data-overlay-handle], [data-cell-handle], [data-inline-edit], [data-move-badge]")) {
      return;
    }
    const hit = this._hitSelectable(origin);
    if (hit && this._hitIsSelected(hit))
      return;
    event.stopPropagation();
    event.preventDefault();
    this._marquee = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      additive: event.shiftKey || event.ctrlKey || event.metaKey,
      active: false
    };
    try {
      event.currentTarget?.setPointerCapture?.(event.pointerId);
    } catch {
    }
    window.addEventListener("pointermove", this._onMarqueeMove);
    window.addEventListener("pointerup", this._onMarqueeUp, true);
    window.addEventListener("pointercancel", this._onMarqueeUp, true);
  }
  _finishMarquee(rect, additive) {
    const box = new DOMRect(rect.left, rect.top, rect.width, rect.height);
    const sectionIds = [];
    const overlayIds = [];
    const seenSections = /* @__PURE__ */ new Set();
    const seenOverlays = /* @__PURE__ */ new Set();
    this._host.nativeElement.querySelectorAll("[data-report-section]").forEach((node) => {
      if (!(node instanceof HTMLElement))
        return;
      const id = node.getAttribute("data-section-id");
      if (!id || seenSections.has(id) || this.isLayerQuiet(`sec:${id}`))
        return;
      const section = (this.template().sections ?? []).find((item) => item.id === id);
      if (!section || this.isPageAnchor(section))
        return;
      const bounds = node.getBoundingClientRect();
      if (!this._rectsOverlap(bounds, box) || this._marqueeInside(bounds, box))
        return;
      seenSections.add(id);
      sectionIds.push(id);
    });
    this._host.nativeElement.querySelectorAll("[data-overlay-box]").forEach((node) => {
      if (!(node instanceof HTMLElement))
        return;
      const id = node.getAttribute("data-overlay-id");
      if (!id || seenOverlays.has(id) || this.isLayerQuiet(id))
        return;
      const bounds = node.getBoundingClientRect();
      if (!this._rectsOverlap(bounds, box) || this._marqueeInside(bounds, box))
        return;
      seenOverlays.add(id);
      overlayIds.push(id);
    });
    this._emitBoxSelection(sectionIds, overlayIds, additive);
  }
  _emitBoxSelection(sectionIds, overlayIds, additive) {
    if (!additive) {
      this.boxSelectionChange.emit({ sectionIds, overlayIds });
      return;
    }
    this.boxSelectionChange.emit({
      sectionIds: [.../* @__PURE__ */ new Set([...this.selectedSectionIds(), ...sectionIds])],
      overlayIds: [.../* @__PURE__ */ new Set([...this.selectedOverlayIds(), ...overlayIds])]
    });
  }
  _hitSelectable(origin) {
    const sectionEl = origin?.closest("[data-report-section]");
    const sectionId = sectionEl?.getAttribute("data-section-id");
    if (sectionId && !this.isLayerQuiet(`sec:${sectionId}`)) {
      const section = (this.template().sections ?? []).find((item) => item.id === sectionId);
      if (section && !this.isPageAnchor(section))
        return { kind: "section", id: sectionId };
    }
    const overlayEl = origin?.closest("[data-overlay-box]");
    const overlayId = overlayEl?.getAttribute("data-overlay-id");
    if (overlayId && !this.isLayerQuiet(overlayId))
      return { kind: "overlay", id: overlayId };
    return null;
  }
  _hitIsSelected(hit) {
    if (hit.kind === "section") {
      return this.selectedSectionId() === hit.id || this.selectedSectionIds().includes(hit.id);
    }
    return this.selectedOverlay() === hit.id || this.selectedOverlayIds().includes(hit.id);
  }
  _paintMarquee(rect) {
    this.marqueeRect.set(rect);
    let el = this._marqueeEl;
    if (!el) {
      el = document.createElement("div");
      el.setAttribute("data-report-marquee", "");
      el.style.position = "fixed";
      el.style.zIndex = String(REPORT_UI_Z_MARQUEE);
      el.style.pointerEvents = "none";
      el.style.border = "1px solid rgb(67, 56, 202)";
      el.style.background = "rgba(79, 70, 229, 0.28)";
      el.style.boxShadow = "inset 0 0 0 1px rgba(255, 255, 255, 0.45)";
      document.body.appendChild(el);
      this._marqueeEl = el;
    }
    el.style.left = `${rect.left}px`;
    el.style.top = `${rect.top}px`;
    el.style.width = `${rect.width}px`;
    el.style.height = `${rect.height}px`;
  }
  _removeMarqueeEl() {
    this._marqueeEl?.remove();
    this._marqueeEl = null;
    this.marqueeRect.set(null);
  }
  _rectsOverlap(left, right) {
    return left.right >= right.left && left.left <= right.right && left.bottom >= right.top && left.top <= right.bottom;
  }
  /** The shaded area sits inside this object, so the object behind stays put. */
  _marqueeInside(element, marquee) {
    return element.left < marquee.left && element.top < marquee.top && element.right > marquee.right && element.bottom > marquee.bottom;
  }
  _swallowNextClick() {
    const stop = (event) => {
      event.preventDefault();
      event.stopPropagation();
      window.removeEventListener("click", stop, true);
    };
    window.addEventListener("click", stop, true);
  }
  onPaperContextMenu(event) {
    if (!this.clickable() || !this.customContextMenu())
      return;
    const target = event.target;
    if (target?.closest("[data-overlay-box]") || target?.closest("[data-report-section]") || target?.closest("[data-report-cell]")) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.paperContextMenu.emit({ x: event.clientX, y: event.clientY });
  }
  /** Sheet coordinates under the pointer, for dropping new overlays. */
  canonicalPointAt(clientX, clientY) {
    const page = this._pageIndexAtPoint(clientX, clientY, 0);
    const inner = this._pageInner(page);
    if (!inner)
      return { x: 48, y: 48, page };
    const origin = this._innerOrigin(inner);
    const scales = this._pointerScaleFactors;
    return {
      page,
      x: Math.max(0, (clientX - origin.left) * scales.x),
      y: Math.max(0, (clientY - origin.top) * scales.y)
    };
  }
  /** Section under the pointer, used when dropping a field or nested table. */
  sectionIdAt(clientX, clientY) {
    const stack = document.elementsFromPoint(clientX, clientY);
    for (const node of stack) {
      const host = node.closest?.("[data-report-section]");
      const id = host?.getAttribute("data-section-id");
      if (id)
        return id;
    }
    return null;
  }
  onSectionActivate(section, event) {
    event.stopPropagation();
    if (this._sectionLocked(section))
      return;
    if (this._sectionDragMoved) {
      this._sectionDragMoved = false;
      return;
    }
    if (event.target?.closest("[data-inline-edit]"))
      return;
    if (!this.clickable() || !this.sectionClick())
      return;
    const additive = event instanceof MouseEvent && (event.shiftKey || event.ctrlKey || event.metaKey);
    if (additive) {
      this.sectionClick()?.(section, { additive: true });
      return;
    }
    const host = event.target;
    const fieldPart = host?.closest("[data-field-part]")?.getAttribute("data-field-part");
    if (fieldPart === "label" || fieldPart === "value") {
      this._keepCellSelection = false;
      this.cellSelect.emit({ section, key: null, part: fieldPart });
      this.sectionClick()(section);
      return;
    }
    if (host?.closest('[data-sheet-role="title"]')) {
      this._keepCellSelection = false;
      this.cellSelect.emit({ section, key: null, part: "title" });
      this.sectionClick()(section);
      return;
    }
    const cell = host?.closest("[data-report-cell]");
    const cellKey = cell?.getAttribute("data-cell-key");
    if (cellKey) {
      this._keepCellSelection = false;
      const rawPart = host?.closest("[data-cell-part]")?.getAttribute("data-cell-part");
      const part = rawPart === "label" || rawPart === "value" ? rawPart : "cell";
      this.cellSelect.emit({ section, key: cellKey, part });
      this.sectionClick()(section);
      return;
    }
    if (this._keepCellSelection) {
      this._keepCellSelection = false;
      this.sectionClick()(section);
      return;
    }
    this.cellSelect.emit({ section, key: null, part: "cell" });
    this.sectionClick()(section);
  }
  /** Title and free text are edited on the sheet. A click only selects them. */
  isCanvasText(kind) {
    return kind === "title" || kind === "body" || kind === "itemTitle";
  }
  onSheetTextPointerDown(kind, event) {
    if (!this.isCanvasText(kind))
      event.stopPropagation();
  }
  onSheetTextClick(section, kind, event, key, fallback = "") {
    if (this.isCanvasText(kind))
      return;
    this.startInlineEdit(section, kind, event, key, fallback);
  }
  onSheetTextDoubleClick(section, kind, event, key, fallback = "") {
    if (!this.isCanvasText(kind))
      return;
    event.preventDefault();
    event.stopPropagation();
    this._selectAllOnFocus = true;
    this.startInlineEdit(section, kind, event, key, fallback);
  }
  /** Open the words of a title or text block, ready to replace or to type the first character. */
  beginInlineEdit(sectionId, replaceWith) {
    const section = (this.template().sections ?? []).find((item) => item.id === sectionId);
    if (!section || this._sectionLocked(section) || !this.canInlineEdit())
      return;
    const kind = section.type === "text" ? "body" : "title";
    this._clearSectionDrag();
    this._flushInlineEdit();
    this._suppressInlineBlur = true;
    this.sectionClick()?.(section);
    this.cellSelect.emit({ section, key: null, part: kind === "title" ? "title" : "cell" });
    this._inlineSeedValue = this._inlineSeed(section, kind);
    this.inlineDraft.set(replaceWith ?? this._inlineSeedValue);
    this._selectAllOnFocus = replaceWith == null;
    this.editingText.set({ sectionId: section.id, kind });
    queueMicrotask(() => {
      this._suppressInlineBlur = false;
      this._focusInlineEditor();
    });
  }
  canInlineEdit(measure) {
    return Boolean(this.clickable() && this.sectionClick() && !this.thumbnailMode() && !this.printCapture() && !measure);
  }
  isEditingText(sectionId, kind, key) {
    const current = this.editingText();
    return !!current && current.sectionId === sectionId && current.kind === kind && (current.key ?? "") === (key ?? "");
  }
  sheetTextContext(section, kind, text, measure, multiline = false, key, fallback) {
    return { section, kind, text, measure, multiline, key, fallback };
  }
  startInlineEdit(section, kind, event, key, fallback = "") {
    event.preventDefault();
    event.stopPropagation();
    if (!this.canInlineEdit() || this._sectionLocked(section))
      return;
    const editKind = kind;
    this._clearSectionDrag();
    this._flushInlineEdit();
    this._suppressInlineBlur = true;
    this.sectionClick()?.(section);
    const onTitle = Boolean(event.target?.closest('[data-sheet-role="title"]'));
    if (section.type === "field" && (editKind === "title" || editKind === "cellValue" || editKind === "cellLabel")) {
      this.cellSelect.emit({
        section,
        key: null,
        part: editKind === "cellValue" ? "value" : "label"
      });
    } else if ((editKind === "cellLabel" || editKind === "cellValue") && key) {
      this.cellSelect.emit({
        section,
        key: key.split("#")[0],
        part: editKind === "cellLabel" ? "label" : "value"
      });
    } else if (onTitle) {
      this.cellSelect.emit({ section, key: null, part: "title" });
    } else {
      this.cellSelect.emit({ section, key: null, part: "cell" });
    }
    if (editKind === "cellValue")
      return;
    this._inlineSeedValue = this._inlineSeed(section, editKind, key, fallback);
    this.inlineDraft.set(this._inlineSeedValue);
    this.editingText.set(__spreadValues({ sectionId: section.id, kind: editKind }, key ? { key } : {}));
    queueMicrotask(() => {
      this._suppressInlineBlur = false;
      this._focusInlineEditor();
    });
  }
  onInlineDraftInput(event) {
    const el = event.target;
    this.inlineDraft.set(el.value);
    this._fitInlineEditor(el);
    if (el.classList.contains("hug-field"))
      this._scheduleContentFit();
  }
  onInlineKeydown(event, multiline) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.commitInlineEdit();
      return;
    }
    if (event.key === "Enter" && (!multiline || event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      this.commitInlineEdit();
    }
  }
  commitInlineEdit() {
    if (this._suppressInlineBlur)
      return;
    this._flushInlineEdit();
  }
  _flushInlineEdit() {
    const editing = this.editingText();
    if (!editing)
      return;
    const value = this.inlineDraft();
    this.editingText.set(null);
    if (value === this._inlineSeedValue)
      return;
    this.inlineTextChange.emit(__spreadProps(__spreadValues({}, editing), { value }));
  }
  _inlineSeed(section, kind, key, fallback = "") {
    if (kind === "body")
      return section.staticContent || "";
    if (kind === "itemTitle")
      return section.itemTitle || fallback || "";
    if (kind === "itemTemplate")
      return section.itemTemplate || fallback || "";
    if (kind === "cellLabel" && key) {
      return this.entryLabel(section, { key, label: fallback || key });
    }
    if (section.type === "header")
      return section.staticContent || section.label || "";
    return section.label || "";
  }
  /**
   * The editor renders on the next change detection, so it may not exist yet.
   * An editor that never got focus never blurs, and would stay on the sheet.
   */
  _focusInlineEditor(attempt = 0) {
    if (!this.editingText())
      return;
    const el = this._host.nativeElement.querySelector("[data-inline-edit]");
    if (!el) {
      if (attempt < 5)
        requestAnimationFrame(() => this._focusInlineEditor(attempt + 1));
      return;
    }
    el.focus();
    if (this._selectAllOnFocus) {
      el.select();
      this._selectAllOnFocus = false;
    } else {
      const end = el.value.length;
      el.setSelectionRange(end, end);
    }
    this._fitInlineEditor(el);
  }
  _fitInlineEditor(el) {
    if (!(el instanceof HTMLTextAreaElement))
      return;
    if (el.classList.contains("hug-field")) {
      const sizing = getComputedStyle(el).getPropertyValue("field-sizing").trim();
      if (sizing !== "content") {
        const cap = parseFloat(el.style.maxWidth) || 0;
        el.style.width = "0px";
        const grown = Math.max(8, el.scrollWidth);
        el.style.width = `${cap > 0 ? Math.min(cap, grown) : grown}px`;
      }
    }
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }
  onSectionPointerDown(section, event) {
    if (!this.clickable() || !this.reorderable() || event.button !== 0 || this._sectionLocked(section))
      return;
    const origin = event.target;
    if (origin?.closest("[data-overlay-box]") || origin?.closest("[data-overlay-handle]"))
      return;
    if (origin?.closest("[data-section-handle]"))
      return;
    if (origin?.closest("[data-inline-edit]"))
      return;
    const textKind = origin?.closest("[data-sheet-text]")?.getAttribute("data-text-kind");
    if (textKind && textKind !== "title" && textKind !== "body" && textKind !== "itemTitle")
      return;
    const cellKey = origin?.closest("[data-report-cell]")?.getAttribute("data-cell-key") ?? null;
    const rawPart = origin?.closest("[data-cell-part]")?.getAttribute("data-cell-part");
    const cellPart = rawPart === "label" || rawPart === "value" ? rawPart : "cell";
    this._sectionDragMoved = false;
    this._sectionDrag = {
      id: section.id,
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startFrame: this.displayFrame(section) ?? { page: 0, x: 0, y: 0, width: 0 },
      scrollTopAtStart: this._dragViewport()?.scrollTop ?? 0,
      active: false,
      cellKey,
      cellPart,
      host: event.currentTarget,
      companions: [],
      overlayMates: []
    };
    window.addEventListener("pointermove", this._onWindowSectionMove);
    window.addEventListener("pointerup", this._onWindowSectionUp, true);
    window.addEventListener("pointercancel", this._onWindowSectionUp, true);
  }
  startSectionResize(section, event, handle = "se") {
    if (!this.clickable() || event.button !== 0 || this._sectionLocked(section))
      return;
    event.preventDefault();
    event.stopPropagation();
    const frame = this.displayFrame(section);
    if (!frame)
      return;
    this._clearSectionDrag();
    const fixed = this._locksFrameHeight(section) || section.type === "image";
    let width = frame.width;
    let height = frame.height;
    if (!width || !height) {
      const host = event.currentTarget?.closest("[data-report-section]");
      const scales = this._scaleFactors;
      width ||= host ? host.offsetWidth * scales.x : 48;
      height ||= host ? host.offsetHeight * scales.y : 48;
    }
    this._sectionResize = {
      id: section.id,
      pointerId: event.pointerId,
      handle,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startFrame: __spreadProps(__spreadValues({}, frame), { width: width || 48, height: height || 48 }),
      keepRatio: this.isShapeSection(section) && this.shapeKeepRatio(section),
      rotation: this.sectionRotation(section),
      minSize: fixed ? 12 : 40,
      tracksMinHeight: !fixed
    };
    this._setSheetDragging(true);
    document.body.style.userSelect = "none";
    document.body.style.cursor = resizeCursor(handle);
    window.addEventListener("pointermove", this._onWindowSectionResizeMove);
    window.addEventListener("pointerup", this._onWindowSectionResizeUp, true);
    window.addEventListener("pointercancel", this._onWindowSectionResizeUp, true);
  }
  startSectionRotate(section, event) {
    if (!this.clickable() || event.button !== 0 || this._sectionLocked(section))
      return;
    event.preventDefault();
    event.stopPropagation();
    const box = event.currentTarget.closest("[data-report-section]");
    if (!box)
      return;
    const rect = box.getBoundingClientRect();
    this._clearSectionDrag();
    this._sectionRotate = {
      id: section.id,
      pointerId: event.pointerId,
      centerX: rect.left + rect.width / 2,
      centerY: rect.top + rect.height / 2,
      startAngle: Math.atan2(event.clientY - (rect.top + rect.height / 2), event.clientX - (rect.left + rect.width / 2)),
      startRotation: this.sectionRotation(section)
    };
    this._setSheetDragging(true);
    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
    window.addEventListener("pointermove", this._onWindowSectionRotateMove);
    window.addEventListener("pointerup", this._onWindowSectionRotateUp, true);
    window.addEventListener("pointercancel", this._onWindowSectionRotateUp, true);
  }
  _applySectionResize(clientX, clientY) {
    const resize = this._sectionResize;
    if (!resize)
      return;
    const scales = this._pointerScaleFactors;
    const start = resize.startFrame;
    const startW = start.width || 48;
    const startH = start.height || 48;
    const rad = -resize.rotation * Math.PI / 180;
    const dx = (clientX - resize.startClientX) * scales.x;
    const dy = (clientY - resize.startClientY) * scales.y;
    const localX = dx * Math.cos(rad) - dy * Math.sin(rad);
    const localY = dx * Math.sin(rad) + dy * Math.cos(rad);
    let width = startW;
    let height = startH;
    let x = start.x;
    let y = start.y;
    if (resize.handle.includes("e"))
      width = startW + localX;
    if (resize.handle.includes("w")) {
      width = startW - localX;
      x = start.x + localX;
    }
    if (resize.handle.includes("s"))
      height = startH + localY;
    if (resize.handle.includes("n")) {
      height = startH - localY;
      y = start.y + localY;
    }
    if (resize.keepRatio) {
      const ratio = startW / Math.max(1, startH);
      const fromWidth = Math.abs(width - startW) >= Math.abs(height - startH);
      if (fromWidth)
        height = width / ratio;
      else
        width = height * ratio;
      if (resize.handle.includes("w"))
        x = start.x + startW - width;
      if (resize.handle.includes("n"))
        y = start.y + startH - height;
    }
    width = Math.max(resize.minSize, width);
    height = Math.max(resize.minSize, height);
    const prev = this.liveFrames()[resize.id];
    if (prev && prev.x === x && prev.y === y && prev.width === width && prev.height === height)
      return;
    this.liveFrames.update((current) => __spreadProps(__spreadValues({}, current), {
      [resize.id]: __spreadValues(__spreadProps(__spreadValues({}, start), {
        x,
        y,
        width,
        height
      }), resize.tracksMinHeight && /[ns]/.test(resize.handle) ? { minHeight: Math.round(height) } : {})
    }));
  }
  _applySectionRotate(clientX, clientY) {
    const rotate = this._sectionRotate;
    if (!rotate)
      return;
    const angle = Math.atan2(clientY - rotate.centerY, clientX - rotate.centerX);
    const degrees = rotate.startRotation + (angle - rotate.startAngle) * 180 / Math.PI;
    const next = Math.round((degrees % 360 + 360) % 360);
    const value = next > 180 ? next - 360 : next;
    if (this.liveRotations()[rotate.id] === value)
      return;
    this.liveRotations.update((current) => __spreadProps(__spreadValues({}, current), { [rotate.id]: value }));
  }
  onSectionPointerMove(event) {
    const drag = this._sectionDrag;
    if (!drag || event.pointerId !== drag.pointerId)
      return;
    if (!drag.active) {
      if (Math.hypot(event.clientX - drag.startClientX, event.clientY - drag.startClientY) < 8) {
        return;
      }
      const start = this._allSectionsHaveFrames() ? this.liveFrames()[drag.id] ?? this.template().sections?.find((section) => section.id === drag.id)?.frame ?? null : this._pinFlowLayout(drag.id);
      if (!start) {
        this._clearSectionDrag();
        return;
      }
      drag.startFrame = start;
      drag.scrollTopAtStart = this._dragViewport()?.scrollTop ?? drag.scrollTopAtStart;
      drag.active = true;
      this._sectionDragMoved = true;
      event.preventDefault();
      try {
        drag.host?.setPointerCapture(event.pointerId);
      } catch {
      }
      if (this.editingText())
        this.commitInlineEdit();
      drag.companions = this._dragCompanions(drag.id);
      drag.overlayMates = this.selectedSectionIds().includes(drag.id) ? this._groupOverlayMates() : [];
      this.draggingSectionId.set(drag.id);
      this._groupDragIds.set([drag.id, ...drag.companions.map((mate) => mate.id)]);
      this._setSheetDragging(true);
      document.body.style.userSelect = "none";
      document.body.style.cursor = "grabbing";
    }
    event.preventDefault();
    this._pendingDragPoint = { x: event.clientX, y: event.clientY };
    this._scheduleSectionDragPaint();
  }
  _scheduleSectionDragPaint() {
    if (this._sectionDragRaf !== null)
      return;
    this._sectionDragRaf = requestAnimationFrame(() => {
      this._sectionDragRaf = null;
      const drag = this._sectionDrag;
      const point = this._pendingDragPoint;
      if (!drag?.active || !point)
        return;
      this._applySectionDrag(drag, point.x, point.y);
    });
  }
  _flushSectionDragRaf() {
    if (this._sectionDragRaf === null)
      return;
    cancelAnimationFrame(this._sectionDragRaf);
    this._sectionDragRaf = null;
  }
  _flushSectionResizeRaf() {
    if (this._resizeRaf === null)
      return;
    cancelAnimationFrame(this._resizeRaf);
    this._resizeRaf = null;
  }
  _flushSectionRotateRaf() {
    if (this._rotateRaf === null)
      return;
    cancelAnimationFrame(this._rotateRaf);
    this._rotateRaf = null;
  }
  onSectionPointerUp(event) {
    const drag = this._sectionDrag;
    if (!drag || event.pointerId !== drag.pointerId)
      return;
    const wasActive = drag.active;
    if (wasActive) {
      this._pendingDragPoint = { x: event.clientX, y: event.clientY };
      this._flushSectionDragRaf();
      this._applySectionDrag(drag, event.clientX, event.clientY);
    }
    const live = this.liveFrames();
    const changedIds = /* @__PURE__ */ new Set([
      drag.id,
      ...drag.companions.map((mate) => mate.id),
      ...this._pinnedIdsThisDrag
    ]);
    const updates = [...changedIds].map((id) => {
      const frame = live[id];
      return frame ? { id, frame } : null;
    }).filter((item) => Boolean(item));
    this._stopSectionDragListeners();
    this._sectionDrag = null;
    this._pinnedIdsThisDrag.clear();
    this.draggingSectionId.set(null);
    this._groupDragIds.set([]);
    this.alignmentGuides.set([]);
    this._setSheetDragging(false);
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
    if (!wasActive) {
      this.liveFrames.set({});
      const section = this.template().sections?.find((item) => item.id === drag.id);
      if (section && drag.cellKey) {
        this._keepCellSelection = true;
        this.cellSelect.emit({ section, key: drag.cellKey, part: drag.cellPart });
        queueMicrotask(() => {
          this._keepCellSelection = false;
        });
      }
      return;
    }
    this.sectionFramesChange.emit(updates);
    this.liveFrames.set({});
  }
  isSectionDropBefore(_section) {
    return false;
  }
  isSectionDropAfter(_section) {
    return false;
  }
  hasFreeLayout() {
    return this.freeLayout();
  }
  visiblePages() {
    const pages = this.pages();
    if (!this.thumbnailMode())
      return pages;
    return pages.length ? [pages[0]] : [[]];
  }
  _pagesFromFrames(sections) {
    let pageCount = 1;
    for (const section of sections) {
      pageCount = Math.max(pageCount, (this.displayFrame(section)?.page ?? 0) + 1);
    }
    const newPages = Array.from({ length: pageCount }, () => []);
    for (const section of sections) {
      const page = Math.min(Math.max(0, this.displayFrame(section)?.page ?? 0), pageCount - 1);
      newPages[page].push(section);
    }
    return newPages.length ? newPages : [[]];
  }
  isPageAnchor(section) {
    return isReportPageAnchor(section);
  }
  emitAddPage(event) {
    event.stopPropagation();
    this.addPage.emit();
  }
  emitRemovePage(event) {
    event.stopPropagation();
    this.removePage.emit();
  }
  pageHasBlocks(pageSections) {
    return pageSections.some((section) => !this.isPageAnchor(section));
  }
  canRemoveLastPage() {
    const pages = this.visiblePages();
    if (pages.length < 2)
      return false;
    const lastIndex = pages.length - 1;
    if (this.pageHasBlocks(pages[lastIndex] ?? []))
      return false;
    return !this.sheetImages().some((image) => (image.page ?? 0) === lastIndex);
  }
  pageHost(pageIndex) {
    return this._reportPages?.toArray()[pageIndex]?.nativeElement ?? null;
  }
  /** Screen box of the selected block, its title, or one cell inside it. */
  anchorRect(sectionId, cellKey, part) {
    const root = this._host.nativeElement;
    if (!sectionId)
      return null;
    const section = root.querySelector(`[data-section-id="${CSS.escape(sectionId)}"]`);
    if (!(section instanceof HTMLElement))
      return null;
    if (!cellKey && part === "title") {
      const title = section.querySelector('[data-sheet-role="title"]');
      if (title instanceof HTMLElement)
        return title.getBoundingClientRect();
    }
    if (!cellKey && (part === "label" || part === "value")) {
      const piece = section.querySelector(`[data-field-part="${part}"]`);
      if (piece instanceof HTMLElement)
        return piece.getBoundingClientRect();
    }
    if (cellKey) {
      const cell = section.querySelector(`[data-cell-key="${CSS.escape(cellKey)}"]`);
      if (part === "label" || part === "value") {
        const piece = cell?.querySelector(`[data-cell-part="${part}"]`);
        if (piece instanceof HTMLElement)
          return piece.getBoundingClientRect();
      }
      if (cell instanceof HTMLElement)
        return cell.getBoundingClientRect();
    }
    return section.getBoundingClientRect();
  }
  overlayAnchorRect(id) {
    if (!id)
      return null;
    const root = this._host.nativeElement;
    const box = root.querySelector(`[data-overlay-id="${CSS.escape(id)}"]`);
    return box instanceof HTMLElement ? box.getBoundingClientRect() : null;
  }
  isSectionChosen(section) {
    if (!this.clickable())
      return false;
    if (this.selectedSectionId() === section.id)
      return true;
    return this.selectedSectionIds().includes(section.id);
  }
  isFieldPartSelected(section, part) {
    return this.clickable() && section.type === "field" && this.selectedSectionId() === section.id && !this.selectedCellKey() && this.selectedCellPart() === part;
  }
  isTitleSelected(section) {
    return this.clickable() && this.selectedSectionId() === section.id && !this.selectedCellKey() && this.selectedCellPart() === "title";
  }
  onTitleContextMenu(section, event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.clickable())
      return;
    this.cellSelect.emit({ section, key: null, part: "title" });
    this.sectionClick()?.(section);
  }
  _usesPinnedFrames() {
    return (this.template().sections ?? []).some((section) => Boolean(section.frame));
  }
  _allSectionsHaveFrames() {
    const sections = this.template().sections ?? [];
    return sections.length > 0 && sections.every((section) => Boolean(this.displayFrame(section)));
  }
  displayFrame(section) {
    return this.liveFrames()[section.id] ?? section.frame ?? null;
  }
  paperName() {
    return resolvePageSizeName(this.pageSize() ?? this.template()?.pageSize);
  }
  paperSizeMm() {
    return reportPaperSizeMm(this.paperName(), this.orientation());
  }
  pageWidthCss() {
    return `${this.paperSizeMm().width}mm`;
  }
  pageHeightCss() {
    return `${this.paperSizeMm().height}mm`;
  }
  measureWidthCss() {
    return `${this.paperSizeMm().width}mm`;
  }
  zoomInnerTransform() {
    const zoom = this._viewZoom();
    return zoom === 1 ? "none" : `scale(${zoom})`;
  }
  zoomedStackWidthPx() {
    return this.pageWidthPx() * this._viewZoom();
  }
  zoomedStackHeightPx() {
    const pages = Math.max(1, this.visiblePages().length);
    const gap = 16;
    return (this.pageHeightPx() * pages + gap * Math.max(0, pages - 1)) * this._viewZoom();
  }
  _viewZoom() {
    const zoom = Number(this.viewZoom());
    return Number.isFinite(zoom) && zoom > 0 ? zoom : 1;
  }
  pageWidthPx() {
    return this.paperSizeMm().width * MM_TO_PX;
  }
  pageHeightPx() {
    return this.paperSizeMm().height * MM_TO_PX;
  }
  /** Last usable Y before the footer / bottom margin. */
  contentBottomLimitPx() {
    const legend = this._getLegendHeight() * this._scaleFactors.y;
    return Math.max(PAGE_INSET_PX + 80, this.pageHeightPx() - PAGE_INSET_PX - legend);
  }
  /** Keep a new block on its sheet. A later block must stay reachable above an earlier one. */
  fitFrameOnSheet(frame) {
    const height = Number(frame.height) || 0;
    const y = Number(frame.y) || 0;
    const limit = this.contentBottomLimitPx();
    if (height > 0 && y + height > limit) {
      return __spreadProps(__spreadValues({}, frame), { y: Math.max(0, limit - height) });
    }
    return frame;
  }
  /**
   * Where a new content block goes: under the lowest block already on the sheet.
   * If it would collide with the footer, it starts on the next A4 page.
   */
  frameBelowContent(size) {
    const boxes = (this.template().sections ?? []).filter((section) => !isReportPageAnchor(section)).map((section) => this.displayFrame(section)).filter((frame) => Boolean(frame));
    if (!boxes.length)
      return null;
    const pageHeight = this.pageHeightPx();
    const lowest = boxes.reduce((best, frame) => {
      const bestRank = (best.page ?? 0) * pageHeight + (best.y ?? 0) + (best.height ?? 0);
      const nextRank = (frame.page ?? 0) * pageHeight + (frame.y ?? 0) + (frame.height ?? 0);
      return nextRank >= bestRank ? frame : best;
    });
    return this.fitFrameOnSheet({
      x: lowest.x ?? 24,
      y: (lowest.y ?? 0) + (lowest.height || size.height) + SECTION_GAP_PX,
      width: size.width,
      height: size.height,
      page: lowest.page ?? 0
    });
  }
  sectionHostStyle(section) {
    const frame = this.displayFrame(section);
    if (!this.hasFreeLayout() || !frame)
      return {};
    const x = Number(frame.x);
    const y = Number(frame.y);
    if (!Number.isFinite(x) || !Number.isFinite(y))
      return {};
    const scales = this._scaleFactors;
    const width = Number(frame.width) > 0 ? Number(frame.width) / scales.x : 0;
    const height = Number(frame.height) > 0 ? Number(frame.height) / scales.y : 0;
    const rotation = this.sectionRotation(section);
    const dragging = this.draggingSectionId() === section.id || this._groupDragIds().includes(section.id);
    const hug = this.hugsText(section);
    const style = {
      position: "absolute",
      top: `${y / scales.y}px`,
      marginBottom: "0px",
      zIndex: dragging ? String(REPORT_SHEET_Z_DRAG) : String(this.layerZIndex(`sec:${section.id}`, this._sectionZIndex(section))),
      pointerEvents: this._sectionPointer(section)
    };
    if (this.isLayerHidden(`sec:${section.id}`) && !this.isLayerPeeked(`sec:${section.id}`))
      style["visibility"] = "hidden";
    if (this.isLayerPeeked(`sec:${section.id}`))
      style["zIndex"] = String(REPORT_SHEET_Z_PEEK);
    if (this.isLayerPeeked(`sec:${section.id}`) && this.isLayerHidden(`sec:${section.id}`))
      style["opacity"] = "0.55";
    if (dragging)
      style["willChange"] = "left, top, width, height";
    if (hug) {
      const align = this.roleTextAlign(section, "title");
      const boxW = Number(frame.width) > 0 ? Number(frame.width) : 0;
      if (!rotation && align === "center" && boxW) {
        style["left"] = `${(x + boxW / 2) / scales.x}px`;
        style["transform"] = "translateX(-50%)";
      } else if (!rotation && align === "right" && boxW) {
        style["left"] = `${(x + boxW) / scales.x}px`;
        style["transform"] = "translateX(-100%)";
      } else {
        style["left"] = `${x / scales.x}px`;
        if (rotation) {
          style["transform"] = `rotate(${rotation}deg)`;
          style["transform-origin"] = "center center";
        }
      }
      style["width"] = "max-content";
      style["height"] = "auto";
      style["max-width"] = `${this.textHugMaxCss(section)}px`;
      style["overflow"] = "visible";
      return style;
    }
    style["left"] = `${x / scales.x}px`;
    style["width"] = width ? `${width}px` : "100%";
    const clipToFrame = section.type === "image";
    if (height) {
      if (clipToFrame || section.type === "shape")
        style["height"] = `${height}px`;
      else
        style["min-height"] = `${height}px`;
    }
    style["overflow"] = clipToFrame ? "hidden" : "visible";
    if (rotation && this._rotatesHost(section)) {
      style["transform"] = `rotate(${rotation}deg)`;
      style["transform-origin"] = "center center";
    }
    return style;
  }
  _sectionZIndex(section) {
    const stored = Number(section.style?.zIndex);
    if (Number.isFinite(stored) && stored > 0)
      return clampReportSheetZ(Math.round(stored));
    return 40;
  }
  /** A thin line turns its whole box, so the grab area and handles follow the stroke. */
  _rotatesHost(section) {
    return section.type !== "shape" || this.shapeKind(section) === "line";
  }
  sectionRotation(section) {
    const live = this.liveRotations()[section.id];
    if (Number.isFinite(live))
      return live;
    const stored = Number(section.style?.rotation);
    return Number.isFinite(stored) ? stored : 0;
  }
  isShapeSection(section) {
    return section.type === "shape";
  }
  /** Title and free text keep a box the size of the words, not the frame they were dropped in. */
  hugsText(section) {
    return section.type === "header" || section.type === "text";
  }
  /** Widest the words may grow before they wrap, in layout pixels. */
  textHugMaxCss(section) {
    const scale = this._scaleFactors.x || 1;
    const page = this.pageWidthPx() / scale;
    const inset = PAGE_INSET_PX / scale;
    const frame = this.displayFrame(section);
    const x = (Number(frame?.x) || 0) / scale;
    const w = (Number(frame?.width) || 0) / scale;
    const align = this.roleTextAlign(section, "title");
    let room = page - inset * 2;
    if (align === "center") {
      const center = x + w / 2;
      room = 2 * Math.min(Math.max(0, center - inset), Math.max(0, page - inset - center));
    } else if (align === "right") {
      room = x + w - inset;
    } else {
      room = page - inset - x;
    }
    return Math.max(32, Math.floor(room));
  }
  _applySectionDrag(drag, clientX, clientY) {
    const scales = this._pointerScaleFactors;
    const width = drag.startFrame.width || 240;
    const height = drag.startFrame.height || 80;
    const fromPage = drag.startFrame.page ?? 0;
    let toPage = this._pageForDrag(clientX, clientY, fromPage);
    const creating = toPage > fromPage && toPage >= (this._reportPages?.length ?? 0);
    const scrollDelta = (this._dragViewport()?.scrollTop ?? drag.scrollTopAtStart) - drag.scrollTopAtStart;
    let x = drag.startFrame.x + (clientX - drag.startClientX) * scales.x;
    let y = creating ? PAGE_INSET_PX : drag.startFrame.y + (clientY - drag.startClientY + scrollDelta) * scales.y;
    const fromInner = this._pageInner(fromPage);
    const toInner = this._pageInner(toPage);
    if (!creating && fromInner && toInner && fromInner !== toInner) {
      const fromOrigin = this._innerOrigin(fromInner);
      const toOrigin = this._innerOrigin(toInner);
      x += (fromOrigin.left - toOrigin.left) * scales.x;
      y += (fromOrigin.top - toOrigin.top) * scales.y;
    }
    if (!creating) {
      let guard = 0;
      while (y < -24 && toPage > 0 && guard < 6) {
        const previous = this._pageInner(toPage - 1);
        if (!previous)
          break;
        y += this.pageHeightPx();
        toPage -= 1;
        guard += 1;
      }
    }
    if (!creating) {
      const keep = 48;
      const pageW = this.pageWidthPx();
      const pageH = this.pageHeightPx();
      const clamp = (nextX, nextY) => ({
        x: Math.min(Math.max(0, nextX), Math.max(0, pageW - Math.min(width, keep))),
        y: Math.min(Math.max(0, nextY), Math.max(0, pageH - Math.min(height, keep)))
      });
      const bounded = clamp(x, y);
      const snapped = this._alignDragBox(drag.id, toPage, bounded.x, bounded.y, width, height);
      const placed = clamp(snapped.x, snapped.y);
      x = placed.x;
      y = placed.y;
    } else if (this.alignmentGuides().length) {
      this.alignmentGuides.set([]);
    }
    this._scrollDragViewport(clientX, clientY);
    const next = __spreadProps(__spreadValues({}, drag.startFrame), {
      page: toPage,
      x,
      y,
      width,
      height
    });
    const dx = x - (drag.startFrame.x ?? 0);
    const dy = y - (drag.startFrame.y ?? 0);
    const dPage = toPage - (drag.startFrame.page ?? 0);
    const group = { [drag.id]: next };
    for (const mate of drag.companions ?? []) {
      const start = mate.startFrame;
      const mateWidth = start.width || 48;
      const mateHeight = start.height || 48;
      const keep = 48;
      const pageW = this.pageWidthPx();
      const pageH = this.pageHeightPx();
      group[mate.id] = __spreadProps(__spreadValues({}, start), {
        page: Math.max(0, (start.page ?? 0) + dPage),
        x: Math.min(Math.max(0, (start.x ?? 0) + dx), Math.max(0, pageW - Math.min(mateWidth, keep))),
        y: Math.min(Math.max(0, (start.y ?? 0) + dy), Math.max(0, pageH - Math.min(mateHeight, keep)))
      });
    }
    const prev = this.liveFrames()[drag.id];
    const same = prev && prev.page === next.page && prev.x === next.x && prev.y === next.y && prev.width === next.width && prev.height === next.height;
    if (!same) {
      this.liveFrames.update((current) => __spreadValues(__spreadValues({}, current), group));
    }
    this._moveOverlayMates(drag.overlayMates, dx, dy, dPage);
    if (toPage !== fromPage) {
      this._setPagesIfDifferent(this._pagesFromFrames(this.template().sections || []));
      drag.startFrame = next;
      for (const mate of drag.companions ?? []) {
        const placed = group[mate.id];
        if (placed)
          mate.startFrame = __spreadValues({}, placed);
      }
      for (const mate of drag.overlayMates ?? []) {
        const clamped = this._clampOverlay(mate.x + dx, mate.y + dy, mate.width, mate.height);
        mate.x = clamped.x;
        mate.y = clamped.y;
        if (mate.id === "signature" || mate.id.startsWith("img:"))
          mate.page = Math.max(0, mate.page + dPage);
      }
      drag.startClientX = clientX;
      drag.startClientY = clientY;
      drag.scrollTopAtStart = this._dragViewport()?.scrollTop ?? drag.scrollTopAtStart;
    }
  }
  /** Blocks already chosen, other than the one under the pointer, so a drag keeps them together. */
  _dragCompanions(dragId) {
    const ids = this.selectedSectionIds();
    if (ids.length < 2 || !ids.includes(dragId))
      return [];
    const sections = this.template().sections ?? [];
    const mates = [];
    for (const id of ids) {
      if (id === dragId || this.isLayerLocked(`sec:${id}`))
        continue;
      const section = sections.find((item) => item.id === id);
      const frame = section ? this.displayFrame(section) : null;
      if (!frame)
        continue;
      mates.push({ id, startFrame: __spreadValues({}, frame) });
    }
    return mates;
  }
  _selectedSectionStarts() {
    const sections = this.template().sections ?? [];
    const mates = [];
    for (const id of this.selectedSectionIds()) {
      if (this.isLayerLocked(`sec:${id}`))
        continue;
      const section = sections.find((item) => item.id === id);
      const frame = section ? this.displayFrame(section) : null;
      if (!frame)
        continue;
      mates.push({ id, startFrame: __spreadValues({}, frame) });
    }
    return mates;
  }
  _groupOverlayMates(except) {
    const ids = new Set(this.selectedOverlayIds());
    const primary = this.selectedOverlay();
    if (primary)
      ids.add(primary);
    if (except)
      ids.delete(except);
    const mates = [];
    for (const id of ids) {
      if (id.startsWith("hdr:") || this.isLayerLocked(id))
        continue;
      const origin = this._overlayOrigin(id);
      if (origin)
        mates.push(origin);
    }
    return mates;
  }
  _overlayOrigin(id) {
    if (id === "logo") {
      return { id, x: this.logoX(), y: this.logoY(), page: 0, width: this.logoWidth(), height: this.logoHeight() };
    }
    if (id === "watermark") {
      return {
        id,
        x: this.watermarkX(),
        y: this.watermarkY(),
        page: 0,
        width: this.watermarkWidth(),
        height: this.watermarkHeight()
      };
    }
    if (id === "signature") {
      return {
        id,
        x: this.signatureX(),
        y: this.signatureY(),
        page: this.signaturePage() || 0,
        width: this.signatureWidth(),
        height: this.signatureHeight()
      };
    }
    const image = this._sheetImage(this._sheetImageId(id));
    if (!image)
      return null;
    return { id, x: image.x, y: image.y, page: image.page ?? 0, width: image.width, height: image.height };
  }
  _shiftGroupSections(dx, dy, dPage) {
    const shift = this._groupShift;
    if (!shift?.sections.length || dx === 0 && dy === 0 && dPage === 0)
      return;
    const group = {};
    for (const mate of shift.sections) {
      const start = mate.startFrame;
      const width = start.width || 48;
      const height = start.height || 48;
      const clamped = this._clampOverlay((start.x ?? 0) + dx, (start.y ?? 0) + dy, width, height);
      group[mate.id] = __spreadProps(__spreadValues({}, start), {
        page: Math.max(0, (start.page ?? 0) + dPage),
        x: clamped.x,
        y: clamped.y
      });
    }
    this.liveFrames.update((current) => __spreadValues(__spreadValues({}, current), group));
  }
  _moveOverlayMates(mates, dx, dy, dPage) {
    if (!mates?.length || dx === 0 && dy === 0 && dPage === 0)
      return;
    this.groupOverlayMove.emit(mates.map((mate) => {
      const page = mate.id === "signature" || mate.id.startsWith("img:") ? Math.max(0, mate.page + dPage) : mate.page;
      const clamped = this._clampOverlay(mate.x + dx, mate.y + dy, mate.width, mate.height);
      return { id: mate.id, x: clamped.x, y: clamped.y, page };
    }));
  }
  /**
   * While a block is moving, pull it onto a nearby edge or center of another
   * element and draw that line. The magnet is a few screen pixels, so the
   * block still sits wherever it is dropped once it leaves the line.
   */
  _alignDragBox(dragId, page, x, y, width, height, ignoreOverlay) {
    const scales = this._pointerScaleFactors;
    const threshold = 6 * Math.max(scales.x, scales.y);
    const targets = this._alignmentPair(dragId, page, ignoreOverlay);
    const xTargets = targets.x;
    const yTargets = targets.y;
    const snap = (origin, size, targets2) => {
      const edges = [origin, origin + size / 2, origin + size];
      let best = threshold + 1;
      let delta = 0;
      for (const edge of edges) {
        for (const target of targets2) {
          const diff = target - edge;
          if (Math.abs(diff) < best) {
            best = Math.abs(diff);
            delta = diff;
          }
        }
      }
      return best <= threshold ? origin + delta : origin;
    };
    const nextX = snap(x, width, xTargets);
    const nextY = snap(y, height, yTargets);
    const view = this._scaleFactors;
    const guides = [];
    const collect = (origin, size, targets2, axis, scale) => {
      const edges = [origin, origin + size / 2, origin + size];
      const seen = /* @__PURE__ */ new Set();
      for (const edge of edges) {
        for (const target of targets2) {
          if (Math.abs(target - edge) > 1)
            continue;
          const key = Math.round(target);
          if (seen.has(key))
            continue;
          seen.add(key);
          guides.push({ page, axis, at: target / scale });
        }
      }
    };
    collect(nextX, width, xTargets, "x", view.x || 1);
    collect(nextY, height, yTargets, "y", view.y || 1);
    const currentGuides = this.alignmentGuides();
    const sameGuides = currentGuides.length === guides.length && currentGuides.every((guide, index) => guide.axis === guides[index].axis && guide.page === guides[index].page && guide.at === guides[index].at);
    if (!sameGuides)
      this.alignmentGuides.set(guides);
    return { x: nextX, y: nextY };
  }
  _alignmentPair(dragId, page, ignoreOverlay) {
    const key = `${dragId}:${page}:${ignoreOverlay ?? ""}`;
    if (this._alignCache?.key === key)
      return this._alignCache;
    const next = {
      key,
      x: this._alignmentTargets(dragId, page, "x", ignoreOverlay),
      y: this._alignmentTargets(dragId, page, "y", ignoreOverlay)
    };
    this._alignCache = next;
    return next;
  }
  /** Edges and centers of the other blocks on this sheet, plus the sheet center. */
  _alignmentTargets(dragId, page, axis, ignoreOverlay) {
    const targets = [];
    const pushBox = (left, top, width, height) => {
      if (axis === "x") {
        targets.push(left, left + width / 2, left + width);
      } else {
        targets.push(top, top + height / 2, top + height);
      }
    };
    for (const section of this.template().sections ?? []) {
      if (section.id === dragId || isReportPageAnchor(section))
        continue;
      const frame = this.liveFrames()[section.id] ?? section.frame;
      if (!frame || (frame.page ?? 0) !== page)
        continue;
      const boxWidth = Number(frame.width) || 0;
      const boxHeight = Number(frame.height) || 0;
      if (boxWidth <= 0 && boxHeight <= 0)
        continue;
      pushBox(Number(frame.x) || 0, Number(frame.y) || 0, boxWidth, boxHeight);
    }
    if (ignoreOverlay !== "logo" && page === 0 && this.logoEnabled() && this.logoUrl()) {
      pushBox(this.logoX(), this.logoY(), this.logoWidth(), this.logoHeight());
    }
    if (ignoreOverlay !== "signature" && page === (this.signaturePage() || 0) && this.signatureEnabled() && this.signatureImage()) {
      pushBox(this.signatureX(), this.signatureY(), this.signatureWidth(), this.signatureHeight());
    }
    if (ignoreOverlay !== "watermark" && this.watermarkEnabled()) {
      pushBox(this.watermarkX(), this.watermarkY(), this.watermarkWidth(), this.watermarkHeight());
    }
    for (const image of this.sheetImages()) {
      if (ignoreOverlay === this.sheetOverlayId(image.id))
        continue;
      if ((image.page ?? 0) !== page)
        continue;
      pushBox(image.x, image.y, image.width, image.height);
    }
    targets.push(axis === "x" ? this.pageWidthPx() / 2 : this.pageHeightPx() / 2);
    return targets;
  }
  _innerOrigin(inner) {
    const host = inner.getBoundingClientRect();
    const style = getComputedStyle(inner);
    return {
      left: host.left + (parseFloat(style.borderLeftWidth) || 0),
      top: host.top + (parseFloat(style.borderTopWidth) || 0)
    };
  }
  _pageInner(pageIndex) {
    if (this._sheetDragging && this._pageInnerCache.has(pageIndex)) {
      return this._pageInnerCache.get(pageIndex) ?? null;
    }
    const pages = this._reportPages?.toArray() ?? [];
    const ref = pages[pageIndex] ?? pages[0];
    const inner = ref?.nativeElement.querySelector("[data-report-page-inner]") ?? null;
    if (this._sheetDragging)
      this._pageInnerCache.set(pageIndex, inner);
    return inner;
  }
  _pageRects() {
    const pages = this._reportPages?.toArray() ?? [];
    if (!this._sheetDragging) {
      return pages.map((page) => page.nativeElement.getBoundingClientRect());
    }
    const scrollTop = this._dragViewport()?.scrollTop ?? 0;
    if (this._pageRectCache && this._pageRectCache.scrollTop === scrollTop && this._pageRectCache.rects.length === pages.length) {
      return this._pageRectCache.rects;
    }
    const rects = pages.map((page) => page.nativeElement.getBoundingClientRect());
    this._pageRectCache = { scrollTop, rects };
    return rects;
  }
  /** Paper under the pointer; stays on the current sheet until the cursor actually enters another. */
  _pageIndexAtPoint(clientX, clientY, fallback) {
    const hit = this._sheetIndexAtPoint(clientX, clientY);
    return hit == null ? fallback : hit;
  }
  /**
   * Sheet the pointer is on, or one past the last sheet when it has gone below
   * the page. That extra index is what opens the next A4 page. The gap above a
   * sheet counts as the sheet above, so the block does not stick at the top edge.
   */
  _pageForDrag(clientX, clientY, fallback) {
    const rects = this._pageRects();
    const hit = this._sheetIndexAtPoint(clientX, clientY);
    if (hit != null)
      return hit;
    if (!rects.length)
      return fallback;
    const last = rects[rects.length - 1];
    if (clientY > last.bottom && clientX >= last.left - 24 && clientX <= last.right + 24) {
      return rects.length;
    }
    for (let index = 0; index < rects.length; index++) {
      const rect = rects[index];
      const horizontallyNear = clientX >= rect.left - 24 && clientX <= rect.right + 24;
      if (!horizontallyNear || clientY >= rect.top)
        continue;
      const previousBottom = index === 0 ? Number.NEGATIVE_INFINITY : rects[index - 1].bottom;
      if (clientY >= previousBottom)
        return index === 0 ? 0 : index - 1;
    }
    return fallback;
  }
  /** Scrollable sheet list. The visita layout marks it; other editors use the nearest scroller. */
  _dragViewport() {
    const page = this._reportPages?.first?.nativeElement;
    if (!page)
      return null;
    const marked = page.closest("[data-document-viewport]");
    if (marked)
      return marked;
    let node = page.parentElement;
    while (node) {
      const style = getComputedStyle(node);
      const scrolls = /(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 4;
      if (scrolls)
        return node;
      node = node.parentElement;
    }
    return null;
  }
  /**
   * The paper is taller than the editor viewport. Holding the pointer on the
   * edge scrolls the sheet and the next frame keeps the block under the cursor.
   */
  _scrollDragViewport(clientX, clientY) {
    const host = this._dragViewport();
    const drag = this._sectionDrag;
    if (!host || !drag?.active)
      return;
    const edge = 56;
    const step = 18;
    const rect = host.getBoundingClientRect();
    let next = host.scrollTop;
    if (clientY < rect.top + edge)
      next -= step;
    else if (clientY > rect.bottom - edge)
      next += step;
    const max = Math.max(0, host.scrollHeight - host.clientHeight);
    next = Math.min(max, Math.max(0, next));
    if (next === host.scrollTop)
      return;
    host.scrollTop = next;
    this._pageRectCache = null;
    this._scheduleSectionDragPaint();
  }
  _sheetIndexAtPoint(clientX, clientY) {
    const rects = this._pageRects();
    for (let index = 0; index < rects.length; index++) {
      const rect = rects[index];
      if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
        return index;
      }
    }
    return null;
  }
  /** Drop trailing / leading empty sheets and persist 0-based page indexes. */
  _framesForEmit(updates) {
    const merged = {};
    for (const section of this.template().sections ?? []) {
      const frame = this.liveFrames()[section.id] ?? section.frame;
      if (frame)
        merged[section.id] = frame;
    }
    for (const item of updates) {
      merged[item.id] = item.frame;
    }
    return Object.entries(merged).map(([id, frame]) => ({
      id,
      frame
    }));
  }
  /**
   * Layout coordinates of a block inside its page, in the same space that
   * `position:absolute; left/top` uses (the inner padding box).
   *
   * `getBoundingClientRect()` is avoided here: when the first drag pins a
   * flow layout into free placement, viewport rects can include ancestor
   * zoom/scale and send every sibling off the visible sheet.
   */
  _sectionCssBox(el) {
    const inner = el.closest("[data-report-page-inner]");
    const pages = this._reportPages?.toArray() ?? [];
    const page = Math.max(0, pages.findIndex((ref) => ref.nativeElement.contains(el)));
    const width = el.offsetWidth;
    const height = el.offsetHeight;
    if (!inner) {
      return { x: 0, y: 0, width, height, page };
    }
    let x = el.offsetLeft;
    let y = el.offsetTop;
    if (el.offsetParent !== inner) {
      const box = el.getBoundingClientRect();
      const host = inner.getBoundingClientRect();
      const visualScaleX = host.width / (inner.offsetWidth || host.width || 1) || 1;
      const visualScaleY = host.height / (inner.offsetHeight || host.height || 1) || 1;
      const style = getComputedStyle(inner);
      x = (box.left - host.left - (parseFloat(style.borderLeftWidth) || 0)) / visualScaleX;
      y = (box.top - host.top - (parseFloat(style.borderTopWidth) || 0)) / visualScaleY;
    }
    return { x, y, width, height, page };
  }
  _snapshotSectionFrames() {
    const scales = this._scaleFactors;
    const result = [];
    const pages = this._reportPages?.toArray() ?? [];
    pages.forEach((pageRef, pageIndex) => {
      pageRef.nativeElement.querySelectorAll("[data-report-section]").forEach((node) => {
        const el = node;
        const id = el.dataset["sectionId"];
        if (!id)
          return;
        const placed = this._sectionCssBox(el);
        result.push({
          id,
          frame: {
            page: placed.page || pageIndex,
            x: placed.x * scales.x,
            y: placed.y * scales.y,
            width: placed.width * scales.x,
            height: placed.height * scales.y
          }
        });
      });
    });
    return result;
  }
  /** Shapes, rules and spacers keep the size the user drew. Data blocks do not. */
  _locksFrameHeight(section) {
    return section.type === "shape" || section.type === "divider" || section.type === "spacer";
  }
  /**
   * Border-box height of the data inside the block.
   * The host's offsetHeight is the saved frame, so a short block still
   * reports the tall box and the selection ring never tightens.
   */
  _contentBoxHeight(el) {
    let bottom = 0;
    let found = false;
    for (const node of Array.from(el.children)) {
      const child = node;
      if (child.dataset["printHide"] != null || child.dataset["sectionHandle"] != null)
        continue;
      const position = getComputedStyle(child).position;
      if (position === "absolute" || position === "fixed")
        continue;
      found = true;
      bottom = Math.max(bottom, child.offsetTop + child.offsetHeight);
    }
    if (!found)
      return el.offsetHeight;
    const style = getComputedStyle(el);
    return bottom + (parseFloat(style.paddingBottom) || 0) + (parseFloat(style.borderTopWidth) || 0) + (parseFloat(style.borderBottomWidth) || 0);
  }
  /**
   * After the sheet paints, store the content height so the selection ring,
   * drag box and PDF use the same size as the data on the block.
   */
  _scheduleContentFit() {
    if (!this.reorderable() || this.thumbnailMode() || this.printCapture() || this._sectionDrag)
      return;
    if (this._contentFitFrameId !== null)
      cancelAnimationFrame(this._contentFitFrameId);
    this._contentFitFrameId = requestAnimationFrame(() => {
      this._contentFitFrameId = requestAnimationFrame(() => {
        this._contentFitFrameId = null;
        this._fitContentBoxHeights();
      });
    });
  }
  _fitContentBoxHeights() {
    if (this._sectionDrag || this._sectionResize || this._cellResize)
      return;
    if (!this.hasFreeLayout() || !this.reorderable() || this.thumbnailMode())
      return;
    const scales = this._scaleFactors;
    const sections = (this.template().sections ?? []).filter((section) => !isReportPageAnchor(section));
    const byId = new Map(sections.map((section) => [section.id, section]));
    const frames = /* @__PURE__ */ new Map();
    for (const section of sections) {
      const frame = this.displayFrame(section);
      if (frame)
        frames.set(section.id, __spreadValues({}, frame));
    }
    const desired = /* @__PURE__ */ new Map();
    const pages = this._reportPages?.toArray() ?? [];
    for (const pageRef of pages) {
      pageRef.nativeElement.querySelectorAll("[data-report-section]").forEach((node) => {
        const el = node;
        const id = el.dataset["sectionId"];
        if (!id)
          return;
        const section = byId.get(id);
        if (!section || this._locksFrameHeight(section) || this.hugsText(section) || !frames.has(id))
          return;
        const natural = this._contentBoxHeight(el);
        if (!natural)
          return;
        const chosen = Number(frames.get(id)?.minHeight) || 0;
        desired.set(id, Math.max(24, chosen, Math.ceil(natural * scales.y)));
      });
    }
    const growing = [...desired.entries()].flatMap(([id, height]) => {
      const frame = frames.get(id);
      if (!frame)
        return [];
      const current = Number(frame.height) || 0;
      if (Math.abs(height - current) <= 4)
        return [];
      return [{ id, height, current, page: frame.page ?? 0, y: frame.y ?? 0 }];
    }).sort((left, right) => left.page - right.page || left.y - right.y);
    for (const item of growing) {
      const frame = frames.get(item.id);
      if (!frame)
        continue;
      const oldBottom = (frame.y ?? 0) + item.current;
      const delta = item.height - item.current;
      frame.height = item.height;
      if (delta <= 4)
        continue;
      const page = frame.page ?? 0;
      for (const [otherId, other] of frames) {
        if (otherId === item.id || (other.page ?? 0) !== page)
          continue;
        if ((other.y ?? 0) + 8 < oldBottom)
          continue;
        other.y = (other.y ?? 0) + delta;
      }
    }
    const updates = [];
    for (const [id, frame] of frames) {
      const section = byId.get(id);
      const prev = section ? this.displayFrame(section) : null;
      if (!prev)
        continue;
      const changed = Math.abs((Number(prev.height) || 0) - (Number(frame.height) || 0)) > 4 || Math.abs((prev.y ?? 0) - (frame.y ?? 0)) > 1 || (prev.page ?? 0) !== (frame.page ?? 0);
      if (changed)
        updates.push({ id, frame });
    }
    for (const hug of this._huggingTextFrameUpdates(frames)) {
      const index = updates.findIndex((item) => item.id === hug.id);
      if (index >= 0)
        updates[index] = hug;
      else
        updates.push(hug);
    }
    if (!updates.length)
      return;
    if (updates.length === 1) {
      const other = sections.find((section) => section.id !== updates[0].id && frames.has(section.id));
      const otherFrame = other ? frames.get(other.id) : null;
      if (other && otherFrame)
        updates.push({ id: other.id, frame: __spreadValues({}, otherFrame) });
    }
    this.sectionFramesChange.emit(updates);
  }
  /**
   * Header and text blocks shrink to the words. Center and right text keep
   * the edge they were aligned to, so a short title does not jump sideways.
   */
  _huggingTextFrameUpdates(frames) {
    const scales = this._scaleFactors;
    const updates = [];
    const pages = this._reportPages?.toArray() ?? [];
    for (const pageRef of pages) {
      pageRef.nativeElement.querySelectorAll("[data-report-section]").forEach((node) => {
        const el = node;
        const id = el.dataset["sectionId"];
        const type = el.dataset["sectionType"];
        if (!id || type !== "header" && type !== "text")
          return;
        const section = (this.template().sections ?? []).find((item) => item.id === id);
        const stored = section ? this.displayFrame(section) : null;
        const frame = id && frames.get(id) || stored;
        if (!section || !frame || !stored || !el.offsetWidth || !el.offsetHeight)
          return;
        const placed = this._sectionCssBox(el);
        const inner = el.closest("[data-report-page-inner]");
        let cssX = placed.x;
        const align = this.roleTextAlign(section, "title");
        const shifted = !this.sectionRotation(section) && inner != null && el.offsetParent === inner && (align === "center" || align === "right");
        if (shifted && align === "center")
          cssX -= placed.width / 2;
        else if (shifted)
          cssX -= placed.width;
        const x = Math.round(cssX * scales.x);
        const width = Math.max(1, Math.round(placed.width * scales.x));
        const height = Math.max(1, Math.round(placed.height * scales.y));
        const changed = Math.abs((Number(stored.x) || 0) - x) > 2 || Math.abs((Number(stored.width) || 0) - width) > 2 || Math.abs((Number(stored.height) || 0) - height) > 2 || Math.abs((Number(stored.y) || 0) - (Number(frame.y) || 0)) > 1 || stored.minHeight != null;
        if (!changed)
          return;
        const next = __spreadProps(__spreadValues({}, frame), { x, width, height });
        delete next.minHeight;
        updates.push({ id, frame: next });
      });
    }
    return updates;
  }
  /**
   * New reports add endpoint blocks without saved frames (flow layout).
   * Saved templates already have frames, which is why editing those feels
   * stable. Capture the stacked layout after pagination so the first drag
   * is the same as opening a stored template.
   */
  _scheduleAutoPinMissingFrames() {
    if (!this.reorderable() || this.thumbnailMode() || this._sectionDrag)
      return;
    const sections = this.template().sections ?? [];
    if (!sections.length || sections.every((section) => Boolean(this.displayFrame(section)))) {
      this._autoPinAttempts = 0;
      return;
    }
    if (this._autoPinAttempts > 8)
      return;
    if (this._autoPinFrameId !== null)
      cancelAnimationFrame(this._autoPinFrameId);
    this._autoPinFrameId = requestAnimationFrame(() => {
      this._autoPinFrameId = requestAnimationFrame(() => {
        this._autoPinFrameId = null;
        this._autoPinMissingFrames();
      });
    });
  }
  _autoPinMissingFrames() {
    if (this._sectionDrag || !this.reorderable() || this.thumbnailMode())
      return;
    const sections = this.template().sections ?? [];
    if (!sections.length || sections.every((section) => Boolean(this.displayFrame(section)))) {
      this._autoPinAttempts = 0;
      return;
    }
    const pinned = this._snapshotSectionFrames();
    if (!pinned.length) {
      this._autoPinAttempts += 1;
      this._scheduleAutoPinMissingFrames();
      return;
    }
    const byId = new Map(pinned.map((item) => [item.id, item.frame]));
    const missing = sections.filter((section) => !this.displayFrame(section) && byId.has(section.id));
    if (!missing.length) {
      this._autoPinAttempts += 1;
      this._scheduleAutoPinMissingFrames();
      return;
    }
    this._autoPinAttempts = 0;
    this.sectionFramesChange.emit(this._framesBelowPlacedContent(missing, byId));
  }
  /**
   * A block added beside framed ones used to be pushed under the previous
   * block. Keep the measured spot so a later block is not locked below an earlier one.
   */
  _framesBelowPlacedContent(missing, measured) {
    return missing.map((section) => ({ id: section.id, frame: measured.get(section.id) }));
  }
  /**
   * Freeze every block at its current on-sheet position before the first
   * free-move. Without this, only the dragged block gets a frame and the
   * rest jump into absolute layout with (0,0) or viewport-scaled coords.
   */
  _pinFlowLayout(dragId) {
    const pinned = this._snapshotSectionFrames();
    const merged = __spreadValues({}, this.liveFrames());
    for (const section of this.template().sections ?? []) {
      const current = merged[section.id] ?? section.frame;
      if (current) {
        merged[section.id] = current;
      }
    }
    for (const item of pinned) {
      if (!merged[item.id]) {
        merged[item.id] = item.frame;
        this._pinnedIdsThisDrag.add(item.id);
      }
    }
    const start = merged[dragId] ?? pinned.find((item) => item.id === dragId)?.frame ?? null;
    if (!start)
      return null;
    merged[dragId] = start;
    this.liveFrames.set(merged);
    return start;
  }
  _stopSectionDragListeners() {
    window.removeEventListener("pointermove", this._onWindowSectionMove);
    window.removeEventListener("pointerup", this._onWindowSectionUp, true);
    window.removeEventListener("pointercancel", this._onWindowSectionUp, true);
    this._flushSectionDragRaf();
    this._flushSectionResizeRaf();
    this._flushSectionRotateRaf();
    this._pendingDragPoint = null;
  }
  _clearSectionDrag() {
    this._stopSectionDragListeners();
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
    this._sectionDrag = null;
    this._pinnedIdsThisDrag.clear();
    this.draggingSectionId.set(null);
    this._groupDragIds.set([]);
    this.alignmentGuides.set([]);
    this.liveFrames.set({});
  }
  onSectionContextMenu(section, event) {
    if (!this.clickable() || !this.customContextMenu() || this._sectionLocked(section))
      return;
    event.preventDefault();
    event.stopPropagation();
    this.sectionClick()?.(section);
    this.sectionContextMenu.emit({ section, x: event.clientX, y: event.clientY });
  }
  onOverlayContextMenu(id, event) {
    if (!this.clickable() || !this.customContextMenu() || this.isLayerLocked(id))
      return;
    event.preventDefault();
    event.stopPropagation();
    this.overlaySelect.emit(id);
    this.overlayContextMenu.emit({ overlay: id, x: event.clientX, y: event.clientY });
  }
  /**
   * Effective top padding applied to the section content area, in canonical 96 DPI px.
   *
   * Behaviour: explicit wins.
   * - When `bodyTopPadding` > 0, the slider value is used directly (auto-fit is ignored).
   * - When `bodyTopPadding` is 0 and auto-fit is on with a visible logo overlay, the
   *   content is pushed down to clear the logo (`logoY + logoHeight + 16`).
   * - Otherwise 0.
   */
  get effectiveContentPaddingTop() {
    const base = this.bodyTopPadding() || 0;
    if (base > 0)
      return base;
    if (this.logoEnabled() && this.logoAutoFitContent() && this.logoUrl()) {
      return (this.logoY() || 0) + (this.logoHeight() || 0) + 16;
    }
    return 0;
  }
  /** Same as `effectiveContentPaddingTop` but scaled down to the on-screen preview. */
  get viewContentPaddingTop() {
    return this.effectiveContentPaddingTop / this._scaleFactors.y;
  }
  startHeaderLogoMove(event, id) {
    if (!this.clickable() || event.button !== 0 || this.isLayerLocked(`hdr:${id}`))
      return;
    if (event.target?.closest("[data-overlay-handle]"))
      return;
    event.stopPropagation();
    const placed = placeCompanyLogos(this.template()?.headerLogos ?? [], this.pageWidthPx(), this.pageHeightPx()).find((logo) => logo.id === id);
    if (!placed)
      return;
    this.selectOverlay(`hdr:${id}`, event);
    const source = (this.template()?.headerLogos ?? []).find((logo) => logo.id === id);
    this._headerDrag = {
      id,
      pointerId: event.pointerId,
      startClientX: event.clientX,
      originX: placed.x,
      width: placed.width,
      band: companyLogoBand(source)
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  onHeaderLogoMove(event) {
    const drag = this._headerDrag;
    if (!drag || event.pointerId !== drag.pointerId)
      return;
    const page = event.currentTarget.closest("[data-report-page]");
    const rect = page?.getBoundingClientRect();
    const scale = rect?.width ? this.pageWidthPx() / rect.width : 1;
    const next = drag.originX + (event.clientX - drag.startClientX) * scale;
    const min = HEADER_LOGO_INSET;
    const max = Math.max(min, this.pageWidthPx() - HEADER_LOGO_INSET - drag.width);
    this.headerLogoDragX.set({
      id: drag.id,
      x: Math.min(max, Math.max(min, next)),
      band: drag.band
    });
  }
  stopHeaderLogoMove(event) {
    const drag = this._headerDrag;
    if (!drag || event.pointerId !== drag.pointerId)
      return;
    const live = this.headerLogoDragX();
    const x = live?.id === drag.id ? live.x : drag.originX;
    const align = headerLogoAlignAt(x + drag.width / 2, this.pageWidthPx());
    this._headerDrag = null;
    this.headerLogoDragX.set(null);
    this.headerLogoAlignChange.emit({ id: drag.id, align, band: drag.band });
  }
  startHeaderLogoResize(event, id) {
    if (!this.clickable() || event.button !== 0 || this.isLayerLocked(`hdr:${id}`))
      return;
    event.stopPropagation();
    event.preventDefault();
    const logo = (this.template()?.headerLogos ?? []).find((item) => item.id === id);
    if (!logo)
      return;
    this.selectOverlay(`hdr:${id}`, event);
    this._headerResize = {
      id,
      pointerId: event.pointerId,
      startClientY: event.clientY,
      width: logo.width,
      height: logo.height
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  onHeaderLogoResize(event) {
    const drag = this._headerResize;
    if (!drag || event.pointerId !== drag.pointerId)
      return;
    const page = event.currentTarget.closest("[data-report-page]");
    const rect = page?.getBoundingClientRect();
    const scale = rect?.height ? this.pageHeightPx() / rect.height : 1;
    const next = fitHeaderLogoSize(drag.width, drag.height, drag.height + (event.clientY - drag.startClientY) * scale);
    this.headerLogoResize.set({ id: drag.id, width: next.width, height: next.height });
  }
  stopHeaderLogoResize(event) {
    const drag = this._headerResize;
    if (!drag || event.pointerId !== drag.pointerId)
      return;
    const live = this.headerLogoResize();
    const size = live?.id === drag.id ? { width: live.width, height: live.height } : fitHeaderLogoSize(drag.width, drag.height);
    this._headerResize = null;
    this.headerLogoResize.set(null);
    this.headerLogoSizeChange.emit({ id: drag.id, width: size.width, height: size.height });
  }
  startMove(event, target) {
    if (!this.clickable() || this.isResizing || this.isRotating || event.button !== 0 || this.isLayerLocked(target))
      return;
    const origin = event.target;
    if (origin?.closest("[data-overlay-handle]"))
      return;
    const keepGroup = this.selectedOverlay() === target || this.selectedOverlayIds().includes(target);
    if (keepGroup) {
      const sections = this._selectedSectionStarts();
      const overlays = this._groupOverlayMates(target);
      const image = this._sheetImage(this._sheetImageId(target));
      const startPage = target === "signature" ? this.signaturePage() || 0 : image ? image.page ?? 0 : 0;
      this._groupShift = sections.length || overlays.length ? { startPage, sections, overlays } : null;
    } else {
      this._groupShift = null;
    }
    this.overlaySelect.emit(target);
    this.isMoving = true;
    this._setSheetDragging(true);
    this.moveTarget = target;
    this._movePage = this._pageIndexAtPoint(event.clientX, event.clientY, 0);
    this.startX = event.clientX;
    this.startY = event.clientY;
    const extra = this._sheetImage(this._sheetImageId(target));
    if (target === "signature" || extra) {
      const page = extra ? Math.max(0, extra.page ?? 0) : Math.max(0, this.signaturePage() || 0);
      this._movePage = page;
      const local = this._sheetLocalPoint(event.clientX, event.clientY, page);
      const width = extra ? extra.width : this.signatureWidth();
      const height = extra ? extra.height : this.signatureHeight();
      const x = extra ? extra.x : this.signatureX();
      const y = extra ? extra.y : this.signatureY();
      this._overlayGrab = local ? { dx: local.x - x, dy: local.y - y } : { dx: width / 2, dy: height / 2 };
      this.startMoveX = x;
      this.startMoveY = y;
      this._capturePointer(event, this.onMove, this.stopMove, false);
      return;
    }
    this._overlayGrab = null;
    if (target === "logo") {
      this.startMoveX = this.logoX();
      this.startMoveY = this.logoY();
    } else if (target === "watermark") {
      this.startMoveX = this.watermarkX();
      this.startMoveY = this.watermarkY();
    } else {
      this.startMoveX = this.signatureX();
      this.startMoveY = this.signatureY();
    }
    this._capturePointer(event, this.onMove, this.stopMove);
  }
  _overlayBox(target) {
    if (target === "logo")
      return { width: this.logoWidth(), height: this.logoHeight() };
    if (target === "watermark")
      return { width: this.watermarkWidth(), height: this.watermarkHeight() };
    if (target === "signature")
      return { width: this.signatureWidth(), height: this.signatureHeight() };
    const image = this._sheetImage(this._sheetImageId(target));
    if (!image)
      return null;
    return { width: image.width, height: image.height };
  }
  _pagedOverlayMoveAt(clientX, clientY) {
    const moving = this.moveTarget;
    const extra = this._sheetImage(this._sheetImageId(moving));
    const box = this._overlayBox(moving ?? "signature") ?? { width: 160, height: 64 };
    const pages = this._reportPages?.toArray() ?? [];
    const last = Math.max(0, pages.length - 1);
    const hit = this._sheetIndexAtPoint(clientX, clientY);
    const page = Math.max(0, Math.min(last, hit == null ? this._movePage : hit));
    const local = this._sheetLocalPoint(clientX, clientY, page);
    const grab = this._overlayGrab ?? { dx: 0, dy: 0 };
    let x = local ? local.x - grab.dx : this.startMoveX;
    let y = local ? local.y - grab.dy : this.startMoveY;
    const clamped = extra ? this._clampOverlay(x, y, box.width, box.height) : this._clampOverlay(x, y, this.signatureWidth(), this.signatureHeight());
    this._movePage = page;
    return { x: clamped.x, y: clamped.y, page };
  }
  _sheetLocalPoint(clientX, clientY, pageIndex) {
    const el = this._reportPages?.toArray()[pageIndex]?.nativeElement;
    if (!el)
      return null;
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height)
      return null;
    const scales = this._pointerScaleFactors;
    return {
      x: (clientX - rect.left) * scales.x,
      y: (clientY - rect.top) * scales.y
    };
  }
  _clampOverlay(x, y, width, height) {
    const keep = 48;
    const pageW = this.pageWidthPx();
    const pageH = this.pageHeightPx();
    return {
      x: Math.round(Math.min(Math.max(0, x), Math.max(0, pageW - Math.min(width, keep)))),
      y: Math.round(Math.min(Math.max(0, y), Math.max(0, pageH - Math.min(height, keep))))
    };
  }
  _emitMove(payload) {
    const moving = this.moveTarget;
    const box = moving ? this._overlayBox(moving) : null;
    if (moving && box) {
      const snapped = this._alignDragBox("", this._movePage, payload.x, payload.y, box.width, box.height, moving);
      const clamped = moving === "signature" || this._sheetImageId(moving) ? this._clampOverlay(snapped.x, snapped.y, box.width, box.height) : { x: Math.round(snapped.x), y: Math.round(snapped.y) };
      payload = {
        x: clamped.x,
        y: clamped.y,
        page: moving === "signature" || this._sheetImageId(moving) ? payload.page ?? this._movePage : void 0
      };
    }
    if (this._groupShift) {
      const dx = payload.x - this.startMoveX;
      const dy = payload.y - this.startMoveY;
      const dPage = payload.page == null ? 0 : (payload.page ?? this._movePage) - this._groupShift.startPage;
      this._shiftGroupSections(dx, dy, dPage);
      this._moveOverlayMates(this._groupShift.overlays, dx, dy, dPage);
    }
    const extraId = this._sheetImageId(this.moveTarget);
    const extra = this._sheetImage(extraId);
    if (this.moveTarget === "logo") {
      this.logoPositionChange.emit(payload);
    } else if (this.moveTarget === "watermark") {
      this.watermarkPositionChange.emit(payload);
    } else if (extra) {
      this.sheetImageChange.emit(__spreadProps(__spreadValues({}, extra), {
        x: payload.x,
        y: payload.y,
        page: payload.page ?? extra.page ?? 0
      }));
    } else {
      this.signaturePositionChange.emit(payload);
    }
  }
  startResize(event, target = "signature") {
    if (event.button !== 0 || this.isLayerLocked(target))
      return;
    this.isResizing = true;
    this._setSheetDragging(true);
    this.resizeTarget = target;
    this.startX = event.clientX;
    this.startY = event.clientY;
    const extra = this._sheetImage(this._sheetImageId(target));
    if (target === "logo") {
      this.startWidth = this.logoWidth();
      this.startHeight = this.logoHeight();
    } else if (target === "watermark") {
      this.startWidth = this.watermarkWidth();
      this.startHeight = this.watermarkHeight();
    } else if (extra) {
      this.startWidth = extra.width;
      this.startHeight = extra.height;
    } else {
      this.startWidth = this.signatureWidth();
      this.startHeight = this.signatureHeight();
    }
    this._capturePointer(event, this.onResize, this.stopResize);
  }
  startRotate(event, target) {
    if (event.button !== 0 || this.isLayerLocked(target))
      return;
    const box = event.currentTarget.closest("[data-overlay-box]");
    if (!box)
      return;
    const rect = box.getBoundingClientRect();
    this.isRotating = true;
    this._setSheetDragging(true);
    this.rotateTarget = target;
    this.rotateCenterX = rect.left + rect.width / 2;
    this.rotateCenterY = rect.top + rect.height / 2;
    this.startAngle = Math.atan2(event.clientY - this.rotateCenterY, event.clientX - this.rotateCenterX);
    const extra = this._sheetImage(this._sheetImageId(target));
    this.startRotation = target === "logo" ? this.logoRotation() : extra ? extra.rotation || 0 : this.watermarkRotation();
    this._capturePointer(event, this.onRotate, this.stopRotate);
  }
  _emitResize(payload) {
    const extra = this._sheetImage(this._sheetImageId(this.resizeTarget));
    if (this.resizeTarget === "logo") {
      this.logoSizeChange.emit(payload);
    } else if (this.resizeTarget === "watermark") {
      this.watermarkSizeChange.emit(payload);
    } else if (extra) {
      this.sheetImageChange.emit(__spreadProps(__spreadValues({}, extra), { width: payload.width, height: payload.height }));
    } else {
      this.signatureSizeChange.emit(payload);
    }
  }
  _capturePointer(event, move, stop, captureElement = true) {
    event.preventDefault();
    event.stopPropagation();
    const el = event.currentTarget;
    this.gestureEl = captureElement ? el : null;
    this.gesturePointerId = captureElement ? event.pointerId : null;
    if (captureElement) {
      try {
        el?.setPointerCapture(event.pointerId);
      } catch {
      }
    }
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop, true);
    window.addEventListener("pointercancel", stop, true);
  }
  _releasePointer(move, stop) {
    if (this.gestureEl && this.gesturePointerId != null) {
      try {
        this.gestureEl.releasePointerCapture(this.gesturePointerId);
      } catch {
      }
    }
    this.gestureEl = null;
    this.gesturePointerId = null;
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", stop, true);
    window.removeEventListener("pointercancel", stop, true);
  }
  ngOnDestroy() {
    this._host.nativeElement.removeEventListener("pointerdown", this._onLockedLayerPointerDown, true);
    this._host.nativeElement.removeEventListener("pointerdown", this._onMarqueePointerDownCapture, true);
    this._removeMarqueeEl();
    this.stopResize();
    this.stopRotate();
    this.stopMove();
    this._clearSectionDrag();
    if (this._autoPinFrameId !== null) {
      cancelAnimationFrame(this._autoPinFrameId);
      this._autoPinFrameId = null;
    }
    if (this._contentFitFrameId !== null) {
      this._host.nativeElement.removeEventListener("pointerdown", this._onHostPointerDownCapture, true);
      cancelAnimationFrame(this._contentFitFrameId);
      this._contentFitFrameId = null;
    }
  }
  resolveDataPath(path) {
    if (!path)
      return "";
    const source = this.previewData();
    const parts = path.split(".");
    let current = source;
    for (const part of parts) {
      if (current == null || typeof current !== "object")
        return "";
      current = current[part];
    }
    if (current == null)
      return "";
    if (typeof current === "object")
      return formatReportCellValue(current);
    return String(current);
  }
  resolveTableData(section) {
    return this.structuralEntries(section);
  }
  /**
   * The consulted value. A `keyOverrides[key].value` left by older templates is
   * ignored, as the PDF ignores it: values change with every query.
   */
  boundValue(_section, _key, fallback) {
    if (fallback == null)
      return "";
    if (typeof fallback === "object")
      return formatReportCellValue(fallback);
    return String(fallback);
  }
  pagePaintTrack(pageIndex) {
    return `${pageIndex}:${String(this.previewData()?.["rowIndex"] ?? "")}`;
  }
  liveSheetText(section, kind, key, fallback) {
    this.previewData();
    if (kind === "title")
      return section.staticContent || section.label || fallback || "";
    if (kind === "body")
      return section.staticContent || fallback || "";
    if (kind === "itemTitle")
      return section.itemTitle || fallback || "";
    if (kind === "itemTemplate")
      return section.itemTemplate || fallback || "";
    if (kind === "cellLabel" && key) {
      return this.entryLabel(section, { key, label: fallback || key });
    }
    if (kind === "cellValue") {
      return this.boundValue(section, key || "__value", this._liveValueForKey(section, key, fallback));
    }
    return fallback || "";
  }
  /** `liveSheetText` with the role's letter case; inline editing keeps the stored text. */
  sheetDisplayText(section, kind, key, fallback) {
    return applyTextCase(this.liveSheetText(section, kind, key, fallback), this._sheetTextCase(section, kind, key));
  }
  /**
   * Cell keys look like `table.column#row`. The column's own case wins, then the
   * nested table's, then the block's role, the same order the PDF merges them.
   */
  _sheetTextCase(section, kind, key) {
    const role = kind === "cellLabel" || kind === "title" && section.type === "field" ? "label" : kind === "title" || kind === "itemTitle" || kind === "body" && section.type === "text" ? "title" : "value";
    if (role !== "title" && key) {
      const styleKey = role === "label" ? "labelStyle" : "valueStyle";
      let path = key.split("#")[0];
      while (path) {
        const own = section.keyOverrides?.[path]?.[styleKey]?.textCase;
        if (isReportTextCase(own))
          return own;
        const dot = path.lastIndexOf(".");
        path = dot > 0 ? path.slice(0, dot) : "";
      }
    }
    return resolveTextRole(section, role, this.primaryColor()).textCase;
  }
  _liveValueForKey(section, key, fallback) {
    if (!key || key === "__value") {
      return this.resolveDataPath(section.dataPath) || fallback || "\u2014";
    }
    const hash = key.lastIndexOf("#");
    if (hash > 0) {
      const storeKey = key.slice(0, hash);
      const rowIndex = Number(key.slice(hash + 1));
      if (Number.isFinite(rowIndex) && rowIndex >= 0) {
        const records = this.structuralRecords(section);
        if (records[rowIndex] && storeKey in records[rowIndex]) {
          return records[rowIndex][storeKey];
        }
        for (const chunk of this.sheetChunks(section)) {
          if (chunk.kind !== "table")
            continue;
          const column = chunk.table.columns.find((item) => item.key === storeKey || this.tableColumnKey(chunk.table.key, item.key) === storeKey);
          if (!column)
            continue;
          const row = chunk.table.rows[rowIndex];
          if (row)
            return row[column.key];
        }
      }
    }
    const entry = this.structuralEntries(section).find((item) => item.key === key);
    return entry?.value ?? fallback;
  }
  cellStoreKey(base, rowIndex) {
    return `${base}#${rowIndex}`;
  }
  _humanize(key) {
    return key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").replace(/^./, (s) => s.toUpperCase()).trim();
  }
  // ============================================
  // STRUCTURAL RENDERING
  // ============================================
  //
  // The rich section types are rendered exactly by the backend, which the builder
  // shows in an iframe. The canvas only needs enough of each block to select,
  // reorder and position it, so these helpers deliberately return an outline
  // rather than trying to reproduce the printed output.
  /** Raw value at a path, as opposed to `resolveDataPath`'s display string. */
  _valueAt(path) {
    if (!path)
      return null;
    let current = this.previewData();
    for (const part of path.split(".")) {
      if (current == null || typeof current !== "object")
        return null;
      if (Object.prototype.hasOwnProperty.call(current, part)) {
        current = current[part];
        continue;
      }
      if (/^\d+$/.test(part) && current[Number(part)] !== void 0) {
        current = current[Number(part)];
        continue;
      }
      return null;
    }
    return current ?? null;
  }
  /** Records behind a `dataTable` or `repeater`, normalizing a lone object. */
  structuralRecords(section) {
    const value = this._valueAt(section.dataPath);
    if (Array.isArray(value)) {
      return value.filter((entry) => entry && typeof entry === "object");
    }
    return value && typeof value === "object" ? [value] : [];
  }
  /** Declared columns, or the ones the backend would derive from the records. */
  structuralColumns(section) {
    const hidden = new Set(section.hiddenKeys ?? []);
    if (section.columns?.length) {
      return section.columns.filter((column) => !hidden.has(column.key)).map((column) => ({
        key: column.key,
        label: column.label || this._humanize(column.key)
      }));
    }
    const records = this.structuralRecords(section);
    const keys = [];
    for (const record of records) {
      for (const key of Object.keys(record)) {
        if (!keys.includes(key))
          keys.push(key);
      }
    }
    const columns = keys.filter((key) => !hidden.has(key));
    const capped = this.fullContent() ? columns : columns.slice(0, section.maxColumns || 6);
    return capped.map((key) => ({ key, label: this._humanize(key) }));
  }
  /** Two rows are enough to show shape without reproducing the document. */
  structuralSampleRows(section) {
    const columns = this.structuralColumns(section);
    const records = this.structuralRecords(section);
    const shown = this.fullContent() ? records : records.slice(0, 2);
    return shown.map((record) => columns.map((column) => {
      const value = record[column.key];
      if (value == null)
        return "\u2014";
      return typeof value === "object" ? formatReportCellValue(value) : String(value);
    }));
  }
  onCellActivate(section, key, part, event) {
    event.stopPropagation();
    if (!this.clickable() || this._sectionDragMoved || this._cellDragMoved || this._sectionLocked(section))
      return;
    this.cellSelect.emit({ section, key, part });
  }
  onCellContextMenu(section, key, event) {
    if (!this.clickable() || !this.customContextMenu() || this._sectionLocked(section))
      return;
    event.preventDefault();
    event.stopPropagation();
    this.sectionClick()?.(section);
    this.cellSelect.emit({ section, key, part: "cell" });
    this.cellContextMenu.emit({ section, key, x: event.clientX, y: event.clientY });
  }
  onCellPointerDown(section, key, event) {
    if (!this.clickable() || !this.reorderable() || event.button !== 0 || this._sectionLocked(section))
      return;
    if (event.target?.closest("[data-inline-edit]"))
      return;
    event.stopPropagation();
    this._clearSectionDrag();
    this._cellDragMoved = false;
    this._cellDrag = {
      section,
      key,
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      extract: true
    };
    window.addEventListener("pointermove", this._onWindowCellMove);
    window.addEventListener("pointerup", this._onWindowCellUp, true);
    window.addEventListener("pointercancel", this._onWindowCellUp, true);
  }
  isCellSelected(section, key, part) {
    if (!this.clickable() || this.selectedSectionId() !== section.id)
      return false;
    if (this.selectedCellKey() !== key)
      return false;
    if (!part)
      return true;
    return this.selectedCellPart() === part;
  }
  entryLabel(section, entry) {
    return section.keyOverrides?.[entry.key]?.label || entry.label;
  }
  tableLabel(section, table) {
    return section.keyOverrides?.[table.key]?.label || table.label;
  }
  tableFill(section, key) {
    return section.keyOverrides?.[key]?.backgroundColor || "#fffbeb";
  }
  tableEdge(section, key) {
    return `color-mix(in srgb, ${this.tableFill(section, key)} 62%, #000000)`;
  }
  tableHeaderFill(section, key) {
    return `color-mix(in srgb, ${this.tableFill(section, key)} 82%, #000000)`;
  }
  tableShowsBadge(section, key) {
    return section.keyOverrides?.[key]?.showTableBadge !== false;
  }
  tableColumnKey(tableKey, column) {
    return tableColumnPath(tableKey, column);
  }
  tableText(section, role, tableKey, column) {
    const base = resolveTextRole(section, role, this.primaryColor(), tableKey);
    const fonts = this.template()?.customFonts ?? [];
    const snap = (family, weight) => nearestFontWeight(availableFontWeights(family, fonts), fontWeightStep(weight));
    if (!column)
      return __spreadProps(__spreadValues({}, base), { fontWeight: snap(base.fontFamily, base.fontWeight) });
    const columnKey = tableColumnPath(tableKey, column);
    const nested = role === "label" ? section.keyOverrides?.[columnKey]?.labelStyle : section.keyOverrides?.[columnKey]?.valueStyle;
    if (!nested)
      return __spreadProps(__spreadValues({}, base), { fontWeight: snap(base.fontFamily, base.fontWeight) });
    const size = Number(nested.fontSize);
    const align = nested.textAlign;
    const fontFamily = nested.fontFamily || base.fontFamily;
    return {
      fontFamily,
      fontSize: Number.isFinite(size) && size > 0 ? size : base.fontSize,
      fontWeight: snap(fontFamily, nested.fontWeight || base.fontWeight),
      fontStyle: nested.fontStyle || base.fontStyle,
      textDecoration: nested.textDecoration || base.textDecoration,
      textAlign: align === "left" || align === "center" || align === "right" || align === "justify" ? align : base.textAlign,
      color: nested.color || base.color
    };
  }
  shapeKind(section) {
    const value = section.shape || section.staticContent;
    if (value === "rectangle" || value === "square" || value === "circle" || value === "star" || value === "triangle" || value === "diamond" || value === "bullet" || value === "icon" || value === "line") {
      return value;
    }
    return "rectangle";
  }
  /** A line shape paints only its stroke: `rowLineWidth` / `rowLineStyle`, colored like a shape fill. */
  lineStroke(section) {
    const width = Math.max(1, Math.min(12, Math.round(Number(section.rowLineWidth) || 1)));
    const style = section.rowLineStyle === "dashed" || section.rowLineStyle === "dotted" ? section.rowLineStyle : "solid";
    return `${width}px ${style} ${this.shapeFill(section)}`;
  }
  /** A divider section paints a horizontal rule with configurable thickness, style and color. */
  dividerBorderTop(section) {
    const width = Math.max(1, Math.min(12, Math.round(Number(section.rowLineWidth) || 1)));
    const style = section.rowLineStyle === "dashed" || section.rowLineStyle === "dotted" ? section.rowLineStyle : "solid";
    return `${width}px ${style} ${section.style?.color || "#E5E7EB"}`;
  }
  /** Vertical margin (px) on each side of a divider. Falls back to 4px when not configured. */
  dividerMargin(section) {
    const v = Number(section.style?.padding);
    return Number.isFinite(v) && v >= 0 ? v : 4;
  }
  /**
   * `iconSvg` was cleaned by `sanitizeIconSvg` when inserted; the server cleans it
   * again before printing. Coloring only rewrites paint attributes.
   */
  iconMarkup(section) {
    if (!section.iconSvg)
      return null;
    const markup = colorIconSvg(section.iconSvg, this.shapeFill(section), Boolean(section.iconKeepColors));
    let safe = this._iconMarkupCache.get(markup);
    if (!safe) {
      if (this._iconMarkupCache.size > 200)
        this._iconMarkupCache.clear();
      safe = this._domSanitizer.bypassSecurityTrustHtml(markup);
      this._iconMarkupCache.set(markup, safe);
    }
    return safe;
  }
  shapeKeepRatio(section) {
    const kind = this.shapeKind(section);
    return kind !== "rectangle" && kind !== "line";
  }
  shapeRotateStyle(section) {
    const rotation = this.sectionRotation(section);
    return rotation ? `rotate(${rotation}deg)` : "none";
  }
  shapeFill(section) {
    if (section.ruleField && section.valueRules?.length) {
      const root = this.previewData();
      const sections = this.template()?.sections ?? [];
      const value = resolveShapeRuleValue(section, root, sections);
      const rule = matchValueRule(section.valueRules, value);
      if (rule?.color)
        return rule.color;
    }
    return section.style?.color || section.style?.backgroundColor || this.primaryColor();
  }
  /** Conditional-format rule that applies to a value cell, if any. */
  cellRule(section, kind, key, fallback) {
    if (kind !== "cellValue")
      return null;
    const rules = keyValueRules(section, (key || "__value").split("#")[0]);
    if (!rules.length)
      return null;
    const raw = this._liveValueForKey(section, key, fallback);
    const forMatch = raw != null && typeof raw === "object" ? formatReportCellValue(raw) : raw ?? fallback ?? "";
    return matchValueRule(rules, forMatch);
  }
  ruleBadge(rule) {
    const markup = ruleIconMarkup(rule);
    if (!markup)
      return null;
    let safe = this._iconMarkupCache.get(markup);
    if (!safe) {
      if (this._iconMarkupCache.size > 200)
        this._iconMarkupCache.clear();
      safe = this._domSanitizer.bypassSecurityTrustHtml(markup);
      this._iconMarkupCache.set(markup, safe);
    }
    return safe;
  }
  shapeStroke(section) {
    return Number(section.style?.borderWidth) > 0 ? section.style?.borderColor || "#111827" : "none";
  }
  shapeStrokeWidth(section) {
    const width = Number(section.style?.borderWidth);
    return width > 0 ? Math.max(1, Math.round(width)) : 0;
  }
  /**
   * Rectangle corner on one axis of the 0-100 shape viewBox. Rectangles stretch
   * that box to the frame, so each axis gets its own radius to keep the corner
   * circular. Past half the short side the shape becomes a pill.
   */
  shapeRectRadius(section, axis = "x") {
    const kind = this.shapeKind(section);
    const raw = section.style?.borderRadius;
    const radius = Number(raw);
    if (raw == null || !Number.isFinite(radius) || radius < 0)
      return kind === "square" ? 4 : 2;
    const frame = this.displayFrame(section);
    const frameWidth = Math.max(12, Number(frame?.width) || 96);
    const frameHeight = Math.max(12, Number(frame?.height) || frameWidth);
    const stretched = kind === "rectangle";
    const boxWidth = stretched ? frameWidth : Math.min(frameWidth, frameHeight);
    const boxHeight = stretched ? frameHeight : boxWidth;
    const corner = Math.min(radius, boxWidth * 0.48, boxHeight * 0.48);
    return corner * 100 / (axis === "x" ? boxWidth : boxHeight);
  }
  cellBackground(section, key) {
    return section.keyOverrides?.[key]?.backgroundColor || "";
  }
  cellHasBox(section, key) {
    return Number(section.keyOverrides?.[key]?.borderWidth ?? 0) > 0;
  }
  cellBorder(section, key) {
    if (!this.cellHasBox(section, key))
      return "none";
    const override = section.keyOverrides?.[key];
    const width = Math.max(1, Math.round(Number(override?.borderWidth ?? 1)));
    return `${width}px solid ${override?.borderColor || "#d6d3d1"}`;
  }
  cellRadius(section, key) {
    const explicit = Number(section.keyOverrides?.[key]?.borderRadius);
    if (Number.isFinite(explicit) && explicit >= 0)
      return explicit;
    return this.cellHasBox(section, key) ? 8 : 0;
  }
  _cellSize(section, key) {
    const live = this.liveCellSizes()[`${section.id}|${key}`];
    if (live)
      return live;
    const override = section.keyOverrides?.[key];
    return { colSpan: override?.colSpan, minHeight: override?.minHeight, width: override?.width };
  }
  /** `grid-column` for a field cell that covers more than one column. */
  cellGridColumn(section, key) {
    const columns = Math.max(1, section.columnsPerRow || 2);
    const span = Math.min(columns, Math.round(Number(this._cellSize(section, key).colSpan) || 1));
    return span > 1 ? `span ${span} / span ${span}` : null;
  }
  cellMinHeight(section, key) {
    const value = Number(this._cellSize(section, key).minHeight);
    return value > 0 ? value / this._scaleFactors.y : null;
  }
  columnWidth(section, key) {
    const value = Number(this._cellSize(section, key).width);
    return value > 0 ? value / this._scaleFactors.x : null;
  }
  /**
   * Drag a cell edge. `x` snaps a field cell to whole grid columns, `y` sets
   * its height, `w` sets a table column width.
   */
  startCellResize(section, key, axis, event) {
    if (!this.clickable() || event.button !== 0 || this._sectionLocked(section))
      return;
    event.preventDefault();
    event.stopPropagation();
    const cell = event.currentTarget?.closest(axis === "w" ? "th" : "[data-report-cell]");
    if (!cell)
      return;
    this._clearSectionDrag();
    const rect = cell.getBoundingClientRect();
    const columns = Math.max(1, section.columnsPerRow || 2);
    let columnWidth = rect.width;
    let gap = 0;
    const grid = cell.parentElement;
    if (axis === "x" && grid) {
      const gridRect = grid.getBoundingClientRect();
      const ratio = grid.offsetWidth ? gridRect.width / grid.offsetWidth : 1;
      gap = (parseFloat(getComputedStyle(grid).columnGap) || 0) * ratio;
      columnWidth = (gridRect.width - gap * (columns - 1)) / columns;
    }
    this._cellResize = {
      sectionId: section.id,
      key,
      axis: axis === "y" ? "y" : "x",
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startWidth: rect.width,
      startHeight: rect.height,
      columnWidth: axis === "x" ? columnWidth : 0,
      gap,
      columns
    };
    this._setSheetDragging(true);
    document.body.style.userSelect = "none";
    document.body.style.cursor = axis === "y" ? "ns-resize" : "ew-resize";
    window.addEventListener("pointermove", this._onWindowCellResizeMove);
    window.addEventListener("pointerup", this._onWindowCellResizeUp, true);
    window.addEventListener("pointercancel", this._onWindowCellResizeUp, true);
  }
  /** Double-click on a cell handle drops the size back to automatic. */
  resetCellSize(section, key, axis, event) {
    event.preventDefault();
    event.stopPropagation();
    const size = axis === "x" ? { colSpan: 1 } : axis === "y" ? { minHeight: 0 } : { width: 0 };
    this.cellSizeChange.emit(__spreadValues({ sectionId: section.id, key }, size));
    this._scheduleContentFit();
  }
  _cellResizeSize(clientX, clientY) {
    const resize = this._cellResize;
    const scales = this._pointerScaleFactors;
    if (resize.axis === "y") {
      const height = Math.max(16, resize.startHeight + clientY - resize.startClientY);
      return { minHeight: Math.round(height * scales.y) };
    }
    const width = Math.max(24, resize.startWidth + clientX - resize.startClientX);
    if (!resize.columnWidth)
      return { width: Math.round(width * scales.x) };
    const span = Math.round((width + resize.gap) / (resize.columnWidth + resize.gap));
    return { colSpan: Math.min(resize.columns, Math.max(1, span)) };
  }
  cellShowsRowLine(section, key, isLast) {
    const override = section.keyOverrides?.[key];
    if (override?.showRowLine === false)
      return false;
    if (override?.showRowLine === true)
      return true;
    return this.sectionShowsRowLines(section) && !this.cellHasBox(section, key) && !isLast;
  }
  rowLineStyle(section, key) {
    const override = key ? section.keyOverrides?.[key]?.rowLineStyle : void 0;
    if (override === "dotted" || override === "dashed" || override === "solid")
      return override;
    return section.rowLineStyle === "dotted" || section.rowLineStyle === "dashed" ? section.rowLineStyle : "solid";
  }
  rowLineColor(section, key) {
    return (key ? section.keyOverrides?.[key]?.rowLineColor : void 0) || section.rowLineColor || "#d6d3d1";
  }
  rowLineWidth(section, key) {
    return clampRowLineWidth((key ? section.keyOverrides?.[key]?.rowLineWidth : void 0) ?? section.rowLineWidth);
  }
  rowLineMark(section, key) {
    const style = this.rowLineStyle(section, key);
    return clampRowLineMark((key ? section.keyOverrides?.[key]?.rowLineMark : void 0) ?? section.rowLineMark, style, defaultRowLineMark(style));
  }
  rowLineFill(section, key) {
    return rowLinePaint(this.rowLineStyle(section, key), this.rowLineColor(section, key), this.rowLineWidth(section, key), this.rowLineMark(section, key)).image;
  }
  rowLineBg(section, key, isLast = false) {
    const show = key ? this.cellShowsRowLine(section, key, isLast) : this.sectionShowsRowLines(section);
    if (!show)
      return null;
    const paint = rowLinePaint(this.rowLineStyle(section, key), this.rowLineColor(section, key), this.rowLineWidth(section, key), this.rowLineMark(section, key));
    return {
      "background-image": paint.image,
      "background-repeat": "no-repeat",
      "background-position": "left bottom",
      "background-size": paint.size
    };
  }
  rowLineCss(section, key) {
    const style = this.rowLineStyle(section, key);
    const color = this.rowLineColor(section, key);
    return `${this.rowLineWidth(section, key)}px ${style} ${color}`;
  }
  /** Entries behind a `keyValueGrid`, table, or card, honoring hidden keys. */
  structuralEntries(section) {
    return this.sheetChunks(section).flatMap((chunk) => chunk.kind === "fields" ? chunk.entries : []);
  }
  sheetChunks(section) {
    return chunkLayoutSheetItems(collectLayoutSheetItems(this._valueAt(section.dataPath), {
      hiddenKeys: section.hiddenKeys,
      keyOrder: section.keyOrder
    }));
  }
  sectionHasStructuredData(section) {
    return this.sheetChunks(section).length > 0;
  }
  sectionShowsRowLines(section) {
    return section.showRowLines !== false;
  }
  roleFontFamily(section, role, key) {
    return resolveTextRole(section, role, this.primaryColor(), key).fontFamily;
  }
  roleFontSize(section, role, key) {
    return resolveTextRole(section, role, this.primaryColor(), key).fontSize;
  }
  roleFontWeight(section, role, key) {
    const resolved = resolveTextRole(section, role, this.primaryColor(), key);
    return nearestFontWeight(availableFontWeights(resolved.fontFamily, this.template()?.customFonts ?? []), fontWeightStep(resolved.fontWeight));
  }
  roleFontStyle(section, role, key) {
    return resolveTextRole(section, role, this.primaryColor(), key).fontStyle;
  }
  roleTextDecoration(section, role, key) {
    return resolveTextRole(section, role, this.primaryColor(), key).textDecoration;
  }
  roleTextAlign(section, role, key) {
    return resolveTextRole(section, role, this.primaryColor(), key).textAlign;
  }
  roleColor(section, role, key) {
    return resolveTextRole(section, role, this.primaryColor(), key).color;
  }
  sectionFrameBorder(section) {
    const width = Number(section.style?.borderWidth ?? 0);
    if (!width || width <= 0)
      return "none";
    const color = section.style?.borderColor || "#d6d3d1";
    return `${Math.max(1, Math.round(width))}px solid ${color}`;
  }
  sectionFrameRadius(section) {
    const explicit = Number(section.style?.borderRadius);
    if (Number.isFinite(explicit) && explicit >= 0)
      return explicit;
    return 0;
  }
  sectionFramePadding(section) {
    if (Number(section.style?.borderWidth ?? 0) > 0)
      return "10px";
    const bg = section.style?.backgroundColor;
    if (bg && bg !== "#ffffff" && bg !== "#fff")
      return "10px";
    return "";
  }
  sectionFrameBackground(section) {
    return section.style?.backgroundColor || null;
  }
  /**
   * Tailwind classes for a variant, mirroring the backend palette.
   *
   * `variantRules` are evaluated server-side; the canvas shows the static variant
   * so the block is recognizable without duplicating rule evaluation.
   */
  variantClasses(section) {
    const palette = {
      neutral: "bg-gray-50 text-gray-700 border-gray-200",
      success: "bg-emerald-50 text-emerald-700 border-emerald-200",
      warning: "bg-amber-50 text-amber-700 border-amber-200",
      danger: "bg-rose-50 text-rose-700 border-rose-200",
      info: "bg-blue-50 text-blue-700 border-blue-200",
      primary: "bg-indigo-50 text-indigo-700 border-indigo-200"
    };
    return palette[section.style?.variant || "neutral"] ?? palette.neutral;
  }
  /**
   * Snapshot the on-screen sheets as a standalone HTML document for Puppeteer,
   * so the PDF matches the editor instead of a second EJS layout.
   */
  exportPrintHtml() {
    const papers = this._reportPages?.toArray().map((ref) => ref.nativeElement) ?? [];
    if (!papers.length)
      return null;
    const { width: pageWidthMm, height: pageHeightMm } = this.paperSizeMm();
    const sheets = papers.map((paper) => this._printSheetMarkup(paper, pageWidthMm, pageHeightMm)).filter(Boolean);
    if (!sheets.length)
      return null;
    const pageCount = sheets.length;
    return `<!DOCTYPE html><html data-print-pages="${pageCount}"><head><meta charset="utf-8"/>${fontHeadMarkup(this.template()?.customFonts)}<style>
@page{size:${pageWidthMm}mm ${pageHeightMm}mm;margin:0}
html,body{margin:0;padding:0;width:${pageWidthMm}mm;height:${pageCount * pageHeightMm}mm;overflow:hidden;background:#fff}
.print-sheet{width:${pageWidthMm}mm;height:${pageHeightMm}mm;max-height:${pageHeightMm}mm;overflow:hidden;position:relative;box-sizing:border-box;break-after:avoid;page-break-after:avoid;break-inside:avoid;page-break-inside:avoid}
.print-sheet [data-report-page-inner]{position:absolute;inset:0;width:100%;height:100%;overflow:hidden;box-sizing:border-box}
.print-sheet [data-report-footer]{position:absolute;left:0;right:0;bottom:0;width:100%;top:auto}
.print-sheet [data-report-top-chrome]{position:absolute;left:0;right:0;top:0;width:100%;bottom:auto}
.print-sheet + .print-sheet{break-before:page;page-break-before:always}
*{-webkit-print-color-adjust:exact;print-color-adjust:exact}
.print-sheet h1,.print-sheet h2,.print-sheet h3,.print-sheet h4,.print-sheet h5,.print-sheet h6,.print-sheet p{margin:0}
</style></head><body>${sheets.join("")}</body></html>`;
  }
  _printSheetMarkup(paper, pageWidthMm, pageHeightMm) {
    const clone = paper.cloneNode(true);
    this._inlineComputedStyles(paper, clone);
    clone.querySelectorAll("[data-print-hide],[data-overlay-handle]").forEach((node) => node.remove());
    this._stripPrintNoise(clone);
    clone.querySelectorAll('[class*="ring-"]').forEach((node) => {
      node.style.boxShadow = "none";
    });
    clone.style.boxShadow = "none";
    clone.style.border = "none";
    clone.style.borderRadius = "0";
    clone.style.margin = "0";
    clone.style.maxWidth = "none";
    clone.style.boxSizing = "border-box";
    clone.style.overflow = "hidden";
    clone.style.position = "relative";
    clone.style.left = "auto";
    clone.style.top = "auto";
    clone.style.width = `${pageWidthMm}mm`;
    clone.style.height = `${pageHeightMm}mm`;
    clone.style.minWidth = `${pageWidthMm}mm`;
    clone.style.minHeight = `${pageHeightMm}mm`;
    clone.style.maxWidth = `${pageWidthMm}mm`;
    clone.style.maxHeight = `${pageHeightMm}mm`;
    clone.style.zoom = "1";
    clone.style.transform = "none";
    this._pinPrintedLayout(paper, clone, Number(paper.getAttribute("data-report-page-index") || 0));
    return `<div class="print-sheet">${clone.outerHTML}</div>`;
  }
  _pinPrintedLayout(source, clone, pageIndex = 0) {
    const sourceInner = source.querySelector("[data-report-page-inner]") ?? source;
    const cloneInner = clone.querySelector("[data-report-page-inner]") ?? clone;
    cloneInner.style.position = "absolute";
    cloneInner.style.left = "0";
    cloneInner.style.top = "0";
    cloneInner.style.right = "0";
    cloneInner.style.bottom = "0";
    cloneInner.style.width = "100%";
    cloneInner.style.height = "100%";
    cloneInner.style.minHeight = "0";
    cloneInner.style.maxHeight = "none";
    cloneInner.style.overflow = "hidden";
    cloneInner.style.margin = "0";
    clone.querySelectorAll("[data-sheet-image]").forEach((node) => {
      const imagePage = Number(node.getAttribute("data-sheet-image-page") || 0);
      if (imagePage !== pageIndex)
        node.remove();
    });
    if (this.hasFreeLayout()) {
      source.querySelectorAll("[data-report-section]").forEach((node) => {
        const src = node;
        const id = src.getAttribute("data-section-id");
        const dst = id ? clone.querySelector(`[data-section-id="${CSS.escape(id)}"]`) : null;
        if (dst)
          this._pinPrintedBox(src, dst, sourceInner);
      });
    }
    source.querySelectorAll("[data-overlay-box]").forEach((node) => {
      const src = node;
      const id = src.getAttribute("data-overlay-id");
      if (!id)
        return;
      const dst = clone.querySelector(`[data-overlay-id="${CSS.escape(id)}"]`);
      if (dst)
        this._pinPrintedBox(src, dst, source);
    });
    this._pinPrintedLayoutFromModel(clone, pageIndex);
    this._relaxPrintedHugText(source, clone);
    this._stickPrintedChrome(clone);
  }
  /**
   * Title and free text shrink to the words on the sheet. The print document
   * has no Tailwind reset, so an h2 or p would regain its browser margin and
   * drop below the coordinate saved on the sheet. The box also stays wide
   * enough that the PDF face does not wrap a line the author did not break.
   */
  _relaxPrintedHugText(source, clone) {
    source.querySelectorAll("[data-report-section]").forEach((node) => {
      const src = node;
      const type = src.getAttribute("data-section-type");
      if (type !== "header" && type !== "text")
        return;
      const id = src.getAttribute("data-section-id");
      const dst = id ? clone.querySelector(`[data-section-id="${CSS.escape(id)}"]`) : null;
      if (!dst)
        return;
      const broken = /[\r\n]/.test(src.innerText || src.textContent || "");
      const flow = broken ? "pre" : "nowrap";
      dst.style.margin = "0";
      dst.style.height = "auto";
      dst.style.maxHeight = "none";
      dst.style.overflow = "visible";
      dst.style.width = "max-content";
      dst.style.maxWidth = "none";
      dst.style.whiteSpace = flow;
      dst.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, div").forEach((child) => {
        const el = child;
        el.style.margin = "0";
        el.style.whiteSpace = flow;
        el.style.width = "max-content";
        el.style.maxWidth = "none";
        el.style.minWidth = "0";
        el.style.overflowWrap = "normal";
        el.style.wordBreak = "normal";
      });
    });
  }
  /** When the live sheet has no layout box (hidden tab), pin from saved frames. */
  _pinPrintedLayoutFromModel(clone, pageIndex) {
    if (!this.hasFreeLayout())
      return;
    const pageW = this.pageWidthPx() || 1;
    const pageH = this.pageHeightPx() || 1;
    for (const section of this.template()?.sections ?? []) {
      const frame = this.displayFrame(section);
      if (!frame || (frame.page ?? 0) !== pageIndex || !section.id)
        continue;
      const dst = clone.querySelector(`[data-section-id="${CSS.escape(section.id)}"]`);
      if (!dst || dst.style.left && dst.style.width)
        continue;
      dst.style.position = "absolute";
      dst.style.margin = "0";
      dst.style.right = "auto";
      dst.style.bottom = "auto";
      dst.style.left = `${(Number(frame.x) || 0) / pageW * 100}%`;
      dst.style.top = `${(Number(frame.y) || 0) / pageH * 100}%`;
      if (Number(frame.width) > 0) {
        dst.style.width = `${Number(frame.width) / pageW * 100}%`;
      }
      if (Number(frame.height) > 0) {
        dst.style.height = `${Number(frame.height) / pageH * 100}%`;
      }
    }
  }
  _pinPrintedBox(src, dst, origin) {
    const parent = src.offsetParent ?? origin;
    const parentW = parent.clientWidth || origin.clientWidth || 1;
    const parentH = parent.clientHeight || origin.clientHeight || 1;
    if (!src.offsetWidth && !src.offsetHeight)
      return;
    dst.style.position = "absolute";
    dst.style.margin = "0";
    dst.style.right = "auto";
    dst.style.bottom = "auto";
    dst.style.left = `${src.offsetLeft / parentW * 100}%`;
    dst.style.top = `${src.offsetTop / parentH * 100}%`;
    dst.style.width = `${src.offsetWidth / parentW * 100}%`;
    dst.style.height = `${src.offsetHeight / parentH * 100}%`;
    dst.style.transform = src.style.transform || "none";
    dst.style.transformOrigin = src.style.transformOrigin || "center center";
    const srcImgs = src.querySelectorAll("img");
    dst.querySelectorAll("img").forEach((node, i) => {
      const img = node;
      const from = srcImgs[i];
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.maxWidth = "none";
      img.style.maxHeight = "none";
      img.style.objectFit = "contain";
      img.style.transform = from?.style.transform || "none";
      img.style.transformOrigin = from?.style.transformOrigin || "center center";
    });
    const srcSpans = src.querySelectorAll("span");
    dst.querySelectorAll("span").forEach((node, i) => {
      const from = srcSpans[i];
      if (from?.style.transform)
        node.style.transform = from.style.transform;
    });
  }
  _stickPrintedChrome(clone) {
    clone.querySelectorAll("[data-report-footer]").forEach((node) => {
      const el = node;
      el.style.position = "absolute";
      el.style.left = "0";
      el.style.right = "0";
      el.style.bottom = "0";
      el.style.top = "auto";
      el.style.width = "100%";
      el.style.height = "auto";
      el.style.maxHeight = "none";
      el.style.margin = "0";
      el.style.transform = "none";
      el.style.zIndex = "30";
    });
    clone.querySelectorAll("[data-report-top-chrome]").forEach((node) => {
      const el = node;
      el.style.position = "absolute";
      el.style.left = "0";
      el.style.right = "0";
      el.style.top = "0";
      el.style.bottom = "auto";
      el.style.width = "100%";
      el.style.height = "auto";
      el.style.margin = "0";
      el.style.zIndex = "30";
    });
  }
  printSurfaceWidth() {
    return this._reportPages?.first?.nativeElement.getBoundingClientRect().width ?? 0;
  }
  _inlineComputedStyles(source, target) {
    const computed2 = getComputedStyle(source);
    const keys = [
      "position",
      "top",
      "left",
      "right",
      "bottom",
      "width",
      "height",
      "min-width",
      "min-height",
      "max-width",
      "max-height",
      "margin",
      "padding",
      "display",
      "flex-direction",
      "flex-wrap",
      "align-items",
      "justify-content",
      "gap",
      "grid-template-columns",
      "grid-template-rows",
      "font-family",
      "font-size",
      "font-weight",
      "font-style",
      "text-decoration",
      "line-height",
      "letter-spacing",
      "text-align",
      "text-transform",
      "transform",
      "transform-origin",
      "color",
      "white-space",
      "background-color",
      "background-image",
      "background-repeat",
      "background-position",
      "background-size",
      "opacity",
      "border",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-radius",
      "box-sizing",
      "overflow",
      "object-fit",
      "object-position",
      "z-index",
      "border-collapse",
      "vertical-align"
    ];
    const skip = /* @__PURE__ */ new Set([
      "",
      "none",
      "normal",
      "auto",
      "static",
      "visible",
      "stretch",
      "start",
      "normal",
      "rgba(0, 0, 0, 0)",
      "rgba(0,0,0,0)",
      "transparent",
      "0px",
      "0"
    ]);
    let css = "";
    for (const key of keys) {
      const value = computed2.getPropertyValue(key).trim();
      if (!value || skip.has(value)) {
        if ((key === "margin" || key === "padding") && (value === "0px" || value === "0")) {
          css += `${key}:0;`;
        }
        continue;
      }
      if (key === "transform" || key === "transform-origin")
        continue;
      if (key === "background-image" && !value.includes("url(") && !/gradient/i.test(value)) {
        continue;
      }
      css += `${key}:${value};`;
    }
    const elSrc = source;
    const elDst = target;
    if (css)
      elDst.style.cssText = css;
    if (elSrc.style?.transform)
      elDst.style.transform = elSrc.style.transform;
    if (elSrc.style?.transformOrigin)
      elDst.style.transformOrigin = elSrc.style.transformOrigin;
    if (elSrc.style?.backgroundImage)
      elDst.style.backgroundImage = elSrc.style.backgroundImage;
    if (elSrc.style?.backgroundSize)
      elDst.style.backgroundSize = elSrc.style.backgroundSize;
    if (elSrc.style?.backgroundPosition)
      elDst.style.backgroundPosition = elSrc.style.backgroundPosition;
    if (elSrc.style?.backgroundRepeat)
      elDst.style.backgroundRepeat = elSrc.style.backgroundRepeat;
    const srcKids = source.children;
    const dstKids = target.children;
    const n = Math.min(srcKids.length, dstKids.length);
    for (let i = 0; i < n; i++)
      this._inlineComputedStyles(srcKids[i], dstKids[i]);
  }
  _stripPrintNoise(root) {
    root.querySelectorAll("*").forEach((node) => {
      const el = node;
      for (let i = el.attributes.length - 1; i >= 0; i--) {
        const attr = el.attributes.item(i);
        if (!attr)
          continue;
        if (attr.name.startsWith("_ng") || attr.name.startsWith("ng-")) {
          el.removeAttribute(attr.name);
        }
      }
      if (el.getAttribute("class") && !el.classList.contains("print-sheet")) {
        el.removeAttribute("class");
      }
    });
  }
  static {
    this.\u0275fac = function ReportPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportPreviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportPreviewComponent, selectors: [["report-preview"]], viewQuery: function ReportPreviewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._measureLegend = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._reportPages = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._measureSections = _t);
      }
    }, inputs: { template: [1, "template"], previewData: [1, "previewData"], primaryColor: [1, "primaryColor"], pageBackgroundColor: [1, "pageBackgroundColor"], orientation: [1, "orientation"], pageSize: [1, "pageSize"], viewZoom: [1, "viewZoom"], clickable: [1, "clickable"], selectedSectionId: [1, "selectedSectionId"], selectedSectionIds: [1, "selectedSectionIds"], selectedCellKey: [1, "selectedCellKey"], selectedCellPart: [1, "selectedCellPart"], selectedOverlay: [1, "selectedOverlay"], sectionClick: [1, "sectionClick"], customContextMenu: [1, "customContextMenu"], reorderable: [1, "reorderable"], printCapture: [1, "printCapture"], logoUrl: [1, "logoUrl"], legend: [1, "legend"], legendPosition: [1, "legendPosition"], termsAndConditions: [1, "termsAndConditions"], termsPosition: [1, "termsPosition"], showPageNumbers: [1, "showPageNumbers"], pageNumberPosition: [1, "pageNumberPosition"], watermarkEnabled: [1, "watermarkEnabled"], watermarkType: [1, "watermarkType"], watermarkLogoUrl: [1, "watermarkLogoUrl"], watermarkText: [1, "watermarkText"], watermarkOpacity: [1, "watermarkOpacity"], watermarkPattern: [1, "watermarkPattern"], watermarkX: [1, "watermarkX"], watermarkY: [1, "watermarkY"], watermarkWidth: [1, "watermarkWidth"], watermarkHeight: [1, "watermarkHeight"], watermarkRotation: [1, "watermarkRotation"], signatureEnabled: [1, "signatureEnabled"], signatureImage: [1, "signatureImage"], signatureX: [1, "signatureX"], signatureY: [1, "signatureY"], signatureWidth: [1, "signatureWidth"], signatureHeight: [1, "signatureHeight"], signaturePage: [1, "signaturePage"], logoEnabled: [1, "logoEnabled"], logoX: [1, "logoX"], logoY: [1, "logoY"], logoWidth: [1, "logoWidth"], logoHeight: [1, "logoHeight"], logoRotation: [1, "logoRotation"], logoAutoFitContent: [1, "logoAutoFitContent"], sheetImages: [1, "sheetImages"], layerZ: [1, "layerZ"], hiddenLayerIds: [1, "hiddenLayerIds"], lockedLayerIds: [1, "lockedLayerIds"], peekedLayerId: [1, "peekedLayerId"], marqueeMode: [1, "marqueeMode"], selectedOverlayIds: [1, "selectedOverlayIds"], bodyTopPadding: [1, "bodyTopPadding"], thumbnailMode: [1, "thumbnailMode"], fullContent: [1, "fullContent"] }, outputs: { signaturePositionChange: "signaturePositionChange", signatureSizeChange: "signatureSizeChange", logoPositionChange: "logoPositionChange", logoSizeChange: "logoSizeChange", logoRotationChange: "logoRotationChange", watermarkPositionChange: "watermarkPositionChange", watermarkSizeChange: "watermarkSizeChange", watermarkRotationChange: "watermarkRotationChange", headerLogoAlignChange: "headerLogoAlignChange", headerLogoSizeChange: "headerLogoSizeChange", sheetImageChange: "sheetImageChange", overlaySelect: "overlaySelect", lockedLayerLocate: "lockedLayerLocate", backgroundClick: "backgroundClick", sectionContextMenu: "sectionContextMenu", overlayContextMenu: "overlayContextMenu", paperContextMenu: "paperContextMenu", sectionReorder: "sectionReorder", sectionFramesChange: "sectionFramesChange", boxSelectionChange: "boxSelectionChange", groupOverlayMove: "groupOverlayMove", sectionFrameChange: "sectionFrameChange", sectionRotationChange: "sectionRotationChange", cellSelect: "cellSelect", cellContextMenu: "cellContextMenu", cellPlace: "cellPlace", inlineTextChange: "inlineTextChange", cellSizeChange: "cellSizeChange", addPage: "addPage", removePage: "removePage", sheetDragChange: "sheetDragChange" }, decls: 12, vars: 16, consts: [["cellResizeHandles", ""], ["sectionBody", ""], ["sheetText", ""], ["reportPage", ""], ["measureSection", ""], ["measureLegend", ""], ["data-report-zoom-stack", "", 1, "relative", "mx-auto"], [1, "absolute", "left-0", "top-0", "flex", "flex-col", "items-center", "gap-4", 3, "click", "contextmenu"], ["data-report-page", "", 1, "mx-auto", "flex", "shrink-0", "flex-col", "relative", "overflow-hidden", "rounded-lg", 2, "border", "1px solid #e5e7eb", 3, "shadow-lg", "width", "max-width", "min-width", "min-height", "height", "background-color"], [1, "mx-auto", "mt-4", "flex", "flex-wrap", "items-center", "justify-center", "gap-2"], ["aria-hidden", "true", 1, "px-8", "sm:px-10", "lg:px-12", 2, "position", "absolute", "left", "-100000px", "top", "0", "visibility", "hidden", "pointer-events", "none", 3, "width"], ["data-report-page", "", 1, "mx-auto", "flex", "shrink-0", "flex-col", "relative", "overflow-hidden", "rounded-lg", 2, "border", "1px solid #e5e7eb"], [1, "absolute", "inset-0", "pointer-events-none", 3, "z-index", "visibility", "opacity"], [1, "pointer-events-none", "absolute", "left-0", "right-0", "z-[840]", "border-b", "border-dashed", "border-stone-300", 3, "top", "height"], [1, "pointer-events-none", "absolute", "left-0", "right-0", "z-[840]", "border-t", "border-dashed", "border-stone-300", 3, "top", "height"], ["data-report-top-chrome", "", 1, "px-8", "pt-4", "text-[10px]", "text-gray-400", 3, "position", "top", "left", "right", "z-index", "pointer-events", "text-align"], ["data-report-page-inner", "", 1, "min-h-0"], [3, "height"], [1, "flex", "flex-col", "items-center", "justify-center", "h-64", "text-gray-300"], ["data-report-footer", "", 1, "shrink-0", 3, "mt-auto", "pb-6", "px-0", "position", "left", "right", "bottom", "z-index", "pointer-events", "padding-left", "padding-right", "padding-bottom", "background-color"], [1, "pointer-events-none", "absolute", "inset-0", "overflow-hidden", 3, "z-index", "visibility", "opacity"], ["data-overlay-id", "watermark", 1, "pointer-events-none", "absolute", "inset-0", "overflow-hidden", 2, "display", "grid", "grid-template-columns", "repeat(3, 1fr)", "grid-template-rows", "repeat(5, 1fr)", "gap", "0", 3, "z-index", "visibility", "opacity", "outline", "outline-offset"], [1, "pointer-events-none", "absolute", "inset-0", "overflow-hidden"], ["data-overlay-box", "", "data-overlay-id", "watermark", 1, "absolute", "flex", "items-center", "justify-center", 2, "outline-offset", "6px", 3, "pointerdown", "click", "contextmenu"], [1, "pointer-events-none", "select-none", "whitespace-nowrap", "text-center", "font-bold", "leading-none", "text-gray-700", 2, "text-shadow", "0 0 1px #fff, 0 0 1px #fff, 0 1px 1px rgba(0, 0, 0, 0.55)", "letter-spacing", "0.08em", 3, "opacity", "font-size", "transform"], ["alt", "Watermark", "draggable", "false", 1, "h-full", "w-full", "object-contain", "pointer-events-none", "select-none", 2, "filter", "drop-shadow(0 0 1px #fff) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.55))", 3, "src", "opacity", "transform"], [1, "pointer-events-none", "select-none", "whitespace-nowrap", "text-center", "font-bold", "leading-none", "text-gray-700", 2, "text-shadow", "0 0 1px #fff, 0 0 1px #fff, 0 1px 1px rgba(0, 0, 0, 0.55)", "letter-spacing", "0.08em"], ["alt", "Watermark", "draggable", "false", 1, "h-full", "w-full", "object-contain", "pointer-events-none", "select-none", 2, "filter", "drop-shadow(0 0 1px #fff) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.55))", 3, "src"], ["data-overlay-handle", "", 1, "absolute", "left-1/2", "z-30", "flex", "h-6", "w-6", "-translate-x-1/2", "cursor-grab", "items-center", "justify-center", "rounded-full", "border", "border-amber-400", "bg-white", "shadow-md", "hover:bg-amber-50", 3, "pointerdown"], [1, "!h-4", "!w-4", "!text-[16px]", "text-amber-600", 2, "pointer-events", "none"], ["data-overlay-handle", "", 1, "absolute", "bottom-[-19px]", "right-[-19px]", "z-30", "flex", "h-6", "w-6", "cursor-nwse-resize", "items-center", "justify-center", "rounded-full", "border", "border-amber-400", "bg-white", "shadow-md", "hover:bg-amber-50", 3, "pointerdown"], [1, "!h-4", "!w-4", "!text-[16px]", "rotate-90", "text-amber-600", 2, "pointer-events", "none"], ["data-overlay-id", "watermark", 1, "pointer-events-none", "absolute", "inset-0", "overflow-hidden", 2, "display", "grid", "grid-template-columns", "repeat(3, 1fr)", "grid-template-rows", "repeat(5, 1fr)", "gap", "0"], [1, "flex", "items-center", "justify-center"], [1, "select-none", "whitespace-nowrap", "font-bold", "text-gray-700", 2, "font-size", "18px", "letter-spacing", "3px", "text-shadow", "0 0 1px #fff, 0 0 1px #fff, 0 1px 1px rgba(0, 0, 0, 0.55)", 3, "opacity", "transform"], ["alt", "", 1, "h-16", "w-16", "select-none", "object-contain", 2, "filter", "drop-shadow(0 0 1px #fff) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.55))", 3, "src", "opacity", "transform"], [1, "select-none", "whitespace-nowrap", "font-bold", "text-gray-700", 2, "font-size", "18px", "letter-spacing", "3px", "text-shadow", "0 0 1px #fff, 0 0 1px #fff, 0 1px 1px rgba(0, 0, 0, 0.55)"], ["alt", "", 1, "h-16", "w-16", "select-none", "object-contain", 2, "filter", "drop-shadow(0 0 1px #fff) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.55))", 3, "src"], [1, "absolute", "inset-0", "pointer-events-none"], ["data-overlay-box", "", "data-overlay-id", "signature", 1, "absolute", 2, "outline-offset", "6px", 3, "pointerdown", "click", "contextmenu"], ["draggable", "false", 1, "w-full", "h-full", "object-contain", "pointer-events-none", "select-none", 3, "src"], ["data-overlay-handle", "", 1, "absolute", "bottom-[-19px]", "right-[-19px]", "z-30", "flex", "h-6", "w-6", "cursor-nwse-resize", "items-center", "justify-center", "rounded-full", "border", "border-indigo-300", "bg-white", "shadow-md", "hover:bg-indigo-50"], ["data-overlay-handle", "", 1, "absolute", "bottom-[-19px]", "right-[-19px]", "z-30", "flex", "h-6", "w-6", "cursor-nwse-resize", "items-center", "justify-center", "rounded-full", "border", "border-indigo-300", "bg-white", "shadow-md", "hover:bg-indigo-50", 3, "pointerdown"], [1, "!text-[16px]", "!w-4", "!h-4", "text-indigo-500", "rotate-90", 2, "pointer-events", "none"], [1, "pointer-events-none", "absolute", "left-0", "right-0", "z-[840]", "border-b", "border-dashed", "border-stone-300"], [1, "pointer-events-none", "absolute", "inset-0", 3, "z-index", "visibility", "opacity"], [1, "pointer-events-none", "absolute", "inset-0"], ["data-overlay-box", "", 1, "absolute", 2, "outline-offset", "6px", 3, "pointerdown", "pointermove", "pointerup", "pointercancel", "click", "contextmenu"], ["alt", "", "draggable", "false", 1, "h-full", "w-full", "object-contain", "pointer-events-none", "select-none", 3, "src"], ["data-overlay-handle", "", 1, "absolute", "bottom-[-19px]", "right-[-19px]", "z-30", "flex", "h-6", "w-6", "cursor-nwse-resize", "items-center", "justify-center", "rounded-full", "border", "border-indigo-300", "bg-white", "shadow-md", "hover:bg-indigo-50", 3, "pointerdown", "pointermove", "pointerup", "pointercancel"], [1, "!h-4", "!w-4", "!text-[16px]", "rotate-90", "text-indigo-500", 2, "pointer-events", "none"], [1, "pointer-events-none", "absolute", "left-0", "right-0", "z-[840]", "border-t", "border-dashed", "border-stone-300"], ["data-overlay-box", "", "data-overlay-id", "logo", 1, "absolute", 2, "outline-offset", "6px", 3, "pointerdown", "click", "contextmenu"], ["alt", "Logo", "draggable", "false", 1, "h-full", "w-full", "object-contain", "pointer-events-none", "select-none", 3, "src"], ["data-overlay-handle", "", 1, "absolute", "left-1/2", "z-30", "flex", "h-6", "w-6", "-translate-x-1/2", "cursor-grab", "items-center", "justify-center", "rounded-full", "border", "border-indigo-300", "bg-white", "shadow-md", "hover:bg-indigo-50", 3, "pointerdown"], [1, "!h-4", "!w-4", "!text-[16px]", "text-indigo-500", 2, "pointer-events", "none"], ["data-sheet-image", "", 1, "absolute", "inset-0", "pointer-events-none", 3, "z-index", "visibility", "opacity"], ["data-sheet-image", "", 1, "absolute", "inset-0", "pointer-events-none"], ["data-overlay-box", "", 1, "absolute", 2, "outline-offset", "6px", 3, "pointerdown", "click", "contextmenu"], ["data-report-top-chrome", "", 1, "px-8", "pt-4", "text-[10px]", "text-gray-400"], [1, "!text-5xl", "!w-14", "!h-14", "mb-3"], [1, "text-sm"], ["data-report-section", "", 3, "layer-quiet", "is-text-editing", "relative", "absolute", "pointer-events", "touch-action", "mb-3", "cursor-pointer", "select-none", "cursor-grab", "cursor-grabbing", "opacity-90", "selection-outline", "selection-outline-tight", "background-color", "border", "border-radius", "padding", "ngStyle"], ["data-report-section", "", 3, "click", "contextmenu", "pointerdown", "ngStyle"], ["data-print-hide", "", "data-move-badge", "", "title", "Mover", 1, "absolute", "z-30", "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "border", "border-indigo-200", "bg-white", "text-indigo-500", "shadow-sm", 3, "left", "top"], [1, "pointer-events-none", "absolute", "left-1", "right-1", "top-0", "z-20", "h-1", "rounded-full", "bg-indigo-500"], [1, "pointer-events-none", "absolute", "bottom-0", "left-1", "right-1", "z-20", "h-1", "rounded-full", "bg-indigo-500"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-print-hide", "", "data-move-badge", "", "title", "Mover", 1, "absolute", "z-30", "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "border", "border-indigo-200", "bg-white", "text-indigo-500", "shadow-sm"], [1, "!h-3", "!w-3", "!text-[12px]", 2, "pointer-events", "none"], ["data-print-hide", "", "data-section-handle", "", 1, "absolute", "left-1/2", "z-30", "flex", "h-6", "w-6", "-translate-x-1/2", "cursor-grab", "items-center", "justify-center", "rounded-full", "border", "border-indigo-300", "bg-white", "shadow-md", "hover:bg-indigo-50", 3, "pointerdown"], ["type", "button", "data-print-hide", "", "data-section-handle", "", 1, "absolute", "left-[-8px]", "top-[-8px]", "z-30", "h-4", "w-4", "cursor-nwse-resize", "rounded-sm", "border", "border-indigo-400", "bg-white", "shadow", 3, "pointerdown"], ["type", "button", "data-print-hide", "", "data-section-handle", "", 1, "absolute", "right-[-8px]", "top-[-8px]", "z-30", "h-4", "w-4", "cursor-nesw-resize", "rounded-sm", "border", "border-indigo-400", "bg-white", "shadow", 3, "pointerdown"], ["type", "button", "data-print-hide", "", "data-section-handle", "", 1, "absolute", "bottom-[-8px]", "left-[-8px]", "z-30", "h-4", "w-4", "cursor-nesw-resize", "rounded-sm", "border", "border-indigo-400", "bg-white", "shadow", 3, "pointerdown"], ["type", "button", "data-print-hide", "", "data-section-handle", "", 1, "absolute", "bottom-[-8px]", "right-[-8px]", "z-30", "h-4", "w-4", "cursor-nwse-resize", "rounded-sm", "border", "border-indigo-400", "bg-white", "shadow", 3, "pointerdown"], ["type", "button", "data-print-hide", "", "data-section-handle", "", 1, "absolute", "z-30", "border", "border-indigo-400", "bg-white", "shadow", 3, "title", "ngClass"], ["type", "button", "data-print-hide", "", "data-section-handle", "", 1, "absolute", "z-30", "border", "border-indigo-400", "bg-white", "shadow", 3, "pointerdown", "title", "ngClass"], ["data-print-hide", "", 1, "pointer-events-none", "absolute", "z-[1200]", 3, "left", "top", "width", "height", "border-left", "border-top"], ["data-print-hide", "", 1, "pointer-events-none", "absolute", "z-[1200]"], ["data-report-footer", "", 1, "shrink-0"], [1, "w-full", "min-w-0", "border-t", "border-gray-200", "pt-3", "mb-2", "space-y-1.5"], [1, "text-[10px]", "text-gray-400", 3, "border-t", "border-gray-200", "pt-3", "text-align"], [1, "text-[10px]", "text-gray-500", "leading-relaxed", "whitespace-pre-wrap", "m-0", "w-full", "min-w-0", "font-medium", 3, "text-align", "textContent"], [1, "text-[9px]", "text-gray-400", "leading-relaxed", "whitespace-pre-wrap", "m-0", "w-full", "min-w-0", 3, "text-align", "textContent"], [1, "text-[10px]", "text-gray-500", "leading-relaxed", "whitespace-pre-wrap", "m-0", "w-full", "min-w-0", "font-medium", 3, "textContent"], [1, "text-[9px]", "text-gray-400", "leading-relaxed", "whitespace-pre-wrap", "m-0", "w-full", "min-w-0", 3, "textContent"], [1, "text-[10px]", "text-gray-400"], ["type", "button", 1, "flex", "items-center", "gap-1.5", "rounded-full", "border", "border-rose-300", "bg-rose-50", "px-3", "py-1.5", "text-[11px]", "font-medium", "text-rose-800", "shadow-sm", "hover:border-rose-400", "hover:bg-rose-100", "dark:border-rose-800", "dark:bg-rose-950/50", "dark:text-rose-300", "dark:hover:bg-rose-950"], ["type", "button", 1, "flex", "items-center", "gap-1.5", "rounded-full", "border", "border-stone-300", "bg-white", "px-3", "py-1.5", "text-[11px]", "font-medium", "text-stone-700", "shadow-sm", "hover:border-stone-400", "hover:bg-stone-50", "dark:border-gray-600", "dark:bg-gray-900", "dark:text-stone-200", "dark:hover:bg-gray-800", 3, "click"], [1, "!h-3.5", "!w-3.5", "!text-[15px]"], ["type", "button", 1, "flex", "items-center", "gap-1.5", "rounded-full", "border", "border-rose-300", "bg-rose-50", "px-3", "py-1.5", "text-[11px]", "font-medium", "text-rose-800", "shadow-sm", "hover:border-rose-400", "hover:bg-rose-100", "dark:border-rose-800", "dark:bg-rose-950/50", "dark:text-rose-300", "dark:hover:bg-rose-950", 3, "click"], ["aria-hidden", "true", 1, "px-8", "sm:px-10", "lg:px-12", 2, "position", "absolute", "left", "-100000px", "top", "0", "visibility", "hidden", "pointer-events", "none"], [3, "background-color", "border", "border-radius", "padding"], [1, "pb-6"], ["type", "button", "data-print-hide", "", "data-cell-handle", "", 1, "absolute", "right-[-5px]", "top-1/2", "z-20", "h-5", "w-2.5", "-translate-y-1/2", "cursor-ew-resize", "rounded-full", "border", "border-indigo-400", "bg-white", "shadow", 3, "title"], ["type", "button", "data-print-hide", "", "data-cell-handle", "", 1, "absolute", "bottom-[-5px]", "left-1/2", "z-20", "h-2.5", "w-5", "-translate-x-1/2", "cursor-ns-resize", "rounded-full", "border", "border-indigo-400", "bg-white", "shadow", 3, "title"], ["type", "button", "data-print-hide", "", "data-cell-handle", "", 1, "absolute", "right-[-5px]", "top-1/2", "z-20", "h-5", "w-2.5", "-translate-y-1/2", "cursor-ew-resize", "rounded-full", "border", "border-indigo-400", "bg-white", "shadow", 3, "pointerdown", "dblclick", "click", "title"], ["type", "button", "data-print-hide", "", "data-cell-handle", "", 1, "absolute", "bottom-[-5px]", "left-1/2", "z-20", "h-2.5", "w-5", "-translate-x-1/2", "cursor-ns-resize", "rounded-full", "border", "border-indigo-400", "bg-white", "shadow", 3, "pointerdown", "dblclick", "click", "title"], [3, "mb-4", "w-fit", "text-align", "max-width"], [3, "mb-3", "w-fit"], [1, "min-w-0", "px-2", "py-1.5", 3, "ngStyle"], [1, "mb-4", 3, "font-family", "text-align"], [3, "mb-4", "h-full", "w-full", "text-align"], [2, "border", "0", "height", "0", 3, "margin-top", "margin-bottom", "border-top"], ["data-report-icon", "", 1, "report-icon", "h-full", "w-full", "min-h-[12px]", "overflow-visible", 2, "transform-origin", "center center", "line-height", "0", 3, "transform", "innerHTML"], [1, "flex", "h-full", "w-full", "min-h-[8px]", "items-center", "overflow-visible"], [1, "h-full", "w-full", "min-h-[12px]", "overflow-visible", 2, "transform-origin", "center center", 3, "transform"], [1, "mb-3", "flex", "items-center", "gap-2", 3, "font-family", "text-align"], [1, "mb-4", "rounded-lg", "border", "p-3", 3, "ngClass", "font-family", "text-align"], [1, "mb-4", "rounded-lg", "border", "border-dashed", "border-indigo-200", "bg-indigo-50/40", "px-3", "py-4", "text-center"], ["data-sheet-role", "title", 1, "inline-block", "whitespace-pre-wrap", "leading-tight", 3, "contextmenu"], [1, "leading-relaxed", "whitespace-pre-wrap"], ["data-field-part", "label", 1, "min-w-0", "break-words", "tracking-wide"], ["data-field-part", "value", 1, "min-w-0", "break-words"], [1, "mb-4"], ["data-sheet-role", "title", 1, "mb-2", "inline-block", "max-w-full", "tracking-wide", 3, "font-size", "font-weight", "font-style", "text-decoration", "color", "ring-2", "ring-inset", "ring-indigo-400", "rounded-sm"], [1, "w-full"], [3, "ngStyle"], ["data-sheet-role", "title", 1, "mb-2", "inline-block", "max-w-full", "tracking-wide", 3, "contextmenu"], [1, "py-2", "pr-4", "w-1/3"], [1, "py-2"], ["colspan", "2", 1, "py-4", "text-center", "text-gray-300", "text-xs"], ["draggable", "false", 1, "block", "h-full", "w-full", "object-contain", 3, "src", "alt"], [1, "max-h-32", "inline-block", "rounded", 2, "max-width", "100%", 3, "src", "alt"], [1, "inline-flex", "items-center", "justify-center", "w-48", "h-24", "bg-gray-100", "rounded-lg", "text-gray-300"], [1, "!text-3xl"], [2, "border", "0", "height", "0"], ["data-report-icon", "", 1, "report-icon", "h-full", "w-full", "min-h-[12px]", "overflow-visible", 2, "transform-origin", "center center", "line-height", "0", 3, "innerHTML"], [1, "h-full", "w-full", "min-h-[12px]", "overflow-visible", 2, "transform-origin", "center center"], ["viewBox", "0 0 100 100", "aria-hidden", "true", 1, "h-full", "w-full", "overflow-visible"], ["cx", "50", "cy", "50", "rx", "46", "ry", "46", "vector-effect", "non-scaling-stroke"], ["vector-effect", "non-scaling-stroke", "points", "50,4 61,38 97,38 68,59 79,95 50,74 21,95 32,59 3,38 39,38"], ["vector-effect", "non-scaling-stroke", "points", "50,8 94,92 6,92"], ["vector-effect", "non-scaling-stroke", "points", "50,4 96,50 50,96 4,50"], ["x", "2", "y", "2", "width", "96", "height", "96", "vector-effect", "non-scaling-stroke"], [1, "rounded-lg", "border", "border-dashed", "border-gray-200", "py-4", "text-center", "text-xs", "text-gray-300"], [1, "border-b-2"], [1, "cursor-pointer", "py-1.5", "pr-3", "text-left", 3, "ring-1", "ring-lime-500", "font-family", "font-size", "font-weight", "font-style", "text-decoration", "text-align", "color"], [1, "cursor-pointer", "py-1.5", "pr-3", "text-left", 3, "click", "contextmenu"], [1, "cursor-pointer", "py-1.5", "pr-3", 3, "ring-1", "ring-orange-400", "font-family", "font-size", "font-weight", "font-style", "text-decoration", "text-align", "color"], [1, "cursor-pointer", "py-1.5", "pr-3", 3, "click", "contextmenu"], [1, "grid", "gap-x-4", "gap-y-1.5", 3, "grid-template-columns"], ["data-report-cell", "", 1, "mt-3", "overflow-x-auto", "rounded-lg", "border", "px-2", "py-2", 3, "ring-2", "ring-inset", "ring-indigo-400", "cursor-pointer", "background-color", "border", "border-radius"], [1, "grid", "gap-x-4", "gap-y-1.5"], ["data-report-cell", "", 1, "relative", "min-w-0", "px-2", "py-1.5", 3, "ring-2", "ring-inset", "ring-indigo-400", "cursor-pointer", "cursor-grab", "ngStyle", "grid-column", "min-height", "background-color", "border", "border-radius"], ["data-report-cell", "", 1, "relative", "min-w-0", "px-2", "py-1.5", 3, "click", "pointerdown", "contextmenu", "ngStyle"], ["data-cell-part", "label", 1, "min-w-0", "break-words", "tracking-wide", 3, "click"], ["data-cell-part", "value", 1, "min-w-0", "break-words", 3, "click"], ["data-report-cell", "", 1, "mt-3", "overflow-x-auto", "rounded-lg", "border", "px-2", "py-2", 3, "click", "pointerdown", "contextmenu"], [1, "mb-1.5", "flex", "items-center", "gap-2"], [1, "rounded-md", "px-1.5", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-950", 3, "background-color"], [1, "min-w-0", "flex-1", "truncate", "tracking-wide", 3, "font-family", "font-size", "font-weight", "color"], [1, "w-full", "border-collapse"], [1, "relative", "cursor-pointer", "border-b", "py-1", "pr-2", "text-left", 3, "ring-1", "ring-lime-500", "width", "border-color", "font-family", "font-size", "font-weight", "font-style", "text-decoration", "text-align", "color"], [3, "border-b", "border-color"], [1, "rounded-md", "px-1.5", "py-0.5", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "text-stone-950"], [1, "min-w-0", "flex-1", "truncate", "tracking-wide"], [1, "relative", "cursor-pointer", "border-b", "py-1", "pr-2", "text-left", 3, "click", "contextmenu"], [1, "cursor-pointer", "py-1", "pr-2", "align-top", 3, "ring-1", "ring-orange-400", "font-family", "font-size", "font-weight", "font-style", "text-decoration", "text-align", "color"], [1, "cursor-pointer", "py-1", "pr-2", "align-top", 3, "click", "contextmenu"], [1, "mb-3", "flex", "items-center", "gap-2"], [1, "tracking-wide", 3, "font-family", "font-size", "font-weight", "font-style", "text-decoration", "color"], [1, "inline-flex", "items-center", "rounded-full", "border", "px-2.5", "py-0.5", 3, "ngClass"], [1, "tracking-wide"], [1, "mb-4", "rounded-lg", "border", "p-3", 3, "ngClass"], ["data-sheet-role", "title", 1, "mb-1", "inline-block", "max-w-full", 3, "font-size", "font-weight", "font-style", "text-decoration", "color", "ring-2", "ring-inset", "ring-indigo-400", "rounded-sm"], [1, "whitespace-pre-wrap", "opacity-90", 3, "font-family", "font-size", "font-weight", "font-style", "text-decoration", "text-align", "color"], ["data-sheet-role", "title", 1, "mb-1", "inline-block", "max-w-full", 3, "contextmenu"], [1, "whitespace-pre-wrap", "opacity-90"], [1, "mt-2", "space-y-0.5"], ["data-report-cell", "", 1, "relative", "flex", "gap-2", "px-2", "py-1", 3, "ring-2", "ring-inset", "ring-indigo-400", "cursor-pointer", "cursor-grab", "ngStyle", "min-height", "background-color", "border", "border-radius"], ["data-report-cell", "", 1, "relative", "flex", "gap-2", "px-2", "py-1", 3, "click", "pointerdown", "contextmenu", "ngStyle"], ["data-cell-part", "label", 1, "min-w-0", "break-words", 3, "click"], [1, "mb-1.5", "rounded-lg", "border", "border-gray-200", "px-3", "py-2"], [1, "text-xs", "font-semibold", "text-gray-700"], [1, "mt-0.5", "whitespace-pre-wrap", "text-[11px]", "text-gray-500"], [1, "!h-5", "!w-5", "!text-xl", "text-indigo-400"], [1, "text-xs", "font-medium", "text-indigo-700"], [1, "mt-0.5", "text-[10px]", "text-indigo-500"], ["data-inline-edit", "", "rows", "1", 1, "m-0", "min-h-[1em]", "resize-none", "select-text", "overflow-hidden", "border-0", "bg-transparent", "p-0", "font-[inherit]", "text-[length:inherit]", "leading-[inherit]", "text-inherit", "[text-align:inherit]", "[font-style:inherit]", "[font-weight:inherit]", "[text-decoration:inherit]", "outline-none", 3, "block", "w-full", "hug-field", "max-width", "value"], ["data-inline-edit", "", "type", "text", 1, "m-0", "min-w-[4rem]", "w-full", "select-text", "border-0", "bg-transparent", "p-0", "font-[inherit]", "text-[length:inherit]", "leading-[inherit]", "text-inherit", "[text-align:inherit]", "[text-decoration:inherit]", "outline-none", 3, "value"], ["data-inline-edit", "", "rows", "1", 1, "m-0", "min-h-[1em]", "resize-none", "select-text", "overflow-hidden", "border-0", "bg-transparent", "p-0", "font-[inherit]", "text-[length:inherit]", "leading-[inherit]", "text-inherit", "[text-align:inherit]", "[font-style:inherit]", "[font-weight:inherit]", "[text-decoration:inherit]", "outline-none", 3, "input", "blur", "keydown", "click", "pointerdown", "dblclick", "value"], ["data-inline-edit", "", "type", "text", 1, "m-0", "min-w-[4rem]", "w-full", "select-text", "border-0", "bg-transparent", "p-0", "font-[inherit]", "text-[length:inherit]", "leading-[inherit]", "text-inherit", "[text-align:inherit]", "[text-decoration:inherit]", "outline-none", 3, "input", "blur", "keydown", "click", "pointerdown", "dblclick", "value"], ["data-sheet-text", "", "data-value-rule", "", 1, "inline-block", "min-h-[1em]", "min-w-[1ch]", "whitespace-pre-wrap", "[text-decoration:inherit]", 3, "cursor-text", "color", "background-color", "font-weight", "padding", "border-radius"], ["data-sheet-text", "", 1, "inline-block", "min-h-[1em]", "min-w-[1ch]", "whitespace-pre-wrap", "[text-decoration:inherit]", 3, "cursor-text"], ["data-sheet-text", "", "data-value-rule", "", 1, "inline-block", "min-h-[1em]", "min-w-[1ch]", "whitespace-pre-wrap", "[text-decoration:inherit]", 3, "pointerdown", "click", "dblclick"], [3, "innerHTML"], ["data-sheet-text", "", 1, "inline-block", "min-h-[1em]", "min-w-[1ch]", "whitespace-pre-wrap", "[text-decoration:inherit]", 3, "pointerdown", "click", "dblclick"]], template: function ReportPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
        \u0275\u0275listener("click", function ReportPreviewComponent_Template_div_click_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPaperClick($event));
        })("contextmenu", function ReportPreviewComponent_Template_div_contextmenu_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPaperContextMenu($event));
        });
        \u0275\u0275repeaterCreate(2, ReportPreviewComponent_For_3_Template, 18, 47, "div", 8, ctx.pagePaintTrack, true);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, ReportPreviewComponent_Conditional_4_Template, 7, 4, "div", 9)(5, ReportPreviewComponent_Conditional_5_Template, 4, 4, "div", 10)(6, ReportPreviewComponent_ng_template_6_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, ReportPreviewComponent_ng_template_8_Template, 16, 16, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(10, ReportPreviewComponent_ng_template_10_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.zoomedStackWidthPx(), "px")("height", ctx.zoomedStackHeightPx(), "px");
        \u0275\u0275advance();
        \u0275\u0275styleProp("width", ctx.pageWidthCss())("transform", ctx.zoomInnerTransform())("transform-origin", "top left");
        \u0275\u0275classProp("is-marquee", ctx.marqueeMode())("is-grabbing", ctx.sheetGrabbing());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.visiblePages());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.reorderable() && !ctx.printCapture() && !ctx.thumbnailMode() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.thumbnailMode() ? 5 : -1);
      }
    }, dependencies: [CommonModule, NgClass, NgTemplateOutlet, NgStyle, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: [`

.layer-quiet[_ngcontent-%COMP%], 
.layer-quiet[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {
  pointer-events: none !important;
}
.selection-outline[_ngcontent-%COMP%] {
  outline: 2px solid rgba(129, 140, 248, 0.9);
  outline-offset: 6px;
  border-radius: 6px;
}
.selection-outline.selection-outline-tight[_ngcontent-%COMP%] {
  outline-offset: 2px;
  border-radius: 4px;
}
textarea.hug-field[_ngcontent-%COMP%] {
  display: inline-block;
  field-sizing: content;
  width: auto;
  min-width: 1ch;
  white-space: pre-wrap;
  vertical-align: top;
}
[data-overlay-handle][_ngcontent-%COMP%], 
[data-section-handle][_ngcontent-%COMP%], 
[data-cell-handle][_ngcontent-%COMP%], 
[data-move-badge][_ngcontent-%COMP%] {
  opacity: 0.72;
  transition: opacity 120ms ease, transform 120ms ease;
}
[data-overlay-handle][_ngcontent-%COMP%]:hover, 
[data-section-handle][_ngcontent-%COMP%]:hover, 
[data-cell-handle][_ngcontent-%COMP%]:hover {
  opacity: 1;
}
.is-text-editing[_ngcontent-%COMP%]   [data-section-handle][_ngcontent-%COMP%], 
.is-text-editing[_ngcontent-%COMP%]   [data-cell-handle][_ngcontent-%COMP%], 
.is-text-editing[_ngcontent-%COMP%]   [data-move-badge][_ngcontent-%COMP%] {
  opacity: 0;
  pointer-events: none;
}
.is-marquee[_ngcontent-%COMP%]   [data-report-page][_ngcontent-%COMP%], 
.is-marquee[_ngcontent-%COMP%]   [data-report-page][_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M16 4v24M4 16h24' stroke='%23fff' stroke-width='4.2' stroke-linecap='round'/%3E%3Cpath d='M16 4v24M4 16h24' stroke='%23111827' stroke-width='1.8' stroke-linecap='round'/%3E%3C/svg%3E") 16 16, crosshair !important;
}
.is-marquee.is-grabbing[_ngcontent-%COMP%]   [data-report-page][_ngcontent-%COMP%], 
.is-marquee.is-grabbing[_ngcontent-%COMP%]   [data-report-page][_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {
  cursor: grabbing !important;
}
.marquee-box[_ngcontent-%COMP%] {
  position: fixed;
  z-index: 1008000;
  border: 1px solid rgb(67, 56, 202);
  background: rgba(79, 70, 229, 0.28);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.45);
  pointer-events: none;
}
/*# sourceMappingURL=report-preview.component.css.map */`], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportPreviewComponent, [{
    type: Component,
    args: [{ selector: "report-preview", standalone: true, imports: [CommonModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!--\r
    Paginated preview: render N paper cards (one per A4 page) so the live\r
    preview matches the actual PDF output. Page 1 owns the logo + signature\r
    overlays and the optional content top spacer; every page renders the\r
    legend at the bottom (mirrors Puppeteer's footerTemplate).\r
-->\r
<div\r
    class="relative mx-auto"\r
    data-report-zoom-stack\r
    [style.width.px]="zoomedStackWidthPx()"\r
    [style.height.px]="zoomedStackHeightPx()"\r
>\r
<div\r
    class="absolute left-0 top-0 flex flex-col items-center gap-4"\r
    [style.width]="pageWidthCss()"\r
    [style.transform]="zoomInnerTransform()"\r
    [style.transform-origin]="'top left'"\r
    [class.is-marquee]="marqueeMode()"\r
    [class.is-grabbing]="sheetGrabbing()"\r
    (click)="onPaperClick($event)"\r
    (contextmenu)="onPaperContextMenu($event)"\r
>\r
    @for (\r
        pageSections of visiblePages();\r
        track pagePaintTrack($index);\r
        let pageIndex = $index, isFirst = $first, count = $count\r
    ) {\r
        <div\r
            #reportPage\r
            data-report-page\r
            [attr.data-report-row]="previewData()?.rowIndex"\r
            [attr.data-report-page-index]="pageIndex"\r
            class="mx-auto flex shrink-0 flex-col relative overflow-hidden rounded-lg"\r
            [class.shadow-lg]="!thumbnailMode()"\r
            [style.width]="pageWidthCss()"\r
            [style.max-width]="pageWidthCss()"\r
            [style.min-width]="pageWidthCss()"\r
            [style.min-height]="pageHeightCss()"\r
            [style.height]="pageHeightCss()"\r
            [style.background-color]="pageBackgroundColor() || '#ffffff'"\r
            style="border: 1px solid #e5e7eb"\r
        >\r
            <!-- Watermark overlay (every page, matches PDF behaviour) -->\r
            @if (watermarkEnabled()) {\r
                @if (watermarkPattern() === 'single') {\r
                    <div\r
                        class="pointer-events-none absolute inset-0 overflow-hidden"\r
                        [style.z-index]="layerPaintZ('watermark', 900)"\r
                        [style.visibility]="layerVisibility('watermark')"\r
                        [style.opacity]="layerPeekOpacity('watermark')"\r
                    >\r
                        <div\r
                            data-overlay-box\r
                            data-overlay-id="watermark"\r
                            class="absolute flex items-center justify-center"\r
                            [class.cursor-move]="isOverlayChosen('watermark')"\r
                            [class.cursor-pointer]="clickable() && isFirst && !isOverlaySelected('watermark')"\r
                            [class.layer-quiet]="isLayerQuiet('watermark')"\r
                        [class.pointer-events-auto]="clickable() && isFirst && !isLayerQuiet('watermark')"\r
                            [style.pointer-events]="isLayerQuiet('watermark') ? 'none' : null"\r
                            [class.group]="isOverlaySelected('watermark')"\r
                            [style.left.px]="viewWatermarkX"\r
                            [style.top.px]="viewWatermarkY"\r
                            [style.width.px]="viewWatermarkWidth"\r
                            [style.height.px]="viewWatermarkHeight"\r
                            [style.outline]="watermarkOverlayBorder"\r
                            style="outline-offset: 6px"\r
                            (pointerdown)="startMove($event, 'watermark')"\r
                            (click)="selectOverlay('watermark', $event)"\r
                            (contextmenu)="onOverlayContextMenu('watermark', $event)"\r
                        >\r
                            @if (watermarkType() === 'text') {\r
                                <span\r
                                    class="pointer-events-none select-none whitespace-nowrap text-center font-bold leading-none text-gray-700"\r
                                    style="text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 1px 1px rgba(0, 0, 0, 0.55); letter-spacing: 0.08em"\r
                                    [style.opacity]="watermarkPaintOpacity()"\r
                                    [style.font-size.px]="viewWatermarkFontSize"\r
                                    [style.transform]="watermarkRotateStyle"\r
                                    >{{ watermarkText() }}</span\r
                                >\r
                            } @else if (watermarkType() === 'logo' && watermarkStampSrc()) {\r
                                <img\r
                                    [src]="watermarkStampSrc()"\r
                                    alt="Watermark"\r
                                    class="h-full w-full object-contain pointer-events-none select-none"\r
                                    style="filter: drop-shadow(0 0 1px #fff) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.55))"\r
                                    [style.opacity]="watermarkPaintOpacity()"\r
                                    [style.transform]="watermarkRotateStyle"\r
                                    draggable="false"\r
                                />\r
                            }\r
                            @if (isOverlaySelected('watermark') && !isLayerQuiet('watermark')) {\r
                                <div\r
                                    data-overlay-handle\r
                                    class="absolute left-1/2 z-30 flex h-6 w-6 -translate-x-1/2 cursor-grab items-center justify-center rounded-full border border-amber-400 bg-white shadow-md hover:bg-amber-50"\r
                                    [style.top.px]="rotateHandleTop(viewWatermarkY)"\r
                                    (pointerdown)="startRotate($event, 'watermark')"\r
                                >\r
                                    <mat-icon\r
                                        class="!h-4 !w-4 !text-[16px] text-amber-600"\r
                                        style="pointer-events: none"\r
                                        >rotate_right</mat-icon\r
                                    >\r
                                </div>\r
                                <div\r
                                    data-overlay-handle\r
                                    class="absolute bottom-[-19px] right-[-19px] z-30 flex h-6 w-6 cursor-nwse-resize items-center justify-center rounded-full border border-amber-400 bg-white shadow-md hover:bg-amber-50"\r
                                    (pointerdown)="startResize($event, 'watermark')"\r
                                >\r
                                    <mat-icon\r
                                        class="!h-4 !w-4 !text-[16px] rotate-90 text-amber-600"\r
                                        style="pointer-events: none"\r
                                        >open_in_full</mat-icon\r
                                    >\r
                                </div>\r
                            }\r
                        </div>\r
                    </div>\r
                } @else {\r
                    <div\r
                        data-overlay-id="watermark"\r
                        class="pointer-events-none absolute inset-0 overflow-hidden"\r
                        [style.z-index]="layerPaintZ('watermark', 900)"\r
                        [style.visibility]="layerVisibility('watermark')"\r
                        [style.opacity]="layerPeekOpacity('watermark')"\r
                        [style.outline]="isLayerPeeked('watermark') ? '2px dashed rgba(217, 119, 6, 0.9)' : null"\r
                        [style.outline-offset.px]="6"\r
                        style="\r
                            display: grid;\r
                            grid-template-columns: repeat(3, 1fr);\r
                            grid-template-rows: repeat(5, 1fr);\r
                            gap: 0;\r
                        "\r
                    >\r
                        @for (i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; track i) {\r
                            <div class="flex items-center justify-center">\r
                                @if (watermarkType() === 'text') {\r
                                    <span\r
                                        class="select-none whitespace-nowrap font-bold text-gray-700"\r
                                        [style.opacity]="watermarkPaintOpacity()"\r
                                        [style.transform]="watermarkRotateStyle"\r
                                        style="font-size: 18px; letter-spacing: 3px; text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 1px 1px rgba(0, 0, 0, 0.55)"\r
                                        >{{ watermarkText() }}</span\r
                                    >\r
                                } @else if (watermarkType() === 'logo' && watermarkStampSrc()) {\r
                                    <img\r
                                        [src]="watermarkStampSrc()"\r
                                        alt=""\r
                                        class="h-16 w-16 select-none object-contain"\r
                                        style="filter: drop-shadow(0 0 1px #fff) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.55))"\r
                                        [style.opacity]="watermarkPaintOpacity()"\r
                                        [style.transform]="watermarkRotateStyle"\r
                                    />\r
                                }\r
                            </div>\r
                        }\r
                    </div>\r
                }\r
            }\r
\r
            <!-- Logo stays on the first sheet. The signature follows signaturePage. -->\r
            @if (signatureEnabled() && signatureImage() && pageIndex === (signaturePage() || 0)) {\r
                <div\r
                    class="absolute inset-0 pointer-events-none"\r
                    [style.z-index]="layerPaintZ('signature', 120)"\r
                    [style.visibility]="layerVisibility('signature')"\r
                    [style.opacity]="layerPeekOpacity('signature')"\r
                >\r
                    <div\r
                        data-overlay-box\r
                        data-overlay-id="signature"\r
                        class="absolute"\r
                        [class.cursor-move]="isOverlayChosen('signature')"\r
                        [class.cursor-pointer]="clickable() && !isOverlaySelected('signature')"\r
                        [class.layer-quiet]="isLayerQuiet('signature')"\r
                        [class.pointer-events-auto]="clickable() && !isLayerQuiet('signature')"\r
                        [style.pointer-events]="isLayerQuiet('signature') ? 'none' : null"\r
                        [style.left.px]="viewSignatureX"\r
                        [style.top.px]="viewSignatureY"\r
                        [style.width.px]="viewSignatureWidth"\r
                        [style.height.px]="viewSignatureHeight"\r
                        [style.outline]="signatureOverlayBorder"\r
                        style="outline-offset: 6px"\r
                        (pointerdown)="startMove($event, 'signature')"\r
                        (click)="selectOverlay('signature', $event)"\r
                        (contextmenu)="onOverlayContextMenu('signature', $event)"\r
                    >\r
                        <img\r
                            [src]="signatureImage()"\r
                            class="w-full h-full object-contain pointer-events-none select-none"\r
                            draggable="false"\r
                        />\r
                        @if (isOverlaySelected('signature') && !isLayerQuiet('signature')) {\r
                            <div\r
                                data-overlay-handle\r
                                class="absolute bottom-[-19px] right-[-19px] z-30 flex h-6 w-6 cursor-nwse-resize items-center justify-center rounded-full border border-indigo-300 bg-white shadow-md hover:bg-indigo-50"\r
                                (pointerdown)="startResize($event, 'signature')"\r
                            >\r
                                <mat-icon\r
                                    class="!text-[16px] !w-4 !h-4 text-indigo-500 rotate-90"\r
                                    style="pointer-events: none"\r
                                    >open_in_full</mat-icon\r
                                >\r
                            </div>\r
                        }\r
                    </div>\r
                </div>\r
            }\r
\r
            <!-- Logo stays on the first sheet. Company logos repeat in the header of every page. -->\r
            @if (hasHeaderLogos() && clickable() && !thumbnailMode()) {\r
                <div\r
                    class="pointer-events-none absolute left-0 right-0 z-[840] border-b border-dashed border-stone-300"\r
                    [style.top.px]="headerBandTopView()"\r
                    [style.height.px]="headerBandHeightView()"\r
                ></div>\r
            }\r
            @if (headerLogoViews().length) {\r
                @for (logo of headerLogoViews(); track logo.id) {\r
                    <div\r
                        class="pointer-events-none absolute inset-0"\r
                        [style.z-index]="layerPaintZ(headerOverlayId(logo.id), 850)"\r
                        [style.visibility]="layerVisibility(headerOverlayId(logo.id))"\r
                        [style.opacity]="layerPeekOpacity(headerOverlayId(logo.id))"\r
                    >\r
                        <div\r
                            data-overlay-box\r
                            [attr.data-overlay-id]="headerOverlayId(logo.id)"\r
                            class="absolute"\r
                            [class.cursor-ew-resize]="clickable()"\r
                            [class.layer-quiet]="isLayerQuiet(headerOverlayId(logo.id))"\r
                            [class.pointer-events-auto]="clickable() && !isLayerQuiet(headerOverlayId(logo.id))"\r
                            [style.pointer-events]="isLayerQuiet(headerOverlayId(logo.id)) ? 'none' : null"\r
                            [style.left.px]="logo.viewX"\r
                            [style.top.px]="logo.viewY"\r
                            [style.width.px]="logo.viewWidth"\r
                            [style.height.px]="logo.viewHeight"\r
                            [style.outline]="headerLogoBorder(logo.id)"\r
                            style="outline-offset: 6px"\r
                            (pointerdown)="startHeaderLogoMove($event, logo.id)"\r
                            (pointermove)="onHeaderLogoMove($event)"\r
                            (pointerup)="stopHeaderLogoMove($event)"\r
                            (pointercancel)="stopHeaderLogoMove($event)"\r
                            (click)="selectOverlay(headerOverlayId(logo.id), $event)"\r
                            (contextmenu)="onOverlayContextMenu(headerOverlayId(logo.id), $event)"\r
                        >\r
                            <img\r
                                [src]="logo.src"\r
                                alt=""\r
                                class="h-full w-full object-contain pointer-events-none select-none"\r
                                draggable="false"\r
                            />\r
                            @if (clickable() && isOverlaySelected(headerOverlayId(logo.id)) && !isLayerQuiet(headerOverlayId(logo.id))) {\r
                                <div\r
                                    data-overlay-handle\r
                                    class="absolute bottom-[-19px] right-[-19px] z-30 flex h-6 w-6 cursor-nwse-resize items-center justify-center rounded-full border border-indigo-300 bg-white shadow-md hover:bg-indigo-50"\r
                                    (pointerdown)="startHeaderLogoResize($event, logo.id)"\r
                                    (pointermove)="onHeaderLogoResize($event)"\r
                                    (pointerup)="stopHeaderLogoResize($event)"\r
                                    (pointercancel)="stopHeaderLogoResize($event)"\r
                                >\r
                                    <mat-icon\r
                                        class="!h-4 !w-4 !text-[16px] rotate-90 text-indigo-500"\r
                                        style="pointer-events: none"\r
                                        >open_in_full</mat-icon\r
                                    >\r
                                </div>\r
                            }\r
                        </div>\r
                    </div>\r
                }\r
            }\r
            @if (hasFooterLogos() && clickable() && !thumbnailMode()) {\r
                <div\r
                    class="pointer-events-none absolute left-0 right-0 z-[840] border-t border-dashed border-stone-300"\r
                    [style.top.px]="footerBandTopView()"\r
                    [style.height.px]="footerBandHeightView()"\r
                ></div>\r
            }\r
\r
            @if (isFirst && logoEnabled() && logoUrl() && !headerLogoViews().length) {\r
                <div\r
                    class="absolute inset-0 pointer-events-none"\r
                    [style.z-index]="layerPaintZ('logo', 80)"\r
                    [style.visibility]="layerVisibility('logo')"\r
                    [style.opacity]="layerPeekOpacity('logo')"\r
                >\r
                    <div\r
                        data-overlay-box\r
                        data-overlay-id="logo"\r
                        class="absolute"\r
                        [class.cursor-move]="isOverlayChosen('logo')"\r
                        [class.cursor-pointer]="clickable() && !isOverlaySelected('logo')"\r
                        [class.layer-quiet]="isLayerQuiet('logo')"\r
                        [class.pointer-events-auto]="clickable() && !isLayerQuiet('logo')"\r
                        [style.pointer-events]="isLayerQuiet('logo') ? 'none' : null"\r
                        [class.group]="isOverlaySelected('logo')"\r
                        [style.left.px]="viewLogoX"\r
                        [style.top.px]="viewLogoY"\r
                        [style.width.px]="viewLogoWidth"\r
                        [style.height.px]="viewLogoHeight"\r
                        [style.outline]="logoOverlayBorder"\r
                        style="outline-offset: 6px"\r
                        (pointerdown)="startMove($event, 'logo')"\r
                        (click)="selectOverlay('logo', $event)"\r
                        (contextmenu)="onOverlayContextMenu('logo', $event)"\r
                    >\r
                        <img\r
                            [src]="logoUrl()"\r
                            alt="Logo"\r
                            class="h-full w-full object-contain pointer-events-none select-none"\r
                            [style.transform]="logoRotateStyle"\r
                            draggable="false"\r
                        />\r
                        @if (isOverlaySelected('logo') && !isLayerQuiet('logo')) {\r
                            <div\r
                                data-overlay-handle\r
                                class="absolute left-1/2 z-30 flex h-6 w-6 -translate-x-1/2 cursor-grab items-center justify-center rounded-full border border-indigo-300 bg-white shadow-md hover:bg-indigo-50"\r
                                [style.top.px]="rotateHandleTop(viewLogoY)"\r
                                (pointerdown)="startRotate($event, 'logo')"\r
                            >\r
                                <mat-icon\r
                                    class="!h-4 !w-4 !text-[16px] text-indigo-500"\r
                                    style="pointer-events: none"\r
                                    >rotate_right</mat-icon\r
                                >\r
                            </div>\r
                            <div\r
                                data-overlay-handle\r
                                class="absolute bottom-[-19px] right-[-19px] z-30 flex h-6 w-6 cursor-nwse-resize items-center justify-center rounded-full border border-indigo-300 bg-white shadow-md hover:bg-indigo-50"\r
                                (pointerdown)="startResize($event, 'logo')"\r
                            >\r
                                <mat-icon\r
                                    class="!h-4 !w-4 !text-[16px] rotate-90 text-indigo-500"\r
                                    style="pointer-events: none"\r
                                    >open_in_full</mat-icon\r
                                >\r
                            </div>\r
                        }\r
                    </div>\r
                </div>\r
            }\r
\r
            @for (image of sheetImagesForPage(pageIndex); track image.id) {\r
                    @if (image.src) {\r
                        <div\r
                            class="absolute inset-0 pointer-events-none"\r
                            data-sheet-image\r
                            [attr.data-sheet-image-page]="image.page ?? 0"\r
                            [style.z-index]="layerPaintZ(sheetOverlayId(image.id), image.zIndex || 48)"\r
                            [style.visibility]="layerVisibility(sheetOverlayId(image.id))"\r
                            [style.opacity]="layerPeekOpacity(sheetOverlayId(image.id))"\r
                        >\r
                            <div\r
                                data-overlay-box\r
                                [attr.data-overlay-id]="sheetOverlayId(image.id)"\r
                                class="absolute"\r
                                [class.cursor-move]="isOverlayChosen(sheetOverlayId(image.id))"\r
                                [class.cursor-pointer]="clickable() && !isOverlaySelected(sheetOverlayId(image.id))"\r
                                [class.layer-quiet]="isLayerQuiet(sheetOverlayId(image.id))"\r
                                [class.pointer-events-auto]="clickable() && !isLayerQuiet(sheetOverlayId(image.id))"\r
                                [style.pointer-events]="isLayerQuiet(sheetOverlayId(image.id)) ? 'none' : null"\r
                                [class.group]="isOverlaySelected(sheetOverlayId(image.id))"\r
                                [style.left.px]="sheetImageView(image).x"\r
                                [style.top.px]="sheetImageView(image).y"\r
                                [style.width.px]="sheetImageView(image).width"\r
                                [style.height.px]="sheetImageView(image).height"\r
                                [style.outline]="sheetImageBorder(image.id)"\r
                                style="outline-offset: 6px"\r
                                (pointerdown)="startMove($event, sheetOverlayId(image.id))"\r
                                (click)="selectOverlay(sheetOverlayId(image.id), $event)"\r
                                (contextmenu)="onOverlayContextMenu(sheetOverlayId(image.id), $event)"\r
                            >\r
                                <img\r
                                    [src]="image.src"\r
                                    alt=""\r
                                    class="h-full w-full object-contain pointer-events-none select-none"\r
                                    [style.transform]="'rotate(' + (image.rotation || 0) + 'deg)'"\r
                                    draggable="false"\r
                                />\r
                                @if (isOverlaySelected(sheetOverlayId(image.id)) && !isLayerQuiet(sheetOverlayId(image.id))) {\r
                                    <div\r
                                        data-overlay-handle\r
                                        class="absolute left-1/2 z-30 flex h-6 w-6 -translate-x-1/2 cursor-grab items-center justify-center rounded-full border border-indigo-300 bg-white shadow-md hover:bg-indigo-50"\r
                                        [style.top.px]="rotateHandleTop(sheetImageView(image).y)"\r
                                        (pointerdown)="startRotate($event, sheetOverlayId(image.id))"\r
                                    >\r
                                        <mat-icon\r
                                            class="!h-4 !w-4 !text-[16px] text-indigo-500"\r
                                            style="pointer-events: none"\r
                                            >rotate_right</mat-icon\r
                                        >\r
                                    </div>\r
                                    <div\r
                                        data-overlay-handle\r
                                        class="absolute bottom-[-19px] right-[-19px] z-30 flex h-6 w-6 cursor-nwse-resize items-center justify-center rounded-full border border-indigo-300 bg-white shadow-md hover:bg-indigo-50"\r
                                        (pointerdown)="startResize($event, sheetOverlayId(image.id))"\r
                                    >\r
                                        <mat-icon\r
                                            class="!h-4 !w-4 !text-[16px] rotate-90 text-indigo-500"\r
                                            style="pointer-events: none"\r
                                            >open_in_full</mat-icon\r
                                        >\r
                                    </div>\r
                                }\r
                            </div>\r
                        </div>\r
                    }\r
                }\r
\r
            <!-- Top page number (every page when configured) -->\r
            @if (showPageNumbers() && pageNumberPosition().startsWith('top')) {\r
                <div\r
                    data-report-top-chrome\r
                    class="px-8 pt-4 text-[10px] text-gray-400"\r
                    [style.position]="hasFreeLayout() ? 'absolute' : null"\r
                    [style.top.px]="hasFreeLayout() ? 0 : null"\r
                    [style.left.px]="hasFreeLayout() ? 0 : null"\r
                    [style.right.px]="hasFreeLayout() ? 0 : null"\r
                    [style.z-index]="hasFreeLayout() ? '910' : null"\r
                    [style.pointer-events]="hasFreeLayout() ? 'none' : null"\r
                    [style.text-align]="\r
                        pageNumberPosition() === 'top-left'\r
                            ? 'left'\r
                            : pageNumberPosition() === 'top-right'\r
                              ? 'right'\r
                              : 'center'\r
                    "\r
                >\r
                    {{ 'smartReport.pageOf' | transloco: { current: pageIndex + 1, total: count } }}\r
                </div>\r
            }\r
\r
            <div\r
                data-report-page-inner\r
                class="min-h-0"\r
                [class.relative]="!hasFreeLayout()"\r
                [class.flex]="!hasFreeLayout()"\r
                [class.flex-1]="!hasFreeLayout()"\r
                [class.flex-col]="!hasFreeLayout()"\r
                [class.absolute]="hasFreeLayout()"\r
                [class.inset-0]="hasFreeLayout()"\r
                [class.p-8]="!hasFreeLayout()"\r
                [class.overflow-hidden]="!hasFreeLayout()"\r
                [class.overflow-visible]="hasFreeLayout()"\r
                [style.box-shadow]="clickable() && reorderable() ? 'inset 0 0 0 1px rgba(99, 102, 241, 0.25)' : null"\r
            >\r
                <!-- Flow layout keeps content below the logo. Free placement uses the whole sheet. -->\r
                @if (!hasFreeLayout() && isFirst && viewContentPaddingTop > 0) {\r
                    <div [style.height.px]="viewContentPaddingTop"></div>\r
                }\r
\r
                <!-- Empty state (only when no sections at all) -->\r
                @if (isFirst && (template().sections?.length ?? 0) === 0) {\r
                    <div class="flex flex-col items-center justify-center h-64 text-gray-300">\r
                        <mat-icon class="!text-5xl !w-14 !h-14 mb-3">description</mat-icon>\r
                        <p class="text-sm">{{ 'smartReport.noSectionsToPreview' | transloco }}</p>\r
                    </div>\r
                }\r
\r
                @for (section of pageSections; track section.id) {\r
                    @if (!isPageAnchor(section)) {\r
                    <div\r
                        data-report-section\r
                        [class.layer-quiet]="isLayerQuiet('sec:' + section.id)"\r
                        [class.is-text-editing]="editingText()?.sectionId === section.id"\r
                        [attr.data-section-id]="section.id"\r
                        [attr.data-section-type]="section.type"\r
                        [class.relative]="!hasFreeLayout()"\r
                        [class.absolute]="hasFreeLayout()"\r
                        [style.pointer-events]="draggingSectionId() && draggingSectionId() !== section.id ? 'none' : null"\r
                        [style.touch-action]="reorderable() ? 'none' : null"\r
                        [class.mb-3]="!hasFreeLayout()"\r
                        [class.cursor-pointer]="clickable() && !reorderable()"\r
                        [class.select-none]="reorderable()"\r
                        [class.cursor-grab]="clickable() && reorderable() && draggingSectionId() !== section.id"\r
                        [class.cursor-grabbing]="draggingSectionId() === section.id"\r
                        [class.opacity-90]="draggingSectionId() === section.id"\r
                        [class.selection-outline]="showsSectionOutline(section)"\r
                        [class.selection-outline-tight]="hugsText(section)"\r
                        [style.background-color]="isShapeSection(section) ? null : sectionFrameBackground(section)"\r
                        [style.border]="isShapeSection(section) ? 'none' : sectionFrameBorder(section)"\r
                        [style.border-radius.px]="isShapeSection(section) ? 0 : sectionFrameRadius(section)"\r
                        [style.padding]="isShapeSection(section) ? '0' : sectionFramePadding(section)"\r
                        [ngStyle]="sectionHostStyle(section)"\r
                        (click)="onSectionActivate(section, $event)"\r
                        (contextmenu)="onSectionContextMenu(section, $event)"\r
                        (pointerdown)="onSectionPointerDown(section, $event)"\r
                    >\r
                        @if (clickable() && reorderable() && !isLayerQuiet('sec:' + section.id) && (isSectionChosen(section) || draggingSectionId() === section.id)) {\r
                            <div\r
                                data-print-hide\r
                                data-move-badge\r
                                class="absolute z-30 flex h-5 w-5 items-center justify-center rounded-full border border-indigo-200 bg-white text-indigo-500 shadow-sm"\r
                                [style.left.px]="moveBadgeOffset(section.frame?.x)"\r
                                [style.top.px]="moveBadgeOffset(section.frame?.y)"\r
                                title="Mover"\r
                            >\r
                                <mat-icon class="!h-3 !w-3 !text-[12px]" style="pointer-events: none">open_with</mat-icon>\r
                            </div>\r
                        }\r
                        @if (clickable() && isShapeSection(section) && selectedSectionId() === section.id && !isLayerQuiet('sec:' + section.id)) {\r
                            <div\r
                                data-print-hide\r
                                data-section-handle\r
                                class="absolute left-1/2 z-30 flex h-6 w-6 -translate-x-1/2 cursor-grab items-center justify-center rounded-full border border-indigo-300 bg-white shadow-md hover:bg-indigo-50"\r
                                [style.top.px]="rotateHandleTop(section.frame?.y)"\r
                                (pointerdown)="startSectionRotate(section, $event)"\r
                            >\r
                                <mat-icon class="!h-4 !w-4 !text-[16px] text-indigo-500" style="pointer-events: none">rotate_right</mat-icon>\r
                            </div>\r
                            <button\r
                                type="button"\r
                                data-print-hide\r
                                data-section-handle\r
                                class="absolute left-[-8px] top-[-8px] z-30 h-4 w-4 cursor-nwse-resize rounded-sm border border-indigo-400 bg-white shadow"\r
                                (pointerdown)="startSectionResize(section, $event, 'nw')"\r
                            ></button>\r
                            <button\r
                                type="button"\r
                                data-print-hide\r
                                data-section-handle\r
                                class="absolute right-[-8px] top-[-8px] z-30 h-4 w-4 cursor-nesw-resize rounded-sm border border-indigo-400 bg-white shadow"\r
                                (pointerdown)="startSectionResize(section, $event, 'ne')"\r
                            ></button>\r
                            <button\r
                                type="button"\r
                                data-print-hide\r
                                data-section-handle\r
                                class="absolute bottom-[-8px] left-[-8px] z-30 h-4 w-4 cursor-nesw-resize rounded-sm border border-indigo-400 bg-white shadow"\r
                                (pointerdown)="startSectionResize(section, $event, 'sw')"\r
                            ></button>\r
                            <button\r
                                type="button"\r
                                data-print-hide\r
                                data-section-handle\r
                                class="absolute bottom-[-8px] right-[-8px] z-30 h-4 w-4 cursor-nwse-resize rounded-sm border border-indigo-400 bg-white shadow"\r
                                (pointerdown)="startSectionResize(section, $event, 'se')"\r
                            ></button>\r
                        }\r
                        @if (\r
                            clickable() &&\r
                            reorderable() &&\r
                            hasFreeLayout() &&\r
                            !isShapeSection(section) &&\r
                            !hugsText(section) &&\r
                            !isLayerQuiet('sec:' + section.id) &&\r
                            selectedSectionId() === section.id &&\r
                            !selectedCellKey() &&\r
                            !draggingSectionId()\r
                        ) {\r
                            @for (handle of blockResizeHandles; track handle.id) {\r
                                <button\r
                                    type="button"\r
                                    data-print-hide\r
                                    data-section-handle\r
                                    [attr.aria-label]="'smartReport.resizeBlock' | transloco"\r
                                    [title]="'smartReport.resizeBlock' | transloco"\r
                                    class="absolute z-30 border border-indigo-400 bg-white shadow"\r
                                    [ngClass]="handle.cls"\r
                                    (pointerdown)="startSectionResize(section, $event, handle.id)"\r
                                ></button>\r
                            }\r
                        }\r
                        @if (isSectionDropBefore(section)) {\r
                            <div class="pointer-events-none absolute left-1 right-1 top-0 z-20 h-1 rounded-full bg-indigo-500"></div>\r
                        }\r
                        @if (isSectionDropAfter(section)) {\r
                            <div class="pointer-events-none absolute bottom-0 left-1 right-1 z-20 h-1 rounded-full bg-indigo-500"></div>\r
                        }\r
                        <ng-container\r
                            [ngTemplateOutlet]="sectionBody"\r
                            [ngTemplateOutletContext]="{ section: section, measure: false }"\r
                        ></ng-container>\r
                    </div>\r
                    }\r
                }\r
\r
                @if (alignmentGuides().length) {\r
                    @for (guide of alignmentGuides(); track guide.axis + ':' + guide.page + ':' + guide.at) {\r
                        @if (guide.page === pageIndex) {\r
                            <div\r
                                data-print-hide\r
                                class="pointer-events-none absolute z-[1200]"\r
                                [style.left.px]="guide.axis === 'x' ? guide.at : 0"\r
                                [style.top.px]="guide.axis === 'y' ? guide.at : 0"\r
                                [style.width]="guide.axis === 'y' ? '100%' : '0px'"\r
                                [style.height]="guide.axis === 'x' ? '100%' : '0px'"\r
                                [style.border-left]="guide.axis === 'x' ? '1px dashed #e11d48' : null"\r
                                [style.border-top]="guide.axis === 'y' ? '1px dashed #e11d48' : null"\r
                            ></div>\r
                        }\r
                    }\r
                }\r
\r
                <!-- Footer (every page). In free layout it stays at the bottom\r
                     of the sheet and sits behind the blocks, so a block can\r
                     move over it. The PDF clone copies this same box. -->\r
                @if (hasBottomChrome()) {\r
                    <div\r
                        data-report-footer\r
                        class="shrink-0"\r
                        [class.mt-auto]="!hasFreeLayout()"\r
                        [class.pb-6]="!hasFreeLayout()"\r
                        [class.px-0]="!hasFreeLayout()"\r
                        [style.position]="hasFreeLayout() ? 'absolute' : null"\r
                        [style.left.px]="hasFreeLayout() ? 0 : null"\r
                        [style.right.px]="hasFreeLayout() ? 0 : null"\r
                        [style.bottom.px]="hasFreeLayout() ? 0 : null"\r
                        [style.z-index]="hasFreeLayout() ? '910' : null"\r
                        [style.pointer-events]="hasFreeLayout() && draggingSectionId() ? 'none' : null"\r
                        [style.padding-left.px]="hasFreeLayout() ? 32 : null"\r
                        [style.padding-right.px]="hasFreeLayout() ? 32 : null"\r
                        [style.padding-bottom.px]="hasFreeLayout() ? 24 : null"\r
                        [style.background-color]="hasFreeLayout() ? (pageBackgroundColor() || '#ffffff') : null"\r
                    >\r
                        @if (legend() || termsAndConditions()) {\r
                            <div class="w-full min-w-0 border-t border-gray-200 pt-3 mb-2 space-y-1.5">\r
                                @if (legend()) {\r
                                    <p\r
                                        class="text-[10px] text-gray-500 leading-relaxed whitespace-pre-wrap m-0 w-full min-w-0 font-medium"\r
                                        [style.text-align]="legendPosition()"\r
                                        [textContent]="legend()"\r
                                    ></p>\r
                                }\r
                                @if (termsAndConditions()) {\r
                                    <p\r
                                        class="text-[9px] text-gray-400 leading-relaxed whitespace-pre-wrap m-0 w-full min-w-0"\r
                                        [style.text-align]="termsPosition()"\r
                                        [textContent]="termsAndConditions()"\r
                                    ></p>\r
                                }\r
                            </div>\r
                        }\r
                        @if (showPageNumbers() && pageNumberPosition().startsWith('bottom')) {\r
                            <div\r
                                class="text-[10px] text-gray-400"\r
                                [class.border-t]="!legend() && !termsAndConditions()"\r
                                [class.border-gray-200]="!legend() && !termsAndConditions()"\r
                                [class.pt-3]="!legend() && !termsAndConditions()"\r
                                [style.text-align]="footerAlign(pageNumberPosition())"\r
                            >\r
                                {{ 'smartReport.pageOf' | transloco: { current: pageIndex + 1, total: count } }}\r
                            </div>\r
                        }\r
                    </div>\r
                }\r
            </div>\r
        </div>\r
    }\r
</div>\r
</div>\r
    @if (reorderable() && !printCapture() && !thumbnailMode()) {\r
        <div class="mx-auto mt-4 flex flex-wrap items-center justify-center gap-2">\r
            @if (canRemoveLastPage()) {\r
                <button\r
                    type="button"\r
                    class="flex items-center gap-1.5 rounded-full border border-rose-300 bg-rose-50 px-3 py-1.5 text-[11px] font-medium text-rose-800 shadow-sm hover:border-rose-400 hover:bg-rose-100 dark:border-rose-800 dark:bg-rose-950/50 dark:text-rose-300 dark:hover:bg-rose-950"\r
                    (click)="emitRemovePage($event)"\r
                >\r
                    <mat-icon class="!h-3.5 !w-3.5 !text-[15px]">delete</mat-icon>\r
                    {{ 'visitaGuide.layoutRemovePage' | transloco }}\r
                </button>\r
            }\r
            <button\r
                type="button"\r
                class="flex items-center gap-1.5 rounded-full border border-stone-300 bg-white px-3 py-1.5 text-[11px] font-medium text-stone-700 shadow-sm hover:border-stone-400 hover:bg-stone-50 dark:border-gray-600 dark:bg-gray-900 dark:text-stone-200 dark:hover:bg-gray-800"\r
                (click)="emitAddPage($event)"\r
            >\r
                <mat-icon class="!h-3.5 !w-3.5 !text-[15px]">note_add</mat-icon>\r
                {{ 'visitaGuide.layoutAddPage' | transloco }}\r
            </button>\r
        </div>\r
    }\r
\r
<!--\r
    Off-screen measurement container.\r
    Renders every section once at A4 width with the same horizontal padding\r
    used in the visible cards so we can measure each section's natural\r
    height and bin-pack them into pages. Hidden but still laid out so\r
    getBoundingClientRect returns real values.\r
-->\r
@if (!thumbnailMode()) {\r
<div\r
    aria-hidden="true"\r
    class="px-8 sm:px-10 lg:px-12"\r
    style="\r
        position: absolute;\r
        left: -100000px;\r
        top: 0;\r
        visibility: hidden;\r
        pointer-events: none;\r
    "\r
    [style.width]="measureWidthCss()"\r
>\r
    @for (section of template().sections || []; track section.id) {\r
        <div\r
            #measureSection\r
            [attr.data-section-id]="section.id"\r
            [style.background-color]="sectionFrameBackground(section)"\r
            [style.border]="sectionFrameBorder(section)"\r
            [style.border-radius.px]="sectionFrameRadius(section)"\r
            [style.padding]="sectionFramePadding(section)"\r
        >\r
            <ng-container\r
                [ngTemplateOutlet]="sectionBody"\r
                [ngTemplateOutletContext]="{ section: section, measure: true }"\r
            ></ng-container>\r
        </div>\r
    }\r
\r
    @if (hasBottomChrome()) {\r
        <div #measureLegend class="pb-6">\r
            @if (legend() || termsAndConditions()) {\r
                <div class="w-full min-w-0 border-t border-gray-200 pt-3 mb-2 space-y-1.5">\r
                    @if (legend()) {\r
                        <p\r
                            class="text-[10px] text-gray-500 leading-relaxed whitespace-pre-wrap m-0 w-full min-w-0 font-medium"\r
                            [style.text-align]="legendPosition()"\r
                            [textContent]="legend()"\r
                        ></p>\r
                    }\r
                    @if (termsAndConditions()) {\r
                        <p\r
                            class="text-[9px] text-gray-400 leading-relaxed whitespace-pre-wrap m-0 w-full min-w-0"\r
                            [style.text-align]="termsPosition()"\r
                            [textContent]="termsAndConditions()"\r
                        ></p>\r
                    }\r
                </div>\r
            }\r
            @if (showPageNumbers() && pageNumberPosition().startsWith('bottom')) {\r
                <div\r
                    class="text-[10px] text-gray-400"\r
                    [class.border-t]="!legend() && !termsAndConditions()"\r
                    [class.border-gray-200]="!legend() && !termsAndConditions()"\r
                    [class.pt-3]="!legend() && !termsAndConditions()"\r
                    [style.text-align]="footerAlign(pageNumberPosition())"\r
                >\r
                    {{ 'smartReport.pageOf' | transloco: { current: 1, total: 1 } }}\r
                </div>\r
            }\r
        </div>\r
    }\r
</div>\r
}\r
\r
<!--\r
    One definition per section type, used by both the visible cards and the\r
    off-screen measurement pass. Previously each type was written twice, which meant\r
    a block could measure at one height and display at another.\r
\r
    The rich data types render as an outline rather than a facsimile: exact\r
    typography, page breaks and conditional colours come from the backend renderer,\r
    which the builder shows in its "Exact" iframe. The canvas only needs enough to\r
    recognize, select and reorder a block.\r
-->\r
<!-- Edge handles on the selected cell. \`axes\` is any of 'x' (grid columns), 'y' (height), 'w' (table column width). -->\r
<ng-template #cellResizeHandles let-section="section" let-key="key" let-axes="axes" let-measure="measure">\r
    @if (!measure && clickable() && reorderable() && isCellSelected(section, key) && !isLayerQuiet('sec:' + section.id)) {\r
        @if (axes.includes('x') || axes.includes('w')) {\r
            <button\r
                type="button"\r
                data-print-hide\r
                data-cell-handle\r
                [attr.aria-label]="'smartReport.resizeCellWidth' | transloco"\r
                [title]="'smartReport.resizeCellWidth' | transloco"\r
                class="absolute right-[-5px] top-1/2 z-20 h-5 w-2.5 -translate-y-1/2 cursor-ew-resize rounded-full border border-indigo-400 bg-white shadow"\r
                (pointerdown)="startCellResize(section, key, axes.includes('w') ? 'w' : 'x', $event)"\r
                (dblclick)="resetCellSize(section, key, axes.includes('w') ? 'w' : 'x', $event)"\r
                (click)="$event.stopPropagation()"\r
            ></button>\r
        }\r
        @if (axes.includes('y')) {\r
            <button\r
                type="button"\r
                data-print-hide\r
                data-cell-handle\r
                [attr.aria-label]="'smartReport.resizeCellHeight' | transloco"\r
                [title]="'smartReport.resizeCellHeight' | transloco"\r
                class="absolute bottom-[-5px] left-1/2 z-20 h-2.5 w-5 -translate-x-1/2 cursor-ns-resize rounded-full border border-indigo-400 bg-white shadow"\r
                (pointerdown)="startCellResize(section, key, 'y', $event)"\r
                (dblclick)="resetCellSize(section, key, 'y', $event)"\r
                (click)="$event.stopPropagation()"\r
            ></button>\r
        }\r
    }\r
</ng-template>\r
<ng-template #sectionBody let-section="section" let-measure="measure">\r
    @if (section.type === 'header') {\r
        <div\r
            [class.mb-4]="!hasFreeLayout()"\r
            [class.w-fit]="hasFreeLayout()"\r
            [style.text-align]="roleTextAlign(section, 'title')"\r
            [style.max-width.px]="hasFreeLayout() ? textHugMaxCss(section) : null"\r
        >\r
            <h2\r
                data-sheet-role="title"\r
                [style.font-size.px]="roleFontSize(section, 'title')"\r
                [style.font-weight]="roleFontWeight(section, 'title')"\r
                [style.font-style]="roleFontStyle(section, 'title')" [style.text-decoration]="roleTextDecoration(section, 'title')"\r
                [style.font-family]="roleFontFamily(section, 'title')"\r
                [style.color]="roleColor(section, 'title')"\r
                [style.max-width.px]="hasFreeLayout() ? textHugMaxCss(section) : null"\r
                class="inline-block whitespace-pre-wrap leading-tight"\r
                [class.max-w-full]="!hasFreeLayout()"\r
                [class.ring-2]="isTitleSelected(section)"\r
                [class.ring-inset]="isTitleSelected(section)"\r
                [class.ring-indigo-400]="isTitleSelected(section)"\r
                [class.rounded-sm]="isTitleSelected(section)"\r
                (contextmenu)="onTitleContextMenu(section, $event)"\r
            >\r
                <ng-container\r
                    [ngTemplateOutlet]="sheetText"\r
                    [ngTemplateOutletContext]="sheetTextContext(section, 'title', section.staticContent || section.label || ('smartReport.untitled' | transloco), measure, true)"\r
                ></ng-container>\r
            </h2>\r
        </div>\r
    }\r
\r
    @if (section.type === 'text') {\r
        <div [class.mb-3]="!hasFreeLayout()" [class.w-fit]="hasFreeLayout()">\r
            <p\r
                [style.font-size.px]="roleFontSize(section, 'title')"\r
                [style.font-weight]="roleFontWeight(section, 'title')"\r
                [style.font-style]="roleFontStyle(section, 'title')" [style.text-decoration]="roleTextDecoration(section, 'title')"\r
                [style.font-family]="roleFontFamily(section, 'title')"\r
                [style.text-align]="roleTextAlign(section, 'title')"\r
                [style.color]="roleColor(section, 'title')"\r
                [style.max-width.px]="hasFreeLayout() ? textHugMaxCss(section) : null"\r
                class="leading-relaxed whitespace-pre-wrap"\r
                [class.inline-block]="hasFreeLayout()"\r
            >\r
                <ng-container\r
                    [ngTemplateOutlet]="sheetText"\r
                    [ngTemplateOutletContext]="sheetTextContext(section, 'body', section.staticContent || ('smartReport.textContent' | transloco), measure, true)"\r
                ></ng-container>\r
            </p>\r
        </div>\r
    }\r
\r
    @if (section.type === 'field') {\r
        <div\r
            class="min-w-0 px-2 py-1.5"\r
            [ngStyle]="rowLineBg(section)"\r
        >\r
            <div\r
                data-field-part="label"\r
                class="min-w-0 break-words tracking-wide"\r
                [class.ring-1]="isFieldPartSelected(section, 'label')"\r
                [class.ring-lime-500]="isFieldPartSelected(section, 'label')"\r
                [class.rounded-sm]="isFieldPartSelected(section, 'label')"\r
                [style.font-size.px]="roleFontSize(section, 'label')"\r
                [style.font-weight]="roleFontWeight(section, 'label')"\r
                [style.font-style]="roleFontStyle(section, 'label')" [style.text-decoration]="roleTextDecoration(section, 'label')"\r
                [style.font-family]="roleFontFamily(section, 'label')"\r
                [style.text-align]="roleTextAlign(section, 'label')"\r
                [style.color]="roleColor(section, 'label')"\r
            >\r
                <ng-container\r
                    [ngTemplateOutlet]="sheetText"\r
                    [ngTemplateOutletContext]="sheetTextContext(section, 'title', section.label || ('smartReport.field' | transloco), measure)"\r
                ></ng-container>\r
            </div>\r
            <div\r
                data-field-part="value"\r
                class="min-w-0 break-words"\r
                [class.ring-1]="isFieldPartSelected(section, 'value')"\r
                [class.ring-orange-400]="isFieldPartSelected(section, 'value')"\r
                [class.rounded-sm]="isFieldPartSelected(section, 'value')"\r
                [style.font-size.px]="roleFontSize(section, 'value')"\r
                [style.font-weight]="roleFontWeight(section, 'value')"\r
                [style.font-style]="roleFontStyle(section, 'value')" [style.text-decoration]="roleTextDecoration(section, 'value')"\r
                [style.font-family]="roleFontFamily(section, 'value')"\r
                [style.text-align]="roleTextAlign(section, 'value')"\r
                [style.color]="roleColor(section, 'value')"\r
            >\r
                <ng-container\r
                    [ngTemplateOutlet]="sheetText"\r
                    [ngTemplateOutletContext]="sheetTextContext(section, 'cellValue', boundValue(section, '__value', resolveDataPath(section.dataPath) || '\u2014'), measure, false, '__value', resolveDataPath(section.dataPath) || '')"\r
                ></ng-container>\r
            </div>\r
        </div>\r
    }\r
\r
    @if (section.type === 'table') {\r
        <div class="mb-4" [style.font-family]="roleFontFamily(section, 'title')" [style.text-align]="roleTextAlign(section, 'title')">\r
            @if (section.label) {\r
                <h4\r
                    data-sheet-role="title"\r
                    class="mb-2 inline-block max-w-full tracking-wide"\r
                    [style.font-size.px]="roleFontSize(section, 'title')"\r
                    [style.font-weight]="roleFontWeight(section, 'title')"\r
                    [style.font-style]="roleFontStyle(section, 'title')" [style.text-decoration]="roleTextDecoration(section, 'title')"\r
                    [style.color]="roleColor(section, 'title')"\r
                    [class.ring-2]="isTitleSelected(section)"\r
                    [class.ring-inset]="isTitleSelected(section)"\r
                    [class.ring-indigo-400]="isTitleSelected(section)"\r
                    [class.rounded-sm]="isTitleSelected(section)"\r
                    (contextmenu)="onTitleContextMenu(section, $event)"\r
                >\r
                    <ng-container\r
                        [ngTemplateOutlet]="sheetText"\r
                        [ngTemplateOutletContext]="sheetTextContext(section, 'title', section.label, measure)"\r
                    ></ng-container>\r
                </h4>\r
            }\r
            <table class="w-full">\r
                <tbody>\r
                    @for (row of resolveTableData(section); track row.key) {\r
                        <tr\r
                            [ngStyle]="rowLineBg(section)"\r
                        >\r
                            <td\r
                                class="py-2 pr-4 w-1/3"\r
                                [style.font-family]="roleFontFamily(section, 'label')"\r
                                [style.font-size.px]="roleFontSize(section, 'label')"\r
                                [style.font-weight]="roleFontWeight(section, 'label')"\r
                                [style.font-style]="roleFontStyle(section, 'label')" [style.text-decoration]="roleTextDecoration(section, 'label')"\r
                                [style.text-align]="roleTextAlign(section, 'label')"\r
                                [style.color]="roleColor(section, 'label')"\r
                            >\r
                                <ng-container\r
                                    [ngTemplateOutlet]="sheetText"\r
                                    [ngTemplateOutletContext]="sheetTextContext(section, 'cellLabel', entryLabel(section, row), measure, false, row.key, row.label)"\r
                                ></ng-container>\r
                            </td>\r
                            <td\r
                                class="py-2"\r
                                [style.font-family]="roleFontFamily(section, 'value')"\r
                                [style.font-size.px]="roleFontSize(section, 'value')"\r
                                [style.font-weight]="roleFontWeight(section, 'value')"\r
                                [style.font-style]="roleFontStyle(section, 'value')" [style.text-decoration]="roleTextDecoration(section, 'value')"\r
                                [style.text-align]="roleTextAlign(section, 'value')"\r
                                [style.color]="roleColor(section, 'value')"\r
                            >\r
                                <ng-container\r
                                    [ngTemplateOutlet]="sheetText"\r
                                    [ngTemplateOutletContext]="sheetTextContext(section, 'cellValue', boundValue(section, row.key, row.value), measure, false, row.key, row.value)"\r
                                ></ng-container>\r
                            </td>\r
                        </tr>\r
                    }\r
                    @if (resolveTableData(section).length === 0) {\r
                        <tr>\r
                            <td colspan="2" class="py-4 text-center text-gray-300 text-xs">\r
                                {{\r
                                    'smartReport.noDataAtPath'\r
                                        | transloco: { path: section.dataPath }\r
                                }}\r
                            </td>\r
                        </tr>\r
                    }\r
                </tbody>\r
            </table>\r
        </div>\r
    }\r
\r
    @if (section.type === 'image') {\r
        @let framed = hasFreeLayout() && !!displayFrame(section)?.height;\r
        <div\r
            [class.mb-4]="!framed"\r
            [class.h-full]="framed"\r
            [class.w-full]="framed"\r
            [style.text-align]="roleTextAlign(section, 'title')"\r
        >\r
            @if (section.staticContent && framed) {\r
                <img\r
                    [src]="section.staticContent"\r
                    [alt]="section.label || ('smartReport.image' | transloco)"\r
                    class="block h-full w-full object-contain"\r
                    draggable="false"\r
                />\r
            } @else if (section.staticContent) {\r
                <img\r
                    [src]="section.staticContent"\r
                    [alt]="section.label || ('smartReport.image' | transloco)"\r
                    class="max-h-32 inline-block rounded"\r
                    style="max-width: 100%"\r
                />\r
            } @else {\r
                <div\r
                    class="inline-flex items-center justify-center w-48 h-24 bg-gray-100 rounded-lg text-gray-300"\r
                >\r
                    <mat-icon class="!text-3xl">image</mat-icon>\r
                </div>\r
            }\r
        </div>\r
    }\r
\r
    @if (section.type === 'divider') {\r
        <hr\r
            [style.margin-top.px]="dividerMargin(section)"\r
            [style.margin-bottom.px]="dividerMargin(section)"\r
            style="border: 0; height: 0"\r
            [style.border-top]="dividerBorderTop(section)"\r
        />\r
    }\r
\r
    @if (section.type === 'shape' && shapeKind(section) === 'icon') {\r
        <div\r
            class="report-icon h-full w-full min-h-[12px] overflow-visible"\r
            data-report-icon\r
            [style.transform]="shapeRotateStyle(section)"\r
            style="transform-origin: center center; line-height: 0"\r
            [innerHTML]="iconMarkup(section)"\r
        ></div>\r
    }\r
\r
    @if (section.type === 'shape' && shapeKind(section) === 'line') {\r
        <div class="flex h-full w-full min-h-[8px] items-center overflow-visible">\r
            <div class="w-full" [style.border-top]="lineStroke(section)"></div>\r
        </div>\r
    }\r
\r
    @if (section.type === 'shape' && shapeKind(section) !== 'icon' && shapeKind(section) !== 'line') {\r
        <div\r
            class="h-full w-full min-h-[12px] overflow-visible"\r
            [style.transform]="shapeRotateStyle(section)"\r
            style="transform-origin: center center"\r
        >\r
            <svg\r
                viewBox="0 0 100 100"\r
                class="h-full w-full overflow-visible"\r
                [attr.preserveAspectRatio]="shapeKeepRatio(section) ? 'xMidYMid meet' : 'none'"\r
                aria-hidden="true"\r
            >\r
                @switch (shapeKind(section)) {\r
                    @case ('circle') {\r
                        <ellipse\r
                            cx="50"\r
                            cy="50"\r
                            rx="46"\r
                            ry="46"\r
                            [attr.fill]="shapeFill(section)"\r
                            [attr.stroke]="shapeStroke(section)"\r
                            [attr.stroke-width]="shapeStrokeWidth(section)"\r
                            vector-effect="non-scaling-stroke"\r
                        />\r
                    }\r
                    @case ('bullet') {\r
                        <ellipse\r
                            cx="50"\r
                            cy="50"\r
                            rx="46"\r
                            ry="46"\r
                            [attr.fill]="shapeFill(section)"\r
                            [attr.stroke]="shapeStroke(section)"\r
                            [attr.stroke-width]="shapeStrokeWidth(section)"\r
                            vector-effect="non-scaling-stroke"\r
                        />\r
                    }\r
                    @case ('star') {\r
                        <polygon\r
                            [attr.fill]="shapeFill(section)"\r
                            [attr.stroke]="shapeStroke(section)"\r
                            [attr.stroke-width]="shapeStrokeWidth(section)"\r
                            vector-effect="non-scaling-stroke"\r
                            points="50,4 61,38 97,38 68,59 79,95 50,74 21,95 32,59 3,38 39,38"\r
                        />\r
                    }\r
                    @case ('triangle') {\r
                        <polygon\r
                            [attr.fill]="shapeFill(section)"\r
                            [attr.stroke]="shapeStroke(section)"\r
                            [attr.stroke-width]="shapeStrokeWidth(section)"\r
                            vector-effect="non-scaling-stroke"\r
                            points="50,8 94,92 6,92"\r
                        />\r
                    }\r
                    @case ('diamond') {\r
                        <polygon\r
                            [attr.fill]="shapeFill(section)"\r
                            [attr.stroke]="shapeStroke(section)"\r
                            [attr.stroke-width]="shapeStrokeWidth(section)"\r
                            vector-effect="non-scaling-stroke"\r
                            points="50,4 96,50 50,96 4,50"\r
                        />\r
                    }\r
                    @default {\r
                        <rect\r
                            x="2"\r
                            y="2"\r
                            width="96"\r
                            height="96"\r
                            [attr.rx]="shapeRectRadius(section, 'x')"\r
                            [attr.ry]="shapeRectRadius(section, 'y')"\r
                            [attr.fill]="shapeFill(section)"\r
                            [attr.stroke]="shapeStroke(section)"\r
                            [attr.stroke-width]="shapeStrokeWidth(section)"\r
                            vector-effect="non-scaling-stroke"\r
                        />\r
                    }\r
                }\r
            </svg>\r
        </div>\r
    }\r
\r
    @if (section.type === 'spacer') {\r
        <div [style.height.px]="section.style?.padding || 16"></div>\r
    }\r
\r
    <!-- dataTable: derived headings plus two sample rows. -->\r
    @if (section.type === 'dataTable') {\r
        <div class="mb-4" [style.font-family]="roleFontFamily(section, 'title')" [style.text-align]="roleTextAlign(section, 'title')">\r
            @if (section.label) {\r
                <h4\r
                    data-sheet-role="title"\r
                    class="mb-2 inline-block max-w-full tracking-wide"\r
                    [style.font-size.px]="roleFontSize(section, 'title')"\r
                    [style.font-weight]="roleFontWeight(section, 'title')"\r
                    [style.font-style]="roleFontStyle(section, 'title')" [style.text-decoration]="roleTextDecoration(section, 'title')"\r
                    [style.color]="roleColor(section, 'title')"\r
                    [class.ring-2]="isTitleSelected(section)"\r
                    [class.ring-inset]="isTitleSelected(section)"\r
                    [class.ring-indigo-400]="isTitleSelected(section)"\r
                    [class.rounded-sm]="isTitleSelected(section)"\r
                    (contextmenu)="onTitleContextMenu(section, $event)"\r
                >\r
                    <ng-container\r
                        [ngTemplateOutlet]="sheetText"\r
                        [ngTemplateOutletContext]="sheetTextContext(section, 'title', section.label, measure)"\r
                    ></ng-container>\r
                </h4>\r
            }\r
            @if (structuralColumns(section).length > 0) {\r
                <table class="w-full">\r
                    <thead>\r
                        <tr class="border-b-2" [style.border-color]="primaryColor()">\r
                            @for (column of structuralColumns(section); track column.key) {\r
                                <th\r
                                    class="cursor-pointer py-1.5 pr-3 text-left"\r
                                    [class.ring-1]="isCellSelected(section, column.key, 'label')"\r
                                    [class.ring-lime-500]="isCellSelected(section, column.key, 'label')"\r
                                    [style.font-family]="roleFontFamily(section, 'label')"\r
                                    [style.font-size.px]="roleFontSize(section, 'label')"\r
                                    [style.font-weight]="roleFontWeight(section, 'label')"\r
                                    [style.font-style]="roleFontStyle(section, 'label')" [style.text-decoration]="roleTextDecoration(section, 'label')"\r
                                    [style.text-align]="roleTextAlign(section, 'label')"\r
                                    [style.color]="roleColor(section, 'label')"\r
                                    (click)="onCellActivate(section, column.key, 'label', $event)"\r
                                    (contextmenu)="onCellContextMenu(section, column.key, $event)"\r
                                >\r
                                    <ng-container\r
                                        [ngTemplateOutlet]="sheetText"\r
                                        [ngTemplateOutletContext]="sheetTextContext(section, 'cellLabel', entryLabel(section, column), measure, false, column.key, column.label)"\r
                                    ></ng-container>\r
                                </th>\r
                            }\r
                        </tr>\r
                    </thead>\r
                    <tbody>\r
                        @for (row of structuralSampleRows(section); track $index; let rowIndex = $index) {\r
                            <tr [ngStyle]="rowLineBg(section)">\r
                                @for (cell of row; track $index; let colIndex = $index) {\r
                                    <td\r
                                        class="cursor-pointer py-1.5 pr-3"\r
                                        [class.ring-1]="isCellSelected(section, structuralColumns(section)[colIndex].key, 'value')"\r
                                        [class.ring-orange-400]="isCellSelected(section, structuralColumns(section)[colIndex].key, 'value')"\r
                                        [style.font-family]="roleFontFamily(section, 'value')"\r
                                        [style.font-size.px]="roleFontSize(section, 'value')"\r
                                        [style.font-weight]="roleFontWeight(section, 'value')"\r
                                        [style.font-style]="roleFontStyle(section, 'value')" [style.text-decoration]="roleTextDecoration(section, 'value')"\r
                                        [style.text-align]="roleTextAlign(section, 'value')"\r
                                        [style.color]="roleColor(section, 'value')"\r
                                        (click)="onCellActivate(section, structuralColumns(section)[colIndex].key, 'value', $event)"\r
                                        (contextmenu)="onCellContextMenu(section, structuralColumns(section)[colIndex].key, $event)"\r
                                    >\r
                                        <ng-container\r
                                            [ngTemplateOutlet]="sheetText"\r
                                            [ngTemplateOutletContext]="sheetTextContext(section, 'cellValue', boundValue(section, cellStoreKey(structuralColumns(section)[colIndex].key, rowIndex), cell), measure, false, cellStoreKey(structuralColumns(section)[colIndex].key, rowIndex), cell)"\r
                                        ></ng-container>\r
                                    </td>\r
                                }\r
                            </tr>\r
                        }\r
                    </tbody>\r
                </table>\r
            } @else {\r
                <div\r
                    class="rounded-lg border border-dashed border-gray-200 py-4 text-center text-xs text-gray-300"\r
                >\r
                    {{ 'smartReport.noDataAtPath' | transloco: { path: section.dataPath || '\u2014' } }}\r
                </div>\r
            }\r
        </div>\r
    }\r
\r
    <!-- keyValueGrid: label/value pairs in the configured column count. -->\r
    @if (section.type === 'keyValueGrid') {\r
        <div class="mb-4" [style.font-family]="roleFontFamily(section, 'title')" [style.text-align]="roleTextAlign(section, 'title')">\r
            @if (section.label) {\r
                <h4\r
                    data-sheet-role="title"\r
                    class="mb-2 inline-block max-w-full tracking-wide"\r
                    [style.font-size.px]="roleFontSize(section, 'title')"\r
                    [style.font-weight]="roleFontWeight(section, 'title')"\r
                    [style.font-style]="roleFontStyle(section, 'title')" [style.text-decoration]="roleTextDecoration(section, 'title')"\r
                    [style.color]="roleColor(section, 'title')"\r
                    [class.ring-2]="isTitleSelected(section)"\r
                    [class.ring-inset]="isTitleSelected(section)"\r
                    [class.ring-indigo-400]="isTitleSelected(section)"\r
                    [class.rounded-sm]="isTitleSelected(section)"\r
                    (contextmenu)="onTitleContextMenu(section, $event)"\r
                >\r
                    <ng-container\r
                        [ngTemplateOutlet]="sheetText"\r
                        [ngTemplateOutletContext]="sheetTextContext(section, 'title', section.label, measure)"\r
                    ></ng-container>\r
                </h4>\r
            }\r
            @if (sectionHasStructuredData(section)) {\r
                @for (chunk of sheetChunks(section); track chunk.kind === 'table' ? chunk.table.key : chunk.entries[0]?.key) {\r
                    @if (chunk.kind === 'fields') {\r
                        <div\r
                            class="grid gap-x-4 gap-y-1.5"\r
                            [style.grid-template-columns]="\r
                                'repeat(' + (section.columnsPerRow || 2) + ', minmax(0, 1fr))'\r
                            "\r
                        >\r
                            @for (entry of chunk.entries; track entry.key; let last = $last) {\r
                                <div\r
                                    data-report-cell\r
                                    [attr.data-cell-key]="entry.key"\r
                                    class="relative min-w-0 px-2 py-1.5"\r
                                    [class.ring-2]="isCellSelected(section, entry.key)"\r
                                    [class.ring-inset]="isCellSelected(section, entry.key)"\r
                                    [class.ring-indigo-400]="isCellSelected(section, entry.key)"\r
                                    [class.cursor-pointer]="clickable() && !reorderable()"\r
                                    [class.cursor-grab]="clickable() && reorderable()"\r
                                    [ngStyle]="rowLineBg(section, entry.key, last)"\r
                                    [style.grid-column]="cellGridColumn(section, entry.key)"\r
                                    [style.min-height.px]="cellMinHeight(section, entry.key)"\r
                                    [style.background-color]="cellBackground(section, entry.key) || null"\r
                                    [style.border]="cellHasBox(section, entry.key) ? cellBorder(section, entry.key) : null"\r
                                    [style.border-radius.px]="cellRadius(section, entry.key)"\r
                                    (click)="onCellActivate(section, entry.key, 'cell', $event)"\r
                                    (pointerdown)="onCellPointerDown(section, entry.key, $event)"\r
                                    (contextmenu)="onCellContextMenu(section, entry.key, $event)"\r
                                >\r
                                    <ng-container\r
                                        [ngTemplateOutlet]="cellResizeHandles"\r
                                        [ngTemplateOutletContext]="{ section: section, key: entry.key, axes: 'xy', measure: measure }"\r
                                    ></ng-container>\r
                                    <div\r
                                        data-cell-part="label"\r
                                        class="min-w-0 break-words tracking-wide"\r
                                        [class.ring-1]="isCellSelected(section, entry.key, 'label')"\r
                                        [class.ring-lime-500]="isCellSelected(section, entry.key, 'label')"\r
                                        [class.rounded-sm]="isCellSelected(section, entry.key, 'label')"\r
                                        [style.font-family]="roleFontFamily(section, 'label', entry.key)"\r
                                        [style.font-size.px]="roleFontSize(section, 'label', entry.key)"\r
                                        [style.font-weight]="roleFontWeight(section, 'label', entry.key)"\r
                                        [style.font-style]="roleFontStyle(section, 'label', entry.key)" [style.text-decoration]="roleTextDecoration(section, 'label', entry.key)"\r
                                        [style.text-align]="roleTextAlign(section, 'label', entry.key)"\r
                                        [style.color]="roleColor(section, 'label', entry.key)"\r
                                        (click)="onCellActivate(section, entry.key, 'label', $event)"\r
                                    >\r
                                        <ng-container\r
                                            [ngTemplateOutlet]="sheetText"\r
                                            [ngTemplateOutletContext]="sheetTextContext(section, 'cellLabel', entryLabel(section, entry), measure, false, entry.key, entry.label)"\r
                                        ></ng-container>\r
                                    </div>\r
                                    <div\r
                                        data-cell-part="value"\r
                                        class="min-w-0 break-words"\r
                                        [class.ring-1]="isCellSelected(section, entry.key, 'value')"\r
                                        [class.ring-orange-400]="isCellSelected(section, entry.key, 'value')"\r
                                        [class.rounded-sm]="isCellSelected(section, entry.key, 'value')"\r
                                        [style.font-family]="roleFontFamily(section, 'value', entry.key)"\r
                                        [style.font-size.px]="roleFontSize(section, 'value', entry.key)"\r
                                        [style.font-weight]="roleFontWeight(section, 'value', entry.key)"\r
                                        [style.font-style]="roleFontStyle(section, 'value', entry.key)" [style.text-decoration]="roleTextDecoration(section, 'value', entry.key)"\r
                                        [style.text-align]="roleTextAlign(section, 'value', entry.key)"\r
                                        [style.color]="roleColor(section, 'value', entry.key)"\r
                                        (click)="onCellActivate(section, entry.key, 'value', $event)"\r
                                    >\r
                                        <ng-container\r
                                            [ngTemplateOutlet]="sheetText"\r
                                            [ngTemplateOutletContext]="sheetTextContext(section, 'cellValue', boundValue(section, entry.key, entry.value), measure, false, entry.key, entry.value)"\r
                                        ></ng-container>\r
                                    </div>\r
                                </div>\r
                            }\r
                        </div>\r
                    } @else {\r
                        <div\r
                            data-report-cell\r
                            [attr.data-cell-key]="chunk.table.key"\r
                            class="mt-3 overflow-x-auto rounded-lg border px-2 py-2"\r
                            [class.ring-2]="isCellSelected(section, chunk.table.key)"\r
                            [class.ring-inset]="isCellSelected(section, chunk.table.key)"\r
                            [class.ring-indigo-400]="isCellSelected(section, chunk.table.key)"\r
                            [class.cursor-pointer]="clickable()"\r
                            [style.background-color]="tableFill(section, chunk.table.key)"\r
                            [style.border]="cellHasBox(section, chunk.table.key) ? cellBorder(section, chunk.table.key) : '1px solid ' + tableEdge(section, chunk.table.key)"\r
                            [style.border-radius.px]="cellRadius(section, chunk.table.key) || null"\r
                            (click)="onCellActivate(section, chunk.table.key, 'cell', $event)"\r
                            (pointerdown)="onCellPointerDown(section, chunk.table.key, $event)"\r
                            (contextmenu)="onCellContextMenu(section, chunk.table.key, $event)"\r
                        >\r
                            <div class="mb-1.5 flex items-center gap-2">\r
                                @if (tableShowsBadge(section, chunk.table.key)) {\r
                                    <span\r
                                        class="rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-950"\r
                                        [style.background-color]="tableHeaderFill(section, chunk.table.key)"\r
                                    >\r
                                        {{ 'smartReport.sheetTable' | transloco }}\r
                                    </span>\r
                                }\r
                                @if (chunk.table.key !== '__list') {\r
                                    <p\r
                                        class="min-w-0 flex-1 truncate tracking-wide"\r
                                        [style.font-family]="roleFontFamily(section, 'label')"\r
                                        [style.font-size.px]="roleFontSize(section, 'label')"\r
                                        [style.font-weight]="roleFontWeight(section, 'label')"\r
                                        [style.color]="roleColor(section, 'label')"\r
                                    >\r
                                        {{ tableLabel(section, chunk.table) }}\r
                                    </p>\r
                                }\r
                            </div>\r
                            <table class="w-full border-collapse">\r
                                <thead>\r
                                    <tr [style.background-color]="tableHeaderFill(section, chunk.table.key)">\r
                                        @for (column of chunk.table.columns; track column.key) {\r
                                            <th\r
                                                class="relative cursor-pointer border-b py-1 pr-2 text-left"\r
                                                [class.ring-1]="isCellSelected(section, tableColumnKey(chunk.table.key, column.key), 'label')"\r
                                                [class.ring-lime-500]="isCellSelected(section, tableColumnKey(chunk.table.key, column.key), 'label')"\r
                                                [style.width.px]="columnWidth(section, tableColumnKey(chunk.table.key, column.key))"\r
                                                [style.border-color]="tableEdge(section, chunk.table.key)"\r
                                                [style.font-family]="tableText(section, 'label', chunk.table.key, column.key).fontFamily"\r
                                                [style.font-size.px]="tableText(section, 'label', chunk.table.key, column.key).fontSize"\r
                                                [style.font-weight]="tableText(section, 'label', chunk.table.key, column.key).fontWeight"\r
                                                [style.font-style]="tableText(section, 'label', chunk.table.key, column.key).fontStyle" [style.text-decoration]="tableText(section, 'label', chunk.table.key, column.key).textDecoration"\r
                                                [style.text-align]="tableText(section, 'label', chunk.table.key, column.key).textAlign"\r
                                                [style.color]="tableText(section, 'label', chunk.table.key, column.key).color"\r
                                                (click)="onCellActivate(section, tableColumnKey(chunk.table.key, column.key), 'label', $event)"\r
                                                (contextmenu)="onCellContextMenu(section, tableColumnKey(chunk.table.key, column.key), $event)"\r
                                            >\r
                                                <ng-container\r
                                                    [ngTemplateOutlet]="sheetText"\r
                                                    [ngTemplateOutletContext]="sheetTextContext(section, 'cellLabel', entryLabel(section, { key: tableColumnKey(chunk.table.key, column.key), label: column.label }), measure, false, tableColumnKey(chunk.table.key, column.key), column.label)"\r
                                                ></ng-container>\r
                                                <ng-container\r
                                                    [ngTemplateOutlet]="cellResizeHandles"\r
                                                    [ngTemplateOutletContext]="{ section: section, key: tableColumnKey(chunk.table.key, column.key), axes: 'w', measure: measure }"\r
                                                ></ng-container>\r
                                            </th>\r
                                        }\r
                                    </tr>\r
                                </thead>\r
                                <tbody>\r
                                    @for (row of chunk.table.rows; track $index; let last = $last; let rowIndex = $index) {\r
                                        <tr [class.border-b]="!last" [style.border-color]="tableEdge(section, chunk.table.key)">\r
                                            @for (column of chunk.table.columns; track column.key) {\r
                                                <td\r
                                                    class="cursor-pointer py-1 pr-2 align-top"\r
                                                    [class.ring-1]="isCellSelected(section, tableColumnKey(chunk.table.key, column.key), 'value')"\r
                                                    [class.ring-orange-400]="isCellSelected(section, tableColumnKey(chunk.table.key, column.key), 'value')"\r
                                                    [style.font-family]="tableText(section, 'value', chunk.table.key, column.key).fontFamily"\r
                                                    [style.font-size.px]="tableText(section, 'value', chunk.table.key, column.key).fontSize"\r
                                                    [style.font-weight]="tableText(section, 'value', chunk.table.key, column.key).fontWeight"\r
                                                    [style.font-style]="tableText(section, 'value', chunk.table.key, column.key).fontStyle" [style.text-decoration]="tableText(section, 'value', chunk.table.key, column.key).textDecoration"\r
                                                    [style.text-align]="tableText(section, 'value', chunk.table.key, column.key).textAlign"\r
                                                    [style.color]="tableText(section, 'value', chunk.table.key, column.key).color"\r
                                                    (click)="onCellActivate(section, tableColumnKey(chunk.table.key, column.key), 'value', $event)"\r
                                                    (contextmenu)="onCellContextMenu(section, tableColumnKey(chunk.table.key, column.key), $event)"\r
                                                >\r
                                                    <ng-container\r
                                                        [ngTemplateOutlet]="sheetText"\r
                                                        [ngTemplateOutletContext]="sheetTextContext(section, 'cellValue', boundValue(section, cellStoreKey(tableColumnKey(chunk.table.key, column.key), rowIndex), row[column.key]), measure, false, cellStoreKey(tableColumnKey(chunk.table.key, column.key), rowIndex), row[column.key])"\r
                                                    ></ng-container>\r
                                                </td>\r
                                            }\r
                                        </tr>\r
                                    }\r
                                </tbody>\r
                            </table>\r
                        </div>\r
                    }\r
                }\r
            } @else {\r
                <div\r
                    class="rounded-lg border border-dashed border-gray-200 py-4 text-center text-xs text-gray-300"\r
                >\r
                    {{ 'smartReport.noDataAtPath' | transloco: { path: section.dataPath || '\u2014' } }}\r
                </div>\r
            }\r
        </div>\r
    }\r
\r
    <!-- badge: a pill in the static variant colour. -->\r
    @if (section.type === 'badge') {\r
        <div\r
            class="mb-3 flex items-center gap-2"\r
            [style.font-family]="roleFontFamily(section, 'title')"\r
            [style.text-align]="roleTextAlign(section, 'title')"\r
        >\r
            @if (section.label) {\r
                <span\r
                    class="tracking-wide"\r
                    [style.font-family]="roleFontFamily(section, 'label')"\r
                    [style.font-size.px]="roleFontSize(section, 'label')"\r
                    [style.font-weight]="roleFontWeight(section, 'label')"\r
                    [style.font-style]="roleFontStyle(section, 'label')" [style.text-decoration]="roleTextDecoration(section, 'label')"\r
                    [style.color]="roleColor(section, 'label')"\r
                >\r
                    <ng-container\r
                        [ngTemplateOutlet]="sheetText"\r
                        [ngTemplateOutletContext]="sheetTextContext(section, 'title', section.label, measure)"\r
                    ></ng-container>\r
                </span>\r
            }\r
            <span\r
                class="inline-flex items-center rounded-full border px-2.5 py-0.5"\r
                [style.font-family]="roleFontFamily(section, 'value')"\r
                [style.font-size.px]="roleFontSize(section, 'value')"\r
                [style.font-weight]="roleFontWeight(section, 'value')"\r
                [style.font-style]="roleFontStyle(section, 'value')" [style.text-decoration]="roleTextDecoration(section, 'value')"\r
                [ngClass]="variantClasses(section)"\r
            >\r
                <ng-container\r
                    [ngTemplateOutlet]="sheetText"\r
                    [ngTemplateOutletContext]="sheetTextContext(section, 'cellValue', boundValue(section, '__value', resolveDataPath(section.dataPath) || '\u2014'), measure, false, '__value', resolveDataPath(section.dataPath) || '')"\r
                ></ng-container>\r
            </span>\r
        </div>\r
    }\r
\r
    <!-- card: titled box with its copy and any resolved entries. -->\r
    @if (section.type === 'card') {\r
        <div\r
            class="mb-4 rounded-lg border p-3"\r
            [ngClass]="variantClasses(section)"\r
            [style.font-family]="roleFontFamily(section, 'title')"\r
            [style.text-align]="roleTextAlign(section, 'title')"\r
        >\r
            @if (section.label) {\r
                <h4\r
                    data-sheet-role="title"\r
                    class="mb-1 inline-block max-w-full"\r
                    [style.font-size.px]="roleFontSize(section, 'title')"\r
                    [style.font-weight]="roleFontWeight(section, 'title')"\r
                    [style.font-style]="roleFontStyle(section, 'title')" [style.text-decoration]="roleTextDecoration(section, 'title')"\r
                    [style.color]="roleColor(section, 'title')"\r
                    [class.ring-2]="isTitleSelected(section)"\r
                    [class.ring-inset]="isTitleSelected(section)"\r
                    [class.ring-indigo-400]="isTitleSelected(section)"\r
                    [class.rounded-sm]="isTitleSelected(section)"\r
                    (contextmenu)="onTitleContextMenu(section, $event)"\r
                >\r
                    <ng-container\r
                        [ngTemplateOutlet]="sheetText"\r
                        [ngTemplateOutletContext]="sheetTextContext(section, 'title', section.label, measure)"\r
                    ></ng-container>\r
                </h4>\r
            }\r
            @if (section.staticContent) {\r
                <p\r
                    class="whitespace-pre-wrap opacity-90"\r
                    [style.font-family]="roleFontFamily(section, 'value')"\r
                    [style.font-size.px]="roleFontSize(section, 'value')"\r
                    [style.font-weight]="roleFontWeight(section, 'value')"\r
                    [style.font-style]="roleFontStyle(section, 'value')" [style.text-decoration]="roleTextDecoration(section, 'value')"\r
                    [style.text-align]="roleTextAlign(section, 'value')"\r
                    [style.color]="roleColor(section, 'value')"\r
                >\r
                    <ng-container\r
                        [ngTemplateOutlet]="sheetText"\r
                        [ngTemplateOutletContext]="sheetTextContext(section, 'body', section.staticContent, measure, true)"\r
                    ></ng-container>\r
                </p>\r
            }\r
            @if (sectionHasStructuredData(section)) {\r
                @for (chunk of sheetChunks(section); track chunk.kind === 'table' ? chunk.table.key : chunk.entries[0]?.key) {\r
                    @if (chunk.kind === 'fields') {\r
                        <div class="mt-2 space-y-0.5">\r
                            @for (entry of chunk.entries; track entry.key; let last = $last) {\r
                                <div\r
                                    data-report-cell\r
                                    [attr.data-cell-key]="entry.key"\r
                                    class="relative flex gap-2 px-2 py-1"\r
                                    [class.ring-2]="isCellSelected(section, entry.key)"\r
                                    [class.ring-inset]="isCellSelected(section, entry.key)"\r
                                    [class.ring-indigo-400]="isCellSelected(section, entry.key)"\r
                                    [class.cursor-pointer]="clickable() && !reorderable()"\r
                                    [class.cursor-grab]="clickable() && reorderable()"\r
                                    [ngStyle]="rowLineBg(section, entry.key, last)"\r
                                    [style.min-height.px]="cellMinHeight(section, entry.key)"\r
                                    [style.background-color]="cellBackground(section, entry.key) || null"\r
                                    [style.border]="cellHasBox(section, entry.key) ? cellBorder(section, entry.key) : null"\r
                                    [style.border-radius.px]="cellRadius(section, entry.key)"\r
                                    (click)="onCellActivate(section, entry.key, 'cell', $event)"\r
                                    (pointerdown)="onCellPointerDown(section, entry.key, $event)"\r
                                    (contextmenu)="onCellContextMenu(section, entry.key, $event)"\r
                                >\r
                                    <ng-container\r
                                        [ngTemplateOutlet]="cellResizeHandles"\r
                                        [ngTemplateOutletContext]="{ section: section, key: entry.key, axes: 'y', measure: measure }"\r
                                    ></ng-container>\r
                                    <span\r
                                        data-cell-part="label"\r
                                        class="min-w-0 break-words"\r
                                        [class.ring-1]="isCellSelected(section, entry.key, 'label')"\r
                                        [class.ring-lime-500]="isCellSelected(section, entry.key, 'label')"\r
                                        [style.font-family]="roleFontFamily(section, 'label', entry.key)"\r
                                        [style.font-size.px]="roleFontSize(section, 'label', entry.key)"\r
                                        [style.font-weight]="roleFontWeight(section, 'label', entry.key)"\r
                                        [style.font-style]="roleFontStyle(section, 'label', entry.key)" [style.text-decoration]="roleTextDecoration(section, 'label', entry.key)"\r
                                        [style.text-align]="roleTextAlign(section, 'label', entry.key)"\r
                                        [style.color]="roleColor(section, 'label', entry.key)"\r
                                        (click)="onCellActivate(section, entry.key, 'label', $event)"\r
                                    >\r
                                        <ng-container\r
                                            [ngTemplateOutlet]="sheetText"\r
                                            [ngTemplateOutletContext]="sheetTextContext(section, 'cellLabel', entryLabel(section, entry), measure, false, entry.key, entry.label)"\r
                                        ></ng-container>\r
                                    </span>\r
                                    <span\r
                                        data-cell-part="value"\r
                                        class="min-w-0 break-words"\r
                                        [class.ring-1]="isCellSelected(section, entry.key, 'value')"\r
                                        [class.ring-orange-400]="isCellSelected(section, entry.key, 'value')"\r
                                        [style.font-family]="roleFontFamily(section, 'value', entry.key)"\r
                                        [style.font-size.px]="roleFontSize(section, 'value', entry.key)"\r
                                        [style.font-weight]="roleFontWeight(section, 'value', entry.key)"\r
                                        [style.font-style]="roleFontStyle(section, 'value', entry.key)" [style.text-decoration]="roleTextDecoration(section, 'value', entry.key)"\r
                                        [style.text-align]="roleTextAlign(section, 'value', entry.key)"\r
                                        [style.color]="roleColor(section, 'value', entry.key)"\r
                                        (click)="onCellActivate(section, entry.key, 'value', $event)"\r
                                        ><ng-container\r
                                            [ngTemplateOutlet]="sheetText"\r
                                            [ngTemplateOutletContext]="sheetTextContext(section, 'cellValue', boundValue(section, entry.key, entry.value), measure, false, entry.key, entry.value)"\r
                                        ></ng-container></span\r
                                    >\r
                                </div>\r
                            }\r
                        </div>\r
                    } @else {\r
                        <div\r
                            data-report-cell\r
                            [attr.data-cell-key]="chunk.table.key"\r
                            class="mt-3 overflow-x-auto rounded-lg border px-2 py-2"\r
                            [class.ring-2]="isCellSelected(section, chunk.table.key)"\r
                            [class.ring-inset]="isCellSelected(section, chunk.table.key)"\r
                            [class.ring-indigo-400]="isCellSelected(section, chunk.table.key)"\r
                            [class.cursor-pointer]="clickable()"\r
                            [style.background-color]="tableFill(section, chunk.table.key)"\r
                            [style.border]="cellHasBox(section, chunk.table.key) ? cellBorder(section, chunk.table.key) : '1px solid ' + tableEdge(section, chunk.table.key)"\r
                            [style.border-radius.px]="cellRadius(section, chunk.table.key) || null"\r
                            (click)="onCellActivate(section, chunk.table.key, 'cell', $event)"\r
                            (pointerdown)="onCellPointerDown(section, chunk.table.key, $event)"\r
                            (contextmenu)="onCellContextMenu(section, chunk.table.key, $event)"\r
                        >\r
                            <div class="mb-1.5 flex items-center gap-2">\r
                                @if (tableShowsBadge(section, chunk.table.key)) {\r
                                    <span\r
                                        class="rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-stone-950"\r
                                        [style.background-color]="tableHeaderFill(section, chunk.table.key)"\r
                                    >\r
                                        {{ 'smartReport.sheetTable' | transloco }}\r
                                    </span>\r
                                }\r
                                @if (chunk.table.key !== '__list') {\r
                                    <p\r
                                        class="min-w-0 flex-1 truncate tracking-wide"\r
                                        [style.font-family]="roleFontFamily(section, 'label')"\r
                                        [style.font-size.px]="roleFontSize(section, 'label')"\r
                                        [style.font-weight]="roleFontWeight(section, 'label')"\r
                                        [style.color]="roleColor(section, 'label')"\r
                                    >\r
                                        {{ tableLabel(section, chunk.table) }}\r
                                    </p>\r
                                }\r
                            </div>\r
                            <table class="w-full border-collapse">\r
                                <thead>\r
                                    <tr [style.background-color]="tableHeaderFill(section, chunk.table.key)">\r
                                        @for (column of chunk.table.columns; track column.key) {\r
                                            <th\r
                                                class="relative cursor-pointer border-b py-1 pr-2 text-left"\r
                                                [class.ring-1]="isCellSelected(section, tableColumnKey(chunk.table.key, column.key), 'label')"\r
                                                [class.ring-lime-500]="isCellSelected(section, tableColumnKey(chunk.table.key, column.key), 'label')"\r
                                                [style.width.px]="columnWidth(section, tableColumnKey(chunk.table.key, column.key))"\r
                                                [style.border-color]="tableEdge(section, chunk.table.key)"\r
                                                [style.font-family]="tableText(section, 'label', chunk.table.key, column.key).fontFamily"\r
                                                [style.font-size.px]="tableText(section, 'label', chunk.table.key, column.key).fontSize"\r
                                                [style.font-weight]="tableText(section, 'label', chunk.table.key, column.key).fontWeight"\r
                                                [style.font-style]="tableText(section, 'label', chunk.table.key, column.key).fontStyle" [style.text-decoration]="tableText(section, 'label', chunk.table.key, column.key).textDecoration"\r
                                                [style.text-align]="tableText(section, 'label', chunk.table.key, column.key).textAlign"\r
                                                [style.color]="tableText(section, 'label', chunk.table.key, column.key).color"\r
                                                (click)="onCellActivate(section, tableColumnKey(chunk.table.key, column.key), 'label', $event)"\r
                                                (contextmenu)="onCellContextMenu(section, tableColumnKey(chunk.table.key, column.key), $event)"\r
                                            >\r
                                                <ng-container\r
                                                    [ngTemplateOutlet]="sheetText"\r
                                                    [ngTemplateOutletContext]="sheetTextContext(section, 'cellLabel', entryLabel(section, { key: tableColumnKey(chunk.table.key, column.key), label: column.label }), measure, false, tableColumnKey(chunk.table.key, column.key), column.label)"\r
                                                ></ng-container>\r
                                                <ng-container\r
                                                    [ngTemplateOutlet]="cellResizeHandles"\r
                                                    [ngTemplateOutletContext]="{ section: section, key: tableColumnKey(chunk.table.key, column.key), axes: 'w', measure: measure }"\r
                                                ></ng-container>\r
                                            </th>\r
                                        }\r
                                    </tr>\r
                                </thead>\r
                                <tbody>\r
                                    @for (row of chunk.table.rows; track $index; let last = $last; let rowIndex = $index) {\r
                                        <tr [class.border-b]="!last" [style.border-color]="tableEdge(section, chunk.table.key)">\r
                                            @for (column of chunk.table.columns; track column.key) {\r
                                                <td\r
                                                    class="cursor-pointer py-1 pr-2 align-top"\r
                                                    [class.ring-1]="isCellSelected(section, tableColumnKey(chunk.table.key, column.key), 'value')"\r
                                                    [class.ring-orange-400]="isCellSelected(section, tableColumnKey(chunk.table.key, column.key), 'value')"\r
                                                    [style.font-family]="tableText(section, 'value', chunk.table.key, column.key).fontFamily"\r
                                                    [style.font-size.px]="tableText(section, 'value', chunk.table.key, column.key).fontSize"\r
                                                    [style.font-weight]="tableText(section, 'value', chunk.table.key, column.key).fontWeight"\r
                                                    [style.font-style]="tableText(section, 'value', chunk.table.key, column.key).fontStyle" [style.text-decoration]="tableText(section, 'value', chunk.table.key, column.key).textDecoration"\r
                                                    [style.text-align]="tableText(section, 'value', chunk.table.key, column.key).textAlign"\r
                                                    [style.color]="tableText(section, 'value', chunk.table.key, column.key).color"\r
                                                    (click)="onCellActivate(section, tableColumnKey(chunk.table.key, column.key), 'value', $event)"\r
                                                    (contextmenu)="onCellContextMenu(section, tableColumnKey(chunk.table.key, column.key), $event)"\r
                                                >\r
                                                    <ng-container\r
                                                        [ngTemplateOutlet]="sheetText"\r
                                                        [ngTemplateOutletContext]="sheetTextContext(section, 'cellValue', boundValue(section, cellStoreKey(tableColumnKey(chunk.table.key, column.key), rowIndex), row[column.key]), measure, false, cellStoreKey(tableColumnKey(chunk.table.key, column.key), rowIndex), row[column.key])"\r
                                                    ></ng-container>\r
                                                </td>\r
                                            }\r
                                        </tr>\r
                                    }\r
                                </tbody>\r
                            </table>\r
                        </div>\r
                    }\r
                }\r
            }\r
        </div>\r
    }\r
\r
    <!-- repeater: one outlined item per record, capped for the canvas. -->\r
    @if (section.type === 'repeater') {\r
        <div class="mb-4" [style.font-family]="roleFontFamily(section, 'title')" [style.text-align]="roleTextAlign(section, 'title')">\r
            @if (section.label) {\r
                <h4\r
                    data-sheet-role="title"\r
                    class="mb-2 inline-block max-w-full tracking-wide"\r
                    [style.font-size.px]="roleFontSize(section, 'title')"\r
                    [style.font-weight]="roleFontWeight(section, 'title')"\r
                    [style.font-style]="roleFontStyle(section, 'title')" [style.text-decoration]="roleTextDecoration(section, 'title')"\r
                    [style.color]="roleColor(section, 'title')"\r
                    [class.ring-2]="isTitleSelected(section)"\r
                    [class.ring-inset]="isTitleSelected(section)"\r
                    [class.ring-indigo-400]="isTitleSelected(section)"\r
                    [class.rounded-sm]="isTitleSelected(section)"\r
                    (contextmenu)="onTitleContextMenu(section, $event)"\r
                >\r
                    <ng-container\r
                        [ngTemplateOutlet]="sheetText"\r
                        [ngTemplateOutletContext]="sheetTextContext(section, 'title', section.label, measure)"\r
                    ></ng-container>\r
                </h4>\r
            }\r
            @if (structuralRecords(section).length > 0) {\r
                @for (record of (fullContent() ? structuralRecords(section) : structuralRecords(section).slice(0, 2)); track $index) {\r
                    <div class="mb-1.5 rounded-lg border border-gray-200 px-3 py-2">\r
                        <div class="text-xs font-semibold text-gray-700">\r
                            <ng-container\r
                                [ngTemplateOutlet]="sheetText"\r
                                [ngTemplateOutletContext]="sheetTextContext(section, 'itemTitle', section.itemTitle || ('smartReport.sectionNumber' | transloco: { num: $index + 1 }), measure, false, undefined, section.itemTitle || ('smartReport.sectionNumber' | transloco: { num: $index + 1 }))"\r
                            ></ng-container>\r
                        </div>\r
                        @if (section.itemTemplate || canInlineEdit(measure)) {\r
                            <p class="mt-0.5 whitespace-pre-wrap text-[11px] text-gray-500">\r
                                <ng-container\r
                                    [ngTemplateOutlet]="sheetText"\r
                                    [ngTemplateOutletContext]="sheetTextContext(section, 'itemTemplate', section.itemTemplate || '', measure, true, undefined, section.itemTemplate || '')"\r
                                ></ng-container>\r
                            </p>\r
                        }\r
                    </div>\r
                }\r
                <p class="text-[10px] text-gray-400">\r
                    {{\r
                        'smartReport.structuralRows'\r
                            | transloco: { count: structuralRecords(section).length }\r
                    }}\r
                </p>\r
            } @else {\r
                <div\r
                    class="rounded-lg border border-dashed border-gray-200 py-4 text-center text-xs text-gray-300"\r
                >\r
                    {{ 'smartReport.noDataAtPath' | transloco: { path: section.dataPath || '\u2014' } }}\r
                </div>\r
            }\r
        </div>\r
    }\r
\r
    <!-- reportBlocks: a placeholder, since the composed model is built server-side. -->\r
    @if (section.type === 'reportBlocks') {\r
        <div\r
            class="mb-4 rounded-lg border border-dashed border-indigo-200 bg-indigo-50/40 px-3 py-4 text-center"\r
        >\r
            <mat-icon class="!h-5 !w-5 !text-xl text-indigo-400">dashboard_customize</mat-icon>\r
            <p class="text-xs font-medium text-indigo-700">\r
                {{ 'smartReport.sectionReportBlocks' | transloco }}\r
            </p>\r
            <p class="mt-0.5 text-[10px] text-indigo-500">\r
                @if (section.blockIds?.length) {\r
                    {{ section.blockIds.join(', ') }}\r
                } @else {\r
                    {{ 'smartReport.allBlocks' | transloco }}\r
                }\r
            </p>\r
        </div>\r
    }\r
</ng-template>\r
\r
<ng-template\r
    #sheetText\r
    let-section="section"\r
    let-kind="kind"\r
    let-text="text"\r
    let-key="key"\r
    let-fallback="fallback"\r
    let-multiline="multiline"\r
    let-measure="measure"\r
>\r
    @if (canInlineEdit(measure) && isEditingText(section.id, kind, key)) {\r
        @if (multiline || isCanvasText(kind)) {\r
            <textarea\r
                data-inline-edit\r
                rows="1"\r
                class="m-0 min-h-[1em] resize-none select-text overflow-hidden border-0 bg-transparent p-0 font-[inherit] text-[length:inherit] leading-[inherit] text-inherit [text-align:inherit] [font-style:inherit] [font-weight:inherit] [text-decoration:inherit] outline-none"\r
                [class.block]="!hugsText(section)"\r
                [class.w-full]="!hugsText(section)"\r
                [class.hug-field]="hugsText(section)"\r
                [style.max-width.px]="hugsText(section) ? textHugMaxCss(section) : null"\r
                [value]="inlineDraft()"\r
                (input)="onInlineDraftInput($event)"\r
                (blur)="commitInlineEdit()"\r
                (keydown)="onInlineKeydown($event, true)"\r
                (click)="$event.stopPropagation()"\r
                (pointerdown)="$event.stopPropagation()"\r
                (dblclick)="$event.stopPropagation()"\r
            ></textarea>\r
        } @else {\r
            <input\r
                data-inline-edit\r
                type="text"\r
                class="m-0 min-w-[4rem] w-full select-text border-0 bg-transparent p-0 font-[inherit] text-[length:inherit] leading-[inherit] text-inherit [text-align:inherit] [text-decoration:inherit] outline-none"\r
                [value]="inlineDraft()"\r
                (input)="onInlineDraftInput($event)"\r
                (blur)="commitInlineEdit()"\r
                (keydown)="onInlineKeydown($event, false)"\r
                (click)="$event.stopPropagation()"\r
                (pointerdown)="$event.stopPropagation()"\r
                (dblclick)="$event.stopPropagation()"\r
            />\r
        }\r
    } @else {\r
        @let rule = cellRule(section, kind, key, fallback);\r
        @if (rule) {\r
            <span\r
                data-sheet-text\r
                [attr.data-text-kind]="kind"\r
                data-value-rule\r
                class="inline-block min-h-[1em] min-w-[1ch] whitespace-pre-wrap [text-decoration:inherit]"\r
                [class.cursor-text]="canInlineEdit(measure) && kind !== 'cellValue' && !isCanvasText(kind)"\r
                [style.color]="rule.color || null"\r
                [style.background-color]="rule.backgroundColor || null"\r
                [style.font-weight]="rule.bold ? 700 : null"\r
                [style.padding]="rule.backgroundColor ? '0.05em 0.5em' : null"\r
                [style.border-radius]="rule.backgroundColor ? '999px' : null"\r
                (pointerdown)="onSheetTextPointerDown(kind, $event)"\r
                (click)="onSheetTextClick(section, kind, $event, key, fallback)"\r
                (dblclick)="onSheetTextDoubleClick(section, kind, $event, key, fallback)"\r
                ><span [innerHTML]="ruleBadge(rule)"></span>{{ rule.text || sheetDisplayText(section, kind, key, fallback) || '\\u00a0' }}</span\r
            >\r
        } @else {\r
            <span\r
                data-sheet-text\r
                [attr.data-text-kind]="kind"\r
                class="inline-block min-h-[1em] min-w-[1ch] whitespace-pre-wrap [text-decoration:inherit]"\r
                [class.cursor-text]="canInlineEdit(measure) && kind !== 'cellValue' && !isCanvasText(kind)"\r
                (pointerdown)="onSheetTextPointerDown(kind, $event)"\r
                (click)="onSheetTextClick(section, kind, $event, key, fallback)"\r
                (dblclick)="onSheetTextDoubleClick(section, kind, $event, key, fallback)"\r
                >{{ sheetDisplayText(section, kind, key, fallback) || '\\u00a0' }}</span\r
            >\r
        }\r
    }\r
</ng-template>\r
`, styles: [`/* angular:styles/component:scss;2d58fc3c421cc60cec3ebeaf3ce6f5adc81393c0399ae5a5ed743cc76f8dae80;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/smart-batch/report-preview/report-preview.component.ts */
.layer-quiet,
.layer-quiet * {
  pointer-events: none !important;
}
.selection-outline {
  outline: 2px solid rgba(129, 140, 248, 0.9);
  outline-offset: 6px;
  border-radius: 6px;
}
.selection-outline.selection-outline-tight {
  outline-offset: 2px;
  border-radius: 4px;
}
textarea.hug-field {
  display: inline-block;
  field-sizing: content;
  width: auto;
  min-width: 1ch;
  white-space: pre-wrap;
  vertical-align: top;
}
[data-overlay-handle],
[data-section-handle],
[data-cell-handle],
[data-move-badge] {
  opacity: 0.72;
  transition: opacity 120ms ease, transform 120ms ease;
}
[data-overlay-handle]:hover,
[data-section-handle]:hover,
[data-cell-handle]:hover {
  opacity: 1;
}
.is-text-editing [data-section-handle],
.is-text-editing [data-cell-handle],
.is-text-editing [data-move-badge] {
  opacity: 0;
  pointer-events: none;
}
.is-marquee [data-report-page],
.is-marquee [data-report-page] * {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M16 4v24M4 16h24' stroke='%23fff' stroke-width='4.2' stroke-linecap='round'/%3E%3Cpath d='M16 4v24M4 16h24' stroke='%23111827' stroke-width='1.8' stroke-linecap='round'/%3E%3C/svg%3E") 16 16, crosshair !important;
}
.is-marquee.is-grabbing [data-report-page],
.is-marquee.is-grabbing [data-report-page] * {
  cursor: grabbing !important;
}
.marquee-box {
  position: fixed;
  z-index: 1008000;
  border: 1px solid rgb(67, 56, 202);
  background: rgba(79, 70, 229, 0.28);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.45);
  pointer-events: none;
}
/*# sourceMappingURL=report-preview.component.css.map */
`] }]
  }], () => [], { _reportPages: [{
    type: ViewChildren,
    args: ["reportPage"]
  }], _measureSections: [{
    type: ViewChildren,
    args: ["measureSection"]
  }], _measureLegend: [{
    type: ViewChild,
    args: ["measureLegend"]
  }], signaturePositionChange: [{
    type: Output
  }], signatureSizeChange: [{
    type: Output
  }], logoPositionChange: [{
    type: Output
  }], logoSizeChange: [{
    type: Output
  }], logoRotationChange: [{
    type: Output
  }], watermarkPositionChange: [{
    type: Output
  }], watermarkSizeChange: [{
    type: Output
  }], watermarkRotationChange: [{
    type: Output
  }], headerLogoAlignChange: [{
    type: Output
  }], headerLogoSizeChange: [{
    type: Output
  }], sheetImageChange: [{
    type: Output
  }], overlaySelect: [{
    type: Output
  }], lockedLayerLocate: [{
    type: Output
  }], backgroundClick: [{
    type: Output
  }], sectionContextMenu: [{
    type: Output
  }], overlayContextMenu: [{
    type: Output
  }], paperContextMenu: [{
    type: Output
  }], sectionReorder: [{
    type: Output
  }], sectionFramesChange: [{
    type: Output
  }], boxSelectionChange: [{
    type: Output
  }], groupOverlayMove: [{
    type: Output
  }], sectionFrameChange: [{
    type: Output
  }], sectionRotationChange: [{
    type: Output
  }], cellSelect: [{
    type: Output
  }], cellContextMenu: [{
    type: Output
  }], cellPlace: [{
    type: Output
  }], inlineTextChange: [{
    type: Output
  }], cellSizeChange: [{
    type: Output
  }], addPage: [{
    type: Output
  }], removePage: [{
    type: Output
  }], sheetDragChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportPreviewComponent, { className: "ReportPreviewComponent", filePath: "src/app/modules/smart-batch/report-preview/report-preview.component.ts", lineNumber: 181 });
})();

export {
  REPORT_ICON_SETS,
  sanitizeIconSvg,
  listSpriteIcons,
  spriteIconSvg,
  searchIconify,
  iconifyPreviewUrl,
  iconifySvg,
  HEADER_LOGO_DEFAULT_WIDTH,
  HEADER_LOGO_DEFAULT_HEIGHT,
  HEADER_LOGO_MIN_HEIGHT,
  HEADER_LOGO_MAX_HEIGHT,
  fitHeaderLogoSize,
  sortByKeyOrder,
  mergeLayoutKeyOrder,
  applyVisibleKeyReorder,
  collectLayoutSheetItems,
  humanizeParamKey,
  joinReportDataPath,
  LAYOUT_HOST_SECTION_TYPES,
  relativeLayoutItemKey,
  remapLayoutOverrideKey,
  valueAtDataPath,
  isHiddenParamKey,
  formatReportCellValue,
  tableColumnPath,
  layoutTableRulesKey,
  collectObjectTables,
  setHiddenParamKey,
  layoutParamGroups,
  ROW_LINE_WIDTH_MIN,
  ROW_LINE_WIDTH_MAX,
  ROW_LINE_MARK_MIN,
  ROW_LINE_MARK_MAX,
  clampRowLineWidth,
  defaultRowLineMark,
  clampRowLineMark,
  REPORT_FONT_STACKS,
  REPORT_TEXT_ALIGNS,
  MAX_CUSTOM_FONTS,
  MAX_FONT_FILE_BYTES,
  FONT_FILE_ACCEPT,
  isValidFontFamily,
  isValidFontUrl,
  googleFontUrl,
  fontWeightCatalog,
  fontWeightStep,
  storedFontWeight,
  nearestFontWeight,
  regularFontWeight,
  boldFontWeight,
  availableFontWeights,
  weightFromFontName,
  fontNeedsWeightProbe,
  discoverGoogleFontWeights,
  discoverStylesheetWeights,
  customFontStack,
  familyFromFontUrl,
  familyFromFileName,
  readFontFile,
  sanitizeCustomFonts,
  registerReportFonts,
  REPORT_TEXT_CASES,
  resolveTextRole,
  materializeSectionTypography,
  REPORT_RULE_BADGES,
  RULE_OPERATOR_GROUPS,
  RULE_OPERATORS_WITHOUT_VALUE,
  MAX_VALUE_RULES,
  matchValueRule,
  ruleBadgeSvg,
  ruleIconMarkup,
  newRuleId,
  REPORT_RULE_PRESETS,
  sanitizeValueRules,
  shapeRuleTestSamples,
  REPORT_UI_Z_BACKDROP,
  REPORT_UI_Z_PANEL,
  REPORT_UI_Z_TOOLBAR,
  REPORT_UI_Z_MENU,
  REPORT_UI_Z_CDK_OVERLAY,
  REPORT_DESIGN_BODY_CLASS,
  clampReportSheetZ,
  isReportPageAnchor,
  reportPaperSizeMm,
  reportPaperSizePx,
  ReportPreviewComponent
};
//# sourceMappingURL=chunk-YLQWA6P3.js.map
