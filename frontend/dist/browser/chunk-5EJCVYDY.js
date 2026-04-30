import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-DBYYWGBF.js";
import {
  getStepDisplayFields,
  sortStepExportFieldLabels
} from "./chunk-RJ42CGUZ.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-VSTHZNYV.js";
import {
  utils,
  writeFileSync
} from "./chunk-D7QPQFDG.js";
import {
  SmartBatchService
} from "./chunk-OZON7ZNM.js";
import {
  ReportBuilderPreviewDataService,
  ReportPreviewComponent,
  SendSampleModalComponent
} from "./chunk-F4WLFQ35.js";
import {
  SmartReportService
} from "./chunk-UCAADIB3.js";
import {
  BaseComponentWrapper,
  VanillaFrameworkOverrides,
  _BOOLEAN_MIXED_GRID_OPTIONS,
  _combineAttributesAndGridOptions,
  _processOnChange,
  _removeFromParent,
  createGrid
} from "./chunk-YSKHROX2.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-QRUO2OAL.js";
import {
  fuseAnimations
} from "./chunk-N2DOOPYF.js";
import {
  DragDropModule,
  moveItemInArray
} from "./chunk-3MP5RJ44.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-FD5UKZMK.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-P2CAABEU.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-NLVEQCVI.js";
import "./chunk-DZ5DWUCE.js";
import "./chunk-MJXNRHWH.js";
import {
  MatSelectModule
} from "./chunk-LTHY76JY.js";
import "./chunk-AY5C2ZOO.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-BY4NG7V4.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-RNRTLQ3J.js";
import "./chunk-6OJR6OMX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-S7CME3IL.js";
import "./chunk-OIBNGD5S.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-KU43NSH4.js";
import "./chunk-VK5CCBZ3.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WH2N6KB4.js";
import "./chunk-BIHX2IQ4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-HZQU4G6R.js";
import {
  CommonModule,
  Component,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgIf,
  NgModule,
  NgZone,
  Output,
  ViewContainerRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4
} from "./chunk-LLRZIRCV.js";
import {
  __async,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// node_modules/ag-grid-angular/fesm2022/ag-grid-angular.mjs
var AgComponentContainer = class _AgComponentContainer {
  constructor() {
    this.vcr = inject(ViewContainerRef);
  }
  static {
    this.\u0275fac = function AgComponentContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgComponentContainer)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _AgComponentContainer,
      selectors: [["ag-component-container"]],
      standalone: false,
      decls: 0,
      vars: 0,
      template: function AgComponentContainer_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgComponentContainer, [{
    type: Component,
    args: [{
      selector: "ag-component-container",
      template: ""
    }]
  }], null, null);
})();
var NUM_SHARDS = 16;
var shardIdx = 0;
function createComponentContainers(vcr) {
  const containerMap = /* @__PURE__ */ new Map();
  for (let i = 0; i < NUM_SHARDS; i++) {
    const container = vcr.createComponent(AgComponentContainer);
    containerMap.set(i, container);
    _removeFromParent(container.location.nativeElement);
  }
  return containerMap;
}
var runOutsideMethods = /* @__PURE__ */ new Set(["doesFilterPass", "isFilterActive"]);
var AngularFrameworkComponentWrapper = class _AngularFrameworkComponentWrapper extends BaseComponentWrapper {
  setViewContainerRef(viewContainerRef, angularFrameworkOverrides) {
    this.viewContainerRef = viewContainerRef;
    this.angularFrameworkOverrides = angularFrameworkOverrides;
  }
  createWrapper(OriginalConstructor) {
    const angularFrameworkOverrides = this.angularFrameworkOverrides;
    const that = this;
    that.compShards ??= createComponentContainers(this.viewContainerRef);
    class DynamicAgNg2Component extends BaseGuiComponent {
      init(params) {
        angularFrameworkOverrides.runInsideAngular(() => {
          super.init(params);
          this._componentRef.changeDetectorRef.detectChanges();
        });
      }
      createComponent() {
        return that.createComponent(OriginalConstructor);
      }
      hasMethod(name) {
        return wrapper.getFrameworkComponentInstance()[name] != null;
      }
      callMethod(name, args) {
        const componentRef = this.getFrameworkComponentInstance();
        const methodCall = componentRef[name];
        if (runOutsideMethods.has(name)) {
          return methodCall.apply(componentRef, args);
        }
        return angularFrameworkOverrides.runInsideAngular(() => methodCall.apply(componentRef, args));
      }
      addMethod(name, callback) {
        wrapper[name] = callback;
      }
    }
    const wrapper = new DynamicAgNg2Component();
    return wrapper;
  }
  createComponent(componentType) {
    shardIdx = (shardIdx + 1) % NUM_SHARDS;
    const container = this.compShards.get(shardIdx);
    return container.instance.vcr.createComponent(componentType);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AngularFrameworkComponentWrapper_BaseFactory;
      return function AngularFrameworkComponentWrapper_Factory(__ngFactoryType__) {
        return (\u0275AngularFrameworkComponentWrapper_BaseFactory || (\u0275AngularFrameworkComponentWrapper_BaseFactory = \u0275\u0275getInheritedFactory(_AngularFrameworkComponentWrapper)))(__ngFactoryType__ || _AngularFrameworkComponentWrapper);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _AngularFrameworkComponentWrapper,
      factory: _AngularFrameworkComponentWrapper.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularFrameworkComponentWrapper, [{
    type: Injectable
  }], null, null);
})();
var BaseGuiComponent = class {
  init(params) {
    this._params = params;
    this._componentRef = this.createComponent();
    this._agAwareComponent = this._componentRef.instance;
    this._frameworkComponentInstance = this._componentRef.instance;
    this._eGui = this._componentRef.location.nativeElement;
    _removeFromParent(this._eGui);
    this._agAwareComponent.agInit(this._params);
  }
  getGui() {
    return this._eGui;
  }
  /** `getGui()` returns the `ng-component` element. This returns the actual root element. */
  getRootElement() {
    const firstChild = this._eGui.firstChild;
    return firstChild;
  }
  destroy() {
    if (this._frameworkComponentInstance && typeof this._frameworkComponentInstance.destroy === "function") {
      this._frameworkComponentInstance.destroy();
    }
    this._componentRef?.destroy();
  }
  getFrameworkComponentInstance() {
    return this._frameworkComponentInstance;
  }
};
var AngularFrameworkEventListenerService = class {
  constructor(frameworkOverrides) {
    this.frameworkOverrides = frameworkOverrides;
    this.wrappedListeners = /* @__PURE__ */ new Map();
    this.wrappedGlobalListeners = /* @__PURE__ */ new Map();
  }
  wrap(eventType, userListener) {
    const {
      frameworkOverrides,
      wrappedListeners
    } = this;
    let listener = userListener;
    if (frameworkOverrides.shouldWrapOutgoing) {
      listener = (event) => {
        frameworkOverrides.wrapOutgoing(() => userListener(event));
      };
      let eventListeners = wrappedListeners.get(eventType);
      if (!eventListeners) {
        eventListeners = /* @__PURE__ */ new Map();
        wrappedListeners.set(eventType, eventListeners);
      }
      eventListeners.set(userListener, listener);
    }
    return listener;
  }
  wrapGlobal(userListener) {
    const {
      frameworkOverrides,
      wrappedGlobalListeners
    } = this;
    let listener = userListener;
    if (frameworkOverrides.shouldWrapOutgoing) {
      listener = (eventType, event) => {
        frameworkOverrides.wrapOutgoing(() => userListener(eventType, event));
      };
      wrappedGlobalListeners.set(userListener, listener);
    }
    return listener;
  }
  unwrap(eventType, userListener) {
    const {
      wrappedListeners
    } = this;
    const eventListeners = wrappedListeners.get(eventType);
    if (eventListeners) {
      const wrapped = eventListeners.get(userListener);
      if (wrapped) {
        eventListeners.delete(userListener);
        if (eventListeners.size === 0) {
          wrappedListeners.delete(eventType);
        }
        return wrapped;
      }
    }
    return userListener;
  }
  unwrapGlobal(userListener) {
    const {
      wrappedGlobalListeners
    } = this;
    const wrapped = wrappedGlobalListeners.get(userListener);
    if (wrapped) {
      wrappedGlobalListeners.delete(userListener);
      return wrapped;
    }
    return userListener;
  }
};
var AngularFrameworkOverrides = class _AngularFrameworkOverrides extends VanillaFrameworkOverrides {
  constructor(_ngZone) {
    super("angular");
    this._ngZone = _ngZone;
    this.batchFrameworkComps = true;
    this.isRunningWithinTestZone = false;
    this.wrapIncoming = (callback, source) => this.runOutside(callback, source);
    this.wrapOutgoing = (callback) => this.runInsideAngular(callback);
    this.isRunningWithinTestZone = window?.AG_GRID_UNDER_TEST ?? !!window?.Zone?.AsyncTestZoneSpec;
    if (!this._ngZone) {
      this.runOutside = (callback) => callback();
    } else if (this.isRunningWithinTestZone) {
      this.runOutside = (callback, source) => {
        if (source === "resize-observer" || source === "popupPositioning") {
          return this._ngZone.runOutsideAngular(callback);
        }
        return callback();
      };
    } else {
      this.runOutside = (callback) => this._ngZone.runOutsideAngular(callback);
    }
  }
  /**
   * The shouldWrapOutgoing property is used to determine if events should be run outside of Angular or not.
   * If an event handler is registered outside of Angular then we should not wrap the event handler
   * with runInsideAngular() as the user may not have wanted this.
   * This is also used to not wrap internal event listeners that are registered with RowNodes and Columns.
   */
  get shouldWrapOutgoing() {
    return this._ngZone && NgZone.isInAngularZone();
  }
  createLocalEventListenerWrapper(existingFrameworkEventListenerService, localEventService) {
    if (this.shouldWrapOutgoing) {
      return existingFrameworkEventListenerService ?? (() => {
        localEventService.setFrameworkOverrides(this);
        return new AngularFrameworkEventListenerService(this);
      })();
    }
    return void 0;
  }
  createGlobalEventListenerWrapper() {
    return new AngularFrameworkEventListenerService(this);
  }
  isFrameworkComponent(comp) {
    if (!comp) {
      return false;
    }
    const prototype = comp.prototype;
    return prototype && "agInit" in prototype;
  }
  runInsideAngular(callback) {
    if (!this._ngZone || NgZone.isInAngularZone()) {
      return callback();
    }
    return this._ngZone.run(callback);
  }
  runOutsideAngular(callback, source) {
    return this.runOutside(callback, source);
  }
  static {
    this.\u0275fac = function AngularFrameworkOverrides_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AngularFrameworkOverrides)(\u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _AngularFrameworkOverrides,
      factory: _AngularFrameworkOverrides.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularFrameworkOverrides, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }], null);
})();
var AgGridAngular = class _AgGridAngular {
  constructor(elementDef, _viewContainerRef, _angularFrameworkOverrides, _frameworkCompWrapper) {
    this._viewContainerRef = _viewContainerRef;
    this._angularFrameworkOverrides = _angularFrameworkOverrides;
    this._frameworkCompWrapper = _frameworkCompWrapper;
    this._initialised = false;
    this._destroyed = false;
    this._holdEvents = true;
    this._fullyReady = new Promise((resolve) => {
      this._resolveFullyReady = resolve;
    });
    this.statusBar = void 0;
    this.sideBar = void 0;
    this.suppressContextMenu = void 0;
    this.preventDefaultOnContextMenu = void 0;
    this.allowContextMenuWithControlKey = void 0;
    this.columnMenu = void 0;
    this.suppressMenuHide = void 0;
    this.enableBrowserTooltips = void 0;
    this.tooltipTrigger = void 0;
    this.tooltipShowDelay = void 0;
    this.tooltipSwitchShowDelay = void 0;
    this.tooltipHideDelay = void 0;
    this.tooltipMouseTrack = void 0;
    this.tooltipShowMode = void 0;
    this.tooltipInteraction = void 0;
    this.popupParent = void 0;
    this.copyHeadersToClipboard = void 0;
    this.copyGroupHeadersToClipboard = void 0;
    this.clipboardDelimiter = void 0;
    this.suppressCopyRowsToClipboard = void 0;
    this.suppressCopySingleCellRanges = void 0;
    this.suppressLastEmptyLineOnPaste = void 0;
    this.suppressClipboardPaste = void 0;
    this.suppressClipboardApi = void 0;
    this.suppressCutToClipboard = void 0;
    this.columnDefs = void 0;
    this.defaultColDef = void 0;
    this.defaultColGroupDef = void 0;
    this.columnTypes = void 0;
    this.dataTypeDefinitions = void 0;
    this.maintainColumnOrder = void 0;
    this.enableStrictPivotColumnOrder = void 0;
    this.suppressFieldDotNotation = void 0;
    this.headerHeight = void 0;
    this.groupHeaderHeight = void 0;
    this.floatingFiltersHeight = void 0;
    this.pivotHeaderHeight = void 0;
    this.pivotGroupHeaderHeight = void 0;
    this.hidePaddedHeaderRows = void 0;
    this.allowDragFromColumnsToolPanel = void 0;
    this.suppressMovableColumns = void 0;
    this.suppressColumnMoveAnimation = void 0;
    this.suppressMoveWhenColumnDragging = void 0;
    this.suppressDragLeaveHidesColumns = void 0;
    this.suppressGroupChangesColumnVisibility = void 0;
    this.suppressMakeColumnVisibleAfterUnGroup = void 0;
    this.suppressRowGroupHidesColumns = void 0;
    this.colResizeDefault = void 0;
    this.suppressAutoSize = void 0;
    this.autoSizePadding = void 0;
    this.skipHeaderOnAutoSize = void 0;
    this.autoSizeStrategy = void 0;
    this.animateColumnResizing = void 0;
    this.components = void 0;
    this.editType = void 0;
    this.suppressStartEditOnTab = void 0;
    this.getFullRowEditValidationErrors = void 0;
    this.invalidEditValueMode = void 0;
    this.singleClickEdit = void 0;
    this.suppressClickEdit = void 0;
    this.readOnlyEdit = void 0;
    this.stopEditingWhenCellsLoseFocus = void 0;
    this.enterNavigatesVertically = void 0;
    this.enterNavigatesVerticallyAfterEdit = void 0;
    this.enableCellEditingOnBackspace = void 0;
    this.undoRedoCellEditing = void 0;
    this.undoRedoCellEditingLimit = void 0;
    this.defaultCsvExportParams = void 0;
    this.suppressCsvExport = void 0;
    this.defaultExcelExportParams = void 0;
    this.suppressExcelExport = void 0;
    this.excelStyles = void 0;
    this.findSearchValue = void 0;
    this.findOptions = void 0;
    this.quickFilterText = void 0;
    this.cacheQuickFilter = void 0;
    this.includeHiddenColumnsInQuickFilter = void 0;
    this.quickFilterParser = void 0;
    this.quickFilterMatcher = void 0;
    this.applyQuickFilterBeforePivotOrAgg = void 0;
    this.excludeChildrenWhenTreeDataFiltering = void 0;
    this.enableAdvancedFilter = void 0;
    this.alwaysPassFilter = void 0;
    this.includeHiddenColumnsInAdvancedFilter = void 0;
    this.advancedFilterParent = void 0;
    this.advancedFilterBuilderParams = void 0;
    this.advancedFilterParams = void 0;
    this.suppressAdvancedFilterEval = void 0;
    this.suppressSetFilterByDefault = void 0;
    this.enableFilterHandlers = void 0;
    this.filterHandlers = void 0;
    this.enableCharts = void 0;
    this.chartThemes = void 0;
    this.customChartThemes = void 0;
    this.chartThemeOverrides = void 0;
    this.chartToolPanelsDef = void 0;
    this.chartMenuItems = void 0;
    this.loadingCellRenderer = void 0;
    this.loadingCellRendererParams = void 0;
    this.loadingCellRendererSelector = void 0;
    this.localeText = void 0;
    this.masterDetail = void 0;
    this.keepDetailRows = void 0;
    this.keepDetailRowsCount = void 0;
    this.detailCellRenderer = void 0;
    this.detailCellRendererParams = void 0;
    this.detailRowHeight = void 0;
    this.detailRowAutoHeight = void 0;
    this.context = void 0;
    this.alignedGrids = void 0;
    this.tabIndex = void 0;
    this.rowBuffer = void 0;
    this.valueCache = void 0;
    this.valueCacheNeverExpires = void 0;
    this.enableCellExpressions = void 0;
    this.suppressTouch = void 0;
    this.suppressFocusAfterRefresh = void 0;
    this.suppressBrowserResizeObserver = void 0;
    this.suppressPropertyNamesCheck = void 0;
    this.suppressChangeDetection = void 0;
    this.debug = void 0;
    this.loading = void 0;
    this.overlayLoadingTemplate = void 0;
    this.loadingOverlayComponent = void 0;
    this.loadingOverlayComponentParams = void 0;
    this.suppressLoadingOverlay = void 0;
    this.overlayNoRowsTemplate = void 0;
    this.noRowsOverlayComponent = void 0;
    this.noRowsOverlayComponentParams = void 0;
    this.suppressNoRowsOverlay = void 0;
    this.suppressOverlays = void 0;
    this.overlayComponent = void 0;
    this.overlayComponentParams = void 0;
    this.overlayComponentSelector = void 0;
    this.activeOverlay = void 0;
    this.activeOverlayParams = void 0;
    this.pagination = void 0;
    this.paginationPageSize = void 0;
    this.paginationPageSizeSelector = void 0;
    this.paginationAutoPageSize = void 0;
    this.paginateChildRows = void 0;
    this.suppressPaginationPanel = void 0;
    this.pivotMode = void 0;
    this.pivotPanelShow = void 0;
    this.pivotMaxGeneratedColumns = void 0;
    this.pivotDefaultExpanded = void 0;
    this.pivotColumnGroupTotals = void 0;
    this.pivotRowTotals = void 0;
    this.pivotSuppressAutoColumn = void 0;
    this.suppressExpandablePivotGroups = void 0;
    this.functionsReadOnly = void 0;
    this.aggFuncs = void 0;
    this.formulaDataSource = void 0;
    this.formulaFuncs = void 0;
    this.suppressAggFuncInHeader = void 0;
    this.alwaysAggregateAtRootLevel = void 0;
    this.aggregateOnlyChangedColumns = void 0;
    this.suppressAggFilteredOnly = void 0;
    this.removePivotHeaderRowWhenSingleValueColumn = void 0;
    this.animateRows = void 0;
    this.cellFlashDuration = void 0;
    this.cellFadeDuration = void 0;
    this.allowShowChangeAfterFilter = void 0;
    this.domLayout = void 0;
    this.ensureDomOrder = void 0;
    this.enableCellSpan = void 0;
    this.enableRtl = void 0;
    this.suppressColumnVirtualisation = void 0;
    this.suppressMaxRenderedRowRestriction = void 0;
    this.suppressRowVirtualisation = void 0;
    this.rowDragManaged = void 0;
    this.refreshAfterGroupEdit = void 0;
    this.rowDragInsertDelay = void 0;
    this.suppressRowDrag = void 0;
    this.suppressMoveWhenRowDragging = void 0;
    this.rowDragEntireRow = void 0;
    this.rowDragMultiRow = void 0;
    this.rowDragText = void 0;
    this.dragAndDropImageComponent = void 0;
    this.dragAndDropImageComponentParams = void 0;
    this.fullWidthCellRenderer = void 0;
    this.fullWidthCellRendererParams = void 0;
    this.embedFullWidthRows = void 0;
    this.groupDisplayType = void 0;
    this.groupDefaultExpanded = void 0;
    this.autoGroupColumnDef = void 0;
    this.groupMaintainOrder = void 0;
    this.groupSelectsChildren = void 0;
    this.groupLockGroupColumns = void 0;
    this.groupAggFiltering = void 0;
    this.groupTotalRow = void 0;
    this.grandTotalRow = void 0;
    this.suppressStickyTotalRow = void 0;
    this.groupSuppressBlankHeader = void 0;
    this.groupSelectsFiltered = void 0;
    this.showOpenedGroup = void 0;
    this.groupHideParentOfSingleChild = void 0;
    this.groupRemoveSingleChildren = void 0;
    this.groupRemoveLowestSingleChildren = void 0;
    this.groupHideOpenParents = void 0;
    this.groupAllowUnbalanced = void 0;
    this.rowGroupPanelShow = void 0;
    this.groupRowRenderer = void 0;
    this.groupRowRendererParams = void 0;
    this.treeData = void 0;
    this.treeDataChildrenField = void 0;
    this.treeDataParentIdField = void 0;
    this.rowGroupPanelSuppressSort = void 0;
    this.suppressGroupRowsSticky = void 0;
    this.groupHierarchyConfig = void 0;
    this.pinnedTopRowData = void 0;
    this.pinnedBottomRowData = void 0;
    this.enableRowPinning = void 0;
    this.isRowPinnable = void 0;
    this.isRowPinned = void 0;
    this.rowModelType = void 0;
    this.rowData = void 0;
    this.asyncTransactionWaitMillis = void 0;
    this.suppressModelUpdateAfterUpdateTransaction = void 0;
    this.datasource = void 0;
    this.cacheOverflowSize = void 0;
    this.infiniteInitialRowCount = void 0;
    this.serverSideInitialRowCount = void 0;
    this.suppressServerSideFullWidthLoadingRow = void 0;
    this.cacheBlockSize = void 0;
    this.maxBlocksInCache = void 0;
    this.maxConcurrentDatasourceRequests = void 0;
    this.blockLoadDebounceMillis = void 0;
    this.purgeClosedRowNodes = void 0;
    this.serverSideDatasource = void 0;
    this.serverSideSortAllLevels = void 0;
    this.serverSideEnableClientSideSort = void 0;
    this.serverSideOnlyRefreshFilteredGroups = void 0;
    this.serverSidePivotResultFieldSeparator = void 0;
    this.viewportDatasource = void 0;
    this.viewportRowModelPageSize = void 0;
    this.viewportRowModelBufferSize = void 0;
    this.alwaysShowHorizontalScroll = void 0;
    this.alwaysShowVerticalScroll = void 0;
    this.debounceVerticalScrollbar = void 0;
    this.suppressHorizontalScroll = void 0;
    this.suppressScrollOnNewData = void 0;
    this.suppressScrollWhenPopupsAreOpen = void 0;
    this.suppressAnimationFrame = void 0;
    this.suppressMiddleClickScrolls = void 0;
    this.suppressPreventDefaultOnMouseWheel = void 0;
    this.scrollbarWidth = void 0;
    this.rowSelection = void 0;
    this.cellSelection = void 0;
    this.rowMultiSelectWithClick = void 0;
    this.suppressRowDeselection = void 0;
    this.suppressRowClickSelection = void 0;
    this.suppressCellFocus = void 0;
    this.suppressHeaderFocus = void 0;
    this.selectionColumnDef = void 0;
    this.rowNumbers = void 0;
    this.suppressMultiRangeSelection = void 0;
    this.enableCellTextSelection = void 0;
    this.enableRangeSelection = void 0;
    this.enableRangeHandle = void 0;
    this.enableFillHandle = void 0;
    this.fillHandleDirection = void 0;
    this.suppressClearOnFillReduction = void 0;
    this.sortingOrder = void 0;
    this.accentedSort = void 0;
    this.unSortIcon = void 0;
    this.suppressMultiSort = void 0;
    this.alwaysMultiSort = void 0;
    this.multiSortKey = void 0;
    this.suppressMaintainUnsortedOrder = void 0;
    this.icons = void 0;
    this.rowHeight = void 0;
    this.rowStyle = void 0;
    this.rowClass = void 0;
    this.rowClassRules = void 0;
    this.suppressRowHoverHighlight = void 0;
    this.suppressRowTransform = void 0;
    this.columnHoverHighlight = void 0;
    this.gridId = void 0;
    this.deltaSort = void 0;
    this.treeDataDisplayType = void 0;
    this.enableGroupEdit = void 0;
    this.initialState = void 0;
    this.theme = void 0;
    this.loadThemeGoogleFonts = void 0;
    this.themeCssLayer = void 0;
    this.styleNonce = void 0;
    this.themeStyleContainer = void 0;
    this.getContextMenuItems = void 0;
    this.getMainMenuItems = void 0;
    this.postProcessPopup = void 0;
    this.processUnpinnedColumns = void 0;
    this.processCellForClipboard = void 0;
    this.processHeaderForClipboard = void 0;
    this.processGroupHeaderForClipboard = void 0;
    this.processCellFromClipboard = void 0;
    this.sendToClipboard = void 0;
    this.processDataFromClipboard = void 0;
    this.isExternalFilterPresent = void 0;
    this.doesExternalFilterPass = void 0;
    this.getChartToolbarItems = void 0;
    this.createChartContainer = void 0;
    this.focusGridInnerElement = void 0;
    this.navigateToNextHeader = void 0;
    this.tabToNextHeader = void 0;
    this.navigateToNextCell = void 0;
    this.tabToNextCell = void 0;
    this.getLocaleText = void 0;
    this.getDocument = void 0;
    this.paginationNumberFormatter = void 0;
    this.getGroupRowAgg = void 0;
    this.isGroupOpenByDefault = void 0;
    this.ssrmExpandAllAffectsAllRows = void 0;
    this.initialGroupOrderComparator = void 0;
    this.processPivotResultColDef = void 0;
    this.processPivotResultColGroupDef = void 0;
    this.getDataPath = void 0;
    this.getChildCount = void 0;
    this.getServerSideGroupLevelParams = void 0;
    this.isServerSideGroupOpenByDefault = void 0;
    this.isApplyServerSideTransaction = void 0;
    this.isServerSideGroup = void 0;
    this.getServerSideGroupKey = void 0;
    this.getBusinessKeyForNode = void 0;
    this.getRowId = void 0;
    this.resetRowDataOnUpdate = void 0;
    this.processRowPostCreate = void 0;
    this.isRowSelectable = void 0;
    this.isRowMaster = void 0;
    this.fillOperation = void 0;
    this.postSortRows = void 0;
    this.getRowStyle = void 0;
    this.getRowClass = void 0;
    this.getRowHeight = void 0;
    this.isFullWidthRow = void 0;
    this.isRowValidDropPosition = void 0;
    this.toolPanelVisibleChanged = new EventEmitter();
    this.toolPanelSizeChanged = new EventEmitter();
    this.columnMenuVisibleChanged = new EventEmitter();
    this.contextMenuVisibleChanged = new EventEmitter();
    this.cutStart = new EventEmitter();
    this.cutEnd = new EventEmitter();
    this.pasteStart = new EventEmitter();
    this.pasteEnd = new EventEmitter();
    this.columnVisible = new EventEmitter();
    this.columnPinned = new EventEmitter();
    this.columnResized = new EventEmitter();
    this.columnMoved = new EventEmitter();
    this.columnValueChanged = new EventEmitter();
    this.columnPivotModeChanged = new EventEmitter();
    this.columnPivotChanged = new EventEmitter();
    this.columnGroupOpened = new EventEmitter();
    this.newColumnsLoaded = new EventEmitter();
    this.gridColumnsChanged = new EventEmitter();
    this.displayedColumnsChanged = new EventEmitter();
    this.virtualColumnsChanged = new EventEmitter();
    this.columnEverythingChanged = new EventEmitter();
    this.columnsReset = new EventEmitter();
    this.columnHeaderMouseOver = new EventEmitter();
    this.columnHeaderMouseLeave = new EventEmitter();
    this.columnHeaderClicked = new EventEmitter();
    this.columnHeaderContextMenu = new EventEmitter();
    this.componentStateChanged = new EventEmitter();
    this.cellValueChanged = new EventEmitter();
    this.cellEditRequest = new EventEmitter();
    this.rowValueChanged = new EventEmitter();
    this.cellEditingStarted = new EventEmitter();
    this.cellEditingStopped = new EventEmitter();
    this.rowEditingStarted = new EventEmitter();
    this.rowEditingStopped = new EventEmitter();
    this.bulkEditingStarted = new EventEmitter();
    this.bulkEditingStopped = new EventEmitter();
    this.batchEditingStarted = new EventEmitter();
    this.batchEditingStopped = new EventEmitter();
    this.undoStarted = new EventEmitter();
    this.undoEnded = new EventEmitter();
    this.redoStarted = new EventEmitter();
    this.redoEnded = new EventEmitter();
    this.cellSelectionDeleteStart = new EventEmitter();
    this.cellSelectionDeleteEnd = new EventEmitter();
    this.rangeDeleteStart = new EventEmitter();
    this.rangeDeleteEnd = new EventEmitter();
    this.fillStart = new EventEmitter();
    this.fillEnd = new EventEmitter();
    this.filterOpened = new EventEmitter();
    this.filterChanged = new EventEmitter();
    this.filterModified = new EventEmitter();
    this.filterUiChanged = new EventEmitter();
    this.floatingFilterUiChanged = new EventEmitter();
    this.advancedFilterBuilderVisibleChanged = new EventEmitter();
    this.findChanged = new EventEmitter();
    this.chartCreated = new EventEmitter();
    this.chartRangeSelectionChanged = new EventEmitter();
    this.chartOptionsChanged = new EventEmitter();
    this.chartDestroyed = new EventEmitter();
    this.cellKeyDown = new EventEmitter();
    this.gridReady = new EventEmitter();
    this.firstDataRendered = new EventEmitter();
    this.gridSizeChanged = new EventEmitter();
    this.modelUpdated = new EventEmitter();
    this.virtualRowRemoved = new EventEmitter();
    this.viewportChanged = new EventEmitter();
    this.bodyScroll = new EventEmitter();
    this.bodyScrollEnd = new EventEmitter();
    this.dragStarted = new EventEmitter();
    this.dragStopped = new EventEmitter();
    this.dragCancelled = new EventEmitter();
    this.stateUpdated = new EventEmitter();
    this.paginationChanged = new EventEmitter();
    this.rowDragEnter = new EventEmitter();
    this.rowDragMove = new EventEmitter();
    this.rowDragLeave = new EventEmitter();
    this.rowDragEnd = new EventEmitter();
    this.rowDragCancel = new EventEmitter();
    this.rowResizeStarted = new EventEmitter();
    this.rowResizeEnded = new EventEmitter();
    this.columnRowGroupChanged = new EventEmitter();
    this.rowGroupOpened = new EventEmitter();
    this.expandOrCollapseAll = new EventEmitter();
    this.pivotMaxColumnsExceeded = new EventEmitter();
    this.pinnedRowDataChanged = new EventEmitter();
    this.pinnedRowsChanged = new EventEmitter();
    this.rowDataUpdated = new EventEmitter();
    this.asyncTransactionsFlushed = new EventEmitter();
    this.storeRefreshed = new EventEmitter();
    this.headerFocused = new EventEmitter();
    this.cellClicked = new EventEmitter();
    this.cellDoubleClicked = new EventEmitter();
    this.cellFocused = new EventEmitter();
    this.cellMouseOver = new EventEmitter();
    this.cellMouseOut = new EventEmitter();
    this.cellMouseDown = new EventEmitter();
    this.rowClicked = new EventEmitter();
    this.rowDoubleClicked = new EventEmitter();
    this.rowSelected = new EventEmitter();
    this.selectionChanged = new EventEmitter();
    this.cellContextMenu = new EventEmitter();
    this.rangeSelectionChanged = new EventEmitter();
    this.cellSelectionChanged = new EventEmitter();
    this.tooltipShow = new EventEmitter();
    this.tooltipHide = new EventEmitter();
    this.sortChanged = new EventEmitter();
    this._nativeElement = elementDef.nativeElement;
    this._fullyReady.then(() => {
      this._holdEvents = false;
    });
  }
  ngAfterViewInit() {
    this._angularFrameworkOverrides.runOutsideAngular(() => {
      this._frameworkCompWrapper.setViewContainerRef(this._viewContainerRef, this._angularFrameworkOverrides);
      const gridOptionKeys = Object.keys(this).filter((key) => !(key.startsWith("_") || key == "gridOptions" || key == "modules" || this[key] instanceof EventEmitter));
      const coercedGridOptions = {};
      for (const key of gridOptionKeys) {
        const valueToUse = getValueOrCoercedValue(key, this[key]);
        coercedGridOptions[key] = valueToUse;
      }
      const mergedGridOps = _combineAttributesAndGridOptions(this.gridOptions, coercedGridOptions, gridOptionKeys);
      const gridParams = {
        globalListener: this.globalListener.bind(this),
        frameworkOverrides: this._angularFrameworkOverrides,
        providedBeanInstances: {
          frameworkCompWrapper: this._frameworkCompWrapper
        },
        modules: this.modules || [],
        setThemeOnGridDiv: true
      };
      const api = createGrid(this._nativeElement, mergedGridOps, gridParams);
      if (api) {
        this.api = api;
      }
      this._initialised = true;
      this._resolveFullyReady();
    });
  }
  ngOnChanges(changes) {
    if (this._initialised) {
      this._angularFrameworkOverrides.runOutsideAngular(() => {
        const gridOptions = {};
        for (const key of Object.keys(changes)) {
          const value = changes[key];
          gridOptions[key] = value.currentValue;
        }
        _processOnChange(gridOptions, this.api);
      });
    }
  }
  ngOnDestroy() {
    if (this._initialised) {
      this._destroyed = true;
      this.api?.destroy();
    }
  }
  // we'll emit the emit if a user is listening for a given event either on the component via normal angular binding
  // or via gridOptions
  isEmitterUsed(eventType) {
    const emitter = this[eventType];
    const emitterAny = emitter;
    const hasEmitter = emitterAny?.observed ?? emitterAny?.observers?.length > 0;
    const asEventName = `on${eventType.charAt(0).toUpperCase()}${eventType.substring(1)}`;
    const hasGridOptionListener = !!this.gridOptions && !!this.gridOptions[asEventName];
    return hasEmitter || hasGridOptionListener;
  }
  globalListener(eventType, event) {
    if (this._destroyed) {
      return;
    }
    const emitter = this[eventType];
    if (emitter && this.isEmitterUsed(eventType)) {
      const fireEmitter = () => this._angularFrameworkOverrides.runInsideAngular(() => emitter.emit(event));
      if (this._holdEvents) {
        this._fullyReady.then(() => fireEmitter());
      } else {
        fireEmitter();
      }
    }
  }
  static {
    this.\u0275fac = function AgGridAngular_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgGridAngular)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(AngularFrameworkOverrides), \u0275\u0275directiveInject(AngularFrameworkComponentWrapper));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _AgGridAngular,
      selectors: [["ag-grid-angular"]],
      inputs: {
        gridOptions: "gridOptions",
        modules: "modules",
        statusBar: "statusBar",
        sideBar: "sideBar",
        suppressContextMenu: [2, "suppressContextMenu", "suppressContextMenu", booleanAttribute],
        preventDefaultOnContextMenu: [2, "preventDefaultOnContextMenu", "preventDefaultOnContextMenu", booleanAttribute],
        allowContextMenuWithControlKey: [2, "allowContextMenuWithControlKey", "allowContextMenuWithControlKey", booleanAttribute],
        columnMenu: "columnMenu",
        suppressMenuHide: [2, "suppressMenuHide", "suppressMenuHide", booleanAttribute],
        enableBrowserTooltips: [2, "enableBrowserTooltips", "enableBrowserTooltips", booleanAttribute],
        tooltipTrigger: "tooltipTrigger",
        tooltipShowDelay: "tooltipShowDelay",
        tooltipSwitchShowDelay: "tooltipSwitchShowDelay",
        tooltipHideDelay: "tooltipHideDelay",
        tooltipMouseTrack: [2, "tooltipMouseTrack", "tooltipMouseTrack", booleanAttribute],
        tooltipShowMode: "tooltipShowMode",
        tooltipInteraction: [2, "tooltipInteraction", "tooltipInteraction", booleanAttribute],
        popupParent: "popupParent",
        copyHeadersToClipboard: [2, "copyHeadersToClipboard", "copyHeadersToClipboard", booleanAttribute],
        copyGroupHeadersToClipboard: [2, "copyGroupHeadersToClipboard", "copyGroupHeadersToClipboard", booleanAttribute],
        clipboardDelimiter: "clipboardDelimiter",
        suppressCopyRowsToClipboard: [2, "suppressCopyRowsToClipboard", "suppressCopyRowsToClipboard", booleanAttribute],
        suppressCopySingleCellRanges: [2, "suppressCopySingleCellRanges", "suppressCopySingleCellRanges", booleanAttribute],
        suppressLastEmptyLineOnPaste: [2, "suppressLastEmptyLineOnPaste", "suppressLastEmptyLineOnPaste", booleanAttribute],
        suppressClipboardPaste: [2, "suppressClipboardPaste", "suppressClipboardPaste", booleanAttribute],
        suppressClipboardApi: [2, "suppressClipboardApi", "suppressClipboardApi", booleanAttribute],
        suppressCutToClipboard: [2, "suppressCutToClipboard", "suppressCutToClipboard", booleanAttribute],
        columnDefs: "columnDefs",
        defaultColDef: "defaultColDef",
        defaultColGroupDef: "defaultColGroupDef",
        columnTypes: "columnTypes",
        dataTypeDefinitions: "dataTypeDefinitions",
        maintainColumnOrder: [2, "maintainColumnOrder", "maintainColumnOrder", booleanAttribute],
        enableStrictPivotColumnOrder: [2, "enableStrictPivotColumnOrder", "enableStrictPivotColumnOrder", booleanAttribute],
        suppressFieldDotNotation: [2, "suppressFieldDotNotation", "suppressFieldDotNotation", booleanAttribute],
        headerHeight: "headerHeight",
        groupHeaderHeight: "groupHeaderHeight",
        floatingFiltersHeight: "floatingFiltersHeight",
        pivotHeaderHeight: "pivotHeaderHeight",
        pivotGroupHeaderHeight: "pivotGroupHeaderHeight",
        hidePaddedHeaderRows: [2, "hidePaddedHeaderRows", "hidePaddedHeaderRows", booleanAttribute],
        allowDragFromColumnsToolPanel: [2, "allowDragFromColumnsToolPanel", "allowDragFromColumnsToolPanel", booleanAttribute],
        suppressMovableColumns: [2, "suppressMovableColumns", "suppressMovableColumns", booleanAttribute],
        suppressColumnMoveAnimation: [2, "suppressColumnMoveAnimation", "suppressColumnMoveAnimation", booleanAttribute],
        suppressMoveWhenColumnDragging: [2, "suppressMoveWhenColumnDragging", "suppressMoveWhenColumnDragging", booleanAttribute],
        suppressDragLeaveHidesColumns: [2, "suppressDragLeaveHidesColumns", "suppressDragLeaveHidesColumns", booleanAttribute],
        suppressGroupChangesColumnVisibility: "suppressGroupChangesColumnVisibility",
        suppressMakeColumnVisibleAfterUnGroup: [2, "suppressMakeColumnVisibleAfterUnGroup", "suppressMakeColumnVisibleAfterUnGroup", booleanAttribute],
        suppressRowGroupHidesColumns: [2, "suppressRowGroupHidesColumns", "suppressRowGroupHidesColumns", booleanAttribute],
        colResizeDefault: "colResizeDefault",
        suppressAutoSize: [2, "suppressAutoSize", "suppressAutoSize", booleanAttribute],
        autoSizePadding: "autoSizePadding",
        skipHeaderOnAutoSize: [2, "skipHeaderOnAutoSize", "skipHeaderOnAutoSize", booleanAttribute],
        autoSizeStrategy: "autoSizeStrategy",
        animateColumnResizing: [2, "animateColumnResizing", "animateColumnResizing", booleanAttribute],
        components: "components",
        editType: "editType",
        suppressStartEditOnTab: [2, "suppressStartEditOnTab", "suppressStartEditOnTab", booleanAttribute],
        getFullRowEditValidationErrors: "getFullRowEditValidationErrors",
        invalidEditValueMode: "invalidEditValueMode",
        singleClickEdit: [2, "singleClickEdit", "singleClickEdit", booleanAttribute],
        suppressClickEdit: [2, "suppressClickEdit", "suppressClickEdit", booleanAttribute],
        readOnlyEdit: [2, "readOnlyEdit", "readOnlyEdit", booleanAttribute],
        stopEditingWhenCellsLoseFocus: [2, "stopEditingWhenCellsLoseFocus", "stopEditingWhenCellsLoseFocus", booleanAttribute],
        enterNavigatesVertically: [2, "enterNavigatesVertically", "enterNavigatesVertically", booleanAttribute],
        enterNavigatesVerticallyAfterEdit: [2, "enterNavigatesVerticallyAfterEdit", "enterNavigatesVerticallyAfterEdit", booleanAttribute],
        enableCellEditingOnBackspace: [2, "enableCellEditingOnBackspace", "enableCellEditingOnBackspace", booleanAttribute],
        undoRedoCellEditing: [2, "undoRedoCellEditing", "undoRedoCellEditing", booleanAttribute],
        undoRedoCellEditingLimit: "undoRedoCellEditingLimit",
        defaultCsvExportParams: "defaultCsvExportParams",
        suppressCsvExport: [2, "suppressCsvExport", "suppressCsvExport", booleanAttribute],
        defaultExcelExportParams: "defaultExcelExportParams",
        suppressExcelExport: [2, "suppressExcelExport", "suppressExcelExport", booleanAttribute],
        excelStyles: "excelStyles",
        findSearchValue: "findSearchValue",
        findOptions: "findOptions",
        quickFilterText: "quickFilterText",
        cacheQuickFilter: [2, "cacheQuickFilter", "cacheQuickFilter", booleanAttribute],
        includeHiddenColumnsInQuickFilter: [2, "includeHiddenColumnsInQuickFilter", "includeHiddenColumnsInQuickFilter", booleanAttribute],
        quickFilterParser: "quickFilterParser",
        quickFilterMatcher: "quickFilterMatcher",
        applyQuickFilterBeforePivotOrAgg: [2, "applyQuickFilterBeforePivotOrAgg", "applyQuickFilterBeforePivotOrAgg", booleanAttribute],
        excludeChildrenWhenTreeDataFiltering: [2, "excludeChildrenWhenTreeDataFiltering", "excludeChildrenWhenTreeDataFiltering", booleanAttribute],
        enableAdvancedFilter: [2, "enableAdvancedFilter", "enableAdvancedFilter", booleanAttribute],
        alwaysPassFilter: "alwaysPassFilter",
        includeHiddenColumnsInAdvancedFilter: [2, "includeHiddenColumnsInAdvancedFilter", "includeHiddenColumnsInAdvancedFilter", booleanAttribute],
        advancedFilterParent: "advancedFilterParent",
        advancedFilterBuilderParams: "advancedFilterBuilderParams",
        advancedFilterParams: "advancedFilterParams",
        suppressAdvancedFilterEval: [2, "suppressAdvancedFilterEval", "suppressAdvancedFilterEval", booleanAttribute],
        suppressSetFilterByDefault: [2, "suppressSetFilterByDefault", "suppressSetFilterByDefault", booleanAttribute],
        enableFilterHandlers: [2, "enableFilterHandlers", "enableFilterHandlers", booleanAttribute],
        filterHandlers: "filterHandlers",
        enableCharts: [2, "enableCharts", "enableCharts", booleanAttribute],
        chartThemes: "chartThemes",
        customChartThemes: "customChartThemes",
        chartThemeOverrides: "chartThemeOverrides",
        chartToolPanelsDef: "chartToolPanelsDef",
        chartMenuItems: "chartMenuItems",
        loadingCellRenderer: "loadingCellRenderer",
        loadingCellRendererParams: "loadingCellRendererParams",
        loadingCellRendererSelector: "loadingCellRendererSelector",
        localeText: "localeText",
        masterDetail: [2, "masterDetail", "masterDetail", booleanAttribute],
        keepDetailRows: [2, "keepDetailRows", "keepDetailRows", booleanAttribute],
        keepDetailRowsCount: "keepDetailRowsCount",
        detailCellRenderer: "detailCellRenderer",
        detailCellRendererParams: "detailCellRendererParams",
        detailRowHeight: "detailRowHeight",
        detailRowAutoHeight: [2, "detailRowAutoHeight", "detailRowAutoHeight", booleanAttribute],
        context: "context",
        alignedGrids: "alignedGrids",
        tabIndex: "tabIndex",
        rowBuffer: "rowBuffer",
        valueCache: [2, "valueCache", "valueCache", booleanAttribute],
        valueCacheNeverExpires: [2, "valueCacheNeverExpires", "valueCacheNeverExpires", booleanAttribute],
        enableCellExpressions: [2, "enableCellExpressions", "enableCellExpressions", booleanAttribute],
        suppressTouch: [2, "suppressTouch", "suppressTouch", booleanAttribute],
        suppressFocusAfterRefresh: [2, "suppressFocusAfterRefresh", "suppressFocusAfterRefresh", booleanAttribute],
        suppressBrowserResizeObserver: [2, "suppressBrowserResizeObserver", "suppressBrowserResizeObserver", booleanAttribute],
        suppressPropertyNamesCheck: [2, "suppressPropertyNamesCheck", "suppressPropertyNamesCheck", booleanAttribute],
        suppressChangeDetection: [2, "suppressChangeDetection", "suppressChangeDetection", booleanAttribute],
        debug: [2, "debug", "debug", booleanAttribute],
        loading: [2, "loading", "loading", booleanAttribute],
        overlayLoadingTemplate: "overlayLoadingTemplate",
        loadingOverlayComponent: "loadingOverlayComponent",
        loadingOverlayComponentParams: "loadingOverlayComponentParams",
        suppressLoadingOverlay: [2, "suppressLoadingOverlay", "suppressLoadingOverlay", booleanAttribute],
        overlayNoRowsTemplate: "overlayNoRowsTemplate",
        noRowsOverlayComponent: "noRowsOverlayComponent",
        noRowsOverlayComponentParams: "noRowsOverlayComponentParams",
        suppressNoRowsOverlay: [2, "suppressNoRowsOverlay", "suppressNoRowsOverlay", booleanAttribute],
        suppressOverlays: "suppressOverlays",
        overlayComponent: "overlayComponent",
        overlayComponentParams: "overlayComponentParams",
        overlayComponentSelector: "overlayComponentSelector",
        activeOverlay: "activeOverlay",
        activeOverlayParams: "activeOverlayParams",
        pagination: [2, "pagination", "pagination", booleanAttribute],
        paginationPageSize: "paginationPageSize",
        paginationPageSizeSelector: "paginationPageSizeSelector",
        paginationAutoPageSize: [2, "paginationAutoPageSize", "paginationAutoPageSize", booleanAttribute],
        paginateChildRows: [2, "paginateChildRows", "paginateChildRows", booleanAttribute],
        suppressPaginationPanel: [2, "suppressPaginationPanel", "suppressPaginationPanel", booleanAttribute],
        pivotMode: [2, "pivotMode", "pivotMode", booleanAttribute],
        pivotPanelShow: "pivotPanelShow",
        pivotMaxGeneratedColumns: "pivotMaxGeneratedColumns",
        pivotDefaultExpanded: "pivotDefaultExpanded",
        pivotColumnGroupTotals: "pivotColumnGroupTotals",
        pivotRowTotals: "pivotRowTotals",
        pivotSuppressAutoColumn: [2, "pivotSuppressAutoColumn", "pivotSuppressAutoColumn", booleanAttribute],
        suppressExpandablePivotGroups: [2, "suppressExpandablePivotGroups", "suppressExpandablePivotGroups", booleanAttribute],
        functionsReadOnly: [2, "functionsReadOnly", "functionsReadOnly", booleanAttribute],
        aggFuncs: "aggFuncs",
        formulaDataSource: "formulaDataSource",
        formulaFuncs: "formulaFuncs",
        suppressAggFuncInHeader: [2, "suppressAggFuncInHeader", "suppressAggFuncInHeader", booleanAttribute],
        alwaysAggregateAtRootLevel: [2, "alwaysAggregateAtRootLevel", "alwaysAggregateAtRootLevel", booleanAttribute],
        aggregateOnlyChangedColumns: [2, "aggregateOnlyChangedColumns", "aggregateOnlyChangedColumns", booleanAttribute],
        suppressAggFilteredOnly: [2, "suppressAggFilteredOnly", "suppressAggFilteredOnly", booleanAttribute],
        removePivotHeaderRowWhenSingleValueColumn: [2, "removePivotHeaderRowWhenSingleValueColumn", "removePivotHeaderRowWhenSingleValueColumn", booleanAttribute],
        animateRows: [2, "animateRows", "animateRows", booleanAttribute],
        cellFlashDuration: "cellFlashDuration",
        cellFadeDuration: "cellFadeDuration",
        allowShowChangeAfterFilter: [2, "allowShowChangeAfterFilter", "allowShowChangeAfterFilter", booleanAttribute],
        domLayout: "domLayout",
        ensureDomOrder: [2, "ensureDomOrder", "ensureDomOrder", booleanAttribute],
        enableCellSpan: [2, "enableCellSpan", "enableCellSpan", booleanAttribute],
        enableRtl: [2, "enableRtl", "enableRtl", booleanAttribute],
        suppressColumnVirtualisation: [2, "suppressColumnVirtualisation", "suppressColumnVirtualisation", booleanAttribute],
        suppressMaxRenderedRowRestriction: [2, "suppressMaxRenderedRowRestriction", "suppressMaxRenderedRowRestriction", booleanAttribute],
        suppressRowVirtualisation: [2, "suppressRowVirtualisation", "suppressRowVirtualisation", booleanAttribute],
        rowDragManaged: [2, "rowDragManaged", "rowDragManaged", booleanAttribute],
        refreshAfterGroupEdit: [2, "refreshAfterGroupEdit", "refreshAfterGroupEdit", booleanAttribute],
        rowDragInsertDelay: "rowDragInsertDelay",
        suppressRowDrag: [2, "suppressRowDrag", "suppressRowDrag", booleanAttribute],
        suppressMoveWhenRowDragging: [2, "suppressMoveWhenRowDragging", "suppressMoveWhenRowDragging", booleanAttribute],
        rowDragEntireRow: [2, "rowDragEntireRow", "rowDragEntireRow", booleanAttribute],
        rowDragMultiRow: [2, "rowDragMultiRow", "rowDragMultiRow", booleanAttribute],
        rowDragText: "rowDragText",
        dragAndDropImageComponent: "dragAndDropImageComponent",
        dragAndDropImageComponentParams: "dragAndDropImageComponentParams",
        fullWidthCellRenderer: "fullWidthCellRenderer",
        fullWidthCellRendererParams: "fullWidthCellRendererParams",
        embedFullWidthRows: [2, "embedFullWidthRows", "embedFullWidthRows", booleanAttribute],
        groupDisplayType: "groupDisplayType",
        groupDefaultExpanded: "groupDefaultExpanded",
        autoGroupColumnDef: "autoGroupColumnDef",
        groupMaintainOrder: [2, "groupMaintainOrder", "groupMaintainOrder", booleanAttribute],
        groupSelectsChildren: [2, "groupSelectsChildren", "groupSelectsChildren", booleanAttribute],
        groupLockGroupColumns: "groupLockGroupColumns",
        groupAggFiltering: "groupAggFiltering",
        groupTotalRow: "groupTotalRow",
        grandTotalRow: "grandTotalRow",
        suppressStickyTotalRow: "suppressStickyTotalRow",
        groupSuppressBlankHeader: [2, "groupSuppressBlankHeader", "groupSuppressBlankHeader", booleanAttribute],
        groupSelectsFiltered: [2, "groupSelectsFiltered", "groupSelectsFiltered", booleanAttribute],
        showOpenedGroup: [2, "showOpenedGroup", "showOpenedGroup", booleanAttribute],
        groupHideParentOfSingleChild: "groupHideParentOfSingleChild",
        groupRemoveSingleChildren: [2, "groupRemoveSingleChildren", "groupRemoveSingleChildren", booleanAttribute],
        groupRemoveLowestSingleChildren: [2, "groupRemoveLowestSingleChildren", "groupRemoveLowestSingleChildren", booleanAttribute],
        groupHideOpenParents: [2, "groupHideOpenParents", "groupHideOpenParents", booleanAttribute],
        groupAllowUnbalanced: [2, "groupAllowUnbalanced", "groupAllowUnbalanced", booleanAttribute],
        rowGroupPanelShow: "rowGroupPanelShow",
        groupRowRenderer: "groupRowRenderer",
        groupRowRendererParams: "groupRowRendererParams",
        treeData: [2, "treeData", "treeData", booleanAttribute],
        treeDataChildrenField: "treeDataChildrenField",
        treeDataParentIdField: "treeDataParentIdField",
        rowGroupPanelSuppressSort: [2, "rowGroupPanelSuppressSort", "rowGroupPanelSuppressSort", booleanAttribute],
        suppressGroupRowsSticky: [2, "suppressGroupRowsSticky", "suppressGroupRowsSticky", booleanAttribute],
        groupHierarchyConfig: "groupHierarchyConfig",
        pinnedTopRowData: "pinnedTopRowData",
        pinnedBottomRowData: "pinnedBottomRowData",
        enableRowPinning: "enableRowPinning",
        isRowPinnable: "isRowPinnable",
        isRowPinned: "isRowPinned",
        rowModelType: "rowModelType",
        rowData: "rowData",
        asyncTransactionWaitMillis: "asyncTransactionWaitMillis",
        suppressModelUpdateAfterUpdateTransaction: [2, "suppressModelUpdateAfterUpdateTransaction", "suppressModelUpdateAfterUpdateTransaction", booleanAttribute],
        datasource: "datasource",
        cacheOverflowSize: "cacheOverflowSize",
        infiniteInitialRowCount: "infiniteInitialRowCount",
        serverSideInitialRowCount: "serverSideInitialRowCount",
        suppressServerSideFullWidthLoadingRow: [2, "suppressServerSideFullWidthLoadingRow", "suppressServerSideFullWidthLoadingRow", booleanAttribute],
        cacheBlockSize: "cacheBlockSize",
        maxBlocksInCache: "maxBlocksInCache",
        maxConcurrentDatasourceRequests: "maxConcurrentDatasourceRequests",
        blockLoadDebounceMillis: "blockLoadDebounceMillis",
        purgeClosedRowNodes: [2, "purgeClosedRowNodes", "purgeClosedRowNodes", booleanAttribute],
        serverSideDatasource: "serverSideDatasource",
        serverSideSortAllLevels: [2, "serverSideSortAllLevels", "serverSideSortAllLevels", booleanAttribute],
        serverSideEnableClientSideSort: [2, "serverSideEnableClientSideSort", "serverSideEnableClientSideSort", booleanAttribute],
        serverSideOnlyRefreshFilteredGroups: [2, "serverSideOnlyRefreshFilteredGroups", "serverSideOnlyRefreshFilteredGroups", booleanAttribute],
        serverSidePivotResultFieldSeparator: "serverSidePivotResultFieldSeparator",
        viewportDatasource: "viewportDatasource",
        viewportRowModelPageSize: "viewportRowModelPageSize",
        viewportRowModelBufferSize: "viewportRowModelBufferSize",
        alwaysShowHorizontalScroll: [2, "alwaysShowHorizontalScroll", "alwaysShowHorizontalScroll", booleanAttribute],
        alwaysShowVerticalScroll: [2, "alwaysShowVerticalScroll", "alwaysShowVerticalScroll", booleanAttribute],
        debounceVerticalScrollbar: [2, "debounceVerticalScrollbar", "debounceVerticalScrollbar", booleanAttribute],
        suppressHorizontalScroll: [2, "suppressHorizontalScroll", "suppressHorizontalScroll", booleanAttribute],
        suppressScrollOnNewData: [2, "suppressScrollOnNewData", "suppressScrollOnNewData", booleanAttribute],
        suppressScrollWhenPopupsAreOpen: [2, "suppressScrollWhenPopupsAreOpen", "suppressScrollWhenPopupsAreOpen", booleanAttribute],
        suppressAnimationFrame: [2, "suppressAnimationFrame", "suppressAnimationFrame", booleanAttribute],
        suppressMiddleClickScrolls: [2, "suppressMiddleClickScrolls", "suppressMiddleClickScrolls", booleanAttribute],
        suppressPreventDefaultOnMouseWheel: [2, "suppressPreventDefaultOnMouseWheel", "suppressPreventDefaultOnMouseWheel", booleanAttribute],
        scrollbarWidth: "scrollbarWidth",
        rowSelection: "rowSelection",
        cellSelection: "cellSelection",
        rowMultiSelectWithClick: [2, "rowMultiSelectWithClick", "rowMultiSelectWithClick", booleanAttribute],
        suppressRowDeselection: [2, "suppressRowDeselection", "suppressRowDeselection", booleanAttribute],
        suppressRowClickSelection: [2, "suppressRowClickSelection", "suppressRowClickSelection", booleanAttribute],
        suppressCellFocus: [2, "suppressCellFocus", "suppressCellFocus", booleanAttribute],
        suppressHeaderFocus: [2, "suppressHeaderFocus", "suppressHeaderFocus", booleanAttribute],
        selectionColumnDef: "selectionColumnDef",
        rowNumbers: "rowNumbers",
        suppressMultiRangeSelection: [2, "suppressMultiRangeSelection", "suppressMultiRangeSelection", booleanAttribute],
        enableCellTextSelection: [2, "enableCellTextSelection", "enableCellTextSelection", booleanAttribute],
        enableRangeSelection: [2, "enableRangeSelection", "enableRangeSelection", booleanAttribute],
        enableRangeHandle: [2, "enableRangeHandle", "enableRangeHandle", booleanAttribute],
        enableFillHandle: [2, "enableFillHandle", "enableFillHandle", booleanAttribute],
        fillHandleDirection: "fillHandleDirection",
        suppressClearOnFillReduction: [2, "suppressClearOnFillReduction", "suppressClearOnFillReduction", booleanAttribute],
        sortingOrder: "sortingOrder",
        accentedSort: [2, "accentedSort", "accentedSort", booleanAttribute],
        unSortIcon: [2, "unSortIcon", "unSortIcon", booleanAttribute],
        suppressMultiSort: [2, "suppressMultiSort", "suppressMultiSort", booleanAttribute],
        alwaysMultiSort: [2, "alwaysMultiSort", "alwaysMultiSort", booleanAttribute],
        multiSortKey: "multiSortKey",
        suppressMaintainUnsortedOrder: [2, "suppressMaintainUnsortedOrder", "suppressMaintainUnsortedOrder", booleanAttribute],
        icons: "icons",
        rowHeight: "rowHeight",
        rowStyle: "rowStyle",
        rowClass: "rowClass",
        rowClassRules: "rowClassRules",
        suppressRowHoverHighlight: [2, "suppressRowHoverHighlight", "suppressRowHoverHighlight", booleanAttribute],
        suppressRowTransform: [2, "suppressRowTransform", "suppressRowTransform", booleanAttribute],
        columnHoverHighlight: [2, "columnHoverHighlight", "columnHoverHighlight", booleanAttribute],
        gridId: "gridId",
        deltaSort: [2, "deltaSort", "deltaSort", booleanAttribute],
        treeDataDisplayType: "treeDataDisplayType",
        enableGroupEdit: [2, "enableGroupEdit", "enableGroupEdit", booleanAttribute],
        initialState: "initialState",
        theme: "theme",
        loadThemeGoogleFonts: [2, "loadThemeGoogleFonts", "loadThemeGoogleFonts", booleanAttribute],
        themeCssLayer: "themeCssLayer",
        styleNonce: "styleNonce",
        themeStyleContainer: "themeStyleContainer",
        getContextMenuItems: "getContextMenuItems",
        getMainMenuItems: "getMainMenuItems",
        postProcessPopup: "postProcessPopup",
        processUnpinnedColumns: "processUnpinnedColumns",
        processCellForClipboard: "processCellForClipboard",
        processHeaderForClipboard: "processHeaderForClipboard",
        processGroupHeaderForClipboard: "processGroupHeaderForClipboard",
        processCellFromClipboard: "processCellFromClipboard",
        sendToClipboard: "sendToClipboard",
        processDataFromClipboard: "processDataFromClipboard",
        isExternalFilterPresent: "isExternalFilterPresent",
        doesExternalFilterPass: "doesExternalFilterPass",
        getChartToolbarItems: "getChartToolbarItems",
        createChartContainer: "createChartContainer",
        focusGridInnerElement: "focusGridInnerElement",
        navigateToNextHeader: "navigateToNextHeader",
        tabToNextHeader: "tabToNextHeader",
        navigateToNextCell: "navigateToNextCell",
        tabToNextCell: "tabToNextCell",
        getLocaleText: "getLocaleText",
        getDocument: "getDocument",
        paginationNumberFormatter: "paginationNumberFormatter",
        getGroupRowAgg: "getGroupRowAgg",
        isGroupOpenByDefault: "isGroupOpenByDefault",
        ssrmExpandAllAffectsAllRows: [2, "ssrmExpandAllAffectsAllRows", "ssrmExpandAllAffectsAllRows", booleanAttribute],
        initialGroupOrderComparator: "initialGroupOrderComparator",
        processPivotResultColDef: "processPivotResultColDef",
        processPivotResultColGroupDef: "processPivotResultColGroupDef",
        getDataPath: "getDataPath",
        getChildCount: "getChildCount",
        getServerSideGroupLevelParams: "getServerSideGroupLevelParams",
        isServerSideGroupOpenByDefault: "isServerSideGroupOpenByDefault",
        isApplyServerSideTransaction: "isApplyServerSideTransaction",
        isServerSideGroup: "isServerSideGroup",
        getServerSideGroupKey: "getServerSideGroupKey",
        getBusinessKeyForNode: "getBusinessKeyForNode",
        getRowId: "getRowId",
        resetRowDataOnUpdate: [2, "resetRowDataOnUpdate", "resetRowDataOnUpdate", booleanAttribute],
        processRowPostCreate: "processRowPostCreate",
        isRowSelectable: "isRowSelectable",
        isRowMaster: "isRowMaster",
        fillOperation: "fillOperation",
        postSortRows: "postSortRows",
        getRowStyle: "getRowStyle",
        getRowClass: "getRowClass",
        getRowHeight: "getRowHeight",
        isFullWidthRow: "isFullWidthRow",
        isRowValidDropPosition: "isRowValidDropPosition"
      },
      outputs: {
        toolPanelVisibleChanged: "toolPanelVisibleChanged",
        toolPanelSizeChanged: "toolPanelSizeChanged",
        columnMenuVisibleChanged: "columnMenuVisibleChanged",
        contextMenuVisibleChanged: "contextMenuVisibleChanged",
        cutStart: "cutStart",
        cutEnd: "cutEnd",
        pasteStart: "pasteStart",
        pasteEnd: "pasteEnd",
        columnVisible: "columnVisible",
        columnPinned: "columnPinned",
        columnResized: "columnResized",
        columnMoved: "columnMoved",
        columnValueChanged: "columnValueChanged",
        columnPivotModeChanged: "columnPivotModeChanged",
        columnPivotChanged: "columnPivotChanged",
        columnGroupOpened: "columnGroupOpened",
        newColumnsLoaded: "newColumnsLoaded",
        gridColumnsChanged: "gridColumnsChanged",
        displayedColumnsChanged: "displayedColumnsChanged",
        virtualColumnsChanged: "virtualColumnsChanged",
        columnEverythingChanged: "columnEverythingChanged",
        columnsReset: "columnsReset",
        columnHeaderMouseOver: "columnHeaderMouseOver",
        columnHeaderMouseLeave: "columnHeaderMouseLeave",
        columnHeaderClicked: "columnHeaderClicked",
        columnHeaderContextMenu: "columnHeaderContextMenu",
        componentStateChanged: "componentStateChanged",
        cellValueChanged: "cellValueChanged",
        cellEditRequest: "cellEditRequest",
        rowValueChanged: "rowValueChanged",
        cellEditingStarted: "cellEditingStarted",
        cellEditingStopped: "cellEditingStopped",
        rowEditingStarted: "rowEditingStarted",
        rowEditingStopped: "rowEditingStopped",
        bulkEditingStarted: "bulkEditingStarted",
        bulkEditingStopped: "bulkEditingStopped",
        batchEditingStarted: "batchEditingStarted",
        batchEditingStopped: "batchEditingStopped",
        undoStarted: "undoStarted",
        undoEnded: "undoEnded",
        redoStarted: "redoStarted",
        redoEnded: "redoEnded",
        cellSelectionDeleteStart: "cellSelectionDeleteStart",
        cellSelectionDeleteEnd: "cellSelectionDeleteEnd",
        rangeDeleteStart: "rangeDeleteStart",
        rangeDeleteEnd: "rangeDeleteEnd",
        fillStart: "fillStart",
        fillEnd: "fillEnd",
        filterOpened: "filterOpened",
        filterChanged: "filterChanged",
        filterModified: "filterModified",
        filterUiChanged: "filterUiChanged",
        floatingFilterUiChanged: "floatingFilterUiChanged",
        advancedFilterBuilderVisibleChanged: "advancedFilterBuilderVisibleChanged",
        findChanged: "findChanged",
        chartCreated: "chartCreated",
        chartRangeSelectionChanged: "chartRangeSelectionChanged",
        chartOptionsChanged: "chartOptionsChanged",
        chartDestroyed: "chartDestroyed",
        cellKeyDown: "cellKeyDown",
        gridReady: "gridReady",
        firstDataRendered: "firstDataRendered",
        gridSizeChanged: "gridSizeChanged",
        modelUpdated: "modelUpdated",
        virtualRowRemoved: "virtualRowRemoved",
        viewportChanged: "viewportChanged",
        bodyScroll: "bodyScroll",
        bodyScrollEnd: "bodyScrollEnd",
        dragStarted: "dragStarted",
        dragStopped: "dragStopped",
        dragCancelled: "dragCancelled",
        stateUpdated: "stateUpdated",
        paginationChanged: "paginationChanged",
        rowDragEnter: "rowDragEnter",
        rowDragMove: "rowDragMove",
        rowDragLeave: "rowDragLeave",
        rowDragEnd: "rowDragEnd",
        rowDragCancel: "rowDragCancel",
        rowResizeStarted: "rowResizeStarted",
        rowResizeEnded: "rowResizeEnded",
        columnRowGroupChanged: "columnRowGroupChanged",
        rowGroupOpened: "rowGroupOpened",
        expandOrCollapseAll: "expandOrCollapseAll",
        pivotMaxColumnsExceeded: "pivotMaxColumnsExceeded",
        pinnedRowDataChanged: "pinnedRowDataChanged",
        pinnedRowsChanged: "pinnedRowsChanged",
        rowDataUpdated: "rowDataUpdated",
        asyncTransactionsFlushed: "asyncTransactionsFlushed",
        storeRefreshed: "storeRefreshed",
        headerFocused: "headerFocused",
        cellClicked: "cellClicked",
        cellDoubleClicked: "cellDoubleClicked",
        cellFocused: "cellFocused",
        cellMouseOver: "cellMouseOver",
        cellMouseOut: "cellMouseOut",
        cellMouseDown: "cellMouseDown",
        rowClicked: "rowClicked",
        rowDoubleClicked: "rowDoubleClicked",
        rowSelected: "rowSelected",
        selectionChanged: "selectionChanged",
        cellContextMenu: "cellContextMenu",
        rangeSelectionChanged: "rangeSelectionChanged",
        cellSelectionChanged: "cellSelectionChanged",
        tooltipShow: "tooltipShow",
        tooltipHide: "tooltipHide",
        sortChanged: "sortChanged"
      },
      features: [\u0275\u0275ProvidersFeature([AngularFrameworkOverrides, AngularFrameworkComponentWrapper]), \u0275\u0275NgOnChangesFeature],
      decls: 0,
      vars: 0,
      template: function AgGridAngular_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgGridAngular, [{
    type: Component,
    args: [{
      selector: "ag-grid-angular",
      standalone: true,
      template: "",
      providers: [AngularFrameworkOverrides, AngularFrameworkComponentWrapper],
      // tell angular we don't want view encapsulation, we don't want a shadow root
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: AngularFrameworkOverrides
  }, {
    type: AngularFrameworkComponentWrapper
  }], {
    gridOptions: [{
      type: Input
    }],
    modules: [{
      type: Input
    }],
    statusBar: [{
      type: Input
    }],
    sideBar: [{
      type: Input
    }],
    suppressContextMenu: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preventDefaultOnContextMenu: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowContextMenuWithControlKey: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    columnMenu: [{
      type: Input
    }],
    suppressMenuHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enableBrowserTooltips: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tooltipTrigger: [{
      type: Input
    }],
    tooltipShowDelay: [{
      type: Input
    }],
    tooltipSwitchShowDelay: [{
      type: Input
    }],
    tooltipHideDelay: [{
      type: Input
    }],
    tooltipMouseTrack: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tooltipShowMode: [{
      type: Input
    }],
    tooltipInteraction: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    popupParent: [{
      type: Input
    }],
    copyHeadersToClipboard: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    copyGroupHeadersToClipboard: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    clipboardDelimiter: [{
      type: Input
    }],
    suppressCopyRowsToClipboard: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressCopySingleCellRanges: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressLastEmptyLineOnPaste: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressClipboardPaste: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressClipboardApi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressCutToClipboard: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    columnDefs: [{
      type: Input
    }],
    defaultColDef: [{
      type: Input
    }],
    defaultColGroupDef: [{
      type: Input
    }],
    columnTypes: [{
      type: Input
    }],
    dataTypeDefinitions: [{
      type: Input
    }],
    maintainColumnOrder: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enableStrictPivotColumnOrder: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressFieldDotNotation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    headerHeight: [{
      type: Input
    }],
    groupHeaderHeight: [{
      type: Input
    }],
    floatingFiltersHeight: [{
      type: Input
    }],
    pivotHeaderHeight: [{
      type: Input
    }],
    pivotGroupHeaderHeight: [{
      type: Input
    }],
    hidePaddedHeaderRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowDragFromColumnsToolPanel: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressMovableColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressColumnMoveAnimation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressMoveWhenColumnDragging: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressDragLeaveHidesColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressGroupChangesColumnVisibility: [{
      type: Input
    }],
    suppressMakeColumnVisibleAfterUnGroup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressRowGroupHidesColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    colResizeDefault: [{
      type: Input
    }],
    suppressAutoSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoSizePadding: [{
      type: Input
    }],
    skipHeaderOnAutoSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoSizeStrategy: [{
      type: Input
    }],
    animateColumnResizing: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    components: [{
      type: Input
    }],
    editType: [{
      type: Input
    }],
    suppressStartEditOnTab: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    getFullRowEditValidationErrors: [{
      type: Input
    }],
    invalidEditValueMode: [{
      type: Input
    }],
    singleClickEdit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressClickEdit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readOnlyEdit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stopEditingWhenCellsLoseFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enterNavigatesVertically: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enterNavigatesVerticallyAfterEdit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enableCellEditingOnBackspace: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    undoRedoCellEditing: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    undoRedoCellEditingLimit: [{
      type: Input
    }],
    defaultCsvExportParams: [{
      type: Input
    }],
    suppressCsvExport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultExcelExportParams: [{
      type: Input
    }],
    suppressExcelExport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    excelStyles: [{
      type: Input
    }],
    findSearchValue: [{
      type: Input
    }],
    findOptions: [{
      type: Input
    }],
    quickFilterText: [{
      type: Input
    }],
    cacheQuickFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    includeHiddenColumnsInQuickFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    quickFilterParser: [{
      type: Input
    }],
    quickFilterMatcher: [{
      type: Input
    }],
    applyQuickFilterBeforePivotOrAgg: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    excludeChildrenWhenTreeDataFiltering: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enableAdvancedFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    alwaysPassFilter: [{
      type: Input
    }],
    includeHiddenColumnsInAdvancedFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    advancedFilterParent: [{
      type: Input
    }],
    advancedFilterBuilderParams: [{
      type: Input
    }],
    advancedFilterParams: [{
      type: Input
    }],
    suppressAdvancedFilterEval: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressSetFilterByDefault: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enableFilterHandlers: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterHandlers: [{
      type: Input
    }],
    enableCharts: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    chartThemes: [{
      type: Input
    }],
    customChartThemes: [{
      type: Input
    }],
    chartThemeOverrides: [{
      type: Input
    }],
    chartToolPanelsDef: [{
      type: Input
    }],
    chartMenuItems: [{
      type: Input
    }],
    loadingCellRenderer: [{
      type: Input
    }],
    loadingCellRendererParams: [{
      type: Input
    }],
    loadingCellRendererSelector: [{
      type: Input
    }],
    localeText: [{
      type: Input
    }],
    masterDetail: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    keepDetailRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    keepDetailRowsCount: [{
      type: Input
    }],
    detailCellRenderer: [{
      type: Input
    }],
    detailCellRendererParams: [{
      type: Input
    }],
    detailRowHeight: [{
      type: Input
    }],
    detailRowAutoHeight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    context: [{
      type: Input
    }],
    alignedGrids: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    rowBuffer: [{
      type: Input
    }],
    valueCache: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    valueCacheNeverExpires: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enableCellExpressions: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressTouch: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressFocusAfterRefresh: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressBrowserResizeObserver: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressPropertyNamesCheck: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressChangeDetection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    debug: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    overlayLoadingTemplate: [{
      type: Input
    }],
    loadingOverlayComponent: [{
      type: Input
    }],
    loadingOverlayComponentParams: [{
      type: Input
    }],
    suppressLoadingOverlay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    overlayNoRowsTemplate: [{
      type: Input
    }],
    noRowsOverlayComponent: [{
      type: Input
    }],
    noRowsOverlayComponentParams: [{
      type: Input
    }],
    suppressNoRowsOverlay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressOverlays: [{
      type: Input
    }],
    overlayComponent: [{
      type: Input
    }],
    overlayComponentParams: [{
      type: Input
    }],
    overlayComponentSelector: [{
      type: Input
    }],
    activeOverlay: [{
      type: Input
    }],
    activeOverlayParams: [{
      type: Input
    }],
    pagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    paginationPageSize: [{
      type: Input
    }],
    paginationPageSizeSelector: [{
      type: Input
    }],
    paginationAutoPageSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    paginateChildRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressPaginationPanel: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pivotMode: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pivotPanelShow: [{
      type: Input
    }],
    pivotMaxGeneratedColumns: [{
      type: Input
    }],
    pivotDefaultExpanded: [{
      type: Input
    }],
    pivotColumnGroupTotals: [{
      type: Input
    }],
    pivotRowTotals: [{
      type: Input
    }],
    pivotSuppressAutoColumn: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressExpandablePivotGroups: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    functionsReadOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    aggFuncs: [{
      type: Input
    }],
    formulaDataSource: [{
      type: Input
    }],
    formulaFuncs: [{
      type: Input
    }],
    suppressAggFuncInHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    alwaysAggregateAtRootLevel: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    aggregateOnlyChangedColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressAggFilteredOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    removePivotHeaderRowWhenSingleValueColumn: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    animateRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    cellFlashDuration: [{
      type: Input
    }],
    cellFadeDuration: [{
      type: Input
    }],
    allowShowChangeAfterFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    domLayout: [{
      type: Input
    }],
    ensureDomOrder: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enableCellSpan: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enableRtl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressColumnVirtualisation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressMaxRenderedRowRestriction: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressRowVirtualisation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowDragManaged: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    refreshAfterGroupEdit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowDragInsertDelay: [{
      type: Input
    }],
    suppressRowDrag: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressMoveWhenRowDragging: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowDragEntireRow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowDragMultiRow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowDragText: [{
      type: Input
    }],
    dragAndDropImageComponent: [{
      type: Input
    }],
    dragAndDropImageComponentParams: [{
      type: Input
    }],
    fullWidthCellRenderer: [{
      type: Input
    }],
    fullWidthCellRendererParams: [{
      type: Input
    }],
    embedFullWidthRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    groupDisplayType: [{
      type: Input
    }],
    groupDefaultExpanded: [{
      type: Input
    }],
    autoGroupColumnDef: [{
      type: Input
    }],
    groupMaintainOrder: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    groupSelectsChildren: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    groupLockGroupColumns: [{
      type: Input
    }],
    groupAggFiltering: [{
      type: Input
    }],
    groupTotalRow: [{
      type: Input
    }],
    grandTotalRow: [{
      type: Input
    }],
    suppressStickyTotalRow: [{
      type: Input
    }],
    groupSuppressBlankHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    groupSelectsFiltered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showOpenedGroup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    groupHideParentOfSingleChild: [{
      type: Input
    }],
    groupRemoveSingleChildren: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    groupRemoveLowestSingleChildren: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    groupHideOpenParents: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    groupAllowUnbalanced: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowGroupPanelShow: [{
      type: Input
    }],
    groupRowRenderer: [{
      type: Input
    }],
    groupRowRendererParams: [{
      type: Input
    }],
    treeData: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    treeDataChildrenField: [{
      type: Input
    }],
    treeDataParentIdField: [{
      type: Input
    }],
    rowGroupPanelSuppressSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressGroupRowsSticky: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    groupHierarchyConfig: [{
      type: Input
    }],
    pinnedTopRowData: [{
      type: Input
    }],
    pinnedBottomRowData: [{
      type: Input
    }],
    enableRowPinning: [{
      type: Input
    }],
    isRowPinnable: [{
      type: Input
    }],
    isRowPinned: [{
      type: Input
    }],
    rowModelType: [{
      type: Input
    }],
    rowData: [{
      type: Input
    }],
    asyncTransactionWaitMillis: [{
      type: Input
    }],
    suppressModelUpdateAfterUpdateTransaction: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    datasource: [{
      type: Input
    }],
    cacheOverflowSize: [{
      type: Input
    }],
    infiniteInitialRowCount: [{
      type: Input
    }],
    serverSideInitialRowCount: [{
      type: Input
    }],
    suppressServerSideFullWidthLoadingRow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    cacheBlockSize: [{
      type: Input
    }],
    maxBlocksInCache: [{
      type: Input
    }],
    maxConcurrentDatasourceRequests: [{
      type: Input
    }],
    blockLoadDebounceMillis: [{
      type: Input
    }],
    purgeClosedRowNodes: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    serverSideDatasource: [{
      type: Input
    }],
    serverSideSortAllLevels: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    serverSideEnableClientSideSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    serverSideOnlyRefreshFilteredGroups: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    serverSidePivotResultFieldSeparator: [{
      type: Input
    }],
    viewportDatasource: [{
      type: Input
    }],
    viewportRowModelPageSize: [{
      type: Input
    }],
    viewportRowModelBufferSize: [{
      type: Input
    }],
    alwaysShowHorizontalScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    alwaysShowVerticalScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    debounceVerticalScrollbar: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressHorizontalScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressScrollOnNewData: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressScrollWhenPopupsAreOpen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressAnimationFrame: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressMiddleClickScrolls: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressPreventDefaultOnMouseWheel: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollbarWidth: [{
      type: Input
    }],
    rowSelection: [{
      type: Input
    }],
    cellSelection: [{
      type: Input
    }],
    rowMultiSelectWithClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressRowDeselection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressRowClickSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressCellFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressHeaderFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionColumnDef: [{
      type: Input
    }],
    rowNumbers: [{
      type: Input
    }],
    suppressMultiRangeSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enableCellTextSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enableRangeSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enableRangeHandle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    enableFillHandle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fillHandleDirection: [{
      type: Input
    }],
    suppressClearOnFillReduction: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    sortingOrder: [{
      type: Input
    }],
    accentedSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    unSortIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressMultiSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    alwaysMultiSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    multiSortKey: [{
      type: Input
    }],
    suppressMaintainUnsortedOrder: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    icons: [{
      type: Input
    }],
    rowHeight: [{
      type: Input
    }],
    rowStyle: [{
      type: Input
    }],
    rowClass: [{
      type: Input
    }],
    rowClassRules: [{
      type: Input
    }],
    suppressRowHoverHighlight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    suppressRowTransform: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    columnHoverHighlight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    gridId: [{
      type: Input
    }],
    deltaSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    treeDataDisplayType: [{
      type: Input
    }],
    enableGroupEdit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    initialState: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    loadThemeGoogleFonts: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    themeCssLayer: [{
      type: Input
    }],
    styleNonce: [{
      type: Input
    }],
    themeStyleContainer: [{
      type: Input
    }],
    getContextMenuItems: [{
      type: Input
    }],
    getMainMenuItems: [{
      type: Input
    }],
    postProcessPopup: [{
      type: Input
    }],
    processUnpinnedColumns: [{
      type: Input
    }],
    processCellForClipboard: [{
      type: Input
    }],
    processHeaderForClipboard: [{
      type: Input
    }],
    processGroupHeaderForClipboard: [{
      type: Input
    }],
    processCellFromClipboard: [{
      type: Input
    }],
    sendToClipboard: [{
      type: Input
    }],
    processDataFromClipboard: [{
      type: Input
    }],
    isExternalFilterPresent: [{
      type: Input
    }],
    doesExternalFilterPass: [{
      type: Input
    }],
    getChartToolbarItems: [{
      type: Input
    }],
    createChartContainer: [{
      type: Input
    }],
    focusGridInnerElement: [{
      type: Input
    }],
    navigateToNextHeader: [{
      type: Input
    }],
    tabToNextHeader: [{
      type: Input
    }],
    navigateToNextCell: [{
      type: Input
    }],
    tabToNextCell: [{
      type: Input
    }],
    getLocaleText: [{
      type: Input
    }],
    getDocument: [{
      type: Input
    }],
    paginationNumberFormatter: [{
      type: Input
    }],
    getGroupRowAgg: [{
      type: Input
    }],
    isGroupOpenByDefault: [{
      type: Input
    }],
    ssrmExpandAllAffectsAllRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    initialGroupOrderComparator: [{
      type: Input
    }],
    processPivotResultColDef: [{
      type: Input
    }],
    processPivotResultColGroupDef: [{
      type: Input
    }],
    getDataPath: [{
      type: Input
    }],
    getChildCount: [{
      type: Input
    }],
    getServerSideGroupLevelParams: [{
      type: Input
    }],
    isServerSideGroupOpenByDefault: [{
      type: Input
    }],
    isApplyServerSideTransaction: [{
      type: Input
    }],
    isServerSideGroup: [{
      type: Input
    }],
    getServerSideGroupKey: [{
      type: Input
    }],
    getBusinessKeyForNode: [{
      type: Input
    }],
    getRowId: [{
      type: Input
    }],
    resetRowDataOnUpdate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    processRowPostCreate: [{
      type: Input
    }],
    isRowSelectable: [{
      type: Input
    }],
    isRowMaster: [{
      type: Input
    }],
    fillOperation: [{
      type: Input
    }],
    postSortRows: [{
      type: Input
    }],
    getRowStyle: [{
      type: Input
    }],
    getRowClass: [{
      type: Input
    }],
    getRowHeight: [{
      type: Input
    }],
    isFullWidthRow: [{
      type: Input
    }],
    isRowValidDropPosition: [{
      type: Input
    }],
    toolPanelVisibleChanged: [{
      type: Output
    }],
    toolPanelSizeChanged: [{
      type: Output
    }],
    columnMenuVisibleChanged: [{
      type: Output
    }],
    contextMenuVisibleChanged: [{
      type: Output
    }],
    cutStart: [{
      type: Output
    }],
    cutEnd: [{
      type: Output
    }],
    pasteStart: [{
      type: Output
    }],
    pasteEnd: [{
      type: Output
    }],
    columnVisible: [{
      type: Output
    }],
    columnPinned: [{
      type: Output
    }],
    columnResized: [{
      type: Output
    }],
    columnMoved: [{
      type: Output
    }],
    columnValueChanged: [{
      type: Output
    }],
    columnPivotModeChanged: [{
      type: Output
    }],
    columnPivotChanged: [{
      type: Output
    }],
    columnGroupOpened: [{
      type: Output
    }],
    newColumnsLoaded: [{
      type: Output
    }],
    gridColumnsChanged: [{
      type: Output
    }],
    displayedColumnsChanged: [{
      type: Output
    }],
    virtualColumnsChanged: [{
      type: Output
    }],
    columnEverythingChanged: [{
      type: Output
    }],
    columnsReset: [{
      type: Output
    }],
    columnHeaderMouseOver: [{
      type: Output
    }],
    columnHeaderMouseLeave: [{
      type: Output
    }],
    columnHeaderClicked: [{
      type: Output
    }],
    columnHeaderContextMenu: [{
      type: Output
    }],
    componentStateChanged: [{
      type: Output
    }],
    cellValueChanged: [{
      type: Output
    }],
    cellEditRequest: [{
      type: Output
    }],
    rowValueChanged: [{
      type: Output
    }],
    cellEditingStarted: [{
      type: Output
    }],
    cellEditingStopped: [{
      type: Output
    }],
    rowEditingStarted: [{
      type: Output
    }],
    rowEditingStopped: [{
      type: Output
    }],
    bulkEditingStarted: [{
      type: Output
    }],
    bulkEditingStopped: [{
      type: Output
    }],
    batchEditingStarted: [{
      type: Output
    }],
    batchEditingStopped: [{
      type: Output
    }],
    undoStarted: [{
      type: Output
    }],
    undoEnded: [{
      type: Output
    }],
    redoStarted: [{
      type: Output
    }],
    redoEnded: [{
      type: Output
    }],
    cellSelectionDeleteStart: [{
      type: Output
    }],
    cellSelectionDeleteEnd: [{
      type: Output
    }],
    rangeDeleteStart: [{
      type: Output
    }],
    rangeDeleteEnd: [{
      type: Output
    }],
    fillStart: [{
      type: Output
    }],
    fillEnd: [{
      type: Output
    }],
    filterOpened: [{
      type: Output
    }],
    filterChanged: [{
      type: Output
    }],
    filterModified: [{
      type: Output
    }],
    filterUiChanged: [{
      type: Output
    }],
    floatingFilterUiChanged: [{
      type: Output
    }],
    advancedFilterBuilderVisibleChanged: [{
      type: Output
    }],
    findChanged: [{
      type: Output
    }],
    chartCreated: [{
      type: Output
    }],
    chartRangeSelectionChanged: [{
      type: Output
    }],
    chartOptionsChanged: [{
      type: Output
    }],
    chartDestroyed: [{
      type: Output
    }],
    cellKeyDown: [{
      type: Output
    }],
    gridReady: [{
      type: Output
    }],
    firstDataRendered: [{
      type: Output
    }],
    gridSizeChanged: [{
      type: Output
    }],
    modelUpdated: [{
      type: Output
    }],
    virtualRowRemoved: [{
      type: Output
    }],
    viewportChanged: [{
      type: Output
    }],
    bodyScroll: [{
      type: Output
    }],
    bodyScrollEnd: [{
      type: Output
    }],
    dragStarted: [{
      type: Output
    }],
    dragStopped: [{
      type: Output
    }],
    dragCancelled: [{
      type: Output
    }],
    stateUpdated: [{
      type: Output
    }],
    paginationChanged: [{
      type: Output
    }],
    rowDragEnter: [{
      type: Output
    }],
    rowDragMove: [{
      type: Output
    }],
    rowDragLeave: [{
      type: Output
    }],
    rowDragEnd: [{
      type: Output
    }],
    rowDragCancel: [{
      type: Output
    }],
    rowResizeStarted: [{
      type: Output
    }],
    rowResizeEnded: [{
      type: Output
    }],
    columnRowGroupChanged: [{
      type: Output
    }],
    rowGroupOpened: [{
      type: Output
    }],
    expandOrCollapseAll: [{
      type: Output
    }],
    pivotMaxColumnsExceeded: [{
      type: Output
    }],
    pinnedRowDataChanged: [{
      type: Output
    }],
    pinnedRowsChanged: [{
      type: Output
    }],
    rowDataUpdated: [{
      type: Output
    }],
    asyncTransactionsFlushed: [{
      type: Output
    }],
    storeRefreshed: [{
      type: Output
    }],
    headerFocused: [{
      type: Output
    }],
    cellClicked: [{
      type: Output
    }],
    cellDoubleClicked: [{
      type: Output
    }],
    cellFocused: [{
      type: Output
    }],
    cellMouseOver: [{
      type: Output
    }],
    cellMouseOut: [{
      type: Output
    }],
    cellMouseDown: [{
      type: Output
    }],
    rowClicked: [{
      type: Output
    }],
    rowDoubleClicked: [{
      type: Output
    }],
    rowSelected: [{
      type: Output
    }],
    selectionChanged: [{
      type: Output
    }],
    cellContextMenu: [{
      type: Output
    }],
    rangeSelectionChanged: [{
      type: Output
    }],
    cellSelectionChanged: [{
      type: Output
    }],
    tooltipShow: [{
      type: Output
    }],
    tooltipHide: [{
      type: Output
    }],
    sortChanged: [{
      type: Output
    }]
  });
})();
var booleanMixedGridOptions = new Set(_BOOLEAN_MIXED_GRID_OPTIONS);
function getValueOrCoercedValue(key, valueToUse) {
  if (booleanMixedGridOptions.has(key)) {
    return valueToUse === "" ? true : valueToUse === "false" ? false : valueToUse;
  }
  return valueToUse;
}
var AgGridModule = class _AgGridModule {
  static {
    this.\u0275fac = function AgGridModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AgGridModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _AgGridModule,
      imports: [AgGridAngular],
      exports: [AgGridAngular]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgGridModule, [{
    type: NgModule,
    args: [{
      imports: [AgGridAngular],
      exports: [AgGridAngular]
    }]
  }], null, null);
})();

