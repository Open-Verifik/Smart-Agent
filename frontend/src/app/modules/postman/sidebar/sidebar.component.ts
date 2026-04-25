import {
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { filter } from 'rxjs';
import { PostmanService } from '../postman.service';
import {
  ApiEndpoint,
  PostmanFolderDto,
  SidebarFolderNode,
} from '../postman.types';
import { PostmanSidebarFolderComponent } from './sidebar-folder.component';
import {
  PostmanDeleteFolderDialogComponent,
  PostmanDeleteFolderDialogData,
} from '../postman-delete-folder-dialog.component';
import {
  PostmanRenameFolderDialogComponent,
  PostmanRenameFolderDialogData,
} from '../postman-rename-folder-dialog.component';
import {
  PostmanTextPromptDialogComponent,
  PostmanTextPromptData,
} from '../postman-text-prompt-dialog.component';
import {
  PostmanRenameEndpointDialogComponent,
  PostmanRenameEndpointDialogData,
} from '../postman-rename-endpoint-dialog.component';

function buildFolderTree(
  folders: PostmanFolderDto[],
  endpointsByFolder: Map<string, ApiEndpoint[]>,
  parentKey: string,
): SidebarFolderNode[] {
  const level = folders
    .filter((f) => String(f.parentFolder ?? '') === parentKey)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0) || a.name.localeCompare(b.name));
  return level.map((folder) => ({
    folder,
    children: buildFolderTree(folders, endpointsByFolder, folder._id),
    endpoints: (endpointsByFolder.get(folder._id) || []).sort((a, b) => {
      const d = (a.layoutSortOrder ?? 0) - (b.layoutSortOrder ?? 0);
      if (d !== 0) {
        return d;
      }
      return (a.label || '').localeCompare(b.label || '');
    }),
  }));
}

function pruneFolderTree(nodes: SidebarFolderNode[]): SidebarFolderNode[] {
  const out: SidebarFolderNode[] = [];
  for (const n of nodes) {
    const children = pruneFolderTree(n.children);
    if (n.endpoints.length > 0 || children.length > 0) {
      out.push({ ...n, children });
    }
  }
  return out;
}

