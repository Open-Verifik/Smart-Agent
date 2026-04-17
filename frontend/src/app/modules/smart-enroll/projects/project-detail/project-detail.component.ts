import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { SmartEnrollProjectsService } from '../smart-enroll-projects.service';
import type { EnrollClientRef, EnrollProject, EnrollProjectFlow } from '../smart-enroll-projects.types';

interface SectionSummary {
    key: string;
    titleKey: string;
    summaryKey?: string;
    summaryParams?: Record<string, unknown>;
    step: number;
    icon: string;
    badgeKey?: string;
}

/**
 * Read-only Overview for a Smart Enroll project.
 *
 * Privy-style summary card + section cards that deep-link into the wizard at
 * `/smart-enroll/projects/:projectId/setup/:step`. The legacy `?section=...`
 * query-param panels are kept as a thin compatibility layer for incoming links.
 */
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

    flow = computed<EnrollProjectFlow | null>(() => {
        const flows = this.project()?.projectFlows;
        if (!flows?.length) return null;
        const active = flows.find((f) => f.status && f.status !== 'draft');
        return active ?? flows[0];
    });

    target = computed<'personal' | 'business'>(() => {
        const t = (this.flow() as EnrollProjectFlow & { target?: 'personal' | 'business' })?.target;
        return t === 'business' ? 'business' : 'personal';
    });

    sections = computed<SectionSummary[]>(() => {
        const f = this.flow() as
            | (EnrollProjectFlow & {
                  signUpForm?: any;
                  documents?: any;
                  business?: any;
                  liveness?: any;
                  representatives?: any;
                  integrations?: any;
                  steps?: any;
              })
            | null;
        const target = this.target();
        const branding = this.project()?.branding ?? {};
        const docs = target === 'business' ? f?.business : f?.documents;
        const docCountries = (docs?.documentTypes?.length as number) ?? 0;

        const items: SectionSummary[] = [
            {
                key: 'basic',
                titleKey: 'smartEnrollProjects.setup.steps.basic_setup',
                step: 0,
                icon: 'tune',
                summaryKey: 'smartEnrollProjects.detail.summary.basic',
                summaryParams: {
                    countries: this.project()?.allowedCountries?.length ?? 0,
                },
            },
            {
                key: 'signup',
                titleKey: 'smartEnrollProjects.setup.steps.signup_form',
                step: 1,
                icon: 'edit_note',
                summaryKey: 'smartEnrollProjects.detail.summary.signup',
                summaryParams: {
                    email: f?.signUpForm?.email ? '✓' : '—',
                    phone: f?.signUpForm?.phone ? '✓' : '—',
                },
            },
            {
                key: 'documents',
                titleKey: target === 'business'
                    ? 'smartEnrollProjects.setup.steps.business'
                    : 'smartEnrollProjects.setup.steps.documents',
                step: 2,
                icon: 'document_scanner',
                summaryKey: 'smartEnrollProjects.detail.summary.documents',
                summaryParams: { count: docCountries },
                badgeKey: target === 'business' ? 'smartEnrollProjects.detail.summary.business' : undefined,
            },
            {
                key: target === 'business' ? 'representatives' : 'liveness',
                titleKey: target === 'business'
                    ? 'smartEnrollProjects.setup.steps.representatives'
                    : 'smartEnrollProjects.setup.steps.liveness',
                step: 3,
                icon: target === 'business' ? 'group' : 'face',
                summaryKey: target === 'business'
                    ? 'smartEnrollProjects.detail.summary.representatives'
                    : 'smartEnrollProjects.detail.summary.liveness',
                summaryParams: target === 'business'
                    ? {
                          min: f?.representatives?.minRepresentatives ?? 1,
                          max: f?.representatives?.maxRepresentatives ?? 1,
                      }
                    : { score: Math.round(((f?.liveness?.minScore as number) ?? 0) * 100) },
            },
            {
                key: 'integrations',
                titleKey: 'smartEnrollProjects.setup.steps.integrations',
                step: 4,
                icon: 'cable',
                summaryKey: 'smartEnrollProjects.detail.summary.integrations',
                summaryParams: {
                    redirect: f?.integrations?.redirectUrl ? '✓' : '—',
                    webhook: f?.integrations?.webhook ? '✓' : '—',
                },
            },
            {
                key: 'ui',
                titleKey: 'smartEnrollProjects.setup.steps.user_interface',
                step: 5,
                icon: 'palette',
                summaryKey: 'smartEnrollProjects.detail.summary.ui',
                summaryParams: {
                    logo: branding.logo ? '✓' : '—',
                    color: branding.buttonColor || branding.titleColor || '—',
                },
            },
        ];

        return items;
    });

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

    openSetup(step: number = 0): void {
        const id = this.project()?._id;
        if (!id) return;
        this._router.navigate(['/smart-enroll/projects', id, 'setup', step]);
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
