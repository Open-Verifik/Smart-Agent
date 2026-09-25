import { describe, expect, it } from 'vitest';
import { featureGroup, isSmartBatchCatalogFeature } from './feature-group.util';

const WHATSAPP_DESCRIPTION =
    "Send WhatsApp messages globally through Verifik's gateway. Provide the recipient phone number, template, and variables.";

describe('featureGroup', () => {
    it('does not treat a WhatsApp template description as a vehicle', () => {
        const whatsapp = {
            code: 'communication_global_messaging_whatsapp',
            name: 'Global - WhatsApp Messaging',
            description: WHATSAPP_DESCRIPTION,
            baseCategory: 'messaging',
            group: 'communication',
            checkListDomains: ['people'],
        };

        expect(featureGroup(whatsapp)).not.toBe('vehicle');
        expect(featureGroup(whatsapp)).toBe('citizen');
        expect(isSmartBatchCatalogFeature(whatsapp)).toBe(false);
    });

    it('puts background checks such as ONU and Interpol under citizen', () => {
        expect(
            featureGroup({
                code: 'world_api_onu',
                name: 'Global - ONU Background Check',
                description: 'Verify whether a person or entity appears on a sanctions list of companies.',
                baseCategory: 'background_check',
                group: 'apiRequest',
                checkListDomains: ['people'],
            })
        ).toBe('citizen');
        expect(
            featureGroup({
                code: 'world_api_interpol',
                baseCategory: 'background_check',
                description: 'Search the criminal background. A definition of identity is returned.',
                group: 'apiRequest',
            })
        ).toBe('citizen');
    });

    it('maps business to company and transit to vehicle', () => {
        expect(featureGroup({ baseCategory: 'business', group: 'apiRequest' })).toBe('company');
        expect(featureGroup({ baseCategory: 'transit', group: 'apiRequest' })).toBe('vehicle');
        expect(
            featureGroup({
                baseCategory: 'identity',
                checkListDomains: ['vehicles'],
                group: 'apiRequest',
            })
        ).toBe('vehicle');
    });

    it('does not classify a description that contains identity as a company', () => {
        expect(
            featureGroup({
                name: 'OCR Document Scan Studio',
                description: 'Receive structured identity fields plus raw extracted text.',
                baseCategory: 'ocr',
                group: 'biometrics',
            })
        ).not.toBe('company');
        expect(
            featureGroup({
                description: 'Verify identity with a face comparison.',
                checkListDomains: ['people'],
            })
        ).toBe('other');
    });

    it('keeps only apiRequest features in the Smart Batch catalog', () => {
        expect(isSmartBatchCatalogFeature({ group: 'apiRequest' })).toBe(true);
        expect(isSmartBatchCatalogFeature({ group: 'biometrics' })).toBe(false);
        expect(isSmartBatchCatalogFeature({ group: 'communication' })).toBe(false);
        expect(isSmartBatchCatalogFeature({})).toBe(false);
    });
});
