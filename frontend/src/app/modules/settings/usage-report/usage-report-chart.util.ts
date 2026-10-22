import { UsageGroup, UsageGroupBy, UsageReport } from 'app/core/usage/usage-api.service';
import { ApexOptions } from 'ng-apexcharts';

const TOP_CATEGORIES = 10;

/**
 * Stacked successful / failed bars: chronological for day and month, top 10 horizontal bars otherwise.
 * @param report usage payload
 * @param groupBy active grouping
 * @param label key → display label
 * @param dark whether the dark scheme is active
 * @param names translated series names
 */
export const buildUsageChart = (
    report: UsageReport,
    groupBy: UsageGroupBy,
    label: (group: UsageGroup) => string,
    dark: boolean,
    names: { ok: string; failed: string }
): ApexOptions => {
    const timeSeries = groupBy === 'day' || groupBy === 'month';
    const groups = timeSeries ? report.groups : report.groups.slice(0, TOP_CATEGORIES);
    const textColor = dark ? '#cbd5e1' : '#475569';

    return {
        chart: { type: 'bar', height: timeSeries ? 280 : Math.max(220, groups.length * 34), stacked: true, toolbar: { show: false }, fontFamily: 'inherit', foreColor: textColor, animations: { enabled: false } },
        plotOptions: { bar: { horizontal: !timeSeries, borderRadius: 3, columnWidth: '60%', barHeight: '65%' } },
        colors: ['#4f46e5', '#f87171'],
        series: [
            { name: names.ok, data: groups.map((group) => group.ok) },
            { name: names.failed, data: groups.map((group) => group.failed + group.timedOut) },
        ],
        xaxis: { categories: groups.map(label), labels: { trim: true, hideOverlappingLabels: true } },
        yaxis: { labels: { maxWidth: 220 } },
        dataLabels: { enabled: false },
        grid: { borderColor: dark ? 'rgba(148,163,184,0.15)' : 'rgba(148,163,184,0.25)', strokeDashArray: 3 },
        legend: { position: 'top', horizontalAlign: 'right' },
        tooltip: { theme: dark ? 'dark' : 'light', shared: true, intersect: false },
    };
};

/**
 * Spreadsheet-safe CSV from the loaded report, used when the API export is unavailable.
 * @param report usage payload
 * @param label key → display label
 */
export const usageRowsToCsv = (report: UsageReport, label: (group: UsageGroup) => string): string => {
    const cell = (value: string | number): string => {
        const text = String(value ?? '');
        const safe = /^[=+\-@\t\r]/.test(text) ? `'${text}` : text;

        return /[",\n]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
    };
    const rows = report.groups.map((group) => [label(group), group.totalRequests, group.ok, group.failed, group.timedOut, group.costUSD]);

    return [[report.groupBy || 'key', 'totalRequests', 'ok', 'failed', 'timedOut', 'costUSD'], ...rows].map((row) => row.map(cell).join(',')).join('\n');
};
