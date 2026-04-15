import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { SmartEnrollProjectsService } from '../smart-enroll-projects.service';
import type { EnrollClientRef, EnrollProject, EnrollProjectFlow } from '../smart-enroll-projects.types';

@Component({
    selector: 'project-detail',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ClipboardModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _projectsService = inject(SmartEnrollProjectsService);
    private _clipboard = inject(Clipboard);
    private _transloco = inject(TranslocoService);

    private _sectionSub?: Subscription;

    project = signal<EnrollProject | null>(null);
    loading = signal(true);
    errorKey = signal<string | null>(null);
    section = signal<string | null>(null);

    ngOnInit(): void {
        const id = this._route.snapshot.paramMap.get('projectId');
        if (!id) {
            this.goToList();
            return;
        }
        this._sectionSub = this._route.queryParamMap
            .pipe(map((q) => q.get('section')))
            .subscribe((s) => this.section.set(s));

        this._projectsService.getProject(id).subscribe({
            next: (p) => {
                this.project.set(p);
                this.loading.set(false);
                if (!p) this.errorKey.set('smartEnrollProjects.projectNotFound');
            },
            error: () => {
                this.errorKey.set('smartEnrollProjects.loadError');
                this.loading.set(false);
            },
        });
    }

    ngOnDestroy(): void {
        this._sectionSub?.unsubscribe();
    }

    goToList(): void {
        this._router.navigate(['/smart-enroll/projects']);
    }

    goToRecords(): void {
        const id = this.project()?._id;
        if (!id) return;
        this._router.navigate(['/smart-enroll/projects', id, 'records']);
    }

    goToStaff(): void {
        const id = this.project()?._id;
        if (!id) return;
        this._router.navigate(['/smart-enroll/projects', id, 'staff']);
    }

    clearSection(): void {
        const id = this.project()?._id;
        if (!id) return;
        this._router.navigate(['/smart-enroll/projects', id], { queryParams: {} });
    }

    sectionTitleKey(): string {
        const s = this.section();
        const mapKeys: Record<string, string> = {
            signup: 'smartEnrollProjects.detail.sectionSignup',
            documents: 'smartEnrollProjects.detail.sectionDocuments',
            liveness: 'smartEnrollProjects.detail.sectionLiveness',
            api: 'smartEnrollProjects.detail.sectionApi',
        };
        return s ? mapKeys[s] ?? 'smartEnrollProjects.detailTitle' : 'smartEnrollProjects.detailTitle';
    }

    currentFlow(project: EnrollProject | null): EnrollProjectFlow | null {
        const flows = project?.projectFlows;
        if (!flows?.length) return null;
        const active = flows.find((f) => f.status && f.status !== 'draft');
        return active ?? flows[0];
    }

    clientId(project: EnrollProject | null): string | null {
        if (!project?.client) return null;
        return typeof project.client === 'string' ? project.client : (project.client as EnrollClientRef)._id;
    }

    docsUrl(): string {
        const lang = this._transloco.getActiveLang();
        const useEn = lang === 'fr' || lang !== 'es';
        return useEn
            ? 'https://docs.verifik.co/services/smart-enroll'
            : 'https://docs.verifik.co/verifik-es/services/smart-enroll';
    }

    copyValue(value: string, event?: Event): void {
        event?.stopPropagation();
        if (value) this._clipboard.copy(value);
    }

    formatDate(date?: string): string {
        if (!date) return '—';
        return DateTime.fromISO(date).toFormat('MMM dd, yyyy HH:mm');
    }
}
