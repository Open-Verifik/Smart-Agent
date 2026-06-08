import { describe, expect, it } from 'vitest';

import {
    buildScopeSummary,
    showCommercialNotes,
    showGeneralitiesSection,
    showScopeSection,
    showSlaSection,
} from './proposal-document.util';
import { PublicProposal } from './proposal.service';

const baseProposal = (): PublicProposal =>
    ({
        _id: 'proposal-1',
        status: 'sent',
        monthlyVolume: 100,
        recommendedTier: 'plus',
        selectedLineItems: [],
    }) as PublicProposal;

describe('proposal-document.util section visibility', () => {
    it('shows all sections when flags are undefined', () => {
        const proposal = baseProposal();

        expect(showScopeSection(proposal)).toBe(true);
        expect(showSlaSection(proposal)).toBe(true);
        expect(showGeneralitiesSection(proposal)).toBe(true);
        expect(showCommercialNotes(proposal)).toBe(true);
    });

    it('shows all sections when flags are explicitly true', () => {
        const proposal = {
            ...baseProposal(),
            includeScopeSection: true,
            includeSlaSection: true,
            includeGeneralitiesSection: true,
            includeCommercialNotes: true,
        };

        expect(showScopeSection(proposal)).toBe(true);
        expect(showSlaSection(proposal)).toBe(true);
        expect(showGeneralitiesSection(proposal)).toBe(true);
        expect(showCommercialNotes(proposal)).toBe(true);
    });

    it('hides all sections when flags are explicitly false', () => {
        const proposal = {
            ...baseProposal(),
            includeScopeSection: false,
            includeSlaSection: false,
            includeGeneralitiesSection: false,
            includeCommercialNotes: false,
        };

        expect(showScopeSection(proposal)).toBe(false);
        expect(showSlaSection(proposal)).toBe(false);
        expect(showGeneralitiesSection(proposal)).toBe(false);
        expect(showCommercialNotes(proposal)).toBe(false);
    });

    it('only hides sections explicitly set to false', () => {
        const proposal = {
            ...baseProposal(),
            includeScopeSection: false,
            includeSlaSection: true,
            includeGeneralitiesSection: false,
            includeCommercialNotes: true,
        };

        expect(showScopeSection(proposal)).toBe(false);
        expect(showSlaSection(proposal)).toBe(true);
        expect(showGeneralitiesSection(proposal)).toBe(false);
        expect(showCommercialNotes(proposal)).toBe(true);
    });
});

describe('buildScopeSummary', () => {
    it('deduplicates countries and categories from selected line items', () => {
        const proposal = {
            ...baseProposal(),
            selectedLineItems: [
                {
                    selected: true,
                    country: 'co',
                    category: 'apiRequest',
                    serviceName: 'Colombia CC',
                },
                {
                    selected: true,
                    country: 'co',
                    category: 'biometrics',
                    serviceName: 'Colombia Bio',
                },
                {
                    selected: false,
                    country: 'mx',
                    category: 'apiRequest',
                    serviceName: 'Ignored',
                },
            ],
        };

        expect(buildScopeSummary(proposal)).toEqual({
            countries: ['co'],
            endpointCount: 2,
            categories: ['apiRequest', 'biometrics'],
        });
    });
});
