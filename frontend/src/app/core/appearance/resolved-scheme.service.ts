import { Injectable, inject } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config';
import { distinctUntilChanged, Observable, of, switchMap } from 'rxjs';
import {
    msUntilNextAutoSchemeChange,
    resolveAutoScheme,
    type ResolvedScheme,
} from './auto-scheme';

/**
 * Emits the applied light/dark scheme. Auto follows local evening hours.
 */
@Injectable({
    providedIn: 'root',
})
export class ResolvedSchemeService {
    private readonly _fuseConfigService = inject(FuseConfigService);

    readonly resolved$: Observable<ResolvedScheme> = this._fuseConfigService.config$.pipe(
        switchMap((config) => {
            if (config.scheme === 'dark' || config.scheme === 'light') {
                return of(config.scheme);
            }

            return this._watchAutoScheme();
        }),
        distinctUntilChanged()
    );

    /**
     * Emits the current Auto scheme and again at each 7:00 / 19:00 local boundary.
     */
    private _watchAutoScheme = (): Observable<ResolvedScheme> =>
        new Observable<ResolvedScheme>((subscriber) => {
            let timeoutId: ReturnType<typeof setTimeout> | undefined;

            const emit = (): void => {
                subscriber.next(resolveAutoScheme());
            };

            const schedule = (): void => {
                timeoutId = setTimeout(() => {
                    emit();
                    schedule();
                }, msUntilNextAutoSchemeChange());
            };

            emit();
            schedule();

            return () => {
                if (timeoutId !== undefined) {
                    clearTimeout(timeoutId);
                }
            };
        });
}
