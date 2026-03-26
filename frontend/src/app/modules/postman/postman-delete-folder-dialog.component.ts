import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { TranslocoPipe } from '@jsverse/transloco';

export type PostmanDeleteFolderDisposition = 'reparent' | 'deleteLayouts';

export interface PostmanDeleteFolderDialogData {
    folderName: string;
    subtreeEndpointCount: number;
    directChildFolderCount: number;
}

@Component({
    standalone: true,
    selector: 'postman-delete-folder-dialog',
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatRadioModule,
        TranslocoPipe,
    ],
    template: `
        <div
            class="postman-folder-dialog overflow-hidden rounded-2xl bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100"
        >
            <h2
                mat-dialog-title
                class="!m-0 text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
            >
                {{ 'postman.sidebar.deleteFolderDialogTitle' | transloco }}
            </h2>
            <mat-dialog-content
                class="!m-0 block max-h-[min(70vh,520px)] overflow-y-auto px-6 py-4"
            >
                <p class="m-0 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {{
                        'postman.sidebar.deleteFolderDialogBody'
                            | transloco
                                : {
                                      name: data.folderName,
                                      count: data.subtreeEndpointCount,
                                      subfolders: data.directChildFolderCount,
                                  }
                    }}
                </p>

                <mat-radio-group
                    class="mt-5 flex flex-col gap-3"
                    [(ngModel)]="disposition"
                    name="folderDeleteDisposition"
                >
                    <mat-radio-button
                        value="reparent"
                        color="primary"
                        class="delete-folder-radio !h-auto !items-start rounded-xl border border-slate-200/90 p-4 !whitespace-normal dark:border-slate-600"
                    >
                        <div class="pl-1">
                            <div class="text-sm font-semibold text-slate-800 dark:text-slate-100">
                                {{ 'postman.sidebar.deleteFolderOptionReparent' | transloco }}
                            </div>
                            <div
                                class="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400"
                            >
                                {{ 'postman.sidebar.deleteFolderOptionReparentHint' | transloco }}
                            </div>
                        </div>
                    </mat-radio-button>

                    <mat-radio-button
                        value="deleteLayouts"
                        color="primary"
                        class="delete-folder-radio !h-auto !items-start rounded-xl border border-slate-200/90 p-4 !whitespace-normal dark:border-slate-600"
                    >
                        <div class="pl-1">
                            <div class="text-sm font-semibold text-slate-800 dark:text-slate-100">
                                {{ 'postman.sidebar.deleteFolderOptionDeleteLayouts' | transloco }}
                            </div>
                            <div
                                class="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400"
                            >
                                {{
                                    'postman.sidebar.deleteFolderOptionDeleteLayoutsHint'
                                        | transloco
                                }}
                            </div>
                        </div>
                    </mat-radio-button>
                </mat-radio-group>
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
                    type="button"
                    class="!rounded-full !px-5 !font-semibold"
                    [color]="disposition === 'deleteLayouts' ? 'warn' : 'primary'"
                    (click)="confirm()"
                >
                    {{ 'postman.sidebar.deleteFolderConfirm' | transloco }}
                </button>
            </mat-dialog-actions>
        </div>
    `,
})
export class PostmanDeleteFolderDialogComponent {
    data = inject<PostmanDeleteFolderDialogData>(MAT_DIALOG_DATA);
    private _ref = inject(
        MatDialogRef<
            PostmanDeleteFolderDialogComponent,
            { deleteEndpointLayouts: boolean } | undefined
        >
    );

    disposition: PostmanDeleteFolderDisposition = 'reparent';

    confirm() {
        this._ref.close({
            deleteEndpointLayouts: this.disposition === 'deleteLayouts',
        });
    }
}
