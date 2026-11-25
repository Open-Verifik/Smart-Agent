import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { ACTION_LABELS, RESOURCE_MAP } from 'app/core/permissions/staff-permission.constants';
import { StaffPermissionService } from 'app/core/permissions/staff-permission.service';
import {
    RequestDurationOption,
    StaffAccessRequestDto,
    StaffAccessRequestResourceItem,
    StaffAction,
} from 'app/core/permissions/staff-permission.types';
import { StaffRbacApiService } from 'app/core/permissions/staff-rbac-api.service';

@Component({
    selector: 'app-team-access-requests',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        TranslocoModule,
    ],
    templateUrl: './team-access-requests.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamAccessRequestsComponent implements OnInit {
    private readonly _api = inject(StaffRbacApiService);
    private readonly _dialog = inject(MatDialog);
    private readonly _snackBar = inject(MatSnackBar);
    private readonly _transloco = inject(TranslocoService);
    readonly permService = inject(StaffPermissionService);

    @Output() readonly pendingCountChange = new EventEmitter<number>();

    readonly loading = signal(false);
    readonly actingId = signal<string | null>(null);
    readonly requests = signal<StaffAccessRequestDto[]>([]);

    statusFilter = 'pending';
    typeFilter = 'all';

    // Customize & Approve state
    reviewTarget: StaffAccessRequestDto | null = null;
    customApproveDuration: RequestDurationOption = '7d';
    customApproveResources: StaffAccessRequestResourceItem[] = [];
    customApproveAmount = 100;
    reviewNote = '';
    revokeReason = '';

    readonly durationOptions: RequestDurationOption[] = ['24h', '7d', '30d', 'permanent'];

    @ViewChild('customizeApproveDialog') customizeApproveDialog!: TemplateRef<unknown>;
    @ViewChild('rejectDialog') rejectDialog!: TemplateRef<unknown>;
    @ViewChild('revokeDialog') revokeDialog!: TemplateRef<unknown>;
    private _dialogRef: MatDialogRef<unknown> | null = null;

    ngOnInit(): void {
        this.loadRequests();
    }

    loadRequests(): void {
        this.loading.set(true);
        this._api
            .listAccessRequests({
                status: this.statusFilter,
                requestType: this.typeFilter,
            })
            .subscribe({
                next: (res) => {
                    this.loading.set(false);
                    this.requests.set(res?.docs || []);
                    const count = Number(res?.pendingCount || 0);
                    this.permService.updatePendingRequestsCount(count);
                    this.pendingCountChange.emit(count);
                },
                error: () => {
                    this.loading.set(false);
                    this.requests.set([]);
                },
            });
    }

    requesterInfo(req: StaffAccessRequestDto): { name: string; email: string; role?: string } {
        if (typeof req.staff === 'object' && req.staff) {
            return {
                name: req.staff.name || req.staff.email,
                email: req.staff.email || '',
                role: req.staff.role,
            };
        }
        return { name: 'Team Member', email: '' };
    }

    resourceLabel(key: string): string {
        const meta = RESOURCE_MAP[key];
        return meta ? this._transloco.translate(meta.labelKey) || meta.label : key;
    }

    actionLabel(action: string): string {
        const meta = ACTION_LABELS[action as StaffAction];
        return meta ? this._transloco.translate(meta.labelKey) || meta.label : action;
    }

    approveQuick(req: StaffAccessRequestDto): void {
        this.actingId.set(req._id);
        this._api.approveAccessRequest(req._id, {}).subscribe({
            next: () => {
                this.actingId.set(null);
                this._snackBar.open(
                    this._transloco.translate('staffRbac.requestsTab.approvedToast'),
                    undefined,
                    { duration: 3000 }
                );
                this.loadRequests();
            },
            error: (err) => {
                this.actingId.set(null);
                this._snackBar.open(err?.error?.message || 'Approval failed', undefined, {
                    duration: 4000,
                });
            },
        });
    }

    openCustomizeApprove(req: StaffAccessRequestDto): void {
        this.reviewTarget = req;
        this.customApproveDuration = req.requestedDuration || '7d';
        this.customApproveResources = JSON.parse(JSON.stringify(req.requestedResources || []));
        this.customApproveAmount = req.requestedTeamBudget?.requestedAmount ?? 100;
        this.reviewNote = '';
        this._dialogRef = this._dialog.open(this.customizeApproveDialog, {
            width: '540px',
            maxWidth: '95vw',
        });
    }

    toggleApproveAction(item: StaffAccessRequestResourceItem, action: StaffAction): void {
        const idx = item.actions.indexOf(action);
        if (idx >= 0) {
            if (item.actions.length > 1) item.actions.splice(idx, 1);
        } else {
            item.actions.push(action);
        }
    }

    applicableActionsFor(resourceKey: string): StaffAction[] {
        return (RESOURCE_MAP[resourceKey]?.applicableActions ?? ['read']).filter(
            (a) => !(resourceKey === 'workspaceSettings' && a === 'delete')
        );
    }

    submitCustomizeApprove(): void {
        if (!this.reviewTarget) return;
        this.actingId.set(this.reviewTarget._id);

        const payload =
            this.reviewTarget.requestType === 'budget_increase'
                ? { approvedBudgetAmount: Number(this.customApproveAmount), reviewNote: this.reviewNote }
                : this.reviewTarget.requestType === 'role_upgrade'
                  ? { reviewNote: this.reviewNote }
                  : {
                        approvedDuration: this.customApproveDuration,
                        approvedResources: this.customApproveResources,
                        reviewNote: this.reviewNote,
                    };

        this._api.approveAccessRequest(this.reviewTarget._id, payload).subscribe({
            next: () => {
                this.actingId.set(null);
                this._dialogRef?.close();
                this._snackBar.open(
                    this._transloco.translate('staffRbac.requestsTab.approvedToast'),
                    undefined,
                    { duration: 3000 }
                );
                this.loadRequests();
            },
            error: (err) => {
                this.actingId.set(null);
                this._snackBar.open(err?.error?.message || 'Approval failed', undefined, {
                    duration: 4000,
                });
            },
        });
    }

    openRejectModal(req: StaffAccessRequestDto): void {
        this.reviewTarget = req;
        this.reviewNote = '';
        this._dialogRef = this._dialog.open(this.rejectDialog, {
            width: '440px',
            maxWidth: '95vw',
        });
    }

    submitReject(): void {
        if (!this.reviewTarget) return;
        this.actingId.set(this.reviewTarget._id);
        this._api.rejectAccessRequest(this.reviewTarget._id, { reviewNote: this.reviewNote }).subscribe({
            next: () => {
                this.actingId.set(null);
                this._dialogRef?.close();
                this._snackBar.open(
                    this._transloco.translate('staffRbac.requestsTab.rejectedToast'),
                    undefined,
                    { duration: 3000 }
                );
                this.loadRequests();
            },
            error: () => {
                this.actingId.set(null);
            },
        });
    }

    openRevokeModal(req: StaffAccessRequestDto): void {
        this.reviewTarget = req;
        this.revokeReason = '';
        this._dialogRef = this._dialog.open(this.revokeDialog, {
            width: '440px',
            maxWidth: '95vw',
        });
    }

    submitRevoke(): void {
        if (!this.reviewTarget) return;
        this.actingId.set(this.reviewTarget._id);
        this._api
            .revokeAccessRequest(this.reviewTarget._id, { revokeReason: this.revokeReason })
            .subscribe({
                next: () => {
                    this.actingId.set(null);
                    this._dialogRef?.close();
                    this._snackBar.open(
                        this._transloco.translate('staffRbac.requestsTab.revokedToast'),
                        undefined,
                        { duration: 3000 }
                    );
                    this.loadRequests();
                },
                error: () => {
                    this.actingId.set(null);
                },
            });
    }

    closeModal(): void {
        this._dialogRef?.close();
    }
}
