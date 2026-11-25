import {
    DestroyRef,
    Directive,
    effect,
    ElementRef,
    HostBinding,
    inject,
    Input,
    Renderer2,
    signal,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoService } from '@jsverse/transloco';
import { RequestAccessDialogComponent } from './request-access-dialog/request-access-dialog.component';
import { StaffPermissionService } from './staff-permission.service';
import { PermissionCheckTuple, StaffAction, StaffResource } from './staff-permission.types';

export type StaffPermissionInput =
    | string
    | string[]
    | { resource: StaffResource | string; action?: StaffAction };

function parsePermissionTuple(entry: string | { resource: StaffResource | string; action?: StaffAction }): PermissionCheckTuple {
    if (typeof entry === 'string') {
        const [resource, action] = entry.split('.');
        return [resource as StaffResource, (action as StaffAction) || 'read'];
    }
    return [entry.resource as StaffResource, entry.action ?? 'read'];
}

/**
 * Structural directive conditionally rendering UI controls for permitted Staff / Owners.
 *
 * Usage:
 *   <button *hasStaffPermission="'smartReportsBatch.execute'">Run Batch</button>
 *   <button *hasStaffPermission="['smartReportsTemplates.update', 'smartReportsTemplates.create']; mode: 'any'">Edit</button>
 */
@Directive({
    selector: '[hasStaffPermission]',
    standalone: true,
})
export class HasStaffPermissionDirective {
    private readonly _templateRef = inject(TemplateRef<unknown>);
    private readonly _viewContainer = inject(ViewContainerRef);
    private readonly _permService = inject(StaffPermissionService);

    private readonly _checks = signal<PermissionCheckTuple[]>([]);
    private readonly _mode = signal<'any' | 'all'>('any');
    private _rendered = false;

    @Input()
    set hasStaffPermission(value: StaffPermissionInput) {
        if (Array.isArray(value)) {
            this._checks.set(value.map((item) => parsePermissionTuple(item)));
        } else if (value) {
            this._checks.set([parsePermissionTuple(value)]);
        } else {
            this._checks.set([]);
        }
    }

    @Input()
    set hasStaffPermissionMode(mode: 'any' | 'all') {
        this._mode.set(mode === 'all' ? 'all' : 'any');
    }

    constructor() {
        effect(() => {
            // Re-evaluate reactively whenever state signal or inputs change
            this._permService.state();
            const checks = this._checks();
            const mode = this._mode();

            const allowed =
                checks.length === 0
                    ? true
                    : mode === 'all'
                      ? checks.every(([r, a]) => this._permService.can(r, a ?? 'read'))
                      : checks.some(([r, a]) => this._permService.can(r, a ?? 'read'));

            if (allowed && !this._rendered) {
                this._viewContainer.createEmbeddedView(this._templateRef);
                this._rendered = true;
            } else if (!allowed && this._rendered) {
                this._viewContainer.clear();
                this._rendered = false;
            }
        });
    }
}

/**
 * Attribute directive that visually mutes a restricted button and turns clicking it into a
 * self-service Request Access prompt instead of hiding the action completely.
 *
 * Usage:
 *   <button [disableWithoutPermission]="'smartReportsTemplates.export'">Export PDF</button>
 */
@Directive({
    selector: '[disableWithoutPermission]',
    standalone: true,
})
export class DisableWithoutPermissionDirective {
    private readonly _permService = inject(StaffPermissionService);
    private readonly _dialog = inject(MatDialog, { optional: true });
    private readonly _snackBar = inject(MatSnackBar, { optional: true });
    private readonly _transloco = inject(TranslocoService, { optional: true });
    private readonly _el = inject(ElementRef<HTMLElement>);
    private readonly _renderer = inject(Renderer2);
    private readonly _destroyRef = inject(DestroyRef);

    private readonly _tuple = signal<PermissionCheckTuple | null>(null);
    private _isRestricted = false;

    private readonly _captureClickHandler = (event: MouseEvent): void => {
        this._handleRestrictedClick(event);
    };

    @Input()
    set disableWithoutPermission(value: string | { resource: StaffResource | string; action?: StaffAction } | null | undefined) {
        this._tuple.set(value ? parsePermissionTuple(value) : null);
    }

    constructor() {
        const nativeEl = this._el.nativeElement;
        nativeEl.addEventListener('click', this._captureClickHandler, true);
        this._destroyRef.onDestroy(() => {
            nativeEl.removeEventListener('click', this._captureClickHandler, true);
        });

        effect(() => {
            this._permService.state();
            const tuple = this._tuple();
            this._isRestricted = Boolean(tuple && !this._permService.can(tuple[0], tuple[1] ?? 'read'));

            const el = this._el.nativeElement;
            if (this._isRestricted) {
                this._renderer.setAttribute(el, 'aria-disabled', 'true');
                this._renderer.setAttribute(el, 'data-staff-locked', 'true');
                this._renderer.addClass(el, 'opacity-60');
                this._renderer.addClass(el, 'cursor-not-allowed');
                const titleMsg =
                    this._transloco?.translate('staffRbac.lockedActionTooltip') ||
                    'Requires elevated permission — click to request access';
                this._renderer.setAttribute(el, 'title', titleMsg);
            } else {
                this._renderer.removeAttribute(el, 'aria-disabled');
                this._renderer.removeAttribute(el, 'data-staff-locked');
                this._renderer.removeClass(el, 'opacity-60');
                this._renderer.removeClass(el, 'cursor-not-allowed');
                this._renderer.removeAttribute(el, 'title');
            }
        });
    }

    @HostBinding('class.staff-permission-locked')
    get lockedClass(): boolean {
        return this._isRestricted;
    }

    private _handleRestrictedClick(event: MouseEvent): void {
        if (!this._isRestricted) return;

        event.preventDefault();
        event.stopImmediatePropagation();

        const tuple = this._tuple();
        if (!tuple) return;

        if (!this._permService.allowAccessRequests() || !this._dialog) {
            this._snackBar?.open(
                this._transloco?.translate('staffRbac.insufficientPermissionsToast') ||
                    'You do not have permission for this action.',
                undefined,
                { duration: 4000 }
            );
            return;
        }

        this._dialog.open(RequestAccessDialogComponent, {
            width: '520px',
            maxWidth: '95vw',
            data: {
                mode: 'resource_access',
                resource: tuple[0],
                action: tuple[1] ?? 'read',
            },
        });
    }
}
