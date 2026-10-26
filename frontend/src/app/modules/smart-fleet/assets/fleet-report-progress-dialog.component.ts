import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import {
    FleetReportLogItem,
    FleetReportProgressHub,
    formatFleetLookupUsd,
} from './fleet-report-progress';

@Component({
    selector: 'fleet-report-progress-dialog',
    standalone: true,
    imports: [
        CommonModule,
        DecimalPipe,
        TranslocoModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
    ],
    animations: [
        trigger('stepList', [
            transition('* => *', [
                query(
                    ':enter',
                    [
                        style({ opacity: 0, transform: 'translateY(8px)' }),
                        stagger(40, [animate('280ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))]),
                    ],
                    { optional: true }
                ),
            ]),
        ]),
        trigger('pulseActive', [
            transition(':enter', [style({ opacity: 0.6 }), animate('600ms ease-in-out', style({ opacity: 1 }))]),
        ]),
    ],
    template: `
        <div class="fleet-report-progress px-6 pb-6 pt-5">
            <div class="mb-5 flex items-start gap-4">
                <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-300"
                    [class.fleet-report-progress__icon--done]="data.hub.phase() === 'run' && data.hub.success()"
                    [class.fleet-report-progress__icon--error]="data.hub.errorMessage()"
                >
                    <mat-icon class="!h-7 !w-7 !text-[28px]">{{
                        data.hub.estimateLoading()
                            ? 'payments'
                            : data.hub.phase() === 'estimate'
                              ? 'payments'
                              : data.hub.errorMessage()
                                ? 'error_outline'
                                : data.hub.success()
                                  ? 'check_circle'
                                  : 'sync'
                    }}</mat-icon>
                </div>
                <div class="min-w-0 flex-1">
                    <h2 class="text-xl font-semibold leading-snug text-stone-950 dark:text-white">
                        {{
                            (data.hub.phase() === 'estimate'
                                ? 'smartFleet.assets.reportEstimateTitle'
                                : 'smartFleet.assets.reportProgressTitle')
                                | transloco
                        }}
                    </h2>
                    <p *ngIf="data.hub.title()" class="truncate text-base text-stone-500 dark:text-stone-400">
                        {{ data.hub.title() }}
                    </p>
                    <div *ngIf="data.hub.phase() === 'run' && data.hub.runMode() as mode" class="mt-2 flex flex-col gap-1">
                        <span
                            class="inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-semibold"
                            [class.bg-sky-100]="mode === 'async'"
                            [class.text-sky-800]="mode === 'async'"
                            [class.dark:bg-sky-950]="mode === 'async'"
                            [class.dark:text-sky-200]="mode === 'async'"
                            [class.bg-indigo-100]="mode === 'sync'"
                            [class.text-indigo-800]="mode === 'sync'"
                            [class.dark:bg-indigo-950]="mode === 'sync'"
                            [class.dark:text-indigo-200]="mode === 'sync'"
                        >
                            <mat-icon class="!h-4 !w-4 !text-[18px]">{{ mode === 'async' ? 'cloud_queue' : 'bolt' }}</mat-icon>
                            {{
                                (mode === 'async' ? 'createBatchConfig.runModeAsync' : 'createBatchConfig.runModeSync')
                                    | transloco
                            }}
                        </span>
                        <p *ngIf="data.hub.runModeHintKey()" class="text-sm leading-snug text-stone-500 dark:text-stone-400">
                            {{ data.hub.runModeHintKey() | transloco }}
                        </p>
                    </div>
                </div>
            </div>

            @if (data.hub.phase() === 'estimate') {
                <div class="rounded-xl border border-stone-200 bg-stone-50/80 p-5 dark:border-gray-700 dark:bg-gray-800/50">
                    @if (data.hub.estimateLoading()) {
                        <div class="flex items-center justify-center gap-3 py-8 text-base text-stone-500">
                            <mat-spinner diameter="36"></mat-spinner>
                            {{ 'smartFleet.assets.reportEstimateLoading' | transloco }}
                        </div>
                    } @else {
                        @if (data.hub.estimate(); as est) {
                        <p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                            {{ 'smartFleet.assets.reportEstimateConsultOnly' | transloco }}
                        </p>
                        <p class="mt-4 text-3xl font-bold tabular-nums text-stone-950 dark:text-white">
                            {{ est.totalCredits | number: '1.0-2' }}
                            <span class="text-base font-semibold text-stone-500">{{
                                'smartFleet.assets.reportEstimateCreditsLabel' | transloco
                            }}</span>
                        </p>
                        <p class="mt-2 text-2xl font-semibold tabular-nums text-emerald-700 dark:text-emerald-400">
                            {{ formatUsd(est.totalCredits) }}
                            <span class="text-sm font-medium text-stone-500 dark:text-stone-400">USD</span>
                        </p>
                        <p class="mt-2 text-base leading-relaxed text-stone-600 dark:text-stone-300">
                            @if (data.hub.vehicleCount() === 1) {
                                {{
                                    'smartFleet.assets.reportEstimateOneVehicle'
                                        | transloco
                                            : {
                                                  credits: est.creditsPerItem | number: '1.0-2',
                                                  usd: formatUsd(est.creditsPerItem),
                                              }
                                }}
                            } @else {
                                {{
                                    'smartFleet.assets.reportEstimateBulk'
                                        | transloco
                                            : {
                                                  count: data.hub.vehicleCount(),
                                                  perVehicle: est.creditsPerItem | number: '1.0-2',
                                                  perVehicleUsd: formatUsd(est.creditsPerItem),
                                                  total: est.totalCredits | number: '1.0-2',
                                                  totalUsd: formatUsd(est.totalCredits),
                                              }
                                }}
                            }
                        </p>
                        @if (est.breakdown?.length) {
                            <p class="mt-4 text-sm font-medium text-stone-500 dark:text-stone-400">
                                {{ 'smartFleet.assets.reportEstimateBreakdownHint' | transloco }}
                            </p>
                            <ul class="mt-2 space-y-2 text-sm">
                                @for (line of est.breakdown; track line.sequence) {
                                    <li class="flex justify-between gap-2 text-stone-600 dark:text-stone-300">
                                        <span class="truncate">{{ line.featureCode }}</span>
                                        <span class="shrink-0 text-right tabular-nums font-medium">
                                            {{ line.total | number: '1.0-2' }}
                                            <span class="text-stone-400">· {{ formatUsd(line.total) }}</span>
                                        </span>
                                    </li>
                                }
                            </ul>
                        }
                        <p class="mt-4 text-sm text-stone-500 dark:text-stone-400">
                            {{
                                'smartFleet.assets.reportEstimateAvailable'
                                    | transloco
                                        : {
                                              credits: est.availableCredits | number: '1.0-2',
                                              usd: formatUsd(est.availableCredits),
                                          }
                            }}
                        </p>
                        @if (est.sufficientCredits === false) {
                            <p class="mt-2 text-base font-medium text-red-600 dark:text-red-400">
                                {{
                                    'smartFleet.assets.reportEstimateShortfall'
                                        | transloco
                                            : {
                                                  credits: est.shortfall | number: '1.0-2',
                                                  usd: formatUsd(est.shortfall),
                                              }
                                }}
                            </p>
                        }
                        }
                    }
                </div>

                <div class="mt-6 flex justify-end gap-3">
                    <button mat-button type="button" class="!text-base rounded-xl px-4" (click)="cancel()">
                        {{ 'smartFleet.dismiss' | transloco }}
                    </button>
                    <button
                        mat-flat-button
                        color="primary"
                        type="button"
                        class="!text-base rounded-xl px-5"
                        [disabled]="data.hub.estimateLoading() || !data.hub.canConfirmEstimate()"
                        (click)="confirm()"
                    >
                        {{ 'smartFleet.assets.reportEstimateConfirm' | transloco }}
                    </button>
                </div>
            } @else {
                <mat-progress-bar mode="determinate" [value]="data.hub.percent()" class="fleet-report-progress__bar mb-5 rounded-full"></mat-progress-bar>

                <ul
                    class="fleet-report-progress__steps max-h-80 space-y-2.5 overflow-y-auto pr-1"
                    [@stepList]="data.hub.items().length"
                >
                    <li
                        *ngFor="let item of data.hub.items(); trackBy: trackStep"
                        class="fleet-report-progress__step flex items-start gap-3 rounded-lg px-3 py-2.5 text-base"
                        [class.fleet-report-progress__step--active]="item.status === 'active'"
                        [class.fleet-report-progress__step--done]="item.status === 'done'"
                        [class.fleet-report-progress__step--error]="item.status === 'error'"
                    >
                        <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                            <mat-icon *ngIf="item.status === 'done'" class="!h-6 !w-6 !text-[24px] text-emerald-500"
                                >check_circle</mat-icon
                            >
                            <mat-icon *ngIf="item.status === 'error'" class="!h-6 !w-6 !text-[24px] text-red-500">cancel</mat-icon>
                            <span
                                *ngIf="item.status === 'active'"
                                class="fleet-report-progress__spinner inline-block h-5 w-5 rounded-full border-[2.5px] border-sky-500 border-t-transparent"
                                [@pulseActive]
                            ></span>
                        </span>
                        <span class="min-w-0 leading-normal text-stone-700 dark:text-stone-200">
                            {{ item.labelKey | transloco: item.params }}
                        </span>
                    </li>
                </ul>

                <p *ngIf="data.hub.errorMessage() as err" class="mt-4 text-base text-red-600 dark:text-red-400">
                    {{ err }}
                </p>
                <p
                    *ngIf="data.hub.success() && !data.hub.errorMessage()"
                    class="mt-4 text-base text-emerald-600 dark:text-emerald-400"
                >
                    {{ 'smartFleet.assets.reportProgressDone' | transloco }}
                </p>

                <div class="mt-6 flex justify-end">
                    <button
                        mat-flat-button
                        color="primary"
                        type="button"
                        class="!text-base rounded-xl px-5"
                        [disabled]="!data.hub.finished()"
                        (click)="close()"
                    >
                        {{ (data.hub.success() ? 'smartFleet.assets.reportProgressClose' : 'smartFleet.dismiss') | transloco }}
                    </button>
                </div>
            }
        </div>
    `,
    styles: `
        .fleet-report-progress__icon--done mat-icon {
            animation: fleet-progress-pop 420ms ease-out;
        }

        .fleet-report-progress__step--active {
            background: rgb(14 165 233 / 0.08);
        }

        .fleet-report-progress__step--done {
            opacity: 0.85;
        }

        .fleet-report-progress__spinner {
            animation: fleet-progress-spin 0.75s linear infinite;
        }

        :host ::ng-deep .fleet-report-progress__bar.mat-mdc-progress-bar {
            --mdc-linear-progress-active-indicator-height: 8px;
            --mdc-linear-progress-track-height: 8px;
            border-radius: 9999px;
        }

        :host ::ng-deep .fleet-report-progress-dialog-panel .mat-mdc-dialog-surface {
            border-radius: 1rem;
        }

        @keyframes fleet-progress-spin {
            to {
                transform: rotate(360deg);
            }
        }

        @keyframes fleet-progress-pop {
            0% {
                transform: scale(0.6);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
    `,
})
export class FleetReportProgressDialogComponent {
    private _ref = inject(MatDialogRef<FleetReportProgressDialogComponent>);
    data = inject<{ hub: FleetReportProgressHub }>(MAT_DIALOG_DATA);

    formatUsd(credits: number): string {
        return formatFleetLookupUsd(credits);
    }

    trackStep(_index: number, item: FleetReportLogItem): string {
        return item.id;
    }

    confirm(): void {
        this.data.hub.confirmRun();
    }

    cancel(): void {
        this.data.hub.cancelEstimate();
        this._ref.close(false);
    }

    close(): void {
        this._ref.close(true);
    }
}
