import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    PostmanCountryFlagUi,
    postmanCountryFlagUi,
    stripCountryPrefixFromTitle,
} from './postman-country.util';

@Component({
    selector: 'postman-endpoint-label',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatTooltipModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <span
            class="inline-flex min-w-0 items-center gap-1.5"
            [matTooltip]="tooltipText()"
            [matTooltipDisabled]="!tooltipText()"
        >
            @if (showFlag() && country()) {
                @switch (flagUi().k) {
                    @case ('img') {
                        <img
                            [src]="$any(flagUi()).src"
                            alt=""
                            width="20"
                            height="20"
                            decoding="async"
                            loading="lazy"
                            class="flex-shrink-0 rounded-full object-cover shadow-sm ring-1 ring-black/10 dark:ring-white/15"
                            [class.h-3.5]="size() === 'sm'"
                            [class.w-3.5]="size() === 'sm'"
                            [class.h-5]="size() === 'md'"
                            [class.w-5]="size() === 'md'"
                        />
                    }
                    @case ('globe') {
                        <mat-icon
                            class="flex-shrink-0 text-slate-500 dark:text-slate-400"
                            [class.!w-3.5]="size() === 'sm'"
                            [class.!h-3.5]="size() === 'sm'"
                            [class.!text-[14px]]="size() === 'sm'"
                            [class.!w-5]="size() === 'md'"
                            [class.!h-5]="size() === 'md'"
                            [class.!text-[20px]]="size() === 'md'"
                        >
                            public
                        </mat-icon>
                    }
                    @case ('initials') {
                        <span
                            class="flex-shrink-0 rounded-full bg-slate-200 text-center font-bold leading-none text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                            [class.text-[8px]]="size() === 'sm'"
                            [class.px-1]="size() === 'sm'"
                            [class.py-0.5]="size() === 'sm'"
                            [class.text-[10px]]="size() === 'md'"
                            [class.px-1.5]="size() === 'md'"
                            [class.py-1]="size() === 'md'"
                        >
                            {{ $any(flagUi()).text }}
                        </span>
                    }
                }
            }
            <span
                class="min-w-0"
                [class.truncate]="truncate()"
                [class.text-xl]="size() === 'md'"
                [class.font-bold]="size() === 'md'"
            >
                {{ displayTitle() }}
            </span>
        </span>
    `,
})
export class PostmanEndpointLabelComponent {
    title = input.required<string>();
    /** Tooltip text; defaults to `title`. Pass catalog/full title when `title` is already stripped. */
    tooltipTitle = input<string | null | undefined>();
    /** When true, `title` is shown as-is (already resolved/stripped by postman-endpoint-copy). */
    preformatted = input(false);
    country = input<string | null | undefined>();
    size = input<'sm' | 'md'>('sm');
    truncate = input(true);
    showFlag = input(true);

    tooltipText = computed(() => (this.tooltipTitle()?.trim() || this.title()?.trim()) ?? '');

    displayTitle = computed(() => {
        const raw = this.title()?.trim() ?? '';
        if (this.preformatted()) {
            return raw;
        }
        return stripCountryPrefixFromTitle(raw, this.country() ?? undefined);
    });

    flagUi = computed((): PostmanCountryFlagUi => {
        const country = this.country();
        if (!country) {
            return { k: 'initials', text: '?' };
        }
        return postmanCountryFlagUi(country);
    });
}
