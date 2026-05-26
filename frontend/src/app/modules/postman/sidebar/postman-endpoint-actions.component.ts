import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
    signal,
} from '@angular/core';
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
        class: 'absolute right-0.5 top-1/2 z-[1] -translate-y-1/2',
    },
    template: `
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
                [matTooltip]="'postman.sidebar.endpointMenuTooltip' | transloco"
                matTooltipPosition="left"
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
    showMoveSection = input(false);
    moveOptions = input<{ id: string; label: string }[]>([]);

    moveEndpoint = output<{ endpoint: ApiEndpoint; folderId: string | null }>();
    renameEndpoint = output<ApiEndpoint>();

    menuOpen = signal(false);

    emitMove(folderId: string | null): void {
        this.moveEndpoint.emit({ endpoint: this.endpoint(), folderId });
    }
}
