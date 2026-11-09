// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { ChangeDetectorRef, SimpleChange } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import {
    DEFAULT_MOCK_OCR_VALUES,
    MOCK_OCR_FIELDS,
    PreviewVerifyShellComponent,
    VerifyPreviewScreen,
} from './preview-verify-shell.component';
import {
    parseVerifyStyle,
    resolveVerifyStyle,
    VERIFY_STYLES,
    VERIFY_STYLE_COLOR_DEFAULTS,
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

describe('Challenger 1 Stress Harness — Requirement R1 (Desktop Split Banner Layout)', () => {
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

    it('stress-tests hasBanner with boundary inputs (whitespace, null, undefined, malformed data, data URIs)', () => {
        const truthyInputs = [
            'https://example.com/banner.jpg',
            'http://localhost:4200/assets/banner.png',
            'data:image/svg+xml;base64,PHN2Zz48L3N2Zz4=',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            '/assets/images/banner.webp',
            '   https://example.com/spaced.png   ',
        ];

        for (const url of truthyInputs) {
            component.branding = { image: url } as any;
            expect(component.hasBanner).toBe(true);
        }

        const falsyInputs = [
            '',
            ' ',
            '   ',
            '\t\n\r',
            null,
            undefined,
            // @ts-ignore
            12345,
            // @ts-ignore
            true,
            // @ts-ignore
            {},
        ];

        for (const val of falsyInputs) {
            component.branding = { image: val } as any;
            expect(component.hasBanner).toBe(false);
        }

        component.branding = null;
        expect(component.hasBanner).toBe(false);
    });

    it('stress-tests projectName fallback and sanitization under boundary inputs', () => {
        expect(component.projectName).toBe('Verifik');

        component.form = new FormGroup({ name: new FormControl(null) });
        expect(component.projectName).toBe('Verifik');

        component.form = new FormGroup({ name: new FormControl('') });
        expect(component.projectName).toBe('Verifik');

        component.form = new FormGroup({ name: new FormControl('   ') });
        expect(component.projectName).toBe('Verifik');

        component.form = new FormGroup({ name: new FormControl('  Custom Acme Corp  ') });
        expect(component.projectName).toBe('Custom Acme Corp');

        // Number or boolean values
        component.form = new FormGroup({ name: new FormControl(12345) });
        expect(component.projectName).toBe('Verifik');
    });

    it('validates deviceType responsive states and flowOrder interactions', () => {
        component.deviceType = 'desktop';
        expect(component.deviceType).toBe('desktop');

        component.deviceType = 'mobile';
        expect(component.deviceType).toBe('mobile');

        component.deviceType = 'tablet';
        expect(component.deviceType).toBe('tablet');

        // Contact first screens vs consent first screens
        component.flowOrder = 'contact_first';
        expect(component.screens[0]).toBe('contact');
        expect(component.screens).toHaveLength(8);

        component.flowOrder = 'consent_first';
        expect(component.screens[0]).toBe('consent');
        expect(component.screens[1]).toBe('contact');
        expect(component.screens).toHaveLength(8);
    });
});

describe('Challenger 1 Stress Harness — Requirement R2 (Document Review OCR Fields)', () => {
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

    it('stress-tests isOcrFieldModified with empty strings, whitespace, and resets', () => {
        // Clearing field completely to empty string
        component.ocrDraft['documentNumber'] = '';
        expect(component.isOcrFieldModified('documentNumber')).toBe(true);
        expect(component.modifiedOcrCount).toBe(1);

        // Setting to spaces only
        component.ocrDraft['documentNumber'] = '   ';
        expect(component.isOcrFieldModified('documentNumber')).toBe(true);

        // Restoring to exact original
        component.ocrDraft['documentNumber'] = DEFAULT_MOCK_OCR_VALUES['documentNumber'];
        expect(component.isOcrFieldModified('documentNumber')).toBe(false);
        expect(component.modifiedOcrCount).toBe(0);

        // Modifying with leading/trailing spaces around original
        component.ocrDraft['documentNumber'] = `  ${DEFAULT_MOCK_OCR_VALUES['documentNumber']}  `;
        expect(component.isOcrFieldModified('documentNumber')).toBe(false);
        expect(component.modifiedOcrCount).toBe(0);
    });

    it('safely handles resetOcrField with non-existent or corrupted keys', () => {
        expect(() => component.resetOcrField('nonExistentField')).not.toThrow();
        expect(() => component.resetOcrField('')).not.toThrow();
        // @ts-ignore
        expect(() => component.resetOcrField(null)).not.toThrow();
    });

    it('stress-tests bulk modifications and all-fields reset cycle', () => {
        for (const field of component.ocrFields) {
            component.ocrDraft[field.key] = `MUTATED_${field.key}`;
        }
        expect(component.modifiedOcrCount).toBe(component.ocrFields.length);
        expect(component.modifiedOcrCount).toBe(8);

        // Reset one by one
        let remaining = 8;
        for (const field of component.ocrFields) {
            component.resetOcrField(field.key);
            remaining--;
            expect(component.modifiedOcrCount).toBe(remaining);
        }
        expect(component.modifiedOcrCount).toBe(0);
    });

    it('stress-tests rapid toggle of ocrEditing state', () => {
        expect(component.ocrEditing).toBe(false);
        for (let i = 0; i < 100; i++) {
            component.toggleOcrEditing();
            expect(component.ocrEditing).toBe(i % 2 === 0);
        }
        expect(component.ocrEditing).toBe(false);
    });
});

describe('Challenger 1 Stress Harness — Requirement R3 (Submitted Page & Countdown)', () => {
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

    it('stress-tests countdown timer through multiple full 7-second rollover cycles', () => {
        vi.useFakeTimers();
        try {
            component.view = 'liveness-result';
            component.ngOnInit();
            expect(component.activeScreen).toBe('submitted');
            expect(component.previewRedirectSeconds).toBe(7);

            // Cycle 1: 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 7
            const expectedSequence = [6, 5, 4, 3, 2, 1, 7];
            for (const expected of expectedSequence) {
                vi.advanceTimersByTime(1000);
                expect(component.previewRedirectSeconds).toBe(expected);
            }

            // Cycle 2: another 7 seconds
            for (const expected of expectedSequence) {
                vi.advanceTimersByTime(1000);
                expect(component.previewRedirectSeconds).toBe(expected);
            }

            // Cycle 3: another 7 seconds
            for (const expected of expectedSequence) {
                vi.advanceTimersByTime(1000);
                expect(component.previewRedirectSeconds).toBe(expected);
            }
        } finally {
            vi.useRealTimers();
        }
    });

    it('verifies timer freezes/does not decrement when component is on non-submitted screens', () => {
        vi.useFakeTimers();
        try {
            component.activeScreen = 'contact';
            component.previewRedirectSeconds = 7;
            component.ngOnInit();

            vi.advanceTimersByTime(5000);
            expect(component.previewRedirectSeconds).toBe(7);

            component.activeScreen = 'reviewFront';
            vi.advanceTimersByTime(5000);
            expect(component.previewRedirectSeconds).toBe(7);

            component.activeScreen = 'selfie';
            vi.advanceTimersByTime(5000);
            expect(component.previewRedirectSeconds).toBe(7);
        } finally {
            vi.useRealTimers();
        }
    });

    it('stress-tests progressAt computation across all screens including edge cases', () => {
        const screenProgressMap: Record<VerifyPreviewScreen, number> = {
            contact: 0,
            otp: 0,
            consent: 1,
            decline: 1,
            ready: 2,
            front: 2,
            reviewFront: 2,
            selfie: 3,
            submitted: 4,
        };

        for (const [screen, expectedProgress] of Object.entries(screenProgressMap)) {
            component.activeScreen = screen as VerifyPreviewScreen;
            expect(component.progressAt).toBe(expectedProgress);
        }

        // Unknown fallback
        component.activeScreen = 'unknown_screen' as any;
        expect(component.progressAt).toBe(0);
    });

    it('stress-tests previewDocumentCategoryLabel with complex allowedTypes configurations', () => {
        // Null / undefined form
        expect(component.previewDocumentCategoryLabel).toBe('Cédula de Ciudadanía');

        // National ID variants
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                documents: new FormGroup({
                    allowedTypes: new FormControl(['national_id', 'identity_card']),
                }),
            }),
        });
        expect(component.previewDocumentCategoryLabel).toBe('Cédula de Ciudadanía');

        // Driver license variants (case insensitivity and Spanish name)
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                documents: new FormGroup({
                    allowedTypes: new FormControl(['Licencia_Conduccion']),
                }),
            }),
        });
        expect(component.previewDocumentCategoryLabel).toBe('Licencia de conducción');

        // Passport variants
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                documents: new FormGroup({
                    allowedTypes: new FormControl(['PASSPORT_CHILE']),
                }),
            }),
        });
        expect(component.previewDocumentCategoryLabel).toBe('Pasaporte');

        // Mixed with fallback to documentTypes if allowedTypes missing
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                documents: new FormGroup({
                    documentTypes: new FormControl(['drivers_license']),
                }),
            }),
        });
        expect(component.previewDocumentCategoryLabel).toBe('Licencia de conducción');
    });

    it('stress-tests showLivenessRow with diverse biometrics and steps inputs', () => {
        // null form
        expect(component.showLivenessRow).toBe(true);

        // empty form
        component.form = new FormGroup({});
        expect(component.showLivenessRow).toBe(true);

        // nested empty projectFlow
        component.form = new FormGroup({ projectFlow: new FormGroup({}) });
        expect(component.showLivenessRow).toBe(true);

        // skip via steps.liveness
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                steps: new FormGroup({
                    liveness: new FormControl('skip'),
                }),
            }),
        });
        expect(component.showLivenessRow).toBe(false);

        // skip via biometrics.livenessStep
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                biometrics: new FormGroup({
                    livenessStep: new FormControl('skip'),
                }),
            }),
        });
        expect(component.showLivenessRow).toBe(false);

        // active / mandatory / optional
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                steps: new FormGroup({
                    liveness: new FormControl('optional'),
                }),
            }),
        });
        expect(component.showLivenessRow).toBe(true);
    });

    it('stress-tests navigation loop: nextScreen and previousScreen through the entire cycle', () => {
        component.flowOrder = 'contact_first';
        component.activeScreen = 'contact';

        const forwardOrder: VerifyPreviewScreen[] = [
            'consent',
            'otp',
            'ready',
            'front',
            'reviewFront',
            'selfie',
            'submitted',
            'contact', // wraps back
        ];

        for (const expected of forwardOrder) {
            component.nextScreen();
            expect(component.activeScreen).toBe(expected);
        }

        // Backward navigation
        const backwardOrder: VerifyPreviewScreen[] = [
            'submitted',
            'selfie',
            'reviewFront',
            'front',
            'ready',
            'otp',
            'consent',
            'contact',
        ];

        for (const expected of backwardOrder) {
            component.previousScreen();
            expect(component.activeScreen).toBe(expected);
        }
    });
});

