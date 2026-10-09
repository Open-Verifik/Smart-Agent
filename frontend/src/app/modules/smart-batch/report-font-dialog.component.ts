import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@jsverse/transloco';
import {
    customFontStack,
    familyFromFileName,
    familyFromFontUrl,
    FONT_FILE_ACCEPT,
    googleFontUrl,
    isValidFontFamily,
    isValidFontUrl,
    MAX_CUSTOM_FONTS,
    MAX_FONT_FILE_BYTES,
    readFontFile,
    registerReportFonts,
    ReportCustomFont,
    sanitizeCustomFonts,
} from './report-fonts.util';

export interface ReportFontDialogData {
    fonts: ReportCustomFont[];
}

export interface ReportFontDialogResult {
    fonts: ReportCustomFont[];
    /** Font stack to apply to the text being edited, when the user picked one. */
    apply?: string;
}

type FontTab = 'google' | 'url' | 'upload';

const GOOGLE_SUGGESTIONS = ['Roboto', 'Open Sans', 'Montserrat', 'Lato', 'Poppins', 'Merriweather', 'Playfair Display', 'Source Code Pro'];

@Component({
    selector: 'report-font-dialog',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslocoModule, MatDialogModule, MatButtonModule, MatIconModule, MatTooltipModule, MatProgressSpinnerModule],
    template: `
        <div class="flex max-h-[85vh] w-[min(40rem,92vw)] flex-col">
            <div class="flex items-start justify-between gap-3 border-b border-stone-200 px-5 py-4 dark:border-gray-800">
                <div>
                    <h2 class="text-base font-semibold text-stone-950 dark:text-white">{{ 'reportFonts.title' | transloco }}</h2>
                    <p class="mt-0.5 text-xs text-stone-500 dark:text-stone-400">{{ 'reportFonts.subtitle' | transloco: { max: maxFonts } }}</p>
                </div>
                <button mat-icon-button type="button" (click)="close()" [attr.aria-label]="'reportFonts.cancel' | transloco">
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
                        (click)="switchTab(option.id)"
                    >
                        <mat-icon class="icon-size-4">{{ option.icon }}</mat-icon>
                        {{ option.labelKey | transloco }}
                    </button>
                }
            </div>

            <div class="min-h-0 flex-1 overflow-y-auto px-5 py-4">
                @if (tab() === 'google') {
                    <form class="flex flex-wrap items-center gap-2" (ngSubmit)="addGoogle()">
                        <input
                            type="text"
                            name="googleFamily"
                            class="min-w-48 flex-1 rounded-xl border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                            [placeholder]="'reportFonts.googlePlaceholder' | transloco"
                            [ngModel]="googleFamily()"
                            (ngModelChange)="googleFamily.set($event)"
                        />
                        <button mat-flat-button color="primary" type="submit" class="rounded-xl" [disabled]="busy() || !googleFamily().trim() || full()">
                            {{ 'reportFonts.add' | transloco }}
                        </button>
                    </form>
                    <p class="mt-2 text-xs text-stone-500 dark:text-stone-400">{{ 'reportFonts.googleHint' | transloco }}</p>
                    <div class="mt-2 flex flex-wrap gap-1.5">
                        @for (name of suggestions; track name) {
                            <button
                                type="button"
                                class="rounded-full border border-stone-200 px-2.5 py-1 text-xs text-stone-600 hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-700 dark:text-stone-300 dark:hover:bg-indigo-950/30"
                                (click)="googleFamily.set(name)"
                            >
                                {{ name }}
                            </button>
                        }
                    </div>
                }

                @if (tab() === 'url') {
                    <form class="space-y-2" (ngSubmit)="addUrl()">
                        <input
                            type="url"
                            name="fontUrl"
                            class="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                            placeholder="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                            [ngModel]="fontUrl()"
                            (ngModelChange)="onUrlChange($event)"
                        />
                        <div class="flex flex-wrap items-center gap-2">
                            <input
                                type="text"
                                name="urlFamily"
                                class="min-w-48 flex-1 rounded-xl border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                                [placeholder]="'reportFonts.familyPlaceholder' | transloco"
                                [ngModel]="urlFamily()"
                                (ngModelChange)="urlFamily.set($event)"
                            />
                            <button mat-flat-button color="primary" type="submit" class="rounded-xl" [disabled]="busy() || !fontUrl().trim() || !urlFamily().trim() || full()">
                                {{ 'reportFonts.add' | transloco }}
                            </button>
                        </div>
                    </form>
                    <p class="mt-2 text-xs text-stone-500 dark:text-stone-400">{{ 'reportFonts.urlHint' | transloco }}</p>
                }

                @if (tab() === 'upload') {
                    <label
                        class="flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-stone-300 px-4 py-8 text-center text-sm text-stone-600 hover:border-indigo-400 hover:bg-indigo-50/40 dark:border-gray-700 dark:text-stone-300 dark:hover:bg-indigo-950/20"
                        [class.pointer-events-none]="busy() || full()"
                        [class.opacity-50]="full()"
                    >
                        <mat-icon class="icon-size-8 text-indigo-500">upload_file</mat-icon>
                        {{ 'reportFonts.uploadHint' | transloco }}
                        <span class="text-xs text-stone-400">{{ accept }} · max 1 MB</span>
                        <input type="file" [accept]="accept" class="hidden" (change)="onFile($event)" />
                    </label>
                    <div class="mt-3 flex flex-wrap items-center gap-2">
                        <label class="text-xs text-stone-500">{{ 'reportFonts.familyPlaceholder' | transloco }}</label>
                        <input
                            type="text"
                            class="min-w-48 flex-1 rounded-xl border border-stone-200 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                            [placeholder]="'reportFonts.uploadFamilyHint' | transloco"
                            [ngModel]="uploadFamily()"
                            (ngModelChange)="uploadFamily.set($event)"
                        />
                    </div>
                }

                @if (error()) {
                    <p class="mt-4 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">{{ error()! | transloco }}</p>
                }

                <h3 class="mt-6 text-xs font-semibold uppercase tracking-wider text-stone-400">
                    {{ 'reportFonts.added' | transloco }} ({{ fonts().length }}/{{ maxFonts }})
                </h3>
                @if (!fonts().length) {
                    <p class="mt-2 text-sm text-stone-500">{{ 'reportFonts.empty' | transloco }}</p>
                }
                <ul class="mt-2 divide-y divide-stone-100 dark:divide-gray-800">
                    @for (font of fonts(); track font.family) {
                        <li class="flex items-center gap-3 py-2">
                            <div class="min-w-0 flex-1">
                                <p class="truncate text-lg text-stone-900 dark:text-white" [style.font-family]="stack(font.family)">
                                    {{ font.family }} — Aa Bb 123
                                </p>
                                <p class="text-[11px] text-stone-400">{{ 'reportFonts.source.' + font.source | transloco }}</p>
                            </div>
                            @if (canApply) {
                                <button mat-stroked-button type="button" class="rounded-xl" (click)="apply(font)">
                                    {{ 'reportFonts.use' | transloco }}
                                </button>
                            }
                            <button mat-icon-button type="button" [matTooltip]="'reportFonts.remove' | transloco" (click)="remove(font)">
                                <mat-icon>delete</mat-icon>
                            </button>
                        </li>
                    }
                </ul>
            </div>

            <div class="flex items-center justify-end gap-2 border-t border-stone-200 bg-stone-50 px-5 py-3 dark:border-gray-800 dark:bg-gray-950/60">
                @if (busy()) {
                    <mat-spinner diameter="20"></mat-spinner>
                }
                <button mat-button type="button" (click)="close()">{{ 'reportFonts.cancel' | transloco }}</button>
                <button mat-flat-button color="primary" type="button" class="rounded-xl" (click)="save()">{{ 'reportFonts.save' | transloco }}</button>
            </div>
        </div>
    `,
})
export class ReportFontDialogComponent implements OnInit {
    private _ref = inject(MatDialogRef<ReportFontDialogComponent, ReportFontDialogResult>);
    data = inject<ReportFontDialogData & { canApply?: boolean }>(MAT_DIALOG_DATA);

