import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@jsverse/transloco';
import type { AppLoginRow } from '../smart-access-projects.types';
import { SmartAccessProjectsService } from '../smart-access-projects.service';

@Component({
    selector: 'smart-access-login-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule],
    template: `
        <div class="wrap">
            @if (loading()) {
                <div class="state"><mat-spinner diameter="36"></mat-spinner></div>
            } @else if (error()) {
                <div class="err">{{ error()! | transloco }}</div>
            } @else {
                @if (row(); as r) {
                    <nav class="breadcrumb">
                        <a routerLink="/chat" class="crumb">{{ 'smartAccessProjects.detail.breadcrumbBrand' | transloco }}</a>
                        <span class="slash">/</span>
                        <a routerLink="/smart-access/projects" class="crumb">{{ 'smartAccessProjects.title' | transloco }}</a>
                        <span class="slash">/</span>
                        <a [routerLink]="['/smart-access/projects', projectId]" class="crumb">{{ projectName || projectId }}</a>
                        <span class="slash">/</span>
                        <a [routerLink]="['/smart-access/projects', projectId, 'records']" class="crumb">{{ 'smartAccessProjects.recordsTitle' | transloco }}</a>
                        <span class="slash">/</span>
                        <span class="leaf">{{ r._id }}</span>
                    </nav>
                    <div class="head">
                        <button mat-icon-button type="button" (click)="back()" [attr.aria-label]="'smartAccessProjects.backToProject' | transloco">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <div>
                            <h1 class="page-title">{{ 'smartAccessProjects.loginDetail.title' | transloco }}</h1>
                            <p class="status-line">{{ r.status ?? '—' }}</p>
                        </div>
                    </div>
                    <div class="detail-card">
                        <div class="row"><span>{{ 'smartAccessProjects.colName' | transloco }}</span><strong>{{ r.name ?? '—' }}</strong></div>
                        <div class="row"><span>{{ 'smartAccessProjects.colEmail' | transloco }}</span><strong>{{ r.email ?? '—' }}</strong></div>
                        <div class="row"><span>{{ 'smartAccessProjects.colPhone' | transloco }}</span><strong>{{ r.phone ?? '—' }}</strong></div>
                        <div class="row"><span>{{ 'smartAccessProjects.colCreated' | transloco }}</span><strong>{{ r.createdAt ?? '—' }}</strong></div>
                    </div>
                }
            }
        </div>
    `,
    styles: `
        .wrap {
            padding: 1.5rem 1.25rem 2.5rem;
            max-width: 48rem;
            margin: 0 auto;
        }
        .state {
            padding: 3rem;
            display: flex;
            justify-content: center;
        }
        .err {
            border-radius: 12px;
            border: 1px solid rgb(254 202 202);
            background: rgb(254 242 242);
            color: rgb(127 29 29);
            padding: 0.85rem 1rem;
        }
        .breadcrumb {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.35rem;
            margin-bottom: 1rem;
            font-size: 0.8rem;
            font-weight: 500;
            color: rgb(100 116 139);
        }
        .slash {
            color: rgb(203 213 225);
        }
        .crumb {
            color: inherit;
            text-decoration: underline;
            text-underline-offset: 2px;
            cursor: pointer;
        }
        .leaf {
            font-weight: 600;
            color: rgb(15 23 42);
            word-break: break-all;
        }
        .head {
            display: flex;
            gap: 0.5rem;
            align-items: flex-start;
            margin-bottom: 1.25rem;
        }
        .page-title {
            margin: 0;
            font-size: 1.5rem;
            font-weight: 650;
        }
        .status-line {
            margin: 0.35rem 0 0;
            color: rgb(100 116 139);
        }
        .detail-card {
            border: 1px solid rgb(229 231 235);
            border-radius: 14px;
            overflow: hidden;
            background: #fff;
        }
        .row {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            padding: 0.75rem 1rem;
            border-bottom: 1px solid rgb(243 244 246);
            font-size: 0.9rem;
            color: rgb(71 85 105);
        }
        .row:last-child {
            border-bottom: none;
        }
        .row strong {
            color: rgb(17 24 39);
            font-weight: 600;
        }
    `,
})
export class AccessLoginDetailComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _projectsService = inject(SmartAccessProjectsService);

    loading = signal(true);
    error = signal<string | null>(null);
    row = signal<AppLoginRow | null>(null);
    projectId = '';
    projectName = '';

    ngOnInit(): void {
        this.projectId = this._route.snapshot.paramMap.get('projectId') ?? '';
        const loginId = this._route.snapshot.paramMap.get('loginId');
        if (!this.projectId || !loginId) {
            void this._router.navigate(['/smart-access/projects']);
            return;
        }
        this._projectsService.getProject(this.projectId).subscribe({
            next: (p) => {
                this.projectName = p?.name ?? '';
            },
        });
        this._projectsService.getAppLogin(loginId).subscribe({
            next: (r) => {
                if (!r) this.error.set('smartAccessProjects.projectNotFound');
                this.row.set(r);
                this.loading.set(false);
            },
            error: () => {
                this.error.set('smartAccessProjects.recordsLoadError');
                this.loading.set(false);
            },
        });
    }

    back(): void {
        void this._router.navigate(['/smart-access/projects', this.projectId, 'records']);
    }
}
