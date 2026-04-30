import {
  SmartBatchService
} from "./chunk-OZON7ZNM.js";
import {
  isClientVisibleBatchDependencyField
} from "./chunk-RYDKXTHD.js";
import {
  CdkDrag,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-3MP5RJ44.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltipModule
} from "./chunk-FD5UKZMK.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-NLVEQCVI.js";
import {
  MatCheckboxModule
} from "./chunk-NEU6JIQ7.js";
import "./chunk-4KMFYS6V.js";
import "./chunk-DZ5DWUCE.js";
import "./chunk-RVVUGFOS.js";
import "./chunk-MJXNRHWH.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-LTHY76JY.js";
import "./chunk-AY5C2ZOO.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-BY4NG7V4.js";
import {
  ErrorStateMatcher,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-RNRTLQ3J.js";
import {
  UniqueSelectionDispatcher
} from "./chunk-6OJR6OMX.js";
import {
  ControlContainer,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-S7CME3IL.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-KU43NSH4.js";
import {
  CdkPortalOutlet,
  PortalModule,
  TemplatePortal
} from "./chunk-VK5CCBZ3.js";
import "./chunk-BIHX2IQ4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-HZQU4G6R.js";
import {
  ANIMATION_MODULE_TYPE,
  BidiModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directionality,
  Directive,
  EMPTY,
  ENTER,
  ElementRef,
  EventEmitter,
  FocusKeyManager,
  FocusMonitor,
  HostAttributeToken,
  Injectable,
  InjectionToken,
  Input,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIconButton,
  MatRipple,
  MatRippleModule,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  Platform,
  QueryList,
  Renderer2,
  SPACE,
  SkipSelf,
  SlicePipe,
  Subject,
  Subscription,
  TemplateRef,
  UpperCasePipe,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _VisuallyHiddenLoader,
  _getFocusedElementPierceShadowDom,
  booleanAttribute,
  computed,
  filter,
  hasModifierKey,
  inject,
  map,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-LLRZIRCV.js";
import "./chunk-KTESVR3Q.js";

// node_modules/@angular/cdk/fesm2022/accordion.mjs
var CDK_ACCORDION = new InjectionToken("CdkAccordion");
var CdkAccordion = class _CdkAccordion {
  /** Emits when the state of the accordion changes */
  _stateChanges = new Subject();
  /** Stream that emits true/false when openAll/closeAll is triggered. */
  _openCloseAllActions = new Subject();
  /** A readonly id value to use for unique selection coordination. */
  id = inject(_IdGenerator).getId("cdk-accordion-");
  /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
  multi = false;
  /** Opens all enabled accordion items in an accordion where multi is enabled. */
  openAll() {
    if (this.multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items. */
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
  static \u0275fac = function CdkAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordion)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordion,
    selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
    inputs: {
      multi: [2, "multi", "multi", booleanAttribute]
    },
    exportAs: ["cdkAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_ACCORDION,
      useExisting: _CdkAccordion
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordion, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion, [cdkAccordion]",
      exportAs: "cdkAccordion",
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionItem = class _CdkAccordionItem {
  accordion = inject(CDK_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _expansionDispatcher = inject(UniqueSelectionDispatcher);
  /** Subscription to openAll/closeAll events. */
  _openCloseAllSubscription = Subscription.EMPTY;
  /** Event emitted every time the AccordionItem is closed. */
  closed = new EventEmitter();
  /** Event emitted every time the AccordionItem is opened. */
  opened = new EventEmitter();
  /** Event emitted when the AccordionItem is destroyed. */
  destroyed = new EventEmitter();
  /**
   * Emits whenever the expanded state of the accordion changes.
   * Primarily used to facilitate two-way binding.
   * @docs-private
   */
  expandedChange = new EventEmitter();
  /** The unique AccordionItem id. */
  id = inject(_IdGenerator).getId("cdk-accordion-child-");
  /** Whether the AccordionItem is expanded. */
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  _expanded = false;
  /** Whether the AccordionItem is disabled. */
  disabled = false;
  /** Unregister function for _expansionDispatcher. */
  _removeUniqueSelectionListener = () => {
  };
  constructor() {
  }
  ngOnInit() {
    this._removeUniqueSelectionListener = this._expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Emits an event for the accordion item being destroyed. */
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe((expanded) => {
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
  static \u0275fac = function CdkAccordionItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionItem)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordionItem,
    selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
    inputs: {
      expanded: [2, "expanded", "expanded", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      closed: "closed",
      opened: "opened",
      destroyed: "destroyed",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkAccordionItem"],
    features: [\u0275\u0275ProvidersFeature([
      // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
      // registering to the same accordion.
      {
        provide: CDK_ACCORDION,
        useValue: void 0
      }
    ])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionItem, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion-item, [cdkAccordionItem]",
      exportAs: "cdkAccordionItem",
      providers: [
        // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: void 0
        }
      ]
    }]
  }], () => [], {
    closed: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }],
    expanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionModule = class _CdkAccordionModule {
  static \u0275fac = function CdkAccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkAccordionModule,
    imports: [CdkAccordion, CdkAccordionItem],
    exports: [CdkAccordion, CdkAccordionItem]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAccordion, CdkAccordionItem],
      exports: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/expansion.mjs
var _c0 = ["body"];
var _c1 = ["bodyWrapper"];
var _c2 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
var _c3 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanel_ng_template_7_Template(rf, ctx) {
}
var _c4 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
var _c5 = ["mat-panel-title", "mat-panel-description", "*"];
function MatExpansionPanelHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 2);
    \u0275\u0275element(2, "path", 3);
    \u0275\u0275elementEnd()();
  }
}
var MAT_ACCORDION = new InjectionToken("MAT_ACCORDION");
var MAT_EXPANSION_PANEL = new InjectionToken("MAT_EXPANSION_PANEL");
var MatExpansionPanelContent = class _MatExpansionPanelContent {
  _template = inject(TemplateRef);
  _expansionPanel = inject(MAT_EXPANSION_PANEL, {
    optional: true
  });
  constructor() {
  }
  static \u0275fac = function MatExpansionPanelContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelContent,
    selectors: [["ng-template", "matExpansionPanelContent", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matExpansionPanelContent]"
    }]
  }], () => [], null);
})();
var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
var MatExpansionPanel = class _MatExpansionPanel extends CdkAccordionItem {
  _viewContainerRef = inject(ViewContainerRef);
  _animationsDisabled = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  }) === "NoopAnimations";
  _document = inject(DOCUMENT);
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  /** Whether the toggle indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }
  set hideToggle(value) {
    this._hideToggle = value;
  }
  _hideToggle = false;
  /** The position of the expansion indicator. */
  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }
  set togglePosition(value) {
    this._togglePosition = value;
  }
  _togglePosition;
  /** An event emitted after the body's expansion animation happens. */
  afterExpand = new EventEmitter();
  /** An event emitted after the body's collapse animation happens. */
  afterCollapse = new EventEmitter();
  /** Stream that emits for changes in `@Input` properties. */
  _inputChanges = new Subject();
  /** Optionally defined accordion the expansion panel belongs to. */
  accordion = inject(MAT_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  /** Content that will be rendered lazily. */
  _lazyContent;
  /** Element containing the panel's user-provided content. */
  _body;
  /** Element wrapping the panel body. */
  _bodyWrapper;
  /** Portal holding the user's content. */
  _portal;
  /** ID for the associated header element. Used for a11y labelling. */
  _headerId = inject(_IdGenerator).getId("mat-expansion-panel-header-");
  constructor() {
    super();
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    this._expansionDispatcher = inject(UniqueSelectionDispatcher);
    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  /** Determines whether the expansion panel should have spacing between it and its siblings. */
  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === "default";
    }
    return false;
  }
  /** Gets the expanded state string. */
  _getExpandedState() {
    return this.expanded ? "expanded" : "collapsed";
  }
  /** Toggles the expanded state of the expansion panel. */
  toggle() {
    this.expanded = !this.expanded;
  }
  /** Sets the expanded state of the expansion panel to false. */
  close() {
    this.expanded = false;
  }
  /** Sets the expanded state of the expansion panel to true. */
  open() {
    this.expanded = true;
  }
  ngAfterContentInit() {
    if (this._lazyContent && this._lazyContent._expansionPanel === this) {
      this.opened.pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1)).subscribe(() => {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
    this._setupAnimationEvents();
  }
  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTransitionEnd?.();
    this._inputChanges.complete();
  }
  /** Checks whether the expansion panel's content contains the currently-focused element. */
  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }
    return false;
  }
  _transitionEndListener = ({
    target,
    propertyName
  }) => {
    if (target === this._bodyWrapper?.nativeElement && propertyName === "grid-template-rows") {
      this._ngZone.run(() => {
        if (this.expanded) {
          this.afterExpand.emit();
        } else {
          this.afterCollapse.emit();
        }
      });
    }
  };
  _setupAnimationEvents() {
    this._ngZone.runOutsideAngular(() => {
      if (this._animationsDisabled) {
        this.opened.subscribe(() => this._ngZone.run(() => this.afterExpand.emit()));
        this.closed.subscribe(() => this._ngZone.run(() => this.afterCollapse.emit()));
      } else {
        setTimeout(() => {
          const element = this._elementRef.nativeElement;
          this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this._transitionEndListener);
          element.classList.add("mat-expansion-panel-animations-enabled");
        }, 200);
      }
    });
  }
  static \u0275fac = function MatExpansionPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanel,
    selectors: [["mat-expansion-panel"]],
    contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lazyContent = _t.first);
      }
    },
    viewQuery: function MatExpansionPanel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._body = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._bodyWrapper = _t.first);
      }
    },
    hostAttrs: [1, "mat-expansion-panel"],
    hostVars: 4,
    hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-expanded", ctx.expanded)("mat-expansion-panel-spacing", ctx._hasSpacing());
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      togglePosition: "togglePosition"
    },
    outputs: {
      afterExpand: "afterExpand",
      afterCollapse: "afterCollapse"
    },
    exportAs: ["matExpansionPanel"],
    features: [\u0275\u0275ProvidersFeature([
      // Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: void 0
      },
      {
        provide: MAT_EXPANSION_PANEL,
        useExisting: _MatExpansionPanel
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 4,
    consts: [["bodyWrapper", ""], ["body", ""], [1, "mat-expansion-panel-content-wrapper"], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
    template: function MatExpansionPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2, 0)(3, "div", 3, 1)(5, "div", 4);
        \u0275\u0275projection(6, 1);
        \u0275\u0275template(7, MatExpansionPanel_ng_template_7_Template, 0, 0, "ng-template", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(8, 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("inert", ctx.expanded ? null : "");
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.id);
        \u0275\u0275attribute("aria-labelledby", ctx._headerId);
        \u0275\u0275advance(4);
        \u0275\u0275property("cdkPortalOutlet", ctx._portal);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanel, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel",
      exportAs: "matExpansionPanel",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: MAT_ACCORDION,
          useValue: void 0
        },
        {
          provide: MAT_EXPANSION_PANEL,
          useExisting: MatExpansionPanel
        }
      ],
      host: {
        "class": "mat-expansion-panel",
        "[class.mat-expanded]": "expanded",
        "[class.mat-expansion-panel-spacing]": "_hasSpacing()"
      },
      imports: [CdkPortalOutlet],
      template: `<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content-wrapper" [attr.inert]="expanded ? null : ''" #bodyWrapper>
  <div class="mat-expansion-panel-content"
       role="region"
       [attr.aria-labelledby]="_headerId"
       [id]="id"
       #body>
    <div class="mat-expansion-panel-body">
      <ng-content></ng-content>
      <ng-template [cdkPortalOutlet]="_portal"></ng-template>
    </div>
    <ng-content select="mat-action-row"></ng-content>
  </div>
</div>
`,
      styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], () => [], {
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    togglePosition: [{
      type: Input
    }],
    afterExpand: [{
      type: Output
    }],
    afterCollapse: [{
      type: Output
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: ViewChild,
      args: ["body"]
    }],
    _bodyWrapper: [{
      type: ViewChild,
      args: ["bodyWrapper"]
    }]
  });
})();
var MatExpansionPanelActionRow = class _MatExpansionPanelActionRow {
  static \u0275fac = function MatExpansionPanelActionRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelActionRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelActionRow,
    selectors: [["mat-action-row"]],
    hostAttrs: [1, "mat-action-row"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelActionRow, [{
    type: Directive,
    args: [{
      selector: "mat-action-row",
      host: {
        class: "mat-action-row"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelHeader = class _MatExpansionPanelHeader {
  panel = inject(MatExpansionPanel, {
    host: true
  });
  _element = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _parentChangeSubscription = Subscription.EMPTY;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const panel = this.panel;
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(filter((changes) => !!(changes["hideToggle"] || changes["togglePosition"]))) : EMPTY;
    this.tabIndex = parseInt(tabIndex || "") || 0;
    this._parentChangeSubscription = merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter((changes) => {
      return !!(changes["hideToggle"] || changes["disabled"] || changes["togglePosition"]);
    }))).subscribe(() => this._changeDetectorRef.markForCheck());
    panel.closed.pipe(filter(() => panel._containsFocus())).subscribe(() => this._focusMonitor.focusVia(this._element, "program"));
    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /** Height of the header while the panel is expanded. */
  expandedHeight;
  /** Height of the header while the panel is collapsed. */
  collapsedHeight;
  /** Tab index of the header. */
  tabIndex = 0;
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }
  /** Toggles the expanded state of the panel. */
  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  /** Gets whether the panel is expanded. */
  _isExpanded() {
    return this.panel.expanded;
  }
  /** Gets the expanded state string of the panel. */
  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  /** Gets the panel id. */
  _getPanelId() {
    return this.panel.id;
  }
  /** Gets the toggle position for the header. */
  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  /** Gets whether the expand indicator should be shown. */
  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  /**
   * Gets the current height of the header. Null if no custom height has been
   * specified, and if the default height from the stylesheet should be used.
   */
  _getHeaderHeight() {
    const isExpanded = this._isExpanded();
    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }
        return;
    }
  }
  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe((origin) => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }
  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
  static \u0275fac = function MatExpansionPanelHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanelHeader,
    selectors: [["mat-expansion-panel-header"]],
    hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
    hostVars: 13,
    hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
          return ctx._toggle();
        })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        \u0275\u0275styleProp("height", ctx._getHeaderHeight());
        \u0275\u0275classProp("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before");
      }
    },
    inputs: {
      expandedHeight: "expandedHeight",
      collapsedHeight: "collapsedHeight",
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
    },
    ngContentSelectors: _c5,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],
    template: function MatExpansionPanelHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275projection(3, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, MatExpansionPanelHeader_Conditional_4_Template, 3, 0, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-content-hide-toggle", !ctx._showToggle());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx._showToggle() ? 4 : -1);
      }
    },
    styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelHeader, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-expansion-panel-header mat-focus-indicator",
        "role": "button",
        "[attr.id]": "panel._headerId",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": "_getPanelId()",
        "[attr.aria-expanded]": "_isExpanded()",
        "[attr.aria-disabled]": "panel.disabled",
        "[class.mat-expanded]": "_isExpanded()",
        "[class.mat-expansion-toggle-indicator-after]": `_getTogglePosition() === 'after'`,
        "[class.mat-expansion-toggle-indicator-before]": `_getTogglePosition() === 'before'`,
        "[style.height]": "_getHeaderHeight()",
        "(click)": "_toggle()",
        "(keydown)": "_keydown($event)"
      },
      template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n',
      styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n']
    }]
  }], () => [], {
    expandedHeight: [{
      type: Input
    }],
    collapsedHeight: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }]
  });
})();
var MatExpansionPanelDescription = class _MatExpansionPanelDescription {
  static \u0275fac = function MatExpansionPanelDescription_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelDescription)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelDescription,
    selectors: [["mat-panel-description"]],
    hostAttrs: [1, "mat-expansion-panel-header-description"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelDescription, [{
    type: Directive,
    args: [{
      selector: "mat-panel-description",
      host: {
        class: "mat-expansion-panel-header-description"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelTitle = class _MatExpansionPanelTitle {
  static \u0275fac = function MatExpansionPanelTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelTitle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelTitle,
    selectors: [["mat-panel-title"]],
    hostAttrs: [1, "mat-expansion-panel-header-title"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelTitle, [{
    type: Directive,
    args: [{
      selector: "mat-panel-title",
      host: {
        class: "mat-expansion-panel-header-title"
      }
    }]
  }], null, null);
})();
var MatAccordion = class _MatAccordion extends CdkAccordion {
  _keyManager;
  /** Headers belonging to this accordion. */
  _ownHeaders = new QueryList();
  /** All headers inside the accordion. Includes headers inside nested accordions. */
  _headers;
  /** Whether the expansion indicator should be hidden. */
  hideToggle = false;
  /**
   * Display mode used for all expansion panels in the accordion. Currently two display
   * modes exist:
   *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
   *     panel at a different elevation from the rest of the accordion.
   *  flat - no spacing is placed around expanded panels, showing all panels at the same
   *     elevation.
   */
  displayMode = "default";
  /** The position of the expansion indicator. */
  togglePosition = "after";
  ngAfterContentInit() {
    this._headers.changes.pipe(startWith(this._headers)).subscribe((headers) => {
      this._ownHeaders.reset(headers.filter((header) => header.panel.accordion === this));
      this._ownHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  /** Handles keyboard events coming in from the panel headers. */
  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }
  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._keyManager?.destroy();
    this._ownHeaders.destroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatAccordion_BaseFactory;
    return function MatAccordion_Factory(__ngFactoryType__) {
      return (\u0275MatAccordion_BaseFactory || (\u0275MatAccordion_BaseFactory = \u0275\u0275getInheritedFactory(_MatAccordion)))(__ngFactoryType__ || _MatAccordion);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAccordion,
    selectors: [["mat-accordion"]],
    contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headers = _t);
      }
    },
    hostAttrs: [1, "mat-accordion"],
    hostVars: 2,
    hostBindings: function MatAccordion_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-accordion-multi", ctx.multi);
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      displayMode: "displayMode",
      togglePosition: "togglePosition"
    },
    exportAs: ["matAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_ACCORDION,
      useExisting: _MatAccordion
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAccordion, [{
    type: Directive,
    args: [{
      selector: "mat-accordion",
      exportAs: "matAccordion",
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: "mat-accordion",
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if multiple panel support is enabled.
        "[class.mat-accordion-multi]": "this.multi"
      }
    }]
  }], null, {
    _headers: [{
      type: ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    displayMode: [{
      type: Input
    }],
    togglePosition: [{
      type: Input
    }]
  });
})();
var MatExpansionModule = class _MatExpansionModule {
  static \u0275fac = function MatExpansionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatExpansionModule,
    imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
    exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkAccordionModule, PortalModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/stepper.mjs
var _c02 = ["*"];
function CdkStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var CdkStepHeader = class _CdkStepHeader {
  _elementRef = inject(ElementRef);
  constructor() {
  }
  /** Focuses the step header. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  static \u0275fac = function CdkStepHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepHeader)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepHeader,
    selectors: [["", "cdkStepHeader", ""]],
    hostAttrs: ["role", "tab"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepHeader, [{
    type: Directive,
    args: [{
      selector: "[cdkStepHeader]",
      host: {
        "role": "tab"
      }
    }]
  }], () => [], null);
})();
var CdkStepLabel = class _CdkStepLabel {
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function CdkStepLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepLabel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepLabel,
    selectors: [["", "cdkStepLabel", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepLabel, [{
    type: Directive,
    args: [{
      selector: "[cdkStepLabel]"
    }]
  }], () => [], null);
})();
var STEP_STATE = {
  NUMBER: "number",
  EDIT: "edit",
  DONE: "done",
  ERROR: "error"
};
var STEPPER_GLOBAL_OPTIONS = new InjectionToken("STEPPER_GLOBAL_OPTIONS");
var CdkStep = class _CdkStep {
  _stepperOptions;
  _stepper = inject(CdkStepper);
  _displayDefaultIndicatorType;
  /** Template for step label if it exists. */
  stepLabel;
  /** Forms that have been projected into the step. */
  _childForms;
  /** Template for step content. */
  content;
  /** The top level abstract control of the step. */
  stepControl;
  /** Whether user has attempted to move away from the step. */
  interacted = false;
  /** Emits when the user has attempted to move away from the step. */
  interactedStream = new EventEmitter();
  /** Plain text label of the step. */
  label;
  /** Error message to display when there's an error. */
  errorMessage;
  /** Aria label for the tab. */
  ariaLabel;
  /**
   * Reference to the element that the tab is labelled by.
   * Will be cleared if `aria-label` is set at the same time.
   */
  ariaLabelledby;
  /** State of the step. */
  state;
  /** Whether the user can return to this step once it has been marked as completed. */
  editable = true;
  /** Whether the completion of step is optional. */
  optional = false;
  /** Whether step is marked as completed. */
  get completed() {
    return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
  }
  set completed(value) {
    this._completedOverride = value;
  }
  _completedOverride = null;
  _getDefaultCompleted() {
    return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
  }
  /** Whether step has an error. */
  get hasError() {
    return this._customError == null ? this._getDefaultError() : this._customError;
  }
  set hasError(value) {
    this._customError = value;
  }
  _customError = null;
  _getDefaultError() {
    return this.stepControl && this.stepControl.invalid && this.interacted;
  }
  constructor() {
    const stepperOptions = inject(STEPPER_GLOBAL_OPTIONS, {
      optional: true
    });
    this._stepperOptions = stepperOptions ? stepperOptions : {};
    this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
  }
  /** Selects this step component. */
  select() {
    this._stepper.selected = this;
  }
  /** Resets the step to its initial state. Note that this includes resetting form data. */
  reset() {
    this.interacted = false;
    if (this._completedOverride != null) {
      this._completedOverride = false;
    }
    if (this._customError != null) {
      this._customError = false;
    }
    if (this.stepControl) {
      this._childForms?.forEach((form) => form.resetForm?.());
      this.stepControl.reset();
    }
  }
  ngOnChanges() {
    this._stepper._stateChanged();
  }
  _markAsInteracted() {
    if (!this.interacted) {
      this.interacted = true;
      this.interactedStream.emit(this);
    }
  }
  /** Determines whether the error state can be shown. */
  _showError() {
    return this._stepperOptions.showError ?? this._customError != null;
  }
  static \u0275fac = function CdkStep_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStep)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkStep,
    selectors: [["cdk-step"]],
    contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkStepLabel, 5);
        \u0275\u0275contentQuery(
          dirIndex,
          // Note: we look for `ControlContainer` here, because both `NgForm` and `FormGroupDirective`
          // provides themselves as such, but we don't want to have a concrete reference to both of
          // the directives. The type is marked as `Partial` in case we run into a class that provides
          // itself as `ControlContainer` but doesn't have the same interface as the directives.
          ControlContainer,
          5
        );
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepLabel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._childForms = _t);
      }
    },
    viewQuery: function CdkStep_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      stepControl: "stepControl",
      label: "label",
      errorMessage: "errorMessage",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      state: "state",
      editable: [2, "editable", "editable", booleanAttribute],
      optional: [2, "optional", "optional", booleanAttribute],
      completed: [2, "completed", "completed", booleanAttribute],
      hasError: [2, "hasError", "hasError", booleanAttribute]
    },
    outputs: {
      interactedStream: "interacted"
    },
    exportAs: ["cdkStep"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function CdkStep_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStep, [{
    type: Component,
    args: [{
      selector: "cdk-step",
      exportAs: "cdkStep",
      template: "<ng-template><ng-content/></ng-template>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [], {
    stepLabel: [{
      type: ContentChild,
      args: [CdkStepLabel]
    }],
    _childForms: [{
      type: ContentChildren,
      args: [
        // Note: we look for `ControlContainer` here, because both `NgForm` and `FormGroupDirective`
        // provides themselves as such, but we don't want to have a concrete reference to both of
        // the directives. The type is marked as `Partial` in case we run into a class that provides
        // itself as `ControlContainer` but doesn't have the same interface as the directives.
        ControlContainer,
        {
          descendants: true
        }
      ]
    }],
    content: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    stepControl: [{
      type: Input
    }],
    interactedStream: [{
      type: Output,
      args: ["interacted"]
    }],
    label: [{
      type: Input
    }],
    errorMessage: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    state: [{
      type: Input
    }],
    editable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optional: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    completed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasError: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkStepper = class _CdkStepper {
  _dir = inject(Directionality, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Used for managing keyboard focus. */
  _keyManager;
  /** Full list of steps inside the stepper, including inside nested steppers. */
  _steps;
  /** Steps that belong to the current stepper, excluding ones from nested steppers. */
  steps = new QueryList();
  /** The list of step headers of the steps in the stepper. */
  _stepHeader;
  /** List of step headers sorted based on their DOM order. */
  _sortedHeaders = new QueryList();
  /** Whether the validity of previous steps should be checked or not. */
  linear = false;
  /** The index of the selected step. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(index) {
    if (this._steps) {
      if (!this._isValidIndex(index) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.");
      }
      if (this._selectedIndex !== index) {
        this.selected?._markAsInteracted();
        if (!this._anyControlsInvalidOrPending(index) && (index >= this._selectedIndex || this.steps.toArray()[index].editable)) {
          this._updateSelectedItemIndex(index);
        }
      }
    } else {
      this._selectedIndex = index;
    }
  }
  _selectedIndex = 0;
  /** The step that is selected. */
  get selected() {
    return this.steps ? this.steps.toArray()[this.selectedIndex] : void 0;
  }
  set selected(step) {
    this.selectedIndex = step && this.steps ? this.steps.toArray().indexOf(step) : -1;
  }
  /** Event emitted when the selected step has changed. */
  selectionChange = new EventEmitter();
  /** Output to support two-way binding on `[(selectedIndex)]` */
  selectedIndexChange = new EventEmitter();
  /** Used to track unique ID for each stepper component. */
  _groupId = inject(_IdGenerator).getId("cdk-stepper-");
  /** Orientation of the stepper. */
  get orientation() {
    return this._orientation;
  }
  set orientation(value) {
    this._orientation = value;
    if (this._keyManager) {
      this._keyManager.withVerticalOrientation(value === "vertical");
    }
  }
  _orientation = "horizontal";
  constructor() {
  }
  ngAfterContentInit() {
    this._steps.changes.pipe(startWith(this._steps), takeUntil(this._destroyed)).subscribe((steps) => {
      this.steps.reset(steps.filter((step) => step._stepper === this));
      this.steps.notifyOnChanges();
    });
  }
  ngAfterViewInit() {
    this._stepHeader.changes.pipe(startWith(this._stepHeader), takeUntil(this._destroyed)).subscribe((headers) => {
      this._sortedHeaders.reset(headers.toArray().sort((a, b) => {
        const documentPosition = a._elementRef.nativeElement.compareDocumentPosition(b._elementRef.nativeElement);
        return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      }));
      this._sortedHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === "vertical");
    this._keyManager.updateActiveItem(this.selectedIndex);
    (this._dir ? this._dir.change : of()).pipe(startWith(this._layoutDirection()), takeUntil(this._destroyed)).subscribe((direction) => this._keyManager?.withHorizontalOrientation(direction));
    this._keyManager.updateActiveItem(this._selectedIndex);
    this.steps.changes.subscribe(() => {
      if (!this.selected) {
        this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
      }
    });
    if (!this._isValidIndex(this._selectedIndex)) {
      this._selectedIndex = 0;
    }
    if (this.linear && this._selectedIndex > 0) {
      const visitedSteps = this.steps.toArray().slice(0, this._selectedIndex);
      for (const step of visitedSteps) {
        step._markAsInteracted();
      }
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this.steps.destroy();
    this._sortedHeaders.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Selects and focuses the next step in list. */
  next() {
    this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
  }
  /** Selects and focuses the previous step in list. */
  previous() {
    this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
  }
  /** Resets the stepper to its initial state. Note that this includes clearing form data. */
  reset() {
    this._updateSelectedItemIndex(0);
    this.steps.forEach((step) => step.reset());
    this._stateChanged();
  }
  /** Returns a unique id for each step label element. */
  _getStepLabelId(i) {
    return `${this._groupId}-label-${i}`;
  }
  /** Returns unique id for each step content element. */
  _getStepContentId(i) {
    return `${this._groupId}-content-${i}`;
  }
  /** Marks the component to be change detected. */
  _stateChanged() {
    this._changeDetectorRef.markForCheck();
  }
  /** Returns position state of the step with the given index. */
  _getAnimationDirection(index) {
    const position = index - this._selectedIndex;
    if (position < 0) {
      return this._layoutDirection() === "rtl" ? "next" : "previous";
    } else if (position > 0) {
      return this._layoutDirection() === "rtl" ? "previous" : "next";
    }
    return "current";
  }
  /** Returns the type of icon to be displayed. */
  _getIndicatorType(index, state = STEP_STATE.NUMBER) {
    const step = this.steps.toArray()[index];
    const isCurrentStep = this._isCurrentStep(index);
    return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
  }
  _getDefaultIndicatorLogic(step, isCurrentStep) {
    if (step._showError() && step.hasError && !isCurrentStep) {
      return STEP_STATE.ERROR;
    } else if (!step.completed || isCurrentStep) {
      return STEP_STATE.NUMBER;
    } else {
      return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
    }
  }
  _getGuidelineLogic(step, isCurrentStep, state = STEP_STATE.NUMBER) {
    if (step._showError() && step.hasError && !isCurrentStep) {
      return STEP_STATE.ERROR;
    } else if (step.completed && !isCurrentStep) {
      return STEP_STATE.DONE;
    } else if (step.completed && isCurrentStep) {
      return state;
    } else if (step.editable && isCurrentStep) {
      return STEP_STATE.EDIT;
    } else {
      return state;
    }
  }
  _isCurrentStep(index) {
    return this._selectedIndex === index;
  }
  /** Returns the index of the currently-focused step header. */
  _getFocusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
  }
  _updateSelectedItemIndex(newIndex) {
    const stepsArray = this.steps.toArray();
    this.selectionChange.emit({
      selectedIndex: newIndex,
      previouslySelectedIndex: this._selectedIndex,
      selectedStep: stepsArray[newIndex],
      previouslySelectedStep: stepsArray[this._selectedIndex]
    });
    if (this._keyManager) {
      this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
    }
    this._selectedIndex = newIndex;
    this.selectedIndexChange.emit(this._selectedIndex);
    this._stateChanged();
  }
  _onKeydown(event) {
    const hasModifier = hasModifierKey(event);
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    if (manager?.activeItemIndex != null && !hasModifier && (keyCode === SPACE || keyCode === ENTER)) {
      this.selectedIndex = manager.activeItemIndex;
      event.preventDefault();
    } else {
      manager?.setFocusOrigin("keyboard").onKeydown(event);
    }
  }
  _anyControlsInvalidOrPending(index) {
    if (this.linear && index >= 0) {
      return this.steps.toArray().slice(0, index).some((step) => {
        const control = step.stepControl;
        const isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
        return isIncomplete && !step.optional && !step._completedOverride;
      });
    }
    return false;
  }
  _layoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Checks whether the stepper contains the focused element. */
  _containsFocus() {
    const stepperElement = this._elementRef.nativeElement;
    const focusedElement = _getFocusedElementPierceShadowDom();
    return stepperElement === focusedElement || stepperElement.contains(focusedElement);
  }
  /** Checks whether the passed-in index is a valid step index. */
  _isValidIndex(index) {
    return index > -1 && (!this.steps || index < this.steps.length);
  }
  static \u0275fac = function CdkStepper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepper)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepper,
    selectors: [["", "cdkStepper", ""]],
    contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkStep, 5);
        \u0275\u0275contentQuery(dirIndex, CdkStepHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._steps = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._stepHeader = _t);
      }
    },
    inputs: {
      linear: [2, "linear", "linear", booleanAttribute],
      selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute],
      selected: "selected",
      orientation: "orientation"
    },
    outputs: {
      selectionChange: "selectionChange",
      selectedIndexChange: "selectedIndexChange"
    },
    exportAs: ["cdkStepper"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepper, [{
    type: Directive,
    args: [{
      selector: "[cdkStepper]",
      exportAs: "cdkStepper"
    }]
  }], () => [], {
    _steps: [{
      type: ContentChildren,
      args: [CdkStep, {
        descendants: true
      }]
    }],
    _stepHeader: [{
      type: ContentChildren,
      args: [CdkStepHeader, {
        descendants: true
      }]
    }],
    linear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selected: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    selectedIndexChange: [{
      type: Output
    }],
    orientation: [{
      type: Input
    }]
  });
})();
var CdkStepperNext = class _CdkStepperNext {
  _stepper = inject(CdkStepper);
  /** Type of the next button. Defaults to "submit" if not specified. */
  type = "submit";
  constructor() {
  }
  static \u0275fac = function CdkStepperNext_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepperNext)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepperNext,
    selectors: [["button", "cdkStepperNext", ""]],
    hostVars: 1,
    hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkStepperNext_click_HostBindingHandler() {
          return ctx._stepper.next();
        });
      }
      if (rf & 2) {
        \u0275\u0275hostProperty("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepperNext, [{
    type: Directive,
    args: [{
      selector: "button[cdkStepperNext]",
      host: {
        "[type]": "type",
        "(click)": "_stepper.next()"
      }
    }]
  }], () => [], {
    type: [{
      type: Input
    }]
  });
})();
var CdkStepperPrevious = class _CdkStepperPrevious {
  _stepper = inject(CdkStepper);
  /** Type of the previous button. Defaults to "button" if not specified. */
  type = "button";
  constructor() {
  }
  static \u0275fac = function CdkStepperPrevious_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepperPrevious)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkStepperPrevious,
    selectors: [["button", "cdkStepperPrevious", ""]],
    hostVars: 1,
    hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkStepperPrevious_click_HostBindingHandler() {
          return ctx._stepper.previous();
        });
      }
      if (rf & 2) {
        \u0275\u0275hostProperty("type", ctx.type);
      }
    },
    inputs: {
      type: "type"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepperPrevious, [{
    type: Directive,
    args: [{
      selector: "button[cdkStepperPrevious]",
      host: {
        "[type]": "type",
        "(click)": "_stepper.previous()"
      }
    }]
  }], () => [], {
    type: [{
      type: Input
    }]
  });
})();
var CdkStepperModule = class _CdkStepperModule {
  static \u0275fac = function CdkStepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkStepperModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkStepperModule,
    imports: [BidiModule, CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
    exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkStepperModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
      exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/stepper.mjs
function MatStepHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
  }
}
function MatStepHeader_Conditional_4_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._intl.completedLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._intl.editableLabel);
  }
}
function MatStepHeader_Conditional_4_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatStepHeader_Conditional_4_Case_1_Conditional_0_Template, 2, 1, "span", 8)(1, MatStepHeader_Conditional_4_Case_1_Conditional_1_Template, 2, 1, "span", 8);
    \u0275\u0275elementStart(2, "mat-icon", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.state === "done" ? 0 : ctx_r0.state === "edit" ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0._getDefaultTextForState(ctx_r0.state));
  }
}
function MatStepHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatStepHeader_Conditional_4_Case_0_Template, 2, 1, "span", 7)(1, MatStepHeader_Conditional_4_Case_1_Template, 4, 2);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.state) === "number" ? 0 : 1);
  }
}
function MatStepHeader_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275elementContainer(1, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx.template);
  }
}
function MatStepHeader_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function MatStepHeader_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0._intl.optionalLabel);
  }
}
function MatStepHeader_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var _c03 = ["*"];
function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) {
}
function MatStep_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275template(1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("cdkPortalOutlet", ctx_r0._portal);
  }
}
var _c12 = ["animatedContainer"];
var _c22 = (a0, a1) => ({
  step: a0,
  i: a1
});
function MatStepper_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatStepper_Case_1_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function MatStepper_Case_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 6);
    \u0275\u0275template(1, MatStepper_Case_1_For_3_Conditional_1_Template, 1, 0, "div", 7);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const \u0275$index_8_r3 = ctx.$index;
    const \u0275$count_8_r4 = ctx.$count;
    \u0275\u0275nextContext(2);
    const stepTemplate_r5 = \u0275\u0275reference(4);
    \u0275\u0275property("ngTemplateOutlet", stepTemplate_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction2(3, _c22, step_r1, $index_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_8_r3 === \u0275$count_8_r4 - 1) ? 1 : -1);
  }
}
function MatStepper_Case_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8, 1);
    \u0275\u0275elementContainer(2, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const $index_r7 = ctx.$index;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("mat-horizontal-stepper-content-" + ctx_r7._getAnimationDirection($index_r7));
    \u0275\u0275property("id", ctx_r7._getStepContentId($index_r7));
    \u0275\u0275attribute("aria-labelledby", ctx_r7._getStepLabelId($index_r7))("inert", ctx_r7.selectedIndex === $index_r7 ? null : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", step_r6.content);
  }
}
function MatStepper_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275repeaterCreate(2, MatStepper_Case_1_For_3_Template, 2, 6, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275repeaterCreate(5, MatStepper_Case_1_For_6_Template, 3, 6, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r7.steps);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r7.steps);
  }
}
function MatStepper_Case_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275elementContainer(1, 6);
    \u0275\u0275elementStart(2, "div", 11, 1)(4, "div", 12)(5, "div", 13);
    \u0275\u0275elementContainer(6, 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const step_r9 = ctx.$implicit;
    const $index_r10 = ctx.$index;
    const \u0275$index_22_r11 = ctx.$index;
    const \u0275$count_22_r12 = ctx.$count;
    const ctx_r7 = \u0275\u0275nextContext(2);
    const stepTemplate_r5 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", stepTemplate_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction2(10, _c22, step_r9, $index_r10));
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-stepper-vertical-line", !(\u0275$index_22_r11 === \u0275$count_22_r12 - 1))("mat-vertical-content-container-active", ctx_r7.selectedIndex === $index_r10);
    \u0275\u0275attribute("inert", ctx_r7.selectedIndex === $index_r10 ? null : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("id", ctx_r7._getStepContentId($index_r10));
    \u0275\u0275attribute("aria-labelledby", ctx_r7._getStepLabelId($index_r10));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", step_r9.content);
  }
}
function MatStepper_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatStepper_Case_2_For_1_Template, 7, 13, "div", 10, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r7.steps);
  }
}
function MatStepper_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-step-header", 14);
    \u0275\u0275listener("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() {
      const step_r14 = \u0275\u0275restoreView(_r13).step;
      return \u0275\u0275resetView(step_r14.select());
    })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7._onKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r14 = ctx.step;
    const i_r15 = ctx.i;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-horizontal-stepper-header", ctx_r7.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r7.orientation === "vertical");
    \u0275\u0275property("tabIndex", ctx_r7._getFocusIndex() === i_r15 ? 0 : -1)("id", ctx_r7._getStepLabelId(i_r15))("index", i_r15)("state", ctx_r7._getIndicatorType(i_r15, step_r14.state))("label", step_r14.stepLabel || step_r14.label)("selected", ctx_r7.selectedIndex === i_r15)("active", ctx_r7._stepIsNavigable(i_r15, step_r14))("optional", step_r14.optional)("errorMessage", step_r14.errorMessage)("iconOverrides", ctx_r7._iconOverrides)("disableRipple", ctx_r7.disableRipple || !ctx_r7._stepIsNavigable(i_r15, step_r14))("color", step_r14.color || ctx_r7.color);
    \u0275\u0275attribute("aria-posinset", i_r15 + 1)("aria-setsize", ctx_r7.steps.length)("aria-controls", ctx_r7._getStepContentId(i_r15))("aria-selected", ctx_r7.selectedIndex == i_r15)("aria-label", step_r14.ariaLabel || null)("aria-labelledby", !step_r14.ariaLabel && step_r14.ariaLabelledby ? step_r14.ariaLabelledby : null)("aria-disabled", ctx_r7._stepIsNavigable(i_r15, step_r14) ? null : true);
  }
}
var MatStepLabel = class _MatStepLabel extends CdkStepLabel {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStepLabel_BaseFactory;
    return function MatStepLabel_Factory(__ngFactoryType__) {
      return (\u0275MatStepLabel_BaseFactory || (\u0275MatStepLabel_BaseFactory = \u0275\u0275getInheritedFactory(_MatStepLabel)))(__ngFactoryType__ || _MatStepLabel);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepLabel,
    selectors: [["", "matStepLabel", ""]],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepLabel, [{
    type: Directive,
    args: [{
      selector: "[matStepLabel]"
    }]
  }], null, null);
})();
var MatStepperIntl = class _MatStepperIntl {
  /**
   * Stream that emits whenever the labels here are changed. Use this to notify
   * components if the labels have changed after initialization.
   */
  changes = new Subject();
  /** Label that is rendered below optional steps. */
  optionalLabel = "Optional";
  /** Label that is used to indicate step as completed to screen readers. */
  completedLabel = "Completed";
  /** Label that is used to indicate step as editable to screen readers. */
  editableLabel = "Editable";
  static \u0275fac = function MatStepperIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepperIntl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatStepperIntl,
    factory: _MatStepperIntl.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatStepperIntl();
}
var MAT_STEPPER_INTL_PROVIDER = {
  provide: MatStepperIntl,
  deps: [[new Optional(), new SkipSelf(), MatStepperIntl]],
  useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};
