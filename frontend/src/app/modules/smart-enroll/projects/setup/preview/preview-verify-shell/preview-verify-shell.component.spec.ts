import { describe, expect, it } from 'vitest';
import {
    parseVerifyStyle,
    resolveVerifyStyle,
    VERIFY_STYLES,
    VERIFY_STYLE_COLOR_DEFAULTS,
    VerifyStyleColorDefaults,
    VerifyStyleId,
} from './verify-style';

describe('PreviewVerifyShell verify-style registry & resolution', () => {
    const ids: VerifyStyleId[] = ['a', 'b', 'c', 'd', 'e', 'f'];

    it('defines all 6 design choices (A: Forest, B: Editorial, C: Paper, D: Vault, E: Porcelain, F: Notebook)', () => {
        expect(Object.keys(VERIFY_STYLES)).toEqual(ids);
        expect(VERIFY_STYLES.a.variables['--style-page']).toBe('#e8ebe6');
        expect(VERIFY_STYLES.a.variables['--style-cta']).toBe('#9fe870');
        expect(VERIFY_STYLES.b.variables['--style-page']).toBe('#e5e5e5');
        expect(VERIFY_STYLES.b.variables['--style-display-transform']).toBe('uppercase');
        expect(VERIFY_STYLES.c.variables['--style-card']).toBe('#fafafa');
        expect(VERIFY_STYLES.c.variables['--style-cta']).toBe('#0d111b');
        expect(VERIFY_STYLES.d.variables['--style-page']).toBe('#000814');
        expect(VERIFY_STYLES.d.variables['--style-card']).toBe('#010d1e');
        expect(VERIFY_STYLES.d.variables['--style-cta']).toBe('#1c6cff');
        expect(VERIFY_STYLES.e.variables['--style-page']).toBe('#f6f6fa');
        expect(VERIFY_STYLES.e.variables['--style-ink']).toBe('#151581');
        expect(VERIFY_STYLES.e.variables['--style-headline-align']).toBe('center');
        expect(VERIFY_STYLES.f.variables['--style-page']).toBe('#f2f2f2');
        expect(VERIFY_STYLES.f.variables['--style-cta']).toBe('#adff02');
        expect(VERIFY_STYLES.f.variables['--style-card-shadow']).toBe('8px 8px 0 0 #000100');
    });

    it('parses valid style IDs case-insensitively and rejects unknown values', () => {
        for (const id of ids) {
            expect(parseVerifyStyle(id)).toBe(id);
            expect(parseVerifyStyle(id.toUpperCase())).toBe(id);
        }
        expect(parseVerifyStyle('')).toBeNull();
        expect(parseVerifyStyle('g')).toBeNull();
        expect(parseVerifyStyle(null)).toBeNull();
    });

    it('resolves preview override first, then v2 saved style, falling back to style a', () => {
        expect(resolveVerifyStyle('d', 'b', 'v2')).toBe('d');
        expect(resolveVerifyStyle(null, 'e', 'v2')).toBe('e');
        expect(resolveVerifyStyle(null, '', 'v2')).toBe('a');
        expect(resolveVerifyStyle(null, 'f', 'legacy')).toBe('a');
    });
});

