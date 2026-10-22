// src/app/modules/smart-enroll/projects/app-registration-record.utils.ts
var pickEnrollmentFaceMedia = (r) => {
  if (!r)
    return null;
  const top = r.face;
  if (top && (top.base64 || top.url))
    return top;
  const nested = r.biometricValidation?.face;
  if (nested && typeof nested === "object" && (nested.base64 || nested.url))
    return nested;
  return null;
};
var ORDER_OCR_BY = {
  Address: 15,
  Age: 13,
  "Date Of Birth": 12,
  "Document Number": 17,
  "Document Type": 16,
  "First Last Name MRZ": 22,
  "First Name": 27,
  "First Name MRZ": 26,
  "Full Name": 90,
  "Last Name": 24,
  "Middle Name": 25,
  "Name 1": 31,
  "Name 2": 30,
  "Name 3": 29,
  "Second Last Name": 23,
  "Second Last Name MRZ": 23
};
var cleanOcrExtraction = (ocr) => {
  if (!ocr || typeof ocr !== "object")
    return [];
  delete ocr.barcodeValidation;
  Object.keys(ocr).forEach((key) => {
    const camelCaseKey = key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
    if (ocr[key] != null && camelCaseKey !== key) {
      ocr[camelCaseKey] = ocr[key];
      delete ocr[key];
    }
  });
  return Object.keys(ocr).sort((a, b) => (ORDER_OCR_BY[b] || 1) - (ORDER_OCR_BY[a] || 1));
};
var normalizeUnitScore = (value) => {
  const n = Number(value);
  if (!Number.isFinite(n))
    return 0;
  return n > 1 ? n / 100 : n;
};
var scoreToPercent = (score) => {
  const n = Number(score);
  if (!Number.isFinite(n))
    return 0;
  return Math.round(n * 100);
};
var resolveCompareMinScoreUnit = (record) => {
  if (!record)
    return 0.85;
  const pf = record.projectFlow;
  return pf?.liveness?.compareMinScore ?? pf?.onboardingSettings?.document?.compareMinScore ?? 0.85;
};
var compareMinScoreDisplayPercent = (record) => {
  if (!record)
    return null;
  const compare = record.compareFaceVerification;
  if (!compare?.result)
    return null;
  const stored = compare.result.compare_min_score;
  const unit = stored !== void 0 && stored !== null ? normalizeUnitScore(stored) : resolveCompareMinScoreUnit(record);
  return scoreToPercent(unit);
};
var resolveLivenessMinScoreUnit = (record) => {
  if (!record)
    return 0.65;
  const pf = record.projectFlow;
  return pf?.liveness?.minScore ?? pf?.onboardingSettings?.liveness?.livenessMinScore ?? 0.65;
};
var livenessMinScoreDisplayPercent = (record) => {
  if (!record)
    return null;
  const fromPerson = record.person?.livenessScore;
  const fromBio = record.biometricValidation?.livenessScore;
  if (fromPerson == null && fromBio == null)
    return null;
  return scoreToPercent(normalizeUnitScore(resolveLivenessMinScoreUnit(record)));
};
var resolveCompareStatus = (record) => {
  if (!record)
    return "notApplicable";
  const compare = record.compareFaceVerification;
  const score = compare?.result?.score;
  if (score != null) {
    return normalizeUnitScore(score) >= resolveCompareMinScoreUnit(record) - 1e-3 ? "passed" : "failed";
  }
  if (!record.documentValidation || !record.biometricValidation)
    return "notApplicable";
  return record.documentFace ? "notRun" : "missingDocumentFace";
};
var canRerunCompare = (record) => ["failed", "notRun", "missingDocumentFace"].includes(resolveCompareStatus(record));
var DOCUMENT_FACE_REASONS = /* @__PURE__ */ new Set(["document_face_not_provided"]);
var documentFaceReasonKey = (record) => {
  const reason = record?.documentValidation?.documentFaceReason;
  if (!reason || !DOCUMENT_FACE_REASONS.has(reason))
    return null;
  return `smartEnrollProjects.recordDetail.documentFaceReason.${reason}`;
};
var LIVENESS_QUALITY_REASONS = /* @__PURE__ */ new Set([
  "face_close_to_border",
  "face_not_centered",
  "face_occluded",
  "face_rotation_too_large",
  "face_too_close",
  "face_too_far",
  "multiple_faces_detected",
  "no_face_detected",
  "poor_lighting"
]);
var LIVENESS_LABELLED_REASONS = /* @__PURE__ */ new Set([...LIVENESS_QUALITY_REASONS, "liveness_failed", "liveness_error"]);
var livenessFailureReasonKey = (raw) => {
  if (typeof raw !== "string" || !raw.trim())
    return "liveness_error";
  const code = raw.trim().replace(/^\d{3}:/, "");
  return LIVENESS_LABELLED_REASONS.has(code) ? code : "liveness_error";
};
var PROVIDER_REASON_CODES = {
  ERR_LIVENESS_FACE_CLOSE_TO_BORDER: "face_close_to_border",
  ERR_LIVENESS_FACE_TOO_SMALL: "face_too_far",
  ERR_MULTIPLE_FACES_DETECTED: "multiple_faces_detected",
  ERR_NO_FACE_DETECTED: "no_face_detected"
};
var reasonFromCapturedFrame = (face) => {
  const stored = face?.failedReason?.message;
  if (typeof stored !== "string")
    return null;
  const detail = stored.replace(/^\d{3}:/, "").split("@").slice(1).join("@").trim();
  if (!detail)
    return null;
  if (PROVIDER_REASON_CODES[detail])
    return PROVIDER_REASON_CODES[detail];
  return Number.isFinite(Number(detail)) ? "liveness_failed" : null;
};
var LIVENESS_NEAR_MISS_MARGIN_PERCENT = 15;
var DEFAULT_LIVENESS_ATTEMPT_LIMIT = 3;
var livenessScoreBand = (scorePercent, thresholdPercent) => {
  if (scorePercent == null || thresholdPercent == null)
    return null;
  return scorePercent >= thresholdPercent - LIVENESS_NEAR_MISS_MARGIN_PERCENT ? "nearMiss" : "farMiss";
};
var resolveLivenessAttemptLimit = (record) => {
  const flow = record?.projectFlow;
  return flow?.liveness?.attemptLimit ?? flow?.onboardingSettings?.liveness?.maxAttempts ?? DEFAULT_LIVENESS_ATTEMPT_LIMIT;
};
var livenessAttemptUsage = (record) => {
  const attempts = buildFailedBiometricAttempts(record);
  return {
    used: attempts.filter((attempt) => attempt.consumedAttempt).length,
    limit: resolveLivenessAttemptLimit(record),
    captures: attempts.length
  };
};
var buildFailedBiometricAttempts = (record) => {
  const failed = record?.failedBiometricValidations ?? [];
  const thresholdPercent = scoreToPercent(normalizeUnitScore(resolveLivenessMinScoreUnit(record)));
  return failed.map((attempt, index) => {
    const stored = typeof attempt?.["failedReason"] === "string" ? attempt["failedReason"] : null;
    const reason = stored ?? reasonFromCapturedFrame(attempt?.["face"]);
    const isQuality = reason != null && LIVENESS_QUALITY_REASONS.has(reason);
    const rawScore = attempt?.["livenessScore"];
    const score = rawScore == null ? null : normalizeUnitScore(Number(rawScore));
    const face = attempt?.["face"];
    const updatedAt = attempt?.["updatedAt"] ?? attempt?.["createdAt"];
    const scorePercent = isQuality || score == null || !Number.isFinite(score) ? null : scoreToPercent(score);
    return {
      attemptNumber: index + 1,
      consumedAttempt: !isQuality,
      face: face && typeof face === "object" && (face.base64 || face.url) ? face : null,
      isQuality,
      reasonKey: reason && LIVENESS_LABELLED_REASONS.has(reason) ? reason : "liveness_error",
      scorePercent,
      scoreBand: livenessScoreBand(scorePercent, thresholdPercent),
      updatedAt: typeof updatedAt === "string" ? updatedAt : null
    };
  });
};
var DOCUMENT_FAILURE_REASONS = /* @__PURE__ */ new Set([
  "document_number_is_not_extracted",
  "document_type_not_detected",
  "existing_document_validation_with_document_number",
  "image_is_required",
  "insecure_image_url",
  "prompt_template_not_found",
  // What the funnel aggregation labels a failure that recorded no reason at all.
  "unspecified"
]);
var OCR_ROW_EXCLUDED_KEYS = /* @__PURE__ */ new Set(["category", "country", "documentCategory", "documentType", "extractedText"]);
var OCR_ROW_MAX_LENGTH = 120;
var documentFailureReasonKey = (raw) => {
  if (typeof raw !== "string" || !raw.trim())
    return "unspecified";
  const code = raw.trim().replace(/^\d{3}:/, "");
  return DOCUMENT_FAILURE_REASONS.has(code) ? code : "scan_failed";
};
var ocrRowLabel = (key) => key.replace(/([A-Z])/g, " $1").replace(/^./, (character) => character.toUpperCase());
var buildOcrRows = (ocr) => {
  if (!ocr || typeof ocr !== "object")
    return [];
  const rows = [];
  for (const [key, value] of Object.entries(ocr)) {
    if (OCR_ROW_EXCLUDED_KEYS.has(key) || key.startsWith("_") || key.startsWith("$"))
      continue;
    if (value == null || typeof value === "object" || typeof value === "function")
      continue;
    const text = String(value).trim();
    if (!text || text.length > OCR_ROW_MAX_LENGTH)
      continue;
    rows.push({ key: ocrRowLabel(key), value: text });
  }
  return rows.sort((a, b) => (ORDER_OCR_BY[b.key] || 1) - (ORDER_OCR_BY[a.key] || 1));
};
var buildFailedDocumentAttempts = (record) => {
  const failed = record?.failedDocumentValidations ?? [];
  return failed.map((attempt, index) => {
    const read = (key) => {
      const value = attempt?.[key];
      return typeof value === "string" && value.trim() ? value.trim() : null;
    };
    const fields = [];
    for (const key of ["documentType", "documentCategory", "country", "status", "inputMethod"]) {
      const value = read(key);
      if (value)
        fields.push({ key, value });
    }
    const documentFace = attempt?.["documentFace"];
    const updatedAt = read("updatedAt") ?? read("createdAt");
    return {
      attemptNumber: index + 1,
      reasonKey: documentFailureReasonKey(attempt?.["failedReason"]),
      fields,
      ocrRows: buildOcrRows(attempt?.["OCRExtraction"]),
      frontUrl: read("url"),
      backUrl: read("backUrl"),
      documentFaceBase64: typeof documentFace?.base64 === "string" ? documentFace.base64 : null,
      updatedAt
    };
  });
};
var isNameVerificationPerformed = (record) => {
  const docVal = record?.documentValidation;
  return docVal?.scoreValidated === true && docVal?.imageValidated === true;
};
var UNDETECTED_DOCUMENT_TYPES = /* @__PURE__ */ new Set(["", "unknown", "null", "undefined", "n/a", "na"]);
var isDocumentTypeUndetected = (record) => {
  const docVal = record?.documentValidation;
  return UNDETECTED_DOCUMENT_TYPES.has(String(docVal?.documentType ?? "").trim().toLowerCase());
};
var nameVerificationNotPerformedReason = (record) => {
  if (isNameVerificationPerformed(record))
    return null;
  const docVal = record?.documentValidation;
  const reason = docVal?.infoValidationSupportedReason;
  if (typeof reason === "string" && reason.trim().length)
    return reason.trim();
  if (!docVal)
    return null;
  return UNDETECTED_DOCUMENT_TYPES.has(String(docVal.documentType ?? "").trim().toLowerCase()) ? "document_type_not_detected" : null;
};
var NAME_SKIP_REASONS = /* @__PURE__ */ new Set([
  "document_not_supported",
  "document_type_not_detected",
  "validation_not_available",
  "invalid_name_response_from_api",
  "manual_review"
]);
var nameVerificationSkip = (record) => {
  const reason = nameVerificationNotPerformedReason(record);
  if (!reason)
    return null;
  const docVal = record?.documentValidation;
  return {
    key: `smartEnrollProjects.recordDetail.nameMatchReason.${NAME_SKIP_REASONS.has(reason) ? reason : "unknown"}`,
    params: {
      type: docVal?.documentType?.trim() || "\u2014",
      country: docVal?.country?.trim() || "\u2014",
      reason
    }
  };
};
var FULL_NAME_ALIASES = ["fullName", "name"];
var FIRST_NAME_ALIASES = ["firstName", "firstNames", "nombres", "givenName", "givenNames"];
var LAST_NAME_ALIASES = ["lastName", "lastNames", "apellidos", "surname", "surnames", "familyName"];
var readNameAlias = (holder, aliases) => {
  for (const key of aliases) {
    const value = holder[key];
    if (typeof value === "string" && value.trim())
      return value.trim();
  }
  return "";
};
var recordFullName = (record, source) => {
  const docVal = record?.documentValidation;
  const holder = source === "document" ? docVal?.OCRExtraction : record?.informationValidation;
  if (!holder)
    return null;
  const composed = readNameAlias(holder, FULL_NAME_ALIASES) || [readNameAlias(holder, FIRST_NAME_ALIASES), readNameAlias(holder, LAST_NAME_ALIASES)].filter(Boolean).join(" ");
  return composed || null;
};
var GOVERNMENT_NAME_KEYS = /* @__PURE__ */ new Set(["firstName", "lastName", "fullName", "arrayName"]);
var GOVERNMENT_LOOKUP_KEYS = /* @__PURE__ */ new Set(["documentType", "documentNumber", "validatedAt"]);
var governmentNameResponse = (record) => {
  const docVal = record?.documentValidation;
  const raw = docVal?.scoreValidation;
  if (!raw || typeof raw !== "object")
    return null;
  const read = (key) => {
    const value = raw[key];
    if (typeof value === "string" && value.trim())
      return value.trim();
    if (typeof value === "number")
      return String(value);
    return null;
  };
  const extras = [];
  for (const [key, value] of Object.entries(raw)) {
    if (key.startsWith("_") || key.startsWith("$"))
      continue;
    if (GOVERNMENT_NAME_KEYS.has(key) || GOVERNMENT_LOOKUP_KEYS.has(key))
      continue;
    if (value == null || value === "" || typeof value === "object" || typeof value === "function")
      continue;
    extras.push({ key, value: String(value) });
  }
  const response = {
    fullName: read("fullName"),
    firstName: read("firstName"),
    lastName: read("lastName"),
    documentType: read("documentType"),
    documentNumber: read("documentNumber"),
    validatedAt: read("validatedAt"),
    extras: extras.sort((a, b) => a.key.localeCompare(b.key))
  };
  const hasContent = response.fullName || response.firstName || response.lastName || response.documentNumber || response.extras.length > 0;
  return hasContent ? response : null;
};
var manualNameReviewDecision = (record) => {
  const docVal = record?.documentValidation;
  const decision = docVal?.manualNameReview?.decision;
  return decision === "match" || decision === "mismatch" ? decision : null;
};
var buildManualVerificationReasons = (record) => {
  if (!record || record.status !== "NEEDS_MANUAL_VERIFICATION")
    return [];
  const reasons = [];
  const resolvedCompareMin = resolveCompareMinScoreUnit(record);
  const resolvedLivenessMin = resolveLivenessMinScoreUnit(record);
  const compare = record.compareFaceVerification;
  if (compare?.result) {
    const storedMin = compare.result.compare_min_score;
    const score = normalizeUnitScore(compare.result.score);
    const isStale = storedMin != null && Math.abs(storedMin - resolvedCompareMin) > 1e-3;
    if (isStale) {
      reasons.push({
        key: "smartEnrollProjects.recordDetail.manualReason.staleThreshold",
        params: { stored: scoreToPercent(storedMin), configured: scoreToPercent(resolvedCompareMin) }
      });
    }
    if (score < resolvedCompareMin - 1e-3) {
      reasons.push({
        key: "smartEnrollProjects.recordDetail.manualReason.faceCompareFailed",
        params: {
          score: scoreToPercent(score),
          threshold: scoreToPercent(resolvedCompareMin)
        }
      });
    }
  } else {
    const compareStatus = resolveCompareStatus(record);
    if (compareStatus === "missingDocumentFace") {
      reasons.push({ key: "smartEnrollProjects.recordDetail.manualReason.compareNoDocumentFace" });
    } else if (compareStatus === "notRun") {
      reasons.push({ key: "smartEnrollProjects.recordDetail.manualReason.compareNotRun" });
    }
  }
  const livenessScore = record.person?.livenessScore ?? record.biometricValidation?.livenessScore;
  if (livenessScore != null && livenessScore <= resolvedLivenessMin) {
    reasons.push({
      key: "smartEnrollProjects.recordDetail.manualReason.livenessFailed",
      params: { score: scoreToPercent(livenessScore), threshold: scoreToPercent(resolvedLivenessMin) }
    });
  }
  const docVal = record.documentValidation;
  const nameMatchPct = docVal?.fullNameMatchPercentage;
  if (isNameVerificationPerformed(record) && nameMatchPct != null && nameMatchPct < 80) {
    reasons.push({
      key: "smartEnrollProjects.recordDetail.manualReason.namesMismatch",
      params: { score: nameMatchPct }
    });
  }
  const docStatus = docVal?.status;
  if (docStatus === "NEEDS_MANUAL_VERIFICATION") {
    reasons.push({
      key: "smartEnrollProjects.recordDetail.manualReason.documentUnverified",
      params: { status: docStatus }
    });
  }
  const docType = docVal?.documentType;
  if (docVal?.documentCategory === "Unknown" && (!docType || docType === "Unknown")) {
    reasons.push({ key: "smartEnrollProjects.recordDetail.manualReason.documentCategoryUnknown" });
  }
  const mvReason = docVal?.manualVerificationReason;
  if (mvReason === "validation_timeout") {
    reasons.push({ key: "smartEnrollProjects.recordDetail.manualReason.validationTimeout" });
  } else if (mvReason === "manual_review_requested") {
    reasons.push({ key: "smartEnrollProjects.recordDetail.manualReason.manualReviewRequested" });
  } else if (mvReason) {
    reasons.push({
      key: "smartEnrollProjects.recordDetail.manualReason.generic",
      params: { reason: mvReason }
    });
  }
  return reasons;
};
var showNameVerificationSection = (project, record) => {
  if (!record?.informationValidation || !record.documentValidation)
    return false;
  const flow = record.projectFlow;
  const v3 = project?.version === 3;
  const documents = flow?.documents;
  const onboardingDoc = flow?.onboardingSettings;
  return (v3 && !!documents?.informationVerification || !v3 && !!onboardingDoc?.document?.verifyNames) && !!record.informationValidation && !!record.documentValidation;
};
var OTP_DISABLED_GATEWAYS = /* @__PURE__ */ new Set(["none", "", "off", "disabled"]);
var isOtpGatewayConfigured = (record, channel) => {
  const signUpForm = record?.projectFlow?.signUpForm;
  const gateway = signUpForm?.[channel === "email" ? "emailGateway" : "phoneGateway"];
  if (typeof gateway !== "string")
    return false;
  return !OTP_DISABLED_GATEWAYS.has(gateway.trim().toLowerCase());
};
var resolveOtpStepState = (record, channel) => {
  if (!record)
    return "pending";
  const value = channel === "email" ? record.email : record.phone;
  const validation = channel === "email" ? record.emailValidation : record.phoneValidation;
  if (!value && !validation)
    return "pending";
  if (validation?.status === "validated")
    return "ok";
  return isOtpGatewayConfigured(record, channel) ? "warn" : "info";
};

export {
  pickEnrollmentFaceMedia,
  cleanOcrExtraction,
  normalizeUnitScore,
  scoreToPercent,
  compareMinScoreDisplayPercent,
  resolveLivenessMinScoreUnit,
  livenessMinScoreDisplayPercent,
  resolveCompareStatus,
  canRerunCompare,
  documentFaceReasonKey,
  livenessFailureReasonKey,
  livenessAttemptUsage,
  buildFailedBiometricAttempts,
  documentFailureReasonKey,
  buildFailedDocumentAttempts,
  isNameVerificationPerformed,
  isDocumentTypeUndetected,
  nameVerificationSkip,
  recordFullName,
  governmentNameResponse,
  manualNameReviewDecision,
  buildManualVerificationReasons,
  showNameVerificationSection,
  resolveOtpStepState
};
//# sourceMappingURL=chunk-K3CMKHGC.js.map
