import {
  SettingsService
} from "./chunk-ONZYIJUI.js";
import {
  Clipboard,
  ClipboardModule
} from "./chunk-FUHKLPA6.js";
import {
  FuseMediaWatcherService
} from "./chunk-DORR367Z.js";
import "./chunk-6FS3LBOZ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-DXMIRT7Q.js";
import {
  CountryService
} from "./chunk-GFJLSNKF.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-EPB35CWV.js";
import "./chunk-LPSMXQSY.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger
} from "./chunk-A6T5DVED.js";
import "./chunk-GMB4P7VL.js";
import {
  MatInputModule
} from "./chunk-HZKTYM3F.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-EL6Z63TT.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-6KHU2J3U.js";
import {
  MatDialog,
  MatDialogClose,
  MatDialogModule
} from "./chunk-KCV7S453.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-LHOHCIQM.js";
import {
  MatOption
} from "./chunk-SYP4RNRN.js";
import "./chunk-3YVZWUPK.js";
import "./chunk-L4JZMXIC.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-TX3AVWPC.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-VHMFS3U6.js";
import {
  CdkScrollable,
  CdkScrollableModule,
  ScrollDispatcher,
  ViewportRuler
} from "./chunk-R4RYJRMO.js";
import "./chunk-32YYYLAD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-SE37W2G4.js";
import {
  ANIMATION_MODULE_TYPE,
  AsyncPipe,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directionality,
  ESCAPE,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  FocusTrapFactory,
  InjectionToken,
  Injector,
  Input,
  InteractivityChecker,
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIconButton,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Output,
  Platform,
  QueryList,
  Renderer2,
  Subject,
  ViewChild,
  ViewEncapsulation,
  afterNextRender,
  coerceBooleanProperty,
  coerceNumberProperty,
  debounceTime,
  filter,
  finalize,
  fromEvent,
  hasModifierKey,
  inject,
  map,
  mapTo,
  merge,
  setClassMetadata,
  startWith,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YTOBX75K.js";
import {
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// node_modules/@angular/material/fesm2022/sidenav.mjs
var _c0 = ["*"];
var _c1 = ["content"];
var _c2 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
var _c3 = ["mat-drawer", "mat-drawer-content", "*"];
function MatDrawerContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MatDrawerContainer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onBackdropClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatDrawerContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-drawer-content");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c4 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
var _c5 = ["mat-sidenav", "mat-sidenav-content", "*"];
function MatSidenavContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MatSidenavContainer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onBackdropClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatSidenavContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-sidenav-content");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c6 = ".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n";
function throwMatDuplicatedDrawerError(position) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}
var MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken("MAT_DRAWER_DEFAULT_AUTOSIZE", {
  providedIn: "root",
  factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
});
var MAT_DRAWER_CONTAINER = new InjectionToken("MAT_DRAWER_CONTAINER");
function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
  return false;
}
var MatDrawerContent = class _MatDrawerContent extends CdkScrollable {
  _platform = inject(Platform);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _container = inject(MatDrawerContainer);
  constructor() {
    const elementRef = inject(ElementRef);
    const scrollDispatcher = inject(ScrollDispatcher);
    const ngZone = inject(NgZone);
    super(elementRef, scrollDispatcher, ngZone);
  }
  ngAfterContentInit() {
    this._container._contentMarginChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Determines whether the content element should be hidden from the user. */
  _shouldBeHidden() {
    if (this._platform.isBrowser) {
      return false;
    }
    const {
      start,
      end
    } = this._container;
    return start != null && start.mode !== "over" && start.opened || end != null && end.mode !== "over" && end.opened;
  }
  static \u0275fac = function MatDrawerContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawerContent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawerContent,
    selectors: [["mat-drawer-content"]],
    hostAttrs: [1, "mat-drawer-content"],
    hostVars: 6,
    hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
        \u0275\u0275classProp("mat-drawer-content-hidden", ctx._shouldBeHidden());
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useExisting: _MatDrawerContent
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatDrawerContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawerContent, [{
    type: Component,
    args: [{
      selector: "mat-drawer-content",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-drawer-content",
        "[style.margin-left.px]": "_container._contentMargins.left",
        "[style.margin-right.px]": "_container._contentMargins.right",
        "[class.mat-drawer-content-hidden]": "_shouldBeHidden()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useExisting: MatDrawerContent
      }]
    }]
  }], () => [], null);
})();
var MatDrawer = class _MatDrawer {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  _focusMonitor = inject(FocusMonitor);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _interactivityChecker = inject(InteractivityChecker);
  _doc = inject(DOCUMENT, {
    optional: true
  });
  _container = inject(MAT_DRAWER_CONTAINER, {
    optional: true
  });
  _focusTrap = null;
  _elementFocusedBeforeDrawerWasOpened = null;
  _eventCleanups;
  /** Whether the view of the component has been attached. */
  _isAttached;
  /** Anchor node used to restore the drawer to its initial position. */
  _anchor;
  /** The side that the drawer is attached to. */
  get position() {
    return this._position;
  }
  set position(value) {
    value = value === "end" ? "end" : "start";
    if (value !== this._position) {
      if (this._isAttached) {
        this._updatePositionInParent(value);
      }
      this._position = value;
      this.onPositionChanged.emit();
    }
  }
  _position = "start";
  /** Mode of the drawer; one of 'over', 'push' or 'side'. */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._updateFocusTrapState();
    this._modeChanged.next();
  }
  _mode = "over";
  /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */
  get disableClose() {
    return this._disableClose;
  }
  set disableClose(value) {
    this._disableClose = coerceBooleanProperty(value);
  }
  _disableClose = false;
  /**
   * Whether the drawer should focus the first focusable element automatically when opened.
   * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
   * enabled, focus will be moved into the sidenav in `side` mode as well.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or AutoFocusTarget
   * instead.
   */
  get autoFocus() {
    const value = this._autoFocus;
    if (value == null) {
      if (this.mode === "side") {
        return "dialog";
      } else {
        return "first-tabbable";
      }
    }
    return value;
  }
  set autoFocus(value) {
    if (value === "true" || value === "false" || value == null) {
      value = coerceBooleanProperty(value);
    }
    this._autoFocus = value;
  }
  _autoFocus;
  /**
   * Whether the drawer is opened. We overload this because we trigger an event when it
   * starts or end.
   */
  get opened() {
    return this._opened;
  }
  set opened(value) {
    this.toggle(coerceBooleanProperty(value));
  }
  _opened = false;
  /** How the sidenav was opened (keypress, mouse click etc.) */
  _openedVia;
  /** Emits whenever the drawer has started animating. */
  _animationStarted = new Subject();
  /** Emits whenever the drawer is done animating. */
  _animationEnd = new Subject();
  /** Event emitted when the drawer open state is changed. */
  openedChange = (
    // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
    new EventEmitter(
      /* isAsync */
      true
    )
  );
  /** Event emitted when the drawer has been opened. */
  _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
  }));
  /** Event emitted when the drawer has started opening. */
  openedStart = this._animationStarted.pipe(filter(() => this.opened), mapTo(void 0));
  /** Event emitted when the drawer has been closed. */
  _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
  }));
  /** Event emitted when the drawer has started closing. */
  closedStart = this._animationStarted.pipe(filter(() => !this.opened), mapTo(void 0));
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Event emitted when the drawer's position changes. */
  // tslint:disable-next-line:no-output-on-prefix
  onPositionChanged = new EventEmitter();
  /** Reference to the inner element that contains all the content. */
  _content;
  /**
   * An observable that emits when the drawer mode changes. This is used by the drawer container to
   * to know when to when the mode changes so it can adapt the margins on the content.
   */
  _modeChanged = new Subject();
  _injector = inject(Injector);
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    this.openedChange.pipe(takeUntil(this._destroyed)).subscribe((opened) => {
      if (opened) {
        if (this._doc) {
          this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement;
        }
        this._takeFocus();
      } else if (this._isFocusWithinDrawer()) {
        this._restoreFocus(this._openedVia || "program");
      }
    });
    this._ngZone.runOutsideAngular(() => {
      const element = this._elementRef.nativeElement;
      fromEvent(element, "keydown").pipe(filter((event) => {
        return event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event);
      }), takeUntil(this._destroyed)).subscribe((event) => this._ngZone.run(() => {
        this.close();
        event.stopPropagation();
        event.preventDefault();
      }));
      this._eventCleanups = [this._renderer.listen(element, "transitionrun", this._handleTransitionEvent), this._renderer.listen(element, "transitionend", this._handleTransitionEvent), this._renderer.listen(element, "transitioncancel", this._handleTransitionEvent)];
    });
    this._animationEnd.subscribe(() => {
      this.openedChange.emit(this._opened);
    });
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          cleanupBlur();
          cleanupMousedown();
          element.removeAttribute("tabindex");
        };
        const cleanupBlur = this._renderer.listen(element, "blur", callback);
        const cleanupMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves focus into the drawer. Note that this works even if
   * the focus trap is disabled in `side` mode.
   */
  _takeFocus() {
    if (!this._focusTrap) {
      return;
    }
    const element = this._elementRef.nativeElement;
    switch (this.autoFocus) {
      case false:
      case "dialog":
        return;
      case true:
      case "first-tabbable":
        afterNextRender(() => {
          const hasMovedFocus = this._focusTrap.focusInitialElement();
          if (!hasMovedFocus && typeof element.focus === "function") {
            element.focus();
          }
        }, {
          injector: this._injector
        });
        break;
      case "first-heading":
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        break;
      default:
        this._focusByCssSelector(this.autoFocus);
        break;
    }
  }
  /**
   * Restores focus to the element that was originally focused when the drawer opened.
   * If no element was focused at that time, the focus will be restored to the drawer.
   */
  _restoreFocus(focusOrigin) {
    if (this.autoFocus === "dialog") {
      return;
    }
    if (this._elementFocusedBeforeDrawerWasOpened) {
      this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, focusOrigin);
    } else {
      this._elementRef.nativeElement.blur();
    }
    this._elementFocusedBeforeDrawerWasOpened = null;
  }
  /** Whether focus is currently within the drawer. */
  _isFocusWithinDrawer() {
    const activeEl = this._doc.activeElement;
    return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
  }
  ngAfterViewInit() {
    this._isAttached = true;
    if (this._position === "end") {
      this._updatePositionInParent("end");
    }
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      this._updateFocusTrapState();
    }
  }
  ngOnDestroy() {
    this._eventCleanups.forEach((cleanup) => cleanup());
    this._focusTrap?.destroy();
    this._anchor?.remove();
    this._anchor = null;
    this._animationStarted.complete();
    this._animationEnd.complete();
    this._modeChanged.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Open the drawer.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */
  open(openedVia) {
    return this.toggle(true, openedVia);
  }
  /** Close the drawer. */
  close() {
    return this.toggle(false);
  }
  /** Closes the drawer with context that the backdrop was clicked. */
  _closeViaBackdropClick() {
    return this._setOpen(
      /* isOpen */
      false,
      /* restoreFocus */
      true,
      "mouse"
    );
  }
  /**
   * Toggle this drawer.
   * @param isOpen Whether the drawer should be open.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */
  toggle(isOpen = !this.opened, openedVia) {
    if (isOpen && openedVia) {
      this._openedVia = openedVia;
    }
    const result = this._setOpen(
      isOpen,
      /* restoreFocus */
      !isOpen && this._isFocusWithinDrawer(),
      this._openedVia || "program"
    );
    if (!isOpen) {
      this._openedVia = null;
    }
    return result;
  }
  /**
   * Toggles the opened state of the drawer.
   * @param isOpen Whether the drawer should open or close.
   * @param restoreFocus Whether focus should be restored on close.
   * @param focusOrigin Origin to use when restoring focus.
   */
  _setOpen(isOpen, restoreFocus, focusOrigin) {
    if (isOpen === this._opened) {
      return Promise.resolve(isOpen ? "open" : "close");
    }
    this._opened = isOpen;
    if (this._container?._transitionsEnabled) {
      this._setIsAnimating(true);
    } else {
      setTimeout(() => {
        this._animationStarted.next();
        this._animationEnd.next();
      });
    }
    this._elementRef.nativeElement.classList.toggle("mat-drawer-opened", isOpen);
    if (!isOpen && restoreFocus) {
      this._restoreFocus(focusOrigin);
    }
    this._changeDetectorRef.markForCheck();
    this._updateFocusTrapState();
    return new Promise((resolve) => {
      this.openedChange.pipe(take(1)).subscribe((open) => resolve(open ? "open" : "close"));
    });
  }
  /** Toggles whether the drawer is currently animating. */
  _setIsAnimating(isAnimating) {
    this._elementRef.nativeElement.classList.toggle("mat-drawer-animating", isAnimating);
  }
  _getWidth() {
    return this._elementRef.nativeElement.offsetWidth || 0;
  }
  /** Updates the enabled state of the focus trap. */
  _updateFocusTrapState() {
    if (this._focusTrap) {
      this._focusTrap.enabled = !!this._container?.hasBackdrop && this.opened;
    }
  }
  /**
   * Updates the position of the drawer in the DOM. We need to move the element around ourselves
   * when it's in the `end` position so that it comes after the content and the visual order
   * matches the tab order. We also need to be able to move it back to `start` if the sidenav
   * started off as `end` and was changed to `start`.
   */
  _updatePositionInParent(newPosition) {
    if (!this._platform.isBrowser) {
      return;
    }
    const element = this._elementRef.nativeElement;
    const parent = element.parentNode;
    if (newPosition === "end") {
      if (!this._anchor) {
        this._anchor = this._doc.createComment("mat-drawer-anchor");
        parent.insertBefore(this._anchor, element);
      }
      parent.appendChild(element);
    } else if (this._anchor) {
      this._anchor.parentNode.insertBefore(element, this._anchor);
    }
  }
  /** Event handler for animation events. */
  _handleTransitionEvent = (event) => {
    const element = this._elementRef.nativeElement;
    if (event.target === element) {
      this._ngZone.run(() => {
        if (event.type === "transitionrun") {
          this._animationStarted.next(event);
        } else {
          if (event.type === "transitionend") {
            this._setIsAnimating(false);
          }
          this._animationEnd.next(event);
        }
      });
    }
  };
  static \u0275fac = function MatDrawer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawer,
    selectors: [["mat-drawer"]],
    viewQuery: function MatDrawer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
      }
    },
    hostAttrs: [1, "mat-drawer"],
    hostVars: 12,
    hostBindings: function MatDrawer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("align", null)("tabIndex", ctx.mode !== "side" ? "-1" : null);
        \u0275\u0275styleProp("visibility", !ctx._container && !ctx.opened ? "hidden" : null);
        \u0275\u0275classProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side");
      }
    },
    inputs: {
      position: "position",
      mode: "mode",
      disableClose: "disableClose",
      autoFocus: "autoFocus",
      opened: "opened"
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      openedStart: "openedStart",
      _closedStream: "closed",
      closedStart: "closedStart",
      onPositionChanged: "positionChanged"
    },
    exportAs: ["matDrawer"],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function MatDrawer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CdkScrollable],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawer, [{
    type: Component,
    args: [{
      selector: "mat-drawer",
      exportAs: "matDrawer",
      host: {
        "class": "mat-drawer",
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        // The styles that render the sidenav off-screen come from the drawer container. Prior to #30235
        // this was also done by the animations module which some internal tests seem to depend on.
        // Simulate it by toggling the `hidden` attribute instead.
        "[style.visibility]": '(!_container && !opened) ? "hidden" : null',
        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null'
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkScrollable],
      template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
    }]
  }], () => [], {
    position: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    disableClose: [{
      type: Input
    }],
    autoFocus: [{
      type: Input
    }],
    opened: [{
      type: Input
    }],
    openedChange: [{
      type: Output
    }],
    _openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    openedStart: [{
      type: Output
    }],
    _closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    closedStart: [{
      type: Output
    }],
    onPositionChanged: [{
      type: Output,
      args: ["positionChanged"]
    }],
    _content: [{
      type: ViewChild,
      args: ["content"]
    }]
  });
})();
var MatDrawerContainer = class _MatDrawerContainer {
  _dir = inject(Directionality, {
    optional: true
  });
  _element = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationMode = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _transitionsEnabled = false;
  /** All drawers in the container. Includes drawers from inside nested containers. */
  _allDrawers;
  /** Drawers that belong to this container. */
  _drawers = new QueryList();
  _content;
  _userContent;
  /** The drawer child with the `start` position. */
  get start() {
    return this._start;
  }
  /** The drawer child with the `end` position. */
  get end() {
    return this._end;
  }
  /**
   * Whether to automatically resize the container whenever
   * the size of any of its drawers changes.
   *
   * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
   * the drawers on every change detection cycle. Can be configured globally via the
   * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
   */
  get autosize() {
    return this._autosize;
  }
  set autosize(value) {
    this._autosize = coerceBooleanProperty(value);
  }
  _autosize = inject(MAT_DRAWER_DEFAULT_AUTOSIZE);
  /**
   * Whether the drawer container should have a backdrop while one of the sidenavs is open.
   * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
   * mode as well.
   */
  get hasBackdrop() {
    return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end);
  }
  set hasBackdrop(value) {
    this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
  }
  _backdropOverride;
  /** Event emitted when the drawer backdrop is clicked. */
  backdropClick = new EventEmitter();
  /** The drawer at the start/end position, independent of direction. */
  _start;
  _end;
  /**
   * The drawer at the left/right. When direction changes, these will change as well.
   * They're used as aliases for the above to set the left/right style properly.
   * In LTR, _left == _start and _right == _end.
   * In RTL, _left == _end and _right == _start.
   */
  _left;
  _right;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Emits on every ngDoCheck. Used for debouncing reflows. */
  _doCheckSubject = new Subject();
  /**
   * Margins to be applied to the content. These are used to push / shrink the drawer content when a
   * drawer is open. We use margin rather than transform even for push mode because transform breaks
   * fixed position elements inside of the transformed element.
   */
  _contentMargins = {
    left: null,
    right: null
  };
  _contentMarginChanges = new Subject();
  /** Reference to the CdkScrollable instance that wraps the scrollable content. */
  get scrollable() {
    return this._userContent || this._content;
  }
  _injector = inject(Injector);
  constructor() {
    const platform = inject(Platform);
    const viewportRuler = inject(ViewportRuler);
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._validateDrawers();
      this.updateContentMargins();
    });
    viewportRuler.change().pipe(takeUntil(this._destroyed)).subscribe(() => this.updateContentMargins());
    if (this._animationMode !== "NoopAnimations" && platform.isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this._element.nativeElement.classList.add("mat-drawer-transition");
          this._transitionsEnabled = true;
        }, 200);
      });
    }
  }
  ngAfterContentInit() {
    this._allDrawers.changes.pipe(startWith(this._allDrawers), takeUntil(this._destroyed)).subscribe((drawer) => {
      this._drawers.reset(drawer.filter((item) => !item._container || item._container === this));
      this._drawers.notifyOnChanges();
    });
    this._drawers.changes.pipe(startWith(null)).subscribe(() => {
      this._validateDrawers();
      this._drawers.forEach((drawer) => {
        this._watchDrawerToggle(drawer);
        this._watchDrawerPosition(drawer);
        this._watchDrawerMode(drawer);
      });
      if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
        this.updateContentMargins();
      }
      this._changeDetectorRef.markForCheck();
    });
    this._ngZone.runOutsideAngular(() => {
      this._doCheckSubject.pipe(
        debounceTime(10),
        // Arbitrary debounce time, less than a frame at 60fps
        takeUntil(this._destroyed)
      ).subscribe(() => this.updateContentMargins());
    });
  }
  ngOnDestroy() {
    this._contentMarginChanges.complete();
    this._doCheckSubject.complete();
    this._drawers.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Calls `open` of both start and end drawers */
  open() {
    this._drawers.forEach((drawer) => drawer.open());
  }
  /** Calls `close` of both start and end drawers */
  close() {
    this._drawers.forEach((drawer) => drawer.close());
  }
  /**
   * Recalculates and updates the inline styles for the content. Note that this should be used
   * sparingly, because it causes a reflow.
   */
  updateContentMargins() {
    let left = 0;
    let right = 0;
    if (this._left && this._left.opened) {
      if (this._left.mode == "side") {
        left += this._left._getWidth();
      } else if (this._left.mode == "push") {
        const width = this._left._getWidth();
        left += width;
        right -= width;
      }
    }
    if (this._right && this._right.opened) {
      if (this._right.mode == "side") {
        right += this._right._getWidth();
      } else if (this._right.mode == "push") {
        const width = this._right._getWidth();
        right += width;
        left -= width;
      }
    }
    left = left || null;
    right = right || null;
    if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
      this._contentMargins = {
        left,
        right
      };
      this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
    }
  }
  ngDoCheck() {
    if (this._autosize && this._isPushed()) {
      this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
    }
  }
  /**
   * Subscribes to drawer events in order to set a class on the main container element when the
   * drawer is open and the backdrop is visible. This ensures any overflow on the container element
   * is properly hidden.
   */
  _watchDrawerToggle(drawer) {
    drawer._animationStarted.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
      this.updateContentMargins();
      this._changeDetectorRef.markForCheck();
    });
    if (drawer.mode !== "side") {
      drawer.openedChange.pipe(takeUntil(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
    }
  }
  /**
   * Subscribes to drawer onPositionChanged event in order to
   * re-validate drawers when the position changes.
   */
  _watchDrawerPosition(drawer) {
    drawer.onPositionChanged.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
      afterNextRender({
        read: () => this._validateDrawers()
      }, {
        injector: this._injector
      });
    });
  }
  /** Subscribes to changes in drawer mode so we can run change detection. */
  _watchDrawerMode(drawer) {
    drawer._modeChanged.pipe(takeUntil(merge(this._drawers.changes, this._destroyed))).subscribe(() => {
      this.updateContentMargins();
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */
  _setContainerClass(isAdd) {
    const classList = this._element.nativeElement.classList;
    const className = "mat-drawer-container-has-open";
    if (isAdd) {
      classList.add(className);
    } else {
      classList.remove(className);
    }
  }
  /** Validate the state of the drawer children components. */
  _validateDrawers() {
    this._start = this._end = null;
    this._drawers.forEach((drawer) => {
      if (drawer.position == "end") {
        if (this._end != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatDuplicatedDrawerError("end");
        }
        this._end = drawer;
      } else {
        if (this._start != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatDuplicatedDrawerError("start");
        }
        this._start = drawer;
      }
    });
    this._right = this._left = null;
    if (this._dir && this._dir.value === "rtl") {
      this._left = this._end;
      this._right = this._start;
    } else {
      this._left = this._start;
      this._right = this._end;
    }
  }
  /** Whether the container is being pushed to the side by one of the drawers. */
  _isPushed() {
    return this._isDrawerOpen(this._start) && this._start.mode != "over" || this._isDrawerOpen(this._end) && this._end.mode != "over";
  }
  _onBackdropClicked() {
    this.backdropClick.emit();
    this._closeModalDrawersViaBackdrop();
  }
  _closeModalDrawersViaBackdrop() {
    [this._start, this._end].filter((drawer) => drawer && !drawer.disableClose && this._drawerHasBackdrop(drawer)).forEach((drawer) => drawer._closeViaBackdropClick());
  }
  _isShowingBackdrop() {
    return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end);
  }
  _isDrawerOpen(drawer) {
    return drawer != null && drawer.opened;
  }
  // Whether argument drawer should have a backdrop when it opens
  _drawerHasBackdrop(drawer) {
    if (this._backdropOverride == null) {
      return !!drawer && drawer.mode !== "side";
    }
    return this._backdropOverride;
  }
  static \u0275fac = function MatDrawerContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawerContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawerContainer,
    selectors: [["mat-drawer-container"]],
    contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatDrawerContent, 5);
        \u0275\u0275contentQuery(dirIndex, MatDrawer, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allDrawers = _t);
      }
    },
    viewQuery: function MatDrawerContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatDrawerContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._userContent = _t.first);
      }
    },
    hostAttrs: [1, "mat-drawer-container"],
    hostVars: 2,
    hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
      }
    },
    inputs: {
      autosize: "autosize",
      hasBackdrop: "hasBackdrop"
    },
    outputs: {
      backdropClick: "backdropClick"
    },
    exportAs: ["matDrawerContainer"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_DRAWER_CONTAINER,
      useExisting: _MatDrawerContainer
    }])],
    ngContentSelectors: _c3,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function MatDrawerContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275template(0, MatDrawerContainer_Conditional_0_Template, 1, 2, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275template(3, MatDrawerContainer_Conditional_3_Template, 2, 0, "mat-drawer-content");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasBackdrop ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx._content ? 3 : -1);
      }
    },
    dependencies: [MatDrawerContent],
    styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawerContainer, [{
    type: Component,
    args: [{
      selector: "mat-drawer-container",
      exportAs: "matDrawerContainer",
      host: {
        "class": "mat-drawer-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatDrawerContainer
      }],
      imports: [MatDrawerContent],
      template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-drawer"></ng-content>\n\n<ng-content select="mat-drawer-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-drawer-content>\n    <ng-content></ng-content>\n  </mat-drawer-content>\n}\n',
      styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"]
    }]
  }], () => [], {
    _allDrawers: [{
      type: ContentChildren,
      args: [MatDrawer, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: ContentChild,
      args: [MatDrawerContent]
    }],
    _userContent: [{
      type: ViewChild,
      args: [MatDrawerContent]
    }],
    autosize: [{
      type: Input
    }],
    hasBackdrop: [{
      type: Input
    }],
    backdropClick: [{
      type: Output
    }]
  });
})();
var MatSidenavContent = class _MatSidenavContent extends MatDrawerContent {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenavContent_BaseFactory;
    return function MatSidenavContent_Factory(__ngFactoryType__) {
      return (\u0275MatSidenavContent_BaseFactory || (\u0275MatSidenavContent_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenavContent)))(__ngFactoryType__ || _MatSidenavContent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenavContent,
    selectors: [["mat-sidenav-content"]],
    hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useExisting: _MatSidenavContent
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatSidenavContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavContent, [{
    type: Component,
    args: [{
      selector: "mat-sidenav-content",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-drawer-content mat-sidenav-content"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useExisting: MatSidenavContent
      }]
    }]
  }], null, null);
})();
var MatSidenav = class _MatSidenav extends MatDrawer {
  /** Whether the sidenav is fixed in the viewport. */
  get fixedInViewport() {
    return this._fixedInViewport;
  }
  set fixedInViewport(value) {
    this._fixedInViewport = coerceBooleanProperty(value);
  }
  _fixedInViewport = false;
  /**
   * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
   * mode.
   */
  get fixedTopGap() {
    return this._fixedTopGap;
  }
  set fixedTopGap(value) {
    this._fixedTopGap = coerceNumberProperty(value);
  }
  _fixedTopGap = 0;
  /**
   * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
   * fixed mode.
   */
  get fixedBottomGap() {
    return this._fixedBottomGap;
  }
  set fixedBottomGap(value) {
    this._fixedBottomGap = coerceNumberProperty(value);
  }
  _fixedBottomGap = 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenav_BaseFactory;
    return function MatSidenav_Factory(__ngFactoryType__) {
      return (\u0275MatSidenav_BaseFactory || (\u0275MatSidenav_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenav)))(__ngFactoryType__ || _MatSidenav);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenav,
    selectors: [["mat-sidenav"]],
    hostAttrs: [1, "mat-drawer", "mat-sidenav"],
    hostVars: 16,
    hostBindings: function MatSidenav_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("tabIndex", ctx.mode !== "side" ? "-1" : null)("align", null);
        \u0275\u0275styleProp("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");
        \u0275\u0275classProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-sidenav-fixed", ctx.fixedInViewport);
      }
    },
    inputs: {
      fixedInViewport: "fixedInViewport",
      fixedTopGap: "fixedTopGap",
      fixedBottomGap: "fixedBottomGap"
    },
    exportAs: ["matSidenav"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatDrawer,
      useExisting: _MatSidenav
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function MatSidenav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CdkScrollable],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenav, [{
    type: Component,
    args: [{
      selector: "mat-sidenav",
      exportAs: "matSidenav",
      host: {
        "class": "mat-drawer mat-sidenav",
        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null',
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        "[class.mat-sidenav-fixed]": "fixedInViewport",
        "[style.top.px]": "fixedInViewport ? fixedTopGap : null",
        "[style.bottom.px]": "fixedInViewport ? fixedBottomGap : null"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkScrollable],
      providers: [{
        provide: MatDrawer,
        useExisting: MatSidenav
      }],
      template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
    }]
  }], null, {
    fixedInViewport: [{
      type: Input
    }],
    fixedTopGap: [{
      type: Input
    }],
    fixedBottomGap: [{
      type: Input
    }]
  });
})();
var MatSidenavContainer = class _MatSidenavContainer extends MatDrawerContainer {
  _allDrawers = void 0;
  // We need an initializer here to avoid a TS error.
  _content = void 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenavContainer_BaseFactory;
    return function MatSidenavContainer_Factory(__ngFactoryType__) {
      return (\u0275MatSidenavContainer_BaseFactory || (\u0275MatSidenavContainer_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenavContainer)))(__ngFactoryType__ || _MatSidenavContainer);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenavContainer,
    selectors: [["mat-sidenav-container"]],
    contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatSidenavContent, 5);
        \u0275\u0275contentQuery(dirIndex, MatSidenav, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allDrawers = _t);
      }
    },
    hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
    hostVars: 2,
    hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
      }
    },
    exportAs: ["matSidenavContainer"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_DRAWER_CONTAINER,
      useExisting: _MatSidenavContainer
    }, {
      provide: MatDrawerContainer,
      useExisting: _MatSidenavContainer
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function MatSidenavContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275template(0, MatSidenavContainer_Conditional_0_Template, 1, 2, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275template(3, MatSidenavContainer_Conditional_3_Template, 2, 0, "mat-sidenav-content");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasBackdrop ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx._content ? 3 : -1);
      }
    },
    dependencies: [MatSidenavContent],
    styles: [_c6],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavContainer, [{
    type: Component,
    args: [{
      selector: "mat-sidenav-container",
      exportAs: "matSidenavContainer",
      host: {
        "class": "mat-drawer-container mat-sidenav-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatSidenavContainer
      }, {
        provide: MatDrawerContainer,
        useExisting: MatSidenavContainer
      }],
      imports: [MatSidenavContent],
      template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-sidenav"></ng-content>\n\n<ng-content select="mat-sidenav-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n}\n',
      styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"]
    }]
  }], null, {
    _allDrawers: [{
      type: ContentChildren,
      args: [MatSidenav, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: ContentChild,
      args: [MatSidenavContent]
    }]
  });
})();
var MatSidenavModule = class _MatSidenavModule {
  static \u0275fac = function MatSidenavModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSidenavModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSidenavModule,
    imports: [MatCommonModule, CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
    exports: [CdkScrollableModule, MatCommonModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkScrollableModule, CdkScrollableModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
      exports: [CdkScrollableModule, MatCommonModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
    }]
  }], null, null);
})();

