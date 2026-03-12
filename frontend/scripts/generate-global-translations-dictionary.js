/**
 * Generate global-translations-dictionary.json from global-generic.json.
 * Creates specific translations for all 113 generic endpoints in 7 languages.
 * Run: node scripts/generate-global-translations-dictionary.js
 */
const fs = require("fs");
const path = require("path");

const genericPath = path.join(__dirname, "../global-generic.json");
const dictPath = path.join(__dirname, "global-translations-dictionary.json");

const COUNTRY_NAMES = {
  usa: { en: "USA", es: "Estados Unidos", fr: "États-Unis", pt: "EUA", ja: "アメリカ", ko: "미국", zh: "美国" },
  mexico: { en: "Mexico", es: "México", fr: "Mexique", pt: "México", ja: "メキシコ", ko: "멕시코", zh: "墨西哥" },
  peru: { en: "Peru", es: "Perú", fr: "Pérou", pt: "Peru", ja: "ペルー", ko: "페루", zh: "秘鲁" },
  ecuador: { en: "Ecuador", es: "Ecuador", fr: "Équateur", pt: "Equador", ja: "エクアドル", ko: "에콰도르", zh: "厄瓜多尔" },
  chile: { en: "Chile", es: "Chile", fr: "Chili", pt: "Chile", ja: "チリ", ko: "칠레", zh: "智利" },
  colombia: { en: "Colombia", es: "Colombia", fr: "Colombie", pt: "Colômbia", ja: "コロンビア", ko: "콜롬비아", zh: "哥伦比亚" },
  venezuela: { en: "Venezuela", es: "Venezuela", fr: "Venezuela", pt: "Venezuela", ja: "ベネズエラ", ko: "베네수엘라", zh: "委内瑞拉" },
  panama: { en: "Panama", es: "Panamá", fr: "Panama", pt: "Panamá", ja: "パナマ", ko: "파나마", zh: "巴拿马" },
  costarica: { en: "Costa Rica", es: "Costa Rica", fr: "Costa Rica", pt: "Costa Rica", ja: "コスタリカ", ko: "코스타리카", zh: "哥斯达黎加" },
  brasil: { en: "Brazil", es: "Brasil", fr: "Brésil", pt: "Brasil", ja: "ブラジル", ko: "브라질", zh: "巴西" },
  argentina: { en: "Argentina", es: "Argentina", fr: "Argentine", pt: "Argentina", ja: "アルゼンチン", ko: "아르헨티나", zh: "阿根廷" },
  bolivia: { en: "Bolivia", es: "Bolivia", fr: "Bolivie", pt: "Bolívia", ja: "ボリビア", ko: "볼리비아", zh: "玻利维亚" },
  paraguay: { en: "Paraguay", es: "Paraguay", fr: "Paraguay", pt: "Paraguai", ja: "パラグアイ", ko: "파라과이", zh: "巴拉圭" },
  spain: { en: "Spain", es: "España", fr: "Espagne", pt: "Espanha", ja: "スペイン", ko: "스페인", zh: "西班牙" },
  canada: { en: "Canada", es: "Canadá", fr: "Canada", pt: "Canadá", ja: "カナダ", ko: "캐나다", zh: "加拿大" },
  el_salvador: { en: "El Salvador", es: "El Salvador", fr: "Salvador", pt: "El Salvador", ja: "エルサルバドル", ko: "엘살바도르", zh: "萨尔瓦多" },
  guatemala: { en: "Guatemala", es: "Guatemala", fr: "Guatemala", pt: "Guatemala", ja: "グアテマラ", ko: "과테말라", zh: "危地马拉" },
  honduras: { en: "Honduras", es: "Honduras", fr: "Honduras", pt: "Honduras", ja: "ホンジュラス", ko: "온두라스", zh: "洪都拉斯" },
  uruguay: { en: "Uruguay", es: "Uruguay", fr: "Uruguay", pt: "Uruguai", ja: "ウルグアイ", ko: "우루과이", zh: "乌拉圭" },
  republica_dominicana: { en: "Dominican Republic", es: "República Dominicana", fr: "République Dominicaine", pt: "República Dominicana", ja: "ドミニカ共和国", ko: "도미니카 공화국", zh: "多米尼加共和国" },
  world: { en: "Global", es: "Global", fr: "Mondial", pt: "Global", ja: "グローバル", ko: "글로벌", zh: "全球" },
};

