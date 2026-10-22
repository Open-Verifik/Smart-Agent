import {
  colombiaVehicleStepErrorKey,
  extractColombiaFasecoldaSinisterTables,
  extractColombiaFasecoldaValuesTables,
  extractColombiaRuntTables,
  extractColombiaSimitAgreementsTables,
  extractColombiaSimitPlateTables,
  formatCop,
  formatYesNo,
  getSimitAgreementsList,
  humanizeColombiaVehicleError,
  isBenignNoRecord,
  pickRtmForReport,
  pickVigenteSoat,
  presentColombiaFasecoldaSinister,
  presentColombiaFasecoldaValues,
  presentColombiaRuntVehicleByPlate,
  presentColombiaSimitAgreements,
  presentColombiaSimitPlate
} from "./chunk-UJQXDUF5.js";
import {
  getBatchSkippedStepsFromInput
} from "./chunk-T3ZUDNVS.js";

// src/app/modules/smart-batch/colombia-vehicle-report/colombia-vehicle-report.blocks.ts
var COLOMBIA_VEHICLE_REPORT_BLOCKS = [
  {
    blockId: "runt_vehicle_by_plate",
    featureCode: "colombia_api_vehicle_complete_by_plate",
    endpoint: "v2/co/runt/vehicle-by-plate",
    credits: 0.3,
    requiredInputFields: ["documentType", "documentNumber", "plate"],
    sections: [
      { id: "identity", titleKey: "colombiaVehicleReport.sections.runtIdentity", priority: "high" },
      { id: "compliance", titleKey: "colombiaVehicleReport.sections.runtCompliance", priority: "high" },
      { id: "soat", titleKey: "colombiaVehicleReport.sections.runtSoat", priority: "high" },
      { id: "rtm", titleKey: "colombiaVehicleReport.sections.runtRtm", priority: "high" },
      { id: "liens", titleKey: "colombiaVehicleReport.sections.runtLiens", priority: "medium" },
      { id: "procedures", titleKey: "colombiaVehicleReport.sections.runtProcedures", priority: "medium" }
    ]
  },
  {
    blockId: "simit_fines_by_plate",
    featureCode: "colombia_api_simit_plate",
    endpoint: "v2/co/simit/consultar/placa",
    credits: 0.2,
    requiredInputFields: ["plate"],
    sections: [
      { id: "summary", titleKey: "colombiaVehicleReport.sections.simitSummary", priority: "high" },
      { id: "fines", titleKey: "colombiaVehicleReport.sections.simitFines", priority: "high" }
    ]
  },
  {
    blockId: "simit_agreements",
    featureCode: "colombia_api_simit_agreements",
    endpoint: "v2/co/simit/acuerdos",
    credits: 0.2,
    requiredInputFields: ["documentType", "documentNumber"],
    sections: [
      { id: "agreements", titleKey: "colombiaVehicleReport.sections.simitAgreements", priority: "high" }
    ]
  },
  {
    blockId: "fasecolda_sinister",
    featureCode: "colombia_api_vehicle_sinister_fasecolda_by_plate",
    endpoint: "v2/co/fasecolda/sinister",
    credits: 0.3,
    requiredInputFields: ["plate"],
    sections: [
      { id: "claims", titleKey: "colombiaVehicleReport.sections.fasecoldaClaims", priority: "high" }
    ]
  },
  {
    blockId: "fasecolda_values",
    featureCode: "colombia_api_vehicle_valores_fasecolda_by_plate",
    endpoint: "v2/co/fasecolda/values-by-plate",
    credits: 0.3,
    requiredInputFields: ["plate"],
    sections: [
      { id: "catalog", titleKey: "colombiaVehicleReport.sections.fasecoldaCatalog", priority: "high" },
      { id: "valuation", titleKey: "colombiaVehicleReport.sections.fasecoldaValuation", priority: "high" }
    ]
  }
];
var FEATURE_CODE_TO_BLOCK_ID = Object.fromEntries(COLOMBIA_VEHICLE_REPORT_BLOCKS.map((b) => [b.featureCode, b.blockId]));

