// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { ChangeDetectionStrategy, ɵresolveComponentResources } from '@angular/core';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Injectable } from '@angular/core';
import { TranslocoLoader, TranslocoService, provideTransloco } from '@jsverse/transloco';
import { of } from 'rxjs';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import * as sass from 'sass';
import { VerifyStylePickerComponent } from './verify-style-picker.component';
import template from './verify-style-picker.component.html?raw';

// Load real translation files
const i18nDir = path.resolve(__dirname, '../../../../../public/i18n');
const enJson = JSON.parse(fs.readFileSync(path.join(i18nDir, 'en.json'), 'utf8'));
const esJson = JSON.parse(fs.readFileSync(path.join(i18nDir, 'es.json'), 'utf8'));
const frJson = JSON.parse(fs.readFileSync(path.join(i18nDir, 'fr.json'), 'utf8'));

@Injectable()
class DynamicTranslocoLoader implements TranslocoLoader {
    getTranslation(lang: string) {
        if (lang === 'es') return of(esJson);
        if (lang === 'fr') return of(frJson);
        return of(enJson);
    }
}

beforeAll(async () => {
    try {
        getTestBed().initTestEnvironment(
            BrowserDynamicTestingModule,
            platformBrowserDynamicTesting()
        );
    } catch {
        // Already initialized
    }

    await ɵresolveComponentResources(async (url) => {
        if (url.includes('.html')) return template;
        if (url.includes('.scss')) return '';
        return '';
    });
});

