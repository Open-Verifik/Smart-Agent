import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@jsverse/transloco';
import { ReportIconPickerResult } from './report-icon-picker-dialog.component';
import {
    emojiImageUrl,
    emojiSvg,
    firstEmoji,
    readRecentEmojis,
    rememberEmoji,
    REPORT_EMOJI_CATEGORIES,
} from './report-emoji.util';
import { iconifyPreviewUrl, iconifySvg, sanitizeIconSvg, searchIconify } from './report-icon.util';

export interface ReportEmojiPickerData {
    /** Called for every emoji picked; the panel stays open so several can be added. */
    onPick: (choice: ReportIconPickerResult) => void;
}

const SEARCH_PREFIXES = 'twemoji,fluent-emoji-flat,noto';

@Component({
    selector: 'report-emoji-picker-dialog',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslocoModule, MatDialogModule, MatButtonModule, MatIconModule, MatTooltipModule, MatProgressSpinnerModule],
    template: `
        <div class="flex max-h-[85vh] w-[min(36rem,92vw)] flex-col">
            <div class="flex items-start justify-between gap-3 border-b border-stone-200 px-5 py-4 dark:border-gray-800">
                <div>
                    <h2 class="text-base font-semibold text-stone-950 dark:text-white">{{ 'reportEmojis.title' | transloco }}</h2>
                    <p class="mt-0.5 text-xs text-stone-500 dark:text-stone-400">{{ 'reportEmojis.subtitle' | transloco }}</p>
                </div>
                <button mat-icon-button type="button" (click)="close()" [attr.aria-label]="'reportEmojis.done' | transloco">
                    <mat-icon>close</mat-icon>
                </button>
            </div>

            <form class="flex items-center gap-2 border-b border-stone-200 px-5 py-3 dark:border-gray-800" (ngSubmit)="submitQuery()">
                <input
                    type="search"
                    name="emojiQuery"
                    class="min-w-0 flex-1 rounded-xl border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                    [placeholder]="'reportEmojis.searchPlaceholder' | transloco"
                    [ngModel]="query()"
                    (ngModelChange)="onQuery($event)"
                />
                <button mat-flat-button color="primary" type="submit" class="rounded-xl" [disabled]="busy() || !query().trim()">
                    {{ 'reportEmojis.search' | transloco }}
                </button>
            </form>

            <div class="flex gap-0.5 overflow-x-auto border-b border-stone-200 px-4 py-1.5 dark:border-gray-800">
                @if (recent().length) {
                    <button type="button" [class]="tabClass('recent')" [matTooltip]="'reportEmojis.catRecent' | transloco" (click)="showCategory('recent')">
                        <mat-icon class="icon-size-5">history</mat-icon>
                    </button>
                }
                @for (category of categories; track category.id) {
                    <button type="button" [class]="tabClass(category.id)" [matTooltip]="category.labelKey | transloco" (click)="showCategory(category.id)">
                        <mat-icon class="icon-size-5">{{ category.icon }}</mat-icon>
                    </button>
                }
            </div>

            <div class="min-h-0 flex-1 overflow-y-auto px-4 py-3">
                @if (view() === 'search') {
                    @if (busy()) {
                        <div class="flex justify-center py-10"><mat-spinner diameter="28"></mat-spinner></div>
                    } @else if (searchError()) {
                        <p class="py-8 text-center text-sm text-red-600 dark:text-red-400">{{ 'reportEmojis.searchFailed' | transloco }}</p>
                    } @else if (!searchResults().length) {
                        <p class="py-8 text-center text-sm text-stone-500">{{ 'reportEmojis.noResults' | transloco }}</p>
                    } @else {
                        <div class="grid grid-cols-[repeat(auto-fill,minmax(2.75rem,1fr))] gap-1">
                            @for (id of searchResults(); track id) {
                                <button type="button" class="emoji-cell" [matTooltip]="id" [disabled]="pending()" (click)="pickIconify(id)">
                                    <img [src]="iconifyUrl(id)" [alt]="id" class="h-7 w-7" loading="lazy" />
                                </button>
                            }
                        </div>
                    }
                } @else {
                    <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-stone-400">{{ currentLabelKey() | transloco }}</p>
                    <div class="grid grid-cols-[repeat(auto-fill,minmax(2.75rem,1fr))] gap-1">
                        @for (emoji of currentEmojis(); track emoji) {
                            <button type="button" class="emoji-cell" [attr.aria-label]="emoji" [disabled]="pending()" (click)="pickEmoji(emoji)">
                                <img [src]="imageUrl(emoji)" [alt]="emoji" class="h-7 w-7" loading="lazy" />
                            </button>
                        }
                    </div>
                }

                @if (error()) {
                    <p class="mt-3 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">{{ error()! | transloco }}</p>
                }
            </div>

            <div class="flex items-center justify-between gap-3 border-t border-stone-200 bg-stone-50 px-5 py-3 dark:border-gray-800 dark:bg-gray-950/60">
                <p class="text-xs text-stone-500 dark:text-stone-400">
                    @if (added()) {
                        {{ 'reportEmojis.added' | transloco: { count: added() } }}
                    } @else {
                        {{ 'reportEmojis.hint' | transloco }}
                    }
                </p>
                <div class="flex items-center gap-2">
                    @if (pending()) {
                        <mat-spinner diameter="18"></mat-spinner>
                    }
                    <button mat-flat-button color="primary" type="button" class="rounded-xl" (click)="close()">{{ 'reportEmojis.done' | transloco }}</button>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .emoji-cell {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 2.75rem;
                border-radius: 0.75rem;
                border: 1px solid transparent;
            }
            .emoji-cell:hover:not(:disabled) {
                border-color: rgb(165 180 252);
                background: rgb(238 242 255);
            }
            .emoji-cell:disabled {
                opacity: 0.4;
            }
        `,
    ],
})
export class ReportEmojiPickerDialogComponent {
    private _ref = inject(MatDialogRef<ReportEmojiPickerDialogComponent>);
    data = inject<ReportEmojiPickerData>(MAT_DIALOG_DATA);

