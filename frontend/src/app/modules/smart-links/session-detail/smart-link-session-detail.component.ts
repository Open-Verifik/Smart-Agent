import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    computed,
    inject,
    signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import QRCode from 'qrcode';

import { WebhookEventsComponent } from '../../smart-monitor/webhooks/webhook-events.component';
import { SmartLinkSessionDeleteDialogComponent } from '../dialogs/smart-link-session-delete-dialog.component';
import { SmartLinkSessionEditDialogComponent } from '../dialogs/smart-link-session-edit-dialog.component';
import { SmartLinkSessionResendDialogComponent } from '../dialogs/smart-link-session-resend-dialog.component';
import {
    decodeJwtClaimsSafe,
    extractLinkedSelfieDataUrl,
    formatSessionDate,
    interactionBadgeClass,
    interactionIcon,
    isLinkedSelfieSuppressed,
    resolveSessionTargetLabel,
    sessionStatePillClass,
} from '../smart-link-session.util';
import { SmartLinksService } from '../smart-links.service';
import type { SmartLinkInteractionEvent, SmartLinkSessionDetail } from '../smart-links.types';

type DossierStepId = 'overview' | 'timeline' | 'identity' | 'verification' | 'dispatches' | 'technical';

@Component({
    selector: 'smart-link-session-detail',
    standalone: true,
    imports: [
        CommonModule,
        ClipboardModule,
        RouterModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatTooltipModule,
        TranslocoModule,
        WebhookEventsComponent,
    ],
    templateUrl: './smart-link-session-detail.component.html',
    styleUrls: ['./smart-link-session-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartLinkSessionDetailComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _service = inject(SmartLinksService);
    private _dialog = inject(MatDialog);
    private _clipboard = inject(Clipboard);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);

    readonly dossierSteps: DossierStepId[] = [
        'overview',
        'timeline',
        'identity',
        'verification',
        'dispatches',
        'technical',
    ];

    projectId = signal('');
    sessionId = signal('');
    detail = signal<SmartLinkSessionDetail | null>(null);
    loading = signal(true);
    errorMessage = signal<string | null>(null);
    devView = signal(false);
    showJwt = signal(false);
    activeStep = signal<DossierStepId>('overview');
    qrDataUrl = signal('');

    selfieUrl = computed(() => extractLinkedSelfieDataUrl(this.detail()));
    selfieSuppressed = computed(() => isLinkedSelfieSuppressed(this.detail()));
    decodedJwtClaims = computed(() => decodeJwtClaimsSafe(this.detail()?.token || this.detail()?.outcome?.verificationToken));

    targetTitle = computed(() => {
        const d = this.detail();
        if (!d) return '';
        return resolveSessionTargetLabel(
            d,
            this._transloco.translate('smartLinks.detail.openLinkLabel') || 'Open link'
        );
    });

    devSections = computed(() => {
        const d = this.detail();
        if (!d) return [];
        return [
            {
                key: 'session',
                value: {
                    _id: d._id,
                    shortCode: d.shortCode,
                    state: d.state,
                    requireDocument: d.requireDocument,
                    resolvedMode: d.resolvedMode,
                    completionMode: d.completionMode,
                    createdByChannel: d.createdByChannel,
                    useCount: d.useCount,
                    maxUses: d.maxUses,
                    openCount: d.openCount,
                    externalRefId: d.externalRefId,
                    notes: d.notes,
                    prefill: d.prefill,
                    expiresAt: d.expiresAt,
                    openedAt: d.openedAt,
                    routedAt: d.routedAt,
                    completedAt: d.completedAt,
                },
            },
            {
                key: 'identityProof',
                value: {
                    verified: d.verified || false,
                    identity: d.identity || d.outcome?.identity || {},
                    outcome: d.outcome || {},
                    decodedJwtClaims: this.decodedJwtClaims(),
                },
            },
            { key: 'interactions', value: d.interactions || [] },
            { key: 'dispatches', value: d.dispatches || [] },
            {
                key: 'linkedVerification',
                value: {
                    routedProjectInfo: d.routedProjectInfo,
                    linkedRegistration: d.linkedRegistration,
                    linkedLogin: d.linkedLogin,
                },
            },
        ];
    });

    ngOnInit(): void {
        this._route.paramMap.subscribe((params) => {
            const pid = (params.get('projectId') || '').trim();
            const sid = (params.get('sessionId') || '').trim();
            if (!pid || !sid) {
                void this._router.navigate(['/smart-links/projects']);
                return;
            }
            this.projectId.set(pid);
            this.sessionId.set(sid);
            this.loadDetail();
        });
    }

    loadDetail(): void {
        this.loading.set(true);
        this.errorMessage.set(null);
        this._service.getSessionDetail(this.sessionId()).subscribe({
            next: (d) => {
                this.detail.set(d);
                this.loading.set(false);
                if (d?.shareUrl) {
                    void QRCode.toDataURL(d.shareUrl, { margin: 1, width: 220 }).then((qr) => {
                        this.qrDataUrl.set(qr);
                        this._cdr.markForCheck();
                    });
                } else {
                    this.qrDataUrl.set('');
                }
                this._cdr.markForCheck();
            },
            error: (err) => {
                this.errorMessage.set(err?.error?.message || 'SmartLink session not found');
                this.loading.set(false);
                this._cdr.markForCheck();
            },
        });
    }

    toggleDevView(): void {
        this.devView.update((v) => !v);
    }

    scrollToStep(step: DossierStepId): void {
        this.activeStep.set(step);
        if (typeof document === 'undefined') return;
        const el = document.getElementById(`step-${step}`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    stateClass(state?: string): string {
        return sessionStatePillClass(state);
    }

    eventIcon(type: SmartLinkInteractionEvent['type']): string {
        return interactionIcon(type);
    }

    eventBadgeClass(type: SmartLinkInteractionEvent['type']): string {
        return interactionBadgeClass(type);
    }

    formatDate(value?: string, withSeconds = false): string {
        return formatSessionDate(value, withSeconds);
    }

    metaEntries(meta?: Record<string, unknown>): Array<{ key: string; value: string }> {
        if (!meta || typeof meta !== 'object') return [];
        return Object.entries(meta)
            .filter(([, v]) => v !== undefined && v !== null && v !== '')
            .slice(0, 8)
            .map(([key, v]) => ({
                key,
                value: typeof v === 'object' ? JSON.stringify(v) : String(v),
            }));
    }

    stepState(step: DossierStepId): 'ok' | 'info' | 'pending' {
        const d = this.detail();
        if (!d) return 'pending';
        switch (step) {
            case 'overview':
                return 'ok';
            case 'timeline':
                return (d.interactions?.length || 0) > 0 ? 'ok' : 'pending';
            case 'identity':
                return d.state === 'COMPLETED' ? 'ok' : d.prefill?.email || d.prefill?.phone ? 'info' : 'pending';
            case 'verification':
                return d.linkedRegistration || d.linkedLogin ? 'ok' : 'pending';
            case 'dispatches':
                return (d.dispatches?.length || 0) > 0 ? 'ok' : 'pending';
            case 'technical':
            default:
                return 'info';
        }
    }

    copyValue(text: string): void {
        if (!text) return;
        this._clipboard.copy(text);
        this._snack.open(this._transloco.translate('smartLinks.actions.copied'), undefined, { duration: 1800 });
    }

    copyJson(value: unknown): void {
        this.copyValue(JSON.stringify(value, null, 2));
    }

    openEditDialog(): void {
        const d = this.detail();
        if (!d) return;
        const ref = this._dialog.open(SmartLinkSessionEditDialogComponent, {
            width: '580px',
            maxWidth: '95vw',
            data: { session: d },
        });
        ref.afterClosed().subscribe((updated) => {
            if (updated) {
                this.detail.set(updated);
                this._snack.open(
                    this._transloco.translate('smartLinks.dialogs.updatedToast'),
                    undefined,
                    { duration: 2200 }
                );
                this._cdr.markForCheck();
            }
        });
    }

    openResendDialog(): void {
        const d = this.detail();
        if (!d || d.state === 'COMPLETED') return;
        const ref = this._dialog.open(SmartLinkSessionResendDialogComponent, {
            width: '540px',
            maxWidth: '95vw',
            data: { session: d },
        });
        ref.afterClosed().subscribe((res) => {
            if (res) {
                this.loadDetail();
            }
        });
    }

    revoke(): void {
        const d = this.detail();
        if (!d || d.state === 'COMPLETED') return;
        this._service.revokeSession(d._id).subscribe({
            next: (updated) => {
                this.detail.set(updated);
                this._snack.open(
                    this._transloco.translate('smartLinks.dialogs.revokedToast'),
                    undefined,
                    { duration: 2200 }
                );
                this._cdr.markForCheck();
            },
            error: (err) => {
                this._snack.open(err?.error?.message || 'Unable to revoke session', undefined, { duration: 3000 });
            },
        });
    }

    openDeleteDialog(): void {
        const d = this.detail();
        if (!d || d.state === 'COMPLETED') return;
        const ref = this._dialog.open(SmartLinkSessionDeleteDialogComponent, {
            width: '460px',
            maxWidth: '95vw',
            data: { mode: 'single', session: d },
        });
        ref.afterClosed().subscribe((res) => {
            if (res?.deleted) {
                this._snack.open(
                    this._transloco.translate('smartLinks.dialogs.deletedToast'),
                    undefined,
                    { duration: 2200 }
                );
                void this._router.navigate(['/smart-links/projects', this.projectId(), 'sessions']);
            }
        });
    }

    goBack(): void {
        void this._router.navigate(['/smart-links/projects', this.projectId(), 'sessions']);
    }
}
