// src/app/modules/settings/utils/invoice-billing-complete.ts
var extractClientSettingsPayload = (response) => {
  const raw = response?.data;
  if (raw == null)
    return null;
  if (Array.isArray(raw))
    return raw[0] ?? null;
  if (typeof raw === "object" && raw !== null && "docs" in raw) {
    const docs = raw.docs;
    if (Array.isArray(docs))
      return docs[0] ?? null;
  }
  return raw;
};
var invoiceBillingDetailsComplete = (invoiceSettings) => {
  const inv = invoiceSettings;
  return !!(inv?.type && (inv.person || inv.business) && inv.address);
};

export {
  extractClientSettingsPayload,
  invoiceBillingDetailsComplete
};
//# sourceMappingURL=chunk-FY4LH25C.js.map
