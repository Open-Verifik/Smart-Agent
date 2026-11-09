// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import {
    DEFAULT_MOCK_OCR_VALUES,
    MOCK_OCR_FIELDS,
    PreviewVerifyShellComponent,
} from './preview-verify-shell.component';
import {
    DEFAULT_VERIFY_LOGO_METRICS,
    parseVerifyStyle,
    resolveLogoMetrics,
    resolveVerifyStyle,
    VERIFY_STYLES,
    VERIFY_STYLE_COLOR_DEFAULTS,
    VerifyStyleColorDefaults,
    VerifyStyleId,
} from './verify-style';

beforeAll(() => {
    try {
        TestBed.initTestEnvironment(
            BrowserDynamicTestingModule,
            platformBrowserDynamicTesting()
        );
    } catch {
        // Environment already initialized
    }
});

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

describe('PreviewVerifyShellComponent split banner layout and banner state', () => {
    let component: PreviewVerifyShellComponent;

    beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            providers: [
                { provide: ChangeDetectorRef, useValue: { markForCheck: vi.fn(), detectChanges: vi.fn() } },
            ],
        });
        component = TestBed.runInInjectionContext(() => new PreviewVerifyShellComponent());
    });

    it('hasBanner returns true when branding.image is a valid non-empty URL or data URI', () => {
        component.branding = {
            image: 'https://example.com/banner.png',
        } as any;
        expect(component.hasBanner).toBe(true);

        component.branding = {
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
        } as any;
        expect(component.hasBanner).toBe(true);
    });

    it('hasBanner returns false when branding.image is empty, whitespace, null, or undefined', () => {
        component.branding = null;
        expect(component.hasBanner).toBe(false);

        component.branding = { image: null } as any;
        expect(component.hasBanner).toBe(false);

        component.branding = { image: undefined } as any;
        expect(component.hasBanner).toBe(false);

        component.branding = { image: '' } as any;
        expect(component.hasBanner).toBe(false);

        component.branding = { image: '   ' } as any;
        expect(component.hasBanner).toBe(false);
    });

    it('projectName defaults to "Verifik" when form has no name value', () => {
        expect(component.projectName).toBe('Verifik');
    });

    it('supports desktop layout mode and flow orders', () => {
        component.deviceType = 'desktop';
        expect(component.deviceType).toBe('desktop');
        expect(component.screens).toContain('contact');
        expect(component.screens).toContain('consent');
    });
});

