import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { RequestAccessDialogComponent } from 'app/core/permissions/request-access-dialog/request-access-dialog.component';
import {
    ACTION_LABELS,
    RESOURCE_MAP,
    STAFF_RESOURCES,
    SYSTEM_ROLE_METADATA,
} from 'app/core/permissions/staff-permission.constants';
import { StaffPermissionService } from 'app/core/permissions/staff-permission.service';
import {
    StaffAccessRequestDto,
    StaffAction,
    StaffResource,
    SystemRoleSlug,
} from 'app/core/permissions/staff-permission.types';
import { StaffRbacApiService } from 'app/core/permissions/staff-rbac-api.service';
import { StaffPermissionMatrixComponent } from '../team/permission-matrix/staff-permission-matrix.component';

@Component({
    selector: 'app-my-access',
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
        StaffPermissionMatrixComponent,
    ],
    templateUrl: './my-access.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAccessComponent implements OnInit {
    private readonly _api = inject(StaffRbacApiService);
    private readonly _dialog = inject(MatDialog);
    private readonly _snackBar = inject(MatSnackBar);
    private readonly _transloco = inject(TranslocoService);
    readonly permService = inject(StaffPermissionService);

    readonly loadingRequests = signal(false);
    readonly refreshing = signal(false);
    readonly myRequests = signal<StaffAccessRequestDto[]>([]);

    quickRequestResource: StaffResource = 'smartReportsTemplates';
    readonly allResources = STAFF_RESOURCES;

    ngOnInit(): void {
        this.refreshAll();
    }

    refreshAll(): void {
        this.refreshing.set(true);
        this.permService.refresh().subscribe(() => {
            this.refreshing.set(false);
        });
        this.loadMyRequests();
    }

    loadMyRequests(): void {
        if (!this.permService.isStaff()) return;
        this.loadingRequests.set(true);
        this._api.listMyAccessRequests('all').subscribe({
            next: (docs) => {
                this.myRequests.set(docs);
                this.loadingRequests.set(false);
            },
            error: () => {
                this.myRequests.set([]);
                this.loadingRequests.set(false);
            },
        });
    }

    get roleMeta() {
        const slug = (this.permService.canonicalRole() || 'viewer') as SystemRoleSlug;
        return SYSTEM_ROLE_METADATA[slug];
    }

    resourceLabel(key: string): string {
        const meta = RESOURCE_MAP[key];
        return meta ? this._transloco.translate(meta.labelKey) || meta.label : key;
    }

    actionLabel(action: string): string {
        const meta = ACTION_LABELS[action as StaffAction];
        return meta ? this._transloco.translate(meta.labelKey) || meta.label : action;
    }

    openRequestAccess(resource?: StaffResource): void {
        this._dialog
            .open(RequestAccessDialogComponent, {
                width: '520px',
                maxWidth: '95vw',
                data: {
                    mode: 'resource_access',
                    resource: resource || this.quickRequestResource,
                },
            })
            .afterClosed()
            .subscribe((created) => {
                if (created) this.loadMyRequests();
            });
    }

    openRequestRoleUpgrade(): void {
        this._dialog
            .open(RequestAccessDialogComponent, {
                width: '520px',
                maxWidth: '95vw',
                data: { mode: 'role_upgrade' },
            })
            .afterClosed()
            .subscribe((created) => {
                if (created) this.loadMyRequests();
            });
    }

    openRequestBudgetBoost(): void {
        const team = this.permService.team();
        if (!team) return;
        this._dialog
            .open(RequestAccessDialogComponent, {
                width: '520px',
                maxWidth: '95vw',
                data: {
                    mode: 'budget_increase',
                    teamId: team._id,
                    teamName: team.name,
                },
            })
            .afterClosed()
            .subscribe((created) => {
                if (created) this.loadMyRequests();
            });
    }

    cancelRequest(req: StaffAccessRequestDto): void {
        this._api.cancelAccessRequest(req._id).subscribe({
            next: () => {
                this._snackBar.open(
                    this._transloco.translate('staffRbac.myAccess.requestCancelled'),
                    undefined,
                    { duration: 3000 }
                );
                this.loadMyRequests();
            },
        });
    }
}
