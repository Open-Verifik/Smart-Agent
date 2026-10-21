import {
  canonicalChainField,
  collectCanonicalScalarValues
} from "./chunk-JCIM3ZHA.js";
import {
  SmartBatchService,
  getEffectiveSmartBatchSuccessWhen
} from "./chunk-DP7W4Q6V.js";
import {
  environment
} from "./chunk-PMCYMBOC.js";
import {
  HttpClient,
  Injectable,
  firstValueFrom,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PNPEHISK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-batch/batch-param-resolver.ts
var TEMPLATE = /^\{\{\s*([^}]+?)\s*\}\}$/;
var isEmpty = (value) => value === null || value === void 0 || typeof value === "string" && value.trim() === "";
var normalizeMapping = (mapping) => {
  if (!mapping)
    return {};
  if (mapping instanceof Map)
    return Object.fromEntries(mapping.entries());
  if (typeof mapping === "object")
    return __spreadValues({}, mapping);
  return {};
};
var getByPath = (source, path) => {
  if (!path || source == null)
    return void 0;
  const segments = String(path).replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let current = source;
  for (const segment of segments) {
    if (current == null || typeof current !== "object")
      return void 0;
    current = Array.isArray(current) ? current[Number(segment)] : current[segment];
  }
  return current;
};
var resolveTemplate = (value, context) => {
  if (typeof value !== "string")
    return value;
  const exact = value.match(TEMPLATE);
  if (!exact)
    return value;
  return getByPath(context, exact[1]);
};
var resolveStepParams = (options) => {
  const inputData = options.inputData || {};
  const results = options.results || {};
  const context = { input: inputData, inputData, results, steps: results };
  const params = {};
  for (const dependency of options.dependencies || []) {
    if (!dependency.field || dependency.default == null)
      continue;
    params[dependency.field] = dependency.default;
  }
  for (const dependency of options.dependencies || []) {
    if (!dependency.field)
      continue;
    const raw = getByPath(inputData, dependency.field);
    if (!isEmpty(raw))
      params[dependency.field] = raw;
  }
  for (const [key, value] of Object.entries(options.step.parameterDefaults || {})) {
    const resolved = resolveTemplate(value, context);
    if (!isEmpty(resolved))
      params[key] = resolved;
  }
  for (const [inputColumn, apiParam] of Object.entries(normalizeMapping(options.step.inputFieldMapping))) {
    if (!apiParam)
      continue;
    const raw = TEMPLATE.test(inputColumn) ? resolveTemplate(inputColumn, context) : getByPath(inputData, inputColumn);
    if (!isEmpty(raw))
      params[apiParam] = raw;
  }
  const fromPrior = __spreadValues(__spreadValues({}, collectCanonicalScalarValues(results)), collectCanonicalScalarValues(inputData));
  for (const dependency of options.dependencies || []) {
    if (!dependency.field || !isEmpty(params[dependency.field]))
      continue;
    const raw = fromPrior[canonicalChainField(dependency.field)];
    if (!isEmpty(raw))
      params[dependency.field] = raw;
  }
  for (const key of Object.keys(params)) {
    if (!isEmpty(params[key]))
      continue;
    const raw = fromPrior[canonicalChainField(key)];
    if (!isEmpty(raw))
      params[key] = raw;
  }
  for (const key of Object.keys(params)) {
    if (isEmpty(params[key]))
      delete params[key];
    else if (typeof params[key] === "string")
      params[key] = params[key].trim();
  }
  return params;
};

