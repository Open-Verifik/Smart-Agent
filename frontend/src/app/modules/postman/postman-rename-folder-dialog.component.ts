import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoPipe } from '@jsverse/transloco';
import { PostmanFolderDto } from './postman.types';

export interface PostmanRenameFolderDialogData {
  folder: PostmanFolderDto;
}

@Component({
  standalone: true,
  selector: 'postman-rename-folder-dialog',
  imports: [CommonModule, FormsModule, MatDialogModule, MatButtonModule, TranslocoPipe],
  template: `
    <div
      class="postman-folder-dialog overflow-hidden rounded-2xl bg-white text-slate-900 shadow-xl dark:bg-slate-900 dark:text-slate-100"
    >
      <h2
        mat-dialog-title
        class="!m-0 px-6 pt-6 text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
      >
        {{ 'postman.sidebar.renameFolderDialogTitle' | transloco }}
      </h2>
      <mat-dialog-content class="!m-0 block max-h-[min(70vh,560px)] overflow-y-auto px-6 py-4">
        <p class="m-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {{ 'postman.sidebar.renameFolderDialogBody' | transloco }}
        </p>

        <div class="mt-4 w-full">
          <div
            class="grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] md:gap-3"
          >
            <div class="flex min-h-0 min-w-0 flex-col gap-1.5 md:h-full">
              <span
                class="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
              >
                {{ 'postman.sidebar.renameFolderBefore' | transloco }}
              </span>
              <div
                class="flex min-h-[2.5rem] min-w-0 flex-1 flex-col justify-start rounded-lg border border-slate-200/90 bg-slate-50/60 px-3 py-2.5 text-sm font-medium leading-snug text-slate-800 shadow-sm dark:border-slate-600 dark:bg-slate-950/40 dark:text-slate-100"
                [attr.title]="data.folder.name"
              >
                <span class="block whitespace-normal break-words">{{ data.folder.name }}</span>
              </div>
            </div>

            <div
              class="hidden items-center justify-center self-stretch text-slate-300 dark:text-slate-600 md:flex"
              aria-hidden="true"
            >
              <span class="text-2xl font-light leading-none">→</span>
            </div>
            <div class="flex justify-center text-slate-300 dark:text-slate-600 md:hidden" aria-hidden="true">
              <span class="text-2xl font-light leading-none">↓</span>
            </div>

            <div class="flex min-h-0 min-w-0 flex-col gap-1.5 md:col-start-3 md:row-start-1 md:h-full">
              <span
                class="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
              >
                {{ 'postman.sidebar.renameFolderAfter' | transloco }}
              </span>
              <div
                class="flex min-h-[2.5rem] min-w-0 flex-1 items-center rounded-lg border border-slate-200/90 bg-slate-50/60 px-3 py-2.5 dark:border-slate-600 dark:bg-slate-950/40"
              >
                <input
                  type="text"
                  class="w-full min-w-0 border-0 bg-transparent text-sm font-medium text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:outline-none focus:ring-0 dark:text-slate-100 dark:placeholder:text-slate-500"
                  [(ngModel)]="value"
                  [placeholder]="'postman.sidebar.renameFolderPlaceholder' | transloco"
                  [attr.aria-label]="'postman.sidebar.renameFolderAfter' | transloco"
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
            {{ 'postman.sidebar.renameFolderFooterHint' | transloco }}
          </p>
        </div>
      </mat-dialog-content>
      <mat-dialog-actions align="end" class="!m-0 border-t border-slate-100 px-6 py-4 dark:border-slate-800">
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
export class PostmanRenameFolderDialogComponent {
  data = inject<PostmanRenameFolderDialogData>(MAT_DIALOG_DATA);
  private _ref = inject(MatDialogRef<PostmanRenameFolderDialogComponent, string | undefined>);
  value = this.data.folder.name ?? '';

  confirm() {
    this._ref.close(this.value?.trim() ?? '');
  }
}
