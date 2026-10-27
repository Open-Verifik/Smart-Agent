import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@jsverse/transloco';
import {
    iconifyPreviewUrl,
    iconifySvg,
    listSpriteIcons,
    REPORT_ICON_SETS,
    ReportIconSet,
    sanitizeIconSvg,
    searchIconify,
    spriteIconSvg,
} from './report-icon.util';

export interface ReportIconPickerResult {
    name: string;
    svg: string;
    keepColors: boolean;
}

type PickerTab = 'library' | 'external' | 'upload';

const LIBRARY_PAGE = 180;

@Component({
    selector: 'report-icon-picker-dialog',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TranslocoModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
    ],
    template: `
        <div class="flex max-h-[85vh] w-[min(46rem,92vw)] flex-col">
            <div class="flex items-start justify-between gap-3 border-b border-stone-200 px-5 py-4 dark:border-gray-800">
                <div>
                    <h2 class="text-base font-semibold text-stone-950 dark:text-white">
                        {{ 'reportIcons.title' | transloco }}
                    </h2>
                    <p class="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
                        {{ 'reportIcons.subtitle' | transloco }}
                    </p>
                </div>
                <button mat-icon-button type="button" (click)="close()" [attr.aria-label]="'reportIcons.cancel' | transloco">
                    <mat-icon>close</mat-icon>
                </button>
            </div>

            <div class="flex gap-1 border-b border-stone-200 px-5 pt-3 dark:border-gray-800">
                @for (option of tabs; track option.id) {
                    <button
                        type="button"
                        class="-mb-px inline-flex items-center gap-1.5 border-b-2 px-3 pb-2 text-sm font-medium"
                        [ngClass]="
                            tab() === option.id
                                ? 'border-indigo-600 text-indigo-700 dark:border-indigo-400 dark:text-indigo-300'
                                : 'border-transparent text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-100'
                        "
                        (click)="tab.set(option.id)"
                    >
                        <mat-icon class="icon-size-4">{{ option.icon }}</mat-icon>
                        {{ option.labelKey | transloco }}
                    </button>
                }
            </div>

            <div class="min-h-0 flex-1 overflow-y-auto px-5 py-4">
                @if (tab() === 'library') {
                    <div class="flex flex-wrap items-center gap-2">
                        <select
                            class="rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                            [ngModel]="setId()"
                            (ngModelChange)="chooseSet($event)"
                        >
                            @for (set of sets; track set.id) {
                                <option [value]="set.id">{{ set.labelKey | transloco }}</option>
                            }
                        </select>
                        <input
                            type="search"
                            class="min-w-48 flex-1 rounded-xl border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                            [placeholder]="'reportIcons.searchLibrary' | transloco"
                            [ngModel]="libraryQuery()"
                            (ngModelChange)="libraryQuery.set($event)"
                        />
                    </div>
                    @if (libraryLoading()) {
                        <div class="flex justify-center py-12"><mat-spinner diameter="32"></mat-spinner></div>
                    } @else {
                        <p class="mt-3 text-xs text-stone-500 dark:text-stone-400">
                            {{ 'reportIcons.libraryCount' | transloco: { shown: libraryShown().length, total: libraryMatches().length } }}
                        </p>
                        <div class="mt-2 grid grid-cols-[repeat(auto-fill,minmax(4.25rem,1fr))] gap-1.5">
                            @for (id of libraryShown(); track id) {
                                <button
                                    type="button"
                                    class="flex flex-col items-center gap-1 rounded-xl border border-transparent p-2 text-stone-700 hover:border-indigo-300 hover:bg-indigo-50 disabled:opacity-40 dark:text-stone-200 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/40"
                                    [disabled]="busy()"
                                    [matTooltip]="id"
                                    (click)="pickLibrary(id)"
                                >
                                    <mat-icon class="icon-size-8" [svgIcon]="setId() + ':' + id"></mat-icon>
                                    <span class="w-full truncate text-center text-[10px] text-stone-500 dark:text-stone-400">{{ id }}</span>
                                </button>
                            }
                        </div>
                        @if (libraryShown().length < libraryMatches().length) {
                            <div class="mt-3 flex justify-center">
                                <button mat-stroked-button type="button" class="rounded-xl" (click)="libraryLimit.set(libraryLimit() + libraryPage)">
                                    {{ 'reportIcons.showMore' | transloco }}
                                </button>
                            </div>
                        }
                    }
                }

                @if (tab() === 'external') {
                    <form class="flex flex-wrap items-center gap-2" (ngSubmit)="runExternalSearch()">
                        <input
                            type="search"
                            name="externalQuery"
                            class="min-w-48 flex-1 rounded-xl border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                            [placeholder]="'reportIcons.searchExternal' | transloco"
                            [ngModel]="externalQuery()"
                            (ngModelChange)="externalQuery.set($event)"
                        />
                        <button mat-flat-button color="primary" type="submit" class="rounded-xl" [disabled]="externalLoading() || !externalQuery().trim()">
                            {{ 'reportIcons.search' | transloco }}
                        </button>
                    </form>
                    <p class="mt-2 text-xs text-stone-500 dark:text-stone-400">{{ 'reportIcons.externalHint' | transloco }}</p>
                    @if (externalLoading()) {
                        <div class="flex justify-center py-12"><mat-spinner diameter="32"></mat-spinner></div>
                    } @else if (externalError()) {
                        <p class="mt-6 text-center text-sm text-red-600 dark:text-red-400">{{ 'reportIcons.externalFailed' | transloco }}</p>
                    } @else if (externalSearched() && !externalResults().length) {
                        <p class="mt-6 text-center text-sm text-stone-500">{{ 'reportIcons.noResults' | transloco }}</p>
                    } @else {
                        <div class="mt-3 grid grid-cols-[repeat(auto-fill,minmax(4.25rem,1fr))] gap-1.5">
                            @for (id of externalResults(); track id) {
                                <button
                                    type="button"
                                    class="flex flex-col items-center gap-1 rounded-xl border border-transparent p-2 hover:border-indigo-300 hover:bg-indigo-50 disabled:opacity-40 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/40"
                                    [disabled]="busy()"
                                    [matTooltip]="id"
                                    (click)="pickExternal(id)"
                                >
                                    <span class="flex h-8 w-8 items-center justify-center rounded-md bg-white p-0.5">
                                        <img [src]="previewUrl(id)" [alt]="id" class="h-full w-full object-contain" loading="lazy" />
                                    </span>
                                    <span class="w-full truncate text-center text-[10px] text-stone-500 dark:text-stone-400">{{ id }}</span>
                                </button>
                            }
                        </div>
                    }
                }

                @if (tab() === 'upload') {
                    <label
                        class="flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-stone-300 px-4 py-8 text-center text-sm text-stone-600 hover:border-indigo-400 hover:bg-indigo-50/40 dark:border-gray-700 dark:text-stone-300 dark:hover:bg-indigo-950/20"
                    >
                        <mat-icon class="icon-size-8 text-indigo-500">upload_file</mat-icon>
                        {{ 'reportIcons.uploadHint' | transloco }}
                        <input type="file" accept=".svg,image/svg+xml" class="hidden" (change)="onFile($event)" />
                    </label>
                    <label class="mt-4 block text-xs font-medium text-stone-600 dark:text-stone-300">
                        {{ 'reportIcons.pasteLabel' | transloco }}
                    </label>
                    <textarea
                        rows="6"
                        class="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 font-mono text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                        placeholder="<svg viewBox=&quot;0 0 24 24&quot;>…</svg>"
                        [ngModel]="pasted()"
                        (ngModelChange)="pasted.set($event)"
                    ></textarea>
                    <div class="mt-2 flex justify-end">
                        <button mat-flat-button color="primary" type="button" class="rounded-xl" [disabled]="!pasted().trim() || busy()" (click)="usePasted()">
                            {{ 'reportIcons.usePasted' | transloco }}
                        </button>
                    </div>
                }

                @if (error()) {
                    <p class="mt-4 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">{{ error()! | transloco }}</p>
                }
            </div>

            <div class="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 bg-stone-50 px-5 py-3 dark:border-gray-800 dark:bg-gray-950/60">
                <label class="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-200">
                    <input type="checkbox" [ngModel]="keepColors()" (ngModelChange)="keepColors.set($event)" />
                    {{ 'reportIcons.keepColors' | transloco }}
                </label>
                <div class="flex items-center gap-2">
                    @if (busy()) {
                        <mat-spinner diameter="20"></mat-spinner>
                    }
                    <button mat-button type="button" (click)="close()">{{ 'reportIcons.cancel' | transloco }}</button>
                </div>
            </div>
        </div>
    `,
})
export class ReportIconPickerDialogComponent implements OnInit {
    private _ref = inject(MatDialogRef<ReportIconPickerDialogComponent, ReportIconPickerResult>);
    data = inject<{ keepColors?: boolean } | null>(MAT_DIALOG_DATA, { optional: true });

