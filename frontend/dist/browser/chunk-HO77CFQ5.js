import {
  HttpWrapperService
} from "./chunk-3PFCPE6U.js";
import {
  environment
} from "./chunk-BIHX2IQ4.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-LLRZIRCV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/smart-monitor/webhooks/webhooks.service.ts
var WebhooksService = class _WebhooksService {
  constructor() {
    this._http = inject(HttpWrapperService);
  }
  get baseUrl() {
    return environment.apiUrl;
  }
  get(params = {}) {
    const q = __spreadProps(__spreadValues({}, params), {
      populates: ["projectFlow.project"],
      populateSelects: '{"project":"name","projectFlow":"project name type"}'
    });
    return this._http.sendRequest("get", `${this.baseUrl}/v2/webhooks`, q);
  }
  getDetails(id, projectFlow) {
    const params = {
      eventStatistics: 30,
      populates: ["projectFlow.project"],
      populateSelects: '{"project":"name","projectFlow":"project name type"}'
    };
    if (projectFlow) {
      params.projectFlow = projectFlow;
    }
    return this._http.sendRequest("get", `${this.baseUrl}/v2/webhooks/${id}`, params);
  }
  getEvents(query, page = 0, perPage = 10) {
    const params = __spreadProps(__spreadValues({}, query), {
      where_status: "sent",
      sort: "-createdAt",
      populates: ["projectFlow.project"],
      populateSelects: '{ "projectFlow": "project", "project": "name" }'
    });
    if (!params.page || !params.perPage) {
      params.page = page;
      params.perPage = perPage;
    }
    return this._http.sendRequest("get", `${this.baseUrl}/v2/webhook-events`, params);
  }
  getEventById(id) {
    const params = {
      allSameEvents: true,
      where__id: id,
      where_status: "sent",
      populates: ["projectFlow.project"]
    };
    return this._http.sendRequest("get", `${this.baseUrl}/v2/webhook-events/${id}`, params);
  }
  resendWebhookEvent(id) {
    return this._http.sendRequest("put", `${this.baseUrl}/v2/webhook-events/${id}/resend`, {
      allSameEvents: true
    });
  }
  create(body) {
    return this._http.sendRequest("post", `${this.baseUrl}/v2/webhooks`, body);
  }
  getProjectFlows() {
    const params = {
      where_status: "active",
      in_type: ["onboarding", "login", "smartlink"],
      sort: "-type name",
      populates: ["project", "webhook"],
      populateSelects: '{"project":"name branding.logo", "webhook":"name"}'
    };
    return this._http.sendRequest("get", `${this.baseUrl}/v2/project-flows`, params);
  }
  activeWebhook(webhookId, isActive) {
    return this._http.sendRequest("put", `${this.baseUrl}/v2/webhooks/${webhookId}`, { isActive });
  }
  update(webhookId, body) {
    return this._http.sendRequest("put", `${this.baseUrl}/v2/webhooks/${webhookId}`, body);
  }
  delete(webhookId) {
    return this._http.sendRequest("delete", `${this.baseUrl}/v2/webhooks/${webhookId}`);
  }
  test(url) {
    return this._http.sendRequest("post", `${this.baseUrl}/v2/webhooks/test`, { url });
  }
  static {
    this.\u0275fac = function WebhooksService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebhooksService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WebhooksService, factory: _WebhooksService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WebhooksService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  WebhooksService
};
//# sourceMappingURL=chunk-HO77CFQ5.js.map
