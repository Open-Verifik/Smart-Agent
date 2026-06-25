import { PublicProposal, ProposalTier } from './proposal.service';

const ROMANO_PRICE_LANGUAGES = new Set(['es', 'pt']);

export const resolveProposalPriceLocale = (language?: string | null): string => {
    if (language && ROMANO_PRICE_LANGUAGES.has(language)) {
        return 'es-CO';
    }

    return 'en-US';
};

export const formatProposalCurrency = (
    value?: number | null,
    language?: string | null
): string => {
    if (value == null) return '—';

    const formatted = new Intl.NumberFormat(resolveProposalPriceLocale(language), {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);

    return `$${formatted}`;
};

export const PROPOSAL_TIERS: ProposalTier[] = [
    'starter',
    'basic',
    'plus',
    'business',
    'enterprise',
];

export const resolveAutoViableTiers = (
    proposal: Pick<PublicProposal, 'monthlyVolume' | 'pricingSummary'>,
    tiers: ProposalTier[] = PROPOSAL_TIERS
): ProposalTier[] => {
    const volume = proposal.monthlyVolume || 0;
    const viable = tiers.filter((tier) => {
        const limit = proposal.pricingSummary?.[tier]?.planQueryLimit;

        return limit != null && volume <= limit;
    });

    return viable.length ? viable : tiers;
};

export const resolveClientDisplayTiers = (
    proposal: Pick<PublicProposal, 'monthlyVolume' | 'pricingSummary' | 'visibleTiers'>,
    tiers: ProposalTier[] = PROPOSAL_TIERS
): ProposalTier[] => {
    const configured = (proposal.visibleTiers || []).filter((tier) => tiers.includes(tier));

    if (configured.length) {
        return tiers.filter((tier) => configured.includes(tier));
    }

    return resolveAutoViableTiers(proposal, tiers);
};

export const resolveEffectiveTier = (
    proposal: Pick<
        PublicProposal,
        'salesOverrideTier' | 'recommendedTier' | 'monthlyVolume' | 'pricingSummary' | 'visibleTiers'
    >,
    tiers: ProposalTier[] = PROPOSAL_TIERS
): ProposalTier => {
    const preferred = proposal.salesOverrideTier || proposal.recommendedTier || 'starter';
    const clientTiers = resolveClientDisplayTiers(proposal, tiers);

    if (clientTiers.includes(preferred)) {
        return preferred;
    }

    return clientTiers[0] || preferred;
};
