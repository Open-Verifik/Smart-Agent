import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { HasStaffPermissionDirective } from 'app/core/permissions/has-staff-permission.directive';
import { DEFAULT_STAFF_ACCESS_POLICY } from 'app/core/permissions/staff-permission.constants';
import { StaffPermissionService } from 'app/core/permissions/staff-permission.service';
import {
    RequestDurationOption,
    StaffAccessPolicy,
} from 'app/core/permissions/staff-permission.types';
import { SettingsService } from 'app/modules/settings/settings.service';
import { extractClientSettingsPayload } from 'app/modules/settings/utils/invoice-billing-complete';
import { getBusinessUserClientId } from 'app/modules/settings/utils/settings-business-user.util';

@Component({
    selector: 'app-team-access-policy',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSlideToggleModule,
        TranslocoModule,
        HasStaffPermissionDirective,
    ],
    templateUrl: './team-access-policy.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamAccessPolicyComponent implements OnInit {
    private readonly _settingsService = inject(SettingsService);
    private readonly _snackBar = inject(MatSnackBar);
    private readonly _transloco = inject(TranslocoService);
    readonly permService = inject(StaffPermissionService);

    @Input() user: unknown;

    readonly loading = signal(false);
    readonly saving = signal(false);

    settingsId = '';
    policy: StaffAccessPolicy = { ...DEFAULT_STAFF_ACCESS_POLICY };

    readonly durationOptions: RequestDurationOption[] = ['24h', '7d', '30d', 'permanent'];

    ngOnInit(): void {
        this.policy = { ...DEFAULT_STAFF_ACCESS_POLICY, ...this.permService.accessPolicy() };
        const clientId = getBusinessUserClientId(this.user);
        if (!clientId) return;

        this.loading.set(true);
        this._settingsService.getBillingConfig(clientId).subscribe({
            next: (res) => {
                this.loading.set(false);
                const payload = extractClientSettingsPayload(res) as {
                    _id?: string;
                    staffAccessPolicy?: Partial<StaffAccessPolicy>;
                } | null;
                if (payload?._id) {
                    this.settingsId = payload._id;
                }
                if (payload?.staffAccessPolicy) {
                    this.policy = { ...DEFAULT_STAFF_ACCESS_POLICY, ...payload.staffAccessPolicy };
                }
            },
            error: () => {
                this.loading.set(false);
            },
        });
    }

    savePolicy(): void {
        if (!this.settingsId || this.saving()) return;
        this.saving.set(true);
        this._settingsService
            .updateClientSettings(this.settingsId, { staffAccessPolicy: { ...this.policy } })
            .subscribe({
                next: () => {
                    this.saving.set(false);
                    this.permService.updateAccessPolicy(this.policy);
                    this._snackBar.open(
                        this._transloco.translate('staffRbac.policyTab.savedToast'),
                        undefined,
                        { duration: 3500 }
                    );
                },
                error: (err) => {
                    this.saving.set(false);
                    this._snackBar.open(
                        err?.error?.message || this._transloco.translate('staffRbac.policyTab.saveError'),
                        undefined,
                        { duration: 4000 }
                    );
                },
            });
    }
}
