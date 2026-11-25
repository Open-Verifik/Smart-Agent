import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { StaffPermissionService } from './staff-permission.service';
import { RoutePermissionRequirement } from './staff-permission.types';

/**
 * Route guard enforcing Client > Staff RBAC on protected Smart-Agent screens.
 * Workspace Owners (`!isStaff`), SuperAdmins, and unauthenticated guests pass cleanly.
 * Unauthorized Staff members are redirected to `/access-restricted` where they can
 * submit a self-service access request.
 */
export const staffPermissionGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
    const permService = inject(StaffPermissionService);
    const router = inject(Router);

    const requirement = route.data?.['permission'] as RoutePermissionRequirement | undefined;
    if (!requirement) return true;

    // Pass Owners and unauthenticated guests
    if (!permService.isStaff()) {
        return true;
    }

    if (requirement.ownerOnly) {
        return router.createUrlTree(['/access-restricted'], {
            queryParams: {
                resource: requirement.resource || 'workspaceSettings',
                action: 'delete',
                ownerOnly: '1',
                from: state.url,
            },
        });
    }

    if (requirement.any && requirement.any.length > 0) {
        const allowed = permService.canAny(requirement.any);
        if (allowed) return true;

        const [primaryResource, primaryAction = 'read'] = requirement.any[0];
        return router.createUrlTree(['/access-restricted'], {
            queryParams: {
                resource: primaryResource,
                action: primaryAction,
                from: state.url,
            },
        });
    }

    if (requirement.resource) {
        const action = requirement.action ?? 'read';
        if (permService.can(requirement.resource, action)) {
            return true;
        }

        return router.createUrlTree(['/access-restricted'], {
            queryParams: {
                resource: requirement.resource,
                action,
                from: state.url,
            },
        });
    }

    return true;
};
