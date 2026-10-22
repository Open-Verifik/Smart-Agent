import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-HVUVGZ2L.js";
import {
  MatButtonModule,
  MatIconButton
} from "./chunk-PJFCLQ64.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-6Z76B4PC.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-FWBWCXY5.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  NgZone,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-YWP2Y7QK.js";

// src/app/modules/smart-enroll/projects/image-preview-dialog.component.ts
var _c0 = ["viewport"];
function ImagePreviewDialogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.data.title);
  }
}
function ImagePreviewDialogComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
}
var ImagePreviewDialogComponent = class _ImagePreviewDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this._dialogRef = inject(MatDialogRef);
    this._zone = inject(NgZone);
    this.zoom = signal(1);
    this._drag = null;
    this.minZoom = 0.5;
    this.maxZoom = 4;
    this._step = 0.25;
    this._onWheel = (event) => {
      event.preventDefault();
      this._zone.run(() => {
        if (event.deltaY < 0)
          this.zoomIn();
        else if (event.deltaY > 0)
          this.zoomOut();
      });
    };
  }
  ngAfterViewInit() {
    this._viewport?.nativeElement.addEventListener("wheel", this._onWheel, { passive: false });
  }
  ngOnDestroy() {
    this._viewport?.nativeElement.removeEventListener("wheel", this._onWheel);
  }
  close() {
    this._dialogRef.close();
  }
  /**
   * Scroll-wheel zooms the photo. Dragging the photo moves it when it is larger than the screen.
   */
  onPointerDown(event) {
    if (event.button !== 0)
      return;
    const viewport = event.currentTarget;
    this._drag = { x: event.clientX, y: event.clientY };
    viewport.setPointerCapture(event.pointerId);
  }
  onPointerMove(event) {
    if (!this._drag)
      return;
    const viewport = event.currentTarget;
    viewport.scrollLeft -= event.clientX - this._drag.x;
    viewport.scrollTop -= event.clientY - this._drag.y;
    this._drag = { x: event.clientX, y: event.clientY };
  }
  onPointerUp() {
    this._drag = null;
  }
  zoomIn() {
    this.zoom.update((z) => Math.min(this.maxZoom, Math.round((z + this._step) * 100) / 100));
  }
  zoomOut() {
    this.zoom.update((z) => Math.max(this.minZoom, Math.round((z - this._step) * 100) / 100));
  }
  resetZoom() {
    this.zoom.set(1);
  }
  static {
    this.\u0275fac = function ImagePreviewDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImagePreviewDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImagePreviewDialogComponent, selectors: [["image-preview-dialog"]], viewQuery: function ImagePreviewDialogComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._viewport = _t.first);
      }
    }, decls: 24, vars: 19, consts: [["viewport", ""], [1, "image-preview-dialog"], [1, "image-preview-dialog__toolbar"], [1, "image-preview-dialog__title"], [1, "image-preview-dialog__title-spacer"], [1, "image-preview-dialog__actions"], ["mat-icon-button", "", "type", "button", 3, "click", "disabled"], ["mat-icon-button", "", "type", "button", 3, "click"], [1, "image-preview-dialog__viewport", 3, "pointerdown", "pointermove", "pointerup", "pointercancel"], ["alt", "", "draggable", "false", 1, "image-preview-dialog__img", 3, "src"]], template: function ImagePreviewDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275template(2, ImagePreviewDialogComponent_Conditional_2_Template, 2, 1, "p", 3)(3, ImagePreviewDialogComponent_Conditional_3_Template, 1, 0, "span", 4);
        \u0275\u0275elementStart(4, "div", 5)(5, "button", 6);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275listener("click", function ImagePreviewDialogComponent_Template_button_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.zoomOut());
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "zoom_out");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 6);
        \u0275\u0275pipe(10, "transloco");
        \u0275\u0275listener("click", function ImagePreviewDialogComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.zoomIn());
        });
        \u0275\u0275elementStart(11, "mat-icon");
        \u0275\u0275text(12, "zoom_in");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 6);
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275listener("click", function ImagePreviewDialogComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.resetZoom());
        });
        \u0275\u0275elementStart(15, "mat-icon");
        \u0275\u0275text(16, "fit_screen");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "button", 7);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275listener("click", function ImagePreviewDialogComponent_Template_button_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close());
        });
        \u0275\u0275elementStart(19, "mat-icon");
        \u0275\u0275text(20, "close");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 8, 0);
        \u0275\u0275listener("pointerdown", function ImagePreviewDialogComponent_Template_div_pointerdown_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPointerDown($event));
        })("pointermove", function ImagePreviewDialogComponent_Template_div_pointermove_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPointerMove($event));
        })("pointerup", function ImagePreviewDialogComponent_Template_div_pointerup_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPointerUp());
        })("pointercancel", function ImagePreviewDialogComponent_Template_div_pointercancel_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onPointerUp());
        });
        \u0275\u0275element(23, "img", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.title ? 2 : 3);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.zoom() <= ctx.minZoom);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 11, "smartEnrollProjects.recordDetail.imagePreview.zoomOut"));
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.zoom() >= ctx.maxZoom);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 13, "smartEnrollProjects.recordDetail.imagePreview.zoomIn"));
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.zoom() === 1);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 15, "smartEnrollProjects.recordDetail.imagePreview.resetZoom"));
        \u0275\u0275advance(4);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 17, "smartEnrollProjects.recordDetail.imagePreview.close"));
        \u0275\u0275advance(6);
        \u0275\u0275styleProp("width", 100 * ctx.zoom(), "%");
        \u0275\u0275property("src", ctx.data.imageSrc, \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [CommonModule, MatButtonModule, MatIconButton, MatDialogModule, MatIconModule, MatIcon, TranslocoModule, TranslocoPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.image-preview-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  max-height: min(100vh, 100dvh);\n}\n.image-preview-dialog__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.5rem 0.5rem 0.5rem 1rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  color: #e7e5e4;\n}\n.image-preview-dialog__toolbar[_ngcontent-%COMP%]   .mat-mdc-icon-button[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.image-preview-dialog__title[_ngcontent-%COMP%] {\n  margin: 0;\n  min-width: 0;\n  flex: 1;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #f5f5f4;\n}\n.image-preview-dialog__title-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.image-preview-dialog__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  gap: 0.125rem;\n}\n.image-preview-dialog__viewport[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  background: #0c0a09;\n  cursor: grab;\n  touch-action: none;\n}\n.image-preview-dialog__viewport[_ngcontent-%COMP%]:active {\n  cursor: grabbing;\n}\n.image-preview-dialog__img[_ngcontent-%COMP%] {\n  display: block;\n  height: auto;\n  max-width: none;\n}\n/*# sourceMappingURL=image-preview-dialog.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImagePreviewDialogComponent, [{
    type: Component,
    args: [{ selector: "image-preview-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, TranslocoModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="image-preview-dialog">\r
    <div class="image-preview-dialog__toolbar">\r
        @if (data.title) {\r
            <p class="image-preview-dialog__title">{{ data.title }}</p>\r
        } @else {\r
            <span class="image-preview-dialog__title-spacer"></span>\r
        }\r
        <div class="image-preview-dialog__actions">\r
            <button\r
                mat-icon-button\r
                type="button"\r
                (click)="zoomOut()"\r
                [disabled]="zoom() <= minZoom"\r
                [attr.aria-label]="'smartEnrollProjects.recordDetail.imagePreview.zoomOut' | transloco"\r
            >\r
                <mat-icon>zoom_out</mat-icon>\r
            </button>\r
            <button\r
                mat-icon-button\r
                type="button"\r
                (click)="zoomIn()"\r
                [disabled]="zoom() >= maxZoom"\r
                [attr.aria-label]="'smartEnrollProjects.recordDetail.imagePreview.zoomIn' | transloco"\r
            >\r
                <mat-icon>zoom_in</mat-icon>\r
            </button>\r
            <button\r
                mat-icon-button\r
                type="button"\r
                (click)="resetZoom()"\r
                [disabled]="zoom() === 1"\r
                [attr.aria-label]="'smartEnrollProjects.recordDetail.imagePreview.resetZoom' | transloco"\r
            >\r
                <mat-icon>fit_screen</mat-icon>\r
            </button>\r
            <button\r
                mat-icon-button\r
                type="button"\r
                (click)="close()"\r
                [attr.aria-label]="'smartEnrollProjects.recordDetail.imagePreview.close' | transloco"\r
            >\r
                <mat-icon>close</mat-icon>\r
            </button>\r
        </div>\r
    </div>\r
    <div\r
        #viewport\r
        class="image-preview-dialog__viewport"\r
        (pointerdown)="onPointerDown($event)"\r
        (pointermove)="onPointerMove($event)"\r
        (pointerup)="onPointerUp()"\r
        (pointercancel)="onPointerUp()"\r
    >\r
        <img\r
            [src]="data.imageSrc"\r
            alt=""\r
            class="image-preview-dialog__img"\r
            [style.width.%]="100 * zoom()"\r
            draggable="false"\r
        />\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/smart-enroll/projects/image-preview-dialog.component.scss */\n:host {\n  display: block;\n  height: 100%;\n  min-height: 0;\n}\n.image-preview-dialog {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  max-height: min(100vh, 100dvh);\n}\n.image-preview-dialog__toolbar {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.5rem 0.5rem 0.5rem 1rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  color: #e7e5e4;\n}\n.image-preview-dialog__toolbar .mat-mdc-icon-button {\n  color: inherit;\n}\n.image-preview-dialog__title {\n  margin: 0;\n  min-width: 0;\n  flex: 1;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #f5f5f4;\n}\n.image-preview-dialog__title-spacer {\n  flex: 1;\n}\n.image-preview-dialog__actions {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  gap: 0.125rem;\n}\n.image-preview-dialog__viewport {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  background: #0c0a09;\n  cursor: grab;\n  touch-action: none;\n}\n.image-preview-dialog__viewport:active {\n  cursor: grabbing;\n}\n.image-preview-dialog__img {\n  display: block;\n  height: auto;\n  max-width: none;\n}\n/*# sourceMappingURL=image-preview-dialog.component.css.map */\n"] }]
  }], null, { _viewport: [{
    type: ViewChild,
    args: ["viewport"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImagePreviewDialogComponent, { className: "ImagePreviewDialogComponent", filePath: "src/app/modules/smart-enroll/projects/image-preview-dialog.component.ts", lineNumber: 22 });
})();

export {
  ImagePreviewDialogComponent
};
//# sourceMappingURL=chunk-5BUZNTKT.js.map