@Component({
  selector: 'postman-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    DragDropModule,
    TranslocoPipe,
    PostmanSidebarFolderComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="flex flex-col w-full h-full bg-slate-50 border-r dark:bg-slate-900 dark:border-slate-800 transition-all duration-300"
    >
      <div
        class="h-14 flex items-center justify-between px-2 border-b dark:border-slate-800 flex-shrink-0 gap-1"
      >
        <div class="font-bold text-slate-800 dark:text-slate-100 truncate pl-2" *ngIf="!collapsed">
          {{ 'postman.sidebar.title' | transloco }}
        </div>
        <div class="flex items-center gap-0" *ngIf="!collapsed && postman.useLayoutSidebar()">
          <button
            type="button"
            mat-icon-button
            class="text-slate-500"
            [matMenuTriggerFor]="layoutMenu"
            [matTooltip]="'postman.sidebar.layoutActions' | transloco"
          >
            <mat-icon class="!w-5 !h-5 !text-[20px]">folder_special</mat-icon>
          </button>
          <mat-menu #layoutMenu="matMenu">
            <button mat-menu-item (click)="openNewRootFolder()">
              <mat-icon class="!w-4 !h-4 !mr-2">create_new_folder</mat-icon>
              {{ 'postman.sidebar.newFolder' | transloco }}
            </button>
          </mat-menu>
        </div>
        <button
          mat-icon-button
          (click)="toggleCollapsed.emit()"
          class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 ml-auto"
        >
          <mat-icon>{{ collapsed ? 'menu_open' : 'chevron_left' }}</mat-icon>
        </button>
      </div>

      <div
        *ngIf="postman.layoutError() && !collapsed"
        class="px-3 py-2 text-xs text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-900"
      >
        {{ postman.layoutError()! | transloco }}
      </div>

      <div *ngIf="postman.layoutLoading() && !collapsed" class="flex justify-center py-2 border-b dark:border-slate-800">
        <mat-spinner diameter="22"></mat-spinner>
      </div>

      <div class="p-2 border-b dark:border-slate-800" *ngIf="!collapsed">
        <div class="relative">
          <mat-icon
            class="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 !w-4 !h-4 !text-[16px]"
          >
            search
          </mat-icon>
          <input
            type="text"
            [ngModel]="searchQuery()"
            (ngModelChange)="searchQuery.set($event)"
            [placeholder]="'postman.sidebar.search' | transloco"
            class="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-md py-1.5 pl-8 pr-3 text-xs text-slate-700 dark:text-slate-300 focus:ring-1 focus:ring-blue-500 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div class="flex-1 overflow-y-auto p-2 space-y-2">
        <!-- Collapsed + layout: flat list -->
        <ng-container *ngIf="postman.useLayoutSidebar() && collapsed">
          <a
            *ngFor="let endpoint of flatLayoutEndpoints(); trackBy: trackByEndpoint"
            [routerLink]="['/postman']"
            [queryParams]="endpoint.code ? { code: endpoint.code } : {}"
            queryParamsHandling="merge"
            (click)="select(endpoint)"
            class="w-full flex items-center justify-center py-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 no-underline"
            [matTooltip]="endpoint.code || endpoint.label"
            matTooltipPosition="right"
          >
            <span
              class="text-[10px] font-bold rounded px-1 py-0.5 w-full text-center"
              [ngClass]="{
                'bg-green-100 text-green-700': endpoint.method === 'GET',
                'bg-yellow-100 text-yellow-700': endpoint.method === 'POST',
                'bg-blue-100 text-blue-700': endpoint.method === 'PUT',
                'bg-red-100 text-red-700': endpoint.method === 'DELETE',
              }"
            >
              {{ endpoint.method.substring(0, 1) }}
            </span>
          </a>
        </ng-container>

        <!-- Layout mode expanded -->
        <ng-container *ngIf="postman.useLayoutSidebar() && !collapsed">
          <div cdkDropListGroup>
            <postman-sidebar-folder
              [nodes]="layoutTreeRoots()"
              [sidebarCollapsed]="collapsed"
              [collapsedFolderIds]="collapsedFolderIds()"
              [folderMenuOptions]="folderMenuOptions()"
              [selectedEndpoint]="selectedEndpoint()"
              [searchQuery]="searchQuery()"
              (toggleFolderCollapse)="toggleFolderCollapse($event)"
              (addSubfolder)="openNewSubfolder($event)"
              (renameFolder)="openRenameFolder($event)"
              (deleteFolder)="confirmDeleteFolder($event)"
              (selectEndpoint)="select($event)"
              (moveEndpoint)="onMoveEndpoint($event)"
              (renameEndpoint)="openRenameEndpoint($event)"
            />
          </div>

          <div
            *ngIf="libraryCategories().length"
            class="mt-3 pt-2 border-t border-slate-200 dark:border-slate-700"
          >
            <div
              class="text-xs font-bold text-slate-500 uppercase px-3 py-2 truncate"
              *ngIf="!collapsed"
            >
              {{ 'postman.sidebar.library' | transloco }}
            </div>
            <div *ngFor="let category of libraryCategories(); trackBy: trackByCategory">
              <div
                *ngIf="!collapsed"
                (click)="toggleCategory(category.name)"
                class="text-xs font-bold text-slate-500 uppercase px-3 py-2 truncate flex items-center justify-between cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors select-none group/header"
              >
                <span>{{ 'categories.' + category.name | transloco }}</span>
                <mat-icon
                  class="!w-4 !h-4 !text-[16px] text-slate-400 group-hover/header:text-slate-600 dark:group-hover/header:text-slate-300 transition-transform"
                  [class.rotate-180]="collapsedCategories().has(category.name)"
                >
                  expand_more
                </mat-icon>
              </div>
              <div
                class="space-y-1"
                [class.hidden]="
                  !collapsed && collapsedCategories().has(category.name) && !searchQuery()
                "
              >
                <div
                  *ngFor="let endpoint of category.endpoints; trackBy: trackByEndpoint"
                  class="flex items-center rounded-md hover:bg-slate-200 dark:hover:bg-slate-800"
                  [class.bg-blue-100]="selectedEndpoint()?.id === endpoint.id"
                  [class.dark:bg-blue-900]="selectedEndpoint()?.id === endpoint.id"
                >
                  <a
                    [routerLink]="['/postman']"
                    [queryParams]="endpoint.code ? { code: endpoint.code } : {}"
                    queryParamsHandling="merge"
                    routerLinkActive="bg-blue-100 dark:bg-blue-900"
                    [routerLinkActiveOptions]="{ exact: false }"
                    (click)="select(endpoint)"
                    class="flex-1 min-w-0 flex items-center px-3 py-2 text-sm text-left no-underline text-inherit rounded-md"
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
                      {{ endpoint.method }}
                    </span>
                    <span class="truncate select-text">
                      <ng-container *ngIf="hasLayoutDisplayName(endpoint); else libTitle">
                        {{ endpoint.layoutDisplayName }}
                      </ng-container>
                      <ng-template #libTitle>
                        {{
                          endpoint.code
                            ? ('appFeatures.' + endpoint.code + '.title' | transloco)
                            : endpoint.label
                        }}
                      </ng-template>
                    </span>
                  </a>
                  <button
                    *ngIf="endpoint.code"
                    type="button"
                    mat-icon-button
                    class="!w-7 !h-7 flex-shrink-0 opacity-60 hover:opacity-100"
                    [matMenuTriggerFor]="libEpMenu"
                    [matTooltip]="'postman.sidebar.endpointMenuTooltip' | transloco"
                    matTooltipPosition="left"
                    (click)="$event.preventDefault(); $event.stopPropagation()"
                  >
                    <mat-icon class="!w-4 !h-4 !text-[18px]">more_vert</mat-icon>
                  </button>
                  <mat-menu #libEpMenu="matMenu" class="postman-endpoint-actions-menu">
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
                        (click)="onMoveEndpoint({ endpoint, folderId: null })"
                      >
                        <mat-icon class="!w-4 !h-4 !mr-2 text-slate-500">inventory_2</mat-icon>
                        <span>{{ 'postman.sidebar.moveToLibrary' | transloco }}</span>
                      </button>
                      <button
                        *ngFor="let opt of folderMenuOptionsFiltered(endpoint)"
                        mat-menu-item
                        (click)="onMoveEndpoint({ endpoint, folderId: opt.id })"
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
                    <button mat-menu-item (click)="openRenameEndpoint(endpoint)">
                      <mat-icon class="!w-4 !h-4 !mr-2 text-slate-500">edit</mat-icon>
                      {{ 'postman.sidebar.renameEndpoint' | transloco }}
                    </button>
                  </mat-menu>
                </div>
              </div>
            </div>
          </div>
        </ng-container>

        <!-- Category mode (no saved layout) -->
        <ng-container *ngIf="!postman.useLayoutSidebar()">
          <div *ngFor="let category of categories(); trackBy: trackByCategory">
            <div
              *ngIf="!collapsed"
              (click)="toggleCategory(category.name)"
              class="text-xs font-bold text-slate-500 uppercase px-3 py-2 truncate flex items-center justify-between cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors select-none group/header"
            >
              <span>{{ 'categories.' + category.name | transloco }}</span>
              <mat-icon
                class="!w-4 !h-4 !text-[16px] text-slate-400 group-hover/header:text-slate-600 dark:group-hover/header:text-slate-300 transition-transform"
                [class.rotate-180]="collapsedCategories().has(category.name)"
              >
                expand_more
              </mat-icon>
            </div>
            <div *ngIf="collapsed" class="h-px bg-slate-200 dark:bg-slate-700 mx-2 my-2"></div>

            <div
              class="space-y-1"
              [class.hidden]="
                !collapsed && collapsedCategories().has(category.name) && !searchQuery()
              "
            >
              <a
                *ngFor="let endpoint of category.endpoints; trackBy: trackByEndpoint"
                [routerLink]="['/postman']"
                [queryParams]="endpoint.code ? { code: endpoint.code } : {}"
                queryParamsHandling="merge"
                routerLinkActive="bg-blue-100 dark:bg-blue-900"
                [routerLinkActiveOptions]="{ exact: false }"
                (click)="select(endpoint)"
                class="w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 text-left group relative no-underline text-inherit"
                [class.bg-blue-100]="selectedEndpoint()?.id === endpoint.id"
                [class.dark:bg-blue-900]="selectedEndpoint()?.id === endpoint.id"
                [matTooltip]="
                  collapsed
                    ? endpoint.code
                      ? ('appFeatures.' + endpoint.code + '.title' | transloco)
                      : endpoint.label
                    : ''
                "
                matTooltipPosition="right"
              >
                <span
                  class="text-[10px] font-bold rounded px-1 py-0.5 flex-shrink-0 flex items-center justify-center transition-all duration-300"
                  [ngClass]="{
                    'bg-green-100 text-green-700': endpoint.method === 'GET',
                    'bg-yellow-100 text-yellow-700': endpoint.method === 'POST',
                    'bg-blue-100 text-blue-700': endpoint.method === 'PUT',
                    'bg-red-100 text-red-700': endpoint.method === 'DELETE',
                    'mr-2 w-10': !collapsed,
                    'w-full': collapsed,
                  }"
                >
                  {{ collapsed ? endpoint.method.substring(0, 1) : endpoint.method }}
                </span>
                <span *ngIf="!collapsed" class="truncate select-text">
                  {{
                    endpoint.code
                      ? ('appFeatures.' + endpoint.code + '.title' | transloco)
                      : endpoint.label
                  }}
                </span>
              </a>
            </div>
          </div>
        </ng-container>

        <div *ngIf="isEmptySidebar()" class="p-4 text-center text-slate-500 text-sm">
          <span *ngIf="searchQuery()">{{ 'postman.sidebar.noResults' | transloco }}</span>
          <span *ngIf="!searchQuery() && selectedCountry()">
            {{ 'postman.sidebar.noCountry' | transloco: { country: selectedCountry()! } }}
          </span>
        </div>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  @Input() collapsed: boolean = false;
  @Output() toggleCollapsed = new EventEmitter<void>();

  postman = inject(PostmanService);
  private _dialog = inject(MatDialog);
  private _transloco = inject(TranslocoService);

  searchQuery = signal('');
  selectedEndpoint = this.postman.selectedEndpoint;
  collapsedCategories = signal<Set<string>>(new Set());
  collapsedFolderIds = signal<Set<string>>(new Set());
  selectedCountry = this.postman.selectedCountry;

  folderMenuOptions = computed(() => this.postman.flattenFoldersForMenu());

  folderMenuOptionsFiltered(endpoint: ApiEndpoint): { id: string; label: string }[] {
    const cur = endpoint.postmanFolderId ?? null;
    return this.folderMenuOptions().filter((o) => o.id !== cur);
  }

  hasMoveTargets(endpoint: ApiEndpoint): boolean {
    if (endpoint.postmanFolderId) {
      return true;
    }
    return this.folderMenuOptionsFiltered(endpoint).length > 0;
  }

  /**
   * Matches catalog fields, custom display name, and translated appFeatures title (same sources as visible labels).
   */
  private endpointSearchTextMatches(endpoint: ApiEndpoint, query: string): boolean {
    if (
      endpoint.label.toLowerCase().includes(query) ||
      endpoint.url.toLowerCase().includes(query) ||
      (endpoint.code && endpoint.code.toLowerCase().includes(query)) ||
      (endpoint.layoutDisplayName && endpoint.layoutDisplayName.toLowerCase().includes(query))
    ) {
      return true;
    }
    if (endpoint.code) {
      const title = this._transloco
        .translate(`appFeatures.${endpoint.code}.title`)
        .toLowerCase();
      return title.includes(query);
    }
    return false;
  }

  /**
   * True when the endpoint's folder or any ancestor folder name contains the query.
   */
  private folderChainMatchesQuery(
    folderId: string | null | undefined,
    query: string,
    folderById: Map<string, PostmanFolderDto>,
  ): boolean {
    if (!folderId) {
      return false;
    }
    let id: string | null = String(folderId);
    while (id) {
      const folder = folderById.get(id);
      if (!folder) {
        break;
      }
      if (folder.name?.toLowerCase().includes(query)) {
        return true;
      }
      const parent = folder.parentFolder;
      id = parent != null && parent !== '' ? String(parent) : null;
    }
    return false;
  }

  filteredEndpoints = computed(() => {
    const endpoints = this.postman.endpoints();
    const query = this.searchQuery().toLowerCase();
    const country = this.selectedCountry();
    const folderById = new Map(this.postman.layoutFolders().map((f) => [f._id, f]));

    return endpoints.filter((endpoint) => {
      if (country && endpoint.country !== country) {
        return false;
      }
      if (!query) {
        return true;
      }
      return (
        this.endpointSearchTextMatches(endpoint, query) ||
        this.folderChainMatchesQuery(endpoint.postmanFolderId, query, folderById)
      );
    });
  });

  layoutTreeRoots = computed(() => {
    const filtered = this.filteredEndpoints();
    const inFolder = filtered.filter((ep) => ep.postmanFolderId);
    const map = new Map<string, ApiEndpoint[]>();
    for (const ep of inFolder) {
      const fid = ep.postmanFolderId as string;
      if (!map.has(fid)) {
        map.set(fid, []);
      }
      map.get(fid)!.push(ep);
    }
    const folders = this.postman.layoutFolders();
    const roots = buildFolderTree(folders, map, '');
    const searching = Boolean(this.searchQuery().trim());
    return searching ? pruneFolderTree(roots) : roots;
  });

  libraryCategories = computed(() => {
    const filtered = this.filteredEndpoints().filter((ep) => !ep.postmanFolderId);
    const groups = filtered.reduce(
      (acc, endpoint) => {
        const category = endpoint.category || 'OTHER';
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(endpoint);
        return acc;
      },
      {} as Record<string, ApiEndpoint[]>,
    );
    return Object.entries(groups)
      .map(([name, endpoints]) => ({ name, endpoints }))
      .filter((g) => g.endpoints.length > 0)
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  flatLayoutEndpoints = computed(() => {
    const list = this.filteredEndpoints();
    return [...list].sort((a, b) => {
      const fa = a.postmanFolderId || '';
      const fb = b.postmanFolderId || '';
      if (fa !== fb) {
        return fa.localeCompare(fb);
      }
      return (a.layoutSortOrder ?? 0) - (b.layoutSortOrder ?? 0) || a.label.localeCompare(b.label);
    });
  });

  categories = computed(() => {
    const endpoints = this.postman.endpoints();
    const query = this.searchQuery().toLowerCase();
    const country = this.selectedCountry();
    const folderById = new Map(this.postman.layoutFolders().map((f) => [f._id, f]));

    const groups = endpoints.reduce(
      (acc, endpoint) => {
        if (country && endpoint.country !== country) {
          return acc;
        }

        const category = endpoint.category || 'OTHER';
        if (!acc[category]) {
          acc[category] = [];
        }
        if (
          !query ||
          this.endpointSearchTextMatches(endpoint, query) ||
          this.folderChainMatchesQuery(endpoint.postmanFolderId, query, folderById)
        ) {
          acc[category].push(endpoint);
        }
        return acc;
      },
      {} as Record<string, ApiEndpoint[]>,
    );

    return Object.entries(groups)
      .map(([name, endpoints]) => ({ name, endpoints }))
      .filter((g) => g.endpoints.length > 0)
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  isEmptySidebar(): boolean {
    if (this.postman.useLayoutSidebar()) {
      if (this.collapsed) {
        return this.flatLayoutEndpoints().length === 0;
      }
      return this.layoutTreeRoots().length === 0 && this.libraryCategories().length === 0;
    }
    return this.categories().length === 0;
  }

  toggleCategory(categoryName: string) {
    this.collapsedCategories.update((set) => {
      const newSet = new Set(set);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  }

  toggleFolderCollapse(folderId: string) {
    this.collapsedFolderIds.update((set) => {
      const newSet = new Set(set);
      if (newSet.has(folderId)) {
        newSet.delete(folderId);
      } else {
        newSet.add(folderId);
      }
      return newSet;
    });
  }

  select(endpoint: ApiEndpoint) {
    this.postman.selectEndpoint(endpoint);
  }

  openNewRootFolder() {
    this._promptFolderName('postman.sidebar.newFolderTitle', 'postman.sidebar.folderName').subscribe(
      (name) => {
        if (!name) {
          return;
        }
        this.postman.createFolder(name).subscribe({
          next: () => this.postman.loadExplorerData(),
          error: (e) => console.error(e),
        });
      },
    );
  }

  openNewSubfolder(parentId: string) {
    this._promptFolderName('postman.sidebar.newSubfolderTitle', 'postman.sidebar.folderName').subscribe(
      (name) => {
        if (!name) {
          return;
        }
        this.postman.createFolder(name, parentId).subscribe({
          next: () => this.postman.loadExplorerData(),
          error: (e) => console.error(e),
        });
      },
    );
  }

  openRenameFolder(folder: PostmanFolderDto) {
    const data: PostmanRenameFolderDialogData = { folder };
    this._dialog
      .open(PostmanRenameFolderDialogComponent, {
        data,
        width: '640px',
        maxWidth: '94vw',
        autoFocus: 'dialog',
        panelClass: 'postman-folder-dialog-shell',
      })
      .afterClosed()
      .subscribe((name) => {
        if (name === undefined) {
          return;
        }
        const trimmed = name.trim();
        if (!trimmed || trimmed === folder.name) {
          return;
        }
        this.postman.updateFolder(folder._id, { name: trimmed }).subscribe({
          next: () => this.postman.loadExplorerData(),
          error: (e) => console.error(e),
        });
      });
  }

  confirmDeleteFolder(payload: {
    folder: PostmanFolderDto;
    subtreeEndpointCount: number;
    directChildFolderCount: number;
  }) {
    const data: PostmanDeleteFolderDialogData = {
      folderName: payload.folder.name,
      subtreeEndpointCount: payload.subtreeEndpointCount,
      directChildFolderCount: payload.directChildFolderCount,
    };
    this._dialog
      .open(PostmanDeleteFolderDialogComponent, {
        data,
        width: '640px',
        maxWidth: '94vw',
        autoFocus: 'dialog',
        panelClass: 'postman-folder-dialog-shell',
      })
      .afterClosed()
      .pipe(
        filter(
          (r): r is { deleteEndpointLayouts: boolean } =>
            r !== undefined && r !== null,
        ),
      )
      .subscribe((result) => {
        this.postman
          .deleteFolder(payload.folder._id, {
            deleteEndpointLayouts: result.deleteEndpointLayouts,
          })
          .subscribe({
            next: () => this.postman.loadExplorerData(),
            error: (e) => console.error(e),
          });
      });
  }

  onMoveEndpoint(payload: { endpoint: ApiEndpoint; folderId: string | null }) {
    const { endpoint, folderId } = payload;
    this.postman.upsertEndpointLayout(endpoint, { folder: folderId }).subscribe({
      next: () => this.postman.loadExplorerData(),
      error: (e) => console.error(e),
    });
  }

  openRenameEndpoint(endpoint: ApiEndpoint) {
    const defaultTitle = this._defaultEndpointCatalogTitle(endpoint);
    const currentLabel = this._resolvedSidebarLabel(endpoint, defaultTitle);
    const data: PostmanRenameEndpointDialogData = {
      endpoint,
      defaultTitle,
      currentLabel,
    };
    this._dialog
      .open(PostmanRenameEndpointDialogComponent, {
        data,
        width: '640px',
        maxWidth: '94vw',
        autoFocus: 'dialog',
        panelClass: 'postman-rename-endpoint-dialog-shell',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result === undefined) {
          return;
        }
        const trimmed = result;
        if (trimmed === (endpoint.layoutDisplayName ?? '').trim()) {
          return;
        }
        this.postman
          .upsertEndpointLayout(endpoint, {
            displayName: trimmed,
            folder: endpoint.postmanFolderId ?? null,
          })
          .subscribe({
            next: () => this.postman.loadExplorerData(),
            error: (e) => console.error(e),
          });
      });
  }

  /** Catalog / API default title shown in the explorer when no custom label exists. */
  private _defaultEndpointCatalogTitle(endpoint: ApiEndpoint): string {
    if (endpoint.code) {
      return this._transloco.translate(`appFeatures.${endpoint.code}.title`);
    }
    return endpoint.label;
  }

  /** Same visible label as the sidebar row (custom display name or catalog title). */
  private _resolvedSidebarLabel(endpoint: ApiEndpoint, defaultTitle: string): string {
    if (endpoint.layoutDisplayName?.trim()) {
      return endpoint.layoutDisplayName.trim();
    }
    return defaultTitle;
  }

  private _promptFolderName(titleKey: string, labelKey: string, initial = '') {
    const data: PostmanTextPromptData = {
      titleKey,
      labelKey,
      initialValue: initial,
      cancelKey: 'postman.sidebar.cancel',
      confirmKey: 'postman.sidebar.save',
    };
    return this._dialog
      .open(PostmanTextPromptDialogComponent, { data, width: '360px' })
      .afterClosed();
  }

  trackByCategory(index: number, category: { name: string; endpoints: ApiEndpoint[] }) {
    return category.name;
  }

  trackByEndpoint(index: number, endpoint: ApiEndpoint) {
    return endpoint.id;
  }

  hasLayoutDisplayName(ep: ApiEndpoint): boolean {
    return Boolean(ep.layoutDisplayName?.trim());
  }
}