const LANGS = ["en", "es", "fr", "pt", "ja", "ko", "zh"];

/** Code-specific overrides for non-generic names */
const OVERRIDES = {
  feature_kyc_solution: { en: "KYC Solution", es: "Solución KYC" },
  world_api_covid: { en: "Global - COVID Statistics", es: "Global - Estadísticas COVID" },
  feature_passwordless_solution: { en: "Passwordless Authentication", es: "Autenticación sin Contraseña" },
  feature_data_api: { en: "Data API", es: "API de Datos" },
  feature_pdf_generator: { en: "PDF Report Generator", es: "Generador de Informes PDF" },
  usa_api_driver_license_lookup: { en: "USA - Driver License Verification", es: "Estados Unidos - Verificación de Licencia de Conducción" },
  credit_intent: { en: "Credit Purchase Intent", es: "Intención de Compra de Créditos" },
  "ip-lookup": { en: "IP Geolocation Lookup", es: "Consulta de Geoubicación IP" },
  communication_messaging_sms: { en: "SMS Messaging", es: "Mensajería SMS" },
  communication_colombia_messaging_whatsapp: { en: "Colombia - WhatsApp Messaging", es: "Colombia - Mensajería WhatsApp" },
  communication_global_messaging_whatsapp: { en: "Global - WhatsApp Messaging", es: "Global - Mensajería WhatsApp" },
  communication_global_email_otp: { en: "Email OTP", es: "OTP por Correo" },
  usa_api_ssn: { en: "USA - SSN Verification", es: "Estados Unidos - Verificación de SSN" },
  api_autodata_manufacturers: { en: "Vehicle Manufacturers Database", es: "Base de Datos de Fabricantes de Vehículos" },
  world_api_phone_lookup: { en: "Global - Phone Lookup", es: "Global - Consulta de Teléfono" },
  Mexico_api_ine_model_e: { en: "Mexico - INE Model E", es: "México - INE Modelo E" },
  Mexico_api_ine_model_d: { en: "Mexico - INE Model D", es: "México - INE Modelo D" },
  Mexico_api_ine_model_c: { en: "Mexico - INE Model C", es: "México - INE Modelo C" },
  api_autodata_enginer: { en: "Vehicle Engine Database", es: "Base de Datos de Motores de Vehículos" },
  api_autodata_enginer_code: { en: "Vehicle Engine Code Lookup", es: "Consulta de Código de Motor" },
  api_autodata_selection: { en: "Vehicle Selection Database", es: "Base de Datos de Selección de Vehículos" },
  data_finance_incomestatement: { en: "Financial - Income Statement", es: "Financiero - Estado de Resultados" },
  data_finance_balancesheet: { en: "Financial - Balance Sheet", es: "Financiero - Balance General" },
  data_finance_cashflow: { en: "Financial - Cash Flow", es: "Financiero - Flujo de Caja" },
  data_finance_stockprice: { en: "Financial - Stock Price", es: "Financiero - Precio de Acciones" },
  ocr_scan_pro: { en: "OCR Document Scan Pro", es: "Escaneo OCR de Documentos Pro" },
  ocr_scan_gpt: { en: "OCR Document Scan GPT", es: "Escaneo OCR de Documentos GPT" },
  ocr_scan_studio: { en: "OCR Document Scan Studio", es: "Escaneo OCR de Documentos Studio" },
  face_recognition_compare: { en: "Face Comparison", es: "Comparación Facial" },
  face_recognition_compare_live: { en: "Live Face Comparison", es: "Comparación Facial en Vivo" },
  face_recognition_liveness: { en: "Face Liveness Detection", es: "Detección de Vitalidad Facial" },
  face_recognition_search_live_face: { en: "Live Face Search", es: "Búsqueda Facial en Vivo" },
  face_recognition_verify: { en: "Face Verification", es: "Verificación Facial" },
  face_recognition_detect: { en: "Face Detection", es: "Detección Facial" },
  face_recognition_search_crops: { en: "Face Search (Crops)", es: "Búsqueda Facial (Recortes)" },
  face_recognition_search: { en: "Face Search", es: "Búsqueda Facial" },
  face_recognition_search_active_user: { en: "Face Search (Active User)", es: "Búsqueda Facial (Usuario Activo)" },
  face_recognition_detect_face: { en: "Face Detection", es: "Detección Facial" },
  usa_api_company: { en: "USA - Company Lookup", es: "Estados Unidos - Consulta de Empresa" },
  matpis_appointments: { en: "MATPIS Appointments", es: "Citas MATPIS" },
  credit_intent_kyc_passwordless: { en: "KYC Passwordless Credit Intent", es: "Intención de Crédito KYC sin Contraseña" },
  "document-liveness": { en: "Document Liveness Detection", es: "Detección de Vitalidad de Documento" },
  ecuador_api_criminal_history: { en: "Ecuador - Criminal History", es: "Ecuador - Antecedentes Penales" },
  ecuador_api_vehicle_fines: { en: "Ecuador - Vehicle Fines", es: "Ecuador - Multas Vehiculares" },
  api_data_sheet_vehicle: { en: "Vehicle Data Sheet", es: "Ficha Técnica de Vehículo" },
  usa_api_vehicle_lookup_by_vin: { en: "USA - Vehicle Lookup by VIN", es: "Estados Unidos - Consulta de Vehículo por VIN" },
};

