import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostmanService } from '../postman.service';
import { JsonTableComponent } from './json-table.component';

@Component({
  selector: 'postman-response-viewer',
  standalone: true,
  imports: [CommonModule, JsonTableComponent],
  template: `
    <div class="flex flex-col h-full bg-slate-50 dark:bg-slate-900 border-l dark:border-slate-800">
      <div
        class="flex items-center justify-between p-4 border-b dark:border-slate-800 bg-white dark:bg-slate-900"
      >
        <div class="font-semibold text-sm text-slate-700 dark:text-slate-300">Response</div>

        <!-- View Switcher -->
        <div class="flex items-center gap-2" *ngIf="response()">
          <div class="flex bg-slate-100 dark:bg-slate-800 rounded p-1 border dark:border-slate-700">
            <button
              (click)="viewMode.set('json')"
              [class.bg-white]="viewMode() === 'json'"
              [class.dark:bg-slate-700]="viewMode() === 'json'"
              [class.shadow-sm]="viewMode() === 'json'"
              class="px-3 py-1 text-xs rounded transition-all font-medium text-slate-600 dark:text-slate-300"
            >
              JSON
            </button>
            <button
              (click)="viewMode.set('table')"
              [class.bg-white]="viewMode() === 'table'"
              [class.dark:bg-slate-700]="viewMode() === 'table'"
              [class.shadow-sm]="viewMode() === 'table'"
              class="px-3 py-1 text-xs rounded transition-all font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1"
            >
              Table <span class="text-[10px] opacity-70"></span>
            </button>
            <!-- TODO: Add Chart views (Linear, Bar) -->
            <button
              class="px-3 py-1 text-xs rounded text-slate-400 cursor-not-allowed"
              title="Linear Chart (Coming Soon)"
            >
              Chart
            </button>
          </div>
        </div>
      </div>

      <div class="flex-1 overflow-auto p-4 relative">
        <div
          *ngIf="isLoading()"
          class="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-black/50 z-10 backdrop-blur-sm"
        >
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>

        <div *ngIf="response(); else noResponse">
          <div class="flex items-center gap-4 mb-4 text-xs">
            <span
              class="font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 border dark:border-slate-700"
              [ngClass]="{
                'text-green-600': response().status >= 200 && response().status < 300,
                'text-red-600': response().status >= 400,
              }"
            >
              Status: {{ response().status }} {{ response().statusText }}
            </span>
            <span class="text-slate-500 font-mono"> Time: {{ responseTime() ?? '--' }} ms </span>
          </div>

          <!-- JSON View -->
          <div *ngIf="viewMode() === 'json'" class="relative group">
            <button
              (click)="copyJson()"
              class="absolute top-2 right-2 p-1.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity text-slate-600 dark:text-slate-300 flex items-center gap-1 z-10"
              title="Copy JSON"
            >
              <span class="material-icons text-xs" style="font-size: 14px;">content_copy</span>
              Copy
            </button>
            <pre
              class="text-xs font-mono bg-white dark:bg-slate-950 p-4 rounded border dark:border-slate-800 overflow-x-auto select-text shadow-sm"
              >{{ response().body | json }}</pre
            >
          </div>

          <!-- Table View -->
          <div *ngIf="viewMode() === 'table'" class="overflow-x-auto rounded">
            <postman-json-table [data]="parsedBody()"></postman-json-table>
          </div>
        </div>

        <ng-template #noResponse>
          <div
            *ngIf="error()"
            class="text-red-600 p-4 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-900/50 max-w-full"
          >
            <div class="font-bold mb-2 flex items-center gap-2">
              <span class="material-icons text-sm">error_outline</span>
              Error
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
            <div>Send a request to see the response</div>
          </div>
        </ng-template>
      </div>
    </div>
  `,
})
export class ResponseViewerComponent {
  private _postmanService = inject(PostmanService);
  response = this._postmanService.response;
  responseTime = this._postmanService.responseTime;
  isLoading = this._postmanService.isLoading;
  error = this._postmanService.error;

  viewMode = signal<'json' | 'table'>('json');

  parsedBody = computed(() => {
    const res = this.response();
    if (!res || !res.body) return null;

    let body = res.body;
    // If it's a string, try to parse it
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        return body; // return as string if parse fails
      }
    }
    return body;
  });

  copyJson() {
    const res = this.response();
    if (res && res.body) {
      const json = JSON.stringify(res.body, null, 2);
      navigator.clipboard.writeText(json).then(() => {
        // Optional: Show toast or feedback
        console.log('JSON copied to clipboard');
      });
    }
  }
}
