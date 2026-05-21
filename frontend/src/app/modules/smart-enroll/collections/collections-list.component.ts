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
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';
import { Subject, forkJoin } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import * as XLSX from 'xlsx';
import { DateTime } from 'luxon';
import { SMART_ENROLL_PROJECT_TYPE } from '../biometrics/biometrics.constants';
import { CollectionsService } from '../biometrics/collections.service';
import type { Collection } from '../biometrics/collections.types';
import { classifyCollections, getOnboardingCollectionCodes } from '../biometrics/collections.util';
import type { Person } from '../biometrics/people.types';
import { PeopleService } from '../biometrics/people.service';
import {
    BIOMETRICS_CONFIRM_DIALOG_PANEL_CLASS,
    BiometricsConfirmDialogComponent,
    ConfirmDialogData,
} from '../shared/biometrics-confirm-dialog.component';
import { BiometricsCollectionsTableComponent } from '../shared/biometrics-collections-table.component';
import {
    CollectionDialogComponent,
    COLLECTION_DIALOG_PANEL_CLASS,
    CollectionDialogData,
} from '../shared/collection-dialog.component';
import {
    EditPersonDialogComponent,
    EDIT_PERSON_DIALOG_PANEL_CLASS,
    EditPersonDialogData,
} from '../shared/edit-person-dialog.component';

export type CollectionsScopeFilter = 'onboarding' | 'all';