/** Biometrics translations */
const BIOMETRICS = {
  biometrics_liveness_3d: { en: "3D Liveness Detection", es: "Detección de Vitalidad 3D" },
  biometrics_estimate_age_3d: { en: "3D Age Estimation", es: "Estimación de Edad 3D" },
  biometrics_check_age_3d: { en: "3D Age Verification", es: "Verificación de Edad 3D" },
  biometrics_enrollment_3d: { en: "3D Biometric Enrollment", es: "Inscripción Biométrica 3D" },
  biometrics_id_scan_only: { en: "ID Document Scan", es: "Escaneo de Documento de Identidad" },
  biometrics_liveness_2d: { en: "2D Liveness Detection", es: "Detección de Vitalidad 2D" },
  biometrics_estimate_age_2d: { en: "2D Age Estimation", es: "Estimación de Edad 2D" },
  biometrics_check_age_2d: { en: "2D Age Verification", es: "Verificación de Edad 2D" },
};

function getCountryFromCode(code) {
  const m = code.match(/^(usa|mexico|peru|ecuador|chile|colombia|venezuela|panama|costarica|brasil|argentina|bolivia|paraguay|spain|canada|el_salvador|guatemala|honduras|uruguay|republica_dominicana|world)/i);
  return m ? m[1].toLowerCase() : null;
}

function getBaseName(code) {
  if (OVERRIDES[code]) return OVERRIDES[code];
  if (BIOMETRICS[code]) return BIOMETRICS[code];
  const country = getCountryFromCode(code);
  if (code.includes("_identity") || code.includes("identity_lookup") || code.includes("citizen_lookup")) {
    return { en: `${country ? COUNTRY_NAMES[country]?.en || code : "National"} - National ID Verification`, es: `${country ? COUNTRY_NAMES[country]?.es || code : "Nacional"} - Verificación de Identidad` };
  }
  if (code.includes("_vehicle") || code.includes("vehicle_lookup")) {
    return { en: `${country ? COUNTRY_NAMES[country]?.en || code : ""} - Vehicle Verification`, es: `${country ? COUNTRY_NAMES[country]?.es || code : ""} - Verificación de Vehículos` };
  }
  if (code.includes("_company") || code.includes("business_lookup")) {
    return { en: `${country ? COUNTRY_NAMES[country]?.en || code : ""} - Company Lookup`, es: `${country ? COUNTRY_NAMES[country]?.es || code : ""} - Consulta de Empresa` };
  }
  if (code.includes("driver_license")) {
    return { en: `${country ? COUNTRY_NAMES[country]?.en || code : ""} - Driver License`, es: `${country ? COUNTRY_NAMES[country]?.es || code : ""} - Licencia de Conducción` };
  }
  return { en: code.replace(/_/g, " "), es: code.replace(/_/g, " ") };
}

