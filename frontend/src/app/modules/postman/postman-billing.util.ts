import { ApiEndpoint } from './postman.types';

export const DYNAMIC_QUERY_PREMIUM = 'dynamic_query_premium';
export const COLOMBIA_CEDULA_CODE = 'colombia_api_identity_lookup';
export const COLOMBIA_CEDULA_PREMIUM_CODE = 'colombia_api_identity_lookup_premium';

export const COLOMBIA_CEDULA_SLA_URL =
    'https://docs.verifik.co/legal/service-level-agreement#viii-dynamic-query-for-smartcheck-service';

export interface DynamicQueryBillingBlock {
    dynamicQueryApplied?: boolean;
    adjustmentType?: string;
    standardCredits?: number;
    chargedCredits?: number;
    standardFeatureCode?: string;
    billedFeatureCode?: string;
}

export interface BillingAwareRequest {
    billingAdjustmentType?: string;
    billingStandardCost?: number;
    billingStandardCode?: string;
    cost?: number;
    code?: string;
    endpoint?: string;
}

export interface PostmanBillingParseResult {
    billing: DynamicQueryBillingBlock | null;
    creditsCharged: number | null;
    featureCode: string | null;
}

const parseNumeric = (value: unknown): number | null => {
    if (typeof value === 'number' && Number.isFinite(value)) {
        return value;
    }
    if (typeof value === 'string' && value.trim() !== '') {
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : null;
    }
    return null;
};

export const isColombiaCedulaEndpoint = (endpoint?: ApiEndpoint | null): boolean =>
    endpoint?.code === COLOMBIA_CEDULA_CODE;

export const isDynamicQueryPremiumAdjustment = (request?: BillingAwareRequest | null): boolean => {
    if (!request) {
        return false;
    }

    if (request.billingAdjustmentType === DYNAMIC_QUERY_PREMIUM) {
        return true;
    }

    const standardCost = parseNumeric(request.billingStandardCost);
    const chargedCost = parseNumeric(request.cost);

    return (
        request.code === COLOMBIA_CEDULA_PREMIUM_CODE &&
        standardCost != null &&
        chargedCost != null &&
        chargedCost > standardCost
    );
};

export const attachColombiaCedulaPremiumPricing = (
    endpoints: ApiEndpoint[],
    featureList: Array<{ code?: string; price?: number }>
): ApiEndpoint[] => {
    const premiumFeature = featureList.find((feature) => feature.code === COLOMBIA_CEDULA_PREMIUM_CODE);
    const premiumPrice = parseNumeric(premiumFeature?.price);

    if (premiumPrice == null) {
        return endpoints;
    }

    return endpoints.map((endpoint) => {
        if (endpoint.code !== COLOMBIA_CEDULA_CODE) {
            return endpoint;
        }

        return {
            ...endpoint,
            estimatedPremiumCost: premiumPrice,
            dynamicQueryPricing: { premiumFeatureCode: COLOMBIA_CEDULA_PREMIUM_CODE },
        };
    });
};

export const hasDynamicQueryPriceRange = (endpoint?: ApiEndpoint | null): boolean => {
    if (!isColombiaCedulaEndpoint(endpoint)) {
        return false;
    }

    const standard = parseNumeric(endpoint?.estimatedCost);
    const premium = parseNumeric(endpoint?.estimatedPremiumCost);

    return standard != null && premium != null && premium > standard;
};

export const parseBillingFromResponse = (body: unknown): PostmanBillingParseResult | null => {
    if (!body || typeof body !== 'object') {
        return null;
    }

    const root = body as Record<string, unknown>;
    const billingRaw = root['billing'];

    const billing =
        billingRaw && typeof billingRaw === 'object'
            ? (billingRaw as DynamicQueryBillingBlock)
            : null;

    const creditsCharged = parseNumeric(root['creditsCharged']);
    const featureCode = typeof root['featureCode'] === 'string' ? root['featureCode'] : null;

    if (!billing?.dynamicQueryApplied && creditsCharged == null && !featureCode) {
        return null;
    }

    return {
        billing,
        creditsCharged,
        featureCode,
    };
};

export const formatCreditsForDisplay = (value: number | null | undefined): string => {
    const numeric = parseNumeric(value);
    if (numeric == null) {
        return '-';
    }
    if (Number.isInteger(numeric)) {
        return String(numeric);
    }
    return parseFloat(numeric.toFixed(6)).toString();
};

export const getHistoryBillingTooltipParams = (request: BillingAwareRequest): {
    standard: string;
    charged: string;
} | null => {
    if (!isDynamicQueryPremiumAdjustment(request)) {
        return null;
    }

    const standard = formatCreditsForDisplay(request.billingStandardCost);
    const charged = formatCreditsForDisplay(request.cost);

    return { standard, charged };
};
