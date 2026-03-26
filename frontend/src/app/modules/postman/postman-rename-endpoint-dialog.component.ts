import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslocoPipe } from '@jsverse/transloco';
import { ApiEndpoint } from './postman.types';

export interface PostmanRenameEndpointDialogData {
    endpoint: ApiEndpoint;
    /** Resolved catalog title or label (default sidebar name). */
    defaultTitle: string;
    /** What the sidebar shows today (custom or default). */
    currentLabel: string;
}

@Component({
    standalone: true,
    selector: 'postman-rename-endpoint-dialog',
    imports: [CommonModule, FormsModule, MatDialogModule, MatButtonModule, TranslocoPipe],
    template: `
        <div
            class="postman-rename-dialog overflow-hidden rounded-2xl bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100"
        >
            <h2
                mat-dialog-title
                class="!m-0 px-6 pt-6 text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
            >
                {{ 'postman.sidebar.renameEndpointDialogTitle' | transloco }}
            </h2>
            <mat-dialog-content
                class="!m-0 block max-h-[min(70vh,560px)] overflow-y-auto px-6 py-4"
            >
                <p class="m-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {{ 'postman.sidebar.renameEndpointDialogBody' | transloco }}
                </p>

                <div class="mt-4 w-full">
                    <div
                        class="grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] md:gap-3"
                    >
                        <div class="flex min-h-0 min-w-0 flex-col gap-1.5 md:h-full">
                            <span
                                class="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
                            >
                                {{ 'postman.sidebar.renameEndpointBefore' | transloco }}
                            </span>
                            <div
                                class="flex min-h-[2.5rem] min-w-0 flex-1 flex-col justify-start rounded-lg border border-slate-200/90 bg-slate-50/60 px-3 py-2.5 text-sm font-medium leading-snug text-slate-800 dark:border-slate-600 dark:bg-slate-950/40 dark:text-slate-100"
                                [attr.title]="data.currentLabel"
                            >
                                <span class="block whitespace-normal break-words">{{
                                    data.currentLabel
                                }}</span>
                            </div>
                        </div>

                        <div
                            class="hidden items-center justify-center self-stretch text-slate-300 dark:text-slate-600 md:flex"
                            aria-hidden="true"
                        >
                            <span class="text-2xl font-light leading-none">→</span>
                        </div>
                        <div
                            class="flex justify-center text-slate-300 dark:text-slate-600 md:hidden"
                            aria-hidden="true"
                        >
                            <span class="text-2xl font-light leading-none">↓</span>
                        </div>

                        <div
                            class="flex min-h-0 min-w-0 flex-col gap-1.5 md:col-start-3 md:row-start-1 md:h-full"
                        >
                            <span
                                class="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
                            >
                                {{ 'postman.sidebar.renameEndpointAfter' | transloco }}
                            </span>
                            <div
                                class="flex min-h-[2.5rem] min-w-0 flex-1 items-center rounded-lg border border-slate-200/90 bg-slate-50/60 px-3 py-2.5 dark:border-slate-600 dark:bg-slate-950/40"
                            >
                                <input
                                    type="text"
                                    class="w-full min-w-0 border-0 bg-transparent text-sm font-medium text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:outline-none focus:ring-0 dark:text-slate-100 dark:placeholder:text-slate-500"
                                    [(ngModel)]="value"
                                    [placeholder]="
                                        'postman.sidebar.renameEndpointPlaceholder' | transloco
                                    "
                                    [attr.aria-label]="
                                        'postman.sidebar.renameEndpointAfter' | transloco
                                    "
                                    (keyup.enter)="confirm()"
                                    autocomplete="off"
                                    spellcheck="false"
                                />
                            </div>
                        </div>
                    </div>

                    <p
                        class="m-0 mt-6 border-t border-slate-200/80 pt-4 text-xs leading-relaxed text-slate-500 dark:border-slate-700 dark:text-slate-400"
                    >
                        {{
                            'postman.sidebar.renameEndpointFooterHint'
                                | transloco: { name: data.defaultTitle }
                        }}
                    </p>
                </div>

                <div
                    class="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
                >
                    <span
                        class="inline-flex items-center rounded-md px-2 py-0.5 font-bold tabular-nums"
                        [ngClass]="methodBadgeClass()"
                    >
                        {{ data.endpoint.method }}
                    </span>
                    <span
                        *ngIf="data.endpoint.code"
                        class="font-mono text-[11px] text-slate-500 dark:text-slate-400"
                    >
                        {{ data.endpoint.code }}
                    </span>
                </div>
            </mat-dialog-content>
            <mat-dialog-actions
                align="end"
                class="!m-0 border-t border-slate-100 px-6 py-4 dark:border-slate-800"
            >
                <button mat-button mat-dialog-close type="button" class="!font-medium">
                    {{ 'postman.sidebar.cancel' | transloco }}
                </button>
                <button
                    mat-flat-button
                    color="primary"
                    type="button"
                    class="!rounded-full !px-5 !font-semibold"
                    (click)="confirm()"
                >
                    {{ 'postman.sidebar.save' | transloco }}
                </button>
            </mat-dialog-actions>
        </div>
    `,
})
export class PostmanRenameEndpointDialogComponent {
    data = inject<PostmanRenameEndpointDialogData>(MAT_DIALOG_DATA);
    private _ref = inject(MatDialogRef<PostmanRenameEndpointDialogComponent, string | undefined>);
    value = this.data.endpoint.layoutDisplayName ?? '';

    methodBadgeClass(): Record<string, boolean> {
        const m = this.data.endpoint.method;
        return {
            'bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-300': m === 'GET',
            'bg-yellow-100 text-yellow-800 dark:bg-yellow-950/50 dark:text-yellow-300':
                m === 'POST',
            'bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300': m === 'PUT',
            'bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-300': m === 'DELETE',
            'bg-violet-100 text-violet-800 dark:bg-violet-950/50 dark:text-violet-300':
                m === 'PATCH',
            'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200':
                m !== 'GET' && m !== 'POST' && m !== 'PUT' && m !== 'DELETE' && m !== 'PATCH',
        };
    }

    confirm() {
        this._ref.close(this.value?.trim() ?? '');
    }
}
