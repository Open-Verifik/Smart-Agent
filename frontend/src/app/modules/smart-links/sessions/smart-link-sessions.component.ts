import { SelectionModel } from '@angular/cdk/collections';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    computed,
    inject,
    signal,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { EMPTY, expand, reduce } from 'rxjs';

import { SmartLinkSessionDeleteDialogComponent } from '../dialogs/smart-link-session-delete-dialog.component';
import { SmartLinkSessionEditDialogComponent } from '../dialogs/smart-link-session-edit-dialog.component';
import { SmartLinkSessionResendDialogComponent } from '../dialogs/smart-link-session-resend-dialog.component';
import {
    buildSessionsCsv,
    formatSessionDate,
    resolveSessionTargetLabel,
    resolveSessionTargetSubLabel,
    sessionStatePillClass,
} from '../smart-link-session.util';
import { SmartLinksService } from '../smart-links.service';
import type {
    SmartLinkSessionFilters,
    SmartLinkSessionRecord,
    SmartLinkSessionState,
} from '../smart-links.types';

type DatePreset = 'all' | 'today' | 'thisWeek' | 'lastWeek' | 'thisMonth' | 'custom';
type DocFilter = 'all' | 'true' | 'false';

const STATE_OPTIONS: Array<SmartLinkSessionState | 'all'> = [
    'all',
    'CREATED',
    'OPENED',
    'ROUTED',
    'IN_PROGRESS',
    'COMPLETED',
    'FAILED',
    'EXPIRED',
    'REVOKED',
];

const CHANNEL_OPTIONS = ['all', 'portal', 'api', 'mcp', 'x402', 'csv_campaign', 'public_slug'];
const DATE_PRESETS: DatePreset[] = ['all', 'today', 'thisWeek', 'lastWeek', 'thisMonth', 'custom'];

