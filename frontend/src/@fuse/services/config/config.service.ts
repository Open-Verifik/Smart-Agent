import { inject, Injectable } from '@angular/core';
import { FUSE_CONFIG } from '@fuse/services/config/config.constants';
import type { FuseConfig, Scheme } from '@fuse/services/config/config.types';
import { merge } from 'lodash-es';
import { BehaviorSubject, Observable } from 'rxjs';

const FUSE_USER_PREFERENCES_STORAGE_KEY = 'fuse.userPreferences';

/**
 * Persists appearance choices (layout, scheme, theme) so Settings drawer changes survive reload.
 */
@Injectable({ providedIn: 'root' })
export class FuseConfigService {
    private readonly _defaults = inject(FUSE_CONFIG);

    private readonly _config = new BehaviorSubject<any>(
        merge({}, this._defaults, this.loadStoredPreferences())
    );

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for config
     */
    set config(value: any) {
        // Merge the new config over to the current config
        const config = merge({}, this._config.getValue(), value);

        // Execute the observable
        this._config.next(config);

        // Persist UI preferences chosen in Settings / layout tooling
        this.persistUserFacingPreferences(config as FuseConfig);
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    get config$(): Observable<any> {
        return this._config.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resets the config to the default
     */
    reset(): void {
        // Set the config
        this._config.next(this.config);
    }

    /**
     * Read stored preferences (used internally and testable separately from DI).
     */
    private loadStoredPreferences(): Partial<FuseConfig> {
        if (
            typeof localStorage === 'undefined' ||
            typeof localStorage?.getItem !== 'function'
        ) {
            return {};
        }

        try {
            const raw = localStorage.getItem(FUSE_USER_PREFERENCES_STORAGE_KEY);
            if (!raw) return {};

            const parsed = JSON.parse(raw) as Record<string, unknown>;
            const prefs: Partial<FuseConfig> = {};

            if (typeof parsed.layout === 'string') {
                prefs.layout = parsed.layout as FuseConfig['layout'];
            }

            if (
                parsed.scheme === 'auto' ||
                parsed.scheme === 'dark' ||
                parsed.scheme === 'light'
            ) {
                prefs.scheme = parsed.scheme as Scheme;
            }

            if (typeof parsed.theme === 'string') {
                prefs.theme = parsed.theme as FuseConfig['theme'];
            }

            return prefs;
        } catch {
            return {};
        }
    }

    /** Persists subset of FuseConfig touched by Settings drawer. */
    private persistUserFacingPreferences(config: FuseConfig): void {
        if (
            typeof localStorage === 'undefined' ||
            typeof localStorage?.setItem !== 'function'
        ) {
            return;
        }

        try {
            const payload = JSON.stringify({
                layout: config.layout,
                scheme: config.scheme,
                theme: config.theme,
            });

            localStorage.setItem(FUSE_USER_PREFERENCES_STORAGE_KEY, payload);
        } catch {
            /* ignore quota/private mode issues */
        }
    }
}
