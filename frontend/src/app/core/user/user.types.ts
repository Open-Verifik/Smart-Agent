export interface SmartAgentWeekOneUsd50Promotion {
    kind: 'smart_agent_week1_usd50';
    eligible: boolean;
    consumed: boolean;
    expiresAt: string;
    /** PAYG floor: any first-week purchase at or above this USD amount qualifies. */
    minPurchaseUsd: number;
    /** Matching bonus is capped at this USD amount. */
    maxBonusUsd: number;
}

/** Win-back offer: next recharge or first subscription payment grants multiplied credits. */
export interface BringBackOffer {
    kind: 'bring_back';
    tier: 'double' | 'triple';
    multiplier: 2 | 3;
    eligible: boolean;
    expiresAt: string;
    proposedAt?: string;
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
    /** Active bring-back win-back offer from session (proposed, not expired). */
    bringBackOffer?: BringBackOffer;
    /** Welcome credits reserved at signup; spendable only after approval. */
    pendingWelcomeCredits?: PendingWelcomeCredits;
    /** Present on session user from Client Settings (see backend authentication.module). */
    settings?: ClientSettingsSnapshot;
    /** When false, recharge / verification gating may apply (see Client model). */
    canRecharge?: boolean;
    /** Latest client approval request status from session API. */
    approvalRequestStatus?: 'requested' | 'approved' | 'rejected';
}
