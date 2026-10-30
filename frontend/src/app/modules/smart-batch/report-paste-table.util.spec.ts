/** @vitest-environment jsdom */
import { describe, expect, it } from 'vitest';
import {
    clipboardHasTable,
    hasPastedTable,
    insertHtmlAtPlainSelection,
    markdownTableToHtml,
    pasteTablesFromClipboard,
    plainGridToTable,
    sanitizePastedHtml,
    tableChromeCssVars,
} from './report-paste-table.util';

describe('report paste tables', () => {
    it('keeps ChatGPT-style HTML tables and drops scripts', () => {
        const html = `
            <table>
                <thead><tr><th>Nombre</th><th>Placa</th></tr></thead>
                <tbody><tr><td>Ana</td><td onclick="alert(1)">ABC123</td></tr></tbody>
            </table>
            <script>alert(1)</script>`;
        const out = pasteTablesFromClipboard(html, 'Ana\tABC123');
        expect(out).toContain('<table');
        expect(out).toContain('Ana');
        expect(out).toContain('ABC123');
        expect(out).toContain('report-rich-table');
        expect(out).not.toContain('script');
        expect(out).not.toContain('onclick');
    });

    it('builds a table from Excel tab-separated text', () => {
        const table = plainGridToTable('Col A\tCol B\n1\t2\n3\t4');
        expect(table).toContain('<th>Col A</th>');
        expect(table).toContain('<td>1</td>');
        expect(table).toContain('<td>4</td>');
    });

    it('keeps Word colspan and several tables in one paste', () => {
        const html = `
            <p>Antes</p>
            <table class="MsoTableGrid" border="1">
                <tr><td colspan="2">Fusionada</td></tr>
                <tr><td>A</td><td>B</td></tr>
            </table>
            <table><tr><td>Segunda</td></tr></table>`;
        const out = pasteTablesFromClipboard(html, '');
        expect(out?.match(/<table/g)?.length).toBe(2);
        expect(out).toContain('colspan="2"');
        expect(out).toContain('Antes');
        expect(out).toContain('Segunda');
    });

    it('does not treat ordinary sentences as a table', () => {
        expect(clipboardHasTable('', 'Hola mundo')).toBe(false);
        expect(pasteTablesFromClipboard('', 'Hola mundo')).toBeNull();
        expect(hasPastedTable('Hola mundo')).toBe(false);
    });

    it('inserts the table between two existing paragraphs', () => {
        const next = insertHtmlAtPlainSelection('Arriba\n\nAbajo', 7, 7, '<table class="report-rich-table"><tr><td>X</td></tr></table>');
        expect(next.startsWith('Arriba')).toBe(true);
        expect(next).toContain('<table');
        expect(next.endsWith('Abajo') || next.includes('Abajo')).toBe(true);
    });

    it('turns a ChatGPT markdown table into HTML', () => {
        const md = '| Nombre | Valor |\n| --- | --- |\n| A | 1 |';
        const table = markdownTableToHtml(md);
        expect(table).toContain('<th>Nombre</th>');
        expect(table).toContain('<td>A</td>');
        expect(pasteTablesFromClipboard('', md)).toContain('<table');
    });

    it('drops Excel cell paint so inspector chrome can restyle the table', () => {
        const html = `<table><tr><td bgcolor="#ff0000" style="background-color:#00ff00;color:#0000ff;text-align:center">A</td></tr></table>`;
        const out = sanitizePastedHtml(html);
        expect(out).toContain('text-align:center');
        expect(out).not.toContain('ff0000');
        expect(out).not.toContain('00ff00');
        expect(out).not.toContain('0000ff');
        expect(out).not.toContain('bgcolor');
    });

    it('drops Excel column widths so the table stays in the block', () => {
        const html = `<table width="1200" style="width:1200px"><col width="400"><tr><td width="400" style="width:200pt">A</td><td width="800">B</td></tr></table>`;
        const out = sanitizePastedHtml(html);
        expect(out).toContain('report-rich-table');
        expect(out).not.toContain('1200');
        expect(out).not.toContain('200pt');
        expect(out).not.toContain('width="400"');
    });

    it('exposes table chrome as CSS variables for the sheet and PDF', () => {
        const vars = tableChromeCssVars({
            tableBorderColor: '#dc2626',
            tableBorderWidth: 2,
            tableHeaderBackground: '#1e3a8a',
            tableHeaderColor: '#ffffff',
        });
        expect(vars['--report-table-border']).toBe('#dc2626');
        expect(vars['--report-table-border-width']).toBe('2px');
        expect(vars['--report-table-header-bg']).toBe('#1e3a8a');
        expect(vars['--report-table-header-color']).toBe('#ffffff');
    });

    it('strips javascript hrefs while keeping http links', () => {
        const html = `<table><tr><td><a href="javascript:alert(1)">bad</a><a href="https://verifika.com">ok</a></td></tr></table>`;
        const out = sanitizePastedHtml(html);
        expect(out).not.toContain('javascript:');
        expect(out).toContain('https://verifika.com');
    });
});
