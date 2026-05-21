import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
    inject,
    signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';
import { DateTime } from 'luxon';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import * as XLSX from 'xlsx';
import { SMART_ENROLL_PROJECT_TYPE } from '../biometrics/biometrics.constants';
import type { Person } from '../biometrics/people.types';
import { PeopleService } from '../biometrics/people.service';
import {
    BIOMETRICS_CONFIRM_DIALOG_PANEL_CLASS,
    BiometricsConfirmDialogComponent,
    ConfirmDialogData,
} from '../shared/biometrics-confirm-dialog.component';
import { BiometricsPeopleTableComponent } from '../shared/biometrics-people-table.component';
import {
    EditPersonDialogComponent,
    EDIT_PERSON_DIALOG_PANEL_CLASS,
} from '../shared/edit-person-dialog.component';

export type PeopleScopeFilter = 'onboarding' | 'all';

@Component({
    selector: 'app-people-list',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatSliderModule,
        MatProgressSpinnerModule,
        TranslocoModule,
        RouterLink,
        BiometricsPeopleTableComponent,
    ],
    templateUrl: './people-list.component.html',
    styleUrl: './people-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent implements OnInit, OnDestroy {
    @ViewChild('imageInput') imageInput?: ElementRef<HTMLInputElement>;

    private _peopleService = inject(PeopleService);
    private _dialog = inject(MatDialog);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    private _minScoreChange$ = new Subject<number>();
    private _destroy$ = new Subject<void>();

    peopleData = signal<Person[]>([]);
    exporting = signal(false);
    filterText = '';
    imageSearchExpanded = false;
    loading = signal(true);
    minScore = 0.8;
    searchMode: 'fast' | 'accurate' = 'fast';
    selectedImagePreview: string | null = null;
    scopeFilter: PeopleScopeFilter = 'onboarding';

    readonly projectType = SMART_ENROLL_PROJECT_TYPE;

    ngOnInit(): void {
        this._fetchRecords();
        this._minScoreChange$.pipe(debounceTime(300), takeUntil(this._destroy$)).subscribe(() => {
            if (this.selectedImagePreview) this._fetchRecords();
        });
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    get disableActions(): boolean {
        return this.loading() || this.exporting();
    }

    get disabledClearFilters(): boolean {
        return (
            this.disableActions ||
            (!this.filterText && !this.selectedImagePreview && this.scopeFilter === 'onboarding')
        );
    }

    get tableScopeLabelKey(): string {
        return this.scopeFilter === 'onboarding'
            ? 'smartEnrollCollections.scopeFilterOnboarding'
            : 'smartEnrollCollections.scopeFilterAll';
    }

    clearFilters(): void {
        const hadImage = !!this.selectedImagePreview;
        const hadScopeChange = this.scopeFilter !== 'onboarding';
        this.filterText = '';
        this.minScore = 0.8;
        this.searchMode = 'fast';
        this.selectedImagePreview = null;
        this.imageSearchExpanded = false;
        this.scopeFilter = 'onboarding';
        if (hadImage || hadScopeChange) this._fetchRecords();
        this._cdr.markForCheck();
    }

    removeScopeFilter(): void {
        if (this.scopeFilter === 'all') return;
        this.scopeFilter = 'all';
        this.selectedImagePreview = null;
        this.imageSearchExpanded = false;
        this._fetchRecords();
        this._cdr.markForCheck();
    }

    restoreScopeFilter(): void {
        if (this.scopeFilter === 'onboarding') return;
        this.scopeFilter = 'onboarding';
        this._fetchRecords();
        this._cdr.markForCheck();
    }

    createPerson(): void {
        const dialogRef = this._dialog.open(EditPersonDialogComponent, {
            width: '640px',
            maxWidth: '94vw',
            panelClass: EDIT_PERSON_DIALOG_PANEL_CLASS,
            data: { mode: 'create' },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (!result || result.action !== 'create') return;
            this.loading.set(true);

            const request$ =
                result.method === 'liveness'
                    ? this._peopleService.createPersonWithLiveness(result.person)
                    : this._peopleService.createPerson(result.person);

            request$.subscribe({
                next: () => this._fetchRecords(),
                error: (err) => this._showCreateError(err, result.method === 'liveness'),
                complete: () => this.loading.set(false),
            });
        });
    }

    deletePerson(person: Person): void {
        const dialogRef = this._dialog.open(BiometricsConfirmDialogComponent, {
            panelClass: BIOMETRICS_CONFIRM_DIALOG_PANEL_CLASS,
            width: '480px',
            data: {
                title: this._transloco.translate('smartEnrollPeople.deleteTitle'),
                subtitle: person.name,
                message: this._transloco.translate('smartEnrollPeople.deleteMessage'),
                warning: this._transloco.translate('smartEnrollPeople.deleteWarning'),
                confirmLabel: this._transloco.translate('smartEnrollPeople.deleteConfirm'),
            } as ConfirmDialogData,
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result?.action !== 'delete') return;
            this.loading.set(true);
            this._peopleService.deletePerson(person._id).subscribe({
                next: () => this._fetchRecords(),
                error: () => this._showError('smartEnrollPeople.deleteError'),
                complete: () => this.loading.set(false),
            });
        });
    }

    editPerson(person: Person): void {
        const dialogRef = this._dialog.open(EditPersonDialogComponent, {
            width: '640px',
            maxWidth: '94vw',
            panelClass: EDIT_PERSON_DIALOG_PANEL_CLASS,
            data: { mode: 'edit', person },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (!result || result.action !== 'update') return;
            this.loading.set(true);
            this._peopleService.updatePerson(result.person).subscribe({
                next: () => this._fetchRecords(),
                error: () => this._showError('smartEnrollPeople.updateError'),
                complete: () => this.loading.set(false),
            });
        });
    }

    exportData(): void {
        if (this.exporting()) return;
        this.exporting.set(true);

        const rows = this.peopleData().map((person) => ({
            name: person.name,
            id: person._id,
            dateOfBirth: person.date_of_birth || '',
            nationality: person.nationality || '',
            collections: person.collections?.join(', ') || '',
            updatedAt: person.updatedAt || '',
        }));

        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([buffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `verifik_people_${DateTime.now().toFormat('yyyy-MM-dd')}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);

        this.exporting.set(false);
        this._cdr.markForCheck();
    }

    onImageSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file?.type.startsWith('image/')) {
            this.selectedImagePreview = null;
            this._fetchRecords();
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            this._showError('smartEnrollPeople.imageSizeError');
            input.value = '';
            return;
        }
        this.imageSearchExpanded = true;
        const reader = new FileReader();
        reader.onload = (e) => {
            this.selectedImagePreview = e.target?.result as string;
            this._fetchRecords();
            this._cdr.markForCheck();
        };
        reader.readAsDataURL(file);
    }

    onMinScoreChange(value: number): void {
        this.minScore = value;
        if (this.selectedImagePreview && !this.disableActions) {
            this._minScoreChange$.next(value);
        }
    }

    onSearchModeChange(mode: 'fast' | 'accurate'): void {
        this.searchMode = mode;
        if (this.selectedImagePreview && !this.disableActions) this._fetchRecords();
    }

    onTextFilterChange(event: Event): void {
        this.filterText = (event.target as HTMLInputElement).value?.trim().toLowerCase() || '';
        this._cdr.markForCheck();
    }

    toggleImageSearchAccordion(): void {
        if (this.scopeFilter === 'all') return;
        this.imageSearchExpanded = !this.imageSearchExpanded;
    }

    triggerImageUpload(): void {
        if (!this.disableActions && this.scopeFilter === 'onboarding') this.imageInput?.nativeElement.click();
    }

    private _fetchRecords(): void {
        this.loading.set(true);
        const params: Record<string, unknown> = this.selectedImagePreview
            ? { image: this.selectedImagePreview, searchMode: this.searchMode, minScore: this.minScore }
            : {};

        const request$ =
            this.scopeFilter === 'all'
                ? this._peopleService.getPeople(params)
                : this._peopleService.getPeopleByProjectType(this.projectType, params);

        request$.subscribe({
            next: (response) => {
                const data =
                    response.data?.map((person) => ({
                        ...person,
                        date_of_birth: person.date_of_birth
                            ? DateTime.fromISO(person.date_of_birth).toFormat('yyyy-MM-dd')
                            : null,
                    })) || [];
                this.peopleData.set(data);
                this.loading.set(false);
                this._cdr.markForCheck();
            },
            error: () => {
                this._showError('smartEnrollPeople.getError');
                this.loading.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    private _showError(key: string): void {
        this._snackBar.open(this._transloco.translate(key), this._transloco.translate('close'), {
            duration: 3000,
        });
    }

    private _showCreateError(err: { error?: { code?: string; message?: string } }, isLiveness: boolean): void {
        const message = err?.error?.message || '';
        const code = err?.error?.code || '';

        if (isLiveness) {
            if (message.includes('duplicated_person') || code === 'duplicated_person') {
                this._showError('smartEnrollPeople.createErrorDuplicate');
                return;
            }
            if (message.includes('liveness_failed') || message.includes('liveness_quality')) {
                this._showError('smartEnrollPeople.createErrorLiveness');
                return;
            }
        }

        this._showError('smartEnrollPeople.createError');
    }
}
