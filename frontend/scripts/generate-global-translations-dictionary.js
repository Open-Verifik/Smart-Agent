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

/** Per-code titles for fr/pt/ja/ko/zh (en/es come from OVERRIDES / BIOMETRICS + translateTitle). */
const ML = (fr, pt, ja, ko, zh) => ({ fr, pt, ja, ko, zh });
const MULTI_LANG_TITLE_BY_CODE = {
  feature_kyc_solution: ML("Solution KYC", "Solução KYC", "KYCソリューション", "KYC 솔루션", "KYC 身份核验方案"),
  feature_passwordless_solution: ML(
    "Authentification sans mot de passe",
    "Autenticação sem senha",
    "パスワードレス認証",
    "비밀번호 없는 인증",
    "无密码身份验证",
  ),
  feature_data_api: ML("API de données", "API de Dados", "データAPI", "데이터 API", "数据 API"),
  feature_pdf_generator: ML(
    "Générateur de rapports PDF",
    "Gerador de Relatórios PDF",
    "PDFレポート生成",
    "PDF 보고서 생성기",
    "PDF 报告生成器",
  ),
  credit_intent: ML(
    "Intention d'achat de crédits",
    "Intenção de Compra de Créditos",
    "クレジット購入意向",
    "크레딧 구매 의도",
    "积分购买意向",
  ),
  "ip-lookup": ML("Géolocalisation IP", "Consulta de Geolocalização IP", "IP位置情報照会", "IP 지리위치 조회", "IP 地理位置查询"),
  communication_messaging_sms: ML("Messagerie SMS", "Mensagens SMS", "SMSメッセージ", "SMS 메시징", "短信消息"),
  communication_global_email_otp: ML("OTP par e-mail", "OTP por E-mail", "メールOTP", "이메일 OTP", "邮件 OTP"),
  credit_intent_kyc_passwordless: ML(
    "Intention de crédit KYC sans mot de passe",
    "Intenção de Crédito KYC sem Senha",
    "KYCパスワードレスクレジット意向",
    "KYC 비밀번호 없는 크레딧 의도",
    "KYC 无密码积分意向",
  ),
  api_autodata_manufacturers: ML(
    "Base fabricants véhicules",
    "Base de Fabricantes de Veículos",
    "車両メーカーデータベース",
    "차량 제조사 데이터베이스",
    "车辆制造商数据库",
  ),
  api_autodata_enginer: ML(
    "Base moteurs véhicules",
    "Base de Motores de Veículos",
    "車両エンジンデータベース",
    "차량 엔진 데이터베이스",
    "车辆发动机数据库",
  ),
  api_autodata_enginer_code: ML(
    "Recherche code moteur",
    "Consulta de Código do Motor",
    "エンジンコード照会",
    "엔진 코드 조회",
    "发动机代码查询",
  ),
  api_autodata_selection: ML(
    "Base sélection véhicules",
    "Base de Seleção de Veículos",
    "車両選択データベース",
    "차량 선택 데이터베이스",
    "车辆选型数据库",
  ),
  ocr_scan_pro: ML("Scan OCR Pro", "Escaneamento OCR Pro", "OCRドキュメントスキャン Pro", "OCR 문서 스캔 Pro", "OCR 文档扫描 Pro"),
  ocr_scan_gpt: ML("Scan OCR GPT", "Escaneamento OCR GPT", "OCRドキュメントスキャン GPT", "OCR 문서 스캔 GPT", "OCR 文档扫描 GPT"),
  ocr_scan_studio: ML(
    "Scan OCR Studio",
    "Escaneamento OCR Studio",
    "OCRドキュメントスキャン Studio",
    "OCR 문서 스캔 Studio",
    "OCR 文档扫描 Studio",
  ),
  face_recognition_compare: ML("Comparaison faciale", "Comparação Facial", "顔照合", "얼굴 비교", "人脸比对"),
  face_recognition_compare_live: ML(
    "Comparaison faciale en direct",
    "Comparação Facial ao Vivo",
    "ライブ顔照合",
    "실시간 얼굴 비교",
    "实时人脸比对",
  ),
  face_recognition_liveness: ML(
    "Détection vivacité faciale",
    "Detecção de Vivacidade Facial",
    "顔ライブネス検出",
    "얼굴 라이브니스 감지",
    "人脸活体检测",
  ),
  face_recognition_search_live_face: ML(
    "Recherche faciale en direct",
    "Busca Facial ao Vivo",
    "ライブ顔検索",
    "실시간 얼굴 검색",
    "实时人脸搜索",
  ),
  face_recognition_verify: ML("Vérification faciale", "Verificação Facial", "顔認証", "얼굴 검증", "人脸核验"),
  face_recognition_detect: ML("Détection faciale", "Detecção Facial", "顔検出", "얼굴 감지", "人脸检测"),
  face_recognition_search_crops: ML(
    "Recherche faciale (recadrages)",
    "Busca Facial (Recortes)",
    "顔検索（クロップ）",
    "얼굴 검색(크롭)",
    "人脸搜索（裁剪）",
  ),
  face_recognition_search: ML("Recherche faciale", "Busca Facial", "顔検索", "얼굴 검색", "人脸搜索"),
  face_recognition_search_active_user: ML(
    "Recherche faciale (utilisateur actif)",
    "Busca Facial (Usuário Ativo)",
    "顔検索（アクティブユーザー）",
    "얼굴 검색(활성 사용자)",
    "人脸搜索（活跃用户）",
  ),
  face_recognition_detect_face: ML("Détection faciale", "Detecção Facial", "顔検出", "얼굴 감지", "人脸检测"),
  api_data_sheet_vehicle: ML(
    "Fiche technique véhicule",
    "Ficha Técnica do Veículo",
    "車両データシート",
    "차량 데이터 시트",
    "车辆数据表",
  ),
  matpis_appointments: ML("Rendez-vous MATPIS", "Agendamentos MATPIS", "MATPIS予約", "MATPIS 예약", "MATPIS 预约"),
  "document-liveness": ML(
    "Détection vivacité document",
    "Detecção de Vivacidade de Documento",
    "書類ライブネス検出",
    "문서 라이브니스 감지",
    "证件活体检测",
  ),
  biometrics_liveness_3d: ML(
    "Détection vivacité 3D",
    "Detecção de Vivacidade 3D",
    "3Dライブネス検出",
    "3D 라이브니스 감지",
    "3D 活体检测",
  ),
  biometrics_estimate_age_3d: ML("Estimation d'âge 3D", "Estimativa de Idade 3D", "3D年齢推定", "3D 나이 추정", "3D 年龄估计"),
  biometrics_check_age_3d: ML("Vérification d'âge 3D", "Verificação de Idade 3D", "3D年齢確認", "3D 나이 검증", "3D 年龄核验"),
  biometrics_enrollment_3d: ML(
    "Enrôlement biométrique 3D",
    "Cadastro Biométrico 3D",
    "3D生体登録",
    "3D 바이오 등록",
    "3D 生物特征注册",
  ),
  biometrics_id_scan_only: ML(
    "Scan de pièce d'identité",
    "Escaneamento de Documento de ID",
    "身分証スキャン",
    "신분증 스캔",
    "证件扫描",
  ),
  biometrics_liveness_2d: ML(
    "Détection vivacité 2D",
    "Detecção de Vivacidade 2D",
    "2Dライブネス検出",
    "2D 라이브니스 감지",
    "2D 活体检测",
  ),
  biometrics_estimate_age_2d: ML("Estimation d'âge 2D", "Estimativa de Idade 2D", "2D年齢推定", "2D 나이 추정", "2D 年龄估计"),
  biometrics_check_age_2d: ML("Vérification d'âge 2D", "Verificação de Idade 2D", "2D年齢確認", "2D 나이 검증", "2D 年龄核验"),
};

