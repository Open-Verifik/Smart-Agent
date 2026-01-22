export type ChangesInPrice = {
    active: boolean;
    addOn: string;
    baseCategory?: string;
    codes?: string[];
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
    amount: number;
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