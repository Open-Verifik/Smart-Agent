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

const resolveUsageUnitPrice = (
    prices: number[],
    mode: 'average' | 'combo' = 'average'
): { usageUnitPrice: number; avgUnitPrice: number } => {
    if (!prices.length) {
        return { usageUnitPrice: 0, avgUnitPrice: 0 };
    }

    const sum = prices.reduce((total, price) => total + price, 0);
    const avgUnitPrice = Math.round((sum / prices.length) * 100) / 100;
    const usageUnitPrice =
        mode === 'combo'
            ? Math.round(sum * 100) / 100
            : avgUnitPrice;

    return { usageUnitPrice, avgUnitPrice };
};

export type UsagePricingMode = 'average' | 'combo';

export type VolumeMode = 'global' | 'perEndpoint';

export const getEndpointVolume = (
    item: PublicProposal['selectedLineItems'][number]
): number => {
    return Math.max(0, Number(item.monthlyVolume) || 0);
};

export const computeTotalVolume = (
    items: PublicProposal['selectedLineItems'],
    mode: VolumeMode = 'global',
    globalVolume = 0
): number => {
    if (mode === 'perEndpoint') {
        return (items || [])
            .filter((item) => item.selected !== false)
            .reduce((total, item) => total + getEndpointVolume(item), 0);
    }

    return Math.max(0, Number(globalVolume) || 0);
};

export const formatPerEndpointUsageBreakdown = (
    items: PublicProposal['selectedLineItems'],
    tier: ProposalTier,
    formatPrice: (value: number) => string
): string => {
    const parts = (items || [])
        .filter((item) => item.selected !== false)
        .map((item) => {
            const volume = getEndpointVolume(item);
            const price = roundUnitPrice(item.unitPrices?.[tier]);

            if (!volume || price == null) return null;

            return `(${volume.toLocaleString()} × ${formatPrice(price)})`;
        })
        .filter((part): part is string => Boolean(part));

    if (!parts.length) return '';

    const total = (items || [])
        .filter((item) => item.selected !== false)
        .reduce((sum, item) => {
            const volume = getEndpointVolume(item);
            const price = roundUnitPrice(item.unitPrices?.[tier]) ?? 0;

            return sum + volume * price;
        }, 0);

    return `${parts.join(' + ')} = ${formatPrice(Math.round(total * 100) / 100)}`;
};

export const getSelectedUnitPricesForTier = (
    items: PublicProposal['selectedLineItems'],
    tier: ProposalTier
): number[] => {
    return (items || [])
        .filter((item) => item.selected !== false)
        .map((item) => roundUnitPrice(item.unitPrices?.[tier]))
        .filter((price): price is number => price != null && price > 0);
};

export const formatUsageRateBreakdown = (
    prices: number[],
    mode: UsagePricingMode,
    formatPrice: (value: number) => string
): string => {
    if (!prices.length) return '';

    const { usageUnitPrice } = resolveUsageUnitPrice(prices, mode);
    const formattedPrices = prices.map(formatPrice);

    if (mode === 'combo') {
        return `${formattedPrices.join(' + ')} = ${formatPrice(usageUnitPrice)}`;
    }

    return `(${formattedPrices.join(' + ')}) ÷ ${prices.length} = ${formatPrice(usageUnitPrice)}`;
};

export const formatUsageCellHint = (
    items: PublicProposal['selectedLineItems'],
    tier: ProposalTier,
    volume: number,
    mode: UsagePricingMode,
    formatPrice: (value: number) => string,
    volumeMode: VolumeMode = 'global'
): string => {
    if (volumeMode === 'perEndpoint') {
        return formatPerEndpointUsageBreakdown(items, tier, formatPrice);
    }

    const prices = getSelectedUnitPricesForTier(items, tier);

    if (!prices.length || !volume) return '';

    const breakdown = formatUsageRateBreakdown(prices, mode, formatPrice);

    return `${breakdown} × ${volume.toLocaleString()}`;
};

const DEFAULT_PAYMENT_TYPES: ProposalPaymentOptionType[] = [
    'monthly',
    'quarterly',
    'semi_annual',
    'annual',
];

export const getEffectiveTier = (proposal: PublicProposal): ProposalTier => {
    return resolveEffectiveTier(proposal);
};

export const sortLineItemsByOrder = (
    items: PublicProposal['selectedLineItems']
): PublicProposal['selectedLineItems'] => {
    return [...(items || [])].sort((a, b) => {
        const orderA = Number(a.order);
        const orderB = Number(b.order);
        const hasOrderA = Number.isFinite(orderA);
        const hasOrderB = Number.isFinite(orderB);

        if (hasOrderA && hasOrderB && orderA !== orderB) {
            return orderA - orderB;
        }

        if (hasOrderA !== hasOrderB) {
            return hasOrderA ? -1 : 1;
        }

        return String(a.serviceName || '').localeCompare(String(b.serviceName || ''));
    });
};

export const getSelectedLineItems = (proposal: PublicProposal): PublicProposal['selectedLineItems'] => {
    const selected = (proposal.selectedLineItems || []).filter((item) => item.selected !== false);

    return sortLineItemsByOrder(selected);
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

    const volumeMode = proposal.volumeMode === 'perEndpoint' ? 'perEndpoint' : 'global';
    const mode = proposal.usagePricingMode === 'combo' ? 'combo' : 'average';

    if (volumeMode === 'perEndpoint') {
        const selected = getSelectedLineItems(proposal);
        let usageCost = 0;

        for (const item of selected) {
            const counterPrices = counterByFeature.get(String(item.appFeature));
            const clientPrice = roundUnitPrice(counterPrices?.[tier]);
            const price =
                clientPrice != null && clientPrice > 0
                    ? clientPrice
                    : roundUnitPrice(item.unitPrices?.[tier]);

            if (price != null && price > 0) {
                usageCost += getEndpointVolume(item) * price;
            }
        }

        usageCost = Math.round(usageCost * 100) / 100;
        const usageUnitPrice =
            volume > 0 ? Math.round((usageCost / volume) * 100) / 100 : 0;
        const avgUnitPrice = usageUnitPrice;
        const quotedMonthlyTotal =
            Math.round(Math.max(planRow.planSubscriptionFee ?? 0, usageCost) * 100) / 100;

        return {
            avgUnitPrice,
            usageUnitPrice,
            planSubscriptionFee: planRow.planSubscriptionFee,
            planQueryLimit: planRow.planQueryLimit,
            expectedQueries: volume,
            usageCost,
            quotedMonthlyTotal,
            totalMonthlyEstimate: quotedMonthlyTotal,
        };
    }

    const { usageUnitPrice, avgUnitPrice } = resolveUsageUnitPrice(prices, mode);
    const usageCost = Math.round(volume * usageUnitPrice * 100) / 100;
    const quotedMonthlyTotal =
        Math.round(Math.max(planRow.planSubscriptionFee ?? 0, usageCost) * 100) / 100;

    return {
        avgUnitPrice,
        usageUnitPrice,
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
