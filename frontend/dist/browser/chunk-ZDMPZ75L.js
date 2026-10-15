import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-CTAWHRE6.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-EIYDU75T.js";
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoService
} from "./chunk-VENEX45A.js";
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  NgClass,
  Observable,
  Output,
  catchError,
  inject,
  setClassMetadata,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-I5BUD46C.js";
import {
  __async,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/core/services/attachment.service.ts
var AttachmentService = class _AttachmentService {
  constructor() {
    this._http = inject(HttpClient);
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  get authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  /**
   * Upload a file to the backend; returns the persisted attachment record.
   *
   * The file is read as a base64 data URI and posted to
   * `POST /v2/attachments`. Use {@link deleteAttachment} to clean up later.
   */
  uploadAttachment(file, opts = { source: "project" }) {
    return new Observable((observer) => {
      const reader = new FileReader();
      reader.onload = () => {
        const body = {
          file: reader.result,
          name: file.name,
          size: file.size,
          type: file.type,
          source: opts.source,
          expirationDays: opts.expirationDays,
          metadata: __spreadValues({ status: "active", uploadedAt: (/* @__PURE__ */ new Date()).toISOString() }, opts.metadata || {})
        };
        this._http.post(`${this.apiUrl}/v2/attachments`, body, { headers: this.authHeaders }).pipe(catchError((err) => throwError(() => err))).subscribe({
          next: (res) => observer.next(res),
          error: (err) => observer.error(err),
          complete: () => observer.complete()
        });
      };
      reader.onerror = () => observer.error(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  }
  /** Best-effort delete (the backend cleans up expired attachments anyway). */
  deleteAttachment(id) {
    if (!id)
      return new Observable((o) => (o.next(null), o.complete()));
    return this._http.delete(`${this.apiUrl}/v2/attachments/${id}`, { headers: this.authHeaders }).pipe(catchError((err) => throwError(() => err)));
  }
  /**
   * Download via CDN URL (public). Falls back to opening in a new tab if fetch fails.
   */
  downloadAttachmentFromUrl(attachment) {
    return __async(this, null, function* () {
      if (!attachment?.url) {
        throw new Error("Attachment URL is missing");
      }
      try {
        const response = yield fetch(attachment.url);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const blob = yield response.blob();
        const objectUrl = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = objectUrl;
        anchor.download = attachment.name?.trim() || "attachment";
        anchor.rel = "noopener noreferrer";
        anchor.click();
        URL.revokeObjectURL(objectUrl);
      } catch {
        window.open(attachment.url, "_blank", "noopener,noreferrer");
      }
    });
  }
  static {
    this.\u0275fac = function AttachmentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AttachmentService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttachmentService, factory: _AttachmentService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttachmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/file-drop-zone/file-drop-zone.component.ts
var _c0 = (a0, a1) => [a0, a1];
var _c1 = (a0, a1) => ({ formats: a0, maxSize: a1 });
function FileDropZoneComponent_ng_container_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 4);
  }
}
function FileDropZoneComponent_ng_container_0_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_outline:paper-clip");
  }
}
function FileDropZoneComponent_ng_container_0_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function FileDropZoneComponent_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 3);
    \u0275\u0275listener("click", function FileDropZoneComponent_ng_container_0_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openFileExplorer());
    });
    \u0275\u0275template(2, FileDropZoneComponent_ng_container_0_Conditional_1_Conditional_2_Template, 1, 0, "mat-progress-spinner", 4)(3, FileDropZoneComponent_ng_container_0_Conditional_1_Conditional_3_Template, 1, 1, "mat-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FileDropZoneComponent_ng_container_0_Conditional_1_Conditional_4_Template, 2, 1, "p", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled || ctx_r1.isUploading);
    \u0275\u0275attribute("aria-label", t_r3("supportTickets.quickChat.newTicket.attachmentsLabel"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isUploading ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errorMessage ? 4 : -1);
  }
}
function FileDropZoneComponent_ng_container_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 9);
    \u0275\u0275elementStart(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.uploading"), " ");
  }
}
function FileDropZoneComponent_ng_container_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon", 12);
    \u0275\u0275text(2, "file_upload");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 13)(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isDragOver ? t_r3("smartEnrollProjects.setup.ui.images.dropFiles") : t_r3("smartEnrollProjects.setup.ui.images.dragFiles"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("smartEnrollProjects.setup.ui.images.supportedFormats", \u0275\u0275pureFunction2(2, _c1, ctx_r1.formatAccepts(), ctx_r1.formatMaxFileSize())), " ");
  }
}
function FileDropZoneComponent_ng_container_0_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function FileDropZoneComponent_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 7);
    \u0275\u0275listener("click", function FileDropZoneComponent_ng_container_0_Conditional_2_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openFileExplorer());
    })("dragover", function FileDropZoneComponent_ng_container_0_Conditional_2_Template_div_dragover_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("dragleave", function FileDropZoneComponent_ng_container_0_Conditional_2_Template_div_dragleave_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDragLeave($event));
    })("drop", function FileDropZoneComponent_ng_container_0_Conditional_2_Template_div_drop_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275template(2, FileDropZoneComponent_ng_container_0_Conditional_2_Conditional_2_Template, 3, 1)(3, FileDropZoneComponent_ng_container_0_Conditional_2_Conditional_3_Template, 8, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FileDropZoneComponent_ng_container_0_Conditional_2_Conditional_4_Template, 2, 1, "p", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(3, _c0, ctx_r1.compact ? "min-h-[72px] gap-2 p-3" : "min-h-[120px] gap-3 p-6", ctx_r1.isDragOver ? "border-blue-500 bg-blue-50 dark:bg-blue-950/40" : !ctx_r1.disabled && !ctx_r1.isUploading ? "border-stone-300 dark:border-gray-700 cursor-pointer hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30" : "border-stone-300 dark:border-gray-700 cursor-not-allowed" + (ctx_r1.disabled ? " opacity-60" : "")));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isUploading ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.errorMessage ? 4 : -1);
  }
}
function FileDropZoneComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileDropZoneComponent_ng_container_0_Conditional_1_Template, 5, 4, "div", 1)(2, FileDropZoneComponent_ng_container_0_Conditional_2_Template, 5, 6, "div", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.triggerOnly ? 1 : 2);
  }
}
var FileDropZoneComponent = class _FileDropZoneComponent {
  constructor() {
    this.accept = "*";
    this.maxFileSize = 10 * 1024 * 1024;
    this.expirationDays = 0;
    this.source = "project";
    this.disabled = false;
    this.compact = false;
    this.triggerOnly = false;
    this.attachmentUploaded = new EventEmitter();
    this.fileError = new EventEmitter();
    this.uploadError = new EventEmitter();
    this.fileRemoved = new EventEmitter();
    this.uploadingChange = new EventEmitter();
    this._attachments = inject(AttachmentService);
    this._cdr = inject(ChangeDetectorRef);
    this._transloco = inject(TranslocoService);
    this.isDragOver = false;
    this.isUploading = false;
    this.errorMessage = "";
  }
  onDragOver(event) {
    if (this.disabled || this.isUploading)
      return;
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
    this._cdr.markForCheck();
  }
  onDragLeave(event) {
    if (this.disabled || this.isUploading)
      return;
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    this._cdr.markForCheck();
  }
  onDrop(event) {
    if (this.disabled || this.isUploading)
      return;
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    const file = event.dataTransfer?.files?.[0];
    if (file)
      this._handleFile(file);
    this._cdr.markForCheck();
  }
  onFileInputChange(event) {
    if (this.disabled || this.isUploading)
      return;
    const input = event.target;
    const file = input.files?.[0];
    if (file)
      this._handleFile(file);
    input.value = "";
  }
  openFileExplorer() {
    if (this.disabled || this.isUploading)
      return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = this.accept;
    input.style.display = "none";
    input.addEventListener("change", (event) => this.onFileInputChange(event));
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  }
  formatAccepts() {
    return this.accept.split(",").map((t) => t.trim()).filter(Boolean).join(", ");
  }
  formatFileSize(bytes) {
    if (!bytes)
      return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  }
  formatMaxFileSize() {
    return this.formatFileSize(this.maxFileSize);
  }
  _handleFile(file) {
    this.errorMessage = "";
    if (file.size > this.maxFileSize) {
      const error = this._transloco.translate("smartEnrollProjects.setup.ui.images.tooLarge", {
        maxSize: this.formatMaxFileSize()
      });
      this.errorMessage = error;
      this.fileError.emit({ file, error });
      this._cdr.markForCheck();
      return;
    }
    if (!this._isFileTypeAccepted(file)) {
      const error = this._transloco.translate("smartEnrollProjects.setup.ui.images.notAccepted");
      this.errorMessage = error;
      this.fileError.emit({ file, error });
      this._cdr.markForCheck();
      return;
    }
    this.isUploading = true;
    this.uploadingChange.emit(true);
    this._cdr.markForCheck();
    this._attachments.uploadAttachment(file, { source: this.source, expirationDays: this.expirationDays }).subscribe({
      next: (response) => {
        this.isUploading = false;
        this.uploadingChange.emit(false);
        this.attachmentUploaded.emit({ attachment: response.data });
        this._cdr.markForCheck();
      },
      error: (err) => {
        this.isUploading = false;
        this.uploadingChange.emit(false);
        const error = err?.error?.message || this._transloco.translate("smartEnrollProjects.setup.ui.images.uploadFailed");
        this.errorMessage = error;
        this.uploadError.emit({ error });
        this._cdr.markForCheck();
      }
    });
  }
  _isFileTypeAccepted(file) {
    if (this.accept === "*" || !this.accept)
      return true;
    const types = this.accept.split(",").map((t) => t.trim());
    return types.some((type) => {
      if (type.startsWith("."))
        return file.name.toLowerCase().endsWith(type.toLowerCase());
      if (type.includes("/"))
        return file.type === type || file.type.startsWith(type.split("/")[0] + "/");
      return false;
    });
  }
  static {
    this.\u0275fac = function FileDropZoneComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileDropZoneComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileDropZoneComponent, selectors: [["file-drop-zone"]], inputs: { accept: "accept", maxFileSize: "maxFileSize", expirationDays: "expirationDays", source: "source", disabled: "disabled", compact: "compact", triggerOnly: "triggerOnly" }, outputs: { attachmentUploaded: "attachmentUploaded", fileError: "fileError", uploadError: "uploadError", fileRemoved: "fileRemoved", uploadingChange: "uploadingChange" }, decls: 1, vars: 0, consts: [[4, "transloco"], [1, "flex", "flex-col", "items-center", "gap-1"], [1, "flex", "w-full", "flex-col", "gap-2"], ["type", "button", 1, "flex", "h-11", "w-11", "items-center", "justify-center", "rounded-full", "text-stone-600", "transition", "hover:bg-stone-100", "hover:text-stone-900", "focus-visible:outline-none", "focus-visible:ring-2", "focus-visible:ring-primary/50", "disabled:cursor-not-allowed", "disabled:opacity-50", "dark:text-stone-300", "dark:hover:bg-stone-800", "dark:hover:text-stone-50", 3, "click", "disabled"], ["mode", "indeterminate", "diameter", "22"], [1, "icon-size-5", 3, "svgIcon"], [1, "m-0", "max-w-40", "text-center", "text-[10px]", "leading-tight", "text-red-600", "dark:text-red-400"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "border-2", "border-dashed", "bg-stone-50", "text-center", "transition-all", "dark:bg-gray-900/40", 3, "click", "dragover", "dragleave", "drop", "ngClass"], [1, "m-0", "text-xs", "text-red-600", "dark:text-red-400"], ["mode", "indeterminate", "diameter", "32"], [1, "m-0", "text-sm", "font-medium", "text-stone-600", "dark:text-stone-300"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-xl", "bg-stone-200", "text-stone-700", "dark:bg-gray-700", "dark:text-stone-200"], [1, "!h-5", "!w-5"], [1, "flex", "flex-col", "items-center", "gap-0.5"], [1, "m-0", "text-sm", "font-medium", "text-stone-800", "dark:text-stone-100"], [1, "m-0", "text-xs", "text-stone-500", "dark:text-stone-400"]], template: function FileDropZoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FileDropZoneComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
      }
    }, dependencies: [CommonModule, NgClass, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, TranslocoModule, TranslocoDirective], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileDropZoneComponent, [{
    type: Component,
    args: [{ selector: "file-drop-zone", standalone: true, imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<ng-container *transloco="let t">\r
    @if (triggerOnly) {\r
        <div class="flex flex-col items-center gap-1">\r
            <button\r
                type="button"\r
                class="flex h-11 w-11 items-center justify-center rounded-full text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50"\r
                [disabled]="disabled || isUploading"\r
                [attr.aria-label]="t('supportTickets.quickChat.newTicket.attachmentsLabel')"\r
                (click)="openFileExplorer()"\r
            >\r
                @if (isUploading) {\r
                    <mat-progress-spinner mode="indeterminate" diameter="22"></mat-progress-spinner>\r
                } @else {\r
                    <mat-icon\r
                        class="icon-size-5"\r
                        [svgIcon]="'heroicons_outline:paper-clip'"\r
                    ></mat-icon>\r
                }\r
            </button>\r
\r
            @if (errorMessage) {\r
                <p class="m-0 max-w-40 text-center text-[10px] leading-tight text-red-600 dark:text-red-400">\r
                    {{ errorMessage }}\r
                </p>\r
            }\r
        </div>\r
    } @else {\r
        <div class="flex w-full flex-col gap-2">\r
            <div\r
                (click)="openFileExplorer()"\r
                (dragover)="onDragOver($event)"\r
                (dragleave)="onDragLeave($event)"\r
                (drop)="onDrop($event)"\r
                class="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed bg-stone-50 text-center transition-all dark:bg-gray-900/40"\r
                [ngClass]="[\r
                    compact ? 'min-h-[72px] gap-2 p-3' : 'min-h-[120px] gap-3 p-6',\r
                    isDragOver\r
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40'\r
                        : !disabled && !isUploading\r
                          ? 'border-stone-300 dark:border-gray-700 cursor-pointer hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30'\r
                          : 'border-stone-300 dark:border-gray-700 cursor-not-allowed' + (disabled ? ' opacity-60' : ''),\r
                ]"\r
            >\r
                @if (isUploading) {\r
                    <mat-progress-spinner mode="indeterminate" diameter="32"></mat-progress-spinner>\r
                    <p class="m-0 text-sm font-medium text-stone-600 dark:text-stone-300">\r
                        {{ t('smartEnrollProjects.setup.ui.images.uploading') }}\r
                    </p>\r
                } @else {\r
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-200 text-stone-700 dark:bg-gray-700 dark:text-stone-200">\r
                        <mat-icon class="!h-5 !w-5">file_upload</mat-icon>\r
                    </div>\r
                    <div class="flex flex-col items-center gap-0.5">\r
                        <p class="m-0 text-sm font-medium text-stone-800 dark:text-stone-100">\r
                            {{\r
                                isDragOver\r
                                    ? t('smartEnrollProjects.setup.ui.images.dropFiles')\r
                                    : t('smartEnrollProjects.setup.ui.images.dragFiles')\r
                            }}\r
                        </p>\r
                        <p class="m-0 text-xs text-stone-500 dark:text-stone-400">\r
                            {{\r
                                t('smartEnrollProjects.setup.ui.images.supportedFormats', {\r
                                    formats: formatAccepts(),\r
                                    maxSize: formatMaxFileSize()\r
                                })\r
                            }}\r
                        </p>\r
                    </div>\r
                }\r
            </div>\r
\r
            @if (errorMessage) {\r
                <p class="m-0 text-xs text-red-600 dark:text-red-400">{{ errorMessage }}</p>\r
            }\r
        </div>\r
    }\r
</ng-container>\r
` }]
  }], null, { accept: [{
    type: Input
  }], maxFileSize: [{
    type: Input
  }], expirationDays: [{
    type: Input
  }], source: [{
    type: Input
  }], disabled: [{
    type: Input
  }], compact: [{
    type: Input
  }], triggerOnly: [{
    type: Input
  }], attachmentUploaded: [{
    type: Output
  }], fileError: [{
    type: Output
  }], uploadError: [{
    type: Output
  }], fileRemoved: [{
    type: Output
  }], uploadingChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileDropZoneComponent, { className: "FileDropZoneComponent", filePath: "src/app/shared/file-drop-zone/file-drop-zone.component.ts", lineNumber: 31 });
})();

export {
  AttachmentService,
  FileDropZoneComponent
};
//# sourceMappingURL=chunk-ZDMPZ75L.js.map
