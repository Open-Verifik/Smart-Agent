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
  if (nameMatchPct != null && nameMatchPct < 80) {
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

export {
  pickEnrollmentFaceMedia,
  cleanOcrExtraction,
  normalizeUnitScore,
  scoreToPercent,
  compareMinScoreDisplayPercent,
  livenessMinScoreDisplayPercent,
  buildManualVerificationReasons,
  showNameVerificationSection
};
//# sourceMappingURL=chunk-L5TNKDIK.js.map
