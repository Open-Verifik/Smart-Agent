import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import {
    extractClientSettingsPayload,
    invoiceBillingDetailsComplete,
} from 'app/modules/settings/utils/invoice-billing-complete';
import { SubscriptionService } from 'app/modules/subscription-plans/subscription.service';
import { HumanAuthnPlansService } from './human-authn-plans.service';
import { HumanAuthnBillingRequiredDialogComponent } from './human-authn-billing-required-dialog.component';
import { HumanAuthnVolumeConfirmDialogComponent } from './human-authn-volume-confirm-dialog.component';

const SMART_AGENT_CHECKOUT_SOURCE = 'smart_agent';

const CATALOG_PLAN_CODES: Record<'plus' | 'business' | 'free', string> = {
    plus: 'human_authn_plus',
    business: 'human_authn_business',
    free: 'human_authn_pyg',
};

@Component({
    selector: 'human-authn-plans',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        TranslocoModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
    ],
    templateUrl: './human-authn-plans.component.html',
    styleUrls: ['./human-authn-plans.component.scss'],
})
export class HumanAuthnPlansComponent implements OnInit {
    private _activatedRoute = inject(ActivatedRoute);
    private _authGate = inject(AuthRequiredGateService);
    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _dialog = inject(MatDialog);
    private _plansService = inject(HumanAuthnPlansService);
    private _router = inject(Router);
    private _snackBar = inject(MatSnackBar);
    private _subscriptionService = inject(SubscriptionService);
    private _translocoService = inject(TranslocoService);

    client: any;
    currentSubscription: any[] = [];
    currentView: 'current' | 'change' | 'select' = 'change';
    plans: Record<string, any> = {};
    selectedPlan: 'plus' | 'business' | 'free' | null = null;
    subscribingToPlan = false;
    plusVolume = 300;
    businessVolume = 1000;
    private _sessionConfirmHandled = false;

