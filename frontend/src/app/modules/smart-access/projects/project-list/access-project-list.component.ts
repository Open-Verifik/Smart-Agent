import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { environment } from 'environments/environment';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';
import { smartAccessLoginFlow } from '../login-flow.util';
import type { AccessProject, AccessProjectFlow } from '../smart-access-projects.types';
import type { EnrollProjectMember } from '../../../smart-enroll/projects/smart-enroll-projects.types';
import { SmartAccessProjectsService } from '../smart-access-projects.service';

@Component({
    selector: 'smart-access-project-list',
    standalone: true,
    imports: [
        ClipboardModule,
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        TranslocoModule,
    ],
    templateUrl: './access-project-list.component.html',
    styleUrls: ['./access-project-list.component.scss'],
})
export class AccessProjectListComponent implements OnInit {
    private _clipboard = inject(Clipboard);
    private _projectsService = inject(SmartAccessProjectsService);
    private _router = inject(Router);
    private _authGate = inject(AuthRequiredGateService);
    projects = signal<AccessProject[]>([]);
    loading = signal(true);
    error = signal<string | null>(null);
    noActivePlan = signal(false);

    ngOnInit(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => this._loadProjectsAfterAuthGate(),
            panelClass: 'auth-required-dialog',
        });
    }

    private _loadProjectsAfterAuthGate(): void {
        const user = this._projectsService.parseStoredUser();
        if (user?.staff) {
            this._loadProjects();
            return;
        }
        this._projectsService.getActiveSmartAccessPlans().subscribe({
            next: (res) => {
                const rows = res?.data ?? [];
                if (!rows.length) {
                    this.noActivePlan.set(true);
                    this.loading.set(false);
                    return;
                }
                this._loadProjects();
            },
            error: () => {
                this.error.set('smartAccessProjects.plansLoadError');
                this.loading.set(false);
            },
        });
    }

    goToPlans(): void {
        this._router.navigate(['/smart-access/plans']);
    }

    isWorkspaceStaff(): boolean {
        return !!this._projectsService.parseStoredUser()?.staff;
    }

    createProject(): void {
        void this._router.navigate(['/smart-access/projects', 'new', 'setup', '0']);
    }

    openProject(project: AccessProject, event?: Event): void {
        event?.stopPropagation();
        void this._router.navigate(['/smart-access/projects', project._id]);
    }

    openRecords(project: AccessProject, event?: Event): void {
        event?.stopPropagation();
        void this._router.navigate(['/smart-access/projects', project._id, 'records']);
    }

    openStaff(project: AccessProject, event?: Event): void {
        event?.stopPropagation();
        void this._router.navigate(['/smart-access/projects', project._id, 'staff']);
    }

    liveSignInUrl(project: AccessProject): string {
        const base = `${environment.kycBaseUrl ?? ''}`.replace(/\/+$/, '');
        return `${base}/sign-in/${project._id}`;
    }

    openLiveSignIn(project: AccessProject, event?: Event): void {
        event?.stopPropagation();
        const url = this.liveSignInUrl(project);
        if (typeof window !== 'undefined') {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }

    copyLiveSignInUrl(project: AccessProject, event?: Event): void {
        event?.stopPropagation();
        this._clipboard.copy(this.liveSignInUrl(project));
    }

    gotoSetup(project: AccessProject, step: number, event: Event): void {
        event.stopPropagation();
        void this._router.navigate(['/smart-access/projects', project._id, 'setup', step]);
    }

    membersForCard(project: AccessProject): EnrollProjectMember[] {
        return (project.projectMembers ?? []).filter((m) => m.staff);
    }

    formatAcronym(name?: string): string {
        if (!name?.trim()) return '?';
        const matches = name.match(/\b(\w)/g);
        return matches?.slice(0, 2).join('').toUpperCase() ?? '?';
    }

    onFlowStatusToggle(event: MatSlideToggleChange, project: AccessProject): void {
        const flow = smartAccessLoginFlow(project);
        if (!flow?._id) {
            event.source.checked = !event.source.checked;
            return;
        }
        const nextStatus = event.checked ? 'active' : 'draft';
        this._projectsService.updateProjectFlow(flow._id, { status: nextStatus }).subscribe({
            next: (res) => {
                const status = res?.data?.status ?? nextStatus;
                this.projects.update((list) =>
                    list.map((p) => {
                        if (p._id !== project._id) return p;
                        return {
                            ...p,
                            projectFlows:
                                p.projectFlows?.map((f) =>
                                    f._id === flow._id ? { ...f, status } : f
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

    flowToggleChecked(flow: AccessProjectFlow | null): boolean {
        return !!flow?.status && flow.status !== 'draft';
    }

    currentFlow(project: AccessProject): AccessProjectFlow | null {
        return smartAccessLoginFlow(project);
    }

    isDraftFlow(flow: AccessProjectFlow | null): boolean {
        return !flow?.status || flow.status === 'draft';
    }

    formatUpdated(date?: string): string {
        if (!date) return '—';
        return DateTime.fromISO(date).toFormat('MMM dd, yyyy');
    }

    private _loadProjects(): void {
        this._projectsService.listProjects().subscribe({
            next: (list) => {
                this.projects.set(list);
                this.loading.set(false);
            },
            error: () => {
                this.error.set('smartAccessProjects.loadError');
                this.loading.set(false);
            },
        });
    }
}
