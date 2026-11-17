// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { ɵresolveComponentResources, Injectable } from '@angular/core';
import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { TranslocoLoader, provideTransloco } from '@jsverse/transloco';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { of } from 'rxjs';

import { AccessLoginMethodsStepComponent } from './access-login-methods-step.component';
import template from './access-login-methods-step.component.html?raw';

@Injectable()
class MockTranslocoLoader implements TranslocoLoader {
    getTranslation() {
        return of({});
    }
}

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

describe('AccessLoginMethodsStepComponent - Legacy OpenCV Deprecation', () => {
    let component: AccessLoginMethodsStepComponent;
    let fixture: ComponentFixture<AccessLoginMethodsStepComponent>;
    let rootForm: FormGroup;
    let loginSettings: FormGroup;

    const createForm = (faceLiveness = true, livenessMinScore = 0.75) => {
        loginSettings = new FormGroup({
            phone: new FormControl(false),
            phoneGateway: new FormControl('none'),
            email: new FormControl(true),
            emailGateway: new FormControl('mailgun'),
            faceLiveness: new FormControl(faceLiveness),
            livenessMinScore: new FormControl(livenessMinScore),
            showFaceLivenessRecommendation: new FormControl(true),
            allowPasskeys: new FormControl(false),
        });

        return new FormGroup({
            projectFlow: new FormGroup({
                loginSettings,
            }),
        });
    };

    beforeEach(async () => {
        TestBed.resetTestingModule();
        rootForm = createForm();

        await TestBed.configureTestingModule({
            imports: [
                AccessLoginMethodsStepComponent,
                ReactiveFormsModule,
                NoopAnimationsModule,
            ],
            providers: [
                provideTransloco({
                    config: {
                        availableLangs: ['en', 'es'],
                        defaultLang: 'en',
                    },
                    loader: MockTranslocoLoader,
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AccessLoginMethodsStepComponent);
        component = fixture.componentInstance;
        component.form = rootForm;
        fixture.detectChanges();
    });

    it('should create the component successfully', () => {
        expect(component).toBeTruthy();
    });

    it('does NOT render legacy OpenCV searchMode select or searchMinScore slider', () => {
        const compiled = fixture.nativeElement as HTMLElement;

        // Verify searchMode select is completely removed from DOM
        const searchModeSelect = compiled.querySelector('[formControlName="searchMode"]');
        expect(searchModeSelect).toBeNull();

        // Verify searchMinScore slider is completely removed from DOM
        const searchMinScoreSlider = compiled.querySelector('[formControlName="searchMinScore"]');
        expect(searchMinScoreSlider).toBeNull();

        // Verify no searchPct text appears in the template
        expect(compiled.textContent).not.toContain('search_score');
        expect(compiled.textContent).not.toContain('search_mode');
    });

    it('renders HumanAuthn livenessMinScore slider when faceLiveness is enabled', () => {
        const compiled = fixture.nativeElement as HTMLElement;

        const livenessSlider = compiled.querySelector('[formControlName="livenessMinScore"]');
        expect(livenessSlider).not.toBeNull();
        expect(component.livenessPct()).toBe(75);
    });

    it('displays disabled-stage overlay when faceLiveness is disabled', () => {
        loginSettings.get('faceLiveness')?.setValue(false);
        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement;
        const disabledStage = compiled.querySelector('.disabled-stage');
        expect(disabledStage).not.toBeNull();

        // livenessMinScore slider should not be rendered while disabled
        const livenessSlider = compiled.querySelector('[formControlName="livenessMinScore"]');
        expect(livenessSlider).toBeNull();
    });
});