describe('VERIFY_STYLE_COLOR_DEFAULTS registry', () => {
    const ids: VerifyStyleId[] = ['a', 'b', 'c', 'd', 'e', 'f'];

    it('exports baseline default colors for all 6 presets (a through f)', () => {
        expect(Object.keys(VERIFY_STYLE_COLOR_DEFAULTS)).toEqual(ids);
    });

    it('defines Cuaderno (style f) baseline colors matching specification', () => {
        const cuaderno = VERIFY_STYLE_COLOR_DEFAULTS.f;
        expect(cuaderno.buttonColor).toBe('#adff02');
        expect(cuaderno.buttonTextColor).toBe('#000000');
        expect(cuaderno.titleColor).toBe('#000000');
        expect(cuaderno.textColor).toBe('#6e6e6e');
        expect(cuaderno.backgroundColor).toBe('#f2f2f2');
    });

    it('defines Forest (style a) baseline colors matching specification', () => {
        const forest = VERIFY_STYLE_COLOR_DEFAULTS.a;
        expect(forest.buttonColor).toBe('#9fe870');
        expect(forest.buttonTextColor).toBe('#163300');
        expect(forest.titleColor).toBe('#0e0f0c');
        expect(forest.textColor).toBe('#454745');
        expect(forest.backgroundColor).toBe('#e8ebe6');
    });

    it('defines Editorial (style b) baseline colors matching specification', () => {
        const editorial = VERIFY_STYLE_COLOR_DEFAULTS.b;
        expect(editorial.buttonColor).toBe('#000000');
        expect(editorial.buttonTextColor).toBe('#ffffff');
        expect(editorial.titleColor).toBe('#000000');
        expect(editorial.textColor).toBe('#444444');
        expect(editorial.backgroundColor).toBe('#e5e5e5');
    });

    it('defines Paper (style c) baseline colors matching specification', () => {
        const paper = VERIFY_STYLE_COLOR_DEFAULTS.c;
        expect(paper.buttonColor).toBe('#0d111b');
        expect(paper.buttonTextColor).toBe('#ffffff');
        expect(paper.titleColor).toBe('#1e1e1e');
        expect(paper.textColor).toBe('#666666');
        expect(paper.backgroundColor).toBe('#ffffff');
    });

    it('defines Vault (style d) baseline colors matching specification', () => {
        const vault = VERIFY_STYLE_COLOR_DEFAULTS.d;
        expect(vault.buttonColor).toBe('#1c6cff');
        expect(vault.buttonTextColor).toBe('#ffffff');
        expect(vault.titleColor).toBe('#ffffff');
        expect(vault.textColor).toBe('#ccced0');
        expect(vault.backgroundColor).toBe('#000814');
    });

    it('defines Porcelain (style e) baseline colors matching specification', () => {
        const porcelain = VERIFY_STYLE_COLOR_DEFAULTS.e;
        expect(porcelain.buttonColor).toBe('#ffffff');
        expect(porcelain.buttonTextColor).toBe('#151581');
        expect(porcelain.titleColor).toBe('#151581');
        expect(porcelain.textColor).toBe('#292824');
        expect(porcelain.backgroundColor).toBe('#f6f6fa');
    });
});

