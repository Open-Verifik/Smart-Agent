import {
  environment
} from "./chunk-32YYYLAD.js";
import {
  HttpClient,
  Injectable,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  switchMap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-YTOBX75K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KTESVR3Q.js";

// src/app/modules/smart-enroll/projects/smart-enroll-projects.service.ts
var APP_REGISTRATION_DETAIL_POPULATES = [
  "emailValidation",
  "phoneValidation",
  "biometricValidation",
  "biometricValidation.face",
  "informationValidation",
  "documentFace",
  "documentValidation",
  "documentValidation.documentLiveness",
  "compareFaceVerification",
  "face",
  "person",
  "projectFlow",
  "failedDocumentValidations",
  "failedBiometricValidations.face"
];
var ONBOARDING_TYPE = "onboarding";
var CLIENT_LIST_PARAMS = {
  with: ["projectFlows"],
  sort: "-updatedAt",
  populates: ["projectMembers", "projectMembers.staff", "client"],
  select: "_id name client projectFlows branding projectMembers demoMode demoOTP version updatedAt createdAt"
};
var STAFF_LIST_PARAMS = {
  with: ["projectFlows"],
  populates: ["projectMembers", "projectMembers.staff"],
  select: "_id name client projectFlows branding projectMembers demoMode demoOTP updatedAt createdAt"
};
var SmartEnrollProjectsService = class _SmartEnrollProjectsService {
  constructor() {
    this._http = inject(HttpClient);
  }
  get apiUrl() {
    return environment.apiUrl;
  }
  get authHeaders() {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  parseStoredUser() {
    const raw = localStorage.getItem("user");
    if (!raw)
      return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  /**
   * Active Smart Enroll subscriptions for the current client (non-staff gate).
   * Mirrors client-panel getClientEnrollPlan query.
   */
  getActiveSmartEnrollPlans() {
    const params = {
      sort: "startDate",
      where_status: "active",
      populates: ["plan"]
    };
    return this._http.get(`${this.apiUrl}/v2/client-smart-enroll-plans`, {
      params,
      headers: this.authHeaders
    }).pipe(catchError((err) => {
      console.error("Error loading client smart enroll plans:", err);
      return throwError(() => err);
    }));
  }
  listProjects() {
    const user = this.parseStoredUser();
    if (user?.staff) {
      return this._fetchStaffProjectIds(user.staff).pipe(switchMap((ids) => {
        if (!ids.length)
          return of([]);
        return this._getProjectsByIds(ids);
      }));
    }
    return this._getProjectsClient();
  }
  getProject(id) {
    const params = {
      with: ["projectFlows"],
      type: ONBOARDING_TYPE,
      populates: ["client", "projectMembers", "projectMembers.staff"]
    };
    return this._http.get(`${this.apiUrl}/v2/projects/${id}`, {
      params,
      headers: this.authHeaders
    }).pipe(map((res) => res?.data ?? null), catchError((err) => {
      console.error("Error loading project:", err);
      return throwError(() => err);
    }));
  }
  getAppRegistration(recordId) {
    const params = {
      populates: APP_REGISTRATION_DETAIL_POPULATES
    };
    return this._http.get(`${this.apiUrl}/v2/app-registrations/${recordId}`, {
      params,
      headers: this.authHeaders
    }).pipe(map((res) => res?.data ?? null), catchError((err) => {
      console.error("Error loading app registration:", err);
      return throwError(() => err);
    }));
  }
  deleteAppRegistration(id) {
    return this._http.delete(`${this.apiUrl}/v2/app-registrations/${id}`, { headers: this.authHeaders }).pipe(catchError((err) => {
      console.error("Error deleting app registration:", err);
      return throwError(() => err);
    }));
  }
  deleteAppLogin(id) {
    return this._http.delete(`${this.apiUrl}/v2/app-logins/${id}`, { headers: this.authHeaders }).pipe(catchError((err) => {
      console.error("Error deleting app login:", err);
      return throwError(() => err);
    }));
  }
  /**
   * Download the CV-style enrollment summary as a PDF Blob (and the suggested filename).
   * The backend may set `Content-Disposition: attachment; filename="..."`; we parse it when present.
   */
  exportAppRegistrationCV(id, language) {
    return this._http.post(`${this.apiUrl}/v2/app-registrations/${id}/export-cv`, language ? { language } : {}, {
      headers: __spreadProps(__spreadValues({}, this.authHeaders), {
        Accept: "application/pdf"
      }),
      observe: "response",
      responseType: "blob"
    }).pipe(map((res) => {
      const disposition = res.headers.get("Content-Disposition") || "";
      const match = /filename="?([^";]+)"?/i.exec(disposition);
      const filename = match?.[1] ?? `enrollment-${id}.pdf`;
      return { blob: res.body, filename };
    }), catchError((err) => {
      console.error("Error exporting app registration CV:", err);
      return throwError(() => err);
    }));
  }
  /**
   * Email the CV PDF via Mailgun. Recipients default server-side to the registration email.
   */
  emailAppRegistrationCV(id, payload = {}) {
    return this._http.post(`${this.apiUrl}/v2/app-registrations/${id}/export-cv/email`, payload, { headers: this.authHeaders }).pipe(catchError((err) => {
      console.error("Error emailing app registration CV:", err);
      return throwError(() => err);
    }));
  }
  resendAppRegistrationLink(id, sendEmail) {
    return this._http.post(`${this.apiUrl}/v2/app-registrations/${id}/resend-link`, { sendEmail: sendEmail ? "true" : "false" }, { headers: this.authHeaders }).pipe(catchError((err) => {
      console.error("Error resending app registration link:", err);
      return throwError(() => err);
    }));
  }
  listAppRegistrations(projectId, page, pageSize, filters = {}) {
    const params = {
      page: String(page),
      perPage: String(pageSize),
      sort: filters.sort?.trim() || "-createdAt",
      where_project: projectId,
      populates: [
        "emailValidation",
        "phoneValidation",
        "biometricValidation",
        "biometricValidation.face",
        "face",
        "informationValidation"
      ]
    };
    const term = filters.search?.trim();
    if (term) {
      params["?like_name"] = term;
      params["?like_email"] = term;
      params["?like_phone"] = term;
    }
    const status = filters.status?.trim();
    if (status && status !== "all") {
      params.where_status = status;
    }
    if (filters.createdFrom)
      params.whereGTE_createdAt = filters.createdFrom;
    if (filters.createdTo)
      params.whereLTE_createdAt = filters.createdTo;
    return this._http.get(`${this.apiUrl}/v2/app-registrations`, {
      params,
      headers: this.authHeaders
    }).pipe(catchError((err) => {
      console.error("Error loading app registrations:", err);
      return throwError(() => err);
    }));
  }
  updateProjectFlow(flowId, payload) {
    return this._http.put(`${this.apiUrl}/v2/project-flows/${flowId}`, payload, { headers: this.authHeaders });
  }
  getProjectMembers(projectId) {
    const params = {
      where_project: projectId,
      populates: ["staff"]
    };
    return this._http.get(`${this.apiUrl}/v2/project-members`, {
      params,
      headers: this.authHeaders
    }).pipe(map((res) => res?.data ?? []));
  }
  getStaffList(params) {
    return this._http.get(`${this.apiUrl}/v2/staff`, {
      params,
      headers: this.authHeaders
    }).pipe(map((res) => res?.data ?? []));
  }
  postProjectMember(payload) {
    return this._http.post(`${this.apiUrl}/v2/project-members`, payload, {
      headers: this.authHeaders
    });
  }
  updateProjectMember(memberId, payload) {
    return this._http.put(`${this.apiUrl}/v2/project-members/${memberId}`, payload, {
      headers: this.authHeaders
    });
  }
  deleteProjectMember(memberId) {
    return this._http.delete(`${this.apiUrl}/v2/project-members/${memberId}`, {
      headers: this.authHeaders
    });
  }
  _fetchStaffProjectIds(staffId) {
    return this._http.get(`${this.apiUrl}/v2/project-members`, {
      params: {
        sort: "-createdAt",
        where_staff: staffId
      },
      headers: this.authHeaders
    }).pipe(map((res) => {
      const rows = res?.data ?? [];
      return [...new Set(rows.map((r) => r.project).filter(Boolean))];
    }), catchError((err) => {
      console.error("Error loading project members:", err);
      return throwError(() => err);
    }));
  }
  _getProjectsByIds(ids) {
    const params = __spreadProps(__spreadValues({}, STAFF_LIST_PARAMS), {
      in__id: ids
    });
    return this._http.get(`${this.apiUrl}/v2/projects`, {
      params,
      headers: this.authHeaders
    }).pipe(map((res) => res?.data ?? []), catchError((err) => {
      console.error("Error loading projects (staff):", err);
      return throwError(() => err);
    }));
  }
  _getProjectsClient() {
    return this._http.get(`${this.apiUrl}/v2/projects`, {
      params: CLIENT_LIST_PARAMS,
      headers: this.authHeaders
    }).pipe(map((res) => res?.data ?? []), catchError((err) => {
      console.error("Error loading projects:", err);
      return throwError(() => err);
    }));
  }
  static {
    this.\u0275fac = function SmartEnrollProjectsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartEnrollProjectsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartEnrollProjectsService, factory: _SmartEnrollProjectsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartEnrollProjectsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SmartEnrollProjectsService
};
//# sourceMappingURL=chunk-YSERIMFI.js.map
