import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AccountEnvironmentService } from 'app/core/account/account-environment.service';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import {
    extractClientSettingsPayload,
    invoiceBillingDetailsComplete,
} from 'app/modules/settings/utils/invoice-billing-complete';
import { SubscriptionService } from 'app/modules/subscription-plans/subscription.service';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';
import { formatFleetLookupUsd } from '../assets/fleet-report-progress';
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
    styles: [
        `
            .fleet-shell.plans-container {
                background: #fafaf9;
                color: #1c1917;
            }

            .fleet-shell.plans-container .current-plan-header .current-plan-title {
                color: #1c1917;
            }

            .fleet-shell.plans-container .current-plan-header .current-plan-subtitle {
                color: #78716c;
            }

            .fleet-shell.plans-container .back-button {
                color: #d97706;
            }

            .fleet-shell.plans-container .back-button:hover {
                background: rgb(217 119 6 / 0.1);
            }

            .fleet-shell.plans-container .header-icon {
                border-radius: 0.75rem;
                background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
                box-shadow: 0 4px 14px rgb(217 119 6 / 0.25);
            }

            .fleet-shell.plans-container .plan-card,
            .fleet-shell.plans-container .select-plan-card,
            .fleet-shell.plans-container .checkout-card {
                background: #ffffff;
                border-color: #e7e5e4;
                border-radius: 1rem;
                box-shadow: 0 1px 3px rgb(28 25 23 / 0.06);
            }

            .fleet-shell.plans-container .select-plan-card:hover {
                border-color: rgb(217 119 6 / 0.45);
                box-shadow: 0 8px 24px rgb(28 25 23 / 0.08);
            }

            .fleet-shell.plans-container .select-plan-card.featured {
                border: 2px solid #d97706;
                box-shadow: 0 8px 28px rgb(217 119 6 / 0.14);
            }

            .fleet-shell.plans-container .select-plan-card.featured .featured-badge {
                border-radius: 0.5rem;
                background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
                color: #ffffff;
            }

            .fleet-shell.plans-container .select-plan-card--current,
            .fleet-shell.plans-container .select-plan-card--current.featured {
                border: 2px solid #059669;
                box-shadow: 0 8px 24px rgb(5 150 105 / 0.14);
            }

            .fleet-shell.plans-container .current-plan-badge {
                border-radius: 0.5rem;
            }

            .fleet-shell.plans-container .card-header {
                background: #fafaf9;
                border-bottom-color: #e7e5e4;
            }

            .fleet-shell.plans-container .card-icon {
                border-radius: 0.75rem;
            }

            .fleet-shell.plans-container .card-icon.plus {
                background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
                box-shadow: 0 2px 8px rgb(217 119 6 / 0.28);
            }

            .fleet-shell.plans-container .card-icon.business {
                background: linear-gradient(135deg, #292524 0%, #1c1917 100%);
                box-shadow: 0 2px 8px rgb(28 25 23 / 0.22);
            }

            .fleet-shell.plans-container .status-badge {
                border-radius: 0.5rem;
            }

            .fleet-shell.plans-container .status-badge.success {
                background: rgb(5 150 105 / 0.12);
                color: #047857;
            }

            .fleet-shell.plans-container .status-badge.success .status-dot {
                background: #059669;
            }

            .fleet-shell.plans-container .price-section,
            .fleet-shell.plans-container .payment-method,
            .fleet-shell.plans-container .optional-section {
                background: #fafaf9;
                border: 1px solid #e7e5e4;
                border-radius: 1rem;
            }

            .fleet-shell.plans-container .price-section .price-label,
            .fleet-shell.plans-container .price-section .price-period,
            .fleet-shell.plans-container .price-section .price-currency {
                color: #57534e;
            }

            .fleet-shell.plans-container .price-section .price-amount {
                color: #1c1917;
            }

            .fleet-shell.plans-container .payment-method .payment-text {
                color: #1c1917;
            }

            .fleet-shell.plans-container .payment-method .payment-expiry {
                color: #57534e;
            }

            .fleet-shell.plans-container .feature-card,
            .fleet-shell.plans-container .optional-card {
                background: #ffffff;
                border-color: #e7e5e4;
                border-radius: 1rem;
            }

            .fleet-shell.plans-container .feature-content .feature-label {
                color: #57534e;
            }

            .fleet-shell.plans-container .feature-content .feature-value {
                color: #1c1917;
            }

            .fleet-shell.plans-container .feature-content .feature-value.text-emerald-700,
            .fleet-shell.plans-container .plan-stat .stat-value.text-emerald-700,
            .fleet-shell.plans-container .checkout-stats .stat-item .stat-value.text-emerald-700 {
                color: #047857;
            }

            .fleet-shell.plans-container .feature-icon.email,
            .fleet-shell.plans-container .feature-icon.whitelabel,
            .fleet-shell.plans-container .feature-icon.biometrics,
            .fleet-shell.plans-container .feature-icon.api,
            .fleet-shell.plans-container .optional-icon.sms,
            .fleet-shell.plans-container .optional-icon.whatsapp {
                background: #fef3c7;
                color: #b45309;
            }

            .fleet-shell.plans-container .feature-status.active {
                color: #059669;
            }

            .fleet-shell.plans-container .optional-section .optional-title {
                color: #1c1917;
            }

            .fleet-shell.plans-container .optional-section .optional-subtitle {
                color: #57534e;
            }

            .fleet-shell.plans-container .optional-card .optional-label {
                color: #44403c;
            }

            .fleet-shell.plans-container .optional-card .optional-value {
                font-size: 0.875rem;
                font-weight: 600;
                color: #1c1917;
                margin-top: 0.125rem;
            }

            .fleet-shell.plans-container .plan-badge {
                border-radius: 0.5rem;
            }

            .fleet-shell.plans-container .plan-badge.plus {
                background: #fef3c7;
                color: #92400e;
            }

            .fleet-shell.plans-container .plan-badge.business {
                background: #f5f5f4;
                color: #1c1917;
            }

            .fleet-shell.plans-container .plan-badge.enterprise {
                background: #1c1917;
                color: #ffffff;
            }

            .fleet-shell.plans-container .plan-badge.free {
                background: #f5f5f4;
                color: #57534e;
            }

            .fleet-shell.plans-container .plan-pricing .plan-price {
                color: #1c1917;
            }

            .fleet-shell.plans-container .plan-pricing .plan-period,
            .fleet-shell.plans-container .plan-range,
            .fleet-shell.plans-container .plan-stat .stat-label {
                color: #57534e;
            }

            .fleet-shell.plans-container .plan-features {
                border-top-color: #e7e5e4;
                border-bottom-color: #e7e5e4;
            }

            .fleet-shell.plans-container .plan-stat .stat-value,
            .fleet-shell.plans-container .plan-includes .includes-title {
                color: #1c1917;
            }

            .fleet-shell.plans-container .plan-includes .includes-list li {
                color: #44403c;
            }

            .fleet-shell.plans-container .plan-includes .includes-list li mat-icon {
                color: #d97706;
            }

            .fleet-shell.plans-container .select-button,
            .fleet-shell.plans-container .action-button,
            .fleet-shell.plans-container .checkout-button,
            .fleet-shell.plans-container .upgrade-button {
                border-radius: 0.75rem !important;
            }

            .fleet-shell.plans-container .select-button.plus,
            .fleet-shell.plans-container .action-button.primary,
            .fleet-shell.plans-container .checkout-button.plus,
            .fleet-shell.plans-container .upgrade-button {
                background: #d97706 !important;
                color: #ffffff !important;
                box-shadow: 0 4px 14px rgb(217 119 6 / 0.25);
            }

            .fleet-shell.plans-container .select-button.plus:hover:not(:disabled),
            .fleet-shell.plans-container .action-button.primary:hover:not(:disabled),
            .fleet-shell.plans-container .checkout-button.plus:hover:not(:disabled),
            .fleet-shell.plans-container .upgrade-button:hover:not(:disabled) {
                background: #b45309 !important;
                box-shadow: 0 6px 20px rgb(217 119 6 / 0.35);
            }

            .fleet-shell.plans-container .action-button.primary.error {
                background: #dc2626 !important;
                color: #ffffff !important;
                box-shadow: 0 4px 14px rgb(220 38 38 / 0.3);
            }

            .fleet-shell.plans-container .select-button.business,
            .fleet-shell.plans-container .checkout-button.business,
            .fleet-shell.plans-container .select-button.enterprise {
                background: #1c1917 !important;
                color: #ffffff !important;
                box-shadow: 0 4px 14px rgb(28 25 23 / 0.22);
            }

            .fleet-shell.plans-container .select-button.business:hover:not(:disabled),
            .fleet-shell.plans-container .checkout-button.business:hover:not(:disabled),
            .fleet-shell.plans-container .select-button.enterprise:hover:not(:disabled) {
                background: #292524 !important;
            }

            .fleet-shell.plans-container .select-button.free {
                border-color: #d6d3d1;
                color: #44403c;
            }

            .fleet-shell.plans-container .upgrade-section {
                background: linear-gradient(135deg, #1c1917 0%, #292524 100%);
                border-radius: 1rem;
                border: 1px solid #292524;
            }

            .fleet-shell.plans-container .upgrade-section::after {
                background: radial-gradient(ellipse, rgb(217 119 6 / 0.18) 0%, transparent 70%);
            }

            .fleet-shell.plans-container .upgrade-badge {
                background: rgb(217 119 6 / 0.18);
                border-color: rgb(251 191 36 / 0.35);
            }

            .fleet-shell.plans-container .upgrade-badge mat-icon,
            .fleet-shell.plans-container .upgrade-badge span {
                color: #fbbf24;
            }

            .fleet-shell.plans-container .upgrade-subheadline,
            .fleet-shell.plans-container .upgrade-hint {
                color: #d6d3d1;
            }

            .fleet-shell.plans-container .floating-icon.icon-1,
            .fleet-shell.plans-container .floating-icon.icon-2,
            .fleet-shell.plans-container .floating-icon.icon-3 {
                background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
                box-shadow: 0 8px 24px rgb(217 119 6 / 0.35);
            }

            .fleet-shell.plans-container .landing-slider-section {
                background: #ffffff;
                border: 1px solid #e7e5e4;
                border-radius: 1rem;
            }

            .fleet-shell.plans-container .landing-slider-title {
                color: #1c1917;
            }

            .fleet-shell.plans-container .landing-slider-subtitle,
            .fleet-shell.plans-container .landing-slider-track .track-label {
                color: #57534e;
            }

            .fleet-shell.plans-container .range-slider::before {
                background: linear-gradient(90deg, #d97706 0%, #f59e0b 100%);
            }

            .fleet-shell.plans-container .range-slider__input::-webkit-slider-runnable-track {
                background-color: #e7e5e4;
            }

            .fleet-shell.plans-container .range-slider__input::-webkit-slider-thumb {
                background: #d97706;
                border-color: #ffffff;
                box-shadow: 0 0 0 4px #ffffff, 0 2px 8px rgb(0 0 0 / 0.2);
            }

            .fleet-shell.plans-container .range-slider__input::-moz-range-track {
                background-color: #e7e5e4;
            }

            .fleet-shell.plans-container .range-slider__input::-moz-range-thumb {
                background: #d97706;
                border-color: #ffffff;
                box-shadow: 0 0 0 4px #ffffff, 0 2px 8px rgb(0 0 0 / 0.2);
            }

            .fleet-shell.plans-container .landing-slider-pill {
                border-radius: 0.75rem;
                background: #d97706;
                color: #ffffff;
                box-shadow: 0 4px 14px rgb(217 119 6 / 0.28);
            }

            .fleet-shell.plans-container .checkout-header.header-plus {
                background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
            }

            .fleet-shell.plans-container .checkout-header.header-business {
                background: linear-gradient(135deg, #1c1917 0%, #292524 100%);
            }

            .fleet-shell.plans-container .checkout-stats {
                background: #fafaf9;
                border-bottom-color: #e7e5e4;
            }

            .fleet-shell.plans-container .checkout-stats .stat-item mat-icon {
                color: #d97706;
            }

            .fleet-shell.plans-container .checkout-stats .stat-item .stat-value {
                color: #1c1917;
            }

            .fleet-shell.plans-container .checkout-stats .stat-item .stat-label {
                color: #57534e;
            }

            .fleet-shell.plans-container .checkout-stats .stat-divider {
                background: #e7e5e4;
            }

            :host-context(.dark) .fleet-shell.plans-container {
                background: #030712;
                color: #f5f5f4;
            }

            :host-context(.dark) .fleet-shell.plans-container .current-plan-header .current-plan-title {
                color: #ffffff;
            }

            :host-context(.dark) .fleet-shell.plans-container .current-plan-header .current-plan-subtitle {
                color: #a8a29e;
            }

            :host-context(.dark) .fleet-shell.plans-container .back-button {
                color: #fbbf24;
            }

            :host-context(.dark) .fleet-shell.plans-container .back-button:hover {
                background: rgb(251 191 36 / 0.14);
            }

            :host-context(.dark) .fleet-shell.plans-container .plan-card,
            :host-context(.dark) .fleet-shell.plans-container .select-plan-card,
            :host-context(.dark) .fleet-shell.plans-container .checkout-card,
            :host-context(.dark) .fleet-shell.plans-container .landing-slider-section {
                background: #111827;
                border-color: #1f2937;
                box-shadow: 0 12px 32px rgb(0 0 0 / 0.45);
            }

            :host-context(.dark) .fleet-shell.plans-container .select-plan-card:hover {
                border-color: rgb(251 191 36 / 0.45);
            }

            :host-context(.dark) .fleet-shell.plans-container .select-plan-card.featured {
                border-color: #fbbf24;
                box-shadow: 0 12px 28px rgb(251 191 36 / 0.14);
            }

            :host-context(.dark) .fleet-shell.plans-container .select-plan-card.featured .featured-badge {
                background: #fbbf24;
                color: #030712;
            }

            :host-context(.dark) .fleet-shell.plans-container .select-plan-card--current,
            :host-context(.dark) .fleet-shell.plans-container .select-plan-card--current.featured {
                border-color: #34d399;
                box-shadow: 0 10px 28px rgb(52 211 153 / 0.18);
            }

            :host-context(.dark) .fleet-shell.plans-container .card-header {
                background: #030712;
                border-bottom-color: #1f2937;
            }

            :host-context(.dark) .fleet-shell.plans-container .status-badge.success {
                background: rgb(16 185 129 / 0.18);
                color: #34d399;
            }

            :host-context(.dark) .fleet-shell.plans-container .status-badge.success .status-dot {
                background: #34d399;
            }

            :host-context(.dark) .fleet-shell.plans-container .price-section,
            :host-context(.dark) .fleet-shell.plans-container .payment-method,
            :host-context(.dark) .fleet-shell.plans-container .optional-section,
            :host-context(.dark) .fleet-shell.plans-container .checkout-stats {
                background: #030712;
                border-color: #1f2937;
            }

            :host-context(.dark) .fleet-shell.plans-container .price-section .price-label,
            :host-context(.dark) .fleet-shell.plans-container .price-section .price-period,
            :host-context(.dark) .fleet-shell.plans-container .price-section .price-currency,
            :host-context(.dark) .fleet-shell.plans-container .payment-method .payment-expiry,
            :host-context(.dark) .fleet-shell.plans-container .feature-content .feature-label,
            :host-context(.dark) .fleet-shell.plans-container .optional-section .optional-subtitle,
            :host-context(.dark) .fleet-shell.plans-container .plan-pricing .plan-period,
            :host-context(.dark) .fleet-shell.plans-container .plan-range,
            :host-context(.dark) .fleet-shell.plans-container .plan-stat .stat-label,
            :host-context(.dark) .fleet-shell.plans-container .landing-slider-subtitle,
            :host-context(.dark) .fleet-shell.plans-container .landing-slider-track .track-label,
            :host-context(.dark) .fleet-shell.plans-container .checkout-stats .stat-item .stat-label {
                color: #a8a29e;
            }

            :host-context(.dark) .fleet-shell.plans-container .price-section .price-amount,
            :host-context(.dark) .fleet-shell.plans-container .payment-method .payment-text,
            :host-context(.dark) .fleet-shell.plans-container .feature-content .feature-value,
            :host-context(.dark) .fleet-shell.plans-container .optional-section .optional-title,
            :host-context(.dark) .fleet-shell.plans-container .optional-card .optional-label,
            :host-context(.dark) .fleet-shell.plans-container .optional-card .optional-value,
            :host-context(.dark) .fleet-shell.plans-container .plan-pricing .plan-price,
            :host-context(.dark) .fleet-shell.plans-container .plan-stat .stat-value,
            :host-context(.dark) .fleet-shell.plans-container .plan-includes .includes-title,
            :host-context(.dark) .fleet-shell.plans-container .landing-slider-title,
            :host-context(.dark) .fleet-shell.plans-container .checkout-stats .stat-item .stat-value {
                color: #ffffff;
            }

            :host-context(.dark) .fleet-shell.plans-container .feature-content .feature-value.text-emerald-700,
            :host-context(.dark) .fleet-shell.plans-container .plan-stat .stat-value.text-emerald-700,
            :host-context(.dark) .fleet-shell.plans-container .checkout-stats .stat-item .stat-value.text-emerald-700 {
                color: #34d399;
            }

            :host-context(.dark) .fleet-shell.plans-container .feature-card,
            :host-context(.dark) .fleet-shell.plans-container .optional-card {
                background: #111827;
                border-color: #1f2937;
            }

            :host-context(.dark) .fleet-shell.plans-container .feature-icon.email,
            :host-context(.dark) .fleet-shell.plans-container .feature-icon.whitelabel,
            :host-context(.dark) .fleet-shell.plans-container .feature-icon.biometrics,
            :host-context(.dark) .fleet-shell.plans-container .feature-icon.api,
            :host-context(.dark) .fleet-shell.plans-container .optional-icon.sms,
            :host-context(.dark) .fleet-shell.plans-container .optional-icon.whatsapp {
                background: rgb(217 119 6 / 0.2);
                color: #fbbf24;
            }

            :host-context(.dark) .fleet-shell.plans-container .feature-status.active {
                color: #34d399;
            }

            :host-context(.dark) .fleet-shell.plans-container .plan-features,
            :host-context(.dark) .fleet-shell.plans-container .checkout-stats {
                border-color: #1f2937;
            }

            :host-context(.dark) .fleet-shell.plans-container .checkout-stats .stat-divider {
                background: #1f2937;
            }

            :host-context(.dark) .fleet-shell.plans-container .plan-includes .includes-list li {
                color: #d6d3d1;
            }

            :host-context(.dark) .fleet-shell.plans-container .plan-includes .includes-list li mat-icon,
            :host-context(.dark) .fleet-shell.plans-container .checkout-stats .stat-item mat-icon {
                color: #fbbf24;
            }

            :host-context(.dark) .fleet-shell.plans-container .plan-badge.plus {
                background: rgb(217 119 6 / 0.22);
                color: #fbbf24;
            }

            :host-context(.dark) .fleet-shell.plans-container .plan-badge.business,
            :host-context(.dark) .fleet-shell.plans-container .plan-badge.free {
                background: #1f2937;
                color: #e7e5e4;
            }

            :host-context(.dark) .fleet-shell.plans-container .plan-badge.enterprise {
                background: #374151;
                color: #ffffff;
            }

            :host-context(.dark) .fleet-shell.plans-container .select-button.plus,
            :host-context(.dark) .fleet-shell.plans-container .action-button.primary,
            :host-context(.dark) .fleet-shell.plans-container .checkout-button.plus,
            :host-context(.dark) .fleet-shell.plans-container .upgrade-button,
            :host-context(.dark) .fleet-shell.plans-container .landing-slider-pill {
                background: #f59e0b !important;
                color: #030712 !important;
            }

            :host-context(.dark) .fleet-shell.plans-container .select-button.plus:hover:not(:disabled),
            :host-context(.dark) .fleet-shell.plans-container .action-button.primary:hover:not(:disabled),
            :host-context(.dark) .fleet-shell.plans-container .checkout-button.plus:hover:not(:disabled),
            :host-context(.dark) .fleet-shell.plans-container .upgrade-button:hover:not(:disabled) {
                background: #fbbf24 !important;
            }

            :host-context(.dark) .fleet-shell.plans-container .select-button.business,
            :host-context(.dark) .fleet-shell.plans-container .checkout-button.business,
            :host-context(.dark) .fleet-shell.plans-container .select-button.enterprise {
                background: #f5f5f4 !important;
                color: #030712 !important;
            }

            :host-context(.dark) .fleet-shell.plans-container .select-button.business:hover:not(:disabled),
            :host-context(.dark) .fleet-shell.plans-container .checkout-button.business:hover:not(:disabled),
            :host-context(.dark) .fleet-shell.plans-container .select-button.enterprise:hover:not(:disabled) {
                background: #ffffff !important;
            }

            :host-context(.dark) .fleet-shell.plans-container .select-button.free {
                border-color: #374151;
                color: #e7e5e4;
            }

            :host-context(.dark) .fleet-shell.plans-container .range-slider__input::-webkit-slider-runnable-track {
                background-color: #374151;
            }

            :host-context(.dark) .fleet-shell.plans-container .range-slider__input::-webkit-slider-thumb {
                background: #fbbf24;
                border-color: #111827;
                box-shadow: 0 0 0 4px #111827, 0 2px 10px rgb(0 0 0 / 0.45);
            }

            :host-context(.dark) .fleet-shell.plans-container .range-slider__input::-moz-range-track {
                background-color: #374151;
            }

            :host-context(.dark) .fleet-shell.plans-container .range-slider__input::-moz-range-thumb {
                background: #fbbf24;
                border-color: #111827;
                box-shadow: 0 0 0 4px #111827, 0 2px 10px rgb(0 0 0 / 0.45);
            }

            .fleet-shell.plans-container .plan-discount-pill {
                display: inline-flex;
                align-items: center;
                gap: 0.375rem;
                margin-bottom: 0.875rem;
                padding: 0.375rem 0.75rem;
                border-radius: 0.625rem;
                font-size: 0.75rem;
                font-weight: 700;
                letter-spacing: 0.01em;
                background: #ecfdf5;
                color: #047857;
                border: 1px solid #a7f3d0;
            }

            .fleet-shell.plans-container .plan-discount-pill--business {
                background: #fef3c7;
                color: #92400e;
                border-color: #fcd34d;
            }

            .fleet-shell.plans-container .plan-discount-pill--neutral {
                background: #f5f5f4;
                color: #57534e;
                border-color: #e7e5e4;
            }

            :host-context(.dark) .fleet-shell.plans-container .plan-discount-pill {
                background: rgb(16 185 129 / 0.16);
                color: #6ee7b7;
                border-color: rgb(52 211 153 / 0.35);
            }

            :host-context(.dark) .fleet-shell.plans-container .plan-discount-pill--business {
                background: rgb(245 158 11 / 0.18);
                color: #fcd34d;
                border-color: rgb(251 191 36 / 0.38);
            }

            :host-context(.dark) .fleet-shell.plans-container .plan-discount-pill--neutral {
                background: #1f2937;
                color: #d6d3d1;
                border-color: #374151;
            }
        `,
    ],
})
export class FleetPlansComponent implements OnInit {
    private _fleet = inject(SmartFleetService);
    private _env = inject(AccountEnvironmentService);
    private _subscriptions = inject(SubscriptionService);
    private _http = inject(HttpClient);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _authGate = inject(AuthRequiredGateService);
    private _confirm = inject(FuseConfirmationService);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);

    private _lastSandboxRevision = 0;

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
    monitoring = computed(() => this.overview()?.monitoring ?? null);
    usageCreditsMonth = computed(() => this.overview()?.usageCreditsMonth ?? 0);
    activeAssets = computed(() => this.usage()?.activeAssets ?? 0);
    isSandboxMode = computed(
        () => this._env.isSandboxModeActive() || Boolean(this.overview()?.usage?.sandboxMode)
    );

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

    /** Per-asset monitoring estimate; falls back to weekly compliance reference when there are no rules yet. */
    monitoringPerAsset = computed(() => {
        const configured = this.overview()?.projectedMonthlyCredits?.creditsPerAsset ?? 0;
        if (configured > 0) return configured;
        return this.overview()?.usageReference?.weeklyRuntCheck?.creditsPerAsset ?? 0;
    });

    monitoringEstimateIsReference = computed(
        () => !(this.overview()?.projectedMonthlyCredits?.creditsPerAsset) && this.monitoringPerAsset() > 0
    );

    monitoringCredits = computed(() => this.slots() * this.monitoringPerAsset());
    creditBreakdown = computed(() => this.overview()?.projectedMonthlyCredits?.breakdown ?? []);
    reportsCreditsMonth = computed(() => this.reports()?.credits ?? 0);

    activePlanDiscountPercent = computed(() => {
        const current = this.plan();

        if (!current) return 0;

        if (typeof current.endpointDiscountPercent === 'number') {
            return current.endpointDiscountPercent;
        }

        return current.code === 'smart_fleet_business' ? 50 : 30;
    });

    referenceListPrice = computed(() => {
        const ref = this.overview()?.usageReference?.weeklyRuntCheck;

        return ref?.listPricePerCheck ?? ref?.pricePerCheck ?? 0;
    });

    hasSampleCheckPrice = computed(() => this.referenceListPrice() > 0);

    selectedDiscountPercent = computed(() => {
        const key = this.selectedTier();

        return key ? this.tierDiscountPercent(key) : 0;
    });

    selectedMonitoringListTotal = computed(() => {
        const configuredListPerAsset = this.overview()?.projectedMonthlyCredits?.listCreditsPerAsset ?? 0;
        const refListPerAsset = this.overview()?.usageReference?.weeklyRuntCheck?.listCreditsPerAsset ?? 0;
        const basePerAsset = configuredListPerAsset > 0 ? configuredListPerAsset : refListPerAsset;

        return this.slots() * basePerAsset;
    });

    selectedMonitoringDiscountedTotal = computed(() => {
        const listTotal = this.selectedMonitoringListTotal();
        const discount = this.selectedDiscountPercent();

        if (listTotal > 0) {
            return listTotal * (1 - discount / 100);
        }

        return this.monitoringCredits();
    });

    selectedMonitoringSavings = computed(() =>
        Math.max(0, this.selectedMonitoringListTotal() - this.selectedMonitoringDiscountedTotal())
    );

    /** Same tier and slot count as today: nothing to buy. */
    isUnchanged = computed(
        () =>
            this.isRenewing() &&
            this.plan()?.tier === this.selectedTier() &&
            this.plan()?.assetLimit === this.slots()
    );

    constructor() {
        effect(() => {
            const revision = this._fleet.sandboxRevision();

            if (revision > 0 && revision !== this._lastSandboxRevision) {
                this._lastSandboxRevision = revision;
                void this._load().then(() => {
                    if (this.view() === 'select' && this.selectedTier()) {
                        this.setSlots(this.slots());
                    }
                });
            }
        });
    }

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

    /** A tier is out of reach once the fleet already has more active assets than it covers. */
    tierFits(key: FleetPlanTierKey): boolean {
        const tier = this._tierOf(key);
        return Boolean(tier) && this.activeAssets() <= tier!.maxAssets;
    }

    tierStartingPrice(key: FleetPlanTierKey): number {
        const tier = this._tierOf(key);
        return tier ? tier.minAssets * Number(tier.amount ?? 0) : 0;
    }

    tierDiscountPercent(key: FleetPlanTierKey | 'free' | 'enterprise'): number {
        if (key === 'free') return 0;
        if (key === 'enterprise') return this.usage()?.enterpriseDiscountPercent ?? 65;

        return this._tierOf(key)?.endpointDiscountPercent ?? (key === 'business' ? 50 : 30);
    }

    tierExampleCheckPrice(key: FleetPlanTierKey): number {
        const ref = this.overview()?.usageReference?.weeklyRuntCheck;

        if (key === 'plus' && typeof ref?.plusPricePerCheck === 'number') {
            return ref.plusPricePerCheck;
        }

        if (key === 'business' && typeof ref?.businessPricePerCheck === 'number') {
            return ref.businessPricePerCheck;
        }

        const list = this.referenceListPrice();

        return Number((list * (1 - this.tierDiscountPercent(key) / 100)).toFixed(4));
    }

    creditsPerAssetMonth(): number {
        return this.overview()?.projectedMonthlyCredits?.creditsPerAsset ?? 0;
    }

    formatUsd(credits: number): string {
        return formatFleetLookupUsd(credits);
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
        window.open(ENTERPRISE_URLS[lang], '_blank', 'noopener,noreferrer');
    }

    contactEnterprise(): void {
        this.purchaseEnterprise();
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
