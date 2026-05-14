import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { environment } from 'environments/environment';
import { Subscription } from 'rxjs';
import { smartAccessLoginFlow } from '../login-flow.util';
import type { AccessProject } from '../smart-access-projects.types';
import { SmartAccessProjectsService } from '../smart-access-projects.service';

@Component({
    selector: 'smart-access-project-detail',
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
    template: `
        <div class="page" *transloco="let t">
            <div class="inner">
                @if (loading()) {
                    <div class="state-loading"><mat-spinner diameter="40"></mat-spinner></div>
                } @else if (errorKey()) {
                    <div class="banner-error">{{ errorKey()! | transloco }}</div>
                } @else {
                    @if (project(); as p) {
                        <div class="crumb">
                            <a routerLink="/chat" class="crumb-link">Verifik</a>
                            <span class="sep">/</span>
                            <a routerLink="/smart-access/projects" class="crumb-link">{{ t('smartAccessProjects.title') }}</a>
                            <span class="sep">/</span>
                            <span class="here">{{ p.name || p._id }}</span>
                        </div>

                        <header class="hero">
                            <div>
                                <p class="eyebrow">{{ t('smartAccessProjects.detail.overline') }}</p>
                                <h1 class="title">{{ p.name || t('smartAccessProjects.detail.untitled') }}</h1>
                                <div class="chips">
                                    <span class="pill" [class.on]="loginActive()" [class.off]="!loginActive()">
                                        <span class="dot"></span>
                                        {{ loginActive() ? t('smartAccessProjects.list.active') : t('smartAccessProjects.list.draft') }}
                                    </span>
                                </div>
                            </div>
                            <div class="hero-actions">
                                <button mat-stroked-button type="button" (click)="openSetup()">
                                    {{ t('smartAccessProjects.detail.openSetup') }}
                                </button>
                                <button mat-flat-button color="primary" type="button" (click)="openRecords()">
                                    {{ t('smartAccessProjects.viewRecords') }}
                                </button>
                            </div>
                        </header>

                        <section class="card">
                            <h2>{{ t('smartAccessProjects.detail.liveUrl') }}</h2>
                            <p class="mono">{{ liveUrl() }}</p>
                            <div class="btn-row">
                                <button mat-stroked-button type="button" (click)="openLive()">
                                    {{ t('smartAccessProjects.list.menuLiveSignIn') }}
                                </button>
                                <button mat-button type="button" (click)="copyLiveUrl()">{{ t('smartAccessProjects.detail.copy') }}</button>
                            </div>
                        </section>

                        @if (flow(); as f) {
                            <section class="card">
                                <h2>{{ t('smartAccessProjects.detail.methodsTitle') }}</h2>
                                <ul class="kv">
                                    <li>
                                        <span>{{ t('smartAccessProjects.setup.login_methods.email') }}</span>
                                        <strong>{{ yn(f.loginSettings?.email) }}</strong>
                                    </li>
                                    <li>
                                        <span>{{ t('smartAccessProjects.setup.login_methods.phone') }}</span>
                                        <strong>{{ yn(f.loginSettings?.phone) }}</strong>
                                    </li>
                                    <li>
                                        <span>{{ t('smartAccessProjects.setup.login_methods.face_liveness') }}</span>
                                        <strong>{{ yn(f.loginSettings?.faceLiveness) }}</strong>
                                    </li>
                                </ul>
                            </section>
                            <section class="card">
                                <h2>{{ t('smartAccessProjects.detail.integrationsTitle') }}</h2>
                                <ul class="kv">
                                    <li>
                                        <span>{{ t('smartAccessProjects.setup.whitelist.redirect_url') }}</span>
                                        <strong>{{ emptyOr(f.integrations?.redirectUrl) }}</strong>
                                    </li>
                                    <li>
                                        <span>{{ t('smartAccessProjects.setup.whitelist.webhook') }}</span>
                                        <strong>{{ emptyOr(f.integrations?.webhook ?? '') }}</strong>
                                    </li>
                                </ul>
                            </section>
                        }
                    }
                }
            </div>
        </div>
    `,
    styles: `
        .page {
            min-height: 100%;
            background: rgb(249 250 251);
            padding-bottom: 2rem;
        }
        .inner {
            max-width: 54rem;
            margin: 0 auto;
            padding: 2rem 1.25rem;
        }
        .state-loading {
            display: flex;
            justify-content: center;
            padding: 4rem;
        }
        .banner-error {
            border-radius: 12px;
            border: 1px solid rgb(254 202 202);
            background: rgb(254 242 242);
            color: rgb(127 29 29);
            padding: 0.85rem 1rem;
        }
        .crumb {
            font-size: 0.75rem;
            color: rgb(107 114 128);
            margin-bottom: 1.25rem;
        }
        .crumb-link {
            color: rgb(55 65 81);
            text-decoration: underline;
            text-underline-offset: 2px;
        }
        .sep {
            margin: 0 0.35rem;
            color: rgb(209 213 219);
        }
        .here {
            color: rgb(55 65 81);
            font-weight: 600;
        }
        .hero {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            gap: 1rem;
            margin-bottom: 1.25rem;
        }
        .eyebrow {
            margin: 0;
            font-size: 0.75rem;
            font-weight: 650;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: rgb(100 116 139);
        }
        .title {
            margin: 0.35rem 0 0;
            font-size: 1.75rem;
            font-weight: 650;
            color: rgb(17 24 39);
        }
        .chips {
            margin-top: 0.5rem;
        }
        .pill {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            border-radius: 999px;
            padding: 0.2rem 0.55rem 0.2rem 0.4rem;
            font-size: 0.72rem;
            font-weight: 650;
        }
        .dot {
            width: 6px;
            height: 6px;
            border-radius: 999px;
        }
        .pill.on {
            background: rgb(219 234 254);
            color: rgb(30 64 175);
        }
        .pill.on .dot {
            background: rgb(37 99 235);
        }
        .pill.off {
            background: rgb(243 244 246);
            color: rgb(75 85 99);
        }
        .pill.off .dot {
            background: rgb(156 163 175);
        }
        .hero-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        .card {
            margin-top: 0.85rem;
            border: 1px solid rgb(229 231 235);
            border-radius: 14px;
            padding: 1rem 1.1rem;
            background: #fff;
        }
        .card h2 {
            margin: 0 0 0.65rem;
            font-size: 1rem;
            font-weight: 650;
            color: rgb(55 65 81);
        }
        .mono {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
            font-size: 0.8rem;
            word-break: break-all;
            color: rgb(71 85 105);
            margin: 0 0 0.85rem;
        }
        .btn-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        .kv {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .kv li {
            display: flex;
            justify-content: space-between;
            gap: 0.75rem;
            padding: 0.35rem 0;
            border-bottom: 1px solid rgb(243 244 246);
            font-size: 0.9rem;
            color: rgb(71 85 105);
        }
        .kv li:last-child {
            border-bottom: none;
        }
        .kv strong {
            color: rgb(17 24 39);
            font-weight: 600;
            text-align: right;
            max-width: 60%;
        }
    `,
})
export class AccessProjectDetailComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _projectsService = inject(SmartAccessProjectsService);
    private _clipboard = inject(Clipboard);
    private _transloco = inject(TranslocoService);

    private _paramSub?: Subscription;

    project = signal<AccessProject | null>(null);
    loading = signal(true);
    errorKey = signal<string | null>(null);

    flow = computed(() => smartAccessLoginFlow(this.project()));

    loginActive = computed(() => {
        const f = this.flow();
        return !!f?.status && f.status !== 'draft';
    });

    liveUrl = computed(() => {
        const p = this.project();
        const base = `${environment.kycBaseUrl ?? ''}`.replace(/\/+$/, '');
        if (!p || !base) return '';
        return `${base}/sign-in/${p._id}`;
    });

    ngOnInit(): void {
        this._paramSub = this._route.paramMap.subscribe((pm) => {
            const id = pm.get('projectId');
            if (!id) {
                void this._router.navigate(['/smart-access/projects']);
                return;
            }
            this._projectsService.getProject(id).subscribe({
                next: (proj) => {
                    if (!proj) {
                        this.errorKey.set('smartAccessProjects.projectNotFound');
                    } else {
                        this.project.set(proj);
                    }
                    this.loading.set(false);
                },
                error: () => {
                    this.errorKey.set('smartAccessProjects.loadError');
                    this.loading.set(false);
                },
            });
        });
    }

    ngOnDestroy(): void {
        this._paramSub?.unsubscribe();
    }

    openSetup(): void {
        const id = this.project()?._id;
        if (!id) return;
        void this._router.navigate(['/smart-access/projects', id, 'setup', 0]);
    }

    openRecords(): void {
        const id = this.project()?._id;
        if (!id) return;
        void this._router.navigate(['/smart-access/projects', id, 'records']);
    }

    openLive(): void {
        const url = this.liveUrl();
        if (!url || typeof window === 'undefined') return;
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    copyLiveUrl(): void {
        const url = this.liveUrl();
        if (!url) return;
        this._clipboard.copy(url);
    }

    yn(value: unknown): string {
        return value ? this._transloco.translate('smartAccessProjects.detail.yes') : this._transloco.translate('smartAccessProjects.detail.no');
    }

    emptyOr(v: string | null | undefined): string {
        const s = `${v ?? ''}`.trim();
        return s || this._transloco.translate('smartAccessProjects.detail.noValue');
    }
}
