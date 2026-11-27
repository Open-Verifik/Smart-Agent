import { canonicalPostmanCountryName } from './postman-country.util';

export type PostmanHttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const HTTP_METHODS = new Set<PostmanHttpMethod>(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);

/**
 * These routes are POST in verifik-backend. Slim AppFeature rows sometimes omit
 * `method`, label them GET, or tag `group` as `apiRequest` (which used to force GET).
 */
const FORCED_POST_PATHS = new Set([
    'v2/face-recognition/face-validation',
    'v2/ocr/scan-gpt',
    'v2/communication/email',
    'v2/communication/sms',
    'v2/communication/whatsapp',
]);

export interface VerifiedPostBodyField {
    field: string;
    required: boolean;
    description: string;
}

type PostBodyLocale = 'en' | 'es' | 'fr' | 'pt' | 'ko' | 'ja' | 'zh';

const postField = (
    field: string,
    required: boolean,
    descriptions: Record<PostBodyLocale, string>
): VerifiedPostBodyField & { descriptions: Record<PostBodyLocale, string> } => ({
    field,
    required,
    description: descriptions.en,
    descriptions,
});

/**
 * JSON bodies confirmed against verifik-backend.
 * Email OTP, SMS, WhatsApp, and Scan Agent ignore stale catalog fields such as
 * `message`, `country`, and `cropFace`.
 */
const VERIFIED_POST_BODIES: Record<
    string,
    Array<VerifiedPostBodyField & { descriptions: Record<PostBodyLocale, string> }>
