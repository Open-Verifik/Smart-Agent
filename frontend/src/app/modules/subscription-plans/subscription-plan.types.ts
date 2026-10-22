export type ChangesInPrice = {
    active: boolean;
    addOn: string;
    baseCategory?: string;
    codes?: string[];
    code?: string;
    count?: number;
    discount?: number;
    group?: string;
    price?: number;
    type?: "percent" | "amount";
};

export type SubscriptionPlan = {
    _id: string;
    __v: number;
    active: boolean;
    amount?: number;
    amountByMonth?: number;
    code: string;
    createdAt: string;
    currency: string;
    interval: string;
    intervalCount: number;
    isSmartcheck: boolean;
    lastUpdatedBy: string;
    limit: number;
    name: string;
    stripePrice: string;
    stripeProduct: string;
    trialDays: number;
    updatedAt: string;
    visible: boolean;
    discount?: ChangesInPrice;
    isDowngrade?: boolean;
    subtitle?: string; // Plan subtitle for display
    changesInPrices: ChangesInPrice[];
    changesLeft?: any[]; // Formatted changes for display
    changesRight?: any[]; // Formatted changes for display
    projects: {
        smartLinkLimit: number;
        smartAccessLimit: number;
        smartEnrollLimit: number;
        datAPILimit: number;
        globally: number;
    };
};

export type ClientSubscription = {
    _id: string;
    client: string;
    subscriptionPlan: SubscriptionPlan;
    startDate: string;
    endDate: string;
    autoRenew: boolean;
    active: boolean;
    paymentFailedAt?: string;
    amount?: number;
    limit?: number;
    name: string;
    interval: string;
    amountByMonth?: number;
};

export type PlanStyle = {
    'button-bg': string;
    'button-border': string;
    bg: string;
    text: string;
    code?: string;
    amount?: number;
    name?: string;
    subtitle?: string;
    key?: string;
    isDowngrade?: boolean;
};

export type BillingConfig = {
    invoiceSettings?: {
        invoiceType: string;
    };
    autoCharge?: {
        hasAutoCharge: boolean;
    };
};

export type MonthlyUsageMetric = {
    _id: { year: number; month: number };
    total: number;
    ok: number;
    failed: number;
};

/** Volume range (requests/month, inclusive) where a plan has the lowest monthly total. */
export type PlanZone = {
    planId: string;
    name: string;
    from: number;
    to: number;
};

export type AppFeature = {
    _id: string;
    code: string;
    name: string;
    price: number;
    smartCheckPrice?: number;
    group?: string;
    baseCategory?: string;
    country?: string;
    url?: string;
};