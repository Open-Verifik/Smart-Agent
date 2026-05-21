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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { forkJoin } from 'rxjs';
import { SMART_ENROLL_PROJECT_TYPE } from '../biometrics/biometrics.constants';
import { CollectionsService } from '../biometrics/collections.service';
import type { Collection } from '../biometrics/collections.types';
import { mergeAccountCollections } from '../biometrics/collections.util';
import type { Person } from '../biometrics/people.types';
import { CollectionScopeBadgeComponent } from './collection-scope-badge.component';

export const EDIT_PERSON_DIALOG_PANEL_CLASS = 'edit-person-dialog-panel';

export type CreatePersonMethod = 'liveness' | 'standard';

export interface EditPersonDialogData {
    contextCollection?: Collection;
    mode?: 'create' | 'edit';
    person?: Person;
}

@Component({
    selector: 'app-edit-person-dialog',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSliderModule,
        TranslocoModule,
        CollectionScopeBadgeComponent,
    ],
    templateUrl: './edit-person-dialog.component.html',
    styleUrl: './edit-person-dialog.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPersonDialogComponent implements OnInit {
    data = inject<EditPersonDialogData>(MAT_DIALOG_DATA);
    dialogRef = inject(MatDialogRef<EditPersonDialogComponent>);

    private _fb = inject(FormBuilder);
    private _collectionsService = inject(CollectionsService);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    editForm!: FormGroup;
    loading = false;
    allCollections: Collection[] = [];
    hasWarning = false;
    showConfirmation = false;
    initialCollections: string[] = [];
    photoPreview: string | null = null;
    photoError = false;
    createMethod: CreatePersonMethod = 'standard';

    get isCreateMode(): boolean {
        return this.data?.mode === 'create' || !this.data?.person;
    }

    get isLivenessCreate(): boolean {
        return this.isCreateMode && this.createMethod === 'liveness';
    }

    ngOnInit(): void {
        this._buildForm();
        this._loadCollections();
    }

    get dialogSubtitleKey(): string {
        if (!this.isCreateMode) return '';
        return this.isLivenessCreate
            ? 'smartEnrollPeople.createMethodLivenessHint'
            : 'smartEnrollPeople.createMethodStandardHint';
    }

    get currentSaveButtonText(): string {
        if (this.isCreateMode) {
            return this._transloco.translate('smartEnrollPeople.createPerson');
        }
        if (this.hasWarning && !this.showConfirmation) {
            return this._transloco.translate('smartEnrollCollections.reviewChanges');
        }
        if (this.showConfirmation) return this._transloco.translate('confirm');
        return this._transloco.translate('save_changes');
    }

    get currentSaveButtonColor(): 'primary' | 'warn' {
        return this.hasWarning ? 'warn' : 'primary';
    }

    get disableSave(): boolean {
        if (this.loading || this.editForm?.invalid) return true;
        if (!this.isCreateMode) return false;
        if (!this.photoPreview) return true;

        if (this.isLivenessCreate) {
            return !this.editForm.get('collection_id')?.value;
        }

        const collections: string[] = this.editForm.get('collections')?.value || [];
        return collections.length === 0;
    }

    getRowThumbnail(person?: Person): string {
        const thumb = person?.thumbnails?.[0]?.thumbnail;
        if (!thumb) return 'assets/images/avatars/default.jpg';
        const cleaned = thumb.replace(/^data:.*;base64,/, '');
        return `data:image/png;base64,${cleaned}`;
    }

    isCollectionSelected(code: string): boolean {
        return (this.editForm.get('collections')?.value || []).includes(code);
    }

    isLivenessCollectionSelected(collectionId: string): boolean {
        return this.editForm.get('collection_id')?.value === collectionId;
    }

    onCollectionChange(code: string, checked: boolean): void {
        const current: string[] = this.editForm.get('collections')?.value || [];
        const updated = checked ? [...current, code] : current.filter((c) => c !== code);
        this.editForm.patchValue({ collections: updated });
        this._validateCollections();
    }

    onLivenessCollectionSelect(collection: Collection): void {
        this.editForm.patchValue({ collection_id: collection._id });
        this._cdr.markForCheck();
    }

    onCreateMethodChange(method: CreatePersonMethod): void {
        if (this.createMethod === method) return;

        this.createMethod = method;
        this.editForm.patchValue({ collections: [], collection_id: '' });
        this._cdr.markForCheck();
    }

    onSearchModeChange(mode: 'accurate' | 'fast'): void {
        this.editForm.patchValue({ search_mode: mode });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (!this.editForm.valid) {
            this.editForm.markAllAsTouched();
            this._cdr.markForCheck();
            return;
        }

        if (!this.isCreateMode && this.hasWarning && !this.showConfirmation) {
            this.showConfirmation = true;
            this._cdr.markForCheck();
            return;
        }

        const formData = this.editForm.value;
        const dob = this._formatDateOfBirth(formData.date_of_birth);

        if (!dob) {
            this.editForm.get('date_of_birth')?.setErrors({ invalid: true });
            this.editForm.get('date_of_birth')?.markAsTouched();
            this._cdr.markForCheck();
            return;
        }

        if (this.isCreateMode) {
            if (!this.photoPreview) {
                this.photoError = true;
                this._cdr.markForCheck();
                return;
            }

            const nationality = formData.nationality ? formData.nationality.toLowerCase() : '';

            if (this.isLivenessCreate) {
                this.dialogRef.close({
                    action: 'create',
                    method: 'liveness',
                    person: {
                        name: formData.name,
                        gender: formData.gender,
                        date_of_birth: dob,
                        nationality,
                        collection_id: formData.collection_id,
                        liveness_min_score: formData.liveness_min_score,
                        min_score: formData.min_score,
                        search_mode: formData.search_mode === 'accurate' ? 'ACCURATE' : 'FAST',
                        images: [this.photoPreview],
                    },
                });
                return;
            }

            this.dialogRef.close({
                action: 'create',
                method: 'standard',
                person: {
                    name: formData.name,
                    gender: formData.gender,
                    date_of_birth: dob,
                    nationality,
                    notes: formData.notes || '',
                    collections: formData.collections || [],
                    images: [this.photoPreview],
                },
            });
            return;
        }

        this.dialogRef.close({
            action: 'update',
            person: {
                ...this.data.person,
                ...formData,
                collections: formData.collections || [],
                date_of_birth: dob,
                nationality: formData.nationality ? formData.nationality.toLowerCase() : '',
                notes: formData.notes || '',
            },
        });
    }

    onPhotoSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        this.photoError = false;

        if (!file?.type.startsWith('image/')) {
            this.photoPreview = null;
            this._cdr.markForCheck();
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            this._snackBar.open(
                this._transloco.translate('smartEnrollPeople.imageSizeError'),
                this._transloco.translate('close'),
                { duration: 3000 }
            );
            input.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            this.photoPreview = e.target?.result as string;
            this._cdr.markForCheck();
        };
        reader.readAsDataURL(file);
    }

    triggerPhotoUpload(input: HTMLInputElement): void {
        input.click();
    }

    private _buildForm(): void {
        this.initialCollections = [...(this.data.person?.collections || [])];
        let dateOfBirth: DateTime | null = null;

        if (this.data.person?.date_of_birth) {
            const dt = DateTime.fromISO(this.data.person.date_of_birth);
            if (dt.isValid) dateOfBirth = dt;
        }

        this.editForm = this._fb.group({
            collection_id: [''],
            collections: [this.data.person?.collections || []],
            date_of_birth: [dateOfBirth, [Validators.required]],
            gender: [this.data.person?.gender || 'M', [Validators.required]],
            liveness_min_score: [0.65],
            min_score: [0.8],
            name: [this.data.person?.name || '', [Validators.required]],
            nationality: [this.data.person?.nationality || ''],
            notes: [this.data.person?.notes || ''],
            search_mode: ['fast'],
        });
    }

    private _loadCollections(): void {
        this.loading = true;

        forkJoin({
            all: this._collectionsService.getAllCollections(),
            onboarding: this._collectionsService.getCollectionByProjectType(SMART_ENROLL_PROJECT_TYPE),
        }).subscribe({
            next: ({ all, onboarding }) => {
                const ensureCodes = [
                    ...(this.data.person?.collections || []),
                    ...(this.data.contextCollection?.code ? [this.data.contextCollection.code] : []),
                ];

                this.allCollections = mergeAccountCollections(
                    all.data || [],
                    onboarding.data || [],
                    ensureCodes,
                    this.data.contextCollection ? [this.data.contextCollection] : []
                );

                this._ensureSelectedCollections();
                this.loading = false;
                this._cdr.markForCheck();
            },
            error: () => {
                this._snackBar.open(
                    this._transloco.translate('smartEnrollCollections.getError'),
                    this._transloco.translate('close'),
                    { duration: 3000 }
                );
                this.loading = false;
                this._cdr.markForCheck();
            },
        });
    }

    private _ensureSelectedCollections(): void {
        const current: string[] = this.editForm.get('collections')?.value || [];
        const knownCodes = new Set(this.allCollections.map((collection) => collection.code));
        const contextCode = this.data.contextCollection?.code;

        const merged = new Set(current);
        if (contextCode && knownCodes.has(contextCode)) merged.add(contextCode);

        this.editForm.patchValue({ collections: Array.from(merged) });

        if (this.data.contextCollection?._id) {
            this.editForm.patchValue({ collection_id: this.data.contextCollection._id });
        }
    }

    private _validateCollections(): void {
        const current: string[] = this.editForm.get('collections')?.value || [];
        this.hasWarning = current.length === 0 && this.initialCollections.length > 0;
        this.showConfirmation = false;
        this._cdr.markForCheck();
    }

    private _formatDateOfBirth(value: unknown): string {
        if (!value) return '';

        if (DateTime.isDateTime(value)) {
            return value.isValid ? value.toFormat('yyyy-MM-dd') : '';
        }

        if (value instanceof Date) {
            const dt = DateTime.fromJSDate(value);
            return dt.isValid ? dt.toFormat('yyyy-MM-dd') : '';
        }

        if (typeof value === 'string') {
            const dt = DateTime.fromISO(value);
            return dt.isValid ? dt.toFormat('yyyy-MM-dd') : '';
        }

        return '';
    }
}
