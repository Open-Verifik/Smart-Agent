import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@jsverse/transloco';
import { SmartBatchExecutor } from './smart-batch.service';

@Component({
    selector: 'batch-executor-control',
    standalone: true,
    imports: [MatTooltipModule, TranslocoModule],
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
            <div
                class="inline-flex rounded-full bg-stone-100 p-0.5 dark:bg-gray-800"
                [matTooltip]="hintKey | transloco"
            >
                <button
                    type="button"
                    [disabled]="saving"
                    [class]="optionClass('queue')"
                    (click)="select('queue')"
                >
                    {{ 'createBatchConfig.runModeAsync' | transloco }}
                </button>
                <button
                    type="button"
                    [disabled]="saving"
                    [class]="optionClass('browser')"
                    (click)="select('browser')"
                >
                    {{ 'createBatchConfig.runModeSync' | transloco }}
                </button>
            </div>
        </div>
    `,
})
export class BatchExecutorControlComponent {
    @Input() executor: SmartBatchExecutor | undefined = 'browser';
    @Input() saving = false;
    @Input() showBadge = true;
    @Input() compact = false;
    @Input() hintKey = 'createBatchConfig.runModeAsyncHint';

    @Output() executorChange = new EventEmitter<SmartBatchExecutor>();

    get resolvedExecutor(): 'queue' | 'browser' {
        return this.executor === 'queue' ? 'queue' : 'browser';
    }

    get badgeLabelKey(): string {
        if (this.executor === 'queue') return 'createBatchConfig.runModeAsync';
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

    optionClass(value: 'queue' | 'browser'): string {
        const compact = this.compact ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-sm';
        const base = `${compact} rounded-full font-semibold transition disabled:opacity-50`;

        if (this.resolvedExecutor === value) {
            return `${base} bg-white text-blue-700 shadow-sm ring-1 ring-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:ring-blue-800`;
        }

        return `${base} text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white`;
    }

    select(value: 'queue' | 'browser'): void {
        if (this.saving) return;
        if (value === 'queue' && this.executor === 'queue') return;
        if (value === 'browser' && this.executor === 'browser') return;
        this.executorChange.emit(value);
    }
}
