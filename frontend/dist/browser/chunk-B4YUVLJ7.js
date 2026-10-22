// src/app/core/utils/insufficient-credits.util.ts
var isInsufficientCreditsError = (err) => {
  if (typeof err === "string")
    return mentionsCreditShortage(err);
  if (!err)
    return false;
  return mentionsCreditShortage(`${err.message ?? ""} ${err.error ?? ""} ${err.code ?? ""}`);
};
var mentionsCreditShortage = (text) => {
  const msg = text.toLowerCase();
  return msg.includes("enought") || msg.includes("not enough") || msg.includes("insufficient") || msg.includes("credit") && (msg.includes("enough") || msg.includes("falt") || msg.includes("insuf"));
};

export {
  isInsufficientCreditsError
};
//# sourceMappingURL=chunk-B4YUVLJ7.js.map
