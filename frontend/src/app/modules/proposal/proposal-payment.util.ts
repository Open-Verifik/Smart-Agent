export const roundUnitPrice = (value?: number | null): number | undefined => {
    if (value == null || Number.isNaN(value)) return undefined;

    return Math.round(value * 100) / 100;
};

export const unitPricesDiffer = (left?: number | null, right?: number | null): boolean => {
    const a = roundUnitPrice(left);
    const b = roundUnitPrice(right);

    if (a == null && b == null) return false;
    if (a == null || b == null) return true;

    return a !== b;
};

export type ProposalPaymentOptionType = 'monthly' | 'quarterly' | 'semi_annual' | 'annual';

export interface ProposalPaymentOption {
    type: ProposalPaymentOptionType;
    enabled?: boolean;
    monthsInPeriod: number;
    monthsCharged: number;
    totalAmount: number;
}

const PAYMENT_OPTION_CATALOG: Array<{
    type: ProposalPaymentOptionType;
    monthsInPeriod: number;
    monthsCharged: number;
}> = [
    { type: 'monthly', monthsInPeriod: 1, monthsCharged: 1 },
    { type: 'quarterly', monthsInPeriod: 3, monthsCharged: 3 },
    { type: 'semi_annual', monthsInPeriod: 6, monthsCharged: 5 },
    { type: 'annual', monthsInPeriod: 12, monthsCharged: 10 },
];

export const getPromoDiscountAmount = (option: ProposalPaymentOption): number => {
    const freeMonths = (option.monthsInPeriod || 0) - (option.monthsCharged || 0);

    if (freeMonths <= 0 || !option.monthsCharged) return 0;

    const monthlyRate = option.totalAmount / option.monthsCharged;

    return Math.round(monthlyRate * freeMonths * 100) / 100;
};

export const buildPaymentOptionsFromMonthlyTotal = (
    monthlyTotal: number,
    _monthlyVolume: number,
    enabledTypes: ProposalPaymentOptionType[] = PAYMENT_OPTION_CATALOG.map((option) => option.type)
): ProposalPaymentOption[] => {
    const total = Math.max(0, Number(monthlyTotal) || 0);

    return PAYMENT_OPTION_CATALOG.filter((option) => enabledTypes.includes(option.type)).map(
        (option) => ({
            type: option.type,
            enabled: true,
            monthsInPeriod: option.monthsInPeriod,
            monthsCharged: option.monthsCharged,
            totalAmount: Math.round(total * option.monthsCharged * 100) / 100,
        })
    );
};