@Component({
    selector: 'smart-link-sessions',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ClipboardModule,
        RouterModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        TranslocoModule,
    ],
    templateUrl: './smart-link-sessions.component.html',
    styleUrls: ['./smart-link-sessions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartLinkSessionsComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _service = inject(SmartLinksService);
    private _dialog = inject(MatDialog);
    private _clipboard = inject(Clipboard);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);
    private _searchDebounce: ReturnType<typeof setTimeout> | null = null;

    readonly stateOptions = STATE_OPTIONS;
    readonly channelOptions = CHANNEL_OPTIONS;
    readonly datePresets = DATE_PRESETS;
    readonly pageSizeOptions = [10, 25, 50];

    displayedColumns = [
        'select',
        'shortCode',
        'identity',
        'requirement',
        'state',
        'channel',
        'uses',
        'createdAt',
        'actions',
    ];
    dataSource: SmartLinkSessionRecord[] = [];
    selection = new SelectionModel<SmartLinkSessionRecord>(true, []);

    loading = signal(true);
    bulkBusy = signal(false);
    exportingCsv = signal(false);
    errorMessage = signal<string | null>(null);
    projectId = '';
    projectName = signal<string | null>(null);
    total = signal(0);
    pageSize = 25;
    pageIndex = 0;

    searchInput = '';
    stateFilter = signal<string>('all');
    docFilter = signal<DocFilter>('all');
    channelFilter = signal<string>('all');
    datePreset = signal<DatePreset>('all');
    rangeStart = new FormControl<DateTime | null>(null);
    rangeEnd = new FormControl<DateTime | null>(null);
    sortActive = signal<'createdAt' | 'expiresAt' | 'state'>('createdAt');
    sortDirection = signal<'asc' | 'desc'>('desc');

    activeFilterCount = computed(() => {
        let count = 0;
        if (this.searchInput.trim()) count += 1;
        if (this.stateFilter() !== 'all') count += 1;
        if (this.docFilter() !== 'all') count += 1;
        if (this.channelFilter() !== 'all') count += 1;
        if (this.datePreset() !== 'all') count += 1;
        return count;
    });

    ngOnInit(): void {
        this.projectId = this._route.snapshot.paramMap.get('projectId') ?? '';
        if (!this.projectId) {
            void this._router.navigate(['/smart-links/projects']);
            return;
        }

        const initialState = this._route.snapshot.queryParamMap.get('state');
        if (initialState) {
            this.stateFilter.set(initialState);
        }
        const initialSearch = this._route.snapshot.queryParamMap.get('search');
        if (initialSearch) {
            this.searchInput = initialSearch;
        }

        this._service.getSmartLinkProject(this.projectId).subscribe({
            next: (proj) => {
                this.projectName.set(proj?.name ?? null);
                this._cdr.markForCheck();
            },
            error: () => {
                this.projectName.set(null);
                this._cdr.markForCheck();
            },
        });

        this.fetchSessions();
    }

    ngOnDestroy(): void {
        if (this._searchDebounce) clearTimeout(this._searchDebounce);
    }

    onSearchInput(): void {
        if (this._searchDebounce) clearTimeout(this._searchDebounce);
        this._searchDebounce = setTimeout(() => {
            this._searchDebounce = null;
            this.pageIndex = 0;
            this.fetchSessions();
        }, 350);
    }

    onStateChange(value: string): void {
        this.stateFilter.set(value || 'all');
        this.pageIndex = 0;
        this.fetchSessions();
    }

    onDocFilterChange(value: DocFilter): void {
        this.docFilter.set(value || 'all');
        this.pageIndex = 0;
        this.fetchSessions();
    }

    onChannelChange(value: string): void {
        this.channelFilter.set(value || 'all');
        this.pageIndex = 0;
        this.fetchSessions();
    }

    onDatePresetChange(value: DatePreset): void {
        this.datePreset.set(value);
        if (value !== 'custom') {
            this.rangeStart.setValue(null, { emitEvent: false });
            this.rangeEnd.setValue(null, { emitEvent: false });
        }
        this.pageIndex = 0;
        this.fetchSessions();
    }

    onCustomRangeChange(): void {
        if (!this.rangeStart.value && !this.rangeEnd.value) return;
        this.datePreset.set('custom');
        this.pageIndex = 0;
        this.fetchSessions();
    }

    onSortChange(sort: Sort): void {
        const active = sort.active === 'expiresAt' || sort.active === 'state' ? sort.active : 'createdAt';
        this.sortActive.set(active);
        this.sortDirection.set(sort.direction === 'asc' ? 'asc' : 'desc');
        this.pageIndex = 0;
        this.fetchSessions();
    }

    onPage(ev: PageEvent): void {
        this.pageIndex = ev.pageIndex;
        this.pageSize = ev.pageSize;
        this.fetchSessions();
    }

    onPageSizeChange(size: number): void {
        if (!size || size === this.pageSize) return;
        this.pageSize = size;
        this.pageIndex = 0;
        this.fetchSessions();
    }

    clearFilters(): void {
        this.searchInput = '';
        this.stateFilter.set('all');
        this.docFilter.set('all');
        this.channelFilter.set('all');
        this.datePreset.set('all');
        this.rangeStart.setValue(null, { emitEvent: false });
        this.rangeEnd.setValue(null, { emitEvent: false });
        this.sortActive.set('createdAt');
        this.sortDirection.set('desc');
        this.pageIndex = 0;
        this.fetchSessions();
    }

    isAllSelected(): boolean {
        const numSelected = this.selection.selected.length;
        return numSelected > 0 && numSelected === this.dataSource.length;
    }

    toggleAllRows(): void {
        if (this.isAllSelected()) {
            this.selection.clear();
        } else {
            this.selection.select(...this.dataSource);
        }
    }

    deletableSelected(): SmartLinkSessionRecord[] {
        return this.selection.selected.filter((s) => s.state !== 'COMPLETED');
    }

    revokableSelected(): SmartLinkSessionRecord[] {
        return this.selection.selected.filter(
            (s) => s.state !== 'COMPLETED' && s.state !== 'REVOKED' && s.state !== 'EXPIRED'
        );
    }

    targetLabel(row: SmartLinkSessionRecord): string {
        return resolveSessionTargetLabel(
            row,
            this._transloco.translate('smartLinks.detail.openLinkLabel') || 'Open link'
        );
    }

    targetSubLabel(row: SmartLinkSessionRecord): string {
        return resolveSessionTargetSubLabel(row);
    }

    stateClass(state?: SmartLinkSessionState | string): string {
        return sessionStatePillClass(state);
    }

    formatDate(value?: string): string {
        return formatSessionDate(value);
    }

    openRow(row: SmartLinkSessionRecord): void {
        void this._router.navigate(['/smart-links/projects', this.projectId, 'sessions', row._id]);
    }

    copyShortCode(row: SmartLinkSessionRecord, event: Event): void {
        event.stopPropagation();
        this._clipboard.copy(row.shortCode);
        this._snack.open(this._transloco.translate('smartLinks.actions.copied'), undefined, { duration: 1500 });
    }

    openEditDialog(row: SmartLinkSessionRecord, event?: Event): void {
        event?.stopPropagation();
        const ref = this._dialog.open(SmartLinkSessionEditDialogComponent, {
            width: '580px',
            maxWidth: '95vw',
            data: { session: row },
        });
        ref.afterClosed().subscribe((updated) => {
            if (updated) {
                this._snack.open(
                    this._transloco.translate('smartLinks.dialogs.updatedToast'),
                    undefined,
                    { duration: 2200 }
                );
                this.fetchSessions();
            }
        });
    }

    openResendDialog(row: SmartLinkSessionRecord, event?: Event): void {
        event?.stopPropagation();
        const ref = this._dialog.open(SmartLinkSessionResendDialogComponent, {
            width: '540px',
            maxWidth: '95vw',
            data: { session: row },
        });
        ref.afterClosed().subscribe((res) => {
            if (res) {
                this.fetchSessions();
            }
        });
    }

    revokeRow(row: SmartLinkSessionRecord, event?: Event): void {
        event?.stopPropagation();
        this._service.revokeSession(row._id).subscribe({
            next: () => {
                this._snack.open(
                    this._transloco.translate('smartLinks.dialogs.revokedToast'),
                    undefined,
                    { duration: 2200 }
                );
                this.fetchSessions();
            },
            error: (err) => {
                this._snack.open(err?.error?.message || 'Unable to revoke link', undefined, { duration: 3000 });
            },
        });
    }

    openDeleteDialog(row: SmartLinkSessionRecord, event?: Event): void {
        event?.stopPropagation();
        if (row.state === 'COMPLETED') return;
        const ref = this._dialog.open(SmartLinkSessionDeleteDialogComponent, {
            width: '460px',
            maxWidth: '95vw',
            data: { mode: 'single', session: row },
        });
        ref.afterClosed().subscribe((res) => {
            if (res?.deleted) {
                this._snack.open(
                    this._transloco.translate('smartLinks.dialogs.deletedToast'),
                    undefined,
                    { duration: 2200 }
                );
                this.fetchSessions();
            }
        });
    }

    openBulkDeleteDialog(): void {
        const deletable = this.deletableSelected();
        if (!deletable.length) return;
        const skippedCompletedCount = this.selection.selected.length - deletable.length;
        const ref = this._dialog.open(SmartLinkSessionDeleteDialogComponent, {
            width: '480px',
            maxWidth: '95vw',
            data: {
                mode: 'bulk',
                projectId: this.projectId,
                sessionIds: deletable.map((s) => s._id),
                skippedCompletedCount,
            },
        });
        ref.afterClosed().subscribe((res) => {
            if (res?.deleted) {
                this.selection.clear();
                this._snack.open(
                    this._transloco.translate('smartLinks.dialogs.bulkDeletedToast', {
                        count: res.deletedCount || deletable.length,
                    }),
                    undefined,
                    { duration: 2500 }
                );
                this.fetchSessions();
            }
        });
    }

    bulkRevoke(): void {
        const revokable = this.revokableSelected();
        if (!revokable.length || this.bulkBusy()) return;
        this.bulkBusy.set(true);
        this._service
            .bulkRevokeSessions(
                this.projectId,
                revokable.map((s) => s._id)
            )
            .subscribe({
                next: (res) => {
                    this.bulkBusy.set(false);
                    this.selection.clear();
                    this._snack.open(
                        this._transloco.translate('smartLinks.dialogs.bulkRevokedToast', {
                            count: res.revokedCount,
                        }),
                        undefined,
                        { duration: 2500 }
                    );
                    this.fetchSessions();
                },
                error: () => {
                    this.bulkBusy.set(false);
                    this._cdr.markForCheck();
                },
            });
    }

    goToProject(): void {
        void this._router.navigate(['/smart-links/projects', this.projectId]);
    }

    goToList(): void {
        void this._router.navigate(['/smart-links/projects']);
    }

    exportCsv(): void {
        if (this.exportingCsv() || this.loading()) return;
        const openLabel = this._transloco.translate('smartLinks.detail.openLinkLabel') || 'Open link';

        if (this.pageIndex === 0 && this.total() <= this.dataSource.length) {
            this._downloadSessionsCsv(this.dataSource, openLabel);
            return;
        }

        const filters = this._currentFilters();
        let page = 1;
        this.exportingCsv.set(true);
        this._cdr.markForCheck();

        this._service
            .listSessions(this.projectId, page, 100, filters)
            .pipe(
                expand((res) => {
                    const totalPages = res.pages || 1;
                    if (page >= totalPages || page >= 20) return EMPTY;
                    page += 1;
                    return this._service.listSessions(this.projectId, page, 100, filters);
                }),
                reduce((acc: SmartLinkSessionRecord[], res) => [...acc, ...(res.docs || [])], [])
            )
            .subscribe({
                next: (rows) => {
                    this.exportingCsv.set(false);
                    this._downloadSessionsCsv(rows, openLabel);
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.exportingCsv.set(false);
                    this._downloadSessionsCsv(this.dataSource, openLabel);
                    this._cdr.markForCheck();
                },
            });
    }

    fetchSessions(): void {
        this.loading.set(true);
        this.errorMessage.set(null);
        this.selection.clear();

        const filters = this._currentFilters();

        this._service.listSessions(this.projectId, this.pageIndex + 1, this.pageSize, filters).subscribe({
            next: (res) => {
                this.dataSource = res.docs || [];
                this.total.set(res.total || 0);
                this.loading.set(false);
                this._cdr.markForCheck();
            },
            error: (err) => {
                this.errorMessage.set(err?.error?.message || 'Unable to load SmartLink sessions');
                this.loading.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    private _currentFilters(): SmartLinkSessionFilters {
        return {
            search: this.searchInput.trim() || undefined,
            state: this.stateFilter(),
            requireDocument: this.docFilter(),
            channel: this.channelFilter(),
            sort: this.sortDirection() === 'asc' ? this.sortActive() : `-${this.sortActive()}`,
            ...this._resolveDateRange(),
        };
    }

    private _downloadSessionsCsv(rows: SmartLinkSessionRecord[], openLabel: string): void {
        if (typeof document === 'undefined') return;
        const csv = buildSessionsCsv(rows, openLabel);
        const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `smartlinks-${this.projectId}-${DateTime.local().toFormat('yyyyMMdd-HHmm')}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        this._snack.open(
            this._transloco.translate('smartLinks.sessions.exportedCsvToast', { count: rows.length }),
            undefined,
            { duration: 2200 }
        );
    }

    private _resolveDateRange(): Pick<SmartLinkSessionFilters, 'createdFrom' | 'createdTo'> {
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
                if (this.rangeStart.value) from = this.rangeStart.value.startOf('day');
                if (this.rangeEnd.value) to = this.rangeEnd.value.endOf('day');
                break;
            }
        }

        const range: { createdFrom?: string; createdTo?: string } = {};
        if (from?.isValid) range.createdFrom = from.toUTC().toISO() ?? undefined;
        if (to?.isValid) range.createdTo = to.toUTC().toISO() ?? undefined;
        return range;
    }
}
