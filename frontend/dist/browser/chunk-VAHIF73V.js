// src/app/modules/smart-enroll/biometrics/biometrics.constants.ts
var SMART_ENROLL_PROJECT_TYPE = "onboarding";
var FACE_RECOGNITION_CODES = [
  "face_recognition_compare",
  "face_recognition_compare_live",
  "face_recognition_liveness",
  "face_recognition_search_live_face",
  "face_recognition_verify",
  "face_recognition_detect",
  "face_recognition_search_crops",
  "face_recognition_search",
  "face_recognition_search_active_user",
  "face_recognition_detect_face",
  "face_recognition_compare_with_liveness"
];
var BIOMETRICS_API_CATEGORIES = ["BIOMETRICS", "BIOMETRICS_APIS"];
var isFaceRecognitionCode = (code) => !!code && (code.startsWith("face_recognition_") || FACE_RECOGNITION_CODES.includes(code));
var isBiometricsEndpoint = (category, code) => !!category && BIOMETRICS_API_CATEGORIES.includes(category) || isFaceRecognitionCode(code);

export {
  SMART_ENROLL_PROJECT_TYPE,
  FACE_RECOGNITION_CODES,
  BIOMETRICS_API_CATEGORIES,
  isFaceRecognitionCode,
  isBiometricsEndpoint
};
//# sourceMappingURL=chunk-VAHIF73V.js.map
