export interface SmartAgentWeekOneUsd50Promotion {
    kind: 'smart_agent_week1_usd50';
    eligible: boolean;
    consumed: boolean;
    expiresAt: string;
    purchaseUsdAmount: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role?: string;
    credits?: number;
    language?: string;
    promotion?: SmartAgentWeekOneUsd50Promotion;
}
