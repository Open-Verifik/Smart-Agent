import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { requiresHumanAuthnSubscription } from 'app/core/client-settings/override-conditions';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { DateTime } from 'luxon';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
    HumanAuthnProject,
    HumanAuthnProjectFlow,
    HumanAuthnProjectMember,
    HumanAuthnProjectsService,
} from './human-authn-projects.service';

@Component({
    selector: 'app-human-authn-projects',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        RouterLink,
        TranslocoModule,
    ],
    templateUrl: './human-authn-projects.component.html',
    styleUrls: ['./human-authn-projects.component.scss'],
})
export class HumanAuthnProjectsComponent implements OnInit {
    private _projectsService = inject(HumanAuthnProjectsService);
    private _router = inject(Router);
    private _authGate = inject(AuthRequiredGateService);

    projects = signal<HumanAuthnProject[]>([]);
    loading = signal(true);
    error = signal<string | null>(null);
    noActivePlan = signal(false);

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this._loadAfterAuth(),
            panelClass: 'auth-required-dialog',
        });
    }

    private _loadAfterAuth(): void {
        const user = this._projectsService.parseStoredUser();
        if (user?.staff) {
            this._loadProjects();
            return;
        }

        forkJoin({
            plans: this._projectsService.getActiveHumanAuthnPlans(),
            settings: this._projectsService.getClientSettings(),
        }).subscribe({
            next: ({ plans, settings }) => {
                const rows = plans?.data ?? [];
                if (!rows.length && requiresHumanAuthnSubscription(settings?.data)) {
                    this.noActivePlan.set(true);
                    this.loading.set(false);
                    return;
                }
                this._loadProjects();
            },
            error: () => {
                this.error.set('humanAuthnProjects.plansLoadError');
                this.loading.set(false);
            },
        });
    }

    private _loadProjects(): void {
        this._projectsService.listProjects().subscribe({
            next: (rows) => {
                this.projects.set(rows);
                this.loading.set(false);
                this._hydrateMembers(rows);
            },
            error: () => {
                this.error.set('humanAuthnProjects.loadError');
                this.loading.set(false);
            },
        });
    }

    private _hydrateMembers(projects: HumanAuthnProject[]): void {
        if (!projects.length) return;
        forkJoin(
            projects.map((project) =>
                this._projectsService.getProjectMembers(project._id).pipe(
                    map((members) => ({ id: project._id, members })),
                    catchError(() => of({ id: project._id, members: [] as HumanAuthnProjectMember[] }))
                )
            )
        ).subscribe((rows) => {
            const byId = Object.fromEntries(rows.map((row) => [row.id, row.members]));
            this.projects.update((list) =>
                list.map((project) => ({
                    ...project,
                    projectMembers: byId[project._id] ?? project.projectMembers,
                }))
            );
        });
    }

    isWorkspaceStaff(): boolean {
        return !!this._projectsService.parseStoredUser()?.staff;
    }

    goToPlans(): void {
        this._router.navigate(['/human-authn/plans']);
    }

    createProject(): void {
        this._router.navigate(['/human-authn/projects', 'new', 'setup', '0']);
    }

    openProject(project: HumanAuthnProject, event?: Event): void {
        event?.stopPropagation();
        this._router.navigate(['/human-authn/projects', project._id, 'setup', '0']);
    }

    openHistory(event?: Event): void {
        event?.stopPropagation();
        this._router.navigate(['/human-authn/history']);
    }

    openSection(project: HumanAuthnProject, step: number, event: Event): void {
        event.stopPropagation();
        this._router.navigate(['/human-authn/projects', project._id, 'setup', String(step)]);
    }

    membersForCard(project: HumanAuthnProject): HumanAuthnProjectMember[] {
        return (project.projectMembers ?? []).filter((member) => member.staff);
    }

    formatAcronym(name?: string): string {
        if (!name?.trim()) return '?';
        const matches = name.match(/\b(\w)/g);
        return matches?.slice(0, 2).join('').toUpperCase() ?? '?';
    }

    onFlowStatusToggle(event: MatSlideToggleChange, project: HumanAuthnProject): void {
        const flow = this.currentFlow(project);
        if (!flow?._id) {
            event.source.checked = !event.source.checked;
            return;
        }
        const nextStatus = event.checked ? 'active' : 'draft';
        this._projectsService.updateProjectFlow(flow._id, { status: nextStatus }).subscribe({
            next: (res) => {
                const status = res?.data?.status ?? nextStatus;
                this.projects.update((list) =>
                    list.map((row) => {
                        if (row._id !== project._id) return row;
                        return {
                            ...row,
                            projectFlows:
                                row.projectFlows?.map((item) =>
                                    item._id === flow._id ? { ...item, status } : item
                                ) ?? [],
                        };
                    })
                );
            },
            error: () => {
                event.source.checked = !event.checked;
            },
        });
    }

    flowToggleChecked(flow: HumanAuthnProjectFlow | null): boolean {
        return !!flow?.status && flow.status !== 'draft';
    }

    currentFlow(project: HumanAuthnProject): HumanAuthnProjectFlow | null {
        const flows = project.projectFlows;
        if (!flows?.length) return null;
        const active = flows.find((flow) => flow.status && flow.status !== 'draft');
        return active ?? flows[0];
    }

    isDraftFlow(flow: HumanAuthnProjectFlow | null): boolean {
        return !flow?.status || flow.status === 'draft';
    }

    formatUpdated(date?: string): string {
        if (!date) return '—';
        return DateTime.fromISO(date).toFormat('MMM dd, yyyy');
    }
}