describe('PreviewVerifyShellComponent OCR review step (Requirement R2)', () => {
    let component: PreviewVerifyShellComponent;

    beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            providers: [
                { provide: ChangeDetectorRef, useValue: { markForCheck: vi.fn(), detectChanges: vi.fn() } },
            ],
        });
        component = TestBed.runInInjectionContext(() => new PreviewVerifyShellComponent());
    });

    it('initializes mock OCR fields and values matching drivers-license.png (Mark Allen Sample)', () => {
        expect(component.ocrFields.length).toBe(8);
        expect(component.ocrFields.map((f) => f.key)).toEqual([
            'firstName',
            'lastName',
            'documentNumber',
            'documentType',
            'dateOfBirth',
            'expirationDate',
            'dateOfIssue',
            'address',
        ]);
        expect(component.ocrDraft).toEqual(DEFAULT_MOCK_OCR_VALUES);
        expect(component.ocrDraft['firstName']).toBe('Mark Allen');
        expect(component.ocrDraft['lastName']).toBe('Sample');
        expect(component.ocrDraft['documentNumber']).toBe('1234-56-7890');
        expect(component.ocrDraft['documentType']).toBe("Driver's License");
        expect(component.documentPreviewImage).toBe('images/ui/placeholders/drivers-license.png');
        expect(component.documentFaceImage).toBe('images/ui/placeholders/face.png');
        expect(component.nameValidationState).toBe('passed');
        expect(component.modifiedOcrCount).toBe(0);
        expect(component.ocrEditing).toBe(false);
    });

    it('toggles editing mode via toggleOcrEditing()', () => {
        expect(component.ocrEditing).toBe(false);
        component.toggleOcrEditing();
        expect(component.ocrEditing).toBe(true);
        component.toggleOcrEditing();
        expect(component.ocrEditing).toBe(false);
    });

    it('detects modified fields and updates modifiedOcrCount correctly', () => {
        expect(component.isOcrFieldModified('firstName')).toBe(false);
        expect(component.modifiedOcrCount).toBe(0);

        component.ocrDraft['firstName'] = 'Jane';
        expect(component.isOcrFieldModified('firstName')).toBe(true);
        expect(component.modifiedOcrCount).toBe(1);

        component.ocrDraft['lastName'] = 'Doe';
        expect(component.isOcrFieldModified('lastName')).toBe(true);
        expect(component.modifiedOcrCount).toBe(2);

        // Whitespace-only edit is treated as not modified compared to original trimmed value
        component.ocrDraft['firstName'] = ' Mark Allen ';
        expect(component.isOcrFieldModified('firstName')).toBe(false);
        expect(component.modifiedOcrCount).toBe(1);
    });

    it('resets an individual field back to its default via resetOcrField(key)', () => {
        component.ocrDraft['firstName'] = 'Modified Name';
        component.ocrDraft['documentNumber'] = '9999-99-9999';
        expect(component.modifiedOcrCount).toBe(2);

        component.resetOcrField('firstName');
        expect(component.ocrDraft['firstName']).toBe('Mark Allen');
        expect(component.isOcrFieldModified('firstName')).toBe(false);
        expect(component.isOcrFieldModified('documentNumber')).toBe(true);
        expect(component.modifiedOcrCount).toBe(1);
    });

    it('resets all fields simultaneously back to defaults via resetAllOcrFields()', () => {
        component.ocrDraft['firstName'] = 'Alice';
        component.ocrDraft['lastName'] = 'Smith';
        component.ocrDraft['documentNumber'] = '5555-00-1111';
        component.ocrDraft['address'] = '456 Oak Avenue';
        expect(component.modifiedOcrCount).toBe(4);

        component.resetAllOcrFields();
        expect(component.ocrDraft).toEqual(DEFAULT_MOCK_OCR_VALUES);
        expect(component.modifiedOcrCount).toBe(0);
        for (const field of component.ocrFields) {
            expect(component.isOcrFieldModified(field.key)).toBe(false);
        }
    });

    it('maps document-result preview view to reviewFront screen and maintains reviewFront in flow', () => {
        component.view = 'document-result';
        component.ngOnInit();
        expect(component.activeScreen).toBe('reviewFront');
        expect(component.screens).toContain('reviewFront');
        expect(component.progressAt).toBe(2);
    });
});

