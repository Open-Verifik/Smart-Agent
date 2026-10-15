import {
  FLEET_GROUP_ICONS
} from "./chunk-4NPR4CK5.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵstyleProp
} from "./chunk-I5BUD46C.js";

// src/app/modules/smart-fleet/assets/fleet-vehicle-icon.component.ts
var FleetVehicleIconComponent = class _FleetVehicleIconComponent {
  constructor() {
    this.icon = "car";
  }
  get mask() {
    const name = FLEET_GROUP_ICONS.find((item) => item === this.icon) || "car";
    return `url("/fleet-icons/${name}.svg")`;
  }
  static {
    this.\u0275fac = function FleetVehicleIconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FleetVehicleIconComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FleetVehicleIconComponent, selectors: [["fleet-vehicle-icon"]], hostAttrs: [1, "inline-flex", "shrink-0"], inputs: { icon: "icon" }, decls: 1, vars: 4, consts: [["aria-hidden", "true", 1, "mark", "block", "h-full", "w-full"]], template: function FleetVehicleIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "span", 0);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("mask-image", ctx.mask)("-webkit-mask-image", ctx.mask);
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  color: inherit;\n}\n.mark[_ngcontent-%COMP%] {\n  background-color: currentColor;\n  mask-mode: alpha;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-size: contain;\n}\n/*# sourceMappingURL=fleet-vehicle-icon.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FleetVehicleIconComponent, [{
    type: Component,
    args: [{ selector: "fleet-vehicle-icon", standalone: true, host: { class: "inline-flex shrink-0" }, template: `
        <span
            class="mark block h-full w-full"
            [style.mask-image]="mask"
            [style.-webkit-mask-image]="mask"
            aria-hidden="true"
        ></span>
    `, styles: ["/* angular:styles/component:scss;7d2528c7b614d5cc29b476c8ee9f61ce456d9a41c02d7f2cc6d25a6554422e53;C:/Users/anuar/OneDrive/Documentos/verifik/Smart-Agent/frontend/src/app/modules/smart-fleet/assets/fleet-vehicle-icon.component.ts */\n:host {\n  color: inherit;\n}\n.mark {\n  background-color: currentColor;\n  mask-mode: alpha;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-size: contain;\n}\n/*# sourceMappingURL=fleet-vehicle-icon.component.css.map */\n"] }]
  }], null, { icon: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FleetVehicleIconComponent, { className: "FleetVehicleIconComponent", filePath: "src/app/modules/smart-fleet/assets/fleet-vehicle-icon.component.ts", lineNumber: 39 });
})();

export {
  FleetVehicleIconComponent
};
//# sourceMappingURL=chunk-NF6SFANK.js.map
