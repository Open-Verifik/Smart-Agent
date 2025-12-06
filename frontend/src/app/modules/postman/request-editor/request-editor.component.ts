import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PostmanService } from '../postman.service';

@Component({
  selector: 'postman-request-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <div
      class="flex flex-col h-full bg-white dark:bg-slate-900"
      *ngIf="endpoint(); else noSelection"
    >
      <!-- Top Bar: Method & URL & Send -->
      <div class="p-4 border-b dark:border-slate-800 flex items-center gap-3">
        <div class="font-bold text-sm px-3 py-2 rounded bg-slate-100 dark:bg-slate-800">
          {{ endpoint()?.method }}
        </div>
        <div class="flex-1">
          <input
            type="text"
            [(ngModel)]="endpoint()!.url"
            class="w-full px-3 py-2 bg-slate-50 border rounded dark:bg-slate-800 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button mat-flat-button color="primary" [disabled]="isLoading()" (click)="send()">
          <span *ngIf="!isLoading()">Send</span>
          <span *ngIf="isLoading()">Sending...</span>
        </button>
      </div>

      <!-- Tabs: Params, Headers, Body -->
      <div class="flex-1 overflow-hidden flex flex-col">
        <mat-tab-group class="h-full">
          <!-- Params -->
          <mat-tab label="Params">
            <div class="p-4 overflow-y-auto h-full space-y-4">
              <div
                class="flex items-center gap-2 mb-2 font-semibold text-xs uppercase text-slate-500"
              >
                <div class="w-1/3">Key</div>
                <div class="w-1/3">Value</div>
                <div class="w-1/3">Description</div>
              </div>
              <div *ngFor="let param of endpoint()?.params" class="flex gap-2 items-start">
                <input
                  class="w-1/3 px-2 py-1 border rounded dark:bg-slate-800 dark:border-slate-700"
                  [value]="param.key"
                  readonly
                  placeholder="Key"
                />
                <input
                  class="w-1/3 px-2 py-1 border rounded dark:bg-slate-800 dark:border-slate-700"
                  [(ngModel)]="param.value"
                  placeholder="Value"
                />
                <div
                  class="w-1/3 text-xs text-slate-500 pt-1.5 truncate"
                  [title]="param.description"
                >
                  {{ param.description }}
                </div>
              </div>
              <div
                *ngIf="!endpoint()?.params?.length"
                class="text-slate-500 italic text-sm text-center mt-4"
              >
                No parameters required.
              </div>
            </div>
          </mat-tab>

          <!-- Headers -->
          <mat-tab label="Headers">
            <div class="p-4 overflow-y-auto h-full space-y-4">
              <div
                class="flex items-center gap-2 mb-2 font-semibold text-xs uppercase text-slate-500"
              >
                <div class="w-1/2">Key</div>
                <div class="w-1/2">Value</div>
              </div>
              <div *ngFor="let header of endpoint()?.headers" class="flex gap-2">
                <input
                  class="w-1/2 px-2 py-1 border rounded dark:bg-slate-800 dark:border-slate-700"
                  [(ngModel)]="header.key"
                  placeholder="Key"
                />
                <input
                  class="w-1/2 px-2 py-1 border rounded dark:bg-slate-800 dark:border-slate-700"
                  [(ngModel)]="header.value"
                  placeholder="Value"
                />
              </div>
              <div class="pt-4">
                <button mat-stroked-button (click)="addHeader()" class="text-sm">
                  <mat-icon class="icon-size-4 mr-1">add</mat-icon> Add Header
                </button>
              </div>
            </div>
          </mat-tab>

          <!-- Body -->
          <mat-tab label="Body" *ngIf="endpoint()?.method !== 'GET'">
            <div class="p-4 h-full flex flex-col">
              <div class="text-xs text-slate-500 mb-2">JSON Body</div>
              <textarea
                class="flex-1 w-full p-3 font-mono text-sm border rounded dark:bg-slate-800 dark:border-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                [ngModel]="bodyString"
                (ngModelChange)="updateBody($event)"
              ></textarea>
            </div>
          </mat-tab>
        </mat-tab-group>
      </div>
    </div>

    <ng-template #noSelection>
      <div class="h-full flex flex-col items-center justify-center text-slate-400">
        <mat-icon class="icon-size-16 mb-4 opacity-50">api</mat-icon>
        <div class="text-lg font-medium">Select an endpoint to start</div>
      </div>
    </ng-template>
  `,
})
export class RequestEditorComponent {
  private _postmanService = inject(PostmanService);
  endpoint = this._postmanService.selectedEndpoint;
  isLoading = this._postmanService.isLoading;

  bodyString = '';

  constructor() {
    effect(() => {
      const ep = this.endpoint();
      if (ep && ep.body) {
        this.bodyString = JSON.stringify(ep.body, null, 2);
      } else {
        this.bodyString = '';
      }
    });
  }

  updateBody(value: string) {
    this.bodyString = value;
    try {
      this.endpoint()!.body = JSON.parse(value);
    } catch (e) {
      // Invalid JSON, ignore for now or show error
    }
  }

  addHeader() {
    if (!this.endpoint()!.headers) {
      this.endpoint()!.headers = [];
    }
    this.endpoint()!.headers!.push({ key: '', value: '' });
  }

  send() {
    this._postmanService.sendRequest(this.endpoint()!);
  }
}
