import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    AfterViewInit,
    OnDestroy,
    Output,
    SimpleChanges,
    ViewChild,
    inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TranslocoModule } from '@jsverse/transloco';
import { Observable, Subject, takeUntil } from 'rxjs';
import type { Person } from '../biometrics/people.types';

@Component({
    selector: 'app-biometrics-people-table',
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        TranslocoModule,
    ],
    templateUrl: './biometrics-people-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BiometricsPeopleTableComponent implements AfterViewInit, OnChanges, OnDestroy {
    @Input() clearSelections$?: Observable<void>;
    @Input() disableActions = false;
    @Input() filterText = '';
    @Input() hideActions = false;
    @Input() hideCheckboxes = false;
    @Input() loading = false;
    @Input() people: Person[] = [];
    @Input() preSelectedPeople: Person[] = [];

    @Output() deletePerson = new EventEmitter<Person>();
    @Output() editPerson = new EventEmitter<Person>();
    @Output() selectionChange = new EventEmitter<Person[]>();

    @ViewChild(MatPaginator) paginator?: MatPaginator;
    @ViewChild(MatSort) sort?: MatSort;

    private _cdr = inject(ChangeDetectorRef);
    private _unsubscriber$ = new Subject<void>();

    dataSource = new MatTableDataSource<Person>([]);
    displayedColumns: string[] = [];
    selection = new SelectionModel<Person>(true, []);

    constructor() {
        this.dataSource.filterPredicate = (person, filter) => {
            const term = filter.trim().toLowerCase();
            if (!term) return true;

            return (
                person.name?.toLowerCase().includes(term) ||
                person._id?.toLowerCase().includes(term) ||
                person.nationality?.toLowerCase().includes(term)
            );
        };
    }

    ngAfterViewInit(): void {
        this._syncColumns();
        this._syncTableControls();
        this._applyPreselection();

        this.clearSelections$?.pipe(takeUntil(this._unsubscriber$)).subscribe(() => {
            this.selection.clear();
            this.selectionChange.emit([]);
            this._cdr.markForCheck();
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['people']) {
            this.dataSource.data = this.people || [];
            this._syncTableControls();
            this._applyPreselection();
        }
        if (changes['filterText']) {
            this.dataSource.filter = this.filterText || '';
        }
        if (changes['hideCheckboxes'] || changes['hideActions']) {
            this._syncColumns();
        }
        if (changes['preSelectedPeople']) {
            this._applyPreselection();
        }
        this._cdr.markForCheck();
    }

    ngOnDestroy(): void {
        this._unsubscriber$.next();
        this._unsubscriber$.complete();
    }

    getRowThumbnail(person: Person): string {
        const thumb = person.thumbnails?.[0]?.thumbnail;
        if (!thumb) return 'assets/images/avatars/default.jpg';
        const cleaned = thumb.replace(/^data:.*;base64,/, '');
        return `data:image/png;base64,${cleaned}`;
    }

    isAllSelected(): boolean {
        return this.selection.selected.length === this.dataSource.data.length && this.dataSource.data.length > 0;
    }

    masterToggle(): void {
        if (this.isAllSelected()) {
            this.selection.clear();
        } else {
            this.dataSource.data.forEach((row) => this.selection.select(row));
        }
        this.selectionChange.emit(this.selection.selected);
    }

    toggleRow(row: Person): void {
        this.selection.toggle(row);
        this.selectionChange.emit(this.selection.selected);
    }

    editItem(person: Person): void {
        this.editPerson.emit(person);
    }

    deleteItem(person: Person): void {
        this.deletePerson.emit(person);
    }

    private _syncColumns(): void {
        const cols: string[] = [];
        if (!this.hideCheckboxes) cols.push('selected');
        cols.push('image', 'name', 'dateOfBirth', 'nationality', 'updatedAt');
        if (!this.hideActions) cols.push('actions');
        this.displayedColumns = cols;
    }

    private _syncTableControls(): void {
        if (this.paginator) this.dataSource.paginator = this.paginator;
        if (this.sort) this.dataSource.sort = this.sort;
    }

    private _applyPreselection(): void {
        if (!this.preSelectedPeople?.length) return;

        this.selection.clear();
        this.preSelectedPeople.forEach((person) => {
            const match = this.dataSource.data.find((row) => row._id === person._id);
            if (match) this.selection.select(match);
        });
    }
}
