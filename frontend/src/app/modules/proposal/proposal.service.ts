import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';

import { ProposalPaymentOption } from './proposal-payment.util';

export type ProposalTier = 'starter' | 'basic' | 'plus' | 'business' | 'enterprise';

export type VolumeMode = 'global' | 'perEndpoint';

export type VolumeDisplayPeriod = 'monthly' | 'yearly';

export interface ProposalUnitPrices {
    starter?: number;
    basic?: number;
    plus?: number;
    business?: number;
    enterprise?: number;
}

export interface PublicProposal {
    _id: string;
    prospect?: { name?: string; email?: string; phone?: string; company?: string };
    client?: { name?: string; email?: string; phone?: string };
    status: string;
    monthlyVolume: number;
    selectedLineItems: Array<{
        appFeature?: string;
        serviceName?: string;
        url?: string;
        category?: string;
        country?: string;
        catalogUnitPrices?: ProposalUnitPrices;
        unitPrices?: ProposalUnitPrices;
        monthlyVolume?: number;
        order?: number;
        selected?: boolean;
    }>;
    recommendedTier: ProposalTier;
    salesOverrideTier?: ProposalTier;
    visibleTiers?: ProposalTier[] | null;
    enabledPaymentTypes?: Array<'monthly' | 'quarterly' | 'semi_annual' | 'annual'>;
    paymentOptions?: ProposalPaymentOption[];
    pricingSummary?: Record<
        ProposalTier,
        {
            avgUnitPrice?: number;
            usageUnitPrice?: number;
            planSubscriptionFee?: number;
            planQueryLimit?: number;
            hasSmartCheckPlan?: boolean;
            expectedQueries?: number;
            usageCost?: number;
            quotedMonthlyTotal?: number;
            totalMonthlyEstimate: number;
        }
    >;
    viewedAt?: string;
    acceptedAt?: string;
    createdAt?: string;
    expirationPreset?: '1_week' | '2_weeks' | '3_weeks' | '1_month' | 'never';
    expiresAt?: string | null;
    pricingRevisions?: Array<{ revisedAt: string }>;
    language?: string;
    documentVersion?: string;
    subject?: string;
    coverMessage?: string;
    includeScopeSection?: boolean;
    includeSlaSection?: boolean;
    includeGeneralitiesSection?: boolean;
    includeCommercialNotes?: boolean;
    includePlanMinimum?: boolean;
    usagePricingMode?: 'average' | 'combo';
    volumeMode?: VolumeMode;
    volumeDisplayPeriod?: VolumeDisplayPeriod;
    counterOffer?: {
        message?: string;
        monthlyVolume?: number;
        preferredTier?: ProposalTier;
        lineItems?: Array<{
            appFeature?: string;
            unitPrices?: ProposalUnitPrices;
        }>;
        pricingSummary?: PublicProposal['pricingSummary'];
        paymentOptions?: ProposalPaymentOption[];
        submittedAt?: string;
    };
}

export interface CounterOfferLineItem {
    appFeature: string;
    unitPrices: ProposalUnitPrices;
}

@Injectable({ providedIn: 'root' })
export class ProposalPublicService {
    constructor(private readonly _http: HttpClient) {}

    getByToken(token: string): Observable<{ data: PublicProposal }> {
        return this._http.get<{ data: PublicProposal }>(
            `${environment.apiUrl}/v2/public/proposals/${token}`
        );
    }

    calculatePreview(
        token: string,
        lineItems: CounterOfferLineItem[]
    ): Observable<{
        data: {
            pricingSummary: PublicProposal['pricingSummary'];
            recommendedTier: ProposalTier;
            paymentOptions?: ProposalPaymentOption[];
        };
    }> {
        return this._http.post<{
            data: {
                pricingSummary: PublicProposal['pricingSummary'];
                recommendedTier: ProposalTier;
                paymentOptions?: ProposalPaymentOption[];
            };
        }>(
            `${environment.apiUrl}/v2/public/proposals/${token}/calculate`,
            { lineItems }
        );
    }

    respond(
        token: string,
        body: {
            action: 'accept' | 'counter_offer' | 'revoke_acceptance';
            message?: string;
            monthlyVolume?: number;
            preferredTier?: string;
            lineItems?: CounterOfferLineItem[];
        }
    ): Observable<{ status: string; data: Record<string, unknown> }> {
        return this._http.post<{ status: string; data: Record<string, unknown> }>(
            `${environment.apiUrl}/v2/public/proposals/${token}/respond`,
            body
        );
    }

    getPdfUrl(token: string, lang: string): string {
        return `${environment.apiUrl}/v2/public/proposals/${token}/pdf?lang=${encodeURIComponent(lang)}`;
    }
}
