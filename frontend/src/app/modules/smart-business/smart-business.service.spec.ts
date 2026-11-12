import '@angular/compiler';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { firstValueFrom, of } from 'rxjs';
import { SmartBusinessService } from './smart-business.service';
import type { BusinessProject } from './smart-business.types';

describe('SmartBusinessService', () => {
    let service: SmartBusinessService;
    let httpClientMock: any;

    beforeEach(() => {
        httpClientMock = {
            get: vi.fn(),
            post: vi.fn(),
            patch: vi.fn(),
        };
        service = new SmartBusinessService(httpClientMock);
    });

    it('filters projects to only return those with target business', async () => {
        const mockProjects: BusinessProject[] = [
            {
                _id: 'proj_biz_1',
                name: 'KYB Empresa A',
                target: 'business',
                status: 'active',
                allowedCountries: ['CO'],
                defaultLanguage: 'es',
                contactEmail: 'a@biz.com',
                privacyUrl: 'https://a.com/priv',
                termsAndConditionsUrl: 'https://a.com/terms',
                dataProtection: {} as any,
                branding: {} as any,
            },
            {
                _id: 'proj_personal_2',
                name: 'KYC Personal B',
                target: 'personal' as any,
                status: 'active',
                allowedCountries: ['CO'],
                defaultLanguage: 'es',
                contactEmail: 'b@personal.com',
                privacyUrl: 'https://b.com/priv',
                termsAndConditionsUrl: 'https://b.com/terms',
                dataProtection: {} as any,
                branding: {} as any,
            },
        ];

        httpClientMock.get.mockReturnValue(of({ data: mockProjects }));

        const projects = await firstValueFrom(service.listProjects());
        expect(projects.length).toBe(1);
        expect(projects[0]._id).toBe('proj_biz_1');
        expect(projects[0].target).toBe('business');
    });

    it('retrieves company dossiers for a project with OCR data and member KYC records', async () => {
        httpClientMock.get.mockReturnValue(of({ data: null })); // triggers fallback to mock dossiers

        const records = await firstValueFrom(service.getCompanyRecords('test_proj_1'));
        expect(records.length).toBeGreaterThan(0);
        const first = records[0];
        expect(first.company.legalName).toBe('Andina Logistics SAS');
        expect(first.company.taxId).toBe('901458921');
        expect(first.documents.length).toBe(2);
        expect(first.documents[0].ocrData?.confidenceScore).toBeGreaterThan(0.9);
        expect(first.representatives.length).toBe(2);
        expect(first.representatives[0].kycStatus).toBe('COMPLETED');
        expect(first.officialRegistryChecks.dianStatus).toBe('ACTIVE');
        expect(first.officialRegistryChecks.ruesStatus).toBe('ACTIVE');
        expect(first.officialRegistryChecks.sanctionsScreening?.status).toBe('CLEAN');
    });

    it('updates company record status and handles status transition', async () => {
        httpClientMock.patch.mockReturnValue(of({ data: { status: 'COMPLETED', notes: 'Approved by auditor' } }));

        const res = await firstValueFrom(service.updateCompanyRecordStatus('biz_reg_01', 'COMPLETED', 'Approved by auditor'));
        expect(res.data.status).toBe('COMPLETED');
        expect(res.data.notes).toBe('Approved by auditor');
    });

    it('dispatches representative invite via WhatsApp/Email', async () => {
        httpClientMock.post.mockReturnValue(of({ success: true, message: 'Invite dispatched' }));

        const res = await firstValueFrom(service.resendRepresentativeInvite('biz_reg_01', 'rep_01'));
        expect(res.success).toBe(true);
    });

    it('normalizes raw backend BusinessRegistration records (companyInfo, corporateDocuments, companyMembers)', async () => {
        httpClientMock.get.mockReturnValue(
            of({
                data: [
                    {
                        _id: '6af235bfe1a9fe457c28a1f2',
                        project: '6aef00000000000000000001',
                        status: 'ONGOING',
                        companyInfo: {
                            legalName: 'Acme Corp SAS',
                            taxId: '900123456',
                            checkDigit: '7',
                            country: 'Colombia',
                            entityType: 'SAS',
                            email: 'legal@acme.co',
                        },
                        corporateDocuments: [
                            {
                                _id: 'doc_1',
                                category: 'business_document',
                                fileName: 'camara.pdf',
                                url: 'https://cdn.verifik.co/kyb/camara.pdf',
                                status: 'APPROVED',
                            },
                        ],
                        companyMembers: [
                            {
                                _id: 'mem_1',
                                fullName: 'Juan Perez',
                                role: 'legal_representative',
                                documentType: 'CC',
                                documentNumber: '10203040',
                                kycStatus: 'NOT_INVITED',
                            },
                        ],
                    },
                ],
            })
        );

        const records = await firstValueFrom(service.getCompanyRecords('6aef00000000000000000001'));
        expect(records.length).toBe(1);
        expect(records[0].company.legalName).toBe('Acme Corp SAS');
        expect(records[0].documents[0].filename).toBe('camara.pdf');
        expect(records[0].representatives[0].firstName).toBe('Juan');
        expect(records[0].representatives[0].lastName).toBe('Perez');
    });
});
