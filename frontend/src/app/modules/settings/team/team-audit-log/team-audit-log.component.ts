import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { StaffPermissionService } from 'app/core/permissions/staff-permission.service';
import { StaffAuditLogDto, TeamDto } from 'app/core/permissions/staff-permission.types';
import { StaffRbacApiService } from 'app/core/permissions/staff-rbac-api.service';
import { catchError, forkJoin, of } from 'rxjs';

@Component({
    selector: 'app-team-audit-log',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSnackBarModule,
        TranslocoModule,
    ],
    templateUrl: './team-audit-log.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamAuditLogComponent implements OnInit {
    private readonly _api = inject(StaffRbacApiService);
    private readonly _snack = inject(MatSnackBar);
    private readonly _transloco = inject(TranslocoService);
    readonly permService = inject(StaffPermissionService);

    readonly loading = signal(false);
    readonly rows = signal<StaffAuditLogDto[]>([]);
    readonly teams = signal<TeamDto[]>([]);
    readonly total = signal(0);
    readonly page = signal(1);
    readonly pages = signal(1);

    readonly limit = 25;
    teamFilter = '';
    actionFilter = '';
    resourceTypeFilter = '';
    startDateFilter = '';
    endDateFilter = '';

    readonly resourceTypes = [
        'staff',
        'team',
        'clientRole',
        'staffAccessRequest',
        'clientSettings',
        'smartReport',
        'smartReportTemplate',
        'batchConfiguration',
    ];

    ngOnInit(): void {
        forkJoin({
            teams: this._api.listTeams().pipe(catchError(() => of([]))),
        }).subscribe(({ teams }) => {
            this.teams.set(teams);
        });
        this.load();
    }

    load(nextPage = this.page()): void {
        this.page.set(nextPage);
        this.loading.set(true);

        const params: Record<string, string | number> = {
            page: nextPage,
            limit: this.limit,
        };
        if (this.teamFilter) params['team'] = this.teamFilter;
        if (this.actionFilter.trim()) params['action'] = this.actionFilter.trim();
        if (this.resourceTypeFilter) params['resourceType'] = this.resourceTypeFilter;
        if (this.startDateFilter) params['startDate'] = this.startDateFilter;
        if (this.endDateFilter) params['endDate'] = `${this.endDateFilter}T23:59:59.999Z`;

        this._api.listAuditLogs(params).subscribe({
            next: (res) => {
                this.rows.set(res?.rows || []);
                this.total.set(res?.total || 0);
                this.pages.set(res?.pages || 1);
                this.loading.set(false);
            },
            error: () => {
                this.rows.set([]);
                this.loading.set(false);
                this._snack.open(
                    this._transloco.translate('staffRbac.auditLog.loadError'),
                    undefined,
                    { duration: 3000 }
                );
            },
        });
    }

    applyFilters(): void {
        this.load(1);
    }

    resetFilters(): void {
        this.teamFilter = '';
        this.actionFilter = '';
        this.resourceTypeFilter = '';
        this.startDateFilter = '';
        this.endDateFilter = '';
        this.load(1);
    }

    teamLabel(row: StaffAuditLogDto): string {
        if (!row.team) return '—';
        if (typeof row.team === 'object') return row.team.name || row.team._id;
        const found = this.teams().find((t) => String(t._id) === String(row.team));
        return found?.name || String(row.team);
    }

    exportCsv(): void {
        const escapeCell = (val: unknown): string => {
            let text = val === null || val === undefined ? '' : String(val);
            if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
            return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
        };
        const header = ['Timestamp', 'ActorType', 'ActorName', 'ActorEmail', 'Team', 'Action', 'ResourceType', 'ResourceId', 'Summary'];
        const lines = [
            header.join(','),
            ...this.rows().map((r) =>
                [
                    r.createdAt ? new Date(r.createdAt).toISOString() : '',
                    r.actorType,
                    r.actorName || '',
                    r.actorEmail || '',
                    this.teamLabel(r),
                    r.action,
                    r.resourceType,
                    r.resourceId || '',
                    r.summary || '',
                ]
                    .map(escapeCell)
                    .join(',')
            ),
        ];
        const blob = new Blob([`\uFEFF${lines.join('\r\n')}`], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `verifik-staff-audit-log-${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }
}
