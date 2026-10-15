// src/app/modules/settings/usage-history/usage-history-date-params.util.ts
var createdAtRangeParams = (start, end) => ({
  whereGTE_createdAt: start.startOf("day").toUTC().toISO() ?? "",
  whereLTE_createdAt: end.endOf("day").toUTC().toISO() ?? ""
});

export {
  createdAtRangeParams
};
//# sourceMappingURL=chunk-M7M3MPVE.js.map
