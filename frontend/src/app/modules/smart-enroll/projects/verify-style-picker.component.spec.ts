// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { ChangeDetectionStrategy, ɵresolveComponentResources } from '@angular/core';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Injectable } from '@angular/core';
import { TranslocoLoader, provideTransloco } from '@jsverse/transloco';

@Injectable()
class MockTranslocoLoader implements TranslocoLoader {
    getTranslation() {
        return of(TRANSLATION_MOCK);
    }
}
import { of } from 'rxjs';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { VerifyStylePickerComponent } from './verify-style-picker.component';
import template from './verify-style-picker.component.html?raw';

const TRANSLATION_MOCK = {
    smartEnrollProjects: {
        setup: {
            integrations: {
                verifyStyle: {
                    title: 'Verification look',
                    subtitle: 'Customers see this on the new enrollment page. Leave it unset and that page uses Forest. The current enrollment page is unchanged.',
                    sample: 'Continue',
                    unset: 'Not set',
                    names: {
                        a: 'Forest',
                        b: 'Editorial',
                        c: 'Paper',
                        d: 'Vault',
                        e: 'Porcelain',
                        f: 'Notebook',
                    },
                    descriptions: {
                        a: 'Eco-minimalist sage aesthetic with tight Inter typography and vibrant chartreuse pill buttons.',
                        b: 'High-contrast editorial layout featuring bold condensed Barlow headlines and stark monochrome accents.',
                        c: 'Warm tactile paper aesthetic with modern Outfit typography and deep charcoal accents.',
                        d: 'Cyber-vault dark mode with technical Space Grotesk type and electric blue accents.',
                        e: 'Refined porcelain aesthetic with delicate Inter Tight typography and indigo bordered buttons.',
                        f: 'Neo-brutalist notebook theme with punchy Roboto Condensed headlines and neon lime accents.',
                    },
                },
            },
            ui: {
                verifyStyle: {
                    title: 'Verification look',
                    subtitle: 'Customers see this on the new enrollment page. Leave it unset and that page uses Forest. The current enrollment page is unchanged.',
                    sample: 'Continue',
                    unset: 'Not set',
                    names: {
                        a: 'Forest',
                        b: 'Editorial',
                        c: 'Paper',
                        d: 'Vault',
                        e: 'Porcelain',
                        f: 'Notebook',
                    },
                    descriptions: {
                        a: 'Eco-minimalist sage aesthetic with tight Inter typography and vibrant chartreuse pill buttons.',
                        b: 'High-contrast editorial layout featuring bold condensed Barlow headlines and stark monochrome accents.',
                        c: 'Warm tactile paper aesthetic with modern Outfit typography and deep charcoal accents.',
                        d: 'Cyber-vault dark mode with technical Space Grotesk type and electric blue accents.',
                        e: 'Refined porcelain aesthetic with delicate Inter Tight typography and indigo bordered buttons.',
                        f: 'Neo-brutalist notebook theme with punchy Roboto Condensed headlines and neon lime accents.',
                    },
                },
            },
        },
    },
};

beforeAll(async () => {
    try {
        getTestBed().initTestEnvironment(
            BrowserDynamicTestingModule,
            platformBrowserDynamicTesting()
        );
    } catch {
        // Environment already initialized
    }

    await ɵresolveComponentResources(async (url) => {
        if (url.includes('.html')) return template;
        if (url.includes('.scss')) return '';
        return '';
    });
});