describe('PreviewVerifyShellComponent Submitted screen (Requirement R3) & Preview Polish (Requirement R4)', () => {
    let component: PreviewVerifyShellComponent;

    beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            providers: [
                { provide: ChangeDetectorRef, useValue: { markForCheck: vi.fn(), detectChanges: vi.fn() } },
            ],
        });
        component = TestBed.runInInjectionContext(() => new PreviewVerifyShellComponent());
    });

    afterEach(() => {
        component.ngOnDestroy();
    });

    it('maps liveness-result preview view to submitted screen with progressAt = 4', () => {
        component.view = 'liveness-result';
        component.ngOnInit();
        expect(component.activeScreen).toBe('submitted');
        expect(component.progressAt).toBe(4);
    });

    it('initializes countdown timer at 7 seconds and resets upon selecting submitted screen', () => {
        expect(component.previewRedirectSeconds).toBe(7);
        component.previewRedirectSeconds = 3;
        component.selectScreen('submitted');
        expect(component.previewRedirectSeconds).toBe(7);
        expect(component.activeScreen).toBe('submitted');
    });

    it('restartPreviewFlow resets timer to 7 and navigates to starting screen based on flowOrder', () => {
        component.activeScreen = 'submitted';
        component.previewRedirectSeconds = 2;
        component.flowOrder = 'contact_first';
        component.restartPreviewFlow();
        expect(component.activeScreen).toBe('contact');
        expect(component.previewRedirectSeconds).toBe(7);

        component.activeScreen = 'submitted';
        component.previewRedirectSeconds = 1;
        component.flowOrder = 'consent_first';
        component.restartPreviewFlow();
        expect(component.activeScreen).toBe('consent');
        expect(component.previewRedirectSeconds).toBe(7);
    });

    it('showLivenessRow correctly reflects biometric configuration', () => {
        // Default with null form is true
        expect(component.showLivenessRow).toBe(true);

        // Form with liveness mandatory
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                steps: new FormGroup({
                    liveness: new FormControl('mandatory'),
                }),
            }),
        });
        expect(component.showLivenessRow).toBe(true);

        // Form with liveness skip
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                steps: new FormGroup({
                    liveness: new FormControl('skip'),
                }),
            }),
        });
        expect(component.showLivenessRow).toBe(false);

        // Biometrics livenessStep skip
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                biometrics: new FormGroup({
                    livenessStep: new FormControl('skip'),
                }),
            }),
        });
        expect(component.showLivenessRow).toBe(false);
    });

    it('previewDocumentCategoryLabel resolves document type dynamically', () => {
        expect(component.previewDocumentCategoryLabel).toBe('Cédula de Ciudadanía');

        component.form = new FormGroup({
            projectFlow: new FormGroup({
                documents: new FormGroup({
                    allowedTypes: new FormControl(['drivers_license']),
                }),
            }),
        });
        expect(component.previewDocumentCategoryLabel).toBe('Licencia de conducción');

        component.form = new FormGroup({
            projectFlow: new FormGroup({
                documents: new FormGroup({
                    allowedTypes: new FormControl(['passport']),
                }),
            }),
        });
        expect(component.previewDocumentCategoryLabel).toBe('Pasaporte');
    });

    it('adapts ready screen copy to upload-only, both, and default methods', () => {
        expect(component.readyTitleKey).toBe('smart_enroll.verify.readyTitle');
        expect(component.readyBodyKey).toBe('smart_enroll.verify.readyBody');

        component.form = new FormGroup({
            projectFlow: new FormGroup({
                documents: new FormGroup({
                    verificationMethods: new FormControl(['UPLOAD']),
                }),
            }),
        });
        expect(component.readyTitleKey).toBe('smart_enroll.verify.readyTitleUpload');
        expect(component.readyBodyKey).toBe('smart_enroll.verify.readyBodyUpload');

        component.form = new FormGroup({
            projectFlow: new FormGroup({
                documents: new FormGroup({
                    verificationMethods: new FormControl(['CAMERA', 'UPLOAD']),
                }),
            }),
        });
        expect(component.readyTitleKey).toBe('smart_enroll.verify.readyTitleBoth');
        expect(component.readyBodyKey).toBe('smart_enroll.verify.readyBodyBoth');
    });

    it('handles optional document skipping to selfie or submitted', () => {
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                steps: new FormGroup({
                    document: new FormControl('optional'),
                    liveness: new FormControl('mandatory'),
                }),
            }),
        });
        expect(component.isDocumentOptional).toBe(true);

        component.activeScreen = 'ready';
        component.skipDocumentStep();
        expect(component.activeScreen).toBe('selfie');

        // When liveness is skipped, skipping document goes straight to submitted
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                steps: new FormGroup({
                    document: new FormControl('optional'),
                    liveness: new FormControl('skip'),
                }),
            }),
        });
        component.activeScreen = 'ready';
        component.skipDocumentStep();
        expect(component.activeScreen).toBe('submitted');
    });

    it('simulates countdown timer decrementing and looping in submitted screen', () => {
        vi.useFakeTimers();
        try {
            component.view = 'liveness-result';
            component.ngOnInit();
            expect(component.activeScreen).toBe('submitted');
            expect(component.previewRedirectSeconds).toBe(7);

            vi.advanceTimersByTime(1000);
            expect(component.previewRedirectSeconds).toBe(6);

            vi.advanceTimersByTime(2000);
            expect(component.previewRedirectSeconds).toBe(4);

            // Reaching 1s then next tick loops back to 7s
            vi.advanceTimersByTime(3000);
            expect(component.previewRedirectSeconds).toBe(1);

            vi.advanceTimersByTime(1000);
            expect(component.previewRedirectSeconds).toBe(7);
        } finally {
            vi.useRealTimers();
        }
    });

    it('cleans up interval on ngOnDestroy', () => {
        component.ngOnInit();
        expect(() => component.ngOnDestroy()).not.toThrow();
    });
});

