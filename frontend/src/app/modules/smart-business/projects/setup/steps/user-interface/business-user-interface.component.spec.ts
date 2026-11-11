import '@angular/compiler';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { FormControl, FormGroup } from '@angular/forms';
import { BusinessUserInterfaceComponent } from './business-user-interface.component';
import { BusinessSetupService } from '../../business-setup.service';

describe('BusinessUserInterfaceComponent', () => {
    let component: BusinessUserInterfaceComponent;
    let setupService: BusinessSetupService;
    let translocoMock: any;

    const createForm = () =>
        new FormGroup({
            branding: new FormGroup({
                backgroundColor: new FormControl('#FFFFFF'),
                buttonColor: new FormControl('#059669'),
                buttonTextColor: new FormControl('#FFFFFF'),
                textColor: new FormControl('#0F172A'),
                logo: new FormControl(''),
            }),
            projectFlow: new FormGroup({
                onboardingSettings: new FormGroup({
                    verifyStyle: new FormControl('a'),
                    enrollmentClient: new FormControl('v2'),
                    flowOrder: new FormControl('consent_first'),
                }),
            }),
        });

    beforeEach(() => {
        setupService = new BusinessSetupService();
        translocoMock = { getActiveLang: vi.fn().mockReturnValue('es') };
        component = new BusinessUserInterfaceComponent(setupService, translocoMock);
        component.form = createForm();
    });

    it('should create the component instance', () => {
        expect(component).toBeTruthy();
    });

    it('should expose all 6 style presets (a to f)', () => {
        expect(component.styles.length).toBe(6);
        const styleIds = component.styles.map((s) => s.id);
        expect(styleIds).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });

    it('should default selectedStyleId to a', () => {
        expect(component.selectedStyleId).toBe('a');
    });

    it('should update verifyStyle and apply branding palette when selectStyle is called', () => {
        const applyPresetSpy = vi.spyOn(setupService, 'applyStylePreset');

        component.selectStyle('d');

        expect(component.selectedStyleId).toBe('d');
        expect(component.onboardingSettingsGroup.get('verifyStyle')?.value).toBe('d');
        expect(component.onboardingSettingsGroup.get('enrollmentClient')?.value).toBe('v2');
        expect(applyPresetSpy).toHaveBeenCalledWith('d', component.brandingGroup);
    });

    it('should return localized name and description for a style', () => {
        const style = component.styles[0]; // Bosque / Forest
        expect(component.styleName(style)).toBe('Bosque');
        expect(component.styleDesc(style)).toContain('Diseño moderno');

        translocoMock.getActiveLang.mockReturnValue('en');
        expect(component.styleName(style)).toBe('Forest');
        expect(component.styleDesc(style)).toContain('Modern pill design');
    });

    it('should sync style preset on ngOnInit if initial style is C and button is default green', () => {
        const applyPresetSpy = vi.spyOn(setupService, 'applyStylePreset');
        component.form.get('projectFlow.onboardingSettings.verifyStyle')?.setValue('c');
        component.form.get('branding.buttonColor')?.setValue('#9fe870');

        component.ngOnInit();

        expect(applyPresetSpy).toHaveBeenCalledWith('c', component.brandingGroup);
    });

    it('should not overwrite custom branding button color on ngOnInit if style is C', () => {
        const applyPresetSpy = vi.spyOn(setupService, 'applyStylePreset');
        component.form.get('projectFlow.onboardingSettings.verifyStyle')?.setValue('c');
        component.form.get('branding.buttonColor')?.setValue('#ff5500'); // Custom color

        component.ngOnInit();

        expect(applyPresetSpy).not.toHaveBeenCalled();
    });
});