    readonly sets = REPORT_ICON_SETS;
    readonly libraryPage = LIBRARY_PAGE;
    readonly tabs: { id: PickerTab; icon: string; labelKey: string }[] = [
        { id: 'library', icon: 'apps', labelKey: 'reportIcons.tabLibrary' },
        { id: 'external', icon: 'travel_explore', labelKey: 'reportIcons.tabExternal' },
        { id: 'upload', icon: 'upload_file', labelKey: 'reportIcons.tabUpload' },
    ];

    tab = signal<PickerTab>('library');
    busy = signal(false);
    error = signal<string | null>(null);
    keepColors = signal(false);

    setId = signal(REPORT_ICON_SETS[0].id);
    libraryIds = signal<string[]>([]);
    libraryLoading = signal(false);
    libraryQuery = signal('');
    libraryLimit = signal(LIBRARY_PAGE);
    libraryMatches = computed(() => {
        const words = this.libraryQuery().trim().toLowerCase().replace(/\s+/g, ' ').split(' ').filter(Boolean);
        const ids = this.libraryIds();

        if (!words.length) return ids;

        return ids.filter((id) => {
            const name = id.toLowerCase().replace(/[_-]/g, ' ');
            return words.every((word) => name.includes(word));
        });
    });
    libraryShown = computed(() => this.libraryMatches().slice(0, this.libraryLimit()));

