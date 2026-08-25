import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@jsverse/transloco';
import { SmartBatchExecutor } from './smart-batch.service';

@Component({
    selector: 'batch-executor-control',
    standalone: true,
    imports: [MatButtonToggleModule, MatTooltipModule, TranslocoModule],
    template: `
        <div
            class="flex flex-wrap items-center gap-2"
            (click)="$event.stopPropagation()"
            (pointerdown)="$event.stopPropagation()"
        >
            @if (showBadge) {
                <span
                    class="inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide"
                    [class]="badgeClasses"
                >
                    {{ badgeLabelKey | transloco }}
                </span>
            }
            <mat-button-toggle-group
                [value]="resolvedExecutor"
                (change)="onChange($event)"
                [disabled]="saving"
                hideSingleSelectionIndicator
                class="!rounded-lg"
                [class.batch-executor-control-compact]="compact"
                [matTooltip]="hintKey | transloco"
            >
                <mat-button-toggle value="queue">{{
                    'createBatchConfig.runModeAsync' | transloco
                }}</mat-button-toggle>
                <mat-button-toggle value="featureRunner">{{
                    'createBatchConfig.runModeSync' | transloco
                }}</mat-button-toggle>
            </mat-button-toggle-group>
        </div>
    `,
    styles: `
        :host ::ng-deep .mat-button-toggle {
            border: 2px solid transparent !important;
        }

        :host ::ng-deep .mat-button-toggle-checked {
            border-color: rgb(28 25 23) !important;
            background-color: rgb(28 25 23) !important;
        }

        :host ::ng-deep .mat-button-toggle-checked .mat-button-toggle-label-content {
            color: #fff !important;
            font-weight: 700;
        }

        :host-context(.dark) ::ng-deep .mat-button-toggle-checked {
            border-color: #fff !important;
            background-color: rgb(255 255 255 / 0.12) !important;
        }

        :host-context(.dark) ::ng-deep .mat-button-toggle-checked .mat-button-toggle-label-content {
            color: #fff !important;
        }

        :host ::ng-deep .batch-executor-control-compact .mat-button-toggle-label-content {
            padding: 0 0.65rem;
            font-size: 0.75rem;
            line-height: 1.8rem;
        }
    `,
})
export class BatchExecutorControlComponent {
    @Input() executor: SmartBatchExecutor | undefined = 'featureRunner';
    @Input() saving = false;
    @Input() showBadge = true;
    @Input() compact = false;
    @Input() hintKey = 'createBatchConfig.runModeAsyncHint';

    @Output() executorChange = new EventEmitter<SmartBatchExecutor>();

    get resolvedExecutor(): 'queue' | 'featureRunner' {
        return this.executor === 'queue' ? 'queue' : 'featureRunner';
    }

    get badgeLabelKey(): string {
        if (this.executor === 'queue') return 'createBatchConfig.runModeAsync';
        if (this.executor === 'browser') return 'batchProcessing.executorBrowser';
        return 'createBatchConfig.runModeSync';
    }

    get badgeClasses(): string {
        if (this.executor === 'queue') {
            return 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-blue-300';
        }
        if (this.executor === 'browser') {
            return 'border-stone-200 bg-stone-50 text-stone-600 dark:border-gray-700 dark:bg-gray-950 dark:text-stone-300';
        }
        return 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/30 dark:text-indigo-300';
    }

    onChange(event: MatButtonToggleChange): void {
        const value = event.value as SmartBatchExecutor;
        if (value !== 'queue' && value !== 'featureRunner') return;
        if (this.saving || value === this.resolvedExecutor) return;
        this.executorChange.emit(value);
    }
}
