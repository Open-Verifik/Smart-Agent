import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import type { SearchMode } from '../services/biometrics-demo.types';

/**
 * Accessible segmented button group for switching between FAST and ACCURATE search modes.
 */
@Component({
    selector: 'app-demo-search-mode-toggle',
    standalone: true,
    imports: [NgClass],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div>
            <span [id]="labelId" class="mb-2 block text-xs font-semibold text-stone-800 dark:text-stone-200">
                {{ label }}
            </span>
            <div
                role="group"
                [attr.aria-labelledby]="labelId"
                class="grid grid-cols-2 rounded-xl border border-stone-200 bg-stone-100 p-1 dark:border-gray-700 dark:bg-gray-800"
            >
                @for (option of modes; track option) {
                    <button
                        type="button"
                        [attr.aria-pressed]="mode === option"
                        (click)="modeChange.emit(option)"
                        class="min-h-[38px] rounded-lg px-3 py-1.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                        [ngClass]="
                            mode === option
                                ? 'bg-white text-stone-900 shadow-2xs dark:bg-gray-900 dark:text-white'
                                : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white'
                        "
                    >
                        {{ option }}
                    </button>
                }
            </div>
        </div>
    `,
})
export class DemoSearchModeToggleComponent {
    readonly modes: readonly SearchMode[] = ['FAST', 'ACCURATE'];

    @Input({ required: true }) labelId = '';
    @Input({ required: true }) label = '';
    @Input() mode: SearchMode = 'FAST';

    @Output() modeChange = new EventEmitter<SearchMode>();
}
