import { describe, expect, it } from 'vitest';
import {
    governmentNameResponse,
    isDocumentTypeUndetected,
    manualNameReviewDecision,
    nameVerificationSkip,
    recordFullName,
} from './app-registration-record.utils';
import type { AppRegistrationDetail } from './smart-enroll-projects.types';

const buildRecord = (documentValidation: Record<string, unknown>, informationValidation?: Record<string, unknown>) =>
    ({ documentValidation, informationValidation } as unknown as AppRegistrationDetail);

describe('nameVerificationSkip', () => {
    it('explains an unmapped document type with its type and country', () => {
        const skip = nameVerificationSkip(
            buildRecord({
                scoreValidated: false,
                imageValidated: false,
                infoValidationSupportedReason: 'document_not_supported',
                documentType: 'PA_CRP',
                country: 'Panama',
            })
        );

        expect(skip?.key).toBe('smartEnrollProjects.recordDetail.nameMatchReason.document_not_supported');
        expect(skip?.params).toEqual({ type: 'PA_CRP', country: 'Panama', reason: 'document_not_supported' });
    });

    it('falls back to the raw code for reasons it does not know', () => {
        const skip = nameVerificationSkip(
            buildRecord({ scoreValidated: false, infoValidationSupportedReason: 'something_new' })
        );

        expect(skip?.key).toBe('smartEnrollProjects.recordDetail.nameMatchReason.unknown');
        expect(skip?.params.reason).toBe('something_new');
        expect(skip?.params.type).toBe('—');
    });

    it('returns nothing once the lookup has actually scored the names', () => {
        expect(
            nameVerificationSkip(
                buildRecord({
                    scoreValidated: true,
                    imageValidated: true,
                    infoValidationSupportedReason: '',
                })
            )
        ).toBeNull();
    });
});

describe('recordFullName', () => {
    it('reads the OCR name, composing it from parts when there is no fullName', () => {
        const record = buildRecord({
            OCRExtraction: { firstName: 'Jose Manuel', lastName: 'Perez Hernandez' },
        });

        expect(recordFullName(record, 'document')).toBe('Jose Manuel Perez Hernandez');
    });

    it('reads Gemini plural keys the extracted-data cards already show', () => {
        const record = buildRecord({
            OCRExtraction: { firstNames: 'DANJYR DANIELA', lastNames: 'RIASCOS RIASCOS' },
        });

        expect(recordFullName(record, 'document')).toBe('DANJYR DANIELA RIASCOS RIASCOS');
    });

    it('prefers a stored fullName and reads the form separately', () => {
        const record = buildRecord(
            { OCRExtraction: { fullName: 'JOSE MANUEL PEREZ HERNANDEZ', firstName: 'Jose' } },
            { firstName: 'Manuel', lastName: 'Pérez' }
        );

        expect(recordFullName(record, 'document')).toBe('JOSE MANUEL PEREZ HERNANDEZ');
        expect(recordFullName(record, 'form')).toBe('Manuel Pérez');
    });

    it('treats Unknown as undetected so the type dialog can open', () => {
        expect(isDocumentTypeUndetected(buildRecord({ documentType: 'Unknown' }))).toBe(true);
        expect(isDocumentTypeUndetected(buildRecord({ documentType: 'CC' }))).toBe(false);
    });

    it('returns null when the source has no name at all', () => {
        expect(recordFullName(buildRecord({ OCRExtraction: {} }), 'document')).toBeNull();
        expect(recordFullName(buildRecord({}), 'form')).toBeNull();
    });
});

describe('governmentNameResponse', () => {
    it('reads the registry answer that explains a low score', () => {
        const response = governmentNameResponse(
            buildRecord({
                scoreValidation: {
                    arrayName: ['JUAN', 'MIGUEL', 'TREVIÑO', 'MORALES'],
                    documentNumber: 'E-8-197698',
                    documentType: 'CCPA',
                    firstName: 'JUAN MIGUEL',
                    fullName: 'JUAN MIGUEL TREVIÑO MORALES',
                    lastName: 'TREVIÑO MORALES',
                    validatedAt: '2026-08-19 20:27:09',
                },
            })
        );

        expect(response?.fullName).toBe('JUAN MIGUEL TREVIÑO MORALES');
        expect(response?.firstName).toBe('JUAN MIGUEL');
        expect(response?.lastName).toBe('TREVIÑO MORALES');
        expect(response?.documentType).toBe('CCPA');
        expect(response?.documentNumber).toBe('E-8-197698');
        expect(response?.validatedAt).toBe('2026-08-19 20:27:09');
        // arrayName duplicates the name rows, so it must not leak into the generic extras.
        expect(response?.extras).toEqual([]);
    });

    it('keeps the extra scalars a registry returns and drops nested objects', () => {
        const response = governmentNameResponse(
            buildRecord({
                scoreValidation: {
                    fullName: 'ANA GOMEZ',
                    gender: 'F',
                    dateOfBirth: '1990-01-02',
                    raw: { nested: true },
                    empty: '',
                },
            })
        );

        expect(response?.extras).toEqual([
            { key: 'dateOfBirth', value: '1990-01-02' },
            { key: 'gender', value: 'F' },
        ]);
    });

    it('returns nothing when the lookup never produced a response', () => {
        expect(governmentNameResponse(buildRecord({}))).toBeNull();
        expect(governmentNameResponse(buildRecord({ scoreValidation: {} }))).toBeNull();
        expect(governmentNameResponse(null)).toBeNull();
    });
});

describe('manualNameReviewDecision', () => {
    it('surfaces a reviewer verdict', () => {
        expect(manualNameReviewDecision(buildRecord({ manualNameReview: { decision: 'match' } }))).toBe('match');
        expect(manualNameReviewDecision(buildRecord({ manualNameReview: { decision: 'mismatch' } }))).toBe('mismatch');
    });

    it('ignores records with no verdict or an empty sub-document', () => {
        expect(manualNameReviewDecision(buildRecord({ manualNameReview: {} }))).toBeNull();
        expect(manualNameReviewDecision(buildRecord({}))).toBeNull();
        expect(manualNameReviewDecision(null)).toBeNull();
    });
});
