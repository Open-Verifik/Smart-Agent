import {
  HttpWrapperService
} from "./chunk-F5BVEUVX.js";
import {
  environment
} from "./chunk-KTYFS5OT.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-I5BUD46C.js";

// src/app/modules/smart-tools/communication/message-preview.util.ts
var MASKED_OTP = "*** ***";
var WHATSAPP_OTP_PREVIEW = {
  en: "{code}. Thank you for your request, you can Verify your code in {section}",
  es: "{code}. Gracias por tu solicitud, puedes Verificar tu c\xF3digo en {section}",
  fr: "{code}. Merci pour votre demande, vous pouvez V\xE9rifiez votre code dans {section}",
  pt: "{code}. Obrigado por sua solicita\xE7\xE3o, voc\xEA pode Verificar seu c\xF3digo em {section}"
};
var SMS_OTP_PREVIEW = {
  en: "{section} - Thank you for your request {code}. You can continue your process in {section}",
  es: "{section} - Gracias por tu solicitud {code}. Puedes continuar tu proceso en {section}",
  fr: "{section} - Merci pour votre demande {code}. Vous pouvez poursuivre votre processus dans {section}",
  pt: "{section} - Obrigado por sua solicita\xE7\xE3o {code}. Voc\xEA pode continuar seu processo em {section}"
};
var resolveMessageSource = (row) => {
  if (row?.source === "manual")
    return "manual";
  if (row?.appRegistration || row?.type === "onboarding")
    return "smart_enroll";
  if (row?.type === "login")
    return "smart_access";
  return "flow";
};
var formatMessagePhone = (row) => `${row?.countryCode || ""}${row?.phone || ""}`;
var resolveSenderTitle = (row, fallback = "Verifik") => {
  const fromPhoneData = row?.phoneData?.title;
  const fromProject = row?.project?.name;
  const raw = `${fromPhoneData || fromProject || fallback}`.trim();
  return raw.substring(0, 15).split(".")[0] || fallback;
};
var buildOtpPreviewBody = (phoneGateway, section, language = "en", code = MASKED_OTP) => {
  const lang = `${language || "en"}`.toLowerCase().slice(0, 2);
  const templates = phoneGateway === "sms" ? SMS_OTP_PREVIEW : WHATSAPP_OTP_PREVIEW;
  const template = templates[lang] || templates.en;
  return template.split("{section}").join(section || "Verifik").split("{code}").join(code);
};

// src/app/modules/smart-tools/communication/phone-validations.service.ts
var PhoneValidationsService = class _PhoneValidationsService {
  constructor() {
    this._http = inject(HttpWrapperService);
  }
  get baseUrl() {
    return environment.apiUrl;
  }
  list(params) {
    const query = {
      where_phoneGateway: params.phoneGateway,
      page: params.page ?? 1,
      limit: params.limit ?? 20,
      sort: "-createdAt",
      populates: ["project", "projectFlow", "appRegistration"],
      populateSelects: '{"project":"name","projectFlow":"type name","appRegistration":"_id"}'
    };
    if (params.like_phone?.trim()) {
      query.like_phone = params.like_phone.trim();
    }
    if (params.where_source) {
      query.where_source = params.where_source;
    }
    if (params.where_status) {
      query.where_status = params.where_status;
    }
    return this._http.sendRequest("get", `${this.baseUrl}/v2/phone-validations`, query);
  }
  getById(id) {
    return this._http.sendRequest("get", `${this.baseUrl}/v2/phone-validations/${id}`, {
      populates: ["project", "projectFlow", "appRegistration"],
      populateSelects: '{"project":"name","projectFlow":"type name","appRegistration":"_id"}'
    });
  }
  sendManual(body) {
    return this._http.sendRequest("post", `${this.baseUrl}/v2/phone-validations/manual`, body);
  }
  /**
   * Validate a pending OTP for a manual (or filtered) phone validation.
   */
  verify(body) {
    return this._http.sendRequest("put", `${this.baseUrl}/v2/phone-validations`, body);
  }
  static {
    this.\u0275fac = function PhoneValidationsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PhoneValidationsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PhoneValidationsService, factory: _PhoneValidationsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PhoneValidationsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  MASKED_OTP,
  resolveMessageSource,
  formatMessagePhone,
  resolveSenderTitle,
  buildOtpPreviewBody,
  PhoneValidationsService
};
//# sourceMappingURL=chunk-KE2CZ2A2.js.map