    readonly maxFonts = MAX_CUSTOM_FONTS;
    readonly accept = FONT_FILE_ACCEPT;
    readonly suggestions = GOOGLE_SUGGESTIONS;
    readonly canApply = this.data?.canApply !== false;
    readonly tabs: { id: FontTab; icon: string; labelKey: string }[] = [
        { id: 'google', icon: 'g_translate', labelKey: 'reportFonts.tabGoogle' },
        { id: 'url', icon: 'link', labelKey: 'reportFonts.tabUrl' },
        { id: 'upload', icon: 'upload_file', labelKey: 'reportFonts.tabUpload' },
    ];

    tab = signal<FontTab>('google');
    fonts = signal<ReportCustomFont[]>([]);
    busy = signal(false);
    error = signal<string | null>(null);
    googleFamily = signal('');
    fontUrl = signal('');
    urlFamily = signal('');
    uploadFamily = signal('');

    ngOnInit(): void {
        this.fonts.set(sanitizeCustomFonts(this.data?.fonts));
    }

    full(): boolean {
        return this.fonts().length >= MAX_CUSTOM_FONTS;
    }

    stack(family: string): string {
        return customFontStack(family);
    }

    switchTab(tab: FontTab): void {
        this.tab.set(tab);
        this.error.set(null);
    }

