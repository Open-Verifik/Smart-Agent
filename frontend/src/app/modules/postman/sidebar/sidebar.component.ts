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
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoPipe } from '@jsverse/transloco';
import { PostmanService } from '../postman.service';
import { ApiEndpoint } from '../postman.types';

@Component({
  selector: 'postman-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    TranslocoPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="flex flex-col w-full h-full bg-slate-50 border-r dark:bg-slate-900 dark:border-slate-800 transition-all duration-300"
    >
      <!-- Header -->
      <div
        class="h-14 flex items-center justify-between px-4 border-b dark:border-slate-800 flex-shrink-0"
      >
        <div class="font-bold text-slate-800 dark:text-slate-100 truncate" *ngIf="!collapsed">
          {{ 'postman.sidebar.title' | transloco }}
        </div>
        <button
          mat-icon-button
          (click)="toggleCollapsed.emit()"
          class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
        >
          <mat-icon>{{ collapsed ? 'menu_open' : 'chevron_left' }}</mat-icon>
        </button>
      </div>

      <!-- Search -->
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

      <!-- Content -->
      <div class="flex-1 overflow-y-auto p-2 space-y-2">
        <div *ngFor="let category of categories(); trackBy: trackByCategory">
          <div
            *ngIf="!collapsed"
            (click)="toggleCategory(category.name)"
            class="text-xs font-bold text-slate-500 uppercase px-3 py-2 truncate flex items-center justify-between cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors select-none group/header"
          >
            <span>{{ category.name }}</span>
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
            <button
              *ngFor="let endpoint of category.endpoints; trackBy: trackByEndpoint"
              (click)="select(endpoint)"
              class="w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 text-left group relative"
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
              <span *ngIf="!collapsed" class="truncate">
                {{
                  endpoint.code
                    ? ('appFeatures.' + endpoint.code + '.title' | transloco)
                    : endpoint.label
                }}
              </span>
            </button>
          </div>
        </div>

        <!-- Empty State -->
        <div *ngIf="categories().length === 0" class="p-4 text-center text-slate-500 text-sm">
          <span *ngIf="searchQuery()">No collections found for "{{ searchQuery() }}"</span>
          <span *ngIf="!searchQuery() && selectedCountry()"
            >No collections found for {{ selectedCountry() }}</span
          >
        </div>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  @Input() collapsed: boolean = false;
  @Output() toggleCollapsed = new EventEmitter<void>();

  private _postmanService = inject(PostmanService);

  searchQuery = signal('');
  selectedEndpoint = this._postmanService.selectedEndpoint;
  collapsedCategories = signal<Set<string>>(new Set());
  selectedCountry = this._postmanService.selectedCountry;

  categories = computed(() => {
    const endpoints = this._postmanService.endpoints();
    const query = this.searchQuery().toLowerCase();
    const country = this.selectedCountry();

    // Group by category
    const groups = endpoints.reduce(
      (acc, endpoint) => {
        // Filter by country
        if (country && endpoint.country !== country) {
          return acc;
        }

        const category = endpoint.category || 'Other';
        if (!acc[category]) {
          acc[category] = [];
        }
        // Filter by search query
        if (
          !query ||
          endpoint.label.toLowerCase().includes(query) ||
          endpoint.url.toLowerCase().includes(query)
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

  select(endpoint: ApiEndpoint) {
    this._postmanService.selectEndpoint(endpoint);
  }

  // TrackBy functions for performance
  trackByCategory(index: number, category: { name: string; endpoints: ApiEndpoint[] }) {
    return category.name;
  }

  trackByEndpoint(index: number, endpoint: ApiEndpoint) {
    return endpoint.id;
  }
}
