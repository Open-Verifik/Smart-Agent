import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    signal,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { HasStaffPermissionDirective } from 'app/core/permissions/has-staff-permission.directive';
import { SYSTEM_ROLE_METADATA, SYSTEM_ROLES } from 'app/core/permissions/staff-permission.constants';
import { StaffPermissionService } from 'app/core/permissions/staff-permission.service';
import {
    ClientRoleDto,
    EndpointPolicy,
    SystemRoleSlug,
    TeamDto,
    TeamFeatureBudgetDto,
} from 'app/core/permissions/staff-permission.types';
import { StaffRbacApiService } from 'app/core/permissions/staff-rbac-api.service';
import { CostCenter, UsageApiService } from 'app/core/usage/usage-api.service';
import { SettingsService, StaffMember } from 'app/modules/settings/settings.service';
import { catchError, forkJoin, of } from 'rxjs';
import { EndpointPolicyPickerComponent } from '../endpoint-policy-picker/endpoint-policy-picker.component';

const TEAM_COLORS = ['blue', 'emerald', 'indigo', 'amber', 'rose', 'violet', 'cyan', 'slate'] as const;

const COLOR_DOT_CLASSES: Record<string, string> = {
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    indigo: 'bg-indigo-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
    violet: 'bg-violet-500',
    cyan: 'bg-cyan-500',
    slate: 'bg-slate-500',
};