var MatStepHeader = class _MatStepHeader extends CdkStepHeader {
  _intl = inject(MatStepperIntl);
  _focusMonitor = inject(FocusMonitor);
  _intlSubscription;
  /** State of the given step. */
  state;
  /** Label of the given step. */
  label;
  /** Error message to display when there's an error. */
  errorMessage;
  /** Overrides for the header icons, passed in via the stepper. */
  iconOverrides;
  /** Index of the given step. */
  index;
  /** Whether the given step is selected. */
  selected;
  /** Whether the given step label is active. */
  active;
  /** Whether the given step is optional. */
  optional;
  /** Whether the ripple should be disabled. */
  disableRipple;
  /**
   * Theme color of the step header. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  constructor() {
    super();
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_StructuralStylesLoader);
    styleLoader.load(_VisuallyHiddenLoader);
    const changeDetectorRef = inject(ChangeDetectorRef);
    this._intlSubscription = this._intl.changes.subscribe(() => changeDetectorRef.markForCheck());
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    this._intlSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Focuses the step header. */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._elementRef, origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }
  /** Returns string label of given step if it is a text label. */
  _stringLabel() {
    return this.label instanceof MatStepLabel ? null : this.label;
  }
  /** Returns MatStepLabel if the label of given step is a template label. */
  _templateLabel() {
    return this.label instanceof MatStepLabel ? this.label : null;
  }
  /** Returns the host HTML element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Template context variables that are exposed to the `matStepperIcon` instances. */
  _getIconContext() {
    return {
      index: this.index,
      active: this.active,
      optional: this.optional
    };
  }
  _getDefaultTextForState(state) {
    if (state == "number") {
      return `${this.index + 1}`;
    }
    if (state == "edit") {
      return "create";
    }
    if (state == "error") {
      return "warning";
    }
    return state;
  }
  static \u0275fac = function MatStepHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatStepHeader,
    selectors: [["mat-step-header"]],
    hostAttrs: ["role", "tab", 1, "mat-step-header"],
    hostVars: 2,
    hostBindings: function MatStepHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
      }
    },
    inputs: {
      state: "state",
      label: "label",
      errorMessage: "errorMessage",
      iconOverrides: "iconOverrides",
      index: "index",
      selected: "selected",
      active: "active",
      optional: "optional",
      disableRipple: "disableRipple",
      color: "color"
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 10,
    vars: 17,
    consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-step-label"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"], ["aria-hidden", "true"], [1, "cdk-visually-hidden"], [3, "ngTemplateOutlet"]],
    template: function MatStepHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
        \u0275\u0275elementStart(1, "div")(2, "div", 1);
        \u0275\u0275template(3, MatStepHeader_Conditional_3_Template, 1, 2, "ng-container", 2)(4, MatStepHeader_Conditional_4_Template, 2, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275template(6, MatStepHeader_Conditional_6_Template, 2, 1, "div", 4)(7, MatStepHeader_Conditional_7_Template, 2, 1, "div", 4)(8, MatStepHeader_Conditional_8_Template, 2, 1, "div", 5)(9, MatStepHeader_Conditional_9_Template, 2, 1, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_8_0;
        \u0275\u0275property("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("mat-step-icon-state-", ctx.state, " mat-step-icon");
        \u0275\u0275classProp("mat-step-icon-selected", ctx.selected);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.iconOverrides && ctx.iconOverrides[ctx.state] ? 3 : 4);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_8_0 = ctx._templateLabel()) ? 6 : ctx._stringLabel() ? 7 : -1, tmp_8_0);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.optional && ctx.state != "error" ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.state === "error" ? 9 : -1);
      }
    },
    dependencies: [MatRipple, NgTemplateOutlet, MatIcon],
    styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-inverse-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-inverse-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepHeader, [{
    type: Component,
    args: [{
      selector: "mat-step-header",
      host: {
        "class": "mat-step-header",
        "[class]": '"mat-" + (color || "primary")',
        "role": "tab"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, NgTemplateOutlet, MatIcon],
      template: `<div class="mat-step-header-ripple mat-focus-indicator" matRipple
     [matRippleTrigger]="_getHostElement()"
     [matRippleDisabled]="disableRipple"></div>

<div class="mat-step-icon-state-{{state}} mat-step-icon" [class.mat-step-icon-selected]="selected">
  <div class="mat-step-icon-content">
    @if (iconOverrides && iconOverrides[state]) {
      <ng-container
        [ngTemplateOutlet]="iconOverrides[state]"
        [ngTemplateOutletContext]="_getIconContext()"></ng-container>
    } @else {
      @switch (state) {
        @case ('number') {
          <span aria-hidden="true">{{_getDefaultTextForState(state)}}</span>
        }

        @default {
          @if (state === 'done') {
            <span class="cdk-visually-hidden">{{_intl.completedLabel}}</span>
          } @else if (state === 'edit') {
            <span class="cdk-visually-hidden">{{_intl.editableLabel}}</span>
          }

          <mat-icon aria-hidden="true">{{_getDefaultTextForState(state)}}</mat-icon>
        }
      }
    }
  </div>
</div>
<div class="mat-step-label"
     [class.mat-step-label-active]="active"
     [class.mat-step-label-selected]="selected"
     [class.mat-step-label-error]="state == 'error'">
  @if (_templateLabel(); as templateLabel) {
    <!-- If there is a label template, use it. -->
    <div class="mat-step-text-label">
      <ng-container [ngTemplateOutlet]="templateLabel.template"></ng-container>
    </div>
  } @else if (_stringLabel()) {
    <!-- If there is no label template, fall back to the text label. -->
    <div class="mat-step-text-label">{{label}}</div>
  }

  @if (optional && state != 'error') {
    <div class="mat-step-optional">{{_intl.optionalLabel}}</div>
  }

  @if (state === 'error') {
    <div class="mat-step-sub-label-error">{{errorMessage}}</div>
  }
</div>

`,
      styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-inverse-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-inverse-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color);color:var(--mat-stepper-header-done-state-icon-foreground-color)}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}\n']
    }]
  }], () => [], {
    state: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    errorMessage: [{
      type: Input
    }],
    iconOverrides: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    optional: [{
      type: Input
    }],
    disableRipple: [{
      type: Input
    }],
    color: [{
      type: Input
    }]
  });
})();
var MatStepperIcon = class _MatStepperIcon {
  templateRef = inject(TemplateRef);
  /** Name of the icon to be overridden. */
  name;
  constructor() {
  }
  static \u0275fac = function MatStepperIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepperIcon)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepperIcon,
    selectors: [["ng-template", "matStepperIcon", ""]],
    inputs: {
      name: [0, "matStepperIcon", "name"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperIcon, [{
    type: Directive,
    args: [{
      selector: "ng-template[matStepperIcon]"
    }]
  }], () => [], {
    name: [{
      type: Input,
      args: ["matStepperIcon"]
    }]
  });
})();
var MatStepContent = class _MatStepContent {
  _template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function MatStepContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepContent,
    selectors: [["ng-template", "matStepContent", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matStepContent]"
    }]
  }], () => [], null);
})();
var MatStep = class _MatStep extends CdkStep {
  _errorStateMatcher = inject(ErrorStateMatcher, {
    skipSelf: true
  });
  _viewContainerRef = inject(ViewContainerRef);
  _isSelected = Subscription.EMPTY;
  /** Content for step label given by `<ng-template matStepLabel>`. */
  // We need an initializer here to avoid a TS error.
  stepLabel = void 0;
  /**
   * Theme color for the particular step. This API is supported in M2 themes
   * only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Content that will be rendered lazily. */
  _lazyContent;
  /** Currently-attached portal containing the lazy content. */
  _portal;
  ngAfterContentInit() {
    this._isSelected = this._stepper.steps.changes.pipe(switchMap(() => {
      return this._stepper.selectionChange.pipe(map((event) => event.selectedStep === this), startWith(this._stepper.selected === this));
    })).subscribe((isSelected) => {
      if (isSelected && this._lazyContent && !this._portal) {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      }
    });
  }
  ngOnDestroy() {
    this._isSelected.unsubscribe();
  }
  /** Custom error state matcher that additionally checks for validity of interacted form. */
  isErrorState(control, form) {
    const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
    const customErrorState = !!(control && control.invalid && this.interacted);
    return originalErrorState || customErrorState;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStep_BaseFactory;
    return function MatStep_Factory(__ngFactoryType__) {
      return (\u0275MatStep_BaseFactory || (\u0275MatStep_BaseFactory = \u0275\u0275getInheritedFactory(_MatStep)))(__ngFactoryType__ || _MatStep);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatStep,
    selectors: [["mat-step"]],
    contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatStepLabel, 5);
        \u0275\u0275contentQuery(dirIndex, MatStepContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepLabel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lazyContent = _t.first);
      }
    },
    hostAttrs: ["hidden", ""],
    inputs: {
      color: "color"
    },
    exportAs: ["matStep"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: ErrorStateMatcher,
      useExisting: _MatStep
    }, {
      provide: CdkStep,
      useExisting: _MatStep
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    consts: [[3, "cdkPortalOutlet"]],
    template: function MatStep_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
      }
    },
    dependencies: [CdkPortalOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStep, [{
    type: Component,
    args: [{
      selector: "mat-step",
      providers: [{
        provide: ErrorStateMatcher,
        useExisting: MatStep
      }, {
        provide: CdkStep,
        useExisting: MatStep
      }],
      encapsulation: ViewEncapsulation.None,
      exportAs: "matStep",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [CdkPortalOutlet],
      host: {
        "hidden": ""
        // Hide the steps so they don't affect the layout.
      },
      template: '<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n</ng-template>\n'
    }]
  }], null, {
    stepLabel: [{
      type: ContentChild,
      args: [MatStepLabel]
    }],
    color: [{
      type: Input
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatStepContent, {
        static: false
      }]
    }]
  });
})();
var MatStepper = class _MatStepper extends CdkStepper {
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _animationsModule = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _cleanupTransition;
  _isAnimating = signal(false);
  /** The list of step headers of the steps in the stepper. */
  _stepHeader = void 0;
  /** Elements hosting the step animations. */
  _animatedContainers;
  /** Full list of steps inside the stepper, including inside nested steppers. */
  _steps = void 0;
  /** Steps that belong to the current stepper, excluding ones from nested steppers. */
  steps = new QueryList();
  /** Custom icon overrides passed in by the consumer. */
  _icons;
  /** Event emitted when the current step is done transitioning in. */
  animationDone = new EventEmitter();
  /** Whether ripples should be disabled for the step headers. */
  disableRipple;
  /**
   * Theme color for all of the steps in stepper. This API is supported in M2
   * themes only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /**
   * Whether the label should display in bottom or end position.
   * Only applies in the `horizontal` orientation.
   */
  labelPosition = "end";
  /**
   * Position of the stepper's header.
   * Only applies in the `horizontal` orientation.
   */
  headerPosition = "top";
  /** Consumer-specified template-refs to be used to override the header icons. */
  _iconOverrides = {};
  /** Duration for the animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    this._animationDuration = /^\d+$/.test(value) ? value + "ms" : value;
  }
  _animationDuration = "";
  /** Whether the stepper is rendering on the server. */
  _isServer = !inject(Platform).isBrowser;
  constructor() {
    super();
    const elementRef = inject(ElementRef);
    const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
    this.orientation = nodeName === "mat-vertical-stepper" ? "vertical" : "horizontal";
  }
  ngAfterContentInit() {
    super.ngAfterContentInit();
    this._icons.forEach(({
      name,
      templateRef
    }) => this._iconOverrides[name] = templateRef);
    this.steps.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this._stateChanged());
    this.selectedIndexChange.pipe(takeUntil(this._destroyed)).subscribe(() => {
      const duration = this._getAnimationDuration();
      if (duration === "0ms" || duration === "0s") {
        this._onAnimationDone();
      } else {
        this._isAnimating.set(true);
      }
    });
    this._ngZone.runOutsideAngular(() => {
      if (this._animationsModule !== "NoopAnimations") {
        setTimeout(() => {
          this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled");
          this._cleanupTransition = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionend);
        }, 200);
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (typeof queueMicrotask === "function") {
      let hasEmittedInitial = false;
      this._animatedContainers.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => queueMicrotask(() => {
        if (!hasEmittedInitial) {
          hasEmittedInitial = true;
          this.animationDone.emit();
        }
        this._stateChanged();
      }));
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTransition?.();
  }
  _stepIsNavigable(index, step) {
    return step.completed || this.selectedIndex === index || !this.linear;
  }
  _getAnimationDuration() {
    if (this._animationsModule === "NoopAnimations") {
      return "0ms";
    }
    if (this.animationDuration) {
      return this.animationDuration;
    }
    return this.orientation === "horizontal" ? "500ms" : "225ms";
  }
  _handleTransitionend = (event) => {
    const target = event.target;
    if (!target) {
      return;
    }
    const isHorizontalActiveElement = this.orientation === "horizontal" && event.propertyName === "transform" && target.classList.contains("mat-horizontal-stepper-content-current");
    const isVerticalActiveElement = this.orientation === "vertical" && event.propertyName === "grid-template-rows" && target.classList.contains("mat-vertical-content-container-active");
    const shouldEmit = (isHorizontalActiveElement || isVerticalActiveElement) && this._animatedContainers.find((ref) => ref.nativeElement === target);
    if (shouldEmit) {
      this._onAnimationDone();
    }
  };
  _onAnimationDone() {
    this._isAnimating.set(false);
    this.animationDone.emit();
  }
  static \u0275fac = function MatStepper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepper)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatStepper,
    selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]],
    contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatStep, 5);
        \u0275\u0275contentQuery(dirIndex, MatStepperIcon, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._steps = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._icons = _t);
      }
    },
    viewQuery: function MatStepper_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatStepHeader, 5);
        \u0275\u0275viewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._stepHeader = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._animatedContainers = _t);
      }
    },
    hostAttrs: ["role", "tablist"],
    hostVars: 15,
    hostBindings: function MatStepper_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-orientation", ctx.orientation);
        \u0275\u0275styleProp("--mat-stepper-animation-duration", ctx._getAnimationDuration());
        \u0275\u0275classProp("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom")("mat-stepper-header-position-bottom", ctx.headerPosition === "bottom")("mat-stepper-animating", ctx._isAnimating());
      }
    },
    inputs: {
      disableRipple: "disableRipple",
      color: "color",
      labelPosition: "labelPosition",
      headerPosition: "headerPosition",
      animationDuration: "animationDuration"
    },
    outputs: {
      animationDone: "animationDone"
    },
    exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkStepper,
      useExisting: _MatStepper
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c03,
    decls: 5,
    vars: 2,
    consts: [["stepTemplate", ""], ["animatedContainer", ""], [1, "mat-horizontal-stepper-wrapper"], [1, "mat-horizontal-stepper-header-container"], [1, "mat-horizontal-content-container"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id", "class"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "click", "keydown", "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color"]],
    template: function MatStepper_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, MatStepper_Conditional_0_Template, 1, 0)(1, MatStepper_Case_1_Template, 7, 0, "div", 2)(2, MatStepper_Case_2_Template, 2, 0)(3, MatStepper_ng_template_3_Template, 1, 23, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275conditional(ctx._isServer ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_2_0 = ctx.orientation) === "horizontal" ? 1 : tmp_2_0 === "vertical" ? 2 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, MatStepHeader],
    styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepper, [{
    type: Component,
    args: [{
      selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]",
      exportAs: "matStepper, matVerticalStepper, matHorizontalStepper",
      host: {
        "[class.mat-stepper-horizontal]": 'orientation === "horizontal"',
        "[class.mat-stepper-vertical]": 'orientation === "vertical"',
        "[class.mat-stepper-label-position-end]": 'orientation === "horizontal" && labelPosition == "end"',
        "[class.mat-stepper-label-position-bottom]": 'orientation === "horizontal" && labelPosition == "bottom"',
        "[class.mat-stepper-header-position-bottom]": 'headerPosition === "bottom"',
        "[class.mat-stepper-animating]": "_isAnimating()",
        "[style.--mat-stepper-animation-duration]": "_getAnimationDuration()",
        "[attr.aria-orientation]": "orientation",
        "role": "tablist"
      },
      providers: [{
        provide: CdkStepper,
        useExisting: MatStepper
      }],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgTemplateOutlet, MatStepHeader],
      template: `<!--
  We need to project the content somewhere to avoid hydration errors. Some observations:
  1. This is only necessary on the server.
  2. We get a hydration error if there aren't any nodes after the \`ng-content\`.
  3. We get a hydration error if \`ng-content\` is wrapped in another element.
-->
@if (_isServer) {
  <ng-content/>
}

@switch (orientation) {
  @case ('horizontal') {
    <div class="mat-horizontal-stepper-wrapper">
      <div class="mat-horizontal-stepper-header-container">
        @for (step of steps; track step) {
          <ng-container
            [ngTemplateOutlet]="stepTemplate"
            [ngTemplateOutletContext]="{step, i: $index}"/>
          @if (!$last) {
            <div class="mat-stepper-horizontal-line"></div>
          }
        }
      </div>

      <div class="mat-horizontal-content-container">
        @for (step of steps; track step) {
          <div
            #animatedContainer
            class="mat-horizontal-stepper-content"
            role="tabpanel"
            [id]="_getStepContentId($index)"
            [attr.aria-labelledby]="_getStepLabelId($index)"
            [class]="'mat-horizontal-stepper-content-' + _getAnimationDirection($index)"
            [attr.inert]="selectedIndex === $index ? null : ''">
            <ng-container [ngTemplateOutlet]="step.content"/>
          </div>
        }
      </div>
    </div>
  }

  @case ('vertical') {
    @for (step of steps; track step) {
      <div class="mat-step">
        <ng-container
          [ngTemplateOutlet]="stepTemplate"
          [ngTemplateOutletContext]="{step, i: $index}"/>
        <div
          #animatedContainer
          class="mat-vertical-content-container"
          [class.mat-stepper-vertical-line]="!$last"
          [class.mat-vertical-content-container-active]="selectedIndex === $index"
          [attr.inert]="selectedIndex === $index ? null : ''">
          <div class="mat-vertical-stepper-content"
            role="tabpanel"
            [id]="_getStepContentId($index)"
            [attr.aria-labelledby]="_getStepLabelId($index)">
            <div class="mat-vertical-content">
              <ng-container [ngTemplateOutlet]="step.content"/>
            </div>
          </div>
        </div>
      </div>
    }
  }
}

<!-- Common step templating -->
<ng-template let-step="step" let-i="i" #stepTemplate>
  <mat-step-header
    [class.mat-horizontal-stepper-header]="orientation === 'horizontal'"
    [class.mat-vertical-stepper-header]="orientation === 'vertical'"
    (click)="step.select()"
    (keydown)="_onKeydown($event)"
    [tabIndex]="_getFocusIndex() === i ? 0 : -1"
    [id]="_getStepLabelId(i)"
    [attr.aria-posinset]="i + 1"
    [attr.aria-setsize]="steps.length"
    [attr.aria-controls]="_getStepContentId(i)"
    [attr.aria-selected]="selectedIndex == i"
    [attr.aria-label]="step.ariaLabel || null"
    [attr.aria-labelledby]="(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null"
    [attr.aria-disabled]="_stepIsNavigable(i, step) ? null : true"
    [index]="i"
    [state]="_getIndicatorType(i, step.state)"
    [label]="step.stepLabel || step.label"
    [selected]="selectedIndex === i"
    [active]="_stepIsNavigable(i, step)"
    [optional]="step.optional"
    [errorMessage]="step.errorMessage"
    [iconOverrides]="_iconOverrides"
    [disableRipple]="disableRipple || !_stepIsNavigable(i, step)"
    [color]="step.color || color"/>
</ng-template>
`,
      styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}\n']
    }]
  }], () => [], {
    _stepHeader: [{
      type: ViewChildren,
      args: [MatStepHeader]
    }],
    _animatedContainers: [{
      type: ViewChildren,
      args: ["animatedContainer"]
    }],
    _steps: [{
      type: ContentChildren,
      args: [MatStep, {
        descendants: true
      }]
    }],
    _icons: [{
      type: ContentChildren,
      args: [MatStepperIcon, {
        descendants: true
      }]
    }],
    animationDone: [{
      type: Output
    }],
    disableRipple: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    headerPosition: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }]
  });
})();
var MatStepperNext = class _MatStepperNext extends CdkStepperNext {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStepperNext_BaseFactory;
    return function MatStepperNext_Factory(__ngFactoryType__) {
      return (\u0275MatStepperNext_BaseFactory || (\u0275MatStepperNext_BaseFactory = \u0275\u0275getInheritedFactory(_MatStepperNext)))(__ngFactoryType__ || _MatStepperNext);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepperNext,
    selectors: [["button", "matStepperNext", ""]],
    hostAttrs: [1, "mat-stepper-next"],
    hostVars: 1,
    hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275hostProperty("type", ctx.type);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperNext, [{
    type: Directive,
    args: [{
      selector: "button[matStepperNext]",
      host: {
        "class": "mat-stepper-next",
        "[type]": "type"
      }
    }]
  }], null, null);
})();
var MatStepperPrevious = class _MatStepperPrevious extends CdkStepperPrevious {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStepperPrevious_BaseFactory;
    return function MatStepperPrevious_Factory(__ngFactoryType__) {
      return (\u0275MatStepperPrevious_BaseFactory || (\u0275MatStepperPrevious_BaseFactory = \u0275\u0275getInheritedFactory(_MatStepperPrevious)))(__ngFactoryType__ || _MatStepperPrevious);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStepperPrevious,
    selectors: [["button", "matStepperPrevious", ""]],
    hostAttrs: [1, "mat-stepper-previous"],
    hostVars: 1,
    hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275hostProperty("type", ctx.type);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperPrevious, [{
    type: Directive,
    args: [{
      selector: "button[matStepperPrevious]",
      host: {
        "class": "mat-stepper-previous",
        "[type]": "type"
      }
    }]
  }], null, null);
})();
var MatStepperModule = class _MatStepperModule {
  static \u0275fac = function MatStepperModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatStepperModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatStepperModule,
    imports: [MatCommonModule, PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
    exports: [MatCommonModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher],
    imports: [MatCommonModule, PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStepper, MatStepHeader, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStepperModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
      exports: [MatCommonModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
      providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher]
    }]
  }], null, null);
})();

