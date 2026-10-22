import {
  environment
} from "./chunk-3V5B4ZWC.js";
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
} from "./chunk-YWP2Y7QK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-F5M2C4EZ.js";

// src/app/modules/smart-access/projects/login-flow.util.ts
var smartAccessLoginFlow = (project) => {
  const flows = project?.projectFlows;
  if (!flows?.length)
    return null;
  const loginFlows = flows.filter((f) => f.type === "login");
  if (!loginFlows.length)
    return null;
  const active = loginFlows.find((f) => f.status && f.status !== "draft");
  return active ?? loginFlows[0];
};
var projectHasLoginFlow = (project) => !!(project.projectFlows ?? []).some((f) => f.type === "login");

// src/app/modules/smart-access/projects/smart-access-projects.service.ts
var LOGIN_TYPE = "login";
var CLIENT_LIST_PARAMS = {
  with: ["projectFlows"],
  sort: "-updatedAt",
  populates: ["projectMembers", "projectMembers.staff", "client"],
  select: "_id name client projectFlows branding projectMembers demoMode demoOTP version updatedAt createdAt currentStep lastStep status"
};
var STAFF_LIST_PARAMS = {
  with: ["projectFlows"],
  populates: ["projectMembers", "projectMembers.staff"],
  select: "_id name client projectFlows branding projectMembers demoMode demoOTP updatedAt createdAt currentStep lastStep status"
};
var SmartAccessProjectsService = class _SmartAccessProjectsService {
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
  /** Active Smart Access subscriptions — mirrors enroll plan gate pattern. */
  getActiveSmartAccessPlans() {
    const params = {
      sort: "startDate",
      where_status: "active",
      populates: ["plan"]
    };
    return this._http.get(`${this.apiUrl}/v2/client-smart-access-plans`, {
      params,
      headers: this.authHeaders
    });
  }
  /** Client settings for subscription override checks (JWT-scoped). */
  getClientSettings() {
    return this._http.get(`${this.apiUrl}/v2/client-settings`, {
      params: { findOne: "true" },
      headers: this.authHeaders
    }).pipe(catchError((err) => {
      console.error("Error loading client settings:", err);
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
      type: LOGIN_TYPE,
      populates: ["client", "projectMembers", "projectMembers.staff"]
    };
    return this._http.get(`${this.apiUrl}/v2/projects/${id}`, {
      params,
      headers: this.authHeaders
    }).pipe(map((res) => res?.data ?? null), catchError((err) => {
      console.error("Error loading Smart Access project:", err);
      return throwError(() => err);
    }));
  }
  deleteAppLogin(id) {
    return this._http.delete(`${this.apiUrl}/v2/app-logins/${id}`, { headers: this.authHeaders }).pipe(catchError((err) => {
      console.error("Error deleting app login:", err);
      return throwError(() => err);
    }));
  }
  getAppLogin(id) {
    return this._http.get(`${this.apiUrl}/v2/app-logins/${id}`, {
      headers: this.authHeaders
    }).pipe(map((res) => res?.data ?? null), catchError((err) => {
      console.error("Error loading app login:", err);
      return throwError(() => err);
    }));
  }
  listAppLogins(projectId, page, pageSize, filters = {}) {
    const params = {
      page: String(page),
      perPage: String(pageSize),
      sort: filters.sort?.trim() || "-createdAt",
      where_project: projectId,
      populates: ["emailValidation", "phoneValidation", "biometricValidation", "biometricValidation.face"]
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
    return this._http.get(`${this.apiUrl}/v2/app-logins`, {
      params,
      headers: this.authHeaders
    });
  }
  getProjectFlowWhiteList(payload) {
    return this._http.get(`${this.apiUrl}/v2/project-flow-white-lists`, {
      params: payload,
      headers: this.authHeaders
    });
  }
  deleteWhitelistEntry(id) {
    return this._http.delete(`${this.apiUrl}/v2/project-flow-white-lists/${id}`, {
      headers: this.authHeaders
    });
  }
  updateProjectFlow(flowId, payload) {
    return this._http.put(`${this.apiUrl}/v2/project-flows/${flowId}`, payload, {
      headers: this.authHeaders
    });
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
    return this._http.post(`${this.apiUrl}/v2/project-members`, payload, { headers: this.authHeaders });
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
      params: { sort: "-createdAt", where_staff: staffId },
      headers: this.authHeaders
    }).pipe(map((res) => [...new Set((res?.data ?? []).map((r) => r.project).filter(Boolean))]), catchError((err) => {
      console.error("Error loading project members:", err);
      return throwError(() => err);
    }));
  }
  _getProjectsByIds(ids) {
    const params = __spreadProps(__spreadValues({}, STAFF_LIST_PARAMS), { in__id: ids });
    return this._http.get(`${this.apiUrl}/v2/projects`, { params, headers: this.authHeaders }).pipe(map((res) => (res?.data ?? []).filter(projectHasLoginFlow)), catchError((err) => {
      console.error("Error loading Smart Access projects (staff):", err);
      return throwError(() => err);
    }));
  }
  _getProjectsClient() {
    return this._http.get(`${this.apiUrl}/v2/projects`, {
      params: CLIENT_LIST_PARAMS,
      headers: this.authHeaders
    }).pipe(map((res) => (res?.data ?? []).filter(projectHasLoginFlow)), catchError((err) => {
      console.error("Error loading Smart Access projects:", err);
      return throwError(() => err);
    }));
  }
  static {
    this.\u0275fac = function SmartAccessProjectsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SmartAccessProjectsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SmartAccessProjectsService, factory: _SmartAccessProjectsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmartAccessProjectsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  smartAccessLoginFlow,
  SmartAccessProjectsService
};
//# sourceMappingURL=chunk-KIILQMCM.js.map
