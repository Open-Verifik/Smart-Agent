export const REPORT_FONT_STACKS = [
    { value: 'Inter, system-ui, sans-serif', labelKey: 'smartReport.fontSans' },
    { value: 'Georgia, "Times New Roman", serif', labelKey: 'smartReport.fontSerif' },
    { value: '"Times New Roman", Times, serif', labelKey: 'smartReport.fontTimes' },
    { value: 'Arial, Helvetica, sans-serif', labelKey: 'smartReport.fontArial' },
    { value: 'Verdana, Geneva, sans-serif', labelKey: 'smartReport.fontVerdana' },
    { value: '"Courier New", Courier, monospace', labelKey: 'smartReport.fontMono' },
] as const;

export const REPORT_TEXT_ALIGNS = ['left', 'center', 'right', 'justify'] as const;

export type ReportTextAlign = (typeof REPORT_TEXT_ALIGNS)[number];
