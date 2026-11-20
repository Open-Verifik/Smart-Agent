import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    computed,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import QRCode from 'qrcode';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';

import { SmartLinksService } from '../smart-links.service';
import type { MintedSmartLinkSession, SmartLinkProject, SmartLinkProjectFlow } from '../smart-links.types';

@Component({
    selector: 'smart-link-project-list',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ClipboardModule,
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        TranslocoModule,
    ],
    templateUrl: './smart-link-project-list.component.html',
    styleUrls: ['./smart-link-project-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartLinkProjectListComponent implements OnInit {
    private _service = inject(SmartLinksService);
    private _clipboard = inject(Clipboard);
    private _router = inject(Router);
    private _authGate = inject(AuthRequiredGateService);
    private _transloco = inject(TranslocoService);
    private _snack = inject(MatSnackBar);
    private _cdr = inject(ChangeDetectorRef);

    @ViewChild('mintDialog') mintDialog?: ElementRef<HTMLDialogElement>;

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
                this._cdr.markForCheck();
            },
            error: (err) => {
                this.error.set(err?.error?.message || this._transloco.translate('smartLinks.list.loadError'));
                this.loading.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    createNew(): void {
        void this._router.navigate(['/smart-links/projects/new/setup/0']);
    }

    openDetail(project: SmartLinkProject, event?: Event): void {
        event?.stopPropagation();
        if (!project._id) return;
        void this._router.navigate(['/smart-links/projects', project._id]);
    }

    openSetup(project: SmartLinkProject, step = 0, event?: Event): void {
        event?.stopPropagation();
        if (!project._id) return;
        void this._router.navigate(['/smart-links/projects', project._id, 'setup', step]);
    }

    publicUrl(project: SmartLinkProject): string {
        return this._service.buildPublicLinkUrl(project);
    }

    openLiveLink(project: SmartLinkProject, event?: Event): void {
        event?.stopPropagation();
        const url = this.publicUrl(project);
        if (!url || typeof window === 'undefined') return;
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    flowOf(project: SmartLinkProject): SmartLinkProjectFlow | null {
        return this._service.extractSmartLinkFlow(project);
    }

    isDraftFlow(flow: SmartLinkProjectFlow | null): boolean {
        return !flow?.status || flow.status === 'draft' || flow.status === 'paused';
    }

    styleLabel(flow: SmartLinkProjectFlow | null): string {
        const s = `${flow?.onboardingSettings?.verifyStyle || 'a'}`.toUpperCase();
        return `Style ${s}`;
    }

    formatUpdated(date?: string): string {
        if (!date) return '-';
        const parsed = DateTime.fromISO(date);
        return parsed.isValid ? parsed.toFormat('MMM dd, yyyy') : '-';
    }

    onFlowStatusToggle(event: MatSlideToggleChange, project: SmartLinkProject): void {
        const flow = this.flowOf(project);
        if (!project._id || !flow) {
            event.source.checked = !event.source.checked;
            return;
        }
        const nextStatus: 'active' | 'draft' = event.checked ? 'active' : 'draft';
        const updated: SmartLinkProject = {
            ...project,
            status: nextStatus,
            projectFlows: [{ ...flow, status: nextStatus }],
        };
        this._service.updateSmartLinkProject(project._id, updated).subscribe({
            next: (saved) => {
                this.projects.update((list) =>
                    list.map((p) => (p._id === project._id ? saved || updated : p))
                );
                this._cdr.markForCheck();
            },
            error: () => {
                event.source.checked = !event.checked;
                this._cdr.markForCheck();
            },
        });
    }

    copyPublicUrl(project: SmartLinkProject, event?: Event): void {
        event?.stopPropagation();
        const url = this.publicUrl(project);
        if (!url) return;
        this._clipboard.copy(url);
        this.copiedProjectId.set(project._id || null);
        this._snack.open(this._transloco.translate('smartLinks.actions.copied'), undefined, { duration: 1800 });
        setTimeout(() => {
            if (this.copiedProjectId() === project._id) {
                this.copiedProjectId.set(null);
                this._cdr.markForCheck();
            }
        }, 2000);
    }

    mintTestLink(project: SmartLinkProject, event?: Event): void {
        event?.stopPropagation();
        if (!project._id) return;
        this.mintTargetProject.set(project);
        this.mintModalOpen.set(true);
        this.mintLoading.set(true);
        this.mintError.set(null);
        this.mintedSession.set(null);
        this.staticQrDataUrl.set('');
        this._cdr.detectChanges();

        const dialogEl = this.mintDialog?.nativeElement;
        if (dialogEl && !dialogEl.open) {
            dialogEl.showModal();
        }

        const pub = this.publicUrl(project);
        if (pub) {
            void QRCode.toDataURL(pub, { margin: 1, width: 220 }).then((url) => {
                this.staticQrDataUrl.set(url);
                this._cdr.markForCheck();
            });
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
                    this._cdr.markForCheck();
                },
                error: (err) => {
                    this.mintError.set(err?.error?.message || 'Unable to mint session');
                    this.mintLoading.set(false);
                    this._cdr.markForCheck();
                },
            });
    }

    closeMintModal(): void {
        const dialogEl = this.mintDialog?.nativeElement;
        if (dialogEl?.open) {
            dialogEl.close();
        }
        this.mintModalOpen.set(false);
        this.mintTargetProject.set(null);
        this.mintedSession.set(null);
        this._cdr.markForCheck();
    }

    onMintDialogClosed(): void {
        this.mintModalOpen.set(false);
        this.mintTargetProject.set(null);
        this.mintedSession.set(null);
        this._cdr.markForCheck();
    }

    onMintDialogBackdropClick(event: MouseEvent): void {
        if (event.target === this.mintDialog?.nativeElement) {
            this.closeMintModal();
        }
    }

    copyValue(value: string): void {
        if (!value) return;
        this._clipboard.copy(value);
        this._snack.open(this._transloco.translate('smartLinks.actions.copied'), undefined, { duration: 1800 });
    }
}