const REST_TRANSLATIONS = {
  "Vehicle Verification": { fr: "Vérification de Véhicule", pt: "Verificação de Veículo", ja: "車両検証", ko: "차량 검증", zh: "车辆验证" },
  "National ID Verification": { fr: "Vérification d'Identité Nationale", pt: "Verificação de Identidade Nacional", ja: "国民ID検証", ko: "국민ID 검증", zh: "国民身份证验证" },
  "Company Lookup": { fr: "Recherche d'Entreprise", pt: "Consulta de Empresa", ja: "企業検索", ko: "기업 조회", zh: "企业查询" },
  "Driver License": { fr: "Permis de Conduire", pt: "Licença de Condução", ja: "運転免許", ko: "운전면허", zh: "驾驶证" },
  "Criminal History": { fr: "Antécédents Criminels", pt: "Antecedentes Criminais", ja: "犯罪歴", ko: "범죄 이력", zh: "犯罪记录" },
  "Vehicle Fines": { fr: "Amendes Véhiculaires", pt: "Multas Veiculares", ja: "車両罰金", ko: "차량 벌금", zh: "车辆罚款" },
  "Business Lookup": { fr: "Recherche d'Entreprise", pt: "Consulta Empresarial", ja: "企業検索", ko: "사업 조회", zh: "企业查询" },
  "Complete Identity Verification": { fr: "Vérification d'Identité Complète", pt: "Verificação de Identidade Completa", ja: "完全な本人確認", ko: "완전한 신원 확인", zh: "完整身份验证" },
  "Taxpayer Lookup": { fr: "Recherche de Contribuable", pt: "Consulta de Contribuinte", ja: "納税者検索", ko: "납세자 조회", zh: "纳税人查询" },
};

function translateTitle(baseEn, baseEs, lang) {
  if (lang === "en") return baseEn;
  if (lang === "es") return baseEs;
  const countryMatch = baseEn.match(/^([^-]+) - (.+)$/);
  if (countryMatch) {
    const [, countryPart, rest] = countryMatch;
    const countryKey = Object.keys(COUNTRY_NAMES).find((k) => COUNTRY_NAMES[k].en === countryPart.trim());
    const restTrans = REST_TRANSLATIONS[rest]?.[lang];
    if (countryKey && COUNTRY_NAMES[countryKey][lang]) {
      return restTrans ? `${COUNTRY_NAMES[countryKey][lang]} - ${restTrans}` : `${COUNTRY_NAMES[countryKey][lang]} - ${rest}`;
    }
  }
  return baseEn;
}

function generateEntry(code, baseEn, baseEs) {
  const descEn = "Provides reliable verification and validation services.";
  const descEs = "Proporciona servicios confiables de verificación y validación.";
  const descFr = "Fournit des services de vérification et de validation fiables.";
  const descPt = "Fornece serviços confiáveis de verificação e validação.";
  const descJa = "信頼性の高い検証と検証サービスを提供します。";
  const descKo = "신뢰할 수 있는 검증 및 검증 서비스를 제공합니다.";
  const descZh = "提供可靠的验证和验证服务。";
  const titles = { en: baseEn, es: baseEs };
  LANGS.forEach((l) => { if (!titles[l]) titles[l] = translateTitle(baseEn, baseEs, l); });
  const descs = { en: descEn, es: descEs, fr: descFr, pt: descPt, ja: descJa, ko: descKo, zh: descZh };
  return LANGS.reduce((acc, l) => {
    acc[l] = { title: titles[l], description: descs[l] };
    return acc;
  }, {});
}

const generic = JSON.parse(fs.readFileSync(genericPath, "utf8"));
const dict = {};
for (const { code } of generic) {
  const base = getBaseName(code);
  dict[code] = generateEntry(code, base.en, base.es);
}
fs.writeFileSync(dictPath, JSON.stringify(dict, null, 2), "utf8");
console.log(`Generated dictionary with ${Object.keys(dict).length} entries at ${dictPath}`);
