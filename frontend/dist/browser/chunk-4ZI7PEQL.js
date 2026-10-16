import {
  ReportPreviewComponent
} from "./chunk-NILZ5KHA.js";
import {
  templateLayerZ
} from "./chunk-PFDQ553Y.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import {
  CommonModule,
  Component,
  computed,
  effect,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-batch/report-template-thumb.component.ts
var _c0 = ["frame"];
var _c1 = ["*"];
var _c2 = () => [];
function ReportTemplateThumbComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 5);
    \u0275\u0275element(3, "report-preview", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_30_0;
    let tmp_31_0;
    let tmp_32_0;
    let tmp_33_0;
    let tmp_34_0;
    let tmp_35_0;
    let tmp_36_0;
    let tmp_37_0;
    let tmp_38_0;
    let tmp_39_0;
    let tmp_40_0;
    let tmp_41_0;
    let tmp_42_0;
    let tmp_43_0;
    let tmp_44_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.pageWidthMm(), "mm")("transform", ctx_r0.sheetScale());
    \u0275\u0275advance();
    \u0275\u0275property("template", ctx_r0.template())("previewData", ctx_r0.previewData())("thumbnailMode", true)("primaryColor", ctx_r0.template().primaryColor || "#4F46E5")("pageBackgroundColor", ctx_r0.template().pageBackgroundColor || "#ffffff")("orientation", ctx_r0.template().orientation || "portrait")("pageSize", ctx_r0.template().pageSize || "A4")("layerZ", ctx_r0.layerZ())("clickable", false)("logoUrl", ((tmp_13_0 = ctx_r0.template().headerLogos) == null ? null : tmp_13_0.length) ? null : ctx_r0.template().logo || null)("logoEnabled", !((tmp_14_0 = ctx_r0.template().headerLogos) == null ? null : tmp_14_0.length) && !!ctx_r0.template().logo)("logoX", (tmp_15_0 = (tmp_15_0 = ctx_r0.template().logoSettings) == null ? null : tmp_15_0.x) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : 32)("logoY", (tmp_16_0 = (tmp_16_0 = ctx_r0.template().logoSettings) == null ? null : tmp_16_0.y) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : 32)("logoWidth", (tmp_17_0 = (tmp_17_0 = ctx_r0.template().logoSettings) == null ? null : tmp_17_0.width) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : 160)("logoHeight", (tmp_18_0 = (tmp_18_0 = ctx_r0.template().logoSettings) == null ? null : tmp_18_0.height) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : 60)("logoRotation", (tmp_19_0 = (tmp_19_0 = ctx_r0.template().logoSettings) == null ? null : tmp_19_0.rotation) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : 0)("logoAutoFitContent", (tmp_20_0 = (tmp_20_0 = ctx_r0.template().logoSettings) == null ? null : tmp_20_0.autoFitContent) !== null && tmp_20_0 !== void 0 ? tmp_20_0 : false)("sheetImages", (tmp_21_0 = ctx_r0.template().sheetImages) !== null && tmp_21_0 !== void 0 ? tmp_21_0 : \u0275\u0275pureFunction0(45, _c2))("bodyTopPadding", (tmp_22_0 = ctx_r0.template().bodyTopPadding) !== null && tmp_22_0 !== void 0 ? tmp_22_0 : 0)("legend", ctx_r0.template().legend || "")("legendPosition", ctx_r0.template().legendPosition || "left")("showPageNumbers", ctx_r0.template().showPageNumbers || false)("pageNumberPosition", ctx_r0.template().pageNumberPosition || "bottom-center")("watermarkEnabled", ((tmp_27_0 = ctx_r0.template().watermark) == null ? null : tmp_27_0.enabled) || false)("watermarkType", ((tmp_28_0 = ctx_r0.template().watermark) == null ? null : tmp_28_0.type) || "text")("watermarkLogoUrl", ((tmp_29_0 = ctx_r0.template().watermark) == null ? null : tmp_29_0.logo) || void 0)("watermarkText", ((tmp_30_0 = ctx_r0.template().watermark) == null ? null : tmp_30_0.text) || ctx_r0.template().name || "CONFIDENTIAL")("watermarkOpacity", (tmp_31_0 = (tmp_31_0 = ctx_r0.template().watermark) == null ? null : tmp_31_0.opacity) !== null && tmp_31_0 !== void 0 ? tmp_31_0 : 0.08)("watermarkPattern", ((tmp_32_0 = ctx_r0.template().watermark) == null ? null : tmp_32_0.pattern) || "single")("watermarkX", (tmp_33_0 = (tmp_33_0 = ctx_r0.template().watermark) == null ? null : tmp_33_0.x) !== null && tmp_33_0 !== void 0 ? tmp_33_0 : 250)("watermarkY", (tmp_34_0 = (tmp_34_0 = ctx_r0.template().watermark) == null ? null : tmp_34_0.y) !== null && tmp_34_0 !== void 0 ? tmp_34_0 : 420)("watermarkWidth", (tmp_35_0 = (tmp_35_0 = ctx_r0.template().watermark) == null ? null : tmp_35_0.width) !== null && tmp_35_0 !== void 0 ? tmp_35_0 : 280)("watermarkHeight", (tmp_36_0 = (tmp_36_0 = ctx_r0.template().watermark) == null ? null : tmp_36_0.height) !== null && tmp_36_0 !== void 0 ? tmp_36_0 : 160)("watermarkRotation", (tmp_37_0 = (tmp_37_0 = ctx_r0.template().watermark) == null ? null : tmp_37_0.rotation) !== null && tmp_37_0 !== void 0 ? tmp_37_0 : -15)("signatureEnabled", !!(((tmp_38_0 = ctx_r0.template().signature) == null ? null : tmp_38_0.enabled) && ((tmp_38_0 = ctx_r0.template().signature) == null ? null : tmp_38_0.image)))("signatureImage", ((tmp_39_0 = ctx_r0.template().signature) == null ? null : tmp_39_0.image) || null)("signatureX", (tmp_40_0 = (tmp_40_0 = ctx_r0.template().signature) == null ? null : tmp_40_0.x) !== null && tmp_40_0 !== void 0 ? tmp_40_0 : 48)("signatureY", (tmp_41_0 = (tmp_41_0 = ctx_r0.template().signature) == null ? null : tmp_41_0.y) !== null && tmp_41_0 !== void 0 ? tmp_41_0 : 720)("signatureWidth", (tmp_42_0 = (tmp_42_0 = ctx_r0.template().signature) == null ? null : tmp_42_0.width) !== null && tmp_42_0 !== void 0 ? tmp_42_0 : 160)("signatureHeight", (tmp_43_0 = (tmp_43_0 = ctx_r0.template().signature) == null ? null : tmp_43_0.height) !== null && tmp_43_0 !== void 0 ? tmp_43_0 : 64)("signaturePage", (tmp_44_0 = (tmp_44_0 = ctx_r0.template().signature) == null ? null : tmp_44_0.page) !== null && tmp_44_0 !== void 0 ? tmp_44_0 : 0);
  }
}
function ReportTemplateThumbComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.template().thumbnail.image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.template().name);
  }
}
function ReportTemplateThumbComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-icon", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.icon());
  }
}
var MM_TO_PX = 3.7795275591;
var ReportTemplateThumbComponent = class _ReportTemplateThumbComponent {
  constructor() {
    this.template = input.required();
    this.icon = input("description");
    this._frame = viewChild("frame");
    this._scale = signal(0.128);
    this.isLandscape = computed(() => this.template().orientation === "landscape");
    this.layerZ = computed(() => templateLayerZ(this.template()));
    this.pageWidthMm = computed(() => this.isLandscape() ? 297 : 210);
    this.pageHeightMm = computed(() => this.isLandscape() ? 210 : 297);
    this.sheetScale = computed(() => `scale(${this._scale()})`);
    this.previewData = computed(() => {
      const template = this.template();
      const sample = template.sampleData ?? {};
      return {
        batchName: sample.batchName || template.name || "",
        rowIndex: sample.rowIndex ?? 0,
        inputData: sample.inputData ?? {},
        results: sample.results ?? {},
        errors: sample.errors,
        report: sample.report
      };
    });
    effect((onCleanup) => {
      const el = this._frame()?.nativeElement;
      if (!el)
        return;
      const update = () => {
        const height = el.clientHeight;
        if (!height)
          return;
        this._scale.set(height / (this.pageHeightMm() * MM_TO_PX));
      };
      const observer = new ResizeObserver(update);
      observer.observe(el);
      update();
      onCleanup(() => observer.disconnect());
    });
  }
  static {
    this.\u0275fac = function ReportTemplateThumbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportTemplateThumbComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportTemplateThumbComponent, selectors: [["report-template-thumb"]], viewQuery: function ReportTemplateThumbComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._frame, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { template: [1, "template"], icon: [1, "icon"] }, ngContentSelectors: _c1, decls: 5, vars: 5, consts: [["frame", ""], [1, "report-template-thumb", "relative", "flex", "h-36", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "border", "border-stone-200", "bg-stone-100", "dark:border-gray-800", "dark:bg-gray-950"], [1, "report-template-thumb__frame"], [1, "h-full", "w-full", "object-contain", "object-top", 3, "src", "alt"], [1, "flex", "h-full", "items-center", "justify-center"], [1, "report-template-thumb__sheet"], [3, "template", "previewData", "thumbnailMode", "primaryColor", "pageBackgroundColor", "orientation", "pageSize", "layerZ", "clickable", "logoUrl", "logoEnabled", "logoX", "logoY", "logoWidth", "logoHeight", "logoRotation", "logoAutoFitContent", "sheetImages", "bodyTopPadding", "legend", "legendPosition", "showPageNumbers", "pageNumberPosition", "watermarkEnabled", "watermarkType", "watermarkLogoUrl", "watermarkText", "watermarkOpacity", "watermarkPattern", "watermarkX", "watermarkY", "watermarkWidth", "watermarkHeight", "watermarkRotation", "signatureEnabled", "signatureImage", "signatureX", "signatureY", "signatureWidth", "signatureHeight", "signaturePage"], [1, "!h-8", "!w-8", "!text-3xl", "text-stone-300", "dark:text-gray-700"]], template: function ReportTemplateThumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, ReportTemplateThumbComponent_Conditional_1_Template, 4, 46, "div", 2)(2, ReportTemplateThumbComponent_Conditional_2_Template, 1, 2, "img", 3)(3, ReportTemplateThumbComponent_Conditional_3_Template, 3, 1, "div", 4);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275styleProp("box-shadow", "inset 0 6px 0 0 " + (ctx.template().identityColor || "#000000"));
        \u0275\u0275classProp("report-template-thumb--landscape", ctx.isLandscape());
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_2_0 = ctx.template().sections) == null ? null : tmp_2_0.length) ? 1 : ((tmp_2_0 = ctx.template().thumbnail) == null ? null : tmp_2_0.image) ? 2 : 3);
      }
    }, dependencies: [CommonModule, MatIconModule, MatIcon, ReportPreviewComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.report-template-thumb__frame[_ngcontent-%COMP%] {\n  height: 100%;\n  aspect-ratio: 210/297;\n  container-type: size;\n  overflow: hidden;\n  pointer-events: none;\n}\n.report-template-thumb--landscape[_ngcontent-%COMP%]   .report-template-thumb__frame[_ngcontent-%COMP%] {\n  aspect-ratio: 297/210;\n}\n.report-template-thumb__sheet[_ngcontent-%COMP%] {\n  transform-origin: top left;\n}\n/*# sourceMappingURL=report-template-thumb.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportTemplateThumbComponent, [{
    type: Component,
    args: [{ selector: "report-template-thumb", standalone: true, imports: [CommonModule, MatIconModule, ReportPreviewComponent], template: `
        <div
            class="report-template-thumb relative flex h-36 items-center justify-center overflow-hidden rounded-xl border border-stone-200 bg-stone-100 dark:border-gray-800 dark:bg-gray-950"
            [class.report-template-thumb--landscape]="isLandscape()"
            [style.box-shadow]="'inset 0 6px 0 0 ' + (template().identityColor || '#000000')"
        >
            @if (template().sections?.length) {
                <div #frame class="report-template-thumb__frame">
                    <div class="report-template-thumb__sheet" [style.width.mm]="pageWidthMm()" [style.transform]="sheetScale()">
                        <report-preview
                            [template]="template()"
                            [previewData]="previewData()"
                            [thumbnailMode]="true"
                            [primaryColor]="template().primaryColor || '#4F46E5'"
                            [pageBackgroundColor]="template().pageBackgroundColor || '#ffffff'"
                            [orientation]="template().orientation || 'portrait'"
                            [pageSize]="template().pageSize || 'A4'"
                            [layerZ]="layerZ()"
                            [clickable]="false"
                            [logoUrl]="template().headerLogos?.length ? null : template().logo || null"
                            [logoEnabled]="!template().headerLogos?.length && !!template().logo"
                            [logoX]="template().logoSettings?.x ?? 32"
                            [logoY]="template().logoSettings?.y ?? 32"
                            [logoWidth]="template().logoSettings?.width ?? 160"
                            [logoHeight]="template().logoSettings?.height ?? 60"
                            [logoRotation]="template().logoSettings?.rotation ?? 0"
                            [logoAutoFitContent]="template().logoSettings?.autoFitContent ?? false"
                            [sheetImages]="template().sheetImages ?? []"
                            [bodyTopPadding]="template().bodyTopPadding ?? 0"
                            [legend]="template().legend || ''"
                            [legendPosition]="template().legendPosition || 'left'"
                            [showPageNumbers]="template().showPageNumbers || false"
                            [pageNumberPosition]="template().pageNumberPosition || 'bottom-center'"
                            [watermarkEnabled]="template().watermark?.enabled || false"
                            [watermarkType]="template().watermark?.type || 'text'"
                            [watermarkLogoUrl]="template().watermark?.logo || undefined"
                            [watermarkText]="template().watermark?.text || template().name || 'CONFIDENTIAL'"
                            [watermarkOpacity]="template().watermark?.opacity ?? 0.08"
                            [watermarkPattern]="template().watermark?.pattern || 'single'"
                            [watermarkX]="template().watermark?.x ?? 250"
                            [watermarkY]="template().watermark?.y ?? 420"
                            [watermarkWidth]="template().watermark?.width ?? 280"
                            [watermarkHeight]="template().watermark?.height ?? 160"
                            [watermarkRotation]="template().watermark?.rotation ?? -15"
                            [signatureEnabled]="!!(template().signature?.enabled && template().signature?.image)"
                            [signatureImage]="template().signature?.image || null"
                            [signatureX]="template().signature?.x ?? 48"
                            [signatureY]="template().signature?.y ?? 720"
                            [signatureWidth]="template().signature?.width ?? 160"
                            [signatureHeight]="template().signature?.height ?? 64"
                            [signaturePage]="template().signature?.page ?? 0"
                        ></report-preview>
                    </div>
                </div>
            } @else if (template().thumbnail?.image) {
                <img
                    [src]="template().thumbnail.image"
                    [alt]="template().name"
                    class="h-full w-full object-contain object-top"
                />
            } @else {
                <div class="flex h-full items-center justify-center">
                    <mat-icon class="!h-8 !w-8 !text-3xl text-stone-300 dark:text-gray-700">{{
                        icon()
                    }}</mat-icon>
                </div>
            }
            <ng-content></ng-content>
        </div>
    `, styles: ["/* angular:styles/component:scss;406d85eb1ef72e21b1c3fed7f23b23dddcc858f4c220cb7eb7fffe69caae6ccb;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/smart-batch/report-template-thumb.component.ts */\n:host {\n  display: block;\n}\n.report-template-thumb__frame {\n  height: 100%;\n  aspect-ratio: 210/297;\n  container-type: size;\n  overflow: hidden;\n  pointer-events: none;\n}\n.report-template-thumb--landscape .report-template-thumb__frame {\n  aspect-ratio: 297/210;\n}\n.report-template-thumb__sheet {\n  transform-origin: top left;\n}\n/*# sourceMappingURL=report-template-thumb.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportTemplateThumbComponent, { className: "ReportTemplateThumbComponent", filePath: "src/app/modules/smart-batch/report-template-thumb.component.ts", lineNumber: 102 });
})();

export {
  ReportTemplateThumbComponent
};
//# sourceMappingURL=chunk-4ZI7PEQL.js.map
