import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

import { SmartAccessProjectsService } from '../../smart-access-projects.service';
import { SmartAccessSetupService } from '../../smart-access-setup.service';

@Component({
    selector: 'access-whitelist-step',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSnackBarModule,
        TranslocoModule,
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

    whitelistRows: Record<string, unknown>[] = [];
    whitelistLoading = false;
    whitelistTotal = 0;
    whitelistPageIndex = 0;
    whitelistPageSize = 10;

    webhookList: { _id: string; name?: string }[] = [];
    webhooksRefreshing = false;
    sendingTest = false;

    ngOnInit(): void {
        this._loadWhitelist();
        this._loadWebhooks();
    }

    integrations(): FormGroup {
        return this.form.get('projectFlow.integrations') as FormGroup;
    }

    security(): FormGroup {
        return this.form.get('projectFlow.security') as FormGroup;
    }

    nextWhitelistPage(): void {
        const lastPage = Math.max(0, Math.ceil(this.whitelistTotal / this.whitelistPageSize) - 1);
        if (this.whitelistPageIndex >= lastPage) return;
        this.whitelistPageIndex += 1;
        this._loadWhitelist();
    }

    prevWhitelistPage(): void {
        if (this.whitelistPageIndex <= 0) return;
        this.whitelistPageIndex -= 1;
        this._loadWhitelist();
    }

    callTestApi(): void {
        const url = this.security().get('apiUrl')?.value?.trim?.() ?? '';
        const tt = this.security().get('apiTestType')?.value ?? 'email';
        const tv = this.security().get('apiTestValue')?.value ?? '';
        if (!url || this.sendingTest) return;
        this.sendingTest = true;
        this._setup.testApi(url, tt, tv).subscribe({
            next: () => {
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

    /** Strategy fixed to whitelist for Smart Access flows. */
    private _ensureWhitelistStrategy(): void {
        const st = this.security().get('strategy');
        if (st && st.value !== 'whitelist') {
            st.setValue('whitelist');
        }
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
                page: this.whitelistPageIndex + 1,
                perPage: this.whitelistPageSize,
                sort: '-createdAt',
            } as Record<string, string | number>)
            .subscribe({
                next: (res) => {
                    this.whitelistRows = Array.isArray(res?.data) ? (res.data as Record<string, unknown>[]) : [];
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