describe('Challenger 2 Adversarial Stress Suite (R1-R4 Edge Cases)', () => {
    let component: PreviewVerifyShellComponent;

    beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            providers: [
                { provide: ChangeDetectorRef, useValue: { markForCheck: vi.fn(), detectChanges: vi.fn() } },
            ],
        });
        component = TestBed.runInInjectionContext(() => new PreviewVerifyShellComponent());
    });

    afterEach(() => {
        component.ngOnDestroy();
    });

    describe('Edge Case 1: Banner collapse robustness & malformed input tolerance (R1)', () => {
        it('safely handles non-string and malformed banner configurations without throwing', () => {
            const malformedCases = [
                undefined,
                null,
                '',
                '   ',
                '\t\n\r',
                12345 as any,
                true as any,
                {} as any,
                [] as any,
            ];

            for (const testCase of malformedCases) {
                component.branding = { image: testCase } as any;
                expect(component.hasBanner).toBe(false);
            }

            component.branding = null;
            expect(component.hasBanner).toBe(false);

            component.branding = undefined as any;
            expect(component.hasBanner).toBe(false);
        });

        it('recognizes valid URLs and data URIs', () => {
            component.branding = { image: 'https://cdn.verifik.co/brand/banner.jpg' } as any;
            expect(component.hasBanner).toBe(true);

            component.branding = { image: 'http://localhost:4200/assets/banner.png' } as any;
            expect(component.hasBanner).toBe(true);

            component.branding = { image: 'data:image/svg+xml;utf8,<svg></svg>' } as any;
            expect(component.hasBanner).toBe(true);
        });
    });

    describe('Edge Case 2: Document type variations and fallbacks (R2, R3)', () => {
        it('resolves Cédula de Ciudadanía for empty, null, undefined, and non-array corruptions', () => {
            const invalidAllowedTypes = [
                [],
                null,
                undefined,
                'invalid-string' as any,
                123 as any,
                { type: 'license' } as any,
            ];

            for (const val of invalidAllowedTypes) {
                component.form = new FormGroup({
                    projectFlow: new FormGroup({
                        documents: new FormGroup({
                            allowedTypes: new FormControl(val),
                        }),
                    }),
                });
                expect(component.previewDocumentCategoryLabel).toBe('Cédula de Ciudadanía');
            }
        });

        it('correctly maps license variations', () => {
            const licenseVariations = [
                ['drivers_license'],
                ['license'],
                ['licencia'],
                ['DRIVER_LICENSE'],
                ['licencia_conduccion'],
            ];

            for (const val of licenseVariations) {
                component.form = new FormGroup({
                    projectFlow: new FormGroup({
                        documents: new FormGroup({
                            allowedTypes: new FormControl(val),
                        }),
                    }),
                });
                expect(component.previewDocumentCategoryLabel).toBe('Licencia de conducción');
            }
        });

        it('correctly maps passport variations', () => {
            const passportVariations = [
                ['passport'],
                ['pasaporte'],
                ['PASSPORT'],
            ];

            for (const val of passportVariations) {
                component.form = new FormGroup({
                    projectFlow: new FormGroup({
                        documents: new FormGroup({
                            allowedTypes: new FormControl(val),
                        }),
                    }),
                });
                expect(component.previewDocumentCategoryLabel).toBe('Pasaporte');
            }
        });

        it('falls back to documentTypes control when allowedTypes control is absent', () => {
            component.form = new FormGroup({
                projectFlow: new FormGroup({
                    documents: new FormGroup({
                        documentTypes: new FormControl(['passport']),
                    }),
                }),
            });
            expect(component.previewDocumentCategoryLabel).toBe('Pasaporte');
        });
    });

    describe('Edge Case 3: Liveness toggle and step skipping interactions (R3, R4)', () => {
        it('evaluates showLivenessRow across all configuration variations', () => {
            // 1. Explicit skip on steps.liveness
            component.form = new FormGroup({
                projectFlow: new FormGroup({
                    steps: new FormGroup({
                        liveness: new FormControl('skip'),
                    }),
                }),
            });
            expect(component.showLivenessRow).toBe(false);

            // 2. Explicit skip on biometrics.livenessStep
            component.form = new FormGroup({
                projectFlow: new FormGroup({
                    biometrics: new FormGroup({
                        livenessStep: new FormControl('skip'),
                    }),
                }),
            });
            expect(component.showLivenessRow).toBe(false);

            // 3. Optional liveness still shows the liveness row
            component.form = new FormGroup({
                projectFlow: new FormGroup({
                    steps: new FormGroup({
                        liveness: new FormControl('optional'),
                    }),
                }),
            });
            expect(component.showLivenessRow).toBe(true);

            // 4. Mandatory liveness shows the liveness row
            component.form = new FormGroup({
                projectFlow: new FormGroup({
                    steps: new FormGroup({
                        liveness: new FormControl('mandatory'),
                    }),
                }),
            });
            expect(component.showLivenessRow).toBe(true);

            // 5. Completely empty form defaults to true
            component.form = null;
            expect(component.showLivenessRow).toBe(true);
        });

        it('skipDocumentStep routes directly to submitted if liveness is skipped, otherwise to selfie', () => {
            // Liveness skipped:
            component.form = new FormGroup({
                projectFlow: new FormGroup({
                    steps: new FormGroup({
                        document: new FormControl('optional'),
                        liveness: new FormControl('skip'),
                    }),
                }),
            });
            component.activeScreen = 'ready';
            component.skipDocumentStep();
            expect(component.activeScreen).toBe('submitted');

            // Liveness active:
            component.form = new FormGroup({
                projectFlow: new FormGroup({
                    steps: new FormGroup({
                        document: new FormControl('optional'),
                        liveness: new FormControl('mandatory'),
                    }),
                }),
            });
            component.activeScreen = 'ready';
            component.skipDocumentStep();
            expect(component.activeScreen).toBe('selfie');
        });
    });

    describe('Edge Case 4: Flow order navigation, restartPreviewFlow, and looping (R3, R4)', () => {
        it('restartPreviewFlow resets timer to 7 and directs to starting screen per flowOrder', () => {
            component.activeScreen = 'submitted';
            component.previewRedirectSeconds = 2;
            component.sheet = 'acceptedIds';

            // Order A: contact_first
            component.flowOrder = 'contact_first';
            component.restartPreviewFlow();
            expect(component.activeScreen).toBe('contact');
            expect(component.previewRedirectSeconds).toBe(7);
            expect(component.sheet).toBeNull();

            // Order B: consent_first
            component.activeScreen = 'submitted';
            component.previewRedirectSeconds = 1;
            component.sheet = 'language';
            component.flowOrder = 'consent_first';
            component.restartPreviewFlow();
            expect(component.activeScreen).toBe('consent');
            expect(component.previewRedirectSeconds).toBe(7);
            expect(component.sheet).toBeNull();
        });

        it('screens cycle through nextScreen() and previousScreen() cleanly in both flow orders', () => {
            // contact_first: contact -> consent -> otp -> ... -> submitted -> contact
            component.flowOrder = 'contact_first';
            component.activeScreen = 'contact';
            component.nextScreen();
            expect(component.activeScreen).toBe('consent');
            component.previousScreen();
            expect(component.activeScreen).toBe('contact');
            component.previousScreen(); // Loops to end
            expect(component.activeScreen).toBe('submitted');
            component.nextScreen(); // Loops to start
            expect(component.activeScreen).toBe('contact');

            // consent_first: consent -> contact -> otp -> ... -> submitted -> consent
            component.flowOrder = 'consent_first';
            component.activeScreen = 'consent';
            component.nextScreen();
            expect(component.activeScreen).toBe('contact');
            component.previousScreen();
            expect(component.activeScreen).toBe('consent');
            component.previousScreen(); // Loops to end
            expect(component.activeScreen).toBe('submitted');
            component.nextScreen(); // Loops to start
            expect(component.activeScreen).toBe('consent');
        });

        it('ngOnChanges responds dynamically to flowOrder changes when view is signup', () => {
            component.view = 'signup';
            component.flowOrder = 'contact_first';
            component.ngOnInit();
            expect(component.activeScreen).toBe('contact');

            component.flowOrder = 'consent_first';
            component.ngOnChanges({
                flowOrder: {
                    currentValue: 'consent_first',
                    previousValue: 'contact_first',
                    firstChange: false,
                    isFirstChange: () => false,
                },
            });
            expect(component.activeScreen).toBe('consent');
        });
    });

    describe('Edge Case 5: OCR editing and field reset resilience (R2)', () => {
        it('safely handles resetOcrField for non-existent keys without altering valid state', () => {
            component.ocrDraft['firstName'] = 'Modified';
            expect(component.modifiedOcrCount).toBe(1);

            component.resetOcrField('nonExistentKey');
            expect(component.ocrDraft['firstName']).toBe('Modified');
            expect(component.modifiedOcrCount).toBe(1);
        });

        it('handles emptying a field and restores it upon reset', () => {
            component.ocrDraft['firstName'] = '';
            expect(component.isOcrFieldModified('firstName')).toBe(true);
            expect(component.modifiedOcrCount).toBe(1);

            component.resetOcrField('firstName');
            expect(component.ocrDraft['firstName']).toBe('Mark Allen');
            expect(component.isOcrFieldModified('firstName')).toBe(false);
            expect(component.modifiedOcrCount).toBe(0);
        });
    });

    describe('Edge Case 6: Countdown timer simulation isolation (R3)', () => {
        it('does not decrement countdown timer when activeScreen is not submitted', () => {
            vi.useFakeTimers();
            try {
                component.activeScreen = 'reviewFront';
                component.previewRedirectSeconds = 7;
                component.ngOnInit();

                vi.advanceTimersByTime(3000);
                expect(component.previewRedirectSeconds).toBe(7);
            } finally {
                vi.useRealTimers();
            }
        });
    });

    describe('Edge Case 7: Language translation completeness in es.json and en.json (R1-R4)', () => {
        it('contains all required preview keys in both Spanish and English without missing values', () => {
            const esPath = resolve(__dirname, '../../../../../../../../public/i18n/es.json');
            const enPath = resolve(__dirname, '../../../../../../../../public/i18n/en.json');

            const es = JSON.parse(readFileSync(esPath, 'utf-8'));
            const en = JSON.parse(readFileSync(enPath, 'utf-8'));

            function get(obj: any, path: string): any {
                const parts = path.split('.');
                let cur = obj;
                for (const p of parts) {
                    if (!cur || typeof cur !== 'object') return undefined;
                    cur = cur[p];
                }
                return cur;
            }

            const requiredKeys = [
                // R1: Banner
                'smart_enroll.verify.identityVerification',
                // R2: OCR Review
                'smart_enroll.verify.ocrReviewTitle',
                'smart_enroll.verify.ocrReviewBody',
                'smart_enroll.verify.ocrStatusExtracted',
                'smart_enroll.verify.ocrExtractedTitle',
                'smart_enroll.verify.ocrEditFields',
                'smart_enroll.verify.ocrDoneEditing',
                'smart_enroll.verify.ocrResetAll',
                'smart_enroll.verify.ocrResetField',
                'smart_enroll.verify.ocrModifiedBadge',
                'smart_enroll.verify.ocrConfirmContinue',
                'smart_enroll.verify.ocrNamesVerified',
                'smart_enroll.verify.ocrFieldFirstName',
                'smart_enroll.verify.ocrFieldLastName',
                'smart_enroll.verify.ocrFieldDocumentNumber',
                'smart_enroll.verify.ocrFieldDocumentType',
                'smart_enroll.verify.ocrFieldDateOfBirth',
                'smart_enroll.verify.ocrFieldExpirationDate',
                'smart_enroll.verify.ocrFieldDateOfIssue',
                'smart_enroll.verify.ocrFieldAddress',
                // R3: Submitted screen
                'smart_enroll.verify.submittedTitle',
                'smart_enroll.verify.submittedSubtitle',
                'smart_enroll.verify.submittedCheckDocument',
                'smart_enroll.verify.submittedStatusVerified',
                'smart_enroll.verify.submittedCheckLiveness',
                'smart_enroll.verify.submittedLivenessDesc',
                'smart_enroll.verify.submittedCheckSecurity',
                'smart_enroll.verify.submittedSecurityDesc',
                'smart_enroll.verify.submittedStatusProtected',
                'smart_enroll.verify.submittedContinueBtn',
                'smart_enroll.verify.submittedRedirecting',
                // Screens navigation
                'smart_enroll.verify.screens.consent',
                'smart_enroll.verify.screens.contact',
                'smart_enroll.verify.screens.otp',
                'smart_enroll.verify.screens.ready',
                'smart_enroll.verify.screens.front',
                'smart_enroll.verify.screens.reviewFront',
                'smart_enroll.verify.screens.selfie',
                'smart_enroll.verify.screens.submitted',
                // R4: Ready polish
                'smart_enroll.verify.readyTitle',
                'smart_enroll.verify.readyTitleUpload',
                'smart_enroll.verify.readyTitleBoth',
                'smart_enroll.verify.readyBody',
                'smart_enroll.verify.readyBodyUpload',
                'smart_enroll.verify.readyBodyBoth',
            ];

            for (const key of requiredKeys) {
                const esVal = get(es, key);
                const enVal = get(en, key);

                expect(typeof esVal).toBe('string');
                expect(esVal.trim().length).toBeGreaterThan(0);

                expect(typeof enVal).toBe('string');
                expect(enVal.trim().length).toBeGreaterThan(0);
            }
        });
    });

    describe('Adaptive Logo Shape Detection & Optical Sizing', () => {
        it('classifies square/circular marks (e.g. 1024x1024 Verifik mark) as "square" with 48px optical height', () => {
            const metrics = resolveLogoMetrics(1024, 1024);
            expect(metrics.shape).toBe('square');
            expect(metrics.aspectRatio).toBe(1);
            expect(metrics.heightPx).toBe(48);
            expect(metrics.maxWidthPx).toBe(72);
        });

        it('classifies vertical/portrait badges as "tall" with 52px optical height', () => {
            const metrics = resolveLogoMetrics(300, 450);
            expect(metrics.shape).toBe('tall');
            expect(metrics.heightPx).toBe(52);
            expect(metrics.maxWidthPx).toBe(120);
        });

        it('classifies compact lockups (1.35 < r <= 2.2) as "compact" with 40px optical height', () => {
            const metrics = resolveLogoMetrics(360, 200);
            expect(metrics.shape).toBe('compact');
            expect(metrics.aspectRatio).toBe(1.8);
            expect(metrics.heightPx).toBe(40);
            expect(metrics.maxWidthPx).toBe(168);
        });

        it('classifies horizontal icon+text lockups (2.2 < r <= 3.8, e.g. Facebook/Stripe) as "wide" with 34px optical height', () => {
            const metrics = resolveLogoMetrics(640, 200);
            expect(metrics.shape).toBe('wide');
            expect(metrics.aspectRatio).toBe(3.2);
            expect(metrics.heightPx).toBe(34);
            expect(metrics.maxWidthPx).toBe(204);
        });

        it('classifies long horizontal wordmarks (r > 3.8) as "ultrawide" and caps height so width never overflows maxWidthPx', () => {
            const normalWide = resolveLogoMetrics(1000, 200);
            expect(normalWide.shape).toBe('ultrawide');
            expect(normalWide.heightPx).toBe(30);
            expect(normalWide.maxWidthPx).toBe(232);

            const extremeBanner = resolveLogoMetrics(1800, 200); // 9:1 aspect ratio
            expect(extremeBanner.shape).toBe('ultrawide');
            expect(extremeBanner.heightPx).toBe(26); // 232 / 9 = 25.77 -> 26px
        });

        it('falls back safely to DEFAULT_VERIFY_LOGO_METRICS for invalid or unloaded dimensions', () => {
            expect(resolveLogoMetrics(0, 0)).toEqual(DEFAULT_VERIFY_LOGO_METRICS);
            expect(resolveLogoMetrics(Number.NaN, 100)).toEqual(DEFAULT_VERIFY_LOGO_METRICS);
        });
    });
});


