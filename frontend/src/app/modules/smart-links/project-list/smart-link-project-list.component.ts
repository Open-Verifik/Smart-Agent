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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { DateTime } from 'luxon';
import QRCode from 'qrcode';
import { map, of, switchMap } from 'rxjs';
import {
    HasStaffPermissionDirective,
    TeamFilterSelectComponent,
    extractProjectTeam,
    type ProjectTeamRef,
    type TeamDto,
} from 'app/core/permissions';
import { AuthRequiredGateService } from 'app/core/services/auth-required-gate.service';

import { SmartLinkProjectDeleteDialogComponent } from '../dialogs/smart-link-project-delete-dialog.component';
import { SmartLinksService } from '../smart-links.service';
import type {
    MintedSmartLinkSession,
    SmartLinkProject,
    SmartLinkProjectFlow,
    SmartLinkResendResult,
} from '../smart-links.types';

@Component({
    selector: 'smart-link-project-list',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ClipboardModule,
        RouterModule,
        MatButtonModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        TranslocoModule,
        HasStaffPermissionDirective,
        TeamFilterSelectComponent,
    ],
    templateUrl: './smart-link-project-list.component.html',
    styleUrls: ['./smart-link-project-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartLinkProjectListComponent implements OnInit {
    private _service = inject(SmartLinksService);
    private _dialog = inject(MatDialog);
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
    selectedTeam = signal('');
    availableTeams = signal<TeamDto[]>([]);
    error = signal<string | null>(null);

    onTeamFilterChange(teamId: string): void {
        this.selectedTeam.set(teamId || '');
        this.loadProjects();
    }

    teamBadge(project: SmartLinkProject): ProjectTeamRef | null {
        return extractProjectTeam(project.team, this.availableTeams());
    }
    copiedProjectId = signal<string | null>(null);

    mintModalOpen = signal(false);
    mintLoading = signal(false);
    mintError = signal<string | null>(null);
    mintTargetProject = signal<SmartLinkProject | null>(null);
    mintedSession = signal<MintedSmartLinkSession | null>(null);
    mintDispatchResult = signal<SmartLinkResendResult['dispatch'] | null>(null);
    staticQrDataUrl = signal<string>('');
    mintRequireDocument = false;
    mintEmail = '';
    mintPhone = '';
    mintSendImmediately = false;
    mintSendChannel: 'email' | 'sms' | 'whatsapp' = 'email';
    mintSendRecipient = '';
    mintSendCountryCode = '+1';
    private _mintSendRecipientEdited = false;

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
        const team = this.selectedTeam() || undefined;
        this._service.listSmartLinkProjects(team).subscribe({
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

    openSessions(project: SmartLinkProject, event?: Event): void {
        event?.stopPropagation();
        if (!project._id) return;
        void this._router.navigate(['/smart-links/projects', project._id, 'sessions']);
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
                const populatedFlow = this._service.extractSmartLinkFlow(saved);
                const merged: SmartLinkProject = {
                    ...project,
                    ...(saved || {}),
                    status: nextStatus,
                    projectFlows: [populatedFlow || { ...flow, status: nextStatus }],
                };
                this.projects.update((list) =>
                    list.map((p) => (p._id === project._id ? merged : p))
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

    openDeleteHubDialog(project: SmartLinkProject, event?: Event): void {
        event?.stopPropagation();
        if (!project._id) return;
        const ref = this._dialog.open(SmartLinkProjectDeleteDialogComponent, {
            width: '460px',
            maxWidth: '95vw',
            data: { project },
        });
        ref.afterClosed().subscribe((res) => {
            if (res?.deleted) {
                this.projects.update((list) => list.filter((p) => p._id !== project._id));
                this._snack.open(
                    this._transloco.translate('smartLinks.dialogs.deleteHubToast'),
                    undefined,
                    { duration: 2400 }
                );
                this._cdr.markForCheck();
            }
        });
    }

    mintTestLink(project: SmartLinkProject, event?: Event): void {
        event?.stopPropagation();
        if (!project._id) return;
        this.mintTargetProject.set(project);
        this.mintModalOpen.set(true);
        this.mintRequireDocument = false;
        this.mintEmail = '';
        this.mintPhone = '';
        this.mintSendImmediately = false;
        this.mintSendChannel = 'email';
        this.mintSendRecipient = '';
        this.mintSendCountryCode = '+1';
        this._mintSendRecipientEdited = false;
        this.mintDispatchResult.set(null);
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

        this.regenerateTestLink();
    }

    onMintPrefillChanged(): void {
        if (this._mintSendRecipientEdited) return;
        this.mintSendRecipient =
            this.mintSendChannel === 'email' ? this.mintEmail.trim() : this.mintPhone.trim();
    }

    onMintSendToggleChanged(checked: boolean): void {
        this.mintSendImmediately = checked;
        this.mintError.set(null);
        if (checked && !this._mintSendRecipientEdited) {
            if (!this.mintEmail.trim() && this.mintPhone.trim()) {
                this.mintSendChannel = 'whatsapp';
                this.mintSendRecipient = this.mintPhone.trim();
            } else {
                this.mintSendChannel = 'email';
                this.mintSendRecipient = this.mintEmail.trim();
            }
        }
    }

    onMintSendChannelChanged(next: 'email' | 'sms' | 'whatsapp'): void {
        this.mintSendChannel = next;
        this.mintError.set(null);
        if (!this._mintSendRecipientEdited) {
            this.mintSendRecipient = next === 'email' ? this.mintEmail.trim() : this.mintPhone.trim();
        }
    }

    onMintSendRecipientInput(value: string): void {
        this.mintSendRecipient = value;
        this._mintSendRecipientEdited = Boolean(value.trim());
    }

    onMintRequireDocToggle(): void {
        if (!this.mintSendImmediately) {
            this.regenerateTestLink();
        }
    }

    regenerateTestLink(): void {
        const project = this.mintTargetProject();
        if (!project?._id || this.mintLoading()) return;

        const cleanRecipient = this.mintSendRecipient.trim();
        if (this.mintSendImmediately && !cleanRecipient) {
            this.mintError.set(this._transloco.translate('smartLinks.mintModal.sendRecipientRequired'));
            this._cdr.markForCheck();
            return;
        }

        this.mintLoading.set(true);
        this.mintError.set(null);
        this.mintedSession.set(null);
        this.mintDispatchResult.set(null);
        this._cdr.markForCheck();

        const email = this.mintEmail.trim() || undefined;
        const phone = this.mintPhone.trim() || undefined;
        const cleanCountryCode =
            phone && !phone.startsWith('+') ? this.mintSendCountryCode.trim() || '+1' : undefined;

        this._service
            .createSession(project._id, {
                email,
                phone,
                countryCode: cleanCountryCode,
                requireDocument: Boolean(this.mintRequireDocument),
                createdByChannel: 'portal',
                externalRefId: `test-${Date.now()}`,
            })
            .pipe(
                switchMap((session) => {
                    if (!this.mintSendImmediately) {
                        return of({ session, dispatch: null });
                    }
                    return this._service
                        .resendSession(session.sessionId, {
                            send: true,
                            channel: this.mintSendChannel,
                            recipient: cleanRecipient,
                            countryCode:
                                this.mintSendChannel === 'email'
                                    ? undefined
                                    : this.mintSendCountryCode.trim() || '+1',
                        })
                        .pipe(
                            map((resend) => ({
                                session: {
                                    ...session,
                                    url: resend.url || session.url,
                                    qrDataUrl: resend.qrDataUrl || session.qrDataUrl,
                                    expiresAt: resend.expiresAt || session.expiresAt,
                                    state: resend.state || session.state,
                                },
                                dispatch: resend.dispatch ?? null,
                            }))
                        );
                })
            )
            .subscribe({
                next: ({ session, dispatch }) => {
                    this.mintedSession.set(session);
                    this.mintDispatchResult.set(dispatch);
                    this.mintLoading.set(false);
                    this._cdr.markForCheck();
                },
                error: (err) => {
                    this.mintError.set(err?.error?.message || 'Unable to generate link');
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
        this.mintDispatchResult.set(null);
        this._cdr.markForCheck();
    }

    onMintDialogClosed(): void {
        this.mintModalOpen.set(false);
        this.mintTargetProject.set(null);
        this.mintedSession.set(null);
        this.mintDispatchResult.set(null);
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