> = {
    'v2/communication/email': [
        postField('project', true, {
            en: 'Verifik project that sends the email OTP.',
            es: 'Proyecto de Verifik que envía el OTP por correo.',
            fr: 'Projet Verifik qui envoie le OTP par e-mail.',
            pt: 'Projeto Verifik que envia o OTP por e-mail.',
            ko: '이메일 OTP를 보내는 Verifik 프로젝트.',
            ja: 'メール OTP を送信する Verifik プロジェクト。',
            zh: '发送电子邮件 OTP 的 Verifik 项目。',
        }),
        postField('validationMethod', true, {
            en: 'How the recipient proves they received the code.',
            es: 'Forma en que el destinatario demuestra que recibió el código.',
            fr: 'Façon dont le destinataire prouve qu’il a reçu le code.',
            pt: 'Como o destinatário comprova que recebeu o código.',
            ko: '수신자가 코드를 받았음을 증명하는 방법.',
            ja: '受信者がコードを受け取ったことを示す方法。',
            zh: '收件人证明已收到验证码的方式。',
        }),
        postField('email', true, {
            en: 'Recipient email address.',
            es: 'Correo del destinatario.',
            fr: 'Adresse e-mail du destinataire.',
            pt: 'E-mail do destinatário.',
            ko: '수신자 이메일 주소.',
            ja: '受信者のメールアドレス。',
            zh: '收件人电子邮箱。',
        }),
        postField('type', true, {
            en: 'Email OTP message type.',
            es: 'Tipo de mensaje OTP por correo.',
            fr: 'Type de message OTP par e-mail.',
            pt: 'Tipo da mensagem OTP por e-mail.',
            ko: '이메일 OTP 메시지 유형.',
            ja: 'メール OTP のメッセージ種別。',
            zh: '电子邮件 OTP 的消息类型。',
        }),
    ],
    'v2/communication/sms': [
        postField('phone', true, {
            en: 'Destination phone number, without the country calling code.',
            es: 'Número de teléfono destino, sin el código de país.',
            fr: 'Numéro de téléphone du destinataire, sans l’indicatif pays.',
            pt: 'Telefone de destino, sem o código do país.',
            ko: '국가 코드를 제외한 수신 전화 번호.',
            ja: '国番号を除いた宛先の電話番号。',
            zh: '不含国家区号的目标电话号码。',
        }),
        postField('countryCode', true, {
            en: 'Country calling code, such as 57.',
            es: 'Código de país, por ejemplo 57.',
            fr: 'Indicatif pays, par exemple 57.',
            pt: 'Código do país, por exemplo 57.',
            ko: '국가 코드. 예: 57.',
            ja: '国番号。例: 57。',
            zh: '国家区号，例如 57。',
        }),
    ],
    'v2/communication/whatsapp': [
        postField('phone', true, {
            en: 'Destination WhatsApp phone number, without the country calling code.',
            es: 'Número de WhatsApp destino, sin el código de país.',
            fr: 'Numéro WhatsApp du destinataire, sans l’indicatif pays.',
            pt: 'Número de WhatsApp de destino, sem o código do país.',
            ko: '국가 코드를 제외한 WhatsApp 수신 번호.',
            ja: '国番号を除いた宛先の WhatsApp 番号。',
            zh: '不含国家区号的 WhatsApp 目标号码。',
        }),
        postField('countryCode', true, {
            en: 'Country calling code, such as 57.',
            es: 'Código de país, por ejemplo 57.',
            fr: 'Indicatif pays, par exemple 57.',
            pt: 'Código do país, por exemplo 57.',
            ko: '국가 코드. 예: 57.',
            ja: '国番号。例: 57。',
            zh: '国家区号，例如 57。',
        }),
        postField('whatsappTemplate', false, {
            en: 'WhatsApp template name. Optional.',
            es: 'Nombre de la plantilla de WhatsApp. Opcional.',
            fr: 'Nom du modèle WhatsApp. Facultatif.',
            pt: 'Nome do modelo de WhatsApp. Opcional.',
            ko: 'WhatsApp 템플릿 이름. 선택 사항.',
            ja: 'WhatsApp テンプレート名。任意。',
            zh: 'WhatsApp 模板名称。可选。',
        }),
    ],
    'v2/ocr/scan-gpt': [
        postField('image', true, {
            en: 'Document image as Base64 or a URL.',
            es: 'Imagen del documento en Base64 o una URL.',
            fr: 'Image du document en Base64 ou URL.',
            pt: 'Imagem do documento em Base64 ou URL.',
            ko: 'Base64 또는 URL 형식의 문서 이미지.',
            ja: 'Base64 または URL の書類画像。',
            zh: 'Base64 或 URL 形式的证件图片。',
        }),
        postField('documentType', false, {
            en: 'Document type hint. Optional.',
            es: 'Tipo de documento. Opcional.',
            fr: 'Indication du type de document. Facultatif.',
            pt: 'Tipo de documento. Opcional.',
            ko: '문서 유형 힌트. 선택 사항.',
            ja: '書類種別のヒント。任意。',
            zh: '证件类型提示。可选。',
        }),
        postField('backImage', false, {
            en: 'Back of the document as Base64 or a URL. Optional.',
            es: 'Reverso del documento en Base64 o una URL. Opcional.',
            fr: 'Verso du document en Base64 ou URL. Facultatif.',
            pt: 'Verso do documento em Base64 ou URL. Opcional.',
            ko: 'Base64 또는 URL 형식의 문서 뒷면. 선택 사항.',
            ja: 'Base64 または URL の書類裏面。任意。',
            zh: 'Base64 或 URL 形式的证件背面。可选。',
        }),
        postField('template', false, {
            en: 'Extraction template. Optional.',
            es: 'Plantilla de extracción. Opcional.',
            fr: 'Modèle d’extraction. Facultatif.',
            pt: 'Modelo de extração. Opcional.',
            ko: '추출 템플릿. 선택 사항.',
            ja: '抽出テンプレート。任意。',
            zh: '提取模板。可选。',
        }),
    ],
};

const VERIFIED_POST_BODY_CODES: Record<string, string> = {
    communication_global_email_otp: 'v2/communication/email',
    communication_messaging_sms: 'v2/communication/sms',
    communication_global_messaging_whatsapp: 'v2/communication/whatsapp',
    ocr_scan_gpt: 'v2/ocr/scan-gpt',
};

export const verifiedPostBodyFor = (feature: {
    code?: string | null;
    url?: string | null;
}): VerifiedPostBodyField[] | null => {
    const path = normalizeFeaturePath(feature.url);
    const byPath = VERIFIED_POST_BODIES[path];
    if (byPath) return byPath;
    const code = String(feature.code || '').trim();
    const mapped = VERIFIED_POST_BODY_CODES[code];
    return mapped ? VERIFIED_POST_BODIES[mapped] : null;
};

export const verifiedPostBodyDescription = (
    feature: { code?: string | null; url?: string | null },
    field: string,
    locale: string | null | undefined
): string => {
    const rows = verifiedPostBodyFor(feature);
    const row = rows?.find((item) => item.field === field) as
        | (VerifiedPostBodyField & { descriptions?: Record<PostBodyLocale, string> })
        | undefined;
    if (!row) return '';
    const lang = String(locale || 'en').split('-')[0].toLowerCase() as PostBodyLocale;
    return row.descriptions?.[lang] || row.description;
};

