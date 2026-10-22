import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoPipe } from '@jsverse/transloco';
import { ApiEndpoint } from '../postman.types';

@Component({
    selector: 'postman-endpoint-actions',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        TranslocoPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'absolute right-0.5 top-1/2 z-[1] flex -translate-y-1/2 items-center gap-2.5',
    },
    template: `
        <button
            type="button"
            class="inline-flex h-3.5 w-3.5 min-w-0 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white p-0 text-slate-400 opacity-0 shadow-[0_1px_2px_rgb(15_23_42/0.16)] transition-opacity group-hover/row:opacity-100 group-focus-within/row:opacity-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400"
            [class.opacity-100]="pinned()"
            [class.text-slate-900]="pinned()"
            [class.dark:text-slate-50]="pinned()"
            (click)="emitPin($event)"
            matTooltipPosition="above"
            [matTooltip]="
                (pinned() ? 'postman.sidebar.unpinEndpoint' : 'postman.sidebar.pinEndpoint')
                    | transloco: { name: pinTitle() }
            "
            [attr.aria-label]="
                (pinned() ? 'postman.sidebar.unpinEndpoint' : 'postman.sidebar.pinEndpoint')
                    | transloco: { name: pinTitle() }
            "
        >
            <svg viewBox="0 0 12 12" class="h-2.5 w-2.5" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M4 1.25h4a.75.75 0 0 1 .75.75v1.1c0 .85-.55 1.55-1.3 1.8l-.15.05v.45h.9L6.75 7.1v2.15L6 10.1l-.75-.85V7.1L3.8 5.4h.9v-.45l-.15-.05c-.75-.25-1.3-.95-1.3-1.8V2A.75.75 0 0 1 4 1.25z"
                />
            </svg>
        </button>
        <div
            class="opacity-0 transition-opacity duration-150 group-hover/row:opacity-100 group-focus-within/row:opacity-100"
            [class.opacity-100]="isSelected() || menuOpen()"
        >
            <button
                type="button"
                mat-icon-button
                class="postman-endpoint-actions-trigger !h-6 !w-6 rounded-md text-slate-500 hover:bg-white/90 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/95 dark:hover:text-slate-200"
                [class.bg-blue-100]="isSelected() && !menuOpen()"
                [class.dark:bg-blue-900]="isSelected() && !menuOpen()"
                [class.bg-white]="menuOpen() && !isSelected()"
                [class.dark:bg-slate-800]="menuOpen()"
                [class.shadow-sm]="menuOpen()"
                [matMenuTriggerFor]="menu"
                [attr.aria-label]="'postman.sidebar.endpointMenuTooltip' | transloco"
                (click)="$event.preventDefault(); $event.stopPropagation()"
            >
                <mat-icon class="!h-4 !w-4 !text-[16px]">more_vert</mat-icon>
            </button>
        </div>

        <mat-menu
            #menu="matMenu"
            class="postman-endpoint-actions-menu"
            (opened)="menuOpen.set(true)"
            (closed)="menuOpen.set(false)"
        >
            @if (showMoveSection()) {
                <button
                    mat-menu-item
                    disabled
                    class="pointer-events-none !min-h-0 !cursor-default !py-1.5 !opacity-100"
                >
                    <span class="text-[11px] font-bold uppercase tracking-wide text-slate-500">{{
                        'postman.sidebar.sectionMoveTo' | transloco
                    }}</span>
                </button>
                @if (endpoint().postmanFolderId) {
                    <button mat-menu-item (click)="emitMove(null)">
                        <mat-icon class="!mr-2 !h-4 !w-4 text-slate-500">inventory_2</mat-icon>
                        <span>{{ 'postman.sidebar.moveToLibrary' | transloco }}</span>
                    </button>
                }
                @for (opt of moveOptions(); track opt.id) {
                    <button mat-menu-item (click)="emitMove(opt.id)">
                        <mat-icon class="!mr-2 !h-4 !w-4 text-slate-500">folder</mat-icon>
                        <span>{{ opt.label }}</span>
                    </button>
                }
                <mat-divider></mat-divider>
            }
            <button
                mat-menu-item
                disabled
                class="pointer-events-none !min-h-0 !cursor-default !py-1.5 !opacity-100"
            >
                <span class="text-[11px] font-bold uppercase tracking-wide text-slate-500">{{
                    'postman.sidebar.sectionEndpoint' | transloco
                }}</span>
            </button>
            <button mat-menu-item (click)="renameEndpoint.emit(endpoint())">
                <mat-icon class="!mr-2 !h-4 !w-4 text-slate-500">edit</mat-icon>
                {{ 'postman.sidebar.renameEndpoint' | transloco }}
            </button>
        </mat-menu>
    `,
})
export class PostmanEndpointActionsComponent {
    endpoint = input.required<ApiEndpoint>();
    isSelected = input(false);
    pinned = input(false);
    pinTitle = input('');
    showMoveSection = input(false);
    moveOptions = input<{ id: string; label: string }[]>([]);

    moveEndpoint = output<{ endpoint: ApiEndpoint; folderId: string | null }>();
    renameEndpoint = output<ApiEndpoint>();
    pinEndpoint = output<ApiEndpoint>();

    menuOpen = signal(false);

    emitMove(folderId: string | null): void {
        this.moveEndpoint.emit({ endpoint: this.endpoint(), folderId });
    }

    /**
     * Pin or unpin without selecting the row.
     * @param {Event} event
     */
    emitPin(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        this.pinEndpoint.emit(this.endpoint());
    }
}