@Component({
    selector: 'app-collections-list',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatMenuModule,
        MatSliderModule,
        MatProgressSpinnerModule,
        TranslocoModule,
        BiometricsCollectionsTableComponent,
    ],
    templateUrl: './collections-list.component.html',
    styleUrl: './collections-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionsListComponent implements OnInit, OnDestroy {
    @ViewChild('imageInput') imageInput?: ElementRef<HTMLInputElement>;

    private _collectionsService = inject(CollectionsService);
    private _peopleService = inject(PeopleService);
    private _dialog = inject(MatDialog);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    private _minScoreChange$ = new Subject<number>();
    private _destroy$ = new Subject<void>();

    collectionsData = signal<Collection[]>([]);
    expandedCollection: Collection | null = null;
    exporting = signal(false);
    filterText = '';
    imageSearchExpanded = false;
    loading = signal(true);
    minScore = 0.8;
    searchMode: 'fast' | 'accurate' = 'fast';
    selectedImagePreview: string | null = null;
    selectedPeople: Person[] = [];
    scopeFilter: CollectionsScopeFilter = 'onboarding';
    onboardingCollectionCodes = signal<Set<string>>(new Set());

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

    get showTypeBadges(): boolean {
        return this.scopeFilter === 'all';
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

    createCollection(people: Person[] = []): void {
        const dialogRef = this._dialog.open(CollectionDialogComponent, {
            width: '560px',
            maxWidth: '94vw',
            panelClass: COLLECTION_DIALOG_PANEL_CLASS,
            data: { mode: 'create' } as CollectionDialogData,
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (!result || result.action !== 'create') return;

            this.loading.set(true);
            this._collectionsService.createCollection(result.collection).subscribe({
                next: (response) => {
                    const created = response?.data;
                    const shouldMovePeople =
                        people.length > 0 && this.expandedCollection && created?._id && created?.code;

                    if (!shouldMovePeople) {
                        this._fetchRecords();
                        return;
                    }

                    const peopleIds = people.map((person) => person._id);
                    this._collectionsService
                        .movePeopleToCollection(
                            peopleIds,
                            { _id: this.expandedCollection!._id, code: this.expandedCollection!.code },
                            { _id: created._id, code: created.code }
                        )
                        .subscribe({
                            next: () => this._fetchRecords(),
                            error: () => this._showError('smartEnrollCollections.moveError'),
                            complete: () => this.loading.set(false),
                        });
                },
                error: () => {
                    this._showError('smartEnrollCollections.createError');
                    this.loading.set(false);
                },
            });
        });
    }

    deleteCollection(collection: Collection): void {
        this._confirmDelete({
            titleKey: 'smartEnrollCollections.deleteTitle',
            messageKey: 'smartEnrollCollections.deleteMessage',
            warningKey: 'smartEnrollCollections.deleteWarning',
            confirmKey: 'smartEnrollCollections.deleteConfirm',
            subtitle: collection.name,
            onConfirm: () => {
                this.loading.set(true);
                this._collectionsService.deleteCollection(collection._id).subscribe({
                    next: () => this._fetchRecords(),
                    error: () => this._showError('smartEnrollCollections.deleteError'),
                    complete: () => this.loading.set(false),
                });
            },
        });
    }

    deletePerson(person: Person): void {
        this._confirmDelete({
            titleKey: 'smartEnrollPeople.deleteTitle',
            messageKey: 'smartEnrollPeople.deleteMessage',
            warningKey: 'smartEnrollPeople.deleteWarning',
            confirmKey: 'smartEnrollPeople.deleteConfirm',
            subtitle: person.name,
            onConfirm: () => {
                this.loading.set(true);
                this._peopleService.deletePerson(person._id).subscribe({
                    next: () => this._fetchRecords(),
                    error: () => this._showError('smartEnrollPeople.deleteError'),
                    complete: () => this.loading.set(false),
                });
            },
        });
    }

    editCollection(collection: Collection): void {
        const dialogRef = this._dialog.open(CollectionDialogComponent, {
            width: '560px',
            maxWidth: '94vw',
            panelClass: COLLECTION_DIALOG_PANEL_CLASS,
            data: { collection, mode: 'edit' } as CollectionDialogData,
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (!result || result.action !== 'edit') return;
            this.loading.set(true);
            this._collectionsService.updateCollection(result.collection).subscribe({
                next: () => this._fetchRecords(),
                error: () => this._showError('smartEnrollCollections.updateError'),
                complete: () => this.loading.set(false),
            });
        });
    }

    editPerson(person: Person): void {
        const dialogRef = this._dialog.open(EditPersonDialogComponent, {
            width: '640px',
            maxWidth: '94vw',
            panelClass: EDIT_PERSON_DIALOG_PANEL_CLASS,
            data: {
                mode: 'edit',
                person,
                contextCollection: this.expandedCollection ?? undefined,
            } as EditPersonDialogData,
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
        this._exportCollections();
    }

    movePeopleToCollection(collection: Collection): void {
        if (!collection || !this.selectedPeople.length || !this.expandedCollection) return;
        if (this.expandedCollection._id === collection._id) {
            this._showError('smartEnrollCollections.moveSameCollection');
            return;
        }

        this.loading.set(true);
        const peopleIds = this.selectedPeople.map((p) => p._id);
        this._collectionsService
            .movePeopleToCollection(
                peopleIds,
                { _id: this.expandedCollection._id, code: this.expandedCollection.code },
                { _id: collection._id, code: collection.code }
            )
            .subscribe({
                next: () => this._fetchRecords(),
                error: () => this._showError('smartEnrollCollections.moveError'),
                complete: () => this.loading.set(false),
            });
    }

    onCollectionSelectionChange(event: { collection: Collection | null; selectedPeople: Person[] }): void {
        this.expandedCollection = event.collection;
        this.selectedPeople = event.selectedPeople || [];
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

        if (this.scopeFilter === 'all') {
            forkJoin({
                all: this._collectionsService.getAllCollections(),
                onboarding: this._collectionsService.getCollectionByProjectType(this.projectType),
            }).subscribe({
                next: ({ all, onboarding }) => {
                    const onboardingCodes = getOnboardingCollectionCodes(onboarding.data || []);
                    this.onboardingCollectionCodes.set(onboardingCodes);
                    const data = classifyCollections(all.data || [], onboardingCodes).map((collection) =>
                        this._mapCollectionRow(collection)
                    );
                    this.collectionsData.set(data);
                    this.loading.set(false);
                    this._cdr.markForCheck();
                },
                error: () => this._handleFetchError(),
            });
            return;
        }

        const params: Record<string, unknown> = this.selectedImagePreview
            ? { image: this.selectedImagePreview, searchMode: this.searchMode, minScore: this.minScore }
            : {};

        this._collectionsService.getCollectionByProjectType(this.projectType, params).subscribe({
            next: (response) => {
                const onboardingCodes = getOnboardingCollectionCodes(response.data || []);
                this.onboardingCollectionCodes.set(onboardingCodes);
                const data = (response.data || []).map((collection) => this._mapCollectionRow(collection));
                this.collectionsData.set(data);
                this.loading.set(false);
                this._cdr.markForCheck();
            },
            error: () => this._handleFetchError(),
        });
    }

    private _mapCollectionRow(collection: Collection): Collection {
        return {
            ...collection,
            expanded: false,
            loading: false,
            clearPeopleSelections$: new Subject<void>(),
        };
    }

    private _handleFetchError(): void {
        this._showError('smartEnrollCollections.getError');
        this.loading.set(false);
        this._cdr.markForCheck();
    }

    private _confirmDelete(options: {
        confirmKey: string;
        messageKey: string;
        onConfirm: () => void;
        subtitle?: string;
        titleKey: string;
        warningKey: string;
    }): void {
        const dialogRef = this._dialog.open(BiometricsConfirmDialogComponent, {
            panelClass: BIOMETRICS_CONFIRM_DIALOG_PANEL_CLASS,
            width: '480px',
            data: {
                title: this._transloco.translate(options.titleKey),
                subtitle: options.subtitle,
                message: this._transloco.translate(options.messageKey),
                warning: this._transloco.translate(options.warningKey),
                confirmLabel: this._transloco.translate(options.confirmKey),
            } as ConfirmDialogData,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result?.action === 'delete') options.onConfirm();
        });
    }

    private _showError(key: string): void {
        this._snackBar.open(this._transloco.translate(key), this._transloco.translate('close'), {
            duration: 3000,
        });
    }

    private async _exportCollections(): Promise<void> {
        try {
            const rows: Record<string, string>[] = [];
            const collections = this.collectionsData();

            for (const collection of collections) {
                rows.push({
                    type: 'COLLECTION',
                    name: collection.name,
                    code: collection.code,
                    description: collection.description || '',
                });

                let people = collection.people;
                if (!people) {
                    try {
                        const res = await this._peopleService
                            .getPeople({ in_collections: [collection.code] })
                            .toPromise();
                        people = res?.data || [];
                    } catch {
                        people = [];
                    }
                }

                for (const person of people || []) {
                    rows.push({
                        type: 'PERSON',
                        name: person.name,
                        code: person._id,
                        description: person.nationality || '',
                    });
                }
            }

            const worksheet = XLSX.utils.json_to_sheet(rows);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const blob = new Blob([buffer], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `verifik_collections_${DateTime.now().toFormat('yyyy-MM-dd')}.xlsx`;
            a.click();
            URL.revokeObjectURL(url);
        } finally {
            this.exporting.set(false);
            this._cdr.markForCheck();
        }
    }
}