// src/app/modules/smart-batch/template-match.util.ts
function resolvePath(path, data) {
  if (!path || !data)
    return void 0;
  const parts = path.split(".");
  let current = data;
  for (const part of parts) {
    if (current == null || typeof current !== "object")
      return void 0;
    current = current[part];
  }
  return current;
}
function hasValue(value, forTable) {
  if (value == null)
    return false;
  if (forTable)
    return typeof value === "object" && !Array.isArray(value);
  return true;
}
function extractTemplateDataPaths(template) {
  const paths = [];
  const addFromSection = (section) => {
    if (!section?.dataPath)
      return;
    if (section.type === "field") {
      paths.push({ path: section.dataPath, label: section.label, isTable: false });
    } else if (section.type === "table") {
      paths.push({ path: section.dataPath, label: section.label, isTable: true });
    }
  };
  if (template.header?.dataPath)
    addFromSection(template.header);
  if (template.footer?.dataPath)
    addFromSection(template.footer);
  for (const s of template.sections ?? []) {
    addFromSection(s);
  }
  return paths;
}
function buildRowDataForResolution(row) {
  const data = {
    inputData: row.inputData ?? {},
    results: row.results ?? {}
  };
  return data;
}
function validateTemplateAgainstData(template, rowData) {
  const paths = extractTemplateDataPaths(template);
  const matchedPaths = [];
  const missingPaths = [];
  for (const { path, label, isTable } of paths) {
    const value = resolvePath(path, rowData);
    if (hasValue(value, isTable)) {
      matchedPaths.push(path);
    } else {
      missingPaths.push({ path, label });
    }
  }
  return {
    matches: missingPaths.length === 0,
    matchedPaths,
    missingPaths
  };
}

