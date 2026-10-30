/** @vitest-environment jsdom */
import { autolinkHtml, hrefForAutolink, REPORT_LINK_COLOR } from './report-autolink.util';

describe('report-autolink', () => {
    it('paints the link with a chosen color', () => {
        expect(autolinkHtml('verifika.com', '#dc2626')).toContain('color:#dc2626!important');
        expect(autolinkHtml('verifika.com', '#dc2626')).not.toContain('color:#2563eb');
    });

    it('turns a bare domain into an https link', () => {
        const html = autolinkHtml('verifika.com');
        expect(html).toContain(`href="https://verifika.com"`);
        expect(html).toContain('verifika.com</a>');
        expect(html).toContain(REPORT_LINK_COLOR);
        expect(html).toContain('text-decoration:none!important');
        expect(html).not.toContain('text-decoration:underline');
    });

    it('turns an email into a mailto link', () => {
        const html = autolinkHtml('Write anuar@verifika.com please');
        expect(html).toContain('href="mailto:anuar@verifika.com"');
        expect(html).toContain('anuar@verifika.com</a>');
        expect(html).toContain('Write ');
        expect(html).toContain(' please');
    });

    it('keeps an explicit https URL', () => {
        expect(hrefForAutolink('https://verifika.com/docs')).toBe('https://verifika.com/docs');
        expect(autolinkHtml('See https://verifika.com/docs.')).toContain('href="https://verifika.com/docs"');
        expect(autolinkHtml('See https://verifika.com/docs.')).toMatch(/docs<\/a>\./);
    });

    it('escapes surrounding text', () => {
        expect(autolinkHtml('<script>verifika.com')).toContain('&lt;script&gt;');
        expect(autolinkHtml('<script>verifika.com')).toContain('href="https://verifika.com"');
    });

    it('turns an Enter into a line break the PDF can paint', () => {
        expect(autolinkHtml('Arriba\nAbajo')).toBe('Arriba<br>Abajo');
        expect(autolinkHtml('Uno\r\nDos')).toBe('Uno<br>Dos');
    });

    it('does not treat file-like names as websites', () => {
        expect(autolinkHtml('photo.png')).toBe('photo.png');
        expect(hrefForAutolink('notes.txt')).toBeNull();
    });
});
