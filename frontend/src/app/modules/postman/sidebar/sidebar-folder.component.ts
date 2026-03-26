import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoPipe } from '@jsverse/transloco';
import { ApiEndpoint, PostmanFolderDto, SidebarFolderNode } from '../postman.types';
import { PostmanService } from '../postman.service';

@Component({
  selector: 'postman-sidebar-folder',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatTooltipModule,
    DragDropModule,
    TranslocoPipe,
    PostmanSidebarFolderComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host .cdk-drag-placeholder {
        min-height: 2.25rem;
        background: rgb(148 163 184 / 0.25);
        border-radius: 0.375rem;
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
      :host .cdk-drag-animating {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
      :host .cdk-drop-list-dragging .cdk-drag:not(.cdk-drag-placeholder) {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
  template: `
    <ng-container *ngFor="let node of nodes; trackBy: trackByFolder">
      <div *ngIf="!sidebarCollapsed" class="flex items-center gap-0 group/frow pr-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
        <button
          type="button"
          mat-icon-button
          class="!w-7 !h-7 scale-90"
          (click)="toggleFolderCollapse.emit(node.folder._id)"
        >
          <mat-icon class="!w-4 !h-4 !text-[18px] text-slate-500 transition-transform">
            {{ isFolderCollapsed(node.folder._id) ? 'chevron_right' : 'expand_more' }}
          </mat-icon>
        </button>
        <span
          class="flex-1 min-w-0 flex items-baseline gap-1 cursor-pointer py-2"
          (click)="toggleFolderCollapse.emit(node.folder._id)"
        >
          <span class="truncate text-xs font-semibold text-slate-600 dark:text-slate-300">{{
            node.folder.name
          }}</span>
          <span class="shrink-0 text-xs font-semibold tabular-nums text-slate-400 dark:text-slate-500">
            ({{ folderEndpointTotalRecursive(node) }})
          </span>
        </span>
        <button
          type="button"
          mat-icon-button
          class="!w-7 !h-7 opacity-0 group-hover/frow:opacity-100 transition-opacity"
          [matMenuTriggerFor]="folderActions"
          (click)="$event.stopPropagation()"
        >
          <mat-icon class="!w-4 !h-4 !text-[18px]">more_vert</mat-icon>
        </button>
        <mat-menu #folderActions="matMenu">
          <button mat-menu-item (click)="addSubfolder.emit(node.folder._id)">
            <mat-icon class="!w-4 !h-4 !mr-2">create_new_folder</mat-icon>
            {{ 'postman.sidebar.newSubfolder' | transloco }}
          </button>
          <button mat-menu-item (click)="renameFolder.emit(node.folder)">
            <mat-icon class="!w-4 !h-4 !mr-2">edit</mat-icon>
            {{ 'postman.sidebar.renameFolder' | transloco }}
          </button>
          <button mat-menu-item (click)="emitDeleteFolder(node)">
            <mat-icon class="!w-4 !h-4 !mr-2">delete</mat-icon>
            {{ 'postman.sidebar.deleteFolder' | transloco }}
          </button>
        </mat-menu>
      </div>

      <div
        *ngIf="
          sidebarCollapsed ||
          !isFolderCollapsed(node.folder._id) ||
          (searchQuery && searchQuery.length > 0)
        "
        [class.pl-3]="!sidebarCollapsed"
        [class.border-l]="!sidebarCollapsed"
        class="border-slate-200 dark:border-slate-700 ml-1"
      >
        <postman-sidebar-folder
          *ngIf="node.children.length"
          [nodes]="node.children"
          [sidebarCollapsed]="sidebarCollapsed"
          [collapsedFolderIds]="collapsedFolderIds"
          [folderMenuOptions]="folderMenuOptions"
          [selectedEndpoint]="selectedEndpoint"
          [searchQuery]="searchQuery"
          (toggleFolderCollapse)="toggleFolderCollapse.emit($event)"
          (addSubfolder)="addSubfolder.emit($event)"
          (renameFolder)="renameFolder.emit($event)"
          (deleteFolder)="deleteFolder.emit($event)"
          (selectEndpoint)="selectEndpoint.emit($event)"
          (moveEndpoint)="moveEndpoint.emit($event)"
          (renameEndpoint)="renameEndpoint.emit($event)"
        />

        <div
          cdkDropList
          [id]="'postman-folder-eps-' + node.folder._id"
          [cdkDropListData]="node.endpoints"
          (cdkDropListDropped)="onFolderEndpointDrop($event, node.folder._id)"
          class="min-h-[2.25rem]"
        >
          <div
            *ngIf="!sidebarCollapsed && node.endpoints.length === 0"
            class="pointer-events-none select-none rounded-md border border-dashed border-slate-200/90 px-2 py-1.5 text-center text-[11px] leading-snug text-slate-400 dark:border-slate-600 dark:text-slate-500"
          >
            {{ 'postman.sidebar.emptyFolderDropHint' | transloco }}
          </div>
          <div
            *ngFor="let endpoint of node.endpoints; trackBy: trackByEndpoint"
            cdkDrag
            [cdkDragData]="endpoint"
            [cdkDragDisabled]="isEndpointDragDisabled(endpoint)"
            class="flex items-center gap-0 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800"
            [class.bg-blue-100]="selectedEndpoint?.id === endpoint.id"
            [class.dark:bg-blue-900]="selectedEndpoint?.id === endpoint.id"
          >
            <button
              *ngIf="!sidebarCollapsed && endpoint.code"
              type="button"
              mat-icon-button
              cdkDragHandle
              class="!w-7 !h-7 flex-shrink-0 cursor-grab active:cursor-grabbing text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              [matTooltip]="'postman.sidebar.dragToMove' | transloco"
              matTooltipPosition="right"
              (click)="$event.preventDefault(); $event.stopPropagation()"
            >
              <mat-icon class="!w-4 !h-4 !text-[18px]">drag_indicator</mat-icon>
            </button>
            <a
              [routerLink]="['/postman']"
              [queryParams]="endpoint.code ? { code: endpoint.code } : {}"
              queryParamsHandling="merge"
              routerLinkActive="bg-blue-100 dark:bg-blue-900"
              [routerLinkActiveOptions]="{ exact: false }"
              (click)="selectEndpoint.emit(endpoint)"
              class="flex-1 min-w-0 flex items-center px-2 py-1.5 text-sm text-left no-underline text-inherit rounded-md"
            >
            <span
              class="text-[10px] font-bold rounded px-1 py-0.5 flex-shrink-0 mr-2 w-10 flex items-center justify-center"
              [ngClass]="{
                'bg-green-100 text-green-700': endpoint.method === 'GET',
                'bg-yellow-100 text-yellow-700': endpoint.method === 'POST',
                'bg-blue-100 text-blue-700': endpoint.method === 'PUT',
                'bg-red-100 text-red-700': endpoint.method === 'DELETE',
              }"
            >
              {{ sidebarCollapsed ? endpoint.method.substring(0, 1) : endpoint.method }}
            </span>
            <span *ngIf="!sidebarCollapsed" class="truncate select-text">
              <ng-container *ngIf="layoutName(endpoint); else titleFeat">
                {{ endpoint.layoutDisplayName }}
              </ng-container>
              <ng-template #titleFeat>
                {{
                  endpoint.code
                    ? ('appFeatures.' + endpoint.code + '.title' | transloco)
                    : endpoint.label
                }}
              </ng-template>
            </span>
          </a>
          <button
            *ngIf="!sidebarCollapsed && endpoint.code"
            type="button"
            mat-icon-button
            class="!w-7 !h-7 flex-shrink-0 opacity-60 hover:opacity-100"
            [matMenuTriggerFor]="epMenu"
            [matTooltip]="'postman.sidebar.endpointMenuTooltip' | transloco"
            matTooltipPosition="left"
            (click)="$event.preventDefault(); $event.stopPropagation()"
          >
            <mat-icon class="!w-4 !h-4 !text-[18px]">more_vert</mat-icon>
          </button>
          <mat-menu #epMenu="matMenu" class="postman-endpoint-actions-menu">
            <ng-container *ngIf="hasMoveTargets(endpoint)">
              <button
                mat-menu-item
                disabled
                class="!opacity-100 !cursor-default !min-h-0 !py-1.5 pointer-events-none"
              >
                <span class="text-[11px] font-bold uppercase tracking-wide text-slate-500">{{
                  'postman.sidebar.sectionMoveTo' | transloco
                }}</span>
              </button>
              <button
                *ngIf="endpoint.postmanFolderId"
                mat-menu-item
                (click)="moveEndpoint.emit({ endpoint, folderId: null })"
              >
                <mat-icon class="!w-4 !h-4 !mr-2 text-slate-500">inventory_2</mat-icon>
                <span>{{ 'postman.sidebar.moveToLibrary' | transloco }}</span>
              </button>
              <button
                *ngFor="let opt of folderMenuOptionsFiltered(endpoint)"
                mat-menu-item
                (click)="moveEndpoint.emit({ endpoint, folderId: opt.id })"
              >
                <mat-icon class="!w-4 !h-4 !mr-2 text-slate-500">folder</mat-icon>
                <span>{{ opt.label }}</span>
              </button>
              <mat-divider></mat-divider>
            </ng-container>
            <button
              mat-menu-item
              disabled
              class="!opacity-100 !cursor-default !min-h-0 !py-1.5 pointer-events-none"
            >
              <span class="text-[11px] font-bold uppercase tracking-wide text-slate-500">{{
                'postman.sidebar.sectionEndpoint' | transloco
              }}</span>
            </button>
            <button mat-menu-item (click)="renameEndpoint.emit(endpoint)">
              <mat-icon class="!w-4 !h-4 !mr-2 text-slate-500">edit</mat-icon>
              {{ 'postman.sidebar.renameEndpoint' | transloco }}
            </button>
          </mat-menu>
          </div>
        </div>
      </div>
    </ng-container>
  `,
})
export class PostmanSidebarFolderComponent {
  private _postman = inject(PostmanService);

  @Input({ required: true }) nodes!: SidebarFolderNode[];
  @Input() sidebarCollapsed = false;
  @Input() collapsedFolderIds: Set<string> = new Set();
  @Input() folderMenuOptions: { id: string; label: string }[] = [];
  @Input() selectedEndpoint: ApiEndpoint | null = null;
  @Input() searchQuery = '';

  @Output() toggleFolderCollapse = new EventEmitter<string>();
  @Output() addSubfolder = new EventEmitter<string>();
  @Output() renameFolder = new EventEmitter<PostmanFolderDto>();
  @Output() deleteFolder = new EventEmitter<{
    folder: PostmanFolderDto;
    subtreeEndpointCount: number;
    directChildFolderCount: number;
  }>();
  @Output() selectEndpoint = new EventEmitter<ApiEndpoint>();
  @Output() moveEndpoint = new EventEmitter<{ endpoint: ApiEndpoint; folderId: string | null }>();
  @Output() renameEndpoint = new EventEmitter<ApiEndpoint>();

  folderMenuOptionsFiltered(endpoint: ApiEndpoint): { id: string; label: string }[] {
    const cur = endpoint.postmanFolderId ?? null;
    return this.folderMenuOptions.filter((o) => o.id !== cur);
  }

  hasMoveTargets(endpoint: ApiEndpoint): boolean {
    if (endpoint.postmanFolderId) {
      return true;
    }
    return this.folderMenuOptionsFiltered(endpoint).length > 0;
  }

  trackByFolder(_i: number, n: SidebarFolderNode) {
    return n.folder._id;
  }

  emitDeleteFolder(node: SidebarFolderNode) {
    this.deleteFolder.emit({
      folder: node.folder,
      subtreeEndpointCount: this.folderEndpointTotalRecursive(node),
      directChildFolderCount: node.children.length,
    });
  }

  /**
   * Endpoints in this folder plus every nested subfolder (whole subtree).
   */
  folderEndpointTotalRecursive(node: SidebarFolderNode): number {
    let total = node.endpoints.length;
    for (const child of node.children) {
      total += this.folderEndpointTotalRecursive(child);
    }
    return total;
  }

  trackByEndpoint(_i: number, ep: ApiEndpoint) {
    return ep.id;
  }

  isFolderCollapsed(folderId: string): boolean {
    return this.collapsedFolderIds.has(folderId);
  }

  layoutName(ep: ApiEndpoint): boolean {
    return Boolean(ep.layoutDisplayName?.trim());
  }

  isEndpointDragDisabled(ep: ApiEndpoint): boolean {
    return (
      this.sidebarCollapsed ||
      Boolean(this.searchQuery?.trim()) ||
      !ep.code
    );
  }

  onFolderEndpointDrop(event: CdkDragDrop<ApiEndpoint[]>, folderId: string) {
    const endpoint = event.item.data as ApiEndpoint;
    if (!endpoint?.code) {
      return;
    }
    if (event.previousContainer === event.container && event.previousIndex === event.currentIndex) {
      return;
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    this._postman
      .upsertEndpointLayout(endpoint, {
        folder: folderId,
        sortOrder: event.currentIndex,
      })
      .subscribe({
        next: () => this._postman.loadExplorerData(),
        error: (e) => {
          console.error(e);
          this._postman.loadExplorerData();
        },
      });
  }
}