describe('Milestone M2 Boundary & Layout Stress Suite', () => {
    let component: VerifyStylePickerComponent;
    let fixture: ComponentFixture<VerifyStylePickerComponent>;
    let translocoService: TranslocoService;

    beforeEach(async () => {
        TestBed.resetTestingModule();
        const existingLink = document.getElementById('verify-style-picker-fonts');
        if (existingLink) existingLink.remove();

        await TestBed.configureTestingModule({
            imports: [VerifyStylePickerComponent],
            providers: [
                provideTransloco({
                    config: {
                        availableLangs: ['en', 'es', 'fr'],
                        defaultLang: 'en',
                    },
                    loader: DynamicTranslocoLoader,
                }),
            ],
        }).compileComponents();

        translocoService = TestBed.inject(TranslocoService);
        translocoService.setActiveLang('en');
        fixture = TestBed.createComponent(VerifyStylePickerComponent);
        component = fixture.componentInstance;
    });

    afterEach(() => {
        fixture?.destroy();
        TestBed.resetTestingModule();
        const existingLink = document.getElementById('verify-style-picker-fonts');
        if (existingLink) existingLink.remove();
    });

    describe('1. SCSS Compilation & Responsive Grid Collapse Rules', () => {
        const scssPath = path.resolve(__dirname, 'verify-style-picker.component.scss');
        const compiled = sass.compile(scssPath).css;

        it('compiles without error and contains mobile-first single column base layout', () => {
            expect(compiled).toContain('.grid');
            expect(compiled).toMatch(/\.grid\s*\{[^}]*grid-template-columns:\s*1fr/);
        });

        it('contains 520px media query with 2 minmax(0, 1fr) columns for small tablet / large phone screens', () => {
            expect(compiled).toMatch(/@media\s*\(\s*min-width:\s*520px\s*\)\s*\{[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
        });

        it('contains 720px media query with 3 minmax(0, 1fr) columns for desktop / wide screens', () => {
            expect(compiled).toMatch(/@media\s*\(\s*min-width:\s*720px\s*\)\s*\{[\s\S]*?grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
        });

        it('enforces min-width: 0 on .choice to prevent grid child blow-out from long contents', () => {
            expect(compiled).toMatch(/\.choice\s*\{[\s\S]*?min-width:\s*0/);
        });

        it('enforces 16px radius and 24px padding on .picker container', () => {
            expect(compiled).toMatch(/\.picker\s*\{[\s\S]*?border-radius:\s*16px/);
            expect(compiled).toMatch(/\.picker\s*\{[\s\S]*?padding:\s*24px/);
        });

        it('does not contain any rainbow candy-stripe header gradients', () => {
            expect(compiled).not.toContain('repeating-linear-gradient');
            expect(compiled).not.toContain('linear-gradient(90deg');
        });

        it('provides tactile micro-states: hover, active scale(0.98), focus-visible ring', () => {
            expect(compiled).toMatch(/\.choice:active\s*\{[\s\S]*?transform:\s*scale\(0\.98\)/);
            expect(compiled).toMatch(/\.choice:focus-visible\s*\{[\s\S]*?outline:\s*2px solid/);
            expect(compiled).toMatch(/\.choice:hover:not\(\.on\)/);
        });

        it('provides dark mode high-contrast text and border tokens', () => {
            expect(compiled).toContain(':host-context(.dark) .picker');
            expect(compiled).toContain(':host-context(.dark) h2');
            expect(compiled).toContain(':host-context(.dark) .caption');
            expect(compiled).toContain(':host-context(.dark) .swatch');
            expect(compiled).toContain(':host-context(.dark) .letter');
        });
    });

    describe('2. Sample Button Text Wrapping & Ellipsis Protection', () => {
        const scssPath = path.resolve(__dirname, 'verify-style-picker.component.scss');
        const compiled = sass.compile(scssPath).css;

        it('applies white-space: nowrap, max-width: 100%, overflow: hidden, and text-overflow: ellipsis to .sample-button', () => {
            expect(compiled).toMatch(/\.sample-button\s*\{[\s\S]*?white-space:\s*nowrap/);
            expect(compiled).toMatch(/\.sample-button\s*\{[\s\S]*?max-width:\s*100%/);
            expect(compiled).toMatch(/\.sample-button\s*\{[\s\S]*?overflow:\s*hidden/);
            expect(compiled).toMatch(/\.sample-button\s*\{[\s\S]*?text-overflow:\s*ellipsis/);
            expect(compiled).toMatch(/\.sample-button\s*\{[\s\S]*?box-sizing:\s*border-box/);
        });

        it('renders French sample button text ("Continuer") without breaking template bindings', () => {
            translocoService.setActiveLang('fr');
            fixture.detectChanges();

            const el = fixture.nativeElement as HTMLElement;
            const buttons = el.querySelectorAll<HTMLElement>('.sample-button');
            expect(buttons.length).toBe(6);
            buttons.forEach((btn) => {
                expect(btn.textContent?.trim()).toBe('Continuer');
            });
        });

        it('renders Spanish sample button text ("Continuar") cleanly across all 6 style cards', () => {
            translocoService.setActiveLang('es');
            fixture.detectChanges();

            const el = fixture.nativeElement as HTMLElement;
            const buttons = el.querySelectorAll<HTMLElement>('.sample-button');
            expect(buttons.length).toBe(6);
            buttons.forEach((btn) => {
                expect(btn.textContent?.trim()).toBe('Continuar');
            });
        });

        it('renders English sample button text ("Continue") cleanly across all 6 style cards', () => {
            translocoService.setActiveLang('en');
            fixture.detectChanges();

            const el = fixture.nativeElement as HTMLElement;
            const buttons = el.querySelectorAll<HTMLElement>('.sample-button');
            expect(buttons.length).toBe(6);
            buttons.forEach((btn) => {
                expect(btn.textContent?.trim()).toBe('Continue');
            });
        });
    });

    describe('3. Radio Group Accessibility & State Machine', () => {
        it('verifies radiogroup aria-label in English', () => {
            translocoService.setActiveLang('en');
            fixture.detectChanges();
            const el = fixture.nativeElement as HTMLElement;
            const radiogroup = el.querySelector('.grid[role="radiogroup"]');
            expect(radiogroup).toBeTruthy();
            expect(radiogroup?.getAttribute('aria-label')).toBe('Verification look');
        });

        it('verifies radiogroup aria-label in Spanish', () => {
            translocoService.setActiveLang('es');
            fixture.detectChanges();
            const el = fixture.nativeElement as HTMLElement;
            const radiogroup = el.querySelector('.grid[role="radiogroup"]');
            expect(radiogroup).toBeTruthy();
            expect(radiogroup?.getAttribute('aria-label')).toBe('Apariencia de la verificación');
        });

        it('verifies radiogroup aria-label in French', () => {
            translocoService.setActiveLang('fr');
            fixture.detectChanges();
            const el = fixture.nativeElement as HTMLElement;
            const radiogroup = el.querySelector('.grid[role="radiogroup"]');
            expect(radiogroup).toBeTruthy();
            expect(radiogroup?.getAttribute('aria-label')).toBe('Apparence de la vérification');
        });

        it('verifies all 6 choices have role="radio" and type="button"', () => {
            translocoService.setActiveLang('en');
            fixture.detectChanges();
            const el = fixture.nativeElement as HTMLElement;
            const radios = el.querySelectorAll('button.choice');
            expect(radios.length).toBe(6);
            radios.forEach((r) => {
                expect(r.getAttribute('role')).toBe('radio');
                expect(r.getAttribute('type')).toBe('button');
            });
        });

        it('maintains strict aria-checked mutually exclusive state across all 6 styles', () => {
            const control = new FormControl('');
            component.control = control;
            fixture.detectChanges();

            const el = fixture.nativeElement as HTMLElement;
            const radios = el.querySelectorAll<HTMLButtonElement>('button.choice');
            const styleIds = ['a', 'b', 'c', 'd', 'e', 'f'];

            // Initial: all unchecked
            radios.forEach((r) => expect(r.getAttribute('aria-checked')).toBe('false'));

            // Cycle through every single option: only the active one is checked
            styleIds.forEach((id, index) => {
                radios[index].click();
                fixture.detectChanges();

                expect(control.value).toBe(id);
                radios.forEach((r, rIdx) => {
                    const expectedChecked = rIdx === index ? 'true' : 'false';
                    expect(r.getAttribute('aria-checked')).toBe(expectedChecked);
                    expect(r.classList.contains('on')).toBe(rIdx === index);
                });
            });
        });

        it('supports toggle / deselect: clicking the active style returns aria-checked to false and control to empty', () => {
            const control = new FormControl('d');
            component.control = control;
            fixture.detectChanges();

            const el = fixture.nativeElement as HTMLElement;
            const radios = el.querySelectorAll<HTMLButtonElement>('button.choice');

            // Style 'd' is index 3
            expect(radios[3].getAttribute('aria-checked')).toBe('true');
            expect(radios[3].classList.contains('on')).toBe(true);

            // Click active style 'd' to toggle off
            radios[3].click();
            fixture.detectChanges();

            expect(control.value).toBe('');
            radios.forEach((r) => {
                expect(r.getAttribute('aria-checked')).toBe('false');
                expect(r.classList.contains('on')).toBe(false);
            });
        });

        it('handles rapid sequential clicking across multiple styles without desync', () => {
            const control = new FormControl('');
            component.control = control;
            fixture.detectChanges();

            const el = fixture.nativeElement as HTMLElement;
            const radios = el.querySelectorAll<HTMLButtonElement>('button.choice');

            // Rapid clicks: a -> b -> b (toggle off) -> c -> d -> d (toggle off) -> f
            radios[0].click(); // a
            expect(control.value).toBe('a');
            radios[1].click(); // b
            expect(control.value).toBe('b');
            radios[1].click(); // b toggle off
            expect(control.value).toBe('');
            radios[2].click(); // c
            expect(control.value).toBe('c');
            radios[3].click(); // d
            expect(control.value).toBe('d');
            radios[3].click(); // d toggle off
            expect(control.value).toBe('');
            radios[5].click(); // f
            expect(control.value).toBe('f');

            fixture.detectChanges();
            expect(radios[5].getAttribute('aria-checked')).toBe('true');
            expect(radios[5].classList.contains('on')).toBe(true);
        });

        it('handles external rapid control updates gracefully', () => {
            const control = new FormControl('');
            component.control = control;
            fixture.detectChanges();

            const values = ['a', 'b', '', 'f', 'c', null, undefined, 'e'];
            values.forEach((val) => {
                control.setValue(val as unknown as string);
                fixture.detectChanges();
                const expectedSelected = String(val || '');
                expect(component.selected()).toBe(expectedSelected);
            });
        });
    });
});
