import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'postman-json-table',
  standalone: true,
  imports: [CommonModule, JsonTableComponent], // JsonTableComponent must be imported for recursive use
  template: `
    <ng-container *ngIf="parsedData as d">
      <!-- Primitives -->
      <div
        *ngIf="isPrimitive(d)"
        class="font-mono text-xs text-slate-800 dark:text-slate-200 break-all whitespace-pre-wrap select-text"
      >
        <span *ngIf="d === null" class="text-slate-400 italic">null</span>
        <span *ngIf="typeof d === 'boolean'" class="text-purple-600">{{ d }}</span>
        <span *ngIf="typeof d === 'string'" class="text-green-700 dark:text-green-400"
          >"{{ d }}"</span
        >
        <span *ngIf="typeof d === 'number'" class="text-blue-600 dark:text-blue-400">{{ d }}</span>
      </div>

      <!-- Arrays -->
      <div *ngIf="isArray(d)" class="border dark:border-slate-800 rounded-md overflow-hidden my-1">
        <div
          class="px-2 py-1 bg-slate-100 dark:bg-slate-800/50 text-xs text-slate-500 font-mono border-b dark:border-slate-800"
        >
          Array ({{ d.length }})
        </div>
        <table class="w-full text-left text-xs border-collapse">
          <tbody>
            <tr
              *ngFor="let item of d; let i = index"
              class="border-b dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/30"
            >
              <td
                class="p-2 w-10 text-slate-400 font-mono text-[10px] border-r dark:border-slate-800 text-center align-top bg-slate-50/50 dark:bg-slate-900/20"
              >
                {{ i }}
              </td>
              <td class="p-2">
                <postman-json-table [data]="item"></postman-json-table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Objects -->
      <div
        *ngIf="isObject(d)"
        class="border dark:border-slate-800 rounded-md overflow-hidden my-1 shadow-sm"
      >
        <table class="w-full text-left text-xs border-collapse">
          <tbody>
            <tr
              *ngFor="let key of getKeys(d)"
              class="border-b dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/30"
            >
              <td
                class="p-2 w-1/3 min-w-[120px] max-w-[200px] align-top font-semibold text-slate-600 dark:text-slate-400 border-r dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 break-words"
              >
                {{ key }}
              </td>
              <td class="p-2">
                <postman-json-table [data]="d[key]"></postman-json-table>
              </td>
            </tr>
            <tr *ngIf="getKeys(d).length === 0">
              <td class="p-2 text-slate-400 italic">{{ '{}' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class JsonTableComponent {
  private _data: any;
  parsedData: any;

  @Input() set data(val: any) {
    this._data = val;
    this.parsedData = this.tryParse(val);
  }

  tryParse(val: any) {
    if (typeof val === 'string') {
      // Attempt to parse stringified JSON
      try {
        const trimmed = val.trim();
        // Simple heuristc: Must start with { or [
        if (
          (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
          (trimmed.startsWith('[') && trimmed.endsWith(']'))
        ) {
          const parsed = JSON.parse(val);
          if (typeof parsed === 'object' && parsed !== null) {
            return parsed;
          }
        }
      } catch {
        // Ignore failure, treat as string
      }
    }
    return val;
  }

  typeof(val: any): string {
    return typeof val;
  }

  isPrimitive(val: any): boolean {
    return val === null || typeof val !== 'object';
  }

  isArray(val: any): boolean {
    return Array.isArray(val);
  }

  isObject(val: any): boolean {
    return val !== null && typeof val === 'object' && !Array.isArray(val);
  }

  getKeys(val: any): string[] {
    return Object.keys(val);
  }
}
