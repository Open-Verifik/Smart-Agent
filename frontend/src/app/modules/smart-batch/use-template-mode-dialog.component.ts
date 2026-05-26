import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { SmartReportTemplate } from './smart-report.service';

export type UseTemplateMode = 'single' | 'batch';
export type InputModeContext = 'useTemplate' | 'addInputs';

export interface UseTemplateModeDialogData {
    template?: SmartReportTemplate;
    context?: InputModeContext;
    title?: string;
    description?: string;
    category?: 'citizen' | 'company' | 'vehicle';
}

@Component({
    selector: 'use-template-mode-dialog',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
    template: `
        <div class="p-1">
            <div class="flex items-start gap-4 border-b border-stone-200/80 px-6 pb-5 pt-6 dark:border-gray-800">
                <div
                    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-gray-800 dark:bg-gray-950 dark:text-stone-200"
                >
                    <mat-icon>{{ isAddInputs() ? 'playlist_add' : 'description' }}</mat-icon>
                </div>
                <div class="min-w-0 flex-1">
                    <p
                        class="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500"
                    >
                        {{ getEyebrowKey() | transloco }}
                    </p>
                    <h2 class="mt-1 text-lg font-semibold leading-snug text-stone-950 dark:text-white">
                        @if (data.title) {
                            {{ data.title }}
                        } @else if (data.template?.nameKey) {
                            {{ data.template!.nameKey! | transloco }}
                        } @else {
                            {{ data.template?.name ?? '' }}
                        }
                    </h2>
                    <p class="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                        {{ getChooseModeDescKey() | transloco }}
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-3 px-6 py-5">
                <button
                    type="button"
                    class="group flex w-full items-start gap-4 rounded-2xl border border-stone-200 bg-white p-4 text-left transition hover:border-stone-950 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900/70 dark:hover:border-white"
                    (click)="select('single')"
                >
                    <div
                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 transition group-hover:border-stone-950 group-hover:bg-stone-950 group-hover:text-white dark:border-gray-700 dark:bg-gray-950 dark:text-stone-200 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-gray-950"
                    >
                        <mat-icon class="!h-5 !w-5 !text-[20px]">{{ getValidateOneRecordIcon() }}</mat-icon>
                    </div>
                    <div class="min-w-0 flex-1">
                        <span class="block text-sm font-semibold text-stone-950 dark:text-white">
                            {{ getSingleOptionTitleKey() | transloco }}
                        </span>
                        <span class="mt-1 block text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                            {{ getValidateOneRecordHintKey() | transloco }}
                        </span>
                    </div>
                    <mat-icon class="mt-1 shrink-0 text-stone-300 transition group-hover:text-stone-950 dark:text-stone-600 dark:group-hover:text-white"
                        >arrow_forward</mat-icon
                    >
                </button>

                <button
                    type="button"
                    class="group flex w-full items-start gap-4 rounded-2xl border border-stone-200 bg-white p-4 text-left transition hover:border-stone-950 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900/70 dark:hover:border-white"
                    (click)="select('batch')"
                >
                    <div
                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 transition group-hover:border-stone-950 group-hover:bg-stone-950 group-hover:text-white dark:border-gray-700 dark:bg-gray-950 dark:text-stone-200 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-gray-950"
                    >
                        <mat-icon class="!h-5 !w-5 !text-[20px]">upload_file</mat-icon>
                    </div>
                    <div class="min-w-0 flex-1">
                        <span class="block text-sm font-semibold text-stone-950 dark:text-white">
                            {{ 'smartBatchSystemPresets.uploadBatch' | transloco }}
                        </span>
                        <span class="mt-1 block text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                            {{ getBatchOptionHintKey() | transloco }}
                        </span>
                    </div>
                    <mat-icon class="mt-1 shrink-0 text-stone-300 transition group-hover:text-stone-950 dark:text-stone-600 dark:group-hover:text-white"
                        >arrow_forward</mat-icon
                    >
                </button>
            </div>

            <div class="flex justify-end border-t border-stone-200/80 px-6 py-4 dark:border-gray-800">
                <button
                    type="button"
                    mat-dialog-close
                    class="inline-flex min-h-10 items-center justify-center rounded-xl px-4 text-sm font-medium text-stone-600 transition hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-gray-800"
                >
                    {{ 'smartBatchSystemPresets.cancel' | transloco }}
                </button>
            </div>
        </div>
    `,
})
export class UseTemplateModeDialogComponent {
    data = inject<UseTemplateModeDialogData>(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<UseTemplateModeDialogComponent>);

    select(mode: UseTemplateMode): void {
        this._dialogRef.close(mode);
    }

    isAddInputs(): boolean {
        return this.data.context === 'addInputs';
    }

    getEyebrowKey(): string {
        return this.isAddInputs()
            ? 'batchProcessing.addInputsDialogEyebrow'
            : 'smartBatchSystemPresets.useTemplate';
    }

    getChooseModeDescKey(): string {
        return this.isAddInputs()
            ? 'batchProcessing.addInputsChooseModeDesc'
            : 'smartBatchSystemPresets.chooseModeDesc';
    }

    getSingleOptionTitleKey(): string {
        return this.isAddInputs()
            ? 'batchProcessing.addOneRecord'
            : 'smartBatchSystemPresets.validateOneRecord';
    }

    getBatchOptionHintKey(): string {
        return this.isAddInputs()
            ? 'batchProcessing.uploadBatchAppendHint'
            : 'smartBatchSystemPresets.uploadBatchHint';
    }

    getValidateOneRecordHintKey(): string {
        const category = this.getTemplateCategory() ?? 'citizen';
        const prefix = this.isAddInputs() ? 'batchProcessing.addOneRecordHint' : 'smartBatchSystemPresets.validateOneRecordHint';

        const hints: Record<string, string> = {
            citizen: `${prefix}Citizen`,
            company: `${prefix}Company`,
            vehicle: `${prefix}Vehicle`,
        };

        return hints[category] ?? hints.citizen;
    }

    getValidateOneRecordIcon(): string {
        const icons: Record<string, string> = {
            citizen: 'person_search',
            company: 'business',
            vehicle: 'directions_car',
        };

        return icons[this.getTemplateCategory() ?? ''] ?? 'person_search';
    }

    private getTemplateCategory(): string | undefined {
        if (this.data.category) {
            return this.data.category;
        }

        const template = this.data.template;
        if (!template) {
            return undefined;
        }

        if (template.category) {
            return template.category;
        }

        const systemKey = template.clonedFromSystemKey ?? template.systemKey;
        if (!systemKey) {
            return undefined;
        }

        if (systemKey.includes('.citizen.')) return 'citizen';
        if (systemKey.includes('.company.')) return 'company';
        if (systemKey.includes('.vehicle.')) return 'vehicle';

        return undefined;
    }
}
