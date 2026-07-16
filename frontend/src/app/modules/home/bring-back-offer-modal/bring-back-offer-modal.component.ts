import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import type { BringBackOffer } from 'app/core/user/user.types';
import type { BringBackModalDismissReason } from './bring-back-offer-storage';

export interface BringBackOfferModalData {
	offer: BringBackOffer;
}

@Component({
	selector: 'home-bring-back-offer-modal',
	standalone: true,
	imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
	template: `
		<div class="flex max-w-lg flex-col">
			<div
				class="flex items-start justify-between gap-4 border-b border-amber-200/80 px-6 pb-4 pt-6 dark:border-amber-900/50"
			>
				<div class="flex min-w-0 items-start gap-3">
					<div
						class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-600/15 text-amber-800 dark:text-amber-300"
					>
						<mat-icon>local_offer</mat-icon>
					</div>
					<div class="min-w-0 space-y-1">
						<p
							class="inline-flex rounded-full border border-amber-200/90 bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-950 dark:border-amber-800 dark:bg-amber-900/50 dark:text-amber-200"
						>
							{{ 'addCredits.promo.bringBack.badge' | transloco }}
						</p>
						<h2 class="text-lg font-semibold text-amber-950 dark:text-amber-50">
							{{
								'addCredits.promo.bringBack.title'
									| transloco: { multiplier: offer.multiplier }
							}}
						</h2>
					</div>
				</div>
				<button
					mat-icon-button
					type="button"
					(click)="close('maybe_later')"
					class="!-mr-2 shrink-0"
					[attr.aria-label]="'home.bringBackModal.maybeLater' | transloco"
				>
					<mat-icon>close</mat-icon>
				</button>
			</div>

			<div class="space-y-4 px-6 py-6 text-sm leading-relaxed text-amber-950/95 dark:text-amber-100/90">
				<p *ngIf="offer.tier === 'triple'; else doubleBody">
					{{
						'addCredits.promo.bringBack.bodyTriple'
							| transloco: { multiplier: offer.multiplier }
					}}
				</p>
				<ng-template #doubleBody>
					<p>
						{{
							'addCredits.promo.bringBack.body'
								| transloco
									: {
											multiplier: offer.multiplier,
											exampleReceived: exampleReceived,
									  }
						}}
					</p>
				</ng-template>
				<p class="text-sm font-semibold text-amber-950 dark:text-amber-50">
					{{
						'addCredits.promo.bringBack.deadline'
							| transloco: { expiresAt: (offer.expiresAt | date: 'medium') || '' }
					}}
				</p>
			</div>

			<div
				class="flex flex-col gap-2 border-t border-amber-200/80 px-6 py-4 dark:border-amber-900/50 sm:flex-row sm:flex-wrap sm:justify-end"
			>
				<button
					mat-stroked-button
					type="button"
					class="order-3 sm:order-1"
					(click)="close('maybe_later')"
				>
					{{ 'home.bringBackModal.maybeLater' | transloco }}
				</button>
				<button
					mat-stroked-button
					type="button"
					class="order-2"
					(click)="close('view_plans')"
				>
					<mat-icon class="mr-1 !h-4 !w-4 !text-base">credit_card</mat-icon>
					{{ 'home.bringBackModal.viewPlans' | transloco }}
				</button>
				<button
					mat-flat-button
					color="primary"
					type="button"
					class="order-1 sm:order-3"
					(click)="close('accepted')"
				>
					<mat-icon class="mr-1 !h-4 !w-4 !text-base">payments</mat-icon>
					{{ 'home.bringBackModal.okLetsDoIt' | transloco }}
				</button>
			</div>
		</div>
	`,
	styles: [
		`
			:host {
				display: block;
			}
		`,
	],
})
export class BringBackOfferModalComponent {
	private _dialogRef = inject(MatDialogRef<BringBackOfferModalComponent, BringBackModalDismissReason>);
	private _data = inject<BringBackOfferModalData>(MAT_DIALOG_DATA);

	readonly offer = this._data.offer;
	readonly exampleReceived = 50 * (this.offer.multiplier || 2);

	close(reason: BringBackModalDismissReason): void {
		this._dialogRef.close(reason);
	}
}
