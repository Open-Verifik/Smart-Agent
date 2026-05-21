import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewEncapsulation,
    inject,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import type { Collection } from '../biometrics/collections.types';
import { SmartEnrollProjectsService } from '../projects/smart-enroll-projects.service';
import type { EnrollProject } from '../projects/smart-enroll-projects.types';

export const COLLECTION_DIALOG_PANEL_CLASS = 'collection-dialog-panel';

export interface CollectionDialogData {
    collection?: Collection;
    mode?: 'create' | 'edit';
}

@Component({
    selector: 'app-collection-dialog',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './collection-dialog.component.html',
    styleUrl: './collection-dialog.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionDialogComponent implements OnInit {
    data = inject<CollectionDialogData>(MAT_DIALOG_DATA);
    dialogRef = inject(MatDialogRef<CollectionDialogComponent>);

    private _fb = inject(FormBuilder);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    allProjects: EnrollProject[] = [];
    createForm!: FormGroup;
    dialogTitle = '';
    isEditMode = false;
    loading = false;
    saveButtonText = '';

    ngOnInit(): void {
        this.isEditMode = this.data?.mode === 'edit' || !!this.data?.collection;
        this.dialogTitle = this.isEditMode
            ? this._transloco.translate('smartEnrollCollections.editCollection')
            : this._transloco.translate('smartEnrollCollections.createCollection');
        this.saveButtonText = this.dialogTitle;
        this._buildForm();
        this._loadProjects();
    }

    get disableSave(): boolean {
        return this.createForm.invalid || this.loading;
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (!this.createForm.valid) {
            this.createForm.markAllAsTouched();
            this._cdr.markForCheck();
            return;
        }

        const formData = this.createForm.value;
        const collectionData: Partial<Collection> = {
            name: formData.name,
            description: formData.description || '',
            project: formData.project,
        };

        if (this.isEditMode && this.data?.collection?._id) {
            collectionData._id = this.data.collection._id;
        }

        this.dialogRef.close({
            action: this.isEditMode ? 'edit' : 'create',
            collection: collectionData,
        });
    }

    private _buildForm(): void {
        const collection = this.data?.collection;
        this.createForm = this._fb.group({
            name: [collection?.name || '', [Validators.required]],
            description: [collection?.description || ''],
            project: [collection?.project || ''],
        });
    }

    private _loadProjects(): void {
        this.loading = true;

        this._projectsService.listProjects().subscribe({
            next: (projects) => {
                this.allProjects = projects || [];
                this.loading = false;
                this._cdr.markForCheck();
            },
            error: () => this._onLoadError(),
        });
    }

    private _onLoadError(): void {
        this._snackBar.open(
            this._transloco.translate('smartEnrollCollections.getError'),
            this._transloco.translate('close'),
            { duration: 3000 }
        );
        this.loading = false;
        this._cdr.markForCheck();
    }
}
