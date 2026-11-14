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
                        <div class="row">
                            <span>{{ 'smartAccessProjects.loginDetail.method' | transloco }}</span>
                            <strong class="flex items-center gap-1.5">
                                <mat-icon class="!h-4 !w-4 !text-[16px] text-stone-500">{{ getAccessModeIcon(r) }}</mat-icon>
                                <span>{{ getAccessModeKey(r) | transloco }}</span>
                            </strong>
                        </div>
                        <div class="row">
                            <span>{{ 'smartAccessProjects.loginDetail.sourceType' | transloco }}</span>
                            <strong>
                                <span class="source-badge" [ngClass]="'source-badge--' + getSourceType(r)">
                                    {{ getSourceTypeKey(r) | transloco }}
                                </span>
                            </strong>
                        </div>
                        <div class="row">
                            <span>{{ 'smartAccessProjects.loginDetail.sourceProject' | transloco }}</span>
                            <strong>
                                @if (getSourceProjectRouterLink(r); as pLink) {
                                    <a [routerLink]="pLink" class="link-item">
                                        <span>{{ getSourceProjectName(r) }}</span>
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">open_in_new</mat-icon>
                                    </a>
                                } @else {
                                    {{ getSourceProjectName(r) || '—' }}
                                }
                            </strong>
                        </div>
                        <div class="row">
                            <span>{{ 'smartAccessProjects.loginDetail.appRegistration' | transloco }}</span>
                            <strong>
                                @if (getAppRegistrationRouterLink(r); as rLink) {
                                    <a [routerLink]="rLink" class="link-item font-mono text-xs">
                                        <span>{{ getAppRegistrationId(r) }}</span>
                                        <mat-icon class="!h-3.5 !w-3.5 !text-[14px]">open_in_new</mat-icon>
                                    </a>
                                } @else if (getAppRegistrationId(r)) {
                                    <code class="font-mono text-xs text-stone-700 dark:text-stone-300">{{ getAppRegistrationId(r) }}</code>
                                } @else {
                                    —
                                }
                            </strong>
                        </div>
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
            align-items: center;
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
        .link-item {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            color: #2563eb;
            text-decoration: underline;
            text-underline-offset: 2px;
        }
        .link-item:hover {
            color: #1d4ed8;
        }
        .source-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.125rem 0.5rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        .source-badge--smartEnroll {
            background: #eff6ff;
            color: #1d4ed8;
            border: 1px solid #bfdbfe;
        }
        .source-badge--smartBusiness {
            background: #fefce8;
            color: #a16207;
            border: 1px solid #fef08a;
        }
        .source-badge--humanAuthn {
            background: #faf5ff;
            color: #7e22ce;
            border: 1px solid #e9d5ff;
        }
        .source-badge--csvWhitelist {
            background: #fff7ed;
            color: #c2410c;
            border: 1px solid #ffedd5;
        }
        .source-badge--apiWhitelist {
            background: #f0fdfa;
            color: #0f766e;
            border: 1px solid #ccfbf1;
        }
        .source-badge--open {
            background: #f0fdf4;
            color: #15803d;
            border: 1px solid #bbf7d0;
        }
        .source-badge--legacy {
            background: #f8fafc;
            color: #475569;
            border: 1px solid #e2e8f0;
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

    getAccessMode(r: AppLoginRow): string {
        return r.accessMode || r.type || 'email';
    }

    getAccessModeIcon(r: AppLoginRow): string {
        const mode = this.getAccessMode(r);
        switch (mode) {
            case 'email':
                return 'mail';
            case 'phone':
                return 'phone';
            case 'faceLiveness':
            case 'biometrics':
                return 'fingerprint';
            case 'humanId':
                return 'verified_user';
            case 'passkey':
                return 'security';
            default:
                return 'vpn_key';
        }
    }

    getAccessModeKey(r: AppLoginRow): string {
        const mode = this.getAccessMode(r);
        return `smartAccessProjects.loginDetail.method_${mode}`;
    }

    getSourceType(r: AppLoginRow): string {
        return r.sourceType || 'legacy';
    }

    getSourceTypeKey(r: AppLoginRow): string {
        return `smartAccessProjects.loginDetail.sourceType_${this.getSourceType(r)}`;
    }

    getSourceProjectId(r: AppLoginRow): string {
        if (!r.sourceProject) return '';
        if (typeof r.sourceProject === 'object' && r.sourceProject !== null) {
            return r.sourceProject._id || '';
        }
        return String(r.sourceProject);
    }

    getSourceProjectName(r: AppLoginRow): string {
        if (!r.sourceProject) return '';
        if (typeof r.sourceProject === 'object' && r.sourceProject !== null) {
            return r.sourceProject.name || r.sourceProject._id || '';
        }
        return String(r.sourceProject);
    }

    getSourceProjectRouterLink(r: AppLoginRow): string[] | null {
        const id = this.getSourceProjectId(r);
        if (!id) return null;
        const type = this.getSourceType(r);
        if (type === 'humanAuthn') {
            return ['/human-authn/projects', id];
        }
        if (type === 'smartBusiness') {
            return ['/smart-business/projects', id];
        }
        if (type === 'smartEnroll') {
            return ['/smart-enroll/projects', id];
        }
        if (typeof r.sourceProject === 'object' && r.sourceProject !== null) {
            if (r.sourceProject.type === 'humanAuthn') return ['/human-authn/projects', id];
            if (r.sourceProject.target === 'business') return ['/smart-business/projects', id];
        }
        return ['/smart-enroll/projects', id];
    }

    getAppRegistrationId(r: AppLoginRow): string {
        if (r.appRegistration) {
            if (typeof r.appRegistration === 'object' && r.appRegistration !== null) {
                return r.appRegistration._id || '';
            }
            return String(r.appRegistration);
        }
        if (r.businessRegistration) {
            if (typeof r.businessRegistration === 'object' && r.businessRegistration !== null) {
                return r.businessRegistration._id || '';
            }
            return String(r.businessRegistration);
        }
        return '';
    }

    getAppRegistrationRouterLink(r: AppLoginRow): string[] | null {
        const regId = this.getAppRegistrationId(r);
        const projId = this.getSourceProjectId(r);
        if (!regId || !projId) return null;

        const type = this.getSourceType(r);
        if (type === 'smartEnroll') {
            return ['/smart-enroll/projects', projId, 'records', regId];
        }
        if (type === 'smartBusiness') {
            return ['/smart-business/projects', projId, 'records', regId];
        }
        return null;
    }
}
