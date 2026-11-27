import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, input, output, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';
import { StaffPermissionService } from '../staff-permission.service';
import { TeamDto } from '../staff-permission.types';
import { StaffRbacApiService } from '../staff-rbac-api.service';

export interface ProjectTeamRef {
    _id?: string;
    name?: string;
    color?: string;
}

export function extractProjectTeam(team: unknown, teams?: readonly TeamDto[]): ProjectTeamRef | null {
    if (!team) return null;
    if (typeof team === 'string') {
        const matched = teams?.find((t) => t._id === team);
        if (!matched) return null;
        return { _id: matched._id, name: matched.name, color: matched.color || '#6366f1' };
    }
    if (typeof team !== 'object') return null;
    const ref = team as ProjectTeamRef;
    if (ref.name) {
        return {
            _id: ref._id,
            name: ref.name,
            color: ref.color || '#6366f1',
        };
    }
    if (ref._id) {
        const matched = teams?.find((t) => t._id === ref._id);
        if (matched) return { _id: matched._id, name: matched.name, color: matched.color || '#6366f1' };
    }
    return null;
}

@Component({
    selector: 'app-team-filter-select',
    standalone: true,
    imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatIconModule, TranslocoModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        @if (canViewAllTeams() && teams().length > 0) {
            <mat-form-field
                appearance="outline"
                subscriptSizing="dynamic"
                class="team-filter-field min-w-[200px]"
            >
                <mat-select
                    [value]="value()"
                    (selectionChange)="valueChange.emit($event.value)"
                    [attr.aria-label]="'staffRbac.members.subTeamColumn' | transloco"
                >
                    <mat-option value="">{{ 'staffRbac.teams.filterAllTeams' | transloco }}</mat-option>
                    <mat-option value="none">{{ 'staffRbac.teams.filterUnassigned' | transloco }}</mat-option>
                    @for (team of teams(); track team._id) {
                        <mat-option [value]="team._id">
                            <span class="inline-flex items-center gap-2">
                                <span
                                    class="inline-block h-2 w-2 shrink-0 rounded-full"
                                    [style.backgroundColor]="team.color || '#6366f1'"
                                ></span>
                                <span>{{ team.name }}</span>
                            </span>
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
        }
    `,
})
export class TeamFilterSelectComponent implements OnInit {
    private readonly _perm = inject(StaffPermissionService);
    private readonly _rbacApi = inject(StaffRbacApiService);

    readonly value = input<string>('');
    readonly valueChange = output<string>();
    readonly teamsLoaded = output<TeamDto[]>();

    readonly canViewAllTeams = this._perm.canViewAllTeams;
    readonly teams = signal<TeamDto[]>([]);

    ngOnInit(): void {
        if (!this.canViewAllTeams()) return;
        this._rbacApi.listTeams().subscribe({
            next: (list) => {
                const normalized = Array.isArray(list) ? list : [];
                this.teams.set(normalized);
                this.teamsLoaded.emit(normalized);
            },
            error: () => {
                this.teams.set([]);
                this.teamsLoaded.emit([]);
            },
        });
    }
}
