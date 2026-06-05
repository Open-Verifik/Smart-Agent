import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'environments/environment';

export type ProposalTier = 'starter' | 'basic' | 'plus' | 'business' | 'enterprise';

export interface PublicProposal {
    _id: string;
    prospect?: { name?: string; email?: string; phone?: string; company?: string };
    client?: { name?: string; email?: string; phone?: string };
    status: string;
    monthlyVolume: number;
    selectedLineItems: Array<{
        serviceName?: string;
        url?: string;
        category?: string;
        country?: string;
        catalogUnitPrices?: Record<ProposalTier, number>;
        unitPrices?: Record<ProposalTier, number>;
        selected?: boolean;
    }>;
    recommendedTier: ProposalTier;
    salesOverrideTier?: ProposalTier;
    pricingSummary?: Record<
        ProposalTier,
        {
            avgUnitPrice?: number;
            planSubscriptionFee?: number;
            planQueryLimit?: number;
            hasSmartCheckPlan?: boolean;
            expectedQueries?: number;
            usageCost?: number;
            quotedMonthlyTotal?: number;
            totalMonthlyEstimate: number;
        }
    >;
    counterOffer?: { message?: string; submittedAt?: string };
}

@Injectable({ providedIn: 'root' })
export class ProposalPublicService {
    constructor(private readonly _http: HttpClient) {}

    getByToken(token: string): Observable<{ data: PublicProposal }> {
        return this._http.get<{ data: PublicProposal }>(
            `${environment.apiUrl}/v2/public/proposals/${token}`
        );
    }

    respond(
        token: string,
        body: {
            action: 'accept' | 'counter_offer';
            message?: string;
            monthlyVolume?: number;
            preferredTier?: string;
        }
    ): Observable<{ status: string; data: { status: string } }> {
        return this._http.post<{ status: string; data: { status: string } }>(
            `${environment.apiUrl}/v2/public/proposals/${token}/respond`,
            body
        );
    }
}
