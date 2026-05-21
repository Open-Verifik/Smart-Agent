import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import type { Collection } from '../biometrics/collections.types';
import { getCollectionBadgeKey } from '../biometrics/collections.util';

@Component({
    selector: 'app-collection-scope-badge',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        @if (collection?.collectionScopeType) {
            <span
                class="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                [ngClass]="badgeClasses"
            >
                {{ getCollectionBadgeKey(collection) | transloco }}
            </span>
        }
    `,
})
export class CollectionScopeBadgeComponent {
    @Input({ required: true }) collection!: Collection;

    getCollectionBadgeKey = getCollectionBadgeKey;

    get badgeClasses(): Record<string, boolean> {
        switch (this.collection.collectionScopeType) {
            case 'demo':
                return {
                    'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200': true,
                };
            case 'smartEnroll':
                return {
                    'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200': true,
                };
            default:
                return {
                    'bg-stone-100 text-stone-700 dark:bg-gray-800 dark:text-stone-300': true,
                };
        }
    }
}
