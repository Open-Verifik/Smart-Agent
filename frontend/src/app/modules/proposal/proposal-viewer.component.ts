import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
    ProposalPublicService,
    ProposalTier,
    PublicProposal,
} from './proposal.service';

const TIERS: ProposalTier[] = ['starter', 'basic', 'plus', 'business', 'enterprise'];

@Component({
    selector: 'app-proposal-viewer',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './proposal-viewer.component.html',
})
export class ProposalViewerComponent implements OnInit {
    proposal: PublicProposal | null = null;
    tiers = TIERS;
    loading = true;
    error: string | null = null;
    responding = false;
    showCounterForm = false;
    responded = false;
    counterForm: FormGroup;

    constructor(
        private readonly _route: ActivatedRoute,
        private readonly _proposalService: ProposalPublicService,
        private readonly _fb: FormBuilder
    ) {
        this.counterForm = this._fb.group({
            message: ['', Validators.required],
            monthlyVolume: [''],
            preferredTier: [''],
        });
    }

    ngOnInit(): void {
        const token = this._route.snapshot.paramMap.get('token');

        if (!token) {
            this.error = 'invalid';
            this.loading = false;
            return;
        }

        this._proposalService.getByToken(token).subscribe({
            next: (res) => {
                this.proposal = res.data;
                this.loading = false;
            },
            error: () => {
                this.error = 'not_found';
                this.loading = false;
            },
        });
    }

    getRecipientName(): string {
        if (!this.proposal) return '';

        if (this.proposal.client?.name) return this.proposal.client.name;

        return this.proposal.prospect?.name || this.proposal.prospect?.email || '';
    }

    getEffectiveTier(): ProposalTier {
        if (!this.proposal) return 'starter';
        return this.proposal.salesOverrideTier || this.proposal.recommendedTier;
    }

    isTierRecommended(tier: ProposalTier): boolean {
        return tier === this.getEffectiveTier();
    }

    formatPrice(value?: number): string {
        if (value == null) return '—';
        return `$${value.toFixed(2)}`;
    }

    accept(): void {
        const token = this._route.snapshot.paramMap.get('token');
        if (!token || this.responding) return;

        this.responding = true;

        this._proposalService.respond(token, { action: 'accept' }).subscribe({
            next: () => {
                this.responded = true;
                if (this.proposal) this.proposal.status = 'accepted';
                this.responding = false;
            },
            error: () => {
                this.responding = false;
            },
        });
    }

    submitCounterOffer(): void {
        if (this.counterForm.invalid) return;

        const token = this._route.snapshot.paramMap.get('token');
        if (!token) return;

        this.responding = true;
        const v = this.counterForm.value;

        this._proposalService
            .respond(token, {
                action: 'counter_offer',
                message: v.message,
                monthlyVolume: v.monthlyVolume ? Number(v.monthlyVolume) : undefined,
                preferredTier: v.preferredTier || undefined,
            })
            .subscribe({
                next: () => {
                    this.responded = true;
                    if (this.proposal) this.proposal.status = 'counter_offer';
                    this.showCounterForm = false;
                    this.responding = false;
                },
                error: () => {
                    this.responding = false;
                },
            });
    }
}
