import '@angular/compiler';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { of, throwError } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { BusinessSetupHostComponent } from './business-setup-host.component';
import type { BusinessProject } from '../../smart-business.types';

describe('BusinessSetupHostComponent', () => {
    let component: BusinessSetupHostComponent;
    let routeMock: any;
    let routerMock: any;
    let setupServiceMock: any;
    let cdrMock: any;
    let snackMock: any;
    let translocoMock: any;

    const mockProjectC: BusinessProject = {
        _id: 'proj_paper_123',
        name: 'Paper Logistics SAS',
        target: 'business',
        status: 'draft',
        allowedCountries: ['CO', 'MX'],
        defaultLanguage: 'es',
        contactEmail: 'contact@paper.co',
        privacyUrl: 'https://paper.co/privacy',
        termsAndConditionsUrl: 'https://paper.co/terms',
        dataProtection: {
            name: 'Legal Rep',
            email: 'legal@paper.co',
            address: 'Calle 100 # 15-20',
            city: 'Bogotá',
            country: 'CO',
        },
        branding: {
            backgroundColor: '#e8ebe6',
            buttonColor: '#9fe870', // Default Style A color on saved project
            buttonTextColor: '#163300',
            textColor: '#0e0f0c',
            titleColor: '#0e0f0c',
            logo: '',
            image: '',
            imageBackgroundColor: '#ffffff',
        },
        projectFlows: [
            {
                _id: 'flow_c_1',
                target: 'business',
                type: 'onboarding',
                status: 'draft',
                version: 3,
                onboardingSettings: {
                    enrollmentClient: 'v2',
                    verifyStyle: 'c', // Paper style
                    flowOrder: 'consent_first',
                    requiresSignature: false,
                },
            },
        ],
    };

    beforeEach(() => {
        routeMock = {
            params: of({ projectId: 'new', step: '0' }),
        };
        routerMock = {
            navigate: vi.fn(),
        };
        setupServiceMock = {
            defaultProject: {
                _id: '',
                name: '',
                target: 'business',
                status: 'draft',
                allowedCountries: ['CO', 'MX', 'US', 'CL', 'PE'],
                defaultLanguage: 'es',
                contactEmail: '',
                privacyUrl: '',
                termsAndConditionsUrl: '',
                dataProtection: {
                    name: '',
                    email: '',
                    address: '',
                    address2: '',
                    city: '',
                    country: 'CO',
                    postalCode: '',
                },
                branding: {
                    backgroundColor: '#e8ebe6',
                    buttonColor: '#9fe870',
                    buttonTextColor: '#163300',
                    textColor: '#0e0f0c',
                    titleColor: '#0e0f0c',
                    image: '',
                    imageBackgroundColor: '#ffffff',
                    logo: '',
                },
            },
            defaultProjectFlow: {
                target: 'business',
                type: 'onboarding',
                status: 'draft',
                version: 3,
                onboardingSettings: {
                    enrollmentClient: 'v2',
                    verifyStyle: 'a',
                    flowOrder: 'consent_first',
                    requiresSignature: false,
                },
            },
            defaultBranding: {
                backgroundColor: '#e8ebe6',
                buttonColor: '#9fe870',
                buttonTextColor: '#163300',
                textColor: '#0e0f0c',
                titleColor: '#0e0f0c',
                image: '',
                imageBackgroundColor: '#ffffff',
                logo: '',
            },
            requestProject: vi.fn().mockReturnValue(of(mockProjectC)),
            saveProject: vi.fn().mockReturnValue(of({ data: { _id: 'proj_paper_123' } })),
            applyStylePreset: vi.fn((styleId, brandingGroup) => {
                if (styleId === 'c' && brandingGroup) {
                    brandingGroup.patchValue({
                        backgroundColor: '#ffffff',
                        buttonColor: '#0d111b',
                        buttonTextColor: '#ffffff',
                        textColor: '#1e1e1e',
                        titleColor: '#1e1e1e',
                    });
                }
            }),
        };
        cdrMock = { markForCheck: vi.fn() };
        snackMock = { open: vi.fn() };
        translocoMock = { translate: vi.fn((k) => k) };

        component = new BusinessSetupHostComponent(
            routeMock,
            routerMock,
            new FormBuilder(),
            setupServiceMock,
            cdrMock,
            snackMock,
            translocoMock
        );
    });

    it('should create the setup host component and initialize default form', () => {
        component.ngOnInit();
        expect(component).toBeTruthy();
        expect(component.form).toBeDefined();
        expect(component.form.get('target')?.value).toBe('business');
        expect(component.form.get('projectFlow.target')?.value).toBe('business');
        expect(component.form.get('projectFlow.onboardingSettings.verifyStyle')?.value).toBe('a');
        expect(component.form.get('projectFlow.onboardingSettings.enrollmentClient')?.value).toBe('v2');
        expect(component.stepIndex).toBe(0);
        expect(component.maxVisitedStep).toBe(0);
    });

    it('should navigate through steps with nextStep and previousStep', () => {
        component.ngOnInit();

        component.nextStep();
        expect(routerMock.navigate).toHaveBeenCalledWith(['/smart-business/projects', 'new', 'setup', 1]);

        component.stepIndex = 1;
        component.previousStep();
        expect(routerMock.navigate).toHaveBeenCalledWith(['/smart-business/projects', 'new', 'setup', 0]);

        component.stepIndex = 0;
        component.previousStep();
        expect(routerMock.navigate).toHaveBeenCalledWith(['/smart-business/projects']);
    });

    it('should save project when on final step 5 and nextStep is called', () => {
        component.ngOnInit();
        component.stepIndex = 5;

        component.nextStep();
        expect(setupServiceMock.saveProject).toHaveBeenCalled();
        expect(snackMock.open).toHaveBeenCalledWith('smartBusiness.setup.savedSuccess', 'OK', { duration: 3000 });
        expect(routerMock.navigate).toHaveBeenCalledWith(['/smart-business/projects', 'proj_paper_123']);
    });

    it('should load project and automatically sync Style C palette if branding still has Style A colors', () => {
        routeMock.params = of({ projectId: 'proj_paper_123', step: '5' });
        component.ngOnInit();

        expect(setupServiceMock.requestProject).toHaveBeenCalledWith('proj_paper_123');
        expect(setupServiceMock.applyStylePreset).toHaveBeenCalledWith('c', expect.anything());
        expect(component.form.get('branding.buttonColor')?.value).toBe('#0d111b');
        expect(component.form.get('branding.backgroundColor')?.value).toBe('#ffffff');
        expect(component.stepIndex).toBe(5);
        expect(component.maxVisitedStep).toBe(5);
    });

    it('should fill demo data with fillDevSample', () => {
        component.ngOnInit();
        component.fillDevSample();

        expect(component.form.get('name')?.value).toBe('Verifik B2B Corporate Onboarding 2026');
        expect(component.form.get('contactEmail')?.value).toBe('compliance@verifik.co');
        expect(snackMock.open).toHaveBeenCalledWith('smartBusiness.setup.demoLoaded', 'OK', { duration: 2500 });
    });

    it('should handle save error gracefully with sandbox message', () => {
        setupServiceMock.saveProject.mockReturnValue(throwError(() => new Error('Save failed')));
        component.ngOnInit();
        component.saveProject();

        expect(component.saving()).toBe(false);
        expect(snackMock.open).toHaveBeenCalledWith('smartBusiness.setup.savedSandbox', 'OK', { duration: 3000 });
        expect(routerMock.navigate).toHaveBeenCalledWith(['/smart-business/projects']);
    });
});
