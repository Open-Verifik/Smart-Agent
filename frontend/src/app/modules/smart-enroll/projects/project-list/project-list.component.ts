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
import { SmartEnrollProjectsService } from '../smart-enroll-projects.service';
import type { EnrollProject, EnrollProjectFlow, EnrollProjectMember } from '../smart-enroll-projects.types';

@Component({
    selector: 'project-list',
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
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
    private _clipboard = inject(Clipboard);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _router = inject(Router);
    projects = signal<EnrollProject[]>([]);
    loading = signal(true);
    error = signal<string | null>(null);
    noActivePlan = signal(false);

    ngOnInit(): void {
        const user = this._projectsService.parseStoredUser();
        if (user?.staff) {
            this._loadProjects();
            return;
        }
        this._projectsService.getActiveSmartEnrollPlans().subscribe({
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
                this.error.set('smartEnrollProjects.plansLoadError');
                this.loading.set(false);
            },
        });
    }

    goToPlans(): void {
        this._router.navigate(['/smart-enroll/plans']);
    }

    openProject(project: EnrollProject, event?: Event): void {
        event?.stopPropagation();
        this._router.navigate(['/smart-enroll/projects', project._id]);
    }

    openRecords(project: EnrollProject, event?: Event): void {
        event?.stopPropagation();
        this._router.navigate(['/smart-enroll/projects', project._id, 'records']);
    }

    openStaff(project: EnrollProject, event?: Event): void {
        event?.stopPropagation();
        this._router.navigate(['/smart-enroll/projects', project._id, 'staff']);
    }

    /**
     * Public Smart Enroll entry on the KYC / access host (`/sign-up/:projectId`), same as Verifik access app.
     */
    liveEnrollmentUrl(project: EnrollProject): string {
        const base = (environment.kycBaseUrl ?? '').replace(/\/+$/, '');
        return `${base}/sign-up/${project._id}`;
    }

    openLiveEnrollment(project: EnrollProject, event?: Event): void {
        event?.stopPropagation();
        const url = this.liveEnrollmentUrl(project);
        if (typeof window !== 'undefined') {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }

    copyLiveEnrollmentUrl(project: EnrollProject, event?: Event): void {
        event?.stopPropagation();
        this._clipboard.copy(this.liveEnrollmentUrl(project));
    }

    openSection(project: EnrollProject, section: string, event: Event): void {
        event.stopPropagation();
        this._router.navigate(['/smart-enroll/projects', project._id], {
            queryParams: { section },
        });
    }

    membersForCard(project: EnrollProject): EnrollProjectMember[] {
        return (project.projectMembers ?? []).filter((m) => m.staff);
    }

    formatAcronym(name?: string): string {
        if (!name?.trim()) return '?';
        const matches = name.match(/\b(\w)/g);
        return matches?.slice(0, 2).join('').toUpperCase() ?? '?';
    }

    onFlowStatusToggle(event: MatSlideToggleChange, project: EnrollProject): void {
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

    flowToggleChecked(flow: EnrollProjectFlow | null): boolean {
        return !!flow?.status && flow.status !== 'draft';
    }

    currentFlow(project: EnrollProject): EnrollProjectFlow | null {
        const flows = project.projectFlows;
        if (!flows?.length) return null;
        const active = flows.find((f) => f.status && f.status !== 'draft');
        return active ?? flows[0];
    }

    isDraftFlow(flow: EnrollProjectFlow | null): boolean {
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
                this.error.set('smartEnrollProjects.loadError');
                this.loading.set(false);
            },
        });
    }
}