// src/app/modules/smart-batch/colombia-vehicle-report/colombia-vehicle-report.presenters.ts
var PRESENTER_BUNDLES = {
  runt_vehicle_by_plate: {
    displayRows: presentColombiaRuntVehicleByPlate,
    tables: extractColombiaRuntTables
  },
  simit_fines_by_plate: {
    displayRows: presentColombiaSimitPlate,
    tables: extractColombiaSimitPlateTables
  },
  simit_agreements: {
    displayRows: presentColombiaSimitAgreements,
    tables: extractColombiaSimitAgreementsTables
  },
  fasecolda_sinister: {
    displayRows: presentColombiaFasecoldaSinister,
    tables: extractColombiaFasecoldaSinisterTables
  },
  fasecolda_values: {
    displayRows: presentColombiaFasecoldaValues,
    tables: extractColombiaFasecoldaValuesTables
  }
};
var presentBlockData = (blockId, data) => {
  const bundle = PRESENTER_BUNDLES[blockId];
  const rows = bundle.displayRows(data);
  return {
    displayRows: rows && rows.length > 0 ? rows : [],
    tables: bundle.tables(data)
  };
};
var resolveBlockStatus = (blockId, data) => {
  if (data == null)
    return "empty";
  if (isBenignNoRecord(data))
    return "empty";
  if (typeof data !== "object" || Array.isArray(data))
    return "ok";
  const o = data;
  if (blockId === "fasecolda_sinister") {
    const sinister = o.sinister;
    if (Array.isArray(sinister) && sinister.length === 0)
      return "empty";
  }
  if (blockId === "simit_agreements") {
    if (getSimitAgreementsList(o).length === 0)
      return "empty";
  }
  if (blockId === "simit_fines_by_plate") {
    const multas = o.multas;
    if (Array.isArray(multas) && multas.length === 0)
      return "ok";
  }
  return "ok";
};

