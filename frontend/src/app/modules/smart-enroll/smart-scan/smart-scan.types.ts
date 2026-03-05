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
    project?: string;
    projectFlow?: string;
}

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
