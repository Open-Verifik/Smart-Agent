import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import {
    extractClientSettingsPayload,
    invoiceBillingDetailsComplete,
} from 'app/modules/settings/utils/invoice-billing-complete';
import { SubscriptionService } from 'app/modules/subscription-plans/subscription.service';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';
import { FleetNavComponent } from '../fleet-nav.component';
import { FleetPlanOverview, FleetPlanTier, FleetPlanTierKey, SmartFleetService } from '../smart-fleet.service';

const PLANS_URL = '/smart-fleet/plans';

const CARD_LOGOS: Record<string, string> = {
    amex: 'https://cdn.verifik.co/assets/billing-svg/AmericanExpressLogo.svg',
    link: 'https://cdn.verifik.co/assets/billing-svg/StripeLinkLogo.svg',
    mastercard: 'https://cdn.verifik.co/assets/billing-svg/MasterCardLogo.svg',
    visa: 'https://cdn.verifik.co/assets/billing-svg/VisaLogo.svg',
};

const ENTERPRISE_URLS: Record<'es' | 'en', string> = {
    es: 'https://api.whatsapp.com/send?phone=573208184565&text=%C2%A1Hola!%20estoy%20interesado%20en%20un%20plan%20enterprise%20de%20Smart%20Fleet.',
    en: 'https://api.whatsapp.com/send?phone=573208184565&text=Hello!%20I%20am%20interested%20in%20a%20Smart%20Fleet%20enterprise%20plan.',
};

type PlansView = 'current' | 'change' | 'select';

