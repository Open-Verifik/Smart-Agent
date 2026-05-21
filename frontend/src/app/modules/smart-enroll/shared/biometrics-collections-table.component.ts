import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    AfterViewInit,
    Output,
    SimpleChanges,
    ViewChild,
    inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import type { Collection } from '../biometrics/collections.types';
import type { Person } from '../biometrics/people.types';
import { PeopleService } from '../biometrics/people.service';
import { BiometricsPeopleTableComponent } from './biometrics-people-table.component';
import { CollectionScopeBadgeComponent } from './collection-scope-badge.component';

@Component({
    selector: 'app-biometrics-collections-table',
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        TranslocoModule,
        BiometricsPeopleTableComponent,
        CollectionScopeBadgeComponent,
    ],
    templateUrl: './biometrics-collections-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0px' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class BiometricsCollectionsTableComponent implements AfterViewInit, OnChanges {
    @Input() collections: Collection[] = [];
    @Input() loading = false;
    @Input() filterText = '';
    @Input() disableActions = false;
    @Input() showTypeBadges = false;

    @Output() collectionSelectionChange = new EventEmitter<{ collection: Collection | null; selectedPeople: Person[] }>();
    @Output() deleteCollection = new EventEmitter<Collection>();
    @Output() deletePerson = new EventEmitter<Person>();
    @Output() editCollection = new EventEmitter<Collection>();
    @Output() editPerson = new EventEmitter<Person>();

    @ViewChild(MatPaginator) paginator?: MatPaginator;
    @ViewChild(MatSort) sort?: MatSort;

    private _cdr = inject(ChangeDetectorRef);
    private _peopleService = inject(PeopleService);
    private _snackBar = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);

    dataSource = new MatTableDataSource<Collection>([]);
    displayedColumns = ['expand', 'name', 'description', 'updatedAt', 'actions'];
    expandedElement: Collection | null = null;
    peopleFilterText = '';

    constructor() {
        this.dataSource.filterPredicate = (collection, filter) => {
            const term = filter.trim().toLowerCase();
            if (!term) return true;

            return (
                collection.name?.toLowerCase().includes(term) ||
                collection.code?.toLowerCase().includes(term) ||
                collection.description?.toLowerCase().includes(term)
            );
        };
    }

    ngAfterViewInit(): void {
        this._syncTableControls();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['collections']) {
            this.dataSource.data = this.collections || [];
            this._syncTableControls();
        }
        if (changes['filterText']) {
            this.dataSource.filter = this.filterText || '';
        }
        this._cdr.markForCheck();
    }

    private _syncTableControls(): void {
        if (this.paginator) this.dataSource.paginator = this.paginator;
        if (this.sort) this.dataSource.sort = this.sort;
    }

    clearPeopleFilters(): void {
        this.peopleFilterText = '';
    }

    onPeopleTextFilterChange(event: Event): void {
        this.peopleFilterText = (event.target as HTMLInputElement).value?.trim().toLowerCase() || '';
    }

    onPeopleSelectionChange(selectedPeople: Person[]): void {
        this.collectionSelectionChange.emit({ collection: this.expandedElement, selectedPeople });
    }

    toggleCollection(collection: Collection): void {
        if (this.disableActions) return;

        if (this.expandedElement === collection) {
            this.expandedElement = null;
            this.peopleFilterText = '';
            this.collectionSelectionChange.emit({ collection: null, selectedPeople: [] });
            return;
        }

        this.expandedElement = collection;
        collection.expanded = !collection.expanded;

        if (!collection.expanded || collection.people) return;

        collection.loading = true;

        this._peopleService.getPeople({ in_collections: [collection.code] }).subscribe({
            next: (response) => {
                collection.people =
                    response.data?.map((person) => ({
                        ...person,
                        date_of_birth: person.date_of_birth
                            ? DateTime.fromISO(person.date_of_birth).toFormat('yyyy-MM-dd')
                            : null,
                    })) || [];
                collection.loading = false;
                this._cdr.markForCheck();
            },
            error: () => {
                this._snackBar.open(
                    this._transloco.translate('smartEnrollPeople.getError'),
                    this._transloco.translate('close'),
                    { duration: 3000 }
                );
                collection.loading = false;
                this._cdr.markForCheck();
            },
        });
    }
}
