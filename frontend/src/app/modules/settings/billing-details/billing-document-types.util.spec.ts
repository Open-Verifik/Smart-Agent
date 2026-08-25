import { describe, expect, it } from 'vitest';
import {
    filterBillingDocumentTypes,
    getBillingDocumentTypeValues,
    getBillingDocumentTypes,
    isBillingDocumentTypeAllowed,
} from './billing-document-types.util';

describe('billing-document-types.util', () => {
    it('lists Colombia person types as CC/CE/PPT/PA/PEP', () => {
        expect(getBillingDocumentTypeValues('Colombia', 'person')).toEqual([
            'CC',
            'CE',
            'PPT',
            'PA',
            'PEP',
        ]);
        expect(getBillingDocumentTypeValues('CO', 'person')).toEqual([
            'CC',
            'CE',
            'PPT',
            'PA',
            'PEP',
        ]);
    });

    it('lists Peru person as DNI and business as RUC', () => {
        expect(getBillingDocumentTypeValues('Peru', 'person')).toEqual(['DNI']);
        expect(getBillingDocumentTypeValues('PE', 'business')).toEqual(['RUC']);
    });

    it('lists Chile person as RUN/RUT and business as RUT', () => {
        expect(getBillingDocumentTypeValues('Chile', 'person')).toEqual(['RUN', 'RUT']);
        expect(getBillingDocumentTypeValues('CL', 'business')).toEqual(['RUT']);
    });

    it('falls back to INTERNATIONAL_TAX for unknown business countries', () => {
        expect(getBillingDocumentTypeValues('United States', 'business')).toEqual([
            'INTERNATIONAL_TAX',
        ]);
    });

    it('maps values to i18n labels', () => {
        expect(getBillingDocumentTypes('Colombia', 'business')).toEqual([
            { value: 'NIT', label: 'settings.billing.document_types.NIT' },
        ]);
    });

    it('rejects a document type that does not belong to the country', () => {
        expect(isBillingDocumentTypeAllowed('Colombia', 'DNI', 'person')).toBe(false);
        expect(isBillingDocumentTypeAllowed('Colombia', 'PA', 'person')).toBe(true);
        expect(isBillingDocumentTypeAllowed('Peru', 'DNI', 'person')).toBe(true);
        expect(isBillingDocumentTypeAllowed('Chile', 'RUT', 'business')).toBe(true);
    });

    it('shows every Colombia type when the selected code is already CC', () => {
        const source = getBillingDocumentTypes('Colombia', 'person');
        const translate = (key: string) => key;

        expect(filterBillingDocumentTypes(source, 'CC', translate).map((option) => option.value)).toEqual([
            'CC',
            'CE',
            'PPT',
            'PA',
            'PEP',
        ]);
    });
});
