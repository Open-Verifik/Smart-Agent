// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { ChangeDetectorRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoService } from '@jsverse/transloco';
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { SetupUserInterfaceComponent } from './user-interface.component';
import { VERIFY_STYLE_COLOR_DEFAULTS } from '../../preview/preview-verify-shell/verify-style';

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

describe('SetupUserInterfaceComponent - Style Presets and Color Overrides', () => {
    let component: SetupUserInterfaceComponent;
    let form: FormGroup;

    const createForm = () => {
        return new FormGroup({
            branding: new FormGroup({
                backgroundColor: new FormControl('#ffffff'),
                buttonColor: new FormControl('#3f3f46'),
                buttonTextColor: new FormControl('#ffffff'),
                imageBackgroundColor: new FormControl('#ffffff'),
                textColor: new FormControl('#3f3f46'),
                titleColor: new FormControl('#3f3f46'),
            }),
            projectFlow: new FormGroup({
                onboardingSettings: new FormGroup({
                    verifyStyle: new FormControl(''),
                }),
            }),
        });
    };

    beforeEach(() => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            providers: [
                { provide: ChangeDetectorRef, useValue: { markForCheck: vi.fn(), detectChanges: vi.fn() } },
                { provide: MatSnackBar, useValue: { open: vi.fn() } },
                { provide: TranslocoService, useValue: { translate: (k: string) => k } },
            ],
        });

        component = TestBed.runInInjectionContext(() => new SetupUserInterfaceComponent());
        form = createForm();
        component.form = form;
        component.ngOnInit();
    });

    it('1. Selecting preset style applies baseline default colors', () => {
        // Selecting "cuaderno" ('f')
        component.verifyStyleControl?.setValue('f');

        const branding = component.brandingFormGroup?.value;
        const cuadernoDefaults = VERIFY_STYLE_COLOR_DEFAULTS.f;

        expect(branding.buttonColor).toBe(cuadernoDefaults.buttonColor); // #adff02
        expect(branding.buttonTextColor).toBe(cuadernoDefaults.buttonTextColor); // #000000
        expect(branding.titleColor).toBe(cuadernoDefaults.titleColor); // #000000
        expect(branding.textColor).toBe(cuadernoDefaults.textColor); // #6e6e6e
        expect(branding.backgroundColor).toBe(cuadernoDefaults.backgroundColor); // #f2f2f2
        expect(component.customOverrides.size).toBe(0);
    });

    it('2. Modifying brand colors marks them as customized overrides', () => {
        // User selects style 'f'
        component.verifyStyleControl?.setValue('f');
        expect(component.customOverrides.has('buttonColor')).toBe(false);

        // User customizes buttonColor via swatch picker
        component.markCustomOverride('buttonColor');
        component.brandingFormGroup?.get('buttonColor')?.setValue('#2563eb');

        expect(component.customOverrides.has('buttonColor')).toBe(true);
        expect(component.brandingFormGroup?.get('buttonColor')?.value).toBe('#2563eb');

        // User customizes titleColor via control change
        component.brandingFormGroup?.get('titleColor')?.setValue('#1e3a8a');
        expect(component.customOverrides.has('titleColor')).toBe(true);
        expect(component.brandingFormGroup?.get('titleColor')?.value).toBe('#1e3a8a');
    });

    it('3. Switching between styles updates defaults appropriately without erasing custom brand color overrides', () => {
        // Step A: Select style 'f' (Cuaderno)
        component.verifyStyleControl?.setValue('f');
        expect(component.brandingFormGroup?.get('buttonColor')?.value).toBe('#adff02');
        expect(component.brandingFormGroup?.get('buttonTextColor')?.value).toBe('#000000');
        expect(component.brandingFormGroup?.get('backgroundColor')?.value).toBe('#f2f2f2');

        // Step B: User overrides buttonColor to '#ff0055' and backgroundColor to '#111111'
        component.markCustomOverride('buttonColor');
        component.brandingFormGroup?.get('buttonColor')?.setValue('#ff0055');
        component.markCustomOverride('backgroundColor');
        component.brandingFormGroup?.get('backgroundColor')?.setValue('#111111');

        expect(component.customOverrides.has('buttonColor')).toBe(true);
        expect(component.customOverrides.has('backgroundColor')).toBe(true);
        expect(component.customOverrides.has('buttonTextColor')).toBe(false);
        expect(component.customOverrides.has('textColor')).toBe(false);

        // Step C: Switch style to 'b' (Editorial)
        component.verifyStyleControl?.setValue('b');

        const editorialDefaults = VERIFY_STYLE_COLOR_DEFAULTS.b;
        const brandingAfterB = component.brandingFormGroup?.value;

        // Custom overrides preserved!
        expect(brandingAfterB.buttonColor).toBe('#ff0055');
        expect(brandingAfterB.backgroundColor).toBe('#111111');

        // Untouched controls updated to style 'b' defaults!
        expect(brandingAfterB.buttonTextColor).toBe(editorialDefaults.buttonTextColor); // #ffffff
        expect(brandingAfterB.titleColor).toBe(editorialDefaults.titleColor); // #000000
        expect(brandingAfterB.textColor).toBe(editorialDefaults.textColor); // #444444

        // Step D: Switch style to 'a' (Forest)
        component.verifyStyleControl?.setValue('a');

        const forestDefaults = VERIFY_STYLE_COLOR_DEFAULTS.a;
        const brandingAfterA = component.brandingFormGroup?.value;

        // Custom overrides STILL preserved!
        expect(brandingAfterA.buttonColor).toBe('#ff0055');
        expect(brandingAfterA.backgroundColor).toBe('#111111');

        // Untouched controls updated to style 'a' defaults!
        expect(brandingAfterA.buttonTextColor).toBe(forestDefaults.buttonTextColor); // #163300
        expect(brandingAfterA.titleColor).toBe(forestDefaults.titleColor); // #0e0f0c
        expect(brandingAfterA.textColor).toBe(forestDefaults.textColor); // #454745
    });

    it('4. Adversarial: Rapid multi-preset switching preserves single override invariant across 100 transitions', () => {
        // Start with Cuaderno
        component.verifyStyleControl?.setValue('f');
        // Override only buttonColor
        component.markCustomOverride('buttonColor');
        component.brandingFormGroup?.get('buttonColor')?.setValue('#e11d48');

        const styles: ('a' | 'b' | 'c' | 'd' | 'e' | 'f')[] = ['a', 'b', 'c', 'd', 'e', 'f'];
        for (let i = 0; i < 100; i++) {
            const nextStyle = styles[i % styles.length];
            component.verifyStyleControl?.setValue(nextStyle);

            const currentBranding = component.brandingFormGroup?.value;
            const expectedDefaults = VERIFY_STYLE_COLOR_DEFAULTS[nextStyle];

            // Invariant 1: buttonColor remains customized #e11d48
            expect(currentBranding.buttonColor).toBe('#e11d48');

            // Invariant 2: all other 4 colors match nextStyle defaults exactly
            expect(currentBranding.buttonTextColor).toBe(expectedDefaults.buttonTextColor);
            expect(currentBranding.titleColor).toBe(expectedDefaults.titleColor);
            expect(currentBranding.textColor).toBe(expectedDefaults.textColor);
            expect(currentBranding.backgroundColor).toBe(expectedDefaults.backgroundColor);
        }
    });

    it('5. Adversarial: Boundary conditions (null, empty, unknown style IDs) do not crash or corrupt state', () => {
        component.verifyStyleControl?.setValue('f');
        const validValues = component.brandingFormGroup?.value;

        // Malformed / boundary style values
        component.verifyStyleControl?.setValue(null);
        expect(component.brandingFormGroup?.value).toEqual(validValues);

        component.verifyStyleControl?.setValue('');
        expect(component.brandingFormGroup?.value).toEqual(validValues);

        component.verifyStyleControl?.setValue('   ');
        expect(component.brandingFormGroup?.value).toEqual(validValues);

        component.verifyStyleControl?.setValue('unknown_style');
        expect(component.brandingFormGroup?.value).toEqual(validValues);

        component.verifyStyleControl?.setValue(123 as unknown as string);
        expect(component.brandingFormGroup?.value).toEqual(validValues);
    });

    it('6. Adversarial: Isolated single-color override verification for each of the 5 brand colors', () => {
        const fields = ['buttonColor', 'buttonTextColor', 'titleColor', 'textColor', 'backgroundColor'] as const;

        for (const fieldToOverride of fields) {
            // Fresh form and component for each field test
            const freshForm = createForm();
            const freshComp = TestBed.runInInjectionContext(() => new SetupUserInterfaceComponent());
            freshComp.form = freshForm;
            freshComp.ngOnInit();

            freshComp.verifyStyleControl?.setValue('f');
            freshComp.markCustomOverride(fieldToOverride);
            freshComp.brandingFormGroup?.get(fieldToOverride)?.setValue('#custom_hex');

            // Switch to style d (Vault)
            freshComp.verifyStyleControl?.setValue('d');
            const brandingD = freshComp.brandingFormGroup?.value;
            const defaultsD = VERIFY_STYLE_COLOR_DEFAULTS.d;

            // Only the targeted field is customized
            expect(brandingD[fieldToOverride]).toBe('#custom_hex');

            // All other 4 fields follow Vault baseline defaults
            for (const otherField of fields) {
                if (otherField !== fieldToOverride) {
                    expect(brandingD[otherField]).toBe(defaultsD[otherField]);
                }
            }
        }
    });
});