    onUrlChange(value: string): void {
        this.fontUrl.set(value);
        if (!this.urlFamily().trim()) this.urlFamily.set(familyFromFontUrl(value.trim()));
    }

    async addGoogle(): Promise<void> {
        const family = this.googleFamily().trim();
        if (!this._checkFamily(family)) return;
        await this._run(async () => {
            const url = googleFontUrl(family);
            const response = await fetch(url).catch(() => null);
            if (response && !response.ok) {
                this.error.set('reportFonts.googleNotFound');
                return;
            }
            this._add({ family, source: 'google', url });
            this.googleFamily.set('');
        });
    }

    async addUrl(): Promise<void> {
        const url = this.fontUrl().trim();
        const family = this.urlFamily().trim();
        if (!this._checkFamily(family)) return;
        if (!isValidFontUrl(url) || !url.startsWith('https://')) {
            this.error.set('reportFonts.invalidUrl');
            return;
        }
        await this._run(async () => {
            if (/\.(woff2?|ttf|otf)(?:[?#]|$)/i.test(url)) {
                const loaded = await new FontFace(family, `url("${url}")`).load().catch(() => null);
                if (!loaded) {
                    this.error.set('reportFonts.loadFailed');
                    return;
                }
            }
            this._add({ family, source: 'url', url });
            this.fontUrl.set('');
            this.urlFamily.set('');
        });
    }

    onFile(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (!file) return;
        if (file.size > MAX_FONT_FILE_BYTES) {
            this.error.set('reportFonts.tooLarge');
            return;
        }
        if (!/\.(woff2?|ttf|otf)$/i.test(file.name)) {
            this.error.set('reportFonts.invalidFile');
            return;
        }
        const family = this.uploadFamily().trim() || familyFromFileName(file.name);
        if (!this._checkFamily(family)) return;
        void this._run(async () => {
            const loaded = await new FontFace(family, await file.arrayBuffer()).load().catch(() => null);
            if (!loaded) {
                this.error.set('reportFonts.invalidFile');
                return;
            }
            this._add({ family, source: 'file', url: await readFontFile(file) });
            this.uploadFamily.set('');
        });
    }

    remove(font: ReportCustomFont): void {
        this.fonts.update((list) => list.filter((item) => item.family !== font.family));
    }

    apply(font: ReportCustomFont): void {
        this._ref.close({ fonts: this.fonts(), apply: customFontStack(font.family) });
    }

    save(): void {
        this._ref.close({ fonts: this.fonts() });
    }

    close(): void {
        this._ref.close();
    }

    private _checkFamily(family: string): boolean {
        this.error.set(null);
        if (!isValidFontFamily(family)) {
            this.error.set('reportFonts.invalidFamily');
            return false;
        }
        if (this.fonts().some((font) => font.family.toLowerCase() === family.toLowerCase())) {
            this.error.set('reportFonts.duplicate');
            return false;
        }
        if (this.full()) {
            this.error.set('reportFonts.limit');
            return false;
        }
        return true;
    }

    private _add(font: ReportCustomFont): void {
        registerReportFonts([font]);
        this.fonts.update((list) => [...list, font]);
    }

    private async _run(task: () => Promise<void>): Promise<void> {
        if (this.busy()) return;
        this.busy.set(true);
        this.error.set(null);
        try {
            await task();
        } catch (err) {
            console.error('[ReportFonts] add font error', err);
            this.error.set('reportFonts.loadFailed');
        } finally {
            this.busy.set(false);
        }
    }
}
