import {
  ANIMATION_MODULE_TYPE,
  DOCUMENT,
  Inject,
  Injectable,
  RendererFactory2,
  RuntimeError,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YTOBX75K.js";

// node_modules/@angular/animations/fesm2022/private_export-faY_wCkZ.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
var AUTO_STYLE = "*";
function trigger(name, definitions) {
  return {
    type: AnimationMetadataType.Trigger,
    name,
    definitions,
    options: {}
  };
}
function animate(timings, styles = null) {
  return {
    type: AnimationMetadataType.Animate,
    styles,
    timings
  };
}
function sequence(steps, options = null) {
  return {
    type: AnimationMetadataType.Sequence,
    steps,
    options
  };
}
function style(tokens) {
  return {
    type: AnimationMetadataType.Style,
    styles: tokens,
    offset: null
  };
}
function state(name, styles, options) {
  return {
    type: AnimationMetadataType.State,
    name,
    styles,
    options
  };
}
function keyframes(steps) {
  return {
    type: AnimationMetadataType.Keyframes,
    steps
  };
}
function transition(stateChangeExpr, steps, options = null) {
  return {
    type: AnimationMetadataType.Transition,
    expr: stateChangeExpr,
    animation: steps,
    options
  };
}
var NoopAnimationPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  _started = false;
  _destroyed = false;
  _finished = false;
  _position = 0;
  parentPlayer = null;
  totalTime;
  constructor(duration = 0, delay = 0) {
    this.totalTime = duration + delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {
  }
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  /** @internal */
  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach((fn) => fn());
    this._onStartFns = [];
  }
  pause() {
  }
  restart() {
  }
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var AnimationGroupPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _finished = false;
  _started = false;
  _destroyed = false;
  _onDestroyFns = [];
  parentPlayer = null;
  totalTime = 0;
  players;
  constructor(_players) {
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      queueMicrotask(() => this._onFinish());
    } else {
      this.players.forEach((player) => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach((player) => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach((player) => player.play());
  }
  pause() {
    this.players.forEach((player) => player.pause());
  }
  restart() {
    this.players.forEach((player) => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach((player) => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach((player) => player.destroy());
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach((player) => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach((player) => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach((player) => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var \u0275PRE_STYLE = "!";

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static \u0275fac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static \u0275fac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

// src/@fuse/animations/defaults.ts
var FuseAnimationCurves = class {
  static {
    this.standard = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  }
  static {
    this.deceleration = "cubic-bezier(0.0, 0.0, 0.2, 1)";
  }
  static {
    this.acceleration = "cubic-bezier(0.4, 0.0, 1, 1)";
  }
  static {
    this.sharp = "cubic-bezier(0.4, 0.0, 0.6, 1)";
  }
};
var FuseAnimationDurations = class {
  static {
    this.complex = "375ms";
  }
  static {
    this.entering = "225ms";
  }
  static {
    this.exiting = "195ms";
  }
};

// src/@fuse/animations/expand-collapse.ts
var expandCollapse = trigger("expandCollapse", [
  state("void, collapsed", style({
    height: "0"
  })),
  state("*, expanded", style("*")),
  // Prevent the transition if the state is false
  transition("void <=> false, collapsed <=> false, expanded <=> false", []),
  // Transition
  transition("void <=> *, collapsed <=> expanded", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);

// src/@fuse/animations/fade.ts
var fadeIn = trigger("fadeIn", [
  state("void", style({
    opacity: 0
  })),
  state("*", style({
    opacity: 1
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var fadeInTop = trigger("fadeInTop", [
  state("void", style({
    opacity: 0,
    transform: "translate3d(0, -100%, 0)"
  })),
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var fadeInBottom = trigger("fadeInBottom", [
  state("void", style({
    opacity: 0,
    transform: "translate3d(0, 100%, 0)"
  })),
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var fadeInLeft = trigger("fadeInLeft", [
  state("void", style({
    opacity: 0,
    transform: "translate3d(-100%, 0, 0)"
  })),
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var fadeInRight = trigger("fadeInRight", [
  state("void", style({
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  })),
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var fadeOut = trigger("fadeOut", [
  state("*", style({
    opacity: 1
  })),
  state("void", style({
    opacity: 0
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var fadeOutTop = trigger("fadeOutTop", [
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    opacity: 0,
    transform: "translate3d(0, -100%, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var fadeOutBottom = trigger("fadeOutBottom", [
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    opacity: 0,
    transform: "translate3d(0, 100%, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var fadeOutLeft = trigger("fadeOutLeft", [
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    opacity: 0,
    transform: "translate3d(-100%, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var fadeOutRight = trigger("fadeOutRight", [
  state("*", style({
    opacity: 1,
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);

// src/@fuse/animations/shake.ts
var shake = trigger("shake", [
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *, * => true", [
    animate("{{timings}}", keyframes([
      style({
        transform: "translate3d(0, 0, 0)",
        offset: 0
      }),
      style({
        transform: "translate3d(-10px, 0, 0)",
        offset: 0.1
      }),
      style({
        transform: "translate3d(10px, 0, 0)",
        offset: 0.2
      }),
      style({
        transform: "translate3d(-10px, 0, 0)",
        offset: 0.3
      }),
      style({
        transform: "translate3d(10px, 0, 0)",
        offset: 0.4
      }),
      style({
        transform: "translate3d(-10px, 0, 0)",
        offset: 0.5
      }),
      style({
        transform: "translate3d(10px, 0, 0)",
        offset: 0.6
      }),
      style({
        transform: "translate3d(-10px, 0, 0)",
        offset: 0.7
      }),
      style({
        transform: "translate3d(10px, 0, 0)",
        offset: 0.8
      }),
      style({
        transform: "translate3d(-10px, 0, 0)",
        offset: 0.9
      }),
      style({
        transform: "translate3d(0, 0, 0)",
        offset: 1
      })
    ]))
  ], {
    params: {
      timings: "0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)"
    }
  })
]);

// src/@fuse/animations/slide.ts
var slideInTop = trigger("slideInTop", [
  state("void", style({
    transform: "translate3d(0, -100%, 0)"
  })),
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var slideInBottom = trigger("slideInBottom", [
  state("void", style({
    transform: "translate3d(0, 100%, 0)"
  })),
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var slideInLeft = trigger("slideInLeft", [
  state("void", style({
    transform: "translate3d(-100%, 0, 0)"
  })),
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var slideInRight = trigger("slideInRight", [
  state("void", style({
    transform: "translate3d(100%, 0, 0)"
  })),
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var slideOutTop = trigger("slideOutTop", [
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    transform: "translate3d(0, -100%, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var slideOutBottom = trigger("slideOutBottom", [
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    transform: "translate3d(0, 100%, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var slideOutLeft = trigger("slideOutLeft", [
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    transform: "translate3d(-100%, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);
var slideOutRight = trigger("slideOutRight", [
  state("*", style({
    transform: "translate3d(0, 0, 0)"
  })),
  state("void", style({
    transform: "translate3d(100%, 0, 0)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);

// src/@fuse/animations/zoom.ts
var zoomIn = trigger("zoomIn", [
  state("void", style({
    opacity: 0,
    transform: "scale(0.5)"
  })),
  state("*", style({
    opacity: 1,
    transform: "scale(1)"
  })),
  // Prevent the transition if the state is false
  transition("void => false", []),
  // Transition
  transition("void => *", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.entering} ${FuseAnimationCurves.deceleration}`
    }
  })
]);
var zoomOut = trigger("zoomOut", [
  state("*", style({
    opacity: 1,
    transform: "scale(1)"
  })),
  state("void", style({
    opacity: 0,
    transform: "scale(0.5)"
  })),
  // Prevent the transition if the state is false
  transition("false => void", []),
  // Transition
  transition("* => void", animate("{{timings}}"), {
    params: {
      timings: `${FuseAnimationDurations.exiting} ${FuseAnimationCurves.acceleration}`
    }
  })
]);

// src/@fuse/animations/public-api.ts
var fuseAnimations = [
  expandCollapse,
  fadeIn,
  fadeInTop,
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
  fadeOut,
  fadeOutTop,
  fadeOutBottom,
  fadeOutLeft,
  fadeOutRight,
  shake,
  slideInTop,
  slideInBottom,
  slideInLeft,
  slideInRight,
  slideOutTop,
  slideOutBottom,
  slideOutLeft,
  slideOutRight,
  zoomIn,
  zoomOut
];

export {
  AnimationMetadataType,
  AUTO_STYLE,
  animate,
  sequence,
  style,
  NoopAnimationPlayer,
  AnimationGroupPlayer,
  ɵPRE_STYLE,
  AnimationBuilder,
  fuseAnimations
};
/*! Bundled license information:

@angular/animations/fesm2022/private_export-faY_wCkZ.mjs:
@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v19.2.18
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-CK3XZJWG.js.map
