export interface SmartAgentWeekOneUsd50Promotion {
    kind: 'smart_agent_week1_usd50';
    eligible: boolean;
    consumed: boolean;
    expiresAt: string;
    /** All USD amounts that qualify for the first-week double-credit promo. */
    purchaseUsdAmounts: number[];
}

/** Signup welcome credits reserved until account approval (`canRecharge`). */
export interface PendingWelcomeCredits {
    amount: number;
    lockedUntilApproval: boolean;
    message?: string;
}

export interface ClientSettingsSnapshot {
    _id?: string;
    sandboxMode?: boolean;
    overrideConditions?: OverrideConditionsSnapshot;
}

export interface OverrideConditionsSnapshot {
    requiresSmartEnrollSubscription?: boolean;
    requiresSmartAccessSubscription?: boolean;
    staffSeatLimit?: number | null;
}

export interface User {
    id?: string;
    _id?: string;
    name?: string;
    email?: string;
    avatar?: string;
    role?: string;
    credits?: number;
    language?: string;
    promotion?: SmartAgentWeekOneUsd50Promotion;
    /** Welcome credits reserved at signup; spendable only after approval. */
    pendingWelcomeCredits?: PendingWelcomeCredits;
    /** Present on session user from Client Settings (see backend authentication.module). */
    settings?: ClientSettingsSnapshot;
    /** When false, recharge / verification gating may apply (see Client model). */
    canRecharge?: boolean;
    /** Latest client approval request status from session API. */
    approvalRequestStatus?: 'requested' | 'approved' | 'rejected';
}
