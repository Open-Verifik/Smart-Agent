import '@angular/compiler';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { of } from 'rxjs';

vi.mock('../../../smart-enroll/projects/project-record-detail.component', () => ({
    ProjectRecordDetailComponent: class {},
}));

import { SmartBusinessCompanyRecordDetailComponent } from './company-record-detail.component';
import { SmartBusinessService } from '../../smart-business.service';

describe('SmartBusinessCompanyRecordDetailComponent', () => {
    let component: SmartBusinessCompanyRecordDetailComponent;
    let businessServiceMock: any;
    let snackMock: any;
    let clipboardMock: any;
    let routeMock: any;
    let routerMock: any;

    beforeEach(() => {
        businessServiceMock = {
            getCompanyRecord: vi.fn().mockReturnValue(
                of({
                    _id: 'biz_01',
                    projectId: 'proj_01',
                    status: 'NEEDS_MANUAL_REVIEW',
                    company: {
                        legalName: 'Andina Logistics SAS',
                        taxId: '901458921',
                        checkDigit: '3',
                        country: 'CO',
                        entityType: 'SAS',
                        address: 'Carrera 7 # 116-50',
                        email: 'ops@andina.co',
                        phone: '+573105557788',
                    },
                    documents: [
                        {
                            _id: 'doc_01',
                            category: 'business_document',
                            filename: 'Camara_Comercio.pdf',
                            status: 'VERIFIED',
                            ocrData: {
                                legalName: 'Andina Logistics SAS',
                                taxId: '901458921-3',
                                confidenceScore: 0.98,
                            },
                        },
                    ],
                    representatives: [
                        {
                            _id: 'rep_01',
                            firstName: 'Carlos',
                            lastName: 'Mendoza',
                            role: 'Representante Legal',
                            isUBO: true,
                            ownershipPercentage: 55,
                            documentType: 'CC',
                            documentNumber: '80194821',
                            email: 'carlos@andina.co',
                            phone: '+573105557788',
                            kycStatus: 'COMPLETED',
                            livenessScore: 0.98,
                            faceCompareScore: 0.96,
                        },
                    ],
                    officialRegistryChecks: {
                        dianStatus: 'ACTIVE',
                        ruesStatus: 'ACTIVE',
                        sanctionsScreening: { status: 'CLEAN', ofacMatches: 0, pepMatches: 0, interpolMatches: 0 },
                    },
                    riskAssessment: { score: 'LOW', reasons: ['Clean history'] },
                })
            ),
            updateCompanyRecordStatus: vi.fn().mockReturnValue(of({ success: true })),
            resendRepresentativeInvite: vi.fn().mockReturnValue(of({ success: true })),
        };

        snackMock = { open: vi.fn() };
        clipboardMock = { copy: vi.fn() };
        routeMock = { params: of({ projectId: 'proj_01', recordId: 'biz_01' }) };
        routerMock = { navigate: vi.fn() };

        component = new SmartBusinessCompanyRecordDetailComponent(
            routeMock,
            routerMock,
            businessServiceMock,
            { markForCheck: vi.fn() } as any,
            snackMock,
            clipboardMock
        );
    });

    it('loads and displays company dossier on init', () => {
        component.ngOnInit();

        expect(businessServiceMock.getCompanyRecord).toHaveBeenCalledWith('biz_01');
        const dossier = component.dossier();
        expect(dossier).toBeTruthy();
        expect(dossier?.company.legalName).toBe('Andina Logistics SAS');
        expect(dossier?.documents.length).toBe(1);
        expect(component.selectedDocument()?._id).toBe('doc_01');
        expect(dossier?.representatives[0].firstName).toBe('Carlos');
    });

    it('allows selecting corporate documents to inspect OCR data', () => {
        component.ngOnInit();

        const doc2 = {
            _id: 'doc_02',
            category: 'tax_document' as const,
            filename: 'RUT_2026.pdf',
            fileUrl: '',
            status: 'VERIFIED' as const,
            uploadedAt: '2026-11-01',
        };
        component.selectDocument(doc2);
        expect(component.selectedDocument()?._id).toBe('doc_02');
    });

    it('approves dossier and updates local status to COMPLETED', () => {
        component.ngOnInit();
        component.approveDossier();

        expect(businessServiceMock.updateCompanyRecordStatus).toHaveBeenCalledWith(
            'biz_01',
            'COMPLETED',
            expect.any(String)
        );
        expect(component.dossier()?.status).toBe('COMPLETED');
        expect(snackMock.open).toHaveBeenCalledWith('KYB dossier approved successfully', 'OK', expect.any(Object));
    });

    it('rejects dossier and updates local status to REJECTED', () => {
        component.ngOnInit();
        component.rejectDossier();

        expect(businessServiceMock.updateCompanyRecordStatus).toHaveBeenCalledWith(
            'biz_01',
            'REJECTED',
            expect.any(String)
        );
        expect(component.dossier()?.status).toBe('REJECTED');
        expect(snackMock.open).toHaveBeenCalledWith('Dossier marked as Rejected', 'OK', expect.any(Object));
    });

    it('dispatches representative invite and copies direct link', () => {
        component.ngOnInit();
        const rep = component.dossier()!.representatives[0];

        component.resendInvite(rep);
        expect(businessServiceMock.resendRepresentativeInvite).toHaveBeenCalledWith('biz_01', 'rep_01');

        component.copyInviteUrl(rep);
        expect(clipboardMock.copy).toHaveBeenCalled();
        expect(snackMock.open).toHaveBeenCalledWith(
            'Direct KYC verification link copied to clipboard',
            'OK',
            expect.any(Object)
        );
    });

    it('detects PDF/image documents and opens document preview modal state', () => {
        component.ngOnInit();
        const doc = {
            _id: 'doc_pdf',
            category: 'business_document' as const,
            filename: 'JUAN TREVINO - Estado de Cuenta - 16-01-2026.pdf',
            fileUrl: 'https://cdn.verifik.co/pdf/JUAN%20TREVINO%20-%20Estado%20de%20Cuenta%20-%2016-01-2026.pdf',
            status: 'VERIFIED' as const,
            uploadedAt: '2026-11-09T23:11:00.000Z',
        };

        expect(component.isPdfDocument(doc)).toBe(true);
        expect(component.isImageDocument(doc)).toBe(false);
        expect(component.fileBaseName(doc.filename)).toBe('JUAN TREVINO - Estado de Cuenta - 16-01-2026');
        expect(component.fileExtension(doc.filename)).toBe('.pdf');

        component.openDocumentPreview(doc);
        expect(component.previewModalItem()?.url).toBe(doc.fileUrl);
        expect(component.previewModalItem()?.isPdf).toBe(true);

        component.closeDocumentPreview();
        expect(component.previewModalItem()).toBeNull();
    });

    it('selects representative to inspect KYC details, extracts OCR entries, and navigates to full KYC record', () => {
        component.ngOnInit();
        const rep = {
            ...component.dossier()!.representatives[0],
            kycAppRegistrationId: 'app_reg_999',
            documentFrontUrl: 'https://cdn.verifik.co/id/front.png',
            documentBackUrl: 'https://cdn.verifik.co/id/back.png',
            documentFaceUrl: 'data:image/jpeg;base64,/9j/4AAQ',
            documentValidation: {
                _id: 'dv_01',
                documentType: 'CC',
                documentNumber: '1.020.729.123',
                status: 'ASSESSING',
                OCRExtraction: {
                    firstName: 'EDISON DANIEL|EDISON',
                    lastName: 'JIMENEZ ALARCON|JIMENEZ',
                    fullName: 'EDISON DANIEL JIMENEZ ALARCON',
                    documentNumber: '1.020.729.123|L7TPOO4W',
                    dateOfBirth: '16/09/1986',
                },
            },
        };

        component.selectMember(rep);
        expect(component.selectedMember()?._id).toBe('rep_01');
        expect(component.activeAppRegistrationId()).toBe('app_reg_999');

        const ocrRows = component.memberOcrEntries(rep);
        expect(ocrRows).toEqual(
            expect.arrayContaining([
                { label: 'First Name', value: 'EDISON DANIEL' },
                { label: 'Last Name', value: 'JIMENEZ ALARCON' },
                { label: 'Document Number', value: '1.020.729.123' },
                { label: 'Date of Birth', value: '16/09/1986' },
            ])
        );

        component.closeMemberDrawer();
        expect(component.selectedMember()).toBeNull();
        expect(component.activeAppRegistrationId()).toBe('');

        component.openFullKycRecord(rep);
        expect(routerMock.navigate).toHaveBeenCalledWith(['/smart-enroll/projects', 'proj_01', 'records', 'app_reg_999']);
    });

    it('restores representative KYC view on refresh when route contains :appRegistrationId', () => {
        const deepLinkRouteMock = {
            params: of({ projectId: 'proj_01', recordId: 'biz_01', appRegistrationId: 'rep_01' }),
        };
        const deepLinkComponent = new SmartBusinessCompanyRecordDetailComponent(
            deepLinkRouteMock as any,
            routerMock,
            businessServiceMock,
            { markForCheck: vi.fn(), detectChanges: vi.fn() } as any,
            snackMock,
            clipboardMock
        );

        deepLinkComponent.ngOnInit();
        expect(deepLinkComponent.activeAppRegistrationId()).toBe('rep_01');
        expect(deepLinkComponent.selectedMember()?._id).toBe('rep_01');
        expect(deepLinkComponent.selectedMember()?.firstName).toBe('Carlos');
    });
});