// src/app/modules/smart-batch/report-viewer/report-viewer.component.ts
var _c0 = (a0) => ({ count: a0 });
var _c1 = (a0) => ({ index: a0 });
var _c2 = () => ({ sortable: true, resizable: true, filter: true });
var _c3 = () => [5, 10, 25, 100];
var _forTrack0 = ($index, $item) => $item._id;
var _forTrack1 = ($index, $item) => $item.rowIndex;
var _forTrack2 = ($index, $item) => $item.sequence;
function ReportViewerComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementEnd();
  }
}
function ReportViewerComponent_Conditional_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon", 33);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 35);
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_7_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openReportBuilder(true));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "smartReport.noTemplatesFound"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "smartReport.createTemplate"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_8_For_2_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43)(1, "mat-icon", 45);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "smartReport.templateMatchesData"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_8_For_2_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "mat-icon", 45);
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const match_r6 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "smartReport.paths") + ": " + ctx_r2.formatMissingPaths(match_r6.missingPaths));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, "smartReport.missingFields", \u0275\u0275pureFunction1(7, _c0, match_r6.missingPaths.length)), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_8_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportViewerComponent_Conditional_23_Conditional_8_For_2_Conditional_11_Conditional_0_Template, 5, 3, "span", 43)(1, ReportViewerComponent_Conditional_23_Conditional_8_For_2_Conditional_11_Conditional_1_Template, 6, 9, "span", 44);
  }
  if (rf & 2) {
    const match_r6 = ctx;
    \u0275\u0275conditional(match_r6.matches ? 0 : match_r6.missingPaths.length > 0 ? 1 : -1);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_8_For_2_Template_div_click_0_listener() {
      const template_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectTemplate(template_r5));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "div", 39)(3, "mat-icon");
    \u0275\u0275text(4, " description ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 40)(6, "p", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 42);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ReportViewerComponent_Conditional_23_Conditional_8_For_2_Conditional_11_Template, 2, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_20_0;
    const template_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-indigo-500", ((tmp_12_0 = ctx_r2.selectedTemplate()) == null ? null : tmp_12_0._id) === template_r5._id)("bg-indigo-50", ((tmp_13_0 = ctx_r2.selectedTemplate()) == null ? null : tmp_13_0._id) === template_r5._id)("border-gray-200", ((tmp_14_0 = ctx_r2.selectedTemplate()) == null ? null : tmp_14_0._id) !== template_r5._id)("hover:border-indigo-300", ((tmp_15_0 = ctx_r2.selectedTemplate()) == null ? null : tmp_15_0._id) !== template_r5._id);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", (template_r5.primaryColor || "#4F46E5") + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", template_r5.primaryColor || "#4F46E5");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", template_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", (template_r5.sections == null ? null : template_r5.sections.length) || 0, " ", \u0275\u0275pipeBind1(10, 17, "smartReport.sections"), " \u2022 ", template_r5.pdfEngine || "puppeteer", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_20_0 = ((tmp_20_0 = ctx_r2.selectedTemplate()) == null ? null : tmp_20_0._id) === template_r5._id && ctx_r2.templateMatch()) ? 11 : -1, tmp_20_0);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, ReportViewerComponent_Conditional_23_Conditional_8_For_2_Template, 12, 19, "div", 36, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.templates());
  }
}
function ReportViewerComponent_Conditional_23_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 47)(1, "mat-icon", 48);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 49);
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_9_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openReportBuilder());
    });
    \u0275\u0275elementStart(7, "mat-icon", 50);
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "smartReport.templateReadyToUse"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "smartReport.editInBuilder"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 51)(1, "mat-icon", 48);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 52);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 53);
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_9_Conditional_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openReportBuilder());
    });
    \u0275\u0275elementStart(10, "mat-icon", 50);
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const match_r9 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 4, "smartReport.missingFieldsEditInBuilder", \u0275\u0275pureFunction1(11, _c0, match_r9.missingPaths.length)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(8, 7, "smartReport.paths"), ": ", ctx_r2.formatMissingPaths(match_r9.missingPaths), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 9, "smartReport.editInBuilder"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, ReportViewerComponent_Conditional_23_Conditional_9_Conditional_1_Template, 11, 6)(2, ReportViewerComponent_Conditional_23_Conditional_9_Conditional_2_Template, 14, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const match_r9 = ctx;
    \u0275\u0275classProp("bg-emerald-50", match_r9.matches)("bg-amber-50", !match_r9.matches);
    \u0275\u0275advance();
    \u0275\u0275conditional(match_r9.matches ? 1 : 2);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 57);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.generating"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartReport.generatePdf"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 57);
    \u0275\u0275text(1, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "smartReport.sending"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartReport.sendViaEmail"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.downloadReport());
    });
    \u0275\u0275elementStart(1, "mat-icon", 59);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 60);
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.sendEmail());
    });
    \u0275\u0275template(6, ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Conditional_3_Conditional_6_Template, 4, 3)(7, ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Conditional_3_Conditional_7_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "smartReport.downloadPdf"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isSending());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSending() ? 6 : 7);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.generateReport());
    });
    \u0275\u0275template(1, ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Conditional_1_Template, 4, 3)(2, ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Conditional_2_Template, 2, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Conditional_3_Template, 8, 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r2.isGenerating());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isGenerating() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.report() ? 3 : -1);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "p", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 63);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 64)(8, "button", 58);
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_10_Conditional_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.downloadAsCsv());
    });
    \u0275\u0275elementStart(9, "mat-icon", 59);
    \u0275\u0275text(10, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 58);
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_10_Conditional_6_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.downloadAsExcel());
    });
    \u0275\u0275elementStart(14, "mat-icon", 59);
    \u0275\u0275text(15, "table_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("border-t", ctx_r2.selectedTemplate())("border-gray-100", ctx_r2.selectedTemplate())("mt-3", ctx_r2.selectedTemplate());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 10, "smartReport.exportData"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 12, "smartReport.detailedExportHint"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 14, "smartReport.downloadAsCsv"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 16, "smartReport.downloadAsExcel"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54);
    \u0275\u0275template(5, ReportViewerComponent_Conditional_23_Conditional_10_Conditional_5_Template, 4, 3)(6, ReportViewerComponent_Conditional_23_Conditional_10_Conditional_6_Template, 18, 18, "div", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "smartReport.actions"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selectedTemplate() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.stepResultBlocks().length > 0 ? 6 : -1);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "smartReport.reportForRecord", \u0275\u0275pureFunction1(4, _c1, ctx_r2.selectedRowIndex() + 1)), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "smartReport.dragSectionsReorder"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-button-toggle-group", 65);
    \u0275\u0275listener("change", function ReportViewerComponent_Conditional_23_Conditional_23_Template_mat_button_toggle_group_change_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.stepResultsViewMode.set($event.value));
    });
    \u0275\u0275elementStart(1, "mat-button-toggle", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-button-toggle", 67);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-button-toggle", 68);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r2.stepResultsViewMode());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "smartReport.viewModeTable"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "smartReport.viewModeJson"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "smartReport.viewModeExcelAg"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "mat-icon", 70);
    \u0275\u0275text(2, "table_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 71);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 72);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "smartReport.noStepResultsYet"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "smartReport.processBatchToSeeResults"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "ag-grid-angular", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("rowData", ctx_r2.gridRowData())("columnDefs", ctx_r2.gridColumnDefs())("defaultColDef", \u0275\u0275pureFunction0(7, _c2))("rowHeight", 44)("headerHeight", 44)("suppressRowClickSelection", true)("domLayout", "normal");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateSearchQuery(""));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_7_For_2_Conditional_6_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 93)(1, "td", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", field_r16.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", field_r16.value, " ");
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_7_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 91)(1, "tbody");
    \u0275\u0275repeaterCreate(2, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_7_For_2_Conditional_6_For_3_Template, 5, 2, "tr", 93, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.getStepResultFields(step_r17.data, step_r17.featureCode));
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_7_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 92);
    \u0275\u0275text(1, " \u2014 ");
    \u0275\u0275elementEnd();
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "p", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_7_For_2_Conditional_6_Template, 4, 0, "table", 91)(7, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_7_For_2_Conditional_7_Template, 2, 0, "p", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", step_r17.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", \u0275\u0275pipeBind1(5, 4, "smartReport.step"), " ", step_r17.sequence, ")");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r17.data != null ? 6 : 7);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275repeaterCreate(1, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_7_For_2_Template, 8, 6, "div", 88, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recordBlock_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(recordBlock_r18.steps);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_8_For_2_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "smartReport.copied"));
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_8_For_2_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 102);
    \u0275\u0275text(1, "content_copy");
    \u0275\u0275elementEnd();
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_8_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_8_For_2_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const step_r20 = \u0275\u0275nextContext().$implicit;
      const recordBlock_r18 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.copyStepJsonToClipboard(step_r20.data, recordBlock_r18.rowIndex, step_r20.sequence));
    });
    \u0275\u0275template(3, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_8_For_2_Conditional_7_Conditional_3_Template, 3, 3, "span", 101)(4, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_8_For_2_Conditional_7_Conditional_4_Template, 2, 0, "mat-icon", 102);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r20 = \u0275\u0275nextContext().$implicit;
    const recordBlock_r18 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 3, "smartReport.copyJson"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 5, "smartReport.copyJson"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.jsonCopyShowsCopied(recordBlock_r18.rowIndex, step_r20.sequence) ? 3 : 4);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "p", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 97);
    \u0275\u0275template(7, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_8_For_2_Conditional_7_Template, 5, 7, "button", 98);
    \u0275\u0275elementStart(8, "pre", 99);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", step_r20.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", \u0275\u0275pipeBind1(5, 5, "smartReport.step"), " ", step_r20.sequence, ")");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(step_r20.data != null ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatJson(step_r20.data));
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275repeaterCreate(1, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_8_For_2_Template, 10, 7, "div", 96, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recordBlock_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(recordBlock_r18.steps);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 85)(2, "mat-icon", 86);
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_7_Template, 3, 0, "div", 87)(8, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Conditional_8_Template, 3, 0, "div", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recordBlock_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(6, 3, "smartReport.row"), " #", recordBlock_r18.rowIndex + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.stepResultsViewMode() === "table" ? 7 : 8);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "mat-form-field", 76)(2, "mat-icon", 77);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 78);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275listener("ngModelChange", function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.updateSearchQuery($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_button_9_Template, 3, 0, "button", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-paginator", 80);
    \u0275\u0275listener("page", function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_Template_mat_paginator_page_10_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.handlePageEvent($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 81)(12, "div", 82);
    \u0275\u0275repeaterCreate(13, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_For_14_Template, 9, 5, "div", 83, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "smartReport.searchRecords"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.searchQuery())("placeholder", \u0275\u0275pipeBind1(8, 10, "smartReport.typeToFind"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.searchQuery());
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r2.totalRecords())("pageSize", ctx_r2.pageSize())("pageSizeOptions", \u0275\u0275pureFunction0(12, _c3))("showFirstLastButtons", true);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.recordResultBlocks());
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_0_Template, 2, 8, "div", 73)(1, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Conditional_1_Template, 15, 13);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.stepResultsViewMode() === "excel-ag" ? 0 : 1);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_1_Template, 9, 6, "div", 69)(2, ReportViewerComponent_Conditional_23_Conditional_29_Conditional_2_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.stepResultBlocks().length === 0 ? 1 : 2);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "mat-spinner", 103);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "smartReport.generatingPdf"));
  }
}
function ReportViewerComponent_Conditional_23_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105)(1, "button", 106);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_40_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPreviewPage(ctx_r2.previewPageIndex() - 1));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 107);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 106);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Conditional_40_Conditional_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.goToPreviewPage(ctx_r2.previewPageIndex() + 1));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.previewPageIndex() <= 0)("matTooltip", \u0275\u0275pipeBind1(2, 8, "smartReport.previewPrevious"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate4(" ", \u0275\u0275pipeBind1(7, 10, "smartReport.previewPage"), " ", ctx_r2.previewPageIndex() + 1, " ", \u0275\u0275pipeBind1(8, 12, "smartReport.previewPageOf"), " ", ctx_r2.previewDataForAllRows().length, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.previewPageIndex() >= ctx_r2.previewDataForAllRows().length - 1)("matTooltip", \u0275\u0275pipeBind1(10, 14, "smartReport.previewNext"));
  }
}
function ReportViewerComponent_Conditional_23_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "report-preview", 104);
    \u0275\u0275template(1, ReportViewerComponent_Conditional_23_Conditional_40_Conditional_1_Template, 13, 16, "div", 105);
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("template", ctx_r2.selectedTemplate())("previewData", ctx_r2.previewDataForCurrentPage())("primaryColor", ctx_r2.selectedTemplate().primaryColor || "#4F46E5")("orientation", "portrait")("clickable", false)("logoUrl", ctx_r2.selectedTemplate().logo || null)("legend", ctx_r2.selectedTemplate().legend || "")("showPageNumbers", ctx_r2.selectedTemplate().showPageNumbers || false)("pageNumberPosition", ctx_r2.selectedTemplate().pageNumberPosition || "bottom-center")("watermarkEnabled", ((tmp_11_0 = ctx_r2.selectedTemplate().watermark) == null ? null : tmp_11_0.enabled) || false)("watermarkType", ((tmp_12_0 = ctx_r2.selectedTemplate().watermark) == null ? null : tmp_12_0.type) || "text")("watermarkText", ((tmp_13_0 = ctx_r2.selectedTemplate().watermark) == null ? null : tmp_13_0.text) || "CONFIDENTIAL")("watermarkOpacity", (tmp_14_0 = (tmp_14_0 = ctx_r2.selectedTemplate().watermark) == null ? null : tmp_14_0.opacity) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : 0.08)("watermarkPattern", ((tmp_15_0 = ctx_r2.selectedTemplate().watermark) == null ? null : tmp_15_0.pattern) || "single");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.previewDataForAllRows().length > 1 ? 1 : -1);
  }
}
function ReportViewerComponent_Conditional_23_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "mat-icon", 108);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 109);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 34);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "smartReport.noPreviewAvailable"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 4, "smartReport.selectTemplateAndBatch"), " ");
  }
}
function ReportViewerComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 14)(2, "div", 15)(3, "div", 16)(4, "h3", 17);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ReportViewerComponent_Conditional_23_Conditional_7_Template, 9, 6, "div", 18)(8, ReportViewerComponent_Conditional_23_Conditional_8_Template, 3, 0, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ReportViewerComponent_Conditional_23_Conditional_9_Template, 3, 5, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ReportViewerComponent_Conditional_23_Conditional_10_Template, 7, 5, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 22)(12, "div", 15)(13, "div", 23)(14, "div", 24)(15, "div")(16, "h3", 25);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 26);
    \u0275\u0275template(20, ReportViewerComponent_Conditional_23_Conditional_20_Template, 2, 6)(21, ReportViewerComponent_Conditional_23_Conditional_21_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 27);
    \u0275\u0275template(23, ReportViewerComponent_Conditional_23_Conditional_23_Template, 10, 10, "mat-button-toggle-group", 28);
    \u0275\u0275elementStart(24, "button", 29);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275listener("click", function ReportViewerComponent_Conditional_23_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleStepResultsContent());
    });
    \u0275\u0275elementStart(27, "mat-icon", 30);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(29, ReportViewerComponent_Conditional_23_Conditional_29_Template, 3, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 15)(31, "div", 23)(32, "h3", 25);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 26);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 31);
    \u0275\u0275template(39, ReportViewerComponent_Conditional_23_Conditional_39_Template, 5, 3, "div", 32)(40, ReportViewerComponent_Conditional_23_Conditional_40_Template, 2, 15)(41, ReportViewerComponent_Conditional_23_Conditional_41_Template, 9, 6, "div", 32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_13_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 13, "smartReport.selectTemplate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.templates().length === 0 ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = ctx_r2.selectedTemplate() && ctx_r2.templateMatch()) ? 9 : -1, tmp_3_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedTemplate() || ctx_r2.stepResultBlocks().length > 0 ? 10 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 15, "smartReport.stepResultsLayout"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.selectedRowIndex() != null ? 20 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.stepResultBlocks().length > 0 ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", ctx_r2.stepResultsContentExpanded() ? \u0275\u0275pipeBind1(25, 17, "smartReport.collapseContent") : \u0275\u0275pipeBind1(26, 19, "smartReport.expandContent"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.stepResultsContentExpanded() ? "expand_more" : "expand_less");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.stepResultsContentExpanded() ? 29 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 21, "smartReport.preview"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 23, "smartReport.previewSameAsBuilder"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isGenerating() ? 39 : ctx_r2.selectedTemplate() && ((tmp_13_0 = ctx_r2.batch()) == null ? null : tmp_13_0.rows == null ? null : tmp_13_0.rows.length) ? 40 : 41);
  }
}
var STEP_FIELD_LABEL_SAMPLE_ROW_LIMIT = 200;
var ReportViewerComponent = class _ReportViewerComponent {
  toggleStepResultsContent() {
    this.stepResultsContentExpanded.update((v) => !v);
  }
  handlePageEvent(e) {
    this.pageIndex.set(e.pageIndex);
    this.pageSize.set(e.pageSize);
  }
  updateSearchQuery(query) {
    this.searchQuery.set(query);
    this.pageIndex.set(0);
  }
  goToPreviewPage(index) {
    const max = this.previewDataForAllRows().length - 1;
    this.previewPageIndex.set(Math.min(Math.max(0, index), max));
  }
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._snack = inject(MatSnackBar);
    this._reportService = inject(SmartReportService);
    this._batchService = inject(SmartBatchService);
    this._previewDataService = inject(ReportBuilderPreviewDataService);
    this._sanitizer = inject(DomSanitizer);
    this._dialog = inject(MatDialog);
    this._transloco = inject(TranslocoService);
    this.configId = signal(null);
    this.batchId = signal(null);
    this.selectedRowIndex = signal(null);
    this.batch = signal(null);
    this.configuration = signal(null);
    this.templates = signal([]);
    this.selectedTemplate = signal(null);
    this.report = signal(null);
    this.stepBlocksOrder = signal([]);
    this.isLoading = signal(false);
    this.isGenerating = signal(false);
    this.isSending = signal(false);
    this.stepResultsViewMode = signal("table");
    this.stepResultsContentExpanded = signal(true);
    this.pageIndex = signal(0);
    this.pageSize = signal(10);
    this.pdfDataUrl = signal(null);
    this.pdfSafeUrl = signal(null);
    this.searchQuery = signal("");
    this.filteredRows = computed(() => {
      const b = this.batch();
      let rows = b?.rows ?? [];
      const rowIndex = this.selectedRowIndex();
      const query = this.searchQuery().toLowerCase().trim();
      if (rowIndex != null) {
        rows = rows.filter((r) => r.rowIndex === rowIndex);
      }
      if (query) {
        rows = rows.filter((row) => {
          if (row.inputData && JSON.stringify(row.inputData).toLowerCase().includes(query)) {
            return true;
          }
          if (row.results) {
            return JSON.stringify(row.results).toLowerCase().includes(query);
          }
          return false;
        });
      }
      return rows;
    });
    this.stepResultBlocks = computed(() => {
      const order = this.stepBlocksOrder();
      const rows = this.filteredRows();
      return order.map((block) => ({
        sequence: block.sequence,
        label: block.label,
        rowResults: rows.map((row) => ({
          rowIndex: row.rowIndex,
          data: row.results?.[block.sequence] ?? null,
          inputData: row.inputData
        }))
      }));
    });
    this.totalRecords = computed(() => {
      return this.filteredRows().length;
    });
    this.recordResultBlocks = computed(() => {
      const order = this.stepBlocksOrder();
      const rows = this.filteredRows();
      const start = this.pageIndex() * this.pageSize();
      const end = start + this.pageSize();
      const paginatedRows = rows.slice(start, end);
      return paginatedRows.map((row) => ({
        rowIndex: row.rowIndex,
        steps: order.map((block) => ({
          sequence: block.sequence,
          label: block.label,
          featureCode: block.featureCode,
          data: row.results?.[block.sequence] ?? null
        }))
      }));
    });
    this.hasStepResults = computed(() => {
      const b = this.batch();
      const rows = b?.rows ?? [];
      return rows.some((row) => row.results && Object.keys(row.results).length > 0);
    });
    this.previewData = computed(() => {
      const b = this.batch();
      const rows = b?.rows ?? [];
      const rowIndex = this.selectedRowIndex();
      const row = rowIndex != null ? rows.find((r) => r.rowIndex === rowIndex) : rows[0];
      if (!row)
        return { inputData: {}, results: {} };
      return {
        batchName: b?.name ?? "Batch",
        rowIndex: row.rowIndex,
        inputData: row.inputData ?? {},
        results: row.results ?? {}
      };
    });
    this.previewDataForAllRows = computed(() => {
      const b = this.batch();
      const rows = b?.rows ?? [];
      const rowIndex = this.selectedRowIndex();
      const filtered = rowIndex != null ? rows.filter((r) => r.rowIndex === rowIndex) : rows;
      return filtered.map((row) => ({
        batchName: b?.name ?? "Batch",
        rowIndex: row.rowIndex,
        inputData: row.inputData ?? {},
        results: row.results ?? {}
      }));
    });
    this.previewPageIndex = signal(0);
    this.previewDataForCurrentPage = computed(() => {
      const all = this.previewDataForAllRows();
      const idx = Math.min(Math.max(0, this.previewPageIndex()), all.length - 1);
      return all[idx] ?? { inputData: {}, results: {} };
    });
    this.jsonCopyFeedbackKey = signal(null);
    this._jsonCopyClearTimer = null;
    this.templateMatch = computed(() => {
      const template = this.selectedTemplate();
      const b = this.batch();
      if (!template?.sections?.length || !b?.rows?.length)
        return null;
      const rows = b.rows;
      const rowIndex = this.selectedRowIndex();
      const row = rowIndex != null ? rows.find((r) => r.rowIndex === rowIndex) : rows[0];
      if (!row)
        return null;
      const rowData = buildRowDataForResolution(row);
      return validateTemplateAgainstData(template, rowData);
    });
    this.gridColumnDefs = computed(() => this._buildGridColumnDefs());
    this.gridRowData = computed(() => this._buildGridRowDataByRecord());
    effect(() => {
      const all = this.previewDataForAllRows();
      const current = this.previewPageIndex();
      if (all.length > 0 && current >= all.length) {
        this.previewPageIndex.set(0);
      }
    });
  }
  ngOnDestroy() {
    this._clearJsonCopyTimer();
  }
  _clearJsonCopyTimer() {
    if (this._jsonCopyClearTimer != null) {
      clearTimeout(this._jsonCopyClearTimer);
      this._jsonCopyClearTimer = null;
    }
  }
  jsonCopyShowsCopied(rowIndex, sequence) {
    return this.jsonCopyFeedbackKey() === this._stepJsonFeedbackKey(rowIndex, sequence);
  }
  _stepJsonFeedbackKey(rowIndex, sequence) {
    return `${rowIndex}_${sequence}`;
  }
  copyStepJsonToClipboard(stepData, rowIndex, sequence) {
    const text = this.formatJson(stepData);
    const key = this._stepJsonFeedbackKey(rowIndex, sequence);
    void navigator.clipboard.writeText(text).then(() => {
      this._clearJsonCopyTimer();
      this.jsonCopyFeedbackKey.set(key);
      this._jsonCopyClearTimer = setTimeout(() => {
        this.jsonCopyFeedbackKey.update((current) => current === key ? null : current);
        this._jsonCopyClearTimer = null;
      }, 2400);
    }, () => {
      this._snack.open(this._transloco.translate("smartReport.failedToCopy"), "Close", {
        duration: 3e3
      });
    });
  }
  ngOnInit() {
    this._route.params.subscribe((params) => {
      this.configId.set(params["configId"]);
      this.batchId.set(params["batchId"]);
      this._loadData();
    });
    this._route.queryParams.subscribe((query) => {
      const rowIndex = query["rowIndex"];
      if (rowIndex != null && rowIndex !== "") {
        const n = parseInt(rowIndex, 10);
        this.selectedRowIndex.set(Number.isNaN(n) ? null : n);
      } else {
        this.selectedRowIndex.set(null);
      }
    });
  }
  _buildGridColumnDefs() {
    const blocks = this.stepResultBlocks();
    const allFieldLabels = /* @__PURE__ */ new Set();
    for (const block of blocks) {
      for (const rowResult of block.rowResults) {
        if (rowResult.data != null) {
          this.getStepResultFields(rowResult.data, block.featureCode).forEach((f) => allFieldLabels.add(f.label));
        }
      }
    }
    const fieldLabels = sortStepExportFieldLabels(Array.from(allFieldLabels));
    const colDefs = [
      { field: "step", headerName: "Step", width: 220, flex: 0 },
      { field: "rowNum", headerName: "Row #", width: 80, flex: 0 }
    ];
    fieldLabels.forEach((label) => {
      colDefs.push({ field: label, headerName: label, minWidth: 130, flex: 1 });
    });
    return colDefs;
  }
  _buildGridRowData() {
    const blocks = this.stepResultBlocks();
    const allFieldLabels = /* @__PURE__ */ new Set();
    for (const block of blocks) {
      for (const rowResult of block.rowResults) {
        if (rowResult.data != null) {
          this.getStepResultFields(rowResult.data, block.featureCode).forEach((f) => allFieldLabels.add(f.label));
        }
      }
    }
    const fieldLabels = sortStepExportFieldLabels(Array.from(allFieldLabels));
    const rows = [];
    for (const block of blocks) {
      for (const rowResult of block.rowResults) {
        const row = { step: block.label, rowNum: rowResult.rowIndex + 1 };
        const fieldsMap = /* @__PURE__ */ new Map();
        if (rowResult.data != null) {
          this.getStepResultFields(rowResult.data, block.featureCode).forEach((f) => fieldsMap.set(f.label, f.value));
        }
        fieldLabels.forEach((label) => row[label] = fieldsMap.get(label) ?? "");
        rows.push(row);
      }
    }
    return rows;
  }
  /** Excel v1: record-first order (Record 1 Step 1, Record 1 Step 2, Record 2 Step 1, ...) */
  _buildGridRowDataByRecord() {
    const filteredRows = this.filteredRows();
    const order = this.stepBlocksOrder();
    const allFieldLabels = /* @__PURE__ */ new Set();
    const sampleRows = filteredRows.slice(0, STEP_FIELD_LABEL_SAMPLE_ROW_LIMIT);
    for (const row of sampleRows) {
      for (const block of order) {
        const data = row.results?.[block.sequence];
        if (data != null) {
          this.getStepResultFields(data, block.featureCode).forEach((f) => allFieldLabels.add(f.label));
        }
        if (row.inputData?.documentNumber)
          allFieldLabels.add("Document Number");
        if (row.inputData?.documentType)
          allFieldLabels.add("Document Type");
      }
    }
    const fieldLabels = sortStepExportFieldLabels(Array.from(allFieldLabels));
    const gridRows = [];
    for (const row of filteredRows) {
      for (const block of order) {
        const stepData = row.results?.[block.sequence];
        const gridRow = { step: block.label, rowNum: row.rowIndex + 1 };
        const fieldsMap = /* @__PURE__ */ new Map();
        if (stepData != null) {
          this.getStepResultFields(stepData, block.featureCode).forEach((f) => fieldsMap.set(f.label, f.value));
        }
        if (!fieldsMap.has("Document Number") && row.inputData?.documentNumber) {
          fieldsMap.set("Document Number", String(row.inputData.documentNumber));
        }
        if (!fieldsMap.has("Document Type") && row.inputData?.documentType) {
          fieldsMap.set("Document Type", String(row.inputData.documentType));
        }
        fieldLabels.forEach((label) => gridRow[label] = fieldsMap.get(label) ?? "");
        gridRows.push(gridRow);
      }
    }
    return gridRows;
  }
  _loadData() {
    this.isLoading.set(true);
    const configId = this.configId();
    const batchId = this.batchId();
    const loadTemplates = (config) => {
      this._reportService.getTemplates(configId || void 0).subscribe({
        next: (templates) => {
          this.templates.set(templates);
          if (templates.length > 0) {
            const preferredId = config ? typeof config.preferredReportTemplate === "string" ? config.preferredReportTemplate : config.preferredReportTemplate?._id : null;
            const preferred = preferredId ? templates.find((t) => t._id === preferredId) : null;
            this.selectedTemplate.set(preferred ?? templates[0]);
          }
          this.isLoading.set(false);
        },
        error: () => {
          this.isLoading.set(false);
        }
      });
    };
    if (configId) {
      this._batchService.getConfiguration(configId).subscribe({
        next: (res) => {
          this.configuration.set(res.data);
          this._initStepBlocksOrderFromConfig(res.data);
          if (batchId) {
            this._batchService.getSmartBatch(batchId).subscribe({
              next: (batchRes) => {
                this.batch.set(batchRes.data);
                loadTemplates(res.data);
              },
              error: () => loadTemplates(res.data)
            });
          } else {
            loadTemplates(res.data);
          }
        },
        error: () => {
          if (batchId) {
            this._batchService.getSmartBatch(batchId).subscribe({
              next: (batchRes) => this.batch.set(batchRes.data),
              error: () => {
              }
            });
          }
          loadTemplates(null);
        }
      });
    } else {
      if (batchId) {
        this._batchService.getSmartBatch(batchId).subscribe({
          next: (res) => this.batch.set(res.data),
          error: () => {
          }
        });
      }
      loadTemplates(null);
    }
  }
  _initStepBlocksOrderFromConfig(config) {
    if (!config?.steps?.length)
      return;
    const steps = config.steps.filter((s) => s.enabled).sort((a, b) => a.sequence - b.sequence).map((s) => ({
      sequence: s.sequence,
      label: this._getStepLabel(s),
      featureCode: s.appFeature?.code
    }));
    if (steps.length > 0) {
      this.stepBlocksOrder.set(steps);
    }
  }
  _getStepLabel(step) {
    const feature = step.appFeature;
    return feature?.name || feature?.code || `Step ${step.sequence}`;
  }
  onStepBlocksDrop(event) {
    const current = [...this.stepBlocksOrder()];
    moveItemInArray(current, event.previousIndex, event.currentIndex);
    this.stepBlocksOrder.set(current);
  }
  /**
   * Flatten a step result into label/value rows (Table, CSV, Excel, AG Grid).
   * Delegates to recursive flatten plus optional presenters (e.g. Colombia RUES).
   */
  getStepResultFields(data, featureCode) {
    return getStepDisplayFields({ featureCode: featureCode ?? void 0 }, data);
  }
  /** Format object as pretty-printed JSON for display */
  formatJson(obj) {
    if (obj == null)
      return "\u2014";
    try {
      return JSON.stringify(obj, null, 2);
    } catch {
      return String(obj);
    }
  }
  /** Short summary of a step result for table display */
  getResultSummary(data) {
    if (data == null)
      return "\u2014";
    if (typeof data === "string")
      return data.length > 60 ? data.slice(0, 60) + "\u2026" : data;
    if (typeof data !== "object")
      return String(data);
    const keys = Object.keys(data);
    if (keys.length === 0)
      return "\u2014";
    const parts = keys.slice(0, 3).map((k) => `${k}: ${this._valuePreview(data[k])}`);
    return parts.join(" \xB7 ") + (keys.length > 3 ? " \u2026" : "");
  }
  _valuePreview(v) {
    if (v == null)
      return "\u2014";
    if (typeof v === "string")
      return v.length > 20 ? v.slice(0, 20) + "\u2026" : v;
    if (typeof v === "object")
      return "\u2026";
    return String(v);
  }
  _isPdfBlob(blob) {
    return __async(this, null, function* () {
      const slice = blob.slice(0, 5);
      const buf = yield slice.arrayBuffer();
      const bytes = new Uint8Array(buf);
      return bytes[0] === 37 && bytes[1] === 80 && bytes[2] === 68 && bytes[3] === 70;
    });
  }
  /** Convert JSON-serialized byte object {0:37,1:80,...} back to PDF Blob (some backends return Buffer as JSON). */
  _blobFromJsonBytes(blob) {
    return __async(this, null, function* () {
      try {
        const text = yield blob.text();
        const parsed = JSON.parse(text);
        const keys = Object.keys(parsed).filter((k) => /^\d+$/.test(k));
        if (keys.length === 0)
          return null;
        keys.sort((a, b) => Number(a) - Number(b));
        const bytes = new Uint8Array(keys.length);
        keys.forEach((k, i) => bytes[i] = parsed[k] & 255);
        if (bytes[0] !== 37 || bytes[1] !== 80 || bytes[2] !== 68 || bytes[3] !== 70) {
          return null;
        }
        return new Blob([bytes], { type: "application/pdf" });
      } catch {
        return null;
      }
    });
  }
  _parseBlobError(blob) {
    return __async(this, null, function* () {
      try {
        const text = yield blob.text();
        const parsed = JSON.parse(text);
        if (typeof parsed.error === "string")
          return parsed.error;
        if (typeof parsed.message === "string")
          return parsed.message;
        if (Object.keys(parsed).some((k) => /^\d+$/.test(k))) {
          return "Server returned PDF in unexpected format";
        }
        return text.slice(0, 80);
      } catch {
        return blob.type === "application/json" || blob.type === "text/plain" ? "Server returned an error" : "Invalid PDF content";
      }
    });
  }
  /** Format missing paths for tooltip display */
  formatMissingPaths(missingPaths) {
    return missingPaths.map((m) => m.path).join(", ");
  }
  selectTemplate(template) {
    this.selectedTemplate.set(template);
    this.pdfDataUrl.set(null);
    this.pdfSafeUrl.set(null);
    this.report.set(null);
    const configId = this.configId();
    if (configId && template._id) {
      this._batchService.updateConfiguration(configId, {
        preferredReportTemplate: template._id
      }).subscribe({
        next: (res) => this.configuration.set(res.data),
        error: () => this._snack.open(this._transloco.translate("smartReport.failedToSaveTemplatePreference"), "Close", {
          duration: 3e3
        })
      });
    }
  }
  generateReport() {
    const template = this.selectedTemplate();
    const batchId = this.batchId();
    if (!template || !batchId) {
      this._snack.open(this._transloco.translate("smartReport.pleaseSelectTemplate"), "Close", { duration: 3e3 });
      return;
    }
    this.isGenerating.set(true);
    this._reportService.createReport({
      template: template._id,
      smartBatch: batchId,
      name: `Report - ${this.batch()?.name || "Batch"}`
    }).subscribe({
      next: (report) => {
        this.report.set(report);
        const rowIndex = this.selectedRowIndex();
        this._reportService.generateReport(report._id, __spreadValues({}, rowIndex != null ? { rowIndex } : {})).subscribe({
          next: (result) => {
            this.report.set(result.data);
            if (result.pdf?.buffer) {
              const dataUrl = `data:application/pdf;base64,${result.pdf.buffer}`;
              this.pdfDataUrl.set(dataUrl);
              this.pdfSafeUrl.set(this._sanitizer.bypassSecurityTrustResourceUrl(dataUrl));
            }
            this.isGenerating.set(false);
            this._snack.open(this._transloco.translate("smartReport.reportGenerated"), "Close", { duration: 3e3 });
          },
          error: (err) => {
            console.error("Failed to generate PDF:", err);
            this.isGenerating.set(false);
            this._snack.open(this._transloco.translate("smartReport.failedToGenerateReport"), "Close", {
              duration: 3e3
            });
          }
        });
      },
      error: (err) => {
        console.error("Failed to create report:", err);
        this.isGenerating.set(false);
        this._snack.open(this._transloco.translate("smartReport.failedToCreateReport"), "Close", { duration: 3e3 });
      }
    });
  }
  sendEmail() {
    const report = this.report();
    if (!report?._id) {
      this._snack.open(this._transloco.translate("smartReport.generateReportFirst"), "Close", { duration: 3e3 });
      return;
    }
    const defaultSubject = `Report - ${this.batch()?.name ?? "Batch"}`;
    const dialogRef = this._dialog.open(SendSampleModalComponent, {
      panelClass: "send-sample-dialog",
      maxWidth: "560px",
      width: "95vw",
      disableClose: false,
      autoFocus: true,
      data: { defaultSubject, isSample: false }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result?.recipients?.length)
        return;
      this.isSending.set(true);
      this._reportService.sendReportEmail(report._id, {
        recipients: result.recipients,
        subject: result.subject,
        language: "es"
      }).subscribe({
        next: (res) => {
          this.isSending.set(false);
          if (res.success) {
            this._snack.open(this._transloco.translate("smartReport.emailSent"), "Close", { duration: 3e3 });
          } else {
            this._snack.open(res.error || this._transloco.translate("smartReport.failedToSendEmail"), "Close", {
              duration: 3e3
            });
          }
        },
        error: () => {
          this.isSending.set(false);
          this._snack.open(this._transloco.translate("smartReport.failedToSendEmail"), "Close", { duration: 3e3 });
        }
      });
    });
  }
  downloadReport() {
    const report = this.report();
    if (!report?._id) {
      this._snack.open(this._transloco.translate("smartReport.generateReportFirst"), "Close", { duration: 3e3 });
      return;
    }
    this.isSending.set(true);
    this._reportService.downloadReport(report._id).subscribe({
      next: (blob) => __async(this, null, function* () {
        let pdfBlob = blob;
        const hasPdfMagic = yield this._isPdfBlob(blob);
        if (!hasPdfMagic) {
          pdfBlob = yield this._blobFromJsonBytes(blob);
          if (!pdfBlob) {
            const errorMsg = yield this._parseBlobError(blob);
            this._snack.open(errorMsg || this._transloco.translate("smartReport.invalidPdfReceived"), "Close", {
              duration: 4e3
            });
            return;
          }
        }
        const url = URL.createObjectURL(pdfBlob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `SmartReport_${report._id}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
        this._snack.open(this._transloco.translate("smartReport.pdfDownloaded"), "Close", {
          duration: 2e3
        });
      }),
      error: () => {
        this._snack.open(this._transloco.translate("smartReport.failedToDownloadPdf"), "Close", { duration: 3e3 });
      },
      complete: () => {
        this.isSending.set(false);
      }
    });
  }
  /** Escape a cell value for CSV (quote if contains comma, newline, or double quote) */
  _escapeCsvRow(cells) {
    return cells.map((cell) => {
      const s = String(cell ?? "");
      if (s.includes(",") || s.includes('"') || s.includes("\n") || s.includes("\r")) {
        return `"${s.replace(/"/g, '""')}"`;
      }
      return s;
    }).join(",");
  }
  downloadAsCsv() {
    const blocks = this.stepResultBlocks();
    if (blocks.length === 0) {
      this._snack.open(this._transloco.translate("smartReport.noStepResultsYet"), "Close", {
        duration: 3e3
      });
      return;
    }
    const allFieldLabels = /* @__PURE__ */ new Set();
    for (const block of blocks) {
      for (const rowResult of block.rowResults) {
        if (rowResult.data != null) {
          this.getStepResultFields(rowResult.data, block.featureCode).forEach((f) => allFieldLabels.add(f.label));
        }
        if (rowResult.inputData?.documentNumber)
          allFieldLabels.add("Document Number");
        if (rowResult.inputData?.documentType)
          allFieldLabels.add("Document Type");
      }
    }
    const fieldLabels = sortStepExportFieldLabels(Array.from(allFieldLabels));
    const headerRow = ["Step", "Row #", ...fieldLabels];
    const csvRows = [this._escapeCsvRow(headerRow)];
    for (const block of blocks) {
      for (const rowResult of block.rowResults) {
        const fieldsMap = /* @__PURE__ */ new Map();
        if (rowResult.data != null) {
          this.getStepResultFields(rowResult.data, block.featureCode).forEach((f) => fieldsMap.set(f.label, f.value));
        }
        if (!fieldsMap.has("Document Number") && rowResult.inputData?.documentNumber) {
          fieldsMap.set("Document Number", String(rowResult.inputData.documentNumber));
        }
        if (!fieldsMap.has("Document Type") && rowResult.inputData?.documentType) {
          fieldsMap.set("Document Type", String(rowResult.inputData.documentType));
        }
        const values = fieldLabels.map((label) => fieldsMap.get(label) ?? "");
        const row = [block.label, String(rowResult.rowIndex + 1), ...values];
        csvRows.push(this._escapeCsvRow(row));
      }
    }
    const blob = new Blob(["\uFEFF" + csvRows.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `batch-records_${this.batch()?.name || "export"}.csv`.replace(/[^a-z0-9_.-]/gi, "_");
    a.click();
    URL.revokeObjectURL(url);
    this._snack.open(this._transloco.translate("smartReport.csvDownloaded"), "Close", {
      duration: 2e3
    });
  }
  downloadAsExcel() {
    const blocks = this.stepResultBlocks();
    if (blocks.length === 0) {
      this._snack.open(this._transloco.translate("smartReport.noStepResultsYet"), "Close", {
        duration: 3e3
      });
      return;
    }
    const allFieldLabels = /* @__PURE__ */ new Set();
    for (const block of blocks) {
      for (const rowResult of block.rowResults) {
        if (rowResult.data != null) {
          this.getStepResultFields(rowResult.data, block.featureCode).forEach((f) => allFieldLabels.add(f.label));
        }
        if (rowResult.inputData?.documentNumber)
          allFieldLabels.add("Document Number");
        if (rowResult.inputData?.documentType)
          allFieldLabels.add("Document Type");
      }
    }
    const fieldLabels = sortStepExportFieldLabels(Array.from(allFieldLabels));
    const sheetData = [];
    sheetData.push(["Step", "Row #", ...fieldLabels]);
    for (const block of blocks) {
      for (const rowResult of block.rowResults) {
        const fieldsMap = /* @__PURE__ */ new Map();
        if (rowResult.data != null) {
          this.getStepResultFields(rowResult.data, block.featureCode).forEach((f) => fieldsMap.set(f.label, f.value));
        }
        if (!fieldsMap.has("Document Number") && rowResult.inputData?.documentNumber) {
          fieldsMap.set("Document Number", String(rowResult.inputData.documentNumber));
        }
        if (!fieldsMap.has("Document Type") && rowResult.inputData?.documentType) {
          fieldsMap.set("Document Type", String(rowResult.inputData.documentType));
        }
        const values = fieldLabels.map((label) => fieldsMap.get(label) ?? "");
        sheetData.push([block.label, rowResult.rowIndex + 1, ...values]);
      }
    }
    const wb = utils.book_new();
    const ws = utils.aoa_to_sheet(sheetData);
    utils.book_append_sheet(wb, ws, "Batch Records");
    const filename = `batch-records_${this.batch()?.name || "export"}.xlsx`.replace(/[^a-z0-9_.-]/gi, "_");
    writeFileSync(wb, filename);
    this._snack.open(this._transloco.translate("smartReport.excelDownloaded"), "Close", {
      duration: 2e3
    });
  }
  goBack() {
    const configId = this.configId();
    const batchId = this.batchId();
    if (configId && batchId) {
      this._router.navigate(["/smart-batch", configId, "batch", batchId]);
    } else if (configId) {
      this._router.navigate(["/smart-batch", configId]);
    }
  }
  /**
   * Open report builder.
   * @param createNew - If true, always create a new template. If false, edit the selected template (if any).
   */
  openReportBuilder(createNew = false) {
    const configId = this.configId();
    if (!configId)
      return;
    const b = this.batch();
    const rows = b?.rows ?? [];
    const rowIndex = this.selectedRowIndex();
    const row = rowIndex != null ? rows.find((r) => r.rowIndex === rowIndex) : rows[0];
    const previewData = row ? {
      batchName: b?.name ?? "Batch",
      rowIndex: row.rowIndex,
      inputData: row.inputData ?? {},
      results: row.results ?? {}
    } : null;
    if (previewData) {
      this._previewDataService.setPendingPreviewData(previewData);
    }
    const navigationExtras = previewData ? { state: { previewData } } : {};
    const templateId = createNew ? null : this.selectedTemplate()?._id;
    const route = templateId ? ["/smart-batch", configId, "report-builder", templateId] : ["/smart-batch", configId, "report-builder"];
    this._router.navigate(route, navigationExtras);
  }
  static {
    this.\u0275fac = function ReportViewerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportViewerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportViewerComponent, selectors: [["report-viewer"]], decls: 24, vars: 13, consts: [[1, "min-h-screen", "w-full", "bg-gray-50"], [1, "bg-white", "border-b", "border-gray-200", "sticky", "top-0", "z-10"], [1, "w-full", "px-4", "sm:px-6", "lg:px-8", "py-4"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-4"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "text-sm", "text-gray-500"], ["mat-stroked-button", "", 1, "!rounded-xl", 3, "click"], [1, "mr-2"], [1, "w-full", "px-4", "sm:px-6", "lg:px-8", "py-6"], [1, "flex", "items-center", "justify-center", "h-64"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-6"], ["diameter", "48"], [1, "lg:col-span-1"], [1, "bg-white", "rounded-2xl", "border", "border-gray-200", "overflow-hidden"], [1, "p-6"], [1, "font-semibold", "text-gray-900", "mb-4"], [1, "text-center", "py-8", "text-gray-400"], [1, "space-y-2", "max-h-[320px]", "overflow-y-auto", "pr-1"], [1, "border-t", "border-gray-100", "px-6", "py-4", 3, "bg-emerald-50", "bg-amber-50"], [1, "bg-white", "rounded-2xl", "border", "border-gray-200", "p-6", "mt-6"], [1, "lg:col-span-2", "space-y-6"], [1, "bg-gray-50", "border-b", "border-gray-200", "px-6", "py-4"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "font-semibold", "text-gray-900"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "flex", "items-center", "gap-2"], [1, "!rounded-lg", 3, "value"], ["mat-icon-button", "", 1, "!w-8", "!h-8", 3, "click", "matTooltip"], [1, "!text-lg"], [1, "min-h-[600px]", "p-6", "overflow-auto"], [1, "flex", "flex-col", "items-center", "justify-center", "h-64", "text-gray-400"], [1, "!text-4xl", "!w-10", "!h-10", "mb-2"], [1, "text-sm"], ["mat-flat-button", "", "color", "primary", 1, "mt-4", "!rounded-xl", "!bg-indigo-600", 3, "click"], [1, "p-4", "rounded-xl", "border", "cursor-pointer", "transition-all", 3, "border-indigo-500", "bg-indigo-50", "border-gray-200", "hover:border-indigo-300"], [1, "p-4", "rounded-xl", "border", "cursor-pointer", "transition-all", 3, "click"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-xl", "flex", "items-center", "justify-center", "shrink-0"], [1, "flex-1", "min-w-0"], [1, "font-medium", "text-gray-900"], [1, "text-xs", "text-gray-500"], [1, "inline-flex", "items-center", "gap-1", "mt-1", "text-xs", "text-emerald-600"], [1, "inline-flex", "items-center", "gap-1", "mt-1", "text-xs", "text-amber-600", 3, "matTooltip"], [1, "!text-sm", "!w-3.5", "!h-3.5"], [1, "border-t", "border-gray-100", "px-6", "py-4"], [1, "text-sm", "text-emerald-700", "mb-3", "flex", "items-start", "gap-2"], [1, "!text-lg", "!w-5", "!h-5", "shrink-0", "mt-0.5"], ["mat-stroked-button", "", 1, "!rounded-xl", "!text-emerald-700", "!border-emerald-300", "!inline-flex", "!items-center", "!justify-center", 3, "click"], [1, "mr-2", "!text-lg", "!align-middle"], [1, "text-sm", "text-amber-700", "mb-2", "flex", "items-start", "gap-2"], [1, "text-xs", "text-amber-600/80", "mb-3", "pl-7"], ["mat-stroked-button", "", 1, "!rounded-xl", "!text-amber-700", "!border-amber-300", "!inline-flex", "!items-center", "!justify-center", 3, "click"], [1, "space-y-3"], [1, "pt-3", 3, "border-t", "border-gray-100", "mt-3"], ["mat-flat-button", "", "color", "primary", 1, "w-full", "!rounded-xl", "!bg-indigo-600", "!inline-flex", "!items-center", "!justify-center", 3, "click", "disabled"], [1, "animate-spin", "mr-2", "!align-middle"], ["mat-stroked-button", "", 1, "w-full", "!rounded-xl", "!inline-flex", "!items-center", "!justify-center", 3, "click"], [1, "mr-2", "!align-middle"], ["mat-stroked-button", "", 1, "w-full", "!rounded-xl", "!inline-flex", "!items-center", "!justify-center", 3, "click", "disabled"], [1, "pt-3"], [1, "text-xs", "text-gray-500", "mb-2", "uppercase", "font-medium"], [1, "text-xs", "text-gray-500", "mb-3", "leading-relaxed"], [1, "space-y-2"], [1, "!rounded-lg", 3, "change", "value"], ["value", "table"], ["value", "json"], ["value", "excel-ag"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12", "text-gray-400"], [1, "!text-5xl", "!w-12", "!h-12", "mb-3"], [1, "text-sm", "font-medium"], [1, "text-xs", "mt-1"], [1, "excel-view-container", "mx-auto", "rounded-xl", "overflow-hidden", 2, "height", "480px", "width", "100%"], [1, "ag-theme-quartz", 2, "width", "100%", "height", "100%", 3, "rowData", "columnDefs", "defaultColDef", "rowHeight", "headerHeight", "suppressRowClickSelection", "domLayout"], [1, "mb-4", "bg-white", "rounded-lg", "border", "border-gray-200", "overflow-hidden", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "p-2", "pl-4"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "w-full", "sm:w-72"], ["matPrefix", "", 1, "text-gray-400", "mr-2"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], [1, "!bg-transparent", "flex-1", "justify-end", 3, "page", "length", "pageSize", "pageSizeOptions", "showFirstLastButtons"], [1, "mx-auto", "bg-[#fafafa]", "rounded-lg", "border", "border-gray-200", "shadow-sm", "p-6", "min-h-[400px]"], [1, "space-y-4"], [1, "bg-white", "border", "border-gray-200", "rounded-lg", "overflow-hidden", "shadow-sm"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "flex", "items-center", "gap-3", "px-4", "py-2.5", "border-b", "border-gray-100", "bg-gray-50"], [1, "!text-base", "text-gray-400"], [1, "px-4", "py-3", "bg-white", "border-t", "border-gray-100", "overflow-x-auto"], [1, "mb-4", "last:mb-0"], [1, "text-xs", "font-medium", "text-gray-500", "mb-2"], [1, "text-gray-400"], [1, "w-full", "text-sm", "border-collapse"], [1, "text-sm", "text-gray-400", "py-2"], [1, "border-b", "border-gray-100", "last:border-0"], [1, "py-2", "pr-4", "align-top", "text-gray-500", 2, "min-width", "140px"], [1, "py-2", "break-words", "text-gray-900"], [1, "border-b", "border-gray-100", "last:border-0", "pb-3", "last:pb-0", "mb-3", "last:mb-0"], [1, "relative"], ["type", "button", "mat-icon-button", "", 1, "!absolute", "top-1.5", "right-1.5", "z-10", "!h-9", "!min-h-9", "!w-auto", "!min-w-9", "!rounded-lg", "!border", "border-gray-200/90", "!bg-white/95", "px-1.5", "shadow-sm", "hover:!border-gray-300", "hover:bg-white", 3, "matTooltip"], [1, "bg-gray-50", "rounded-lg", "p-3", "pr-14", "text-xs", "font-mono", "text-gray-800", "overflow-auto", "max-h-64", "border", "border-gray-100"], ["type", "button", "mat-icon-button", "", 1, "!absolute", "top-1.5", "right-1.5", "z-10", "!h-9", "!min-h-9", "!w-auto", "!min-w-9", "!rounded-lg", "!border", "border-gray-200/90", "!bg-white/95", "px-1.5", "shadow-sm", "hover:!border-gray-300", "hover:bg-white", 3, "click", "matTooltip"], [1, "text-xs", "font-medium", "text-emerald-700", "whitespace-nowrap", "px-1"], [1, "!text-[18px]", "text-gray-600"], ["diameter", "48", 1, "mb-4"], [3, "template", "previewData", "primaryColor", "orientation", "clickable", "logoUrl", "legend", "showPageNumbers", "pageNumberPosition", "watermarkEnabled", "watermarkType", "watermarkText", "watermarkOpacity", "watermarkPattern"], [1, "flex", "items-center", "justify-center", "gap-4", "mt-6", "pt-4", "border-t", "border-gray-200"], ["mat-icon-button", "", 3, "click", "disabled", "matTooltip"], [1, "text-sm", "text-gray-600"], [1, "!text-6xl", "!w-16", "!h-16", "mb-4"], [1, "text-lg", "mb-2"]], template: function ReportViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "button", 5);
        \u0275\u0275pipe(6, "transloco");
        \u0275\u0275listener("click", function ReportViewerComponent_Template_button_click_5_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div")(10, "h1", 6);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p", 7);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "transloco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "button", 8);
        \u0275\u0275listener("click", function ReportViewerComponent_Template_button_click_16_listener() {
          return ctx.openReportBuilder(true);
        });
        \u0275\u0275elementStart(17, "mat-icon", 9);
        \u0275\u0275text(18, "design_services");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "transloco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(21, "div", 10);
        \u0275\u0275template(22, ReportViewerComponent_Conditional_22_Template, 2, 0, "div", 11)(23, ReportViewerComponent_Conditional_23_Template, 42, 25, "div", 12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(5);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 5, "smartReport.back"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "smartReport.generateReport"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = ctx.batch()) == null ? null : tmp_2_0.name) || \u0275\u0275pipeBind1(15, 9, "smartReport.batchReport"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 11, "smartReport.createTemplate"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isLoading() ? 22 : 23);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      RouterModule,
      DragDropModule,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatDialogModule,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatSuffix,
      MatTooltipModule,
      MatTooltip,
      MatSnackBarModule,
      TranslocoModule,
      TranslocoPipe,
      ReportPreviewComponent,
      AgGridAngular,
      MatPaginatorModule,
      MatPaginator,
      MatFormFieldModule,
      MatInputModule,
      MatInput,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel
    ], encapsulation: 2, data: { animation: [fuseAnimations] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportViewerComponent, [{
    type: Component,
    args: [{ selector: "report-viewer", standalone: true, imports: [
      CommonModule,
      RouterModule,
      DragDropModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatDialogModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatTooltipModule,
      MatSnackBarModule,
      TranslocoModule,
      ReportPreviewComponent,
      AgGridAngular,
      MatPaginatorModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule
    ], animations: [fuseAnimations], template: `<div class="min-h-screen w-full bg-gray-50">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div class="w-full px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <button
                        mat-icon-button
                        (click)="goBack()"
                        [matTooltip]="'smartReport.back' | transloco"
                    >
                        <mat-icon>arrow_back</mat-icon>
                    </button>
                    <div>
                        <h1 class="text-xl font-bold text-gray-900">
                            {{ 'smartReport.generateReport' | transloco }}
                        </h1>
                        <p class="text-sm text-gray-500">
                            {{ batch()?.name || ('smartReport.batchReport' | transloco) }}
                        </p>
                    </div>
                </div>

                <button mat-stroked-button (click)="openReportBuilder(true)" class="!rounded-xl">
                    <mat-icon class="mr-2">design_services</mat-icon>
                    {{ 'smartReport.createTemplate' | transloco }}
                </button>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="w-full px-4 sm:px-6 lg:px-8 py-6">
        @if (isLoading()) {
            <div class="flex items-center justify-center h-64">
                <mat-spinner diameter="48"></mat-spinner>
            </div>
        } @else {
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Template Selection (unified: template list + match status + edit action) -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        <div class="p-6">
                            <h3 class="font-semibold text-gray-900 mb-4">
                                {{ 'smartReport.selectTemplate' | transloco }}
                            </h3>

                            @if (templates().length === 0) {
                                <div class="text-center py-8 text-gray-400">
                                    <mat-icon class="!text-4xl !w-10 !h-10 mb-2"
                                        >description</mat-icon
                                    >
                                    <p class="text-sm">
                                        {{ 'smartReport.noTemplatesFound' | transloco }}
                                    </p>
                                    <button
                                        mat-flat-button
                                        color="primary"
                                        class="mt-4 !rounded-xl !bg-indigo-600"
                                        (click)="openReportBuilder(true)"
                                    >
                                        {{ 'smartReport.createTemplate' | transloco }}
                                    </button>
                                </div>
                            } @else {
                                <div class="space-y-2 max-h-[320px] overflow-y-auto pr-1">
                                    @for (template of templates(); track template._id) {
                                        <div
                                            class="p-4 rounded-xl border cursor-pointer transition-all"
                                            [class.border-indigo-500]="
                                                selectedTemplate()?._id === template._id
                                            "
                                            [class.bg-indigo-50]="
                                                selectedTemplate()?._id === template._id
                                            "
                                            [class.border-gray-200]="
                                                selectedTemplate()?._id !== template._id
                                            "
                                            [class.hover:border-indigo-300]="
                                                selectedTemplate()?._id !== template._id
                                            "
                                            (click)="selectTemplate(template)"
                                        >
                                            <div class="flex items-center gap-3">
                                                <div
                                                    class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                                    [style.background]="
                                                        (template.primaryColor || '#4F46E5') + '20'
                                                    "
                                                >
                                                    <mat-icon
                                                        [style.color]="
                                                            template.primaryColor || '#4F46E5'
                                                        "
                                                    >
                                                        description
                                                    </mat-icon>
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <p class="font-medium text-gray-900">
                                                        {{ template.name }}
                                                    </p>
                                                    <p class="text-xs text-gray-500">
                                                        {{ template.sections?.length || 0 }}
                                                        {{ 'smartReport.sections' | transloco }} \u2022
                                                        {{ template.pdfEngine || 'puppeteer' }}
                                                    </p>
                                                    @if (
                                                        selectedTemplate()?._id === template._id &&
                                                            templateMatch();
                                                        as match
                                                    ) {
                                                        @if (match.matches) {
                                                            <span
                                                                class="inline-flex items-center gap-1 mt-1 text-xs text-emerald-600"
                                                            >
                                                                <mat-icon
                                                                    class="!text-sm !w-3.5 !h-3.5"
                                                                    >check_circle</mat-icon
                                                                >
                                                                {{
                                                                    'smartReport.templateMatchesData'
                                                                        | transloco
                                                                }}
                                                            </span>
                                                        } @else if (match.missingPaths.length > 0) {
                                                            <span
                                                                class="inline-flex items-center gap-1 mt-1 text-xs text-amber-600"
                                                                [matTooltip]="
                                                                    ('smartReport.paths'
                                                                        | transloco) +
                                                                    ': ' +
                                                                    formatMissingPaths(
                                                                        match.missingPaths
                                                                    )
                                                                "
                                                            >
                                                                <mat-icon
                                                                    class="!text-sm !w-3.5 !h-3.5"
                                                                    >warning</mat-icon
                                                                >
                                                                {{
                                                                    'smartReport.missingFields'
                                                                        | transloco
                                                                            : {
                                                                                  count: match
                                                                                      .missingPaths
                                                                                      .length,
                                                                              }
                                                                }}
                                                            </span>
                                                        }
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>

                        <!-- Unified: match status + edit-in-builder (single footer) -->
                        @if (selectedTemplate() && templateMatch(); as match) {
                            <div
                                class="border-t border-gray-100 px-6 py-4"
                                [class.bg-emerald-50]="match.matches"
                                [class.bg-amber-50]="!match.matches"
                            >
                                @if (match.matches) {
                                    <p class="text-sm text-emerald-700 mb-3 flex items-start gap-2">
                                        <mat-icon class="!text-lg !w-5 !h-5 shrink-0 mt-0.5"
                                            >check_circle</mat-icon
                                        >
                                        <span>{{
                                            'smartReport.templateReadyToUse' | transloco
                                        }}</span>
                                    </p>
                                    <button
                                        mat-stroked-button
                                        (click)="openReportBuilder()"
                                        class="!rounded-xl !text-emerald-700 !border-emerald-300 !inline-flex !items-center !justify-center"
                                    >
                                        <mat-icon class="mr-2 !text-lg !align-middle"
                                            >edit</mat-icon
                                        >
                                        {{ 'smartReport.editInBuilder' | transloco }}
                                    </button>
                                } @else {
                                    <p class="text-sm text-amber-700 mb-2 flex items-start gap-2">
                                        <mat-icon class="!text-lg !w-5 !h-5 shrink-0 mt-0.5"
                                            >warning</mat-icon
                                        >
                                        <span>{{
                                            'smartReport.missingFieldsEditInBuilder'
                                                | transloco: { count: match.missingPaths.length }
                                        }}</span>
                                    </p>
                                    <p class="text-xs text-amber-600/80 mb-3 pl-7">
                                        {{ 'smartReport.paths' | transloco }}:
                                        {{ formatMissingPaths(match.missingPaths) }}
                                    </p>
                                    <button
                                        mat-stroked-button
                                        (click)="openReportBuilder()"
                                        class="!rounded-xl !text-amber-700 !border-amber-300 !inline-flex !items-center !justify-center"
                                    >
                                        <mat-icon class="mr-2 !text-lg !align-middle"
                                            >edit</mat-icon
                                        >
                                        {{ 'smartReport.editInBuilder' | transloco }}
                                    </button>
                                }
                            </div>
                        }
                    </div>

                    <!-- Actions -->
                    @if (selectedTemplate() || stepResultBlocks().length > 0) {
                        <div class="bg-white rounded-2xl border border-gray-200 p-6 mt-6">
                            <h3 class="font-semibold text-gray-900 mb-4">
                                {{ 'smartReport.actions' | transloco }}
                            </h3>
                            <div class="space-y-3">
                                @if (selectedTemplate()) {
                                    <button
                                        mat-flat-button
                                        color="primary"
                                        (click)="generateReport()"
                                        [disabled]="isGenerating()"
                                        class="w-full !rounded-xl !bg-indigo-600 !inline-flex !items-center !justify-center"
                                    >
                                        @if (isGenerating()) {
                                            <mat-icon class="animate-spin mr-2 !align-middle"
                                                >refresh</mat-icon
                                            >
                                            {{ 'smartReport.generating' | transloco }}
                                        } @else {
                                            {{ 'smartReport.generatePdf' | transloco }}
                                        }
                                    </button>

                                    @if (report()) {
                                        <button
                                            mat-stroked-button
                                            (click)="downloadReport()"
                                            class="w-full !rounded-xl !inline-flex !items-center !justify-center"
                                        >
                                            <mat-icon class="mr-2 !align-middle">download</mat-icon>
                                            {{ 'smartReport.downloadPdf' | transloco }}
                                        </button>

                                        <button
                                            mat-stroked-button
                                            (click)="sendEmail()"
                                            [disabled]="isSending()"
                                            class="w-full !rounded-xl !inline-flex !items-center !justify-center"
                                        >
                                            @if (isSending()) {
                                                <mat-icon class="animate-spin mr-2 !align-middle"
                                                    >refresh</mat-icon
                                                >
                                                {{ 'smartReport.sending' | transloco }}
                                            } @else {
                                                {{ 'smartReport.sendViaEmail' | transloco }}
                                            }
                                        </button>
                                    }
                                }

                                <!-- Data Export -->
                                @if (stepResultBlocks().length > 0) {
                                    <div
                                        class="pt-3"
                                        [class.border-t]="selectedTemplate()"
                                        [class.border-gray-100]="selectedTemplate()"
                                        [class.mt-3]="selectedTemplate()"
                                    >
                                        <p class="text-xs text-gray-500 mb-2 uppercase font-medium">
                                            {{ 'smartReport.exportData' | transloco }}
                                        </p>
                                        <p class="text-xs text-gray-500 mb-3 leading-relaxed">
                                            {{ 'smartReport.detailedExportHint' | transloco }}
                                        </p>
                                        <div class="space-y-2">
                                            <button
                                                mat-stroked-button
                                                (click)="downloadAsCsv()"
                                                class="w-full !rounded-xl !inline-flex !items-center !justify-center"
                                            >
                                                <mat-icon class="mr-2 !align-middle"
                                                    >download</mat-icon
                                                >
                                                {{ 'smartReport.downloadAsCsv' | transloco }}
                                            </button>
                                            <button
                                                mat-stroked-button
                                                (click)="downloadAsExcel()"
                                                class="w-full !rounded-xl !inline-flex !items-center !justify-center"
                                            >
                                                <mat-icon class="mr-2 !align-middle"
                                                    >table_chart</mat-icon
                                                >
                                                {{ 'smartReport.downloadAsExcel' | transloco }}
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>

                <!-- Right column: Step results layout + PDF Preview -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- Step results layout (print-style, drag-and-drop) -->
                    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        <div class="bg-gray-50 border-b border-gray-200 px-6 py-4">
                            <div class="flex items-center justify-between gap-4">
                                <div>
                                    <h3 class="font-semibold text-gray-900">
                                        {{ 'smartReport.stepResultsLayout' | transloco }}
                                    </h3>
                                    <p class="text-xs text-gray-500 mt-0.5">
                                        @if (selectedRowIndex() != null) {
                                            {{
                                                'smartReport.reportForRecord'
                                                    | transloco: { index: selectedRowIndex()! + 1 }
                                            }}
                                        } @else {
                                            {{ 'smartReport.dragSectionsReorder' | transloco }}
                                        }
                                    </p>
                                </div>
                                <div class="flex items-center gap-2">
                                    @if (stepResultBlocks().length > 0) {
                                        <mat-button-toggle-group
                                            [value]="stepResultsViewMode()"
                                            (change)="stepResultsViewMode.set($event.value)"
                                            class="!rounded-lg"
                                        >
                                            <mat-button-toggle value="table">
                                                {{ 'smartReport.viewModeTable' | transloco }}
                                            </mat-button-toggle>
                                            <mat-button-toggle value="json">
                                                {{ 'smartReport.viewModeJson' | transloco }}
                                            </mat-button-toggle>
                                            <mat-button-toggle value="excel-ag">
                                                {{ 'smartReport.viewModeExcelAg' | transloco }}
                                            </mat-button-toggle>
                                        </mat-button-toggle-group>
                                    }
                                    <button
                                        mat-icon-button
                                        (click)="toggleStepResultsContent()"
                                        [matTooltip]="
                                            stepResultsContentExpanded()
                                                ? ('smartReport.collapseContent' | transloco)
                                                : ('smartReport.expandContent' | transloco)
                                        "
                                        class="!w-8 !h-8"
                                    >
                                        <mat-icon class="!text-lg">{{
                                            stepResultsContentExpanded()
                                                ? 'expand_more'
                                                : 'expand_less'
                                        }}</mat-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                        @if (stepResultsContentExpanded()) {
                            <div class="p-6">
                                @if (stepResultBlocks().length === 0) {
                                    <div
                                        class="flex flex-col items-center justify-center py-12 text-gray-400"
                                    >
                                        <mat-icon class="!text-5xl !w-12 !h-12 mb-3"
                                            >table_chart</mat-icon
                                        >
                                        <p class="text-sm font-medium">
                                            {{ 'smartReport.noStepResultsYet' | transloco }}
                                        </p>
                                        <p class="text-xs mt-1">
                                            {{ 'smartReport.processBatchToSeeResults' | transloco }}
                                        </p>
                                    </div>
                                } @else {
                                    @if (stepResultsViewMode() === 'excel-ag') {
                                        <!-- Excel view: AG Grid -->
                                        <div
                                            class="excel-view-container mx-auto rounded-xl overflow-hidden"
                                            style="height: 480px; width: 100%"
                                        >
                                            <ag-grid-angular
                                                class="ag-theme-quartz"
                                                style="width: 100%; height: 100%"
                                                [rowData]="gridRowData()"
                                                [columnDefs]="gridColumnDefs()"
                                                [defaultColDef]="{
                                                    sortable: true,
                                                    resizable: true,
                                                    filter: true,
                                                }"
                                                [rowHeight]="44"
                                                [headerHeight]="44"
                                                [suppressRowClickSelection]="true"
                                                [domLayout]="'normal'"
                                            />
                                        </div>
                                    } @else {
                                        <!-- Table or JSON view: record-grouped layout (like PDF preview) -->
                                        <div
                                            class="mb-4 bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col sm:flex-row items-center justify-between p-2 pl-4"
                                        >
                                            <mat-form-field
                                                appearance="outline"
                                                subscriptSizing="dynamic"
                                                class="w-full sm:w-72"
                                            >
                                                <mat-icon matPrefix class="text-gray-400 mr-2"
                                                    >search</mat-icon
                                                >
                                                <mat-label>{{
                                                    'smartReport.searchRecords' | transloco
                                                }}</mat-label>
                                                <input
                                                    matInput
                                                    [ngModel]="searchQuery()"
                                                    (ngModelChange)="updateSearchQuery($event)"
                                                    [placeholder]="
                                                        'smartReport.typeToFind' | transloco
                                                    "
                                                />
                                                <button
                                                    mat-icon-button
                                                    matSuffix
                                                    *ngIf="searchQuery()"
                                                    (click)="updateSearchQuery('')"
                                                >
                                                    <mat-icon>close</mat-icon>
                                                </button>
                                            </mat-form-field>

                                            <mat-paginator
                                                class="!bg-transparent flex-1 justify-end"
                                                [length]="totalRecords()"
                                                [pageSize]="pageSize()"
                                                [pageSizeOptions]="[5, 10, 25, 100]"
                                                (page)="handlePageEvent($event)"
                                                [showFirstLastButtons]="true"
                                            ></mat-paginator>
                                        </div>
                                        <div
                                            class="mx-auto bg-[#fafafa] rounded-lg border border-gray-200 shadow-sm p-6 min-h-[400px]"
                                        >
                                            <div class="space-y-4">
                                                @for (
                                                    recordBlock of recordResultBlocks();
                                                    track recordBlock.rowIndex
                                                ) {
                                                    <div
                                                        class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                                                    >
                                                        <div
                                                            class="flex items-center gap-3 px-4 py-2.5 border-b border-gray-100 bg-gray-50"
                                                        >
                                                            <mat-icon
                                                                class="!text-base text-gray-400"
                                                                >person</mat-icon
                                                            >
                                                            <span class="font-medium text-gray-900">
                                                                {{ 'smartReport.row' | transloco }}
                                                                #{{ recordBlock.rowIndex + 1 }}
                                                            </span>
                                                        </div>
                                                        @if (stepResultsViewMode() === 'table') {
                                                            <!-- Table view: steps per record -->
                                                            <div
                                                                class="px-4 py-3 bg-white border-t border-gray-100 overflow-x-auto"
                                                            >
                                                                @for (
                                                                    step of recordBlock.steps;
                                                                    track step.sequence
                                                                ) {
                                                                    <div class="mb-4 last:mb-0">
                                                                        <p
                                                                            class="text-xs font-medium text-gray-500 mb-2"
                                                                        >
                                                                            {{ step.label }}
                                                                            <span
                                                                                class="text-gray-400"
                                                                                >({{
                                                                                    'smartReport.step'
                                                                                        | transloco
                                                                                }}
                                                                                {{
                                                                                    step.sequence
                                                                                }})</span
                                                                            >
                                                                        </p>
                                                                        @if (step.data != null) {
                                                                            <table
                                                                                class="w-full text-sm border-collapse"
                                                                            >
                                                                                <tbody>
                                                                                    @for (
                                                                                        field of getStepResultFields(
                                                                                            step.data,
                                                                                            step.featureCode
                                                                                        );
                                                                                        track $index
                                                                                    ) {
                                                                                        <tr
                                                                                            class="border-b border-gray-100 last:border-0"
                                                                                        >
                                                                                            <td
                                                                                                class="py-2 pr-4 align-top text-gray-500"
                                                                                                style="
                                                                                                    min-width: 140px;
                                                                                                "
                                                                                            >
                                                                                                {{
                                                                                                    field.label
                                                                                                }}
                                                                                            </td>
                                                                                            <td
                                                                                                class="py-2 break-words text-gray-900"
                                                                                            >
                                                                                                {{
                                                                                                    field.value
                                                                                                }}
                                                                                            </td>
                                                                                        </tr>
                                                                                    }
                                                                                </tbody>
                                                                            </table>
                                                                        } @else {
                                                                            <p
                                                                                class="text-sm text-gray-400 py-2"
                                                                            >
                                                                                \u2014
                                                                            </p>
                                                                        }
                                                                    </div>
                                                                }
                                                            </div>
                                                        } @else {
                                                            <!-- JSON view: steps per record -->
                                                            <div
                                                                class="px-4 py-3 bg-white border-t border-gray-100 overflow-x-auto"
                                                            >
                                                                @for (
                                                                    step of recordBlock.steps;
                                                                    track step.sequence
                                                                ) {
                                                                    <div
                                                                        class="border-b border-gray-100 last:border-0 pb-3 last:pb-0 mb-3 last:mb-0"
                                                                    >
                                                                        <p
                                                                            class="text-xs font-medium text-gray-500 mb-2"
                                                                        >
                                                                            {{ step.label }}
                                                                            <span
                                                                                class="text-gray-400"
                                                                                >({{
                                                                                    'smartReport.step'
                                                                                        | transloco
                                                                                }}
                                                                                {{
                                                                                    step.sequence
                                                                                }})</span
                                                                            >
                                                                        </p>
                                                                        <div class="relative">
                                                                            @if (
                                                                                step.data != null
                                                                            ) {
                                                                                <button
                                                                                    type="button"
                                                                                    mat-icon-button
                                                                                    class="!absolute top-1.5 right-1.5 z-10 !h-9 !min-h-9 !w-auto !min-w-9 !rounded-lg !border border-gray-200/90 !bg-white/95 px-1.5 shadow-sm hover:!border-gray-300 hover:bg-white"
                                                                                    [matTooltip]="
                                                                                        'smartReport.copyJson'
                                                                                            | transloco
                                                                                    "
                                                                                    [attr.aria-label]="
                                                                                        'smartReport.copyJson'
                                                                                            | transloco
                                                                                    "
                                                                                    (click)="
                                                                                        copyStepJsonToClipboard(
                                                                                            step.data,
                                                                                            recordBlock.rowIndex,
                                                                                            step.sequence
                                                                                        )
                                                                                    "
                                                                                >
                                                                                    @if (
                                                                                        jsonCopyShowsCopied(
                                                                                            recordBlock.rowIndex,
                                                                                            step.sequence
                                                                                        )
                                                                                    ) {
                                                                                        <span
                                                                                            class="text-xs font-medium text-emerald-700 whitespace-nowrap px-1"
                                                                                            >{{
                                                                                                'smartReport.copied'
                                                                                                    | transloco
                                                                                            }}</span
                                                                                        >
                                                                                    } @else {
                                                                                        <mat-icon
                                                                                            class="!text-[18px] text-gray-600"
                                                                                            >content_copy</mat-icon
                                                                                        >
                                                                                    }
                                                                                </button>
                                                                            }
                                                                            <pre
                                                                                class="bg-gray-50 rounded-lg p-3 pr-14 text-xs font-mono text-gray-800 overflow-auto max-h-64 border border-gray-100"
                                                                                >{{
                                                                                    formatJson(
                                                                                        step.data
                                                                                    )
                                                                                }}</pre
                                                                            >
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        }
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    }
                                }
                            </div>
                        }
                    </div>

                    <!-- Report Preview (same as builder) -->
                    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        <div class="bg-gray-50 border-b border-gray-200 px-6 py-4">
                            <h3 class="font-semibold text-gray-900">
                                {{ 'smartReport.preview' | transloco }}
                            </h3>
                            <p class="text-xs text-gray-500 mt-0.5">
                                {{ 'smartReport.previewSameAsBuilder' | transloco }}
                            </p>
                        </div>

                        <div class="min-h-[600px] p-6 overflow-auto">
                            @if (isGenerating()) {
                                <div
                                    class="flex flex-col items-center justify-center h-64 text-gray-400"
                                >
                                    <mat-spinner diameter="48" class="mb-4"></mat-spinner>
                                    <p>{{ 'smartReport.generatingPdf' | transloco }}</p>
                                </div>
                            } @else if (selectedTemplate() && batch()?.rows?.length) {
                                <report-preview
                                    [template]="selectedTemplate()!"
                                    [previewData]="previewDataForCurrentPage()"
                                    [primaryColor]="selectedTemplate()!.primaryColor || '#4F46E5'"
                                    [orientation]="'portrait'"
                                    [clickable]="false"
                                    [logoUrl]="selectedTemplate()!.logo || null"
                                    [legend]="selectedTemplate()!.legend || ''"
                                    [showPageNumbers]="selectedTemplate()!.showPageNumbers || false"
                                    [pageNumberPosition]="
                                        selectedTemplate()!.pageNumberPosition || 'bottom-center'
                                    "
                                    [watermarkEnabled]="
                                        selectedTemplate()!.watermark?.enabled || false
                                    "
                                    [watermarkType]="selectedTemplate()!.watermark?.type || 'text'"
                                    [watermarkText]="
                                        selectedTemplate()!.watermark?.text || 'CONFIDENTIAL'
                                    "
                                    [watermarkOpacity]="
                                        selectedTemplate()!.watermark?.opacity ?? 0.08
                                    "
                                    [watermarkPattern]="
                                        selectedTemplate()!.watermark?.pattern || 'single'
                                    "
                                />
                                @if (previewDataForAllRows().length > 1) {
                                    <div
                                        class="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-gray-200"
                                    >
                                        <button
                                            mat-icon-button
                                            (click)="goToPreviewPage(previewPageIndex() - 1)"
                                            [disabled]="previewPageIndex() <= 0"
                                            [matTooltip]="'smartReport.previewPrevious' | transloco"
                                        >
                                            <mat-icon>chevron_left</mat-icon>
                                        </button>
                                        <span class="text-sm text-gray-600">
                                            {{ 'smartReport.previewPage' | transloco }}
                                            {{ previewPageIndex() + 1 }}
                                            {{ 'smartReport.previewPageOf' | transloco }}
                                            {{ previewDataForAllRows().length }}
                                        </span>
                                        <button
                                            mat-icon-button
                                            (click)="goToPreviewPage(previewPageIndex() + 1)"
                                            [disabled]="
                                                previewPageIndex() >=
                                                previewDataForAllRows().length - 1
                                            "
                                            [matTooltip]="'smartReport.previewNext' | transloco"
                                        >
                                            <mat-icon>chevron_right</mat-icon>
                                        </button>
                                    </div>
                                }
                            } @else {
                                <div
                                    class="flex flex-col items-center justify-center h-64 text-gray-400"
                                >
                                    <mat-icon class="!text-6xl !w-16 !h-16 mb-4"
                                        >description</mat-icon
                                    >
                                    <p class="text-lg mb-2">
                                        {{ 'smartReport.noPreviewAvailable' | transloco }}
                                    </p>
                                    <p class="text-sm">
                                        {{ 'smartReport.selectTemplateAndBatch' | transloco }}
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportViewerComponent, { className: "ReportViewerComponent", filePath: "src/app/modules/smart-batch/report-viewer/report-viewer.component.ts", lineNumber: 87 });
})();
export {
  ReportViewerComponent
};
//# sourceMappingURL=chunk-5EJCVYDY.js.map