// src/app/modules/smart-batch/colombia-vehicle-report/colombia-vehicle-report.composer.ts
var getFeatureCodeFromStep = (step) => {
  const feature = step.appFeature;
  if (typeof feature === "object" && feature != null && "code" in feature) {
    return feature.code;
  }
  return void 0;
};
var resolveResultsByFeatureCode = (row, steps) => {
  const map = /* @__PURE__ */ new Map();
  for (const step of steps) {
    if (!step.enabled)
      continue;
    const code = getFeatureCodeFromStep(step);
    if (!code)
      continue;
    const data = row.results?.[step.sequence];
    if (data !== void 0 && data !== null) {
      map.set(code, { sequence: step.sequence, data });
    }
  }
  return map;
};
var buildMeta = (row, resultsByCode, batchName) => {
  const input = row.inputData ?? {};
  const runt = resultsByCode.get("colombia_api_vehicle_complete_by_plate")?.data;
  const info = runt?.informacionGeneral ?? {};
  return {
    plate: String(input.plate ?? runt?.plate ?? info.noPlaca ?? ""),
    documentType: input.documentType != null ? String(input.documentType) : String(runt?.documentType ?? ""),
    documentNumber: input.documentNumber != null ? String(input.documentNumber) : String(runt?.documentNumber ?? ""),
    vin: String(runt?.vin ?? info.noVin ?? ""),
    batchName,
    rowIndex: row.rowIndex
  };
};
var buildSummary = (resultsByCode) => {
  const summary = {};
  const runt = resultsByCode.get("colombia_api_vehicle_complete_by_plate")?.data;
  if (runt) {
    const info = runt.informacionGeneral ?? {};
    const blindaje = runt.informacionBlindaje ?? {};
    const soat = pickVigenteSoat(runt.soat);
    const rtmPick = pickRtmForReport(runt.tecnoMecanica);
    summary.soatVigente = soat?.estado != null ? String(soat.estado) : void 0;
    summary.rtmVigente = rtmPick ? rtmPick.isVigente ? "SI" : "NO" : void 0;
    summary.tieneGravamenes = formatYesNo(info.tieneGravamenes);
    summary.blindado = formatYesNo(blindaje.blindado);
  }
  const simit = resultsByCode.get("colombia_api_simit_plate")?.data;
  if (simit) {
    summary.simitTotalGeneral = formatCop(simit.totalGeneral);
    summary.pazSalvo = formatYesNo(simit.pazSalvo);
  }
  const sinister = resultsByCode.get("colombia_api_vehicle_sinister_fasecolda_by_plate")?.data;
  if (sinister && typeof sinister === "object" && !Array.isArray(sinister)) {
    if (isBenignNoRecord(sinister)) {
      summary.sinisterCount = 0;
    } else {
      const claims = sinister.sinister;
      summary.sinisterCount = Array.isArray(claims) ? claims.length : 0;
    }
  }
  return summary;
};
var buildBlockState = (blockId, featureCode, payload, rowErrors, enabledSteps, rowInputData) => {
  if (!payload) {
    const step = enabledSteps.find((s) => getFeatureCodeFromStep(s) === featureCode);
    const stepError2 = step ? rowErrors?.find((e) => e.step === step.sequence) : void 0;
    if (stepError2) {
      return {
        status: "error",
        featureCode,
        sequence: step?.sequence,
        errorMessage: humanizeColombiaVehicleError(colombiaVehicleStepErrorKey(stepError2))
      };
    }
    const skippedMeta = getBatchSkippedStepsFromInput(rowInputData).find((entry) => entry.stepCode === featureCode || entry.sequence === step?.sequence);
    if (skippedMeta) {
      return {
        status: "skipped",
        featureCode,
        sequence: skippedMeta.sequence,
        skipMessage: `${skippedMeta.value} (${skippedMeta.field}) is not supported for this step. Allowed: ${skippedMeta.allowedValues.join(", ")}.`
      };
    }
    return { status: "skipped", featureCode };
  }
  const stepError = rowErrors?.find((e) => e.step === payload.sequence);
  if (stepError) {
    return {
      status: "error",
      featureCode,
      sequence: payload.sequence,
      errorMessage: humanizeColombiaVehicleError(colombiaVehicleStepErrorKey(stepError))
    };
  }
  const status = resolveBlockStatus(blockId, payload.data);
  const { displayRows, tables } = presentBlockData(blockId, payload.data);
  return {
    status,
    featureCode,
    sequence: payload.sequence,
    data: payload.data,
    displayRows,
    tables
  };
};
var buildColombiaVehicleReport = (row, steps, options) => {
  const enabledSteps = steps.filter((s) => s.enabled);
  const resultsByCode = resolveResultsByFeatureCode(row, enabledSteps);
  const meta = buildMeta(row, resultsByCode, options?.batchName);
  const summary = buildSummary(resultsByCode);
  const blocks = {};
  for (const blockDef of COLOMBIA_VEHICLE_REPORT_BLOCKS) {
    const configured = enabledSteps.some((s) => getFeatureCodeFromStep(s) === blockDef.featureCode);
    if (!configured)
      continue;
    const payload = resultsByCode.get(blockDef.featureCode);
    blocks[blockDef.blockId] = buildBlockState(blockDef.blockId, blockDef.featureCode, payload, row.errors, enabledSteps, row.inputData);
  }
  for (const [featureCode, payload] of resultsByCode.entries()) {
    const blockId = FEATURE_CODE_TO_BLOCK_ID[featureCode];
    if (!blockId || blocks[blockId])
      continue;
    blocks[blockId] = buildBlockState(blockId, featureCode, payload, row.errors, enabledSteps, row.inputData);
  }
  return { meta, summary, blocks };
};
var hasColombiaVehicleReportSteps = (steps) => steps.some((s) => {
  const code = getFeatureCodeFromStep(s);
  return !!code && !!FEATURE_CODE_TO_BLOCK_ID[code];
});

export {
  buildColombiaVehicleReport,
  hasColombiaVehicleReportSteps
};
//# sourceMappingURL=chunk-R7BWRX3I.js.map
