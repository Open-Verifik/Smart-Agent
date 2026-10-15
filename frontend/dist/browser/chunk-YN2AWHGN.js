import {
  buildColombiaVehicleReport
} from "./chunk-UHFTLO3H.js";
import {
  __async,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-fleet/assets/fleet-vehicle-report.util.ts
var REPORT_FEATURE_ALIAS = {
  colombia_api_vehicle_complete_by_vin: "colombia_api_vehicle_complete_by_plate"
};
function featureCodeOfStep(step) {
  if (step.featureCode)
    return step.featureCode;
  const feature = step.appFeature;
  if (feature && typeof feature === "object" && "code" in feature && feature.code)
    return feature.code;
  return "";
}
function snapshotError(snapshot) {
  if (snapshot.isSuccessful !== false)
    return null;
  const error = snapshot.error;
  if (!error)
    return { message: "check_failed", code: "check_failed" };
  if (typeof error === "string")
    return { message: error, code: "check_failed" };
  return {
    message: error.message || "check_failed",
    code: error.code || "check_failed"
  };
}
function latestByFeature(snapshots) {
  const latest = /* @__PURE__ */ new Map();
  for (const snapshot of snapshots) {
    const code = snapshot.featureCode;
    if (!code || latest.has(code))
      continue;
    latest.set(code, snapshot);
    const alias = REPORT_FEATURE_ALIAS[code];
    if (alias && !latest.has(alias))
      latest.set(alias, snapshot);
  }
  return latest;
}
var FEATURE_PAYLOAD_KEYS = ["informacionGeneral", "soat", "tecnoMecanica", "multas", "sinister", "totalGeneral", "pazSalvo"];
function payloadOf(snapshot) {
  const raw = snapshot.raw;
  if (!raw || typeof raw !== "object")
    return null;
  const nested = raw["data"];
  const source = nested && typeof nested === "object" && !Array.isArray(nested) && FEATURE_PAYLOAD_KEYS.some((key) => key in nested) ? nested : raw;
  if (!Object.keys(source).length)
    return null;
  return source;
}
function uniqueSnapshots(byCode) {
  const seen = /* @__PURE__ */ new Set();
  const list = [];
  for (const snapshot of byCode.values()) {
    if (seen.has(snapshot))
      continue;
    seen.add(snapshot);
    list.push(snapshot);
  }
  return list;
}
function stepsFromSnapshots(snapshots) {
  return snapshots.filter((snapshot) => snapshot.featureCode).map((snapshot, index) => ({
    sequence: index + 1,
    enabled: true,
    appFeature: {
      code: REPORT_FEATURE_ALIAS[snapshot.featureCode || ""] || snapshot.featureCode
    }
  }));
}
function buildFleetVehicleSample(asset, snapshots, configuredSteps = []) {
  const byCode = latestByFeature(snapshots);
  const fromTemplate = configuredSteps.filter((step) => step.enabled !== false && featureCodeOfStep(step));
  const steps = fromTemplate.length ? fromTemplate : stepsFromSnapshots(uniqueSnapshots(byCode));
  const results = {};
  const errors = [];
  for (const step of steps) {
    const snapshot = byCode.get(featureCodeOfStep(step));
    if (!snapshot)
      continue;
    const failure = snapshotError(snapshot);
    if (failure) {
      errors.push(__spreadValues({ step: step.sequence }, failure));
      continue;
    }
    const payload = payloadOf(snapshot);
    if (payload)
      results[step.sequence] = payload;
  }
  const inputData = {
    plate: asset.plate || "",
    documentType: asset.ownerDocumentType || "",
    documentNumber: asset.ownerDocumentNumber || "",
    vin: asset.vin || ""
  };
  const batchName = asset.nickname || asset.plate || asset.vin || "Veh\xEDculo";
  const composerSteps = steps.map((step) => ({
    sequence: step.sequence,
    enabled: true,
    appFeature: { code: featureCodeOfStep(step) }
  }));
  const report = buildColombiaVehicleReport({ rowIndex: 0, inputData, results, errors }, composerSteps, {
    batchName
  });
  return {
    batchName,
    rowIndex: 0,
    inputData,
    results,
    errors,
    report,
    steps: composerSteps.map((step) => ({
      sequence: step.sequence,
      enabled: true,
      featureCode: featureCodeOfStep(step),
      appFeature: { code: featureCodeOfStep(step) }
    }))
  };
}
function fleetReportFileName(asset, templateName) {
  const plate = (asset.plate || asset.vin || "vehiculo").replace(/[^\w.-]+/g, "_");
  const template = (templateName || "reporte").replace(/[^\w.-]+/g, "_");
  return `${template}_${plate}.pdf`;
}
function blobIsPdf(blob) {
  return __async(this, null, function* () {
    const bytes = new Uint8Array(yield blob.slice(0, 5).arrayBuffer());
    return bytes[0] === 37 && bytes[1] === 80 && bytes[2] === 68 && bytes[3] === 70;
  });
}
function pdfBlobFromResponse(blob) {
  return __async(this, null, function* () {
    if (yield blobIsPdf(blob))
      return blob;
    try {
      const parsed = JSON.parse(yield blob.text());
      const keys = Object.keys(parsed).filter((key) => /^\d+$/.test(key));
      if (!keys.length) {
        if (typeof parsed.message === "string" && parsed.message)
          throw new Error(parsed.message);
        return null;
      }
      keys.sort((left, right) => Number(left) - Number(right));
      const bytes = new Uint8Array(keys.length);
      keys.forEach((key, index) => {
        bytes[index] = Number(parsed[key]) & 255;
      });
      if (bytes[0] !== 37 || bytes[1] !== 80 || bytes[2] !== 68 || bytes[3] !== 70)
        return null;
      return new Blob([bytes], { type: "application/pdf" });
    } catch {
      return null;
    }
  });
}

// src/app/modules/smart-fleet/fleet-country.util.ts
var FLEET_COUNTRY_ROADMAP = [
  { code: "mx", available: false },
  { code: "cl", available: false },
  { code: "pe", available: false }
];
var FLEET_COUNTRY_PLACEHOLDERS = {
  co: { plate: "ABC123", documentType: "CC" },
  mx: { plate: "ABC123A", documentType: "INE" },
  cl: { plate: "ABCD12", documentType: "RUT" },
  pe: { plate: "ABC123", documentType: "DNI" }
};
var COUNTRY_FLAGS = {
  co: "\u{1F1E8}\u{1F1F4}",
  mx: "\u{1F1F2}\u{1F1FD}",
  cl: "\u{1F1E8}\u{1F1F1}",
  pe: "\u{1F1F5}\u{1F1EA}",
  br: "\u{1F1E7}\u{1F1F7}",
  us: "\u{1F1FA}\u{1F1F8}"
};
var mergeFleetCountries = (supported = []) => {
  const byCode = /* @__PURE__ */ new Map();
  for (const entry of FLEET_COUNTRY_ROADMAP) {
    byCode.set(entry.code, __spreadValues({}, entry));
  }
  for (const entry of supported) {
    byCode.set(entry.code, { code: entry.code, available: entry.available !== false });
  }
  const live = [...byCode.values()].filter((entry) => entry.available);
  const soon = [...byCode.values()].filter((entry) => !entry.available);
  return [...live, ...soon];
};
var getFleetCountryFlag = (country) => {
  const key = String(country || "").trim().toLowerCase();
  return COUNTRY_FLAGS[key] ?? "\u{1F3F3}\uFE0F";
};
var getFleetCountryPlaceholders = (country) => {
  const key = String(country || "co").trim().toLowerCase();
  return FLEET_COUNTRY_PLACEHOLDERS[key] ?? FLEET_COUNTRY_PLACEHOLDERS.co;
};

export {
  buildFleetVehicleSample,
  fleetReportFileName,
  pdfBlobFromResponse,
  mergeFleetCountries,
  getFleetCountryFlag,
  getFleetCountryPlaceholders
};
//# sourceMappingURL=chunk-YN2AWHGN.js.map
