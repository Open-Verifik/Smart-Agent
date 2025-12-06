import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostmanService } from '../postman.service';

@Component({
  selector: 'postman-response-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col h-full bg-slate-50 dark:bg-slate-900 border-l dark:border-slate-800">
      <div
        class="p-4 border-b dark:border-slate-800 font-semibold text-sm text-slate-700 dark:text-slate-300"
      >
        Response
      </div>

      <div class="flex-1 overflow-auto p-4 relative">
        <div
          *ngIf="isLoading()"
          class="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-black/50 z-10"
        >
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>

        <div *ngIf="response(); else noResponse">
          <div class="flex items-center gap-4 mb-4 text-xs">
            <span
              class="font-bold"
              [ngClass]="{
                'text-green-600': response().status >= 200 && response().status < 300,
                'text-red-600': response().status >= 400,
              }"
            >
              Status: {{ response().status }} {{ response().statusText }}
            </span>
            <span class="text-slate-500">Time: -- ms</span>
          </div>
          <pre
            class="text-xs font-mono bg-white dark:bg-slate-950 p-4 rounded border dark:border-slate-800 overflow-x-auto"
            >{{ response().body | json }}</pre
          >
        </div>

        <ng-template #noResponse>
          <div *ngIf="error()" class="text-red-600 p-4">
            <div class="font-bold mb-2">Error</div>
            <pre class="text-xs">{{ error() | json }}</pre>
          </div>
        </ng-template>
      </div>
    </div>
  `,
})
export class ResponseViewerComponent {
  private _postmanService = inject(PostmanService);
  response = this._postmanService.response;
  isLoading = this._postmanService.isLoading;
  error = this._postmanService.error;
}
