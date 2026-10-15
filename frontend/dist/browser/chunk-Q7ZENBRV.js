// src/app/modules/smart-enroll/demos/shared/human-id-result.util.ts
var isPlainObject = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
var parseNumeric = (v) => {
  if (typeof v === "number" && Number.isFinite(v))
    return v;
  if (typeof v === "string" && v.trim() !== "") {
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }
  return null;
};
var parseCreditUsage = (result) => {
  if (!result)
    return null;
  const credits = isPlainObject(result["credits"]) ? result["credits"] : null;
  const charged = result["charged"] === true;
  const featureCode = typeof result["featureCode"] === "string" ? result["featureCode"] : null;
  const amountFromRecord = parseNumeric(credits?.["amount"]);
  const creditsChargedExplicit = parseNumeric(result["creditsCharged"]);
  const creditsCharged = creditsChargedExplicit != null && creditsChargedExplicit > 0 ? creditsChargedExplicit : amountFromRecord != null && amountFromRecord !== 0 ? Math.abs(amountFromRecord) : null;
  if (!credits && creditsCharged == null && !charged)
    return null;
  return {
    credits,
    charged: charged || creditsCharged != null,
    creditsCharged,
    featureCode: featureCode ?? (typeof credits?.["code"] === "string" ? credits["code"] : null)
  };
};
var formatCreditsAmount = (amount) => {
  if (Number.isInteger(amount))
    return String(amount);
  return amount.toFixed(2).replace(/\.?0+$/, "");
};
var formatDisplayValue = (v, yes, no) => {
  if (v === null || v === void 0)
    return "";
  if (typeof v === "boolean")
    return v ? yes : no;
  if (typeof v === "number")
    return Number.isFinite(v) ? String(v) : "";
  if (typeof v === "string")
    return v;
  return JSON.stringify(v);
};
var truncateMiddle = (s, head = 28, tail = 16) => {
  if (s.length <= head + tail + 3)
    return s;
  return `${s.slice(0, head)}\u2026${s.slice(-tail)}`;
};
var faceCropToDataUrl = (base64) => {
  const t = base64.trim();
  if (t.startsWith("data:"))
    return t;
  if (t.startsWith("/9j/") || t.startsWith("iVBOR")) {
    const mime = t.startsWith("/9j/") ? "image/jpeg" : "image/png";
    return `data:${mime};base64,${t}`;
  }
  return `data:image/jpeg;base64,${t}`;
};

export {
  isPlainObject,
  parseCreditUsage,
  formatCreditsAmount,
  formatDisplayValue,
  truncateMiddle,
  faceCropToDataUrl
};
//# sourceMappingURL=chunk-Q7ZENBRV.js.map