// src/app/modules/smart-batch/batch-browser-runner.service.ts
var BatchBrowserRunnerService = class _BatchBrowserRunnerService {
  constructor(_http, _smartBatch) {
    this._http = _http;
    this._smartBatch = _smartBatch;
    this.running = signal(false);
    this._abort = false;
  }
  stop() {
    this._abort = true;
    this.running.set(false);
  }
  runBatch(batch, steps, onBatch, onError, hooks) {
    return __async(this, null, function* () {
      const batchId = batch._id;
      if (!batchId || this.running())
        return;
      this._abort = false;
      this.running.set(true);
      const pending = (batch.rows || []).filter((row) => row.status === "pending" || row.status === "processing");
      let current = batch;
      try {
        for (const row of pending) {
          if (this._abort)
            return;
          current = yield this._runRow(batchId, row, steps, current, onBatch, hooks);
        }
      } catch (error) {
        onError?.(error);
      } finally {
        this.running.set(false);
      }
    });
  }
  retryRowSteps(batch, steps, rowIndex, sequences, onBatch) {
    return __async(this, null, function* () {
      const batchId = batch._id;
      const row = (batch.rows || []).find((item) => item.rowIndex === rowIndex);
      if (!batchId || !row)
        return batch;
      const wanted = [...new Set(sequences.map(Number).filter(Number.isFinite))];
      const enabled = steps.filter((step) => step.enabled !== false).sort((a, b) => a.sequence - b.sequence);
      const results = __spreadValues({}, row.results || {});
      const errors = (row.errors || []).filter((error) => !wanted.includes(Number(error.step)));
      let creditsSpent = 0;
      for (const sequence of wanted) {
        delete results[sequence];
      }
      this.running.set(true);
      try {
        const pending = yield this._putRow(batchId, rowIndex, {
          status: "pending",
          results,
          errors
        });
        onBatch(pending.data);
        for (const sequence of wanted) {
          if (this._abort)
            break;
          const step = enabled.find((item) => item.sequence === sequence);
          if (!step)
            continue;
          const outcome = yield this._invokeStep(step, row.inputData || {}, results);
          creditsSpent += outcome.credits;
          if (outcome.ok) {
            results[sequence] = outcome.body;
            continue;
          }
          if ("message" in outcome) {
            errors.push({ step: sequence, message: outcome.message, code: outcome.code });
          }
        }
        const status = errors.length === 0 ? "completed" : Object.keys(results).length ? "partial" : "failed";
        const res = yield this._putRow(batchId, rowIndex, { status, results, errors, creditsSpent });
        onBatch(res.data);
        return res.data;
      } finally {
        this.running.set(false);
        this._abort = false;
      }
    });
  }
  _runRow(batchId, row, steps, batch, onBatch, hooks) {
    return __async(this, null, function* () {
      const enabled = steps.filter((step) => step.enabled !== false).sort((a, b) => a.sequence - b.sequence);
      const results = __spreadValues({}, row.results || {});
      const errors = [];
      let creditsSpent = 0;
      for (const step of enabled) {
        if (this._abort)
          return batch;
        if (results[step.sequence] != null)
          continue;
        hooks?.onStepStart?.({ step, rowIndex: row.rowIndex });
        const outcome = yield this._invokeStep(step, row.inputData || {}, results);
        hooks?.onStepComplete?.({ step, rowIndex: row.rowIndex, ok: outcome.ok });
        creditsSpent += outcome.credits;
        if (outcome.ok) {
          results[step.sequence] = outcome.body;
          continue;
        }
        if ("message" in outcome) {
          errors.push({ step: step.sequence, message: outcome.message, code: outcome.code });
        }
        break;
      }
      const status = errors.length === 0 ? "completed" : Object.keys(results).length ? "partial" : "failed";
      const payload = { status, results, errors, creditsSpent };
      const res = yield this._putRow(batchId, row.rowIndex, payload);
      onBatch(res.data);
      return res.data;
    });
  }
  _putRow(batchId, rowIndex, payload) {
    return __async(this, null, function* () {
      try {
        return yield firstValueFrom(this._smartBatch.updateBatchRow(batchId, rowIndex, payload));
      } catch (error) {
        if (!this._isServerSideManaged(error))
          throw error;
        yield firstValueFrom(this._smartBatch.getBatchProgress(batchId));
        return yield firstValueFrom(this._smartBatch.updateBatchRow(batchId, rowIndex, payload));
      }
    });
  }
  _isServerSideManaged(error) {
    const http = error;
    const code = String(http?.error?.code || http?.error?.error?.code || "");
    const message = String(http?.error?.message || http?.message || "");
    return code === "batch_is_server_side_managed" || message.includes("batch_is_server_side_managed");
  }
  /**
   * `includeCost` makes the endpoint return what it actually billed, the same figure the
   * server-side runner records, so browser-run batches report real spend too.
   */
  _invokeStep(step, inputData, results) {
    return __async(this, null, function* () {
      const feature = typeof step.appFeature === "object" ? step.appFeature : null;
      const url = this._featureUrl(feature);
      if (!url)
        return { ok: false, message: "Step is missing an AppFeature URL", code: "MissingFeature", credits: 0 };
      const params = resolveStepParams({
        step,
        dependencies: feature?.dependencies,
        inputData,
        results
      });
      const method = String(feature?.method || "GET").toUpperCase();
      const query = method === "GET" || method === "DELETE" ? __spreadProps(__spreadValues({}, method === "GET" ? Object.fromEntries(Object.entries(params).map(([key, value]) => [key, value == null ? "" : String(value)])) : {}), {
        includeCost: "true"
      }) : void 0;
      try {
        const body = yield firstValueFrom(this._http.request(method, url, __spreadValues(__spreadValues({}, query ? { params: query } : {}), method === "GET" ? {} : { body: method === "DELETE" ? params : __spreadProps(__spreadValues({}, params), { includeCost: true }) })));
        return { ok: true, body: body?.data ?? body, credits: this._creditsOf(body) };
      } catch (error) {
        return __spreadProps(__spreadValues({}, this._stepFailure(error, feature)), { credits: this._creditsOf(error?.error) });
      }
    });
  }
  _creditsOf(body) {
    const value = Number(body?.creditsCharged);
    return Number.isFinite(value) && value > 0 ? value : 0;
  }
  _featureUrl(feature) {
    const path = feature?.url || feature?.endpoint;
    if (!path)
      return null;
    return `${environment.apiUrl}/${String(path).replace(/^\//, "")}`;
  }
  _stepFailure(error, feature) {
    const http = error;
    const code = http?.error?.code || http?.error?.error?.code || "RequestFailed";
    const rules = feature ? getEffectiveSmartBatchSuccessWhen(feature) : void 0;
    const matched = rules?.some((rule) => rule.httpStatus === http?.status && (!rule.responseCodes?.length || rule.responseCodes.includes(code)));
    if (matched)
      return { ok: true, body: http.error?.data ?? http.error ?? {} };
    return {
      ok: false,
      message: http?.error?.message || http?.message || "Request failed",
      code
    };
  }
  static {
    this.\u0275fac = function BatchBrowserRunnerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BatchBrowserRunnerService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(SmartBatchService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BatchBrowserRunnerService, factory: _BatchBrowserRunnerService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BatchBrowserRunnerService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: SmartBatchService }], null);
})();

export {
  BatchBrowserRunnerService
};
//# sourceMappingURL=chunk-OLZUTVF6.js.map