describe('Challenger 1 Stress Harness — Requirement R4 (Preview Polish & Preset Compatibility)', () => {
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

    it('validates ready screen copy matrix across all verificationMethods permutations', () => {
        // Undefined verificationMethods
        expect(component.readyTitleKey).toBe('smart_enroll.verify.readyTitle');
        expect(component.readyBodyKey).toBe('smart_enroll.verify.readyBody');

        // CAMERA only
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                documents: new FormGroup({
                    verificationMethods: new FormControl(['CAMERA']),
                }),
            }),
        });
        expect(component.readyTitleKey).toBe('smart_enroll.verify.readyTitle');
        expect(component.readyBodyKey).toBe('smart_enroll.verify.readyBody');

        // UPLOAD only
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                documents: new FormGroup({
                    verificationMethods: new FormControl(['UPLOAD']),
                }),
            }),
        });
        expect(component.readyTitleKey).toBe('smart_enroll.verify.readyTitleUpload');
        expect(component.readyBodyKey).toBe('smart_enroll.verify.readyBodyUpload');

        // BOTH (CAMERA and UPLOAD)
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                documents: new FormGroup({
                    verificationMethods: new FormControl(['CAMERA', 'UPLOAD']),
                }),
            }),
        });
        expect(component.readyTitleKey).toBe('smart_enroll.verify.readyTitleBoth');
        expect(component.readyBodyKey).toBe('smart_enroll.verify.readyBodyBoth');

        // Empty array
        component.form = new FormGroup({
            projectFlow: new FormGroup({
                documents: new FormGroup({
                    verificationMethods: new FormControl([]),
                }),
            }),
        });
        expect(component.readyTitleKey).toBe('smart_enroll.verify.readyTitle');
        expect(component.readyBodyKey).toBe('smart_enroll.verify.readyBody');
    });

    it('stress-tests view to screen mapping with ngOnChanges lifecycle triggers', () => {
        const viewMapping = [
            { view: 'signup', expected: 'contact' },
            { view: 'document-upload', expected: 'ready' },
            { view: 'document-scan', expected: 'front' },
            { view: 'document-result', expected: 'reviewFront' },
            { view: 'liveness', expected: 'selfie' },
            { view: 'liveness-result', expected: 'submitted' },
        ];

        for (const { view, expected } of viewMapping) {
            component.view = view as any;
            component.ngOnChanges({
                view: new SimpleChange(null, view, false),
            });
            expect(component.activeScreen).toBe(expected);
        }

        // Test consent_first with signup view
        component.flowOrder = 'consent_first';
        component.view = 'signup';
        component.ngOnChanges({
            flowOrder: new SimpleChange('contact_first', 'consent_first', false),
        });
        expect(component.activeScreen).toBe('consent');
    });

    it('stress-tests all 6 style presets (A to F) completeness and CSS variables', () => {
        const presets: VerifyStyleId[] = ['a', 'b', 'c', 'd', 'e', 'f'];

        for (const preset of presets) {
            const style = VERIFY_STYLES[preset];
            expect(style).toBeDefined();
            expect(style.id).toBe(preset);
            expect(style.variables['--style-page']).toBeTruthy();
            expect(style.variables['--style-cta']).toBeTruthy();

            const defaults = VERIFY_STYLE_COLOR_DEFAULTS[preset];
            expect(defaults).toBeDefined();
            expect(defaults.buttonColor).toMatch(/^#[0-9a-fA-F]{6}$/);
            expect(defaults.buttonTextColor).toMatch(/^#[0-9a-fA-F]{6}$/);
            expect(defaults.titleColor).toMatch(/^#[0-9a-fA-F]{6}$/);
            expect(defaults.textColor).toMatch(/^#[0-9a-fA-F]{6}$/);
            expect(defaults.backgroundColor).toMatch(/^#[0-9a-fA-F]{6}$/);
        }
    });

    it('verifies bottom sheet handling (openSheet, closeSheet, selectLanguage)', () => {
        expect(component.sheet).toBeNull();

        component.openSheet('acceptedIds');
        expect(component.sheet).toBe('acceptedIds');

        component.openSheet('language');
        expect(component.sheet).toBe('language');

        component.selectLanguage('es');
        expect(component.activeLang).toBe('es');
        expect(component.activeLanguageLabel).toBe('Español');
        expect(component.sheet).toBeNull(); // closes sheet automatically

        component.openSheet('trouble');
        expect(component.sheet).toBe('trouble');
        component.closeSheet();
        expect(component.sheet).toBeNull();
    });
});
