import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'human-authn-preview-placeholder',
    standalone: true,
    imports: [TranslocoModule],
    template: `
        <div class="flex h-full min-h-[28rem] flex-col items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-white px-6 text-center dark:border-gray-700 dark:bg-gray-900/40">
            <div class="mb-4 h-72 w-40 rounded-[2rem] border border-stone-200 bg-stone-50 dark:border-gray-700 dark:bg-gray-800"></div>
            <p class="text-sm text-stone-500">{{ 'humanAuthnProjects.setup.previewComingSoon' | transloco }}</p>
        </div>
    `,
})
export class HumanAuthnPreviewPlaceholderComponent {}
