import { htmlMatchesPrintMarkers, mergePrintHtmlDocuments } from './report-print-html.util';

const sheetDoc = (rowIndex: number, pages = 2): string => {
    const sheets = Array.from(
        { length: pages },
        () => `<div class="print-sheet"><div data-report-row="${rowIndex}">row ${rowIndex}</div></div>`
    ).join('');
    return `<!DOCTYPE html><html data-print-pages="${pages}"><head><meta charset="utf-8"/><style>
@page{size:210mm 297mm;margin:0}
html,body{margin:0;padding:0;width:210mm;height:${pages * 297}mm;overflow:hidden;background:#fff}
</style></head><body>${sheets}</body></html>`;
};

describe('mergePrintHtmlDocuments', () => {
    it('keeps every record page and sizes the document to the full batch', () => {
        const merged = mergePrintHtmlDocuments([sheetDoc(0), sheetDoc(1), sheetDoc(2), sheetDoc(3)]);
        expect(merged).toBeTruthy();
        expect(merged).toContain('data-print-pages="8"');
        expect(merged).toContain('height:2376mm');
        expect((merged!.match(/class="print-sheet"/g) || []).length).toBe(8);
        expect(merged).toContain('data-report-row="0"');
        expect(merged).toContain('data-report-row="3"');
    });
});

describe('htmlMatchesPrintMarkers', () => {
    it('accepts HTML once the painted row index is present', () => {
        expect(
            htmlMatchesPrintMarkers(sheetDoc(2), { mustHave: ['zzz'], mustNot: ['row 0'] }, 2)
        ).toBe(true);
        expect(
            htmlMatchesPrintMarkers(sheetDoc(2), { mustHave: [], mustNot: [] }, 0)
        ).toBe(false);
    });
});