@Component({
    selector: 'app-team-subteams',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTooltipModule,
        TranslocoModule,
        HasStaffPermissionDirective,
        EndpointPolicyPickerComponent,
    ],
    templateUrl: './team-subteams.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamSubteamsComponent implements OnInit {
    private readonly _api = inject(StaffRbacApiService);
    private readonly _settingsService = inject(SettingsService);
    private readonly _usageApi = inject(UsageApiService);
    private readonly _dialog = inject(MatDialog);
    private readonly _snackBar = inject(MatSnackBar);
    private readonly _transloco = inject(TranslocoService);
    readonly permService = inject(StaffPermissionService);

    readonly loading = signal(false);
    readonly saving = signal(false);
    readonly teams = signal<TeamDto[]>([]);
    readonly staffList = signal<StaffMember[]>([]);
    readonly customRoles = signal<ClientRoleDto[]>([]);
    readonly costCenters = signal<CostCenter[]>([]);

    // Detail / History state
    readonly detailTeam = signal<TeamDto | null>(null);
    readonly loadingDetail = signal(false);

    // Edit/Create modal state
    editingTeam: TeamDto | null = null;
    teamForm = {
        name: '',
        description: '',
        color: 'blue',
        status: 'active' as 'active' | 'paused',
        unlimitedBudget: false,
        monthlyBudget: 250 as number | null,
        budgetEnforcement: 'hard' as 'hard' | 'soft',
        defaultRole: '' as SystemRoleSlug | '',
        defaultCustomRole: '' as string,
        defaultCostCenter: '' as string,
        memberIds: [] as string[],
        endpointPolicy: { mode: 'all', features: [] } as EndpointPolicy,
        featureBudgets: [] as TeamFeatureBudgetDto[],
    };

    // Boost modal state
    boostTeam: TeamDto | null = null;
    boostAmount = 100;
    boostMode: 'one_time' | 'recurring' = 'one_time';

    // Team API key modal state
    apiKeyTeam: TeamDto | null = null;
    apiKeyName = '';
    apiKeyExpiresIn = '12m';
    generatedToken = signal<string | null>(null);

    readonly colors = TEAM_COLORS;
    readonly systemRoles = SYSTEM_ROLES.map((s) => SYSTEM_ROLE_METADATA[s]);

    @ViewChild('teamFormDialog') teamFormDialog!: TemplateRef<unknown>;
    @ViewChild('boostDialog') boostDialog!: TemplateRef<unknown>;
    @ViewChild('apiKeyDialog') apiKeyDialog!: TemplateRef<unknown>;
    @ViewChild('historyDialog') historyDialog!: TemplateRef<unknown>;
    @ViewChild('confirmDeleteDialog') confirmDeleteDialog!: TemplateRef<unknown>;

    private _dialogRef: MatDialogRef<unknown> | null = null;
    deletingTeam: TeamDto | null = null;

    ngOnInit(): void {
        this.loadData();
    }

    loadData(): void {
        this.loading.set(true);
        forkJoin({
            teams: this._api.listTeams().pipe(catchError(() => of([]))),
            staff: this._settingsService.getStaff().pipe(catchError(() => of({ data: [] }))),
            roles: this._api.listClientRoles().pipe(catchError(() => of([]))),
            costCenters: this._usageApi.listCostCenters().pipe(catchError(() => of([]))),
        }).subscribe(({ teams, staff, roles, costCenters }) => {
            this.teams.set(teams);
            this.staffList.set(staff?.data || []);
            this.customRoles.set(roles);
            this.costCenters.set(costCenters);
            this.loading.set(false);
        });
    }

    dotClass(color?: string): string {
        return COLOR_DOT_CLASSES[color || 'blue'] || COLOR_DOT_CLASSES['blue'];
    }

    progressBarClass(team: TeamDto): string {
        const pct = team.budget?.percentUsed ?? 0;
        if (pct >= 95) return 'bg-rose-500';
        if (pct >= 70) return 'bg-amber-500';
        return 'bg-emerald-500';
    }

    totalMonthlyCap(): number {
        return this.teams().reduce((sum, t) => sum + (Number(t.budget?.effectiveCap) || 0), 0);
    }

    totalCurrentSpend(): number {
        return this.teams().reduce(
            (sum, t) => sum + (Number(t.budget?.currentPeriodUsage ?? t.currentPeriodUsage) || 0),
            0
        );
    }

    openTeamModal(team?: TeamDto): void {
        this.editingTeam = team ?? null;
        if (team) {
            const memberIds = this.staffList()
                .filter((s) => {
                    const tid = typeof s.team === 'object' ? s.team?._id : s.team;
                    return tid && String(tid) === String(team._id);
                })
                .map((s) => String(s._id));

            const defaultCustomId =
                typeof team.defaultCustomRole === 'object'
                    ? team.defaultCustomRole?._id || ''
                    : team.defaultCustomRole || '';
            const defaultCostCenterId =
                typeof team.defaultCostCenter === 'object'
                    ? team.defaultCostCenter?._id || ''
                    : team.defaultCostCenter || '';

            this.teamForm = {
                name: team.name,
                description: team.description || '',
                color: team.color || 'blue',
                status: team.status || 'active',
                unlimitedBudget: team.monthlyBudget === null || team.monthlyBudget === undefined,
                monthlyBudget: team.monthlyBudget ?? 250,
                budgetEnforcement: team.budgetEnforcement || 'hard',
                defaultRole: (team.defaultRole as SystemRoleSlug) || '',
                defaultCustomRole: defaultCustomId,
                defaultCostCenter: defaultCostCenterId,
                memberIds,
                endpointPolicy: team.endpointPolicy
                    ? {
                          mode: team.endpointPolicy.mode || 'all',
                          features: [...(team.endpointPolicy.features || [])],
                      }
                    : { mode: 'all', features: [] },
                featureBudgets: (team.budget?.featureBudgets || team.featureBudgets || []).map((fb) => ({
                    ...fb,
                })),
            };
        } else {
            this.teamForm = {
                name: '',
                description: '',
                color: 'blue',
                status: 'active',
                unlimitedBudget: false,
                monthlyBudget: 250,
                budgetEnforcement: 'hard',
                defaultRole: '',
                defaultCustomRole: '',
                defaultCostCenter: '',
                memberIds: [],
                endpointPolicy: { mode: 'all', features: [] },
                featureBudgets: [],
            };
        }

        this._dialogRef = this._dialog.open(this.teamFormDialog, {
            width: '680px',
            maxWidth: '95vw',
            maxHeight: '90vh',
            panelClass: 'staff-member-dialog-panel',
            autoFocus: false,
        });
    }

    saveTeam(): void {
        const name = this.teamForm.name.trim();
        if (!name || this.saving()) return;

        this.saving.set(true);
        const payload = {
            name,
            description: this.teamForm.description.trim(),
            color: this.teamForm.color,
            status: this.teamForm.status,
            monthlyBudget: this.teamForm.unlimitedBudget
                ? null
                : Math.max(0, Number(this.teamForm.monthlyBudget ?? 0)),
            budgetEnforcement: this.teamForm.budgetEnforcement,
            defaultRole: this.teamForm.defaultRole ? (this.teamForm.defaultRole as SystemRoleSlug) : null,
            defaultCustomRole: this.teamForm.defaultCustomRole || null,
            defaultCostCenter: this.teamForm.defaultCostCenter || null,
            memberIds: this.teamForm.memberIds,
            endpointPolicy: this.teamForm.endpointPolicy,
            featureBudgets: this.teamForm.featureBudgets.map((fb) => ({
                featureCode: fb.featureCode,
                monthlyBudget: Math.max(0, Number(fb.monthlyBudget || 0)),
            })),
        };

        const req$ = this.editingTeam
            ? this._api.updateTeam(this.editingTeam._id, payload)
            : this._api.createTeam(payload);

        req$.subscribe({
            next: () => {
                this.saving.set(false);
                this._dialogRef?.close();
                this._snackBar.open(
                    this._transloco.translate('staffRbac.teams.savedToast'),
                    undefined,
                    { duration: 3000 }
                );
                this.loadData();
                this.permService.refresh().subscribe();
            },
            error: (err) => {
                this.saving.set(false);
                this._snackBar.open(
                    err?.error?.message || this._transloco.translate('staffRbac.teams.saveError'),
                    undefined,
                    { duration: 4000 }
                );
            },
        });
    }

    toggleStatus(team: TeamDto): void {
        const nextStatus = team.status === 'paused' ? 'active' : 'paused';
        this._api.updateTeam(team._id, { status: nextStatus }).subscribe({
            next: () => {
                this._snackBar.open(
                    this._transloco.translate(
                        nextStatus === 'paused'
                            ? 'staffRbac.teams.pausedToast'
                            : 'staffRbac.teams.resumedToast'
                    ),
                    undefined,
                    { duration: 3000 }
                );
                this.loadData();
            },
        });
    }

    openBoostModal(team: TeamDto): void {
        this.boostTeam = team;
        this.boostAmount = 100;
        this.boostMode = 'one_time';
        this._dialogRef = this._dialog.open(this.boostDialog, {
            width: '440px',
            maxWidth: '95vw',
        });
    }

    submitBoost(): void {
        if (!this.boostTeam || !Number.isFinite(Number(this.boostAmount)) || Number(this.boostAmount) <= 0) {
            return;
        }
        this.saving.set(true);
        this._api
            .addTeamBudgetBoost(this.boostTeam._id, {
                amount: Number(this.boostAmount),
                mode: this.boostMode,
            })
            .subscribe({
                next: () => {
                    this.saving.set(false);
                    this._dialogRef?.close();
                    this._snackBar.open(
                        this._transloco.translate('staffRbac.teams.boostAddedToast'),
                        undefined,
                        { duration: 3500 }
                    );
                    this.loadData();
                },
                error: (err) => {
                    this.saving.set(false);
                    this._snackBar.open(
                        err?.error?.message || this._transloco.translate('staffRbac.teams.saveError'),
                        undefined,
                        { duration: 4000 }
                    );
                },
            });
    }

    openApiKeyModal(team: TeamDto): void {
        this.apiKeyTeam = team;
        this.apiKeyName = `${team.name} API Key`;
        this.apiKeyExpiresIn = '12m';
        this.generatedToken.set(null);
        this._dialogRef = this._dialog.open(this.apiKeyDialog, {
            width: '520px',
            maxWidth: '95vw',
        });
    }

    generateTeamKey(): void {
        if (!this.apiKeyTeam || !this.apiKeyName.trim()) return;
        this.saving.set(true);
        this._api
            .createTeamApiKey(this.apiKeyTeam._id, {
                name: this.apiKeyName.trim(),
                expiresIn: this.apiKeyExpiresIn,
            })
            .subscribe({
                next: (res) => {
                    this.saving.set(false);
                    this.generatedToken.set(res.token);
                },
                error: (err) => {
                    this.saving.set(false);
                    this._snackBar.open(
                        err?.error?.message || this._transloco.translate('staffRbac.teams.keyError'),
                        undefined,
                        { duration: 4000 }
                    );
                },
            });
    }

    copyToken(token: string): void {
        void navigator.clipboard?.writeText(token);
        this._snackBar.open(
            this._transloco.translate('staffRbac.teams.tokenCopiedToast'),
            undefined,
            { duration: 2500 }
        );
    }

    openHistoryModal(team: TeamDto): void {
        this.detailTeam.set(team);
        this.loadingDetail.set(true);
        this._dialogRef = this._dialog.open(this.historyDialog, {
            width: '560px',
            maxWidth: '95vw',
        });
        this._api.getTeam(team._id).subscribe({
            next: (full) => {
                this.detailTeam.set(full);
                this.loadingDetail.set(false);
            },
            error: () => {
                this.loadingDetail.set(false);
            },
        });
    }

    confirmDelete(team: TeamDto): void {
        this.deletingTeam = team;
        this._dialogRef = this._dialog.open(this.confirmDeleteDialog, {
            width: '420px',
            maxWidth: '95vw',
        });
    }

    executeDelete(): void {
        if (!this.deletingTeam) return;
        this.saving.set(true);
        this._api.deleteTeam(this.deletingTeam._id).subscribe({
            next: () => {
                this.saving.set(false);
                this._dialogRef?.close();
                this.deletingTeam = null;
                this._snackBar.open(
                    this._transloco.translate('staffRbac.teams.deletedToast'),
                    undefined,
                    { duration: 3000 }
                );
                this.loadData();
            },
            error: () => {
                this.saving.set(false);
            },
        });
    }

    closeModal(): void {
        this._dialogRef?.close();
    }
}
