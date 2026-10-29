import { CanDeactivateFn } from '@angular/router';

export type LayoutLeaveHost = {
    canLeaveGuide(nextUrl?: string): boolean | Promise<boolean>;
};

export const visitaGuideLeaveGuard: CanDeactivateFn<LayoutLeaveHost> = (
    component,
    _currentRoute,
    _currentState,
    nextState
) => {
    if (typeof component?.canLeaveGuide !== 'function') return true;
    return component.canLeaveGuide(nextState?.url ?? '');
};
