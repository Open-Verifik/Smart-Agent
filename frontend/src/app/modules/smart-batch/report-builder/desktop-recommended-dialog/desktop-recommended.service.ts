import { Injectable, inject, NgZone } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
    DesktopRecommendedDialogComponent,
    DesktopRecommendedResult,
} from './desktop-recommended-dialog.component';

/** Below this width the report designer is too cramped to edit comfortably. */
export const DESKTOP_RECOMMENDED_MIN_WIDTH = 900;

/**
 * Keeps a blocking "use a bigger screen" notice on top of the report designer while the window is
 * narrow. It follows the window: it opens when the screen is small, and closes by itself once the
 * screen is large enough (rotating a tablet, resizing a browser, etc.).
 */
@Injectable({ providedIn: 'root' })
export class DesktopRecommendedService {
    private _dialog = inject(MatDialog);
    private _zone = inject(NgZone);

    private _ref: MatDialogRef<DesktopRecommendedDialogComponent, DesktopRecommendedResult> | null = null;
    private _active = false;
    private _onBack: (() => void) | null = null;

    constructor() {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', () => this._zone.run(() => this._refresh()));
        }
    }

    /**
     * Turns the notice on or off for the current screen.
     * @param active whether the designer is currently on screen
     * @param onBack called when the user chooses to leave the designer
     */
    sync(active: boolean, onBack?: () => void): void {
        this._active = active;
        this._onBack = active ? (onBack ?? null) : null;
        this._refresh();
    }

    /** Call when the designer is destroyed so the notice never lingers on other screens. */
    release(): void {
        this.sync(false);
    }

    private _refresh(): void {
        const shouldShow = this._active && window.innerWidth < DESKTOP_RECOMMENDED_MIN_WIDTH;

        if (shouldShow && !this._ref) {
            this._open();
        } else if (!shouldShow && this._ref) {
            this._ref.close(undefined);
        }
    }

    private _open(): void {
        const ref = this._dialog.open<DesktopRecommendedDialogComponent, void, DesktopRecommendedResult>(
            DesktopRecommendedDialogComponent,
            {
                width: '440px',
                maxWidth: '94vw',
                maxHeight: '94dvh',
                autoFocus: false,
                disableClose: true,
                panelClass: 'desktop-recommended-dialog-panel',
            }
        );

        this._ref = ref;
        ref.afterClosed().subscribe((result) => {
            this._ref = null;

            if (result === 'back') this._onBack?.();
        });
    }
}