function getCountryFromCode(code) {
  if (/^costa_rica/i.test(code)) return "costarica";
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
  "Income Statement": { fr: "Compte de résultat", pt: "Demonstração de resultados", ja: "損益計算書", ko: "손익계산서", zh: "利润表" },
  "Balance Sheet": { fr: "Bilan", pt: "Balanço patrimonial", ja: "貸借対照表", ko: "대차대조표", zh: "资产负债表" },
  "Cash Flow": { fr: "Flux de trésorerie", pt: "Fluxo de caixa", ja: "キャッシュフロー", ko: "현금흐름", zh: "现金流量" },
  "Stock Price": { fr: "Prix de l'action", pt: "Preço das ações", ja: "株価", ko: "주가", zh: "股票价格" },
  "COVID Statistics": { fr: "Statistiques COVID", pt: "Estatísticas COVID", ja: "COVID統計", ko: "COVID 통계", zh: "新冠疫情统计" },
  "Phone Lookup": { fr: "Recherche téléphonique", pt: "Consulta de telefone", ja: "電話番号照会", ko: "전화 번호 조회", zh: "电话查询" },
  "WhatsApp Messaging": { fr: "Messagerie WhatsApp", pt: "Mensagens WhatsApp", ja: "WhatsAppメッセージ", ko: "WhatsApp 메시지", zh: "WhatsApp消息" },
  "Complete Vehicle Information": { fr: "Informations complètes sur le véhicule", pt: "Informações completas do veículo", ja: "車両完全情報", ko: "차량 전체 정보", zh: "车辆完整信息" },
  "Driver License Verification": { fr: "Vérification du permis de conduire", pt: "Verificação da carteira de motorista", ja: "運転免許証の確認", ko: "운전면허 검증", zh: "驾驶证核验" },
};

const FINANCIAL_PREFIX = { fr: "Financier", pt: "Financeiro", ja: "財務", ko: "재무", zh: "财务" };

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
    if (countryPart.trim() === "Financial" && FINANCIAL_PREFIX[lang]) {
      return restTrans ? `${FINANCIAL_PREFIX[lang]} - ${restTrans}` : `${FINANCIAL_PREFIX[lang]} - ${rest}`;
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
  const multi = MULTI_LANG_TITLE_BY_CODE[code];
  if (multi) {
    LANGS.forEach((l) => {
      if (multi[l]) titles[l] = multi[l];
    });
  }
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
