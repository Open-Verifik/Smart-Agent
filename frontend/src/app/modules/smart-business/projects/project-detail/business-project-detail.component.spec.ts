import '@angular/compiler';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { of, throwError } from 'rxjs';
import { mapTypes } from 'app/core/data-retention/retention.util';
import { BusinessProjectDetailComponent } from './business-project-detail.component';
import type { BusinessProject } from '../../smart-business.types';

describe('BusinessProjectDetailComponent', () => {
    let component: BusinessProjectDetailComponent;
    let routeMock: any;
    let routerMock: any;
    let businessServiceMock: any;
    let clipboardMock: any;
    let snackBarMock: any;
    let translocoMock: any;

    const mockProject: BusinessProject = {
        _id: 'biz_01',
        name: 'Alpha Corp',
        contactEmail: 'contact@alpha.co',
        defaultLanguage: 'en',
        allowedCountries: ['CO', 'MX'],
        status: 'active',
        currentStep: 6,
        lastStep: 6,
        branding: {
            titleColor: '#111827',
            textColor: '#4b5563',
            buttonColor: '#2563eb',
            buttonTextColor: '#ffffff',
            backgroundColor: '#ffffff',
            imageBackgroundColor: '#f3f4f6',
        },
        projectFlows: [
            {
                _id: 'flow_01',
                name: 'KYB Full Flow',
                status: 'active',
                onboardingSettings: {
                    verifyStyle: 'c',
                },
                companyIntake: {
                    countryCode: 'CO',
                    collectCommercialName: true,
                    collectAddress: true,
                    collectPhone: true,
                    phoneGateway: 'twilio',
                    collectEmail: true,
                    emailGateway: 'sendgrid',
                    allowedEntityTypes: ['SAS', 'SA'],
                },
                corporateDocs: {
                    attemptLimit: 4,
                    screening: true,
                    officialRegistryChecks: {
                        dian: true,
                        rues: true,
                        sat: false,
                        sanctionsList: true,
                    },
                    requiredDocuments: [
                        { docType: 'articles_of_incorporation', required: true },
                    ],
                },
                representativesPolicy: {
                    minRepresentatives: 1,
                    maxRepresentatives: 3,
                    uboOwnershipThreshold: 20,
                    requireLiveness: true,
                    requireDocumentScan: true,
                    notificationChannel: 'whatsapp',
                    livenessMinScore: 0.85,
                    compareMinScore: 0.88,
                },
                integrations: {
                    redirectUrl: 'https://alpha.co/done',
                    webhook: 'https://api.alpha.co/kyb-hook',
                    source: 'API',
                    strategy: 'sync',
                },
            },
        ],
    };

    beforeEach(() => {
        routeMock = {
            snapshot: {
                paramMap: {
                    get: vi.fn((key: string) => (key === 'projectId' ? 'biz_01' : null)),
                },
            },
            queryParamMap: of({
                get: vi.fn((key: string) => (key === 'section' ? null : null)),
            }),
        };
        routerMock = {
            navigate: vi.fn().mockResolvedValue(true),
        };
        businessServiceMock = {
            getProject: vi.fn().mockReturnValue(of(mockProject)),
            updateProject: vi.fn().mockReturnValue(of({ data: mockProject })),
        };
        clipboardMock = {
            copy: vi.fn().mockReturnValue(true),
        };
        snackBarMock = {
            open: vi.fn(),
        };
        translocoMock = {
            translate: vi.fn((key: string) => {
                if (key === 'smartBusiness.styles.c_name') return 'Nordic Slate';
                return key;
            }),
            getActiveLang: vi.fn().mockReturnValue('en'),
        };

        component = new BusinessProjectDetailComponent(
            routeMock,
            routerMock,
            businessServiceMock,
            clipboardMock,
            snackBarMock,
            translocoMock
        );
    });

    it('should create and load project on init', () => {
        expect(component).toBeTruthy();
        component.ngOnInit();
        expect(businessServiceMock.getProject).toHaveBeenCalledWith('biz_01');
        expect(component.project()?._id).toBe('biz_01');
        expect(component.loading()).toBe(false);
        expect(component.errorKey()).toBeNull();
    });

    it('should return to list if projectId is empty', () => {
        routeMock.snapshot.paramMap.get.mockReturnValue('');
        component.ngOnInit();
        expect(routerMock.navigate).toHaveBeenCalledWith(['/smart-business/projects']);
    });

    it('should set errorKey if project is not found', () => {
        businessServiceMock.getProject.mockReturnValue(of(null));
        component.ngOnInit();
        expect(component.project()).toBeNull();
        expect(component.loading()).toBe(false);
        expect(component.errorKey()).toBe('smartBusiness.detail.projectNotFound');
    });

    it('should set errorKey if loading fails', () => {
        businessServiceMock.getProject.mockReturnValue(throwError(() => new Error('API failure')));
        component.ngOnInit();
        expect(component.loading()).toBe(false);
        expect(component.errorKey()).toBe('smartBusiness.detail.loadError');
    });

    it('should compute flow, styleId, and translated styleLabel', () => {
        component.ngOnInit();
        expect(component.flow()?._id).toBe('flow_01');
        expect(component.styleId()).toBe('c');
        expect(component.styleLabel()).toBe('C — Nordic Slate');
    });

    it('should compute preview models for intake, docs, reps, and integrations', () => {
        component.ngOnInit();
        const intake = component.intakePreview();
        expect(intake.countryCode).toBe('CO');
        expect(intake.phoneGateway).toBe('twilio');

        const docs = component.docsPreview();
        expect(docs.attemptLimit).toBe(4);
        expect(docs.officialRegistryChecks.dian).toBe(true);

        const reps = component.repsPreview();
        expect(reps.uboOwnershipThreshold).toBe(20);
        expect(reps.livenessMinScore).toBe(85);
        expect(reps.compareMinScore).toBe(88);

        const integ = component.integrationsPreview();
        expect(integ.redirectUrl).toBe('https://alpha.co/done');
        expect(integ.webhook).toBe('https://api.alpha.co/kyb-hook');
    });

    it('should detect complete project and not flag incompleteWizard', () => {
        component.ngOnInit();
        expect(component.incompleteWizard()).toBe(false);
    });

    it('should detect incomplete draft wizard and resume setup at correct step', () => {
        const incompleteDraft: BusinessProject = {
            ...mockProject,
            _id: 'biz_draft',
            currentStep: 3,
            lastStep: 3,
        };
        businessServiceMock.getProject.mockReturnValue(of(incompleteDraft));
        component.ngOnInit();

        expect(component.incompleteWizard()).toBe(true);
        component.continueSetup();
        expect(routerMock.navigate).toHaveBeenCalledWith([
            '/smart-business/projects',
            'biz_01',
            'setup',
            3,
        ]);
    });

    it('should navigate to wizard step on openSetup', () => {
        component.ngOnInit();
        component.openSetup(2);
        expect(routerMock.navigate).toHaveBeenCalledWith([
            '/smart-business/projects',
            'biz_01',
            'setup',
            2,
        ]);
    });

    it('should navigate to records on openRecords', () => {
        component.ngOnInit();
        component.openRecords();
        expect(routerMock.navigate).toHaveBeenCalledWith([
            '/smart-business/projects',
            'biz_01',
            'records',
        ]);
    });

    it('should map section query parameters to sectionTitleKey', () => {
        component.section.set('api');
        expect(component.sectionTitleKey()).toBe('smartBusiness.detail.sectionApi');

        component.section.set('intake');
        expect(component.sectionTitleKey()).toBe('smartBusiness.setup.steps.company_intake');

        component.section.set('docs');
        expect(component.sectionTitleKey()).toBe('smartBusiness.setup.steps.corporate_docs');

        component.section.set('reps');
        expect(component.sectionTitleKey()).toBe('smartBusiness.setup.steps.representatives_policy');

        component.section.set(null);
        expect(component.sectionTitleKey()).toBe('smartBusiness.detail.overview');
    });

    it('should copy live verification URL and notify via snackBar', () => {
        component.ngOnInit();
        const event = { stopPropagation: vi.fn() } as any;
        component.copyLiveUrl(event);
        expect(event.stopPropagation).toHaveBeenCalled();
        expect(clipboardMock.copy).toHaveBeenCalledWith(expect.stringContaining('/verify-business/biz_01'));
        expect(snackBarMock.open).toHaveBeenCalled();
    });

    it('should format ISO dates using DateTime format', () => {
        expect(component.formatDate()).toBe('');
        expect(component.formatDate('2026-11-09T00:00:00.000Z')).toBeTruthy();
        expect(component.formatDate('invalid-date')).toBe('');
    });

    it('should default to account retention policy and save project dataRetention override', () => {
        component.ngOnInit();
        expect(component.effectiveRetentionIsOverride()).toBe(false);

        component.startEditingRetention();
        expect(component.editingRetention()).toBe(true);
        expect(component.retentionOverrideEnabled()).toBe(false);

        component.retentionOverrideEnabled.set(true);
        component.onRetentionPolicyChange({
            mode: 'ephemeral',
            webhookHoldHours: 48,
            allowManualDelete: true,
            types: mapTypes(null, () => ({ mode: 'ephemeral', retentionHours: null })),
        });
        component.saveRetention();

        expect(businessServiceMock.updateProject).toHaveBeenCalledWith(
            'biz_01',
            expect.objectContaining({
                dataRetention: expect.objectContaining({
                    mode: 'ephemeral',
                    webhookHoldHours: 48,
                    allowManualDelete: true,
                }),
            })
        );
        expect(component.editingRetention()).toBe(false);
        expect(snackBarMock.open).toHaveBeenCalled();
    });

    it('should clear project dataRetention override to null when override toggle is turned off', () => {
        component.ngOnInit();
        component.startEditingRetention();
        component.retentionOverrideEnabled.set(false);
        component.saveRetention();

        expect(businessServiceMock.updateProject).toHaveBeenCalledWith('biz_01', { dataRetention: null });
    });
});
