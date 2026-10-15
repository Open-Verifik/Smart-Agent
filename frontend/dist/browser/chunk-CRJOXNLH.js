// src/app/modules/smart-enroll/demos/shared/demo-result.utils.ts
var isPlainObject = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
var thumbnailToDataUrl = (b64) => {
  const trimmed = b64.trim();
  if (trimmed.startsWith("data:"))
    return trimmed;
  if (trimmed.startsWith("/9j/") || trimmed.startsWith("iVBOR")) {
    const mime = trimmed.startsWith("/9j/") ? "image/jpeg" : "image/png";
    return `data:${mime};base64,${trimmed}`;
  }
  return `data:image/jpeg;base64,${trimmed}`;
};
var formatDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime()))
    return value;
  return date.toLocaleString(void 0, { dateStyle: "medium", timeStyle: "short" });
};
var formatDob = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime()))
    return value;
  return date.toLocaleDateString(void 0, { dateStyle: "long" });
};
var formatScore = (score, naLabel) => {
  if (score === null || !Number.isFinite(score))
    return naLabel;
  return `${(score * 100).toFixed(2)}%`;
};
var truncateCode = (code, max = 14) => {
  if (code.length <= max)
    return code;
  return `${code.slice(0, max)}\u2026`;
};
var truncateId = (id, max = 14) => truncateCode(id, max);
var redactThumbnailsForDebug = (value) => {
  if (value === null || typeof value !== "object")
    return value;
  if (Array.isArray(value))
    return value.map(redactThumbnailsForDebug);
  const o = value;
  const next = {};
  for (const [k, v] of Object.entries(o)) {
    if (k === "thumbnail" && typeof v === "string" && v.length > 64) {
      next[k] = `[base64 image, ${v.length} characters]`;
    } else {
      next[k] = redactThumbnailsForDebug(v);
    }
  }
  return next;
};
var parseCollectionEntries = (collectionsRaw) => collectionsRaw.map((entry) => {
  if (typeof entry === "string") {
    return { id: entry, name: "", description: "", count: null };
  }
  if (!isPlainObject(entry))
    return null;
  return {
    id: typeof entry.id === "string" ? entry.id : "",
    name: typeof entry.name === "string" ? entry.name : "",
    description: typeof entry.description === "string" ? entry.description : "",
    count: typeof entry.count === "number" ? entry.count : null
  };
}).filter((entry) => entry !== null);
var parseThumbnails = (thumbnailsRaw) => thumbnailsRaw.filter(isPlainObject).map((item) => {
  const id = typeof item.id === "string" ? item.id : "";
  const thumbnail = typeof item.thumbnail === "string" ? item.thumbnail : "";
  if (!thumbnail)
    return null;
  return { id, src: thumbnailToDataUrl(thumbnail) };
}).filter((item) => item !== null);

export {
  isPlainObject,
  formatDate,
  formatDob,
  formatScore,
  truncateCode,
  truncateId,
  redactThumbnailsForDebug,
  parseCollectionEntries,
  parseThumbnails
};
//# sourceMappingURL=chunk-CRJOXNLH.js.map
