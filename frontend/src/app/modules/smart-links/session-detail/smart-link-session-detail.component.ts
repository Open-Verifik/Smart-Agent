import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
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
import { Subject, takeUntil } from 'rxjs';

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
    isActiveAutoRefreshState,
    isLinkedSelfieSuppressed,
    isTerminalSessionState,
    resolveSessionTargetLabel,
    sessionStatePillClass,
} from '../smart-link-session.util';
import { SmartLinksService } from '../smart-links.service';
import type {
    SmartLinkInteractionEvent,
    SmartLinkResendResult,
    SmartLinkSessionDetail,
} from '../smart-links.types';

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
export class SmartLinkSessionDetailComponent implements OnInit, OnDestroy {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _service = inject(SmartLinksService);
    private _dialog = inject(MatDialog);
    private _clipboard = inject(Clipboard);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);
    private _cdr = inject(ChangeDetectorRef);
    private _destroy$ = new Subject<void>();
    private _refreshTimer: ReturnType<typeof setInterval> | null = null;
    private _userToggledAutoRefresh = false;
    private _visibilityHandler = (): void => {
        if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
            this._stopAutoRefresh();
            this._cdr.markForCheck();
        }
    };

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
    autoRefresh = signal(false);
    reissuedPreview = signal<SmartLinkResendResult | null>(null);

    isTerminalState = computed(() => isTerminalSessionState(this.detail()?.state));
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
        if (typeof document !== 'undefined') {
            document.addEventListener('visibilitychange', this._visibilityHandler);
        }

        this._route.paramMap.pipe(takeUntil(this._destroy$)).subscribe((params) => {
            const pid = (params.get('projectId') || '').trim();
            const sid = (params.get('sessionId') || '').trim();
            if (!pid || !sid) {
                void this._router.navigate(['/smart-links/projects']);
                return;
            }
            this._userToggledAutoRefresh = false;
            this._stopAutoRefresh();
            this.reissuedPreview.set(null);
            this.projectId.set(pid);
            this.sessionId.set(sid);
            this.loadDetail(false);
        });
    }

    ngOnDestroy(): void {
        this._stopAutoRefresh();
        if (typeof document !== 'undefined') {
            document.removeEventListener('visibilitychange', this._visibilityHandler);
        }
        this._destroy$.next();
        this._destroy$.complete();
    }

    loadDetail(silent = false): void {
        if (!silent) {
            this.loading.set(true);
            this.errorMessage.set(null);
        }
        this._service
            .getSessionDetail(this.sessionId())
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: (d) => {
                    this.detail.set(d);
                    this.loading.set(false);
                    if (d?.shareUrl) {
                        this.reissuedPreview.set(null);
                        void QRCode.toDataURL(d.shareUrl, { margin: 1, width: 220 }).then((qr) => {
                            this.qrDataUrl.set(qr);
                            this._cdr.markForCheck();
                        });
                    } else if (
                        d?.canRevoke &&
                        this.reissuedPreview()?.sessionId === d?._id &&
                        this.reissuedPreview()?.qrDataUrl
                    ) {
                        this.qrDataUrl.set(this.reissuedPreview()!.qrDataUrl);
                    } else {
                        this.reissuedPreview.set(null);
                        this.qrDataUrl.set('');
                    }

                    const isHidden =
                        typeof document !== 'undefined' && document.visibilityState === 'hidden';
                    if (isTerminalSessionState(d?.state) || isHidden) {
                        this._stopAutoRefresh();
                    } else if (!this._userToggledAutoRefresh && isActiveAutoRefreshState(d?.state)) {
                        this._startAutoRefresh();
                    }

                    this._cdr.markForCheck();
                },
                error: (err) => {
                    if (!silent) {
                        this.errorMessage.set(err?.error?.message || 'SmartLink session not found');
                        this.loading.set(false);
                    }
                    this._stopAutoRefresh();
                    this._cdr.markForCheck();
                },
            });
    }

    toggleAutoRefresh(): void {
        const d = this.detail();
        if (!d || isTerminalSessionState(d.state)) {
            this._stopAutoRefresh();
            return;
        }
        this._userToggledAutoRefresh = true;
        if (this.autoRefresh()) {
            this._stopAutoRefresh();
        } else {
            if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return;
            this._startAutoRefresh();
        }
        this._cdr.markForCheck();
    }

    private _startAutoRefresh(): void {
        this.autoRefresh.set(true);
        if (this._refreshTimer !== null) return;
        this._refreshTimer = setInterval(() => {
            if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
                this._stopAutoRefresh();
                this._cdr.markForCheck();
                return;
            }
            if (isTerminalSessionState(this.detail()?.state)) {
                this._stopAutoRefresh();
                this._cdr.markForCheck();
                return;
            }
            this.loadDetail(true);
        }, 5000);
    }

    private _stopAutoRefresh(): void {
        this.autoRefresh.set(false);
        if (this._refreshTimer !== null) {
            clearInterval(this._refreshTimer);
            this._refreshTimer = null;
        }
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
                if (isTerminalSessionState(updated.state)) {
                    this._stopAutoRefresh();
                } else if (!this._userToggledAutoRefresh && isActiveAutoRefreshState(updated.state)) {
                    this._startAutoRefresh();
                }
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
                this.reissuedPreview.set(res);
                this.loadDetail(true);
            }
        });
    }

    revoke(): void {
        const d = this.detail();
        if (!d || d.state === 'COMPLETED') return;
        this._service.revokeSession(d._id).subscribe({
            next: (updated) => {
                this.detail.set(updated);
                this.reissuedPreview.set(null);
                this._stopAutoRefresh();
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
