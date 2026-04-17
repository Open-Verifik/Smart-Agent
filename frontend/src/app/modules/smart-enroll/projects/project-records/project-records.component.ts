import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TranslocoModule } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { pickEnrollmentFaceMedia } from '../app-registration-record.utils';
import { SmartEnrollProjectsService } from '../smart-enroll-projects.service';
import type {
    AppRegistrationListFilters,
    AppRegistrationRow,
    AppRegistrationStatus,
} from '../smart-enroll-projects.types';

type DatePreset = 'all' | 'today' | 'thisWeek' | 'lastWeek' | 'thisMonth' | 'custom';

const STATUS_OPTIONS: Array<AppRegistrationStatus | 'all'> = [
    'all',
    'STARTED',
    'ONGOING',
    'COMPLETED',
    'COMPLETED_WITHOUT_KYC',
    'NEEDS_MANUAL_VERIFICATION',
    'FAILED',
    'EXPIRED',
];

const DATE_PRESETS: DatePreset[] = ['all', 'today', 'thisWeek', 'lastWeek', 'thisMonth', 'custom'];

@Component({
    selector: 'project-records',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        TranslocoModule,
    ],
    templateUrl: './project-records.component.html',
})
export class ProjectRecordsComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _sanitizer = inject(DomSanitizer);
    private _searchDebounce: ReturnType<typeof setTimeout> | null = null;

    readonly statusOptions = STATUS_OPTIONS;
    readonly datePresets = DATE_PRESETS;

    displayedColumns = ['photo', 'status', 'email', 'phone', 'createdAt'];
    dataSource: AppRegistrationRow[] = [];
    loading = signal(true);
    errorKey = signal<string | null>(null);
    projectId = '';
    projectName = signal<string | null>(null);
    total = signal(0);
    pageSize = 10;
    pageIndex = 0;

    searchInput = '';
    statusFilter = signal<AppRegistrationStatus | 'all'>('all');
    datePreset = signal<DatePreset>('all');
    rangeStart = new FormControl<DateTime | null>(null);
    rangeEnd = new FormControl<DateTime | null>(null);
    sortDirection = signal<'asc' | 'desc'>('desc');

    activeFilterCount = computed(() => {
        let count = 0;
        if (this.searchInput.trim()) count += 1;
        if (this.statusFilter() !== 'all') count += 1;
        if (this.datePreset() !== 'all') count += 1;
        return count;
    });

    ngOnInit(): void {
        this.projectId = this._route.snapshot.paramMap.get('projectId') ?? '';
        if (!this.projectId) {
            this._router.navigate(['/smart-enroll/projects']);
            return;
        }
        this._loadProjectName();
        this.fetchRecords();
    }

    ngOnDestroy(): void {
        if (this._searchDebounce) clearTimeout(this._searchDebounce);
    }

    onSearchInput(): void {
        if (this._searchDebounce) clearTimeout(this._searchDebounce);
        this._searchDebounce = setTimeout(() => {
            this._searchDebounce = null;
            this.pageIndex = 0;
            this.fetchRecords();
        }, 400);
    }

    onStatusChange(value: AppRegistrationStatus | 'all'): void {
        this.statusFilter.set(value);
        this.pageIndex = 0;
        this.fetchRecords();
    }

    onDatePresetChange(value: DatePreset): void {
        this.datePreset.set(value);
        if (value !== 'custom') {
            this.rangeStart.setValue(null, { emitEvent: false });
            this.rangeEnd.setValue(null, { emitEvent: false });
        }
        this.pageIndex = 0;
        this.fetchRecords();
    }

    onCustomRangeChange(): void {
        if (!this.rangeStart.value && !this.rangeEnd.value) return;
        this.datePreset.set('custom');
        this.pageIndex = 0;
        this.fetchRecords();
    }

    onSortChange(sort: Sort): void {
        this.sortDirection.set(sort.direction === 'asc' ? 'asc' : 'desc');
        this.pageIndex = 0;
        this.fetchRecords();
    }

    onPage(ev: PageEvent): void {
        this.pageIndex = ev.pageIndex;
        this.pageSize = ev.pageSize;
        this.fetchRecords();
    }

    clearFilters(): void {
        this.searchInput = '';
        this.statusFilter.set('all');
        this.datePreset.set('all');
        this.rangeStart.setValue(null, { emitEvent: false });
        this.rangeEnd.setValue(null, { emitEvent: false });
        this.sortDirection.set('desc');
        this.pageIndex = 0;
        this.fetchRecords();
    }

    goToProject(): void {
        this._router.navigate(['/smart-enroll/projects', this.projectId]);
    }

    goToList(): void {
        this._router.navigate(['/smart-enroll/projects']);
    }

    formatDate(date?: string): string {
        if (!date) return '—';
        return DateTime.fromISO(date).toFormat('MMM dd, yyyy HH:mm');
    }

    displayEmail(row: AppRegistrationRow): string {
        return row.emailValidation?.email ?? '—';
    }

    displayPhone(row: AppRegistrationRow): string {
        const p = row.phoneValidation;
        if (!p?.phone) return '—';
        return p.countryCode ? `${p.countryCode} ${p.phone}` : p.phone;
    }

    rowAvatarSrc(row: AppRegistrationRow): SafeUrl | null {
        const f = pickEnrollmentFaceMedia(row);
        if (!f) return null;
        if (f.base64) {
            const cleaned = (f.base64 || '').replace(/^data:.*;base64,/, '');
            return this._sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${cleaned}`);
        }
        if (f.url) return this._sanitizer.bypassSecurityTrustUrl(f.url);
        return null;
    }

    private _loadProjectName(): void {
        this._projectsService.getProject(this.projectId).subscribe({
            next: (p) => this.projectName.set(p?.name ?? null),
            error: () => this.projectName.set(null),
        });
    }

    private fetchRecords(): void {
        this.loading.set(true);
        this.errorKey.set(null);

        const filters: AppRegistrationListFilters = {
            search: this.searchInput.trim() || undefined,
            status: this.statusFilter(),
            sort: this.sortDirection() === 'asc' ? 'createdAt' : '-createdAt',
            ...this._resolveDateRange(),
        };

        this._projectsService
            .listAppRegistrations(this.projectId, this.pageIndex + 1, this.pageSize, filters)
            .subscribe({
                next: (res) => {
                    this.dataSource = res.data ?? [];
                    this.total.set(res.total ?? 0);
                    this.loading.set(false);
                },
                error: () => {
                    this.errorKey.set('smartEnrollProjects.recordsLoadError');
                    this.loading.set(false);
                },
            });
    }

    private _resolveDateRange(): { createdFrom?: string; createdTo?: string } {
        const preset = this.datePreset();
        if (preset === 'all') return {};

        const now = DateTime.local();
        let from: DateTime | null = null;
        let to: DateTime | null = null;

        switch (preset) {
            case 'today':
                from = now.startOf('day');
                to = now.endOf('day');
                break;
            case 'thisWeek':
                from = now.startOf('week');
                to = now.endOf('week');
                break;
            case 'lastWeek': {
                const lastWeek = now.minus({ weeks: 1 });
                from = lastWeek.startOf('week');
                to = lastWeek.endOf('week');
                break;
            }
            case 'thisMonth':
                from = now.startOf('month');
                to = now.endOf('month');
                break;
            case 'custom': {
                const start = this.rangeStart.value;
                const end = this.rangeEnd.value;
                if (start) from = start.startOf('day');
                if (end) to = end.endOf('day');
                break;
            }
        }

        const range: { createdFrom?: string; createdTo?: string } = {};
        if (from?.isValid) range.createdFrom = from.toUTC().toISO() ?? undefined;
        if (to?.isValid) range.createdTo = to.toUTC().toISO() ?? undefined;
        return range;
    }
}
