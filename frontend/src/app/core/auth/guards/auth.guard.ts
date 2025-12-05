import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { of, switchMap } from 'rxjs';

export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
    const router: Router = inject(Router);
    const authService: AuthService = inject(AuthService);

    // Simple check: only verify if accessToken exists
    if (authService.accessToken) {
        return of(true);
    }

    // If no accessToken, redirect to sign-in
    const redirectURL =
        state.url === '/sign-out'
            ? ''
            : `redirectURL=${state.url}`;
    const urlTree = router.parseUrl(`sign-in?${redirectURL}`);

    return of(urlTree);
};