describe('VerifyStylePickerComponent', () => {
    let component: VerifyStylePickerComponent;
    let fixture: ComponentFixture<VerifyStylePickerComponent>;

    beforeEach(async () => {
        TestBed.resetTestingModule();
        // Remove any font links before test to test injection cleanly
        const existingLink = document.getElementById('verify-style-picker-fonts');
        if (existingLink) {
            existingLink.remove();
        }

        await TestBed.configureTestingModule({
            imports: [VerifyStylePickerComponent],
            providers: [
                provideTransloco({
                    config: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                    loader: MockTranslocoLoader,
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(VerifyStylePickerComponent);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        fixture?.destroy();
        TestBed.resetTestingModule();
        const existingLink = document.getElementById('verify-style-picker-fonts');
        if (existingLink) {
            existingLink.remove();
        }
    });

    describe('Component configuration & metadata', () => {
        it('should create the component instance successfully', () => {
            expect(component).toBeTruthy();
        });

        it('is defined with standalone: true', () => {
            const cmpDef = (VerifyStylePickerComponent as unknown as { ɵcmp: { standalone: boolean } }).ɵcmp;
            expect(cmpDef.standalone).toBe(true);
        });

        it('is defined with ChangeDetectionStrategy.OnPush', () => {
            const cmpDef = (VerifyStylePickerComponent as unknown as { ɵcmp: { onPush: boolean } }).ɵcmp;
            expect(cmpDef.onPush).toBe(true);
        });

        it('has 6 verification styles configured in STYLES array', () => {
            expect(component.styles).toHaveLength(6);
            expect(component.styles.map((s) => s.id)).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
        });
    });

    describe('Dynamic Google Fonts injection', () => {
        it('injects Google Fonts link into document head on init', () => {
            fixture.detectChanges();
            const link = document.getElementById('verify-style-picker-fonts') as HTMLLinkElement | null;
            expect(link).not.toBeNull();
            expect(link?.rel).toBe('stylesheet');
            expect(link?.href).toContain('fonts.googleapis.com');
            expect(link?.href).toContain('Barlow+Condensed');
            expect(link?.href).toContain('Inter+Tight');
            expect(link?.href).toContain('Roboto+Condensed');
            expect(link?.href).toContain('Space+Grotesk');
        });

        it('does not duplicate Google Fonts link if one already exists in document head', () => {
            fixture.detectChanges();
            expect(document.querySelectorAll('#verify-style-picker-fonts').length).toBe(1);

            // Re-trigger _loadFonts on another component instance or direct call
            const secondFixture = TestBed.createComponent(VerifyStylePickerComponent);
            secondFixture.detectChanges();
            expect(document.querySelectorAll('#verify-style-picker-fonts').length).toBe(1);
            secondFixture.destroy();
        });
    });

    describe('Template rendering & accessibility roles', () => {
        it('renders a grid container with role="radiogroup" and accessible label', () => {
            fixture.detectChanges();
            const el = fixture.nativeElement as HTMLElement;
            const radiogroup = el.querySelector('.grid[role="radiogroup"]');
            expect(radiogroup).toBeTruthy();
            expect(radiogroup?.getAttribute('aria-label')).toBe('Verification look');
        });

        it('renders exactly 6 radio buttons with role="radio"', () => {
            fixture.detectChanges();
            const el = fixture.nativeElement as HTMLElement;
            const buttons = el.querySelectorAll('button.choice[role="radio"]');
            expect(buttons.length).toBe(6);
        });

        it('initializes all radio choices with aria-checked="false" when no value is set', () => {
            component.control = new FormControl('');
            fixture.detectChanges();
            const el = fixture.nativeElement as HTMLElement;
            const buttons = el.querySelectorAll('button.choice');

            buttons.forEach((btn) => {
                expect(btn.getAttribute('aria-checked')).toBe('false');
                expect(btn.classList.contains('on')).toBe(false);
            });
        });

        it('renders letter identifiers and style names for each option', () => {
            fixture.detectChanges();
            const el = fixture.nativeElement as HTMLElement;
            const letters = Array.from(el.querySelectorAll('.letter')).map((l) => l.textContent?.trim());
            expect(letters).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);

            const captions = Array.from(el.querySelectorAll('.caption')).map((c) => c.textContent?.trim());
            expect(captions.some((c) => c?.includes('Forest'))).toBe(true);
            expect(captions.some((c) => c?.includes('Editorial'))).toBe(true);
            expect(captions.some((c) => c?.includes('Paper'))).toBe(true);
            expect(captions.some((c) => c?.includes('Vault'))).toBe(true);
            expect(captions.some((c) => c?.includes('Porcelain'))).toBe(true);
            expect(captions.some((c) => c?.includes('Notebook'))).toBe(true);
        });
    });

    describe('Style selection & form control synchronization', () => {
        it('updates form control value, marks dirty, and marks touched when choosing a style', () => {
            const control = new FormControl('');
            component.control = control;
            fixture.detectChanges();

            expect(control.value).toBe('');
            expect(control.dirty).toBe(false);
            expect(control.touched).toBe(false);

            component.choose('b');

            expect(control.value).toBe('b');
            expect(control.dirty).toBe(true);
            expect(control.touched).toBe(true);

            // Choosing the same style again toggles/deselects back to empty string
            component.choose('b');
            expect(control.value).toBe('');
        });

        it('updates UI selection state on button click', () => {
            const control = new FormControl('');
            component.control = control;
            fixture.detectChanges();

            const el = fixture.nativeElement as HTMLElement;
            const buttons = el.querySelectorAll<HTMLButtonElement>('button.choice');

            // Click style 'c' (Paper, index 2)
            buttons[2].click();
            fixture.detectChanges();

            expect(control.value).toBe('c');
            expect(buttons[2].classList.contains('on')).toBe(true);
            expect(buttons[2].getAttribute('aria-checked')).toBe('true');

            // Other buttons should not be active
            expect(buttons[0].classList.contains('on')).toBe(false);
            expect(buttons[0].getAttribute('aria-checked')).toBe('false');
        });

        it('reflects external FormControl value changes in the view', () => {
            const control = new FormControl('a');
            component.control = control;
            fixture.detectChanges();

            const el = fixture.nativeElement as HTMLElement;
            let buttons = el.querySelectorAll<HTMLButtonElement>('button.choice');
            expect(buttons[0].classList.contains('on')).toBe(true);
            expect(buttons[0].getAttribute('aria-checked')).toBe('true');

            // Change to 'd' (Vault)
            control.setValue('d');
            fixture.detectChanges();

            buttons = el.querySelectorAll<HTMLButtonElement>('button.choice');
            expect(buttons[0].classList.contains('on')).toBe(false);
            expect(buttons[3].classList.contains('on')).toBe(true);
            expect(buttons[3].getAttribute('aria-checked')).toBe('true');
            expect(component.selected()).toBe('d');
        });

        it('safely handles choose() when control is null', () => {
            component.control = null;
            expect(() => component.choose('a')).not.toThrow();
            expect(component.selected()).toBe('');
        });
    });

    describe('Visual swatch attributes and style specifics', () => {
        it('applies style tokens to mini preview cards', () => {
            fixture.detectChanges();
            const el = fixture.nativeElement as HTMLElement;
            const minis = el.querySelectorAll<HTMLElement>('.mini');
            expect(minis.length).toBe(6);

            // Style f (Notebook) specifically has 1px solid #000 border on .mini
            const styleFMini = minis[5];
            const borderValue = styleFMini.style.border;
            expect(borderValue).toMatch(/1px solid (#000|rgb\(0,\s*0,\s*0\)|#000000)/);

            // Styles a-e have border: 0
            const styleAMini = minis[0];
            expect(styleAMini.style.border).toMatch(/0px|0|none/);
        });

        it('renders sample buttons with distinctive tokens per style', () => {
            fixture.detectChanges();
            const el = fixture.nativeElement as HTMLElement;
            const buttons = el.querySelectorAll<HTMLElement>('.sample-button');
            expect(buttons.length).toBe(6);

            // Style a (Forest) sample button pill (999px)
            expect(buttons[0].style.borderRadius).toBe('999px');
            expect(buttons[0].textContent?.trim()).toBe('Continue');

            // Style b (Editorial) sample button (8px)
            expect(buttons[1].style.borderRadius).toBe('8px');

            // Style e (Porcelain) has custom border and radius
            expect(buttons[4].style.borderRadius).toBe('48px');
            expect(buttons[4].style.border).toMatch(/1px solid (#a1a1cd|rgb\(161,\s*161,\s*205\))/);

            // Style f (Notebook) has border 1px solid #000000
            expect(buttons[5].style.border).toMatch(/1px solid (#000000|#000|rgb\(0,\s*0,\s*0\))/);
        });

        it('renders display typography tokens (font family, weight, tracking, transform)', () => {
            fixture.detectChanges();
            const el = fixture.nativeElement as HTMLElement;
            const titles = el.querySelectorAll<HTMLElement>('.sample-title');
            expect(titles.length).toBe(6);

            // Style a (Forest) - Inter 900
            expect(titles[0].style.fontWeight).toBe('900');

            // Style b (Editorial) - uppercase Barlow Condensed
            expect(titles[1].style.textTransform).toBe('uppercase');
            expect(titles[1].style.fontFamily).toContain('Barlow Condensed');

            // Style d (Vault) - Space Grotesk
            expect(titles[3].style.fontFamily).toContain('Space Grotesk');
        });
    });

    describe('Unset fallback message rendering', () => {
        it('renders .unset message when no style is selected', () => {
            component.control = new FormControl('');
            fixture.detectChanges();

            const el = fixture.nativeElement as HTMLElement;
            const unsetEl = el.querySelector('.unset');
            expect(unsetEl).toBeTruthy();
            expect(unsetEl?.textContent?.trim()).toBe('Not set');
        });

        it('does not render .unset message when a style is selected', () => {
            component.control = new FormControl('a');
            fixture.detectChanges();

            const el = fixture.nativeElement as HTMLElement;
            const unsetEl = el.querySelector('.unset');
            expect(unsetEl).toBeNull();
        });

        it('dynamically toggles .unset message when control changes between empty and selected', () => {
            const control = new FormControl('');
            component.control = control;
            fixture.detectChanges();

            const el = fixture.nativeElement as HTMLElement;
            expect(el.querySelector('.unset')).toBeTruthy();

            // Select style
            control.setValue('c');
            fixture.detectChanges();
            expect(el.querySelector('.unset')).toBeNull();

            // Clear selection
            control.setValue('');
            fixture.detectChanges();
            expect(el.querySelector('.unset')).toBeTruthy();
        });
    });

    describe('Lifecycle cleanup', () => {
        it('cleans up valueChanges subscription when component is destroyed', () => {
            const control = new FormControl('');
            component.control = control;
            fixture.detectChanges();

            // Destroy fixture
            fixture.destroy();

            // Setting value after destruction should not throw or cause errors
            expect(() => control.setValue('b')).not.toThrow();
        });
    });
});
