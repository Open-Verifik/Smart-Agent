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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

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
      populates: ["projectFlow.project", "batchConfigurations"],
      populateSelects: '{"project":"name","projectFlow":"project name type","batchConfigurations":"name country executor"}'
    });
    return this._http.sendRequest("get", `${this.baseUrl}/v2/webhooks`, q);
  }
  getDetails(id, projectFlow) {
    const params = {
      eventStatistics: 30,
      populates: ["projectFlow.project", "batchConfigurations"],
      populateSelects: '{"project":"name","projectFlow":"project name type","batchConfigurations":"name country executor"}'
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
  test(url, type) {
    const body = { url };
    if (type)
      body.type = type;
    return this._http.sendRequest("post", `${this.baseUrl}/v2/webhooks/test`, body);
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
//# sourceMappingURL=chunk-V3LBSTKW.js.map
