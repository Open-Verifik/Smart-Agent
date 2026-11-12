import '@angular/compiler';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { FormControl, FormGroup } from '@angular/forms';
import { BusinessPreviewComponent } from './business-preview.component';

describe('BusinessPreviewComponent', () => {
    let component: BusinessPreviewComponent;
    let markForCheckSpy: any;

    const createForm = (verifyStyle = 'a') =>
        new FormGroup({
            name: new FormControl('Andina Logistics S.A.S.'),
            branding: new FormGroup({
                backgroundColor: new FormControl('#e8ebe6'),
                buttonColor: new FormControl('#9fe870'),
                buttonTextColor: new FormControl('#163300'),
                textColor: new FormControl('#0e0f0c'),
                titleColor: new FormControl('#0e0f0c'),
                logo: new FormControl(''),
            }),
            projectFlow: new FormGroup({
                onboardingSettings: new FormGroup({
                    verifyStyle: new FormControl(verifyStyle),
                    enrollmentClient: new FormControl('v2'),
                    flowOrder: new FormControl('consent_first'),
                }),
            }),
        });

    beforeEach(() => {
        markForCheckSpy = vi.fn();
        const cdrMock = { markForCheck: markForCheckSpy } as any;
        component = new BusinessPreviewComponent(cdrMock);
        component.form = createForm('a');
        component.ngOnInit();
    });

    it('should create the preview component', () => {
        expect(component).toBeTruthy();
    });

    it('should default styleId to a (Forest)', () => {
        expect(component.styleId).toBe('a');
        expect(component.activeStyle.id).toBe('a');
        expect(component.activeStyle.nameEn).toBe('Forest');
        expect(component.effectiveButtonBg).toBe('#9fe870');
    });

    it('should reactively switch to Style C (Paper) when verifyStyle changes', () => {
        const verifyStyleControl = component.form.get('projectFlow.onboardingSettings.verifyStyle');
        verifyStyleControl?.setValue('c');

        expect(component.styleId).toBe('c');
        expect(component.activeStyle.id).toBe('c');
        expect(component.activeStyle.nameEn).toBe('Paper');
        expect(component.activeStyle.fontFamily).toContain('Outfit');
        expect(component.effectiveButtonBg).toBe('#0d111b');
        expect(component.effectivePageBg).toBe('#ffffff');
        expect(markForCheckSpy).toHaveBeenCalled();
    });

    it('should support Style D (Vault) dark mode styling tokens', () => {
        component.form.get('projectFlow.onboardingSettings.verifyStyle')?.setValue('d');

        expect(component.styleId).toBe('d');
        expect(component.activeStyle.isDark).toBe(true);
        expect(component.activeStyle.pageBg).toBe('#000814');
        expect(component.activeStyle.cardBg).toBe('#010d1e');
        expect(component.activeStyle.buttonBg).toBe('#1c6cff');
        expect(component.activeStyle.inputBg).toBe('#001533');
        expect(component.effectiveButtonBg).toBe('#1c6cff');
        expect(component.effectivePageBg).toBe('#000814');
    });

    it('should support Style F (Notebook) neo-brutalist styling tokens', () => {
        component.form.get('projectFlow.onboardingSettings.verifyStyle')?.setValue('f');

        expect(component.styleId).toBe('f');
        expect(component.activeStyle.nameEn).toBe('Notebook');
        expect(component.activeStyle.cardShadow).toBe('8px 8px 0 0 #000100');
        expect(component.activeStyle.buttonBg).toBe('#adff02');
        expect(component.activeStyle.buttonBorder).toBe('1px solid #000000');
        expect(component.effectiveButtonBg).toBe('#adff02');
        expect(component.effectivePageBg).toBe('#f2f2f2');
    });

    it('should prioritize branding custom color overrides over style defaults', () => {
        component.form.get('branding.buttonColor')?.setValue('#ff5500');
        expect(component.effectiveButtonBg).toBe('#ff5500');

        component.form.get('branding.backgroundColor')?.setValue('#112233');
        expect(component.effectivePageBg).toBe('#112233');

        // Switching style preset preserves the custom override
        component.form.get('projectFlow.onboardingSettings.verifyStyle')?.setValue('d');
        expect(component.effectiveButtonBg).toBe('#ff5500');
    });

    it('should change active screen tabs and trigger markForCheck', () => {
        expect(component.activeScreen).toBe('company');
        component.setScreen('documents');
        expect(component.activeScreen).toBe('documents');
        component.setScreen('reps');
        expect(component.activeScreen).toBe('reps');
        component.setScreen('review');
        expect(component.activeScreen).toBe('review');
        expect(markForCheckSpy).toHaveBeenCalled();
    });

    it('should synchronize active screen when activeStepIndex input changes', () => {
        component.ngOnChanges({
            activeStepIndex: {
                previousValue: 0,
                currentValue: 2,
                firstChange: false,
                isFirstChange: () => false,
            },
        });
        expect(component.activeScreen).toBe('documents');

        component.ngOnChanges({
            activeStepIndex: {
                previousValue: 2,
                currentValue: 3,
                firstChange: false,
                isFirstChange: () => false,
            },
        });
        expect(component.activeScreen).toBe('reps');
    });

    it('should respect explicit styleId input when provided', () => {
        component.styleId = 'e';
        expect(component.styleId).toBe('e');
        expect(component.activeStyle.nameEn).toBe('Porcelain');
        expect(component.activeStyle.headlineAlign).toBe('center');
        expect(component.effectiveButtonBg).toBe('#ffffff');
        expect(component.effectivePageBg).toBe('#f6f6fa');
    });
});