// src/app/modules/settings/billing-details/billing-details.component.ts
var _c02 = (a0, a1) => ({ "border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300": a0, "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600": a1 });
function BillingDetailsComponent_mat_icon_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 41);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function BillingDetailsComponent_mat_icon_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 41);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function BillingDetailsComponent_ng_container_48_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 55);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    \u0275\u0275property("value", type_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, type_r2.label), " ");
  }
}
function BillingDetailsComponent_ng_container_48_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 55)(1, "div", 56)(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const country_r4 = ctx.$implicit;
    \u0275\u0275property("value", country_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(country_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r4.name);
  }
}
function BillingDetailsComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30)(2, "label", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 42);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33)(8, "label", 31);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 43);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "mat-autocomplete", 44, 0);
    \u0275\u0275template(15, BillingDetailsComponent_ng_container_48_mat_option_15_Template, 3, 4, "mat-option", 45);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 33)(18, "label", 31);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 47)(23, "div", 48)(24, "label", 31);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 49);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275listener("blur", function BillingDetailsComponent_ng_container_48_Template_input_blur_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCountryBlur("business"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-autocomplete", 50, 1);
    \u0275\u0275listener("optionSelected", function BillingDetailsComponent_ng_container_48_Template_mat_autocomplete_optionSelected_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCountryCodeSelected($event, "business"));
    });
    \u0275\u0275template(31, BillingDetailsComponent_ng_container_48_mat_option_31_Template, 6, 3, "mat-option", 45);
    \u0275\u0275pipe(32, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 51)(34, "label", 31);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 33)(39, "label", 31);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 33)(44, "label", 31);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const docTypeAuto_r5 = \u0275\u0275reference(14);
    const countryCodeAuto_r6 = \u0275\u0275reference(30);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 16, "settings.billing.business_name"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 18, "settings.billing.business_name_placeholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 20, "settings.billing.document_type"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 22, "settings.billing.select_document_type"))("matAutocomplete", docTypeAuto_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("displayWith", ctx_r2.displayDocumentTypeFn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(16, 24, ctx_r2.filteredDocumentTypes));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 26, "settings.billing.document_number"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 28, "settings.billing.country_code"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(28, 30, "settings.billing.search_country"))("matAutocomplete", countryCodeAuto_r6);
    \u0275\u0275advance(2);
    \u0275\u0275property("displayWith", ctx_r2.displayCountryCodeFn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(32, 32, ctx_r2.filteredBusinessCountryCodes));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 34, "settings.billing.phone"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 36, "settings.billing.email"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 38, "settings.billing.legal_representative"), " ");
  }
}
function BillingDetailsComponent_ng_container_49_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 55);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    \u0275\u0275property("value", type_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, type_r8.label), " ");
  }
}
function BillingDetailsComponent_ng_container_49_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 55)(1, "div", 56)(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const country_r9 = ctx.$implicit;
    \u0275\u0275property("value", country_r9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(country_r9.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r9.name);
  }
}
function BillingDetailsComponent_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30)(2, "label", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 59);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33)(8, "label", 31);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 60);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementStart(13, "mat-autocomplete", 44, 2);
    \u0275\u0275template(15, BillingDetailsComponent_ng_container_49_mat_option_15_Template, 3, 4, "mat-option", 45);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 33)(18, "label", 31);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 47)(23, "div", 48)(24, "label", 31);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 62);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275listener("blur", function BillingDetailsComponent_ng_container_49_Template_input_blur_27_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCountryBlur("person"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-autocomplete", 50, 3);
    \u0275\u0275listener("optionSelected", function BillingDetailsComponent_ng_container_49_Template_mat_autocomplete_optionSelected_29_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCountryCodeSelected($event, "person"));
    });
    \u0275\u0275template(31, BillingDetailsComponent_ng_container_49_mat_option_31_Template, 6, 3, "mat-option", 45);
    \u0275\u0275pipe(32, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 51)(34, "label", 31);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 30)(39, "label", 31);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const docTypeAutoPerson_r10 = \u0275\u0275reference(14);
    const countryCodeAutoPerson_r11 = \u0275\u0275reference(30);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 15, "settings.billing.full_name"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 17, "settings.billing.full_name_placeholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 19, "settings.billing.document_type"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 21, "settings.billing.select_document_type"))("matAutocomplete", docTypeAutoPerson_r10);
    \u0275\u0275advance(2);
    \u0275\u0275property("displayWith", ctx_r2.displayDocumentTypeFn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(16, 23, ctx_r2.filteredDocumentTypes));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 25, "settings.billing.document_number"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 27, "settings.billing.country_code"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(28, 29, "settings.billing.search_country"))("matAutocomplete", countryCodeAutoPerson_r11);
    \u0275\u0275advance(2);
    \u0275\u0275property("displayWith", ctx_r2.displayCountryCodeFn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(32, 31, ctx_r2.filteredPersonCountryCodes));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 33, "settings.billing.phone"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 35, "settings.billing.email"), " ");
  }
}
function BillingDetailsComponent_mat_spinner_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 65);
  }
}
var BillingDetailsComponent = class _BillingDetailsComponent {
  constructor(_formBuilder, _settingsService, _cdr, _snackBar, _translocoService, _route, _router) {
    this._formBuilder = _formBuilder;
    this._settingsService = _settingsService;
    this._cdr = _cdr;
    this._snackBar = _snackBar;
    this._translocoService = _translocoService;
    this._route = _route;
    this._router = _router;
    this._unsubscribeAll = new Subject();
    this.billingData = null;
    this.billingLoaded = false;
    this.isSavingBilling = false;
    this.personDocumentTypes = [];
    this.businessDocumentTypes = [];
    this.billingCountryCodes = [
      { code: "+1", name: "United States" },
      { code: "+1", name: "Canada" },
      { code: "+52", name: "Mexico" },
      { code: "+57", name: "Colombia" },
      { code: "+54", name: "Argentina" },
      { code: "+56", name: "Chile" },
      { code: "+55", name: "Brazil" },
      { code: "+51", name: "Peru" },
      { code: "+58", name: "Venezuela" },
      { code: "+593", name: "Ecuador" },
      { code: "+591", name: "Bolivia" },
      { code: "+595", name: "Paraguay" },
      { code: "+598", name: "Uruguay" },
      { code: "+507", name: "Panama" },
      { code: "+506", name: "Costa Rica" },
      { code: "+505", name: "Nicaragua" },
      { code: "+504", name: "Honduras" },
      { code: "+503", name: "El Salvador" },
      { code: "+502", name: "Guatemala" },
      { code: "+44", name: "United Kingdom" },
      { code: "+33", name: "France" },
      { code: "+49", name: "Germany" },
      { code: "+39", name: "Italy" },
      { code: "+34", name: "Spain" },
      { code: "+351", name: "Portugal" },
      { code: "+31", name: "Netherlands" },
      { code: "+32", name: "Belgium" },
      { code: "+41", name: "Switzerland" },
      { code: "+43", name: "Austria" },
      { code: "+46", name: "Sweden" },
      { code: "+47", name: "Norway" },
      { code: "+45", name: "Denmark" },
      { code: "+358", name: "Finland" },
      { code: "+48", name: "Poland" },
      { code: "+81", name: "Japan" },
      { code: "+82", name: "South Korea" },
      { code: "+86", name: "China" },
      { code: "+91", name: "India" },
      { code: "+61", name: "Australia" },
      { code: "+64", name: "New Zealand" },
      { code: "+971", name: "United Arab Emirates" },
      { code: "+966", name: "Saudi Arabia" },
      { code: "+972", name: "Israel" },
      { code: "+90", name: "Turkey" }
    ];
    this.displayDocumentTypeFn = (value) => {
      if (!value)
        return "";
      return this._translocoService?.translate("settings.billing.document_types." + value) ?? value;
    };
    this._initBillingForms();
    this._initDocumentTypes();
  }
  ngOnInit() {
    this.loadBillingData();
    this._setupBillingFilters();
  }
  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  // Billing Form Initialization
  _initBillingForms() {
    this.payerForm = this._formBuilder.group({
      type: ["person"],
      // Business fields
      business_name: [""],
      business_documentType: [""],
      business_documentNumber: [""],
      business_countryCode: [""],
      business_country: [""],
      business_phone: [""],
      business_email: [""],
      business_legalRepresentative: [""],
      // Person fields
      person_name: [""],
      person_documentType: [""],
      person_documentNumber: [""],
      person_countryCode: [""],
      person_country: [""],
      person_phone: [""],
      person_email: [""]
    });
    this.addressForm = this._formBuilder.group({
      address: ["", Validators.required],
      city: ["", Validators.required],
      province: ["", Validators.required],
      country: ["", Validators.required],
      postalCode: ["", Validators.required]
    });
  }
  _initDocumentTypes() {
    this.personDocumentTypes = [
      {
        value: "CC",
        label: "settings.billing.document_types.CC"
      },
      {
        value: "CE",
        label: "settings.billing.document_types.CE"
      },
      {
        value: "TI",
        label: "settings.billing.document_types.TI"
      },
      {
        value: "NIT",
        label: "settings.billing.document_types.NIT"
      },
      {
        value: "PPT",
        label: "settings.billing.document_types.PPT"
      },
      {
        value: "DNI",
        label: "settings.billing.document_types.DNI"
      },
      {
        value: "RUC",
        label: "settings.billing.document_types.RUC"
      },
      {
        value: "CURP",
        label: "settings.billing.document_types.CURP"
      },
      {
        value: "RUT",
        label: "settings.billing.document_types.RUT"
      }
    ];
    this.businessDocumentTypes = [
      {
        value: "NO_TAX",
        label: "settings.billing.document_types.NO_TAX"
      },
      {
        value: "INTERNATIONAL_TAX",
        label: "settings.billing.document_types.INTERNATIONAL_TAX"
      },
      {
        value: "NIT",
        label: "settings.billing.document_types.NIT"
      }
    ];
  }
  // Data Loading
  loadBillingData() {
    if (!this.user?._id || this.billingLoaded)
      return;
    this._settingsService.getBillingConfig(this.user._id).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        const settings = response.data;
        this.billingData = settings;
        this.billingLoaded = true;
        if (settings?.invoiceSettings) {
          const invoice = settings.invoiceSettings;
          this.payerForm.patchValue({
            type: invoice.type || "person"
          });
          if (invoice.business) {
            this.payerForm.patchValue({
              business_name: invoice.business.business_name,
              business_documentType: invoice.business.business_documentType,
              business_documentNumber: invoice.business.business_documentNumber,
              business_countryCode: this._findCountryOption(invoice.business.business_countryCode),
              business_phone: invoice.business.business_phone,
              business_email: invoice.business.business_email,
              business_legalRepresentative: invoice.business.business_legalRepresentative
            });
          }
          if (invoice.person) {
            this.payerForm.patchValue({
              person_name: invoice.person.person_name,
              person_documentType: invoice.person.person_documentType,
              person_documentNumber: invoice.person.person_documentNumber,
              person_countryCode: this._findCountryOption(invoice.person.person_countryCode),
              person_phone: invoice.person.person_phone,
              person_email: invoice.person.person_email
            });
          }
          if (invoice.address) {
            this.addressForm.patchValue({
              address: invoice.address.address,
              city: invoice.address.city,
              province: invoice.address.province,
              country: invoice.address.country,
              postalCode: invoice.address.postalCode
            });
          }
        }
        this._cdr.markForCheck();
      },
      error: () => {
        this.billingLoaded = true;
        this._cdr.markForCheck();
      }
    });
  }
  _findCountryOption(code) {
    if (!code)
      return "";
    const found = this.billingCountryCodes.find((c) => c.code === code || c.name === code);
    return found || code;
  }
  // Saving
  saveBillingConfig() {
    if (this.payerForm.invalid || this.addressForm.invalid || !this.user?._id) {
      return;
    }
    this.isSavingBilling = true;
    this._cdr.markForCheck();
    const payerValue = this.payerForm.value;
    const addressValue = this.addressForm.value;
    const type = payerValue.type;
    const billingData = {
      client: this.user._id,
      invoiceSettings: {
        type,
        address: addressValue,
        business: type === "business" ? {
          business_name: payerValue.business_name,
          business_documentType: payerValue.business_documentType,
          business_documentNumber: payerValue.business_documentNumber,
          business_countryCode: typeof payerValue.business_countryCode === "object" ? payerValue.business_countryCode.code : payerValue.business_countryCode,
          business_country: "Colombia",
          // Default or from form? Assuming default for now or extracted from code
          business_phone: payerValue.business_phone,
          business_email: payerValue.business_email,
          business_legalRepresentative: payerValue.business_legalRepresentative
        } : null,
        person: type === "person" ? {
          person_name: payerValue.person_name,
          person_documentType: payerValue.person_documentType,
          person_documentNumber: payerValue.person_documentNumber,
          person_countryCode: typeof payerValue.person_countryCode === "object" ? payerValue.person_countryCode.code : payerValue.person_countryCode,
          person_country: "Colombia",
          person_phone: payerValue.person_phone,
          person_email: payerValue.person_email
        } : null
      }
    };
    this._settingsService.saveBillingConfig(billingData).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        this.billingData = response.data;
        const message = this._translocoService.translate("settings.billing.save_success");
        this._snackBar.open(message, null, { duration: 3e3 });
        this.isSavingBilling = false;
        this._cdr.markForCheck();
        const returnUrl = this._route.snapshot.queryParams["returnUrl"];
        if (returnUrl && returnUrl.startsWith("/") && !returnUrl.includes("//")) {
          this._router.navigateByUrl(returnUrl);
        }
      },
      error: (error) => {
        const message = error?.error?.message || this._translocoService.translate("settings.billing.save_error");
        this._snackBar.open(message, null, { duration: 3e3 });
        this.isSavingBilling = false;
        this._cdr.markForCheck();
      }
    });
  }
  // Helpers
  isABusiness() {
    return this.payerForm.get("type").value === "business";
  }
  isAPerson() {
    return this.payerForm.get("type").value === "person";
  }
  // Filters and Display Fns
  _setupBillingFilters() {
    this.filteredDocumentTypes = this.payerForm.valueChanges.pipe(startWith(""), map(() => {
      const source = this.isABusiness() ? this.businessDocumentTypes : this.personDocumentTypes;
      const control = this.isABusiness() ? this.payerForm.get("business_documentType") : this.payerForm.get("person_documentType");
      const value = control?.value;
      const filterValue = typeof value === "string" ? value.toLowerCase() : "";
      return filterValue ? source.filter((opt) => this._translocoService.translate(opt.label).toLowerCase().includes(filterValue)) : source;
    }));
    this.filteredBusinessCountryCodes = this.payerForm.get("business_countryCode").valueChanges.pipe(startWith(""), map((value) => this._filterCountryCodes(value)));
    this.filteredPersonCountryCodes = this.payerForm.get("person_countryCode").valueChanges.pipe(startWith(""), map((value) => this._filterCountryCodes(value)));
  }
  _filterCountryCodes(value) {
    if (!value || typeof value === "string" && value.trim().length === 0) {
      return this.billingCountryCodes;
    }
    const filterValue = typeof value === "string" ? value.toLowerCase().trim() : `${value.code} ${value.name}`.toLowerCase();
    return this.billingCountryCodes.filter((country) => country.name.toLowerCase().includes(filterValue) || country.code.toLowerCase().includes(filterValue) || country.code.replace("+", "").includes(filterValue));
  }
  displayCountryCodeFn(country) {
    return country && country.code ? `${country.code} ${country.name}` : "";
  }
  onCountryBlur(type) {
    const controlName = type === "business" ? "business_countryCode" : "person_countryCode";
    const control = this.payerForm.get(controlName);
    if (control.value && typeof control.value === "string") {
      const match = this.billingCountryCodes.find((c) => c.name.toLowerCase() === control.value.toLowerCase() || c.code === control.value || `${c.code} ${c.name}`.toLowerCase() === control.value.toLowerCase());
      if (match) {
        control.setValue(match);
      }
    }
  }
  onCountryCodeSelected(event, type) {
  }
  static {
    this.\u0275fac = function BillingDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BillingDetailsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslocoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingDetailsComponent, selectors: [["app-billing-details"]], inputs: { user: "user" }, decls: 94, vars: 70, consts: [["docTypeAuto", "matAutocomplete"], ["countryCodeAuto", "matAutocomplete"], ["docTypeAutoPerson", "matAutocomplete"], ["countryCodeAutoPerson", "matAutocomplete"], [1, "flex", "flex-col", "h-full", "bg-white", "dark:bg-gray-900", "overflow-hidden"], [1, "flex", "flex-col", "p-8", "border-b", "border-gray-100", "dark:border-gray-800", "bg-white", "dark:bg-gray-900", "shrink-0"], [1, "flex", "items-center", "gap-4"], [1, "p-3", "rounded-2xl", "bg-blue-50", "dark:bg-blue-900/20", "text-blue-600", "dark:text-blue-400"], [1, "icon-size-8", 2, "width", "32px", "height", "32px", "font-size", "32px"], [1, "text-3xl", "font-bold", "tracking-tight", "text-gray-900", "dark:text-gray-100"], [1, "text-secondary", "text-lg", "mt-1"], [1, "flex-1", "overflow-y-auto", "p-8"], [1, "max-w-4xl", "mx-auto", "flex", "flex-col", "gap-8"], [1, "flex", "flex-col", "gap-8", 3, "formGroup"], [1, "bg-gray-50/50", "dark:bg-gray-800/50", "rounded-2xl", "border", "border-gray-200", "dark:border-gray-800", "p-8"], [1, "flex", "items-center", "gap-3", "mb-6"], [1, "text-gray-400"], [1, "text-lg", "font-semibold", "text-gray-900", "dark:text-white"], [1, "ml-auto", "text-xs", "font-medium", "px-2", "py-1", "rounded", "bg-gray-100", "dark:bg-gray-800", "text-gray-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-x-8", "gap-y-6"], [1, "md:col-span-2"], [1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-2"], [1, "grid", "grid-cols-2", "gap-4"], [1, "relative", "flex", "items-center", "justify-center", "gap-3", "px-4", "py-3", "rounded-xl", "border-2", "cursor-pointer", "transition-all", "duration-200", "group", "hover:shadow-md", 3, "ngClass"], ["type", "radio", "formControlName", "type", "value", "person", 1, "hidden"], [1, "text-gray-400", "group-hover:scale-110", "transition-transform"], [1, "font-medium"], ["class", "absolute top-2 right-2 text-blue-500 icon-size-4", "style", "width: 16px; height: 16px; font-size: 16px", 4, "ngIf"], ["type", "radio", "formControlName", "type", "value", "business", 1, "hidden"], [4, "ngIf"], [1, "flex", "flex-col", "gap-1.5", "md:col-span-2"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], ["type", "text", "formControlName", "address", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all", 3, "placeholder"], [1, "flex", "flex-col", "gap-1.5"], ["type", "text", "formControlName", "city", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all"], ["type", "text", "formControlName", "province", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all"], ["type", "text", "formControlName", "country", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all"], ["type", "text", "formControlName", "postalCode", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all"], [1, "flex", "justify-end", "pt-4", "pb-12"], ["mat-flat-button", "", "color", "primary", 1, "!bg-blue-600", "hover:!bg-blue-700", "text-white", "rounded-xl", "px-8", "h-12", "text-base", "font-medium", "transition-all", "shadow-sm", "hover:shadow-md", "disabled:opacity-50", "disabled:shadow-none", 3, "click", "disabled"], ["diameter", "24", "class", "mr-3", 4, "ngIf"], [1, "absolute", "top-2", "right-2", "text-blue-500", "icon-size-4", 2, "width", "16px", "height", "16px", "font-size", "16px"], ["type", "text", "formControlName", "business_name", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all", 3, "placeholder"], ["type", "text", "formControlName", "business_documentType", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all", 3, "placeholder", "matAutocomplete"], [3, "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "business_documentNumber", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all"], [1, "grid", "grid-cols-3", "gap-4", "md:col-span-2"], [1, "flex", "flex-col", "gap-1.5", "col-span-1"], ["type", "text", "formControlName", "business_countryCode", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all", 3, "blur", "placeholder", "matAutocomplete"], [3, "optionSelected", "displayWith"], [1, "flex", "flex-col", "gap-1.5", "col-span-2"], ["type", "tel", "formControlName", "business_phone", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all"], ["type", "email", "formControlName", "business_email", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all"], ["type", "text", "formControlName", "business_legalRepresentative", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all"], [3, "value"], [1, "flex", "items-center", "gap-2"], [1, "text-lg"], [1, "text-gray-900", "dark:text-white"], ["type", "text", "formControlName", "person_name", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all", 3, "placeholder"], ["type", "text", "formControlName", "person_documentType", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all", 3, "placeholder", "matAutocomplete"], ["type", "text", "formControlName", "person_documentNumber", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all"], ["type", "text", "formControlName", "person_countryCode", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all", 3, "blur", "placeholder", "matAutocomplete"], ["type", "tel", "formControlName", "person_phone", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all"], ["type", "email", "formControlName", "person_email", 1, "h-11", "px-4", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", "transition-all"], ["diameter", "24", 1, "mr-3"]], template: function BillingDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "mat-icon", 8);
        \u0275\u0275text(5, "credit_card");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div")(7, "h2", 9);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 10);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "form", 13)(16, "div", 14)(17, "div", 15)(18, "mat-icon", 16);
        \u0275\u0275text(19, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "h3", 17);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 18);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 19)(27, "div", 20)(28, "label", 21);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 22)(32, "label", 23);
        \u0275\u0275element(33, "input", 24);
        \u0275\u0275elementStart(34, "mat-icon", 25);
        \u0275\u0275text(35, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 26);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, BillingDetailsComponent_mat_icon_39_Template, 2, 0, "mat-icon", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "label", 23);
        \u0275\u0275element(41, "input", 28);
        \u0275\u0275elementStart(42, "mat-icon", 25);
        \u0275\u0275text(43, "business");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 26);
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275template(47, BillingDetailsComponent_mat_icon_47_Template, 2, 0, "mat-icon", 27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(48, BillingDetailsComponent_ng_container_48_Template, 48, 40, "ng-container", 29)(49, BillingDetailsComponent_ng_container_49_Template, 43, 37, "ng-container", 29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "form", 13)(51, "div", 14)(52, "div", 15)(53, "mat-icon", 16);
        \u0275\u0275text(54, "home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "h3", 17);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span", 18);
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 19)(62, "div", 30)(63, "label", 31);
        \u0275\u0275text(64);
        \u0275\u0275pipe(65, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(66, "input", 32);
        \u0275\u0275pipe(67, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 33)(69, "label", 31);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(72, "input", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 33)(74, "label", 31);
        \u0275\u0275text(75);
        \u0275\u0275pipe(76, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(77, "input", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 33)(79, "label", 31);
        \u0275\u0275text(80);
        \u0275\u0275pipe(81, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(82, "input", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 33)(84, "label", 31);
        \u0275\u0275text(85);
        \u0275\u0275pipe(86, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(87, "input", 37);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(88, "div", 38)(89, "button", 39);
        \u0275\u0275listener("click", function BillingDetailsComponent_Template_button_click_89_listener() {
          return ctx.saveBillingConfig();
        });
        \u0275\u0275template(90, BillingDetailsComponent_mat_spinner_90_Template, 1, 0, "mat-spinner", 40);
        \u0275\u0275text(91);
        \u0275\u0275pipe(92, "transloco");
        \u0275\u0275pipe(93, "transloco");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 30, "settings.billing.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 32, "settings.billing.subtitle"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.payerForm);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 34, "settings.billing.payer_info"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 36, "settings.billing.payer_info_desc"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 38, "settings.billing.type"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(64, _c02, ctx.payerForm.get("type").value === "person", ctx.payerForm.get("type").value !== "person"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("text-blue-500", ctx.payerForm.get("type").value === "person");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 40, "settings.billing.person"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.payerForm.get("type").value === "person");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(67, _c02, ctx.payerForm.get("type").value === "business", ctx.payerForm.get("type").value !== "business"));
        \u0275\u0275advance(2);
        \u0275\u0275classProp("text-blue-500", ctx.payerForm.get("type").value === "business");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 42, "settings.billing.business"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.payerForm.get("type").value === "business");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isABusiness());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isAPerson());
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.addressForm);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 44, "settings.billing.address_title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 46, "settings.billing.address_desc"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 48, "settings.billing.address"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(67, 50, "settings.billing.address_placeholder"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(71, 52, "settings.billing.city"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 54, "settings.billing.province"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(81, 56, "settings.billing.country"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 58, "settings.billing.postal_code"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSavingBilling || ctx.payerForm.invalid || ctx.addressForm.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSavingBilling);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSavingBilling ? \u0275\u0275pipeBind1(92, 60, "settings.billing.saving") : \u0275\u0275pipeBind1(93, 62, "settings.billing.save"), " ");
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      AsyncPipe,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      RadioControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      TranslocoModule,
      TranslocoPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-billing-details", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatAutocompleteModule,
      MatProgressSpinnerModule,
      TranslocoModule
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-col h-full bg-white dark:bg-gray-900 overflow-hidden">
    <!-- Header -->
    <div
        class="flex flex-col p-8 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shrink-0"
    >
        <div class="flex items-center gap-4">
            <div
                class="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
            >
                <mat-icon class="icon-size-8" style="width: 32px; height: 32px; font-size: 32px"
                    >credit_card</mat-icon
                >
            </div>
            <div>
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    {{ 'settings.billing.title' | transloco }}
                </h2>
                <p class="text-secondary text-lg mt-1">
                    {{ 'settings.billing.subtitle' | transloco }}
                </p>
            </div>
        </div>
    </div>

    <div class="flex-1 overflow-y-auto p-8">
        <div class="max-w-4xl mx-auto flex flex-col gap-8">
            <!-- Payer Info Section -->
            <form [formGroup]="payerForm" class="flex flex-col gap-8">
                <div
                    class="bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-800 p-8"
                >
                    <div class="flex items-center gap-3 mb-6">
                        <mat-icon class="text-gray-400">person</mat-icon>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            {{ 'settings.billing.payer_info' | transloco }}
                        </h3>
                        <span
                            class="ml-auto text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-500"
                        >
                            {{ 'settings.billing.payer_info_desc' | transloco }}
                        </span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <!-- Account Type -->
                        <div class="md:col-span-2">
                            <label
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                                {{ 'settings.billing.type' | transloco }}
                            </label>
                            <div class="grid grid-cols-2 gap-4">
                                <label
                                    class="relative flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200 group hover:shadow-md"
                                    [ngClass]="{
                                        'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300':
                                            payerForm.get('type').value === 'person',
                                        'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600':
                                            payerForm.get('type').value !== 'person',
                                    }"
                                >
                                    <input
                                        type="radio"
                                        formControlName="type"
                                        value="person"
                                        class="hidden"
                                    />
                                    <mat-icon
                                        [class.text-blue-500]="
                                            payerForm.get('type').value === 'person'
                                        "
                                        class="text-gray-400 group-hover:scale-110 transition-transform"
                                        >person</mat-icon
                                    >
                                    <span class="font-medium">{{
                                        'settings.billing.person' | transloco
                                    }}</span>
                                    <mat-icon
                                        *ngIf="payerForm.get('type').value === 'person'"
                                        class="absolute top-2 right-2 text-blue-500 icon-size-4"
                                        style="width: 16px; height: 16px; font-size: 16px"
                                        >check_circle</mat-icon
                                    >
                                </label>

                                <label
                                    class="relative flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-200 group hover:shadow-md"
                                    [ngClass]="{
                                        'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300':
                                            payerForm.get('type').value === 'business',
                                        'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600':
                                            payerForm.get('type').value !== 'business',
                                    }"
                                >
                                    <input
                                        type="radio"
                                        formControlName="type"
                                        value="business"
                                        class="hidden"
                                    />
                                    <mat-icon
                                        [class.text-blue-500]="
                                            payerForm.get('type').value === 'business'
                                        "
                                        class="text-gray-400 group-hover:scale-110 transition-transform"
                                        >business</mat-icon
                                    >
                                    <span class="font-medium">{{
                                        'settings.billing.business' | transloco
                                    }}</span>
                                    <mat-icon
                                        *ngIf="payerForm.get('type').value === 'business'"
                                        class="absolute top-2 right-2 text-blue-500 icon-size-4"
                                        style="width: 16px; height: 16px; font-size: 16px"
                                        >check_circle</mat-icon
                                    >
                                </label>
                            </div>
                        </div>

                        <!-- Business Form -->
                        <ng-container *ngIf="isABusiness()">
                            <div class="flex flex-col gap-1.5 md:col-span-2">
                                <label
                                    class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >
                                    {{ 'settings.billing.business_name' | transloco }}
                                </label>
                                <input
                                    type="text"
                                    formControlName="business_name"
                                    [placeholder]="
                                        'settings.billing.business_name_placeholder' | transloco
                                    "
                                    class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label
                                    class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >
                                    {{ 'settings.billing.document_type' | transloco }}
                                </label>
                                <input
                                    type="text"
                                    [placeholder]="
                                        'settings.billing.select_document_type' | transloco
                                    "
                                    [matAutocomplete]="docTypeAuto"
                                    formControlName="business_documentType"
                                    class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                />
                                <mat-autocomplete
                                    #docTypeAuto="matAutocomplete"
                                    [displayWith]="displayDocumentTypeFn"
                                >
                                    <mat-option
                                        *ngFor="let type of filteredDocumentTypes | async"
                                        [value]="type.value"
                                    >
                                        {{ type.label | transloco }}
                                    </mat-option>
                                </mat-autocomplete>
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label
                                    class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >
                                    {{ 'settings.billing.document_number' | transloco }}
                                </label>
                                <input
                                    type="text"
                                    formControlName="business_documentNumber"
                                    class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                />
                            </div>

                            <div class="grid grid-cols-3 gap-4 md:col-span-2">
                                <div class="flex flex-col gap-1.5 col-span-1">
                                    <label
                                        class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                    >
                                        {{ 'settings.billing.country_code' | transloco }}
                                    </label>
                                    <input
                                        type="text"
                                        [placeholder]="
                                            'settings.billing.search_country' | transloco
                                        "
                                        [matAutocomplete]="countryCodeAuto"
                                        formControlName="business_countryCode"
                                        class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                        (blur)="onCountryBlur('business')"
                                    />
                                    <mat-autocomplete
                                        #countryCodeAuto="matAutocomplete"
                                        [displayWith]="displayCountryCodeFn"
                                        (optionSelected)="onCountryCodeSelected($event, 'business')"
                                    >
                                        <mat-option
                                            *ngFor="
                                                let country of filteredBusinessCountryCodes | async
                                            "
                                            [value]="country"
                                        >
                                            <div class="flex items-center gap-2">
                                                <span class="text-lg">{{ country.code }}</span>
                                                <span class="text-gray-900 dark:text-white">{{
                                                    country.name
                                                }}</span>
                                            </div>
                                        </mat-option>
                                    </mat-autocomplete>
                                </div>

                                <div class="flex flex-col gap-1.5 col-span-2">
                                    <label
                                        class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                    >
                                        {{ 'settings.billing.phone' | transloco }}
                                    </label>
                                    <input
                                        type="tel"
                                        formControlName="business_phone"
                                        class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                    />
                                </div>
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label
                                    class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >
                                    {{ 'settings.billing.email' | transloco }}
                                </label>
                                <input
                                    type="email"
                                    formControlName="business_email"
                                    class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label
                                    class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >
                                    {{ 'settings.billing.legal_representative' | transloco }}
                                </label>
                                <input
                                    type="text"
                                    formControlName="business_legalRepresentative"
                                    class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                />
                            </div>
                        </ng-container>

                        <!-- Person Form -->
                        <ng-container *ngIf="isAPerson()">
                            <div class="flex flex-col gap-1.5 md:col-span-2">
                                <label
                                    class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >
                                    {{ 'settings.billing.full_name' | transloco }}
                                </label>
                                <input
                                    type="text"
                                    formControlName="person_name"
                                    [placeholder]="
                                        'settings.billing.full_name_placeholder' | transloco
                                    "
                                    class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label
                                    class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >
                                    {{ 'settings.billing.document_type' | transloco }}
                                </label>
                                <input
                                    type="text"
                                    [placeholder]="
                                        'settings.billing.select_document_type' | transloco
                                    "
                                    [matAutocomplete]="docTypeAutoPerson"
                                    formControlName="person_documentType"
                                    class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                />
                                <mat-autocomplete
                                    #docTypeAutoPerson="matAutocomplete"
                                    [displayWith]="displayDocumentTypeFn"
                                >
                                    <mat-option
                                        *ngFor="let type of filteredDocumentTypes | async"
                                        [value]="type.value"
                                    >
                                        {{ type.label | transloco }}
                                    </mat-option>
                                </mat-autocomplete>
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label
                                    class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >
                                    {{ 'settings.billing.document_number' | transloco }}
                                </label>
                                <input
                                    type="text"
                                    formControlName="person_documentNumber"
                                    class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                />
                            </div>

                            <div class="grid grid-cols-3 gap-4 md:col-span-2">
                                <div class="flex flex-col gap-1.5 col-span-1">
                                    <label
                                        class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                    >
                                        {{ 'settings.billing.country_code' | transloco }}
                                    </label>
                                    <input
                                        type="text"
                                        [placeholder]="
                                            'settings.billing.search_country' | transloco
                                        "
                                        [matAutocomplete]="countryCodeAutoPerson"
                                        formControlName="person_countryCode"
                                        class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                        (blur)="onCountryBlur('person')"
                                    />
                                    <mat-autocomplete
                                        #countryCodeAutoPerson="matAutocomplete"
                                        [displayWith]="displayCountryCodeFn"
                                        (optionSelected)="onCountryCodeSelected($event, 'person')"
                                    >
                                        <mat-option
                                            *ngFor="
                                                let country of filteredPersonCountryCodes | async
                                            "
                                            [value]="country"
                                        >
                                            <div class="flex items-center gap-2">
                                                <span class="text-lg">{{ country.code }}</span>
                                                <span class="text-gray-900 dark:text-white">{{
                                                    country.name
                                                }}</span>
                                            </div>
                                        </mat-option>
                                    </mat-autocomplete>
                                </div>

                                <div class="flex flex-col gap-1.5 col-span-2">
                                    <label
                                        class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                    >
                                        {{ 'settings.billing.phone' | transloco }}
                                    </label>
                                    <input
                                        type="tel"
                                        formControlName="person_phone"
                                        class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                    />
                                </div>
                            </div>

                            <div class="flex flex-col gap-1.5 md:col-span-2">
                                <label
                                    class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >
                                    {{ 'settings.billing.email' | transloco }}
                                </label>
                                <input
                                    type="email"
                                    formControlName="person_email"
                                    class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                                />
                            </div>
                        </ng-container>
                    </div>
                </div>
            </form>

            <!-- Billing Address Section -->
            <form [formGroup]="addressForm" class="flex flex-col gap-8">
                <div
                    class="bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-800 p-8"
                >
                    <div class="flex items-center gap-3 mb-6">
                        <mat-icon class="text-gray-400">home</mat-icon>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            {{ 'settings.billing.address_title' | transloco }}
                        </h3>
                        <span
                            class="ml-auto text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-500"
                        >
                            {{ 'settings.billing.address_desc' | transloco }}
                        </span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div class="flex flex-col gap-1.5 md:col-span-2">
                            <label class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                {{ 'settings.billing.address' | transloco }}
                            </label>
                            <input
                                type="text"
                                formControlName="address"
                                [placeholder]="'settings.billing.address_placeholder' | transloco"
                                class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                            />
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                {{ 'settings.billing.city' | transloco }}
                            </label>
                            <input
                                type="text"
                                formControlName="city"
                                class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                            />
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                {{ 'settings.billing.province' | transloco }}
                            </label>
                            <input
                                type="text"
                                formControlName="province"
                                class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                            />
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                {{ 'settings.billing.country' | transloco }}
                            </label>
                            <input
                                type="text"
                                formControlName="country"
                                class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                            />
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                {{ 'settings.billing.postal_code' | transloco }}
                            </label>
                            <input
                                type="text"
                                formControlName="postalCode"
                                class="h-11 px-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white transition-all"
                            />
                        </div>
                    </div>
                </div>
            </form>

            <!-- Actions -->
            <div class="flex justify-end pt-4 pb-12">
                <button
                    mat-flat-button
                    color="primary"
                    [disabled]="isSavingBilling || payerForm.invalid || addressForm.invalid"
                    class="!bg-blue-600 hover:!bg-blue-700 text-white rounded-xl px-8 h-12 text-base font-medium transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:shadow-none"
                    (click)="saveBillingConfig()"
                >
                    <mat-spinner *ngIf="isSavingBilling" diameter="24" class="mr-3"></mat-spinner>
                    {{
                        isSavingBilling
                            ? ('settings.billing.saving' | transloco)
                            : ('settings.billing.save' | transloco)
                    }}
                </button>
            </div>
        </div>
    </div>