@Component({
    selector: 'fleet-plans',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TranslocoModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        FleetNavComponent,
    ],
    templateUrl: './fleet-plans.component.html',
    styleUrls: ['../../smart-enroll/plans/smart-enroll-plans.component.scss'],
})
export class FleetPlansComponent implements OnInit {
    private _fleet = inject(SmartFleetService);
    private _subscriptions = inject(SubscriptionService);
    private _http = inject(HttpClient);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _authGate = inject(AuthRequiredGateService);
    private _confirm = inject(FuseConfirmationService);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);

    readonly tierKeys: FleetPlanTierKey[] = ['plus', 'business'];

    overview = signal<FleetPlanOverview | null>(null);
    isLoading = signal(true);
    loadFailed = signal(false);
    isWorking = signal(false);
    view = signal<PlansView>('change');
    selectedTier = signal<FleetPlanTierKey | null>(null);
    slots = signal(1);

    plan = computed(() => this.overview()?.plan ?? null);
    usage = computed(() => this.overview()?.usage ?? null);
    reports = computed(() => this.overview()?.reports ?? null);
    activeAssets = computed(() => this.usage()?.activeAssets ?? 0);

    /** A plan set to cancel can still be resumed; picking a tier then starts a new subscription. */
    isRenewing = computed(() => Boolean(this.plan() && !this.plan()!.cancelAtPeriodEnd));
    tier = computed(() => this._tierOf(this.selectedTier()));

    sliderMin = computed(() => {
        const tier = this.tier();
        return tier ? Math.min(tier.maxAssets, Math.max(tier.minAssets, this.activeAssets())) : 1;
    });
    sliderMax = computed(() => this.tier()?.maxAssets ?? 1);
    sliderPercent = computed(() => {
        const span = this.sliderMax() - this.sliderMin();
        return span > 0 ? ((this.slots() - this.sliderMin()) / span) * 100 : 100;
    });

    monthlyTotal = computed(() => this.slots() * Number(this.tier()?.amount ?? 0));
    planMonthlyTotal = computed(() => (this.plan()?.assetLimit ?? 0) * Number(this.plan()?.amount ?? 0));
    monitoringCredits = computed(() => this.slots() * (this.overview()?.projectedMonthlyCredits?.creditsPerAsset ?? 0));

    /** Same tier and slot count as today: nothing to buy. */
    isUnchanged = computed(
        () =>
            this.isRenewing() &&
            this.plan()?.tier === this.selectedTier() &&
            this.plan()?.assetLimit === this.slots()
    );

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this._enter(),
            panelClass: 'auth-required-dialog',
        });
    }

    tierOf(key: FleetPlanTierKey): FleetPlanTier | null {
        return this._tierOf(key);
    }

    isCurrentTier(key: FleetPlanTierKey | 'free'): boolean {
        if (key === 'free') return !this.isRenewing();
        return this.isRenewing() && this.plan()?.tier === key;
    }

    /** A tier is out of reach once the fleet already has more active vehicles than it covers. */
    tierFits(key: FleetPlanTierKey): boolean {
        const tier = this._tierOf(key);
        return Boolean(tier) && this.activeAssets() <= tier!.maxAssets;
    }

    tierStartingPrice(key: FleetPlanTierKey): number {
        const tier = this._tierOf(key);
        return tier ? tier.minAssets * Number(tier.amount ?? 0) : 0;
    }

    cardLogo(brand?: string | null): string {
        return CARD_LOGOS[String(brand || '').toLowerCase()] || '';
    }

    changeView(view: PlansView, tier?: FleetPlanTierKey): void {
        this.view.set(view);
        this.selectedTier.set(tier ?? null);

        if (!tier) return;

        const plan = this.plan();
        this.setSlots(plan?.tier === tier ? plan.assetLimit : this.sliderMin());
    }

    goBack(): void {
        this.changeView(this.view() === 'select' || !this.plan() ? 'change' : 'current');
    }

    setSlots(value: number | string): void {
        const parsed = Math.floor(Number(value));
        const min = this.sliderMin();
        this.slots.set(Math.min(this.sliderMax(), Math.max(min, Number.isFinite(parsed) ? parsed : min)));
    }

    purchaseEnterprise(): void {
        const lang = this._transloco.getActiveLang() === 'es' ? 'es' : 'en';
        window.open(ENTERPRISE_URLS[lang], '_blank');
    }

    async checkout(): Promise<void> {
        const tier = this.tier();
        if (!tier || this.isWorking() || this.isUnchanged()) return;

        if (!tier.available) {
            this._toast('smartFleet.plans.unavailable');
            return;
        }

        if (this.isRenewing()) {
            await this._applyChange(tier);
            return;
        }

        if (!(await this._billingDetailsReady())) return;

        this.isWorking.set(true);

        try {
            const response = await firstValueFrom(this._fleet.startPlanCheckout(tier.key, this.slots()));
            const url = response?.data?.url;

            if (url) {
                window.location.href = url;
                return;
            }

            this._toast('smartFleet.plans.checkoutFailed');
        } catch (error) {
            this._toastError('smartFleet.plans.checkoutFailed', error);
        }

        this.isWorking.set(false);
    }

    async cancelPlan(): Promise<void> {
        const plan = this.plan();
        if (!plan || this.isWorking()) return;

        const confirmed = await this._ask(
            'smartFleet.plans.cancelTitle',
            'smartFleet.plans.cancelMessage',
            {
                date: plan.endDate ? new Date(plan.endDate).toLocaleDateString() : '',
                free: this.usage()?.freeLimit ?? 0,
            },
            'warn'
        );
        if (!confirmed) return;

        await this._run(() => firstValueFrom(this._fleet.cancelPlan()), 'smartFleet.plans.cancelDone', 'smartFleet.plans.cancelFailed');
    }

    async resumePlan(): Promise<void> {
        if (!this.plan() || this.isWorking()) return;
        await this._run(() => firstValueFrom(this._fleet.resumePlan()), 'smartFleet.plans.resumeDone', 'smartFleet.plans.resumeFailed');
    }

    manageBilling(): void {
        this._subscriptions.createPortalSession({}).subscribe({
            next: (result) => {
                const url = result?.data?.url;
                if (url) window.location.href = url;
            },
            error: () => this._toast('smartFleet.plans.portalFailed'),
        });
    }

    private _tierOf(key: FleetPlanTierKey | null): FleetPlanTier | null {
        if (!key) return null;
        return this.overview()?.tiers?.find((tier) => tier.key === key) ?? null;
    }

    private async _applyChange(tier: FleetPlanTier): Promise<void> {
        const plan = this.plan()!;
        const raising = this.monthlyTotal() > this.planMonthlyTotal();
        const confirmed = await this._ask(
            'smartFleet.plans.changeTitle',
            raising ? 'smartFleet.plans.changeUpMessage' : 'smartFleet.plans.changeDownMessage',
            {
                from: plan.assetLimit,
                to: this.slots(),
                plan: tier.name || tier.key,
                total: this._money(this.monthlyTotal()),
            }
        );
        if (!confirmed) return;

        this.isWorking.set(true);

        try {
            await firstValueFrom(this._fleet.updatePlanQuantity(tier.key, this.slots()));
            this._toast('smartFleet.plans.changeDone', { count: this.slots() });
            await this._load();
            this.changeView('current');
        } catch (error) {
            this._toastError('smartFleet.plans.changeFailed', error);
        } finally {
            this.isWorking.set(false);
        }
    }

    private async _enter(): Promise<void> {
        const sessionId = this._route.snapshot.queryParamMap.get('session_id')?.trim();

        if (sessionId) {
            void this._router.navigate([], {
                queryParams: { session_id: null },
                queryParamsHandling: 'merge',
                replaceUrl: true,
            });

            try {
                await firstValueFrom(this._subscriptions.confirmCheckoutSession(sessionId));
                this._toast('smartFleet.plans.subscribed');
            } catch (error) {
                console.error('[SmartFleet] confirm checkout session error', error);
            }
        }

        await this._load();
        this.changeView(this.plan() ? 'current' : 'change');
    }

    private async _load(): Promise<void> {
        this.isLoading.set(true);
        this.loadFailed.set(false);

        try {
            const response = await firstValueFrom(this._fleet.getPlanOverview());
            this.overview.set(response.data);
        } catch (error) {
            console.error('[SmartFleet] plan overview error', error);
            this.loadFailed.set(true);
        } finally {
            this.isLoading.set(false);
        }
    }

    private async _run(action: () => Promise<unknown>, doneKey: string, failKey: string): Promise<void> {
        this.isWorking.set(true);

        try {
            await action();
            this._toast(doneKey);
            await this._load();
        } catch (error) {
            this._toastError(failKey, error);
        } finally {
            this.isWorking.set(false);
        }
    }

    private async _billingDetailsReady(): Promise<boolean> {
        try {
            const response = await firstValueFrom(
                this._http.get(`${environment.apiUrl}/v2/client-settings`, { params: { findOne: 'true' } })
            );
            const settings = extractClientSettingsPayload(response) as { invoiceSettings?: unknown } | null;

            if (invoiceBillingDetailsComplete(settings?.invoiceSettings)) return true;
        } catch {
            return true;
        }

        const goToBilling = await this._ask('smartFleet.plans.billingTitle', 'smartFleet.plans.billingMessage', {}, 'primary', 'smartFleet.plans.billingGo');

        if (goToBilling) {
            void this._router.navigate(['/settings', 'billing-details'], { queryParams: { returnUrl: PLANS_URL } });
        }

        return false;
    }

    private async _ask(
        titleKey: string,
        messageKey: string,
        params: Record<string, unknown>,
        color: 'primary' | 'warn' = 'primary',
        confirmKey = 'smartFleet.plans.confirm'
    ): Promise<boolean> {
        const result = await firstValueFrom(
            this._confirm
                .open({
                    title: this._transloco.translate(titleKey),
                    message: this._transloco.translate(messageKey, params),
                    icon: { show: true, name: color === 'warn' ? 'heroicons_outline:exclamation-triangle' : 'heroicons_outline:truck', color },
                    actions: {
                        confirm: { show: true, label: this._transloco.translate(confirmKey), color },
                        cancel: { show: true, label: this._transloco.translate('smartFleet.plans.back') },
                    },
                })
                .afterClosed()
        );

        return result === 'confirmed';
    }

    private _money(value: number): string {
        return new Intl.NumberFormat(this._transloco.getActiveLang() === 'es' ? 'es-CO' : 'en-US', {
            style: 'currency',
            currency: (this.tier()?.currency || 'USD').toUpperCase(),
            maximumFractionDigits: 2,
        }).format(value);
    }

    private _toast(key: string, params: Record<string, unknown> = {}): void {
        this._snackBar.open(this._transloco.translate(key, params), undefined, { duration: 4500 });
    }

    private _toastError(key: string, error: unknown): void {
        console.error('[SmartFleet] plan error', error);
        const message = String((error as { error?: { message?: string } })?.error?.message || '');
        const known: Record<string, string> = {
            fleet_plan_below_active_assets: 'smartFleet.plans.belowActive',
            fleet_plan_tier_too_small: 'smartFleet.plans.tierTooSmall',
            smart_fleet_plan_unavailable: 'smartFleet.plans.unavailable',
            smart_fleet_plan_already_active: 'smartFleet.plans.alreadyActive',
        };
        const knownKey = Object.keys(known).find((code) => message.includes(code));

        this._toast(knownKey ? known[knownKey] : key, { count: this.activeAssets() });
    }
}
