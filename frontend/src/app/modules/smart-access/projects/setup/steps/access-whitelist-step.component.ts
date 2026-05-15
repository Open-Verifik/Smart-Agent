import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    inject,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { forkJoin, Observable } from 'rxjs';

import { SmartAccessProjectsService } from '../../smart-access-projects.service';
import { SmartAccessSetupService } from '../../smart-access-setup.service';
import {
    WhitelistCsvHandlerComponent,
    StagedWhitelistPayload,
    WhitelistRow,
} from '../csv-handler/whitelist-csv-handler.component';

@Component({
    selector: 'access-whitelist-step',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSnackBarModule,
        TranslocoModule,
        WhitelistCsvHandlerComponent,
    ],
    templateUrl: './access-whitelist-step.component.html',
    styleUrls: ['./access-whitelist-step.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessWhitelistStepComponent implements OnInit {
    @Input({ required: true }) form!: FormGroup;
    @Input({ required: true }) projectFlowId!: string;
    @Input({ required: true }) projectId!: string;
    @Input() loading = false;
    @Input() saving = false;

    private _cdr = inject(ChangeDetectorRef);
    private _snack = inject(MatSnackBar);
    private _tLoco = inject(TranslocoService);
    private _projects = inject(SmartAccessProjectsService);
    private _setup = inject(SmartAccessSetupService);

    // Whitelist list state
    whitelistRows: WhitelistRow[] = [];
    whitelistLoading = false;
    whitelistTotal = 0;
    pageIndex = 0;
    readonly pageSize = 20;
    readonly pageSizeOptions = [20, 50, 100];

    // CSV staging state
    csvAction: 'add' | 'replace' = 'add';
    csvSeedRows: WhitelistRow[] = [];
    pendingCsvPayload: StagedWhitelistPayload | null = null;
    showCsvEditor = false;

    // Deletion
    selected: WhitelistRow[] = [];
    deleting = false;

    // API tester
    sendingTest = false;
    testingData: unknown = null;

    // Webhooks
    webhookList: { _id: string; name?: string }[] = [];
    webhooksRefreshing = false;

    ngOnInit(): void {
        this._loadWhitelist();
        this._loadWebhooks();
        this._ensureWhitelistStrategy();
    }

    integrations(): FormGroup {
        return this.form.get('projectFlow.integrations') as FormGroup;
    }

    security(): FormGroup {
        return this.form.get('projectFlow.security') as FormGroup;
    }

    get source(): string | null {
        return this.security()?.get('source')?.value ?? null;
    }

    set source(val: string) {
        this.security()?.get('source')?.setValue(val);
        this.form.markAsDirty();
        if (val === 'CSV' && !this.showCsvEditor && this.whitelistRows.length === 0) {
            this.openCsvUpload('add');
        }
    }

    get hasNewPendingRows(): boolean {
        return (this.pendingCsvPayload?.whiteList?.length ?? 0) > 0;
    }

    openCsvUpload(action: 'add' | 'replace'): void {
        this.csvAction = action;
        this.csvSeedRows = action === 'add' ? [...this.whitelistRows] : [];
        this.showCsvEditor = true;
        this._cdr.markForCheck();
    }

    onStagedWhitelist(payload: StagedWhitelistPayload): void {
        this.pendingCsvPayload = payload;
        this.showCsvEditor = false;
        this.form.markAsDirty();
        this._cdr.markForCheck();
    }

    callTestApi(): void {
        const url = (this.security().get('apiUrl')?.value ?? '').trim();
        const tt = this.security().get('apiTestType')?.value ?? 'email';
        const tv = (this.security().get('apiTestValue')?.value ?? '').trim();
        if (!url || this.sendingTest) return;
        this.sendingTest = true;
        this.testingData = null;
        this._setup.testIdentityUrl({ identityUrl: url, testType: tt, testValue: tv }).subscribe({
            next: (res) => {
                this.testingData = res;
                this.sendingTest = false;
                this._snack.open(this._t('smartAccessProjects.setup.whitelist.api_ok'), '', { duration: 2500 });
                this._cdr.markForCheck();
            },
            error: () => {
                this.sendingTest = false;
                this._snack.open(this._t('smartAccessProjects.setup.whitelist.api_fail'), '', { duration: 3500 });
                this._cdr.markForCheck();
            },
        });
    }

    onPageEvent(event: PageEvent): void {
        this.pageIndex = event.pageIndex;
        this._loadWhitelist();
    }

    toggleSelect(row: WhitelistRow): void {
        const idx = this.selected.indexOf(row);
        if (idx === -1) this.selected.push(row);
        else this.selected.splice(idx, 1);
        this._cdr.markForCheck();
    }

    toggleSelectAll(checked: boolean): void {
        this.selected = checked ? [...this.whitelistRows] : [];
        this._cdr.markForCheck();
    }

    isSelected(row: WhitelistRow): boolean {
        return this.selected.includes(row);
    }

    deleteSelected(): void {
        if (this.deleting) return;
        const serverRows = this.selected.filter((r) => (r as Record<string, unknown>)['_id']);
        if (!serverRows.length) {
            this.whitelistRows = this.whitelistRows.filter((r) => !this.selected.includes(r));
            this.selected = [];
            this._cdr.markForCheck();
            return;
        }
        this.deleting = true;
        const calls: Observable<unknown>[] = serverRows.map((r) =>
            this._projects.deleteWhitelistEntry((r as Record<string, unknown>)['_id'] as string)
        );
        forkJoin(calls).subscribe({
            next: () => {
                this.deleting = false;
                this.selected = [];
                this._loadWhitelist();
            },
            error: () => {
                this.deleting = false;
                this._snack.open(this._t('smartAccessProjects.setup.whitelist.delete_fail'), '', { duration: 3000 });
                this._cdr.markForCheck();
            },
        });
    }

    openWebhookSettings(): void {
        window.open('/smart-monitor/webhooks', '_blank');
    }

    /** Public alias used by the Reload button in the template. */
    _loadWebhooksPublic(): void {
        this._loadWebhooks();
    }

    private _ensureWhitelistStrategy(): void {
        const st = this.security()?.get('strategy');
        if (st && st.value !== 'whitelist') st.setValue('whitelist', { emitEvent: false });
    }

    private _loadWhitelist(): void {
        this._ensureWhitelistStrategy();
        if (!this.projectFlowId) return;
        this.whitelistLoading = true;
        this._cdr.markForCheck();
        this._projects
            .getProjectFlowWhiteList({
                where_projectFlow: this.projectFlowId,
                where_project: this.projectId,
                page: this.pageIndex + 1,
                perPage: this.pageSize,
                sort: '-createdAt',
            } as Record<string, string | number>)
            .subscribe({
                next: (res) => {
                    this.whitelistRows = Array.isArray(res?.data) ? (res.data as WhitelistRow[]) : [];
                    this.whitelistTotal = typeof res?.total === 'number' ? res.total : this.whitelistRows.length;
                    this.whitelistLoading = false;
                    this._cdr.markForCheck();
                },
                error: () => {
                    this.whitelistRows = [];
                    this.whitelistTotal = 0;
                    this.whitelistLoading = false;
                    this._cdr.markForCheck();
                },
            });
    }

    private _loadWebhooks(): void {
        if (this.webhooksRefreshing) return;
        this.webhooksRefreshing = true;
        this._setup.listWebhooks().subscribe({
            next: (res) => {
                this.webhookList = res?.data ?? [];
                this.webhooksRefreshing = false;
                this.integrations()?.get('webhook')?.enable({ emitEvent: false });
                this._cdr.markForCheck();
            },
            error: () => {
                this.webhooksRefreshing = false;
                this._cdr.markForCheck();
            },
        });
    }

    private _t(k: string): string {
        return this._tLoco.translate(k) ?? k;
    }
}