</div>
` }]
  }], () => [{ type: FormBuilder }, { type: SettingsService }, { type: ChangeDetectorRef }, { type: MatSnackBar }, { type: TranslocoService }, { type: ActivatedRoute }, { type: Router }], { user: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingDetailsComponent, { className: "BillingDetailsComponent", filePath: "src/app/modules/settings/billing-details/billing-details.component.ts", lineNumber: 61 });
})();

// src/app/modules/settings/staff-list/staff-list.component.ts
var _c03 = ["staffFormDialog"];
var _c12 = (a0, a1, a2) => ({ "bg-blue-50 border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800": a0, "bg-amber-50 border border-amber-100 dark:bg-amber-900/20 dark:border-amber-800": a1, "bg-red-50 border border-red-100 dark:bg-red-900/20 dark:border-red-800": a2 });
var _c22 = (a0, a1, a2) => ({ "text-blue-600 dark:text-blue-400": a0, "text-amber-600 dark:text-amber-400": a1, "text-red-600 dark:text-red-400": a2 });
var _c32 = (a0, a1, a2) => ({ "text-blue-900 dark:text-blue-100": a0, "text-amber-900 dark:text-amber-100": a1, "text-red-900 dark:text-red-100": a2 });
var _c42 = (a0, a1, a2) => ({ "text-blue-700 dark:text-blue-300": a0, "text-amber-700 dark:text-amber-300": a1, "text-red-700 dark:text-red-300": a2 });
var _c52 = (a0, a1) => ({ "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400": a0, "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400": a1 });
function StaffListComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function StaffListComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.canAddMoreStaff() ? ctx_r1.openStaffModal() : null);
    });
    \u0275\u0275elementStart(2, "mat-icon", 11);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("!bg-gray-400", !ctx_r1.canAddMoreStaff())("hover:!bg-gray-400", !ctx_r1.canAddMoreStaff())("cursor-not-allowed", !ctx_r1.canAddMoreStaff());
    \u0275\u0275property("matTooltip", !ctx_r1.canAddMoreStaff() ? \u0275\u0275pipeBind1(1, 8, "settings.team.limit_reached") : "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "settings.team.add_member"), " ");
  }
}
function StaffListComponent_div_10_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementStart(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementStart(11, "span", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 8, "settings.team.limit_info_1"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedSubscription.name === "PyG" ? "PAYG" : ctx_r1.selectedSubscription.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 10, "settings.team.limit_info_2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.staffLimit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 12, "settings.team.limit_info_3"), " (");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.staffMembers.length, "/", ctx_r1.staffLimit, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 14, "settings.team.used"), ") ");
  }
}
function StaffListComponent_div_10_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "settings.team.no_plan_warning"), " ");
  }
}
function StaffListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "mat-icon", 14);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "p", 16);
    \u0275\u0275template(6, StaffListComponent_div_10_ng_container_6_Template, 15, 16, "ng-container", 17)(7, StaffListComponent_div_10_ng_container_7_Template, 3, 3, "ng-container", 17);
    \u0275\u0275elementStart(8, "a", 18);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(9, _c12, ctx_r1.hasSubscription && ctx_r1.canAddMoreStaff(), ctx_r1.hasSubscription && !ctx_r1.canAddMoreStaff(), !ctx_r1.hasSubscription));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(13, _c22, ctx_r1.hasSubscription && ctx_r1.canAddMoreStaff(), ctx_r1.hasSubscription && !ctx_r1.canAddMoreStaff(), !ctx_r1.hasSubscription));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(17, _c32, ctx_r1.hasSubscription && ctx_r1.canAddMoreStaff(), ctx_r1.hasSubscription && !ctx_r1.canAddMoreStaff(), !ctx_r1.hasSubscription));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasSubscription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasSubscription);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(21, _c42, ctx_r1.hasSubscription && ctx_r1.canAddMoreStaff(), ctx_r1.hasSubscription && !ctx_r1.canAddMoreStaff(), !ctx_r1.hasSubscription));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "settings.team.view_plans"), " ");
  }
}
function StaffListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "mat-spinner", 22);
    \u0275\u0275elementEnd();
  }
}
function StaffListComponent_div_12_ng_container_18_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 46);
  }
  if (rf & 2) {
    const staff_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", staff_r4.avatar, \u0275\u0275sanitizeUrl);
  }
}
function StaffListComponent_div_12_ng_container_18_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const staff_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStaffInitials(staff_r4.name));
  }
}
function StaffListComponent_div_12_ng_container_18_button_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 47)(1, "mat-icon", 48);
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const staffMenu_r5 = \u0275\u0275reference(20);
    \u0275\u0275property("matMenuTriggerFor", staffMenu_r5);
  }
}
function StaffListComponent_div_12_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 32)(2, "div", 33)(3, "div", 34);
    \u0275\u0275template(4, StaffListComponent_div_12_ng_container_18_img_4_Template, 1, 1, "img", 35)(5, StaffListComponent_div_12_ng_container_18_span_5_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 27)(11, "span", 38);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 39);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 40);
    \u0275\u0275template(18, StaffListComponent_div_12_ng_container_18_button_18_Template, 3, 1, "button", 41);
    \u0275\u0275elementStart(19, "mat-menu", null, 1)(21, "button", 42);
    \u0275\u0275listener("click", function StaffListComponent_div_12_ng_container_18_Template_button_click_21_listener() {
      const staff_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openStaffModal(staff_r4));
    });
    \u0275\u0275elementStart(22, "mat-icon", 43);
    \u0275\u0275text(23, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 42);
    \u0275\u0275listener("click", function StaffListComponent_div_12_ng_container_18_Template_button_click_26_listener() {
      const staff_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reinviteStaff(staff_r4));
    });
    \u0275\u0275elementStart(27, "mat-icon", 43);
    \u0275\u0275text(28, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 44);
    \u0275\u0275listener("click", function StaffListComponent_div_12_ng_container_18_Template_button_click_31_listener() {
      const staff_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteStaff(staff_r4));
    });
    \u0275\u0275elementStart(32, "mat-icon", 45);
    \u0275\u0275text(33, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const staff_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", staff_r4.avatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !staff_r4.avatar);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", staff_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", staff_r4.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.truncateEmail(staff_r4.email, 25), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(22, _c52, staff_r4.status === "active", staff_r4.status !== "active"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 12, "settings.team.status_" + (staff_r4.status || "pending")), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 14, "settings.team.role_" + staff_r4.role), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !(ctx_r1.user == null ? null : ctx_r1.user.staff) || (ctx_r1.user == null ? null : ctx_r1.user.role) === "administrador");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 16, "settings.team.edit"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 18, "settings.team.reinvite"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 20, "settings.team.remove"), " ");
  }
}
function StaffListComponent_div_12_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "mat-icon", 51);
    \u0275\u0275text(3, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 52);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 53);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "settings.team.no_members"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "settings.team.no_members_desc"), " ");
  }
}
function StaffListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 27);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 28);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 29);
    \u0275\u0275template(18, StaffListComponent_div_12_ng_container_18_Template, 36, 25, "ng-container", 30)(19, StaffListComponent_div_12_div_19_Template, 10, 6, "div", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "settings.team.name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "settings.team.email_label"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "settings.team.status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 13, "settings.team.role"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 15, "settings.team.actions"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.staffMembers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.staffMembers == null ? null : ctx_r1.staffMembers.length));
  }
}
function StaffListComponent_ng_template_13_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r7 = ctx.$implicit;
    \u0275\u0275property("value", country_r7.dialCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", country_r7.dialCode, " ", country_r7.name, " ");
  }
}
function StaffListComponent_ng_template_13_mat_spinner_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 79);
  }
}
function StaffListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "h2", 56);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 57)(6, "p", 58);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 59)(10, "label", 60);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 59)(15, "label", 60);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 63)(20, "div", 59)(21, "label", 60);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 64)(25, "select", 65);
    \u0275\u0275template(26, StaffListComponent_ng_template_13_option_26_Template, 2, 3, "option", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-icon", 67);
    \u0275\u0275text(28, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 59)(30, "label", 60);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 59)(35, "label", 60);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 64)(39, "select", 69)(40, "option", 70);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 71);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 72);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 73);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "mat-icon", 67);
    \u0275\u0275text(53, "expand_more");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 74)(55, "button", 75);
    \u0275\u0275listener("click", function StaffListComponent_ng_template_13_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeStaffDialog());
    });
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 76);
    \u0275\u0275listener("click", function StaffListComponent_ng_template_13_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveStaff());
    });
    \u0275\u0275template(59, StaffListComponent_ng_template_13_mat_spinner_59_Template, 1, 0, "mat-spinner", 77);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "transloco");
    \u0275\u0275pipe(62, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 17, ctx_r1.editingStaff ? "settings.team.edit_member" : "settings.team.add_member"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.staffForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 19, "settings.team.form_description"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 21, "settings.team.full_name"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 23, "settings.team.email"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 25, "settings.team.country_code"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.countryCodes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 27, "settings.team.phone"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 29, "settings.team.role"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 31, "settings.team.role_empleado"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 33, "settings.team.role_contabilidad"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 35, "settings.team.role_desarrollador"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 37, "settings.team.role_administrador"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 39, "settings.team.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSavingStaff || ctx_r1.staffForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSavingStaff);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSavingStaff ? \u0275\u0275pipeBind1(61, 41, "settings.team.saving") : \u0275\u0275pipeBind1(62, 43, "settings.team.save"), " ");
  }
}
var StaffListComponent = class _StaffListComponent {
  constructor(_cdr, _settingsService, _formBuilder, _countryService, _dialog, _snackBar, _translocoService) {
    this._cdr = _cdr;
    this._settingsService = _settingsService;
    this._formBuilder = _formBuilder;
    this._countryService = _countryService;
    this._dialog = _dialog;
    this._snackBar = _snackBar;
    this._translocoService = _translocoService;
    this.staffChanged = new EventEmitter();
    this._unsubscribeAll = new Subject();
    this.staffMembers = [];
    this.staffLoaded = false;
    this.isLoadingStaff = false;
    this.isSavingStaff = false;
    this.editingStaff = null;
    this.countryCodes = [];
    this.showStaffCountryDropdown = false;
    this.selectedSubscription = null;
    this.staffLimit = 0;
    this.hasSubscription = false;
    this.countryCodes = this._countryService.countryDialCodes;
    this._initStaffForm();
  }
  ngOnInit() {
    this.loadStaffData();
  }
  ngOnChanges(changes) {
    if (changes.user && !changes.user.firstChange && this.user) {
      this.loadStaffData();
    }
  }
  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  _initStaffForm() {
    this.staffForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      countryCode: ["+1"],
      phone: ["", [Validators.required, Validators.pattern(/^\d{8,15}$/)]],
      role: ["empleado"]
    });
  }
  loadStaffData() {
    if (!this.user?._id)
      return;
    this.isLoadingStaff = true;
    this._cdr.markForCheck();
    this._loadSubscription();
    this._settingsService.getStaff().pipe(finalize(() => {
      this.isLoadingStaff = false;
      this.staffLoaded = true;
      this._cdr.markForCheck();
    }), takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        this.staffMembers = response?.data || [];
      },
      error: () => {
        this.staffMembers = [];
      }
    });
  }
  _loadSubscription() {
    this._settingsService.getMySubscription(this.user._id).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        if (response?.data?.subscriptionPlan) {
          this.selectedSubscription = response.data.subscriptionPlan;
          this.hasSubscription = true;
          const chairsAddon = this.selectedSubscription.changesInPrices?.find((addon) => addon?.addOn === "chairs");
          this.staffLimit = chairsAddon?.count || 0;
        } else {
          this.selectedSubscription = { name: "PAYG" };
          this.hasSubscription = false;
          this.staffLimit = 0;
        }
        this._cdr.markForCheck();
      },
      error: () => {
        this.selectedSubscription = { name: "PAYG" };
        this.hasSubscription = false;
        this.staffLimit = 0;
        this._cdr.markForCheck();
      }
    });
  }
  canAddMoreStaff() {
    if (!this.hasSubscription || this.staffLimit === 0) {
      return false;
    }
    return this.staffMembers.length < this.staffLimit;
  }
  openStaffModal(staff) {
    this._resetStaffForm();
    if (staff) {
      this.editingStaff = staff;
      this.staffForm.patchValue({
        name: staff.name,
        email: staff.email,
        countryCode: staff.countryCode || "+1",
        phone: staff.phone,
        role: staff.role || "empleado"
      });
    }
    this.staffDialogRef = this._dialog.open(this.staffFormDialog, {
      width: "500px",
      maxWidth: "90vw"
    });
  }
  closeStaffDialog() {
    if (this.staffDialogRef) {
      this.staffDialogRef.close();
    }
    this._resetStaffForm();
  }
  _resetStaffForm() {
    this.editingStaff = null;
    this.staffForm.reset({
      name: "",
      email: "",
      countryCode: "+1",
      phone: "",
      role: "empleado"
    });
  }
  saveStaff() {
    if (this.staffForm.invalid || this.isSavingStaff)
      return;
    if (!this.editingStaff && !this.canAddMoreStaff()) {
      const message = this._translocoService.translate("settings.team.limit_reached");
      this._snackBar.open(message, null, { duration: 4e3 });
      return;
    }
    this.isSavingStaff = true;
    this._cdr.markForCheck();
    const formValue = this.staffForm.value;
    const payload = {
      name: formValue.name,
      email: formValue.email,
      countryCode: formValue.countryCode,
      phone: String(formValue.phone),
      role: formValue.role,
      client: this.user._id
    };
    const saveOperation = this.editingStaff ? this._settingsService.updateStaff(this.editingStaff._id, payload) : this._settingsService.createStaff(payload);
    saveOperation.pipe(finalize(() => {
      this.isSavingStaff = false;
      this._cdr.markForCheck();
    }), takeUntil(this._unsubscribeAll)).subscribe({
      next: () => {
        this.closeStaffDialog();
        this.loadStaffData();
        const message = this._translocoService.translate("settings.team.save_success");
        this._snackBar.open(message, null, { duration: 3e3 });
        this.staffChanged.emit();
      },
      error: (error) => {
        let message = this._translocoService.translate("settings.team.save_error");
        if (error?.error?.message === "cannot_create_staff" || error?.status === 412) {
          message = this._translocoService.translate("settings.team.no_plan_error");
        }
        this._snackBar.open(message, null, { duration: 4e3 });
      }
    });
  }
  deleteStaff(staff) {
    if (!staff?._id)
      return;
    this._settingsService.deleteStaff(staff._id).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: () => {
        this.loadStaffData();
        const message = this._translocoService.translate("settings.team.delete_success");
        this._snackBar.open(message, null, { duration: 3e3 });
        this.staffChanged.emit();
      },
      error: () => {
        const message = this._translocoService.translate("settings.team.delete_error");
        this._snackBar.open(message, null, { duration: 3e3 });
      }
    });
  }
  reinviteStaff(staff) {
    if (!staff?._id)
      return;
    this._settingsService.reinviteStaff(staff).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: () => {
        const message = this._translocoService.translate("settings.team.reinvite_success");
        this._snackBar.open(message, null, { duration: 3e3 });
      },
      error: () => {
        const message = this._translocoService.translate("settings.team.reinvite_error");
        this._snackBar.open(message, null, { duration: 3e3 });
      }
    });
  }
  getStaffInitials(name) {
    if (!name)
      return "";
    const words = name.trim().split(/\s+/);
    return words.slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
  }
  truncateEmail(email, maxLength = 25) {
    if (!email || email.length <= maxLength)
      return email;
    return email.substring(0, maxLength) + "...";
  }
  static {
    this.\u0275fac = function StaffListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StaffListComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslocoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffListComponent, selectors: [["app-staff-list"]], viewQuery: function StaffListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.staffFormDialog = _t.first);
      }
    }, inputs: { user: "user" }, outputs: { staffChanged: "staffChanged" }, features: [\u0275\u0275NgOnChangesFeature], decls: 15, vars: 10, consts: [["staffFormDialog", ""], ["staffMenu", "matMenu"], [1, "flex", "flex-col", "h-full", "min-h-[calc(100vh-200px)]"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "mt-2", "text-gray-600", "dark:text-gray-400"], ["mat-flat-button", "", "color", "primary", "class", "!bg-blue-600 hover:!bg-blue-700 text-white rounded-lg px-6 h-10", 3, "!bg-gray-400", "hover:!bg-gray-400", "cursor-not-allowed", "matTooltip", "click", 4, "ngIf"], ["class", "mb-6", 4, "ngIf"], ["class", "flex-1 flex items-center justify-center py-12", 4, "ngIf"], ["class", "content-card overflow-hidden flex-1 flex flex-col", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "!bg-blue-600", "hover:!bg-blue-700", "text-white", "rounded-lg", "px-6", "h-10", 3, "click", "matTooltip"], [1, "mr-2", 2, "width", "20px", "height", "20px", "font-size", "20px"], [1, "mb-6"], [1, "rounded-xl", "p-4", "flex", "items-start", "gap-4", 3, "ngClass"], [1, "mt-0.5", 2, "width", "24px", "height", "24px", "font-size", "24px", 3, "ngClass"], [1, "text-sm"], [3, "ngClass"], [4, "ngIf"], ["routerLink", "/subscription-plans", 1, "underline", "hover:opacity-80", "ml-1", "font-medium", 3, "ngClass"], [1, "font-bold"], [1, "font-semibold"], [1, "flex-1", "flex", "items-center", "justify-center", "py-12"], ["diameter", "32"], [1, "content-card", "overflow-hidden", "flex-1", "flex", "flex-col"], [1, "hidden", "md:grid", "grid-cols-12", "gap-4", "border-b", "border-gray-100", "dark:border-gray-700", "bg-gray-50/50", "dark:bg-gray-800/50", "px-6", "py-4", "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wider"], [1, "col-span-4"], [1, "col-span-3"], [1, "col-span-2"], [1, "col-span-1", "text-right"], [1, "divide-y", "divide-gray-100", "dark:divide-gray-700"], [4, "ngFor", "ngForOf"], ["class", "flex-1 p-12 flex flex-col items-center justify-center text-center", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-12", "gap-4", "px-6", "py-4", "items-center", "hover:bg-gray-50", "dark:hover:bg-gray-800/50", "transition-colors"], [1, "col-span-4", "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-full", "bg-gradient-to-br", "from-blue-500", "to-purple-600", "text-white", "flex", "items-center", "justify-center", "font-bold", "text-sm", "overflow-hidden", "shrink-0"], ["class", "w-full h-full object-cover", 3, "src", 4, "ngIf"], [1, "font-medium", "text-gray-900", "dark:text-white", "truncate"], [1, "col-span-3", "text-sm", "text-gray-600", "dark:text-gray-400", "truncate", 3, "matTooltip"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", 3, "ngClass"], [1, "col-span-2", "text-sm", "text-gray-600", "dark:text-gray-400", "capitalize"], [1, "col-span-1", "flex", "justify-end"], ["mat-icon-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "text-gray-400", "mr-2"], ["mat-menu-item", "", 1, "text-red-600", 3, "click"], [1, "text-red-400", "mr-2"], [1, "w-full", "h-full", "object-cover", 3, "src"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "text-gray-400"], [1, "flex-1", "p-12", "flex", "flex-col", "items-center", "justify-center", "text-center"], [1, "w-16", "h-16", "bg-gray-50", "dark:bg-gray-800", "rounded-full", "flex", "items-center", "justify-center", "mb-4"], [1, "text-gray-400", 2, "width", "32px", "height", "32px", "font-size", "32px"], [1, "text-lg", "font-medium", "text-gray-900", "dark:text-white"], [1, "text-gray-500", "mt-1", "max-w-sm"], [1, "staff-dialog", "flex", "flex-col", "bg-white", "dark:bg-gray-900"], [1, "flex", "items-center", "justify-between", "p-6", "border-b", "border-gray-100", "dark:border-gray-700"], [1, "text-xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "flex-1", "p-6", "flex", "flex-col", "gap-5", "overflow-y-auto", 3, "formGroup"], [1, "text-sm", "text-gray-500", "mb-2"], [1, "flex", "flex-col", "gap-1.5"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], ["type", "text", "formControlName", "name", "placeholder", "e.g. John Doe", 1, "h-11", "px-4", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white"], ["type", "email", "formControlName", "email", "placeholder", "e.g. john@example.com", 1, "h-11", "px-4", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white"], [1, "grid", "grid-cols-2", "gap-4"], [1, "relative"], ["formControlName", "countryCode", 1, "h-11", "pl-4", "pr-10", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "appearance-none", "text-gray-900", "dark:text-white"], [3, "value", 4, "ngFor", "ngForOf"], [1, "absolute", "right-3", "top-3", "pointer-events-none", "text-gray-400", 2, "width", "20px", "height", "20px", "font-size", "20px"], ["type", "tel", "formControlName", "phone", 1, "h-11", "px-4", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white"], ["formControlName", "role", 1, "h-11", "pl-4", "pr-10", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "appearance-none", "text-gray-900", "dark:text-white", "capitalize"], ["value", "empleado"], ["value", "contabilidad"], ["value", "desarrollador"], ["value", "administrador"], [1, "p-6", "border-t", "border-gray-100", "dark:border-gray-700", "flex", "items-center", "justify-end", "gap-3", "bg-gray-50/50", "dark:bg-gray-800/50"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "!bg-blue-600", "hover:!bg-blue-700", "text-white", 3, "click", "disabled"], ["diameter", "18", "class", "mr-2", 4, "ngIf"], [3, "value"], ["diameter", "18", 1, "mr-2"]], template: function StaffListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, StaffListComponent_button_9_Template, 6, 12, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, StaffListComponent_div_10_Template, 11, 25, "div", 7)(11, StaffListComponent_div_11_Template, 2, 0, "div", 8)(12, StaffListComponent_div_12_Template, 20, 17, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, StaffListComponent_ng_template_13_Template, 63, 45, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "settings.team.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "settings.team.subtitle"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !(ctx.user == null ? null : ctx.user.staff) || (ctx.user == null ? null : ctx.user.role) === "administrador");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedSubscription && ctx.staffLoaded);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoadingStaff);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.staffLoaded && !ctx.isLoadingStaff);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      ReactiveFormsModule,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatDialogModule,
      TranslocoModule,
      TranslocoPipe,
      RouterModule,
      RouterLink
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaffListComponent, [{
    type: Component,
    args: [{ selector: "app-staff-list", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      TranslocoModule,
      RouterModule
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="flex flex-col h-full min-h-[calc(100vh-200px)]">
    <!-- Panel Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ 'settings.team.title' | transloco }}
            </h1>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
                {{ 'settings.team.subtitle' | transloco }}
            </p>
        </div>

        <button
            *ngIf="!user?.staff || user?.role === 'administrador'"
            mat-flat-button
            color="primary"
            class="!bg-blue-600 hover:!bg-blue-700 text-white rounded-lg px-6 h-10"
            [class.!bg-gray-400]="!canAddMoreStaff()"
            [class.hover:!bg-gray-400]="!canAddMoreStaff()"
            [class.cursor-not-allowed]="!canAddMoreStaff()"
            (click)="canAddMoreStaff() ? openStaffModal() : null"
            [matTooltip]="!canAddMoreStaff() ? ('settings.team.limit_reached' | transloco) : ''"
        >
            <mat-icon class="mr-2" style="width: 20px; height: 20px; font-size: 20px">add</mat-icon>
            {{ 'settings.team.add_member' | transloco }}
        </button>
    </div>

    <!-- Staff Limit Alert -->
    <div *ngIf="selectedSubscription && staffLoaded" class="mb-6">
        <div
            class="rounded-xl p-4 flex items-start gap-4"
            [ngClass]="{
                'bg-blue-50 border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800':
                    hasSubscription && canAddMoreStaff(),
                'bg-amber-50 border border-amber-100 dark:bg-amber-900/20 dark:border-amber-800':
                    hasSubscription && !canAddMoreStaff(),
                'bg-red-50 border border-red-100 dark:bg-red-900/20 dark:border-red-800':
                    !hasSubscription,
            }"
        >
            <mat-icon
                class="mt-0.5"
                [ngClass]="{
                    'text-blue-600 dark:text-blue-400': hasSubscription && canAddMoreStaff(),
                    'text-amber-600 dark:text-amber-400': hasSubscription && !canAddMoreStaff(),
                    'text-red-600 dark:text-red-400': !hasSubscription,
                }"
                style="width: 24px; height: 24px; font-size: 24px"
                >info</mat-icon
            >
            <div class="text-sm">
                <p
                    [ngClass]="{
                        'text-blue-900 dark:text-blue-100': hasSubscription && canAddMoreStaff(),
                        'text-amber-900 dark:text-amber-100': hasSubscription && !canAddMoreStaff(),
                        'text-red-900 dark:text-red-100': !hasSubscription,
                    }"
                >
                    <ng-container *ngIf="hasSubscription">
                        {{ 'settings.team.limit_info_1' | transloco }}
                        <span class="font-bold">{{
                            selectedSubscription.name === 'PyG' ? 'PAYG' : selectedSubscription.name
                        }}</span>
                        {{ 'settings.team.limit_info_2' | transloco }}
                        <span class="font-bold">{{ staffLimit }}</span>
                        {{ 'settings.team.limit_info_3' | transloco }}
                        (<span class="font-semibold"
                            >{{ staffMembers.length }}/{{ staffLimit }}</span
                        >
                        {{ 'settings.team.used' | transloco }})
                    </ng-container>
                    <ng-container *ngIf="!hasSubscription">
                        {{ 'settings.team.no_plan_warning' | transloco }}
                    </ng-container>
                    <a
                        routerLink="/subscription-plans"
                        class="underline hover:opacity-80 ml-1 font-medium"
                        [ngClass]="{
                            'text-blue-700 dark:text-blue-300':
                                hasSubscription && canAddMoreStaff(),
                            'text-amber-700 dark:text-amber-300':
                                hasSubscription && !canAddMoreStaff(),
                            'text-red-700 dark:text-red-300': !hasSubscription,
                        }"
                    >
                        {{ 'settings.team.view_plans' | transloco }}
                    </a>
                </p>
            </div>
        </div>
    </div>

    <div *ngIf="isLoadingStaff" class="flex-1 flex items-center justify-center py-12">
        <mat-spinner diameter="32"></mat-spinner>
    </div>

    <!-- Staff List -->
    <div
        *ngIf="staffLoaded && !isLoadingStaff"
        class="content-card overflow-hidden flex-1 flex flex-col"
    >
        <!-- List Header -->
        <div
            class="hidden md:grid grid-cols-12 gap-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
        >
            <div class="col-span-4">{{ 'settings.team.name' | transloco }}</div>
            <div class="col-span-3">
                {{ 'settings.team.email_label' | transloco }}
            </div>
            <div class="col-span-2">{{ 'settings.team.status' | transloco }}</div>
            <div class="col-span-2">{{ 'settings.team.role' | transloco }}</div>
            <div class="col-span-1 text-right">
                {{ 'settings.team.actions' | transloco }}
            </div>
        </div>

        <!-- List Body -->
        <div class="divide-y divide-gray-100 dark:divide-gray-700">
            <ng-container *ngFor="let staff of staffMembers">
                <div
                    class="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                    <!-- Name -->
                    <div class="col-span-4 flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm overflow-hidden shrink-0"
                        >
                            <img
                                *ngIf="staff.avatar"
                                [src]="staff.avatar"
                                class="w-full h-full object-cover"
                            />
                            <span *ngIf="!staff.avatar">{{ getStaffInitials(staff.name) }}</span>
                        </div>
                        <div class="font-medium text-gray-900 dark:text-white truncate">
                            {{ staff.name }}
                        </div>
                    </div>

                    <!-- Email -->
                    <div
                        class="col-span-3 text-sm text-gray-600 dark:text-gray-400 truncate"
                        [matTooltip]="staff.email"
                    >
                        {{ truncateEmail(staff.email, 25) }}
                    </div>

                    <!-- Status -->
                    <div class="col-span-2">
                        <span
                            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                            [ngClass]="{
                                'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400':
                                    staff.status === 'active',
                                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400':
                                    staff.status !== 'active',
                            }"
                        >
                            {{ 'settings.team.status_' + (staff.status || 'pending') | transloco }}
                        </span>
                    </div>

                    <!-- Role -->
                    <div class="col-span-2 text-sm text-gray-600 dark:text-gray-400 capitalize">
                        {{ 'settings.team.role_' + staff.role | transloco }}
                    </div>

                    <!-- Actions -->
                    <div class="col-span-1 flex justify-end">
                        <button
                            mat-icon-button
                            [matMenuTriggerFor]="staffMenu"
                            *ngIf="!user?.staff || user?.role === 'administrador'"
                        >
                            <mat-icon class="text-gray-400">more_vert</mat-icon>
                        </button>
                        <mat-menu #staffMenu="matMenu">
                            <button mat-menu-item (click)="openStaffModal(staff)">
                                <mat-icon class="text-gray-400 mr-2">edit</mat-icon>
                                {{ 'settings.team.edit' | transloco }}
                            </button>
                            <button mat-menu-item (click)="reinviteStaff(staff)">
                                <mat-icon class="text-gray-400 mr-2">send</mat-icon>
                                {{ 'settings.team.reinvite' | transloco }}
                            </button>
                            <button mat-menu-item class="text-red-600" (click)="deleteStaff(staff)">
                                <mat-icon class="text-red-400 mr-2">delete</mat-icon>
                                {{ 'settings.team.remove' | transloco }}
                            </button>
                        </mat-menu>
                    </div>
                </div>
            </ng-container>

            <!-- Empty State -->
            <div
                *ngIf="!staffMembers?.length"
                class="flex-1 p-12 flex flex-col items-center justify-center text-center"
            >
                <div
                    class="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4"
                >
                    <mat-icon
                        class="text-gray-400"
                        style="width: 32px; height: 32px; font-size: 32px"
                        >group</mat-icon
                    >
                </div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                    {{ 'settings.team.no_members' | transloco }}
                </h3>
                <p class="text-gray-500 mt-1 max-w-sm">
                    {{ 'settings.team.no_members_desc' | transloco }}
                </p>
            </div>
        </div>
        <!-- end divide-y list body -->
    </div>
    <!-- end content-card -->
</div>

<!-- Staff Form Dialog -->
<ng-template #staffFormDialog>
    <div class="staff-dialog flex flex-col bg-white dark:bg-gray-900">
        <!-- Modal Header -->
        <div
            class="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700"
        >
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                {{
                    (editingStaff ? 'settings.team.edit_member' : 'settings.team.add_member')
                        | transloco
                }}
            </h2>
        </div>

        <!-- Modal Body -->
        <div class="flex-1 p-6 flex flex-col gap-5 overflow-y-auto" [formGroup]="staffForm">
            <p class="text-sm text-gray-500 mb-2">
                {{ 'settings.team.form_description' | transloco }}
            </p>

            <!-- Name -->
            <div class="flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {{ 'settings.team.full_name' | transloco }}
                </label>
                <input
                    type="text"
                    formControlName="name"
                    class="h-11 px-4 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white"
                    placeholder="e.g. John Doe"
                />
            </div>

            <!-- Email -->
            <div class="flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {{ 'settings.team.email' | transloco }}
                </label>
                <input
                    type="email"
                    formControlName="email"
                    class="h-11 px-4 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white"
                    placeholder="e.g. john@example.com"
                />
            </div>

            <div class="grid grid-cols-2 gap-4">
                <!-- Country Code -->
                <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {{ 'settings.team.country_code' | transloco }}
                    </label>
                    <div class="relative">
                        <select
                            formControlName="countryCode"
                            class="h-11 pl-4 pr-10 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full appearance-none text-gray-900 dark:text-white"
                        >
                            <option *ngFor="let country of countryCodes" [value]="country.dialCode">
                                {{ country.dialCode }} {{ country.name }}
                            </option>
                        </select>
                        <mat-icon
                            class="absolute right-3 top-3 pointer-events-none text-gray-400"
                            style="width: 20px; height: 20px; font-size: 20px"
                            >expand_more</mat-icon
                        >
                    </div>
                </div>

                <!-- Phone -->
                <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {{ 'settings.team.phone' | transloco }}
                    </label>
                    <input
                        type="tel"
                        formControlName="phone"
                        class="h-11 px-4 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white"
                    />
                </div>
            </div>

            <!-- Role -->
            <div class="flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {{ 'settings.team.role' | transloco }}
                </label>
                <div class="relative">
                    <select
                        formControlName="role"
                        class="h-11 pl-4 pr-10 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full appearance-none text-gray-900 dark:text-white capitalize"
                    >
                        <option value="empleado">
                            {{ 'settings.team.role_empleado' | transloco }}
                        </option>
                        <option value="contabilidad">
                            {{ 'settings.team.role_contabilidad' | transloco }}
                        </option>
                        <option value="desarrollador">
                            {{ 'settings.team.role_desarrollador' | transloco }}
                        </option>
                        <option value="administrador">
                            {{ 'settings.team.role_administrador' | transloco }}
                        </option>
                    </select>
                    <mat-icon
                        class="absolute right-3 top-3 pointer-events-none text-gray-400"
                        style="width: 20px; height: 20px; font-size: 20px"
                        >expand_more</mat-icon
                    >
                </div>
            </div>
        </div>

        <!-- Modal Footer -->
        <div
            class="p-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-end gap-3 bg-gray-50/50 dark:bg-gray-800/50"
        >
            <button mat-stroked-button (click)="closeStaffDialog()">
                {{ 'settings.team.cancel' | transloco }}
            </button>
            <button
                mat-flat-button
                color="primary"
                [disabled]="isSavingStaff || staffForm.invalid"
                class="!bg-blue-600 hover:!bg-blue-700 text-white"
                (click)="saveStaff()"
            >
                <mat-spinner *ngIf="isSavingStaff" diameter="18" class="mr-2"></mat-spinner>
                {{
                    isSavingStaff
                        ? ('settings.team.saving' | transloco)
                        : ('settings.team.save' | transloco)
                }}
            </button>
        </div>
    </div>
</ng-template>
` }]
  }], () => [{ type: ChangeDetectorRef }, { type: SettingsService }, { type: FormBuilder }, { type: CountryService }, { type: MatDialog }, { type: MatSnackBar }, { type: TranslocoService }], { user: [{
    type: Input
  }], staffChanged: [{
    type: Output
  }], staffFormDialog: [{
    type: ViewChild,
    args: ["staffFormDialog"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffListComponent, { className: "StaffListComponent", filePath: "src/app/modules/settings/staff-list/staff-list.component.ts", lineNumber: 51 });
})();

// src/app/modules/settings/settings.component.ts
var _c04 = ["deleteWorkspaceDialog"];
function SettingsComponent_ng_container_26_button_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const panel_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, panel_r3.badge), " ");
  }
}
function SettingsComponent_ng_container_26_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_26_button_6_Template_button_click_0_listener() {
      const panel_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectPanel(panel_r3.id));
    });
    \u0275\u0275element(1, "mat-icon", 27);
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_ng_container_26_button_6_span_5_Template, 3, 3, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const panel_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r3.isPanelSelected(panel_r3.id))("disabled", panel_r3.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", panel_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, panel_r3.title));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", panel_r3.badge);
  }
}
function SettingsComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 22)(2, "h3", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275template(6, SettingsComponent_ng_container_26_button_6_Template, 6, 9, "button", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const section_r5 = ctx.$implicit;
    const last_r6 = ctx.last;
    \u0275\u0275advance();
    \u0275\u0275classProp("mb-0", last_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, section_r5.title), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", section_r5.panels);
  }
}
function SettingsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "p", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r3.user == null ? null : ctx_r3.user.name == null ? null : ctx_r3.user.name.charAt(0)) || "U", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r3.user == null ? null : ctx_r3.user.name) || "User", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r3.user == null ? null : ctx_r3.user.email) || (ctx_r3.user == null ? null : ctx_r3.user.phone) || "Web2 Account", " ");
  }
}
function SettingsComponent_ng_container_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75)(2, "div", 76)(3, "mat-icon");
    \u0275\u0275text(4, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 70)(6, "h3", 77);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 78);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 79);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_30_div_8_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.dismissNewTokenAlert());
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 2, "settings.api_key.new_token_generated"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 4, "settings.api_key.copy_token_warning"), " ");
  }
}
function SettingsComponent_ng_container_30_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "button", 81);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_30_div_58_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleRenewPanel());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "settings.api_key.extend_validity"), " ");
  }
}
function SettingsComponent_ng_container_30_div_59_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_30_div_59_button_6_Template_button_click_0_listener() {
      const option_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.selectedExpiration = option_r12.value);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 92);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r3.selectedExpiration === option_r12.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r12.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "settings.api_key.months"));
  }
}
function SettingsComponent_ng_container_30_div_59_mat_spinner_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 93);
  }
}
function SettingsComponent_ng_container_30_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "label", 84);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 85);
    \u0275\u0275template(6, SettingsComponent_ng_container_30_div_59_button_6_Template, 5, 6, "button", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 87)(8, "button", 88);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_30_div_59_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleRenewPanel());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 89);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_30_div_59_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.renewToken());
    });
    \u0275\u0275template(12, SettingsComponent_ng_container_30_div_59_mat_spinner_12_Template, 1, 0, "mat-spinner", 90);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "settings.api_key.select_expiration"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.expirationOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isRenewing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "settings.api_key.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isRenewing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isRenewing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.isRenewing ? \u0275\u0275pipeBind1(14, 11, "settings.api_key.renewing") : \u0275\u0275pipeBind1(15, 13, "settings.api_key.renew_now"), " ");
  }
}
function SettingsComponent_ng_container_30_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "button", 94);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_30_div_71_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleRevokeConfirm());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "settings.api_key.revoke_all"), " ");
  }
}
function SettingsComponent_ng_container_30_div_72_mat_spinner_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 93);
  }
}
function SettingsComponent_ng_container_30_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 83)(2, "div", 96)(3, "mat-icon", 97);
    \u0275\u0275text(4, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 98);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 99);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 87)(13, "button", 88);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_30_div_72_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleRevokeConfirm());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 100);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_30_div_72_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.revokeAndGenerateNew());
    });
    \u0275\u0275template(17, SettingsComponent_ng_container_30_div_72_mat_spinner_17_Template, 1, 0, "mat-spinner", 90);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "settings.api_key.warning_title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "settings.api_key.warning_text"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.isRevoking);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 11, "settings.api_key.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isRevoking);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isRevoking);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.isRevoking ? \u0275\u0275pipeBind1(19, 13, "settings.api_key.revoking") : \u0275\u0275pipeBind1(20, 15, "settings.api_key.confirm_revoke"), " ");
  }
}
function SettingsComponent_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37)(2, "h1", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SettingsComponent_ng_container_30_div_8_Template, 15, 6, "div", 40);
    \u0275\u0275elementStart(9, "div", 41)(10, "div", 42)(11, "div", 11)(12, "div", 43)(13, "mat-icon");
    \u0275\u0275text(14, "vpn_key");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "h2", 44);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 45);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 46);
    \u0275\u0275element(23, "span", 47);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 48)(27, "div", 49)(28, "div", 50);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_30_Template_div_click_28_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToken());
    });
    \u0275\u0275elementStart(29, "code", 51);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 52)(32, "button", 53);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275listener("click", function SettingsComponent_ng_container_30_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.hidePassword = !ctx_r3.hidePassword);
    });
    \u0275\u0275elementStart(35, "mat-icon");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 53);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275listener("click", function SettingsComponent_ng_container_30_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToken());
    });
    \u0275\u0275elementStart(39, "mat-icon");
    \u0275\u0275text(40, "content_copy");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "p", 54)(42, "mat-icon", 55);
    \u0275\u0275text(43, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 56)(47, "div", 57)(48, "div", 58)(49, "div", 59)(50, "mat-icon");
    \u0275\u0275text(51, "autorenew");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "h3", 60);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "p", 61);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, SettingsComponent_ng_container_30_div_58_Template, 6, 3, "div", 62)(59, SettingsComponent_ng_container_30_div_59_Template, 16, 15, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 64)(61, "div", 58)(62, "div", 65)(63, "mat-icon");
    \u0275\u0275text(64, "sync_problem");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "h3", 60);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "p", 61);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, SettingsComponent_ng_container_30_div_71_Template, 6, 3, "div", 62)(72, SettingsComponent_ng_container_30_div_72_Template, 21, 17, "div", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 67)(74, "div", 68)(75, "div", 69)(76, "mat-icon");
    \u0275\u0275text(77, "menu_book");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 70)(79, "h3", 71);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "p", 72);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "a", 73);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "transloco");
    \u0275\u0275elementStart(88, "mat-icon");
    \u0275\u0275text(89, "open_in_new");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 22, "settings.api_key.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 24, "settings.api_key.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.showNewTokenAlert);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 26, "settings.api_key.current_token"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 28, "settings.api_key.bearer_token_info"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 30, "settings.api_key.active"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r3.hidePassword ? ctx_r3.getMaskedToken() : ctx_r3.accessToken, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", ctx_r3.hidePassword ? \u0275\u0275pipeBind1(33, 32, "settings.api_key.show_token") : \u0275\u0275pipeBind1(34, 34, "settings.api_key.hide_token"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.hidePassword ? "visibility" : "visibility_off");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(38, 36, "settings.api_key.copy_token"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 38, "settings.api_key.usage_hint"), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 40, "settings.api_key.renew_token"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 42, "settings.api_key.renew_description"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.showRenewPanel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showRenewPanel);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 44, "settings.api_key.revoke_generate"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 46, "settings.api_key.revoke_description"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.showRevokeConfirm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showRevokeConfirm);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(81, 48, "settings.api_key.need_help"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(84, 50, "settings.api_key.docs_description"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(87, 52, "settings.api_key.view_docs"), " ");
  }
}
function SettingsComponent_ng_container_31_img_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 120);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r3.avatar, \u0275\u0275sanitizeUrl);
  }
}
function SettingsComponent_ng_container_31_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getUserInitial(), " ");
  }
}
function SettingsComponent_ng_container_31_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122)(1, "button", 123);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_31_div_38_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeAvatar());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "settings.profile.remove_photo"), " ");
  }
}
function SettingsComponent_ng_container_31_form_39_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 142);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const country_r18 = ctx.$implicit;
    \u0275\u0275property("value", country_r18.dialCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", country_r18.dialCode, " ", \u0275\u0275pipeBind1(2, 3, country_r18.name), " ");
  }
}
function SettingsComponent_ng_container_31_form_39_mat_spinner_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 143);
  }
}
function SettingsComponent_ng_container_31_form_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 124)(1, "div", 103)(2, "h3", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 104);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 125)(9, "div", 126)(10, "label", 127);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 126)(15, "label", 127);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 126)(20, "label", 127);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 130)(24, "select", 131);
    \u0275\u0275template(25, SettingsComponent_ng_container_31_form_39_option_25_Template, 3, 5, "option", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-icon", 133);
    \u0275\u0275text(27, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 126)(29, "label", 127);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 135)(34, "label", 127);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 135)(39, "label", 127);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 137);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 122)(44, "button", 138);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_31_form_39_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.saveProfile());
    });
    \u0275\u0275elementStart(45, "span", 139);
    \u0275\u0275template(46, SettingsComponent_ng_container_31_form_39_mat_spinner_46_Template, 1, 0, "mat-spinner", 140);
    \u0275\u0275elementStart(47, "span", 141);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275pipe(50, "transloco");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r3.profileForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 13, "settings.profile.personal_info"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 15, "settings.profile.privacy_info"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 17, "settings.profile.full_name"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 19, "settings.profile.email"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 21, "settings.profile.prefix"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.countryCodes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 23, "settings.profile.phone"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 25, "settings.profile.company"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 27, "settings.profile.address"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.isSavingProfile || ctx_r3.profileForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isSavingProfile);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isSavingProfile ? \u0275\u0275pipeBind1(49, 29, "settings.profile.saving") : \u0275\u0275pipeBind1(50, 31, "settings.profile.save"), " ");
  }
}
function SettingsComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37)(2, "h1", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 41)(9, "div", 101)(10, "div", 102)(11, "div", 103)(12, "h3", 14);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 104);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 105)(19, "div", 106)(20, "div", 107);
    \u0275\u0275template(21, SettingsComponent_ng_container_31_img_21_Template, 1, 1, "img", 108)(22, SettingsComponent_ng_container_31_div_22_Template, 2, 1, "div", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 110)(24, "input", 111);
    \u0275\u0275listener("change", function SettingsComponent_ng_container_31_Template_input_change_24_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileBrowse($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label", 112);
    \u0275\u0275listener("drop", function SettingsComponent_ng_container_31_Template_label_drop_25_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileDropped($event));
    })("dragover", function SettingsComponent_ng_container_31_Template_label_dragover_25_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDragOver($event));
    });
    \u0275\u0275elementStart(26, "div", 113)(27, "mat-icon", 114);
    \u0275\u0275text(28, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 115)(30, "span", 116);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 117);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(38, SettingsComponent_ng_container_31_div_38_Template, 4, 3, "div", 118);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(39, SettingsComponent_ng_container_31_form_39_Template, 51, 33, "form", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, "settings.profile.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 13, "settings.profile.subtitle"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 15, "settings.profile.photo"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 17, "settings.profile.photo_desc"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.avatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.avatar);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 19, "settings.profile.drag_drop"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 21, "settings.profile.or_click"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 23, "settings.profile.file_types"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.avatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.profileLoaded);
  }
}
function SettingsComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-billing-details", 144);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("user", ctx_r3.user);
  }
}
function SettingsComponent_ng_container_33_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275element(1, "mat-spinner", 147);
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_33_div_9_img_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 160);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r3.workspaceLogo, \u0275\u0275sanitizeUrl);
  }
}
function SettingsComponent_ng_container_33_div_9_mat_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 161);
    \u0275\u0275text(1, "business");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_33_div_9_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 122)(1, "button", 123);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_33_div_9_div_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.removeWorkspaceLogo());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "settings.general.remove_logo"), " ");
  }
}
function SettingsComponent_ng_container_33_div_9_mat_spinner_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 162);
  }
}
function SettingsComponent_ng_container_33_div_9_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 163)(1, "div", 164)(2, "div")(3, "h3", 165);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 166);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 167);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_33_div_9_div_56_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openDeleteWorkspaceDialog());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "settings.general.delete_workspace"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "settings.general.delete_warning"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, "settings.general.delete_workspace"), " ");
  }
}
function SettingsComponent_ng_container_33_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 41)(2, "div", 101)(3, "div", 102)(4, "div", 103)(5, "h3", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 104);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 105)(12, "div", 106)(13, "div", 107);
    \u0275\u0275template(14, SettingsComponent_ng_container_33_div_9_img_14_Template, 1, 1, "img", 148)(15, SettingsComponent_ng_container_33_div_9_mat_icon_15_Template, 2, 0, "mat-icon", 149);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 110)(17, "input", 150);
    \u0275\u0275listener("change", function SettingsComponent_ng_container_33_div_9_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onWorkspaceLogoBrowse($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 151);
    \u0275\u0275listener("drop", function SettingsComponent_ng_container_33_div_9_Template_label_drop_18_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onWorkspaceLogoDropped($event));
    })("dragover", function SettingsComponent_ng_container_33_div_9_Template_label_dragover_18_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDragOver($event));
    });
    \u0275\u0275elementStart(19, "div", 113)(20, "mat-icon", 114);
    \u0275\u0275text(21, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 115)(23, "span", 116);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 117);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, SettingsComponent_ng_container_33_div_9_div_31_Template, 4, 3, "div", 118);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 152)(33, "div", 103)(34, "h3", 14);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p", 104);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 153)(41, "div", 126)(42, "label", 127);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 154);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_33_div_9_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.workspaceName, $event) || (ctx_r3.workspaceName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 122)(48, "button", 155);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_33_div_9_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.saveWorkspace());
    });
    \u0275\u0275elementStart(49, "span", 156);
    \u0275\u0275template(50, SettingsComponent_ng_container_33_div_9_mat_spinner_50_Template, 1, 0, "mat-spinner", 157);
    \u0275\u0275elementStart(51, "span", 158);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "transloco");
    \u0275\u0275pipe(54, "transloco");
    \u0275\u0275pipe(55, "transloco");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275template(56, SettingsComponent_ng_container_33_div_9_div_56_Template, 12, 9, "div", 159);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 17, "settings.general.logo"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 19, "settings.general.logo_desc"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r3.workspaceLogo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.workspaceLogo);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 21, "settings.profile.drag_drop"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 23, "settings.profile.or_click"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 25, "settings.profile.file_types"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.workspaceLogo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 27, "settings.general.workspace_name"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 29, "settings.general.workspace_name_desc"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 31, "settings.general.name_label"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.workspaceName);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(46, 33, "settings.general.name_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.isSavingWorkspace || !(ctx_r3.workspaceName == null ? null : ctx_r3.workspaceName.trim()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isSavingWorkspace);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isSavingWorkspace ? \u0275\u0275pipeBind1(53, 35, "settings.general.saving") : ctx_r3.workspace ? \u0275\u0275pipeBind1(54, 37, "settings.general.update") : \u0275\u0275pipeBind1(55, 39, "settings.general.create"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r3.workspace && !(ctx_r3.user == null ? null : ctx_r3.user.role) && !(ctx_r3.user == null ? null : ctx_r3.user.staff));
  }
}
function SettingsComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37)(2, "h1", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SettingsComponent_ng_container_33_div_8_Template, 2, 0, "div", 145)(9, SettingsComponent_ng_container_33_div_9_Template, 57, 41, "div", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "settings.general.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "settings.general.subtitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.workspaceLoaded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.workspaceLoaded);
  }
}
function SettingsComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-staff-list", 144);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("user", ctx_r3.user);
  }
}
function SettingsComponent_ng_template_35_mat_spinner_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 93);
  }
}
function SettingsComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168)(1, "div", 169)(2, "div", 170)(3, "mat-icon", 171);
    \u0275\u0275text(4, "warning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "h2", 172);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 173);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 174)(13, "button", 175);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 176);
    \u0275\u0275listener("click", function SettingsComponent_ng_template_35_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDeleteWorkspace());
    });
    \u0275\u0275template(17, SettingsComponent_ng_template_35_mat_spinner_17_Template, 1, 0, "mat-spinner", 90);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "settings.general.delete_workspace"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "settings.general.delete_confirm_message"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 10, "settings.general.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.isDeletingWorkspace);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isDeletingWorkspace);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.isDeletingWorkspace ? \u0275\u0275pipeBind1(19, 12, "settings.general.deleting") : \u0275\u0275pipeBind1(20, 14, "settings.general.delete_confirm"), " ");
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor(_cdr, _fuseMediaWatcherService, _snackBar, _translocoService, _settingsService, _clipboard, _formBuilder, _countryService, _route, _router, _dialog) {
    this._cdr = _cdr;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this._snackBar = _snackBar;
    this._translocoService = _translocoService;
    this._settingsService = _settingsService;
    this._clipboard = _clipboard;
    this._formBuilder = _formBuilder;
    this._countryService = _countryService;
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    this._unsubscribeAll = new Subject();
    this.drawerMode = "side";
    this.drawerOpened = true;
    this.selectedPanel = "profile";
    this.isWeb2User = false;
    this.hidePassword = true;
    this.isRenewing = false;
    this.isRevoking = false;
    this.showRenewPanel = false;
    this.showRevokeConfirm = false;
    this.selectedExpiration = 1;
    this.newlyGeneratedToken = null;
    this.showNewTokenAlert = false;
    this.expirationOptions = [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
      { value: 6, label: "6" },
      { value: 12, label: "12" },
      { value: 24, label: "24" },
      { value: 36, label: "36" }
    ];
    this.profileLoaded = false;
    this.isSavingProfile = false;
    this.avatar = null;
    this.countryCodes = [];
    this.sections = [
      {
        id: "account",
        title: "settings.sections.account",
        panels: [
          {
            id: "profile",
            icon: "heroicons_outline:user-circle",
            title: "settings.panels.profile",
            description: "settings.panels.profile_desc"
          },
          {
            id: "security",
            icon: "heroicons_outline:lock-closed",
            title: "settings.panels.security",
            description: "settings.panels.security_desc",
            badge: "settings.coming_soon",
            disabled: true
          }
        ]
      },
      {
        id: "workspace",
        title: "settings.sections.workspace",
        panels: [
          {
            id: "general",
            icon: "heroicons_outline:building-office",
            title: "settings.panels.general",
            description: "settings.panels.general_desc"
          },
          {
            id: "team",
            icon: "heroicons_outline:user-group",
            title: "settings.panels.team",
            description: "settings.panels.team_desc"
          }
        ]
      },
      {
        id: "billing",
        title: "settings.sections.billing",
        panels: [
          {
            id: "billing_details",
            icon: "heroicons_outline:credit-card",
            title: "settings.panels.billing_details",
            description: "settings.panels.billing_details_desc"
          }
        ]
      },
      {
        id: "developers",
        title: "settings.sections.developers",
        panels: [
          {
            id: "api_key",
            icon: "heroicons_outline:key",
            title: "settings.panels.api_key",
            description: "settings.panels.api_key_desc"
          },
          {
            id: "webhooks",
            icon: "heroicons_outline:globe-alt",
            title: "settings.panels.webhooks",
            description: "settings.panels.webhooks_desc",
            badge: "settings.coming_soon",
            disabled: true
          }
        ]
      }
    ];
    this._panelToSlug = {
      profile: "profile",
      security: "security",
      general: "general",
      team: "team",
      billing_details: "billing-details",
      api_key: "api-key",
      webhooks: "webhooks"
    };
    this._slugToPanel = {
      profile: "profile",
      security: "security",
      general: "general",
      team: "team",
      "billing-details": "billing_details",
      "api-key": "api_key",
      webhooks: "webhooks"
    };
    this.workspaceLoaded = false;
    this.workspace = null;
    this.workspaceName = "";
    this.workspaceLogo = null;
    this.isSavingWorkspace = false;
    this.isDeletingWorkspace = false;
    this.countryCodes = this._countryService.countryDialCodes;
    this._initProfileForm();
    this._loadUserData();
  }
  ngOnInit() {
    this._observeMediaChanges();
    this._observeRouteChanges();
  }
  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  selectPanel(panelId) {
    const panel = this._findPanel(panelId);
    if (panel?.disabled)
      return;
    const slug = this._panelToSlug[panelId] || panelId;
    this._router.navigate(["/settings", slug]);
  }
  _onPanelChanged(panelId) {
    this.selectedPanel = panelId;
    this._resetPanelStates();
    if (panelId === "general" && !this.workspaceLoaded) {
      this.loadWorkspaceData();
    }
    if (this.drawerMode === "over") {
      this.drawerOpened = false;
    }
    this._cdr.markForCheck();
  }
  isPanelSelected(panelId) {
    return this.selectedPanel === panelId;
  }
  // API Key Methods
  copyToken() {
    const tokenToCopy = this.newlyGeneratedToken || this.accessToken;
    if (!tokenToCopy)
      return;
    this._clipboard.copy(tokenToCopy);
    const message = this._translocoService.translate("settings.api_key.token_copied");
    this._snackBar.open(message, null, { duration: 2e3 });
  }
  toggleRenewPanel() {
    this.showRenewPanel = !this.showRenewPanel;
    if (this.showRenewPanel) {
      this.showRevokeConfirm = false;
    }
    this._cdr.markForCheck();
  }
  toggleRevokeConfirm() {
    this.showRevokeConfirm = !this.showRevokeConfirm;
    if (this.showRevokeConfirm) {
      this.showRenewPanel = false;
    }
    this._cdr.markForCheck();
  }
  renewToken() {
    this.isRenewing = true;
    this._cdr.markForCheck();
    this._settingsService.renewToken(this.selectedExpiration).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        if (response?.accessToken) {
          this.accessToken = response.accessToken;
          this.newlyGeneratedToken = response.accessToken;
          this.showNewTokenAlert = true;
          this.showRenewPanel = false;
          const message = this._translocoService.translate("settings.api_key.token_renewed_success");
          this._snackBar.open(message, null, { duration: 3e3 });
        }
        this.isRenewing = false;
        this._cdr.markForCheck();
      },
      error: () => {
        const message = this._translocoService.translate("settings.api_key.token_renewal_failed");
        this._snackBar.open(message, null, { duration: 3e3 });
        this.isRenewing = false;
        this._cdr.markForCheck();
      }
    });
  }
  revokeAndGenerateNew() {
    this.isRevoking = true;
    this._cdr.markForCheck();
    this._settingsService.revokeAndGenerateNew().pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        const newToken = response?.token || response?.accessToken;
        if (newToken) {
          this.accessToken = newToken;
          this.newlyGeneratedToken = newToken;
          this.showNewTokenAlert = true;
          this.showRevokeConfirm = false;
          const message = this._translocoService.translate("settings.api_key.tokens_revoked_success");
          this._snackBar.open(message, null, { duration: 3e3 });
        }
        this.isRevoking = false;
        this._cdr.markForCheck();
      },
      error: () => {
        const message = this._translocoService.translate("settings.api_key.token_revocation_failed");
        this._snackBar.open(message, null, { duration: 3e3 });
        this.isRevoking = false;
        this._cdr.markForCheck();
      }
    });
  }
  dismissNewTokenAlert() {
    this.showNewTokenAlert = false;
    this.newlyGeneratedToken = null;
    this._cdr.markForCheck();
  }
  getMaskedToken() {
    if (!this.accessToken)
      return "";
    const visibleChars = 12;
    if (this.accessToken.length <= visibleChars * 2) {
      return "\u2022".repeat(this.accessToken.length);
    }
    const start = this.accessToken.substring(0, visibleChars);
    const end = this.accessToken.substring(this.accessToken.length - visibleChars);
    const middleLength = this.accessToken.length - visibleChars * 2;
    return `${start}${"\u2022".repeat(Math.min(middleLength, 20))}${end}`;
  }
  // ============================================
  // Profile Methods
  // ============================================
  saveProfile() {
    if (this.profileForm.invalid) {
      return;
    }
    this.isSavingProfile = true;
    this._cdr.markForCheck();
    const formValue = this.profileForm.value;
    const profileData = {
      name: formValue.name,
      email: formValue.email,
      countryCode: formValue.countryCode,
      company: formValue.company,
      address: formValue.address,
      avatar: this.avatar
    };
    this._settingsService.updateProfile(this.user._id, profileData).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        if (response?.data) {
          this.user = __spreadValues(__spreadValues({}, this.user), response.data);
          const message = this._translocoService.translate("settings.profile.save_success");
          this._snackBar.open(message, null, { duration: 3e3 });
        }
        this.isSavingProfile = false;
        this._cdr.markForCheck();
      },
      error: () => {
        const message = this._translocoService.translate("settings.profile.save_error");
        this._snackBar.open(message, null, { duration: 3e3 });
        this.isSavingProfile = false;
        this._cdr.markForCheck();
      }
    });
  }
  onFileDropped(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this._processFile(files[0]);
    }
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  onFileBrowse(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this._processFile(input.files[0]);
    }
  }
  removeAvatar() {
    this.avatar = null;
    this._cdr.markForCheck();
  }
  getUserInitial() {
    return this.user?.name?.charAt(0)?.toUpperCase() || "U";
  }
  _processFile(file) {
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      const message = this._translocoService.translate("settings.profile.invalid_file_type");
      this._snackBar.open(message, null, { duration: 3e3 });
      return;
    }
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      const message = this._translocoService.translate("settings.profile.file_too_large");
      this._snackBar.open(message, null, { duration: 3e3 });
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.avatar = reader.result;
      this._cdr.markForCheck();
    };
  }
  _initProfileForm() {
    this.profileForm = this._formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      countryCode: [""],
      phone: [{ value: "", disabled: true }],
      company: [""],
      address: [""]
    });
  }
  _loadProfileData() {
    if (!this.user)
      return;
    this.profileForm.patchValue({
      name: this.user.name || "",
      email: this.user.email || "",
      countryCode: this.user.countryCode || "+1",
      phone: this.user.phone || "",
      company: this.user.company || "",
      address: this.user.address || ""
    });
    this.avatar = this.user.avatar || null;
    this.profileLoaded = true;
    this._cdr.markForCheck();
  }
  _loadUserData() {
    const userStr = localStorage.getItem("verifik_account") || localStorage.getItem("user");
    this.user = userStr ? JSON.parse(userStr) : null;
    this.accessToken = this._settingsService.accessToken;
    this.isWeb2User = !!this.user;
    if (this.user) {
      this._loadProfileData();
    }
  }
  // ============================================
  // General Settings (Workspace) Methods
  // ============================================
  loadWorkspaceData() {
    if (!this.user?._id || this.workspaceLoaded)
      return;
    this._settingsService.getWorkspace(this.user._id).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        if (response?.data) {
          this.workspace = response.data;
          this.workspaceName = response.data.name || "";
          this.workspaceLogo = response.data.avatar || null;
        }
        this.workspaceLoaded = true;
        this._cdr.markForCheck();
      },
      error: () => {
        this.workspace = null;
        this.workspaceLoaded = true;
        this._cdr.markForCheck();
      }
    });
  }
  onWorkspaceLogoDropped(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this._processWorkspaceLogo(files[0]);
    }
  }
  onWorkspaceLogoBrowse(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this._processWorkspaceLogo(input.files[0]);
    }
  }
  _processWorkspaceLogo(file) {
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      const message = this._translocoService.translate("settings.profile.invalid_file_type");
      this._snackBar.open(message, null, { duration: 3e3 });
      return;
    }
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      const message = this._translocoService.translate("settings.profile.file_too_large");
      this._snackBar.open(message, null, { duration: 3e3 });
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.workspaceLogo = reader.result;
      this._cdr.markForCheck();
    };
  }
  removeWorkspaceLogo() {
    this.workspaceLogo = null;
    this._cdr.markForCheck();
  }
  saveWorkspace() {
    if (this.isSavingWorkspace || !this.workspaceName?.trim())
      return;
    this.isSavingWorkspace = true;
    this._cdr.markForCheck();
    const payload = {
      name: this.workspaceName.trim(),
      avatar: this.workspaceLogo,
      client: this.user._id
    };
    const saveOperation = this.workspace ? this._settingsService.updateWorkspace(this.workspace._id, payload) : this._settingsService.createWorkspace(payload);
    saveOperation.pipe(finalize(() => {
      this.isSavingWorkspace = false;
      this._cdr.markForCheck();
    }), takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        if (response?.data) {
          this.workspace = response.data;
          this.user.workSpace = response.data;
          this._updateLocalStorage();
          const message = this._translocoService.translate("settings.general.save_success");
          this._snackBar.open(message, null, { duration: 3e3 });
        }
      },
      error: () => {
        const message = this._translocoService.translate("settings.general.save_error");
        this._snackBar.open(message, null, { duration: 3e3 });
      }
    });
  }
  openDeleteWorkspaceDialog() {
    if (!this.workspace)
      return;
    this._dialog.open(this.deleteWorkspaceDialog, {
      width: "500px",
      maxWidth: "90vw"
    });
  }
  confirmDeleteWorkspace() {
    if (this.isDeletingWorkspace || !this.workspace)
      return;
    this.isDeletingWorkspace = true;
    this._cdr.markForCheck();
    this._settingsService.deleteWorkspace(this.workspace._id).pipe(finalize(() => {
      this.isDeletingWorkspace = false;
      this._cdr.markForCheck();
    }), takeUntil(this._unsubscribeAll)).subscribe({
      next: () => {
        this._dialog.closeAll();
        this.workspace = null;
        this.workspaceName = "";
        this.workspaceLogo = null;
        delete this.user.workSpace;
        this._updateLocalStorage();
        const message = this._translocoService.translate("settings.general.delete_success");
        this._snackBar.open(message, null, { duration: 3e3 });
      },
      error: () => {
        const message = this._translocoService.translate("settings.general.delete_error");
        this._snackBar.open(message, null, { duration: 3e3 });
      }
    });
  }
  _updateLocalStorage() {
    const storageKey = localStorage.getItem("verifik_account") ? "verifik_account" : "user";
    localStorage.setItem(storageKey, JSON.stringify(this.user));
  }
  _observeMediaChanges() {
    this._fuseMediaWatcherService.onMediaChange$.pipe(takeUntil(this._unsubscribeAll)).subscribe(({ matchingAliases }) => {
      if (matchingAliases.includes("lg")) {
        this.drawerMode = "side";
        this.drawerOpened = true;
      } else {
        this.drawerMode = "over";
        this.drawerOpened = false;
      }
      this._cdr.markForCheck();
    });
  }
  _observeRouteChanges() {
    this._route.params.pipe(takeUntil(this._unsubscribeAll)).subscribe((params) => {
      const slug = params["panel"];
      if (slug) {
        const panelId = this._slugToPanel[slug] || slug;
        const panel = this._findPanel(panelId);
        if (panel && !panel.disabled) {
          this._onPanelChanged(panelId);
        } else {
          this._router.navigate(["/settings", "profile"], { replaceUrl: true });
        }
      }
    });
  }
  _findPanel(panelId) {
    for (const section of this.sections) {
      const panel = section.panels.find((p) => p.id === panelId);
      if (panel)
        return panel;
    }
    return void 0;
  }
  _resetPanelStates() {
    this.showRenewPanel = false;
    this.showRevokeConfirm = false;
    this.showNewTokenAlert = false;
    this.newlyGeneratedToken = null;
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FuseMediaWatcherService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslocoService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deleteWorkspaceDialog = _t.first);
      }
    }, decls: 37, vars: 18, consts: [["drawer", ""], ["deleteWorkspaceDialog", ""], [1, "settings-container", "flex", "flex-col", "flex-auto"], [1, "lg:hidden", "flex", "items-center", "justify-between", "p-4", "border-b", "border-gray-200", "bg-white"], ["mat-icon-button", "", 3, "click"], [1, "text-lg", "font-semibold"], [1, "w-10"], [1, "flex-auto"], [1, "w-72", "dark:bg-gray-900", 3, "mode", "opened"], [1, "flex", "flex-col", "h-full"], [1, "p-6", "border-b", "border-gray-200", "dark:border-gray-700"], [1, "flex", "items-center", "gap-3"], [1, "settings-header-icon"], [1, "text-white"], [1, "text-lg", "font-semibold", "text-gray-900", "dark:text-white"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex-1", "overflow-y-auto", "p-4"], [4, "ngFor", "ngForOf"], ["class", "p-4 border-t border-gray-200 dark:border-gray-700", 4, "ngIf"], [1, "flex", "flex-col", "bg-gray-50", "dark:bg-gray-900"], [1, "flex-1", "p-6", "lg:p-8", "max-w-4xl", "mx-auto", "w-full"], [4, "ngIf"], [1, "mb-6"], [1, "px-3", "mb-2", "text-xs", "font-semibold", "text-gray-400", "uppercase", "tracking-wider"], [1, "space-y-1"], ["class", "nav-item w-full", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], [1, "nav-item", "w-full", 3, "click"], [1, "nav-icon", 3, "svgIcon"], [1, "nav-label"], ["class", "nav-badge", 4, "ngIf"], [1, "nav-badge"], [1, "p-4", "border-t", "border-gray-200", "dark:border-gray-700"], [1, "flex", "items-center", "gap-3", "p-3", "rounded-lg", "bg-gray-50", "dark:bg-gray-800"], [1, "w-10", "h-10", "rounded-full", "bg-gradient-to-br", "from-blue-500", "to-purple-600", "flex", "items-center", "justify-center", "text-white", "font-semibold"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-gray-900", "dark:text-white", "truncate"], [1, "text-xs", "text-gray-500", "truncate"], [1, "mb-8"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white"], [1, "mt-2", "text-gray-600", "dark:text-gray-400"], ["class", "new-token-alert mb-6", 4, "ngIf"], [1, "content-card", "mb-6"], [1, "card-header"], [1, "card-icon", "blue"], [1, "font-semibold", "text-gray-900", "dark:text-white"], [1, "text-gray-500", "text-xs"], [1, "token-status"], [1, "status-dot"], [1, "card-body"], [1, "token-display-wrapper"], [1, "token-display", 3, "click"], [1, "token-text"], [1, "token-actions"], ["mat-icon-button", "", 1, "action-btn", 3, "click", "matTooltip"], [1, "usage-hint"], [1, "inline-icon"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "action-card"], [1, "action-card-header"], [1, "action-icon", "renew"], [1, "action-title"], [1, "action-description"], ["class", "action-footer", 4, "ngIf"], ["class", "expand-panel", 4, "ngIf"], [1, "action-card", "danger"], [1, "action-icon", "revoke"], ["class", "expand-panel danger", 4, "ngIf"], [1, "docs-card", "mt-6"], [1, "flex", "items-center", "gap-4"], [1, "docs-icon"], [1, "flex-1"], [1, "font-medium", "text-gray-900", "dark:text-white"], [1, "text-gray-500", "text-sm"], ["href", "https://docs.verifik.co/authentication/renew-your-token-jwt", "target", "_blank", "rel", "noopener noreferrer", "mat-stroked-button", "", 1, "docs-button"], [1, "new-token-alert", "mb-6"], [1, "flex", "items-start", "gap-4"], [1, "alert-icon-success"], [1, "font-semibold", "text-green-800"], [1, "text-green-700", "text-sm", "mt-1"], ["mat-icon-button", "", 1, "text-green-600", 3, "click"], [1, "action-footer"], ["mat-stroked-button", "", "color", "primary", 1, "action-button", 3, "click"], [1, "expand-panel"], [1, "panel-content"], [1, "panel-label"], [1, "expiration-grid"], ["class", "expiration-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "panel-actions"], ["mat-button", "", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", 1, "confirm-btn", 3, "click", "disabled"], ["diameter", "18", "class", "mr-2", 4, "ngIf"], [1, "expiration-option", 3, "click"], [1, "expiration-unit"], ["diameter", "18", 1, "mr-2"], ["mat-stroked-button", "", "color", "warn", 1, "action-button", "danger", 3, "click"], [1, "expand-panel", "danger"], [1, "warning-box"], [1, "warning-icon"], [1, "warning-title"], [1, "warning-text"], ["mat-flat-button", "", "color", "warn", 1, "confirm-btn", "danger", 3, "click", "disabled"], [1, "card-body", "p-0"], [1, "p-6", "border-b", "border-gray-100", "dark:border-gray-700"], [1, "flex", "flex-col", "gap-1", "mb-6"], [1, "text-sm", "text-gray-500"], [1, "flex", "flex-col", "md:flex-row", "gap-8", "items-start"], [1, "shrink-0"], [1, "w-32", "h-32", "rounded-full", "bg-gray-50", "dark:bg-gray-800", "border-2", "border-dashed", "border-gray-300", "dark:border-gray-600", "flex", "items-center", "justify-center", "overflow-hidden"], ["class", "w-full h-full object-cover", "alt", "Profile avatar", 3, "src", 4, "ngIf"], ["class", "w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-4xl font-semibold", 4, "ngIf"], [1, "flex-1", "w-full"], ["id", "avatarInput", "type", "file", "accept", ".png,.jpg,.jpeg", 1, "hidden", 3, "change"], ["for", "avatarInput", 1, "dropzone", "flex", "flex-col", "items-center", "justify-center", "w-full", "h-32", "bg-gray-50", "dark:bg-gray-800", "rounded-lg", "border-2", "border-dashed", "border-gray-300", "dark:border-gray-600", "cursor-pointer", "hover:bg-gray-100", "dark:hover:bg-gray-700", "transition-colors", "mb-3", 3, "drop", "dragover"], [1, "flex", "flex-col", "items-center", "justify-center", "pt-5", "pb-6"], [1, "text-gray-400", "mb-2", 2, "width", "32px", "height", "32px", "font-size", "32px"], [1, "mb-1", "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "font-semibold", "text-blue-600"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], ["class", "flex justify-end", 4, "ngIf"], ["class", "p-6", 3, "formGroup", 4, "ngIf"], ["alt", "Profile avatar", 1, "w-full", "h-full", "object-cover", 3, "src"], [1, "w-full", "h-full", "flex", "items-center", "justify-center", "bg-gradient-to-br", "from-blue-500", "to-purple-600", "text-white", "text-4xl", "font-semibold"], [1, "flex", "justify-end"], ["mat-stroked-button", "", "color", "warn", 1, "text-sm", 3, "click"], [1, "p-6", 3, "formGroup"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "mb-8"], [1, "flex", "flex-col", "gap-1.5"], [1, "text-sm", "font-semibold", "text-gray-700", "dark:text-gray-300"], ["type", "text", "formControlName", "name", 1, "h-11", "px-4", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white"], ["type", "email", "formControlName", "email", 1, "h-11", "px-4", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white"], [1, "relative"], ["formControlName", "countryCode", 1, "h-11", "pl-4", "pr-10", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "appearance-none", "text-gray-900", "dark:text-white"], [3, "value", 4, "ngFor", "ngForOf"], [1, "absolute", "right-3", "top-3", "pointer-events-none", "text-gray-400", 2, "width", "20px", "height", "20px", "font-size", "20px"], ["type", "text", "formControlName", "phone", 1, "h-11", "px-4", "bg-gray-100", "dark:bg-gray-700", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "text-gray-500", "cursor-not-allowed", "w-full", "focus:outline-none"], [1, "col-span-1", "md:col-span-2", "flex", "flex-col", "gap-1.5"], ["type", "text", "formControlName", "company", 1, "h-11", "px-4", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white"], ["type", "text", "formControlName", "address", 1, "h-11", "px-4", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white"], ["mat-flat-button", "", "color", "primary", 1, "!bg-blue-600", "hover:!bg-blue-700", "text-white", "px-8", "h-11", "rounded-lg", "profile-save-btn", 3, "click", "disabled"], [1, "profile-save-btn-content"], ["diameter", "18", "class", "profile-save-spinner", 4, "ngIf"], [1, "profile-save-text"], [3, "value"], ["diameter", "18", 1, "profile-save-spinner"], [3, "user"], ["class", "flex items-center justify-center py-12", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-12"], ["diameter", "32"], ["class", "w-full h-full object-cover", "alt", "Workspace logo", 3, "src", 4, "ngIf"], ["class", "text-gray-400", "style", "\n                                                        width: 40px;\n                                                        height: 40px;\n                                                        font-size: 40px;\n                                                    ", 4, "ngIf"], ["id", "workspaceLogoInput", "type", "file", "accept", ".png,.jpg,.jpeg", 1, "hidden", 3, "change"], ["for", "workspaceLogoInput", 1, "dropzone", "flex", "flex-col", "items-center", "justify-center", "w-full", "h-32", "bg-gray-50", "dark:bg-gray-800", "rounded-lg", "border-2", "border-dashed", "border-gray-300", "dark:border-gray-600", "cursor-pointer", "hover:bg-gray-100", "dark:hover:bg-gray-700", "transition-colors", "mb-3", 3, "drop", "dragover"], [1, "p-6"], [1, "flex", "flex-col", "gap-4", "max-w-lg"], ["type", "text", 1, "h-11", "px-4", "bg-gray-50", "dark:bg-gray-800", "border", "border-gray-300", "dark:border-gray-600", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "focus:border-blue-500", "w-full", "text-gray-900", "dark:text-white", 3, "ngModelChange", "ngModel", "placeholder"], ["mat-flat-button", "", "color", "primary", 1, "!bg-blue-600", "hover:!bg-blue-700", "text-white", "px-8", "h-11", "rounded-lg", "workspace-save-btn", 3, "click", "disabled"], [1, "workspace-save-btn-content"], ["diameter", "18", "class", "workspace-save-spinner", 4, "ngIf"], [1, "workspace-save-text"], ["class", "danger-zone-card", 4, "ngIf"], ["alt", "Workspace logo", 1, "w-full", "h-full", "object-cover", 3, "src"], [1, "text-gray-400", 2, "width", "40px", "height", "40px", "font-size", "40px"], ["diameter", "18", 1, "workspace-save-spinner"], [1, "danger-zone-card"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "text-lg", "font-bold", "text-red-700", "dark:text-red-400", "mb-2"], [1, "text-sm", "text-red-600/80", "dark:text-red-400/80", "max-w-2xl", "leading-relaxed"], ["mat-stroked-button", "", "color", "warn", 1, "!bg-white", "hover:!bg-red-50", "dark:!bg-red-900/20", "whitespace-nowrap", 3, "click"], [1, "delete-dialog", "flex", "flex-col", "bg-white", "dark:bg-gray-900", "p-6"], [1, "flex", "items-start", "gap-4", "mb-6"], [1, "w-12", "h-12", "rounded-full", "bg-red-100", "dark:bg-red-900/30", "flex", "items-center", "justify-center"], [1, "text-red-600", "dark:text-red-400"], [1, "text-xl", "font-bold", "text-gray-900", "dark:text-white", "mb-2"], [1, "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "justify-end", "gap-3"], ["mat-stroked-button", "", "mat-dialog-close", ""], ["mat-flat-button", "", "color", "warn", 3, "click", "disabled"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "button", 4);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.drawerOpened = !ctx.drawerOpened);
        });
        \u0275\u0275elementStart(3, "mat-icon");
        \u0275\u0275text(4, "menu");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "h1", 5);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-sidenav-container", 7)(10, "mat-sidenav", 8, 0)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "mat-icon", 13);
        \u0275\u0275text(17, "settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div")(19, "h2", 14);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p", 15);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(25, "div", 16);
        \u0275\u0275template(26, SettingsComponent_ng_container_26_Template, 7, 6, "ng-container", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, SettingsComponent_div_27_Template, 9, 3, "div", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "mat-sidenav-content", 19)(29, "div", 20);
        \u0275\u0275template(30, SettingsComponent_ng_container_30_Template, 90, 54, "ng-container", 21)(31, SettingsComponent_ng_container_31_Template, 40, 25, "ng-container", 21)(32, SettingsComponent_ng_container_32_Template, 2, 1, "ng-container", 21)(33, SettingsComponent_ng_container_33_Template, 10, 8, "ng-container", 21)(34, SettingsComponent_ng_container_34_Template, 2, 1, "ng-container", 21)(35, SettingsComponent_ng_template_35_Template, 21, 16, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, "settings.title"));
        \u0275\u0275advance(4);
        \u0275\u0275property("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 14, "settings.title"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 16, "settings.subtitle"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.sections);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.user);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.selectedPanel === "api_key");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedPanel === "profile");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedPanel === "billing_details");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedPanel === "general");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedPanel === "team");
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      DefaultValueAccessor,
      SelectControlValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatSidenavModule,
      MatSidenav,
      MatSidenavContainer,
      MatSidenavContent,
      MatSnackBarModule,
      MatTooltipModule,
      MatTooltip,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatDialogModule,
      MatDialogClose,
      MatMenuModule,
      TranslocoModule,
      TranslocoPipe,
      ClipboardModule,
      RouterModule,
      StaffListComponent,
      BillingDetailsComponent
    ], styles: [`/* src/app/modules/settings/settings.component.scss */
.settings-container {
  height: 100%;
  background:
    linear-gradient(
      180deg,
      #f8fafc 0%,
      #ffffff 100%);
}
:host-context(.dark) .settings-container {
  background:
    linear-gradient(
      180deg,
      #111827 0%,
      #1f2937 100%);
}
mat-sidenav {
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
}
:host-context(.dark) mat-sidenav {
  background: #1f2937;
  border-right-color: #374151;
}
.settings-header-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.25);
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  text-align: left;
  transition: all 0.2s ease;
  background: transparent;
  border: none;
  cursor: pointer;
}
.nav-item:hover:not(.disabled) {
  background: #f3f4f6;
}
:host-context(.dark) .nav-item:hover:not(.disabled) {
  background: #374151;
}
.nav-item.active {
  background:
    linear-gradient(
      135deg,
      #eef2ff 0%,
      #e0e7ff 100%);
}
:host-context(.dark) .nav-item.active {
  background:
    linear-gradient(
      135deg,
      #312e81 0%,
      #3730a3 100%);
}
.nav-item.active .nav-icon {
  color: #6366f1;
}
.nav-item.active .nav-label {
  color: #6366f1;
  font-weight: 600;
}
.nav-item.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.nav-icon {
  width: 20px;
  height: 20px;
  color: #6b7280;
}
:host-context(.dark) .nav-icon {
  color: #9ca3af;
}
.nav-label {
  flex: 1;
  font-size: 14px;
  color: #374151;
}
:host-context(.dark) .nav-label {
  color: #d1d5db;
}
.nav-badge {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  background: #f3f4f6;
  color: #6b7280;
  text-transform: uppercase;
}
:host-context(.dark) .nav-badge {
  background: #374151;
  color: #9ca3af;
}
.content-card {
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s ease;
}
:host-context(.dark) .content-card {
  background: #1f2937;
  border-color: #374151;
}
.content-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}
.content-card:has(.country-autocomplete-wrapper) {
  overflow: visible;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background:
    linear-gradient(
      135deg,
      #fafafa 0%,
      #f5f5f5 100%);
  border-bottom: 1px solid #e5e7eb;
}
:host-context(.dark) .card-header {
  background:
    linear-gradient(
      135deg,
      #1f2937 0%,
      #111827 100%);
  border-bottom-color: #374151;
}
.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.card-icon.blue {
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #60a5fa 100%);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}
.card-icon mat-icon {
  font-size: 20px;
  width: 20px;
  height: 20px;
  color: white !important;
}
.token-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  padding: 6px 12px;
  border-radius: 20px;
}
.token-status .status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.card-body {
  padding: 24px;
  overflow: visible;
  position: relative;
}
.token-display-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.token-display {
  flex: 1;
  background: #1e1e2e;
  border-radius: 12px;
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
}
.token-display:hover {
  background: #2d2d3f;
  transform: translateY(-1px);
}
.token-text {
  font-family:
    "SF Mono",
    "Monaco",
    "Inconsolata",
    "Roboto Mono",
    monospace;
  font-size: 13px;
  color: #a5b4fc;
  word-break: break-all;
  line-height: 1.6;
}
.token-actions {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.action-btn {
  color: #6366f1 !important;
  transition: all 0.2s ease;
}
.action-btn:hover {
  background: rgba(99, 102, 241, 0.1);
  transform: scale(1.05);
}
.usage-hint {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6b7280;
  background: #f9fafb;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px dashed #e5e7eb;
}
:host-context(.dark) .usage-hint {
  background: #374151;
  border-color: #4b5563;
  color: #9ca3af;
}
.usage-hint .inline-icon {
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: #9ca3af;
}
.action-card {
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  padding: 24px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
}
:host-context(.dark) .action-card {
  background: #1f2937;
  border-color: #374151;
}
.action-card:hover {
  border-color: #d1d5db;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}
.action-card.danger:hover {
  border-color: #fecaca;
}
.action-card-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
}
.action-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.action-icon.renew {
  background:
    linear-gradient(
      135deg,
      #dbeafe 0%,
      #bfdbfe 100%);
  color: #2563eb;
}
.action-icon.revoke {
  background:
    linear-gradient(
      135deg,
      #fee2e2 0%,
      #fecaca 100%);
  color: #dc2626;
}
.action-icon mat-icon {
  font-size: 22px;
  width: 22px;
  height: 22px;
}
.action-title {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
:host-context(.dark) .action-title {
  color: #f3f4f6;
}
.action-description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 20px;
}
.action-footer {
  padding-top: 8px;
}
.action-button {
  border-radius: 10px !important;
  font-weight: 500;
  padding: 8px 20px;
  height: auto;
  transition: all 0.2s ease;
}
.action-button mat-icon {
  margin-left: 8px;
  font-size: 18px;
  width: 18px;
  height: 18px;
}
.action-button:hover {
  transform: translateX(2px);
}
.action-button.danger {
  border-color: #fca5a5;
  color: #dc2626;
}
.action-button.danger:hover {
  background: #fef2f2;
}
.expand-panel {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
  animation: expandIn 0.3s ease-out;
}
:host-context(.dark) .expand-panel {
  border-top-color: #374151;
}
.expand-panel.danger {
  border-top-color: #fecaca;
}
@keyframes expandIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.panel-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.panel-label {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
:host-context(.dark) .panel-label {
  color: #d1d5db;
}
.expiration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(72px, 1fr));
  gap: 8px;
}
.expiration-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 8px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  font-weight: 600;
  color: #374151;
}
:host-context(.dark) .expiration-option {
  background: #1f2937;
  border-color: #374151;
  color: #d1d5db;
}
.expiration-option .expiration-unit {
  font-size: 10px;
  font-weight: 500;
  color: #9ca3af;
  text-transform: uppercase;
  margin-top: 2px;
}
.expiration-option:hover {
  border-color: #6366f1;
  background: #f5f3ff;
}
:host-context(.dark) .expiration-option:hover {
  background: #312e81;
}
.expiration-option.selected {
  border-color: #6366f1;
  background:
    linear-gradient(
      135deg,
      #eef2ff 0%,
      #e0e7ff 100%);
  color: #6366f1;
}
:host-context(.dark) .expiration-option.selected {
  background:
    linear-gradient(
      135deg,
      #312e81 0%,
      #3730a3 100%);
  color: #a5b4fc;
}
.expiration-option.selected .expiration-unit {
  color: #818cf8;
}
.panel-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 8px;
}
.confirm-btn {
  border-radius: 10px !important;
  padding: 8px 24px;
  height: auto;
  font-weight: 500;
  display: flex;
  align-items: center;
}
.confirm-btn mat-spinner {
  margin-right: 8px;
}
.confirm-btn.danger {
  background:
    linear-gradient(
      135deg,
      #ef4444 0%,
      #dc2626 100%);
}
.warning-box {
  display: flex;
  gap: 14px;
  padding: 16px;
  background:
    linear-gradient(
      135deg,
      #fef3c7 0%,
      #fde68a 100%);
  border-radius: 12px;
  border: 1px solid #f59e0b;
}
.warning-box .warning-icon {
  color: #d97706;
  font-size: 24px;
  width: 24px;
  height: 24px;
}
.warning-box .warning-title {
  font-weight: 600;
  color: #92400e;
  margin: 0 0 4px 0;
  font-size: 14px;
}
.warning-box .warning-text {
  font-size: 13px;
  color: #a16207;
  margin: 0;
  line-height: 1.5;
}
.new-token-alert {
  background:
    linear-gradient(
      135deg,
      #ecfdf5 0%,
      #d1fae5 100%);
  border: 1px solid #10b981;
  border-radius: 16px;
  padding: 20px;
  animation: slideDown 0.3s ease-out;
}
.new-token-alert .alert-icon-success {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(16, 185, 129, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
}
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.docs-card {
  background:
    linear-gradient(
      135deg,
      #f0f9ff 0%,
      #e0f2fe 100%);
  border: 1px solid #bae6fd;
  border-radius: 16px;
  padding: 20px 24px;
}
:host-context(.dark) .docs-card {
  background:
    linear-gradient(
      135deg,
      #0c4a6e 0%,
      #075985 100%);
  border-color: #0369a1;
}
.docs-card .docs-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background:
    linear-gradient(
      135deg,
      #0ea5e9 0%,
      #0284c7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.docs-card .docs-button {
  border-radius: 10px !important;
  border-color: #0ea5e9;
  color: #0369a1;
  font-weight: 500;
}
:host-context(.dark) .docs-card .docs-button {
  border-color: #38bdf8;
  color: #7dd3fc;
}
.docs-card .docs-button mat-icon {
  margin-left: 8px;
  font-size: 16px;
  width: 16px;
  height: 16px;
}
.docs-card .docs-button:hover {
  background: rgba(14, 165, 233, 0.1);
}
.coming-soon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 40px;
}
.coming-soon-container .coming-soon-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background:
    linear-gradient(
      135deg,
      #f3f4f6 0%,
      #e5e7eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
:host-context(.dark) .coming-soon-container .coming-soon-icon {
  background:
    linear-gradient(
      135deg,
      #374151 0%,
      #4b5563 100%);
}
.coming-soon-container .coming-soon-icon mat-icon {
  font-size: 40px;
  width: 40px;
  height: 40px;
  color: #9ca3af;
}
@media (max-width: 640px) {
  .token-display-wrapper {
    flex-direction: column;
    align-items: stretch;
  }
  .token-actions {
    flex-direction: row;
    justify-content: flex-end;
  }
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .expiration-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .docs-card > div {
    flex-direction: column;
    text-align: center;
  }
  .docs-card .docs-icon {
    margin: 0 auto;
  }
  .docs-card .docs-button {
    margin-top: 16px;
    width: 100%;
  }
}
.dropzone {
  transition: all 0.2s ease;
}
.dropzone:hover {
  border-color: #3b82f6;
  background: #eff6ff;
}
:host-context(.dark) .dropzone:hover {
  border-color: #60a5fa;
  background: rgba(59, 130, 246, 0.1);
}
.dropzone.dragover {
  border-color: #3b82f6;
  background: #dbeafe;
  transform: scale(1.02);
}
:host-context(.dark) .dropzone.dragover {
  border-color: #60a5fa;
  background: rgba(59, 130, 246, 0.2);
}
input:focus,
select:focus {
  border-color: #3b82f6 !important;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.avatar-preview {
  position: relative;
  overflow: hidden;
}
.avatar-preview::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      transparent 50%,
      rgba(0, 0, 0, 0.05) 100%);
  pointer-events: none;
}
.card-icon.purple {
  background:
    linear-gradient(
      135deg,
      #8b5cf6 0%,
      #a78bfa 100%);
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
}
.card-icon.green {
  background:
    linear-gradient(
      135deg,
      #10b981 0%,
      #34d399 100%);
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}
.billing-type-toggle {
  display: flex;
  gap: 12px;
  padding: 4px;
  background: #f3f4f6;
  border-radius: 12px;
}
:host-context(.dark) .billing-type-toggle {
  background: #374151;
}
.type-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
.type-btn mat-icon {
  font-size: 20px;
  width: 20px;
  height: 20px;
}
.type-btn:hover:not(.active) {
  background: rgba(255, 255, 255, 0.5);
}
:host-context(.dark) .type-btn:hover:not(.active) {
  background: rgba(75, 85, 99, 0.5);
}
.type-btn.active {
  background: #ffffff;
  color: #6366f1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
:host-context(.dark) .type-btn.active {
  background: #1f2937;
  color: #a5b4fc;
}
.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow: visible;
  position: relative;
  z-index: 1;
}
.form-field label {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}
:host-context(.dark) .form-field label {
  color: #d1d5db;
}
.form-field:has(.country-autocomplete-wrapper) {
  overflow: visible;
  z-index: 10;
}
.form-input {
  height: 44px;
  padding: 0 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  color: #111827;
  transition: all 0.2s ease;
  width: 100%;
}
:host-context(.dark) .form-input {
  background: #1f2937;
  border-color: #374151;
  color: #f3f4f6;
}
.form-input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  background: #ffffff;
}
:host-context(.dark) .form-input:focus {
  background: #111827;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}
.form-input::placeholder {
  color: #9ca3af;
}
.form-input:is(select) {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
  cursor: pointer;
}
.country-autocomplete-wrapper {
  position: relative;
  overflow: visible;
  z-index: 1;
}
.country-autocomplete-input {
  padding-right: 48px !important;
  padding-left: 16px !important;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
  text-overflow: ellipsis;
}
.country-search-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  font-size: 20px;
  width: 20px;
  height: 20px;
  pointer-events: none;
  z-index: 1;
}
.country-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 9999;
  min-width: 100%;
  width: max-content;
  max-width: 400px;
  box-sizing: border-box;
}
:host-context(.dark) .country-dropdown {
  background: #1f2937;
  border-color: #374151;
}
.country-dropdown::-webkit-scrollbar {
  width: 8px;
}
.country-dropdown::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 4px;
}
:host-context(.dark) .country-dropdown::-webkit-scrollbar-track {
  background: #374151;
}
.country-dropdown::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}
:host-context(.dark) .country-dropdown::-webkit-scrollbar-thumb {
  background: #6b7280;
}
.country-dropdown::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
.country-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.15s ease;
  width: 100%;
  box-sizing: border-box;
  min-height: 44px;
}
.country-option:first-child {
  border-radius: 12px 12px 0 0;
}
.country-option:last-child {
  border-radius: 0 0 12px 12px;
}
.country-option:hover {
  background: #f3f4f6;
}
:host-context(.dark) .country-option:hover {
  background: #374151;
}
.country-option.no-results {
  color: #9ca3af;
  cursor: default;
  justify-content: center;
  white-space: normal;
}
.country-option.no-results:hover {
  background: transparent;
}
.country-option .country-code {
  font-weight: 600;
  color: #6366f1;
  min-width: 70px;
  flex-shrink: 0;
  text-align: left;
  padding-right: 8px;
}
.country-option .country-name {
  color: #374151;
  flex: 1;
  min-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
:host-context(.dark) .country-option .country-name {
  color: #d1d5db;
}
.profile-save-btn {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.profile-save-btn .profile-save-btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.profile-save-btn .profile-save-spinner {
  flex-shrink: 0;
  margin: 0 !important;
}
.profile-save-btn .profile-save-text {
  white-space: nowrap;
}
.billing-save-btn {
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #2563eb 100%) !important;
  color: white !important;
  padding: 0 32px !important;
  height: 44px !important;
  border-radius: 12px !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.35) !important;
  transition: all 0.2s ease !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.billing-save-btn:hover:not(.disabled) {
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1d4ed8 100%) !important;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4) !important;
}
.billing-save-btn.disabled,
.billing-save-btn:disabled {
  background: #e5e7eb !important;
  color: #9ca3af !important;
  box-shadow: none !important;
  cursor: not-allowed !important;
  transform: none !important;
}
:host-context(.dark) .billing-save-btn.disabled,
:host-context(.dark) .billing-save-btn:disabled {
  background: #374151 !important;
  color: #6b7280 !important;
}
.billing-save-btn .billing-save-btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.billing-save-btn .billing-save-spinner {
  flex-shrink: 0;
  margin: 0 !important;
}
.billing-save-btn .billing-save-text {
  white-space: nowrap;
}
@media (max-width: 1024px) {
  .billing-type-toggle {
    flex-direction: column;
  }
  .type-btn {
    justify-content: flex-start;
    padding: 14px 16px;
  }
}
.workspace-save-btn {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.workspace-save-btn .workspace-save-btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.workspace-save-btn .workspace-save-spinner {
  flex-shrink: 0;
  margin: 0 !important;
}
.workspace-save-btn .workspace-save-text {
  white-space: nowrap;
}
.danger-zone-card {
  background: rgba(239, 68, 68, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(239, 68, 68, 0.15);
  padding: 24px;
}
:host-context(.dark) .danger-zone-card {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
}
.staff-dialog {
  min-width: 400px;
  max-width: 90vw;
  border-radius: 20px;
  overflow: hidden;
}
.delete-dialog {
  min-width: 400px;
  max-width: 90vw;
  border-radius: 20px;
}
@media (max-width: 768px) {
  .staff-dialog {
    min-width: 100%;
  }
  .delete-dialog {
    min-width: 100%;
  }
}
.content-card .divide-y > div:hover {
  background: rgba(99, 102, 241, 0.02);
}
:host-context(.dark) .content-card .divide-y > div:hover {
  background: rgba(99, 102, 241, 0.05);
}
.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}
.status-badge.active {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}
.status-badge.pending {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}
.status-badge.inactive {
  background: rgba(107, 114, 128, 0.1);
  color: #6b7280;
}
/*# sourceMappingURL=settings.component.css.map */
`], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      MatSnackBarModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      MatMenuModule,
      TranslocoModule,
      ClipboardModule,
      RouterModule,
      StaffListComponent,
      BillingDetailsComponent
    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="settings-container flex flex-col flex-auto">
    <!-- Mobile Header -->
    <div class="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <button mat-icon-button (click)="drawerOpened = !drawerOpened">
            <mat-icon>menu</mat-icon>
        </button>
        <h1 class="text-lg font-semibold">{{ 'settings.title' | transloco }}</h1>
        <div class="w-10"></div>
    </div>

    <mat-sidenav-container class="flex-auto">
        <!-- Sidebar -->
        <mat-sidenav
            #drawer
            [mode]="drawerMode"
            [opened]="drawerOpened"
            class="w-72 dark:bg-gray-900"
        >
            <div class="flex flex-col h-full">
                <!-- Sidebar Header -->
                <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-center gap-3">
                        <div class="settings-header-icon">
                            <mat-icon class="text-white">settings</mat-icon>
                        </div>
                        <div>
                            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                                {{ 'settings.title' | transloco }}
                            </h2>
                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                {{ 'settings.subtitle' | transloco }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Navigation Sections -->
                <div class="flex-1 overflow-y-auto p-4">
                    <ng-container *ngFor="let section of sections; let last = last">
                        <div class="mb-6" [class.mb-0]="last">
                            <h3
                                class="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider"
                            >
                                {{ section.title | transloco }}
                            </h3>

                            <div class="space-y-1">
                                <button
                                    *ngFor="let panel of section.panels"
                                    (click)="selectPanel(panel.id)"
                                    [class.active]="isPanelSelected(panel.id)"
                                    [class.disabled]="panel.disabled"
                                    class="nav-item w-full"
                                >
                                    <mat-icon [svgIcon]="panel.icon" class="nav-icon"></mat-icon>
                                    <span class="nav-label">{{ panel.title | transloco }}</span>
                                    <span *ngIf="panel.badge" class="nav-badge">
                                        {{ panel.badge | transloco }}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </ng-container>
                </div>

                <!-- User Info Footer -->
                <div *ngIf="user" class="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div class="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <div
                            class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold"
                        >
                            {{ user?.name?.charAt(0) || 'U' }}
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900 dark:text-white truncate">
                                {{ user?.name || 'User' }}
                            </p>
                            <p class="text-xs text-gray-500 truncate">
                                {{ user?.email || user?.phone || 'Web2 Account' }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </mat-sidenav>

        <!-- Main Content -->
        <mat-sidenav-content class="flex flex-col bg-gray-50 dark:bg-gray-900">
            <div class="flex-1 p-6 lg:p-8 max-w-4xl mx-auto w-full">
                <!-- API Key Panel -->
                <ng-container *ngIf="selectedPanel === 'api_key'">
                    <!-- Panel Header -->
                    <div class="mb-8">
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                            {{ 'settings.api_key.title' | transloco }}
                        </h1>
                        <p class="mt-2 text-gray-600 dark:text-gray-400">
                            {{ 'settings.api_key.subtitle' | transloco }}
                        </p>
                    </div>

                    <!-- New Token Alert -->
                    <div *ngIf="showNewTokenAlert" class="new-token-alert mb-6">
                        <div class="flex items-start gap-4">
                            <div class="alert-icon-success">
                                <mat-icon>check_circle</mat-icon>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-semibold text-green-800">
                                    {{ 'settings.api_key.new_token_generated' | transloco }}
                                </h3>
                                <p class="text-green-700 text-sm mt-1">
                                    {{ 'settings.api_key.copy_token_warning' | transloco }}
                                </p>
                            </div>
                            <button
                                mat-icon-button
                                (click)="dismissNewTokenAlert()"
                                class="text-green-600"
                            >
                                <mat-icon>close</mat-icon>
                            </button>
                        </div>
                    </div>

                    <!-- Current Token Card -->
                    <div class="content-card mb-6">
                        <div class="card-header">
                            <div class="flex items-center gap-3">
                                <div class="card-icon blue">
                                    <mat-icon>vpn_key</mat-icon>
                                </div>
                                <div>
                                    <h2 class="font-semibold text-gray-900 dark:text-white">
                                        {{ 'settings.api_key.current_token' | transloco }}
                                    </h2>
                                    <p class="text-gray-500 text-xs">
                                        {{ 'settings.api_key.bearer_token_info' | transloco }}
                                    </p>
                                </div>
                            </div>
                            <div class="token-status">
                                <span class="status-dot"></span>
                                {{ 'settings.api_key.active' | transloco }}
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="token-display-wrapper">
                                <div class="token-display" (click)="copyToken()">
                                    <code class="token-text">
                                        {{ hidePassword ? getMaskedToken() : accessToken }}
                                    </code>
                                </div>
                                <div class="token-actions">
                                    <button
                                        mat-icon-button
                                        (click)="hidePassword = !hidePassword"
                                        [matTooltip]="
                                            hidePassword
                                                ? ('settings.api_key.show_token' | transloco)
                                                : ('settings.api_key.hide_token' | transloco)
                                        "
                                        class="action-btn"
                                    >
                                        <mat-icon>{{
                                            hidePassword ? 'visibility' : 'visibility_off'
                                        }}</mat-icon>
                                    </button>
                                    <button
                                        mat-icon-button
                                        (click)="copyToken()"
                                        [matTooltip]="'settings.api_key.copy_token' | transloco"
                                        class="action-btn"
                                    >
                                        <mat-icon>content_copy</mat-icon>
                                    </button>
                                </div>
                            </div>

                            <p class="usage-hint">
                                <mat-icon class="inline-icon">info</mat-icon>
                                {{ 'settings.api_key.usage_hint' | transloco }}
                            </p>
                        </div>
                    </div>

                    <!-- Action Cards Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Renew Token Card -->
                        <div class="action-card">
                            <div class="action-card-header">
                                <div class="action-icon renew">
                                    <mat-icon>autorenew</mat-icon>
                                </div>
                                <h3 class="action-title">
                                    {{ 'settings.api_key.renew_token' | transloco }}
                                </h3>
                            </div>
                            <p class="action-description">
                                {{ 'settings.api_key.renew_description' | transloco }}
                            </p>

                            <div *ngIf="!showRenewPanel" class="action-footer">
                                <button
                                    mat-stroked-button
                                    color="primary"
                                    (click)="toggleRenewPanel()"
                                    class="action-button"
                                >
                                    {{ 'settings.api_key.extend_validity' | transloco }}
                                    <mat-icon>arrow_forward</mat-icon>
                                </button>
                            </div>

                            <!-- Renew Panel -->
                            <div *ngIf="showRenewPanel" class="expand-panel">
                                <div class="panel-content">
                                    <label class="panel-label">
                                        {{ 'settings.api_key.select_expiration' | transloco }}
                                    </label>
                                    <div class="expiration-grid">
                                        <button
                                            *ngFor="let option of expirationOptions"
                                            (click)="selectedExpiration = option.value"
                                            [class.selected]="selectedExpiration === option.value"
                                            class="expiration-option"
                                        >
                                            {{ option.label }}
                                            <span class="expiration-unit">{{
                                                'settings.api_key.months' | transloco
                                            }}</span>
                                        </button>
                                    </div>

                                    <div class="panel-actions">
                                        <button
                                            mat-button
                                            (click)="toggleRenewPanel()"
                                            [disabled]="isRenewing"
                                        >
                                            {{ 'settings.api_key.cancel' | transloco }}
                                        </button>
                                        <button
                                            mat-flat-button
                                            color="primary"
                                            (click)="renewToken()"
                                            [disabled]="isRenewing"
                                            class="confirm-btn"
                                        >
                                            <mat-spinner
                                                *ngIf="isRenewing"
                                                diameter="18"
                                                class="mr-2"
                                            ></mat-spinner>
                                            {{
                                                isRenewing
                                                    ? ('settings.api_key.renewing' | transloco)
                                                    : ('settings.api_key.renew_now' | transloco)
                                            }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Revoke & Generate New Card -->
                        <div class="action-card danger">
                            <div class="action-card-header">
                                <div class="action-icon revoke">
                                    <mat-icon>sync_problem</mat-icon>
                                </div>
                                <h3 class="action-title">
                                    {{ 'settings.api_key.revoke_generate' | transloco }}
                                </h3>
                            </div>
                            <p class="action-description">
                                {{ 'settings.api_key.revoke_description' | transloco }}
                            </p>

                            <div *ngIf="!showRevokeConfirm" class="action-footer">
                                <button
                                    mat-stroked-button
                                    color="warn"
                                    (click)="toggleRevokeConfirm()"
                                    class="action-button danger"
                                >
                                    {{ 'settings.api_key.revoke_all' | transloco }}
                                    <mat-icon>arrow_forward</mat-icon>
                                </button>
                            </div>

                            <!-- Revoke Confirmation Panel -->
                            <div *ngIf="showRevokeConfirm" class="expand-panel danger">
                                <div class="panel-content">
                                    <div class="warning-box">
                                        <mat-icon class="warning-icon">warning</mat-icon>
                                        <div>
                                            <p class="warning-title">
                                                {{ 'settings.api_key.warning_title' | transloco }}
                                            </p>
                                            <p class="warning-text">
                                                {{ 'settings.api_key.warning_text' | transloco }}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="panel-actions">
                                        <button
                                            mat-button
                                            (click)="toggleRevokeConfirm()"
                                            [disabled]="isRevoking"
                                        >
                                            {{ 'settings.api_key.cancel' | transloco }}
                                        </button>
                                        <button
                                            mat-flat-button
                                            color="warn"
                                            (click)="revokeAndGenerateNew()"
                                            [disabled]="isRevoking"
                                            class="confirm-btn danger"
                                        >
                                            <mat-spinner
                                                *ngIf="isRevoking"
                                                diameter="18"
                                                class="mr-2"
                                            ></mat-spinner>
                                            {{
                                                isRevoking
                                                    ? ('settings.api_key.revoking' | transloco)
                                                    : ('settings.api_key.confirm_revoke'
                                                      | transloco)
                                            }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Documentation Link -->
                    <div class="docs-card mt-6">
                        <div class="flex items-center gap-4">
                            <div class="docs-icon">
                                <mat-icon>menu_book</mat-icon>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-medium text-gray-900 dark:text-white">
                                    {{ 'settings.api_key.need_help' | transloco }}
                                </h3>
                                <p class="text-gray-500 text-sm">
                                    {{ 'settings.api_key.docs_description' | transloco }}
                                </p>
                            </div>
                            <a
                                href="https://docs.verifik.co/authentication/renew-your-token-jwt"
                                target="_blank"
                                rel="noopener noreferrer"
                                mat-stroked-button
                                class="docs-button"
                            >
                                {{ 'settings.api_key.view_docs' | transloco }}
                                <mat-icon>open_in_new</mat-icon>
                            </a>
                        </div>
                    </div>
                </ng-container>

                <!-- Profile Panel -->
                <ng-container *ngIf="selectedPanel === 'profile'">
                    <!-- Panel Header -->
                    <div class="mb-8">
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                            {{ 'settings.profile.title' | transloco }}
                        </h1>
                        <p class="mt-2 text-gray-600 dark:text-gray-400">
                            {{ 'settings.profile.subtitle' | transloco }}
                        </p>
                    </div>

                    <!-- Profile Card -->
                    <div class="content-card mb-6">
                        <div class="card-body p-0">
                            <!-- Photo Upload Section -->
                            <div class="p-6 border-b border-gray-100 dark:border-gray-700">
                                <div class="flex flex-col gap-1 mb-6">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                        {{ 'settings.profile.photo' | transloco }}
                                    </h3>
                                    <p class="text-sm text-gray-500">
                                        {{ 'settings.profile.photo_desc' | transloco }}
                                    </p>
                                </div>

                                <div class="flex flex-col md:flex-row gap-8 items-start">
                                    <!-- Preview Circle -->
                                    <div class="shrink-0">
                                        <div
                                            class="w-32 h-32 rounded-full bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center overflow-hidden"
                                        >
                                            <img
                                                *ngIf="avatar"
                                                [src]="avatar"
                                                class="w-full h-full object-cover"
                                                alt="Profile avatar"
                                            />
                                            <div
                                                *ngIf="!avatar"
                                                class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-4xl font-semibold"
                                            >
                                                {{ getUserInitial() }}
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Drop Zone -->
                                    <div class="flex-1 w-full">
                                        <input
                                            id="avatarInput"
                                            type="file"
                                            class="hidden"
                                            (change)="onFileBrowse($event)"
                                            accept=".png,.jpg,.jpeg"
                                        />
                                        <label
                                            for="avatarInput"
                                            class="dropzone flex flex-col items-center justify-center w-full h-32 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mb-3"
                                            (drop)="onFileDropped($event)"
                                            (dragover)="onDragOver($event)"
                                        >
                                            <div
                                                class="flex flex-col items-center justify-center pt-5 pb-6"
                                            >
                                                <mat-icon
                                                    class="text-gray-400 mb-2"
                                                    style="
                                                        width: 32px;
                                                        height: 32px;
                                                        font-size: 32px;
                                                    "
                                                    >cloud_upload</mat-icon
                                                >
                                                <p
                                                    class="mb-1 text-sm text-gray-500 dark:text-gray-400"
                                                >
                                                    <span class="font-semibold text-blue-600">{{
                                                        'settings.profile.drag_drop' | transloco
                                                    }}</span>
                                                    {{ 'settings.profile.or_click' | transloco }}
                                                </p>
                                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                                    {{ 'settings.profile.file_types' | transloco }}
                                                </p>
                                            </div>
                                        </label>

                                        <div *ngIf="avatar" class="flex justify-end">
                                            <button
                                                mat-stroked-button
                                                color="warn"
                                                (click)="removeAvatar()"
                                                class="text-sm"
                                            >
                                                {{ 'settings.profile.remove_photo' | transloco }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Personal Info Form -->
                            <form *ngIf="profileLoaded" [formGroup]="profileForm" class="p-6">
                                <div class="flex flex-col gap-1 mb-6">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                        {{ 'settings.profile.personal_info' | transloco }}
                                    </h3>
                                    <p class="text-sm text-gray-500">
                                        {{ 'settings.profile.privacy_info' | transloco }}
                                    </p>
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <!-- Name -->
                                    <div class="flex flex-col gap-1.5">
                                        <label
                                            class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                        >
                                            {{ 'settings.profile.full_name' | transloco }}
                                        </label>
                                        <input
                                            type="text"
                                            formControlName="name"
                                            class="h-11 px-4 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    <!-- Email -->
                                    <div class="flex flex-col gap-1.5">
                                        <label
                                            class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                        >
                                            {{ 'settings.profile.email' | transloco }}
                                        </label>
                                        <input
                                            type="email"
                                            formControlName="email"
                                            class="h-11 px-4 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    <!-- Country Code -->
                                    <div class="flex flex-col gap-1.5">
                                        <label
                                            class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                        >
                                            {{ 'settings.profile.prefix' | transloco }}
                                        </label>
                                        <div class="relative">
                                            <select
                                                formControlName="countryCode"
                                                class="h-11 pl-4 pr-10 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full appearance-none text-gray-900 dark:text-white"
                                            >
                                                <option
                                                    *ngFor="let country of countryCodes"
                                                    [value]="country.dialCode"
                                                >
                                                    {{ country.dialCode }}
                                                    {{ country.name | transloco }}
                                                </option>
                                            </select>
                                            <mat-icon
                                                class="absolute right-3 top-3 pointer-events-none text-gray-400"
                                                style="width: 20px; height: 20px; font-size: 20px"
                                                >expand_more</mat-icon
                                            >
                                        </div>
                                    </div>

                                    <!-- Phone -->
                                    <div class="flex flex-col gap-1.5">
                                        <label
                                            class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                        >
                                            {{ 'settings.profile.phone' | transloco }}
                                        </label>
                                        <input
                                            type="text"
                                            formControlName="phone"
                                            class="h-11 px-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 cursor-not-allowed w-full focus:outline-none"
                                        />
                                    </div>

                                    <!-- Company -->
                                    <div class="col-span-1 md:col-span-2 flex flex-col gap-1.5">
                                        <label
                                            class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                        >
                                            {{ 'settings.profile.company' | transloco }}
                                        </label>
                                        <input
                                            type="text"
                                            formControlName="company"
                                            class="h-11 px-4 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    <!-- Address -->
                                    <div class="col-span-1 md:col-span-2 flex flex-col gap-1.5">
                                        <label
                                            class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                        >
                                            {{ 'settings.profile.address' | transloco }}
                                        </label>
                                        <input
                                            type="text"
                                            formControlName="address"
                                            class="h-11 px-4 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white"
                                        />
                                    </div>
                                </div>

                                <div class="flex justify-end">
                                    <button
                                        mat-flat-button
                                        color="primary"
                                        class="!bg-blue-600 hover:!bg-blue-700 text-white px-8 h-11 rounded-lg profile-save-btn"
                                        (click)="saveProfile()"
                                        [disabled]="isSavingProfile || profileForm.invalid"
                                    >
                                        <span class="profile-save-btn-content">
                                            <mat-spinner
                                                *ngIf="isSavingProfile"
                                                diameter="18"
                                                class="profile-save-spinner"
                                            ></mat-spinner>
                                            <span class="profile-save-text">
                                                {{
                                                    isSavingProfile
                                                        ? ('settings.profile.saving' | transloco)
                                                        : ('settings.profile.save' | transloco)
                                                }}
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </ng-container>

                <!-- Billing Details Panel -->
                <ng-container *ngIf="selectedPanel === 'billing_details'">
                    <app-billing-details [user]="user"></app-billing-details>
                </ng-container>

                <!-- General Settings Panel -->
                <ng-container *ngIf="selectedPanel === 'general'">
                    <!-- Panel Header -->
                    <div class="mb-8">
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
                            {{ 'settings.general.title' | transloco }}
                        </h1>
                        <p class="mt-2 text-gray-600 dark:text-gray-400">
                            {{ 'settings.general.subtitle' | transloco }}
                        </p>
                    </div>

                    <div *ngIf="!workspaceLoaded" class="flex items-center justify-center py-12">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>

                    <div *ngIf="workspaceLoaded">
                        <!-- Workspace Card -->
                        <div class="content-card mb-6">
                            <div class="card-body p-0">
                                <!-- Logo Upload Section -->
                                <div class="p-6 border-b border-gray-100 dark:border-gray-700">
                                    <div class="flex flex-col gap-1 mb-6">
                                        <h3
                                            class="text-lg font-semibold text-gray-900 dark:text-white"
                                        >
                                            {{ 'settings.general.logo' | transloco }}
                                        </h3>
                                        <p class="text-sm text-gray-500">
                                            {{ 'settings.general.logo_desc' | transloco }}
                                        </p>
                                    </div>

                                    <div class="flex flex-col md:flex-row gap-8 items-start">
                                        <!-- Preview Circle -->
                                        <div class="shrink-0">
                                            <div
                                                class="w-32 h-32 rounded-full bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center overflow-hidden"
                                            >
                                                <img
                                                    *ngIf="workspaceLogo"
                                                    [src]="workspaceLogo"
                                                    class="w-full h-full object-cover"
                                                    alt="Workspace logo"
                                                />
                                                <mat-icon
                                                    *ngIf="!workspaceLogo"
                                                    class="text-gray-400"
                                                    style="
                                                        width: 40px;
                                                        height: 40px;
                                                        font-size: 40px;
                                                    "
                                                    >business</mat-icon
                                                >
                                            </div>
                                        </div>

                                        <!-- Drop Zone -->
                                        <div class="flex-1 w-full">
                                            <input
                                                id="workspaceLogoInput"
                                                type="file"
                                                class="hidden"
                                                (change)="onWorkspaceLogoBrowse($event)"
                                                accept=".png,.jpg,.jpeg"
                                            />
                                            <label
                                                for="workspaceLogoInput"
                                                class="dropzone flex flex-col items-center justify-center w-full h-32 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mb-3"
                                                (drop)="onWorkspaceLogoDropped($event)"
                                                (dragover)="onDragOver($event)"
                                            >
                                                <div
                                                    class="flex flex-col items-center justify-center pt-5 pb-6"
                                                >
                                                    <mat-icon
                                                        class="text-gray-400 mb-2"
                                                        style="
                                                            width: 32px;
                                                            height: 32px;
                                                            font-size: 32px;
                                                        "
                                                        >cloud_upload</mat-icon
                                                    >
                                                    <p
                                                        class="mb-1 text-sm text-gray-500 dark:text-gray-400"
                                                    >
                                                        <span class="font-semibold text-blue-600">{{
                                                            'settings.profile.drag_drop' | transloco
                                                        }}</span>
                                                        {{
                                                            'settings.profile.or_click' | transloco
                                                        }}
                                                    </p>
                                                    <p
                                                        class="text-xs text-gray-500 dark:text-gray-400"
                                                    >
                                                        {{
                                                            'settings.profile.file_types'
                                                                | transloco
                                                        }}
                                                    </p>
                                                </div>
                                            </label>

                                            <div *ngIf="workspaceLogo" class="flex justify-end">
                                                <button
                                                    mat-stroked-button
                                                    color="warn"
                                                    (click)="removeWorkspaceLogo()"
                                                    class="text-sm"
                                                >
                                                    {{ 'settings.general.remove_logo' | transloco }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Workspace Name -->
                                <div class="p-6">
                                    <div class="flex flex-col gap-1 mb-6">
                                        <h3
                                            class="text-lg font-semibold text-gray-900 dark:text-white"
                                        >
                                            {{ 'settings.general.workspace_name' | transloco }}
                                        </h3>
                                        <p class="text-sm text-gray-500">
                                            {{ 'settings.general.workspace_name_desc' | transloco }}
                                        </p>
                                    </div>

                                    <div class="flex flex-col gap-4 max-w-lg">
                                        <div class="flex flex-col gap-1.5">
                                            <label
                                                class="text-sm font-semibold text-gray-700 dark:text-gray-300"
                                            >
                                                {{ 'settings.general.name_label' | transloco }}
                                            </label>
                                            <input
                                                type="text"
                                                [(ngModel)]="workspaceName"
                                                class="h-11 px-4 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-full text-gray-900 dark:text-white"
                                                [placeholder]="
                                                    'settings.general.name_placeholder' | transloco
                                                "
                                            />
                                        </div>

                                        <div class="flex justify-end">
                                            <button
                                                mat-flat-button
                                                color="primary"
                                                class="!bg-blue-600 hover:!bg-blue-700 text-white px-8 h-11 rounded-lg workspace-save-btn"
                                                (click)="saveWorkspace()"
                                                [disabled]="
                                                    isSavingWorkspace || !workspaceName?.trim()
                                                "
                                            >
                                                <span class="workspace-save-btn-content">
                                                    <mat-spinner
                                                        *ngIf="isSavingWorkspace"
                                                        diameter="18"
                                                        class="workspace-save-spinner"
                                                    ></mat-spinner>
                                                    <span class="workspace-save-text">
                                                        {{
                                                            isSavingWorkspace
                                                                ? ('settings.general.saving'
                                                                  | transloco)
                                                                : workspace
                                                                  ? ('settings.general.update'
                                                                    | transloco)
                                                                  : ('settings.general.create'
                                                                    | transloco)
                                                        }}
                                                    </span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Danger Zone -->
                        <div
                            *ngIf="workspace && !user?.role && !user?.staff"
                            class="danger-zone-card"
                        >
                            <div class="flex items-start justify-between gap-4">
                                <div>
                                    <h3
                                        class="text-lg font-bold text-red-700 dark:text-red-400 mb-2"
                                    >
                                        {{ 'settings.general.delete_workspace' | transloco }}
                                    </h3>
                                    <p
                                        class="text-sm text-red-600/80 dark:text-red-400/80 max-w-2xl leading-relaxed"
                                    >
                                        {{ 'settings.general.delete_warning' | transloco }}
                                    </p>
                                </div>
                                <button
                                    mat-stroked-button
                                    color="warn"
                                    class="!bg-white hover:!bg-red-50 dark:!bg-red-900/20 whitespace-nowrap"
                                    (click)="openDeleteWorkspaceDialog()"
                                >
                                    {{ 'settings.general.delete_workspace' | transloco }}
                                </button>
                            </div>
                        </div>
                    </div>
                </ng-container>

                <!-- Team Management Panel -->
                <ng-container *ngIf="selectedPanel === 'team'">
                    <app-staff-list [user]="user"></app-staff-list>
                </ng-container>

                <!-- Coming Soon Placeholder -->

                <!-- Delete Workspace Dialog -->
                <ng-template #deleteWorkspaceDialog>
                    <div class="delete-dialog flex flex-col bg-white dark:bg-gray-900 p-6">
                        <div class="flex items-start gap-4 mb-6">
                            <div
                                class="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center"
                            >
                                <mat-icon class="text-red-600 dark:text-red-400">warning</mat-icon>
                            </div>
                            <div>
                                <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {{ 'settings.general.delete_workspace' | transloco }}
                                </h2>
                                <p class="text-gray-500 dark:text-gray-400">
                                    {{ 'settings.general.delete_confirm_message' | transloco }}
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center justify-end gap-3">
                            <button mat-stroked-button mat-dialog-close>
                                {{ 'settings.general.cancel' | transloco }}
                            </button>
                            <button
                                mat-flat-button
                                color="warn"
                                [disabled]="isDeletingWorkspace"
                                (click)="confirmDeleteWorkspace()"
                            >
                                <mat-spinner
                                    *ngIf="isDeletingWorkspace"
                                    diameter="18"
                                    class="mr-2"
                                ></mat-spinner>
                                {{
                                    isDeletingWorkspace
                                        ? ('settings.general.deleting' | transloco)
                                        : ('settings.general.delete_confirm' | transloco)
                                }}
                            </button>
                        </div>
                    </div>
                </ng-template>
            </div></mat-sidenav-content
        ></mat-sidenav-container
    >
</div>
`, styles: [`/* src/app/modules/settings/settings.component.scss */
.settings-container {
  height: 100%;
  background:
    linear-gradient(
      180deg,
      #f8fafc 0%,
      #ffffff 100%);
}
:host-context(.dark) .settings-container {
  background:
    linear-gradient(
      180deg,
      #111827 0%,
      #1f2937 100%);
}
mat-sidenav {
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
}
:host-context(.dark) mat-sidenav {
  background: #1f2937;
  border-right-color: #374151;
}
.settings-header-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background:
    linear-gradient(
      135deg,
      #6366f1 0%,
      #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.25);
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  text-align: left;
  transition: all 0.2s ease;
  background: transparent;
  border: none;
  cursor: pointer;
}
.nav-item:hover:not(.disabled) {
  background: #f3f4f6;
}
:host-context(.dark) .nav-item:hover:not(.disabled) {
  background: #374151;
}
.nav-item.active {
  background:
    linear-gradient(
      135deg,
      #eef2ff 0%,
      #e0e7ff 100%);
}
:host-context(.dark) .nav-item.active {
  background:
    linear-gradient(
      135deg,
      #312e81 0%,
      #3730a3 100%);
}
.nav-item.active .nav-icon {
  color: #6366f1;
}
.nav-item.active .nav-label {
  color: #6366f1;
  font-weight: 600;
}
.nav-item.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.nav-icon {
  width: 20px;
  height: 20px;
  color: #6b7280;
}
:host-context(.dark) .nav-icon {
  color: #9ca3af;
}
.nav-label {
  flex: 1;
  font-size: 14px;
  color: #374151;
}
:host-context(.dark) .nav-label {
  color: #d1d5db;
}
.nav-badge {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  background: #f3f4f6;
  color: #6b7280;
  text-transform: uppercase;
}
:host-context(.dark) .nav-badge {
  background: #374151;
  color: #9ca3af;
}
.content-card {
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s ease;
}
:host-context(.dark) .content-card {
  background: #1f2937;
  border-color: #374151;
}
.content-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}
.content-card:has(.country-autocomplete-wrapper) {
  overflow: visible;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background:
    linear-gradient(
      135deg,
      #fafafa 0%,
      #f5f5f5 100%);
  border-bottom: 1px solid #e5e7eb;
}
:host-context(.dark) .card-header {
  background:
    linear-gradient(
      135deg,
      #1f2937 0%,
      #111827 100%);
  border-bottom-color: #374151;
}
.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.card-icon.blue {
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #60a5fa 100%);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}
.card-icon mat-icon {
  font-size: 20px;
  width: 20px;
  height: 20px;
  color: white !important;
}
.token-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  padding: 6px 12px;
  border-radius: 20px;
}
.token-status .status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.card-body {
  padding: 24px;
  overflow: visible;
  position: relative;
}
.token-display-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.token-display {
  flex: 1;
  background: #1e1e2e;
  border-radius: 12px;
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
}
.token-display:hover {
  background: #2d2d3f;
  transform: translateY(-1px);
}
.token-text {
  font-family:
    "SF Mono",
    "Monaco",
    "Inconsolata",
    "Roboto Mono",
    monospace;
  font-size: 13px;
  color: #a5b4fc;
  word-break: break-all;
  line-height: 1.6;
}
.token-actions {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.action-btn {
  color: #6366f1 !important;
  transition: all 0.2s ease;
}
.action-btn:hover {
  background: rgba(99, 102, 241, 0.1);
  transform: scale(1.05);
}
.usage-hint {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6b7280;
  background: #f9fafb;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px dashed #e5e7eb;
}
:host-context(.dark) .usage-hint {
  background: #374151;
  border-color: #4b5563;
  color: #9ca3af;
}
.usage-hint .inline-icon {
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: #9ca3af;
}
.action-card {
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
  padding: 24px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
}
:host-context(.dark) .action-card {
  background: #1f2937;
  border-color: #374151;
}
.action-card:hover {
  border-color: #d1d5db;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}
.action-card.danger:hover {
  border-color: #fecaca;
}
.action-card-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
}
.action-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.action-icon.renew {
  background:
    linear-gradient(
      135deg,
      #dbeafe 0%,
      #bfdbfe 100%);
  color: #2563eb;
}
.action-icon.revoke {
  background:
    linear-gradient(
      135deg,
      #fee2e2 0%,
      #fecaca 100%);
  color: #dc2626;
}
.action-icon mat-icon {
  font-size: 22px;
  width: 22px;
  height: 22px;
}
.action-title {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0;
}
:host-context(.dark) .action-title {
  color: #f3f4f6;
}
.action-description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 20px;
}
.action-footer {
  padding-top: 8px;
}
.action-button {
  border-radius: 10px !important;
  font-weight: 500;
  padding: 8px 20px;
  height: auto;
  transition: all 0.2s ease;
}
.action-button mat-icon {
  margin-left: 8px;
  font-size: 18px;
  width: 18px;
  height: 18px;
}
.action-button:hover {
  transform: translateX(2px);
}
.action-button.danger {
  border-color: #fca5a5;
  color: #dc2626;
}
.action-button.danger:hover {
  background: #fef2f2;
}
.expand-panel {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
  animation: expandIn 0.3s ease-out;
}
:host-context(.dark) .expand-panel {
  border-top-color: #374151;
}
.expand-panel.danger {
  border-top-color: #fecaca;
}
@keyframes expandIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.panel-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.panel-label {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
:host-context(.dark) .panel-label {
  color: #d1d5db;
}
.expiration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(72px, 1fr));
  gap: 8px;
}
.expiration-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 8px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  font-weight: 600;
  color: #374151;
}
:host-context(.dark) .expiration-option {
  background: #1f2937;
  border-color: #374151;
  color: #d1d5db;
}
.expiration-option .expiration-unit {
  font-size: 10px;
  font-weight: 500;
  color: #9ca3af;
  text-transform: uppercase;
  margin-top: 2px;
}
.expiration-option:hover {
  border-color: #6366f1;
  background: #f5f3ff;
}
:host-context(.dark) .expiration-option:hover {
  background: #312e81;
}
.expiration-option.selected {
  border-color: #6366f1;
  background:
    linear-gradient(
      135deg,
      #eef2ff 0%,
      #e0e7ff 100%);
  color: #6366f1;
}
:host-context(.dark) .expiration-option.selected {
  background:
    linear-gradient(
      135deg,
      #312e81 0%,
      #3730a3 100%);
  color: #a5b4fc;
}
.expiration-option.selected .expiration-unit {
  color: #818cf8;
}
.panel-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 8px;
}
.confirm-btn {
  border-radius: 10px !important;
  padding: 8px 24px;
  height: auto;
  font-weight: 500;
  display: flex;
  align-items: center;
}
.confirm-btn mat-spinner {
  margin-right: 8px;
}
.confirm-btn.danger {
  background:
    linear-gradient(
      135deg,
      #ef4444 0%,
      #dc2626 100%);
}
.warning-box {
  display: flex;
  gap: 14px;
  padding: 16px;
  background:
    linear-gradient(
      135deg,
      #fef3c7 0%,
      #fde68a 100%);
  border-radius: 12px;
  border: 1px solid #f59e0b;
}
.warning-box .warning-icon {
  color: #d97706;
  font-size: 24px;
  width: 24px;
  height: 24px;
}
.warning-box .warning-title {
  font-weight: 600;
  color: #92400e;
  margin: 0 0 4px 0;
  font-size: 14px;
}
.warning-box .warning-text {
  font-size: 13px;
  color: #a16207;
  margin: 0;
  line-height: 1.5;
}
.new-token-alert {
  background:
    linear-gradient(
      135deg,
      #ecfdf5 0%,
      #d1fae5 100%);
  border: 1px solid #10b981;
  border-radius: 16px;
  padding: 20px;
  animation: slideDown 0.3s ease-out;
}
.new-token-alert .alert-icon-success {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(16, 185, 129, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
}
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.docs-card {
  background:
    linear-gradient(
      135deg,
      #f0f9ff 0%,
      #e0f2fe 100%);
  border: 1px solid #bae6fd;
  border-radius: 16px;
  padding: 20px 24px;
}
:host-context(.dark) .docs-card {
  background:
    linear-gradient(
      135deg,
      #0c4a6e 0%,
      #075985 100%);
  border-color: #0369a1;
}
.docs-card .docs-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background:
    linear-gradient(
      135deg,
      #0ea5e9 0%,
      #0284c7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.docs-card .docs-button {
  border-radius: 10px !important;
  border-color: #0ea5e9;
  color: #0369a1;
  font-weight: 500;
}
:host-context(.dark) .docs-card .docs-button {
  border-color: #38bdf8;
  color: #7dd3fc;
}
.docs-card .docs-button mat-icon {
  margin-left: 8px;
  font-size: 16px;
  width: 16px;
  height: 16px;
}
.docs-card .docs-button:hover {
  background: rgba(14, 165, 233, 0.1);
}
.coming-soon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 40px;
}
.coming-soon-container .coming-soon-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background:
    linear-gradient(
      135deg,
      #f3f4f6 0%,
      #e5e7eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
:host-context(.dark) .coming-soon-container .coming-soon-icon {
  background:
    linear-gradient(
      135deg,
      #374151 0%,
      #4b5563 100%);
}
.coming-soon-container .coming-soon-icon mat-icon {
  font-size: 40px;
  width: 40px;
  height: 40px;
  color: #9ca3af;
}
@media (max-width: 640px) {
  .token-display-wrapper {
    flex-direction: column;
    align-items: stretch;
  }
  .token-actions {
    flex-direction: row;
    justify-content: flex-end;
  }
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .expiration-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .docs-card > div {
    flex-direction: column;
    text-align: center;
  }
  .docs-card .docs-icon {
    margin: 0 auto;
  }
  .docs-card .docs-button {
    margin-top: 16px;
    width: 100%;
  }
}
.dropzone {
  transition: all 0.2s ease;
}
.dropzone:hover {
  border-color: #3b82f6;
  background: #eff6ff;
}
:host-context(.dark) .dropzone:hover {
  border-color: #60a5fa;
  background: rgba(59, 130, 246, 0.1);
}
.dropzone.dragover {
  border-color: #3b82f6;
  background: #dbeafe;
  transform: scale(1.02);
}
:host-context(.dark) .dropzone.dragover {
  border-color: #60a5fa;
  background: rgba(59, 130, 246, 0.2);
}
input:focus,
select:focus {
  border-color: #3b82f6 !important;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.avatar-preview {
  position: relative;
  overflow: hidden;
}
.avatar-preview::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      transparent 50%,
      rgba(0, 0, 0, 0.05) 100%);
  pointer-events: none;
}
.card-icon.purple {
  background:
    linear-gradient(
      135deg,
      #8b5cf6 0%,
      #a78bfa 100%);
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
}
.card-icon.green {
  background:
    linear-gradient(
      135deg,
      #10b981 0%,
      #34d399 100%);
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}
.billing-type-toggle {
  display: flex;
  gap: 12px;
  padding: 4px;
  background: #f3f4f6;
  border-radius: 12px;
}
:host-context(.dark) .billing-type-toggle {
  background: #374151;
}
.type-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}
.type-btn mat-icon {
  font-size: 20px;
  width: 20px;
  height: 20px;
}
.type-btn:hover:not(.active) {
  background: rgba(255, 255, 255, 0.5);
}
:host-context(.dark) .type-btn:hover:not(.active) {
  background: rgba(75, 85, 99, 0.5);
}
.type-btn.active {
  background: #ffffff;
  color: #6366f1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
:host-context(.dark) .type-btn.active {
  background: #1f2937;
  color: #a5b4fc;
}
.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow: visible;
  position: relative;
  z-index: 1;
}
.form-field label {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}
:host-context(.dark) .form-field label {
  color: #d1d5db;
}
.form-field:has(.country-autocomplete-wrapper) {
  overflow: visible;
  z-index: 10;
}
.form-input {
  height: 44px;
  padding: 0 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  color: #111827;
  transition: all 0.2s ease;
  width: 100%;
}
:host-context(.dark) .form-input {
  background: #1f2937;
  border-color: #374151;
  color: #f3f4f6;
}
.form-input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  background: #ffffff;
}
:host-context(.dark) .form-input:focus {
  background: #111827;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}
.form-input::placeholder {
  color: #9ca3af;
}
.form-input:is(select) {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
  cursor: pointer;
}
.country-autocomplete-wrapper {
  position: relative;
  overflow: visible;
  z-index: 1;
}
.country-autocomplete-input {
  padding-right: 48px !important;
  padding-left: 16px !important;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
  text-overflow: ellipsis;
}
.country-search-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  font-size: 20px;
  width: 20px;
  height: 20px;
  pointer-events: none;
  z-index: 1;
}
.country-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 9999;
  min-width: 100%;
  width: max-content;
  max-width: 400px;
  box-sizing: border-box;
}
:host-context(.dark) .country-dropdown {
  background: #1f2937;
  border-color: #374151;
}
.country-dropdown::-webkit-scrollbar {
  width: 8px;
}
.country-dropdown::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 4px;
}
:host-context(.dark) .country-dropdown::-webkit-scrollbar-track {
  background: #374151;
}
.country-dropdown::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}
:host-context(.dark) .country-dropdown::-webkit-scrollbar-thumb {
  background: #6b7280;
}
.country-dropdown::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
.country-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.15s ease;
  width: 100%;
  box-sizing: border-box;
  min-height: 44px;
}
.country-option:first-child {
  border-radius: 12px 12px 0 0;
}
.country-option:last-child {
  border-radius: 0 0 12px 12px;
}
.country-option:hover {
  background: #f3f4f6;
}
:host-context(.dark) .country-option:hover {
  background: #374151;
}
.country-option.no-results {
  color: #9ca3af;
  cursor: default;
  justify-content: center;
  white-space: normal;
}
.country-option.no-results:hover {
  background: transparent;
}
.country-option .country-code {
  font-weight: 600;
  color: #6366f1;
  min-width: 70px;
  flex-shrink: 0;
  text-align: left;
  padding-right: 8px;
}
.country-option .country-name {
  color: #374151;
  flex: 1;
  min-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
:host-context(.dark) .country-option .country-name {
  color: #d1d5db;
}
.profile-save-btn {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.profile-save-btn .profile-save-btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.profile-save-btn .profile-save-spinner {
  flex-shrink: 0;
  margin: 0 !important;
}
.profile-save-btn .profile-save-text {
  white-space: nowrap;
}
.billing-save-btn {
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #2563eb 100%) !important;
  color: white !important;
  padding: 0 32px !important;
  height: 44px !important;
  border-radius: 12px !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.35) !important;
  transition: all 0.2s ease !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.billing-save-btn:hover:not(.disabled) {
  background:
    linear-gradient(
      135deg,
      #2563eb 0%,
      #1d4ed8 100%) !important;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4) !important;
}
.billing-save-btn.disabled,
.billing-save-btn:disabled {
  background: #e5e7eb !important;
  color: #9ca3af !important;
  box-shadow: none !important;
  cursor: not-allowed !important;
  transform: none !important;
}
:host-context(.dark) .billing-save-btn.disabled,
:host-context(.dark) .billing-save-btn:disabled {
  background: #374151 !important;
  color: #6b7280 !important;
}
.billing-save-btn .billing-save-btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.billing-save-btn .billing-save-spinner {
  flex-shrink: 0;
  margin: 0 !important;
}
.billing-save-btn .billing-save-text {
  white-space: nowrap;
}
@media (max-width: 1024px) {
  .billing-type-toggle {
    flex-direction: column;
  }
  .type-btn {
    justify-content: flex-start;
    padding: 14px 16px;
  }
}
.workspace-save-btn {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.workspace-save-btn .workspace-save-btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.workspace-save-btn .workspace-save-spinner {
  flex-shrink: 0;
  margin: 0 !important;
}
.workspace-save-btn .workspace-save-text {
  white-space: nowrap;
}
.danger-zone-card {
  background: rgba(239, 68, 68, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(239, 68, 68, 0.15);
  padding: 24px;
}
:host-context(.dark) .danger-zone-card {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
}
.staff-dialog {
  min-width: 400px;
  max-width: 90vw;
  border-radius: 20px;
  overflow: hidden;
}
.delete-dialog {
  min-width: 400px;
  max-width: 90vw;
  border-radius: 20px;
}
@media (max-width: 768px) {
  .staff-dialog {
    min-width: 100%;
  }
  .delete-dialog {
    min-width: 100%;
  }
}
.content-card .divide-y > div:hover {
  background: rgba(99, 102, 241, 0.02);
}
:host-context(.dark) .content-card .divide-y > div:hover {
  background: rgba(99, 102, 241, 0.05);
}
.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}
.status-badge.active {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}
.status-badge.pending {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}
.status-badge.inactive {
  background: rgba(107, 114, 128, 0.1);
  color: #6b7280;
}
/*# sourceMappingURL=settings.component.css.map */
`] }]
  }], () => [{ type: ChangeDetectorRef }, { type: FuseMediaWatcherService }, { type: MatSnackBar }, { type: TranslocoService }, { type: SettingsService }, { type: Clipboard }, { type: FormBuilder }, { type: CountryService }, { type: ActivatedRoute }, { type: Router }, { type: MatDialog }], { deleteWorkspaceDialog: [{
    type: ViewChild,
    args: ["deleteWorkspaceDialog"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/modules/settings/settings.component.ts", lineNumber: 84 });
})();

// src/app/modules/settings/settings.routes.ts
var settings_routes_default = [
  // Redirect empty settings path to profile
  { path: "", redirectTo: "profile", pathMatch: "full" },
  // All panels use the same component, the :panel param determines which one to show
  { path: ":panel", component: SettingsComponent }
];
export {
  settings_routes_default as default
};
//# sourceMappingURL=chunk-JHQURJYW.js.map
