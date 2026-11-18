/**
 * Shared helpers for SmartFleet native `<dialog>` top-layer form modals.
 */

export function syncModalDialog(dialog: HTMLDialogElement | undefined | null, open: boolean): void {
    if (!dialog) return;

    if (open && !dialog.open) {
        dialog.showModal();
    } else if (!open && dialog.open) {
        dialog.close();
    }
}

/**
 * Tracks backdrop pointer presses so text-selection drags that start inside a dialog
 * and release over the backdrop never dismiss the modal accidentally.
 */
export class FleetDialogBackdropTracker {
    private _pressedOutside = false;

    onPointerDown(event: PointerEvent, dialog?: HTMLDialogElement | null): void {
        if (!dialog?.open) {
            this._pressedOutside = false;
            return;
        }

        this._pressedOutside = this._isOutside(event, dialog);
    }

    shouldDismissOnPointerUp(event: PointerEvent, dialog?: HTMLDialogElement | null): boolean {
        const pressed = this._pressedOutside;

        this._pressedOutside = false;

        if (!pressed || !dialog?.open) return false;

        return this._isOutside(event, dialog);
    }

    private _isOutside(event: PointerEvent, dialog: HTMLDialogElement): boolean {
        const rect = dialog.getBoundingClientRect();

        return (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        );
    }
}
