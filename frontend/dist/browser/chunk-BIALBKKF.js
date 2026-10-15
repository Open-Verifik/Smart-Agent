import {
  CommonModule,
  Component,
  Input,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-I5BUD46C.js";

// src/app/modules/smart-fleet/watch-rules/fleet-channel-icon.component.ts
function FleetChannelIconComponent__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "rect", 3)(2, "path", 4);
    \u0275\u0275elementEnd();
  }
}
function FleetChannelIconComponent__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "circle", 5)(2, "circle", 6)(3, "circle", 7)(4, "path", 8);
    \u0275\u0275elementEnd();
  }
}
function FleetChannelIconComponent__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "path", 9)(2, "path", 10);
    \u0275\u0275elementEnd();
  }
}
function FleetChannelIconComponent__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "path", 11);
    \u0275\u0275elementEnd();
  }
}
function FleetChannelIconComponent__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 12);
    \u0275\u0275element(1, "path", 13);
    \u0275\u0275elementEnd();
  }
}
function fleetChannelTone(channel) {
  const tones = {
    email: "bg-sky-100 text-sky-700 dark:bg-sky-400/25 dark:text-sky-100",
    webhook: "bg-violet-100 text-violet-700 dark:bg-violet-400/25 dark:text-violet-100",
    inApp: "bg-amber-100 text-amber-800 dark:bg-amber-400/25 dark:text-amber-100",
    sms: "bg-indigo-100 text-indigo-700 dark:bg-indigo-400/25 dark:text-indigo-100",
    whatsapp: "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/25 dark:text-emerald-100"
  };
  return tones[channel];
}
var FleetChannelIconComponent = class _FleetChannelIconComponent {
  static {
    this.\u0275fac = function FleetChannelIconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FleetChannelIconComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FleetChannelIconComponent, selectors: [["fleet-channel-icon"]], inputs: { channel: "channel" }, decls: 5, vars: 5, consts: [["class", "h-6 w-6", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "aria-hidden", "true", 4, "ngIf"], ["class", "h-6 w-6", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.75", "aria-hidden", "true", 1, "h-6", "w-6"], ["x", "3", "y", "5", "width", "18", "height", "14", "rx", "2"], ["d", "m4 7 8 6 8-6"], ["cx", "6", "cy", "12", "r", "2.25"], ["cx", "18", "cy", "6", "r", "2.25"], ["cx", "18", "cy", "18", "r", "2.25"], ["d", "M8.2 12H12a4 4 0 0 0 4-4V8.2M12 12a4 4 0 0 1 4 4v1.8"], ["d", "M6 16h12l-1.1-2a6 6 0 1 0-9.8 0L6 16z"], ["d", "M10 16a2 2 0 0 0 4 0"], ["d", "M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"], ["viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true", 1, "h-6", "w-6"], ["d", "M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 1 0 20.5 3.5zM12 20.4a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.1.8.8-3-.2-.3A9.1 9.1 0 1 1 12 20.4zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.2-.7.9-.9 1-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4c.1-.2.1-.3 0-.5s-.6-1.4-.8-2-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c.6.3 1.1.4 1.5.5a3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c-.1-.2-.3-.2-.6-.3z"]], template: function FleetChannelIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FleetChannelIconComponent__svg_svg_0_Template, 3, 0, "svg", 0)(1, FleetChannelIconComponent__svg_svg_1_Template, 5, 0, "svg", 0)(2, FleetChannelIconComponent__svg_svg_2_Template, 3, 0, "svg", 0)(3, FleetChannelIconComponent__svg_svg_3_Template, 2, 0, "svg", 0)(4, FleetChannelIconComponent__svg_svg_4_Template, 2, 0, "svg", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.channel === "email");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.channel === "webhook");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.channel === "inApp");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.channel === "sms");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.channel === "whatsapp");
      }
    }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FleetChannelIconComponent, [{
    type: Component,
    args: [{
      selector: "fleet-channel-icon",
      standalone: true,
      imports: [CommonModule],
      template: `
        <svg
            *ngIf="channel === 'email'"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            aria-hidden="true"
        >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
        </svg>
        <svg
            *ngIf="channel === 'webhook'"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            aria-hidden="true"
        >
            <circle cx="6" cy="12" r="2.25" />
            <circle cx="18" cy="6" r="2.25" />
            <circle cx="18" cy="18" r="2.25" />
            <path d="M8.2 12H12a4 4 0 0 0 4-4V8.2M12 12a4 4 0 0 1 4 4v1.8" />
        </svg>
        <svg
            *ngIf="channel === 'inApp'"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            aria-hidden="true"
        >
            <path d="M6 16h12l-1.1-2a6 6 0 1 0-9.8 0L6 16z" />
            <path d="M10 16a2 2 0 0 0 4 0" />
        </svg>
        <svg
            *ngIf="channel === 'sms'"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            aria-hidden="true"
        >
            <path d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
        </svg>
        <svg
            *ngIf="channel === 'whatsapp'"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 1 0 20.5 3.5zM12 20.4a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.1.8.8-3-.2-.3A9.1 9.1 0 1 1 12 20.4zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.2-.7.9-.9 1-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4c.1-.2.1-.3 0-.5s-.6-1.4-.8-2-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c.6.3 1.1.4 1.5.5a3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c-.1-.2-.3-.2-.6-.3z"
            />
        </svg>
    `
    }]
  }], null, { channel: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FleetChannelIconComponent, { className: "FleetChannelIconComponent", filePath: "src/app/modules/smart-fleet/watch-rules/fleet-channel-icon.component.ts", lineNumber: 85 });
})();

export {
  fleetChannelTone,
  FleetChannelIconComponent
};
//# sourceMappingURL=chunk-BIALBKKF.js.map