// src/app/modules/smart-batch/create/create-batch-config.component.ts
var _c04 = ["stepper"];
var _c13 = (a0) => ({ count: a0 });
var _c23 = (a0) => ({ query: a0 });
function CreateBatchConfigComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, "createBatchConfig.basicInformation"));
  }
}
function CreateBatchConfigComponent_mat_option_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r2 = ctx.$implicit;
    \u0275\u0275property("value", country_r2.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", country_r2.name, " ");
  }
}
function CreateBatchConfigComponent_span_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.saving"));
  }
}
function CreateBatchConfigComponent_span_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.next"));
  }
}
function CreateBatchConfigComponent_ng_template_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, "createBatchConfig.selectEndpoints"));
  }
}
function CreateBatchConfigComponent_span_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("(", ctx_r2.filteredAvailableFeatures().length, " of ", ctx_r2.availableFeaturesForCountry().length, ")");
  }
}
function CreateBatchConfigComponent_span_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r2.availableFeaturesForCountry().length, ")");
  }
}
function CreateBatchConfigComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "createBatchConfig.loadingFeatures"), " ");
  }
}
function CreateBatchConfigComponent_button_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_button_120_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.endpointSearchQuery.set(""));
    });
    \u0275\u0275elementStart(1, "mat-icon", 88);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CreateBatchConfigComponent_div_122_mat_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 98);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchConfigComponent_div_122_mat_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 99);
    \u0275\u0275text(1, "add_circle_outline");
    \u0275\u0275elementEnd();
  }
}
function CreateBatchConfigComponent_div_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_122_Template_div_click_0_listener() {
      const feature_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFeature(feature_r6));
    });
    \u0275\u0275elementStart(1, "div", 90)(2, "div", 91);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 92)(7, "span", 93);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 94);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 95);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, CreateBatchConfigComponent_div_122_mat_icon_14_Template, 2, 0, "mat-icon", 96)(15, CreateBatchConfigComponent_div_122_mat_icon_15_Template, 2, 0, "mat-icon", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-50", ctx_r2.isSelected(feature_r6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 13, \u0275\u0275pipeBind3(4, 9, feature_r6.code, 0, 2)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(feature_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r2.getEndpointDisplay(feature_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getEndpointDisplay(feature_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(13, 15, feature_r6.description, 0, 50), "...");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isSelected(feature_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isSelected(feature_r6));
  }
}
function CreateBatchConfigComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "mat-icon", 101);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, "createBatchConfig.noEndpointsMatch", \u0275\u0275pureFunction1(4, _c23, ctx_r2.endpointSearchQuery())));
  }
}
function CreateBatchConfigComponent_div_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "span", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 92)(5, "span", 93);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 94);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 105);
    \u0275\u0275listener("click", function CreateBatchConfigComponent_div_129_Template_button_click_9_listener($event) {
      const feature_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.toggleFeature(feature_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(10, "mat-icon", 88);
    \u0275\u0275text(11, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", i_r9 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r8.name);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r2.getEndpointDisplay(feature_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getEndpointDisplay(feature_r8));
  }
}
function CreateBatchConfigComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "mat-icon", 107);
    \u0275\u0275text(2, "playlist_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 108);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "createBatchConfig.selectFeaturesToAdd"));
  }
}
function CreateBatchConfigComponent_span_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.saving"));
  }
}
function CreateBatchConfigComponent_span_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.next"));
  }
}
function CreateBatchConfigComponent_ng_template_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, "createBatchConfig.reviewParameters"));
  }
}
function CreateBatchConfigComponent_mat_expansion_panel_145_div_13_ng_container_5_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 127);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.required"));
  }
}
function CreateBatchConfigComponent_mat_expansion_panel_145_div_13_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 124)(2, "span", 125);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CreateBatchConfigComponent_mat_expansion_panel_145_div_13_ng_container_5_span_4_Template, 3, 3, "span", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const dep_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dep_r10.field);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dep_r10.required);
  }
}
function CreateBatchConfigComponent_mat_expansion_panel_145_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h4", 120);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 121);
    \u0275\u0275template(5, CreateBatchConfigComponent_mat_expansion_panel_145_div_13_ng_container_5_Template, 5, 2, "ng-container", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 123);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "createBatchConfig.requiredParameters"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.visibleDependencies(feature_r11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "createBatchConfig.parametersMappedHint"), " ");
  }
}
function CreateBatchConfigComponent_mat_expansion_panel_145_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "createBatchConfig.noParametersRequired"), " ");
  }
}
function CreateBatchConfigComponent_mat_expansion_panel_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-expansion-panel", 109)(1, "mat-expansion-panel-header", 110)(2, "mat-panel-title", 111)(3, "span", 112)(4, "span", 113)(5, "span", 114);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 115);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 116);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(11, "mat-panel-description", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 118);
    \u0275\u0275template(13, CreateBatchConfigComponent_mat_expansion_panel_145_div_13_Template, 9, 7, "div", 40)(14, CreateBatchConfigComponent_mat_expansion_panel_145_div_14_Template, 3, 3, "div", 119);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("expanded", i_r12 === 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", i_r12 + 1, ".");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getEndpointDisplay(feature_r11));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.visibleDependencies(feature_r11).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.visibleDependencies(feature_r11).length === 0);
  }
}
function CreateBatchConfigComponent_span_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.saving"));
  }
}
function CreateBatchConfigComponent_span_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "createBatchConfig.next"));
  }
}
function CreateBatchConfigComponent_ng_template_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(1, 1, "createBatchConfig.reviewAndCreate"));
  }
}
function CreateBatchConfigComponent_div_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129)(1, "span", 130);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", (feature_r13.price || feature_r13.smartCheckPrice || 0).toFixed(2), "");
  }
}
var CreateBatchConfigComponent = class _CreateBatchConfigComponent {
  constructor() {
    this._formBuilder = inject(FormBuilder);
    this._smartBatchService = inject(SmartBatchService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.isEditMode = signal(false);
    this.editConfigId = signal(null);
    this.isLoadingConfig = signal(false);
    this.isSavingStep = signal(false);
    this.countries = signal([
      { code: "Colombia", name: "\u{1F1E8}\u{1F1F4} Colombia" },
      { code: "Peru", name: "\u{1F1F5}\u{1F1EA} Peru" },
      { code: "Mexico", name: "\u{1F1F2}\u{1F1FD} Mexico" },
      { code: "Brazil", name: "\u{1F1E7}\u{1F1F7} Brazil" },
      { code: "Chile", name: "\u{1F1E8}\u{1F1F1} Chile" },
      { code: "Argentina", name: "\u{1F1E6}\u{1F1F7} Argentina" },
      { code: "Ecuador", name: "\u{1F1EA}\u{1F1E8} Ecuador" },
      { code: "Venezuela", name: "\u{1F1FB}\u{1F1EA} Venezuela" },
      { code: "United States", name: "\u{1F1FA}\u{1F1F8} United States" },
      { code: "Spain", name: "\u{1F1EA}\u{1F1F8} Spain" }
    ]);
    this.availableFeatures = signal([]);
    this.isLoadingFeatures = signal(false);
    this.step1Form = this._formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(150)]],
      description: ["", [Validators.maxLength(800)]],
      country: ["", Validators.required],
      inputFormat: ["csv", Validators.required],
      outputFormat: ["csv", Validators.required],
      mergeStrategy: ["sequential", Validators.required]
    });
    this.selectedFeatures = signal([]);
    this.endpointSearchQuery = signal("");
    this.selectedCountryForEndpoints = signal("");
    this.availableFeaturesForCountry = computed(() => {
      const all = this.availableFeatures();
      const country = this.selectedCountryForEndpoints();
      if (!country)
        return [];
      return all.filter((f) => f.country === country || f.country && String(f.country).toLowerCase() === "world");
    });
    this.filteredAvailableFeatures = computed(() => {
      const query = this.endpointSearchQuery().trim().toLowerCase();
      const features = this.availableFeaturesForCountry();
      if (!query)
        return features;
      return features.filter((feature) => {
        const name = (feature.name ?? "").toLowerCase();
        const url = this.getEndpointDisplay(feature).toLowerCase();
        const code = (feature.code ?? "").toLowerCase();
        return name.includes(query) || url.includes(query) || code.includes(query);
      });
    });
    this.totalCostPerRecord = computed(() => {
      return this.selectedFeatures().reduce((sum, feature) => {
        return sum + (feature.price || feature.smartCheckPrice || 0);
      }, 0);
    });
    const id = this._route.snapshot.paramMap.get("id");
    if (id) {
      this.isEditMode.set(true);
      this.editConfigId.set(id);
      this.loadConfiguration(id);
    }
    this.step1Form.get("country")?.valueChanges.subscribe((country) => {
      if (country && !this.isLoadingConfig()) {
        this.fetchFeatures(country);
      }
    });
  }
  loadConfiguration(id) {
    this.isLoadingConfig.set(true);
    this._smartBatchService.getConfiguration(id).subscribe({
      next: (res) => {
        const config = res.data;
        const countryFromApi = (config.country || "").trim();
        const matchingCountry = this.countries().find((c) => c.code.toLowerCase() === countryFromApi.toLowerCase());
        const countryValue = matchingCountry?.code ?? countryFromApi;
        this.step1Form.patchValue({
          name: config.name,
          description: config.description || "",
          country: countryValue,
          inputFormat: config.inputFormat,
          outputFormat: config.outputFormat,
          mergeStrategy: config.mergeStrategy
        });
        this.selectedCountryForEndpoints.set(countryValue);
        this._smartBatchService.getAvailableFeatures().subscribe({
          next: (featuresRes) => {
            this.availableFeatures.set(featuresRes.data || []);
            const selectedFeats = config.steps.sort((a, b) => a.sequence - b.sequence).map((step) => {
              if (typeof step.appFeature === "object" && step.appFeature) {
                return step.appFeature;
              }
              return featuresRes.data.find((f) => f._id === step.appFeature);
            }).filter(Boolean);
            this.selectedFeatures.set(selectedFeats);
            this.isLoadingConfig.set(false);
          },
          error: () => {
            this.isLoadingConfig.set(false);
          }
        });
      },
      error: () => {
        this.isLoadingConfig.set(false);
        this._router.navigate(["/smart-batch"]);
      }
    });
  }
  fetchFeatures(country) {
    this.isLoadingFeatures.set(true);
    this.selectedFeatures.set([]);
    this.endpointSearchQuery.set("");
    this.selectedCountryForEndpoints.set(country);
    this._smartBatchService.getAvailableFeatures().subscribe({
      next: (res) => {
        this.availableFeatures.set(res.data || []);
        this.isLoadingFeatures.set(false);
      },
      error: () => {
        this.isLoadingFeatures.set(false);
      }
    });
  }
  // Feature Selection Logic
  toggleFeature(feature) {
    const current = this.selectedFeatures();
    const index = current.findIndex((f) => f._id === feature._id);
    if (index >= 0) {
      this.selectedFeatures.update((features) => features.filter((f) => f._id !== feature._id));
    } else {
      this.selectedFeatures.update((features) => [...features, feature]);
    }
  }
  isSelected(feature) {
    return this.selectedFeatures().some((f) => f._id === feature._id);
  }
  /** Display endpoint URL/path for a feature (e.g. /v2/co/cedula), fallback to code. */
  getEndpointDisplay(feature) {
    const url = feature?.url;
    if (!url)
      return feature?.code ?? "";
    return url.startsWith("/") ? url : "/" + url;
  }
  drop(event) {
    const currentList = this.selectedFeatures();
    moveItemInArray(currentList, event.previousIndex, event.currentIndex);
    this.selectedFeatures.set([...currentList]);
  }
  /** Build config from current form state and selected features. */
  buildConfigFromCurrentState() {
    const basicInfo = this.step1Form.value;
    const steps = this.selectedFeatures().map((feature, index) => ({
      appFeature: feature._id,
      sequence: index + 1,
      enabled: true,
      parameterDefaults: {},
      maxRetries: 3,
      inputFieldMapping: {},
      outputFieldsToKeep: [],
      retryDelayBaseSeconds: 4,
      timeoutSeconds: 30
    }));
    return {
      name: basicInfo.name,
      description: basicInfo.description,
      country: basicInfo.country,
      inputFormat: basicInfo.inputFormat,
      outputFormat: basicInfo.outputFormat,
      mergeStrategy: basicInfo.mergeStrategy,
      steps,
      isActive: true
    };
  }
  /** Save current step and advance stepper (edit mode only). */
  onNext(stepIndex) {
    if (this.isEditMode() && this.editConfigId()) {
      const config = this.buildConfigFromCurrentState();
      if (config.steps.length === 0) {
        this.stepper?.next();
        return;
      }
      this.isSavingStep.set(true);
      this._smartBatchService.updateConfiguration(this.editConfigId(), config).subscribe({
        next: () => {
          this.isSavingStep.set(false);
          this.stepper?.next();
        },
        error: (err) => {
          console.error("Error saving step", err);
          this.isSavingStep.set(false);
        }
      });
    } else {
      this.stepper?.next();
    }
  }
  /** Submit final step (create or full update). */
  submit() {
    if (this.step1Form.invalid)
      return;
    if (this.selectedFeatures().length === 0)
      return;
    const config = this.buildConfigFromCurrentState();
    if (this.isEditMode() && this.editConfigId()) {
      this._smartBatchService.updateConfiguration(this.editConfigId(), config).subscribe({
        next: () => {
          this._router.navigate(["/smart-batch"]);
        },
        error: (err) => {
          console.error("Error updating batch", err);
        }
      });
    } else {
      this._smartBatchService.createConfiguration(config).subscribe({
        next: () => {
          this._router.navigate(["/smart-batch"]);
        },
        error: (err) => {
          console.error("Error creating batch", err);
        }
      });
    }
  }
  /** Dependencies shown in the wizard (hides internal-only fields such as `force`). */
  visibleDependencies(feature) {
    const deps = feature?.dependencies;
    if (!deps?.length)
      return [];
    return deps.filter((d) => d?.field && isClientVisibleBatchDependencyField(d.field));
  }
  static {
    this.\u0275fac = function CreateBatchConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateBatchConfigComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateBatchConfigComponent, selectors: [["create-batch-config"]], viewQuery: function CreateBatchConfigComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stepper = _t.first);
      }
    }, decls: 206, vars: 139, consts: [["stepper", ""], [1, "flex", "min-h-screen", "min-w-0", "flex-auto", "flex-col", "bg-stone-50", "dark:bg-gray-950"], [1, "border-b", "border-stone-200/90", "bg-white/90", "px-5", "py-6", "backdrop-blur-sm", "dark:border-gray-800", "dark:bg-gray-950/90", "md:px-8", "md:py-8"], [1, "mx-auto", "flex", "w-full", "max-w-5xl", "flex-col", "gap-5"], [1, "flex", "flex-wrap", "items-center", "text-xs", "font-medium", "leading-none", "text-stone-500", "dark:text-stone-400"], ["routerLink", "/chat", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], ["svgIcon", "heroicons_solid:chevron-right", 1, "icon-size-4", "mx-2", "text-stone-400"], ["routerLink", "/smart-batch", 1, "cursor-pointer", "text-stone-700", "underline-offset-4", "hover:underline", "dark:text-stone-300"], [1, "cursor-default", "text-stone-600", "dark:text-stone-300"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3"], [1, "flex", "min-w-0", "items-start", "gap-3"], ["mat-icon-button", "", "type", "button", "routerLink", "/smart-batch", 1, "shrink-0", "!text-stone-600", "dark:!text-stone-300"], [1, "min-w-0"], [1, "text-2xl", "font-semibold", "tracking-tight", "text-stone-900", "dark:text-white", "md:text-3xl"], [1, "flex", "flex-auto", "flex-col", "px-5", "py-8", "md:px-8", "md:py-10"], [1, "mx-auto", "w-full", "max-w-5xl"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-6", "shadow-sm", "dark:border-gray-800", "dark:bg-gray-900", "md:p-8"], ["orientation", "vertical", 1, "bg-transparent", 3, "linear"], [3, "stepControl"], ["matStepLabel", ""], [1, "grid", "grid-cols-1", "gap-6", "pt-4", "md:grid-cols-2", 3, "formGroup"], ["appearance", "outline", 1, "col-span-2", "w-full"], ["matInput", "", "formControlName", "name", 3, "placeholder"], ["matInput", "", "formControlName", "description", "rows", "3", 3, "placeholder"], ["appearance", "outline", 1, "w-full"], ["formControlName", "country"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "mergeStrategy"], ["value", "sequential"], ["value", "parallel-independent"], ["value", "parallel-with-fallback"], [1, "col-span-2", "grid", "grid-cols-2", "gap-6"], ["appearance", "outline"], ["formControlName", "inputFormat"], ["value", "csv"], ["value", "xlsx"], ["value", "jsonl"], ["formControlName", "outputFormat"], [1, "col-span-2", "pt-4"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-xl", 3, "click", "disabled"], [4, "ngIf"], [1, "flex", "h-[600px]", "flex-col", "gap-6", "pt-4"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-medium", "uppercase", "text-stone-500", "dark:text-stone-400"], ["class", "text-xs text-blue-500", 4, "ngIf"], [1, "grid", "h-full", "min-h-0", "grid-cols-1", "gap-8", "md:grid-cols-2"], [1, "flex", "flex-col", "overflow-hidden", "rounded-xl", "border", "border-stone-200/90", "bg-white", "dark:border-gray-800", "dark:bg-gray-900/60"], [1, "border-b", "border-stone-200/90", "bg-stone-50/80", "px-4", "py-3", "text-sm", "font-medium", "dark:border-gray-800", "dark:bg-gray-800/40"], [1, "border-b", "border-stone-200/90", "p-2", "dark:border-gray-800"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "!mb-0", "w-full"], ["matPrefix", "", 1, "icon-size-5", "text-stone-400"], ["matInput", "", "type", "text", 1, "!py-1", 3, "ngModelChange", "ngModel", "placeholder"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Clear search", 3, "click", 4, "ngIf"], [1, "flex-1", "space-y-2", "overflow-y-auto", "p-2"], ["class", "flex cursor-pointer select-none items-center justify-between rounded-lg border border-transparent p-3 transition-all hover:border-stone-200 hover:bg-stone-50 dark:hover:border-gray-600 dark:hover:bg-gray-800", 3, "opacity-50", "click", 4, "ngFor", "ngForOf"], ["class", "flex flex-col items-center justify-center py-8 text-sm text-stone-400", 4, "ngIf"], [1, "flex", "flex-col", "overflow-hidden", "rounded-xl", "border", "border-blue-200/80", "bg-blue-50/60", "dark:border-blue-800/50", "dark:bg-blue-900/20"], [1, "border-b", "border-blue-200/80", "bg-blue-100/60", "px-4", "py-3", "text-sm", "font-medium", "text-blue-700", "dark:border-blue-800/50", "dark:bg-blue-900/30", "dark:text-blue-300"], ["cdkDropList", "", 1, "flex-1", "space-y-2", "overflow-y-auto", "p-2", 3, "cdkDropListDropped"], ["cdkDrag", "", "class", "flex cursor-move items-center justify-between gap-3 rounded-lg border border-stone-200 bg-white p-3 shadow-sm dark:border-gray-600 dark:bg-gray-900", 4, "ngFor", "ngForOf"], ["class", "flex h-full flex-col items-center justify-center text-stone-400 opacity-60", 4, "ngIf"], [1, "flex", "gap-3", "pt-4"], ["mat-button", "", "type", "button", "matStepperPrevious", ""], [1, "flex", "flex-col", "gap-4", "pt-4"], [1, "mb-2", "text-sm", "text-stone-500", "dark:text-stone-400"], ["multi", ""], ["class", "!border !border-stone-200/90 !bg-white dark:!border-gray-800 dark:!bg-gray-900/80", 3, "expanded", 4, "ngFor", "ngForOf"], [1, "flex", "gap-3", "pt-6"], [1, "max-w-2xl", "pt-6"], [1, "mb-4", "text-lg", "font-bold", "text-stone-900", "dark:text-white"], [1, "space-y-4", "rounded-xl", "border", "border-stone-200/90", "bg-stone-50", "p-6", "dark:border-gray-800", "dark:bg-gray-800/40"], [1, "grid", "grid-cols-2", "gap-4"], [1, "block", "text-xs", "uppercase", "text-stone-500", "dark:text-stone-400"], [1, "font-medium", "text-stone-900", "dark:text-white"], [1, "font-medium", "capitalize", "text-stone-900", "dark:text-white"], [1, "mt-8"], [1, "mb-3", "text-sm", "font-bold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "rounded-xl", "border", "border-green-200", "bg-gradient-to-br", "from-green-50", "to-emerald-50", "p-5", "dark:border-green-800/30", "dark:from-green-900/20", "dark:to-emerald-900/10"], [1, "mb-4", "space-y-2"], ["class", "flex justify-between text-sm", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "border-t", "border-green-200", "pt-3", "dark:border-green-800/50"], [1, "font-medium", "text-green-700", "dark:text-green-300"], [1, "text-2xl", "font-bold", "text-green-700", "dark:text-green-300"], [1, "flex", "gap-3", "pt-8"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "rounded-xl", 3, "click"], [3, "value"], [1, "text-xs", "text-blue-500"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Clear search", 3, "click"], [1, "icon-size-5"], [1, "flex", "cursor-pointer", "select-none", "items-center", "justify-between", "rounded-lg", "border", "border-transparent", "p-3", "transition-all", "hover:border-stone-200", "hover:bg-stone-50", "dark:hover:border-gray-600", "dark:hover:bg-gray-800", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "bg-blue-100", "text-xs", "font-bold", "text-blue-600"], [1, "flex", "min-w-0", "flex-1", "flex-col"], [1, "text-sm", "font-medium", "text-stone-900", "dark:text-white"], [1, "truncate", "font-mono", "text-xs", "text-blue-600", "dark:text-blue-400", 3, "title"], [1, "truncate", "text-xs", "text-stone-500"], ["class", "icon-size-5 text-green-500", 4, "ngIf"], ["class", "icon-size-5 text-stone-300", 4, "ngIf"], [1, "icon-size-5", "text-green-500"], [1, "icon-size-5", "text-stone-300"], [1, "flex", "flex-col", "items-center", "justify-center", "py-8", "text-sm", "text-stone-400"], [1, "icon-size-10", "mb-2"], ["cdkDrag", "", 1, "flex", "cursor-move", "items-center", "justify-between", "gap-3", "rounded-lg", "border", "border-stone-200", "bg-white", "p-3", "shadow-sm", "dark:border-gray-600", "dark:bg-gray-900"], [1, "flex", "min-w-0", "flex-1", "items-center", "gap-3"], [1, "flex", "h-6", "w-6", "shrink-0", "items-center", "justify-center", "rounded-full", "bg-stone-100", "font-mono", "text-xs", "font-bold", "text-stone-500", "dark:bg-gray-800"], ["mat-icon-button", "", "color", "warn", "type", "button", 3, "click"], [1, "flex", "h-full", "flex-col", "items-center", "justify-center", "text-stone-400", "opacity-60"], [1, "icon-size-8", "mb-2"], [1, "text-sm"], [1, "!border", "!border-stone-200/90", "!bg-white", "dark:!border-gray-800", "dark:!bg-gray-900/80", 3, "expanded"], [1, "!h-auto", "!min-h-[3.5rem]"], [1, "!mr-4", "!min-w-0", "!flex-1"], [1, "flex", "w-full", "flex-col", "gap-0.5"], [1, "flex", "w-full", "items-center", "gap-2"], [1, "shrink-0", "font-mono", "text-xs", "text-stone-400"], [1, "min-w-0", "break-words", "font-medium", "text-stone-900", "dark:text-white"], [1, "pl-5", "font-mono", "text-xs", "text-blue-600", "dark:text-blue-400"], [1, "!flex-none"], [1, "pt-4"], ["class", "text-sm italic text-stone-400", 4, "ngIf"], [1, "mb-3", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-stone-500", "dark:text-stone-400"], [1, "flex", "flex-wrap", "gap-2"], [4, "ngFor", "ngForOf"], [1, "mt-3", "text-xs", "text-stone-400", "dark:text-stone-500"], [1, "inline-flex", "items-center", "gap-2", "rounded-lg", "border", "border-stone-200", "bg-stone-100", "px-3", "py-1.5", "dark:border-gray-700", "dark:bg-gray-800"], [1, "text-sm", "font-medium", "text-stone-700", "dark:text-stone-300"], ["class", "text-xs font-medium text-orange-500", 4, "ngIf"], [1, "text-xs", "font-medium", "text-orange-500"], [1, "text-sm", "italic", "text-stone-400"], [1, "flex", "justify-between", "text-sm"], [1, "text-stone-600", "dark:text-stone-400"]], template: function CreateBatchConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "div", 4)(4, "a", 5);
        \u0275\u0275text(5, " Verifik ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-icon", 6);
        \u0275\u0275elementStart(7, "a", 7);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-icon", 6);
        \u0275\u0275elementStart(11, "span", 8);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "transloco");
        \u0275\u0275pipe(14, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "button", 11);
        \u0275\u0275pipe(18, "transloco");
        \u0275\u0275elementStart(19, "mat-icon");
        \u0275\u0275text(20, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12)(22, "h1", 13);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275pipe(25, "transloco");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(26, "main", 14)(27, "div", 15)(28, "div", 16)(29, "mat-stepper", 17, 0)(31, "mat-step", 18);
        \u0275\u0275template(32, CreateBatchConfigComponent_ng_template_32_Template, 2, 3, "ng-template", 19);
        \u0275\u0275elementStart(33, "form", 20)(34, "mat-form-field", 21)(35, "mat-label");
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "input", 22);
        \u0275\u0275pipe(39, "transloco");
        \u0275\u0275elementStart(40, "mat-error");
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "mat-form-field", 21)(44, "mat-label");
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "textarea", 23);
        \u0275\u0275pipe(48, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "mat-form-field", 24)(50, "mat-label");
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "mat-select", 25);
        \u0275\u0275template(54, CreateBatchConfigComponent_mat_option_54_Template, 2, 2, "mat-option", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "mat-error");
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "mat-form-field", 24)(59, "mat-label");
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "mat-select", 27)(63, "mat-option", 28);
        \u0275\u0275text(64);
        \u0275\u0275pipe(65, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "mat-option", 29);
        \u0275\u0275text(67);
        \u0275\u0275pipe(68, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "mat-option", 30);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 31)(73, "mat-form-field", 32)(74, "mat-label");
        \u0275\u0275text(75);
        \u0275\u0275pipe(76, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "mat-select", 33)(78, "mat-option", 34);
        \u0275\u0275text(79, "CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "mat-option", 35);
        \u0275\u0275text(81, "Excel (XLSX)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "mat-option", 36);
        \u0275\u0275text(83, "JSONL");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "mat-form-field", 32)(85, "mat-label");
        \u0275\u0275text(86);
        \u0275\u0275pipe(87, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "mat-select", 37)(89, "mat-option", 34);
        \u0275\u0275text(90, "CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "mat-option", 35);
        \u0275\u0275text(92, "Excel (XLSX)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "mat-option", 36);
        \u0275\u0275text(94, "JSONL");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(95, "div", 38)(96, "button", 39);
        \u0275\u0275listener("click", function CreateBatchConfigComponent_Template_button_click_96_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onNext(1));
        });
        \u0275\u0275template(97, CreateBatchConfigComponent_span_97_Template, 3, 3, "span", 40)(98, CreateBatchConfigComponent_span_98_Template, 3, 3, "span", 40);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(99, "mat-step");
        \u0275\u0275template(100, CreateBatchConfigComponent_ng_template_100_Template, 2, 3, "ng-template", 19);
        \u0275\u0275elementStart(101, "div", 41)(102, "div", 42)(103, "h3", 43);
        \u0275\u0275text(104);
        \u0275\u0275pipe(105, "transloco");
        \u0275\u0275template(106, CreateBatchConfigComponent_span_106_Template, 2, 2, "span", 40)(107, CreateBatchConfigComponent_span_107_Template, 2, 1, "span", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275template(108, CreateBatchConfigComponent_div_108_Template, 3, 3, "div", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div", 45)(110, "div", 46)(111, "div", 47);
        \u0275\u0275text(112);
        \u0275\u0275pipe(113, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "div", 48)(115, "mat-form-field", 49)(116, "mat-icon", 50);
        \u0275\u0275text(117, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "input", 51);
        \u0275\u0275pipe(119, "transloco");
        \u0275\u0275listener("ngModelChange", function CreateBatchConfigComponent_Template_input_ngModelChange_118_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.endpointSearchQuery.set($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(120, CreateBatchConfigComponent_button_120_Template, 3, 0, "button", 52);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "div", 53);
        \u0275\u0275template(122, CreateBatchConfigComponent_div_122_Template, 16, 19, "div", 54)(123, CreateBatchConfigComponent_div_123_Template, 6, 6, "div", 55);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(124, "div", 56)(125, "div", 57);
        \u0275\u0275text(126);
        \u0275\u0275pipe(127, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "div", 58);
        \u0275\u0275listener("cdkDropListDropped", function CreateBatchConfigComponent_Template_div_cdkDropListDropped_128_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.drop($event));
        });
        \u0275\u0275template(129, CreateBatchConfigComponent_div_129_Template, 12, 4, "div", 59)(130, CreateBatchConfigComponent_div_130_Template, 6, 3, "div", 60);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(131, "div", 61)(132, "button", 62);
        \u0275\u0275text(133);
        \u0275\u0275pipe(134, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "button", 39);
        \u0275\u0275listener("click", function CreateBatchConfigComponent_Template_button_click_135_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onNext(2));
        });
        \u0275\u0275template(136, CreateBatchConfigComponent_span_136_Template, 3, 3, "span", 40)(137, CreateBatchConfigComponent_span_137_Template, 3, 3, "span", 40);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(138, "mat-step");
        \u0275\u0275template(139, CreateBatchConfigComponent_ng_template_139_Template, 2, 3, "ng-template", 19);
        \u0275\u0275elementStart(140, "div", 63)(141, "p", 64);
        \u0275\u0275text(142);
        \u0275\u0275pipe(143, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "mat-accordion", 65);
        \u0275\u0275template(145, CreateBatchConfigComponent_mat_expansion_panel_145_Template, 15, 6, "mat-expansion-panel", 66);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 67)(147, "button", 62);
        \u0275\u0275text(148);
        \u0275\u0275pipe(149, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "button", 39);
        \u0275\u0275listener("click", function CreateBatchConfigComponent_Template_button_click_150_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onNext(3));
        });
        \u0275\u0275template(151, CreateBatchConfigComponent_span_151_Template, 3, 3, "span", 40)(152, CreateBatchConfigComponent_span_152_Template, 3, 3, "span", 40);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(153, "mat-step");
        \u0275\u0275template(154, CreateBatchConfigComponent_ng_template_154_Template, 2, 3, "ng-template", 19);
        \u0275\u0275elementStart(155, "div", 68)(156, "h3", 69);
        \u0275\u0275text(157);
        \u0275\u0275pipe(158, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "div", 70)(160, "div", 71)(161, "div")(162, "span", 72);
        \u0275\u0275text(163);
        \u0275\u0275pipe(164, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "span", 73);
        \u0275\u0275text(166);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(167, "div")(168, "span", 72);
        \u0275\u0275text(169);
        \u0275\u0275pipe(170, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "span", 73);
        \u0275\u0275text(172);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(173, "div")(174, "span", 72);
        \u0275\u0275text(175);
        \u0275\u0275pipe(176, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "span", 74);
        \u0275\u0275text(178);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(179, "div")(180, "span", 72);
        \u0275\u0275text(181);
        \u0275\u0275pipe(182, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "span", 73);
        \u0275\u0275text(184);
        \u0275\u0275pipe(185, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(186, "div", 75)(187, "h4", 76);
        \u0275\u0275text(188);
        \u0275\u0275pipe(189, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "div", 77)(191, "div", 78);
        \u0275\u0275template(192, CreateBatchConfigComponent_div_192_Template, 5, 2, "div", 79);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "div", 80)(194, "span", 81);
        \u0275\u0275text(195);
        \u0275\u0275pipe(196, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "span", 82);
        \u0275\u0275text(198);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(199, "div", 83)(200, "button", 62);
        \u0275\u0275text(201);
        \u0275\u0275pipe(202, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "button", 84);
        \u0275\u0275listener("click", function CreateBatchConfigComponent_Template_button_click_203_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275text(204);
        \u0275\u0275pipe(205, "transloco");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        let tmp_50_0;
        let tmp_52_0;
        let tmp_54_0;
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 64, "smartBatchLanding.title"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(13, 66, ctx.isEditMode() ? "createBatchConfig.edit" : "createBatchConfig.create"), " ", \u0275\u0275pipeBind1(14, 68, "createBatchConfig.batchConfiguration"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 70, "batchDashboard.backToSmartBatch"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(24, 72, ctx.isEditMode() ? "createBatchConfig.edit" : "createBatchConfig.create"), " ", \u0275\u0275pipeBind1(25, 74, "createBatchConfig.batchConfiguration"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("linear", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("stepControl", ctx.step1Form);
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.step1Form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 76, "createBatchConfig.configurationName"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(39, 78, "createBatchConfig.namePlaceholder"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 80, "createBatchConfig.nameRequired"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 82, "createBatchConfig.description"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(48, 84, "createBatchConfig.descriptionPlaceholder"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 86, "createBatchConfig.country"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.countries());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 88, "createBatchConfig.countryRequired"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 90, "createBatchConfig.mergeStrategy"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 92, "createBatchConfig.sequential"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 94, "createBatchConfig.parallelIndependent"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 96, "createBatchConfig.parallelWithFallback"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 98, "createBatchConfig.inputFieldsFormat"));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 100, "createBatchConfig.resultOutputFormat"));
        \u0275\u0275advance(10);
        \u0275\u0275property("disabled", ctx.step1Form.invalid || ctx.isSavingStep());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSavingStep());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isSavingStep());
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(105, 102, "createBatchConfig.availableFeatures"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.endpointSearchQuery());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.endpointSearchQuery());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoadingFeatures());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(113, 104, "createBatchConfig.available"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", ctx.endpointSearchQuery())("placeholder", \u0275\u0275pipeBind1(119, 106, "createBatchConfig.searchPlaceholder"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.endpointSearchQuery());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.filteredAvailableFeatures());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoadingFeatures() && ctx.filteredAvailableFeatures().length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(127, 108, "createBatchConfig.selectedSteps"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.selectedFeatures());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedFeatures().length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(134, 110, "createBatchConfig.back"));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.selectedFeatures().length === 0 || ctx.isSavingStep());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSavingStep());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isSavingStep());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(143, 112, "createBatchConfig.reviewParamsIntro"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.selectedFeatures());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(149, 114, "createBatchConfig.back"));
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.isSavingStep());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSavingStep());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isSavingStep());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(158, 116, "createBatchConfig.summary"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(164, 118, "createBatchConfig.configurationName"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_50_0 = ctx.step1Form.get("name")) == null ? null : tmp_50_0.value);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(170, 120, "createBatchConfig.country"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_52_0 = ctx.step1Form.get("country")) == null ? null : tmp_52_0.value);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(176, 122, "createBatchConfig.mergeStrategy"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_54_0 = ctx.step1Form.get("mergeStrategy")) == null ? null : tmp_54_0.value);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(182, 124, "createBatchConfig.totalSteps"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(185, 126, "createBatchConfig.stepsCount", \u0275\u0275pureFunction1(137, _c13, ctx.selectedFeatures().length)));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(189, 129, "createBatchConfig.estimatedCostPerRecord"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.selectedFeatures());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(196, 131, "createBatchConfig.totalPerRecord"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("$", ctx.totalCostPerRecord().toFixed(2), "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(202, 133, "createBatchConfig.back"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(205, 135, ctx.isEditMode() ? "createBatchConfig.updateConfiguration" : "createBatchConfig.createConfiguration"), " ");
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      UpperCasePipe,
      SlicePipe,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      RouterModule,
      RouterLink,
      MatStepperModule,
      MatStep,
      MatStepLabel,
      MatStepper,
      MatStepperPrevious,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatInputModule,
      MatInput,
      MatFormField,
      MatLabel,
      MatError,
      MatPrefix,
      MatSuffix,
      MatFormFieldModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatIconModule,
      MatIcon,
      MatCheckboxModule,
      MatTooltipModule,
      MatExpansionModule,
      MatAccordion,
      MatExpansionPanel,
      MatExpansionPanelHeader,
      MatExpansionPanelTitle,
      MatExpansionPanelDescription,
      DragDropModule,
      CdkDropList,
      CdkDrag,
      TranslocoModule,
      TranslocoPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateBatchConfigComponent, [{
    type: Component,
    args: [{ selector: "create-batch-config", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      MatStepperModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatIconModule,
      MatCheckboxModule,
      MatTooltipModule,
      MatExpansionModule,
      DragDropModule,
      TranslocoModule
    ], encapsulation: ViewEncapsulation.None, template: `<div class="flex min-h-screen min-w-0 flex-auto flex-col bg-stone-50 dark:bg-gray-950">
    <header
        class="border-b border-stone-200/90 bg-white/90 px-5 py-6 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90 md:px-8 md:py-8"
    >
        <div class="mx-auto flex w-full max-w-5xl flex-col gap-5">
            <div
                class="flex flex-wrap items-center text-xs font-medium leading-none text-stone-500 dark:text-stone-400"
            >
                <a
                    routerLink="/chat"
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"
                >
                    Verifik
                </a>
                <mat-icon
                    class="icon-size-4 mx-2 text-stone-400"
                    svgIcon="heroicons_solid:chevron-right"
                ></mat-icon>
                <a
                    routerLink="/smart-batch"
                    class="cursor-pointer text-stone-700 underline-offset-4 hover:underline dark:text-stone-300"
                >
                    {{ 'smartBatchLanding.title' | transloco }}
                </a>
                <mat-icon
                    class="icon-size-4 mx-2 text-stone-400"
                    svgIcon="heroicons_solid:chevron-right"
                ></mat-icon>
                <span class="cursor-default text-stone-600 dark:text-stone-300">
                    {{ (isEditMode() ? 'createBatchConfig.edit' : 'createBatchConfig.create') | transloco }}
                    {{ 'createBatchConfig.batchConfiguration' | transloco }}
                </span>
            </div>

            <div class="flex flex-wrap items-start justify-between gap-3">
                <div class="flex min-w-0 items-start gap-3">
                    <button
                        mat-icon-button
                        type="button"
                        routerLink="/smart-batch"
                        class="shrink-0 !text-stone-600 dark:!text-stone-300"
                        [attr.aria-label]="'batchDashboard.backToSmartBatch' | transloco"
                    >
                        <mat-icon>arrow_back</mat-icon>
                    </button>
                    <div class="min-w-0">
                        <h1
                            class="text-2xl font-semibold tracking-tight text-stone-900 dark:text-white md:text-3xl"
                        >
                            {{ (isEditMode() ? 'createBatchConfig.edit' : 'createBatchConfig.create') | transloco }}
                            {{ 'createBatchConfig.batchConfiguration' | transloco }}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main class="flex flex-auto flex-col px-5 py-8 md:px-8 md:py-10">
        <div class="mx-auto w-full max-w-5xl">
            <div
                class="rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-8"
            >
                <mat-stepper #stepper orientation="vertical" class="bg-transparent" [linear]="true">
                    <!-- Step 1: Basic Info -->
                    <mat-step [stepControl]="step1Form">
                        <ng-template matStepLabel>{{ 'createBatchConfig.basicInformation' | transloco }}</ng-template>
                        <form
                            [formGroup]="step1Form"
                            class="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2"
                        >
                            <mat-form-field appearance="outline" class="col-span-2 w-full">
                                <mat-label>{{ 'createBatchConfig.configurationName' | transloco }}</mat-label>
                                <input
                                    matInput
                                    formControlName="name"
                                    [placeholder]="'createBatchConfig.namePlaceholder' | transloco"
                                />
                                <mat-error>{{ 'createBatchConfig.nameRequired' | transloco }}</mat-error>
                            </mat-form-field>

                            <mat-form-field appearance="outline" class="col-span-2 w-full">
                                <mat-label>{{ 'createBatchConfig.description' | transloco }}</mat-label>
                                <textarea
                                    matInput
                                    formControlName="description"
                                    rows="3"
                                    [placeholder]="'createBatchConfig.descriptionPlaceholder' | transloco"
                                ></textarea>
                            </mat-form-field>

                            <mat-form-field appearance="outline" class="w-full">
                                <mat-label>{{ 'createBatchConfig.country' | transloco }}</mat-label>
                                <mat-select formControlName="country">
                                    <mat-option
                                        *ngFor="let country of countries()"
                                        [value]="country.code"
                                    >
                                        {{ country.name }}
                                    </mat-option>
                                </mat-select>
                                <mat-error>{{ 'createBatchConfig.countryRequired' | transloco }}</mat-error>
                            </mat-form-field>

                            <mat-form-field appearance="outline" class="w-full">
                                <mat-label>{{ 'createBatchConfig.mergeStrategy' | transloco }}</mat-label>
                                <mat-select formControlName="mergeStrategy">
                                    <mat-option value="sequential"
                                        >{{ 'createBatchConfig.sequential' | transloco }}</mat-option
                                    >
                                    <mat-option value="parallel-independent"
                                        >{{ 'createBatchConfig.parallelIndependent' | transloco }}</mat-option
                                    >
                                    <mat-option value="parallel-with-fallback"
                                        >{{ 'createBatchConfig.parallelWithFallback' | transloco }}</mat-option
                                    >
                                </mat-select>
                            </mat-form-field>

                            <div class="col-span-2 grid grid-cols-2 gap-6">
                                <mat-form-field appearance="outline">
                                    <mat-label>{{ 'createBatchConfig.inputFieldsFormat' | transloco }}</mat-label>
                                    <mat-select formControlName="inputFormat">
                                        <mat-option value="csv">CSV</mat-option>
                                        <mat-option value="xlsx">Excel (XLSX)</mat-option>
                                        <mat-option value="jsonl">JSONL</mat-option>
                                    </mat-select>
                                </mat-form-field>

                                <mat-form-field appearance="outline">
                                    <mat-label>{{ 'createBatchConfig.resultOutputFormat' | transloco }}</mat-label>
                                    <mat-select formControlName="outputFormat">
                                        <mat-option value="csv">CSV</mat-option>
                                        <mat-option value="xlsx">Excel (XLSX)</mat-option>
                                        <mat-option value="jsonl">JSONL</mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>

                            <div class="col-span-2 pt-4">
                                <button
                                    mat-flat-button
                                    color="primary"
                                    type="button"
                                    class="rounded-xl"
                                    (click)="onNext(1)"
                                    [disabled]="step1Form.invalid || isSavingStep()"
                                >
                                    <span *ngIf="isSavingStep()">{{ 'createBatchConfig.saving' | transloco }}</span>
                                    <span *ngIf="!isSavingStep()">{{ 'createBatchConfig.next' | transloco }}</span>
                                </button>
                            </div>
                        </form>
                    </mat-step>

                    <!-- Step 2: Feature Selection -->
                    <mat-step>
                        <ng-template matStepLabel>{{ 'createBatchConfig.selectEndpoints' | transloco }}</ng-template>
                        <div class="flex h-[600px] flex-col gap-6 pt-4">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-medium uppercase text-stone-500 dark:text-stone-400">
                                    {{ 'createBatchConfig.availableFeatures' | transloco }}
                                    <span *ngIf="endpointSearchQuery()"
                                        >({{ filteredAvailableFeatures().length }} of
                                        {{ availableFeaturesForCountry().length }})</span
                                    >
                                    <span *ngIf="!endpointSearchQuery()"
                                        >({{ availableFeaturesForCountry().length }})</span
                                    >
                                </h3>
                                <div *ngIf="isLoadingFeatures()" class="text-xs text-blue-500">
                                    {{ 'createBatchConfig.loadingFeatures' | transloco }}
                                </div>
                            </div>

                            <div class="grid h-full min-h-0 grid-cols-1 gap-8 md:grid-cols-2">
                                <div
                                    class="flex flex-col overflow-hidden rounded-xl border border-stone-200/90 bg-white dark:border-gray-800 dark:bg-gray-900/60"
                                >
                                    <div
                                        class="border-b border-stone-200/90 bg-stone-50/80 px-4 py-3 text-sm font-medium dark:border-gray-800 dark:bg-gray-800/40"
                                    >
                                        {{ 'createBatchConfig.available' | transloco }}
                                    </div>
                                    <div class="border-b border-stone-200/90 p-2 dark:border-gray-800">
                                        <mat-form-field
                                            appearance="outline"
                                            class="!mb-0 w-full"
                                            subscriptSizing="dynamic"
                                        >
                                            <mat-icon matPrefix class="icon-size-5 text-stone-400"
                                                >search</mat-icon
                                            >
                                            <input
                                                matInput
                                                type="text"
                                                [ngModel]="endpointSearchQuery()"
                                                (ngModelChange)="endpointSearchQuery.set($event)"
                                                [placeholder]="'createBatchConfig.searchPlaceholder' | transloco"
                                                class="!py-1"
                                            />
                                            <button
                                                mat-icon-button
                                                matSuffix
                                                *ngIf="endpointSearchQuery()"
                                                (click)="endpointSearchQuery.set('')"
                                                type="button"
                                                aria-label="Clear search"
                                            >
                                                <mat-icon class="icon-size-5">close</mat-icon>
                                            </button>
                                        </mat-form-field>
                                    </div>
                                    <div class="flex-1 space-y-2 overflow-y-auto p-2">
                                        <div
                                            *ngFor="let feature of filteredAvailableFeatures()"
                                            (click)="toggleFeature(feature)"
                                            [class.opacity-50]="isSelected(feature)"
                                            class="flex cursor-pointer select-none items-center justify-between rounded-lg border border-transparent p-3 transition-all hover:border-stone-200 hover:bg-stone-50 dark:hover:border-gray-600 dark:hover:bg-gray-800"
                                        >
                                            <div class="flex items-center gap-3">
                                                <div
                                                    class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600"
                                                >
                                                    {{ feature.code | slice: 0 : 2 | uppercase }}
                                                </div>
                                                <div class="flex min-w-0 flex-1 flex-col">
                                                    <span
                                                        class="text-sm font-medium text-stone-900 dark:text-white"
                                                        >{{ feature.name }}</span
                                                    >
                                                    <span
                                                        class="truncate font-mono text-xs text-blue-600 dark:text-blue-400"
                                                        [title]="getEndpointDisplay(feature)"
                                                        >{{ getEndpointDisplay(feature) }}</span
                                                    >
                                                    <span class="truncate text-xs text-stone-500"
                                                        >{{
                                                            feature.description | slice: 0 : 50
                                                        }}...</span
                                                    >
                                                </div>
                                            </div>
                                            <mat-icon
                                                *ngIf="isSelected(feature)"
                                                class="icon-size-5 text-green-500"
                                                >check_circle</mat-icon
                                            >
                                            <mat-icon
                                                *ngIf="!isSelected(feature)"
                                                class="icon-size-5 text-stone-300"
                                                >add_circle_outline</mat-icon
                                            >
                                        </div>
                                        <div
                                            *ngIf="
                                                !isLoadingFeatures() &&
                                                filteredAvailableFeatures().length === 0
                                            "
                                            class="flex flex-col items-center justify-center py-8 text-sm text-stone-400"
                                        >
                                            <mat-icon class="icon-size-10 mb-2">search_off</mat-icon>
                                            <span
                                                >{{
                                                    'createBatchConfig.noEndpointsMatch'
                                                        | transloco: { query: endpointSearchQuery() }
                                                }}</span
                                            >
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="flex flex-col overflow-hidden rounded-xl border border-blue-200/80 bg-blue-50/60 dark:border-blue-800/50 dark:bg-blue-900/20"
                                >
                                    <div
                                        class="border-b border-blue-200/80 bg-blue-100/60 px-4 py-3 text-sm font-medium text-blue-700 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-300"
                                    >
                                        {{ 'createBatchConfig.selectedSteps' | transloco }}
                                    </div>
                                    <div
                                        cdkDropList
                                        class="flex-1 space-y-2 overflow-y-auto p-2"
                                        (cdkDropListDropped)="drop($event)"
                                    >
                                        <div
                                            *ngFor="
                                                let feature of selectedFeatures();
                                                let i = index
                                            "
                                            cdkDrag
                                            class="flex cursor-move items-center justify-between gap-3 rounded-lg border border-stone-200 bg-white p-3 shadow-sm dark:border-gray-600 dark:bg-gray-900"
                                        >
                                            <div class="flex min-w-0 flex-1 items-center gap-3">
                                                <span
                                                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-500 dark:bg-gray-800"
                                                >
                                                    {{ i + 1 }}
                                                </span>
                                                <div class="flex min-w-0 flex-1 flex-col">
                                                    <span
                                                        class="text-sm font-medium text-stone-900 dark:text-white"
                                                        >{{ feature.name }}</span
                                                    >
                                                    <span
                                                        class="truncate font-mono text-xs text-blue-600 dark:text-blue-400"
                                                        [title]="getEndpointDisplay(feature)"
                                                        >{{ getEndpointDisplay(feature) }}</span
                                                    >
                                                </div>
                                            </div>
                                            <button
                                                mat-icon-button
                                                color="warn"
                                                type="button"
                                                (click)="
                                                    toggleFeature(feature); $event.stopPropagation()
                                                "
                                            >
                                                <mat-icon class="icon-size-5">close</mat-icon>
                                            </button>
                                        </div>

                                        <div
                                            *ngIf="selectedFeatures().length === 0"
                                            class="flex h-full flex-col items-center justify-center text-stone-400 opacity-60"
                                        >
                                            <mat-icon class="icon-size-8 mb-2">playlist_add</mat-icon>
                                            <span class="text-sm">{{
                                                'createBatchConfig.selectFeaturesToAdd' | transloco
                                            }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex gap-3 pt-4">
                                <button mat-button type="button" matStepperPrevious>{{
                                    'createBatchConfig.back' | transloco
                                }}</button>
                                <button
                                    mat-flat-button
                                    color="primary"
                                    type="button"
                                    class="rounded-xl"
                                    (click)="onNext(2)"
                                    [disabled]="selectedFeatures().length === 0 || isSavingStep()"
                                >
                                    <span *ngIf="isSavingStep()">{{ 'createBatchConfig.saving' | transloco }}</span>
                                    <span *ngIf="!isSavingStep()">{{ 'createBatchConfig.next' | transloco }}</span>
                                </button>
                            </div>
                        </div>
                    </mat-step>

                    <!-- Step 3: Review Parameters -->
                    <mat-step>
                        <ng-template matStepLabel>{{ 'createBatchConfig.reviewParameters' | transloco }}</ng-template>
                        <div class="flex flex-col gap-4 pt-4">
                            <p class="mb-2 text-sm text-stone-500 dark:text-stone-400">
                                {{ 'createBatchConfig.reviewParamsIntro' | transloco }}
                            </p>

                            <mat-accordion multi>
                                <mat-expansion-panel
                                    *ngFor="let feature of selectedFeatures(); let i = index"
                                    [expanded]="i === 0"
                                    class="!border !border-stone-200/90 !bg-white dark:!border-gray-800 dark:!bg-gray-900/80"
                                >
                                    <mat-expansion-panel-header class="!h-auto !min-h-[3.5rem]">
                                        <mat-panel-title class="!mr-4 !min-w-0 !flex-1">
                                            <span class="flex w-full flex-col gap-0.5">
                                                <span class="flex w-full items-center gap-2">
                                                    <span
                                                        class="shrink-0 font-mono text-xs text-stone-400"
                                                        >{{ i + 1 }}.</span
                                                    >
                                                    <span
                                                        class="min-w-0 break-words font-medium text-stone-900 dark:text-white"
                                                        >{{ feature.name }}</span
                                                    >
                                                </span>
                                                <span
                                                    class="pl-5 font-mono text-xs text-blue-600 dark:text-blue-400"
                                                    >{{ getEndpointDisplay(feature) }}</span
                                                >
                                            </span>
                                        </mat-panel-title>
                                        <mat-panel-description class="!flex-none"></mat-panel-description>
                                    </mat-expansion-panel-header>

                                    <div class="pt-4">
                                        <div *ngIf="visibleDependencies(feature).length > 0">
                                            <h4
                                                class="mb-3 text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                            >
                                                {{ 'createBatchConfig.requiredParameters' | transloco }}
                                            </h4>
                                            <div class="flex flex-wrap gap-2">
                                                <ng-container
                                                    *ngFor="let dep of visibleDependencies(feature)"
                                                >
                                                    <span
                                                        class="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-stone-100 px-3 py-1.5 dark:border-gray-700 dark:bg-gray-800"
                                                    >
                                                        <span
                                                            class="text-sm font-medium text-stone-700 dark:text-stone-300"
                                                            >{{ dep.field }}</span
                                                        >
                                                        <span
                                                            *ngIf="dep.required"
                                                            class="text-xs font-medium text-orange-500"
                                                            >{{ 'createBatchConfig.required' | transloco }}</span
                                                        >
                                                    </span>
                                                </ng-container>
                                            </div>
                                            <p class="mt-3 text-xs text-stone-400 dark:text-stone-500">
                                                {{ 'createBatchConfig.parametersMappedHint' | transloco }}
                                            </p>
                                        </div>
                                        <div
                                            *ngIf="visibleDependencies(feature).length === 0"
                                            class="text-sm italic text-stone-400"
                                        >
                                            {{ 'createBatchConfig.noParametersRequired' | transloco }}
                                        </div>
                                    </div>
                                </mat-expansion-panel>
                            </mat-accordion>

                            <div class="flex gap-3 pt-6">
                                <button mat-button type="button" matStepperPrevious>{{
                                    'createBatchConfig.back' | transloco
                                }}</button>
                                <button
                                    mat-flat-button
                                    color="primary"
                                    type="button"
                                    class="rounded-xl"
                                    (click)="onNext(3)"
                                    [disabled]="isSavingStep()"
                                >
                                    <span *ngIf="isSavingStep()">{{ 'createBatchConfig.saving' | transloco }}</span>
                                    <span *ngIf="!isSavingStep()">{{ 'createBatchConfig.next' | transloco }}</span>
                                </button>
                            </div>
                        </div>
                    </mat-step>

                    <!-- Step 4: Review -->
                    <mat-step>
                        <ng-template matStepLabel>{{ 'createBatchConfig.reviewAndCreate' | transloco }}</ng-template>
                        <div class="max-w-2xl pt-6">
                            <h3 class="mb-4 text-lg font-bold text-stone-900 dark:text-white">
                                {{ 'createBatchConfig.summary' | transloco }}
                            </h3>

                            <div
                                class="space-y-4 rounded-xl border border-stone-200/90 bg-stone-50 p-6 dark:border-gray-800 dark:bg-gray-800/40"
                            >
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <span class="block text-xs uppercase text-stone-500 dark:text-stone-400"
                                            >{{ 'createBatchConfig.configurationName' | transloco }}</span
                                        >
                                        <span class="font-medium text-stone-900 dark:text-white">{{
                                            step1Form.get('name')?.value
                                        }}</span>
                                    </div>
                                    <div>
                                        <span class="block text-xs uppercase text-stone-500 dark:text-stone-400"
                                            >{{ 'createBatchConfig.country' | transloco }}</span
                                        >
                                        <span class="font-medium text-stone-900 dark:text-white">{{
                                            step1Form.get('country')?.value
                                        }}</span>
                                    </div>
                                    <div>
                                        <span class="block text-xs uppercase text-stone-500 dark:text-stone-400"
                                            >{{ 'createBatchConfig.mergeStrategy' | transloco }}</span
                                        >
                                        <span
                                            class="font-medium capitalize text-stone-900 dark:text-white"
                                            >{{ step1Form.get('mergeStrategy')?.value }}</span
                                        >
                                    </div>
                                    <div>
                                        <span class="block text-xs uppercase text-stone-500 dark:text-stone-400"
                                            >{{ 'createBatchConfig.totalSteps' | transloco }}</span
                                        >
                                        <span class="font-medium text-stone-900 dark:text-white">{{
                                            'createBatchConfig.stepsCount'
                                                | transloco: { count: selectedFeatures().length }
                                        }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-8">
                                <h4
                                    class="mb-3 text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400"
                                >
                                    {{ 'createBatchConfig.estimatedCostPerRecord' | transloco }}
                                </h4>
                                <div
                                    class="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 dark:border-green-800/30 dark:from-green-900/20 dark:to-emerald-900/10"
                                >
                                    <div class="mb-4 space-y-2">
                                        <div
                                            *ngFor="let feature of selectedFeatures()"
                                            class="flex justify-between text-sm"
                                        >
                                            <span class="text-stone-600 dark:text-stone-400">{{
                                                feature.name
                                            }}</span>
                                            <span class="font-medium text-stone-900 dark:text-white"
                                                >\${{
                                                    (
                                                        feature.price ||
                                                        feature.smartCheckPrice ||
                                                        0
                                                    ).toFixed(2)
                                                }}</span
                                            >
                                        </div>
                                    </div>
                                    <div
                                        class="flex items-center justify-between border-t border-green-200 pt-3 dark:border-green-800/50"
                                    >
                                        <span class="font-medium text-green-700 dark:text-green-300"
                                            >{{ 'createBatchConfig.totalPerRecord' | transloco }}</span
                                        >
                                        <span class="text-2xl font-bold text-green-700 dark:text-green-300"
                                            >\${{ totalCostPerRecord().toFixed(2) }}</span
                                        >
                                    </div>
                                </div>
                            </div>

                            <div class="flex gap-3 pt-8">
                                <button mat-button type="button" matStepperPrevious>{{
                                    'createBatchConfig.back' | transloco
                                }}</button>
                                <button mat-flat-button color="primary" type="button" class="rounded-xl" (click)="submit()">
                                    {{
                                        (isEditMode()
                                            ? 'createBatchConfig.updateConfiguration'
                                            : 'createBatchConfig.createConfiguration') | transloco
                                    }}
                                </button>
                            </div>
                        </div>
                    </mat-step>
                </mat-stepper>
            </div>
        </div>
    </main>
</div>
` }]
  }], () => [], { stepper: [{
    type: ViewChild,
    args: ["stepper"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateBatchConfigComponent, { className: "CreateBatchConfigComponent", filePath: "src/app/modules/smart-batch/create/create-batch-config.component.ts", lineNumber: 48 });
})();
export {
  CreateBatchConfigComponent
};
//# sourceMappingURL=chunk-5WW4FHEO.js.map
