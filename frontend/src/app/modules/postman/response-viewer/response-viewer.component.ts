import { Component, inject, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';
import { PostmanService } from '../postman.service';
import { JsonTableComponent } from './json-table.component';

@Component({
  selector: 'postman-response-viewer',
  standalone: true,
  imports: [CommonModule, JsonTableComponent, MatButtonModule, MatIconModule, TranslocoPipe],
  host: { class: 'block h-full' },
  template: `
    <div class="flex flex-col h-full overflow-hidden bg-transparent">
      <div
        class="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0"
      >
        <div class="font-bold text-xs uppercase tracking-wider text-slate-500">
          {{ 'postman.responseViewer.title' | transloco }}
        </div>

        <div class="flex items-center gap-2">
          <!-- View Switcher -->
          <div class="flex items-center gap-2" *ngIf="response()">
            <div
              class="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 border border-slate-200 dark:border-slate-700"
            >
              <button
                (click)="viewMode.set('json')"
                [class.bg-white]="viewMode() === 'json'"
                [class.dark:bg-slate-700]="viewMode() === 'json'"
                [class.shadow-sm]="viewMode() === 'json'"
                class="px-3 py-1 text-xs rounded-md transition-all font-medium text-slate-600 dark:text-slate-300"
              >
                {{ 'postman.responseViewer.viewMode.json' | transloco }}
              </button>
              <button
                (click)="viewMode.set('table')"
                [class.bg-white]="viewMode() === 'table'"
                [class.dark:bg-slate-700]="viewMode() === 'table'"
                [class.shadow-sm]="viewMode() === 'table'"
                class="px-3 py-1 text-xs rounded-md transition-all font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1"
              >
                {{ 'postman.responseViewer.viewMode.table' | transloco }}
              </button>
            </div>

            <!-- Full Screen Button -->
            <button
              mat-icon-button
              class="!w-8 !h-8 flex items-center justify-center text-slate-400 hover:text-blue-600"
              (click)="isFullScreen.set(true)"
              [title]="'postman.responseViewer.fullScreen' | transloco"
            >
              <mat-icon class="!text-[18px] !w-[18px] !h-[18px]">open_in_full</mat-icon>
            </button>
          </div>
        </div>
      </div>

      <div class="flex-1 min-h-0 flex flex-col overflow-hidden p-4 relative">
        <div
          *ngIf="isLoading()"
          class="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-black/50 z-10 backdrop-blur-sm"
        >
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>

        <div *ngIf="response(); else noResponse" class="flex flex-col h-full overflow-hidden">
          <div class="flex items-center gap-4 mb-4 text-xs flex-shrink-0">
            <span
              class="font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 border dark:border-slate-700"
              [ngClass]="{
                'text-green-600': response().status >= 200 && response().status < 300,
                'text-red-600': response().status >= 400,
              }"
            >
              {{ 'postman.responseViewer.status' | transloco }}: {{ response().status }}
              {{ response().statusText }}
            </span>
            <span class="text-slate-500 font-mono"
              >{{ 'postman.responseViewer.time' | transloco }}: {{ responseTime() ?? '--' }} ms
            </span>
          </div>

          <!-- Scrollable Content Area -->
          <div class="flex-1 overflow-auto min-h-0">
            <!-- JSON View -->
            <div *ngIf="viewMode() === 'json'" class="relative group">
              <button
                (click)="copyJson()"
                class="sticky top-2 right-2 float-right p-1.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity text-slate-600 dark:text-slate-300 flex items-center gap-1 z-10"
                [title]="'postman.responseViewer.copyJson' | transloco"
              >
                <span class="material-icons text-xs" style="font-size: 14px;">content_copy</span>
                {{ 'postman.responseViewer.copy' | transloco }}
              </button>
              <pre
                class="text-xs font-mono bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto select-text shadow-inner"
                >{{ response().body | json }}</pre
              >
            </div>

            <!-- Table View -->
            <div *ngIf="viewMode() === 'table'" class="h-full">
              <postman-json-table [data]="parsedBody()"></postman-json-table>
            </div>
          </div>
        </div>

        <ng-template #noResponse>
          <div
            *ngIf="error()"
            class="text-red-600 p-4 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-900/50 max-w-full"
          >
            <div class="font-bold mb-2 flex items-center gap-2">
              <span class="material-icons text-sm">error_outline</span>
              {{ 'postman.responseViewer.error' | transloco }}
            </div>
            <pre class="text-xs select-text overflow-x-auto">{{ error() | json }}</pre>
          </div>

          <div
            *ngIf="!error() && !isLoading()"
            class="h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-600"
          >
            <div class="text-6xl mb-4 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M14 12l-4-4v3H2v2h8v3m12-4a10 10 0 0 1-19.54 3h2.13a8 8 0 1 0 0-6H2.46A10 10 0 0 1 22 12"
                />
              </svg>
            </div>
            <div>{{ 'postman.responseViewer.noResponse' | transloco }}</div>
          </div>
        </ng-template>
      </div>

      <!-- Full Screen Overlay -->
      <div
        *ngIf="isFullScreen()"
        class="fixed inset-0 z-50 bg-white dark:bg-slate-950 flex flex-col animate-fade-in"
      >
        <!-- Full Screen Header -->
        <div
          class="flex items-center justify-between px-6 py-3 border-b dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm print:hidden"
        >
          <div class="flex items-center gap-3">
            <button
              mat-icon-button
              (click)="isFullScreen.set(false)"
              class="!text-slate-500 hover:!text-slate-800"
            >
              <mat-icon>arrow_back</mat-icon>
            </button>
            <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200">
              {{ 'postman.responseViewer.fullScreenTitle' | transloco }}
            </h2>
          </div>
          <div class="flex items-center gap-2">
            <button
              mat-stroked-button
              color="primary"
              (click)="print()"
              class="!flex !items-center !gap-2"
            >
              <mat-icon>print</mat-icon>
              {{ 'postman.responseViewer.print' | transloco }}
            </button>
            <button mat-icon-button color="warn" (click)="isFullScreen.set(false)">
              <mat-icon>close</mat-icon>
            </button>
          </div>
        </div>

        <!-- Full Screen Content -->
        <div
          class="flex-1 overflow-auto p-8 max-w-5xl mx-auto w-full print:p-0 print:overflow-visible"
        >
          <!-- Request Info Section -->
          <div
            class="mb-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg border dark:border-slate-800 print:border-0 print:p-0"
          >
            <h3
              class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 border-b pb-2"
            >
              {{ 'postman.responseViewer.requestInfo' | transloco }}
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4" *ngIf="selectedEndpoint() as ep">
              <div>
                <div class="text-xs text-slate-400 mb-1">
                  {{ 'postman.responseViewer.endpoint' | transloco }}
                </div>
                <div class="font-mono text-sm break-all font-medium">{{ ep.label }}</div>
              </div>
              <div>
                <div class="text-xs text-slate-400 mb-1">
                  {{ 'postman.responseViewer.method' | transloco }}
                </div>
                <div
                  class="font-mono text-sm font-bold"
                  [ngClass]="{
                    'text-green-600': ep.method === 'GET',
                    'text-yellow-600': ep.method === 'POST',
                    'text-blue-600': ep.method === 'PUT',
                    'text-red-600': ep.method === 'DELETE',
                  }"
                >
                  {{ ep.method }}
                </div>
              </div>
              <div class="col-span-1 md:col-span-2">
                <div class="text-xs text-slate-400 mb-1">
                  {{ 'postman.responseViewer.url' | transloco }}
                </div>
                <div
                  class="font-mono text-sm text-blue-600 dark:text-blue-400 break-all bg-white dark:bg-slate-800 p-2 rounded border dark:border-slate-700"
                >
                  {{ ep.url }}
                </div>
              </div>
            </div>
          </div>

          <!-- Response Section -->
          <div class="mb-8">
            <h3
              class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 border-b pb-2 flex items-center justify-between"
            >
              <span>{{ 'postman.responseViewer.responseBody' | transloco }}</span>
              <span class="text-xs font-normal normal-case" *ngIf="response()">
                {{ response().status }} {{ response().statusText }} ({{ responseTime() }}ms)
              </span>
            </h3>

            <div class="print:block">
              <!-- Always use Table view for print layout if parsed body exists, otherwise JSON -->
              <ng-container *ngIf="parsedBody() as body">
                <!-- Use Table with expandAll forced when printing -->
                <div class="border dark:border-slate-800 rounded-lg overflow-hidden">
                  <postman-json-table [data]="body" [expandAll]="isPrinting()"></postman-json-table>
                </div>
              </ng-container>

              <div
                *ngIf="!parsedBody() && response()"
                class="p-4 bg-slate-50 dark:bg-slate-900 rounded border font-mono text-xs whitespace-pre-wrap"
              >
                {{ response().body }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @media print {
        .print\\:hidden {
          display: none !important;
        }
        .print\\:block {
          display: block !important;
        }
        .print\\:p-0 {
          padding: 0 !important;
        }
        .print\\:overflow-visible {
          overflow: visible !important;
        }
        .print\\:border-0 {
          border: none !important;
        }
      }
      .animate-fade-in {
        animation: fadeIn 0.2s ease-out;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.98);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `,
  ],
})
export class ResponseViewerComponent {
  private _postmanService = inject(PostmanService);
  response = this._postmanService.response;
  responseTime = this._postmanService.responseTime;
  isLoading = this._postmanService.isLoading;
  error = this._postmanService.error;
  selectedEndpoint = this._postmanService.selectedEndpoint;

  viewMode = signal<'json' | 'table'>('json');
  isFullScreen = signal(false);
  isPrinting = signal(false);

  parsedBody = computed(() => {
    const res = this.response();
    if (!res || !res.body) return null;

    let body = res.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return body;
      }
    }
    return body;
  });

  copyJson() {
    const res = this.response();
    if (res && res.body) {
      const json = JSON.stringify(res.body, null, 2);
      navigator.clipboard.writeText(json).then(() => {
        console.log('JSON copied to clipboard');
      });
    }
  }

  @HostListener('window:keydown.control.p', ['$event'])
  @HostListener('window:keydown.meta.p', ['$event'])
  onPrintShortcut(event: KeyboardEvent) {
    if (this.isFullScreen()) {
      event.preventDefault();
      this.print();
    }
  }

  print() {
    this.isPrinting.set(true);
    // Slight delay to allow Angular to render the expanded table
    setTimeout(() => {
      window.print();
      // Reset after print dialog closes (or immediately, browser print blocks execution usually)
      // Actually, in many browsers window.print() is blocking, so this runs after dialog closes.
      // But to be safe and responsive...
      this.isPrinting.set(false);
    }, 500);
  }
}
