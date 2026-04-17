export interface DocumentValidationProjectRef {
    _id: string;
}

export interface DocumentValidationAppRegistrationRef {
    _id: string;
    project?: string | DocumentValidationProjectRef;
}

export interface DocumentValidation {
    _id: string;
    documentType: string;
    documentNumber?: string;
    documentCategory?: string;
    country?: string;
    status: string;
    validationMethod: string;
    url?: string;
    backUrl?: string;
    OCRExtraction?: Record<string, unknown>;
    createdAt?: string;
    updatedAt?: string;
    client?: string;
    project?: string | DocumentValidationProjectRef;
    projectFlow?: string | { _id: string };
    appRegistration?: string | DocumentValidationAppRegistrationRef | null;
}

/**
 * Builds the project records detail link for a scan when it was created
 * inside an enrollment flow. Returns `null` for standalone / demo scans
 * (no `appRegistration`) or when the project id cannot be resolved.
 */
export const resolveEnrollmentRecordLink = (
    scan: DocumentValidation | null | undefined
): { projectId: string; recordId: string } | null => {
    if (!scan) return null;

    const ar = scan.appRegistration;
    const recordId = typeof ar === 'string' ? ar : ar?._id;
    if (!recordId) return null;

    const fromScan =
        typeof scan.project === 'string' ? scan.project : scan.project?._id;
    const fromAr =
        ar && typeof ar !== 'string'
            ? typeof ar.project === 'string'
                ? ar.project
                : ar.project?._id
            : undefined;
    const projectId = fromScan || fromAr;
    if (!projectId) return null;

    return { projectId, recordId };
};

export interface DocumentValidationResponse {
    data: DocumentValidation[] | DocumentValidation;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}

export interface DocumentType {
    _id: string;
    name: string;
    code: string;
    country: string;
    category: string;
    status?: string;
    fields?: DocumentTypeField[];
    frontImage?: string;
    backImage?: string;
}

export interface DocumentTypeField {
    page: number;
    mapKey: string;
    name: string;
    type: string;
}

export interface PromptTemplate {
    _id: string;
    name: string;
    documentType?: DocumentType | string;
    documentTypes?: string[];
    fields: DocumentTypeField[];
    prompt?: string;
    requiresBackSide?: boolean;
    format?: string;
}

export interface ScanRequest {
    documentType: string;
    image: string;
    backImage?: string;
    template?: string;
}

export interface DocumentClassification {
    requestedDocumentType: string;
    detectedDocumentType: string;
    detectedDocumentName: string;
    isMatch: boolean;
    confidence: number;
    reason: string;
}

export interface ScanResult {
    _id?: string;
    documentType: string;
    documentNumber?: string;
    OCRExtraction?: Record<string, unknown> & {
        documentClassification?: DocumentClassification;
    };
    status?: string;
    url?: string;
    backUrl?: string;
}
