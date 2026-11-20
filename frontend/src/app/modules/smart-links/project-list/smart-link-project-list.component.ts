import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import QRCode from 'qrcode';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';

import { SmartLinksService } from '../smart-links.service';
import type { MintedSmartLinkSession, SmartLinkProject } from '../smart-links.types';

@Component({
    selector: 'smart-link-project-list',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ClipboardModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
    templateUrl: './smart-link-project-list.component.html',
    styleUrls: ['./smart-link-project-list.component.scss'],
})
export class SmartLinkProjectListComponent implements OnInit {
    private _service = inject(SmartLinksService);
    private _clipboard = inject(Clipboard);
    private _router = inject(Router);
    private _authGate = inject(AuthRequiredGateService);
    private _transloco = inject(TranslocoService);

    projects = signal<SmartLinkProject[]>([]);
    loading = signal(false);
    isAuthenticated = signal(false);
    searchTerm = signal('');
    error = signal<string | null>(null);
    copiedProjectId = signal<string | null>(null);

    mintModalOpen = signal(false);
    mintLoading = signal(false);
    mintError = signal<string | null>(null);
    mintTargetProject = signal<SmartLinkProject | null>(null);
    mintedSession = signal<MintedSmartLinkSession | null>(null);
    staticQrDataUrl = signal<string>('');

    filteredProjects = computed(() => {
        const q = this.searchTerm().trim().toLowerCase();
        const items = this.projects();
        if (!q) return items;
        return items.filter((p) => {
            const flow = this._service.extractSmartLinkFlow(p);
            return (
                (p.name || '').toLowerCase().includes(q) ||
                (flow?.slug || '').toLowerCase().includes(q) ||
                (p._id || '').toLowerCase().includes(q)
            );
        });
    });

    ngOnInit(): void {
        const hasToken = typeof localStorage !== 'undefined' && Boolean(localStorage.getItem('accessToken'));
        this.isAuthenticated.set(hasToken);
        if (hasToken) {
            this.loadProjects();
        }
    }

    promptSignIn(): void {
        this._authGate.runWithAuthOrDialog({
            onAuthenticated: () => {
                this.isAuthenticated.set(true);
                this.loadProjects();
            },
            panelClass: 'auth-required-dialog',
        });
    }

    loadProjects(): void {
        this.loading.set(true);
        this.error.set(null);
        this._service.listSmartLinkProjects().subscribe({
            next: (rows) => {
                this.projects.set(rows);
                this.loading.set(false);
            },
            error: (err) => {
                this.error.set(err?.error?.message || this._transloco.translate('smartLinks.list.loadError'));
                this.loading.set(false);
            },
        });
    }

    createNew(): void {
        void this._router.navigate(['/smart-links/projects/new/setup/0']);
    }

    openDetail(project: SmartLinkProject): void {
        if (!project._id) return;
        void this._router.navigate(['/smart-links/projects', project._id]);
    }

    openSetup(project: SmartLinkProject): void {
        if (!project._id) return;
        void this._router.navigate(['/smart-links/projects', project._id, 'setup', 0]);
    }

    publicUrl(project: SmartLinkProject): string {
        return this._service.buildPublicLinkUrl(project);
    }

    flowOf(project: SmartLinkProject) {
        return this._service.extractSmartLinkFlow(project);
    }

    copyPublicUrl(project: SmartLinkProject): void {
        const url = this.publicUrl(project);
        if (!url) return;
        this._clipboard.copy(url);
        this.copiedProjectId.set(project._id || null);
        setTimeout(() => {
            if (this.copiedProjectId() === project._id) {
                this.copiedProjectId.set(null);
            }
        }, 2000);
    }

    mintTestLink(project: SmartLinkProject): void {
        if (!project._id) return;
        this.mintTargetProject.set(project);
        this.mintModalOpen.set(true);
        this.mintLoading.set(true);
        this.mintError.set(null);
        this.mintedSession.set(null);
        this.staticQrDataUrl.set('');

        const pub = this.publicUrl(project);
        if (pub) {
            void QRCode.toDataURL(pub, { margin: 1, width: 220 }).then((url) => this.staticQrDataUrl.set(url));
        }

        this._service
            .createSession(project._id, {
                requestedMode: this.flowOf(project)?.routing?.defaultMode || 'prompt',
                createdByChannel: 'portal',
                externalRefId: `test-${Date.now()}`,
            })
            .subscribe({
                next: (session) => {
                    this.mintedSession.set(session);
                    this.mintLoading.set(false);
                },
                error: (err) => {
                    this.mintError.set(err?.error?.message || 'Unable to mint session');
                    this.mintLoading.set(false);
                },
            });
    }

    closeMintModal(): void {
        this.mintModalOpen.set(false);
        this.mintTargetProject.set(null);
        this.mintedSession.set(null);
    }

    copyValue(value: string): void {
        if (!value) return;
        this._clipboard.copy(value);
    }
}
