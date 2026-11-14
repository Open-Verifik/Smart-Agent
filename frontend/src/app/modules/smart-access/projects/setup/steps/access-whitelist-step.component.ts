import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    inject,
} from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SmartAccessProjectsService } from '../../smart-access-projects.service';
import { SmartAccessSetupService } from '../../smart-access-setup.service';
import { SmartEnrollProjectsService } from '../../../../smart-enroll/projects/smart-enroll-projects.service';
import { HumanAuthnProjectsService } from '../../../../human-authn/projects/human-authn-projects.service';
import { SmartBusinessService } from '../../../../smart-business/smart-business.service';
import type { SmartAccessLinkedProject } from '../../smart-access-projects.types';
import {
    WhitelistCsvHandlerComponent,
    StagedWhitelistPayload,
    WhitelistRow,
} from '../csv-handler/whitelist-csv-handler.component';

export interface CandidateProject {
    _id: string;
    name: string;
    productType: 'smartEnroll' | 'humanAuthn' | 'smartBusiness';
    productBadge: string;
    status: string;
    flowType: 'onboarding' | 'humanAuthn';
    target: 'personal' | 'business';
    biometricBadge: string;
    storageProvider?: 'ipfs' | 'cloud' | 'none';
}

@Component({
    selector: 'access-whitelist-step',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTooltipModule,
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
    private _enrollProjects = inject(SmartEnrollProjectsService);
    private _humanAuthnProjects = inject(HumanAuthnProjectsService);
    private _smartBusiness = inject(SmartBusinessService);

    // Whitelist list state
    whitelistRows: WhitelistRow[] = [];
    whitelistLoading = false;
    whitelistTotal = 0;
    pageIndex = 0;
    pageSize = 20;
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

    // Candidate Verifik Projects state
    candidateProjects: CandidateProject[] = [];
    candidateProjectsLoading = false;
    projectSearchQuery = '';

    ngOnInit(): void {
        this._loadWhitelist();
        this._loadWebhooks();
        this._ensureWhitelistStrategy();

        if (this.source === 'VERIFIK_PROJECTS' || this.source === 'SMART_ENROLL') {
            this._loadCandidateProjects();
        }
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

        if (val === 'NONE') {
            this.security()?.get('strategy')?.setValue('none');
            this.security()?.get('linkedProjects')?.setValue([]);
            this.security()?.get('primarySignUpProject')?.setValue(null);
        } else if (val === 'VERIFIK_PROJECTS' || val === 'SMART_ENROLL') {
            this.security()?.get('strategy')?.setValue('whitelist');
            this._loadCandidateProjects();
        } else if (val === 'CSV') {
            this.security()?.get('strategy')?.setValue('whitelist');
            if (!this.showCsvEditor && this.whitelistRows.length === 0) {
                this.openCsvUpload('add');
            }
        } else if (val === 'API') {
            this.security()?.get('strategy')?.setValue('whitelist');
        }

        this.form.markAsDirty();
        this._cdr.markForCheck();
    }

    get linkedProjects(): SmartAccessLinkedProject[] {
        const val = this.security()?.get('linkedProjects')?.value;
        return Array.isArray(val) ? val : [];
    }

    get primarySignUpProject(): string | null {
        return this.security()?.get('primarySignUpProject')?.value ?? null;
    }

    get isVerifikProjectsValid(): boolean {
        return this.linkedProjects.length > 0;
    }

    get filteredCandidateProjects(): CandidateProject[] {
        const q = this.projectSearchQuery.trim().toLowerCase();
        if (!q) return this.candidateProjects;
        return this.candidateProjects.filter(
            (p) =>
                p.name.toLowerCase().includes(q) ||
                p.productBadge.toLowerCase().includes(q) ||
                p.biometricBadge.toLowerCase().includes(q) ||
                p._id.toLowerCase().includes(q)
        );
    }

    get eligiblePrimarySignUpProjects(): CandidateProject[] {
        const linkedMap = new Map(this.linkedProjects.map((lp) => [lp.project, lp]));
        return this.candidateProjects.filter((p) => {
            const config = linkedMap.get(p._id);
            return config && config.allowSignUpRedirect;
        });
    }

    get hasStorageNoneLinked(): boolean {
        if (this.source !== 'VERIFIK_PROJECTS' && this.source !== 'SMART_ENROLL') return false;
        const linkedIds = new Set(this.linkedProjects.map((lp) => lp.project));
        return this.candidateProjects.some(
            (p) => linkedIds.has(p._id) && p.storageProvider === 'none'
        );
    }

    isProjectLinked(candId: string): boolean {
        return this.linkedProjects.some((lp) => lp.project === candId);
    }

    isSignUpRedirectAllowed(candId: string): boolean {
        const item = this.linkedProjects.find((lp) => lp.project === candId);
        return !!item?.allowSignUpRedirect;
    }

    toggleProjectLink(cand: CandidateProject): void {
        const current = [...this.linkedProjects];
        const idx = current.findIndex((lp) => lp.project === cand._id);
        if (idx >= 0) {
            current.splice(idx, 1);
        } else {
            current.push({
                project: cand._id,
                flowType: cand.flowType,
                target: cand.target,
                allowSignUpRedirect: true,
            });
        }
        this._setLinkedProjects(current);
    }

    toggleSignUpRedirect(candId: string, allowed: boolean): void {
        const current = this.linkedProjects.map((lp) => {
            if (lp.project === candId) {
                return { ...lp, allowSignUpRedirect: allowed };
            }
            return lp;
        });
        this._setLinkedProjects(current);
    }

    setPrimarySignUpProject(projId: string | null): void {
        this.security()?.get('primarySignUpProject')?.setValue(projId);
        this.form.markAsDirty();
        this._cdr.markForCheck();
    }

    private _setLinkedProjects(list: SmartAccessLinkedProject[]): void {
        this.security()?.get('linkedProjects')?.setValue(list);

        const currentPrimary = this.primarySignUpProject;
        const isStillLinked = list.some((lp) => lp.project === currentPrimary);
        if (!isStillLinked) {
            const candidate = list.find((lp) => lp.allowSignUpRedirect) || list[0];
            this.security()?.get('primarySignUpProject')?.setValue(candidate ? candidate.project : null);
        }

        this.form.markAsDirty();
        this._cdr.markForCheck();
    }

    private _loadCandidateProjects(): void {
        if (this.candidateProjectsLoading) return;
        this.candidateProjectsLoading = true;
        this._cdr.markForCheck();

        forkJoin({
            enroll: this._enrollProjects.listProjects().pipe(catchError(() => of([]))),
            humanAuthn: this._humanAuthnProjects.listProjects().pipe(catchError(() => of([]))),
            business: this._smartBusiness.listProjects().pipe(catchError(() => of([]))),
        }).subscribe({
            next: ({ enroll, humanAuthn, business }) => {
                const list: CandidateProject[] = [];

                // 1. SmartEnroll (Personal KYC)
                for (const p of enroll) {
                    if (p._id === this.projectId) continue;
                    list.push({
                        _id: p._id,
                        name: p.name || p._id,
                        productType: 'smartEnroll',
                        productBadge: 'SmartEnroll KYC',
                        status: p.status || 'active',
                        flowType: 'onboarding',
                        target: 'personal',
                        biometricBadge: 'OpenCV 1:N Face',
                        storageProvider: undefined,
                    });
                }

                // 2. HumanAuthn
                for (const p of humanAuthn) {
                    if (p._id === this.projectId) continue;
                    const flow = (p.projectFlows || []).find((f) => f.type === 'humanAuthn');
                    const storage = (flow?.storage?.provider || 'ipfs').toLowerCase() as 'ipfs' | 'cloud' | 'none';
                    let bioBadge = 'HumanID · IPFS';
                    if (storage === 'cloud') bioBadge = 'HumanID · Cloud';
                    else if (storage === 'none') bioBadge = 'HumanID · None';

                    list.push({
                        _id: p._id,
                        name: p.name || p._id,
                        productType: 'humanAuthn',
                        productBadge: 'HumanAuthn',
                        status: p.status || 'active',
                        flowType: 'humanAuthn',
                        target: 'personal',
                        biometricBadge: bioBadge,
                        storageProvider: storage,
                    });
                }

                // 3. SmartBusiness (KYB)
                for (const p of business) {
                    if (p._id === this.projectId) continue;
                    list.push({
                        _id: p._id,
                        name: p.name || p._id,
                        productType: 'smartBusiness',
                        productBadge: 'SmartBusiness KYB',
                        status: p.status || 'active',
                        flowType: 'onboarding',
                        target: 'business',
                        biometricBadge: 'OpenCV 1:N Face',
                        storageProvider: undefined,
                    });
                }

                this.candidateProjects = list;
                this.candidateProjectsLoading = false;

                // Sync primarySignUpProject if not set yet
                if (!this.primarySignUpProject && this.linkedProjects.length > 0) {
                    const firstRedirect = this.linkedProjects.find((lp) => lp.allowSignUpRedirect) || this.linkedProjects[0];
                    if (firstRedirect) {
                        this.security()?.get('primarySignUpProject')?.setValue(firstRedirect.project, { emitEvent: false });
                    }
                }

                this._cdr.markForCheck();
            },
            error: () => {
                this.candidateProjects = [];
                this.candidateProjectsLoading = false;
                this._cdr.markForCheck();
            },
        });
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
        this.pageSize = event.pageSize;
        this._loadWhitelist();
    }

    onPageSizeChange(pageSize: number): void {
        if (!pageSize || pageSize === this.pageSize) return;
        this.pageIndex = 0;
        this.pageSize = pageSize;
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
