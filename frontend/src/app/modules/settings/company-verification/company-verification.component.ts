import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { AccountEnvironmentService } from 'app/core/account/account-environment.service';
import type {
    ClientKybDocument,
    ClientKybRepresentative,
    ClientKybReviewEntry,
    ClientKybTier,
} from 'app/modules/add-credits/services/payment.service';

@Component({
    selector: 'app-company-verification',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        RouterModule,
        TranslocoModule,
    ],
    templateUrl: './company-verification.component.html',
    styleUrl: './company-verification.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyVerificationComponent implements OnInit {
    readonly env = inject(AccountEnvironmentService);

    readonly tier = this.env.kybTier;
    readonly registration = this.env.kybRegistration;
    readonly kybEnabled = this.env.kybOnboardingEnabled;

    readonly verifiedRepsCount = computed(() => {
        const reps = this.registration()?.representatives ?? [];
        return reps.filter((rep) => this.isRepVerified(rep)).length;
    });

    readonly latestReviewerNote = computed<ClientKybReviewEntry | null>(() => {
        const log = this.registration()?.manualReviewLog ?? [];
        for (let i = log.length - 1; i >= 0; i--) {
            if (log[i]?.note?.trim()) {
                return log[i];
            }
        }
        return null;
    });

    readonly showProgressTrack = computed(() => this.tier() !== 'legacy_kyc');

    readonly tier1Reached = computed(() => {
        const t = this.tier();
        return t === 'tier1_standard' || t === 'tier2_full';
    });

    readonly tier2Reached = computed(() => {
        const t = this.tier();
        return t === 'tier2_full';
    });

    readonly primaryCtaKey = computed(() => {
        const t = this.tier();
        const status = this.registration()?.status;

        if (status === 'CHANGES_REQUESTED' || status === 'FAILED') {
            return 'settings.kyb.ctaUpdate';
        }
        if (t === 'legacy_kyc') {
            return 'settings.kyb.ctaUpgradeOptional';
        }
        if (t === 'tier1_standard') {
            return 'settings.kyb.ctaCompleteTier2';
        }
        if (status && status !== 'COMPLETED') {
            return 'settings.kyb.ctaContinue';
        }
        return 'settings.kyb.ctaStart';
    });

    readonly showPrimaryCta = computed(() => {
        const t = this.tier();
        const status = this.registration()?.status;
        if (t === 'tier2_full') {
            return false;
        }
        if (t === 'legacy_kyc') {
            return this.kybEnabled();
        }
        if (status === 'NEEDS_MANUAL_VERIFICATION' && t === 'none') {
            return false;
        }
        return true;
    });

    ngOnInit(): void {
        this.env.loadKybStatus();
    }

    refresh(): void {
        this.env.loadKybStatus();
    }

    openKybPortal(): void {
        if (!this.kybEnabled() && this.tier() === 'none') {
            this.env.startCompanyVerification();
            return;
        }
        this.env.openKybFlowDirectly();
    }

    tierBadgeKey(tier: ClientKybTier): string {
        switch (tier) {
            case 'legacy_kyc':
                return 'settings.kyb.tiers.legacy_kyc.badge';
            case 'tier1_standard':
                return 'settings.kyb.tiers.tier1_standard.badge';
            case 'tier2_full':
                return 'settings.kyb.tiers.tier2_full.badge';
            default:
                return 'settings.kyb.tiers.none.badge';
        }
    }

    tierTitleKey(tier: ClientKybTier): string {
        switch (tier) {
            case 'legacy_kyc':
                return 'settings.kyb.tiers.legacy_kyc.title';
            case 'tier1_standard':
                return 'settings.kyb.tiers.tier1_standard.title';
            case 'tier2_full':
                return 'settings.kyb.tiers.tier2_full.title';
            default:
                return 'settings.kyb.tiers.none.title';
        }
    }

    tierDescKey(tier: ClientKybTier): string {
        switch (tier) {
            case 'legacy_kyc':
                return 'settings.kyb.tiers.legacy_kyc.desc';
            case 'tier1_standard':
                return 'settings.kyb.tiers.tier1_standard.desc';
            case 'tier2_full':
                return 'settings.kyb.tiers.tier2_full.desc';
            default:
                return 'settings.kyb.tiers.none.desc';
        }
    }

    isRepVerified(rep: ClientKybRepresentative): boolean {
        const s = String(rep.kycStatus || '').toLowerCase();
        return s === 'completed' || s === 'validated' || s === 'approved';
    }

    docStatusClass(doc: ClientKybDocument): string {
        const s = String(doc.status || '').toLowerCase();
        if (s === 'verified' || s === 'approved' || s === 'completed') return 'badge--success';
        if (s === 'rejected' || s === 'failed') return 'badge--danger';
        if (s === 'uploaded' || s === 'pending' || s === 'needs_manual_verification') return 'badge--info';
        return 'badge--neutral';
    }

    repStatusClass(rep: ClientKybRepresentative): string {
        const s = String(rep.kycStatus || '').toLowerCase();
        if (s === 'completed' || s === 'validated' || s === 'approved') return 'badge--success';
        if (s === 'failed' || s === 'rejected') return 'badge--danger';
        if (s === 'in_progress' || s === 'pending_kyc') return 'badge--info';
        return 'badge--neutral';
    }

    regStatusClass(status?: string): string {
        switch (status) {
            case 'COMPLETED':
                return 'badge--success';
            case 'CHANGES_REQUESTED':
            case 'NEEDS_MANUAL_VERIFICATION':
            case 'SUBMITTED_PARTIAL':
            case 'PENDING_REPRESENTATIVES':
                return 'badge--warn';
            case 'FAILED':
                return 'badge--danger';
            default:
                return 'badge--info';
        }
    }
}
