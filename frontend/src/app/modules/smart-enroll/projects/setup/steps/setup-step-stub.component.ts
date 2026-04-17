import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';

/**
 * Temporary placeholder rendered while the real step component is being implemented
 * during phased delivery (see Phase 2 / Phase 3 of the setup wizard plan).
 */
@Component({
    selector: 'setup-step-stub',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    template: `
        <div
            class="rounded-2xl border border-dashed border-stone-300/80 bg-white px-6 py-12 text-center dark:border-gray-700 dark:bg-gray-900/40"
        >
            <p class="text-sm font-medium text-stone-600 dark:text-stone-300">
                {{ titleKey | transloco }}
            </p>
            <p class="mt-2 text-xs text-stone-500 dark:text-stone-400">
                {{ 'smartEnrollProjects.setup.stub.placeholder' | transloco }}
            </p>
        </div>
    `,
})
export class SetupStepStubComponent {
    @Input() titleKey = 'smartEnrollProjects.setup.stub.title';
    @Input() form: FormGroup | null = null;
    @Input() formGroup: FormGroup | null = null;
    @Input() loading = false;
    @Input() saving = false;
    @Input() subForm = false;
    @Input() formType: 'business' | 'personal' = 'personal';
    @Input() stepFormControlName: string = '';
}
