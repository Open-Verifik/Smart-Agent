// src/app/modules/settings/usage-report/usage-report-chart.util.ts
var TOP_CATEGORIES = 10;
var buildUsageChart = (report, groupBy, label, dark, names) => {
  const timeSeries = groupBy === "day" || groupBy === "month";
  const groups = timeSeries ? report.groups : report.groups.slice(0, TOP_CATEGORIES);
  const textColor = dark ? "#cbd5e1" : "#475569";
  return {
    chart: { type: "bar", height: timeSeries ? 280 : Math.max(220, groups.length * 34), stacked: true, toolbar: { show: false }, fontFamily: "inherit", foreColor: textColor, animations: { enabled: false } },
    plotOptions: { bar: { horizontal: !timeSeries, borderRadius: 3, columnWidth: "60%", barHeight: "65%" } },
    colors: ["#4f46e5", "#f87171"],
    series: [
      { name: names.ok, data: groups.map((group) => group.ok) },
      { name: names.failed, data: groups.map((group) => group.failed + group.timedOut) }
    ],
    xaxis: { categories: groups.map(label), labels: { trim: true, hideOverlappingLabels: true } },
    yaxis: { labels: { maxWidth: 220 } },
    dataLabels: { enabled: false },
    grid: { borderColor: dark ? "rgba(148,163,184,0.15)" : "rgba(148,163,184,0.25)", strokeDashArray: 3 },
    legend: { position: "top", horizontalAlign: "right" },
    tooltip: { theme: dark ? "dark" : "light", shared: true, intersect: false }
  };
};
var usageRowsToCsv = (report, label) => {
  const cell = (value) => {
    const text = String(value ?? "");
    const safe = /^[=+\-@\t\r]/.test(text) ? `'${text}` : text;
    return /[",\n]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
  };
  const rows = report.groups.map((group) => [label(group), group.totalRequests, group.ok, group.failed, group.timedOut, group.costUSD]);
  return [[report.groupBy || "key", "totalRequests", "ok", "failed", "timedOut", "costUSD"], ...rows].map((row) => row.map(cell).join(",")).join("\n");
};

export {
  buildUsageChart,
  usageRowsToCsv
};
//# sourceMappingURL=chunk-KLSRMXTS.js.map
