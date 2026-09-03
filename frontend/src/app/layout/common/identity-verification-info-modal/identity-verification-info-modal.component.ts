import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'identity-verification-info-modal',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
    template: `
        <div class="identity-modal">
            <button
                mat-icon-button
                type="button"
                (click)="close()"
                class="identity-modal__close"
                [attr.aria-label]="'accountEnv.identityVerificationModal.cancel' | transloco"
            >
                <mat-icon>close</mat-icon>
            </button>

            <div class="identity-modal__header">
                <div class="identity-modal__art" aria-hidden="true">
                    <svg viewBox="0 0 88 64" fill="none">
                        <rect class="identity-modal__slab" x="8" y="22" width="56" height="32" rx="6" transform="rotate(-8 36 38)" />
                        <rect class="identity-modal__slab-face" x="12" y="18" width="50" height="28" rx="5" transform="rotate(-8 37 32)" />
                        <circle class="identity-modal__badge" cx="58" cy="18" r="12" />
                        <path
                            class="identity-modal__check"
                            d="M53 18.2l3.4 3.4 7.2-7.4"
                            stroke-width="2.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <h2 class="identity-modal__title">
                    {{ 'accountEnv.identityVerificationModal.title' | transloco }}
                </h2>
                <p class="identity-modal__subtitle">
                    {{ 'accountEnv.identityVerificationModal.subtitle' | transloco }}
                </p>
            </div>

            <ul class="identity-modal__reasons">
                <li class="identity-modal__reason">
                    <span class="identity-modal__icon" aria-hidden="true">
                        <mat-icon>shield</mat-icon>
                    </span>
                    <div>
                        <h3>{{ 'accountEnv.identityVerificationModal.reason5_title' | transloco }}</h3>
                        <p>{{ 'accountEnv.identityVerificationModal.reason5_desc' | transloco }}</p>
                    </div>
                </li>
                <li class="identity-modal__reason">
                    <span class="identity-modal__icon" aria-hidden="true">
                        <mat-icon>assignment_ind</mat-icon>
                    </span>
                    <div>
                        <h3>{{ 'accountEnv.identityVerificationModal.reason1_title' | transloco }}</h3>
                        <p>{{ 'accountEnv.identityVerificationModal.reason1_desc' | transloco }}</p>
                    </div>
                </li>
                <li class="identity-modal__reason">
                    <span class="identity-modal__icon" aria-hidden="true">
                        <mat-icon>folder_shared</mat-icon>
                    </span>
                    <div>
                        <h3>{{ 'accountEnv.identityVerificationModal.reason2_title' | transloco }}</h3>
                        <p>{{ 'accountEnv.identityVerificationModal.reason2_desc' | transloco }}</p>
                    </div>
                </li>
                <li class="identity-modal__reason">
                    <span class="identity-modal__icon" aria-hidden="true">
                        <mat-icon>rocket_launch</mat-icon>
                    </span>
                    <div>
                        <h3>{{ 'accountEnv.identityVerificationModal.reason3_title' | transloco }}</h3>
                        <p>{{ 'accountEnv.identityVerificationModal.reason3_desc' | transloco }}</p>
                    </div>
                </li>
                <li class="identity-modal__reason">
                    <span class="identity-modal__icon" aria-hidden="true">
                        <mat-icon>payments</mat-icon>
                    </span>
                    <div>
                        <h3>{{ 'accountEnv.identityVerificationModal.reason4_title' | transloco }}</h3>
                        <p>{{ 'accountEnv.identityVerificationModal.reason4_desc' | transloco }}</p>
                    </div>
                </li>
            </ul>

            <button mat-flat-button type="button" class="identity-modal__cta" (click)="verify()">
                {{ 'accountEnv.identityVerificationModal.cta' | transloco }}
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
            }

            .identity-modal {
                position: relative;
                display: flex;
                flex-direction: column;
            }

            .identity-modal__close {
                position: absolute;
                top: -4px;
                right: -4px;
                color: rgb(148, 163, 184);
            }

            .identity-modal__header {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                margin-bottom: 1.5rem;
            }

            .identity-modal__art {
                width: 88px;
                margin-bottom: 0.75rem;
            }

            .identity-modal__art svg {
                display: block;
                width: 100%;
                height: auto;
            }

            .identity-modal__slab {
                fill: rgba(59, 130, 246, 0.16);
            }

            .identity-modal__slab-face {
                fill: rgb(255, 255, 255);
                stroke: rgba(148, 163, 184, 0.45);
            }

            .identity-modal__badge {
                fill: rgb(37, 99, 235);
            }

            .identity-modal__check {
                stroke: rgb(255, 255, 255);
                fill: none;
            }

            .identity-modal__title {
                margin: 0;
                font-size: 1.25rem;
                font-weight: 700;
                line-height: 1.3;
                color: rgb(15, 23, 42);
            }

            .identity-modal__subtitle {
                margin: 0.5rem 0 0;
                max-width: 22rem;
                font-size: 0.8125rem;
                line-height: 1.55;
                color: rgb(71, 85, 105);
            }

            .identity-modal__reasons {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                margin: 0 0 1.5rem;
                padding: 0;
                list-style: none;
            }

            .identity-modal__reason {
                display: flex;
                align-items: flex-start;
                gap: 0.875rem;
                padding: 0.65rem 0.5rem;
                border-radius: 12px;
            }

            .identity-modal__icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 2.25rem;
                height: 2.25rem;
                flex-shrink: 0;
                border-radius: 0.65rem;
                background: rgb(255, 255, 255);
                color: rgb(15, 23, 42);
                border: 1px solid rgba(148, 163, 184, 0.28);
            }

            .identity-modal__icon mat-icon {
                width: 20px;
                height: 20px;
                font-size: 20px;
            }

            .identity-modal__reason h3 {
                margin: 0;
                font-size: 0.875rem;
                font-weight: 600;
                color: rgb(15, 23, 42);
            }

            .identity-modal__reason p {
                margin: 0.15rem 0 0;
                font-size: 0.75rem;
                line-height: 1.45;
                color: rgb(71, 85, 105);
            }

            .identity-modal__cta {
                width: 100%;
                border-radius: 0.75rem !important;
                background: rgb(15, 23, 42) !important;
                color: rgb(255, 255, 255) !important;
                font-weight: 600 !important;
                height: 2.75rem !important;
            }

            :host-context(.dark) {
                .identity-modal__slab {
                    fill: rgba(96, 165, 250, 0.22);
                }

                .identity-modal__slab-face {
                    fill: rgb(51, 65, 85);
                    stroke: rgba(148, 163, 184, 0.35);
                }

                .identity-modal__badge {
                    fill: rgb(96, 165, 250);
                }

                .identity-modal__title,
                .identity-modal__reason h3 {
                    color: rgb(248, 250, 252);
                }

                .identity-modal__subtitle,
                .identity-modal__reason p {
                    color: rgb(203, 213, 225);
                }

                .identity-modal__icon {
                    background: rgb(15, 23, 42);
                    color: rgb(226, 232, 240);
                    border-color: rgba(148, 163, 184, 0.22);
                }

                .identity-modal__cta {
                    background: rgb(226, 232, 240) !important;
                    color: rgb(15, 23, 42) !important;
                }
            }
        `,
    ],
})
export class IdentityVerificationInfoModalComponent {
    private _dialogRef = inject(MatDialogRef<IdentityVerificationInfoModalComponent, 'verify' | undefined>);

    close(): void {
        this._dialogRef.close();
    }

    verify(): void {
        this._dialogRef.close('verify');
    }
}