describe('Preview CSS Custom Property Overrides and Neo-Brutalist Aesthetic Preservation', () => {
    /**
     * Simulates the template binding on the preview shell's `.page` root element:
     * [style.--style-cta]="branding?.buttonColor || null"
     * [style.--accent]="branding?.buttonColor || null"
     * ...
     */
    function computeEffectiveTokens(styleId: VerifyStyleId, branding?: Partial<VerifyStyleColorDefaults> | null) {
        const base = { ...VERIFY_STYLES[styleId].variables };
        const inlineOverrides: Record<string, string> = {};

        if (branding?.buttonColor) {
            inlineOverrides['--style-cta'] = branding.buttonColor;
            inlineOverrides['--accent'] = branding.buttonColor;
        }
        if (branding?.buttonTextColor) {
            inlineOverrides['--style-cta-text'] = branding.buttonTextColor;
            inlineOverrides['--accent-text'] = branding.buttonTextColor;
        }
        if (branding?.titleColor) {
            inlineOverrides['--title'] = branding.titleColor;
            inlineOverrides['--style-ink'] = branding.titleColor;
        }
        if (branding?.textColor) {
            inlineOverrides['--body'] = branding.textColor;
            inlineOverrides['--style-body'] = branding.textColor;
        }
        if (branding?.backgroundColor) {
            inlineOverrides['--style-page'] = branding.backgroundColor;
            inlineOverrides['--style-page-mobile'] = branding.backgroundColor;
        }

        // Inline specificity overrides stylesheet class rules
        return {
            ...base,
            ...inlineOverrides,
        };
    }

    it('1. Selecting preset style applies baseline default colors when no branding overrides are provided', () => {
        const effective = computeEffectiveTokens('f');
        const defaults = VERIFY_STYLE_COLOR_DEFAULTS.f;

        expect(effective['--style-cta']).toBe(defaults.buttonColor); // #adff02
        expect(effective['--style-cta-text']).toBe(defaults.buttonTextColor); // #000000
        expect(effective['--title']).toBe(defaults.titleColor); // #000000
        expect(effective['--body']).toBe(defaults.textColor); // #6e6e6e
        expect(effective['--style-page']).toBe(defaults.backgroundColor); // #f2f2f2
    });

    it('2. Modifying brand colors overrides the preset style color tokens in preview while preserving font, borders, and shadows', () => {
        const customBranding: Partial<VerifyStyleColorDefaults> = {
            buttonColor: '#ff0055',
            buttonTextColor: '#ffffff',
            titleColor: '#123456',
            textColor: '#789abc',
            backgroundColor: '#0a0a0a',
        };

        const effective = computeEffectiveTokens('f', customBranding);

        // Color tokens are explicitly overridden by custom branding
        expect(effective['--style-cta']).toBe('#ff0055');
        expect(effective['--accent']).toBe('#ff0055');
        expect(effective['--style-cta-text']).toBe('#ffffff');
        expect(effective['--accent-text']).toBe('#ffffff');
        expect(effective['--title']).toBe('#123456');
        expect(effective['--style-ink']).toBe('#123456');
        expect(effective['--body']).toBe('#789abc');
        expect(effective['--style-body']).toBe('#789abc');
        expect(effective['--style-page']).toBe('#0a0a0a');
        expect(effective['--style-page-mobile']).toBe('#0a0a0a');

        // Cuaderno's neo-brutalist structural tokens remain 100% INTACT
        expect(effective['--style-display']).toBe('"Roboto Condensed", "Arial Narrow", sans-serif');
        expect(effective['--style-display-weight']).toBe('900');
        expect(effective['--style-card-border']).toBe('1px solid #000000');
        expect(effective['--style-card-shadow']).toBe('8px 8px 0 0 #000100');
        expect(effective['--style-radius-button']).toBe('16px');
        expect(effective['--style-radius-card']).toBe('16px');
        expect(effective['--style-cta-border']).toBe('1px solid #000000');
        expect(effective['--style-cta-shadow']).toBe('none');
    });

    it('3. Switching between styles updates defaults appropriately without erasing custom brand color overrides', () => {
        // Step A: Merchant selects Cuaderno ('f') and customizes buttonColor to '#2563eb'
        const customOverrides = new Set<string>(['buttonColor']);
        let branding: VerifyStyleColorDefaults = {
            ...VERIFY_STYLE_COLOR_DEFAULTS.f,
            buttonColor: '#2563eb',
        };

        let effective = computeEffectiveTokens('f', branding);
        expect(effective['--style-cta']).toBe('#2563eb');
        expect(effective['--style-page']).toBe('#f2f2f2'); // Cuaderno baseline

        // Step B: Merchant switches to Editorial ('b'). Untouched fields receive style 'b' defaults, override is kept
        const newStyleDefaults = VERIFY_STYLE_COLOR_DEFAULTS.b;
        const updatedBranding: VerifyStyleColorDefaults = {
            buttonColor: customOverrides.has('buttonColor') ? branding.buttonColor : newStyleDefaults.buttonColor,
            buttonTextColor: customOverrides.has('buttonTextColor') ? branding.buttonTextColor : newStyleDefaults.buttonTextColor,
            titleColor: customOverrides.has('titleColor') ? branding.titleColor : newStyleDefaults.titleColor,
            textColor: customOverrides.has('textColor') ? branding.textColor : newStyleDefaults.textColor,
            backgroundColor: customOverrides.has('backgroundColor') ? branding.backgroundColor : newStyleDefaults.backgroundColor,
        };

        effective = computeEffectiveTokens('b', updatedBranding);

        // Custom override preserved:
        expect(effective['--style-cta']).toBe('#2563eb');
        // Untouched fields updated to Editorial defaults:
        expect(effective['--style-cta-text']).toBe('#ffffff');
        expect(effective['--title']).toBe('#000000');
        expect(effective['--body']).toBe('#444444');
        expect(effective['--style-page']).toBe('#e5e5e5');
        // Editorial typography applied:
        expect(effective['--style-display']).toBe('"Barlow Condensed", "Arial Narrow", sans-serif');
        expect(effective['--style-display-transform']).toBe('uppercase');
    });
});
