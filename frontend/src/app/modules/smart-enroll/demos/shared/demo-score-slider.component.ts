import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Brand-consistent range slider with numeric badge and quick preset pills.
 */
@Component({
    selector: 'app-demo-score-slider',
    standalone: true,
    imports: [NgClass, FormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div>
            <div class="mb-2 flex items-center justify-between gap-2">
                <label class="text-xs font-semibold text-stone-800 dark:text-stone-200" [for]="inputId">
                    {{ label }}
                </label>
                <span class="rounded-md bg-blue-50 px-2 py-0.5 font-mono text-xs font-bold tabular-nums text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                    {{ value.toFixed(2) }}
                </span>
            </div>
            <input
                [id]="inputId"
                type="range"
                [attr.min]="min"
                [attr.max]="max"
                [attr.step]="step"
                [attr.aria-valuetext]="value.toFixed(2)"
                [ngModel]="value"
                (ngModelChange)="emitNumber($event)"
                [name]="name"
                [style.--attr-min]="min"
                [style.--attr-max]="max"
                [style.--control-value]="value"
                class="demo-range-input w-full"
            />
            @if (presets.length) {
                <div class="mt-2.5 flex flex-wrap gap-1.5">
                    @for (preset of presets; track preset) {
                        <button
                            type="button"
                            [attr.aria-pressed]="value === preset"
                            (click)="emitNumber(preset)"
                            class="rounded-lg border px-2.5 py-1 text-[11px] font-medium tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                            [ngClass]="
                                value === preset
                                    ? 'border-blue-600 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-950/50 dark:text-blue-300'
                                    : 'border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300 dark:border-gray-700 dark:bg-gray-800 dark:text-stone-300'
                            "
                        >
                            {{ preset.toFixed(2) }}
                        </button>
                    }
                </div>
            }
        </div>
    `,
})
export class DemoScoreSliderComponent {
    @Input({ required: true }) inputId = '';
    @Input() name = 'minScore';
    @Input({ required: true }) label = '';
    @Input() min = 0.5;
    @Input() max = 0.75;
    @Input() step = 0.01;
    @Input() value = 0.65;
    @Input() presets: readonly number[] = [];

    @Output() valueChange = new EventEmitter<number>();

    emitNumber(raw: number | string): void {
        const parsed = typeof raw === 'number' ? raw : Number.parseFloat(String(raw));
        if (!Number.isNaN(parsed)) {
            this.valueChange.emit(parsed);
        }
    }
}
