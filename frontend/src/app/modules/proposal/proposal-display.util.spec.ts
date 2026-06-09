import { resolveEffectiveTier } from './proposal-display.util';
import { PublicProposal } from './proposal.service';

const baseProposal = {
    monthlyVolume: 10000,
    salesOverrideTier: null,
    recommendedTier: 'enterprise',
    visibleTiers: ['starter'],
    pricingSummary: {
        starter: {
            avgUnitPrice: 0.07,
            planSubscriptionFee: 49,
            planQueryLimit: 140,
            expectedQueries: 10000,
            usageCost: 700,
            quotedMonthlyTotal: 700,
            totalMonthlyEstimate: 700,
        },
        enterprise: {
            avgUnitPrice: 0.07,
            planSubscriptionFee: 499,
            planQueryLimit: 8667,
            expectedQueries: 10000,
            usageCost: 700,
            quotedMonthlyTotal: 700,
            totalMonthlyEstimate: 700,
        },
    },
} as PublicProposal;

describe('resolveEffectiveTier', () => {
    it('should use the only visible tier when catalog recommendation is hidden', () => {
        expect(resolveEffectiveTier(baseProposal)).toBe('starter');
    });

    it('should keep the catalog recommendation when it remains visible', () => {
        expect(
            resolveEffectiveTier({
                ...baseProposal,
                visibleTiers: ['starter', 'enterprise'],
            })
        ).toBe('enterprise');
    });
});