/** These POST routes stay in the explorer even when a live row is catalog-hidden. */
export const staysListedWhenCatalogHidden = (feature: {
    code?: string | null;
    url?: string | null;
}): boolean => verifiedPostBodyFor(feature) != null;

/** Cédula premium stays out of the explorer. Pricing still reads it separately. */
export const POSTMAN_UNLISTED_FEATURE_CODES = new Set(['colombia_api_identity_lookup_premium']);

const normalizeFeaturePath = (url: string | null | undefined): string =>
    String(url || '')
        .trim()
        .replace(/^https?:\/\/[^/]+/i, '')
        .replace(/^\/+/, '')
        .replace(/\/+$/, '');

/**
 * HTTP verb for a Postman row.
 * An explicit verb wins, except the POST routes above (including email, SMS,
 * WhatsApp, and Scan Agent). `apiRequest` without a verb stays GET, including
 * `v3/ec/vehiculo/placa`.
 */
export const resolvePostmanHttpMethod = (feature: {
    method?: string | null;
    group?: string | null;
    endpoint?: string | null;
    url?: string | null;
}): PostmanHttpMethod => {
    const path = normalizeFeaturePath(feature.url);
    if (FORCED_POST_PATHS.has(path)) return 'POST';

    const explicit = String(feature.method || '')
        .trim()
        .toUpperCase() as PostmanHttpMethod;
    if (HTTP_METHODS.has(explicit)) return explicit;

    const fromLabel = String(feature.endpoint || '')
        .trim()
        .match(/^(GET|POST|PUT|PATCH|DELETE)\b/i);
    if (fromLabel) return fromLabel[1].toUpperCase() as PostmanHttpMethod;

    const group = String(feature.group || '').trim();
    if (group && group !== 'apiRequest') return 'POST';
    return 'GET';
};

/**
 * Joins the API origin with an app-feature path without rewriting `v2` / `v3`.
 */
export const joinPostmanFeatureUrl = (
    apiUrl: string,
    featureUrl: string | null | undefined
): string => {
    const raw = String(featureUrl || '').trim();
    if (!raw) return '';
    if (/^https?:\/\//i.test(raw)) return raw;
    const base = apiUrl.replace(/\/+$/, '');
    return `${base}/${raw.replace(/^\/+/, '')}`;
};

/**
 * Sidebar group key. `baseCategory` wins over `group` so `professional_license`,
 * `pep`, `Search`, and `OCR` do not collapse into `APIREQUEST` or `BIOMETRICS`.
 */
export const mapPostmanCategory = (category: string | null | undefined): string => {
    if (!category?.trim()) return 'OTHER';
    return category
        .trim()
        .toUpperCase()
        .replace(/'/g, '')
        .replace(/[\s-]+/g, '_')
        .replace(/_+/g, '_');
};

export const resolvePostmanFeatureCategory = (feature: {
    baseCategory?: string | null;
    category?: string | null;
    group?: string | null;
}): string => {
    const base = feature.baseCategory?.trim();
    if (base && base.toLowerCase() !== 'apirequest') return mapPostmanCategory(base);
    const category = feature.category?.trim();
    if (category && category.toLowerCase() !== 'apirequest') return mapPostmanCategory(category);
    return mapPostmanCategory(feature.group);
};

/**
 * Canonical explorer country. `co` → Colombia. `world`, `World`, and `Global` → world.
 */
export const resolvePostmanFeatureCountry = (country: string | null | undefined): string => {
    const canonical = canonicalPostmanCountryName(country);
    return canonical || String(country || '').trim();
};

export const isUnlistedPostmanFeature = (feature: { code?: string | null } | null | undefined): boolean =>
    POSTMAN_UNLISTED_FEATURE_CODES.has(String(feature?.code || ''));

/**
 * Category heading. Known i18n keys win, including acronyms such as PEP and OCR.
 */
export const formatPostmanCategoryLabel = (
    categoryName: string,
    categories: Record<string, unknown> | null | undefined
): string => {
    if (!categoryName) return '';
    if (categories && typeof categories === 'object') {
        const match =
            categories[categoryName] ||
            categories[categoryName.toLowerCase()] ||
            categories[categoryName.toUpperCase()];
        if (typeof match === 'string' && match.trim()) return match.trim();
    }
    return categoryName
        .toLowerCase()
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
};