    constructor() {
        const raw = localStorage.getItem('verifik_account') || localStorage.getItem('user');
        if (!raw || raw === 'undefined' || raw === 'null') {
            this.client = null;
            return;
        }
        try {
            this.client = JSON.parse(raw);
        } catch {
            this.client = null;
        }
    }

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this._runPlansEntryAfterAuthGate(),
            panelClass: 'auth-required-dialog',
        });
    }

    private _runPlansEntryAfterAuthGate(): void {
        const sessionId = this._activatedRoute.snapshot.queryParamMap.get('session_id')?.trim();
        if (sessionId && !this._sessionConfirmHandled) {
            this._sessionConfirmHandled = true;
            void this._router.navigate([], {
                queryParams: { session_id: null },
                queryParamsHandling: 'merge',
                replaceUrl: true,
            });
            this._subscriptionService.confirmCheckoutSession(sessionId).subscribe({
                next: () => {
                    this._snackBar.open(
                        this._translocoService.translate('subscriptionPlans.sessionConfirmSuccess'),
                        undefined,
                        { duration: 4000 }
                    );
                    this._bootstrap();
                },
                error: () => {
                    this._bootstrap();
                },
            });
            return;
        }

        this._bootstrap();
    }

    private _bootstrap(): void {
        this._loadCatalog();
        this._loadMySubscription();
    }

    private _loadCatalog(): void {
        this._plansService.getCatalogPlans({ sort: 'price' }).subscribe({
            next: (response) => {
                this.plans = {};
                (response?.data ?? []).forEach((plan: any) => {
                    if (plan.code === CATALOG_PLAN_CODES.business) this.plans['business'] = plan;
                    if (plan.code === CATALOG_PLAN_CODES.plus) this.plans['plus'] = plan;
                    if (plan.code === CATALOG_PLAN_CODES.free) this.plans['free'] = plan;
                });
                this._changeDetectorRef.markForCheck();
            },
            error: () => {
                this._snackBar.open(this._translocoService.translate('humanAuthnPlans.loadError'), undefined, {
                    duration: 4000,
                });
            },
        });
    }

    private _loadMySubscription(): void {
        this._plansService.getClientPlans().subscribe({
            next: (response) => {
                this.currentSubscription = response?.data ?? [];
                this.currentView = this.currentSubscription.length ? 'current' : 'change';
                this._changeDetectorRef.markForCheck();
            },
            error: () => {
                this.currentView = 'change';
                this._changeDetectorRef.markForCheck();
            },
        });
    }

    getPlan(key: string): any {
        return this.plans?.[key];
    }

    volumeFor(plan: 'plus' | 'business'): number {
        return plan === 'plus' ? this.plusVolume : this.businessVolume;
    }

    monthlyTotal(planKey: 'plus' | 'business' | 'free'): number {
        const plan = this.getPlan(planKey);
        if (!plan || planKey === 'free') return 0;
        const base = Number(plan.encryptLimit || 0);
        const extra = Math.max(0, this.volumeFor(planKey) - base);
        return Number(plan.price || 0) + extra * Number(plan.unitPrice || 0);
    }

    changeView(view: 'current' | 'change' | 'select', plan?: 'plus' | 'business' | 'free'): void {
        this.currentView = view;
        this.selectedPlan = plan ?? null;
        this._changeDetectorRef.markForCheck();
    }

    manageBilling(): void {
        this._subscriptionService.createPortalSession({}).subscribe({
            next: (result) => {
                const url = result?.data?.url;
                if (url) window.location.href = url;
            },
            error: () => {
                this._snackBar.open(this._translocoService.translate('humanAuthnPlans.redirectError'), undefined, {
                    duration: 4000,
                });
            },
        });
    }

    checkout(): void {
        if (this.subscribingToPlan || !this.selectedPlan) return;

        const catalog = this.getPlan(this.selectedPlan);
        if (!catalog?.stripeProduct) {
            this._snackBar.open(this._translocoService.translate('humanAuthnPlans.checkoutNoPrice'), undefined, {
                duration: 4000,
            });
            return;
        }

        this._plansService.getClientSettings({ findOne: true }).subscribe({
            next: (response) => {
                const billing = extractClientSettingsPayload(response);
                if (!invoiceBillingDetailsComplete(billing?.invoiceSettings)) {
                    this._dialog.open(HumanAuthnBillingRequiredDialogComponent);
                    return;
                }
                this._startCheckout(catalog);
            },
            error: () => this._startCheckout(catalog),
        });
    }

    private _startCheckout(catalog: any): void {
        const quantity = this.selectedPlan === 'free' ? 1 : this.volumeFor(this.selectedPlan as 'plus' | 'business');
        const hasActive = this.currentSubscription.some((row) => !row.cancelAt);
        const body = {
            plan: catalog.stripeProduct,
            quantity,
            source: SMART_AGENT_CHECKOUT_SOURCE,
        };

        const proceed = () => {
            this.subscribingToPlan = true;
            const request$ = hasActive
                ? this._plansService.upgradeClientPlan(body)
                : this._plansService.postClientPlan(body);

            request$.subscribe({
                next: (session) => {
                    const url = session?.data?.url || session?.url;
                    if (url) {
                        window.location.href = url;
                        return;
                    }
                    this.subscribingToPlan = false;
                    this._snackBar.open(this._translocoService.translate('humanAuthnPlans.checkoutNoPrice'), undefined, {
                        duration: 4000,
                    });
                },
                error: () => {
                    this.subscribingToPlan = false;
                    this._snackBar.open(this._translocoService.translate('humanAuthnPlans.checkoutError'), undefined, {
                        duration: 4000,
                    });
                    this._changeDetectorRef.markForCheck();
                },
            });
        };

        if (this.selectedPlan === 'free' || !hasActive) {
            proceed();
            return;
        }

        this._dialog
            .open(HumanAuthnVolumeConfirmDialogComponent, {
                data: { quantity, monthlyTotal: this.monthlyTotal(this.selectedPlan) },
            })
            .afterClosed()
            .subscribe((ok) => {
                if (ok) proceed();
            });
    }
}
