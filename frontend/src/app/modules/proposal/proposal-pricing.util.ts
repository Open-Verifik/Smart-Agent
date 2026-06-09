import {
    buildPaymentOptionsFromMonthlyTotal,
    ProposalPaymentOption,
    ProposalPaymentOptionType,
    roundUnitPrice,
    unitPricesDiffer,
} from './proposal-payment.util';
import { resolveEffectiveTier } from './proposal-display.util';
import { ProposalTier, PublicProposal } from './proposal.service';

export type ProposalTierSummary = NonNullable<PublicProposal['pricingSummary']>[ProposalTier];

const DEFAULT_PAYMENT_TYPES: ProposalPaymentOptionType[] = [
    'monthly',
    'quarterly',
    'semi_annual',
    'annual',
];

export const getEffectiveTier = (proposal: PublicProposal): ProposalTier => {
    return resolveEffectiveTier(proposal);
};

export const getSelectedLineItems = (proposal: PublicProposal): PublicProposal['selectedLineItems'] => {
    return (proposal.selectedLineItems || []).filter((item) => item.selected !== false);
};

const hasStoredPaymentTotals = (options?: ProposalPaymentOption[]): boolean => {
    return Boolean(options?.some((option) => (option.totalAmount ?? 0) > 0));
};

export const getOurOfferPaymentOptions = (proposal: PublicProposal): ProposalPaymentOption[] => {
    if (hasStoredPaymentTotals(proposal.paymentOptions)) {
        return proposal.paymentOptions || [];
    }

    const tier = getEffectiveTier(proposal);
    const row = proposal.pricingSummary?.[tier];
    const monthlyTotal = row?.quotedMonthlyTotal ?? row?.totalMonthlyEstimate;

    if (monthlyTotal == null) return proposal.paymentOptions || [];

    return buildPaymentOptionsFromMonthlyTotal(
        monthlyTotal,
        proposal.monthlyVolume,
        proposal.enabledPaymentTypes || DEFAULT_PAYMENT_TYPES
    );
};

export const hasCounterLineItemPrices = (proposal: PublicProposal, tier: ProposalTier): boolean => {
    const lineItems = proposal.counterOffer?.lineItems || [];

    return lineItems.some((item) => {
        const clientPrice = roundUnitPrice(item.unitPrices?.[tier]);

        if (clientPrice == null) return false;

        const ourItem = getSelectedLineItems(proposal).find(
            (row) => String(row.appFeature) === String(item.appFeature)
        );
        const ourPrice = roundUnitPrice(ourItem?.unitPrices?.[tier]);

        return unitPricesDiffer(clientPrice, ourPrice);
    });
};

const computeCounterTierSummary = (
    proposal: PublicProposal,
    tier: ProposalTier
): ProposalTierSummary | null => {
    if (!hasCounterLineItemPrices(proposal, tier)) return null;

    const volume = proposal.counterOffer?.monthlyVolume ?? proposal.monthlyVolume ?? 0;
    const planRow = proposal.pricingSummary?.[tier];

    if (!planRow || !volume) return null;

    const counterByFeature = new Map(
        (proposal.counterOffer?.lineItems || []).map((item) => [
            String(item.appFeature),
            item.unitPrices,
        ])
    );

    const prices = getSelectedLineItems(proposal)
        .map((item) => {
            const clientPrices = counterByFeature.get(String(item.appFeature));
            const clientPrice = roundUnitPrice(clientPrices?.[tier]);

            if (clientPrice != null && clientPrice > 0) return clientPrice;

            return roundUnitPrice(item.unitPrices?.[tier]);
        })
        .filter((price): price is number => price != null && price > 0);

    if (!prices.length) return null;

    const avgUnitPrice =
        Math.round((prices.reduce((sum, price) => sum + price, 0) / prices.length) * 100) / 100;
    const usageCost = Math.round(volume * avgUnitPrice * 100) / 100;
    const quotedMonthlyTotal =
        Math.round(Math.max(planRow.planSubscriptionFee ?? 0, usageCost) * 100) / 100;

    return {
        avgUnitPrice,
        planSubscriptionFee: planRow.planSubscriptionFee,
        planQueryLimit: planRow.planQueryLimit,
        expectedQueries: volume,
        usageCost,
        quotedMonthlyTotal,
        totalMonthlyEstimate: quotedMonthlyTotal,
    };
};

export const resolveCounterTierSummary = (
    proposal: PublicProposal,
    tier: ProposalTier
): ProposalTierSummary | null => {
    const stored = proposal.counterOffer?.pricingSummary?.[tier];
    const storedTotal = stored?.quotedMonthlyTotal ?? stored?.totalMonthlyEstimate;

    if (storedTotal != null && storedTotal > 0) {
        return stored;
    }

    const computed = computeCounterTierSummary(proposal, tier);

    if (computed) return computed;

    return stored ?? null;
};

export const getCounterMonthlyTotal = (proposal: PublicProposal): number | undefined => {
    const tier = getEffectiveTier(proposal);
    const row = resolveCounterTierSummary(proposal, tier);

    if (!row) return undefined;

    return row.quotedMonthlyTotal ?? row.totalMonthlyEstimate;
};

export const getCounterPaymentOptions = (proposal: PublicProposal): ProposalPaymentOption[] => {
    const tier = getEffectiveTier(proposal);
    const monthlyTotal = getCounterMonthlyTotal(proposal);
    const monthlyVolume = proposal.counterOffer?.monthlyVolume ?? proposal.monthlyVolume;
    const enabledTypes = proposal.enabledPaymentTypes || DEFAULT_PAYMENT_TYPES;
    const stored = proposal.counterOffer?.paymentOptions;

    if (monthlyTotal != null && monthlyTotal > 0) {
        const computed = buildPaymentOptionsFromMonthlyTotal(monthlyTotal, monthlyVolume, enabledTypes);

        if (hasStoredPaymentTotals(stored)) {
            return stored || computed;
        }

        return computed;
    }

    if (stored?.length) return stored;

    const ourOfferTotal = proposal.pricingSummary?.[tier]?.quotedMonthlyTotal
        ?? proposal.pricingSummary?.[tier]?.totalMonthlyEstimate;

    if (ourOfferTotal != null && ourOfferTotal > 0) {
        return buildPaymentOptionsFromMonthlyTotal(ourOfferTotal, monthlyVolume, enabledTypes);
    }

    return getOurOfferPaymentOptions(proposal);
};

export const getActivePaymentOptions = (
    proposal: PublicProposal,
    options?: { isCounterOffer?: boolean }
): ProposalPaymentOption[] => {
    if (options?.isCounterOffer) {
        return getCounterPaymentOptions(proposal);
    }

    return getOurOfferPaymentOptions(proposal);
};
