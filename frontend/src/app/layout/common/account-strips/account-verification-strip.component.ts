import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { AccountEnvironmentService } from '../../../core/account/account-environment.service';

/**
 * Full-width strip shown above the header when `canRecharge === false`.
 * Prompts the user to complete company verification to unlock production access.
 */
@Component({
    selector: 'account-verification-strip',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatProgressSpinnerModule, RouterLink, TranslocoModule],
    template: `
        @if (env.showVerifyStrip()) {
            <section class="verification-strip" aria-labelledby="verification-strip-title">
                <div class="verification-strip__glow" aria-hidden="true"></div>

                <div class="verification-strip__intro">
                    <span class="verification-strip__eyebrow">
                        <mat-icon aria-hidden="true">auto_awesome</mat-icon>
                        {{ 'accountEnv.verifyStrip.eyebrow' | transloco }}
                    </span>
                    <span id="verification-strip-title" class="verification-strip__title">
                        {{ 'accountEnv.verifyStrip.title' | transloco }}
                    </span>
                </div>

                <div class="verification-strip__journey">
                    <div
                        class="journey-step"
                        [class.journey-step--pending]="env.verifyStripPendingReview()"
                    >
                        <span class="journey-step__number">
                            @if (env.verifyStripPendingReview()) {
                                <mat-icon aria-hidden="true">schedule</mat-icon>
                            } @else {
                                1
                            }
                        </span>
                        <span class="journey-step__copy">
                            <strong>
                                {{
                                    env.verifyStripPendingReview()
                                        ? ('accountEnv.verifyStrip.pendingTitle' | transloco)
                                        : ('accountEnv.verifyStrip.verifyTitle' | transloco)
                                }}
                            </strong>
                            <span>
                                {{
                                    env.verifyStripPendingReview()
                                        ? ('accountEnv.verifyStrip.pendingText' | transloco)
                                        : ('accountEnv.verifyStrip.verifyText' | transloco)
                                }}
                            </span>
                        </span>
                    </div>

                    <mat-icon class="verification-strip__arrow" aria-hidden="true"
                        >arrow_forward</mat-icon
                    >

                    <div class="journey-step journey-step--credits">
                        <span class="journey-step__number">
                            <mat-icon aria-hidden="true">savings</mat-icon>
                        </span>
                        <span class="journey-step__copy">
                            <strong>{{ 'accountEnv.verifyStrip.creditTitle' | transloco }}</strong>
                            <span>{{ 'accountEnv.verifyStrip.creditText' | transloco }}</span>
                        </span>
                    </div>
                </div>

                <div class="verification-strip__actions">
                    <a routerLink="/add-credits" class="verification-strip__secondary">
                        <mat-icon aria-hidden="true">account_balance_wallet</mat-icon>
                        <span>{{ 'accountEnv.verifyStrip.rechargeCta' | transloco }}</span>
                    </a>
                    <button
                        mat-flat-button
                        type="button"
                        class="verification-strip__primary"
                        [disabled]="env.verifyCompanyLoading() || env.verifyStripPendingReview()"
                        (click)="env.startCompanyVerification()"
                    >
                        @if (env.verifyCompanyLoading()) {
                            <mat-spinner diameter="16"></mat-spinner>
                        } @else {
                            <mat-icon aria-hidden="true">verified_user</mat-icon>
                        }
                        {{
                            env.verifyStripPendingReview()
                                ? ('accountEnv.verifyStrip.pendingCta' | transloco)
                                : ('accountEnv.verifyStrip.cta' | transloco)
                        }}
                    </button>
                </div>
            </section>
        }
    `,
    styles: [
        `
            :host {
                display: contents;
            }

            .verification-strip {
                --strip-ink: #f8fafc;
                --strip-muted: #cbd5e1;
                position: relative;
                isolation: isolate;
                display: grid;
                grid-template-columns: minmax(170px, 0.7fr) minmax(420px, 1.6fr) auto;
                align-items: center;
                gap: 20px;
                width: 100%;
                min-height: 72px;
                overflow: hidden;
                border-bottom: 1px solid rgba(125, 211, 252, 0.18);
                background:
                    linear-gradient(110deg, rgba(14, 116, 144, 0.22), transparent 32%),
                    linear-gradient(90deg, #07111f 0%, #0b1728 52%, #07111f 100%);
                padding: 10px 20px;
                color: var(--strip-ink);
                box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.04);
            }

            .verification-strip__glow {
                position: absolute;
                z-index: -1;
                top: -70px;
                right: 12%;
                width: 260px;
                height: 150px;
                border-radius: 999px;
                background: rgba(34, 211, 238, 0.12);
                filter: blur(42px);
                pointer-events: none;
            }

            .verification-strip__intro,
            .journey-step__copy {
                display: flex;
                min-width: 0;
                flex-direction: column;
            }

            .verification-strip__intro {
                gap: 2px;
            }

            .verification-strip__eyebrow {
                display: flex;
                align-items: center;
                gap: 5px;
                color: #67e8f9;
                font-size: 10px;
                font-weight: 800;
                letter-spacing: 0.12em;
                line-height: 1;
                text-transform: uppercase;
            }

            .verification-strip__eyebrow mat-icon {
                width: 14px;
                height: 14px;
                font-size: 14px;
            }

            .verification-strip__title {
                overflow: hidden;
                color: white;
                font-size: 15px;
                font-weight: 750;
                line-height: 1.25;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .verification-strip__journey {
                display: flex;
                min-width: 0;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }

            .journey-step {
                display: flex;
                min-width: 0;
                max-width: 290px;
                align-items: center;
                gap: 9px;
            }

            .journey-step__number {
                display: inline-flex;
                width: 30px;
                height: 30px;
                flex: 0 0 30px;
                align-items: center;
                justify-content: center;
                border: 1px solid rgba(103, 232, 249, 0.38);
                border-radius: 10px;
                background: rgba(8, 145, 178, 0.16);
                color: #a5f3fc;
                font-size: 12px;
                font-weight: 800;
                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
            }

            .journey-step__number mat-icon {
                width: 16px;
                height: 16px;
                font-size: 16px;
            }

            .journey-step--pending .journey-step__number {
                border-color: rgba(251, 191, 36, 0.4);
                background: rgba(245, 158, 11, 0.14);
                color: #fde68a;
            }

            .journey-step--credits .journey-step__number {
                border-color: rgba(52, 211, 153, 0.38);
                background: rgba(16, 185, 129, 0.14);
                color: #a7f3d0;
            }

            .journey-step__copy {
                gap: 1px;
            }

            .journey-step__copy strong {
                overflow: hidden;
                color: #f8fafc;
                font-size: 12px;
                font-weight: 750;
                line-height: 1.25;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .journey-step__copy span {
                display: -webkit-box;
                overflow: hidden;
                color: var(--strip-muted);
                font-size: 10.5px;
                line-height: 1.25;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

            .verification-strip__arrow {
                width: 16px;
                height: 16px;
                flex: 0 0 16px;
                color: #475569;
                font-size: 16px;
            }

            .verification-strip__actions {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 8px;
                white-space: nowrap;
            }

            .verification-strip__secondary {
                display: inline-flex;
                min-height: 36px;
                align-items: center;
                justify-content: center;
                gap: 7px;
                border: 1px solid rgba(103, 232, 249, 0.75);
                border-radius: 10px;
                background: rgba(207, 250, 254, 0.96);
                padding: 0 15px;
                color: #083344;
                font-size: 11px;
                font-weight: 800;
                line-height: 1;
                text-decoration: none;
                box-shadow:
                    0 6px 18px rgba(6, 182, 212, 0.14),
                    inset 0 1px 0 rgba(255, 255, 255, 0.7);
                transition:
                    background 150ms ease,
                    border-color 150ms ease,
                    transform 150ms ease;
            }

            .verification-strip__secondary:hover {
                border-color: #a5f3fc;
                background: #ecfeff;
                color: #083344;
                transform: translateY(-1px);
            }

            .verification-strip__secondary:focus-visible {
                outline: 2px solid #67e8f9;
                outline-offset: 2px;
            }

            .verification-strip__primary {
                border-radius: 10px;
                background: #f8fafc !important;
                color: #0f172a !important;
                font-size: 11px;
                font-weight: 800;
                box-shadow: 0 8px 24px rgba(2, 132, 199, 0.18);
            }

            .verification-strip__primary:not(:disabled):hover {
                background: #cffafe !important;
            }

            .verification-strip__primary mat-icon,
            .verification-strip__secondary mat-icon {
                width: 16px;
                height: 16px;
                font-size: 16px;
            }

            @media (max-width: 1100px) {
                .verification-strip {
                    grid-template-columns: minmax(150px, 0.7fr) minmax(330px, 1.3fr) auto;
                    gap: 12px;
                    padding-inline: 14px;
                }

                .journey-step__copy span,
                .verification-strip__secondary mat-icon {
                    display: none;
                }
            }

            @media (max-width: 760px) {
                .verification-strip {
                    grid-template-columns: 1fr auto;
                    min-height: 64px;
                }

                .verification-strip__intro {
                    display: none;
                }

                .verification-strip__journey {
                    justify-content: flex-start;
                }
            }

            @media (max-width: 560px) {
                .verification-strip {
                    grid-template-columns: 1fr;
                    gap: 8px;
                    padding-block: 10px;
                }

                .verification-strip__journey {
                    justify-content: center;
                }

                .verification-strip__actions {
                    justify-content: stretch;
                }

                .verification-strip__actions > * {
                    flex: 1 1 0;
                }
            }
        `,
    ],
})
export class AccountVerificationStripComponent {
    readonly env = inject(AccountEnvironmentService);
}
