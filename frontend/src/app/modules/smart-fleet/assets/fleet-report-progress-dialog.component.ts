import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslocoModule } from '@jsverse/transloco';
import { FleetReportLogItem, FleetReportProgressHub } from './fleet-report-progress';

@Component({
    selector: 'fleet-report-progress-dialog',
    standalone: true,
    imports: [CommonModule, TranslocoModule, MatDialogModule, MatButtonModule, MatIconModule, MatProgressBarModule],
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
        <div class="fleet-report-progress px-5 pb-5 pt-4">
            <div class="mb-4 flex items-start gap-3">
                <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-300"
                    [class.fleet-report-progress__icon--done]="data.hub.success()"
                    [class.fleet-report-progress__icon--error]="data.hub.errorMessage()"
                >
                    <mat-icon>{{ data.hub.errorMessage() ? 'error_outline' : data.hub.success() ? 'check_circle' : 'sync' }}</mat-icon>
                </div>
                <div class="min-w-0 flex-1">
                    <h2 class="text-base font-semibold text-stone-950 dark:text-white">
                        {{ 'smartFleet.assets.reportProgressTitle' | transloco }}
                    </h2>
                    <p *ngIf="data.hub.title()" class="truncate text-sm text-stone-500 dark:text-stone-400">
                        {{ data.hub.title() }}
                    </p>
                    <div *ngIf="data.hub.runMode() as mode" class="mt-2 flex flex-col gap-1">
                        <span
                            class="inline-flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold"
                            [class.bg-sky-100]="mode === 'async'"
                            [class.text-sky-800]="mode === 'async'"
                            [class.dark:bg-sky-950]="mode === 'async'"
                            [class.dark:text-sky-200]="mode === 'async'"
                            [class.bg-indigo-100]="mode === 'sync'"
                            [class.text-indigo-800]="mode === 'sync'"
                            [class.dark:bg-indigo-950]="mode === 'sync'"
                            [class.dark:text-indigo-200]="mode === 'sync'"
                        >
                            <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">{{ mode === 'async' ? 'cloud_queue' : 'bolt' }}</mat-icon>
                            {{
                                (mode === 'async' ? 'createBatchConfig.runModeAsync' : 'createBatchConfig.runModeSync')
                                    | transloco
                            }}
                        </span>
                        <p *ngIf="data.hub.runModeHintKey()" class="text-xs leading-snug text-stone-500 dark:text-stone-400">
                            {{ data.hub.runModeHintKey() | transloco }}
                        </p>
                    </div>
                </div>
            </div>

            <mat-progress-bar mode="determinate" [value]="data.hub.percent()" class="mb-4 rounded-full"></mat-progress-bar>

            <ul class="fleet-report-progress__steps max-h-64 space-y-2 overflow-y-auto pr-1" [@stepList]="data.hub.items().length">
                <li
                    *ngFor="let item of data.hub.items(); trackBy: trackStep"
                    class="fleet-report-progress__step flex items-start gap-2.5 rounded-lg px-2 py-1.5 text-sm"
                    [class.fleet-report-progress__step--active]="item.status === 'active'"
                    [class.fleet-report-progress__step--done]="item.status === 'done'"
                    [class.fleet-report-progress__step--error]="item.status === 'error'"
                >
                    <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                        <mat-icon *ngIf="item.status === 'done'" class="!h-5 !w-5 !text-[20px] text-emerald-500">check_circle</mat-icon>
                        <mat-icon *ngIf="item.status === 'error'" class="!h-5 !w-5 !text-[20px] text-red-500">cancel</mat-icon>
                        <span
                            *ngIf="item.status === 'active'"
                            class="fleet-report-progress__spinner inline-block h-4 w-4 rounded-full border-2 border-sky-500 border-t-transparent"
                            [@pulseActive]
                        ></span>
                    </span>
                    <span class="min-w-0 leading-snug text-stone-700 dark:text-stone-200">
                        {{ item.labelKey | transloco: item.params }}
                    </span>
                </li>
            </ul>

            <p *ngIf="data.hub.errorMessage() as err" class="mt-3 text-sm text-red-600 dark:text-red-400">
                {{ err }}
            </p>
            <p *ngIf="data.hub.success() && !data.hub.errorMessage()" class="mt-3 text-sm text-emerald-600 dark:text-emerald-400">
                {{ 'smartFleet.assets.reportProgressDone' | transloco }}
            </p>

            <div class="mt-5 flex justify-end">
                <button
                    mat-flat-button
                    color="primary"
                    type="button"
                    class="rounded-xl"
                    [disabled]="!data.hub.finished()"
                    (click)="close()"
                >
                    {{ (data.hub.success() ? 'smartFleet.assets.reportProgressClose' : 'smartFleet.dismiss') | transloco }}
                </button>
            </div>
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

        :host ::ng-deep .mat-mdc-progress-bar {
            --mdc-linear-progress-active-indicator-height: 6px;
            --mdc-linear-progress-track-height: 6px;
            border-radius: 9999px;
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

    trackStep(_index: number, item: FleetReportLogItem): string {
        return item.id;
    }

    close(): void {
        this._ref.close();
    }
}