    externalQuery = signal('');
    externalResults = signal<string[]>([]);
    externalLoading = signal(false);
    externalSearched = signal(false);
    externalError = signal(false);

    pasted = signal('');

    ngOnInit(): void {
        this.keepColors.set(Boolean(this.data?.keepColors));
        void this._loadSet();
    }

    chooseSet(id: string): void {
        this.setId.set(id);
        this.libraryLimit.set(LIBRARY_PAGE);
        void this._loadSet();
    }

    async pickLibrary(id: string): Promise<void> {
        const set = this._currentSet();

        await this._finish(`${set.id}:${id}`, () => spriteIconSvg(set, id));
    }

    async runExternalSearch(): Promise<void> {
        const query = this.externalQuery().trim();

        if (!query) return;

        this.externalLoading.set(true);
        this.externalError.set(false);

        try {
            this.externalResults.set(await searchIconify(query));
        } catch (err) {
            console.error('[ReportIcons] iconify search error', err);
            this.externalResults.set([]);
            this.externalError.set(true);
        } finally {
            this.externalSearched.set(true);
            this.externalLoading.set(false);
        }
    }

    previewUrl(id: string): string {
        return iconifyPreviewUrl(id);
    }

    async pickExternal(id: string): Promise<void> {
        await this._finish(id, () => iconifySvg(id));
    }

    onFile(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];

        input.value = '';

        if (!file) return;

        if (file.size > 512 * 1024) {
            this.error.set('reportIcons.tooLarge');
            return;
        }

        void this._finish(`upload:${file.name}`, () => file.text());
    }

    async usePasted(): Promise<void> {
        await this._finish('upload:pasted', async () => this.pasted());
    }

    close(): void {
        this._ref.close();
    }

    private _currentSet(): ReportIconSet {
        return this.sets.find((set) => set.id === this.setId()) ?? this.sets[0];
    }

    private async _loadSet(): Promise<void> {
        this.libraryLoading.set(true);

        try {
            this.libraryIds.set(await listSpriteIcons(this._currentSet()));
        } catch (err) {
            console.error('[ReportIcons] sprite load error', err);
            this.libraryIds.set([]);
        } finally {
            this.libraryLoading.set(false);
        }
    }

    private async _finish(name: string, load: () => Promise<string | null>): Promise<void> {
        if (this.busy()) return;

        this.busy.set(true);
        this.error.set(null);

        try {
            const raw = await load();
            const svg = raw ? sanitizeIconSvg(raw) : null;

            if (!svg) {
                this.error.set('reportIcons.invalidSvg');
                return;
            }

            this._ref.close({ name, svg, keepColors: this.keepColors() });
        } catch (err) {
            console.error('[ReportIcons] icon load error', err);
            this.error.set('reportIcons.loadFailed');
        } finally {
            this.busy.set(false);
        }
    }
}
