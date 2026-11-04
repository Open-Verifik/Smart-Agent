import { describe, expect, it, vi } from 'vitest';
import {
    CriminalCheckDialogData,
} from './criminal-check-detail-dialog.component';
import {
    DEFAULT_ENROLL_LOOKUP_DISCOUNT_PERCENT,
    discountedOveragePrice,
} from '../../../../../plans/smart-enroll-usage.util';
import {
    criminalCheckDocs,
    criminalCheckDocsUrl,
    getCriminalCheckEndpointDetail,
    getExtractionHint,
} from '../criminal-check-catalog.util';

describe('CriminalCheckDetailDialogComponent logic and catalog integration', () => {
    const mockData: CriminalCheckDialogData = {
        check: {
            value: 'colombia_api_inpec',
            titleKey: 'smartEnrollProjects.setup.documents.screening.checks.colombia.inpec.title',
            descriptionKey: 'smartEnrollProjects.setup.documents.screening.checks.colombia.inpec.description',
            sourceKey: 'smartEnrollProjects.setup.documents.screening.checks.colombia.inpec.source',
            aboutKey: 'smartEnrollProjects.setup.documents.screening.checks.colombia.inpec.about',
            docs: criminalCheckDocs.colombia_api_inpec,
        },
        isSelected: false,
        onToggle: vi.fn(),
    };

    it('extracts complete detail data for dialog rendering', () => {
        const detail = getCriminalCheckEndpointDetail(mockData.check.value, 'en');
        expect(detail).not.toBeNull();
        expect(detail?.method).toBe('GET');
        expect(detail?.url).toBe('v2/co/inpec');
        expect(detail?.endpointPath).toBe('/v2/co/inpec');
        expect(detail?.price).toBe(0.5);
        expect(detail?.params.length).toBeGreaterThan(0);
        expect(detail?.responses.length).toBeGreaterThanOrEqual(4);
        expect(detail?.requestExamples.length).toBe(3);
    });

    it('identifies positive hits and clean records across response samples', () => {
        const detail = getCriminalCheckEndpointDetail(mockData.check.value, 'en');
        expect(detail).not.toBeNull();

        const hitSample = detail?.responses.find((r) => r.isHit);
        expect(hitSample).toBeDefined();
        expect(hitSample?.label).toContain('Record Found');

        const cleanSample = detail?.responses.find((r) => r.isClean);
        expect(cleanSample).toBeDefined();
        expect(cleanSample?.label).toContain('No Records');
    });

    it('generates multi-language code snippets for direct API requests', () => {
        const detail = getCriminalCheckEndpointDetail(mockData.check.value, 'en');
        const curl = detail?.requestExamples.find((ex) => ex.lang === 'curl');
        const js = detail?.requestExamples.find((ex) => ex.lang === 'javascript');
        const py = detail?.requestExamples.find((ex) => ex.lang === 'python');

        expect(curl?.code).toContain('curl -X GET');
        expect(curl?.code).toContain('https://api.verifik.co/v2/co/inpec');
        expect(js?.code).toContain('fetch("https://api.verifik.co/v2/co/inpec');
        expect(py?.code).toContain('requests.get');
    });

    it('extracts correct automated SmartEnroll mapping hints', () => {
        const hintEn = getExtractionHint('documentNumber', 'en');
        const hintEs = getExtractionHint('documentNumber', 'es');
        expect(hintEn).toContain('Auto-extracted from verified identity document');
        expect(hintEs).toContain('Extraído automáticamente del documento');
    });

    it('formats docs URL and internal Postman URL accurately', () => {
        const docsEn = criminalCheckDocsUrl(mockData.check.docs, 'en');
        const docsEs = criminalCheckDocsUrl(mockData.check.docs, 'es');
        expect(docsEn).toBe('https://docs.verifik.co/background-check/colombia-inpec');
        expect(docsEs).toBe('https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-inpec');
    });

    it('handles toggle callback correctly', () => {
        let isSelected = mockData.isSelected;
        const toggle = () => {
            isSelected = !isSelected;
            mockData.onToggle?.();
        };

        expect(isSelected).toBe(false);
        toggle();
        expect(isSelected).toBe(true);
        expect(mockData.onToggle).toHaveBeenCalled();
    });

    it('calculates SmartEnroll 50% discount price correctly', () => {
        const sicaacDetail = getCriminalCheckEndpointDetail('colombia_api_sicaac_cases', 'en');
        expect(sicaacDetail?.price).toBe(1);
        const sicaacDiscounted = discountedOveragePrice(sicaacDetail?.price, DEFAULT_ENROLL_LOOKUP_DISCOUNT_PERCENT);
        expect(sicaacDiscounted).toBe(0.5);

        const inpecDetail = getCriminalCheckEndpointDetail('colombia_api_inpec', 'en');
        expect(inpecDetail?.price).toBe(0.5);
        const inpecDiscounted = discountedOveragePrice(inpecDetail?.price, DEFAULT_ENROLL_LOOKUP_DISCOUNT_PERCENT);
        expect(inpecDiscounted).toBe(0.25);
    });

    it('groups parameters for endpoints with XOR search modes like Interpol', () => {
        const interpolDetail = getCriminalCheckEndpointDetail('world_api_interpol', 'en');
        expect(interpolDetail?.hasSearchGroups).toBe(true);
        expect(interpolDetail?.paramGroups.length).toBe(2);

        const [optA, optB] = interpolDetail!.paramGroups;
        expect(optA.groupType).toBe('name');
        expect(optA.titleFallback).toContain('Option A');
        expect(optA.params.map((p) => p.field)).toEqual(['fullName']);
        expect(optA.params[0].requirementKind).toBe('required');

        expect(optB.groupType).toBe('document');
        expect(optB.titleFallback).toContain('Option B');
        expect(optB.params.map((p) => p.field)).toEqual([
            'documentType',
            'documentNumber',
            'dateOfBirth',
            'expirationDate',
        ]);
        expect(optB.params[0].requirementKind).toBe('required');
        expect(optB.params[1].requirementKind).toBe('required');
        expect(optB.params[2].requirementKind).toBe('conditional');
        expect(optB.params[3].requirementKind).toBe('conditional');
    });
});
