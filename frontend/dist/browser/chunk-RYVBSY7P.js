import {
  HttpParams
} from "./chunk-PNPEHISK.js";

// src/app/modules/smart-enroll/biometrics/http-params.util.ts
var toHttpParams = (params) => {
  let out = new HttpParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === void 0 || value === null || value === "")
      continue;
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item !== void 0 && item !== null && `${item}` !== "") {
          out = out.append(key, String(item));
        }
      });
      continue;
    }
    out = out.set(key, String(value));
  }
  return out;
};

export {
  toHttpParams
};
//# sourceMappingURL=chunk-RYVBSY7P.js.map
