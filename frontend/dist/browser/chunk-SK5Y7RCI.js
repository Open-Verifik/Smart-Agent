import {
  signal
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-fleet/assets/fleet-report-progress.ts
var FleetReportProgressHub = class {
  constructor() {
    this.title = signal("");
    this.phase = signal("estimate");
    this.estimateLoading = signal(false);
    this.estimate = signal(null);
    this.vehicleCount = signal(1);
    this.runMode = signal(null);
    this.runModeHintKey = signal("");
    this.items = signal([]);
    this.percent = signal(0);
    this.finished = signal(false);
    this.success = signal(false);
    this.errorMessage = signal(null);
    this._seq = 0;
  }
  waitForCostConfirm() {
    return new Promise((resolve) => {
      this._confirmResolve = resolve;
    });
  }
  canConfirmEstimate() {
    const estimate = this.estimate();
    return Boolean(estimate?.sufficientCredits !== false);
  }
  confirmRun() {
    if (!this.canConfirmEstimate())
      return;
    this.phase.set("run");
    this._confirmResolve?.(true);
    this._confirmResolve = void 0;
  }
  cancelEstimate() {
    this._confirmResolve?.(false);
    this._confirmResolve = void 0;
  }
  setRunMode(mode) {
    this.runMode.set(mode);
    this.runModeHintKey.set(mode === "async" ? "createBatchConfig.runModeAsyncHint" : "createBatchConfig.runModeSyncHint");
  }
  /** Updates the active line when the key matches; otherwise starts a new step. */
  pulseStep(labelKey, params) {
    const items = this.items();
    const last = items[items.length - 1];
    if (last?.status === "active" && last.labelKey === labelKey) {
      this.items.update((list) => list.map((item, index) => index === list.length - 1 ? __spreadProps(__spreadValues({}, item), { params: __spreadValues(__spreadValues({}, item.params), params) }) : item));
      return;
    }
    this.beginStep(labelKey, params);
  }
  beginStep(labelKey, params) {
    this.items.update((list) => {
      const next = list.map((item) => item.status === "active" ? __spreadProps(__spreadValues({}, item), { status: "done" }) : item);
      return [
        ...next,
        {
          id: `step-${++this._seq}`,
          labelKey,
          params,
          status: "active"
        }
      ];
    });
  }
  completeActiveStep() {
    this.items.update((list) => list.map((item) => item.status === "active" ? __spreadProps(__spreadValues({}, item), { status: "done" }) : item));
  }
  setPercent(value) {
    const clamped = Math.max(0, Math.min(100, Math.round(value)));
    this.percent.set(clamped);
  }
  finish() {
    this.completeActiveStep();
    this.setPercent(100);
    this.phase.set("done");
    this.finished.set(true);
    this.success.set(true);
  }
  fail(message) {
    this.items.update((list) => list.map((item) => item.status === "active" ? __spreadProps(__spreadValues({}, item), { status: "error" }) : item));
    this.finished.set(true);
    this.success.set(false);
    this.errorMessage.set(message);
  }
};
function fleetReportPercentFromStage(stage, done, total) {
  if (stage === "prepare")
    return 8;
  if (stage === "pdf")
    return 92;
  if (stage === "save")
    return 97;
  if (!total)
    return 12;
  return 12 + Math.round(done / total * 75);
}
function isFleetBatchAsync(executor) {
  return executor === "queue";
}
function isFleetBatchServerManaged(executor, batch, progress) {
  if (isFleetBatchAsync(executor) || isFleetBatchAsync(batch?.executor))
    return true;
  if (progress?.serverSide === true)
    return true;
  if (batch?.run)
    return true;
  return false;
}
function batchRowsSettled(batch) {
  return (batch?.rows || []).filter((row) => row.status === "completed" || row.status === "partial" || row.status === "failed").length;
}
function batchConsultTerminalStatus(batch) {
  const rows = batch?.rows || [];
  if (!rows.length)
    return "failed";
  const settled = batchRowsSettled(batch);
  if (!settled || rows.every((row) => row.status === "failed"))
    return "failed";
  return rows.some((row) => row.status !== "completed") ? "partial" : "completed";
}
function rowHasAllStepResults(row, steps) {
  const enabled = steps.filter((step) => step.enabled !== false);
  if (!enabled.length)
    return false;
  const results = row.results || {};
  return enabled.every((step) => results[step.sequence] != null || results[String(step.sequence)] != null);
}
function batchRowsFinished(batch, steps) {
  const rows = batch?.rows || [];
  if (!rows.length)
    return false;
  return rows.every((row) => {
    if (row.status === "completed" || row.status === "partial" || row.status === "failed")
      return true;
    return rowHasAllStepResults(row, steps);
  });
}
function consultDoneCount(batch, progress, totalFallback, steps = []) {
  const rows = batch?.rows || [];
  const total = rows.length || progress?.totalRows || progress?.run?.totalItems || totalFallback || 0;
  if (rows.length) {
    const done = rows.filter((row) => {
      if (row.status === "completed" || row.status === "partial" || row.status === "failed")
        return true;
      return steps.length ? rowHasAllStepResults(row, steps) : false;
    }).length;
    return { done, total };
  }
  const pending = progress?.pendingRows;
  if (typeof pending === "number" && progress?.totalRows) {
    return { done: Math.max(0, progress.totalRows - pending), total: progress.totalRows };
  }
  const run = progress?.run;
  if (run?.totalItems) {
    return {
      done: (run.completedItems ?? 0) + (run.failedItems ?? 0) + (run.partialItems ?? 0),
      total: run.totalItems
    };
  }
  return {
    done: (progress?.completedRows ?? 0) + (progress?.partialRows ?? 0) + (progress?.failedRows ?? 0),
    total
  };
}
function progressPollTerminalStatus(progress, batch, steps = []) {
  if (batch?.rows?.length) {
    const awaiting = batch.rows.some((row) => row.status === "pending" || row.status === "processing");
    if (!awaiting || steps.length && batchRowsFinished(batch, steps)) {
      return batchConsultTerminalStatus(batch);
    }
  }
  if (!progress)
    return null;
  const status = progress.status;
  if (status === "completed" || status === "failed" || status === "cancelled")
    return status;
  const run = progress.run;
  if (run?.status === "completed" || run?.status === "failed" || run?.status === "cancelled") {
    return status || run.status;
  }
  const total = progress.totalRows ?? run?.totalItems ?? 0;
  if (!total)
    return null;
  const pending = progress.pendingRows;
  if (typeof pending === "number" && pending === 0)
    return status || "completed";
  const settled = (progress.completedRows ?? 0) + (progress.failedRows ?? 0) + (progress.partialRows ?? 0);
  if (settled >= total)
    return status || "completed";
  if (run?.totalItems) {
    const runSettled = (run.completedItems ?? 0) + (run.failedItems ?? 0) + (run.partialItems ?? 0);
    if (runSettled >= run.totalItems)
      return status || "completed";
  }
  return null;
}
function nextPendingStepForRow(row, steps) {
  const enabled = steps.filter((step) => step.enabled !== false).sort((a, b) => a.sequence - b.sequence);
  const results = row.results || {};
  for (const step of enabled) {
    if (results[step.sequence] == null && results[String(step.sequence)] == null)
      return step;
  }
  return null;
}
function fleetLookupCreditsAsUsd(credits) {
  const value = Number(credits);
  return Number.isFinite(value) ? value : 0;
}
function formatFleetLookupUsd(credits) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(fleetLookupCreditsAsUsd(credits));
}
function stepFeatureLabel(step) {
  const feature = typeof step.appFeature === "object" && step.appFeature ? step.appFeature : null;
  const name = String(feature?.name || feature?.code || feature?.endpoint || feature?.url || "").trim();
  if (name) {
    const short = name.split("/").filter(Boolean).pop();
    return String(short || name);
  }
  return "endpoint";
}

export {
  FleetReportProgressHub,
  fleetReportPercentFromStage,
  isFleetBatchServerManaged,
  batchConsultTerminalStatus,
  consultDoneCount,
  progressPollTerminalStatus,
  nextPendingStepForRow,
  formatFleetLookupUsd,
  stepFeatureLabel
};
//# sourceMappingURL=chunk-SK5Y7RCI.js.map
