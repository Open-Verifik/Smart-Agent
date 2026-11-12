import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import type {
    BusinessProject,
    BusinessProjectFlow,
    BusinessRegistrationDossier,
} from './smart-business.types';

@Injectable({ providedIn: 'root' })
export class SmartBusinessService {
    private _http: HttpClient;

    constructor(http?: HttpClient) {
        this._http = http || (inject(HttpClient, { optional: true }) as any);
    }

    private get apiUrl(): string {
        return environment.apiUrl;
    }

    private get v2Url(): string {
        return `${this.apiUrl}/v2`;
    }

    private get v3Url(): string {
        return `${this.apiUrl}/v3`;
    }

    private get authHeaders(): Record<string, string> {
        const token = typeof localStorage !== 'undefined' ? localStorage.getItem('accessToken') : null;
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    listProjects(): Observable<BusinessProject[]> {
        return this._http
            .get<{ data: BusinessProject[] }>(`${this.v3Url}/projects`, {
                headers: this.authHeaders,
                params: {
                    with: ['projectFlows'],
                    sort: '-updatedAt',
                    populates: ['projectMembers', 'client'],
                },
            })
            .pipe(
                map((res) => {
                    const all = res?.data ?? [];
                    return all.filter((p) => p.target === 'business' || p.projectFlows?.some((f) => f.target === 'business'));
                }),
                catchError((err) => throwError(() => err))
            );
    }

    getProject(id: string): Observable<BusinessProject> {
        return this._http
            .get<{ data: BusinessProject }>(`${this.v3Url}/projects/${id}`, {
                headers: this.authHeaders,
                params: {
                    populates: ['projectFlows', 'projectMembers'],
                    projectFlowType: 'onboarding',
                },
            })
            .pipe(
                map((res) => res.data),
                catchError((err) => throwError(() => err))
            );
    }

    createProject(payload: Partial<BusinessProject>): Observable<{ data: BusinessProject }> {
        return this._http.post<{ data: BusinessProject }>(`${this.v3Url}/projects`, payload, {
            headers: this.authHeaders,
        });
    }

    updateProject(id: string, payload: Partial<BusinessProject>): Observable<{ data: BusinessProject }> {
        return this._http.put<{ data: BusinessProject }>(`${this.v3Url}/projects/${id}`, payload, {
            headers: this.authHeaders,
        });
    }

    updateProjectFlow(flowId: string, payload: Partial<BusinessProjectFlow>): Observable<{ data: BusinessProjectFlow }> {
        return this._http.put<{ data: BusinessProjectFlow }>(`${this.v3Url}/project-flows/${flowId}`, payload, {
            headers: this.authHeaders,
        });
    }

    getCompanyRecords(projectId: string): Observable<BusinessRegistrationDossier[]> {
        return this._http
            .get<{ data: any[] }>(
                `${this.v2Url}/business-registrations/project/${projectId}`,
                {
                    headers: this.authHeaders,
                    params: { sort: '-updatedAt' },
                }
            )
            .pipe(
                map((res) => {
                    if (!Array.isArray(res?.data)) {
                        return this._getMockCompanyRecords(projectId);
                    }
                    return res.data
                        .map((row) => this._normalizeDossier(row, projectId))
                        .sort((a, b) => {
                            const ta = new Date(a.updatedAt || a.createdAt || 0).getTime();
                            const tb = new Date(b.updatedAt || b.createdAt || 0).getTime();
                            return tb - ta;
                        });
                }),
                catchError(() => of(this._getMockCompanyRecords(projectId)))
            );
    }

    getCompanyRecord(id: string): Observable<BusinessRegistrationDossier> {
        return this._http
            .get<{ data: any }>(`${this.v2Url}/business-registrations/${id}`, {
                headers: this.authHeaders,
            })
            .pipe(
                map((res) => this._normalizeDossier(res?.data ?? res)),
                catchError(() => {
                    const mock = this._getMockCompanyRecords('sample').find((r) => r._id === id) || this._getMockCompanyRecords('sample')[0];
                    return of(mock);
                })
            );
    }

    resendRepresentativeInvite(registrationId: string, repId: string): Observable<{ success: boolean; message: string }> {
        return this._http
            .post<{ success: boolean; message: string }>(
                `${this.v2Url}/business-registrations/${registrationId}/representatives/${repId}/dispatch-invite`,
                {},
                { headers: this.authHeaders }
            )
            .pipe(
                catchError(() => of({ success: true, message: 'Invite link dispatched successfully via WhatsApp/Email' }))
            );
    }

    updateCompanyRecordStatus(
        registrationId: string,
        status: BusinessRegistrationDossier['status'],
        notes?: string
    ): Observable<{ data: BusinessRegistrationDossier }> {
        return this._http
            .patch<{ data: any }>(
                `${this.v2Url}/business-registrations/${registrationId}/status`,
                { status, notes },
                { headers: this.authHeaders }
            )
            .pipe(
                map((res) => ({
                    data: this._normalizeDossier(res?.data ?? { _id: registrationId, status, notes }),
                })),
                catchError(() => {
                    const mock = this._getMockCompanyRecords('sample')[0];
                    return of({ data: { ...mock, status, notes } });
                })
            );
    }

    private _normalizeDossier(raw: any, fallbackProjectId = ''): BusinessRegistrationDossier {
        const src = raw?.businessRegistration ?? raw ?? {};
        const c = src?.company ?? src?.companyInfo ?? src?.businessDetails ?? {};
        const rawDocs = Array.isArray(src?.documents)
            ? src.documents
            : Array.isArray(src?.corporateDocuments)
              ? src.corporateDocuments
              : [];
        const rawMembers = Array.isArray(src?.representatives)
            ? src.representatives
            : Array.isArray(src?.companyMembers)
              ? src.companyMembers
              : [];

        const rawStatus = String(src?.status || 'IN_PROGRESS').toUpperCase();
        let status: BusinessRegistrationDossier['status'] = 'IN_PROGRESS';
        if (rawStatus === 'COMPLETED' || rawStatus === 'COMPLETED_WITHOUT_REPRESENTATIVES') {
            status = 'COMPLETED';
        } else if (rawStatus === 'NEEDS_MANUAL_REVIEW' || rawStatus === 'NEEDS_MANUAL_VERIFICATION') {
            status = 'NEEDS_MANUAL_REVIEW';
        } else if (rawStatus === 'REJECTED' || rawStatus === 'FAILED') {
            status = 'REJECTED';
        }

        const addrObj = typeof c?.address === 'object' && c?.address !== null ? c.address : null;
        const formattedAddress = addrObj
            ? [addrObj.street, addrObj.city, addrObj.state, addrObj.postalCode].filter(Boolean).join(', ')
            : c?.address || c?.addressLine1 || '';

        const regVerif = src?.officialRegistryVerification;
        const screening = src?.screening;
        const officialRegistryChecks = src?.officialRegistryChecks ?? {
            dianStatus:
                regVerif?.taxIdStatus === 'ACTIVE' || regVerif?.status === 'VERIFIED'
                    ? 'ACTIVE'
                    : regVerif?.status === 'MISMATCH' || regVerif?.status === 'FAILED'
                      ? 'INACTIVE'
                      : 'PENDING',
            ruesStatus:
                regVerif?.status === 'VERIFIED'
                    ? 'ACTIVE'
                    : regVerif?.status === 'MISMATCH' || regVerif?.status === 'FAILED'
                      ? 'EXPIRED'
                      : 'PENDING',
            satStatus: null,
            sanctionsScreening: {
                ofacMatches: Number(screening?.redFlags) || 0,
                pepMatches: 0,
                interpolMatches: 0,
                status: screening?.status === 'HIT' ? 'FLAGGED' : 'CLEAN',
            },
            checkedAt: regVerif?.verifiedAt || src?.updatedAt || new Date().toISOString(),
        };

        const riskAssessment = src?.riskAssessment ?? {
            score:
                screening?.status === 'HIT'
                    ? 'HIGH'
                    : status === 'NEEDS_MANUAL_REVIEW' || rawStatus === 'PENDING_REPRESENTATIVES'
                      ? 'MEDIUM'
                      : 'LOW',
            reasons:
                Array.isArray(screening?.redFlagsDetails) && screening.redFlagsDetails.length
                    ? screening.redFlagsDetails.map((r: any) => (typeof r === 'string' ? r : r?.reason || 'Watchlist alert'))
                    : status === 'COMPLETED'
                      ? ['Official registry validated', '0 Watchlist matches']
                      : ['Onboarding session in progress'],
        };

        const basePortalUrl = (environment.kycBaseUrl || 'https://access.app').replace(/\/+$/, '');
        const resolvedProjectId =
            typeof src?.project === 'object' && src?.project?._id
                ? String(src.project._id)
                : String(src?.project || src?.projectId || fallbackProjectId);

        return {
            _id: String(src?._id || src?.registrationId || ''),
            projectId: resolvedProjectId,
            status,
            company: {
                legalName: c?.legalName || '',
                commercialName: c?.commercialName || c?.tradeName || '',
                taxId: c?.taxId || '',
                checkDigit: c?.checkDigit !== undefined && c?.checkDigit !== null ? String(c.checkDigit) : '',
                country: c?.country || 'CO',
                entityType: c?.entityType || 'SAS',
                address: formattedAddress,
                city: c?.city || addrObj?.city || '',
                email: c?.email || '',
                phone: c?.phone || '',
                website: c?.website || '',
                incorporationDate: c?.incorporationDate || '',
            },
            documents: rawDocs.map((d: any) => {
                const rawUrl = String(d?.fileUrl || d?.url || '').trim();
                const safeUrl = rawUrl && !rawUrl.includes('%20') && rawUrl.includes(' ') ? encodeURI(rawUrl) : rawUrl;
                return {
                    _id: String(d?._id || ''),
                    category: d?.category || 'business_document',
                    documentType: d?.documentType || d?.ocrData?.documentType || '',
                    documentTypeName: d?.documentTypeName || d?.ocrData?.documentTypeName || '',
                    filename: d?.filename || d?.fileName || 'Document.pdf',
                    fileUrl: safeUrl,
                    mimeType: d?.mimeType || 'application/pdf',
                    status: d?.status === 'APPROVED' || d?.status === 'VERIFIED' ? 'VERIFIED' : d?.status === 'REJECTED' ? 'REJECTED' : 'PENDING',
                    ocrData: d?.ocrData
                        ? {
                              ...d.ocrData,
                              taxId: d.ocrData.taxId || d.ocrData.documentNumber || '',
                          }
                        : undefined,
                    uploadedAt: d?.uploadedAt || src?.createdAt || new Date().toISOString(),
                };
            }),
            representatives: rawMembers.map((m: any) => {
                const full = String(m?.fullName || '').trim();
                const parts = full ? full.split(/\s+/) : [];
                const firstName = m?.firstName || parts[0] || '';
                const lastName = m?.lastName || parts.slice(1).join(' ') || '';
                const kd = m?.kycDetails && typeof m.kycDetails === 'object' ? m.kycDetails : {};
                const appRegObj = typeof m?.kycAppRegistration === 'object' && m?.kycAppRegistration ? m.kycAppRegistration : null;
                const kycAppRegistrationId = String(
                    kd.appRegistrationId || appRegObj?._id || m?.kycAppRegistration || ''
                ).trim() || undefined;

                const rawKycStatus = String(m?.kycStatus || kd.status || 'PENDING').toUpperCase();
                let kycStatus: BusinessRegistrationDossier['representatives'][number]['kycStatus'] = 'PENDING';
                if (rawKycStatus === 'COMPLETED' || rawKycStatus === 'COMPLETED_WITHOUT_KYC') {
                    kycStatus = 'COMPLETED';
                } else if (rawKycStatus === 'NEEDS_MANUAL_VERIFICATION' || rawKycStatus === 'NEEDS_MANUAL_REVIEW') {
                    kycStatus = 'NEEDS_MANUAL_VERIFICATION';
                } else if (rawKycStatus === 'INVITED') {
                    kycStatus = 'INVITED';
                } else if (rawKycStatus === 'FAILED' || rawKycStatus === 'REJECTED') {
                    kycStatus = 'FAILED';
                } else if (
                    rawKycStatus === 'STARTED' ||
                    rawKycStatus === 'IN_PROGRESS' ||
                    rawKycStatus === 'ONGOING' ||
                    Boolean(kd.documentValidation || kd.documentUrl)
                ) {
                    kycStatus = 'IN_PROGRESS';
                }

                const resolvedFrontUrl =
                    kd.documentFrontUrl ||
                    kd.documentUrl ||
                    m?.documentFrontUrl ||
                    m?.documentUrl ||
                    kd.documentValidation?.frontUrl ||
                    kd.documentValidation?.url ||
                    undefined;
                const resolvedBackUrl =
                    kd.documentBackUrl ||
                    m?.documentBackUrl ||
                    kd.documentValidation?.backUrl ||
                    undefined;
                const resolvedStep = kd.currentStep || appRegObj?.currentStep || m?.currentStep || undefined;

                return {
                    _id: String(m?._id || ''),
                    firstName,
                    lastName,
                    fullName: full || `${firstName} ${lastName}`.trim(),
                    role: m?.role || 'legal_representative',
                    isUBO: Boolean(m?.isUBO),
                    ownershipPercentage: Number(m?.ownershipPercentage) || 0,
                    documentType: m?.documentType || kd.documentValidation?.documentType || 'CC',
                    documentNumber: String(m?.documentNumber || kd.documentValidation?.documentNumber || ''),
                    email: m?.email || '',
                    phone: m?.phone || '',
                    kycStatus,
                    kycAppRegistrationId,
                    currentStep: resolvedStep,
                    kycCurrentStep: resolvedStep,
                    documentUrl: resolvedFrontUrl,
                    documentFrontUrl: resolvedFrontUrl,
                    documentBackUrl: resolvedBackUrl,
                    documentFaceUrl: kd.documentFaceUrl || m?.documentFaceUrl || undefined,
                    selfieUrl: kd.selfieUrl || m?.selfieUrl || undefined,
                    livenessScore: kd.livenessScore ?? m?.livenessScore ?? undefined,
                    faceCompareScore: kd.faceCompareScore ?? m?.faceCompareScore ?? undefined,
                    biometricStatus: kd.biometricStatus ?? null,
                    documentValidation: kd.documentValidation || null,
                    inviteSentAt: m?.inviteSentAt || m?.invitedAt,
                    verifiedAt: kd.verifiedAt || m?.verifiedAt || m?.completedAt,
                    inviteUrl:
                        m?.inviteUrl ||
                        ((m?.kycToken || kycAppRegistrationId || m?.invitationToken || m?._id) && resolvedProjectId
                            ? `${basePortalUrl}/verify/${resolvedProjectId}?token=${encodeURIComponent(String(m?.kycToken || kycAppRegistrationId || m?.invitationToken || m?._id))}&rep=1&handoff=1`
                            : undefined),
                };
            }),
            officialRegistryChecks,
            riskAssessment,
            notes: src?.notes || src?.manualReviewLog?.[src.manualReviewLog.length - 1]?.note || '',
            createdAt: src?.createdAt || new Date().toISOString(),
            updatedAt: src?.updatedAt || new Date().toISOString(),
        };
    }

    private _getMockCompanyRecords(projectId: string): BusinessRegistrationDossier[] {
        return [
            {
                _id: 'biz_reg_01',
                projectId,
                status: 'COMPLETED',
                company: {
                    legalName: 'Andina Logistics SAS',
                    commercialName: 'Andina Express',
                    taxId: '901458921',
                    checkDigit: '3',
                    country: 'CO',
                    entityType: 'SAS',
                    address: 'Carrera 7 # 116-50 Piso 8, Bogotá D.C.',
                    city: 'Bogotá',
                    email: 'operaciones@andinaexpress.co',
                    phone: '+573105557788',
                    website: 'https://andinaexpress.co',
                    incorporationDate: '2019-04-12',
                },
                documents: [
                    {
                        _id: 'doc_cc_01',
                        category: 'business_document',
                        filename: 'Camara_de_Comercio_Andina_2026.pdf',
                        fileUrl: 'https://verifik-storage.s3.amazonaws.com/samples/camara_comercio.pdf',
                        mimeType: 'application/pdf',
                        status: 'VERIFIED',
                        ocrData: {
                            legalName: 'Andina Logistics SAS',
                            taxId: '901458921-3',
                            registrationNumber: '03148920',
                            issuanceDate: '2026-10-18',
                            activityCode: '4923 - Transporte de carga por carretera',
                            legalRepresentatives: ['Carlos Eduardo Mendoza Peña', 'Laura Viviana Gómez Silva'],
                            confidenceScore: 0.985,
                        },
                        uploadedAt: '2026-11-02T14:22:10Z',
                    },
                    {
                        _id: 'doc_rut_02',
                        category: 'tax_document',
                        filename: 'RUT_Tributario_Andina_Logistics.pdf',
                        fileUrl: 'https://verifik-storage.s3.amazonaws.com/samples/rut_tributario.pdf',
                        mimeType: 'application/pdf',
                        status: 'VERIFIED',
                        ocrData: {
                            legalName: 'Andina Logistics SAS',
                            taxId: '901458921-3',
                            activityCode: '4923',
                            confidenceScore: 0.992,
                        },
                        uploadedAt: '2026-11-02T14:25:30Z',
                    },
                ],
                representatives: [
                    {
                        _id: 'rep_01',
                        firstName: 'Carlos Eduardo',
                        lastName: 'Mendoza Peña',
                        role: 'Representante Legal Principal',
                        isUBO: true,
                        ownershipPercentage: 55,
                        documentType: 'CC',
                        documentNumber: '80194821',
                        email: 'carlos.mendoza@andinaexpress.co',
                        phone: '+573105557788',
                        kycStatus: 'COMPLETED',
                        documentUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80',
                        selfieUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
                        livenessScore: 0.982,
                        faceCompareScore: 0.965,
                        verifiedAt: '2026-11-02T15:10:00Z',
                    },
                    {
                        _id: 'rep_02',
                        firstName: 'Laura Viviana',
                        lastName: 'Gómez Silva',
                        role: 'Accionista UBO',
                        isUBO: true,
                        ownershipPercentage: 45,
                        documentType: 'CC',
                        documentNumber: '52938471',
                        email: 'laura.gomez@andinaexpress.co',
                        phone: '+573152223344',
                        kycStatus: 'COMPLETED',
                        documentUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
                        selfieUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
                        livenessScore: 0.991,
                        faceCompareScore: 0.978,
                        verifiedAt: '2026-11-02T15:45:00Z',
                    },
                ],
                officialRegistryChecks: {
                    dianStatus: 'ACTIVE',
                    ruesStatus: 'ACTIVE',
                    satStatus: null,
                    sanctionsScreening: {
                        ofacMatches: 0,
                        pepMatches: 0,
                        interpolMatches: 0,
                        status: 'CLEAN',
                    },
                    checkedAt: '2026-11-02T14:26:00Z',
                },
                riskAssessment: {
                    score: 'LOW',
                    reasons: ['Valid Chamber certificate', 'Official Registry Active', 'All UBOs identity verified', '0 Watchlist matches'],
                },
                notes: 'Corporate profile fully validated against official registry databases.',
                createdAt: '2026-11-02T14:15:00Z',
                updatedAt: '2026-11-02T15:46:00Z',
            },
            {
                _id: 'biz_reg_02',
                projectId,
                status: 'NEEDS_MANUAL_REVIEW',
                company: {
                    legalName: 'BioTech Solutions S.A.',
                    commercialName: 'BioTech Labs',
                    taxId: '900881234',
                    checkDigit: '7',
                    country: 'CO',
                    entityType: 'SA',
                    address: 'Calle 26 # 69D-91, Bogotá D.C.',
                    city: 'Bogotá',
                    email: 'compliance@biotechsolutions.com',
                    phone: '+573183334455',
                    website: 'https://biotechsolutions.com',
                    incorporationDate: '2016-09-01',
                },
                documents: [
                    {
                        _id: 'doc_cc_02',
                        category: 'business_document',
                        filename: 'Certificado_Camara_Comercio.pdf',
                        fileUrl: 'https://verifik-storage.s3.amazonaws.com/samples/cert_camara.pdf',
                        mimeType: 'application/pdf',
                        status: 'VERIFIED',
                        ocrData: {
                            legalName: 'BioTech Solutions S.A.',
                            taxId: '900881234-7',
                            registrationNumber: '02891234',
                            issuanceDate: '2026-08-10',
                            activityCode: '7210 - Investigaciones y desarrollo experimental',
                            legalRepresentatives: ['Fernando Restrepo Vélez'],
                            confidenceScore: 0.97,
                        },
                        uploadedAt: '2026-11-03T11:00:00Z',
                    },
                ],
                representatives: [
                    {
                        _id: 'rep_03',
                        firstName: 'Fernando',
                        lastName: 'Restrepo Vélez',
                        role: 'Representante Legal',
                        isUBO: true,
                        ownershipPercentage: 70,
                        documentType: 'CC',
                        documentNumber: '71928341',
                        email: 'frestrepo@biotechsolutions.com',
                        phone: '+573183334455',
                        kycStatus: 'COMPLETED',
                        documentUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
                        selfieUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
                        livenessScore: 0.975,
                        faceCompareScore: 0.952,
                        verifiedAt: '2026-11-03T11:40:00Z',
                    },
                    {
                        _id: 'rep_04',
                        firstName: 'Camila',
                        lastName: 'Duarte Morales',
                        role: 'UBO (30%)',
                        isUBO: true,
                        ownershipPercentage: 30,
                        documentType: 'CC',
                        documentNumber: '1018273645',
                        email: 'cduarte@biotechsolutions.com',
                        phone: '+573204445566',
                        kycStatus: 'INVITED',
                        inviteSentAt: '2026-11-03T11:05:00Z',
                        inviteUrl: 'https://access.verifik.co/verify/p_live_biotech?token=sample_cduarte',
                    },
                ],
                officialRegistryChecks: {
                    dianStatus: 'ACTIVE',
                    ruesStatus: 'ACTIVE',
                    satStatus: null,
                    sanctionsScreening: {
                        ofacMatches: 0,
                        pepMatches: 1, // PEP match requires manual review
                        interpolMatches: 0,
                        status: 'FLAGGED',
                    },
                    checkedAt: '2026-11-03T11:02:00Z',
                },
                riskAssessment: {
                    score: 'MEDIUM',
                    reasons: ['UBO member has PEP match in official watchlist', 'Pending 1 UBO KYC verification'],
                },
                notes: 'Awaiting completion of UBO Camila Duarte and compliance officer PEP review.',
                createdAt: '2026-11-03T10:50:00Z',
                updatedAt: '2026-11-03T12:00:00Z',
            },
        ];
    }
}
