import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';
import { AccountEnvironmentService } from 'app/core/account/account-environment.service';
import { PostmanService } from '../postman.service';
import { JsonTableComponent } from './json-table.component';
import { environment } from '../../../../environments/environment';
import {
    COLOMBIA_CEDULA_SLA_URL,
    formatCreditsForDisplay,
    parseBillingFromResponse,
} from '../postman-billing.util';

/** Stable numeric string for endpoint price display (same idea as Postman request editor). */
function formatPostmanCreditsPrice(value: number, maxDecimals = 6): string {
  if (!Number.isFinite(value)) {
    return '0';
  }
  return parseFloat(value.toFixed(maxDecimals)).toString();
}

@Component({
  selector: 'postman-response-viewer',
  standalone: true,
  imports: [CommonModule, JsonTableComponent, RouterModule, MatButtonModule, MatIconModule, TranslocoPipe],
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

          <div
            *ngIf="dynamicQueryBilling() as billingInfo"
            class="mb-4 rounded-xl border border-amber-200/90 bg-amber-50/90 p-4 shadow-sm dark:border-amber-900/40 dark:bg-amber-950/30"
          >
            <div class="flex items-start gap-3">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
              >
                <mat-icon class="!h-5 !w-5">auto_awesome_motion</mat-icon>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-sm font-semibold text-amber-950 dark:text-amber-100">
                  {{ 'postman.dynamicQuery.postResponseTitle' | transloco }}
                </h3>
                <p class="mt-1 text-sm leading-relaxed text-amber-900/90 dark:text-amber-100/85">
                  {{
                    'postman.dynamicQuery.postResponseBody'
                      | transloco
                        : {
                            standard: billingInfo.standard,
                            charged: billingInfo.charged,
                          }
                  }}
                </p>
                <p
                  *ngIf="billingInfo.featureCode"
                  class="mt-2 font-mono text-xs text-amber-800/80 dark:text-amber-200/70"
                >
                  {{ 'postman.dynamicQuery.billedFeatureCode' | transloco }}:
                  {{ billingInfo.featureCode }}
                </p>
                <a
                  [href]="dynamicQuerySlaUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-2 inline-flex text-xs font-medium text-amber-900 underline-offset-2 hover:underline dark:text-amber-200"
                >
                  {{ 'postman.dynamicQuery.slaLink' | transloco }}
                </a>
              </div>
            </div>
          </div>

          <!-- Proof Card (ERC8004) -->
          <div *ngIf="parsedBody()?._proof as proof" class="mx-4 mb-4">
            <div
              class="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm p-4 animate-fade-in relative overflow-hidden"
            >
              <!-- Gradient Line -->
              <div
                class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500"
              ></div>

              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center flex-shrink-0"
                >
                  <mat-icon>verified_user</mat-icon>
                </div>

                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between mb-1">
                    <h4 class="font-bold text-slate-800 dark:text-slate-100">
                      {{ 'proofCard.title' | transloco }}
                    </h4>
                    <span
                      class="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wide border border-green-200 dark:border-green-900 flex items-center gap-1"
                    >
                      <mat-icon class="!inline-block !w-3 !h-3 !text-[12px]">check</mat-icon>
                      {{ 'proofCard.validated' | transloco }}
                    </span>
                  </div>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mb-3">
                    {{ 'proofCard.network' | transloco }}
                  </p>

                  <div class="bg-slate-100 dark:bg-slate-900 rounded p-2 flex items-center gap-2">
                    <div
                      class="flex-1 font-mono text-xs text-slate-600 dark:text-slate-300 break-all"
                    >
                      {{ proof }}
                    </div>
                    <a
                      [href]="snowtraceUrl + '/tx/' + proof"
                      target="_blank"
                      class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                      [title]="'View on Snowtrace'"
                    >
                      <mat-icon class="!w-4 !h-4 !text-[16px]">open_in_new</mat-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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

            <div *ngIf="normalizedPdfDataUrlFromBody() as pdfUrl" class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 shrink-0">
              <div
                class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2"
              >
                {{ 'postman.responseViewer.pdfPreview' | transloco }}
              </div>

              <div
                *ngIf="isSandboxModeActive(); else productionPdfPreview"
                class="relative min-h-[360px] w-full rounded-xl border border-dashed border-amber-300/80 bg-gradient-to-b from-amber-50/80 to-white dark:from-amber-950/20 dark:to-slate-950 dark:border-amber-800/60 px-6 py-10 flex flex-col items-center justify-center text-center shadow-inner"
                role="status"
                [attr.aria-label]="'postman.responseViewer.sandboxPdfDemo.title' | transloco"
              >
                <span
                  class="absolute top-3 right-3 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:bg-amber-900/50 dark:text-amber-200"
                >
                  {{ 'postman.responseViewer.sandboxPdfDemo.badge' | transloco }}
                </span>
                <div
                  class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-amber-200/80 dark:bg-slate-900 dark:ring-amber-900/60"
                >
                  <mat-icon class="!h-8 !w-8 text-amber-600 dark:text-amber-300">description</mat-icon>
                </div>
                <h4 class="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {{ 'postman.responseViewer.sandboxPdfDemo.title' | transloco }}
                </h4>
                <p class="mt-3 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {{ 'postman.responseViewer.sandboxPdfDemo.body' | transloco }}
                </p>
                <p class="mt-4 max-w-md text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {{ 'postman.responseViewer.sandboxPdfDemo.footnote' | transloco }}
                </p>
              </div>

              <ng-template #productionPdfPreview>
                <iframe
                  [title]="'postman.responseViewer.pdfPreview' | transloco"
                  class="min-h-[360px] w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
                  [src]="sanitizePdfIframeSrc(pdfUrl)"
                ></iframe>
                <div class="flex flex-wrap gap-2 mt-3">
                  <button
                    mat-stroked-button
                    type="button"
                    class="!text-xs"
                    (click)="openPdfInNewTab(pdfUrl)"
                  >
                    <span class="inline-flex items-center gap-2">
                      <mat-icon class="!w-4 !h-4">open_in_new</mat-icon>
                      {{ 'postman.responseViewer.openPdfInNewTab' | transloco }}
                    </span>
                  </button>
                  <button
                    mat-stroked-button
                    type="button"
                    class="!text-xs"
                    (click)="downloadPdf(pdfUrl, postmanPdfDownloadFilename())"
                  >
                    <span class="inline-flex items-center gap-2">
                      <mat-icon class="!w-4 !h-4">download</mat-icon>
                      {{ 'postman.responseViewer.downloadPdf' | transloco }}
                    </span>
                  </button>
                </div>
              </ng-template>
            </div>
          </div>
        </div>

        <ng-template #noResponse>
          <ng-container *ngIf="error()">
            <!-- Insufficient credits (credits mode + 403) -->
            <div
              *ngIf="insufficientCreditsError(); else genericExplorerError"
              class="rounded-xl border border-stone-200/90 bg-stone-50/90 dark:border-gray-800 dark:bg-gray-950/90 p-4 max-w-full shadow-sm backdrop-blur-sm"
            >
              <div
                class="rounded-xl border border-stone-200/80 bg-white/95 dark:border-gray-800 dark:bg-gray-900/80 p-5"
              >
                <div class="flex flex-wrap items-start gap-4">
                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300"
                  >
                    <mat-icon class="!h-7 !w-7">account_balance_wallet</mat-icon>
                  </div>
                  <div class="min-w-0 flex-1">
                    <h3
                      class="text-lg font-semibold tracking-tight text-stone-900 dark:text-white"
                    >
                      {{ 'postman.responseViewer.insufficientCreditsTitle' | transloco }}
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                      {{ 'postman.responseViewer.insufficientCreditsBody' | transloco }}
                    </p>
                    <p
                      *ngIf="endpointCreditsCostFormatted() as costStr"
                      class="mt-2 text-xs text-stone-500 dark:text-stone-400"
                    >
                      {{
                        'postman.responseViewer.insufficientCreditsCostHint'
                          | transloco: { cost: costStr }
                      }}
                    </p>
                  </div>
                </div>
                <div class="mt-5">
                  <button
                    mat-flat-button
                    color="primary"
                    type="button"
                    routerLink="/add-credits"
                    class="!rounded-xl"
                  >
                    <span class="inline-flex items-center gap-2">
                      <mat-icon class="!h-5 !w-5">add_circle</mat-icon>
                      {{ 'postman.responseViewer.insufficientCreditsCta' | transloco }}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <ng-template #genericExplorerError>
              <div
                class="text-red-700 dark:text-red-300 rounded-xl border border-red-200/90 bg-red-50/90 dark:border-red-900/50 dark:bg-red-950/30 p-4 max-w-full"
              >
                <div class="mb-3 flex flex-wrap items-center gap-2 font-bold">
                  <span class="material-icons text-base">error_outline</span>
                  {{ 'postman.responseViewer.error' | transloco }}
                  <span
                    *ngIf="httpError() as httpErr"
                    class="rounded-md bg-white/70 px-2 py-0.5 text-xs font-mono font-semibold dark:bg-black/25"
                  >
                    {{ httpErr.status }} {{ httpErr.statusText }}
                  </span>
                </div>
                <p
                  *ngIf="genericErrorBackendMessage()"
                  class="mb-3 text-sm text-red-800/95 dark:text-red-100/95"
                >
                  {{ genericErrorBackendMessage() }}
                </p>
                <details class="rounded-lg border border-red-200/80 bg-white/60 p-3 dark:border-red-900/40 dark:bg-slate-900/40">
                  <summary class="cursor-pointer text-xs font-medium text-red-800 dark:text-red-200">
                    {{ 'postman.responseViewer.errorTechnicalDetails' | transloco }}
                  </summary>
                  <pre
                    class="mt-3 max-h-64 overflow-auto text-xs leading-relaxed text-red-900/90 dark:text-red-100/90 select-text"
                    >{{ errorDetailPayload() | json }}</pre
                  >
                </details>
              </div>
            </ng-template>
          </ng-container>

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
  private _accountEnvironment = inject(AccountEnvironmentService);
  private _sanitizer = inject(DomSanitizer);
  response = this._postmanService.response;
  isSandboxModeActive = this._accountEnvironment.isSandboxModeActive;
  responseTime = this._postmanService.responseTime;
  isLoading = this._postmanService.isLoading;
  error = this._postmanService.error;
  selectedEndpoint = this._postmanService.selectedEndpoint;
  paymentMethod = this._postmanService.paymentMethod;
  readonly dynamicQuerySlaUrl = COLOMBIA_CEDULA_SLA_URL;

  dynamicQueryBilling = computed(() => {
    if (this.paymentMethod() !== 'credits') {
      return null;
    }

    const parsed = parseBillingFromResponse(this.parsedBody());
    const billing = parsed?.billing;

    if (!billing?.dynamicQueryApplied) {
      return null;
    }

    const standard = formatCreditsForDisplay(
      billing.standardCredits ?? parsed?.billing?.standardCredits
    );
    const charged = formatCreditsForDisplay(
      billing.chargedCredits ?? parsed?.creditsCharged ?? null
    );

    return {
      standard,
      charged,
      featureCode: parsed?.featureCode ?? billing.billedFeatureCode ?? null,
    };
  });

  httpError = computed(() => {
    const err = this.error();

    return err instanceof HttpErrorResponse ? err : null;
  });

  /**
   * True when Explorer is in credits mode and backend returned FORBIDDEN with a credit-shortage message.
   */
  insufficientCreditsError = computed(() => {
    if (this.paymentMethod() !== 'credits') return false;

    const err = this.httpError();

    if (!err || err.status !== 403) return false;

    const body = err.error;

    if (typeof body !== 'object' || body === null) return false;

    const raw = body as { message?: string; code?: string };
    const msg = (raw.message ?? '').toLowerCase();
    const code = raw.code ?? '';
    const mentionsCreditsIssue =
      msg.includes('credit') || msg.includes('enought') || msg.includes('not enough');

    return code === 'FORBIDDEN' && mentionsCreditsIssue;
  });

  endpointCreditsCostFormatted = computed(() => {
    const ep = this.selectedEndpoint();
    const cost = ep?.estimatedCost;

    if (cost == null || !Number.isFinite(Number(cost))) return null;

    return formatPostmanCreditsPrice(Number(cost));
  });

  genericErrorBackendMessage = computed(() => {
    const err = this.error();

    if (!(err instanceof HttpErrorResponse)) return null;

    const e = err.error;

    if (
      typeof e === 'object' &&
      e !== null &&
      typeof (e as { message?: unknown }).message === 'string'
    ) {
      return (e as { message: string }).message;
    }

    if (typeof e === 'string' && e.length) return e;

    return null;
  });

  /** Safe payload for the technical-details block (avoid dumping HttpErrorResponse quirks). */
  errorDetailPayload = computed(() => {
    const err = this.error();

    if (!(err instanceof HttpErrorResponse)) return err ?? null;

    return {
      status: err.status,
      statusText: err.statusText,
      url: err.url,
      message: err.message,
      error: err.error,
    };
  });

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

  /**
   * Normalized `data:application/pdf;base64,...` from nested response (e.g. `data.pdfBase64`), or null.
   */
  normalizedPdfDataUrlFromBody = computed(() => {
    const pb = this.parsedBody();
    if (pb === null || pb === undefined || typeof pb !== 'object') return null;
    const raw = this._extractFirstPdfDataUrlDeep(pb);
    return raw ? this._normalizePdfDataUrl(raw) : null;
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

  sanitizePdfIframeSrc(dataUrl: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(dataUrl.trim());
  }

  openPdfInNewTab(dataUrl: string): void {
    window.open(this._normalizePdfDataUrl(dataUrl), '_blank', 'noopener,noreferrer');
  }

  downloadPdf(dataUrl: string, filename: string): void {
    const normalized = this._normalizePdfDataUrl(dataUrl);
    let blobUrl: string;
    try {
      const b64 = this._pdfBase64Payload(normalized);
      const binary = atob(b64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: 'application/pdf' });
      blobUrl = URL.createObjectURL(blob);
    } catch {
      return;
    }
    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.download = filename || 'document.pdf';
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
  }

  /** Default download name for API Explorer PDF payloads. */
  postmanPdfDownloadFilename(): string {
    return 'api-response.pdf';
  }

  private _maybePdfPayload(key: string, v: string): boolean {
    const t = v.trim();
    if (!t) return false;
    if (key.toLowerCase() === 'pdfbase64') return true;
    return t.toLowerCase().startsWith('data:application/pdf;base64,');
  }

  private _normalizePdfDataUrl(raw: string): string {
    const t = raw.trim();
    return t.startsWith('data:') ? t : `data:application/pdf;base64,${t}`;
  }

  private _pdfBase64Payload(dataUrlOrBase64: string): string {
    const t = dataUrlOrBase64.trim();
    const ix = t.indexOf('base64,');
    if (ix !== -1) return t.slice(ix + 7);
    return t;
  }

  /** Walk nested objects and arrays; return first raw PDF string matched. */
  private _extractFirstPdfDataUrlDeep(value: unknown): string | null {
    if (value === null || typeof value !== 'object') return null;
    if (Array.isArray(value)) {
      for (const el of value) {
        const found = this._extractFirstPdfDataUrlDeep(el);
        if (found) return found;
      }
      return null;
    }
    const obj = value as Record<string, unknown>;
    for (const key of Object.keys(obj)) {
      const v = obj[key];
      if (typeof v === 'string' && this._maybePdfPayload(key, v)) {
        return v;
      }
      if (v !== null && typeof v === 'object') {
        const nested = this._extractFirstPdfDataUrlDeep(v);
        if (nested) return nested;
      }
    }
    return null;
  }

  /**
   * Get the appropriate Snowtrace URL based on environment
   */
  get snowtraceUrl(): string {
    if (environment.isTestnet !== undefined) {
      return environment.isTestnet ? 'https://testnet.snowtrace.io' : 'https://snowtrace.io';
    }
    if (environment.chainId) {
      return environment.chainId === 43113 ? 'https://testnet.snowtrace.io' : 'https://snowtrace.io';
    }
    const rpcUrl = environment.rpcUrl || '';
    const isTestnet = rpcUrl.includes('test') || rpcUrl.includes('fuji') || rpcUrl.includes('43113');
    return isTestnet ? 'https://testnet.snowtrace.io' : 'https://snowtrace.io';
  }
}