    readonly categories = REPORT_EMOJI_CATEGORIES;

    recent = signal<string[]>(readRecentEmojis());
    view = signal<string>(this.recent().length ? 'recent' : REPORT_EMOJI_CATEGORIES[0].id);
    query = signal('');
    searchResults = signal<string[]>([]);
    searchError = signal(false);
    busy = signal(false);
    pending = signal(false);
    error = signal<string | null>(null);
    added = signal(0);

    currentEmojis(): string[] {
        if (this.view() === 'recent') return this.recent();
        return this.categories.find((category) => category.id === this.view())?.emojis ?? [];
    }

    currentLabelKey(): string {
        if (this.view() === 'recent') return 'reportEmojis.catRecent';
        return this.categories.find((category) => category.id === this.view())?.labelKey ?? '';
    }

    tabClass(id: string): string {
        const base = 'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg';
        return this.view() === id
            ? `${base} bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300`
            : `${base} text-stone-500 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-gray-800`;
    }

    showCategory(id: string): void {
        this.view.set(id);
        this.error.set(null);
    }

    imageUrl(emoji: string): string {
        return emojiImageUrl(emoji);
    }

    iconifyUrl(id: string): string {
        return iconifyPreviewUrl(id);
    }

    /** Typing or pasting an emoji (e.g. from Win + .) adds it right away. */
    onQuery(value: string): void {
        this.query.set(value);
        const emoji = firstEmoji(value);
        if (emoji) {
            this.query.set('');
            void this.pickEmoji(emoji);
        }
    }

    async submitQuery(): Promise<void> {
        const term = this.query().trim();
        if (!term) return;
        this.view.set('search');
        this.busy.set(true);
        this.searchError.set(false);
        try {
            this.searchResults.set(await searchIconify(term, 96, SEARCH_PREFIXES));
        } catch (err) {
            console.error('[ReportEmojis] search error', err);
            this.searchResults.set([]);
            this.searchError.set(true);
        } finally {
            this.busy.set(false);
        }
    }

    async pickEmoji(emoji: string): Promise<void> {
        const added = await this._add(`emoji:${emoji}`, () => emojiSvg(emoji));
        if (!added) return;
        rememberEmoji(emoji);
        this.recent.set(readRecentEmojis());
    }

    async pickIconify(id: string): Promise<void> {
        await this._add(id, () => iconifySvg(id));
    }

    close(): void {
        this._ref.close();
    }

    private async _add(name: string, load: () => Promise<string | null>): Promise<boolean> {
        if (this.pending()) return false;
        this.pending.set(true);
        this.error.set(null);
        try {
            const raw = await load();
            const svg = raw ? sanitizeIconSvg(raw) : null;
            if (!svg) {
                this.error.set('reportEmojis.loadFailed');
                return false;
            }
            this.data.onPick({ name, svg, keepColors: true });
            this.added.update((count) => count + 1);
            return true;
        } catch (err) {
            console.error('[ReportEmojis] emoji load error', err);
            this.error.set('reportEmojis.loadFailed');
            return false;
        } finally {
            this.pending.set(false);
        }
    }
}
