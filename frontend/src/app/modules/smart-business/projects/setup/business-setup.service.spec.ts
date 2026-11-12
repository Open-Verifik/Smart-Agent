import '@angular/compiler';
import { describe, expect, it, beforeEach } from 'vitest';
import { FormControl, FormGroup } from '@angular/forms';
import { BusinessSetupService } from './business-setup.service';
import { BUSINESS_VERIFY_STYLES, BUSINESS_WIZARD_STEPS } from './business-setup.types';

describe('BusinessSetupService', () => {
    let service: BusinessSetupService;

    beforeEach(() => {
        service = new BusinessSetupService({} as any);
    });

    it('defines exactly 6 steps in the KYB wizard', () => {
        expect(service.steps.length).toBe(6);
        expect(service.steps[0].titleKey).toBe('smartBusiness.setup.steps.basic_setup');
        expect(service.steps[1].titleKey).toBe('smartBusiness.setup.steps.company_intake');
        expect(service.steps[2].titleKey).toBe('smartBusiness.setup.steps.corporate_docs');
        expect(service.steps[3].titleKey).toBe('smartBusiness.setup.steps.representatives_policy');
        expect(service.steps[4].titleKey).toBe('smartBusiness.setup.steps.integrations');
        expect(service.steps[5].titleKey).toBe('smartBusiness.setup.steps.user_interface');
    });

    it('supports all 6 verify styles (Styles A through F)', () => {
        expect(service.styles.length).toBe(6);
        const styleIds = service.styles.map((s) => s.id);
        expect(styleIds).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);

        // Style A: Forest / Bosque
        const styleA = service.getStyleById('a');
        expect(styleA.nameEs).toBe('Bosque');
        expect(styleA.buttonBg).toBe('#9fe870');
        expect(styleA.buttonRadius).toBe('999px');

        // Style B: Editorial / Tinta
        const styleB = service.getStyleById('b');
        expect(styleB.nameEs).toBe('Tinta');
        expect(styleB.buttonBg).toBe('#000000');
        expect(styleB.buttonRadius).toBe('8px');

        // Style C: Paper / Nieve
        const styleC = service.getStyleById('c');
        expect(styleC.nameEs).toBe('Nieve');
        expect(styleC.pageBg).toBe('#ffffff');

        // Style D: Vault / Noche
        const styleD = service.getStyleById('d');
        expect(styleD.nameEs).toBe('Noche');
        expect(styleD.pageBg).toBe('#000814');
        expect(styleD.buttonBg).toBe('#1c6cff');

        // Style E: Porcelain / Lavanda
        const styleE = service.getStyleById('e');
        expect(styleE.nameEs).toBe('Lavanda');
        expect(styleE.buttonRadius).toBe('48px');

        // Style F: Notebook / Cuaderno
        const styleF = service.getStyleById('f');
        expect(styleF.nameEs).toBe('Cuaderno');
        expect(styleF.buttonBg).toBe('#adff02');
        expect(styleF.buttonBorder).toBe('1px solid #000000');
    });

    it('applies style presets to branding form controls accurately', () => {
        const brandingGroup = new FormGroup({
            backgroundColor: new FormControl(''),
            buttonColor: new FormControl(''),
            buttonTextColor: new FormControl(''),
            textColor: new FormControl(''),
            titleColor: new FormControl(''),
        });

        // Apply Style D (Noche / Vault)
        service.applyStylePreset('d', brandingGroup);
        expect(brandingGroup.get('backgroundColor')?.value).toBe('#000814');
        expect(brandingGroup.get('buttonColor')?.value).toBe('#1c6cff');
        expect(brandingGroup.get('buttonTextColor')?.value).toBe('#ffffff');

        // Apply Style F (Cuaderno / Notebook)
        service.applyStylePreset('f', brandingGroup);
        expect(brandingGroup.get('backgroundColor')?.value).toBe('#f2f2f2');
        expect(brandingGroup.get('buttonColor')?.value).toBe('#adff02');
        expect(brandingGroup.get('buttonTextColor')?.value).toBe('#000000');
    });

    it('generates a default project configured strictly for business KYB', () => {
        const proj = service.defaultProject;
        expect(proj.target).toBe('business');
        expect(proj.status).toBe('draft');
        expect(proj.projectFlows?.length).toBe(1);

        const flow = proj.projectFlows![0];
        expect(flow.target).toBe('business');
        expect(flow.type).toBe('onboarding');
        expect(flow.onboardingSettings?.verifyStyle).toBe('a');
        expect(flow.onboardingSettings?.enrollmentClient).toBe('v2');

        // Corporate Docs defaults
        expect(flow.corporateDocs?.officialRegistryChecks.dian).toBe(true);
        expect(flow.corporateDocs?.officialRegistryChecks.rues).toBe(true);
        expect(flow.corporateDocs?.requiredDocuments.length).toBeGreaterThanOrEqual(2);

        // Representatives Policy defaults
        expect(flow.representativesPolicy?.uboOwnershipThreshold).toBe(25);
        expect(flow.representativesPolicy?.requireLiveness).toBe(true);
        expect(flow.representativesPolicy?.requireDocumentScan).toBe(true);
    });
});
