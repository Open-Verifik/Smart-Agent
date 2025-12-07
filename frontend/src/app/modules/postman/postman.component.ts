import { Component, computed, effect, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoPipe } from '@jsverse/transloco';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RequestEditorComponent } from './request-editor/request-editor.component';
import { ResponseViewerComponent } from './response-viewer/response-viewer.component';
import { PostmanService } from './postman.service';

@Component({
  selector: 'app-postman',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    RequestEditorComponent,
    ResponseViewerComponent,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    TranslocoPipe,
  ],
  template: `
    <div
      class="flex h-screen w-full overflow-hidden bg-[#f8fafc] dark:bg-[#0f172a] select-none text-slate-900 dark:text-slate-100 font-sans"
    >
      <!-- Sidebar -->
      <div
        class="flex-shrink-0 transition-all duration-300 ease-in-out h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-20"
        [style.width.px]="sidebarWidth"
      >
        <postman-sidebar [collapsed]="sidebarCollapsed" (toggleCollapsed)="toggleSidebar()">
        </postman-sidebar>
      </div>

      <!-- Main Content Wrapper -->
      <div class="flex-1 flex flex-col h-full min-w-0 bg-[#f8fafc] dark:bg-[#0f172a]">
        <!-- Toolbar / Header -->
        <div class="h-16 flex items-center justify-between px-6 py-3 bg-transparent z-10">
          <!-- Country Filters (Pill Style) -->
          <div
            class="flex items-center gap-1.5 overflow-x-auto scrollbar-hide mask-gradient max-w-[60%] p-1"
          >
            <button
              *ngFor="let country of countries()"
              (click)="toggleCountry(country.name)"
              [class.bg-white]="selectedCountry() !== country.name"
              [class.shadow-sm]="selectedCountry() !== country.name"
              [class.border-slate-200]="selectedCountry() !== country.name"
              [class.bg-slate-900]="selectedCountry() === country.name"
              [class.text-white]="selectedCountry() === country.name"
              [class.border-transparent]="selectedCountry() === country.name"
              class="h-9 w-9 min-w-[2.25rem] flex items-center justify-center rounded-full border transition-all duration-200 relative group text-lg flex-shrink-0 aspect-square"
              [matTooltip]="country.name + ' (' + country.count + ')'"
            >
              <span class="leading-none">{{ getCountryFlag(country.name) }}</span>
            </button>
          </div>

          <div class="flex items-center gap-3">
            <!-- Payment Method Toggle (Privy-style: JWT | x402) -->
            <div
              class="flex items-center bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm"
            >
              <button
                class="px-3 py-1.5 rounded-md transition-all text-xs font-medium"
                [class.bg-slate-100]="paymentMethod() === 'jwt'"
                [class.text-slate-900]="paymentMethod() === 'jwt'"
                [class.dark:bg-slate-700]="paymentMethod() === 'jwt'"
                [class.dark:text-white]="paymentMethod() === 'jwt'"
                [class.text-slate-500]="paymentMethod() !== 'jwt'"
                [class.hover:text-slate-900]="paymentMethod() !== 'jwt'"
                (click)="setPaymentMethod('jwt')"
                matTooltip="Authenticate with JWT Token"
              >
                JWT
              </button>
              <div class="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-0.5"></div>
              <button
                class="px-3 py-1.5 rounded-md transition-all text-xs font-medium"
                [class.bg-slate-100]="paymentMethod() === 'x402'"
                [class.text-slate-900]="paymentMethod() === 'x402'"
                [class.dark:bg-slate-700]="paymentMethod() === 'x402'"
                [class.dark:text-white]="paymentMethod() === 'x402'"
                [class.text-slate-500]="paymentMethod() !== 'x402'"
                [class.hover:text-slate-900]="paymentMethod() !== 'x402'"
                (click)="setPaymentMethod('x402')"
                matTooltip="Pay with x402 Wallet"
              >
                x402
              </button>
            </div>

            <!-- Layout Toggles (Joined Segmented Control) -->
            <div
              class="flex items-center bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm"
            >
              <button
                class="p-1.5 px-3 rounded-md transition-all text-slate-500 hover:text-slate-900"
                [class.bg-slate-100]="layout === 'horizontal'"
                [class.text-slate-900]="layout === 'horizontal'"
                [class.font-medium]="layout === 'horizontal'"
                [class.dark:bg-slate-700]="layout === 'horizontal'"
                [class.dark:text-white]="layout === 'horizontal'"
                (click)="setLayout('horizontal')"
                [matTooltip]="'postman.layout.splitVertical' | transloco"
              >
                <mat-icon class="!w-4 !h-4 !text-[16px]">view_column</mat-icon>
              </button>
              <div class="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-1"></div>
              <button
                class="p-1.5 px-3 rounded-md transition-all text-slate-500 hover:text-slate-900"
                [class.bg-slate-100]="layout === 'vertical'"
                [class.text-slate-900]="layout === 'vertical'"
                [class.font-medium]="layout === 'vertical'"
                [class.dark:bg-slate-700]="layout === 'vertical'"
                [class.dark:text-white]="layout === 'vertical'"
                (click)="setLayout('vertical')"
                [matTooltip]="'postman.layout.splitHorizontal' | transloco"
              >
                <mat-icon class="!w-4 !h-4 !text-[16px]">view_stream</mat-icon>
              </button>
            </div>
          </div>
        </div>

        <!-- Split Content Area -->
        <div
          class="flex-1 flex min-w-0 min-h-0 p-4 pt-0 gap-4"
          [class.flex-row]="layout === 'horizontal'"
          [class.flex-col]="layout === 'vertical'"
          (mousemove)="onDrag($event)"
          (mouseup)="stopDrag()"
          (mouseleave)="stopDrag()"
        >
          <!-- Request Editor Panel -->
          <div
            [class.h-full]="layout === 'horizontal'"
            [class.w-full]="layout === 'vertical'"
            [style.width.%]="layout === 'horizontal' ? requestPanelSize : 100"
            [style.height.%]="layout === 'vertical' ? requestPanelSize : 100"
            class="min-w-0 min-h-0 relative overflow-hidden flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <postman-request-editor></postman-request-editor>
          </div>

          <!-- Resizer Handle -->
          <div
            class="hover:bg-blue-500/20 active:bg-blue-500/40 transition-colors rounded-full flex-shrink-0 z-10 flex items-center justify-center"
            [class.w-4]="layout === 'horizontal'"
            [class.h-4]="layout === 'vertical'"
            [class.h-full]="layout === 'horizontal'"
            [class.w-full]="layout === 'vertical'"
            [class.cursor-col-resize]="layout === 'horizontal'"
            [class.cursor-row-resize]="layout === 'vertical'"
            (mousedown)="startDrag($event, layout === 'horizontal' ? 'horizontal' : 'vertical')"
          >
            <div
              class="bg-slate-300 dark:bg-slate-700 rounded-full"
              [class.w-1]="layout === 'horizontal'"
              [class.h-8]="layout === 'horizontal'"
              [class.h-1]="layout === 'vertical'"
              [class.w-8]="layout === 'vertical'"
            ></div>
          </div>

          <!-- Response Viewer Panel -->
          <div
            class="flex-1 min-w-0 min-h-0 overflow-hidden flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <postman-response-viewer></postman-response-viewer>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class PostmanComponent {
  private _postmanService = inject(PostmanService);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);

  sidebarCollapsed = false;
  sidebarWidth = 280; // Expanded width

  // Layout State
  layout: 'horizontal' | 'vertical' = 'horizontal';

  // Resizable Split (Size in Percentage)
  requestPanelSize = 50;
  isDragging = false;
  dragMode: 'horizontal' | 'vertical' | null = null;

  // Flag to prevent cyclic updates
  private _isNavigating = false;

  selectedCountry = this._postmanService.selectedCountry;

  countries = computed(() => {
    const endpoints = this._postmanService.endpoints();
    const counts: Record<string, number> = {};

    endpoints.forEach((ep) => {
      if (ep.country) {
        counts[ep.country] = (counts[ep.country] || 0) + 1;
      }
    });

    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  });

  // Payment Method State
  paymentMethod = this._postmanService.paymentMethod;

  toggleCountry(country: string) {
    this.selectedCountry.update((c) => (c === country ? null : country));
  }

  setPaymentMethod(method: 'jwt' | 'x402') {
    this._postmanService.paymentMethod.set(method);
  }

  getCountryFlag(country: string): string {
    const map: Record<string, string> = {
      Colombia: '🇨🇴',
      'United States': '🇺🇸',
      Peru: '🇵🇪',
      world: '🌐',
      Mexico: '🇲🇽',
      Brazil: '🇧🇷',
      Chile: '🇨🇱',
      Argentina: '🇦🇷',
      Ecuador: '🇪🇨',
      Venezuela: '🇻🇪',
      Bolivia: '🇧🇴',
      Uruguay: '🇺🇾',
      Paraguay: '🇵🇾',
      Panama: '🇵🇦',
      'Costa Rica': '🇨🇷',
      Guatemala: '🇬🇹',
      Honduras: '🇭🇳',
      'El Salvador': '🇸🇻',
      'Dominican Republic': '🇩🇴',
      'República Dominicana': '🇩🇴',
      Canada: '🇨🇦',
      Spain: '🇪🇸',
    };
    return map[country] || '🏳️';
  }

  constructor() {
    // Effect: Sync URL -> Selected Endpoint (Initial Load / Refresh)
    effect(
      () => {
        const endpoints = this._postmanService.endpoints();
        if (endpoints.length > 0 && !this._postmanService.selectedEndpoint()) {
          // Check query param
          const urlParam = this._route.snapshot.queryParamMap.get('url');
          if (urlParam) {
            const found = endpoints.find((ep) => ep.url.endsWith(urlParam) || ep.url === urlParam);
            if (found) {
              this._postmanService.selectEndpoint(found);
            }
          }
        }
      },
      { allowSignalWrites: true },
    );

    // Effect: Selected Endpoint -> Sync URL
    effect(() => {
      const selected = this._postmanService.selectedEndpoint();
      if (selected) {
        // Extract the relative part if possible or use full URL
        // User asked for 'v2/co/cedula'
        // If endpoint.url is 'https://api.verifik.app/v2/co/cedula', we want 'v2/co/cedula'

        let urlToSet = selected.url;
        // Simple heuristic: if it contains /v2/, take from there
        if (urlToSet.includes('/v2/')) {
          urlToSet = urlToSet.substring(urlToSet.indexOf('v2/'));
        }

        // Manually construct URL to avoid %2F encoding of slashes
        const urlTree = this._router.createUrlTree([], {
          relativeTo: this._route,
          queryParams: { url: urlToSet },
          queryParamsHandling: 'merge',
        });

        // Convert to string and unescape slashes
        const urlString = this._router.serializeUrl(urlTree).replace(/%2F/g, '/');

        this._router.navigateByUrl(urlString, {
          replaceUrl: true,
        });
      }
    });
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.sidebarWidth = this.sidebarCollapsed ? 64 : 256;
  }

  setLayout(mode: 'horizontal' | 'vertical') {
    this.layout = mode;
  }

  startDrag(event: MouseEvent, mode: 'horizontal' | 'vertical') {
    event.preventDefault();
    this.isDragging = true;
    this.dragMode = mode;
  }

  stopDrag() {
    this.isDragging = false;
    this.dragMode = null;
  }

  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;

    // Use dragMode or fallback to layout
    const mode = this.dragMode || this.layout;

    // We need the container dimensions.
    // The event is on the container (mousemove), so currentTarget is the container.
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();

    let newSizePercent = 50;

    if (mode === 'horizontal') {
      const offsetX = event.clientX - rect.left;
      newSizePercent = (offsetX / rect.width) * 100;
    } else {
      const offsetY = event.clientY - rect.top;
      newSizePercent = (offsetY / rect.height) * 100;
    }

    // Clamp
    if (newSizePercent < 20) newSizePercent = 20;
    if (newSizePercent > 80) newSizePercent = 80;

    this.requestPanelSize = newSizePercent;
  }
}
