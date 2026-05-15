import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
    inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { HotTableComponent, HotTableModule } from '@handsontable/angular-wrapper';
import { Papa } from 'ngx-papaparse';
import { GridSettings } from 'handsontable/settings';
import Handsontable from 'handsontable';
import { sanitizePapaObjectRows } from 'app/core/utils/spreadsheet-sanitize.util';
import { WhitelistDndDirective } from './dnd.directive';
import { registerAllModules } from 'handsontable/registry';

registerAllModules();

export interface WhitelistRow {
    name?: string;
    email?: string;
    countryCode?: string;
    phone?: string;
    [key: string]: unknown;
}

export interface StagedWhitelistPayload {
    whiteList: WhitelistRow[];
    replaceList: boolean;
}

type HandsontableErrors = { [row: number]: { [column: string]: string } };

@Component({
    selector: 'sa-whitelist-csv-handler',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
        HotTableModule,
        WhitelistDndDirective,
    ],
    templateUrl: './whitelist-csv-handler.component.html',
    styleUrls: ['./whitelist-csv-handler.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhitelistCsvHandlerComponent implements OnInit, AfterViewInit {
    @Input() projectId = '';
    @Input() projectFlowId = '';
    @Input() action: 'add' | 'replace' = 'add';
    @Input() seedRows: WhitelistRow[] = [];

    @Output() stagedWhitelist = new EventEmitter<StagedWhitelistPayload>();
    @Output() requestReloadSeed = new EventEmitter<void>();

    @ViewChild(HotTableComponent)
    private _hotTableComponent?: HotTableComponent;

    private _cdr = inject(ChangeDetectorRef);
    private _transloco = inject(TranslocoService);
    private _papa = inject(Papa);

    hotSettings!: GridSettings;
    dataset: WhitelistRow[] = [{}];
    errors: HandsontableErrors = {};
    errorFlag = false;
    isValidating = false;
    showTable = false;

    private get _hotInstance(): Handsontable | null | undefined {
        return this._hotTableComponent?.hotInstance;
    }

    ngOnInit(): void {
        const t = (k: string) => this._transloco.translate(k);
        this.hotSettings = {
            afterValidate: () => {
                this._cdr.markForCheck();
            },
            afterChange: () => {
                this._validateDuplicates();
                this._cdr.markForCheck();
            },
            contextMenu: false,
            colWidths: [140, 180, 100, 140],
            minSpareRows: 1,
            rowHeaders: true,
            stretchH: 'all',
            licenseKey: 'non-commercial-and-evaluation',
            columns: [
                {
                    data: 'name',
                    title: t('smartAccessProjects.csv.name'),
                    validator: (val, cb) => {
                        cb(val !== null && val !== '' && val !== undefined);
                    },
                    allowInvalid: true,
                },
                {
                    data: 'email',
                    title: t('smartAccessProjects.csv.email'),
                    validator: (val, cb) => {
                        if (!val) { cb(true); return; }
                        cb(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val)));
                    },
                    allowInvalid: true,
                },
                {
                    data: 'countryCode',
                    title: t('smartAccessProjects.csv.countryCode'),
                    validator: (val, cb) => {
                        if (!val) { cb(true); return; }
                        cb(/^\+\d{1,3}$/.test(String(val)));
                    },
                    allowInvalid: true,
                },
                {
                    data: 'phone',
                    title: t('smartAccessProjects.csv.phone'),
                    allowInvalid: true,
                },
            ],
        };
    }

    ngAfterViewInit(): void {
        if (this.seedRows?.length) {
            this.dataset = [...this.seedRows.filter(this._filterRow)];
        } else {
            this.dataset = [{}];
        }
    }

    fileBrowseHandler(files: FileList | File[]): void {
        const f = files instanceof FileList ? files[0] : files[0];
        if (!f || f.type !== 'text/csv') return;
        this._papa.parse(f, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                const sanitized = sanitizePapaObjectRows(
                    result.data as WhitelistRow[],
                    result.meta?.fields
                );
                const rows = sanitized.rows.filter(this._filterRow);
                this.dataset = this.action === 'add'
                    ? [...this.dataset.filter(this._filterRow), ...rows]
                    : rows;
                if (this.dataset.length > 500) this.dataset.splice(499, this.dataset.length - 500);
                this.showTable = true;
                this._cdr.markForCheck();
            },
        });
    }

    goToTable(): void {
        this.dataset = this.action === 'add' && this.seedRows?.length
            ? [...this.seedRows.filter(this._filterRow)]
            : [{}];
        this.showTable = true;
        this._cdr.markForCheck();
    }

    goBack(): void {
        this.showTable = false;
        this._cdr.markForCheck();
    }

    confirmTable(): void {
        this._validateDuplicates();
        if (this.isValidating || this.errorFlag) return;

        const validRows: WhitelistRow[] = [];
        this.dataset.forEach((row) => {
            if (!row.email && !row.phone) return;
            validRows.push({
                ...row,
                project: this.projectId,
                projectFlow: this.projectFlowId,
                checked: false,
            });
        });

        this.stagedWhitelist.emit({ whiteList: validRows, replaceList: this.action === 'replace' });
    }

    downloadTemplate(): void {
        const header = 'name,email,countryCode,phone\n';
        const sample = 'John Doe,john@example.com,+1,5550001234\n';
        const blob = new Blob([header + sample], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'whitelist-template.csv';
        a.click();
        URL.revokeObjectURL(url);
    }

    private _filterRow(row: WhitelistRow): boolean {
        return !!(row.email || row.name || row.phone || row.countryCode);
    }

    private _validateDuplicates(): void {
        this.isValidating = true;
        const emailSet = new Set<string>();
        const phoneSet = new Set<string>();

        this.dataset.forEach((row, rowIdx) => {
            const rowNum = rowIdx + 1;
            if (!row.email && !row.phone) return;
            this._checkDuplicateCol(row, emailSet, 'email', rowNum);
            this._checkDuplicateCol(row, phoneSet, 'phone', rowNum);
        });

        this.errorFlag = Object.keys(this.errors).length > 0;
        this.isValidating = false;
        this._cdr.markForCheck();
    }

    private _checkDuplicateCol(
        row: WhitelistRow,
        set: Set<string>,
        col: string,
        rowNum: number,
    ): void {
        const val = (row as Record<string, unknown>)[col] as string | undefined;
        if (val) {
            if (set.has(val)) {
                this._setError(rowNum, `dup_${col}`, `Duplicate ${col}`);
            } else {
                set.add(val);
                this._clearError(rowNum, `dup_${col}`);
            }
        } else {
            this._setError(rowNum, col, 'Required');
            this._clearError(rowNum, `dup_${col}`);
        }
    }

    private _setError(row: number, col: string, msg: string): void {
        this.errors[row] = { ...(this.errors[row] ?? {}), [col]: msg };
    }

    private _clearError(row: number, col: string): void {
        if (!this.errors[row]) return;
        delete this.errors[row][col];
        if (!Object.keys(this.errors[row]).length) delete this.errors[row];
    }
}
