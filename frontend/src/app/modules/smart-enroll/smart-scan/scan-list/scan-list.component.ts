import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation,
    inject,
    signal,
    effect,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { SmartScanService } from '../smart-scan.service';
import type { DocumentValidation } from '../smart-scan.types';

interface ScanFilters {
    documentType: string;
    documentNumber: string;
    country: string;
    status: string;
    documentCategory: string;
    nationality: string;
}

const EMPTY_FILTERS: ScanFilters = {
    documentType: '',
    documentNumber: '',
    country: '',
    status: '',
    documentCategory: '',
    nationality: '',
};

@Component({
    selector: 'scan-list',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatButtonToggleModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        TranslocoModule,
    ],
    templateUrl: './scan-list.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ScanListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns = ['image', 'documentType', 'documentNumber', 'name', 'status', 'method', 'country', 'date'];
    dataSource = new MatTableDataSource<DocumentValidation>([]);

    private _scanService = inject(SmartScanService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);

    viewMode = signal<'cards' | 'table'>('cards');
    scans = this._scanService.scans;
    total = this._scanService.total;
    loading = this._scanService.loading;
    pageSize = this._scanService.pageSize;
    pageIndex = this._scanService.pageIndex;

    quickSearch = '';
    showFilters = false;
    activeFilters: ScanFilters = { ...EMPTY_FILTERS };

    readonly STATUS_OPTIONS = [
        'ASSESSING', 'ACTIVE', 'FAILED',
        'NEEDS_MANUAL_VERIFICATION', 'NOT_FOUND',
        'EXPIRED', 'ACTIVE_BUT_UNVERIFIED',
    ];

    constructor() {
        effect(() => {
            this.dataSource.data = this.filteredScans;
        });
    }

    ngOnInit(): void {
        this._route.queryParams.subscribe((params) => {
            const view = params['view'];
            const targetView = view === 'table' ? 'table' : 'cards';
            if (this.viewMode() !== targetView) {
                this.viewMode.set(targetView);
            }
            this.loadData();
        });
    }

    get filteredScans(): DocumentValidation[] {
        const q = this.quickSearch.toLowerCase().trim();
        if (!q) return this.scans();
        return this.scans().filter((s) => {
            const ocr = s.OCRExtraction as Record<string, unknown> | undefined;
            return (
                s.documentType?.toLowerCase().includes(q) ||
                s.documentNumber?.toLowerCase().includes(q) ||
                String(ocr?.['firstName'] ?? '').toLowerCase().includes(q) ||
                String(ocr?.['lastName'] ?? '').toLowerCase().includes(q) ||
                String(ocr?.['fullName'] ?? '').toLowerCase().includes(q)
            );
        });
    }

    get activeFilterCount(): number {
        return Object.values(this.activeFilters).filter((v) => v.length > 0).length;
    }

    setViewMode(mode: 'cards' | 'table') {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { view: mode },
            queryParamsHandling: 'merge',
        });
    }

    loadData() {
        this._scanService.pageIndex.set(this.pageIndex());
        this._scanService.pageSize.set(this.pageSize());

        const filters: Record<string, string> = {};
        for (const [key, val] of Object.entries(this.activeFilters)) {
            if (val) filters[key] = val;
        }

        this._scanService.getScans(this.pageIndex() + 1, this.pageSize(), filters).subscribe();
    }

    applyFilters() {
        this.pageIndex.set(0);
        this.loadData();
    }

    resetFilters() {
        this.activeFilters = { ...EMPTY_FILTERS };
        this.pageIndex.set(0);
        this.loadData();
    }

    onPaginatorEvent(event: PageEvent) {
        this.pageIndex.set(event.pageIndex);
        this.pageSize.set(event.pageSize);
        this.loadData();
    }

    goToNewScan() {
        this._router.navigate(['/smart-enroll/smart-scan/new']);
    }

    goToDetail(id: string) {
        this._router.navigate(['/smart-enroll/smart-scan', id]);
    }

    getScanName(scan: DocumentValidation): string {
        const ocr = scan.OCRExtraction as Record<string, unknown> | undefined;
        if (!ocr) return '';
        const first = String(ocr['firstName'] ?? '');
        const last = String(ocr['lastName'] ?? '');
        if (first || last) return `${first} ${last}`.trim();
        return String(ocr['fullName'] ?? '');
    }

    formatDate(date: string | undefined): string {
        if (!date) return '-';
        return DateTime.fromISO(date).toFormat('MMM dd, yyyy HH:mm');
    }

    getStatusColor(status: string): string {
        if (status === 'ACTIVE' || status === 'ACTIVE_BUT_UNVERIFIED')
            return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
        if (status === 'ASSESSING') return 'text-amber-600 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400';
        return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
    }

    getStatusLabel(status: string): string {
        if (status === 'ACTIVE' || status === 'ACTIVE_BUT_UNVERIFIED') return 'smartScan.statusActive';
        if (status === 'ASSESSING') return 'smartScan.statusAssessing';
        return 'smartScan.statusFailed';
    }

    getMethodLabel(method: string): string {
        if (method === 'SCAN_AGENT') return 'smartScan.methodScanAgent';
        if (method === 'SCAN_STUDIO') return 'smartScan.methodScanStudio';
        if (method === 'SCAN_PROMPT') return 'smartScan.methodScanPrompt';
        return method;
    }
}
