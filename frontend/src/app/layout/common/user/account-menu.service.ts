import { inject, Injectable, signal } from '@angular/core';
import type { ClientSettingsOverrideSnapshot } from 'app/core/client-settings/override-conditions';
import { resolveStaffSeatLimit } from 'app/core/client-settings/staff-seat-limit';
import { SettingsService } from 'app/modules/settings/settings.service';
import { extractClientSettingsPayload } from 'app/modules/settings/utils/invoice-billing-complete';
import { getBusinessUserClientId } from 'app/modules/settings/utils/settings-business-user.util';
import { forkJoin, of } from 'rxjs';
import { catchError, finalize, take } from 'rxjs/operators';

/** Plan + seat capacity shown in the account dropdown. */
export interface AccountMenuSnapshot {
    workspaceName: string | null;
    planName: string;
    hasSubscription: boolean;
    seatsUsed: number;
    seatLimit: number;
}

const PAYG_PLAN_NAME = 'PAYG';
const OVERRIDE_PLAN_NAME = 'Override';

@Injectable({ providedIn: 'root' })
export class AccountMenuService {
    private _settingsService = inject(SettingsService);

    readonly snapshot = signal<AccountMenuSnapshot | null>(null);
    readonly loading = signal(false);

    private _loadedForClientId: string | null = null;

    /**
     * Fetches plan, staff and workspace data the first time the menu opens.
     * Subsequent opens reuse the cached snapshot until `reset()` is called.
     */
    load = (user?: unknown): void => {
        const clientId = getBusinessUserClientId(user);

        if (!clientId || this.loading()) return;
        if (this._loadedForClientId === clientId && this.snapshot()) return;

        this.loading.set(true);

        const empty = of({ data: null as any });

        forkJoin({
            smartCheck: this._settingsService
                .getMySubscription(clientId)
                .pipe(catchError(() => empty)),
            smartAccess: this._settingsService
                .getSmartAccessPlan(clientId)
                .pipe(catchError(() => empty)),
            smartEnroll: this._settingsService
                .getSmartEnrollPlan(clientId)
                .pipe(catchError(() => empty)),
            clientSettings: this._settingsService
                .getBillingConfig(clientId)
                .pipe(catchError(() => empty)),
            staff: this._settingsService.getStaff().pipe(catchError(() => empty)),
            workspace: this._settingsService.getWorkspace(clientId).pipe(catchError(() => empty)),
        })
            .pipe(
                take(1),
                finalize(() => this.loading.set(false))
            )
            .subscribe({
                next: (results) => {
                    this._loadedForClientId = clientId;
                    this.snapshot.set(this._buildSnapshot(results, user));
                },
                error: () => this.snapshot.set(null),
            });
    };

    /** Drops the cached snapshot, e.g. after sign out or account switch. */
    reset = (): void => {
        this._loadedForClientId = null;
        this.snapshot.set(null);
        this.loading.set(false);
    };

    /**
     * Mirrors staff-list: seat limit from SmartCheck chairs + Access/Enroll bonus + client-settings override.
     */
    private _buildSnapshot = (results: Record<string, any>, user?: unknown): AccountMenuSnapshot => {
        const smartCheckData = results['smartCheck']?.data;
        const accessData = results['smartAccess']?.data;
        const enrollData = results['smartEnroll']?.data;
        const subscriptionPlan = smartCheckData?.subscriptionPlan;

        const settings =
            (extractClientSettingsPayload(
                results['clientSettings']
            ) as ClientSettingsOverrideSnapshot | null) ??
            ((user as { settings?: ClientSettingsOverrideSnapshot } | null)?.settings ?? null);

        const { eligible, seatLimit } = resolveStaffSeatLimit(
            {
                clientSubscriptionPlan: smartCheckData
                    ? { active: smartCheckData.active !== false, subscriptionPlan }
                    : null,
                smartAccessPlan: accessData,
                smartEnrollPlan: enrollData,
            },
            settings
        );

        const staffList = results['staff']?.data;

        return {
            workspaceName: results['workspace']?.data?.name ?? null,
            planName: this._resolvePlanName(
                subscriptionPlan,
                accessData,
                enrollData,
                eligible,
                seatLimit
            ),
            hasSubscription: eligible,
            seatsUsed: Array.isArray(staffList) ? staffList.length : 0,
            seatLimit,
        };
    };

    private _resolvePlanName = (
        subscriptionPlan: { name?: string } | null | undefined,
        accessData: { status?: string; name?: string } | null | undefined,
        enrollData: { status?: string; name?: string } | null | undefined,
        eligible: boolean,
        seatLimit: number
    ): string => {
        if (subscriptionPlan?.name) return subscriptionPlan.name;

        const hasAccess = accessData?.status === 'active';
        const hasEnroll = enrollData?.status === 'active';

        if (hasAccess && hasEnroll) return `${accessData.name} + ${enrollData.name}`;
        if (hasAccess) return accessData.name ?? OVERRIDE_PLAN_NAME;
        if (hasEnroll) return enrollData.name ?? OVERRIDE_PLAN_NAME;
        if (eligible && seatLimit > 0) return OVERRIDE_PLAN_NAME;

        return PAYG_PLAN_NAME;
    };
}
